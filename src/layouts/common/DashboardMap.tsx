import React, { useCallback, useRef, useState } from 'react';
import DeckGL from '@deck.gl/react';
import { MapboxLayer } from '@deck.gl/mapbox';
import { GeoJsonLayer } from '@deck.gl/layers';
import { StaticMap } from 'react-map-gl';

import { GeoJsonData } from '../../types';

export const INITIAL_VIEW_STATE = {
  latitude: -4.235643229783223,
  longitude: 120.83187921798928,
  zoom: 4.5,
  minZoom: 3,
  maxZoom: 8,
  pitch: 0,
  bearing: 0,
};

export const MAP_CONTROLLER_CONFIG = {
  // scrollZoom: false,
  // doubleClickZoom: false,
};

interface DashboardMapProps {
  borders: string;
}

const DashboardMap = ({ borders }: DashboardMapProps) => {
  const [glContext, setGLContext] = useState();
  const [selectedArea, setSelectedArea] = useState<GeoJsonData>();
  const deckRef = useRef<any>(null);
  const mapRef = useRef<any>(null);

  const onMapLoad = useCallback(() => {
    const map = mapRef.current.getMap();
    const { deck } = deckRef.current;

    const { layers } = map.getStyle();
    let firstSymbolId;
    for (let i = 0; i < layers.length; i += 1) {
      if (layers[i].type === 'symbol') {
        firstSymbolId = layers[i].id;
        break;
      }
    }

    map.addLayer(new MapboxLayer({ id: 'geojson', deck }), firstSymbolId);
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
      controller={MAP_CONTROLLER_CONFIG}
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
