# Espeak-ng TTS

## 简介

Espeak-ng TTS 是 Chrome 浏览器的 TTS 插件，使用 espeak-ng 作为 TTS 引擎。espeak-ng 运行在用户当前电脑上，响应速度极快，不会泄露用户数据。

## 如何使用

### 安装espeak-ng

In Ubuntu
```
sudo apt-get install espeak-ng
```

In ArchLinux
```
sudo pacman -S espeak-ng
```

### 下载代码
```
git clone https://github.com/ChanMo/espeak-ng-tts.git && cd espeak-ng-tts
```

### 安装API所需环境
```
python -m venv env
source env/bin/activate
cd api
pip install .
```

### 创建Systemctl服务
修改`tts.service`, 更改`/path/to/your/venv`到正确的路径
```
sudo cp tts.service /etc/systemctl/system/
sudo systemclt daemon-reload
sudo systemctl enable tts
sudo systemctl start tts
```

### 安装Chrome插件
在Chrome流览器中打开 `chrome://extensions/`, 确保"开发者模式"已开启

点击"加载已解压的扩展程序", 选择`espeak-ng-tts/plugin/`目录

### 完成

## 贡献指南

欢迎您为 Espeak-ng TTS 贡献代码。您可以通过以下方式贡献代码：

* 创建一个 GitHub 账户。
* Fork 该项目。
* 创建一个新的分支，并在该分支中进行修改。
* 提交修改，并创建一个 Pull Request。

## 联系我们

如果您有任何问题或建议，请通过以下方式联系我们：

* 电子邮件：[chan.mo@outlook.com]
* GitHub 问题：https://github.com/ChanMo/espeak-ng-tts/issues
