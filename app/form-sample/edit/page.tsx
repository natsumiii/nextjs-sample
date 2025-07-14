'use client';

import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import { getMasterData, getFormData, updateFormData } from '@/libs/fetchers';
import { type FormData } from '@/libs/types';
import styles from './page.module.scss';

export default function EditFormPage() {
  const [regions, setRegions] = useState<string[]>([]);
  const [hobbies, setHobbies] = useState<string[]>([]);
  const [sampleData, setSampleData] = useState<FormData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isDirty, isValid }
  } = useForm<FormData>({
    defaultValues: {
      name: '',
      postalCode: '',
      region: '',
      gender: '',
      hobbies: [],
      otherHobby: ''
    },
    mode: 'onChange'
  });

  // データ取得とフォームセット処理
  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        setError(null);

        // マスターデータ取得
        const masterData = await getMasterData();
        setRegions(masterData.regions);
        setHobbies(masterData.hobbies);

        // フォームデータ取得
        const formData = await getFormData(1);
        setSampleData(formData);

        // react-hook-formにデータセット
        reset(formData);
      } catch (error) {
        console.error('データ取得エラー:', error);
        setError('データの取得に失敗しました。ページを再読み込みしてください。');
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [reset]);

  const onSubmit = async (data: FormData) => {
    try {
      await updateFormData(1, data);
      alert('フォームが正常に更新されました！');
    } catch (error) {
      console.error('更新エラー:', error);
      alert('更新に失敗しました。もう一度お試しください。');
    }
  };

  // ローディング中
  if (isLoading) {
    return (
      <div className={styles.container}>
        <h1 className={styles.title}>フォーム編集</h1>
        <div className={styles.loading}>
          <p>データを読み込み中...</p>
        </div>
      </div>
    );
  }

  // エラー時
  if (error) {
    return (
      <div className={styles.container}>
        <h1 className={styles.title}>フォーム編集</h1>
        <div className={styles.error}>
          <p>⚠️ {error}</p>
          <button
            onClick={() => window.location.reload()}
            className={styles.retryButton}
          >
            再読み込み
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>フォーム編集</h1>

      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        {/* 名前 */}
        <div className={styles.formGroup}>
          <label className={styles.label}>
            名前 <span className={styles.required}>*必須</span>
          </label>
          <input
            type="text"
            {...register('name', {
              required: '名前は必須です',
              maxLength: { value: 50, message: '名前は50文字以内で入力してください' }
            })}
            className={`${styles.input} ${errors.name ? styles.error : ''}`}
            placeholder="田中太郎"
          />
          {errors.name && (
            <div className={styles.errorMessage}>
              ⚠️ {errors.name.message}
            </div>
          )}
        </div>

        {/* 郵便番号 */}
        <div className={styles.formGroup}>
          <label className={styles.label}>
            郵便番号 <span className={styles.required}>*必須</span>
          </label>
          <input
            type="text"
            {...register('postalCode', {
              required: '郵便番号は必須です',
              pattern: {
                value: /^\d{3}-\d{4}$/,
                message: '郵便番号は123-4567の形式で入力してください'
              }
            })}
            className={`${styles.input} ${errors.postalCode ? styles.error : ''}`}
            placeholder="123-4567"
          />
          {errors.postalCode && (
            <div className={styles.errorMessage}>
              ⚠️ {errors.postalCode.message}
            </div>
          )}
        </div>

        {/* 地域 */}
        <div className={styles.formGroup}>
          <label className={styles.label}>
            地域 <span className={styles.required}>*必須</span>
          </label>
          <select
            {...register('region', { required: '地域を選択してください' })}
            className={`${styles.select} ${errors.region ? styles.error : ''}`}
          >
            <option value="">地域を選択</option>
            {regions.map((region) => (
              <option key={region} value={region}>
                {region}
              </option>
            ))}
          </select>
          {errors.region && (
            <div className={styles.errorMessage}>
              ⚠️ {errors.region.message}
            </div>
          )}
        </div>

        {/* 性別 */}
        <div className={styles.formGroup}>
          <label className={styles.label}>
            性別 <span className={styles.required}>*必須</span>
          </label>
          <div className={styles.radioGroup}>
            {['男性', '女性', 'その他'].map((gender) => (
              <label key={gender} className={styles.radioLabel}>
                <input
                  type="radio"
                  value={gender}
                  {...register('gender', { required: '性別を選択してください' })}
                  className={styles.radioInput}
                />
                {gender}
              </label>
            ))}
          </div>
          {errors.gender && (
            <div className={styles.errorMessage}>
              ⚠️ {errors.gender.message}
            </div>
          )}
        </div>

        {/* 趣味 */}
        <div className={styles.formGroup}>
          <label className={styles.label}>趣味</label>
          <div className={styles.checkboxGroup}>
            {hobbies.map((hobby) => (
              <label key={hobby} className={styles.checkboxLabel}>
                <input
                  type="checkbox"
                  value={hobby}
                  {...register('hobbies')}
                  className={styles.checkboxInput}
                />
                {hobby}
              </label>
            ))}
          </div>
        </div>

        {/* その他の趣味 */}
        <div className={styles.formGroup}>
          <label className={styles.label}>その他の趣味</label>
          <input
            type="text"
            {...register('otherHobby')}
            className={styles.input}
            placeholder="その他の趣味があれば入力してください"
          />
        </div>

        {/* 送信ボタン */}
        <div className={styles.buttonGroup}>
          <button
            type="submit"
            disabled={!isDirty || !isValid}
            className={styles.submitButton}
          >
            更新
          </button>
        </div>
      </form>
    </div>
  );
}