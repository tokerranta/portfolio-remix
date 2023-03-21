import { json } from "@remix-run/node";
import { NavLink, Outlet, useLoaderData } from "@remix-run/react";
import Aside from "~/components/Aside";
import Main from "~/components/Main";
import Page from "~/components/Page";
import PageTitle from "~/components/PageTitle";
import Stacked from "~/components/Stacked";
import { getMostRecentRepos } from "~/models/github-repos.server";

export const loader = async () => {
    const repos = await getMostRecentRepos();
    return json(repos);
}


export default function GithubReposRoute() {
    const repos = useLoaderData<typeof loader>();
    return (
        <Page withAside>
            <Aside>
                <Stacked>
                {repos.map(repo => <NavLink className="p-4 bg-cyan-800 transition-all hover:scale-x-95 hover:bg-cyan-600 w-96 text-center text-lg text-slate-200 font-bold" key={repo.name} to={repo.name}>{repo.name}</NavLink>)}

                </Stacked>
            </Aside>
            <Main>
                <Outlet />
            </Main>
        </Page>)
}