import Image from "next/image";
import Navigation from "./Navigation";

export default function Sidebar() {
    return (
        <aside className="basis-1/4 p-5 border-r border-slate-900">
            <a
                className="mb-3 block p-3 bg-slate-900 rounded-lg"
                href="/"
            >
                <Image
                    src="/tseg.svg"
                    alt="TSEG Logo"
                    className=""
                    width={150}
                    height={28}
                    priority
                />
            </a>
            <Navigation />
        </aside>
    );
}