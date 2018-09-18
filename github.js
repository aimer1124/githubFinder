class Github {
  constructor() {
    this.client_id = 'a9d77689ba82525e52c5';
    this.client_secret = 'bacb5847f637e15b5d7692949bdbbaa7c22d455e';
    this.repos_count = 5;
    this.repos_sort = 'created:asc';
  }

  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const reposResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profile = await profileResponse.json();
    const repos = await reposResponse.json();

    return {
      profile,
      repos
    }
  }
}