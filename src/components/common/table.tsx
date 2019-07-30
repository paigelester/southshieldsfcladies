import * as React from 'react';

type TableProps = {
    rows: Array<TableCell[]>;

    headings?: Array<string>;
};

export type TableCell = string | number | JSX.Element;

export default class Table extends React.Component<TableProps> {
    private createHeading(heading: string, index: number): JSX.Element {
        return <th key={`heading_${heading}_${index}`}>{heading}</th>
    }

    private createCell(row: TableCell, index: number): JSX.Element {
        return <td key={`cell_${index}`}>{row}</td>;
    }

    private createRow(row: Array<TableCell>, index: number): JSX.Element {
        console.log(row);
        return (
            <tr key={`row_${index}`}>
                {row.map((cell: TableCell, cellIndex: number) => this.createCell(cell, cellIndex))}
            </tr>
        );
    }

    public render(): JSX.Element {
        return (
            <table>
                {this.props.headings ? (
                    this.props.headings.map((heading: string, index: number) => this.createHeading(heading, index))
                ) : null}
                {this.props.rows.map((row: Array<TableCell>, index: number) => this.createRow(row, index))}
            </table>
        );
    }
}