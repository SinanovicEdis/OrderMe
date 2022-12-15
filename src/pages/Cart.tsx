import React from 'react';
import { IonLabel, IonContent, IonHeader, IonPage, IonAvatar, IonToolbar, IonText, IonTitle, IonIcon, IonFabList, IonItem } from '@ionic/react';
import { closeCircle } from 'ionicons/icons';
import { useEffect, useState } from 'react';
import BackButton from '../components/BackButton';
import '../styles/Cart.css'
const Cart: React.FC = () => {
    const [items, setItems] = useState<any>(JSON.parse(localStorage.getItem("cart") || ""))
    const itemsCount = items.length
    const totalPrice = (items.reduce((a: any, v: any) => a = a + v.price, 0)).toFixed(2)

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
                {itemsCount ?
                    <>
                        <div className='info-container'>
                            <IonLabel className='info-container-item'>Stevilo izdelkov</IonLabel>
                            <IonLabel className='info-container-item'>{itemsCount}</IonLabel>
                            <IonLabel className='info-container-item'>DDV</IonLabel>
                            <IonLabel className='info-container-item'>{VAT}€</IonLabel>
                            <IonLabel className='info-container-item-last'><b>Skupaj</b></IonLabel>
                            <IonLabel className='info-container-item-last'><b>{totalPrice}€</b></IonLabel>
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