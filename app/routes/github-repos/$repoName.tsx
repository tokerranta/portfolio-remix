import type { LoaderArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import PageTitle from "~/components/PageTitle";
import { getRepoDetails } from "~/models/github-repos.server";

export const loader = async ({ params }: LoaderArgs) => {
    if(typeof params.repoName === "undefined") {
        throw new Error("bad request!");
    }
    const repoDetails = await getRepoDetails(params.repoName);
    return json(repoDetails);
}

type LabelValueProps = {
    label: string;
    value: string;
}

const LabelValue: React.FC<LabelValueProps> = ({ label, value }) => (
    <div className="flex flex-row">
        <label className="pr-2">{label}:</label>
        <div>{value}</div>
    </div>
)

export default function RepoDetailsRoute() {
    const data = useLoaderData<typeof loader>();

    return (<div className="flex flex-col gap-4 items-start">
        <PageTitle>{data.name}</PageTitle>
        <LabelValue label="Description" value={data.description}/>
        <LabelValue label="Repo URL" value={data.htmlUrl}/>
        <LabelValue label="Created" value={data.createdAt} />
    </div>)
}