/* Kariye v2.4 — tarama boşluklarını doldurma (Doğancan'ın fotoğrafları + taramanın kendi dokusu)
   1) Parekklesion kubbesi: taramada kasnak var, kubbe kapağı yok. Kapak yarım küre olarak kurulur ve
      IMG_5713 (aşağıdan dik çekim) perspektifle kaplanır; pencere dizilimi taramayla eşlenmiştir (59°, aynasız).
   2) Yalın kabuğun duvar/zemin/tonoz yüzeyleri taramadan kesilmiş tekrarlı dokularla kaplanır. */
window.KariyePatch=(function(){
  const DOME={cx:1.958,cz:9.724,rimY:3.22,a:2.27,H:2.0,     // kapak: kenar yarıçapı, yükseklik (m)
    img:{cx:512,cy:512,s:1024/1120,rRim:515,rot:59*Math.PI/180,hCam:-2.3}};
  function dome(THREE,parent,url,onDone){
    const NA=64,NR=18,pos=[],uv=[],idx=[];
    const D=DOME,I=D.img,fp=I.rRim*(D.rimY-I.hCam)/D.a;     // fotoğraf odak uzaklığı (px), kenar r=515 px'e düşer
    for(let j=0;j<=NR;j++){const t=j/NR,ph=t*Math.PI/2,rho=D.a*Math.cos(ph),y=D.rimY+D.H*Math.sin(ph);
      for(let i=0;i<=NA;i++){const az=i/NA*Math.PI*2,dx=rho*Math.cos(az),dz=rho*Math.sin(az);
        pos.push(D.cx+dx,y,D.cz+dz);
        const th=Math.atan2(dz,-dx)+I.rot, rp=fp*rho/(y-I.hCam);   // taramadaki aşağıdan görüntü açısı → fotoğraf açısı
        const px=I.cx+rp*Math.cos(th)*I.s, py=I.cy+rp*Math.sin(th)*I.s;
        uv.push(px/1024,1-py/1024);}}
    for(let j=0;j<NR;j++)for(let i=0;i<NA;i++){const a=j*(NA+1)+i,b=a+NA+1;idx.push(a,b,a+1,a+1,b,b+1);}
    const g=new THREE.BufferGeometry();g.setAttribute('position',new THREE.Float32BufferAttribute(pos,3));
    g.setAttribute('uv',new THREE.Float32BufferAttribute(uv,2));g.setIndex(idx);g.computeBoundingSphere();
    const tex=new THREE.TextureLoader().load(url,t=>{onDone&&onDone();});
    if(THREE.sRGBEncoding!==undefined)tex.encoding=THREE.sRGBEncoding;
    tex.anisotropy=4;
    const m=new THREE.Mesh(g,new THREE.MeshBasicMaterial({map:tex,color:new THREE.Color(1.22,1.22,1.22),side:THREE.DoubleSide}));m.name='kariyeDomeCap';m.frustumCulled=false;
    parent.add(m);return m;}
  return {dome,DOME};
})();

/* ---------- 2) yalın kabuğa doku: taramanın göründüğü yüzeylere uyan, kesintisiz tekrar eden desenler ---------- */
window.KariyePatch.texShell=(function(){
  let seed=7;const R=()=>((seed=(seed*16807)%2147483647)/2147483647);
  const hex=(c)=>{const n=parseInt(c.slice(1),16);return[(n>>16)&255,(n>>8)&255,n&255]};
  const jit=(rgb,a)=>{const k=1+(R()-0.5)*a;return`rgb(${rgb.map(v=>Math.max(0,Math.min(255,v*k+(R()-0.5)*a*40))|0).join(',')})`};
  function cnv(w,h,draw){const c=document.createElement('canvas');c.width=w;c.height=h;const x=c.getContext('2d',{willReadFrequently:true});draw(x,w,h);return c;}
  function grain(x,w,h,amt){const d=x.getImageData(0,0,w,h),p=d.data;for(let i=0;i<p.length;i+=4){const n=(R()-0.5)*amt;p[i]+=n;p[i+1]+=n;p[i+2]+=n;}x.putImageData(d,0,0);}
  // altıgen taş döşeme (taramadaki dış narteks zemini); düz kenarlı altıgen, yatay periyot 3s, dikey √3·s
  function hexFloor(){const s=40,W=3*s*4,H=Math.round(Math.sqrt(3)*s*4);
    return cnv(W,H,(x)=>{x.fillStyle='#5e4f45';x.fillRect(0,0,W,H);const base=[[140,122,106],[128,112,98],[148,132,116],[120,104,92]];
      for(let cx=-1;cx<=8;cx++)for(let cy=-1;cy<=9;cy++){const px=cx*1.5*s,py=cy*Math.sqrt(3)*s+((cx&1)?Math.sqrt(3)*s/2:0);
        const col=jit(base[(R()*base.length)|0],0.12);
        for(const ox of[-W,0,W])for(const oy of[-H,0,H]){x.beginPath();for(let k=0;k<6;k++){const a=k*Math.PI/3;x.lineTo(px+ox+(s-2.2)*Math.cos(a),py+oy+(s-2.2)*Math.sin(a));}x.closePath();x.fillStyle=col;x.fill();}}
      grain(x,W,H,18);});}
  // Bizans bantlı duvar: 3 sıra kesme taş + 6 sıra tuğla (1,2 m × 1,2 m), kalın derz
  function masonry(){const W=480,H=480,px=W/1.2;
    return cnv(W,H,(x)=>{x.fillStyle='#a8977f';x.fillRect(0,0,W,H);let y=0;
      for(let r=0;r<3;r++){const ch=0.22*px;let xo=-R()*0.4*px;while(xo<W){const len=(0.35+R()*0.3)*px;const c=jit([160,146,124],0.18);
          for(const o of[-W,0,W]){x.fillStyle=c;x.fillRect(xo+o+2,y+2,len-4,ch-4);}xo+=len;}y+=ch;}
      for(let r=0;r<6;r++){const ch=0.09*px;let xo=(r&1)?-0.15*px:0;while(xo<W){const len=0.30*px;const c=jit([128,82,64],0.2);
          for(const o of[-W,0,W]){x.fillStyle=c;x.fillRect(xo+o+2,y+3,len-4,ch*0.55);}xo+=len;}y+=ch;}
      grain(x,W,H,30);});}
  // parekklesion alt panosu: kırmızı çerçeveli koyu mermer taklidi (1,0 m × 1,6 m)
  function dado(){const W=320,H=512,k=W/1.0;
    return cnv(W,H,(x)=>{x.fillStyle='#8f3a2b';x.fillRect(0,0,W,H);x.fillStyle='#d9c9a8';x.fillRect(0,H-0.12*k,W,0.12*k);
      const px0=0.08*k,py0=0.12*k,pw=W-2*px0,ph=H-0.12*k-py0-0.1*k;x.fillStyle='#46514c';x.fillRect(px0,py0,pw,ph);
      for(let i=0;i<900;i++){x.fillStyle=`rgba(${R()<0.5?'120,135,128':'25,30,28'},${0.10+R()*0.2})`;const r=2+R()*9;x.beginPath();x.arc(px0+R()*pw,py0+R()*ph,r,0,7);x.fill();}
      x.strokeStyle='#e0d2b4';x.lineWidth=3;x.strokeRect(px0+6,py0+6,pw-12,ph-12);grain(x,W,H,16);});}
  // naos: damarlı gri mermer kaplama (1,2 m × 2,4 m, aynalı damar)
  function marble(){const W=320,H=640;
    return cnv(W,H,(x)=>{const g=x.createLinearGradient(0,0,W,H);g.addColorStop(0,'#8e999e');g.addColorStop(0.5,'#a2abaf');g.addColorStop(1,'#87929a');x.fillStyle=g;x.fillRect(0,0,W,H);
      for(let i=0;i<260;i++){x.fillStyle=`rgba(${R()<0.5?'190,198,200':'60,70,78'},${0.04+R()*0.08})`;x.beginPath();x.ellipse(R()*W,R()*H,8+R()*40,4+R()*14,R()*3,0,7);x.fill();}
      x.lineCap='round';for(let v=0;v<12;v++){let px=R()*W,py=R()*H;x.strokeStyle=`rgba(225,230,230,${0.08+R()*0.14})`;x.lineWidth=0.5+R()*1.4;x.beginPath();x.moveTo(px,py);
        for(let k=0;k<10;k++){px+=(R()-0.5)*30;py+=10+R()*30;x.lineTo(px,py);}x.stroke();}
      x.strokeStyle='#5d666b';x.lineWidth=5;x.strokeRect(2,2,W-4,H-4);grain(x,W,H,12);});}
  // parekklesion duvarı (1,0 m × 4,0 m): alt 1,6 m pano, üstü koyu mavi fresko zemini
  function parekWall(){const W=256,H=1024,d=dado();return cnv(W,H,(x)=>{x.fillStyle='#3d4b5c';x.fillRect(0,0,W,H);
      for(let i=0;i<700;i++){x.fillStyle=`rgba(${R()<0.5?'90,105,125':'30,36,46'},${0.06+R()*0.12})`;x.beginPath();x.arc(R()*W,R()*H*0.6,3+R()*14,0,7);x.fill();}
      x.drawImage(d,0,H-H*1.6/4,W,H*1.6/4);x.fillStyle='#b9a27c';x.fillRect(0,H-H*1.6/4-8,W,8);grain(x,W,H,10);});}
  // naos duvarı (1,2 m × 8,0 m): alt 2,6 m aynalı mermer kaplama, silme, üstü sıva
  function naosWall(){const W=256,H=2048,m=marble(),pl=plaster();return cnv(W,H,(x)=>{for(let y=0;y<H;y+=256)x.drawImage(pl,0,y,W,256);
      const mh=H*2.6/8;x.drawImage(m,0,H-mh,W,mh);x.fillStyle='#cfc6b4';x.fillRect(0,H-mh-14,W,14);x.fillStyle='#9d978a';x.fillRect(0,H-mh-16,W,3);});}
  function slabs(){const W=512,H=512;return cnv(W,H,(x)=>{x.fillStyle='#8c8a84';x.fillRect(0,0,W,H);for(let i=0;i<2;i++)for(let j=0;j<2;j++){x.fillStyle=jit([150,148,141],0.08);x.fillRect(i*256+3,j*256+3,250,250);}grain(x,W,H,14);});}
  function plaster(){const W=256,H=256;return cnv(W,H,(x)=>{x.fillStyle='#ddd1bc';x.fillRect(0,0,W,H);for(let i=0;i<500;i++){x.fillStyle=`rgba(150,130,100,${R()*0.06})`;x.beginPath();x.arc(R()*W,R()*H,4+R()*20,0,7);x.fill();}grain(x,W,H,10);});}

  return function texShell(THREE,FP,floorAt){
    const mesh=FP.shell,src=mesh.geometry,idx=src.index.array,P=src.attributes.position.array,n=idx.length;
    const pos=new Float32Array(n*3),uv=new Float32Array(n*2),cl=new Float32Array(n*3),cd=new Float32Array(n*3);
    const L=FP.colLight,Dk=FP.colDark;
    const groups=[[],[],[],[],[],[]];  // 0 zemin,1 duvar,2 sıva,3 pano,4 mermer,5 naos zemini
    const naos=(x,z)=>z<4.0&&(x>-4.6||(x>-5.0&&z>-3.1&&z<-1.1));
    const parek=(x,z)=>z>6.8&&x>-4.4;
    for(let t=0;t<n;t+=3){const a=idx[t]*3,b=idx[t+1]*3,c=idx[t+2]*3;
      const ux=P[b]-P[a],uy=P[b+1]-P[a+1],uz=P[b+2]-P[a+2],vx=P[c]-P[a],vy=P[c+1]-P[a+1],vz=P[c+2]-P[a+2];
      let nx=uy*vz-uz*vy,ny=uz*vx-ux*vz,nz=ux*vy-uy*vx;const nl=Math.hypot(nx,ny,nz)||1;nx/=nl;ny/=nl;nz/=nl;
      const mx=(P[a]+P[b]+P[c])/3,my=(P[a+1]+P[b+1]+P[c+1])/3,mz=(P[a+2]+P[b+2]+P[c+2])/3,fy=floorAt(mx,mz),hh=my-fy,inN=naos(mx,mz);
      let gI;if(Math.abs(ny)>0.7&&hh<0.6)gI=inN?5:0;else if(Math.abs(ny)>0.7)gI=2;else gI=inN?4:(parek(mx,mz)?3:1);
      let tx=-nz,tz=nx;const tl=Math.hypot(tx,tz)||1;tx/=tl;tz/=tl;
      for(let k=0;k<3;k++){const vi=idx[t+k],o=(t+k)*3,q=vi*3,x=P[q],y=P[q+1],z=P[q+2];
        pos[o]=x;pos[o+1]=y;pos[o+2]=z;
        const changed=Math.abs(Dk[q]-L[q])+Math.abs(Dk[q+1]-L[q+1])>0.01;
        const K=gI===2?0.82:0.72;cl[o]=cl[o+1]=cl[o+2]=K; cd[o]=cd[o+1]=cd[o+2]=K*(changed?0.42:1.0);   // taramanın sahne parlaklığına uydur
        let u,v;const h=(t+k)*2;
        if(gI===0){u=x/2.4;v=z/(2.4*277/480);}           // altıgen döşeme: 2,4 m × 1,39 m periyot (altıgen ≈ 40 cm)
        else if(gI===5){u=x/2.4;v=z/2.4;}
        else if(gI===2){u=(x*tx+z*tz)/2.0+(Math.abs(ny)>0.7?x/2:0);v=(Math.abs(ny)>0.7?z:y)/2.0;}
        else{const along=x*tx+z*tz, fyv=floorAt(x,z);
          if(gI===1){u=along/1.2;v=(y-fyv)/1.2;}
          else if(gI===3){u=along/1.0;v=Math.min(0.999,Math.max(0.001,(y-fyv)/4.0));}
          else{u=along/1.2;v=Math.min(0.999,Math.max(0.001,(y-fyv)/8.0));}}
        uv[h]=u;uv[h+1]=v;}
      groups[gI].push(t);}
    // üçgenleri gruplara göre sırala
    const order=[].concat(...groups),pos2=new Float32Array(n*3),uv2=new Float32Array(n*2),cl2=new Float32Array(n*3),cd2=new Float32Array(n*3);
    order.forEach((t,i)=>{for(let k=0;k<3;k++){pos2.set(pos.subarray((t+k)*3,(t+k)*3+3),(i*3+k)*3);uv2.set(uv.subarray((t+k)*2,(t+k)*2+2),(i*3+k)*2);
      cl2.set(cl.subarray((t+k)*3,(t+k)*3+3),(i*3+k)*3);cd2.set(cd.subarray((t+k)*3,(t+k)*3+3),(i*3+k)*3);}});
    const g=new THREE.BufferGeometry();g.setAttribute('position',new THREE.BufferAttribute(pos2,3));g.setAttribute('uv',new THREE.BufferAttribute(uv2,2));
    g.setAttribute('color',new THREE.BufferAttribute(new Float32Array(cl2),3));let off=0;groups.forEach((G,i)=>{g.addGroup(off,G.length*3,i);off+=G.length*3;});  // grup sayımı köşe cinsindeng.computeBoundingSphere();
    const base=mesh.material,mk=(c,wrapV)=>{const T=new THREE.CanvasTexture(c);T.wrapS=THREE.RepeatWrapping;T.wrapT=wrapV===false?THREE.ClampToEdgeWrapping:THREE.RepeatWrapping;
        if(THREE.sRGBEncoding!==undefined)T.encoding=THREE.sRGBEncoding;T.anisotropy=8;
        const M=base.clone();M.map=T;M.vertexColors=true;M.needsUpdate=true;return M;};
    const mats=[mk(hexFloor()),mk(masonry()),mk(plaster()),mk(parekWall(),false),mk(naosWall(),false),mk(slabs())];
    src.dispose();mesh.geometry=g;mesh.material=mats;FP.colLight=cl2;FP.colDark=cd2;FP.dark=false;
    // fpTone material.side'ı tek materyalde değiştiriyor: dizi için de çalışsın
    Object.defineProperty(mats,'side',{set(v){mats.forEach(m=>m.side=v)},get(){return mats[0].side}});
    Object.defineProperty(mats,'needsUpdate',{set(v){mats.forEach(m=>m.needsUpdate=v)}});
    return mats.length;};
})();
