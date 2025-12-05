
'use client';

import { useEffect, useState } from 'react';
import { useApp } from '../context/AppContext';

interface SettingsState {
  notifications: boolean;
  language: 'ru' | 'en';
}

const SETTINGS_KEY = 'cosmos-settings';

export default function SettingsPage() {
  const { theme, toggleTheme, user, loginAsTestUser, logout } = useApp();
  const [settings, setSettings] = useState<SettingsState>({
    notifications: true,
    language: 'ru'
  });

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const raw = window.localStorage.getItem(SETTINGS_KEY);
    if (raw) {
      try {
        setSettings(JSON.parse(raw));
      } catch {
        /* ignore */
      }
    }
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    window.localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));
  }, [settings]);

  return (
    <section style={{ paddingTop: '1.5rem', display: 'grid', gap: '1.5rem' }}>
      <div>
        <h1 style={{ fontSize: '1.7rem', marginBottom: '0.3rem' }}>Settings</h1>
        <p style={{ fontSize: '0.9rem', color: '#9ca3af' }}>
          Базовые настройки профиля, темы и уведомлений.
        </p>
      </div>

      <div
        style={{
          display: 'grid',
          gap: '1rem',
          gridTemplateColumns: 'minmax(0,2fr)'
        }}
      >
        <section
          style={{
            borderRadius: '1rem',
            border: '1px solid rgba(148,163,184,0.5)',
            padding: '1rem',
            background: 'rgba(15,23,42,0.85)'
          }}
        >
          <h2 style={{ fontSize: '1.1rem', marginTop: 0 }}>Тема</h2>
          <p style={{ fontSize: '0.85rem', color: '#9ca3af' }}>
            Переключатель День/Ночь сохраняется в localStorage и влияет на интерфейс
            всего сайта.
          </p>
          <button
            onClick={toggleTheme}
            style={{
              marginTop: '0.5rem',
              padding: '0.5rem 1rem',
              borderRadius: '999px',
              border: 'none',
              background: theme === 'dark' ? '#38bdf8' : '#0f172a',
              color: theme === 'dark' ? '#0f172a' : '#e5e7eb',
              cursor: 'pointer',
              fontSize: '0.9rem'
            }}
          >
            {theme === 'dark' ? 'Переключить на День' : 'Переключить на Ночь'}
          </button>
        </section>

        <section
          style={{
            borderRadius: '1rem',
            border: '1px solid rgba(148,163,184,0.5)',
            padding: '1rem',
            background: 'rgba(15,23,42,0.85)'
          }}
        >
          <h2 style={{ fontSize: '1.1rem', marginTop: 0 }}>Профиль и безопасность</h2>
          <p style={{ fontSize: '0.85rem', color: '#9ca3af' }}>
            Демонстрационная авторизация с тестовым пользователем. Здесь можно войти
            или выйти.
          </p>
          <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.5rem' }}>
            {user ? (
              <>
                <span style={{ fontSize: '0.85rem', color: '#cbd5f5' }}>
                  Вы вошли как {user.email}
                </span>
                <button
                  onClick={logout}
                  style={{
                    padding: '0.4rem 0.9rem',
                    borderRadius: '999px',
                    border: 'none',
                    background: '#ef4444',
                    color: 'white',
                    cursor: 'pointer',
                    fontSize: '0.85rem'
                  }}
                >
                  Выйти
                </button>
              </>
            ) : (
              <button
                onClick={loginAsTestUser}
                style={{
                  padding: '0.4rem 0.9rem',
                  borderRadius: '999px',
                  border: 'none',
                  background: '#22c55e',
                  color: 'white',
                  cursor: 'pointer',
                  fontSize: '0.85rem'
                }}
              >
                Войти как тестовый пользователь
              </button>
            )}
          </div>
        </section>

        <section
          style={{
            borderRadius: '1rem',
            border: '1px solid rgba(148,163,184,0.5)',
            padding: '1rem',
            background: 'rgba(15,23,42,0.85)'
          }}
        >
          <h2 style={{ fontSize: '1.1rem', marginTop: 0 }}>Уведомления</h2>
          <label
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              fontSize: '0.9rem'
            }}
          >
            <input
              type="checkbox"
              checked={settings.notifications}
              onChange={(e) =>
                setSettings((prev) => ({
                  ...prev,
                  notifications: e.target.checked
                }))
              }
            />
            Получать уведомления о новых объектах и статьях
          </label>

          <div style={{ marginTop: '0.75rem' }}>
            <span style={{ fontSize: '0.9rem' }}>Язык интерфейса:</span>
            <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.4rem' }}>
              <button
                onClick={() =>
                  setSettings((prev) => ({
                    ...prev,
                    language: 'ru'
                  }))
                }
                style={{
                  padding: '0.35rem 0.9rem',
                  borderRadius: '999px',
                  border:
                    settings.language === 'ru'
                      ? '1px solid #38bdf8'
                      : '1px solid rgba(148,163,184,0.6)',
                  background:
                    settings.language === 'ru'
                      ? 'rgba(56,189,248,0.15)'
                      : 'transparent',
                  color: '#e5e7eb',
                  fontSize: '0.85rem',
                  cursor: 'pointer'
                }}
              >
                Русский
              </button>
              <button
                onClick={() =>
                  setSettings((prev) => ({
                    ...prev,
                    language: 'en'
                  }))
                }
                style={{
                  padding: '0.35rem 0.9rem',
                  borderRadius: '999px',
                  border:
                    settings.language === 'en'
                      ? '1px solid #38bdf8'
                      : '1px solid rgba(148,163,184,0.6)',
                  background:
                    settings.language === 'en'
                      ? 'rgba(56,189,248,0.15)'
                      : 'transparent',
                  color: '#e5e7eb',
                  fontSize: '0.85rem',
                  cursor: 'pointer'
                }}
              >
                English
              </button>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
