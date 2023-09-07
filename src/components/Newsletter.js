import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Subscribe from './Subscribe';

const Newsletter = () => {
    const [imageUrl, setImageUrl] = useState('');

    useEffect(() => {
        const cachedImageUrl = localStorage.getItem('randomImageUrl');

        if (!cachedImageUrl) {
            async function fetchRandomImage() {
                try {
                    const response = await axios.get(
                        'https://api.unsplash.com/photos/random',
                        {
                            params: {
                                client_id: 'RfZSbn_rdvEPrnhslq8HRwmCwyayZg3DBo_LDcXXaTM',
                            },
                        }
                    );

                    const randomImageUrl = response.data.urls.regular;

                    setImageUrl(randomImageUrl);
                    
                    localStorage.setItem('randomImageUrl', randomImageUrl);
                } catch (error) {
                    console.error('Error fetching random image:', error);
                }
            }

            fetchRandomImage();
        } else {
            setImageUrl(cachedImageUrl);
        }
    }, []);

    return(
        <section className="newsletter">
            <div
                className='bg_con'
                style={{backgroundImage: `url(${imageUrl})`}}>
            </div>
            <section className="contents_con">
                <div className='title_con'>
                    <span>
                        Sed ut perspiciatis unde omnis
                    </span>
                </div>
                <div className='text01_con'>
                    <span>
                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.
                    </span>
                </div>
                <div className='line'></div>
                <div className='text02_con'>
                    <span>
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore.
                    </span>
                </div>
                <Subscribe />
            </section>
        </section>
    );
};

export default Newsletter;