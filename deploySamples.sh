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



# GWT 2.8 sample
box "Build GWT 2.8 sample"
cd samples/gwt28
mvn package -P prod || { echo "Maven build failed" ; exit 1; }
cd $ROOT



# GWT 2.9 sample
box "Build GWT 2.9 sample"
cd samples/gwt29
mvn package -P prod || { echo "Maven build failed" ; exit 1; }
cd $ROOT



# GWT 3.0 sample
box "Build GWT 3.0 sample"
cd samples/gwt30
mvn package -P prod || { echo "Maven build failed" ; exit 1; }
cd $ROOT



# J2CL sample
box "Build J2CL sample"
cd samples/j2cl
mvn package -P prod || { echo "Maven build failed" ; exit 1; }
cd $ROOT



# Crysknife sample
box "Build Crysknife sample"
cd samples/crysknife
mvn package -P prod || { echo "Maven build failed" ; exit 1; }
cd $ROOT



# Publishing to gh-pages
box "Publish samples"
rm -rf /tmp/elemento
cd /tmp/
git clone -b gh-pages --single-branch git@github.com:hal/elemento.git
cd elemento
cp -R $ROOT/samples/gwt28/target/sample-gwt28/todo gwt28
cp -R $ROOT/samples/gwt30/target/sample-gwt29/todo gwt29
cp -R $ROOT/samples/gwt30/target/sample-gwt30/todo gwt30
cp -R $ROOT/samples/j2cl/target/sample-j2cl j2cl
cp -R $ROOT/samples/crysknife/target/sample-crysknife crysknife
date > .build
git add --all
git commit -am "Update samples"
git push -f origin gh-pages
cd $ROOT



# Done
box "  <<--==  Samples successfully build and published.  ==-->>  "
