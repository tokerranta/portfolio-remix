import type { PropsWithChildren } from "react";

export default function Aside({ children }: PropsWithChildren) {
    return <div className="aside">{children}</div>
}