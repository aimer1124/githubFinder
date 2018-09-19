使用JS来获取Github信息，使用Github的[OAuth](https://developer.github.com/apps/building-oauth-apps/authorizing-oauth-apps/)来获取Github的权限数据。

## Project Structure

```
.
├── README.md
├── app.js
├── github.js
├── index.html
└── ui.js
```

- README.md: 帮助手册
- app.js: 应用程序相关
- github.js: Github相关信息处理
- index.html: 初始页面展示
- ui.js: 逻辑处理UI

## 使用说明

- 使用`Visual Studio Code`的`Live Server`打开`index.html`
- 在页面中，搜索github用户名，列表中即可显示Github用户的信息和Repo列表。
