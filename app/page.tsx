
import Link from 'next/link';
import { spaceItems } from './data/spaceItems';
import { ItemCard } from './ui/ItemCard';

export default function HomePage() {
  const featured = spaceItems.slice(0, 3);
  return (
    <section style={{ paddingTop: '1.5rem', display: 'grid', gap: '2rem' }}>
      <div>
        <h1
          style={{
            fontSize: '2.3rem',
            marginBottom: '0.5rem'
          }}
        >
          Добро пожаловать в <span style={{ color: '#38bdf8' }}>Cosmos Explorer</span>
        </h1>
        <p style={{ maxWidth: '640px', color: '#cbd5f5', fontSize: '0.95rem' }}>
          Изучай планеты, галактики и чёрные дыры. Добавляй объекты в избранное,
          настраивай тему День/Ночь и сохраняй свой прогресс.
        </p>

        <div style={{ marginTop: '1rem', display: 'flex', gap: '0.75rem' }}>
          <Link href="/explore">
            <button
              style={{
                padding: '0.6rem 1.2rem',
                borderRadius: '999px',
                border: 'none',
                background: '#38bdf8',
                color: '#0f172a',
                fontWeight: 600,
                cursor: 'pointer'
              }}
            >
              Начать исследование
            </button>
          </Link>
          <Link href="/black-holes">
            <button
              style={{
                padding: '0.6rem 1.2rem',
                borderRadius: '999px',
                border: '1px solid rgba(148,163,184,0.4)',
                background: 'transparent',
                color: '#e5e7eb',
                cursor: 'pointer',
                fontSize: '0.9rem'
              }}
            >
              Узнать о чёрных дырах
            </button>
          </Link>
        </div>
      </div>

      <div>
        <h2 style={{ fontSize: '1.3rem', marginBottom: '0.5rem' }}>Популярные объекты</h2>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))',
            gap: '1rem'
          }}
        >
          {featured.map((item) => (
            <ItemCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
