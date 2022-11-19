/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable jsx-a11y/anchor-is-valid */
import Logo from './assets/logo.svg';
import Hero from './assets/hero.svg';

const App = () => {
    return (
        <div>
            <div className='flex justify-between px-40 py-8'>
                <img src={Logo} alt='Logo Brand' />
                <div className='flex gap-4 font-sans text-base'>
                    <a href='#' className='text-[#2C696F] font-semibold'>
                        Home
                    </a>
                    <a href='#'>About Us</a>
                    <a href='#'>Services</a>
                    <a href='#'>Destination</a>
                    <a href='#'>Contact Us</a>
                </div>
            </div>

            <div className='px-40 flex items-center min-h-screen'>
                <div className='w-1/2'>
                    <h1 className='font-bold text-5xl font-heading mb-10'>
                        Visit the tourist <br />
                        <span className='text-[#2C696F]'>destination</span> you
                        want
                    </h1>
                    <p className='text-[#777777] font-normal text-base mb-10'>
                        Explore your vacation to beautify your day. visit cool
                        travel <br />
                        destinations around the world
                    </p>
                    <button className='bg-[#2C696F] rounded-lg w-44 h-12 text-white'>
                        Destination
                    </button>
                </div>
                <div className='w-1/2'>
                    <img src={Hero} alt='Hero' />
                </div>
            </div>
        </div>
    );
};

export default App;
