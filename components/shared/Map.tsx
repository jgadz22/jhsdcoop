"use client";
import React, { useRef, useEffect, useState } from "react";
import * as maptilersdk from "@maptiler/sdk";
import "@maptiler/sdk/dist/maptiler-sdk.css";

const Map: React.FC = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<maptilersdk.Map | null>(null);
  const tokyo = { lng: 141.141, lat: 39.702 };
  const [zoom] = useState(14);

  maptilersdk.config.apiKey = process.env.mapApiKey
    ? process.env.mapApiKey
    : "No API";
  useEffect(() => {
    if (map.current) return; // stops map from initializing more than once

    map.current = new maptilersdk.Map({
      container: mapContainer.current!,
      style: maptilersdk.MapStyle.STREETS,
      center: [tokyo.lng, tokyo.lat],
      zoom: zoom,
    });

    new maptilersdk.Marker({ color: "#FF0000" })
      .setLngLat([141.141, 39.702])
      .addTo(map.current!);
  }, [process.env.mapApiKey, tokyo.lng, tokyo.lat, zoom]);

  return (
    <div className="relative w-full h-[525px] md:h-[420px] lg:h-[375px]">
      <div ref={mapContainer} className="absolute w-full h-full" />
    </div>
  );
};

export default Map;
