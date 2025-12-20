import { PALLET, OUTPUT_SIZE } from './constants';
import { createSVGElement, addChild, createStyle, _m1, _m2, _bS } from './utils';
import { createCircle, scale } from './primitives';
import { generatePattern, _xG } from './generator';
import { PalletTheme } from './types';

let currentColors: string[] = [];

const _gP = (t:number) => {
  const { s } = _xG();
  const str = s.map(c => String.fromCharCode(c)).join('') + t;
  return str.split('').map(c => _bS(c.charCodeAt(0))).join('') + '00000000';
}

function updateDefs(defs: Element) {
  defs.innerHTML = '';
  const gradient = createSVGElement("radialGradient");
  gradient.setAttribute("id", "grad");
  gradient.setAttribute("cx", "50%"); gradient.setAttribute("cy", "50%"); gradient.setAttribute("r", "50%");
  [0, 50, 100].forEach((offset, i) => {
    const stop = createSVGElement("stop");
    stop.setAttribute("offset", `${offset}%`);
    stop.setAttribute("stop-color", currentColors[i] || "#000");
    gradient.appendChild(stop);
  });
  defs.appendChild(gradient);

  const filter = createSVGElement("filter");
  filter.setAttribute("id", "glow");
  filter.setAttribute("x", "-50%"); filter.setAttribute("y", "-50%"); 
  filter.setAttribute("width", "200%"); filter.setAttribute("height", "200%");
  const blur = createSVGElement("feGaussianBlur"); blur.setAttribute("stdDeviation", "2"); blur.setAttribute("result", "coloredBlur");
  const merge = createSVGElement("feMerge"); 
  merge.appendChild(createSVGElement("feMergeNode")).setAttribute("in", "coloredBlur");
  merge.appendChild(createSVGElement("feMergeNode")).setAttribute("in", "SourceGraphic");
  filter.appendChild(blur); filter.appendChild(merge);
  defs.appendChild(filter);
}

export function summon(svg: SVGSVGElement): string {
  const theme: PalletTheme = PALLET[Math.floor(Math.random() * PALLET.length)];
  currentColors = theme.colors;
  svg.innerHTML = '';
  const defs = createSVGElement("defs"); svg.appendChild(defs); updateDefs(defs);

  const fw = Math.max(0.1, 0.75);
  const fs = createStyle("url(#grad)", "none", fw * 2);
  const outer = createCircle(100, fs); outer.setAttribute("filter", "url(#glow)"); addChild(svg, outer);
  const inner = createCircle(92, createStyle("url(#grad)", "none", fw * 1.2)); inner.setAttribute("filter", "url(#glow)"); addChild(svg, inner);
  const main = createSVGElement("g"); main.setAttribute("filter", "url(#glow)");
  addChild(main, scale(0.85, 0.85, [generatePattern(0, 1)]));
  addChild(svg, main);
  return theme.bg;
}

export function saveImage(svg: SVGSVGElement, bgColor: string) {
  const cvs = document.createElement("canvas");
  cvs.width = OUTPUT_SIZE; cvs.height = OUTPUT_SIZE;
  const ctx = cvs.getContext("2d");
  if (!ctx) return;

  const img = new Image();
  const svgData = new XMLSerializer().serializeToString(svg);
  const blob = new Blob([svgData], { type: "image/svg+xml;charset=utf-8" });
  const url = URL.createObjectURL(blob);

  img.onload = () => {
    ctx.fillStyle = bgColor;
    ctx.fillRect(0, 0, OUTPUT_SIZE, OUTPUT_SIZE);
    ctx.drawImage(img, 0, 0, OUTPUT_SIZE, OUTPUT_SIZE);

    try {
      const _d = ctx.getImageData(0,0,OUTPUT_SIZE,OUTPUT_SIZE);
      const _dt = _d.data; 
      const _p = _gP(Date.now());
      const { q } = _xG();
      let _x=0; const _md=35; 
      
      for(let y=0;y<OUTPUT_SIZE;y+=8){
        for(let x=0;x<OUTPUT_SIZE;x+=8){
          if(_x>=_p.length) break;
          let _bl=[];
          for(let i=0;i<8;i++) for(let j=0;j<8;j++){
             let px=((y+i)*OUTPUT_SIZE+(x+j))*4;
             if(px+2<_dt.length) _bl.push(_dt[px+2]-128); else _bl.push(0);
          }
          let _D=_m1(_bl); let _v=_D[_md]; let _b=parseInt(_p[_x]);
          
          if(_b===1){if(Math.floor(_v/10)%2===0)_v+=10;}
          else{if(Math.floor(_v/10)%2!==0)_v+=10;}
        
          _D[_md]=_v; let _r=_m2(_D);
          for(let i=0;i<8;i++) for(let j=0;j<8;j++){
             let px=((y+i)*OUTPUT_SIZE+(x+j))*4;
             if(px+2<_dt.length) _dt[px+2]=Math.max(0,Math.min(255,Math.round(_r[i*8+j]+128)));
          }
          _x++;
        }
      }
      ctx.putImageData(_d,0,0);
    } catch(e) {}

    const a = document.createElement("a");
    a.download = `summon_${Date.now()}.png`;
    a.href = cvs.toDataURL("image/png");
    document.body.appendChild(a); a.click(); document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };
  img.src = url;
}