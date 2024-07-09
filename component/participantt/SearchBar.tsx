import React from 'react';

interface SearchBarProps {
  placeholder: string;
}

const SearchBar: React.FC<SearchBarProps> = ({ placeholder }) => (
  <input type="text" placeholder={placeholder} className="w-full p-3 mb-6 border rounded-md" />
);

export default SearchBar;
