import { useRef, useEffect } from 'react';
import axios, { CancelTokenSource } from "axios";

export default function useCancelToken() {
		
	const token_source = useRef<CancelTokenSource>( null );
	
	const cancelQuery = () => token_source.current?.cancel();
	
	const getCancelToken = () => {
		token_source.current = axios.CancelToken.source(); 
		return token_source.current.token;
	}

	useEffect(() => {
		return () => cancelQuery();
	}, [])

	return [ getCancelToken, cancelQuery ];
}
