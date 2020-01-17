#!/bin/sh

# Use this script to bump the version across all POMs and files containing a version reference.

PROGNAME=`basename "$0"`

if [ "$#" -ne 1 ]; then
    echo "Illegal number of arguments. Use '$PROGNAME <version>'"
else
    mvn versions:set -DnewVersion=$1 -P samples -U
    sed -i.versionsBackup "s/<version>.*<\/version>/<version>$1<\/version>/" README.md
    sed -i.versionsBackup "s/<elemento\.version>.*<\/elemento\.version>/<elemento\.version>$1<\/elemento\.version>/" samples/gwt/pom.xml
    sed -i.versionsBackup "s/<elemento\.version>.*<\/elemento\.version>/<elemento\.version>$1<\/elemento\.version>/" samples/j2cl/pom.xml
    find . -name "*.versionsBackup" -exec rm {} \;
fi
