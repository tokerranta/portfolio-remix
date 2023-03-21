import { NavLink, useLocation } from "@remix-run/react";
import type { PropsWithChildren} from "react";
import { useState } from "react";
import { FaBars } from "react-icons/fa";

export default function SiteNavbar({ children }: PropsWithChildren) {
    const { pathname } = useLocation();
    const links = [{ to: "/", isActive: pathname === "/", label: "Home" }, { to: "/cv", isActive: pathname.includes("/cv"), label: "CV"}, { to: "/github-repos", isActive: pathname.includes("/github-repos"), label: "Github " }]
    const [navbarIsOpen, setNavbarIsOpen] = useState(false);
    const toggleNavbar = () => setNavbarIsOpen(isOpen => !isOpen);
    const closeNavbar = () => setNavbarIsOpen(false);
    return (
            <div className="navbar">
                <nav className={`bg-orange-400 ${navbarIsOpen ? "open" : undefined} lg:bg-inherit`}>
                    {links.map(({ label, to, isActive }) => <NavLink key={to} onClick={closeNavbar} className={`text-2xl transition-colors block dark:text-cyan-600 dark:hover:text-orange-400 dark:hover:bg-cyan-800 hover:text-slate-400 hover:underline ${isActive && "underline text-slate-400 dark:text-slate-400"} dark:lg:hover:text-inherit dark:lg:hover:bg-inherit dark:lg:text-white`} to={to}>{label}</NavLink>)}
                    <button className="bg-cyan-800 px-10 py-5 rounded-full text-orange-400 text-2xl lg:hidden" onClick={closeNavbar}>Close</button>
                </nav>
                <button onClick={toggleNavbar} className={navbarIsOpen ? `hidden` : `self-end p-2 bg-cyan-800 rounded-md lg:hidden`}><FaBars className={`${navbarIsOpen ? "hidden" : "block text-orange-400 lg:hidden"}`} size="2.5rem" /></button>
                <div className="hidden lg:block">{children}</div>
            </div>

    )
}