import React from 'react'
import InputBlock from '../components/InputBlock'
import Employees from '../components/Employees'
import { useSelector } from 'react-redux'
import { RootState } from '../store/store'

const Home: React.FC = () => {
  const { searchQuery, data } = useSelector((state: RootState) => state.employees)

  const filteredEmployees = data.filter((employee) =>
    employee.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className='Container'>
      <InputBlock />
      <Employees filteredEmployees={filteredEmployees} />
    </div>
  )
}

export default Home