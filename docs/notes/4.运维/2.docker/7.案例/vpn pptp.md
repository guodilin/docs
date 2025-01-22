---
title: vpn pptp
createTime: 2025/01/17 10:10:20
permalink: /article/e8bgwior/
---
```bash
# 安装 vpn-pptp
docker run -d --privileged --net=host mobtitude/vpn-pptp
docker run -d --name vpn-server --net=host --privileged -v /vpn/chap-secrets:/etc/ppp/chap-secrets mobtitude/vpn-pptp
docker run -d --privileged --net=host -v {local_path_to_chap_secrets}:/etc/ppp/chap-secrets mobtitude/vpn-pptp
# 拷贝 chap-secrets至容器中
docker cp chap-secrets  e2a247981306:/etc/ppp/
```

```
# Secrets for authentication using PAP
# client    server      secret      acceptable local IP addresses
guodilin    *           ASDxiaoguo    *
```

