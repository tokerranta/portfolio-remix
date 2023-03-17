import { NavLink, useLocation } from "@remix-run/react";
import type { PropsWithChildren} from "react";
import { useState } from "react";
import { FaBars } from "react-icons/fa";

export default function SiteNavbar({ children }: PropsWithChildren) {
    const { pathname } = useLocation();
    const links = [{ to: "/", isActive: pathname === "/", label: "Home" }, { to: "/contracts", isActive: pathname === "/contracts", label: "Contracts"}, { to: "/my-work", isActive: pathname === "/my-work", label: "My work" }, { to: "/blog", isActive: pathname === "/blog", label: "Blog"}]
    const [navbarIsOpen, setNavbarIsOpen] = useState(false);
    const toggleNavbar = () => setNavbarIsOpen(isOpen => !isOpen);
    const closeNavbar = () => setNavbarIsOpen(false);
    return (
        <nav className="p-5 flex flex-row justify-end lg:grid lg:grid-flow-col lg:justify-center">
            <div className={navbarIsOpen ? "fixed top-0 left-0 h-full w-full flex flex-col gap-10 dark:bg-gray-900 bg-gray-100" : "hidden lg:grid lg:grid-flow-col"}>
                <ul className="flex flex-col lg:grid lg:grid-flow-col"> 
                    {links.map(({ label, to, isActive }) => <li key={to} className="px-10 py-5 border border-cyan-700 dark:hover:bg-cyan-700 lg:hover:bg-inherit lg:border-none"><NavLink onClick={closeNavbar} className={`text-2xl transition-colors block dark:text-slate-200 dark:hover:text-slate-400 hover:text-slate-400 hover:underline ${isActive && "underline text-slate-400 dark:text-slate-400"}`} to={to}>{label}</NavLink></li>)}
                </ul>
                {navbarIsOpen && <button className="block border border-orange-400 text-orange-400 px-20 py-5 rounded-full text-xl self-center" onClick={closeNavbar}>Close</button>}
            </div>
            {!navbarIsOpen && <button className="lg:hidden" onClick={toggleNavbar} aria-haspopup="true">
                <FaBars size="2rem" />
            </button>}
            {children}
            
            {/* <div className={`${!navbarIsOpen ? "hidden" : undefined} transition ${navbarIsOpen ? "fixed top-0 left-0 h-full w-full  bg-red-50" : undefined}`}>
                <div className="flex flex-col">
                    <ul className="flex flex-col lg:flex-row"> 
                        {links.map(({ label, to, isActive }) => <li key={to} className="px-10 py-5 border lg:border-none hover:bg-red-400 transition-colors bg-red-500"><NavLink className={`text-2xl transition-colors block dark:text-slate-200 dark:hover:text-slate-400 hover:text-slate-400 hover:underline ${isActive && "underline text-slate-400 dark:text-slate-400"}`} to={to}>{label}</NavLink></li>)}
                    </ul>
                    {navbarIsOpen && <button className="rounde rounded-full bg-gray-300 max-w-sm px-10 py-5" onClick={closeNavbar}>Close</button> }
                </div>
            </div>
            <div className="block lg:hidden">
                <button onClick={toggleNavbar} className="flex rounded-full p-1 justify-center items-center border-solid border-gray-400 hover:border-white" aria-haspopup="true">
                    <FaBars size="2rem" />
                </button>
            </div> */}
        </nav>
    )
}