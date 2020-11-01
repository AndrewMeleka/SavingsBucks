import React, { useState } from 'react';
import { Button, Input } from 'rsuite';
import Modal from '../UI/modal/Modal'
import { activitySchema } from '../money-activity/Item/MoneyActivity'
import './AddMoney.scss'

interface props {
    add: (act: activitySchema) => void
}
const AddMoney = ({ add }: props) => {
    const [modal, setModal] = useState(false);
    const [amount, setAmount] = useState(0)
    const handleAddMoney = (type: 'minus' | 'plus') => {
        if(!amount || amount < 0) return;
        add({
            id: Math.random().toString(),
            value: amount,
            type,
            date: Date()
        })
        setAmount(0)
        setModal(false)
    }

    const footer = (
        <React.Fragment>
            <Button className="btn-minus" onClick={() => handleAddMoney('minus')}>-</Button>
            <Button className="btn-plus" onClick={() => handleAddMoney('plus')}>+</Button>
        </React.Fragment>
    )
    return (
        <div className="add-money">
            <Button className="btn-add" appearance="subtle" onClick={() => setModal(true)}>+</Button>
            {/* Add Modal */}
            <Modal status={modal} handle={setModal} footer={footer}>
                <Input type="number" placeholder="Money Amount" onChange={(v) => setAmount(+v)} />
                <div className="money-result">{amount}</div>
            </Modal>
        </div>
    )
}

export default AddMoney