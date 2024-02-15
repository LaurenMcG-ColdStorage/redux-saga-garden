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

    const handleNameChange = (event) => {
        //Similar to in redux -- we dont want to get rid of the id field when we update name
        setPlant({...newPlant, name: event.target.value});
    };

    const handleKingdomChange = (event) => {
        setPlant({...newPlant, kingdom: event.target.value});
    };

    const handleCladeChange = (event) => {
        setPlant({...newPlant, clade: event.target.value});
    };

    const handleOrderChange = (event) => {
        setPlant({...newPlant, order: event.target.value});
    };

    const handleFamilyChange = (event) => {
        setPlant({...newPlant, family: event.target.value});
    };

    const handleSubFamilyChange = (event) => {
        setPlant({...newPlant, subfamily: event.target.value});
    };

    const handleGenusChange = (event) => {
        setPlant({...newPlant, genus: event.target.value});
    }


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
    }

    return (
        <div>
            <h3>This is the form</h3>
            <pre>{JSON.stringify(newPlant)}</pre>
            <form onSubmit={addNewPlant}>
                <input type='text' value={newPlant.name} onChange={handleNameChange} placeholder='name'/><br />
                <input type='text' value={newPlant.kingdom} onChange={handleKingdomChange} placeholder='kingdom'/><br />
                <input type='text' value={newPlant.clade} onChange={handleCladeChange} placeholder='clade'/><br />
                <input type='text' value={newPlant.order} onChange={handleOrderChange} placeholder='order'/><br />
                <input type='text' value={newPlant.family} onChange={handleFamilyChange} placeholder='family'/><br />
                <input type='text' value={newPlant.subfamily} onChange={handleSubFamilyChange} placeholder='subfamily'/><br />
                <input type='text' value={newPlant.genus} onChange={handleGenusChange} placeholder='genus'/><br />
                <input type='submit' value='Add New Plant' />
            </form>
        </div>
    );
}


export default PlantForm;
