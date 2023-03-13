import type { PropsWithChildren } from "react";

export default function Header({ children }: PropsWithChildren) {
    return <section className="col-span-full row-span-1">{children}</section>
}