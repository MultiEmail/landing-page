
import {cva, VariantProps} from "class-variance-authority";
import Link from "next/link";

const NavItemStyles = cva("flex items-center px-3 py-2 text-sm font-medium rounded-md", {
    variants: {
        intent: {
            default: "text-gray-600 hover:text-gray-900 hover:bg-gray-50",
        },
        active: {
            default: "text-gray-900 bg-gray-50",
            true: "text-gray-900 bg-gray-50",
            false: "text-gray-600 hover:text-gray-900 hover:bg-gray-50",
        },
    },
    defaultVariants: {
        intent: "default",
    },
});

export interface NavItemProps extends VariantProps<typeof NavItemStyles> {
    href: string;
    children: React.ReactNode;
}

export const NavItem = ({href, children, ...props}: NavItemProps) => {
    return (
        <Link href={href} className={NavItemStyles(props)}>
            {children}
        </Link>
    );
};
