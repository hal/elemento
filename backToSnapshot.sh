#!/bin/sh

# Use this script to switch back to "HEAD-SNAPSHOT" after a new version has been released.

./versionBump.sh HEAD-SNAPSHOT
git commit -am "Switch back to HEAD-SNAPSHOT"
