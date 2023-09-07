import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Profiles = () => {
    const [profileList, setProfileList] = useState([]);

    const shuffleArray = (array) => {
        let shuffledArray = [...array];
        for (let i = shuffledArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
        }
        return shuffledArray;
    }

    useEffect(() => {
        async function fetchProfiles() {
            try {
                const response = await fetch('/profiles.json');
                const data = await response.json();
                setProfileList(shuffleArray(data));
            } catch (error) {
                console.error('Error fetching profiles:', error);
            }
        }

        fetchProfiles();
    }, []);

    return(
        <section className="profile">
            <section className="contents_con">
                {profileList.map((profile) => (
                    <div className='card' key={profile.id}>
                        <figure>
                            <img src={profile.image} alt={profile.title} />
                        </figure>
                        <div className="card-body">
                            <div className='card-text'>
                                <div className="card-title">
                                    <span>
                                        {profile.title}
                                    </span>
                                </div>
                                <div className="card-exp">
                                    <span>
                                        {profile.description}
                                    </span>
                                </div>
                            </div>
                            <div className='card-link'>
                                <Link to={`*`} className='exo2'>
                                    LEARN MORE
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </section>
        </section>
    );
};

export default Profiles;