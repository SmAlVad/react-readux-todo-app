import React from "react";
import PropTypes from "prop-types";
import "./Title.sass";

const Title = ({title}) => (
    <h1 className='title'>{title}</h1>
);

Title.propTypes = {
    title: PropTypes.string
};

Title.defaultProps = {
    Title: 'Simple title'
};

export default Title;
