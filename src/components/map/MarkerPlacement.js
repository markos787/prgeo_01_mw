import React, { useState } from "react";
import { Circle, Marker, Popup, useMapEvent } from "react-leaflet";
import { SoldierIcon } from "./icon";

function MarkerPlacement() {
  const [Position, setPosition] = useState(null);
  const [Mass, setMass] = useState(10000);

  const map = useMapEvent({
    click: (e) => {
      // console.log(e.latlng);
      setPosition(e.latlng);
    },
  });

  const promien1 = (Mass) => {
    // console.log(Math.pow(Mass, 1 / 3) / Math.pow(80 / 980, 1 / 1.89));
    return Math.pow(Mass, 1 / 3) / Math.pow(80 / 980, 1 / 1.89);
  };
  const promien2 = (Mass) => {
    // console.log(Math.pow(Mass, 1 / 3) / Math.pow(80 / 980, 1 / 1.89));
    return Math.pow(Mass, 1 / 3) / Math.pow(30 / 980, 1 / 1.89);
  };
  const promien3 = (Mass) => {
    // console.log(Math.pow(Mass, 1 / 3) / Math.pow(80 / 980, 1 / 1.89));
    return Math.pow(Mass, 1 / 3) / Math.pow(15 / 980, 1 / 1.89);
  };

  return (
    <div>
      {
        Position ? (
          <>
            <Marker icon={SoldierIcon} position={Position}>
              <Popup>
                Podaj masę ładunku wybuchowego w kg
                <input
                  type="range"
                  min="0"
                  max="750000000"
                  defaultValue="0"
                  onChange={(e) => {
                    setMass(e.target.value);
                  }}
                ></input>
                {Mass}
              </Popup>
            </Marker>
            <Circle
              center={Position}
              radius={promien3(Mass)}
              pathOptions={{ color: "yellow" }}
            ></Circle>
            <Circle
              center={Position}
              radius={promien2(Mass)}
              pathOptions={{ color: "orange" }}
            ></Circle>
            <Circle
              center={Position}
              radius={promien1(Mass)}
              pathOptions={{ color: "red" }}
            ></Circle>
          </>
        ) : (
          ""
        )
      }
    </div>
  );
}

export default MarkerPlacement;
