import React, { useEffect, useState } from 'react';
import './Dictionary.css';
import { getDictionaries, isLoggedIn } from '../../API/useAPI';
const Dictionary = () => {

  const [dictionaryData, setDictionaryData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getDictionaries();
      setDictionaryData(data);
    }
    fetchData();
  }, []);



  const [selectedField, setSelectedField] = useState('Physics');

  const handleFieldChange = (event) => {
    setSelectedField(event.target.value);
  };

  const handleButtonClick = () => {
    if(!isLoggedIn()){
      window.location.href = "/login"
      return;
    }
    window.location.href = "/dictionary/add";
  }


  const RenderWords = (data) => {
    if (data.field === selectedField) {
      return (
        <tr>
          <td>{data.english}</td>
          <td>{data.hungarian}</td>
          <td>{data.author}</td>
        </tr>
      )
        ;
    }

  }


  return (
    <div className='dictionary-container'>
      <h2>Dictionary</h2>
      <label htmlFor="field-select">Select a field:</label>
      <select id="field-select" onChange={handleFieldChange} value={selectedField}>
        <option value="Physics">Physics</option>
        <option value="Informatics">Informatics</option>
        <option value="Biology">Biology</option>
        <option value="Chemistry">Chemistry</option>

      </select>

      <table>
        <thead>
          <tr>
            <th>Word</th>
            <th>Translation</th>
            <th>Submitter</th>
          </tr>
        </thead>
        <tbody>
          {dictionaryData.map((word) => (
            RenderWords(word)
          ))}
          <tr>
            <td>
              <button onClick={handleButtonClick}>
                Add translation
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Dictionary;
