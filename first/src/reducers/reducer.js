const initialState={
    count:5
}


const Couter = (state=initialState,action)=>{

    switch(action.type){
            case 'increment':
                console.log("increment")
                return{
                    ...state,
                    count:state.count+1
                }
            case "decrement":
                console.log("decrement")
                return{
                    ...state,
                    count:state.count-1
                }
            default:
                return state;

    }

}

export default Couter