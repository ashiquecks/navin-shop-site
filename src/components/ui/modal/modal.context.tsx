import React from "react";

type MODAL_VIEWS =
  | "REGISTER"
  | "LOGIN_VIEW"
  | "FORGOT_VIEW"
  | "ADD_OR_UPDATE_ADDRESS"
  | "DELETE_ADDRESS"
  | "PRODUCT_DETAILS"
  | "PRODUCT_DETAILS_DOD"
  | "SHOP_INFO";

interface State {
  view?: MODAL_VIEWS;
  data?: any;
  section?: any;
  isOpen: boolean;
}
type Action =
  | { type: "open"; view?: MODAL_VIEWS; payload?: any }
  | { type: "opendod"; view?: MODAL_VIEWS; payload?: any; section?: any }
  | { type: "close" };

const initialState: State = {
  view: undefined,
  isOpen: false,
  data: null,
  section:null,
};

function modalReducer(state: State, action: Action): State {
  switch (action.type) {
    case "open":
      return {
        ...state,
        view: action.view,
        data: action.payload,
        isOpen: true,
      };
    case "opendod":
        return {
          ...state,
          view: action.view,
          data: action.payload,
          section: action.section,
          isOpen: true,
        };
    case "close":
      console.log('close');
      return {
        ...state,
        view: undefined,
        data: null,
        isOpen: false,
      };
    default:
      throw new Error("Unknown Modal Action!");
  }
}

const ModalStateContext = React.createContext<State>(initialState);
ModalStateContext.displayName = "ModalStateContext";
const ModalActionContext = React.createContext<
  React.Dispatch<Action> | undefined
>(undefined);
ModalActionContext.displayName = "ModalActionContext";

export const ModalProvider: React.FC = ({ children }) => {
  const [state, dispatch] = React.useReducer(modalReducer, initialState);
  return (
    <ModalStateContext.Provider value={state}>
      <ModalActionContext.Provider value={dispatch}>
        {children}
      </ModalActionContext.Provider>
    </ModalStateContext.Provider>
  );
};

export function useModalState() {
  const context = React.useContext(ModalStateContext);
  if (context === undefined) {
    throw new Error(`useModalState must be used within a ModalProvider`);
  }
  return context;
}

export function useModalAction() {
  const dispatch = React.useContext(ModalActionContext);
  if (dispatch === undefined) {
    throw new Error(`useModalAction must be used within a ModalProvider`);
  }
  return {
    openModal(view?: MODAL_VIEWS, payload?: unknown) {
      //console.log('openmodal',view,payload);
      dispatch({ type: "open", view, payload });
    },
    openDodModal(view?: MODAL_VIEWS, payload?: unknown, section?: unknown) {
      //console.log('openmodal',view,payload);
      dispatch({ type: "opendod", view, payload, section });
    },
    closeModal() {
      dispatch({ type: "close" });
    },
  };
}
