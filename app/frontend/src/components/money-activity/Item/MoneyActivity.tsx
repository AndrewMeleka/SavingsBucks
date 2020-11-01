import React, { useState } from 'react';
import { motion } from 'framer-motion';
import moment from 'moment';
import './MoneyActivity.scss';
export interface activitySchema {
    id: string,
    value: number,
    type: 'plus' | 'minus',
    date: string
}
interface props {
    data: activitySchema,
    index: number
}
const animate = {
    from: {
        x: '-100%',
    },
    to: (i: number) => ({
        x: 0,
        transition: {
            delay: i * .25,
            duration: .5,
            ease: "easeOut",
            when: "afterChildren",
        }
    })
}

const signType = (type: string): string => type === 'plus' ? '+' : '-';

const MoneyActivity = ({ data, index }: props) => {
    const [humanDate, setHumanDate] = useState('')
    setInterval(() => setHumanDate(moment(data.date).fromNow()), 60000)
    return (
        <div className={`money__activity type-${data.type}`}>
            <motion.div custom={index} className="money-background" variants={animate} initial="from" animate="to" />
            <div className="value">{signType(data.type)}{data.value}</div>
            <div className="date">{humanDate || 'a few seconds ago'}</div>
        </div>
    )
}

export default MoneyActivity