import React from "react";
import "./Navbar.css"

export default function Navbar() {
    function open() {
        document.querySelector(".menu").style.display = "flex";
    }
    function close() {
        document.querySelector(".menu").style.display = "none";
    }
    return (
        <div className="Navbar">
            <div className="Logo"></div>
            <div className="menu">
                <ul className="List_menu">
                    <li className="List_Item menu_close" onClick={close}>X</li>
                    <li className="List_Item">Home</li>
                    <li className="List_Item">About</li>
                    <li className="List_Item">Profile</li>
                    <li className="List_Item">Contact Us</li>
                </ul>
            </div>
            <div className="hamborger_menu_icon" onClick={open}></div>
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