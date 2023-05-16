import React from 'react';

function Home() {
  return (
      <div className='Background'>
        <a href="/Registration">
          <button className='btn btn-success'>Registration</button>
        </a>
        <em>    </em>
        <a href="/About">
          <button className='btn btn-success'>About Us</button>
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
        <h1>Welcome to Ethereal</h1>
        <h3>Where Fantasy meets Reality</h3>
        <h4>Please follow the links below to learn more about us, contacts us or register for the currently open position as Lead Technician.</h4>
      </div>
  );
}

export default Home;