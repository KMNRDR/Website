import React from 'react';
import './App.css';

function Work() {
    return(
        <div className='Background'>
            <a href="/Home">
                <button className='btn btn-success'>Home</button>
            </a>
            <em>    </em>
            <a href="/Registration">
                <button className='btn btn-success'>Registration</button>
            </a>
            <em>    </em>
            <a href="/About">
                <button className='btn btn-success'>About Us</button>
            </a>
            <em>    </em>
            <a href="/Gallery">
                <button className='btn btn-success'>Photo Gallery</button>
            </a>
            <em>    </em>
            <a href="/Contact">
                <button className='btn btn-success'>Contact Us</button>
            </a>
            <em>    </em>
            <h1>Our Work</h1>
            <h4>Over the course of the 10 years that we've been around, we've been part of numerous projects both big and small.
                <br/>Helping trauma patients regain the use of their limbs, Treating mental disorders and Creating training facilities for militaries around the world are just a few of the influential projects we've either taken part in or spearheadded ourselves.
                <br/>In the coming years, we hope to once more show why Virtual Reality Technology is a must in todays world through our work in our upcoming projects and maybe you could be part of it too.
            </h4>
        </div>
    );
}

export default Work;