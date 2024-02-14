import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import {takeEvery, put} from 'redux-saga/effects';
import axios from 'axios'


// this startingPlantArray should eventually be removed
const startingPlantArray = [
  { id: 1, name: 'Rose' },
  { id: 2, name: 'Tulip' },
  { id: 3, name: 'Oak' }
];

const plantList = (state = [], action) => {
  switch (action.type) {
    case 'ADD_PLANT':
      return [ ...state, action.payload ]
    default:
      return state;
  }
};

//Initiate Saga
const sagaMiddleware = createSagaMiddleware();

//Saga generators
function* firstStory(action){
  try {
    const plantsResponse = yield axios({
      method: 'GET',
      url: '/api/plants'
    });
    yield put ({type: 'ADD_PLANT', payload: plantsResponse.data})
  } catch (error) {
    console.log('Error: ',error); 

  }
}

function* bardSaga(){
  yield takeEvery('GET_PLANTS', firstStory);
}

// 🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥
// Note that the store is currently not
// configured to utilize redux-saga OR
// redux logger!
const store = createStore(
  combineReducers({ plantList }),
  applyMiddleware(logger, sagaMiddleware)
);
// 🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥

sagaMiddleware.run(bardSaga);

export default store;
