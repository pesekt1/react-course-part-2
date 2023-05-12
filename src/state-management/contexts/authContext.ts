import React, { Dispatch } from "react";
import { AuthAction } from "../reducers/loginStatusReducer";

interface AuthContextType {
  user: string;
  dispatch: Dispatch<AuthAction>;
}

const AuthContext = React.createContext<AuthContextType>({} as AuthContextType);

export default AuthContext;
