import './InputText.css'

export const InputText = ({name, id, placeholder}) => {
    return (
        <div className="textInput">
            <label htmlFor={id}>{name}</label>
            <input type="text" name={id} id={id} placeholder={placeholder} />
        </div>
    )
}


