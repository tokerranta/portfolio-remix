import type { PropsWithChildren } from "react";

export default function Sidebar({ children }: PropsWithChildren) {
    return <aside className="col-span-full sm:col-span-2 row-span-3 bg-red-300">{children}</aside>
}