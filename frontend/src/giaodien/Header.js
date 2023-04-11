import React from "react";
import {ReactNavbar} from "overlay-navbar";
import logo from "../images/1.png";
import {FaUser} from "react-icons/fa";
import {FaSearch} from "react-icons/fa";
import {FaShoppingCart} from "react-icons/fa";

const Header = () =>{
    return (
    <ReactNavbar
    burgerColor="#eb4034"
    burgerColorHover="#a62d24"
    logo={logo}
    logoWitdh="20vmax"
    navColor1="white"
    logoHoverSize="10px"
    logoHoverColor="eb4034"
    link1Text="Trang chủ"
    link2Text="Sản phẩm"
    link3Text="Liên hệ"
    link4Text="Giới thiệu"
    link1Url="/"
    link2Url="/sanpham"
    link3Url="/lienhe"
    link4Url="/gioithieu"
    link1Size="1.3vmax"
    link1Color="rgba(35,35,35,0.8)"
    nav1justifyContent="flex-end"
    nav2justifyContent="flex-end"
    nav3justifyContent="flex-start"
    nav4justifyContent="flex-start"
    link1ColorHover="#eb4034"
    link2Margin="1vmax"
    link3Margin="0"
    link4Margin="1vmax"
    profileIcon={true}
    profileIconSize="1.8vmax"
    searchIcon={true}
    cartIcon={true}
    ProfileIconElement={FaUser}
    SearchIconElement={FaSearch}
    CartIconElement={FaShoppingCart}
    profileIconColor="rgba(35,35,35,0.8)"    
    searchIconColor="rgba(35,35,35,0.8)"    
    cartIconColor="rgba(35,35,35,0.8)"    
    profileIconColorHover="#eb4034"
    searchIconColorHover="#eb4034"
    cartIconColorHover="#eb4034"
    cartIconMargin="1vmax"

    
    />
    );
};

export default Header;