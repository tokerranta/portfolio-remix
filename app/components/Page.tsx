import type { PropsWithChildren } from "react";

export default function Page({ children }: PropsWithChildren) {
    return (<section className="flex flex-column justify-center w-3/4 bg-red-400 p-4">{children}</section>)
}