import { useSelector, useDispatch } from 'react-redux';
import { removeUser } from '../store/features/userSlice';
import Button from '../component/Button';
import { Link, NavLink } from 'react-router-dom';

const UserList = () => {
    const dispatch = useDispatch();
    const users = useSelector((state) => state.user)
    console.log(users);

    const handleDel = (id) => {
        dispatch(removeUser({ id }));
    }

    return (
        <>
            {
                users.map((user) => {
                    const { id, name, email } = user
                    return (
                        <div key={id}>
                            {name}
                            {email}
                            <Button onClick={() => handleDel(id)}>Delete</Button>
                            <Link to={`edit-user/${user.id}`}>
                                <Button>Edit </Button>
                            </Link>

                        </div>
                    )
                })
            }
            <Link to="add-user">
                <Button>Create user</Button>
            </Link>

        </>
    )
}

export default UserList