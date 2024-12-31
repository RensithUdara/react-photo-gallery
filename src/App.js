import './App.css';
import { useSelector } from 'react-redux';
import DarkModeToggle from './components/DarkModeToggle';
import ImageGrid from './components/ImageGrid';
import Pagination from './components/Pagination';

function App() {
  const darkMode = useSelector((state) => state.theme?.darkMode || false); // Safely access dark mode state

  return (
    <div
      className={`py-6 min-h-screen transition-colors duration-300 ${
        darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'
      }`}
    >
      <header className="mb-6">
        <h1 className="text-4xl font-extrabold text-center font-mono">Photo Gallery</h1>
        <div className="flex justify-center mt-4">
          <DarkModeToggle />
        </div>
      </header>
      <main className="container mx-auto px-4">
        <ImageGrid />
        <Pagination />
      </main>
    </div>
  );
}

export default App;
