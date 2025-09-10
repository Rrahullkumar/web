import React from "react";

const ProfileCard = (props) => {
  return (
    <div className={` relative rounded-xl p-6  text-center text-white w-full mx-auto h-[10rem] ${props.position ==="left" ? "reversegrad":" grad" }`}>
      <img
        src={props.img}
        alt=""
        className={`absolute w-[35%] h-auto bottom-0 ${
          props.position === "left" ? "left-6 max-lg:left-0" : "right-0 "
        }`}
      />

      <div
        className={` absolute ${
          props.position === "left"
            ? "right-10 text-right"
            : "left-10 text-left"
        }`}
      >
        <h3 className="text-2xl max-lg:text-xl font-semibold">{props.name}</h3>
        <p className="text-lg font-medium ">({props.role})</p>
       
      </div>
    </div>
  );
};

export default ProfileCard;
