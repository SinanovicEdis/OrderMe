import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonFab, IonFabButton, IonIcon, IonFabList, IonItem } from '@ionic/react';
import { chevronDownCircle, home, cart, person, heart, colorPalette, document, globe } from 'ionicons/icons';
import FloatingButton from '../components/FloatingButton';
import { logOut } from '../firebaseConfig';
import '../styles/Home.css'

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar></IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <FloatingButton slot='fixed' vertical='top' horizontal='start' edge={false} />
        <IonButton onClick={() => logOut()}>Sign out</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Home;
