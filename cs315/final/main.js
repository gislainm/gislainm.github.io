"use strict";
/*eslint-disable */
const productsArr = [
    {
        name: "Sapiens: A Brief History of Humankind Audible Audiobook – Unabridged Yuval Noah Harari(Author), Derek Perkins(Narrator), HarperAudio(Publisher)",
        category: "Books",
        quantity: 3,
        image: "<img class='card-img-top' src='./photos/sapiens.jpeg' alt='Card image cap'>",
        rating: "<img src='./photos/rating5.png' alt='Card image cap'>",
        price: 18.49,
        ratingNum: 5
    },
    {
        name: "Story Genius: How to Use Brain Science to Go Beyond Outlining and Write a Riveting Novel (Before You Waste Three Years Writing 327 Pages That Go Nowhere)",
        category: "Books",
        quantity: 2,
        image: "<img class='card-img-top' src='./photos/storyGenius.jpg' alt='Card image cap'>",
        rating: "<img src='./photos/rating4.png' alt='Card image cap'>",
        price: 13.79,
        ratingNum: 4
    },
    {
        name: "A Brief History of Time Paperback – Illustrated, ",
        category: "Books",
        quantity: 4,
        image: "<img class='card-img-top' src='./photos/aBriefHistory.jpg' alt='Card image cap'>",
        rating: "<img src='./photos/rating4prime.png' alt='Card image cap'>",
        price: 15.44,
        ratingNum: 4
    },
    {
        name: "The Shining Mass Market Paperback – June 26, 2012",
        category: "Books",
        quantity: "<img src='./photos/rating5.png' alt='Card image cap'>",
        image: "<img class='card-img-top' src='./photos/theShining.jpg' alt='Card image cap'>",
        rating: "<img src='./photos/rating5.png' alt='Card image cap'>",
        price: 11.49,
        ratingNum: 5
    },
    {
        name: "Dune (Dune Chronicles, Book 1) Paperback – August 2",
        category: "Books",
        quantity: 10,
        image: "<img class='card-img-top' src='./photos/dube.jpg' alt='Card image cap'>",
        rating: "<img src='./photos/rating5.png' alt='Card image cap'>",
        price: 20.79,
        ratingNum: 4
    },
    {
        name: "Soundcore by Anker Life Q30 Hybrid Active Noise Cancelling Headphones with Multiple Modes, Hi-Res Sound, Custom EQ via App, 40H Playtime, Comfortable Fit, Bluetooth Headphones, Multipoint Connection",
        category: "Electronics",
        quantity: 15,
        image: "<img class='card-img-top' src='./photos/soundCore.jpg' alt='Card image cap'>",
        rating: "<img src='./photos/rating4.png' alt='Card image cap'>",
        price: 154.79,
        ratingNum: 3
    },
    {
        name: "Beats Studio3 Wireless Noise Cancelling Over-Ear Headphones - Apple W1 Headphone Chip, Class 1 Bluetooth, 22 Hours of Listening Time, Built-in Microphone - Matte Black (Latest Model)",
        category: "Electronics",
        quantity: 8,
        image: "<img class='card-img-top' src='./photos/beats.jpg' alt='Card image cap'>",
        rating: "<img src='./photos/rating4prime.png' alt='Card image cap'>",
        price: 259.79,
        ratingNum: 4
    },
    {
        name: "Apple AirPods Pro",
        category: "Electronics",
        quantity: 7,
        image: "<img class='card-img-top' src='./photos/airpods.jpg' alt='Card image cap'>",
        rating: "<img src='./photos/rating5.png' alt='Card image cap'>",
        price: 200.79,
        ratingNum: 5
    },
    {
        name: "Apple Iphone X, 256GB, Space Gray - Fully Unlocked (Renewed)",
        category: "Electronics",
        quantity: 20,
        image: "<img class='card-img-top' src='./photos/iphone.jpg' alt='Card image cap'>",
        rating: "<img src='./photos/rating4.png' alt='Card image cap'>",
        price: 697.79,
        ratingNum: 3
    },
    {
        name: "Insignia 42-inch Class F20 Series Smart Full HD 1080p Fire TV (NS-42F201NA22, 2021 Model)",
        category: "Electronics",
        quantity: 30,
        image: "<img class='card-img-top' src='./photos/tv.jpg' alt='Card image cap'>",
        rating: "<img src='./photos/rating5.png' alt='Card image cap'>",
        price: 435.79,
        ratingNum: 4.5
    },
    {
        name: "Christopher Knight Home Idalia Dining Chairs, 2-Pcs Set, Mint / Walnut Finish",
        category: "Home Decor",
        quantity: 23,
        image: "<img class='card-img-top' src='./photos/home1.jpg' alt='Card image cap'>",
        rating: "<img src='./photos/rating4prime.png' alt='Card image cap'>",
        price: 240.79,
        ratingNum: 3.8
    },
    {
        name: "Der Rose 3 Pack Mini Potted Fake Plants Artificial Plastic Eucalyptus Plants for Home Office Desk Room Decoration",
        category: "Home Decor",
        quantity: 13,
        image: "<img class='card-img-top' src='./photos/home2.jpg' alt='Card image cap'>",
        rating: "<img src='./photos/rating3.png' alt='Card image cap'>",
        price: 40.79,
        ratingNum: 3
    },
    {
        name: "Lush Decor Curtains Dolores Darkening Window Panel Set for Living, Dining Room, Bedroom (Pair), 84 in x 52 in, Yellow, 2 Count",
        category: "Home Decor",
        quantity: 33,
        image: "<img class='card-img-top' src='./photos/home3.jpg' alt='Card image cap'>",
        rating: "<img src='./photos/rating5.png' alt='Card image cap'>",
        price: 140.79,
        ratingNum: 5
    },
    {
        name: "Stonebriar SB-5393C 2PC Wire METAL CLOCHE SET, Set of 2, Brown",
        category: "Home Decor",
        quantity: 13,
        image: "<img class='card-img-top' src='./photos/home5.jpg' alt='Card image cap'>",
        rating: "<img src='./photos/rating5.png' alt='Card image cap'>",
        price: 59.79,
        ratingNum: 4.8
    },
    {
        name: "Champion Men's Everyday Cotton Jogger",
        category: "Clothing",
        quantity: 20,
        image: "<img class='card-img-top' src='./photos/clothes1.jpg' alt='Card image cap'>",
        rating: "<img src='./photos/rating4prime.png' alt='Card image cap'>",
        price: 17.90,
        ratingNum: 3.7
    },
    {
        name: "Evercute Cross Back Sport Bras Padded Strappy Criss Cross Cropped Bras for Yoga Workout Fitness Low Impact",
        category: "Clothing",
        quantity: 30,
        image: "<img class='card-img-top' src='./photos/clothes2.jpg' alt='Card image cap'>",
        rating: "<img src='./photos/rating4prime.png' alt='Card image cap'>",
        price: 39.99,
        ratingNum: 4.2
    },
    {
        name: "Newborn Infant Baby Girl Clothes Romper Floral Pant Outfits Set Cotton Baby Girls' Clothing",
        category: "Clothing",
        quantity: 40,
        image: "<img class='card-img-top' src='./photos/clothes3.jpg' alt='Card image cap'>",
        rating: "<img src='./photos/rating4.png' alt='Card image cap'>",
        price: 19.99,
        ratingNum: 4.6
    },
    {
        name: "YOUNGCHARM 4 Pack Leggings with Pockets for Women,High Waist Tummy Control Workout Yoga Pants",
        category: "Clothing",
        quantity: 45,
        image: "<img class='card-img-top' src='./photos/clothes4.jpg' alt='Card image cap'>",
        rating: "<img src='./photos/rating3.png' alt='Card image cap'>",
        price: 40.79,
        ratingNum: 3.2
    },
    {
        name: "BURTS BEES BABY - Reversible Blanket, Nursery, Stroller",
        category: "Clothing",
        quantity: 35,
        image: "<img class='card-img-top' src='./photos/clothes5.jpg' alt='Card image cap'>",
        rating: "<img src='./photos/rating5.png' alt='Card image cap'>",
        price: 19.95,
        ratingNum: 5
    }
]

window.onload = function () {
    let productsList = document.getElementsByClassName("myflex")[0];
    let signinBtn = document.getElementsByClassName("signinSecure")[0];
    signinBtn.onclick = goToLogin;
    productsList.innerHTML = "";
    for (let element of productsArr) {
        let productCard = "<div class='card border-3' style='width: 18rem;' onclick='display1(this)' >" + element.image +
            "<div class='card-body'>" +
            "<h5 class='card-title'>" + element.category + "</h5>" +
            "<p class='card-text' onclick='productPage(this)'>" + element.name + "</p>" + element.rating +
            "<p><b>" + "$" + element.price + "</b></p>" +
            "</div>" +
            "</div>";
        productsList.innerHTML += productCard;
    }
}

function changePage(obj) {
    const urlParams = new URLSearchParams(window.location.search);
    if (obj.innerHTML == "Books") {
        let catProducts = productsArr.filter((item) => item.category == "Books");
        // let catPage = document.getElementsByClassName("myflex2")[0];
        // catPage.innerHTML = "";
        window.location.href = "./category.html";
        console.log(catProducts);
        console.log(urlParams);
    }
}

function goToLogin() {
    window.location.href = "./login.html";
}

