import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className='error'>  
            <h1 className='exo2'>404</h1>
            <p className='exo2'>Page not found.</p>
            <div className='mainBtn exo2'>
                <Link to='/'>
                    Go to Main
                </Link>
            </div>
        </div>
    );
};

export default Error;