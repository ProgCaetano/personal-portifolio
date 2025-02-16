import AboutImage from '../assets/about-me.jpg';

const About = () => {
    return (
        <div className="bg-black text-white py-20" id='aboutme'>
            <div className='container mx-auto px-8 md:px-16 lg:px-24'>
                <h2 className='text-4xl font-bold text-center  mb-12'>About Me</h2>
                <div className='flex flex-col md:flex-row items-center md:space-x-12'>
                    <img src={AboutImage} alt=""
                    className='w-72 h-80 rounded object-cover mb-8 md:mb-0'/>
                       <div className='flex-1'>
                            <p className='text-lg mb-8'>
                                I am a passionate developer with a focus on creating innovative and user-friendly applications. I am always looking for new challenges and opportunities to learn and grow.
                            </p>
                            <div className='space-y-4'>
                                <div className='flex items-center'>
                                    <span className='w-2/12'>HTML & CSS</span>
                                    <div className='grow bh-gray-800 rouded-full h-2.5'>
                                        <div 
                                            className='bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transition-transform dutarion-300 hover:scale-105 w-10/12'>

                                        </div>
                                    </div>

                                </div>
                                <div className='flex items-center'>
                                    <span  className='w-2/12'>HTML & CSS</span>
                                    <div className='grow bh-gray-800 rouded-full h-2.5'>
                                        <div 
                                            className='bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transition-transform dutarion-300 hover:scale-105 w-10/12'>

                                        </div>
                                    </div>

                                </div>
                                <div className='flex items-center'>
                                    <span className='w-2/12'>HTML & CSS</span>
                                    <div className='grow bh-gray-800 rouded-full h-2.5'>
                                        <div 
                                            className='bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transition-transform dutarion-300 hover:scale-105 w-10/12'>

                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='mt-12 flex justify-between text-center'>
                                <div>
                                    <h3 className='text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>
                                        1+
                                    </h3>
                                    <p>Years Experience</p>
                                </div>
                                <div>
                                    <h3 className='text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>
                                        3+
                                    </h3>
                                    <p>Clients</p>
                                </div>
                                <div>
                                    <h3 className='text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>
                                        20+
                                    </h3>
                                    <p>Project Completed</p>
                                </div>

                            </div>

                        </div>
                </div>
            </div>
        </div>
    )
}

export default About;