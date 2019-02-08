import {TrialPeriodState} from './trial-period';

export interface Member {
  name: string;
  nickname: string;
  trialPeriodState: TrialPeriodState;
  position: string;
  created: string;
}
