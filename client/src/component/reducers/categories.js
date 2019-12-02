const categoriesInitialState=[]

const categoriesReducer=(state=categoriesInitialState,action)=>{
    switch(action.type){
        case "GET_CATEGORIES":{
            return [...action.payload]
        }
        case "DELETE_CATEGORY":{
            return [...state].filter(stat=>stat._id!=action.payload)
        }
        case "ADD_CATEGORY":{
            return [...state,action.payload]
        }
        // case "EDIT_CATEGORY":{
        //     return state.map(stat=>{
        //         if(stat._id==action.payload.id){
        //            return [{},...state,action.payload]
        //         }else{
        //            return [{},...state]
        //         }
        //     })
        // }
        default:{
            return [...state]
        }
    }
}

export default categoriesReducer