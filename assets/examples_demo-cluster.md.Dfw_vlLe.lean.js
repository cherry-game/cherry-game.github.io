import{_ as o,c as a,a0 as l,o as c}from"./chunks/framework.BOr1CWtK.js";const t="/assets/screenshot.sB7FpM-C.png",b=JSON.parse('{"title":"多节点集群","description":"","frontmatter":{},"headers":[],"relativePath":"examples/demo-cluster.md","filePath":"examples/demo-cluster.md"}'),i={name:"examples/demo-cluster.md"};function d(r,e,n,s,h,u){return c(),a("div",null,e[0]||(e[0]=[l('<h1 id="多节点集群" tabindex="-1">多节点集群 <a class="header-anchor" href="#多节点集群" aria-label="Permalink to &quot;多节点集群&quot;">​</a></h1><blockquote><p><strong>examples示例已从cherry库迁出，新仓库地址: <a href="https://github.com/cherry-game/examples" target="_blank" rel="noreferrer">https://github.com/cherry-game/examples</a></strong></p></blockquote><h2 id="须知" tabindex="-1">须知 <a class="header-anchor" href="#须知" aria-label="Permalink to &quot;须知&quot;">​</a></h2><ul><li>本示例适合作为游戏服务端的基础脚手架，开发者们可在此示例基础上发展出自己的游戏服务端方案。</li><li>示例中没有使用数据库，进程重启会还原所有数据</li><li>客户端演示分为两种： <ul><li><code>robot_client</code> 为go实现的游戏压测客户端，使用<code>tcp/protobuf</code>协议</li><li><code>nodes/web/view/</code> 为h5实现的游戏客户端，使用<code>websocket/protobuf</code>协议</li></ul></li><li>欢迎开发者一起入群讨论（<code>QQ群：191651647</code>），构建更好的<code>cherry</code>生态。</li></ul><h2 id="要求" tabindex="-1">要求 <a class="header-anchor" href="#要求" aria-label="Permalink to &quot;要求&quot;">​</a></h2><ul><li>GO &gt;= 1.18</li><li>nats.io &gt;= 2.0</li></ul><h2 id="配置" tabindex="-1">配置 <a class="header-anchor" href="#配置" aria-label="Permalink to &quot;配置&quot;">​</a></h2><ul><li>参数配置文件在 <code>../config/demo-cluster.json</code></li><li>策划配置文件在 <code>../config/data/</code></li></ul><h2 id="准备" tabindex="-1">准备 <a class="header-anchor" href="#准备" aria-label="Permalink to &quot;准备&quot;">​</a></h2><ul><li><code>git clone https://github.com/cherry-game/cherry.git</code></li><li>或者点击github.com页面的<code>code</code>按钮<code>Download zip</code>下载源码包</li><li>打开项目源码，找到<code>demo_cluster</code>目录</li><li>请参考<a href="https://github.com/cherry-game/cherry/blob/master/_docs/env-setup.md" target="_blank" rel="noreferrer">环境安装与配置</a> 进行准备工作</li></ul><h2 id="启动与调试" tabindex="-1">启动与调试 <a class="header-anchor" href="#启动与调试" aria-label="Permalink to &quot;启动与调试&quot;">​</a></h2><h3 id="_1、启动nats" tabindex="-1">1、启动nats <a class="header-anchor" href="#_1、启动nats" aria-label="Permalink to &quot;1、启动nats&quot;">​</a></h3><blockquote><p>nats为高性能的分布式消息中间件，详情可通过<code>https://github.com/nats-io/nats-server</code> 进行了解。 本框架中所有节点都基于 nats 进行消息通信。 正式环境请使用集群 nats-streaming-server 进行部署 <code>https://github.com/nats-io/nats-streaming-server</code></p></blockquote><ul><li>Windows：<code>3rd/nat-server/run_nats.bat</code></li><li>Mac：<code>nats-server</code></li></ul><blockquote><p>窗口显示<code>Listening for client connections on 0.0.0.0:4222</code> 代表 nats 启动成功，nats 默认监听<code>4222</code>端口</p></blockquote><h3 id="_2、启动参数配置" tabindex="-1">2、启动参数配置 <a class="header-anchor" href="#_2、启动参数配置" aria-label="Permalink to &quot;2、启动参数配置&quot;">​</a></h3><ul><li>找到<code>demo_cluster/nodes/main.go</code>，所有节点都从<code>main.go</code>启动</li><li><code>VSCode</code>用户在左侧栏找到<code>运行和调试(Debug)</code>按钮,启动<code>gc-master</code>、<code>gc-center</code>、<code>gc-web-1</code>、<code>gc-gate-1</code>、<code>gc-game-10001</code></li><li><code>GoLand</code>用户配置启动参数(<code>Program arguments</code>)如下： <ul><li><code>gc-master</code> master --path=./config/demo-cluster.json --node=gc-master</li><li><code>gc-center</code> center --path=./config/demo-cluster.json --node=gc-center</li><li><code>gc-web-1</code> web --path=./config/demo-cluster.json --node=gc-web-1</li><li><code>gc-gate-1</code> gate --path=./config/demo-cluster.json --node=gc-gate-1</li><li><code>gc-game-10001</code> game --path=./config/demo-cluster.json --node=10001</li></ul></li></ul><h2 id="测试" tabindex="-1">测试 <a class="header-anchor" href="#测试" aria-label="Permalink to &quot;测试&quot;">​</a></h2><ul><li>使用 go 实现客户端，通过 tcp 协议连接 gate 网关进行压力测试</li><li>使用 h5 实现客户端，通过 websocket 协议连接 gate 网关进行功能的展示</li></ul><h3 id="启动压测机器人" tabindex="-1">启动压测机器人 <a class="header-anchor" href="#启动压测机器人" aria-label="Permalink to &quot;启动压测机器人&quot;">​</a></h3><ul><li>找到<code>demo_cluster/robot_client/main.go</code> 文件,并执行</li><li>机器人执行逻辑为：<code>注册帐号</code>，<code>登陆获取token</code>、<code>连接网关</code>、<code>用户登录游戏服</code>、<code>查看角色</code>、<code>创建角色</code>、<code>进入角色</code></li><li>默认设定为创建1000个帐号，可自行调整<code>maxRobotNum</code>参数进行测试</li><li>执行完成后，从game节点的<code>Console</code>可以查看到<code>onlineCount = 50000</code>字样</li></ul><h4 id="启动-h5-客户端" tabindex="-1">启动 h5 客户端 <a class="header-anchor" href="#启动-h5-客户端" aria-label="Permalink to &quot;启动 h5 客户端&quot;">​</a></h4><ul><li>直接访问<code>http://127.0.0.1:8081</code>，按照界面步骤提示操作。 <ul><li>端口以 web 进程打印的具体的值为准，如果发现端口被占用，请搜索并替换。</li></ul></li></ul><h2 id="源码讲解" tabindex="-1">源码讲解 <a class="header-anchor" href="#源码讲解" aria-label="Permalink to &quot;源码讲解&quot;">​</a></h2><ul><li><p><code>internal</code> 内部业务逻辑</p><ul><li><code>code</code> 定义一些业务的状态码</li><li><code>component</code> 组件目录， <ul><li><code>check_center</code>组件, 用于在启动前节点先检查<code>center</code>节点是否已启动</li></ul></li><li><code>constant</code> 一些常用定义</li><li><code>data</code> 策划配表包装的struct，用于读取<code>../config/data</code>目录的策划配表</li><li><code>event</code> 游戏事件</li><li><code>guid</code> 生成全局id</li><li><code>pb</code> protobuf生成的协议结构</li><li><code>protocol</code> protobuf结构定义目录</li><li><code>rpc</code> 跨节点rpc函数封装</li><li><code>session_key</code> 一些session相关的常量定义</li><li><code>token</code> 登录token逻辑，包含生成token、验证token</li><li><code>types</code> 各种自定义类型封装,方便struct从配置文件、数据库读取数据时进行序列化、反序列化</li></ul></li><li><p><code>nodes</code> 分布式节点目录</p><ul><li><code>center</code>节点</li><li><code>game</code> 节点</li><li><code>gate</code> 节点</li><li><code>master</code> 节点</li><li><code>web</code> 节点(为了演示方便，包含了h5客户端)</li></ul></li><li><p><code>robot_client</code> 压测机器人(tcp/protobuf协议)</p></li><li><p><code>build_protocol.bat</code> 生成protobuf结构代码到<code>internal/pb/</code>目录</p></li></ul><h3 id="master节点" tabindex="-1">master节点 <a class="header-anchor" href="#master节点" aria-label="Permalink to &quot;master节点&quot;">​</a></h3><ul><li>master 节点主要用于实现最基础的发现服务,基于nats构建。</li><li>正式环境也可配置为etcd方式提供发现服务。</li><li>相关的代码在<code>demo_cluster/master/</code>目录。</li></ul><h3 id="center节点" tabindex="-1">center节点 <a class="header-anchor" href="#center节点" aria-label="Permalink to &quot;center节点&quot;">​</a></h3><ul><li>center 节点目前主要用于处理帐号相关的业务或全局唯一的业务</li></ul><h3 id="web节点" tabindex="-1">web节点 <a class="header-anchor" href="#web节点" aria-label="Permalink to &quot;web节点&quot;">​</a></h3><ul><li>web 节点主要对外提供一些http的接口，可横向扩展，多节点部署。</li><li>目前用于开发者帐号注册、区服列表、sdk登陆/支付回调、验证token生成等业务。</li></ul><h3 id="gate节点" tabindex="-1">gate节点 <a class="header-anchor" href="#gate节点" aria-label="Permalink to &quot;gate节点&quot;">​</a></h3><ul><li>gate 节点为游戏对外网关，可横向扩展，多节点部署。</li><li>主要用于管理客户端的连接、消息路由与转发。</li></ul><h3 id="game节点" tabindex="-1">game节点 <a class="header-anchor" href="#game节点" aria-label="Permalink to &quot;game节点&quot;">​</a></h3><ul><li>game 节点为具体的游戏逻辑业务，根据业务需求可多节点部署。</li><li>在分服的游戏中可提供游戏内的各种逻辑实现。</li></ul><h2 id="运行截图" tabindex="-1">运行截图 <a class="header-anchor" href="#运行截图" aria-label="Permalink to &quot;运行截图&quot;">​</a></h2><p><img src="'+t+'" alt="screenshot"></p>',37)]))}const g=o(i,[["render",d]]);export{b as __pageData,g as default};
