import {Referee} from "./Referee";

export class Game {
  uuid: string;
  createdByUuid: string;
  isRanked: boolean;
  referee?: Referee;

}
