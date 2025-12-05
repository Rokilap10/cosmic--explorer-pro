
'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import type { SpaceItem } from '../data/spaceItems';

type Theme = 'light' | 'dark';

interface User {
  id: string;
  name: string;
  email: string;
}

interface AppContextValue {
  theme: Theme;
  toggleTheme: () => void;
  user: User | null;
  loginAsTestUser: () => void;
  logout: () => void;
  favorites: string[];
  toggleFavorite: (id: string) => void;
  isFavorite: (id: string) => boolean;
}

const AppContext = createContext<AppContextValue | undefined>(undefined);

const THEME_KEY = 'cosmos-theme';
const FAVORITES_KEY = 'cosmos-favorites';
const USER_KEY = 'cosmos-user';

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<Theme>('dark');
  const [user, setUser] = useState<User | null>(null);
  const [favorites, setFavorites] = useState<string[]>([]);

  // Hydrate from localStorage
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const storedTheme = window.localStorage.getItem(THEME_KEY) as Theme | null;
    if (storedTheme === 'light' || storedTheme === 'dark') {
      setTheme(storedTheme);
      document.documentElement.dataset.theme = storedTheme;
    }

    const storedFavs = window.localStorage.getItem(FAVORITES_KEY);
    if (storedFavs) {
      try {
        setFavorites(JSON.parse(storedFavs));
      } catch {
        setFavorites([]);
      }
    }

    const storedUser = window.localStorage.getItem(USER_KEY);
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch {
        setUser(null);
      }
    }
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    window.localStorage.setItem(THEME_KEY, theme);
    document.documentElement.dataset.theme = theme;
    if (theme === 'light') {
      document.body.style.background = '#f1f5f9';
      document.body.style.color = '#020617';
    } else {
      document.body.style.background =
        'radial-gradient(circle at top, #0f172a 0, #020617 40%, #000 100%)';
      document.body.style.color = '#e5e7eb';
    }
  }, [theme]);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    window.localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
  }, [favorites]);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (user) {
      window.localStorage.setItem(USER_KEY, JSON.stringify(user));
    } else {
      window.localStorage.removeItem(USER_KEY);
    }
  }, [user]);

  const toggleTheme = () => {
    setTheme((t) => (t === 'dark' ? 'light' : 'dark'));
  };

  const loginAsTestUser = () => {
    const testUser: User = {
      id: 'test',
      name: 'Test User',
      email: 'test@example.com'
    };
    setUser(testUser);
  };

  const logout = () => {
    setUser(null);
    setFavorites([]);
  };

  const toggleFavorite = (id: string) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  const isFavorite = (id: string) => favorites.includes(id);

  const value: AppContextValue = {
    theme,
    toggleTheme,
    user,
    loginAsTestUser,
    logout,
    favorites,
    toggleFavorite,
    isFavorite
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useApp = () => {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error('useApp must be used inside AppProvider');
  return ctx;
};
