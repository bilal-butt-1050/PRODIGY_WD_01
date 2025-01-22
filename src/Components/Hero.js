import React from 'react'
import PropTypes from 'prop-types'

export default function Hero(props) {
    return (
        <>
        <div className='hero-section'>
            <div className="hero-content fade-in">
                {props.herocontent}
                <button className='stories-btn'>{props.heroBtn}</button>
            </div>
        </div>
        </>
    )
}
