import React from 'react';
import HackathonCard from './HackathonCard';

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

interface HackathonListProps {
  hackathons: Hackathon[];
}

const HackathonList: React.FC<HackathonListProps> = ({ hackathons }) => (
  <div className="space-y-6">
    {hackathons.map(hackathon => (
      <HackathonCard key={hackathon.id} hackathon={hackathon} />
    ))}
  </div>
);

export default HackathonList;
