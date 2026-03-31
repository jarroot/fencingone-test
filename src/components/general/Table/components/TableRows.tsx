import { TableColumn } from "../Table.model";
import TableCell from "./TableCell";

export default function TableRows<I extends object>({ columns, data }: {
   columns: TableColumn<I>[];
   data: I[]
}) {
   return (
      <>
         { data?.map(( item, i ) => {
            const row = data[i];
            const row_id = "id" in item ? Number( item.id ) : i;
            
            return ( 
               <tr key={ row_id }>
                  { columns.map(({ name, render }, i ) => {
                     
                     let content;

                     if ( render ) 
                        content = render( row ) 
                     else if ( name && name in row ) {
                        const key = name as keyof I;
                        content = row[ key ] as React.ReactNode;
                     }

                     return (
                        <TableCell 
                           key={ i }
                           label={ columns[i].label }
                           content={ content }   
                        />
                     )
                  })}
               </tr>
            )
         })}
      </>
   )
}