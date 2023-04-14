for TAG in "$@"
do
   git push origin :refs/tags/$TAG
done