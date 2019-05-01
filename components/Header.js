import Link from 'next/link'

const linkStyles = {
    marginRight: 15
}

const Header = () => (
    <nav>
        <Link href="/">
            <a style={linkStyles}>Home</a>
        </Link>
        <Link href="/about">
            <a style={linkStyles}>About</a>
        </Link>
        <style jsx>{`
            nav {
                font-family: 'Arial';
                padding: 1rem 0;
            }
            nav a {
                color: blue;
                text-transform: uppercase;
            }
            nav a:hover {
                opacity: .8;
            }
        `}</style>
    </nav>
)

export default Header