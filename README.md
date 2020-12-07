# CapchaBot
滑块人机验证自动完成脚本

本项目为学习AI对象识别的应用。基于腾讯提供的人机验证服务，实现目标滑块位置识别，并自动拖拽滑块完成验证。

### 应用效果体验

1. 浏览器中安装tampermonkey扩展。
2. 打开tampermonkey选项页面，在"utilities"选项卡下，"Install from URL"中输入"https://raw.githubusercontent.com/ffantasy/CapchaBot/master/inject.js" ，点击安装。
3. 打开网址 https://007.qq.com/online.html ，点击体验验证码，弹出的滑块验证，脚本即会检测自动完成验证。

### 其它事项
1. AI模型较大，加载需要一定时间。
2. 本模型只采集214份样本进行训练，大概80%正确率，做为实验性质还算不错。
3. 如果验证失败，可以点击刷新验证码，脚本会再次执行自动验证。

### 参考
AI训练模型代码来自于：https://github.com/tensorflow/tfjs-examples/tree/master/simple-object-detection
