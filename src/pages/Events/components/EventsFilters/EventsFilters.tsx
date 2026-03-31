import FormSelect from "components/form/FormSelect";
import FormInput from "components/form/FormInput"
import { GetEventsParams } from "models/Event.model";
import { ReactComponent as SearchSvg } from "svg/search.svg";
import { ReactComponent as CrossSvg } from "svg/cross.svg";
import "./EventsFilters.css";

import selects from "./selects";

export default function EventsFilters({ params, onChange, onReset }: {
   params: GetEventsParams;
   onChange: ( n: string, v: string ) => void;
   onReset: () => void;
}) {
   return (
      <div className="events-filters">

         { selects.map(({ name, label, style, options }) => {
            return (
                <FormSelect
                  key={ name }
                  name={ name }
                  value={ params[ name ]}
                  label={ label }
                  style={ style }
                  options={ options }
                  onChange={ onChange }
               />
            )
         })}

          <FormInput 
            name="from"
            label="Дата с"
            value={ params.from }
            type="date" 
            onChange={ onChange }
         />

          <FormInput 
            name="to"
            label="Дата по"
            value={ params.to }
            type="date" 
            onChange={ onChange }
         />

         <FormInput 
            name="event_name"
            value={ params.event_name ?? "" }
            style={{ flex: "auto" }}
            placeholder="Название"
            EndIcon={ <SearchSvg/> } 
            onChange={ onChange }
         />

         <button onClick={ onReset }>
            <CrossSvg/>
            Сбросить фильтр
         </button>
      </div>
   )
}