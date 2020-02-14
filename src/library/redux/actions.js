import actionTypes from './actionTypes';

export function insertOne({ objectName }) {
  return (dispatch, getState) => {
    const state = getState();
    const doc = state[objectName];
  
    dispatch({ type: actionTypes.INSERTING_ONE, payload: { objectName } });
    debugger;
    return fetch(`http://localhost:8000/insertOne?document=${objectName}`, {
      method: 'post',
      body: JSON.stringify(doc)
    })
      .then(response => {
        const json = response.json();
        debugger;
        return json;
      })
      .then(json => {
        const action = {
          type: actionTypes.INSERTING_ONE_FULFILLED,
          payload: { objectName, result: json }
        };
        debugger;
        dispatch(action);
      })
      .catch(err => {
        const action = {
          type: actionTypes.INSERTING_ONE_FAILED,
          payload: err,
          objectName
        };

        debugger;
        dispatch(action);
      });
  };
}

export function findOne({ objectName, query, options }) {
  return dispatch => {
    const action = { type: actionTypes.FINDING_ONE, payload: { objectName } };
    dispatch(action);
    debugger;

    return fetch(`http://localhost:8000/findOne?document=${objectName}`, {
      body: JSON.stringify({ query, options })
    })
      .then(response => {
        const json = response.json();
        debugger;
        return json;
      })
      .then(json => {
        const action = {
          type: actionTypes.FINDING_FULFILLED,
          payload: { objectName, result: json }
        };
        debugger;
        dispatch(action);
      })
      .catch(err => {
        const action = {
          type: actionTypes.FINDING_ONE_FAILED,
          payload: { objectName, error: err }
        };
        debugger;
        dispatch(action);
      });
  };
}
export function find({ objectName, selector = {} }) {
  return dispatch => {
    const action = { type: actionTypes.FINDING, payload: { objectName } };
 
    dispatch(action);

    return fetch(`http://localhost:8000/find?document=${objectName}`)
      .then(response => {
        const json = response.json();
     
        return json;
      })
      .then(collection => {
        const action = {
          type: actionTypes.FINDING_FULFILLED,
          payload: { objectName, result: collection }
        };
     
        dispatch(action);
      })
      .catch(err => {
        const action = {
          type: actionTypes.FINDING_FAILED,
          payload: { objectName, error: err }
        };
     
        dispatch(action);
      });
  };
}

export function updateOne({ objectName, filter, update, options }) {
  const body = { objectName, filter, update, options };
  return dispach => {
    dispach({ type: actionTypes.UPDATING_ONE, payload: { objectName } });
    return fetch(`http://localhost:8000/updateOne?document=${objectName}`, {
      body: JSON.stringify(body)
    })
      .then(response => {
        const json = response.json();
        debugger;
        return json;
      })
      .then(json => {
        const action = {
          type: actionTypes.UPDATING_ONE_FULFILLED,
          payload: { objectName, result: json }
        };
        debugger;
        dispach(action);
      })
      .catch(err => {
        const action = {
          type: actionTypes.UPDATING_ONE_FAILED,
          payload: { objectName, error: err }
        };
        debugger;
        dispach(action);
      });
  };
}

export function deleteOne({ objectName, filter, options }) {
  const body = { filter, options };
  return dispatch => {
    const action = { type: actionTypes.DELETING_ONE, payload: { objectName } };
    debugger;
    dispatch(action);
    return fetch(`http://localhost:8000/deleteOne?document=${objectName}`, {
      body: JSON.stringify(body)
    })
      .then(response => {
        const json = response.json();
        debugger;
        return json;
      })
      .then(json => {
        const action = {
          type: actionTypes.DELETING_ONE_FULFILLED,
          payload: { objectName, result: json }
        };
        debugger;
        dispatch(action);
      })
      .catch(err => {
        const action = {
          type: actionTypes.DELETING_ONE_FAILED,
          payload: { objectName, error: err }
        };
        debugger;
        dispatch(action);
      });
  };
}

export function changeValue({ objectName, propName, value }) {
  return dispach => {
    dispach({
      type: actionTypes.VALUE_CHANGED,
      payload: { objectName, propName, value }
    });
  };
}
