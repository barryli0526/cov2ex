import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './index.css'

export default class Navbar extends Component {
    render() {
        return (
            <div className='v2-navbar'>
                <div className='v2-logo'>
                    <Link to='/'>
                        <img src="https://cdn.v2ex.co/site/logo@2x.png" alt="v2ex_logo" width="94" height="30" />
                    </Link>
                </div>
            </div>
        );
    }
}
