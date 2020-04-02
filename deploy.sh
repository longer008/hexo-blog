# 直接将编译生成的文件上传到hexo-blo的gh-pages分支

hexo clean && hexo deploy

# 然后上传代码到hexo-blog仓库
git add --all 
git commit  -m 'update'
git push  origin master