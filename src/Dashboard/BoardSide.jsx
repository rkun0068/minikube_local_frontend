import * as React from "react";
import WorkLoadSide from "./WorkLoadSide";
import ServiceSide from "./ServiceSide"

export default function BoardSide() {
  return (
    <React.Fragment>
      <WorkLoadSide/>
      <ServiceSide/>
  
    </React.Fragment>
  );
}
