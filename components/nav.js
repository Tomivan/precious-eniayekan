import Link from 'next/link';
import Image from 'next/image';
import Logo from "../assets/images/logo.png";
import navStyles from '../styles/nav.module.css';

const Nav = () => {
    return (
        <nav className={navStyles.nav}>
            <Image src={Logo} alt="a text that reads the precious eniayekan" width={70} height={70} />
            <ul className={navStyles.ul}>
                <li className={navStyles.li}>
                    <Link href="/">Home</Link>
                </li>
                <li className={navStyles.li}>
                    <Link href="/raveny">Raveny</Link>
                </li>
                <li className={navStyles.li}>
                    <Link href="/marketing">Marketing</Link>
                </li>
                <li className={navStyles.li}>
                    <Link href="/tsi">TSI</Link>
                </li>
                <li className={navStyles.li}>
                    <Link href="/alpha-treasures">Alpha Treasures</Link>
                </li>
                <li className={navStyles.li}>
                    <Link href="/awards">Awards</Link>
                </li>
                <li className={navStyles.li}>
                    <Link href="/blog">Blog</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Nav