# webpack入门学习笔记

## what？

[官网](https://webpack.github.io/docs/what-is-webpack.html)是这么说的~\(≧▽≦)/~

> webpack is a module bundler.

webpack是一个模块打包工具，将静态资源打包。

> webpack takes modules with dependencies and generates static assets representing those modules.

根据模块的依赖关系进行静态分析，然后将这些模块按照指定关系生成静态资源。

顺便引用官网的图~~~
![](https://webpack.github.io/assets/what-is-webpack.png)

ps：我目前还理解的比较浅显，回来继续更~~~接着下面

## why？

我的理解：
1. 支持 同步sync 和 异步async 两种模块机制。
2. 支持 Loaders，处理样式sass编译等，目前我只用过css打包成js（羞愧脸~~~~(>_<)~~~~）
3. 很多插件，代码压缩、热替换、生成html等。

## how？

> 借这里来回想怎么安装的，基本的结构，方便以后查阅，嘻嘻嘻。

#### 准备工作

1. 首先要有NodeJS, 因为自带npm，之后安装模块很常用到！

2. 用 npm 安装全局 webpack
```
$ npm install webpack -g
```

#### 配置

1. 进入项目目录，初始化 package.json
```
$ npm init
```
** 注意：** 在 "main" 中设置好入口文件 entry.js

2. 在项目下安装对webpack的依赖
```
$ npm install webpack --save-dev
```
生成 node_modules 文件夹

3. 新建文件夹 bin,src 分别存放 bundled file和 source file
```
mkdir src bin
```
有些 bin 又用 dist,build; src 用 app, 习惯不同而已。

4. 新建出口文件index.html
```
cd.>index.html

<html>
<head>
	<meta charset="UTF-8">
</head>
<body>
	<script src="bin/bundle.js"></script>
</body>
</html>
```

5. bin 新建 bundle.js , src 新建 entry.js
```
cd.>bin/bundle.js
cd.>src/entry.js
```

最后，文档结构是这样的。
![](http://p1.bqimg.com/567571/b0fb9cc67a9d5a23.png)

至此，可以开始编码了~~~~~

#### 配置文件

webpack.config.js 是配置文件，之后直接 webpack 就可以打包。
里面包含 入口 entry，输出 output，模块 module
![](http://p1.bqimg.com/567571/a3b98bc3e148aeba.png)

#### 补充内容

1. 入口文件

应用首次加载的文件，也是webpack开始追踪分析的依赖模块的入口。

2. 监视每个文件
```
webpack --watch
```
若文件有变化，就会重新编译并加到缓存。若无，则直接使用缓存。

3. 目前我对webpack的理解与应用

- 了解如何使用，配置。
- 会将css打包成js
- 编译sass，进行css,js,image的压缩，生成hash值来作为版本区分。
- jsx解释，ES6应用

4. webpack的应用场景

- 单页应用（spa）
因为webpack主张将所有东西打包一起，打包成一个文件，有一个或多个入口，只有一个出口。

- React 相关应用
- 移动端网页开发，主张简约、组件化，添加hash解决静态文件缓存严重的问题。

5. 需注意的问题：

- 能根据配置来自动加载模块，但不能自动安装需要的模块。
- 不能处理雪碧图。