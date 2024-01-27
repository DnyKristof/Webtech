import React, { useState } from 'react';
import './AddDictionary.css';
import { getLoggedInUser, postDictionary } from '../../API/useAPI';

const AddPage = ({ addWord }) => {
    const [word, setWord] = useState('');
    const [translation, setTranslation] = useState('');
    const [selectedField, setSelectedField] = useState('Physics');

    const handleFieldChange = (event) => {
        setSelectedField(event.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!word || !translation) {
            alert('Please fill in all fields!');
            return;
        }


        postDictionary(word, translation, selectedField);
    };

    return (
        <div className='add-page-container'>
            <h2>Add Word to Dictionary</h2>
            <div className='inputs-container'>
                <select id="field-select" onChange={handleFieldChange} value={selectedField}>
                    <option value="Physics">Physics</option>
                    <option value="Informatics">Informatics</option>
                    <option value="Biology">Biology</option>
                    <option value="Chemistry">Chemistry</option>

                </select>
                <label htmlFor='word-input'>Word:</label>
                <input
                    type='text'
                    id='word-input'
                    value={word}
                    onChange={(e) => setWord(e.target.value)}
                    required
                />
                <label htmlFor='translation-input'>Translation:</label>
                <input
                    type='text'
                    id='translation-input'
                    value={translation}
                    onChange={(e) => setTranslation(e.target.value)}
                    required
                />
                <button onClick={handleSubmit}>Add Word</button>
            </div>
        </div>
    );
};

export default AddPage;
