set -e # Exit with nonzero exit code if anything fails

echo "-- start"

SOURCE_BRANCH="${SOURCE_BRANCH:-master}"




# Pull requests and commits to other branches shouldn't try to deploy, just build to verify
if [ $DRONE ]; then

  echo "     – DRONE_BUILD_EVENT=${DRONE_BUILD_EVENT}"
  echo "     – DRONE_COMMIT_BRANCH=${DRONE_COMMIT_BRANCH}"

  if [ "$DRONE_BUILD_EVENT" != "push" -o "$DRONE_COMMIT_BRANCH" != "$SOURCE_BRANCH" ]; then
      echo "Skipping deploy; just doing a build."
      exit 0
  fi
fi





hash=`git ls-remote git://github.com/signalwerk/signalwerk.styles.git | grep refs/heads/gh-pages | cut -f 1 | awk '{ print substr($1,1,7) }'`
echo "style-hash: $hash"

sed -i '' -E "s/(signalwerk.styles\/)[a-f0-9]{7}(\/styles)/\1$hash\2/g" README.md


git config user.name "CI System"
git config user.email "$COMMIT_AUTHOR_EMAIL"


git checkout master
git add -A README.md
git commit -m "Update readme [CI SKIP]"


# Get the deploy key by using stored variables to decrypt id_rsa.enc
# sha256 set to have openssl 1 & 2 compatibility
eval `ssh-agent -s`
openssl aes-256-cbc -md sha256 -d -in "$ROOT_DIR/ci/.ssh/id_rsa.enc" -pass "pass:$DECRYPT_KEY" | ssh-add -


# add github as known host
mkdir -p ~/.ssh
ssh-keyscan -t rsa github.com >> ~/.ssh/known_hosts


# Now that we're all set up, we can push.
echo "   * push git"
git push $SSH_REPO $TARGET_BRANCH
