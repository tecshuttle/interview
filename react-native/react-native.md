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

#### 其它

##### 为什么IOS Simulator动画速度特别慢？

我怀疑你是不是在模拟器上面不小心按到了command + T，然后打开了这个：Debug -> Slow Animations。

我居然也是打开了这个。

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

##### 什么是react-navigation?

react-native从开源至今，一直存在几个无法解决的毛病，偶尔就会复发让人隐隐作痛，提醒你用的不是原生，其中包括列表的复用问题，导航跳转不流畅的问题等等。终于facebook坐不住了，在前一段时间开始推荐使用react-navigation，并且在0.44发布的时将之前一直存在的`Navigator`废弃了。

`react-navigation`是致力于解决导航卡顿，数据传递，Tabbar和navigator布局，支持`redux`。虽然现在功能还不完善，但基本是可以在项目中推荐使用的。

react-navigation分为三个部分。

- StackNavigator类似顶部导航条，用来跳转页面和传递参数。
- TabNavigator类似底部标签栏，用来区分模块。
- DrawerNavigator抽屉，类似从App左侧滑出一个页面，在这里不做讲解。

##### 安装react-navigation

```bash
npm install react-navigation --save
npm install react-native-gesture-handler --save
react-native link react-native-gesture-handler
```

报错_RNGestureHandlerModule.default.Direction如何解决？

**for android**: 这个没试。

1. install https://github.com/mikehardy/jetifier
2. npx jetify

**for ios**: 这个试了，有效。

1. cd ios
2. pod install

##### createStackNavigator

```javascript
import React, {Component} from 'react';
import {AppRegistry, View, Text} from 'react-native';
import {name as appName} from './app.json';
import {createStackNavigator, createAppContainer} from 'react-navigation';

class HomeScreen extends React.Component {
    render() {
        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Text>Home Screen</Text>
            </View>
        );
    }
}

class DetailsScreen extends React.Component {
    render() {
        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Text>Details Screen</Text>
            </View>
        );
    }
}

const RootStack = createStackNavigator(
    {
        Home: HomeScreen,
        Details: DetailsScreen,
    },
    {
        initialRouteName: 'Home',
    }
);

const AppContainer = createAppContainer(RootStack);

class App extends React.Component {
    render() {
        return <AppContainer/>;
    }
}

AppRegistry.registerComponent(appName, () => App);
```

##### createBottomTabNavigator

```javascript
import React, {Component} from 'react';
import {AppRegistry, View, Text, Button, Platform} from 'react-native';
import {name as appName} from './app.json';
import {createBottomTabNavigator, createAppContainer} from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';

class StatusScreen extends React.Component {
    render() {
        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text>动态！</Text>
            </View>
        );
    }
}

class MessagesScreen extends React.Component {
    render() {
        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text>消息列表!</Text>
            </View>
        );
    }
}


class FriendsScreen extends React.Component {
    render() {
        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text>好友列表!</Text>
            </View>
        );
    }
}

class SettingsScreen extends React.Component {
    render() {
        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text>设置！</Text>
            </View>
        );
    }
}

const TabNavigator = createBottomTabNavigator(
    {
        Messages: {
            screen: MessagesScreen,
            navigationOptions: () => ({
                title: '消息',
                headerBackTitle: null
            }),
        },
        Friends: {
            screen: FriendsScreen,
            navigationOptions: () => ({
                title: '好友',
                headerBackTitle: null
            }),
        },
        Status: {
            screen: StatusScreen,
            navigationOptions: () => ({
                title: '我',
                headerBackTitle: null
            }),
        },
        Settings: {
            screen: SettingsScreen,
            navigationOptions: () => ({
                title: '设置',
                headerBackTitle: null
            }),
        },
    },
    {
        defaultNavigationOptions: ({navigation}) => ({
            tabBarIcon: ({focused, horizontal, tintColor}) => {
                const {routeName} = navigation.state;
                let iconName;
                if (routeName === 'Messages') {
                    iconName = `ios-information-circle${focused ? '' : '-outline'}`;
                } else if (routeName === 'Settings') {
                    iconName = `ios-options`;
                } else if (routeName === 'Status') {
                    iconName = `ios-compass`;
                } else if (routeName === 'Friends') {
                    iconName = `ios-person`;
                }

                // You can return any component that you like here!
                return <Ionicons name={iconName} size={25} color={tintColor}/>;
            },
        }),
        tabBarOptions: {
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
        },
    }
);

const AppContainer = createAppContainer(TabNavigator);

class App extends React.Component {
    render() {
        return <AppContainer/>;
    }
}

AppRegistry.registerComponent(appName, () => App);
```

### 组件