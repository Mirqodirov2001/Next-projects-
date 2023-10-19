import Link from 'next/link';
import React from 'react';
import Logo from "@/assets/icons/GitHub.svg";
import keySlash from "@/assets/icons/key_slash.svg";
import bell from "@/assets/icons/bell.svg";
import plus from "@/assets/icons/plus.svg";
import arrowFilled from "@/assets/icons/arrowdown-filled.svg";
import Image from 'next/image';
import avatar from "@/assets/icons/computer-user-icon-28 (2).png";

const Header = () => {
    return (
        <header className='py-4 w-full bg-[#161B22]'>
            <div className="container mx-auto">
                <div className='flex items-center justify-between'>
                    <div className='flex items-center gap-x-4'>
                        <Link href="/">
                            <img src={Logo.src} alt="GitHub logo" />
                        </Link>

                        <div className='flex items-center justify-between max-w-[272px] border border-[#282C31] rounded-[5px] pl-3 pr-1 py-[2px]'>
                            <input type="text" className='bg-[#161B22] text-[#6E7681] text-[13px] w-full focus:outline-none' placeholder='Search or jump to...' />
                            <img src={keySlash.src} alt="key slash icon" />
                        </div>

                        <ul className='flex items-center gap-x-4 text-white text-sm font-bold'>
                            <li>
                                <Link href="#">Pull requests</Link>
                            </li>

                            <li>
                                <Link href="#">Issues</Link>
                            </li>

                            <li>
                                <Link href="#">Codespaces</Link>
                            </li>

                            <li>
                                <Link href="#">Marketplace</Link>
                            </li>

                            <li>
                                <Link href="#">Explore</Link>
                            </li>
                        </ul>
                    </div>

                    <div className='flex items-center gap-x-3'>
                        <img src={bell.src} className='cursor-pointer' alt="Bell icon" />

                        <div className="flex items-center gap-x-[2px] cursor-pointer">
                            <img src={plus.src} alt="Plus icon" />
                            <img src={arrowFilled.src} alt="Arrow down"/>
                        </div>

                        <div className='flex items-center gap-x-1 cursor-pointer'>
                            <div className="rounded-full">
                                <Image
                                    src={avatar}
                                    alt="User avatar"
                                    width="24"
                                    height="24"
                                    className='rounded-full'
                                />
                            </div>
                            <img src={arrowFilled.src} alt="Arrow down"/>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header