import React, { useEffect, useRef, VFC } from "react";
import OLMap from "ol/Map";
import View from "ol/View";
import TileLayer from "ol/layer/Tile";
import { fromLonLat } from "ol/proj";
import OSM from "ol/source/OSM";
import styled from "styled-components";

const StyledMapContainer = styled.div`
  flex: 1;
  width: 100%;
`;

export const Map: VFC = () => {
  const mapRef = useRef<any>(null);

  useEffect(() => {
    if (!mapRef) return;
    new OLMap({
      target: mapRef.current,
      layers: [
        new TileLayer({
          source: new OSM()
        })
      ],
      view: new View({
        center: fromLonLat([139.646669, 35.553599]),
        zoom: 15
      })
    });
  });

  return <StyledMapContainer className="map" ref={mapRef} ></StyledMapContainer>;
};