Infomation
```
 Node v16.18
 Nuxt v3.6.5
 Flowbit v1.8.1
 TailwindCss v3.3.3
```

Install

```
npm install
```

如果你還沒安裝json-server
```
npm install -g json-server
```

Run json-server
```
npm run db
```

Development
```
npm run dev
```

Build 
```
npm run build
```

Deploy
```
待確認
```


# Dash 團隊寫作規範

## components、stores 命名方式 

### (大駝峰寫法)

 - 命名：xxxComponent(功能+Components)
 - 例如：NavbarComponents、ProductStores

## pages 命名方式

 - 檔名就是路由名稱，由設計稿決定頁面名稱

## git commit 規範 

- 可以參考 https://heidiliu2020.github.io/git-commit-message/

## github 開分支命名
-  命名：分支類別-開發者名稱-開發功能/區塊
-  例如：feat-su-header、fix-yu-header
-  分支類別可以參考commit訊息的類別規範(上面的連結)

# 檔案架構說明

```
│ 
│ tailwind.config.js    客製tailwind在這邊   
| db.json               json server db 
|                       打(http://localhost:3001/game/1426210)就可以拿到假資料格式
├─assets
│  └─style         若有需要另外新增css檔案可以放這邊
│   └─ tailwind.css   
|  └─images        需要編譯的圖片放這邊   
|
├─example
| └─── data.json   遊戲內頁後端資料格式範例
|
├─components     
├─layouts   
├─pages
|
├─public
│  └─images        放不需編譯的圖片 
| 
├─server 
|
└─stores           狀態管理區
```
