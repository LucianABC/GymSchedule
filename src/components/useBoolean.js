import {useState} from 'react';

const useBool = (boolValue) => {
    const [bool, setBool] = useState(boolValue);
    const toggleValue = ()=>{
        if (bool){
            setBool(false);
        }else {
            setBool(true);
        }

    }
    return [bool,toggleValue]
}

export default useBool;