import type { PropsWithChildren } from "react";

export default function Footer({ children }: PropsWithChildren) {
    return (<div className="col-span-full bg-yellow-600 row-span-1">{children}</div>)
}