import * as React from 'react';
import Container from '../../components/UI/container/Contanier';
import Gradient from '../../components/UI/gradient/Gradient'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRedo } from '@fortawesome/free-solid-svg-icons'
import { IconButton, } from 'rsuite';
import abbreviate from 'number-abbreviate'
import './Header.scss';

interface props {
    calcMoney: (type: 'plus' | 'minus') => number
}

const Header = ({ calcMoney }: props) => {

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
            <div className="actions">
                <IconButton appearance="subtle" icon={<FontAwesomeIcon icon={faRedo} color="white" />} circle size="lg" />
            </div>
        </Container>
    </header>)
};


export default Header