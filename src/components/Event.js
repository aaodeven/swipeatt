import React from 'react';

const Event = () => {
    return (
        <div className='eventContainer'>
          <div className="event eventModeration"><p>En attente de modération</p><button className='eventBtn'>1</button></div>
          <div className="event eventModification"><p>En attente de modification</p><button className='eventBtn'>2</button></div>
          <div className="event eventValide"><p>Validée</p><button className='eventBtn'>3</button ></div>
          <div className="event eventArchive"><p>Archivée</p><button className='eventBtn  '>4</button></div>
        </div>
    );
};

export default Event;