import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useTypedSelectors} from "../hooks/useTypedSelectors";
import {fetchUsers} from "../store/action-creators/user";
import {useActions} from "../hooks/useAction";

const UserList: React.FC = () => {
    const {users, loading, error} = useTypedSelectors(state => state.user)
    const {fetchUsers} = useActions()

    useEffect(() => {
        fetchUsers()
    }, [])

    if (loading) {
        return <h1>Please, wait a second...</h1>
    }
    if (error) {
        return <h1>{error}</h1>
    }

    return (
        <div>
            {users.map(user =>
                <div key={user.id}>{user.name}</div>
            )}
        </div>
    );
}

export default UserList;