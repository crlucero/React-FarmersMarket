import React from 'react'
import Schedule from './Schedule'

const marketSchedule = [
  {
    day: 'Sunday',
    location: 'Lents International',
    hours: '9:00am - 2:00pm',
    booth: '4A'
  },
  {
    day: 'Monday',
    location: 'Pioneer Courthouse Square',
    hours: '10:00am - 2:00pm',
    booth: '7C'
  },
  {
    day: 'Tuesday',
    location: 'Hillsboro',
    hours: '5:00pm - 8:30pm',
    booth: '1F'
  },
  {
    day: 'Wednesday',
    location: 'Shemanski Park',
    hours: '10:00am - 2:00pm',
    booth: '3E'
  },
  {
    day: 'Thursday',
    location: 'Northwest Portland',
    hours: '2:00pm - 6:00pm',
    booth: '6D'
  },
  {
    day: 'Saturday',
    location: 'Beaverton',
    hours: '10:00am - 1:30pm',
    booth: '9G'
  }
]

function ScheduleList() {
  return (
    <div>
      <style jsx>
        {`
        .container {
          padding-left: 28%;
        }
          .list {
            text-align: center;
            margin: 10px;
            padding: 15px;
            border: solid 1px;
            border: solid gray;
            border-radius: 8px;
            width: 500px;
            background-color: #93f4ce;
            border-radius: 12px;
            float: left;
          }
          .subTitle {
            padding-left: 10px;
            font-weight: bold;
          }
        `}
      </style>
      <div className='container' >
        <div className="list">
          <h4 className="subTitle">Our Weekly Schedule</h4>
          <hr />
          {marketSchedule.map((place, index) => (
            <Schedule
              day={place.day}
              location={place.location}
              hours={place.hours}
              booth={place.booth}
              key={index}
            />
          ))}
        </div>
      </div>
      
    </div>
  );
}
export default ScheduleList
