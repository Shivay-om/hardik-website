import React from 'react'
// import pic from '../assets/images/pic.png'
import hardik from '../assets/images/hardik.png'
import { useTypewriter, Cursor } from 'react-simple-typewriter'

const Home = () => {
    const [text] = useTypewriter({
        words: ['Social Media Manager &', 'Video Editor'],
        loop: 0,
        typeSpeed: 100,
      })

    return (
        <div id="home" className="container p-8 my-5">
            <div className='md:w-4/5 mx-auto p-4 md:flex justify-center items-center'>
                <div className="text-left md:w-1/2">
                    <h2 className="text-2xl text-[#01d293] font-semibold mb-4">Hi There!</h2>
                    <h1 className="text-2xl text-white mb-2">I'M Hardik Pedenkar</h1>
                    <span className='text-lg mb-4'>{text}</span>
                    <Cursor cursorColor='#01d293' />
                    <p className="text-lg mt-4"> I'm your dedicated Social Media Manager. With a passion
                        for crafting engaging content and a knack for understanding
                        audience trends, I specialize in turning social media platforms into
                        vibrant communities</p>
                </div>
                <div className="md:w-1/2 flex justify-center mt-8 md:mt-0">
                    <img src={hardik} alt="Home" className="w-60 rounded-full border shadow-md" />
                </div>
            </div>
        </div>
    )
}

export default Home
