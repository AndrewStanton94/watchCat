import React from 'react';

export default class UtilTable extends React.Component {
	attributeNames() {
		return Object.keys(this.props.data[0]);
	}

	renderRow(object, keys, rowIndex) {
		return (
			<tr key={rowIndex}>
				{keys.map((key, i) => (
					<td key={i}>{object[key]}</td>
				))}
			</tr>
		);
	}

	renderHeaderRow() {
		return this.props.headers.map((header, i) => <th key={i}>{header}</th>);
	}

	renderTHeadAndTFoot() {
		const headerRowItems = this.renderHeaderRow();
		return (
			<>
				<thead>{headerRowItems}</thead>
				<tfoot>{headerRowItems}</tfoot>
			</>
		);
	}

	renderTBody(keys) {
		return (
			<tbody>
				{this.props.data.map((row, i) => this.renderRow(row, keys, i))}
			</tbody>
		);
	}

	render() {
		const keys = this.attributeNames();
		return (
			<table>
				{this.renderTHeadAndTFoot(keys)}
				{this.renderTBody(keys)}
			</table>
		);
	}
}
