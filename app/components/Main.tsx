import type { PropsWithChildren } from "react";

export default function Main({ children }: PropsWithChildren) {
    return (
        <section className="main">{children}</section>
    );
}