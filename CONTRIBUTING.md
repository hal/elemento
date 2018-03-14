# Contributing to Elemento

We welcome contributions of any kind to Elemento from everyone.

We expect all contributors and users to follow our [Code of Conduct](CODE_OF_CONDUCT.md) when communicating through project channels. These include, but are not limited to: chat, issues, code.

## One time setup

### Create a GitHub account

If you don't have one already, head to https://github.com/

### Git Flow

We use [Git Flow](https://github.com/nvie/gitflow) to manage branches. Although it's no requirement, it helps if you've read and understood the [basic ideas](http://nvie.com/posts/a-successful-git-branching-model/) behind Git Flow. The most important fact is that development happens in the `develop` branch and that the latest stable version is always available in branch `master`.

### Fork Elemento

Fork https://github.com/hal/elemento into your GitHub account.

### Clone your newly forked repository onto your local machine

```bash
git clone git@github.com:[your username]/elemento.git
cd elemento
```

### Add a remote reference to upstream

This makes it easy to pull down changes in the project over time

```bash
git remote add upstream git://github.com/hal/elemento.git
```

## Development Process

This is the typical process you would follow to submit any changes to Elemento.

### Pulling updates from upstream

```bash
git pull --rebase upstream develop
```

> Note that --rebase will automatically move your local commits, if you have
> any, on top of the latest branch you pull from.
> If you don't have any commits it is safe to leave off, but for safety it
> doesn't hurt to use it each time just in case you have a commit you've
> forgotten about!

### Discuss your planned changes (if you want feedback)

 * GitHub Issues - https://github.com/hal/elemento/issues
 * Gitter - https://gitter.im/hal/elemento

### Create a simple topic branch to isolate your work (recommended)

```bash
git checkout -b my_cool_feature
```

### Make the changes

Make whatever code changes, including new tests to verify your change, are necessary and ensure that the build and tests pass. Make sure your code changes apply to the checkstyle rules defined at [build/checkstyle.xml](build/checkstyle.xml):

```bash
mvn clean install
```

> If you're making non code changes, the above step is not required.

### Commit changes

Add whichever files were changed into 'staging' before performing a commit:

```bash
git commit
```

### Rebase changes against develop

Once all your commits for the issue have been made against your local topic branch, we need to rebase it against develop in upstream to ensure that your commits are added on top of the current state of develop. This will make it easier to incorporate your changes into the develop branch, especially if there has been any significant time passed since you rebased at the beginning.

```bash
git pull --rebase upstream develop
```

### Push to your repo

Now that you've sync'd your topic branch with upstream, it's time to push it to your GitHub repo.

```bash
git push origin my_cool_feature
```

### Getting your changes merged into upstream, a pull request

Now your updates are in your GitHub repo, you will need to notify the project that you have code/docs for inclusion.

 * Send a pull request, by clicking the pull request link while in your repository fork
 * After review a maintainer will merge your pull request, update/resolve associated issues, and reply when complete
 * Lastly, switch back to develop from your topic branch and pull the updates

```bash
git checkout develop
git pull upstream develop
```

 * You may also choose to update your origin on GitHub as well

```bash
git push origin
```

### Some tips

Here are some tips on increasing the chance that your pull request is accepted:

 * Write a [good commit message](http://tbaggery.com/2008/04/19/a-note-about-git-commit-messages.html)
 * Include tests that fail without your code, and pass with it
