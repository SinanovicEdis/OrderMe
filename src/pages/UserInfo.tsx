import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonText, IonFabButton, IonIcon, IonFabList, IonItem } from '@ionic/react';
import BackButton from '../components/BackButton';
import { logOut } from '../firebaseConfig';

const UserInfo: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <BackButton path={"home"}></BackButton>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonTitle>User info</IonTitle>
        <IonButton onClick={() => logOut()}>Sign out</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default UserInfo;
