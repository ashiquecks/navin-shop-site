import React from "react";

interface State {
    dodItems?: Array<any>;
  }

const initialState: State = {
  dodItems: [],
};
type Action =
| { type: "add", selItem?:any, selSection?:string }
| { type: "remove" };

function dodReducer (state: State, action: Action): State {
  switch (action.type) {
    case "add":
      console.log('add to dod');
      action.selItem['section']=action.selSection;
      console.log(action.selSection);
      const itemExists = state.dodItems?.find(item => item.section === action.selSection)
      if(itemExists){
          state.dodItems=state.dodItems?.map((item) => {
              if(item.section === action.selSection) 
                  return action.selItem;
              else
                  return item;      
          });
          return {
              ...state,
              dodItems:state.dodItems,
            };
      }

      // const itemExists = state.dodItems?.find(item => item.productId === action.selItem.productId)
      // if(itemExists){
      //     state.dodItems=state.dodItems?.map((item) => {
      //         if(item.productId === action.selItem.productId) 
      //             return action.selItem;
      //         else
      //             return item;      
      //     });
      //     return {
      //         ...state,
      //         dodItems:state.dodItems,
      //       };
      // }

      return {
        ...state,
        dodItems:[...state.dodItems!,action.selItem],
      };
    case "remove":
      console.log('remove');
      return {
        ...state,
        dodItems:state.dodItems,
      };
    default:
      throw new Error("Unknown Action!");
  }
}

export const DodStateContext = React.createContext<State>(initialState);
DodStateContext.displayName = "DodStateContext";

export const DodActionContext = React.createContext<
  React.Dispatch<Action> | undefined
>(undefined);
DodActionContext.displayName = "DodActionContext";

export const DodProvider: React.FC = ({ children }) => {
  const [state, dispatch] = React.useReducer(dodReducer, initialState);
  return (
    <DodStateContext.Provider value={state}>
      <DodActionContext.Provider value={dispatch}>
        {children}
      </DodActionContext.Provider>
    </DodStateContext.Provider>
  );
};
export default DodProvider;

export function useDodState () {
  const context = React.useContext(DodStateContext);
  if (context === undefined) {
    throw new Error(`useDodState must be used within a DodProvider`);
  }
  return context;
}

export function useDodAction () {
  const dispatch = React.useContext(DodActionContext);
  if (dispatch === undefined) {
    throw new Error(`useDodAction must be used within a DodProvider`);
  }
  return {
    addDod(selItem?:any, selSection?:string ) {
      dispatch({ type: "add",selItem,selSection});
    },
    removeDod() {
      dispatch({ type: "remove" });
    },
  };
}