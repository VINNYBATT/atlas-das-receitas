'use client';

import { useRef, useEffect, useState } from 'react';
import { useInView } from 'framer-motion';

function useCounter(target, duration = 1800) {
    const [value, setValue] = useState(0);
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: '-80px' });
    const startedRef = useRef(false);

    useEffect(() => {
        if (!inView || startedRef.current) return;
        startedRef.current = true;
        const startTime = performance.now();
        const tick = (now) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setValue(Math.round(eased * target));
            if (progress < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
    }, [inView, target, duration]);

    return [ref, value];
}

const stats = [
    { target: 1400, suffix: '+', label: 'Receitas testadas', sublabel: 'e aprovadas' },
    { target: 22, suffix: '', label: 'Ebooks digitais', sublabel: 'completos' },
    { target: 7, suffix: '', label: 'Dias de garantia', sublabel: 'total' },
    { target: 100, suffix: '%', label: 'Acesso imediato', sublabel: 'após pagamento' },
];

function StatItem({ stat }) {
    const [ref, value] = useCounter(stat.target);

    return (
        <div
            ref={ref}
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                padding: '0 1.5rem',
                flex: '1 1 140px',
            }}
        >
            <span
                style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(2rem, 4vw, 3rem)',
                    fontWeight: 700,
                    color: 'var(--color-primary)',
                    lineHeight: 1,
                    letterSpacing: '-0.02em',
                }}
            >
                {value}
                {stat.suffix}
            </span>
            <span
                style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.9rem',
                    color: 'var(--color-foreground)',
                    fontWeight: 600,
                    marginTop: '0.4rem',
                }}
            >
                {stat.label}
            </span>
            <span
                className="label"
                style={{ color: 'var(--color-muted-fg)', marginTop: '0.1rem' }}
            >
                {stat.sublabel}
            </span>
        </div>
    );
}

export function StatsBar() {
    return (
        <div
            style={{
                backgroundColor: 'var(--color-surface)',
                borderTop: '1px solid var(--color-border)',
                borderBottom: '1px solid var(--color-border)',
                padding: 'clamp(2rem, 4vw, 3rem) 0',
            }}
        >
            <div className="container">
                <div
                    style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'center',
                        gap: '2rem',
                        rowGap: '2.5rem',
                    }}
                >
                    {stats.map((stat, i) => (
                        <StatItem key={i} stat={stat} />
                    ))}
                </div>
            </div>
        </div>
    );
}
