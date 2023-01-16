import { CrcCalculator } from './crc-calculator';

/**
 * Represents a .FIT file stream
 */
export class Stream {
    static LITTLE_ENDIAN: boolean;
    static BIG_ENDIAN: boolean;

    /**
     * Creates a new `Stream` from an array of bytes
     * @param data the array of bytes
     */
    static fromByteArray(data: number[]): Stream;
    /**
     * Creates a new `Stream` from a Node `Buffer` of bytes
     * @param buffer the Node `Buffer` of bytes
     */
    static fromBuffer(buffer: Buffer): Stream;
    /**
     * Creates a new `Stream` from an `ArrayBuffer` of bytes
     * @param arrayBuffer the `ArrayBuffer` of bytes
     */
    static fromArrayBuffer(arrayBuffer: ArrayBuffer): Stream;

    /**
     * Creates a new `Stream` from an `ArrayBuffer` of bytes
     * @param arrayBuffer the `ArrayBuffer` of bytes
     */
    constructor(arrayBuffer: ArrayBuffer);

    /** Length of the internal `ArrayBuffer` */
    get length(): number;
    /** Current position in the buffer */
    get bytesRead(): number;
    /** Current position in the buffer */
    get position(): number;

    /** Get the `CrcCalculator` instance used for integrity check */
    get crcCalculator(): CrcCalculator;
    /** Set the `CrcCalculator` instance used for integrity check */
    set crcCalculator(crcCalculator: CrcCalculator);

    /** Set the position to the beginning of the buffer */
    reset(): void;
    /**
     * Seek to the given position in the buffer
     * @param position the new position
     */
    seek(position: number): void;
    /**
     * Get a slice of to the underlying buffer
     * @param begin start position
     * @param end end position
     */
    slice(begin: number, end: number): ArrayBuffer;
    /**
     * Peek at the next byte in the buffer
     * @returns the next byte as an unsigned integer
     */
    peekByte(): number;

    /**
     * Read the next byte
     * @see readUInt8
     */
    readByte(): number;
    /**
     * Read the specified number of bytes
     * @param size number of bytes to read
     */
    readBytes(size: number): ArrayBuffer;

    /** Read an unsigned 8-bit int value from the stream */
    readUInt8(): number | number[] | null;
    /** Read a signed 8-bit int value from the stream */
    readInt8(): number | number[] | null;
    /** Read an unsigned 16-bit int value from the stream */
    readUInt16(opts?: StreamReadOptions): number | number[] | null;
    /** Read a signed 16-bit int value from the stream */
    readInt16(opts?: StreamReadOptions): number | number[] | null;
    /** Read an unsigned 32-bit int value from the stream */
    readUInt32(opts?: StreamReadOptions): number | number[] | null;
    /** Read a signed 32-bit int value from the stream */
    readInt32(opts?: StreamReadOptions): number | number[] | null;
    /** Read an unsigned 64-bit int value from the stream */
    readUInt64(opts?: StreamReadOptions): number | number[] | null;
    /** Read a signed 64-bit int value from the stream */
    readInt64(opts?: StreamReadOptions): number | number[] | null;
    /** Read a 32-bit float value from the stream */
    readFloat32(opts?: StreamReadOptions): number | number[] | null;
    /** Read a 64-bit float value from the stream */
    readFloat64(opts?: StreamReadOptions): number | number[] | null;
    /**
     * Read an UTF-8 string from the stream
     * @param strlen number of bytes to read
     */
    readString(strlen: number): string | null;

    /**
     * Read a .FIT value from the stream
     * @param baseType .FIT type to read
     * @param size number of bytes to read
     */
    readValue(
        baseType: number,
        size: number,
        { endianness, convertInvalidToNull }?: StreamReadOptions,
    ): string | number | number[] | null;
}

/**
 * Options for the various `read*` functions in {@link Stream}
 */
export interface StreamReadOptions {
    /** Endianness to use (see {@link Stream}) */
    endianness?: boolean;
    /** Convert invalid values (as defined in FIT specifications) to `null` */
    convertInvalidToNull?: boolean;
}
