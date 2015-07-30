#!/bin/bash

# Script to build, deploy and push one of the GWT samples to branch 'gh-pages'

PROGNAME=`basename "$0"`
SAMPLE_NAME=$1
SAMPLE_DIR=samples/${SAMPLE_NAME}
ROOT=$PWD
BRANCH=$(git symbolic-ref -q HEAD)
BRANCH=${BRANCH##refs/heads/}
BRANCH=${BRANCH:-HEAD}

if [ "$#" -ne 1 ]; then
    echo "Illegal number of arguments. Use '$PROGNAME <sample name>'"
    exit 1
fi

if [ ! -d "$SAMPLE_DIR" ]; then
    echo "Sample '$SAMPLE_DIR does no exist."
    exit 1
fi

if ! git diff --no-ext-diff --quiet --exit-code; then
    echo "Cannot deploy to gh-pages. You have uncommited changes in the current branch."
    exit -1
fi

source "$ROOT/spinner.sh"

start_spinner "Building elemento..."
mvn -q install
stop_spinner $?

start_spinner "Building $SAMPLE_DIR..."
cd ${SAMPLE_DIR}
mvn -q clean install
cd ${ROOT}
stop_spinner $?

start_spinner "Publishing to gh-pages..."
rm -rf /tmp/${SAMPLE_NAME}
mv ${SAMPLE_DIR}/target/${SAMPLE_NAME}-sample-*/${SAMPLE_NAME} /tmp/
git checkout gh-pages > /dev/null 2>&1
git reset --hard origin/gh-pages > /dev/null 2>&1
rm -v -rf ${SAMPLE_NAME}
mv -v /tmp/${SAMPLE_NAME}/ .
date > .build
#git add --all > /dev/null 2>&1
#git commit -am "Update $SAMPLE_DIR" > /dev/null 2>&1
#git push -f origin gh-pages > /dev/null 2>&1
#git checkout ${BRANCH} > /dev/null 2>&1
stop_spinner $?
