export const ExerciseOptions = {
    method: 'GET',
    url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
    headers: {
      'X-RapidAPI-Key': '736858499bmsh0f9c09e490f0cc9p1b7c83jsn72b82856bd23',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };
export const FetchData = async (url,options) => {
    const response = await fetch(url,options);
    const data = response.json();
    return data;
}