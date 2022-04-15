import React from "react";
import{MainWrap,Wrap,CookiesImg,Text,Button1,Button2}from '../../style/modalstyl/ModalStyl'

const Modal = (prop) => {

    const closeModal=()=>{
        prop.set(false)
    }

  return (

    <MainWrap>
      <Wrap>
        <CookiesImg />
        <Text>
          By clicking “Accept”, you agree Good Loans can store cookies on your
          device and disclose information in accordance with our cookie policy
        </Text>
        <Button1>Accept</Button1>
        <Button2 onClick={closeModal}>Decline</Button2>
      </Wrap>
    </MainWrap>
  );
};

export default Modal;
