# Amazon clone

https://clone-84608.web.app

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
