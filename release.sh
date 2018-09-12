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

# Steps
box "Switch to branch 'gwt2'"
git checkout gwt2
box "Build branch 'gwt2'"
box "Update version to '$VERSION-gwt2'"
box "Deploy '$VERSION-gwt2'"
box "Update version to 'GWT2-SNAPSHOT'"


box "Switch to branch 'develop'"
git checkout develop
box "Build branch 'develop'"
box "Update version to '$VERSION'"
box "Deploy '$VERSION'"
box "Update version to 'HEAD-SNAPSHOT'"


box "Elemento successfully released"
