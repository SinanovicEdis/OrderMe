import React from 'react';
import { IonButton, IonContent, IonHeader, IonPage, IonAvatar, IonToolbar, IonText, IonImg, IonIcon, IonFabList, IonItem } from '@ionic/react';
import { closeCircle } from 'ionicons/icons';
import { useEffect, useState } from 'react';
import BackButton from '../components/BackButton';
import '../styles/Cart.css'
const Cart: React.FC = () => {
    const [items, setItems] = useState<any>(JSON.parse(localStorage.getItem("cart") || ""))
    const totalPrice = 0

    useEffect(() => {
        // if (localStorage.getItem("cart")) {
        //     const getItems = JSON.parse(localStorage.getItem("cart") || "")
        //     setItems(getItems)
        //     // console.log("total price: " + totalPrice)
        // }
        console.log("items in cart: " + JSON.stringify(localStorage.getItem("cart")))

    }, [])


    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <BackButton path={"Home"} />
                </IonToolbar>
            </IonHeader>
            <IonButton onClick={() => localStorage.removeItem("cart")}>Pocisti kosarico</IonButton>
            <IonContent>
                <div className='item-container'>
                    {items.map((item: any) => (
                        <div className='item-container2'>
                            <IonAvatar className='item-item2'>
                                <img src={item.image} alt={item.title + " img"} />
                            </IonAvatar>
                            <IonText className='item-item2' color={"favorite-black"}>{item.title}</IonText>
                            <IonIcon className='item-item2' size='' icon={closeCircle} onClick={() => console.log("kliknil si ikono")}></IonIcon>
                        </div>
                    ))}
                </div>
            </IonContent>

        </IonPage>
    )
}

export default Cart;