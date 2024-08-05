interface CounterParams {
  startValue?: number,
  maxValue: number,
  speed?: number,
  countSize?: number,
  index?: number,
  callBack?: (v: number, i?: number) => void
}

export function counter({
  startValue = 0,
  maxValue,
  speed = 80,
  countSize = 1,
  index,
  callBack = () => {}
}: CounterParams) {

  setTimeout(() => {
    callBack(startValue, index);
    function loop(value: number) {

      const isCritical = value >= maxValue

      setTimeout(() => {

        callBack(isCritical ? maxValue : value, index);

        if (isCritical) return;

        loop(value + countSize);

      }, speed)
    };
    
    loop(startValue)
  }, 0)

}