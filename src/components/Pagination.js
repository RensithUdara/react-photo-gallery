import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { nextPage, previousPage } from '../redux/gallery/galleryslice';

function Pagination() {
    const dispatch = useDispatch();
    const page = useSelector((state) => state.gallery.page);

    const handleNext = () => {
        dispatch(nextPage());
    };

    const handlePrevious = () => {
        if (page > 1) {
            dispatch(previousPage());
        }
    };

    return (
        <div className="flex justify-center gap-4 mt-6">
            <button
                className="bg-blue-500 text-white px-4 py-2 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed transition hover:bg-blue-600"
                onClick={handlePrevious}
                disabled={page === 1}
            >
                Previous
            </button>
            <button
                className="bg-blue-500 text-white px-4 py-2 rounded-lg transition hover:bg-blue-600"
                onClick={handleNext}
            >
                Next
            </button>
        </div>
    );
}

export default Pagination;
