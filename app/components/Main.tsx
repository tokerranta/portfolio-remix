import type { PropsWithChildren } from "react";

export default function Main({ children }: PropsWithChildren) {
    return (
        <section className="col-span-full row-span-3">{children}</section>
    );
}