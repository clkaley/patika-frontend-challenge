const menu = [{
        id: 1,
        title: "Tteokbokki",
        category: "Korea",
        price: 10.99,
        img: "https://twoplaidaprons.com/wp-content/uploads/2020/09/tteokbokki-top-down-view-of-tteokbokki-in-a-bowl-500x500.jpg",
        desc: `Spicy rice cakes, serving with fish cake.`,
    },
    {
        id: 2,
        title: "Chicken Ramen",
        category: "Japan",
        price: 7.99,
        img: "https://www.forkknifeswoon.com/wp-content/uploads/2014/10/simple-homemade-chicken-ramen-fork-knife-swoon-01.jpg",
        desc: `Chicken noodle soup, serving with vegetables such as soy bean, green onion. In an optional you can ask for egg. `,
    },
    {
        id: 3,
        title: "Bibimbap",
        category: "Korea",
        price: 8.99,
        img: "https://dwellbymichelle.com/wp-content/uploads/2020/05/DWELL-bibimbap.jpg",
        desc: `Boiling vegetables, serving with special hot sauce`,
    },
    {
        id: 4,
        title: "Dan Dan Mian",
        category: "China",
        price: 5.99,
        img: "https://www.savingdessert.com/wp-content/uploads/2019/02/Dan-Dan-Noodles-10.jpg",
        desc: `Dan dan noodle, serving with green onion `,
    },
    {
        id: 5,
        title: "Yangzhou Fried Rice",
        category: "China",
        price: 12.99,
        img: "https://salu-salo.com/wp-content/uploads/2013/02/Yangzhou-Fried-Rice1.jpg",
        desc: `Yangzhou style fried rice, serving with bean and pickles `,
    },
    {
        id: 6,
        title: "Onigiri",
        category: "Japan",
        price: 9.99,
        img: "https://www.manusmenu.com/wp-content/uploads/2017/08/Onigiri-3-1-of-1.jpg",
        desc: `Rice Sandwich, serving with soy sauce`,
    },
    {
        id: 7,
        title: "Jajangmyeon",
        category: "Korea",
        price: 15.99,
        img: "https://www.curiouscuisiniere.com/wp-content/uploads/2020/04/Jajangmyeon-Korean-Noodles-in-Black-Bean-Sauce5.1200H-720x540.jpg",
        desc: `Black bean sauce noodle, serving with green onion `,
    },
    {
        id: 8,
        title: "Ma Yi Shang Shu",
        category: "China",
        price: 12.99,
        img: "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/F688C2F6-86EC-46C4-B9C7-A6BA01DF7437/Derivates/32E3E72A-F786-406D-AF7F-B30980A9AC6C.jpg",
        desc: `Hot pepper sauce noodle, serving with soy bean and onion`,
    },
    {
        id: 9,
        title: "Doroyaki",
        category: "Japan",
        price: 3.99,
        img: "https://www.justonecookbook.com/wp-content/uploads/2011/10/Dorayaki-New-500x400.jpg",
        desc: `Red bean paste dessert, serving with honey.`,
    },
];


//selectors
const sectionCenter = document.querySelector('.section-center') //içerik
const buttonContainer = document.querySelector('.btn-container') //buton


//function
function showItems(menuItems) {
    let showMenu = menuItems.map(function(item) {
        return `<div class="menu-items col-lg-6">
            <img src=${item.img} alt=${item.title} class="photo" />
            <div class="menu-info">
              <div class="menu-title">
                <h4>${item.title}</h4>
                <h4 class="price" >${item.price}</h4>
              </div>
              <p class="menu-text">
                ${item.desc}
              </p>
            </div>
          </div>`;
    });
    showMenu = showMenu.join("");
    sectionCenter.innerHTML = showMenu; //section içine menuyu ekleme
}

//fonksiyonu çalıştırma
showItems(menu);



const allbuton=document.createElement("button");
allbuton.classList.add("btn","btn-outline-dark","btn-item");
allbuton.innerHTML="All";
buttonContainer.appendChild(allbuton);

const koreabuton=document.createElement("button");
koreabuton.classList.add("btn","btn-outline-dark","btn-item");
koreabuton.innerHTML="Korea";
buttonContainer.appendChild(koreabuton);

const japanbuton=document.createElement("button");
japanbuton.classList.add("btn","btn-outline-dark","btn-item");
japanbuton.innerHTML="Japan";
buttonContainer.appendChild(japanbuton);

const chinabuton=document.createElement("button");
chinabuton.classList.add("btn","btn-outline-dark","btn-item");
chinabuton.innerHTML="China";
buttonContainer.appendChild(chinabuton);



koreabuton.addEventListener("click",koreaFoods );
chinabuton.addEventListener("click",chinaFoods );
japanbuton.addEventListener("click",japanFoods );
allbuton.addEventListener("click",allFoods );



//butonları kategoriye göre filtreleme
function koreaFoods(){
    const korea = menu.filter(item => item.category === "Korea");
    showItems(korea);   
}


function chinaFoods(){
    const china = menu.filter(item => item.category === "China");
    showItems(china);   
}


function japanFoods(){
    const japan = menu.filter(item => item.category === "Japan");
    showItems(japan);   
}


function allFoods(){
    const all = menu.filter(item => item.category === "Japan" || item.category === "China" ||  item.category === "Korea");
    showItems(all);
}





//const all = menu.filter(item => item.category === "Japan" || item.category === "China" ||  item.category === "Korea");
//console.log(all);

//const japan = menu.filter(item => item.category === "Japan");
//console.log(japan);

//const china = menu.filter(item => item.category === "China");
//console.log(china);

//const korea = menu.filter(item => item.category === "Korea");
//console.log(korea);


//buton category işlemi 
/*menu.forEach(function (item) {
    const btn = document.createElement("button");
    btn.innerHTML = item.category;
    buttonContainer.appendChild(btn).classList.add('btn', 'btn-outline-dark','btn-item');
  })
  */