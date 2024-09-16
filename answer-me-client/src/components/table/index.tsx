import { useNavigate } from "react-router-dom";

interface Props {
  headers: string[];
  data: any[];
  onlyRead?: boolean;
}

export const Table = ({ headers, data, onlyRead }: Props) => {
  const navigate = useNavigate();

  const navigateTo = (id: string) => {
    if (onlyRead) return;
    navigate(id);
  };
  return (
    <div className=" flow-root">
      <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
          <table className="min-w-full divide-y divide-gray-300">
            <thead>
              <tr>
                {headers.map((item, idx) => (
                  <th
                    scope="col"
                    key={idx}
                    className="px-3 py-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500"
                  >
                    {item}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-transparent">
              {data.map((person) => (
                <tr
                  key={person.id}
                  className="hover:bg-zinc-200 transition-all cursor-pointer"
                  onClick={() => navigateTo(person.id)}
                >
                  {Object.keys(person).map((item, idx) => (
                    <td
                      className={`whitespace-nowrap py-4  px-3 text-sm ${
                        idx === 0
                          ? "font-medium text-gray-900"
                          : "text-gray-500"
                      }`}
                      key={idx}
                    >
                      {person[item]}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
