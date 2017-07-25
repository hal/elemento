#!/bin/bash

# Script to build, deploy and push the samples to branch 'gh-pages'

ROOT=$PWD
BRANCH=$(git symbolic-ref -q HEAD)
BRANCH=${BRANCH##refs/heads/}
BRANCH=${BRANCH:-HEAD}
SAMPLES=( builder errai gin templates )

if ! git diff --no-ext-diff --quiet --exit-code; then
    echo "Cannot deploy to gh-pages. You have uncommitted changes in the current branch."
    exit -1
fi

# Building elemento
mvn install

# Building samples
cd samples
mvn clean install
cd ${ROOT}

# Publishing to gh-pages
rm -rf /tmp/samples
mkdir /tmp/samples
for SAMPLE in "${SAMPLES[@]}"
do
    mv ${SAMPLE}/target/${SAMPLE}-sample-*/${SAMPLE} /tmp/samples/
done
git checkout gh-pages > /dev/null 2>&1
git reset --hard origin/gh-pages > /dev/null 2>&1
for SAMPLE in "${SAMPLES[@]}"
do
    rm -rf ${SAMPLE}
    mv /tmp/samples/${SAMPLE}/ .
done
date > .build
git add --all > /dev/null 2>&1
git commit -am "Update samples" > /dev/null 2>&1
git push -f origin gh-pages > /dev/null 2>&1
git checkout ${BRANCH} > /dev/null 2>&1

echo
echo
echo "+--------------------------------------------------------------+"
echo "|                                                              |"
echo "| Elemento samples successfully build, deployed and published. |"
echo "|                                                              |"
echo "+--------------------------------------------------------------+"
echo
