import React from 'react'

export default function Button({btnStyle, txtBtn}) {
    return (
        <button className={`btn ${btnStyle}`}>{txtBtn}</button>
    )
}