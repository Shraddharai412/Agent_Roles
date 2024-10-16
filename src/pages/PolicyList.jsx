import { useState } from 'react';
import Modal from "../components/Modal";
import styles from '../styles/PolicyList.module.css';

const policies = [
  { id: 1, name: 'Health Insurance', type: 'Health', coverage: 100000, duration: 5 },
  { id: 2, name: 'Life Insurance', type: 'Life', coverage: 500000, duration: 10 },
];

const PolicyList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [policyToDelete, setPolicyToDelete] = useState(null);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleDelete = (policy) => {
    setPolicyToDelete(policy);
    setModalVisible(true);
  };

  const confirmDelete = () => {
    console.log(`Policy ${policyToDelete.name} has been deleted.`);
    setModalVisible(false);
  };

  return (
    <div className={styles.listContainer}>
      <h2>Policy List</h2>
      <input
        type="text"
        placeholder="Search policies..."
        value={searchTerm}
        onChange={handleSearch}
        className={styles.searchInput}
      />
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Coverage</th>
            <th>Duration</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {policies.map(policy => (
            <tr key={policy.id}>
              <td>{policy.name}</td>
              <td>{policy.type}</td>
              <td>{policy.coverage}</td>
              <td>{policy.duration}</td>
              <td>
                <button className={styles.editButton}>Edit</button>
                <button
                  className={styles.deleteButton}
                  onClick={() => handleDelete(policy)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal for delete confirmation */}
      <Modal
        show={modalVisible}
        title="Confirm Delete"
        message={`Are you sure you want to delete ${policyToDelete?.name}?`}
        onConfirm={confirmDelete}
        onCancel={() => setModalVisible(false)}
      />
    </div>
  );
};

export default PolicyList;
