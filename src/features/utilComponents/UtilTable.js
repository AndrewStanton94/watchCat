import React from 'react';

export default class UtilTable extends React.Component {
	attributeNames() {
		return Object.keys(this.props.data[0]);
	}

	renderRow(object, keys) {
		return (
			<tr>
				{keys.map((key, i) => (
					<td key={i}>{object[key]}</td>
				))}
			</tr>
		);
	}

	renderHeaderRow() {
		return this.props.headers.map((header) => <th>{header}</th>);
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
				{this.props.data.map((row) => this.renderRow(row, keys))}
			</tbody>
		);
	}

	render() {
		const obj = this.props.data[0];
		console.log(obj);
		const keys = this.attributeNames();
		console.log(keys);
		return (
			<table>
				{this.renderTHeadAndTFoot(keys)}
				{this.renderTBody(keys)}
			</table>
		);
	}
}
