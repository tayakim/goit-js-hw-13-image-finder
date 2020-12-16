import './styles.css';
import fetchImages from './js/apiService.js'
import addToMarkup from './js/addToMarkup.js';
import refs from './js/refs.js';


const API_KEY = `19539916-67a6db161f09ee9bfd5c70184`;
// let URL = `https://pixabay.com/api/?key=${API_KEY}&q=yellow+flowers&image_type=photo&orientation=horizontal&q=что_искать&page=номер_страницы&per_page=12`;

// https: //pixabay.com/api/?image_type=photo&orientation=horizontal&q=что_искать&page=номер_страницы&per_page=12&key=твой_ключ


let inputValue = '';
let page = 1;
refs.button.style.display = 'none';


const getSubmit = (ev) => {
    ev.preventDefault();
    refs.imgList.innerHTML = '';
    inputValue = ev.target.elements.query.value;

    if (inputValue.length > 0) {
        fetchImages(inputValue, page, API_KEY)
            .then(images => {
                if (Object.keys(images).length > 0) {

                    addToMarkup(images);
                    refs.button.style.display = 'block';
                } else {
                    console.log('no results'); //можно добавить pnotify.error()
                }

            }).catch(err =>
                console.log(err))
    }
}


refs.form.addEventListener('submit', getSubmit)

const showMore = () => {
    page += 1
    fetchImages(inputValue, page, API_KEY)
        .then(images => {
            console.log(images)
            addToMarkup(images)
            window.scrollTo({

                top: document.documentElement.offsetHeight - 2700,
                behavior: 'smooth'
            });
        }).catch(err => console.log(er))


}




refs.button.addEventListener('click', showMore)