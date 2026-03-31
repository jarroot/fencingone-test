import { memo } from "react";
import { FormSelectProps } from "./FormSelect.model";
import "./FormSelect.css";

export default memo( function FormSelect({ name, id, value, style, options, label, onChange }: FormSelectProps ) {
   return (
      <div className="form-select" style={ style }>
         { label && 
            <label htmlFor={ id ?? name }> { label } </label>
         }
         
         <select 
            name={ name }
            value={ value }
            onChange={ e => {
               const value = e.target.value as string;
               onChange && onChange( name, value );
            }}
         >
            { options?.map(({ value: v, label }, i ) => (
               <option 
                  key={ v || i }
                  value={ v }
                  selected={ value === v }   
               > 
               { label } </option>
            ))}   
         </select>
      </div>
   )
}, ( prev, next ) => prev.value === next.value )