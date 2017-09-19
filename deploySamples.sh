#!/bin/bash

# Script to build, deploy and push the samples to branch 'gh-pages'

ROOT=$PWD
BRANCH=$(git symbolic-ref -q HEAD)
BRANCH=${BRANCH##refs/heads/}
BRANCH=${BRANCH:-HEAD}
SAMPLES=( builder dagger errai gin templates )

if ! git diff --no-ext-diff --quiet --exit-code; then
    echo "Cannot deploy to gh-pages. You have uncommitted changes in the current branch."
    exit -1
fi

# Building elemento w/ samples
mvn install -P samples

# Publishing to gh-pages
rm -rf /tmp/elemento
cd /tmp/
git clone -b gh-pages --single-branch git@github.com:hal/elemento.git
cd elemento
for SAMPLE in "${SAMPLES[@]}"
do
    rm -rf ${SAMPLE}
    cp -R ${ROOT}/samples/${SAMPLE}/target/${SAMPLE}-sample-*/${SAMPLE} .
done
date > .build
git add --all
git commit -am "Update samples"
git push -f origin gh-pages
cd ${ROOT}

echo
echo
echo "+--------------------------------------------------------------+"
echo "|                                                              |"
echo "| Elemento samples successfully build, deployed and published. |"
echo "|                                                              |"
echo "+--------------------------------------------------------------+"
echo
