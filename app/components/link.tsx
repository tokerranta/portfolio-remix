import { NavLink } from "@remix-run/react";
import type { PropsWithChildren } from "react";

export default function Link({ children, href }: PropsWithChildren<{ href: string}>) {
    return <NavLink to={href} className="text-white transition-colors hover:text-green-600">{children}</NavLink>
}