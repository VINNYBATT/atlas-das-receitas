import { Hero } from '../components/hero';
import { StatsBar } from '../components/stats-bar';
import { EbooksSection } from '../components/ebooks-section';
import { BundleSection } from '../components/bundle-section';
import { TestimonialsSection } from '../components/testimonials-section';
import { GuaranteeSection } from '../components/guarantee-section';
import { FinalCtaSection } from '../components/final-cta-section';

export default function Page() {
    return (
        <>
            <Hero />
            <StatsBar />
            <EbooksSection />
            <BundleSection />
            <TestimonialsSection />
            <GuaranteeSection />
            <FinalCtaSection />
        </>
    );
}
