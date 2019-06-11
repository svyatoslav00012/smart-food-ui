import React from "react";
import potato from "../images/potato.png";
//
// <Item text="" />
// <Item text="" />
//     <Item text="" />
//     <Item text="" />
//     <Item text="" />
//     <Item text="" />
//     <Item text="" />

const ProductsData = {
    vegetables: {
        translation: "ОВОЩИ",
        list: [
            {
                name: "Картофель белый",
                image: "potato.png",
                rate: 5,
                price: 25.00,
                unit: "кг",
            },
            {
                name: "Капуста белокачанная",
                image: "cabbage.png",
                rate: 5,
                price: 19.00,
                unit: "кг",
            },
            {
                name: "Перец болгарский",
                image: "sweetpapper.png",
                rate: 4,
                price: 90.00,
                unit: "кг",
            },
            {
                name: "Морковь",
                image: "carrot.png",
                rate: 3,
                price: 42.00,
                unit: "кг",
            },
        ]
    },
    berries: {
        translation: "ЯГОДЫ",
        list: []
    },
    fruits: {
        translation: "ФРУКТЫ",
        list: []
    },
    greenery: {
        translation: "ЗЕЛЕНЬ",
        list: []
    },
    milk: {
        translation: "МОЛОКО",
        list: []
    },
    bird: {
        translation: "ПТИЦА",
        list: []
    },
    meat: {
        translation: "МЯСО",
        list: []
    },
    bread: {
        translation: "ХЛЕБ",
        list: []
    },
};

export default ProductsData;