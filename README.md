[![UbiBot Logo](https://www.ubibot.io/wp-content/themes/portal-datadudu/images/ico/newLogo_en.png)](https://ubibot.io/) 


### UbiBot APP 插件

ref: plugman create --name ubibot-mobile-plugin --plugin_id ubibot-mobile-plugin --plugin_version 0.1.0

#### 如何创建plugin

plugman create --name UbibotMobilePlugin --plugin_id ubibot-mobile-plugin --plugin_version 0.1.0 --path .

plugman platform add --platform_name android

plugman platform add --platform_name ios

#### 如何安装

ionic cordova plugin add https://github.com/zetta-sense/ubibot-mobile-plugin.git

#### 移除插件

ionic cordova plugin remove ubibot-mobile-plugin

cordova plugin list


#### misc


    <framework custom="true" src="src/android/UbibotMobilePlugin.gradle" type="gradleReference" />



根据 https://develop.zendesk.com/hc/en-us/community/posts/360001687488-Zendesk-SDK-integration-problem

compileSdkVersion

The SDK is built using compileSdkVersion of 27 this might be an issue. Can you update your app's compileSdkVersion, buildToolsVersion and support libraries to 27 and try again. You will need to update the gradle version from 2.3.3 as well.

需要27版本api

#### sdk ver

~/Library/Android/sdk/tools/bin/sdkmanager --list


#### 其它参考

https://github.com/fleetio/cordova-plugin-zendesk

