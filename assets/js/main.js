const products = [
    {
        id: 1,
        title: "Потужноноутбук 16 Pro",
        price: 69676,
        category:"Ноутбуки",
        image: "https://i.pinimg.com/736x/bb/fb/7f/bbfb7fe28b2bb34337d98a2a4c5508d6.jpg",
    },
    {
        id: 2,
        title: "Потужнофон 16 Pro",
        price: 67676,
        category: "Смартфони",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOIWZAK8ueoMCZ7XHj19uyZoEJazWsNdbMXg&s",
    },
    {
        id: 3,
        title: "Потужновушники Ptzhn F3",
        price: 6767,
        category: "Навушники",
        image: "https://i.pinimg.com/736x/e0/dc/68/e0dc684f2b8b387a9ba0756cf8c4628f.jpg",
    },
    {
        id: 4,
        title: "ПотужноПК Ptzhn Station",
        price:126767,
        category: "Комп'ютери",
        image: "https://i.pinimg.com/736x/e3/16/d1/e316d1eea271886f136efdd3491bd483.jpg"
    },
    {
        id: 5,
        title: "Потужномонітор 67 Vision",
        price:26767,
        category:"Монітори",
        image: "https://i.pinimg.com/736x/99/08/d1/9908d17481995e266c04dff93723ca7d.jpg"
    },
    {
        id:6,
        title: "Потужномиша Ptzhn Click",
        price:3676,
        category: "Периферія",
        image: "https://i.pinimg.com/736x/af/8a/ea/af8aea4de1bcb579f371763d18538117.jpg"
    }   
]

let cart = [];
const container = document.querySelector(".products-grid");
const htmlString = products
  .map((product) => {
    return `
        <article class="product-card">
            <img src="${product.image}" alt="${product.title}" class="product-img">
            <h3>${product.title}</h3>
            <p class="price">${product.price} грн</p>
            <button class="btn btn-buy" data-id="${product.id}">Купити</button>
        </article>
    `;
  })
  .join("");
container.innerHTML = htmlString;

container.addEventListener("click", (event) => {
    if (event.target.classList.contains("btn-buy")) {
        const productId = Number(event.target.dataset.id);
        const selectedProduct = products.find((p) => p.id === productId);
        addToCart(selectedProduct);
  }
});

function addToCart(product) {
    const existingItem = cart.find((item) => item.id === product.id)

    if (existingItem) {
        existingItem.quantity += 1;
        
    }   else {
        cart.push({...product, quantity: 1});
    }
    

    updateUI();
}

function calculateTotal() {
  return cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );
}

function updateUI() {
    const cartCounter = document.querySelector(".cart-counter");
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    if  (cartCounter){
    cartCounter.textContent = totalItems;
    }
    console.log("Поточний кошик:", cart);
    console.log("Загальна сума:", calculateTotal(), "грн");
}
