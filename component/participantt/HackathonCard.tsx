import React from 'react';

interface Hackathon {
  id: number;
  date: string;
  title: string;
  organizer: string;
  description: string;
  isPublic: boolean;
  participants: number;
  tags: string[];
}

interface HackathonCardProps {
  hackathon: Hackathon;
}

const HackathonCard: React.FC<HackathonCardProps> = ({ hackathon }) => (
  <a href="/detail" className="block border rounded-lg p-4 bg-white shadow-md hover:shadow-lg transition-shadow">
    <div className="flex gap-4">
      <img src="img.jpg" alt="Hackathon" className="w-36 h-36 object-cover rounded-md" /> {/* Remplacez par l'image réelle */}
      <div className="flex-grow">
        <p>{hackathon.date}</p>
        <h2 className="text-xl font-bold">{hackathon.title}</h2>
        <p>Organisateur : {hackathon.organizer}</p>
        <p>{hackathon.description}</p>
        <button className="text-blue-500">more...</button>
      </div>
    </div>
    <div className="flex justify-between items-center mt-4">
      <div className="flex gap-2">
        {hackathon.tags.map(tag => (
          <span key={tag} className="bg-gray-200 px-2 py-1 rounded-md">{tag}</span>
        ))}
      </div>
      <div className="flex items-center gap-2">
        <p>{hackathon.participants} autres participants</p>
        <button className="bg-green-500 text-white px-4 py-2 rounded-md">participer</button>
      </div>
    </div>
  </a>
);

export default HackathonCard;
