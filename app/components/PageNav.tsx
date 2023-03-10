import Link from "./link";

export default function PageNav() {
    return(
        <nav className="flex flex-row text-xl text-white list-none space-x-2 w-100 bg-green-400 p-2 justify-center">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/projects">Projects</Link></li>
        </nav>
    )
}