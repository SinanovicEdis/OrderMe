import React, { useEffect, useState } from "react";
import { getDatabase, ref, child, get, set, push, onValue } from "firebase/database";
import uuid from 'react-uuid'


function GetOrders(): any {
    const user = JSON.parse(localStorage.getItem("user") || "")
    var data: any = []
    var filteredUserOrders: any = []
    const db = getDatabase()

    get(ref(db, '/Orders')).then((snapshot) => {
        if (snapshot.exists()) {
            snapshot.forEach(function (childSnapshot) {
                var childData = childSnapshot.val();
                data.push(childData)
            });
            data.map((order: any) => {
                if (order.user_uid === user.uid) {
                    filteredUserOrders.push(order)
                }
            })
            return filteredUserOrders
        }
        else {
            console.warn("No data available");
        }
    })
}

export default GetOrders