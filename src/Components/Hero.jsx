import React, {useEffect, useRef} from 'react'

const Hero = () => {

    const videRef = useRef();

    // for video faster
    useEffect(() => {
        if(videRef.current) videRef.current.playbackRate = 2;
    }, []);

    return (
        <section id="hero">
            <div>
                <h1>MacBook Pro</h1>
                <img src="/title.png" alt="MackBook Title"/>
            </div>

            <video ref={videRef} src="/videos/hero.mp4" muted autoPlay playInline></video>

            <button>Buy</button>

            <p>From ₹140385 or ₹11,676/mon for 12 months</p>
        </section>
    )
}
export default Hero
