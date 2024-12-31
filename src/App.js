import './App.css';
import { useSelector } from 'react-redux';
import DarkModeToggle from './components/DarkModeToggle';
import ImageGrid from './components/ImageGrid';
import Pagination from './components/Pagination';

function App() {
  const darkMode = useSelector((state) => state.theme.darkMode); // Access dark mode state from Redux

  return (
    <div
      className={`py-2 min-h-screen transition-colors duration-300 ${darkMode ? 'bg-black text-white' : 'bg-white text-black'}`}
    >
      <h1 className='text-4xl font-bold text-center font-mono'>Photo Gallery</h1>
      <DarkModeToggle />
      <ImageGrid />
      <Pagination />
    </div>
  );
}

export default App;
