import { useState } from "react"
import Button from "../component/Button"
import InputField from "../component/InputField"
import { useNavigate, useParams } from "react-router-dom"
import { useSelector, useDispatch } from 'react-redux'
import { updateUser } from "../store/features/userSlice"

const EditUser = () => {
    const users = useSelector((state) => state.user)
    const dispatch = useDispatch();
    const params = useParams();
    console.log(params)
    const navigate = useNavigate();

    const exiting = users.filter((user) => user.id === params.id)
    const { name, email } = exiting[0]
    const [values, setValues] = useState({
        name: name,
        email: email,
    })


    const handleEdit = () => {
        setValues({ name: " ", email: "" })
        dispatch(updateUser({
            id: params.id,
            name: values.name,
            email: values.email,
        }))
        console.log(values)
        navigate("/")
    }
    return (
        <>
            <InputField value={values.name} onChange={(e) => setValues({ ...values, name: e.target.value })}
                label="Name" inputProps={{ type: "text", placeholder: "John Doe" }} />
            <InputField value={values.email} onChange={(e) => setValues({ ...values, email: e.target.value })}
                label="Email" inputProps={{ type: "email", placeholder: "example@gmail.com" }} />
            <Button onClick={handleEdit}>Edit Data</Button>
        </>
    )
}

export default EditUser