import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ComposableMap,ZoomableGroup,Annotation, Geographies,Sphere,Graticule, Geography } from "react-simple-maps"





const geoUrl = "https://ismailarilik.com/react-covid-maps/geo.json"

const Main = () => {

  const [geo,setGeo]=useState();


  return (
    <div className='h-[calc(100vh-74px)] bg-zinc-800 flex-1 text-white overflow-hidden
    flex flex-col justify-center items-center wrapper md:pt-20'>
      <h6>See Details : {geo?.properties?.name}</h6>
      <ComposableMap height={900} projectionConfig={{scale:187, rotate:[-10,0,0]}}>
        <ZoomableGroup>
        <Sphere stroke="gray" />
        <Graticule stroke="gray"/>
      
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Link  to={`/detail?code=${geo.id}`} key={geo.rsmKey}>
              <Geography
              onMouseEnter={()=> setGeo(geo)}
              onMouseLeave={()=> setGeo()}
              geography={geo} style={{
                default: {
                  fill: "#EEE",
                },
                hover: {
                  fill: "rgb(54 197 94)",
                },
                pressed: {
                  fill: "rgb(14 147 105)",
                }
              }} />
              </Link>
            ))
          }
        </Geographies>
       {/* While hover on a country*/}
        {geo && 
        <Annotation
        subject={geo.geometry.coordinates[0][0]}
        dx={-90}
        dy={-30}
        connectorProps={{
          stroke: "#FF5533",
          strokeWidth: 3,
          strokeLinecap: "round"
        }}
      >
        <text  x="-8" textAnchor="end" alignmentBaseline="middle" fill="#F53">
        {geo.properties.name}
        </text>
      </Annotation>}
        </ZoomableGroup>
      </ComposableMap>
    </div>
  )
}

export default Main