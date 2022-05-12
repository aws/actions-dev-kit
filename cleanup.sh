#!/bin/bash

find . -name "*.js" -print | grep '/lib/\|/test/\|/bin/' | grep -v 'node_modules' | xargs -I{} rm {}
