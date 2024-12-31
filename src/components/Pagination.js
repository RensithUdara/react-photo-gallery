import React from 'react'
import { useDispatch } from 'react-redux';
import { nextPage, previousPage } from '../redux/gallery/galleryslice';

function Pagination() {

    const dispatch = useDispatch();

    const handleNext = () => {
        dispatch(nextPage());
    }

    const handlePrevious = () => {
        dispatch(previousPage());
    }
    return (
        <div>
            <button className='bg-blue-500 text-white px-4 py-2 rounded-lg'
                onClick={handlePrevious}
            >Previous</button>
            <button className='bg-blue-500 text-white px-4 py-2 rounded-lg'
                onClick={handleNext}
            >Next</button>
        </div>
    )
}

export default Pagination