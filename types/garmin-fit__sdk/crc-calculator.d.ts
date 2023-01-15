/**
 * Use this class to check the .FIT file for intergrity
 */
export class CrcCalculator {
    /**
     * Create a new `CrcCalculator` instance
     */
    constructor();

    /**
     * Gets the current state
     */
    get crc(): number;

    /**
     * Computes the CRC value for the given buffer using the current state
     *
     * @param buf Buffer to check
     * @param start Start position in buffer
     * @param end End position in buffer
     */
    addBytes(buf: Uint8Array, start: number, end: number): number;

    /**
     * Creates a new `CrcCalculator` and computes the CRC value for the given buffer
     *
     * @param buf Buffer to check
     * @param start Start position in buffer
     * @param end End position in buffer
     */
    static calculateCRC(buf: Uint8Array, start: number, end: number): number;
}
