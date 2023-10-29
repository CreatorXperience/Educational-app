import useAccordion from "./hooks/useAccordion";
import AccordionWrapper from "./AccordionWrapper";

type TAccordionProps = {
  title: string;
  desc: string;
};
const Accordion = ({ title, desc }: TAccordionProps) => {
  const { handleIconClick, ref } = useAccordion();
  return (
    <AccordionWrapper>
      <div className="accordion-container" ref={ref}>
        <div className="content-container">
          <div className="accordion-title">
            <p>{title}</p>
          </div>
          <div className="accordion-icon" onClick={() => handleIconClick()}>
            <i className="fa-solid fa-angle-down"></i>
          </div>
        </div>

        <div className="accordion-desc">{desc}</div>
      </div>
    </AccordionWrapper>
  );
};

export default Accordion;
