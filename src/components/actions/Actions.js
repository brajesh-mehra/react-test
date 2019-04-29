import ADD_CUSTOMER from './type';

const customerObj = {
    items:[
        {id : 1, name : 'Brajesh', lastName :'Mehra'},
        {id : 2, name : 'Brajesh1', lastName :'Mehra1'}
    ]
}
export const action = {
    type: ADD_CUSTOMER,
    payload: customerObj
};




//Action creator 
// export const addCustomer = () => dispatch => {
//     fetch("https://my-json-server.typicode.com/brajesh-mehra/json-server/posts")
//     .then(res => res.json())
//     .then(customers =>
//         console.log("Actions is calling"),
//         dispatch({
//             type: ADD_CUSTOMER,
//             payload: customers
//         })
//         )
// };