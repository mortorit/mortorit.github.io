/* The Latent Wyrm: ~1,800 points "denoise" from Gaussian noise into a dragon (a nod to 3D diffusion). */
(function(){
  const cv = document.getElementById("wyrm"), tl = document.getElementById("tstep");
  const W = 460, H = 300, N_BODY = 1100, N_FAR = 360, N_FIRE = 170;
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const mk = () => { const c = document.createElement("canvas"); c.width = W; c.height = H; return c.getContext("2d"); };
  const bez=(p,t)=>{const u=1-t;return[u*u*u*p[0][0]+3*u*u*t*p[1][0]+3*u*t*t*p[2][0]+t*t*t*p[3][0],u*u*u*p[0][1]+3*u*u*t*p[1][1]+3*u*t*t*p[2][1]+t*t*t*p[3][1]]};
  function tube(g,p,r0,r1){for(let i=0;i<=80;i++){const t=i/80,q=bez(p,t);g.beginPath();g.arc(q[0],q[1],Math.max(.5,r0+(r1-r0)*t),0,7);g.fill();}}
  function poly(g,pts){g.beginPath();pts.forEach((q,i)=>i?g.lineTo(q[0],q[1]):g.moveTo(q[0],q[1]));g.closePath();g.fill();}
  function ell(g,x,y,rx,ry,r){g.beginPath();g.ellipse(x,y,rx,ry,r||0,0,7);g.fill();}
  const WRIST=[262,56], TIPS=[[226,16],[300,6],[356,26],[388,76],[362,128]];
  function drawBody(g){
    g.fillStyle="#000";
    ell(g,258,186,62,31,-.32);
    tube(g,[[222,172],[176,156],[196,98],[156,80]],27,13);
    poly(g,[[170,70],[152,58],[124,60],[96,68],[76,78],[96,86],[108,88],[84,98],[88,106],[120,102],[152,98],[170,86]]);
    poly(g,[[156,66],[194,44],[162,76]]); poly(g,[[146,64],[176,36],[152,72]]);
    // tail
    tube(g,[[306,200],[352,238],[414,252],[438,214]],22,6);
    tube(g,[[438,214],[452,180],[420,166],[418,188]],6,2.2);
    poly(g,[[410,190],[420,178],[428,196]]);
    // hind leg
    ell(g,300,206,28,22,.3);
    tube(g,[[306,214],[326,240],[312,256],[302,262]],13,7);
    poly(g,[[286,258],[312,256],[318,268],[282,268]]);
    // standing foreleg
    tube(g,[[244,204],[240,226],[238,244],[236,258]],11,7);
    poly(g,[[222,256],[244,254],[248,266],[218,266]]);
    // raised foreleg
    tube(g,[[222,196],[206,214],[194,214],[180,200]],11,6);
    poly(g,[[176,192],[170,196],[182,206],[186,198]]);
    // wing membrane with concave scallops
    // spines along the top of the neck
    const NECK=[[222,172],[176,156],[196,98],[156,80]];
    for(let i=0;i<7;i++){const t=.12+i*.12,a=bez(NECK,t),b=bez(NECK,t+.01),dx=b[0]-a[0],dy=b[1]-a[1],L=Math.hypot(dx,dy),nx=-dy/L,ny=dx/L,r=27+(13-27)*t;
      const bx=a[0]+nx*(r-3),by=a[1]+ny*(r-3),h=9-i*.6;poly(g,[[bx-dx/L*5,by-dy/L*5],[bx+nx*h-dx/L*3,by+ny*h-dy/L*3],[bx+dx/L*5,by+dy/L*5]]);}
  }
  function scallopWing(g,lead,wrist,tips,back,k){
    g.beginPath();g.moveTo(...lead[0]);lead.slice(1).forEach(q=>g.lineTo(...q));g.lineTo(...wrist);g.lineTo(...tips[0]);
    for(let i=1;i<tips.length;i++){const a=tips[i-1],b=tips[i],m=[(a[0]+b[0])/2,(a[1]+b[1])/2];g.quadraticCurveTo(m[0]+(wrist[0]-m[0])*k,m[1]+(wrist[1]-m[1])*k,b[0],b[1]);}
    const a=tips[tips.length-1],b=back[0],m=[(a[0]+b[0])/2,(a[1]+b[1])/2];g.quadraticCurveTo(m[0]+(wrist[0]-m[0])*.25,m[1]+(wrist[1]-m[1])*.25,b[0],b[1]);
    back.slice(1).forEach(q=>g.lineTo(...q));g.closePath();g.fill();
  }
  const FWRIST=[198,62],FTIPS=[[164,24],[204,6],[240,32]];
  function drawFar(g){
    g.fillStyle="#000";
    scallopWing(g,[[226,168],[236,112]],WRIST,TIPS,[[296,166],[276,176]],.38);
  }
  // bones: polylines
  const BONES=[[[232,166],[238,112],WRIST],...TIPS.map(t=>[WRIST,t])];
  
  function pool(g, edgeBoost){
    const d = g.getImageData(0,0,W,H).data, inside=[], edge=[];
    const A = (x,y) => (x<0||y<0||x>=W||y>=H) ? 0 : d[(y*W+x)*4+3];
    for(let y=0;y<H;y++) for(let x=0;x<W;x++){
      if (A(x,y) < 128) continue;
      if (A(x-2,y)<128||A(x+2,y)<128||A(x,y-2)<128||A(x,y+2)<128) edge.push([x,y]); else inside.push([x,y]);
    }
    return {inside, edge, edgeBoost};
  }
  const gb = mk(); drawBody(gb);
  const gf = mk(); drawFar(gf);
  // the wing membrane is its own (teal) layer, minus whatever the body covers
  gf.globalCompositeOperation = "destination-out"; gf.drawImage(gb.canvas,0,0);
  const P_BODY = pool(gb,.5), P_FAR = pool(gf,.55);

  const gauss = () => { let u=0,v=0; while(!u)u=Math.random(); while(!v)v=Math.random(); return Math.sqrt(-2*Math.log(u))*Math.cos(2*Math.PI*v); };
  const pick = a => a[(Math.random()*a.length)|0];
  let pts = [];
  function sample(){
    pts = [];
    const take = (P, n, layer) => { for(let i=0;i<n;i++){ const q = pick(Math.random()<P.edgeBoost ? P.edge : P.inside);
      pts.push({x0:q[0]+Math.random()-.5, y0:q[1]+Math.random()-.5, ex:gauss(), ey:gauss(), L:layer, r:1.05+Math.random()*1}); } };
    take(P_BODY, N_BODY, 0); take(P_FAR, N_FAR, 1);
    // wing bones: points strung along the finger lines so the wings read as wings
    BONES.forEach((line, li) => { for(let i=0;i<30;i++){ const seg = (Math.random()*(line.length-1))|0, t = Math.random(), A = line[seg], B = line[seg+1];
      pts.push({x0:A[0]+(B[0]-A[0])*t, y0:A[1]+(B[1]-A[1])*t, ex:gauss(), ey:gauss(), L: 0, r:1.3}); } });
    // fire: a widening cone from the jaw, drifting down-left
    for(let i=0;i<N_FIRE;i++){
      const t = Math.pow(Math.random(), .8), ang = 2.85 + gauss()*.16*(.3+t);
      const len = 8 + t*82;
      pts.push({x0:80 + Math.cos(ang)*len, y0:94 + Math.sin(ang)*len*.85 + t*t*34, ex:gauss(), ey:gauss(), L:2, r:.7+ (1-t)*1.4, t});
    }
    // eye
    pts.push({x0:136,y0:72,ex:gauss(),ey:gauss(),L:3,r:3});
  }
  const ctx = cv.getContext("2d");
  function fit(){
    const dpr = Math.min(2, devicePixelRatio||1), w = cv.clientWidth || 460;
    cv.width = Math.round(w*dpr); cv.height = Math.round(w*H/W*dpr);
    ctx.setTransform(cv.width/W,0,0,cv.height/H,0,0);
  }
  const COL = ["rgba(29,27,24,.88)","rgba(30,90,85,.75)",null,"#A3361B","rgba(238,231,214,.95)"];
  function draw(ab){
    ctx.clearRect(0,0,W,H);
    const a = Math.sqrt(ab), s = Math.sqrt(1-ab), jit = s*.18;
    for(const p of pts){
      const x = a*p.x0 + s*(W/2 + (p.ex + gauss()*jit)*W*.3);
      const y = a*p.y0 + s*(H/2 + (p.ey + gauss()*jit)*H*.32);
      ctx.fillStyle = p.L===2 ? `rgba(163,54,27,${.35+.55*(1-p.t)})` : COL[p.L];
      ctx.beginPath(); ctx.arc(x,y,p.r*(p.L===1?.9:1),0,6.283); ctx.fill();
    }
  }
  const T = 1000, FRAMES = 120;
  const abar = t => { const f = Math.cos(((t/T)+.008)/1.008*Math.PI/2); return Math.min(1, f*f/0.99997); };
  let raf = 0;
  function run(){
    cancelAnimationFrame(raf); sample();
    if (reduce){ draw(1); tl.textContent = "t = 0 · sampled"; return; }
    let k = 0;
    const step = () => {
      const t = Math.round(T*(1 - k/FRAMES));
      draw(k>=FRAMES ? 1 : abar(t));
      tl.textContent = k>=FRAMES ? "t = 0 · click to resample" : "denoising · t = " + t;
      if (k++ < FRAMES) raf = requestAnimationFrame(step);
    };
    step();
  }
  fit(); run();
  cv.addEventListener("click", run);
  let rt; addEventListener("resize", () => { clearTimeout(rt); rt = setTimeout(() => { fit(); draw(1); }, 120); });
  window.__wyrmDraw = () => { fit(); draw(1); };
  addEventListener("beforeprint", () => window.__wyrmDraw());
})();
