import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className='error'>  
            <h1 className='exo2'>404</h1>
            <p className='exo2'>페이지를 찾을 수 없습니다.</p>
            <div className='mainBtn exo2'>
                <Link to='/'>
                    메인으로
                </Link>
            </div>
        </div>
    );
};

export default Error;