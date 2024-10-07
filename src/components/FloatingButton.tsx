import { IonContent, IonFab, IonFabButton, IonIcon, IonFabList } from '@ionic/react';
import { scan, home, cart, person, logOut, arrowDownCircle } from 'ionicons/icons';
import { logOut as logout } from '../firebaseConfig'
interface IPositionProps {
    slot: string,
    vertical: "top" | "bottom" | "center" | undefined,
    horizontal: "start" | "center" | "end" | undefined;
    edge: boolean | undefined;
}

const FloatingButton = (props: IPositionProps) => {
    return (
        <IonContent className="ion-padding" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
            <IonFab slot={props.slot} vertical={props.vertical} horizontal={props.horizontal} edge={props.edge} placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                <IonFabButton placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                    <IonIcon icon={arrowDownCircle} placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}></IonIcon>
                </IonFabButton>
                <IonFabList side="bottom" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                    {/* <IonFabButton>
                        <IonIcon icon={home}></IonIcon>
                    </IonFabButton> */}
                    <IonFabButton onClick={() => window.location.assign("scan")} placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                        <IonIcon icon={scan} placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}></IonIcon>
                    </IonFabButton>
                    <IonFabButton onClick={() => window.location.assign("cart")} placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                        <IonIcon icon={cart} placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}></IonIcon>
                    </IonFabButton>
                    <IonFabButton onClick={() => window.location.assign("user")} placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                        <IonIcon icon={person} placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}></IonIcon>
                    </IonFabButton>
                    <IonFabButton placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                        <IonIcon icon={logOut} onClick={() => logout()} placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}></IonIcon>
                    </IonFabButton>
                </IonFabList>
            </IonFab>
        </IonContent>
    )
}

export default FloatingButton