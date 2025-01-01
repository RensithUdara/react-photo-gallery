import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from '../redux/theme/themeSlice';

function DarkModeToggle() {
    const darkMode = useSelector((state) => state.theme.darkMode);
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(toggleTheme());
    };

    return (
        <div
            className={`flex cursor-pointer gap-3 font-mono border p-3 rounded-lg justify-center items-center transition duration-300 transform hover:scale-105 ${darkMode ? "bg-black text-white border-white" : "bg-white text-black border-black"}`}
            title={`Switch to ${darkMode ? "Light Mode" : "Dark Mode"}`}
            onClick={handleClick}
        >
            <div>{darkMode ? "Dark Mode" : "Light Mode"}</div>
            <div className="text-2xl">{darkMode ? "🌚" : "🌝"}</div>
        </div>
    );
}

export default DarkModeToggle;
