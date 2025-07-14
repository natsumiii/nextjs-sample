# Next.js サンプル

Next.jsのサンプルアプリケーションです。

## 概要

- **フロントエンド**: Next.js 14 (App Router)
- **バックエンド**: FastAPI (Python)
- **フォーム管理**: React Hook Form
- **スタイリング**: SCSS Modules

## セットアップ

### 前提条件
- Node.js 18+
- Python 3.11+
- npm または yarn

### インストール

1. リポジトリをクローン
```bash
git clone <repository-url>
cd nextjs-sample
```

2. フロントエンド依存関係をインストール
```bash
npm install
```

3. バックエンド依存関係をインストール
```bash
pip install fastapi uvicorn pydantic
```

## 実行方法
### フロントエンド・バックエンド

```bash
npm run dev:mock
```
http://localhost:3001 でアクセス可能

### フロントエンド（Next.js）
```bash
npm run dev
```
http://localhost:3001 でアクセス可能

### バックエンド（FastAPI）
```bash
python main.py
```
http://localhost:8000/docs でアクセス可能


## 使用方法

1. フロントエンドとバックエンドを起動
2. http://localhost:30001 にアクセス


## 参考資料

| タイトル             | URL                                                             |
| -------------------- | --------------------------------------------------------------- |
| Next.jsの考え方      | https://zenn.dev/akfm/books/nextjs-basic-principle/viewer/intro |
| FastAPI 公式         | https://fastapi.tiangolo.com/ja/                                |
| NEXT.JS 公式         | https://nextjs.org/docs                                         |
| React Hook Form 公式 | https://www.react-hook-form.com/                                |
| React 公式           | https://react.dev/                                              |
| TypeScript 公式      | https://www.typescriptlang.org/docs/                           |