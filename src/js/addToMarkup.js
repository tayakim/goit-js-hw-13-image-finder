import refs from './refs.js';
import template from '../template/template.hbs';

const updateMarkup = (img) => {
    let markup = template(img)
    refs.imgList.insertAdjacentHTML('beforeend', markup)

}

export default updateMarkup;