import {
    IonContent,
    IonInput,
    IonButton,
    IonItem,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar
} from '@ionic/react';
import React from 'react';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
class QRcodeScan extends React.Component {
    state = {
        stringEncoded: '',
        encodeResponse: 'Hello World',
        dataEncode: ''
    }
    handleChange = (e: any) => {
        const { value, name } = e.target;
        this.setState({
            [name]: value
        }
        );
        console.log(this.state);
    };
    render() {
        const dataToScan = async () => {
            const data = await BarcodeScanner.scan();
            alert(JSON.stringify(data));
            this.setState({ stringEncoded: data.text })
        };

        return (
            <IonPage>
                <IonHeader>
                    <IonToolbar>
                        <IonTitle>Ionic QR/Barcode Scanner Example</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent className="ion-padding">
                    <strong>Scan Content</strong>
                    <IonButton color="danger" expand="block" onClick={dataToScan}>
                        Scan Data
                    </IonButton>
                    <strong>Generate QR code</strong>
                    <IonItem>
                        <IonInput name='dataEncode' value={this.state.encodeResponse} onIonChange={this.handleChange} clearInput></IonInput>
                    </IonItem>
                </IonContent>
            </IonPage >
        );
    }
};
export default QRcodeScan;