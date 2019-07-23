[![UbiBot Logo](https://www.ubibot.io/wp-content/themes/portal-datadudu/images/ico/newLogo_en.png)](https://ubibot.io/) 


### UbiBot APP 插件

plugman create --name UbibotPluginZendesk --plugin_id ubibot-plugin-zendesk --plugin_version 0.1.0

plugman platform add --platform_name android

plugman platform add --platform_name ios

plugman createpackagejson .

#### 如何安装

ionic cordova plugin add https://github.com/zetta-sense/ubibot-plugin-zendesk.git

#### 移除插件

ionic cordova plugin remove ubibot-plugin-zendesk

cordova plugin list


#### misc


根据 https://develop.zendesk.com/hc/en-us/community/posts/360001687488-Zendesk-SDK-integration-problem

compileSdkVersion

The SDK is built using compileSdkVersion of 27 this might be an issue. Can you update your app's compileSdkVersion, buildToolsVersion and support libraries to 27 and try again. You will need to update the gradle version from 2.3.3 as well.

需要27版本api

经测试3.x用的api 28，需要降版本

#### sdk ver

~/Library/Android/sdk/tools/bin/sdkmanager --list


#### 其它参考

https://github.com/fleetio/cordova-plugin-zendesk

