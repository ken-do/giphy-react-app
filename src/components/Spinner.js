import React from 'react'

const Spinner = props => {
    return <div className={'Spinner ' + (props.show ? 'show' : 'hide')} />
}

export default Spinner
