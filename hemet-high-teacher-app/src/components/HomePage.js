import React from 'react';

const HomePage = () => {
  const categories = [
    'Assessment',
    'Facilities',
    'Athletics',
    'Standards Based Grading',
    'Collaboration',
    'Discipline',
    'Forms',
    'HHS Information',
    'HUSD Information',
    'Instruction',
    'Literacy',
    'Safety',
    'Schedules & Calendars',
    'Technology',
  ];

  return (
    <div>
      <h1>Hemet High Teacher App</h1>
      <p>You need to be signed into your HUSD Google account to use this app.</p>
      <select>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
      <button>NEXT</button>
    </div>
  );
};

export default HomePage;
