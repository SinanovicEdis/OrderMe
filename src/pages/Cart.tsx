import React from 'react';
import { IonLabel, IonContent, IonHeader, IonPage, IonAvatar, IonToolbar, IonText, IonTitle, IonIcon, IonButton, IonItem } from '@ionic/react';
import { closeCircle, cardOutline } from 'ionicons/icons';
import { useEffect, useState } from 'react';
import BackButton from '../components/BackButton';
// import SubmitOrder from '../hooks/SubmitOrder'
import '../styles/Cart.css'
import SubmitOrder from '../hooks/SubmitOrder';
const Cart: React.FC = () => {
    const [items, setItems] = useState<any>(localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart") || "") : {})
    const itemsCount = items.length
    const totalPrice = localStorage.getItem("cart") ? (items.reduce((a: any, v: any) => a = a + v.price, 0)).toFixed(2) : 0

    const VAT = (totalPrice - (totalPrice / 1.22)).toFixed(2)
    function removeItem(item: any) {
        const articles = items.filter((e: any) => e !== item)
        localStorage.setItem("cart", JSON.stringify(articles))
        setItems(articles)
    }

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <BackButton path={"Home"} />
                    <IonTitle>Kosarica</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                {itemsCount ?
                    <>
                        <div className='item-container'>
                            {items.map((item: any) => (
                                <div className='item-container2'>
                                    <IonAvatar className='item-item2'>
                                        <img src={item.image} alt={item.title + " img"} />
                                    </IonAvatar>
                                    <IonText className='item-item2' color={"favorite-black"}>{item.title}</IonText>
                                    <IonIcon className='item-item2' size='' icon={closeCircle} onClick={() => removeItem(item)}></IonIcon>
                                </div>
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

                        <div className='buttons-container'>
                            <IonButton color={"favorite-button-pay"} onClick={() => { window.location.assign("/card-payment") }}><b>Oddaj naročilo in plačaj</b> &nbsp; &nbsp; <IonIcon icon={cardOutline}></IonIcon></IonButton>
                            <IonButton color={"favorite-button-pay"} onClick={() => { SubmitOrder(false) }}><b>Oddaj naročilo</b></IonButton>
                        </div>
                    </>
                    : <>
                        <IonTitle>Košarica je prazna</IonTitle>
                    </>
                }

            </IonContent>

        </IonPage>
    )
}

export default Cart;