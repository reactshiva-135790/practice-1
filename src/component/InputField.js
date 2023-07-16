const InputField = ({ label, inputProps, onChange, value }) => {
    return (
        <>
            <label>{label}</label>
            <input {...inputProps} value={value} onChange={onChange} />
        </>
    )
}

export default InputField;