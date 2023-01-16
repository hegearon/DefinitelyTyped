import { CrcCalculator, Stream, StreamReadOptions } from 'garmin-fit__sdk';

const bytes = [1, 0x7f, 0xff, 0];
const ab = new ArrayBuffer(bytes.length);
const text = 'sör';
let stream;

stream = Stream.fromByteArray(bytes); // $ExpectType Stream
stream = Stream.fromBuffer(Buffer.of(...bytes)); // $ExpectType Stream
stream = Stream.fromArrayBuffer(ab); // $ExpectType Stream
stream = new Stream(ab); // $ExpectType Stream

stream.length; // $ExpectType number
stream.bytesRead; // $ExpectType number
stream.position; // $ExpectType number

stream.crcCalculator; // $ExpectType CrcCalculator
// @ts-expect-error
stream.crcCalculator = 0;
stream.crcCalculator = new CrcCalculator();

stream.reset(); // $ExpectType void
stream.seek(1); // $ExpectType void
stream.slice(0, 1); // $ExpectType ArrayBuffer
stream.peekByte(); // $ExpectType number

stream.readByte(); // $ExpectType number
stream.readBytes(2); // $ExpectType ArrayBuffer

const opts: StreamReadOptions = {
    endianness: Stream.LITTLE_ENDIAN,
    convertInvalidToNull: false,
};
const opts_null: StreamReadOptions = {
    convertInvalidToNull: true,
};

stream.readUInt8(); // $ExpectType number | number[] | null
stream.readInt8(); // $ExpectType number | number[] | null
stream.readUInt16(opts); // $ExpectType number | number[] | null
stream.readInt16(opts); // $ExpectType number | number[] | null
stream.readUInt32(opts_null); // $ExpectType number | number[] | null
stream.readInt32(opts_null); // $ExpectType number | number[] | null
stream.readUInt64(); // $ExpectType number | number[] | null
stream.readInt64(); // $ExpectType number | number[] | null
stream.readFloat32(); // $ExpectType number | number[] | null
stream.readFloat64(); // $ExpectType number | number[] | null
stream.readString(4); // $ExpectType string | null

stream.readValue(7, 4); // $ExpectType string | number | number[] | null
stream.readValue(1, 1); // $ExpectType string | number | number[] | null
stream.readValue(0x8e, 8); // $ExpectType string | number | number[] | null
