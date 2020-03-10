import React from "react";
import Spinner from "react-spinkit";

function Table({ columns, data, keyId, loading }) {
  if (loading)
    return (
      <div style={{ margin: "100%" }}>
        <Spinner
          style={{
            position: "absolute",
            top: "50%",
            left: "50%"
          }}
          fadeIn="none"
          name="cube-grid"
          color="white"
        />
      </div>
    );

  return (
    <table className="min-w-full">
      <thead>
        <tr>
          {columns.map(c => (
            <th
              key={c.title}
              className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
            >
              {c.title}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="bg-gray-900">
        {data.map(d => (
          <tr key={d[keyId]}>
            {columns.map(c => (
              <td
                key={c.title}
                className="px-6 py-4 whitespace-no-wrap border-b border-gray-800"
              >
                {c.renderItem(d)}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
