import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchImages } from '../redux/gallery/galleryslice';

function ImageGrid() {
    const dispatch = useDispatch();
    const { images, loading, error, page } = useSelector((state) => state.gallery);

    useEffect(() => {
        const fetchImagesWithDelay = setTimeout(() => {
            dispatch(fetchImages(page));
        }, 300); // Debounce delay
        return () => clearTimeout(fetchImagesWithDelay);
    }, [dispatch, page]);

    if (loading) {
        return (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
                {Array.from({ length: 12 }).map((_, index) => (
                    <div key={index} className="h-[30vh] w-full bg-gray-300 animate-pulse rounded-lg"></div>
                ))}
            </div>
        );
    }

    if (error) {
        return (
            <div className="text-center">
                <p className="text-red-500">Error! {error}</p>
                <button
                    onClick={() => dispatch(fetchImages(page))}
                    className="mt-4 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
                >
                    Retry
                </button>
            </div>
        );
    }

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
            {images.map((img) => (
                <div key={img.id} className="overflow-hidden rounded-lg shadow-lg transition-transform hover:scale-105">
                    <img src={img.download_url} alt="Gallery Item" className="h-[30vh] w-full object-cover" />
                </div>
            ))}
        </div>
    );
}

export default ImageGrid;
