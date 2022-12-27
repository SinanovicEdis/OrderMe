import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonText, IonImg, IonLabel, IonFabList, IonItem } from '@ionic/react';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonSpinner, IonIcon } from '@ionic/react';
import FloatingButton from '../components/FloatingButton';
import SearchBar from '../components/SearchBar';
import SegmentFilter from '../components/SegmentFilter';
import { addCircleOutline, heartOutline } from 'ionicons/icons';

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
  uuid: string
  price: number
}

const Home: React.FC = () => {
  const [drinks, setDrinks] = useState<any>([])
  const [selectedItem, setSelectedItem] = useState<Artikel | undefined>(undefined)
  const [isLoaded, setisLoaded] = useState(false)
  const user = JSON.parse(localStorage.getItem("user") || "")
  var userName = getUserName()


  const sendGetRequest = () => {
    return axios({
      url: "https://api.sampleapis.com/coffee/hot",
      method: 'get'
    }).then(response => {
      console.log(response);
      return response.data;
    })
  };

  function getUserName(): string {
    var email = user.email
    var result = email.slice(0, email.indexOf('@'));
    if (result.includes(".")) {
      result = result.slice(0, result.indexOf('.'))
    }

    result = result.toLowerCase()
    result = result.charAt(0).toUpperCase() + result.slice(1)

    return result
  }

  useEffect(() => {
    try {
      const dbRef = ref(getDatabase());
      if (drinks.length === 0) {
        get(child(dbRef, '/Drinks')).then((snapshot) => {
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
    } catch (e) {
      console.log('Error')
    }
  }, [])

  function addArticleToCart(uid_: string) {
    const article = drinks.filter((e: any) => e.uuid === uid_)
    if (localStorage.getItem("cart")) {
      const articles = JSON.parse(localStorage.getItem("cart") || "")
      articles.push(article[0])
      localStorage.setItem("cart", JSON.stringify(articles))
    }
    else {
      localStorage.setItem("cart", JSON.stringify(article))
    }
  }

  function addArticleToFavorite(id: number) {
    const article = drinks.filter((e: any) => e.id === id)
    if (localStorage.getItem("favorite")) {
      const articles = JSON.parse(localStorage.getItem("cart") || "")
      articles.push(article[0])
      localStorage.setItem("favorite", JSON.stringify(articles))
    }
    else {
      localStorage.setItem("favorite", JSON.stringify(article))
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
              <IonText color={"favorite-black"}><IonText color={"favorite-name"}><b>{userName}</b></IonText>, <b>dobrodošel!</b></IonText>
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

                  <IonButton onClick={() => addArticleToCart(drink.uuid)} className='menu-btn' color={"favorite-button"}>
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
                <IonCardSubtitle color={'favorite-white'}>{selectedItem.title}</IonCardSubtitle>
                <IonCardTitle color={"favorite-white"}>{(selectedItem.price).toFixed(2)}€</IonCardTitle>
              </IonCardHeader>
              <IonCardContent>
                <IonLabel color={"medium"}>{selectedItem.description}</IonLabel>
              </IonCardContent>
              <IonCardTitle>
                <IonIcon icon={addCircleOutline} onClick={() => addArticleToCart(selectedItem.uuid)} size='large' color='favorite-white' style={{ padding: "10px" }}></IonIcon>
                <IonIcon icon={heartOutline} size='large' color='favorite-white' style={{ padding: "10px" }}></IonIcon>
              </IonCardTitle>
            </IonCard>
          </div>
        }
      </IonContent>
    </IonPage >
  );
};

export default Home;

