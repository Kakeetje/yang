import {useAuthState} from '../Context/AuthContext';
import { Route } from 'react-router-dom';
import Profiel from "../Pages/Profiel";
import Redirect from "./Redirect";

function PrivateRoute({ children, ...rest }){
    const { isAuthenticated } = useAuthState();

    return (
        <Route {...rest} path="/profile" render={() => {
            return isAuthenticated ? <Profiel /> : <Redirect to="/login" /> }
        }/>
    );
}
export default PrivateRoute;
