
import globalStyles from '../styles/global.module.css';
const Policies = () => {
  const policies = [
    { id: 1, name: "Life Insurance", type: "Whole Life" },
    { id: 2, name: "Health Insurance", type: "Comprehensive" },
    { id: 3, name: "Car Insurance", type: "Third Party" },
    { id: 4, name: "Home Insurance", type: "Property Coverage" },
  ];

  return (
   
      <div className={globalStyles.container}>
      <h1>Listed Policies</h1>
      <table className={globalStyles.table}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Policy Name</th>
            <th>Policy Type</th>
          </tr>
        </thead>
        <tbody>
          {policies.map(policy => (
            <tr key={policy.id}>
              <td>{policy.id}</td>
              <td>{policy.name}</td>
              <td>{policy.type}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Policies;
