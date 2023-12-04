import get from 'axios';

// URL to fetch ISS current location
const apiUrl = 'https://api.wheretheiss.at/v1/satellites/25544';

// Function to fetch ISS current location
async function getISSLocation() {
  try {
    const response = await get(apiUrl);
    const { latitude, longitude } = response.data;
    console.log('ISS current location:');
    console.log(`Latitude: ${latitude}`);
    console.log(`Longitude: ${longitude}`);
  } catch (error) {
    console.error('Error fetching ISS location:', error.message);
  }
}

// Call the function to get ISS location
getISSLocation();
