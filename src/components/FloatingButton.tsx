import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonFab, IonFabButton, IonIcon, IonFabList } from '@ionic/react';
import { chevronDownCircle, home, cart, person, heart, arrowDownCircle } from 'ionicons/icons';

const FloatingButton: React.FC = () => {
    return (
        <IonContent className="ion-padding">
            <IonFab slot="fixed" vertical="top" horizontal="start" edge={false}>
                <IonFabButton>
                    <IonIcon icon={arrowDownCircle}></IonIcon>
                </IonFabButton>
                <IonFabList side="bottom">
                    <IonFabButton>
                        <IonIcon icon={home}></IonIcon>
                    </IonFabButton>
                    <IonFabButton>
                        <IonIcon icon={cart}></IonIcon>
                    </IonFabButton>
                    <IonFabButton>
                        <IonIcon icon={person}></IonIcon>
                    </IonFabButton>
                    <IonFabButton>
                        <IonIcon icon={heart}></IonIcon>
                    </IonFabButton>
                </IonFabList>
            </IonFab>
        </IonContent>
    )
}

export default FloatingButton