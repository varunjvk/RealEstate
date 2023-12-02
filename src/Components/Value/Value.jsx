import React, { useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemPanel,
  AccordionItemState,
  AccordionItemHeading,
  AccordionItemButton,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import { MdOutlineArrowDropDown } from "react-icons/md";
import "./Value.css";
import data from '../../utils/accordion.jsx'


const Value = () => {
  return (
    <section className="v-wrapper">
      <div className="paddings innerWidth flexCenter v-container">
        <div className="v-left">
          <div className="img-container">
            <img src="./value.png" alt="" />
          </div>
        </div>
        <div className="flexColStart v-right">
          <span className="orangeText">Our Value</span>
          <span className="primaryText">Value We Give to You</span>
          <span className="secondaryText">
                      We always ready to help by providijng the best services for you.
                      <br />
                      We beleive a good blace to live can make your life better
                  </span>
                  
                  <Accordion allowMultipleExpanded={false} preExpanded={[0]} className="accordion">
                      {
                          data.map((item, i) => {
                              const [className,setClassName]=useState(null)
                              return (
                                <AccordionItem
                                  className={`accordionItem ${className}`}
                                  key={i}
                                  uuid={i}>
                                  <AccordionItemHeading>
                                    <AccordionItemState>
                                      {({ expanded }) =>
                                        expanded
                                          ? setClassName("expanded")
                                          : setClassName("collapsed")
                                      }
                                    </AccordionItemState>
                                    <AccordionItemButton className="flexCenter accordionButton">
                                      <div className="flexCenter icon">
                                        {item.icon}
                                      </div>
                                      <span className="primaryText">
                                        {item.heading}
                                      </span>
                                      <div className="flexCenter icon">
                                        <MdOutlineArrowDropDown size={20} />
                                      </div>
                                    </AccordionItemButton>
                                  </AccordionItemHeading>
                                  <AccordionItemPanel>
                                    <p className="secondaryText">
                                      {item.detail}
                                    </p>
                                  </AccordionItemPanel>
                                </AccordionItem>
                              );
                          })
                      }
                  </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Value;
