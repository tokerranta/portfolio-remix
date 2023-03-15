import type { PropsWithChildren } from "react";

export default function PageTitle({ children }: PropsWithChildren) {
    return <h1 className="text-4xl sm:text-6xl text-center mb-24 text-orange-400">{children}</h1>
}