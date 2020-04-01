git add --all 
git commit  -m 'update'
git push  origin master

# git subtree split -P public -b master

# cd public

# git init 
# git remote add deploy https://github.com/longer008/longer008.github.io.git 
# git add --all
# git commit -m "create"
# git push deploy master -f


echo -e "\ngit commit successful!"

# deploy
hexo clean
hexo deploy

cp -r public/* ../longer008.github.io/
cd  ../longer008.github.io/
git add --all 
git commit  -m 'update'
git push  origin master

echo -e "\ndeploy successful!"

exit 0

# 把所有 `public` 目录下的相关提交整理为一个新的分支 master
# git subtree split -P public -b master

# --allow-unrelated-histories

# git删除远程分支
# git push origin --delete [branch_name]
