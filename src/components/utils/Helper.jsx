const findIndexById = (id, array) => {
    for (let i = 0; i < array.length; i++) {
      if (id === array[i].id) {
        return i;
      }
    }
    return -1;
  };
  
  export default findIndexById;
  