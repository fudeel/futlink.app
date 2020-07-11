export class FutUser {
  uuid: string;
  displayName: string;
  email: string;
  elo: number;

  coordinates: Coordinates;
}

export class Coordinates {
  lon: number;
  lat: number;
}
