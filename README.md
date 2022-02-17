# vue-demo

> vue整合

## 整合相关知识点
### vue-cli创建项目
使用脚手架创建项目命令：vue init webpack vue-demo  
项目目录及其作用介绍：  
- build:         webpack相关配置文件  
- config:        vue基本配置文件（配置的监听端口，打包输出）
- node_modules:  依赖包
- src:           项目的核心文件
    - asserts    静态资源（样式类文件，如css,less,sass，以及一些内部js文件）
    - components 公共组件
    - router     路由（配置项目路由）
    - App.vue    根组件
    - main.js    入口文件
    - views      前端页面
        - layout 通用页面加载框架
        - home   首页
- static:        静态资源（一般放图片类资源）
- .babelrc       babel编译参数
- .editorconfig  代码格式
- .gitgnore      git上传需要忽略的文件配置
- .postcssrc.js  转换css的工具
- index.html     主页
- package.json   项目的基本信息

### 整合Element-UI
1.npm安装组件
```vb
    npm i element-ui -S
```
2.在main.js中导入到项目
```javascript
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
```

### 页面布局

### 引入scss
默认版本安装出现问题
```vb
npm install sass-loader@7.3.1 --save-dev
npm install node-sass@4.14.1
```
在build文件夹下的webpack.base.conf.js的rules里面添加如下配置：
```javascript
{
test: /\.sass$/,
loaders: ['style', 'css', 'scss']
}
```
### 路由vue-router

### 状态管理vuex

### 三方图标

### 国际化

### axios

### Mock.js


## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```
