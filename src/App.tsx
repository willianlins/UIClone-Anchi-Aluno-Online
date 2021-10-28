import { MenuSide } from './components/MenuSide';
import { TopHeader } from './components/TopHeader';
import { Avisos } from './pages/Avisos';


export function App() {
  return (
    <>
      <TopHeader />
      <div className="container">
        <MenuSide />
        <Avisos />

      </div>
    </>
  );
}

