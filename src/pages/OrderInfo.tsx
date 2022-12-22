import React, { Key } from 'react';
import { IonLabel, IonContent, IonHeader, IonPage, IonAvatar, IonToolbar, IonText, IonTitle, IonIcon, IonButton, IonItem } from '@ionic/react';
import { closeCircle, cardOutline } from 'ionicons/icons';
import { useEffect, useState } from 'react';
import BackButton from '../components/BackButton';
import '../styles/Cart.css'
import { useParams } from 'react-router';
import { get, getDatabase, ref } from 'firebase/database';

interface Artikel {
    image: string
    title: string
    uuid: string
}

interface Order {
    order_uuid: string
    price: number
    state: string
    user: string
    user_uuid: string
}

const OrderInfo: React.FC = () => {
    let itemsCount = 0
    let totalPrice = 0
    let VAT = 0

    var data = useParams()
    var param = JSON.parse(JSON.stringify(data))
    const [orders, setOrders] = useState<Order[]>([])
    const [drinks, setDrinks] = useState<Artikel[]>([])

    function GetOrders() {
        var data: any = []
        var filteredUserOrders: any = []
        var drinks: any = []
        const db = getDatabase()

        get(ref(db, '/Orders')).then((snapshot) => {
            if (snapshot.exists()) {
                snapshot.forEach(function (childSnapshot) {
                    var childData = childSnapshot.val();
                    data.push(childData)
                });
                console.warn(data)
                data.map((order: any) => {
                    if (order.order_uuid === param.id) {
                        filteredUserOrders.push(order)
                        drinks.push(order.drinks)
                    }
                })
                setOrders(filteredUserOrders)
                setDrinks(drinks)
            }
            else {
                console.warn("No data available");
            }
        })
    }

    useEffect(() => {
        GetOrders()
        // console.log(orders)
    }, [setOrders])


    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <BackButton path={"/User"} />
                    <IonTitle>{param.id}</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <div className='item-container'>
                    {orders.map((item: any) => (
                        itemsCount = 0,
                        totalPrice = 0,
                        VAT = 0,
                        item.drinks.map((item2: any) => (
                            itemsCount++,
                            totalPrice = item.price,
                            VAT = item.vat,
                            <div className='item-container2'>
                                <IonAvatar className='item-item2'>
                                    <img src={item2.image} alt={item2.title + " img"} />
                                </IonAvatar>
                                <IonText className='item-item2' color={"favorite-black"}>{item2.title}</IonText>
                            </div>
                        ))
                    ))}
                </div>
                <div className='info-container'>
                    <IonLabel className='info-container-item' color={"favorite-black"}>Stevilo izdelkov</IonLabel>
                    <IonLabel className='info-container-item' color={"favorite-black"}>{itemsCount}</IonLabel>
                    <IonLabel className='info-container-item' color={"favorite-black"}>DDV</IonLabel>
                    <IonLabel className='info-container-item' color={"favorite-black"}>{VAT}€</IonLabel>
                    <IonLabel className='info-container-item-last' color={"favorite-black"}><b>Skupaj</b></IonLabel>
                    <IonLabel className='info-container-item-last' color={"favorite-black"}><b>{totalPrice}€</b></IonLabel>
                </div>
            </IonContent>
        </IonPage >
    )
}

export default OrderInfo;