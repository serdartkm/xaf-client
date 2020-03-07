let actions = [];
export default {
  dispatch: action => {
    actions.push(action);
  },

  getActions: function() {
    return actions;
  }
};
