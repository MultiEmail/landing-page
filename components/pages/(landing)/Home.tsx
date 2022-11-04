"use client";

// Libraries
import {Fragment, useState, useEffect} from "react";
import {AnimatePresence, motion} from "framer-motion";

// UI Components
import {Card} from "../../ui/Card";

// Icons
import {RiGithubLine} from "react-icons/ri";
import {MdOutlineDesignServices} from "react-icons/md";
import {CgSortAz, CgMenuRight} from "react-icons/cg";
import {BiSearch} from "react-icons/bi";
import {ButtonOrLink} from "../../ui/ButtonOrLink";
import {GrFormClose} from "react-icons/gr";
import Link from "next/link";
import {Menu} from "../../ui/Menu";

export const Home: React.FC = props => {
    const [showDropdown, setShowDropdown] = useState(false);

    const menuOptions = [
        {
            text: "About",
            href: "/",
        },
        {
            text: "Github",
            href: "/github",
        },
        {
            text: "Team",
            href: "/team",
        },
        {
            text: "Support",
            href: "/support",
        },
    ];

    function onMenuClick() {
        setShowDropdown(!showDropdown);
    }

    return (
        <main className="flex flex-row font-poppins no-scrollbar p-0 min-h-screen items-center">
            <AnimatePresence>
                <motion.section
                    className="grid overflow-hidden w-full min-h-screen grid-col-1 lg:grid-cols-5 grid-rows-auto lg:grid-rows-3 gap-2 grid-flow-row p-10"
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{duration: 0.5}}>
                    <div className="fixed flex flex-row top-0 left-0 h-[60px] z-999 justify-between w-full items-center px-5 bg-clip-padding bg-opacity-[50%] bg-white blur-[50%] rounded-sm lg:hidden">
                        <h1 className="flex font-semibold text-sm">Multi Email</h1>
                        <div
                            className="flex place-items-center hover:animate-ping-once cursor-pointer transition-all"
                            onClick={e => {
                                e.preventDefault();
                                setShowDropdown(true);
                            }}>
                            <ButtonOrLink intent="default" rounded={true}>
                                <CgMenuRight className="w-[32px] h-[32px] m-2" />
                            </ButtonOrLink>
                        </div>
                    </div>
                    <article className=" flex flex-col prose p-5 mt-[60px] lg:hidden place-items-center">
                        <h1 className="flex font-bold">Multi Email</h1>
                        <p className="">
                            <b>Multi Email</b> is a free, open-source, and self-hosted email service that allows you to
                            send and receive emails from multiple email addresses. We also host a public instance of
                            Multi Email for people who don't want to host their own instance.
                        </p>
                    </article>
                    <div className="hidden lg:flex lg:col-start-1 lg:col-end-4 place-items-center">
                        <Card size="big">
                            <h1 className="text-4xl prose font-bold">What</h1>
                            <p className="prose mx-5">
                                <b>Multi Email</b> is a free, open-source, and self-hosted email service that allows you
                                to send and receive emails from multiple email addresses.
                            </p>
                        </Card>
                    </div>
                    <div className="flex place-items-center">
                        <Card size="small">
                            <BiSearch className="w-[32px] h-[32px] m-2" />
                            <h4 className="flex text-xl text-center prose font-bold mb-0">Universal Search</h4>
                        </Card>
                    </div>
                    <div className="flex place-items-center">
                        <Card size="small">
                            <CgSortAz className="w-[32px] h-[32px] m-2" />
                            <h4 className="flex text-xl prose font-bold mb-0">Organized</h4>
                        </Card>
                    </div>
                    <div className="flex place-items-center">
                        <Card size="small">
                            <MdOutlineDesignServices className="flex w-[32px] h-[32px] my-2" />
                            <h4 className="flex text-xl prose font-bold mb-0">Customize</h4>
                        </Card>
                    </div>
                    <div className="hidden lg:flex place-items-center">
                        <ButtonOrLink
                            href={"/"}
                            intent="default"
                            rounded={true}
                            fullWidthandHeight={true}
                            textSize="extraLarge"
                            fontWeight="bold">
                            Sign Up
                        </ButtonOrLink>
                    </div>
                    <div className=" flex flex-col prose p-5 lg:hidden">
                        <h1 className="flex font-bold">How</h1>
                        <p className="flex ">
                            Just sign up. It's that simple. You can also host your own instance of the app. It's free
                            and open source. We don't sell your data. You can literally verify it.
                        </p>
                    </div>
                    <div className="hidden lg:flex lg:col-start-3 lg:col-end-6 place-items-center">
                        <Card size="big">
                            <p className="flex m-0 prose">
                                Just sign up. It's that simple. You can also host your own instance of the app. It's
                                free and open source. We don't sell your data. You can literally verify it.
                            </p>
                            <h1 className="flex text-4xl prose font-bold ml-5 mb-0">How</h1>
                        </Card>
                    </div>
                    <div className="flex place-items-center">
                        <Card size="small">
                            <RiGithubLine className="flex w-[32px] h-[32px] my-2" />
                            <h4 className="flex text-xl prose font-bold mb-0">Open Source</h4>
                        </Card>
                    </div>
                    <div className=" flex flex-col prose p-5 lg:hidden">
                        <h1 className="flex font-bold">Why</h1>
                        <p className="flex ">
                            We were tired of having to switch between multiple email accounts on various different
                            websites. So forth came the need for a tool that would allow us to manage all our emails in
                            one place.
                        </p>
                    </div>
                    <div className="hidden lg:flex lg:col-start-2 lg:col-end-5 place-items-center">
                        <Card size="big">
                            <p className="flex m-0 prose">
                                We were tired of having to switch between multiple email accounts on various different
                                websites. So forth came the need for a tool that would allow us to manage all our emails
                                in one place.
                            </p>
                            <h1 className="flex text-4xl prose font-bold ml-5 mb-0">Why</h1>
                        </Card>
                    </div>
                    <div
                        className="hidden lg:flex place-items-center z-999"
                        onClick={e => {
                            e.preventDefault();
                            setShowDropdown(true);
                        }}>
                        <ButtonOrLink intent="default" rounded={true} fontWeight="bold">
                            <CgMenuRight className="w-[32px] h-[32px] m-2" />
                        </ButtonOrLink>
                    </div>
                    <AnimatePresence>
                        {showDropdown ? <Menu options={menuOptions} closeMenu={onMenuClick} /> : null}
                    </AnimatePresence>
                </motion.section>
            </AnimatePresence>
        </main>
    );
};
