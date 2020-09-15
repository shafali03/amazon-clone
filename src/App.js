import React, { useEffect } from 'react';
import './App.css';
import Checkout from './components/Checkout/Checkout';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Payment from './components/Payment/Payment';
import Orders from './components/Orders/Orders';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Login from './components/Login/Login';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'

const promise = loadStripe('pk_test_51HQso3A6uCNDXecMXC8Yk4EEFtdYsDwROfYqGFga75mDAyaCMlgan9VB8xeQ1cyZFQoA1Dbkw78CSpY95eAFk9HG00FHWtbIAO')

function App() {
  const [{ }, dispatch] = useStateValue()

  useEffect(() => {

    auth.onAuthStateChanged(authUser => {

      if (authUser) {
        // the user just logged in // the user was logged in 

        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        // the use is logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])

  return (
    <Router>
      <div className="app">

        <Switch>

          <Route path='/orders'>
            <Header />
            <Orders />
          </Route>

          <Route path='/login'>
            <Login />
          </Route>

          <Route path='/checkout'>
            <Header />
            <Checkout />
          </Route>

          <Route path='/payment'>
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>

          <Route path='/'>
            <Header />
            <Home />
          </Route>

        </Switch>

      </div>
    </Router>
  );
}

export default App;
