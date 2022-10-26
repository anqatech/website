import heroVideo from "../assets/video.mp4"


const Hero = () => {
    return (
        <div name="home" className="w-full h-screen">
            <video className="absolute object-cover h-full w-full -z-10" src={heroVideo} autoPlay loop muted/>
            <div className="w-full flex flex-col justify-center items-center text-white px-4 py-10 text-center">
                <h1 className="text-3xl uppercase p-2 md:text-5xl">Fleet Data Management</h1>
                <p className="text-xl text-gray-400 py-4 w-1/2 md:text-3xl">
                    Anqatech uses AI and modern API tools to optimize vehicle fleet management. 
                    The fleet data is fed into our models and outputs realtime intelligence to implement 
                    cost savings and resource allocation.
                </p>
            </div>
        </div>
    )
}

export default Hero
