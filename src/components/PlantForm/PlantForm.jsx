import React, { useState }from 'react';
import { useDispatch } from 'react-redux';

const PlantForm = () => {
    const dispatch = useDispatch();
    
    //Initial state is an OBJECT, with keys id and name
    let [newPlant, setPlant] = useState({id: 4, 
        name: '', 
        kingdom: '', 
        clade: '', 
        order: '',
        family: '',
        subfamily: '',
        genus: ''
    });

    const addNewPlant = event => {
        event.preventDefault();
        dispatch({ type: 'NEW_PLANT', payload: newPlant });
        //updates the next plant to have a new id
        setPlant({id:newPlant.id + 1, 
        name: '', 
        kingdom: '', 
        clade: '', 
        order: '',
        family: '',
        subfamily: '',
        genus: ''});
    };

    return (
        <div>
            <h3>This is the form</h3>
            <pre>{JSON.stringify(newPlant)}</pre>
            <form onSubmit={addNewPlant}>
                <input type='text' value={newPlant.name} onChange={(event) => setPlant({...newPlant, name: event.target.value})} placeholder='name'/><br />
                <input type='text' value={newPlant.kingdom} onChange={(event) => setPlant({...newPlant, kingdom: event.target.value})} placeholder='kingdom'/><br />
                <input type='text' value={newPlant.clade} onChange={(event) => setPlant({...newPlant, clade: event.target.value})} placeholder='clade'/><br />
                <input type='text' value={newPlant.order} onChange={(event) => setPlant({...newPlant, order: event.target.value})} placeholder='order'/><br />
                <input type='text' value={newPlant.family} onChange={(event) => setPlant({...newPlant, family: event.target.value})} placeholder='family'/><br />
                <input type='text' value={newPlant.subfamily} onChange={(event) => setPlant({...newPlant, subfamily: event.target.value})} placeholder='subfamily'/><br />
                <input type='text' value={newPlant.genus} onChange={(event) => setPlant({...newPlant, genus: event.target.value})} placeholder='genus'/><br />
                <input type='submit' value='Add New Plant' />
            </form>
        </div>
    );
}


export default PlantForm;
