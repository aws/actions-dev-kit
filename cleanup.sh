ls **/*.js | grep '/lib/\|/__tests__/\|/bin/'| grep -v 'node_modules'  | xargs -I{} rm -rf {}
