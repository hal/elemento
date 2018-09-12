#!/bin/bash
# Script to build, deploy and release Elemento.
#
# Prerequisites
#   - Clean git status (no uncommitted changes in branch 'develop' and 'gwt2')
#   - No tag with the specified version
#
# Parameters
#   1. New version number
#
# What it does
#   1.
#   2.
#   3.
#   4.



ROOT=$PWD
VERSION=$1

function box()
{
  local s="$*"
  tput setaf 3
  echo
  echo
  echo
  echo " -${s//?/-}-
| ${s//?/ } |
| $(tput setaf 4)$s$(tput setaf 3) |
| ${s//?/ } |
 -${s//?/-}-"
  tput sgr 0
}



# Prerequisites
if [ "$#" -ne 1 ]; then
    echo "Illegal number of parameters. Please use $0 <version>"
    exit -1
fi

if git rev-parse -q --verify "refs/tags/$VERSION" >/dev/null; then
    echo "A tag for '$VERSION' already exists."
    exit -1
fi
if git rev-parse -q --verify "refs/tags/$VERSION-gwt2" >/dev/null; then
    echo "A tag for '$VERSION-gwt2' already exists."
    exit -1
fi

git checkout develop
if ! git diff --no-ext-diff --quiet --exit-code; then
    echo "Unable to release. You have uncommitted changes in the branch 'develop'."
    exit -1
fi
git checkout gwt2
if ! git diff --no-ext-diff --quiet --exit-code; then
    echo "Unable to release. You have uncommitted changes in the branch 'gwt2'."
    exit -1
fi



# Release branch 'gwt2'
BRANCH=gwt2
box "Switch to branch '$BRANCH'"
git checkout $BRANCH
git pull origin $BRANCH

box "Build branch '$BRANCH'"
mvn clean install -P samples,testsuite,widget || { echo "Maven build failed" ; exit 1; }

box "Update version to '$VERSION-gwt2'"
./versionBump.sh $VERSION-gwt2
git commit -am "Bump to $VERSION-gwt"

box "Deploy '$VERSION-gwt2'"
mvn deploy -P release,samples,testsuite,widget || { echo "Maven deploy failed" ; exit 1; }
git tag $VERSION-gwt
git push origin $BRANCH
git push origin --tags

box "Back to 'GWT2-SNAPSHOT'"
./versionBump.sh GWT2-SNAPSHOT
git commit -am "Bump to GWT2-SNAPSHOT"
git push origin $BRANCH



# Release branch 'develop'
BRANCH=develop
box "Switch to branch '$BRANCH'"
git checkout $BRANCH
git pull origin $BRANCH

box "Build branch '$BRANCH'"
mvn clean install -P samples,testsuite,widget || { echo "Maven build failed" ; exit 1; }

box "Update version to '$VERSION'"
git flow release start $VERSION
./versionBump.sh $VERSION
git commit -am "Bump to $VERSION"

box "Deploy '$VERSION'"
mvn deploy -P release,samples,testsuite,widget || { echo "Maven deploy failed" ; exit 1; }
git flow release finish -m "$VERSION" $VERSION
git push origin develop
git push origin master
git push origin --tags

box "Back to 'HEAD-SNAPSHOT'"
git checkout $BRANCH
./versionBump.sh HEAD-SNAPSHOT
git commit -am "Bump to HEAD-SNAPSHOT"
git push origin $BRANCH



box "<---=== Elemento successfully released ===--->"
