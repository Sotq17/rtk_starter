# react redux(redux toolkit)を使ったテンプレート

## 開発環境

- node v12.13.1
- npm v6.13.4

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

### test

```
$npm t
```

### 構成

react / redux-tool-kit を使用

react v16.13.1,
reduxjs/toolkit v1.3.6

![redux-tool-kit](https://user-images.githubusercontent.com/47517709/90846697-ad023980-e3a3-11ea-91cd-d2f6350c95df.png)

```
─── src
    ├── test(テストファイル置き場)
    ├── img (画像置き場)
    │   └── common
    │       └── favicon.png
    ├── pug (render先を指定)
    │   └── index.pug
    ├── ts (react外でjsを使うときに使用)
    │   └── app.ts
    ├── tsconfig.json
    └── tsx
        ├── index.tsx (エントリーポイント)
        ├── stores
        │   ├── index.ts (slicesディレクトリで作られたSliceを結合する)
        │   └── slices (このディレクトリ下で各sliceファイルを扱う)
        │       └── userSlice.ts
        ├── style（各page,componentのcssを切り分けたい時に使用)
        │   ├── GlobalStyle.tsx
        │   ├── components
        │   │   ├── atoms
        │   │   │   └── Button.tsx
        │   │   └── block
        │   │       ├── Footer.tsx
        │   │       └── Header.tsx
        │   ├── pages
        │   │   ├── Login.tsx
        │   │   └── Top.tsx
        │   ├── resetStyle.tsx
        │   └── variables.tsx
        ├── utils(定数などを管理)
        │   └── constants.tsx
        └── views
            ├── components（使い回しのできる要素）
            │   ├── atoms(最小単位のcomponent)
            │   │   └── Button.tsx
            │   ├── block(atomsを組み合わせたり、atomsでは管理しきれないcomponent)
            │   │   ├── Footer.tsx
            │   │   └── Header.tsx
            │   └── modules(機能を持ったcomponent)
            │       └── ScrollTop.tsx
            └── pages（各ページの呼び出し先）
                ├── login
                │   └── Login.tsx
                └── top
                    ├── Top.tsx
                    └── TopList.tsx（そのページでしか使われないreact-componentは同階層に設置）
```

### 解説

https://qiita.com/Sotq_17/items/7c7ab9880597336b3ee5
