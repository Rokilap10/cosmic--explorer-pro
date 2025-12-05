
'use client';

import { useMemo, useState } from 'react';
import { spaceItems } from '../data/spaceItems';
import type { SpaceItemType } from '../data/spaceItems';
import { ItemCard } from '../ui/ItemCard';

const typeOptions: { value: SpaceItemType | 'all'; label: string }[] = [
  { value: 'all', label: 'Все' },
  { value: 'planet', label: 'Планеты' },
  { value: 'star', label: 'Звёзды' },
  { value: 'galaxy', label: 'Галактики' },
  { value: 'blackhole', label: 'Чёрные дыры' }
];

export default function ExplorePage() {
  const [query, setQuery] = useState('');
  const [type, setType] = useState<SpaceItemType | 'all'>('all');

  const filtered = useMemo(() => {
    return spaceItems.filter((item) => {
      const matchesType = type === 'all' || item.type === type;
      const q = query.toLowerCase();
      const matchesQuery =
        !q ||
        item.name.toLowerCase().includes(q) ||
        item.shortDescription.toLowerCase().includes(q) ||
        item.tags.some((t) => t.toLowerCase().includes(q));
      return matchesType && matchesQuery;
    });
  }, [query, type]);

  const suggestions = useMemo(() => {
    if (!query) return [];
    return spaceItems
      .filter((item) =>
        item.name.toLowerCase().includes(query.toLowerCase())
      )
      .slice(0, 5);
  }, [query]);

  return (
    <section style={{ paddingTop: '1.5rem', display: 'grid', gap: '1.5rem' }}>
      <div>
        <h1 style={{ fontSize: '1.7rem', marginBottom: '0.3rem' }}>Explore</h1>
        <p style={{ fontSize: '0.9rem', color: '#9ca3af' }}>
          Быстрый поиск по объектам: планеты, галактики, чёрные дыры.
        </p>
      </div>

      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '0.75rem',
          alignItems: 'center'
        }}
      >
        <div style={{ position: 'relative', flex: '1 1 260px' }}>
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Поиск (Солнце, Андромеда, чёрная дыра)..."
            style={{
              width: '100%',
              padding: '0.55rem 0.75rem',
              borderRadius: '999px',
              border: '1px solid rgba(148,163,184,0.6)',
              background: 'rgba(15,23,42,0.8)',
              color: '#e5e7eb',
              fontSize: '0.9rem'
            }}
          />
          {suggestions.length > 0 && (
            <div
              style={{
                position: 'absolute',
                top: '110%',
                left: 0,
                right: 0,
                background: 'rgba(15,23,42,0.98)',
                borderRadius: '0.75rem',
                border: '1px solid rgba(148,163,184,0.6)',
                padding: '0.35rem 0',
                fontSize: '0.85rem',
                zIndex: 10
              }}
            >
              {suggestions.map((s) => (
                <button
                  key={s.id}
                  onClick={() => setQuery(s.name)}
                  style={{
                    display: 'block',
                    width: '100%',
                    textAlign: 'left',
                    padding: '0.3rem 0.8rem',
                    border: 'none',
                    background: 'transparent',
                    color: '#e5e7eb',
                    cursor: 'pointer'
                  }}
                >
                  {s.name}
                </button>
              ))}
            </div>
          )}
        </div>

        <div style={{ display: 'flex', gap: '0.5rem' }}>
          {typeOptions.map((opt) => (
            <button
              key={opt.value}
              onClick={() => setType(opt.value as any)}
              style={{
                padding: '0.4rem 0.9rem',
                borderRadius: '999px',
                border:
                  type === opt.value
                    ? '1px solid #38bdf8'
                    : '1px solid rgba(148,163,184,0.5)',
                background:
                  type === opt.value ? 'rgba(56,189,248,0.15)' : 'transparent',
                color: '#e5e7eb',
                fontSize: '0.8rem',
                cursor: 'pointer'
              }}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))',
          gap: '1rem'
        }}
      >
        {filtered.map((item) => (
          <ItemCard key={item.id} item={item} />
        ))}
        {filtered.length === 0 && (
          <p style={{ color: '#9ca3af', fontSize: '0.9rem' }}>
            Ничего не найдено. Попробуй изменить запрос.
          </p>
        )}
      </div>
    </section>
  );
}
