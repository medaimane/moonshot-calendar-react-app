export interface LaunchJSON {
  pad: {
    name: string;
    latitude: string;
    longitude: string;
    map_image: string;
  };
  name: string;
  image: string;
}

export interface LaunchesJSON {
  results: LaunchJSON[];
}
