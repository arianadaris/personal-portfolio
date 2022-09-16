import React from 'react';

import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import ContactSection from '../components/Contact/Contact';

function Contact()
{
    return (
        <div>
            <Header color="#5685FF" />
            <ContactSection />
            <Footer mainColor="#5685FF" accentColor="#F5F8FF" />
        </div>
    );
}

export default Contact;