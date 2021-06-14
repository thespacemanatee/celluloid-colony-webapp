import React, { useCallback, useRef, useState } from 'react';
import DeckGL from '@deck.gl/react';
import { MapboxLayer } from '@deck.gl/mapbox';
import { GeoJsonLayer } from '@deck.gl/layers';
import { StaticMap } from 'react-map-gl';

const INITIAL_VIEW_STATE = {
  latitude: -6.235643229783223,
  longitude: 106.83187921798928,
  zoom: 5,
  minZoom: 5,
  pitch: 0,
  bearing: 0,
};

type GeoJsonData = {
  cartodb_id: number;
  country: string;
  id_1: number;
  slug: string;
  state: string;
};

const DashboardMap = ({ borders }: { borders: string }) => {
  const [glContext, setGLContext] = useState();
  const [selectedArea, setSelectedArea] = useState<GeoJsonData>();
  const deckRef = useRef<any>(null);
  const mapRef = useRef<any>(null);

  const onMapLoad = useCallback(() => {
    const map = mapRef.current.getMap();
    const { deck } = deckRef.current;

    map.addLayer(new MapboxLayer({ id: 'my-map', deck }));
  }, []);

  const layers = [
    new GeoJsonLayer({
      id: 'geojson',
      data: borders,
      opacity: 0.8,
      stroked: true,
      filled: true,
      lineWidthMinPixels: 3,
      extruded: false,
      getFillColor: (f: any) => {
        console.log(f.properties);
        if (
          selectedArea &&
          f.properties.cartodb_id === selectedArea?.cartodb_id
        ) {
          return [25, 116, 210, 255];
        }
        return [212, 218, 220, 255];
      },
      updateTriggers: {
        getFillColor: [selectedArea ? selectedArea?.cartodb_id : null],
      },
      getLineColor: [29, 161, 242],
      pickable: true,
      autoHighlight: true,
      highlightColor: [142, 223, 255],
      onClick: (e: any) => {
        setSelectedArea(e.object.properties);
      },
    }),
  ];

  return (
    <DeckGL
      ref={deckRef}
      layers={layers}
      initialViewState={INITIAL_VIEW_STATE}
      controller
      onWebGLInitialized={setGLContext}
      glOptions={{
        stencil: true,
      }}
    >
      {glContext && (
        <>
          <StaticMap
            ref={mapRef}
            gl={glContext}
            mapStyle="mapbox://styles/mapbox/light-v9"
            mapboxApiAccessToken={process.env.GATSBY_MAPBOX_ACCESS_TOKEN}
            onLoad={onMapLoad}
          />
        </>
      )}
    </DeckGL>
  );
};

DashboardMap.propTypes = {};

export default DashboardMap;
