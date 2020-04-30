---
date: 2019-11-25 14:49:08
comments: false
thumbnail: https://cdn.jsdelivr.net/gh/longer008/images/2020/20200410.jpg
---
<div class = "text-center"><h1>碎碎念</h1></div><div class = "text-tips">

tips：github登录后按时间正序查看、可点赞加❤️</div>
<div id="comment-container1"><div class="text-tips">碎碎念加载中，请稍等...</div></div>
<script>
    $.getScript("/js/gitalk_self.min.js", function () {
    var gitalk = new Gitalk({
        clientID: "e89664e367cd250daa70",
        clientSecret: "5301cd226ff11c2b7f2ab94de72fc93ee5b7ffba",
        id: '666666',
        repo: 'issue_database',
        owner: 'longer008', 
        admin: "longer008",
        createIssueManually: true,
        distractionFreeMode: false
    })
    gitalk.render('comment-container1')
    });
</script>