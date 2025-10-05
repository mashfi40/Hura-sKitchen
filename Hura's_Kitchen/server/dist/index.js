"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, cors_1.default)());
app.use("/images", express_1.default.static(path_1.default.join(__dirname, "../public/images")));
app.get("/", (req, res) => {
    console.log(path_1.default.join(__dirname, "../public"));
    const foodData = [
        {
        name: "Dalpuri",
        price: 270,
        text: "মশলাদার ডাল ও চালের মিশ্রণ, গরম তেলে ভাজা, সান্ধ্য খাবারে আদর্শ।",
        image: "/images/dalpuri.png",
        type: "appetizer",
        },
        {
        name: "Fuchka",
        price: 150,
        text: "টাটকা মশলা, পেঁয়াজ ও ছোলা দিয়ে ভর্তি, মজাদার পানীয় সহ খেতে সুস্বাদু।",
        image: "/images/Fuchka.png",
        type: "appetizer",
        },
        {
        name: "Macher Chop",
        price: 350,
        text: "মুচমুচে ভাজা, সুস্বাদু মাছের মাংস ও মশলা দিয়ে তৈরি টেস্টি চপ।",
        image: "/images/macherchop.png",
        type: "appetizer",
        },
        {
        name: "Masala Crostini",
        price: 450,
        text: "মসলাযুক্ত টোস্ট, সুগন্ধি মশলা ও চিজ দিয়ে সাজানো, একটি ফিউশন স্ন্যাকস।",
        image: "/images/MasalaCrostini.png",
        type: "appetizer",
        },
        {
        name: "Masala Dim",
        price: 250,
        text: "মশলার সাথে সেদ্ধ ডিম, স্বাদে ভরপুর এবং সহজে তৈরি করা যায়।",
        image: "/images/masaladim.png",
        type: "lunch",
        },
        {
            name: "Achari Mangsho",
            price: 380,
            text: "মাংসের টুকরো মশলা ও আচার দিয়ে রান্না, তেতো-মিষ্টি স্বাদে পরিপূর্ণ।",
            image: "/images/acharimangsho.png",
            type: "main",
        },
        {
            name: "Kolapata Vaat",
            price: 420,
            text: "সুগন্ধি গরম ভাত, কলাপাতা দিয়ে সেঁকা, গ্রাম্য ঐতিহ্যের একটি দারুণ খাবার।",
            image: "/images/kolapataVaat.png",
            type: "main",
        },
        {
            name: "Panta Ilish",
            price: 640,
            text: "পান্তা ভাতের সাথে তাজা ইলিশ মাছ, ভাপা মশলা সহ, মৌসুমি স্বাদ।",
            image: "/images/pantaIlish.png",
            type: "main",
        },
        {
            name: "Shorisha Ilish",
            price: 700,
            text: "সরিষা সসের সাথে রান্না করা ইলিশ মাছ, মিষ্টি ও তিক্ত স্বাদের মিশ্রণ।",
            image: "/images/shorishaIlish.png",
            type: "main",
        },
        {
        name: "Mishti Doi",
        price: 300,
        text: "সঠিকভাবে মিষ্টি ও ক্রিমি দই, বাঙালি মিষ্টির আদর্শ প্রতীক।",
        image: "/images/mistidoi.png",
        type: "dessert",
        },
        {
        name: "Payesh",
        price: 380,
        text: "দুধ, চিনি ও চালের মিষ্টি রেসিপি, বাঙালির পছন্দের পিঠা ও মিষ্টি।",
        image: "/images/payesh.png",
        type: "dessert",
        },
        {
        name: "Aam Panna",
        price: 230,
        text: "কাঁচা আমের সাৎ, মিষ্টি ও টক, গরমে মন মাতানো ঠাণ্ডা পানীয়।",
        image: "/images/aampanna.png",
        type: "drink",
        },
        {
        name: "Dudh Cha",
        price: 70,
        text: "হালকা মিষ্টি, চা পাতা ও দুধের সুমধুর মিশ্রণ, সব সময় প্রিয় পানীয়।",
        image: "/images/cha.png",
        type: "drink",
        },
        {
        name: "Malai Cha",
        price: 100,
        text: "দুধ ও মসলা চায়ের সাথে রিচ মালাইয়ের মিশ্রণ, বিশেষ স্বাদে এক কাপ শান্তি।",
        image: "/images/malaicha.png",
        type: "drink",
        },
    ];
    res.json(foodData);
});
app.listen(9000, () => {
    console.log("Server is running on port 9000");
});
//# sourceMappingURL=index.js.map