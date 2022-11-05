"use client";

// Libraries
import {useState} from "react";
import {AnimatePresence, motion} from "framer-motion";
import {Menu} from "../../ui/Menu";
import {useRouter} from "next/navigation";

// Components
import {ButtonOrLink} from "../../ui/ButtonOrLink";

// Icons
import {GoBrowser} from "react-icons/go";
import {CgMenuRight} from "react-icons/cg";
import {Card} from "../../ui/Card";
import {BiExtension, BiServer} from "react-icons/bi";
import Link from "next/link";


export function Github() {
    const [showDropdown, setShowDropdown] = useState(false);
    const router = useRouter();

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
            text: "Contributor's",
            href: "/contributors",
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
                    className="flex flex-row overflow-hidden w-full min-h-screen p-10"
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{duration: 0.5}}>
                    <div className="flex flex-col w-full">
                        <div className="flex flex-row text-3xl items-center my-5 justify-between">
                            <h1 className="flex items-center mb-0 font-bold">Github</h1>
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
                        <p className="prose">
                            We are open source and we love it. We are always looking for contributors to help us improve
                            our projects. If you are interested in contributing to our projects, please read our{" "}
                            <a href="" className="text-blue-500">
                                contributing guidelines
                            </a>
                            .
                        </p>
                        <hr className="my-10" />
                        <h1 className="flex text-3xl font-bold">Repositories</h1>
                        <div className="flex flex-col lg:flex-row gap-5 mt-5 justify-center items-center">
                            <Link className="flex place-items-center w-full" href="https://github.com" target="_blank">
                                <Card size="small" width="full">
                                    <GoBrowser className="w-[32px] h-[32px] m-2" />
                                    <h4 className="flex text-xl text-center prose font-bold mb-0">Client</h4>
                                    <p className="flex w-full text-sm prose justify-center">The Frontend Repository</p>
                                </Card>
                            </Link>
                            <Link className="flex place-items-center w-full" href="https://github.com" target="_blank">
                                <Card size="small" width="full">
                                    <BiServer className="w-[32px] h-[32px] m-2" />
                                    <h4 className="flex text-xl text-center prose font-bold mb-0">Server</h4>
                                    <p className="flex w-full text-sm prose justify-center">The Backend Repository</p>
                                </Card>
                            </Link>
                            <Link className="flex place-items-center w-full" href="https://github.com" target="_blank">
                                <Card size="small" width="full">
                                    <BiExtension className="w-[32px] h-[32px] m-2" />
                                    <h4 className="flex text-xl text-center prose font-bold mb-0">VSCode Extension</h4>
                                    <p className="flex w-full text-sm prose justify-center">
                                        The VSCode Extension Repository
                                    </p>
                                </Card>
                            </Link>
                        </div>
                    </div>
                    <AnimatePresence>
                        {showDropdown ? <Menu options={menuOptions} closeMenu={onMenuClick} /> : null}
                    </AnimatePresence>
                </motion.section>
            </AnimatePresence>
        </main>
    );
}
