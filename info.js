window.addEventListener('DOMContentLoaded', main);
const list =['milk','eggs','bay leaf'];
function main() { //executing after page load
    const form = document.querySelector('form'); //reference form element
    form.addEventListener('submit', handleSubmit) //add listener to when form submitted
    const sortBtn = document.querySelector('.btn-secondary');
    sortBtn.addEventListener('click', handleSort);
    render();
}

function handleSort(){
    list.sort();
    render();
}

function handleSubmit(event){    
    event.preventDefault();
    let formData = new FormData(event.target); //Making the input accessible to js
    let itemObj = Object.fromEntries(formData); //converts form data to object
    list.push(itemObj.item);
    render();
    event.target.reset();
}

function generateItemHtml(item){
    return `<li><strong>${item}</strong></li>`
}

function render(){
    let itemsUl = document.querySelector('ul.items');
    let buildHtml = list.map(generateItemHtml);
    itemsUl.innerHTML = buildHtml.join('');
}
