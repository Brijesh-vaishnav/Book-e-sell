import { createContext, useContext, useState } from "react";
import React from "react";
import UserModel from "../models/UserModel";
 
export interface AuthContextModel {
    setUser: (user: UserModel) => void;
    user: UserModel;
}
 
const initialState: AuthContextModel = {
    setUser: () => { },
    user: new UserModel(),
};
 
export const AuthContext = createContext(initialState);
 
export const AuthWrapper: React.FC<React.PropsWithChildren<{}>> = ({
    children,
}: React.PropsWithChildren<{}>) => {
    const [user, _setUser] = useState<UserModel>(new UserModel());
 
    const setUser = (user: UserModel): void => {
        _setUser(user);
    };
 
    let value: AuthContextModel = {
        user,
        setUser,
    };
 
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
 
export const useAuthContext = () => {
    return useContext(AuthContext);
};