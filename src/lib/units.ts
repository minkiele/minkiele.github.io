export namespace Speed {

    const MS_KMH_RATIO = 3.6;

    type Seconds = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 |
        10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 |
        20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 |
        30 | 31 | 32 | 33 | 34 | 35 | 36 | 37 | 38 | 39 |
        40 | 41 | 42 | 43 | 44 | 45 | 46 | 47 | 48 | 49 |
        50 | 51 | 52 | 53 | 54 | 55 | 56 | 57 | 58 | 59;

    type MinutesSeconds = [number, Seconds];
    type Speed = number;

    const PARSE_REGEX: RegExp = /(?:(\d+)')?(?:([0-5]?\d(?:\.\d+)?)")?/;

    export function parseMskm(input: string): MinutesSeconds {
        const matches = input.match(PARSE_REGEX);
        if (matches !== null) {
            const minutes: number = parseInt(`0${matches[1]}`, 10);
            const seconds: Seconds = parseInt(`0${matches[2]}`, 10) as Seconds;
            return [minutes, seconds];
        }
        throw new Error('Cannot parse timing');
    }

    export function kmhToMs(kmh: Speed): Speed {
        return kmh / MS_KMH_RATIO;
    }

    export function msToKmh(ms: Speed): Speed {
        return ms * MS_KMH_RATIO;
    }

    export function mskmToMs(mskm: MinutesSeconds): Speed {
        const [minutes, seconds]: [number, number] = mskm;
        return 1000 / (minutes * 60 + seconds);
    }

    export function msToMskm(ms: Speed): MinutesSeconds {
        const skm: number = Math.floor(1000 / ms);
        const minutes: number = Math.floor(skm / 60);
        const seconds: Seconds = skm - minutes * 60 as Seconds;
        return [minutes, seconds];
    }

    export function mskmToString(mskm: MinutesSeconds): string {
        const [minutes, seconds]: [number, number] = mskm;
        return `${minutes}'${seconds}"`;
    }

    export function msToString(ms: Speed, decimals = 1): string {
        const pow: number = Math.pow(10, decimals);
        const cutSpeed: Speed = Math.floor(ms * pow) / pow;
        return `${cutSpeed}m/s`;
    }

    export function kmhToString(kmh: Speed, decimals = 1): string {
        const pow: number = Math.pow(10, decimals);
        const cutSpeed: Speed = Math.floor(kmh * pow) / pow;
        return `${cutSpeed}km/h`;
    }
}

console.log(Speed.kmhToString(Speed.msToKmh(Speed.mskmToMs(Speed.parseMskm(`4'50"`)))));
console.log(Speed.mskmToString(Speed.msToMskm(Speed.kmhToMs(22.3))));
console.log(Speed.parseMskm('50"'));
console.log(Speed.parseMskm('66\'50"'));
