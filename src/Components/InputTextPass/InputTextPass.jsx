
import './InputTextPass.css'
import { MdOutlineRemoveRedEye } from "react-icons/md";

export const InputTextPass = ({name, id, placeholder}) => {

    return (
            <div className="textInput">
               <label htmlFor={id}>{name}</label>
                <div className="inputPass">
                    <input type="password" name={id} id={id} placeholder={placeholder} />
                    <span className="icon">
                        <MdOutlineRemoveRedEye />
                    </span>
                </div>
            </div>
        )
}
