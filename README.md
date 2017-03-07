# vue_dev

> 一个vue2.x + vue-router + vuex + element-ui + webpack + es6的后台（SingleDog）管理系统
> 代码规范参照eslint具体规范

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```
## 具体说明
```bash
# 顶部横置的导航在common/head-nav目录下
登出以及个人信息展示

# 菜单列表在common/slide-nav目录下
请确保菜单的'index'属性与路由的path保持一致，这是为了刷新的时候，菜单高亮显示的做法

# 其他的common是为了布局，以后通用的组件也会塞到common下

# 所有的业务组件都写到components目录下
业务组件目前做了详细拆分，组件里面只做组件内部自己状态管理，全局数据都存到store里面，涉及到的state、action、mutation、getter
以及这四者组成的module都拆分到对应的文件夹内，虽然现在这么做有点大炮射蚊子的赶脚，不过这是为了构建大型应该做的练习

# 入口文件为根目录下的main.js
其中扩展了vue实例上的一个方法，将axios（vue作者停止对vue-resourse更新，希望开发vue的开发者使用的一个请求插件）绑定到vue实例上，
在所有的子组件里面，使用'this.$axios'即可调用，store和router都将注入到vue子组件内部

# 路由文件为根目录下的router.js
路由文件，使用vue-router的按需加载的模式，其中路由简单使用了过渡动画的效果，具体代码可以参考common/layout组件

# vuex的初始化在根目录下的store.js
使用module模式，并在开发环境下，控制台打印logger，方便调试

```
