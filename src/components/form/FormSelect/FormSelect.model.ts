import { Options } from "models/Common.model";

export interface FormSelectProps {
   name: string;
   id?: string;
   label?: string;
   style?: React.CSSProperties;
   value?: string;
   options?: Options<string>;
   onChange?: ( n: FormSelectProps["name"], v: string ) => void;
}