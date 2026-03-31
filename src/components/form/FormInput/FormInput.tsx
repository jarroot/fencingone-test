import { memo } from "react";
import { FormInputProps } from "./FormInput.model";
import "./FormInput.css";

export default memo( function FormInput({ id, name, type, label, value, style, placeholder, EndIcon, onChange }: FormInputProps ) {

   return (
      <div className="form-input" style={ style }>

         { label && 
            <label htmlFor={ id ?? name }> { label } </label>
         }

         <input 
            id={ id ?? name }
            name={ name }
            type={ type }
            placeholder={ placeholder }
            value={ value }
            onChange={ e => {
               const value = e.target.value as string;
               onChange && onChange( name, value );
            }}
         />

         { EndIcon }
      </div>
   )
}, ( prev, next ) => prev.value === next.value )