const Input =({type, name, placeholder, onChange, value})=>{
    return (
        <>
            <input type={type} name={name} placeholder={placeholder} onChange={onChange} value={value} />
        </>
    )
}
export default Input