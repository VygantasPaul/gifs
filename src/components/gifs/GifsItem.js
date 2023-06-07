import React, {useState} from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faLock, faUnlock} from '@fortawesome/fontawesome-free-solid'


const GifsItem = ({item}) => {
    const [show, setShow] = useState(false)
    const [isActive, setActive] = React.useState(0);
    const toggleShowClass = () => {
        setShow(!show);
    };
    const toggleCLass = () => {
        setActive(!isActive);
    };
    return (
        <div>
            <div className={`card ${isActive ? "locked" : ""}`} onClick={toggleCLass}>
                <div className='card-inner' onClick={toggleShowClass}>
                    <div className='card-front'>
                        <div className='img-square' style={{backgroundImage: `url(${item.images.original_still.url} )`}}>
                            <div className="text-box">
                                <div>
                                    <p><FontAwesomeIcon icon={faLock}/> Click to unlock</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {show ?
                        <div className='card-back '>
                            <div className='img-square' style={{backgroundImage: `url(${item.images.original.url} )`}}>
                                <div className="text-box ">
                                    <div>
                                        <p><FontAwesomeIcon icon={faUnlock}/> Click to lock</p>
                                    </div>
                                </div>
                            </div>
                        </div> : null
                    }
                </div>
            </div>
        </div>
    )
}

export default GifsItem