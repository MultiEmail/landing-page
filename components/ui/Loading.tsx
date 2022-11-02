"use client";

import {cva, VariantProps} from "class-variance-authority";

export const LoadingStyles = cva("animate-spin rounded-full w-[28px] h-[28px] border-t-2", {
    variants: {
        intent: {
            default: "border-gray-900",
            error: "border-red-900",
            warning: "border-yellow-900",
            success: "border-green-900",
        },
    },
    defaultVariants: {
        intent: "default",
    },
});

export interface LoadingProps extends VariantProps<typeof LoadingStyles> {}

export const Loading = ({...props}: LoadingProps) => {
    return (
        <div className="flex h-screen justify-center items-center opacity-50">
            <div className="absolute w-[28px] h-[28px] border-2 border-[#80D39B] rounded-full animate-ping duration-200"></div>
        </div>
    );
};
