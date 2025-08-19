// Camera.jsx
import { forwardRef } from "react";
import dslr from "../assets/img/ProfileImg/dslr.png"

// forwardRef use karenge taaki App.jsx se ref pass kar sako
const Camera = forwardRef((props, ref) => {
  return (
    <img
      ref={ref}
      src={dslr}
      alt="dslr"
      className="cam absolute z-50 w-[200px] h-[200px] top-40 left-15 sm:left-50 sm:top-0 md:top-15 md:left-135"
    />
  );
});

export default Camera;
