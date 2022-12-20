import { Link, Redirect, Route, Switch } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';
import Login from './pages/Login'
/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import { useCallback, useContext, useEffect, useRef, useState } from 'react';
import GuardedRoute from './utils/GuardedRoute';
import { getAuthState } from './firebaseConfig';
import Registration from './pages/Registration';
import ScanQR from './pages/ScanQR';
import UserInfo from './pages/UserInfo';
import Cart from './pages/Cart';

setupIonicReact();


function App() {
  const [isAutheticated, setisAutheticated] = useState<Boolean>(false)

  useEffect(() => {
    const res = getAuthState()
    console.warn(localStorage.getItem("prijavljen"))
  }, []);

  return (
    < IonApp >
      <IonReactRouter>
        <Switch>
          {
            localStorage.getItem("prijavljen") ? <Route exact path='/' component={Home} /> : <Route exact path='/' component={Login}></Route>
          }
          <Route path='/login' component={Login} />
          <Route path='/registration' component={Registration} />
          <GuardedRoute path='/home' component={Home} auth={localStorage.getItem("prijavljen")} />
          <GuardedRoute path='/scan' component={ScanQR} auth={localStorage.getItem("prijavljen")} />
          <GuardedRoute path='/user' component={UserInfo} auth={localStorage.getItem("prijavljen")} />
          <GuardedRoute path='/cart' component={Cart} auth={localStorage.getItem("prijavljen")} />
        </Switch>
      </IonReactRouter>
    </IonApp >

  )
};

export default App;


