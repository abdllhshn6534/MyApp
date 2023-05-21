import React from "react";
import HelloWorld from "./components/01-hello-world/hello-world";
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

const App = () => {
    return (
        <React.Fragment>
            {/* <HelloWorld />
            <Jsx1></Jsx1>
            <Jsx2></Jsx2>
            <Jsx3></Jsx3>
             <Jsx4></Jsx4>
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
           

          
 */    }
             <UserCards></UserCards>
         </React.Fragment>
    )
}

export default App; 
