type GithubRepo = {
    name: string,
    html_url: string;
    created_at: string;
}

export const getAllRepos = async () => {
    const response = await fetch(`https://api.github.com/users/tokerranta/repos`);
    if(response.ok) {
        const repos = await response.json() as GithubRepo[];
        return repos.map(r => ({ url: r.html_url, name: r.name, createdAt: r.created_at })).sort((r1, r2) => r2.createdAt.localeCompare(r1.createdAt))
    }   

    return [];
}

export const getMostRecentRepos = async () => {
    const repos = await getAllRepos();
    return repos.slice(0, 5);
}
