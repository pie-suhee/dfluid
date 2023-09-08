import React, { useState } from 'react';

import Sendicon from './Sendicon';

const Subscribe = () => {

    const [email, setEmail] = useState('');
    const [isValidEmail, setIsValidEmail] = useState(false);

    const handleChange = (e) => {
        const inputEmail = e.target.value;
        const isValid = /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2}\.kr$/.test(inputEmail) || /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{3}$/.test(inputEmail);
        setEmail(inputEmail);
        setIsValidEmail(isValid);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isValidEmail) {
            console.log('Email submitted:', email);
            setEmail('');
        } else {
            console.log('Invalid email');
        }
    };

    return(
        <div className="subscribe">
            <div className="title_con">
                <span className="exo2">
                    Subscribe to our newsletter
                </span>
            </div>

            <form onSubmit={handleSubmit}>
                <div className={`input_con ${!isValidEmail && email.length > 0 ? 'invalid' : email.length === 0 ? '' : 'valid'}`}>
                    <input
                        type="email"
                        className={`input exo2 ${!isValidEmail && email.length > 0 ? 'invalid' : ''}`}
                        placeholder="Enter your email"
                        value={email}
                        onChange={handleChange}
                    />
                    <button
                        className={`submit-button ${!isValidEmail && email.length > 0 ? 'invalid' : email.length === 0 ? '' : 'valid'}`}
                        type="submit"
                        disabled={!email || !isValidEmail}
                    >
                        <Sendicon />
                    </button>
                </div>
            </form>

            <div className={`error-message exo2 ${!isValidEmail && email.length > 0 ? 'invalid' : email.length === 0 ? '' : 'valid'}`}>
                Please enter a valid email!
            </div>
        </div>
    );
};

export default Subscribe;