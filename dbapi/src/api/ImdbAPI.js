export class ImdbAPI {
    apiKey = 'efa13aa52f769cb1853dfd3b374171ad';
    url = 'https://api.themoviedb.org/3/'

    async testMadMax() {
        try {
            let response = await fetch(`${this.url}movie/76341?
api_key=${this.apiKey}`);
            if (response.ok)
                return await response.json();
        } catch (err) {
            console.log(err);
        }
    }

    async getNowPlaying(pageNum) {
        throw Error('Not Implemented');
//         try {
//             let response = await fetch(`${this.url}discover/movie?
// api_key=${this.apiKey}
// &primary_release_date.gte=2020-01-01
// &primary_release_date.lte=2020-03-01`);
//             if (response.ok)
//                 return await response.json();
//         } catch (err) {
//             console.log(err);
//         }
    }

    async getUpcoming(pageNum) {
        throw Error('Not Implemented');
    }

    async getTopRated(pageNum) {
        throw Error('Not Implemented');
    }

    async getPopular(pageNum) {
        throw Error('Not Implemented');
    }

    async searchMovies(query, pageNum) {
        throw Error('Not Implemented');
        try {
            let response = await fetch(`${this.url}search?
api_key=${this.apiKey}`);
        } catch (err) {
            console.log(err);
        }
    }
}