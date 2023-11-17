import * as React from "react";
import WorkLoadSide from "./WorkLoadSide";
import ServiceSide from "./ServiceSide"
import FastDeploySide from "./FastDeploySide";

export default function BoardSide() {
  return (
    <React.Fragment>
      <WorkLoadSide/>
      <ServiceSide/>
      <FastDeploySide/>
    </React.Fragment>
  );
}
