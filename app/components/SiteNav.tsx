import { NavLink, useLocation } from "@remix-run/react";

export default function SiteNavbar() {
    const { pathname } = useLocation();
    const links = [{ to: "/", isActive: pathname === "/", label: "Home" }, { to: "/contracts", isActive: pathname === "/contracts", label: "Contracts"}, { to: "/my-work", isActive: pathname === "/my-work", label: "My work" }, { to: "/blog", isActive: pathname === "/blog", label: "Blog"}]
    return (
        <nav className="flex flex-row gap-12 font-bold p-4 my-16 mx-32">
            {links.map(({ label, to, isActive }) => <NavLink key={to} className={`text-2xl transition-colors dark:text-slate-200 dark:hover:text-slate-400 hover:text-slate-400 hover:underline ${isActive && "underline text-slate-400 dark:text-slate-400"}`} to={to}>{label}</NavLink>)}
        </nav>
    )
}