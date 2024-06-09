#!/usr/bin/env kotlin

@file:DependsOn("com.github.ajalt.clikt:clikt-jvm:4.3.0")
@file:DependsOn("com.lordcodes.turtle:turtle:0.9.0")
@file:DependsOn("io.arrow-kt:arrow-core:1.2.4")
@file:DependsOn("io.github.z4kn4fein:semver-jvm:2.0.0")
@file:Suppress("MemberVisibilityCanBePrivate")

import arrow.core.Either.Companion.catch
import arrow.core.Either.Left
import arrow.core.Either.Right
import arrow.core.EitherNel
import arrow.core.NonEmptyList
import arrow.core.raise.either
import arrow.core.raise.ensure
import arrow.core.raise.zipOrAccumulate
import com.github.ajalt.clikt.core.CliktCommand
import com.github.ajalt.clikt.core.terminal
import com.github.ajalt.clikt.parameters.arguments.argument
import com.github.ajalt.clikt.parameters.arguments.convert
import com.github.ajalt.clikt.parameters.arguments.help
import com.github.ajalt.clikt.parameters.arguments.validate
import com.github.ajalt.clikt.parameters.options.flag
import com.github.ajalt.clikt.parameters.options.help
import com.github.ajalt.clikt.parameters.options.option
import com.github.ajalt.mordant.rendering.TextColors.*
import com.github.ajalt.mordant.terminal.YesNoPrompt
import com.lordcodes.turtle.shellRun
import io.github.z4kn4fein.semver.Version
import io.github.z4kn4fein.semver.toVersionOrNull
import java.lang.Thread.sleep
import kotlin.random.Random
import kotlin.system.exitProcess

/*
 * This is an alternative version of 'release.sh' written in Kotlin
 * It was primarily an experiment to replace the bash script crap with something more readable.
 * There are slightly more lines of code, but hopefully the script reads much better.
 */

// ------------------------------------------------------ error & success types

sealed class ReleaseError(val message: String) {
    data object UncommittedChanges : ReleaseError("You have uncommitted changes.")
    data class TagExists(val tag: String) : ReleaseError("The tag '$tag' already exists.")
}

data class Release(val releaseVersion: Version, val nextVersion: Version) {
    val tag = "v$releaseVersion"
    val snapshot = "$nextVersion-SNAPSHOT"
}

// ------------------------------------------------------ release command

class ReleaseCommand : CliktCommand(name = "release") {

    val dryRun: Boolean by option()
            .flag(default = false)
            .help("Does not release, but only prints the steps")

    val releaseVersion: Version by argument("release-version")
            .help("The release version (as semver)")
            .convert {
                it.toVersionOrNull(strict = false) ?: fail("$it is not a valid semantic version")
            }

    val nextVersion: Version by argument("next-version")
            .help("The next snapshot version (as semver)")
            .convert {
                it.toVersionOrNull(strict = false) ?: fail("$it is not a valid semantic version")
            }.validate {
                require(nextVersion > releaseVersion) {
                    "Next version must be greater than release version"
                }
            }

    override fun run() {
        when (val validate = validate(Release(releaseVersion, nextVersion))) {
            is Left -> die(validate.value)
            is Right -> if (really(validate.value)) {
                release(validate.value)
            } else {
                terminal.warning("\nAborted")
            }
        }
    }

    // ------------------------------------------------------ validation

    fun validate(release: Release): EitherNel<ReleaseError, Release> = either {
        zipOrAccumulate(
                {
                    // If there are no uncommitted changes 'git diff-index' will return 0 and 'isRight()' is true.
                    // Otherwise, the command will return 1 and shellRun() will throw an exception
                    ensure(catch {
                        shellRun("git", listOf("diff-index", "--quiet", "HEAD"))
                    }.isRight()) { ReleaseError.UncommittedChanges }
                },
                {
                    // if the output of 'git -l <tag>' is not empty, the tag already exists
                    ensure(shellRun("git", listOf("tag", "-l", release.tag)).isEmpty()) { ReleaseError.TagExists(release.tag) }
                }
        ) { _, _ -> release }
    }

    fun die(errors: NonEmptyList<ReleaseError>) {
        errors.forEach { terminal.println("${terminal.theme.danger("Error:")} ${it.message}", stderr = true) }
        exitProcess(1)
    }

    // ------------------------------------------------------ release

    fun really(release: Release) = YesNoPrompt("""
        |Codebase is ready to be released.
        |
        |If you decide to continue, this script will
        |
        |   1. Bump the version to ${cyan(release.releaseVersion.toString())}
        |   2. Update the ${cyan("changelog")} (there should already be entries in the ${cyan("Unreleased")} section!)
        |   3. Create a tag for ${cyan(release.tag)}
        |   4. ${cyan("Commit")} and ${cyan("push")} to origin (which will trigger the ${cyan("release workflow")} at GitHub)
        |   5. Bump the version to ${cyan(release.snapshot)}
        |   6. ${cyan("Commit")} and ${cyan("push")} to origin
        |
        |Do you wish to continue
        """.trimMargin(), terminal).ask() ?: false

    fun step(message: String, code: () -> Unit) {
        echo("${yellow("…")} $message", trailingNewline = false)
        if (dryRun) {
            sleep(Random.nextLong(1111, 4444))
        } else {
            code.invoke()
        }
        echo("\r${green("✓")}")
    }

    fun release(release: Release) {
        echo()
        step("Update to version ${release.releaseVersion}") {
            shellRun {
                command("mvn", listOf("-DnewVersion=${release.releaseVersion}", "versions:set"))
                command("mvn", listOf("--projects", "org.patternfly:patternfly-java-core", "--also-make", "generate-sources"))
            }
        }

        step("Update README & changelog") {
            shellRun {
                command("sed", listOf(
                        "-i",
                        "''",
                        "-E",
                        """s/<version>[0-9]+\.[0-9]+\.[0-9]+(.*)<\/version>/<version>${release.releaseVersion}\1<\/version>/""",
                        "docs/*.md"
                ))
                command("mvn", listOf("-DskipModules", "keepachangelog:release"))
            }
        }

        step("Push changes") {
            shellRun {
                git.commitAllChanges("Release ${release.releaseVersion}")
                git.push(remote = "origin", branch = "main")
            }
        }

        step("Push tag") {
            shellRun {
                command("git", listOf("tag", release.tag))
                command("push", listOf("--tags", "origin", "main"))
            }
        }

        step("Update to version ${release.snapshot}") {
            shellRun("mvn", listOf("-DnewVersion=${release.snapshot}", "versions:set"))
        }

        step("Push changes") {
            shellRun {
                git.commitAllChanges("Next is ${release.snapshot}")
                git.push(remote = "origin", branch = "main")
            }
        }

        echo("\n${green("All done")}. Watch the release workflow at https://github.com/hal/elemento/actions/workflows/release.yml")
    }
}

ReleaseCommand().main(args)
