
'use client';

import { spaceItems } from '../data/spaceItems';
import { ItemCard } from '../ui/ItemCard';
import { useApp } from '../context/AppContext';

export default function FavoritesPage() {
  const { favorites } = useApp();
  const favItems = spaceItems.filter((i) => favorites.includes(i.id));

  return (
    <section style={{ paddingTop: '1.5rem', display: 'grid', gap: '1rem' }}>
      <div>
        <h1 style={{ fontSize: '1.7rem', marginBottom: '0.3rem' }}>Favorites</h1>
        <p style={{ fontSize: '0.9rem', color: '#9ca3af' }}>
          Здесь хранятся все объекты, помеченные сердечком.
        </p>
      </div>

      {favItems.length === 0 ? (
        <p style={{ color: '#9ca3af', fontSize: '0.9rem' }}>
          Избранных объектов пока нет. Открой страницу Explore и добавь что‑нибудь.
        </p>
      ) : (
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))',
            gap: '1rem'
          }}
        >
          {favItems.map((item) => (
            <ItemCard key={item.id} item={item} />
          ))}
        </div>
      )}
    </section>
  );
}
