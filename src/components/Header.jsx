import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
    return (
        <div className="p-2 bg-blue-400 shadow-xl">
            <div className="container flex items-center justify-between">
                <h1 className="text-white text-[35px] font-bold">8oy 1dars</h1>
                <ul className="text-white headLink">
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            isActive ? "active" : "nonactive"
                        }
                    >
                        1-Masala
                    </NavLink>
                    <NavLink
                        className={({ isActive }) =>
                            isActive ? "active" : "nonactive"
                        }
                        to="/masala2"
                    >
                        2-Masala
                    </NavLink>
                </ul>
                <button className="px-3 py-1 transition-all bg-white rounded-md active:scale-90 ">
                    SUBMIT
                </button>
            </div>
        </div>
    );
}

export default Header;
