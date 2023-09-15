import axios from "axios";
import React, { useState } from "react";

const useObtain = (getAll) => {
  const [data, setData] = useState([]);

  const obtainAllData =  (enpoint) => {
    axios.get(enpoint).then((res) => setData(res.data));
  };
  
  const newPost =  (entpoint, data) => {
     axios.post(entpoint, data).then(() =>{getAll()});
  };
  const deleteData =  (entpoint) => {
     axios.delete(entpoint).then(() =>{getAll()});;
  };
  const updateData =  (entpoint, data) => {
     axios.put(entpoint, data).then(() =>{getAll()});;
  };
  return { newPost, deleteData, updateData, data, obtainAllData, setData };
};

export default useObtain;
