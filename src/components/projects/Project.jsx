import React, { useState } from 'react'
import SM1 from '../../assets/images/SM1.jpg'
import SM2 from '../../assets/images/SM2.jpg'
import SM3 from '../../assets/images/SM3.jpg'
import video1 from '../../assets/images/video1.mp4'
import video2 from '../../assets/images/video2.mp4'
import video3 from '../../assets/images/video3.mp4'
import website from '../../assets/images/website.png'
import AI from '../../assets/images/AIimage.jpeg'
import AI2 from '../../assets/images/AIimage2.png'
import GD1 from '../../assets/images/GD1.jpg'
import GD2 from '../../assets/images/GD2.jpg'
import GD3 from '../../assets/images/GD3.jpg'


const videos = [
    { src: video1, type: "video/mp4" },
    { src: video2, type: "video/mp4" },
    { src: video3, type: "video/mp4" },
];

const project = () => {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <div id="projects">
            <div>
                <div className='text-center text-2xl text-[#01d293] font-semibold'>Projects</div>
                <div>
                    <div className='text-center text-[#01d293] text-2xl font-semibold p-4'>Social Media Management</div>
                    <div className='flex flex-col gap-2 md:flex-row justify-between items-center md:w-4/5 mx-auto p-4'>
                        <img className='w-48 h-auto' src={SM1} alt="" />
                        <img className='w-48 h-auto' src={SM2} alt="" />
                        <img className='w-48 h-auto' src={SM3} alt="" />
                    </div>
                </div>
                <div>
                    <h1 className='text-center text-[#01d293] text-2xl font-semibold p-4'>Video Editing</h1>
                    <div className="flex flex-col md:flex-row gap-3 justify-center items-center p-8">
                        {videos.map((video, index) => (
                            <div key={index} className="w-full md:w-1/3">
                                <video className="w-full h-48" controls>
                                    <source src={video.src} type={video.type} />
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                        ))}
                    </div>
                </div>
                <div>
                    <h1 className="text-center text-[#01d293] text-2xl font-semibold p-4">website development</h1>
                    <div
                        className="md:w-3/5 px-5 mx-auto my-4 relative overflow-hidden"
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                        <img
                            className="w-full"
                            src={website}
                            alt="website"
                        />
                        <div
                            className={`absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center transition-transform duration-300 ${isHovered ? 'translate-y-0' : 'translate-y-full'}`}
                        >
                            <a
                                href="http://www.drriteshgupta.com"
                                className="bg-[#01d293] text-xs text-white py-2 px-4 rounded"
                            >
                                Click to view website
                            </a>
                        </div>
                    </div>
                </div>
                <div>
                    <h1 className='text-center text-[#01d293] text-2xl font-semibold p-4'>Special Projects</h1>
                    <div className='flex justify-between gap-6 w-4/5 mb-5 mx-auto'>
                        <div>
                            <h1 className='text-center text-[#01d293] p-3'>Graphic designing</h1>
                            <div className='flex flex-col md:flex-row justify-center items-center gap-4'>
                                <img className='md:w-1/3' src={GD1} alt="" />
                                <img className='md:w-1/3' src={GD2} alt="" />
                                <img className='md:w-1/3' src={GD3} alt="" />
                            </div>
                        </div>
                    </div>
                    <div>
                        <h1 className='text-center text-[#01d293] p-3'>AI generated images</h1>
                        <img className='md:w-1/3 mx-auto px-5' src={AI} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default project
