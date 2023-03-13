import type { PropsWithChildren } from "react";

export default function Page({ children }: PropsWithChildren) {
    return (<main className="grid grid-cols-1 sm:grid-cols-12 grid-rows-5">{children}</main>)
}   