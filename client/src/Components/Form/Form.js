import axios from 'axios';
import React, { useContext } from 'react'
import { Data } from '../../Context/Context'
import { useAuthContext } from '../../Hooks/useAuthContext';
import './Form.css'
const Form = () => {
  const {user}=useAuthContext();

  const { workouts, setworkouts, form, setform, getworkouts,updateform,setupdateform} = useContext(Data);
  const updateformfield = (e) => {
    const { name, value } = e.target;
    setform({ ...form, [name]: value, });
  };
  const createworkout = async (e) => {
    e.preventDefault();
    const res1 = await axios.post("http://localhost:4000/api/workout", form,{
      headers:{
          Authorization:`Bearer ${user.token}`
      }
  });
    setworkouts([...workouts, res1.data]); //on submit a data did not re rendering
    setform({
      title: "",
      reps: "",
      load: ""
    })
    getworkouts();
  };

  //update form function
  const handleupdateformfield = (e) => {
    const { name, value, } = e.target;
    setupdateform({ ...updateform, [name]: value, },);
};

const updateworkout = async (e) => {
    e.preventDefault();
    const { _id, title, reps, load } = updateform;
    await axios.patch(`http://localhost:4000/api/workout/${_id}`, { title, reps, load },{
      headers:{
          Authorization:`Bearer ${user.token}`
      }
  });
    getworkouts();
    setupdateform({
        _id: null,
        title: "",
        reps: "",
        load: ""
    },);
};


  return (
    <>
    {/* create form */}
    {!updateform._id &&
      <form onSubmit={createworkout}>
        <h1>Create Records</h1>
        <label htmlFor="">Title :</label>
        <input type="text" name='title' value={form.title} onChange={updateformfield} autofocus='on'/><br />
        <label htmlFor="">Reps :</label>
        <input type="text" name='reps' value={form.reps} onChange={updateformfield} autoComplete='off' /><br />
        <label htmlFor="">Load(In Kg) :</label>
        <input type="text" name='load' value={form.load} onChange={updateformfield} autoComplete='off' /><br /><br />
        <button>submit</button>
      </form>}


      {/* uddate form */}
      {updateform._id &&
      <form onSubmit={updateworkout}>
            <h1>Edit record</h1>
            <label htmlFor="">Title:</label>
            <input type="text" name='title' value={updateform.title} onChange={handleupdateformfield}/><br />
            <label htmlFor="">Reps:</label>
            <input type="text" name='reps' value={updateform.reps} onChange={handleupdateformfield} /><br />
            <label htmlFor="">Load:</label>
            <input type="text" name='load' value={updateform.load} onChange={handleupdateformfield} /><br /><br />
            <button>Update</button>
          </form>}
    </>
  )
      }

export default Form