import React from "react";
import { IonButton, IonContent, IonHeader, IonIcon, IonImg, IonLabel, IonPage, IonTitle, IonToolbar } from "@ionic/react";
import { } from 'ionicons'
import { ScanSharp } from 'react-ionicons'
import "../styles/ScanQR.css"
const ScanQR: React.FC = () => {

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>

                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <div className="title">
                    <div style={{ whiteSpace: "normal", fontSize: "5.0vw" }}>
                        <IonLabel color={"favorite-black"} className="title-content">Poskeniraj QR kodo,</IonLabel>
                        <br></br>
                        <IonLabel color={"favorite-black"} className="title-content">&nbsp; najdeš jo na mizi!</IonLabel>
                    </div>
                </div>

                <div className="qr-code-img-div">
                    <IonImg className="qr-code-img" src="https://cdn-icons-png.flaticon.com/512/714/714390.png" alt="qr code scan"></IonImg>
                </div>

                <div className="div-button" style={{ backgroundColor: "", height: "20%" }}>
                    <IonButton color={"favorite-green"} className="scan-btn">
                        <ScanSharp
                            color={'#ffffff'}
                            height="30px"
                            width="30px" /> &nbsp; Scan QR code</IonButton>
                </div>
                {/* 
                <div className="grid-container">
                    <div className="grid-item">1</div>
                    <div className="grid-item">
                        <IonTitle color={"favorite-black"}>
                            <div className="grid-item" style={{ whiteSpace: "normal", fontSize: "5.0vw" }}>
                                <IonLabel color={"favorite-black"}>Poskeniraj QR kodo,</IonLabel>
                                <br></br>
                                <IonLabel color={"favorite-black"}>najdeš jo na mizi!</IonLabel>
                            </div>
                        </IonTitle>
                    </div>
                    <div className="grid-item">3</div>
                    <div className="grid-item">4</div>
                    <div className="grid-item">5</div>
                    <div className="grid-item">6</div>
                    <div className="grid-item">7</div>
                    <div className="grid-item">
                        <IonImg src="https://www.pngfind.com/pngs/m/265-2655823_qr-icon-svg-hd-png-download.png" alt="qr code scan"></IonImg>
                    </div>
                    <div className="grid-item">9</div>
                </div> */}
            </IonContent>
        </IonPage >
    )
}

export default ScanQR