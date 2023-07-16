import { Routes, Route } from 'react-router-dom';
import UserList from '../features/UserList';
import AddUser from "../features/AddUser"
import EditUser from "../features/EditUser"


const RoutePage = () => {
    return (
        <Routes>
            <Route path="/" element={<UserList />} />
            <Route path="/add-user" element={<AddUser />} />
            <Route path="/edit-user/:id" element={<EditUser />} />
        </Routes>
    )
}
export default RoutePage    