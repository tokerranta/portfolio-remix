import type { PropsWithChildren } from "react";

export default function Stacked({ children }: PropsWithChildren) {
    return (<div className="flex flex-col gap-4 items-center">{children}</div>)
}