

const wrapper=document.querySelector('.sliderWrapper')
const menuItems=document.querySelectorAll('.menuItem')


const products = [
    {
        id: 1,
        title: "Dior",
        price: 119,
        colors: [
        {
            code: "black",
            img: "images/D1.png",
        },
        {
            code: "lightpink",
            img: "images/D2.png",
        },
        ],
    },
    {
        id: 2,
        title: "Channel",
        price: 149,
        colors: [
        {
            code: "black",
            img: "images/C1.png",
        },
        {
            code: "lightblue",
            img: "images/C2.png",
        },
        ],
    },
    {
        id: 3,
        title: "Gucci",
        price: 109,
        colors: [
        {
            code: "lightgray",
            img: "images/G1.png",
        },
        {
            code: "wheat",
            img: "images/G2.png",
        },
        ],
    },
    {
        id: 4,
        title: "Prada",
        price: 129,
        colors: [
        {
            code: "pink",
            img: "images/P1.png",
        },
        {
            code: "aqua",
            img: "images/P2.png",
        },
        ],
    },
    {
        id: 5,
        title: "Bvlgari",
        price: 99,
        colors: [
        {
            code: "green",
            img: "images/B1.png",
        },
        {
            code: "black",
            img: "images/B2.png",
        },
        ],
    },
    ];


    let choosenProduct = products[0];

    const currentProductImg = document.querySelector(".productImg");
    const currentProductTitle = document.querySelector(".productTitle");
    const currentProductPrice = document.querySelector(".productPrice");
    const currentProductColors = document.querySelectorAll(".color");
    



menuItems.forEach((item,index)=>{
    item.addEventListener('click',()=>{
        wrapper.style.transform=`translateX(${-100 *index}vw)`;

        choosenProduct = products[index];

        currentProductTitle.textContent = choosenProduct.title;
        currentProductPrice.textContent = "$" + choosenProduct.price;
        currentProductImg.src = choosenProduct.colors[0].img;


        currentProductColors.forEach((color, index) => {
            color.style.backgroundColor = choosenProduct.colors[index].code;
        });



    })
})



currentProductColors.forEach((color, index) => {
    color.addEventListener("click", () => {
        currentProductImg.src = choosenProduct.colors[index].img;
    });
});




const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
    payment.style.display = "flex";
});

close.addEventListener("click", () => {
    payment.style.display = "none";
});



