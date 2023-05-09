import "./liveLocation.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Icon, divIcon, point } from "leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";
export default function LiveLocation() {
  const createCustomClusterIcon = (cluster) => {
    return new divIcon({
      html: `<div class="cluster-icon"> ${cluster.getChildCount()} </div>`,
      iconSize: point(33, 33, true),
    });
  };
  let position = [35.6995, 411.38];
  const markers = [
    { geocode: [35.6995, 411.38], popUp: "location one" },
    { geocode: [35.7347, 411.3551], popUp: "location two" },
    { geocode: [35.7587, 411.5468], popUp: "location three" },
    { geocode: [35.5258, 411.3684], popUp: "location four" },
  ];
  const customIcon = new Icon({
    iconUrl: "https://cdn-icons-png.flaticon.com/512/10698/10698511.png",
    iconSize: [38, 38],
  });

  return (
    <>
      <MapContainer
        style={{ width: "100vw", height: "100vh" }}
        center={position}
        zoom={9}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <MarkerClusterGroup
          chunkedLoading
          iconCreateFunction={createCustomClusterIcon}
        >
          {markers.map((marker, index) => (
            <Marker key={index} position={marker.geocode} icon={customIcon}>
              <Popup>
                <p> {marker.popUp} </p>
              </Popup>
            </Marker>
          ))}
        </MarkerClusterGroup>
      </MapContainer>
    </>
  );
}
