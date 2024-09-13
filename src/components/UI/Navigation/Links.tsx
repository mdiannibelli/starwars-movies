'use client';

import { navigationLinks } from "@/constants/navlinks";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Links = () => {
    const pathname = usePathname();
    return (
        <>
            {
                navigationLinks.map((nav, index) => {
                    const isActive = nav.url === '/'
                        ? pathname === '/' // home 
                        : pathname.startsWith(nav.url);
                    return (
                        <Link key={index} href={nav.url}>
                            <li className={`${isActive ? 'bg-yellow-500 text-black' : 'hover:bg-yellow-500 hover:text-black duration-300'} text-white font-semibold text-sm md:text-md rounded-md border-yellow-500 py-1 px-4 md:px-8 border-[1px]`}>
                                {nav.title}
                            </li>
                        </Link>
                    );
                })
            }
        </>
    );
};

export default Links;
