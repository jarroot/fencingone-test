export const isObject = ( o: unknown ): o is object => toString.call( o ) === '[object Object]'

export const getDebounceFn = ( fn: Function, delay = 300 ) => {

	let timer: NodeJS.Timeout;

	return function( ...args: any[]) {

		clearTimeout( timer ); 	
		timer = setTimeout(() => {
			fn && fn( ...args )
		}, delay )
	}
}

export const getDependenciesForHook = ( p: Array<unknown>) => {

	if ( !Array.isArray( p )) return []

	return p.reduce(( all_params: Array<any>, current ) => {

		const parse = ( c: unknown ) => {
			isObject( c ) 
				? Object.values( c ).forEach( p => parse( p ))
				: all_params.push( c )
		}
		
		parse( current );
		return all_params;
	}, [])
}