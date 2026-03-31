export interface TableColumn<I> {
   name?: string;
   label: string;
   width?: number;
   align?: "left" | "center" | "right";
   render?: ( row: I ) => React.ReactNode;
}

export interface TableProps<I> {
   columns: TableColumn<I>[];
   data?: I[] | null | undefined;
   grouped?: {[ k: string ]: I[]} | null;
}