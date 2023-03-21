import { format } from "date-fns";

type GithubRepo = {
    name: string,
    html_url: string;
    url: string;
    created_at: string;
    description: string;
}

export const getAllRepos = async () => {
    const response = await fetch(`https://api.github.com/users/tokerranta/repos`);
    if(response.ok) {
        const repos = await response.json() as GithubRepo[];
        return repos.sort((r1, r2) => r2.created_at.localeCompare(r1.created_at)).map(r => ({ htmlUrl: r.html_url, name: r.name, createdAt: format(new Date(r.created_at), "MMMM yyyy"), repoUrl: r.url, description: r.description }))
    }   

    return [{ htmlUrl: "https://github.com/tokerranta/portfolio-remix", name: "portfolio-remix", createdAt: "2023-03-15", repoUrl: "blah blah", description: "portfolio created with Remix"}];
}

export const getMostRecentRepos = async () => {
    const repos = await getAllRepos();
    return repos.slice(0, 5);
}

export const getRepoDetails = async(name: string) => {
    const repos = await getAllRepos();
    return repos.find(r => r.name === name) ?? { createdAt: "", description: "", htmlUrl: "", name: "", repoUrl: ""};
}
