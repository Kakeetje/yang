import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { AuthContext, useAuthState } from "../Context/AuthContext";

function Header() {
    const history = useHistory();

    const { isAuthenticated } = useAuthState();
    const { logout } = useContext(AuthContext);

    useEffect(() => {
        if (isAuthenticated === false) {
            history.push('/LoginForms');
        }
    }, [isAuthenticated]);

    return (
        <header>
            <div>
                {isAuthenticated? (
                <button
                    type="button"
                    onClick={() => logout()}
                >
                    Log uit
                </button> ) : (
                    <>
                <button
                    type="button"
                    onClick={() => history.push('/LoginForms')}
                >
                    Log in
                </button>
                <button
                    type="button"
                    onClick={() => history.push('/signup')}
                >
                    Registreren
                </button>
                    </>
                )}
            </div>
        </header>
    );
};

export default Header;