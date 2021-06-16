import React, { useState, useRef, useEffect } from 'react';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax

import { GeoJsonData } from '../../types';

mapboxgl.accessToken = process.env.GATSBY_MAPBOX_ACCESS_TOKEN;

const LATITUDE_RANGE = [150, 15];
const LONGITUDE_RANGE = [85, -25];

interface DashboardMapProps {
  borders: string;
}

const DashboardMap = ({ borders }: DashboardMapProps) => {
  const mapContainer = useRef(null);
  const map = useRef<any>(null);
  const [lat, setLat] = useState(-4.235643229783223);
  const [lng, setLng] = useState(120.83187921798928);
  const [zoom, setZoom] = useState(4);

  useEffect(() => {
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [lng, lat],
      zoom,
      maxZoom: 8,
      minZoom: 3.5,
      maxPitch: 60,
      maxBounds: [LONGITUDE_RANGE, LATITUDE_RANGE],
    });
    map.current.addControl(new mapboxgl.NavigationControl());
  }, []);

  useEffect(() => {
    if (!map.current) return; // wait for map to initialize
    // map.current.addControl(new mapboxgl.NavigationControl());
    map.current.on('move', () => {
      setLng(map.current.getCenter().lng.toFixed(4));
      setLat(map.current.getCenter().lat.toFixed(4));
      setZoom(map.current.getZoom().toFixed(2));
    });

    let hoveredStateId: any = null;
    let clickedStateId: any = null;

    map.current.on('load', () => {
      map.current.addSource('states', {
        type: 'geojson',
        data: borders,
        promoteId: 'id_1',
      });

      // The feature-state dependent fill-opacity expression will render the hover effect
      // when a feature's hover state is set to true.
      map.current.addLayer({
        id: 'state-fills',
        type: 'fill',
        source: 'states',
        layout: {},
        paint: {
          //   'fill-color': '#627BC1',
          'fill-color': [
            'case',
            ['boolean', ['feature-state', 'clicked'], false],
            '#161f36',
            '#627BC1',
          ],
          'fill-opacity': [
            'case',
            ['boolean', ['feature-state', 'hover'], false],
            0.7,
            0.5,
          ],
        },
      });

      map.current.addLayer({
        id: 'state-borders',
        type: 'line',
        source: 'states',
        layout: {},
        paint: {
          'line-color': '#627BC1',
          'line-width': 2,
        },
      });

      // When the user moves their mouse over the state-fill layer, we'll update the
      // feature state for the feature under the mouse.
      map.current.on('mousemove', 'state-fills', (e) => {
        if (e.features.length > 0) {
          if (hoveredStateId !== null) {
            map.current.setFeatureState(
              { source: 'states', id: hoveredStateId },
              { hover: false },
            );
          }
          hoveredStateId = e.features[0].id;
          map.current.setFeatureState(
            { source: 'states', id: hoveredStateId },
            { hover: true },
          );
        }
      });

      // When the mouse leaves the state-fill layer, update the feature state of the
      // previously hovered feature.
      map.current.on('mouseleave', 'state-fills', () => {
        if (hoveredStateId !== null) {
          map.current.setFeatureState(
            { source: 'states', id: hoveredStateId },
            { hover: false },
          );
        }
        hoveredStateId = null;
      });
      map.current.on('click', 'state-fills', (e) => {
        if (e.features.length > 0) {
          if (clickedStateId !== null) {
            map.current.setFeatureState(
              { source: 'states', id: clickedStateId },
              { clicked: false },
            );
          }
          clickedStateId = e.features[0].id;
          map.current.setFeatureState(
            { source: 'states', id: clickedStateId },
            { clicked: true },
          );
        }
      });
      map.current.on('click', 'state-fills', (e) => {
        new mapboxgl.Popup({
          className: '',
        })
          .setLngLat(e.lngLat)
          .setHTML(e.features[0].properties.state)
          .addTo(map.current);
      });
    });
  });

  return (
    <div>
      <div ref={mapContainer} className="h-screen" />
    </div>
  );
};

export default DashboardMap;
