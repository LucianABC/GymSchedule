import React, {useContext} from 'react';
import ScheduleContext from '../../ScheduleContext';
import './DayCard.scss';
import Activity from './components/Activity'
import Title from './components/Title/Title';

const DayCard = ({dayName}) => {
    const {days} = useContext(ScheduleContext);
    return(
        <div className="day-card">
            <Title day={dayName}></Title>
            {
            days[dayName].map(activity =>{
                return (<Activity name={activity.name} 
                                quantity={activity.quantity}
                                done={activity.done}></Activity>)
                })
            }
            <button>+</button>
            // cuando apretas==> habilita input para agregar actividad
        </div>
    );
}


export default DayCard