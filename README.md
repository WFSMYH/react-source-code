# react-source-code
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;断断续续算起来也看了将近一个月的,我们开门见山的说，以下我在阅读源码的时候遇到的一些问题，和一些对源码的理解。至于有解释得不对的地方，或者大家不能理解的一些内容，欢迎大家指正和探讨。
## 阅读前准备
首先我是在本地使用create-react-app搭建了一个简单的react项目，然后去了github上面拷贝了react的源码，其中react的源码都放在react文件夹下的packages文件夹中。同时在我们自己搭建的项目中，node_modules文件中可以找到react下的umd下的react.development.js这个js中存放的是打包好的react所有源码，等会我们就可以在这个js中去写debugegr进行调试，但是这个js是一个打包好的文件，不利于我们阅读，所以我们需要配合之前前copy下来的packages源码文件配合阅读。之所以这样做的呢是因为我在源码中没有发现类似可以直接run dev的命令，可以直接启动本地服务和热更新所以才多此一举，这里有了解的大佬可以一起讨论讨论。
## 从jsx到JavaScript的转换

## 常用API简介
### (1)
