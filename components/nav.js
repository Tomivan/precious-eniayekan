import Link from 'next/link';
import navStyles from '../styles/nav.module.css';

const Nav = () => {
    return (
        <nav className={navStyles.nav}>
            <ul>
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/raveny">Raveny</Link>
                </li>
                <li>
                    <Link href="/marketing">Marketing</Link>
                </li>
                <li>
                    <Link href="/tsi">TSI</Link>
                </li>
                <li>
                    <Link href="/alpha-treasures">Alpha Treasures</Link>
                </li>
                <li>
                    <Link href="/awards">Awards</Link>
                </li>
                <li>
                    <Link href="/blog">Blog</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Nav