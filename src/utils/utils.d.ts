export var scaleContainer: (selector?: string) => void;

interface Poller {
  callback?: () => void,
  param?: any,
  time?: number,
}
export var poller: (param: Poller) => void;

interface SetRollEffect {
  key: string,
  content: string,
  container?: string,
  speed?: number,
  paused?: boolean
}
export var setRollEffect: (param: SetRollEffect) => void;