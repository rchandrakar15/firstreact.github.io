import React from 'react';
import Common from './Common';


const Home = () => {
    const web = 'https://images8.alphacoders.com/107/thumb-1920-1077329.jpg';
    return (
        <>
            <div className="container-fluid">
                <h1 className="text-center">Welcome to Home page</h1>
                <Common imgsrc={web} content="Welcome to the competition community page" btnname="Get Started"/>
            </div>
        </>
    );
}

export default Home;