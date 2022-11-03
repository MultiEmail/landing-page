"use client";

import {cva, VariantProps} from "class-variance-authority";

const ButtonOrLinkStyles = cva("flex flex-col p-10 border-2 text-center justify-center items-center ", {
    variants: {
        intent: {
            default: "border-gray-300 transition-all hover:animate-ping-once",
        },
        size: {
            default: "px-4 py-2 text-sm",
            small: "px-2 py-1 text-xs",
            large: "px-6 py-3 text-base",
        },
        fullWidthandHeight: {
            default: "w-auto h-auto",
            true: "w-full lg:h-full",
            false: "w-auto",
        },
        rounded: {
            default: "rounded-[10px]",
            true: "rounded-full",
            false: "rounded-[10px]",
        },
        textSize: {
            default: "text-base",
            small: "text-xs",
            large: "text-lg",
            extraLarge: "text-xl",
        },
        fontWeight: {
            default: "font-normal",
            semiBold: "font-semibold",
            bold: "font-bold",
        },
    },
    defaultVariants: {
        intent: "default",
        fullWidthandHeight: "default",
        rounded: "default",
        textSize: "default",
        fontWeight: "default",
    },
});

export interface ButtonProps extends VariantProps<typeof ButtonOrLinkStyles> {
    children: React.ReactNode;
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    href?: string;
}

function clickHandler(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    console.log("Button clicked");
}

export const ButtonOrLink = ({children, onClick, href, ...props}: ButtonProps) => {
    return (
        <div className="flex flex-row font-poppins justify-center items-center w-full lg:h-full">
            {href ? (
                <a href={href} className={ButtonOrLinkStyles(props)}>
                    {children}
                </a>
            ) : (
                <button onClick={onClick} className={ButtonOrLinkStyles(props)}>
                    {children}
                </button>
            )}
        </div>
    );
};
