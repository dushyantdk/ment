import React from "react";
import ArchitectureOverview from "./ArchitectureOverview";
import ProductAdvantage from "./ProductAdvantage";
import ProductBroucher from "./ProductBroucher";
import ProductWorkflow from "./ProductWorkflow";
import Securty from "./Security";
import WhatIs from "./WhatIs";
import HeaderProduct from "../Header/HeaderProduct/HeaderProduct";
import Footer from '../Footer/Footer';
import CopyRight from '../Footer/CopyRight';
import LetsTalk from "../LetsTalk/LetsTalk";


const ProjectPage = (props) => {
 
    return (
        <>
            {/*<TurnkeySolution />*/}
            <HeaderProduct
            productname2={props.name2}
            para={props.hpara}
            />
            <ProductBroucher />
            <WhatIs
                productname={props.name2}
                img={props.wimg}
                para2={props.wpara}
                para3={props.wpara2}
                para4={props.wpara3}
            />
            <ArchitectureOverview
                img2={props.aimg}
                para5={props.apara}
                para6={props.apara2}
                para7={props.apara3}
                para8={props.apara4}
                para9={props.apara5}
            />
            <ProductAdvantage
                productname={props.name2}
                img3={props.adimg}
                img4={props.adimg2}
                para10={props.adpara}
                para11={props.adpara2}
                num={props.adnum}
                num2={props.adnum2}
                num3={props.adnum3}
                para12={props.adpara3}
                para13={props.adpara4}
                para14={props.adpara5}
                para15={props.adpara6}
                para16={props.adpara7}
            />
            <ProductWorkflow
                img5={props.wfimg}
                para17={props.wfpara}
                para18={props.wfpara2}
                para19={props.wfpara3}
                para20={props.wfpara4}
            />
            <Securty
                img6={props.simg}
                para21={props.spara}
                para22={props.spara2}
            />
            <LetsTalk/>
           <Footer/> 
           <CopyRight/>  
        </>
    )
}

export default ProjectPage;
