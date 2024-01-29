import Link from 'next/link';

export default function Navigation() {
    const NAV_LINKS = [
        {
            title: 'Dashboard',
            url: '/'
        },
        {
            title: 'Sites',
            url: '/'
        },
        {
            title: 'Others',
            url: '/'
        }
    ]
    return (
        <nav>
            <ul className="divide-y divide-slate-800">
                {NAV_LINKS.map((link) => {
                    <li><Link href={link.url} className="p-3 block hover:text-slate-300">{link.title}</Link></li>
                })}
            </ul>
        </nav>
    );
}