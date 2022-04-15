// import "./App.css";
import Navbar from "../pages/navbar/Navbar";
import Middle from "../pages/Middle";
import { Container } from "../style/MiddleStyle";
// import Empty from "../src/components/pages/Empty";
import EmiCalc from "../pages/EmiCalc";
import Icons from '../pages/LoanSteps';
import LoanNeedCard from'../pages/LoanNeedsCard';
// import Templates from'../src/components/pages/Templates';
import TempSection from'../pages/TempSection';
import Footer from'../pages/Footer/Footer';
import Partner from'../pages/partner';
// import Cookies from'../src/components/pages/CookiesPage/index';
// import MainCookies from'../src/components/pages/CookiesPage/MainCookies';
// import MainPrivacy from'../src/components/pages/PrivacyPage/MainPrivacy';



function App() {
  return (
    <Container>
      <Navbar />
      <Middle />
      <EmiCalc />
      {/* <Empty /> */}
      <Icons/>
      <LoanNeedCard/>
      <TempSection/>
      <Partner/>
      <Footer/>
    </Container>
    // <MainCookies/>
    // <MainPrivacy/>
  );
}

export default App;
