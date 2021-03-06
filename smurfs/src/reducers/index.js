/*
  Be sure to import in all of the action types from `../actions`
*/

import { FETCHING, ADDING, UPDATING, DELETING, SUCCESS, FAILURE, UPDATE_FORM } from '../actions';

/*
 Your initial/default state for this project could *Although does not have to* look a lot like this
 {
   smurfs: [],
   fetchingSmurfs: false
   addingSmurf: false
   updatingSmurf: false
   deletingSmurf: false
   error: null
 }
*/

const initialState = {

  smurfs: [],
  fetchingSmurfs: false,
  addingSmurf: false,
  updatingSmurf: false,
  deletingSmurf: false,
  error: null,
  smurfToUpdate: null

}

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer.
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/

export default function(state = initialState, action) {

  switch (action.type) {

    case FETCHING:
      return {...state, fetchingSmurfs: true}

    case ADDING:
      return {...state, addingSmurf: true}

    case UPDATING:
      return {...state, updatingSmurf: true}

    case DELETING:
      return {...state, deletingSmurf: true}

    case SUCCESS:
      return {

        smurfs: action.payload,
        fetchingSmurfs: false,
        addingSmurf: false,
        updatingSmurf: false,
        deletingSmurf: false,
        smurfToUpdate: null

      }

    case FAILURE:
      return {...state, error: action.payload.message};

    case UPDATE_FORM:
      if (state.smurfToUpdate !== action.payload)
        return {...state, smurfToUpdate: action.payload}
      else
        return {...state, smurfToUpdate: null}

    default:
      return state;

  }

}
