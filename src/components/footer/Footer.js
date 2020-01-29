import React from "react";
import PropTypes from "prop-types";
import "./Footer.sass";

const FILTERS_BTN = [
    {id: 'all', text: 'all'},
    {id: 'active', text: 'active'},
    {id: 'completed', text: 'completed'}
];

const Footer = ({amount, activeFilter, changeFilter}) => (
    <footer>
        <span className='amount'>{`${amount} tasks left`}</span>
        <div className='btn-group'>
            {FILTERS_BTN.map(({id, text}) => (
                <button
                    key={id}
                    onClick={() => changeFilter(id)}
                    className={id === activeFilter ? 'filter-btn active' : 'filter-btn'}
                >
                    {text}
                </button>
            ))}
        </div>
    </footer>
);

Footer.propTypes = {
    amount: PropTypes.number,
    activeFilter: PropTypes.string,
    changeFilter: PropTypes.func,
};

Footer.defaultProps = {
    amount: 0,
    activeFilter: 'all',
    changeFilter: () => {
    }
};

export default Footer;
