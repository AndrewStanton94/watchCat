function parseDuration(duration) {
	if (!duration) {
		console.debug('No duration on this video');
		return;
	}
	const durationComponents = duration.split(':');
	let durationString, hours, mins, seconds;

	switch (durationComponents.length) {
		case 2:
			[mins, seconds] = durationComponents;
			durationString = `${mins}M${seconds}S`;
			break;

		case 3:
			[hours, mins, seconds] = durationComponents;
			durationString = `${hours}H${mins}M${seconds}S`;
			break;

		default:
			break;
	}
	return `PT${durationString}`;
}

export default function VideoDuration(props) {
	const { duration, watched } = props.video;
	return (
		<>
			{watched && <span aria-label="Watched video">👁 </span>}
			<time dateTime={parseDuration(duration)}>{duration}</time>{' '}
		</>
	);
}
