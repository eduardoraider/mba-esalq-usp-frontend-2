let products = []
let endpoint = 'https://raw.githubusercontent.com/guilhermeonrails/api-frontend/main/produtos.json'
let elementToInsertProducts = document.getElementById('products__list')

// Call the function and handle the promise
fetchProductsFromAPI().catch(error => console.error('Error fetching products:', error));

async function fetchProductsFromAPI() {
    try {
        let res = await fetch(endpoint);
        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
        }
        products = await res.json();
        displayProducts(products);
    } catch (error) {
        console.error('Error in fetchProductsFromAPI:', error);
    }
}

function displayProducts(products) {
    products.forEach(product => {
        elementToInsertProducts.innerHTML += `
        <li class="products__item">
            <div class="products__content">
                <img src="${product.img}" alt="${product.nome}">
                <div class="products__info">
                    <h3>${product.nome}</h3>
                    <p>${product.descricao}</p>
                    <h4>R$${product.valorComDesconto}<s>R$${product.valorSemDesconto}</s></h4>
                    <p>${product.tipoEntrega}</p>
                </div>
            </div>
        </li>
        `
    })
}
