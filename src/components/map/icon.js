import L, { tooltip } from "leaflet";
import soldier from "./soldier.png";

const LeafIcon = L.Icon.extend({
  options: {
    iconSize: [100, 100],
    iconAnchor: [50, 100],
    tooltipAnchor: [0, 0],
  },
});
export const SoldierIcon = new LeafIcon({ iconUrl: soldier });
