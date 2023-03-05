import React from 'react'
import {useEffect,useContext} from 'react';
import {Data} from '../../Context/Context'
import {FaEdit,FaTrash} from 'react-icons/fa'
import { useAuthContext } from '../../Hooks/useAuthContext';
import './Record.css'
const Record = () => {
  //GET REQUEST
  //state for geting data 
  const {user}=useAuthContext();
  const {workouts,getworkouts,deleteworkout,toggleupdate} = useContext(Data);
  //getting data from backend to front end
  useEffect(() => {
    if(user){
getworkouts();
    }
  }, [user,getworkouts]);

  return (
    <>
      {workouts && workouts.map((item) => {
        return (
          <div className="records" key={item._id}>
            <div className="div1">
              <h1>Title: {item.title}</h1>
              <span>Reps: {item.reps}</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <span>Load(In Kg): {item.load}</span>
              <button className='bt1' onClick={() => { toggleupdate(item) }}><FaEdit/></button>{" "}
              <button className='bt2' onClick={() => { deleteworkout(item._id) }}><FaTrash/></button>
            </div>
          </div>
        )
      })}
    </>
  )
}

export default Record