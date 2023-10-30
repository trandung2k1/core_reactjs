import React, { useState } from 'react';
interface Props {
  tabs: { id: string; header: string; content: React.ReactElement }[];
}
const TabSwitcher: React.FC<Props> = ({ tabs }) => {
  const [selectedId, setSelectedId] = useState(tabs[0].id);
  const selectedTab = tabs.find((tab) => tab.id === selectedId);

  return (
    <div>
      {tabs.map((tab) => (
        <button
          style={selectedId === tab?.id ? { color: 'blue' } : {}}
          key={tab.id}
          onClick={() => setSelectedId(tab.id)}
        >
          {tab.header}
        </button>
      ))}
      <hr />
      <div key={selectedId}>
        <h3>{selectedTab?.header}</h3>
        {selectedTab?.content}
      </div>
    </div>
  );
};

export default TabSwitcher;
