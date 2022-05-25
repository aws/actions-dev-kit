#!/bin/bash
echo "cleaning up the generated files..."
find . -type f \( -name "*.js" -o -name "*.d.ts" -o -name "*.js.map" -o -name "*.d.ts.map" \) -print | grep '/lib/\|/test/\|/bin/' | grep -v 'node_modules' | xargs -I{} rm {}
echo "cleaning done!"