import React, { useState } from 'react'
import SearchSession from '../SearchSession'
import BuildSessionList from '../BuildSessionList';

export default function HomeRider() {
  // Session Search value
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <>
      <SearchSession searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <BuildSessionList searchTerm={searchTerm} />
    </>
  )
}
