"use client";

// Libraries
import {useState} from "react";
import {AnimatePresence, motion} from "framer-motion";
import {Menu} from "../../ui/Menu";
import {useRouter} from "next/navigation";
import Link from "next/link";

// Components
import {ButtonOrLink} from "../../ui/ButtonOrLink";

// Icons
import {HiOutlineDocumentText} from "react-icons/hi";
import {CgMenuRight} from "react-icons/cg";
import {Card} from "../../ui/Card";
import {MdPassword} from "react-icons/md";

export function Support() {
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
                            <h1 className="flex items-center mb-0 font-bold">Support</h1>
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
                        <div className="flex flex-col lg:flex-row w-full h-full justify-center items-center">
                            <Link className="flex place-items-center w-full" href="/" target="_blank">
                                <Card size="big" width="full">
                                    <MdPassword className="w-[32px] h-[32px] m-2" />
                                    <div className="flex flex-col">
                                        <h4 className="flex text-xl text-center prose font-bold mb-0">Password?</h4>
                                        <p className="prose">Did you forget your password?</p>
                                    </div>
                                </Card>
                            </Link>
                            <Link className="flex place-items-center w-full" href="/" target="_blank">
                                <Card size="big" width="full">
                                    <HiOutlineDocumentText className="w-[32px] h-[32px] m-2" />
                                    <div className="flex flex-col">
                                        <h4 className="flex text-xl text-center prose font-bold mb-0">
                                            Documentation?
                                        </h4>
                                        <p className="prose">We wrote a simple guide for you.</p>
                                    </div>
                                </Card>
                            </Link>
                            <Link
                                className="flex place-items-center w-full"
                                href="https://discord.gg/GtSftczQX5"
                                target="_blank">
                                <Card size="big" width="full">
                                    <MdPassword className="w-[32px] h-[32px] m-2" />
                                    <div className="flex flex-col">
                                        <h4 className="flex text-xl text-center prose font-bold mb-0">Discord</h4>
                                        <p className="prose">Need extra help? We gotchu.</p>
                                    </div>
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
