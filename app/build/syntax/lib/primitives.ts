import { createSVGElement, applyStyle, addChild } from './utils';
import { SVGStyle } from './types';

export const createCircle = (r: number, style?: SVGStyle): Element => {
  const el = createSVGElement("circle");
  el.setAttribute("r", r.toString());
  applyStyle(el, style);
  return el;
};

export const createRect = (w: number, h: number, style?: SVGStyle): Element => {
  const el = createSVGElement("rect");
  el.setAttribute("x", (-w / 2).toString());
  el.setAttribute("y", (-h / 2).toString());
  el.setAttribute("width", w.toString());
  el.setAttribute("height", h.toString());
  applyStyle(el, style);
  return el;
};

export const createPolygon = (radius: number, sides: number, step: number, style?: SVGStyle): Element => {
  const el = createSVGElement("polygon");
  const points: string[] = [];
  let currentStep = 0;
  
  const validSides = sides <= 0 ? 3 : sides;
  const validStep = step <= 0 ? 1 : step;

  for (let i = 0; i < validSides && i < 100; i++) {
    const x = radius * Math.cos(Math.PI * 2 * currentStep / validSides);
    const y = radius * Math.sin(Math.PI * 2 * currentStep / validSides);
    points.push(`${x},${y}`);
    currentStep = (currentStep + validStep) % validSides;
  }
  
  el.setAttribute("points", points.join(" "));
  applyStyle(el, style);
  return el;
};

export const createGroup = (children: any) => addChild(createSVGElement("g"), children);

const withTransform = (transformAttr: string, children: any): Element => {
  const group = createSVGElement("g");
  group.setAttribute("transform", transformAttr);
  return addChild(group, children);
};

export const scale = (x: number, y: number, children: any) => withTransform(`scale(${x},${y})`, children);
export const rotate = (deg: number, children: any) => withTransform(`rotate(${deg})`, children);
export const translate = (x: number, y: number, children: any) => withTransform(`translate(${x},${y})`, children);