import React, { useEffect, useState } from 'react'

// this is a interview questions in company "nCircle Tech".
// give the this JSON API link "jsonplaceholder.typicode.com/users" and say the fetch the data from this API.
const Data = () => {

    const [data, setData] = useState(null)

    const ftechData = async () => {
        try {
            const responce = await fetch(`https://jsonplaceholder.typicode.com/users`);
            const jsonData = await responce.json();
            setData(jsonData)
            console.log(jsonData);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        ftechData();
    }, [])

  return (
    <div>
        {data ? (
            <ul>
                {data.map((item, index) => (
                    <li key={index.id}>{item.name}</li>
                ))}
            </ul> 
        ) : (
            <p>loading</p>
        )}
    </div>
  )
}

export default Data