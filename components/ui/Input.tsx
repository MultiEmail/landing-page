import {cva, VariantProps} from "class-variance-authority";

const InputStyles = cva("mt-1 block w-full rounded-md border-gray-300 shadow-sm outline-none duration-200", {
    variants: {
        intent: {
            default: "border-gray-300 focus:border-gray-300 focus:ring focus:ring-gray-200 focus:ring-opacity-50",
            error: "border-red-300 focus:border-red-300 focus:ring focus:ring-red-200 focus:ring-opacity-50",
            warning: "border-yellow-300 focus:border-yellow-300 focus:ring focus:ring-yellow-200 focus:ring-opacity-50",
            success: "border-green-300 focus:border-green-300 focus:ring focus:ring-green-200 focus:ring-opacity-50",
        },
        fullWidth: {
            default: "w-full",
            true: "w-full",
            false: "w-auto",
        },
    },
    defaultVariants: {
        intent: "default",
    },
});

export interface InputProps extends VariantProps<typeof InputStyles> {
    id: string;
    type: string;
    label: string;
}

export const Input = ({id, type, label, ...props}: InputProps) => {
    return (
        <div className="flex flex-col">
            <div className="flex flex-col my-2">
                <div className="flex flex-col">
                    <label htmlFor={id}>{label}</label>
                    <input id={id} type={type} className={InputStyles(props)} />
                </div>
            </div>
        </div>
    );
};
