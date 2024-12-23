# 《图解HTTP》

## 第1章　了解Web及网络基础　

　1.1　使用HTTP协议访问Web　
　1.2　HTTP的诞生　
　　1.2.1　为知识共享而规划Web　
　　1.2.2　Web成长时代　
　　1.2.3　驻足不前的HTTP　
　1.3　网络基础TCP/IP　
　　1.3.1　TCP/IP协议族　
　　1.3.2　TCP/IP的分层管理　
　　1.3.3　TCP/IP通信传输流　
　1.4　与HTTP关系密切的协议：IP、TCP和DNS　
　　1.4.1　负责传输的IP协议　
　　1.4.2　确保可靠性的TCP协议　
　1.5　负责域名解析的DNS服务　
　1.6　各种协议与HTTP协议的关系　
　1.7　URI和URL
　　1.7.1　统一资源标识符　
　　1.7.2　URI格式

## 第2章　简单的HTTP协议　

　2.1　HTTP协议用于客户端和服务器端之间的通信　
　2.2　通过请求和响应的交换达成通信　
　2.3　HTTP是不保存状态的协议　
　2.4　请求URI定位资源　
　2.5　告知服务器意图的HTTP方法　
　2.6　使用方法下达命令　
　2.7　持久连接节省通信量　
　　2.7.1　持久连接　
　　2.7.2　管线化　
　2.8　使用Cookie的状态管理　

## 第3章　HTTP报文内的HTTP信息　

　3.1　HTTP报文　
　3.2　请求报文及响应报文的结构　
　3.3　编码提升传输速率　
　　3.3.1　报文主体和实体主体的差异　
　　3.3.2　压缩传输的内容编码　
　　3.3.3　分割发送的分块传输编码　
　3.4　发送多种数据的多部分对象集合　
　3.5　获取部分内容的范围请求　
　3.6　内容协商返回最合适的内容　

## 第4章　返回结果的HTTP状态码　

### 4.1 状态码告知从服务器端返回的请求结果　

### 4.2 2XX成功　

　　4.2.1　200 OK　
　　4.2.2　204 No Content　
　　4.2.3　206 Partial Content　

### 4.3 3XX重定向　

　　4.3.1　301 Moved Permanently　
　　4.3.2　302 Found　
　　4.3.3　303 See Other　
　　4.3.4　304 Not Modified　
　　4.3.5　307 Temporary Redirect　

### 4.4 4XX客户端错误　

　　4.4.1　400 Bad Request　
　　4.4.2　401 Unauthorized　
　　4.4.3　403 Forbidden　
　　4.4.4　404 Not Found　

### 4.5 5XX服务器错误　

　　4.5.1　500 Internal Server Error　
　　4.5.2　503 Service Unavailable　

## 第5章　与HTTP协作的Web服务器　

　5.1　用单台虚拟主机实现多个域名　
　5.2　通信数据转发程序：代理、网关、隧道　
　　5.2.1　代理　
　　5.2.2　网关　
　　5.2.3　隧道　
　5.3　保存资源的缓存　
　　5.3.1　缓存的有效期限　
　　5.3.2　客户端的缓存　

## 第6章　HTTP首部　

### 6.1 HTTP报文首部　

### 6.2 HTTP首部字段　

　　6.2.1　HTTP首部字段传递重要信息　
　　6.2.2　HTTP首部字段结构　
　　6.2.3　4种HTTP首部字段类型　
　　6.2.4　HTTP/1.1首部字段一览　
　　6.2.5　非HTTP/1.1首部字段　
　　6.2.6　End-to-end首部和Hop-by-hop首部　

### 6.3 HTTP/1.1通用首部字段　

　　6.3.1　Cache-Control　
　　6.3.2　Connection　
　　6.3.3　Date　
　　6.3.4　Pragma　
　　6.3.5　Trailer　
　　6.3.6　Transfer-Encoding　
　　6.3.7　Upgrade　
　　6.3.8　Via　
　　6.3.9　Warning　

### 6.4 请求首部字段　

　　6.4.1　Accept　
　　6.4.2　Accept-Charset　
　　6.4.3　Accept-Encoding　
　　6.4.4　Accept-Language　
　　6.4.5　Authorization　
　　6.4.6　Expect　
　　6.4.7　From　
　　6.4.8　Host　
　　6.4.9　If-Match　
　　6.4.10　If-Modified-Since　
　　6.4.11　If-None-Match　
　　6.4.12　If-Range　
　　6.4.13　If-Unmodified-Since　
　　6.4.14　Max-Forwards　
　　6.4.15　Proxy-Authorization　
　　6.4.16　Range　
　　6.4.17　Referer　
　　6.4.18　TE　
　　6.4.19　User-Agent　

### 6.5 响应首部字段

　　6.5.1　Accept-Ranges　
　　6.5.2　Age　
　　6.5.3　ETag　
　　6.5.4　Location　
　　6.5.5　Proxy-Authenticate　
　　6.5.6　Retry-After　
　　6.5.7　Server　
　　6.5.8　Vary　
　　6.5.9　WWW-Authenticate　

### 6.6 实体首部字段

　　6.6.1　Allow　
　　6.6.2　Content-Encoding　
　　6.6.3　Content-Language　
　　6.6.4　Content-Length　
　　6.6.5　Content-Location　
　　6.6.6　Content-MD5　
　　6.6.7　Content-Range　
　　6.6.8　Content-Type　
　　6.6.9　Expires　
　　6.6.10　Last-Modified　

### 6.7 为Cookie服务的首部字段　

　　6.7.1　Set-Cookie　
　　6.7.2　Cookie　

### 6.8 其他首部字段

　6.8.1　X-Frame-Options　
　6.8.2　X-XSS-Protection　
　6.8.3　DNT　
　6.8.4　P3P　

## 第7章　确保Web安全的HTTPS　

　7.1　HTTP的缺点　
　　7.1.1　通信使用明文可能会被窃听　
　　7.1.2　不验证通信方的身份就可能遭遇伪装　
　　7.1.3　无法证明报文完整性，可能已遭篡改　
　7.2　HTTP 加密 认证 完整性保护=HTTPS　
　　7.2.1　HTTP加上加密处理和认证以及完整性保护后即是HTTPS　
　　7.2.2　HTTPS是身披SSL外壳的HTTP　
　　7.2.3　相互交换密钥的公开密钥加密技术　
　　7.2.4　证明公开密钥正确性的证书　
　　7.2.5　HTTPS的安全通信机制　

## 第8章　确认访问用户身份的认证　

　8.1　何为认证　
　8.2　BASIC认证　
　8.3　DIGEST认证
　8.4　SSL客户端认证
　　8.4.1　SSL客户端认证的认证步骤　
　　8.4.2　SSL客户端认证采用双因素认证　
　　8.4.3　SSL客户端认证必要的费用　
　8.5　基于表单认证　
　　8.5.1　认证多半为基于表单认证　
　　8.5.2　Session管理及Cookie应用　

## 第9章　基于HTTP的功能追加协议　

　9.1　基于HTTP的协议
　9.2　消除HTTP瓶颈的SPDY　
　　9.2.1　HTTP的瓶颈　
　　9.2.2　SPDY的设计与功能　
　　9.2.3　SPDY消除Web瓶颈了吗　
　9.3　使用浏览器进行全双工通信的WebSocket　
　　9.3.1　WebSocket的设计与功能　
　　9.3.2　WebSocket协议　
　9.4　期盼已久的HTTP/2.0　
　9.5　Web服务器管理文件的WebDAV　
　　9.5.1　扩展HTTP/1.1的WebDAV　
　　9.5.2　WebDAV内新增的方法及状态码　

## 第10章　构建Web内容的技术　

　10.1　HTML　
　　10.1.1　Web页面几乎全由HTML构建　
　　10.1.2　HTML的版本　
　　10.1.3　设计应用CSS　
　10.2　动态HTML　
　　10.2.1　让Web页面动起来的动态HTML　
　　10.2.2　更易控制HTML的DOM　
　10.3　Web应用　
　　10.3.1　通过Web提供功能的Web应用　
　　10.3.2　与Web服务器及程序协作的CGI　
　　10.3.3　因Java而普及的Servlet　
　10.4　数据发布的格式及语言　
　　10.4.1　可扩展标记语言　
　　10.4.2　发布更新信息的RSS/Atom　
　　10.4.3　JavaScript衍生的轻量级易用JSON　

## 第11章　Web的攻击技术　

　11.1　针对Web的攻击技术　
　　11.1.1　HTTP不具备必要的安全功能　
　　11.1.2　在客户端即可篡改请求　
　　11.1.3　针对Web应用的攻击模式　
　11.2　因输出值转义不完全引发的安全漏洞　
　　11.2.1　跨站脚本攻击　
　　11.2.2　SQL注入攻击　
　　11.2.3　OS命令注入攻击　
　　11.2.4　HTTP首部注入攻击　
　　11.2.5　邮件首部注入攻击　
　　11.2.6　目录遍历攻击　
　　11.2.7　远程文件包含漏洞　
　11.3　因设置或设计上的缺陷引发的安全漏洞　
　　11.3.1　强制浏览　
　　11.3.2　不正确的错误消息处理　
　　11.3.3　开放重定向　
　11.4　因会话管理疏忽引发的安全漏洞　
　　11.4.1　会话劫持　
　　11.4.2　会话固定攻击　
　　11.4.3　跨站点请求伪造　
　11.5　其他安全漏洞　
　　11.5.1　密码破解　
　　11.5.2　点击劫持　
　　11.5.3　DoS攻击　
　　11.5.4　后门程序　