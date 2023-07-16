import { useState } from "react"
import Button from "../component/Button"
import TextField from "../component/InputField"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { addUser } from "../store/features/userSlice"
import { v4 as uuidv4 } from 'uuid';

const AddUser = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const [values, setValues] = useState({
        name: "",
        email: "",
    })

    const handleAdd = () => {
        setValues({ name: "", email: "" })
        dispatch(addUser({
            id: uuidv4(),
            name: values.name,
            email: values.email
        }))
        console.log(values)
        navigate("/")
    }

    return (
        <>
            <TextField value={values.name} onChange={(e) => setValues({ ...values, name: e.target.value })}
                label="Name" inputProps={{ type: "text", placeholder: "John Doe" }} />
            <TextField value={values.email} onChange={(e) => setValues({ ...values, email: e.target.value })}
                label="Email" inputProps={{ type: "email", placeholder: "example@gmail.com" }} />
            <Button onClick={handleAdd}>Submit</Button>
        </>
    )
}

export default AddUser