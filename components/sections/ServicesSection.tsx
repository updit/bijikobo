import { services } from '@/lib/data';

export const ServicesSection = () => {
  return (
    <section
      id="services"
      style={{ backgroundColor: '#ffffff', paddingLeft: '8vw', paddingRight: '8vw', paddingTop: '5rem', paddingBottom: '5rem' }}
    >
      <p
        className="mb-12"
        style={{
          fontSize: '0.75rem',
          letterSpacing: '0.15em',
          color: '#800202',
          fontFamily: 'var(--font-sans)',
        }}
      >
        サービス
      </p>

      <ul>
        {services.map((service) => (
          <li
            key={service.name}
            className="flex items-center justify-between py-6"
            style={{ borderBottom: '1px solid #e0d8d0' }}
          >
            <span
              style={{
                fontSize: 'clamp(18px, 2.5vw, 24px)',
                fontFamily: 'var(--font-serif)',
                color: '#000',
              }}
            >
              {service.name}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
};
