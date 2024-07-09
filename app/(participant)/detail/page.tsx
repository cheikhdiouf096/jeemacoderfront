// Page.tsx
"use client"
import React, { useState } from 'react';
import Modal from '@/component/participantt/modal';

const Page: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);

  const closeModal = () => setIsModalOpen(false);

  return (
    <div>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <div className="max-w-4xl mx-auto p-5 bg-white shadow-md rounded-lg font-sans">
          <h2 className="text-4xl font-bold mb-5 text-center">
            Theme: <span className="text-green-500">Intelligence artificielle</span>
          </h2>
          <img src="img.jpg" className="block ml-5 w-2/5 h-auto rounded-lg" alt="Event" />
          <h3 className="text-2xl text-center mb-3 -mt-40 ml-56">Jemacoder 2024</h3>
          <p className="text-center italic mb-20 mt-2 ml-36">Organisateur: Nom Organisateur</p>
          <div className="text-left mb-20 mt-32 ml-10">
            <h4 className="text-xl font-bold mb-2">Description</h4>
            <p className="text-base leading-6">
              Lorem ipsum dolor sit amet. In tenetur necessitatibus cum possimus blanditiis est ipsam perspiciatis est deserunt adipisci eum vitae nulla sed possimus voluptate...
              Lorem ipsum dolor sit amet. In tenetur necessitatibus cum possimus blanditiis est ipsam perspiciatis est deserunt adipisci eum vitae nulla sed possimus voluptate...
              Lorem ipsum dolor sit amet. In tenetur necessitatibus cum possimus blanditiis est ipsam perspiciatis est deserunt adipisci eum vitae nulla sed possimus voluptate...
            </p>
          </div>
          <div className="text-left text-xl mb-5 mt-10 ml-10">
            <p><strong>Date de début:</strong> <span className="text-green-500">Samedi 01 Juin 2024</span></p>
            <p><strong>Date de fin:</strong> <span className="text-green-500">Vendredi 07 Juin 2024</span></p>
            <p><strong>Lieux:</strong> HLM Grand Yoff</p>
            <p><strong>Prix:</strong> Aucun</p>
          </div>
          <div className="text-center">
            <button className="bg-green-500 text-white border-none py-2 px-5 text-lg rounded cursor-pointer">Participer</button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Page;
