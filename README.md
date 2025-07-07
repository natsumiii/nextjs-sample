# Next.js + FastAPI + React Hook Form サンプル

Next.jsとFastAPIを使用したReact Hook Formのサンプルアプリケーションです。

## 概要

このプロジェクトは、モダンなWeb開発技術を組み合わせたフォーム実装のサンプルです。

- **フロントエンド**: Next.js 14 (App Router)
- **バックエンド**: FastAPI (Python)
- **フォーム管理**: React Hook Form
- **スタイリング**: SCSS Modules

## 機能

- 新規ユーザー登録フォーム
- ユーザー情報編集フォーム
- 動的フォームフィールド
- バリデーション機能
- レスポンシブデザイン

## 技術スタック

### フロントエンド
- Next.js 14
- TypeScript
- React Hook Form
- SCSS Modules

### バックエンド
- FastAPI
- Python 3.11+
- Pydantic

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

### フロントエンド（Next.js）
```bash
npm run dev
```
http://localhost:3001 でアクセス可能

### バックエンド（FastAPI）
```bash
python main.py
```
http://localhost:8000 でアクセス可能

## プロジェクト構造

```
nextjs-sample/
├── app/
│   ├── form-demo/
│   │   ├── _components/
│   │   │   ├── BasicForm.tsx
│   │   │   ├── DynamicForm.tsx
│   │   │   └── UserRegistrationForm.tsx
│   │   ├── new/
│   │   │   └── page.tsx
│   │   └── edit/
│   │       └── [id]/
│   │           └── page.tsx
│   ├── layout.tsx
│   └── page.tsx
├── main.py
└── README.md
```

## 使用方法

1. フロントエンドとバックエンドを起動
2. http://localhost:3000/form-demo にアクセス
3. 各サンプルフォームを試す

## ライセンス

MIT License

## 貢献

プルリクエストやイシューの報告を歓迎します。

## 🛠️ 技術スタック

### フロントエンド
- **Next.js** 15.3.2 (App Router)
- **React** 19.0.0
- **TypeScript** 5.x
- **Sass** 1.89.2 (スタイリング)

### バックエンド（フォームデモ用）
- **FastAPI** (Python)
- **Pydantic** (データバリデーション)

## 📦 セットアップ

### 前提条件
- Node.js 18以上
- Python 3.8以上（バックエンド機能を使用する場合）

### インストール

1. **依存関係のインストール**
```bash
# フロントエンド依存関係
npm install

# バックエンド依存関係
pip install fastapi uvicorn pydantic[email]
```

2. **開発サーバーの起動**

#### フロントエンドのみ
```bash
npm run dev
```

#### フロントエンド + バックエンド（フォームデモ用）
```bash
npm run dev:mock
```

3. **アクセス**
- フロントエンド: http://localhost:3001
- バックエンドAPI: http://localhost:8000（フォームデモ用）
- API ドキュメント: http://localhost:8000/docs（フォームデモ用）

## 📁 プロジェクト構造

```
nextjs-sample/
├── app/
│   ├── form-demo/           # React Hook Form デモ
│   │   ├── _components/     # フォームコンポーネント
│   │   ├── edit/[id]/       # 編集ページ
│   │   ├── new/            # 新規作成ページ
│   │   └── page.tsx        # デモトップページ
│   ├── globals.css         # グローバルスタイル
│   ├── layout.tsx          # レイアウト
│   └── page.tsx            # ホームページ
├── main.py                 # FastAPIバックエンド（フォームデモ用）
├── package.json            # フロントエンド依存関係
└── README.md              # このファイル
```

## 🚀 開発コマンド

```bash
# 開発サーバー起動（フロントエンドのみ）
npm run dev

# 開発サーバー起動（フロントエンド + バックエンド）
npm run dev:mock

```

## 参考資料

| タイトル             | URL                                                             |
| -------------------- | --------------------------------------------------------------- |
| Next.jsの考え方      | https://zenn.dev/akfm/books/nextjs-basic-principle/viewer/intro |
| FastAPI 公式         | https://fastapi.tiangolo.com/ja/                                |
| NEXT.JS 公式         | https://nextjs.org/docs                                         |
| React Hook Form 公式 | https://www.react-hook-form.com/                                |
| React 公式           | https://react.dev/                                              |
| TypeScript 公式      | https://www.typescriptlang.org/docs/                           |