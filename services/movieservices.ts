class MovieService {
    private readonly apiUrl = 'http://www.omdbapi.com/?i=tt3896198&apikey=48a629b4'; // Replace with your API URL

    async getMovies() {
        const response = await fetch(this.apiUrl);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return await response.json();
    }
}

export default new MovieService();