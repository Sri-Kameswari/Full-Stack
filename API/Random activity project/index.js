import get from 'axios';

const apiUrl = 'https://bored-api.appbrewery.com/random';

async function getActivity() {
  try {
    const response = await get(apiUrl);
    const { activity, type } = response.data;
    console.log('Do this when bored:');
    console.log(`Activity: ${activity}`);
    console.log(`Type: ${type}`);
  } catch (error) {
    console.error('Error fetching :', error.message);
  }
}

getActivity();