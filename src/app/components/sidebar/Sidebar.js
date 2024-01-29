import Image from "next/image";

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
            <nav>
                <ul className="divide-y divide-slate-800">
                    <li><a href="" className="p-3 block hover:text-slate-300">Dashboard</a></li>
                    <li><a href="" className="p-3 block hover:text-slate-300">QAQC</a></li>
                    <li><a href="" className="p-3 block hover:text-slate-300">Sites</a></li>
                </ul>
            </nav>
        </aside>
    );
}