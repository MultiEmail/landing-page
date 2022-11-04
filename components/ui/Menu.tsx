// Libraries
import {motion} from "framer-motion";
import Link from "next/link";
import {useRouter, usePathname} from "next/navigation";

// Components
import {ButtonOrLink} from "./ButtonOrLink";

// Icons
import {GrFormClose} from "react-icons/gr";
import {MenuItem} from "./MenuItem";
import {useEffect, useState} from "react";

export interface MenuProps {
    options: Array<{
        text: string;
        href: string;
    }>;
    closeMenu: () => void;
}

export const Menu = ({options, closeMenu, ...props}: MenuProps) => {
    const path = usePathname();

    function closeOnEscape(e: KeyboardEvent) {
        if (e.key === "Escape") {
            closeMenu();
        }
    }

    useEffect(() => {
        document.addEventListener("keydown", closeOnEscape);
        return () => {
            document.removeEventListener("keydown", closeOnEscape);
        };
    }, []);

    return (
        <motion.div
            className="fixed flex top-0 left-0 rounded-lg w-full h-full bg-white bg-opacity-[80%] items-center"
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            transition={{duration: 0.5}}>
            <div className="flex place-items-center" onClick={closeMenu}>
                <ButtonOrLink intent="default" rounded={true} fontWeight="bold">
                    <GrFormClose className="w-[32px] h-[32px] m-2" />
                </ButtonOrLink>
            </div>
            <div className="flex w-full h-fit p-5 justify-center">
                <ul className="flex flex-col justify-center items-center">
                    {options.map((option, i) => {
                        return <MenuItem key={i} href={option.href} text={option.text} active={option.href === path} />;
                    })}
                </ul>
            </div>
        </motion.div>
    );
};
