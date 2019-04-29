import ADD_CUSTOMER from '../actions/type';

const initialState = {
    items:[],
    item:{}
}

export default function(state = initialState, action)
{
    switch(action.type){
    case ADD_CUSTOMER:
    {
        console.log("ADD_CUSTOMER_REDUCER_CALLED");
        return {
            ...state,
            items: action.payload
        }
    }
    default:
        return state;
    }
}