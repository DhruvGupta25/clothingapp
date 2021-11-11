import React from 'react';
import { Routes, Route,Navigate  } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import Homepage  from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import CheckoutPage from './pages/checkout/checkout.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-uppage/sign-in-and-sign-up-component';
import Header from './components/header/header.component';
import { createUserProfileDocument } from './firebase/firebase.utils';
import './App.css';
import { auth } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.actions'; 
import { selectCurrentUser } from './redux/user/user.selectors';
class App extends React.Component {
  unsubscribeFromAuth = null;
  componentDidMount(){
    
    const {setCurrentUser} = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot =>{
          setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
          });
        });
      }
      setCurrentUser( userAuth );
    });
  }

  componentWillUnmount(){ 
    this.unsubscribeFromAuth();
  }
  render(){
    return (
    <div>
     <Header />
     <Routes>
     <Route exact path='/' element={<Homepage />} />
     <Route path='/shop' element={<ShopPage />} />
     <Route path='/signin' element={(() => {
                  if (this.props.currentUser) {
                    return <Navigate to={`/`} />
                  } else {
                    return <SignInAndSignUpPage />
                  }
                })()}
              />
     <Route exact path='/checkout' element={<CheckoutPage/>} />
     </Routes>
    </div>
  );
}
}
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch =>({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
