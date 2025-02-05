import{_ as i,c as a,b as n,o as e}from"./app-CYZnreUu.js";const t="/docs/1699415313991-91c77cb6-f700-407c-8573-66cbc0ef5f03.png",l={};function h(p,s){return e(),a("div",null,s[0]||(s[0]=[n('<h2 id="配置通过ipsg功能对ip报文的接口-ip-mac信息进行匹配检查示例" tabindex="-1"><a class="header-anchor" href="#配置通过ipsg功能对ip报文的接口-ip-mac信息进行匹配检查示例"><span>配置通过IPSG功能对IP报文的接口+IP+MAC信息进行匹配检查示例</span></a></h2><h3 id="组网需求" tabindex="-1"><a class="header-anchor" href="#组网需求"><span>组网需求</span></a></h3><p>如<a href="https://support.huawei.com/enterprise/zh/doc/EDOC1000047401/2eeb3da9#fig_dc_cfg_ipsg_00001301" target="_blank" rel="noopener noreferrer">图10-2</a>所示，HostA与HostB分别与Switch的GE0/0/1和GE0/0/2接口相连。要求使HostB不能仿冒HostA的IP和MAC欺骗Server，保证HostA的IP报文能正常上送。</p><p><img src="'+t+`" alt="img"></p><h3 id="配置思路" tabindex="-1"><a class="header-anchor" href="#配置思路"><span>配置思路</span></a></h3><p>采用如下的思路在Switch上配置IPSG功能（假设用户的IP地址是静态分配的）：</p><ol><li>接口使能IP报文检查功能。连接HostA和HostB的接口都需要使能该功能。</li><li>配置静态绑定表，对于静态配置IP的用户建立绑定关系表。</li></ol><h3 id="操作步骤" tabindex="-1"><a class="header-anchor" href="#操作步骤"><span>操作步骤</span></a></h3><ol><li><p>配置IP报文检查功能</p></li><li><p>在连接HostA的GE0/0/1接口使能IP报文检查功能。</p></li></ol><div class="language-bash line-numbers-mode" data-ext="bash" data-title="bash"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">&lt;</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">HUAWEI</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">&gt;</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> system-view</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">[</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">HUAWEI</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">]</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> sysname Switch</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">[</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">Switch</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">]</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> interface gigabitethernet 0/0/1</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">[</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">Switch-GigabitEthernet0/0/1</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">]</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> ip source check user-bind enable</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol><li>在连接HostA的GE0/0/1接口使能IP报文检查告警功能并配置告警阈值。</li></ol><div class="language-bash line-numbers-mode" data-ext="bash" data-title="bash"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">[</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">Switch-GigabitEthernet0/0/1</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">]</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> ip source check user-bind alarm enable</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">[</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">Switch-GigabitEthernet0/0/1</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">]</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> ip source check user-bind alarm threshold 200</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">[</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">Switch-GigabitEthernet0/0/1</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">]</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> quit</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol><li>在连接HostB的GE0/0/2接口使能IP报文检查功能。</li></ol><div class="language-bash line-numbers-mode" data-ext="bash" data-title="bash"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">[</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">Switch</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">]</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> interface gigabitethernet 0/0/2</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">[</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">Switch-GigabitEthernet0/0/2</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">]</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> ip source check user-bind enable</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><ol><li>在连接HostB的GE0/0/2接口使能IP报文检查告警功能并配置告警阈值。</li></ol><div class="language-bash line-numbers-mode" data-ext="bash" data-title="bash"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">[</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">Switch-GigabitEthernet0/0/2</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">]</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> ip source check user-bind alarm enable</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">[</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">Switch-GigabitEthernet0/0/2</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">]</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> ip source check user-bind alarm threshold 200</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">[</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">Switch-GigabitEthernet0/0/2</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">]</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> quit</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol><li><p>配置静态绑定表项</p></li><li><p>配置HostA为静态绑定表项。</p></li></ol><div class="language-bash line-numbers-mode" data-ext="bash" data-title="bash"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">[</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">Switch</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">]</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> user-bind static ip-address 10.0.0.1 mac-address 0001-0001-0001 interface gigabitethernet 0/0/1</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ol><li><p>验证配置结果</p></li><li><p>在Switch上执行<strong>display dhcp static user-bind all</strong>命令可以查看绑定表信息。</p></li></ol><div class="language-bash line-numbers-mode" data-ext="bash" data-title="bash"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">[</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">Switch</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">]</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> display dhcp static user-bind all</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">DHCP</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> static</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> Bind-table:</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">                                                         </span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">Flags:O</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> -</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> outer</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> vlan</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> ,I</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> -</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> inner</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> vlan</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> ,P</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> -</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> Vlan-mapping</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">                          </span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">IP</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> Address</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">                      MAC</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> Address</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">     VSI/VLAN</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">O/I/P</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> Interface</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">       </span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">--------------------------------------------------------------------------------</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">10.0.0.1</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">                        0001-0001-0001</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">  --</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">  /--</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">  /--</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">    GE0/0/1</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">         </span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">--------------------------------------------------------------------------------</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">Print</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> count:</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">           1</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">          Total</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> count:</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">           1</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>从显示信息可知，HostA已经配置为静态绑定表项。</p><h3 id="配置文件" tabindex="-1"><a class="header-anchor" href="#配置文件"><span>配置文件</span></a></h3><p>Switch的配置文件</p><div class="language-bash line-numbers-mode" data-ext="bash" data-title="bash"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">#</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">sysname</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> Switch</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">#</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">user-bind</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> static</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> ip-address</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 10.0.0.1</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> mac-address</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> 0001-0001-0001</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> interface</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> GigabitEthernet0/0/1</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">#</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">interface</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> GigabitEthernet0/0/1</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> ip</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> source</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> check</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> user-bind</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> enable</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> ip</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> source</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> check</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> user-bind</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> alarm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> enable</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> ip</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> source</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> check</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> user-bind</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> alarm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> threshold</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 200</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">#</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">interface</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> GigabitEthernet0/0/2</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> ip</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> source</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> check</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> user-bind</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> enable</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> ip</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> source</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> check</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> user-bind</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> alarm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> enable</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> ip</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> source</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> check</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> user-bind</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> alarm</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> threshold</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 200</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">#</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">return</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,24)]))}const r=i(l,[["render",h],["__file","index.html.vue"]]),d=JSON.parse('{"path":"/network/huawei/77vsea2v/","title":"接口绑定MAC-IP","lang":"zh-CN","frontmatter":{"title":"接口绑定MAC-IP","createTime":"2025/01/17 10:03:26","permalink":"/network/huawei/77vsea2v/","description":"配置通过IPSG功能对IP报文的接口+IP+MAC信息进行匹配检查示例 组网需求 如图10-2所示，HostA与HostB分别与Switch的GE0/0/1和GE0/0/2接口相连。要求使HostB不能仿冒HostA的IP和MAC欺骗Server，保证HostA的IP报文能正常上送。 img 配置思路 采用如下的思路在Switch上配置IPSG功能（假...","head":[["meta",{"property":"og:url","content":"https://docs.1259.net/network/huawei/77vsea2v/"}],["meta",{"property":"og:site_name","content":"DT"}],["meta",{"property":"og:title","content":"接口绑定MAC-IP"}],["meta",{"property":"og:description","content":"配置通过IPSG功能对IP报文的接口+IP+MAC信息进行匹配检查示例 组网需求 如图10-2所示，HostA与HostB分别与Switch的GE0/0/1和GE0/0/2接口相连。要求使HostB不能仿冒HostA的IP和MAC欺骗Server，保证HostA的IP报文能正常上送。 img 配置思路 采用如下的思路在Switch上配置IPSG功能（假..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://docs.1259.net/docs/1699415313991-91c77cb6-f700-407c-8573-66cbc0ef5f03.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-01-22T16:54:14.000Z"}],["meta",{"property":"article:modified_time","content":"2025-01-22T16:54:14.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"接口绑定MAC-IP\\",\\"image\\":[\\"https://docs.1259.net/docs/1699415313991-91c77cb6-f700-407c-8573-66cbc0ef5f03.png\\"],\\"dateModified\\":\\"2025-01-22T16:54:14.000Z\\",\\"author\\":[]}"]]},"headers":[],"readingTime":{"minutes":1.9,"words":571},"git":{"updatedTime":1737564854000,"contributors":[{"name":"guodilin","username":"guodilin","email":"guodilin@9219.net","commits":1,"avatar":"https://avatars.githubusercontent.com/guodilin?v=4","url":"https://github.com/guodilin"}]},"autoDesc":true,"filePathRelative":"notes/3.网络技术/1.华为/7.案例/接口绑定MAC-IP.md","bulletin":false}');export{r as comp,d as data};
