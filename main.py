from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, EmailStr, field_validator
from typing import List, Optional
import uuid
from datetime import datetime

app = FastAPI(title="User Registration Form Demo API")

# CORS設定を追加
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000", "http://127.0.0.1:3000"],  # Next.jsフロントエンドのURL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ユーザーモデル
class UserBase(BaseModel):
    name: str
    email: EmailStr
    password: str
    confirm_password: str
    age: int
    gender: str
    hobbies: List[str]
    bio: Optional[str] = None
    profile_image: Optional[str] = None

    @field_validator('confirm_password')
    @classmethod
    def passwords_match(cls, v, info):
        if 'password' in info.data and v != info.data['password']:
            raise ValueError('パスワードが一致しません')
        return v

    @field_validator('age')
    @classmethod
    def validate_age(cls, v):
        if v < 18 or v > 100:
            raise ValueError('年齢は18歳から100歳の間で入力してください')
        return v

    @field_validator('name')
    @classmethod
    def validate_name(cls, v):
        if len(v) > 50:
            raise ValueError('名前は50文字以内で入力してください')
        return v

    @field_validator('bio')
    @classmethod
    def validate_bio(cls, v):
        if v and len(v) > 500:
            raise ValueError('自己紹介は500文字以内で入力してください')
        return v

class User(UserBase):
    id: str
    created_at: datetime
    updated_at: datetime

class UserCreate(UserBase):
    pass

class UserUpdate(BaseModel):
    name: Optional[str] = None
    email: Optional[EmailStr] = None
    password: Optional[str] = None
    confirm_password: Optional[str] = None
    age: Optional[int] = None
    gender: Optional[str] = None
    hobbies: Optional[List[str]] = None
    bio: Optional[str] = None
    profile_image: Optional[str] = None

    @field_validator('age')
    @classmethod
    def validate_age(cls, v):
        if v is not None and (v < 18 or v > 100):
            raise ValueError('年齢は18歳から100歳の間で入力してください')
        return v

    @field_validator('name')
    @classmethod
    def validate_name(cls, v):
        if v is not None and len(v) > 50:
            raise ValueError('名前は50文字以内で入力してください')
        return v

    @field_validator('bio')
    @classmethod
    def validate_bio(cls, v):
        if v is not None and len(v) > 500:
            raise ValueError('自己紹介は500文字以内で入力してください')
        return v

# サンプルデータ
sample_users = [
    {
        "id": "1",
        "name": "田中太郎",
        "email": "tanaka@example.com",
        "password": "password123",
        "confirm_password": "password123",
        "age": 25,
        "gender": "男性",
        "hobbies": ["読書", "映画鑑賞"],
        "bio": "プログラミングが好きなエンジニアです。",
        "profile_image": None,
        "created_at": datetime(2024, 1, 1, 10, 0, 0),
        "updated_at": datetime(2024, 1, 1, 10, 0, 0)
    },
    {
        "id": "2",
        "name": "佐藤花子",
        "email": "sato@example.com",
        "password": "password123",
        "confirm_password": "password123",
        "age": 30,
        "gender": "女性",
        "hobbies": ["料理", "旅行"],
        "bio": "料理と旅行が趣味の主婦です。",
        "profile_image": None,
        "created_at": datetime(2024, 1, 2, 11, 0, 0),
        "updated_at": datetime(2024, 1, 2, 11, 0, 0)
    },
    {
        "id": "3",
        "name": "鈴木一郎",
        "email": "suzuki@example.com",
        "password": "password123",
        "confirm_password": "password123",
        "age": 28,
        "gender": "男性",
        "hobbies": ["スポーツ", "読書"],
        "bio": "スポーツが大好きです。",
        "profile_image": None,
        "created_at": datetime(2024, 1, 3, 12, 0, 0),
        "updated_at": datetime(2024, 1, 3, 12, 0, 0)
    },
    {
        "id": "4",
        "name": "高橋美咲",
        "email": "takahashi@example.com",
        "password": "password123",
        "confirm_password": "password123",
        "age": 22,
        "gender": "女性",
        "hobbies": ["映画鑑賞", "料理"],
        "bio": "映画鑑賞が趣味の学生です。",
        "profile_image": None,
        "created_at": datetime(2024, 1, 4, 13, 0, 0),
        "updated_at": datetime(2024, 1, 4, 13, 0, 0)
    },
    {
        "id": "5",
        "name": "伊藤健太",
        "email": "ito@example.com",
        "password": "password123",
        "confirm_password": "password123",
        "age": 35,
        "gender": "男性",
        "hobbies": ["旅行", "スポーツ"],
        "bio": "旅行が趣味の会社員です。",
        "profile_image": None,
        "created_at": datetime(2024, 1, 5, 14, 0, 0),
        "updated_at": datetime(2024, 1, 5, 14, 0, 0)
    }
]

# ユーザー一覧取得
@app.get("/api/users", response_model=List[User])
async def get_users():
    return sample_users

# ユーザー詳細取得
@app.get("/api/users/{user_id}", response_model=User)
async def get_user(user_id: str):
    user = next((user for user in sample_users if user["id"] == user_id), None)
    if not user:
        raise HTTPException(status_code=404, detail="ユーザーが見つかりません")
    return user

# ユーザー作成
@app.post("/api/users", response_model=User)
async def create_user(user: UserCreate):
    new_user = {
        "id": str(uuid.uuid4()),
        **user.model_dump(),
        "created_at": datetime.now(),
        "updated_at": datetime.now()
    }
    sample_users.append(new_user)
    return new_user

# ユーザー更新
@app.put("/api/users/{user_id}", response_model=User)
async def update_user(user_id: str, user_update: UserUpdate):
    user_index = next((i for i, user in enumerate(sample_users) if user["id"] == user_id), None)
    if user_index is None:
        raise HTTPException(status_code=404, detail="ユーザーが見つかりません")

    # 更新データの適用
    update_data = user_update.model_dump(exclude_unset=True)
    sample_users[user_index].update(update_data)
    sample_users[user_index]["updated_at"] = datetime.now()

    return sample_users[user_index]

# 趣味一覧取得
@app.get("/api/hobbies")
async def get_hobbies():
    return ["読書", "映画鑑賞", "スポーツ", "料理", "旅行"]

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)