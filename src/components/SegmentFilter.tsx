import React from 'react';
import { IonLabel, IonSegment, IonSegmentButton } from '@ionic/react';

function SegmentFilter() {
    return (
        <>
            <IonSegment value="" color={"dark"}>
                <IonSegmentButton value="default">
                    <IonLabel>Kave</IonLabel>
                </IonSegmentButton>
                <IonSegmentButton value="brez-alk-pijace">
                    <IonLabel>Brez alk. pijače</IonLabel>
                </IonSegmentButton>
                <IonSegmentButton value="vina">
                    <IonLabel>Vina</IonLabel>
                </IonSegmentButton>
                <IonSegmentButton value="caji">
                    <IonLabel>Čaji</IonLabel>
                </IonSegmentButton>
            </IonSegment>
        </>
    );
}
export default SegmentFilter;