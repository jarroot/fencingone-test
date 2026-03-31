import { useState, useEffect, useCallback } from "react";
import { getDependenciesForHook, getDebounceFn } from "utils/functions";
import useCancelToken from "./useCancelToken";
 
const cache: {[ k: string ]: any } = {};

interface useFetchDataProps<D, R> {
	APIMethod: (...args: any ) => Promise<D>;
	params?: Array<any>;
	cache_name?: string;
	condition?: boolean;
   debounce?: boolean;
	error_message?: string;
	clear_data_on_update?: boolean;
   extra_dependencies?: unknown[];
	resultDataHandler?: ( data: D ) => R;
}

export default function useFetchData<D, R = D>({
	APIMethod,
	params = [],
	cache_name,
	debounce,
	condition = true,
	error_message,
	clear_data_on_update,
   extra_dependencies = [],
	resultDataHandler
}: useFetchDataProps<D, R>) {

	const [ getCancelToken, cancelQuery ] = useCancelToken();

   const [ data, setData ] = useState<D | null>( null );
	const [ result, setResult ] = useState<R | null>( null );
	const [ error, setError ] = useState( "" );
   const [ loading, setLoading ] = useState( true );

	const getData = async( params: any[]) => {

		if ( !condition ) return;
		clear_data_on_update && setData( null );
      
      cancelQuery();
      setError( "" );
      setLoading( true );

		try {
			const data = await APIMethod( ...params, getCancelToken());
			if ( cache_name ) cache[ cache_name ] = data;

			setData( data );
         setTimeout(() => setLoading( false ), 300 );
		} catch ( e: any ) {
         if ( e?.code === "ERR_CANCELED" ) return;
         
			const error = error_message || e?.response?.data?.message || "Что-то пошло не так! Не удалось загрузить данные с сервера";	
			setError( error );
         setLoading( false );
		}
	}

	const getDataDebounced = useCallback( getDebounceFn( getData, 500 ), [ condition ])

	const prepareResult = ( data: D ) => {
      const res = resultDataHandler ? resultDataHandler( data ) : data;
      setResult( res as R );
	}

	useEffect(() => {

		if ( cache_name && cache[ cache_name ]) {
			setData( cache[ cache_name ]);
			return;
		}

		debounce ? getDataDebounced( params ) : getData( params )
	}, getDependenciesForHook([
      ...params,
      ...extra_dependencies
   ]));
	
	useEffect(() => {
		data ? prepareResult( data ) : setResult( null );
	}, [ data ])
	
	return {
		d: result,
		e: error,
      loading,
		update: () => getData( params ),
		set: ( r: R | null ) => setResult( r )
	};
}