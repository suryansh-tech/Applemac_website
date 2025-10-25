import React from 'react'
import {navLinks} from "../constants/index.js";

const Navbar = () => {
    return (
        <header>
            <nav>
                <img src="/logo.svg" alt="apple logo" />

                <ul>
                    {navLinks.map((link) => (
                        <li key={link.label}>
                            <a href={link.label}>{link.label}</a>
                        </li>
                    ))}
                </ul>

                <div className="flex-center gap-3">
                    <button>
                        <img src="/search.svg" alt="Search"/>
                    </button>
                    <button>
                        <img src="/cart.svg" alt="Cart"/>
                    </button>
                </div>
            </nav>
        </header>
    )
}
export default Navbar
