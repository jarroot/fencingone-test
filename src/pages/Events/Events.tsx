import { useState, useMemo } from "react";

import useEvents from "hooks/useEvents"
import { GetEventsParams } from "models/Event.model";
import { Weapons } from "constants/Weapons";
import { Event } from "models/Event.model";
import { convertEventDate } from "utils/date";

import PageLayout from "layouts/PageLayout/PageLayout";
import Table from "components/general/Table";
import Loader from "components/general/Loader";
import EventsFilters from "./components/EventsFilters";

const default_params = {
   event_name: "",
   weapon: undefined,
   gender: undefined,
   age: undefined,
   category: undefined,
   serie: undefined,
   from: undefined,
   to: undefined
} as GetEventsParams

export default function Events() {

   const [ params, setParams ] = useState( default_params );

   const { d: events, e: error, loading } = useEvents( params );

   const grouped_events = useMemo(() => {
      if ( !events ) return null;

      return events.reduce(( res, current ) => {
         let date = current.start?.split(" ")[0];
         if (!date) return res;
         
         date = convertEventDate( date )

         if ( res[ date ]) {
            res[date].push( current )
         } else {
            res[date] = [ current ]
         }

         return res
      }, {} as {[ k: string ]: Event[]})
   }, [ events ])

   return (
      <PageLayout>

         <EventsFilters
            params={ params }
            onChange={( n, v ) => setParams( p => ({...p, [n]: v }))}
            onReset={() => setParams( default_params )}
         />

         { loading && <Loader height={200}/> }

         { !loading && error && 
            <p style={{ textAlign: "center" }}> { error } </p>
         }

         { grouped_events && !loading && !error && 
            <Table
               columns={[
                  { label: "Регион", name: "region", render: () => 'СПБ' },
                  { label: "Название", name: "event_name" },
                  { label: "Пол", render: row => row.gender === 'M' ? "М" : "Ж" },
                  { label: "Оружие", render: row => Weapons[row.weapon as keyof typeof Weapons ]},
                  { label: "Возраст или год рождения", render: row => row.age || "-", width: 120, align: "center" },
                  { label: "Тип", render: row => row.type === 'I' ? "Личные" : "Командные" }
               ]}
               data={ events }
               grouped={ grouped_events }
            />
         }
      </PageLayout>
   )
}