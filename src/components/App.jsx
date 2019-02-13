import React from 'react';
import Header from './Header'
import Welcome from './Welcome'
import ScheduleList from './ScheduleList'
import ProductList from './ProductList'
import { Switch, Route } from 'react-router-dom'


function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={Welcome} />
        <Route path='/schedule' component={ScheduleList} />
        <Route path='/seasonal' component={ProductList} />
      </Switch>
    </div>
  )
}

export default App