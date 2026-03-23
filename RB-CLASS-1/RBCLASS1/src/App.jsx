import React from 'react'
import './App.css'
import Card from './components/Card';


function App() {
const Details = [
    { name: "Krishna", course: "B.Tech", year: 2025 },
    { name: "Satyam", course: "BCA", year: 2024 },
    { name: "Rahul", course: "B.Sc", year: 2023 }
  ];

  return (
    <div>
      {
        Details.map((item, index) => (
          <Card key={index} Details={item} />
        ))
      }
    </div>
  )
}

export default App
