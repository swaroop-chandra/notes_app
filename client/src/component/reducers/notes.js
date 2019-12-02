const notesInitialState=[]

const notesReducer=(state=notesInitialState,action)=>{
    switch(action.type){
        case "GET_NOTES":{
            return [...action.payload]
        }
        case "DELETE_NOTES":{
            return [...state].filter(stat=>stat._id!=action.payload)
        }
        default:{
            return [...state]
        }
    }
}

export default notesReducer