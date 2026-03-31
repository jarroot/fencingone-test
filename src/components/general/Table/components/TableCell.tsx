import { memo } from "react";

export default memo( function TableCell({ label, content }: {
   content: React.ReactNode;
   label: string;
}) {
   return (
      <td> 
         <div className="table-td-column"> { label } </div>
         { content }
      </td>
   )
})