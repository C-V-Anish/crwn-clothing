import { Route,Routes} from 'react-router-dom';
import Home from './routes/home/home.component'
import Navigation from './routes/navigation/navigation.component';
import Authentication from './routes/authentication/authentication';
import Shop from './routes/shop/shop-component';
import Checkout from './routes/checkout/checkout-component';
import { useEffect } from 'react';
import { onAuthStateChangedListener,createUserDocumentfromAuth } from './utils/firebase/fiebase.utils';
import { setCurrentUser } from './store/user/user_actions';
import { useDispatch } from 'react-redux';

const App = () => {
const dispatch=useDispatch();

  useEffect(()=>{
    const unsubscribe = onAuthStateChangedListener((user)=>{
        if(user){
            createUserDocumentfromAuth(user)
        }
        dispatch(setCurrentUser(user));
    });
    return unsubscribe;
},[]);

  return (
  <Routes>
    <Route path='/' element={<Navigation />}>
      <Route index element={<Home />}/>
      <Route path='shop/*' element={<Shop />}/>
      <Route path='auth' element={<Authentication />}/>
      <Route path='checkout' element={<Checkout />}/>
    </Route>
  </Routes>);
}

export default App;
