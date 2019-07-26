const BASE_URL = '/';

const deleteItem = (event) =>  {
    fetch(`${BASE_URL}/${event.data}`, {
        method: 'DELETE',
      })
   

}
// pass event.data as the id
/* 
 fetch(`${BASE_URL}/${dataId}`, {
        method: 'DELETE',
      })
      .then((res) => res.json())
      .catch((err) => console.log(err));

*/