#!/usr/bin/env bash
SCRIPTPATH="$( cd "$(dirname "$0")" ; pwd -P )"
echo "Purging ./dist/\n"
rm -R $SCRIPTPATH/dist/*

echo "Bundling webview assets from $SCRIPTPATH\n"
parcel build $SCRIPTPATH/views/index.html -d $SCRIPTPATH/dist/

echo "\nComplete"