## 指令列表

- `npm install` - 初次下載該範例專案後，需要使用 npm install 來安裝套件
- `npm run dev` - 執行開發模式
  - 若沒有自動開啟瀏覽器，可嘗試手動在瀏覽器上輸入
    `http://localhost:5173/<專案名稱>/pages/index.html`
- `npm run build` - 執行編譯模式（不會開啟瀏覽器）

## 資料夾結構

- assets # 靜態資源放置處

  - images # 圖片放置處
  - scss # SCSS 的樣式放置處

- layout # ejs 模板放置處
- pages # 頁面放置處

- JavaScript 程式碼可寫在 main.js 檔案

### 注意事項

- 已將 pages 資料夾內的 index.html 預設為首頁，建議不要任意修改 index.html 的檔案名稱
- .gitignore 檔案是用來忽略掉不該上傳到 GitHub 的檔案（例如 node_modules），請不要移除 .gitignore

## 開發模式的監聽

vite 專案執行開發模式 `npm run dev` 後即會自動監聽，不需要使用 `Live Sass Compiler` 的 `Watch SCSS` 功能

# Git & GitHub 教學手冊 建議閱讀的教學

- Git 分支(branch)

  - [git checkout 移動 HEAD 指標](https://w3c.hexschool.com/git/9a164fbe)

  - [分支建立(git branch)](https://w3c.hexschool.com/git/a8ee6eee)

  - [分支合併(git merge)](https://w3c.hexschool.com/git/450914e9)

    > 這是本地分支合併，但是這次主要使用的都是 Github 發 PR 的方式合併。

- Git 衝突

  - [本地分支衝突](https://w3c.hexschool.com/git/921e90ff)

  - [遠端協作分支衝突](https://w3c.hexschool.com/git/b0c9a9a4)

- Git 遠端多人協作 (必看)

  - [GitHub 發 PR (pull request) 流程](https://w3c.hexschool.com/git/cc7d70b7)

  - [GitHub Flow 介紹](https://w3c.hexschool.com/git/cad4551b)

  - [GitHub Flow 線上實際演練](https://w3c.hexschool.com/git/bcce3d47)
