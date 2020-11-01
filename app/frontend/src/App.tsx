import React, { useState } from 'react';
import Header from './components/header/Header';
import { activitySchema } from './components/money-activity/Item/MoneyActivity'
import AddMoney from './components/add-money/AddMoney'
import ListActivities from './components/money-activity/ListActivities'


const listActs: activitySchema[] = []

function App() {
  const [acts, setActs] = useState(listActs)
  const addMoney = (act: activitySchema) => setActs((prev) => [...prev, act])
  const calcMoney = (type: 'plus' | 'minus') => {
    let num = 0;
    acts.forEach(a => a.type === type && (num += a.value))
    return num
  }
  return (
    <div className="app">
      {/* Header */}
      <Header calcMoney={calcMoney} />
      {/* Add Activity */}
      <AddMoney add={addMoney} />
      {/* Money List */}
      <ListActivities list={acts} />
    </div>
  );
}

export default App;
