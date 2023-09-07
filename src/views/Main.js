import Profiles from '../components/Profiles';
import Newsletter from '../components/Newsletter';

const Main = () => {
    return (
        <section className='main'>  
            <section className='contents_con'>
                <div className='main_title'>
                    <span className='exo2'>
                        Snap photos and share like <br />
                        never before
                    </span>
                </div>
                <Profiles />
                <Newsletter />
            </section>
        </section>
    );
};

export default Main;