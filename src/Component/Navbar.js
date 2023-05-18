import React from "react";
import "./Navbar.css"

export default function Navbar() {
    return (
        <div className="Navbar">
            <div className="Logo"></div>
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