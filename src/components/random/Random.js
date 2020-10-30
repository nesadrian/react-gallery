
import React, { useState, useEffect } from 'react'
import { Card } from '../card/Card'
import { fetchPicturesRandom } from '../../api'

export default () => {
    const [data, setData] = useState([]);

    const updateImages = async () => {
        const pictures = await fetchPicturesRandom();
        setData(pictures);
    };

    useEffect(() => {
        updateImages();
    }, [])

    return (
        <div>
            {!data.images ? (
                <h1>No images to display.</h1>
            ) : (
                    <div className="cards-container">
                        {data.images.map((image) => (
                            <Card
                                imgSrc={image.urls.small}
                                altDescription={image.alt_description}
                            />
                        ))}
                    </div>
                )}
        </div>
    )
}