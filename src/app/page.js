import Sidebar from './components/sidebar/Sidebar';
import Header from './components/Header/Header';

export default function Home() {
  return (
    <div className="flex flex-row min-h-screen divide-x divide-slate-800">
      <Sidebar/>
      <main className="basis-3/4 divide-y divide-slate-800">
        <Header/>
        <div className="p-3">
          <p className="text-muted">Lorem</p>
        </div>
      </main>
    </div>
  );
}