import './App.css';
import { useState } from 'react';
import nicoleDemaraImage from './images/Agent_Nicole_Demara_Portrait.png';
import zhuYuanImage from './images/Agent_Zhu_Yuan_Portrait.png';
import ellenJoeImage from './images/Agent_Ellen_Joe_Portrait.png';

function ProfileCard({ name, ageRange, location, imageSrc }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className={`profile-card ${isExpanded ? 'expanded' : ''}`} onClick={() => setIsExpanded(!isExpanded)}>
      <img src={imageSrc} alt={name} className="profile-image" />
      <h2>{name}</h2>
      {isExpanded && (
        <div className="profile-details">
          <p>Age: {ageRange}</p>
          <p>Location: {location}</p>
        </div>
      )}
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ProfileCard
          name="Nicole Demara"
          ageRange="Early 20s"
          location="Cunning Hares"
          imageSrc={nicoleDemaraImage}
        />
        <ProfileCard
          name="Zhu Yuan"
          ageRange="Late 20s"
          location="New Eridu Public Security"
          imageSrc={zhuYuanImage}
        />
        <ProfileCard
          name="Ellen Joe"
          ageRange="18"
          location="Victoria Housekeeping"
          imageSrc={ellenJoeImage}
        />
      </header>
    </div>
  );
}

export default App;
