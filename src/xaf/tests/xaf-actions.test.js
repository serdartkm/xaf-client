import * as actions from '../actions';
import actionTypes from '../actionTypes';
import store from './store';
describe('ACTIONS', () => {
  it('valueChanged', () => {
    actions.valueChanged({
      propName: 'firstName',
      value: 'dragos',
      dispatch: store.dispatch
    });

    expect(store.getActions()).toEqual([
      {
        type: actionTypes.VALUE_CHANGED,
        payload: { propName: 'firstName', value: 'dragos' }
      }
    ]);
  });
it.only('find',(done)=>{

  

})
});
