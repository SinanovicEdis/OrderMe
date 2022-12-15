import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonText, IonImg, IonLabel, IonFabList, IonItem } from '@ionic/react';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonSpinner } from '@ionic/react';

import FloatingButton from '../components/FloatingButton';
import SearchBar from '../components/SearchBar';
import SegmentFilter from '../components/SegmentFilter';
import { getDatabase, ref, child, get } from "firebase/database";
import { IonRippleEffect } from '@ionic/react';
import axios from 'axios'

import '../styles/Home.css'
import '../styles/Menu.css'
import { useEffect, useState } from 'react';

interface Artikel {
  title: string;
  description: string;
  ingredients: Array<string>;
  image: string;
  id: number
  price: number
}

const Home: React.FC = () => {
  const [drinks, setDrinks] = useState<any>([])
  const [selectedItem, setSelectedItem] = useState<Artikel | undefined>(undefined)
  const [isLoaded, setisLoaded] = useState(false)

  const sendGetRequest = () => {
    return axios({
      url: "https://api.sampleapis.com/coffee/hot",
      method: 'get'
    }).then(response => {
      console.log(response);
      return response.data;
    })
  };

  useEffect(() => {
    const dbRef = ref(getDatabase());
    if (drinks.length === 0) {
      get(child(dbRef, '/')).then((snapshot) => {
        if (snapshot.exists()) {
          var arr = snapshot.val()
          setDrinks(arr)
        }
        else {
          console.log("No data available");
        }
      }).catch((error) => {
        console.warn(error.message);
      });
    }
    setisLoaded(true)
  }, [])

  function addArticleToCart(id: number) {
    const article = drinks.filter((e: any) => e.id === id)
    if (localStorage.getItem("cart")) {
      const articles = JSON.parse(localStorage.getItem("cart") || "")
      articles.push(article[0])
      localStorage.setItem("cart", JSON.stringify(articles))
    }
    else {
      localStorage.setItem("cart", JSON.stringify(article))
    }
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          {selectedItem &&
            <>
              <IonTitle>{selectedItem.title}</IonTitle>
            </>
          }
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        {!selectedItem &&
          <><div className='upper'>
            <div className='upper-item-fabBtn'>
              <FloatingButton slot='fixed' vertical='top' horizontal='start' edge={true} />
            </div>
            <div className='upper-item-text'>
              <IonText color={"favorite-black"}><IonText color={"favorite-name"}><b>Edis</b></IonText>, <b>dobrodošel!</b></IonText>
            </div>
          </div>
            <div className='middle'>
              <SearchBar />
              <SegmentFilter />
            </div><div className='menu'>
              {drinks?.map((drink: any) => (
                <div className='menu2'>
                  <IonText color={"favorite-black"}>{drink.title}</IonText>
                  <IonImg className='menu-item' src={drink.image} alt='' onClick={() => { setSelectedItem(drink); }} />

                  <IonButton onClick={() => addArticleToCart(drink.id)} className='menu-btn' color={"favorite-button"}>
                    <IonRippleEffect>
                    </IonRippleEffect>
                    Dodaj
                  </IonButton>

                </div>
              ))}
            </div>
          </>
        }
        {!isLoaded &&
          <>
            <IonItem>
              <IonSpinner name='dots' hidden={isLoaded}></IonSpinner>
            </IonItem>
          </>
        }
        {
          selectedItem &&
          <div className='item-card' onClick={() => setSelectedItem(undefined)}>
            <IonCard>
              <img src={selectedItem.image} alt="item img" />
              <IonCardHeader>
                <IonCardSubtitle color={'light'}>{selectedItem.title}</IonCardSubtitle>
                <IonCardTitle color={"favorite-white"}>{(selectedItem.price).toFixed(2)}€</IonCardTitle>
              </IonCardHeader>
              <IonCardContent>
                <IonLabel color={"medium"}>{selectedItem.description}</IonLabel>
              </IonCardContent>
            </IonCard>
          </div>
        }
      </IonContent>
    </IonPage >
  );
};

export default Home;

