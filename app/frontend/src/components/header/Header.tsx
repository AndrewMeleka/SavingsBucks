import React from 'react';
import Container from '../../components/UI/container/Contanier';
import Gradient from '../../components/UI/gradient/Gradient'
import abbreviate from 'number-abbreviate'
import ResetMoney from './ResetMoney'
import './Header.scss';

interface props {
    calcMoney: (type: 'plus' | 'minus') => number,
    handleActs: (acts: []) => void
}

const Header = ({ calcMoney, handleActs }: props) => {
    const savings = calcMoney('plus') - calcMoney('minus');
    return (<header className="app-header">
        {/* Gradient */}
        <Gradient />
        {/* Content */}
        <Container>
            <h3 className="savings">Savings</h3>
            <div className="header_money">
                <h1>{abbreviate(savings, 1)}</h1>
                <div className="money_info">
                    <span style={{ color: "#03C4A1" }}>{abbreviate(calcMoney('plus'))}</span>
                    <span style={{ color: "#FF6F6F" }}>{abbreviate(calcMoney('minus'))}</span>
                </div>
            </div>
            {/* Reset Money */}
            <ResetMoney handleActs={handleActs} />
        </Container>
    </header>)
};


export default Header