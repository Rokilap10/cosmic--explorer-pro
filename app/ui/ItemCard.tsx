
'use client';

import Link from 'next/link';
import { useApp } from '../context/AppContext';
import type { SpaceItem } from '../data/spaceItems';

export const ItemCard = ({ item }: { item: SpaceItem }) => {
  const { isFavorite, toggleFavorite } = useApp();
  const fav = isFavorite(item.id);

  return (
    <div
      style={{
        borderRadius: '1rem',
        border: '1px solid rgba(148,163,184,0.3)',
        padding: '0.75rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '0.5rem',
        background: 'rgba(15,23,42,0.7)'
      }}
    >
      <Link href={`/items/${item.id}`}>
        <div
          style={{
            height: '140px',
            borderRadius: '0.75rem',
            overflow: 'hidden',
            marginBottom: '0.5rem',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundImage: `url(${item.image})`
          }}
        />
      </Link>
      <div style={{ display: 'flex', justifyContent: 'space-between', gap: '0.5rem' }}>
        <div>
          <h3 style={{ margin: 0, fontSize: '1rem' }}>{item.name}</h3>
          <p
            style={{
              margin: '0.15rem 0',
              fontSize: '0.8rem',
              color: '#9ca3af'
            }}
          >
            {item.shortDescription}
          </p>
        </div>
        <button
          onClick={() => toggleFavorite(item.id)}
          aria-label="Add to favorites"
          style={{
            borderRadius: '999px',
            border: 'none',
            background: 'transparent',
            fontSize: '1.4rem',
            cursor: 'pointer'
          }}
        >
          {fav ? '❤️' : '🤍'}
        </button>
      </div>
      <p style={{ fontSize: '0.75rem', color: '#64748b', margin: 0 }}>{item.distance}</p>
    </div>
  );
};
