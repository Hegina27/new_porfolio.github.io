import { Button } from "@/components/ui/button";

export default function HeroSection() {
    return (
        <>
            <div className="min-h-screen w-full flex flex-col-reverse lg:flex-row justify-center items-center px-6 sm:px-10 md:px-16 lg:px-24 py-20 lg:py-32 text-center lg:text-left">
                
                <div className="flex-1 font-roboto text-gray-100 mt-10 lg:mt-0">
                    <p className="text-lg sm:text-xl mb-3">WELCOME TO MY PORTFOLIO</p>
                    <h1 className="font-bungee text-3xl sm:text-4xl md:text-5xl mb-2">
                        Hi, I'm <span className="text-lime-400">Rainiel L. Hegina</span>
                    </h1>
                    <p className="font-bungee text-xl sm:text-2xl mb-6">
                        a Web Developer and a Singer
                    </p>
                    <p className="text-sm sm:text-base mb-6 leading-relaxed">
                        I'm a web developer and singer who brings rhythm to both code and music. 
                        Creativity drives everything I build and everything I perform.
                    </p>
                    <p className="text-sm sm:text-base mb-6">
                        Get to know me beyond the code — click below.
                    </p>
                    <Button className="hover:scale-110 hover:shadow-lime-400 hover:shadow-sm transition-transform duration-300">
                        <a href="/about">Explore Me</a>
                    </Button>
                </div>

                <div className="flex-1 flex justify-center items-center">
                    <img
                        src="/profile.jpg"
                        alt="Profile Picture"
                        className="h-56 sm:h-72 md:h-80 lg:h-[350px] border-2 border-red-900 rounded-xl 
                                hover:scale-110 hover:shadow-xl hover:shadow-red-500 transition-transform duration-300"
                    />
                </div>

            </div>
        </>
    );
}