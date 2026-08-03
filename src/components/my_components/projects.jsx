import { Button } from "@/components/ui/button";

export default function Projects(){
    return(
        <>
            <div className="min-h-screen w-full py-20 flex justify-center px-4 sm:px-8">
                <div className="flex flex-col gap-20 w-full max-w-6xl bg-black/50 p-5 rounded-lg">
                    {/* Project 1 */}
                    <div className="flex flex-col md:flex-row justify-between items-center text-slate-200 gap-6">
                        <a
                            href="https://hegina27.github.io/Rainn.github.io/"
                            target="_blank"
                            className="hover:scale-105 hover:shadow-md hover:shadow-red-600 transition"
                        >
                            <img
                            src="MusicVideo.png"
                            alt="Music Video Cover Photo"
                            className="h-[250px] w-full max-w-sm object-cover rounded-lg"
                            />
                        </a>

                        <div className="w-full md:w-[300px] text-center md:text-left">
                            <h1 className="text-2xl sm:text-3xl mb-3 font-bungee">Music Video Website</h1>
                            <p className="text-sm sm:text-base">
                            This is a music video with lyrics called "She Will Be Loved" by Maroon 5.
                            </p>
                            <Button className="mt-5 hover:scale-105 hover:shadow-md hover:shadow-red-600 transition">
                            <a href="https://github.com/Hegina27/Rainn.github.io" target="_blank">
                                View Details
                            </a>
                            </Button>
                        </div>
                    </div>

                    {/* Project 2 */}
                    <div className="flex flex-col md:flex-row-reverse justify-between items-center text-slate-200 gap-6">
                        <a
                            href="https://hegina27.github.io/Rain-.github.io/"
                            target="_blank"
                            className="hover:scale-105 hover:shadow-md hover:shadow-red-600 transition"
                        >
                            <img
                            src="Lyrics.png"
                            alt="Lyrics Cover Photo"
                            className="h-[250px] w-full max-w-sm object-cover rounded-lg"
                            />
                        </a>

                        <div className="w-full md:w-[300px] text-center md:text-left">
                            <h1 className="text-2xl sm:text-3xl mb-3 font-bungee">Song Lyrics Website</h1>
                            <p className="text-sm sm:text-base">
                            This is a song lyrics website featuring "Japanese Denim" by Daniel Caesar.
                            </p>
                            <Button className="mt-5 hover:scale-105 hover:shadow-md hover:shadow-red-600 transition">
                            <a href="https://github.com/Hegina27/Rain-.github.io" target="_blank">
                                View Details
                            </a>
                            </Button>
                        </div>
                    </div>

                    {/* Project 3 */}
                    <div className="flex flex-col md:flex-row justify-between items-center text-slate-200 gap-6">
                        <a
                            href="https://hegina27.github.io/Coffee.github.io/"
                            target="_blank"
                            className="hover:scale-105 hover:shadow-md hover:shadow-red-600 transition"
                        >
                            <img
                            src="CoffeeMenu.png"
                            alt="Coffee Menu Cover Photo"
                            className="h-[250px] w-full max-w-sm object-cover rounded-lg"
                            />
                        </a>

                        <div className="w-full md:w-[300px] text-center md:text-left">
                            <h1 className="text-2xl sm:text-3xl mb-3 font-bungee">Coffee Menu Website</h1>
                            <p className="text-sm sm:text-base">
                            This is a coffee menu website I made for my ITEC50 activity.
                            </p>
                            <Button className="mt-5 hover:scale-105 hover:shadow-md hover:shadow-red-600 transition">
                            <a href="https://github.com/Hegina27/Coffee.github.io" target="_blank">
                                View Details
                            </a>
                            </Button>
                        </div>
                    </div>

                    {/* Project 4 */}
                    <div className="flex flex-col md:flex-row-reverse justify-between items-center text-slate-200 gap-6">
                        <a
                            href="https://hegina27.github.io/pinakafinalnatalaga.github.io/"
                            target="_blank"
                            className="hover:scale-105 hover:shadow-md hover:shadow-red-600 transition"
                        >
                            <img
                            src="Portfolio.png"
                            alt="Portfolio Cover Photo"
                            className="h-[250px] w-full max-w-sm object-cover rounded-lg"
                            />
                        </a>

                        <div className="w-full md:w-[300px] text-center md:text-left">
                            <h1 className="text-2xl sm:text-3xl mb-3 font-bungee">Portfolio Website</h1>
                            <p className="text-sm sm:text-base">
                            This is the first portfolio website I made for my ITEC50 project.
                            </p>
                            <Button className="mt-5 hover:scale-105 hover:shadow-md hover:shadow-red-600 transition">
                            <a href="https://github.com/Hegina27/pinakafinalnatalaga.github.io" target="_blank">
                                View Details
                            </a>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}