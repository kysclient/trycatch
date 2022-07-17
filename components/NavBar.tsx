import Link from "next/link";
import {useRouter} from "next/router";


const NavBar = () => {
    const router = useRouter();

    return (
        <nav>
            <Link href="/">
                <a >Home</a>
            </Link>

            <Link href="/about">
                <a >About</a>
            </Link>
        </nav>
    )

}

export default NavBar