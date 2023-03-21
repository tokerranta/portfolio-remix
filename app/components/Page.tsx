import type { PropsWithChildren } from "react";

export default function Page({ children, withAside = false }: PropsWithChildren<{ withAside?: boolean }>) {
    return (<div className={`page ${withAside ? "page-cols-2" : "page-cols-1"}`}>{children}</div>)
}   