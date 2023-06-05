const rootElement = document.querySelector('#root');

function render({title, price}) {
    const titleElement = document.createElement('p');
    const priceElement = document.createElement('p');
    const container = document.createElement('div');
 
    container.classList.add('container');

    titleElement.innerText = title;
    priceElement.innerText = price + ' $';

    container.append(titleElement, priceElement);
    rootElement.append(container);
  }

function getProducts(id) {
  fetch('https://fakestoreapi.com/products/' + id)
    .then(resp => resp.json())
    .then(data => render(data));
}

getProducts(1);
getProducts(2);
getProducts(3);
getProducts(4);
getProducts(5);
getProducts(6);
getProducts(7);
getProducts(8);
getProducts(9);