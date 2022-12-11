import React from "react";
import { IonButton, IonContent, IonHeader, IonIcon, IonImg, IonLabel, IonPage, IonTitle, IonToolbar } from "@ionic/react";
import scanIcon from '../assets/icons/scan-sharp.svg'
import "../styles/ScanQR.css"
import BackButton from "../components/BackButton";
const ScanQR: React.FC = () => {

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <BackButton path={"home"}></BackButton>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen style={{ Height: "100%" }}>
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
                        <IonIcon color="favorite-white" src={scanIcon}></IonIcon>
                        &nbsp; Scan QR code</IonButton>
                </div>
            </IonContent>
        </IonPage >
    )
}

export default ScanQR