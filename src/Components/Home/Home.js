import React from 'react';
import Banner from './Banner/Banner';
import Contact from './Contact me/Contact';
import Projects from './Projects/Projects';
import Skilled from './Skilled/Skilled';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Projects></Projects>
            <Skilled></Skilled>
            <Contact></Contact>
        </div>
    );
};

export default Home;