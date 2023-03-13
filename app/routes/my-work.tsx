import { Outlet } from "@remix-run/react";
import Main from "~/components/Main";
import PageTitle from "~/components/PageTitle";

export default function MyWorkRoute() {
    return (
    <Main>
        <PageTitle>My Work</PageTitle>
        <Outlet />
    </Main>)
}