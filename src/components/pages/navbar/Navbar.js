import React, { useState } from "react";
import {
  Main1,
  Part1,
  Part2,
  Part3,
  Button,
  WalletButton,
  Part4,
  MainWrapper,
  DownArr,
  WorldImg,
  Span,
} from "../../style/navbar/navStyle";
import logo from "../../../assets/images/Vector.png";
import logos from "../../../assets/images/arrow.png";
import Modal from "../modal/Modal";

const Navbar = () => {
  const [show, setShow] = useState(false);

  const openModal = () => {
    setShow(true);
  };

  return (
    <MainWrapper>
      <Main1>
        <Part1>Good loans</Part1>
        <Part2>
          <Button onClick={openModal}>Continue your application</Button>
        </Part2>
        {show && <Modal set={setShow}></Modal>}
        <Part3>
          <WalletButton>Affinidi Wallet</WalletButton>
        </Part3>
        <Part4>
          <WorldImg src={logo} alt="load" />
          <Span>English</Span>
          <DownArr src={logos} alt="load" />
        </Part4>
      </Main1>
    </MainWrapper>
  );
};

export default Navbar;
