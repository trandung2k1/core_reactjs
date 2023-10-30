import React, { useState } from 'react';
interface Props {
  tabIds: string[];
  getHeader: (id: string) => string;
  renderContent: (id: string) => React.ReactElement;
}
const Tab: React.FC<Props> = ({ tabIds, getHeader, renderContent }) => {
  const [selectedId, setSelectedId] = useState(tabIds[0]);
  return (
    <div>
      {tabIds.map((tabId) => (
        <button
          style={selectedId === tabId ? { color: 'blue' } : {}}
          key={tabId}
          onClick={() => setSelectedId(tabId)}
        >
          {getHeader(tabId)}
        </button>
      ))}
      <hr />
      <div key={selectedId}>
        <h3>{getHeader(selectedId)}</h3>
        {renderContent(selectedId)}
      </div>
    </div>
  );
};

export default Tab;
