import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase.init';
import Blogs from './Blogs';
import Hero from './Hero';
import Services from './Services';
import Statistics from './Statistics';

const Home = () => {
    const [user] = useAuthState(auth);

    return (
        <div>
            <Hero />
            <Statistics />

            {user && <Services />}
            <Blogs />
        </div>
    );
};

export default Home;