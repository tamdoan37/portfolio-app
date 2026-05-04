import { useState, useEffect } from 'react';

export const usePortfolio = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // fetching projects from the API endpoint
fetch('https://portfolio-api-dotnet.onrender.com/api/portfolios')
      .then(res => res.json())
      .then(data => {
        setProjects(data.sort((a, b) => a.title.localeCompare(b.title)));
        setLoading(false);
      })
      .catch(err => {
        console.error("Data error:", err);
        setLoading(false);
      });
  }, []);

  const sendContact = async () => {
    // Simulating the Angular service contact POST request
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ message: "Message sent successfully! (Simulation)" });
      }, 1000);
    });
  };

  return { projects, loading, sendContact };
};