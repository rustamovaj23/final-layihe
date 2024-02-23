import PageTitle from "../../../Components/pageTitle/pageTitle";
import {useAuth} from "../../../Context/AuthContext";
import {Route, Navigate} from 'react-router-dom';

const MyAccount = () => {
    const {isLoggedIn, user, logout} = useAuth()
    return isLoggedIn ? (
        <div>
            <PageTitle title="My Account"/>
            <div className="container mt-3">
                <h3>Welcome : {user.firstname} {user.lastname}</h3>
                <button type="button" onClick={logout}>Çıxış</button>
            </div>
        </div>
    ) : <Navigate to="/"/>
}
export default MyAccount