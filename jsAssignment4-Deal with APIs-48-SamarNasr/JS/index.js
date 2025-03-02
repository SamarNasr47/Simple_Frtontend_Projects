let List = [];
let carts = [];
let searchIn = document.getElementById("searchp");
const pcontainer = document.querySelector(".Pcard");
const CartContainer = document.querySelector(".cartp");
const spn = document.querySelector('.num');
let elements = ``;
async function fetchProducts() {
    try {
        const response = await fetch("https://fakestoreapi.com/products");
        if (!response.ok) {
            throw new Error("Failed to fetch products");
        }
        List = await response.json();
        elements = ``;
        List.forEach(post => {
            elements += `
                <div class="col-lg-3 col-md-4 col-sm-6 col-12">
                    <div class="card my-2 bg-dark text-light" style="width: 18rem;">
                        <div class="card-body p-2">
                            <h3 class="card-id text-danger">${post.id}</h3>
                            <h4 class="card-category">${post.category}</h4>
                            <h5 class="card-titel">${post.title}</h5>
                            <img src="${post.image}" width="100" height="120">
                            <h6 class="card-price">${post.price}</h6>
                            <h6 class="card-rate">rate: ${post.rating.rate} -- count: ${post.rating.count}</h6>
                            <p class="card-description bg-success rounded px-2">${post.description}</p>
                            <button class="btn btn-primary" onclick="addToCART(${post.id})">Add to Cart</button>
                        </div>
                    </div>    
                </div>
            `;
        });
        pcontainer.innerHTML = elements;
    } catch (error) {
        console.error("Error:", error);
    }
}

function addToCART(id) {
    carts.push(id);
    localStorage.setItem('product', JSON.stringify(carts));
    let crt = JSON.parse(localStorage.getItem('product'));
    spn.innerHTML = 'Products number in cart:  ' + crt.length;
}

async function getANDdisplayCart() {
    if (List.length === 0) {
        await fetchProducts();
    }

    let CRproducts = [];
    let nItem = JSON.parse(localStorage.getItem('product')) || [];
    if (nItem.length > 0) {
        for (let i = 0; i < nItem.length; i++) {
            CRproducts.push(List.find((product) => product.id === nItem[i]));
        }
        let elem = ``;
    if (CRproducts.length === 0) {
        elem = `<p class="text-center text-warning">Your cart is empty.</p>`;
    } else {
        CRproducts.forEach(product => {
            elem += `
            <div class="col-lg-3 col-md-4 col-sm-6 col-12">
                <div class="card my-2 bg-dark text-light" style="width: 18rem;">
                    <div class="card-body p-2">
                        <h3 class="card-id text-danger">${product.id}</h3>
                        <h4 class="card-category">${product.category}</h4>
                        <h5 class="card-titel">${product.title}</h5>
                        <img src="${product.image}" width="100" height="120">
                        <h6 class="card-price">${product.price}</h6>
                        <h6 class="card-rate">rate: ${product.rating.rate} -- count: ${product.rating.count}</h6>
                        <p class="card-description bg-success rounded px-2">${product.description}</p>
                    </div>
                </div>    
            </div>
            `;
        });
    }
    CartContainer.innerHTML = elem;
    } else {
        CartContainer.innerHTML = '<p class="text-center text-warning">Your cart is empty.</p>';
    }
}
fetchProducts();
