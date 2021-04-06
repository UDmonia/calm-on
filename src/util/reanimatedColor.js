/* CREDIT: code snipet from wcandillon's v1 react-redash library */
import Animated from "react-native-reanimated";
import { mix } from "./reanimatedAnimations";
import { clamp, fract } from "./reanimatedMath";
const { add, multiply, abs, round, sub, proc, color, greaterThan, cond, } = Animated;
export const hsv2rgb = (h, s, v) => {
    // vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
    const K = {
        x: 1,
        y: 2 / 3,
        z: 1 / 3,
        w: 3,
    };
    // vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
    const p = {
        x: abs(sub(multiply(fract(add(h, K.x)), 6), K.w)),
        y: abs(sub(multiply(fract(add(h, K.y)), 6), K.w)),
        z: abs(sub(multiply(fract(add(h, K.z)), 6), K.w)),
    };
    // return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
    const rgb = {
        x: multiply(v, mix(s, K.x, clamp(sub(p.x, K.x), 0, 1))),
        y: multiply(v, mix(s, K.x, clamp(sub(p.y, K.x), 0, 1))),
        z: multiply(v, mix(s, K.x, clamp(sub(p.z, K.x), 0, 1))),
    };
    return {
        r: round(multiply(rgb.x, 255)),
        g: round(multiply(rgb.y, 255)),
        b: round(multiply(rgb.z, 255)),
    };
};

export const hsv2color = proc((h, s, v) => {
    const { r, g, b } = hsv2rgb(h, s, v);
    return color(r, g, b);
});