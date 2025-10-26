import React from 'react'
import Navbar from "./Components/Navbar.jsx";
import Hero from "./Components/Hero.jsx";
import ProductViewer from "./Components/ProductViewer.jsx";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";

// now register gsap
gsap.registerPlugin(ScrollTrigger);

const App = () => {
    return (
        <main>
            <Navbar />
            <Hero />
            <ProductViewer />
        </main>
    )
}
export default App
