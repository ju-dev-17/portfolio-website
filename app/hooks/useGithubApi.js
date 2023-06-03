function useGithubApi() {
    const getRepositories = async () => {
        const res = await fetch("https://api.github.com/users/ju-dev-17/repos");
        const data = res.json();
        return data;
    }

    return getRepositories;
}

export default useGithubApi;
