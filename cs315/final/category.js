"use strict";
/*eslint-disable */
const productsArr = [
    {
        name: "Sapiens: A Brief History of Humankind Audible Audiobook – Unabridged Yuval Noah Harari(Author), Derek Perkins(Narrator), HarperAudio(Publisher)",
        category: "Books",
        quantity: 3,
        image: "<img class='card-img-top' name='book1' src='./photos/sapiens.jpeg' alt='Card image cap' onclick='productPageImage(this)'>",
        rating: "<img src='./photos/rating5.png' alt='Card image cap'>",
        price: 18.49,
        ratingNum: 5,
        id: 'book1'
    },
    {
        name: "Story Genius: How to Use Brain Science to Go Beyond Outlining and Write a Riveting Novel (Before You Waste Three Years Writing 327 Pages That Go Nowhere)",
        category: "Books",
        quantity: 2,
        image: "<img class='card-img-top' name='book2' src='./photos/storyGenius.jpg' alt='Card image cap' onclick='productPageImage(this)'>",
        rating: "<img src='./photos/rating4.png' alt='Card image cap'>",
        price: 13.79,
        ratingNum: 4,
        id: 'book2'
    },
    {
        name: "A Brief History of Time Paperback – Illustrated, ",
        category: "Books",
        quantity: 4,
        image: "<img class='card-img-top' name='book3' src='./photos/aBriefHistory.jpg' alt='Card image cap' onclick='productPageImage(this)'>",
        rating: "<img src='./photos/rating4prime.png' alt='Card image cap'>",
        price: 15.44,
        ratingNum: 4,
        id: 'book3'
    },
    {
        name: "The Shining Mass Market Paperback – June 26, 2012",
        category: "Books",
        quantity: "<img src='./photos/rating5.png' alt='Card image cap'>",
        image: "<img class='card-img-top' name='book4' src='./photos/theShining.jpg' alt='Card image cap' onclick='productPageImage(this)'>",
        rating: "<img src='./photos/rating5.png' alt='Card image cap'>",
        price: 11.49,
        ratingNum: 5,
        id: 'book4'
    },
    {
        name: "Dune (Dune Chronicles, Book 1) Paperback – August 2",
        category: "Books",
        quantity: 10,
        image: "<img class='card-img-top' name='book5' src='./photos/dube.jpg' alt='Card image cap' onclick='productPageImage(this)'>",
        rating: "<img src='./photos/rating5.png' alt='Card image cap'>",
        price: 20.79,
        ratingNum: 4,
        id: 'book5'
    },
    {
        name: "Soundcore by Anker Life Q30 Hybrid Active Noise Cancelling Headphones with Multiple Modes, Hi-Res Sound, Custom EQ via App, 40H Playtime, Comfortable Fit, Bluetooth Headphones, Multipoint Connection",
        category: "Electronics",
        quantity: 15,
        image: "<img class='card-img-top' name='elec1' src='./photos/soundCore.jpg' alt='Card image cap' onclick='productPageImage(this)'>",
        rating: "<img src='./photos/rating4.png' alt='Card image cap'>",
        price: 154.79,
        ratingNum: 3,
        id: 'elec1'
    },
    {
        name: "Beats Studio3 Wireless Noise Cancelling Over-Ear Headphones - Apple W1 Headphone Chip, Class 1 Bluetooth, 22 Hours of Listening Time, Built-in Microphone - Matte Black (Latest Model)",
        category: "Electronics",
        quantity: 8,
        image: "<img class='card-img-top' name='elec2'  src='./photos/beats.jpg' alt='Card image cap' onclick='productPageImage(this)'>",
        rating: "<img src='./photos/rating4prime.png' alt='Card image cap'>",
        price: 259.79,
        ratingNum: 4,
        id: 'elec2'
    },
    {
        name: "Apple AirPods Pro",
        category: "Electronics",
        quantity: 7,
        image: "<img class='card-img-top' name='elec3'  src='./photos/airpods.jpg' alt='Card image cap' onclick='productPageImage(this)'>",
        rating: "<img src='./photos/rating5.png' alt='Card image cap'>",
        price: 200.79,
        ratingNum: 5,
        id: 'elec3'
    },
    {
        name: "Apple Iphone X, 256GB, Space Gray - Fully Unlocked (Renewed)",
        category: "Electronics",
        quantity: 20,
        image: "<img class='card-img-top' name='elec4'  src='./photos/iphone.jpg' alt='Card image cap' onclick='productPageImage(this)'>",
        rating: "<img src='./photos/rating4.png' alt='Card image cap'>",
        price: 697.79,
        ratingNum: 3,
        id: 'elec4'
    },
    {
        name: "Insignia 42-inch Class F20 Series Smart Full HD 1080p Fire TV (NS-42F201NA22, 2021 Model)",
        category: "Electronics",
        quantity: 30,
        image: "<img class='card-img-top' name='elec5'  src='./photos/tv.jpg' alt='Card image cap' onclick='productPageImage(this)'>",
        rating: "<img src='./photos/rating5.png' alt='Card image cap'>",
        price: 435.79,
        ratingNum: 4.5,
        id: 'elec5'
    },
    {
        name: "Christopher Knight Home Idalia Dining Chairs, 2-Pcs Set, Mint / Walnut Finish",
        category: "Home Decor",
        quantity: 23,
        image: "<img class='card-img-top' name='home1'  src='./photos/home1.jpg' alt='Card image cap' onclick='productPageImage(this)'>",
        rating: "<img src='./photos/rating4prime.png' alt='Card image cap'>",
        price: 240.79,
        ratingNum: 3.8,
        id: 'home1'
    },
    {
        name: "Der Rose 3 Pack Mini Potted Fake Plants Artificial Plastic Eucalyptus Plants for Home Office Desk Room Decoration",
        category: "Home Decor",
        quantity: 13,
        image: "<img class='card-img-top' name='home2'  src='./photos/home2.jpg' alt='Card image cap' onclick='productPageImage(this)'>",
        rating: "<img src='./photos/rating3.png' alt='Card image cap'>",
        price: 40.79,
        ratingNum: 3,
        id: 'home2'
    },
    {
        name: "Lush Decor Curtains Dolores Darkening Window Panel Set for Living, Dining Room, Bedroom (Pair), 84 in x 52 in, Yellow, 2 Count",
        category: "Home Decor",
        quantity: 33,
        image: "<img class='card-img-top' name='home3'  src='./photos/home3.jpg' alt='Card image cap' onclick='productPageImage(this)'>",
        rating: "<img src='./photos/rating5.png' alt='Card image cap'>",
        price: 140.79,
        ratingNum: 5,
        id: 'home3'
    },
    {
        name: "Stonebriar SB-5393C 2PC Wire METAL CLOCHE SET, Set of 2, Brown",
        category: "Home Decor",
        quantity: 13,
        image: "<img class='card-img-top' name='home4'  src='./photos/home5.jpg' alt='Card image cap'>",
        rating: "<img src='./photos/rating5.png' alt='Card image cap' onclick='productPageImage(this)'>",
        price: 59.79,
        ratingNum: 4.8,
        id: 'home4'
    },
    {
        name: "Champion Men's Everyday Cotton Jogger",
        category: "Clothing",
        quantity: 20,
        image: "<img class='card-img-top' name='clothing1'  src='./photos/clothes1.jpg' alt='Card image cap' onclick='productPageImage(this)'>",
        rating: "<img src='./photos/rating4prime.png' alt='Card image cap'>",
        price: 17.90,
        ratingNum: 3.7,
        id: 'clothing1'
    },
    {
        name: "Evercute Cross Back Sport Bras Padded Strappy Criss Cross Cropped Bras for Yoga Workout Fitness Low Impact",
        category: "Clothing",
        quantity: 30,
        image: "<img class='card-img-top' name='clothing2' src='./photos/clothes2.jpg' alt='Card image cap' onclick='productPageImage(this)'>",
        rating: "<img src='./photos/rating4prime.png' alt='Card image cap'>",
        price: 39.99,
        ratingNum: 4.2,
        id: 'clothing2'
    },
    {
        name: "Newborn Infant Baby Girl Clothes Romper Floral Pant Outfits Set Cotton Baby Girls' Clothing",
        category: "Clothing",
        quantity: 40,
        image: "<img class='card-img-top' name='clothing3' src='./photos/clothes3.jpg' alt='Card image cap' onclick='productPageImage(this)'>",
        rating: "<img src='./photos/rating4.png' alt='Card image cap'>",
        price: 19.99,
        ratingNum: 4.6,
        id: 'clothing3'
    },
    {
        name: "YOUNGCHARM 4 Pack Leggings with Pockets for Women,High Waist Tummy Control Workout Yoga Pants",
        category: "Clothing",
        quantity: 45,
        image: "<img class='card-img-top' name='clothing4' src='./photos/clothes4.jpg' alt='Card image cap' onclick='productPageImage(this)'>",
        rating: "<img src='./photos/rating3.png' alt='Card image cap'>",
        price: 40.79,
        ratingNum: 3.2,
        id: 'clothing4'
    },
    {
        name: "BURTS BEES BABY - Reversible Blanket, Nursery, Stroller",
        category: "Clothing",
        quantity: 35,
        image: "<img class='card-img-top' name='clothing5' src='./photos/clothes5.jpg' alt='Card image cap' onclick='productPageImage(this)'>",
        rating: "<img src='./photos/rating5.png' alt='Card image cap'>",
        price: 19.95,
        ratingNum: 5,
        id: 'clothing5'
    }
]
let catPage;
window.onload = function () {
    catPage = document.getElementsByClassName("myflex2")[0];
    // let catProducts = productsArr.filter((item) => item.category == "Books");
    for (let element of productsArr) {
        let productCard = "<div class='card border-3' style='width: 18rem;'>" + element.image +
            "<div class='card-body'>" +
            "<h5 class='card-title'>" + element.category + "</h5>" +
            "<p class='card-text' onclick='productPage(this)'>" + element.name + "</p>" + element.rating +
            "<p><b>" + "$" + element.price + "</b></p>" +
            "</div>" +
            "</div>";
        catPage.innerHTML += productCard;
    }
    const urlParams = new URLSearchParams(window.location.search);
}

function changePage(obj) {
    catPage.innerHTML = "";
    if (obj.innerHTML == "Books") {
        let catProducts = productsArr.filter((item) => item.category == "Books");
        for (let element of catProducts) {
            let productCard = "<div class='card border-3' style='width: 18rem;'>" + element.image +
                "<div class='card-body'>" +
                "<h5 class='card-title'>" + element.category + "</h5>" +
                "<p class='card-text' onclick='productPage(this)'>" + element.name + "</p>" + element.rating +
                "<p><b>" + "$" + element.price + "</b></p>" +
                "</div>" +
                "</div>";
            catPage.innerHTML += productCard;
        }
    } else if (obj.innerHTML == "Electronics") {
        let catProducts = productsArr.filter((item) => item.category == "Electronics");
        for (let element of catProducts) {
            let productCard = "<div class='card border-3' style='width: 18rem;'>" + element.image +
                "<div class='card-body'>" +
                "<h5 class='card-title'>" + element.category + "</h5>" +
                "<p class='card-text' onclick='productPage(this)'>" + element.name + "</p>" + element.rating +
                "<p><b>" + "$" + element.price + "</b></p>" +
                "</div>" +
                "</div>";
            catPage.innerHTML += productCard;
        }
    } else if (obj.innerHTML == "Clothing") {
        let catProducts = productsArr.filter((item) => item.category == "Clothing");
        for (let element of catProducts) {
            let productCard = "<div class='card border-3' style='width: 18rem;'>" + element.image +
                "<div class='card-body'>" +
                "<h5 class='card-title'>" + element.category + "</h5>" +
                "<p class='card-text' onclick='productPage(this)'>" + element.name + "</p>" + element.rating +
                "<p><b>" + "$" + element.price + "</b></p>" +
                "</div>" +
                "</div>";
            catPage.innerHTML += productCard;
        }
    } else if (obj.innerHTML == "Home Decor") {
        let catProducts = productsArr.filter((item) => item.category == "Home Decor");
        for (let element of catProducts) {
            let productCard = "<div class='card border-3' style='width: 18rem;'>" + element.image +
                "<div class='card-body'>" +
                "<h5 class='card-title'>" + element.category + "</h5>" +
                "<p class='card-text' onclick='productPage(this)'>" + element.name + "</p>" + element.rating +
                "<p><b>" + "$" + element.price + "</b></p>" +
                "</div>" +
                "</div>";
            catPage.innerHTML += productCard;
        }
    } else {
        for (let element of productsArr) {
            let productCard = "<div class='card border-3' style='width: 18rem;'>" + element.image +
                "<div class='card-body'>" +
                "<h5 class='card-title'>" + element.category + "</h5>" +
                "<p class='card-text' onclick='productPage(this)'>" + element.name + "</p>" + element.rating +
                "<p><b>" + "$" + element.price + "</b></p>" +
                "</div>" +
                "</div>";
            catPage.innerHTML += productCard;
        }
    }
}
function sortLow() {
    productsArr.sort((a, b) => a.price - b.price);
    catPage.innerHTML = "";
    for (let element of productsArr) {
        let productCard = "<div class='card border-3' style='width: 18rem;'>" + element.image +
            "<div class='card-body'>" +
            "<h5 class='card-title'>" + element.category + "</h5>" +
            "<p class='card-text' onclick='productPage(this)'>" + element.name + "</p>" + element.rating +
            "<p><b>" + "$" + element.price + "</b></p>" +
            "</div>" +
            "</div>";
        catPage.innerHTML += productCard;
    }

}

function sortHigh() {
    productsArr.sort((a, b) => b.price - a.price);
    catPage.innerHTML = "";
    for (let element of productsArr) {
        let productCard = "<div class='card border-3' style='width: 18rem;'>" + element.image +
            "<div class='card-body'>" +
            "<h5 class='card-title'>" + element.category + "</h5>" +
            "<p class='card-text' onclick='productPage(this)'>" + element.name + "</p>" + element.rating +
            "<p><b>" + "$" + element.price + "</b></p>" +
            "</div>" +
            "</div>";
        catPage.innerHTML += productCard;
    }

}

function sortRating() {
    productsArr.sort((a, b) => b.ratingNum - a.ratingNum);
    catPage.innerHTML = "";
    for (let element of productsArr) {
        let productCard = "<div class='card border-3' style='width: 18rem;'>" + element.image +
            "<div class='card-body'>" +
            "<h5 class='card-title'>" + element.category + "</h5>" +
            "<p class='card-text' name='productName' onclick='productPage(this)'>" + element.name + "</p>" + element.rating +
            "<p><b>" + "$" + element.price + "</b></p>" +
            "</div>" +
            "</div>";
        catPage.innerHTML += productCard;
    }
}

function productPage(obj) {
    console.log(obj.innerHTML);
    // window.location.search = "?productName =" + obj.innerHTML;
    window.location.href = `./productPage.html?productName=${obj.innerHTML}`;
}
function productPageImage(obj) {
    console.log(obj.name);
    window.location.href = `./productPage.html?productImage=${obj.name}`;
}
function searchCat(obj) {
    let btn = document.getElementById("categoryBtn");
    btn.innerHTML = obj.innerHTML;
}

function searchItem() {
    let textBox = document.getElementById("searchTextBox").value;
    let cat = document.getElementById("categoryBtn").innerHTML;
    // console.log(cat == "Home Decor")
    if (cat === "Books" || cat === "Electronics" || cat === "Clothing" || cat === "Home Decor") {
        let catFound = productsArr.filter(function (item) {
            if (item.category === cat)
                return item;
        });
        newPage(catFound);
        //console.log("I got ", catFound);
    }
    else if (cat == "All Products" || cat == "All") {
        newPage(productsArr);
    }
}

function newPage(arr) {
    let textBox = document.getElementById("searchTextBox").value;
    catPage.innerHTML = "";
    for (let element of arr) {
        if (element.name.includes(textBox)) {
            let productCard = "<div class='card border-3' style='width: 18rem;'>" + element.image +
                "<div class='card-body'>" +
                "<h5 class='card-title'>" + element.category + "</h5>" +
                "<p class='card-text' name='productName' onclick='productPage(this)'>" + element.name + "</p>" + element.rating +
                "<p><b>" + "$" + element.price + "</b></p>" +
                "</div>" +
                "</div>";
            catPage.innerHTML += productCard;
        }
    }
    if (catPage.innerHTML == "") {
        let productCard = "<h3 style='color: red; font-size:20px;margin-left:40%;'>Sorry the item is not found</3>";
        catPage.innerHTML += productCard;
    }
}