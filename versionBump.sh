#!/bin/sh

# Use this script to bump the version across all POMs.

PROGNAME=`basename "$0"`

if [ "$#" -ne 1 ]; then
    echo "Illegal number of arguments. Use '$PROGNAME <version>'"
else
    mvn versions:set -DnewVersion=$1 -Psamples
    sed -i.versionsBackup "s/<version>.*<\/version>/<version>$1<\/version>/" README.md
    find . -name "*.versionsBackup" -exec rm {} \;
fi
