import React from 'react';
import {FaTwitter, FaFacebook, FaInstagram} from 'react-icons/fa';
import {SiGmail} from 'react-icons/si';

function Contact() {
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
            <a href="/About">
                <button className='btn btn-success'>About Us</button>
            </a>
            <em>    </em>
            <h1>Contact Us</h1>
            <h4><FaFacebook className="icons facebook"/>Facebook: @Ethereal</h4><br/>
            <h4><FaInstagram className="icons instagram"/>Instagram: @EtherealGlobal</h4><br/>
            <h4><FaTwitter className="icons twitter"/>Twitter: @EtherealGlobal</h4><br/>
            <h4><SiGmail className="icons gmail" />Email: Ethereal@gmail.com</h4><br/>
        </div>
    );
}

export default Contact;