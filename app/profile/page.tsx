
'use client';

import { useState } from 'react';
import { useApp } from '../context/AppContext';

export default function ProfilePage() {
  const { user, loginAsTestUser } = useApp();
  const [name, setName] = useState(user?.name ?? '');
  const [email, setEmail] = useState(user?.email ?? '');

  // Для простоты просто показываем текущие данные.
  // Можно расширить и реально сохранять в контексте.
  return (
    <section style={{ paddingTop: '1.5rem', display: 'grid', gap: '1.2rem' }}>
      <div>
        <h1 style={{ fontSize: '1.7rem', marginBottom: '0.3rem' }}>Profile</h1>
        <p style={{ fontSize: '0.9rem', color: '#9ca3af' }}>
          Здесь отображается информация о пользователе.
        </p>
      </div>

      {user ? (
        <div
          style={{
            maxWidth: '420px',
            borderRadius: '1rem',
            border: '1px solid rgba(148,163,184,0.4)',
            padding: '1rem',
            background: 'rgba(15,23,42,0.8)'
          }}
        >
          <div style={{ display: 'grid', gap: '0.5rem', fontSize: '0.9rem' }}>
            <label>
              Имя
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                style={{
                  width: '100%',
                  marginTop: '0.15rem',
                  marginBottom: '0.4rem',
                  padding: '0.4rem 0.6rem',
                  borderRadius: '0.6rem',
                  border: '1px solid rgba(148,163,184,0.6)',
                  background: 'rgba(15,23,42,0.9)',
                  color: '#e5e7eb'
                }}
              />
            </label>
            <label>
              Email
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{
                  width: '100%',
                  marginTop: '0.15rem',
                  padding: '0.4rem 0.6rem',
                  borderRadius: '0.6rem',
                  border: '1px solid rgba(148,163,184,0.6)',
                  background: 'rgba(15,23,42,0.9)',
                  color: '#e5e7eb'
                }}
              />
            </label>
          </div>
          <p
            style={{
              marginTop: '0.75rem',
              fontSize: '0.8rem',
              color: '#9ca3af'
            }}
          >
            В демо‑версии изменения полей не сохраняются. Основная логика сохранения
            реализована через localStorage на странице Settings.
          </p>
        </div>
      ) : (
        <div style={{ fontSize: '0.9rem' }}>
          <p>Вы не авторизованы.</p>
          <button
            onClick={loginAsTestUser}
            style={{
              padding: '0.5rem 1rem',
              borderRadius: '999px',
              border: 'none',
              background: '#22c55e',
              color: 'white',
              cursor: 'pointer',
              fontSize: '0.9rem'
            }}
          >
            Войти как тестовый пользователь
          </button>
        </div>
      )}
    </section>
  );
}
