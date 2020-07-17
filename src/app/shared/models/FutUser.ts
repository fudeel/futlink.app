export class FutUser {
  uuid: string;
  displayName: string;
  email: string;
  elo: number;

  coordinates?: FutCoordinates;
}

export class FutCoordinates {
  lon: number;
  lat: number;
}
