import React, {useContext} from 'react';
import ScheduleContext from '../../../ScheduleContext';
const Activity = ({activity, dayName}) => {
    const {useBool,handleActivities} = useContext(ScheduleContext);
    const [checkboxBool, toggleValue] = useBool(false);
   
    const handleChange =()=>{
        toggleValue();
        const nActivity={
            id: activity.id,
            name: activity.name,
            quantity: activity.quantity,
            done: checkboxBool
        }   
        handleActivities(dayName, nActivity);
    }
  
    return(
        <div>
            <span> edit </span>
            <span> {activity.name}</span>
            <span> {activity.quantity}</span>
            <input type="checkbox" onChange={handleChange} />
        </div>
    );
}


export default Activity;