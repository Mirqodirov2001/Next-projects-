import Link from 'next/link';
import Image from 'next/image';
import linkedin from "@/assets/icons/linkedin.svg";
import telegram from '@/assets/icons/telegram.svg';
import whatsapp from '@/assets/icons/whatsapp.svg';
import facebook from '@/assets/icons/facebook.svg';
import x from '@/assets/icons/x.svg';
import vk from '@/assets/icons/vk.svg';
import html from '@/assets/icons/html.png';
import css from '@/assets/icons/css.png';
import js from '@/assets/icons/js.png';
import bootstrap from '@/assets/icons/bootstrap.png';
import react from '@/assets/icons/react.png';
import webpack from '@/assets/icons/webpack.png';
import git from '@/assets/icons/git.png';
import sass from '@/assets/icons/sass.png';
import ts from '@/assets/icons/ts.png';
import tailwind from '@/assets/icons/tailwind.png';
import github from '@/assets/icons/GitHub.svg';
import vite from '@/assets/icons/vite.png';
import languages from '@/assets/images/languages.png';
import book from "@/assets/icons/book.svg";
import star2 from '@/assets/icons/star2.svg';
import contributions from '@/assets/images/contributions.png';

const Layout = () => {

    return (
        <main className="bg-[#0D1117]">
            <div className='container mx-auto px-5'>
                <div className='grow'>
                    <div className='py-7 px-[25px] border border-[#343942] rounded-md mt-[26px]'>
                        <Link href="#" className='text-xs text-[#6E7681] font-bold'>Mirqodirov2001/README.md</Link>
                        <h2 className='text-[32px] text-[#31ee2e] font-bold py-6 border-b border-[#282C31]'>
                            Hi there, i’m Abdulbosit 👋
                        </h2>

                        <div className='py-6'>
                            <h5 className='text-lg text-[#C2CAD1] font-bold mb-[15px]'>
                                I’m Frontend Developer!!
                            </h5>

                            <ul className='list-disc text-white pl-6'>
                                <li>
                                    🌱 I’m currently learning everything about web development
                                </li>
                                <li>
                                    ⚡ Fun fact: I like playing computer games
                                </li>
                                <li>
                                    🥅 2023 Goals: Learn more about ReactJS , VueJs and NextJs
                                </li>
                            </ul>
                        </div>

                        <div>
                            <p className='text-lg text-[#C2CAD1] font-bold mb-[15px]'>
                                Connect with me:
                            </p>

                            <div className='flex items-center gap-x-3'>
                                <Link href="">
                                    <img src={linkedin.src} className='w-6 h-6' alt="Linkedin icon" />
                                </Link>
                                <Link href="https://t.me/Sunnatbek_Qadamov" target='_blank'>
                                    <img src={telegram.src} className='w-6 h-6' alt="Telegram icon" />
                                </Link>
                                <Link href="">
                                    <img src={facebook.src} className='w-6 h-6' alt="Facebook icon" />
                                </Link>
                                <Link href="">
                                    <img src={vk.src} className='w-6 h-6' alt="vk icon" />
                                </Link>
                                <Link href="">
                                    <img src={whatsapp.src} className='w-6 h-6' alt="Whatsapp icon" />
                                </Link>
                                <Link href="">
                                    <img src={x.src} className='w-6 h-6' alt="X icon" />
                                </Link>
                            </div>
                        </div>

                        <div className='py-6 border-b border-[#282C31]'>
                            <p className='text-lg text-[#C2CAD1] font-bold mb-[15px]'>
                                Languages and Tools:
                            </p>

                            <div className='grid grid-cols-6 gap-x-5 gap-y-6 max-w-[316px]'>
                                <Image src={html} alt="Html icon" width="36px" height="36px" />
                                <Image src={css} alt="CSS icon" width="36px" height="36px" />
                                <Image src={js} alt="JS icon" width="36px" height="36px" />
                                <Image src={bootstrap} alt="Bootstrap icon" width="36px" height="36px" />
                                <Image src={react} alt="React icon" width="36px" height="36px" />
                                <Image src={webpack} alt="Webpack icon" width="36px" height="36px" />
                                <Image src={git} alt="Git icon" width="36px" height="36px" />
                                <Image src={sass} alt="Sass icon" width="36px" height="36px" />
                                <Image src={ts} alt="TS icon" width="36px" height="36px" />
                                <Image src={tailwind} alt="Tailwind icon" width="36px" height="36px" />
                                <Image src={github} alt="GitHub icon" width="36px" height="36px" />
                                <Image src={vite} alt="Vite icon" width="36px" height="36px" />
                            </div>
                        </div>

                        <div className='my-6'>
                            <p className='text-lg text-[#C2CAD1] font-bold mb-[15px]'>
                                ⚡ Top languages
                            </p>

                            <Image src={languages} alt="graph" />
                        </div>
                    </div>

                    <div className='mt-5 mb-[42px]'>
                        <p className='text-base text-[#C2CAD1] mb-[10px] font-semibold'>Pinned</p>

                        <div className='grid grid-cols-2 gap-4'>
                            <div className='p-4 max-w-[440px] border border-[#343942] rounded-md'>
                                <div className='flex items-center gap-2'>
                                    <img src={book.src} alt="Book icon" />
                                    <p className='text-sm text-[#58A6FF] font-bold'>teletype</p>
                                    <span className="px-2 py-[2px] border border-[#343942] text-xs text-[#6E7681] font-semibold rounded-[50px]">public</span>
                                </div>

                                <p className='text-xs text-[#8B949E] my-[6px]'>Clone of Teletype</p>

                                <div className='flex items-center gap-x-4'>
                                    <div className='flex items-center gap-x-1'>
                                        <div className='w-3 h-3 bg-[#e34c26] rounded-full'>

                                        </div>
                                        <p className='text-[13px] text-[#6E7681]'>HTML</p>
                                    </div>

                                    <div className='flex items-center gap-x-[2px]'>
                                        <img src={star2.src} alt="Star icon" />
                                        <p className='text-[13px] text-[#6E7681]'>1</p>
                                    </div>
                                </div>
                            </div>

                            <div className='p-4 max-w-[440px] border border-[#343942] rounded-md'>
                                <div className='flex items-center gap-2'>
                                    <img src={book.src} alt="Book icon" />
                                    <p className='text-sm text-[#58A6FF] font-bold'>contact-app_Zustand</p>
                                    <span className="px-2 py-[2px] border border-[#343942] text-xs text-[#6E7681] font-semibold rounded-[50px]">public</span>
                                </div>

                                <p className='text-xs text-[#8B949E] my-[6px]'>Contact app with Zustand library</p>

                                <div className='flex items-center gap-x-4'>
                                    <div className='flex items-center gap-x-1'>
                                        <div className='w-3 h-3 bg-[#F1E05A] rounded-full'>

                                        </div>
                                        <p className='text-[13px] text-[#6E7681]'>JavaScript</p>
                                    </div>

                                    <div className='flex items-center gap-x-[2px]'>
                                        <img src={star2.src} alt="Star icon" />
                                        <p className='text-[13px] text-[#6E7681]'>1</p>
                                    </div>
                                </div>
                            </div>

                            <div className='p-4 max-w-[440px] border border-[#343942] rounded-md'>
                                <div className='flex items-center gap-2'>
                                    <img src={book.src} alt="Book icon" />
                                    <p className='text-sm text-[#58A6FF] font-bold'>Exam_5</p>
                                    <span className="px-2 py-[2px] border border-[#343942] text-xs text-[#6E7681] font-semibold rounded-[50px]">public</span>
                                </div>

                                <p className='text-xs text-[#8B949E] my-[6px]'>Portfolio website</p>

                                <div className='flex items-center gap-x-4'>
                                    <div className='flex items-center gap-x-1'>
                                        <div className='w-3 h-3 bg-[#c6538c] rounded-full'>

                                        </div>
                                        <p className='text-[13px] text-[#6E7681]'>SCSS</p>
                                    </div>

                                    <div className='flex items-center gap-x-[2px]'>
                                        <img src={star2.src} alt="Star icon" />
                                        <p className='text-[13px] text-[#6E7681]'>1</p>
                                    </div>
                                </div>
                            </div>

                            <div className='p-4 max-w-[440px] border border-[#343942] rounded-md'>
                                <div className='flex items-center gap-2'>
                                    <img src={book.src} alt="Book icon" />
                                    <p className='text-sm text-[#58A6FF] font-bold'>Pomodoro_Timer</p>
                                    <span className="px-2 py-[2px] border border-[#343942] text-xs text-[#6E7681] font-semibold rounded-[50px]">public</span>
                                </div>

                                <p className='text-xs text-[#8B949E] my-[6px]'>Timer</p>

                                <div className='flex items-center gap-x-4'>
                                    <div className='flex items-center gap-x-1'>
                                        <div className='w-3 h-3 bg-[#3178c6] rounded-full'>

                                        </div>
                                        <p className='text-[13px] text-[#6E7681]'>TypeScript</p>
                                    </div>

                                    <div className='flex items-center gap-x-[2px]'>
                                        <img src={star2.src} alt="Star icon" />
                                        <p className='text-[13px] text-[#6E7681]'>1</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='mb-8 flex gap-x-8'>
                        <div>
                            <p className="text-base text-[#C2CAD1] font-semibold mb-[10px]">
                                59 contributions in the last year
                            </p>

                            <div className="px-[14px] py-4 border border-[#343942] rounded-md max-w-[747px]">
                                <Image src={contributions} alt="contributions" />
                            </div>
                        </div>

                        <div>
                            <p className='text-[13px] text-white py-2 pl-[13px] pr-[30px] bg-[#1F6FEB] rounded-[5px] cursor-pointer'>2023</p>
                            <p className='text-[13px] text-[#6E7681] pt-3 pl-[14px] cursor-pointer'>2022</p>
                        </div>
                    </div>

                    <button className="py-[10px] text-sm text-[#58A6FF] font-semibold text-center w-full border border-[#282C31] rounded-[5px] mb-[60px]">
                        Show more activity
                    </button>
                </div>
            </div>
        </main>
    )
}

export default Layout