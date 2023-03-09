import { ReactComponent as WorkIcon } from "../../assets/image/work.svg";
import { ReactComponent as SchoolIcon } from "../../assets/image/school.svg";

import timelineElements from "./timelineElements";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";

import './styles.css';

//Tipagem
//type Props = {
// id: number;
//}

export function TimeLine() {
  let workIconStyles = { background: "#06D6A0" };
  let schoolIconStyles = { background: "#f9c74f" };


  return (
    <div>

      <h1 className="title">Experiencia Profissional</h1>
      <VerticalTimeline>
        {timelineElements.map((element: any) => {
          let isWorkIcon = element.icon === "work";
          let showButton =
            element.buttonText !== undefined &&
            element.buttonText !== null &&
            element.buttonText !== "";

          return (
            <VerticalTimelineElement
              key={element.id}
              date={element.date}
              dateClassName="date"
              iconStyle={isWorkIcon ? workIconStyles : schoolIconStyles}
              icon={isWorkIcon ? <WorkIcon /> : <SchoolIcon />}
            >
              <h3 className="vertical-timeline-element-title">
                {element.title}
              </h3>
              <br />
              <h5 className="vertical-timeline-element-subtitle">
                {element.location}
              </h5>
              <p id="description">{element.description}</p>

              {showButton && (
                <a
                  className={`button ${isWorkIcon ? "workButton" : "schoolButton"
                    }`}
                  href="/"
                >
                  {element.buttonText}
                </a>
              )}
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </div>

  )
}