import React from "react";
import { getDatabase, ref, child, get, set, push } from "firebase/database";
import uuid from 'react-uuid'

interface Artikel {
    title: string;
    description: string;
    ingredients: Array<string>;
    image: string;
    id: number
    uuid: string
    price: number
}

function SubmitOrder() {
    const db = getDatabase()

    var totalPrice = 0

    const user = JSON.parse(localStorage.getItem("user") || "")
    const orderData = JSON.parse(localStorage.getItem("cart") || "")

    const date = new Date();

    const data: { uuid: string; title: string; image: string, price: number }[] = []
    orderData.forEach((item: Artikel) => {
        data.push({ uuid: item.uuid, title: item.title, image: item.image, price: item.price })
        totalPrice += item.price
    });

    var uuid_ = uuid()
    const path = '/Orders/' + user.uid + '_' + uuid_;
    var res = set(ref(db, path), {
        order_uuid: uuid_,
        user: user.email,
        user_uid: user.uid,
        drinks: data,
        price: totalPrice,
        vat: (totalPrice - (totalPrice / 1.22)).toFixed(2),
        date: date.toLocaleString(),
        state: "ordered"
    }).then(success => {
        localStorage.removeItem("cart")
        window.location.assign("order-submited")
    }, error => {
        alert("Error" + error)
    })
}

export default SubmitOrder