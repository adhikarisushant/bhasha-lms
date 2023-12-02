"use client";
import { FC, useEffect, useState } from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Box, IconButton, Typography } from "@mui/material";
import "react-pro-sidebar/dist/css/styles.css";
import {
    HomeOutlinedIcon,
    ArrowForwardIosIcon,
    ArrowBackIosIcon,
    ReceiptOutlinedIcon,
    MapOutlinedIcon,
    GroupsIcon,
    ManageHistoryIcon,
    StorefrontIcon,
    ExitToAppIcon,
    VideoCallIcon,
    OndemandVideoIcon,
    WebIcon,
    QuizIcon,
    WysiwygIcon,
    PeopleOutlinedIcon,
    BarChartOutlinedIcon,
    SettingsIcon,
} from "./Icon";
import avatarDefault from "../../../../public/assets/avatar.png"
import { useSelector } from "react-redux";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";

interface itemProps {
    title: string;
    to: string;
    icon: JSX.Element;
    selected: string;
    setSelected: any;
}

const Item: FC<itemProps> = ({ title, to, icon, selected, setSelected }) => {
    return (
        <MenuItem
            active={selected === title}
            onClick={() => setSelected(title)}
            icon={icon}
            className="my-5"
        >
            <Typography className="!text-[18px] !font-Poppins text-ellipsis">
                {title}
            </Typography>
            <Link href={to} />
        </MenuItem>
    );
};

interface Props {
    selected: string;
    setSelected: any;
}

const Sidebar = () => {
    const { user } = useSelector((state: any) => state.auth);
    const [logout, setlogout] = useState(false);
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [mounted, setMounted] = useState(false);
    const [selected, setSelected] = useState("Dashboard");
    const { theme, setTheme } = useTheme();

    useEffect(() => setMounted(true), []);

    if (!mounted) {
        return null;
    }

    const logoutHandler = () => {
        setlogout(true);
    };

    return (
        <Box
            sx={{
                "& .pro-sidebar-inner": {
                    background: `${"#111C43 !important"}`,
                },
                "& .pro-icon-wrapper": {
                    backgroundColor: "transparent !important",
                },
                "& .pro-inner-item:hover": {
                    color: "#868dfb !important",
                },
                "& .pro-menu-item.active": {
                    color: "#6870fa !important",
                },
                "& .pro-inner-item": {
                    padding: "5px 35px 5px 20px !important",
                    opacity: 1,
                },
                "& .pro-menu-item": {
                    color: "#fff",
                },
            }}
            className="bg-[#111C43]"
        >
            <ProSidebar
                collapsed={isCollapsed}
                style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    height: "100vh",
                    zIndex: 99999999999999,
                    width: isCollapsed ? "0%" : "16%",
                }}
            >
                <Menu iconShape="square">
                    {/* LOGO AND MENU ICON */}
                    <MenuItem
                        onClick={() => setIsCollapsed(!isCollapsed)}
                        icon={isCollapsed ? <ArrowForwardIosIcon /> : undefined}
                        style={{
                            margin: "10px 0 20px 0",
                        }}
                    >
                        {!isCollapsed && (
                            <Box
                                display="flex"
                                justifyContent="space-between"
                                alignItems="center"
                                ml="15px"
                            >
                                <Link href="/" className="block">
                                    <h3 className="text-[25px] font-Poppins uppercase text-white">
                                        BhasaLMS
                                    </h3>
                                </Link>
                                <IconButton
                                    onClick={() => setIsCollapsed(!isCollapsed)}
                                    className="inline-block"
                                >
                                    <ArrowBackIosIcon className="text-[#ffffffc1]" />
                                </IconButton>
                            </Box>
                        )}
                    </MenuItem>

                    {!isCollapsed && (
                        <Box mb="25px">
                            <Box display="flex" justifyContent="center" alignItems="center">
                                <Image
                                    alt="profile-user"
                                    width={100}
                                    height={100}
                                    src={user.avatar ? user.avatar.url : avatarDefault}
                                    style={{
                                        cursor: "pointer",
                                        borderRadius: "50%",
                                        border: "3px solid #5b6fe6",
                                    }}
                                />
                            </Box>
                            <Box textAlign="center">
                                <Typography
                                    variant="h4"
                                    className="!text-[20px]  text-[#ffffffc1]"
                                    sx={{ m: "10px 0 0 0" }}
                                >
                                    {user?.name}
                                </Typography>
                                <Typography
                                    variant="h6"
                                    sx={{ m: "10px 0 0 0" }}
                                    className="!text-[20px]  text-[#ffffffc1] capitalize"
                                >
                                    - {user?.role}
                                </Typography>
                            </Box>
                        </Box>
                    )}

                    <Box paddingLeft={isCollapsed ? undefined : "10%"}>
                        <Item
                            title="Dashboard"
                            to="/admin"
                            icon={<HomeOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Typography
                            variant="h5"
                            sx={{ m: "15px 0 5px 25px" }}
                            className="!text-[18px] text-black dark:text-[#ffffffc1] capitalize !font-[400]"
                        >
                            {!isCollapsed && "Data"}
                        </Typography>
                        <Item
                            title="Users"
                            to="/admin/users"
                            icon={<GroupsIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />

                        <Item
                            title="Shops"
                            to="/shops"
                            icon={<StorefrontIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />

                        <Item
                            title="Invoices"
                            to="/admin/invoices"
                            icon={<ReceiptOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Typography
                            variant="h5"
                            sx={{ m: "15px 0 5px 25px" }}
                            className="!text-[18px] text-black dark:text-[#ffffffc1] capitalize !font-[400]"
                        >
                            {!isCollapsed && "Content"}
                        </Typography>
                        <Item
                            title="Create Course"
                            to="/admin/create-course"
                            icon={<VideoCallIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />

                        <Item
                            title="Live Courses"
                            to="/admin/courses"
                            icon={<OndemandVideoIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Typography
                            variant="h5"
                            sx={{ m: "15px 0 5px 25px" }}
                            className="!text-[18px] text-black dark:text-[#ffffffc1] capitalize !font-[400]"
                        >
                            {!isCollapsed && "Customization"}
                        </Typography>
                        <Item
                            title="Hero"
                            to="/admin/hero"
                            icon={<WebIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Item
                            title="FAQ"
                            to="/admin/faq"
                            icon={<QuizIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Item
                            title="Categories"
                            to="/admin/categories"
                            icon={<WysiwygIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Typography
                            variant="h5"
                            sx={{ m: "15px 0 5px 25px" }}
                            className="!text-[18px] text-black dark:text-[#ffffffc1] capitalize !font-[400]"
                        >
                            {!isCollapsed && "Controllers"}
                        </Typography>
                        <Item
                            title="Manage Team"
                            to="/admin/team"
                            icon={<PeopleOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Typography
                            variant="h5"
                            sx={{ m: "15px 0 5px 25px" }}
                            className="!text-[18px] text-black dark:text-[#ffffffc1] capitalize !font-[400]"
                        >
                            {!isCollapsed && "Analytics"}
                        </Typography>
                        <Item
                            title="Courses Analytics"
                            to="/admin/courses-analytics"
                            icon={<BarChartOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Item
                            title="Orders Analytics"
                            to="/admin/orders-analytics"
                            icon={<MapOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Item
                            title="Users Analytics"
                            to="/admin/users-analytics"
                            icon={<ManageHistoryIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Typography
                            variant="h5"
                            sx={{ m: "15px 0 5px 25px" }}
                            className="!text-[18px] text-black dark:text-[#ffffffc1] capitalize !font-[400]"
                        >
                            {!isCollapsed && "Extras"}
                        </Typography>
                        <Item
                            title="Settings"
                            to="/admin/settings"
                            icon={<SettingsIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <div onClick={logoutHandler}>
                            <Item
                                title="Logout"
                                to="/"
                                icon={<ExitToAppIcon />}
                                selected={selected}
                                setSelected={setSelected}
                            />
                        </div>
                    </Box>
                </Menu>
            </ProSidebar>
        </Box>
    );
};

export default Sidebar;
