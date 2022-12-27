import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonText, IonImg, IonLabel, IonFabList, IonItem } from '@ionic/react';
import Lottie from 'lottie-react'

import DoneAnimation from '../assets/lottie_files/check-okey-done.json'
import '../styles/OrderSubmited.css'

const OrderSubmited: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <div className='order-container' style={{ backgroundColor: "white" }}>
                    <div className='order-item'>
                        <Lottie animationData={DoneAnimation} loop={false} height={"100%"} />
                    </div>
                    <div className='order-item' style={{ backgroundColor: "#E3D0BC" }}>
                        <div className='order-item-text'>
                            <IonText color={"favorite-black"}><b>Naročilo je uspešno oddano!</b></IonText>
                            <br></br>
                            <a href='/home' style={{ color: "orange", fontSize: "20px" }}>Nazaj na glavno stran</a>
                        </div>
                    </div>
                    <div className='order-item'>
                    </div>
                </div>
            </IonContent>
        </IonPage >
    );
};

export default OrderSubmited;

