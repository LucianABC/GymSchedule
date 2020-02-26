import React, {useState,useContext} from 'react';
import ScheduleContext from '../../ScheduleContext';
import './DayCard.scss';
import Activity from './components/Activity'
import Title from './components/Title/Title';

const DayCard = ({dayName}) => {
    const {days, handleActivities, useBool} = useContext(ScheduleContext);
    const [activityName, setActivityName] = useState("");
    const [quantity, setQuantity]= useState(0);
    const [bool, toggleValue] = useBool(false);
    
    const handleClick =() =>{
        const activity={
            id: days[dayName].length,
            name: activityName,
            quantity: quantity,
            done: false
        }
        handleActivities(dayName, "add", activity);
    }
    return(
        <div className="day-card">
            <Title day={dayName}></Title>
            {
            days[dayName].map(activity =>{
                return (<Activity dayName={dayName} 
                                    activity={activity}></Activity>)
                })
            }
            <button onClick={toggleValue}>+</button>
            {bool?
            <div>
                <input type="text" onChange={e=> setActivityName(e.target.value)}/>
                <input type="number" onChange={e=> setQuantity(e.target.value)}/>
                <button onClick={handleClick}> Send</button> 
            </div> : null}
        </div>
    );
}


export default DayCard