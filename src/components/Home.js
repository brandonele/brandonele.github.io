import React from 'react';
import './Home.css'; // Make sure to create this CSS file

const Home = () => {
    return (
        <>
            <nav className="nav-bar">
                {/* Replace href attributes with actual paths */}
                <a href="#overview" className="home-icon">
        <img src="/icon.png" alt="Home" />
    </a>
                <a href="#about" className="nav-link">about me</a>
                <a href="#skills" className="nav-link">skills</a>
                <a href="#resume" className="nav-link">experience</a>
                <a href="#portfolio" className="nav-link">projects</a>
                <a href="/BrandonLe_CV.pdf" className="nav-link" target="_blank" rel="noopener noreferrer">cv</a>
</nav>
            <div id = "overview" className="container">
            {/* <img src="/pumpkin.png" alt="Brandon Le" className="profile-pic" /> */}
                <div className="overview">
                    <h1>brandon le</h1>
                    <p1>Software Engineer | Aritifical Intelligence | F5 </p1>
                    <p1> | University of California, San Diego</p1>
                    
                    {/* Add more about yourself here */}
                </div>
                <div className="animated">
                    {/* Keep your image here */}
                    <img src="/q.gif" />
                </div>
            </div>
        </>
    );
};

export default Home;
