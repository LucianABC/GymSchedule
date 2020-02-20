import React, {useState, useReducer} from 'react';
import './App.css';
import ScheduleContext from './ScheduleContext';
import DayCard from './components/DayCard/DayCard';
import BrowserMenu from './components/BrowserMenu/BrowserMenu';

const reducer =(state, action) =>{
  switch(action.type){
    case "Lunes":
      return {...state, Lunes: action.payload};
    case "Martes":
      return {...state, Martes: action.payload};
    case "Miercoles":
      return {...state, Miercoles: action.payload};
    case "Jueves":
      return {...state, Jueves: action.payload};
    case "Viernes":
      return {...state, Viernes: action.payload};
    case "Sabado":
      return {...state, Sabado: action.payload};
    case "Domingo":
      return {...state, Domingo: action.payload};
    default:
      return state;
  }
}; 

function App() {

  const days = {
    Lunes:[{id:0,name:"abdominales",quantity:0,done:true}],
    Martes:[],
    Miercoles:[],
    Jueves:[],
    Viernes:[],
    Sabado:[],
    Domingo:[]
  }
  const [state, dispatch] = useReducer(reducer, days);

  const addActivity =(dayName)=> dispatch({type: dayName, payload:activities})

  const [activities, setActivities] = useState();

  const handleActivities = (dayName, nActivity) => {
    setActivities(...activities, nActivity)
    addActivity(dayName)
  }
  const dayKeys = Object.keys(days)

  return (
    <ScheduleContext.Provider value={{
      days,
      handleActivities,
      dayKeys
    }}>

      <div className="App">
        {
          dayKeys.map(key =>{
            return  <DayCard dayName={key} ></DayCard>
          })
        }
      </div>
    </ScheduleContext.Provider>
  );
}

export default App;
