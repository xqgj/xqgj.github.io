
# deploy to github
set -e

npm run build

cp CNAME ./docs/

git add -A
read -p "Please input this version commits: " -t 30 commits
git commit -m "${commits}"
git push origin master

exit 0