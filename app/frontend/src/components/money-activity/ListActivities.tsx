import * as React from 'react';
import MoneyActivity, { activitySchema } from './Item/MoneyActivity'
import './ListActivities.scss';
interface props {
    list: activitySchema[]
}

const ListActivities = ({ list }: props) => (
    <div className="acts-list">
        {list.map((a,i) => <MoneyActivity key={a.id} data={a} index={i} />)}
    </div>
)

export default ListActivities;