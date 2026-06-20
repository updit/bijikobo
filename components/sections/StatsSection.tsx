import { stats } from '@/lib/data';

export const StatsSection = () => {
  return (
    <section
      id="stats"
      className="flex flex-wrap gap-12"
      style={{ backgroundColor: '#ecebe4', paddingLeft: '8vw', paddingRight: '8vw', paddingTop: '5rem', paddingBottom: '5rem' }}
    >
      {stats.map((stat) => (
        <div key={stat.label}>
          <p
            style={{
              fontSize: 'clamp(32px, 5vw, 56px)',
              fontWeight: 700,
              color: '#800202',
              fontFamily: 'var(--font-serif)',
            }}
          >
            {stat.value}
          </p>
          <p
            className="mt-2"
            style={{
              fontSize: '0.875rem',
              color: '#6b6258',
              fontFamily: 'var(--font-sans)',
              lineHeight: 1.8,
            }}
          >
            {stat.label}
          </p>
        </div>
      ))}
    </section>
  );
};
