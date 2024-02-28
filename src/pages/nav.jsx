// nav.js
import React, { useState } from "react";
import "./nav.css";
import { NavLink, Link, useNavigate } from "react-router-dom";

import {
    Typography,
    Button,
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
    Avatar,
    Card,
} from "@material-tailwind/react";
import {
    UserCircleIcon,
    ChevronDownIcon,
    Cog6ToothIcon,
    InboxArrowDownIcon,
    LifebuoyIcon,
    PowerIcon,
} from "@heroicons/react/24/solid";

function Nav() {
    const [searchtext, setSearchinput] = useState("");
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const closeMenu = () => setIsMenuOpen(false);
    function sendvalue(e) {
        setSearchinput(e.target.value);
    }

    const isAuthenticated = !!localStorage.getItem("token");
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");

        navigate("/");
        alert("you are logout");
    };

    const profileMenuItems = [
        {
            label: "My Profile",
            icon: UserCircleIcon,
        },
        {
            label: "Edit Profile",
            icon: Cog6ToothIcon,
        },
        {
            label: "Inbox",
            icon: InboxArrowDownIcon,
        },
        {
            label: "Help",
            icon: LifebuoyIcon,
        },
        {
            label: "Sign Out",
            icon: PowerIcon,
        },
    ];

    return (
        <>
            <div className="header">
                <h1 className="logo">P_Store</h1>
                <div className="w-full">
                    <Menu
                        open={isMenuOpen}
                        handler={setIsMenuOpen}
                        placement="bottom-end"
                    >
                        <MenuHandler>
                            <Button
                                variant="text"
                                color="blue-gray"
                                className="flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 lg:ml-auto ml-auto"
                            >
                                <Avatar
                                    variant="circular"
                                    size="sm"
                                    alt="tania andrew"
                                    className="border border-gray-900 p-0.5"
                                    src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                                />
                                <ChevronDownIcon
                                    strokeWidth={2.5}
                                    className={`h-3 w-3 transition-transform ${
                                        isMenuOpen ? "rotate-180" : ""
                                    }`}
                                />
                            </Button>
                        </MenuHandler>
                        <MenuList className="p-1">
                            {profileMenuItems.map(({ label, icon }, key) => {
                                const isLastItem =
                                    key === profileMenuItems.length - 1;
                                return (
                                    <MenuItem
                                        key={label}
                                        onClick={closeMenu}
                                        className={`flex items-center gap-2 rounded ${
                                            isLastItem
                                                ? "hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10"
                                                : ""
                                        }`}
                                    >
                                        {React.createElement(icon, {
                                            className: `h-4 w-4 ${
                                                isLastItem ? "text-red-500" : ""
                                            }`,
                                            strokeWidth: 2,
                                        })}
                                        <Typography
                                            as="span"
                                            variant="small"
                                            className="font-normal"
                                            color={
                                                isLastItem ? "red" : "inherit"
                                            }
                                        >
                                            {label}
                                        </Typography>
                                    </MenuItem>
                                );
                            })}
                        </MenuList>
                    </Menu>
                </div>
            </div>
            <div>
                <form className="search">
                    <input
                        style={{ height: "40px", width: "600px" }}
                        className="mainsearch"
                        type="search"
                        name="search"
                        value={searchtext}
                        onChange={sendvalue}
                        placeholder="Enter Category"
                    />
                    <NavLink to={`/Search/${searchtext}`}>
                        <button
                            className="but"
                            style={{ height: "40px", width: "80px" }}
                            type="submit"
                        >
                            Search
                        </button>
                    </NavLink>
                </form>
                <br />

                <div style={{ textDecoration: "none" }}>
                    <nav>
                        <ul className="nav_Navlinks">
                            {/* style={{ listStyle: "none",textDecoration: "none"}} */}
                            <li>
                                <NavLink to="/">Home</NavLink>
                            </li>
                            {/* <li>
              <NavLink to="/shoes">Shoes</NavLink>
            </li>
            <li>
              <NavLink to="/mobiles">Mobiles</NavLink>
            </li> */}
                            <li>
                                <NavLink to="/Men">Men</NavLink>
                            </li>
                            <li>
                                <NavLink to="/Women">Women</NavLink>
                            </li>

                            <li>
                                <NavLink to="/unisex">Unisex</NavLink>
                            </li>
                            <li>
                                <NavLink to="/Cart">Cart🛒</NavLink>
                            </li>
                            {isAuthenticated ? (
                                // Show Logout button when user is authenticated
                                <button type="submit" onClick={handleLogout}>
                                    Logout
                                </button>
                            ) : (
                                // Show Register and Sign In buttons when user is not authenticated
                                <>
                                    {/* <Link to="/signup"><button type="submit">Register</button></Link> */}
                                    <Link to="/signin">
                                        <button type="submit">Sign In</button>
                                    </Link>
                                </>
                            )}

                            {/* <li>
             <button onClick={logout}> Log Out</button>
            </li> */}
                        </ul>
                    </nav>
                </div>
            </div>
        </>
    );
}

export default Nav;
