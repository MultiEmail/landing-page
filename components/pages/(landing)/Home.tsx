"use client";

// Libraries
import {useRef} from "react";
import {LocomotiveScrollProvider} from "react-locomotive-scroll";

// UI Components
import {Card} from "../../ui/Card";

// Icons
import {RiGithubLine} from "react-icons/ri";
import {MdOutlineDesignServices} from "react-icons/md";
import {CgSortAz} from "react-icons/cg";
import {BiSearch} from "react-icons/bi";
import {ButtonOrLink} from "../../ui/ButtonOrLink";
import {BiDownArrowAlt} from "react-icons/bi";

export const Home: React.FC = () => {
    // SSR Fetching
    // const res = await fetch("")
    const containerRef = useRef(null);

    return (
        <div className="flex font-poppins w-full items-center">
            <LocomotiveScrollProvider options={{smooth: true}}>
                <main className="w-full" data-scroll-container ref={containerRef}>
                    <div
                        data-scroll-section
                        className="grid overflow-hidden min-h-screen grid-col-1 lg:grid-cols-5 grid-rows-auto lg:grid-rows-3 gap-2 grid-flow-row p-10">
                        <article className=" flex flex-col prose p-5 lg:hidden place-items-center">
                            <h1 className="flex font-bold">Multi Email</h1>
                            <p className="">
                                <b>Multi Email</b> is a free, open-source, and self-hosted email service that allows you
                                to send and receive emails from multiple email addresses. We also host a public instance
                                of Multi Email for people who don't want to host their own instance.
                            </p>
                        </article>
                        <div className="hidden lg:flex lg:col-start-1 lg:col-end-4 place-items-center">
                            <Card size="big">
                                <h1 className="text-4xl prose font-bold">What</h1>
                                <p className="prose mx-5">
                                    <b>Multi Email</b> is a free, open-source, and self-hosted email service that allows
                                    you to send and receive emails from multiple email addresses.
                                </p>
                            </Card>
                        </div>
                        <div className="flex place-items-center">
                            <Card size="small">
                                <BiSearch className="w-[32px] h-[32px] m-2" />
                                <h4 className="flex text-xl text-center prose font-bold mb-0">Universal Search</h4>
                            </Card>
                        </div>
                        <div className="flex place-items-center">
                            <Card size="small">
                                <CgSortAz className="w-[32px] h-[32px] m-2" />
                                <h4 className="flex text-xl prose font-bold mb-0">Organized</h4>
                            </Card>
                        </div>
                        <div className="flex place-items-center">
                            <Card size="small">
                                <MdOutlineDesignServices className="flex w-[32px] h-[32px] my-2" />
                                <h4 className="flex text-xl prose font-bold mb-0">Customize</h4>
                            </Card>
                        </div>
                        <div className="hidden lg:flex place-items-center">
                            <ButtonOrLink
                                href={"/"}
                                intent="default"
                                rounded={true}
                                fullWidthandHeight={true}
                                textSize="extraLarge"
                                fontWeight="bold">
                                Sign Up
                            </ButtonOrLink>
                        </div>
                        <div className=" flex flex-col prose p-5 lg:hidden">
                            <h1 className="flex font-bold">How</h1>
                            <p className="flex ">
                                Just sign up. It's that simple. You can also host your own instance of the app. It's
                                free and open source. We don't sell your data. You can literally verify it.
                            </p>
                        </div>
                        <div className="hidden lg:flex lg:col-start-3 lg:col-end-6 place-items-center">
                            <Card size="big">
                                <p className="flex m-0 prose">
                                    Just sign up. It's that simple. You can also host your own instance of the app. It's
                                    free and open source. We don't sell your data. You can literally verify it.
                                </p>
                                <h1 className="flex text-4xl prose font-bold ml-5 mb-0">How</h1>
                            </Card>
                        </div>
                        <div className="flex place-items-center">
                            <Card size="small">
                                <RiGithubLine className="flex w-[32px] h-[32px] my-2" />
                                <h4 className="flex text-xl prose font-bold mb-0">Open Source</h4>
                            </Card>
                        </div>
                        <div className=" flex flex-col prose p-5 lg:hidden">
                            <h1 className="flex font-bold">Why</h1>
                            <p className="flex ">
                                We were tired of having to switch between multiple email accounts on various different
                                websites. So forth came the need for a tool that would allow us to manage all our emails
                                in one place.
                            </p>
                        </div>
                        <div className="hidden lg:flex lg:col-start-2 lg:col-end-5 place-items-center">
                            <Card size="big">
                                <p className="flex m-0 prose">
                                    We were tired of having to switch between multiple email accounts on various
                                    different websites. So forth came the need for a tool that would allow us to manage
                                    all our emails in one place.
                                </p>
                                <h1 className="flex text-4xl prose font-bold ml-5 mb-0">Why</h1>
                            </Card>
                        </div>
                        <div className="hidden lg:flex place-items-center">
                            <ButtonOrLink intent="default" rounded={true} fontWeight="bold">
                                <BiDownArrowAlt className="w-[32px] h-[32px] m-2" />
                            </ButtonOrLink>
                        </div>
                    </div>
                    <div
                        data-scroll-section
                        className="grid overflow-hidden min-h-screen auto-cols-auto grid-rows-1 gap-8 grid-flow-col">
                        {}
                    </div>
                </main>
            </LocomotiveScrollProvider>
        </div>
    );
};
