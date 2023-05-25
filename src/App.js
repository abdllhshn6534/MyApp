import React, { useEffect, useState } from "react";
import HelloWorld from "./components/01-hello-world/hello-world";
import HelloReact from "./components/02-hello-react/hello-react";
import Jsx1 from "./components/03-jsx/jsx1";
import Jsx2 from "./components/03-jsx/jsx2";
import Jsx3 from "./components/03-jsx/jsx3";
import Jsx4 from "./components/03-jsx/jsx4";
import Jsx5 from "./components/03-jsx/jsx5";
import Jsx6 from "./components/03-jsx/jsx6";
import Style1 from "./components/04-styles/style1";
import Style2 from "./components/04-styles/style2";
import Style3 from "./components/04-styles/style3";
import Greetings from "./components/06-props-1/greeting";
import Products from "./components/07-props-2/products";
import Image from "./components/09-image/image";
import Gallery from "./components/09-image/gallery";
import ProfileCard from "./components/10-profile-card/profile-card";
import BootstrapStatic from "./components/11-bootstrap/bootstrap-static";
import BootstrapDynamic from "./components/11-bootstrap/bootstrap-dynamic";
import Icon from "./components/12icons/icon";
import Events from "./components/13-event/event";
import Shop from "./components/14-products/shop";
import Statelles from "./components/15-usestate/statelles";
import Counter from "./counter";
import UseEffect from "./components/18-useEffect/useeffect";
import Useffect2 from "./components/18-useEffect/useeffect2";
import UseRef from "./components/20-useref/useref";
import Scroll from "./components/20-useref/scroll";
import UserCards from "./components/21-FetcUsers/user-cards";
import Countries from "./components/22-axios-countries/countries";
import ParentComp from "./components/23-Child-to-Parent/parent-comp";
import Form1 from "./components/24-forms/form1";
import Form2 from "./components/24-forms/form2";
import Form3 from "./components/24-forms/form3";
import Form4 from "./components/24-forms/form4";
import Form5 from "./components/24-forms/form5";
import Form6 from "./components/24-forms/form6";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import Headerr from "./components/00-home/header/header";
import Menu from "./components/00-home/menu/menu";
import StoreContext from "./store";
import Exchange from "./components/25-context-api/exchange";
import axios from "axios";

const App = () => {
    const [counter, setCounter] = useState(10);
    const [currencies, setCurrencies] = useState({})

    const loadData = async (second) => { 
        try {
            const resp = await axios.get("https://api.frankfurter.app/latest?from=TRY")
            setCurrencies(resp.data.rates)
        } catch (err) {
            console.log(err)
        }
     }

     useEffect(() => {
       loadData()
     
    
     }, [])
     


    return (
        <StoreContext.Provider value={{ counter, setCounter, currencies}}>
            <BrowserRouter>
                <Headerr />
                <Container fluid>
                    <Row>
                        <Col sm={2}>
                            <Menu />
                        </Col>
                        <Col sm={10}>
                            <Routes>
                                <Route path="/hello-world" element={<HelloWorld />} />
                                <Route path="/hello-react" element={<HelloReact />} />
                                <Route path="/jsx1" element={<Jsx1></Jsx1>} />
                                <Route path="/jsx2" element={<Jsx2></Jsx2>} />
                                <Route path="/jsx3" element={<Jsx3></Jsx3>} />
                                <Route path="/jsx4" element={<Jsx4></Jsx4>} />
                                <Route path="/exchange" element={<Exchange></Exchange>} />

                            </Routes>
                        </Col>
                    </Row>
                </Container>
                {/* 
            
            
           
             
            <Jsx5></Jsx5>
            <Jsx6></Jsx6> 
            <Style1></Style1>
            <Style2></Style2> 
            <Style3></Style3>   
            <Greetings></Greetings>
            <Products></Products>
            <Image></Image>
            <Gallery/>
             <ProfileCard  avatar="profile.jpg" name="Abdullah Şahin" 
             location="Turkey, VAN" shot="3" followers="92515" following="5151"/>  
             <BootstrapStatic/>
             <BootstrapDynamic/>
              <Icon/>
              <Events/>
              <Shop></Shop>
              <Statelles></Statelles>
               <Counter></Counter>
            <UseEffect></UseEffect>
            <Useffect2></Useffect2>
            <UseRef/>
            <Scroll></Scroll>
             <UserCards></UserCards>
             <Countries></Countries>
               <ParentComp></ParentComp>
           
             <Form1></Form1>
             <Form2/>
             <Form3></Form3>
             <Form4/>
             <Form5/>
              <Form6 />
 */    }

            </BrowserRouter>
        </StoreContext.Provider>
       
    );
}

export default App; 
