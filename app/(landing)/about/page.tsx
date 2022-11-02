import {Input} from "../../../components/ui/Input";

export default async function AboutPage() {
    return (
        <div className="flex font-poppins h-screen justify-center items-center">
            <main>
                <form>
                    <div className="flex flex-col">
                        <div className="flex flex-col my-2">
                            <Input id="email" label="Email" type="text" intent="default" />
                            <Input id="password" label="Password" type="password" intent="default" />
                        </div>
                    </div>
                </form>
            </main>
        </div>
    );
}
