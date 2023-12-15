// get elements from the HTML
const addBtn = document.querySelector('#submit-btn');
const tableBody = document.querySelector('#product-table tbody');
const clearBtn = document.querySelector('#clear-btn');

// get form by name
const form = document.forms.creationForm;
// get input by name
const nameIn = form.elements.name;
const priceIn = form.elements.price;
const statusCb = form.elements.status;

// products collection
const products = [];

// --------------- Product class
class Product {
    static initial = 10;

    constructor(name, price, status) {
        this.name = name;
        this.price = price;
        this.status = status;
        // set ID value
        this.id = Product.initial++;
    }

    get statusName() {
        return this.status ? "In Stock" : "Out of Stock";
    }
}

// add event listener
addBtn.onclick = (event) => {
    // add new product item

    // prevent default logic
    event.preventDefault();

    // input.value - entered input value 
    // checkbox.checked - checkbox status

    // const product = {
    //     id: 0,
    //     name: nameIn.value,
    //     price: priceIn.value,
    //     status: statusCb.checked
    // };

    const product = new Product(nameIn.value, priceIn.value, statusCb.checked);

    // add new item to array
    products.push(product);
    // add new item to table
    addProductToTable(product);
}

clearBtn.onclick = () => {
    tableBody.innerHTML = '';
    products.splice(0);
}

function addProductToTable(item) {
    tableBody.innerHTML += `<tr>
                                <td>${item.id}</td>
                                <td>${item.name}</td>
                                <td>${item.price}</td>
                                <td>${item.statusName}</td>
                            </tr>`;
}
