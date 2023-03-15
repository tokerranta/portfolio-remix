import { json } from "@remix-run/node";
import { Outlet, useLoaderData } from "@remix-run/react";
import Main from "~/components/Main";
import PageTitle from "~/components/page-title";
import { getMostRecentRepos } from "~/models/github-repos.server";

export const loader = async () => {
    const repos = await getMostRecentRepos();
    return json(repos);
}

export default function MyWorkRoute() {
    const repos = useLoaderData<typeof loader>();
    return (
    <Main>
        <PageTitle>My Work</PageTitle>
        <div className="flex flex-col justify-center justify-items-center items-center gap-4">
            {repos.map(repo => <a className="p-4 bg-cyan-800 transition-all hover:scale-x-95 hover:bg-cyan-600 w-96 text-center text-lg text-slate-200 font-bold" key={repo.name} href={repo.url} target="_blank" rel="noreferrer">{repo.name}</a>)}
        </div>
        <Outlet />
    </Main>)
}