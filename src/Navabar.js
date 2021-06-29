import React, { useEffect , useState } from 'react';
import './Navbar.css';

function Navabar() {
    const[show,handleShow] = useState(false)
    useEffect(() => {
        window.addEventListener("scroll" , () => {
            if (window.scrollY > 100){
                handleShow(true);
            }else handleShow(false);
        });
        return() => {
            window.removeEventListener("scroll")
        }
    },[])

    return (
        <div className = {`nav ${show && "nav_black"}`}>
            <img src = "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"  className = "nav_logo" alt = "Netflix logo" />
            <img src = "https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" className = "Avatar" alt = "User Avatar" />
        </div>
    )
}

export default Navabar
