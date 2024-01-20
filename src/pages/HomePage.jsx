import { Navbar, TopSection, MidSection, MidSection2, MidSection3, Contact, Footer } from '../components';
import { useRef } from 'react';
import { useInView } from 'framer-motion';

function HomePage() {
    const bottomRef = useRef(null)
    const isInView = useInView(bottomRef)

    return (
        <>
            <Navbar isInView={isInView} />
            <div ref={bottomRef}><TopSection /></div>
            <MidSection />
            <MidSection2 />
            <MidSection3 />
            <Contact />
            <Footer />
        </>
    );
}

export default HomePage;