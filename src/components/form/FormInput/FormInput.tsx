import { memo, useState, useMemo, useEffect } from "react";
import { FormInputProps } from "./FormInput.model";
import { getDebounceFn } from "utils/functions";
import "./FormInput.css";

export default memo( function FormInput({ id, name, type, label, value, style, placeholder, EndIcon, onChange }: FormInputProps ) {

   const [ local, setLocal ] = useState( value );

   const debouncedOnChange = useMemo(() => {
      return onChange ? getDebounceFn( onChange ) : null
   }, [])

   const handleChange = ( e: any ) => {
      const value = e.target.value as string;
      setLocal( value );
      debouncedOnChange && debouncedOnChange( name, value );
   }

   useEffect(() => {
      setLocal( value );
   }, [ value ])

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
            value={ local }
            onChange={ handleChange }
         />

         { EndIcon }
      </div>
   )
}, ( prev, next ) => prev.value === next.value )