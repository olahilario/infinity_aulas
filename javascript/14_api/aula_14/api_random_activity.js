

async function getActivity(){
  try{
    const response = await fetch('https://bored-api.appbrewery.com/filter?type=relaxation');
    if (!response.ok){
      throw new Error('Deu ruim no fetch');
    }
    const activities = await response.json()
    const list_activities = Object.values(activities)
    console.log(list_activities[15].activity)
  }

  catch(error){
    console.error('Deu muito ruim', error)
  }
}

getActivity()