import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
const text = "Hello from outside"

const reactElement = React.createElement(
  'a',
  {href: 'google.com', target: '_blank'},
  'click here',
  text

)


ReactDOM.createRoot(document.getElementById('root')).render(
  
    /* <App /> */
    reactElement

)
