export default function Sidebar() {
    return (
        <header className="flex flex-row items-center justify-between gap-4 px-3 py-2">
            <h1>Dashboard</h1>
            <button className="bg-emerald-400 hover:bg-emerald-500 px-3 py-2 rounded-lg">Run QAQC</button>
        </header>
    );
}