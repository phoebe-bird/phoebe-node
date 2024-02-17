# GitHub

Types:

- <code><a href="./src/resources/top-level.ts">ZenResponse</a></code>

Methods:

- <code title="get /zen">client.<a href="./src/index.ts">zen</a>() -> string</code>

# Shared

Types:

- <code><a href="./src/resources/shared.ts">Email</a></code>

# Repos

Types:

- <code><a href="./src/resources/repos/repos.ts">FullRepository</a></code>
- <code><a href="./src/resources/repos/repos.ts">MinimalRepository</a></code>
- <code><a href="./src/resources/repos/repos.ts">NullableRepository</a></code>
- <code><a href="./src/resources/repos/repos.ts">Repository</a></code>
- <code><a href="./src/resources/repos/repos.ts">StarredRepository</a></code>
- <code><a href="./src/resources/repos/repos.ts">RepoListForCurrentUserResponse</a></code>
- <code><a href="./src/resources/repos/repos.ts">RepoListForOrgResponse</a></code>
- <code><a href="./src/resources/repos/repos.ts">RepoListForUserResponse</a></code>
- <code><a href="./src/resources/repos/repos.ts">RepoListPublicResponse</a></code>
- <code><a href="./src/resources/repos/repos.ts">RepoListStarredResponse</a></code>

Methods:

- <code title="post /user/repos">client.repos.<a href="./src/resources/repos/repos.ts">create</a>({ ...params }) -> Repository</code>
- <code title="get /repos/{owner}/{repo}">client.repos.<a href="./src/resources/repos/repos.ts">retrieve</a>({ ...params }) -> FullRepository</code>
- <code title="patch /repos/{owner}/{repo}">client.repos.<a href="./src/resources/repos/repos.ts">update</a>({ ...params }) -> FullRepository</code>
- <code title="delete /repos/{owner}/{repo}">client.repos.<a href="./src/resources/repos/repos.ts">delete</a>({ ...params }) -> void</code>
- <code title="get /user/starred/{owner}/{repo}">client.repos.<a href="./src/resources/repos/repos.ts">checkStarred</a>({ ...params }) -> void</code>
- <code title="post /orgs/{org}/repos">client.repos.<a href="./src/resources/repos/repos.ts">createForOrg</a>(org, { ...params }) -> Repository</code>
- <code title="post /repos/{template_owner}/{template_repo}/generate">client.repos.<a href="./src/resources/repos/repos.ts">createFromTemplate</a>(templateOwner, templateRepo, { ...params }) -> Repository</code>
- <code title="get /user/repos">client.repos.<a href="./src/resources/repos/repos.ts">listForCurrentUser</a>({ ...params }) -> RepoListForCurrentUserResponse</code>
- <code title="get /orgs/{org}/repos">client.repos.<a href="./src/resources/repos/repos.ts">listForOrg</a>(org, { ...params }) -> RepoListForOrgResponse</code>
- <code title="get /users/{username}/repos">client.repos.<a href="./src/resources/repos/repos.ts">listForUser</a>(username, { ...params }) -> RepoListForUserResponse</code>
- <code title="get /repositories">client.repos.<a href="./src/resources/repos/repos.ts">listPublic</a>({ ...params }) -> RepoListPublicResponse</code>
- <code title="get /user/starred">client.repos.<a href="./src/resources/repos/repos.ts">listStarred</a>({ ...params }) -> RepoListStarredResponse</code>
- <code title="put /user/starred/{owner}/{repo}">client.repos.<a href="./src/resources/repos/repos.ts">star</a>({ ...params }) -> void</code>
- <code title="post /repos/{owner}/{repo}/transfer">client.repos.<a href="./src/resources/repos/repos.ts">transfer</a>({ ...params }) -> MinimalRepository</code>
- <code title="delete /user/starred/{owner}/{repo}">client.repos.<a href="./src/resources/repos/repos.ts">unstar</a>({ ...params }) -> void</code>

## Issues

Types:

- <code><a href="./src/resources/repos/issues.ts">Issue</a></code>

Methods:

- <code title="post /repos/{owner}/{repo}/issues">client.repos.issues.<a href="./src/resources/repos/issues.ts">create</a>({ ...params }) -> Issue</code>

## Commits

Types:

- <code><a href="./src/resources/repos/commits.ts">Commit</a></code>
- <code><a href="./src/resources/repos/commits.ts">GitCommit</a></code>
- <code><a href="./src/resources/repos/commits.ts">CommitListResponse</a></code>

Methods:

- <code title="get /repos/{owner}/{repo}/commits">client.repos.commits.<a href="./src/resources/repos/commits.ts">list</a>({ ...params }) -> CommitListResponse</code>

## Forks

Types:

- <code><a href="./src/resources/repos/forks.ts">ForkListResponse</a></code>

Methods:

- <code title="post /repos/{owner}/{repo}/forks">client.repos.forks.<a href="./src/resources/repos/forks.ts">create</a>({ ...params }) -> FullRepository</code>
- <code title="get /repos/{owner}/{repo}/forks">client.repos.forks.<a href="./src/resources/repos/forks.ts">list</a>({ ...params }) -> ForkListResponse</code>

## Contributors

Types:

- <code><a href="./src/resources/repos/contributors.ts">Contributor</a></code>
- <code><a href="./src/resources/repos/contributors.ts">ContributorListResponse</a></code>

Methods:

- <code title="get /repos/{owner}/{repo}/contributors">client.repos.contributors.<a href="./src/resources/repos/contributors.ts">list</a>({ ...params }) -> ContributorListResponse</code>

## Tags

Types:

- <code><a href="./src/resources/repos/tags/tags.ts">Tag</a></code>
- <code><a href="./src/resources/repos/tags/tags.ts">TagListResponse</a></code>

Methods:

- <code title="get /repos/{owner}/{repo}/tags">client.repos.tags.<a href="./src/resources/repos/tags/tags.ts">list</a>({ ...params }) -> TagListResponse</code>

### ProtectionStates

Types:

- <code><a href="./src/resources/repos/tags/protection-states.ts">TagProtection</a></code>

Methods:

- <code title="post /repos/{owner}/{repo}/tags/protection">client.repos.tags.protectionStates.<a href="./src/resources/repos/tags/protection-states.ts">create</a>({ ...params }) -> TagProtection</code>
- <code title="delete /repos/{owner}/{repo}/tags/protection/{tag_protection_id}">client.repos.tags.protectionStates.<a href="./src/resources/repos/tags/protection-states.ts">delete</a>(tagProtectionId, { ...params }) -> void</code>

## Topics

Types:

- <code><a href="./src/resources/repos/topics.ts">Topic</a></code>

Methods:

- <code title="get /repos/{owner}/{repo}/topics">client.repos.topics.<a href="./src/resources/repos/topics.ts">list</a>({ ...params }) -> Topic</code>
- <code title="put /repos/{owner}/{repo}/topics">client.repos.topics.<a href="./src/resources/repos/topics.ts">replace</a>({ ...params }) -> Topic</code>

## Teams

Types:

- <code><a href="./src/resources/repos/teams.ts">Team</a></code>
- <code><a href="./src/resources/repos/teams.ts">TeamListResponse</a></code>

Methods:

- <code title="get /repos/{owner}/{repo}/teams">client.repos.teams.<a href="./src/resources/repos/teams.ts">list</a>({ ...params }) -> TeamListResponse</code>

## Languages

Types:

- <code><a href="./src/resources/repos/languages.ts">Language</a></code>

Methods:

- <code title="get /repos/{owner}/{repo}/languages">client.repos.languages.<a href="./src/resources/repos/languages.ts">list</a>({ ...params }) -> Language</code>

## LFS

Types:

- <code><a href="./src/resources/repos/lfs.ts">LFSEnableResponse</a></code>

Methods:

- <code title="delete /repos/{owner}/{repo}/lfs">client.repos.lfs.<a href="./src/resources/repos/lfs.ts">disable</a>({ ...params }) -> void</code>
- <code title="put /repos/{owner}/{repo}/lfs">client.repos.lfs.<a href="./src/resources/repos/lfs.ts">enable</a>({ ...params }) -> unknown</code>

## Codeowners

Types:

- <code><a href="./src/resources/repos/codeowners.ts">CodeownerError</a></code>

Methods:

- <code title="get /repos/{owner}/{repo}/codeowners/errors">client.repos.codeowners.<a href="./src/resources/repos/codeowners.ts">listErrors</a>({ ...params }) -> CodeownerErrorsErrorsPage</code>

## Pulls

Types:

- <code><a href="./src/resources/repos/pulls.ts">PullRequest</a></code>
- <code><a href="./src/resources/repos/pulls.ts">PullRequestSimple</a></code>
- <code><a href="./src/resources/repos/pulls.ts">PullListResponse</a></code>

Methods:

- <code title="post /repos/{owner}/{repo}/pulls">client.repos.pulls.<a href="./src/resources/repos/pulls.ts">create</a>({ ...params }) -> PullRequest</code>
- <code title="get /repos/{owner}/{repo}/pulls/{pull_number}">client.repos.pulls.<a href="./src/resources/repos/pulls.ts">retrieve</a>(pullNumber, { ...params }) -> PullRequest</code>
- <code title="patch /repos/{owner}/{repo}/pulls/{pull_number}">client.repos.pulls.<a href="./src/resources/repos/pulls.ts">update</a>(pullNumber, { ...params }) -> PullRequest</code>
- <code title="get /repos/{owner}/{repo}/pulls">client.repos.pulls.<a href="./src/resources/repos/pulls.ts">list</a>({ ...params }) -> PullListResponse</code>

## Git

### Refs

Types:

- <code><a href="./src/resources/repos/git/refs.ts">GitRef</a></code>

Methods:

- <code title="get /repos/{owner}/{repo}/git/ref/{ref}">client.repos.git.refs.<a href="./src/resources/repos/git/refs.ts">retrieve</a>(ref, { ...params }) -> GitRef</code>
- <code title="delete /repos/{owner}/{repo}/git/refs/{ref}">client.repos.git.refs.<a href="./src/resources/repos/git/refs.ts">delete</a>(ref, { ...params }) -> void</code>

# Users

Types:

- <code><a href="./src/resources/users/users.ts">PublicUser</a></code>
- <code><a href="./src/resources/users/users.ts">SimpleUser</a></code>
- <code><a href="./src/resources/users/users.ts">UserListResponse</a></code>

Methods:

- <code title="get /users">client.users.<a href="./src/resources/users/users.ts">list</a>({ ...params }) -> UserListResponse</code>

## Repos

Types:

- <code><a href="./src/resources/users/repos.ts">RepoListResponse</a></code>
- <code><a href="./src/resources/users/repos.ts">RepoListStarredResponse</a></code>
- <code><a href="./src/resources/users/repos.ts">RepoListWatchedResponse</a></code>

Methods:

- <code title="get /users/{username}/repos">client.users.repos.<a href="./src/resources/users/repos.ts">list</a>(username, { ...params }) -> RepoListResponse</code>
- <code title="get /users/{username}/starred">client.users.repos.<a href="./src/resources/users/repos.ts">listStarred</a>(username, { ...params }) -> RepoListStarredResponse</code>
- <code title="get /users/{username}/subscriptions">client.users.repos.<a href="./src/resources/users/repos.ts">listWatched</a>(username, { ...params }) -> RepoListWatchedResponse</code>
