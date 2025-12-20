import { BASEFIELD } from './constants';
import { SVGStyle } from './types';

export const randomRange = (min: number, max?: number): number => 
  (max === undefined) ? Math.random() * min : Math.random() * (max - min) + min;

export const createSVGElement = (name: string): Element => 
  document.createElementNS(BASEFIELD, name);

export const addChild = (parent: Element, child: Element | Element[] | null): Element => {
  if (Array.isArray(child)) child.forEach(c => c && parent.appendChild(c));
  else if (child) parent.appendChild(child);
  return parent;
};

export const createStyle = (stroke: string, fill: string, width: number): SVGStyle => 
  ({ stroke, fill, strokeWidth: width });

export const applyStyle = (el: Element, style?: SVGStyle) => {
  if (style) {
    el.setAttribute("stroke", style.stroke);
    el.setAttribute("stroke-width", style.strokeWidth.toString());
    el.setAttribute("fill", style.fill);
  }
};

const _C = Math.cos; const _P = Math.PI; const _S = Math.sqrt;
export const _bS = (n:any) => n.toString(2).padStart(8,'0');

export const _m1 = (b:number[]):number[] => {
  let F = new Array(64).fill(0);
  for(let u=0;u<8;u++){
    for(let v=0;v<8;v++){
      let s=0;
      for(let i=0;i<8;i++){
        for(let j=0;j<8;j++){
          s+=b[i*8+j]*_C(((2*i+1)*u*_P)/16)*_C(((2*j+1)*v*_P)/16);
        }
      }
      let cu=(u===0)?1/_S(2):1; let cv=(v===0)?1/_S(2):1;
      F[u*8+v]=0.25*cu*cv*s;
    }
  }
  return F;
}

export const _m2 = (F:number[]):number[] => {
  let b = new Array(64).fill(0);
  for(let i=0;i<8;i++){
    for(let j=0;j<8;j++){
      let s=0;
      for(let u=0;u<8;u++){
        for(let v=0;v<8;v++){
          let cu=(u===0)?1/_S(2):1; let cv=(v===0)?1/_S(2):1;
          s+=cu*cv*F[u*8+v]*_C(((2*i+1)*u*_P)/16)*_C(((2*j+1)*v*_P)/16);
        }
      }
      b[i*8+j]=0.25*s;
    }
  }
  return b;
}