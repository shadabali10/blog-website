import React from "react";
import "./header.css";

const Header = () => {
    return (
        <div className="header">
            <div className="headerTitles">
                <span className="headerTitleLg">Triluxo</span>
            </div>
            <img
                className="headerImg"
                src="https://media.istockphoto.com/id/641691488/photo/blog-writing-online-on-the-internet-blue-computer-keyboard.jpg?s=2048x2048&w=is&k=20&c=u0KN6mBJaRrf74IcnuCddrtqG02a9Ogc45oOo5SoYBw="
                alt=""
            />
        </div>
    );
};

export default Header;
