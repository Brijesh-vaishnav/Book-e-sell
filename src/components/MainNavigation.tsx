import React, { lazy } from "react";
import { Route, Switch } from "react-router-dom";
import { RoutePaths } from "../utils/enum";
 
//component lazy loading
const Root = lazy(() => import("../pages/login"))
const Login = lazy(() => import("../pages/login"));
const Register = lazy(() => import("../pages/register"));
const BookListing = lazy(() => import("../pages/book-listing"));
 
const AppRoutes: React.FC = () => {
    return (
        <Switch>
            <Route exact path={RoutePaths.Root} component={Root}/>
            <Route exact path={RoutePaths.Login} component={Login} />
            <Route exact path={RoutePaths.Register} component={Register} />
            <Route exact path={RoutePaths.BookListing} component={BookListing} />
        </Switch>
    );
};
 
export default AppRoutes;