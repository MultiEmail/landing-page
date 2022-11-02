import {cva, VariantProps} from "class-variance-authority";

const ButtonOrLinkStyles = cva(
    "inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",
    {
        variants: {
            intent: {
                default: "bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500",
                error: "bg-red-600 hover:bg-red-700 focus:ring-red-500",
                warning: "bg-yellow-600 hover:bg-yellow-700 focus:ring-yellow-500",
                success: "bg-green-600 hover:bg-green-700 focus:ring-green-500",
            },
            size: {
                default: "px-4 py-2 text-sm",
                small: "px-2 py-1 text-xs",
                large: "px-6 py-3 text-base",
            },
            fullWidth: {
                default: "w-auto",
                true: "w-full",
                false: "w-auto",
            },
        },
        defaultVariants: {
            intent: "default",
            size: "default",
            fullWidth: "default",
        },
    }
);

export interface ButtonProps extends VariantProps<typeof ButtonOrLinkStyles> {
    children: React.ReactNode;
    onClick?: () => void;
    href?: string;
}

export const ButtonOrLink = ({children, onClick, href, ...props}: ButtonProps) => {
    return (
        <div className="flex flex-row">
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
