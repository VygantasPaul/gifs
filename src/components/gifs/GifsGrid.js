import React from 'react'
import GifsItem from './GifsItem'


const GifsGrid = ({items}) => {
    const DatePosted = ({str}) => {

        return (
          <div>
            {str.split().map((item, index) => {
              return <span key={index}>{item}</span>;

            })}
          </div>

        );
      };

 
    return (
        <> 
        
        <div className=''>Giphs: {items.length}</div>
       
        <section className='cards'>
      
            {items.map((item) => (
                <div key={item.id}>
                <DatePosted str={item.import_datetime} />
                <GifsItem key={item.id} item={item}></GifsItem>
                </div>
            ))}

        </section>
        </>
    )
}

export default GifsGrid