import React from 'react';

const columns = ['Taxi', 'Ride-Hailing', 'Car Ownership', 'Car Rental', 'CHUS Mobility'] as const;

const rows: { category: string; values: string[] }[] = [
  { category: 'Cost', values: ['High', 'Medium', 'Very High', 'High', 'Low'] },
  { category: 'Privacy', values: ['Low', 'Low', 'High', 'Medium', 'High'] },
  { category: 'Safety', values: ['Variable', 'Variable', 'Medium', 'Medium', 'High'] },
  { category: 'Sustainability', values: ['Low', 'Low', 'Low', 'Low', 'High'] },
  { category: 'Driver Dependency', values: ['High', 'High', 'None', 'None', 'Low'] },
];

const Comparison: React.FC = () => {
  return (
    <section id="compare" className="section-pad bg-white">
      <div className="max-w-7xl mx-auto">
        <p className="section-label">Why CHUS is different</p>
        <h2 className="heading-lg mt-4">See the difference for yourself.</h2>

        <div className="mt-10 overflow-x-auto">
          <table className="w-full min-w-[720px] border-separate border-spacing-0">
            <thead>
              <tr>
                <th className="text-left text-xs font-mono uppercase tracking-wider text-chus-mute pb-4 pr-4">Category</th>
                {columns.map((col, i) => (
                  <th
                    key={col}
                    className={`pb-4 px-3 text-center text-xs font-medium ${
                      i === columns.length - 1
                        ? 'bg-chus-blue text-white rounded-t-xl py-3'
                        : 'text-chus-mute'
                    }`}
                  >
                    {col}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, rowIdx) => (
                <tr key={row.category}>
                  <td className="py-4 pr-4 font-display font-semibold text-sm border-t border-chus-line">
                    {row.category}
                  </td>
                  {row.values.map((val, i) => {
                    const isChus = i === row.values.length - 1;
                    const isLastRow = rowIdx === rows.length - 1;
                    return (
                      <td
                        key={`${row.category}-${columns[i]}`}
                        className={`py-4 px-3 text-center text-sm border-t border-chus-line ${
                          isChus
                            ? `bg-chus-blue-soft font-bold text-chus-green ${isLastRow ? 'rounded-b-xl' : ''}`
                            : 'text-chus-mute'
                        }`}
                      >
                        {val}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Comparison;
