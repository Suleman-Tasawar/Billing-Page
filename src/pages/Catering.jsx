import React, { useState } from 'react';
import Input from '../components/input';

const Catering = () => {
  // State to manage starters and main
  const [formData, setFormData] = useState({ starter: [], main: [] });

  // Handler to update starter inputs
  const handleStarterChange = (index, value) => {
    const newStarters = [...formData.starter];
    newStarters[index] = value;
    setFormData({ ...formData, starter: newStarters });
  };

  // Handler to update main inputs
  const handleMainChange = (index, value) => {
    const newMain = [...formData.main];
    newMain[index] = value;
    setFormData({ ...formData, main: newMain });
  };

  console.log(formData)

  // Add new input fields for starters
  const addStarterInput = () => {
    setFormData({ ...formData, starter: [...formData.starter, ""] });
  };

  // Add new input fields for main
  const addMainInput = () => {
    setFormData({ ...formData, main: [...formData.main, ""] });
  };

  return (
    <div>
      <h2>Form Example</h2>
      <div>
        <h3>Starters</h3>
        {formData.starter.map((starter, index) => (
          <Input keys={index} value={starter} onChange={(e) => handleStarterChange(index, e.target.value)} index = {index} />
        ))}
        <button onClick={addStarterInput}>Add Starter</button>
      </div>
      <div>
        <h3>Main</h3>
        {formData.main.map((main, index) => (
            <Input keys={index} value={main} onChange={(e) => handleMainChange(index, e.target.value)} index = {index} />
        ))}
        <button onClick={addMainInput}>Add Main</button>
      </div>
      <div>
        <button onClick={() => console.log(formData)}>Submit</button>
      </div>
    </div>
  );
};

export default Catering;
