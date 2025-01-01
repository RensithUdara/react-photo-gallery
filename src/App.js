import React from 'react';
import './App.css';
import { useSelector } from 'react-redux';
import DarkModeToggle from './components/DarkModeToggle';
import ImageGrid from './components/ImageGrid';
import Pagination from './components/Pagination';

function App() {
    const darkMode = useSelector((state) => state.theme?.darkMode || false);

    return (
        <div
            className={`py-6 min-h-screen transition-colors duration-300 ${
                darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'
            }`}
        >
            <header className="mb-6 shadow-md bg-gradient-to-r from-blue-500 to-purple-500 text-white py-4 rounded-lg">
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
