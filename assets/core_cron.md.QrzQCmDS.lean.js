import{_ as a,c as s,a0 as e,o as p}from"./chunks/framework.BOr1CWtK.js";const d=JSON.parse('{"title":"cron组件","description":"","frontmatter":{},"headers":[],"relativePath":"core/cron.md","filePath":"core/cron.md"}'),l={name:"core/cron.md"};function r(i,n,t,c,o,h){return p(),s("div",null,n[0]||(n[0]=[e(`<h1 id="cron组件" tabindex="-1">cron组件 <a class="header-anchor" href="#cron组件" aria-label="Permalink to &quot;cron组件&quot;">​</a></h1><ul><li>支持cron表达式</li><li>根据设定的时间规则定时执行函数</li></ul><h2 id="install" tabindex="-1">Install <a class="header-anchor" href="#install" aria-label="Permalink to &quot;Install&quot;">​</a></h2><h3 id="prerequisites" tabindex="-1">Prerequisites <a class="header-anchor" href="#prerequisites" aria-label="Permalink to &quot;Prerequisites&quot;">​</a></h3><ul><li>GO &gt;= 1.18</li></ul><h3 id="using-go-get" tabindex="-1">Using go get <a class="header-anchor" href="#using-go-get" aria-label="Permalink to &quot;Using go get&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>go get github.com/cherry-game/cherry/components/cron@latest</span></span></code></pre></div><h2 id="quick-start" tabindex="-1">Quick Start <a class="header-anchor" href="#quick-start" aria-label="Permalink to &quot;Quick Start&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import cherryCron &quot;github.com/cherry-game/cherry/components/cron&quot;</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>// 以组件方式注入到cherry引擎</span></span>
<span class="line"><span>func Run(path, env, node string) {</span></span>
<span class="line"><span>    // 加载profile配置</span></span>
<span class="line"><span>    cherry.Configure(path, env, node)</span></span>
<span class="line"><span>    // cron以组件方式注册到cherry引擎</span></span>
<span class="line"><span>    cherryCron.RegisterComponent()</span></span>
<span class="line"><span>    // 启动cherry引擎</span></span>
<span class="line"><span>    cherry.Run(false, cherry.Cluster)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 手工方式启动cron</span></span>
<span class="line"><span>func main() {</span></span>
<span class="line"><span>    cherryCron.Init()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    for i := 0; i &lt;= 23; i++ {</span></span>
<span class="line"><span>        cherryCron.AddEveryDayFunc(func() {</span></span>
<span class="line"><span>            now := cherryTime.Now()</span></span>
<span class="line"><span>            cherryLogger.Infof(&quot;每天第%d点%d分%d秒运行&quot;, now.Hour(), now.Minute(), now.Second())</span></span>
<span class="line"><span>        }, i, 12, 34)</span></span>
<span class="line"><span>        cherryLogger.Infof(&quot;添加 每天第%d点执行的定时器&quot;, i)</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    for i := 0; i &lt;= 59; i++ {</span></span>
<span class="line"><span>        cherryCron.AddEveryHourFunc(func() {</span></span>
<span class="line"><span>            cherryLogger.Infof(&quot;每小时第%d分执行一次&quot;, cherryTime.Now().Minute())</span></span>
<span class="line"><span>        }, i, 0)</span></span>
<span class="line"><span>        cherryLogger.Infof(&quot;添加 每小时第%d分的定时器&quot;, i)</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    cherryCron.Run()</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="example" tabindex="-1">example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;example&quot;">​</a></h2><ul><li><a href="#">示例代码跳转</a></li></ul>`,12)]))}const g=a(l,[["render",r]]);export{d as __pageData,g as default};
