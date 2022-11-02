export const Card = ({children, ...props}: {children: React.ReactNode}) => {
    return (
        <div className="w-full">
            <div className="relative flex group m-5 min-h-[150px] lg:max-h-[150px]">
                <div className="absolute -inset-0.5 w-full bg-gradient-to-r from-pink-600 via-red-600 to-purple-600 rounded-lg blur opacity-30 group-hover:opacity-70 transition duration-500 group-hover:duration-200 animate-tilt"></div>
                <div className="relative flex flex-row bg-white p-5 rounded-[8px] w-full justify-center">
                    {children}
                </div>
            </div>
        </div>
    );
};
