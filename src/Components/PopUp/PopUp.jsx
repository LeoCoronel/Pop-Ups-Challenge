import React from 'react'
import Button from '../Button/Button';

const PopUp = ({image, text, btnStyle, txtBtn}) => {
    return (
        <div className='popUp'>
            <div className="close">X</div>
            <div className="image">
                <img src={image} alt="image" />
            </div>
            <div className="text">
                {text}
            </div>
            <div className="button">
                <Button btnStyle={btnStyle} txtBtn={txtBtn}/>
            </div>
        </div>
    )
}

export default PopUp