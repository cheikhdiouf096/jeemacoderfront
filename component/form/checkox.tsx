import { useState } from "react"

export const Checkbox = ({checked , label} : {label : string , checked : boolean}) => {
    const [value , setValue ] = useState(false)
    return (
        <div>
            <input type="checkbox" id="ipt" 
            checked={value}
            onChange={(e) => setValue(e.target.checked)}
            />
            <label htmlFor="ipt">{label} </label>
        </div>
    )
}