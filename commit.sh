git add --all
git commit  -m 'update'
git push origin dev

git subtree split -P public -b master

cd public

git init 
git remote add deploy https://github.com/longer008/longer008.github.io.git 
git push deploy master -f


echo -e "\ngit commit successful!"
exit 0

# 把所有 `public` 目录下的相关提交整理为一个新的分支 master
# git subtree split -P public -b master
