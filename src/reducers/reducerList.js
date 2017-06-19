import { ADJUST_TODO } from "../actions/index";

const initState = [
  "What's on your agenda for today?"
];

export default function(state = null, action){

  switch (action.type) {
    case ADJUST_TODO:
      return action.payload;
      break;
  }

  if(!state){
    return initState;
  }
}
