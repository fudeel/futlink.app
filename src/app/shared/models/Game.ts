import {Referee} from "./Referee";

export class Game {
  uuid: string;
  createdByUuid: string;
  players: string[];
  isRanked: boolean;
  referee?: Referee;

}
