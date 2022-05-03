#!/bin/bash

find . -name "*.js" -print | grep '/lib/\|/__tests__/\|/bin/' | grep -v 'node_modules' | xargs -I{} rm {}
