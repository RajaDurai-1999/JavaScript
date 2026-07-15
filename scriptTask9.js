// 1

// const products = [
//     {
//         id:1,
//         title:"Laptop",
//         price:60000
//     },
//     {
//         id:2,
//         title:"Mobile",
//         price:25000
//     },
//     {
//         id:3,
//         title:"Keyboard",
//         price:1200
//     },
//     {
//         id:4,
//         title:"Mouse",
//         price:800
//     },
//     {
//         id:5,
//         title:"Monitor",
//         price:15000
//     }
// ];

// const productList = document.getElementById("productList");
// const search = document.getElementById("search");

// function displayProducts(items){

//     if(items.length===0){
//         productList.innerHTML="<h3>No Products Found</h3>";
//         return;
//     }
//     productList.innerHTML="";

//     items.forEach(product=>{

//         productList.innerHTML += `
//         <div class="card">
//             <h3>${product.title}</h3>
//             <p>Price : ₹${product.price}</p>
//         </div> `;
//     });
// }
// displayProducts(products);

// search.addEventListener("keyup",function () {
//     let keyword=search.value.toLowerCase();
//     let filteredProducts=products.filter(product=>{
//         return product.title.toLowerCase().includes(keyword)
//     })
//     displayProducts(filteredProducts);

// })

// 2

// const products = [

// {
// title:"T-Shirt",
// price:800,
// category:"Men's Clothing"
// },

// {
// title:"Shirt",
// price:1200,
// category:"Men's Clothing"
// },

// {
// title:"Saree",
// price:2500,
// category:"Women's Clothing"
// },

// {
// title:"Handbag",
// price:1800,
// category:"Women's Clothing"
// },

// {
// title:"Gold Ring",
// price:15000,
// category:"Jewelery"
// },

// {
// title:"Necklace",
// price:25000,
// category:"Jewelery"
// },

// {
// title:"Laptop",
// price:65000,
// category:"Electronics"
// },

// {
// title:"Mobile",
// price:25000,
// category:"Electronics"
// }
// ];

// const productList = document.getElementById("productList");

// function displayProducts(items){

//     productList.innerHTML="";

//     items.forEach(product=>{

//         productList.innerHTML +=`

//         <div class="card">

//         <h3>${product.title}</h3>

//         <p>Price : ₹${product.price}</p>

//         <p>${product.category}</p>

//         </div>

//         `;

//     });

// }

// displayProducts(products);

// function filterCategory(category){

//     if(category==="All"){

//         displayProducts(products);

//         return;

//     }

//     let filteredProducts=products.filter(product=>{

//         return product.category===category;

//     });

//     displayProducts(filteredProducts);

// }

// 3

// const products = [

// {
// title:"Laptop",
// price:60000
// },

// {
// title:"Mobile",
// price:25000
// },

// {
// title:"Keyboard",
// price:1200
// },

// {
// title:"Mouse",
// price:800
// },

// {
// title:"Monitor",
// price:15000
// }

// ];
// const productList = document.getElementById("productList");

// function displayProducts(items){

//     productList.innerHTML="";

//     items.forEach(product=>{

//         productList.innerHTML += `

//         <div class="card">

//             <h3>${product.title}</h3>

//             <p>Price : ₹${product.price}</p>

//         </div>

//         `;

//     });

// }
// displayProducts(products);

// function sortLowToHigh(){

//     let sortedProducts=[...products];

//     sortedProducts.sort((a,b)=>{

//         return a.price-b.price;

//     });

//     displayProducts(sortedProducts);

// }

// function sortHighToLow(){

//     let sortedProducts=[...products];

//     sortedProducts.sort((a,b)=>{

//         return b.price-a.price;

//     });

//     displayProducts(sortedProducts);

// }

// 4

// const products = [

// {
//     id:1,
//     title:"Laptop",
//     description:"Powerful laptop for office work and gaming.",
//     price:65000,
//     rating:4.8,
//     category:"Electronics",
//     image:"https://picsum.photos/id/180/300/200"
// },

// {
//     id:2,
//     title:"Headphone",
//     description:"Wireless noise cancelling headphone.",
//     price:3500,
//     rating:4.5,
//     category:"Electronics",
//     image:"https://picsum.photos/id/29/300/200"
// },

// {
//     id:3,
//     title:"Watch",
//     description:"Smart watch with health tracking.",
//     price:4500,
//     rating:4.4,
//     category:"Accessories",
//     image:"https://picsum.photos/id/1062/300/200"
// }

// ];

// const productList = document.getElementById("productList");
// const modal = document.getElementById("modal");
// const modalBody = document.getElementById("modalBody");
// const close = document.getElementById("close");

// function displayProducts(){

//     productList.innerHTML = "";

//     products.forEach(product=>{

//         productList.innerHTML += `

//         <div class="card" data-id="${product.id}">

//             <img src="${product.image}">

//             <h3>${product.title}</h3>

//             <p>₹${product.price}</p>

//         </div>

//         `;

//     });

// }

// displayProducts();

// productList.addEventListener("click",function(e){

//     const card = e.target.closest(".card");

//     if(!card){

//         return;

//     }

//     const id = Number(card.dataset.id);

//     const product = products.find(item=>item.id===id);

//     modal.style.display = "block";

//     modalBody.innerHTML = `

//         <img src="${product.image}">

//         <h2>${product.title}</h2>

//         <p>${product.description}</p>

//         <p><b>Price :</b> ₹${product.price}</p>

//         <p><b>Rating :</b> ${product.rating}</p>

//         <p><b>Category :</b> ${product.category}</p>

//     `;

// });

// close.addEventListener("click",function(){

//     modal.style.display = "none";

// });

// window.addEventListener("click",function(e){

//     if(e.target===modal){

//         modal.style.display="none";

//     }

// });

// 5

const products = [

{
    id:1,
    title:"Laptop",
    price:60000
},

{
    id:2,
    title:"Mobile",
    price:25000
},

{
    id:3,
    title:"Mouse",
    price:800
},

{
    id:4,
    title:"Keyboard",
    price:1200
}

];

let cart = [];

const productList = document.getElementById("productList");
const cartItems = document.getElementById("cartItems");
const cartCount = document.getElementById("cartCount");
const grandTotal = document.getElementById("grandTotal");

function displayProducts(){

    productList.innerHTML = "";

    products.forEach(product=>{

        productList.innerHTML += `

        <div class="card">

            <h3>${product.title}</h3>

            <p>₹${product.price}</p>

            <button onclick="addToCart(${product.id})">

                Add To Cart

            </button>

        </div>

        `;

    });

}


displayProducts();

function addToCart(id){

    let item = cart.find(product=>product.id===id);

    if(item){

        item.quantity++;

    }

    else{

        let product = products.find(product=>product.id===id);

        cart.push({

            id:product.id,

            title:product.title,

            price:product.price,

            quantity:1

        });

    }

    displayCart();

}

function displayCart(){

    cartItems.innerHTML="";

    cart.forEach(item=>{

        cartItems.innerHTML += `

        <p>

        Product :
        ${item.title}

        |

        Qty :
        ${item.quantity}

        |

        Total :
        ₹${item.price * item.quantity}

        </p>

        `;

    });

    cartCount.innerHTML = cart.length;

    let total = cart.reduce((sum,item)=>{

        return sum + (item.price * item.quantity);

    },0);

    grandTotal.innerHTML =

    "Grand Total : Rs." + total;

}

