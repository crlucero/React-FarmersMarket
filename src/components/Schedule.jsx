import React from 'react'
import PropTypes from 'prop-types'

function Schedule(props) {
    return (
        <div>
            <style jsx>{`
                .schedule{
                    padding-left: 10px;
                }
            `}

            </style>
            <div className='schedule'>
                <p>Day: {props.day}</p>
                <p>Location: {props.location}</p>
                <p>Hours: {props.hours}</p>
                <p>Booth: {props.booth}</p>
            </div>
            <hr/>
        </div>
    )
}
export default Schedule

Schedule.propTypes = {
    day: PropTypes.string,
    location: PropTypes.string,
    hours: PropTypes.string,
    booth: PropTypes.string
}


