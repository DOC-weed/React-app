import './_offline.css';
import React, {useEffect} from 'react';

export default function Offline({children}){

  const [offline,setoffline]= React.useState(false)
  useEffect(() => {
    if(!navigator.onLine) {setoffline(true);}
  }, [])
  return(
    <>
    <div className='offline'>
      {(offline)?<div className='offline__content'>
        <div className='offline__text'>
          <h3>No estas en línea</h3>
          <h4>Revisa tu conexión</h4>
        </div>
      </div>:
      <div>
        {children}

      </div>}
    </div>
    </>
  )
}