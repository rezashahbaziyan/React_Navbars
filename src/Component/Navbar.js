import React from "react";
import "./Navbar.css"

export default function Navbar() {
    function click() {
        document.querySelector(".menu").style.display = "flex";
    }
    return (
        <div className="Navbar">
            <div className="Logo"></div>
            <div className="menu">
                <ul className="List_menu">
                    <li className="List_Item">Home</li>
                    <li className="List_Item">About</li>
                    <li className="List_Item">Profile</li>
                    <li className="List_Item">Contact Us</li>
                </ul>
            </div>
            <div className="hamborger_menu_icon" onClick={click}></div>
            <div className="Nav_List">
                <ul className="List">
                    <li className="List_Item">Home</li>
                    <li className="List_Item">About</li>
                    <li className="List_Item">Profile</li>
                    <li className="List_Item">Contact Us</li>
                </ul>
            </div>
        </div>
    )
}