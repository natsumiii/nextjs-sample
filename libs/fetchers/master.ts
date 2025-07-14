import { type MasterData } from '@/libs/types';

const API_BASE_URL = 'http://localhost:8000/api';

// マスターデータ取得
export async function getMasterData(): Promise<MasterData> {
  const response = await fetch(`${API_BASE_URL}/master-data`);

  if (!response.ok) {
    throw new Error('マスターデータの取得に失敗しました');
  }

  return response.json();
}