import React from 'react';

function About() {
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
            <a href="/Work">
                <button className='btn btn-success'>Our Work</button>
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
            <h1>About Us</h1>
            <h2>Vision</h2>
            <h4>Here at Ethereal, we aim to help you, the customer, make your fantasys reality.
                <br/>With our top-of-the-line Virtual Reality Headsets and our more than skilled staff, we'll let you experience something you'll never forget. 
            </h4>
            <br/>

            <h2>Motto</h2>
            <h3>Where Fantasy Meets Reality</h3>
            <br/>

            <h2>Get Involved</h2>
            <h3>If you wish to join us at Ethereal, you can navigate to the Registration form using the above links.</h3>
        </div>
    );
}

export default About;