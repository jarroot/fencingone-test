import { TableColumn } from "../Table.model";

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
                     const label = columns[i].label;

                     if ( render ) 
                        content = render( row ) 
                     else if ( name && name in row ) {
                        const key = name as keyof I;
                        content = row[ key ] as React.ReactNode;
                     }

                     return (
                        <td> 
                           <div className="table-td-column"> { label } </div>
                           { content }
                        </td>
                     )
                  })}
               </tr>
            )
         })}
      </>
   )
}