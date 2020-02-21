import React, {useContext} from 'react';
import ScheduleContext from '../../ScheduleContext';
import DayCard from '../DayCard/DayCard';

import './Agenda.scss';

const Agenda = () => {
    const {dayKeys} = useContext(ScheduleContext);
    return(
        <section>
            {
                dayKeys.map(key =>{
                    return  <DayCard dayName={key} ></DayCard>
                })
            }
        </section>
    );
}


export default Agenda