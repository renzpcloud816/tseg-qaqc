import Image from "next/image";
import Navigation from "./Navigation";

export default function Sidebar() {
    return (
        <aside className="basis-1/4 py-5">
            <a
                className="mb-5 inline-block px-3"
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
            <Navigation/>
        </aside>
    );
}