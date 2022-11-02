import {Card} from "../components/ui/Card";

import {RiGithubLine} from "react-icons/ri";
import {MdOutlineDesignServices} from "react-icons/md";
import {CgSortAz} from "react-icons/cg";
import {BiSearch} from "react-icons/bi";

export default async function Home() {
    return (
        <div className="flex font-poppins min-h-screen w-full items-center">
            <main className="w-full">
                <div className="grid overflow-hidden grid-col-1 lg:grid-cols-4 grid-rows-auto lg:grid-rows-3 gap-2 grid-flow-row p-5">
                    <div className=" flex flex-col prose p-5 lg:hidden">
                        <h1 className="flex font-bold">Multi Email</h1>
                        <p className="flex ">
                            We made a tool for you to manage all your emails in one place. You can add multiple emails
                            and switch between them with ease. We really worked hard. We are the best app for managing
                            your emails. Fr Fr, No Cap.
                        </p>
                    </div>
                    <div className="hidden lg:flex lg:col-start-1 lg:col-end-4">
                        <Card>
                            <div className="flex flex-col my-2 w-full justify-center">
                                <article className="flex flex-row justify-evenly w-full items-center">
                                    <h1 className="flex text-4xl prose font-bold ml-5 mb-0">Multi Email</h1>
                                    <p className="flex m-0 prose">
                                        We made a tool for you to manage all your emails in one place. You can add
                                        multiple emails and switch between them with ease. We really worked hard. We are
                                        the best app for managing your emails. Fr Fr, No Cap.
                                    </p>
                                </article>
                            </div>
                        </Card>
                    </div>
                    <div className="">
                        <Card>
                            <div className="flex flex-col my-2 w-full justify-center">
                                <article className="flex flex-col justify-center items-center">
                                    <BiSearch className="w-[32px] h-[32px] m-2" />
                                    <h4 className="flex text-xl prose font-bold mb-0">Universal Search</h4>
                                </article>
                            </div>
                        </Card>
                    </div>
                    <div className="">
                        <Card>
                            <div className="flex flex-col my-2 w-full justify-center">
                                <article className="flex flex-col justify-center items-center">
                                    <CgSortAz className="w-[32px] h-[32px] m-2" />
                                    <h4 className="flex text-xl prose font-bold mb-0">Organizedb</h4>
                                </article>
                            </div>
                        </Card>
                    </div>
                    <div className="">
                        <Card>
                            <div className="flex flex-col my-2 w-full justify-center">
                                <article className="flex flex-col justify-center items-center">
                                    <MdOutlineDesignServices className="flex w-[32px] h-[32px] my-2" />
                                    <h4 className="flex text-xl prose font-bold mb-0">Customize</h4>
                                </article>
                            </div>
                        </Card>
                    </div>
                    <div className=" flex flex-col prose p-5 lg:hidden">
                        <h1 className="flex font-bold">How</h1>
                        <p className="flex ">
                            Just sign up. It's that simple. You can also host your own instance of the app. It's free
                            and open source. We don't sell your data. You can literally verify it.
                        </p>
                    </div>
                    <div className="hidden lg:flex lg:col-start-3 lg:col-end-5">
                        <Card>
                            <div className="flex flex-col my-2 w-full justify-center">
                                <article className="flex flex-row justify-evenly w-full items-center">
                                    <p className="flex m-0 prose">
                                        Just sign up. It's that simple. You can also host your own instance of the app.
                                        It's free and open source. We don't sell your data. You can literally verify it.
                                    </p>
                                    <h1 className="flex text-4xl prose font-bold ml-5 mb-0">How</h1>
                                </article>
                            </div>
                        </Card>
                    </div>
                    <div className="">
                        <Card>
                            <div className="flex flex-col my-2 w-full justify-center">
                                <article className="flex flex-col justify-center items-center">
                                    <RiGithubLine className="flex w-[32px] h-[32px] my-2" />
                                    <h4 className="flex text-xl prose font-bold mb-0">Open Source</h4>
                                </article>
                            </div>
                        </Card>
                    </div>
                    <div className=" flex flex-col prose p-5 lg:hidden">
                        <h1 className="flex font-bold">Why</h1>
                        <p className="flex ">
                            We were tired of having to switch between multiple email accounts on various different
                            websites. So forth came the need for a tool that would allow us to manage all our emails in
                            one place.
                        </p>
                    </div>
                    <div className="hidden lg:flex lg:col-start-2 lg:col-end-5 ">
                        <Card>
                            <div className="flex flex-col my-2 w-full justify-center">
                                <article className="flex flex-row justify-evenly w-full items-center">
                                    <p className="flex m-0 prose">
                                        We were tired of having to switch between multiple email accounts on various
                                        different websites. So forth came the need for a tool that would allow us to
                                        manage all our emails in one place.
                                    </p>
                                    <h1 className="flex text-4xl prose font-bold ml-5 mb-0">Why</h1>
                                </article>
                            </div>
                        </Card>
                    </div>
                </div>
            </main>
        </div>
    );
}
