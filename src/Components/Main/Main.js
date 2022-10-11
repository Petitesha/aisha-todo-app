import React, { useState } from 'react';
import Header from '../Header/Header';
import Modal from '../Modal/Modal';



function Main() {
  const [showModal, setShowModal] = useState(false);

 
    return (
      <div>
       <Header handleClick = {() => setShowModal(true)}/>
       {showModal && <Modal show={setShowModal} onClose={() => setShowModal(false) }/>}
      </div>
    );
  }
  
  export default Main;
  