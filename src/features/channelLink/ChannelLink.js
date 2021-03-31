function generateLink(type, id) {
	return `https://www.youtube.com/${type}/${id}`;
}

export default function ChannelLink(props) {
	const { name, type, id } = props.channel;
	return (
		<div>
			<a href={generateLink(type, id)}>{name}</a>
		</div>
	);
}
