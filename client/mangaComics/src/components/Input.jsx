const Input = ({nombre,tipo,onChange,value})=>{
    return(
        <div className="form-group">
            <label htmlFor={nombre} className="form-label">{nombre}</label>
            <input type={tipo} name={nombre} className="form-input" id={nombre} onChange={onChange} value={value}/>
        </div>
    )
}

export default Input;