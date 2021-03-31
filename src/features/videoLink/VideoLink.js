function generateLink(id) {
	return `https://www.youtube.com/watch?v=${id}`;
}

export default function VideoLink(props) {
	const { title, id } = props.video;
	return (
		<div>
			<a href={generateLink(id)}>{title}</a>
		</div>
	);
}
