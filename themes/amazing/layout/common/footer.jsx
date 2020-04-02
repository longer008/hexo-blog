const { Component } = require('inferno');
const { cacheComponent } = require('../util/cache');

class Footer extends Component {
    render() {
        const {
            logo,
            logoUrl,
            siteUrl,
            siteTitle,
            siteYear,
            author,
            links,
            showVisitorCounter,
            url_for,
            my_cdn
        } = this.props;

        return <footer class="footer">
            <div class="container">
                <div class="level">
                    <div class="level-start">
                        {/* <a class="footer-logo is-block mb-2" href={siteUrl}>
                            {logo && logo.text ? logo.text : <img src={logoUrl} alt={siteTitle} height="28" />}
                        </a> */}
                        {Object.keys(links).length ? <div class="field has-addons">
                            {Object.keys(links).map(name => {
                                const link = links[name];
                                return <p class="control">
                                    <a class={`button is-transparent ${link.icon ? 'is-large' : ''}`} target="_blank" rel="noopener" title={name} href={link.url}>
                                        {link.icon ? <i class={link.icon}></i> : name}
                                    </a>
                                </p>;
                            })}
                        </div> : null}
                        <p class="size-small">
                            <span dangerouslySetInnerHTML={{ __html: `&copy; ${siteYear} ${author || siteTitle}` }}></span>
                            &nbsp;&nbsp;Powered by <a href="https://hexo.io/" target="_blank">Hexo</a> & <a
                                href="https://github.com/ppoffice/hexo-theme-icarus" target="_blank">Icarus</a>,Modify by <a href="https://github.com/removeif" target="_blank">Walter</a>&nbsp;
                            <br />
                            &copy; 版权说明：[本网站所有内容均收集于互联网或自己创作,<br />&nbsp;&nbsp;&nbsp;&nbsp;方便于网友与自己学习交流，如有侵权，请<a href={url_for('/message')} target="_blank">留言</a>，立即处理]
                            <br />
                            <script type="text/javascript" src={my_cdn('/js/statistics.js')}></script>
                            <span id="statistic-times">网站运行时间统计加载中...</span>
                            <br />
                            {showVisitorCounter ? <div class="size-small"><span id="busuanzi_container_site_uv">
                                ❤️感谢<strong>&nbsp;<span id="busuanzi_value_site_uv">99+</span>&nbsp;</strong>
                            </span>小伙伴的
                                <strong>&nbsp;<span id="busuanzi_value_site_pv">99+</span>&nbsp;</strong>次光临！❤️</div> : null}
                        </p>
                    </div>
                    {/* <div class="level-end">
                        {Object.keys(links).length ? <div class="field has-addons">
                            {Object.keys(links).map(name => {
                                const link = links[name];
                                return <p class="control">
                                    <a class={`button is-transparent ${link.icon ? 'is-large' : ''}`} target="_blank" rel="noopener" title={name} href={link.url}>
                                        {link.icon ? <i class={link.icon}></i> : name}
                                    </a>
                                </p>;
                            })}
                        </div> : null}
                    </div> */}
                </div>
            </div>
        </footer>;
    }
}

module.exports = cacheComponent(Footer, 'common.footer', props => {
    const { config, helper } = props;
    const { url_for, _p, date, my_cdn } = helper;
    const { logo, title, author, footer, plugins } = config;

    const links = {};
    if (footer && footer.links) {
        Object.keys(footer.links).forEach(name => {
            const link = footer.links[name];
            links[name] = {
                url: url_for(typeof link === 'string' ? link : link.url),
                icon: link.icon
            };
        });
    }

    return {
        url_for: url_for,
        my_cdn: my_cdn,
        logo,
        logoUrl: url_for(logo),
        siteUrl: url_for('/'),
        siteTitle: title,
        siteYear: date(new Date(), 'YYYY'),
        author,
        links,
        showVisitorCounter: plugins && plugins.busuanzi === true,
        visitorCounterTitle: _p('plugin.visitor', '<span id="busuanzi_value_site_uv">0</span>')
    };
});
