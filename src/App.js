import React, {useState, useReducer} from 'react';
import './App.css';
import ScheduleContext from './ScheduleContext';
import Agenda from './components/Agenda/Agenda';
import useBool from './components/useBoolean';

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
  const [days, dispatch] = useReducer(reducer, {
    Lunes:[{id:0,name:"abdominales",quantity:0,done:true}],
    Martes:[],
    Miercoles:[],
    Jueves:[],
    Viernes:[],
    Sabado:[],
    Domingo:[]
  });
  
  const addActivity =(dayName, nActivity)=> dispatch({type: dayName, payload:nActivity});
    
  const handleActivities = (dayName, nActivity) => {
    
    console.log(days, dayName)
    let activitiesClone = [...(days[dayName])];
        console.log(activitiesClone)
    let index = activitiesClone.findIndex(item=> item.id ===nActivity.id);
    if (index !==-1) {

      activitiesClone[index]=nActivity;
    } else {
      activitiesClone.push(nActivity);
    }
    addActivity(dayName, activitiesClone);
  


  }
    
  const dayKeys = Object.keys(days);

  return (
    <ScheduleContext.Provider value={{
      days,
      handleActivities,
      dayKeys,
      useBool
    }}>

      <div className="App">
        <Agenda></Agenda>
      </div>
    </ScheduleContext.Provider>
  );
}

export default App;
