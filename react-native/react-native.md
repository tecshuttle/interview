# React Native

### 安装

#### 简易沙盒

```bash
npm install -g create-react-native-app
create-react-native-app AwesomeProject
cd AwesomeProject
npm start
```

#### iOS完整原生环境

##### 1、安装node

```bash
brew install node
brew install watchman
npm config set registry https://registry.npm.taobao.org --global
npm config set disturl https://npm.taobao.org/dist --global
```

##### 2、安装react-native-cli

```bash
npm install -g yarn react-native-cli
yarn config set registry https://registry.npm.taobao.org --global
yarn config set disturl https://npm.taobao.org/dist --global
```

注意：不要使用 cnpm！cnpm 安装的模块路径比较奇怪，packager 不能正常识别！原先使用过cnpm作为源，安装报错，重装node就可以。

##### 3、安装Xcode

```bash
react-native init AwesomeProject
```

这一步出了几个问题：

1. 安装cocoapods时，无法git clone项目，用了一个收费了翻墙帐号，速度由几K升到几M才解决。
2. 无法找到iphoneos，需要指定Xcode的路径 `sudo xcode-select --switch /Applications/Xcode.app/Contents/Developer/ `。

##### 4、运行app

```bash
cd AwesomeProject
react-native run-ios
```

- Cmd + R: reload
- Cmd + D: show debug menu

#### Android完整原生环境

##### 1-2、参考iOS平台

##### 3、安装Android

下载Android，安装界面中选择"Custom"选项，确保选中了以下几项：

1. Android SDK
2. Android SDK Platform
3. Performance (Intel ® HAXM)
4. Android Virtual Device

##### 4、运行app

```bash
# Have an Android emulator running (quickest way to get started), or a device connected.
cd AwesomeProject
react-native run-android
```

app安装到模拟器不成功，显示`License for package Android SDK Platform 28 not accepted.`，执行下面的命令，接受所有授权，6个。

```bash
sudo ~/Library/Android/sdk/tools/bin/sdkmanager --licenses
```

- 双击R：reload
- Cmd + M：无法弹出debug menu。

### 打包



### 视频试验

#### 1、安装录像和播放插件

```bash
npm install react-native-video --save
react-native link react-native-video
npm install react-native-camera --save
react-native linkreact-native-camera
```

#### 2、播放视频

react-native 0.60与react-native-video不兼容，运行时找不到RCTVideo，使用0.59.0。

```bash
react-nataive init rn_lab --version 0.59.0
```

react-native-video使用：

```javascript
import Video from 'react-native-video';

<Video source={require('./assets/ouhk.mp4')} style={styles.backgroundVideo}/>
  
const styles = StyleSheet.create({
    backgroundVideo: {
        position: 'absolute',
        //top: 0,
        height: 600,
        left: 0,
        bottom: 0,
        right: 0,
    },
});
```

#### 3、录制视频

**How to access iOS simulator camera?**

It's not possible to access camera of your development machine to be used as simulator camera. Camera functionality is not available in any iOS version and any Simulator. You will have to use device only for testing camera purpose.

示例代码：https://www.jianshu.com/p/5e7307408a8e

在Info.plist文件中加入授权许可项：

```xml
<key>NSCameraUsageDescription</key>
<string>Your message to user when the camera is accessed for the first time</string>
<key>NSMicrophoneUsageDescription</key>
<string>Your message to user when the microphone is accessed for the first time</string>
<key>NSPhotoLibraryUsageDescription</key>
<string>Your message to user when the photo library is accessed for the first time</string>
<key>NSPhotoLibraryAddUsageDescription</key>
<string>Your message to user when the photo library is accessed for the first time</string>
```

#### 4、在设备上运行

https://reactnative.cn/docs/running-on-device/

### 系统结构

### 路由

### 组件
