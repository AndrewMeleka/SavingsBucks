import * as React from 'react';
import Gradient from '../../components/UI/gradient/Gradient'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import './styles.scss';

const header = () => (
    <header className="app-header">
        <Gradient />
        <h3 className="savings">Savings</h3>
        <div className="header_money">
            <h1>1213</h1>
            <div className="money_info">
                <span style={{ color: "#03C4A1" }}>31243</span>
                <span style={{ color: "#FF6F6F" }}>53532</span>
            </div>
        </div>
        <button>
            <FontAwesomeIcon icon={faCoffee} color="white" />
        </button>
    </header>
);
export default header