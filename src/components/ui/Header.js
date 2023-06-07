import React from 'react'
import logo from '../../img/TESTHY.svg'
import Button from './Button'
import {faInfoCircle} from "@fortawesome/fontawesome-free-solid";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Header = () => {
    return (
        <header>
            <div className='d-flex header-nav justify-content-between'>
                <div><img src={logo} alt=''/></div>
                <div><FontAwesomeIcon icon={faInfoCircle} /> Press <a href="#" className="text-white">spacebar</a> to shuffle or <Button color='green' text='Click here' /> </div>
            </div>
        </header>
    )
}

export default Header
