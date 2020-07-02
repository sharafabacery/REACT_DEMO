import React ,{useState,useEffect} from 'react';
import MaterialTable from 'material-table';
//npm uninstall 
export default function MaterialTableDemo() {
  const [mystate, mysetState] = useState({
    columns: [
      { title: 'Name', field: 'name' },
      { title: 'Surname', field: 'surname' },
      { title: 'Birth Year', field: 'birthYear', type: 'numeric' },
    ]
  });
    useEffect(()=>{
      mysetState((pre)=>{return{...pre,data: [
        { name: 'Mehmet', surname: 'Baran', birthYear: 1987 },
        {name: 'Zerya Betül',surname: 'Baran',birthYear: 2017 },
        { name: 'Mehmet', surname: 'Baran', birthYear: 1987 },
        {name: 'Zerya Betül',surname: 'Baran',birthYear: 2017}
      ]}})
    },[])
  return (
    <MaterialTable
    title="Editable Example"
    columns={mystate.columns}
    data={mystate.data}
    editable={{
      onRowUpdate: (newData, oldData) =>
        new Promise((resolve) => {
          setTimeout(() => {
           resolve();
            if (oldData) {
              //console.log(oldData)
              mysetState((prevState) => {
                const data = [...prevState.data];
                data[data.indexOf(oldData)] = newData;
                //console.log(newData)
                //const {name,surname,birthYear}=newData
                //let list=[name,surname,birthYear]
                //console.log(list)
                return { ...prevState, data };
              });
            }
          }, 100);
        }).catch(function(e) {
          console.log(e); // doesn't happen
        }),
    
    }}
  />
  );
}
