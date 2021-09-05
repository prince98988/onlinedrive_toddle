import * as ActionTypes from './ActionTypes';

export const Folders = (state={
    total:0,
    folders:{ prince: {path:"",items:0,files:0,folder:0,isFolder:true,folders:{}},prince11111111: {path:"",items:0,files:0,folder:0,isFolder:true,folders:{}},
           "prince.pdf": {path:"",items:0,files:0,folder:0,isFolder:false,extension:".pdf"}
            },
     }  ,
    action)  =>
    
    {
        switch (action.type) {
            case ActionTypes.ITEM_ADD:
                return {...state,
                   
                };
            case ActionTypes.ITEM_UPDATE:
                return {...state,
                };
            case ActionTypes.ITEM_DELETE:
                return {...state,
                   
                };
            default:
                return state
        }

    }

