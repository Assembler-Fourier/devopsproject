import React, { useState, FormEvent } from 'react';
import axios from 'axios';

const UserForm: React.FC = () => {
  const [userName, setUserName] = useState<string>('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      // Replace 'http://localhost:YOUR_PORT' with your server's URL
      await axios.post('http://devopsnodejsapp-container:8080', { userName });
      console.log('Data sent successfully');
    } catch (error) {
      console.error('Error sending data:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        User Name:
        <input
          type="text"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default UserForm;
