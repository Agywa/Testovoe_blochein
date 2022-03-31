import React from "react";


const Web3 = require('web3');

//Create web3 instance нужно смотреть документацию что бы узнать какие точно данные приходят с сервера
// и на каккой адрес делать запрос
// что бы затем сделать санку и задеспатчить её в authReducer
const web3 = new Web3('http://127.0.0.1:9933');

export const authAPI = {
    getUserETHAdr(data: any) {
        return web3.get("user")
    }
}