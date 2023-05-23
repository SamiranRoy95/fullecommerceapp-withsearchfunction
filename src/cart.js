
let label = document.getElementById("label")
let shoppingCart = document.getElementById("shopping")
// console.log(showData)
let basket = JSON.parse(localStorage.getItem("data")) || []




let calculation = () => {

    let cartIcon = document.getElementById("cartAmount").innerHTML = basket.map((x) => x.item).reduce((a, b) => a + b, 0);


}
calculation();

let generateCartItems = () => {
    if (basket.length !== 0) {
        shoppingCart.innerHTML = basket.map((x) => {
            console.log(x)
            let { id, item } = x;

            let search = showData.find((y) => y.id == id) || [];

            return `
        <div class="cart-item"> 
             <img width="70px" src=${search.image} alt=""/>
             <div class="details">
                <div class="title-price-x">
                    <h4 class="title-price">
                        <p>${search.name}</p>
                        <p class="cart-item-price">$ ${search.price}</p>
                    </h4>
                    <i  onClick=removeItem(${id}) class="bi bi-x-lg"></i>
                </div>
                <div class="shopping__Btn">
                    <i onClick="decrement(${id})" class="bi bi-dash"></i>
                    <div class="quantity" id=${id}>${item}</div>
                    <i  onClick= "increment(${id})" class="bi bi-plus-lg"></i>
                </div>
                <h3>$ ${item * search.price}</h3>
            </div>
        </div>
        `
        }).join(" ")

    } else {

        shoppingCart.innerHTML = ``;
        label.innerHTML = `
    <h2>Cart is Empty</h2>
    <a href="index.html">
   <button class="homeBtn">Back to Home</button> 
    </a>
    `
    }

}
generateCartItems();


let increment = (id) => {
    let selectedItem = id;
    let search = basket.find((x) => x.id == id)
    if (search === undefined) {
        basket.push({
            id: selectedItem,
            item: 1
        })

    } else {
        search.item += 1;
    }

    // console.log(basket)
    // console.log(selectedItem)
    generateCartItems();
    update(id)
    localStorage.setItem("data", JSON.stringify(basket))

}


let decrement = (id) => {

    let selectedItem = id;
    let search = basket.find((x) => x.id == id)
    if (search === undefined) return;
    else if (search.item === 0) return;
    else {
        search.item -= 1;
    }

    update(id)
    basket = basket.filter((x) => x.item !== 0)

    //     console.log(basket)
    // console.log(selectedItem)
    generateCartItems();
    localStorage.setItem("data", JSON.stringify(basket))
}

let update = (id) => {

    let search = basket.find((x) => x.id == id)
    document.getElementById(id).innerHTML = search.item;
    // console.log(search.item)
    calculation()
    TotalAmount()


}

let removeItem = (id) => {

    let selectedId = id;
    // console.log(selectedId)
    basket = basket.filter((x) => x.id !== selectedId)
    generateCartItems();
    TotalAmount()
    calculation()

    localStorage.setItem("data", JSON.stringify(basket))
}

let clearCart = () => {
    basket = []
    generateCartItems();
    calculation()
    localStorage.setItem("data", JSON.stringify(basket))

}
let TotalAmount = () => {
    if (basket.length !== 0) {

        let amount = basket.map((x) => {
            let { item, id } = x;
            let search = showData.find((y) => y.id == id) || [];
            console.log(search.price)
            return item * search.price;


        }).reduce((a, b) => a + b, 0)

        console.log(amount)
        label.innerHTML = `
        <h2> Total Bill : $ ${amount}</h2>
        <button class="checkout" >Checkout</button>
        <button onClick= "clearCart()" class="removeall" >Clear Cart</button>
        `

    } else return;
}

TotalAmount()




