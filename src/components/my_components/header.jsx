import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu"

export default function Header(){

    return(
        <>
            <nav className="w-full fixed p-5 bg-gradient-to-r from-slate-400 to-gray-400 z-50">
                <div className="flex items-center justify-between md:mx-10">
                    
                    <div className="flex-1 text-md md:text-2xl lg:text-4xl font-bold font-permanent bg-gradient-to-r from-blue-800 to-purple-400 text-transparent bg-clip-text">
                        My Portfolio
                    </div>

                    <div className="flex-1 flex item-center justify-center">
                        <NavigationMenu className="rounded-full bg-white px-5 py-2 text-sm md:text-lg">
                            <NavigationMenuList className="flex gap-6">
                                <NavigationMenuItem>
                                    <NavigationMenuLink href="/" className="hover:text-blue-900 relative text-gray-700 after:content-[''] 
                                    after:absolute after:left-0 after:bottom-0 after:w-0 hover:after:w-full after:h-[2px] 
                                    after:bg-blue-900 after:transition-all after:duration-300">
                                        Home
                                    </NavigationMenuLink>
                                </NavigationMenuItem>

                                <NavigationMenuItem>
                                    <NavigationMenuLink href="/projects" className="hover:text-blue-900 relative text-gray-700 after:content-[''] 
                                    after:absolute after:left-0 after:bottom-0 after:w-0 hover:after:w-full after:h-[2px] 
                                    after:bg-blue-900 after:transition-all after:duration-300">
                                        Projects
                                    </NavigationMenuLink>
                                </NavigationMenuItem>

                                <NavigationMenuItem>
                                    <NavigationMenuLink href="/about" className="hover:text-blue-900 relative text-gray-700 after:content-[''] 
                                    after:absolute after:left-0 after:bottom-0 after:w-0 hover:after:w-full after:h-[2px] 
                                    after:bg-blue-900 after:transition-all after:duration-300">
                                        About
                                    </NavigationMenuLink>
                                </NavigationMenuItem>
                            </NavigationMenuList>
                        </NavigationMenu>
                    </div>

                    <div className="sm:flex-1"></div>
                </div>
            </nav>    
        </>
    );
}