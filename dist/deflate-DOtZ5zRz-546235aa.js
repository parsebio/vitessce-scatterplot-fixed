import { i as inflate_1 } from "./pako.esm-SxljTded-6ec54c8c.js";
import { B as BaseDecoder } from "./index-3cb3566b.js";
import "react";
import "@vitessce/vit-s";
import "react-dom";
class DeflateDecoder extends BaseDecoder {
  decodeBlock(buffer) {
    return inflate_1(new Uint8Array(buffer)).buffer;
  }
}
export {
  DeflateDecoder as default
};
