import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRedo } from '@fortawesome/free-solid-svg-icons'
import { IconButton, } from 'rsuite';
import Modal from '../UI/modal/Modal'

interface props {
    handleActs: (acts: []) => void
}

const ResetMoney = ({ handleActs }: props) => {
    const [confirm, setConfirm] = useState(false)
    const resetEverything = () => { handleActs([]); setConfirm(false) }
    return (
        <div className="actions" >
            <IconButton onClick={() => setConfirm(true)} appearance="subtle" icon={<FontAwesomeIcon icon={faRedo} color="white" />} circle size="lg" />
            <Modal status={confirm} handle={setConfirm} title="Reset everything" ok={resetEverything}>
                Are you sure you want to reset everything ?
            </Modal>
        </div>
    )
}

export default ResetMoney