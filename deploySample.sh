#!/bin/bash

# Script to build, deploy and push one of the GWT samples to branch 'gh-pages'

PROGNAME=`basename "$0"`
SAMPLE_NAME=$1
SAMPLE_DIR=samples/${SAMPLE_NAME}
TMP=/tmp/elemento/sample
ROOT=$PWD

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

start_spinner "Building elemento core..."
# mvn -q install
sleep 1
stop_spinner $?

cd ${SAMPLE_DIR}
start_spinner "Building $SAMPLE_NAME..."
# mvn -q clean install
sleep 1
stop_spinner $?
cd ${ROOT}

start_spinner "Commit to gh-pages..."
rm -rf ${TMP}
mkdir -p ${TMP}
cp -R ${SAMPLE_DIR}/target/${SAMPLE_NAME}-sample-*/${SAMPLE_NAME} ${TMP}
git checkout gh-pages
rm -rf ${SAMPLE_NAME}
cp -R ${TMP}/${SAMPLE_NAME} .
git add --all > /dev/null 2>&1
git commit -am "Update $SAMPLE_DIR/$SAMPLE_NAME"
stop_spinner $?

start_spinner "Publish to gh-pages..."
git push -f origin gh-pages > /dev/null 2>&1
stop_spinner $?
