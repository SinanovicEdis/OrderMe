import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonFab, IonFabButton, IonIcon, IonFabList } from '@ionic/react';
import { chevronDownCircle, home, cart, person, heart, arrowDownCircle } from 'ionicons/icons';

interface IPositionProps {
    slot: string,
    vertical: "top" | "bottom" | "center" | undefined,
    horizontal: "start" | "center" | "end" | undefined;
    edge: boolean | undefined;
}

const FloatingButton = (props: IPositionProps) => {
    return (
        <IonContent className="ion-padding">
            <IonFab slot={props.slot} vertical={props.vertical} horizontal={props.horizontal} edge={props.edge}>
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