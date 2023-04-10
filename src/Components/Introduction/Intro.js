import React from 'react';
import './intro.css'

const Intro = () => {
    const img = process.env.PUBLIC_URL + "/deep_learning.gif";
    return (
        <div className='introduction'>
            <div className="card-overlay mt-5">
                <div className='intro-image'
                    style={{
                        backgroundImage: `url(${img})`
                    }}>
                    <div className='card-img-overlay text-white text-center mt-5'>
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <h1 className='intro-header mt-5'>Deep Learning</h1>
                        <h3 className='intro-text'>Hongmin Li</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Intro