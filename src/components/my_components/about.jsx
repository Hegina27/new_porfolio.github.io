import { FaJava, FaPython, FaPhp, FaHtml5, FaArrowRight } from "react-icons/fa";
import { DiCss3 } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io5";
import { GrMysql } from "react-icons/gr";
import { SiMongodb } from "react-icons/si";
import { IoMdMusicalNote } from "react-icons/io";
import { FaMusic, FaCoins } from "react-icons/fa6";
import { GiEggDefense, GiAssassinPocket } from "react-icons/gi";
import { LuSwords } from "react-icons/lu";
import { Button } from "@/components/ui/button";

export default function About(){
    return(
        <>
            <div className="min-h-screen w-full py-32">
                <div className="flex flex-col my-5 mx-10 bg-black/50 rounded-2xl">
                    <div className="flex flex-col md:flex-row mb-40 px-5 md:px-10">
                        {/* Image Section */}
                        <div className="flex-1 flex items-center justify-center py-5">
                            <img
                            src="/AboutProfile.jpg"
                            alt="About Profile"
                            className="h-[250px] sm:h-[300px] md:h-[400px] rounded-xl hover:shadow-blue-600 hover:shadow-lg hover:scale-105 transition-transform duration-300"
                            />
                        </div>

                        {/* Text Section */}
                        <div className="flex-1 flex items-center py-5 md:px-10">
                            <p className="text-justify text-slate-300 font-roboto text-sm sm:text-base md:text-lg leading-relaxed">
                            <span className="text-4xl sm:text-5xl md:text-6xl text-lime-400 font-bungee">Hi!</span> I’m{" "}
                            <span className="font-bold">Rainiel Laurio Hegina</span>, a passionate web developer and
                            Bachelor of Science in Computer Science student at{" "}
                            <span className="italic">Cavite State University Bacoor Campus</span>. Beyond coding and
                            creating digital experiences, I’m also a singer, Mobile Legends player, and soccer player.
                            Whether I’m crafting websites, performing on stage, strategizing in games, or competing on the
                            field, I always give my best and express creativity in everything I do. My journey blends
                            technology, music, and sports — all driven by passion, discipline, and the desire to grow every
                            day.
                            </p>
                        </div>
                    </div>

                    <div className="text-center text-5xl text-lime-400 underline underline-offset-8 mb-10 font-bungee">
                        <h1>My skills</h1>
                    </div>
                    
                    <div className="text-center text-2xl text-slate-300 underline underline-offset-8 mb-5 font-roboto">
                        <h1>Programming</h1>
                    </div>

                    <div className="flex flex-wrap justify-center gap-3 text-2xl text-slate-300 mb-10 font-bitcount">
                        <span className="bg-black/60 px-3 py-2 rounded-md hover:shadow-blue-600 hover:shadow-md flex gap-1 border-blue-700 border-2 items-center"><FaJava /> Java</span>
                        <span className="bg-black/60 px-3 py-2 rounded-md hover:shadow-blue-600 hover:shadow-md flex gap-1 border-blue-700 border-2 items-center"><FaPython /> Python</span>
                        <span className="bg-black/60 px-3 py-2 rounded-md hover:shadow-blue-600 hover:shadow-md flex gap-1 border-blue-700 border-2 items-center"><FaPhp />PHP</span>
                        <span className="bg-black/60 px-3 py-2 rounded-md hover:shadow-blue-600 hover:shadow-md flex gap-1 border-blue-700 border-2 items-center"><FaHtml5 />HTML</span>
                        <span className="bg-black/60 px-3 py-2 rounded-md hover:shadow-blue-600 hover:shadow-md flex gap-1 border-blue-700 border-2 items-center"><DiCss3 />CSS</span>
                        <span className="bg-black/60 px-3 py-2 rounded-md hover:shadow-blue-600 hover:shadow-md flex gap-1 border-blue-700 border-2 items-center"><IoLogoJavascript />Javascript</span>
                        <span className="bg-black/60 px-3 py-2 rounded-md hover:shadow-blue-600 hover:shadow-md flex gap-1 border-blue-700 border-2 items-center"><GrMysql />MySQL</span>
                        <span className="bg-black/60 px-3 py-2 rounded-md hover:shadow-blue-600 hover:shadow-md flex gap-1 border-blue-700 border-2 items-center"><SiMongodb />MongoDB</span>
                    </div>

                    <div className="text-center text-2xl text-slate-300 underline underline-offset-8 mb-5 font-roboto">
                        <h1>Singing</h1>
                    </div>

                    <div className="flex flex-wrap justify-center gap-3 text-2xl text-slate-300 mb-10 font-bitcount">
                        <span className="bg-black/60 px-3 py-2 rounded-md hover:shadow-blue-600 hover:shadow-md flex gap-1 border-blue-700 border-2 items-center"><IoMdMusicalNote />Melody</span>
                        <span className="bg-black/60 px-3 py-2 rounded-md hover:shadow-blue-600 hover:shadow-md flex gap-1 border-blue-700 border-2 items-center"><FaMusic />Tenor</span>
                    </div>

                    <div className="text-center text-2xl text-slate-300 underline underline-offset-8 mb-5 font-roboto">
                        <h1>Soccer</h1>
                    </div>

                    <div className="flex flex-wrap justify-center gap-3 text-2xl text-slate-300 mb-10 font-bitcount">
                        <span className="bg-black/60 px-3 py-2 rounded-md hover:shadow-blue-600 hover:shadow-md flex gap-1 border-blue-700 border-2 items-center"><GiEggDefense />Defense</span>
                        <span className="bg-black/60 px-3 py-2 rounded-md hover:shadow-blue-600 hover:shadow-md flex gap-1 border-blue-700 border-2 items-center"><LuSwords />Attack</span>
                    </div>

                    <div className="text-center text-2xl text-slate-300 underline underline-offset-8 mb-5 font-roboto">
                        <h1>Mobile Legends</h1>
                    </div>

                    <div className="flex flex-wrap justify-center gap-3 text-2xl text-slate-300 mb-40 font-bitcount">
                        <span className="bg-black/60 px-3 py-2 rounded-md hover:shadow-blue-600 hover:shadow-md flex gap-1 border-blue-700 border-2 items-center"><FaCoins />GoldLaner</span>
                        <span className="bg-black/60 px-3 py-2 rounded-md hover:shadow-blue-600 hover:shadow-md flex gap-1 border-blue-700 border-2 items-center"><GiAssassinPocket />Assassin</span>
                    </div>

                    <div className="text-center text-slate-100 flex flex-col gap-3 mb-20 font-roboto">
                        <h1 className="text-5xl">"I'd Love to hear from you!"</h1>
                        <p className="text-xl">"Let’s turn ideas into experiences, one message at a time."</p>
                    </div>

                    <div className="flex justify-center mb-10 font-roboto">
                        <div className="bg-black/60 border-red-600 border-2 rounded-md p-2 flex flex-col gap-3 hover:shadow-lg hover:shadow-red-500">
                            <p className="text-slate-500">You can email me here</p>

                            <div className="flex justify-between gap-5 items-center text-slate-200 pl-2">
                                <span>rainielhegina65@gmail.com</span>
                                <Button className="hover:bg-slate-700">
                                    <a href="mailto:rainielhegina65@gmail.com" 
                                        aria-label="Send an email to rainielhegina65@gmail.com" 
                                    >
                                        <FaArrowRight />
                                    </a>
                                </Button>
                            </div>

                            <div className="flex justify-between gap-5 items-center text-slate-200 pl-2">
                                <span>rainiel.hegina@cvsu.edu.ph</span>
                                <Button className="hover:bg-slate-700">
                                    <a href="mailto:rainiel.hegina@cvsu.edu.ph" 
                                        aria-label="Send an email to rainiel.hegina@cvsu.edu.ph" 
                                    >
                                        <FaArrowRight />
                                    </a>
                                </Button>
                            </div>

                            <p className="text-slate-500">Give me a call on</p>

                            <div className="flex justify-between gap-5 items-center text-slate-200 pl-2">
                                <span>+63 948 513 6487</span>
                                <Button className="hover:bg-slate-700">
                                    <a href="tel:+639485136487"
                                        className="text-slate-300 hover:text-blue-600 underline underline-offset-2 transition-colors duration-300"
                                    >
                                        <FaArrowRight />
                                    </a>
                                </Button>
                            </div>

                            <p className="text-slate-500">Location</p>

                            <div className="flex justify-between gap-5 items-center text-slate-200 pl-2">
                                <span>Blk 3A Bagong Silang Queens Row Central Bacoor Cavite</span>
                                <Button className="hover:bg-slate-700">
                                    <a href="https://maps.app.goo.gl/pBS8zbZWmUz6qXme8"
                                        className="text-slate-300 hover:text-blue-600 underline underline-offset-2 transition-colors duration-300"
                                    >
                                        <FaArrowRight />
                                    </a>
                                </Button>
                            </div>
                        </div>
                    </div>

                    <div className="mb-10">
                        <div className="flex flex-wrap justify-center gap-10">
                            <a href="https://www.facebook.com/share/1GqBtRFp53/" target="_blank" rel="noopener noreferrer"
                            className="flex items-center gap-2 text-blue-600 hover:text-blue-800 hover:scale-105 transition-all duration-300">
                                <div className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-800 transition-colors duration-300">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"
                                        className="w-10 h-10">
                                    <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 
                                            1.325 24h11.495v-9.294H9.692V11.41h3.128V8.414c0-3.1 
                                            1.893-4.788 4.659-4.788 1.325 0 2.464.099 2.796.143v3.24h-1.92
                                            c-1.507 0-1.8.717-1.8 1.768v2.314h3.6l-.469 3.296h-3.131V24h6.138
                                            c.73 0 1.323-.593 1.323-1.324V1.325C24 .593 23.407 0 22.675 0z"/>
                                    </svg>
                                </div>
                            </a>

                            <a href="https://www.instagram.com/rainielhegina65?igsh=dnRkNGRsY2sydGk3" target="_blank" rel="noopener noreferrer"
                            className="flex items-center gap-2 text-pink-500 hover:text-pink-700 hover:scale-105 transition-all duration-300">
                                <div className="bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-500 text-white p-2 rounded-full hover:opacity-90 transition-opacity duration-300">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"
                                        className="w-10 h-10">
                                    <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zM12 7.25A4.75 4.75 0 1 1 7.25 12 4.75 4.75 0 0 1 12 7.25zm0 1.5A3.25 3.25 0 1 0 15.25 12 3.25 3.25 0 0 0 12 8.75zm4.88-.63a.88.88 0 1 1-.88.88.88.88 0 0 1 .88-.88z"/>
                                    </svg>
                                </div>
                            </a>

                            <a href="https://youtube.com/@rainielhegina7964?si=HW9AMp0wWaM-lBis" target="_blank" rel="noopener noreferrer"
                            className="flex items-center gap-2 text-red-600 hover:text-red-800 hover:scale-105 transition-all duration-300">
                                <div className="bg-red-600 text-white p-2 rounded-full hover:bg-red-700 transition-colors duration-300">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"
                                        className="w-10 h-10">
                                    <path d="M23.5 6.2s-.2-1.6-.8-2.3c-.7-.8-1.5-.8-1.9-.9C17.9 2.6 12 2.6 12 2.6h-.1s-5.9 0-8.8.4c-.4 0-1.2.1-1.9.9-.6.7-.8 2.3-.8 2.3S0 8.1 0 10v4c0 1.9.2 3.8.2 3.8s.2 1.6.8 2.3c.7.8 1.6.8 2 .9 1.4.1 8.8.4 8.8.4s5.9 0 8.8-.4c.4 0 1.2-.1 1.9-.9.6-.7.8-2.3.8-2.3s.2-1.9.2-3.8V10c0-1.9-.2-3.8-.2-3.8zM9.6 14.7V9.3l5.7 2.7-5.7 2.7z"/>
                                    </svg>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}