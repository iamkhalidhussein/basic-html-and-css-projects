import profileLogo from '../../assets/profile-logo.svg';
import {Outlet} from 'react-router-dom';
import { FaGithub } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";


const Home = () => {
    return (
        <div className="bg-[#111111] pt-14 flex justify-around">
            <div className='bg-[#161616] pt-10 pb-8 px-10 border border-[#3C3C3C] rounded-3xl'>
                <div className='flex items-center gap-4'>
                    <img src={profileLogo} alt="#" />
                    <h1 className='text-[#E9E9F1] text-[36px] font-semibold'>Alex Walker</h1>
                </div>
                <img className='h-[300px] w-[300px] rounded-3xl mt-5 mx-auto' src="https://mixdesign.club/themeforest/braxton/img/avatars/1024x1024_a03.webp" alt="#" />
                <div className='pl-2'><h3 className='text-[#C7C6D3] text-[15px] font-medium pt-2'>Specialization:</h3>
                <p className='text-[#E9E9F1] text-[18px] font-bold'>Front-end Developer</p>
                <h3 className='text-[#C7C6D3] text-[15px]'>Based in:</h3>
                <p className='text-[#E9E9F1] text-[18px] font-bold'>Dhaka, Bangladesh</p></div>
                <div className='flex pl-2 gap-3'>
                    <div className='p-4 border rounded-2xl border-[#3C3C3C]'><FaGithub className='text-xl text-white'/></div>
                    <div className='p-4 border rounded-2xl border-[#3C3C3C]'><FaFacebookF className='text-xl text-white'/></div>
                    <div className='p-4 border rounded-2xl border-[#3C3C3C]'><FaInstagram className='text-xl text-white'/></div>
                    <div className='p-4 border rounded-2xl border-[#3C3C3C]'><FaPinterestP className='text-xl text-white'/></div>
                </div>
                <button className='bg-pink-100 py-3 w-full rounded-3xl mt-2 text-xl font-medium'>Lets Work Together!</button>
            </div>
            <div>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Home;