import { NavLink, useLocation } from "@remix-run/react";

export default function SiteNavbar() {
    const { pathname } = useLocation();
    const links = [{ to: "/", isActive: pathname === "/", label: "Home" }, { to: "/contracts", isActive: pathname === "/contracts", label: "Contracts"}, { to: "/my-work", isActive: pathname === "/my-work", label: "My work" }, { to: "/blog", isActive: pathname === "/blog", label: "Blog"}]
    return (
        <nav className="flex flex-row gap-8 justify-center font-bold bg-blue-600 p-4">
            {links.map(({ label, to, isActive }) => <NavLink key={to} className={`text-xl text-blue-200 transition-colors hover:text-blue-400 ${isActive ? "text-blue-400" : null}`} to={to}>{label}</NavLink>)}
        </nav>
    )
}