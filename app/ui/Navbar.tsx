
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useApp } from '../context/AppContext';

const links = [
  { href: '/', label: 'Home' },
  { href: '/explore', label: 'Explore' },
  { href: '/favorites', label: 'Favorites' },
  { href: '/profile', label: 'Profile' },
  { href: '/settings', label: 'Settings' },
  { href: '/black-holes', label: 'Black Holes' }
];

export const Navbar = () => {
  const pathname = usePathname();
  const { theme, toggleTheme, user, loginAsTestUser, logout } = useApp();

  return (
    <header
      style={{
        borderBottom: '1px solid rgba(148, 163, 184, 0.3)',
        backdropFilter: 'blur(18px)',
        position: 'sticky',
        top: 0,
        zIndex: 20
      }}
    >
      <nav
        style={{
          maxWidth: '1120px',
          margin: '0 auto',
          padding: '0.75rem 1rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1rem'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <span
            style={{
              fontWeight: 700,
              letterSpacing: '0.08em',
              fontSize: '0.85rem',
              textTransform: 'uppercase',
              color: '#38bdf8'
            }}
          >
            COSMOS
          </span>
          <div
            style={{
              display: 'flex',
              gap: '0.5rem',
              fontSize: '0.9rem'
            }}
          >
            {links.map((link) => {
              const active = pathname === link.href;
              return (
                <Link key={link.href} href={link.href}>
                  <span
                    style={{
                      padding: '0.25rem 0.7rem',
                      borderRadius: '999px',
                      background: active
                        ? 'rgba(56, 189, 248, 0.18)'
                        : 'transparent',
                      color: active ? '#e5e7eb' : '#9ca3af'
                    }}
                  >
                    {link.label}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <button
            onClick={toggleTheme}
            style={{
              borderRadius: '999px',
              border: '1px solid rgba(148,163,184,0.4)',
              background:
                theme === 'dark' ? 'rgba(15,23,42,0.9)' : 'rgba(241,245,249,0.9)',
              padding: '0.25rem 0.75rem',
              fontSize: '0.8rem',
              cursor: 'pointer'
            }}
          >
            {theme === 'dark' ? '🌙 Ночь' : '☀️ День'}
          </button>

          {user ? (
            <>
              <span style={{ fontSize: '0.8rem', color: '#9ca3af' }}>
                {user.name}
              </span>
              <button
                onClick={logout}
                style={{
                  borderRadius: '999px',
                  border: 'none',
                  background: '#ef4444',
                  color: 'white',
                  padding: '0.25rem 0.8rem',
                  fontSize: '0.8rem',
                  cursor: 'pointer'
                }}
              >
                Выйти
              </button>
            </>
          ) : (
            <button
              onClick={loginAsTestUser}
              style={{
                borderRadius: '999px',
                border: 'none',
                background: '#22c55e',
                color: 'white',
                padding: '0.25rem 0.8rem',
                fontSize: '0.8rem',
                cursor: 'pointer'
              }}
            >
              Войти как тест
            </button>
          )}
        </div>
      </nav>
    </header>
  );
};
