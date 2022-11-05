"use client";

// Libraries
import {useState} from "react";
import {AnimatePresence, motion} from "framer-motion";
import {Menu} from "../../ui/Menu";
import {useRouter} from "next/navigation";
import Link from "next/link";

// Components
import {ButtonOrLink} from "../../ui/ButtonOrLink";
import {Card} from "../../ui/Card";

// Icons
import {GoBrowser} from "react-icons/go";
import {CgMenuRight} from "react-icons/cg";
import {FiGithub} from "react-icons/fi";

interface Team {
    name: string;
    profilePicture: string;
    role: string;
    github: string;
}

export function Contributors({team}: {team: Array<Team>}) {
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
                            <h1 className="flex items-center mb-0 font-bold">Contributor's</h1>
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
                        <div className="flex flex-row flex-wrap justify-center ">
                            {team ? (
                                team.map((member, index) => (
                                    <div key={index} className="flex flex-col w-fit p-5 border-2 border-gray-300 m-5">
                                        <div className="flex flex-col">
                                            <img className="w-20 h-20 rounded-full" src={member.profilePicture} />
                                            <h1 className="text-[14px] font-bold">{member.name}</h1>
                                            <h2 className="text-lg mb-2">{member.role}</h2>
                                            <Link href={member.github} target="_blank">
                                                <div className="hover:bg-gray-300 rounded-full p-2 w-fit transition-all duration-200">
                                                    <FiGithub className="w-[28px] h-[28px]" />
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <div>
                                    <h1 className="text-3xl font-bold">There are no contributors yet! :(</h1>
                                </div>
                            )}
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
