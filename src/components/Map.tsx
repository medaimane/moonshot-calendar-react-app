import React, {
  Children,
  cloneElement,
  FC,
  isValidElement,
  useEffect,
  useRef,
  useState,
} from 'react';

interface MapProps extends google.maps.MapOptions {
  style: {[key: string]: string};
  onClick?: (e: google.maps.MapMouseEvent) => void;
}

export const Map: FC<MapProps> = ({style, children, ...options}) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<google.maps.Map>();

  useEffect(() => {
    if (mapRef.current && !map) {
      setMap(new window.google.maps.Map(mapRef.current, {}));
    }
  }, [mapRef, map]);

  return (
    <>
      <div ref={mapRef} style={style} />
      {Children.map(children, (child) => {
        if (isValidElement(child)) {
          return cloneElement(child, {map});
        }
      })}
    </>
  );
};
