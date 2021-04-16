import { useState } from 'react';

import blockList from './blocklist.json';

import { SearchVideos } from '../videoLink/VideoLink';

const curateWordList = (words, blockList, threshold) =>
	Object.entries(words)
		.filter(
			([word, count]) => !blockList.includes(word) && count >= threshold
		)
		.sort(([, first], [, second]) => second - first);

export default function WordFrequency(props) {
	const { words } = props;
	const t = 10;
	const wordList = curateWordList(words, blockList, t);
	const [activeWord, updateWord] = useState(wordList[0][0]);
	const wordClicked = ({ target }) => {
		const { word } = target.dataset;
		updateWord(word);
	};
	return (
		<section>
			<h2>Common words from video titles</h2>
			<div className="grid gap-2r mb1" onClick={wordClicked}>
				{wordList.map(([word, count]) => (
					<button
						className="button m0"
						data-word={word}
						type="button"
					>
						<strong>{word}</strong> - {count}
					</button>
				))}
			</div>
			<SearchVideos searchTerm={activeWord} showDuration />
		</section>
	);
}