import {
  createContext,
  PropsWithChildren,
  useContext,
  useReducer,
} from "react";
import { Video } from "../interfaces";

interface User {
  name: string;
}

type Theme = "dark" | "light";

interface State {
  user: User | null;
  theme: Theme;
  watchLater: Video[];
}

interface StoreContextData {
  state: State;
  dispatch: React.Dispatch<Action>;
}

interface LoginAction {
  type: "LOGIN";
  payload: {
    user: User;
  };
}
interface LogoutAction {
  type: "LOGOUT";
  payload?: {};
}
interface ToggleThemeAction {
  type: "TOGGLE_THEME";
  payload?: {};
}
interface AddToWatchLaterAction {
  type: "ADD_TO_WATCH_LATER";
  payload: {
    video: Video;
  };
}

type Action =
  | LoginAction
  | LogoutAction
  | ToggleThemeAction
  | AddToWatchLaterAction;

const StoreContext = createContext<StoreContextData | null>(null);

const reducer = (state: State, action: Action): State => {
  const { type, payload } = action;

  // if (type === "INCREASE") {
  //   return {
  //     count: state.count + 1,
  //   };
  // } else if (type === "DECREASE") {
  //   return {
  //     count: state.count - 1,
  //   };
  // }

  switch (type) {
    case "LOGIN":
      return {
        ...state,
        user: payload.user,
      };
    case "LOGOUT":
      return {
        ...state,
        user: null,
      };
    case "TOGGLE_THEME":
      return {
        ...state,
        theme: state.theme === "dark" ? "light" : "dark",
      };
    case "ADD_TO_WATCH_LATER":
      return {
        ...state,
        watchLater: [...state.watchLater, payload.video],
      };

    default:
      return state;
  }
};

const initialState: State = {
  theme: "dark",
  user: null,
  watchLater: [],
};

export const StoreProvider = ({ children }: PropsWithChildren) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  // const [count, setCount] = useState(0)
  return (
    <StoreContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => {
  const context = useContext(StoreContext);
  if (context) {
    return context;
  } else {
    throw new Error("Context nhi hai");
  }
};
