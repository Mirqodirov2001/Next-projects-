import gitHubFooter from '@/assets/icons/GitHubFooter.svg';
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className='h-[115px] bg-[#0D1117]'>
            <div className="container mx-auto">
                <div className='border-t border-[#282C31] py-10 flex items-center gap-x-[70px]'>
                    <div className='flex items-center gap-x-[6px]'>
                        <img src={gitHubFooter.src} alt="GitHub logo footer" />
                        <p className="text-sm text-[#8B949E] font-semibold">© 2022 GitHub, Inc.</p>
                    </div>

                    <ul className='text-sm text-[#58A6FF] font-bold flex items-center gap-x-[42px]'>
                        <li>
                            <Link href="">
                            Terms
                            </Link>
                        </li>

                        <li>
                            <Link href="">
                                Privacy
                            </Link>
                        </li>

                        <li>
                            <Link href="">
                                Security
                            </Link>
                        </li>

                        <li>
                            <Link href="">
                                Status
                            </Link>
                        </li>

                        <li>
                            <Link href="">
                                Docs
                            </Link>
                        </li>

                        <li>
                            <Link href="">
                                Contact GitHub
                            </Link>
                        </li>

                        <li>
                            <Link href="">
                                Pricing
                            </Link>
                        </li>

                        <li>
                            <Link href="">
                                API
                            </Link>
                        </li>

                        <li>
                            <Link href="">
                                Training
                            </Link>
                        </li>

                        <li>
                            <Link href="">
                                Blog
                            </Link>
                        </li>

                        <li>
                            <Link href="">
                                About
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer