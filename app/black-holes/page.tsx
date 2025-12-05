
import { spaceItems } from '../data/spaceItems';
import { ItemCard } from '../ui/ItemCard';

export default function BlackHolesPage() {
  const blackHoles = spaceItems.filter((i) => i.type === 'blackhole');

  return (
    <section style={{ paddingTop: '1.5rem', display: 'grid', gap: '1.25rem' }}>
      <div>
        <h1 style={{ fontSize: '1.7rem', marginBottom: '0.3rem' }}>Black Holes</h1>
        <p style={{ fontSize: '0.9rem', color: '#9ca3af', maxWidth: '720px' }}>
          Чёрные дыры — это объекты с настолько сильной гравитацией, что даже свет не
          может покинуть их пределы. Они образуются при коллапсе массивных звёзд или
          находятся в центрах галактик в виде сверхмассивных чёрных дыр.
        </p>
        <p style={{ fontSize: '0.9rem', color: '#9ca3af', maxWidth: '720px' }}>
          Астрономы изучают чёрные дыры по их влиянию на окружающее пространство:
          искривление света, движение звёзд, мощные рентгеновские вспышки и джеты
          плазмы. Благодаря проекту Event Horizon Telescope человечество впервые увидело
          «тень» чёрной дыры.
        </p>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))',
          gap: '1rem'
        }}
      >
        {blackHoles.map((item) => (
          <ItemCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}
