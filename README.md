# 参考文档

- Vuejs参考：https://cn.vuejs.org/v2/guide/
- vue cli : https://cli.vuejs.org/zh/guide/
- Vue.config.js: https://cli.vuejs.org/zh/config/#%E5%85%A8%E5%B1%80-cli-%E9%85%8D%E7%BD%AE
- vue router: https://router.vuejs.org/zh/guide/
- vuex ：https://vuex.vuejs.org/zh/
- Vant : https://youzan.github.io/vant/
- antd框架参考: https://pro.loacg.com/docs/getting-started
- 更新日志: https://pro.loacg.com/docs/changelog
- 常见问题: https://pro.loacg.com/docs/faq
- HTML5 History模式后端配置例子： https://router.vuejs.org/zh/guide/essentials/history-mode.html#%E5%90%8E%E7%AB%AF%E9%85%8D%E7%BD%AE%E4%BE%8B%E5%AD%90



项目下载和运行
----

- 拉取项目代码
```bash
git clone https://github.com/zhaogaolei/lz-ant-vant-vue-pro.git
cd ant-design-pro-vue
```

- 安装依赖
```
npm install
```

- 开发模式运行
```
npm start
```

- 编译PC包
```
npm run build-index
```

- 编译mobile包
```
npm run build-m
```

- Lints and fixes files
```
npm run lint
```



其他说明
----

- **关于 Issue 反馈 (重要!重要!重要!) 请在开 *Issue* 前，先阅读该内容：[Issue / PR 编写建议](https://github.com/sendya/ant-design-pro-vue/issues/90)** 

- 项目使用的 [vue-cli3](https://cli.vuejs.org/guide/), 请确保你所使用的 vue-cli 是新版，并且已经学习 cli 官方文档使用教程

- 关闭 Eslint (不推荐) 移除 `package.json` 中 `eslintConfig` 整个节点代码, `vue.config.js` 下的 `lintOnSave` 值改为 `false`

- 开启组件按需加载 `/src/main.js` L14 修改为 `import './core/lazy_use'`

- [修改 Ant Design 配色 (@kokoroli)](https://github.com/kokoroli/antd-awesome/blob/master/docs/Ant_Design_%E6%A0%B7%E5%BC%8F%E8%A6%86%E7%9B%96.md)

- I18n: [多语言支持 (@musnow)](./src/locales/index.js)

- 生成环境默认不加载 `mock`，更多详情请看 `src/mock/index.js`





