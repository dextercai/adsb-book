---
icon: circle-info
title: feeyo-adsb-golang
order: 1
---

feeyo-adsb-golang 是飞常准上传套件在Golang语言下的实现，以弥补官方Python版本在嵌入式等低功耗平台下上传套件的空白，并无需基础运行环境的安装。

GitHub开源：[https://github.com/dextercai/feeyo-adsb-golang](https://github.com/dextercai/feeyo-adsb-golang)

Github编译发布：[https://github.com/dextercai/feeyo-adsb-golang/releases](https://github.com/dextercai/feeyo-adsb-golang/releases)

暂无计划在境内开源平台发布。

## 实现原理

feeyo-adsb-golang 是官方套件上传部分在 Golang 下的实现，详细源码也非常简单，可以在 Github 上看到，主要是从 Dump1090 套件运行在 30003 的 BaseStation 端口读取消息，之后转发到飞常准服务器。本质上，设备支持 Dump1090，且 30003 端口开放，即可使用 feeyo-adsb-golang 套件。

## 使用说明

由于feeyo-adsb-golang项目不包括Dump1090，也不限制SBS服务是否运行在本机，因此你可能需要首先安装Dump1090（或readsb等等）。
安装Dump1090的说明，日后将在本站增加。

UUID在线生成可访问：[https://feeyo-uuid.dextercai.com](https://feeyo-uuid.dextercai.com)

上传套件仅需要一个可执行文件和可选的配置文件即可使用。

### 一般文件模式（默认）

你需要在程序同目录创建conf.ini文件，内容如下：

```
[config]
UUID=你的UUID（16位）
ip=127.0.0.1
port=30003
url=http://adsb.feeyo.com/adsb/ReceiveCompressADSB.php
```

以上展现的是dump1090运行在本机的情况，你也可以按照实际情况（主要是IP）进行填写。

### 命令行模式（进阶）

若对终端操作较为熟悉，可使用该方式。

```
Usage of ./adsb:
  -conf string
        conf文件位置 (default "./conf.ini")
  -feeyo-url string
        飞常准接口地址 (default "https://adsb.feeyo.com/adsb/ReceiveCompressADSB.php")
  -ip string
        dump1090服务IP (default "127.0.0.1")
  -port string
        dump1090服务端口 (default "30003")
  -use-file
        是否使用conf文件作为配置来源 (default true)
  -uuid string
        UUID 16位
```
