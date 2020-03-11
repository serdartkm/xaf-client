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

// let actions = [];

// export default {
//   dispatch: function(action) {
//       debugger;
//     actions.push(action);
//   },
//   getActions: function() {
//       debugger;
//     return actions;
//   },
//   clearActions: function(){
//       actions=[]
//   }

// };
