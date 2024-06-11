import React from 'react';


function SoundSection() {
    const handleLearnMore = () => {
        const ele = document.querySelector(".display-section");
        window.scrollTo({
            top: ele?.getBoundingClientRect().bottom,
            left:0,
            behavior: 'smooth'
        })

    }
    return (  
        <div className="sound-section wrapper">
            <div className="body">
                <div className="sound-section-content content">
                    <h2 className='title'>New Sound System</h2>
                    <p className='text'> Feel the Base.</p>
                    <span className='description'>
                    From $4.62/mo. for 24 mo. or $999 trade-in
                    </span>
                    <ul className='links'>
                        <li>
                            <button className='button'>Buy</button>
                        </li>
                        <li>
                            <a className='link' onClick={handleLearnMore}>Learn more</a>
                        </li>
                    </ul>

                </div>
            </div>
        </div>
    );
}

export default SoundSection;