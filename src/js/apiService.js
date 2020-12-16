const fetchImages = (query, page, API_KEY) => {
    let URL = `https://pixabay.com/api/?key=${API_KEY}&image_type=photo&orientation=horizontal&q=${query}&page=${page}&per_page=12`;
    return fetch(URL)
        .then(response => {
            if (response.status === 200) {
                return response.json()
            }
        }).then(data => {
            return data.hits;
        })


}
export default fetchImages