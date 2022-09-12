import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Impot "Provider" for wrapping.....
import { Provider } from 'react-redux';

// store... to give in the value of "store"-
import store from './redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(

  <Provider store = {store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// mongoose 
//  .connect(process.env.MONGO_PROD_URI, {
//         useNewUrlParser: true,
//         useUnifiedTopology: true,
//         useCreateIndex: true,   })   
//  .then(() => console.log("Database connected!"))
//  .catch(err => console.log(err));
