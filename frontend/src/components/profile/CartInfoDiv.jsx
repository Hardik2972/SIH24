import React,{useState} from "react";
import CartTable from "./CartTable";
import "./styles/cartTable.css"

function CartInfoDiv(){
    return <div id="cart-info-div">
    <h1 className="profile-links-heading">Your Cart</h1>

        <CartTable></CartTable>

</div>;
}

export default CartInfoDiv;