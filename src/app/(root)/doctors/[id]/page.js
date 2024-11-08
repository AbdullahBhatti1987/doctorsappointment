import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

function DoctorDetails() {
  const router = useRouter();
  const { id } = router.query; // This is the dynamic part of the URL
  const [doctor, setDoctor] = useState(null);

  useEffect(() => {
    if (id) {
      // Fetch the doctor's details from your API or local data
      // For the example, let's assume you have an array of doctors
      const doctorData = doctorsData.find((doc) => doc.id === parseInt(id)); // Assuming doctorsData is an array
      setDoctor(doctorData);
    }
  }, [id]); // Only re-run when the id changes

  if (!doctor) {
    return <p>Loading...</p>; // Show loading until data is fetched
  }

  return (
    <div className="doctor-details">
      <h1>{doctor.name}</h1>
      <p>Category: {doctor.category}</p>
      <p>Experience: {doctor.experience}</p>
      <p>Specialization: {doctor.specialization}</p>
      <p>Location: {doctor.location}</p>
      {/* Add more doctor details as necessary */}
    </div>
  );
}

// Sample data for demonstration
const doctorsData = [
  { id: 1, name: 'Dr. Smith', category: 'Cardiology', experience: '10 years', specialization: 'Heart Surgery', location: 'New York' },
  { id: 2, name: 'Dr. Johnson', category: 'Dermatology', experience: '8 years', specialization: 'Skin Care', location: 'Los Angeles' },
  { id: 3, name: 'Dr. Lee', category: 'Neurology', experience: '12 years', specialization: 'Brain Surgery', location: 'Chicago' },
];

export default DoctorDetails;
