import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import HeaderOption from "./HeaderOption";
import HomeIcon from "@material-ui/icons/Home";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import ChatIcon from "@material-ui/icons/Chat";
import NotificationsIcon from "@material-ui/icons/Notifications";
import {useDispatch} from "react-redux";
import {auth} from "./firebase";
import {logout} from "./features/userSlice";

function Header() {
    const dispatch = useDispatch();

    const logoutOfApp = () => {
        dispatch(logout());
        auth.signOut();
    };

    return (
        <div className="header">
            <div className="header__left">
                <img
                    src="https://www.flaticon.com/svg/static/icons/svg/174/174857.svg"
                    alt="linkedInLogo"/>

                <div className="header__search">
                    <SearchIcon/>
                    <input
                        placeholder="Search"
                        type="text"
                    />
                </div>
            </div>
            <div className="header__right">
                <HeaderOption
                    Icon={HomeIcon}
                    title='Home'
                />
                <HeaderOption
                    Icon={SupervisorAccountIcon}
                    title='My Network'
                />
                <HeaderOption
                    Icon={BusinessCenterIcon}
                    title='Jobs'
                />
                <HeaderOption
                    Icon={ChatIcon}
                    title='Messaging'
                />
                <HeaderOption
                    Icon={NotificationsIcon}
                    title='Notifications'
                />
                <HeaderOption
                    avatar="https://media-exp1.licdn.com/dms/image/C5603AQFUQ6ey57udmg/profile-displayphoto-shrink_100_100/0/1516848359102?e=1627516800&v=beta&t=A8t_k3oFGDrNQIPsmsNsBaTrwpCszwecTZIDmOpDJ2E"
                    title="me"
                    onClick={logoutOfApp}
                />

            </div>
        </div>
    );
}

export default Header;