import{_ as i,c as a,b as e,o as n}from"./app-CYZnreUu.js";const t={};function l(h,s){return n(),a("div",null,s[0]||(s[0]=[e(`<p>查看路由表命令：dis ip routing-table</p><p>如果是运营商的，下一跳地址是运营商的网关</p><p>ip route-static 0.0.0.0 0.0.0.0 下一个设备接口地址</p><h2 id="查看接口状态及信息" tabindex="-1"><a class="header-anchor" href="#查看接口状态及信息"><span>查看接口状态及信息</span></a></h2><ol><li>显示接口的运行状态和相关信息</li></ol><div class="language-bash line-numbers-mode" data-ext="bash" data-title="bash"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">display</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> interface</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> Ethernet</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> brief</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>查看以太网端口的简要信息，物理端口是否连通，端口是否是全双工，带宽是多少，端口的流入流出的流量百分比。可以排查端口的基本信息，比如有的端口用户网速慢，可以查看该端口的接口速率，是否是全双工状态，是否是网卡速率，比如本来是1000M的网卡，但是速率显示的是10M，那么该条链路一定是有问题的。</p><ol><li>查看接口的描述信息</li></ol><div class="language-bash line-numbers-mode" data-ext="bash" data-title="bash"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">display</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> interface</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> description</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>直观地看到接口的物理状态和协议状态，以及描述信息，利于了解接口作用。</p><ol><li>查看接口状态和配置的简要信息</li></ol><div class="language-bash line-numbers-mode" data-ext="bash" data-title="bash"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">display</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> interface</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> brief</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>每个接口的物理状态，协议状态，流入和流出的流量，输入和输出错误等。</p><ol><li>查看接口与IP相关的简要信息</li></ol><div class="language-bash line-numbers-mode" data-ext="bash" data-title="bash"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">display</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> ip</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> interface</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> brief</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">display</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> ip</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> interface</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> description</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看到包括IP地址、子网掩码、物理链路和协议的Up/Down状态以及处于不同状态的接口数目。</p><ol><li>查看接口的统计信息</li></ol><div class="language-bash line-numbers-mode" data-ext="bash" data-title="bash"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">display</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> interface</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>这是一个全面的端口信息，所有的端口都可以查看，涉及到端口的内容都会在这里查询到。 查看接口的流量统计数</p><ol><li>查看接口的流量统计数</li></ol><div class="language-bash line-numbers-mode" data-ext="bash" data-title="bash"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">display</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> counters</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>每个端口的流量，细分为单播，组播，广播流量。</p><ol><li>查看错误报文的统计信息</li></ol><div class="language-bash line-numbers-mode" data-ext="bash" data-title="bash"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">display</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> counters</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> error</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ol><li>查看接口的入方向或出方向流量速率</li></ol><div class="language-bash line-numbers-mode" data-ext="bash" data-title="bash"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">display</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> counters</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> rate</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ol><li>查看接口和IP配置的相关信息</li></ol><div class="language-bash line-numbers-mode" data-ext="bash" data-title="bash"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">display</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> ip</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> interface</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="端口常用配置" tabindex="-1"><a class="header-anchor" href="#端口常用配置"><span>端口常用配置</span></a></h2><ol><li>配置临时端口组，接口配置一样，那就可以选择临时端口组</li></ol><div class="language-shell line-numbers-mode" data-ext="shell" data-title="shell"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">port-group</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> group-member</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> GigabitEthernet</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> 0/0/1</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> to</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> GigabitEthernet</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> 0/0/10</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ol><li>配置永久端口组</li></ol><div class="language-bash line-numbers-mode" data-ext="bash" data-title="bash"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">port-group</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> portname</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"> ## portname自定义端口组名字</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">group-member</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> GigabitEthernet</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> 0/0/1</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> to</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> GigabitEthernet</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> 0/0/10</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><ol><li>删除端口组</li></ol><div class="language-shell line-numbers-mode" data-ext="shell" data-title="shell"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">undo</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> port-group</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> vlan10</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="查设备接入点及详细端口" tabindex="-1"><a class="header-anchor" href="#查设备接入点及详细端口"><span>查设备接入点及详细端口</span></a></h2><ol><li>查哪些IP已绑定的对应该的MAC地址</li></ol><div class="language-bash line-numbers-mode" data-ext="bash" data-title="bash"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># 在核心交换机或路由器使用如下命令查找到ip对应的mac地址</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">display</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> arp</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> |</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> include</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 172.26.206.1</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><ol><li>然后找到对应接入层交换机，找到mac地址对应接口号</li></ol><div class="language-bash line-numbers-mode" data-ext="bash" data-title="bash"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># 在核心交换机或路由器使用如下命令查找到mac地址对应的接口号如果有多层，一层一层执行，找到为止</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">display</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> mac-address</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">display</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> mac-address</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> 6xxx-9xxx-fxxx</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol><li>查看接口对应有哪些mac地址</li></ol><div class="language-bash line-numbers-mode" data-ext="bash" data-title="bash"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">display</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> mac-address</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> g0/0/23</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="配置telnet登录" tabindex="-1"><a class="header-anchor" href="#配置telnet登录"><span>配置telnet登录</span></a></h2><div class="language-bash line-numbers-mode" data-ext="bash" data-title="bash"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">## 使能服务器功能。</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">&lt;</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">HUAWEI</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">&gt;</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> system-view</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">[</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">HUAWEI</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">]</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> telnet server-source -i Vlanif 10  //假设客户端使用IP地址10.10.10.20连接服务器，该地址对应的接口为Vlanif 10。该命令仅在V200R020C00及之后版本使用。</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">[</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">HUAWEI</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">]</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> telnet server enable</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># 配置VTY用户界面的支持协议类型。</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">[</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">HUAWEI</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">]</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> user-interface vty 0 4</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">[</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">HUAWEI-ui-vty0-4</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">]</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> protocol inbound telnet    //指定VTY用户界面所支持的协议为Telnet</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># 配置VTY用户界面的认证方式和用户级别。</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># 配置VTY用户界面的认证方式为AAA：</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">[</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">HUAWEI-ui-vty0-4</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">]</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> authentication-mode aaa    //配置认证方式为AAA</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">[</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">HUAWEI-ui-vty0-4</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">]</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> quit</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">[</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">HUAWEI</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">]</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> aaa</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">[</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">HUAWEI-aaa</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">]</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> local-user admin123 password irreversible-cipher abcd@123    //创建本地用户admin123，登录密码为abcd@123</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">[</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">HUAWEI-aaa</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">]</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> local-user admin123 service-type telnet    //配置本地用户admin123的接入类型为Telnet方式</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">[</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">HUAWEI-aaa</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">]</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> local-user admin123 privilege level 15    //配置本地用户admin123的级别为15</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">Warning:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> This</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> operation</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> may</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> affect</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> online</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> users,</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> are</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> you</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> sure</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> to</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> change</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> the</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> user</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> privilege</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> level</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> ?[Y/N]y</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># 配置VTY用户界面的认证方式为Password：</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">[</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">HUAWEI-ui-vty0-4</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">]</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> authentication-mode password    //配置认证方式为password</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">[</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">HUAWEI-ui-vty0-4</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">]</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> set authentication password cipher YsHsjx_202206    //配置登录密码为YsHsjx_202206</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">[</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">HUAWEI-ui-vty0-4</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">]</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> user privilege level 15    //配置VTY用户界面的级别为15</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="交换机接口" tabindex="-1"><a class="header-anchor" href="#交换机接口"><span>交换机接口</span></a></h2><p>Access、Hybrid、Trunk接口类型</p><ol><li>Access</li></ol><p>Access类型的端口只能属于1个VLAN，一般用于连接计算机的端口；</p><div class="language-bash line-numbers-mode" data-ext="bash" data-title="bash"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;"> [</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">sysname</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">]</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> interface</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> Ethernet</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> 0/0/1</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;"> [</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">sysname-Ethernet0/0/1</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">]</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">port</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> link-type</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> access</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;"> [</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">sysname-Ethernet0/0/1</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">]</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">port</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> default</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> vlan</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 10</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol><li>Trunk</li></ol><p>Trunk类型的端口可以属于多个VLAN，可以接收和发送多个VLAN的报文，一般用于交换机之间连接的端口；</p><div class="language-bash line-numbers-mode" data-ext="bash" data-title="bash"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;"> [</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">sysname</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">]</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> interface</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> Ethernet</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> 0/0/1</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;"> [</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">sysname-Ethernet0/0/1</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">]</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">port</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> link-type</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> trunk</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;"> [</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">sysname-Ethernet0/0/1</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">]</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">port</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> trunk</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> allow-pass</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> vlan</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> all</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">  //all</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> 发行所有</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;"> [</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">sysname-Ethernet0/0/1</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">]</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">port</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> trunk</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> allow-pass</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> vlan</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 10</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 20</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> //放行10</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 20</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol><li>Hybrid</li></ol><p>Hybrid: Tagged同等与Trunk，中继口</p><div class="language-bash line-numbers-mode" data-ext="bash" data-title="bash"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;"> [</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">sysname</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">]</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> interface</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> Ethernet</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> 0/0/1</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;"> [</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">sysname-Ethernet0/0/1</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">]</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">port</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> link-type</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> hybrid</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;"> [</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">sysname-Ethernet0/0/1</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">]</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">port</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> hybrid</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> tagged</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> vlan</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 10</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 20</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Hybrid: Untagged同等与Access</p><div class="language-bash line-numbers-mode" data-ext="bash" data-title="bash"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;"> [</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">sysname</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">]</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> interface</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> Ethernet</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> 0/0/1</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;"> [</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">sysname-Ethernet0/0/1</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">]</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">port</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> link-type</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> hybrid</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;"> [</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">sysname-Ethernet0/0/1</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">]</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">port</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> hybrid</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> pvid</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> vlan</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 10</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;"> [</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">sysname-Ethernet0/0/1</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">]</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">port</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> hybrid</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> untagged</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> vlan</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 10</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="ftp上传下载" tabindex="-1"><a class="header-anchor" href="#ftp上传下载"><span>FTP上传下载</span></a></h2><div class="language-bash line-numbers-mode" data-ext="bash" data-title="bash"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># get put dir cd</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">开启ftp</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">[</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">huawei</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">]</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">ftp server enable</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">[</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">huawei</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">]</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">quit</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">&lt;</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">huawei</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">&gt;</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">ftp ip </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># ftp 服务器地址</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">[</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">ftp</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">]</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">get test.txt </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># 上传文件</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">[</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">ftp</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">]</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">put test.txt </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># 下载交换机文件</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">[</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">ftp</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">]</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">cd config </span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"># 进入config文件夹</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="根据ip-mac查询接口" tabindex="-1"><a class="header-anchor" href="#根据ip-mac查询接口"><span>根据ip/mac查询接口</span></a></h2><div class="language-bash line-numbers-mode" data-ext="bash" data-title="bash"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">dis</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> arp</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> |</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> in ip地址</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">dis</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> arp</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> |</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> in mac地址</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div>`,61)]))}const k=i(t,[["render",l],["__file","index.html.vue"]]),d=JSON.parse('{"path":"/network/huawei/84z86p8f/","title":"常用命令","lang":"zh-CN","frontmatter":{"title":"常用命令","createTime":"2025/01/17 09:59:32","permalink":"/network/huawei/84z86p8f/","description":"查看路由表命令：dis ip routing-table 如果是运营商的，下一跳地址是运营商的网关 ip route-static 0.0.0.0 0.0.0.0 下一个设备接口地址 查看接口状态及信息 显示接口的运行状态和相关信息 查看以太网端口的简要信息，物理端口是否连通，端口是否是全双工，带宽是多少，端口的流入流出的流量百分比。可以排查端口的基本...","head":[["meta",{"property":"og:url","content":"https://docs.1259.net/network/huawei/84z86p8f/"}],["meta",{"property":"og:site_name","content":"DT"}],["meta",{"property":"og:title","content":"常用命令"}],["meta",{"property":"og:description","content":"查看路由表命令：dis ip routing-table 如果是运营商的，下一跳地址是运营商的网关 ip route-static 0.0.0.0 0.0.0.0 下一个设备接口地址 查看接口状态及信息 显示接口的运行状态和相关信息 查看以太网端口的简要信息，物理端口是否连通，端口是否是全双工，带宽是多少，端口的流入流出的流量百分比。可以排查端口的基本..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-01-22T16:54:14.000Z"}],["meta",{"property":"article:modified_time","content":"2025-01-22T16:54:14.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"常用命令\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2025-01-22T16:54:14.000Z\\",\\"author\\":[]}"]]},"headers":[],"readingTime":{"minutes":4.46,"words":1339},"git":{"updatedTime":1737564854000,"contributors":[{"name":"guodilin","username":"guodilin","email":"guodilin@9219.net","commits":1,"avatar":"https://avatars.githubusercontent.com/guodilin?v=4","url":"https://github.com/guodilin"}]},"autoDesc":true,"filePathRelative":"notes/3.网络技术/1.华为/常用命令.md","bulletin":false}');export{k as comp,d as data};
