import React, { useState } from 'react';
import { GoogleMap,
    useLoadScript,
    Marker,
    InfoWindow } from '@react-google-maps/api';
import { formatRelative } from 'date-fns';
import mapStyles from "../Components/mapStyles";
import Logo from '../Assets/YangYang-rood.png';

const myApiKey = 'AIzaSyC9H1qptfK7DqcQ7JLQCGp8TlCqAXRdrpA';
const libraries = ["places"];
const mapContainerStyle = {
    width: '100W',
    height: '100vh',
};
const center = {
    lat: 51.477779,
    lng: 5.493370,
};
const options = {
    styles: mapStyles,
    disableDefaultUI: true,
    zoomControl: true,
};


function Contact() {
    const [markers, setMarkers] = useState('');

    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: myApiKey,
        libraries,
    });

    if (loadError) return "Error loading maps";
    if (!isLoaded) return "Loading maps";

    return (
        <div>
            <h1>Yang Yang Sushi store locator {''}
            <span role="img" aria-label="sushi">
                🍣
            </span>
            </h1>
            <GoogleMap
                mapContainerStyle={mapContainerStyle}
                zoom={15}
                center={center}
                options={options}
                onClick={(event) => {
                    setMarkers((current) => [
                        ...current,
                        {
                        lat: event.latLng.lat(),
                        lng: event.latLng.lng(),
                        time: new Date(),
                    },
                    ]);
                }}
            >
                {markers && markers.map((marker) => (
                    <Marker key={ marker && marker.time.toISOString()}
                            position={{lat: marker.lat, lng: marker.lng}}
                            icon={{

                            }}

                    />
                            ))}

            </GoogleMap>
        </div>
    );
}

export default Contact;
