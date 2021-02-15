
//% weight=100 color=#0fbc11 icon=""
namespace custom {
     let 初期状態: boolean = true;
    let 加速度１: number;
    let 加速度２: number;
    const MOVING_THRESHOLD: number = 25;
     /**
     * micro:bitが動いているときtrueを、止まればfalseを返す。
     */
    //% block="microbitが動いている"
    //% group="その他"
    export function moveing(): boolean {
        if (初期状態) {
            加速度２ = input.acceleration(Dimension.Strength)
            初期状態 = false;
            return false;
        }
        加速度１ = 加速度２;
        加速度２ = input.acceleration(Dimension.Strength);

        if (Math.abs((加速度２ - 加速度１)) > MOVING_THRESHOLD) {
            return true;
        }
        return false;
    }
}

     

