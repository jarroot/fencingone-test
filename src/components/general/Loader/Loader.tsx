import "./loader.css";

export default function Loader({ height, ...props }: {
	height?: number;
	style?: React.CSSProperties;
}) {
	
	const style = {
		height: height ? height + "px" : "60px",
		...( props.style || {})
	}

	return (
		<div className="loader-wrap" style={ style }>
			<div className="loader"> 
				<div/><div/><div/>
			</div>
		</div>
	)
}