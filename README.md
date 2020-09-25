# Amazon clone


[Amazon clone](https://clone-84608.web.app)

An Amazon clone allows users to register or sign in for authentication. The user can select items and click on the basket icon to display all the goods specified. The user can remove any item if they don't want to proceed to checkout. At checkout,  the user can continue for payment or remove the item from the cart. To process the order with demo card details, the user must enter 16 digit card. <br><br>
4242 4242 4242 4242  <br>
MM/YY   CVC   ZIP <br>09/22     123     45678 <br><br>Once the order has been placed and processed, the users can view the order history with an order number.
<br>

<img src="https://res.cloudinary.com/shafali/image/upload/v1601030069/amazon-1000_e4xpk2.gif" width='800px' height='auto'>


#### Packages Installed
```
sudo npm install -g firebase-tools
yarn add @material-ui/core
yarn add @material-ui/icons
yarn add react-currency-format
yarn add moment
yarn add firebase
```


#### Stripe setup
```
yarn add stripe @stripe/stripe-js @stripe/react-stripe-js
yarn add axios
```

#### Setting up Cloud function

```
firebase init
Functions: Configure and deploy Cloud Functions (press space and enter)
What language would you like to use to write Cloud Functions? JavaScript
Do you want to use ESLint to catch probable bugs and enforce style? Y
Do you want to install dependencies with npm now? y
```

### Backend

#### run serverless framework
```
firebase emulators:start
```

#### Packages Installed for backend

```
npm i express   
npm i stripe    
```

#### Steps to deploy project front end
```
yarn build 
firebase deploy --only hosting               
```

#### Step to deploy backend
```
firebase deploy --only functions
```

### Tech stack used
* React Hooks
* Firebase
* Cloud Functions
* Stripe
