# react redux(redux toolkit)をサクッと使うための環境

## 開発環境
* node v12.13.1
* npm v6.13.4

### install
```
$ npm ci
```

### usage
```
$ npm run start
```

### build
```
$ npm run build
```

### 構成

react / redux-tool-kitを使用

react v16.13.1,
reduxjs/toolkit v1.3.6

![redux-tool-kit](https://user-images.githubusercontent.com/47517709/90846697-ad023980-e3a3-11ea-91cd-d2f6350c95df.png)

```
─── src
    ├── img (画像置き場)
    │   └── common
    │       └── favicon.png
    ├── pug
    │   ├── _partial
    │   │   ├── _template.pug
    │   │   ├── footer.pug
    │   │   └── header.pug
    │   └── index.pug (reactをrenderする場所)
    ├── ts
    │   └── app.ts (react外でjsを使用する時に使用)
    ├── tsconfig.json
    └── tsx (react用ディレクトリ)
        ├── components （コンポーネント用ディレクトリ)
        │   ├── login(コンポーネントごとにディレクトリを分ける)
        │   │   ├── Login.tsx(呼び出されるreactファイル)
        │   │   └── loginSlice.ts(各コンポーネントで使われるロジックをまとめる)
        │   ├── styledComponent
        │   │   └── GlobalStyle.tsx
        │   └── top
        │       ├── Top.tsx
        │       └── topSlice.ts
        ├── index.tsx (エントリーポイント / routingを管理)
        └── stores (それぞれのSliceを呼び出し、configureStoreで結合する)
            └── index.ts
```

*conponentsが増えすぎるのでpagesディレクトリとかを作ってpageごとにcomponentを呼び出す構成でも良いかも