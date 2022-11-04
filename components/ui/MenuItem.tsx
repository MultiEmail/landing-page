import {cva, VariantProps} from "class-variance-authority";
import Link, {LinkProps} from "next/link";

const MenuItemStyles = cva("flex text-3xl my-2 hover:animate-pulse transition-all duration-500", {
    variants: {
        active: {
            default: "text-gray-900 font-light",
            true: "text-black-900 font-semibold",
            false: "text-gray-600 font-light",
        },
    },
    defaultVariants: {
        active: "default",
    },
});

export interface MenuItemProps extends VariantProps<typeof MenuItemStyles> {
    text: string;
    href: LinkProps["href"];
    active?: boolean;
}

function onClickListener(e: React.MouseEvent<HTMLAnchorElement>) {
    e.preventDefault();
    console.log("MenuItem clicked");
}

export const MenuItem = ({href, text, ...props}: MenuItemProps) => {
    return (
        <Link href={href} className={MenuItemStyles(props)}>
            {text}
        </Link>
    );
};
