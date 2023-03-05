import axios from 'axios';
import { useState, createContext } from 'react';
import {useAuthContext} from '../Hooks/useAuthContext'

export const Data = createContext();

const Context = ({ children }) => {
    const {user}=useAuthContext();

    //GET request state 
    const [workouts, setworkouts] = useState(null);
    //Get request function
    const getworkouts = async () => {
        const alldata = await axios.get("http://localhost:4000/api/workout",{
            headers:{
                Authorization:`Bearer ${user.token}`
            }
        });
        const data = alldata.data;
        setworkouts(data);
    }


    //Post request state
    const [form, setform] = useState({
        title: "",
        reps: "",
        load: ""
    });


    //DELETE REQUEST
    const deleteworkout = async (_id) => {
        await axios.delete(`http://localhost:4000/api/workout/${_id}`,{
            headers:{
                Authorization:`Bearer ${user.token}`
            },
        });
        getworkouts();
    };

    
    //UPDATE REQUEST
    const [updateform, setupdateform] = useState({
        _id: null,
        title: "",
        reps: "",
        load: ""
    })
    const handleupdateformfield = (e) => {
        const { name, value } = e.target;
        setupdateform({ ...updateform, [name]: value },)
    }

    const updateworkout = async (e) => {
        e.preventDefault();
        const { _id, title, reps, load } = updateform;
        await axios.patch(`http://localhost:4000/api/workout/${_id}`, { title, reps, load },{
            headers:{
                Authorization:`Bearer ${user.token}`
            },
        });
        getworkouts();
        setupdateform({
            _id: null,
            title: "",
            reps: "",
            load: ""
        },)
    }
    const toggleupdate = (item) => {
        setupdateform({
            _id: item._id,
            title: item.title,
            reps: item.reps,
            load: item.load
        },)
    }

    return (
        <>
            <Data.Provider value={{ workouts, setworkouts, form, setform, getworkouts, deleteworkout, toggleupdate, updateworkout, handleupdateformfield, updateform }}>
                {children}
            </Data.Provider>
        </>
    );
};

export default Context;