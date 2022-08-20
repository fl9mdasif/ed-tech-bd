import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase.init';
import Blogs from './Blogs';
import Contact from './Contact';
import Hero from './Hero';
import Services from './Services';
import Statistics from './Statistics';
import Testimonial from './Testimonial';

const Home = () => {
    const [user] = useAuthState(auth);

    return (
        <div>
            <Hero />
            <Statistics />
            {user && <Services />}
            <Blogs />
            <Testimonial />
            <Contact />

        </div>
    );
};

export default Home;