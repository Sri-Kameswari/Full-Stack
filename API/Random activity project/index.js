import get from 'axios';

//Mutliple query paarmeters by modifying the URL
const apiUrl = 'https://bored-api.appbrewery.com/random?type=education';

async function getActivity() {
  try {
    const response = await get(apiUrl);
    const { activity, type } = response.data;
    console.log('Do this when bored:');
    console.log(`Activity: ${activity}`);
    console.log(`Type: ${type}`);
  } catch (error) {
    console.error('Error fetching data:', error.message);
  }
}

getActivity();