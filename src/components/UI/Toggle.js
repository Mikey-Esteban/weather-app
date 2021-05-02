import React from "react";
import { CheckBoxWrapper, CheckBoxLabel, CheckBox } from "./styles/Toggle";

const Toggle = ({ handleToggle }) => {
  return (
    <div>
      <CheckBoxWrapper>
        <CheckBox id="checkbox" type="checkbox" onClick={handleToggle} />
        <CheckBoxLabel htmlFor="checkbox" />
      </CheckBoxWrapper>
    </div>
  );
};

export default Toggle;
