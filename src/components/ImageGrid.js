import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchImages } from '../redux/gallery/galleryslice';
import { useEffect } from 'react';

function ImageGrid() {

    const dispatch = useDispatch();

    const { images, loading, error , page} = useSelector((state) => state.gallery);

    useEffect(() => {
        dispatch(fetchImages(page));
    }, [dispatch , page]);

    if (loading) {
        return <div>Loading...</div>;
    }
    if (error) {
        return <div>Error! {error}</div>;
    }

    return (
        <div className='grid grid-cols-4 md:grid-cols-3 gap-4 p-4'>

            {images.map((img) => (
                <div key={img.id} >
                    <img src={img.download_url} alt='' className='h-[30vh] w-full' />

                </div>
            ))}
        </div>
    )
}

export default ImageGrid;