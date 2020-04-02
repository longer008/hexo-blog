# 直接将编译生成的文件上传到hexo-blo的gh-pages分支
# 对应 https://longer008.github.io/hexo-blog/

hexo clean && hexo deploy

# 然后上传代码到hexo-blog仓库
git add --all 
git commit  -m 'update'
git push  origin master
echo -e "\ngit commit successful!"

# 使用hexo-deployer-git插件的时候就不需要Travis CI了