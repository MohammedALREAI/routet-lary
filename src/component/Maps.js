import React from "react";
import GoogleMapReact from "google-map-react";
import styled from "styled-components";
const MapContainer = styled.div`
  height: 400px;
`;
export const Container = styled.div`
  margin-right: auto; /* 1 */
  margin-left: auto; /* 1 */

  max-width: 960px; /* 2 */

  padding-right: 10px; /* 3 */
  padding-left: 10px; /* 3 */
`;

const MapView = styled.div`
  position: relative;
  color: white;
  background: red;
  height: 40;
  width: 60;
  top: -20;
  left: -30;
  text-align: center;
  padding-top: 5px;
`;

const MapsView = ({ text }) => <MapView>{text}</MapView>;

const Maps = props => {
  return (
    <Container>
      <p>
        This page is simply a page that shows a Google Map view of a location.
        Play around with the coordinates to get a different view
      </p>
      <MapContainer>
        <GoogleMapReact
          defaultCenter={{ lat: 6.5244, lng: 3.3792 }}
          defaultZoom={11}>
          <MapsView lat={6.5244} lng={3.3792} text={"Your Location"} />
        </GoogleMapReact>
      </MapContainer>
    </Container>
  );
};

Maps.defaultProps = {
  center: { lat: 6.5244, lng: 3.3792 },
  zoom: 11
};

export default Maps;
