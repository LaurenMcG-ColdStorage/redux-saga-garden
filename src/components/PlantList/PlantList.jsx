import React, { useEffect } from 'react';
import { useDispatch, useSelector} from 'react-redux';


function PlantList() {
    const dispatch = useDispatch();

    const plantList = useSelector(state => state.plantList);
    //console.log(plantList);

    const getPlants = () => {
        dispatch({type: 'GET_PLANTS'});
    };

    const removePlant = (plant) => {
        dispatch({type: 'REMOVE_PLANT', payload: plant})
    };

    useEffect(() => {
        getPlants();
        // dispatch an action to request the plantList from the API
    }, []); 

    return (
        <div>
            <h3>This is the plant list</h3>
            <table>
                <tbody>
                    {plantList.map((plant) => {
                        return (
                        <tr key={plant.id}>
                            <td>{plant.name}</td>
                            {/* <td>{plant.kingdom}</td>
                            <td>{plant.clade}</td>
                            <td>{plant.order}</td>
                            <td>{plant.family}</td>
                            <td>{plant.subfamily}</td>
                            <td>{plant.genus}</td> */}
                            <td><button onClick={(event) => removePlant(plant.id)}>Delete</button></td>
                        </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default PlantList;
