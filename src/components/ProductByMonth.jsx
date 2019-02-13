import React from 'react'
import PropTypes from 'prop-types'

function ProducByMonth(props){
    return (
        <div>
            <style jsx> {`
            
            `}
            </style>
            <div className='product'>
                <p>Month: {props.month} </p>
                <ul>
                    {props.selection.map((x) =>
                        <li>{x}</li>
                    )}
                </ul>
            </div>
        </div>
    )
}

export default ProducByMonth

ProducByMonth.propTypes = {
    month: PropTypes.string,
    selection: PropTypes.array
}