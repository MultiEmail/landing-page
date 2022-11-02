import {cva, VariantProps} from "class-variance-authority";

const NavBarStyles = cva("bg-white shadow", {
    variants: {
        intent: {
            default: "border-gray-300",
            error: "border-red-300",
            warning: "border-yellow-300",
            success: "border-green-300",
        },
    },
    defaultVariants: {
        intent: "default",
    },
});

export interface NavBarProps extends VariantProps<typeof NavBarStyles> {
    children: React.ReactNode;
}

export const NavBar = ({children, ...props}: NavBarProps) => {
    return (
        <nav className={NavBarStyles(props)}>
            <div className="absolute flex flex-row top-5 w-full justify-between">
                {children}
            </div>
        </nav>
    );
};
