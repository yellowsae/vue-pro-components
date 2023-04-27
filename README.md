使用 `lerna` + `monorepo` 构建组件库

#### lerna 的指令

##### lerna 版本管理

```bash
lerna version  # 会更新所有子包的版本号
```

- Patch 打补丁, 两个子包的版本号都变成了 0.0.1
- Minor 版本位号发生变更，例如 0.1.0
- Major 为大版本，两个子包都变为了 1.0.0  lerna.json中的version也变成了1.0.0。

需要单独修改 每个模块 的版本 `independent`，
Independent Mode 下，版本号是各管各的，按需选择。

```json
// lerna.json 
{
  "version": "independent" // 设置为independent
}

```

##### lerna 下子包的引用

子包之间的相互引用就是`monorepo`最大的特点。

子包之间都需要公用一个依赖库

```json
// package.json 最外一层的
"peerDependencies": {
  "vue": "^3.2.0"
}
```

然后在项目根目录的package.json中加一个统一安装依赖的脚本。（统一安装 vue）

```json
"scripts": {
  "bootstrap": "lerna bootstrap -- --hoist"
}
```

> lerna bootstrap不仅为各个 package 安装了自身的依赖，还将各个 package 以 symlink 的方式安装到了node_modules中，让其他 package 拥有了引用自己的能力。

子包之间的相互引用

```bash
npx lerna add vue-pro-component --scope=playground
```

在 `playground` 中 `package.json` 自动添加引入的组件

```json
"dependencies": {
  "vue": "^3.2.47",
  "vue-pro-components": "^2.0.0"  // 引入的组件 
},
```

预览效果
这需要把 playground 这个子包的开发环境跑起来，也就是要执行它的dev脚本。为了方便起见，我们可以在项目根目录的package.json中加一个playground:dev脚本，这里用到lerna run，它可以根据scope选项执行某个子包的脚本。

```json
"scripts": {
  "bootstrap": "lerna bootstrap -- --hoist",
  // 加入这条脚本
  "playground:dev": "lerna run --scope playground dev"
}
```
