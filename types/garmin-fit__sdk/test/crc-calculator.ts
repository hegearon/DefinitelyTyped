import { CrcCalculator } from 'garmin-fit__sdk';

const calc = new CrcCalculator(); // $ExpectType CrcCalculator
calc.crc; // $ExpectType number
calc.addBytes(new Uint8Array([0, 0]), 0, 1); // $ExpectType number

CrcCalculator.calculateCRC(new Uint8Array([0, 0]), 0, 1); // $ExpectType number
