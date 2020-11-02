import React, { useEffect, useState } from 'react';
import Header from './components/header/Header';
import { activitySchema } from './components/money-activity/Item/MoneyActivity'
import AddMoney from './components/add-money/AddMoney'
import ListActivities from './components/money-activity/ListActivities'
import { IconButton } from 'rsuite';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltDown } from '@fortawesome/free-solid-svg-icons';
import { saveItems, loadItems } from './utils/handleLog'


const listActs: activitySchema[] = []

function App() {
  const [acts, setActs] = useState(listActs)
  const [more, setMore] = useState(false);
  const finalActs = more ? acts : acts.slice(0, 3)
  const addMoney = (act: activitySchema) => setActs((prev) => [act, ...prev])
  const calcMoney = (type: 'plus' | 'minus') => {
    let num = 0;
    acts.forEach(a => a.type === type && (num += a.value))
    return num
  }
  useEffect(() => setActs(loadItems), [])
  useEffect(() => {
    saveItems(acts)
  }, [acts])

  return (
    <div className="app">
      {/* Header */}
      <Header calcMoney={calcMoney} handleActs={setActs} />
      {/* Add Activity */}
      <AddMoney add={addMoney} />
      {/* Money List */}
      <ListActivities list={finalActs} />
      {/* Footer - Loadmore */}
      {!more && !more && acts.length > 3 && <footer style={{ textAlign: 'center' }}>
        <IconButton onClick={() => setMore(true)} className="loadmore" appearance="subtle" icon={<FontAwesomeIcon icon={faLongArrowAltDown} color="white" />} size="lg" />
      </footer>}
    </div>
  );
}

export default App;
