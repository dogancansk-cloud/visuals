(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();const rc="170",rf=0,Oc=1,af=2,Ph=1,Uh=2,Nn=3,zn=0,Ft=1,rn=2,ii=0,ji=1,Gr=2,Gc=3,zc=4,of=5,bi=100,cf=101,lf=102,hf=103,uf=104,ff=200,df=201,Af=202,pf=203,go=204,mo=205,gf=206,mf=207,bf=208,xf=209,Ef=210,_f=211,vf=212,yf=213,Mf=214,bo=0,xo=1,Eo=2,$i=3,_o=4,vo=5,yo=6,Mo=7,ia=0,Cf=1,If=2,si=0,wf=1,Sf=2,Bf=3,Fh=4,Tf=5,Rf=6,Df=7,Hc="attached",Lf="detached",Nh=300,vi=301,es=302,Co=303,Io=304,sa=306,ai=1e3,yn=1001,zr=1002,zt=1003,Qh=1004,Bs=1005,Pt=1006,Nr=1007,mn=1008,wt=1009,kh=1010,Oh=1011,zs=1012,ac=1013,yi=1014,Ut=1015,bn=1016,oc=1017,cc=1018,ts=1020,Gh=35902,zh=1021,Hh=1022,St=1023,Vh=1024,Wh=1025,Ki=1026,ns=1027,ti=1028,lc=1029,Ei=1030,hc=1031,uc=1033,Qr=33776,Ds=33777,kr=33778,Ls=33779,Hr=35840,wo=35841,Vr=35842,So=35843,Wr=36196,qr=37492,Xr=37496,Hs=37808,Bo=37809,To=37810,Ro=37811,Vs=37812,Do=37813,Lo=37814,Po=37815,Uo=37816,Fo=37817,No=37818,Qo=37819,ko=37820,Oo=37821,Ps=36492,Go=36494,Yr=36495,qh=36283,zo=36284,Ho=36285,Vo=36286,Ws=2300,qs=2301,ma=2302,Vc=2400,Wc=2401,qc=2402,Pf=2500,Uf=0,Xh=1,Wo=2,Ff=3200,Nf=3201,ra=0,Qf=1,An="",mt="srgb",Nt="srgb-linear",aa="linear",ot="srgb",Bi=7680,Xc=519,kf=512,Of=513,Gf=514,Yh=515,zf=516,Hf=517,Vf=518,Wf=519,qo=35044,Yc="300 es",On=2e3,jr=2001;class cs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,e);e.target=null}}}const Dt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let jc=1234567;const Us=Math.PI/180,is=180/Math.PI;function on(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Dt[s&255]+Dt[s>>8&255]+Dt[s>>16&255]+Dt[s>>24&255]+"-"+Dt[e&255]+Dt[e>>8&255]+"-"+Dt[e>>16&15|64]+Dt[e>>24&255]+"-"+Dt[t&63|128]+Dt[t>>8&255]+"-"+Dt[t>>16&255]+Dt[t>>24&255]+Dt[n&255]+Dt[n>>8&255]+Dt[n>>16&255]+Dt[n>>24&255]).toLowerCase()}function vt(s,e,t){return Math.max(e,Math.min(t,s))}function fc(s,e){return(s%e+e)%e}function qf(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function Xf(s,e,t){return s!==e?(t-s)/(e-s):0}function Fs(s,e,t){return(1-t)*s+t*e}function Yf(s,e,t,n){return Fs(s,e,1-Math.exp(-t*n))}function jf(s,e=1){return e-Math.abs(fc(s,e*2)-e)}function Kf(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function Jf(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function Zf(s,e){return s+Math.floor(Math.random()*(e-s+1))}function $f(s,e){return s+Math.random()*(e-s)}function ed(s){return s*(.5-Math.random())}function td(s){s!==void 0&&(jc=s);let e=jc+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function nd(s){return s*Us}function id(s){return s*is}function sd(s){return(s&s-1)===0&&s!==0}function rd(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function ad(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function od(s,e,t,n,i){const r=Math.cos,a=Math.sin,o=r(t/2),c=a(t/2),l=r((e+n)/2),h=a((e+n)/2),u=r((e-n)/2),f=a((e-n)/2),d=r((n-e)/2),m=a((n-e)/2);switch(i){case"XYX":s.set(o*h,c*u,c*f,o*l);break;case"YZY":s.set(c*f,o*h,c*u,o*l);break;case"ZXZ":s.set(c*u,c*f,o*h,o*l);break;case"XZX":s.set(o*h,c*m,c*d,o*l);break;case"YXY":s.set(c*d,o*h,c*m,o*l);break;case"ZYZ":s.set(c*m,c*d,o*h,o*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function pn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function rt(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const Xt={DEG2RAD:Us,RAD2DEG:is,generateUUID:on,clamp:vt,euclideanModulo:fc,mapLinear:qf,inverseLerp:Xf,lerp:Fs,damp:Yf,pingpong:jf,smoothstep:Kf,smootherstep:Jf,randInt:Zf,randFloat:$f,randFloatSpread:ed,seededRandom:td,degToRad:nd,radToDeg:id,isPowerOfTwo:sd,ceilPowerOfTwo:rd,floorPowerOfTwo:ad,setQuaternionFromProperEuler:od,normalize:rt,denormalize:pn};class oe{constructor(e=0,t=0){oe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(vt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*i+e.x,this.y=r*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ve{constructor(e,t,n,i,r,a,o,c,l){Ve.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,c,l)}set(e,t,n,i,r,a,o,c,l){const h=this.elements;return h[0]=e,h[1]=i,h[2]=o,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],u=n[7],f=n[2],d=n[5],m=n[8],p=i[0],g=i[3],A=i[6],b=i[1],x=i[4],E=i[7],C=i[2],_=i[5],v=i[8];return r[0]=a*p+o*b+c*C,r[3]=a*g+o*x+c*_,r[6]=a*A+o*E+c*v,r[1]=l*p+h*b+u*C,r[4]=l*g+h*x+u*_,r[7]=l*A+h*E+u*v,r[2]=f*p+d*b+m*C,r[5]=f*g+d*x+m*_,r[8]=f*A+d*E+m*v,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8];return t*a*h-t*o*l-n*r*h+n*o*c+i*r*l-i*a*c}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=h*a-o*l,f=o*c-h*r,d=l*r-a*c,m=t*u+n*f+i*d;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const p=1/m;return e[0]=u*p,e[1]=(i*l-h*n)*p,e[2]=(o*n-i*a)*p,e[3]=f*p,e[4]=(h*t-i*c)*p,e[5]=(i*r-o*t)*p,e[6]=d*p,e[7]=(n*c-l*t)*p,e[8]=(a*t-n*r)*p,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,a,o){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-i*l,i*c,-i*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(ba.makeScale(e,t)),this}rotate(e){return this.premultiply(ba.makeRotation(-e)),this}translate(e,t){return this.premultiply(ba.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ba=new Ve;function jh(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Xs(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function cd(){const s=Xs("canvas");return s.style.display="block",s}const Kc={};function Ts(s){s in Kc||(Kc[s]=!0,console.warn(s))}function ld(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function hd(s){const e=s.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function ud(s){const e=s.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Je={enabled:!0,workingColorSpace:Nt,spaces:{},convert:function(s,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===ot&&(s.r=Gn(s.r),s.g=Gn(s.g),s.b=Gn(s.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(s.applyMatrix3(this.spaces[e].toXYZ),s.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===ot&&(s.r=Ji(s.r),s.g=Ji(s.g),s.b=Ji(s.b))),s},fromWorkingColorSpace:function(s,e){return this.convert(s,this.workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===An?aa:this.spaces[s].transfer},getLuminanceCoefficients:function(s,e=this.workingColorSpace){return s.fromArray(this.spaces[e].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,e,t){return s.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}};function Gn(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Ji(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}const Jc=[.64,.33,.3,.6,.15,.06],Zc=[.2126,.7152,.0722],$c=[.3127,.329],el=new Ve().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),tl=new Ve().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Je.define({[Nt]:{primaries:Jc,whitePoint:$c,transfer:aa,toXYZ:el,fromXYZ:tl,luminanceCoefficients:Zc,workingColorSpaceConfig:{unpackColorSpace:mt},outputColorSpaceConfig:{drawingBufferColorSpace:mt}},[mt]:{primaries:Jc,whitePoint:$c,transfer:ot,toXYZ:el,fromXYZ:tl,luminanceCoefficients:Zc,outputColorSpaceConfig:{drawingBufferColorSpace:mt}}});let Ti;class fd{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ti===void 0&&(Ti=Xs("canvas")),Ti.width=e.width,Ti.height=e.height;const n=Ti.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Ti}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Xs("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=Gn(r[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Gn(t[n]/255)*255):t[n]=Gn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let dd=0;class Kh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:dd++}),this.uuid=on(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(xa(i[a].image)):r.push(xa(i[a]))}else r=xa(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function xa(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?fd.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Ad=0;class Et extends cs{constructor(e=Et.DEFAULT_IMAGE,t=Et.DEFAULT_MAPPING,n=yn,i=yn,r=Pt,a=mn,o=St,c=wt,l=Et.DEFAULT_ANISOTROPY,h=An){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ad++}),this.uuid=on(),this.name="",this.source=new Kh(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new oe(0,0),this.repeat=new oe(1,1),this.center=new oe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ve,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Nh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ai:e.x=e.x-Math.floor(e.x);break;case yn:e.x=e.x<0?0:1;break;case zr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ai:e.y=e.y-Math.floor(e.y);break;case yn:e.y=e.y<0?0:1;break;case zr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Et.DEFAULT_IMAGE=null;Et.DEFAULT_MAPPING=Nh;Et.DEFAULT_ANISOTROPY=1;class et{constructor(e=0,t=0,n=0,i=1){et.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const c=e.elements,l=c[0],h=c[4],u=c[8],f=c[1],d=c[5],m=c[9],p=c[2],g=c[6],A=c[10];if(Math.abs(h-f)<.01&&Math.abs(u-p)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+p)<.1&&Math.abs(m+g)<.1&&Math.abs(l+d+A-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(l+1)/2,E=(d+1)/2,C=(A+1)/2,_=(h+f)/4,v=(u+p)/4,w=(m+g)/4;return x>E&&x>C?x<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(x),i=_/n,r=v/n):E>C?E<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(E),n=_/i,r=w/i):C<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(C),n=v/r,i=w/r),this.set(n,i,r,t),this}let b=Math.sqrt((g-m)*(g-m)+(u-p)*(u-p)+(f-h)*(f-h));return Math.abs(b)<.001&&(b=1),this.x=(g-m)/b,this.y=(u-p)/b,this.z=(f-h)/b,this.w=Math.acos((l+d+A-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class pd extends cs{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new et(0,0,e,t),this.scissorTest=!1,this.viewport=new et(0,0,e,t);const i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Pt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Et(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Kh(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Mi extends pd{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class dc extends Et{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=zt,this.minFilter=zt,this.wrapR=yn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Jh extends Et{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=zt,this.minFilter=zt,this.wrapR=yn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Jt{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,a,o){let c=n[i+0],l=n[i+1],h=n[i+2],u=n[i+3];const f=r[a+0],d=r[a+1],m=r[a+2],p=r[a+3];if(o===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u;return}if(o===1){e[t+0]=f,e[t+1]=d,e[t+2]=m,e[t+3]=p;return}if(u!==p||c!==f||l!==d||h!==m){let g=1-o;const A=c*f+l*d+h*m+u*p,b=A>=0?1:-1,x=1-A*A;if(x>Number.EPSILON){const C=Math.sqrt(x),_=Math.atan2(C,A*b);g=Math.sin(g*_)/C,o=Math.sin(o*_)/C}const E=o*b;if(c=c*g+f*E,l=l*g+d*E,h=h*g+m*E,u=u*g+p*E,g===1-o){const C=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=C,l*=C,h*=C,u*=C}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,r,a){const o=n[i],c=n[i+1],l=n[i+2],h=n[i+3],u=r[a],f=r[a+1],d=r[a+2],m=r[a+3];return e[t]=o*m+h*u+c*d-l*f,e[t+1]=c*m+h*f+l*u-o*d,e[t+2]=l*m+h*d+o*f-c*u,e[t+3]=h*m-o*u-c*f-l*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(i/2),u=o(r/2),f=c(n/2),d=c(i/2),m=c(r/2);switch(a){case"XYZ":this._x=f*h*u+l*d*m,this._y=l*d*u-f*h*m,this._z=l*h*m+f*d*u,this._w=l*h*u-f*d*m;break;case"YXZ":this._x=f*h*u+l*d*m,this._y=l*d*u-f*h*m,this._z=l*h*m-f*d*u,this._w=l*h*u+f*d*m;break;case"ZXY":this._x=f*h*u-l*d*m,this._y=l*d*u+f*h*m,this._z=l*h*m+f*d*u,this._w=l*h*u-f*d*m;break;case"ZYX":this._x=f*h*u-l*d*m,this._y=l*d*u+f*h*m,this._z=l*h*m-f*d*u,this._w=l*h*u+f*d*m;break;case"YZX":this._x=f*h*u+l*d*m,this._y=l*d*u+f*h*m,this._z=l*h*m-f*d*u,this._w=l*h*u-f*d*m;break;case"XZY":this._x=f*h*u-l*d*m,this._y=l*d*u-f*h*m,this._z=l*h*m+f*d*u,this._w=l*h*u+f*d*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],a=t[1],o=t[5],c=t[9],l=t[2],h=t[6],u=t[10],f=n+o+u;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-c)*d,this._y=(r-l)*d,this._z=(a-i)*d}else if(n>o&&n>u){const d=2*Math.sqrt(1+n-o-u);this._w=(h-c)/d,this._x=.25*d,this._y=(i+a)/d,this._z=(r+l)/d}else if(o>u){const d=2*Math.sqrt(1+o-n-u);this._w=(r-l)/d,this._x=(i+a)/d,this._y=.25*d,this._z=(c+h)/d}else{const d=2*Math.sqrt(1+u-n-o);this._w=(a-i)/d,this._x=(r+l)/d,this._y=(c+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(vt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,a=e._w,o=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+a*o+i*l-r*c,this._y=i*h+a*c+r*o-n*l,this._z=r*h+a*l+n*c-i*o,this._w=a*h-n*o-i*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,a=this._w;let o=a*e._w+n*e._x+i*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=i,this._z=r,this;const c=1-o*o;if(c<=Number.EPSILON){const d=1-t;return this._w=d*a+t*this._w,this._x=d*n+t*this._x,this._y=d*i+t*this._y,this._z=d*r+t*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,o),u=Math.sin((1-t)*h)/l,f=Math.sin(t*h)/l;return this._w=a*u+this._w*f,this._x=n*u+this._x*f,this._y=i*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class R{constructor(e=0,t=0,n=0){R.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(nl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(nl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*i-o*n),h=2*(o*t-r*i),u=2*(r*n-a*t);return this.x=t+c*l+a*u-o*h,this.y=n+c*h+o*l-r*u,this.z=i+c*u+r*h-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=i*c-r*o,this.y=r*a-n*c,this.z=n*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ea.copy(this).projectOnVector(e),this.sub(Ea)}reflect(e){return this.sub(Ea.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(vt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ea=new R,nl=new Jt;class Hn{constructor(e=new R(1/0,1/0,1/0),t=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(un.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(un.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=un.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,un):un.fromBufferAttribute(r,a),un.applyMatrix4(e.matrixWorld),this.expandByPoint(un);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),sr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),sr.copy(n.boundingBox)),sr.applyMatrix4(e.matrixWorld),this.union(sr)}const i=e.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,un),un.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ps),rr.subVectors(this.max,ps),Ri.subVectors(e.a,ps),Di.subVectors(e.b,ps),Li.subVectors(e.c,ps),Xn.subVectors(Di,Ri),Yn.subVectors(Li,Di),ci.subVectors(Ri,Li);let t=[0,-Xn.z,Xn.y,0,-Yn.z,Yn.y,0,-ci.z,ci.y,Xn.z,0,-Xn.x,Yn.z,0,-Yn.x,ci.z,0,-ci.x,-Xn.y,Xn.x,0,-Yn.y,Yn.x,0,-ci.y,ci.x,0];return!_a(t,Ri,Di,Li,rr)||(t=[1,0,0,0,1,0,0,0,1],!_a(t,Ri,Di,Li,rr))?!1:(ar.crossVectors(Xn,Yn),t=[ar.x,ar.y,ar.z],_a(t,Ri,Di,Li,rr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,un).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(un).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Rn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Rn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Rn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Rn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Rn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Rn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Rn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Rn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Rn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Rn=[new R,new R,new R,new R,new R,new R,new R,new R],un=new R,sr=new Hn,Ri=new R,Di=new R,Li=new R,Xn=new R,Yn=new R,ci=new R,ps=new R,rr=new R,ar=new R,li=new R;function _a(s,e,t,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){li.fromArray(s,r);const o=i.x*Math.abs(li.x)+i.y*Math.abs(li.y)+i.z*Math.abs(li.z),c=e.dot(li),l=t.dot(li),h=n.dot(li);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}const gd=new Hn,gs=new R,va=new R;class Cn{constructor(e=new R,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):gd.setFromPoints(e).getCenter(n);let i=0;for(let r=0,a=e.length;r<a;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;gs.subVectors(e,this.center);const t=gs.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(gs,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(va.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(gs.copy(e.center).add(va)),this.expandByPoint(gs.copy(e.center).sub(va))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Dn=new R,ya=new R,or=new R,jn=new R,Ma=new R,cr=new R,Ca=new R;class oa{constructor(e=new R,t=new R(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Dn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Dn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Dn.copy(this.origin).addScaledVector(this.direction,t),Dn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){ya.copy(e).add(t).multiplyScalar(.5),or.copy(t).sub(e).normalize(),jn.copy(this.origin).sub(ya);const r=e.distanceTo(t)*.5,a=-this.direction.dot(or),o=jn.dot(this.direction),c=-jn.dot(or),l=jn.lengthSq(),h=Math.abs(1-a*a);let u,f,d,m;if(h>0)if(u=a*c-o,f=a*o-c,m=r*h,u>=0)if(f>=-m)if(f<=m){const p=1/h;u*=p,f*=p,d=u*(u+a*f+2*o)+f*(a*u+f+2*c)+l}else f=r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*c)+l;else f=-r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*c)+l;else f<=-m?(u=Math.max(0,-(-a*r+o)),f=u>0?-r:Math.min(Math.max(-r,-c),r),d=-u*u+f*(f+2*c)+l):f<=m?(u=0,f=Math.min(Math.max(-r,-c),r),d=f*(f+2*c)+l):(u=Math.max(0,-(a*r+o)),f=u>0?r:Math.min(Math.max(-r,-c),r),d=-u*u+f*(f+2*c)+l);else f=a>0?-r:r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(ya).addScaledVector(or,f),d}intersectSphere(e,t){Dn.subVectors(e.center,this.origin);const n=Dn.dot(this.direction),i=Dn.dot(Dn)-n*n,r=e.radius*e.radius;if(i>r)return null;const a=Math.sqrt(r-i),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,a,o,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return l>=0?(n=(e.min.x-f.x)*l,i=(e.max.x-f.x)*l):(n=(e.max.x-f.x)*l,i=(e.min.x-f.x)*l),h>=0?(r=(e.min.y-f.y)*h,a=(e.max.y-f.y)*h):(r=(e.max.y-f.y)*h,a=(e.min.y-f.y)*h),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),u>=0?(o=(e.min.z-f.z)*u,c=(e.max.z-f.z)*u):(o=(e.max.z-f.z)*u,c=(e.min.z-f.z)*u),n>c||o>i)||((o>n||n!==n)&&(n=o),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Dn)!==null}intersectTriangle(e,t,n,i,r){Ma.subVectors(t,e),cr.subVectors(n,e),Ca.crossVectors(Ma,cr);let a=this.direction.dot(Ca),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;jn.subVectors(this.origin,e);const c=o*this.direction.dot(cr.crossVectors(jn,cr));if(c<0)return null;const l=o*this.direction.dot(Ma.cross(jn));if(l<0||c+l>a)return null;const h=-o*jn.dot(Ca);return h<0?null:this.at(h/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ne{constructor(e,t,n,i,r,a,o,c,l,h,u,f,d,m,p,g){Ne.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,c,l,h,u,f,d,m,p,g)}set(e,t,n,i,r,a,o,c,l,h,u,f,d,m,p,g){const A=this.elements;return A[0]=e,A[4]=t,A[8]=n,A[12]=i,A[1]=r,A[5]=a,A[9]=o,A[13]=c,A[2]=l,A[6]=h,A[10]=u,A[14]=f,A[3]=d,A[7]=m,A[11]=p,A[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ne().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Pi.setFromMatrixColumn(e,0).length(),r=1/Pi.setFromMatrixColumn(e,1).length(),a=1/Pi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const f=a*h,d=a*u,m=o*h,p=o*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=d+m*l,t[5]=f-p*l,t[9]=-o*c,t[2]=p-f*l,t[6]=m+d*l,t[10]=a*c}else if(e.order==="YXZ"){const f=c*h,d=c*u,m=l*h,p=l*u;t[0]=f+p*o,t[4]=m*o-d,t[8]=a*l,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=d*o-m,t[6]=p+f*o,t[10]=a*c}else if(e.order==="ZXY"){const f=c*h,d=c*u,m=l*h,p=l*u;t[0]=f-p*o,t[4]=-a*u,t[8]=m+d*o,t[1]=d+m*o,t[5]=a*h,t[9]=p-f*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){const f=a*h,d=a*u,m=o*h,p=o*u;t[0]=c*h,t[4]=m*l-d,t[8]=f*l+p,t[1]=c*u,t[5]=p*l+f,t[9]=d*l-m,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){const f=a*c,d=a*l,m=o*c,p=o*l;t[0]=c*h,t[4]=p-f*u,t[8]=m*u+d,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-l*h,t[6]=d*u+m,t[10]=f-p*u}else if(e.order==="XZY"){const f=a*c,d=a*l,m=o*c,p=o*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=f*u+p,t[5]=a*h,t[9]=d*u-m,t[2]=m*u-d,t[6]=o*h,t[10]=p*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(md,e,bd)}lookAt(e,t,n){const i=this.elements;return Wt.subVectors(e,t),Wt.lengthSq()===0&&(Wt.z=1),Wt.normalize(),Kn.crossVectors(n,Wt),Kn.lengthSq()===0&&(Math.abs(n.z)===1?Wt.x+=1e-4:Wt.z+=1e-4,Wt.normalize(),Kn.crossVectors(n,Wt)),Kn.normalize(),lr.crossVectors(Wt,Kn),i[0]=Kn.x,i[4]=lr.x,i[8]=Wt.x,i[1]=Kn.y,i[5]=lr.y,i[9]=Wt.y,i[2]=Kn.z,i[6]=lr.z,i[10]=Wt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],u=n[5],f=n[9],d=n[13],m=n[2],p=n[6],g=n[10],A=n[14],b=n[3],x=n[7],E=n[11],C=n[15],_=i[0],v=i[4],w=i[8],M=i[12],y=i[1],B=i[5],U=i[9],L=i[13],Q=i[2],z=i[6],N=i[10],H=i[14],O=i[3],j=i[7],Z=i[11],ie=i[15];return r[0]=a*_+o*y+c*Q+l*O,r[4]=a*v+o*B+c*z+l*j,r[8]=a*w+o*U+c*N+l*Z,r[12]=a*M+o*L+c*H+l*ie,r[1]=h*_+u*y+f*Q+d*O,r[5]=h*v+u*B+f*z+d*j,r[9]=h*w+u*U+f*N+d*Z,r[13]=h*M+u*L+f*H+d*ie,r[2]=m*_+p*y+g*Q+A*O,r[6]=m*v+p*B+g*z+A*j,r[10]=m*w+p*U+g*N+A*Z,r[14]=m*M+p*L+g*H+A*ie,r[3]=b*_+x*y+E*Q+C*O,r[7]=b*v+x*B+E*z+C*j,r[11]=b*w+x*U+E*N+C*Z,r[15]=b*M+x*L+E*H+C*ie,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],a=e[1],o=e[5],c=e[9],l=e[13],h=e[2],u=e[6],f=e[10],d=e[14],m=e[3],p=e[7],g=e[11],A=e[15];return m*(+r*c*u-i*l*u-r*o*f+n*l*f+i*o*d-n*c*d)+p*(+t*c*d-t*l*f+r*a*f-i*a*d+i*l*h-r*c*h)+g*(+t*l*u-t*o*d-r*a*u+n*a*d+r*o*h-n*l*h)+A*(-i*o*h-t*c*u+t*o*f+i*a*u-n*a*f+n*c*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=e[9],f=e[10],d=e[11],m=e[12],p=e[13],g=e[14],A=e[15],b=u*g*l-p*f*l+p*c*d-o*g*d-u*c*A+o*f*A,x=m*f*l-h*g*l-m*c*d+a*g*d+h*c*A-a*f*A,E=h*p*l-m*u*l+m*o*d-a*p*d-h*o*A+a*u*A,C=m*u*c-h*p*c-m*o*f+a*p*f+h*o*g-a*u*g,_=t*b+n*x+i*E+r*C;if(_===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const v=1/_;return e[0]=b*v,e[1]=(p*f*r-u*g*r-p*i*d+n*g*d+u*i*A-n*f*A)*v,e[2]=(o*g*r-p*c*r+p*i*l-n*g*l-o*i*A+n*c*A)*v,e[3]=(u*c*r-o*f*r-u*i*l+n*f*l+o*i*d-n*c*d)*v,e[4]=x*v,e[5]=(h*g*r-m*f*r+m*i*d-t*g*d-h*i*A+t*f*A)*v,e[6]=(m*c*r-a*g*r-m*i*l+t*g*l+a*i*A-t*c*A)*v,e[7]=(a*f*r-h*c*r+h*i*l-t*f*l-a*i*d+t*c*d)*v,e[8]=E*v,e[9]=(m*u*r-h*p*r-m*n*d+t*p*d+h*n*A-t*u*A)*v,e[10]=(a*p*r-m*o*r+m*n*l-t*p*l-a*n*A+t*o*A)*v,e[11]=(h*o*r-a*u*r-h*n*l+t*u*l+a*n*d-t*o*d)*v,e[12]=C*v,e[13]=(h*p*i-m*u*i+m*n*f-t*p*f-h*n*g+t*u*g)*v,e[14]=(m*o*i-a*p*i-m*n*c+t*p*c+a*n*g-t*o*g)*v,e[15]=(a*u*i-h*o*i+h*n*c-t*u*c-a*n*f+t*o*f)*v,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,a=e.x,o=e.y,c=e.z,l=r*a,h=r*o;return this.set(l*a+n,l*o-i*c,l*c+i*o,0,l*o+i*c,h*o+n,h*c-i*a,0,l*c-i*o,h*c+i*a,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,a){return this.set(1,n,r,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,l=r+r,h=a+a,u=o+o,f=r*l,d=r*h,m=r*u,p=a*h,g=a*u,A=o*u,b=c*l,x=c*h,E=c*u,C=n.x,_=n.y,v=n.z;return i[0]=(1-(p+A))*C,i[1]=(d+E)*C,i[2]=(m-x)*C,i[3]=0,i[4]=(d-E)*_,i[5]=(1-(f+A))*_,i[6]=(g+b)*_,i[7]=0,i[8]=(m+x)*v,i[9]=(g-b)*v,i[10]=(1-(f+p))*v,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=Pi.set(i[0],i[1],i[2]).length();const a=Pi.set(i[4],i[5],i[6]).length(),o=Pi.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],fn.copy(this);const l=1/r,h=1/a,u=1/o;return fn.elements[0]*=l,fn.elements[1]*=l,fn.elements[2]*=l,fn.elements[4]*=h,fn.elements[5]*=h,fn.elements[6]*=h,fn.elements[8]*=u,fn.elements[9]*=u,fn.elements[10]*=u,t.setFromRotationMatrix(fn),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,i,r,a,o=On){const c=this.elements,l=2*r/(t-e),h=2*r/(n-i),u=(t+e)/(t-e),f=(n+i)/(n-i);let d,m;if(o===On)d=-(a+r)/(a-r),m=-2*a*r/(a-r);else if(o===jr)d=-a/(a-r),m=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=d,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,r,a,o=On){const c=this.elements,l=1/(t-e),h=1/(n-i),u=1/(a-r),f=(t+e)*l,d=(n+i)*h;let m,p;if(o===On)m=(a+r)*u,p=-2*u;else if(o===jr)m=r*u,p=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-d,c[2]=0,c[6]=0,c[10]=p,c[14]=-m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Pi=new R,fn=new Ne,md=new R(0,0,0),bd=new R(1,1,1),Kn=new R,lr=new R,Wt=new R,il=new Ne,sl=new Jt;class Zt{constructor(e=0,t=0,n=0,i=Zt.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],a=i[4],o=i[8],c=i[1],l=i[5],h=i[9],u=i[2],f=i[6],d=i[10];switch(t){case"XYZ":this._y=Math.asin(vt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-vt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(vt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-vt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(vt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-vt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return il.makeRotationFromQuaternion(e),this.setFromRotationMatrix(il,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return sl.setFromEuler(this),this.setFromQuaternion(sl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Zt.DEFAULT_ORDER="XYZ";class Zh{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let xd=0;const rl=new R,Ui=new Jt,Ln=new Ne,hr=new R,ms=new R,Ed=new R,_d=new Jt,al=new R(1,0,0),ol=new R(0,1,0),cl=new R(0,0,1),ll={type:"added"},vd={type:"removed"},Fi={type:"childadded",child:null},Ia={type:"childremoved",child:null};class dt extends cs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:xd++}),this.uuid=on(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=dt.DEFAULT_UP.clone();const e=new R,t=new Zt,n=new Jt,i=new R(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ne},normalMatrix:{value:new Ve}}),this.matrix=new Ne,this.matrixWorld=new Ne,this.matrixAutoUpdate=dt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Zh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ui.setFromAxisAngle(e,t),this.quaternion.multiply(Ui),this}rotateOnWorldAxis(e,t){return Ui.setFromAxisAngle(e,t),this.quaternion.premultiply(Ui),this}rotateX(e){return this.rotateOnAxis(al,e)}rotateY(e){return this.rotateOnAxis(ol,e)}rotateZ(e){return this.rotateOnAxis(cl,e)}translateOnAxis(e,t){return rl.copy(e).applyQuaternion(this.quaternion),this.position.add(rl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(al,e)}translateY(e){return this.translateOnAxis(ol,e)}translateZ(e){return this.translateOnAxis(cl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ln.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?hr.copy(e):hr.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),ms.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ln.lookAt(ms,hr,this.up):Ln.lookAt(hr,ms,this.up),this.quaternion.setFromRotationMatrix(Ln),i&&(Ln.extractRotation(i.matrixWorld),Ui.setFromRotationMatrix(Ln),this.quaternion.premultiply(Ui.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ll),Fi.child=e,this.dispatchEvent(Fi),Fi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(vd),Ia.child=e,this.dispatchEvent(Ia),Ia.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ln.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ln.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ln),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ll),Fi.child=e,this.dispatchEvent(Fi),Fi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ms,e,Ed),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ms,_d,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];r(e.shapes,u)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(e.materials,this.material[c]));i.material=o}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];i.animations.push(r(e.animations,c))}}if(t){const o=a(e.geometries),c=a(e.materials),l=a(e.textures),h=a(e.images),u=a(e.shapes),f=a(e.skeletons),d=a(e.animations),m=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),m.length>0&&(n.nodes=m)}return n.object=i,n;function a(o){const c=[];for(const l in o){const h=o[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}dt.DEFAULT_UP=new R(0,1,0);dt.DEFAULT_MATRIX_AUTO_UPDATE=!0;dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const dn=new R,Pn=new R,wa=new R,Un=new R,Ni=new R,Qi=new R,hl=new R,Sa=new R,Ba=new R,Ta=new R,Ra=new et,Da=new et,La=new et;class gn{constructor(e=new R,t=new R,n=new R){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),dn.subVectors(e,t),i.cross(dn);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){dn.subVectors(i,t),Pn.subVectors(n,t),wa.subVectors(e,t);const a=dn.dot(dn),o=dn.dot(Pn),c=dn.dot(wa),l=Pn.dot(Pn),h=Pn.dot(wa),u=a*l-o*o;if(u===0)return r.set(0,0,0),null;const f=1/u,d=(l*c-o*h)*f,m=(a*h-o*c)*f;return r.set(1-d-m,m,d)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Un)===null?!1:Un.x>=0&&Un.y>=0&&Un.x+Un.y<=1}static getInterpolation(e,t,n,i,r,a,o,c){return this.getBarycoord(e,t,n,i,Un)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Un.x),c.addScaledVector(a,Un.y),c.addScaledVector(o,Un.z),c)}static getInterpolatedAttribute(e,t,n,i,r,a){return Ra.setScalar(0),Da.setScalar(0),La.setScalar(0),Ra.fromBufferAttribute(e,t),Da.fromBufferAttribute(e,n),La.fromBufferAttribute(e,i),a.setScalar(0),a.addScaledVector(Ra,r.x),a.addScaledVector(Da,r.y),a.addScaledVector(La,r.z),a}static isFrontFacing(e,t,n,i){return dn.subVectors(n,t),Pn.subVectors(e,t),dn.cross(Pn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return dn.subVectors(this.c,this.b),Pn.subVectors(this.a,this.b),dn.cross(Pn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return gn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return gn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return gn.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return gn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return gn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let a,o;Ni.subVectors(i,n),Qi.subVectors(r,n),Sa.subVectors(e,n);const c=Ni.dot(Sa),l=Qi.dot(Sa);if(c<=0&&l<=0)return t.copy(n);Ba.subVectors(e,i);const h=Ni.dot(Ba),u=Qi.dot(Ba);if(h>=0&&u<=h)return t.copy(i);const f=c*u-h*l;if(f<=0&&c>=0&&h<=0)return a=c/(c-h),t.copy(n).addScaledVector(Ni,a);Ta.subVectors(e,r);const d=Ni.dot(Ta),m=Qi.dot(Ta);if(m>=0&&d<=m)return t.copy(r);const p=d*l-c*m;if(p<=0&&l>=0&&m<=0)return o=l/(l-m),t.copy(n).addScaledVector(Qi,o);const g=h*m-d*u;if(g<=0&&u-h>=0&&d-m>=0)return hl.subVectors(r,i),o=(u-h)/(u-h+(d-m)),t.copy(i).addScaledVector(hl,o);const A=1/(g+p+f);return a=p*A,o=f*A,t.copy(n).addScaledVector(Ni,a).addScaledVector(Qi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const $h={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Jn={h:0,s:0,l:0},ur={h:0,s:0,l:0};function Pa(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class te{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=mt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Je.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=Je.workingColorSpace){return this.r=e,this.g=t,this.b=n,Je.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=Je.workingColorSpace){if(e=fc(e,1),t=vt(t,0,1),n=vt(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Pa(a,r,e+1/3),this.g=Pa(a,r,e),this.b=Pa(a,r,e-1/3)}return Je.toWorkingColorSpace(this,i),this}setStyle(e,t=mt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=mt){const n=$h[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Gn(e.r),this.g=Gn(e.g),this.b=Gn(e.b),this}copyLinearToSRGB(e){return this.r=Ji(e.r),this.g=Ji(e.g),this.b=Ji(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=mt){return Je.fromWorkingColorSpace(Lt.copy(this),e),Math.round(vt(Lt.r*255,0,255))*65536+Math.round(vt(Lt.g*255,0,255))*256+Math.round(vt(Lt.b*255,0,255))}getHexString(e=mt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Je.workingColorSpace){Je.fromWorkingColorSpace(Lt.copy(this),t);const n=Lt.r,i=Lt.g,r=Lt.b,a=Math.max(n,i,r),o=Math.min(n,i,r);let c,l;const h=(o+a)/2;if(o===a)c=0,l=0;else{const u=a-o;switch(l=h<=.5?u/(a+o):u/(2-a-o),a){case n:c=(i-r)/u+(i<r?6:0);break;case i:c=(r-n)/u+2;break;case r:c=(n-i)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=Je.workingColorSpace){return Je.fromWorkingColorSpace(Lt.copy(this),t),e.r=Lt.r,e.g=Lt.g,e.b=Lt.b,e}getStyle(e=mt){Je.fromWorkingColorSpace(Lt.copy(this),e);const t=Lt.r,n=Lt.g,i=Lt.b;return e!==mt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Jn),this.setHSL(Jn.h+e,Jn.s+t,Jn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Jn),e.getHSL(ur);const n=Fs(Jn.h,ur.h,t),i=Fs(Jn.s,ur.s,t),r=Fs(Jn.l,ur.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Lt=new te;te.NAMES=$h;let yd=0;class cn extends cs{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:yd++}),this.uuid=on(),this.name="",this.blending=ji,this.side=zn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=go,this.blendDst=mo,this.blendEquation=bi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new te(0,0,0),this.blendAlpha=0,this.depthFunc=$i,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Xc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Bi,this.stencilZFail=Bi,this.stencilZPass=Bi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ji&&(n.blending=this.blending),this.side!==zn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==go&&(n.blendSrc=this.blendSrc),this.blendDst!==mo&&(n.blendDst=this.blendDst),this.blendEquation!==bi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==$i&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Xc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Bi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Bi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Bi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const a=[];for(const o in r){const c=r[o];delete c.metadata,a.push(c)}return a}if(t){const r=i(e.textures),a=i(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Tt extends cn{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new te(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Zt,this.combine=ia,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const bt=new R,fr=new oe;class Ke{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=qo,this.updateRanges=[],this.gpuType=Ut,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)fr.fromBufferAttribute(this,t),fr.applyMatrix3(e),this.setXY(t,fr.x,fr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)bt.fromBufferAttribute(this,t),bt.applyMatrix3(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)bt.fromBufferAttribute(this,t),bt.applyMatrix4(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)bt.fromBufferAttribute(this,t),bt.applyNormalMatrix(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)bt.fromBufferAttribute(this,t),bt.transformDirection(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=pn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=rt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=pn(t,this.array)),t}setX(e,t){return this.normalized&&(t=rt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=pn(t,this.array)),t}setY(e,t){return this.normalized&&(t=rt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=pn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=rt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=pn(t,this.array)),t}setW(e,t){return this.normalized&&(t=rt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=rt(t,this.array),n=rt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=rt(t,this.array),n=rt(n,this.array),i=rt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=rt(t,this.array),n=rt(n,this.array),i=rt(i,this.array),r=rt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==qo&&(e.usage=this.usage),e}}class eu extends Ke{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class tu extends Ke{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Xe extends Ke{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Md=0;const en=new Ne,Ua=new dt,ki=new R,qt=new Hn,bs=new Hn,It=new R;class ht extends cs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Md++}),this.uuid=on(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(jh(e)?tu:eu)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ve().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return en.makeRotationFromQuaternion(e),this.applyMatrix4(en),this}rotateX(e){return en.makeRotationX(e),this.applyMatrix4(en),this}rotateY(e){return en.makeRotationY(e),this.applyMatrix4(en),this}rotateZ(e){return en.makeRotationZ(e),this.applyMatrix4(en),this}translate(e,t,n){return en.makeTranslation(e,t,n),this.applyMatrix4(en),this}scale(e,t,n){return en.makeScale(e,t,n),this.applyMatrix4(en),this}lookAt(e){return Ua.lookAt(e),Ua.updateMatrix(),this.applyMatrix4(Ua.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ki).negate(),this.translate(ki.x,ki.y,ki.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,r=e.length;i<r;i++){const a=e[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Xe(n,3))}else{for(let n=0,i=t.count;n<i;n++){const r=e[n];t.setXYZ(n,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Hn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];qt.setFromBufferAttribute(r),this.morphTargetsRelative?(It.addVectors(this.boundingBox.min,qt.min),this.boundingBox.expandByPoint(It),It.addVectors(this.boundingBox.max,qt.max),this.boundingBox.expandByPoint(It)):(this.boundingBox.expandByPoint(qt.min),this.boundingBox.expandByPoint(qt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Cn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new R,1/0);return}if(e){const n=this.boundingSphere.center;if(qt.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];bs.setFromBufferAttribute(o),this.morphTargetsRelative?(It.addVectors(qt.min,bs.min),qt.expandByPoint(It),It.addVectors(qt.max,bs.max),qt.expandByPoint(It)):(qt.expandByPoint(bs.min),qt.expandByPoint(bs.max))}qt.getCenter(n);let i=0;for(let r=0,a=e.count;r<a;r++)It.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(It));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)It.fromBufferAttribute(o,l),c&&(ki.fromBufferAttribute(e,l),It.add(ki)),i=Math.max(i,n.distanceToSquared(It))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ke(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let w=0;w<n.count;w++)o[w]=new R,c[w]=new R;const l=new R,h=new R,u=new R,f=new oe,d=new oe,m=new oe,p=new R,g=new R;function A(w,M,y){l.fromBufferAttribute(n,w),h.fromBufferAttribute(n,M),u.fromBufferAttribute(n,y),f.fromBufferAttribute(r,w),d.fromBufferAttribute(r,M),m.fromBufferAttribute(r,y),h.sub(l),u.sub(l),d.sub(f),m.sub(f);const B=1/(d.x*m.y-m.x*d.y);isFinite(B)&&(p.copy(h).multiplyScalar(m.y).addScaledVector(u,-d.y).multiplyScalar(B),g.copy(u).multiplyScalar(d.x).addScaledVector(h,-m.x).multiplyScalar(B),o[w].add(p),o[M].add(p),o[y].add(p),c[w].add(g),c[M].add(g),c[y].add(g))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let w=0,M=b.length;w<M;++w){const y=b[w],B=y.start,U=y.count;for(let L=B,Q=B+U;L<Q;L+=3)A(e.getX(L+0),e.getX(L+1),e.getX(L+2))}const x=new R,E=new R,C=new R,_=new R;function v(w){C.fromBufferAttribute(i,w),_.copy(C);const M=o[w];x.copy(M),x.sub(C.multiplyScalar(C.dot(M))).normalize(),E.crossVectors(_,M);const B=E.dot(c[w])<0?-1:1;a.setXYZW(w,x.x,x.y,x.z,B)}for(let w=0,M=b.length;w<M;++w){const y=b[w],B=y.start,U=y.count;for(let L=B,Q=B+U;L<Q;L+=3)v(e.getX(L+0)),v(e.getX(L+1)),v(e.getX(L+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ke(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const i=new R,r=new R,a=new R,o=new R,c=new R,l=new R,h=new R,u=new R;if(e)for(let f=0,d=e.count;f<d;f+=3){const m=e.getX(f+0),p=e.getX(f+1),g=e.getX(f+2);i.fromBufferAttribute(t,m),r.fromBufferAttribute(t,p),a.fromBufferAttribute(t,g),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),o.fromBufferAttribute(n,m),c.fromBufferAttribute(n,p),l.fromBufferAttribute(n,g),o.add(h),c.add(h),l.add(h),n.setXYZ(m,o.x,o.y,o.z),n.setXYZ(p,c.x,c.y,c.z),n.setXYZ(g,l.x,l.y,l.z)}else for(let f=0,d=t.count;f<d;f+=3)i.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)It.fromBufferAttribute(e,t),It.normalize(),e.setXYZ(t,It.x,It.y,It.z)}toNonIndexed(){function e(o,c){const l=o.array,h=o.itemSize,u=o.normalized,f=new l.constructor(c.length*h);let d=0,m=0;for(let p=0,g=c.length;p<g;p++){o.isInterleavedBufferAttribute?d=c[p]*o.data.stride+o.offset:d=c[p]*h;for(let A=0;A<h;A++)f[m++]=l[d++]}return new Ke(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new ht,n=this.index.array,i=this.attributes;for(const o in i){const c=i[o],l=e(c,n);t.setAttribute(o,l)}const r=this.morphAttributes;for(const o in r){const c=[],l=r[o];for(let h=0,u=l.length;h<u;h++){const f=l[h],d=e(f,n);c.push(d)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const i={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,f=l.length;u<f;u++){const d=l[u];h.push(d.toJSON(e.data))}h.length>0&&(i[c]=h,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const l in i){const h=i[l];this.setAttribute(l,h.clone(t))}const r=e.morphAttributes;for(const l in r){const h=[],u=r[l];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,h=a.length;l<h;l++){const u=a[l];this.addGroup(u.start,u.count,u.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ul=new Ne,hi=new oa,dr=new Cn,fl=new R,Ar=new R,pr=new R,gr=new R,Fa=new R,mr=new R,dl=new R,br=new R;class qe extends dt{constructor(e=new ht,t=new Tt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(r&&o){mr.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=o[c],u=r[c];h!==0&&(Fa.fromBufferAttribute(u,e),a?mr.addScaledVector(Fa,h):mr.addScaledVector(Fa.sub(t),h))}t.add(mr)}return t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),dr.copy(n.boundingSphere),dr.applyMatrix4(r),hi.copy(e.ray).recast(e.near),!(dr.containsPoint(hi.origin)===!1&&(hi.intersectSphere(dr,fl)===null||hi.origin.distanceToSquared(fl)>(e.far-e.near)**2))&&(ul.copy(r).invert(),hi.copy(e.ray).applyMatrix4(ul),!(n.boundingBox!==null&&hi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,hi)))}_computeIntersections(e,t,n){let i;const r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,p=f.length;m<p;m++){const g=f[m],A=a[g.materialIndex],b=Math.max(g.start,d.start),x=Math.min(o.count,Math.min(g.start+g.count,d.start+d.count));for(let E=b,C=x;E<C;E+=3){const _=o.getX(E),v=o.getX(E+1),w=o.getX(E+2);i=xr(this,A,e,n,l,h,u,_,v,w),i&&(i.faceIndex=Math.floor(E/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{const m=Math.max(0,d.start),p=Math.min(o.count,d.start+d.count);for(let g=m,A=p;g<A;g+=3){const b=o.getX(g),x=o.getX(g+1),E=o.getX(g+2);i=xr(this,a,e,n,l,h,u,b,x,E),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}else if(c!==void 0)if(Array.isArray(a))for(let m=0,p=f.length;m<p;m++){const g=f[m],A=a[g.materialIndex],b=Math.max(g.start,d.start),x=Math.min(c.count,Math.min(g.start+g.count,d.start+d.count));for(let E=b,C=x;E<C;E+=3){const _=E,v=E+1,w=E+2;i=xr(this,A,e,n,l,h,u,_,v,w),i&&(i.faceIndex=Math.floor(E/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{const m=Math.max(0,d.start),p=Math.min(c.count,d.start+d.count);for(let g=m,A=p;g<A;g+=3){const b=g,x=g+1,E=g+2;i=xr(this,a,e,n,l,h,u,b,x,E),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}}}function Cd(s,e,t,n,i,r,a,o){let c;if(e.side===Ft?c=n.intersectTriangle(a,r,i,!0,o):c=n.intersectTriangle(i,r,a,e.side===zn,o),c===null)return null;br.copy(o),br.applyMatrix4(s.matrixWorld);const l=t.ray.origin.distanceTo(br);return l<t.near||l>t.far?null:{distance:l,point:br.clone(),object:s}}function xr(s,e,t,n,i,r,a,o,c,l){s.getVertexPosition(o,Ar),s.getVertexPosition(c,pr),s.getVertexPosition(l,gr);const h=Cd(s,e,t,n,Ar,pr,gr,dl);if(h){const u=new R;gn.getBarycoord(dl,Ar,pr,gr,u),i&&(h.uv=gn.getInterpolatedAttribute(i,o,c,l,u,new oe)),r&&(h.uv1=gn.getInterpolatedAttribute(r,o,c,l,u,new oe)),a&&(h.normal=gn.getInterpolatedAttribute(a,o,c,l,u,new R),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const f={a:o,b:c,c:l,normal:new R,materialIndex:0};gn.getNormal(Ar,pr,gr,f.normal),h.face=f,h.barycoord=u}return h}class yt extends ht{constructor(e=1,t=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};const o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);const c=[],l=[],h=[],u=[];let f=0,d=0;m("z","y","x",-1,-1,n,t,e,a,r,0),m("z","y","x",1,-1,n,t,-e,a,r,1),m("x","z","y",1,1,e,n,t,i,a,2),m("x","z","y",1,-1,e,n,-t,i,a,3),m("x","y","z",1,-1,e,t,n,i,r,4),m("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new Xe(l,3)),this.setAttribute("normal",new Xe(h,3)),this.setAttribute("uv",new Xe(u,2));function m(p,g,A,b,x,E,C,_,v,w,M){const y=E/v,B=C/w,U=E/2,L=C/2,Q=_/2,z=v+1,N=w+1;let H=0,O=0;const j=new R;for(let Z=0;Z<N;Z++){const ie=Z*B-L;for(let le=0;le<z;le++){const Te=le*y-U;j[p]=Te*b,j[g]=ie*x,j[A]=Q,l.push(j.x,j.y,j.z),j[p]=0,j[g]=0,j[A]=_>0?1:-1,h.push(j.x,j.y,j.z),u.push(le/v),u.push(1-Z/w),H+=1}}for(let Z=0;Z<w;Z++)for(let ie=0;ie<v;ie++){const le=f+ie+z*Z,Te=f+ie+z*(Z+1),q=f+(ie+1)+z*(Z+1),se=f+(ie+1)+z*Z;c.push(le,Te,se),c.push(Te,q,se),O+=6}o.addGroup(d,O,M),d+=O,f+=H}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new yt(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ss(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Ot(s){const e={};for(let t=0;t<s.length;t++){const n=ss(s[t]);for(const i in n)e[i]=n[i]}return e}function Id(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function nu(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Je.workingColorSpace}const wd={clone:ss,merge:Ot};var Sd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Bd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Mn extends cn{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Sd,this.fragmentShader=Bd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ss(e.uniforms),this.uniformsGroups=Id(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class iu extends dt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ne,this.projectionMatrix=new Ne,this.projectionMatrixInverse=new Ne,this.coordinateSystem=On}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Zn=new R,Al=new oe,pl=new oe;class Gt extends iu{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=is*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Us*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return is*2*Math.atan(Math.tan(Us*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Zn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Zn.x,Zn.y).multiplyScalar(-e/Zn.z),Zn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Zn.x,Zn.y).multiplyScalar(-e/Zn.z)}getViewSize(e,t){return this.getViewBounds(e,Al,pl),t.subVectors(pl,Al)}setViewOffset(e,t,n,i,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Us*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*i/c,t-=a.offsetY*n/l,i*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Oi=-90,Gi=1;class Td extends dt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Gt(Oi,Gi,e,t);i.layers=this.layers,this.add(i);const r=new Gt(Oi,Gi,e,t);r.layers=this.layers,this.add(r);const a=new Gt(Oi,Gi,e,t);a.layers=this.layers,this.add(a);const o=new Gt(Oi,Gi,e,t);o.layers=this.layers,this.add(o);const c=new Gt(Oi,Gi,e,t);c.layers=this.layers,this.add(c);const l=new Gt(Oi,Gi,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,r,a,o,c]=t;for(const l of t)this.remove(l);if(e===On)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===jr)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,c,l,h]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;const p=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,a),e.setRenderTarget(n,2,i),e.render(t,o),e.setRenderTarget(n,3,i),e.render(t,c),e.setRenderTarget(n,4,i),e.render(t,l),n.texture.generateMipmaps=p,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(u,f,d),e.xr.enabled=m,n.texture.needsPMREMUpdate=!0}}class su extends Et{constructor(e,t,n,i,r,a,o,c,l,h){e=e!==void 0?e:[],t=t!==void 0?t:vi,super(e,t,n,i,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Rd extends Mi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new su(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Pt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new yt(5,5,5),r=new Mn({name:"CubemapFromEquirect",uniforms:ss(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ft,blending:ii});r.uniforms.tEquirect.value=t;const a=new qe(i,r),o=t.minFilter;return t.minFilter===mn&&(t.minFilter=Pt),new Td(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,i){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(r)}}const Na=new R,Dd=new R,Ld=new Ve;class gi{constructor(e=new R(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Na.subVectors(n,t).cross(Dd.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Na),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Ld.getNormalMatrix(e),i=this.coplanarPoint(Na).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ui=new Cn,Er=new R;class Ac{constructor(e=new gi,t=new gi,n=new gi,i=new gi,r=new gi,a=new gi){this.planes=[e,t,n,i,r,a]}set(e,t,n,i,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=On){const n=this.planes,i=e.elements,r=i[0],a=i[1],o=i[2],c=i[3],l=i[4],h=i[5],u=i[6],f=i[7],d=i[8],m=i[9],p=i[10],g=i[11],A=i[12],b=i[13],x=i[14],E=i[15];if(n[0].setComponents(c-r,f-l,g-d,E-A).normalize(),n[1].setComponents(c+r,f+l,g+d,E+A).normalize(),n[2].setComponents(c+a,f+h,g+m,E+b).normalize(),n[3].setComponents(c-a,f-h,g-m,E-b).normalize(),n[4].setComponents(c-o,f-u,g-p,E-x).normalize(),t===On)n[5].setComponents(c+o,f+u,g+p,E+x).normalize();else if(t===jr)n[5].setComponents(o,u,p,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ui.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ui.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ui)}intersectsSprite(e){return ui.center.set(0,0,0),ui.radius=.7071067811865476,ui.applyMatrix4(e.matrixWorld),this.intersectsSphere(ui)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Er.x=i.normal.x>0?e.max.x:e.min.x,Er.y=i.normal.y>0?e.max.y:e.min.y,Er.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Er)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function ru(){let s=null,e=!1,t=null,n=null;function i(r,a){t(r,a),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function Pd(s){const e=new WeakMap;function t(o,c){const l=o.array,h=o.usage,u=l.byteLength,f=s.createBuffer();s.bindBuffer(c,f),s.bufferData(c,l,h),o.onUploadCallback();let d;if(l instanceof Float32Array)d=s.FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?d=s.HALF_FLOAT:d=s.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=s.SHORT;else if(l instanceof Uint32Array)d=s.UNSIGNED_INT;else if(l instanceof Int32Array)d=s.INT;else if(l instanceof Int8Array)d=s.BYTE;else if(l instanceof Uint8Array)d=s.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,c,l){const h=c.array,u=c.updateRanges;if(s.bindBuffer(l,o),u.length===0)s.bufferSubData(l,0,h);else{u.sort((d,m)=>d.start-m.start);let f=0;for(let d=1;d<u.length;d++){const m=u[f],p=u[d];p.start<=m.start+m.count+1?m.count=Math.max(m.count,p.start+p.count-m.start):(++f,u[f]=p)}u.length=f+1;for(let d=0,m=u.length;d<m;d++){const p=u[d];s.bufferSubData(l,p.start*h.BYTES_PER_ELEMENT,h,p.start,p.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(s.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:i,remove:r,update:a}}class Vn extends ht{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,a=t/2,o=Math.floor(n),c=Math.floor(i),l=o+1,h=c+1,u=e/o,f=t/c,d=[],m=[],p=[],g=[];for(let A=0;A<h;A++){const b=A*f-a;for(let x=0;x<l;x++){const E=x*u-r;m.push(E,-b,0),p.push(0,0,1),g.push(x/o),g.push(1-A/c)}}for(let A=0;A<c;A++)for(let b=0;b<o;b++){const x=b+l*A,E=b+l*(A+1),C=b+1+l*(A+1),_=b+1+l*A;d.push(x,E,_),d.push(E,C,_)}this.setIndex(d),this.setAttribute("position",new Xe(m,3)),this.setAttribute("normal",new Xe(p,3)),this.setAttribute("uv",new Xe(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vn(e.width,e.height,e.widthSegments,e.heightSegments)}}var Ud=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Fd=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Nd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Qd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,kd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Od=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Gd=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,zd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Hd=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Vd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Wd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,qd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Xd=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Yd=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,jd=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Kd=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Jd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Zd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,$d=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,eA=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,tA=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,nA=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,iA=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,sA=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,rA=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,aA=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,oA=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,cA=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,lA=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,hA=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,uA="gl_FragColor = linearToOutputTexel( gl_FragColor );",fA=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,dA=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,AA=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,pA=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,gA=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,mA=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,bA=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,xA=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,EA=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,_A=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,vA=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,yA=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,MA=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,CA=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,IA=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,wA=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,SA=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,BA=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,TA=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,RA=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,DA=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,LA=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,PA=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,UA=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,FA=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,NA=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,QA=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,kA=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,OA=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,GA=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,zA=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,HA=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,VA=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,WA=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,qA=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,XA=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,YA=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,jA=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,KA=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,JA=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ZA=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,$A=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,ep=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,tp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,np=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ip=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,sp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,rp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ap=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,op=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,cp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,lp=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,hp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,up=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,fp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ap=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,pp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,gp=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,mp=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,bp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,xp=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Ep=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,_p=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,vp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,yp=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Mp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Cp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ip=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,wp=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Sp=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Bp=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Tp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Rp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Dp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Lp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Pp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Up=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Fp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Np=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Qp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,kp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Op=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Gp=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,zp=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Hp=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Vp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Wp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qp=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Xp=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Yp=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,jp=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Kp=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Jp=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Zp=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,$p=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,eg=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,tg=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,ng=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ig=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sg=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,rg=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ag=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,og=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cg=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,lg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,hg=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ug=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,fg=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,dg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,We={alphahash_fragment:Ud,alphahash_pars_fragment:Fd,alphamap_fragment:Nd,alphamap_pars_fragment:Qd,alphatest_fragment:kd,alphatest_pars_fragment:Od,aomap_fragment:Gd,aomap_pars_fragment:zd,batching_pars_vertex:Hd,batching_vertex:Vd,begin_vertex:Wd,beginnormal_vertex:qd,bsdfs:Xd,iridescence_fragment:Yd,bumpmap_pars_fragment:jd,clipping_planes_fragment:Kd,clipping_planes_pars_fragment:Jd,clipping_planes_pars_vertex:Zd,clipping_planes_vertex:$d,color_fragment:eA,color_pars_fragment:tA,color_pars_vertex:nA,color_vertex:iA,common:sA,cube_uv_reflection_fragment:rA,defaultnormal_vertex:aA,displacementmap_pars_vertex:oA,displacementmap_vertex:cA,emissivemap_fragment:lA,emissivemap_pars_fragment:hA,colorspace_fragment:uA,colorspace_pars_fragment:fA,envmap_fragment:dA,envmap_common_pars_fragment:AA,envmap_pars_fragment:pA,envmap_pars_vertex:gA,envmap_physical_pars_fragment:wA,envmap_vertex:mA,fog_vertex:bA,fog_pars_vertex:xA,fog_fragment:EA,fog_pars_fragment:_A,gradientmap_pars_fragment:vA,lightmap_pars_fragment:yA,lights_lambert_fragment:MA,lights_lambert_pars_fragment:CA,lights_pars_begin:IA,lights_toon_fragment:SA,lights_toon_pars_fragment:BA,lights_phong_fragment:TA,lights_phong_pars_fragment:RA,lights_physical_fragment:DA,lights_physical_pars_fragment:LA,lights_fragment_begin:PA,lights_fragment_maps:UA,lights_fragment_end:FA,logdepthbuf_fragment:NA,logdepthbuf_pars_fragment:QA,logdepthbuf_pars_vertex:kA,logdepthbuf_vertex:OA,map_fragment:GA,map_pars_fragment:zA,map_particle_fragment:HA,map_particle_pars_fragment:VA,metalnessmap_fragment:WA,metalnessmap_pars_fragment:qA,morphinstance_vertex:XA,morphcolor_vertex:YA,morphnormal_vertex:jA,morphtarget_pars_vertex:KA,morphtarget_vertex:JA,normal_fragment_begin:ZA,normal_fragment_maps:$A,normal_pars_fragment:ep,normal_pars_vertex:tp,normal_vertex:np,normalmap_pars_fragment:ip,clearcoat_normal_fragment_begin:sp,clearcoat_normal_fragment_maps:rp,clearcoat_pars_fragment:ap,iridescence_pars_fragment:op,opaque_fragment:cp,packing:lp,premultiplied_alpha_fragment:hp,project_vertex:up,dithering_fragment:fp,dithering_pars_fragment:dp,roughnessmap_fragment:Ap,roughnessmap_pars_fragment:pp,shadowmap_pars_fragment:gp,shadowmap_pars_vertex:mp,shadowmap_vertex:bp,shadowmask_pars_fragment:xp,skinbase_vertex:Ep,skinning_pars_vertex:_p,skinning_vertex:vp,skinnormal_vertex:yp,specularmap_fragment:Mp,specularmap_pars_fragment:Cp,tonemapping_fragment:Ip,tonemapping_pars_fragment:wp,transmission_fragment:Sp,transmission_pars_fragment:Bp,uv_pars_fragment:Tp,uv_pars_vertex:Rp,uv_vertex:Dp,worldpos_vertex:Lp,background_vert:Pp,background_frag:Up,backgroundCube_vert:Fp,backgroundCube_frag:Np,cube_vert:Qp,cube_frag:kp,depth_vert:Op,depth_frag:Gp,distanceRGBA_vert:zp,distanceRGBA_frag:Hp,equirect_vert:Vp,equirect_frag:Wp,linedashed_vert:qp,linedashed_frag:Xp,meshbasic_vert:Yp,meshbasic_frag:jp,meshlambert_vert:Kp,meshlambert_frag:Jp,meshmatcap_vert:Zp,meshmatcap_frag:$p,meshnormal_vert:eg,meshnormal_frag:tg,meshphong_vert:ng,meshphong_frag:ig,meshphysical_vert:sg,meshphysical_frag:rg,meshtoon_vert:ag,meshtoon_frag:og,points_vert:cg,points_frag:lg,shadow_vert:hg,shadow_frag:ug,sprite_vert:fg,sprite_frag:dg},pe={common:{diffuse:{value:new te(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ve}},envmap:{envMap:{value:null},envMapRotation:{value:new Ve},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ve}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ve}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ve},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ve},normalScale:{value:new oe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ve},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ve}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ve}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ve}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new te(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new te(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0},uvTransform:{value:new Ve}},sprite:{diffuse:{value:new te(16777215)},opacity:{value:1},center:{value:new oe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}}},vn={basic:{uniforms:Ot([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.fog]),vertexShader:We.meshbasic_vert,fragmentShader:We.meshbasic_frag},lambert:{uniforms:Ot([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new te(0)}}]),vertexShader:We.meshlambert_vert,fragmentShader:We.meshlambert_frag},phong:{uniforms:Ot([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new te(0)},specular:{value:new te(1118481)},shininess:{value:30}}]),vertexShader:We.meshphong_vert,fragmentShader:We.meshphong_frag},standard:{uniforms:Ot([pe.common,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.roughnessmap,pe.metalnessmap,pe.fog,pe.lights,{emissive:{value:new te(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag},toon:{uniforms:Ot([pe.common,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.gradientmap,pe.fog,pe.lights,{emissive:{value:new te(0)}}]),vertexShader:We.meshtoon_vert,fragmentShader:We.meshtoon_frag},matcap:{uniforms:Ot([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,{matcap:{value:null}}]),vertexShader:We.meshmatcap_vert,fragmentShader:We.meshmatcap_frag},points:{uniforms:Ot([pe.points,pe.fog]),vertexShader:We.points_vert,fragmentShader:We.points_frag},dashed:{uniforms:Ot([pe.common,pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:We.linedashed_vert,fragmentShader:We.linedashed_frag},depth:{uniforms:Ot([pe.common,pe.displacementmap]),vertexShader:We.depth_vert,fragmentShader:We.depth_frag},normal:{uniforms:Ot([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,{opacity:{value:1}}]),vertexShader:We.meshnormal_vert,fragmentShader:We.meshnormal_frag},sprite:{uniforms:Ot([pe.sprite,pe.fog]),vertexShader:We.sprite_vert,fragmentShader:We.sprite_frag},background:{uniforms:{uvTransform:{value:new Ve},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:We.background_vert,fragmentShader:We.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ve}},vertexShader:We.backgroundCube_vert,fragmentShader:We.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:We.cube_vert,fragmentShader:We.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:We.equirect_vert,fragmentShader:We.equirect_frag},distanceRGBA:{uniforms:Ot([pe.common,pe.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:We.distanceRGBA_vert,fragmentShader:We.distanceRGBA_frag},shadow:{uniforms:Ot([pe.lights,pe.fog,{color:{value:new te(0)},opacity:{value:1}}]),vertexShader:We.shadow_vert,fragmentShader:We.shadow_frag}};vn.physical={uniforms:Ot([vn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ve},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ve},clearcoatNormalScale:{value:new oe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ve},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ve},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ve},sheen:{value:0},sheenColor:{value:new te(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ve},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ve},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ve},transmissionSamplerSize:{value:new oe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ve},attenuationDistance:{value:0},attenuationColor:{value:new te(0)},specularColor:{value:new te(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ve},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ve},anisotropyVector:{value:new oe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ve}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag};const _r={r:0,b:0,g:0},fi=new Zt,Ag=new Ne;function pg(s,e,t,n,i,r,a){const o=new te(0);let c=r===!0?0:1,l,h,u=null,f=0,d=null;function m(b){let x=b.isScene===!0?b.background:null;return x&&x.isTexture&&(x=(b.backgroundBlurriness>0?t:e).get(x)),x}function p(b){let x=!1;const E=m(b);E===null?A(o,c):E&&E.isColor&&(A(E,1),x=!0);const C=s.xr.getEnvironmentBlendMode();C==="additive"?n.buffers.color.setClear(0,0,0,1,a):C==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(s.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function g(b,x){const E=m(x);E&&(E.isCubeTexture||E.mapping===sa)?(h===void 0&&(h=new qe(new yt(1,1,1),new Mn({name:"BackgroundCubeMaterial",uniforms:ss(vn.backgroundCube.uniforms),vertexShader:vn.backgroundCube.vertexShader,fragmentShader:vn.backgroundCube.fragmentShader,side:Ft,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(C,_,v){this.matrixWorld.copyPosition(v.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),fi.copy(x.backgroundRotation),fi.x*=-1,fi.y*=-1,fi.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(fi.y*=-1,fi.z*=-1),h.material.uniforms.envMap.value=E,h.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Ag.makeRotationFromEuler(fi)),h.material.toneMapped=Je.getTransfer(E.colorSpace)!==ot,(u!==E||f!==E.version||d!==s.toneMapping)&&(h.material.needsUpdate=!0,u=E,f=E.version,d=s.toneMapping),h.layers.enableAll(),b.unshift(h,h.geometry,h.material,0,0,null)):E&&E.isTexture&&(l===void 0&&(l=new qe(new Vn(2,2),new Mn({name:"BackgroundMaterial",uniforms:ss(vn.background.uniforms),vertexShader:vn.background.vertexShader,fragmentShader:vn.background.fragmentShader,side:zn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=E,l.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,l.material.toneMapped=Je.getTransfer(E.colorSpace)!==ot,E.matrixAutoUpdate===!0&&E.updateMatrix(),l.material.uniforms.uvTransform.value.copy(E.matrix),(u!==E||f!==E.version||d!==s.toneMapping)&&(l.material.needsUpdate=!0,u=E,f=E.version,d=s.toneMapping),l.layers.enableAll(),b.unshift(l,l.geometry,l.material,0,0,null))}function A(b,x){b.getRGB(_r,nu(s)),n.buffers.color.setClear(_r.r,_r.g,_r.b,x,a)}return{getClearColor:function(){return o},setClearColor:function(b,x=1){o.set(b),c=x,A(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(b){c=b,A(o,c)},render:p,addToRenderList:g}}function gg(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=f(null);let r=i,a=!1;function o(y,B,U,L,Q){let z=!1;const N=u(L,U,B);r!==N&&(r=N,l(r.object)),z=d(y,L,U,Q),z&&m(y,L,U,Q),Q!==null&&e.update(Q,s.ELEMENT_ARRAY_BUFFER),(z||a)&&(a=!1,E(y,B,U,L),Q!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(Q).buffer))}function c(){return s.createVertexArray()}function l(y){return s.bindVertexArray(y)}function h(y){return s.deleteVertexArray(y)}function u(y,B,U){const L=U.wireframe===!0;let Q=n[y.id];Q===void 0&&(Q={},n[y.id]=Q);let z=Q[B.id];z===void 0&&(z={},Q[B.id]=z);let N=z[L];return N===void 0&&(N=f(c()),z[L]=N),N}function f(y){const B=[],U=[],L=[];for(let Q=0;Q<t;Q++)B[Q]=0,U[Q]=0,L[Q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:U,attributeDivisors:L,object:y,attributes:{},index:null}}function d(y,B,U,L){const Q=r.attributes,z=B.attributes;let N=0;const H=U.getAttributes();for(const O in H)if(H[O].location>=0){const Z=Q[O];let ie=z[O];if(ie===void 0&&(O==="instanceMatrix"&&y.instanceMatrix&&(ie=y.instanceMatrix),O==="instanceColor"&&y.instanceColor&&(ie=y.instanceColor)),Z===void 0||Z.attribute!==ie||ie&&Z.data!==ie.data)return!0;N++}return r.attributesNum!==N||r.index!==L}function m(y,B,U,L){const Q={},z=B.attributes;let N=0;const H=U.getAttributes();for(const O in H)if(H[O].location>=0){let Z=z[O];Z===void 0&&(O==="instanceMatrix"&&y.instanceMatrix&&(Z=y.instanceMatrix),O==="instanceColor"&&y.instanceColor&&(Z=y.instanceColor));const ie={};ie.attribute=Z,Z&&Z.data&&(ie.data=Z.data),Q[O]=ie,N++}r.attributes=Q,r.attributesNum=N,r.index=L}function p(){const y=r.newAttributes;for(let B=0,U=y.length;B<U;B++)y[B]=0}function g(y){A(y,0)}function A(y,B){const U=r.newAttributes,L=r.enabledAttributes,Q=r.attributeDivisors;U[y]=1,L[y]===0&&(s.enableVertexAttribArray(y),L[y]=1),Q[y]!==B&&(s.vertexAttribDivisor(y,B),Q[y]=B)}function b(){const y=r.newAttributes,B=r.enabledAttributes;for(let U=0,L=B.length;U<L;U++)B[U]!==y[U]&&(s.disableVertexAttribArray(U),B[U]=0)}function x(y,B,U,L,Q,z,N){N===!0?s.vertexAttribIPointer(y,B,U,Q,z):s.vertexAttribPointer(y,B,U,L,Q,z)}function E(y,B,U,L){p();const Q=L.attributes,z=U.getAttributes(),N=B.defaultAttributeValues;for(const H in z){const O=z[H];if(O.location>=0){let j=Q[H];if(j===void 0&&(H==="instanceMatrix"&&y.instanceMatrix&&(j=y.instanceMatrix),H==="instanceColor"&&y.instanceColor&&(j=y.instanceColor)),j!==void 0){const Z=j.normalized,ie=j.itemSize,le=e.get(j);if(le===void 0)continue;const Te=le.buffer,q=le.type,se=le.bytesPerElement,ue=q===s.INT||q===s.UNSIGNED_INT||j.gpuType===ac;if(j.isInterleavedBufferAttribute){const re=j.data,Ie=re.stride,Pe=j.offset;if(re.isInstancedInterleavedBuffer){for(let Re=0;Re<O.locationSize;Re++)A(O.location+Re,re.meshPerAttribute);y.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let Re=0;Re<O.locationSize;Re++)g(O.location+Re);s.bindBuffer(s.ARRAY_BUFFER,Te);for(let Re=0;Re<O.locationSize;Re++)x(O.location+Re,ie/O.locationSize,q,Z,Ie*se,(Pe+ie/O.locationSize*Re)*se,ue)}else{if(j.isInstancedBufferAttribute){for(let re=0;re<O.locationSize;re++)A(O.location+re,j.meshPerAttribute);y.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let re=0;re<O.locationSize;re++)g(O.location+re);s.bindBuffer(s.ARRAY_BUFFER,Te);for(let re=0;re<O.locationSize;re++)x(O.location+re,ie/O.locationSize,q,Z,ie*se,ie/O.locationSize*re*se,ue)}}else if(N!==void 0){const Z=N[H];if(Z!==void 0)switch(Z.length){case 2:s.vertexAttrib2fv(O.location,Z);break;case 3:s.vertexAttrib3fv(O.location,Z);break;case 4:s.vertexAttrib4fv(O.location,Z);break;default:s.vertexAttrib1fv(O.location,Z)}}}}b()}function C(){w();for(const y in n){const B=n[y];for(const U in B){const L=B[U];for(const Q in L)h(L[Q].object),delete L[Q];delete B[U]}delete n[y]}}function _(y){if(n[y.id]===void 0)return;const B=n[y.id];for(const U in B){const L=B[U];for(const Q in L)h(L[Q].object),delete L[Q];delete B[U]}delete n[y.id]}function v(y){for(const B in n){const U=n[B];if(U[y.id]===void 0)continue;const L=U[y.id];for(const Q in L)h(L[Q].object),delete L[Q];delete U[y.id]}}function w(){M(),a=!0,r!==i&&(r=i,l(r.object))}function M(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:w,resetDefaultState:M,dispose:C,releaseStatesOfGeometry:_,releaseStatesOfProgram:v,initAttributes:p,enableAttribute:g,disableUnusedAttributes:b}}function mg(s,e,t){let n;function i(l){n=l}function r(l,h){s.drawArrays(n,l,h),t.update(h,n,1)}function a(l,h,u){u!==0&&(s.drawArraysInstanced(n,l,h,u),t.update(h,n,u))}function o(l,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let d=0;for(let m=0;m<u;m++)d+=h[m];t.update(d,n,1)}function c(l,h,u,f){if(u===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let m=0;m<l.length;m++)a(l[m],h[m],f[m]);else{d.multiDrawArraysInstancedWEBGL(n,l,0,h,0,f,0,u);let m=0;for(let p=0;p<u;p++)m+=h[p]*f[p];t.update(m,n,1)}}this.setMode=i,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function bg(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const v=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(v.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(v){return!(v!==St&&n.convert(v)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(v){const w=v===bn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(v!==wt&&n.convert(v)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&v!==Ut&&!w)}function c(v){if(v==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";v="mediump"}return v==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const u=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),d=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),m=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),A=s.getParameter(s.MAX_VERTEX_ATTRIBS),b=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),x=s.getParameter(s.MAX_VARYING_VECTORS),E=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),C=m>0,_=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:u,reverseDepthBuffer:f,maxTextures:d,maxVertexTextures:m,maxTextureSize:p,maxCubemapSize:g,maxAttributes:A,maxVertexUniforms:b,maxVaryings:x,maxFragmentUniforms:E,vertexTextures:C,maxSamples:_}}function xg(s){const e=this;let t=null,n=0,i=!1,r=!1;const a=new gi,o=new Ve,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const d=u.length!==0||f||n!==0||i;return i=f,n=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){t=h(u,f,0)},this.setState=function(u,f,d){const m=u.clippingPlanes,p=u.clipIntersection,g=u.clipShadows,A=s.get(u);if(!i||m===null||m.length===0||r&&!g)r?h(null):l();else{const b=r?0:n,x=b*4;let E=A.clippingState||null;c.value=E,E=h(m,f,x,d);for(let C=0;C!==x;++C)E[C]=t[C];A.clippingState=E,this.numIntersection=p?this.numPlanes:0,this.numPlanes+=b}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,f,d,m){const p=u!==null?u.length:0;let g=null;if(p!==0){if(g=c.value,m!==!0||g===null){const A=d+p*4,b=f.matrixWorldInverse;o.getNormalMatrix(b),(g===null||g.length<A)&&(g=new Float32Array(A));for(let x=0,E=d;x!==p;++x,E+=4)a.copy(u[x]).applyMatrix4(b,o),a.normal.toArray(g,E),g[E+3]=a.constant}c.value=g,c.needsUpdate=!0}return e.numPlanes=p,e.numIntersection=0,g}}function Eg(s){let e=new WeakMap;function t(a,o){return o===Co?a.mapping=vi:o===Io&&(a.mapping=es),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Co||o===Io)if(e.has(a)){const c=e.get(a).texture;return t(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new Rd(c.height);return l.fromEquirectangularTexture(s,a),e.set(a,l),a.addEventListener("dispose",i),t(l.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class pc extends iu{constructor(e=-1,t=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=i+t,c=i-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Xi=4,gl=[.125,.215,.35,.446,.526,.582],xi=20,Qa=new pc,ml=new te;let ka=null,Oa=0,Ga=0,za=!1;const mi=(1+Math.sqrt(5))/2,zi=1/mi,bl=[new R(-mi,zi,0),new R(mi,zi,0),new R(-zi,0,mi),new R(zi,0,mi),new R(0,mi,-zi),new R(0,mi,zi),new R(-1,1,-1),new R(1,1,-1),new R(-1,1,1),new R(1,1,1)];class Xo{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){ka=this._renderer.getRenderTarget(),Oa=this._renderer.getActiveCubeFace(),Ga=this._renderer.getActiveMipmapLevel(),za=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=_l(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=El(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ka,Oa,Ga),this._renderer.xr.enabled=za,e.scissorTest=!1,vr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===vi||e.mapping===es?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ka=this._renderer.getRenderTarget(),Oa=this._renderer.getActiveCubeFace(),Ga=this._renderer.getActiveMipmapLevel(),za=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Pt,minFilter:Pt,generateMipmaps:!1,type:bn,format:St,colorSpace:Nt,depthBuffer:!1},i=xl(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=xl(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=_g(r)),this._blurMaterial=vg(r,e,t)}return i}_compileMaterial(e){const t=new qe(this._lodPlanes[0],e);this._renderer.compile(t,Qa)}_sceneToCubeUV(e,t,n,i){const o=new Gt(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(ml),h.toneMapping=si,h.autoClear=!1;const d=new Tt({name:"PMREM.Background",side:Ft,depthWrite:!1,depthTest:!1}),m=new qe(new yt,d);let p=!1;const g=e.background;g?g.isColor&&(d.color.copy(g),e.background=null,p=!0):(d.color.copy(ml),p=!0);for(let A=0;A<6;A++){const b=A%3;b===0?(o.up.set(0,c[A],0),o.lookAt(l[A],0,0)):b===1?(o.up.set(0,0,c[A]),o.lookAt(0,l[A],0)):(o.up.set(0,c[A],0),o.lookAt(0,0,l[A]));const x=this._cubeSize;vr(i,b*x,A>2?x:0,x,x),h.setRenderTarget(i),p&&h.render(m,o),h.render(e,o)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=f,h.autoClear=u,e.background=g}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===vi||e.mapping===es;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=_l()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=El());const r=i?this._cubemapMaterial:this._equirectMaterial,a=new qe(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;const c=this._cubeSize;vr(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,Qa)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let r=1;r<i;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=bl[(i-r-1)%bl.length];this._blur(e,r-1,r,a,o)}t.autoClear=n}_blur(e,t,n,i,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",r),this._halfBlur(a,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new qe(this._lodPlanes[i],l),f=l.uniforms,d=this._sizeLods[n]-1,m=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*xi-1),p=r/m,g=isFinite(r)?1+Math.floor(h*p):xi;g>xi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${xi}`);const A=[];let b=0;for(let v=0;v<xi;++v){const w=v/p,M=Math.exp(-w*w/2);A.push(M),v===0?b+=M:v<g&&(b+=2*M)}for(let v=0;v<A.length;v++)A[v]=A[v]/b;f.envMap.value=e.texture,f.samples.value=g,f.weights.value=A,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:x}=this;f.dTheta.value=m,f.mipInt.value=x-n;const E=this._sizeLods[i],C=3*E*(i>x-Xi?i-x+Xi:0),_=4*(this._cubeSize-E);vr(t,C,_,3*E,2*E),c.setRenderTarget(t),c.render(u,Qa)}}function _g(s){const e=[],t=[],n=[];let i=s;const r=s-Xi+1+gl.length;for(let a=0;a<r;a++){const o=Math.pow(2,i);t.push(o);let c=1/o;a>s-Xi?c=gl[a-s+Xi-1]:a===0&&(c=0),n.push(c);const l=1/(o-2),h=-l,u=1+l,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,m=6,p=3,g=2,A=1,b=new Float32Array(p*m*d),x=new Float32Array(g*m*d),E=new Float32Array(A*m*d);for(let _=0;_<d;_++){const v=_%3*2/3-1,w=_>2?0:-1,M=[v,w,0,v+2/3,w,0,v+2/3,w+1,0,v,w,0,v+2/3,w+1,0,v,w+1,0];b.set(M,p*m*_),x.set(f,g*m*_);const y=[_,_,_,_,_,_];E.set(y,A*m*_)}const C=new ht;C.setAttribute("position",new Ke(b,p)),C.setAttribute("uv",new Ke(x,g)),C.setAttribute("faceIndex",new Ke(E,A)),e.push(C),i>Xi&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function xl(s,e,t){const n=new Mi(s,e,t);return n.texture.mapping=sa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function vr(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function vg(s,e,t){const n=new Float32Array(xi),i=new R(0,1,0);return new Mn({name:"SphericalGaussianBlur",defines:{n:xi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:gc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ii,depthTest:!1,depthWrite:!1})}function El(){return new Mn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:gc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ii,depthTest:!1,depthWrite:!1})}function _l(){return new Mn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:gc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ii,depthTest:!1,depthWrite:!1})}function gc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function yg(s){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const c=o.mapping,l=c===Co||c===Io,h=c===vi||c===es;if(l||h){let u=e.get(o);const f=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return t===null&&(t=new Xo(s)),u=l?t.fromEquirectangular(o,u):t.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),u.texture;if(u!==void 0)return u.texture;{const d=o.image;return l&&d&&d.height>0||h&&d&&i(d)?(t===null&&(t=new Xo(s)),u=l?t.fromEquirectangular(o):t.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function i(o){let c=0;const l=6;for(let h=0;h<l;h++)o[h]!==void 0&&c++;return c===l}function r(o){const c=o.target;c.removeEventListener("dispose",r);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function Mg(s){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&Ts("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Cg(s,e,t,n){const i={},r=new WeakMap;function a(u){const f=u.target;f.index!==null&&e.remove(f.index);for(const m in f.attributes)e.remove(f.attributes[m]);for(const m in f.morphAttributes){const p=f.morphAttributes[m];for(let g=0,A=p.length;g<A;g++)e.remove(p[g])}f.removeEventListener("dispose",a),delete i[f.id];const d=r.get(f);d&&(e.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(u,f){return i[f.id]===!0||(f.addEventListener("dispose",a),i[f.id]=!0,t.memory.geometries++),f}function c(u){const f=u.attributes;for(const m in f)e.update(f[m],s.ARRAY_BUFFER);const d=u.morphAttributes;for(const m in d){const p=d[m];for(let g=0,A=p.length;g<A;g++)e.update(p[g],s.ARRAY_BUFFER)}}function l(u){const f=[],d=u.index,m=u.attributes.position;let p=0;if(d!==null){const b=d.array;p=d.version;for(let x=0,E=b.length;x<E;x+=3){const C=b[x+0],_=b[x+1],v=b[x+2];f.push(C,_,_,v,v,C)}}else if(m!==void 0){const b=m.array;p=m.version;for(let x=0,E=b.length/3-1;x<E;x+=3){const C=x+0,_=x+1,v=x+2;f.push(C,_,_,v,v,C)}}else return;const g=new(jh(f)?tu:eu)(f,1);g.version=p;const A=r.get(u);A&&e.remove(A),r.set(u,g)}function h(u){const f=r.get(u);if(f){const d=u.index;d!==null&&f.version<d.version&&l(u)}else l(u);return r.get(u)}return{get:o,update:c,getWireframeAttribute:h}}function Ig(s,e,t){let n;function i(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function c(f,d){s.drawElements(n,d,r,f*a),t.update(d,n,1)}function l(f,d,m){m!==0&&(s.drawElementsInstanced(n,d,r,f*a,m),t.update(d,n,m))}function h(f,d,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,f,0,m);let g=0;for(let A=0;A<m;A++)g+=d[A];t.update(g,n,1)}function u(f,d,m,p){if(m===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let A=0;A<f.length;A++)l(f[A]/a,d[A],p[A]);else{g.multiDrawElementsInstancedWEBGL(n,d,0,r,f,0,p,0,m);let A=0;for(let b=0;b<m;b++)A+=d[b]*p[b];t.update(A,n,1)}}this.setMode=i,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function wg(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case s.TRIANGLES:t.triangles+=o*(r/3);break;case s.LINES:t.lines+=o*(r/2);break;case s.LINE_STRIP:t.lines+=o*(r-1);break;case s.LINE_LOOP:t.lines+=o*r;break;case s.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Sg(s,e,t){const n=new WeakMap,i=new et;function r(a,o,c){const l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let f=n.get(o);if(f===void 0||f.count!==u){let M=function(){v.dispose(),n.delete(o),o.removeEventListener("dispose",M)};f!==void 0&&f.texture.dispose();const d=o.morphAttributes.position!==void 0,m=o.morphAttributes.normal!==void 0,p=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],A=o.morphAttributes.normal||[],b=o.morphAttributes.color||[];let x=0;d===!0&&(x=1),m===!0&&(x=2),p===!0&&(x=3);let E=o.attributes.position.count*x,C=1;E>e.maxTextureSize&&(C=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);const _=new Float32Array(E*C*4*u),v=new dc(_,E,C,u);v.type=Ut,v.needsUpdate=!0;const w=x*4;for(let y=0;y<u;y++){const B=g[y],U=A[y],L=b[y],Q=E*C*4*y;for(let z=0;z<B.count;z++){const N=z*w;d===!0&&(i.fromBufferAttribute(B,z),_[Q+N+0]=i.x,_[Q+N+1]=i.y,_[Q+N+2]=i.z,_[Q+N+3]=0),m===!0&&(i.fromBufferAttribute(U,z),_[Q+N+4]=i.x,_[Q+N+5]=i.y,_[Q+N+6]=i.z,_[Q+N+7]=0),p===!0&&(i.fromBufferAttribute(L,z),_[Q+N+8]=i.x,_[Q+N+9]=i.y,_[Q+N+10]=i.z,_[Q+N+11]=L.itemSize===4?i.w:1)}}f={count:u,texture:v,size:new oe(E,C)},n.set(o,f),o.addEventListener("dispose",M)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(s,"morphTexture",a.morphTexture,t);else{let d=0;for(let p=0;p<l.length;p++)d+=l[p];const m=o.morphTargetsRelative?1:1-d;c.getUniforms().setValue(s,"morphTargetBaseInfluence",m),c.getUniforms().setValue(s,"morphTargetInfluences",l)}c.getUniforms().setValue(s,"morphTargetsTexture",f.texture,t),c.getUniforms().setValue(s,"morphTargetsTextureSize",f.size)}return{update:r}}function Bg(s,e,t,n){let i=new WeakMap;function r(c){const l=n.render.frame,h=c.geometry,u=e.get(c,h);if(i.get(u)!==l&&(e.update(u),i.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),i.get(c)!==l&&(t.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,s.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){const f=c.skeleton;i.get(f)!==l&&(f.update(),i.set(f,l))}return u}function a(){i=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:a}}class au extends Et{constructor(e,t,n,i,r,a,o,c,l,h=Ki){if(h!==Ki&&h!==ns)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Ki&&(n=yi),n===void 0&&h===ns&&(n=ts),super(null,i,r,a,o,c,h,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:zt,this.minFilter=c!==void 0?c:zt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const ou=new Et,vl=new au(1,1),cu=new dc,lu=new Jh,hu=new su,yl=[],Ml=[],Cl=new Float32Array(16),Il=new Float32Array(9),wl=new Float32Array(4);function ls(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=yl[i];if(r===void 0&&(r=new Float32Array(i),yl[i]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,s[a].toArray(r,o)}return r}function Mt(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function Ct(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function ca(s,e){let t=Ml[e];t===void 0&&(t=new Int32Array(e),Ml[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function Tg(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function Rg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mt(t,e))return;s.uniform2fv(this.addr,e),Ct(t,e)}}function Dg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Mt(t,e))return;s.uniform3fv(this.addr,e),Ct(t,e)}}function Lg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mt(t,e))return;s.uniform4fv(this.addr,e),Ct(t,e)}}function Pg(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Mt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Ct(t,e)}else{if(Mt(t,n))return;wl.set(n),s.uniformMatrix2fv(this.addr,!1,wl),Ct(t,n)}}function Ug(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Mt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Ct(t,e)}else{if(Mt(t,n))return;Il.set(n),s.uniformMatrix3fv(this.addr,!1,Il),Ct(t,n)}}function Fg(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Mt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Ct(t,e)}else{if(Mt(t,n))return;Cl.set(n),s.uniformMatrix4fv(this.addr,!1,Cl),Ct(t,n)}}function Ng(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function Qg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mt(t,e))return;s.uniform2iv(this.addr,e),Ct(t,e)}}function kg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Mt(t,e))return;s.uniform3iv(this.addr,e),Ct(t,e)}}function Og(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mt(t,e))return;s.uniform4iv(this.addr,e),Ct(t,e)}}function Gg(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function zg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mt(t,e))return;s.uniform2uiv(this.addr,e),Ct(t,e)}}function Hg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Mt(t,e))return;s.uniform3uiv(this.addr,e),Ct(t,e)}}function Vg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mt(t,e))return;s.uniform4uiv(this.addr,e),Ct(t,e)}}function Wg(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(vl.compareFunction=Yh,r=vl):r=ou,t.setTexture2D(e||r,i)}function qg(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||lu,i)}function Xg(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||hu,i)}function Yg(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||cu,i)}function jg(s){switch(s){case 5126:return Tg;case 35664:return Rg;case 35665:return Dg;case 35666:return Lg;case 35674:return Pg;case 35675:return Ug;case 35676:return Fg;case 5124:case 35670:return Ng;case 35667:case 35671:return Qg;case 35668:case 35672:return kg;case 35669:case 35673:return Og;case 5125:return Gg;case 36294:return zg;case 36295:return Hg;case 36296:return Vg;case 35678:case 36198:case 36298:case 36306:case 35682:return Wg;case 35679:case 36299:case 36307:return qg;case 35680:case 36300:case 36308:case 36293:return Xg;case 36289:case 36303:case 36311:case 36292:return Yg}}function Kg(s,e){s.uniform1fv(this.addr,e)}function Jg(s,e){const t=ls(e,this.size,2);s.uniform2fv(this.addr,t)}function Zg(s,e){const t=ls(e,this.size,3);s.uniform3fv(this.addr,t)}function $g(s,e){const t=ls(e,this.size,4);s.uniform4fv(this.addr,t)}function em(s,e){const t=ls(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function tm(s,e){const t=ls(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function nm(s,e){const t=ls(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function im(s,e){s.uniform1iv(this.addr,e)}function sm(s,e){s.uniform2iv(this.addr,e)}function rm(s,e){s.uniform3iv(this.addr,e)}function am(s,e){s.uniform4iv(this.addr,e)}function om(s,e){s.uniform1uiv(this.addr,e)}function cm(s,e){s.uniform2uiv(this.addr,e)}function lm(s,e){s.uniform3uiv(this.addr,e)}function hm(s,e){s.uniform4uiv(this.addr,e)}function um(s,e,t){const n=this.cache,i=e.length,r=ca(t,i);Mt(n,r)||(s.uniform1iv(this.addr,r),Ct(n,r));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||ou,r[a])}function fm(s,e,t){const n=this.cache,i=e.length,r=ca(t,i);Mt(n,r)||(s.uniform1iv(this.addr,r),Ct(n,r));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||lu,r[a])}function dm(s,e,t){const n=this.cache,i=e.length,r=ca(t,i);Mt(n,r)||(s.uniform1iv(this.addr,r),Ct(n,r));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||hu,r[a])}function Am(s,e,t){const n=this.cache,i=e.length,r=ca(t,i);Mt(n,r)||(s.uniform1iv(this.addr,r),Ct(n,r));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||cu,r[a])}function pm(s){switch(s){case 5126:return Kg;case 35664:return Jg;case 35665:return Zg;case 35666:return $g;case 35674:return em;case 35675:return tm;case 35676:return nm;case 5124:case 35670:return im;case 35667:case 35671:return sm;case 35668:case 35672:return rm;case 35669:case 35673:return am;case 5125:return om;case 36294:return cm;case 36295:return lm;case 36296:return hm;case 35678:case 36198:case 36298:case 36306:case 35682:return um;case 35679:case 36299:case 36307:return fm;case 35680:case 36300:case 36308:case 36293:return dm;case 36289:case 36303:case 36311:case 36292:return Am}}class gm{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=jg(t.type)}}class mm{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=pm(t.type)}}class bm{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,a=i.length;r!==a;++r){const o=i[r];o.setValue(e,t[o.id],n)}}}const Ha=/(\w+)(\])?(\[|\.)?/g;function Sl(s,e){s.seq.push(e),s.map[e.id]=e}function xm(s,e,t){const n=s.name,i=n.length;for(Ha.lastIndex=0;;){const r=Ha.exec(n),a=Ha.lastIndex;let o=r[1];const c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===i){Sl(t,l===void 0?new gm(o,s,e):new mm(o,s,e));break}else{let u=t.map[o];u===void 0&&(u=new bm(o),Sl(t,u)),t=u}}}class Or{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),a=e.getUniformLocation(t,r.name);xm(r,a,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,a=t.length;r!==a;++r){const o=t[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function Bl(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}const Em=37297;let _m=0;function vm(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=i;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const Tl=new Ve;function ym(s){Je._getMatrix(Tl,Je.workingColorSpace,s);const e=`mat3( ${Tl.elements.map(t=>t.toFixed(4))} )`;switch(Je.getTransfer(s)){case aa:return[e,"LinearTransferOETF"];case ot:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function Rl(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const a=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+vm(s.getShaderSource(e),a)}else return i}function Mm(s,e){const t=ym(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Cm(s,e){let t;switch(e){case wf:t="Linear";break;case Sf:t="Reinhard";break;case Bf:t="Cineon";break;case Fh:t="ACESFilmic";break;case Rf:t="AgX";break;case Df:t="Neutral";break;case Tf:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const yr=new R;function Im(){Je.getLuminanceCoefficients(yr);const s=yr.x.toFixed(4),e=yr.y.toFixed(4),t=yr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function wm(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Rs).join(`
`)}function Sm(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Bm(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),a=r.name;let o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:s.getAttribLocation(e,a),locationSize:o}}return t}function Rs(s){return s!==""}function Dl(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ll(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Tm=/^[ \t]*#include +<([\w\d./]+)>/gm;function Yo(s){return s.replace(Tm,Dm)}const Rm=new Map;function Dm(s,e){let t=We[e];if(t===void 0){const n=Rm.get(e);if(n!==void 0)t=We[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Yo(t)}const Lm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Pl(s){return s.replace(Lm,Pm)}function Pm(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Ul(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Um(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Ph?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===Uh?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Nn&&(e="SHADOWMAP_TYPE_VSM"),e}function Fm(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case vi:case es:e="ENVMAP_TYPE_CUBE";break;case sa:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Nm(s){let e="ENVMAP_MODE_REFLECTION";return s.envMap&&s.envMapMode===es&&(e="ENVMAP_MODE_REFRACTION"),e}function Qm(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case ia:e="ENVMAP_BLENDING_MULTIPLY";break;case Cf:e="ENVMAP_BLENDING_MIX";break;case If:e="ENVMAP_BLENDING_ADD";break}return e}function km(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Om(s,e,t,n){const i=s.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const c=Um(t),l=Fm(t),h=Nm(t),u=Qm(t),f=km(t),d=wm(t),m=Sm(r),p=i.createProgram();let g,A,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Rs).join(`
`),g.length>0&&(g+=`
`),A=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Rs).join(`
`),A.length>0&&(A+=`
`)):(g=[Ul(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Rs).join(`
`),A=[Ul(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==si?"#define TONE_MAPPING":"",t.toneMapping!==si?We.tonemapping_pars_fragment:"",t.toneMapping!==si?Cm("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",We.colorspace_pars_fragment,Mm("linearToOutputTexel",t.outputColorSpace),Im(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Rs).join(`
`)),a=Yo(a),a=Dl(a,t),a=Ll(a,t),o=Yo(o),o=Dl(o,t),o=Ll(o,t),a=Pl(a),o=Pl(o),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,g=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,A=["#define varying in",t.glslVersion===Yc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Yc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+A);const x=b+g+a,E=b+A+o,C=Bl(i,i.VERTEX_SHADER,x),_=Bl(i,i.FRAGMENT_SHADER,E);i.attachShader(p,C),i.attachShader(p,_),t.index0AttributeName!==void 0?i.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(p,0,"position"),i.linkProgram(p);function v(B){if(s.debug.checkShaderErrors){const U=i.getProgramInfoLog(p).trim(),L=i.getShaderInfoLog(C).trim(),Q=i.getShaderInfoLog(_).trim();let z=!0,N=!0;if(i.getProgramParameter(p,i.LINK_STATUS)===!1)if(z=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,p,C,_);else{const H=Rl(i,C,"vertex"),O=Rl(i,_,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(p,i.VALIDATE_STATUS)+`

Material Name: `+B.name+`
Material Type: `+B.type+`

Program Info Log: `+U+`
`+H+`
`+O)}else U!==""?console.warn("THREE.WebGLProgram: Program Info Log:",U):(L===""||Q==="")&&(N=!1);N&&(B.diagnostics={runnable:z,programLog:U,vertexShader:{log:L,prefix:g},fragmentShader:{log:Q,prefix:A}})}i.deleteShader(C),i.deleteShader(_),w=new Or(i,p),M=Bm(i,p)}let w;this.getUniforms=function(){return w===void 0&&v(this),w};let M;this.getAttributes=function(){return M===void 0&&v(this),M};let y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=i.getProgramParameter(p,Em)),y},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(p),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=_m++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=C,this.fragmentShader=_,this}let Gm=0;class zm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Hm(e),t.set(e,n)),n}}class Hm{constructor(e){this.id=Gm++,this.code=e,this.usedTimes=0}}function Vm(s,e,t,n,i,r,a){const o=new Zh,c=new zm,l=new Set,h=[],u=i.logarithmicDepthBuffer,f=i.vertexTextures;let d=i.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(M){return l.add(M),M===0?"uv":`uv${M}`}function g(M,y,B,U,L){const Q=U.fog,z=L.geometry,N=M.isMeshStandardMaterial?U.environment:null,H=(M.isMeshStandardMaterial?t:e).get(M.envMap||N),O=H&&H.mapping===sa?H.image.height:null,j=m[M.type];M.precision!==null&&(d=i.getMaxPrecision(M.precision),d!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",d,"instead."));const Z=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,ie=Z!==void 0?Z.length:0;let le=0;z.morphAttributes.position!==void 0&&(le=1),z.morphAttributes.normal!==void 0&&(le=2),z.morphAttributes.color!==void 0&&(le=3);let Te,q,se,ue;if(j){const st=vn[j];Te=st.vertexShader,q=st.fragmentShader}else Te=M.vertexShader,q=M.fragmentShader,c.update(M),se=c.getVertexShaderID(M),ue=c.getFragmentShaderID(M);const re=s.getRenderTarget(),Ie=s.state.buffers.depth.getReversed(),Pe=L.isInstancedMesh===!0,Re=L.isBatchedMesh===!0,Qe=!!M.map,$=!!M.matcap,ce=!!H,D=!!M.aoMap,Ce=!!M.lightMap,ae=!!M.bumpMap,me=!!M.normalMap,fe=!!M.displacementMap,Ue=!!M.emissiveMap,_e=!!M.metalnessMap,T=!!M.roughnessMap,I=M.anisotropy>0,P=M.clearcoat>0,X=M.dispersion>0,J=M.iridescence>0,K=M.sheen>0,ve=M.transmission>0,de=I&&!!M.anisotropyMap,be=P&&!!M.clearcoatMap,ke=P&&!!M.clearcoatNormalMap,ee=P&&!!M.clearcoatRoughnessMap,ye=J&&!!M.iridescenceMap,Le=J&&!!M.iridescenceThicknessMap,Fe=K&&!!M.sheenColorMap,Me=K&&!!M.sheenRoughnessMap,je=!!M.specularMap,Ge=!!M.specularColorMap,it=!!M.specularIntensityMap,F=ve&&!!M.transmissionMap,Ae=ve&&!!M.thicknessMap,Y=!!M.gradientMap,ne=!!M.alphaMap,xe=M.alphaTest>0,ge=!!M.alphaHash,ze=!!M.extensions;let gt=si;M.toneMapped&&(re===null||re.isXRRenderTarget===!0)&&(gt=s.toneMapping);const Rt={shaderID:j,shaderType:M.type,shaderName:M.name,vertexShader:Te,fragmentShader:q,defines:M.defines,customVertexShaderID:se,customFragmentShaderID:ue,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:d,batching:Re,batchingColor:Re&&L._colorsTexture!==null,instancing:Pe,instancingColor:Pe&&L.instanceColor!==null,instancingMorph:Pe&&L.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:re===null?s.outputColorSpace:re.isXRRenderTarget===!0?re.texture.colorSpace:Nt,alphaToCoverage:!!M.alphaToCoverage,map:Qe,matcap:$,envMap:ce,envMapMode:ce&&H.mapping,envMapCubeUVHeight:O,aoMap:D,lightMap:Ce,bumpMap:ae,normalMap:me,displacementMap:f&&fe,emissiveMap:Ue,normalMapObjectSpace:me&&M.normalMapType===Qf,normalMapTangentSpace:me&&M.normalMapType===ra,metalnessMap:_e,roughnessMap:T,anisotropy:I,anisotropyMap:de,clearcoat:P,clearcoatMap:be,clearcoatNormalMap:ke,clearcoatRoughnessMap:ee,dispersion:X,iridescence:J,iridescenceMap:ye,iridescenceThicknessMap:Le,sheen:K,sheenColorMap:Fe,sheenRoughnessMap:Me,specularMap:je,specularColorMap:Ge,specularIntensityMap:it,transmission:ve,transmissionMap:F,thicknessMap:Ae,gradientMap:Y,opaque:M.transparent===!1&&M.blending===ji&&M.alphaToCoverage===!1,alphaMap:ne,alphaTest:xe,alphaHash:ge,combine:M.combine,mapUv:Qe&&p(M.map.channel),aoMapUv:D&&p(M.aoMap.channel),lightMapUv:Ce&&p(M.lightMap.channel),bumpMapUv:ae&&p(M.bumpMap.channel),normalMapUv:me&&p(M.normalMap.channel),displacementMapUv:fe&&p(M.displacementMap.channel),emissiveMapUv:Ue&&p(M.emissiveMap.channel),metalnessMapUv:_e&&p(M.metalnessMap.channel),roughnessMapUv:T&&p(M.roughnessMap.channel),anisotropyMapUv:de&&p(M.anisotropyMap.channel),clearcoatMapUv:be&&p(M.clearcoatMap.channel),clearcoatNormalMapUv:ke&&p(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ee&&p(M.clearcoatRoughnessMap.channel),iridescenceMapUv:ye&&p(M.iridescenceMap.channel),iridescenceThicknessMapUv:Le&&p(M.iridescenceThicknessMap.channel),sheenColorMapUv:Fe&&p(M.sheenColorMap.channel),sheenRoughnessMapUv:Me&&p(M.sheenRoughnessMap.channel),specularMapUv:je&&p(M.specularMap.channel),specularColorMapUv:Ge&&p(M.specularColorMap.channel),specularIntensityMapUv:it&&p(M.specularIntensityMap.channel),transmissionMapUv:F&&p(M.transmissionMap.channel),thicknessMapUv:Ae&&p(M.thicknessMap.channel),alphaMapUv:ne&&p(M.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(me||I),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!z.attributes.uv&&(Qe||ne),fog:!!Q,useFog:M.fog===!0,fogExp2:!!Q&&Q.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Ie,skinning:L.isSkinnedMesh===!0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:ie,morphTextureStride:le,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:s.shadowMap.enabled&&B.length>0,shadowMapType:s.shadowMap.type,toneMapping:gt,decodeVideoTexture:Qe&&M.map.isVideoTexture===!0&&Je.getTransfer(M.map.colorSpace)===ot,decodeVideoTextureEmissive:Ue&&M.emissiveMap.isVideoTexture===!0&&Je.getTransfer(M.emissiveMap.colorSpace)===ot,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===rn,flipSided:M.side===Ft,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:ze&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ze&&M.extensions.multiDraw===!0||Re)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return Rt.vertexUv1s=l.has(1),Rt.vertexUv2s=l.has(2),Rt.vertexUv3s=l.has(3),l.clear(),Rt}function A(M){const y=[];if(M.shaderID?y.push(M.shaderID):(y.push(M.customVertexShaderID),y.push(M.customFragmentShaderID)),M.defines!==void 0)for(const B in M.defines)y.push(B),y.push(M.defines[B]);return M.isRawShaderMaterial===!1&&(b(y,M),x(y,M),y.push(s.outputColorSpace)),y.push(M.customProgramCacheKey),y.join()}function b(M,y){M.push(y.precision),M.push(y.outputColorSpace),M.push(y.envMapMode),M.push(y.envMapCubeUVHeight),M.push(y.mapUv),M.push(y.alphaMapUv),M.push(y.lightMapUv),M.push(y.aoMapUv),M.push(y.bumpMapUv),M.push(y.normalMapUv),M.push(y.displacementMapUv),M.push(y.emissiveMapUv),M.push(y.metalnessMapUv),M.push(y.roughnessMapUv),M.push(y.anisotropyMapUv),M.push(y.clearcoatMapUv),M.push(y.clearcoatNormalMapUv),M.push(y.clearcoatRoughnessMapUv),M.push(y.iridescenceMapUv),M.push(y.iridescenceThicknessMapUv),M.push(y.sheenColorMapUv),M.push(y.sheenRoughnessMapUv),M.push(y.specularMapUv),M.push(y.specularColorMapUv),M.push(y.specularIntensityMapUv),M.push(y.transmissionMapUv),M.push(y.thicknessMapUv),M.push(y.combine),M.push(y.fogExp2),M.push(y.sizeAttenuation),M.push(y.morphTargetsCount),M.push(y.morphAttributeCount),M.push(y.numDirLights),M.push(y.numPointLights),M.push(y.numSpotLights),M.push(y.numSpotLightMaps),M.push(y.numHemiLights),M.push(y.numRectAreaLights),M.push(y.numDirLightShadows),M.push(y.numPointLightShadows),M.push(y.numSpotLightShadows),M.push(y.numSpotLightShadowsWithMaps),M.push(y.numLightProbes),M.push(y.shadowMapType),M.push(y.toneMapping),M.push(y.numClippingPlanes),M.push(y.numClipIntersection),M.push(y.depthPacking)}function x(M,y){o.disableAll(),y.supportsVertexTextures&&o.enable(0),y.instancing&&o.enable(1),y.instancingColor&&o.enable(2),y.instancingMorph&&o.enable(3),y.matcap&&o.enable(4),y.envMap&&o.enable(5),y.normalMapObjectSpace&&o.enable(6),y.normalMapTangentSpace&&o.enable(7),y.clearcoat&&o.enable(8),y.iridescence&&o.enable(9),y.alphaTest&&o.enable(10),y.vertexColors&&o.enable(11),y.vertexAlphas&&o.enable(12),y.vertexUv1s&&o.enable(13),y.vertexUv2s&&o.enable(14),y.vertexUv3s&&o.enable(15),y.vertexTangents&&o.enable(16),y.anisotropy&&o.enable(17),y.alphaHash&&o.enable(18),y.batching&&o.enable(19),y.dispersion&&o.enable(20),y.batchingColor&&o.enable(21),M.push(o.mask),o.disableAll(),y.fog&&o.enable(0),y.useFog&&o.enable(1),y.flatShading&&o.enable(2),y.logarithmicDepthBuffer&&o.enable(3),y.reverseDepthBuffer&&o.enable(4),y.skinning&&o.enable(5),y.morphTargets&&o.enable(6),y.morphNormals&&o.enable(7),y.morphColors&&o.enable(8),y.premultipliedAlpha&&o.enable(9),y.shadowMapEnabled&&o.enable(10),y.doubleSided&&o.enable(11),y.flipSided&&o.enable(12),y.useDepthPacking&&o.enable(13),y.dithering&&o.enable(14),y.transmission&&o.enable(15),y.sheen&&o.enable(16),y.opaque&&o.enable(17),y.pointsUvs&&o.enable(18),y.decodeVideoTexture&&o.enable(19),y.decodeVideoTextureEmissive&&o.enable(20),y.alphaToCoverage&&o.enable(21),M.push(o.mask)}function E(M){const y=m[M.type];let B;if(y){const U=vn[y];B=wd.clone(U.uniforms)}else B=M.uniforms;return B}function C(M,y){let B;for(let U=0,L=h.length;U<L;U++){const Q=h[U];if(Q.cacheKey===y){B=Q,++B.usedTimes;break}}return B===void 0&&(B=new Om(s,y,M,r),h.push(B)),B}function _(M){if(--M.usedTimes===0){const y=h.indexOf(M);h[y]=h[h.length-1],h.pop(),M.destroy()}}function v(M){c.remove(M)}function w(){c.dispose()}return{getParameters:g,getProgramCacheKey:A,getUniforms:E,acquireProgram:C,releaseProgram:_,releaseShaderCache:v,programs:h,dispose:w}}function Wm(){let s=new WeakMap;function e(a){return s.has(a)}function t(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function n(a){s.delete(a)}function i(a,o,c){s.get(a)[o]=c}function r(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:r}}function qm(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Fl(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Nl(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function a(u,f,d,m,p,g){let A=s[e];return A===void 0?(A={id:u.id,object:u,geometry:f,material:d,groupOrder:m,renderOrder:u.renderOrder,z:p,group:g},s[e]=A):(A.id=u.id,A.object=u,A.geometry=f,A.material=d,A.groupOrder=m,A.renderOrder=u.renderOrder,A.z=p,A.group=g),e++,A}function o(u,f,d,m,p,g){const A=a(u,f,d,m,p,g);d.transmission>0?n.push(A):d.transparent===!0?i.push(A):t.push(A)}function c(u,f,d,m,p,g){const A=a(u,f,d,m,p,g);d.transmission>0?n.unshift(A):d.transparent===!0?i.unshift(A):t.unshift(A)}function l(u,f){t.length>1&&t.sort(u||qm),n.length>1&&n.sort(f||Fl),i.length>1&&i.sort(f||Fl)}function h(){for(let u=e,f=s.length;u<f;u++){const d=s[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:o,unshift:c,finish:h,sort:l}}function Xm(){let s=new WeakMap;function e(n,i){const r=s.get(n);let a;return r===void 0?(a=new Nl,s.set(n,[a])):i>=r.length?(a=new Nl,r.push(a)):a=r[i],a}function t(){s=new WeakMap}return{get:e,dispose:t}}function Ym(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new R,color:new te};break;case"SpotLight":t={position:new R,direction:new R,color:new te,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new R,color:new te,distance:0,decay:0};break;case"HemisphereLight":t={direction:new R,skyColor:new te,groundColor:new te};break;case"RectAreaLight":t={color:new te,position:new R,halfWidth:new R,halfHeight:new R};break}return s[e.id]=t,t}}}function jm(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let Km=0;function Jm(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function Zm(s){const e=new Ym,t=jm(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new R);const i=new R,r=new Ne,a=new Ne;function o(l){let h=0,u=0,f=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let d=0,m=0,p=0,g=0,A=0,b=0,x=0,E=0,C=0,_=0,v=0;l.sort(Jm);for(let M=0,y=l.length;M<y;M++){const B=l[M],U=B.color,L=B.intensity,Q=B.distance,z=B.shadow&&B.shadow.map?B.shadow.map.texture:null;if(B.isAmbientLight)h+=U.r*L,u+=U.g*L,f+=U.b*L;else if(B.isLightProbe){for(let N=0;N<9;N++)n.probe[N].addScaledVector(B.sh.coefficients[N],L);v++}else if(B.isDirectionalLight){const N=e.get(B);if(N.color.copy(B.color).multiplyScalar(B.intensity),B.castShadow){const H=B.shadow,O=t.get(B);O.shadowIntensity=H.intensity,O.shadowBias=H.bias,O.shadowNormalBias=H.normalBias,O.shadowRadius=H.radius,O.shadowMapSize=H.mapSize,n.directionalShadow[d]=O,n.directionalShadowMap[d]=z,n.directionalShadowMatrix[d]=B.shadow.matrix,b++}n.directional[d]=N,d++}else if(B.isSpotLight){const N=e.get(B);N.position.setFromMatrixPosition(B.matrixWorld),N.color.copy(U).multiplyScalar(L),N.distance=Q,N.coneCos=Math.cos(B.angle),N.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),N.decay=B.decay,n.spot[p]=N;const H=B.shadow;if(B.map&&(n.spotLightMap[C]=B.map,C++,H.updateMatrices(B),B.castShadow&&_++),n.spotLightMatrix[p]=H.matrix,B.castShadow){const O=t.get(B);O.shadowIntensity=H.intensity,O.shadowBias=H.bias,O.shadowNormalBias=H.normalBias,O.shadowRadius=H.radius,O.shadowMapSize=H.mapSize,n.spotShadow[p]=O,n.spotShadowMap[p]=z,E++}p++}else if(B.isRectAreaLight){const N=e.get(B);N.color.copy(U).multiplyScalar(L),N.halfWidth.set(B.width*.5,0,0),N.halfHeight.set(0,B.height*.5,0),n.rectArea[g]=N,g++}else if(B.isPointLight){const N=e.get(B);if(N.color.copy(B.color).multiplyScalar(B.intensity),N.distance=B.distance,N.decay=B.decay,B.castShadow){const H=B.shadow,O=t.get(B);O.shadowIntensity=H.intensity,O.shadowBias=H.bias,O.shadowNormalBias=H.normalBias,O.shadowRadius=H.radius,O.shadowMapSize=H.mapSize,O.shadowCameraNear=H.camera.near,O.shadowCameraFar=H.camera.far,n.pointShadow[m]=O,n.pointShadowMap[m]=z,n.pointShadowMatrix[m]=B.shadow.matrix,x++}n.point[m]=N,m++}else if(B.isHemisphereLight){const N=e.get(B);N.skyColor.copy(B.color).multiplyScalar(L),N.groundColor.copy(B.groundColor).multiplyScalar(L),n.hemi[A]=N,A++}}g>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=pe.LTC_FLOAT_1,n.rectAreaLTC2=pe.LTC_FLOAT_2):(n.rectAreaLTC1=pe.LTC_HALF_1,n.rectAreaLTC2=pe.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;const w=n.hash;(w.directionalLength!==d||w.pointLength!==m||w.spotLength!==p||w.rectAreaLength!==g||w.hemiLength!==A||w.numDirectionalShadows!==b||w.numPointShadows!==x||w.numSpotShadows!==E||w.numSpotMaps!==C||w.numLightProbes!==v)&&(n.directional.length=d,n.spot.length=p,n.rectArea.length=g,n.point.length=m,n.hemi.length=A,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.pointShadow.length=x,n.pointShadowMap.length=x,n.spotShadow.length=E,n.spotShadowMap.length=E,n.directionalShadowMatrix.length=b,n.pointShadowMatrix.length=x,n.spotLightMatrix.length=E+C-_,n.spotLightMap.length=C,n.numSpotLightShadowsWithMaps=_,n.numLightProbes=v,w.directionalLength=d,w.pointLength=m,w.spotLength=p,w.rectAreaLength=g,w.hemiLength=A,w.numDirectionalShadows=b,w.numPointShadows=x,w.numSpotShadows=E,w.numSpotMaps=C,w.numLightProbes=v,n.version=Km++)}function c(l,h){let u=0,f=0,d=0,m=0,p=0;const g=h.matrixWorldInverse;for(let A=0,b=l.length;A<b;A++){const x=l[A];if(x.isDirectionalLight){const E=n.directional[u];E.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),E.direction.sub(i),E.direction.transformDirection(g),u++}else if(x.isSpotLight){const E=n.spot[d];E.position.setFromMatrixPosition(x.matrixWorld),E.position.applyMatrix4(g),E.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),E.direction.sub(i),E.direction.transformDirection(g),d++}else if(x.isRectAreaLight){const E=n.rectArea[m];E.position.setFromMatrixPosition(x.matrixWorld),E.position.applyMatrix4(g),a.identity(),r.copy(x.matrixWorld),r.premultiply(g),a.extractRotation(r),E.halfWidth.set(x.width*.5,0,0),E.halfHeight.set(0,x.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),m++}else if(x.isPointLight){const E=n.point[f];E.position.setFromMatrixPosition(x.matrixWorld),E.position.applyMatrix4(g),f++}else if(x.isHemisphereLight){const E=n.hemi[p];E.direction.setFromMatrixPosition(x.matrixWorld),E.direction.transformDirection(g),p++}}}return{setup:o,setupView:c,state:n}}function Ql(s){const e=new Zm(s),t=[],n=[];function i(h){l.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function a(h){n.push(h)}function o(){e.setup(t)}function c(h){e.setupView(t,h)}const l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:l,setupLights:o,setupLightsView:c,pushLight:r,pushShadow:a}}function $m(s){let e=new WeakMap;function t(i,r=0){const a=e.get(i);let o;return a===void 0?(o=new Ql(s),e.set(i,[o])):r>=a.length?(o=new Ql(s),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}class e0 extends cn{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Ff,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class t0 extends cn{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const n0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,i0=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function s0(s,e,t){let n=new Ac;const i=new oe,r=new oe,a=new et,o=new e0({depthPacking:Nf}),c=new t0,l={},h=t.maxTextureSize,u={[zn]:Ft,[Ft]:zn,[rn]:rn},f=new Mn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new oe},radius:{value:4}},vertexShader:n0,fragmentShader:i0}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const m=new ht;m.setAttribute("position",new Ke(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const p=new qe(m,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ph;let A=this.type;this.render=function(_,v,w){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||_.length===0)return;const M=s.getRenderTarget(),y=s.getActiveCubeFace(),B=s.getActiveMipmapLevel(),U=s.state;U.setBlending(ii),U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const L=A!==Nn&&this.type===Nn,Q=A===Nn&&this.type!==Nn;for(let z=0,N=_.length;z<N;z++){const H=_[z],O=H.shadow;if(O===void 0){console.warn("THREE.WebGLShadowMap:",H,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;i.copy(O.mapSize);const j=O.getFrameExtents();if(i.multiply(j),r.copy(O.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/j.x),i.x=r.x*j.x,O.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/j.y),i.y=r.y*j.y,O.mapSize.y=r.y)),O.map===null||L===!0||Q===!0){const ie=this.type!==Nn?{minFilter:zt,magFilter:zt}:{};O.map!==null&&O.map.dispose(),O.map=new Mi(i.x,i.y,ie),O.map.texture.name=H.name+".shadowMap",O.camera.updateProjectionMatrix()}s.setRenderTarget(O.map),s.clear();const Z=O.getViewportCount();for(let ie=0;ie<Z;ie++){const le=O.getViewport(ie);a.set(r.x*le.x,r.y*le.y,r.x*le.z,r.y*le.w),U.viewport(a),O.updateMatrices(H,ie),n=O.getFrustum(),E(v,w,O.camera,H,this.type)}O.isPointLightShadow!==!0&&this.type===Nn&&b(O,w),O.needsUpdate=!1}A=this.type,g.needsUpdate=!1,s.setRenderTarget(M,y,B)};function b(_,v){const w=e.update(p);f.defines.VSM_SAMPLES!==_.blurSamples&&(f.defines.VSM_SAMPLES=_.blurSamples,d.defines.VSM_SAMPLES=_.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),_.mapPass===null&&(_.mapPass=new Mi(i.x,i.y)),f.uniforms.shadow_pass.value=_.map.texture,f.uniforms.resolution.value=_.mapSize,f.uniforms.radius.value=_.radius,s.setRenderTarget(_.mapPass),s.clear(),s.renderBufferDirect(v,null,w,f,p,null),d.uniforms.shadow_pass.value=_.mapPass.texture,d.uniforms.resolution.value=_.mapSize,d.uniforms.radius.value=_.radius,s.setRenderTarget(_.map),s.clear(),s.renderBufferDirect(v,null,w,d,p,null)}function x(_,v,w,M){let y=null;const B=w.isPointLight===!0?_.customDistanceMaterial:_.customDepthMaterial;if(B!==void 0)y=B;else if(y=w.isPointLight===!0?c:o,s.localClippingEnabled&&v.clipShadows===!0&&Array.isArray(v.clippingPlanes)&&v.clippingPlanes.length!==0||v.displacementMap&&v.displacementScale!==0||v.alphaMap&&v.alphaTest>0||v.map&&v.alphaTest>0){const U=y.uuid,L=v.uuid;let Q=l[U];Q===void 0&&(Q={},l[U]=Q);let z=Q[L];z===void 0&&(z=y.clone(),Q[L]=z,v.addEventListener("dispose",C)),y=z}if(y.visible=v.visible,y.wireframe=v.wireframe,M===Nn?y.side=v.shadowSide!==null?v.shadowSide:v.side:y.side=v.shadowSide!==null?v.shadowSide:u[v.side],y.alphaMap=v.alphaMap,y.alphaTest=v.alphaTest,y.map=v.map,y.clipShadows=v.clipShadows,y.clippingPlanes=v.clippingPlanes,y.clipIntersection=v.clipIntersection,y.displacementMap=v.displacementMap,y.displacementScale=v.displacementScale,y.displacementBias=v.displacementBias,y.wireframeLinewidth=v.wireframeLinewidth,y.linewidth=v.linewidth,w.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const U=s.properties.get(y);U.light=w}return y}function E(_,v,w,M,y){if(_.visible===!1)return;if(_.layers.test(v.layers)&&(_.isMesh||_.isLine||_.isPoints)&&(_.castShadow||_.receiveShadow&&y===Nn)&&(!_.frustumCulled||n.intersectsObject(_))){_.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,_.matrixWorld);const L=e.update(_),Q=_.material;if(Array.isArray(Q)){const z=L.groups;for(let N=0,H=z.length;N<H;N++){const O=z[N],j=Q[O.materialIndex];if(j&&j.visible){const Z=x(_,j,M,y);_.onBeforeShadow(s,_,v,w,L,Z,O),s.renderBufferDirect(w,null,L,Z,_,O),_.onAfterShadow(s,_,v,w,L,Z,O)}}}else if(Q.visible){const z=x(_,Q,M,y);_.onBeforeShadow(s,_,v,w,L,z,null),s.renderBufferDirect(w,null,L,z,_,null),_.onAfterShadow(s,_,v,w,L,z,null)}}const U=_.children;for(let L=0,Q=U.length;L<Q;L++)E(U[L],v,w,M,y)}function C(_){_.target.removeEventListener("dispose",C);for(const w in l){const M=l[w],y=_.target.uuid;y in M&&(M[y].dispose(),delete M[y])}}}const r0={[bo]:xo,[Eo]:yo,[_o]:Mo,[$i]:vo,[xo]:bo,[yo]:Eo,[Mo]:_o,[vo]:$i};function a0(s,e){function t(){let F=!1;const Ae=new et;let Y=null;const ne=new et(0,0,0,0);return{setMask:function(xe){Y!==xe&&!F&&(s.colorMask(xe,xe,xe,xe),Y=xe)},setLocked:function(xe){F=xe},setClear:function(xe,ge,ze,gt,Rt){Rt===!0&&(xe*=gt,ge*=gt,ze*=gt),Ae.set(xe,ge,ze,gt),ne.equals(Ae)===!1&&(s.clearColor(xe,ge,ze,gt),ne.copy(Ae))},reset:function(){F=!1,Y=null,ne.set(-1,0,0,0)}}}function n(){let F=!1,Ae=!1,Y=null,ne=null,xe=null;return{setReversed:function(ge){if(Ae!==ge){const ze=e.get("EXT_clip_control");Ae?ze.clipControlEXT(ze.LOWER_LEFT_EXT,ze.ZERO_TO_ONE_EXT):ze.clipControlEXT(ze.LOWER_LEFT_EXT,ze.NEGATIVE_ONE_TO_ONE_EXT);const gt=xe;xe=null,this.setClear(gt)}Ae=ge},getReversed:function(){return Ae},setTest:function(ge){ge?re(s.DEPTH_TEST):Ie(s.DEPTH_TEST)},setMask:function(ge){Y!==ge&&!F&&(s.depthMask(ge),Y=ge)},setFunc:function(ge){if(Ae&&(ge=r0[ge]),ne!==ge){switch(ge){case bo:s.depthFunc(s.NEVER);break;case xo:s.depthFunc(s.ALWAYS);break;case Eo:s.depthFunc(s.LESS);break;case $i:s.depthFunc(s.LEQUAL);break;case _o:s.depthFunc(s.EQUAL);break;case vo:s.depthFunc(s.GEQUAL);break;case yo:s.depthFunc(s.GREATER);break;case Mo:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}ne=ge}},setLocked:function(ge){F=ge},setClear:function(ge){xe!==ge&&(Ae&&(ge=1-ge),s.clearDepth(ge),xe=ge)},reset:function(){F=!1,Y=null,ne=null,xe=null,Ae=!1}}}function i(){let F=!1,Ae=null,Y=null,ne=null,xe=null,ge=null,ze=null,gt=null,Rt=null;return{setTest:function(st){F||(st?re(s.STENCIL_TEST):Ie(s.STENCIL_TEST))},setMask:function(st){Ae!==st&&!F&&(s.stencilMask(st),Ae=st)},setFunc:function(st,ln,Bn){(Y!==st||ne!==ln||xe!==Bn)&&(s.stencilFunc(st,ln,Bn),Y=st,ne=ln,xe=Bn)},setOp:function(st,ln,Bn){(ge!==st||ze!==ln||gt!==Bn)&&(s.stencilOp(st,ln,Bn),ge=st,ze=ln,gt=Bn)},setLocked:function(st){F=st},setClear:function(st){Rt!==st&&(s.clearStencil(st),Rt=st)},reset:function(){F=!1,Ae=null,Y=null,ne=null,xe=null,ge=null,ze=null,gt=null,Rt=null}}}const r=new t,a=new n,o=new i,c=new WeakMap,l=new WeakMap;let h={},u={},f=new WeakMap,d=[],m=null,p=!1,g=null,A=null,b=null,x=null,E=null,C=null,_=null,v=new te(0,0,0),w=0,M=!1,y=null,B=null,U=null,L=null,Q=null;const z=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let N=!1,H=0;const O=s.getParameter(s.VERSION);O.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(O)[1]),N=H>=1):O.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(O)[1]),N=H>=2);let j=null,Z={};const ie=s.getParameter(s.SCISSOR_BOX),le=s.getParameter(s.VIEWPORT),Te=new et().fromArray(ie),q=new et().fromArray(le);function se(F,Ae,Y,ne){const xe=new Uint8Array(4),ge=s.createTexture();s.bindTexture(F,ge),s.texParameteri(F,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(F,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let ze=0;ze<Y;ze++)F===s.TEXTURE_3D||F===s.TEXTURE_2D_ARRAY?s.texImage3D(Ae,0,s.RGBA,1,1,ne,0,s.RGBA,s.UNSIGNED_BYTE,xe):s.texImage2D(Ae+ze,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,xe);return ge}const ue={};ue[s.TEXTURE_2D]=se(s.TEXTURE_2D,s.TEXTURE_2D,1),ue[s.TEXTURE_CUBE_MAP]=se(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),ue[s.TEXTURE_2D_ARRAY]=se(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),ue[s.TEXTURE_3D]=se(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),re(s.DEPTH_TEST),a.setFunc($i),ae(!1),me(Oc),re(s.CULL_FACE),D(ii);function re(F){h[F]!==!0&&(s.enable(F),h[F]=!0)}function Ie(F){h[F]!==!1&&(s.disable(F),h[F]=!1)}function Pe(F,Ae){return u[F]!==Ae?(s.bindFramebuffer(F,Ae),u[F]=Ae,F===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=Ae),F===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=Ae),!0):!1}function Re(F,Ae){let Y=d,ne=!1;if(F){Y=f.get(Ae),Y===void 0&&(Y=[],f.set(Ae,Y));const xe=F.textures;if(Y.length!==xe.length||Y[0]!==s.COLOR_ATTACHMENT0){for(let ge=0,ze=xe.length;ge<ze;ge++)Y[ge]=s.COLOR_ATTACHMENT0+ge;Y.length=xe.length,ne=!0}}else Y[0]!==s.BACK&&(Y[0]=s.BACK,ne=!0);ne&&s.drawBuffers(Y)}function Qe(F){return m!==F?(s.useProgram(F),m=F,!0):!1}const $={[bi]:s.FUNC_ADD,[cf]:s.FUNC_SUBTRACT,[lf]:s.FUNC_REVERSE_SUBTRACT};$[hf]=s.MIN,$[uf]=s.MAX;const ce={[ff]:s.ZERO,[df]:s.ONE,[Af]:s.SRC_COLOR,[go]:s.SRC_ALPHA,[Ef]:s.SRC_ALPHA_SATURATE,[bf]:s.DST_COLOR,[gf]:s.DST_ALPHA,[pf]:s.ONE_MINUS_SRC_COLOR,[mo]:s.ONE_MINUS_SRC_ALPHA,[xf]:s.ONE_MINUS_DST_COLOR,[mf]:s.ONE_MINUS_DST_ALPHA,[_f]:s.CONSTANT_COLOR,[vf]:s.ONE_MINUS_CONSTANT_COLOR,[yf]:s.CONSTANT_ALPHA,[Mf]:s.ONE_MINUS_CONSTANT_ALPHA};function D(F,Ae,Y,ne,xe,ge,ze,gt,Rt,st){if(F===ii){p===!0&&(Ie(s.BLEND),p=!1);return}if(p===!1&&(re(s.BLEND),p=!0),F!==of){if(F!==g||st!==M){if((A!==bi||E!==bi)&&(s.blendEquation(s.FUNC_ADD),A=bi,E=bi),st)switch(F){case ji:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Gr:s.blendFunc(s.ONE,s.ONE);break;case Gc:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case zc:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case ji:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Gr:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Gc:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case zc:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}b=null,x=null,C=null,_=null,v.set(0,0,0),w=0,g=F,M=st}return}xe=xe||Ae,ge=ge||Y,ze=ze||ne,(Ae!==A||xe!==E)&&(s.blendEquationSeparate($[Ae],$[xe]),A=Ae,E=xe),(Y!==b||ne!==x||ge!==C||ze!==_)&&(s.blendFuncSeparate(ce[Y],ce[ne],ce[ge],ce[ze]),b=Y,x=ne,C=ge,_=ze),(gt.equals(v)===!1||Rt!==w)&&(s.blendColor(gt.r,gt.g,gt.b,Rt),v.copy(gt),w=Rt),g=F,M=!1}function Ce(F,Ae){F.side===rn?Ie(s.CULL_FACE):re(s.CULL_FACE);let Y=F.side===Ft;Ae&&(Y=!Y),ae(Y),F.blending===ji&&F.transparent===!1?D(ii):D(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),a.setFunc(F.depthFunc),a.setTest(F.depthTest),a.setMask(F.depthWrite),r.setMask(F.colorWrite);const ne=F.stencilWrite;o.setTest(ne),ne&&(o.setMask(F.stencilWriteMask),o.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),o.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),Ue(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?re(s.SAMPLE_ALPHA_TO_COVERAGE):Ie(s.SAMPLE_ALPHA_TO_COVERAGE)}function ae(F){y!==F&&(F?s.frontFace(s.CW):s.frontFace(s.CCW),y=F)}function me(F){F!==rf?(re(s.CULL_FACE),F!==B&&(F===Oc?s.cullFace(s.BACK):F===af?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Ie(s.CULL_FACE),B=F}function fe(F){F!==U&&(N&&s.lineWidth(F),U=F)}function Ue(F,Ae,Y){F?(re(s.POLYGON_OFFSET_FILL),(L!==Ae||Q!==Y)&&(s.polygonOffset(Ae,Y),L=Ae,Q=Y)):Ie(s.POLYGON_OFFSET_FILL)}function _e(F){F?re(s.SCISSOR_TEST):Ie(s.SCISSOR_TEST)}function T(F){F===void 0&&(F=s.TEXTURE0+z-1),j!==F&&(s.activeTexture(F),j=F)}function I(F,Ae,Y){Y===void 0&&(j===null?Y=s.TEXTURE0+z-1:Y=j);let ne=Z[Y];ne===void 0&&(ne={type:void 0,texture:void 0},Z[Y]=ne),(ne.type!==F||ne.texture!==Ae)&&(j!==Y&&(s.activeTexture(Y),j=Y),s.bindTexture(F,Ae||ue[F]),ne.type=F,ne.texture=Ae)}function P(){const F=Z[j];F!==void 0&&F.type!==void 0&&(s.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function X(){try{s.compressedTexImage2D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function J(){try{s.compressedTexImage3D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function K(){try{s.texSubImage2D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ve(){try{s.texSubImage3D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function de(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function be(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ke(){try{s.texStorage2D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ee(){try{s.texStorage3D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ye(){try{s.texImage2D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Le(){try{s.texImage3D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Fe(F){Te.equals(F)===!1&&(s.scissor(F.x,F.y,F.z,F.w),Te.copy(F))}function Me(F){q.equals(F)===!1&&(s.viewport(F.x,F.y,F.z,F.w),q.copy(F))}function je(F,Ae){let Y=l.get(Ae);Y===void 0&&(Y=new WeakMap,l.set(Ae,Y));let ne=Y.get(F);ne===void 0&&(ne=s.getUniformBlockIndex(Ae,F.name),Y.set(F,ne))}function Ge(F,Ae){const ne=l.get(Ae).get(F);c.get(Ae)!==ne&&(s.uniformBlockBinding(Ae,ne,F.__bindingPointIndex),c.set(Ae,ne))}function it(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),a.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},j=null,Z={},u={},f=new WeakMap,d=[],m=null,p=!1,g=null,A=null,b=null,x=null,E=null,C=null,_=null,v=new te(0,0,0),w=0,M=!1,y=null,B=null,U=null,L=null,Q=null,Te.set(0,0,s.canvas.width,s.canvas.height),q.set(0,0,s.canvas.width,s.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:re,disable:Ie,bindFramebuffer:Pe,drawBuffers:Re,useProgram:Qe,setBlending:D,setMaterial:Ce,setFlipSided:ae,setCullFace:me,setLineWidth:fe,setPolygonOffset:Ue,setScissorTest:_e,activeTexture:T,bindTexture:I,unbindTexture:P,compressedTexImage2D:X,compressedTexImage3D:J,texImage2D:ye,texImage3D:Le,updateUBOMapping:je,uniformBlockBinding:Ge,texStorage2D:ke,texStorage3D:ee,texSubImage2D:K,texSubImage3D:ve,compressedTexSubImage2D:de,compressedTexSubImage3D:be,scissor:Fe,viewport:Me,reset:it}}function kl(s,e,t,n){const i=o0(n);switch(t){case zh:return s*e;case Vh:return s*e;case Wh:return s*e*2;case ti:return s*e/i.components*i.byteLength;case lc:return s*e/i.components*i.byteLength;case Ei:return s*e*2/i.components*i.byteLength;case hc:return s*e*2/i.components*i.byteLength;case Hh:return s*e*3/i.components*i.byteLength;case St:return s*e*4/i.components*i.byteLength;case uc:return s*e*4/i.components*i.byteLength;case Qr:case Ds:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case kr:case Ls:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case wo:case So:return Math.max(s,16)*Math.max(e,8)/4;case Hr:case Vr:return Math.max(s,8)*Math.max(e,8)/2;case Wr:case qr:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Xr:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Hs:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Bo:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case To:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Ro:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Vs:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Do:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Lo:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Po:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Uo:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Fo:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case No:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Qo:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case ko:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Oo:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Ps:case Go:case Yr:return Math.ceil(s/4)*Math.ceil(e/4)*16;case qh:case zo:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Ho:case Vo:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function o0(s){switch(s){case wt:case kh:return{byteLength:1,components:1};case zs:case Oh:case bn:return{byteLength:2,components:1};case oc:case cc:return{byteLength:2,components:4};case yi:case ac:case Ut:return{byteLength:4,components:1};case Gh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function c0(s,e,t,n,i,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new oe,h=new WeakMap;let u;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(T,I){return d?new OffscreenCanvas(T,I):Xs("canvas")}function p(T,I,P){let X=1;const J=_e(T);if((J.width>P||J.height>P)&&(X=P/Math.max(J.width,J.height)),X<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const K=Math.floor(X*J.width),ve=Math.floor(X*J.height);u===void 0&&(u=m(K,ve));const de=I?m(K,ve):u;return de.width=K,de.height=ve,de.getContext("2d").drawImage(T,0,0,K,ve),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+K+"x"+ve+")."),de}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),T;return T}function g(T){return T.generateMipmaps}function A(T){s.generateMipmap(T)}function b(T){return T.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?s.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function x(T,I,P,X,J=!1){if(T!==null){if(s[T]!==void 0)return s[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let K=I;if(I===s.RED&&(P===s.FLOAT&&(K=s.R32F),P===s.HALF_FLOAT&&(K=s.R16F),P===s.UNSIGNED_BYTE&&(K=s.R8)),I===s.RED_INTEGER&&(P===s.UNSIGNED_BYTE&&(K=s.R8UI),P===s.UNSIGNED_SHORT&&(K=s.R16UI),P===s.UNSIGNED_INT&&(K=s.R32UI),P===s.BYTE&&(K=s.R8I),P===s.SHORT&&(K=s.R16I),P===s.INT&&(K=s.R32I)),I===s.RG&&(P===s.FLOAT&&(K=s.RG32F),P===s.HALF_FLOAT&&(K=s.RG16F),P===s.UNSIGNED_BYTE&&(K=s.RG8)),I===s.RG_INTEGER&&(P===s.UNSIGNED_BYTE&&(K=s.RG8UI),P===s.UNSIGNED_SHORT&&(K=s.RG16UI),P===s.UNSIGNED_INT&&(K=s.RG32UI),P===s.BYTE&&(K=s.RG8I),P===s.SHORT&&(K=s.RG16I),P===s.INT&&(K=s.RG32I)),I===s.RGB_INTEGER&&(P===s.UNSIGNED_BYTE&&(K=s.RGB8UI),P===s.UNSIGNED_SHORT&&(K=s.RGB16UI),P===s.UNSIGNED_INT&&(K=s.RGB32UI),P===s.BYTE&&(K=s.RGB8I),P===s.SHORT&&(K=s.RGB16I),P===s.INT&&(K=s.RGB32I)),I===s.RGBA_INTEGER&&(P===s.UNSIGNED_BYTE&&(K=s.RGBA8UI),P===s.UNSIGNED_SHORT&&(K=s.RGBA16UI),P===s.UNSIGNED_INT&&(K=s.RGBA32UI),P===s.BYTE&&(K=s.RGBA8I),P===s.SHORT&&(K=s.RGBA16I),P===s.INT&&(K=s.RGBA32I)),I===s.RGB&&P===s.UNSIGNED_INT_5_9_9_9_REV&&(K=s.RGB9_E5),I===s.RGBA){const ve=J?aa:Je.getTransfer(X);P===s.FLOAT&&(K=s.RGBA32F),P===s.HALF_FLOAT&&(K=s.RGBA16F),P===s.UNSIGNED_BYTE&&(K=ve===ot?s.SRGB8_ALPHA8:s.RGBA8),P===s.UNSIGNED_SHORT_4_4_4_4&&(K=s.RGBA4),P===s.UNSIGNED_SHORT_5_5_5_1&&(K=s.RGB5_A1)}return(K===s.R16F||K===s.R32F||K===s.RG16F||K===s.RG32F||K===s.RGBA16F||K===s.RGBA32F)&&e.get("EXT_color_buffer_float"),K}function E(T,I){let P;return T?I===null||I===yi||I===ts?P=s.DEPTH24_STENCIL8:I===Ut?P=s.DEPTH32F_STENCIL8:I===zs&&(P=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):I===null||I===yi||I===ts?P=s.DEPTH_COMPONENT24:I===Ut?P=s.DEPTH_COMPONENT32F:I===zs&&(P=s.DEPTH_COMPONENT16),P}function C(T,I){return g(T)===!0||T.isFramebufferTexture&&T.minFilter!==zt&&T.minFilter!==Pt?Math.log2(Math.max(I.width,I.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?I.mipmaps.length:1}function _(T){const I=T.target;I.removeEventListener("dispose",_),w(I),I.isVideoTexture&&h.delete(I)}function v(T){const I=T.target;I.removeEventListener("dispose",v),y(I)}function w(T){const I=n.get(T);if(I.__webglInit===void 0)return;const P=T.source,X=f.get(P);if(X){const J=X[I.__cacheKey];J.usedTimes--,J.usedTimes===0&&M(T),Object.keys(X).length===0&&f.delete(P)}n.remove(T)}function M(T){const I=n.get(T);s.deleteTexture(I.__webglTexture);const P=T.source,X=f.get(P);delete X[I.__cacheKey],a.memory.textures--}function y(T){const I=n.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),n.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let X=0;X<6;X++){if(Array.isArray(I.__webglFramebuffer[X]))for(let J=0;J<I.__webglFramebuffer[X].length;J++)s.deleteFramebuffer(I.__webglFramebuffer[X][J]);else s.deleteFramebuffer(I.__webglFramebuffer[X]);I.__webglDepthbuffer&&s.deleteRenderbuffer(I.__webglDepthbuffer[X])}else{if(Array.isArray(I.__webglFramebuffer))for(let X=0;X<I.__webglFramebuffer.length;X++)s.deleteFramebuffer(I.__webglFramebuffer[X]);else s.deleteFramebuffer(I.__webglFramebuffer);if(I.__webglDepthbuffer&&s.deleteRenderbuffer(I.__webglDepthbuffer),I.__webglMultisampledFramebuffer&&s.deleteFramebuffer(I.__webglMultisampledFramebuffer),I.__webglColorRenderbuffer)for(let X=0;X<I.__webglColorRenderbuffer.length;X++)I.__webglColorRenderbuffer[X]&&s.deleteRenderbuffer(I.__webglColorRenderbuffer[X]);I.__webglDepthRenderbuffer&&s.deleteRenderbuffer(I.__webglDepthRenderbuffer)}const P=T.textures;for(let X=0,J=P.length;X<J;X++){const K=n.get(P[X]);K.__webglTexture&&(s.deleteTexture(K.__webglTexture),a.memory.textures--),n.remove(P[X])}n.remove(T)}let B=0;function U(){B=0}function L(){const T=B;return T>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+i.maxTextures),B+=1,T}function Q(T){const I=[];return I.push(T.wrapS),I.push(T.wrapT),I.push(T.wrapR||0),I.push(T.magFilter),I.push(T.minFilter),I.push(T.anisotropy),I.push(T.internalFormat),I.push(T.format),I.push(T.type),I.push(T.generateMipmaps),I.push(T.premultiplyAlpha),I.push(T.flipY),I.push(T.unpackAlignment),I.push(T.colorSpace),I.join()}function z(T,I){const P=n.get(T);if(T.isVideoTexture&&fe(T),T.isRenderTargetTexture===!1&&T.version>0&&P.__version!==T.version){const X=T.image;if(X===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(X.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{q(P,T,I);return}}t.bindTexture(s.TEXTURE_2D,P.__webglTexture,s.TEXTURE0+I)}function N(T,I){const P=n.get(T);if(T.version>0&&P.__version!==T.version){q(P,T,I);return}t.bindTexture(s.TEXTURE_2D_ARRAY,P.__webglTexture,s.TEXTURE0+I)}function H(T,I){const P=n.get(T);if(T.version>0&&P.__version!==T.version){q(P,T,I);return}t.bindTexture(s.TEXTURE_3D,P.__webglTexture,s.TEXTURE0+I)}function O(T,I){const P=n.get(T);if(T.version>0&&P.__version!==T.version){se(P,T,I);return}t.bindTexture(s.TEXTURE_CUBE_MAP,P.__webglTexture,s.TEXTURE0+I)}const j={[ai]:s.REPEAT,[yn]:s.CLAMP_TO_EDGE,[zr]:s.MIRRORED_REPEAT},Z={[zt]:s.NEAREST,[Qh]:s.NEAREST_MIPMAP_NEAREST,[Bs]:s.NEAREST_MIPMAP_LINEAR,[Pt]:s.LINEAR,[Nr]:s.LINEAR_MIPMAP_NEAREST,[mn]:s.LINEAR_MIPMAP_LINEAR},ie={[kf]:s.NEVER,[Wf]:s.ALWAYS,[Of]:s.LESS,[Yh]:s.LEQUAL,[Gf]:s.EQUAL,[Vf]:s.GEQUAL,[zf]:s.GREATER,[Hf]:s.NOTEQUAL};function le(T,I){if(I.type===Ut&&e.has("OES_texture_float_linear")===!1&&(I.magFilter===Pt||I.magFilter===Nr||I.magFilter===Bs||I.magFilter===mn||I.minFilter===Pt||I.minFilter===Nr||I.minFilter===Bs||I.minFilter===mn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(T,s.TEXTURE_WRAP_S,j[I.wrapS]),s.texParameteri(T,s.TEXTURE_WRAP_T,j[I.wrapT]),(T===s.TEXTURE_3D||T===s.TEXTURE_2D_ARRAY)&&s.texParameteri(T,s.TEXTURE_WRAP_R,j[I.wrapR]),s.texParameteri(T,s.TEXTURE_MAG_FILTER,Z[I.magFilter]),s.texParameteri(T,s.TEXTURE_MIN_FILTER,Z[I.minFilter]),I.compareFunction&&(s.texParameteri(T,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(T,s.TEXTURE_COMPARE_FUNC,ie[I.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(I.magFilter===zt||I.minFilter!==Bs&&I.minFilter!==mn||I.type===Ut&&e.has("OES_texture_float_linear")===!1)return;if(I.anisotropy>1||n.get(I).__currentAnisotropy){const P=e.get("EXT_texture_filter_anisotropic");s.texParameterf(T,P.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(I.anisotropy,i.getMaxAnisotropy())),n.get(I).__currentAnisotropy=I.anisotropy}}}function Te(T,I){let P=!1;T.__webglInit===void 0&&(T.__webglInit=!0,I.addEventListener("dispose",_));const X=I.source;let J=f.get(X);J===void 0&&(J={},f.set(X,J));const K=Q(I);if(K!==T.__cacheKey){J[K]===void 0&&(J[K]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,P=!0),J[K].usedTimes++;const ve=J[T.__cacheKey];ve!==void 0&&(J[T.__cacheKey].usedTimes--,ve.usedTimes===0&&M(I)),T.__cacheKey=K,T.__webglTexture=J[K].texture}return P}function q(T,I,P){let X=s.TEXTURE_2D;(I.isDataArrayTexture||I.isCompressedArrayTexture)&&(X=s.TEXTURE_2D_ARRAY),I.isData3DTexture&&(X=s.TEXTURE_3D);const J=Te(T,I),K=I.source;t.bindTexture(X,T.__webglTexture,s.TEXTURE0+P);const ve=n.get(K);if(K.version!==ve.__version||J===!0){t.activeTexture(s.TEXTURE0+P);const de=Je.getPrimaries(Je.workingColorSpace),be=I.colorSpace===An?null:Je.getPrimaries(I.colorSpace),ke=I.colorSpace===An||de===be?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,I.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,I.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ke);let ee=p(I.image,!1,i.maxTextureSize);ee=Ue(I,ee);const ye=r.convert(I.format,I.colorSpace),Le=r.convert(I.type);let Fe=x(I.internalFormat,ye,Le,I.colorSpace,I.isVideoTexture);le(X,I);let Me;const je=I.mipmaps,Ge=I.isVideoTexture!==!0,it=ve.__version===void 0||J===!0,F=K.dataReady,Ae=C(I,ee);if(I.isDepthTexture)Fe=E(I.format===ns,I.type),it&&(Ge?t.texStorage2D(s.TEXTURE_2D,1,Fe,ee.width,ee.height):t.texImage2D(s.TEXTURE_2D,0,Fe,ee.width,ee.height,0,ye,Le,null));else if(I.isDataTexture)if(je.length>0){Ge&&it&&t.texStorage2D(s.TEXTURE_2D,Ae,Fe,je[0].width,je[0].height);for(let Y=0,ne=je.length;Y<ne;Y++)Me=je[Y],Ge?F&&t.texSubImage2D(s.TEXTURE_2D,Y,0,0,Me.width,Me.height,ye,Le,Me.data):t.texImage2D(s.TEXTURE_2D,Y,Fe,Me.width,Me.height,0,ye,Le,Me.data);I.generateMipmaps=!1}else Ge?(it&&t.texStorage2D(s.TEXTURE_2D,Ae,Fe,ee.width,ee.height),F&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,ee.width,ee.height,ye,Le,ee.data)):t.texImage2D(s.TEXTURE_2D,0,Fe,ee.width,ee.height,0,ye,Le,ee.data);else if(I.isCompressedTexture)if(I.isCompressedArrayTexture){Ge&&it&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Ae,Fe,je[0].width,je[0].height,ee.depth);for(let Y=0,ne=je.length;Y<ne;Y++)if(Me=je[Y],I.format!==St)if(ye!==null)if(Ge){if(F)if(I.layerUpdates.size>0){const xe=kl(Me.width,Me.height,I.format,I.type);for(const ge of I.layerUpdates){const ze=Me.data.subarray(ge*xe/Me.data.BYTES_PER_ELEMENT,(ge+1)*xe/Me.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Y,0,0,ge,Me.width,Me.height,1,ye,ze)}I.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Y,0,0,0,Me.width,Me.height,ee.depth,ye,Me.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Y,Fe,Me.width,Me.height,ee.depth,0,Me.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ge?F&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,Y,0,0,0,Me.width,Me.height,ee.depth,ye,Le,Me.data):t.texImage3D(s.TEXTURE_2D_ARRAY,Y,Fe,Me.width,Me.height,ee.depth,0,ye,Le,Me.data)}else{Ge&&it&&t.texStorage2D(s.TEXTURE_2D,Ae,Fe,je[0].width,je[0].height);for(let Y=0,ne=je.length;Y<ne;Y++)Me=je[Y],I.format!==St?ye!==null?Ge?F&&t.compressedTexSubImage2D(s.TEXTURE_2D,Y,0,0,Me.width,Me.height,ye,Me.data):t.compressedTexImage2D(s.TEXTURE_2D,Y,Fe,Me.width,Me.height,0,Me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ge?F&&t.texSubImage2D(s.TEXTURE_2D,Y,0,0,Me.width,Me.height,ye,Le,Me.data):t.texImage2D(s.TEXTURE_2D,Y,Fe,Me.width,Me.height,0,ye,Le,Me.data)}else if(I.isDataArrayTexture)if(Ge){if(it&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Ae,Fe,ee.width,ee.height,ee.depth),F)if(I.layerUpdates.size>0){const Y=kl(ee.width,ee.height,I.format,I.type);for(const ne of I.layerUpdates){const xe=ee.data.subarray(ne*Y/ee.data.BYTES_PER_ELEMENT,(ne+1)*Y/ee.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,ne,ee.width,ee.height,1,ye,Le,xe)}I.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ee.width,ee.height,ee.depth,ye,Le,ee.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,Fe,ee.width,ee.height,ee.depth,0,ye,Le,ee.data);else if(I.isData3DTexture)Ge?(it&&t.texStorage3D(s.TEXTURE_3D,Ae,Fe,ee.width,ee.height,ee.depth),F&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ee.width,ee.height,ee.depth,ye,Le,ee.data)):t.texImage3D(s.TEXTURE_3D,0,Fe,ee.width,ee.height,ee.depth,0,ye,Le,ee.data);else if(I.isFramebufferTexture){if(it)if(Ge)t.texStorage2D(s.TEXTURE_2D,Ae,Fe,ee.width,ee.height);else{let Y=ee.width,ne=ee.height;for(let xe=0;xe<Ae;xe++)t.texImage2D(s.TEXTURE_2D,xe,Fe,Y,ne,0,ye,Le,null),Y>>=1,ne>>=1}}else if(je.length>0){if(Ge&&it){const Y=_e(je[0]);t.texStorage2D(s.TEXTURE_2D,Ae,Fe,Y.width,Y.height)}for(let Y=0,ne=je.length;Y<ne;Y++)Me=je[Y],Ge?F&&t.texSubImage2D(s.TEXTURE_2D,Y,0,0,ye,Le,Me):t.texImage2D(s.TEXTURE_2D,Y,Fe,ye,Le,Me);I.generateMipmaps=!1}else if(Ge){if(it){const Y=_e(ee);t.texStorage2D(s.TEXTURE_2D,Ae,Fe,Y.width,Y.height)}F&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,ye,Le,ee)}else t.texImage2D(s.TEXTURE_2D,0,Fe,ye,Le,ee);g(I)&&A(X),ve.__version=K.version,I.onUpdate&&I.onUpdate(I)}T.__version=I.version}function se(T,I,P){if(I.image.length!==6)return;const X=Te(T,I),J=I.source;t.bindTexture(s.TEXTURE_CUBE_MAP,T.__webglTexture,s.TEXTURE0+P);const K=n.get(J);if(J.version!==K.__version||X===!0){t.activeTexture(s.TEXTURE0+P);const ve=Je.getPrimaries(Je.workingColorSpace),de=I.colorSpace===An?null:Je.getPrimaries(I.colorSpace),be=I.colorSpace===An||ve===de?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,I.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,I.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,be);const ke=I.isCompressedTexture||I.image[0].isCompressedTexture,ee=I.image[0]&&I.image[0].isDataTexture,ye=[];for(let ne=0;ne<6;ne++)!ke&&!ee?ye[ne]=p(I.image[ne],!0,i.maxCubemapSize):ye[ne]=ee?I.image[ne].image:I.image[ne],ye[ne]=Ue(I,ye[ne]);const Le=ye[0],Fe=r.convert(I.format,I.colorSpace),Me=r.convert(I.type),je=x(I.internalFormat,Fe,Me,I.colorSpace),Ge=I.isVideoTexture!==!0,it=K.__version===void 0||X===!0,F=J.dataReady;let Ae=C(I,Le);le(s.TEXTURE_CUBE_MAP,I);let Y;if(ke){Ge&&it&&t.texStorage2D(s.TEXTURE_CUBE_MAP,Ae,je,Le.width,Le.height);for(let ne=0;ne<6;ne++){Y=ye[ne].mipmaps;for(let xe=0;xe<Y.length;xe++){const ge=Y[xe];I.format!==St?Fe!==null?Ge?F&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ne,xe,0,0,ge.width,ge.height,Fe,ge.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ne,xe,je,ge.width,ge.height,0,ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ge?F&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ne,xe,0,0,ge.width,ge.height,Fe,Me,ge.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ne,xe,je,ge.width,ge.height,0,Fe,Me,ge.data)}}}else{if(Y=I.mipmaps,Ge&&it){Y.length>0&&Ae++;const ne=_e(ye[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,Ae,je,ne.width,ne.height)}for(let ne=0;ne<6;ne++)if(ee){Ge?F&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,ye[ne].width,ye[ne].height,Fe,Me,ye[ne].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,je,ye[ne].width,ye[ne].height,0,Fe,Me,ye[ne].data);for(let xe=0;xe<Y.length;xe++){const ze=Y[xe].image[ne].image;Ge?F&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ne,xe+1,0,0,ze.width,ze.height,Fe,Me,ze.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ne,xe+1,je,ze.width,ze.height,0,Fe,Me,ze.data)}}else{Ge?F&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,Fe,Me,ye[ne]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,je,Fe,Me,ye[ne]);for(let xe=0;xe<Y.length;xe++){const ge=Y[xe];Ge?F&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ne,xe+1,0,0,Fe,Me,ge.image[ne]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ne,xe+1,je,Fe,Me,ge.image[ne])}}}g(I)&&A(s.TEXTURE_CUBE_MAP),K.__version=J.version,I.onUpdate&&I.onUpdate(I)}T.__version=I.version}function ue(T,I,P,X,J,K){const ve=r.convert(P.format,P.colorSpace),de=r.convert(P.type),be=x(P.internalFormat,ve,de,P.colorSpace),ke=n.get(I),ee=n.get(P);if(ee.__renderTarget=I,!ke.__hasExternalTextures){const ye=Math.max(1,I.width>>K),Le=Math.max(1,I.height>>K);J===s.TEXTURE_3D||J===s.TEXTURE_2D_ARRAY?t.texImage3D(J,K,be,ye,Le,I.depth,0,ve,de,null):t.texImage2D(J,K,be,ye,Le,0,ve,de,null)}t.bindFramebuffer(s.FRAMEBUFFER,T),me(I)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,X,J,ee.__webglTexture,0,ae(I)):(J===s.TEXTURE_2D||J>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,X,J,ee.__webglTexture,K),t.bindFramebuffer(s.FRAMEBUFFER,null)}function re(T,I,P){if(s.bindRenderbuffer(s.RENDERBUFFER,T),I.depthBuffer){const X=I.depthTexture,J=X&&X.isDepthTexture?X.type:null,K=E(I.stencilBuffer,J),ve=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,de=ae(I);me(I)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,de,K,I.width,I.height):P?s.renderbufferStorageMultisample(s.RENDERBUFFER,de,K,I.width,I.height):s.renderbufferStorage(s.RENDERBUFFER,K,I.width,I.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,ve,s.RENDERBUFFER,T)}else{const X=I.textures;for(let J=0;J<X.length;J++){const K=X[J],ve=r.convert(K.format,K.colorSpace),de=r.convert(K.type),be=x(K.internalFormat,ve,de,K.colorSpace),ke=ae(I);P&&me(I)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,ke,be,I.width,I.height):me(I)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ke,be,I.width,I.height):s.renderbufferStorage(s.RENDERBUFFER,be,I.width,I.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Ie(T,I){if(I&&I.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,T),!(I.depthTexture&&I.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const X=n.get(I.depthTexture);X.__renderTarget=I,(!X.__webglTexture||I.depthTexture.image.width!==I.width||I.depthTexture.image.height!==I.height)&&(I.depthTexture.image.width=I.width,I.depthTexture.image.height=I.height,I.depthTexture.needsUpdate=!0),z(I.depthTexture,0);const J=X.__webglTexture,K=ae(I);if(I.depthTexture.format===Ki)me(I)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,J,0,K):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,J,0);else if(I.depthTexture.format===ns)me(I)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,J,0,K):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function Pe(T){const I=n.get(T),P=T.isWebGLCubeRenderTarget===!0;if(I.__boundDepthTexture!==T.depthTexture){const X=T.depthTexture;if(I.__depthDisposeCallback&&I.__depthDisposeCallback(),X){const J=()=>{delete I.__boundDepthTexture,delete I.__depthDisposeCallback,X.removeEventListener("dispose",J)};X.addEventListener("dispose",J),I.__depthDisposeCallback=J}I.__boundDepthTexture=X}if(T.depthTexture&&!I.__autoAllocateDepthBuffer){if(P)throw new Error("target.depthTexture not supported in Cube render targets");Ie(I.__webglFramebuffer,T)}else if(P){I.__webglDepthbuffer=[];for(let X=0;X<6;X++)if(t.bindFramebuffer(s.FRAMEBUFFER,I.__webglFramebuffer[X]),I.__webglDepthbuffer[X]===void 0)I.__webglDepthbuffer[X]=s.createRenderbuffer(),re(I.__webglDepthbuffer[X],T,!1);else{const J=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,K=I.__webglDepthbuffer[X];s.bindRenderbuffer(s.RENDERBUFFER,K),s.framebufferRenderbuffer(s.FRAMEBUFFER,J,s.RENDERBUFFER,K)}}else if(t.bindFramebuffer(s.FRAMEBUFFER,I.__webglFramebuffer),I.__webglDepthbuffer===void 0)I.__webglDepthbuffer=s.createRenderbuffer(),re(I.__webglDepthbuffer,T,!1);else{const X=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,J=I.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,J),s.framebufferRenderbuffer(s.FRAMEBUFFER,X,s.RENDERBUFFER,J)}t.bindFramebuffer(s.FRAMEBUFFER,null)}function Re(T,I,P){const X=n.get(T);I!==void 0&&ue(X.__webglFramebuffer,T,T.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),P!==void 0&&Pe(T)}function Qe(T){const I=T.texture,P=n.get(T),X=n.get(I);T.addEventListener("dispose",v);const J=T.textures,K=T.isWebGLCubeRenderTarget===!0,ve=J.length>1;if(ve||(X.__webglTexture===void 0&&(X.__webglTexture=s.createTexture()),X.__version=I.version,a.memory.textures++),K){P.__webglFramebuffer=[];for(let de=0;de<6;de++)if(I.mipmaps&&I.mipmaps.length>0){P.__webglFramebuffer[de]=[];for(let be=0;be<I.mipmaps.length;be++)P.__webglFramebuffer[de][be]=s.createFramebuffer()}else P.__webglFramebuffer[de]=s.createFramebuffer()}else{if(I.mipmaps&&I.mipmaps.length>0){P.__webglFramebuffer=[];for(let de=0;de<I.mipmaps.length;de++)P.__webglFramebuffer[de]=s.createFramebuffer()}else P.__webglFramebuffer=s.createFramebuffer();if(ve)for(let de=0,be=J.length;de<be;de++){const ke=n.get(J[de]);ke.__webglTexture===void 0&&(ke.__webglTexture=s.createTexture(),a.memory.textures++)}if(T.samples>0&&me(T)===!1){P.__webglMultisampledFramebuffer=s.createFramebuffer(),P.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,P.__webglMultisampledFramebuffer);for(let de=0;de<J.length;de++){const be=J[de];P.__webglColorRenderbuffer[de]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,P.__webglColorRenderbuffer[de]);const ke=r.convert(be.format,be.colorSpace),ee=r.convert(be.type),ye=x(be.internalFormat,ke,ee,be.colorSpace,T.isXRRenderTarget===!0),Le=ae(T);s.renderbufferStorageMultisample(s.RENDERBUFFER,Le,ye,T.width,T.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+de,s.RENDERBUFFER,P.__webglColorRenderbuffer[de])}s.bindRenderbuffer(s.RENDERBUFFER,null),T.depthBuffer&&(P.__webglDepthRenderbuffer=s.createRenderbuffer(),re(P.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(K){t.bindTexture(s.TEXTURE_CUBE_MAP,X.__webglTexture),le(s.TEXTURE_CUBE_MAP,I);for(let de=0;de<6;de++)if(I.mipmaps&&I.mipmaps.length>0)for(let be=0;be<I.mipmaps.length;be++)ue(P.__webglFramebuffer[de][be],T,I,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+de,be);else ue(P.__webglFramebuffer[de],T,I,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+de,0);g(I)&&A(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ve){for(let de=0,be=J.length;de<be;de++){const ke=J[de],ee=n.get(ke);t.bindTexture(s.TEXTURE_2D,ee.__webglTexture),le(s.TEXTURE_2D,ke),ue(P.__webglFramebuffer,T,ke,s.COLOR_ATTACHMENT0+de,s.TEXTURE_2D,0),g(ke)&&A(s.TEXTURE_2D)}t.unbindTexture()}else{let de=s.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(de=T.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(de,X.__webglTexture),le(de,I),I.mipmaps&&I.mipmaps.length>0)for(let be=0;be<I.mipmaps.length;be++)ue(P.__webglFramebuffer[be],T,I,s.COLOR_ATTACHMENT0,de,be);else ue(P.__webglFramebuffer,T,I,s.COLOR_ATTACHMENT0,de,0);g(I)&&A(de),t.unbindTexture()}T.depthBuffer&&Pe(T)}function $(T){const I=T.textures;for(let P=0,X=I.length;P<X;P++){const J=I[P];if(g(J)){const K=b(T),ve=n.get(J).__webglTexture;t.bindTexture(K,ve),A(K),t.unbindTexture()}}}const ce=[],D=[];function Ce(T){if(T.samples>0){if(me(T)===!1){const I=T.textures,P=T.width,X=T.height;let J=s.COLOR_BUFFER_BIT;const K=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ve=n.get(T),de=I.length>1;if(de)for(let be=0;be<I.length;be++)t.bindFramebuffer(s.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+be,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,ve.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+be,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,ve.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ve.__webglFramebuffer);for(let be=0;be<I.length;be++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(J|=s.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(J|=s.STENCIL_BUFFER_BIT)),de){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,ve.__webglColorRenderbuffer[be]);const ke=n.get(I[be]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,ke,0)}s.blitFramebuffer(0,0,P,X,0,0,P,X,J,s.NEAREST),c===!0&&(ce.length=0,D.length=0,ce.push(s.COLOR_ATTACHMENT0+be),T.depthBuffer&&T.resolveDepthBuffer===!1&&(ce.push(K),D.push(K),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,D)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,ce))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),de)for(let be=0;be<I.length;be++){t.bindFramebuffer(s.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+be,s.RENDERBUFFER,ve.__webglColorRenderbuffer[be]);const ke=n.get(I[be]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,ve.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+be,s.TEXTURE_2D,ke,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ve.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&c){const I=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[I])}}}function ae(T){return Math.min(i.maxSamples,T.samples)}function me(T){const I=n.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&I.__useRenderToTexture!==!1}function fe(T){const I=a.render.frame;h.get(T)!==I&&(h.set(T,I),T.update())}function Ue(T,I){const P=T.colorSpace,X=T.format,J=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||P!==Nt&&P!==An&&(Je.getTransfer(P)===ot?(X!==St||J!==wt)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",P)),I}function _e(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(l.width=T.naturalWidth||T.width,l.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(l.width=T.displayWidth,l.height=T.displayHeight):(l.width=T.width,l.height=T.height),l}this.allocateTextureUnit=L,this.resetTextureUnits=U,this.setTexture2D=z,this.setTexture2DArray=N,this.setTexture3D=H,this.setTextureCube=O,this.rebindTextures=Re,this.setupRenderTarget=Qe,this.updateRenderTargetMipmap=$,this.updateMultisampleRenderTarget=Ce,this.setupDepthRenderbuffer=Pe,this.setupFrameBufferTexture=ue,this.useMultisampledRTT=me}function l0(s,e){function t(n,i=An){let r;const a=Je.getTransfer(i);if(n===wt)return s.UNSIGNED_BYTE;if(n===oc)return s.UNSIGNED_SHORT_4_4_4_4;if(n===cc)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Gh)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===kh)return s.BYTE;if(n===Oh)return s.SHORT;if(n===zs)return s.UNSIGNED_SHORT;if(n===ac)return s.INT;if(n===yi)return s.UNSIGNED_INT;if(n===Ut)return s.FLOAT;if(n===bn)return s.HALF_FLOAT;if(n===zh)return s.ALPHA;if(n===Hh)return s.RGB;if(n===St)return s.RGBA;if(n===Vh)return s.LUMINANCE;if(n===Wh)return s.LUMINANCE_ALPHA;if(n===Ki)return s.DEPTH_COMPONENT;if(n===ns)return s.DEPTH_STENCIL;if(n===ti)return s.RED;if(n===lc)return s.RED_INTEGER;if(n===Ei)return s.RG;if(n===hc)return s.RG_INTEGER;if(n===uc)return s.RGBA_INTEGER;if(n===Qr||n===Ds||n===kr||n===Ls)if(a===ot)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Qr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ds)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===kr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ls)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Qr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ds)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===kr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ls)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Hr||n===wo||n===Vr||n===So)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Hr)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===wo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Vr)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===So)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Wr||n===qr||n===Xr)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Wr||n===qr)return a===ot?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Xr)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Hs||n===Bo||n===To||n===Ro||n===Vs||n===Do||n===Lo||n===Po||n===Uo||n===Fo||n===No||n===Qo||n===ko||n===Oo)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Hs)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Bo)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===To)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ro)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Vs)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Do)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Lo)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Po)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Uo)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Fo)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===No)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Qo)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ko)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Oo)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ps||n===Go||n===Yr)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Ps)return a===ot?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Go)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Yr)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===qh||n===zo||n===Ho||n===Vo)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Ps)return r.COMPRESSED_RED_RGTC1_EXT;if(n===zo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ho)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Vo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ts?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}class h0 extends Gt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Bt extends dt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const u0={type:"move"};class Va{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Bt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Bt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Bt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const p of e.hand.values()){const g=t.getJointPose(p,n),A=this._getHandJoint(l,p);g!==null&&(A.matrix.fromArray(g.transform.matrix),A.matrix.decompose(A.position,A.rotation,A.scale),A.matrixWorldNeedsUpdate=!0,A.jointRadius=g.radius),A.visible=g!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,m=.005;l.inputState.pinching&&f>d+m?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=d-m&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(u0)))}return o!==null&&(o.visible=i!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Bt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const f0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,d0=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class A0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const i=new Et,r=e.properties.get(i);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Mn({vertexShader:f0,fragmentShader:d0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new qe(new Vn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class p0 extends cs{constructor(e,t){super();const n=this;let i=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,u=null,f=null,d=null,m=null;const p=new A0,g=t.getContextAttributes();let A=null,b=null;const x=[],E=[],C=new oe;let _=null;const v=new Gt;v.viewport=new et;const w=new Gt;w.viewport=new et;const M=[v,w],y=new h0;let B=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let se=x[q];return se===void 0&&(se=new Va,x[q]=se),se.getTargetRaySpace()},this.getControllerGrip=function(q){let se=x[q];return se===void 0&&(se=new Va,x[q]=se),se.getGripSpace()},this.getHand=function(q){let se=x[q];return se===void 0&&(se=new Va,x[q]=se),se.getHandSpace()};function L(q){const se=E.indexOf(q.inputSource);if(se===-1)return;const ue=x[se];ue!==void 0&&(ue.update(q.inputSource,q.frame,l||a),ue.dispatchEvent({type:q.type,data:q.inputSource}))}function Q(){i.removeEventListener("select",L),i.removeEventListener("selectstart",L),i.removeEventListener("selectend",L),i.removeEventListener("squeeze",L),i.removeEventListener("squeezestart",L),i.removeEventListener("squeezeend",L),i.removeEventListener("end",Q),i.removeEventListener("inputsourceschange",z);for(let q=0;q<x.length;q++){const se=E[q];se!==null&&(E[q]=null,x[q].disconnect(se))}B=null,U=null,p.reset(),e.setRenderTarget(A),d=null,f=null,u=null,i=null,b=null,Te.stop(),n.isPresenting=!1,e.setPixelRatio(_),e.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){o=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(q){l=q},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(q){if(i=q,i!==null){if(A=e.getRenderTarget(),i.addEventListener("select",L),i.addEventListener("selectstart",L),i.addEventListener("selectend",L),i.addEventListener("squeeze",L),i.addEventListener("squeezestart",L),i.addEventListener("squeezeend",L),i.addEventListener("end",Q),i.addEventListener("inputsourceschange",z),g.xrCompatible!==!0&&await t.makeXRCompatible(),_=e.getPixelRatio(),e.getSize(C),i.renderState.layers===void 0){const se={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(i,t,se),i.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),b=new Mi(d.framebufferWidth,d.framebufferHeight,{format:St,type:wt,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let se=null,ue=null,re=null;g.depth&&(re=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,se=g.stencil?ns:Ki,ue=g.stencil?ts:yi);const Ie={colorFormat:t.RGBA8,depthFormat:re,scaleFactor:r};u=new XRWebGLBinding(i,t),f=u.createProjectionLayer(Ie),i.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),b=new Mi(f.textureWidth,f.textureHeight,{format:St,type:wt,depthTexture:new au(f.textureWidth,f.textureHeight,ue,void 0,void 0,void 0,void 0,void 0,void 0,se),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await i.requestReferenceSpace(o),Te.setContext(i),Te.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function z(q){for(let se=0;se<q.removed.length;se++){const ue=q.removed[se],re=E.indexOf(ue);re>=0&&(E[re]=null,x[re].disconnect(ue))}for(let se=0;se<q.added.length;se++){const ue=q.added[se];let re=E.indexOf(ue);if(re===-1){for(let Pe=0;Pe<x.length;Pe++)if(Pe>=E.length){E.push(ue),re=Pe;break}else if(E[Pe]===null){E[Pe]=ue,re=Pe;break}if(re===-1)break}const Ie=x[re];Ie&&Ie.connect(ue)}}const N=new R,H=new R;function O(q,se,ue){N.setFromMatrixPosition(se.matrixWorld),H.setFromMatrixPosition(ue.matrixWorld);const re=N.distanceTo(H),Ie=se.projectionMatrix.elements,Pe=ue.projectionMatrix.elements,Re=Ie[14]/(Ie[10]-1),Qe=Ie[14]/(Ie[10]+1),$=(Ie[9]+1)/Ie[5],ce=(Ie[9]-1)/Ie[5],D=(Ie[8]-1)/Ie[0],Ce=(Pe[8]+1)/Pe[0],ae=Re*D,me=Re*Ce,fe=re/(-D+Ce),Ue=fe*-D;if(se.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(Ue),q.translateZ(fe),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),Ie[10]===-1)q.projectionMatrix.copy(se.projectionMatrix),q.projectionMatrixInverse.copy(se.projectionMatrixInverse);else{const _e=Re+fe,T=Qe+fe,I=ae-Ue,P=me+(re-Ue),X=$*Qe/T*_e,J=ce*Qe/T*_e;q.projectionMatrix.makePerspective(I,P,X,J,_e,T),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function j(q,se){se===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(se.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(i===null)return;let se=q.near,ue=q.far;p.texture!==null&&(p.depthNear>0&&(se=p.depthNear),p.depthFar>0&&(ue=p.depthFar)),y.near=w.near=v.near=se,y.far=w.far=v.far=ue,(B!==y.near||U!==y.far)&&(i.updateRenderState({depthNear:y.near,depthFar:y.far}),B=y.near,U=y.far),v.layers.mask=q.layers.mask|2,w.layers.mask=q.layers.mask|4,y.layers.mask=v.layers.mask|w.layers.mask;const re=q.parent,Ie=y.cameras;j(y,re);for(let Pe=0;Pe<Ie.length;Pe++)j(Ie[Pe],re);Ie.length===2?O(y,v,w):y.projectionMatrix.copy(v.projectionMatrix),Z(q,y,re)};function Z(q,se,ue){ue===null?q.matrix.copy(se.matrixWorld):(q.matrix.copy(ue.matrixWorld),q.matrix.invert(),q.matrix.multiply(se.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(se.projectionMatrix),q.projectionMatrixInverse.copy(se.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=is*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(f===null&&d===null))return c},this.setFoveation=function(q){c=q,f!==null&&(f.fixedFoveation=q),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=q)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(y)};let ie=null;function le(q,se){if(h=se.getViewerPose(l||a),m=se,h!==null){const ue=h.views;d!==null&&(e.setRenderTargetFramebuffer(b,d.framebuffer),e.setRenderTarget(b));let re=!1;ue.length!==y.cameras.length&&(y.cameras.length=0,re=!0);for(let Pe=0;Pe<ue.length;Pe++){const Re=ue[Pe];let Qe=null;if(d!==null)Qe=d.getViewport(Re);else{const ce=u.getViewSubImage(f,Re);Qe=ce.viewport,Pe===0&&(e.setRenderTargetTextures(b,ce.colorTexture,f.ignoreDepthValues?void 0:ce.depthStencilTexture),e.setRenderTarget(b))}let $=M[Pe];$===void 0&&($=new Gt,$.layers.enable(Pe),$.viewport=new et,M[Pe]=$),$.matrix.fromArray(Re.transform.matrix),$.matrix.decompose($.position,$.quaternion,$.scale),$.projectionMatrix.fromArray(Re.projectionMatrix),$.projectionMatrixInverse.copy($.projectionMatrix).invert(),$.viewport.set(Qe.x,Qe.y,Qe.width,Qe.height),Pe===0&&(y.matrix.copy($.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),re===!0&&y.cameras.push($)}const Ie=i.enabledFeatures;if(Ie&&Ie.includes("depth-sensing")){const Pe=u.getDepthInformation(ue[0]);Pe&&Pe.isValid&&Pe.texture&&p.init(e,Pe,i.renderState)}}for(let ue=0;ue<x.length;ue++){const re=E[ue],Ie=x[ue];re!==null&&Ie!==void 0&&Ie.update(re,se,l||a)}ie&&ie(q,se),se.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:se}),m=null}const Te=new ru;Te.setAnimationLoop(le),this.setAnimationLoop=function(q){ie=q},this.dispose=function(){}}}const di=new Zt,g0=new Ne;function m0(s,e){function t(g,A){g.matrixAutoUpdate===!0&&g.updateMatrix(),A.value.copy(g.matrix)}function n(g,A){A.color.getRGB(g.fogColor.value,nu(s)),A.isFog?(g.fogNear.value=A.near,g.fogFar.value=A.far):A.isFogExp2&&(g.fogDensity.value=A.density)}function i(g,A,b,x,E){A.isMeshBasicMaterial||A.isMeshLambertMaterial?r(g,A):A.isMeshToonMaterial?(r(g,A),u(g,A)):A.isMeshPhongMaterial?(r(g,A),h(g,A)):A.isMeshStandardMaterial?(r(g,A),f(g,A),A.isMeshPhysicalMaterial&&d(g,A,E)):A.isMeshMatcapMaterial?(r(g,A),m(g,A)):A.isMeshDepthMaterial?r(g,A):A.isMeshDistanceMaterial?(r(g,A),p(g,A)):A.isMeshNormalMaterial?r(g,A):A.isLineBasicMaterial?(a(g,A),A.isLineDashedMaterial&&o(g,A)):A.isPointsMaterial?c(g,A,b,x):A.isSpriteMaterial?l(g,A):A.isShadowMaterial?(g.color.value.copy(A.color),g.opacity.value=A.opacity):A.isShaderMaterial&&(A.uniformsNeedUpdate=!1)}function r(g,A){g.opacity.value=A.opacity,A.color&&g.diffuse.value.copy(A.color),A.emissive&&g.emissive.value.copy(A.emissive).multiplyScalar(A.emissiveIntensity),A.map&&(g.map.value=A.map,t(A.map,g.mapTransform)),A.alphaMap&&(g.alphaMap.value=A.alphaMap,t(A.alphaMap,g.alphaMapTransform)),A.bumpMap&&(g.bumpMap.value=A.bumpMap,t(A.bumpMap,g.bumpMapTransform),g.bumpScale.value=A.bumpScale,A.side===Ft&&(g.bumpScale.value*=-1)),A.normalMap&&(g.normalMap.value=A.normalMap,t(A.normalMap,g.normalMapTransform),g.normalScale.value.copy(A.normalScale),A.side===Ft&&g.normalScale.value.negate()),A.displacementMap&&(g.displacementMap.value=A.displacementMap,t(A.displacementMap,g.displacementMapTransform),g.displacementScale.value=A.displacementScale,g.displacementBias.value=A.displacementBias),A.emissiveMap&&(g.emissiveMap.value=A.emissiveMap,t(A.emissiveMap,g.emissiveMapTransform)),A.specularMap&&(g.specularMap.value=A.specularMap,t(A.specularMap,g.specularMapTransform)),A.alphaTest>0&&(g.alphaTest.value=A.alphaTest);const b=e.get(A),x=b.envMap,E=b.envMapRotation;x&&(g.envMap.value=x,di.copy(E),di.x*=-1,di.y*=-1,di.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(di.y*=-1,di.z*=-1),g.envMapRotation.value.setFromMatrix4(g0.makeRotationFromEuler(di)),g.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=A.reflectivity,g.ior.value=A.ior,g.refractionRatio.value=A.refractionRatio),A.lightMap&&(g.lightMap.value=A.lightMap,g.lightMapIntensity.value=A.lightMapIntensity,t(A.lightMap,g.lightMapTransform)),A.aoMap&&(g.aoMap.value=A.aoMap,g.aoMapIntensity.value=A.aoMapIntensity,t(A.aoMap,g.aoMapTransform))}function a(g,A){g.diffuse.value.copy(A.color),g.opacity.value=A.opacity,A.map&&(g.map.value=A.map,t(A.map,g.mapTransform))}function o(g,A){g.dashSize.value=A.dashSize,g.totalSize.value=A.dashSize+A.gapSize,g.scale.value=A.scale}function c(g,A,b,x){g.diffuse.value.copy(A.color),g.opacity.value=A.opacity,g.size.value=A.size*b,g.scale.value=x*.5,A.map&&(g.map.value=A.map,t(A.map,g.uvTransform)),A.alphaMap&&(g.alphaMap.value=A.alphaMap,t(A.alphaMap,g.alphaMapTransform)),A.alphaTest>0&&(g.alphaTest.value=A.alphaTest)}function l(g,A){g.diffuse.value.copy(A.color),g.opacity.value=A.opacity,g.rotation.value=A.rotation,A.map&&(g.map.value=A.map,t(A.map,g.mapTransform)),A.alphaMap&&(g.alphaMap.value=A.alphaMap,t(A.alphaMap,g.alphaMapTransform)),A.alphaTest>0&&(g.alphaTest.value=A.alphaTest)}function h(g,A){g.specular.value.copy(A.specular),g.shininess.value=Math.max(A.shininess,1e-4)}function u(g,A){A.gradientMap&&(g.gradientMap.value=A.gradientMap)}function f(g,A){g.metalness.value=A.metalness,A.metalnessMap&&(g.metalnessMap.value=A.metalnessMap,t(A.metalnessMap,g.metalnessMapTransform)),g.roughness.value=A.roughness,A.roughnessMap&&(g.roughnessMap.value=A.roughnessMap,t(A.roughnessMap,g.roughnessMapTransform)),A.envMap&&(g.envMapIntensity.value=A.envMapIntensity)}function d(g,A,b){g.ior.value=A.ior,A.sheen>0&&(g.sheenColor.value.copy(A.sheenColor).multiplyScalar(A.sheen),g.sheenRoughness.value=A.sheenRoughness,A.sheenColorMap&&(g.sheenColorMap.value=A.sheenColorMap,t(A.sheenColorMap,g.sheenColorMapTransform)),A.sheenRoughnessMap&&(g.sheenRoughnessMap.value=A.sheenRoughnessMap,t(A.sheenRoughnessMap,g.sheenRoughnessMapTransform))),A.clearcoat>0&&(g.clearcoat.value=A.clearcoat,g.clearcoatRoughness.value=A.clearcoatRoughness,A.clearcoatMap&&(g.clearcoatMap.value=A.clearcoatMap,t(A.clearcoatMap,g.clearcoatMapTransform)),A.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=A.clearcoatRoughnessMap,t(A.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),A.clearcoatNormalMap&&(g.clearcoatNormalMap.value=A.clearcoatNormalMap,t(A.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(A.clearcoatNormalScale),A.side===Ft&&g.clearcoatNormalScale.value.negate())),A.dispersion>0&&(g.dispersion.value=A.dispersion),A.iridescence>0&&(g.iridescence.value=A.iridescence,g.iridescenceIOR.value=A.iridescenceIOR,g.iridescenceThicknessMinimum.value=A.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=A.iridescenceThicknessRange[1],A.iridescenceMap&&(g.iridescenceMap.value=A.iridescenceMap,t(A.iridescenceMap,g.iridescenceMapTransform)),A.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=A.iridescenceThicknessMap,t(A.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),A.transmission>0&&(g.transmission.value=A.transmission,g.transmissionSamplerMap.value=b.texture,g.transmissionSamplerSize.value.set(b.width,b.height),A.transmissionMap&&(g.transmissionMap.value=A.transmissionMap,t(A.transmissionMap,g.transmissionMapTransform)),g.thickness.value=A.thickness,A.thicknessMap&&(g.thicknessMap.value=A.thicknessMap,t(A.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=A.attenuationDistance,g.attenuationColor.value.copy(A.attenuationColor)),A.anisotropy>0&&(g.anisotropyVector.value.set(A.anisotropy*Math.cos(A.anisotropyRotation),A.anisotropy*Math.sin(A.anisotropyRotation)),A.anisotropyMap&&(g.anisotropyMap.value=A.anisotropyMap,t(A.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=A.specularIntensity,g.specularColor.value.copy(A.specularColor),A.specularColorMap&&(g.specularColorMap.value=A.specularColorMap,t(A.specularColorMap,g.specularColorMapTransform)),A.specularIntensityMap&&(g.specularIntensityMap.value=A.specularIntensityMap,t(A.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,A){A.matcap&&(g.matcap.value=A.matcap)}function p(g,A){const b=e.get(A).light;g.referencePosition.value.setFromMatrixPosition(b.matrixWorld),g.nearDistance.value=b.shadow.camera.near,g.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function b0(s,e,t,n){let i={},r={},a=[];const o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function c(b,x){const E=x.program;n.uniformBlockBinding(b,E)}function l(b,x){let E=i[b.id];E===void 0&&(m(b),E=h(b),i[b.id]=E,b.addEventListener("dispose",g));const C=x.program;n.updateUBOMapping(b,C);const _=e.render.frame;r[b.id]!==_&&(f(b),r[b.id]=_)}function h(b){const x=u();b.__bindingPointIndex=x;const E=s.createBuffer(),C=b.__size,_=b.usage;return s.bindBuffer(s.UNIFORM_BUFFER,E),s.bufferData(s.UNIFORM_BUFFER,C,_),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,x,E),E}function u(){for(let b=0;b<o;b++)if(a.indexOf(b)===-1)return a.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(b){const x=i[b.id],E=b.uniforms,C=b.__cache;s.bindBuffer(s.UNIFORM_BUFFER,x);for(let _=0,v=E.length;_<v;_++){const w=Array.isArray(E[_])?E[_]:[E[_]];for(let M=0,y=w.length;M<y;M++){const B=w[M];if(d(B,_,M,C)===!0){const U=B.__offset,L=Array.isArray(B.value)?B.value:[B.value];let Q=0;for(let z=0;z<L.length;z++){const N=L[z],H=p(N);typeof N=="number"||typeof N=="boolean"?(B.__data[0]=N,s.bufferSubData(s.UNIFORM_BUFFER,U+Q,B.__data)):N.isMatrix3?(B.__data[0]=N.elements[0],B.__data[1]=N.elements[1],B.__data[2]=N.elements[2],B.__data[3]=0,B.__data[4]=N.elements[3],B.__data[5]=N.elements[4],B.__data[6]=N.elements[5],B.__data[7]=0,B.__data[8]=N.elements[6],B.__data[9]=N.elements[7],B.__data[10]=N.elements[8],B.__data[11]=0):(N.toArray(B.__data,Q),Q+=H.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,U,B.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function d(b,x,E,C){const _=b.value,v=x+"_"+E;if(C[v]===void 0)return typeof _=="number"||typeof _=="boolean"?C[v]=_:C[v]=_.clone(),!0;{const w=C[v];if(typeof _=="number"||typeof _=="boolean"){if(w!==_)return C[v]=_,!0}else if(w.equals(_)===!1)return w.copy(_),!0}return!1}function m(b){const x=b.uniforms;let E=0;const C=16;for(let v=0,w=x.length;v<w;v++){const M=Array.isArray(x[v])?x[v]:[x[v]];for(let y=0,B=M.length;y<B;y++){const U=M[y],L=Array.isArray(U.value)?U.value:[U.value];for(let Q=0,z=L.length;Q<z;Q++){const N=L[Q],H=p(N),O=E%C,j=O%H.boundary,Z=O+j;E+=j,Z!==0&&C-Z<H.storage&&(E+=C-Z),U.__data=new Float32Array(H.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=E,E+=H.storage}}}const _=E%C;return _>0&&(E+=C-_),b.__size=E,b.__cache={},this}function p(b){const x={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(x.boundary=4,x.storage=4):b.isVector2?(x.boundary=8,x.storage=8):b.isVector3||b.isColor?(x.boundary=16,x.storage=12):b.isVector4?(x.boundary=16,x.storage=16):b.isMatrix3?(x.boundary=48,x.storage=48):b.isMatrix4?(x.boundary=64,x.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),x}function g(b){const x=b.target;x.removeEventListener("dispose",g);const E=a.indexOf(x.__bindingPointIndex);a.splice(E,1),s.deleteBuffer(i[x.id]),delete i[x.id],delete r[x.id]}function A(){for(const b in i)s.deleteBuffer(i[b]);a=[],i={},r={}}return{bind:c,update:l,dispose:A}}class x0{constructor(e={}){const{canvas:t=cd(),context:n=null,depth:i=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=a;const m=new Uint32Array(4),p=new Int32Array(4);let g=null,A=null;const b=[],x=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=mt,this.toneMapping=si,this.toneMappingExposure=1;const E=this;let C=!1,_=0,v=0,w=null,M=-1,y=null;const B=new et,U=new et;let L=null;const Q=new te(0);let z=0,N=t.width,H=t.height,O=1,j=null,Z=null;const ie=new et(0,0,N,H),le=new et(0,0,N,H);let Te=!1;const q=new Ac;let se=!1,ue=!1;const re=new Ne,Ie=new Ne,Pe=new R,Re=new et,Qe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let $=!1;function ce(){return w===null?O:1}let D=n;function Ce(S,k){return t.getContext(S,k)}try{const S={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${rc}`),t.addEventListener("webglcontextlost",ne,!1),t.addEventListener("webglcontextrestored",xe,!1),t.addEventListener("webglcontextcreationerror",ge,!1),D===null){const k="webgl2";if(D=Ce(k,S),D===null)throw Ce(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let ae,me,fe,Ue,_e,T,I,P,X,J,K,ve,de,be,ke,ee,ye,Le,Fe,Me,je,Ge,it,F;function Ae(){ae=new Mg(D),ae.init(),Ge=new l0(D,ae),me=new bg(D,ae,e,Ge),fe=new a0(D,ae),me.reverseDepthBuffer&&f&&fe.buffers.depth.setReversed(!0),Ue=new wg(D),_e=new Wm,T=new c0(D,ae,fe,_e,me,Ge,Ue),I=new Eg(E),P=new yg(E),X=new Pd(D),it=new gg(D,X),J=new Cg(D,X,Ue,it),K=new Bg(D,J,X,Ue),Fe=new Sg(D,me,T),ee=new xg(_e),ve=new Vm(E,I,P,ae,me,it,ee),de=new m0(E,_e),be=new Xm,ke=new $m(ae),Le=new pg(E,I,P,fe,K,d,c),ye=new s0(E,K,me),F=new b0(D,Ue,me,fe),Me=new mg(D,ae,Ue),je=new Ig(D,ae,Ue),Ue.programs=ve.programs,E.capabilities=me,E.extensions=ae,E.properties=_e,E.renderLists=be,E.shadowMap=ye,E.state=fe,E.info=Ue}Ae();const Y=new p0(E,D);this.xr=Y,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const S=ae.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=ae.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return O},this.setPixelRatio=function(S){S!==void 0&&(O=S,this.setSize(N,H,!1))},this.getSize=function(S){return S.set(N,H)},this.setSize=function(S,k,V=!0){if(Y.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}N=S,H=k,t.width=Math.floor(S*O),t.height=Math.floor(k*O),V===!0&&(t.style.width=S+"px",t.style.height=k+"px"),this.setViewport(0,0,S,k)},this.getDrawingBufferSize=function(S){return S.set(N*O,H*O).floor()},this.setDrawingBufferSize=function(S,k,V){N=S,H=k,O=V,t.width=Math.floor(S*V),t.height=Math.floor(k*V),this.setViewport(0,0,S,k)},this.getCurrentViewport=function(S){return S.copy(B)},this.getViewport=function(S){return S.copy(ie)},this.setViewport=function(S,k,V,W){S.isVector4?ie.set(S.x,S.y,S.z,S.w):ie.set(S,k,V,W),fe.viewport(B.copy(ie).multiplyScalar(O).round())},this.getScissor=function(S){return S.copy(le)},this.setScissor=function(S,k,V,W){S.isVector4?le.set(S.x,S.y,S.z,S.w):le.set(S,k,V,W),fe.scissor(U.copy(le).multiplyScalar(O).round())},this.getScissorTest=function(){return Te},this.setScissorTest=function(S){fe.setScissorTest(Te=S)},this.setOpaqueSort=function(S){j=S},this.setTransparentSort=function(S){Z=S},this.getClearColor=function(S){return S.copy(Le.getClearColor())},this.setClearColor=function(){Le.setClearColor.apply(Le,arguments)},this.getClearAlpha=function(){return Le.getClearAlpha()},this.setClearAlpha=function(){Le.setClearAlpha.apply(Le,arguments)},this.clear=function(S=!0,k=!0,V=!0){let W=0;if(S){let G=!1;if(w!==null){const he=w.texture.format;G=he===uc||he===hc||he===lc}if(G){const he=w.texture.type,Ee=he===wt||he===yi||he===zs||he===ts||he===oc||he===cc,we=Le.getClearColor(),Se=Le.getClearAlpha(),Oe=we.r,He=we.g,Be=we.b;Ee?(m[0]=Oe,m[1]=He,m[2]=Be,m[3]=Se,D.clearBufferuiv(D.COLOR,0,m)):(p[0]=Oe,p[1]=He,p[2]=Be,p[3]=Se,D.clearBufferiv(D.COLOR,0,p))}else W|=D.COLOR_BUFFER_BIT}k&&(W|=D.DEPTH_BUFFER_BIT),V&&(W|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ne,!1),t.removeEventListener("webglcontextrestored",xe,!1),t.removeEventListener("webglcontextcreationerror",ge,!1),be.dispose(),ke.dispose(),_e.dispose(),I.dispose(),P.dispose(),K.dispose(),it.dispose(),F.dispose(),ve.dispose(),Y.dispose(),Y.removeEventListener("sessionstart",Dc),Y.removeEventListener("sessionend",Lc),oi.stop()};function ne(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function xe(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;const S=Ue.autoReset,k=ye.enabled,V=ye.autoUpdate,W=ye.needsUpdate,G=ye.type;Ae(),Ue.autoReset=S,ye.enabled=k,ye.autoUpdate=V,ye.needsUpdate=W,ye.type=G}function ge(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function ze(S){const k=S.target;k.removeEventListener("dispose",ze),gt(k)}function gt(S){Rt(S),_e.remove(S)}function Rt(S){const k=_e.get(S).programs;k!==void 0&&(k.forEach(function(V){ve.releaseProgram(V)}),S.isShaderMaterial&&ve.releaseShaderCache(S))}this.renderBufferDirect=function(S,k,V,W,G,he){k===null&&(k=Qe);const Ee=G.isMesh&&G.matrixWorld.determinant()<0,we=tf(S,k,V,W,G);fe.setMaterial(W,Ee);let Se=V.index,Oe=1;if(W.wireframe===!0){if(Se=J.getWireframeAttribute(V),Se===void 0)return;Oe=2}const He=V.drawRange,Be=V.attributes.position;let $e=He.start*Oe,ct=(He.start+He.count)*Oe;he!==null&&($e=Math.max($e,he.start*Oe),ct=Math.min(ct,(he.start+he.count)*Oe)),Se!==null?($e=Math.max($e,0),ct=Math.min(ct,Se.count)):Be!=null&&($e=Math.max($e,0),ct=Math.min(ct,Be.count));const ut=ct-$e;if(ut<0||ut===1/0)return;it.setup(G,W,we,V,Se);let Ht,tt=Me;if(Se!==null&&(Ht=X.get(Se),tt=je,tt.setIndex(Ht)),G.isMesh)W.wireframe===!0?(fe.setLineWidth(W.wireframeLinewidth*ce()),tt.setMode(D.LINES)):tt.setMode(D.TRIANGLES);else if(G.isLine){let De=W.linewidth;De===void 0&&(De=1),fe.setLineWidth(De*ce()),G.isLineSegments?tt.setMode(D.LINES):G.isLineLoop?tt.setMode(D.LINE_LOOP):tt.setMode(D.LINE_STRIP)}else G.isPoints?tt.setMode(D.POINTS):G.isSprite&&tt.setMode(D.TRIANGLES);if(G.isBatchedMesh)if(G._multiDrawInstances!==null)tt.renderMultiDrawInstances(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount,G._multiDrawInstances);else if(ae.get("WEBGL_multi_draw"))tt.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{const De=G._multiDrawStarts,Tn=G._multiDrawCounts,nt=G._multiDrawCount,hn=Se?X.get(Se).bytesPerElement:1,Si=_e.get(W).currentProgram.getUniforms();for(let Vt=0;Vt<nt;Vt++)Si.setValue(D,"_gl_DrawID",Vt),tt.render(De[Vt]/hn,Tn[Vt])}else if(G.isInstancedMesh)tt.renderInstances($e,ut,G.count);else if(V.isInstancedBufferGeometry){const De=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,Tn=Math.min(V.instanceCount,De);tt.renderInstances($e,ut,Tn)}else tt.render($e,ut)};function st(S,k,V){S.transparent===!0&&S.side===rn&&S.forceSinglePass===!1?(S.side=Ft,S.needsUpdate=!0,ir(S,k,V),S.side=zn,S.needsUpdate=!0,ir(S,k,V),S.side=rn):ir(S,k,V)}this.compile=function(S,k,V=null){V===null&&(V=S),A=ke.get(V),A.init(k),x.push(A),V.traverseVisible(function(G){G.isLight&&G.layers.test(k.layers)&&(A.pushLight(G),G.castShadow&&A.pushShadow(G))}),S!==V&&S.traverseVisible(function(G){G.isLight&&G.layers.test(k.layers)&&(A.pushLight(G),G.castShadow&&A.pushShadow(G))}),A.setupLights();const W=new Set;return S.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;const he=G.material;if(he)if(Array.isArray(he))for(let Ee=0;Ee<he.length;Ee++){const we=he[Ee];st(we,V,G),W.add(we)}else st(he,V,G),W.add(he)}),x.pop(),A=null,W},this.compileAsync=function(S,k,V=null){const W=this.compile(S,k,V);return new Promise(G=>{function he(){if(W.forEach(function(Ee){_e.get(Ee).currentProgram.isReady()&&W.delete(Ee)}),W.size===0){G(S);return}setTimeout(he,10)}ae.get("KHR_parallel_shader_compile")!==null?he():setTimeout(he,10)})};let ln=null;function Bn(S){ln&&ln(S)}function Dc(){oi.stop()}function Lc(){oi.start()}const oi=new ru;oi.setAnimationLoop(Bn),typeof self<"u"&&oi.setContext(self),this.setAnimationLoop=function(S){ln=S,Y.setAnimationLoop(S),S===null?oi.stop():oi.start()},Y.addEventListener("sessionstart",Dc),Y.addEventListener("sessionend",Lc),this.render=function(S,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),Y.enabled===!0&&Y.isPresenting===!0&&(Y.cameraAutoUpdate===!0&&Y.updateCamera(k),k=Y.getCamera()),S.isScene===!0&&S.onBeforeRender(E,S,k,w),A=ke.get(S,x.length),A.init(k),x.push(A),Ie.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),q.setFromProjectionMatrix(Ie),ue=this.localClippingEnabled,se=ee.init(this.clippingPlanes,ue),g=be.get(S,b.length),g.init(),b.push(g),Y.enabled===!0&&Y.isPresenting===!0){const he=E.xr.getDepthSensingMesh();he!==null&&ga(he,k,-1/0,E.sortObjects)}ga(S,k,0,E.sortObjects),g.finish(),E.sortObjects===!0&&g.sort(j,Z),$=Y.enabled===!1||Y.isPresenting===!1||Y.hasDepthSensing()===!1,$&&Le.addToRenderList(g,S),this.info.render.frame++,se===!0&&ee.beginShadows();const V=A.state.shadowsArray;ye.render(V,S,k),se===!0&&ee.endShadows(),this.info.autoReset===!0&&this.info.reset();const W=g.opaque,G=g.transmissive;if(A.setupLights(),k.isArrayCamera){const he=k.cameras;if(G.length>0)for(let Ee=0,we=he.length;Ee<we;Ee++){const Se=he[Ee];Uc(W,G,S,Se)}$&&Le.render(S);for(let Ee=0,we=he.length;Ee<we;Ee++){const Se=he[Ee];Pc(g,S,Se,Se.viewport)}}else G.length>0&&Uc(W,G,S,k),$&&Le.render(S),Pc(g,S,k);w!==null&&(T.updateMultisampleRenderTarget(w),T.updateRenderTargetMipmap(w)),S.isScene===!0&&S.onAfterRender(E,S,k),it.resetDefaultState(),M=-1,y=null,x.pop(),x.length>0?(A=x[x.length-1],se===!0&&ee.setGlobalState(E.clippingPlanes,A.state.camera)):A=null,b.pop(),b.length>0?g=b[b.length-1]:g=null};function ga(S,k,V,W){if(S.visible===!1)return;if(S.layers.test(k.layers)){if(S.isGroup)V=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(k);else if(S.isLight)A.pushLight(S),S.castShadow&&A.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||q.intersectsSprite(S)){W&&Re.setFromMatrixPosition(S.matrixWorld).applyMatrix4(Ie);const Ee=K.update(S),we=S.material;we.visible&&g.push(S,Ee,we,V,Re.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||q.intersectsObject(S))){const Ee=K.update(S),we=S.material;if(W&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),Re.copy(S.boundingSphere.center)):(Ee.boundingSphere===null&&Ee.computeBoundingSphere(),Re.copy(Ee.boundingSphere.center)),Re.applyMatrix4(S.matrixWorld).applyMatrix4(Ie)),Array.isArray(we)){const Se=Ee.groups;for(let Oe=0,He=Se.length;Oe<He;Oe++){const Be=Se[Oe],$e=we[Be.materialIndex];$e&&$e.visible&&g.push(S,Ee,$e,V,Re.z,Be)}}else we.visible&&g.push(S,Ee,we,V,Re.z,null)}}const he=S.children;for(let Ee=0,we=he.length;Ee<we;Ee++)ga(he[Ee],k,V,W)}function Pc(S,k,V,W){const G=S.opaque,he=S.transmissive,Ee=S.transparent;A.setupLightsView(V),se===!0&&ee.setGlobalState(E.clippingPlanes,V),W&&fe.viewport(B.copy(W)),G.length>0&&nr(G,k,V),he.length>0&&nr(he,k,V),Ee.length>0&&nr(Ee,k,V),fe.buffers.depth.setTest(!0),fe.buffers.depth.setMask(!0),fe.buffers.color.setMask(!0),fe.setPolygonOffset(!1)}function Uc(S,k,V,W){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;A.state.transmissionRenderTarget[W.id]===void 0&&(A.state.transmissionRenderTarget[W.id]=new Mi(1,1,{generateMipmaps:!0,type:ae.has("EXT_color_buffer_half_float")||ae.has("EXT_color_buffer_float")?bn:wt,minFilter:mn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Je.workingColorSpace}));const he=A.state.transmissionRenderTarget[W.id],Ee=W.viewport||B;he.setSize(Ee.z,Ee.w);const we=E.getRenderTarget();E.setRenderTarget(he),E.getClearColor(Q),z=E.getClearAlpha(),z<1&&E.setClearColor(16777215,.5),E.clear(),$&&Le.render(V);const Se=E.toneMapping;E.toneMapping=si;const Oe=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),A.setupLightsView(W),se===!0&&ee.setGlobalState(E.clippingPlanes,W),nr(S,V,W),T.updateMultisampleRenderTarget(he),T.updateRenderTargetMipmap(he),ae.has("WEBGL_multisampled_render_to_texture")===!1){let He=!1;for(let Be=0,$e=k.length;Be<$e;Be++){const ct=k[Be],ut=ct.object,Ht=ct.geometry,tt=ct.material,De=ct.group;if(tt.side===rn&&ut.layers.test(W.layers)){const Tn=tt.side;tt.side=Ft,tt.needsUpdate=!0,Fc(ut,V,W,Ht,tt,De),tt.side=Tn,tt.needsUpdate=!0,He=!0}}He===!0&&(T.updateMultisampleRenderTarget(he),T.updateRenderTargetMipmap(he))}E.setRenderTarget(we),E.setClearColor(Q,z),Oe!==void 0&&(W.viewport=Oe),E.toneMapping=Se}function nr(S,k,V){const W=k.isScene===!0?k.overrideMaterial:null;for(let G=0,he=S.length;G<he;G++){const Ee=S[G],we=Ee.object,Se=Ee.geometry,Oe=W===null?Ee.material:W,He=Ee.group;we.layers.test(V.layers)&&Fc(we,k,V,Se,Oe,He)}}function Fc(S,k,V,W,G,he){S.onBeforeRender(E,k,V,W,G,he),S.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),G.onBeforeRender(E,k,V,W,S,he),G.transparent===!0&&G.side===rn&&G.forceSinglePass===!1?(G.side=Ft,G.needsUpdate=!0,E.renderBufferDirect(V,k,W,G,S,he),G.side=zn,G.needsUpdate=!0,E.renderBufferDirect(V,k,W,G,S,he),G.side=rn):E.renderBufferDirect(V,k,W,G,S,he),S.onAfterRender(E,k,V,W,G,he)}function ir(S,k,V){k.isScene!==!0&&(k=Qe);const W=_e.get(S),G=A.state.lights,he=A.state.shadowsArray,Ee=G.state.version,we=ve.getParameters(S,G.state,he,k,V),Se=ve.getProgramCacheKey(we);let Oe=W.programs;W.environment=S.isMeshStandardMaterial?k.environment:null,W.fog=k.fog,W.envMap=(S.isMeshStandardMaterial?P:I).get(S.envMap||W.environment),W.envMapRotation=W.environment!==null&&S.envMap===null?k.environmentRotation:S.envMapRotation,Oe===void 0&&(S.addEventListener("dispose",ze),Oe=new Map,W.programs=Oe);let He=Oe.get(Se);if(He!==void 0){if(W.currentProgram===He&&W.lightsStateVersion===Ee)return Qc(S,we),He}else we.uniforms=ve.getUniforms(S),S.onBeforeCompile(we,E),He=ve.acquireProgram(we,Se),Oe.set(Se,He),W.uniforms=we.uniforms;const Be=W.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Be.clippingPlanes=ee.uniform),Qc(S,we),W.needsLights=sf(S),W.lightsStateVersion=Ee,W.needsLights&&(Be.ambientLightColor.value=G.state.ambient,Be.lightProbe.value=G.state.probe,Be.directionalLights.value=G.state.directional,Be.directionalLightShadows.value=G.state.directionalShadow,Be.spotLights.value=G.state.spot,Be.spotLightShadows.value=G.state.spotShadow,Be.rectAreaLights.value=G.state.rectArea,Be.ltc_1.value=G.state.rectAreaLTC1,Be.ltc_2.value=G.state.rectAreaLTC2,Be.pointLights.value=G.state.point,Be.pointLightShadows.value=G.state.pointShadow,Be.hemisphereLights.value=G.state.hemi,Be.directionalShadowMap.value=G.state.directionalShadowMap,Be.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Be.spotShadowMap.value=G.state.spotShadowMap,Be.spotLightMatrix.value=G.state.spotLightMatrix,Be.spotLightMap.value=G.state.spotLightMap,Be.pointShadowMap.value=G.state.pointShadowMap,Be.pointShadowMatrix.value=G.state.pointShadowMatrix),W.currentProgram=He,W.uniformsList=null,He}function Nc(S){if(S.uniformsList===null){const k=S.currentProgram.getUniforms();S.uniformsList=Or.seqWithValue(k.seq,S.uniforms)}return S.uniformsList}function Qc(S,k){const V=_e.get(S);V.outputColorSpace=k.outputColorSpace,V.batching=k.batching,V.batchingColor=k.batchingColor,V.instancing=k.instancing,V.instancingColor=k.instancingColor,V.instancingMorph=k.instancingMorph,V.skinning=k.skinning,V.morphTargets=k.morphTargets,V.morphNormals=k.morphNormals,V.morphColors=k.morphColors,V.morphTargetsCount=k.morphTargetsCount,V.numClippingPlanes=k.numClippingPlanes,V.numIntersection=k.numClipIntersection,V.vertexAlphas=k.vertexAlphas,V.vertexTangents=k.vertexTangents,V.toneMapping=k.toneMapping}function tf(S,k,V,W,G){k.isScene!==!0&&(k=Qe),T.resetTextureUnits();const he=k.fog,Ee=W.isMeshStandardMaterial?k.environment:null,we=w===null?E.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:Nt,Se=(W.isMeshStandardMaterial?P:I).get(W.envMap||Ee),Oe=W.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,He=!!V.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Be=!!V.morphAttributes.position,$e=!!V.morphAttributes.normal,ct=!!V.morphAttributes.color;let ut=si;W.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(ut=E.toneMapping);const Ht=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,tt=Ht!==void 0?Ht.length:0,De=_e.get(W),Tn=A.state.lights;if(se===!0&&(ue===!0||S!==y)){const $t=S===y&&W.id===M;ee.setState(W,S,$t)}let nt=!1;W.version===De.__version?(De.needsLights&&De.lightsStateVersion!==Tn.state.version||De.outputColorSpace!==we||G.isBatchedMesh&&De.batching===!1||!G.isBatchedMesh&&De.batching===!0||G.isBatchedMesh&&De.batchingColor===!0&&G.colorTexture===null||G.isBatchedMesh&&De.batchingColor===!1&&G.colorTexture!==null||G.isInstancedMesh&&De.instancing===!1||!G.isInstancedMesh&&De.instancing===!0||G.isSkinnedMesh&&De.skinning===!1||!G.isSkinnedMesh&&De.skinning===!0||G.isInstancedMesh&&De.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&De.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&De.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&De.instancingMorph===!1&&G.morphTexture!==null||De.envMap!==Se||W.fog===!0&&De.fog!==he||De.numClippingPlanes!==void 0&&(De.numClippingPlanes!==ee.numPlanes||De.numIntersection!==ee.numIntersection)||De.vertexAlphas!==Oe||De.vertexTangents!==He||De.morphTargets!==Be||De.morphNormals!==$e||De.morphColors!==ct||De.toneMapping!==ut||De.morphTargetsCount!==tt)&&(nt=!0):(nt=!0,De.__version=W.version);let hn=De.currentProgram;nt===!0&&(hn=ir(W,k,G));let Si=!1,Vt=!1,ds=!1;const ft=hn.getUniforms(),xn=De.uniforms;if(fe.useProgram(hn.program)&&(Si=!0,Vt=!0,ds=!0),W.id!==M&&(M=W.id,Vt=!0),Si||y!==S){fe.buffers.depth.getReversed()?(re.copy(S.projectionMatrix),hd(re),ud(re),ft.setValue(D,"projectionMatrix",re)):ft.setValue(D,"projectionMatrix",S.projectionMatrix),ft.setValue(D,"viewMatrix",S.matrixWorldInverse);const Wn=ft.map.cameraPosition;Wn!==void 0&&Wn.setValue(D,Pe.setFromMatrixPosition(S.matrixWorld)),me.logarithmicDepthBuffer&&ft.setValue(D,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&ft.setValue(D,"isOrthographic",S.isOrthographicCamera===!0),y!==S&&(y=S,Vt=!0,ds=!0)}if(G.isSkinnedMesh){ft.setOptional(D,G,"bindMatrix"),ft.setOptional(D,G,"bindMatrixInverse");const $t=G.skeleton;$t&&($t.boneTexture===null&&$t.computeBoneTexture(),ft.setValue(D,"boneTexture",$t.boneTexture,T))}G.isBatchedMesh&&(ft.setOptional(D,G,"batchingTexture"),ft.setValue(D,"batchingTexture",G._matricesTexture,T),ft.setOptional(D,G,"batchingIdTexture"),ft.setValue(D,"batchingIdTexture",G._indirectTexture,T),ft.setOptional(D,G,"batchingColorTexture"),G._colorsTexture!==null&&ft.setValue(D,"batchingColorTexture",G._colorsTexture,T));const As=V.morphAttributes;if((As.position!==void 0||As.normal!==void 0||As.color!==void 0)&&Fe.update(G,V,hn),(Vt||De.receiveShadow!==G.receiveShadow)&&(De.receiveShadow=G.receiveShadow,ft.setValue(D,"receiveShadow",G.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(xn.envMap.value=Se,xn.flipEnvMap.value=Se.isCubeTexture&&Se.isRenderTargetTexture===!1?-1:1),W.isMeshStandardMaterial&&W.envMap===null&&k.environment!==null&&(xn.envMapIntensity.value=k.environmentIntensity),Vt&&(ft.setValue(D,"toneMappingExposure",E.toneMappingExposure),De.needsLights&&nf(xn,ds),he&&W.fog===!0&&de.refreshFogUniforms(xn,he),de.refreshMaterialUniforms(xn,W,O,H,A.state.transmissionRenderTarget[S.id]),Or.upload(D,Nc(De),xn,T)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(Or.upload(D,Nc(De),xn,T),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&ft.setValue(D,"center",G.center),ft.setValue(D,"modelViewMatrix",G.modelViewMatrix),ft.setValue(D,"normalMatrix",G.normalMatrix),ft.setValue(D,"modelMatrix",G.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const $t=W.uniformsGroups;for(let Wn=0,qn=$t.length;Wn<qn;Wn++){const kc=$t[Wn];F.update(kc,hn),F.bind(kc,hn)}}return hn}function nf(S,k){S.ambientLightColor.needsUpdate=k,S.lightProbe.needsUpdate=k,S.directionalLights.needsUpdate=k,S.directionalLightShadows.needsUpdate=k,S.pointLights.needsUpdate=k,S.pointLightShadows.needsUpdate=k,S.spotLights.needsUpdate=k,S.spotLightShadows.needsUpdate=k,S.rectAreaLights.needsUpdate=k,S.hemisphereLights.needsUpdate=k}function sf(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return _},this.getActiveMipmapLevel=function(){return v},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(S,k,V){_e.get(S.texture).__webglTexture=k,_e.get(S.depthTexture).__webglTexture=V;const W=_e.get(S);W.__hasExternalTextures=!0,W.__autoAllocateDepthBuffer=V===void 0,W.__autoAllocateDepthBuffer||ae.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(S,k){const V=_e.get(S);V.__webglFramebuffer=k,V.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(S,k=0,V=0){w=S,_=k,v=V;let W=!0,G=null,he=!1,Ee=!1;if(S){const Se=_e.get(S);if(Se.__useDefaultFramebuffer!==void 0)fe.bindFramebuffer(D.FRAMEBUFFER,null),W=!1;else if(Se.__webglFramebuffer===void 0)T.setupRenderTarget(S);else if(Se.__hasExternalTextures)T.rebindTextures(S,_e.get(S.texture).__webglTexture,_e.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){const Be=S.depthTexture;if(Se.__boundDepthTexture!==Be){if(Be!==null&&_e.has(Be)&&(S.width!==Be.image.width||S.height!==Be.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");T.setupDepthRenderbuffer(S)}}const Oe=S.texture;(Oe.isData3DTexture||Oe.isDataArrayTexture||Oe.isCompressedArrayTexture)&&(Ee=!0);const He=_e.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(He[k])?G=He[k][V]:G=He[k],he=!0):S.samples>0&&T.useMultisampledRTT(S)===!1?G=_e.get(S).__webglMultisampledFramebuffer:Array.isArray(He)?G=He[V]:G=He,B.copy(S.viewport),U.copy(S.scissor),L=S.scissorTest}else B.copy(ie).multiplyScalar(O).floor(),U.copy(le).multiplyScalar(O).floor(),L=Te;if(fe.bindFramebuffer(D.FRAMEBUFFER,G)&&W&&fe.drawBuffers(S,G),fe.viewport(B),fe.scissor(U),fe.setScissorTest(L),he){const Se=_e.get(S.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+k,Se.__webglTexture,V)}else if(Ee){const Se=_e.get(S.texture),Oe=k||0;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,Se.__webglTexture,V||0,Oe)}M=-1},this.readRenderTargetPixels=function(S,k,V,W,G,he,Ee){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let we=_e.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Ee!==void 0&&(we=we[Ee]),we){fe.bindFramebuffer(D.FRAMEBUFFER,we);try{const Se=S.texture,Oe=Se.format,He=Se.type;if(!me.textureFormatReadable(Oe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!me.textureTypeReadable(He)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=S.width-W&&V>=0&&V<=S.height-G&&D.readPixels(k,V,W,G,Ge.convert(Oe),Ge.convert(He),he)}finally{const Se=w!==null?_e.get(w).__webglFramebuffer:null;fe.bindFramebuffer(D.FRAMEBUFFER,Se)}}},this.readRenderTargetPixelsAsync=async function(S,k,V,W,G,he,Ee){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let we=_e.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Ee!==void 0&&(we=we[Ee]),we){const Se=S.texture,Oe=Se.format,He=Se.type;if(!me.textureFormatReadable(Oe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!me.textureTypeReadable(He))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(k>=0&&k<=S.width-W&&V>=0&&V<=S.height-G){fe.bindFramebuffer(D.FRAMEBUFFER,we);const Be=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Be),D.bufferData(D.PIXEL_PACK_BUFFER,he.byteLength,D.STREAM_READ),D.readPixels(k,V,W,G,Ge.convert(Oe),Ge.convert(He),0);const $e=w!==null?_e.get(w).__webglFramebuffer:null;fe.bindFramebuffer(D.FRAMEBUFFER,$e);const ct=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await ld(D,ct,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,Be),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,he),D.deleteBuffer(Be),D.deleteSync(ct),he}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(S,k=null,V=0){S.isTexture!==!0&&(Ts("WebGLRenderer: copyFramebufferToTexture function signature has changed."),k=arguments[0]||null,S=arguments[1]);const W=Math.pow(2,-V),G=Math.floor(S.image.width*W),he=Math.floor(S.image.height*W),Ee=k!==null?k.x:0,we=k!==null?k.y:0;T.setTexture2D(S,0),D.copyTexSubImage2D(D.TEXTURE_2D,V,0,0,Ee,we,G,he),fe.unbindTexture()},this.copyTextureToTexture=function(S,k,V=null,W=null,G=0){S.isTexture!==!0&&(Ts("WebGLRenderer: copyTextureToTexture function signature has changed."),W=arguments[0]||null,S=arguments[1],k=arguments[2],G=arguments[3]||0,V=null);let he,Ee,we,Se,Oe,He,Be,$e,ct;const ut=S.isCompressedTexture?S.mipmaps[G]:S.image;V!==null?(he=V.max.x-V.min.x,Ee=V.max.y-V.min.y,we=V.isBox3?V.max.z-V.min.z:1,Se=V.min.x,Oe=V.min.y,He=V.isBox3?V.min.z:0):(he=ut.width,Ee=ut.height,we=ut.depth||1,Se=0,Oe=0,He=0),W!==null?(Be=W.x,$e=W.y,ct=W.z):(Be=0,$e=0,ct=0);const Ht=Ge.convert(k.format),tt=Ge.convert(k.type);let De;k.isData3DTexture?(T.setTexture3D(k,0),De=D.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(T.setTexture2DArray(k,0),De=D.TEXTURE_2D_ARRAY):(T.setTexture2D(k,0),De=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,k.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,k.unpackAlignment);const Tn=D.getParameter(D.UNPACK_ROW_LENGTH),nt=D.getParameter(D.UNPACK_IMAGE_HEIGHT),hn=D.getParameter(D.UNPACK_SKIP_PIXELS),Si=D.getParameter(D.UNPACK_SKIP_ROWS),Vt=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,ut.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,ut.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Se),D.pixelStorei(D.UNPACK_SKIP_ROWS,Oe),D.pixelStorei(D.UNPACK_SKIP_IMAGES,He);const ds=S.isDataArrayTexture||S.isData3DTexture,ft=k.isDataArrayTexture||k.isData3DTexture;if(S.isRenderTargetTexture||S.isDepthTexture){const xn=_e.get(S),As=_e.get(k),$t=_e.get(xn.__renderTarget),Wn=_e.get(As.__renderTarget);fe.bindFramebuffer(D.READ_FRAMEBUFFER,$t.__webglFramebuffer),fe.bindFramebuffer(D.DRAW_FRAMEBUFFER,Wn.__webglFramebuffer);for(let qn=0;qn<we;qn++)ds&&D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,_e.get(S).__webglTexture,G,He+qn),S.isDepthTexture?(ft&&D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,_e.get(k).__webglTexture,G,ct+qn),D.blitFramebuffer(Se,Oe,he,Ee,Be,$e,he,Ee,D.DEPTH_BUFFER_BIT,D.NEAREST)):ft?D.copyTexSubImage3D(De,G,Be,$e,ct+qn,Se,Oe,he,Ee):D.copyTexSubImage2D(De,G,Be,$e,ct+qn,Se,Oe,he,Ee);fe.bindFramebuffer(D.READ_FRAMEBUFFER,null),fe.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else ft?S.isDataTexture||S.isData3DTexture?D.texSubImage3D(De,G,Be,$e,ct,he,Ee,we,Ht,tt,ut.data):k.isCompressedArrayTexture?D.compressedTexSubImage3D(De,G,Be,$e,ct,he,Ee,we,Ht,ut.data):D.texSubImage3D(De,G,Be,$e,ct,he,Ee,we,Ht,tt,ut):S.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,G,Be,$e,he,Ee,Ht,tt,ut.data):S.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,G,Be,$e,ut.width,ut.height,Ht,ut.data):D.texSubImage2D(D.TEXTURE_2D,G,Be,$e,he,Ee,Ht,tt,ut);D.pixelStorei(D.UNPACK_ROW_LENGTH,Tn),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,nt),D.pixelStorei(D.UNPACK_SKIP_PIXELS,hn),D.pixelStorei(D.UNPACK_SKIP_ROWS,Si),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Vt),G===0&&k.generateMipmaps&&D.generateMipmap(De),fe.unbindTexture()},this.copyTextureToTexture3D=function(S,k,V=null,W=null,G=0){return S.isTexture!==!0&&(Ts("WebGLRenderer: copyTextureToTexture3D function signature has changed."),V=arguments[0]||null,W=arguments[1]||null,S=arguments[2],k=arguments[3],G=arguments[4]||0),Ts('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(S,k,V,W,G)},this.initRenderTarget=function(S){_e.get(S).__webglFramebuffer===void 0&&T.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?T.setTextureCube(S,0):S.isData3DTexture?T.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?T.setTexture2DArray(S,0):T.setTexture2D(S,0),fe.unbindTexture()},this.resetState=function(){_=0,v=0,w=null,fe.reset(),it.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return On}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=Je._getDrawingBufferColorSpace(e),t.unpackColorSpace=Je._getUnpackColorSpace()}}class mc{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new te(e),this.near=t,this.far=n}clone(){return new mc(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class uu extends dt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Zt,this.environmentIntensity=1,this.environmentRotation=new Zt,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class E0{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=qo,this.updateRanges=[],this.version=0,this.uuid=on()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=on()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=on()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Qt=new R;class bc{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Qt.fromBufferAttribute(this,t),Qt.applyMatrix4(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Qt.fromBufferAttribute(this,t),Qt.applyNormalMatrix(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Qt.fromBufferAttribute(this,t),Qt.transformDirection(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=pn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=rt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=rt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=rt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=rt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=rt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=pn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=pn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=pn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=pn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=rt(t,this.array),n=rt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=rt(t,this.array),n=rt(n,this.array),i=rt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=rt(t,this.array),n=rt(n,this.array),i=rt(i,this.array),r=rt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new Ke(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new bc(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Mr=new R,Ol=new R;class _0 extends dt{constructor(){super(),this._currentLevel=0,this.type="LOD",Object.defineProperties(this,{levels:{enumerable:!0,value:[]},isLOD:{value:!0}}),this.autoUpdate=!0}copy(e){super.copy(e,!1);const t=e.levels;for(let n=0,i=t.length;n<i;n++){const r=t[n];this.addLevel(r.object.clone(),r.distance,r.hysteresis)}return this.autoUpdate=e.autoUpdate,this}addLevel(e,t=0,n=0){t=Math.abs(t);const i=this.levels;let r;for(r=0;r<i.length&&!(t<i[r].distance);r++);return i.splice(r,0,{distance:t,hysteresis:n,object:e}),this.add(e),this}removeLevel(e){const t=this.levels;for(let n=0;n<t.length;n++)if(t[n].distance===e){const i=t.splice(n,1);return this.remove(i[0].object),!0}return!1}getCurrentLevel(){return this._currentLevel}getObjectForDistance(e){const t=this.levels;if(t.length>0){let n,i;for(n=1,i=t.length;n<i;n++){let r=t[n].distance;if(t[n].object.visible&&(r-=r*t[n].hysteresis),e<r)break}return t[n-1].object}return null}raycast(e,t){if(this.levels.length>0){Mr.setFromMatrixPosition(this.matrixWorld);const i=e.ray.origin.distanceTo(Mr);this.getObjectForDistance(i).raycast(e,t)}}update(e){const t=this.levels;if(t.length>1){Mr.setFromMatrixPosition(e.matrixWorld),Ol.setFromMatrixPosition(this.matrixWorld);const n=Mr.distanceTo(Ol)/e.zoom;t[0].object.visible=!0;let i,r;for(i=1,r=t.length;i<r;i++){let a=t[i].distance;if(t[i].object.visible&&(a-=a*t[i].hysteresis),n>=a)t[i-1].object.visible=!1,t[i].object.visible=!0;else break}for(this._currentLevel=i-1;i<r;i++)t[i].object.visible=!1}}toJSON(e){const t=super.toJSON(e);this.autoUpdate===!1&&(t.object.autoUpdate=!1),t.object.levels=[];const n=this.levels;for(let i=0,r=n.length;i<r;i++){const a=n[i];t.object.levels.push({object:a.object.uuid,distance:a.distance,hysteresis:a.hysteresis})}return t}}const Gl=new R,zl=new et,Hl=new et,v0=new R,Vl=new Ne,Cr=new R,Wa=new Cn,Wl=new Ne,qa=new oa;class y0 extends qe{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Hc,this.bindMatrix=new Ne,this.bindMatrixInverse=new Ne,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Hn),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Cr),this.boundingBox.expandByPoint(Cr)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Cn),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Cr),this.boundingSphere.expandByPoint(Cr)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Wa.copy(this.boundingSphere),Wa.applyMatrix4(i),e.ray.intersectsSphere(Wa)!==!1&&(Wl.copy(i).invert(),qa.copy(e.ray).applyMatrix4(Wl),!(this.boundingBox!==null&&qa.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,qa)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new et,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Hc?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Lf?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;zl.fromBufferAttribute(i.attributes.skinIndex,e),Hl.fromBufferAttribute(i.attributes.skinWeight,e),Gl.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const a=Hl.getComponent(r);if(a!==0){const o=zl.getComponent(r);Vl.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(v0.copy(Gl).applyMatrix4(Vl),a)}}return t.applyMatrix4(this.bindMatrixInverse)}}class fu extends dt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class la extends Et{constructor(e=null,t=1,n=1,i,r,a,o,c,l=zt,h=zt,u,f){super(null,a,o,c,l,h,i,r,u,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const ql=new Ne,M0=new Ne;class xc{constructor(e=[],t=[]){this.uuid=on(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Ne)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Ne;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,a=e.length;r<a;r++){const o=e[r]?e[r].matrixWorld:M0;ql.multiplyMatrices(o,t[r]),ql.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new xc(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new la(t,e,e,St,Ut);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const r=e.bones[n];let a=t[r];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),a=new fu),this.bones.push(a),this.boneInverses.push(new Ne().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){const a=t[i];e.bones.push(a.uuid);const o=n[i];e.boneInverses.push(o.toArray())}return e}}class jo extends Ke{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Hi=new Ne,Xl=new Ne,Ir=[],Yl=new Hn,C0=new Ne,xs=new qe,Es=new Cn;class _t extends qe{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new jo(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,C0)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Hn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Hi),Yl.copy(e.boundingBox).applyMatrix4(Hi),this.boundingBox.union(Yl)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Cn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Hi),Es.copy(e.boundingSphere).applyMatrix4(Hi),this.boundingSphere.union(Es)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(xs.geometry=this.geometry,xs.material=this.material,xs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Es.copy(this.boundingSphere),Es.applyMatrix4(n),e.ray.intersectsSphere(Es)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Hi),Xl.multiplyMatrices(n,Hi),xs.matrixWorld=Xl,xs.raycast(e,Ir);for(let a=0,o=Ir.length;a<o;a++){const c=Ir[a];c.instanceId=r,c.object=this,t.push(c)}Ir.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new jo(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new la(new Float32Array(i*this.count),i,this.count,ti,Ut));const r=this.morphTexture.source.data.data;let a=0;for(let l=0;l<n.length;l++)a+=n[l];const o=this.geometry.morphTargetsRelative?1:1-a,c=i*e;r[c]=o,r.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class Ec extends cn{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new te(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Kr=new R,Jr=new R,jl=new Ne,_s=new oa,wr=new Cn,Xa=new R,Kl=new R;class _c extends dt{constructor(e=new ht,t=new Ec){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)Kr.fromBufferAttribute(t,i-1),Jr.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Kr.distanceTo(Jr);e.setAttribute("lineDistance",new Xe(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),wr.copy(n.boundingSphere),wr.applyMatrix4(i),wr.radius+=r,e.ray.intersectsSphere(wr)===!1)return;jl.copy(i).invert(),_s.copy(e.ray).applyMatrix4(jl);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){const d=Math.max(0,a.start),m=Math.min(h.count,a.start+a.count);for(let p=d,g=m-1;p<g;p+=l){const A=h.getX(p),b=h.getX(p+1),x=Sr(this,e,_s,c,A,b);x&&t.push(x)}if(this.isLineLoop){const p=h.getX(m-1),g=h.getX(d),A=Sr(this,e,_s,c,p,g);A&&t.push(A)}}else{const d=Math.max(0,a.start),m=Math.min(f.count,a.start+a.count);for(let p=d,g=m-1;p<g;p+=l){const A=Sr(this,e,_s,c,p,p+1);A&&t.push(A)}if(this.isLineLoop){const p=Sr(this,e,_s,c,m-1,d);p&&t.push(p)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Sr(s,e,t,n,i,r){const a=s.geometry.attributes.position;if(Kr.fromBufferAttribute(a,i),Jr.fromBufferAttribute(a,r),t.distanceSqToSegment(Kr,Jr,Xa,Kl)>n)return;Xa.applyMatrix4(s.matrixWorld);const c=e.ray.origin.distanceTo(Xa);if(!(c<e.near||c>e.far))return{distance:c,point:Kl.clone().applyMatrix4(s.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:s}}const Jl=new R,Zl=new R;class du extends _c{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)Jl.fromBufferAttribute(t,i),Zl.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Jl.distanceTo(Zl);e.setAttribute("lineDistance",new Xe(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class I0 extends _c{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class ha extends cn{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new te(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const $l=new Ne,Ko=new oa,Br=new Cn,Tr=new R;class vc extends dt{constructor(e=new ht,t=new ha){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Br.copy(n.boundingSphere),Br.applyMatrix4(i),Br.radius+=r,e.ray.intersectsSphere(Br)===!1)return;$l.copy(i).invert(),Ko.copy(e.ray).applyMatrix4($l);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,u=n.attributes.position;if(l!==null){const f=Math.max(0,a.start),d=Math.min(l.count,a.start+a.count);for(let m=f,p=d;m<p;m++){const g=l.getX(m);Tr.fromBufferAttribute(u,g),eh(Tr,g,c,i,e,t,this)}}else{const f=Math.max(0,a.start),d=Math.min(u.count,a.start+a.count);for(let m=f,p=d;m<p;m++)Tr.fromBufferAttribute(u,m),eh(Tr,m,c,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function eh(s,e,t,n,i,r,a){const o=Ko.distanceSqToPoint(s);if(o<t){const c=new R;Ko.closestPointToPoint(s,c),c.applyMatrix4(n);const l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class ua extends Et{constructor(e,t,n,i,r,a,o,c,l,h,u,f){super(null,a,o,c,l,h,i,r,u,f),this.isCompressedTexture=!0,this.image={width:t,height:n},this.mipmaps=e,this.flipY=!1,this.generateMipmaps=!1}}class w0 extends ua{constructor(e,t,n,i,r,a){super(e,t,n,r,a),this.isCompressedArrayTexture=!0,this.image.depth=i,this.wrapR=yn,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class S0 extends ua{constructor(e,t,n){super(void 0,e[0].width,e[0].height,t,n,vi),this.isCompressedCubeTexture=!0,this.isCubeTexture=!0,this.image=e}}class $s extends Et{constructor(e,t,n,i,r,a,o,c,l){super(e,t,n,i,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class In{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(i),t.push(r),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let i=0;const r=n.length;let a;t?a=t:a=e*n[r-1];let o=0,c=r-1,l;for(;o<=c;)if(i=Math.floor(o+(c-o)/2),l=n[i]-a,l<0)o=i+1;else if(l>0)c=i-1;else{c=i;break}if(i=c,n[i]===a)return i/(r-1);const h=n[i],f=n[i+1]-h,d=(a-h)/f;return(i+d)/(r-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);const a=this.getPoint(i),o=this.getPoint(r),c=t||(a.isVector2?new oe:new R);return c.copy(o).sub(a).normalize(),c}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new R,i=[],r=[],a=[],o=new R,c=new Ne;for(let d=0;d<=e;d++){const m=d/e;i[d]=this.getTangentAt(m,new R)}r[0]=new R,a[0]=new R;let l=Number.MAX_VALUE;const h=Math.abs(i[0].x),u=Math.abs(i[0].y),f=Math.abs(i[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),f<=l&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],o),a[0].crossVectors(i[0],r[0]);for(let d=1;d<=e;d++){if(r[d]=r[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(i[d-1],i[d]),o.length()>Number.EPSILON){o.normalize();const m=Math.acos(vt(i[d-1].dot(i[d]),-1,1));r[d].applyMatrix4(c.makeRotationAxis(o,m))}a[d].crossVectors(i[d],r[d])}if(t===!0){let d=Math.acos(vt(r[0].dot(r[e]),-1,1));d/=e,i[0].dot(o.crossVectors(r[0],r[e]))>0&&(d=-d);for(let m=1;m<=e;m++)r[m].applyMatrix4(c.makeRotationAxis(i[m],d*m)),a[m].crossVectors(i[m],r[m])}return{tangents:i,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class yc extends In{constructor(e=0,t=0,n=1,i=1,r=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(e,t=new oe){const n=t,i=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(a?r=0:r=i),this.aClockwise===!0&&!a&&(r===i?r=-i:r=r-i);const o=this.aStartAngle+e*r;let c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=c-this.aX,d=l-this.aY;c=f*h-d*u+this.aX,l=f*u+d*h+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class B0 extends yc{constructor(e,t,n,i,r,a){super(e,t,n,n,i,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function Mc(){let s=0,e=0,t=0,n=0;function i(r,a,o,c){s=r,e=o,t=-3*r+3*a-2*o-c,n=2*r-2*a+o+c}return{initCatmullRom:function(r,a,o,c,l){i(a,o,l*(o-r),l*(c-a))},initNonuniformCatmullRom:function(r,a,o,c,l,h,u){let f=(a-r)/l-(o-r)/(l+h)+(o-a)/h,d=(o-a)/h-(c-a)/(h+u)+(c-o)/u;f*=h,d*=h,i(a,o,f,d)},calc:function(r){const a=r*r,o=a*r;return s+e*r+t*a+n*o}}}const Rr=new R,Ya=new Mc,ja=new Mc,Ka=new Mc;class T0 extends In{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new R){const n=t,i=this.points,r=i.length,a=(r-(this.closed?0:1))*e;let o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:c===0&&o===r-1&&(o=r-2,c=1);let l,h;this.closed||o>0?l=i[(o-1)%r]:(Rr.subVectors(i[0],i[1]).add(i[0]),l=Rr);const u=i[o%r],f=i[(o+1)%r];if(this.closed||o+2<r?h=i[(o+2)%r]:(Rr.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=Rr),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let m=Math.pow(l.distanceToSquared(u),d),p=Math.pow(u.distanceToSquared(f),d),g=Math.pow(f.distanceToSquared(h),d);p<1e-4&&(p=1),m<1e-4&&(m=p),g<1e-4&&(g=p),Ya.initNonuniformCatmullRom(l.x,u.x,f.x,h.x,m,p,g),ja.initNonuniformCatmullRom(l.y,u.y,f.y,h.y,m,p,g),Ka.initNonuniformCatmullRom(l.z,u.z,f.z,h.z,m,p,g)}else this.curveType==="catmullrom"&&(Ya.initCatmullRom(l.x,u.x,f.x,h.x,this.tension),ja.initCatmullRom(l.y,u.y,f.y,h.y,this.tension),Ka.initCatmullRom(l.z,u.z,f.z,h.z,this.tension));return n.set(Ya.calc(c),ja.calc(c),Ka.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new R().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function th(s,e,t,n,i){const r=(n-e)*.5,a=(i-t)*.5,o=s*s,c=s*o;return(2*t-2*n+r+a)*c+(-3*t+3*n-2*r-a)*o+r*s+t}function R0(s,e){const t=1-s;return t*t*e}function D0(s,e){return 2*(1-s)*s*e}function L0(s,e){return s*s*e}function Ns(s,e,t,n){return R0(s,e)+D0(s,t)+L0(s,n)}function P0(s,e){const t=1-s;return t*t*t*e}function U0(s,e){const t=1-s;return 3*t*t*s*e}function F0(s,e){return 3*(1-s)*s*s*e}function N0(s,e){return s*s*s*e}function Qs(s,e,t,n,i){return P0(s,e)+U0(s,t)+F0(s,n)+N0(s,i)}class Au extends In{constructor(e=new oe,t=new oe,n=new oe,i=new oe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new oe){const n=t,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Qs(e,i.x,r.x,a.x,o.x),Qs(e,i.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Q0 extends In{constructor(e=new R,t=new R,n=new R,i=new R){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new R){const n=t,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Qs(e,i.x,r.x,a.x,o.x),Qs(e,i.y,r.y,a.y,o.y),Qs(e,i.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class pu extends In{constructor(e=new oe,t=new oe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new oe){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new oe){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class k0 extends In{constructor(e=new R,t=new R){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new R){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new R){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class gu extends In{constructor(e=new oe,t=new oe,n=new oe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new oe){const n=t,i=this.v0,r=this.v1,a=this.v2;return n.set(Ns(e,i.x,r.x,a.x),Ns(e,i.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class O0 extends In{constructor(e=new R,t=new R,n=new R){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new R){const n=t,i=this.v0,r=this.v1,a=this.v2;return n.set(Ns(e,i.x,r.x,a.x),Ns(e,i.y,r.y,a.y),Ns(e,i.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class mu extends In{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new oe){const n=t,i=this.points,r=(i.length-1)*e,a=Math.floor(r),o=r-a,c=i[a===0?a:a-1],l=i[a],h=i[a>i.length-2?i.length-1:a+1],u=i[a>i.length-3?i.length-1:a+2];return n.set(th(o,c.x,l.x,h.x,u.x),th(o,c.y,l.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new oe().fromArray(i))}return this}}var Jo=Object.freeze({__proto__:null,ArcCurve:B0,CatmullRomCurve3:T0,CubicBezierCurve:Au,CubicBezierCurve3:Q0,EllipseCurve:yc,LineCurve:pu,LineCurve3:k0,QuadraticBezierCurve:gu,QuadraticBezierCurve3:O0,SplineCurve:mu});class G0 extends In{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Jo[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),i=this.getCurveLengths();let r=0;for(;r<i.length;){if(i[r]>=n){const a=i[r]-n,o=this.curves[r],c=o.getLength(),l=c===0?0:1-a/c;return o.getPointAt(l,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let i=0,r=this.curves;i<r.length;i++){const a=r[i],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,c=a.getPoints(o);for(let l=0;l<c.length;l++){const h=c[l];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(new Jo[i.type]().fromJSON(i))}return this}}class nh extends G0{constructor(e){super(),this.type="Path",this.currentPoint=new oe,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new pu(this.currentPoint.clone(),new oe(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){const r=new gu(this.currentPoint.clone(),new oe(e,t),new oe(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,r,a){const o=new Au(this.currentPoint.clone(),new oe(e,t),new oe(n,i),new oe(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new mu(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,r,a){const o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+o,t+c,n,i,r,a),this}absarc(e,t,n,i,r,a){return this.absellipse(e,t,n,n,i,r,a),this}ellipse(e,t,n,i,r,a,o,c){const l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+l,t+h,n,i,r,a,o,c),this}absellipse(e,t,n,i,r,a,o,c){const l=new yc(e,t,n,i,r,a,o,c);if(this.curves.length>0){const u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);const h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class fa extends ht{constructor(e=[new oe(0,-.5),new oe(.5,0),new oe(0,.5)],t=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:i},t=Math.floor(t),i=vt(i,0,Math.PI*2);const r=[],a=[],o=[],c=[],l=[],h=1/t,u=new R,f=new oe,d=new R,m=new R,p=new R;let g=0,A=0;for(let b=0;b<=e.length-1;b++)switch(b){case 0:g=e[b+1].x-e[b].x,A=e[b+1].y-e[b].y,d.x=A*1,d.y=-g,d.z=A*0,p.copy(d),d.normalize(),c.push(d.x,d.y,d.z);break;case e.length-1:c.push(p.x,p.y,p.z);break;default:g=e[b+1].x-e[b].x,A=e[b+1].y-e[b].y,d.x=A*1,d.y=-g,d.z=A*0,m.copy(d),d.x+=p.x,d.y+=p.y,d.z+=p.z,d.normalize(),c.push(d.x,d.y,d.z),p.copy(m)}for(let b=0;b<=t;b++){const x=n+b*h*i,E=Math.sin(x),C=Math.cos(x);for(let _=0;_<=e.length-1;_++){u.x=e[_].x*E,u.y=e[_].y,u.z=e[_].x*C,a.push(u.x,u.y,u.z),f.x=b/t,f.y=_/(e.length-1),o.push(f.x,f.y);const v=c[3*_+0]*E,w=c[3*_+1],M=c[3*_+0]*C;l.push(v,w,M)}}for(let b=0;b<t;b++)for(let x=0;x<e.length-1;x++){const E=x+b*e.length,C=E,_=E+e.length,v=E+e.length+1,w=E+1;r.push(C,_,w),r.push(v,w,_)}this.setIndex(r),this.setAttribute("position",new Xe(a,3)),this.setAttribute("uv",new Xe(o,2)),this.setAttribute("normal",new Xe(l,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fa(e.points,e.segments,e.phiStart,e.phiLength)}}class jt extends ht{constructor(e=1,t=1,n=1,i=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};const l=this;i=Math.floor(i),r=Math.floor(r);const h=[],u=[],f=[],d=[];let m=0;const p=[],g=n/2;let A=0;b(),a===!1&&(e>0&&x(!0),t>0&&x(!1)),this.setIndex(h),this.setAttribute("position",new Xe(u,3)),this.setAttribute("normal",new Xe(f,3)),this.setAttribute("uv",new Xe(d,2));function b(){const E=new R,C=new R;let _=0;const v=(t-e)/n;for(let w=0;w<=r;w++){const M=[],y=w/r,B=y*(t-e)+e;for(let U=0;U<=i;U++){const L=U/i,Q=L*c+o,z=Math.sin(Q),N=Math.cos(Q);C.x=B*z,C.y=-y*n+g,C.z=B*N,u.push(C.x,C.y,C.z),E.set(z,v,N).normalize(),f.push(E.x,E.y,E.z),d.push(L,1-y),M.push(m++)}p.push(M)}for(let w=0;w<i;w++)for(let M=0;M<r;M++){const y=p[M][w],B=p[M+1][w],U=p[M+1][w+1],L=p[M][w+1];(e>0||M!==0)&&(h.push(y,B,L),_+=3),(t>0||M!==r-1)&&(h.push(B,U,L),_+=3)}l.addGroup(A,_,0),A+=_}function x(E){const C=m,_=new oe,v=new R;let w=0;const M=E===!0?e:t,y=E===!0?1:-1;for(let U=1;U<=i;U++)u.push(0,g*y,0),f.push(0,y,0),d.push(.5,.5),m++;const B=m;for(let U=0;U<=i;U++){const Q=U/i*c+o,z=Math.cos(Q),N=Math.sin(Q);v.x=M*N,v.y=g*y,v.z=M*z,u.push(v.x,v.y,v.z),f.push(0,y,0),_.x=z*.5+.5,_.y=N*.5*y+.5,d.push(_.x,_.y),m++}for(let U=0;U<i;U++){const L=C+U,Q=B+U;E===!0?h.push(Q,Q+1,L):h.push(Q+1,Q,L),w+=3}l.addGroup(A,w,E===!0?1:2),A+=w}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new jt(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Cc extends ht{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};const r=[],a=[];o(i),l(n),h(),this.setAttribute("position",new Xe(r,3)),this.setAttribute("normal",new Xe(r.slice(),3)),this.setAttribute("uv",new Xe(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(b){const x=new R,E=new R,C=new R;for(let _=0;_<t.length;_+=3)d(t[_+0],x),d(t[_+1],E),d(t[_+2],C),c(x,E,C,b)}function c(b,x,E,C){const _=C+1,v=[];for(let w=0;w<=_;w++){v[w]=[];const M=b.clone().lerp(E,w/_),y=x.clone().lerp(E,w/_),B=_-w;for(let U=0;U<=B;U++)U===0&&w===_?v[w][U]=M:v[w][U]=M.clone().lerp(y,U/B)}for(let w=0;w<_;w++)for(let M=0;M<2*(_-w)-1;M++){const y=Math.floor(M/2);M%2===0?(f(v[w][y+1]),f(v[w+1][y]),f(v[w][y])):(f(v[w][y+1]),f(v[w+1][y+1]),f(v[w+1][y]))}}function l(b){const x=new R;for(let E=0;E<r.length;E+=3)x.x=r[E+0],x.y=r[E+1],x.z=r[E+2],x.normalize().multiplyScalar(b),r[E+0]=x.x,r[E+1]=x.y,r[E+2]=x.z}function h(){const b=new R;for(let x=0;x<r.length;x+=3){b.x=r[x+0],b.y=r[x+1],b.z=r[x+2];const E=g(b)/2/Math.PI+.5,C=A(b)/Math.PI+.5;a.push(E,1-C)}m(),u()}function u(){for(let b=0;b<a.length;b+=6){const x=a[b+0],E=a[b+2],C=a[b+4],_=Math.max(x,E,C),v=Math.min(x,E,C);_>.9&&v<.1&&(x<.2&&(a[b+0]+=1),E<.2&&(a[b+2]+=1),C<.2&&(a[b+4]+=1))}}function f(b){r.push(b.x,b.y,b.z)}function d(b,x){const E=b*3;x.x=e[E+0],x.y=e[E+1],x.z=e[E+2]}function m(){const b=new R,x=new R,E=new R,C=new R,_=new oe,v=new oe,w=new oe;for(let M=0,y=0;M<r.length;M+=9,y+=6){b.set(r[M+0],r[M+1],r[M+2]),x.set(r[M+3],r[M+4],r[M+5]),E.set(r[M+6],r[M+7],r[M+8]),_.set(a[y+0],a[y+1]),v.set(a[y+2],a[y+3]),w.set(a[y+4],a[y+5]),C.copy(b).add(x).add(E).divideScalar(3);const B=g(C);p(_,y+0,b,B),p(v,y+2,x,B),p(w,y+4,E,B)}}function p(b,x,E,C){C<0&&b.x===1&&(a[x]=b.x-1),E.x===0&&E.z===0&&(a[x]=C/2/Math.PI+.5)}function g(b){return Math.atan2(b.z,-b.x)}function A(b){return Math.atan2(-b.y,Math.sqrt(b.x*b.x+b.z*b.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Cc(e.vertices,e.indices,e.radius,e.details)}}class er extends nh{constructor(e){super(e),this.uuid=on(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(new nh().fromJSON(i))}return this}}const z0={triangulate:function(s,e,t=2){const n=e&&e.length,i=n?e[0]*t:s.length;let r=bu(s,0,i,t,!0);const a=[];if(!r||r.next===r.prev)return a;let o,c,l,h,u,f,d;if(n&&(r=X0(s,e,r,t)),s.length>80*t){o=l=s[0],c=h=s[1];for(let m=t;m<i;m+=t)u=s[m],f=s[m+1],u<o&&(o=u),f<c&&(c=f),u>l&&(l=u),f>h&&(h=f);d=Math.max(l-o,h-c),d=d!==0?32767/d:0}return Ys(r,a,t,o,c,d,0),a}};function bu(s,e,t,n,i){let r,a;if(i===sb(s,e,t,n)>0)for(r=e;r<t;r+=n)a=ih(r,s[r],s[r+1],a);else for(r=t-n;r>=e;r-=n)a=ih(r,s[r],s[r+1],a);return a&&da(a,a.next)&&(Ks(a),a=a.next),a}function Ci(s,e){if(!s)return s;e||(e=s);let t=s,n;do if(n=!1,!t.steiner&&(da(t,t.next)||pt(t.prev,t,t.next)===0)){if(Ks(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Ys(s,e,t,n,i,r,a){if(!s)return;!a&&r&&Z0(s,n,i,r);let o=s,c,l;for(;s.prev!==s.next;){if(c=s.prev,l=s.next,r?V0(s,n,i,r):H0(s)){e.push(c.i/t|0),e.push(s.i/t|0),e.push(l.i/t|0),Ks(s),s=l.next,o=l.next;continue}if(s=l,s===o){a?a===1?(s=W0(Ci(s),e,t),Ys(s,e,t,n,i,r,2)):a===2&&q0(s,e,t,n,i,r):Ys(Ci(s),e,t,n,i,r,1);break}}}function H0(s){const e=s.prev,t=s,n=s.next;if(pt(e,t,n)>=0)return!1;const i=e.x,r=t.x,a=n.x,o=e.y,c=t.y,l=n.y,h=i<r?i<a?i:a:r<a?r:a,u=o<c?o<l?o:l:c<l?c:l,f=i>r?i>a?i:a:r>a?r:a,d=o>c?o>l?o:l:c>l?c:l;let m=n.next;for(;m!==e;){if(m.x>=h&&m.x<=f&&m.y>=u&&m.y<=d&&Yi(i,o,r,c,a,l,m.x,m.y)&&pt(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function V0(s,e,t,n){const i=s.prev,r=s,a=s.next;if(pt(i,r,a)>=0)return!1;const o=i.x,c=r.x,l=a.x,h=i.y,u=r.y,f=a.y,d=o<c?o<l?o:l:c<l?c:l,m=h<u?h<f?h:f:u<f?u:f,p=o>c?o>l?o:l:c>l?c:l,g=h>u?h>f?h:f:u>f?u:f,A=Zo(d,m,e,t,n),b=Zo(p,g,e,t,n);let x=s.prevZ,E=s.nextZ;for(;x&&x.z>=A&&E&&E.z<=b;){if(x.x>=d&&x.x<=p&&x.y>=m&&x.y<=g&&x!==i&&x!==a&&Yi(o,h,c,u,l,f,x.x,x.y)&&pt(x.prev,x,x.next)>=0||(x=x.prevZ,E.x>=d&&E.x<=p&&E.y>=m&&E.y<=g&&E!==i&&E!==a&&Yi(o,h,c,u,l,f,E.x,E.y)&&pt(E.prev,E,E.next)>=0))return!1;E=E.nextZ}for(;x&&x.z>=A;){if(x.x>=d&&x.x<=p&&x.y>=m&&x.y<=g&&x!==i&&x!==a&&Yi(o,h,c,u,l,f,x.x,x.y)&&pt(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;E&&E.z<=b;){if(E.x>=d&&E.x<=p&&E.y>=m&&E.y<=g&&E!==i&&E!==a&&Yi(o,h,c,u,l,f,E.x,E.y)&&pt(E.prev,E,E.next)>=0)return!1;E=E.nextZ}return!0}function W0(s,e,t){let n=s;do{const i=n.prev,r=n.next.next;!da(i,r)&&xu(i,n,n.next,r)&&js(i,r)&&js(r,i)&&(e.push(i.i/t|0),e.push(n.i/t|0),e.push(r.i/t|0),Ks(n),Ks(n.next),n=s=r),n=n.next}while(n!==s);return Ci(n)}function q0(s,e,t,n,i,r){let a=s;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&tb(a,o)){let c=Eu(a,o);a=Ci(a,a.next),c=Ci(c,c.next),Ys(a,e,t,n,i,r,0),Ys(c,e,t,n,i,r,0);return}o=o.next}a=a.next}while(a!==s)}function X0(s,e,t,n){const i=[];let r,a,o,c,l;for(r=0,a=e.length;r<a;r++)o=e[r]*n,c=r<a-1?e[r+1]*n:s.length,l=bu(s,o,c,n,!1),l===l.next&&(l.steiner=!0),i.push(eb(l));for(i.sort(Y0),r=0;r<i.length;r++)t=j0(i[r],t);return t}function Y0(s,e){return s.x-e.x}function j0(s,e){const t=K0(s,e);if(!t)return e;const n=Eu(t,s);return Ci(n,n.next),Ci(t,t.next)}function K0(s,e){let t=e,n=-1/0,i;const r=s.x,a=s.y;do{if(a<=t.y&&a>=t.next.y&&t.next.y!==t.y){const f=t.x+(a-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=r&&f>n&&(n=f,i=t.x<t.next.x?t:t.next,f===r))return i}t=t.next}while(t!==e);if(!i)return null;const o=i,c=i.x,l=i.y;let h=1/0,u;t=i;do r>=t.x&&t.x>=c&&r!==t.x&&Yi(a<l?r:n,a,c,l,a<l?n:r,a,t.x,t.y)&&(u=Math.abs(a-t.y)/(r-t.x),js(t,s)&&(u<h||u===h&&(t.x>i.x||t.x===i.x&&J0(i,t)))&&(i=t,h=u)),t=t.next;while(t!==o);return i}function J0(s,e){return pt(s.prev,s,e.prev)<0&&pt(e.next,s,s.next)<0}function Z0(s,e,t,n){let i=s;do i.z===0&&(i.z=Zo(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,$0(i)}function $0(s){let e,t,n,i,r,a,o,c,l=1;do{for(t=s,s=null,r=null,a=0;t;){for(a++,n=t,o=0,e=0;e<l&&(o++,n=n.nextZ,!!n);e++);for(c=l;o>0||c>0&&n;)o!==0&&(c===0||!n||t.z<=n.z)?(i=t,t=t.nextZ,o--):(i=n,n=n.nextZ,c--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;t=n}r.nextZ=null,l*=2}while(a>1);return s}function Zo(s,e,t,n,i){return s=(s-t)*i|0,e=(e-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,s|e<<1}function eb(s){let e=s,t=s;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==s);return t}function Yi(s,e,t,n,i,r,a,o){return(i-a)*(e-o)>=(s-a)*(r-o)&&(s-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(i-a)*(n-o)}function tb(s,e){return s.next.i!==e.i&&s.prev.i!==e.i&&!nb(s,e)&&(js(s,e)&&js(e,s)&&ib(s,e)&&(pt(s.prev,s,e.prev)||pt(s,e.prev,e))||da(s,e)&&pt(s.prev,s,s.next)>0&&pt(e.prev,e,e.next)>0)}function pt(s,e,t){return(e.y-s.y)*(t.x-e.x)-(e.x-s.x)*(t.y-e.y)}function da(s,e){return s.x===e.x&&s.y===e.y}function xu(s,e,t,n){const i=Lr(pt(s,e,t)),r=Lr(pt(s,e,n)),a=Lr(pt(t,n,s)),o=Lr(pt(t,n,e));return!!(i!==r&&a!==o||i===0&&Dr(s,t,e)||r===0&&Dr(s,n,e)||a===0&&Dr(t,s,n)||o===0&&Dr(t,e,n))}function Dr(s,e,t){return e.x<=Math.max(s.x,t.x)&&e.x>=Math.min(s.x,t.x)&&e.y<=Math.max(s.y,t.y)&&e.y>=Math.min(s.y,t.y)}function Lr(s){return s>0?1:s<0?-1:0}function nb(s,e){let t=s;do{if(t.i!==s.i&&t.next.i!==s.i&&t.i!==e.i&&t.next.i!==e.i&&xu(t,t.next,s,e))return!0;t=t.next}while(t!==s);return!1}function js(s,e){return pt(s.prev,s,s.next)<0?pt(s,e,s.next)>=0&&pt(s,s.prev,e)>=0:pt(s,e,s.prev)<0||pt(s,s.next,e)<0}function ib(s,e){let t=s,n=!1;const i=(s.x+e.x)/2,r=(s.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&i<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==s);return n}function Eu(s,e){const t=new $o(s.i,s.x,s.y),n=new $o(e.i,e.x,e.y),i=s.next,r=e.prev;return s.next=e,e.prev=s,t.next=i,i.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function ih(s,e,t,n){const i=new $o(s,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Ks(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function $o(s,e,t){this.i=s,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function sb(s,e,t,n){let i=0;for(let r=e,a=t-n;r<t;r+=n)i+=(s[a]-s[r])*(s[r+1]+s[a+1]),a=r;return i}class ri{static area(e){const t=e.length;let n=0;for(let i=t-1,r=0;r<t;i=r++)n+=e[i].x*e[r].y-e[r].x*e[i].y;return n*.5}static isClockWise(e){return ri.area(e)<0}static triangulateShape(e,t){const n=[],i=[],r=[];sh(e),rh(n,e);let a=e.length;t.forEach(sh);for(let c=0;c<t.length;c++)i.push(a),a+=t[c].length,rh(n,t[c]);const o=z0.triangulate(n,i);for(let c=0;c<o.length;c+=3)r.push(o.slice(c,c+3));return r}}function sh(s){const e=s.length;e>2&&s[e-1].equals(s[0])&&s.pop()}function rh(s,e){for(let t=0;t<e.length;t++)s.push(e[t].x),s.push(e[t].y)}class Aa extends ht{constructor(e=new er([new oe(.5,.5),new oe(-.5,.5),new oe(-.5,-.5),new oe(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,i=[],r=[];for(let o=0,c=e.length;o<c;o++){const l=e[o];a(l)}this.setAttribute("position",new Xe(i,3)),this.setAttribute("uv",new Xe(r,2)),this.computeVertexNormals();function a(o){const c=[],l=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1;let f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,d=t.bevelThickness!==void 0?t.bevelThickness:.2,m=t.bevelSize!==void 0?t.bevelSize:d-.1,p=t.bevelOffset!==void 0?t.bevelOffset:0,g=t.bevelSegments!==void 0?t.bevelSegments:3;const A=t.extrudePath,b=t.UVGenerator!==void 0?t.UVGenerator:rb;let x,E=!1,C,_,v,w;A&&(x=A.getSpacedPoints(h),E=!0,f=!1,C=A.computeFrenetFrames(h,!1),_=new R,v=new R,w=new R),f||(g=0,d=0,m=0,p=0);const M=o.extractPoints(l);let y=M.shape;const B=M.holes;if(!ri.isClockWise(y)){y=y.reverse();for(let $=0,ce=B.length;$<ce;$++){const D=B[$];ri.isClockWise(D)&&(B[$]=D.reverse())}}const L=ri.triangulateShape(y,B),Q=y;for(let $=0,ce=B.length;$<ce;$++){const D=B[$];y=y.concat(D)}function z($,ce,D){return ce||console.error("THREE.ExtrudeGeometry: vec does not exist"),$.clone().addScaledVector(ce,D)}const N=y.length,H=L.length;function O($,ce,D){let Ce,ae,me;const fe=$.x-ce.x,Ue=$.y-ce.y,_e=D.x-$.x,T=D.y-$.y,I=fe*fe+Ue*Ue,P=fe*T-Ue*_e;if(Math.abs(P)>Number.EPSILON){const X=Math.sqrt(I),J=Math.sqrt(_e*_e+T*T),K=ce.x-Ue/X,ve=ce.y+fe/X,de=D.x-T/J,be=D.y+_e/J,ke=((de-K)*T-(be-ve)*_e)/(fe*T-Ue*_e);Ce=K+fe*ke-$.x,ae=ve+Ue*ke-$.y;const ee=Ce*Ce+ae*ae;if(ee<=2)return new oe(Ce,ae);me=Math.sqrt(ee/2)}else{let X=!1;fe>Number.EPSILON?_e>Number.EPSILON&&(X=!0):fe<-Number.EPSILON?_e<-Number.EPSILON&&(X=!0):Math.sign(Ue)===Math.sign(T)&&(X=!0),X?(Ce=-Ue,ae=fe,me=Math.sqrt(I)):(Ce=fe,ae=Ue,me=Math.sqrt(I/2))}return new oe(Ce/me,ae/me)}const j=[];for(let $=0,ce=Q.length,D=ce-1,Ce=$+1;$<ce;$++,D++,Ce++)D===ce&&(D=0),Ce===ce&&(Ce=0),j[$]=O(Q[$],Q[D],Q[Ce]);const Z=[];let ie,le=j.concat();for(let $=0,ce=B.length;$<ce;$++){const D=B[$];ie=[];for(let Ce=0,ae=D.length,me=ae-1,fe=Ce+1;Ce<ae;Ce++,me++,fe++)me===ae&&(me=0),fe===ae&&(fe=0),ie[Ce]=O(D[Ce],D[me],D[fe]);Z.push(ie),le=le.concat(ie)}for(let $=0;$<g;$++){const ce=$/g,D=d*Math.cos(ce*Math.PI/2),Ce=m*Math.sin(ce*Math.PI/2)+p;for(let ae=0,me=Q.length;ae<me;ae++){const fe=z(Q[ae],j[ae],Ce);re(fe.x,fe.y,-D)}for(let ae=0,me=B.length;ae<me;ae++){const fe=B[ae];ie=Z[ae];for(let Ue=0,_e=fe.length;Ue<_e;Ue++){const T=z(fe[Ue],ie[Ue],Ce);re(T.x,T.y,-D)}}}const Te=m+p;for(let $=0;$<N;$++){const ce=f?z(y[$],le[$],Te):y[$];E?(v.copy(C.normals[0]).multiplyScalar(ce.x),_.copy(C.binormals[0]).multiplyScalar(ce.y),w.copy(x[0]).add(v).add(_),re(w.x,w.y,w.z)):re(ce.x,ce.y,0)}for(let $=1;$<=h;$++)for(let ce=0;ce<N;ce++){const D=f?z(y[ce],le[ce],Te):y[ce];E?(v.copy(C.normals[$]).multiplyScalar(D.x),_.copy(C.binormals[$]).multiplyScalar(D.y),w.copy(x[$]).add(v).add(_),re(w.x,w.y,w.z)):re(D.x,D.y,u/h*$)}for(let $=g-1;$>=0;$--){const ce=$/g,D=d*Math.cos(ce*Math.PI/2),Ce=m*Math.sin(ce*Math.PI/2)+p;for(let ae=0,me=Q.length;ae<me;ae++){const fe=z(Q[ae],j[ae],Ce);re(fe.x,fe.y,u+D)}for(let ae=0,me=B.length;ae<me;ae++){const fe=B[ae];ie=Z[ae];for(let Ue=0,_e=fe.length;Ue<_e;Ue++){const T=z(fe[Ue],ie[Ue],Ce);E?re(T.x,T.y+x[h-1].y,x[h-1].x+D):re(T.x,T.y,u+D)}}}q(),se();function q(){const $=i.length/3;if(f){let ce=0,D=N*ce;for(let Ce=0;Ce<H;Ce++){const ae=L[Ce];Ie(ae[2]+D,ae[1]+D,ae[0]+D)}ce=h+g*2,D=N*ce;for(let Ce=0;Ce<H;Ce++){const ae=L[Ce];Ie(ae[0]+D,ae[1]+D,ae[2]+D)}}else{for(let ce=0;ce<H;ce++){const D=L[ce];Ie(D[2],D[1],D[0])}for(let ce=0;ce<H;ce++){const D=L[ce];Ie(D[0]+N*h,D[1]+N*h,D[2]+N*h)}}n.addGroup($,i.length/3-$,0)}function se(){const $=i.length/3;let ce=0;ue(Q,ce),ce+=Q.length;for(let D=0,Ce=B.length;D<Ce;D++){const ae=B[D];ue(ae,ce),ce+=ae.length}n.addGroup($,i.length/3-$,1)}function ue($,ce){let D=$.length;for(;--D>=0;){const Ce=D;let ae=D-1;ae<0&&(ae=$.length-1);for(let me=0,fe=h+g*2;me<fe;me++){const Ue=N*me,_e=N*(me+1),T=ce+Ce+Ue,I=ce+ae+Ue,P=ce+ae+_e,X=ce+Ce+_e;Pe(T,I,P,X)}}}function re($,ce,D){c.push($),c.push(ce),c.push(D)}function Ie($,ce,D){Re($),Re(ce),Re(D);const Ce=i.length/3,ae=b.generateTopUV(n,i,Ce-3,Ce-2,Ce-1);Qe(ae[0]),Qe(ae[1]),Qe(ae[2])}function Pe($,ce,D,Ce){Re($),Re(ce),Re(Ce),Re(ce),Re(D),Re(Ce);const ae=i.length/3,me=b.generateSideWallUV(n,i,ae-6,ae-3,ae-2,ae-1);Qe(me[0]),Qe(me[1]),Qe(me[3]),Qe(me[1]),Qe(me[2]),Qe(me[3])}function Re($){i.push(c[$*3+0]),i.push(c[$*3+1]),i.push(c[$*3+2])}function Qe($){r.push($.x),r.push($.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return ab(t,n,e)}static fromJSON(e,t){const n=[];for(let r=0,a=e.shapes.length;r<a;r++){const o=t[e.shapes[r]];n.push(o)}const i=e.options.extrudePath;return i!==void 0&&(e.options.extrudePath=new Jo[i.type]().fromJSON(i)),new Aa(n,e.options)}}const rb={generateTopUV:function(s,e,t,n,i){const r=e[t*3],a=e[t*3+1],o=e[n*3],c=e[n*3+1],l=e[i*3],h=e[i*3+1];return[new oe(r,a),new oe(o,c),new oe(l,h)]},generateSideWallUV:function(s,e,t,n,i,r){const a=e[t*3],o=e[t*3+1],c=e[t*3+2],l=e[n*3],h=e[n*3+1],u=e[n*3+2],f=e[i*3],d=e[i*3+1],m=e[i*3+2],p=e[r*3],g=e[r*3+1],A=e[r*3+2];return Math.abs(o-h)<Math.abs(a-l)?[new oe(a,1-c),new oe(l,1-u),new oe(f,1-m),new oe(p,1-A)]:[new oe(o,1-c),new oe(h,1-u),new oe(d,1-m),new oe(g,1-A)]}};function ab(s,e,t){if(t.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){const r=s[n];t.shapes.push(r.uuid)}else t.shapes.push(s.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class Ic extends Cc{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Ic(e.radius,e.detail)}}class wc extends ht{constructor(e=new er([new oe(0,.5),new oe(-.5,-.5),new oe(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const n=[],i=[],r=[],a=[];let o=0,c=0;if(Array.isArray(e)===!1)l(e);else for(let h=0;h<e.length;h++)l(e[h]),this.addGroup(o,c,h),o+=c,c=0;this.setIndex(n),this.setAttribute("position",new Xe(i,3)),this.setAttribute("normal",new Xe(r,3)),this.setAttribute("uv",new Xe(a,2));function l(h){const u=i.length/3,f=h.extractPoints(t);let d=f.shape;const m=f.holes;ri.isClockWise(d)===!1&&(d=d.reverse());for(let g=0,A=m.length;g<A;g++){const b=m[g];ri.isClockWise(b)===!0&&(m[g]=b.reverse())}const p=ri.triangulateShape(d,m);for(let g=0,A=m.length;g<A;g++){const b=m[g];d=d.concat(b)}for(let g=0,A=d.length;g<A;g++){const b=d[g];i.push(b.x,b.y,0),r.push(0,0,1),a.push(b.x,b.y)}for(let g=0,A=p.length;g<A;g++){const b=p[g],x=b[0]+u,E=b[1]+u,C=b[2]+u;n.push(x,E,C),c+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return ob(t,e)}static fromJSON(e,t){const n=[];for(let i=0,r=e.shapes.length;i<r;i++){const a=t[e.shapes[i]];n.push(a)}return new wc(n,e.curveSegments)}}function ob(s,e){if(e.shapes=[],Array.isArray(s))for(let t=0,n=s.length;t<n;t++){const i=s[t];e.shapes.push(i.uuid)}else e.shapes.push(s.uuid);return e}class hs extends ht{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(a+o,Math.PI);let l=0;const h=[],u=new R,f=new R,d=[],m=[],p=[],g=[];for(let A=0;A<=n;A++){const b=[],x=A/n;let E=0;A===0&&a===0?E=.5/t:A===n&&c===Math.PI&&(E=-.5/t);for(let C=0;C<=t;C++){const _=C/t;u.x=-e*Math.cos(i+_*r)*Math.sin(a+x*o),u.y=e*Math.cos(a+x*o),u.z=e*Math.sin(i+_*r)*Math.sin(a+x*o),m.push(u.x,u.y,u.z),f.copy(u).normalize(),p.push(f.x,f.y,f.z),g.push(_+E,1-x),b.push(l++)}h.push(b)}for(let A=0;A<n;A++)for(let b=0;b<t;b++){const x=h[A][b+1],E=h[A][b],C=h[A+1][b],_=h[A+1][b+1];(A!==0||a>0)&&d.push(x,E,_),(A!==n-1||c<Math.PI)&&d.push(E,C,_)}this.setIndex(d),this.setAttribute("position",new Xe(m,3)),this.setAttribute("normal",new Xe(p,3)),this.setAttribute("uv",new Xe(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new hs(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Zr extends ht{constructor(e=1,t=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);const a=[],o=[],c=[],l=[],h=new R,u=new R,f=new R;for(let d=0;d<=n;d++)for(let m=0;m<=i;m++){const p=m/i*r,g=d/n*Math.PI*2;u.x=(e+t*Math.cos(g))*Math.cos(p),u.y=(e+t*Math.cos(g))*Math.sin(p),u.z=t*Math.sin(g),o.push(u.x,u.y,u.z),h.x=e*Math.cos(p),h.y=e*Math.sin(p),f.subVectors(u,h).normalize(),c.push(f.x,f.y,f.z),l.push(m/i),l.push(d/n)}for(let d=1;d<=n;d++)for(let m=1;m<=i;m++){const p=(i+1)*d+m-1,g=(i+1)*(d-1)+m-1,A=(i+1)*(d-1)+m,b=(i+1)*d+m;a.push(p,g,b),a.push(g,A,b)}this.setIndex(a),this.setAttribute("position",new Xe(o,3)),this.setAttribute("normal",new Xe(c,3)),this.setAttribute("uv",new Xe(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Zr(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Ii extends cn{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new te(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new te(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ra,this.normalScale=new oe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Zt,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class wn extends Ii{static get type(){return"MeshPhysicalMaterial"}constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new oe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return vt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new te(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new te(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new te(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class cb extends cn{static get type(){return"MeshPhongMaterial"}constructor(e){super(),this.isMeshPhongMaterial=!0,this.color=new te(16777215),this.specular=new te(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new te(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ra,this.normalScale=new oe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Zt,this.combine=ia,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Yt extends cn{static get type(){return"MeshLambertMaterial"}constructor(e){super(),this.isMeshLambertMaterial=!0,this.color=new te(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new te(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ra,this.normalScale=new oe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Zt,this.combine=ia,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}function Pr(s,e,t){return!s||!t&&s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function lb(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function hb(s){function e(i,r){return s[i]-s[r]}const t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function ah(s,e,t){const n=s.length,i=new s.constructor(n);for(let r=0,a=0;a!==n;++r){const o=t[r]*e;for(let c=0;c!==e;++c)i[a++]=s[o+c]}return i}function _u(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push.apply(t,a)),r=s[i++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=s[i++];while(r!==void 0)}class tr{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=i,i=t[++n],e<i)break e}a=t.length;break t}if(!(e>=r)){const o=t[1];e<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){const o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let a=0;a!==i;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class ub extends tr{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Vc,endingEnd:Vc}}intervalChanged_(e,t,n){const i=this.parameterPositions;let r=e-2,a=e+1,o=i[r],c=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case Wc:r=e,o=2*t-n;break;case qc:r=i.length-2,o=t+i[r]-i[r+1];break;default:r=e,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Wc:a=e,c=2*n-t;break;case qc:a=1,c=n+i[1]-i[0];break;default:a=e-1,c=t}const l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,m=(n-t)/(i-t),p=m*m,g=p*m,A=-f*g+2*f*p-f*m,b=(1+f)*g+(-1.5-2*f)*p+(-.5+f)*m+1,x=(-1-d)*g+(1.5+d)*p+.5*m,E=d*g-d*p;for(let C=0;C!==o;++C)r[C]=A*a[h+C]+b*a[l+C]+x*a[c+C]+E*a[u+C];return r}}class fb extends tr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=(n-t)/(i-t),u=1-h;for(let f=0;f!==o;++f)r[f]=a[l+f]*u+a[c+f]*h;return r}}class db extends tr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class Sn{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Pr(t,this.TimeBufferType),this.values=Pr(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Pr(e.times,Array),values:Pr(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new db(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new fb(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new ub(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Ws:t=this.InterpolantFactoryMethodDiscrete;break;case qs:t=this.InterpolantFactoryMethodLinear;break;case ma:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ws;case this.InterpolantFactoryMethodLinear:return qs;case this.InterpolantFactoryMethodSmooth:return ma}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let r=0,a=i-1;for(;r!==i&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==i){r>=a&&(a=Math.max(a,1),r=a-1);const o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){const c=n[o];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(i!==void 0&&lb(i))for(let o=0,c=i.length;o!==c;++o){const l=i[o];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===ma,r=e.length-1;let a=1;for(let o=1;o<r;++o){let c=!1;const l=e[o],h=e[o+1];if(l!==h&&(o!==1||l!==e[0]))if(i)c=!0;else{const u=o*n,f=u-n,d=u+n;for(let m=0;m!==n;++m){const p=t[u+m];if(p!==t[f+m]||p!==t[d+m]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];const u=o*n,f=a*n;for(let d=0;d!==n;++d)t[f+d]=t[u+d]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,c=a*n,l=0;l!==n;++l)t[c+l]=t[o+l];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}Sn.prototype.TimeBufferType=Float32Array;Sn.prototype.ValueBufferType=Float32Array;Sn.prototype.DefaultInterpolation=qs;class us extends Sn{constructor(e,t,n){super(e,t,n)}}us.prototype.ValueTypeName="bool";us.prototype.ValueBufferType=Array;us.prototype.DefaultInterpolation=Ws;us.prototype.InterpolantFactoryMethodLinear=void 0;us.prototype.InterpolantFactoryMethodSmooth=void 0;class vu extends Sn{}vu.prototype.ValueTypeName="color";class rs extends Sn{}rs.prototype.ValueTypeName="number";class Ab extends tr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-t)/(i-t);let l=e*o;for(let h=l+o;l!==h;l+=4)Jt.slerpFlat(r,0,a,l-o,a,l,c);return r}}class as extends Sn{InterpolantFactoryMethodLinear(e){return new Ab(this.times,this.values,this.getValueSize(),e)}}as.prototype.ValueTypeName="quaternion";as.prototype.InterpolantFactoryMethodSmooth=void 0;class fs extends Sn{constructor(e,t,n){super(e,t,n)}}fs.prototype.ValueTypeName="string";fs.prototype.ValueBufferType=Array;fs.prototype.DefaultInterpolation=Ws;fs.prototype.InterpolantFactoryMethodLinear=void 0;fs.prototype.InterpolantFactoryMethodSmooth=void 0;class os extends Sn{}os.prototype.ValueTypeName="vector";class pb{constructor(e="",t=-1,n=[],i=Pf){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=on(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(mb(n[a]).scale(i));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,a=n.length;r!==a;++r)t.push(Sn.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const r=t.length,a=[];for(let o=0;o<r;o++){let c=[],l=[];c.push((o+r-1)%r,o,(o+1)%r),l.push(0,1,0);const h=hb(c);c=ah(c,1,h),l=ah(l,1,h),!i&&c[0]===0&&(c.push(r),l.push(l[0])),a.push(new rs(".morphTargetInfluences["+t[o].name+"]",c,l).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,c=e.length;o<c;o++){const l=e[o],h=l.name.match(r);if(h&&h.length>1){const u=h[1];let f=i[u];f||(i[u]=f=[]),f.push(l)}}const a=[];for(const o in i)a.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return a}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(u,f,d,m,p){if(d.length!==0){const g=[],A=[];_u(d,g,A,m),g.length!==0&&p.push(new u(f,g,A))}},i=[],r=e.name||"default",a=e.fps||30,o=e.blendMode;let c=e.length||-1;const l=e.hierarchy||[];for(let u=0;u<l.length;u++){const f=l[u].keys;if(!(!f||f.length===0))if(f[0].morphTargets){const d={};let m;for(m=0;m<f.length;m++)if(f[m].morphTargets)for(let p=0;p<f[m].morphTargets.length;p++)d[f[m].morphTargets[p]]=-1;for(const p in d){const g=[],A=[];for(let b=0;b!==f[m].morphTargets.length;++b){const x=f[m];g.push(x.time),A.push(x.morphTarget===p?1:0)}i.push(new rs(".morphTargetInfluence["+p+"]",g,A))}c=d.length*a}else{const d=".bones["+t[u].name+"]";n(os,d+".position",f,"pos",i),n(as,d+".quaternion",f,"rot",i),n(os,d+".scale",f,"scl",i)}}return i.length===0?null:new this(r,c,i,o)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function gb(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return rs;case"vector":case"vector2":case"vector3":case"vector4":return os;case"color":return vu;case"quaternion":return as;case"bool":case"boolean":return us;case"string":return fs}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function mb(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=gb(s.type);if(s.times===void 0){const t=[],n=[];_u(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}const ni={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class bb{constructor(e,t,n){const i=this;let r=!1,a=0,o=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){o++,r===!1&&i.onStart!==void 0&&i.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,i.onProgress!==void 0&&i.onProgress(h,a,o),a===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){const u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=l.length;u<f;u+=2){const d=l[u],m=l[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return m}return null}}}const xb=new bb;class wi{constructor(e){this.manager=e!==void 0?e:xb,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}wi.DEFAULT_MATERIAL_NAME="__DEFAULT";const Fn={};class Eb extends Error{constructor(e,t){super(e),this.response=t}}class ks extends wi{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=ni.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Fn[e]!==void 0){Fn[e].push({onLoad:t,onProgress:n,onError:i});return}Fn[e]=[],Fn[e].push({onLoad:t,onProgress:n,onError:i});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,c=this.responseType;fetch(a).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const h=Fn[e],u=l.body.getReader(),f=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),d=f?parseInt(f):0,m=d!==0;let p=0;const g=new ReadableStream({start(A){b();function b(){u.read().then(({done:x,value:E})=>{if(x)A.close();else{p+=E.byteLength;const C=new ProgressEvent("progress",{lengthComputable:m,loaded:p,total:d});for(let _=0,v=h.length;_<v;_++){const w=h[_];w.onProgress&&w.onProgress(C)}A.enqueue(E),b()}},x=>{A.error(x)})}}});return new Response(g)}else throw new Eb(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return l.json();default:if(o===void 0)return l.text();{const u=/charset="?([^;"\s]*)"?/i.exec(o),f=u&&u[1]?u[1].toLowerCase():void 0,d=new TextDecoder(f);return l.arrayBuffer().then(m=>d.decode(m))}}}).then(l=>{ni.add(e,l);const h=Fn[e];delete Fn[e];for(let u=0,f=h.length;u<f;u++){const d=h[u];d.onLoad&&d.onLoad(l)}}).catch(l=>{const h=Fn[e];if(h===void 0)throw this.manager.itemError(e),l;delete Fn[e];for(let u=0,f=h.length;u<f;u++){const d=h[u];d.onError&&d.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class _b extends wi{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=ni.get(e);if(a!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a;const o=Xs("img");function c(){h(),ni.add(e,this),t&&t(this),r.manager.itemEnd(e)}function l(u){h(),i&&i(u),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(e),o.src=e,o}}class vb extends wi{constructor(e){super(e)}load(e,t,n,i){const r=new Et,a=new _b(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}class pa extends dt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new te(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class yb extends pa{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(dt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new te(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Ja=new Ne,oh=new R,ch=new R;class Sc{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new oe(512,512),this.map=null,this.mapPass=null,this.matrix=new Ne,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ac,this._frameExtents=new oe(1,1),this._viewportCount=1,this._viewports=[new et(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;oh.setFromMatrixPosition(e.matrixWorld),t.position.copy(oh),ch.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(ch),t.updateMatrixWorld(),Ja.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ja),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ja)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Mb extends Sc{constructor(){super(new Gt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=is*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class yu extends pa{constructor(e,t,n=0,i=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(dt.DEFAULT_UP),this.updateMatrix(),this.target=new dt,this.distance=n,this.angle=i,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new Mb}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const lh=new Ne,vs=new R,Za=new R;class Cb extends Sc{constructor(){super(new Gt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new oe(4,2),this._viewportCount=6,this._viewports=[new et(2,1,1,1),new et(0,1,1,1),new et(3,1,1,1),new et(1,1,1,1),new et(3,0,1,1),new et(1,0,1,1)],this._cubeDirections=[new R(1,0,0),new R(-1,0,0),new R(0,0,1),new R(0,0,-1),new R(0,1,0),new R(0,-1,0)],this._cubeUps=[new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,0,1),new R(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),vs.setFromMatrixPosition(e.matrixWorld),n.position.copy(vs),Za.copy(n.position),Za.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Za),n.updateMatrixWorld(),i.makeTranslation(-vs.x,-vs.y,-vs.z),lh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(lh)}}class Mu extends pa{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Cb}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Ib extends Sc{constructor(){super(new pc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Cu extends pa{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(dt.DEFAULT_UP),this.updateMatrix(),this.target=new dt,this.shadow=new Ib}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Os{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class wb extends wi{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=ni.get(e);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(l=>{t&&t(l),r.manager.itemEnd(e)}).catch(l=>{i&&i(l)});return}return setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a}const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader;const c=fetch(e,o).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){return ni.add(e,l),t&&t(l),r.manager.itemEnd(e),l}).catch(function(l){i&&i(l),ni.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});ni.add(e,c),r.manager.itemStart(e)}}class Sb{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=hh(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=hh();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function hh(){return performance.now()}const Bc="\\[\\]\\.:\\/",Bb=new RegExp("["+Bc+"]","g"),Tc="[^"+Bc+"]",Tb="[^"+Bc.replace("\\.","")+"]",Rb=/((?:WC+[\/:])*)/.source.replace("WC",Tc),Db=/(WCOD+)?/.source.replace("WCOD",Tb),Lb=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Tc),Pb=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Tc),Ub=new RegExp("^"+Rb+Db+Lb+Pb+"$"),Fb=["material","materials","bones","map"];class Nb{constructor(e,t,n){const i=n||at.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class at{constructor(e,t,n){this.path=t,this.parsedPath=n||at.parseTrackName(t),this.node=at.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new at.Composite(e,t,n):new at(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Bb,"")}static parseTrackName(e){const t=Ub.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);Fb.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let a=0;a<r.length;a++){const o=r[a];if(o.name===t||o.uuid===t)return o;const c=n(o.children);if(c)return c}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let r=t.propertyIndex;if(e||(e=at.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}const a=e[i];if(a===void 0){const l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}at.Composite=Nb;at.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};at.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};at.prototype.GetterByBindingType=[at.prototype._getValue_direct,at.prototype._getValue_array,at.prototype._getValue_arrayElement,at.prototype._getValue_toArray];at.prototype.SetterByBindingTypeAndVersioning=[[at.prototype._setValue_direct,at.prototype._setValue_direct_setNeedsUpdate,at.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[at.prototype._setValue_array,at.prototype._setValue_array_setNeedsUpdate,at.prototype._setValue_array_setMatrixWorldNeedsUpdate],[at.prototype._setValue_arrayElement,at.prototype._setValue_arrayElement_setNeedsUpdate,at.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[at.prototype._setValue_fromArray,at.prototype._setValue_fromArray_setNeedsUpdate,at.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:rc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=rc);class Qb extends uu{constructor(){super();const e=new yt;e.deleteAttribute("uv");const t=new Ii({side:Ft}),n=new Ii,i=new Mu(16777215,900,28,2);i.position.set(.418,16.199,.3),this.add(i);const r=new qe(e,t);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);const a=new qe(e,n);a.position.set(-10.906,2.009,1.846),a.rotation.set(0,-.195,0),a.scale.set(2.328,7.905,4.651),this.add(a);const o=new qe(e,n);o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),this.add(o);const c=new qe(e,n);c.position.set(6.167,.857,7.803),c.rotation.set(0,.561,0),c.scale.set(3.927,6.285,3.687),this.add(c);const l=new qe(e,n);l.position.set(-2.017,.018,6.124),l.rotation.set(0,.333,0),l.scale.set(2.002,4.566,2.064),this.add(l);const h=new qe(e,n);h.position.set(2.291,-.756,-2.621),h.rotation.set(0,-.286,0),h.scale.set(1.546,1.552,1.496),this.add(h);const u=new qe(e,n);u.position.set(-2.193,-.369,-5.547),u.rotation.set(0,.516,0),u.scale.set(3.875,3.487,2.986),this.add(u);const f=new qe(e,Vi(50));f.position.set(-16.116,14.37,8.208),f.scale.set(.1,2.428,2.739),this.add(f);const d=new qe(e,Vi(50));d.position.set(-16.109,18.021,-8.207),d.scale.set(.1,2.425,2.751),this.add(d);const m=new qe(e,Vi(17));m.position.set(14.904,12.198,-1.832),m.scale.set(.15,4.265,6.331),this.add(m);const p=new qe(e,Vi(43));p.position.set(-.462,8.89,14.52),p.scale.set(4.38,5.441,.088),this.add(p);const g=new qe(e,Vi(20));g.position.set(3.235,11.486,-12.541),g.scale.set(2.5,2,.1),this.add(g);const A=new qe(e,Vi(100));A.position.set(0,20,0),A.scale.set(1,.1,1),this.add(A)}dispose(){const e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(const t of e)t.dispose()}}function Vi(s){const e=new Tt;return e.color.setScalar(s),e}const kb=0,Js=1,Iu=2,wu=3,En=320;class Ob{constructor(e,t){this.g=e;const n=e.nx*e.nz,i=new Int16Array(t,0,n);this.h=new Float32Array(n);for(let r=0;r<n;r++)this.h[r]=i[r]/100;this.kind=new Uint8Array(t,n*2,n)}H(e,t){const n=this.g;let i=(e-n.x0)/n.step,r=(t-n.z0)/n.step;i=i<0?0:i>n.nx-1.001?n.nx-1.001:i,r=r<0?0:r>n.nz-1.001?n.nz-1.001:r;const a=i|0,o=r|0,c=i-a,l=r-o,h=n.nx,u=this.h,f=o*h+a;return c+l<=1?u[f]+(u[f+1]-u[f])*c+(u[f+h]-u[f])*l:u[f+h+1]+(u[f+h]-u[f+h+1])*(1-c)+(u[f+1]-u[f+h+1])*(1-l)}kindAt(e,t){const n=this.g,i=Math.round((e-n.x0)/n.step),r=Math.round((t-n.z0)/n.step);return i<0||r<0||i>=n.nx||r>=n.nz?Js:this.kind[r*n.nx+i]}get bounds(){const e=this.g;return[e.x0,e.z0,e.x0+(e.nx-1)*e.step,e.z0+(e.nz-1)*e.step]}}const uh={[kb]:new te("#978b80"),[Js]:new te("#5e7476"),[Iu]:new te("#86a63a"),[wu]:new te("#a89c8c")},$r={uWet:{value:0},uTime:{value:0}},Su=new la(new Uint8Array([0,0,0,255]),1,1);Su.needsUpdate=!0;function Gb(s){s.uniforms.uWet=$r.uWet,s.uniforms.uTime=$r.uTime,s.vertexShader=s.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vWP;
attribute vec3 kw;
varying vec3 vKw;`).replace("#include <worldpos_vertex>",`#include <worldpos_vertex>
vWP = (modelMatrix * vec4(transformed, 1.0)).xyz; vKw = kw;`),s.fragmentShader=s.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vWP; varying vec3 vKw; uniform float uWet; uniform float uTime;
float hsh(vec2 p){ p = fract(p * vec2(0.1031, 0.1030)); p += dot(p, p.yx + 33.33); return fract((p.x + p.y) * p.x); }
float vn(vec2 p){ vec2 i = floor(p), f = fract(p); f = f*f*(3.0-2.0*f); return mix(mix(hsh(i), hsh(i+vec2(1,0)), f.x), mix(hsh(i+vec2(0,1)), hsh(i+vec2(1,1)), f.x), f.y); }`).replace("#include <map_fragment>","").replace("#include <color_fragment>",`#include <color_fragment>
  vec4 rm = texture2D(map, vMapUv);
  float px = length(fwidth(vWP.xz));                                  // piksel başına metre
  float near = 1.0 - smoothstep(0.03, 0.14, px);                       // ince ayrıntılar yalnız yakında
  float kPark = vKw.x, kPlaza = vKw.y;
  // toprak / avlu: benekli zemin, yer yer kuru ot öbekleri, yakında çakıl
  vec3 soil = diffuseColor.rgb * (0.88 + 0.14 * vn(vWP.xz * 0.35) + 0.07 * vn(vWP.xz * 2.1));
  float tuft = smoothstep(0.5, 0.68, vn(vWP.xz * 0.045) * 0.75 + vn(vWP.xz * 0.21) * 0.35);
  soil = mix(soil, vec3(0.2, 0.25, 0.09) * (0.75 + 0.5 * vn(vWP.xz * 1.6)), tuft * 0.7);
  soil *= mix(1.0, 0.9 + 0.2 * hsh(floor(vWP.xz * 7.0)), near);
  // park: iki tonlu çim, yakında ot dokusu
  vec3 grass = mix(vec3(0.13, 0.25, 0.055), vec3(0.25, 0.36, 0.085), vn(vWP.xz * 0.07) * 0.6 + vn(vWP.xz * 0.6) * 0.4);
  grass *= mix(1.0, 0.84 + 0.32 * hsh(floor(vWP.xz * 11.0)), near);
  // meydan: taş plakalar
  vec2 sl = vWP.xz / 1.4, sg = abs(fract(sl) - 0.5);
  vec3 slab = vec3(0.34, 0.31, 0.27) * (0.9 + 0.16 * hsh(floor(sl))) * mix(1.0, 0.82 + 0.18 * (1.0 - smoothstep(0.455, 0.49, max(sg.x, sg.y))), 1.0 - smoothstep(0.05, 0.3, px));
  vec3 base = mix(mix(soil, grass, kPark), slab, kPlaza);
  // kıyı: suya inen taş dolgu, ıslak dip, kıyıya vuran köpük
  float shore = 1.0 - smoothstep(0.5, 0.82, vWP.y);
  if (shore > 0.0) {
    vec2 rk = vWP.xz * 0.75; float cell = hsh(floor(rk) + floor(vWP.y * 1.5));
    vec3 rock = vec3(0.2, 0.195, 0.185) * (0.6 + 0.7 * cell) * (0.8 + 0.3 * vn(vWP.xz * 3.0));
    vec2 rg = abs(fract(rk) - 0.5); rock *= mix(1.0, 0.55 + 0.45 * (1.0 - smoothstep(0.38, 0.5, max(rg.x, rg.y))), 1.0 - smoothstep(0.05, 0.4, px));
    rock *= mix(0.55, 1.0, smoothstep(0.05, 0.4, vWP.y));
    float wave = 0.07 * sin(uTime * 1.2 + (vWP.x + vWP.z) * 0.3) + 0.04 * sin(uTime * 2.1 + vWP.x * 0.7);
    float foam = smoothstep(-0.22, 0.0, vWP.y - wave) * (1.0 - smoothstep(0.02, 0.2, vWP.y - wave));
    rock = mix(rock, vec3(0.8, 0.84, 0.86), foam * (0.55 + 0.4 * vn(vWP.xz * 2.5 + uTime * 0.4)));
    base = mix(base, rock, shore);
  }
  // kenar keskinliği doku örnekleme sıklığına göre: yakında keskin, uzakta (doku küçülürken) yumuşak; böylece kenar tırtıklanmaz
  float tpp = length(fwidth(vMapUv)) * float(textureSize(map, 0).x);
  float es = clamp(tpp * 0.6, 0.12, 0.5);
  float as = smoothstep(0.5 - es, 0.5 + es, rm.r), sw = smoothstep(0.5 - es, 0.5 + es, rm.g), pv = smoothstep(0.5 - es, 0.5 + es, rm.b);
  // kaldırım: açık taş, karo derzleri yakında görünür
  vec2 tg = abs(fract(vWP.xz / 0.6) - 0.5);
  float joint = (1.0 - smoothstep(0.44, 0.49, max(tg.x, tg.y))) ;
  vec3 walk = vec3(0.40, 0.375, 0.34) * (0.93 + 0.1 * vn(vWP.xz * 0.8)) * mix(1.0, 0.86 + 0.14 * joint, 1.0 - smoothstep(0.03, 0.12, px));
  // yaya yolu: arnavut kaldırımı tonu
  vec2 cb = abs(fract(vec2(vWP.x + floor(vWP.z / 0.22) * 0.11, vWP.z) / vec2(0.22)) - 0.5);
  vec3 pave = vec3(0.30, 0.265, 0.23) * (0.88 + 0.2 * vn(vWP.xz * 1.3)) * mix(1.0, 0.8 + 0.2 * (1.0 - smoothstep(0.38, 0.48, max(cb.x, cb.y))), 1.0 - smoothstep(0.015, 0.06, px));
  // asfalt: nötr koyu gri, hafif lekeler ve ince pürüz
  vec3 asph = vec3(0.082, 0.09, 0.108) * (0.86 + 0.22 * vn(vWP.xz * 0.11) + 0.1 * vn(vWP.xz * 3.0) * (1.0 - smoothstep(0.02, 0.2, px)));
  asph *= 1.0 - uWet * 0.3;
  vec3 gc = mix(base, pave, pv);
  gc = mix(gc, walk, sw * (1.0 - pv * 0.0));
  gc = mix(gc, asph, as); // (kenar bantları yok: doku aradeğerlemesi onları dalgalı gösteriyordu)
  diffuseColor.rgb = gc;`)}function zb(s){const e=new Yt({vertexColors:!0,map:s||Su});return e.onBeforeCompile=Gb,e.customProgramCacheKey=()=>"ground-v3",e}class Hb{constructor(e){this.G=e,this.group=new Bt,this.tiles=new Map,this.painter=null,this.res=[1024,192],this.maskNear=230,this.group.name="ground"}build(e,t,n,i){const r=this.G,a=r.g,o=n===0?a.step:a.step*4,c=Math.round(En/o)+1,l=a.x0+e*En,h=a.z0+t*En,u=[],f=[],d=[],m=[],p=[],g=new te;for(let _=0;_<c;_++)for(let v=0;v<c;v++){const w=l+v*o,M=h+_*o,y=r.H(w,M);u.push(w,y,M),d.push(v/(c-1),_/(c-1));const B=r.kindAt(w,M);g.copy(uh[B]??uh[0]),B===Js&&g.multiplyScalar(.8),f.push(g.r,g.g,g.b),m.push(B===Iu?1:0,B===wu?1:0,B===Js?1:0)}for(let _=0;_<c-1;_++)for(let v=0;v<c-1;v++){const w=_*c+v;p.push(w,w+c,w+1,w+1,w+c,w+c+1)}const A=[];for(let _=0;_<c;_++)A.push(_);for(let _=1;_<c;_++)A.push(_*c+c-1);for(let _=c-2;_>=0;_--)A.push((c-1)*c+_);for(let _=c-2;_>=0;_--)A.push(_*c);const b=u.length/3;for(const _ of A)u.push(u[_*3],u[_*3+1]-8,u[_*3+2]),f.push(f[_*3],f[_*3+1],f[_*3+2]),d.push(d[_*2],d[_*2+1]),m.push(m[_*3],m[_*3+1],m[_*3+2]);for(let _=0;_<A.length-1;_++){const v=A[_],w=A[_+1],M=b+_,y=b+_+1;p.push(v,w,M,w,y,M,v,M,w,w,M,y)}const x=new ht;x.setAttribute("position",new Xe(u,3)),x.setAttribute("color",new Xe(f,3)),x.setAttribute("uv",new Xe(d,2)),x.setAttribute("kw",new Xe(m,3)),x.setIndex(p),x.computeVertexNormals(),x.computeBoundingSphere();const E=this.painter?this.painter(l,h,En,i):null,C=new qe(x,zb(E));return C.receiveShadow=!0,C.matrixAutoUpdate=!1,C.name=`ground_${e}_${t}_${n}`,{mesh:C,lod:n,mask:E,res:i,x0:l,z0:h}}freeMask(e){if(e.mask){const t=e.mask.image;e.mask.dispose(),t&&"width"in t&&(t.width=t.height=0),e.mask=null}}drop(e){this.group.remove(e.mesh),e.mesh.geometry.dispose(),e.mesh.material.dispose(),this.freeMask(e)}update(e,t,n,i,r=4){const a=this.G.g,o=Math.ceil((a.nx-1)*a.step/En),c=Math.ceil((a.nz-1)*a.step/En),l=new Map;for(let f=0;f<c;f++)for(let d=0;d<o;d++){const m=a.x0+(d+.5)*En,p=a.z0+(f+.5)*En,g=Math.max(0,Math.hypot(m-e,p-t)-En*.71);g<i&&l.set(`${d},${f}`,[g<n?0:1,g])}for(const[f,d]of this.tiles)l.has(f)||(this.drop(d),this.tiles.delete(f));const h=[...l].filter(([f,d])=>this.tiles.get(f)?.lod!==d[0]).sort((f,d)=>f[1][1]-d[1][1]);for(const[f,[d,m]]of h.slice(0,r)){const[p,g]=f.split(",").map(Number),A=this.tiles.get(f);A&&this.drop(A);const b=this.build(p,g,d,m<this.maskNear?this.res[0]:this.res[1]);this.group.add(b.mesh),this.tiles.set(f,b)}let u=0;if(this.painter)for(const[f,[,d]]of[...l].sort((m,p)=>m[1][1]-p[1][1])){const m=this.tiles.get(f);if(!m)continue;const p=d<this.maskNear?this.res[0]:d>this.maskNear+120?this.res[1]:m.res;if(p===m.res)continue;this.freeMask(m),m.mask=this.painter(m.x0,m.z0,En,p),m.res=p;const g=m.mesh.material;if(g.map=m.mask,g.needsUpdate=!1,++u>=Math.max(1,r>>1))break}return h.length+u}}const fh=2.3;function Vb(s,e){const n=new Map,i=(a,o)=>a*100003+o;for(const a of s.ways){if(a.bridge)continue;let o=1e9,c=-1e9,l=1e9,h=-1e9;const u=a.pts;for(let d=0;d<u.length;d+=2)o=Math.min(o,u[d]),c=Math.max(c,u[d]),l=Math.min(l,u[d+1]),h=Math.max(h,u[d+1]);const f=a.width/2+fh+2;for(let d=Math.floor((o-f)/160);d<=Math.floor((c+f)/160);d++)for(let m=Math.floor((l-f)/160);m<=Math.floor((h+f)/160);m++){const p=i(d,m);let g=n.get(p);g||n.set(p,g=[]),g.push(a.i)}}const r=(a,o,c,l,h,u,f)=>{const d=o.pts,m=d.length/2;if(!o.hw){a.lineWidth=(o.width+2*c)*l,a.beginPath();for(let x=0;x<m;x++){const E=(d[2*x]-h)*l,C=(d[2*x+1]-u)*l;x?a.lineTo(E,C):a.moveTo(E,C)}a.stroke();return}const p=o.width/2,g=[],A=[],b=()=>{if(g.length>=4){a.beginPath(),a.moveTo(g[0],g[1]);for(let x=2;x<g.length;x+=2)a.lineTo(g[x],g[x+1]);for(let x=A.length-2;x>=0;x-=2)a.lineTo(A[x],A[x+1]);a.closePath(),a.fill()}g.length=0,A.length=0};for(let x=0;x<m;x++){const E=Math.max(0,x-1),C=Math.min(m-1,x+1);let _=d[2*C]-d[2*E],v=d[2*C+1]-d[2*E+1];const w=Math.hypot(_,v)||1;_/=w,v/=w;const M=o.hw[x]<p-.3;if(f&&M){b();continue}const y=(o.hw[x]+c)*l,B=(d[2*x]-h)*l,U=(d[2*x+1]-u)*l;g.push(B-v*y,U+_*y),A.push(B+v*y,U-_*y),(x===0||x===m-1)&&(a.beginPath(),a.arc(B,U,y,0,Math.PI*2),a.fill())}b()};return(a,o,c,l)=>{const h=document.createElement("canvas");h.width=h.height=l;const u=h.getContext("2d"),f=l/c;u.fillStyle="#000",u.fillRect(0,0,l,l),u.lineCap=u.lineJoin="round",u.globalCompositeOperation="lighter";const d=new Set,m=[];for(let g=Math.floor(a/160);g<=Math.floor((a+c)/160);g++)for(let A=Math.floor(o/160);A<=Math.floor((o+c)/160);A++)for(const b of n.get(i(g,A))||[])d.has(b)||(d.add(b),m.push(s.ways[b]));u.strokeStyle=u.fillStyle="#00ff00";for(const g of m)g.code>=2&&g.code<=6&&r(u,g,fh,f,a,o,!0);u.strokeStyle=u.fillStyle="#0000ff";for(const g of m)g.code===7&&r(u,g,0,f,a,o,!1);u.strokeStyle=u.fillStyle="#ff0000";for(const g of m)g.code!==7&&r(u,g,0,f,a,o,!1);const p=new $s(h);return p.flipY=!1,p.colorSpace=An,p.wrapS=p.wrapT=yn,p.generateMipmaps=!0,p.minFilter=mn,p.magFilter=Pt,p.anisotropy=l>=512?e:2,p}}const Bu=new Set([1,2,3,4,5,6,7,9]);class Wb{constructor(e,t){this.G=t,this.ways=[],this.nodes=[],this.grid=new Map,this.CELL=40,this.group=new Bt,this.chunks=[],this.names=e.names,this.lamps=e.lamps;const n=new Map,i=(r,a)=>{const o=`${Math.round(r*2)},${Math.round(a*2)}`;let c=n.get(o);return c===void 0&&(c=this.nodes.length,n.set(o,c),this.nodes.push({id:c,x:r,z:a,ways:[]})),c};e.ways.forEach((r,a)=>{const o=r[5];let c=o;if(r[4]!==1&&!r[7]){c=[];for(let d=0;d+2<o.length;d+=2){const m=Math.hypot(o[d+2]-o[d],o[d+3]-o[d+1]),p=Math.max(1,Math.ceil(m/5));for(let g=0;g<p;g++)c.push(o[d]+(o[d+2]-o[d])*g/p,o[d+1]+(o[d+3]-o[d+1])*g/p)}c.push(o[o.length-2],o[o.length-1])}const l=new Float32Array(c),h=l.length/2,u=new Float32Array(h);for(let d=1;d<h;d++)u[d]=u[d-1]+Math.hypot(l[2*d]-l[2*d-2],l[2*d+1]-l[2*d-1]);const f={i:a,code:r[0],width:r[1],lanes:r[2],oneway:r[3]===1,bridge:r[4]===1,pts:l,ys:r[6]?new Float32Array(r[6]):null,hw:r[7]?new Float32Array(r[7]):null,len:u[h-1],cum:u,name:e.names[a],a:0,b:0};f.a=i(l[0],l[1]),f.b=i(l[2*h-2],l[2*h-1]),this.nodes[f.a].ways.push({w:a,end:0}),this.nodes[f.b].ways.push({w:a,end:1}),this.ways.push(f);for(let d=0;d<h-1;d++){const m=(l[2*d]+l[2*d+2])/2,p=(l[2*d+1]+l[2*d+3])/2,g=this.cellKey(m,p);let A=this.grid.get(g);A||this.grid.set(g,A=[]),A.push(a,d)}}),this.asphalt=new Yt({vertexColors:!0,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-4}),this.buildMeshes()}cellKey(e,t){return Math.floor(e/this.CELL)*100003+Math.floor(t/this.CELL)}halfAt(e,t,n=0){return e.hw?e.hw[t]+(e.hw[Math.min(t+1,e.hw.length-1)]-e.hw[t])*n:e.width/2}yAt(e,t){return e.ys?e.ys[t]:this.G.H(e.pts[2*t],e.pts[2*t+1])}nearest(e,t,n=20,i,r){let a=null;const o=Math.ceil(n/this.CELL),c=Math.floor(e/this.CELL),l=Math.floor(t/this.CELL);for(let h=-o;h<=o;h++)for(let u=-o;u<=o;u++){const f=this.grid.get((c+h)*100003+(l+u));if(f)for(let d=0;d<f.length;d+=2){const m=this.ways[f[d]],p=f[d+1];if(i&&!i(m))continue;const g=m.pts[2*p],A=m.pts[2*p+1],b=m.pts[2*p+2]-g,x=m.pts[2*p+3]-A,E=b*b+x*x||1e-6,C=Math.max(0,Math.min(1,((e-g)*b+(t-A)*x)/E)),_=g+b*C,v=A+x*C;let w=Math.hypot(e-_,t-v);const M=this.yAt(m,p)*(1-C)+this.yAt(m,p+1)*C;if(!(r!==void 0&&Math.abs(M-r)>4)&&(r!==void 0&&(w+=Math.abs(M-r)*.5),w<n&&(!a||w<a.d))){const y=Math.sqrt(E);a={w:m,k:p,t:C,d:w,px:_,pz:v,y:M,dx:b/y,dz:x/y}}}}return a}deckAt(e,t,n){const i=this.nearest(e,t,14,r=>r.bridge,n);return!i||i.d>i.w.width/2+1.2?null:i.y}buildMeshes(){const t=new Map,n=(p,g)=>{const A=`${Math.floor(p/500)},${Math.floor(g/500)}`;let b=t.get(A);return b||t.set(A,b={road:[[],[]],walk:[[],[]],mark:[[],[]],deck:[[],[]]}),b};new te,new te("#b7aa9c");const i=new te("#f2ead8");new te("#f2ead8");const r=new te("#8f877b"),a=new te("#6f6a64"),o=(p,g,A,b,x,E)=>{p[0].push(...g,...A,...b,...A,...x,...b);for(let C=0;C<6;C++)p[1].push(E.r,E.g,E.b)},c=(p,g,A,b,x,E,C=0,_=1/0,v=0,w=0)=>{const M=p.width/2,y=p.pts.length/2,B=p.pts,U=L=>{const Q=Math.max(0,L-1),z=Math.min(y-1,L+1),N=B[2*z]-B[2*Q],H=B[2*z+1]-B[2*Q+1],O=Math.hypot(N,H)||1;return[-H/O,N/O]};for(let L=0;L<y-1;L++){const Q=p.cum[L],z=p.cum[L+1];if(z<C||Q>_||v>0&&Math.floor((Q+z)/2/v)%2===1)continue;const N=Math.max(0,(C-Q)/(z-Q||1)),H=Math.min(1,(_-Q)/(z-Q||1)),O=[B[2*L]+(B[2*L+2]-B[2*L])*N,B[2*L+1]+(B[2*L+3]-B[2*L+1])*N],j=[B[2*L]+(B[2*L+2]-B[2*L])*H,B[2*L+1]+(B[2*L+3]-B[2*L+1])*H],Z=U(L),ie=U(L+1),le=p.ys?this.yAt(p,L)*(1-N)+this.yAt(p,L+1)*N:null,Te=p.ys?this.yAt(p,L)*(1-H)+this.yAt(p,L+1)*H:null,q=(Re,Qe,$,ce)=>{const D=Re[0]+Qe[0]*$,Ce=Re[1]+Qe[1]*$;return[D,(ce??this.G.H(D,Ce))+b,Ce]},se=n(O[0],O[1]);let ue=g,re=g,Ie=A,Pe=A;if(p.hw&&w){const Re=p.hw[L]+(p.hw[L+1]-p.hw[L])*N,Qe=p.hw[L]+(p.hw[L+1]-p.hw[L])*H;if(w===1)ue*=Re/M,re*=Qe/M,Ie*=Re/M,Pe*=Qe/M;else if(Math.min(Re,Qe)<M-.3)continue}o(se[E],q(O,Z,ue-Ie/2,le),q(O,Z,ue+Ie/2,le),q(j,ie,re-Pe/2,Te),q(j,ie,re+Pe/2,Te),x)}},l=p=>{const g=this.nodes[p].ways.filter(A=>this.ways[A.w].code!==8);return g.length<3?0:Math.max(...g.map(A=>this.ways[A.w].width/2))+3.5},h=new te("#56575c");for(const p of this.ways){const g=p.width/2;if(p.bridge&&(c(p,0,p.width+1.6,.02,r,"deck"),this.bridgeSides(p,n,a),c(p,0,p.width,.06,h,"road")),p.code>6&&p.code!==9)continue;const A=l(p.a),b=p.len-l(p.b);if(b-A<6)continue;const x=p.bridge?.09:.06;if(!p.oneway&&p.lanes>=2&&p.width>=5.5&&c(p,0,.16,x,i,"mark",A,b,p.code<=3?0:4,1),p.code<=3&&(c(p,-(g-.3),.14,x,i,"mark",A,b,0,2),c(p,g-.3,.14,x,i,"mark",A,b,0,2)),p.lanes>=3||p.oneway&&p.lanes>=2){const E=p.width/p.lanes;for(let C=1;C<p.lanes;C++){const _=-g+C*E;Math.abs(_)<.3&&!p.oneway||c(p,_,.13,x,i,"mark",A,b,4,1)}}}const u=(p,g,A,b=!1)=>{if(!p[0].length)return null;const x=new ht;x.setAttribute("position",new Xe(p[0],3)),x.setAttribute("color",new Xe(p[1],3)),x.computeVertexNormals(),x.computeBoundingSphere();const E=new qe(x,g);return E.renderOrder=A,E.receiveShadow=!0,E.castShadow=b,E.matrixAutoUpdate=!1,E},f=new Yt({vertexColors:!0,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-2}),d=new Yt({vertexColors:!0,polygonOffset:!0,polygonOffsetFactor:-3,polygonOffsetUnits:-8}),m=new Yt({vertexColors:!0,side:rn});this.roadMat=this.asphalt,this.markMat=d,this.walkMat=f;for(const[p,g]of t){const[A,b]=p.split(",").map(Number),x=new Bt;x.name=`roads_${p}`;for(const E of[u(g.road,this.asphalt,2),u(g.mark,d,3),u(g.deck,m,0,!0)])E&&x.add(E);this.group.add(x),this.chunks.push({mesh:x,cx:(A+.5)*500,cz:(b+.5)*500})}}bridgeSides(e,t,n){const i=e.pts.length/2,r=e.pts,a=e.width/2+.8;for(let o=0;o<i-1;o++){const c=r[2*o+2]-r[2*o],l=r[2*o+3]-r[2*o+1],h=Math.hypot(c,l)||1,u=-l/h,f=c/h,d=this.yAt(e,o),m=this.yAt(e,o+1),p=t(r[2*o],r[2*o+1]).deck;for(const g of[-1,1]){const A=r[2*o]+u*a*g,b=r[2*o+1]+f*a*g,x=r[2*o+2]+u*a*g,E=r[2*o+3]+f*a*g,C=[[A,d-1,b],[x,m-1,E],[A,d+1,b],[x,m+1,E]];p[0].push(...C[0],...C[1],...C[2],...C[1],...C[3],...C[2]);for(let _=0;_<6;_++)p[1].push(n.r,n.g,n.b)}if(Math.floor(e.cum[o]/45)!==Math.floor(e.cum[o+1]/45)){const g=this.G.H(r[2*o],r[2*o+1]),A=d-1,b=Math.min(g,0)-3;if(A-b<2.5)continue;const x=1.4,E=r[2*o],C=r[2*o+1],_=[[-x,-x],[x,-x],[x,x],[-x,x]].map(([v,w])=>[E+u*v*(e.width/4)+c/h*w,C+f*v*(e.width/4)+l/h*w]);for(let v=0;v<4;v++){const w=_[v],M=_[(v+1)%4];p[0].push(w[0],b,w[1],M[0],b,M[1],w[0],A,w[1],M[0],b,M[1],M[0],A,M[1],w[0],A,w[1]);for(let y=0;y<6;y++)p[1].push(n.r*.9,n.g*.9,n.b*.9)}}}}update(e,t,n){for(const i of this.chunks)i.mesh.visible=Math.hypot(i.cx-e,i.cz-t)<n+360}isJunction(e){return e.ways.filter(t=>Bu.has(this.ways[t.w].code)).length>=3}}class qb{constructor(e=4){this.pool=e,this.queue=[],this.workers=[],this.workersResolve=[],this.workerStatus=0}_initWorker(e){if(!this.workers[e]){const t=this.workerCreator();t.addEventListener("message",this._onMessage.bind(this,e)),this.workers[e]=t}}_getIdleWorker(){for(let e=0;e<this.pool;e++)if(!(this.workerStatus&1<<e))return e;return-1}_onMessage(e,t){const n=this.workersResolve[e];if(n&&n(t),this.queue.length){const{resolve:i,msg:r,transfer:a}=this.queue.shift();this.workersResolve[e]=i,this.workers[e].postMessage(r,a)}else this.workerStatus^=1<<e}setWorkerCreator(e){this.workerCreator=e}setWorkerLimit(e){this.pool=e}postMessage(e,t){return new Promise(n=>{const i=this._getIdleWorker();i!==-1?(this._initWorker(i),this.workerStatus|=1<<i,this.workersResolve[i]=n,this.workers[i].postMessage(e,t)):this.queue.push({resolve:n,msg:e,transfer:t})})}dispose(){this.workers.forEach(e=>e.terminate()),this.workersResolve.length=0,this.workers.length=0,this.queue.length=0,this.workerStatus=0}}const Xb=0,dh=2,Yb=1,Ah=2,jb=0,Kb=1,Jb=10,Zb=0,Tu=9,Ru=15,Du=16,Lu=22,Pu=37,Uu=43,Fu=76,Nu=83,Qu=97,ku=100,Ou=103,Gu=109,zu=165,Hu=166,Rc=1000066e3;class $b{constructor(){this.vkFormat=0,this.typeSize=1,this.pixelWidth=0,this.pixelHeight=0,this.pixelDepth=0,this.layerCount=0,this.faceCount=1,this.supercompressionScheme=0,this.levels=[],this.dataFormatDescriptor=[{vendorId:0,descriptorType:0,descriptorBlockSize:0,versionNumber:2,colorModel:0,colorPrimaries:1,transferFunction:2,flags:0,texelBlockDimension:[0,0,0,0],bytesPlane:[0,0,0,0,0,0,0,0],samples:[]}],this.keyValue={},this.globalData=null}}class ys{constructor(e,t,n,i){this._dataView=void 0,this._littleEndian=void 0,this._offset=void 0,this._dataView=new DataView(e.buffer,e.byteOffset+t,n),this._littleEndian=i,this._offset=0}_nextUint8(){const e=this._dataView.getUint8(this._offset);return this._offset+=1,e}_nextUint16(){const e=this._dataView.getUint16(this._offset,this._littleEndian);return this._offset+=2,e}_nextUint32(){const e=this._dataView.getUint32(this._offset,this._littleEndian);return this._offset+=4,e}_nextUint64(){const e=this._dataView.getUint32(this._offset,this._littleEndian)+4294967296*this._dataView.getUint32(this._offset+4,this._littleEndian);return this._offset+=8,e}_nextInt32(){const e=this._dataView.getInt32(this._offset,this._littleEndian);return this._offset+=4,e}_nextUint8Array(e){const t=new Uint8Array(this._dataView.buffer,this._dataView.byteOffset+this._offset,e);return this._offset+=e,t}_skip(e){return this._offset+=e,this}_scan(e,t){t===void 0&&(t=0);const n=this._offset;let i=0;for(;this._dataView.getUint8(this._offset)!==t&&i<e;)i++,this._offset++;return i<e&&this._offset++,new Uint8Array(this._dataView.buffer,this._dataView.byteOffset+n,i)}}const kt=[171,75,84,88,32,50,48,187,13,10,26,10];function ph(s){return new TextDecoder().decode(s)}function ex(s){const e=new Uint8Array(s.buffer,s.byteOffset,kt.length);if(e[0]!==kt[0]||e[1]!==kt[1]||e[2]!==kt[2]||e[3]!==kt[3]||e[4]!==kt[4]||e[5]!==kt[5]||e[6]!==kt[6]||e[7]!==kt[7]||e[8]!==kt[8]||e[9]!==kt[9]||e[10]!==kt[10]||e[11]!==kt[11])throw new Error("Missing KTX 2.0 identifier.");const t=new $b,n=17*Uint32Array.BYTES_PER_ELEMENT,i=new ys(s,kt.length,n,!0);t.vkFormat=i._nextUint32(),t.typeSize=i._nextUint32(),t.pixelWidth=i._nextUint32(),t.pixelHeight=i._nextUint32(),t.pixelDepth=i._nextUint32(),t.layerCount=i._nextUint32(),t.faceCount=i._nextUint32();const r=i._nextUint32();t.supercompressionScheme=i._nextUint32();const a=i._nextUint32(),o=i._nextUint32(),c=i._nextUint32(),l=i._nextUint32(),h=i._nextUint64(),u=i._nextUint64(),f=new ys(s,kt.length+n,3*r*8,!0);for(let H=0;H<r;H++)t.levels.push({levelData:new Uint8Array(s.buffer,s.byteOffset+f._nextUint64(),f._nextUint64()),uncompressedByteLength:f._nextUint64()});const d=new ys(s,a,o,!0),m={vendorId:d._skip(4)._nextUint16(),descriptorType:d._nextUint16(),versionNumber:d._nextUint16(),descriptorBlockSize:d._nextUint16(),colorModel:d._nextUint8(),colorPrimaries:d._nextUint8(),transferFunction:d._nextUint8(),flags:d._nextUint8(),texelBlockDimension:[d._nextUint8(),d._nextUint8(),d._nextUint8(),d._nextUint8()],bytesPlane:[d._nextUint8(),d._nextUint8(),d._nextUint8(),d._nextUint8(),d._nextUint8(),d._nextUint8(),d._nextUint8(),d._nextUint8()],samples:[]},p=(m.descriptorBlockSize/4-6)/4;for(let H=0;H<p;H++){const O={bitOffset:d._nextUint16(),bitLength:d._nextUint8(),channelType:d._nextUint8(),samplePosition:[d._nextUint8(),d._nextUint8(),d._nextUint8(),d._nextUint8()],sampleLower:-1/0,sampleUpper:1/0};64&O.channelType?(O.sampleLower=d._nextInt32(),O.sampleUpper=d._nextInt32()):(O.sampleLower=d._nextUint32(),O.sampleUpper=d._nextUint32()),m.samples[H]=O}t.dataFormatDescriptor.length=0,t.dataFormatDescriptor.push(m);const g=new ys(s,c,l,!0);for(;g._offset<l;){const H=g._nextUint32(),O=g._scan(H),j=ph(O);if(t.keyValue[j]=g._nextUint8Array(H-O.byteLength-1),j.match(/^ktx/i)){const Z=ph(t.keyValue[j]);t.keyValue[j]=Z.substring(0,Z.lastIndexOf("\0"))}g._skip(H%4?4-H%4:0)}if(u<=0)return t;const A=new ys(s,h,u,!0),b=A._nextUint16(),x=A._nextUint16(),E=A._nextUint32(),C=A._nextUint32(),_=A._nextUint32(),v=A._nextUint32(),w=[];for(let H=0;H<r;H++)w.push({imageFlags:A._nextUint32(),rgbSliceByteOffset:A._nextUint32(),rgbSliceByteLength:A._nextUint32(),alphaSliceByteOffset:A._nextUint32(),alphaSliceByteLength:A._nextUint32()});const M=h+A._offset,y=M+E,B=y+C,U=B+_,L=new Uint8Array(s.buffer,s.byteOffset+M,E),Q=new Uint8Array(s.buffer,s.byteOffset+y,C),z=new Uint8Array(s.buffer,s.byteOffset+B,_),N=new Uint8Array(s.buffer,s.byteOffset+U,v);return t.globalData={endpointCount:b,selectorCount:x,imageDescs:w,endpointsData:L,selectorsData:Q,tablesData:z,extendedData:N},t}let $a,Qn,ec;const eo={env:{emscripten_notify_memory_growth:function(s){ec=new Uint8Array(Qn.exports.memory.buffer)}}};let tx=class{init(){return $a||($a=typeof fetch<"u"?fetch("data:application/wasm;base64,"+gh).then(e=>e.arrayBuffer()).then(e=>WebAssembly.instantiate(e,eo)).then(this._init):WebAssembly.instantiate(Buffer.from(gh,"base64"),eo).then(this._init),$a)}_init(e){Qn=e.instance,eo.env.emscripten_notify_memory_growth(0)}decode(e,t=0){if(!Qn)throw new Error("ZSTDDecoder: Await .init() before decoding.");const n=e.byteLength,i=Qn.exports.malloc(n);ec.set(e,i),t=t||Number(Qn.exports.ZSTD_findDecompressedSize(i,n));const r=Qn.exports.malloc(t),a=Qn.exports.ZSTD_decompress(r,t,i,n),o=ec.slice(r,r+a);return Qn.exports.free(i),Qn.exports.free(r),o}};const gh="AGFzbQEAAAABpQEVYAF/AX9gAn9/AGADf39/AX9gBX9/f39/AX9gAX8AYAJ/fwF/YAR/f39/AX9gA39/fwBgBn9/f39/fwF/YAd/f39/f39/AX9gAn9/AX5gAn5+AX5gAABgBX9/f39/AGAGf39/f39/AGAIf39/f39/f38AYAl/f39/f39/f38AYAABf2AIf39/f39/f38Bf2ANf39/f39/f39/f39/fwF/YAF/AX4CJwEDZW52H2Vtc2NyaXB0ZW5fbm90aWZ5X21lbW9yeV9ncm93dGgABANpaAEFAAAFAgEFCwACAQABAgIFBQcAAwABDgsBAQcAEhMHAAUBDAQEAAANBwQCAgYCBAgDAwMDBgEACQkHBgICAAYGAgQUBwYGAwIGAAMCAQgBBwUGCgoEEQAEBAEIAwgDBQgDEA8IAAcABAUBcAECAgUEAQCAAgYJAX8BQaCgwAILB2AHBm1lbW9yeQIABm1hbGxvYwAoBGZyZWUAJgxaU1REX2lzRXJyb3IAaBlaU1REX2ZpbmREZWNvbXByZXNzZWRTaXplAFQPWlNURF9kZWNvbXByZXNzAEoGX3N0YXJ0ACQJBwEAQQELASQKussBaA8AIAAgACgCBCABajYCBAsZACAAKAIAIAAoAgRBH3F0QQAgAWtBH3F2CwgAIABBiH9LC34BBH9BAyEBIAAoAgQiA0EgTQRAIAAoAggiASAAKAIQTwRAIAAQDQ8LIAAoAgwiAiABRgRAQQFBAiADQSBJGw8LIAAgASABIAJrIANBA3YiBCABIARrIAJJIgEbIgJrIgQ2AgggACADIAJBA3RrNgIEIAAgBCgAADYCAAsgAQsUAQF/IAAgARACIQIgACABEAEgAgv3AQECfyACRQRAIABCADcCACAAQQA2AhAgAEIANwIIQbh/DwsgACABNgIMIAAgAUEEajYCECACQQRPBEAgACABIAJqIgFBfGoiAzYCCCAAIAMoAAA2AgAgAUF/ai0AACIBBEAgAEEIIAEQFGs2AgQgAg8LIABBADYCBEF/DwsgACABNgIIIAAgAS0AACIDNgIAIAJBfmoiBEEBTQRAIARBAWtFBEAgACABLQACQRB0IANyIgM2AgALIAAgAS0AAUEIdCADajYCAAsgASACakF/ai0AACIBRQRAIABBADYCBEFsDwsgAEEoIAEQFCACQQN0ams2AgQgAgsWACAAIAEpAAA3AAAgACABKQAINwAICy8BAX8gAUECdEGgHWooAgAgACgCAEEgIAEgACgCBGprQR9xdnEhAiAAIAEQASACCyEAIAFCz9bTvtLHq9lCfiAAfEIfiUKHla+vmLbem55/fgsdAQF/IAAoAgggACgCDEYEfyAAKAIEQSBGBUEACwuCBAEDfyACQYDAAE8EQCAAIAEgAhBnIAAPCyAAIAJqIQMCQCAAIAFzQQNxRQRAAkAgAkEBSARAIAAhAgwBCyAAQQNxRQRAIAAhAgwBCyAAIQIDQCACIAEtAAA6AAAgAUEBaiEBIAJBAWoiAiADTw0BIAJBA3ENAAsLAkAgA0F8cSIEQcAASQ0AIAIgBEFAaiIFSw0AA0AgAiABKAIANgIAIAIgASgCBDYCBCACIAEoAgg2AgggAiABKAIMNgIMIAIgASgCEDYCECACIAEoAhQ2AhQgAiABKAIYNgIYIAIgASgCHDYCHCACIAEoAiA2AiAgAiABKAIkNgIkIAIgASgCKDYCKCACIAEoAiw2AiwgAiABKAIwNgIwIAIgASgCNDYCNCACIAEoAjg2AjggAiABKAI8NgI8IAFBQGshASACQUBrIgIgBU0NAAsLIAIgBE8NAQNAIAIgASgCADYCACABQQRqIQEgAkEEaiICIARJDQALDAELIANBBEkEQCAAIQIMAQsgA0F8aiIEIABJBEAgACECDAELIAAhAgNAIAIgAS0AADoAACACIAEtAAE6AAEgAiABLQACOgACIAIgAS0AAzoAAyABQQRqIQEgAkEEaiICIARNDQALCyACIANJBEADQCACIAEtAAA6AAAgAUEBaiEBIAJBAWoiAiADRw0ACwsgAAsMACAAIAEpAAA3AAALQQECfyAAKAIIIgEgACgCEEkEQEEDDwsgACAAKAIEIgJBB3E2AgQgACABIAJBA3ZrIgE2AgggACABKAAANgIAQQALDAAgACABKAIANgAAC/cCAQJ/AkAgACABRg0AAkAgASACaiAASwRAIAAgAmoiBCABSw0BCyAAIAEgAhALDwsgACABc0EDcSEDAkACQCAAIAFJBEAgAwRAIAAhAwwDCyAAQQNxRQRAIAAhAwwCCyAAIQMDQCACRQ0EIAMgAS0AADoAACABQQFqIQEgAkF/aiECIANBAWoiA0EDcQ0ACwwBCwJAIAMNACAEQQNxBEADQCACRQ0FIAAgAkF/aiICaiIDIAEgAmotAAA6AAAgA0EDcQ0ACwsgAkEDTQ0AA0AgACACQXxqIgJqIAEgAmooAgA2AgAgAkEDSw0ACwsgAkUNAgNAIAAgAkF/aiICaiABIAJqLQAAOgAAIAINAAsMAgsgAkEDTQ0AIAIhBANAIAMgASgCADYCACABQQRqIQEgA0EEaiEDIARBfGoiBEEDSw0ACyACQQNxIQILIAJFDQADQCADIAEtAAA6AAAgA0EBaiEDIAFBAWohASACQX9qIgINAAsLIAAL8wICAn8BfgJAIAJFDQAgACACaiIDQX9qIAE6AAAgACABOgAAIAJBA0kNACADQX5qIAE6AAAgACABOgABIANBfWogAToAACAAIAE6AAIgAkEHSQ0AIANBfGogAToAACAAIAE6AAMgAkEJSQ0AIABBACAAa0EDcSIEaiIDIAFB/wFxQYGChAhsIgE2AgAgAyACIARrQXxxIgRqIgJBfGogATYCACAEQQlJDQAgAyABNgIIIAMgATYCBCACQXhqIAE2AgAgAkF0aiABNgIAIARBGUkNACADIAE2AhggAyABNgIUIAMgATYCECADIAE2AgwgAkFwaiABNgIAIAJBbGogATYCACACQWhqIAE2AgAgAkFkaiABNgIAIAQgA0EEcUEYciIEayICQSBJDQAgAa0iBUIghiAFhCEFIAMgBGohAQNAIAEgBTcDGCABIAU3AxAgASAFNwMIIAEgBTcDACABQSBqIQEgAkFgaiICQR9LDQALCyAACy8BAn8gACgCBCAAKAIAQQJ0aiICLQACIQMgACACLwEAIAEgAi0AAxAIajYCACADCy8BAn8gACgCBCAAKAIAQQJ0aiICLQACIQMgACACLwEAIAEgAi0AAxAFajYCACADCx8AIAAgASACKAIEEAg2AgAgARAEGiAAIAJBCGo2AgQLCAAgAGdBH3MLugUBDX8jAEEQayIKJAACfyAEQQNNBEAgCkEANgIMIApBDGogAyAEEAsaIAAgASACIApBDGpBBBAVIgBBbCAAEAMbIAAgACAESxsMAQsgAEEAIAEoAgBBAXRBAmoQECENQVQgAygAACIGQQ9xIgBBCksNABogAiAAQQVqNgIAIAMgBGoiAkF8aiEMIAJBeWohDiACQXtqIRAgAEEGaiELQQQhBSAGQQR2IQRBICAAdCIAQQFyIQkgASgCACEPQQAhAiADIQYCQANAIAlBAkggAiAPS3JFBEAgAiEHAkAgCARAA0AgBEH//wNxQf//A0YEQCAHQRhqIQcgBiAQSQR/IAZBAmoiBigAACAFdgUgBUEQaiEFIARBEHYLIQQMAQsLA0AgBEEDcSIIQQNGBEAgBUECaiEFIARBAnYhBCAHQQNqIQcMAQsLIAcgCGoiByAPSw0EIAVBAmohBQNAIAIgB0kEQCANIAJBAXRqQQA7AQAgAkEBaiECDAELCyAGIA5LQQAgBiAFQQN1aiIHIAxLG0UEQCAHKAAAIAVBB3EiBXYhBAwCCyAEQQJ2IQQLIAYhBwsCfyALQX9qIAQgAEF/anEiBiAAQQF0QX9qIgggCWsiEUkNABogBCAIcSIEQQAgESAEIABIG2shBiALCyEIIA0gAkEBdGogBkF/aiIEOwEAIAlBASAGayAEIAZBAUgbayEJA0AgCSAASARAIABBAXUhACALQX9qIQsMAQsLAn8gByAOS0EAIAcgBSAIaiIFQQN1aiIGIAxLG0UEQCAFQQdxDAELIAUgDCIGIAdrQQN0awshBSACQQFqIQIgBEUhCCAGKAAAIAVBH3F2IQQMAQsLQWwgCUEBRyAFQSBKcg0BGiABIAJBf2o2AgAgBiAFQQdqQQN1aiADawwBC0FQCyEAIApBEGokACAACwkAQQFBBSAAGwsMACAAIAEoAAA2AAALqgMBCn8jAEHwAGsiCiQAIAJBAWohDiAAQQhqIQtBgIAEIAVBf2p0QRB1IQxBACECQQEhBkEBIAV0IglBf2oiDyEIA0AgAiAORkUEQAJAIAEgAkEBdCINai8BACIHQf//A0YEQCALIAhBA3RqIAI2AgQgCEF/aiEIQQEhBwwBCyAGQQAgDCAHQRB0QRB1ShshBgsgCiANaiAHOwEAIAJBAWohAgwBCwsgACAFNgIEIAAgBjYCACAJQQN2IAlBAXZqQQNqIQxBACEAQQAhBkEAIQIDQCAGIA5GBEADQAJAIAAgCUYNACAKIAsgAEEDdGoiASgCBCIGQQF0aiICIAIvAQAiAkEBajsBACABIAUgAhAUayIIOgADIAEgAiAIQf8BcXQgCWs7AQAgASAEIAZBAnQiAmooAgA6AAIgASACIANqKAIANgIEIABBAWohAAwBCwsFIAEgBkEBdGouAQAhDUEAIQcDQCAHIA1ORQRAIAsgAkEDdGogBjYCBANAIAIgDGogD3EiAiAISw0ACyAHQQFqIQcMAQsLIAZBAWohBgwBCwsgCkHwAGokAAsjAEIAIAEQCSAAhUKHla+vmLbem55/fkLj3MqV/M7y9YV/fAsQACAAQn43AwggACABNgIACyQBAX8gAARAIAEoAgQiAgRAIAEoAgggACACEQEADwsgABAmCwsfACAAIAEgAi8BABAINgIAIAEQBBogACACQQRqNgIEC0oBAX9BoCAoAgAiASAAaiIAQX9MBEBBiCBBMDYCAEF/DwsCQCAAPwBBEHRNDQAgABBmDQBBiCBBMDYCAEF/DwtBoCAgADYCACABC9cBAQh/Qbp/IQoCQCACKAIEIgggAigCACIJaiIOIAEgAGtLDQBBbCEKIAkgBCADKAIAIgtrSw0AIAAgCWoiBCACKAIIIgxrIQ0gACABQWBqIg8gCyAJQQAQKSADIAkgC2o2AgACQAJAIAwgBCAFa00EQCANIQUMAQsgDCAEIAZrSw0CIAcgDSAFayIAaiIBIAhqIAdNBEAgBCABIAgQDxoMAgsgBCABQQAgAGsQDyEBIAIgACAIaiIINgIEIAEgAGshBAsgBCAPIAUgCEEBECkLIA4hCgsgCgubAgEBfyMAQYABayINJAAgDSADNgJ8AkAgAkEDSwRAQX8hCQwBCwJAAkACQAJAIAJBAWsOAwADAgELIAZFBEBBuH8hCQwEC0FsIQkgBS0AACICIANLDQMgACAHIAJBAnQiAmooAgAgAiAIaigCABA7IAEgADYCAEEBIQkMAwsgASAJNgIAQQAhCQwCCyAKRQRAQWwhCQwCC0EAIQkgC0UgDEEZSHINAUEIIAR0QQhqIQBBACECA0AgAiAATw0CIAJBQGshAgwAAAsAC0FsIQkgDSANQfwAaiANQfgAaiAFIAYQFSICEAMNACANKAJ4IgMgBEsNACAAIA0gDSgCfCAHIAggAxAYIAEgADYCACACIQkLIA1BgAFqJAAgCQsLACAAIAEgAhALGgsQACAALwAAIAAtAAJBEHRyCy8AAn9BuH8gAUEISQ0AGkFyIAAoAAQiAEF3Sw0AGkG4fyAAQQhqIgAgACABSxsLCwkAIAAgATsAAAsDAAELigYBBX8gACAAKAIAIgVBfnE2AgBBACAAIAVBAXZqQYQgKAIAIgQgAEYbIQECQAJAIAAoAgQiAkUNACACKAIAIgNBAXENACACQQhqIgUgA0EBdkF4aiIDQQggA0EISxtnQR9zQQJ0QYAfaiIDKAIARgRAIAMgAigCDDYCAAsgAigCCCIDBEAgAyACKAIMNgIECyACKAIMIgMEQCADIAIoAgg2AgALIAIgAigCACAAKAIAQX5xajYCAEGEICEAAkACQCABRQ0AIAEgAjYCBCABKAIAIgNBAXENASADQQF2QXhqIgNBCCADQQhLG2dBH3NBAnRBgB9qIgMoAgAgAUEIakYEQCADIAEoAgw2AgALIAEoAggiAwRAIAMgASgCDDYCBAsgASgCDCIDBEAgAyABKAIINgIAQYQgKAIAIQQLIAIgAigCACABKAIAQX5xajYCACABIARGDQAgASABKAIAQQF2akEEaiEACyAAIAI2AgALIAIoAgBBAXZBeGoiAEEIIABBCEsbZ0Efc0ECdEGAH2oiASgCACEAIAEgBTYCACACIAA2AgwgAkEANgIIIABFDQEgACAFNgIADwsCQCABRQ0AIAEoAgAiAkEBcQ0AIAJBAXZBeGoiAkEIIAJBCEsbZ0Efc0ECdEGAH2oiAigCACABQQhqRgRAIAIgASgCDDYCAAsgASgCCCICBEAgAiABKAIMNgIECyABKAIMIgIEQCACIAEoAgg2AgBBhCAoAgAhBAsgACAAKAIAIAEoAgBBfnFqIgI2AgACQCABIARHBEAgASABKAIAQQF2aiAANgIEIAAoAgAhAgwBC0GEICAANgIACyACQQF2QXhqIgFBCCABQQhLG2dBH3NBAnRBgB9qIgIoAgAhASACIABBCGoiAjYCACAAIAE2AgwgAEEANgIIIAFFDQEgASACNgIADwsgBUEBdkF4aiIBQQggAUEISxtnQR9zQQJ0QYAfaiICKAIAIQEgAiAAQQhqIgI2AgAgACABNgIMIABBADYCCCABRQ0AIAEgAjYCAAsLDgAgAARAIABBeGoQJQsLgAIBA38CQCAAQQ9qQXhxQYQgKAIAKAIAQQF2ayICEB1Bf0YNAAJAQYQgKAIAIgAoAgAiAUEBcQ0AIAFBAXZBeGoiAUEIIAFBCEsbZ0Efc0ECdEGAH2oiASgCACAAQQhqRgRAIAEgACgCDDYCAAsgACgCCCIBBEAgASAAKAIMNgIECyAAKAIMIgFFDQAgASAAKAIINgIAC0EBIQEgACAAKAIAIAJBAXRqIgI2AgAgAkEBcQ0AIAJBAXZBeGoiAkEIIAJBCEsbZ0Efc0ECdEGAH2oiAygCACECIAMgAEEIaiIDNgIAIAAgAjYCDCAAQQA2AgggAkUNACACIAM2AgALIAELtwIBA38CQAJAIABBASAAGyICEDgiAA0AAkACQEGEICgCACIARQ0AIAAoAgAiA0EBcQ0AIAAgA0EBcjYCACADQQF2QXhqIgFBCCABQQhLG2dBH3NBAnRBgB9qIgEoAgAgAEEIakYEQCABIAAoAgw2AgALIAAoAggiAQRAIAEgACgCDDYCBAsgACgCDCIBBEAgASAAKAIINgIACyACECchAkEAIQFBhCAoAgAhACACDQEgACAAKAIAQX5xNgIAQQAPCyACQQ9qQXhxIgMQHSICQX9GDQIgAkEHakF4cSIAIAJHBEAgACACaxAdQX9GDQMLAkBBhCAoAgAiAUUEQEGAICAANgIADAELIAAgATYCBAtBhCAgADYCACAAIANBAXRBAXI2AgAMAQsgAEUNAQsgAEEIaiEBCyABC7kDAQJ/IAAgA2ohBQJAIANBB0wEQANAIAAgBU8NAiAAIAItAAA6AAAgAEEBaiEAIAJBAWohAgwAAAsACyAEQQFGBEACQCAAIAJrIgZBB00EQCAAIAItAAA6AAAgACACLQABOgABIAAgAi0AAjoAAiAAIAItAAM6AAMgAEEEaiACIAZBAnQiBkHAHmooAgBqIgIQFyACIAZB4B5qKAIAayECDAELIAAgAhAMCyACQQhqIQIgAEEIaiEACwJAAkACQAJAIAUgAU0EQCAAIANqIQEgBEEBRyAAIAJrQQ9Kcg0BA0AgACACEAwgAkEIaiECIABBCGoiACABSQ0ACwwFCyAAIAFLBEAgACEBDAQLIARBAUcgACACa0EPSnINASAAIQMgAiEEA0AgAyAEEAwgBEEIaiEEIANBCGoiAyABSQ0ACwwCCwNAIAAgAhAHIAJBEGohAiAAQRBqIgAgAUkNAAsMAwsgACEDIAIhBANAIAMgBBAHIARBEGohBCADQRBqIgMgAUkNAAsLIAIgASAAa2ohAgsDQCABIAVPDQEgASACLQAAOgAAIAFBAWohASACQQFqIQIMAAALAAsLQQECfyAAIAAoArjgASIDNgLE4AEgACgCvOABIQQgACABNgK84AEgACABIAJqNgK44AEgACABIAQgA2tqNgLA4AELpgEBAX8gACAAKALs4QEQFjYCyOABIABCADcD+OABIABCADcDuOABIABBwOABakIANwMAIABBqNAAaiIBQYyAgOAANgIAIABBADYCmOIBIABCADcDiOEBIABCAzcDgOEBIABBrNABakHgEikCADcCACAAQbTQAWpB6BIoAgA2AgAgACABNgIMIAAgAEGYIGo2AgggACAAQaAwajYCBCAAIABBEGo2AgALYQEBf0G4fyEDAkAgAUEDSQ0AIAIgABAhIgFBA3YiADYCCCACIAFBAXE2AgQgAiABQQF2QQNxIgM2AgACQCADQX9qIgFBAksNAAJAIAFBAWsOAgEAAgtBbA8LIAAhAwsgAwsMACAAIAEgAkEAEC4LiAQCA38CfiADEBYhBCAAQQBBKBAQIQAgBCACSwRAIAQPCyABRQRAQX8PCwJAAkAgA0EBRg0AIAEoAAAiBkGo6r5pRg0AQXYhAyAGQXBxQdDUtMIBRw0BQQghAyACQQhJDQEgAEEAQSgQECEAIAEoAAQhASAAQQE2AhQgACABrTcDAEEADwsgASACIAMQLyIDIAJLDQAgACADNgIYQXIhAyABIARqIgVBf2otAAAiAkEIcQ0AIAJBIHEiBkUEQEFwIQMgBS0AACIFQacBSw0BIAVBB3GtQgEgBUEDdkEKaq2GIgdCA4h+IAd8IQggBEEBaiEECyACQQZ2IQMgAkECdiEFAkAgAkEDcUF/aiICQQJLBEBBACECDAELAkACQAJAIAJBAWsOAgECAAsgASAEai0AACECIARBAWohBAwCCyABIARqLwAAIQIgBEECaiEEDAELIAEgBGooAAAhAiAEQQRqIQQLIAVBAXEhBQJ+AkACQAJAIANBf2oiA0ECTQRAIANBAWsOAgIDAQtCfyAGRQ0DGiABIARqMQAADAMLIAEgBGovAACtQoACfAwCCyABIARqKAAArQwBCyABIARqKQAACyEHIAAgBTYCICAAIAI2AhwgACAHNwMAQQAhAyAAQQA2AhQgACAHIAggBhsiBzcDCCAAIAdCgIAIIAdCgIAIVBs+AhALIAMLWwEBf0G4fyEDIAIQFiICIAFNBH8gACACakF/ai0AACIAQQNxQQJ0QaAeaigCACACaiAAQQZ2IgFBAnRBsB5qKAIAaiAAQSBxIgBFaiABRSAAQQV2cWoFQbh/CwsdACAAKAKQ4gEQWiAAQQA2AqDiASAAQgA3A5DiAQu1AwEFfyMAQZACayIKJABBuH8hBgJAIAVFDQAgBCwAACIIQf8BcSEHAkAgCEF/TARAIAdBgn9qQQF2IgggBU8NAkFsIQYgB0GBf2oiBUGAAk8NAiAEQQFqIQdBACEGA0AgBiAFTwRAIAUhBiAIIQcMAwUgACAGaiAHIAZBAXZqIgQtAABBBHY6AAAgACAGQQFyaiAELQAAQQ9xOgAAIAZBAmohBgwBCwAACwALIAcgBU8NASAAIARBAWogByAKEFMiBhADDQELIAYhBEEAIQYgAUEAQTQQECEJQQAhBQNAIAQgBkcEQCAAIAZqIggtAAAiAUELSwRAQWwhBgwDBSAJIAFBAnRqIgEgASgCAEEBajYCACAGQQFqIQZBASAILQAAdEEBdSAFaiEFDAILAAsLQWwhBiAFRQ0AIAUQFEEBaiIBQQxLDQAgAyABNgIAQQFBASABdCAFayIDEBQiAXQgA0cNACAAIARqIAFBAWoiADoAACAJIABBAnRqIgAgACgCAEEBajYCACAJKAIEIgBBAkkgAEEBcXINACACIARBAWo2AgAgB0EBaiEGCyAKQZACaiQAIAYLxhEBDH8jAEHwAGsiBSQAQWwhCwJAIANBCkkNACACLwAAIQogAi8AAiEJIAIvAAQhByAFQQhqIAQQDgJAIAMgByAJIApqakEGaiIMSQ0AIAUtAAohCCAFQdgAaiACQQZqIgIgChAGIgsQAw0BIAVBQGsgAiAKaiICIAkQBiILEAMNASAFQShqIAIgCWoiAiAHEAYiCxADDQEgBUEQaiACIAdqIAMgDGsQBiILEAMNASAAIAFqIg9BfWohECAEQQRqIQZBASELIAAgAUEDakECdiIDaiIMIANqIgIgA2oiDiEDIAIhBCAMIQcDQCALIAMgEElxBEAgACAGIAVB2ABqIAgQAkECdGoiCS8BADsAACAFQdgAaiAJLQACEAEgCS0AAyELIAcgBiAFQUBrIAgQAkECdGoiCS8BADsAACAFQUBrIAktAAIQASAJLQADIQogBCAGIAVBKGogCBACQQJ0aiIJLwEAOwAAIAVBKGogCS0AAhABIAktAAMhCSADIAYgBUEQaiAIEAJBAnRqIg0vAQA7AAAgBUEQaiANLQACEAEgDS0AAyENIAAgC2oiCyAGIAVB2ABqIAgQAkECdGoiAC8BADsAACAFQdgAaiAALQACEAEgAC0AAyEAIAcgCmoiCiAGIAVBQGsgCBACQQJ0aiIHLwEAOwAAIAVBQGsgBy0AAhABIActAAMhByAEIAlqIgkgBiAFQShqIAgQAkECdGoiBC8BADsAACAFQShqIAQtAAIQASAELQADIQQgAyANaiIDIAYgBUEQaiAIEAJBAnRqIg0vAQA7AAAgBUEQaiANLQACEAEgACALaiEAIAcgCmohByAEIAlqIQQgAyANLQADaiEDIAVB2ABqEA0gBUFAaxANciAFQShqEA1yIAVBEGoQDXJFIQsMAQsLIAQgDksgByACS3INAEFsIQsgACAMSw0BIAxBfWohCQNAQQAgACAJSSAFQdgAahAEGwRAIAAgBiAFQdgAaiAIEAJBAnRqIgovAQA7AAAgBUHYAGogCi0AAhABIAAgCi0AA2oiACAGIAVB2ABqIAgQAkECdGoiCi8BADsAACAFQdgAaiAKLQACEAEgACAKLQADaiEADAEFIAxBfmohCgNAIAVB2ABqEAQgACAKS3JFBEAgACAGIAVB2ABqIAgQAkECdGoiCS8BADsAACAFQdgAaiAJLQACEAEgACAJLQADaiEADAELCwNAIAAgCk0EQCAAIAYgBUHYAGogCBACQQJ0aiIJLwEAOwAAIAVB2ABqIAktAAIQASAAIAktAANqIQAMAQsLAkAgACAMTw0AIAAgBiAFQdgAaiAIEAIiAEECdGoiDC0AADoAACAMLQADQQFGBEAgBUHYAGogDC0AAhABDAELIAUoAlxBH0sNACAFQdgAaiAGIABBAnRqLQACEAEgBSgCXEEhSQ0AIAVBIDYCXAsgAkF9aiEMA0BBACAHIAxJIAVBQGsQBBsEQCAHIAYgBUFAayAIEAJBAnRqIgAvAQA7AAAgBUFAayAALQACEAEgByAALQADaiIAIAYgBUFAayAIEAJBAnRqIgcvAQA7AAAgBUFAayAHLQACEAEgACAHLQADaiEHDAEFIAJBfmohDANAIAVBQGsQBCAHIAxLckUEQCAHIAYgBUFAayAIEAJBAnRqIgAvAQA7AAAgBUFAayAALQACEAEgByAALQADaiEHDAELCwNAIAcgDE0EQCAHIAYgBUFAayAIEAJBAnRqIgAvAQA7AAAgBUFAayAALQACEAEgByAALQADaiEHDAELCwJAIAcgAk8NACAHIAYgBUFAayAIEAIiAEECdGoiAi0AADoAACACLQADQQFGBEAgBUFAayACLQACEAEMAQsgBSgCREEfSw0AIAVBQGsgBiAAQQJ0ai0AAhABIAUoAkRBIUkNACAFQSA2AkQLIA5BfWohAgNAQQAgBCACSSAFQShqEAQbBEAgBCAGIAVBKGogCBACQQJ0aiIALwEAOwAAIAVBKGogAC0AAhABIAQgAC0AA2oiACAGIAVBKGogCBACQQJ0aiIELwEAOwAAIAVBKGogBC0AAhABIAAgBC0AA2ohBAwBBSAOQX5qIQIDQCAFQShqEAQgBCACS3JFBEAgBCAGIAVBKGogCBACQQJ0aiIALwEAOwAAIAVBKGogAC0AAhABIAQgAC0AA2ohBAwBCwsDQCAEIAJNBEAgBCAGIAVBKGogCBACQQJ0aiIALwEAOwAAIAVBKGogAC0AAhABIAQgAC0AA2ohBAwBCwsCQCAEIA5PDQAgBCAGIAVBKGogCBACIgBBAnRqIgItAAA6AAAgAi0AA0EBRgRAIAVBKGogAi0AAhABDAELIAUoAixBH0sNACAFQShqIAYgAEECdGotAAIQASAFKAIsQSFJDQAgBUEgNgIsCwNAQQAgAyAQSSAFQRBqEAQbBEAgAyAGIAVBEGogCBACQQJ0aiIALwEAOwAAIAVBEGogAC0AAhABIAMgAC0AA2oiACAGIAVBEGogCBACQQJ0aiICLwEAOwAAIAVBEGogAi0AAhABIAAgAi0AA2ohAwwBBSAPQX5qIQIDQCAFQRBqEAQgAyACS3JFBEAgAyAGIAVBEGogCBACQQJ0aiIALwEAOwAAIAVBEGogAC0AAhABIAMgAC0AA2ohAwwBCwsDQCADIAJNBEAgAyAGIAVBEGogCBACQQJ0aiIALwEAOwAAIAVBEGogAC0AAhABIAMgAC0AA2ohAwwBCwsCQCADIA9PDQAgAyAGIAVBEGogCBACIgBBAnRqIgItAAA6AAAgAi0AA0EBRgRAIAVBEGogAi0AAhABDAELIAUoAhRBH0sNACAFQRBqIAYgAEECdGotAAIQASAFKAIUQSFJDQAgBUEgNgIUCyABQWwgBUHYAGoQCiAFQUBrEApxIAVBKGoQCnEgBUEQahAKcRshCwwJCwAACwALAAALAAsAAAsACwAACwALQWwhCwsgBUHwAGokACALC7UEAQ5/IwBBEGsiBiQAIAZBBGogABAOQVQhBQJAIARB3AtJDQAgBi0ABCEHIANB8ARqQQBB7AAQECEIIAdBDEsNACADQdwJaiIJIAggBkEIaiAGQQxqIAEgAhAxIhAQA0UEQCAGKAIMIgQgB0sNASADQdwFaiEPIANBpAVqIREgAEEEaiESIANBqAVqIQEgBCEFA0AgBSICQX9qIQUgCCACQQJ0aigCAEUNAAsgAkEBaiEOQQEhBQNAIAUgDk9FBEAgCCAFQQJ0IgtqKAIAIQwgASALaiAKNgIAIAVBAWohBSAKIAxqIQoMAQsLIAEgCjYCAEEAIQUgBigCCCELA0AgBSALRkUEQCABIAUgCWotAAAiDEECdGoiDSANKAIAIg1BAWo2AgAgDyANQQF0aiINIAw6AAEgDSAFOgAAIAVBAWohBQwBCwtBACEBIANBADYCqAUgBEF/cyAHaiEJQQEhBQNAIAUgDk9FBEAgCCAFQQJ0IgtqKAIAIQwgAyALaiABNgIAIAwgBSAJanQgAWohASAFQQFqIQUMAQsLIAcgBEEBaiIBIAJrIgRrQQFqIQgDQEEBIQUgBCAIT0UEQANAIAUgDk9FBEAgBUECdCIJIAMgBEE0bGpqIAMgCWooAgAgBHY2AgAgBUEBaiEFDAELCyAEQQFqIQQMAQsLIBIgByAPIAogESADIAIgARBkIAZBAToABSAGIAc6AAYgACAGKAIENgIACyAQIQULIAZBEGokACAFC8ENAQt/IwBB8ABrIgUkAEFsIQkCQCADQQpJDQAgAi8AACEKIAIvAAIhDCACLwAEIQYgBUEIaiAEEA4CQCADIAYgCiAMampBBmoiDUkNACAFLQAKIQcgBUHYAGogAkEGaiICIAoQBiIJEAMNASAFQUBrIAIgCmoiAiAMEAYiCRADDQEgBUEoaiACIAxqIgIgBhAGIgkQAw0BIAVBEGogAiAGaiADIA1rEAYiCRADDQEgACABaiIOQX1qIQ8gBEEEaiEGQQEhCSAAIAFBA2pBAnYiAmoiCiACaiIMIAJqIg0hAyAMIQQgCiECA0AgCSADIA9JcQRAIAYgBUHYAGogBxACQQF0aiIILQAAIQsgBUHYAGogCC0AARABIAAgCzoAACAGIAVBQGsgBxACQQF0aiIILQAAIQsgBUFAayAILQABEAEgAiALOgAAIAYgBUEoaiAHEAJBAXRqIggtAAAhCyAFQShqIAgtAAEQASAEIAs6AAAgBiAFQRBqIAcQAkEBdGoiCC0AACELIAVBEGogCC0AARABIAMgCzoAACAGIAVB2ABqIAcQAkEBdGoiCC0AACELIAVB2ABqIAgtAAEQASAAIAs6AAEgBiAFQUBrIAcQAkEBdGoiCC0AACELIAVBQGsgCC0AARABIAIgCzoAASAGIAVBKGogBxACQQF0aiIILQAAIQsgBUEoaiAILQABEAEgBCALOgABIAYgBUEQaiAHEAJBAXRqIggtAAAhCyAFQRBqIAgtAAEQASADIAs6AAEgA0ECaiEDIARBAmohBCACQQJqIQIgAEECaiEAIAkgBUHYAGoQDUVxIAVBQGsQDUVxIAVBKGoQDUVxIAVBEGoQDUVxIQkMAQsLIAQgDUsgAiAMS3INAEFsIQkgACAKSw0BIApBfWohCQNAIAVB2ABqEAQgACAJT3JFBEAgBiAFQdgAaiAHEAJBAXRqIggtAAAhCyAFQdgAaiAILQABEAEgACALOgAAIAYgBUHYAGogBxACQQF0aiIILQAAIQsgBUHYAGogCC0AARABIAAgCzoAASAAQQJqIQAMAQsLA0AgBUHYAGoQBCAAIApPckUEQCAGIAVB2ABqIAcQAkEBdGoiCS0AACEIIAVB2ABqIAktAAEQASAAIAg6AAAgAEEBaiEADAELCwNAIAAgCkkEQCAGIAVB2ABqIAcQAkEBdGoiCS0AACEIIAVB2ABqIAktAAEQASAAIAg6AAAgAEEBaiEADAELCyAMQX1qIQADQCAFQUBrEAQgAiAAT3JFBEAgBiAFQUBrIAcQAkEBdGoiCi0AACEJIAVBQGsgCi0AARABIAIgCToAACAGIAVBQGsgBxACQQF0aiIKLQAAIQkgBUFAayAKLQABEAEgAiAJOgABIAJBAmohAgwBCwsDQCAFQUBrEAQgAiAMT3JFBEAgBiAFQUBrIAcQAkEBdGoiAC0AACEKIAVBQGsgAC0AARABIAIgCjoAACACQQFqIQIMAQsLA0AgAiAMSQRAIAYgBUFAayAHEAJBAXRqIgAtAAAhCiAFQUBrIAAtAAEQASACIAo6AAAgAkEBaiECDAELCyANQX1qIQADQCAFQShqEAQgBCAAT3JFBEAgBiAFQShqIAcQAkEBdGoiAi0AACEKIAVBKGogAi0AARABIAQgCjoAACAGIAVBKGogBxACQQF0aiICLQAAIQogBUEoaiACLQABEAEgBCAKOgABIARBAmohBAwBCwsDQCAFQShqEAQgBCANT3JFBEAgBiAFQShqIAcQAkEBdGoiAC0AACECIAVBKGogAC0AARABIAQgAjoAACAEQQFqIQQMAQsLA0AgBCANSQRAIAYgBUEoaiAHEAJBAXRqIgAtAAAhAiAFQShqIAAtAAEQASAEIAI6AAAgBEEBaiEEDAELCwNAIAVBEGoQBCADIA9PckUEQCAGIAVBEGogBxACQQF0aiIALQAAIQIgBUEQaiAALQABEAEgAyACOgAAIAYgBUEQaiAHEAJBAXRqIgAtAAAhAiAFQRBqIAAtAAEQASADIAI6AAEgA0ECaiEDDAELCwNAIAVBEGoQBCADIA5PckUEQCAGIAVBEGogBxACQQF0aiIALQAAIQIgBUEQaiAALQABEAEgAyACOgAAIANBAWohAwwBCwsDQCADIA5JBEAgBiAFQRBqIAcQAkEBdGoiAC0AACECIAVBEGogAC0AARABIAMgAjoAACADQQFqIQMMAQsLIAFBbCAFQdgAahAKIAVBQGsQCnEgBUEoahAKcSAFQRBqEApxGyEJDAELQWwhCQsgBUHwAGokACAJC8oCAQR/IwBBIGsiBSQAIAUgBBAOIAUtAAIhByAFQQhqIAIgAxAGIgIQA0UEQCAEQQRqIQIgACABaiIDQX1qIQQDQCAFQQhqEAQgACAET3JFBEAgAiAFQQhqIAcQAkEBdGoiBi0AACEIIAVBCGogBi0AARABIAAgCDoAACACIAVBCGogBxACQQF0aiIGLQAAIQggBUEIaiAGLQABEAEgACAIOgABIABBAmohAAwBCwsDQCAFQQhqEAQgACADT3JFBEAgAiAFQQhqIAcQAkEBdGoiBC0AACEGIAVBCGogBC0AARABIAAgBjoAACAAQQFqIQAMAQsLA0AgACADT0UEQCACIAVBCGogBxACQQF0aiIELQAAIQYgBUEIaiAELQABEAEgACAGOgAAIABBAWohAAwBCwsgAUFsIAVBCGoQChshAgsgBUEgaiQAIAILtgMBCX8jAEEQayIGJAAgBkEANgIMIAZBADYCCEFUIQQCQAJAIANBQGsiDCADIAZBCGogBkEMaiABIAIQMSICEAMNACAGQQRqIAAQDiAGKAIMIgcgBi0ABEEBaksNASAAQQRqIQogBkEAOgAFIAYgBzoABiAAIAYoAgQ2AgAgB0EBaiEJQQEhBANAIAQgCUkEQCADIARBAnRqIgEoAgAhACABIAU2AgAgACAEQX9qdCAFaiEFIARBAWohBAwBCwsgB0EBaiEHQQAhBSAGKAIIIQkDQCAFIAlGDQEgAyAFIAxqLQAAIgRBAnRqIgBBASAEdEEBdSILIAAoAgAiAWoiADYCACAHIARrIQhBACEEAkAgC0EDTQRAA0AgBCALRg0CIAogASAEakEBdGoiACAIOgABIAAgBToAACAEQQFqIQQMAAALAAsDQCABIABPDQEgCiABQQF0aiIEIAg6AAEgBCAFOgAAIAQgCDoAAyAEIAU6AAIgBCAIOgAFIAQgBToABCAEIAg6AAcgBCAFOgAGIAFBBGohAQwAAAsACyAFQQFqIQUMAAALAAsgAiEECyAGQRBqJAAgBAutAQECfwJAQYQgKAIAIABHIAAoAgBBAXYiAyABa0F4aiICQXhxQQhHcgR/IAIFIAMQJ0UNASACQQhqC0EQSQ0AIAAgACgCACICQQFxIAAgAWpBD2pBeHEiASAAa0EBdHI2AgAgASAANgIEIAEgASgCAEEBcSAAIAJBAXZqIAFrIgJBAXRyNgIAQYQgIAEgAkH/////B3FqQQRqQYQgKAIAIABGGyABNgIAIAEQJQsLygIBBX8CQAJAAkAgAEEIIABBCEsbZ0EfcyAAaUEBR2oiAUEESSAAIAF2cg0AIAFBAnRB/B5qKAIAIgJFDQADQCACQXhqIgMoAgBBAXZBeGoiBSAATwRAIAIgBUEIIAVBCEsbZ0Efc0ECdEGAH2oiASgCAEYEQCABIAIoAgQ2AgALDAMLIARBHksNASAEQQFqIQQgAigCBCICDQALC0EAIQMgAUEgTw0BA0AgAUECdEGAH2ooAgAiAkUEQCABQR5LIQIgAUEBaiEBIAJFDQEMAwsLIAIgAkF4aiIDKAIAQQF2QXhqIgFBCCABQQhLG2dBH3NBAnRBgB9qIgEoAgBGBEAgASACKAIENgIACwsgAigCACIBBEAgASACKAIENgIECyACKAIEIgEEQCABIAIoAgA2AgALIAMgAygCAEEBcjYCACADIAAQNwsgAwvhCwINfwV+IwBB8ABrIgckACAHIAAoAvDhASIINgJcIAEgAmohDSAIIAAoAoDiAWohDwJAAkAgBUUEQCABIQQMAQsgACgCxOABIRAgACgCwOABIREgACgCvOABIQ4gAEEBNgKM4QFBACEIA0AgCEEDRwRAIAcgCEECdCICaiAAIAJqQazQAWooAgA2AkQgCEEBaiEIDAELC0FsIQwgB0EYaiADIAQQBhADDQEgB0EsaiAHQRhqIAAoAgAQEyAHQTRqIAdBGGogACgCCBATIAdBPGogB0EYaiAAKAIEEBMgDUFgaiESIAEhBEEAIQwDQCAHKAIwIAcoAixBA3RqKQIAIhRCEIinQf8BcSEIIAcoAkAgBygCPEEDdGopAgAiFUIQiKdB/wFxIQsgBygCOCAHKAI0QQN0aikCACIWQiCIpyEJIBVCIIghFyAUQiCIpyECAkAgFkIQiKdB/wFxIgNBAk8EQAJAIAZFIANBGUlyRQRAIAkgB0EYaiADQSAgBygCHGsiCiAKIANLGyIKEAUgAyAKayIDdGohCSAHQRhqEAQaIANFDQEgB0EYaiADEAUgCWohCQwBCyAHQRhqIAMQBSAJaiEJIAdBGGoQBBoLIAcpAkQhGCAHIAk2AkQgByAYNwNIDAELAkAgA0UEQCACBEAgBygCRCEJDAMLIAcoAkghCQwBCwJAAkAgB0EYakEBEAUgCSACRWpqIgNBA0YEQCAHKAJEQX9qIgMgA0VqIQkMAQsgA0ECdCAHaigCRCIJIAlFaiEJIANBAUYNAQsgByAHKAJINgJMCwsgByAHKAJENgJIIAcgCTYCRAsgF6chAyALBEAgB0EYaiALEAUgA2ohAwsgCCALakEUTwRAIAdBGGoQBBoLIAgEQCAHQRhqIAgQBSACaiECCyAHQRhqEAQaIAcgB0EYaiAUQhiIp0H/AXEQCCAUp0H//wNxajYCLCAHIAdBGGogFUIYiKdB/wFxEAggFadB//8DcWo2AjwgB0EYahAEGiAHIAdBGGogFkIYiKdB/wFxEAggFqdB//8DcWo2AjQgByACNgJgIAcoAlwhCiAHIAk2AmggByADNgJkAkACQAJAIAQgAiADaiILaiASSw0AIAIgCmoiEyAPSw0AIA0gBGsgC0Egak8NAQsgByAHKQNoNwMQIAcgBykDYDcDCCAEIA0gB0EIaiAHQdwAaiAPIA4gESAQEB4hCwwBCyACIARqIQggBCAKEAcgAkERTwRAIARBEGohAgNAIAIgCkEQaiIKEAcgAkEQaiICIAhJDQALCyAIIAlrIQIgByATNgJcIAkgCCAOa0sEQCAJIAggEWtLBEBBbCELDAILIBAgAiAOayICaiIKIANqIBBNBEAgCCAKIAMQDxoMAgsgCCAKQQAgAmsQDyEIIAcgAiADaiIDNgJkIAggAmshCCAOIQILIAlBEE8EQCADIAhqIQMDQCAIIAIQByACQRBqIQIgCEEQaiIIIANJDQALDAELAkAgCUEHTQRAIAggAi0AADoAACAIIAItAAE6AAEgCCACLQACOgACIAggAi0AAzoAAyAIQQRqIAIgCUECdCIDQcAeaigCAGoiAhAXIAIgA0HgHmooAgBrIQIgBygCZCEDDAELIAggAhAMCyADQQlJDQAgAyAIaiEDIAhBCGoiCCACQQhqIgJrQQ9MBEADQCAIIAIQDCACQQhqIQIgCEEIaiIIIANJDQAMAgALAAsDQCAIIAIQByACQRBqIQIgCEEQaiIIIANJDQALCyAHQRhqEAQaIAsgDCALEAMiAhshDCAEIAQgC2ogAhshBCAFQX9qIgUNAAsgDBADDQFBbCEMIAdBGGoQBEECSQ0BQQAhCANAIAhBA0cEQCAAIAhBAnQiAmpBrNABaiACIAdqKAJENgIAIAhBAWohCAwBCwsgBygCXCEIC0G6fyEMIA8gCGsiACANIARrSw0AIAQEfyAEIAggABALIABqBUEACyABayEMCyAHQfAAaiQAIAwLkRcCFn8FfiMAQdABayIHJAAgByAAKALw4QEiCDYCvAEgASACaiESIAggACgCgOIBaiETAkACQCAFRQRAIAEhAwwBCyAAKALE4AEhESAAKALA4AEhFSAAKAK84AEhDyAAQQE2AozhAUEAIQgDQCAIQQNHBEAgByAIQQJ0IgJqIAAgAmpBrNABaigCADYCVCAIQQFqIQgMAQsLIAcgETYCZCAHIA82AmAgByABIA9rNgJoQWwhECAHQShqIAMgBBAGEAMNASAFQQQgBUEESBshFyAHQTxqIAdBKGogACgCABATIAdBxABqIAdBKGogACgCCBATIAdBzABqIAdBKGogACgCBBATQQAhBCAHQeAAaiEMIAdB5ABqIQoDQCAHQShqEARBAksgBCAXTnJFBEAgBygCQCAHKAI8QQN0aikCACIdQhCIp0H/AXEhCyAHKAJQIAcoAkxBA3RqKQIAIh5CEIinQf8BcSEJIAcoAkggBygCREEDdGopAgAiH0IgiKchCCAeQiCIISAgHUIgiKchAgJAIB9CEIinQf8BcSIDQQJPBEACQCAGRSADQRlJckUEQCAIIAdBKGogA0EgIAcoAixrIg0gDSADSxsiDRAFIAMgDWsiA3RqIQggB0EoahAEGiADRQ0BIAdBKGogAxAFIAhqIQgMAQsgB0EoaiADEAUgCGohCCAHQShqEAQaCyAHKQJUISEgByAINgJUIAcgITcDWAwBCwJAIANFBEAgAgRAIAcoAlQhCAwDCyAHKAJYIQgMAQsCQAJAIAdBKGpBARAFIAggAkVqaiIDQQNGBEAgBygCVEF/aiIDIANFaiEIDAELIANBAnQgB2ooAlQiCCAIRWohCCADQQFGDQELIAcgBygCWDYCXAsLIAcgBygCVDYCWCAHIAg2AlQLICCnIQMgCQRAIAdBKGogCRAFIANqIQMLIAkgC2pBFE8EQCAHQShqEAQaCyALBEAgB0EoaiALEAUgAmohAgsgB0EoahAEGiAHIAcoAmggAmoiCSADajYCaCAKIAwgCCAJSxsoAgAhDSAHIAdBKGogHUIYiKdB/wFxEAggHadB//8DcWo2AjwgByAHQShqIB5CGIinQf8BcRAIIB6nQf//A3FqNgJMIAdBKGoQBBogB0EoaiAfQhiIp0H/AXEQCCEOIAdB8ABqIARBBHRqIgsgCSANaiAIazYCDCALIAg2AgggCyADNgIEIAsgAjYCACAHIA4gH6dB//8DcWo2AkQgBEEBaiEEDAELCyAEIBdIDQEgEkFgaiEYIAdB4ABqIRogB0HkAGohGyABIQMDQCAHQShqEARBAksgBCAFTnJFBEAgBygCQCAHKAI8QQN0aikCACIdQhCIp0H/AXEhCyAHKAJQIAcoAkxBA3RqKQIAIh5CEIinQf8BcSEIIAcoAkggBygCREEDdGopAgAiH0IgiKchCSAeQiCIISAgHUIgiKchDAJAIB9CEIinQf8BcSICQQJPBEACQCAGRSACQRlJckUEQCAJIAdBKGogAkEgIAcoAixrIgogCiACSxsiChAFIAIgCmsiAnRqIQkgB0EoahAEGiACRQ0BIAdBKGogAhAFIAlqIQkMAQsgB0EoaiACEAUgCWohCSAHQShqEAQaCyAHKQJUISEgByAJNgJUIAcgITcDWAwBCwJAIAJFBEAgDARAIAcoAlQhCQwDCyAHKAJYIQkMAQsCQAJAIAdBKGpBARAFIAkgDEVqaiICQQNGBEAgBygCVEF/aiICIAJFaiEJDAELIAJBAnQgB2ooAlQiCSAJRWohCSACQQFGDQELIAcgBygCWDYCXAsLIAcgBygCVDYCWCAHIAk2AlQLICCnIRQgCARAIAdBKGogCBAFIBRqIRQLIAggC2pBFE8EQCAHQShqEAQaCyALBEAgB0EoaiALEAUgDGohDAsgB0EoahAEGiAHIAcoAmggDGoiGSAUajYCaCAbIBogCSAZSxsoAgAhHCAHIAdBKGogHUIYiKdB/wFxEAggHadB//8DcWo2AjwgByAHQShqIB5CGIinQf8BcRAIIB6nQf//A3FqNgJMIAdBKGoQBBogByAHQShqIB9CGIinQf8BcRAIIB+nQf//A3FqNgJEIAcgB0HwAGogBEEDcUEEdGoiDSkDCCIdNwPIASAHIA0pAwAiHjcDwAECQAJAAkAgBygCvAEiDiAepyICaiIWIBNLDQAgAyAHKALEASIKIAJqIgtqIBhLDQAgEiADayALQSBqTw0BCyAHIAcpA8gBNwMQIAcgBykDwAE3AwggAyASIAdBCGogB0G8AWogEyAPIBUgERAeIQsMAQsgAiADaiEIIAMgDhAHIAJBEU8EQCADQRBqIQIDQCACIA5BEGoiDhAHIAJBEGoiAiAISQ0ACwsgCCAdpyIOayECIAcgFjYCvAEgDiAIIA9rSwRAIA4gCCAVa0sEQEFsIQsMAgsgESACIA9rIgJqIhYgCmogEU0EQCAIIBYgChAPGgwCCyAIIBZBACACaxAPIQggByACIApqIgo2AsQBIAggAmshCCAPIQILIA5BEE8EQCAIIApqIQoDQCAIIAIQByACQRBqIQIgCEEQaiIIIApJDQALDAELAkAgDkEHTQRAIAggAi0AADoAACAIIAItAAE6AAEgCCACLQACOgACIAggAi0AAzoAAyAIQQRqIAIgDkECdCIKQcAeaigCAGoiAhAXIAIgCkHgHmooAgBrIQIgBygCxAEhCgwBCyAIIAIQDAsgCkEJSQ0AIAggCmohCiAIQQhqIgggAkEIaiICa0EPTARAA0AgCCACEAwgAkEIaiECIAhBCGoiCCAKSQ0ADAIACwALA0AgCCACEAcgAkEQaiECIAhBEGoiCCAKSQ0ACwsgCxADBEAgCyEQDAQFIA0gDDYCACANIBkgHGogCWs2AgwgDSAJNgIIIA0gFDYCBCAEQQFqIQQgAyALaiEDDAILAAsLIAQgBUgNASAEIBdrIQtBACEEA0AgCyAFSARAIAcgB0HwAGogC0EDcUEEdGoiAikDCCIdNwPIASAHIAIpAwAiHjcDwAECQAJAAkAgBygCvAEiDCAepyICaiIKIBNLDQAgAyAHKALEASIJIAJqIhBqIBhLDQAgEiADayAQQSBqTw0BCyAHIAcpA8gBNwMgIAcgBykDwAE3AxggAyASIAdBGGogB0G8AWogEyAPIBUgERAeIRAMAQsgAiADaiEIIAMgDBAHIAJBEU8EQCADQRBqIQIDQCACIAxBEGoiDBAHIAJBEGoiAiAISQ0ACwsgCCAdpyIGayECIAcgCjYCvAEgBiAIIA9rSwRAIAYgCCAVa0sEQEFsIRAMAgsgESACIA9rIgJqIgwgCWogEU0EQCAIIAwgCRAPGgwCCyAIIAxBACACaxAPIQggByACIAlqIgk2AsQBIAggAmshCCAPIQILIAZBEE8EQCAIIAlqIQYDQCAIIAIQByACQRBqIQIgCEEQaiIIIAZJDQALDAELAkAgBkEHTQRAIAggAi0AADoAACAIIAItAAE6AAEgCCACLQACOgACIAggAi0AAzoAAyAIQQRqIAIgBkECdCIGQcAeaigCAGoiAhAXIAIgBkHgHmooAgBrIQIgBygCxAEhCQwBCyAIIAIQDAsgCUEJSQ0AIAggCWohBiAIQQhqIgggAkEIaiICa0EPTARAA0AgCCACEAwgAkEIaiECIAhBCGoiCCAGSQ0ADAIACwALA0AgCCACEAcgAkEQaiECIAhBEGoiCCAGSQ0ACwsgEBADDQMgC0EBaiELIAMgEGohAwwBCwsDQCAEQQNHBEAgACAEQQJ0IgJqQazQAWogAiAHaigCVDYCACAEQQFqIQQMAQsLIAcoArwBIQgLQbp/IRAgEyAIayIAIBIgA2tLDQAgAwR/IAMgCCAAEAsgAGoFQQALIAFrIRALIAdB0AFqJAAgEAslACAAQgA3AgAgAEEAOwEIIABBADoACyAAIAE2AgwgACACOgAKC7QFAQN/IwBBMGsiBCQAIABB/wFqIgVBfWohBgJAIAMvAQIEQCAEQRhqIAEgAhAGIgIQAw0BIARBEGogBEEYaiADEBwgBEEIaiAEQRhqIAMQHCAAIQMDQAJAIARBGGoQBCADIAZPckUEQCADIARBEGogBEEYahASOgAAIAMgBEEIaiAEQRhqEBI6AAEgBEEYahAERQ0BIANBAmohAwsgBUF+aiEFAn8DQEG6fyECIAMiASAFSw0FIAEgBEEQaiAEQRhqEBI6AAAgAUEBaiEDIARBGGoQBEEDRgRAQQIhAiAEQQhqDAILIAMgBUsNBSABIARBCGogBEEYahASOgABIAFBAmohA0EDIQIgBEEYahAEQQNHDQALIARBEGoLIQUgAyAFIARBGGoQEjoAACABIAJqIABrIQIMAwsgAyAEQRBqIARBGGoQEjoAAiADIARBCGogBEEYahASOgADIANBBGohAwwAAAsACyAEQRhqIAEgAhAGIgIQAw0AIARBEGogBEEYaiADEBwgBEEIaiAEQRhqIAMQHCAAIQMDQAJAIARBGGoQBCADIAZPckUEQCADIARBEGogBEEYahAROgAAIAMgBEEIaiAEQRhqEBE6AAEgBEEYahAERQ0BIANBAmohAwsgBUF+aiEFAn8DQEG6fyECIAMiASAFSw0EIAEgBEEQaiAEQRhqEBE6AAAgAUEBaiEDIARBGGoQBEEDRgRAQQIhAiAEQQhqDAILIAMgBUsNBCABIARBCGogBEEYahAROgABIAFBAmohA0EDIQIgBEEYahAEQQNHDQALIARBEGoLIQUgAyAFIARBGGoQEToAACABIAJqIABrIQIMAgsgAyAEQRBqIARBGGoQEToAAiADIARBCGogBEEYahAROgADIANBBGohAwwAAAsACyAEQTBqJAAgAgtpAQF/An8CQAJAIAJBB00NACABKAAAQbfIwuF+Rw0AIAAgASgABDYCmOIBQWIgAEEQaiABIAIQPiIDEAMNAhogAEKBgICAEDcDiOEBIAAgASADaiACIANrECoMAQsgACABIAIQKgtBAAsLrQMBBn8jAEGAAWsiAyQAQWIhCAJAIAJBCUkNACAAQZjQAGogAUEIaiIEIAJBeGogAEGY0AAQMyIFEAMiBg0AIANBHzYCfCADIANB/ABqIANB+ABqIAQgBCAFaiAGGyIEIAEgAmoiAiAEaxAVIgUQAw0AIAMoAnwiBkEfSw0AIAMoAngiB0EJTw0AIABBiCBqIAMgBkGAC0GADCAHEBggA0E0NgJ8IAMgA0H8AGogA0H4AGogBCAFaiIEIAIgBGsQFSIFEAMNACADKAJ8IgZBNEsNACADKAJ4IgdBCk8NACAAQZAwaiADIAZBgA1B4A4gBxAYIANBIzYCfCADIANB/ABqIANB+ABqIAQgBWoiBCACIARrEBUiBRADDQAgAygCfCIGQSNLDQAgAygCeCIHQQpPDQAgACADIAZBwBBB0BEgBxAYIAQgBWoiBEEMaiIFIAJLDQAgAiAFayEFQQAhAgNAIAJBA0cEQCAEKAAAIgZBf2ogBU8NAiAAIAJBAnRqQZzQAWogBjYCACACQQFqIQIgBEEEaiEEDAELCyAEIAFrIQgLIANBgAFqJAAgCAtGAQN/IABBCGohAyAAKAIEIQJBACEAA0AgACACdkUEQCABIAMgAEEDdGotAAJBFktqIQEgAEEBaiEADAELCyABQQggAmt0C4YDAQV/Qbh/IQcCQCADRQ0AIAItAAAiBEUEQCABQQA2AgBBAUG4fyADQQFGGw8LAn8gAkEBaiIFIARBGHRBGHUiBkF/Sg0AGiAGQX9GBEAgA0EDSA0CIAUvAABBgP4BaiEEIAJBA2oMAQsgA0ECSA0BIAItAAEgBEEIdHJBgIB+aiEEIAJBAmoLIQUgASAENgIAIAVBAWoiASACIANqIgNLDQBBbCEHIABBEGogACAFLQAAIgVBBnZBI0EJIAEgAyABa0HAEEHQEUHwEiAAKAKM4QEgACgCnOIBIAQQHyIGEAMiCA0AIABBmCBqIABBCGogBUEEdkEDcUEfQQggASABIAZqIAgbIgEgAyABa0GAC0GADEGAFyAAKAKM4QEgACgCnOIBIAQQHyIGEAMiCA0AIABBoDBqIABBBGogBUECdkEDcUE0QQkgASABIAZqIAgbIgEgAyABa0GADUHgDkGQGSAAKAKM4QEgACgCnOIBIAQQHyIAEAMNACAAIAFqIAJrIQcLIAcLrQMBCn8jAEGABGsiCCQAAn9BUiACQf8BSw0AGkFUIANBDEsNABogAkEBaiELIABBBGohCUGAgAQgA0F/anRBEHUhCkEAIQJBASEEQQEgA3QiB0F/aiIMIQUDQCACIAtGRQRAAkAgASACQQF0Ig1qLwEAIgZB//8DRgRAIAkgBUECdGogAjoAAiAFQX9qIQVBASEGDAELIARBACAKIAZBEHRBEHVKGyEECyAIIA1qIAY7AQAgAkEBaiECDAELCyAAIAQ7AQIgACADOwEAIAdBA3YgB0EBdmpBA2ohBkEAIQRBACECA0AgBCALRkUEQCABIARBAXRqLgEAIQpBACEAA0AgACAKTkUEQCAJIAJBAnRqIAQ6AAIDQCACIAZqIAxxIgIgBUsNAAsgAEEBaiEADAELCyAEQQFqIQQMAQsLQX8gAg0AGkEAIQIDfyACIAdGBH9BAAUgCCAJIAJBAnRqIgAtAAJBAXRqIgEgAS8BACIBQQFqOwEAIAAgAyABEBRrIgU6AAMgACABIAVB/wFxdCAHazsBACACQQFqIQIMAQsLCyEFIAhBgARqJAAgBQvjBgEIf0FsIQcCQCACQQNJDQACQAJAAkACQCABLQAAIgNBA3EiCUEBaw4DAwEAAgsgACgCiOEBDQBBYg8LIAJBBUkNAkEDIQYgASgAACEFAn8CQAJAIANBAnZBA3EiCEF+aiIEQQFNBEAgBEEBaw0BDAILIAVBDnZB/wdxIQQgBUEEdkH/B3EhAyAIRQwCCyAFQRJ2IQRBBCEGIAVBBHZB//8AcSEDQQAMAQsgBUEEdkH//w9xIgNBgIAISw0DIAEtAARBCnQgBUEWdnIhBEEFIQZBAAshBSAEIAZqIgogAksNAgJAIANBgQZJDQAgACgCnOIBRQ0AQQAhAgNAIAJBg4ABSw0BIAJBQGshAgwAAAsACwJ/IAlBA0YEQCABIAZqIQEgAEHw4gFqIQIgACgCDCEGIAUEQCACIAMgASAEIAYQXwwCCyACIAMgASAEIAYQXQwBCyAAQbjQAWohAiABIAZqIQEgAEHw4gFqIQYgAEGo0ABqIQggBQRAIAggBiADIAEgBCACEF4MAQsgCCAGIAMgASAEIAIQXAsQAw0CIAAgAzYCgOIBIABBATYCiOEBIAAgAEHw4gFqNgLw4QEgCUECRgRAIAAgAEGo0ABqNgIMCyAAIANqIgBBiOMBakIANwAAIABBgOMBakIANwAAIABB+OIBakIANwAAIABB8OIBakIANwAAIAoPCwJ/AkACQAJAIANBAnZBA3FBf2oiBEECSw0AIARBAWsOAgACAQtBASEEIANBA3YMAgtBAiEEIAEvAABBBHYMAQtBAyEEIAEQIUEEdgsiAyAEaiIFQSBqIAJLBEAgBSACSw0CIABB8OIBaiABIARqIAMQCyEBIAAgAzYCgOIBIAAgATYC8OEBIAEgA2oiAEIANwAYIABCADcAECAAQgA3AAggAEIANwAAIAUPCyAAIAM2AoDiASAAIAEgBGo2AvDhASAFDwsCfwJAAkACQCADQQJ2QQNxQX9qIgRBAksNACAEQQFrDgIAAgELQQEhByADQQN2DAILQQIhByABLwAAQQR2DAELIAJBBEkgARAhIgJBj4CAAUtyDQFBAyEHIAJBBHYLIQIgAEHw4gFqIAEgB2otAAAgAkEgahAQIQEgACACNgKA4gEgACABNgLw4QEgB0EBaiEHCyAHC0sAIABC+erQ0OfJoeThADcDICAAQgA3AxggAELP1tO+0ser2UI3AxAgAELW64Lu6v2J9eAANwMIIABCADcDACAAQShqQQBBKBAQGgviAgICfwV+IABBKGoiASAAKAJIaiECAn4gACkDACIDQiBaBEAgACkDECIEQgeJIAApAwgiBUIBiXwgACkDGCIGQgyJfCAAKQMgIgdCEol8IAUQGSAEEBkgBhAZIAcQGQwBCyAAKQMYQsXP2bLx5brqJ3wLIAN8IQMDQCABQQhqIgAgAk0EQEIAIAEpAAAQCSADhUIbiUKHla+vmLbem55/fkLj3MqV/M7y9YV/fCEDIAAhAQwBCwsCQCABQQRqIgAgAksEQCABIQAMAQsgASgAAK1Ch5Wvr5i23puef34gA4VCF4lCz9bTvtLHq9lCfkL5893xmfaZqxZ8IQMLA0AgACACSQRAIAAxAABCxc/ZsvHluuonfiADhUILiUKHla+vmLbem55/fiEDIABBAWohAAwBCwsgA0IhiCADhULP1tO+0ser2UJ+IgNCHYggA4VC+fPd8Zn2masWfiIDQiCIIAOFC+8CAgJ/BH4gACAAKQMAIAKtfDcDAAJAAkAgACgCSCIDIAJqIgRBH00EQCABRQ0BIAAgA2pBKGogASACECAgACgCSCACaiEEDAELIAEgAmohAgJ/IAMEQCAAQShqIgQgA2ogAUEgIANrECAgACAAKQMIIAQpAAAQCTcDCCAAIAApAxAgACkAMBAJNwMQIAAgACkDGCAAKQA4EAk3AxggACAAKQMgIABBQGspAAAQCTcDICAAKAJIIQMgAEEANgJIIAEgA2tBIGohAQsgAUEgaiACTQsEQCACQWBqIQMgACkDICEFIAApAxghBiAAKQMQIQcgACkDCCEIA0AgCCABKQAAEAkhCCAHIAEpAAgQCSEHIAYgASkAEBAJIQYgBSABKQAYEAkhBSABQSBqIgEgA00NAAsgACAFNwMgIAAgBjcDGCAAIAc3AxAgACAINwMICyABIAJPDQEgAEEoaiABIAIgAWsiBBAgCyAAIAQ2AkgLCy8BAX8gAEUEQEG2f0EAIAMbDwtBun8hBCADIAFNBH8gACACIAMQEBogAwVBun8LCy8BAX8gAEUEQEG2f0EAIAMbDwtBun8hBCADIAFNBH8gACACIAMQCxogAwVBun8LC6gCAQZ/IwBBEGsiByQAIABB2OABaikDAEKAgIAQViEIQbh/IQUCQCAEQf//B0sNACAAIAMgBBBCIgUQAyIGDQAgACgCnOIBIQkgACAHQQxqIAMgAyAFaiAGGyIKIARBACAFIAYbayIGEEAiAxADBEAgAyEFDAELIAcoAgwhBCABRQRAQbp/IQUgBEEASg0BCyAGIANrIQUgAyAKaiEDAkAgCQRAIABBADYCnOIBDAELAkACQAJAIARBBUgNACAAQdjgAWopAwBCgICACFgNAAwBCyAAQQA2ApziAQwBCyAAKAIIED8hBiAAQQA2ApziASAGQRRPDQELIAAgASACIAMgBSAEIAgQOSEFDAELIAAgASACIAMgBSAEIAgQOiEFCyAHQRBqJAAgBQtnACAAQdDgAWogASACIAAoAuzhARAuIgEQAwRAIAEPC0G4fyECAkAgAQ0AIABB7OABaigCACIBBEBBYCECIAAoApjiASABRw0BC0EAIQIgAEHw4AFqKAIARQ0AIABBkOEBahBDCyACCycBAX8QVyIERQRAQUAPCyAEIAAgASACIAMgBBBLEE8hACAEEFYgAAs/AQF/AkACQAJAIAAoAqDiAUEBaiIBQQJLDQAgAUEBaw4CAAECCyAAEDBBAA8LIABBADYCoOIBCyAAKAKU4gELvAMCB38BfiMAQRBrIgkkAEG4fyEGAkAgBCgCACIIQQVBCSAAKALs4QEiBRtJDQAgAygCACIHQQFBBSAFGyAFEC8iBRADBEAgBSEGDAELIAggBUEDakkNACAAIAcgBRBJIgYQAw0AIAEgAmohCiAAQZDhAWohCyAIIAVrIQIgBSAHaiEHIAEhBQNAIAcgAiAJECwiBhADDQEgAkF9aiICIAZJBEBBuH8hBgwCCyAJKAIAIghBAksEQEFsIQYMAgsgB0EDaiEHAn8CQAJAAkAgCEEBaw4CAgABCyAAIAUgCiAFayAHIAYQSAwCCyAFIAogBWsgByAGEEcMAQsgBSAKIAVrIActAAAgCSgCCBBGCyIIEAMEQCAIIQYMAgsgACgC8OABBEAgCyAFIAgQRQsgAiAGayECIAYgB2ohByAFIAhqIQUgCSgCBEUNAAsgACkD0OABIgxCf1IEQEFsIQYgDCAFIAFrrFINAQsgACgC8OABBEBBaiEGIAJBBEkNASALEEQhDCAHKAAAIAynRw0BIAdBBGohByACQXxqIQILIAMgBzYCACAEIAI2AgAgBSABayEGCyAJQRBqJAAgBgsuACAAECsCf0EAQQAQAw0AGiABRSACRXJFBEBBYiAAIAEgAhA9EAMNARoLQQALCzcAIAEEQCAAIAAoAsTgASABKAIEIAEoAghqRzYCnOIBCyAAECtBABADIAFFckUEQCAAIAEQWwsL0QIBB38jAEEQayIGJAAgBiAENgIIIAYgAzYCDCAFBEAgBSgCBCEKIAUoAgghCQsgASEIAkACQANAIAAoAuzhARAWIQsCQANAIAQgC0kNASADKAAAQXBxQdDUtMIBRgRAIAMgBBAiIgcQAw0EIAQgB2shBCADIAdqIQMMAQsLIAYgAzYCDCAGIAQ2AggCQCAFBEAgACAFEE5BACEHQQAQA0UNAQwFCyAAIAogCRBNIgcQAw0ECyAAIAgQUCAMQQFHQQAgACAIIAIgBkEMaiAGQQhqEEwiByIDa0EAIAMQAxtBCkdyRQRAQbh/IQcMBAsgBxADDQMgAiAHayECIAcgCGohCEEBIQwgBigCDCEDIAYoAgghBAwBCwsgBiADNgIMIAYgBDYCCEG4fyEHIAQNASAIIAFrIQcMAQsgBiADNgIMIAYgBDYCCAsgBkEQaiQAIAcLRgECfyABIAAoArjgASICRwRAIAAgAjYCxOABIAAgATYCuOABIAAoArzgASEDIAAgATYCvOABIAAgASADIAJrajYCwOABCwutAgIEfwF+IwBBQGoiBCQAAkACQCACQQhJDQAgASgAAEFwcUHQ1LTCAUcNACABIAIQIiEBIABCADcDCCAAQQA2AgQgACABNgIADAELIARBGGogASACEC0iAxADBEAgACADEBoMAQsgAwRAIABBuH8QGgwBCyACIAQoAjAiA2shAiABIANqIQMDQAJAIAAgAyACIARBCGoQLCIFEAMEfyAFBSACIAVBA2oiBU8NAUG4fwsQGgwCCyAGQQFqIQYgAiAFayECIAMgBWohAyAEKAIMRQ0ACyAEKAI4BEAgAkEDTQRAIABBuH8QGgwCCyADQQRqIQMLIAQoAighAiAEKQMYIQcgAEEANgIEIAAgAyABazYCACAAIAIgBmytIAcgB0J/URs3AwgLIARBQGskAAslAQF/IwBBEGsiAiQAIAIgACABEFEgAigCACEAIAJBEGokACAAC30BBH8jAEGQBGsiBCQAIARB/wE2AggCQCAEQRBqIARBCGogBEEMaiABIAIQFSIGEAMEQCAGIQUMAQtBVCEFIAQoAgwiB0EGSw0AIAMgBEEQaiAEKAIIIAcQQSIFEAMNACAAIAEgBmogAiAGayADEDwhBQsgBEGQBGokACAFC4cBAgJ/An5BABAWIQMCQANAIAEgA08EQAJAIAAoAABBcHFB0NS0wgFGBEAgACABECIiAhADRQ0BQn4PCyAAIAEQVSIEQn1WDQMgBCAFfCIFIARUIQJCfiEEIAINAyAAIAEQUiICEAMNAwsgASACayEBIAAgAmohAAwBCwtCfiAFIAEbIQQLIAQLPwIBfwF+IwBBMGsiAiQAAn5CfiACQQhqIAAgARAtDQAaQgAgAigCHEEBRg0AGiACKQMICyEDIAJBMGokACADC40BAQJ/IwBBMGsiASQAAkAgAEUNACAAKAKI4gENACABIABB/OEBaigCADYCKCABIAApAvThATcDICAAEDAgACgCqOIBIQIgASABKAIoNgIYIAEgASkDIDcDECACIAFBEGoQGyAAQQA2AqjiASABIAEoAig2AgggASABKQMgNwMAIAAgARAbCyABQTBqJAALKgECfyMAQRBrIgAkACAAQQA2AgggAEIANwMAIAAQWCEBIABBEGokACABC4cBAQN/IwBBEGsiAiQAAkAgACgCAEUgACgCBEVzDQAgAiAAKAIINgIIIAIgACkCADcDAAJ/IAIoAgAiAQRAIAIoAghBqOMJIAERBQAMAQtBqOMJECgLIgFFDQAgASAAKQIANwL04QEgAUH84QFqIAAoAgg2AgAgARBZIAEhAwsgAkEQaiQAIAMLywEBAn8jAEEgayIBJAAgAEGBgIDAADYCtOIBIABBADYCiOIBIABBADYC7OEBIABCADcDkOIBIABBADYCpOMJIABBADYC3OIBIABCADcCzOIBIABBADYCvOIBIABBADYCxOABIABCADcCnOIBIABBpOIBakIANwIAIABBrOIBakEANgIAIAFCADcCECABQgA3AhggASABKQMYNwMIIAEgASkDEDcDACABKAIIQQh2QQFxIQIgAEEANgLg4gEgACACNgKM4gEgAUEgaiQAC3YBA38jAEEwayIBJAAgAARAIAEgAEHE0AFqIgIoAgA2AiggASAAKQK80AE3AyAgACgCACEDIAEgAigCADYCGCABIAApArzQATcDECADIAFBEGoQGyABIAEoAig2AgggASABKQMgNwMAIAAgARAbCyABQTBqJAALzAEBAX8gACABKAK00AE2ApjiASAAIAEoAgQiAjYCwOABIAAgAjYCvOABIAAgAiABKAIIaiICNgK44AEgACACNgLE4AEgASgCuNABBEAgAEKBgICAEDcDiOEBIAAgAUGk0ABqNgIMIAAgAUGUIGo2AgggACABQZwwajYCBCAAIAFBDGo2AgAgAEGs0AFqIAFBqNABaigCADYCACAAQbDQAWogAUGs0AFqKAIANgIAIABBtNABaiABQbDQAWooAgA2AgAPCyAAQgA3A4jhAQs7ACACRQRAQbp/DwsgBEUEQEFsDwsgAiAEEGAEQCAAIAEgAiADIAQgBRBhDwsgACABIAIgAyAEIAUQZQtGAQF/IwBBEGsiBSQAIAVBCGogBBAOAn8gBS0ACQRAIAAgASACIAMgBBAyDAELIAAgASACIAMgBBA0CyEAIAVBEGokACAACzQAIAAgAyAEIAUQNiIFEAMEQCAFDwsgBSAESQR/IAEgAiADIAVqIAQgBWsgABA1BUG4fwsLRgEBfyMAQRBrIgUkACAFQQhqIAQQDgJ/IAUtAAkEQCAAIAEgAiADIAQQYgwBCyAAIAEgAiADIAQQNQshACAFQRBqJAAgAAtZAQF/QQ8hAiABIABJBEAgAUEEdCAAbiECCyAAQQh2IgEgAkEYbCIAQYwIaigCAGwgAEGICGooAgBqIgJBA3YgAmogAEGACGooAgAgAEGECGooAgAgAWxqSQs3ACAAIAMgBCAFQYAQEDMiBRADBEAgBQ8LIAUgBEkEfyABIAIgAyAFaiAEIAVrIAAQMgVBuH8LC78DAQN/IwBBIGsiBSQAIAVBCGogAiADEAYiAhADRQRAIAAgAWoiB0F9aiEGIAUgBBAOIARBBGohAiAFLQACIQMDQEEAIAAgBkkgBUEIahAEGwRAIAAgAiAFQQhqIAMQAkECdGoiBC8BADsAACAFQQhqIAQtAAIQASAAIAQtAANqIgQgAiAFQQhqIAMQAkECdGoiAC8BADsAACAFQQhqIAAtAAIQASAEIAAtAANqIQAMAQUgB0F+aiEEA0AgBUEIahAEIAAgBEtyRQRAIAAgAiAFQQhqIAMQAkECdGoiBi8BADsAACAFQQhqIAYtAAIQASAAIAYtAANqIQAMAQsLA0AgACAES0UEQCAAIAIgBUEIaiADEAJBAnRqIgYvAQA7AAAgBUEIaiAGLQACEAEgACAGLQADaiEADAELCwJAIAAgB08NACAAIAIgBUEIaiADEAIiA0ECdGoiAC0AADoAACAALQADQQFGBEAgBUEIaiAALQACEAEMAQsgBSgCDEEfSw0AIAVBCGogAiADQQJ0ai0AAhABIAUoAgxBIUkNACAFQSA2AgwLIAFBbCAFQQhqEAobIQILCwsgBUEgaiQAIAILkgIBBH8jAEFAaiIJJAAgCSADQTQQCyEDAkAgBEECSA0AIAMgBEECdGooAgAhCSADQTxqIAgQIyADQQE6AD8gAyACOgA+QQAhBCADKAI8IQoDQCAEIAlGDQEgACAEQQJ0aiAKNgEAIARBAWohBAwAAAsAC0EAIQkDQCAGIAlGRQRAIAMgBSAJQQF0aiIKLQABIgtBAnRqIgwoAgAhBCADQTxqIAotAABBCHQgCGpB//8DcRAjIANBAjoAPyADIAcgC2siCiACajoAPiAEQQEgASAKa3RqIQogAygCPCELA0AgACAEQQJ0aiALNgEAIARBAWoiBCAKSQ0ACyAMIAo2AgAgCUEBaiEJDAELCyADQUBrJAALowIBCX8jAEHQAGsiCSQAIAlBEGogBUE0EAsaIAcgBmshDyAHIAFrIRADQAJAIAMgCkcEQEEBIAEgByACIApBAXRqIgYtAAEiDGsiCGsiC3QhDSAGLQAAIQ4gCUEQaiAMQQJ0aiIMKAIAIQYgCyAPTwRAIAAgBkECdGogCyAIIAUgCEE0bGogCCAQaiIIQQEgCEEBShsiCCACIAQgCEECdGooAgAiCEEBdGogAyAIayAHIA4QYyAGIA1qIQgMAgsgCUEMaiAOECMgCUEBOgAPIAkgCDoADiAGIA1qIQggCSgCDCELA0AgBiAITw0CIAAgBkECdGogCzYBACAGQQFqIQYMAAALAAsgCUHQAGokAA8LIAwgCDYCACAKQQFqIQoMAAALAAs0ACAAIAMgBCAFEDYiBRADBEAgBQ8LIAUgBEkEfyABIAIgAyAFaiAEIAVrIAAQNAVBuH8LCyMAIAA/AEEQdGtB//8DakEQdkAAQX9GBEBBAA8LQQAQAEEBCzsBAX8gAgRAA0AgACABIAJBgCAgAkGAIEkbIgMQCyEAIAFBgCBqIQEgAEGAIGohACACIANrIgINAAsLCwYAIAAQAwsLqBUJAEGICAsNAQAAAAEAAAACAAAAAgBBoAgLswYBAAAAAQAAAAIAAAACAAAAJgAAAIIAAAAhBQAASgAAAGcIAAAmAAAAwAEAAIAAAABJBQAASgAAAL4IAAApAAAALAIAAIAAAABJBQAASgAAAL4IAAAvAAAAygIAAIAAAACKBQAASgAAAIQJAAA1AAAAcwMAAIAAAACdBQAASgAAAKAJAAA9AAAAgQMAAIAAAADrBQAASwAAAD4KAABEAAAAngMAAIAAAABNBgAASwAAAKoKAABLAAAAswMAAIAAAADBBgAATQAAAB8NAABNAAAAUwQAAIAAAAAjCAAAUQAAAKYPAABUAAAAmQQAAIAAAABLCQAAVwAAALESAABYAAAA2gQAAIAAAABvCQAAXQAAACMUAABUAAAARQUAAIAAAABUCgAAagAAAIwUAABqAAAArwUAAIAAAAB2CQAAfAAAAE4QAAB8AAAA0gIAAIAAAABjBwAAkQAAAJAHAACSAAAAAAAAAAEAAAABAAAABQAAAA0AAAAdAAAAPQAAAH0AAAD9AAAA/QEAAP0DAAD9BwAA/Q8AAP0fAAD9PwAA/X8AAP3/AAD9/wEA/f8DAP3/BwD9/w8A/f8fAP3/PwD9/38A/f//AP3//wH9//8D/f//B/3//w/9//8f/f//P/3//38AAAAAAQAAAAIAAAADAAAABAAAAAUAAAAGAAAABwAAAAgAAAAJAAAACgAAAAsAAAAMAAAADQAAAA4AAAAPAAAAEAAAABEAAAASAAAAEwAAABQAAAAVAAAAFgAAABcAAAAYAAAAGQAAABoAAAAbAAAAHAAAAB0AAAAeAAAAHwAAAAMAAAAEAAAABQAAAAYAAAAHAAAACAAAAAkAAAAKAAAACwAAAAwAAAANAAAADgAAAA8AAAAQAAAAEQAAABIAAAATAAAAFAAAABUAAAAWAAAAFwAAABgAAAAZAAAAGgAAABsAAAAcAAAAHQAAAB4AAAAfAAAAIAAAACEAAAAiAAAAIwAAACUAAAAnAAAAKQAAACsAAAAvAAAAMwAAADsAAABDAAAAUwAAAGMAAACDAAAAAwEAAAMCAAADBAAAAwgAAAMQAAADIAAAA0AAAAOAAAADAAEAQeAPC1EBAAAAAQAAAAEAAAABAAAAAgAAAAIAAAADAAAAAwAAAAQAAAAEAAAABQAAAAcAAAAIAAAACQAAAAoAAAALAAAADAAAAA0AAAAOAAAADwAAABAAQcQQC4sBAQAAAAIAAAADAAAABAAAAAUAAAAGAAAABwAAAAgAAAAJAAAACgAAAAsAAAAMAAAADQAAAA4AAAAPAAAAEAAAABIAAAAUAAAAFgAAABgAAAAcAAAAIAAAACgAAAAwAAAAQAAAAIAAAAAAAQAAAAIAAAAEAAAACAAAABAAAAAgAAAAQAAAAIAAAAAAAQBBkBIL5gQBAAAAAQAAAAEAAAABAAAAAgAAAAIAAAADAAAAAwAAAAQAAAAGAAAABwAAAAgAAAAJAAAACgAAAAsAAAAMAAAADQAAAA4AAAAPAAAAEAAAAAEAAAAEAAAACAAAAAAAAAABAAEBBgAAAAAAAAQAAAAAEAAABAAAAAAgAAAFAQAAAAAAAAUDAAAAAAAABQQAAAAAAAAFBgAAAAAAAAUHAAAAAAAABQkAAAAAAAAFCgAAAAAAAAUMAAAAAAAABg4AAAAAAAEFEAAAAAAAAQUUAAAAAAABBRYAAAAAAAIFHAAAAAAAAwUgAAAAAAAEBTAAAAAgAAYFQAAAAAAABwWAAAAAAAAIBgABAAAAAAoGAAQAAAAADAYAEAAAIAAABAAAAAAAAAAEAQAAAAAAAAUCAAAAIAAABQQAAAAAAAAFBQAAACAAAAUHAAAAAAAABQgAAAAgAAAFCgAAAAAAAAULAAAAAAAABg0AAAAgAAEFEAAAAAAAAQUSAAAAIAABBRYAAAAAAAIFGAAAACAAAwUgAAAAAAADBSgAAAAAAAYEQAAAABAABgRAAAAAIAAHBYAAAAAAAAkGAAIAAAAACwYACAAAMAAABAAAAAAQAAAEAQAAACAAAAUCAAAAIAAABQMAAAAgAAAFBQAAACAAAAUGAAAAIAAABQgAAAAgAAAFCQAAACAAAAULAAAAIAAABQwAAAAAAAAGDwAAACAAAQUSAAAAIAABBRQAAAAgAAIFGAAAACAAAgUcAAAAIAADBSgAAAAgAAQFMAAAAAAAEAYAAAEAAAAPBgCAAAAAAA4GAEAAAAAADQYAIABBgBcLhwIBAAEBBQAAAAAAAAUAAAAAAAAGBD0AAAAAAAkF/QEAAAAADwX9fwAAAAAVBf3/HwAAAAMFBQAAAAAABwR9AAAAAAAMBf0PAAAAABIF/f8DAAAAFwX9/38AAAAFBR0AAAAAAAgE/QAAAAAADgX9PwAAAAAUBf3/DwAAAAIFAQAAABAABwR9AAAAAAALBf0HAAAAABEF/f8BAAAAFgX9/z8AAAAEBQ0AAAAQAAgE/QAAAAAADQX9HwAAAAATBf3/BwAAAAEFAQAAABAABgQ9AAAAAAAKBf0DAAAAABAF/f8AAAAAHAX9//8PAAAbBf3//wcAABoF/f//AwAAGQX9//8BAAAYBf3//wBBkBkLhgQBAAEBBgAAAAAAAAYDAAAAAAAABAQAAAAgAAAFBQAAAAAAAAUGAAAAAAAABQgAAAAAAAAFCQAAAAAAAAULAAAAAAAABg0AAAAAAAAGEAAAAAAAAAYTAAAAAAAABhYAAAAAAAAGGQAAAAAAAAYcAAAAAAAABh8AAAAAAAAGIgAAAAAAAQYlAAAAAAABBikAAAAAAAIGLwAAAAAAAwY7AAAAAAAEBlMAAAAAAAcGgwAAAAAACQYDAgAAEAAABAQAAAAAAAAEBQAAACAAAAUGAAAAAAAABQcAAAAgAAAFCQAAAAAAAAUKAAAAAAAABgwAAAAAAAAGDwAAAAAAAAYSAAAAAAAABhUAAAAAAAAGGAAAAAAAAAYbAAAAAAAABh4AAAAAAAAGIQAAAAAAAQYjAAAAAAABBicAAAAAAAIGKwAAAAAAAwYzAAAAAAAEBkMAAAAAAAUGYwAAAAAACAYDAQAAIAAABAQAAAAwAAAEBAAAABAAAAQFAAAAIAAABQcAAAAgAAAFCAAAACAAAAUKAAAAIAAABQsAAAAAAAAGDgAAAAAAAAYRAAAAAAAABhQAAAAAAAAGFwAAAAAAAAYaAAAAAAAABh0AAAAAAAAGIAAAAAAAEAYDAAEAAAAPBgOAAAAAAA4GA0AAAAAADQYDIAAAAAAMBgMQAAAAAAsGAwgAAAAACgYDBABBpB0L2QEBAAAAAwAAAAcAAAAPAAAAHwAAAD8AAAB/AAAA/wAAAP8BAAD/AwAA/wcAAP8PAAD/HwAA/z8AAP9/AAD//wAA//8BAP//AwD//wcA//8PAP//HwD//z8A//9/AP///wD///8B////A////wf///8P////H////z////9/AAAAAAEAAAACAAAABAAAAAAAAAACAAAABAAAAAgAAAAAAAAAAQAAAAIAAAABAAAABAAAAAQAAAAEAAAABAAAAAgAAAAIAAAACAAAAAcAAAAIAAAACQAAAAoAAAALAEGgIAsDwBBQ",nx="display-p3",ix="display-p3-linear",to=new WeakMap;let no=0,io;class an extends wi{constructor(e){super(e),this.transcoderPath="",this.transcoderBinary=null,this.transcoderPending=null,this.workerPool=new qb,this.workerSourceURL="",this.workerConfig=null,typeof MSC_TRANSCODER<"u"&&console.warn('THREE.KTX2Loader: Please update to latest "basis_transcoder". "msc_basis_transcoder" is no longer supported in three.js r125+.')}setTranscoderPath(e){return this.transcoderPath=e,this}setWorkerLimit(e){return this.workerPool.setWorkerLimit(e),this}async detectSupportAsync(e){return this.workerConfig={astcSupported:await e.hasFeatureAsync("texture-compression-astc"),astcHDRSupported:!1,etc1Supported:await e.hasFeatureAsync("texture-compression-etc1"),etc2Supported:await e.hasFeatureAsync("texture-compression-etc2"),dxtSupported:await e.hasFeatureAsync("texture-compression-bc"),bptcSupported:await e.hasFeatureAsync("texture-compression-bptc"),pvrtcSupported:await e.hasFeatureAsync("texture-compression-pvrtc")},this}detectSupport(e){return e.isWebGPURenderer===!0?this.workerConfig={astcSupported:e.hasFeature("texture-compression-astc"),astcHDRSupported:!1,etc1Supported:e.hasFeature("texture-compression-etc1"),etc2Supported:e.hasFeature("texture-compression-etc2"),dxtSupported:e.hasFeature("texture-compression-bc"),bptcSupported:e.hasFeature("texture-compression-bptc"),pvrtcSupported:e.hasFeature("texture-compression-pvrtc")}:this.workerConfig={astcSupported:e.extensions.has("WEBGL_compressed_texture_astc"),astcHDRSupported:e.extensions.has("WEBGL_compressed_texture_astc")&&e.extensions.get("WEBGL_compressed_texture_astc").getSupportedProfiles().includes("hdr"),etc1Supported:e.extensions.has("WEBGL_compressed_texture_etc1"),etc2Supported:e.extensions.has("WEBGL_compressed_texture_etc"),dxtSupported:e.extensions.has("WEBGL_compressed_texture_s3tc"),bptcSupported:e.extensions.has("EXT_texture_compression_bptc"),pvrtcSupported:e.extensions.has("WEBGL_compressed_texture_pvrtc")||e.extensions.has("WEBKIT_WEBGL_compressed_texture_pvrtc")},this}init(){if(!this.transcoderPending){const e=new ks(this.manager);e.setPath(this.transcoderPath),e.setWithCredentials(this.withCredentials);const t=e.loadAsync("basis_transcoder.js"),n=new ks(this.manager);n.setPath(this.transcoderPath),n.setResponseType("arraybuffer"),n.setWithCredentials(this.withCredentials);const i=n.loadAsync("basis_transcoder.wasm");this.transcoderPending=Promise.all([t,i]).then(([r,a])=>{const o=an.BasisWorker.toString(),c=["/* constants */","let _EngineFormat = "+JSON.stringify(an.EngineFormat),"let _EngineType = "+JSON.stringify(an.EngineType),"let _TranscoderFormat = "+JSON.stringify(an.TranscoderFormat),"let _BasisFormat = "+JSON.stringify(an.BasisFormat),"/* basis_transcoder.js */",r,"/* worker */",o.substring(o.indexOf("{")+1,o.lastIndexOf("}"))].join(`
`);this.workerSourceURL=URL.createObjectURL(new Blob([c])),this.transcoderBinary=a,this.workerPool.setWorkerCreator(()=>{const l=new Worker(this.workerSourceURL),h=this.transcoderBinary.slice(0);return l.postMessage({type:"init",config:this.workerConfig,transcoderBinary:h},[h]),l})}),no>0&&console.warn("THREE.KTX2Loader: Multiple active KTX2 loaders may cause performance issues. Use a single KTX2Loader instance, or call .dispose() on old instances."),no++}return this.transcoderPending}load(e,t,n,i){if(this.workerConfig===null)throw new Error("THREE.KTX2Loader: Missing initialization with `.detectSupport( renderer )`.");const r=new ks(this.manager);r.setResponseType("arraybuffer"),r.setWithCredentials(this.withCredentials),r.load(e,a=>{this.parse(a,t,i)},n,i)}parse(e,t,n){if(this.workerConfig===null)throw new Error("THREE.KTX2Loader: Missing initialization with `.detectSupport( renderer )`.");if(to.has(e))return to.get(e).promise.then(t).catch(n);this._createTexture(e).then(i=>t?t(i):null).catch(n)}_createTextureFrom(e,t){const{type:n,error:i,data:{faces:r,width:a,height:o,format:c,type:l,dfdFlags:h}}=e;if(n==="error")return Promise.reject(i);let u;if(t.faceCount===6)u=new S0(r,c,l);else{const f=r[0].mipmaps;u=t.layerCount>1?new w0(f,a,o,t.layerCount,c,l):new ua(f,a,o,c,l)}return u.minFilter=r[0].mipmaps.length===1?Pt:mn,u.magFilter=Pt,u.generateMipmaps=!1,u.needsUpdate=!0,u.colorSpace=Vu(t),u.premultiplyAlpha=!!(h&Yb),u}async _createTexture(e,t={}){const n=ex(new Uint8Array(e)),i=n.vkFormat===Rc&&n.dataFormatDescriptor[0].colorModel===167;if(!(n.vkFormat===Zb||i&&!this.workerConfig.astcHDRSupported))return rx(n);const a=t,o=this.init().then(()=>this.workerPool.postMessage({type:"transcode",buffer:e,taskConfig:a},[e])).then(c=>this._createTextureFrom(c.data,n));return to.set(e,{promise:o}),o}dispose(){return this.workerPool.dispose(),this.workerSourceURL&&URL.revokeObjectURL(this.workerSourceURL),no--,this}}an.BasisFormat={ETC1S:0,UASTC:1,UASTC_HDR:2};an.TranscoderFormat={ETC1:0,ETC2:1,BC1:2,BC3:3,BC4:4,BC5:5,BC7_M6_OPAQUE_ONLY:6,BC7_M5:7,PVRTC1_4_RGB:8,PVRTC1_4_RGBA:9,ASTC_4x4:10,ATC_RGB:11,ATC_RGBA_INTERPOLATED_ALPHA:12,RGBA32:13,RGB565:14,BGR565:15,RGBA4444:16,BC6H:22,RGB_HALF:24,RGBA_HALF:25};an.EngineFormat={RGBAFormat:St,RGBA_ASTC_4x4_Format:Hs,RGB_BPTC_UNSIGNED_Format:Yr,RGBA_BPTC_Format:Ps,RGBA_ETC2_EAC_Format:Xr,RGBA_PVRTC_4BPPV1_Format:Vr,RGBA_S3TC_DXT5_Format:Ls,RGB_ETC1_Format:Wr,RGB_ETC2_Format:qr,RGB_PVRTC_4BPPV1_Format:Hr,RGBA_S3TC_DXT1_Format:Ds};an.EngineType={UnsignedByteType:wt,HalfFloatType:bn,FloatType:Ut};an.BasisWorker=function(){let s,e,t;const n=_EngineFormat,i=_EngineType,r=_TranscoderFormat,a=_BasisFormat;self.addEventListener("message",function(m){const p=m.data;switch(p.type){case"init":s=p.config,o(p.transcoderBinary);break;case"transcode":e.then(()=>{try{const{faces:g,buffers:A,width:b,height:x,hasAlpha:E,format:C,type:_,dfdFlags:v}=c(p.buffer);self.postMessage({type:"transcode",id:p.id,data:{faces:g,width:b,height:x,hasAlpha:E,format:C,type:_,dfdFlags:v}},A)}catch(g){console.error(g),self.postMessage({type:"error",id:p.id,error:g.message})}});break}});function o(m){e=new Promise(p=>{t={wasmBinary:m,onRuntimeInitialized:p},BASIS(t)}).then(()=>{t.initializeBasis(),t.KTX2File===void 0&&console.warn("THREE.KTX2Loader: Please update Basis Universal transcoder.")})}function c(m){const p=new t.KTX2File(new Uint8Array(m));function g(){p.close(),p.delete()}if(!p.isValid())throw g(),new Error("THREE.KTX2Loader:	Invalid or unsupported .ktx2 file");let A;if(p.isUASTC())A=a.UASTC;else if(p.isETC1S())A=a.ETC1S;else if(p.isHDR())A=a.UASTC_HDR;else throw new Error("THREE.KTX2Loader: Unknown Basis encoding");const b=p.getWidth(),x=p.getHeight(),E=p.getLayers()||1,C=p.getLevels(),_=p.getFaces(),v=p.getHasAlpha(),w=p.getDFDFlags(),{transcoderFormat:M,engineFormat:y,engineType:B}=u(A,b,x,v);if(!b||!x||!C)throw g(),new Error("THREE.KTX2Loader:	Invalid texture");if(!p.startTranscoding())throw g(),new Error("THREE.KTX2Loader: .startTranscoding failed");const U=[],L=[];for(let Q=0;Q<_;Q++){const z=[];for(let N=0;N<C;N++){const H=[];let O,j;for(let ie=0;ie<E;ie++){const le=p.getImageLevelInfo(N,ie,Q);Q===0&&N===0&&ie===0&&(le.origWidth%4!==0||le.origHeight%4!==0)&&console.warn("THREE.KTX2Loader: ETC1S and UASTC textures should use multiple-of-four dimensions."),C>1?(O=le.origWidth,j=le.origHeight):(O=le.width,j=le.height);let Te=new Uint8Array(p.getImageTranscodedSizeInBytes(N,ie,0,M));const q=p.transcodeImage(Te,N,ie,Q,M,0,-1,-1);if(B===i.HalfFloatType&&(Te=new Uint16Array(Te.buffer,Te.byteOffset,Te.byteLength/Uint16Array.BYTES_PER_ELEMENT)),!q)throw g(),new Error("THREE.KTX2Loader: .transcodeImage failed.");H.push(Te)}const Z=d(H);z.push({data:Z,width:O,height:j}),L.push(Z.buffer)}U.push({mipmaps:z,width:b,height:x,format:y,type:B})}return g(),{faces:U,buffers:L,width:b,height:x,hasAlpha:v,dfdFlags:w,format:y,type:B}}const l=[{if:"astcSupported",basisFormat:[a.UASTC],transcoderFormat:[r.ASTC_4x4,r.ASTC_4x4],engineFormat:[n.RGBA_ASTC_4x4_Format,n.RGBA_ASTC_4x4_Format],engineType:[i.UnsignedByteType],priorityETC1S:1/0,priorityUASTC:1,needsPowerOfTwo:!1},{if:"bptcSupported",basisFormat:[a.ETC1S,a.UASTC],transcoderFormat:[r.BC7_M5,r.BC7_M5],engineFormat:[n.RGBA_BPTC_Format,n.RGBA_BPTC_Format],engineType:[i.UnsignedByteType],priorityETC1S:3,priorityUASTC:2,needsPowerOfTwo:!1},{if:"dxtSupported",basisFormat:[a.ETC1S,a.UASTC],transcoderFormat:[r.BC1,r.BC3],engineFormat:[n.RGBA_S3TC_DXT1_Format,n.RGBA_S3TC_DXT5_Format],engineType:[i.UnsignedByteType],priorityETC1S:4,priorityUASTC:5,needsPowerOfTwo:!1},{if:"etc2Supported",basisFormat:[a.ETC1S,a.UASTC],transcoderFormat:[r.ETC1,r.ETC2],engineFormat:[n.RGB_ETC2_Format,n.RGBA_ETC2_EAC_Format],engineType:[i.UnsignedByteType],priorityETC1S:1,priorityUASTC:3,needsPowerOfTwo:!1},{if:"etc1Supported",basisFormat:[a.ETC1S,a.UASTC],transcoderFormat:[r.ETC1],engineFormat:[n.RGB_ETC1_Format],engineType:[i.UnsignedByteType],priorityETC1S:2,priorityUASTC:4,needsPowerOfTwo:!1},{if:"pvrtcSupported",basisFormat:[a.ETC1S,a.UASTC],transcoderFormat:[r.PVRTC1_4_RGB,r.PVRTC1_4_RGBA],engineFormat:[n.RGB_PVRTC_4BPPV1_Format,n.RGBA_PVRTC_4BPPV1_Format],engineType:[i.UnsignedByteType],priorityETC1S:5,priorityUASTC:6,needsPowerOfTwo:!0},{if:"bptcSupported",basisFormat:[a.UASTC_HDR],transcoderFormat:[r.BC6H],engineFormat:[n.RGB_BPTC_UNSIGNED_Format],engineType:[i.HalfFloatType],priorityHDR:1,needsPowerOfTwo:!1},{basisFormat:[a.ETC1S,a.UASTC],transcoderFormat:[r.RGBA32,r.RGBA32],engineFormat:[n.RGBAFormat,n.RGBAFormat],engineType:[i.UnsignedByteType,i.UnsignedByteType],priorityETC1S:100,priorityUASTC:100,needsPowerOfTwo:!1},{basisFormat:[a.UASTC_HDR],transcoderFormat:[r.RGBA_HALF],engineFormat:[n.RGBAFormat],engineType:[i.HalfFloatType],priorityHDR:100,needsPowerOfTwo:!1}],h={[a.ETC1S]:l.filter(m=>m.basisFormat.includes(a.ETC1S)).sort((m,p)=>m.priorityUASTC-p.priorityUASTC),[a.UASTC]:l.filter(m=>m.basisFormat.includes(a.UASTC)).sort((m,p)=>m.priorityUASTC-p.priorityUASTC),[a.UASTC_HDR]:l.filter(m=>m.basisFormat.includes(a.UASTC_HDR)).sort((m,p)=>m.priorityHDR-p.priorityHDR)};function u(m,p,g,A){const b=h[m];for(let x=0;x<b.length;x++){const E=b[x];if(E.if&&!s[E.if]||!E.basisFormat.includes(m)||A&&E.transcoderFormat.length<2||E.needsPowerOfTwo&&!(f(p)&&f(g)))continue;const C=E.transcoderFormat[A?1:0],_=E.engineFormat[A?1:0],v=E.engineType[0];return{transcoderFormat:C,engineFormat:_,engineType:v}}throw new Error("THREE.KTX2Loader: Failed to identify transcoding target.")}function f(m){return m<=2?!0:(m&m-1)===0&&m!==0}function d(m){if(m.length===1)return m[0];let p=0;for(let b=0;b<m.length;b++){const x=m[b];p+=x.byteLength}const g=new Uint8Array(p);let A=0;for(let b=0;b<m.length;b++){const x=m[b];g.set(x,A),A+=x.byteLength}return g}};const sx=new Set([St,Ei,ti]),so={[Gu]:St,[Qu]:St,[Pu]:St,[Uu]:St,[Ou]:Ei,[Nu]:Ei,[Du]:Ei,[Lu]:Ei,[ku]:ti,[Fu]:ti,[Ru]:ti,[Tu]:ti,[Rc]:Hs,[Hu]:Vs,[zu]:Vs},ro={[Gu]:Ut,[Qu]:bn,[Pu]:wt,[Uu]:wt,[Ou]:Ut,[Nu]:bn,[Du]:wt,[Lu]:wt,[ku]:Ut,[Fu]:bn,[Ru]:wt,[Tu]:wt,[Rc]:bn,[Hu]:wt,[zu]:wt};async function rx(s){const{vkFormat:e}=s;if(so[e]===void 0)throw new Error("THREE.KTX2Loader: Unsupported vkFormat.");let t;s.supercompressionScheme===dh&&(io||(io=new Promise(async r=>{const a=new tx;await a.init(),r(a)})),t=await io);const n=[];for(let r=0;r<s.levels.length;r++){const a=Math.max(1,s.pixelWidth>>r),o=Math.max(1,s.pixelHeight>>r),c=s.pixelDepth?Math.max(1,s.pixelDepth>>r):0,l=s.levels[r];let h;if(s.supercompressionScheme===Xb)h=l.levelData;else if(s.supercompressionScheme===dh)h=t.decode(l.levelData,l.uncompressedByteLength);else throw new Error("THREE.KTX2Loader: Unsupported supercompressionScheme.");let u;ro[e]===Ut?u=new Float32Array(h.buffer,h.byteOffset,h.byteLength/Float32Array.BYTES_PER_ELEMENT):ro[e]===bn?u=new Uint16Array(h.buffer,h.byteOffset,h.byteLength/Uint16Array.BYTES_PER_ELEMENT):u=h,n.push({data:u,width:a,height:o,depth:c})}let i;if(sx.has(so[e]))i=s.pixelDepth===0?new la(n[0].data,s.pixelWidth,s.pixelHeight):new Jh(n[0].data,s.pixelWidth,s.pixelHeight,s.pixelDepth);else{if(s.pixelDepth>0)throw new Error("THREE.KTX2Loader: Unsupported pixelDepth.");i=new ua(n,s.pixelWidth,s.pixelHeight)}return i.mipmaps=n,i.type=ro[e],i.format=so[e],i.colorSpace=Vu(s),i.needsUpdate=!0,Promise.resolve(i)}function Vu(s){const e=s.dataFormatDescriptor[0];return e.colorPrimaries===Kb?e.transferFunction===Ah?mt:Nt:e.colorPrimaries===Jb?e.transferFunction===Ah?nx:ix:(e.colorPrimaries===jb||console.warn(`THREE.KTX2Loader: Unsupported color primaries, "${e.colorPrimaries}"`),An)}function ax(s){return new Worker(""+new URL("buildings.worker-CF2FYDTT.js",import.meta.url).href,{type:"module",name:s?.name})}const Wu=new dc(new Uint8Array([128,128,128,255]),1,1,1);Wu.needsUpdate=!0;const mh=[0,.55,0,.45,.4,.55,.3,.15,.35,.1,.45],_i={uNight:{value:0},uWet:{value:0},uTex:{value:0},tArr:{value:Wu},uMean:{value:mh.map(()=>new R(.5,.5,.5))},uHue:{value:mh}};async function ox(s,e,t){try{const n=await(await fetch(`${s}tex/tex.json`)).json(),i=new an().setTranscoderPath(`${s}basis/`).detectSupport(e),r=await i.loadAsync(`${s}tex/walls_${t?512:1024}.ktx2`);return r.wrapS=r.wrapT=ai,r.anisotropy=t?2:4,r.colorSpace=mt,r.needsUpdate=!0,i.dispose(),_i.uMean.value=n.means.map(a=>new R(a[0],a[1],a[2])),_i.tArr.value=r,_i.uTex.value=1,!0}catch(n){return console.warn("cephe dokuları yüklenemedi, düz renk kullanılıyor",n),!1}}const cx=`
float h1(float n){ return fract(sin(n) * 43758.5453); }
float lumi(vec3 c){ return dot(c, vec3(0.2126, 0.7152, 0.0722)); }
float boxm(float x, float a, float b, float e){ return smoothstep(a - e, a + e, x) - smoothstep(b - e, b + e, x); }
vec3 gEmis = vec3(0.0);
vec3 facade(vec3 tint){
  float L = floor(vWf.x + 0.5);
  if (L < -0.5) return tint;                                             // süs parçaları (balkon, saçak, tente): dokusuz
  int li = int(L);
  float kind = floor(vWb.z + 0.5);
  float sc = kind < 0.5 ? (li >= 6 ? 3.6 : 4.0) : 3.6;                   // doku tekrarı (metre)
  vec3 col = tint;
  if (uTex > 0.5) {
    vec3 tx = texture(tArr, vec3(vUv2 / sc, L)).rgb;
    vec3 m = uMean[li]; float ml = max(lumi(m), 1e-3);
    col = mix(tint * mix(1.0, lumi(tx) / ml, 0.7), tx * (lumi(tint) / ml), uHue[li]);
    if (kind < 0.5 && li >= 6 && li <= 7) {                              // kiremit çatılar: sıra çizgileri uzaktan da okunur
      float pr = length(fwidth(vUv2));
      col = mix(tint * max(0.0, mix(1.0, lumi(tx) / ml, 1.3)), tx * (lumi(tint) / ml), uHue[li] * 0.6);
      float rows = fract(vUv2.y / 0.36);
      col *= 1.0 - 0.22 * smoothstep(0.72, 0.98, rows) * (1.0 - smoothstep(0.06, 0.25, pr));
    }
  }
  if (kind < 0.5 || kind > 1.5) {
    if (kind > 1.5) col *= 0.82 + 0.18 * smoothstep(0.0, 2.0, vUv2.y);    // düz duvar: dipte hafif gölge
    return col;
  }
  // ---- pencereler: ~3,2 m katlar, ~3 m gözler, her duvar kenarına ortalanmış ----
  float seed = floor(vWf.y * 10.0 + 0.5) / 10.0, u = vUv2.x, v = vUv2.y, wh = vWb.x, el = vWb.y, st = vWb.w;
  bool bal = mod(st, 2.0) >= 1.0, shop = mod(floor(st / 4.0), 2.0) >= 1.0, res = st >= 8.0;
  float fh = 3.2 * (0.95 + 0.1 * h1(seed * 17.0));
  float bw0 = (res ? 2.8 : 3.0) * (0.9 + 0.2 * h1(seed * 29.0));
  float nb = max(1.0, floor(el / bw0 + 0.3)), bw = el / nb;
  float px = max(length(vec2(dFdx(u), dFdy(u))), length(vec2(dFdx(v), dFdy(v)))); // piksel başına metre
  float ex = px / bw * 0.75, ey = px / fh * 0.75;
  float f = floor(v / fh), fy = fract(v / fh), bx = fract(u / bw), bi = floor(u / bw);
  float ww = res ? (h1(seed * 43.0) < 0.4 ? 0.58 + 0.08 * h1(seed * 41.0) : 0.40 + 0.06 * h1(seed * 41.0)) : 0.36 + 0.16 * h1(seed * 41.0);
  float wy0 = 0.26, wy1 = res ? 0.86 : 0.74 + 0.1 * h1(seed * 53.0);
  float wfrac = ww * (wy1 - wy0);
  vec3 avg = col * (1.0 - 0.55 * wfrac - (bal ? 0.12 : 0.0));
  float fade = smoothstep(0.38, 1.1, px);
  col *= 0.84 + 0.16 * smoothstep(0.0, 2.0, v);                          // dipte hafif gölge
  if (wh < 4.0 || bw < 1.6) return col;
  vec3 c = col;
  bool under = (f + 1.0) * fh < wh - 0.35;                               // kat saçağın altına sığıyor
  if (f >= 1.0 && under) {
    if (fy < 0.05) c *= 0.80;                                            // kat silmesi
    else if (fy < 0.09) c = mix(c, vec3(0.80, 0.78, 0.74), 0.35);
    float fw = res ? 0.07 : 0.05;
    float frame = boxm(bx, 0.5 - ww / 2.0 - fw, 0.5 + ww / 2.0 + fw, ex) * boxm(fy, wy0 - fw, wy1 + fw * 0.7, ey);
    float glass = boxm(bx, 0.5 - ww / 2.0, 0.5 + ww / 2.0, ex) * boxm(fy, wy0, wy1, ey);
    float sill = boxm(bx, 0.5 - ww / 2.0 - 0.09, 0.5 + ww / 2.0 + 0.09, ex) * boxm(fy, wy0 - 0.075, wy0 - 0.03, ey);
    float k = h1(bi * 7.1 + f * 3.7 + seed);
    vec3 gl = mix(vec3(0.045, 0.055, 0.07), vec3(0.16, 0.18, 0.22), smoothstep(wy0, wy1, fy) * 0.7) * (0.75 + 0.5 * k);
    c = mix(c, res ? vec3(0.86, 0.86, 0.84) : vec3(0.78, 0.76, 0.72), max(frame - glass, sill) * 0.85);
    c = mix(c, gl, glass);
    float mullion = boxm(bx, 0.5 - 0.012, 0.5 + 0.012, ex) * glass * (1.0 - smoothstep(0.02, 0.06, px));
    c = mix(c, vec3(0.8, 0.79, 0.76), mullion * 0.8);                    // orta kayıt (yalnız yakında)
    if (uNight > 0.01 && k < 0.3) gEmis += vec3(1.0, 0.55, 0.22) * 0.9 * glass * uNight * (1.0 - fade * 0.6);
    if (res && h1(bi * 5.3 + f * 1.9 + seed * 3.0) < 0.12) {             // bazı pencerelerde çizgili güneşlik
      float aw = boxm(bx, 0.5 - ww / 2.0 - 0.06, 0.5 + ww / 2.0 + 0.06, ex) * boxm(fy, wy1 - 0.2, wy1 + 0.04, ey);
      float stp = step(0.5, fract(u * 2.5));
      c = mix(c, mix(vec3(0.75, 0.73, 0.68), vec3(0.42, 0.40, 0.36), stp), aw);
    }
    if (bal && (h1(seed * 71.0) < 0.5 || mod(bi, 2.0) == 0.0)) {         // balkon (uzakta): koyu korkuluk bandı + döşeme kenarı
      float bwid = res ? 0.86 : 0.7;
      float rail = boxm(bx, 0.5 - bwid / 2.0, 0.5 + bwid / 2.0, ex) * boxm(fy, 0.07, 0.36, ey);
      c = mix(c, vec3(0.035, 0.035, 0.04), rail * 0.85);
      c = mix(c, vec3(0.70, 0.69, 0.66), boxm(bx, 0.5 - bwid / 2.0 - 0.02, 0.5 + bwid / 2.0 + 0.02, ex) * boxm(fy, 0.0, 0.07, ey) * 0.7);
    }
  } else if (f < 1.0 && wh >= 6.0) {                                      // zemin kat: vitrin ya da kapılı koyu kaide
    if (shop) {
      c *= 0.62;
      float g = boxm(bx, 0.07, 0.93, ex) * boxm(fy, 0.04, 0.70, ey);
      c = mix(c, vec3(0.05, 0.06, 0.07) * (0.8 + 0.6 * h1(bi + seed)), g);
      gEmis += vec3(1.0, 0.62, 0.3) * 0.7 * g * uNight;
      vec3 sign = mix(vec3(0.12, 0.10, 0.09), vec3(0.45, 0.20, 0.12), h1(seed * 83.0 + bi));
      c = mix(c, sign, boxm(bx, 0.04, 0.96, ex) * boxm(fy, 0.75, 0.88, ey));
    } else {
      c *= 0.88;
      bool door = h1(bi * 3.3 + seed * 5.0) < 0.3;
      float g = door ? boxm(bx, 0.36, 0.64, ex) * boxm(fy, 0.0, 0.70, ey) : boxm(bx, 0.5 - ww / 2.0, 0.5 + ww / 2.0, ex) * boxm(fy, 0.32, 0.70, ey);
      c = mix(c, door ? vec3(0.09, 0.06, 0.045) : vec3(0.06, 0.07, 0.09), g);
    }
  }
  if (wh >= 5.0) {                                                        // saçak: açık bant, altında gölge çizgisi
    c = mix(c, col * 1.12, boxm(v, wh - 0.5, wh + 2.0, px * 0.75));
    c = mix(c, col * 0.62, boxm(v, wh - 0.68, wh - 0.5, px * 0.75));
  }
  if (fade > 0.0) gEmis += vec3(1.0, 0.55, 0.22) * 0.25 * wfrac * uNight * fade; // uzakta: ortalama yumuşak ışıltı
  return mix(c, avg, fade);
}`;function lx(){const s=new Yt({vertexColors:!0});return s.onBeforeCompile=e=>{Object.assign(e.uniforms,_i),e.vertexShader=`attribute vec4 wa;
attribute vec4 wb;
varying vec2 vUv2;
flat out vec2 vWf;
flat out vec4 vWb;
`+e.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
vUv2 = wa.xy; vWf = wa.zw; vWb = wb;`),e.fragmentShader=`precision highp sampler2DArray;
uniform sampler2DArray tArr;
uniform vec3 uMean[11];
uniform float uHue[11];
uniform float uNight;
uniform float uWet;
uniform float uTex;
varying vec2 vUv2;
flat in vec2 vWf;
flat in vec4 vWb;
`+cx+`
`+e.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
diffuseColor.rgb = facade(diffuseColor.rgb) * (1.0 - uWet * 0.2);`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
totalEmissiveRadiance += gEmis;`)},s}class hx{constructor(e,t,n,i){this.CH=i,this.group=new Bt,this.mat=lx(),this.slots=new Map,this.reqId=0,this.inflight=0,this.colliders=new Map,this.onCollidersChanged=null,this.chunks=t.map((r,a)=>({ci:a,cx:(r[0]+.5)*i,cz:(r[1]+.5)*i})),this.w=new ax,this.w.postMessage({type:"init",buf:e,index:t,look:n}),this.w.onmessage=r=>this.done(r.data),this.group.name="buildings"}done(e){this.inflight--;const t=this.slots.get(e.chunk);if(!t||t.pending!==e.id)return;t.pending=void 0,t.mesh&&(this.group.remove(t.mesh),t.mesh.geometry.dispose());const n=new ht;n.setAttribute("position",new Ke(e.pos,3)),n.setAttribute("normal",new Ke(e.nor,3)),n.setAttribute("color",new Ke(e.col,3)),n.setAttribute("wa",new Ke(e.wa,4)),n.setAttribute("wb",new Ke(e.wb,4)),n.computeBoundingSphere();const i=new qe(n,this.mat);i.matrixAutoUpdate=!1,i.castShadow=e.lod<2,i.receiveShadow=!0,this.group.add(i),t.mesh=i,t.lod=e.lod,e.lod<2&&(this.colliders.set(e.chunk,e.seg),this.onCollidersChanged?.())}update(e,t,n,i,r=0){const a=[];for(const c of this.chunks){const l=Math.max(0,Math.hypot(c.cx-e,c.cz-t)-this.CH*.71);l<i&&a.push([c.ci,l<r?0:l<n?1:2,l])}const o=new Set(a.map(c=>c[0]));for(const[c,l]of this.slots)o.has(c)||(l.mesh&&(this.group.remove(l.mesh),l.mesh.geometry.dispose()),this.slots.delete(c),this.colliders.delete(c)&&this.onCollidersChanged?.());a.sort((c,l)=>c[2]-l[2]);for(const[c,l]of a){if(this.inflight>=3)break;let h=this.slots.get(c);h&&(h.pending!==void 0?h.lod===l:h.lod===l&&h.mesh)||(h||(h={lod:l},this.slots.set(c,h)),h.lod=l,h.pending=++this.reqId,this.inflight++,l===2&&this.colliders.delete(c)&&this.onCollidersChanged?.(),this.w.postMessage({type:"build",id:h.pending,chunk:c,lod:l}))}}get busy(){return this.inflight>0}}function Kt(s,e=!1){const t=s[0].index!==null,n=new Set(Object.keys(s[0].attributes)),i=new Set(Object.keys(s[0].morphAttributes)),r={},a={},o=s[0].morphTargetsRelative,c=new ht;let l=0;for(let h=0;h<s.length;++h){const u=s[h];let f=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const d in u.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(u.attributes[d]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const d in u.morphAttributes){if(!i.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[d]===void 0&&(a[d]=[]),a[d].push(u.morphAttributes[d])}if(e){let d;if(t)d=u.index.count;else if(u.attributes.position!==void 0)d=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,d,h),l+=d}}if(t){let h=0;const u=[];for(let f=0;f<s.length;++f){const d=s[f].index;for(let m=0;m<d.count;++m)u.push(d.getX(m)+h);h+=s[f].attributes.position.count}c.setIndex(u)}for(const h in r){const u=bh(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,u)}for(const h in a){const u=a[h][0].length;if(u===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let f=0;f<u;++f){const d=[];for(let p=0;p<a[h].length;++p)d.push(a[h][p][f]);const m=bh(d);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(m)}}return c}function bh(s){let e,t,n,i=-1,r=0;for(let l=0;l<s.length;++l){const h=s[l];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=h.gpuType),i!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}const a=new e(r),o=new Ke(a,t,n);let c=0;for(let l=0;l<s.length;++l){const h=s[l];if(h.isInterleavedBufferAttribute){const u=c/t;for(let f=0,d=h.count;f<d;f++)for(let m=0;m<t;m++){const p=h.getComponent(f,m);o.setComponent(f+u,m,p)}}else a.set(h.array,c);c+=h.count*t}return i!==void 0&&(o.gpuType=i),o}function xh(s,e){if(e===Uf)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===Wo||e===Xh){let t=s.getIndex();if(t===null){const a=[],o=s.getAttribute("position");if(o!==void 0){for(let c=0;c<o.count;c++)a.push(c);s.setIndex(a),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}const n=t.count-2,i=[];if(e===Wo)for(let a=1;a<=n;a++)i.push(t.getX(0)),i.push(t.getX(a)),i.push(t.getX(a+1));else for(let a=0;a<n;a++)a%2===0?(i.push(t.getX(a)),i.push(t.getX(a+1)),i.push(t.getX(a+2))):(i.push(t.getX(a+2)),i.push(t.getX(a+1)),i.push(t.getX(a)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=s.clone();return r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}function ea(s,e){s=s.toNonIndexed();const t=new te(e),n=s.attributes.position.count,i=new Float32Array(n*3);for(let r=0;r<n;r++)i[r*3]=t.r,i[r*3+1]=t.g,i[r*3+2]=t.b;return s.setAttribute("color",new Ke(i,3)),s}const Eh=["#7d9a3c","#6c8c36","#8aa53e","#5d8733","#9aa33e","#b9a23a","#c98e30","#b5672c","#86a046","#6f9440","#a8b04a","#c7742b"].map(s=>new te(s)),qu={uNight:{value:0}};function Xu(s=!0){const e=document.createElement("canvas");e.width=e.height=64;const t=e.getContext("2d"),n=t.createRadialGradient(32,32,0,32,32,32),i=s?"255,190,110":"255,245,220";n.addColorStop(0,`rgba(${i},1)`),n.addColorStop(.45,`rgba(${i},0.45)`),n.addColorStop(1,`rgba(${i},0)`),t.fillStyle=n,t.fillRect(0,0,64,64);const r=new $s(e);return r.colorSpace=mt,r}function _h(s){const e=[],t=(r,a,o)=>{const c=Math.sin(r*12.9898+a*78.233+o*37.719)*43758.5453;return c-Math.floor(c)},n=s?[[0,5.3,0,2.5],[1.5,4.7,.6,1.8],[-1.3,4.9,-.7,1.9],[.2,6.6,-.4,1.9],[-.4,4.6,1.5,1.6]]:[[0,5.2,0,2.8],[.9,6.3,.3,1.9]];for(const[r,a,o,c]of n){const l=new Ic(c,s?1:0).toNonIndexed();l.deleteAttribute("uv");const h=l.attributes.position,u=l.attributes.normal,f=new Float32Array(h.count*3);for(let d=0;d<h.count;d++){let m=h.getX(d),p=h.getY(d)*.9,g=h.getZ(d);const A=1+(t(Math.round(m*20),Math.round(p*20),Math.round(g*20))-.5)*(s?.3:.16);m*=A,p*=A,g*=A,h.setXYZ(d,m+r,p+a,g+o);const b=Math.hypot(m,p,g)||1,x=m+r,E=p+a-5.2,C=g+o,_=Math.hypot(x,E,C)||1,v=m/b*.55+x/_*.45,w=p/b*.55+E/_*.45,M=g/b*.55+C/_*.45,y=Math.hypot(v,w,M)||1;u.setXYZ(d,v/y,w/y,M/y);const B=.55+.45*Math.min(1,Math.max(0,(p+a-3.2)/4.2))+(t(d,r,c)-.5)*.1;f[d*3]=f[d*3+1]=f[d*3+2]=B}l.setAttribute("color",new Ke(f,3)),e.push(l)}const i=r=>{const a=ea(r,"#3a2d25");return a.deleteAttribute("uv"),a};return e.push(i(new jt(.16,.3,3.6,s?7:5).translate(0,1.8,0))),s&&(e.push(i(new jt(.07,.13,2.2,5).translate(0,1.1,0).rotateZ(-.7).translate(.1,2.9,0))),e.push(i(new jt(.07,.12,2,5).translate(0,1,0).rotateZ(.75).rotateY(1.9).translate(-.1,3.1,0)))),Kt(e)}function ux(){const s=[[.02,1],[.6,1.7],[.85,3.6],[.74,6.2],[.42,8.4],[.02,9.8]].map(([a,o])=>new oe(a,o)),e=new fa(s,8).toNonIndexed();e.deleteAttribute("uv");const t=e.attributes.position,n=new Float32Array(t.count*3),i=new te("#33502f");for(let a=0;a<t.count;a++){const o=.7+.45*(t.getY(a)/9.8);n[a*3]=i.r*o,n[a*3+1]=i.g*o,n[a*3+2]=i.b*o}e.setAttribute("color",new Ke(n,3));const r=ea(new jt(.12,.18,1.3,5).translate(0,.65,0),"#4a3a2e");return r.deleteAttribute("uv"),Kt([e,r])}class fx{constructor(e,t,n,i,r){this.lamps=t,this.G=n,this.maxTrees=i,this.maxLamps=r,this.group=new Bt,this.nearCap=260,this.last=new oe(1e9,1e9);const a=new DataView(e);this.nTrees=e.byteLength/10,this.trees=new Float32Array(this.nTrees*4);for(let u=0;u<this.nTrees;u++)this.trees[u*4]=a.getFloat32(u*10,!0),this.trees[u*4+1]=a.getFloat32(u*10+4,!0),this.trees[u*4+2]=a.getUint8(u*10+8)/100,this.trees[u*4+3]=a.getUint8(u*10+9);const o=new Yt({vertexColors:!0});this.treeMesh=new _t(_h(0),o,i),this.treeNear=new _t(_h(1),o,this.nearCap),this.pineMesh=new _t(ux(),o,Math.ceil(i/3));const c=ea(new jt(.07,.1,7,5).translate(0,3.5,0),"#3b3d40"),l=ea(new yt(1.4,.08,.08).translate(.7,7,0),"#3b3d40");this.lampMesh=new _t(Kt([c,l]),o,r);const h=new Yt({color:"#d8d4c8",emissive:"#ffcf86",emissiveIntensity:0});h.onBeforeCompile=u=>{u.uniforms.uNight=qu.uNight,u.fragmentShader=u.fragmentShader.replace("#include <common>",`#include <common>
uniform float uNight;`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
totalEmissiveRadiance = vec3(1.0, 0.82, 0.55) * uNight * 2.2;`)},this.bulbMesh=new _t(new yt(.5,.15,.3).translate(1.3,6.9,0),h,r),this.poolMat=new Tt({map:Xu(),transparent:!0,blending:Gr,depthWrite:!1,opacity:0,polygonOffset:!0,polygonOffsetFactor:-4,polygonOffsetUnits:-12,fog:!0}),this.poolMesh=new _t(new Vn(16,16).rotateX(-Math.PI/2),this.poolMat,r),this.poolMesh.renderOrder=4,this.group.add(this.poolMesh),this.poolMesh.count=0,this.poolMesh.frustumCulled=!1;for(const u of[this.treeMesh,this.treeNear,this.pineMesh,this.lampMesh,this.bulbMesh])u.count=0,u.castShadow=u!==this.bulbMesh,u.frustumCulled=!1,this.group.add(u)}night(e){this.poolMat.opacity=e*.55,this.poolMesh.visible=e>.05}update(e,t,n,i){if(this.last.distanceTo(new oe(e,t))<60)return;this.last.set(e,t);const r=new Ne,a=new Jt,o=new R,c=new R,l=new R(0,1,0);let h=0,u=0,f=0;const d=this.trees,m=22500,p=n*n,g=[];for(let E=0;E<this.nTrees;E++){if(d[E*4+3]%3===2)continue;const C=d[E*4]-e,_=d[E*4+1]-t,v=C*C+_*_;v<m&&g.push(v)}g.sort((E,C)=>E-C);const A=g.length>this.nearCap?g[this.nearCap-1]:m;for(let E=0;E<this.nTrees;E++){const C=d[E*4],_=d[E*4+1],v=C-e,w=_-t;if(v*v+w*w>p)continue;const M=Math.max(.6,Math.min(1.6,d[E*4+2]||1)),y=d[E*4+3]%3===2;a.setFromAxisAngle(l,E*2.399%6.283),o.setScalar(M),c.set(C,this.G.H(C,_)-.2,_),r.compose(c,a,o);const B=Eh[(E*7+(E>>3))%Eh.length];y?u<this.pineMesh.instanceMatrix.count&&this.pineMesh.setMatrixAt(u++,r):v*v+w*w<=A&&f<this.nearCap?(this.treeNear.setColorAt(f,B),this.treeNear.setMatrixAt(f++,r)):h<this.treeMesh.instanceMatrix.count&&(this.treeMesh.setColorAt(h,B),this.treeMesh.setMatrixAt(h++,r))}this.treeMesh.count=h,this.pineMesh.count=u,this.treeNear.count=f,this.treeNear.instanceMatrix.needsUpdate=!0,this.treeNear.instanceColor&&(this.treeNear.instanceColor.needsUpdate=!0);let b=0;const x=i*i;for(const E of this.lamps){const C=E[0]-e,_=E[1]-t;if(C*C+_*_>x||b>=this.maxLamps)continue;a.setFromAxisAngle(l,E[2]??0),o.setScalar(1),c.set(E[0],this.G.H(E[0],E[1])-.1,E[1]),r.compose(c,a,o),this.lampMesh.setMatrixAt(b,r),this.bulbMesh.setMatrixAt(b,r);const v=E[0]+Math.cos(E[2]??0)*1.6,w=E[1]-Math.sin(E[2]??0)*1.6;c.set(v,this.G.H(v,w)+.25,w),r.compose(c,a,o),this.poolMesh.setMatrixAt(b,r),b++}this.lampMesh.count=this.bulbMesh.count=this.poolMesh.count=b,this.poolMesh.instanceMatrix.needsUpdate=!0;for(const E of[this.treeMesh,this.pineMesh,this.lampMesh,this.bulbMesh])E.instanceMatrix.needsUpdate=!0;this.treeMesh.instanceColor&&(this.treeMesh.instanceColor.needsUpdate=!0)}}class dx extends wi{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new bx(t)}),this.register(function(t){return new xx(t)}),this.register(function(t){return new Sx(t)}),this.register(function(t){return new Bx(t)}),this.register(function(t){return new Tx(t)}),this.register(function(t){return new _x(t)}),this.register(function(t){return new vx(t)}),this.register(function(t){return new yx(t)}),this.register(function(t){return new Mx(t)}),this.register(function(t){return new mx(t)}),this.register(function(t){return new Cx(t)}),this.register(function(t){return new Ex(t)}),this.register(function(t){return new wx(t)}),this.register(function(t){return new Ix(t)}),this.register(function(t){return new px(t)}),this.register(function(t){return new Rx(t)}),this.register(function(t){return new Dx(t)})}load(e,t,n,i){const r=this;let a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){const l=Os.extractUrlBase(e);a=Os.resolveURL(l,this.path)}else a=Os.extractUrlBase(e);this.manager.itemStart(e);const o=function(l){i?i(l):console.error(l),r.manager.itemError(e),r.manager.itemEnd(e)},c=new ks(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{r.parse(l,a,function(h){t(h),r.manager.itemEnd(e)},o)}catch(h){o(h)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r;const a={},o={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===Yu){try{a[Ye.KHR_BINARY_GLTF]=new Lx(e)}catch(u){i&&i(u);return}r=JSON.parse(a[Ye.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const l=new qx(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const u=this.pluginCallbacks[h](l);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[u.name]=u,a[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){const u=r.extensionsUsed[h],f=r.extensionsRequired||[];switch(u){case Ye.KHR_MATERIALS_UNLIT:a[u]=new gx;break;case Ye.KHR_DRACO_MESH_COMPRESSION:a[u]=new Px(r,this.dracoLoader);break;case Ye.KHR_TEXTURE_TRANSFORM:a[u]=new Ux;break;case Ye.KHR_MESH_QUANTIZATION:a[u]=new Fx;break;default:f.indexOf(u)>=0&&o[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}l.setExtensions(a),l.setPlugins(o),l.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}}function Ax(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}const Ye={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class px{constructor(e){this.parser=e,this.name=Ye.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let l;const h=new te(16777215);c.color!==void 0&&h.setRGB(c.color[0],c.color[1],c.color[2],Nt);const u=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new Cu(h),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new Mu(h),l.distance=u;break;case"spot":l=new yu(h),l.distance=u,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),l.decay=2,kn(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),i=Promise.resolve(l),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(c){return n._getNodeRef(t.cache,o,c)})}}class gx{constructor(){this.name=Ye.KHR_MATERIALS_UNLIT}getMaterialType(){return Tt}extendParams(e,t,n){const i=[];e.color=new te(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const a=r.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],Nt),e.opacity=a[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,mt))}return Promise.all(i)}}class mx{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class bx{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:wn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];if(a.clearcoatFactor!==void 0&&(t.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){const o=a.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new oe(o,o)}return Promise.all(r)}}class xx{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:wn}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}}class Ex{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:wn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];return a.iridescenceFactor!==void 0&&(t.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(t.iridescenceIOR=a.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(r)}}class _x{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:wn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new te(0,0,0),t.sheenRoughness=0,t.sheen=1;const a=i.extensions[this.name];if(a.sheenColorFactor!==void 0){const o=a.sheenColorFactor;t.sheenColor.setRGB(o[0],o[1],o[2],Nt)}return a.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",a.sheenColorTexture,mt)),a.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(r)}}class vx{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:wn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];return a.transmissionFactor!==void 0&&(t.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",a.transmissionTexture)),Promise.all(r)}}class yx{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:wn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];t.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",a.thicknessTexture)),t.attenuationDistance=a.attenuationDistance||1/0;const o=a.attenuationColor||[1,1,1];return t.attenuationColor=new te().setRGB(o[0],o[1],o[2],Nt),Promise.all(r)}}class Mx{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:wn}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class Cx{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:wn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];t.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",a.specularTexture));const o=a.specularColorFactor||[1,1,1];return t.specularColor=new te().setRGB(o[0],o[1],o[2],Nt),a.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",a.specularColorTexture,mt)),Promise.all(r)}}class Ix{constructor(e){this.parser=e,this.name=Ye.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:wn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];return t.bumpScale=a.bumpFactor!==void 0?a.bumpFactor:1,a.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",a.bumpTexture)),Promise.all(r)}}class wx{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:wn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];return a.anisotropyStrength!==void 0&&(t.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(t.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",a.anisotropyTexture)),Promise.all(r)}}class Sx{constructor(e){this.parser=e,this.name=Ye.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const r=i.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}}class Bx{constructor(e){this.parser=e,this.name=Ye.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const a=r.extensions[t],o=i.images[a.source];let c=n.textureLoader;if(o.uri){const l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,a.source,c);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class Tx{constructor(e){this.parser=e,this.name=Ye.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const a=r.extensions[t],o=i.images[a.source];let c=n.textureLoader;if(o.uri){const l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,a.source,c);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class Rx{constructor(e){this.name=Ye.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){const c=i.byteOffset||0,l=i.byteLength||0,h=i.count,u=i.byteStride,f=new Uint8Array(o,c,l);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(h,u,f,i.mode,i.filter).then(function(d){return d.buffer}):a.ready.then(function(){const d=new ArrayBuffer(h*u);return a.decodeGltfBuffer(new Uint8Array(d),h,u,f,i.mode,i.filter),d})})}else return null}}class Dx{constructor(e){this.name=Ye.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const l of i.primitives)if(l.mode!==sn.TRIANGLES&&l.mode!==sn.TRIANGLE_STRIP&&l.mode!==sn.TRIANGLE_FAN&&l.mode!==void 0)return null;const a=n.extensions[this.name].attributes,o=[],c={};for(const l in a)o.push(this.parser.getDependency("accessor",a[l]).then(h=>(c[l]=h,c[l])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(l=>{const h=l.pop(),u=h.isGroup?h.children:[h],f=l[0].count,d=[];for(const m of u){const p=new Ne,g=new R,A=new Jt,b=new R(1,1,1),x=new _t(m.geometry,m.material,f);for(let E=0;E<f;E++)c.TRANSLATION&&g.fromBufferAttribute(c.TRANSLATION,E),c.ROTATION&&A.fromBufferAttribute(c.ROTATION,E),c.SCALE&&b.fromBufferAttribute(c.SCALE,E),x.setMatrixAt(E,p.compose(g,A,b));for(const E in c)if(E==="_COLOR_0"){const C=c[E];x.instanceColor=new jo(C.array,C.itemSize,C.normalized)}else E!=="TRANSLATION"&&E!=="ROTATION"&&E!=="SCALE"&&m.geometry.setAttribute(E,c[E]);dt.prototype.copy.call(x,m),this.parser.assignFinalMaterial(x),d.push(x)}return h.isGroup?(h.clear(),h.add(...d),h):d[0]}))}}const Yu="glTF",Ms=12,vh={JSON:1313821514,BIN:5130562};class Lx{constructor(e){this.name=Ye.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Ms),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Yu)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-Ms,r=new DataView(e,Ms);let a=0;for(;a<i;){const o=r.getUint32(a,!0);a+=4;const c=r.getUint32(a,!0);if(a+=4,c===vh.JSON){const l=new Uint8Array(e,Ms+a,o);this.content=n.decode(l)}else if(c===vh.BIN){const l=Ms+a;this.body=e.slice(l,l+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class Px{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Ye.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},c={},l={};for(const h in a){const u=tc[h]||h.toLowerCase();o[u]=a[h]}for(const h in e.attributes){const u=tc[h]||h.toLowerCase();if(a[h]!==void 0){const f=n.accessors[e.attributes[h]],d=Zi[f.componentType];l[u]=d.name,c[u]=f.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,f){i.decodeDracoFile(h,function(d){for(const m in d.attributes){const p=d.attributes[m],g=c[m];g!==void 0&&(p.normalized=g)}u(d)},o,l,Nt,f)})})}}class Ux{constructor(){this.name=Ye.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class Fx{constructor(){this.name=Ye.KHR_MESH_QUANTIZATION}}class ju extends tr{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let a=0;a!==i;a++)t[a]=n[r+a];return t}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=o*2,l=o*3,h=i-t,u=(n-t)/h,f=u*u,d=f*u,m=e*l,p=m-l,g=-2*d+3*f,A=d-f,b=1-g,x=A-f+u;for(let E=0;E!==o;E++){const C=a[p+E+o],_=a[p+E+c]*h,v=a[m+E+o],w=a[m+E]*h;r[E]=b*C+x*_+g*v+A*w}return r}}const Nx=new Jt;class Qx extends ju{interpolate_(e,t,n,i){const r=super.interpolate_(e,t,n,i);return Nx.fromArray(r).normalize().toArray(r),r}}const sn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},Zi={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},yh={9728:zt,9729:Pt,9984:Qh,9985:Nr,9986:Bs,9987:mn},Mh={33071:yn,33648:zr,10497:ai},ao={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},tc={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},$n={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},kx={CUBICSPLINE:void 0,LINEAR:qs,STEP:Ws},oo={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Ox(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new Ii({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:zn})),s.DefaultMaterial}function Ai(s,e,t){for(const n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function kn(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function Gx(s,e,t){let n=!1,i=!1,r=!1;for(let l=0,h=e.length;l<h;l++){const u=e[l];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(i=!0),u.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);const a=[],o=[],c=[];for(let l=0,h=e.length;l<h;l++){const u=e[l];if(n){const f=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):s.attributes.position;a.push(f)}if(i){const f=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):s.attributes.normal;o.push(f)}if(r){const f=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):s.attributes.color;c.push(f)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c)]).then(function(l){const h=l[0],u=l[1],f=l[2];return n&&(s.morphAttributes.position=h),i&&(s.morphAttributes.normal=u),r&&(s.morphAttributes.color=f),s.morphTargetsRelative=!0,s})}function zx(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Hx(s){let e;const t=s.extensions&&s.extensions[Ye.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+co(t.attributes):e=s.indices+":"+co(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+co(s.targets[n]);return e}function co(s){let e="";const t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function nc(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Vx(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":s.search(/\.ktx2($|\?)/i)>0||s.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const Wx=new Ne;class qx{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Ax,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,r=!1,a=-1;if(typeof navigator<"u"){const o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;const c=o.match(/Version\/(\d+)/);i=n&&c?parseInt(c[1],10):-1,r=o.indexOf("Firefox")>-1,a=r?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||r&&a<98?this.textureLoader=new vb(this.options.manager):this.textureLoader=new wb(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new ks(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){const o={scene:a[0][i.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:i.asset,parser:n,userData:{}};return Ai(r,o,i),kn(o,i),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(o)})).then(function(){for(const c of o.scenes)c.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){const a=t[i].joints;for(let o=0,c=a.length;o<c;o++)e[a[o]].isBone=!0}for(let i=0,r=e.length;i<r;i++){const a=e[i];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),r=(a,o)=>{const c=this.associations.get(a);c!=null&&this.associations.set(o,c);for(const[l,h]of a.children.entries())r(h,o.children[l])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Ye.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(r,a){n.load(Os.resolveURL(t.uri,i.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const a=ao[i.type],o=Zi[i.componentType],c=i.normalized===!0,l=new o(i.count*a);return Promise.resolve(new Ke(l,a,c))}const r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(a){const o=a[0],c=ao[i.type],l=Zi[i.componentType],h=l.BYTES_PER_ELEMENT,u=h*c,f=i.byteOffset||0,d=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,m=i.normalized===!0;let p,g;if(d&&d!==u){const A=Math.floor(f/d),b="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+A+":"+i.count;let x=t.cache.get(b);x||(p=new l(o,A*d,i.count*d/h),x=new E0(p,d/h),t.cache.add(b,x)),g=new bc(x,c,f%d/h,m)}else o===null?p=new l(i.count*c):p=new l(o,f,i.count*c),g=new Ke(p,c,m);if(i.sparse!==void 0){const A=ao.SCALAR,b=Zi[i.sparse.indices.componentType],x=i.sparse.indices.byteOffset||0,E=i.sparse.values.byteOffset||0,C=new b(a[1],x,i.sparse.count*A),_=new l(a[2],E,i.sparse.count*c);o!==null&&(g=new Ke(g.array.slice(),g.itemSize,g.normalized)),g.normalized=!1;for(let v=0,w=C.length;v<w;v++){const M=C[v];if(g.setX(M,_[v*c]),c>=2&&g.setY(M,_[v*c+1]),c>=3&&g.setZ(M,_[v*c+2]),c>=4&&g.setW(M,_[v*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}g.normalized=m}return g})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,a=t.images[r];let o=this.textureLoader;if(a.uri){const c=n.manager.getHandler(a.uri);c!==null&&(o=c)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,n){const i=this,r=this.json,a=r.textures[e],o=r.images[t],c=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[c])return this.textureCache[c];const l=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=a.name||o.name||"",h.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(h.name=o.uri);const f=(r.samplers||{})[a.sampler]||{};return h.magFilter=yh[f.magFilter]||Pt,h.minFilter=yh[f.minFilter]||mn,h.wrapS=Mh[f.wrapS]||ai,h.wrapT=Mh[f.wrapT]||ai,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==zt&&h.minFilter!==Pt,i.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){const n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());const a=i.images[e],o=self.URL||self.webkitURL;let c=a.uri||"",l=!1;if(a.bufferView!==void 0)c=n.getDependency("bufferView",a.bufferView).then(function(u){l=!0;const f=new Blob([u],{type:a.mimeType});return c=o.createObjectURL(f),c});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const h=Promise.resolve(c).then(function(u){return new Promise(function(f,d){let m=f;t.isImageBitmapLoader===!0&&(m=function(p){const g=new Et(p);g.needsUpdate=!0,f(g)}),t.load(Os.resolveURL(u,r.path),m,void 0,d)})}).then(function(u){return l===!0&&o.revokeObjectURL(c),kn(u,a),u.userData.mimeType=a.mimeType||Vx(a.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,i){const r=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),r.extensions[Ye.KHR_TEXTURE_TRANSFORM]){const o=n.extensions!==void 0?n.extensions[Ye.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const c=r.associations.get(a);a=r.extensions[Ye.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,c)}}return i!==void 0&&(a.colorSpace=i),e[t]=a,a})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){const o="PointsMaterial:"+n.uuid;let c=this.cache.get(o);c||(c=new ha,cn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(o,c)),n=c}else if(e.isLine){const o="LineBasicMaterial:"+n.uuid;let c=this.cache.get(o);c||(c=new Ec,cn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(o,c)),n=c}if(i||r||a){let o="ClonedMaterial:"+n.uuid+":";i&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let c=this.cache.get(o);c||(c=n.clone(),r&&(c.vertexColors=!0),a&&(c.flatShading=!0),i&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(o,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return Ii}loadMaterial(e){const t=this,n=this.json,i=this.extensions,r=n.materials[e];let a;const o={},c=r.extensions||{},l=[];if(c[Ye.KHR_MATERIALS_UNLIT]){const u=i[Ye.KHR_MATERIALS_UNLIT];a=u.getMaterialType(),l.push(u.extendParams(o,r,t))}else{const u=r.pbrMetallicRoughness||{};if(o.color=new te(1,1,1),o.opacity=1,Array.isArray(u.baseColorFactor)){const f=u.baseColorFactor;o.color.setRGB(f[0],f[1],f[2],Nt),o.opacity=f[3]}u.baseColorTexture!==void 0&&l.push(t.assignTexture(o,"map",u.baseColorTexture,mt)),o.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,o.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(o,"metalnessMap",u.metallicRoughnessTexture)),l.push(t.assignTexture(o,"roughnessMap",u.metallicRoughnessTexture))),a=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=rn);const h=r.alphaMode||oo.OPAQUE;if(h===oo.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===oo.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==Tt&&(l.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new oe(1,1),r.normalTexture.scale!==void 0)){const u=r.normalTexture.scale;o.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&a!==Tt&&(l.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==Tt){const u=r.emissiveFactor;o.emissive=new te().setRGB(u[0],u[1],u[2],Nt)}return r.emissiveTexture!==void 0&&a!==Tt&&l.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,mt)),Promise.all(l).then(function(){const u=new a(o);return r.name&&(u.name=r.name),kn(u,r),t.associations.set(u,{materials:e}),r.extensions&&Ai(i,u,r),u})}createUniqueName(e){const t=at.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function r(o){return n[Ye.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(c){return Ch(c,o,t)})}const a=[];for(let o=0,c=e.length;o<c;o++){const l=e[o],h=Hx(l),u=i[h];if(u)a.push(u.promise);else{let f;l.extensions&&l.extensions[Ye.KHR_DRACO_MESH_COMPRESSION]?f=r(l):f=Ch(new ht,l,t),i[h]={primitive:l,promise:f},a.push(f)}}return Promise.all(a)}loadMesh(e){const t=this,n=this.json,i=this.extensions,r=n.meshes[e],a=r.primitives,o=[];for(let c=0,l=a.length;c<l;c++){const h=a[c].material===void 0?Ox(this.cache):this.getDependency("material",a[c].material);o.push(h)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(c){const l=c.slice(0,c.length-1),h=c[c.length-1],u=[];for(let d=0,m=h.length;d<m;d++){const p=h[d],g=a[d];let A;const b=l[d];if(g.mode===sn.TRIANGLES||g.mode===sn.TRIANGLE_STRIP||g.mode===sn.TRIANGLE_FAN||g.mode===void 0)A=r.isSkinnedMesh===!0?new y0(p,b):new qe(p,b),A.isSkinnedMesh===!0&&A.normalizeSkinWeights(),g.mode===sn.TRIANGLE_STRIP?A.geometry=xh(A.geometry,Xh):g.mode===sn.TRIANGLE_FAN&&(A.geometry=xh(A.geometry,Wo));else if(g.mode===sn.LINES)A=new du(p,b);else if(g.mode===sn.LINE_STRIP)A=new _c(p,b);else if(g.mode===sn.LINE_LOOP)A=new I0(p,b);else if(g.mode===sn.POINTS)A=new vc(p,b);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+g.mode);Object.keys(A.geometry.morphAttributes).length>0&&zx(A,r),A.name=t.createUniqueName(r.name||"mesh_"+e),kn(A,r),g.extensions&&Ai(i,A,g),t.assignFinalMaterial(A),u.push(A)}for(let d=0,m=u.length;d<m;d++)t.associations.set(u[d],{meshes:e,primitives:d});if(u.length===1)return r.extensions&&Ai(i,u[0],r),u[0];const f=new Bt;r.extensions&&Ai(i,f,r),t.associations.set(f,{meshes:e});for(let d=0,m=u.length;d<m;d++)f.add(u[d]);return f})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Gt(Xt.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new pc(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),kn(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const r=i.pop(),a=i,o=[],c=[];for(let l=0,h=a.length;l<h;l++){const u=a[l];if(u){o.push(u);const f=new Ne;r!==null&&f.fromArray(r.array,l*16),c.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new xc(o,c)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],r=i.name?i.name:"animation_"+e,a=[],o=[],c=[],l=[],h=[];for(let u=0,f=i.channels.length;u<f;u++){const d=i.channels[u],m=i.samplers[d.sampler],p=d.target,g=p.node,A=i.parameters!==void 0?i.parameters[m.input]:m.input,b=i.parameters!==void 0?i.parameters[m.output]:m.output;p.node!==void 0&&(a.push(this.getDependency("node",g)),o.push(this.getDependency("accessor",A)),c.push(this.getDependency("accessor",b)),l.push(m),h.push(p))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c),Promise.all(l),Promise.all(h)]).then(function(u){const f=u[0],d=u[1],m=u[2],p=u[3],g=u[4],A=[];for(let b=0,x=f.length;b<x;b++){const E=f[b],C=d[b],_=m[b],v=p[b],w=g[b];if(E===void 0)continue;E.updateMatrix&&E.updateMatrix();const M=n._createAnimationTracks(E,C,_,v,w);if(M)for(let y=0;y<M.length;y++)A.push(M[y])}return new pb(r,void 0,A)})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){const a=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let c=0,l=i.weights.length;c<l;c++)o.morphTargetInfluences[c]=i.weights[c]}),a})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),a=[],o=i.children||[];for(let l=0,h=o.length;l<h;l++)a.push(n.getDependency("node",o[l]));const c=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(a),c]).then(function(l){const h=l[0],u=l[1],f=l[2];f!==null&&h.traverse(function(d){d.isSkinnedMesh&&d.bind(f,Wx)});for(let d=0,m=u.length;d<m;d++)h.add(u[d]);return h})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],a=r.name?i.createUniqueName(r.name):"",o=[],c=i._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&o.push(c),r.camera!==void 0&&o.push(i.getDependency("camera",r.camera).then(function(l){return i._getNodeRef(i.cameraCache,r.camera,l)})),i._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){o.push(l)}),this.nodeCache[e]=Promise.all(o).then(function(l){let h;if(r.isBone===!0?h=new fu:l.length>1?h=new Bt:l.length===1?h=l[0]:h=new dt,h!==l[0])for(let u=0,f=l.length;u<f;u++)h.add(l[u]);if(r.name&&(h.userData.name=r.name,h.name=a),kn(h,r),r.extensions&&Ai(n,h,r),r.matrix!==void 0){const u=new Ne;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);return i.associations.has(h)||i.associations.set(h,{}),i.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,r=new Bt;n.name&&(r.name=i.createUniqueName(n.name)),kn(r,n),n.extensions&&Ai(t,r,n);const a=n.nodes||[],o=[];for(let c=0,l=a.length;c<l;c++)o.push(i.getDependency("node",a[c]));return Promise.all(o).then(function(c){for(let h=0,u=c.length;h<u;h++)r.add(c[h]);const l=h=>{const u=new Map;for(const[f,d]of i.associations)(f instanceof cn||f instanceof Et)&&u.set(f,d);return h.traverse(f=>{const d=i.associations.get(f);d!=null&&u.set(f,d)}),u};return i.associations=l(r),r})}_createAnimationTracks(e,t,n,i,r){const a=[],o=e.name?e.name:e.uuid,c=[];$n[r.path]===$n.weights?e.traverse(function(f){f.morphTargetInfluences&&c.push(f.name?f.name:f.uuid)}):c.push(o);let l;switch($n[r.path]){case $n.weights:l=rs;break;case $n.rotation:l=as;break;case $n.position:case $n.scale:l=os;break;default:n.itemSize===1?l=rs:l=os;break}const h=i.interpolation!==void 0?kx[i.interpolation]:qs,u=this._getArrayFromAccessor(n);for(let f=0,d=c.length;f<d;f++){const m=new l(c[f]+"."+$n[r.path],t.array,u,h);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(m),a.push(m)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=nc(t.constructor),i=new Float32Array(t.length);for(let r=0,a=t.length;r<a;r++)i[r]=t[r]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof as?Qx:ju;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function Xx(s,e,t){const n=e.attributes,i=new Hn;if(n.POSITION!==void 0){const o=t.json.accessors[n.POSITION],c=o.min,l=o.max;if(c!==void 0&&l!==void 0){if(i.set(new R(c[0],c[1],c[2]),new R(l[0],l[1],l[2])),o.normalized){const h=nc(Zi[o.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const o=new R,c=new R;for(let l=0,h=r.length;l<h;l++){const u=r[l];if(u.POSITION!==void 0){const f=t.json.accessors[u.POSITION],d=f.min,m=f.max;if(d!==void 0&&m!==void 0){if(c.setX(Math.max(Math.abs(d[0]),Math.abs(m[0]))),c.setY(Math.max(Math.abs(d[1]),Math.abs(m[1]))),c.setZ(Math.max(Math.abs(d[2]),Math.abs(m[2]))),f.normalized){const p=nc(Zi[f.componentType]);c.multiplyScalar(p)}o.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(o)}s.boundingBox=i;const a=new Cn;i.getCenter(a.center),a.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=a}function Ch(s,e,t){const n=e.attributes,i=[];function r(a,o){return t.getDependency("accessor",a).then(function(c){s.setAttribute(o,c)})}for(const a in n){const o=tc[a]||a.toLowerCase();o in s.attributes||i.push(r(n[a],o))}if(e.indices!==void 0&&!s.index){const a=t.getDependency("accessor",e.indices).then(function(o){s.setIndex(o)});i.push(a)}return Je.workingColorSpace!==Nt&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Je.workingColorSpace}" not supported.`),kn(s,e),Xx(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?Gx(s,e.targets,t):s})}var Yx=(function(){var s="b9H79Tebbbe8Fv9Gbb9Gvuuuuueu9Giuuub9Geueu9Giuuueuikqbeeedddillviebeoweuec:q;iekr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbeY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVbdE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbiL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtblK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbol79IV9Rbrq:P8Yqdbk;3sezu8Jjjjjbcj;eb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Radz1jjjbhwcj;abad9UhoaicefhldnadTmbaoc;WFbGgocjdaocjd6EhDcbhqinaqae9pmeaDaeaq9RaqaDfae6Egkcsfgocl4cifcd4hxdndndndnaoc9WGgmTmbcbhPcehsawcjdfhzalhHinaraH9Rax6midnaraHaxfgl9RcK6mbczhoinawcj;cbfaogifgoc9WfhOdndndndndnaHaic9WfgAco4fRbbaAci4coG4ciGPlbedibkaO9cb83ibaOcwf9cb83ibxikaOalRblalRbbgAco4gCaCciSgCE86bbaocGfalclfaCfgORbbaAcl4ciGgCaCciSgCE86bbaocVfaOaCfgORbbaAcd4ciGgCaCciSgCE86bbaoc7faOaCfgORbbaAciGgAaAciSgAE86bbaoctfaOaAfgARbbalRbegOco4gCaCciSgCE86bbaoc91faAaCfgARbbaOcl4ciGgCaCciSgCE86bbaoc4faAaCfgARbbaOcd4ciGgCaCciSgCE86bbaoc93faAaCfgARbbaOciGgOaOciSgOE86bbaoc94faAaOfgARbbalRbdgOco4gCaCciSgCE86bbaoc95faAaCfgARbbaOcl4ciGgCaCciSgCE86bbaoc96faAaCfgARbbaOcd4ciGgCaCciSgCE86bbaoc97faAaCfgARbbaOciGgOaOciSgOE86bbaoc98faAaOfgORbbalRbiglco4gAaAciSgAE86bbaoc99faOaAfgORbbalcl4ciGgAaAciSgAE86bbaoc9:faOaAfgORbbalcd4ciGgAaAciSgAE86bbaocufaOaAfgoRbbalciGglalciSglE86bbaoalfhlxdkaOalRbwalRbbgAcl4gCaCcsSgCE86bbaocGfalcwfaCfgORbbaAcsGgAaAcsSgAE86bbaocVfaOaAfgORbbalRbegAcl4gCaCcsSgCE86bbaoc7faOaCfgORbbaAcsGgAaAcsSgAE86bbaoctfaOaAfgORbbalRbdgAcl4gCaCcsSgCE86bbaoc91faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc4faOaAfgORbbalRbigAcl4gCaCcsSgCE86bbaoc93faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc94faOaAfgORbbalRblgAcl4gCaCcsSgCE86bbaoc95faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc96faOaAfgORbbalRbvgAcl4gCaCcsSgCE86bbaoc97faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc98faOaAfgORbbalRbogAcl4gCaCcsSgCE86bbaoc99faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc9:faOaAfgORbbalRbrglcl4gAaAcsSgAE86bbaocufaOaAfgoRbbalcsGglalcsSglE86bbaoalfhlxekaOal8Pbb83bbaOcwfalcwf8Pbb83bbalczfhlkdnaiam9pmbaiczfhoaral9RcL0mekkaiam6mialTmidnakTmbawaPfRbbhOcbhoazhiinaiawcj;cbfaofRbbgAce4cbaAceG9R7aOfgO86bbaiadfhiaocefgoak9hmbkkazcefhzaPcefgPad6hsalhHaPad9hmexvkkcbhlasceGmdxikalaxad2fhCdnakTmbcbhHcehsawcjdfhminaral9Rax6mialTmdalaxfhlawaHfRbbhOcbhoamhiinaiawcj;cbfaofRbbgAce4cbaAceG9R7aOfgO86bbaiadfhiaocefgoak9hmbkamcefhmaHcefgHad6hsaHad9hmbkaChlxikcbhocehsinaral9Rax6mdalTmealaxfhlaocefgoad6hsadao9hmbkaChlxdkcbhlasceGTmekc9:hoxikabaqad2fawcjdfakad2z1jjjb8Aawawcjdfakcufad2fadz1jjjb8Aakaqfhqalmbkc9:hoxekcbc99aral9Radcaadca0ESEhokavcj;ebf8Kjjjjbaok;yzeHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecjez:jjjjb8AavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhodnaeTmbcmcsaDceSEhkcbhxcbhmcbhDcbhicbhlindnaoaq9nmbc9:hoxikdndnawRbbgrc;Ve0mbavc;abfalarcl4cu7fcsGcitfgPydlhsaPydbhzdnarcsGgPak9pmbavaiarcu7fcsGcdtfydbaxaPEhraPThPdndnadcd9hmbabaDcetfgHaz87ebaHcdfas87ebaHclfar87ebxekabaDcdtfgHazBdbaHclfasBdbaHcwfarBdbkaxaPfhxavc;abfalcitfgHarBdbaHasBdlavaicdtfarBdbavc;abfalcefcsGglcitfgHazBdbaHarBdlaiaPfhialcefhlxdkdndnaPcsSmbamaPfaPc987fcefhmxekaocefhrao8SbbgPcFeGhHdndnaPcu9mmbarhoxekaocvfhoaHcFbGhHcrhPdninar8SbbgOcFbGaPtaHVhHaOcu9kmearcefhraPcrfgPc8J9hmbxdkkarcefhokaHce4cbaHceG9R7amfhmkdndnadcd9hmbabaDcetfgraz87ebarcdfas87ebarclfam87ebxekabaDcdtfgrazBdbarclfasBdbarcwfamBdbkavc;abfalcitfgramBdbarasBdlavaicdtfamBdbavc;abfalcefcsGglcitfgrazBdbaramBdlaicefhialcefhlxekdnarcpe0mbaxcefgOavaiaqarcsGfRbbgPcl49RcsGcdtfydbaPcz6gHEhravaiaP9RcsGcdtfydbaOaHfgsaPcsGgOEhPaOThOdndnadcd9hmbabaDcetfgzax87ebazcdfar87ebazclfaP87ebxekabaDcdtfgzaxBdbazclfarBdbazcwfaPBdbkavaicdtfaxBdbavc;abfalcitfgzarBdbazaxBdlavaicefgicsGcdtfarBdbavc;abfalcefcsGcitfgzaPBdbazarBdlavaiaHfcsGgicdtfaPBdbavc;abfalcdfcsGglcitfgraxBdbaraPBdlalcefhlaiaOfhiasaOfhxxekaxcbaoRbbgzEgAarc;:eSgrfhsazcsGhCazcl4hXdndnazcs0mbascefhOxekashOavaiaX9RcsGcdtfydbhskdndnaCmbaOcefhxxekaOhxavaiaz9RcsGcdtfydbhOkdndnarTmbaocefhrxekaocdfhrao8SbegHcFeGhPdnaHcu9kmbaocofhAaPcFbGhPcrhodninar8SbbgHcFbGaotaPVhPaHcu9kmearcefhraocrfgoc8J9hmbkaAhrxekarcefhrkaPce4cbaPceG9R7amfgmhAkdndnaXcsSmbarhPxekarcefhPar8SbbgocFeGhHdnaocu9kmbarcvfhsaHcFbGhHcrhodninaP8SbbgrcFbGaotaHVhHarcu9kmeaPcefhPaocrfgoc8J9hmbkashPxekaPcefhPkaHce4cbaHceG9R7amfgmhskdndnaCcsSmbaPhoxekaPcefhoaP8SbbgrcFeGhHdnarcu9kmbaPcvfhOaHcFbGhHcrhrdninao8SbbgPcFbGartaHVhHaPcu9kmeaocefhoarcrfgrc8J9hmbkaOhoxekaocefhokaHce4cbaHceG9R7amfgmhOkdndnadcd9hmbabaDcetfgraA87ebarcdfas87ebarclfaO87ebxekabaDcdtfgraABdbarclfasBdbarcwfaOBdbkavc;abfalcitfgrasBdbaraABdlavaicdtfaABdbavc;abfalcefcsGcitfgraOBdbarasBdlavaicefgicsGcdtfasBdbavc;abfalcdfcsGcitfgraABdbaraOBdlavaiazcz6aXcsSVfgicsGcdtfaOBdbaiaCTaCcsSVfhialcifhlkawcefhwalcsGhlaicsGhiaDcifgDae6mbkkcbc99aoaqSEhokavc;aef8Kjjjjbaok:llevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:Lvoeue99dud99eud99dndnadcl9hmbaeTmeindndnabcdfgd8Sbb:Yab8Sbbgi:Ygl:l:tabcefgv8Sbbgo:Ygr:l:tgwJbb;:9cawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai86bbdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad86bbdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad86bbabclfhbaecufgembxdkkaeTmbindndnabclfgd8Ueb:Yab8Uebgi:Ygl:l:tabcdfgv8Uebgo:Ygr:l:tgwJb;:FSawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai87ebdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad87ebdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad87ebabcwfhbaecufgembkkk;siliui99iue99dnaeTmbcbhiabhlindndnJ;Zl81Zalcof8UebgvciV:Y:vgoal8Ueb:YNgrJb;:FSNJbbbZJbbb:;arJbbbb9GEMgw:lJbbb9p9DTmbaw:OhDxekcjjjj94hDkalclf8Uebhqalcdf8UebhkabavcefciGaiVcetfaD87ebdndnaoak:YNgwJb;:FSNJbbbZJbbb:;awJbbbb9GEMgx:lJbbb9p9DTmbax:Ohkxekcjjjj94hkkabavcdfciGaiVcetfak87ebdndnaoaq:YNgoJb;:FSNJbbbZJbbb:;aoJbbbb9GEMgx:lJbbb9p9DTmbax:Ohqxekcjjjj94hqkabavcufciGaiVcetfaq87ebdndnJbbjZararN:tawawN:taoaoN:tgrJbbbbarJbbbb9GE:rJb;:FSNJbbbZMgr:lJbbb9p9DTmbar:Ohqxekcjjjj94hqkabavciGaiVcetfaq87ebalcwfhlaiclfhiaecufgembkkk9mbdnadcd4ae2geTmbinababydbgdcwtcw91:Yadce91cjjj;8ifcjjj98G::NUdbabclfhbaecufgembkkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik;LeeeudndnaeabVciGTmbabhixekdndnadcz9pmbabhixekabhiinaiaeydbBdbaiclfaeclfydbBdbaicwfaecwfydbBdbaicxfaecxfydbBdbaiczfhiaeczfheadc9Wfgdcs0mbkkadcl6mbinaiaeydbBdbaeclfheaiclfhiadc98fgdci0mbkkdnadTmbinaiaeRbb86bbaicefhiaecefheadcufgdmbkkabk;aeedudndnabciGTmbabhixekaecFeGc:b:c:ew2hldndnadcz9pmbabhixekabhiinaialBdbaicxfalBdbaicwfalBdbaiclfalBdbaiczfhiadc9Wfgdcs0mbkkadcl6mbinaialBdbaiclfhiadc98fgdci0mbkkdnadTmbinaiae86bbaicefhiadcufgdmbkkabkkkebcjwklz9Kbb",e="b9H79TebbbeKl9Gbb9Gvuuuuueu9Giuuub9Geueuikqbbebeedddilve9Weeeviebeoweuec:q;Aekr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbdY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVblE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtboK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbrL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbwl79IV9RbDq;t9tqlbzik9:evu8Jjjjjbcz9Rhbcbheincbhdcbhiinabcwfadfaicjuaead4ceGglE86bbaialfhiadcefgdcw9hmbkaec:q:yjjbfai86bbaecitc:q1jjbfab8Piw83ibaecefgecjd9hmbkk;h8JlHud97euo978Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Rad;8qbbcj;abad9UhoaicefhldnadTmbaoc;WFbGgocjdaocjd6EhwcbhDinaDae9pmeawaeaD9RaDawfae6Egqcsfgoc9WGgkci2hxakcethmaocl4cifcd4hPabaDad2fhscbhzdnincehHalhOcbhAdninaraO9RaP6miavcj;cbfaAak2fhCaOaPfhlcbhidnakc;ab6mbaral9Rc;Gb6mbcbhoinaCaofhidndndndndnaOaoco4fRbbgXciGPlbedibkaipxbbbbbbbbbbbbbbbbpklbxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklbalczfhlkdndndndndnaXcd4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklzxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklzalczfhlkdndndndndnaXcl4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklaxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklaalczfhlkdndndndndnaXco4Plbedibkaipxbbbbbbbbbbbbbbbbpkl8WxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WalclfaYpQbfaXc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WalcwfaYpQbfaXc:q:yjjbfRbbfhlxekaialpbbbpkl8Walczfhlkaoc;abfhiaocjefak0meaihoaral9Rc;Fb0mbkkdndnaiak9pmbaici4hoinaral9RcK6mdaCaifhXdndndndndnaOaico4fRbbaocoG4ciGPlbedibkaXpxbbbbbbbbbbbbbbbbpklbxikaXalpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaXalpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaXalpbbbpklbalczfhlkaocdfhoaiczfgiak6mbkkalTmbaAci6hHalhOaAcefgohAaoclSmdxekkcbhlaHceGmdkdnakTmbavcjdfazfhiavazfpbdbhYcbhXinaiavcj;cbfaXfgopblbgLcep9TaLpxeeeeeeeeeeeeeeeegQp9op9Hp9rgLaoakfpblbg8Acep9Ta8AaQp9op9Hp9rg8ApmbzeHdOiAlCvXoQrLgEaoamfpblbg3cep9Ta3aQp9op9Hp9rg3aoaxfpblbg5cep9Ta5aQp9op9Hp9rg5pmbzeHdOiAlCvXoQrLg8EpmbezHdiOAlvCXorQLgQaQpmbedibedibedibediaYp9UgYp9AdbbaiadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaEa8EpmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaLa8ApmwKDYq8AkEx3m5P8Es8FgLa3a5pmwKDYq8AkEx3m5P8Es8Fg8ApmbezHdiOAlvCXorQLgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaLa8ApmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfhiaXczfgXak6mbkkazclfgzad6mbkasavcjdfaqad2;8qbbavavcjdfaqcufad2fad;8qbbaqaDfhDc9:hoalmexikkc9:hoxekcbc99aral9Radcaadca0ESEhokavcj;kbf8Kjjjjbaokwbz:bjjjbk;uzeHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecje;8kbavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhodnaeTmbcmcsaDceSEhkcbhxcbhmcbhDcbhicbhlindnaoaq9nmbc9:hoxikdndnawRbbgrc;Ve0mbavc;abfalarcl4cu7fcsGcitfgPydlhsaPydbhzdnarcsGgPak9pmbavaiarcu7fcsGcdtfydbaxaPEhraPThPdndnadcd9hmbabaDcetfgHaz87ebaHcdfas87ebaHclfar87ebxekabaDcdtfgHazBdbaHclfasBdbaHcwfarBdbkaxaPfhxavc;abfalcitfgHarBdbaHasBdlavaicdtfarBdbavc;abfalcefcsGglcitfgHazBdbaHarBdlaiaPfhialcefhlxdkdndnaPcsSmbamaPfaPc987fcefhmxekaocefhrao8SbbgPcFeGhHdndnaPcu9mmbarhoxekaocvfhoaHcFbGhHcrhPdninar8SbbgOcFbGaPtaHVhHaOcu9kmearcefhraPcrfgPc8J9hmbxdkkarcefhokaHce4cbaHceG9R7amfhmkdndnadcd9hmbabaDcetfgraz87ebarcdfas87ebarclfam87ebxekabaDcdtfgrazBdbarclfasBdbarcwfamBdbkavc;abfalcitfgramBdbarasBdlavaicdtfamBdbavc;abfalcefcsGglcitfgrazBdbaramBdlaicefhialcefhlxekdnarcpe0mbaxcefgOavaiaqarcsGfRbbgPcl49RcsGcdtfydbaPcz6gHEhravaiaP9RcsGcdtfydbaOaHfgsaPcsGgOEhPaOThOdndnadcd9hmbabaDcetfgzax87ebazcdfar87ebazclfaP87ebxekabaDcdtfgzaxBdbazclfarBdbazcwfaPBdbkavaicdtfaxBdbavc;abfalcitfgzarBdbazaxBdlavaicefgicsGcdtfarBdbavc;abfalcefcsGcitfgzaPBdbazarBdlavaiaHfcsGgicdtfaPBdbavc;abfalcdfcsGglcitfgraxBdbaraPBdlalcefhlaiaOfhiasaOfhxxekaxcbaoRbbgzEgAarc;:eSgrfhsazcsGhCazcl4hXdndnazcs0mbascefhOxekashOavaiaX9RcsGcdtfydbhskdndnaCmbaOcefhxxekaOhxavaiaz9RcsGcdtfydbhOkdndnarTmbaocefhrxekaocdfhrao8SbegHcFeGhPdnaHcu9kmbaocofhAaPcFbGhPcrhodninar8SbbgHcFbGaotaPVhPaHcu9kmearcefhraocrfgoc8J9hmbkaAhrxekarcefhrkaPce4cbaPceG9R7amfgmhAkdndnaXcsSmbarhPxekarcefhPar8SbbgocFeGhHdnaocu9kmbarcvfhsaHcFbGhHcrhodninaP8SbbgrcFbGaotaHVhHarcu9kmeaPcefhPaocrfgoc8J9hmbkashPxekaPcefhPkaHce4cbaHceG9R7amfgmhskdndnaCcsSmbaPhoxekaPcefhoaP8SbbgrcFeGhHdnarcu9kmbaPcvfhOaHcFbGhHcrhrdninao8SbbgPcFbGartaHVhHaPcu9kmeaocefhoarcrfgrc8J9hmbkaOhoxekaocefhokaHce4cbaHceG9R7amfgmhOkdndnadcd9hmbabaDcetfgraA87ebarcdfas87ebarclfaO87ebxekabaDcdtfgraABdbarclfasBdbarcwfaOBdbkavc;abfalcitfgrasBdbaraABdlavaicdtfaABdbavc;abfalcefcsGcitfgraOBdbarasBdlavaicefgicsGcdtfasBdbavc;abfalcdfcsGcitfgraABdbaraOBdlavaiazcz6aXcsSVfgicsGcdtfaOBdbaiaCTaCcsSVfhialcifhlkawcefhwalcsGhlaicsGhiaDcifgDae6mbkkcbc99aoaqSEhokavc;aef8Kjjjjbaok:llevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:EPliuo97eue978Jjjjjbca9Rhidndnadcl9hmbdnaec98GglTmbcbhvabhdinadadpbbbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDpxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpkbbadczfhdavclfgval6mbkkalae9pmeaiaeciGgvcdtgdVcbczad9R;8kbaiabalcdtfglad;8qbbdnavTmbaiaipblbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDpxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpklbkalaiad;8qbbskdnaec98GgxTmbcbhvabhdinadczfglalpbbbgopxbbbbbbFFbbbbbbFFgkp9oadpbbbgDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eaDaopmbediwDqkzHOAKY8AEgoczp:Sep;6egrp;Geaoczp:Reczp:Sep;6egwp;Gep;Kep;Legopxb;:FSb;:FSb;:FSb;:FSawaopxbbbbbbbbbbbbbbbbp:2egqawpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegwawp;Meaoaop;Mearaqaramp9op9rp;Kegoaop;Mep;Kep;Kep;Jep;Negrp;Mepxbbn0bbn0bbn0bbn0gqp;Keczp:Reawarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9op9qgwaoarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogopmwDKYqk8AExm35Ps8E8Fp9qpkbbadaDakp9oawaopmbezHdiOAlvCXorQLp9qpkbbadcafhdavclfgvax6mbkkaxae9pmbaiaeciGgvcitgdfcbcaad9R;8kbaiabaxcitfglad;8qbbdnavTmbaiaipblzgopxbbbbbbFFbbbbbbFFgkp9oaipblbgDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eaDaopmbediwDqkzHOAKY8AEgoczp:Sep;6egrp;Geaoczp:Reczp:Sep;6egwp;Gep;Kep;Legopxb;:FSb;:FSb;:FSb;:FSawaopxbbbbbbbbbbbbbbbbp:2egqawpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegwawp;Meaoaop;Mearaqaramp9op9rp;Kegoaop;Mep;Kep;Kep;Jep;Negrp;Mepxbbn0bbn0bbn0bbn0gqp;Keczp:Reawarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9op9qgwaoarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogopmwDKYqk8AExm35Ps8E8Fp9qpklzaiaDakp9oawaopmbezHdiOAlvCXorQLp9qpklbkalaiad;8qbbkk;4wllue97euv978Jjjjjbc8W9Rhidnaec98GglTmbcbhvabhoinaiaopbbbgraoczfgwpbbbgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklbaopxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaqakp;Mearp;Keczp:ReaDakp;Mearp;Keamp9op9qgkpmbezHdiOAlvCXorQLgrp5baipblbpEb:T:j83ibaocwfarp5eaipblbpEe:T:j83ibawaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblbpEd:T:j83ibaocKfakp5eaipblbpEi:T:j83ibaocafhoavclfgval6mbkkdnalae9pmbaiaeciGgvcitgofcbcaao9R;8kbaiabalcitfgwao;8qbbdnavTmbaiaipblbgraipblzgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklaaipxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaqakp;Mearp;Keczp:ReaDakp;Mearp;Keamp9op9qgkpmbezHdiOAlvCXorQLgrp5baipblapEb:T:j83ibaiarp5eaipblapEe:T:j83iwaiaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblapEd:T:j83izaiakp5eaipblapEi:T:j83iKkawaiao;8qbbkk:Pddiue978Jjjjjbc;ab9Rhidnadcd4ae2glc98GgvTmbcbhdabheinaeaepbbbgocwp:Recwp:Sep;6eaocep:SepxbbjZbbjZbbjZbbjZp:UepxbbjFbbjFbbjFbbjFp9op;Mepkbbaeczfheadclfgdav6mbkkdnaval9pmbaialciGgdcdtgeVcbc;abae9R;8kbaiabavcdtfgvae;8qbbdnadTmbaiaipblbgocwp:Recwp:Sep;6eaocep:SepxbbjZbbjZbbjZbbjZp:UepxbbjFbbjFbbjFbbjFp9op;Mepklbkavaiae;8qbbkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaikkkebcjwklz9Tbb",t=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,3,2,0,0,5,3,1,0,1,12,1,0,10,22,2,12,0,65,0,65,0,65,0,252,10,0,0,11,7,0,65,0,253,15,26,11]),n=new Uint8Array([32,0,65,2,1,106,34,33,3,128,11,4,13,64,6,253,10,7,15,116,127,5,8,12,40,16,19,54,20,9,27,255,113,17,42,67,24,23,146,148,18,14,22,45,70,69,56,114,101,21,25,63,75,136,108,28,118,29,73,115]);if(typeof WebAssembly!="object")return{supported:!1};var i=WebAssembly.validate(t)?e:s,r,a=WebAssembly.instantiate(o(i),{}).then(function(A){r=A.instance,r.exports.__wasm_call_ctors()});function o(A){for(var b=new Uint8Array(A.length),x=0;x<A.length;++x){var E=A.charCodeAt(x);b[x]=E>96?E-97:E>64?E-39:E+4}for(var C=0,x=0;x<A.length;++x)b[C++]=b[x]<60?n[b[x]]:(b[x]-60)*64+b[++x];return b.buffer.slice(0,C)}function c(A,b,x,E,C,_){var v=r.exports.sbrk,w=x+3&-4,M=v(w*E),y=v(C.length),B=new Uint8Array(r.exports.memory.buffer);B.set(C,y);var U=A(M,x,E,y,C.length);if(U==0&&_&&_(M,w,E),b.set(B.subarray(M,M+x*E)),v(M-v(0)),U!=0)throw new Error("Malformed buffer data: "+U)}var l={NONE:"",OCTAHEDRAL:"meshopt_decodeFilterOct",QUATERNION:"meshopt_decodeFilterQuat",EXPONENTIAL:"meshopt_decodeFilterExp"},h={ATTRIBUTES:"meshopt_decodeVertexBuffer",TRIANGLES:"meshopt_decodeIndexBuffer",INDICES:"meshopt_decodeIndexSequence"},u=[],f=0;function d(A){var b={object:new Worker(A),pending:0,requests:{}};return b.object.onmessage=function(x){var E=x.data;b.pending-=E.count,b.requests[E.id][E.action](E.value),delete b.requests[E.id]},b}function m(A){for(var b="var instance; var ready = WebAssembly.instantiate(new Uint8Array(["+new Uint8Array(o(i))+"]), {}).then(function(result) { instance = result.instance; instance.exports.__wasm_call_ctors(); });self.onmessage = workerProcess;"+c.toString()+g.toString(),x=new Blob([b],{type:"text/javascript"}),E=URL.createObjectURL(x),C=0;C<A;++C)u[C]=d(E);URL.revokeObjectURL(E)}function p(A,b,x,E,C){for(var _=u[0],v=1;v<u.length;++v)u[v].pending<_.pending&&(_=u[v]);return new Promise(function(w,M){var y=new Uint8Array(x),B=f++;_.pending+=A,_.requests[B]={resolve:w,reject:M},_.object.postMessage({id:B,count:A,size:b,source:y,mode:E,filter:C},[y.buffer])})}function g(A){a.then(function(){var b=A.data;try{var x=new Uint8Array(b.count*b.size);c(r.exports[b.mode],x,b.count,b.size,b.source,r.exports[b.filter]),self.postMessage({id:b.id,count:b.count,action:"resolve",value:x},[x.buffer])}catch(E){self.postMessage({id:b.id,count:b.count,action:"reject",value:E})}})}return{ready:a,supported:!0,useWorkers:function(A){m(A)},decodeVertexBuffer:function(A,b,x,E,C){c(r.exports.meshopt_decodeVertexBuffer,A,b,x,E,r.exports[l[C]])},decodeIndexBuffer:function(A,b,x,E){c(r.exports.meshopt_decodeIndexBuffer,A,b,x,E)},decodeIndexSequence:function(A,b,x,E){c(r.exports.meshopt_decodeIndexSequence,A,b,x,E)},decodeGltfBuffer:function(A,b,x,E,C,_){c(r.exports[h[C]],A,b,x,E,r.exports[l[_]])},decodeGltfBufferAsync:function(A,b,x,E,C){return u.length>0?p(A,b,x,h[E],l[C]):a.then(function(){var _=new Uint8Array(A*b);return c(r.exports[h[E]],_,A,b,x,r.exports[l[C]]),_})}}})();function jx(s,e,t){s.updateMatrixWorld(!0);const n=new R,i=new Ne;s.traverse(r=>{const a=r;if(!a.isMesh)return;const o=a.geometry.attributes.position,c=new Float32Array(o.count*3);i.copy(a.matrixWorld).invert();for(let l=0;l<o.count;l++)n.fromBufferAttribute(o,l).applyMatrix4(a.matrixWorld),n.y+=e(n.x,n.z)-t,n.applyMatrix4(i),c[l*3]=n.x,c[l*3+1]=n.y,c[l*3+2]=n.z;a.geometry.setAttribute("position",new Ke(c,3)),a.geometry.computeBoundingSphere(),a.geometry.computeBoundingBox()})}async function Kx(s,e,t,n,i){const r=new dx().setMeshoptDecoder(Yx),a=new Yt({vertexColors:!0,side:rn});for(const o of s)try{const c=await r.loadAsync(`${e}models/${o.model}`),l=new _0;l.name=o.name;const h=(d,m)=>{d&&(d.traverse(p=>{const g=p;if(g.isMesh&&(g.material=a,g.castShadow=!0,g.receiveShadow=!0,!g.geometry.getAttribute("color"))){const A=g.geometry.attributes.position.count,b=new Float32Array(A*3).fill(.85);g.geometry.setAttribute("color",new Ke(b,3))}}),l.addLevel(d,m))},u=c.scene.getObjectByName("LOD0"),f=c.scene.getObjectByName("LOD1");u?(h(u,0),h(f,700)):h(c.scene,0),l.position.set(o.x,o.y,o.z),l.rotation.y=o.ry,l.scale.setScalar(o.s),t.add(l),o.id==="topkapi"&&jx(l,n,o.y),i?.()}catch(c){console.warn("landmark",o.id,c)}}const Jx={acik:"Açık",bulutlu:"Bulutlu",yagmur:"Yağmur",sis:"Sis"},Wi=s=>new te(s),qi={day:{top:Wi("#b9b6d6"),hor:Wi("#efc2a8")},set:{top:Wi("#a99cc4"),hor:Wi("#f0946a")},night:{top:Wi("#0e1430"),hor:Wi("#2a3358")}};class Zx{constructor(e,t,n,i){if(this.scene=e,this.shadows=t,this.farFog=n,this.hour=14,this.timeScale=1/300,this.weather="acik",this.night=0,this.wet=0,this.rainAmt=0,this.fogAmt=0,this.sunDir=new R,this.fog=new mc(14082794,200,n),e.fog=this.fog,this.hemi=new yb(14674160,9076070,1.2),e.add(this.hemi),this.sun=new Cu(16773596,2.4),t){this.sun.castShadow=!0;const l=this.sun.shadow;l.mapSize.set(i?1024:2048,i?1024:2048);const h=l.camera;h.left=-90,h.right=90,h.top=90,h.bottom=-90,h.near=1,h.far=600,l.bias=-.0015,l.normalBias=.9}e.add(this.sun,this.sun.target),this.skyMat=new Mn({side:Ft,depthWrite:!1,fog:!1,uniforms:{top:{value:new te},hor:{value:new te},sunDir:{value:new R},night:{value:0},cloud:{value:0}},vertexShader:"varying vec3 vD; void main(){ vD = normalize(position); vec4 p = projectionMatrix * modelViewMatrix * vec4(position, 1.0); gl_Position = p.xyww; }",fragmentShader:`uniform vec3 top; uniform vec3 hor; uniform vec3 sunDir; uniform float night; uniform float cloud; varying vec3 vD;
        void main(){ float h = clamp(vD.y, -0.1, 1.0); vec3 c = mix(hor, top, smoothstep(0.0, 0.6, h));
          float s = max(dot(normalize(vD), sunDir), 0.0); c += vec3(1.0, 0.85, 0.6) * (pow(s, 600.0) * 3.0 + pow(s, 12.0) * 0.25) * (1.0 - night) * (1.0 - cloud * 0.85);
          c = mix(c, vec3(dot(c, vec3(0.33))) * 0.95, cloud * 0.55);
          gl_FragColor = vec4(c, 1.0);
          #include <colorspace_fragment>
        }`}),this.sky=new qe(new hs(5e3,24,12),this.skyMat),this.sky.frustumCulled=!1,this.sky.renderOrder=-10,e.add(this.sky);const r=[];for(let l=0;l<900;l++){const h=Math.random()*2-1,u=Math.random()*Math.PI*2,f=Math.sqrt(1-h*h);h<.05||r.push(f*Math.cos(u)*4500,Math.abs(h)*4500,f*Math.sin(u)*4500)}const a=new ht;a.setAttribute("position",new Xe(r,3)),this.stars=new vc(a,new ha({color:16777215,size:2,sizeAttenuation:!1,transparent:!0,opacity:0,fog:!1,depthWrite:!1})),this.stars.frustumCulled=!1,e.add(this.stars);const o=new Mn({transparent:!0,depthWrite:!1,fog:!1,uniforms:{t:{value:0},amt:{value:.25},col:{value:new te(1,1,1)}},vertexShader:"varying vec2 vU; varying float vF; void main(){ vU = position.xz; vec4 w = modelMatrix * vec4(position,1.0); vF = 1.0 - smoothstep(1500.0, 4000.0, length(position.xz)); gl_Position = projectionMatrix * viewMatrix * w; }",fragmentShader:`uniform float t; uniform float amt; uniform vec3 col; varying vec2 vU; varying float vF;
        float h(vec2 p){ return fract(sin(dot(p, vec2(12.9898,78.233)))*43758.5453); }
        float n(vec2 p){ vec2 i=floor(p), f=fract(p); f=f*f*(3.0-2.0*f); return mix(mix(h(i),h(i+vec2(1,0)),f.x),mix(h(i+vec2(0,1)),h(i+vec2(1,1)),f.x),f.y); }
        void main(){ vec2 p = vU * 0.0012 + vec2(t * 0.004, t * 0.002); float v = n(p)*0.5 + n(p*2.1)*0.3 + n(p*4.3)*0.2; float a = smoothstep(1.0 - amt, 1.0 - amt + 0.25, v) * vF; gl_FragColor = vec4(col, a * 0.9);
          #include <colorspace_fragment>
        }`});this.clouds=new qe(new Vn(9e3,9e3).rotateX(-Math.PI/2),o),this.clouds.position.y=600,this.clouds.frustumCulled=!1,this.clouds.renderOrder=-5,e.add(this.clouds),this.rainN=i?700:1800,this.rainPos=new Float32Array(this.rainN*6);for(let l=0;l<this.rainN;l++)this.respawnDrop(l,new R,!0);const c=new ht;c.setAttribute("position",new Ke(this.rainPos,3)),this.rain=new du(c,new Ec({color:11187392,transparent:!0,opacity:.45,fog:!1})),this.rain.frustumCulled=!1,this.rain.visible=!1,e.add(this.rain)}respawnDrop(e,t,n){const i=t.x+(Math.random()-.5)*70,r=t.z+(Math.random()-.5)*70,a=t.y+(n?Math.random()*40-10:30),o=this.rainPos;o[e*6]=i,o[e*6+1]=a,o[e*6+2]=r,o[e*6+3]=i+.08,o[e*6+4]=a-.9,o[e*6+5]=r+.05}setWeather(e){this.weather=e}update(e,t,n){this.hour=(this.hour+e*this.timeScale)%24;const i=this.hour,r=Xt.clamp((i-7.2)/11.6,0,1),a=Xt.degToRad(Math.max(2,50*Math.sin(Math.PI*r))),o=Xt.degToRad(105+150*r);this.sunDir.set(Math.sin(o)*Math.cos(a),Math.sin(a),-Math.cos(o)*Math.cos(a)).normalize();const c=1-Math.min(1,Math.sin(a)/.5);this.night=Math.max(Xt.smoothstep(i,18.2,19.6),1-Xt.smoothstep(i,5.8,7.2));const l=c*(1-this.night),h={acik:[0,0,.18],bulutlu:[0,.15,.7],yagmur:[1,.25,.9],sis:[0,1,.5]}[this.weather],u=Math.min(1,e*.4);this.rainAmt+=(h[0]-this.rainAmt)*u,this.fogAmt+=(h[1]-this.fogAmt)*u;const f=this.weather==="acik"?.18:this.weather==="sis"?.5:this.weather==="bulutlu"?.7:.9,d=this.clouds.material;d.uniforms.amt.value+=(f-d.uniforms.amt.value)*u,d.uniforms.t.value+=e;const m=d.uniforms.amt.value;this.wet+=((this.weather==="yagmur"?1:0)-this.wet)*Math.min(1,e*(this.weather==="yagmur"?.15:.03));const p=qi.day.top.clone().lerp(qi.set.top,l*.7).lerp(qi.night.top,this.night),g=qi.day.hor.clone().lerp(qi.set.hor,l*.8).lerp(qi.night.hor,this.night),A=new te(10134443).multiplyScalar(1-this.night*.85);p.lerp(A,Math.max(0,m-.2)*.7),g.lerp(A.clone().multiplyScalar(1.1),Math.max(0,m-.2)*.6),this.fogAmt>.01&&(g.lerp(new te(12896459).multiplyScalar(1-this.night*.8),this.fogAmt*.8),p.lerp(g,this.fogAmt*.6)),this.skyMat.uniforms.top.value.copy(p),this.skyMat.uniforms.hor.value.copy(g),this.skyMat.uniforms.sunDir.value.copy(this.sunDir),this.skyMat.uniforms.night.value=this.night,this.skyMat.uniforms.cloud.value=Math.max(0,m-.2),d.uniforms.col.value.copy(g).lerp(new te(1,1,1),.5*(1-this.night)).multiplyScalar(1-m*.25),this.fog.color.set("#a49ca2").lerp(new te("#e0a07f"),c*.6*(1-this.night)).lerp(new te("#252c48"),this.night).lerp(g,Math.max(this.fogAmt,Math.max(0,m-.4))),this.fog.near=Xt.lerp(60,15,this.fogAmt)*(1-this.rainAmt*.4),this.fog.far=Xt.lerp(this.farFog,260,this.fogAmt)*(1-this.rainAmt*.35),this.stars.material.opacity=this.night*(1-m);const b=1-Math.max(0,m-.3)*.75,x=this.night;this.sun.color.set("#ffcf90").lerp(new te("#ff9a50"),c*.55),this.sun.intensity=(5.5-c*1.6)*(1-.85*x)*b,this.hemi.color.set("#b0a8b8").lerp(new te("#d0a585"),c*.6).lerp(new te("#5565a0"),x),this.hemi.groundColor.set("#7a6a5c").lerp(new te("#9a7458"),c*.6).lerp(new te("#2c3454"),x),this.hemi.intensity=(1.12+c*.15)*(1-.15*x)*(1+(1-b)*.5),x>.5&&this.sun.color.lerp(new te("#8fa6d8"),(x-.5)*2);const E=this.sunDir.clone();if(x>0&&(E.y=Math.max(E.y,.55*x),E.normalize()),this.sun.position.copy(n).addScaledVector(E,300),this.sun.target.position.copy(n),this.sky.position.copy(t),this.stars.position.copy(t),this.clouds.position.set(t.x,600,t.z),_i.uNight.value=Xt.smoothstep(this.night+(this.weather==="yagmur"||this.weather==="sis"?.15:0),.25,.8),_i.uWet.value=this.wet,qu.uNight.value=_i.uNight.value,this.rain.visible=this.rainAmt>.05,this.rain.visible){const C=this.rainPos,_=e*26,v=Math.floor(this.rainN*this.rainAmt);for(let w=0;w<this.rainN;w++){if(w>=v){C[w*6+1]=C[w*6+4]=-999;continue}C[w*6+1]-=_,C[w*6+4]-=_,C[w*6]+=e*1.5,C[w*6+3]+=e*1.5,(C[w*6+1]<t.y-15||Math.abs(C[w*6]-t.x)>40||Math.abs(C[w*6+2]-t.z)>40)&&this.respawnDrop(w,t,C[w*6+1]<-900)}this.rain.geometry.attributes.position.needsUpdate=!0}}hourText(){const e=Math.floor(this.hour),t=Math.floor((this.hour-e)*60);return`${String(e).padStart(2,"0")}:${String(t).padStart(2,"0")}`}}class $x{constructor(e,t,n,i,r,a){this.wheelEl=e,this.c={throttle:0,brake:0,steer:0,handbrake:!1,horn:!1},this.keys=new Set,this.touchSteer=0,this.steerId=null,this.steerX0=0,this.gas=!1,this.brk=!1,this.hb=!1,this.hornT=!1,this.touch=!1,this.kSteer=0,this.onKey=null,addEventListener("keydown",h=>{if(h.target?.tagName==="INPUT")return;const u=h.key.toLowerCase();this.keys.has(u)||this.onKey?.(u),this.keys.add(u),["arrowup","arrowdown","arrowleft","arrowright"," "].includes(u)&&h.preventDefault()}),addEventListener("keyup",h=>this.keys.delete(h.key.toLowerCase())),addEventListener("blur",()=>this.keys.clear());const o=()=>Math.min(innerWidth*.22,130);t.addEventListener("pointerdown",h=>{this.touch=!0,this.steerId=h.pointerId,this.steerX0=h.clientX,t.setPointerCapture(h.pointerId),this.touchSteer=0,h.preventDefault()}),t.addEventListener("pointermove",h=>{h.pointerId===this.steerId&&(this.touchSteer=Math.max(-1,Math.min(1,(h.clientX-this.steerX0)/o())))});const c=h=>{h.pointerId===this.steerId&&(this.steerId=null,this.touchSteer=0)};t.addEventListener("pointerup",c),t.addEventListener("pointercancel",c);const l=(h,u)=>{h.addEventListener("pointerdown",d=>{this.touch=!0,u(!0),h.classList.add("on"),h.setPointerCapture(d.pointerId),d.preventDefault()});const f=()=>{u(!1),h.classList.remove("on")};h.addEventListener("pointerup",f),h.addEventListener("pointercancel",f),h.addEventListener("lostpointercapture",f)};l(n,h=>this.gas=h),l(i,h=>this.brk=h),l(r,h=>this.hb=h),l(a,h=>this.hornT=h)}has(...e){return e.some(t=>this.keys.has(t))}update(e){const t=this.c,n=(this.has("d","arrowright")?1:0)-(this.has("a","arrowleft")?1:0);n!==0?this.kSteer+=(n-this.kSteer)*Math.min(1,e*5):this.kSteer+=(0-this.kSteer)*Math.min(1,e*9);let i=this.steerId!==null?this.touchSteer:this.kSteer,r=this.has("w","arrowup")||this.gas?1:0,a=this.has("s","arrowdown")||this.brk?1:0,o=this.has(" ")||this.hb;const c=navigator.getGamepads?[...navigator.getGamepads()].find(l=>l):null;if(c){const l=c.axes[0]??0;Math.abs(l)>.12&&(i=l),r=Math.max(r,c.buttons[7]?.value??0),a=Math.max(a,c.buttons[6]?.value??0),o=o||!!c.buttons[0]?.pressed}t.steer=i,t.throttle=r,t.brake=a,t.handbrake=o,t.horn=this.has("h")||this.hornT,this.wheelEl.style.transform=`rotate(${i*120}deg)`}}class eE{constructor(){this.ctx=null,this.muted=!1}start(){if(this.ctx){this.ctx.state!=="running"&&this.ctx.resume();return}const e=window.AudioContext||window.webkitAudioContext;if(!e)return;const t=this.ctx=new e;this.master=t.createGain(),this.master.gain.value=this.muted?0:.7,this.master.connect(t.destination);const n=t.sampleRate*2;this.noise=t.createBuffer(1,n,t.sampleRate);const i=this.noise.getChannelData(0);for(let d=0;d<n;d++)i[d]=Math.random()*2-1;const r=()=>{const d=t.createBufferSource();return d.buffer=this.noise,d.loop=!0,d.start(),d};this.eng1=t.createOscillator(),this.eng1.type="sawtooth",this.eng2=t.createOscillator(),this.eng2.type="square";const a=t.createWaveShaper(),o=new Float32Array(256);for(let d=0;d<256;d++){const m=d/128-1;o[d]=Math.tanh(m*2.2)}a.curve=o,this.engF=t.createBiquadFilter(),this.engF.type="lowpass",this.engF.Q.value=2,this.engG=t.createGain(),this.engG.gain.value=0;const c=t.createGain();c.gain.value=.5,this.eng1.connect(a),this.eng2.connect(c).connect(a),a.connect(this.engF).connect(this.engG).connect(this.master),this.eng1.start(),this.eng2.start();const l=t.createBiquadFilter();l.type="bandpass",l.frequency.value=1100,l.Q.value=6,this.tireG=t.createGain(),this.tireG.gain.value=0,r().connect(l).connect(this.tireG).connect(this.master),this.windF=t.createBiquadFilter(),this.windF.type="lowpass",this.windF.frequency.value=400,this.windG=t.createGain(),this.windG.gain.value=0,r().connect(this.windF).connect(this.windG).connect(this.master);const h=t.createBiquadFilter();h.type="highpass",h.frequency.value=2500,this.rainG=t.createGain(),this.rainG.gain.value=0,r().connect(h).connect(this.rainG).connect(this.master);const u=t.createBiquadFilter();u.type="lowpass",u.frequency.value=500,this.seaG=t.createGain(),this.seaG.gain.value=0,r().connect(u).connect(this.seaG).connect(this.master),this.hornG=t.createGain(),this.hornG.gain.value=0;const f=t.createBiquadFilter();f.type="lowpass",f.frequency.value=2200;for(const d of[415,494]){const m=t.createOscillator();m.type="square",m.frequency.value=d,m.connect(f),m.start()}f.connect(this.hornG).connect(this.master)}setMuted(e){this.muted=e,this.master&&(this.master.gain.value=e?0:.7)}update(e){if(!this.ctx)return;const t=this.ctx.currentTime,n=.05,i=e.rpm/60*2;this.eng1.frequency.setTargetAtTime(i,t,n),this.eng2.frequency.setTargetAtTime(i*.5,t,n),this.engF.frequency.setTargetAtTime(300+e.throttle*1400+e.rpm*.25,t,n),this.engG.gain.setTargetAtTime(.07+e.throttle*.1,t,n),this.tireG.gain.setTargetAtTime(Math.min(.35,Math.max(0,e.slip-2.5)*.06),t,.04),this.windF.frequency.setTargetAtTime(300+e.speed*18,t,.1),this.windG.gain.setTargetAtTime(Math.min(.25,e.speed*e.speed*18e-5),t,.1),this.rainG.gain.setTargetAtTime(e.rain*.12,t,.3),this.seaG.gain.setTargetAtTime(e.sea*(.05+.04*Math.sin(e.t*.7)),t,.3),this.hornG.gain.setTargetAtTime(e.horn?.12:0,t,.01)}bump(e){if(!this.ctx)return;const t=this.ctx,n=t.currentTime,i=t.createBufferSource();i.buffer=this.noise;const r=t.createBiquadFilter();r.type="lowpass",r.frequency.value=600+e*900;const a=t.createGain();a.gain.setValueAtTime(Math.min(.8,.15+e*.7),n),a.gain.exponentialRampToValueAtTime(.001,n+.35),i.connect(r).connect(a).connect(this.master),i.start(n,Math.random()),i.stop(n+.4);const o=t.createOscillator();o.frequency.setValueAtTime(90,n),o.frequency.exponentialRampToValueAtTime(40,n+.25);const c=t.createGain();c.gain.setValueAtTime(.5*e,n),c.gain.exponentialRampToValueAtTime(.001,n+.3),o.connect(c).connect(this.master),o.start(n),o.stop(n+.3)}chime(e){if(!this.ctx)return;const t=this.ctx,n=t.currentTime;(e?[660,880,1320]:[440,330]).forEach((i,r)=>{const a=t.createOscillator();a.type="triangle",a.frequency.value=i;const o=t.createGain();o.gain.setValueAtTime(0,n+r*.11),o.gain.linearRampToValueAtTime(.18,n+r*.11+.02),o.gain.exponentialRampToValueAtTime(.001,n+r*.11+.3),a.connect(o).connect(this.master),a.start(n+r*.11),a.stop(n+r*.11+.35)})}splash(){if(!this.ctx)return;const e=this.ctx,t=e.currentTime,n=e.createBufferSource();n.buffer=this.noise;const i=e.createBiquadFilter();i.type="lowpass",i.frequency.setValueAtTime(3e3,t),i.frequency.exponentialRampToValueAtTime(200,t+1.2);const r=e.createGain();r.gain.setValueAtTime(.6,t),r.gain.exponentialRampToValueAtTime(.001,t+1.4),n.connect(i).connect(r).connect(this.master),n.start(t),n.stop(t+1.5)}}const ic=(s,e,t)=>s+(e-s)*t,sc=(s,e,t)=>{const n=Math.min(1,Math.max(0,(t-s)/(e-s)));return n*n*(3-2*n)};function lo(s,e){if(e<=s[0][0])return s[0][1];for(let t=1;t<s.length;t++)if(e<=s[t][0]){const n=(e-s[t-1][0])/(s[t][0]-s[t-1][0]);return ic(s[t-1][1],s[t][1],n*n*(3-2*n))}return s[s.length-1][1]}function Ih(s,e,t,n=!0){const i=s.map(b=>{const x=[];for(let E=0;E<e;E++){const C=E/e*Math.PI*2-Math.PI/2,_=Math.cos(C),v=Math.sin(C),w=2/b.n,M=(b.y0+b.y1)/2,y=(b.y1-b.y0)/2,B=M+y*Math.sign(v)*Math.pow(Math.abs(v),w),U=1-b.taper*sc(b.y0,b.y1,B);x.push([b.w*U*Math.sign(_)*Math.pow(Math.abs(_),w),B,b.z])}return x}),r=i.map((b,x)=>b.map((E,C)=>{const _=i[Math.min(i.length-1,x+1)][C],v=i[Math.max(0,x-1)][C],w=b[(C+1)%e],M=b[(C+e-1)%e],y=new R(_[0]-v[0],_[1]-v[1],_[2]-v[2]),B=new R(w[0]-M[0],w[1]-M[1],w[2]-M[2]),U=new R().crossVectors(y,B).normalize(),L=(s[x].y0+s[x].y1)/2;return U.lengthSq()<.5&&U.set(E[0],E[1]-L,0).normalize(),U.x*E[0]+U.y*(E[1]-L)<0&&U.negate(),U})),a=[],o=[],c=[],l=(b,x,E)=>{const C=i[b][x%e],_=r[b][x%e];a.push(C[0],C[1],C[2]),o.push(_.x,_.y,_.z),c.push(E.r,E.g,E.b)};for(let b=0;b<s.length-1;b++)for(let x=0;x<e;x++){const E=(s[b].z+s[b+1].z)/2,C=(i[b][x][1]+i[b][(x+1)%e][1]+i[b+1][x][1]+i[b+1][(x+1)%e][1])/4,_=t(E,(x+.5)/e,C);l(b,x,_),l(b,x+1,_),l(b+1,x+1,_),l(b,x,_),l(b+1,x+1,_),l(b+1,x,_)}if(n)for(const[b,x]of[[0,!1],[s.length-1,!0]]){const E=i[b],C=0,_=(s[b].y0+s[b].y1)/2,v=x?1:-1,w=t(s[b].z,.25,_);for(let M=0;M<e;M++){const y=E[M],B=E[(M+1)%e],U=x?[[C,_,s[b].z],y,B]:[[C,_,s[b].z],B,y];for(const L of U)a.push(L[0],L[1],L[2]),o.push(0,0,v),c.push(w.r,w.g,w.b)}}const h=new ht;h.setAttribute("position",new Xe(a,3)),h.setAttribute("normal",new Xe(o,3)),h.setAttribute("color",new Xe(c,3));const u=h.attributes.position,f=h.attributes.normal,d=new R,m=new R,p=new R,g=new R,A=new R;for(let b=0;b<u.count;b+=3)if(d.fromBufferAttribute(u,b),m.fromBufferAttribute(u,b+1),p.fromBufferAttribute(u,b+2),g.crossVectors(m.clone().sub(d),p.clone().sub(d)),A.fromBufferAttribute(f,b),g.dot(A)<0)for(const x of[u,f,h.attributes.color]){const E=x.getX(b+1),C=x.getY(b+1),_=x.getZ(b+1);x.setXYZ(b+1,x.getX(b+2),x.getY(b+2),x.getZ(b+2)),x.setXYZ(b+2,E,C,_)}return h}function ei(s,e){s.index&&(s=s.toNonIndexed()),s.deleteAttribute("uv");const t=s.attributes.position.count,n=new Float32Array(t*3);for(let i=0;i<t;i++)n[i*3]=e.r,n[i*3+1]=e.g,n[i*3+2]=e.b;return s.setAttribute("color",new Ke(n,3)),s.clearGroups(),s}const tn=(s,e,t,n,i,r,a)=>ei(new yt(s,e,t).translate(n,i,r),a),At={length:4.5,halfW:.9,wheelR:.33,wheelZ:1.36,wheelX:.8},ho=new te("#0d1218"),pi=new te("#0c0d0f"),uo=new te("#c8ccd2"),tE=new te("#0b0b0c"),Cs=new te("#b9bdc4");function Ku(s,e,t=!1){const n=new te(s),i=[],r=e?34:14,a=e?28:14,o=At.length/2,c=[[-2.25,.9],[-2.16,.98],[-1.5,1.01],[-1.3,1],[1,.98],[1.6,.93],[2.1,.86],[2.25,.76]],l=[[-2.25,.38],[-2.1,.29],[2.05,.27],[2.25,.36]],h=[];for(let m=0;m<r;m++){const p=m/(r-1),g=-o+p*2*o,A=Math.abs(g)/o,b=At.halfW*(1-.07*Math.pow(A,3))*(1-.13*sc(.93,1,A));h.push({z:g,w:b,y0:lo(l,g),y1:lo(c,g),n:ic(4.6,2.8,sc(.8,1,A)),taper:.04})}i.push(Ih(h,a,(m,p,g)=>g<.4||Math.abs(m)>o-.16&&g<.56?pi:n));const u=[[-1.5,.96],[-.95,1.43],[-.3,1.48],[.25,1.46],[1.12,.95]],f=[],d=e?22:9;for(let m=0;m<d;m++){const p=ic(-1.5,1.12,m/(d-1));f.push({z:p,w:.86*(1-.05*Math.pow(Math.abs(p+.17)/1.3,3)),y0:.9,y1:Math.max(.93,lo(u,p)),n:4.2,taper:.17})}if(i.push(Ih(f,a,(m,p,g)=>{const A=p>.4&&p<.6;return m>-.95&&m<.27?A||g>1.37||g<1.01||Math.abs(m+.32)<.07?n:ho:Math.abs(p-.5)>.17&&Math.abs(p-.5)<.22||g<1?n:ho})),e){for(const m of[-1,1])for(const p of[At.wheelZ,-1.36]){const g=new er,A=At.wheelR+.1,b=Math.asin((.3-At.wheelR)/A);g.absarc(0,0,A,b,Math.PI-b,!1),g.closePath(),i.push(ei(new wc(g,14).rotateY(m*Math.PI/2).translate(m*(At.halfW-.012),At.wheelR,p),pi)),i.push(tn(.012,.6,.014,m*(At.halfW-.004),.68,.28,pi),tn(.012,.56,.014,m*(At.halfW-.004),.7,-.74,pi)),i.push(tn(.02,.03,.16,m*(At.halfW+.002),.84,-.05,uo),tn(.02,.03,.16,m*(At.halfW+.002),.84,-1,uo)),i.push(tn(.15,.09,.08,m*(At.halfW+.02),1.04,.86,n),tn(.13,.075,.012,m*(At.halfW+.02),1.04,.815,ho))}i.push(tn(.9,.14,.04,0,.52,2.24,pi)),i.push(tn(.5,.03,.04,0,.72,2.235,uo)),i.push(tn(.5,.11,.02,0,.42,2.235,new te("#e9e9e4")).translate(0,0,.03),tn(.5,.11,.02,0,.62,-2.275,new te("#e9e9e4"))),i.push(tn(.9,.04,.06,0,.34,-2.2,pi)),t&&i.push(tn(.6,.16,.24,0,1.52,-.3,new te("#f7f3e8")))}return Kt(i)}function Ju(s){const e=At.wheelR,t=.215,n=[],i=[[e*.58,-t/2],[e*.93,-t/2],[e,-t/2+.035],[e,t/2-.035],[e*.93,t/2],[e*.58,t/2]].map(([r,a])=>new oe(r,a));if(n.push(ei(new fa(i,s?22:12).rotateZ(Math.PI/2),tE)),n.push(ei(new jt(e*.6,e*.6,t*.9,s?18:10,1,!1).rotateZ(Math.PI/2),s?new te("#2a2c30"):Cs)),s){for(let r=0;r<5;r++){const a=r/5*Math.PI*2;n.push(ei(new yt(t+.012,e*.52,.055).translate(0,e*.3,0).rotateX(a),Cs))}n.push(ei(new jt(.06,.06,t+.02,10).rotateZ(Math.PI/2),Cs)),n.push(ei(new Zr(e*.6,.014,6,20).rotateY(Math.PI/2).translate(t/2,0,0),Cs),ei(new Zr(e*.6,.014,6,20).rotateY(Math.PI/2).translate(-t/2,0,0),Cs))}return Kt(n)}function Zu(){return new Ii({vertexColors:!0,metalness:.45,roughness:.3,envMapIntensity:.9})}function nE(){return new Ii({vertexColors:!0,metalness:.5,roughness:.5,envMapIntensity:.7})}function ta(s){const e=s?2.2:-2.21,t=s?.74:.84,n=[];for(const i of[-1,1]){const r=new hs(1,10,8).scale(.2,s?.075:.07,.06).rotateY(i*(s?-.3:.3)).translate(i*.56,t,e);r.deleteAttribute("uv"),n.push(r.index?r.toNonIndexed():r)}return Kt(n)}function xt(s,e,t,n,i,r,a){const o=new yt(s,e,t).translate(n,i,r).toNonIndexed(),c=o.attributes.position.count,l=new Float32Array(c*3);for(let h=0;h<c;h++)l[h*3]=a.r,l[h*3+1]=a.g,l[h*3+2]=a.b;return o.setAttribute("color",new Ke(l,3)),o}function iE(s,e){s.index&&(s=s.toNonIndexed());const t=s.attributes.position.count,n=new Float32Array(t*3);for(let i=0;i<t;i++)n[i*3]=e.r,n[i*3+1]=e.g,n[i*3+2]=e.b;return s.setAttribute("color",new Ke(n,3)),s.clearGroups(),s}function fo(s,e,t,n,i=0){const r=new er;s(r);const a=new Aa(r,{depth:e-2*t,bevelEnabled:!0,bevelThickness:t,bevelSize:t,bevelSegments:2,curveSegments:10});return a.translate(0,i,-(e-2*t)/2).rotateY(-Math.PI/2),iE(a,n)}function sE(s,e=!1,t="car"){const n=new te(s),i=new te("#1c1f24"),r=new te("#25303b"),a=new te("#b9bec4"),o=new te("#111"),c=[];if(t==="bus")return c.push(xt(2.5,2.6,11,0,1.75,0,n),xt(2.52,.9,10.2,0,2.3,.2,r),xt(2.4,.3,11,0,.45,0,i),xt(2.3,1.1,.05,0,2.2,5.51,r)),Kt(c);if(t==="van")return c.push(xt(1.95,1.5,4.9,0,1.2,0,n),xt(1.9,.75,1.5,0,2.3,1.2,r),xt(1.92,.75,3.2,0,2.3,-1.15,n),xt(1.95,.3,4.9,0,.45,0,i)),Kt(c);const l=.43,h=1.35,u=.3;c.push(fo(f=>{f.moveTo(-2.12,u),f.lineTo(-h-l,u),f.absarc(-h,u,l,Math.PI,0,!0),f.lineTo(h-l,u),f.absarc(h,u,l,Math.PI,0,!0),f.lineTo(2.1,u),f.quadraticCurveTo(2.2,.36,2.18,.58),f.quadraticCurveTo(2.16,.78,1.95,.84),f.lineTo(1.05,.95),f.lineTo(-1.3,.97),f.lineTo(-1.95,.94),f.quadraticCurveTo(-2.16,.9,-2.17,.7),f.lineTo(-2.17,.42),f.closePath()},1.82,.07,n)),c.push(fo(f=>{f.moveTo(-1.34,.92),f.lineTo(1,.92),f.quadraticCurveTo(.62,1.22,.3,1.39),f.lineTo(-.92,1.41),f.quadraticCurveTo(-1.2,1.2,-1.34,.92)},1.56,.06,r)),c.push(fo(f=>{f.moveTo(-.92,1.38),f.lineTo(.3,1.36),f.lineTo(.24,1.44),f.lineTo(-.86,1.46),f.closePath()},1.5,.05,n)),c.push(xt(1.6,.46,.1,0,1.16,-.3,n)),c.push(xt(1.88,.16,.14,0,.36,2.18,i),xt(1.88,.16,.14,0,.38,-2.19,i)),c.push(xt(.9,.12,.05,0,.58,2.235,o),xt(.52,.12,.03,0,.44,2.23,a),xt(.52,.12,.03,0,.56,-2.255,a)),c.push(xt(1.86,.08,1.7,0,u+.04,0,i));for(const f of[-.99,.99])c.push(xt(.16,.1,.2,f,1.02,.82,n),xt(.04,.08,.16,f*1.06,1.02,.84,r));for(const f of[-.92,.92])c.push(xt(.01,.55,.02,f,.66,.15,i),xt(.01,.5,.02,f,.68,-1,i));return e&&c.push(xt(.75,.22,.3,0,1.58,-.3,new te("#f7f3e8"))),Kt(c.map(f=>(f.attributes.uv||f.setAttribute("uv",new Ke(new Float32Array(f.attributes.position.count*2),2)),f)))}class rE{constructor(){this.grid=new Map,this.segs=[],this.C=16}rebuild(e){this.grid.clear(),this.segs=[...e],this.segs.forEach((t,n)=>{for(let i=0;i<t.length;i+=4){const r=Math.min(t[i],t[i+2]),a=Math.max(t[i],t[i+2]),o=Math.min(t[i+1],t[i+3]),c=Math.max(t[i+1],t[i+3]);for(let l=Math.floor(r/this.C);l<=Math.floor(a/this.C);l++)for(let h=Math.floor(o/this.C);h<=Math.floor(c/this.C);h++){const u=l*100003+h;let f=this.grid.get(u);f||this.grid.set(u,f=[]),f.push(n,i)}}})}push(e,t,n){let i=0,r=0,a=0;const o=new Set;for(let c=Math.floor((e-n)/this.C);c<=Math.floor((e+n)/this.C);c++)for(let l=Math.floor((t-n)/this.C);l<=Math.floor((t+n)/this.C);l++){const h=this.grid.get(c*100003+l);if(h)for(let u=0;u<h.length;u+=2){const f=h[u]*1e7+h[u+1];if(o.has(f))continue;o.add(f);const d=this.segs[h[u]],m=h[u+1],p=d[m],g=d[m+1],A=d[m+2]-p,b=d[m+3]-g,x=A*A+b*b||1e-6,E=Math.max(0,Math.min(1,((e-p)*A+(t-g)*b)/x)),C=e-(p+A*E),_=t-(g+b*E),v=Math.hypot(C,_);if(v<n&&v>1e-4){const w=n-v;i+=C/v*w,r+=_/v*w,a=Math.max(a,w)}}}return a>0?[i,r,a]:null}}const Is=[0,11,19,27,35,44];class aE{constructor(e,t,n,i){this.G=e,this.R=t,this.walls=n,this.x=0,this.z=0,this.y=0,this.vy=0,this.yaw=0,this.vx=0,this.vz=0,this.yawRate=0,this.steer=0,this.rpm=900,this.gear=1,this.slip=0,this.pitch=0,this.roll=0,this.airborne=!1,this.vmax=36,this.damage=0,this.lastHit=0,this.inWater=0,this.aLong=0,this.offroad=0,this.offT=0,this.bodyP=0,this.bodyR=0,this.bodyPv=0,this.bodyRv=0,this.rumble=0,this.shell=new Bt,this.safe={x:0,z:0,yaw:0},this.safeT=0,this.obj=new Bt,this.wheels=[],this.spin=0,this.onHit=null,this.onSplash=null,this.body=new qe(Ku("#1b4f8f",1),Zu()),this.body.castShadow=!0,this.obj.add(this.shell),this.shell.add(this.body);const r=Ju(1),a=nE();for(const[o,c]of[[-.8,At.wheelZ],[At.wheelX,At.wheelZ],[-.8,-1.36],[At.wheelX,-1.36]]){const l=new qe(r,a);l.position.set(o,At.wheelR,c),l.castShadow=!0,this.obj.add(l),this.wheels.push(l)}if(this.headMat=new Tt({color:"#fff6dc"}),this.brakeMat=new Tt({color:"#5a0d0d"}),this.shell.add(new qe(ta(!0),this.headMat),new qe(ta(!1),this.brakeMat)),i){const o=new yu(16773328,0,70,.55,.5,1.2);o.position.set(0,.9,2),o.target.position.set(0,0,20),this.obj.add(o,o.target),this.headlight=o}else this.headlight=null;this.poolMat=new Tt({map:Xu(!1),transparent:!0,blending:Gr,depthWrite:!1,opacity:0,polygonOffset:!0,polygonOffsetFactor:-4,polygonOffsetUnits:-12}),this.pool=new qe(new Vn(9,20).rotateX(-Math.PI/2).translate(0,0,13),this.poolMat),this.pool.renderOrder=4,this.pool.frustumCulled=!1}get groundFx(){return this.pool}get speed(){return Math.hypot(this.vx,this.vz)}get fwd(){return[Math.sin(this.yaw),Math.cos(this.yaw)]}get vLong(){const[e,t]=this.fwd;return this.vx*e+this.vz*t}place(e,t,n){this.x=e,this.z=t,this.yaw=n,this.vx=this.vz=this.vy=0,this.yawRate=0,this.y=this.groundY(e,t,this.G.H(e,t)+2),this.inWater=0,this.safe={x:e,z:t,yaw:n}}resetToRoad(){const e=this.R.nearest(this.safe.x,this.safe.z,80,t=>t.code<=7);if(e){const t=Math.atan2(e.dx,e.dz);this.place(e.px,e.pz,this.vLong<0?t+Math.PI:t)}else this.place(this.safe.x,this.safe.z,this.safe.yaw)}groundY(e,t,n){const i=this.G.H(e,t),r=this.R.deckAt(e,t,n);return r!==null&&r>i-.5?r+.05:i}step(e,t,n){const[i,r]=this.fwd,a=-r,o=i;let c=this.vx*i+this.vz*r,l=this.vx*a+this.vz*o;const h=Math.abs(c),u=.62/(1+h/14);this.steer+=(t.steer*u-this.steer)*Math.min(1,e*10);const f=!this.airborne;let d=0;if(f){const j=t.throttle,Z=t.brake;j>0&&(c<-.5?d+=14*j:d+=7.5*j*Math.pow(Math.max(0,1-c/this.vmax),.7)+(c<5?2*j:0)),Z>0&&(c>.5?d-=13*Z:j===0&&(d-=5*Z*(c>-9?1:0))),t.handbrake&&Math.abs(c)>.2&&(d-=Math.sign(c)*4),d-=Math.sign(c)*(.35+.0012*c*c)*(Math.abs(c)>.05?1:0),j===0&&Z===0&&Math.abs(c)<.4&&(c*=Math.max(0,1-e*4)),d-=9.81*Math.sin(this.pitch)*.9,d-=Math.sign(c)*this.offroad*(1+.02*c*c)*(Math.abs(c)>.3?1:0)}if(c+=d*e,this.aLong+=(d-this.aLong)*Math.min(1,e*6),this.offT-=e,this.offT<=0){this.offT=.05;const j=this.R.nearest(this.x,this.z,16,void 0,this.y),Z=!!j&&j.d<this.R.halfAt(j.w,j.k,j.t)+2.6;this.offroad+=((Z?0:1)-this.offroad)*.25}const m=(f?t.handbrake?1.3:7.5-Math.min(3,h/12):.2)*(1-.4*this.offroad),p=l;l*=Math.exp(-m*e),this.slip=Math.abs(p)+(t.brake>0&&h>8&&c>0?h*.15:0)+(t.handbrake&&h>4?4:0);let A=c*Math.tan(this.steer)/2.6;t.handbrake&&(A*=1.45),f||(A=this.yawRate),this.yawRate+=(A-this.yawRate)*Math.min(1,e*(t.handbrake?4:9)),this.yaw-=this.yawRate*e;const[b,x]=this.fwd,E=-x,C=b;this.vx=b*c+E*l,this.vz=x*c+C*l,this.x+=this.vx*e,this.z+=this.vz*e;let _=0;for(const j of[1.35,0,-1.35]){const Z=this.x+b*j,ie=this.z+x*j,le=this.walls.push(Z,ie,1);if(le){this.x+=le[0],this.z+=le[1];const Te=Math.hypot(le[0],le[1])||1,q=le[0]/Te,se=le[1]/Te,ue=this.vx*q+this.vz*se;ue<0&&(this.vx-=ue*q*1.25,this.vz-=ue*se*1.25,_=Math.max(_,-ue)),this.vx*=.985,this.vz*=.985}}for(const j of n){const Z=this.x-j.x,ie=this.z-j.z,le=Math.hypot(Z,ie),Te=2+j.r;if(le<Te&&le>.001){const q=Z/le,se=ie/le,ue=Te-le;this.x+=q*ue*.7,this.z+=se*ue*.7;const re=(this.vx-j.vx)*q+(this.vz-j.vz)*se;re<0&&(this.vx-=re*q*.9,this.vz-=re*se*.9,_=Math.max(_,-re),j.hit?.(-re))}}_>2.5&&performance.now()-this.lastHit>250&&(this.lastHit=performance.now(),this.damage=Math.min(100,this.damage+_*.8),this.onHit?.(Math.min(1,_/15)));const v=this.groundY(this.x,this.z,this.y);this.vy-=9.81*e,this.y+=this.vy*e,this.y<=v?(this.airborne&&this.vy<-6&&this.onHit?.(Math.min(1,-this.vy/20)),this.y=v,this.vy=0,this.airborne=!1):this.y>v+.35&&(this.airborne=!0);const w=this.groundY(this.x+b*1.35,this.z+x*1.35,this.y),M=this.groundY(this.x-b*1.35,this.z-x*1.35,this.y),y=this.groundY(this.x+E*.85,this.z+C*.85,this.y),B=this.groundY(this.x-E*.85,this.z-C*.85,this.y),U=Math.atan2(w-M,2.7),L=Math.atan2(y-B,1.7);this.airborne||(this.pitch+=(U-this.pitch)*Math.min(1,e*12),this.roll+=(L-this.roll)*Math.min(1,e*12)),this.G.kindAt(this.x,this.z)===1&&this.y<.6?(this.inWater+=e,this.vx*=1-e*3,this.vz*=1-e*3,this.inWater>0&&this.inWater-e<=0&&this.onSplash?.(),this.inWater>1.6&&this.resetToRoad()):(this.inWater=0,this.safeT+=e,this.safeT>1&&!this.airborne&&(this.safeT=0,this.R.nearest(this.x,this.z,6,void 0,this.y)&&(this.safe={x:this.x,z:this.z,yaw:this.yaw})));const z=Math.abs(c);for(;this.gear<Is.length-1&&z>Is[this.gear]*.93;)this.gear++;for(;this.gear>1&&z<Is[this.gear-1]*.62;)this.gear--;const N=Is[this.gear-1]*.5,H=Is[this.gear],O=c<-.3?900+z*260:850+Math.max(0,(z-N)/(H-N))*5200+t.throttle*(this.gear===1&&z<3?1800:300);this.rpm+=(Math.min(6800,O)-this.rpm)*Math.min(1,e*8),this.spin+=c*e/At.wheelR}sync(e,t,n=1/60){this.obj.position.set(this.x,this.y,this.z),this.obj.rotation.set(0,0,0),this.obj.rotateY(this.yaw),this.obj.rotateX(-this.pitch),this.obj.rotateZ(-this.roll);const i=Xt.clamp(-this.aLong*.0045,-.05,.06),r=Xt.clamp(-this.yawRate*this.vLong*.011,-.075,.075),a=90,o=11,c=Math.min(n,1/30);this.bodyPv+=((i-this.bodyP)*a-this.bodyPv*o)*c,this.bodyP+=this.bodyPv*c,this.bodyRv+=((r-this.bodyR)*a-this.bodyRv*o)*c,this.bodyR+=this.bodyRv*c,this.rumble+=n*(8+this.speed*2.2);const l=this.offroad*Math.min(1,this.speed/8)*(this.airborne?0:1);this.shell.rotation.set(this.bodyP+Math.sin(this.rumble*1.7)*.008*l,0,this.bodyR+Math.sin(this.rumble*2.3)*.012*l),this.shell.position.y=Math.abs(Math.sin(this.rumble))*.035*l-Math.abs(this.bodyP)*.25,this.wheels.forEach((f,d)=>{f.rotation.set(this.spin,d<2?-this.steer:0,0,"YXZ")}),this.brakeMat.color.set(e.brake>0&&this.vLong>.3?"#ff2a1a":t>.3?"#b3160f":"#7a1210"),this.headMat.color.set(t>.3?"#ffffff":"#dfe3e6"),this.headlight&&(this.headlight.intensity=t*60),this.poolMat.opacity=t*(this.headlight?.25:.55),this.pool.visible=t>.05;const[h,u]=this.fwd;this.pool.position.set(this.x,this.G.H(this.x+h*12,this.z+u*12)+.3,this.z),this.pool.rotation.set(0,this.yaw,0)}}const wh=13,Sh=11,Ao=3,Bh=1.5;class oE{constructor(e,t,n){this.R=e,this.G=t,this.list=[],this.byNode=new Map,this.t=0,this.shown=[],this.last=new oe(1e9,1e9),this.redState=new Map,this.onRedRun=null;for(const r of e.nodes){const a=r.ways.filter(f=>Bu.has(e.ways[f.w].code)&&e.ways[f.w].code!==7);if(a.length<3||!a.some(f=>e.ways[f.w].code<=4))continue;const o=a.map(f=>{const d=e.ways[f.w],m=d.pts.length/2;let p=f.end===0?0:m-1;const g=f.end===0?1:-1;let A=0,b=0;for(let E=0;E<3&&p+g>=0&&p+g<m;E++,p+=g)A=d.pts[2*(p+g)]-r.x,b=d.pts[2*(p+g)+1]-r.z;const x=Math.hypot(A,b)||1;return{w:f.w,end:f.end,dx:A/x,dz:b/x,hw:d.width/2,phase:0}}),c=Math.atan2(o[0].dz,o[0].dx);let l=0;for(const f of o){let d=Math.abs(((Math.atan2(f.dz,f.dx)-c)%Math.PI+Math.PI)%Math.PI);d=Math.min(d,Math.PI-d),f.phase=d<.7?0:1,l+=f.phase}if(l===0||l===o.length)continue;const h=Math.max(...o.map(f=>f.hw))+4,u={node:r,ap:o,stop:h,off:r.id*7.31%30,cycle:wh+Sh+2*(Ao+Bh)};this.list.push(u),this.byNode.set(r.id,u)}const i=new Yt({color:"#30343a"});this.poles=new _t(new jt(.08,.1,3.4,6).translate(0,1.7,0),i,600),this.heads=new _t(new yt(.34,1,.26).translate(0,3.6,0),i,600),this.lamps=new _t(new hs(.11,8,6),new Tt({color:16777215}),1800),this.stripes=new _t(new yt(1,.03,1),new Yt({color:"#ecebe4",polygonOffset:!0,polygonOffsetFactor:-3,polygonOffsetUnits:-8}),4e3);for(const r of[this.poles,this.heads,this.lamps,this.stripes])r.count=0,r.frustumCulled=!1,n.add(r);this.poles.castShadow=this.heads.castShadow=!0,this.stripes.receiveShadow=!0}state(e,t){const n=this.byNode.get(e);if(!n)return"g";const i=n.ap.find(r=>r.w===t);return i?this.phaseLight(n,i.phase):"g"}stopDist(e){return this.byNode.get(e)?.stop??0}phaseLight(e,t){const n=(this.t+e.off)%e.cycle,i=wh,r=i+Ao,a=r+Bh,o=a+Sh,c=o+Ao;return t===0?n<i?"g":n<r?"y":"r":n>=a&&n<o?"g":n>=o&&n<c?"y":"r"}rebuild(e,t){this.shown=[];let n=0,i=0;const r=new Ne,a=new Jt,o=new R(1,1,1),c=new R,l=new R(0,1,0);for(const h of this.list)if(!(Math.hypot(h.node.x-e,h.node.z-t)>420))for(const u of h.ap){if(n>=600)break;const f=this.R.ways[u.w];if(f.oneway&&u.end===0)continue;const d=u.dz,m=-u.dx,p=h.node.x+u.dx*(h.stop-1)+d*(u.hw+1.1),g=h.node.z+u.dz*(h.stop-1)+m*(u.hw+1.1),A=this.G.H(p,g),b=Math.atan2(u.dx,u.dz);a.setFromAxisAngle(l,b),c.set(p,A,g),r.compose(c,a,o),this.poles.setMatrixAt(n,r),this.heads.setMatrixAt(n,r),this.shown.push({s:h,a:u,i:n}),n++;const x=h.node.x+u.dx*h.stop,E=h.node.z+u.dz*h.stop;f.oneway&&u.hw;const C=f.oneway?f.width:u.hw,_=f.oneway?0:u.hw/2,v=x+d*_,w=E+m*_;a.setFromAxisAngle(l,b),c.set(v,this.G.H(v,w)+.08,w),o.set(C-.3,1,.4),r.compose(c,a,o),i<4e3&&this.stripes.setMatrixAt(i++,r);for(let M=-u.hw+.5;M<u.hw-.3&&i<4e3;M+=1){const y=h.node.x+u.dx*(h.stop-2.2)+d*M,B=h.node.z+u.dz*(h.stop-2.2)+m*M;c.set(y,this.G.H(y,B)+.08,B),o.set(.5,1,2.6),r.compose(c,a,o),this.stripes.setMatrixAt(i++,r)}o.set(1,1,1)}this.poles.count=this.heads.count=n,this.lamps.count=n*3,this.stripes.count=i,this.poles.instanceMatrix.needsUpdate=this.heads.instanceMatrix.needsUpdate=this.stripes.instanceMatrix.needsUpdate=!0}update(e,t){this.t+=e,this.last.distanceTo(new oe(t.x,t.z))>80&&(this.last.set(t.x,t.z),this.rebuild(t.x,t.z));const n=new Ne,i=new Jt,r=new R(1,1,1),a=new R,o=new R(0,1,0),c=new te,l=new te("#2a2a2a"),h={r:new te("#ff3020"),y:new te("#ffb000"),g:new te("#30e070")};for(const{s:f,a:d,i:m}of this.shown){const p=this.phaseLight(f,d.phase),g=d.dz,A=-d.dx,b=f.node.x+d.dx*(f.stop-1)+g*(d.hw+1.1),x=f.node.z+d.dz*(f.stop-1)+A*(d.hw+1.1),E=this.G.H(b,x);i.setFromAxisAngle(o,Math.atan2(d.dx,d.dz)),["r","y","g"].forEach((C,_)=>{a.set(b+d.dx*.14,E+3.95-_*.33,x+d.dz*.14),n.compose(a,i,r),this.lamps.setMatrixAt(m*3+_,n),this.lamps.setColorAt(m*3+_,p===C?c.copy(h[C]).multiplyScalar(2.2):l)})}this.lamps.instanceMatrix.needsUpdate=!0,this.lamps.instanceColor&&(this.lamps.instanceColor.needsUpdate=!0);const u=this.R.nearest(t.x,t.z,10,void 0,t.y);for(const f of this.list){const d=Math.hypot(f.node.x-t.x,f.node.z-t.z);if(d>40){this.redState.delete(f.node.id);continue}const m=this.redState.get(f.node.id)||{inside:!1,light:"g"},p=d<f.stop-1.5;if(!p&&u&&(u.w.a===f.node.id||u.w.b===f.node.id)&&(m.light=this.state(f.node.id,u.w.i)),p&&!m.inside&&m.light==="r"&&t.vLong>3){const g=[(f.node.x-t.x)/(d||1),(f.node.z-t.z)/(d||1)];g[0]*t.fwd[0]+g[1]*t.fwd[1]>.3&&this.onRedRun?.()}m.inside=p,this.redState.set(f.node.id,m)}}}const Th={1:16,2:13.5,3:11.5,4:10,5:10,6:8,7:5,9:9.5},Ur=["#f2c200","#f2c200","#f2c200","#f4f4f2","#f4f4f2","#d0d2d4","#2a2c30","#1f3b70","#8a1c1c","#7d8a93","#4a5a3a","#c9b48a","#9a9ea3"],cE=["#2d4a7a","#7a2d2d","#3d3d3d","#d9d2c3","#5b7a3a","#a86b2d","#6b4a8a","#c94f3d","#1e1e1e","#8fa8c8","#e6e1d6"];class lE{constructor(e,t,n,i,r,a,o=90){this.R=e,this.G=t,this.sig=n,this.nCar=r,this.nPed=a,this.nPark=o,this.cars=[],this.peds=[],this.obstacles=[],this.tmpM=new Ne,this.q=new Jt,this.e=new Zt,this.P=new R,this.S=new R(1,1,1),this.onPedHit=null,this.parkMesh=null,this.parked=[],this.parkAt=[1e9,1e9],this.driveWays=e.ways.filter(f=>f.code!==8&&f.code!==7&&f.len>25),this.walkWays=e.ways.filter(f=>f.code>=2&&f.code<=7&&!f.bridge&&f.len>20);const c=new Yt({vertexColors:!0}),l=f=>(f.index&&(f=f.toNonIndexed()),f.deleteAttribute("uv"),f),h=(f,d,m,p=1)=>f.flatMap(g=>[-d,d].map(A=>Ju(0).scale(p,p,p).translate(A,m,g)));this.carMesh=new _t(Kt([Ku("#ffffff",0),...h([At.wheelZ,-1.36],At.wheelX,At.wheelR)]),Zu(),r),this.busMesh=new _t(Kt([l(sE("#ffffff",!1,"bus")),...h([3.8,-3.6],1.1,.46,1.4)]),c,Math.max(2,Math.ceil(r/10))),this.headMesh=new _t(ta(!0),new Tt({color:"#fff4d6"}),r+4),this.tailMesh=new _t(ta(!1),new Tt({color:"#c01a10"}),r+4);const u=(f,d)=>{f=f.toNonIndexed();const m=new te(d),p=f.attributes.position.count,g=new Float32Array(p*3);for(let A=0;A<p;A++)g[A*3]=m.r,g[A*3+1]=m.g,g[A*3+2]=m.b;return f.setAttribute("color",new Ke(g,3)),f};this.pedBody=new _t(Kt([u(new yt(.46,.66,.26).translate(0,1.2,0),"#ffffff"),u(new hs(.13,8,6).translate(0,1.68,0),"#e0b896"),u(new yt(.12,.58,.12).translate(-.3,1.18,0),"#ffffff"),u(new yt(.12,.58,.12).translate(.3,1.18,0),"#ffffff")]),c,a),this.pedLegs=new _t(u(new yt(.16,.86,.16).translate(-.12,-.43,0),"#30343c"),c,a),this.pedLegs2=new _t(u(new yt(.16,.86,.16).translate(.12,-.43,0),"#30343c"),c,a);for(const f of[this.carMesh,this.busMesh,this.headMesh,this.tailMesh,this.pedBody,this.pedLegs,this.pedLegs2])f.count=0,f.frustumCulled=!1,f.castShadow=f!==this.headMesh&&f!==this.tailMesh,i.add(f)}rnd(e){return e[Math.floor(Math.random()*e.length)]}pose(e,t,n,i){const r=n===1?t:e.len-t,a=e.cum;let o=0,c=0,l=a.length-1;for(;c<l;){const v=c+l+1>>1;a[v]<=r?c=v:l=v-1}o=Math.min(c,a.length-2);const h=Math.max(0,Math.min(1,(r-a[o])/(a[o+1]-a[o]||1))),u=e.pts[2*o],f=e.pts[2*o+1],d=e.pts[2*o+2],m=e.pts[2*o+3];let p=(d-u)*n,g=(m-f)*n;const A=Math.hypot(p,g)||1;p/=A,g/=A;const b=-g,x=p;if(e.hw){const v=this.R.halfAt(e,o,h),w=e.width/2;i=Math.abs(i)<=w?i*(v/w):Math.sign(i)*Math.max(.3,v-.5)}const E=u+(d-u)*h+b*i,C=f+(m-f)*h+x*i,_=e.ys?this.R.yAt(e,o)*(1-h)+this.R.yAt(e,o+1)*h:this.G.H(E,C);return{x:E,y:_,z:C,dx:p,dz:g}}parkSides(e){return e.bridge||e.code<4||e.code>6||e.len<40?0:(e.oneway?e.width>=8:e.width>=10)?2:e.oneway&&e.width>=6?1:0}laneOff(e){const t=this.parkSides(e),n=e.width/2;if(t&&e.oneway)return t===2?0:-Math.max(0,Math.min(.6,n-2.4));const i=e.oneway?e.lanes>=2?(Math.random()<.5?-1:1)*e.width/4:0:Math.min(e.width/4,2.2)*(e.lanes>=4?1.4:1);return t?Math.min(i,n-3.2):i}spawnCar(e,t,n,i,r,a){for(let o=0;o<30;o++){const c=Math.random()*Math.PI*2,l=(a?30:120)+Math.pow(Math.random(),1.4)*(a?330:260),h=Math.random()<.65,u=this.R.nearest(t+Math.cos(c)*l,n+Math.sin(c)*l,70,x=>x.code!==8&&x.code!==7&&x.len>25&&(!h||x.code<=4));if(!u)continue;const f=Math.hypot(u.px-t,u.pz-n);if(f<(a?25:110)||f>420||!a&&((u.px-t)*i+(u.pz-n)*r)/f>.5&&f<250)continue;const d=u.w,m=d.oneway||Math.random()<.5?1:-1,p=d.cum[u.k]+(d.cum[u.k+1]-d.cum[u.k])*u.t,g=m===1?p:d.len-p;if(this.cars.some(x=>x.alive&&x.way===d&&x.dir===m&&Math.abs(x.s-g)<12))continue;const A=Math.random()<.07&&d.code<=3,b=e||{};return Object.assign(b,{way:d,dir:m,s:g,v:Th[d.code]*.7,lane:this.laneOff(d),kind:A?1:0,col:new te(A?Math.random()<.5?"#2f6db3":"#c9372c":this.rnd(Ur)),stun:0,honk:0,len:A?11:4.4,alive:!0,x:0,y:0,z:0,yaw:0,pitch:0,ox:0,oz:0,sf:.85+Math.random()*.3}),b.ob={x:0,z:0,r:A?2.6:1.3,vx:0,vz:0,hit:()=>{b.stun=2.5,b.v=0}},b}return null}nextWay(e){const t=e.way,n=e.dir===1?t.b:t.a,r=this.R.nodes[n].ways.filter(h=>h.w!==t.i&&this.R.ways[h.w].code!==8&&this.R.ways[h.w].code!==7&&!(this.R.ways[h.w].oneway&&h.end===1));if(!r.length)return t.oneway?!1:(e.dir=e.dir===1?-1:1,e.s=0,!0);const[a,o]=(()=>{const h=this.pose(t,Math.max(0,t.len-3),e.dir,0);return[h.dx,h.dz]})();let c=r[0],l=-1e9;for(const h of r){const u=this.R.ways[h.w],f=h.end===0?1:-1,d=this.pose(u,3,f,0),m=(d.dx*a+d.dz*o)*.6+(5-Math.min(5,u.code))*.15+Math.random()*1.1;m>l&&(l=m,c=h)}return e.way=this.R.ways[c.w],e.dir=c.end===0?1:-1,e.s=0,e.lane=this.laneOff(e.way),!0}update(e,t,n){const i=t.x,r=t.z,[a,o]=t.fwd;for(;this.cars.length<this.nCar;){const p=this.spawnCar(null,i,r,a,o,!0);if(!p)break;this.cars.push(p)}for(const p of this.cars)if(!p.alive||Math.hypot(p.x-i,p.z-r)>520){const g=this.spawnCar(p,i,r,a,o,!1);p.alive=!!g}for(const p of this.cars){if(!p.alive)continue;const g=p.way;let A=(Th[g.code]??9)*p.sf;p.stun>0&&(p.stun-=e,A=0);const b=g.len-p.s,x=p.dir===1?g.b:g.a,E=this.sig.stopDist(x);if(E>0){const ie=this.sig.state(x,g.i),le=b-E;ie!=="g"&&le>-1&&!(ie==="y"&&le<p.v*.9)&&(A=Math.min(A,Math.max(0,Math.sqrt(Math.max(0,2*3.5*(le-1))))))}else b<18&&this.R.nodes[x].ways.length>=3&&(A=Math.min(A,6.5));const C=this.pose(g,p.s,p.dir,p.lane);let _=1e9;const v=(ie,le,Te)=>{const q=ie-C.x,se=le-C.z,ue=q*C.dx+se*C.dz;ue<=0||ue>30||Math.abs(-q*C.dz+se*C.dx)>2.2||(_=Math.min(_,ue-Te/2-p.len/2))};for(const ie of this.cars)ie!==p&&ie.alive&&Math.abs(ie.x-C.x)<32&&Math.abs(ie.z-C.z)<32&&v(ie.x,ie.z,ie.len);v(i,r,4.4),_<1e8&&(A=Math.min(A,Math.max(0,(_-3)*.9)),_<6&&Math.hypot(i-C.x,r-C.z)<9&&t.speed<1&&(p.honk+=e));const w=A>p.v?2.6:6;p.v+=Math.sign(A-p.v)*Math.min(Math.abs(A-p.v),w*e),p.s+=p.v*e;let M=!1;if(p.s>=g.len){const ie=p.s-g.len;if(!this.nextWay(p)){p.alive=!1;continue}p.s=ie,M=!0}const y=this.pose(p.way,p.s,p.dir,p.lane);M&&p.x!==0&&(p.ox=p.x+Math.sin(p.yaw)*p.v*e-y.x,p.oz=p.z+Math.cos(p.yaw)*p.v*e-y.z,Math.hypot(p.ox,p.oz)>9&&(p.ox=p.oz=0));const B=Math.exp(-e*Math.max(.8,p.v*.28));p.ox*=B,p.oz*=B;const U=y.x+p.ox,L=y.z+p.oz,Q=U-p.x,z=L-p.z,N=Math.hypot(Q,z);let O=(N>.02&&p.x!==0&&N<3?Math.atan2(Q,z):Math.atan2(y.dx,y.dz))-p.yaw;O=Math.atan2(Math.sin(O),Math.cos(O)),p.yaw+=O*Math.min(1,e*7),p.ob.vx=Q/Math.max(e,.001),p.ob.vz=z/Math.max(e,.001),p.x=U,p.z=L;const j=p.way.ys?y.y:this.G.H(y.x+y.dx*1.5,y.z+y.dz*1.5),Z=p.way.ys?y.y:this.G.H(y.x-y.dx*1.5,y.z-y.dz*1.5);p.y=p.way.ys?y.y+.05:(j+Z)/2,p.pitch=Math.atan2(j-Z,3),p.ob.x=p.x,p.ob.z=p.z}this.obstacles=this.cars.filter(p=>p.alive&&Math.hypot(p.x-i,p.z-r)<30).map(p=>p.ob),this.updateParked(i,r);let c=0,l=0,h=0;const u=this.tmpM,f=this.q,d=this.P,m=this.S;for(const p of this.cars)p.alive&&(this.e.set(-p.pitch,p.yaw,0,"YXZ"),f.setFromEuler(this.e),d.set(p.x,p.y,p.z),u.compose(d,f,m),p.kind===1?l<this.busMesh.instanceMatrix.count&&(this.busMesh.setMatrixAt(l,u),this.busMesh.setColorAt(l++,p.col)):c<this.carMesh.instanceMatrix.count&&(this.carMesh.setMatrixAt(c,u),this.carMesh.setColorAt(c++,p.col),this.headMesh.setMatrixAt(h,u),this.tailMesh.setMatrixAt(h++,u)));this.carMesh.count=c,this.busMesh.count=l,this.headMesh.count=this.tailMesh.count=h;for(const p of[this.carMesh,this.busMesh,this.headMesh,this.tailMesh])p.instanceMatrix.needsUpdate=!0,p.instanceColor&&(p.instanceColor.needsUpdate=!0);this.updatePeds(e,t)}spawnPed(e,t,n,i){for(let r=0;r<20;r++){const a=this.R.nearest(t+(Math.random()-.5)*520,n+(Math.random()-.5)*520,50,f=>f.code>=2&&f.code<=7&&!f.bridge&&f.len>20);if(!a)continue;const o=Math.hypot(a.px-t,a.pz-n);if(o<(i?15:90)||o>260)continue;const c=a.w,l=Math.random()<.5?1:-1,h=c.cum[a.k]+(c.cum[a.k+1]-c.cum[a.k])*a.t,u=e||{};return Object.assign(u,{way:c,dir:l,s:l===1?h:c.len-h,side:c.code===7?(Math.random()-.5)*c.width:(c.width/2+.6+Math.random()*1.4)*(Math.random()<.5?-1:1),v:1.1+Math.random()*.6,dodge:0,x:0,y:0,z:0,yaw:0,ph:Math.random()*6,col:new te(this.rnd(cE)),skin:new te(1,1,1),alive:!0,wait:0,sc:.88+Math.random()*.2}),u}return null}updatePeds(e,t){const n=t.x,i=t.z;for(;this.peds.length<this.nPed;){const u=this.spawnPed(null,n,i,!0);if(!u)break;this.peds.push(u)}for(const u of this.peds)if(!u.alive||Math.hypot(u.x-n,u.z-i)>300){const f=this.spawnPed(u,n,i,!1);u.alive=!!f}let r=0;const a=this.tmpM,o=this.q,c=this.P,l=new R,h=new R(0,1,0);for(const u of this.peds){if(!u.alive)continue;l.setScalar(u.sc);const f=u.x-n,d=u.z-i,m=Math.hypot(f,d);if(m<9&&t.speed>2.5){const E=t.speed,C=t.vx/E,_=t.vz/E,v=-(f*C+d*_)<0,w=f*-_+d*C;v&&Math.abs(w)<2.6&&(u.dodge=Math.sign(w||1)*3,u.wait=1.5),m<1.4&&(this.onPedHit?.(),u.dodge=Math.sign(w||1)*4)}u.wait>0?u.wait-=e:(u.s+=u.v*e,u.ph+=u.v*e*4.2),u.s>u.way.len-2&&(u.dir=u.dir===1?-1:1,u.s=2,u.side=-u.side*(Math.random()<.3?-1:1)),u.dodge*=Math.exp(-e*.6);const p=this.pose(u.way,u.s,u.dir,u.side+u.dodge);u.x=p.x,u.z=p.z,u.y=this.G.H(u.x,u.z)+(u.way.code!==7?.12:0),u.yaw=Math.atan2(p.dx,p.dz),o.setFromAxisAngle(h,u.yaw);const g=u.wait>0?0:Math.abs(Math.sin(u.ph))*.05;c.set(u.x,u.y+g,u.z),a.compose(c,o,l),this.pedBody.setMatrixAt(r,a),this.pedBody.setColorAt(r,u.col);const A=u.wait>0?0:Math.sin(u.ph)*.45,b=this.e.set(A,u.yaw,0,"YXZ"),x=new Jt().setFromEuler(b);c.set(u.x,u.y+.9*u.sc+g,u.z),a.compose(c,x,l),this.pedLegs.setMatrixAt(r,a),x.setFromEuler(b.set(-A,u.yaw,0,"YXZ")),a.compose(c,x,l),this.pedLegs2.setMatrixAt(r,a),r++}this.pedBody.count=this.pedLegs.count=this.pedLegs2.count=r,this.pedBody.instanceMatrix.needsUpdate=this.pedLegs.instanceMatrix.needsUpdate=this.pedLegs2.instanceMatrix.needsUpdate=!0,this.pedBody.instanceColor&&(this.pedBody.instanceColor.needsUpdate=!0)}updateParked(e,t){if(this.parkMesh||(this.parkMesh=new _t(this.carMesh.geometry,this.carMesh.material,this.nPark),this.parkMesh.castShadow=!0,this.parkMesh.frustumCulled=!1,this.parkMesh.count=0,this.carMesh.parent.add(this.parkMesh)),Math.hypot(e-this.parkAt[0],t-this.parkAt[1])>50){this.parkAt=[e,t];const n=230,i=[],r=(f,d,m)=>{const p=Math.sin(f*12.9898+d*78.233+m*37.719)*43758.5453;return p-Math.floor(p)};for(const f of this.R.ways){const d=this.parkSides(f);if(!d)continue;const m=d===2;if(Math.hypot(f.pts[0]-e,f.pts[1]-t)>n+f.len)continue;const p=6.4,g=Math.floor((f.len-28)/p);for(let A=0;A<g;A++)for(const b of m?[-1,1]:[1]){if(r(f.i,A,b)>.42)continue;const x=14+(A+.5)*p,E=f.width/2,C=this.pose(f,x,1,b*(E-1.08));if(f.hw&&this.R.halfAt(f,Math.min(f.hw.length-2,Math.floor(x/5)))<E-.2)continue;const _=Math.hypot(C.x-e,C.z-t);_>n||i.push([C.x,C.z,Math.atan2(C.dx,C.dz)+(b<0&&!f.oneway?Math.PI:0),Math.floor(r(f.i,A,7)*Ur.length),_])}}i.sort((f,d)=>f[4]-d[4]);const a=this.tmpM,o=this.q,c=this.P,l=this.S,h=new te;let u=0;this.parked=[];for(const[f,d,m,p]of i.slice(0,this.nPark)){const g=this.G.H(f+Math.sin(m)*1.4,d+Math.cos(m)*1.4),A=this.G.H(f-Math.sin(m)*1.4,d-Math.cos(m)*1.4);this.e.set(-Math.atan2(g-A,2.8),m,0,"YXZ"),o.setFromEuler(this.e),c.set(f,(g+A)/2,d),a.compose(c,o,l),this.parkMesh.setMatrixAt(u,a),this.parkMesh.setColorAt(u++,h.set(Ur[p]==="#f2c200"?"#8a8f96":Ur[p]));for(const b of[-1.1,1.1])this.parked.push({x:f+Math.sin(m)*b,z:d+Math.cos(m)*b,r:-.25,vx:0,vz:0})}this.parkMesh.count=u,this.parkMesh.instanceMatrix.needsUpdate=!0,this.parkMesh.instanceColor&&(this.parkMesh.instanceColor.needsUpdate=!0)}for(const n of this.parked)Math.abs(n.x-e)<12&&Math.abs(n.z-t)<12&&this.obstacles.push(n)}dots(){return this.cars.filter(e=>e.alive).map(e=>[e.x,e.z])}}const nn=4;class hE{constructor(e,t,n){this.cv=e;const[i,r,a,o]=n.bounds;this.x0=i,this.z0=r;const c=Math.ceil((a-i)/nn),l=Math.ceil((o-r)/nn);this.bg=document.createElement("canvas"),this.bg.width=c,this.bg.height=l;const h=this.bg.getContext("2d"),u=h.createImageData(c,l);for(let f=0;f<l;f++)for(let d=0;d<c;d++){const m=n.kindAt(i+d*nn,r+f*nn),p=(f*c+d)*4,g=m===1?[38,70,92]:m===2?[70,92,58]:[58,60,64];u.data[p]=g[0],u.data[p+1]=g[1],u.data[p+2]=g[2],u.data[p+3]=255}h.putImageData(u,0,0),h.lineCap=h.lineJoin="round";for(const f of[0,1])for(const d of t.ways){if(d.code===8)continue;const m=d.code<=3;if(f===0&&!m)h.strokeStyle="#8b8d92",h.lineWidth=Math.max(1.2,d.width/nn);else if(f===1&&m)h.strokeStyle="#d9d2bd",h.lineWidth=Math.max(2,d.width/nn);else continue;h.beginPath();for(let p=0;p<d.pts.length;p+=2){const g=(d.pts[p]-i)/nn,A=(d.pts[p+1]-r)/nn;p?h.lineTo(g,A):h.moveTo(g,A)}h.stroke()}this.ctx=e.getContext("2d")}draw(e,t,n,i,r=[]){const a=this.cv,o=this.ctx,c=a.classList.contains("big"),l=c?600:300;a.width!==l&&(a.width=a.height=l);const h=c?.5:1.15;o.save(),o.fillStyle="#26292e",o.fillRect(0,0,l,l),o.translate(l/2,l/2),c||o.rotate(Math.PI+e.yaw),o.scale(h,h);const u=(e.x-this.x0)/nn,f=(e.z-this.z0)/nn;o.drawImage(this.bg,-u,-f);const d=(m,p)=>[(m-this.x0)/nn-u,(p-this.z0)/nn-f];if(n.length>=4){o.strokeStyle="#ffd84a",o.lineWidth=3.2/h*1.6,o.lineJoin=o.lineCap="round",o.beginPath();for(let m=0;m<n.length;m+=2){const[p,g]=d(n[m],n[m+1]);m?o.lineTo(p,g):o.moveTo(p,g)}o.stroke()}o.fillStyle="#e8e8e8";for(const[m,p]of i.dots()){const[g,A]=d(m,p);o.fillRect(g-1.2,A-1.2,2.4,2.4)}o.textAlign="center",o.textBaseline="middle";for(const m of r){const[p,g]=d(m.x,m.z);o.save(),o.translate(p,g),c||o.rotate(-(Math.PI+e.yaw)),o.scale(1/h,1/h),o.font=`bold ${c?20:15}px system-ui, sans-serif`,o.lineWidth=3,o.strokeStyle="#1b1e24",o.fillStyle=m.found?"#ffd84a":"#ffffff";const A=m.found?"★":"?";o.strokeText(A,0,0),o.fillText(A,0,0),c&&m.found&&(o.font="12px system-ui, sans-serif",o.strokeText(m.name,0,16),o.fillStyle="#fff",o.fillText(m.name,0,16)),o.restore()}if(t){const[m,p]=d(t.x,t.z);o.fillStyle="#ffd84a",o.strokeStyle="#1b1e24",o.lineWidth=2/h,o.beginPath(),o.arc(m,p,7/h,0,Math.PI*2),o.fill(),o.stroke()}o.restore(),o.save(),o.translate(l/2,l/2),c&&o.rotate(-e.yaw+Math.PI),o.fillStyle="#f2c200",o.strokeStyle="#1b1e24",o.lineWidth=2,o.beginPath(),o.moveTo(0,-12),o.lineTo(8,9),o.lineTo(0,4),o.lineTo(-8,9),o.closePath(),o.fill(),o.stroke(),o.restore()}}const Rh=700;class uE{constructor(){this.group=new Bt,this.pos=new Float32Array(Rh*18),this.head=0,this.last=[null,null],this.NS=90,this.sp=new Float32Array(270),this.sc=new Float32Array(360),this.age=new Float32Array(90).fill(9),this.sh=0,this.emit=0;const e=new ht;e.setAttribute("position",new Ke(this.pos,3)),this.mesh=new qe(e,new Tt({color:789517,transparent:!0,opacity:.55,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-4,polygonOffsetUnits:-10})),this.mesh.frustumCulled=!1,this.mesh.renderOrder=3,this.group.add(this.mesh);const t=document.createElement("canvas");t.width=t.height=64;const n=t.getContext("2d"),i=n.createRadialGradient(32,32,0,32,32,32);i.addColorStop(0,"rgba(255,255,255,0.9)"),i.addColorStop(.5,"rgba(255,255,255,0.35)"),i.addColorStop(1,"rgba(255,255,255,0)"),n.fillStyle=i,n.fillRect(0,0,64,64);const r=new ht;r.setAttribute("position",new Ke(this.sp,3)),r.setAttribute("color",new Ke(this.sc,4)),this.smoke=new vc(r,new ha({map:new $s(t),size:2.4,sizeAttenuation:!0,transparent:!0,vertexColors:!0,depthWrite:!1})),this.smoke.frustumCulled=!1,this.smoke.renderOrder=6,this.group.add(this.smoke);for(let a=0;a<this.NS;a++)this.sp[a*3+1]=-999}update(e,t,n,i,r){if(t>.12){for(let a=0;a<2;a++){const o=n[a],c=this.last[a];if(c&&Math.hypot(o[0]-c[0],o[2]-c[2])<3&&Math.hypot(o[0]-c[0],o[2]-c[2])>.12){const l=this.head*18,h=.11,u=this.pos;this.head=(this.head+1)%Rh;const f=[c[0]-i*h,c[1]+.03,c[2]-r*h],d=[c[0]+i*h,c[1]+.03,c[2]+r*h],m=[o[0]-i*h,o[1]+.03,o[2]-r*h],p=[o[0]+i*h,o[1]+.03,o[2]+r*h];u.set([...f,...m,...d,...d,...m,...p],l),this.last[a]=o}else(!c||Math.hypot(o[0]-c[0],o[2]-c[2])>=3)&&(this.last[a]=o)}for(this.mesh.geometry.attributes.position.needsUpdate=!0,this.emit+=e*30*t;this.emit>1;){this.emit-=1;const a=n[Math.random()*2|0],o=this.sh;this.sh=(this.sh+1)%this.NS,this.sp[o*3]=a[0]+(Math.random()-.5)*.4,this.sp[o*3+1]=a[1]+.25,this.sp[o*3+2]=a[2]+(Math.random()-.5)*.4,this.age[o]=0}}else this.last[0]=this.last[1]=null;for(let a=0;a<this.NS;a++){const o=this.age[a]+=e;if(o>1.6){this.sc[a*4+3]=0;continue}this.sp[a*3+1]+=e*.9;const c=1-o/1.6;this.sc[a*4]=this.sc[a*4+1]=this.sc[a*4+2]=.82,this.sc[a*4+3]=.3*c}this.smoke.geometry.attributes.position.needsUpdate=!0,this.smoke.geometry.attributes.color.needsUpdate=!0}}const fE={ayasofya:"537’de İmparator I. Justinianus döneminde tamamlandı.",sultanahmet:"1609–1617 arasında yapıldı; altı minarelidir. Mimarı Sedefkâr Mehmed Ağa.",yenicami:"Yapımına 1597’de başlandı, 1665’te tamamlandı.",galata:"1348’de Cenevizliler tarafından yapıldı.",rustempasa:"Mimar Sinan’ın eseri (1560’lar); İznik çinileriyle ünlüdür.",nusretiye:"II. Mahmud yaptırdı, 1826’da tamamlandı. Mimarı Krikor Balyan.",ayatriada:"Taksim’deki Rum Ortodoks kilisesi; 1880’de ibadete açıldı.",stantoine:"İstiklal Caddesi’ndeki Katolik kilisesi; 1912’de tamamlandı. Mimarı Giulio Mongeri.",topkapi:"Fatih Sultan Mehmed 1460’larda yaptırdı; yaklaşık 400 yıl Osmanlı sarayı oldu.",dikilitas:"MÖ 15. yüzyılda Mısır’da III. Thutmose için yapıldı; 390’da I. Theodosius buraya diktirdi.",ormedikilitas:"Yapım tarihi kesin bilinmiyor; 10. yüzyılda VII. Konstantinos onarttı.",yilanlisutun:"MÖ 479’daki Plataia zaferi anısına Delfi’de dikildi; 4. yüzyılda buraya getirildi.",almancesmesi:"Alman İmparatoru II. Wilhelm’in hediyesi; 1901’de açıldı."},dE={topkapi:170,ayasofya:110,sultanahmet:110,yenicami:90,stantoine:70};class AE{constructor(e,t,n){this.R=e,this.lms=t,this.ui=n,this.found=new Set,this.ways=new Set,this.km=0,this.total=0,this.done=0,this.saveT=0,this.cardT=0,this.lastX=NaN,this.lastZ=NaN,this.chipT=0;for(const i of e.ways)i.code!==8&&(this.total+=i.len);try{const i=JSON.parse(localStorage.getItem("drv2_explore")||"null");if(i){for(const r of i.lm||[])t.some(a=>a.id===r)&&this.found.add(r);for(const r of i.ways||[])e.ways[r]&&(this.ways.add(r),this.done+=e.ways[r].len);this.km=i.km||0}}catch{}this.chip()}get markers(){return this.lms.map(e=>({x:e.x,z:e.z,found:this.found.has(e.id),name:e.name}))}get percent(){return this.total?this.done/this.total*100:0}chip(){this.ui.chip.textContent=`🧭 ${this.found.size}/${this.lms.length} · %${this.percent.toFixed(1).replace(".",",")} sokak · ${this.km.toFixed(1).replace(".",",")} km`}save(){try{localStorage.setItem("drv2_explore",JSON.stringify({lm:[...this.found],ways:[...this.ways],km:Math.round(this.km*100)/100}))}catch{}}reset(){this.found.clear(),this.ways.clear(),this.km=0,this.done=0,this.save(),this.chip()}update(e,t){if(!Number.isNaN(this.lastX)){const i=Math.hypot(t.x-this.lastX,t.z-this.lastZ);i<20&&(this.km+=i/1e3)}this.lastX=t.x,this.lastZ=t.z;const n=this.R.nearest(t.x,t.z,7,i=>i.code!==8,t.y);n&&!this.ways.has(n.w.i)&&(this.ways.add(n.w.i),this.done+=n.w.len);for(const i of this.lms)this.found.has(i.id)||Math.hypot(i.x-t.x,i.z-t.z)<(dE[i.id]??55)&&(this.found.add(i.id),this.save(),this.chip(),this.ui.cardTitle.textContent=`Keşfedildi: ${i.name}  (${this.found.size}/${this.lms.length})`,this.ui.cardText.textContent=fE[i.id]||"",this.ui.card.classList.add("on"),this.cardT=9,this.ui.chime());this.cardT>0&&(this.cardT-=e,this.cardT<=0&&this.ui.card.classList.remove("on")),this.chipT+=e,this.chipT>1&&(this.chipT=0,this.chip()),this.saveT+=e,this.saveT>15&&(this.saveT=0,this.save())}}function pE(s){const e=document.createElement("canvas");e.width=e.height=s;const t=e.getContext("2d"),n=t.createImageData(s,s),i=new Float32Array(s*s);for(let a=0;a<4;a++){const o=4<<a,c=1/(a+1),l=[];for(let h=0;h<(o+1)*(o+1);h++)l.push(Math.random());for(let h=0;h<s;h++)for(let u=0;u<s;u++){const f=u/s*o,d=h/s*o,m=Math.floor(f),p=Math.floor(d),g=f-m,A=d-p,b=l[p*(o+1)+m],x=l[p*(o+1)+(m+1)%o],E=l[(p+1)%o*(o+1)+m],C=l[(p+1)%o*(o+1)+(m+1)%o],_=v=>v*v*(3-2*v);i[h*s+u]+=(b*(1-_(g))+x*_(g))*(1-_(A))*c+(E*(1-_(g))+C*_(g))*_(A)*c}}for(let a=0;a<s;a++)for(let o=0;o<s;o++){const c=i[a*s+(o+1)%s]-i[a*s+(o-1+s)%s],l=i[(a+1)%s*s+o]-i[(a-1+s)%s*s+o],h=(a*s+o)*4;n.data[h]=128+c*160,n.data[h+1]=128+l*160,n.data[h+2]=255,n.data[h+3]=255}t.putImageData(n,0,0);const r=new $s(e);return r.wrapS=r.wrapT=ai,r}class gE{constructor(e){this.tex=pE(e?128:256),this.tex.repeat.set(160,160),this.mat=new cb({color:"#3f8ba3",specular:"#cfd8dc",shininess:90,normalMap:this.tex,normalScale:new oe(.5,.5),transparent:!0,opacity:.94}),this.mesh=new qe(new Vn(16e3,16e3).rotateX(-Math.PI/2),this.mat),this.mesh.position.y=0,this.mesh.receiveShadow=!1,this.mesh.renderOrder=1,this.mesh.name="sea"}update(e,t,n){this.mesh.position.set(Math.round(n.x/100)*100,0,Math.round(n.z/100)*100),this.tex.offset.set(e*.004%1+this.mesh.position.x/100,e*.0025%1+this.mesh.position.z/100);const i=new te("#3f8ba3"),r=new te("#0b1622");this.mat.color.copy(i).lerp(r,t.night).lerp(new te("#4d5d66"),Math.max(0,t.fogAmt*.5)),this.mat.specular.setScalar(.8*(1-t.night)*(1-t.rainAmt*.5)),this.mat.normalScale.setScalar(.5+t.rainAmt*.4)}}function ws(s,e){s.index&&(s=s.toNonIndexed()),s.deleteAttribute("uv");const t=new te(e),n=s.attributes.position.count,i=new Float32Array(n*3);for(let r=0;r<n;r++)i[r*3]=t.r,i[r*3+1]=t.g,i[r*3+2]=t.b;return s.setAttribute("color",new Ke(i,3)),s.clearGroups(),s}function mE(){const s=(n,i,r,a,o)=>{const c=new er;return c.moveTo(-n,-i*.42),c.lineTo(-n,i*.2),c.quadraticCurveTo(-n,i*.42,0,i*.5),c.quadraticCurveTo(n,i*.42,n,i*.2),c.lineTo(n,-i*.42),c.quadraticCurveTo(n*.9,-i*.5,0,-i*.5),c.quadraticCurveTo(-n*.9,-i*.5,-n,-i*.42),ws(new Aa(c,{depth:a,bevelEnabled:!1,curveSegments:6}).rotateX(-Math.PI/2).scale(1,1,-1).translate(0,r,0),o)},e=(n,i,r,a,o,c)=>ws(new yt(n,i,r).translate(0,a,o),c),t=[s(4.2,36,-.6,1,"#23262b"),s(4.3,36.4,.4,1.6,"#f3f1ea"),e(7.4,2.3,24,3.15,-1,"#f3f1ea"),e(7.5,.8,22,3.3,-1,"#1e2a36"),e(6.4,2.1,15,5.3,-2,"#f3f1ea"),e(6.5,.7,13.5,5.5,-2,"#1e2a36"),e(7.8,.14,25,4.34,-1,"#d9d5c8"),e(6.8,.14,16,6.4,-2,"#d9d5c8"),e(3.6,1.7,3.6,7.3,2.5,"#f3f1ea"),ws(new jt(.9,1.1,3.2,10).translate(0,8,-4),"#e0a020"),ws(new jt(.95,.95,.6,10).translate(0,9.5,-4),"#1b1b1d"),ws(new jt(.06,.06,4,5).translate(0,9.5,4),"#d9d5c8")];return Kt(t)}class bE{constructor(e,t){this.group=new Bt,this.boats=[];const[n,i,r,a]=e.bounds,o=40,c=Math.floor((r-n)/o),l=Math.floor((a-i)/o),h=new Uint8Array(c*l);for(let B=0;B<l;B++)for(let U=0;U<c;U++){const L=n+(U+.5)*o,Q=i+(B+.5)*o;let z=1;for(const[N,H]of[[0,0],[45,0],[-45,0],[0,45],[0,-45],[32,32],[-32,32],[32,-32],[-32,-32]])if(e.kindAt(L+N,Q+H)!==Js){z=0;break}h[B*c+U]=z}const u=(B,U)=>{const L=Math.floor((B-n)/o),Q=Math.floor((U-i)/o);let z=-1,N=1e9;for(let H=Math.max(0,Q-14);H<=Math.min(l-1,Q+14);H++)for(let O=Math.max(0,L-14);O<=Math.min(c-1,L+14);O++)if(h[H*c+O]){const j=(O-L)**2+(H-Q)**2;j<N&&(N=j,z=H*c+O)}return z},f=B=>{const U=new Int32Array(c*l).fill(-2);U[B]=-1;const L=[B];for(let Q=0;Q<L.length;Q++){const z=L[Q],N=z%c,H=z/c|0;for(const[O,j]of[[1,0],[-1,0],[0,1],[0,-1],[1,1],[1,-1],[-1,1],[-1,-1]]){const Z=N+O,ie=H+j;if(Z<0||ie<0||Z>=c||ie>=l)continue;const le=ie*c+Z;!h[le]||U[le]!==-2||(U[le]=z,L.push(le))}}return{prev:U,reach:L}},d=B=>t.find(U=>U.id===B),m=d("eminonu"),p=d("karakoy"),g=d("besiktas"),A=[],b=m?u(m.x,m.z):-1,x=p?u(p.x,p.z):-1,E=g?u(g.x,g.z):-1;if(b>=0&&E>=0&&A.push([b,E]),x>=0){const{reach:B}=f(x);let U=x,L=-1e9,Q=x,z=-1e9;for(const N of B){const H=N%c,O=N/c|0;H-O*.3>L&&(L=H-O*.3,U=N),O+H*.4>z&&(z=O+H*.4,Q=N)}A.push([x,U]),b>=0&&A.push([b,Q])}const C=mE(),_=new Yt({vertexColors:!0}),v=document.createElement("canvas");v.width=32,v.height=128;const w=v.getContext("2d"),M=w.createLinearGradient(0,0,0,128);M.addColorStop(0,"rgba(255,255,255,0.55)"),M.addColorStop(1,"rgba(255,255,255,0)"),w.fillStyle=M,w.beginPath(),w.moveTo(10,0),w.lineTo(22,0),w.lineTo(32,128),w.lineTo(0,128),w.fill();const y=new Tt({map:new $s(v),transparent:!0,depthWrite:!1});A.forEach(([B,U],L)=>{const{prev:Q}=f(B);if(Q[U]===-2)return;let z=[];for(let Z=U;Z>=0;Z=Q[Z])z.push([n+(Z%c+.5)*o,i+((Z/c|0)+.5)*o]);z.reverse();for(let Z=0;Z<3;Z++){const ie=[z[0]];for(let le=0;le<z.length-1;le++){const Te=z[le],q=z[le+1];ie.push([Te[0]*.75+q[0]*.25,Te[1]*.75+q[1]*.25],[Te[0]*.25+q[0]*.75,Te[1]*.25+q[1]*.75])}ie.push(z[z.length-1]),z=ie}const N=[0];for(let Z=1;Z<z.length;Z++)N.push(N[Z-1]+Math.hypot(z[Z][0]-z[Z-1][0],z[Z][1]-z[Z-1][1]));if(N[N.length-1]<300)return;const H=new Bt,O=new qe(C,_);O.castShadow=!0,H.add(O);const j=new qe(new Vn(14,60).rotateX(-Math.PI/2).translate(0,.08,-46),y);j.renderOrder=2,H.add(j),this.group.add(H),this.boats.push({path:z.flat(),cum:N,len:N[N.length-1],s:L*.37%1*N[N.length-1],dir:L%2?-1:1,wait:0,obj:H,ph:L*2.1})})}update(e,t){for(const n of this.boats){n.wait>0?n.wait-=e:(n.s+=n.dir*6.5*e,n.s>=n.len?(n.s=n.len,n.dir=-1,n.wait=10):n.s<=0&&(n.s=0,n.dir=1,n.wait=10));let i=0,r=n.cum.length-1;for(;i<r;){const m=i+r+1>>1;n.cum[m]<=n.s?i=m:r=m-1}const a=Math.min(i,n.cum.length-2),o=(n.s-n.cum[a])/(n.cum[a+1]-n.cum[a]||1),c=n.path[2*a],l=n.path[2*a+1],h=n.path[2*a+2],u=n.path[2*a+3];n.obj.position.set(c+(h-c)*o,.15+Math.sin(t*.9+n.ph)*.12,l+(u-l)*o);let d=Math.atan2((h-c)*n.dir,(u-l)*n.dir)-n.obj.rotation.y;d=Math.atan2(Math.sin(d),Math.cos(d)),n.obj.rotation.y+=d*Math.min(1,e*.8),n.obj.rotation.z=Math.sin(t*.7+n.ph)*.012,n.obj.children[1].visible=n.wait<=0}}get count(){return this.boats.length}}const _n=new URLSearchParams(location.search),Ze=s=>document.getElementById(s),xE="./data/",Dh=new URL("../istanbul3d/",location.href).href,Fr=matchMedia("(pointer:coarse)").matches&&Math.min(screen.width,screen.height)<820||innerWidth<700,$u={dusuk:{park:50,mask:512,detail:90,pr:1.25,shadows:!0,near:330,far:900,groundNear:500,fog:900,trees:600,lamps:120,cars:24,peds:30,lights:!1},orta:{park:90,mask:1024,detail:160,pr:1.5,shadows:!0,near:450,far:1300,groundNear:700,fog:1300,trees:1400,lamps:220,cars:42,peds:60,lights:!0},yuksek:{park:150,mask:1024,detail:280,pr:2,shadows:!0,near:650,far:1900,groundNear:950,fog:1900,trees:2600,lamps:360,cars:70,peds:100,lights:!0}},Gs=(()=>{try{return localStorage.getItem("drv2_q")}catch{return null}})(),po=!_n.get("q")&&(!Gs||Gs==="oto");let Zs=_n.get("q")||(Gs&&Gs!=="oto"?Gs:"orta");$u[Zs]||(Zs="orta");const lt=$u[Zs],ef=Ze("lbar"),na=Ze("ltext");let Lh=0;const EE=5,_E=s=>{Lh++,ef.style.width=`${Lh/(EE+1)*100}%`,na.textContent=s};async function Ss(s,e,t){const n=await fetch(xE+s);if(!n.ok)throw new Error(`${s}: ${n.status}`);const i=e==="json"?await n.json():await n.arrayBuffer();return _E(t),i}async function vE(){const[s,e,t,n,i]=await Promise.all([Ss("meta.json","json","Bilgiler"),Ss("ground.bin","bin","Zemin"),Ss("roads.json","json","Yollar"),Ss("buildings.bin","bin","Binalar"),Ss("trees.bin","bin","Ağaçlar")]);na.textContent="Şehir kuruluyor…",await new Promise(P=>setTimeout(P,30));const r=new x0({antialias:!0,powerPreference:"high-performance"});let a=Math.min(devicePixelRatio,lt.pr);r.setPixelRatio(a);const o=Math.min(devicePixelRatio,1.1);r.setSize(innerWidth,innerHeight),r.shadowMap.enabled=lt.shadows,r.shadowMap.type=Uh,r.outputColorSpace=mt,r.toneMapping=Fh,r.toneMappingExposure=1,Ze("app").appendChild(r.domElement);const c=new uu;{const P=new Xo(r);c.environment=P.fromScene(new Qb,.04).texture,P.dispose()}const l=new Gt(60,innerWidth/innerHeight,.3,6e3);addEventListener("resize",()=>{l.aspect=innerWidth/innerHeight,l.updateProjectionMatrix(),r.setSize(innerWidth,innerHeight)});const h=new Ob(s.grid,e),u=new Hb(h);c.add(u.group);const f=new Wb(t,h);c.add(f.group),u.painter=Vb(f,Math.min(8,r.capabilities.getMaxAnisotropy())),u.res=[lt.mask,192];const d=new hx(n,s.chunks,s.look,s.chunk);c.add(d.group);const m=new fx(i,f.lamps,h,lt.trees,lt.lamps);c.add(m.group);const p=new gE(Fr);c.add(p.mesh);const g=new bE(h,s.spawns);c.add(g.group);const A=new Zx(c,lt.shadows,lt.fog,Fr),b=new rE;d.onCollidersChanged=()=>{x=!0};let x=!1;const E=new Bt;c.add(E);const C=new $x(Ze("wheel"),Ze("steerzone"),Ze("gas"),Ze("brake"),Ze("hb"),Ze("horn")),_=new eE,v=new aE(h,f,b,lt.lights);c.add(v.obj,v.groundFx);const w=new oE(f,h,c),M=new lE(f,h,w,c,lt.cars,lt.peds,lt.park),y=new hE(Ze("minimap"),f,h),B=(P,X=1800)=>{const J=Ze("toast");J.textContent=P,J.classList.add("on"),clearTimeout(B.h),B.h=window.setTimeout(()=>J.classList.remove("on"),X)};let U=0;v.onHit=P=>{_.bump(P),U=Math.min(1,U+.35+P*.8)};const L=new uE;c.add(L.group);const Q=new AE(f,s.landmarks,{chip:Ze("explore"),card:Ze("card"),cardTitle:Ze("card-title"),cardText:Ze("card-text"),chime:()=>_.chime(!0)});v.onSplash=()=>{_.splash(),B(`Denize düştün!
Yola geri alınıyorsun`,1600)},M.onPedHit=()=>B("Yayaya dikkat!",1200);const z=s.spawns.find(P=>P.id===(_n.get("spawn")||"eminonu"))||s.spawns[0];if(_n.get("at")){const[P,X,J]=_n.get("at").split(",").map(Number);z.x=P,z.z=X,z.yaw=J||0}v.place(z.x,z.z,z.yaw);const N=ox(Dh,r,Fr);Kx(s.landmarks,Dh,E,(P,X)=>h.H(P,X)).catch(()=>{}),matchMedia("(pointer:coarse)").matches&&document.body.classList.add("touch"),addEventListener("pointerdown",P=>{P.pointerType==="touch"&&document.body.classList.add("touch"),_.start()},{capture:!0}),addEventListener("keydown",()=>_.start(),{capture:!0});let H=0;const O=["Takip","Uzak","Kaput"],j=["acik","bulutlu","yagmur","sis"],Z={acik:"☀︎",bulutlu:"☁︎",yagmur:"🌧",sis:"🌫"},ie=()=>{const P=j[(j.indexOf(A.weather)+1)%j.length];A.setWeather(P),Ze("b-weather").textContent=Z[P],B(`Hava: ${Jx[P]}`)},le=()=>{A.hour=(Math.floor(A.hour)+1)%24,B(`Saat ${A.hourText()}`,900)},Te=()=>{H=(H+1)%O.length,B(`Kamera: ${O[H]}`,900)};Ze("b-weather").onclick=ie,Ze("b-time").onclick=le,Ze("b-cam").onclick=Te,Ze("b-reset").onclick=()=>v.resetToRoad(),Ze("b-sound").onclick=()=>{_.start(),_.setMuted(!_.muted),Ze("b-sound").textContent=_.muted?"🔇":"🔊"};const q={oto:"Oto",dusuk:"Düşük",orta:"Orta",yuksek:"Yüksek"};Ze("b-q").textContent=po?"Oto":q[Zs],Ze("b-q").onclick=()=>{const P=["oto","dusuk","orta","yuksek"],X=po?"oto":Zs,J=P[(P.indexOf(X)+1)%P.length];try{localStorage.setItem("drv2_q",J)}catch{}B(`Kalite: ${q[J]} — yeniden yükleniyor`,1200),setTimeout(()=>location.reload(),700)},Ze("minimap").onclick=()=>Ze("minimap").classList.toggle("big"),C.onKey=P=>{P==="c"?Te():P==="r"?v.resetToRoad():P==="t"?le():P==="y"?ie():P==="m"&&Ze("minimap").classList.toggle("big")},_n.get("hour")&&(A.hour=Number(_n.get("hour"))),_n.get("weather")&&j.includes(_n.get("weather"))&&(A.setWeather(_n.get("weather")),A.rainAmt=A.weather==="yagmur"?1:0,Ze("b-weather").textContent=Z[A.weather]),await(async()=>{for(let P=0;P<60;P++){const X=u.update(v.x,v.z,lt.groundNear,lt.far+400,40);if(d.update(v.x,v.z,lt.near,lt.far,lt.detail),!X&&!d.busy&&P>3)break;na.textContent="Binalar kuruluyor…",ef.style.width=`${(5+Math.min(1,P/20))/6*100}%`,await new Promise(J=>setTimeout(J,60))}b.rebuild(d.colliders.values()),x=!1,v.place(z.x,z.z,z.yaw)})(),await Promise.race([N,new Promise(P=>setTimeout(P,6e3))]),m.update(v.x,v.z,260,300),Ze("loading").classList.add("done"),B(Fr||document.body.classList.contains("touch")?"Sağda gaz/fren, solda sürükle: direksiyon":"W A S D ile sür",3500);const ue=new R,re=new R;let Ie=!1;const Pe=P=>{const[X,J]=v.fwd,K=v.speed;let ve=7.6,de=2.7,be=1.4;H===1&&(ve=14,de=5.5,be=1.2);const ke=l.aspect<.8;ke&&(ve*=1.25,de*=1.25);const ee=new R;if(H===2)ee.set(v.x+X*.3,v.y+1.45,v.z+J*.3),ue.copy(ee),re.set(v.x+X*20,v.y+1.2+Math.sin(v.pitch)*20,v.z+J*20);else{const Fe=Math.atan2(v.vx,v.vz),Me=K>3&&v.vLong>0?.35:0,je=Math.sin(v.yaw)*(1-Me)+Math.sin(Fe)*Me,Ge=Math.cos(v.yaw)*(1-Me)+Math.cos(Fe)*Me;ee.set(v.x-je*ve,v.y+de+K*.02,v.z-Ge*ve);for(let Ae=1;Ae<=8;Ae++){const Y=Ae/8,ne=v.x+(ee.x-v.x)*Y,xe=v.z+(ee.z-v.z)*Y;if(b.push(ne,xe,.6)){const ge=Math.max(.25,(Ae-1)/8);ee.set(v.x+(ee.x-v.x)*ge,ee.y,v.z+(ee.z-v.z)*ge);break}}const it=h.H(ee.x,ee.z)+1.2;ee.y<it&&(ee.y=it),Ie||(ue.copy(ee),Ie=!0),ue.lerp(ee,1-Math.exp(-P*6));const F=Xt.clamp(v.yawRate*2.2,-3,3)*Math.min(1,K/8);re.lerp(new R(v.x+X*4+J*F,v.y+be,v.z+J*4-X*F),1-Math.exp(-P*10))}l.position.copy(ue),l.lookAt(re),U*=Math.exp(-P*5);const ye=U*.22+v.offroad*Math.min(1,K/10)*.025;ye>.002&&(l.position.x+=(Math.random()-.5)*ye,l.position.y+=(Math.random()-.5)*ye,l.rotation.z+=(Math.random()-.5)*ye*.06);const Le=(H===2?70:58)+(ke?16:0)+Math.min(14,K*.32);Math.abs(l.fov-Le)>.1&&(l.fov+=(Le-l.fov)*Math.min(1,P*3),l.updateProjectionMatrix())},Re=new Sb;let Qe=0;const $=1/120;let ce=16,D=0,Ce=0,ae=0,me=0;const fe=Ze("kmh"),Ue=Ze("gear"),_e=Ze("clock"),T=Ze("street"),I=()=>{const P=Math.min(.1,Re.getDelta());me+=P,C.update(P),Qe+=P;let X=0;for(;Qe>=$&&X<12;)v.step($,C.c,M.obstacles),Qe-=$,X++;X===12&&(Qe=0),x&&(b.rebuild(d.colliders.values()),x=!1),w.update(P,v),M.update(P,v,A.night),A.update(P,l.position,v.obj.position),p.update(me,A,l.position),m.night(A.night),g.update(P,me),v.sync(C.c,A.night,P),c.environmentIntensity=1-.8*A.night;{const[J,K]=v.fwd,ve=-K,de=J,be=v.airborne?0:Xt.clamp((v.slip-3.2)/5,0,1)*Math.min(1,v.speed/5),ke=[v.x-J*1.36-ve*.8,0,v.z-K*1.36-de*.8],ee=[v.x-J*1.36+ve*.8,0,v.z-K*1.36+de*.8];ke[1]=v.groundY(ke[0],ke[2],v.y),ee[1]=v.groundY(ee[0],ee[2],v.y),L.update(P,be*(1-v.offroad),[ke,ee],ve,de)}if(Q.update(P,v),Pe(P),Ce+=P,Ce>.15&&(Ce=0,u.update(v.x,v.z,lt.groundNear,lt.far+400,3),d.update(v.x,v.z,lt.near,lt.far,lt.detail),f.update(v.x,v.z,lt.far),m.update(v.x,v.z,lt.trees>1e3?380:260,lt.lamps>200?320:230)),f.asphalt.color.setScalar(1-A.wet*.3),$r.uWet.value=A.wet,$r.uTime.value=me,_.update({rpm:v.rpm,throttle:C.c.throttle,speed:v.speed,slip:v.slip,horn:C.c.horn,rain:A.rainAmt,sea:h.kindAt(v.x+v.fwd[0]*30,v.z+v.fwd[1]*30)===1?1:0,t:me}),ae+=P,ae>.1){ae=0,fe.textContent=String(Math.round(v.speed*3.6)),Ue.textContent=v.vLong<-.5?"G":String(v.gear),_e.textContent=A.hourText(),y.draw(v,null,[],M,Q.markers);const J=f.nearest(v.x,v.z,12,void 0,v.y);T.textContent=J?.w.name||""}r.render(c,l),ce+=(P*1e3-ce)*.05,D+=P,po&&D>1.5&&(D=0,ce>30&&a>o?(a=Math.max(o,a-.1),r.setPixelRatio(a)):ce<15&&a<Math.min(devicePixelRatio,lt.pr)&&(a=Math.min(Math.min(devicePixelRatio,lt.pr),a+.1),r.setPixelRatio(a))),requestAnimationFrame(I)};window.__drv2={groundView:u,explore:Q,ferries:g,car:v,env:A,roads:f,G:h,traffic:M,signals:w,blds:d,camera:l,renderer:r,scene:c,setCam:P=>H=P,get ft(){return ce},get pr(){return a}},requestAnimationFrame(I)}vE().catch(s=>{console.error(s),na.textContent=`Hata: ${s.message}`});
