import React, { useState, useCallback, useRef } from 'react';
import usePlacesAutocomplete, {
    getGeocode,
    getLatLng,
}
 from "use-places-autocomplete";
import { GoogleMap,
    useLoadScript,
    Marker,
    InfoWindow } from '@react-google-maps/api';
import { formatRelative } from 'date-fns';
import mapStyles from "../Components/mapStyles";
import Logo from '../Assets/YangYang-rood.png';
import '../Assets/compass.svg';

import {
    Combobox,
    ComboboxInput,
    ComboboxPopover,
    ComboboxList,
    ComboboxOption,
    ComboboxOptionText,
} from "@reach/combobox";
import "@reach/combobox/styles.css";

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

function opening() {
    return(
        <div className="opening">
            <p>Maandag:        12.00-21.00</p>
            <p>Dinsdag:        12.00-21.00</p>
            <p>Woensdag:       12.00-21.00</p>
            <p>Donderdag:      12.00-21.00</p>
            <p>Vrijdag:        12.00-21.00</p>
            <p>Zaterdag:       12.00-21.00</p>
            <p>Zondag:         14.00-21.00</p>
        </div>
    );
} opening();


function Contact() {
    const [markers, setMarkers] = useState([]);
    const [selected, setSelected] = useState(null);
    const onMapClick = useCallback((event) => {
        setMarkers((current) => [
            ...current,
            {
                lat: event.latLng.lat(),
                lng: event.latLng.lng(),
                time: new Date(),
            },
        ]);
    },[ ]);

    const mapRef = useRef();
    const onMapLoad = useCallback((map) => {
        mapRef.current = map;
    },[]);

    const panTo = useCallback(({lat, lng}) => {
        mapRef.current.panTo({lat, lng});
        mapRef.current.setZoom(14);
    }, []);
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
            <Locate panTo={panTo}/>
            <Search panTo={panTo}/>
            <GoogleMap
                mapContainerStyle={mapContainerStyle}
                zoom={15}
                center={center}
                options={options}
                onClick={onMapClick}
                onLoad={onMapLoad}
            >
                {markers && markers.map((marker) => (
                    <Marker key={ marker && marker.time.toISOString()}
                            position={{lat: marker.lat, lng: marker.lng}}
                            icon={{
                                url: Logo,
                                scaledSize: new window.google.maps.Size(30,30),
                                origin: new window.google.maps.Point(0,0),
                                anchor: new window.google.maps.Point(15,15)
                            }}
                            onClick={() => {
                                setSelected(marker);
                            }}
                    />
                            ))}
                {selected ? (
                    <InfoWindow
                        position={{lat: selected.lat, lng: selected.lng }}
                        onCloseClick={() => {
                            setSelected(null);
                        }}
                    >
                    <div>
                        <p>Bestel nu uw sushi {''}
                        <span className={"Heart"} role="img" aria-label="rood-hart" >
                            ❤
                        </span>
                        </p>
                    </div>

                </InfoWindow>
                ) : null}

            </GoogleMap>
        </div>
    );
}

function Locate({panTo}) {
    return (
        <button
            className="locate"
            onClick={() => {
                navigator.geolocation.getCurrentPosition(
                    (position) => {
                        panTo({
                            lat: position.coords.latitude,
                            lng: position.coords.longitude,
                        });
                    },
                    () => null
                );
            }}
        ><img src="compass.svg" alt="compass" />
        </button>
    );
}

function Search({panTo}) {
    const {ready, value,
        suggestions: { status, data },
        setValue,
        clearSuggestions,
    } = usePlacesAutocomplete({
        requestOptions: {
            location: {lat: () => 51.477779, lng: () =>  5.493370},
            radius: 200 * 1000,
        },
    });
    const handleInput = (e) => {
        setValue(e.target.value);
    };


    return(
        <div className="Search">
        <Combobox onSelect={async (address) => {
            setValue(address, false);
            clearSuggestions();
            try {
                const result = await getGeocode({address});
                    const { lat, lng } = await getLatLng(result[0]);
                    console.log(lat, lng);
                    panTo({lat, lng});
            } catch (e) {
                console.error("Woops, niet gevonden");
            }
        console.log(address);
    }}
    >
        <ComboboxInput
            value={value}
            onChange={handleInput}
            disabled={!ready}
            placeholder="Jouw adres"/>
            <ComboboxPopover>
                <ComboboxList>
                    {status === "OK" &&
                    data.map(({ id, description }) => (
                        <ComboboxOption key={id} value={description} />
                    ))}
                </ComboboxList>
            </ComboboxPopover>
    </Combobox>
       </div>
    );
}

export default Contact;
