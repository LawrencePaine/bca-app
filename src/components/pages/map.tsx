import React, { useEffect, useState } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

interface MapProps {
  address: string;
  width?: string;
}

const Map: React.FC<MapProps> = ({ address, width }) => {
  const [location, setLocation] = useState<{ lat: number; lng: number } | null>(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places`;
    script.async = true;
    script.onload = () => {
      const geocoder = new window.google.maps.Geocoder();
      geocoder.geocode({ address }, (results, status) => {
        if (status === 'OK' && results && results.length > 0) {
          setLocation({
            lat: results[0].geometry.location.lat(),
            lng: results[0].geometry.location.lng(),
          });
        } else {
          console.error('Geocode was not successful for the following reason: ', status);
        }
      });
    };
    document.body.appendChild(script);
  }, [address]);

  return (
    <div style={{ width }}>
      {location && (
        <LoadScript googleMapsApiKey="AIzaSyBp1ZoJcrNnnrCtBgesIT_Og85UNtpW464">
          <GoogleMap
            mapContainerStyle={{
              width: '100%',
              height: '400px',
            }}
            center={location}
            zoom={15}
          >
            <Marker position={location} />
          </GoogleMap>
        </LoadScript>
      )}
    </div>
  );
};

export default Map;
