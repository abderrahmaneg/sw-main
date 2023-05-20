import React, { useState, useEffect } from 'react';
import './ProgramPage.css';

const EmployeeProgram = () => {
  const [programData, setProgramData] = useState(null);
  const [selectedDivision, setSelectedDivision] = useState('');
  const [selectedChapter, setSelectedChapter] = useState('');

  useEffect(() => {
    
   // fetch(API_ENDPOINT)
   //   .then((response) => response.json())
   //   .then((data) => setProgramData(data))
   //   .catch((error) => console.error('Error fetching program data:', error));
  }, []);

  const handleDivisionChange = (event) => {
    setSelectedDivision(event.target.value);
    setSelectedChapter('');
  };

  const handleChapterChange = (event) => {
    setSelectedChapter(event.target.value);
  };

  const renderDivisionOptions = () => {
    if (!programData) {
      return null;
    }

    return Object.keys(programData).map((divisionKey) => {
      const division = programData[divisionKey];

      return (
        <option key={divisionKey} value={divisionKey}>
          {division.name}
        </option>
      );
    });
  };

  const renderChapterOptions = () => {
    if (!selectedDivision || !programData || !programData[selectedDivision]) {
      return null;
    }

    const chapters = programData[selectedDivision].chapters;

    return chapters.map((chapter, index) => (
      <option key={index} value={chapter.text}>
        {chapter.name}
      </option>
    ));
  };

  const renderChapterText = () => {
    if (!selectedChapter) {
      return null;
    }

    return <div>{selectedChapter}</div>;
  };

  return (
    <div className='program-containare'>
      <h1>Consult Program</h1>

      <div className="program-select">
      <label htmlFor="division">Select Division:</label>
        <select value={selectedDivision} onChange={handleDivisionChange}>
          <option value="">Select Division</option>
          {renderDivisionOptions()}
        </select>
      </div>
      <div className="program-select">
      <label htmlFor="chapter">Select Chapter:</label>
        <select value={selectedChapter} onChange={handleChapterChange}>
          <option value="">Select Chapter</option>
          {renderChapterOptions()}
        </select>
      </div>
      <div className="program-text">{renderChapterText()}</div>
    </div>
  );
};

export default EmployeeProgram;
