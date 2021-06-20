export default function(state, action){
  switch(action.type){
    case 'ADD_WATCH_LIST':
      return {
        ...state,
        watchList: [action.payload, ...state.watchList]
      };
    default:
      return state;
  }
}