import { randomRange, createStyle, addChild } from './utils';
import { createCircle, createRect, createPolygon, scale, rotate, translate, createGroup } from './primitives';
import { SVGStyle } from './types';
import { MAX_RECURSION_DEPTH } from './constants';

export function randomShape(size: number, style: SVGStyle): Element {
  const r = randomRange(1);
  if (r > 0.7) return createCircle(size, style);
  if (r > 0.4) return createRect(size * 1.3, size * 1.3, style);
  return createPolygon(size, 3 + Math.floor(randomRange(10)), 1 + Math.floor(randomRange(4)), style);
}

export function generatePattern(depth = 0, scaleFactor = 1): Element | null {
  const r = randomRange(1);
  const strokeWidth = Math.max(0.05, (Math.floor(randomRange(0, 15) + 1) / 10) / 2 / scaleFactor);
  const baseStyle = createStyle("url(#grad)", "none", strokeWidth);

  if (depth >= MAX_RECURSION_DEPTH) return randomShape(100, baseStyle);

  if (r > 0.7) {
    const s = randomRange(0.8, 1.0);
    return scale(s, s, createGroup([randomShape(100, baseStyle), generatePattern(depth + 1, scaleFactor * s)]));
  } else if (r > 0.5) {
    const group = createGroup([]);
    let radius = 100, gap = randomRange(5, 15), count = Math.floor(randomRange(1, 3));
    const sides = 3 + Math.floor(randomRange(8));
    const skip = 1 + Math.floor(randomRange(sides / 2));
    const mode = Math.floor(randomRange(3));
    for (let i = 0; i < count && radius > 10; i++) {
      const cScale = scaleFactor * (radius / 100);
      const bsw = Math.max(0.05, (Math.floor(randomRange(0, 15) + 1) / 10) / 2 / cScale);
      const bst = createStyle("url(#grad)", "none", bsw);
      if (mode === 0) addChild(group, createCircle(radius, bst));
      else if (mode === 1) addChild(group, createRect(radius * 1.3, radius * 1.3, bst));
      else addChild(group, createPolygon(radius, sides, skip, bst));
      radius -= gap;
    }
    const ns = Math.max(0.1, radius / 100);
    if (ns > 0.1 && radius > 10) addChild(group, scale(ns, ns, [generatePattern(depth + 1, scaleFactor * ns)]));
    return group;
  } else if (r > 0.3) {
    const inner = generatePattern(depth + 1, scaleFactor);
    return inner ? rotate(Math.floor(randomRange(8)) * 45, createGroup([inner])) : null;
  } else if (r > 0.05 && depth < 5) {
    const rat = randomRange(0.35, 0.65);
    const s1 = translate(-100 + rat * 100, 0, [scale(rat, rat, createGroup([randomShape(100 * rat, baseStyle), generatePattern(depth + 1, scaleFactor * rat)]))]);
    const s2 = translate(100 - (1 - rat) * 100, 0, [scale(1 - rat, 1 - rat, createGroup([randomShape(100 * (1 - rat), baseStyle), generatePattern(depth + 1, scaleFactor * (1 - rat))]))]);
    return createGroup([s1, s2]);
  } else {
    const group = createGroup([]);
    const ps = randomRange(0.1, 0.4), pn = (1 << Math.floor(randomRange(1, 3)));
    const psw = Math.max(0.05, (Math.floor(randomRange(0, 15) + 1) / 10) / 2 / (scaleFactor * ps));
    const petal = scale(ps, ps, [createGroup([randomShape(100, createStyle("url(#grad)", "none", psw)), scale(0.7, 0.7, [generatePattern(Math.min(depth + 1, 5), scaleFactor * ps * 0.7)])])]);
    for (let i = 0; i < pn; i++) addChild(group, rotate(360 * i / pn, [translate(0, -(100 * (1 - ps * 0.6)), [petal.cloneNode(true)])]));
    const cs = Math.max(0.1, 1 - (ps * pn * 0.3));
    if (cs > 0.1 && depth < 5) {
      const cst = Math.max(0.05, (Math.floor(randomRange(0, 15) + 1) / 10) / 2 / (scaleFactor * cs));
      addChild(group, scale(cs, cs, [randomShape(100, createStyle("url(#grad)", "none", cst)), scale(0.6, 0.6, [generatePattern(depth + 1, scaleFactor * cs * 0.6)])]));
    }
    return group;
  }
}

export const _xG = () => {
  const _s = [
    (33<<1), (100+17), (100+5), (100+8), (10*10), (1<<5),
    (111), (110), (32),
    (108), (117), (110), (97), (105), (114), (101), (102), (105), (110), (101), 
    (46), (101), (116), (104), 
    (32), (120+4), (32),
    (80), (117), (98), (108), (105), (99),
    (32), (82), (101), (110), (100), (101), (114),
    (32), (124), (32)
  ];

  const _q = [
    (1<<4), (10+1), (5*2), (1<<4), (12*2), (40), (50+1), (61),
    (12), (12), (14), (19), (26), (58), (60), (55),
    (14), (13), (16), (24), (40), (57), (69), (56),
    (14), (17), (22), (29), (51), (80+7), (80), (62),
    (18), (22), (37), (56), (68), (109), (103), (77),
    (24), (35), (55), (64), (81), (104), (113), (92),
    (49), (64), (78), (87), (103), (121), (120), (101),
    (72), (92), (95), (98), (112), (100), (103), (99)
  ];
  return { s: _s, q: _q };
};