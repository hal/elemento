#!/bin/bash

# Script to build and push the samples to branch 'gh-pages'
#
# Prerequisites
#   - Clean git status (no uncommitted changes in current branch)
#
# Parameters
#   1. No parameters
#
# What it does
#   1. Build samples
#   2. Push samples to branch 'gh-pages'



ROOT=$PWD
BRANCH=$(git symbolic-ref -q HEAD)
BRANCH=${BRANCH##refs/heads/}
BRANCH=${BRANCH:-HEAD}

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
if ! git diff --no-ext-diff --quiet --exit-code; then
    echo "Cannot deploy to gh-pages. You have uncommitted changes in the current branch."
    exit 1
fi



# Makes sure everything compiles
box "Build Elemento"
mvn clean install -P samples || { echo "Maven build failed" ; exit 1; }



# GWT sample
box "Build GWT sample"
cd samples/gwt
mvn install -P prod || { echo "Maven build failed" ; exit 1; }
cd $ROOT



# J2CL sample
box "Build J2CL sample"
cd samples/j2cl
mvn install -P prod || { echo "Maven build failed" ; exit 1; }
cd $ROOT



# Publishing to gh-pages
box "Publish samples"
rm -rf /tmp/elemento
cd /tmp/
git clone -b gh-pages --single-branch git@github.com:hal/elemento.git
cd elemento
cp -R $ROOT/samples/gwt/target/sample-gwt-*/todo gwt
cp -R $ROOT/samples/j2cl/target/classes/META-INF/resources j2cl
date > .build
git add --all
git commit -am "Update samples"
git push -f origin gh-pages
cd $ROOT



# Done
box "  <<--==  Samples successfully build and published.  ==-->>  "
