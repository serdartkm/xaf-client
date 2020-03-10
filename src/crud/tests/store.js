export default function() {
    let actions = [];
    return {
      dispatch: function(action) {
     
        actions.push(action);
      },
      getActions: function() {
     
        return actions;
      },
      clearActions: function() {
        actions = [];
      }
    };
  }