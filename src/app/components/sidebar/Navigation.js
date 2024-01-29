import Link from 'next/link';

export default function Navigation() {
    const NAV_LINKS = [
        {
            title: 'Dashboard',
            url: '/',
            svg: ''
        },
        {
            title: 'Sites',
            url: '/sites'
        },
        {
            title: 'Others',
            url: '/others'
        }
    ]
    return (
        <nav className='border-slate-800 bg-slate-900 rounded-lg p-3'>
            <ul className="divide-y divide-slate-800">
                {NAV_LINKS.map((link) => {
                    return (
                        <li className='flex flex-row items-center gap-3 p-3'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605" /></svg>
                            <Link href={link.url} className="block hover:text-slate-300">
                                {link.title}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
}