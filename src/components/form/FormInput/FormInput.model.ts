type FormInputType = "text" | "textarea" | "number" | "email" | "password" | "phone" | "date" | "time" | "datetime-local"; 

export interface FormInputProps {
   name: string;
   id?: string;
   label?: string;
	type?: FormInputType;
   placeholder?: string;
	style?: React.CSSProperties;
   value?: string;

   EndIcon?: React.ReactNode;
	onChange?: ( n: FormInputProps["name"], v: string ) => void;
}