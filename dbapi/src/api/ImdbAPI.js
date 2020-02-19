export class ImdbAPI {
    apiKey = 'efa13aa52f769cb1853dfd3b374171ad';
    url = 'https://api.themoviedb.org/3/'

    async testMadMax() {
        try {
            let response = await fetch(this.url + 'movie/76341?api_key=' + this.apiKey)
            if (response.ok)
                return await response.json();
        } catch (err) {
            console.log(err);
        }
    }
}