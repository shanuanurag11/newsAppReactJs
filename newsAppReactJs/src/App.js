import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './Pages/HomePage'
import Layout from './Component/Layout'



const App = () => {
  // function for sending categories types
  const [catValue, setCatValue] = useState(null)
  const updateCatValue = (val) => {
    setCatValue(val)
  }

  return (

    <Router>
      <Layout updateCatValue={updateCatValue} />
      <Switch>
        <Route path="/" render={(props) => (
          <HomePage {...props} catValue={catValue} />
        )} />
      </Switch>
    </Router>

  )
}

export default App;
