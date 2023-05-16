import React, {useState} from 'react';
import Military from './Military.jpg';
import Rehab from './Rehab.jpg';
import './App.css';

function Gallery() {
    const [image, setImage] =useState()

    const handleSelect=(e) => {
        console.log(e.target.files)
        const data = new FileReader()
        data.addEventListener('load', () => {
            setImage(data.result)
        })
        data.readAsDataURL(e.target.files[0])
    }

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
            <a href="/About">
                <button className='btn btn-success'>About Us</button>
            </a>
            <em>    </em>
            <a href="/Contact">
                <button className='btn btn-success'>Contact Us</button>
            </a>
            <em>    </em>
            <h1>Photo Gallery</h1>
            <br/>
            <div className="upload">
                <label htmlFor="imgs">Upload Image</label>
            </div>
            <input id="imgs" type="file" accept="image/png, image/jpg, image/jpeg, image/avif" onChange={handleSelect}></input>
            <img src={image}/>
            <br/>
            <img src={Military}/>
            <img src={Rehab}/>
        </div>
    );
}

export default Gallery;