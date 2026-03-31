import { Fragment } from "react";
import { TableProps } from "./Table.model";
import TableRows from "./components/TableRows";
import "./Table.css";

export default function Table<I extends object>( props: TableProps<I> ) {

	const {
		columns,
		data,
      grouped
	} = props;

	return (
		<div className="table-wrap">
         <table className="table">
            <thead>
               <tr>
                  { !!columns && columns.map(({ name, label, align, width }, i ) => {

                     return (
                        <th 
                           key={ label + i }
                           style={{ textAlign: align, width: width ? width + "px" : undefined }}
                        >
                           <span style={{ 
                              display: name && "flex",
                              justifyContent: name && align 
                           }}> 
                              { label }
                           </span>
                        </th>
                     )
                  })}
               </tr>
            </thead>
   
            <tbody>
               { grouped && 
                  Object.keys( grouped ).map(( group_name, i ) => {

                     return (
                        <Fragment key={ group_name || i }>
                           <tr>
                              <td colSpan={4}>
                                 <h3> { group_name } </h3>
                              </td>
                           </tr>

                           <TableRows 
                              data={ grouped[ group_name ]}
                              columns={ columns }
                           />
                        </Fragment>
                     )
                  })
               }

               { !grouped && !!data &&
                  <TableRows 
                     data={ data }
                     columns={ columns }
                  />
               }
            </tbody>
         </table>
         
			{ !!data && !data.length &&
				<div style={{ padding: "30px 0", textAlign: "center" }}> Нет результатов! </div>
			}
		</div>
	)
}