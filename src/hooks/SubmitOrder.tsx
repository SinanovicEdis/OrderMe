import React from "react";
import { getDatabase, ref, child, get, set, push } from "firebase/database";
import uuid from 'react-uuid'
interface User {
    uid: string
}

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

    const data: { UUID: string; Name: string; }[] = []
    orderData.forEach((item: Artikel) => {
        data.push({ UUID: item.uuid, Name: item.title })
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
        state: "ordered"
    }).then(success => {
        localStorage.removeItem("cart")
        window.location.assign("order-submited")
    }, error => {
        alert("Error" + error)
    })
}

export default SubmitOrder