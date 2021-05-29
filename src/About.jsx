import React from 'react';
import Common from './Common';

const About = () => {
    const web = 'https://c4.wallpaperflare.com/wallpaper/338/248/944/models-model-earrings-girl-indian-hd-wallpaper-preview.jpg';
    return (
        <>
            <div className="container-fluid">
                <h1 className="text-center">Welcome to About page</h1>
                <Common imgsrc={web} content="COMPETITION COMMUNITY (COCO) is an innovative initiative of FIRSTMAN EDUCATION PVT. LTD." btnname="Get Started"/>
            </div>
        </>
    );
}

export default About;