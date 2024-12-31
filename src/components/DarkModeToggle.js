import React from 'react';
import { useSelector, useDispatch } from 'react-redux'; // Added useDispatch import
import { toggleTheme } from '../redux/theme/themeSlice'; // Adjust the path accordingly

function DarkModeToggle() {
    const darkMode = useSelector((state) => state.theme.darkMode);
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(toggleTheme());
    };

    return (
        <div
            className={`flex cursor-pointer  gap-3 font-mono border p-3 rounded-lg justify-center items-center ${darkMode ? "bg-black text-white border-white" : "bg-white text-black border-black"
                }`}
            onClick={handleClick} // Simplified the onClick function call
        >
            <div>{darkMode ? "Dark Mode" : "Light Mode"}</div>
            <div className="text-2xl">{darkMode ? "🌚" : "🌝"}</div>
        </div>
    );
}

export default DarkModeToggle;
