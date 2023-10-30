import React from 'react';
interface Props {
  rowIds: string[];
  renderRow: (id: string, index: number) => React.ReactElement;
}
const RowList: React.FC<Props> = ({ rowIds, renderRow }) => {
  return (
    <div>
      <h1>Total rows: {rowIds.length}</h1>
      {rowIds.map((rowId, index) => (
        <React.Fragment key={rowId}>{renderRow(rowId, index)}</React.Fragment>
      ))}
    </div>
  );
};

export default RowList;
