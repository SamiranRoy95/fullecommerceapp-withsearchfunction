

let shop=document.getElementById("shop");
let cartAmount= document.getElementById("cartAmount");
let searchBar=document.getElementById("searchbar")





let showData=[

    { image:"image/pexels-1.jpeg",id:1,name:"Shari",price:100,des:"This is awesome Shari"},
    { image:"image/pexels-2.jpeg",id:2,name:"Girls Tshirt",price:200, des:"This is awesome Tshirt"},
    { image:"image/pexels-3.jpeg",id:3,name:"Bikini",price:300, des:"This is awesome Bikini"},
    { image:"image/pexels-4.jpeg",id:4,name:"Boys Hudi",price:400, des:"This is awesome Boys Hudi"},
    { image:"image/pexels-5.jpeg",id:5,name:"Boys Shoe",price:500, des:"This is Boys Shoe"},
    
];

//  let searchIem=[]

//  console.log(searchIem)
// console.log(search)
// search.addEventListener("keyup",(e)=>{
//    console.log(e.target.value.toLowerCase())
// })

    
  


let basket= JSON.parse(localStorage.getItem("data")) || []

let generateShop=()=>{

    return (shop.innerHTML=showData.map((x)=>{

        let {image,id,price,des,name}=x;
        let search =basket.find((x)=>x.id==id) || []
        // console.log(x);

        return `
        
        <div class="item">
            <div class="img__div">
                <img width="220px" src=${image} />
            </div>
            <div class="item__content">
                <h2>${name}</h2>
                <p>${des}</p>
                
            </div>
            <div class="price__quantity">
                <h3 class="price__pro">$ ${price}</h3>
                <div class="btn">
                    <i onClick="decrement(${id})" class="bi bi-dash"></i>
                    <div class="quantity" id=${id}>${search.item===undefined? 0 :search.item}</div>
                    <i  onClick= "increment(${id})" class="bi bi-plus-lg"></i>
                </div>
            </div>
        </div>
        
        `

    }).join(""));
}

 generateShop()


function search(){
    let filter =searchBar.value.toLowerCase();
   
    let item =document.querySelectorAll(".item");
    
    let itemTag=document.getElementsByTagName("h2")
    console.log(itemTag.length)
    for(var i= 0;i<=itemTag.length;i++){
        let a =item[i].getElementsByTagName("h2")[0];
        console.log(a)
        let value=a.innerHTML || a.innerText || a.textCont;
        if(value.toLowerCase().indexOf(filter)> -1){
            item[i].style.display="";
        }else{
            item[i].style.display="none"
        }
    }
}


 let increment =(id)=>{
    let selectedItem=id;
    let search =basket.find((x)=>x.id==id)
    if(search===undefined){
        basket.push({
            id:selectedItem,
            item:1
        })

    }else{
        search.item+=1;
    }
   
    // console.log(basket)
// console.log(selectedItem)
localStorage.setItem("data", JSON.stringify(basket))
update(id)
 }
 

 let decrement =(id)=>{

    let selectedItem=id;
    let search =basket.find((x)=>x.id==id)
    if(search===undefined) return;
    else if(search.item===0) return ;
         else{
        search.item-=1;
    }
    
    update(id)
    basket= basket.filter((x)=>x.item!==0)
   
//     console.log(basket)
// console.log(selectedItem)

localStorage.setItem("data", JSON.stringify(basket))
 }

 let update =(id)=>{

    let search =basket.find((x)=>x.id==id)
    document.getElementById(id).innerHTML=search.item;
    // console.log(search.item)
    calculation()

 }


 let calculation =()=>{

    let cartIcon =document.getElementById("cartAmount").innerHTML=basket.map((x)=>x.item).reduce((a,b)=>a+b,0);
    

 }
 calculation()


 


