import React, { useState } from "react";

import './styles/profile.css';
import { FaHome, FaShoppingCart } from "react-icons/fa";
import { MdAccountCircle, MdMuseum } from "react-icons/md";
import ProfileLink from "./ProfileLink";
import CartInfoDiv from "./CartInfoDiv";
import AccountComponent from "./AccountComponent";



function ProfileDiv() {
    const profile_links = [
        // {
        //     "text": "Home", "icon": <FaHome />, "func": () => { setShow("home") }
        // },
        {
            "text": "View Cart", "icon": <FaShoppingCart />, "func": () => { setShow("cart") }
        },
        {
            "text": "Your Account", "icon": <MdAccountCircle />, "func": () => { setShow("account") }
        },
        // {
        //     "text": "Browse Museums", "icon": <MdMuseum />, "func": () => { setShow("museums") }
        // }
    ];
    const [show, setShow] = useState("account");


    return <div className="profile">
        <div className='profile-box brown-grad'>
            <div className='profile-img-div flex-div'>
                <div className='profile-img-div-circle flex-div'>
                    <h1>U</h1>
                </div>
                <h1>Hello User!</h1>
            </div>

            <div id='profile-links'>

                {
                    profile_links.map((link, index) => {
                        console.log(index);
                        return <ProfileLink key={index} text={link.text} icon={link.icon} func={link.func} />;
                    })
                }



            </div>
        </div>

        {/* {show === "cart" && <CartInfoDiv />}
        {show === "home" && <HomeComponent />}
        {show === "account" && <AccountComponent />}
        {show === "museums" && <MuseumsComponent />} */}

        {show === "cart" && <CartInfoDiv />}
        {show === "home" && <h1>Home</h1>}
        {show === "account" && <AccountComponent />}
        {show === "museums" && <h1>museums</h1>}


    </div>;
}

export default ProfileDiv;