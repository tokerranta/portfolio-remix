import type { PropsWithChildren } from "react";

export default function GridLayout({ children }: PropsWithChildren) {
    return <div style={{ height: "100vh" }} className="grid grid-cols-12 sm:grid-cols-1 grid-rows-6">{children}</div>
}