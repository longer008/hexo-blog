# 将代码提交到hexo-blog并将编译生成的文件上传到longer008.github.io.git 
sh deploy.sh  #先编译，然后上传

# 将编译之后的文件复制到longer008.github.io/目录并上传到对应仓库
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
