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
SAMPLES=( builder dagger errai gin templates )

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
    exit -1
fi



# Building elemento w/ samples
box "Build samples"
mvn install -P samples



# Publishing to gh-pages
rm -rf /tmp/elemento
cd /tmp/
git clone -b gh-pages --single-branch git@github.com:hal/elemento.git
cd elemento
for SAMPLE in "${SAMPLES[@]}"
do
    box "Push ${SAMPLE} to gh-pages"
    rm -rf ${SAMPLE}
    cp -R ${ROOT}/samples/${SAMPLE}/target/${SAMPLE}-sample-*/${SAMPLE} .
done
date > .build
git add --all
git commit -am "Update samples"
git push -f origin gh-pages
cd ${ROOT}



# Done
box "  <<--==  Samples successfully build and published.  ==-->>  "
