import React from 'react'
import SplitText from './components/SplitText';
import GooeyNav from './components/GooeyNav';

const navItems = [
    { label: "HOME" },
    { label: "ABOUT ME" },
    { label: "PROJECTS" },
    { label: "CERTIFICATION" }
];



const Navbar = () => {

  

    return (
        <nav id='navbar'>
            <SplitText text="Mainudheen" className="split-large" />
            
            <GooeyNav items={navItems} />
        </nav>
    )
}

export default Navbar;