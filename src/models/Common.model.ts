type Option<V = string> = {
	value: V;
	label: string;
   disabled?: boolean;
};

export type Options<T> = Option<T>[];