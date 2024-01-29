import Sidebar from './components/sidebar/Sidebar';
import Header from './components/Header/Header';

export default function Home() {
  return (
    <div className="flex flex-row min-h-screen">
      <Sidebar/>
      <main className="basis-3/4 p-5">
        <Header/>
        <div className="p-3">
          <p className="text-muted">Lorem</p>
        </div>
      </main>
    </div>
  );
}