# This script obtains the hash of a specific branch, and replaces a 
# string in the README.md file with the obtained hash. 
# The string being replaced has the format `REPOSITORY/HASH/`, 
# where `$REPOSITORY` is the name of the GitHub repository, 
# and `$HASH` is a 7 character git hash hash of the specified git branch. 


# Exit with nonzero exit code if anything fails
set -e

echo "-- start"
BRANCH="${SOURCE_BRANCH:-main}"
REPOSITORY="${GITHUB_REPOSITORY#*/}"

if [ "$1" != "" ]; then
    echo "Branchname to track was provided as first argument"
    BRANCH="$1"
fi

echo "   * Variables"
echo "     – BRANCH=${BRANCH}"
echo "     – GITHUB_REPOSITORY=${GITHUB_REPOSITORY}"
echo "     – REPOSITORY=${REPOSITORY}"

# get the hash
hash=`git ls-remote | grep refs/heads/$BRANCH | cut -f 1 | awk '{ print substr($1,1,7) }'`
echo "   * hash: $hash"

# macos
# sed -i '' -E "s/(${REPOSITORY}\/)[a-f0-9]{7}(\/)/\1$hash\2/g" README.md
sed -i -r "s/(${REPOSITORY}\/)[a-f0-9]{7}(\/)/\1$hash\2/g" README.md


echo "-- end"
