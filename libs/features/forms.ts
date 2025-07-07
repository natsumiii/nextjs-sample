import { type FormData } from '@/libs/types';

const API_BASE_URL = 'http://localhost:8000/api';

// フォームデータ取得
export async function getFormData(id: number): Promise<FormData> {
  const response = await fetch(`${API_BASE_URL}/forms/${id}`);

  if (!response.ok) {
    throw new Error('フォームデータの取得に失敗しました');
  }

  return response.json();
}

// フォームデータ作成
export async function createFormData(data: FormData): Promise<void> {
  const response = await fetch(`${API_BASE_URL}/forms`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error('フォームデータの作成に失敗しました');
  }
}

// フォームデータ更新
export async function updateFormData(id: number, data: FormData): Promise<void> {
  const response = await fetch(`${API_BASE_URL}/forms/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error('フォームデータの更新に失敗しました');
  }
}