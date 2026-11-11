(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function t(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(s){if(s.ep)return;s.ep=!0;const a=t(s);fetch(s.href,a)}})();const ol="170",Li={ROTATE:0,DOLLY:1,PAN:2},Xi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Af=0,Ql=1,pf=2,cl=1,Nu=2,Si=3,ci=0,Dn=1,zt=2,ln=0,Xs=1,Ac=2,Ol=3,Gl=4,ku=5,si=100,mf=101,gf=102,bf=103,xf=104,Sa=200,_f=201,Ef=202,vf=203,pc=204,mc=205,gc=206,Mf=207,bc=208,yf=209,wf=210,Cf=211,Sf=212,If=213,Tf=214,xc=0,_c=1,Ec=2,ta=3,vc=4,Mc=5,yc=6,wc=7,ll=0,Bf=1,Rf=2,es=0,Qu=1,Ou=2,Gu=3,hl=4,Df=5,ul=6,zu=7,zl="attached",Lf="detached",Hu=300,ms=301,na=302,Cc=303,Sc=304,no=306,Gn=1e3,Ri=1001,zr=1002,An=1003,Vu=1004,Ia=1005,Cn=1006,Ur=1007,pi=1008,nn=1009,Wu=1010,ju=1011,Ga=1012,dl=1013,gs=1014,bn=1015,dn=1016,fl=1017,Al=1018,bs=1020,qu=35902,Yu=1021,Xu=1022,sn=1023,Ku=1024,Ju=1025,Ks=1026,xs=1027,Ki=1028,pl=1029,fs=1030,ml=1031,gl=1033,Fr=33776,Da=33777,Nr=33778,La=33779,Hr=35840,Ic=35841,Vr=35842,Tc=35843,Wr=36196,jr=37492,qr=37496,za=37808,Bc=37809,Rc=37810,Dc=37811,Ha=37812,Lc=37813,Pc=37814,Uc=37815,Fc=37816,Nc=37817,kc=37818,Qc=37819,Oc=37820,Gc=37821,Pa=36492,zc=36494,Yr=36495,Zu=36283,Hc=36284,Vc=36285,Wc=36286,Va=2300,Wa=2301,po=2302,Hl=2400,Vl=2401,Wl=2402,Pf=2500,Uf=0,$u=1,jc=2,Ff=3200,Nf=3201,io=0,kf=1,fi="",Wt="srgb",xn="srgb-linear",so="linear",St="srgb",Ss=7680,jl=519,Qf=512,Of=513,Gf=514,ed=515,zf=516,Hf=517,Vf=518,Wf=519,qc=35044,ql="300 es",Di=2e3,Xr=2001;class vs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const a=s.indexOf(t);a!==-1&&s.splice(a,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let a=0,r=s.length;a<r;a++)s[a].call(this,e);e.target=null}}}const pn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Yl=1234567;const Ua=Math.PI/180,ia=180/Math.PI;function oi(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(pn[i&255]+pn[i>>8&255]+pn[i>>16&255]+pn[i>>24&255]+"-"+pn[e&255]+pn[e>>8&255]+"-"+pn[e>>16&15|64]+pn[e>>24&255]+"-"+pn[t&63|128]+pn[t>>8&255]+"-"+pn[t>>16&255]+pn[t>>24&255]+pn[n&255]+pn[n>>8&255]+pn[n>>16&255]+pn[n>>24&255]).toLowerCase()}function hn(i,e,t){return Math.max(e,Math.min(t,i))}function bl(i,e){return(i%e+e)%e}function jf(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function qf(i,e,t){return i!==e?(t-i)/(e-i):0}function Fa(i,e,t){return(1-t)*i+t*e}function Yf(i,e,t,n){return Fa(i,e,1-Math.exp(-t*n))}function Xf(i,e=1){return e-Math.abs(bl(i,e*2)-e)}function Kf(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Jf(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Zf(i,e){return i+Math.floor(Math.random()*(e-i+1))}function $f(i,e){return i+Math.random()*(e-i)}function eA(i){return i*(.5-Math.random())}function tA(i){i!==void 0&&(Yl=i);let e=Yl+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function nA(i){return i*Ua}function iA(i){return i*ia}function sA(i){return(i&i-1)===0&&i!==0}function aA(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function rA(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function oA(i,e,t,n,s){const a=Math.cos,r=Math.sin,o=a(t/2),c=r(t/2),l=a((e+n)/2),h=r((e+n)/2),u=a((e-n)/2),d=r((e-n)/2),f=a((n-e)/2),m=r((n-e)/2);switch(s){case"XYX":i.set(o*h,c*u,c*d,o*l);break;case"YZY":i.set(c*d,o*h,c*u,o*l);break;case"ZXZ":i.set(c*u,c*d,o*h,o*l);break;case"XZX":i.set(o*h,c*m,c*f,o*l);break;case"YXY":i.set(c*f,o*h,c*m,o*l);break;case"ZYZ":i.set(c*m,c*f,o*h,o*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function ai(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function It(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Jt={DEG2RAD:Ua,RAD2DEG:ia,generateUUID:oi,clamp:hn,euclideanModulo:bl,mapLinear:jf,inverseLerp:qf,lerp:Fa,damp:Yf,pingpong:Xf,smoothstep:Kf,smootherstep:Jf,randInt:Zf,randFloat:$f,randFloatSpread:eA,seededRandom:tA,degToRad:nA,radToDeg:iA,isPowerOfTwo:sA,ceilPowerOfTwo:aA,floorPowerOfTwo:rA,setQuaternionFromProperEuler:oA,normalize:It,denormalize:ai};class He{constructor(e=0,t=0){He.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(hn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),a=this.x-e.x,r=this.y-e.y;return this.x=a*n-r*s+e.x,this.y=a*s+r*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ft{constructor(e,t,n,s,a,r,o,c,l){ft.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,a,r,o,c,l)}set(e,t,n,s,a,r,o,c,l){const h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=a,h[5]=c,h[6]=n,h[7]=r,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,a=this.elements,r=n[0],o=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],f=n[5],m=n[8],x=s[0],p=s[3],A=s[6],E=s[1],_=s[4],g=s[7],B=s[2],S=s[5],T=s[8];return a[0]=r*x+o*E+c*B,a[3]=r*p+o*_+c*S,a[6]=r*A+o*g+c*T,a[1]=l*x+h*E+u*B,a[4]=l*p+h*_+u*S,a[7]=l*A+h*g+u*T,a[2]=d*x+f*E+m*B,a[5]=d*p+f*_+m*S,a[8]=d*A+f*g+m*T,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],a=e[3],r=e[4],o=e[5],c=e[6],l=e[7],h=e[8];return t*r*h-t*o*l-n*a*h+n*o*c+s*a*l-s*r*c}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],a=e[3],r=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=h*r-o*l,d=o*c-h*a,f=l*a-r*c,m=t*u+n*d+s*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/m;return e[0]=u*x,e[1]=(s*l-h*n)*x,e[2]=(o*n-s*r)*x,e[3]=d*x,e[4]=(h*t-s*c)*x,e[5]=(s*a-o*t)*x,e[6]=f*x,e[7]=(n*c-l*t)*x,e[8]=(r*t-n*a)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,a,r,o){const c=Math.cos(a),l=Math.sin(a);return this.set(n*c,n*l,-n*(c*r+l*o)+r+e,-s*l,s*c,-s*(-l*r+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(mo.makeScale(e,t)),this}rotate(e){return this.premultiply(mo.makeRotation(-e)),this}translate(e,t){return this.premultiply(mo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const mo=new ft;function td(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function ja(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function cA(){const i=ja("canvas");return i.style.display="block",i}const Xl={};function Ta(i){i in Xl||(Xl[i]=!0,console.warn(i))}function lA(i,e,t){return new Promise(function(n,s){function a(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(a,t);break;default:n()}}setTimeout(a,t)})}function hA(i){const e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function uA(i){const e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const gt={enabled:!0,workingColorSpace:xn,spaces:{},convert:function(i,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===St&&(i.r=Pi(i.r),i.g=Pi(i.g),i.b=Pi(i.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(i.applyMatrix3(this.spaces[e].toXYZ),i.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===St&&(i.r=Js(i.r),i.g=Js(i.g),i.b=Js(i.b))),i},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===fi?so:this.spaces[i].transfer},getLuminanceCoefficients:function(i,e=this.workingColorSpace){return i.fromArray(this.spaces[e].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,e,t){return i.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function Pi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Js(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const Kl=[.64,.33,.3,.6,.15,.06],Jl=[.2126,.7152,.0722],Zl=[.3127,.329],$l=new ft().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),eh=new ft().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);gt.define({[xn]:{primaries:Kl,whitePoint:Zl,transfer:so,toXYZ:$l,fromXYZ:eh,luminanceCoefficients:Jl,workingColorSpaceConfig:{unpackColorSpace:Wt},outputColorSpaceConfig:{drawingBufferColorSpace:Wt}},[Wt]:{primaries:Kl,whitePoint:Zl,transfer:St,toXYZ:$l,fromXYZ:eh,luminanceCoefficients:Jl,outputColorSpaceConfig:{drawingBufferColorSpace:Wt}}});let Is;class dA{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Is===void 0&&(Is=ja("canvas")),Is.width=e.width,Is.height=e.height;const n=Is.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Is}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ja("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),a=s.data;for(let r=0;r<a.length;r++)a[r]=Pi(a[r]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Pi(t[n]/255)*255):t[n]=Pi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let fA=0;class nd{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:fA++}),this.uuid=oi(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let a;if(Array.isArray(s)){a=[];for(let r=0,o=s.length;r<o;r++)s[r].isDataTexture?a.push(go(s[r].image)):a.push(go(s[r]))}else a=go(s);n.url=a}return t||(e.images[this.uuid]=n),n}}function go(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?dA.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let AA=0;class Xt extends vs{constructor(e=Xt.DEFAULT_IMAGE,t=Xt.DEFAULT_MAPPING,n=Ri,s=Ri,a=Cn,r=pi,o=sn,c=nn,l=Xt.DEFAULT_ANISOTROPY,h=fi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:AA++}),this.uuid=oi(),this.name="",this.source=new nd(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=a,this.minFilter=r,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new He(0,0),this.repeat=new He(1,1),this.center=new He(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ft,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Hu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Gn:e.x=e.x-Math.floor(e.x);break;case Ri:e.x=e.x<0?0:1;break;case zr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Gn:e.y=e.y-Math.floor(e.y);break;case Ri:e.y=e.y<0?0:1;break;case zr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Xt.DEFAULT_IMAGE=null;Xt.DEFAULT_MAPPING=Hu;Xt.DEFAULT_ANISOTROPY=1;class vt{constructor(e=0,t=0,n=0,s=1){vt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,a=this.w,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s+r[12]*a,this.y=r[1]*t+r[5]*n+r[9]*s+r[13]*a,this.z=r[2]*t+r[6]*n+r[10]*s+r[14]*a,this.w=r[3]*t+r[7]*n+r[11]*s+r[15]*a,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,a;const c=e.elements,l=c[0],h=c[4],u=c[8],d=c[1],f=c[5],m=c[9],x=c[2],p=c[6],A=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-x)<.01&&Math.abs(m-p)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+x)<.1&&Math.abs(m+p)<.1&&Math.abs(l+f+A-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const _=(l+1)/2,g=(f+1)/2,B=(A+1)/2,S=(h+d)/4,T=(u+x)/4,U=(m+p)/4;return _>g&&_>B?_<.01?(n=0,s=.707106781,a=.707106781):(n=Math.sqrt(_),s=S/n,a=T/n):g>B?g<.01?(n=.707106781,s=0,a=.707106781):(s=Math.sqrt(g),n=S/s,a=U/s):B<.01?(n=.707106781,s=.707106781,a=0):(a=Math.sqrt(B),n=T/a,s=U/a),this.set(n,s,a,t),this}let E=Math.sqrt((p-m)*(p-m)+(u-x)*(u-x)+(d-h)*(d-h));return Math.abs(E)<.001&&(E=1),this.x=(p-m)/E,this.y=(u-x)/E,this.z=(d-h)/E,this.w=Math.acos((l+f+A-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class pA extends vs{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new vt(0,0,e,t),this.scissorTest=!1,this.viewport=new vt(0,0,e,t);const s={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Cn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const a=new Xt(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);a.flipY=!1,a.generateMipmaps=n.generateMipmaps,a.internalFormat=n.internalFormat,this.textures=[];const r=n.count;for(let o=0;o<r;o++)this.textures[o]=a.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,a=this.textures.length;s<a;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,s=e.textures.length;n<s;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new nd(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class On extends pA{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class id extends Xt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=An,this.minFilter=An,this.wrapR=Ri,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class sd extends Xt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=An,this.minFilter=An,this.wrapR=Ri,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Vt{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,a,r,o){let c=n[s+0],l=n[s+1],h=n[s+2],u=n[s+3];const d=a[r+0],f=a[r+1],m=a[r+2],x=a[r+3];if(o===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u;return}if(o===1){e[t+0]=d,e[t+1]=f,e[t+2]=m,e[t+3]=x;return}if(u!==x||c!==d||l!==f||h!==m){let p=1-o;const A=c*d+l*f+h*m+u*x,E=A>=0?1:-1,_=1-A*A;if(_>Number.EPSILON){const B=Math.sqrt(_),S=Math.atan2(B,A*E);p=Math.sin(p*S)/B,o=Math.sin(o*S)/B}const g=o*E;if(c=c*p+d*g,l=l*p+f*g,h=h*p+m*g,u=u*p+x*g,p===1-o){const B=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=B,l*=B,h*=B,u*=B}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,a,r){const o=n[s],c=n[s+1],l=n[s+2],h=n[s+3],u=a[r],d=a[r+1],f=a[r+2],m=a[r+3];return e[t]=o*m+h*u+c*f-l*d,e[t+1]=c*m+h*d+l*u-o*f,e[t+2]=l*m+h*f+o*d-c*u,e[t+3]=h*m-o*u-c*d-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,a=e._z,r=e._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(s/2),u=o(a/2),d=c(n/2),f=c(s/2),m=c(a/2);switch(r){case"XYZ":this._x=d*h*u+l*f*m,this._y=l*f*u-d*h*m,this._z=l*h*m+d*f*u,this._w=l*h*u-d*f*m;break;case"YXZ":this._x=d*h*u+l*f*m,this._y=l*f*u-d*h*m,this._z=l*h*m-d*f*u,this._w=l*h*u+d*f*m;break;case"ZXY":this._x=d*h*u-l*f*m,this._y=l*f*u+d*h*m,this._z=l*h*m+d*f*u,this._w=l*h*u-d*f*m;break;case"ZYX":this._x=d*h*u-l*f*m,this._y=l*f*u+d*h*m,this._z=l*h*m-d*f*u,this._w=l*h*u+d*f*m;break;case"YZX":this._x=d*h*u+l*f*m,this._y=l*f*u+d*h*m,this._z=l*h*m-d*f*u,this._w=l*h*u-d*f*m;break;case"XZY":this._x=d*h*u-l*f*m,this._y=l*f*u-d*h*m,this._z=l*h*m+d*f*u,this._w=l*h*u+d*f*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],a=t[8],r=t[1],o=t[5],c=t[9],l=t[2],h=t[6],u=t[10],d=n+o+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-c)*f,this._y=(a-l)*f,this._z=(r-s)*f}else if(n>o&&n>u){const f=2*Math.sqrt(1+n-o-u);this._w=(h-c)/f,this._x=.25*f,this._y=(s+r)/f,this._z=(a+l)/f}else if(o>u){const f=2*Math.sqrt(1+o-n-u);this._w=(a-l)/f,this._x=(s+r)/f,this._y=.25*f,this._z=(c+h)/f}else{const f=2*Math.sqrt(1+u-n-o);this._w=(r-s)/f,this._x=(a+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(hn(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,a=e._z,r=e._w,o=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+r*o+s*l-a*c,this._y=s*h+r*c+a*o-n*l,this._z=a*h+r*l+n*c-s*o,this._w=r*h-n*o-s*c-a*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,a=this._z,r=this._w;let o=r*e._w+n*e._x+s*e._y+a*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=r,this._x=n,this._y=s,this._z=a,this;const c=1-o*o;if(c<=Number.EPSILON){const f=1-t;return this._w=f*r+t*this._w,this._x=f*n+t*this._x,this._y=f*s+t*this._y,this._z=f*a+t*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,o),u=Math.sin((1-t)*h)/l,d=Math.sin(t*h)/l;return this._w=r*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=a*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),a=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class G{constructor(e=0,t=0,n=0){G.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(th.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(th.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,a=e.elements;return this.x=a[0]*t+a[3]*n+a[6]*s,this.y=a[1]*t+a[4]*n+a[7]*s,this.z=a[2]*t+a[5]*n+a[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,a=e.elements,r=1/(a[3]*t+a[7]*n+a[11]*s+a[15]);return this.x=(a[0]*t+a[4]*n+a[8]*s+a[12])*r,this.y=(a[1]*t+a[5]*n+a[9]*s+a[13])*r,this.z=(a[2]*t+a[6]*n+a[10]*s+a[14])*r,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,a=e.x,r=e.y,o=e.z,c=e.w,l=2*(r*s-o*n),h=2*(o*t-a*s),u=2*(a*n-r*t);return this.x=t+c*l+r*u-o*h,this.y=n+c*h+o*l-a*u,this.z=s+c*u+a*h-r*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s,this.y=a[1]*t+a[5]*n+a[9]*s,this.z=a[2]*t+a[6]*n+a[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,a=e.z,r=t.x,o=t.y,c=t.z;return this.x=s*c-a*o,this.y=a*r-n*c,this.z=n*o-s*r,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return bo.copy(this).projectOnVector(e),this.sub(bo)}reflect(e){return this.sub(bo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(hn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const bo=new G,th=new Vt;class Ui{constructor(e=new G(1/0,1/0,1/0),t=new G(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(ei.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(ei.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=ei.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const a=n.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let r=0,o=a.count;r<o;r++)e.isMesh===!0?e.getVertexPosition(r,ei):ei.fromBufferAttribute(a,r),ei.applyMatrix4(e.matrixWorld),this.expandByPoint(ei);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),er.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),er.copy(n.boundingBox)),er.applyMatrix4(e.matrixWorld),this.union(er)}const s=e.children;for(let a=0,r=s.length;a<r;a++)this.expandByObject(s[a],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ei),ei.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ma),tr.subVectors(this.max,ma),Ts.subVectors(e.a,ma),Bs.subVectors(e.b,ma),Rs.subVectors(e.c,ma),ki.subVectors(Bs,Ts),Qi.subVectors(Rs,Bs),ts.subVectors(Ts,Rs);let t=[0,-ki.z,ki.y,0,-Qi.z,Qi.y,0,-ts.z,ts.y,ki.z,0,-ki.x,Qi.z,0,-Qi.x,ts.z,0,-ts.x,-ki.y,ki.x,0,-Qi.y,Qi.x,0,-ts.y,ts.x,0];return!xo(t,Ts,Bs,Rs,tr)||(t=[1,0,0,0,1,0,0,0,1],!xo(t,Ts,Bs,Rs,tr))?!1:(nr.crossVectors(ki,Qi),t=[nr.x,nr.y,nr.z],xo(t,Ts,Bs,Rs,tr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ei).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ei).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ei[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ei[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ei[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ei[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ei[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ei[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ei[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ei[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ei),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Ei=[new G,new G,new G,new G,new G,new G,new G,new G],ei=new G,er=new Ui,Ts=new G,Bs=new G,Rs=new G,ki=new G,Qi=new G,ts=new G,ma=new G,tr=new G,nr=new G,ns=new G;function xo(i,e,t,n,s){for(let a=0,r=i.length-3;a<=r;a+=3){ns.fromArray(i,a);const o=s.x*Math.abs(ns.x)+s.y*Math.abs(ns.y)+s.z*Math.abs(ns.z),c=e.dot(ns),l=t.dot(ns),h=n.dot(ns);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}const mA=new Ui,ga=new G,_o=new G;class gi{constructor(e=new G,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):mA.setFromPoints(e).getCenter(n);let s=0;for(let a=0,r=e.length;a<r;a++)s=Math.max(s,n.distanceToSquared(e[a]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ga.subVectors(e,this.center);const t=ga.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(ga,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(_o.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ga.copy(e.center).add(_o)),this.expandByPoint(ga.copy(e.center).sub(_o))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const vi=new G,Eo=new G,ir=new G,Oi=new G,vo=new G,sr=new G,Mo=new G;class Ja{constructor(e=new G,t=new G(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,vi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=vi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(vi.copy(this.origin).addScaledVector(this.direction,t),vi.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Eo.copy(e).add(t).multiplyScalar(.5),ir.copy(t).sub(e).normalize(),Oi.copy(this.origin).sub(Eo);const a=e.distanceTo(t)*.5,r=-this.direction.dot(ir),o=Oi.dot(this.direction),c=-Oi.dot(ir),l=Oi.lengthSq(),h=Math.abs(1-r*r);let u,d,f,m;if(h>0)if(u=r*c-o,d=r*o-c,m=a*h,u>=0)if(d>=-m)if(d<=m){const x=1/h;u*=x,d*=x,f=u*(u+r*d+2*o)+d*(r*u+d+2*c)+l}else d=a,u=Math.max(0,-(r*d+o)),f=-u*u+d*(d+2*c)+l;else d=-a,u=Math.max(0,-(r*d+o)),f=-u*u+d*(d+2*c)+l;else d<=-m?(u=Math.max(0,-(-r*a+o)),d=u>0?-a:Math.min(Math.max(-a,-c),a),f=-u*u+d*(d+2*c)+l):d<=m?(u=0,d=Math.min(Math.max(-a,-c),a),f=d*(d+2*c)+l):(u=Math.max(0,-(r*a+o)),d=u>0?a:Math.min(Math.max(-a,-c),a),f=-u*u+d*(d+2*c)+l);else d=r>0?-a:a,u=Math.max(0,-(r*d+o)),f=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Eo).addScaledVector(ir,d),f}intersectSphere(e,t){vi.subVectors(e.center,this.origin);const n=vi.dot(this.direction),s=vi.dot(vi)-n*n,a=e.radius*e.radius;if(s>a)return null;const r=Math.sqrt(a-s),o=n-r,c=n+r;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,a,r,o,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,s=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,s=(e.min.x-d.x)*l),h>=0?(a=(e.min.y-d.y)*h,r=(e.max.y-d.y)*h):(a=(e.max.y-d.y)*h,r=(e.min.y-d.y)*h),n>r||a>s||((a>n||isNaN(n))&&(n=a),(r<s||isNaN(s))&&(s=r),u>=0?(o=(e.min.z-d.z)*u,c=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,c=(e.min.z-d.z)*u),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,vi)!==null}intersectTriangle(e,t,n,s,a){vo.subVectors(t,e),sr.subVectors(n,e),Mo.crossVectors(vo,sr);let r=this.direction.dot(Mo),o;if(r>0){if(s)return null;o=1}else if(r<0)o=-1,r=-r;else return null;Oi.subVectors(this.origin,e);const c=o*this.direction.dot(sr.crossVectors(Oi,sr));if(c<0)return null;const l=o*this.direction.dot(vo.cross(Oi));if(l<0||c+l>r)return null;const h=-o*Oi.dot(Mo);return h<0?null:this.at(h/r,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class $e{constructor(e,t,n,s,a,r,o,c,l,h,u,d,f,m,x,p){$e.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,a,r,o,c,l,h,u,d,f,m,x,p)}set(e,t,n,s,a,r,o,c,l,h,u,d,f,m,x,p){const A=this.elements;return A[0]=e,A[4]=t,A[8]=n,A[12]=s,A[1]=a,A[5]=r,A[9]=o,A[13]=c,A[2]=l,A[6]=h,A[10]=u,A[14]=d,A[3]=f,A[7]=m,A[11]=x,A[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new $e().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/Ds.setFromMatrixColumn(e,0).length(),a=1/Ds.setFromMatrixColumn(e,1).length(),r=1/Ds.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*a,t[5]=n[5]*a,t[6]=n[6]*a,t[7]=0,t[8]=n[8]*r,t[9]=n[9]*r,t[10]=n[10]*r,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,a=e.z,r=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(a),u=Math.sin(a);if(e.order==="XYZ"){const d=r*h,f=r*u,m=o*h,x=o*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=f+m*l,t[5]=d-x*l,t[9]=-o*c,t[2]=x-d*l,t[6]=m+f*l,t[10]=r*c}else if(e.order==="YXZ"){const d=c*h,f=c*u,m=l*h,x=l*u;t[0]=d+x*o,t[4]=m*o-f,t[8]=r*l,t[1]=r*u,t[5]=r*h,t[9]=-o,t[2]=f*o-m,t[6]=x+d*o,t[10]=r*c}else if(e.order==="ZXY"){const d=c*h,f=c*u,m=l*h,x=l*u;t[0]=d-x*o,t[4]=-r*u,t[8]=m+f*o,t[1]=f+m*o,t[5]=r*h,t[9]=x-d*o,t[2]=-r*l,t[6]=o,t[10]=r*c}else if(e.order==="ZYX"){const d=r*h,f=r*u,m=o*h,x=o*u;t[0]=c*h,t[4]=m*l-f,t[8]=d*l+x,t[1]=c*u,t[5]=x*l+d,t[9]=f*l-m,t[2]=-l,t[6]=o*c,t[10]=r*c}else if(e.order==="YZX"){const d=r*c,f=r*l,m=o*c,x=o*l;t[0]=c*h,t[4]=x-d*u,t[8]=m*u+f,t[1]=u,t[5]=r*h,t[9]=-o*h,t[2]=-l*h,t[6]=f*u+m,t[10]=d-x*u}else if(e.order==="XZY"){const d=r*c,f=r*l,m=o*c,x=o*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=d*u+x,t[5]=r*h,t[9]=f*u-m,t[2]=m*u-f,t[6]=o*h,t[10]=x*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(gA,e,bA)}lookAt(e,t,n){const s=this.elements;return Un.subVectors(e,t),Un.lengthSq()===0&&(Un.z=1),Un.normalize(),Gi.crossVectors(n,Un),Gi.lengthSq()===0&&(Math.abs(n.z)===1?Un.x+=1e-4:Un.z+=1e-4,Un.normalize(),Gi.crossVectors(n,Un)),Gi.normalize(),ar.crossVectors(Un,Gi),s[0]=Gi.x,s[4]=ar.x,s[8]=Un.x,s[1]=Gi.y,s[5]=ar.y,s[9]=Un.y,s[2]=Gi.z,s[6]=ar.z,s[10]=Un.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,a=this.elements,r=n[0],o=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],f=n[13],m=n[2],x=n[6],p=n[10],A=n[14],E=n[3],_=n[7],g=n[11],B=n[15],S=s[0],T=s[4],U=s[8],M=s[12],y=s[1],L=s[5],V=s[9],te=s[13],Ae=s[2],ae=s[6],ce=s[10],se=s[14],J=s[3],fe=s[7],$=s[11],me=s[15];return a[0]=r*S+o*y+c*Ae+l*J,a[4]=r*T+o*L+c*ae+l*fe,a[8]=r*U+o*V+c*ce+l*$,a[12]=r*M+o*te+c*se+l*me,a[1]=h*S+u*y+d*Ae+f*J,a[5]=h*T+u*L+d*ae+f*fe,a[9]=h*U+u*V+d*ce+f*$,a[13]=h*M+u*te+d*se+f*me,a[2]=m*S+x*y+p*Ae+A*J,a[6]=m*T+x*L+p*ae+A*fe,a[10]=m*U+x*V+p*ce+A*$,a[14]=m*M+x*te+p*se+A*me,a[3]=E*S+_*y+g*Ae+B*J,a[7]=E*T+_*L+g*ae+B*fe,a[11]=E*U+_*V+g*ce+B*$,a[15]=E*M+_*te+g*se+B*me,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],a=e[12],r=e[1],o=e[5],c=e[9],l=e[13],h=e[2],u=e[6],d=e[10],f=e[14],m=e[3],x=e[7],p=e[11],A=e[15];return m*(+a*c*u-s*l*u-a*o*d+n*l*d+s*o*f-n*c*f)+x*(+t*c*f-t*l*d+a*r*d-s*r*f+s*l*h-a*c*h)+p*(+t*l*u-t*o*f-a*r*u+n*r*f+a*o*h-n*l*h)+A*(-s*o*h-t*c*u+t*o*d+s*r*u-n*r*d+n*c*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],a=e[3],r=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=e[9],d=e[10],f=e[11],m=e[12],x=e[13],p=e[14],A=e[15],E=u*p*l-x*d*l+x*c*f-o*p*f-u*c*A+o*d*A,_=m*d*l-h*p*l-m*c*f+r*p*f+h*c*A-r*d*A,g=h*x*l-m*u*l+m*o*f-r*x*f-h*o*A+r*u*A,B=m*u*c-h*x*c-m*o*d+r*x*d+h*o*p-r*u*p,S=t*E+n*_+s*g+a*B;if(S===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/S;return e[0]=E*T,e[1]=(x*d*a-u*p*a-x*s*f+n*p*f+u*s*A-n*d*A)*T,e[2]=(o*p*a-x*c*a+x*s*l-n*p*l-o*s*A+n*c*A)*T,e[3]=(u*c*a-o*d*a-u*s*l+n*d*l+o*s*f-n*c*f)*T,e[4]=_*T,e[5]=(h*p*a-m*d*a+m*s*f-t*p*f-h*s*A+t*d*A)*T,e[6]=(m*c*a-r*p*a-m*s*l+t*p*l+r*s*A-t*c*A)*T,e[7]=(r*d*a-h*c*a+h*s*l-t*d*l-r*s*f+t*c*f)*T,e[8]=g*T,e[9]=(m*u*a-h*x*a-m*n*f+t*x*f+h*n*A-t*u*A)*T,e[10]=(r*x*a-m*o*a+m*n*l-t*x*l-r*n*A+t*o*A)*T,e[11]=(h*o*a-r*u*a-h*n*l+t*u*l+r*n*f-t*o*f)*T,e[12]=B*T,e[13]=(h*x*s-m*u*s+m*n*d-t*x*d-h*n*p+t*u*p)*T,e[14]=(m*o*s-r*x*s-m*n*c+t*x*c+r*n*p-t*o*p)*T,e[15]=(r*u*s-h*o*s+h*n*c-t*u*c-r*n*d+t*o*d)*T,this}scale(e){const t=this.elements,n=e.x,s=e.y,a=e.z;return t[0]*=n,t[4]*=s,t[8]*=a,t[1]*=n,t[5]*=s,t[9]*=a,t[2]*=n,t[6]*=s,t[10]*=a,t[3]*=n,t[7]*=s,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),a=1-n,r=e.x,o=e.y,c=e.z,l=a*r,h=a*o;return this.set(l*r+n,l*o-s*c,l*c+s*o,0,l*o+s*c,h*o+n,h*c-s*r,0,l*c-s*o,h*c+s*r,a*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,a,r){return this.set(1,n,a,0,e,1,r,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,a=t._x,r=t._y,o=t._z,c=t._w,l=a+a,h=r+r,u=o+o,d=a*l,f=a*h,m=a*u,x=r*h,p=r*u,A=o*u,E=c*l,_=c*h,g=c*u,B=n.x,S=n.y,T=n.z;return s[0]=(1-(x+A))*B,s[1]=(f+g)*B,s[2]=(m-_)*B,s[3]=0,s[4]=(f-g)*S,s[5]=(1-(d+A))*S,s[6]=(p+E)*S,s[7]=0,s[8]=(m+_)*T,s[9]=(p-E)*T,s[10]=(1-(d+x))*T,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let a=Ds.set(s[0],s[1],s[2]).length();const r=Ds.set(s[4],s[5],s[6]).length(),o=Ds.set(s[8],s[9],s[10]).length();this.determinant()<0&&(a=-a),e.x=s[12],e.y=s[13],e.z=s[14],ti.copy(this);const l=1/a,h=1/r,u=1/o;return ti.elements[0]*=l,ti.elements[1]*=l,ti.elements[2]*=l,ti.elements[4]*=h,ti.elements[5]*=h,ti.elements[6]*=h,ti.elements[8]*=u,ti.elements[9]*=u,ti.elements[10]*=u,t.setFromRotationMatrix(ti),n.x=a,n.y=r,n.z=o,this}makePerspective(e,t,n,s,a,r,o=Di){const c=this.elements,l=2*a/(t-e),h=2*a/(n-s),u=(t+e)/(t-e),d=(n+s)/(n-s);let f,m;if(o===Di)f=-(r+a)/(r-a),m=-2*r*a/(r-a);else if(o===Xr)f=-r/(r-a),m=-r*a/(r-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,a,r,o=Di){const c=this.elements,l=1/(t-e),h=1/(n-s),u=1/(r-a),d=(t+e)*l,f=(n+s)*h;let m,x;if(o===Di)m=(r+a)*u,x=-2*u;else if(o===Xr)m=a*u,x=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=x,c[14]=-m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Ds=new G,ti=new $e,gA=new G(0,0,0),bA=new G(1,1,1),Gi=new G,ar=new G,Un=new G,nh=new $e,ih=new Vt;class Zn{constructor(e=0,t=0,n=0,s=Zn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,a=s[0],r=s[4],o=s[8],c=s[1],l=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(hn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-r,a)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-hn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,a),this._z=0);break;case"ZXY":this._x=Math.asin(hn(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-r,l)):(this._y=0,this._z=Math.atan2(c,a));break;case"ZYX":this._y=Math.asin(-hn(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,a)):(this._x=0,this._z=Math.atan2(-r,l));break;case"YZX":this._z=Math.asin(hn(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,a)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-hn(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,a)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return nh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(nh,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ih.setFromEuler(this),this.setFromQuaternion(ih,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Zn.DEFAULT_ORDER="XYZ";class ad{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let xA=0;const sh=new G,Ls=new Vt,Mi=new $e,rr=new G,ba=new G,_A=new G,EA=new Vt,ah=new G(1,0,0),rh=new G(0,1,0),oh=new G(0,0,1),ch={type:"added"},vA={type:"removed"},Ps={type:"childadded",child:null},yo={type:"childremoved",child:null};class Ot extends vs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:xA++}),this.uuid=oi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ot.DEFAULT_UP.clone();const e=new G,t=new Zn,n=new Vt,s=new G(1,1,1);function a(){n.setFromEuler(t,!1)}function r(){t.setFromQuaternion(n,void 0,!1)}t._onChange(a),n._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new $e},normalMatrix:{value:new ft}}),this.matrix=new $e,this.matrixWorld=new $e,this.matrixAutoUpdate=Ot.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ot.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ad,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ls.setFromAxisAngle(e,t),this.quaternion.multiply(Ls),this}rotateOnWorldAxis(e,t){return Ls.setFromAxisAngle(e,t),this.quaternion.premultiply(Ls),this}rotateX(e){return this.rotateOnAxis(ah,e)}rotateY(e){return this.rotateOnAxis(rh,e)}rotateZ(e){return this.rotateOnAxis(oh,e)}translateOnAxis(e,t){return sh.copy(e).applyQuaternion(this.quaternion),this.position.add(sh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ah,e)}translateY(e){return this.translateOnAxis(rh,e)}translateZ(e){return this.translateOnAxis(oh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Mi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?rr.copy(e):rr.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),ba.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Mi.lookAt(ba,rr,this.up):Mi.lookAt(rr,ba,this.up),this.quaternion.setFromRotationMatrix(Mi),s&&(Mi.extractRotation(s.matrixWorld),Ls.setFromRotationMatrix(Mi),this.quaternion.premultiply(Ls.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ch),Ps.child=e,this.dispatchEvent(Ps),Ps.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(vA),yo.child=e,this.dispatchEvent(yo),yo.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Mi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Mi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Mi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ch),Ps.child=e,this.dispatchEvent(Ps),Ps.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let a=0,r=s.length;a<r;a++)s[a].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ba,e,_A),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ba,EA,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let a=0,r=s.length;a<r;a++)s[a].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function a(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=a(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];a(e.shapes,u)}else a(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(a(e.materials,this.material[c]));s.material=o}else s.material=a(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];s.animations.push(a(e.animations,c))}}if(t){const o=r(e.geometries),c=r(e.materials),l=r(e.textures),h=r(e.images),u=r(e.shapes),d=r(e.skeletons),f=r(e.animations),m=r(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),m.length>0&&(n.nodes=m)}return n.object=s,n;function r(o){const c=[];for(const l in o){const h=o[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}Ot.DEFAULT_UP=new G(0,1,0);Ot.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ot.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ni=new G,yi=new G,wo=new G,wi=new G,Us=new G,Fs=new G,lh=new G,Co=new G,So=new G,Io=new G,To=new vt,Bo=new vt,Ro=new vt;class ri{constructor(e=new G,t=new G,n=new G){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),ni.subVectors(e,t),s.cross(ni);const a=s.lengthSq();return a>0?s.multiplyScalar(1/Math.sqrt(a)):s.set(0,0,0)}static getBarycoord(e,t,n,s,a){ni.subVectors(s,t),yi.subVectors(n,t),wo.subVectors(e,t);const r=ni.dot(ni),o=ni.dot(yi),c=ni.dot(wo),l=yi.dot(yi),h=yi.dot(wo),u=r*l-o*o;if(u===0)return a.set(0,0,0),null;const d=1/u,f=(l*c-o*h)*d,m=(r*h-o*c)*d;return a.set(1-f-m,m,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,wi)===null?!1:wi.x>=0&&wi.y>=0&&wi.x+wi.y<=1}static getInterpolation(e,t,n,s,a,r,o,c){return this.getBarycoord(e,t,n,s,wi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(a,wi.x),c.addScaledVector(r,wi.y),c.addScaledVector(o,wi.z),c)}static getInterpolatedAttribute(e,t,n,s,a,r){return To.setScalar(0),Bo.setScalar(0),Ro.setScalar(0),To.fromBufferAttribute(e,t),Bo.fromBufferAttribute(e,n),Ro.fromBufferAttribute(e,s),r.setScalar(0),r.addScaledVector(To,a.x),r.addScaledVector(Bo,a.y),r.addScaledVector(Ro,a.z),r}static isFrontFacing(e,t,n,s){return ni.subVectors(n,t),yi.subVectors(e,t),ni.cross(yi).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ni.subVectors(this.c,this.b),yi.subVectors(this.a,this.b),ni.cross(yi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ri.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ri.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,a){return ri.getInterpolation(e,this.a,this.b,this.c,t,n,s,a)}containsPoint(e){return ri.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ri.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,a=this.c;let r,o;Us.subVectors(s,n),Fs.subVectors(a,n),Co.subVectors(e,n);const c=Us.dot(Co),l=Fs.dot(Co);if(c<=0&&l<=0)return t.copy(n);So.subVectors(e,s);const h=Us.dot(So),u=Fs.dot(So);if(h>=0&&u<=h)return t.copy(s);const d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return r=c/(c-h),t.copy(n).addScaledVector(Us,r);Io.subVectors(e,a);const f=Us.dot(Io),m=Fs.dot(Io);if(m>=0&&f<=m)return t.copy(a);const x=f*l-c*m;if(x<=0&&l>=0&&m<=0)return o=l/(l-m),t.copy(n).addScaledVector(Fs,o);const p=h*m-f*u;if(p<=0&&u-h>=0&&f-m>=0)return lh.subVectors(a,s),o=(u-h)/(u-h+(f-m)),t.copy(s).addScaledVector(lh,o);const A=1/(p+x+d);return r=x*A,o=d*A,t.copy(n).addScaledVector(Us,r).addScaledVector(Fs,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const rd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},zi={h:0,s:0,l:0},or={h:0,s:0,l:0};function Do(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class De{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Wt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,gt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=gt.workingColorSpace){return this.r=e,this.g=t,this.b=n,gt.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=gt.workingColorSpace){if(e=bl(e,1),t=hn(t,0,1),n=hn(n,0,1),t===0)this.r=this.g=this.b=n;else{const a=n<=.5?n*(1+t):n+t-n*t,r=2*n-a;this.r=Do(r,a,e+1/3),this.g=Do(r,a,e),this.b=Do(r,a,e-1/3)}return gt.toWorkingColorSpace(this,s),this}setStyle(e,t=Wt){function n(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const r=s[1],o=s[2];switch(r){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=s[1],r=a.length;if(r===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(r===6)return this.setHex(parseInt(a,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Wt){const n=rd[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Pi(e.r),this.g=Pi(e.g),this.b=Pi(e.b),this}copyLinearToSRGB(e){return this.r=Js(e.r),this.g=Js(e.g),this.b=Js(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Wt){return gt.fromWorkingColorSpace(mn.copy(this),e),Math.round(hn(mn.r*255,0,255))*65536+Math.round(hn(mn.g*255,0,255))*256+Math.round(hn(mn.b*255,0,255))}getHexString(e=Wt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=gt.workingColorSpace){gt.fromWorkingColorSpace(mn.copy(this),t);const n=mn.r,s=mn.g,a=mn.b,r=Math.max(n,s,a),o=Math.min(n,s,a);let c,l;const h=(o+r)/2;if(o===r)c=0,l=0;else{const u=r-o;switch(l=h<=.5?u/(r+o):u/(2-r-o),r){case n:c=(s-a)/u+(s<a?6:0);break;case s:c=(a-n)/u+2;break;case a:c=(n-s)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=gt.workingColorSpace){return gt.fromWorkingColorSpace(mn.copy(this),t),e.r=mn.r,e.g=mn.g,e.b=mn.b,e}getStyle(e=Wt){gt.fromWorkingColorSpace(mn.copy(this),e);const t=mn.r,n=mn.g,s=mn.b;return e!==Wt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(zi),this.setHSL(zi.h+e,zi.s+t,zi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(zi),e.getHSL(or);const n=Fa(zi.h,or.h,t),s=Fa(zi.s,or.s,t),a=Fa(zi.l,or.l,t);return this.setHSL(n,s,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,a=e.elements;return this.r=a[0]*t+a[3]*n+a[6]*s,this.g=a[1]*t+a[4]*n+a[7]*s,this.b=a[2]*t+a[5]*n+a[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const mn=new De;De.NAMES=rd;let MA=0;class Jn extends vs{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:MA++}),this.uuid=oi(),this.name="",this.blending=Xs,this.side=ci,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=pc,this.blendDst=mc,this.blendEquation=si,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new De(0,0,0),this.blendAlpha=0,this.depthFunc=ta,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=jl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ss,this.stencilZFail=Ss,this.stencilZPass=Ss,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Xs&&(n.blending=this.blending),this.side!==ci&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==pc&&(n.blendSrc=this.blendSrc),this.blendDst!==mc&&(n.blendDst=this.blendDst),this.blendEquation!==si&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ta&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==jl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ss&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ss&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ss&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(a){const r=[];for(const o in a){const c=a[o];delete c.metadata,r.push(c)}return r}if(t){const a=s(e.textures),r=s(e.images);a.length>0&&(n.textures=a),r.length>0&&(n.images=r)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let a=0;a!==s;++a)n[a]=t[a].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Qn extends Jn{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new De(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Zn,this.combine=ll,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Kt=new G,cr=new He;class Gt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=qc,this.updateRanges=[],this.gpuType=bn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,a=this.itemSize;s<a;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)cr.fromBufferAttribute(this,t),cr.applyMatrix3(e),this.setXY(t,cr.x,cr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Kt.fromBufferAttribute(this,t),Kt.applyMatrix3(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Kt.fromBufferAttribute(this,t),Kt.applyMatrix4(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Kt.fromBufferAttribute(this,t),Kt.applyNormalMatrix(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Kt.fromBufferAttribute(this,t),Kt.transformDirection(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=ai(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=It(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ai(t,this.array)),t}setX(e,t){return this.normalized&&(t=It(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ai(t,this.array)),t}setY(e,t){return this.normalized&&(t=It(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ai(t,this.array)),t}setZ(e,t){return this.normalized&&(t=It(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ai(t,this.array)),t}setW(e,t){return this.normalized&&(t=It(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=It(t,this.array),n=It(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=It(t,this.array),n=It(n,this.array),s=It(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,a){return e*=this.itemSize,this.normalized&&(t=It(t,this.array),n=It(n,this.array),s=It(s,this.array),a=It(a,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==qc&&(e.usage=this.usage),e}}class xl extends Gt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class _l extends Gt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class ht extends Gt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let yA=0;const Hn=new $e,Lo=new Ot,Ns=new G,Fn=new Ui,xa=new Ui,on=new G;class Bt extends vs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:yA++}),this.uuid=oi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(td(e)?_l:xl)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const a=new ft().getNormalMatrix(e);n.applyNormalMatrix(a),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Hn.makeRotationFromQuaternion(e),this.applyMatrix4(Hn),this}rotateX(e){return Hn.makeRotationX(e),this.applyMatrix4(Hn),this}rotateY(e){return Hn.makeRotationY(e),this.applyMatrix4(Hn),this}rotateZ(e){return Hn.makeRotationZ(e),this.applyMatrix4(Hn),this}translate(e,t,n){return Hn.makeTranslation(e,t,n),this.applyMatrix4(Hn),this}scale(e,t,n){return Hn.makeScale(e,t,n),this.applyMatrix4(Hn),this}lookAt(e){return Lo.lookAt(e),Lo.updateMatrix(),this.applyMatrix4(Lo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ns).negate(),this.translate(Ns.x,Ns.y,Ns.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,a=e.length;s<a;s++){const r=e[s];n.push(r.x,r.y,r.z||0)}this.setAttribute("position",new ht(n,3))}else{for(let n=0,s=t.count;n<s;n++){const a=e[n];t.setXYZ(n,a.x,a.y,a.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ui);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new G(-1/0,-1/0,-1/0),new G(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const a=t[n];Fn.setFromBufferAttribute(a),this.morphTargetsRelative?(on.addVectors(this.boundingBox.min,Fn.min),this.boundingBox.expandByPoint(on),on.addVectors(this.boundingBox.max,Fn.max),this.boundingBox.expandByPoint(on)):(this.boundingBox.expandByPoint(Fn.min),this.boundingBox.expandByPoint(Fn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new gi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new G,1/0);return}if(e){const n=this.boundingSphere.center;if(Fn.setFromBufferAttribute(e),t)for(let a=0,r=t.length;a<r;a++){const o=t[a];xa.setFromBufferAttribute(o),this.morphTargetsRelative?(on.addVectors(Fn.min,xa.min),Fn.expandByPoint(on),on.addVectors(Fn.max,xa.max),Fn.expandByPoint(on)):(Fn.expandByPoint(xa.min),Fn.expandByPoint(xa.max))}Fn.getCenter(n);let s=0;for(let a=0,r=e.count;a<r;a++)on.fromBufferAttribute(e,a),s=Math.max(s,n.distanceToSquared(on));if(t)for(let a=0,r=t.length;a<r;a++){const o=t[a],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)on.fromBufferAttribute(o,l),c&&(Ns.fromBufferAttribute(e,l),on.add(Ns)),s=Math.max(s,n.distanceToSquared(on))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,a=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Gt(new Float32Array(4*n.count),4));const r=this.getAttribute("tangent"),o=[],c=[];for(let U=0;U<n.count;U++)o[U]=new G,c[U]=new G;const l=new G,h=new G,u=new G,d=new He,f=new He,m=new He,x=new G,p=new G;function A(U,M,y){l.fromBufferAttribute(n,U),h.fromBufferAttribute(n,M),u.fromBufferAttribute(n,y),d.fromBufferAttribute(a,U),f.fromBufferAttribute(a,M),m.fromBufferAttribute(a,y),h.sub(l),u.sub(l),f.sub(d),m.sub(d);const L=1/(f.x*m.y-m.x*f.y);isFinite(L)&&(x.copy(h).multiplyScalar(m.y).addScaledVector(u,-f.y).multiplyScalar(L),p.copy(u).multiplyScalar(f.x).addScaledVector(h,-m.x).multiplyScalar(L),o[U].add(x),o[M].add(x),o[y].add(x),c[U].add(p),c[M].add(p),c[y].add(p))}let E=this.groups;E.length===0&&(E=[{start:0,count:e.count}]);for(let U=0,M=E.length;U<M;++U){const y=E[U],L=y.start,V=y.count;for(let te=L,Ae=L+V;te<Ae;te+=3)A(e.getX(te+0),e.getX(te+1),e.getX(te+2))}const _=new G,g=new G,B=new G,S=new G;function T(U){B.fromBufferAttribute(s,U),S.copy(B);const M=o[U];_.copy(M),_.sub(B.multiplyScalar(B.dot(M))).normalize(),g.crossVectors(S,M);const L=g.dot(c[U])<0?-1:1;r.setXYZW(U,_.x,_.y,_.z,L)}for(let U=0,M=E.length;U<M;++U){const y=E[U],L=y.start,V=y.count;for(let te=L,Ae=L+V;te<Ae;te+=3)T(e.getX(te+0)),T(e.getX(te+1)),T(e.getX(te+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Gt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const s=new G,a=new G,r=new G,o=new G,c=new G,l=new G,h=new G,u=new G;if(e)for(let d=0,f=e.count;d<f;d+=3){const m=e.getX(d+0),x=e.getX(d+1),p=e.getX(d+2);s.fromBufferAttribute(t,m),a.fromBufferAttribute(t,x),r.fromBufferAttribute(t,p),h.subVectors(r,a),u.subVectors(s,a),h.cross(u),o.fromBufferAttribute(n,m),c.fromBufferAttribute(n,x),l.fromBufferAttribute(n,p),o.add(h),c.add(h),l.add(h),n.setXYZ(m,o.x,o.y,o.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(p,l.x,l.y,l.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),a.fromBufferAttribute(t,d+1),r.fromBufferAttribute(t,d+2),h.subVectors(r,a),u.subVectors(s,a),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)on.fromBufferAttribute(e,t),on.normalize(),e.setXYZ(t,on.x,on.y,on.z)}toNonIndexed(){function e(o,c){const l=o.array,h=o.itemSize,u=o.normalized,d=new l.constructor(c.length*h);let f=0,m=0;for(let x=0,p=c.length;x<p;x++){o.isInterleavedBufferAttribute?f=c[x]*o.data.stride+o.offset:f=c[x]*h;for(let A=0;A<h;A++)d[m++]=l[f++]}return new Gt(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Bt,n=this.index.array,s=this.attributes;for(const o in s){const c=s[o],l=e(c,n);t.setAttribute(o,l)}const a=this.morphAttributes;for(const o in a){const c=[],l=a[o];for(let h=0,u=l.length;h<u;h++){const d=l[h],f=e(d,n);c.push(f)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let o=0,c=r.length;o<c;o++){const l=r[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const s={};let a=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){const f=l[u];h.push(f.toJSON(e.data))}h.length>0&&(s[c]=h,a=!0)}a&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(e.data.groups=JSON.parse(JSON.stringify(r)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const s=e.attributes;for(const l in s){const h=s[l];this.setAttribute(l,h.clone(t))}const a=e.morphAttributes;for(const l in a){const h=[],u=a[l];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;const r=e.groups;for(let l=0,h=r.length;l<h;l++){const u=r[l];this.addGroup(u.start,u.count,u.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const hh=new $e,is=new Ja,lr=new gi,uh=new G,hr=new G,ur=new G,dr=new G,Po=new G,fr=new G,dh=new G,Ar=new G;class lt extends Ot{constructor(e=new Bt,t=new Qn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,r=s.length;a<r;a++){const o=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,a=n.morphAttributes.position,r=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(a&&o){fr.set(0,0,0);for(let c=0,l=a.length;c<l;c++){const h=o[c],u=a[c];h!==0&&(Po.fromBufferAttribute(u,e),r?fr.addScaledVector(Po,h):fr.addScaledVector(Po.sub(t),h))}t.add(fr)}return t}raycast(e,t){const n=this.geometry,s=this.material,a=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),lr.copy(n.boundingSphere),lr.applyMatrix4(a),is.copy(e.ray).recast(e.near),!(lr.containsPoint(is.origin)===!1&&(is.intersectSphere(lr,uh)===null||is.origin.distanceToSquared(uh)>(e.far-e.near)**2))&&(hh.copy(a).invert(),is.copy(e.ray).applyMatrix4(hh),!(n.boundingBox!==null&&is.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,is)))}_computeIntersections(e,t,n){let s;const a=this.geometry,r=this.material,o=a.index,c=a.attributes.position,l=a.attributes.uv,h=a.attributes.uv1,u=a.attributes.normal,d=a.groups,f=a.drawRange;if(o!==null)if(Array.isArray(r))for(let m=0,x=d.length;m<x;m++){const p=d[m],A=r[p.materialIndex],E=Math.max(p.start,f.start),_=Math.min(o.count,Math.min(p.start+p.count,f.start+f.count));for(let g=E,B=_;g<B;g+=3){const S=o.getX(g),T=o.getX(g+1),U=o.getX(g+2);s=pr(this,A,e,n,l,h,u,S,T,U),s&&(s.faceIndex=Math.floor(g/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{const m=Math.max(0,f.start),x=Math.min(o.count,f.start+f.count);for(let p=m,A=x;p<A;p+=3){const E=o.getX(p),_=o.getX(p+1),g=o.getX(p+2);s=pr(this,r,e,n,l,h,u,E,_,g),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(r))for(let m=0,x=d.length;m<x;m++){const p=d[m],A=r[p.materialIndex],E=Math.max(p.start,f.start),_=Math.min(c.count,Math.min(p.start+p.count,f.start+f.count));for(let g=E,B=_;g<B;g+=3){const S=g,T=g+1,U=g+2;s=pr(this,A,e,n,l,h,u,S,T,U),s&&(s.faceIndex=Math.floor(g/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{const m=Math.max(0,f.start),x=Math.min(c.count,f.start+f.count);for(let p=m,A=x;p<A;p+=3){const E=p,_=p+1,g=p+2;s=pr(this,r,e,n,l,h,u,E,_,g),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}}}function wA(i,e,t,n,s,a,r,o){let c;if(e.side===Dn?c=n.intersectTriangle(r,a,s,!0,o):c=n.intersectTriangle(s,a,r,e.side===ci,o),c===null)return null;Ar.copy(o),Ar.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(Ar);return l<t.near||l>t.far?null:{distance:l,point:Ar.clone(),object:i}}function pr(i,e,t,n,s,a,r,o,c,l){i.getVertexPosition(o,hr),i.getVertexPosition(c,ur),i.getVertexPosition(l,dr);const h=wA(i,e,t,n,hr,ur,dr,dh);if(h){const u=new G;ri.getBarycoord(dh,hr,ur,dr,u),s&&(h.uv=ri.getInterpolatedAttribute(s,o,c,l,u,new He)),a&&(h.uv1=ri.getInterpolatedAttribute(a,o,c,l,u,new He)),r&&(h.normal=ri.getInterpolatedAttribute(r,o,c,l,u,new G),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a:o,b:c,c:l,normal:new G,materialIndex:0};ri.getNormal(hr,ur,dr,d.normal),h.face=d,h.barycoord=u}return h}class Ft extends Bt{constructor(e=1,t=1,n=1,s=1,a=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:a,depthSegments:r};const o=this;s=Math.floor(s),a=Math.floor(a),r=Math.floor(r);const c=[],l=[],h=[],u=[];let d=0,f=0;m("z","y","x",-1,-1,n,t,e,r,a,0),m("z","y","x",1,-1,n,t,-e,r,a,1),m("x","z","y",1,1,e,n,t,s,r,2),m("x","z","y",1,-1,e,n,-t,s,r,3),m("x","y","z",1,-1,e,t,n,s,a,4),m("x","y","z",-1,-1,e,t,-n,s,a,5),this.setIndex(c),this.setAttribute("position",new ht(l,3)),this.setAttribute("normal",new ht(h,3)),this.setAttribute("uv",new ht(u,2));function m(x,p,A,E,_,g,B,S,T,U,M){const y=g/T,L=B/U,V=g/2,te=B/2,Ae=S/2,ae=T+1,ce=U+1;let se=0,J=0;const fe=new G;for(let $=0;$<ce;$++){const me=$*L-te;for(let Ce=0;Ce<ae;Ce++){const Me=Ce*y-V;fe[x]=Me*E,fe[p]=me*_,fe[A]=Ae,l.push(fe.x,fe.y,fe.z),fe[x]=0,fe[p]=0,fe[A]=S>0?1:-1,h.push(fe.x,fe.y,fe.z),u.push(Ce/T),u.push(1-$/U),se+=1}}for(let $=0;$<U;$++)for(let me=0;me<T;me++){const Ce=d+me+ae*$,Me=d+me+ae*($+1),ne=d+(me+1)+ae*($+1),Ee=d+(me+1)+ae*$;c.push(Ce,Me,Ee),c.push(Me,ne,Ee),J+=6}o.addGroup(f,J,M),f+=J,d+=se}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ft(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function sa(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function Mn(i){const e={};for(let t=0;t<i.length;t++){const n=sa(i[t]);for(const s in n)e[s]=n[s]}return e}function CA(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function od(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:gt.workingColorSpace}const Ai={clone:sa,merge:Mn};var SA=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,IA=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Zt extends Jn{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=SA,this.fragmentShader=IA,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=sa(e.uniforms),this.uniformsGroups=CA(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const r=this.uniforms[s].value;r&&r.isTexture?t.uniforms[s]={type:"t",value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[s]={type:"c",value:r.getHex()}:r&&r.isVector2?t.uniforms[s]={type:"v2",value:r.toArray()}:r&&r.isVector3?t.uniforms[s]={type:"v3",value:r.toArray()}:r&&r.isVector4?t.uniforms[s]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?t.uniforms[s]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?t.uniforms[s]={type:"m4",value:r.toArray()}:t.uniforms[s]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class cd extends Ot{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new $e,this.projectionMatrix=new $e,this.projectionMatrixInverse=new $e,this.coordinateSystem=Di}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Hi=new G,fh=new He,Ah=new He;class yn extends cd{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ia*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ua*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ia*2*Math.atan(Math.tan(Ua*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Hi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Hi.x,Hi.y).multiplyScalar(-e/Hi.z),Hi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Hi.x,Hi.y).multiplyScalar(-e/Hi.z)}getViewSize(e,t){return this.getViewBounds(e,fh,Ah),t.subVectors(Ah,fh)}setViewOffset(e,t,n,s,a,r){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=a,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ua*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,a=-.5*s;const r=this.view;if(this.view!==null&&this.view.enabled){const c=r.fullWidth,l=r.fullHeight;a+=r.offsetX*s/c,t-=r.offsetY*n/l,s*=r.width/c,n*=r.height/l}const o=this.filmOffset;o!==0&&(a+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ks=-90,Qs=1;class TA extends Ot{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new yn(ks,Qs,e,t);s.layers=this.layers,this.add(s);const a=new yn(ks,Qs,e,t);a.layers=this.layers,this.add(a);const r=new yn(ks,Qs,e,t);r.layers=this.layers,this.add(r);const o=new yn(ks,Qs,e,t);o.layers=this.layers,this.add(o);const c=new yn(ks,Qs,e,t);c.layers=this.layers,this.add(c);const l=new yn(ks,Qs,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,a,r,o,c]=t;for(const l of t)this.remove(l);if(e===Di)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Xr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,r,o,c,l,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,a),e.setRenderTarget(n,1,s),e.render(t,r),e.setRenderTarget(n,2,s),e.render(t,o),e.setRenderTarget(n,3,s),e.render(t,c),e.setRenderTarget(n,4,s),e.render(t,l),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=m,n.texture.needsPMREMUpdate=!0}}class ld extends Xt{constructor(e,t,n,s,a,r,o,c,l,h){e=e!==void 0?e:[],t=t!==void 0?t:ms,super(e,t,n,s,a,r,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class BA extends On{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new ld(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Cn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ft(5,5,5),a=new Zt({name:"CubemapFromEquirect",uniforms:sa(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Dn,blending:ln});a.uniforms.tEquirect.value=t;const r=new lt(s,a),o=t.minFilter;return t.minFilter===pi&&(t.minFilter=Cn),new TA(1,10,this).update(e,r),t.minFilter=o,r.geometry.dispose(),r.material.dispose(),this}clear(e,t,n,s){const a=e.getRenderTarget();for(let r=0;r<6;r++)e.setRenderTarget(this,r),e.clear(t,n,s);e.setRenderTarget(a)}}const Uo=new G,RA=new G,DA=new ft;class ji{constructor(e=new G(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=Uo.subVectors(n,t).cross(RA.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Uo),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/s;return a<0||a>1?null:t.copy(e.start).addScaledVector(n,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||DA.getNormalMatrix(e),s=this.coplanarPoint(Uo).applyMatrix4(e),a=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ss=new gi,mr=new G;class El{constructor(e=new ji,t=new ji,n=new ji,s=new ji,a=new ji,r=new ji){this.planes=[e,t,n,s,a,r]}set(e,t,n,s,a,r){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(a),o[5].copy(r),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Di){const n=this.planes,s=e.elements,a=s[0],r=s[1],o=s[2],c=s[3],l=s[4],h=s[5],u=s[6],d=s[7],f=s[8],m=s[9],x=s[10],p=s[11],A=s[12],E=s[13],_=s[14],g=s[15];if(n[0].setComponents(c-a,d-l,p-f,g-A).normalize(),n[1].setComponents(c+a,d+l,p+f,g+A).normalize(),n[2].setComponents(c+r,d+h,p+m,g+E).normalize(),n[3].setComponents(c-r,d-h,p-m,g-E).normalize(),n[4].setComponents(c-o,d-u,p-x,g-_).normalize(),t===Di)n[5].setComponents(c+o,d+u,p+x,g+_).normalize();else if(t===Xr)n[5].setComponents(o,u,x,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ss.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ss.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ss)}intersectsSprite(e){return ss.center.set(0,0,0),ss.radius=.7071067811865476,ss.applyMatrix4(e.matrixWorld),this.intersectsSphere(ss)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(mr.x=s.normal.x>0?e.max.x:e.min.x,mr.y=s.normal.y>0?e.max.y:e.min.y,mr.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(mr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function hd(){let i=null,e=!1,t=null,n=null;function s(a,r){t(a,r),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){i=a}}}function LA(i){const e=new WeakMap;function t(o,c){const l=o.array,h=o.usage,u=l.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,l,h),o.onUploadCallback();let f;if(l instanceof Float32Array)f=i.FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=i.SHORT;else if(l instanceof Uint32Array)f=i.UNSIGNED_INT;else if(l instanceof Int32Array)f=i.INT;else if(l instanceof Int8Array)f=i.BYTE;else if(l instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,c,l){const h=c.array,u=c.updateRanges;if(i.bindBuffer(l,o),u.length===0)i.bufferSubData(l,0,h);else{u.sort((f,m)=>f.start-m.start);let d=0;for(let f=1;f<u.length;f++){const m=u[d],x=u[f];x.start<=m.start+m.count+1?m.count=Math.max(m.count,x.start+x.count-m.start):(++d,u[d]=x)}u.length=d+1;for(let f=0,m=u.length;f<m;f++){const x=u[f];i.bufferSubData(l,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function a(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(i.deleteBuffer(c.buffer),e.delete(o))}function r(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:s,remove:a,update:r}}class aa extends Bt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const a=e/2,r=t/2,o=Math.floor(n),c=Math.floor(s),l=o+1,h=c+1,u=e/o,d=t/c,f=[],m=[],x=[],p=[];for(let A=0;A<h;A++){const E=A*d-r;for(let _=0;_<l;_++){const g=_*u-a;m.push(g,-E,0),x.push(0,0,1),p.push(_/o),p.push(1-A/c)}}for(let A=0;A<c;A++)for(let E=0;E<o;E++){const _=E+l*A,g=E+l*(A+1),B=E+1+l*(A+1),S=E+1+l*A;f.push(_,g,S),f.push(g,B,S)}this.setIndex(f),this.setAttribute("position",new ht(m,3)),this.setAttribute("normal",new ht(x,3)),this.setAttribute("uv",new ht(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new aa(e.width,e.height,e.widthSegments,e.heightSegments)}}var PA=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,UA=`#ifdef USE_ALPHAHASH
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
#endif`,FA=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,NA=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,kA=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,QA=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,OA=`#ifdef USE_AOMAP
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
#endif`,GA=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,zA=`#ifdef USE_BATCHING
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
#endif`,HA=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,VA=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,WA=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,jA=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,qA=`#ifdef USE_IRIDESCENCE
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
#endif`,YA=`#ifdef USE_BUMPMAP
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
#endif`,XA=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,KA=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,JA=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ZA=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,$A=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ep=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,tp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,np=`#if defined( USE_COLOR_ALPHA )
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
#endif`,ip=`#define PI 3.141592653589793
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
} // validated`,sp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,ap=`vec3 transformedNormal = objectNormal;
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
#endif`,rp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,op=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,cp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,lp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,hp="gl_FragColor = linearToOutputTexel( gl_FragColor );",up=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,dp=`#ifdef USE_ENVMAP
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
#endif`,fp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Ap=`#ifdef USE_ENVMAP
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
#endif`,pp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,mp=`#ifdef USE_ENVMAP
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
#endif`,gp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,bp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,xp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,_p=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ep=`#ifdef USE_GRADIENTMAP
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
}`,vp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Mp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,yp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,wp=`uniform bool receiveShadow;
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
#endif`,Cp=`#ifdef USE_ENVMAP
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
#endif`,Sp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ip=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Tp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Bp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Rp=`PhysicalMaterial material;
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
#endif`,Dp=`struct PhysicalMaterial {
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
}`,Lp=`
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
#endif`,Pp=`#if defined( RE_IndirectDiffuse )
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
#endif`,Up=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Fp=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Np=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,kp=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Qp=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Op=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Gp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,zp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Hp=`#if defined( USE_POINTS_UV )
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
#endif`,Vp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Wp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,jp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,qp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Yp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Xp=`#ifdef USE_MORPHTARGETS
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
#endif`,Kp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Jp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Zp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,$p=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,em=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,tm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,nm=`#ifdef USE_NORMALMAP
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
#endif`,im=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,sm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,am=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,rm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,om=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,cm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,lm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,hm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,um=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,fm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Am=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,pm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,mm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,gm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,bm=`float getShadowMask() {
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
}`,xm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,_m=`#ifdef USE_SKINNING
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
#endif`,Em=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,vm=`#ifdef USE_SKINNING
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
#endif`,Mm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ym=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,wm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Cm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Sm=`#ifdef USE_TRANSMISSION
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
#endif`,Im=`#ifdef USE_TRANSMISSION
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
#endif`,Tm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Bm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Rm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Dm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Lm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Pm=`uniform sampler2D t2D;
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
}`,Um=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Fm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Nm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,km=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Qm=`#include <common>
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
}`,Om=`#if DEPTH_PACKING == 3200
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
}`,Gm=`#define DISTANCE
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
}`,zm=`#define DISTANCE
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
}`,Hm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Vm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Wm=`uniform float scale;
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
}`,jm=`uniform vec3 diffuse;
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
}`,qm=`#include <common>
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
}`,Ym=`uniform vec3 diffuse;
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
}`,Xm=`#define LAMBERT
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
}`,Km=`#define LAMBERT
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
}`,Jm=`#define MATCAP
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
}`,Zm=`#define MATCAP
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
}`,$m=`#define NORMAL
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
}`,eg=`#define NORMAL
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
}`,tg=`#define PHONG
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
}`,ng=`#define PHONG
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
}`,ig=`#define STANDARD
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
}`,sg=`#define STANDARD
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
}`,rg=`#define TOON
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
}`,og=`uniform float size;
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
}`,cg=`uniform vec3 diffuse;
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
}`,lg=`#include <common>
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
}`,hg=`uniform vec3 color;
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
}`,ug=`uniform float rotation;
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
}`,At={alphahash_fragment:PA,alphahash_pars_fragment:UA,alphamap_fragment:FA,alphamap_pars_fragment:NA,alphatest_fragment:kA,alphatest_pars_fragment:QA,aomap_fragment:OA,aomap_pars_fragment:GA,batching_pars_vertex:zA,batching_vertex:HA,begin_vertex:VA,beginnormal_vertex:WA,bsdfs:jA,iridescence_fragment:qA,bumpmap_pars_fragment:YA,clipping_planes_fragment:XA,clipping_planes_pars_fragment:KA,clipping_planes_pars_vertex:JA,clipping_planes_vertex:ZA,color_fragment:$A,color_pars_fragment:ep,color_pars_vertex:tp,color_vertex:np,common:ip,cube_uv_reflection_fragment:sp,defaultnormal_vertex:ap,displacementmap_pars_vertex:rp,displacementmap_vertex:op,emissivemap_fragment:cp,emissivemap_pars_fragment:lp,colorspace_fragment:hp,colorspace_pars_fragment:up,envmap_fragment:dp,envmap_common_pars_fragment:fp,envmap_pars_fragment:Ap,envmap_pars_vertex:pp,envmap_physical_pars_fragment:Cp,envmap_vertex:mp,fog_vertex:gp,fog_pars_vertex:bp,fog_fragment:xp,fog_pars_fragment:_p,gradientmap_pars_fragment:Ep,lightmap_pars_fragment:vp,lights_lambert_fragment:Mp,lights_lambert_pars_fragment:yp,lights_pars_begin:wp,lights_toon_fragment:Sp,lights_toon_pars_fragment:Ip,lights_phong_fragment:Tp,lights_phong_pars_fragment:Bp,lights_physical_fragment:Rp,lights_physical_pars_fragment:Dp,lights_fragment_begin:Lp,lights_fragment_maps:Pp,lights_fragment_end:Up,logdepthbuf_fragment:Fp,logdepthbuf_pars_fragment:Np,logdepthbuf_pars_vertex:kp,logdepthbuf_vertex:Qp,map_fragment:Op,map_pars_fragment:Gp,map_particle_fragment:zp,map_particle_pars_fragment:Hp,metalnessmap_fragment:Vp,metalnessmap_pars_fragment:Wp,morphinstance_vertex:jp,morphcolor_vertex:qp,morphnormal_vertex:Yp,morphtarget_pars_vertex:Xp,morphtarget_vertex:Kp,normal_fragment_begin:Jp,normal_fragment_maps:Zp,normal_pars_fragment:$p,normal_pars_vertex:em,normal_vertex:tm,normalmap_pars_fragment:nm,clearcoat_normal_fragment_begin:im,clearcoat_normal_fragment_maps:sm,clearcoat_pars_fragment:am,iridescence_pars_fragment:rm,opaque_fragment:om,packing:cm,premultiplied_alpha_fragment:lm,project_vertex:hm,dithering_fragment:um,dithering_pars_fragment:dm,roughnessmap_fragment:fm,roughnessmap_pars_fragment:Am,shadowmap_pars_fragment:pm,shadowmap_pars_vertex:mm,shadowmap_vertex:gm,shadowmask_pars_fragment:bm,skinbase_vertex:xm,skinning_pars_vertex:_m,skinning_vertex:Em,skinnormal_vertex:vm,specularmap_fragment:Mm,specularmap_pars_fragment:ym,tonemapping_fragment:wm,tonemapping_pars_fragment:Cm,transmission_fragment:Sm,transmission_pars_fragment:Im,uv_pars_fragment:Tm,uv_pars_vertex:Bm,uv_vertex:Rm,worldpos_vertex:Dm,background_vert:Lm,background_frag:Pm,backgroundCube_vert:Um,backgroundCube_frag:Fm,cube_vert:Nm,cube_frag:km,depth_vert:Qm,depth_frag:Om,distanceRGBA_vert:Gm,distanceRGBA_frag:zm,equirect_vert:Hm,equirect_frag:Vm,linedashed_vert:Wm,linedashed_frag:jm,meshbasic_vert:qm,meshbasic_frag:Ym,meshlambert_vert:Xm,meshlambert_frag:Km,meshmatcap_vert:Jm,meshmatcap_frag:Zm,meshnormal_vert:$m,meshnormal_frag:eg,meshphong_vert:tg,meshphong_frag:ng,meshphysical_vert:ig,meshphysical_frag:sg,meshtoon_vert:ag,meshtoon_frag:rg,points_vert:og,points_frag:cg,shadow_vert:lg,shadow_frag:hg,sprite_vert:ug,sprite_frag:dg},We={common:{diffuse:{value:new De(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ft},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ft}},envmap:{envMap:{value:null},envMapRotation:{value:new ft},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ft}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ft}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ft},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ft},normalScale:{value:new He(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ft},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ft}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ft}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ft}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new De(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new De(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0},uvTransform:{value:new ft}},sprite:{diffuse:{value:new De(16777215)},opacity:{value:1},center:{value:new He(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ft},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0}}},di={basic:{uniforms:Mn([We.common,We.specularmap,We.envmap,We.aomap,We.lightmap,We.fog]),vertexShader:At.meshbasic_vert,fragmentShader:At.meshbasic_frag},lambert:{uniforms:Mn([We.common,We.specularmap,We.envmap,We.aomap,We.lightmap,We.emissivemap,We.bumpmap,We.normalmap,We.displacementmap,We.fog,We.lights,{emissive:{value:new De(0)}}]),vertexShader:At.meshlambert_vert,fragmentShader:At.meshlambert_frag},phong:{uniforms:Mn([We.common,We.specularmap,We.envmap,We.aomap,We.lightmap,We.emissivemap,We.bumpmap,We.normalmap,We.displacementmap,We.fog,We.lights,{emissive:{value:new De(0)},specular:{value:new De(1118481)},shininess:{value:30}}]),vertexShader:At.meshphong_vert,fragmentShader:At.meshphong_frag},standard:{uniforms:Mn([We.common,We.envmap,We.aomap,We.lightmap,We.emissivemap,We.bumpmap,We.normalmap,We.displacementmap,We.roughnessmap,We.metalnessmap,We.fog,We.lights,{emissive:{value:new De(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:At.meshphysical_vert,fragmentShader:At.meshphysical_frag},toon:{uniforms:Mn([We.common,We.aomap,We.lightmap,We.emissivemap,We.bumpmap,We.normalmap,We.displacementmap,We.gradientmap,We.fog,We.lights,{emissive:{value:new De(0)}}]),vertexShader:At.meshtoon_vert,fragmentShader:At.meshtoon_frag},matcap:{uniforms:Mn([We.common,We.bumpmap,We.normalmap,We.displacementmap,We.fog,{matcap:{value:null}}]),vertexShader:At.meshmatcap_vert,fragmentShader:At.meshmatcap_frag},points:{uniforms:Mn([We.points,We.fog]),vertexShader:At.points_vert,fragmentShader:At.points_frag},dashed:{uniforms:Mn([We.common,We.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:At.linedashed_vert,fragmentShader:At.linedashed_frag},depth:{uniforms:Mn([We.common,We.displacementmap]),vertexShader:At.depth_vert,fragmentShader:At.depth_frag},normal:{uniforms:Mn([We.common,We.bumpmap,We.normalmap,We.displacementmap,{opacity:{value:1}}]),vertexShader:At.meshnormal_vert,fragmentShader:At.meshnormal_frag},sprite:{uniforms:Mn([We.sprite,We.fog]),vertexShader:At.sprite_vert,fragmentShader:At.sprite_frag},background:{uniforms:{uvTransform:{value:new ft},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:At.background_vert,fragmentShader:At.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ft}},vertexShader:At.backgroundCube_vert,fragmentShader:At.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:At.cube_vert,fragmentShader:At.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:At.equirect_vert,fragmentShader:At.equirect_frag},distanceRGBA:{uniforms:Mn([We.common,We.displacementmap,{referencePosition:{value:new G},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:At.distanceRGBA_vert,fragmentShader:At.distanceRGBA_frag},shadow:{uniforms:Mn([We.lights,We.fog,{color:{value:new De(0)},opacity:{value:1}}]),vertexShader:At.shadow_vert,fragmentShader:At.shadow_frag}};di.physical={uniforms:Mn([di.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ft},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ft},clearcoatNormalScale:{value:new He(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ft},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ft},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ft},sheen:{value:0},sheenColor:{value:new De(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ft},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ft},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ft},transmissionSamplerSize:{value:new He},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ft},attenuationDistance:{value:0},attenuationColor:{value:new De(0)},specularColor:{value:new De(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ft},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ft},anisotropyVector:{value:new He},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ft}}]),vertexShader:At.meshphysical_vert,fragmentShader:At.meshphysical_frag};const gr={r:0,b:0,g:0},as=new Zn,fg=new $e;function Ag(i,e,t,n,s,a,r){const o=new De(0);let c=a===!0?0:1,l,h,u=null,d=0,f=null;function m(E){let _=E.isScene===!0?E.background:null;return _&&_.isTexture&&(_=(E.backgroundBlurriness>0?t:e).get(_)),_}function x(E){let _=!1;const g=m(E);g===null?A(o,c):g&&g.isColor&&(A(g,1),_=!0);const B=i.xr.getEnvironmentBlendMode();B==="additive"?n.buffers.color.setClear(0,0,0,1,r):B==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,r),(i.autoClear||_)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function p(E,_){const g=m(_);g&&(g.isCubeTexture||g.mapping===no)?(h===void 0&&(h=new lt(new Ft(1,1,1),new Zt({name:"BackgroundCubeMaterial",uniforms:sa(di.backgroundCube.uniforms),vertexShader:di.backgroundCube.vertexShader,fragmentShader:di.backgroundCube.fragmentShader,side:Dn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(B,S,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),as.copy(_.backgroundRotation),as.x*=-1,as.y*=-1,as.z*=-1,g.isCubeTexture&&g.isRenderTargetTexture===!1&&(as.y*=-1,as.z*=-1),h.material.uniforms.envMap.value=g,h.material.uniforms.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(fg.makeRotationFromEuler(as)),h.material.toneMapped=gt.getTransfer(g.colorSpace)!==St,(u!==g||d!==g.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,u=g,d=g.version,f=i.toneMapping),h.layers.enableAll(),E.unshift(h,h.geometry,h.material,0,0,null)):g&&g.isTexture&&(l===void 0&&(l=new lt(new aa(2,2),new Zt({name:"BackgroundMaterial",uniforms:sa(di.background.uniforms),vertexShader:di.background.vertexShader,fragmentShader:di.background.fragmentShader,side:ci,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=g,l.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,l.material.toneMapped=gt.getTransfer(g.colorSpace)!==St,g.matrixAutoUpdate===!0&&g.updateMatrix(),l.material.uniforms.uvTransform.value.copy(g.matrix),(u!==g||d!==g.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,u=g,d=g.version,f=i.toneMapping),l.layers.enableAll(),E.unshift(l,l.geometry,l.material,0,0,null))}function A(E,_){E.getRGB(gr,od(i)),n.buffers.color.setClear(gr.r,gr.g,gr.b,_,r)}return{getClearColor:function(){return o},setClearColor:function(E,_=1){o.set(E),c=_,A(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(E){c=E,A(o,c)},render:x,addToRenderList:p}}function pg(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let a=s,r=!1;function o(y,L,V,te,Ae){let ae=!1;const ce=u(te,V,L);a!==ce&&(a=ce,l(a.object)),ae=f(y,te,V,Ae),ae&&m(y,te,V,Ae),Ae!==null&&e.update(Ae,i.ELEMENT_ARRAY_BUFFER),(ae||r)&&(r=!1,g(y,L,V,te),Ae!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(Ae).buffer))}function c(){return i.createVertexArray()}function l(y){return i.bindVertexArray(y)}function h(y){return i.deleteVertexArray(y)}function u(y,L,V){const te=V.wireframe===!0;let Ae=n[y.id];Ae===void 0&&(Ae={},n[y.id]=Ae);let ae=Ae[L.id];ae===void 0&&(ae={},Ae[L.id]=ae);let ce=ae[te];return ce===void 0&&(ce=d(c()),ae[te]=ce),ce}function d(y){const L=[],V=[],te=[];for(let Ae=0;Ae<t;Ae++)L[Ae]=0,V[Ae]=0,te[Ae]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:V,attributeDivisors:te,object:y,attributes:{},index:null}}function f(y,L,V,te){const Ae=a.attributes,ae=L.attributes;let ce=0;const se=V.getAttributes();for(const J in se)if(se[J].location>=0){const $=Ae[J];let me=ae[J];if(me===void 0&&(J==="instanceMatrix"&&y.instanceMatrix&&(me=y.instanceMatrix),J==="instanceColor"&&y.instanceColor&&(me=y.instanceColor)),$===void 0||$.attribute!==me||me&&$.data!==me.data)return!0;ce++}return a.attributesNum!==ce||a.index!==te}function m(y,L,V,te){const Ae={},ae=L.attributes;let ce=0;const se=V.getAttributes();for(const J in se)if(se[J].location>=0){let $=ae[J];$===void 0&&(J==="instanceMatrix"&&y.instanceMatrix&&($=y.instanceMatrix),J==="instanceColor"&&y.instanceColor&&($=y.instanceColor));const me={};me.attribute=$,$&&$.data&&(me.data=$.data),Ae[J]=me,ce++}a.attributes=Ae,a.attributesNum=ce,a.index=te}function x(){const y=a.newAttributes;for(let L=0,V=y.length;L<V;L++)y[L]=0}function p(y){A(y,0)}function A(y,L){const V=a.newAttributes,te=a.enabledAttributes,Ae=a.attributeDivisors;V[y]=1,te[y]===0&&(i.enableVertexAttribArray(y),te[y]=1),Ae[y]!==L&&(i.vertexAttribDivisor(y,L),Ae[y]=L)}function E(){const y=a.newAttributes,L=a.enabledAttributes;for(let V=0,te=L.length;V<te;V++)L[V]!==y[V]&&(i.disableVertexAttribArray(V),L[V]=0)}function _(y,L,V,te,Ae,ae,ce){ce===!0?i.vertexAttribIPointer(y,L,V,Ae,ae):i.vertexAttribPointer(y,L,V,te,Ae,ae)}function g(y,L,V,te){x();const Ae=te.attributes,ae=V.getAttributes(),ce=L.defaultAttributeValues;for(const se in ae){const J=ae[se];if(J.location>=0){let fe=Ae[se];if(fe===void 0&&(se==="instanceMatrix"&&y.instanceMatrix&&(fe=y.instanceMatrix),se==="instanceColor"&&y.instanceColor&&(fe=y.instanceColor)),fe!==void 0){const $=fe.normalized,me=fe.itemSize,Ce=e.get(fe);if(Ce===void 0)continue;const Me=Ce.buffer,ne=Ce.type,Ee=Ce.bytesPerElement,Te=ne===i.INT||ne===i.UNSIGNED_INT||fe.gpuType===dl;if(fe.isInterleavedBufferAttribute){const Se=fe.data,Le=Se.stride,Fe=fe.offset;if(Se.isInstancedInterleavedBuffer){for(let Ge=0;Ge<J.locationSize;Ge++)A(J.location+Ge,Se.meshPerAttribute);y.isInstancedMesh!==!0&&te._maxInstanceCount===void 0&&(te._maxInstanceCount=Se.meshPerAttribute*Se.count)}else for(let Ge=0;Ge<J.locationSize;Ge++)p(J.location+Ge);i.bindBuffer(i.ARRAY_BUFFER,Me);for(let Ge=0;Ge<J.locationSize;Ge++)_(J.location+Ge,me/J.locationSize,ne,$,Le*Ee,(Fe+me/J.locationSize*Ge)*Ee,Te)}else{if(fe.isInstancedBufferAttribute){for(let Se=0;Se<J.locationSize;Se++)A(J.location+Se,fe.meshPerAttribute);y.isInstancedMesh!==!0&&te._maxInstanceCount===void 0&&(te._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let Se=0;Se<J.locationSize;Se++)p(J.location+Se);i.bindBuffer(i.ARRAY_BUFFER,Me);for(let Se=0;Se<J.locationSize;Se++)_(J.location+Se,me/J.locationSize,ne,$,me*Ee,me/J.locationSize*Se*Ee,Te)}}else if(ce!==void 0){const $=ce[se];if($!==void 0)switch($.length){case 2:i.vertexAttrib2fv(J.location,$);break;case 3:i.vertexAttrib3fv(J.location,$);break;case 4:i.vertexAttrib4fv(J.location,$);break;default:i.vertexAttrib1fv(J.location,$)}}}}E()}function B(){U();for(const y in n){const L=n[y];for(const V in L){const te=L[V];for(const Ae in te)h(te[Ae].object),delete te[Ae];delete L[V]}delete n[y]}}function S(y){if(n[y.id]===void 0)return;const L=n[y.id];for(const V in L){const te=L[V];for(const Ae in te)h(te[Ae].object),delete te[Ae];delete L[V]}delete n[y.id]}function T(y){for(const L in n){const V=n[L];if(V[y.id]===void 0)continue;const te=V[y.id];for(const Ae in te)h(te[Ae].object),delete te[Ae];delete V[y.id]}}function U(){M(),r=!0,a!==s&&(a=s,l(a.object))}function M(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:U,resetDefaultState:M,dispose:B,releaseStatesOfGeometry:S,releaseStatesOfProgram:T,initAttributes:x,enableAttribute:p,disableUnusedAttributes:E}}function mg(i,e,t){let n;function s(l){n=l}function a(l,h){i.drawArrays(n,l,h),t.update(h,n,1)}function r(l,h,u){u!==0&&(i.drawArraysInstanced(n,l,h,u),t.update(h,n,u))}function o(l,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let f=0;for(let m=0;m<u;m++)f+=h[m];t.update(f,n,1)}function c(l,h,u,d){if(u===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let m=0;m<l.length;m++)r(l[m],h[m],d[m]);else{f.multiDrawArraysInstancedWEBGL(n,l,0,h,0,d,0,u);let m=0;for(let x=0;x<u;x++)m+=h[x]*d[x];t.update(m,n,1)}}this.setMode=s,this.render=a,this.renderInstances=r,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function gg(i,e,t,n){let s;function a(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function r(T){return!(T!==sn&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(T){const U=T===dn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==nn&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==bn&&!U)}function c(T){if(T==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const u=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),A=i.getParameter(i.MAX_VERTEX_ATTRIBS),E=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),_=i.getParameter(i.MAX_VARYING_VECTORS),g=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),B=m>0,S=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:r,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:m,maxTextureSize:x,maxCubemapSize:p,maxAttributes:A,maxVertexUniforms:E,maxVaryings:_,maxFragmentUniforms:g,vertexTextures:B,maxSamples:S}}function bg(i){const e=this;let t=null,n=0,s=!1,a=!1;const r=new ji,o=new ft,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){a=!0,h(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){const m=u.clippingPlanes,x=u.clipIntersection,p=u.clipShadows,A=i.get(u);if(!s||m===null||m.length===0||a&&!p)a?h(null):l();else{const E=a?0:n,_=E*4;let g=A.clippingState||null;c.value=g,g=h(m,d,_,f);for(let B=0;B!==_;++B)g[B]=t[B];A.clippingState=g,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=E}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,f,m){const x=u!==null?u.length:0;let p=null;if(x!==0){if(p=c.value,m!==!0||p===null){const A=f+x*4,E=d.matrixWorldInverse;o.getNormalMatrix(E),(p===null||p.length<A)&&(p=new Float32Array(A));for(let _=0,g=f;_!==x;++_,g+=4)r.copy(u[_]).applyMatrix4(E,o),r.normal.toArray(p,g),p[g+3]=r.constant}c.value=p,c.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,p}}function xg(i){let e=new WeakMap;function t(r,o){return o===Cc?r.mapping=ms:o===Sc&&(r.mapping=na),r}function n(r){if(r&&r.isTexture){const o=r.mapping;if(o===Cc||o===Sc)if(e.has(r)){const c=e.get(r).texture;return t(c,r.mapping)}else{const c=r.image;if(c&&c.height>0){const l=new BA(c.height);return l.fromEquirectangularTexture(i,r),e.set(r,l),r.addEventListener("dispose",s),t(l.texture,r.mapping)}else return null}}return r}function s(r){const o=r.target;o.removeEventListener("dispose",s);const c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function a(){e=new WeakMap}return{get:n,dispose:a}}class ao extends cd{constructor(e=-1,t=1,n=1,s=-1,a=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=a,this.far=r,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,a,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=a,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let a=n-e,r=n+e,o=s+t,c=s-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=l*this.view.offsetX,r=a+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(a,r,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Ws=4,ph=[.125,.215,.35,.446,.526,.582],us=20,Fo=new ao,mh=new De;let No=null,ko=0,Qo=0,Oo=!1;const hs=(1+Math.sqrt(5))/2,Os=1/hs,gh=[new G(-hs,Os,0),new G(hs,Os,0),new G(-Os,0,hs),new G(Os,0,hs),new G(0,hs,-Os),new G(0,hs,Os),new G(-1,1,-1),new G(1,1,-1),new G(-1,1,1),new G(1,1,1)];class bh{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){No=this._renderer.getRenderTarget(),ko=this._renderer.getActiveCubeFace(),Qo=this._renderer.getActiveMipmapLevel(),Oo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(e,n,s,a),t>0&&this._blur(a,0,0,t),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Eh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=_h(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(No,ko,Qo),this._renderer.xr.enabled=Oo,e.scissorTest=!1,br(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ms||e.mapping===na?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),No=this._renderer.getRenderTarget(),ko=this._renderer.getActiveCubeFace(),Qo=this._renderer.getActiveMipmapLevel(),Oo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Cn,minFilter:Cn,generateMipmaps:!1,type:dn,format:sn,colorSpace:xn,depthBuffer:!1},s=xh(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=xh(e,t,n);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=_g(a)),this._blurMaterial=Eg(a,e,t)}return s}_compileMaterial(e){const t=new lt(this._lodPlanes[0],e);this._renderer.compile(t,Fo)}_sceneToCubeUV(e,t,n,s){const o=new yn(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(mh),h.toneMapping=es,h.autoClear=!1;const f=new Qn({name:"PMREM.Background",side:Dn,depthWrite:!1,depthTest:!1}),m=new lt(new Ft,f);let x=!1;const p=e.background;p?p.isColor&&(f.color.copy(p),e.background=null,x=!0):(f.color.copy(mh),x=!0);for(let A=0;A<6;A++){const E=A%3;E===0?(o.up.set(0,c[A],0),o.lookAt(l[A],0,0)):E===1?(o.up.set(0,0,c[A]),o.lookAt(0,l[A],0)):(o.up.set(0,c[A],0),o.lookAt(0,0,l[A]));const _=this._cubeSize;br(s,E*_,A>2?_:0,_,_),h.setRenderTarget(s),x&&h.render(m,o),h.render(e,o)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=d,h.autoClear=u,e.background=p}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===ms||e.mapping===na;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Eh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=_h());const a=s?this._cubemapMaterial:this._equirectMaterial,r=new lt(this._lodPlanes[0],a),o=a.uniforms;o.envMap.value=e;const c=this._cubeSize;br(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(r,Fo)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let a=1;a<s;a++){const r=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),o=gh[(s-a-1)%gh.length];this._blur(e,a-1,a,r,o)}t.autoClear=n}_blur(e,t,n,s,a){const r=this._pingPongRenderTarget;this._halfBlur(e,r,t,n,s,"latitudinal",a),this._halfBlur(r,e,n,n,s,"longitudinal",a)}_halfBlur(e,t,n,s,a,r,o){const c=this._renderer,l=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new lt(this._lodPlanes[s],l),d=l.uniforms,f=this._sizeLods[n]-1,m=isFinite(a)?Math.PI/(2*f):2*Math.PI/(2*us-1),x=a/m,p=isFinite(a)?1+Math.floor(h*x):us;p>us&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${us}`);const A=[];let E=0;for(let T=0;T<us;++T){const U=T/x,M=Math.exp(-U*U/2);A.push(M),T===0?E+=M:T<p&&(E+=2*M)}for(let T=0;T<A.length;T++)A[T]=A[T]/E;d.envMap.value=e.texture,d.samples.value=p,d.weights.value=A,d.latitudinal.value=r==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:_}=this;d.dTheta.value=m,d.mipInt.value=_-n;const g=this._sizeLods[s],B=3*g*(s>_-Ws?s-_+Ws:0),S=4*(this._cubeSize-g);br(t,B,S,3*g,2*g),c.setRenderTarget(t),c.render(u,Fo)}}function _g(i){const e=[],t=[],n=[];let s=i;const a=i-Ws+1+ph.length;for(let r=0;r<a;r++){const o=Math.pow(2,s);t.push(o);let c=1/o;r>i-Ws?c=ph[r-i+Ws-1]:r===0&&(c=0),n.push(c);const l=1/(o-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,m=6,x=3,p=2,A=1,E=new Float32Array(x*m*f),_=new Float32Array(p*m*f),g=new Float32Array(A*m*f);for(let S=0;S<f;S++){const T=S%3*2/3-1,U=S>2?0:-1,M=[T,U,0,T+2/3,U,0,T+2/3,U+1,0,T,U,0,T+2/3,U+1,0,T,U+1,0];E.set(M,x*m*S),_.set(d,p*m*S);const y=[S,S,S,S,S,S];g.set(y,A*m*S)}const B=new Bt;B.setAttribute("position",new Gt(E,x)),B.setAttribute("uv",new Gt(_,p)),B.setAttribute("faceIndex",new Gt(g,A)),e.push(B),s>Ws&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function xh(i,e,t){const n=new On(i,e,t);return n.texture.mapping=no,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function br(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Eg(i,e,t){const n=new Float32Array(us),s=new G(0,1,0);return new Zt({name:"SphericalGaussianBlur",defines:{n:us,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:vl(),fragmentShader:`

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
		`,blending:ln,depthTest:!1,depthWrite:!1})}function _h(){return new Zt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:vl(),fragmentShader:`

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
		`,blending:ln,depthTest:!1,depthWrite:!1})}function Eh(){return new Zt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:vl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ln,depthTest:!1,depthWrite:!1})}function vl(){return`

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
	`}function vg(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const c=o.mapping,l=c===Cc||c===Sc,h=c===ms||c===na;if(l||h){let u=e.get(o);const d=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return t===null&&(t=new bh(i)),u=l?t.fromEquirectangular(o,u):t.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),u.texture;if(u!==void 0)return u.texture;{const f=o.image;return l&&f&&f.height>0||h&&f&&s(f)?(t===null&&(t=new bh(i)),u=l?t.fromEquirectangular(o):t.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),o.addEventListener("dispose",a),u.texture):null}}}return o}function s(o){let c=0;const l=6;for(let h=0;h<l;h++)o[h]!==void 0&&c++;return c===l}function a(o){const c=o.target;c.removeEventListener("dispose",a);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function r(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:r}}function Mg(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&Ta("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function yg(i,e,t,n){const s={},a=new WeakMap;function r(u){const d=u.target;d.index!==null&&e.remove(d.index);for(const m in d.attributes)e.remove(d.attributes[m]);for(const m in d.morphAttributes){const x=d.morphAttributes[m];for(let p=0,A=x.length;p<A;p++)e.remove(x[p])}d.removeEventListener("dispose",r),delete s[d.id];const f=a.get(d);f&&(e.remove(f),a.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(u,d){return s[d.id]===!0||(d.addEventListener("dispose",r),s[d.id]=!0,t.memory.geometries++),d}function c(u){const d=u.attributes;for(const m in d)e.update(d[m],i.ARRAY_BUFFER);const f=u.morphAttributes;for(const m in f){const x=f[m];for(let p=0,A=x.length;p<A;p++)e.update(x[p],i.ARRAY_BUFFER)}}function l(u){const d=[],f=u.index,m=u.attributes.position;let x=0;if(f!==null){const E=f.array;x=f.version;for(let _=0,g=E.length;_<g;_+=3){const B=E[_+0],S=E[_+1],T=E[_+2];d.push(B,S,S,T,T,B)}}else if(m!==void 0){const E=m.array;x=m.version;for(let _=0,g=E.length/3-1;_<g;_+=3){const B=_+0,S=_+1,T=_+2;d.push(B,S,S,T,T,B)}}else return;const p=new(td(d)?_l:xl)(d,1);p.version=x;const A=a.get(u);A&&e.remove(A),a.set(u,p)}function h(u){const d=a.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&l(u)}else l(u);return a.get(u)}return{get:o,update:c,getWireframeAttribute:h}}function wg(i,e,t){let n;function s(d){n=d}let a,r;function o(d){a=d.type,r=d.bytesPerElement}function c(d,f){i.drawElements(n,f,a,d*r),t.update(f,n,1)}function l(d,f,m){m!==0&&(i.drawElementsInstanced(n,f,a,d*r,m),t.update(f,n,m))}function h(d,f,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,a,d,0,m);let p=0;for(let A=0;A<m;A++)p+=f[A];t.update(p,n,1)}function u(d,f,m,x){if(m===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let A=0;A<d.length;A++)l(d[A]/r,f[A],x[A]);else{p.multiDrawElementsInstancedWEBGL(n,f,0,a,d,0,x,0,m);let A=0;for(let E=0;E<m;E++)A+=f[E]*x[E];t.update(A,n,1)}}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Cg(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(a,r,o){switch(t.calls++,r){case i.TRIANGLES:t.triangles+=o*(a/3);break;case i.LINES:t.lines+=o*(a/2);break;case i.LINE_STRIP:t.lines+=o*(a-1);break;case i.LINE_LOOP:t.lines+=o*a;break;case i.POINTS:t.points+=o*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Sg(i,e,t){const n=new WeakMap,s=new vt;function a(r,o,c){const l=r.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(o);if(d===void 0||d.count!==u){let M=function(){T.dispose(),n.delete(o),o.removeEventListener("dispose",M)};d!==void 0&&d.texture.dispose();const f=o.morphAttributes.position!==void 0,m=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],A=o.morphAttributes.normal||[],E=o.morphAttributes.color||[];let _=0;f===!0&&(_=1),m===!0&&(_=2),x===!0&&(_=3);let g=o.attributes.position.count*_,B=1;g>e.maxTextureSize&&(B=Math.ceil(g/e.maxTextureSize),g=e.maxTextureSize);const S=new Float32Array(g*B*4*u),T=new id(S,g,B,u);T.type=bn,T.needsUpdate=!0;const U=_*4;for(let y=0;y<u;y++){const L=p[y],V=A[y],te=E[y],Ae=g*B*4*y;for(let ae=0;ae<L.count;ae++){const ce=ae*U;f===!0&&(s.fromBufferAttribute(L,ae),S[Ae+ce+0]=s.x,S[Ae+ce+1]=s.y,S[Ae+ce+2]=s.z,S[Ae+ce+3]=0),m===!0&&(s.fromBufferAttribute(V,ae),S[Ae+ce+4]=s.x,S[Ae+ce+5]=s.y,S[Ae+ce+6]=s.z,S[Ae+ce+7]=0),x===!0&&(s.fromBufferAttribute(te,ae),S[Ae+ce+8]=s.x,S[Ae+ce+9]=s.y,S[Ae+ce+10]=s.z,S[Ae+ce+11]=te.itemSize===4?s.w:1)}}d={count:u,texture:T,size:new He(g,B)},n.set(o,d),o.addEventListener("dispose",M)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",r.morphTexture,t);else{let f=0;for(let x=0;x<l.length;x++)f+=l[x];const m=o.morphTargetsRelative?1:1-f;c.getUniforms().setValue(i,"morphTargetBaseInfluence",m),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:a}}function Ig(i,e,t,n){let s=new WeakMap;function a(c){const l=n.render.frame,h=c.geometry,u=e.get(c,h);if(s.get(u)!==l&&(e.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),s.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;s.get(d)!==l&&(d.update(),s.set(d,l))}return u}function r(){s=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:a,dispose:r}}class Ml extends Xt{constructor(e,t,n,s,a,r,o,c,l,h=Ks){if(h!==Ks&&h!==xs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Ks&&(n=gs),n===void 0&&h===xs&&(n=bs),super(null,s,a,r,o,c,h,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:An,this.minFilter=c!==void 0?c:An,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const ud=new Xt,vh=new Ml(1,1),dd=new id,fd=new sd,Ad=new ld,Mh=[],yh=[],wh=new Float32Array(16),Ch=new Float32Array(9),Sh=new Float32Array(4);function ua(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let a=Mh[s];if(a===void 0&&(a=new Float32Array(s),Mh[s]=a),e!==0){n.toArray(a,0);for(let r=1,o=0;r!==e;++r)o+=t,i[r].toArray(a,o)}return a}function an(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function rn(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function ro(i,e){let t=yh[e];t===void 0&&(t=new Int32Array(e),yh[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Tg(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Bg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(an(t,e))return;i.uniform2fv(this.addr,e),rn(t,e)}}function Rg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(an(t,e))return;i.uniform3fv(this.addr,e),rn(t,e)}}function Dg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(an(t,e))return;i.uniform4fv(this.addr,e),rn(t,e)}}function Lg(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(an(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),rn(t,e)}else{if(an(t,n))return;Sh.set(n),i.uniformMatrix2fv(this.addr,!1,Sh),rn(t,n)}}function Pg(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(an(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),rn(t,e)}else{if(an(t,n))return;Ch.set(n),i.uniformMatrix3fv(this.addr,!1,Ch),rn(t,n)}}function Ug(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(an(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),rn(t,e)}else{if(an(t,n))return;wh.set(n),i.uniformMatrix4fv(this.addr,!1,wh),rn(t,n)}}function Fg(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Ng(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(an(t,e))return;i.uniform2iv(this.addr,e),rn(t,e)}}function kg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(an(t,e))return;i.uniform3iv(this.addr,e),rn(t,e)}}function Qg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(an(t,e))return;i.uniform4iv(this.addr,e),rn(t,e)}}function Og(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Gg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(an(t,e))return;i.uniform2uiv(this.addr,e),rn(t,e)}}function zg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(an(t,e))return;i.uniform3uiv(this.addr,e),rn(t,e)}}function Hg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(an(t,e))return;i.uniform4uiv(this.addr,e),rn(t,e)}}function Vg(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let a;this.type===i.SAMPLER_2D_SHADOW?(vh.compareFunction=ed,a=vh):a=ud,t.setTexture2D(e||a,s)}function Wg(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||fd,s)}function jg(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Ad,s)}function qg(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||dd,s)}function Yg(i){switch(i){case 5126:return Tg;case 35664:return Bg;case 35665:return Rg;case 35666:return Dg;case 35674:return Lg;case 35675:return Pg;case 35676:return Ug;case 5124:case 35670:return Fg;case 35667:case 35671:return Ng;case 35668:case 35672:return kg;case 35669:case 35673:return Qg;case 5125:return Og;case 36294:return Gg;case 36295:return zg;case 36296:return Hg;case 35678:case 36198:case 36298:case 36306:case 35682:return Vg;case 35679:case 36299:case 36307:return Wg;case 35680:case 36300:case 36308:case 36293:return jg;case 36289:case 36303:case 36311:case 36292:return qg}}function Xg(i,e){i.uniform1fv(this.addr,e)}function Kg(i,e){const t=ua(e,this.size,2);i.uniform2fv(this.addr,t)}function Jg(i,e){const t=ua(e,this.size,3);i.uniform3fv(this.addr,t)}function Zg(i,e){const t=ua(e,this.size,4);i.uniform4fv(this.addr,t)}function $g(i,e){const t=ua(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function e0(i,e){const t=ua(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function t0(i,e){const t=ua(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function n0(i,e){i.uniform1iv(this.addr,e)}function i0(i,e){i.uniform2iv(this.addr,e)}function s0(i,e){i.uniform3iv(this.addr,e)}function a0(i,e){i.uniform4iv(this.addr,e)}function r0(i,e){i.uniform1uiv(this.addr,e)}function o0(i,e){i.uniform2uiv(this.addr,e)}function c0(i,e){i.uniform3uiv(this.addr,e)}function l0(i,e){i.uniform4uiv(this.addr,e)}function h0(i,e,t){const n=this.cache,s=e.length,a=ro(t,s);an(n,a)||(i.uniform1iv(this.addr,a),rn(n,a));for(let r=0;r!==s;++r)t.setTexture2D(e[r]||ud,a[r])}function u0(i,e,t){const n=this.cache,s=e.length,a=ro(t,s);an(n,a)||(i.uniform1iv(this.addr,a),rn(n,a));for(let r=0;r!==s;++r)t.setTexture3D(e[r]||fd,a[r])}function d0(i,e,t){const n=this.cache,s=e.length,a=ro(t,s);an(n,a)||(i.uniform1iv(this.addr,a),rn(n,a));for(let r=0;r!==s;++r)t.setTextureCube(e[r]||Ad,a[r])}function f0(i,e,t){const n=this.cache,s=e.length,a=ro(t,s);an(n,a)||(i.uniform1iv(this.addr,a),rn(n,a));for(let r=0;r!==s;++r)t.setTexture2DArray(e[r]||dd,a[r])}function A0(i){switch(i){case 5126:return Xg;case 35664:return Kg;case 35665:return Jg;case 35666:return Zg;case 35674:return $g;case 35675:return e0;case 35676:return t0;case 5124:case 35670:return n0;case 35667:case 35671:return i0;case 35668:case 35672:return s0;case 35669:case 35673:return a0;case 5125:return r0;case 36294:return o0;case 36295:return c0;case 36296:return l0;case 35678:case 36198:case 36298:case 36306:case 35682:return h0;case 35679:case 36299:case 36307:return u0;case 35680:case 36300:case 36308:case 36293:return d0;case 36289:case 36303:case 36311:case 36292:return f0}}class p0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Yg(t.type)}}class m0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=A0(t.type)}}class g0{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let a=0,r=s.length;a!==r;++a){const o=s[a];o.setValue(e,t[o.id],n)}}}const Go=/(\w+)(\])?(\[|\.)?/g;function Ih(i,e){i.seq.push(e),i.map[e.id]=e}function b0(i,e,t){const n=i.name,s=n.length;for(Go.lastIndex=0;;){const a=Go.exec(n),r=Go.lastIndex;let o=a[1];const c=a[2]==="]",l=a[3];if(c&&(o=o|0),l===void 0||l==="["&&r+2===s){Ih(t,l===void 0?new p0(o,i,e):new m0(o,i,e));break}else{let u=t.map[o];u===void 0&&(u=new g0(o),Ih(t,u)),t=u}}}class kr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const a=e.getActiveUniform(t,s),r=e.getUniformLocation(t,a.name);b0(a,r,this)}}setValue(e,t,n,s){const a=this.map[t];a!==void 0&&a.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let a=0,r=t.length;a!==r;++a){const o=t[a],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,a=e.length;s!==a;++s){const r=e[s];r.id in t&&n.push(r)}return n}}function Th(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const x0=37297;let _0=0;function E0(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let r=s;r<a;r++){const o=r+1;n.push(`${o===e?">":" "} ${o}: ${t[r]}`)}return n.join(`
`)}const Bh=new ft;function v0(i){gt._getMatrix(Bh,gt.workingColorSpace,i);const e=`mat3( ${Bh.elements.map(t=>t.toFixed(4))} )`;switch(gt.getTransfer(i)){case so:return[e,"LinearTransferOETF"];case St:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Rh(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const r=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+E0(i.getShaderSource(e),r)}else return s}function M0(i,e){const t=v0(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function y0(i,e){let t;switch(e){case Qu:t="Linear";break;case Ou:t="Reinhard";break;case Gu:t="Cineon";break;case hl:t="ACESFilmic";break;case ul:t="AgX";break;case zu:t="Neutral";break;case Df:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const xr=new G;function w0(){gt.getLuminanceCoefficients(xr);const i=xr.x.toFixed(4),e=xr.y.toFixed(4),t=xr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function C0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ba).join(`
`)}function S0(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function I0(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const a=i.getActiveAttrib(e,s),r=a.name;let o=1;a.type===i.FLOAT_MAT2&&(o=2),a.type===i.FLOAT_MAT3&&(o=3),a.type===i.FLOAT_MAT4&&(o=4),t[r]={type:a.type,location:i.getAttribLocation(e,r),locationSize:o}}return t}function Ba(i){return i!==""}function Dh(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Lh(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const T0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Yc(i){return i.replace(T0,R0)}const B0=new Map;function R0(i,e){let t=At[e];if(t===void 0){const n=B0.get(e);if(n!==void 0)t=At[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Yc(t)}const D0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ph(i){return i.replace(D0,L0)}function L0(i,e,t,n){let s="";for(let a=parseInt(e);a<parseInt(t);a++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return s}function Uh(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function P0(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===cl?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Nu?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Si&&(e="SHADOWMAP_TYPE_VSM"),e}function U0(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case ms:case na:e="ENVMAP_TYPE_CUBE";break;case no:e="ENVMAP_TYPE_CUBE_UV";break}return e}function F0(i){let e="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===na&&(e="ENVMAP_MODE_REFRACTION"),e}function N0(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case ll:e="ENVMAP_BLENDING_MULTIPLY";break;case Bf:e="ENVMAP_BLENDING_MIX";break;case Rf:e="ENVMAP_BLENDING_ADD";break}return e}function k0(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Q0(i,e,t,n){const s=i.getContext(),a=t.defines;let r=t.vertexShader,o=t.fragmentShader;const c=P0(t),l=U0(t),h=F0(t),u=N0(t),d=k0(t),f=C0(t),m=S0(a),x=s.createProgram();let p,A,E=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Ba).join(`
`),p.length>0&&(p+=`
`),A=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Ba).join(`
`),A.length>0&&(A+=`
`)):(p=[Uh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ba).join(`
`),A=[Uh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==es?"#define TONE_MAPPING":"",t.toneMapping!==es?At.tonemapping_pars_fragment:"",t.toneMapping!==es?y0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",At.colorspace_pars_fragment,M0("linearToOutputTexel",t.outputColorSpace),w0(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ba).join(`
`)),r=Yc(r),r=Dh(r,t),r=Lh(r,t),o=Yc(o),o=Dh(o,t),o=Lh(o,t),r=Ph(r),o=Ph(o),t.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,p=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,A=["#define varying in",t.glslVersion===ql?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ql?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+A);const _=E+p+r,g=E+A+o,B=Th(s,s.VERTEX_SHADER,_),S=Th(s,s.FRAGMENT_SHADER,g);s.attachShader(x,B),s.attachShader(x,S),t.index0AttributeName!==void 0?s.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function T(L){if(i.debug.checkShaderErrors){const V=s.getProgramInfoLog(x).trim(),te=s.getShaderInfoLog(B).trim(),Ae=s.getShaderInfoLog(S).trim();let ae=!0,ce=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(ae=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,B,S);else{const se=Rh(s,B,"vertex"),J=Rh(s,S,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+V+`
`+se+`
`+J)}else V!==""?console.warn("THREE.WebGLProgram: Program Info Log:",V):(te===""||Ae==="")&&(ce=!1);ce&&(L.diagnostics={runnable:ae,programLog:V,vertexShader:{log:te,prefix:p},fragmentShader:{log:Ae,prefix:A}})}s.deleteShader(B),s.deleteShader(S),U=new kr(s,x),M=I0(s,x)}let U;this.getUniforms=function(){return U===void 0&&T(this),U};let M;this.getAttributes=function(){return M===void 0&&T(this),M};let y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=s.getProgramParameter(x,x0)),y},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=_0++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=B,this.fragmentShader=S,this}let O0=0;class G0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),a=this._getShaderStage(n),r=this._getShaderCacheForMaterial(e);return r.has(s)===!1&&(r.add(s),s.usedTimes++),r.has(a)===!1&&(r.add(a),a.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new z0(e),t.set(e,n)),n}}class z0{constructor(e){this.id=O0++,this.code=e,this.usedTimes=0}}function H0(i,e,t,n,s,a,r){const o=new ad,c=new G0,l=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures;let f=s.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(M){return l.add(M),M===0?"uv":`uv${M}`}function p(M,y,L,V,te){const Ae=V.fog,ae=te.geometry,ce=M.isMeshStandardMaterial?V.environment:null,se=(M.isMeshStandardMaterial?t:e).get(M.envMap||ce),J=se&&se.mapping===no?se.image.height:null,fe=m[M.type];M.precision!==null&&(f=s.getMaxPrecision(M.precision),f!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",f,"instead."));const $=ae.morphAttributes.position||ae.morphAttributes.normal||ae.morphAttributes.color,me=$!==void 0?$.length:0;let Ce=0;ae.morphAttributes.position!==void 0&&(Ce=1),ae.morphAttributes.normal!==void 0&&(Ce=2),ae.morphAttributes.color!==void 0&&(Ce=3);let Me,ne,Ee,Te;if(fe){const Pe=di[fe];Me=Pe.vertexShader,ne=Pe.fragmentShader}else Me=M.vertexShader,ne=M.fragmentShader,c.update(M),Ee=c.getVertexShaderID(M),Te=c.getFragmentShaderID(M);const Se=i.getRenderTarget(),Le=i.state.buffers.depth.getReversed(),Fe=te.isInstancedMesh===!0,Ge=te.isBatchedMesh===!0,je=!!M.map,w=!!M.matcap,Q=!!se,R=!!M.aoMap,ee=!!M.lightMap,Y=!!M.bumpMap,O=!!M.normalMap,W=!!M.displacementMap,j=!!M.emissiveMap,H=!!M.metalnessMap,v=!!M.roughnessMap,b=M.anisotropy>0,C=M.clearcoat>0,P=M.dispersion>0,I=M.iridescence>0,k=M.sheen>0,F=M.transmission>0,N=b&&!!M.anisotropyMap,K=C&&!!M.clearcoatMap,de=C&&!!M.clearcoatNormalMap,ie=C&&!!M.clearcoatRoughnessMap,X=I&&!!M.iridescenceMap,pe=I&&!!M.iridescenceThicknessMap,be=k&&!!M.sheenColorMap,ge=k&&!!M.sheenRoughnessMap,Be=!!M.specularMap,Re=!!M.specularColorMap,Qe=!!M.specularIntensityMap,q=F&&!!M.transmissionMap,Ie=F&&!!M.thicknessMap,le=!!M.gradientMap,we=!!M.alphaMap,ue=M.alphaTest>0,z=!!M.alphaHash,oe=!!M.extensions;let ye=es;M.toneMapped&&(Se===null||Se.isXRRenderTarget===!0)&&(ye=i.toneMapping);const Ne={shaderID:fe,shaderType:M.type,shaderName:M.name,vertexShader:Me,fragmentShader:ne,defines:M.defines,customVertexShaderID:Ee,customFragmentShaderID:Te,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:f,batching:Ge,batchingColor:Ge&&te._colorsTexture!==null,instancing:Fe,instancingColor:Fe&&te.instanceColor!==null,instancingMorph:Fe&&te.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:Se===null?i.outputColorSpace:Se.isXRRenderTarget===!0?Se.texture.colorSpace:xn,alphaToCoverage:!!M.alphaToCoverage,map:je,matcap:w,envMap:Q,envMapMode:Q&&se.mapping,envMapCubeUVHeight:J,aoMap:R,lightMap:ee,bumpMap:Y,normalMap:O,displacementMap:d&&W,emissiveMap:j,normalMapObjectSpace:O&&M.normalMapType===kf,normalMapTangentSpace:O&&M.normalMapType===io,metalnessMap:H,roughnessMap:v,anisotropy:b,anisotropyMap:N,clearcoat:C,clearcoatMap:K,clearcoatNormalMap:de,clearcoatRoughnessMap:ie,dispersion:P,iridescence:I,iridescenceMap:X,iridescenceThicknessMap:pe,sheen:k,sheenColorMap:be,sheenRoughnessMap:ge,specularMap:Be,specularColorMap:Re,specularIntensityMap:Qe,transmission:F,transmissionMap:q,thicknessMap:Ie,gradientMap:le,opaque:M.transparent===!1&&M.blending===Xs&&M.alphaToCoverage===!1,alphaMap:we,alphaTest:ue,alphaHash:z,combine:M.combine,mapUv:je&&x(M.map.channel),aoMapUv:R&&x(M.aoMap.channel),lightMapUv:ee&&x(M.lightMap.channel),bumpMapUv:Y&&x(M.bumpMap.channel),normalMapUv:O&&x(M.normalMap.channel),displacementMapUv:W&&x(M.displacementMap.channel),emissiveMapUv:j&&x(M.emissiveMap.channel),metalnessMapUv:H&&x(M.metalnessMap.channel),roughnessMapUv:v&&x(M.roughnessMap.channel),anisotropyMapUv:N&&x(M.anisotropyMap.channel),clearcoatMapUv:K&&x(M.clearcoatMap.channel),clearcoatNormalMapUv:de&&x(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ie&&x(M.clearcoatRoughnessMap.channel),iridescenceMapUv:X&&x(M.iridescenceMap.channel),iridescenceThicknessMapUv:pe&&x(M.iridescenceThicknessMap.channel),sheenColorMapUv:be&&x(M.sheenColorMap.channel),sheenRoughnessMapUv:ge&&x(M.sheenRoughnessMap.channel),specularMapUv:Be&&x(M.specularMap.channel),specularColorMapUv:Re&&x(M.specularColorMap.channel),specularIntensityMapUv:Qe&&x(M.specularIntensityMap.channel),transmissionMapUv:q&&x(M.transmissionMap.channel),thicknessMapUv:Ie&&x(M.thicknessMap.channel),alphaMapUv:we&&x(M.alphaMap.channel),vertexTangents:!!ae.attributes.tangent&&(O||b),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!ae.attributes.color&&ae.attributes.color.itemSize===4,pointsUvs:te.isPoints===!0&&!!ae.attributes.uv&&(je||we),fog:!!Ae,useFog:M.fog===!0,fogExp2:!!Ae&&Ae.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Le,skinning:te.isSkinnedMesh===!0,morphTargets:ae.morphAttributes.position!==void 0,morphNormals:ae.morphAttributes.normal!==void 0,morphColors:ae.morphAttributes.color!==void 0,morphTargetsCount:me,morphTextureStride:Ce,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&L.length>0,shadowMapType:i.shadowMap.type,toneMapping:ye,decodeVideoTexture:je&&M.map.isVideoTexture===!0&&gt.getTransfer(M.map.colorSpace)===St,decodeVideoTextureEmissive:j&&M.emissiveMap.isVideoTexture===!0&&gt.getTransfer(M.emissiveMap.colorSpace)===St,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===zt,flipSided:M.side===Dn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:oe&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(oe&&M.extensions.multiDraw===!0||Ge)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return Ne.vertexUv1s=l.has(1),Ne.vertexUv2s=l.has(2),Ne.vertexUv3s=l.has(3),l.clear(),Ne}function A(M){const y=[];if(M.shaderID?y.push(M.shaderID):(y.push(M.customVertexShaderID),y.push(M.customFragmentShaderID)),M.defines!==void 0)for(const L in M.defines)y.push(L),y.push(M.defines[L]);return M.isRawShaderMaterial===!1&&(E(y,M),_(y,M),y.push(i.outputColorSpace)),y.push(M.customProgramCacheKey),y.join()}function E(M,y){M.push(y.precision),M.push(y.outputColorSpace),M.push(y.envMapMode),M.push(y.envMapCubeUVHeight),M.push(y.mapUv),M.push(y.alphaMapUv),M.push(y.lightMapUv),M.push(y.aoMapUv),M.push(y.bumpMapUv),M.push(y.normalMapUv),M.push(y.displacementMapUv),M.push(y.emissiveMapUv),M.push(y.metalnessMapUv),M.push(y.roughnessMapUv),M.push(y.anisotropyMapUv),M.push(y.clearcoatMapUv),M.push(y.clearcoatNormalMapUv),M.push(y.clearcoatRoughnessMapUv),M.push(y.iridescenceMapUv),M.push(y.iridescenceThicknessMapUv),M.push(y.sheenColorMapUv),M.push(y.sheenRoughnessMapUv),M.push(y.specularMapUv),M.push(y.specularColorMapUv),M.push(y.specularIntensityMapUv),M.push(y.transmissionMapUv),M.push(y.thicknessMapUv),M.push(y.combine),M.push(y.fogExp2),M.push(y.sizeAttenuation),M.push(y.morphTargetsCount),M.push(y.morphAttributeCount),M.push(y.numDirLights),M.push(y.numPointLights),M.push(y.numSpotLights),M.push(y.numSpotLightMaps),M.push(y.numHemiLights),M.push(y.numRectAreaLights),M.push(y.numDirLightShadows),M.push(y.numPointLightShadows),M.push(y.numSpotLightShadows),M.push(y.numSpotLightShadowsWithMaps),M.push(y.numLightProbes),M.push(y.shadowMapType),M.push(y.toneMapping),M.push(y.numClippingPlanes),M.push(y.numClipIntersection),M.push(y.depthPacking)}function _(M,y){o.disableAll(),y.supportsVertexTextures&&o.enable(0),y.instancing&&o.enable(1),y.instancingColor&&o.enable(2),y.instancingMorph&&o.enable(3),y.matcap&&o.enable(4),y.envMap&&o.enable(5),y.normalMapObjectSpace&&o.enable(6),y.normalMapTangentSpace&&o.enable(7),y.clearcoat&&o.enable(8),y.iridescence&&o.enable(9),y.alphaTest&&o.enable(10),y.vertexColors&&o.enable(11),y.vertexAlphas&&o.enable(12),y.vertexUv1s&&o.enable(13),y.vertexUv2s&&o.enable(14),y.vertexUv3s&&o.enable(15),y.vertexTangents&&o.enable(16),y.anisotropy&&o.enable(17),y.alphaHash&&o.enable(18),y.batching&&o.enable(19),y.dispersion&&o.enable(20),y.batchingColor&&o.enable(21),M.push(o.mask),o.disableAll(),y.fog&&o.enable(0),y.useFog&&o.enable(1),y.flatShading&&o.enable(2),y.logarithmicDepthBuffer&&o.enable(3),y.reverseDepthBuffer&&o.enable(4),y.skinning&&o.enable(5),y.morphTargets&&o.enable(6),y.morphNormals&&o.enable(7),y.morphColors&&o.enable(8),y.premultipliedAlpha&&o.enable(9),y.shadowMapEnabled&&o.enable(10),y.doubleSided&&o.enable(11),y.flipSided&&o.enable(12),y.useDepthPacking&&o.enable(13),y.dithering&&o.enable(14),y.transmission&&o.enable(15),y.sheen&&o.enable(16),y.opaque&&o.enable(17),y.pointsUvs&&o.enable(18),y.decodeVideoTexture&&o.enable(19),y.decodeVideoTextureEmissive&&o.enable(20),y.alphaToCoverage&&o.enable(21),M.push(o.mask)}function g(M){const y=m[M.type];let L;if(y){const V=di[y];L=Ai.clone(V.uniforms)}else L=M.uniforms;return L}function B(M,y){let L;for(let V=0,te=h.length;V<te;V++){const Ae=h[V];if(Ae.cacheKey===y){L=Ae,++L.usedTimes;break}}return L===void 0&&(L=new Q0(i,y,M,a),h.push(L)),L}function S(M){if(--M.usedTimes===0){const y=h.indexOf(M);h[y]=h[h.length-1],h.pop(),M.destroy()}}function T(M){c.remove(M)}function U(){c.dispose()}return{getParameters:p,getProgramCacheKey:A,getUniforms:g,acquireProgram:B,releaseProgram:S,releaseShaderCache:T,programs:h,dispose:U}}function V0(){let i=new WeakMap;function e(r){return i.has(r)}function t(r){let o=i.get(r);return o===void 0&&(o={},i.set(r,o)),o}function n(r){i.delete(r)}function s(r,o,c){i.get(r)[o]=c}function a(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:a}}function W0(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Fh(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Nh(){const i=[];let e=0;const t=[],n=[],s=[];function a(){e=0,t.length=0,n.length=0,s.length=0}function r(u,d,f,m,x,p){let A=i[e];return A===void 0?(A={id:u.id,object:u,geometry:d,material:f,groupOrder:m,renderOrder:u.renderOrder,z:x,group:p},i[e]=A):(A.id=u.id,A.object=u,A.geometry=d,A.material=f,A.groupOrder=m,A.renderOrder=u.renderOrder,A.z=x,A.group=p),e++,A}function o(u,d,f,m,x,p){const A=r(u,d,f,m,x,p);f.transmission>0?n.push(A):f.transparent===!0?s.push(A):t.push(A)}function c(u,d,f,m,x,p){const A=r(u,d,f,m,x,p);f.transmission>0?n.unshift(A):f.transparent===!0?s.unshift(A):t.unshift(A)}function l(u,d){t.length>1&&t.sort(u||W0),n.length>1&&n.sort(d||Fh),s.length>1&&s.sort(d||Fh)}function h(){for(let u=e,d=i.length;u<d;u++){const f=i[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:s,init:a,push:o,unshift:c,finish:h,sort:l}}function j0(){let i=new WeakMap;function e(n,s){const a=i.get(n);let r;return a===void 0?(r=new Nh,i.set(n,[r])):s>=a.length?(r=new Nh,a.push(r)):r=a[s],r}function t(){i=new WeakMap}return{get:e,dispose:t}}function q0(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new G,color:new De};break;case"SpotLight":t={position:new G,direction:new G,color:new De,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new G,color:new De,distance:0,decay:0};break;case"HemisphereLight":t={direction:new G,skyColor:new De,groundColor:new De};break;case"RectAreaLight":t={color:new De,position:new G,halfWidth:new G,halfHeight:new G};break}return i[e.id]=t,t}}}function Y0(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let X0=0;function K0(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function J0(i){const e=new q0,t=Y0(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new G);const s=new G,a=new $e,r=new $e;function o(l){let h=0,u=0,d=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let f=0,m=0,x=0,p=0,A=0,E=0,_=0,g=0,B=0,S=0,T=0;l.sort(K0);for(let M=0,y=l.length;M<y;M++){const L=l[M],V=L.color,te=L.intensity,Ae=L.distance,ae=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)h+=V.r*te,u+=V.g*te,d+=V.b*te;else if(L.isLightProbe){for(let ce=0;ce<9;ce++)n.probe[ce].addScaledVector(L.sh.coefficients[ce],te);T++}else if(L.isDirectionalLight){const ce=e.get(L);if(ce.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const se=L.shadow,J=t.get(L);J.shadowIntensity=se.intensity,J.shadowBias=se.bias,J.shadowNormalBias=se.normalBias,J.shadowRadius=se.radius,J.shadowMapSize=se.mapSize,n.directionalShadow[f]=J,n.directionalShadowMap[f]=ae,n.directionalShadowMatrix[f]=L.shadow.matrix,E++}n.directional[f]=ce,f++}else if(L.isSpotLight){const ce=e.get(L);ce.position.setFromMatrixPosition(L.matrixWorld),ce.color.copy(V).multiplyScalar(te),ce.distance=Ae,ce.coneCos=Math.cos(L.angle),ce.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),ce.decay=L.decay,n.spot[x]=ce;const se=L.shadow;if(L.map&&(n.spotLightMap[B]=L.map,B++,se.updateMatrices(L),L.castShadow&&S++),n.spotLightMatrix[x]=se.matrix,L.castShadow){const J=t.get(L);J.shadowIntensity=se.intensity,J.shadowBias=se.bias,J.shadowNormalBias=se.normalBias,J.shadowRadius=se.radius,J.shadowMapSize=se.mapSize,n.spotShadow[x]=J,n.spotShadowMap[x]=ae,g++}x++}else if(L.isRectAreaLight){const ce=e.get(L);ce.color.copy(V).multiplyScalar(te),ce.halfWidth.set(L.width*.5,0,0),ce.halfHeight.set(0,L.height*.5,0),n.rectArea[p]=ce,p++}else if(L.isPointLight){const ce=e.get(L);if(ce.color.copy(L.color).multiplyScalar(L.intensity),ce.distance=L.distance,ce.decay=L.decay,L.castShadow){const se=L.shadow,J=t.get(L);J.shadowIntensity=se.intensity,J.shadowBias=se.bias,J.shadowNormalBias=se.normalBias,J.shadowRadius=se.radius,J.shadowMapSize=se.mapSize,J.shadowCameraNear=se.camera.near,J.shadowCameraFar=se.camera.far,n.pointShadow[m]=J,n.pointShadowMap[m]=ae,n.pointShadowMatrix[m]=L.shadow.matrix,_++}n.point[m]=ce,m++}else if(L.isHemisphereLight){const ce=e.get(L);ce.skyColor.copy(L.color).multiplyScalar(te),ce.groundColor.copy(L.groundColor).multiplyScalar(te),n.hemi[A]=ce,A++}}p>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=We.LTC_FLOAT_1,n.rectAreaLTC2=We.LTC_FLOAT_2):(n.rectAreaLTC1=We.LTC_HALF_1,n.rectAreaLTC2=We.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const U=n.hash;(U.directionalLength!==f||U.pointLength!==m||U.spotLength!==x||U.rectAreaLength!==p||U.hemiLength!==A||U.numDirectionalShadows!==E||U.numPointShadows!==_||U.numSpotShadows!==g||U.numSpotMaps!==B||U.numLightProbes!==T)&&(n.directional.length=f,n.spot.length=x,n.rectArea.length=p,n.point.length=m,n.hemi.length=A,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.pointShadow.length=_,n.pointShadowMap.length=_,n.spotShadow.length=g,n.spotShadowMap.length=g,n.directionalShadowMatrix.length=E,n.pointShadowMatrix.length=_,n.spotLightMatrix.length=g+B-S,n.spotLightMap.length=B,n.numSpotLightShadowsWithMaps=S,n.numLightProbes=T,U.directionalLength=f,U.pointLength=m,U.spotLength=x,U.rectAreaLength=p,U.hemiLength=A,U.numDirectionalShadows=E,U.numPointShadows=_,U.numSpotShadows=g,U.numSpotMaps=B,U.numLightProbes=T,n.version=X0++)}function c(l,h){let u=0,d=0,f=0,m=0,x=0;const p=h.matrixWorldInverse;for(let A=0,E=l.length;A<E;A++){const _=l[A];if(_.isDirectionalLight){const g=n.directional[u];g.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),g.direction.sub(s),g.direction.transformDirection(p),u++}else if(_.isSpotLight){const g=n.spot[f];g.position.setFromMatrixPosition(_.matrixWorld),g.position.applyMatrix4(p),g.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),g.direction.sub(s),g.direction.transformDirection(p),f++}else if(_.isRectAreaLight){const g=n.rectArea[m];g.position.setFromMatrixPosition(_.matrixWorld),g.position.applyMatrix4(p),r.identity(),a.copy(_.matrixWorld),a.premultiply(p),r.extractRotation(a),g.halfWidth.set(_.width*.5,0,0),g.halfHeight.set(0,_.height*.5,0),g.halfWidth.applyMatrix4(r),g.halfHeight.applyMatrix4(r),m++}else if(_.isPointLight){const g=n.point[d];g.position.setFromMatrixPosition(_.matrixWorld),g.position.applyMatrix4(p),d++}else if(_.isHemisphereLight){const g=n.hemi[x];g.direction.setFromMatrixPosition(_.matrixWorld),g.direction.transformDirection(p),x++}}}return{setup:o,setupView:c,state:n}}function kh(i){const e=new J0(i),t=[],n=[];function s(h){l.camera=h,t.length=0,n.length=0}function a(h){t.push(h)}function r(h){n.push(h)}function o(){e.setup(t)}function c(h){e.setupView(t,h)}const l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:o,setupLightsView:c,pushLight:a,pushShadow:r}}function Z0(i){let e=new WeakMap;function t(s,a=0){const r=e.get(s);let o;return r===void 0?(o=new kh(i),e.set(s,[o])):a>=r.length?(o=new kh(i),r.push(o)):o=r[a],o}function n(){e=new WeakMap}return{get:t,dispose:n}}class $0 extends Jn{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Ff,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class eb extends Jn{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const tb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,nb=`uniform sampler2D shadow_pass;
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
}`;function ib(i,e,t){let n=new El;const s=new He,a=new He,r=new vt,o=new $0({depthPacking:Nf}),c=new eb,l={},h=t.maxTextureSize,u={[ci]:Dn,[Dn]:ci,[zt]:zt},d=new Zt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new He},radius:{value:4}},vertexShader:tb,fragmentShader:nb}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const m=new Bt;m.setAttribute("position",new Gt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new lt(m,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=cl;let A=this.type;this.render=function(S,T,U){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||S.length===0)return;const M=i.getRenderTarget(),y=i.getActiveCubeFace(),L=i.getActiveMipmapLevel(),V=i.state;V.setBlending(ln),V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);const te=A!==Si&&this.type===Si,Ae=A===Si&&this.type!==Si;for(let ae=0,ce=S.length;ae<ce;ae++){const se=S[ae],J=se.shadow;if(J===void 0){console.warn("THREE.WebGLShadowMap:",se,"has no shadow.");continue}if(J.autoUpdate===!1&&J.needsUpdate===!1)continue;s.copy(J.mapSize);const fe=J.getFrameExtents();if(s.multiply(fe),a.copy(J.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(a.x=Math.floor(h/fe.x),s.x=a.x*fe.x,J.mapSize.x=a.x),s.y>h&&(a.y=Math.floor(h/fe.y),s.y=a.y*fe.y,J.mapSize.y=a.y)),J.map===null||te===!0||Ae===!0){const me=this.type!==Si?{minFilter:An,magFilter:An}:{};J.map!==null&&J.map.dispose(),J.map=new On(s.x,s.y,me),J.map.texture.name=se.name+".shadowMap",J.camera.updateProjectionMatrix()}i.setRenderTarget(J.map),i.clear();const $=J.getViewportCount();for(let me=0;me<$;me++){const Ce=J.getViewport(me);r.set(a.x*Ce.x,a.y*Ce.y,a.x*Ce.z,a.y*Ce.w),V.viewport(r),J.updateMatrices(se,me),n=J.getFrustum(),g(T,U,J.camera,se,this.type)}J.isPointLightShadow!==!0&&this.type===Si&&E(J,U),J.needsUpdate=!1}A=this.type,p.needsUpdate=!1,i.setRenderTarget(M,y,L)};function E(S,T){const U=e.update(x);d.defines.VSM_SAMPLES!==S.blurSamples&&(d.defines.VSM_SAMPLES=S.blurSamples,f.defines.VSM_SAMPLES=S.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new On(s.x,s.y)),d.uniforms.shadow_pass.value=S.map.texture,d.uniforms.resolution.value=S.mapSize,d.uniforms.radius.value=S.radius,i.setRenderTarget(S.mapPass),i.clear(),i.renderBufferDirect(T,null,U,d,x,null),f.uniforms.shadow_pass.value=S.mapPass.texture,f.uniforms.resolution.value=S.mapSize,f.uniforms.radius.value=S.radius,i.setRenderTarget(S.map),i.clear(),i.renderBufferDirect(T,null,U,f,x,null)}function _(S,T,U,M){let y=null;const L=U.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(L!==void 0)y=L;else if(y=U.isPointLight===!0?c:o,i.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const V=y.uuid,te=T.uuid;let Ae=l[V];Ae===void 0&&(Ae={},l[V]=Ae);let ae=Ae[te];ae===void 0&&(ae=y.clone(),Ae[te]=ae,T.addEventListener("dispose",B)),y=ae}if(y.visible=T.visible,y.wireframe=T.wireframe,M===Si?y.side=T.shadowSide!==null?T.shadowSide:T.side:y.side=T.shadowSide!==null?T.shadowSide:u[T.side],y.alphaMap=T.alphaMap,y.alphaTest=T.alphaTest,y.map=T.map,y.clipShadows=T.clipShadows,y.clippingPlanes=T.clippingPlanes,y.clipIntersection=T.clipIntersection,y.displacementMap=T.displacementMap,y.displacementScale=T.displacementScale,y.displacementBias=T.displacementBias,y.wireframeLinewidth=T.wireframeLinewidth,y.linewidth=T.linewidth,U.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const V=i.properties.get(y);V.light=U}return y}function g(S,T,U,M,y){if(S.visible===!1)return;if(S.layers.test(T.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&y===Si)&&(!S.frustumCulled||n.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,S.matrixWorld);const te=e.update(S),Ae=S.material;if(Array.isArray(Ae)){const ae=te.groups;for(let ce=0,se=ae.length;ce<se;ce++){const J=ae[ce],fe=Ae[J.materialIndex];if(fe&&fe.visible){const $=_(S,fe,M,y);S.onBeforeShadow(i,S,T,U,te,$,J),i.renderBufferDirect(U,null,te,$,S,J),S.onAfterShadow(i,S,T,U,te,$,J)}}}else if(Ae.visible){const ae=_(S,Ae,M,y);S.onBeforeShadow(i,S,T,U,te,ae,null),i.renderBufferDirect(U,null,te,ae,S,null),S.onAfterShadow(i,S,T,U,te,ae,null)}}const V=S.children;for(let te=0,Ae=V.length;te<Ae;te++)g(V[te],T,U,M,y)}function B(S){S.target.removeEventListener("dispose",B);for(const U in l){const M=l[U],y=S.target.uuid;y in M&&(M[y].dispose(),delete M[y])}}}const sb={[xc]:_c,[Ec]:yc,[vc]:wc,[ta]:Mc,[_c]:xc,[yc]:Ec,[wc]:vc,[Mc]:ta};function ab(i,e){function t(){let q=!1;const Ie=new vt;let le=null;const we=new vt(0,0,0,0);return{setMask:function(ue){le!==ue&&!q&&(i.colorMask(ue,ue,ue,ue),le=ue)},setLocked:function(ue){q=ue},setClear:function(ue,z,oe,ye,Ne){Ne===!0&&(ue*=ye,z*=ye,oe*=ye),Ie.set(ue,z,oe,ye),we.equals(Ie)===!1&&(i.clearColor(ue,z,oe,ye),we.copy(Ie))},reset:function(){q=!1,le=null,we.set(-1,0,0,0)}}}function n(){let q=!1,Ie=!1,le=null,we=null,ue=null;return{setReversed:function(z){if(Ie!==z){const oe=e.get("EXT_clip_control");Ie?oe.clipControlEXT(oe.LOWER_LEFT_EXT,oe.ZERO_TO_ONE_EXT):oe.clipControlEXT(oe.LOWER_LEFT_EXT,oe.NEGATIVE_ONE_TO_ONE_EXT);const ye=ue;ue=null,this.setClear(ye)}Ie=z},getReversed:function(){return Ie},setTest:function(z){z?Se(i.DEPTH_TEST):Le(i.DEPTH_TEST)},setMask:function(z){le!==z&&!q&&(i.depthMask(z),le=z)},setFunc:function(z){if(Ie&&(z=sb[z]),we!==z){switch(z){case xc:i.depthFunc(i.NEVER);break;case _c:i.depthFunc(i.ALWAYS);break;case Ec:i.depthFunc(i.LESS);break;case ta:i.depthFunc(i.LEQUAL);break;case vc:i.depthFunc(i.EQUAL);break;case Mc:i.depthFunc(i.GEQUAL);break;case yc:i.depthFunc(i.GREATER);break;case wc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}we=z}},setLocked:function(z){q=z},setClear:function(z){ue!==z&&(Ie&&(z=1-z),i.clearDepth(z),ue=z)},reset:function(){q=!1,le=null,we=null,ue=null,Ie=!1}}}function s(){let q=!1,Ie=null,le=null,we=null,ue=null,z=null,oe=null,ye=null,Ne=null;return{setTest:function(Pe){q||(Pe?Se(i.STENCIL_TEST):Le(i.STENCIL_TEST))},setMask:function(Pe){Ie!==Pe&&!q&&(i.stencilMask(Pe),Ie=Pe)},setFunc:function(Pe,rt,mt){(le!==Pe||we!==rt||ue!==mt)&&(i.stencilFunc(Pe,rt,mt),le=Pe,we=rt,ue=mt)},setOp:function(Pe,rt,mt){(z!==Pe||oe!==rt||ye!==mt)&&(i.stencilOp(Pe,rt,mt),z=Pe,oe=rt,ye=mt)},setLocked:function(Pe){q=Pe},setClear:function(Pe){Ne!==Pe&&(i.clearStencil(Pe),Ne=Pe)},reset:function(){q=!1,Ie=null,le=null,we=null,ue=null,z=null,oe=null,ye=null,Ne=null}}}const a=new t,r=new n,o=new s,c=new WeakMap,l=new WeakMap;let h={},u={},d=new WeakMap,f=[],m=null,x=!1,p=null,A=null,E=null,_=null,g=null,B=null,S=null,T=new De(0,0,0),U=0,M=!1,y=null,L=null,V=null,te=null,Ae=null;const ae=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ce=!1,se=0;const J=i.getParameter(i.VERSION);J.indexOf("WebGL")!==-1?(se=parseFloat(/^WebGL (\d)/.exec(J)[1]),ce=se>=1):J.indexOf("OpenGL ES")!==-1&&(se=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),ce=se>=2);let fe=null,$={};const me=i.getParameter(i.SCISSOR_BOX),Ce=i.getParameter(i.VIEWPORT),Me=new vt().fromArray(me),ne=new vt().fromArray(Ce);function Ee(q,Ie,le,we){const ue=new Uint8Array(4),z=i.createTexture();i.bindTexture(q,z),i.texParameteri(q,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(q,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let oe=0;oe<le;oe++)q===i.TEXTURE_3D||q===i.TEXTURE_2D_ARRAY?i.texImage3D(Ie,0,i.RGBA,1,1,we,0,i.RGBA,i.UNSIGNED_BYTE,ue):i.texImage2D(Ie+oe,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ue);return z}const Te={};Te[i.TEXTURE_2D]=Ee(i.TEXTURE_2D,i.TEXTURE_2D,1),Te[i.TEXTURE_CUBE_MAP]=Ee(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Te[i.TEXTURE_2D_ARRAY]=Ee(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Te[i.TEXTURE_3D]=Ee(i.TEXTURE_3D,i.TEXTURE_3D,1,1),a.setClear(0,0,0,1),r.setClear(1),o.setClear(0),Se(i.DEPTH_TEST),r.setFunc(ta),Y(!1),O(Ql),Se(i.CULL_FACE),R(ln);function Se(q){h[q]!==!0&&(i.enable(q),h[q]=!0)}function Le(q){h[q]!==!1&&(i.disable(q),h[q]=!1)}function Fe(q,Ie){return u[q]!==Ie?(i.bindFramebuffer(q,Ie),u[q]=Ie,q===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=Ie),q===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=Ie),!0):!1}function Ge(q,Ie){let le=f,we=!1;if(q){le=d.get(Ie),le===void 0&&(le=[],d.set(Ie,le));const ue=q.textures;if(le.length!==ue.length||le[0]!==i.COLOR_ATTACHMENT0){for(let z=0,oe=ue.length;z<oe;z++)le[z]=i.COLOR_ATTACHMENT0+z;le.length=ue.length,we=!0}}else le[0]!==i.BACK&&(le[0]=i.BACK,we=!0);we&&i.drawBuffers(le)}function je(q){return m!==q?(i.useProgram(q),m=q,!0):!1}const w={[si]:i.FUNC_ADD,[mf]:i.FUNC_SUBTRACT,[gf]:i.FUNC_REVERSE_SUBTRACT};w[bf]=i.MIN,w[xf]=i.MAX;const Q={[Sa]:i.ZERO,[_f]:i.ONE,[Ef]:i.SRC_COLOR,[pc]:i.SRC_ALPHA,[wf]:i.SRC_ALPHA_SATURATE,[bc]:i.DST_COLOR,[gc]:i.DST_ALPHA,[vf]:i.ONE_MINUS_SRC_COLOR,[mc]:i.ONE_MINUS_SRC_ALPHA,[yf]:i.ONE_MINUS_DST_COLOR,[Mf]:i.ONE_MINUS_DST_ALPHA,[Cf]:i.CONSTANT_COLOR,[Sf]:i.ONE_MINUS_CONSTANT_COLOR,[If]:i.CONSTANT_ALPHA,[Tf]:i.ONE_MINUS_CONSTANT_ALPHA};function R(q,Ie,le,we,ue,z,oe,ye,Ne,Pe){if(q===ln){x===!0&&(Le(i.BLEND),x=!1);return}if(x===!1&&(Se(i.BLEND),x=!0),q!==ku){if(q!==p||Pe!==M){if((A!==si||g!==si)&&(i.blendEquation(i.FUNC_ADD),A=si,g=si),Pe)switch(q){case Xs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ac:i.blendFunc(i.ONE,i.ONE);break;case Ol:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Gl:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",q);break}else switch(q){case Xs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ac:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Ol:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Gl:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",q);break}E=null,_=null,B=null,S=null,T.set(0,0,0),U=0,p=q,M=Pe}return}ue=ue||Ie,z=z||le,oe=oe||we,(Ie!==A||ue!==g)&&(i.blendEquationSeparate(w[Ie],w[ue]),A=Ie,g=ue),(le!==E||we!==_||z!==B||oe!==S)&&(i.blendFuncSeparate(Q[le],Q[we],Q[z],Q[oe]),E=le,_=we,B=z,S=oe),(ye.equals(T)===!1||Ne!==U)&&(i.blendColor(ye.r,ye.g,ye.b,Ne),T.copy(ye),U=Ne),p=q,M=!1}function ee(q,Ie){q.side===zt?Le(i.CULL_FACE):Se(i.CULL_FACE);let le=q.side===Dn;Ie&&(le=!le),Y(le),q.blending===Xs&&q.transparent===!1?R(ln):R(q.blending,q.blendEquation,q.blendSrc,q.blendDst,q.blendEquationAlpha,q.blendSrcAlpha,q.blendDstAlpha,q.blendColor,q.blendAlpha,q.premultipliedAlpha),r.setFunc(q.depthFunc),r.setTest(q.depthTest),r.setMask(q.depthWrite),a.setMask(q.colorWrite);const we=q.stencilWrite;o.setTest(we),we&&(o.setMask(q.stencilWriteMask),o.setFunc(q.stencilFunc,q.stencilRef,q.stencilFuncMask),o.setOp(q.stencilFail,q.stencilZFail,q.stencilZPass)),j(q.polygonOffset,q.polygonOffsetFactor,q.polygonOffsetUnits),q.alphaToCoverage===!0?Se(i.SAMPLE_ALPHA_TO_COVERAGE):Le(i.SAMPLE_ALPHA_TO_COVERAGE)}function Y(q){y!==q&&(q?i.frontFace(i.CW):i.frontFace(i.CCW),y=q)}function O(q){q!==Af?(Se(i.CULL_FACE),q!==L&&(q===Ql?i.cullFace(i.BACK):q===pf?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Le(i.CULL_FACE),L=q}function W(q){q!==V&&(ce&&i.lineWidth(q),V=q)}function j(q,Ie,le){q?(Se(i.POLYGON_OFFSET_FILL),(te!==Ie||Ae!==le)&&(i.polygonOffset(Ie,le),te=Ie,Ae=le)):Le(i.POLYGON_OFFSET_FILL)}function H(q){q?Se(i.SCISSOR_TEST):Le(i.SCISSOR_TEST)}function v(q){q===void 0&&(q=i.TEXTURE0+ae-1),fe!==q&&(i.activeTexture(q),fe=q)}function b(q,Ie,le){le===void 0&&(fe===null?le=i.TEXTURE0+ae-1:le=fe);let we=$[le];we===void 0&&(we={type:void 0,texture:void 0},$[le]=we),(we.type!==q||we.texture!==Ie)&&(fe!==le&&(i.activeTexture(le),fe=le),i.bindTexture(q,Ie||Te[q]),we.type=q,we.texture=Ie)}function C(){const q=$[fe];q!==void 0&&q.type!==void 0&&(i.bindTexture(q.type,null),q.type=void 0,q.texture=void 0)}function P(){try{i.compressedTexImage2D.apply(i,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function I(){try{i.compressedTexImage3D.apply(i,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function k(){try{i.texSubImage2D.apply(i,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function F(){try{i.texSubImage3D.apply(i,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function N(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function K(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function de(){try{i.texStorage2D.apply(i,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function ie(){try{i.texStorage3D.apply(i,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function X(){try{i.texImage2D.apply(i,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function pe(){try{i.texImage3D.apply(i,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function be(q){Me.equals(q)===!1&&(i.scissor(q.x,q.y,q.z,q.w),Me.copy(q))}function ge(q){ne.equals(q)===!1&&(i.viewport(q.x,q.y,q.z,q.w),ne.copy(q))}function Be(q,Ie){let le=l.get(Ie);le===void 0&&(le=new WeakMap,l.set(Ie,le));let we=le.get(q);we===void 0&&(we=i.getUniformBlockIndex(Ie,q.name),le.set(q,we))}function Re(q,Ie){const we=l.get(Ie).get(q);c.get(Ie)!==we&&(i.uniformBlockBinding(Ie,we,q.__bindingPointIndex),c.set(Ie,we))}function Qe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),r.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},fe=null,$={},u={},d=new WeakMap,f=[],m=null,x=!1,p=null,A=null,E=null,_=null,g=null,B=null,S=null,T=new De(0,0,0),U=0,M=!1,y=null,L=null,V=null,te=null,Ae=null,Me.set(0,0,i.canvas.width,i.canvas.height),ne.set(0,0,i.canvas.width,i.canvas.height),a.reset(),r.reset(),o.reset()}return{buffers:{color:a,depth:r,stencil:o},enable:Se,disable:Le,bindFramebuffer:Fe,drawBuffers:Ge,useProgram:je,setBlending:R,setMaterial:ee,setFlipSided:Y,setCullFace:O,setLineWidth:W,setPolygonOffset:j,setScissorTest:H,activeTexture:v,bindTexture:b,unbindTexture:C,compressedTexImage2D:P,compressedTexImage3D:I,texImage2D:X,texImage3D:pe,updateUBOMapping:Be,uniformBlockBinding:Re,texStorage2D:de,texStorage3D:ie,texSubImage2D:k,texSubImage3D:F,compressedTexSubImage2D:N,compressedTexSubImage3D:K,scissor:be,viewport:ge,reset:Qe}}function Qh(i,e,t,n){const s=rb(n);switch(t){case Yu:return i*e;case Ku:return i*e;case Ju:return i*e*2;case Ki:return i*e/s.components*s.byteLength;case pl:return i*e/s.components*s.byteLength;case fs:return i*e*2/s.components*s.byteLength;case ml:return i*e*2/s.components*s.byteLength;case Xu:return i*e*3/s.components*s.byteLength;case sn:return i*e*4/s.components*s.byteLength;case gl:return i*e*4/s.components*s.byteLength;case Fr:case Da:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Nr:case La:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ic:case Tc:return Math.max(i,16)*Math.max(e,8)/4;case Hr:case Vr:return Math.max(i,8)*Math.max(e,8)/2;case Wr:case jr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case qr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case za:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Bc:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Rc:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Dc:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Ha:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Lc:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Pc:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Uc:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Fc:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Nc:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case kc:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Qc:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Oc:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Gc:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Pa:case zc:case Yr:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Zu:case Hc:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Vc:case Wc:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function rb(i){switch(i){case nn:case Wu:return{byteLength:1,components:1};case Ga:case ju:case dn:return{byteLength:2,components:1};case fl:case Al:return{byteLength:2,components:4};case gs:case dl:case bn:return{byteLength:4,components:1};case qu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function ob(i,e,t,n,s,a,r){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new He,h=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(v,b){return f?new OffscreenCanvas(v,b):ja("canvas")}function x(v,b,C){let P=1;const I=H(v);if((I.width>C||I.height>C)&&(P=C/Math.max(I.width,I.height)),P<1)if(typeof HTMLImageElement<"u"&&v instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&v instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&v instanceof ImageBitmap||typeof VideoFrame<"u"&&v instanceof VideoFrame){const k=Math.floor(P*I.width),F=Math.floor(P*I.height);u===void 0&&(u=m(k,F));const N=b?m(k,F):u;return N.width=k,N.height=F,N.getContext("2d").drawImage(v,0,0,k,F),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+I.width+"x"+I.height+") to ("+k+"x"+F+")."),N}else return"data"in v&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+I.width+"x"+I.height+")."),v;return v}function p(v){return v.generateMipmaps}function A(v){i.generateMipmap(v)}function E(v){return v.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:v.isWebGL3DRenderTarget?i.TEXTURE_3D:v.isWebGLArrayRenderTarget||v.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function _(v,b,C,P,I=!1){if(v!==null){if(i[v]!==void 0)return i[v];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+v+"'")}let k=b;if(b===i.RED&&(C===i.FLOAT&&(k=i.R32F),C===i.HALF_FLOAT&&(k=i.R16F),C===i.UNSIGNED_BYTE&&(k=i.R8)),b===i.RED_INTEGER&&(C===i.UNSIGNED_BYTE&&(k=i.R8UI),C===i.UNSIGNED_SHORT&&(k=i.R16UI),C===i.UNSIGNED_INT&&(k=i.R32UI),C===i.BYTE&&(k=i.R8I),C===i.SHORT&&(k=i.R16I),C===i.INT&&(k=i.R32I)),b===i.RG&&(C===i.FLOAT&&(k=i.RG32F),C===i.HALF_FLOAT&&(k=i.RG16F),C===i.UNSIGNED_BYTE&&(k=i.RG8)),b===i.RG_INTEGER&&(C===i.UNSIGNED_BYTE&&(k=i.RG8UI),C===i.UNSIGNED_SHORT&&(k=i.RG16UI),C===i.UNSIGNED_INT&&(k=i.RG32UI),C===i.BYTE&&(k=i.RG8I),C===i.SHORT&&(k=i.RG16I),C===i.INT&&(k=i.RG32I)),b===i.RGB_INTEGER&&(C===i.UNSIGNED_BYTE&&(k=i.RGB8UI),C===i.UNSIGNED_SHORT&&(k=i.RGB16UI),C===i.UNSIGNED_INT&&(k=i.RGB32UI),C===i.BYTE&&(k=i.RGB8I),C===i.SHORT&&(k=i.RGB16I),C===i.INT&&(k=i.RGB32I)),b===i.RGBA_INTEGER&&(C===i.UNSIGNED_BYTE&&(k=i.RGBA8UI),C===i.UNSIGNED_SHORT&&(k=i.RGBA16UI),C===i.UNSIGNED_INT&&(k=i.RGBA32UI),C===i.BYTE&&(k=i.RGBA8I),C===i.SHORT&&(k=i.RGBA16I),C===i.INT&&(k=i.RGBA32I)),b===i.RGB&&C===i.UNSIGNED_INT_5_9_9_9_REV&&(k=i.RGB9_E5),b===i.RGBA){const F=I?so:gt.getTransfer(P);C===i.FLOAT&&(k=i.RGBA32F),C===i.HALF_FLOAT&&(k=i.RGBA16F),C===i.UNSIGNED_BYTE&&(k=F===St?i.SRGB8_ALPHA8:i.RGBA8),C===i.UNSIGNED_SHORT_4_4_4_4&&(k=i.RGBA4),C===i.UNSIGNED_SHORT_5_5_5_1&&(k=i.RGB5_A1)}return(k===i.R16F||k===i.R32F||k===i.RG16F||k===i.RG32F||k===i.RGBA16F||k===i.RGBA32F)&&e.get("EXT_color_buffer_float"),k}function g(v,b){let C;return v?b===null||b===gs||b===bs?C=i.DEPTH24_STENCIL8:b===bn?C=i.DEPTH32F_STENCIL8:b===Ga&&(C=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===gs||b===bs?C=i.DEPTH_COMPONENT24:b===bn?C=i.DEPTH_COMPONENT32F:b===Ga&&(C=i.DEPTH_COMPONENT16),C}function B(v,b){return p(v)===!0||v.isFramebufferTexture&&v.minFilter!==An&&v.minFilter!==Cn?Math.log2(Math.max(b.width,b.height))+1:v.mipmaps!==void 0&&v.mipmaps.length>0?v.mipmaps.length:v.isCompressedTexture&&Array.isArray(v.image)?b.mipmaps.length:1}function S(v){const b=v.target;b.removeEventListener("dispose",S),U(b),b.isVideoTexture&&h.delete(b)}function T(v){const b=v.target;b.removeEventListener("dispose",T),y(b)}function U(v){const b=n.get(v);if(b.__webglInit===void 0)return;const C=v.source,P=d.get(C);if(P){const I=P[b.__cacheKey];I.usedTimes--,I.usedTimes===0&&M(v),Object.keys(P).length===0&&d.delete(C)}n.remove(v)}function M(v){const b=n.get(v);i.deleteTexture(b.__webglTexture);const C=v.source,P=d.get(C);delete P[b.__cacheKey],r.memory.textures--}function y(v){const b=n.get(v);if(v.depthTexture&&(v.depthTexture.dispose(),n.remove(v.depthTexture)),v.isWebGLCubeRenderTarget)for(let P=0;P<6;P++){if(Array.isArray(b.__webglFramebuffer[P]))for(let I=0;I<b.__webglFramebuffer[P].length;I++)i.deleteFramebuffer(b.__webglFramebuffer[P][I]);else i.deleteFramebuffer(b.__webglFramebuffer[P]);b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer[P])}else{if(Array.isArray(b.__webglFramebuffer))for(let P=0;P<b.__webglFramebuffer.length;P++)i.deleteFramebuffer(b.__webglFramebuffer[P]);else i.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&i.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let P=0;P<b.__webglColorRenderbuffer.length;P++)b.__webglColorRenderbuffer[P]&&i.deleteRenderbuffer(b.__webglColorRenderbuffer[P]);b.__webglDepthRenderbuffer&&i.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const C=v.textures;for(let P=0,I=C.length;P<I;P++){const k=n.get(C[P]);k.__webglTexture&&(i.deleteTexture(k.__webglTexture),r.memory.textures--),n.remove(C[P])}n.remove(v)}let L=0;function V(){L=0}function te(){const v=L;return v>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+v+" texture units while this GPU supports only "+s.maxTextures),L+=1,v}function Ae(v){const b=[];return b.push(v.wrapS),b.push(v.wrapT),b.push(v.wrapR||0),b.push(v.magFilter),b.push(v.minFilter),b.push(v.anisotropy),b.push(v.internalFormat),b.push(v.format),b.push(v.type),b.push(v.generateMipmaps),b.push(v.premultiplyAlpha),b.push(v.flipY),b.push(v.unpackAlignment),b.push(v.colorSpace),b.join()}function ae(v,b){const C=n.get(v);if(v.isVideoTexture&&W(v),v.isRenderTargetTexture===!1&&v.version>0&&C.__version!==v.version){const P=v.image;if(P===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(P.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ne(C,v,b);return}}t.bindTexture(i.TEXTURE_2D,C.__webglTexture,i.TEXTURE0+b)}function ce(v,b){const C=n.get(v);if(v.version>0&&C.__version!==v.version){ne(C,v,b);return}t.bindTexture(i.TEXTURE_2D_ARRAY,C.__webglTexture,i.TEXTURE0+b)}function se(v,b){const C=n.get(v);if(v.version>0&&C.__version!==v.version){ne(C,v,b);return}t.bindTexture(i.TEXTURE_3D,C.__webglTexture,i.TEXTURE0+b)}function J(v,b){const C=n.get(v);if(v.version>0&&C.__version!==v.version){Ee(C,v,b);return}t.bindTexture(i.TEXTURE_CUBE_MAP,C.__webglTexture,i.TEXTURE0+b)}const fe={[Gn]:i.REPEAT,[Ri]:i.CLAMP_TO_EDGE,[zr]:i.MIRRORED_REPEAT},$={[An]:i.NEAREST,[Vu]:i.NEAREST_MIPMAP_NEAREST,[Ia]:i.NEAREST_MIPMAP_LINEAR,[Cn]:i.LINEAR,[Ur]:i.LINEAR_MIPMAP_NEAREST,[pi]:i.LINEAR_MIPMAP_LINEAR},me={[Qf]:i.NEVER,[Wf]:i.ALWAYS,[Of]:i.LESS,[ed]:i.LEQUAL,[Gf]:i.EQUAL,[Vf]:i.GEQUAL,[zf]:i.GREATER,[Hf]:i.NOTEQUAL};function Ce(v,b){if(b.type===bn&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===Cn||b.magFilter===Ur||b.magFilter===Ia||b.magFilter===pi||b.minFilter===Cn||b.minFilter===Ur||b.minFilter===Ia||b.minFilter===pi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(v,i.TEXTURE_WRAP_S,fe[b.wrapS]),i.texParameteri(v,i.TEXTURE_WRAP_T,fe[b.wrapT]),(v===i.TEXTURE_3D||v===i.TEXTURE_2D_ARRAY)&&i.texParameteri(v,i.TEXTURE_WRAP_R,fe[b.wrapR]),i.texParameteri(v,i.TEXTURE_MAG_FILTER,$[b.magFilter]),i.texParameteri(v,i.TEXTURE_MIN_FILTER,$[b.minFilter]),b.compareFunction&&(i.texParameteri(v,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(v,i.TEXTURE_COMPARE_FUNC,me[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===An||b.minFilter!==Ia&&b.minFilter!==pi||b.type===bn&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){const C=e.get("EXT_texture_filter_anisotropic");i.texParameterf(v,C.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,s.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function Me(v,b){let C=!1;v.__webglInit===void 0&&(v.__webglInit=!0,b.addEventListener("dispose",S));const P=b.source;let I=d.get(P);I===void 0&&(I={},d.set(P,I));const k=Ae(b);if(k!==v.__cacheKey){I[k]===void 0&&(I[k]={texture:i.createTexture(),usedTimes:0},r.memory.textures++,C=!0),I[k].usedTimes++;const F=I[v.__cacheKey];F!==void 0&&(I[v.__cacheKey].usedTimes--,F.usedTimes===0&&M(b)),v.__cacheKey=k,v.__webglTexture=I[k].texture}return C}function ne(v,b,C){let P=i.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(P=i.TEXTURE_2D_ARRAY),b.isData3DTexture&&(P=i.TEXTURE_3D);const I=Me(v,b),k=b.source;t.bindTexture(P,v.__webglTexture,i.TEXTURE0+C);const F=n.get(k);if(k.version!==F.__version||I===!0){t.activeTexture(i.TEXTURE0+C);const N=gt.getPrimaries(gt.workingColorSpace),K=b.colorSpace===fi?null:gt.getPrimaries(b.colorSpace),de=b.colorSpace===fi||N===K?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,de);let ie=x(b.image,!1,s.maxTextureSize);ie=j(b,ie);const X=a.convert(b.format,b.colorSpace),pe=a.convert(b.type);let be=_(b.internalFormat,X,pe,b.colorSpace,b.isVideoTexture);Ce(P,b);let ge;const Be=b.mipmaps,Re=b.isVideoTexture!==!0,Qe=F.__version===void 0||I===!0,q=k.dataReady,Ie=B(b,ie);if(b.isDepthTexture)be=g(b.format===xs,b.type),Qe&&(Re?t.texStorage2D(i.TEXTURE_2D,1,be,ie.width,ie.height):t.texImage2D(i.TEXTURE_2D,0,be,ie.width,ie.height,0,X,pe,null));else if(b.isDataTexture)if(Be.length>0){Re&&Qe&&t.texStorage2D(i.TEXTURE_2D,Ie,be,Be[0].width,Be[0].height);for(let le=0,we=Be.length;le<we;le++)ge=Be[le],Re?q&&t.texSubImage2D(i.TEXTURE_2D,le,0,0,ge.width,ge.height,X,pe,ge.data):t.texImage2D(i.TEXTURE_2D,le,be,ge.width,ge.height,0,X,pe,ge.data);b.generateMipmaps=!1}else Re?(Qe&&t.texStorage2D(i.TEXTURE_2D,Ie,be,ie.width,ie.height),q&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ie.width,ie.height,X,pe,ie.data)):t.texImage2D(i.TEXTURE_2D,0,be,ie.width,ie.height,0,X,pe,ie.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){Re&&Qe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ie,be,Be[0].width,Be[0].height,ie.depth);for(let le=0,we=Be.length;le<we;le++)if(ge=Be[le],b.format!==sn)if(X!==null)if(Re){if(q)if(b.layerUpdates.size>0){const ue=Qh(ge.width,ge.height,b.format,b.type);for(const z of b.layerUpdates){const oe=ge.data.subarray(z*ue/ge.data.BYTES_PER_ELEMENT,(z+1)*ue/ge.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,le,0,0,z,ge.width,ge.height,1,X,oe)}b.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,le,0,0,0,ge.width,ge.height,ie.depth,X,ge.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,le,be,ge.width,ge.height,ie.depth,0,ge.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Re?q&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,le,0,0,0,ge.width,ge.height,ie.depth,X,pe,ge.data):t.texImage3D(i.TEXTURE_2D_ARRAY,le,be,ge.width,ge.height,ie.depth,0,X,pe,ge.data)}else{Re&&Qe&&t.texStorage2D(i.TEXTURE_2D,Ie,be,Be[0].width,Be[0].height);for(let le=0,we=Be.length;le<we;le++)ge=Be[le],b.format!==sn?X!==null?Re?q&&t.compressedTexSubImage2D(i.TEXTURE_2D,le,0,0,ge.width,ge.height,X,ge.data):t.compressedTexImage2D(i.TEXTURE_2D,le,be,ge.width,ge.height,0,ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Re?q&&t.texSubImage2D(i.TEXTURE_2D,le,0,0,ge.width,ge.height,X,pe,ge.data):t.texImage2D(i.TEXTURE_2D,le,be,ge.width,ge.height,0,X,pe,ge.data)}else if(b.isDataArrayTexture)if(Re){if(Qe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ie,be,ie.width,ie.height,ie.depth),q)if(b.layerUpdates.size>0){const le=Qh(ie.width,ie.height,b.format,b.type);for(const we of b.layerUpdates){const ue=ie.data.subarray(we*le/ie.data.BYTES_PER_ELEMENT,(we+1)*le/ie.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,we,ie.width,ie.height,1,X,pe,ue)}b.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ie.width,ie.height,ie.depth,X,pe,ie.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,be,ie.width,ie.height,ie.depth,0,X,pe,ie.data);else if(b.isData3DTexture)Re?(Qe&&t.texStorage3D(i.TEXTURE_3D,Ie,be,ie.width,ie.height,ie.depth),q&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ie.width,ie.height,ie.depth,X,pe,ie.data)):t.texImage3D(i.TEXTURE_3D,0,be,ie.width,ie.height,ie.depth,0,X,pe,ie.data);else if(b.isFramebufferTexture){if(Qe)if(Re)t.texStorage2D(i.TEXTURE_2D,Ie,be,ie.width,ie.height);else{let le=ie.width,we=ie.height;for(let ue=0;ue<Ie;ue++)t.texImage2D(i.TEXTURE_2D,ue,be,le,we,0,X,pe,null),le>>=1,we>>=1}}else if(Be.length>0){if(Re&&Qe){const le=H(Be[0]);t.texStorage2D(i.TEXTURE_2D,Ie,be,le.width,le.height)}for(let le=0,we=Be.length;le<we;le++)ge=Be[le],Re?q&&t.texSubImage2D(i.TEXTURE_2D,le,0,0,X,pe,ge):t.texImage2D(i.TEXTURE_2D,le,be,X,pe,ge);b.generateMipmaps=!1}else if(Re){if(Qe){const le=H(ie);t.texStorage2D(i.TEXTURE_2D,Ie,be,le.width,le.height)}q&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,X,pe,ie)}else t.texImage2D(i.TEXTURE_2D,0,be,X,pe,ie);p(b)&&A(P),F.__version=k.version,b.onUpdate&&b.onUpdate(b)}v.__version=b.version}function Ee(v,b,C){if(b.image.length!==6)return;const P=Me(v,b),I=b.source;t.bindTexture(i.TEXTURE_CUBE_MAP,v.__webglTexture,i.TEXTURE0+C);const k=n.get(I);if(I.version!==k.__version||P===!0){t.activeTexture(i.TEXTURE0+C);const F=gt.getPrimaries(gt.workingColorSpace),N=b.colorSpace===fi?null:gt.getPrimaries(b.colorSpace),K=b.colorSpace===fi||F===N?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,K);const de=b.isCompressedTexture||b.image[0].isCompressedTexture,ie=b.image[0]&&b.image[0].isDataTexture,X=[];for(let we=0;we<6;we++)!de&&!ie?X[we]=x(b.image[we],!0,s.maxCubemapSize):X[we]=ie?b.image[we].image:b.image[we],X[we]=j(b,X[we]);const pe=X[0],be=a.convert(b.format,b.colorSpace),ge=a.convert(b.type),Be=_(b.internalFormat,be,ge,b.colorSpace),Re=b.isVideoTexture!==!0,Qe=k.__version===void 0||P===!0,q=I.dataReady;let Ie=B(b,pe);Ce(i.TEXTURE_CUBE_MAP,b);let le;if(de){Re&&Qe&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Ie,Be,pe.width,pe.height);for(let we=0;we<6;we++){le=X[we].mipmaps;for(let ue=0;ue<le.length;ue++){const z=le[ue];b.format!==sn?be!==null?Re?q&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+we,ue,0,0,z.width,z.height,be,z.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+we,ue,Be,z.width,z.height,0,z.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Re?q&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+we,ue,0,0,z.width,z.height,be,ge,z.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+we,ue,Be,z.width,z.height,0,be,ge,z.data)}}}else{if(le=b.mipmaps,Re&&Qe){le.length>0&&Ie++;const we=H(X[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Ie,Be,we.width,we.height)}for(let we=0;we<6;we++)if(ie){Re?q&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+we,0,0,0,X[we].width,X[we].height,be,ge,X[we].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+we,0,Be,X[we].width,X[we].height,0,be,ge,X[we].data);for(let ue=0;ue<le.length;ue++){const oe=le[ue].image[we].image;Re?q&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+we,ue+1,0,0,oe.width,oe.height,be,ge,oe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+we,ue+1,Be,oe.width,oe.height,0,be,ge,oe.data)}}else{Re?q&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+we,0,0,0,be,ge,X[we]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+we,0,Be,be,ge,X[we]);for(let ue=0;ue<le.length;ue++){const z=le[ue];Re?q&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+we,ue+1,0,0,be,ge,z.image[we]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+we,ue+1,Be,be,ge,z.image[we])}}}p(b)&&A(i.TEXTURE_CUBE_MAP),k.__version=I.version,b.onUpdate&&b.onUpdate(b)}v.__version=b.version}function Te(v,b,C,P,I,k){const F=a.convert(C.format,C.colorSpace),N=a.convert(C.type),K=_(C.internalFormat,F,N,C.colorSpace),de=n.get(b),ie=n.get(C);if(ie.__renderTarget=b,!de.__hasExternalTextures){const X=Math.max(1,b.width>>k),pe=Math.max(1,b.height>>k);I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY?t.texImage3D(I,k,K,X,pe,b.depth,0,F,N,null):t.texImage2D(I,k,K,X,pe,0,F,N,null)}t.bindFramebuffer(i.FRAMEBUFFER,v),O(b)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,P,I,ie.__webglTexture,0,Y(b)):(I===i.TEXTURE_2D||I>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&I<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,P,I,ie.__webglTexture,k),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Se(v,b,C){if(i.bindRenderbuffer(i.RENDERBUFFER,v),b.depthBuffer){const P=b.depthTexture,I=P&&P.isDepthTexture?P.type:null,k=g(b.stencilBuffer,I),F=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,N=Y(b);O(b)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,N,k,b.width,b.height):C?i.renderbufferStorageMultisample(i.RENDERBUFFER,N,k,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,k,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,F,i.RENDERBUFFER,v)}else{const P=b.textures;for(let I=0;I<P.length;I++){const k=P[I],F=a.convert(k.format,k.colorSpace),N=a.convert(k.type),K=_(k.internalFormat,F,N,k.colorSpace),de=Y(b);C&&O(b)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,de,K,b.width,b.height):O(b)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,de,K,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,K,b.width,b.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Le(v,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,v),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const P=n.get(b.depthTexture);P.__renderTarget=b,(!P.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),ae(b.depthTexture,0);const I=P.__webglTexture,k=Y(b);if(b.depthTexture.format===Ks)O(b)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,I,0,k):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,I,0);else if(b.depthTexture.format===xs)O(b)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,I,0,k):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,I,0);else throw new Error("Unknown depthTexture format")}function Fe(v){const b=n.get(v),C=v.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==v.depthTexture){const P=v.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),P){const I=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,P.removeEventListener("dispose",I)};P.addEventListener("dispose",I),b.__depthDisposeCallback=I}b.__boundDepthTexture=P}if(v.depthTexture&&!b.__autoAllocateDepthBuffer){if(C)throw new Error("target.depthTexture not supported in Cube render targets");Le(b.__webglFramebuffer,v)}else if(C){b.__webglDepthbuffer=[];for(let P=0;P<6;P++)if(t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[P]),b.__webglDepthbuffer[P]===void 0)b.__webglDepthbuffer[P]=i.createRenderbuffer(),Se(b.__webglDepthbuffer[P],v,!1);else{const I=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,k=b.__webglDepthbuffer[P];i.bindRenderbuffer(i.RENDERBUFFER,k),i.framebufferRenderbuffer(i.FRAMEBUFFER,I,i.RENDERBUFFER,k)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=i.createRenderbuffer(),Se(b.__webglDepthbuffer,v,!1);else{const P=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,I=b.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,I),i.framebufferRenderbuffer(i.FRAMEBUFFER,P,i.RENDERBUFFER,I)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ge(v,b,C){const P=n.get(v);b!==void 0&&Te(P.__webglFramebuffer,v,v.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),C!==void 0&&Fe(v)}function je(v){const b=v.texture,C=n.get(v),P=n.get(b);v.addEventListener("dispose",T);const I=v.textures,k=v.isWebGLCubeRenderTarget===!0,F=I.length>1;if(F||(P.__webglTexture===void 0&&(P.__webglTexture=i.createTexture()),P.__version=b.version,r.memory.textures++),k){C.__webglFramebuffer=[];for(let N=0;N<6;N++)if(b.mipmaps&&b.mipmaps.length>0){C.__webglFramebuffer[N]=[];for(let K=0;K<b.mipmaps.length;K++)C.__webglFramebuffer[N][K]=i.createFramebuffer()}else C.__webglFramebuffer[N]=i.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){C.__webglFramebuffer=[];for(let N=0;N<b.mipmaps.length;N++)C.__webglFramebuffer[N]=i.createFramebuffer()}else C.__webglFramebuffer=i.createFramebuffer();if(F)for(let N=0,K=I.length;N<K;N++){const de=n.get(I[N]);de.__webglTexture===void 0&&(de.__webglTexture=i.createTexture(),r.memory.textures++)}if(v.samples>0&&O(v)===!1){C.__webglMultisampledFramebuffer=i.createFramebuffer(),C.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,C.__webglMultisampledFramebuffer);for(let N=0;N<I.length;N++){const K=I[N];C.__webglColorRenderbuffer[N]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,C.__webglColorRenderbuffer[N]);const de=a.convert(K.format,K.colorSpace),ie=a.convert(K.type),X=_(K.internalFormat,de,ie,K.colorSpace,v.isXRRenderTarget===!0),pe=Y(v);i.renderbufferStorageMultisample(i.RENDERBUFFER,pe,X,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+N,i.RENDERBUFFER,C.__webglColorRenderbuffer[N])}i.bindRenderbuffer(i.RENDERBUFFER,null),v.depthBuffer&&(C.__webglDepthRenderbuffer=i.createRenderbuffer(),Se(C.__webglDepthRenderbuffer,v,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(k){t.bindTexture(i.TEXTURE_CUBE_MAP,P.__webglTexture),Ce(i.TEXTURE_CUBE_MAP,b);for(let N=0;N<6;N++)if(b.mipmaps&&b.mipmaps.length>0)for(let K=0;K<b.mipmaps.length;K++)Te(C.__webglFramebuffer[N][K],v,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+N,K);else Te(C.__webglFramebuffer[N],v,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+N,0);p(b)&&A(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(F){for(let N=0,K=I.length;N<K;N++){const de=I[N],ie=n.get(de);t.bindTexture(i.TEXTURE_2D,ie.__webglTexture),Ce(i.TEXTURE_2D,de),Te(C.__webglFramebuffer,v,de,i.COLOR_ATTACHMENT0+N,i.TEXTURE_2D,0),p(de)&&A(i.TEXTURE_2D)}t.unbindTexture()}else{let N=i.TEXTURE_2D;if((v.isWebGL3DRenderTarget||v.isWebGLArrayRenderTarget)&&(N=v.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(N,P.__webglTexture),Ce(N,b),b.mipmaps&&b.mipmaps.length>0)for(let K=0;K<b.mipmaps.length;K++)Te(C.__webglFramebuffer[K],v,b,i.COLOR_ATTACHMENT0,N,K);else Te(C.__webglFramebuffer,v,b,i.COLOR_ATTACHMENT0,N,0);p(b)&&A(N),t.unbindTexture()}v.depthBuffer&&Fe(v)}function w(v){const b=v.textures;for(let C=0,P=b.length;C<P;C++){const I=b[C];if(p(I)){const k=E(v),F=n.get(I).__webglTexture;t.bindTexture(k,F),A(k),t.unbindTexture()}}}const Q=[],R=[];function ee(v){if(v.samples>0){if(O(v)===!1){const b=v.textures,C=v.width,P=v.height;let I=i.COLOR_BUFFER_BIT;const k=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,F=n.get(v),N=b.length>1;if(N)for(let K=0;K<b.length;K++)t.bindFramebuffer(i.FRAMEBUFFER,F.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+K,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,F.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+K,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,F.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,F.__webglFramebuffer);for(let K=0;K<b.length;K++){if(v.resolveDepthBuffer&&(v.depthBuffer&&(I|=i.DEPTH_BUFFER_BIT),v.stencilBuffer&&v.resolveStencilBuffer&&(I|=i.STENCIL_BUFFER_BIT)),N){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,F.__webglColorRenderbuffer[K]);const de=n.get(b[K]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,de,0)}i.blitFramebuffer(0,0,C,P,0,0,C,P,I,i.NEAREST),c===!0&&(Q.length=0,R.length=0,Q.push(i.COLOR_ATTACHMENT0+K),v.depthBuffer&&v.resolveDepthBuffer===!1&&(Q.push(k),R.push(k),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,R)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Q))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),N)for(let K=0;K<b.length;K++){t.bindFramebuffer(i.FRAMEBUFFER,F.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+K,i.RENDERBUFFER,F.__webglColorRenderbuffer[K]);const de=n.get(b[K]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,F.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+K,i.TEXTURE_2D,de,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,F.__webglMultisampledFramebuffer)}else if(v.depthBuffer&&v.resolveDepthBuffer===!1&&c){const b=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[b])}}}function Y(v){return Math.min(s.maxSamples,v.samples)}function O(v){const b=n.get(v);return v.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function W(v){const b=r.render.frame;h.get(v)!==b&&(h.set(v,b),v.update())}function j(v,b){const C=v.colorSpace,P=v.format,I=v.type;return v.isCompressedTexture===!0||v.isVideoTexture===!0||C!==xn&&C!==fi&&(gt.getTransfer(C)===St?(P!==sn||I!==nn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",C)),b}function H(v){return typeof HTMLImageElement<"u"&&v instanceof HTMLImageElement?(l.width=v.naturalWidth||v.width,l.height=v.naturalHeight||v.height):typeof VideoFrame<"u"&&v instanceof VideoFrame?(l.width=v.displayWidth,l.height=v.displayHeight):(l.width=v.width,l.height=v.height),l}this.allocateTextureUnit=te,this.resetTextureUnits=V,this.setTexture2D=ae,this.setTexture2DArray=ce,this.setTexture3D=se,this.setTextureCube=J,this.rebindTextures=Ge,this.setupRenderTarget=je,this.updateRenderTargetMipmap=w,this.updateMultisampleRenderTarget=ee,this.setupDepthRenderbuffer=Fe,this.setupFrameBufferTexture=Te,this.useMultisampledRTT=O}function cb(i,e){function t(n,s=fi){let a;const r=gt.getTransfer(s);if(n===nn)return i.UNSIGNED_BYTE;if(n===fl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Al)return i.UNSIGNED_SHORT_5_5_5_1;if(n===qu)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Wu)return i.BYTE;if(n===ju)return i.SHORT;if(n===Ga)return i.UNSIGNED_SHORT;if(n===dl)return i.INT;if(n===gs)return i.UNSIGNED_INT;if(n===bn)return i.FLOAT;if(n===dn)return i.HALF_FLOAT;if(n===Yu)return i.ALPHA;if(n===Xu)return i.RGB;if(n===sn)return i.RGBA;if(n===Ku)return i.LUMINANCE;if(n===Ju)return i.LUMINANCE_ALPHA;if(n===Ks)return i.DEPTH_COMPONENT;if(n===xs)return i.DEPTH_STENCIL;if(n===Ki)return i.RED;if(n===pl)return i.RED_INTEGER;if(n===fs)return i.RG;if(n===ml)return i.RG_INTEGER;if(n===gl)return i.RGBA_INTEGER;if(n===Fr||n===Da||n===Nr||n===La)if(r===St)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(n===Fr)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Da)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Nr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===La)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(n===Fr)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Da)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Nr)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===La)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Hr||n===Ic||n===Vr||n===Tc)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(n===Hr)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ic)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Vr)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Tc)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Wr||n===jr||n===qr)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(n===Wr||n===jr)return r===St?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(n===qr)return r===St?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===za||n===Bc||n===Rc||n===Dc||n===Ha||n===Lc||n===Pc||n===Uc||n===Fc||n===Nc||n===kc||n===Qc||n===Oc||n===Gc)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(n===za)return r===St?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Bc)return r===St?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Rc)return r===St?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Dc)return r===St?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ha)return r===St?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Lc)return r===St?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Pc)return r===St?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Uc)return r===St?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Fc)return r===St?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Nc)return r===St?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===kc)return r===St?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Qc)return r===St?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Oc)return r===St?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Gc)return r===St?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Pa||n===zc||n===Yr)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(n===Pa)return r===St?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===zc)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Yr)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Zu||n===Hc||n===Vc||n===Wc)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(n===Pa)return a.COMPRESSED_RED_RGTC1_EXT;if(n===Hc)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Vc)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Wc)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===bs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}class lb extends yn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Bn extends Ot{constructor(){super(),this.isGroup=!0,this.type="Group"}}const hb={type:"move"};class zo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Bn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Bn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new G,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new G),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Bn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new G,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new G),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,a=null,r=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){r=!0;for(const x of e.hand.values()){const p=t.getJointPose(x,n),A=this._getHandJoint(l,x);p!==null&&(A.matrix.fromArray(p.transform.matrix),A.matrix.decompose(A.position,A.rotation,A.scale),A.matrixWorldNeedsUpdate=!0,A.jointRadius=p.radius),A.visible=p!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,m=.005;l.inputState.pinching&&d>f+m?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=f-m&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,n),a!==null&&(c.matrix.fromArray(a.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,a.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(a.linearVelocity)):c.hasLinearVelocity=!1,a.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(a.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&a!==null&&(s=a),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(hb)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=a!==null),l!==null&&(l.visible=r!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Bn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const ub=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,db=`
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

}`;class fb{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const s=new Xt,a=e.properties.get(s);a.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Zt({vertexShader:ub,fragmentShader:db,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new lt(new aa(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Ab extends vs{constructor(e,t){super();const n=this;let s=null,a=1,r=null,o="local-floor",c=1,l=null,h=null,u=null,d=null,f=null,m=null;const x=new fb,p=t.getContextAttributes();let A=null,E=null;const _=[],g=[],B=new He;let S=null;const T=new yn;T.viewport=new vt;const U=new yn;U.viewport=new vt;const M=[T,U],y=new lb;let L=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ne){let Ee=_[ne];return Ee===void 0&&(Ee=new zo,_[ne]=Ee),Ee.getTargetRaySpace()},this.getControllerGrip=function(ne){let Ee=_[ne];return Ee===void 0&&(Ee=new zo,_[ne]=Ee),Ee.getGripSpace()},this.getHand=function(ne){let Ee=_[ne];return Ee===void 0&&(Ee=new zo,_[ne]=Ee),Ee.getHandSpace()};function te(ne){const Ee=g.indexOf(ne.inputSource);if(Ee===-1)return;const Te=_[Ee];Te!==void 0&&(Te.update(ne.inputSource,ne.frame,l||r),Te.dispatchEvent({type:ne.type,data:ne.inputSource}))}function Ae(){s.removeEventListener("select",te),s.removeEventListener("selectstart",te),s.removeEventListener("selectend",te),s.removeEventListener("squeeze",te),s.removeEventListener("squeezestart",te),s.removeEventListener("squeezeend",te),s.removeEventListener("end",Ae),s.removeEventListener("inputsourceschange",ae);for(let ne=0;ne<_.length;ne++){const Ee=g[ne];Ee!==null&&(g[ne]=null,_[ne].disconnect(Ee))}L=null,V=null,x.reset(),e.setRenderTarget(A),f=null,d=null,u=null,s=null,E=null,Me.stop(),n.isPresenting=!1,e.setPixelRatio(S),e.setSize(B.width,B.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ne){a=ne,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ne){o=ne,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||r},this.setReferenceSpace=function(ne){l=ne},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(ne){if(s=ne,s!==null){if(A=e.getRenderTarget(),s.addEventListener("select",te),s.addEventListener("selectstart",te),s.addEventListener("selectend",te),s.addEventListener("squeeze",te),s.addEventListener("squeezestart",te),s.addEventListener("squeezeend",te),s.addEventListener("end",Ae),s.addEventListener("inputsourceschange",ae),p.xrCompatible!==!0&&await t.makeXRCompatible(),S=e.getPixelRatio(),e.getSize(B),s.renderState.layers===void 0){const Ee={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:a};f=new XRWebGLLayer(s,t,Ee),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),E=new On(f.framebufferWidth,f.framebufferHeight,{format:sn,type:nn,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let Ee=null,Te=null,Se=null;p.depth&&(Se=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Ee=p.stencil?xs:Ks,Te=p.stencil?bs:gs);const Le={colorFormat:t.RGBA8,depthFormat:Se,scaleFactor:a};u=new XRWebGLBinding(s,t),d=u.createProjectionLayer(Le),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),E=new On(d.textureWidth,d.textureHeight,{format:sn,type:nn,depthTexture:new Ml(d.textureWidth,d.textureHeight,Te,void 0,void 0,void 0,void 0,void 0,void 0,Ee),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(c),l=null,r=await s.requestReferenceSpace(o),Me.setContext(s),Me.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function ae(ne){for(let Ee=0;Ee<ne.removed.length;Ee++){const Te=ne.removed[Ee],Se=g.indexOf(Te);Se>=0&&(g[Se]=null,_[Se].disconnect(Te))}for(let Ee=0;Ee<ne.added.length;Ee++){const Te=ne.added[Ee];let Se=g.indexOf(Te);if(Se===-1){for(let Fe=0;Fe<_.length;Fe++)if(Fe>=g.length){g.push(Te),Se=Fe;break}else if(g[Fe]===null){g[Fe]=Te,Se=Fe;break}if(Se===-1)break}const Le=_[Se];Le&&Le.connect(Te)}}const ce=new G,se=new G;function J(ne,Ee,Te){ce.setFromMatrixPosition(Ee.matrixWorld),se.setFromMatrixPosition(Te.matrixWorld);const Se=ce.distanceTo(se),Le=Ee.projectionMatrix.elements,Fe=Te.projectionMatrix.elements,Ge=Le[14]/(Le[10]-1),je=Le[14]/(Le[10]+1),w=(Le[9]+1)/Le[5],Q=(Le[9]-1)/Le[5],R=(Le[8]-1)/Le[0],ee=(Fe[8]+1)/Fe[0],Y=Ge*R,O=Ge*ee,W=Se/(-R+ee),j=W*-R;if(Ee.matrixWorld.decompose(ne.position,ne.quaternion,ne.scale),ne.translateX(j),ne.translateZ(W),ne.matrixWorld.compose(ne.position,ne.quaternion,ne.scale),ne.matrixWorldInverse.copy(ne.matrixWorld).invert(),Le[10]===-1)ne.projectionMatrix.copy(Ee.projectionMatrix),ne.projectionMatrixInverse.copy(Ee.projectionMatrixInverse);else{const H=Ge+W,v=je+W,b=Y-j,C=O+(Se-j),P=w*je/v*H,I=Q*je/v*H;ne.projectionMatrix.makePerspective(b,C,P,I,H,v),ne.projectionMatrixInverse.copy(ne.projectionMatrix).invert()}}function fe(ne,Ee){Ee===null?ne.matrixWorld.copy(ne.matrix):ne.matrixWorld.multiplyMatrices(Ee.matrixWorld,ne.matrix),ne.matrixWorldInverse.copy(ne.matrixWorld).invert()}this.updateCamera=function(ne){if(s===null)return;let Ee=ne.near,Te=ne.far;x.texture!==null&&(x.depthNear>0&&(Ee=x.depthNear),x.depthFar>0&&(Te=x.depthFar)),y.near=U.near=T.near=Ee,y.far=U.far=T.far=Te,(L!==y.near||V!==y.far)&&(s.updateRenderState({depthNear:y.near,depthFar:y.far}),L=y.near,V=y.far),T.layers.mask=ne.layers.mask|2,U.layers.mask=ne.layers.mask|4,y.layers.mask=T.layers.mask|U.layers.mask;const Se=ne.parent,Le=y.cameras;fe(y,Se);for(let Fe=0;Fe<Le.length;Fe++)fe(Le[Fe],Se);Le.length===2?J(y,T,U):y.projectionMatrix.copy(T.projectionMatrix),$(ne,y,Se)};function $(ne,Ee,Te){Te===null?ne.matrix.copy(Ee.matrixWorld):(ne.matrix.copy(Te.matrixWorld),ne.matrix.invert(),ne.matrix.multiply(Ee.matrixWorld)),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale),ne.updateMatrixWorld(!0),ne.projectionMatrix.copy(Ee.projectionMatrix),ne.projectionMatrixInverse.copy(Ee.projectionMatrixInverse),ne.isPerspectiveCamera&&(ne.fov=ia*2*Math.atan(1/ne.projectionMatrix.elements[5]),ne.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(ne){c=ne,d!==null&&(d.fixedFoveation=ne),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=ne)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(y)};let me=null;function Ce(ne,Ee){if(h=Ee.getViewerPose(l||r),m=Ee,h!==null){const Te=h.views;f!==null&&(e.setRenderTargetFramebuffer(E,f.framebuffer),e.setRenderTarget(E));let Se=!1;Te.length!==y.cameras.length&&(y.cameras.length=0,Se=!0);for(let Fe=0;Fe<Te.length;Fe++){const Ge=Te[Fe];let je=null;if(f!==null)je=f.getViewport(Ge);else{const Q=u.getViewSubImage(d,Ge);je=Q.viewport,Fe===0&&(e.setRenderTargetTextures(E,Q.colorTexture,d.ignoreDepthValues?void 0:Q.depthStencilTexture),e.setRenderTarget(E))}let w=M[Fe];w===void 0&&(w=new yn,w.layers.enable(Fe),w.viewport=new vt,M[Fe]=w),w.matrix.fromArray(Ge.transform.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale),w.projectionMatrix.fromArray(Ge.projectionMatrix),w.projectionMatrixInverse.copy(w.projectionMatrix).invert(),w.viewport.set(je.x,je.y,je.width,je.height),Fe===0&&(y.matrix.copy(w.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),Se===!0&&y.cameras.push(w)}const Le=s.enabledFeatures;if(Le&&Le.includes("depth-sensing")){const Fe=u.getDepthInformation(Te[0]);Fe&&Fe.isValid&&Fe.texture&&x.init(e,Fe,s.renderState)}}for(let Te=0;Te<_.length;Te++){const Se=g[Te],Le=_[Te];Se!==null&&Le!==void 0&&Le.update(Se,Ee,l||r)}me&&me(ne,Ee),Ee.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Ee}),m=null}const Me=new hd;Me.setAnimationLoop(Ce),this.setAnimationLoop=function(ne){me=ne},this.dispose=function(){}}}const rs=new Zn,pb=new $e;function mb(i,e){function t(p,A){p.matrixAutoUpdate===!0&&p.updateMatrix(),A.value.copy(p.matrix)}function n(p,A){A.color.getRGB(p.fogColor.value,od(i)),A.isFog?(p.fogNear.value=A.near,p.fogFar.value=A.far):A.isFogExp2&&(p.fogDensity.value=A.density)}function s(p,A,E,_,g){A.isMeshBasicMaterial||A.isMeshLambertMaterial?a(p,A):A.isMeshToonMaterial?(a(p,A),u(p,A)):A.isMeshPhongMaterial?(a(p,A),h(p,A)):A.isMeshStandardMaterial?(a(p,A),d(p,A),A.isMeshPhysicalMaterial&&f(p,A,g)):A.isMeshMatcapMaterial?(a(p,A),m(p,A)):A.isMeshDepthMaterial?a(p,A):A.isMeshDistanceMaterial?(a(p,A),x(p,A)):A.isMeshNormalMaterial?a(p,A):A.isLineBasicMaterial?(r(p,A),A.isLineDashedMaterial&&o(p,A)):A.isPointsMaterial?c(p,A,E,_):A.isSpriteMaterial?l(p,A):A.isShadowMaterial?(p.color.value.copy(A.color),p.opacity.value=A.opacity):A.isShaderMaterial&&(A.uniformsNeedUpdate=!1)}function a(p,A){p.opacity.value=A.opacity,A.color&&p.diffuse.value.copy(A.color),A.emissive&&p.emissive.value.copy(A.emissive).multiplyScalar(A.emissiveIntensity),A.map&&(p.map.value=A.map,t(A.map,p.mapTransform)),A.alphaMap&&(p.alphaMap.value=A.alphaMap,t(A.alphaMap,p.alphaMapTransform)),A.bumpMap&&(p.bumpMap.value=A.bumpMap,t(A.bumpMap,p.bumpMapTransform),p.bumpScale.value=A.bumpScale,A.side===Dn&&(p.bumpScale.value*=-1)),A.normalMap&&(p.normalMap.value=A.normalMap,t(A.normalMap,p.normalMapTransform),p.normalScale.value.copy(A.normalScale),A.side===Dn&&p.normalScale.value.negate()),A.displacementMap&&(p.displacementMap.value=A.displacementMap,t(A.displacementMap,p.displacementMapTransform),p.displacementScale.value=A.displacementScale,p.displacementBias.value=A.displacementBias),A.emissiveMap&&(p.emissiveMap.value=A.emissiveMap,t(A.emissiveMap,p.emissiveMapTransform)),A.specularMap&&(p.specularMap.value=A.specularMap,t(A.specularMap,p.specularMapTransform)),A.alphaTest>0&&(p.alphaTest.value=A.alphaTest);const E=e.get(A),_=E.envMap,g=E.envMapRotation;_&&(p.envMap.value=_,rs.copy(g),rs.x*=-1,rs.y*=-1,rs.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(rs.y*=-1,rs.z*=-1),p.envMapRotation.value.setFromMatrix4(pb.makeRotationFromEuler(rs)),p.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=A.reflectivity,p.ior.value=A.ior,p.refractionRatio.value=A.refractionRatio),A.lightMap&&(p.lightMap.value=A.lightMap,p.lightMapIntensity.value=A.lightMapIntensity,t(A.lightMap,p.lightMapTransform)),A.aoMap&&(p.aoMap.value=A.aoMap,p.aoMapIntensity.value=A.aoMapIntensity,t(A.aoMap,p.aoMapTransform))}function r(p,A){p.diffuse.value.copy(A.color),p.opacity.value=A.opacity,A.map&&(p.map.value=A.map,t(A.map,p.mapTransform))}function o(p,A){p.dashSize.value=A.dashSize,p.totalSize.value=A.dashSize+A.gapSize,p.scale.value=A.scale}function c(p,A,E,_){p.diffuse.value.copy(A.color),p.opacity.value=A.opacity,p.size.value=A.size*E,p.scale.value=_*.5,A.map&&(p.map.value=A.map,t(A.map,p.uvTransform)),A.alphaMap&&(p.alphaMap.value=A.alphaMap,t(A.alphaMap,p.alphaMapTransform)),A.alphaTest>0&&(p.alphaTest.value=A.alphaTest)}function l(p,A){p.diffuse.value.copy(A.color),p.opacity.value=A.opacity,p.rotation.value=A.rotation,A.map&&(p.map.value=A.map,t(A.map,p.mapTransform)),A.alphaMap&&(p.alphaMap.value=A.alphaMap,t(A.alphaMap,p.alphaMapTransform)),A.alphaTest>0&&(p.alphaTest.value=A.alphaTest)}function h(p,A){p.specular.value.copy(A.specular),p.shininess.value=Math.max(A.shininess,1e-4)}function u(p,A){A.gradientMap&&(p.gradientMap.value=A.gradientMap)}function d(p,A){p.metalness.value=A.metalness,A.metalnessMap&&(p.metalnessMap.value=A.metalnessMap,t(A.metalnessMap,p.metalnessMapTransform)),p.roughness.value=A.roughness,A.roughnessMap&&(p.roughnessMap.value=A.roughnessMap,t(A.roughnessMap,p.roughnessMapTransform)),A.envMap&&(p.envMapIntensity.value=A.envMapIntensity)}function f(p,A,E){p.ior.value=A.ior,A.sheen>0&&(p.sheenColor.value.copy(A.sheenColor).multiplyScalar(A.sheen),p.sheenRoughness.value=A.sheenRoughness,A.sheenColorMap&&(p.sheenColorMap.value=A.sheenColorMap,t(A.sheenColorMap,p.sheenColorMapTransform)),A.sheenRoughnessMap&&(p.sheenRoughnessMap.value=A.sheenRoughnessMap,t(A.sheenRoughnessMap,p.sheenRoughnessMapTransform))),A.clearcoat>0&&(p.clearcoat.value=A.clearcoat,p.clearcoatRoughness.value=A.clearcoatRoughness,A.clearcoatMap&&(p.clearcoatMap.value=A.clearcoatMap,t(A.clearcoatMap,p.clearcoatMapTransform)),A.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=A.clearcoatRoughnessMap,t(A.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),A.clearcoatNormalMap&&(p.clearcoatNormalMap.value=A.clearcoatNormalMap,t(A.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(A.clearcoatNormalScale),A.side===Dn&&p.clearcoatNormalScale.value.negate())),A.dispersion>0&&(p.dispersion.value=A.dispersion),A.iridescence>0&&(p.iridescence.value=A.iridescence,p.iridescenceIOR.value=A.iridescenceIOR,p.iridescenceThicknessMinimum.value=A.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=A.iridescenceThicknessRange[1],A.iridescenceMap&&(p.iridescenceMap.value=A.iridescenceMap,t(A.iridescenceMap,p.iridescenceMapTransform)),A.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=A.iridescenceThicknessMap,t(A.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),A.transmission>0&&(p.transmission.value=A.transmission,p.transmissionSamplerMap.value=E.texture,p.transmissionSamplerSize.value.set(E.width,E.height),A.transmissionMap&&(p.transmissionMap.value=A.transmissionMap,t(A.transmissionMap,p.transmissionMapTransform)),p.thickness.value=A.thickness,A.thicknessMap&&(p.thicknessMap.value=A.thicknessMap,t(A.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=A.attenuationDistance,p.attenuationColor.value.copy(A.attenuationColor)),A.anisotropy>0&&(p.anisotropyVector.value.set(A.anisotropy*Math.cos(A.anisotropyRotation),A.anisotropy*Math.sin(A.anisotropyRotation)),A.anisotropyMap&&(p.anisotropyMap.value=A.anisotropyMap,t(A.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=A.specularIntensity,p.specularColor.value.copy(A.specularColor),A.specularColorMap&&(p.specularColorMap.value=A.specularColorMap,t(A.specularColorMap,p.specularColorMapTransform)),A.specularIntensityMap&&(p.specularIntensityMap.value=A.specularIntensityMap,t(A.specularIntensityMap,p.specularIntensityMapTransform))}function m(p,A){A.matcap&&(p.matcap.value=A.matcap)}function x(p,A){const E=e.get(A).light;p.referencePosition.value.setFromMatrixPosition(E.matrixWorld),p.nearDistance.value=E.shadow.camera.near,p.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function gb(i,e,t,n){let s={},a={},r=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(E,_){const g=_.program;n.uniformBlockBinding(E,g)}function l(E,_){let g=s[E.id];g===void 0&&(m(E),g=h(E),s[E.id]=g,E.addEventListener("dispose",p));const B=_.program;n.updateUBOMapping(E,B);const S=e.render.frame;a[E.id]!==S&&(d(E),a[E.id]=S)}function h(E){const _=u();E.__bindingPointIndex=_;const g=i.createBuffer(),B=E.__size,S=E.usage;return i.bindBuffer(i.UNIFORM_BUFFER,g),i.bufferData(i.UNIFORM_BUFFER,B,S),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,_,g),g}function u(){for(let E=0;E<o;E++)if(r.indexOf(E)===-1)return r.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(E){const _=s[E.id],g=E.uniforms,B=E.__cache;i.bindBuffer(i.UNIFORM_BUFFER,_);for(let S=0,T=g.length;S<T;S++){const U=Array.isArray(g[S])?g[S]:[g[S]];for(let M=0,y=U.length;M<y;M++){const L=U[M];if(f(L,S,M,B)===!0){const V=L.__offset,te=Array.isArray(L.value)?L.value:[L.value];let Ae=0;for(let ae=0;ae<te.length;ae++){const ce=te[ae],se=x(ce);typeof ce=="number"||typeof ce=="boolean"?(L.__data[0]=ce,i.bufferSubData(i.UNIFORM_BUFFER,V+Ae,L.__data)):ce.isMatrix3?(L.__data[0]=ce.elements[0],L.__data[1]=ce.elements[1],L.__data[2]=ce.elements[2],L.__data[3]=0,L.__data[4]=ce.elements[3],L.__data[5]=ce.elements[4],L.__data[6]=ce.elements[5],L.__data[7]=0,L.__data[8]=ce.elements[6],L.__data[9]=ce.elements[7],L.__data[10]=ce.elements[8],L.__data[11]=0):(ce.toArray(L.__data,Ae),Ae+=se.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,V,L.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(E,_,g,B){const S=E.value,T=_+"_"+g;if(B[T]===void 0)return typeof S=="number"||typeof S=="boolean"?B[T]=S:B[T]=S.clone(),!0;{const U=B[T];if(typeof S=="number"||typeof S=="boolean"){if(U!==S)return B[T]=S,!0}else if(U.equals(S)===!1)return U.copy(S),!0}return!1}function m(E){const _=E.uniforms;let g=0;const B=16;for(let T=0,U=_.length;T<U;T++){const M=Array.isArray(_[T])?_[T]:[_[T]];for(let y=0,L=M.length;y<L;y++){const V=M[y],te=Array.isArray(V.value)?V.value:[V.value];for(let Ae=0,ae=te.length;Ae<ae;Ae++){const ce=te[Ae],se=x(ce),J=g%B,fe=J%se.boundary,$=J+fe;g+=fe,$!==0&&B-$<se.storage&&(g+=B-$),V.__data=new Float32Array(se.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=g,g+=se.storage}}}const S=g%B;return S>0&&(g+=B-S),E.__size=g,E.__cache={},this}function x(E){const _={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(_.boundary=4,_.storage=4):E.isVector2?(_.boundary=8,_.storage=8):E.isVector3||E.isColor?(_.boundary=16,_.storage=12):E.isVector4?(_.boundary=16,_.storage=16):E.isMatrix3?(_.boundary=48,_.storage=48):E.isMatrix4?(_.boundary=64,_.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),_}function p(E){const _=E.target;_.removeEventListener("dispose",p);const g=r.indexOf(_.__bindingPointIndex);r.splice(g,1),i.deleteBuffer(s[_.id]),delete s[_.id],delete a[_.id]}function A(){for(const E in s)i.deleteBuffer(s[E]);r=[],s={},a={}}return{bind:c,update:l,dispose:A}}class bb{constructor(e={}){const{canvas:t=cA(),context:n=null,depth:s=!0,stencil:a=!1,alpha:r=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=r;const m=new Uint32Array(4),x=new Int32Array(4);let p=null,A=null;const E=[],_=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Wt,this.toneMapping=es,this.toneMappingExposure=1;const g=this;let B=!1,S=0,T=0,U=null,M=-1,y=null;const L=new vt,V=new vt;let te=null;const Ae=new De(0);let ae=0,ce=t.width,se=t.height,J=1,fe=null,$=null;const me=new vt(0,0,ce,se),Ce=new vt(0,0,ce,se);let Me=!1;const ne=new El;let Ee=!1,Te=!1;const Se=new $e,Le=new $e,Fe=new G,Ge=new vt,je={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let w=!1;function Q(){return U===null?J:1}let R=n;function ee(D,re){return t.getContext(D,re)}try{const D={alpha:!0,depth:s,stencil:a,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ol}`),t.addEventListener("webglcontextlost",we,!1),t.addEventListener("webglcontextrestored",ue,!1),t.addEventListener("webglcontextcreationerror",z,!1),R===null){const re="webgl2";if(R=ee(re,D),R===null)throw ee(re)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(D){throw console.error("THREE.WebGLRenderer: "+D.message),D}let Y,O,W,j,H,v,b,C,P,I,k,F,N,K,de,ie,X,pe,be,ge,Be,Re,Qe,q;function Ie(){Y=new Mg(R),Y.init(),Re=new cb(R,Y),O=new gg(R,Y,e,Re),W=new ab(R,Y),O.reverseDepthBuffer&&d&&W.buffers.depth.setReversed(!0),j=new Cg(R),H=new V0,v=new ob(R,Y,W,H,O,Re,j),b=new xg(g),C=new vg(g),P=new LA(R),Qe=new pg(R,P),I=new yg(R,P,j,Qe),k=new Ig(R,I,P,j),be=new Sg(R,O,v),ie=new bg(H),F=new H0(g,b,C,Y,O,Qe,ie),N=new mb(g,H),K=new j0,de=new Z0(Y),pe=new Ag(g,b,C,W,k,f,c),X=new ib(g,k,O),q=new gb(R,j,O,W),ge=new mg(R,Y,j),Be=new wg(R,Y,j),j.programs=F.programs,g.capabilities=O,g.extensions=Y,g.properties=H,g.renderLists=K,g.shadowMap=X,g.state=W,g.info=j}Ie();const le=new Ab(g,R);this.xr=le,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){const D=Y.get("WEBGL_lose_context");D&&D.loseContext()},this.forceContextRestore=function(){const D=Y.get("WEBGL_lose_context");D&&D.restoreContext()},this.getPixelRatio=function(){return J},this.setPixelRatio=function(D){D!==void 0&&(J=D,this.setSize(ce,se,!1))},this.getSize=function(D){return D.set(ce,se)},this.setSize=function(D,re,_e=!0){if(le.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ce=D,se=re,t.width=Math.floor(D*J),t.height=Math.floor(re*J),_e===!0&&(t.style.width=D+"px",t.style.height=re+"px"),this.setViewport(0,0,D,re)},this.getDrawingBufferSize=function(D){return D.set(ce*J,se*J).floor()},this.setDrawingBufferSize=function(D,re,_e){ce=D,se=re,J=_e,t.width=Math.floor(D*_e),t.height=Math.floor(re*_e),this.setViewport(0,0,D,re)},this.getCurrentViewport=function(D){return D.copy(L)},this.getViewport=function(D){return D.copy(me)},this.setViewport=function(D,re,_e,ve){D.isVector4?me.set(D.x,D.y,D.z,D.w):me.set(D,re,_e,ve),W.viewport(L.copy(me).multiplyScalar(J).round())},this.getScissor=function(D){return D.copy(Ce)},this.setScissor=function(D,re,_e,ve){D.isVector4?Ce.set(D.x,D.y,D.z,D.w):Ce.set(D,re,_e,ve),W.scissor(V.copy(Ce).multiplyScalar(J).round())},this.getScissorTest=function(){return Me},this.setScissorTest=function(D){W.setScissorTest(Me=D)},this.setOpaqueSort=function(D){fe=D},this.setTransparentSort=function(D){$=D},this.getClearColor=function(D){return D.copy(pe.getClearColor())},this.setClearColor=function(){pe.setClearColor.apply(pe,arguments)},this.getClearAlpha=function(){return pe.getClearAlpha()},this.setClearAlpha=function(){pe.setClearAlpha.apply(pe,arguments)},this.clear=function(D=!0,re=!0,_e=!0){let ve=0;if(D){let he=!1;if(U!==null){const ke=U.texture.format;he=ke===gl||ke===ml||ke===pl}if(he){const ke=U.texture.type,Ve=ke===nn||ke===gs||ke===Ga||ke===bs||ke===fl||ke===Al,qe=pe.getClearColor(),Ye=pe.getClearAlpha(),et=qe.r,tt=qe.g,Oe=qe.b;Ve?(m[0]=et,m[1]=tt,m[2]=Oe,m[3]=Ye,R.clearBufferuiv(R.COLOR,0,m)):(x[0]=et,x[1]=tt,x[2]=Oe,x[3]=Ye,R.clearBufferiv(R.COLOR,0,x))}else ve|=R.COLOR_BUFFER_BIT}re&&(ve|=R.DEPTH_BUFFER_BIT),_e&&(ve|=R.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),R.clear(ve)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",we,!1),t.removeEventListener("webglcontextrestored",ue,!1),t.removeEventListener("webglcontextcreationerror",z,!1),K.dispose(),de.dispose(),H.dispose(),b.dispose(),C.dispose(),k.dispose(),Qe.dispose(),q.dispose(),F.dispose(),le.dispose(),le.removeEventListener("sessionstart",Ut),le.removeEventListener("sessionend",bt),Pt.stop()};function we(D){D.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),B=!0}function ue(){console.log("THREE.WebGLRenderer: Context Restored."),B=!1;const D=j.autoReset,re=X.enabled,_e=X.autoUpdate,ve=X.needsUpdate,he=X.type;Ie(),j.autoReset=D,X.enabled=re,X.autoUpdate=_e,X.needsUpdate=ve,X.type=he}function z(D){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",D.statusMessage)}function oe(D){const re=D.target;re.removeEventListener("dispose",oe),ye(re)}function ye(D){Ne(D),H.remove(D)}function Ne(D){const re=H.get(D).programs;re!==void 0&&(re.forEach(function(_e){F.releaseProgram(_e)}),D.isShaderMaterial&&F.releaseShaderCache(D))}this.renderBufferDirect=function(D,re,_e,ve,he,ke){re===null&&(re=je);const Ve=he.isMesh&&he.matrixWorld.determinant()<0,qe=ot(D,re,_e,ve,he);W.setMaterial(ve,Ve);let Ye=_e.index,et=1;if(ve.wireframe===!0){if(Ye=I.getWireframeAttribute(_e),Ye===void 0)return;et=2}const tt=_e.drawRange,Oe=_e.attributes.position;let dt=tt.start*et,Mt=(tt.start+tt.count)*et;ke!==null&&(dt=Math.max(dt,ke.start*et),Mt=Math.min(Mt,(ke.start+ke.count)*et)),Ye!==null?(dt=Math.max(dt,0),Mt=Math.min(Mt,Ye.count)):Oe!=null&&(dt=Math.max(dt,0),Mt=Math.min(Mt,Oe.count));const Rt=Mt-dt;if(Rt<0||Rt===1/0)return;Qe.setup(he,ve,qe,_e,Ye);let Sn,yt=ge;if(Ye!==null&&(Sn=P.get(Ye),yt=Be,yt.setIndex(Sn)),he.isMesh)ve.wireframe===!0?(W.setLineWidth(ve.wireframeLinewidth*Q()),yt.setMode(R.LINES)):yt.setMode(R.TRIANGLES);else if(he.isLine){let it=ve.linewidth;it===void 0&&(it=1),W.setLineWidth(it*Q()),he.isLineSegments?yt.setMode(R.LINES):he.isLineLoop?yt.setMode(R.LINE_LOOP):yt.setMode(R.LINE_STRIP)}else he.isPoints?yt.setMode(R.POINTS):he.isSprite&&yt.setMode(R.TRIANGLES);if(he.isBatchedMesh)if(he._multiDrawInstances!==null)yt.renderMultiDrawInstances(he._multiDrawStarts,he._multiDrawCounts,he._multiDrawCount,he._multiDrawInstances);else if(Y.get("WEBGL_multi_draw"))yt.renderMultiDraw(he._multiDrawStarts,he._multiDrawCounts,he._multiDrawCount);else{const it=he._multiDrawStarts,_i=he._multiDrawCounts,wt=he._multiDrawCount,$n=Ye?P.get(Ye).bytesPerElement:1,Cs=H.get(ve).currentProgram.getUniforms();for(let Pn=0;Pn<wt;Pn++)Cs.setValue(R,"_gl_DrawID",Pn),yt.render(it[Pn]/$n,_i[Pn])}else if(he.isInstancedMesh)yt.renderInstances(dt,Rt,he.count);else if(_e.isInstancedBufferGeometry){const it=_e._maxInstanceCount!==void 0?_e._maxInstanceCount:1/0,_i=Math.min(_e.instanceCount,it);yt.renderInstances(dt,Rt,_i)}else yt.render(dt,Rt)};function Pe(D,re,_e){D.transparent===!0&&D.side===zt&&D.forceSinglePass===!1?(D.side=Dn,D.needsUpdate=!0,st(D,re,_e),D.side=ci,D.needsUpdate=!0,st(D,re,_e),D.side=zt):st(D,re,_e)}this.compile=function(D,re,_e=null){_e===null&&(_e=D),A=de.get(_e),A.init(re),_.push(A),_e.traverseVisible(function(he){he.isLight&&he.layers.test(re.layers)&&(A.pushLight(he),he.castShadow&&A.pushShadow(he))}),D!==_e&&D.traverseVisible(function(he){he.isLight&&he.layers.test(re.layers)&&(A.pushLight(he),he.castShadow&&A.pushShadow(he))}),A.setupLights();const ve=new Set;return D.traverse(function(he){if(!(he.isMesh||he.isPoints||he.isLine||he.isSprite))return;const ke=he.material;if(ke)if(Array.isArray(ke))for(let Ve=0;Ve<ke.length;Ve++){const qe=ke[Ve];Pe(qe,_e,he),ve.add(qe)}else Pe(ke,_e,he),ve.add(ke)}),_.pop(),A=null,ve},this.compileAsync=function(D,re,_e=null){const ve=this.compile(D,re,_e);return new Promise(he=>{function ke(){if(ve.forEach(function(Ve){H.get(Ve).currentProgram.isReady()&&ve.delete(Ve)}),ve.size===0){he(D);return}setTimeout(ke,10)}Y.get("KHR_parallel_shader_compile")!==null?ke():setTimeout(ke,10)})};let rt=null;function mt(D){rt&&rt(D)}function Ut(){Pt.stop()}function bt(){Pt.start()}const Pt=new hd;Pt.setAnimationLoop(mt),typeof self<"u"&&Pt.setContext(self),this.setAnimationLoop=function(D){rt=D,le.setAnimationLoop(D),D===null?Pt.stop():Pt.start()},le.addEventListener("sessionstart",Ut),le.addEventListener("sessionend",bt),this.render=function(D,re){if(re!==void 0&&re.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(B===!0)return;if(D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),re.parent===null&&re.matrixWorldAutoUpdate===!0&&re.updateMatrixWorld(),le.enabled===!0&&le.isPresenting===!0&&(le.cameraAutoUpdate===!0&&le.updateCamera(re),re=le.getCamera()),D.isScene===!0&&D.onBeforeRender(g,D,re,U),A=de.get(D,_.length),A.init(re),_.push(A),Le.multiplyMatrices(re.projectionMatrix,re.matrixWorldInverse),ne.setFromProjectionMatrix(Le),Te=this.localClippingEnabled,Ee=ie.init(this.clippingPlanes,Te),p=K.get(D,E.length),p.init(),E.push(p),le.enabled===!0&&le.isPresenting===!0){const ke=g.xr.getDepthSensingMesh();ke!==null&&Z(ke,re,-1/0,g.sortObjects)}Z(D,re,0,g.sortObjects),p.finish(),g.sortObjects===!0&&p.sort(fe,$),w=le.enabled===!1||le.isPresenting===!1||le.hasDepthSensing()===!1,w&&pe.addToRenderList(p,D),this.info.render.frame++,Ee===!0&&ie.beginShadows();const _e=A.state.shadowsArray;X.render(_e,D,re),Ee===!0&&ie.endShadows(),this.info.autoReset===!0&&this.info.reset();const ve=p.opaque,he=p.transmissive;if(A.setupLights(),re.isArrayCamera){const ke=re.cameras;if(he.length>0)for(let Ve=0,qe=ke.length;Ve<qe;Ve++){const Ye=ke[Ve];Ue(ve,he,D,Ye)}w&&pe.render(D);for(let Ve=0,qe=ke.length;Ve<qe;Ve++){const Ye=ke[Ve];xe(p,D,Ye,Ye.viewport)}}else he.length>0&&Ue(ve,he,D,re),w&&pe.render(D),xe(p,D,re);U!==null&&(v.updateMultisampleRenderTarget(U),v.updateRenderTargetMipmap(U)),D.isScene===!0&&D.onAfterRender(g,D,re),Qe.resetDefaultState(),M=-1,y=null,_.pop(),_.length>0?(A=_[_.length-1],Ee===!0&&ie.setGlobalState(g.clippingPlanes,A.state.camera)):A=null,E.pop(),E.length>0?p=E[E.length-1]:p=null};function Z(D,re,_e,ve){if(D.visible===!1)return;if(D.layers.test(re.layers)){if(D.isGroup)_e=D.renderOrder;else if(D.isLOD)D.autoUpdate===!0&&D.update(re);else if(D.isLight)A.pushLight(D),D.castShadow&&A.pushShadow(D);else if(D.isSprite){if(!D.frustumCulled||ne.intersectsSprite(D)){ve&&Ge.setFromMatrixPosition(D.matrixWorld).applyMatrix4(Le);const Ve=k.update(D),qe=D.material;qe.visible&&p.push(D,Ve,qe,_e,Ge.z,null)}}else if((D.isMesh||D.isLine||D.isPoints)&&(!D.frustumCulled||ne.intersectsObject(D))){const Ve=k.update(D),qe=D.material;if(ve&&(D.boundingSphere!==void 0?(D.boundingSphere===null&&D.computeBoundingSphere(),Ge.copy(D.boundingSphere.center)):(Ve.boundingSphere===null&&Ve.computeBoundingSphere(),Ge.copy(Ve.boundingSphere.center)),Ge.applyMatrix4(D.matrixWorld).applyMatrix4(Le)),Array.isArray(qe)){const Ye=Ve.groups;for(let et=0,tt=Ye.length;et<tt;et++){const Oe=Ye[et],dt=qe[Oe.materialIndex];dt&&dt.visible&&p.push(D,Ve,dt,_e,Ge.z,Oe)}}else qe.visible&&p.push(D,Ve,qe,_e,Ge.z,null)}}const ke=D.children;for(let Ve=0,qe=ke.length;Ve<qe;Ve++)Z(ke[Ve],re,_e,ve)}function xe(D,re,_e,ve){const he=D.opaque,ke=D.transmissive,Ve=D.transparent;A.setupLightsView(_e),Ee===!0&&ie.setGlobalState(g.clippingPlanes,_e),ve&&W.viewport(L.copy(ve)),he.length>0&&ze(he,re,_e),ke.length>0&&ze(ke,re,_e),Ve.length>0&&ze(Ve,re,_e),W.buffers.depth.setTest(!0),W.buffers.depth.setMask(!0),W.buffers.color.setMask(!0),W.setPolygonOffset(!1)}function Ue(D,re,_e,ve){if((_e.isScene===!0?_e.overrideMaterial:null)!==null)return;A.state.transmissionRenderTarget[ve.id]===void 0&&(A.state.transmissionRenderTarget[ve.id]=new On(1,1,{generateMipmaps:!0,type:Y.has("EXT_color_buffer_half_float")||Y.has("EXT_color_buffer_float")?dn:nn,minFilter:pi,samples:4,stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:gt.workingColorSpace}));const ke=A.state.transmissionRenderTarget[ve.id],Ve=ve.viewport||L;ke.setSize(Ve.z,Ve.w);const qe=g.getRenderTarget();g.setRenderTarget(ke),g.getClearColor(Ae),ae=g.getClearAlpha(),ae<1&&g.setClearColor(16777215,.5),g.clear(),w&&pe.render(_e);const Ye=g.toneMapping;g.toneMapping=es;const et=ve.viewport;if(ve.viewport!==void 0&&(ve.viewport=void 0),A.setupLightsView(ve),Ee===!0&&ie.setGlobalState(g.clippingPlanes,ve),ze(D,_e,ve),v.updateMultisampleRenderTarget(ke),v.updateRenderTargetMipmap(ke),Y.has("WEBGL_multisampled_render_to_texture")===!1){let tt=!1;for(let Oe=0,dt=re.length;Oe<dt;Oe++){const Mt=re[Oe],Rt=Mt.object,Sn=Mt.geometry,yt=Mt.material,it=Mt.group;if(yt.side===zt&&Rt.layers.test(ve.layers)){const _i=yt.side;yt.side=Dn,yt.needsUpdate=!0,at(Rt,_e,ve,Sn,yt,it),yt.side=_i,yt.needsUpdate=!0,tt=!0}}tt===!0&&(v.updateMultisampleRenderTarget(ke),v.updateRenderTargetMipmap(ke))}g.setRenderTarget(qe),g.setClearColor(Ae,ae),et!==void 0&&(ve.viewport=et),g.toneMapping=Ye}function ze(D,re,_e){const ve=re.isScene===!0?re.overrideMaterial:null;for(let he=0,ke=D.length;he<ke;he++){const Ve=D[he],qe=Ve.object,Ye=Ve.geometry,et=ve===null?Ve.material:ve,tt=Ve.group;qe.layers.test(_e.layers)&&at(qe,re,_e,Ye,et,tt)}}function at(D,re,_e,ve,he,ke){D.onBeforeRender(g,re,_e,ve,he,ke),D.modelViewMatrix.multiplyMatrices(_e.matrixWorldInverse,D.matrixWorld),D.normalMatrix.getNormalMatrix(D.modelViewMatrix),he.onBeforeRender(g,re,_e,ve,D,ke),he.transparent===!0&&he.side===zt&&he.forceSinglePass===!1?(he.side=Dn,he.needsUpdate=!0,g.renderBufferDirect(_e,re,ve,he,D,ke),he.side=ci,he.needsUpdate=!0,g.renderBufferDirect(_e,re,ve,he,D,ke),he.side=zt):g.renderBufferDirect(_e,re,ve,he,D,ke),D.onAfterRender(g,re,_e,ve,he,ke)}function st(D,re,_e){re.isScene!==!0&&(re=je);const ve=H.get(D),he=A.state.lights,ke=A.state.shadowsArray,Ve=he.state.version,qe=F.getParameters(D,he.state,ke,re,_e),Ye=F.getProgramCacheKey(qe);let et=ve.programs;ve.environment=D.isMeshStandardMaterial?re.environment:null,ve.fog=re.fog,ve.envMap=(D.isMeshStandardMaterial?C:b).get(D.envMap||ve.environment),ve.envMapRotation=ve.environment!==null&&D.envMap===null?re.environmentRotation:D.envMapRotation,et===void 0&&(D.addEventListener("dispose",oe),et=new Map,ve.programs=et);let tt=et.get(Ye);if(tt!==void 0){if(ve.currentProgram===tt&&ve.lightsStateVersion===Ve)return Et(D,qe),tt}else qe.uniforms=F.getUniforms(D),D.onBeforeCompile(qe,g),tt=F.acquireProgram(qe,Ye),et.set(Ye,tt),ve.uniforms=qe.uniforms;const Oe=ve.uniforms;return(!D.isShaderMaterial&&!D.isRawShaderMaterial||D.clipping===!0)&&(Oe.clippingPlanes=ie.uniform),Et(D,qe),ve.needsLights=Nt(D),ve.lightsStateVersion=Ve,ve.needsLights&&(Oe.ambientLightColor.value=he.state.ambient,Oe.lightProbe.value=he.state.probe,Oe.directionalLights.value=he.state.directional,Oe.directionalLightShadows.value=he.state.directionalShadow,Oe.spotLights.value=he.state.spot,Oe.spotLightShadows.value=he.state.spotShadow,Oe.rectAreaLights.value=he.state.rectArea,Oe.ltc_1.value=he.state.rectAreaLTC1,Oe.ltc_2.value=he.state.rectAreaLTC2,Oe.pointLights.value=he.state.point,Oe.pointLightShadows.value=he.state.pointShadow,Oe.hemisphereLights.value=he.state.hemi,Oe.directionalShadowMap.value=he.state.directionalShadowMap,Oe.directionalShadowMatrix.value=he.state.directionalShadowMatrix,Oe.spotShadowMap.value=he.state.spotShadowMap,Oe.spotLightMatrix.value=he.state.spotLightMatrix,Oe.spotLightMap.value=he.state.spotLightMap,Oe.pointShadowMap.value=he.state.pointShadowMap,Oe.pointShadowMatrix.value=he.state.pointShadowMatrix),ve.currentProgram=tt,ve.uniformsList=null,tt}function ut(D){if(D.uniformsList===null){const re=D.currentProgram.getUniforms();D.uniformsList=kr.seqWithValue(re.seq,D.uniforms)}return D.uniformsList}function Et(D,re){const _e=H.get(D);_e.outputColorSpace=re.outputColorSpace,_e.batching=re.batching,_e.batchingColor=re.batchingColor,_e.instancing=re.instancing,_e.instancingColor=re.instancingColor,_e.instancingMorph=re.instancingMorph,_e.skinning=re.skinning,_e.morphTargets=re.morphTargets,_e.morphNormals=re.morphNormals,_e.morphColors=re.morphColors,_e.morphTargetsCount=re.morphTargetsCount,_e.numClippingPlanes=re.numClippingPlanes,_e.numIntersection=re.numClipIntersection,_e.vertexAlphas=re.vertexAlphas,_e.vertexTangents=re.vertexTangents,_e.toneMapping=re.toneMapping}function ot(D,re,_e,ve,he){re.isScene!==!0&&(re=je),v.resetTextureUnits();const ke=re.fog,Ve=ve.isMeshStandardMaterial?re.environment:null,qe=U===null?g.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:xn,Ye=(ve.isMeshStandardMaterial?C:b).get(ve.envMap||Ve),et=ve.vertexColors===!0&&!!_e.attributes.color&&_e.attributes.color.itemSize===4,tt=!!_e.attributes.tangent&&(!!ve.normalMap||ve.anisotropy>0),Oe=!!_e.morphAttributes.position,dt=!!_e.morphAttributes.normal,Mt=!!_e.morphAttributes.color;let Rt=es;ve.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(Rt=g.toneMapping);const Sn=_e.morphAttributes.position||_e.morphAttributes.normal||_e.morphAttributes.color,yt=Sn!==void 0?Sn.length:0,it=H.get(ve),_i=A.state.lights;if(Ee===!0&&(Te===!0||D!==y)){const zn=D===y&&ve.id===M;ie.setState(ve,D,zn)}let wt=!1;ve.version===it.__version?(it.needsLights&&it.lightsStateVersion!==_i.state.version||it.outputColorSpace!==qe||he.isBatchedMesh&&it.batching===!1||!he.isBatchedMesh&&it.batching===!0||he.isBatchedMesh&&it.batchingColor===!0&&he.colorTexture===null||he.isBatchedMesh&&it.batchingColor===!1&&he.colorTexture!==null||he.isInstancedMesh&&it.instancing===!1||!he.isInstancedMesh&&it.instancing===!0||he.isSkinnedMesh&&it.skinning===!1||!he.isSkinnedMesh&&it.skinning===!0||he.isInstancedMesh&&it.instancingColor===!0&&he.instanceColor===null||he.isInstancedMesh&&it.instancingColor===!1&&he.instanceColor!==null||he.isInstancedMesh&&it.instancingMorph===!0&&he.morphTexture===null||he.isInstancedMesh&&it.instancingMorph===!1&&he.morphTexture!==null||it.envMap!==Ye||ve.fog===!0&&it.fog!==ke||it.numClippingPlanes!==void 0&&(it.numClippingPlanes!==ie.numPlanes||it.numIntersection!==ie.numIntersection)||it.vertexAlphas!==et||it.vertexTangents!==tt||it.morphTargets!==Oe||it.morphNormals!==dt||it.morphColors!==Mt||it.toneMapping!==Rt||it.morphTargetsCount!==yt)&&(wt=!0):(wt=!0,it.__version=ve.version);let $n=it.currentProgram;wt===!0&&($n=st(ve,re,he));let Cs=!1,Pn=!1,Aa=!1;const kt=$n.getUniforms(),hi=it.uniforms;if(W.useProgram($n.program)&&(Cs=!0,Pn=!0,Aa=!0),ve.id!==M&&(M=ve.id,Pn=!0),Cs||y!==D){W.buffers.depth.getReversed()?(Se.copy(D.projectionMatrix),hA(Se),uA(Se),kt.setValue(R,"projectionMatrix",Se)):kt.setValue(R,"projectionMatrix",D.projectionMatrix),kt.setValue(R,"viewMatrix",D.matrixWorldInverse);const Fi=kt.map.cameraPosition;Fi!==void 0&&Fi.setValue(R,Fe.setFromMatrixPosition(D.matrixWorld)),O.logarithmicDepthBuffer&&kt.setValue(R,"logDepthBufFC",2/(Math.log(D.far+1)/Math.LN2)),(ve.isMeshPhongMaterial||ve.isMeshToonMaterial||ve.isMeshLambertMaterial||ve.isMeshBasicMaterial||ve.isMeshStandardMaterial||ve.isShaderMaterial)&&kt.setValue(R,"isOrthographic",D.isOrthographicCamera===!0),y!==D&&(y=D,Pn=!0,Aa=!0)}if(he.isSkinnedMesh){kt.setOptional(R,he,"bindMatrix"),kt.setOptional(R,he,"bindMatrixInverse");const zn=he.skeleton;zn&&(zn.boneTexture===null&&zn.computeBoneTexture(),kt.setValue(R,"boneTexture",zn.boneTexture,v))}he.isBatchedMesh&&(kt.setOptional(R,he,"batchingTexture"),kt.setValue(R,"batchingTexture",he._matricesTexture,v),kt.setOptional(R,he,"batchingIdTexture"),kt.setValue(R,"batchingIdTexture",he._indirectTexture,v),kt.setOptional(R,he,"batchingColorTexture"),he._colorsTexture!==null&&kt.setValue(R,"batchingColorTexture",he._colorsTexture,v));const pa=_e.morphAttributes;if((pa.position!==void 0||pa.normal!==void 0||pa.color!==void 0)&&be.update(he,_e,$n),(Pn||it.receiveShadow!==he.receiveShadow)&&(it.receiveShadow=he.receiveShadow,kt.setValue(R,"receiveShadow",he.receiveShadow)),ve.isMeshGouraudMaterial&&ve.envMap!==null&&(hi.envMap.value=Ye,hi.flipEnvMap.value=Ye.isCubeTexture&&Ye.isRenderTargetTexture===!1?-1:1),ve.isMeshStandardMaterial&&ve.envMap===null&&re.environment!==null&&(hi.envMapIntensity.value=re.environmentIntensity),Pn&&(kt.setValue(R,"toneMappingExposure",g.toneMappingExposure),it.needsLights&&Ht(hi,Aa),ke&&ve.fog===!0&&N.refreshFogUniforms(hi,ke),N.refreshMaterialUniforms(hi,ve,J,se,A.state.transmissionRenderTarget[D.id]),kr.upload(R,ut(it),hi,v)),ve.isShaderMaterial&&ve.uniformsNeedUpdate===!0&&(kr.upload(R,ut(it),hi,v),ve.uniformsNeedUpdate=!1),ve.isSpriteMaterial&&kt.setValue(R,"center",he.center),kt.setValue(R,"modelViewMatrix",he.modelViewMatrix),kt.setValue(R,"normalMatrix",he.normalMatrix),kt.setValue(R,"modelMatrix",he.matrixWorld),ve.isShaderMaterial||ve.isRawShaderMaterial){const zn=ve.uniformsGroups;for(let Fi=0,Ni=zn.length;Fi<Ni;Fi++){const kl=zn[Fi];q.update(kl,$n),q.bind(kl,$n)}}return $n}function Ht(D,re){D.ambientLightColor.needsUpdate=re,D.lightProbe.needsUpdate=re,D.directionalLights.needsUpdate=re,D.directionalLightShadows.needsUpdate=re,D.pointLights.needsUpdate=re,D.pointLightShadows.needsUpdate=re,D.spotLights.needsUpdate=re,D.spotLightShadows.needsUpdate=re,D.rectAreaLights.needsUpdate=re,D.hemisphereLights.needsUpdate=re}function Nt(D){return D.isMeshLambertMaterial||D.isMeshToonMaterial||D.isMeshPhongMaterial||D.isMeshStandardMaterial||D.isShadowMaterial||D.isShaderMaterial&&D.lights===!0}this.getActiveCubeFace=function(){return S},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return U},this.setRenderTargetTextures=function(D,re,_e){H.get(D.texture).__webglTexture=re,H.get(D.depthTexture).__webglTexture=_e;const ve=H.get(D);ve.__hasExternalTextures=!0,ve.__autoAllocateDepthBuffer=_e===void 0,ve.__autoAllocateDepthBuffer||Y.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ve.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(D,re){const _e=H.get(D);_e.__webglFramebuffer=re,_e.__useDefaultFramebuffer=re===void 0},this.setRenderTarget=function(D,re=0,_e=0){U=D,S=re,T=_e;let ve=!0,he=null,ke=!1,Ve=!1;if(D){const Ye=H.get(D);if(Ye.__useDefaultFramebuffer!==void 0)W.bindFramebuffer(R.FRAMEBUFFER,null),ve=!1;else if(Ye.__webglFramebuffer===void 0)v.setupRenderTarget(D);else if(Ye.__hasExternalTextures)v.rebindTextures(D,H.get(D.texture).__webglTexture,H.get(D.depthTexture).__webglTexture);else if(D.depthBuffer){const Oe=D.depthTexture;if(Ye.__boundDepthTexture!==Oe){if(Oe!==null&&H.has(Oe)&&(D.width!==Oe.image.width||D.height!==Oe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");v.setupDepthRenderbuffer(D)}}const et=D.texture;(et.isData3DTexture||et.isDataArrayTexture||et.isCompressedArrayTexture)&&(Ve=!0);const tt=H.get(D).__webglFramebuffer;D.isWebGLCubeRenderTarget?(Array.isArray(tt[re])?he=tt[re][_e]:he=tt[re],ke=!0):D.samples>0&&v.useMultisampledRTT(D)===!1?he=H.get(D).__webglMultisampledFramebuffer:Array.isArray(tt)?he=tt[_e]:he=tt,L.copy(D.viewport),V.copy(D.scissor),te=D.scissorTest}else L.copy(me).multiplyScalar(J).floor(),V.copy(Ce).multiplyScalar(J).floor(),te=Me;if(W.bindFramebuffer(R.FRAMEBUFFER,he)&&ve&&W.drawBuffers(D,he),W.viewport(L),W.scissor(V),W.setScissorTest(te),ke){const Ye=H.get(D.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ye.__webglTexture,_e)}else if(Ve){const Ye=H.get(D.texture),et=re||0;R.framebufferTextureLayer(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,Ye.__webglTexture,_e||0,et)}M=-1},this.readRenderTargetPixels=function(D,re,_e,ve,he,ke,Ve){if(!(D&&D.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let qe=H.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&Ve!==void 0&&(qe=qe[Ve]),qe){W.bindFramebuffer(R.FRAMEBUFFER,qe);try{const Ye=D.texture,et=Ye.format,tt=Ye.type;if(!O.textureFormatReadable(et)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!O.textureTypeReadable(tt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}re>=0&&re<=D.width-ve&&_e>=0&&_e<=D.height-he&&R.readPixels(re,_e,ve,he,Re.convert(et),Re.convert(tt),ke)}finally{const Ye=U!==null?H.get(U).__webglFramebuffer:null;W.bindFramebuffer(R.FRAMEBUFFER,Ye)}}},this.readRenderTargetPixelsAsync=async function(D,re,_e,ve,he,ke,Ve){if(!(D&&D.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let qe=H.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&Ve!==void 0&&(qe=qe[Ve]),qe){const Ye=D.texture,et=Ye.format,tt=Ye.type;if(!O.textureFormatReadable(et))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!O.textureTypeReadable(tt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(re>=0&&re<=D.width-ve&&_e>=0&&_e<=D.height-he){W.bindFramebuffer(R.FRAMEBUFFER,qe);const Oe=R.createBuffer();R.bindBuffer(R.PIXEL_PACK_BUFFER,Oe),R.bufferData(R.PIXEL_PACK_BUFFER,ke.byteLength,R.STREAM_READ),R.readPixels(re,_e,ve,he,Re.convert(et),Re.convert(tt),0);const dt=U!==null?H.get(U).__webglFramebuffer:null;W.bindFramebuffer(R.FRAMEBUFFER,dt);const Mt=R.fenceSync(R.SYNC_GPU_COMMANDS_COMPLETE,0);return R.flush(),await lA(R,Mt,4),R.bindBuffer(R.PIXEL_PACK_BUFFER,Oe),R.getBufferSubData(R.PIXEL_PACK_BUFFER,0,ke),R.deleteBuffer(Oe),R.deleteSync(Mt),ke}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(D,re=null,_e=0){D.isTexture!==!0&&(Ta("WebGLRenderer: copyFramebufferToTexture function signature has changed."),re=arguments[0]||null,D=arguments[1]);const ve=Math.pow(2,-_e),he=Math.floor(D.image.width*ve),ke=Math.floor(D.image.height*ve),Ve=re!==null?re.x:0,qe=re!==null?re.y:0;v.setTexture2D(D,0),R.copyTexSubImage2D(R.TEXTURE_2D,_e,0,0,Ve,qe,he,ke),W.unbindTexture()},this.copyTextureToTexture=function(D,re,_e=null,ve=null,he=0){D.isTexture!==!0&&(Ta("WebGLRenderer: copyTextureToTexture function signature has changed."),ve=arguments[0]||null,D=arguments[1],re=arguments[2],he=arguments[3]||0,_e=null);let ke,Ve,qe,Ye,et,tt,Oe,dt,Mt;const Rt=D.isCompressedTexture?D.mipmaps[he]:D.image;_e!==null?(ke=_e.max.x-_e.min.x,Ve=_e.max.y-_e.min.y,qe=_e.isBox3?_e.max.z-_e.min.z:1,Ye=_e.min.x,et=_e.min.y,tt=_e.isBox3?_e.min.z:0):(ke=Rt.width,Ve=Rt.height,qe=Rt.depth||1,Ye=0,et=0,tt=0),ve!==null?(Oe=ve.x,dt=ve.y,Mt=ve.z):(Oe=0,dt=0,Mt=0);const Sn=Re.convert(re.format),yt=Re.convert(re.type);let it;re.isData3DTexture?(v.setTexture3D(re,0),it=R.TEXTURE_3D):re.isDataArrayTexture||re.isCompressedArrayTexture?(v.setTexture2DArray(re,0),it=R.TEXTURE_2D_ARRAY):(v.setTexture2D(re,0),it=R.TEXTURE_2D),R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,re.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,re.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,re.unpackAlignment);const _i=R.getParameter(R.UNPACK_ROW_LENGTH),wt=R.getParameter(R.UNPACK_IMAGE_HEIGHT),$n=R.getParameter(R.UNPACK_SKIP_PIXELS),Cs=R.getParameter(R.UNPACK_SKIP_ROWS),Pn=R.getParameter(R.UNPACK_SKIP_IMAGES);R.pixelStorei(R.UNPACK_ROW_LENGTH,Rt.width),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,Rt.height),R.pixelStorei(R.UNPACK_SKIP_PIXELS,Ye),R.pixelStorei(R.UNPACK_SKIP_ROWS,et),R.pixelStorei(R.UNPACK_SKIP_IMAGES,tt);const Aa=D.isDataArrayTexture||D.isData3DTexture,kt=re.isDataArrayTexture||re.isData3DTexture;if(D.isRenderTargetTexture||D.isDepthTexture){const hi=H.get(D),pa=H.get(re),zn=H.get(hi.__renderTarget),Fi=H.get(pa.__renderTarget);W.bindFramebuffer(R.READ_FRAMEBUFFER,zn.__webglFramebuffer),W.bindFramebuffer(R.DRAW_FRAMEBUFFER,Fi.__webglFramebuffer);for(let Ni=0;Ni<qe;Ni++)Aa&&R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,H.get(D).__webglTexture,he,tt+Ni),D.isDepthTexture?(kt&&R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,H.get(re).__webglTexture,he,Mt+Ni),R.blitFramebuffer(Ye,et,ke,Ve,Oe,dt,ke,Ve,R.DEPTH_BUFFER_BIT,R.NEAREST)):kt?R.copyTexSubImage3D(it,he,Oe,dt,Mt+Ni,Ye,et,ke,Ve):R.copyTexSubImage2D(it,he,Oe,dt,Mt+Ni,Ye,et,ke,Ve);W.bindFramebuffer(R.READ_FRAMEBUFFER,null),W.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else kt?D.isDataTexture||D.isData3DTexture?R.texSubImage3D(it,he,Oe,dt,Mt,ke,Ve,qe,Sn,yt,Rt.data):re.isCompressedArrayTexture?R.compressedTexSubImage3D(it,he,Oe,dt,Mt,ke,Ve,qe,Sn,Rt.data):R.texSubImage3D(it,he,Oe,dt,Mt,ke,Ve,qe,Sn,yt,Rt):D.isDataTexture?R.texSubImage2D(R.TEXTURE_2D,he,Oe,dt,ke,Ve,Sn,yt,Rt.data):D.isCompressedTexture?R.compressedTexSubImage2D(R.TEXTURE_2D,he,Oe,dt,Rt.width,Rt.height,Sn,Rt.data):R.texSubImage2D(R.TEXTURE_2D,he,Oe,dt,ke,Ve,Sn,yt,Rt);R.pixelStorei(R.UNPACK_ROW_LENGTH,_i),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,wt),R.pixelStorei(R.UNPACK_SKIP_PIXELS,$n),R.pixelStorei(R.UNPACK_SKIP_ROWS,Cs),R.pixelStorei(R.UNPACK_SKIP_IMAGES,Pn),he===0&&re.generateMipmaps&&R.generateMipmap(it),W.unbindTexture()},this.copyTextureToTexture3D=function(D,re,_e=null,ve=null,he=0){return D.isTexture!==!0&&(Ta("WebGLRenderer: copyTextureToTexture3D function signature has changed."),_e=arguments[0]||null,ve=arguments[1]||null,D=arguments[2],re=arguments[3],he=arguments[4]||0),Ta('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(D,re,_e,ve,he)},this.initRenderTarget=function(D){H.get(D).__webglFramebuffer===void 0&&v.setupRenderTarget(D)},this.initTexture=function(D){D.isCubeTexture?v.setTextureCube(D,0):D.isData3DTexture?v.setTexture3D(D,0):D.isDataArrayTexture||D.isCompressedArrayTexture?v.setTexture2DArray(D,0):v.setTexture2D(D,0),W.unbindTexture()},this.resetState=function(){S=0,T=0,U=null,W.reset(),Qe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Di}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=gt._getDrawingBufferColorSpace(e),t.unpackColorSpace=gt._getUnpackColorSpace()}}class oo{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new De(e),this.near=t,this.far=n}clone(){return new oo(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class xb extends Ot{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Zn,this.environmentIntensity=1,this.environmentRotation=new Zn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class _b{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=qc,this.updateRanges=[],this.version=0,this.uuid=oi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,a=this.stride;s<a;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=oi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=oi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const _n=new G;class yl{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)_n.fromBufferAttribute(this,t),_n.applyMatrix4(e),this.setXYZ(t,_n.x,_n.y,_n.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)_n.fromBufferAttribute(this,t),_n.applyNormalMatrix(e),this.setXYZ(t,_n.x,_n.y,_n.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)_n.fromBufferAttribute(this,t),_n.transformDirection(e),this.setXYZ(t,_n.x,_n.y,_n.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=ai(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=It(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=It(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=It(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=It(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=It(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=ai(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=ai(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=ai(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=ai(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=It(t,this.array),n=It(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=It(t,this.array),n=It(n,this.array),s=It(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,a){return e=e*this.data.stride+this.offset,this.normalized&&(t=It(t,this.array),n=It(n,this.array),s=It(s,this.array),a=It(a,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=a,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)t.push(this.data.array[s+a])}return new Gt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new yl(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)t.push(this.data.array[s+a])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const _r=new G,Oh=new G;class Kr extends Ot{constructor(){super(),this._currentLevel=0,this.type="LOD",Object.defineProperties(this,{levels:{enumerable:!0,value:[]},isLOD:{value:!0}}),this.autoUpdate=!0}copy(e){super.copy(e,!1);const t=e.levels;for(let n=0,s=t.length;n<s;n++){const a=t[n];this.addLevel(a.object.clone(),a.distance,a.hysteresis)}return this.autoUpdate=e.autoUpdate,this}addLevel(e,t=0,n=0){t=Math.abs(t);const s=this.levels;let a;for(a=0;a<s.length&&!(t<s[a].distance);a++);return s.splice(a,0,{distance:t,hysteresis:n,object:e}),this.add(e),this}removeLevel(e){const t=this.levels;for(let n=0;n<t.length;n++)if(t[n].distance===e){const s=t.splice(n,1);return this.remove(s[0].object),!0}return!1}getCurrentLevel(){return this._currentLevel}getObjectForDistance(e){const t=this.levels;if(t.length>0){let n,s;for(n=1,s=t.length;n<s;n++){let a=t[n].distance;if(t[n].object.visible&&(a-=a*t[n].hysteresis),e<a)break}return t[n-1].object}return null}raycast(e,t){if(this.levels.length>0){_r.setFromMatrixPosition(this.matrixWorld);const s=e.ray.origin.distanceTo(_r);this.getObjectForDistance(s).raycast(e,t)}}update(e){const t=this.levels;if(t.length>1){_r.setFromMatrixPosition(e.matrixWorld),Oh.setFromMatrixPosition(this.matrixWorld);const n=_r.distanceTo(Oh)/e.zoom;t[0].object.visible=!0;let s,a;for(s=1,a=t.length;s<a;s++){let r=t[s].distance;if(t[s].object.visible&&(r-=r*t[s].hysteresis),n>=r)t[s-1].object.visible=!1,t[s].object.visible=!0;else break}for(this._currentLevel=s-1;s<a;s++)t[s].object.visible=!1}}toJSON(e){const t=super.toJSON(e);this.autoUpdate===!1&&(t.object.autoUpdate=!1),t.object.levels=[];const n=this.levels;for(let s=0,a=n.length;s<a;s++){const r=n[s];t.object.levels.push({object:r.object.uuid,distance:r.distance,hysteresis:r.hysteresis})}return t}}const Gh=new G,zh=new vt,Hh=new vt,Eb=new G,Vh=new $e,Er=new G,Ho=new gi,Wh=new $e,Vo=new Ja;class vb extends lt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=zl,this.bindMatrix=new $e,this.bindMatrixInverse=new $e,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Ui),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Er),this.boundingBox.expandByPoint(Er)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new gi),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Er),this.boundingSphere.expandByPoint(Er)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ho.copy(this.boundingSphere),Ho.applyMatrix4(s),e.ray.intersectsSphere(Ho)!==!1&&(Wh.copy(s).invert(),Vo.copy(e.ray).applyMatrix4(Wh),!(this.boundingBox!==null&&Vo.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Vo)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new vt,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);const a=1/e.manhattanLength();a!==1/0?e.multiplyScalar(a):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===zl?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Lf?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,s=this.geometry;zh.fromBufferAttribute(s.attributes.skinIndex,e),Hh.fromBufferAttribute(s.attributes.skinWeight,e),Gh.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let a=0;a<4;a++){const r=Hh.getComponent(a);if(r!==0){const o=zh.getComponent(a);Vh.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(Eb.copy(Gh).applyMatrix4(Vh),r)}}return t.applyMatrix4(this.bindMatrixInverse)}}class pd extends Ot{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Za extends Xt{constructor(e=null,t=1,n=1,s,a,r,o,c,l=An,h=An,u,d){super(null,r,o,c,l,h,s,a,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const jh=new $e,Mb=new $e;class wl{constructor(e=[],t=[]){this.uuid=oi(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new $e)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new $e;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let a=0,r=e.length;a<r;a++){const o=e[a]?e[a].matrixWorld:Mb;jh.multiplyMatrices(o,t[a]),jh.toArray(n,a*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new wl(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Za(t,e,e,sn,bn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){const a=e.bones[n];let r=t[a];r===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",a),r=new pd),this.bones.push(r),this.boneInverses.push(new $e().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let s=0,a=t.length;s<a;s++){const r=t[s];e.bones.push(r.uuid);const o=n[s];e.boneInverses.push(o.toArray())}return e}}class Xc extends Gt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Gs=new $e,qh=new $e,vr=[],Yh=new Ui,yb=new $e,_a=new lt,Ea=new gi;class Qt extends lt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Xc(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,yb)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Ui),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Gs),Yh.copy(e.boundingBox).applyMatrix4(Gs),this.boundingBox.union(Yh)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new gi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Gs),Ea.copy(e.boundingSphere).applyMatrix4(Gs),this.boundingSphere.union(Ea)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,a=n.length+1,r=e*a+1;for(let o=0;o<n.length;o++)n[o]=s[r+o]}raycast(e,t){const n=this.matrixWorld,s=this.count;if(_a.geometry=this.geometry,_a.material=this.material,_a.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ea.copy(this.boundingSphere),Ea.applyMatrix4(n),e.ray.intersectsSphere(Ea)!==!1))for(let a=0;a<s;a++){this.getMatrixAt(a,Gs),qh.multiplyMatrices(n,Gs),_a.matrixWorld=qh,_a.raycast(e,vr);for(let r=0,o=vr.length;r<o;r++){const c=vr[r];c.instanceId=a,c.object=this,t.push(c)}vr.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Xc(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Za(new Float32Array(s*this.count),s,this.count,Ki,bn));const a=this.morphTexture.source.data.data;let r=0;for(let l=0;l<n.length;l++)r+=n[l];const o=this.geometry.morphTargetsRelative?1:1-r,c=s*e;a[c]=o,a.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class md extends Jn{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new De(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Jr=new G,Zr=new G,Xh=new $e,va=new Ja,Mr=new gi,Wo=new G,Kh=new G;class Cl extends Ot{constructor(e=new Bt,t=new md){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let s=1,a=t.count;s<a;s++)Jr.fromBufferAttribute(t,s-1),Zr.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Jr.distanceTo(Zr);e.setAttribute("lineDistance",new ht(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,a=e.params.Line.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Mr.copy(n.boundingSphere),Mr.applyMatrix4(s),Mr.radius+=a,e.ray.intersectsSphere(Mr)===!1)return;Xh.copy(s).invert(),va.copy(e.ray).applyMatrix4(Xh);const o=a/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const f=Math.max(0,r.start),m=Math.min(h.count,r.start+r.count);for(let x=f,p=m-1;x<p;x+=l){const A=h.getX(x),E=h.getX(x+1),_=yr(this,e,va,c,A,E);_&&t.push(_)}if(this.isLineLoop){const x=h.getX(m-1),p=h.getX(f),A=yr(this,e,va,c,x,p);A&&t.push(A)}}else{const f=Math.max(0,r.start),m=Math.min(d.count,r.start+r.count);for(let x=f,p=m-1;x<p;x+=l){const A=yr(this,e,va,c,x,x+1);A&&t.push(A)}if(this.isLineLoop){const x=yr(this,e,va,c,m-1,f);x&&t.push(x)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,r=s.length;a<r;a++){const o=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}}function yr(i,e,t,n,s,a){const r=i.geometry.attributes.position;if(Jr.fromBufferAttribute(r,s),Zr.fromBufferAttribute(r,a),t.distanceSqToSegment(Jr,Zr,Wo,Kh)>n)return;Wo.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(Wo);if(!(c<e.near||c>e.far))return{distance:c,point:Kh.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}const Jh=new G,Zh=new G;class wb extends Cl{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let s=0,a=t.count;s<a;s+=2)Jh.fromBufferAttribute(t,s),Zh.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Jh.distanceTo(Zh);e.setAttribute("lineDistance",new ht(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Cb extends Cl{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class gd extends Jn{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new De(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const $h=new $e,Kc=new Ja,wr=new gi,Cr=new G;class Sb extends Ot{constructor(e=new Bt,t=new gd){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,a=e.params.Points.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),wr.copy(n.boundingSphere),wr.applyMatrix4(s),wr.radius+=a,e.ray.intersectsSphere(wr)===!1)return;$h.copy(s).invert(),Kc.copy(e.ray).applyMatrix4($h);const o=a/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,u=n.attributes.position;if(l!==null){const d=Math.max(0,r.start),f=Math.min(l.count,r.start+r.count);for(let m=d,x=f;m<x;m++){const p=l.getX(m);Cr.fromBufferAttribute(u,p),eu(Cr,p,c,s,e,t,this)}}else{const d=Math.max(0,r.start),f=Math.min(u.count,r.start+r.count);for(let m=d,x=f;m<x;m++)Cr.fromBufferAttribute(u,m),eu(Cr,m,c,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,r=s.length;a<r;a++){const o=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}}function eu(i,e,t,n,s,a,r){const o=Kc.distanceSqToPoint(i);if(o<t){const c=new G;Kc.closestPointToPoint(i,c),c.applyMatrix4(n);const l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;a.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:r})}}class co extends Xt{constructor(e,t,n,s,a,r,o,c,l,h,u,d){super(null,r,o,c,l,h,s,a,u,d),this.isCompressedTexture=!0,this.image={width:t,height:n},this.mipmaps=e,this.flipY=!1,this.generateMipmaps=!1}}class Ib extends co{constructor(e,t,n,s,a,r){super(e,t,n,a,r),this.isCompressedArrayTexture=!0,this.image.depth=s,this.wrapR=Ri,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Tb extends co{constructor(e,t,n){super(void 0,e[0].width,e[0].height,t,n,ms),this.isCompressedCubeTexture=!0,this.isCubeTexture=!0,this.image=e}}class Bb extends Xt{constructor(e,t,n,s,a,r,o,c,l){super(e,t,n,s,a,r,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Sl extends Bt{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);const a=[],r=[],o=[],c=[],l=new G,h=new He;r.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){const f=n+u/t*s;l.x=e*Math.cos(f),l.y=e*Math.sin(f),r.push(l.x,l.y,l.z),o.push(0,0,1),h.x=(r[d]/e+1)/2,h.y=(r[d+1]/e+1)/2,c.push(h.x,h.y)}for(let u=1;u<=t;u++)a.push(u,u+1,0);this.setIndex(a),this.setAttribute("position",new ht(r,3)),this.setAttribute("normal",new ht(o,3)),this.setAttribute("uv",new ht(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Sl(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Xn extends Bt{constructor(e=1,t=1,n=1,s=32,a=1,r=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:a,openEnded:r,thetaStart:o,thetaLength:c};const l=this;s=Math.floor(s),a=Math.floor(a);const h=[],u=[],d=[],f=[];let m=0;const x=[],p=n/2;let A=0;E(),r===!1&&(e>0&&_(!0),t>0&&_(!1)),this.setIndex(h),this.setAttribute("position",new ht(u,3)),this.setAttribute("normal",new ht(d,3)),this.setAttribute("uv",new ht(f,2));function E(){const g=new G,B=new G;let S=0;const T=(t-e)/n;for(let U=0;U<=a;U++){const M=[],y=U/a,L=y*(t-e)+e;for(let V=0;V<=s;V++){const te=V/s,Ae=te*c+o,ae=Math.sin(Ae),ce=Math.cos(Ae);B.x=L*ae,B.y=-y*n+p,B.z=L*ce,u.push(B.x,B.y,B.z),g.set(ae,T,ce).normalize(),d.push(g.x,g.y,g.z),f.push(te,1-y),M.push(m++)}x.push(M)}for(let U=0;U<s;U++)for(let M=0;M<a;M++){const y=x[M][U],L=x[M+1][U],V=x[M+1][U+1],te=x[M][U+1];(e>0||M!==0)&&(h.push(y,L,te),S+=3),(t>0||M!==a-1)&&(h.push(L,V,te),S+=3)}l.addGroup(A,S,0),A+=S}function _(g){const B=m,S=new He,T=new G;let U=0;const M=g===!0?e:t,y=g===!0?1:-1;for(let V=1;V<=s;V++)u.push(0,p*y,0),d.push(0,y,0),f.push(.5,.5),m++;const L=m;for(let V=0;V<=s;V++){const Ae=V/s*c+o,ae=Math.cos(Ae),ce=Math.sin(Ae);T.x=M*ce,T.y=p*y,T.z=M*ae,u.push(T.x,T.y,T.z),d.push(0,y,0),S.x=ae*.5+.5,S.y=ce*.5*y+.5,f.push(S.x,S.y),m++}for(let V=0;V<s;V++){const te=B+V,Ae=L+V;g===!0?h.push(Ae,Ae+1,te):h.push(Ae+1,Ae,te),U+=3}l.addGroup(A,U,g===!0?1:2),A+=U}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xn(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ds extends Xn{constructor(e=1,t=1,n=32,s=1,a=!1,r=0,o=Math.PI*2){super(0,e,t,n,s,a,r,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:a,thetaStart:r,thetaLength:o}}static fromJSON(e){return new ds(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class lo extends Bt{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};const a=[],r=[];o(s),l(n),h(),this.setAttribute("position",new ht(a,3)),this.setAttribute("normal",new ht(a.slice(),3)),this.setAttribute("uv",new ht(r,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(E){const _=new G,g=new G,B=new G;for(let S=0;S<t.length;S+=3)f(t[S+0],_),f(t[S+1],g),f(t[S+2],B),c(_,g,B,E)}function c(E,_,g,B){const S=B+1,T=[];for(let U=0;U<=S;U++){T[U]=[];const M=E.clone().lerp(g,U/S),y=_.clone().lerp(g,U/S),L=S-U;for(let V=0;V<=L;V++)V===0&&U===S?T[U][V]=M:T[U][V]=M.clone().lerp(y,V/L)}for(let U=0;U<S;U++)for(let M=0;M<2*(S-U)-1;M++){const y=Math.floor(M/2);M%2===0?(d(T[U][y+1]),d(T[U+1][y]),d(T[U][y])):(d(T[U][y+1]),d(T[U+1][y+1]),d(T[U+1][y]))}}function l(E){const _=new G;for(let g=0;g<a.length;g+=3)_.x=a[g+0],_.y=a[g+1],_.z=a[g+2],_.normalize().multiplyScalar(E),a[g+0]=_.x,a[g+1]=_.y,a[g+2]=_.z}function h(){const E=new G;for(let _=0;_<a.length;_+=3){E.x=a[_+0],E.y=a[_+1],E.z=a[_+2];const g=p(E)/2/Math.PI+.5,B=A(E)/Math.PI+.5;r.push(g,1-B)}m(),u()}function u(){for(let E=0;E<r.length;E+=6){const _=r[E+0],g=r[E+2],B=r[E+4],S=Math.max(_,g,B),T=Math.min(_,g,B);S>.9&&T<.1&&(_<.2&&(r[E+0]+=1),g<.2&&(r[E+2]+=1),B<.2&&(r[E+4]+=1))}}function d(E){a.push(E.x,E.y,E.z)}function f(E,_){const g=E*3;_.x=e[g+0],_.y=e[g+1],_.z=e[g+2]}function m(){const E=new G,_=new G,g=new G,B=new G,S=new He,T=new He,U=new He;for(let M=0,y=0;M<a.length;M+=9,y+=6){E.set(a[M+0],a[M+1],a[M+2]),_.set(a[M+3],a[M+4],a[M+5]),g.set(a[M+6],a[M+7],a[M+8]),S.set(r[y+0],r[y+1]),T.set(r[y+2],r[y+3]),U.set(r[y+4],r[y+5]),B.copy(E).add(_).add(g).divideScalar(3);const L=p(B);x(S,y+0,E,L),x(T,y+2,_,L),x(U,y+4,g,L)}}function x(E,_,g,B){B<0&&E.x===1&&(r[_]=E.x-1),g.x===0&&g.z===0&&(r[_]=B/2/Math.PI+.5)}function p(E){return Math.atan2(E.z,-E.x)}function A(E){return Math.atan2(-E.y,Math.sqrt(E.x*E.x+E.z*E.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new lo(e.vertices,e.indices,e.radius,e.details)}}const Rb={triangulate:function(i,e,t=2){const n=e&&e.length,s=n?e[0]*t:i.length;let a=bd(i,0,s,t,!0);const r=[];if(!a||a.next===a.prev)return r;let o,c,l,h,u,d,f;if(n&&(a=Fb(i,e,a,t)),i.length>80*t){o=l=i[0],c=h=i[1];for(let m=t;m<s;m+=t)u=i[m],d=i[m+1],u<o&&(o=u),d<c&&(c=d),u>l&&(l=u),d>h&&(h=d);f=Math.max(l-o,h-c),f=f!==0?32767/f:0}return qa(a,r,t,o,c,f,0),r}};function bd(i,e,t,n,s){let a,r;if(s===qb(i,e,t,n)>0)for(a=e;a<t;a+=n)r=tu(a,i[a],i[a+1],r);else for(a=t-n;a>=e;a-=n)r=tu(a,i[a],i[a+1],r);return r&&ho(r,r.next)&&(Xa(r),r=r.next),r}function _s(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(ho(t,t.next)||jt(t.prev,t,t.next)===0)){if(Xa(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function qa(i,e,t,n,s,a,r){if(!i)return;!r&&a&&Gb(i,n,s,a);let o=i,c,l;for(;i.prev!==i.next;){if(c=i.prev,l=i.next,a?Lb(i,n,s,a):Db(i)){e.push(c.i/t|0),e.push(i.i/t|0),e.push(l.i/t|0),Xa(i),i=l.next,o=l.next;continue}if(i=l,i===o){r?r===1?(i=Pb(_s(i),e,t),qa(i,e,t,n,s,a,2)):r===2&&Ub(i,e,t,n,s,a):qa(_s(i),e,t,n,s,a,1);break}}}function Db(i){const e=i.prev,t=i,n=i.next;if(jt(e,t,n)>=0)return!1;const s=e.x,a=t.x,r=n.x,o=e.y,c=t.y,l=n.y,h=s<a?s<r?s:r:a<r?a:r,u=o<c?o<l?o:l:c<l?c:l,d=s>a?s>r?s:r:a>r?a:r,f=o>c?o>l?o:l:c>l?c:l;let m=n.next;for(;m!==e;){if(m.x>=h&&m.x<=d&&m.y>=u&&m.y<=f&&js(s,o,a,c,r,l,m.x,m.y)&&jt(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function Lb(i,e,t,n){const s=i.prev,a=i,r=i.next;if(jt(s,a,r)>=0)return!1;const o=s.x,c=a.x,l=r.x,h=s.y,u=a.y,d=r.y,f=o<c?o<l?o:l:c<l?c:l,m=h<u?h<d?h:d:u<d?u:d,x=o>c?o>l?o:l:c>l?c:l,p=h>u?h>d?h:d:u>d?u:d,A=Jc(f,m,e,t,n),E=Jc(x,p,e,t,n);let _=i.prevZ,g=i.nextZ;for(;_&&_.z>=A&&g&&g.z<=E;){if(_.x>=f&&_.x<=x&&_.y>=m&&_.y<=p&&_!==s&&_!==r&&js(o,h,c,u,l,d,_.x,_.y)&&jt(_.prev,_,_.next)>=0||(_=_.prevZ,g.x>=f&&g.x<=x&&g.y>=m&&g.y<=p&&g!==s&&g!==r&&js(o,h,c,u,l,d,g.x,g.y)&&jt(g.prev,g,g.next)>=0))return!1;g=g.nextZ}for(;_&&_.z>=A;){if(_.x>=f&&_.x<=x&&_.y>=m&&_.y<=p&&_!==s&&_!==r&&js(o,h,c,u,l,d,_.x,_.y)&&jt(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;g&&g.z<=E;){if(g.x>=f&&g.x<=x&&g.y>=m&&g.y<=p&&g!==s&&g!==r&&js(o,h,c,u,l,d,g.x,g.y)&&jt(g.prev,g,g.next)>=0)return!1;g=g.nextZ}return!0}function Pb(i,e,t){let n=i;do{const s=n.prev,a=n.next.next;!ho(s,a)&&xd(s,n,n.next,a)&&Ya(s,a)&&Ya(a,s)&&(e.push(s.i/t|0),e.push(n.i/t|0),e.push(a.i/t|0),Xa(n),Xa(n.next),n=i=a),n=n.next}while(n!==i);return _s(n)}function Ub(i,e,t,n,s,a){let r=i;do{let o=r.next.next;for(;o!==r.prev;){if(r.i!==o.i&&Vb(r,o)){let c=_d(r,o);r=_s(r,r.next),c=_s(c,c.next),qa(r,e,t,n,s,a,0),qa(c,e,t,n,s,a,0);return}o=o.next}r=r.next}while(r!==i)}function Fb(i,e,t,n){const s=[];let a,r,o,c,l;for(a=0,r=e.length;a<r;a++)o=e[a]*n,c=a<r-1?e[a+1]*n:i.length,l=bd(i,o,c,n,!1),l===l.next&&(l.steiner=!0),s.push(Hb(l));for(s.sort(Nb),a=0;a<s.length;a++)t=kb(s[a],t);return t}function Nb(i,e){return i.x-e.x}function kb(i,e){const t=Qb(i,e);if(!t)return e;const n=_d(t,i);return _s(n,n.next),_s(t,t.next)}function Qb(i,e){let t=e,n=-1/0,s;const a=i.x,r=i.y;do{if(r<=t.y&&r>=t.next.y&&t.next.y!==t.y){const d=t.x+(r-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=a&&d>n&&(n=d,s=t.x<t.next.x?t:t.next,d===a))return s}t=t.next}while(t!==e);if(!s)return null;const o=s,c=s.x,l=s.y;let h=1/0,u;t=s;do a>=t.x&&t.x>=c&&a!==t.x&&js(r<l?a:n,r,c,l,r<l?n:a,r,t.x,t.y)&&(u=Math.abs(r-t.y)/(a-t.x),Ya(t,i)&&(u<h||u===h&&(t.x>s.x||t.x===s.x&&Ob(s,t)))&&(s=t,h=u)),t=t.next;while(t!==o);return s}function Ob(i,e){return jt(i.prev,i,e.prev)<0&&jt(e.next,i,i.next)<0}function Gb(i,e,t,n){let s=i;do s.z===0&&(s.z=Jc(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,zb(s)}function zb(i){let e,t,n,s,a,r,o,c,l=1;do{for(t=i,i=null,a=null,r=0;t;){for(r++,n=t,o=0,e=0;e<l&&(o++,n=n.nextZ,!!n);e++);for(c=l;o>0||c>0&&n;)o!==0&&(c===0||!n||t.z<=n.z)?(s=t,t=t.nextZ,o--):(s=n,n=n.nextZ,c--),a?a.nextZ=s:i=s,s.prevZ=a,a=s;t=n}a.nextZ=null,l*=2}while(r>1);return i}function Jc(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function Hb(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function js(i,e,t,n,s,a,r,o){return(s-r)*(e-o)>=(i-r)*(a-o)&&(i-r)*(n-o)>=(t-r)*(e-o)&&(t-r)*(a-o)>=(s-r)*(n-o)}function Vb(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!Wb(i,e)&&(Ya(i,e)&&Ya(e,i)&&jb(i,e)&&(jt(i.prev,i,e.prev)||jt(i,e.prev,e))||ho(i,e)&&jt(i.prev,i,i.next)>0&&jt(e.prev,e,e.next)>0)}function jt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function ho(i,e){return i.x===e.x&&i.y===e.y}function xd(i,e,t,n){const s=Ir(jt(i,e,t)),a=Ir(jt(i,e,n)),r=Ir(jt(t,n,i)),o=Ir(jt(t,n,e));return!!(s!==a&&r!==o||s===0&&Sr(i,t,e)||a===0&&Sr(i,n,e)||r===0&&Sr(t,i,n)||o===0&&Sr(t,e,n))}function Sr(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function Ir(i){return i>0?1:i<0?-1:0}function Wb(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&xd(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function Ya(i,e){return jt(i.prev,i,i.next)<0?jt(i,e,i.next)>=0&&jt(i,i.prev,e)>=0:jt(i,e,i.prev)<0||jt(i,i.next,e)<0}function jb(i,e){let t=i,n=!1;const s=(i.x+e.x)/2,a=(i.y+e.y)/2;do t.y>a!=t.next.y>a&&t.next.y!==t.y&&s<(t.next.x-t.x)*(a-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function _d(i,e){const t=new Zc(i.i,i.x,i.y),n=new Zc(e.i,e.x,e.y),s=i.next,a=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,a.next=n,n.prev=a,n}function tu(i,e,t,n){const s=new Zc(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Xa(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Zc(i,e,t){this.i=i,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function qb(i,e,t,n){let s=0;for(let a=e,r=t-n;a<t;a+=n)s+=(i[r]-i[a])*(i[a+1]+i[r+1]),r=a;return s}class mi{static area(e){const t=e.length;let n=0;for(let s=t-1,a=0;a<t;s=a++)n+=e[s].x*e[a].y-e[a].x*e[s].y;return n*.5}static isClockWise(e){return mi.area(e)<0}static triangulateShape(e,t){const n=[],s=[],a=[];nu(e),iu(n,e);let r=e.length;t.forEach(nu);for(let c=0;c<t.length;c++)s.push(r),r+=t[c].length,iu(n,t[c]);const o=Rb.triangulate(n,s);for(let c=0;c<o.length;c+=3)a.push(o.slice(c,c+3));return a}}function nu(i){const e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function iu(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}class Il extends lo{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],a=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,a,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Il(e.radius,e.detail)}}class $r extends lo{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new $r(e.radius,e.detail)}}class As extends Bt{constructor(e=1,t=32,n=16,s=0,a=Math.PI*2,r=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:a,thetaStart:r,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(r+o,Math.PI);let l=0;const h=[],u=new G,d=new G,f=[],m=[],x=[],p=[];for(let A=0;A<=n;A++){const E=[],_=A/n;let g=0;A===0&&r===0?g=.5/t:A===n&&c===Math.PI&&(g=-.5/t);for(let B=0;B<=t;B++){const S=B/t;u.x=-e*Math.cos(s+S*a)*Math.sin(r+_*o),u.y=e*Math.cos(r+_*o),u.z=e*Math.sin(s+S*a)*Math.sin(r+_*o),m.push(u.x,u.y,u.z),d.copy(u).normalize(),x.push(d.x,d.y,d.z),p.push(S+g,1-_),E.push(l++)}h.push(E)}for(let A=0;A<n;A++)for(let E=0;E<t;E++){const _=h[A][E+1],g=h[A][E],B=h[A+1][E],S=h[A+1][E+1];(A!==0||r>0)&&f.push(_,g,S),(A!==n-1||c<Math.PI)&&f.push(g,B,S)}this.setIndex(f),this.setAttribute("position",new ht(m,3)),this.setAttribute("normal",new ht(x,3)),this.setAttribute("uv",new ht(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new As(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Tl extends Bt{constructor(e=1,t=.4,n=12,s=48,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:a},n=Math.floor(n),s=Math.floor(s);const r=[],o=[],c=[],l=[],h=new G,u=new G,d=new G;for(let f=0;f<=n;f++)for(let m=0;m<=s;m++){const x=m/s*a,p=f/n*Math.PI*2;u.x=(e+t*Math.cos(p))*Math.cos(x),u.y=(e+t*Math.cos(p))*Math.sin(x),u.z=t*Math.sin(p),o.push(u.x,u.y,u.z),h.x=e*Math.cos(x),h.y=e*Math.sin(x),d.subVectors(u,h).normalize(),c.push(d.x,d.y,d.z),l.push(m/s),l.push(f/n)}for(let f=1;f<=n;f++)for(let m=1;m<=s;m++){const x=(s+1)*f+m-1,p=(s+1)*(f-1)+m-1,A=(s+1)*(f-1)+m,E=(s+1)*f+m;r.push(x,p,E),r.push(p,A,E)}this.setIndex(r),this.setAttribute("position",new ht(o,3)),this.setAttribute("normal",new ht(c,3)),this.setAttribute("uv",new ht(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Tl(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Yb extends Zt{static get type(){return"RawShaderMaterial"}constructor(e){super(e),this.isRawShaderMaterial=!0}}class Es extends Jn{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new De(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new De(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=io,this.normalScale=new He(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Zn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class bi extends Es{static get type(){return"MeshPhysicalMaterial"}constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new He(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return hn(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new De(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new De(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new De(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Xb extends Jn{static get type(){return"MeshNormalMaterial"}constructor(e){super(),this.isMeshNormalMaterial=!0,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=io,this.normalScale=new He(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}class ct extends Jn{static get type(){return"MeshLambertMaterial"}constructor(e){super(),this.isMeshLambertMaterial=!0,this.color=new De(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new De(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=io,this.normalScale=new He(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Zn,this.combine=ll,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}function Tr(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Kb(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Jb(i){function e(s,a){return i[s]-i[a]}const t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function su(i,e,t){const n=i.length,s=new i.constructor(n);for(let a=0,r=0;r!==n;++a){const o=t[a]*e;for(let c=0;c!==e;++c)s[r++]=i[o+c]}return s}function Ed(i,e,t,n){let s=1,a=i[0];for(;a!==void 0&&a[n]===void 0;)a=i[s++];if(a===void 0)return;let r=a[n];if(r!==void 0)if(Array.isArray(r))do r=a[n],r!==void 0&&(e.push(a.time),t.push.apply(t,r)),a=i[s++];while(a!==void 0);else if(r.toArray!==void 0)do r=a[n],r!==void 0&&(e.push(a.time),r.toArray(t,t.length)),a=i[s++];while(a!==void 0);else do r=a[n],r!==void 0&&(e.push(a.time),t.push(r)),a=i[s++];while(a!==void 0)}class $a{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,s=t[n],a=t[n-1];n:{e:{let r;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<a)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(a=s,s=t[++n],e<s)break e}r=t.length;break t}if(!(e>=a)){const o=t[1];e<o&&(n=2,a=o);for(let c=n-2;;){if(a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=a,a=t[--n-1],e>=a)break e}r=n,n=0;break t}break n}for(;n<r;){const o=n+r>>>1;e<t[o]?r=o:n=o+1}if(s=t[n],a=t[n-1],a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,a,s)}return this.interpolate_(n,a,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,a=e*s;for(let r=0;r!==s;++r)t[r]=n[a+r];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Zb extends $a{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Hl,endingEnd:Hl}}intervalChanged_(e,t,n){const s=this.parameterPositions;let a=e-2,r=e+1,o=s[a],c=s[r];if(o===void 0)switch(this.getSettings_().endingStart){case Vl:a=e,o=2*t-n;break;case Wl:a=s.length-2,o=t+s[a]-s[a+1];break;default:a=e,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Vl:r=e,c=2*n-t;break;case Wl:r=1,c=n+s[1]-s[0];break;default:r=e-1,c=t}const l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-n),this._offsetPrev=a*h,this._offsetNext=r*h}interpolate_(e,t,n,s){const a=this.resultBuffer,r=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,m=(n-t)/(s-t),x=m*m,p=x*m,A=-d*p+2*d*x-d*m,E=(1+d)*p+(-1.5-2*d)*x+(-.5+d)*m+1,_=(-1-f)*p+(1.5+f)*x+.5*m,g=f*p-f*x;for(let B=0;B!==o;++B)a[B]=A*r[h+B]+E*r[l+B]+_*r[c+B]+g*r[u+B];return a}}class $b extends $a{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){const a=this.resultBuffer,r=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=(n-t)/(s-t),u=1-h;for(let d=0;d!==o;++d)a[d]=r[l+d]*u+r[c+d]*h;return a}}class ex extends $a{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}}class xi{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Tr(t,this.TimeBufferType),this.values=Tr(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Tr(e.times,Array),values:Tr(e.values,Array)};const s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new ex(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new $b(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Zb(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Va:t=this.InterpolantFactoryMethodDiscrete;break;case Wa:t=this.InterpolantFactoryMethodLinear;break;case po:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Va;case this.InterpolantFactoryMethodLinear:return Wa;case this.InterpolantFactoryMethodSmooth:return po}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){const n=this.times,s=n.length;let a=0,r=s-1;for(;a!==s&&n[a]<e;)++a;for(;r!==-1&&n[r]>t;)--r;if(++r,a!==0||r!==s){a>=r&&(r=Math.max(r,1),a=r-1);const o=this.getValueSize();this.times=n.slice(a,r),this.values=this.values.slice(a*o,r*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,s=this.values,a=n.length;a===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let r=null;for(let o=0;o!==a;o++){const c=n[o];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(r!==null&&r>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,c,r),e=!1;break}r=c}if(s!==void 0&&Kb(s))for(let o=0,c=s.length;o!==c;++o){const l=s[o];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===po,a=e.length-1;let r=1;for(let o=1;o<a;++o){let c=!1;const l=e[o],h=e[o+1];if(l!==h&&(o!==1||l!==e[0]))if(s)c=!0;else{const u=o*n,d=u-n,f=u+n;for(let m=0;m!==n;++m){const x=t[u+m];if(x!==t[d+m]||x!==t[f+m]){c=!0;break}}}if(c){if(o!==r){e[r]=e[o];const u=o*n,d=r*n;for(let f=0;f!==n;++f)t[d+f]=t[u+f]}++r}}if(a>0){e[r]=e[a];for(let o=a*n,c=r*n,l=0;l!==n;++l)t[c+l]=t[o+l];++r}return r!==e.length?(this.times=e.slice(0,r),this.values=t.slice(0,r*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}}xi.prototype.TimeBufferType=Float32Array;xi.prototype.ValueBufferType=Float32Array;xi.prototype.DefaultInterpolation=Wa;class da extends xi{constructor(e,t,n){super(e,t,n)}}da.prototype.ValueTypeName="bool";da.prototype.ValueBufferType=Array;da.prototype.DefaultInterpolation=Va;da.prototype.InterpolantFactoryMethodLinear=void 0;da.prototype.InterpolantFactoryMethodSmooth=void 0;class vd extends xi{}vd.prototype.ValueTypeName="color";class ra extends xi{}ra.prototype.ValueTypeName="number";class tx extends $a{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){const a=this.resultBuffer,r=this.sampleValues,o=this.valueSize,c=(n-t)/(s-t);let l=e*o;for(let h=l+o;l!==h;l+=4)Vt.slerpFlat(a,0,r,l-o,r,l,c);return a}}class oa extends xi{InterpolantFactoryMethodLinear(e){return new tx(this.times,this.values,this.getValueSize(),e)}}oa.prototype.ValueTypeName="quaternion";oa.prototype.InterpolantFactoryMethodSmooth=void 0;class fa extends xi{constructor(e,t,n){super(e,t,n)}}fa.prototype.ValueTypeName="string";fa.prototype.ValueBufferType=Array;fa.prototype.DefaultInterpolation=Va;fa.prototype.InterpolantFactoryMethodLinear=void 0;fa.prototype.InterpolantFactoryMethodSmooth=void 0;class ca extends xi{}ca.prototype.ValueTypeName="vector";class nx{constructor(e="",t=-1,n=[],s=Pf){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=oi(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,s=1/(e.fps||1);for(let r=0,o=n.length;r!==o;++r)t.push(sx(n[r]).scale(s));const a=new this(e.name,e.duration,t,e.blendMode);return a.uuid=e.uuid,a}static toJSON(e){const t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let a=0,r=n.length;a!==r;++a)t.push(xi.toJSON(n[a]));return s}static CreateFromMorphTargetSequence(e,t,n,s){const a=t.length,r=[];for(let o=0;o<a;o++){let c=[],l=[];c.push((o+a-1)%a,o,(o+1)%a),l.push(0,1,0);const h=Jb(c);c=su(c,1,h),l=su(l,1,h),!s&&c[0]===0&&(c.push(a),l.push(l[0])),r.push(new ra(".morphTargetInfluences["+t[o].name+"]",c,l).scale(1/n))}return new this(e,-1,r)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const s={},a=/^([\w-]*?)([\d]+)$/;for(let o=0,c=e.length;o<c;o++){const l=e[o],h=l.name.match(a);if(h&&h.length>1){const u=h[1];let d=s[u];d||(s[u]=d=[]),d.push(l)}}const r=[];for(const o in s)r.push(this.CreateFromMorphTargetSequence(o,s[o],t,n));return r}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(u,d,f,m,x){if(f.length!==0){const p=[],A=[];Ed(f,p,A,m),p.length!==0&&x.push(new u(d,p,A))}},s=[],a=e.name||"default",r=e.fps||30,o=e.blendMode;let c=e.length||-1;const l=e.hierarchy||[];for(let u=0;u<l.length;u++){const d=l[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let m;for(m=0;m<d.length;m++)if(d[m].morphTargets)for(let x=0;x<d[m].morphTargets.length;x++)f[d[m].morphTargets[x]]=-1;for(const x in f){const p=[],A=[];for(let E=0;E!==d[m].morphTargets.length;++E){const _=d[m];p.push(_.time),A.push(_.morphTarget===x?1:0)}s.push(new ra(".morphTargetInfluence["+x+"]",p,A))}c=f.length*r}else{const f=".bones["+t[u].name+"]";n(ca,f+".position",d,"pos",s),n(oa,f+".quaternion",d,"rot",s),n(ca,f+".scale",d,"scl",s)}}return s.length===0?null:new this(a,c,s,o)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,s=e.length;n!==s;++n){const a=this.tracks[n];t=Math.max(t,a.times[a.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function ix(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return ra;case"vector":case"vector2":case"vector3":case"vector4":return ca;case"color":return vd;case"quaternion":return oa;case"bool":case"boolean":return da;case"string":return fa}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function sx(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=ix(i.type);if(i.times===void 0){const t=[],n=[];Ed(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}const Ji={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class ax{constructor(e,t,n){const s=this;let a=!1,r=0,o=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){o++,a===!1&&s.onStart!==void 0&&s.onStart(h,r,o),a=!0},this.itemEnd=function(h){r++,s.onProgress!==void 0&&s.onProgress(h,r,o),r===o&&(a=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){const u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){const f=l[u],m=l[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return m}return null}}}const rx=new ax;class Ms{constructor(e){this.manager=e!==void 0?e:rx,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(s,a){n.load(e,s,t,a)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Ms.DEFAULT_MATERIAL_NAME="__DEFAULT";const Ci={};class ox extends Error{constructor(e,t){super(e),this.response=t}}class Na extends Ms{constructor(e){super(e)}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const a=Ji.get(e);if(a!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(a),this.manager.itemEnd(e)},0),a;if(Ci[e]!==void 0){Ci[e].push({onLoad:t,onProgress:n,onError:s});return}Ci[e]=[],Ci[e].push({onLoad:t,onProgress:n,onError:s});const r=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,c=this.responseType;fetch(r).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const h=Ci[e],u=l.body.getReader(),d=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),f=d?parseInt(d):0,m=f!==0;let x=0;const p=new ReadableStream({start(A){E();function E(){u.read().then(({done:_,value:g})=>{if(_)A.close();else{x+=g.byteLength;const B=new ProgressEvent("progress",{lengthComputable:m,loaded:x,total:f});for(let S=0,T=h.length;S<T;S++){const U=h[S];U.onProgress&&U.onProgress(B)}A.enqueue(g),E()}},_=>{A.error(_)})}}});return new Response(p)}else throw new ox(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return l.json();default:if(o===void 0)return l.text();{const u=/charset="?([^;"\s]*)"?/i.exec(o),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return l.arrayBuffer().then(m=>f.decode(m))}}}).then(l=>{Ji.add(e,l);const h=Ci[e];delete Ci[e];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onLoad&&f.onLoad(l)}}).catch(l=>{const h=Ci[e];if(h===void 0)throw this.manager.itemError(e),l;delete Ci[e];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onError&&f.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class cx extends Ms{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const a=this,r=Ji.get(e);if(r!==void 0)return a.manager.itemStart(e),setTimeout(function(){t&&t(r),a.manager.itemEnd(e)},0),r;const o=ja("img");function c(){h(),Ji.add(e,this),t&&t(this),a.manager.itemEnd(e)}function l(u){h(),s&&s(u),a.manager.itemError(e),a.manager.itemEnd(e)}function h(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),a.manager.itemStart(e),o.src=e,o}}class Bl extends Ms{constructor(e){super(e)}load(e,t,n,s){const a=new Xt,r=new cx(this.manager);return r.setCrossOrigin(this.crossOrigin),r.setPath(this.path),r.load(e,function(o){a.image=o,a.needsUpdate=!0,t!==void 0&&t(a)},n,s),a}}class uo extends Ot{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new De(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class au extends uo{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ot.DEFAULT_UP),this.updateMatrix(),this.groundColor=new De(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const jo=new $e,ru=new G,ou=new G;class Rl{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new He(512,512),this.map=null,this.mapPass=null,this.matrix=new $e,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new El,this._frameExtents=new He(1,1),this._viewportCount=1,this._viewports=[new vt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;ru.setFromMatrixPosition(e.matrixWorld),t.position.copy(ru),ou.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(ou),t.updateMatrixWorld(),jo.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(jo),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(jo)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class lx extends Rl{constructor(){super(new yn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=ia*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,a=e.distance||t.far;(n!==t.fov||s!==t.aspect||a!==t.far)&&(t.fov=n,t.aspect=s,t.far=a,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class hx extends uo{constructor(e,t,n=0,s=Math.PI/3,a=0,r=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ot.DEFAULT_UP),this.updateMatrix(),this.target=new Ot,this.distance=n,this.angle=s,this.penumbra=a,this.decay=r,this.map=null,this.shadow=new lx}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const cu=new $e,Ma=new G,qo=new G;class ux extends Rl{constructor(){super(new yn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new He(4,2),this._viewportCount=6,this._viewports=[new vt(2,1,1,1),new vt(0,1,1,1),new vt(3,1,1,1),new vt(1,1,1,1),new vt(3,0,1,1),new vt(1,0,1,1)],this._cubeDirections=[new G(1,0,0),new G(-1,0,0),new G(0,0,1),new G(0,0,-1),new G(0,1,0),new G(0,-1,0)],this._cubeUps=[new G(0,1,0),new G(0,1,0),new G(0,1,0),new G(0,1,0),new G(0,0,1),new G(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,s=this.matrix,a=e.distance||n.far;a!==n.far&&(n.far=a,n.updateProjectionMatrix()),Ma.setFromMatrixPosition(e.matrixWorld),n.position.copy(Ma),qo.copy(n.position),qo.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(qo),n.updateMatrixWorld(),s.makeTranslation(-Ma.x,-Ma.y,-Ma.z),cu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(cu)}}class dx extends uo{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new ux}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class fx extends Rl{constructor(){super(new ao(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Md extends uo{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ot.DEFAULT_UP),this.updateMatrix(),this.target=new Ot,this.shadow=new fx}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class ka{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,s=e.length;n<s;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class Ax extends Ms{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const a=this,r=Ji.get(e);if(r!==void 0){if(a.manager.itemStart(e),r.then){r.then(l=>{t&&t(l),a.manager.itemEnd(e)}).catch(l=>{s&&s(l)});return}return setTimeout(function(){t&&t(r),a.manager.itemEnd(e)},0),r}const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader;const c=fetch(e,o).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(a.options,{colorSpaceConversion:"none"}))}).then(function(l){return Ji.add(e,l),t&&t(l),a.manager.itemEnd(e),l}).catch(function(l){s&&s(l),Ji.remove(e),a.manager.itemError(e),a.manager.itemEnd(e)});Ji.add(e,c),a.manager.itemStart(e)}}class px{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=lu(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=lu();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function lu(){return performance.now()}const Dl="\\[\\]\\.:\\/",mx=new RegExp("["+Dl+"]","g"),Ll="[^"+Dl+"]",gx="[^"+Dl.replace("\\.","")+"]",bx=/((?:WC+[\/:])*)/.source.replace("WC",Ll),xx=/(WCOD+)?/.source.replace("WCOD",gx),_x=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ll),Ex=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ll),vx=new RegExp("^"+bx+xx+_x+Ex+"$"),Mx=["material","materials","bones","map"];class yx{constructor(e,t,n){const s=n||Tt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,a=n.length;s!==a;++s)n[s].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class Tt{constructor(e,t,n){this.path=t,this.parsedPath=n||Tt.parseTrackName(t),this.node=Tt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new Tt.Composite(e,t,n):new Tt(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(mx,"")}static parseTrackName(e){const t=vx.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){const a=n.nodeName.substring(s+1);Mx.indexOf(a)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=a)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(a){for(let r=0;r<a.length;r++){const o=a[r];if(o.name===t||o.uuid===t)return o;const c=n(o.children);if(c)return c}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let s=0,a=n.length;s!==a;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let s=0,a=n.length;s!==a;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let s=0,a=n.length;s!==a;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let s=0,a=n.length;s!==a;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,s=t.propertyName;let a=t.propertyIndex;if(e||(e=Tt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}const r=e[s];if(r===void 0){const l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(a!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[a]!==void 0&&(a=e.morphTargetDictionary[a])}c=this.BindingType.ArrayElement,this.resolvedProperty=r,this.propertyIndex=a}else r.fromArray!==void 0&&r.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=r):Array.isArray(r)?(c=this.BindingType.EntireArray,this.resolvedProperty=r):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Tt.Composite=yx;Tt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Tt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Tt.prototype.GetterByBindingType=[Tt.prototype._getValue_direct,Tt.prototype._getValue_array,Tt.prototype._getValue_arrayElement,Tt.prototype._getValue_toArray];Tt.prototype.SetterByBindingTypeAndVersioning=[[Tt.prototype._setValue_direct,Tt.prototype._setValue_direct_setNeedsUpdate,Tt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Tt.prototype._setValue_array,Tt.prototype._setValue_array_setNeedsUpdate,Tt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Tt.prototype._setValue_arrayElement,Tt.prototype._setValue_arrayElement_setNeedsUpdate,Tt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Tt.prototype._setValue_fromArray,Tt.prototype._setValue_fromArray_setNeedsUpdate,Tt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class hu{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(hn(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class wx extends vs{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ol}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ol);const uu={type:"change"},Pl={type:"start"},yd={type:"end"},Br=new Ja,du=new ji,Cx=Math.cos(70*Jt.DEG2RAD),$t=new G,In=2*Math.PI,Lt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Yo=1e-6;class Sx extends wx{constructor(e,t=null){super(e,t),this.state=Lt.NONE,this.enabled=!0,this.target=new G,this.cursor=new G,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Li.ROTATE,MIDDLE:Li.DOLLY,RIGHT:Li.PAN},this.touches={ONE:Xi.ROTATE,TWO:Xi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new G,this._lastQuaternion=new Vt,this._lastTargetPosition=new G,this._quat=new Vt().setFromUnitVectors(e.up,new G(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new hu,this._sphericalDelta=new hu,this._scale=1,this._panOffset=new G,this._rotateStart=new He,this._rotateEnd=new He,this._rotateDelta=new He,this._panStart=new He,this._panEnd=new He,this._panDelta=new He,this._dollyStart=new He,this._dollyEnd=new He,this._dollyDelta=new He,this._dollyDirection=new G,this._mouse=new He,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Tx.bind(this),this._onPointerDown=Ix.bind(this),this._onPointerUp=Bx.bind(this),this._onContextMenu=Nx.bind(this),this._onMouseWheel=Lx.bind(this),this._onKeyDown=Px.bind(this),this._onTouchStart=Ux.bind(this),this._onTouchMove=Fx.bind(this),this._onMouseDown=Rx.bind(this),this._onMouseMove=Dx.bind(this),this._interceptControlDown=kx.bind(this),this._interceptControlUp=Qx.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(uu),this.update(),this.state=Lt.NONE}update(e=null){const t=this.object.position;$t.copy(t).sub(this.target),$t.applyQuaternion(this._quat),this._spherical.setFromVector3($t),this.autoRotate&&this.state===Lt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=In:n>Math.PI&&(n-=In),s<-Math.PI?s+=In:s>Math.PI&&(s-=In),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let a=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const r=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),a=r!=this._spherical.radius}if($t.setFromSpherical(this._spherical),$t.applyQuaternion(this._quatInverse),t.copy(this.target).add($t),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let r=null;if(this.object.isPerspectiveCamera){const o=$t.length();r=this._clampDistance(o*this._scale);const c=o-r;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),a=!!c}else if(this.object.isOrthographicCamera){const o=new G(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),a=c!==this.object.zoom;const l=new G(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(o),this.object.updateMatrixWorld(),r=$t.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;r!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(r).add(this.object.position):(Br.origin.copy(this.object.position),Br.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Br.direction))<Cx?this.object.lookAt(this.target):(du.setFromNormalAndCoplanarPoint(this.object.up,this.target),Br.intersectPlane(du,this.target))))}else if(this.object.isOrthographicCamera){const r=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),r!==this.object.zoom&&(this.object.updateProjectionMatrix(),a=!0)}return this._scale=1,this._performCursorZoom=!1,a||this._lastPosition.distanceToSquared(this.object.position)>Yo||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Yo||this._lastTargetPosition.distanceToSquared(this.target)>Yo?(this.dispatchEvent(uu),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?In/60*this.autoRotateSpeed*e:In/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){$t.setFromMatrixColumn(t,0),$t.multiplyScalar(-e),this._panOffset.add($t)}_panUp(e,t){this.screenSpacePanning===!0?$t.setFromMatrixColumn(t,1):($t.setFromMatrixColumn(t,0),$t.crossVectors(this.object.up,$t)),$t.multiplyScalar(e),this._panOffset.add($t)}_pan(e,t){const n=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;$t.copy(s).sub(this.target);let a=$t.length();a*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*a/n.clientHeight,this.object.matrix),this._panUp(2*t*a/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),s=e-n.left,a=t-n.top,r=n.width,o=n.height;this._mouse.x=s/r*2-1,this._mouse.y=-(a/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(In*this._rotateDelta.x/t.clientHeight),this._rotateUp(In*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(In*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(-In*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(In*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(-In*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(n,s)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,a=Math.sqrt(n*n+s*s);this._dollyStart.set(0,a)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),s=.5*(e.pageX+n.x),a=.5*(e.pageY+n.y);this._rotateEnd.set(s,a)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(In*this._rotateDelta.x/t.clientHeight),this._rotateUp(In*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,a=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,a),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const r=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(r,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new He,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function Ix(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function Tx(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function Bx(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(yd),this.state=Lt.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function Rx(i){let e;switch(i.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Li.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=Lt.DOLLY;break;case Li.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Lt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Lt.ROTATE}break;case Li.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Lt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Lt.PAN}break;default:this.state=Lt.NONE}this.state!==Lt.NONE&&this.dispatchEvent(Pl)}function Dx(i){switch(this.state){case Lt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case Lt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case Lt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function Lx(i){this.enabled===!1||this.enableZoom===!1||this.state!==Lt.NONE||(i.preventDefault(),this.dispatchEvent(Pl),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(yd))}function Px(i){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(i)}function Ux(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case Xi.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=Lt.TOUCH_ROTATE;break;case Xi.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=Lt.TOUCH_PAN;break;default:this.state=Lt.NONE}break;case 2:switch(this.touches.TWO){case Xi.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=Lt.TOUCH_DOLLY_PAN;break;case Xi.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=Lt.TOUCH_DOLLY_ROTATE;break;default:this.state=Lt.NONE}break;default:this.state=Lt.NONE}this.state!==Lt.NONE&&this.dispatchEvent(Pl)}function Fx(i){switch(this._trackPointer(i),this.state){case Lt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case Lt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case Lt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case Lt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=Lt.NONE}}function Nx(i){this.enabled!==!1&&i.preventDefault()}function kx(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Qx(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}class Ox extends Sx{constructor(e,t){super(e,t),this.screenSpacePanning=!1,this.mouseButtons={LEFT:Li.PAN,MIDDLE:Li.DOLLY,RIGHT:Li.ROTATE},this.touches={ONE:Xi.PAN,TWO:Xi.DOLLY_ROTATE}}}function la(i,e=!1){const t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),a={},r={},o=i[0].morphTargetsRelative,c=new Bt;let l=0;for(let h=0;h<i.length;++h){const u=i[h];let d=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const f in u.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;a[f]===void 0&&(a[f]=[]),a[f].push(u.attributes[f]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const f in u.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;r[f]===void 0&&(r[f]=[]),r[f].push(u.morphAttributes[f])}if(e){let f;if(t)f=u.index.count;else if(u.attributes.position!==void 0)f=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,f,h),l+=f}}if(t){let h=0;const u=[];for(let d=0;d<i.length;++d){const f=i[d].index;for(let m=0;m<f.count;++m)u.push(f.getX(m)+h);h+=i[d].attributes.position.count}c.setIndex(u)}for(const h in a){const u=fu(a[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,u)}for(const h in r){const u=r[h][0].length;if(u===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let d=0;d<u;++d){const f=[];for(let x=0;x<r[h].length;++x)f.push(r[h][x][d]);const m=fu(f);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(m)}}return c}function fu(i){let e,t,n,s=-1,a=0;for(let l=0;l<i.length;++l){const h=i[l];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;a+=h.count*t}const r=new e(a),o=new Gt(r,t,n);let c=0;for(let l=0;l<i.length;++l){const h=i[l];if(h.isInterleavedBufferAttribute){const u=c/t;for(let d=0,f=h.count;d<f;d++)for(let m=0;m<t;m++){const x=h.getComponent(d,m);o.setComponent(d+u,m,x)}}else r.set(h.array,c);c+=h.count*t}return s!==void 0&&(o.gpuType=s),o}function Au(i,e){if(e===Uf)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===jc||e===$u){let t=i.getIndex();if(t===null){const r=[],o=i.getAttribute("position");if(o!==void 0){for(let c=0;c<o.count;c++)r.push(c);i.setIndex(r),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}const n=t.count-2,s=[];if(e===jc)for(let r=1;r<=n;r++)s.push(t.getX(0)),s.push(t.getX(r)),s.push(t.getX(r+1));else for(let r=0;r<n;r++)r%2===0?(s.push(t.getX(r)),s.push(t.getX(r+1)),s.push(t.getX(r+2))):(s.push(t.getX(r+2)),s.push(t.getX(r+1)),s.push(t.getX(r)));s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const a=i.clone();return a.setIndex(s),a.clearGroups(),a}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}const Qa={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class ys{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const Gx=new ao(-1,1,1,-1,0,1);class zx extends Bt{constructor(){super(),this.setAttribute("position",new ht([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new ht([0,2,0,0,2,0],2))}}const Hx=new zx;class fo{constructor(e){this._mesh=new lt(Hx,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Gx)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class Ao extends ys{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof Zt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Ai.clone(e.uniforms),this.material=new Zt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new fo(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class pu extends ys{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const s=e.getContext(),a=e.state;a.buffers.color.setMask(!1),a.buffers.depth.setMask(!1),a.buffers.color.setLocked(!0),a.buffers.depth.setLocked(!0);let r,o;this.inverse?(r=0,o=1):(r=1,o=0),a.buffers.stencil.setTest(!0),a.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),a.buffers.stencil.setFunc(s.ALWAYS,r,4294967295),a.buffers.stencil.setClear(o),a.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),a.buffers.color.setLocked(!1),a.buffers.depth.setLocked(!1),a.buffers.color.setMask(!0),a.buffers.depth.setMask(!0),a.buffers.stencil.setLocked(!1),a.buffers.stencil.setFunc(s.EQUAL,1,4294967295),a.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),a.buffers.stencil.setLocked(!0)}}class Vx extends ys{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class Wx{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const n=e.getSize(new He);this._width=n.width,this._height=n.height,t=new On(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:dn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Ao(Qa),this.copyPass.material.blending=ln,this.clock=new px}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let s=0,a=this.passes.length;s<a;s++){const r=this.passes[s];if(r.enabled!==!1){if(r.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),r.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),r.needsSwap){if(n){const o=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),c.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}pu!==void 0&&(r instanceof pu?n=!0:r instanceof Vx&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new He);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let a=0;a<this.passes.length;a++)this.passes[a].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class jx extends ys{constructor(e,t,n=null,s=null,a=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=a,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new De}render(e,t,n){const s=e.autoClear;e.autoClear=!1;let a,r;this.overrideMaterial!==null&&(r=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(a=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(a),this.overrideMaterial!==null&&(this.scene.overrideMaterial=r),e.autoClear=s}}const Rr={defines:{PERSPECTIVE_CAMERA:1,SAMPLES:16,NORMAL_VECTOR_TYPE:1,DEPTH_SWIZZLING:"x",SCREEN_SPACE_RADIUS:0,SCREEN_SPACE_RADIUS_SCALE:100,SCENE_CLIP_BOX:0},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new He},cameraNear:{value:null},cameraFar:{value:null},cameraProjectionMatrix:{value:new $e},cameraProjectionMatrixInverse:{value:new $e},cameraWorldMatrix:{value:new $e},radius:{value:.25},distanceExponent:{value:1},thickness:{value:1},distanceFallOff:{value:1},scale:{value:1},sceneBoxMin:{value:new G(-1,-1,-1)},sceneBoxMax:{value:new G(1,1,1)}},vertexShader:`

		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		varying vec2 vUv;
		uniform highp sampler2D tNormal;
		uniform highp sampler2D tDepth;
		uniform sampler2D tNoise;
		uniform vec2 resolution;
		uniform float cameraNear;
		uniform float cameraFar;
		uniform mat4 cameraProjectionMatrix;
		uniform mat4 cameraProjectionMatrixInverse;		
		uniform mat4 cameraWorldMatrix;
		uniform float radius;
		uniform float distanceExponent;
		uniform float thickness;
		uniform float distanceFallOff;
		uniform float scale;
		#if SCENE_CLIP_BOX == 1
			uniform vec3 sceneBoxMin;
			uniform vec3 sceneBoxMax;
		#endif
		
		#include <common>
		#include <packing>

		#ifndef FRAGMENT_OUTPUT
		#define FRAGMENT_OUTPUT vec4(vec3(ao), 1.)
		#endif

		vec3 getViewPosition(const in vec2 screenPosition, const in float depth) {
			vec4 clipSpacePosition = vec4(vec3(screenPosition, depth) * 2.0 - 1.0, 1.0);
			vec4 viewSpacePosition = cameraProjectionMatrixInverse * clipSpacePosition;
			return viewSpacePosition.xyz / viewSpacePosition.w;
		}

		float getDepth(const vec2 uv) {  
			return textureLod(tDepth, uv.xy, 0.0).DEPTH_SWIZZLING;
		}

		float fetchDepth(const ivec2 uv) {   
			return texelFetch(tDepth, uv.xy, 0).DEPTH_SWIZZLING;
		}

		float getViewZ(const in float depth) {
			#if PERSPECTIVE_CAMERA == 1
				return perspectiveDepthToViewZ(depth, cameraNear, cameraFar);
			#else
				return orthographicDepthToViewZ(depth, cameraNear, cameraFar);
			#endif
		}

		vec3 computeNormalFromDepth(const vec2 uv) {
			vec2 size = vec2(textureSize(tDepth, 0));
			ivec2 p = ivec2(uv * size);
			float c0 = fetchDepth(p);
			float l2 = fetchDepth(p - ivec2(2, 0));
			float l1 = fetchDepth(p - ivec2(1, 0));
			float r1 = fetchDepth(p + ivec2(1, 0));
			float r2 = fetchDepth(p + ivec2(2, 0));
			float b2 = fetchDepth(p - ivec2(0, 2));
			float b1 = fetchDepth(p - ivec2(0, 1));
			float t1 = fetchDepth(p + ivec2(0, 1));
			float t2 = fetchDepth(p + ivec2(0, 2));
			float dl = abs((2.0 * l1 - l2) - c0);
			float dr = abs((2.0 * r1 - r2) - c0);
			float db = abs((2.0 * b1 - b2) - c0);
			float dt = abs((2.0 * t1 - t2) - c0);
			vec3 ce = getViewPosition(uv, c0).xyz;
			vec3 dpdx = (dl < dr) ? ce - getViewPosition((uv - vec2(1.0 / size.x, 0.0)), l1).xyz : -ce + getViewPosition((uv + vec2(1.0 / size.x, 0.0)), r1).xyz;
			vec3 dpdy = (db < dt) ? ce - getViewPosition((uv - vec2(0.0, 1.0 / size.y)), b1).xyz : -ce + getViewPosition((uv + vec2(0.0, 1.0 / size.y)), t1).xyz;
			return normalize(cross(dpdx, dpdy));
		}

		vec3 getViewNormal(const vec2 uv) {
			#if NORMAL_VECTOR_TYPE == 2
				return normalize(textureLod(tNormal, uv, 0.).rgb);
			#elif NORMAL_VECTOR_TYPE == 1
				return unpackRGBToNormal(textureLod(tNormal, uv, 0.).rgb);
			#else
				return computeNormalFromDepth(uv);
			#endif
		}

		vec3 getSceneUvAndDepth(vec3 sampleViewPos) {
			vec4 sampleClipPos = cameraProjectionMatrix * vec4(sampleViewPos, 1.);
			vec2 sampleUv = sampleClipPos.xy / sampleClipPos.w * 0.5 + 0.5;
			float sampleSceneDepth = getDepth(sampleUv);
			return vec3(sampleUv, sampleSceneDepth);
		}
		
		void main() {
			float depth = getDepth(vUv.xy);
			if (depth >= 1.0) {
				discard;
				return;
			}
			vec3 viewPos = getViewPosition(vUv, depth);
			vec3 viewNormal = getViewNormal(vUv);

			float radiusToUse = radius;
			float distanceFalloffToUse = thickness;
			#if SCREEN_SPACE_RADIUS == 1
				float radiusScale = getViewPosition(vec2(0.5 + float(SCREEN_SPACE_RADIUS_SCALE) / resolution.x, 0.0), depth).x;
				radiusToUse *= radiusScale;
				distanceFalloffToUse *= radiusScale;
			#endif

			#if SCENE_CLIP_BOX == 1
				vec3 worldPos = (cameraWorldMatrix * vec4(viewPos, 1.0)).xyz;
				float boxDistance = length(max(vec3(0.0), max(sceneBoxMin - worldPos, worldPos - sceneBoxMax)));
				if (boxDistance > radiusToUse) {
					discard;
					return;
				}
			#endif
			
			vec2 noiseResolution = vec2(textureSize(tNoise, 0));
			vec2 noiseUv = vUv * resolution / noiseResolution;
			vec4 noiseTexel = textureLod(tNoise, noiseUv, 0.0);
			vec3 randomVec = noiseTexel.xyz * 2.0 - 1.0;
			vec3 tangent = normalize(vec3(randomVec.xy, 0.));
			vec3 bitangent = vec3(-tangent.y, tangent.x, 0.);
			mat3 kernelMatrix = mat3(tangent, bitangent, vec3(0., 0., 1.));

			const int DIRECTIONS = SAMPLES < 30 ? 3 : 5;
			const int STEPS = (SAMPLES + DIRECTIONS - 1) / DIRECTIONS;
			float ao = 0.0;
			for (int i = 0; i < DIRECTIONS; ++i) {
				
				float angle = float(i) / float(DIRECTIONS) * PI;
				vec4 sampleDir = vec4(cos(angle), sin(angle), 0., 0.5 + 0.5 * noiseTexel.w); 
				sampleDir.xyz = normalize(kernelMatrix * sampleDir.xyz);

				vec3 viewDir = normalize(-viewPos.xyz);
				vec3 sliceBitangent = normalize(cross(sampleDir.xyz, viewDir));
				vec3 sliceTangent = cross(sliceBitangent, viewDir);
				vec3 normalInSlice = normalize(viewNormal - sliceBitangent * dot(viewNormal, sliceBitangent));
				
				vec3 tangentToNormalInSlice = cross(normalInSlice, sliceBitangent);
				vec2 cosHorizons = vec2(dot(viewDir, tangentToNormalInSlice), dot(viewDir, -tangentToNormalInSlice));
				
				for (int j = 0; j < STEPS; ++j) {
					vec3 sampleViewOffset = sampleDir.xyz * radiusToUse * sampleDir.w * pow(float(j + 1) / float(STEPS), distanceExponent);	

					vec3 sampleSceneUvDepth = getSceneUvAndDepth(viewPos + sampleViewOffset);
					vec3 sampleSceneViewPos = getViewPosition(sampleSceneUvDepth.xy, sampleSceneUvDepth.z);
					vec3 viewDelta = sampleSceneViewPos - viewPos;
					if (abs(viewDelta.z) < thickness) {
						float sampleCosHorizon = dot(viewDir, normalize(viewDelta));
						cosHorizons.x += max(0., (sampleCosHorizon - cosHorizons.x) * mix(1., 2. / float(j + 2), distanceFallOff));
					}		

					sampleSceneUvDepth = getSceneUvAndDepth(viewPos - sampleViewOffset);
					sampleSceneViewPos = getViewPosition(sampleSceneUvDepth.xy, sampleSceneUvDepth.z);
					viewDelta = sampleSceneViewPos - viewPos;
					if (abs(viewDelta.z) < thickness) {
						float sampleCosHorizon = dot(viewDir, normalize(viewDelta));
						cosHorizons.y += max(0., (sampleCosHorizon - cosHorizons.y) * mix(1., 2. / float(j + 2), distanceFallOff));
					}
				}

				vec2 sinHorizons = sqrt(1. - cosHorizons * cosHorizons);
				float nx = dot(normalInSlice, sliceTangent);
				float ny = dot(normalInSlice, viewDir);
				float nxb = 1. / 2. * (acos(cosHorizons.y) - acos(cosHorizons.x) + sinHorizons.x * cosHorizons.x - sinHorizons.y * cosHorizons.y);
				float nyb = 1. / 2. * (2. - cosHorizons.x * cosHorizons.x - cosHorizons.y * cosHorizons.y);
				float occlusion = nx * nxb + ny * nyb;
				ao += occlusion;
			}

			ao = clamp(ao / float(DIRECTIONS), 0., 1.);		
		#if SCENE_CLIP_BOX == 1
			ao = mix(ao, 1., smoothstep(0., radiusToUse, boxDistance));
		#endif
			ao = pow(ao, scale);

			gl_FragColor = FRAGMENT_OUTPUT;
		}`},Dr={defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`
		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		uniform sampler2D tDepth;
		uniform float cameraNear;
		uniform float cameraFar;
		varying vec2 vUv;

		#include <packing>

		float getLinearDepth( const in vec2 screenPosition ) {
			#if PERSPECTIVE_CAMERA == 1
				float fragCoordZ = texture2D( tDepth, screenPosition ).x;
				float viewZ = perspectiveDepthToViewZ( fragCoordZ, cameraNear, cameraFar );
				return viewZToOrthographicDepth( viewZ, cameraNear, cameraFar );
			#else
				return texture2D( tDepth, screenPosition ).x;
			#endif
		}

		void main() {
			float depth = getLinearDepth( vUv );
			gl_FragColor = vec4( vec3( 1.0 - depth ), 1.0 );

		}`},Xo={uniforms:{tDiffuse:{value:null},intensity:{value:1}},vertexShader:`
		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		uniform float intensity;
		uniform sampler2D tDiffuse;
		varying vec2 vUv;

		void main() {
			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = vec4(mix(vec3(1.), texel.rgb, intensity), texel.a);
		}`};function qx(i=5){const e=Math.floor(i)%2===0?Math.floor(i)+1:Math.floor(i),t=Yx(e),n=t.length,s=new Uint8Array(n*4);for(let r=0;r<n;++r){const o=t[r],c=2*Math.PI*o/n,l=new G(Math.cos(c),Math.sin(c),0).normalize();s[r*4]=(l.x*.5+.5)*255,s[r*4+1]=(l.y*.5+.5)*255,s[r*4+2]=127,s[r*4+3]=255}const a=new Za(s,e,e);return a.wrapS=Gn,a.wrapT=Gn,a.needsUpdate=!0,a}function Yx(i){const e=Math.floor(i)%2===0?Math.floor(i)+1:Math.floor(i),t=e*e,n=Array(t).fill(0);let s=Math.floor(e/2),a=e-1;for(let r=1;r<=t;){if(s===-1&&a===e?(a=e-2,s=0):(a===e&&(a=0),s<0&&(s=e-1)),n[s*e+a]!==0){a-=2,s++;continue}else n[s*e+a]=r++;a++,s--}return n}const Lr={defines:{SAMPLES:16,SAMPLE_VECTORS:wd(16,2,1),NORMAL_VECTOR_TYPE:1,DEPTH_VALUE_SOURCE:0},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new He},cameraProjectionMatrixInverse:{value:new $e},lumaPhi:{value:5},depthPhi:{value:5},normalPhi:{value:5},radius:{value:4},index:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`

		varying vec2 vUv;

		uniform sampler2D tDiffuse;
		uniform sampler2D tNormal;
		uniform sampler2D tDepth;
		uniform sampler2D tNoise;
		uniform vec2 resolution;
		uniform mat4 cameraProjectionMatrixInverse;
		uniform float lumaPhi;
		uniform float depthPhi;
		uniform float normalPhi;
		uniform float radius;
		uniform int index;
		
		#include <common>
		#include <packing>

		#ifndef SAMPLE_LUMINANCE
		#define SAMPLE_LUMINANCE dot(vec3(0.2125, 0.7154, 0.0721), a)
		#endif

		#ifndef FRAGMENT_OUTPUT
		#define FRAGMENT_OUTPUT vec4(denoised, 1.)
		#endif

		float getLuminance(const in vec3 a) {
			return SAMPLE_LUMINANCE;
		}

		const vec3 poissonDisk[SAMPLES] = SAMPLE_VECTORS;

		vec3 getViewPosition(const in vec2 screenPosition, const in float depth) {
			vec4 clipSpacePosition = vec4(vec3(screenPosition, depth) * 2.0 - 1.0, 1.0);
			vec4 viewSpacePosition = cameraProjectionMatrixInverse * clipSpacePosition;
			return viewSpacePosition.xyz / viewSpacePosition.w;
		}
		
		float getDepth(const vec2 uv) {
		#if DEPTH_VALUE_SOURCE == 1    
			return textureLod(tDepth, uv.xy, 0.0).a;
		#else
			return textureLod(tDepth, uv.xy, 0.0).r;
		#endif
		}

		float fetchDepth(const ivec2 uv) {
			#if DEPTH_VALUE_SOURCE == 1    
				return texelFetch(tDepth, uv.xy, 0).a;
			#else
				return texelFetch(tDepth, uv.xy, 0).r;
			#endif
		}

		vec3 computeNormalFromDepth(const vec2 uv) {
			vec2 size = vec2(textureSize(tDepth, 0));
			ivec2 p = ivec2(uv * size);
			float c0 = fetchDepth(p);
			float l2 = fetchDepth(p - ivec2(2, 0));
			float l1 = fetchDepth(p - ivec2(1, 0));
			float r1 = fetchDepth(p + ivec2(1, 0));
			float r2 = fetchDepth(p + ivec2(2, 0));
			float b2 = fetchDepth(p - ivec2(0, 2));
			float b1 = fetchDepth(p - ivec2(0, 1));
			float t1 = fetchDepth(p + ivec2(0, 1));
			float t2 = fetchDepth(p + ivec2(0, 2));
			float dl = abs((2.0 * l1 - l2) - c0);
			float dr = abs((2.0 * r1 - r2) - c0);
			float db = abs((2.0 * b1 - b2) - c0);
			float dt = abs((2.0 * t1 - t2) - c0);
			vec3 ce = getViewPosition(uv, c0).xyz;
			vec3 dpdx = (dl < dr) ?  ce - getViewPosition((uv - vec2(1.0 / size.x, 0.0)), l1).xyz
									: -ce + getViewPosition((uv + vec2(1.0 / size.x, 0.0)), r1).xyz;
			vec3 dpdy = (db < dt) ?  ce - getViewPosition((uv - vec2(0.0, 1.0 / size.y)), b1).xyz
									: -ce + getViewPosition((uv + vec2(0.0, 1.0 / size.y)), t1).xyz;
			return normalize(cross(dpdx, dpdy));
		}

		vec3 getViewNormal(const vec2 uv) {
		#if NORMAL_VECTOR_TYPE == 2
			return normalize(textureLod(tNormal, uv, 0.).rgb);
		#elif NORMAL_VECTOR_TYPE == 1
			return unpackRGBToNormal(textureLod(tNormal, uv, 0.).rgb);
		#else
			return computeNormalFromDepth(uv);
		#endif
		}

		void denoiseSample(in vec3 center, in vec3 viewNormal, in vec3 viewPos, in vec2 sampleUv, inout vec3 denoised, inout float totalWeight) {
			vec4 sampleTexel = textureLod(tDiffuse, sampleUv, 0.0);
			float sampleDepth = getDepth(sampleUv);
			vec3 sampleNormal = getViewNormal(sampleUv);
			vec3 neighborColor = sampleTexel.rgb;
			vec3 viewPosSample = getViewPosition(sampleUv, sampleDepth);
			
			float normalDiff = dot(viewNormal, sampleNormal);
			float normalSimilarity = pow(max(normalDiff, 0.), normalPhi);
			float lumaDiff = abs(getLuminance(neighborColor) - getLuminance(center));
			float lumaSimilarity = max(1.0 - lumaDiff / lumaPhi, 0.0);
			float depthDiff = abs(dot(viewPos - viewPosSample, viewNormal));
			float depthSimilarity = max(1. - depthDiff / depthPhi, 0.);
			float w = lumaSimilarity * depthSimilarity * normalSimilarity;
		
			denoised += w * neighborColor;
			totalWeight += w;
		}
		
		void main() {
			float depth = getDepth(vUv.xy);	
			vec3 viewNormal = getViewNormal(vUv);	
			if (depth == 1. || dot(viewNormal, viewNormal) == 0.) {
				discard;
				return;
			}
			vec4 texel = textureLod(tDiffuse, vUv, 0.0);
			vec3 center = texel.rgb;
			vec3 viewPos = getViewPosition(vUv, depth);

			vec2 noiseResolution = vec2(textureSize(tNoise, 0));
			vec2 noiseUv = vUv * resolution / noiseResolution;
			vec4 noiseTexel = textureLod(tNoise, noiseUv, 0.0);
      		vec2 noiseVec = vec2(sin(noiseTexel[index % 4] * 2. * PI), cos(noiseTexel[index % 4] * 2. * PI));
    		mat2 rotationMatrix = mat2(noiseVec.x, -noiseVec.y, noiseVec.x, noiseVec.y);
		
			float totalWeight = 1.0;
			vec3 denoised = texel.rgb;
			for (int i = 0; i < SAMPLES; i++) {
				vec3 sampleDir = poissonDisk[i];
				vec2 offset = rotationMatrix * (sampleDir.xy * (1. + sampleDir.z * (radius - 1.)) / resolution);
				vec2 sampleUv = vUv + offset;
				denoiseSample(center, viewNormal, viewPos, sampleUv, denoised, totalWeight);
			}
		
			if (totalWeight > 0.) { 
				denoised /= totalWeight;
			}
			gl_FragColor = FRAGMENT_OUTPUT;
		}`};function wd(i,e,t){const n=Xx(i,e,t);let s="vec3[SAMPLES](";for(let a=0;a<i;a++){const r=n[a];s+=`vec3(${r.x}, ${r.y}, ${r.z})${a<i-1?",":")"}`}return s}function Xx(i,e,t){const n=[];for(let s=0;s<i;s++){const a=2*Math.PI*e*s/i,r=Math.pow(s/(i-1),t);n.push(new G(Math.cos(a),Math.sin(a),r))}return n}class Kx{constructor(e=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let t=0;t<256;t++)this.p[t]=Math.floor(e.random()*256);this.perm=[];for(let t=0;t<512;t++)this.perm[t]=this.p[t&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}dot(e,t,n){return e[0]*t+e[1]*n}dot3(e,t,n,s){return e[0]*t+e[1]*n+e[2]*s}dot4(e,t,n,s,a){return e[0]*t+e[1]*n+e[2]*s+e[3]*a}noise(e,t){let n,s,a;const r=.5*(Math.sqrt(3)-1),o=(e+t)*r,c=Math.floor(e+o),l=Math.floor(t+o),h=(3-Math.sqrt(3))/6,u=(c+l)*h,d=c-u,f=l-u,m=e-d,x=t-f;let p,A;m>x?(p=1,A=0):(p=0,A=1);const E=m-p+h,_=x-A+h,g=m-1+2*h,B=x-1+2*h,S=c&255,T=l&255,U=this.perm[S+this.perm[T]]%12,M=this.perm[S+p+this.perm[T+A]]%12,y=this.perm[S+1+this.perm[T+1]]%12;let L=.5-m*m-x*x;L<0?n=0:(L*=L,n=L*L*this.dot(this.grad3[U],m,x));let V=.5-E*E-_*_;V<0?s=0:(V*=V,s=V*V*this.dot(this.grad3[M],E,_));let te=.5-g*g-B*B;return te<0?a=0:(te*=te,a=te*te*this.dot(this.grad3[y],g,B)),70*(n+s+a)}noise3d(e,t,n){let s,a,r,o;const l=(e+t+n)*.3333333333333333,h=Math.floor(e+l),u=Math.floor(t+l),d=Math.floor(n+l),f=1/6,m=(h+u+d)*f,x=h-m,p=u-m,A=d-m,E=e-x,_=t-p,g=n-A;let B,S,T,U,M,y;E>=_?_>=g?(B=1,S=0,T=0,U=1,M=1,y=0):E>=g?(B=1,S=0,T=0,U=1,M=0,y=1):(B=0,S=0,T=1,U=1,M=0,y=1):_<g?(B=0,S=0,T=1,U=0,M=1,y=1):E<g?(B=0,S=1,T=0,U=0,M=1,y=1):(B=0,S=1,T=0,U=1,M=1,y=0);const L=E-B+f,V=_-S+f,te=g-T+f,Ae=E-U+2*f,ae=_-M+2*f,ce=g-y+2*f,se=E-1+3*f,J=_-1+3*f,fe=g-1+3*f,$=h&255,me=u&255,Ce=d&255,Me=this.perm[$+this.perm[me+this.perm[Ce]]]%12,ne=this.perm[$+B+this.perm[me+S+this.perm[Ce+T]]]%12,Ee=this.perm[$+U+this.perm[me+M+this.perm[Ce+y]]]%12,Te=this.perm[$+1+this.perm[me+1+this.perm[Ce+1]]]%12;let Se=.6-E*E-_*_-g*g;Se<0?s=0:(Se*=Se,s=Se*Se*this.dot3(this.grad3[Me],E,_,g));let Le=.6-L*L-V*V-te*te;Le<0?a=0:(Le*=Le,a=Le*Le*this.dot3(this.grad3[ne],L,V,te));let Fe=.6-Ae*Ae-ae*ae-ce*ce;Fe<0?r=0:(Fe*=Fe,r=Fe*Fe*this.dot3(this.grad3[Ee],Ae,ae,ce));let Ge=.6-se*se-J*J-fe*fe;return Ge<0?o=0:(Ge*=Ge,o=Ge*Ge*this.dot3(this.grad3[Te],se,J,fe)),32*(s+a+r+o)}noise4d(e,t,n,s){const a=this.grad4,r=this.simplex,o=this.perm,c=(Math.sqrt(5)-1)/4,l=(5-Math.sqrt(5))/20;let h,u,d,f,m;const x=(e+t+n+s)*c,p=Math.floor(e+x),A=Math.floor(t+x),E=Math.floor(n+x),_=Math.floor(s+x),g=(p+A+E+_)*l,B=p-g,S=A-g,T=E-g,U=_-g,M=e-B,y=t-S,L=n-T,V=s-U,te=M>y?32:0,Ae=M>L?16:0,ae=y>L?8:0,ce=M>V?4:0,se=y>V?2:0,J=L>V?1:0,fe=te+Ae+ae+ce+se+J,$=r[fe][0]>=3?1:0,me=r[fe][1]>=3?1:0,Ce=r[fe][2]>=3?1:0,Me=r[fe][3]>=3?1:0,ne=r[fe][0]>=2?1:0,Ee=r[fe][1]>=2?1:0,Te=r[fe][2]>=2?1:0,Se=r[fe][3]>=2?1:0,Le=r[fe][0]>=1?1:0,Fe=r[fe][1]>=1?1:0,Ge=r[fe][2]>=1?1:0,je=r[fe][3]>=1?1:0,w=M-$+l,Q=y-me+l,R=L-Ce+l,ee=V-Me+l,Y=M-ne+2*l,O=y-Ee+2*l,W=L-Te+2*l,j=V-Se+2*l,H=M-Le+3*l,v=y-Fe+3*l,b=L-Ge+3*l,C=V-je+3*l,P=M-1+4*l,I=y-1+4*l,k=L-1+4*l,F=V-1+4*l,N=p&255,K=A&255,de=E&255,ie=_&255,X=o[N+o[K+o[de+o[ie]]]]%32,pe=o[N+$+o[K+me+o[de+Ce+o[ie+Me]]]]%32,be=o[N+ne+o[K+Ee+o[de+Te+o[ie+Se]]]]%32,ge=o[N+Le+o[K+Fe+o[de+Ge+o[ie+je]]]]%32,Be=o[N+1+o[K+1+o[de+1+o[ie+1]]]]%32;let Re=.6-M*M-y*y-L*L-V*V;Re<0?h=0:(Re*=Re,h=Re*Re*this.dot4(a[X],M,y,L,V));let Qe=.6-w*w-Q*Q-R*R-ee*ee;Qe<0?u=0:(Qe*=Qe,u=Qe*Qe*this.dot4(a[pe],w,Q,R,ee));let q=.6-Y*Y-O*O-W*W-j*j;q<0?d=0:(q*=q,d=q*q*this.dot4(a[be],Y,O,W,j));let Ie=.6-H*H-v*v-b*b-C*C;Ie<0?f=0:(Ie*=Ie,f=Ie*Ie*this.dot4(a[ge],H,v,b,C));let le=.6-P*P-I*I-k*k-F*F;return le<0?m=0:(le*=le,m=le*le*this.dot4(a[Be],P,I,k,F)),27*(h+u+d+f+m)}}class ui extends ys{constructor(e,t,n,s,a,r,o){super(),this.width=n!==void 0?n:512,this.height=s!==void 0?s:512,this.clear=!0,this.camera=t,this.scene=e,this.output=0,this._renderGBuffer=!0,this._visibilityCache=new Map,this.blendIntensity=1,this.pdRings=2,this.pdRadiusExponent=2,this.pdSamples=16,this.gtaoNoiseTexture=qx(),this.pdNoiseTexture=this.generateNoise(),this.gtaoRenderTarget=new On(this.width,this.height,{type:dn}),this.pdRenderTarget=this.gtaoRenderTarget.clone(),this.gtaoMaterial=new Zt({defines:Object.assign({},Rr.defines),uniforms:Ai.clone(Rr.uniforms),vertexShader:Rr.vertexShader,fragmentShader:Rr.fragmentShader,blending:ln,depthTest:!1,depthWrite:!1}),this.gtaoMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.gtaoMaterial.uniforms.tNoise.value=this.gtaoNoiseTexture,this.gtaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.normalMaterial=new Xb,this.normalMaterial.blending=ln,this.pdMaterial=new Zt({defines:Object.assign({},Lr.defines),uniforms:Ai.clone(Lr.uniforms),vertexShader:Lr.vertexShader,fragmentShader:Lr.fragmentShader,depthTest:!1,depthWrite:!1}),this.pdMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.pdMaterial.uniforms.tNoise.value=this.pdNoiseTexture,this.pdMaterial.uniforms.resolution.value.set(this.width,this.height),this.pdMaterial.uniforms.lumaPhi.value=10,this.pdMaterial.uniforms.depthPhi.value=2,this.pdMaterial.uniforms.normalPhi.value=3,this.pdMaterial.uniforms.radius.value=8,this.depthRenderMaterial=new Zt({defines:Object.assign({},Dr.defines),uniforms:Ai.clone(Dr.uniforms),vertexShader:Dr.vertexShader,fragmentShader:Dr.fragmentShader,blending:ln}),this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new Zt({uniforms:Ai.clone(Qa.uniforms),vertexShader:Qa.vertexShader,fragmentShader:Qa.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:bc,blendDst:Sa,blendEquation:si,blendSrcAlpha:gc,blendDstAlpha:Sa,blendEquationAlpha:si}),this.blendMaterial=new Zt({uniforms:Ai.clone(Xo.uniforms),vertexShader:Xo.vertexShader,fragmentShader:Xo.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blending:ku,blendSrc:bc,blendDst:Sa,blendEquation:si,blendSrcAlpha:gc,blendDstAlpha:Sa,blendEquationAlpha:si}),this.fsQuad=new fo(null),this.originalClearColor=new De,this.setGBuffer(a?a.depthTexture:void 0,a?a.normalTexture:void 0),r!==void 0&&this.updateGtaoMaterial(r),o!==void 0&&this.updatePdMaterial(o)}dispose(){this.gtaoNoiseTexture.dispose(),this.pdNoiseTexture.dispose(),this.normalRenderTarget.dispose(),this.gtaoRenderTarget.dispose(),this.pdRenderTarget.dispose(),this.normalMaterial.dispose(),this.pdMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this.fsQuad.dispose()}get gtaoMap(){return this.pdRenderTarget.texture}setGBuffer(e,t){e!==void 0?(this.depthTexture=e,this.normalTexture=t,this._renderGBuffer=!1):(this.depthTexture=new Ml,this.depthTexture.format=xs,this.depthTexture.type=bs,this.normalRenderTarget=new On(this.width,this.height,{minFilter:An,magFilter:An,type:dn,depthTexture:this.depthTexture}),this.normalTexture=this.normalRenderTarget.texture,this._renderGBuffer=!0);const n=this.normalTexture?1:0,s=this.depthTexture===this.normalTexture?"w":"x";this.gtaoMaterial.defines.NORMAL_VECTOR_TYPE=n,this.gtaoMaterial.defines.DEPTH_SWIZZLING=s,this.gtaoMaterial.uniforms.tNormal.value=this.normalTexture,this.gtaoMaterial.uniforms.tDepth.value=this.depthTexture,this.pdMaterial.defines.NORMAL_VECTOR_TYPE=n,this.pdMaterial.defines.DEPTH_SWIZZLING=s,this.pdMaterial.uniforms.tNormal.value=this.normalTexture,this.pdMaterial.uniforms.tDepth.value=this.depthTexture,this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture}setSceneClipBox(e){e?(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX!==1,this.gtaoMaterial.defines.SCENE_CLIP_BOX=1,this.gtaoMaterial.uniforms.sceneBoxMin.value.copy(e.min),this.gtaoMaterial.uniforms.sceneBoxMax.value.copy(e.max)):(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX===0,this.gtaoMaterial.defines.SCENE_CLIP_BOX=0)}updateGtaoMaterial(e){e.radius!==void 0&&(this.gtaoMaterial.uniforms.radius.value=e.radius),e.distanceExponent!==void 0&&(this.gtaoMaterial.uniforms.distanceExponent.value=e.distanceExponent),e.thickness!==void 0&&(this.gtaoMaterial.uniforms.thickness.value=e.thickness),e.distanceFallOff!==void 0&&(this.gtaoMaterial.uniforms.distanceFallOff.value=e.distanceFallOff,this.gtaoMaterial.needsUpdate=!0),e.scale!==void 0&&(this.gtaoMaterial.uniforms.scale.value=e.scale),e.samples!==void 0&&e.samples!==this.gtaoMaterial.defines.SAMPLES&&(this.gtaoMaterial.defines.SAMPLES=e.samples,this.gtaoMaterial.needsUpdate=!0),e.screenSpaceRadius!==void 0&&(e.screenSpaceRadius?1:0)!==this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS&&(this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS=e.screenSpaceRadius?1:0,this.gtaoMaterial.needsUpdate=!0)}updatePdMaterial(e){let t=!1;e.lumaPhi!==void 0&&(this.pdMaterial.uniforms.lumaPhi.value=e.lumaPhi),e.depthPhi!==void 0&&(this.pdMaterial.uniforms.depthPhi.value=e.depthPhi),e.normalPhi!==void 0&&(this.pdMaterial.uniforms.normalPhi.value=e.normalPhi),e.radius!==void 0&&e.radius!==this.radius&&(this.pdMaterial.uniforms.radius.value=e.radius),e.radiusExponent!==void 0&&e.radiusExponent!==this.pdRadiusExponent&&(this.pdRadiusExponent=e.radiusExponent,t=!0),e.rings!==void 0&&e.rings!==this.pdRings&&(this.pdRings=e.rings,t=!0),e.samples!==void 0&&e.samples!==this.pdSamples&&(this.pdSamples=e.samples,t=!0),t&&(this.pdMaterial.defines.SAMPLES=this.pdSamples,this.pdMaterial.defines.SAMPLE_VECTORS=wd(this.pdSamples,this.pdRings,this.pdRadiusExponent),this.pdMaterial.needsUpdate=!0)}render(e,t,n){switch(this._renderGBuffer&&(this.overrideVisibility(),this.renderOverride(e,this.normalMaterial,this.normalRenderTarget,7829503,1),this.restoreVisibility()),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.gtaoMaterial.uniforms.cameraWorldMatrix.value.copy(this.camera.matrixWorld),this.renderPass(e,this.gtaoMaterial,this.gtaoRenderTarget,16777215,1),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.renderPass(e,this.pdMaterial,this.pdRenderTarget,16777215,1),this.output){case ui.OUTPUT.Off:break;case ui.OUTPUT.Diffuse:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=ln,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case ui.OUTPUT.AO:this.copyMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.copyMaterial.blending=ln,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case ui.OUTPUT.Denoise:this.copyMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.copyMaterial.blending=ln,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case ui.OUTPUT.Depth:this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.renderPass(e,this.depthRenderMaterial,this.renderToScreen?null:t);break;case ui.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=ln,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case ui.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=ln,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t),this.blendMaterial.uniforms.intensity.value=this.blendIntensity,this.blendMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.renderPass(e,this.blendMaterial,this.renderToScreen?null:t);break;default:console.warn("THREE.GTAOPass: Unknown output type.")}}renderPass(e,t,n,s,a){e.getClearColor(this.originalClearColor);const r=e.getClearAlpha(),o=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,s!=null&&(e.setClearColor(s),e.setClearAlpha(a||0),e.clear()),this.fsQuad.material=t,this.fsQuad.render(e),e.autoClear=o,e.setClearColor(this.originalClearColor),e.setClearAlpha(r)}renderOverride(e,t,n,s,a){e.getClearColor(this.originalClearColor);const r=e.getClearAlpha(),o=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,s=t.clearColor||s,a=t.clearAlpha||a,s!=null&&(e.setClearColor(s),e.setClearAlpha(a||0),e.clear()),this.scene.overrideMaterial=t,e.render(this.scene,this.camera),this.scene.overrideMaterial=null,e.autoClear=o,e.setClearColor(this.originalClearColor),e.setClearAlpha(r)}setSize(e,t){this.width=e,this.height=t,this.gtaoRenderTarget.setSize(e,t),this.normalRenderTarget.setSize(e,t),this.pdRenderTarget.setSize(e,t),this.gtaoMaterial.uniforms.resolution.value.set(e,t),this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.pdMaterial.uniforms.resolution.value.set(e,t),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse)}overrideVisibility(){const e=this.scene,t=this._visibilityCache;e.traverse(function(n){t.set(n,n.visible),(n.isPoints||n.isLine)&&(n.visible=!1)})}restoreVisibility(){const e=this.scene,t=this._visibilityCache;e.traverse(function(n){const s=t.get(n);n.visible=s}),t.clear()}generateNoise(e=64){const t=new Kx,n=e*e*4,s=new Uint8Array(n);for(let r=0;r<e;r++)for(let o=0;o<e;o++){const c=r,l=o;s[(r*e+o)*4]=(t.noise(c,l)*.5+.5)*255,s[(r*e+o)*4+1]=(t.noise(c+e,l)*.5+.5)*255,s[(r*e+o)*4+2]=(t.noise(c,l+e)*.5+.5)*255,s[(r*e+o)*4+3]=(t.noise(c+e,l+e)*.5+.5)*255}const a=new Za(s,e,e,sn,nn);return a.wrapS=Gn,a.wrapT=Gn,a.needsUpdate=!0,a}}ui.OUTPUT={Off:-1,Default:0,Diffuse:1,Depth:2,Normal:3,AO:4,Denoise:5};const Jx={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new De(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class ha extends ys{constructor(e,t,n,s){super(),this.strength=t!==void 0?t:1,this.radius=n,this.threshold=s,this.resolution=e!==void 0?new He(e.x,e.y):new He(256,256),this.clearColor=new De(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let a=Math.round(this.resolution.x/2),r=Math.round(this.resolution.y/2);this.renderTargetBright=new On(a,r,{type:dn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){const d=new On(a,r,{type:dn});d.texture.name="UnrealBloomPass.h"+u,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);const f=new On(a,r,{type:dn});f.texture.name="UnrealBloomPass.v"+u,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),a=Math.round(a/2),r=Math.round(r/2)}const o=Jx;this.highPassUniforms=Ai.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Zt({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];const c=[3,5,7,9,11];a=Math.round(this.resolution.x/2),r=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(c[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new He(1/a,1/r),a=Math.round(a/2),r=Math.round(r/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const l=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=l,this.bloomTintColors=[new G(1,1,1),new G(1,1,1),new G(1,1,1),new G(1,1,1),new G(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const h=Qa;this.copyUniforms=Ai.clone(h.uniforms),this.blendMaterial=new Zt({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:Ac,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new De,this.oldClearAlpha=1,this.basic=new Qn,this.fsQuad=new fo(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(n,s);for(let a=0;a<this.nMips;a++)this.renderTargetsHorizontal[a].setSize(n,s),this.renderTargetsVertical[a].setSize(n,s),this.separableBlurMaterials[a].uniforms.invSize.value=new He(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(e,t,n,s,a){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const r=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),a&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let o=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this.fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[c].uniforms.direction.value=ha.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[c]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=ha.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[c]),e.clear(),this.fsQuad.render(e),o=this.renderTargetsVertical[c];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,a&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=r}getSeperableBlurMaterial(e){const t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new Zt({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new He(.5,.5)},direction:{value:new He(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(e){return new Zt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}ha.BlurDirectionX=new He(1,0);ha.BlurDirectionY=new He(0,1);const Zx={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
	
		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class $x extends ys{constructor(){super();const e=Zx;this.uniforms=Ai.clone(e.uniforms),this.material=new Yb({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new fo(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},gt.getTransfer(this._outputColorSpace)===St&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Qu?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Ou?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Gu?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===hl?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===ul?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===zu&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class e_{constructor(e=4){this.pool=e,this.queue=[],this.workers=[],this.workersResolve=[],this.workerStatus=0}_initWorker(e){if(!this.workers[e]){const t=this.workerCreator();t.addEventListener("message",this._onMessage.bind(this,e)),this.workers[e]=t}}_getIdleWorker(){for(let e=0;e<this.pool;e++)if(!(this.workerStatus&1<<e))return e;return-1}_onMessage(e,t){const n=this.workersResolve[e];if(n&&n(t),this.queue.length){const{resolve:s,msg:a,transfer:r}=this.queue.shift();this.workersResolve[e]=s,this.workers[e].postMessage(a,r)}else this.workerStatus^=1<<e}setWorkerCreator(e){this.workerCreator=e}setWorkerLimit(e){this.pool=e}postMessage(e,t){return new Promise(n=>{const s=this._getIdleWorker();s!==-1?(this._initWorker(s),this.workerStatus|=1<<s,this.workersResolve[s]=n,this.workers[s].postMessage(e,t)):this.queue.push({resolve:n,msg:e,transfer:t})})}dispose(){this.workers.forEach(e=>e.terminate()),this.workersResolve.length=0,this.workers.length=0,this.queue.length=0,this.workerStatus=0}}const t_=0,mu=2,n_=1,gu=2,i_=0,s_=1,a_=10,r_=0,Cd=9,Sd=15,Id=16,Td=22,Bd=37,Rd=43,Dd=76,Ld=83,Pd=97,Ud=100,Fd=103,Nd=109,kd=165,Qd=166,Ul=1000066e3;class o_{constructor(){this.vkFormat=0,this.typeSize=1,this.pixelWidth=0,this.pixelHeight=0,this.pixelDepth=0,this.layerCount=0,this.faceCount=1,this.supercompressionScheme=0,this.levels=[],this.dataFormatDescriptor=[{vendorId:0,descriptorType:0,descriptorBlockSize:0,versionNumber:2,colorModel:0,colorPrimaries:1,transferFunction:2,flags:0,texelBlockDimension:[0,0,0,0],bytesPlane:[0,0,0,0,0,0,0,0],samples:[]}],this.keyValue={},this.globalData=null}}class ya{constructor(e,t,n,s){this._dataView=void 0,this._littleEndian=void 0,this._offset=void 0,this._dataView=new DataView(e.buffer,e.byteOffset+t,n),this._littleEndian=s,this._offset=0}_nextUint8(){const e=this._dataView.getUint8(this._offset);return this._offset+=1,e}_nextUint16(){const e=this._dataView.getUint16(this._offset,this._littleEndian);return this._offset+=2,e}_nextUint32(){const e=this._dataView.getUint32(this._offset,this._littleEndian);return this._offset+=4,e}_nextUint64(){const e=this._dataView.getUint32(this._offset,this._littleEndian)+4294967296*this._dataView.getUint32(this._offset+4,this._littleEndian);return this._offset+=8,e}_nextInt32(){const e=this._dataView.getInt32(this._offset,this._littleEndian);return this._offset+=4,e}_nextUint8Array(e){const t=new Uint8Array(this._dataView.buffer,this._dataView.byteOffset+this._offset,e);return this._offset+=e,t}_skip(e){return this._offset+=e,this}_scan(e,t){t===void 0&&(t=0);const n=this._offset;let s=0;for(;this._dataView.getUint8(this._offset)!==t&&s<e;)s++,this._offset++;return s<e&&this._offset++,new Uint8Array(this._dataView.buffer,this._dataView.byteOffset+n,s)}}const En=[171,75,84,88,32,50,48,187,13,10,26,10];function bu(i){return new TextDecoder().decode(i)}function c_(i){const e=new Uint8Array(i.buffer,i.byteOffset,En.length);if(e[0]!==En[0]||e[1]!==En[1]||e[2]!==En[2]||e[3]!==En[3]||e[4]!==En[4]||e[5]!==En[5]||e[6]!==En[6]||e[7]!==En[7]||e[8]!==En[8]||e[9]!==En[9]||e[10]!==En[10]||e[11]!==En[11])throw new Error("Missing KTX 2.0 identifier.");const t=new o_,n=17*Uint32Array.BYTES_PER_ELEMENT,s=new ya(i,En.length,n,!0);t.vkFormat=s._nextUint32(),t.typeSize=s._nextUint32(),t.pixelWidth=s._nextUint32(),t.pixelHeight=s._nextUint32(),t.pixelDepth=s._nextUint32(),t.layerCount=s._nextUint32(),t.faceCount=s._nextUint32();const a=s._nextUint32();t.supercompressionScheme=s._nextUint32();const r=s._nextUint32(),o=s._nextUint32(),c=s._nextUint32(),l=s._nextUint32(),h=s._nextUint64(),u=s._nextUint64(),d=new ya(i,En.length+n,3*a*8,!0);for(let se=0;se<a;se++)t.levels.push({levelData:new Uint8Array(i.buffer,i.byteOffset+d._nextUint64(),d._nextUint64()),uncompressedByteLength:d._nextUint64()});const f=new ya(i,r,o,!0),m={vendorId:f._skip(4)._nextUint16(),descriptorType:f._nextUint16(),versionNumber:f._nextUint16(),descriptorBlockSize:f._nextUint16(),colorModel:f._nextUint8(),colorPrimaries:f._nextUint8(),transferFunction:f._nextUint8(),flags:f._nextUint8(),texelBlockDimension:[f._nextUint8(),f._nextUint8(),f._nextUint8(),f._nextUint8()],bytesPlane:[f._nextUint8(),f._nextUint8(),f._nextUint8(),f._nextUint8(),f._nextUint8(),f._nextUint8(),f._nextUint8(),f._nextUint8()],samples:[]},x=(m.descriptorBlockSize/4-6)/4;for(let se=0;se<x;se++){const J={bitOffset:f._nextUint16(),bitLength:f._nextUint8(),channelType:f._nextUint8(),samplePosition:[f._nextUint8(),f._nextUint8(),f._nextUint8(),f._nextUint8()],sampleLower:-1/0,sampleUpper:1/0};64&J.channelType?(J.sampleLower=f._nextInt32(),J.sampleUpper=f._nextInt32()):(J.sampleLower=f._nextUint32(),J.sampleUpper=f._nextUint32()),m.samples[se]=J}t.dataFormatDescriptor.length=0,t.dataFormatDescriptor.push(m);const p=new ya(i,c,l,!0);for(;p._offset<l;){const se=p._nextUint32(),J=p._scan(se),fe=bu(J);if(t.keyValue[fe]=p._nextUint8Array(se-J.byteLength-1),fe.match(/^ktx/i)){const $=bu(t.keyValue[fe]);t.keyValue[fe]=$.substring(0,$.lastIndexOf("\0"))}p._skip(se%4?4-se%4:0)}if(u<=0)return t;const A=new ya(i,h,u,!0),E=A._nextUint16(),_=A._nextUint16(),g=A._nextUint32(),B=A._nextUint32(),S=A._nextUint32(),T=A._nextUint32(),U=[];for(let se=0;se<a;se++)U.push({imageFlags:A._nextUint32(),rgbSliceByteOffset:A._nextUint32(),rgbSliceByteLength:A._nextUint32(),alphaSliceByteOffset:A._nextUint32(),alphaSliceByteLength:A._nextUint32()});const M=h+A._offset,y=M+g,L=y+B,V=L+S,te=new Uint8Array(i.buffer,i.byteOffset+M,g),Ae=new Uint8Array(i.buffer,i.byteOffset+y,B),ae=new Uint8Array(i.buffer,i.byteOffset+L,S),ce=new Uint8Array(i.buffer,i.byteOffset+V,T);return t.globalData={endpointCount:E,selectorCount:_,imageDescs:U,endpointsData:te,selectorsData:Ae,tablesData:ae,extendedData:ce},t}let Ko,Ii,$c;const Jo={env:{emscripten_notify_memory_growth:function(i){$c=new Uint8Array(Ii.exports.memory.buffer)}}};class l_{init(){return Ko||(Ko=typeof fetch<"u"?fetch("data:application/wasm;base64,"+xu).then(e=>e.arrayBuffer()).then(e=>WebAssembly.instantiate(e,Jo)).then(this._init):WebAssembly.instantiate(Buffer.from(xu,"base64"),Jo).then(this._init),Ko)}_init(e){Ii=e.instance,Jo.env.emscripten_notify_memory_growth(0)}decode(e,t=0){if(!Ii)throw new Error("ZSTDDecoder: Await .init() before decoding.");const n=e.byteLength,s=Ii.exports.malloc(n);$c.set(e,s),t=t||Number(Ii.exports.ZSTD_findDecompressedSize(s,n));const a=Ii.exports.malloc(t),r=Ii.exports.ZSTD_decompress(a,t,s,n),o=$c.slice(a,a+r);return Ii.exports.free(s),Ii.exports.free(a),o}}const xu="AGFzbQEAAAABpQEVYAF/AX9gAn9/AGADf39/AX9gBX9/f39/AX9gAX8AYAJ/fwF/YAR/f39/AX9gA39/fwBgBn9/f39/fwF/YAd/f39/f39/AX9gAn9/AX5gAn5+AX5gAABgBX9/f39/AGAGf39/f39/AGAIf39/f39/f38AYAl/f39/f39/f38AYAABf2AIf39/f39/f38Bf2ANf39/f39/f39/f39/fwF/YAF/AX4CJwEDZW52H2Vtc2NyaXB0ZW5fbm90aWZ5X21lbW9yeV9ncm93dGgABANpaAEFAAAFAgEFCwACAQABAgIFBQcAAwABDgsBAQcAEhMHAAUBDAQEAAANBwQCAgYCBAgDAwMDBgEACQkHBgICAAYGAgQUBwYGAwIGAAMCAQgBBwUGCgoEEQAEBAEIAwgDBQgDEA8IAAcABAUBcAECAgUEAQCAAgYJAX8BQaCgwAILB2AHBm1lbW9yeQIABm1hbGxvYwAoBGZyZWUAJgxaU1REX2lzRXJyb3IAaBlaU1REX2ZpbmREZWNvbXByZXNzZWRTaXplAFQPWlNURF9kZWNvbXByZXNzAEoGX3N0YXJ0ACQJBwEAQQELASQKussBaA8AIAAgACgCBCABajYCBAsZACAAKAIAIAAoAgRBH3F0QQAgAWtBH3F2CwgAIABBiH9LC34BBH9BAyEBIAAoAgQiA0EgTQRAIAAoAggiASAAKAIQTwRAIAAQDQ8LIAAoAgwiAiABRgRAQQFBAiADQSBJGw8LIAAgASABIAJrIANBA3YiBCABIARrIAJJIgEbIgJrIgQ2AgggACADIAJBA3RrNgIEIAAgBCgAADYCAAsgAQsUAQF/IAAgARACIQIgACABEAEgAgv3AQECfyACRQRAIABCADcCACAAQQA2AhAgAEIANwIIQbh/DwsgACABNgIMIAAgAUEEajYCECACQQRPBEAgACABIAJqIgFBfGoiAzYCCCAAIAMoAAA2AgAgAUF/ai0AACIBBEAgAEEIIAEQFGs2AgQgAg8LIABBADYCBEF/DwsgACABNgIIIAAgAS0AACIDNgIAIAJBfmoiBEEBTQRAIARBAWtFBEAgACABLQACQRB0IANyIgM2AgALIAAgAS0AAUEIdCADajYCAAsgASACakF/ai0AACIBRQRAIABBADYCBEFsDwsgAEEoIAEQFCACQQN0ams2AgQgAgsWACAAIAEpAAA3AAAgACABKQAINwAICy8BAX8gAUECdEGgHWooAgAgACgCAEEgIAEgACgCBGprQR9xdnEhAiAAIAEQASACCyEAIAFCz9bTvtLHq9lCfiAAfEIfiUKHla+vmLbem55/fgsdAQF/IAAoAgggACgCDEYEfyAAKAIEQSBGBUEACwuCBAEDfyACQYDAAE8EQCAAIAEgAhBnIAAPCyAAIAJqIQMCQCAAIAFzQQNxRQRAAkAgAkEBSARAIAAhAgwBCyAAQQNxRQRAIAAhAgwBCyAAIQIDQCACIAEtAAA6AAAgAUEBaiEBIAJBAWoiAiADTw0BIAJBA3ENAAsLAkAgA0F8cSIEQcAASQ0AIAIgBEFAaiIFSw0AA0AgAiABKAIANgIAIAIgASgCBDYCBCACIAEoAgg2AgggAiABKAIMNgIMIAIgASgCEDYCECACIAEoAhQ2AhQgAiABKAIYNgIYIAIgASgCHDYCHCACIAEoAiA2AiAgAiABKAIkNgIkIAIgASgCKDYCKCACIAEoAiw2AiwgAiABKAIwNgIwIAIgASgCNDYCNCACIAEoAjg2AjggAiABKAI8NgI8IAFBQGshASACQUBrIgIgBU0NAAsLIAIgBE8NAQNAIAIgASgCADYCACABQQRqIQEgAkEEaiICIARJDQALDAELIANBBEkEQCAAIQIMAQsgA0F8aiIEIABJBEAgACECDAELIAAhAgNAIAIgAS0AADoAACACIAEtAAE6AAEgAiABLQACOgACIAIgAS0AAzoAAyABQQRqIQEgAkEEaiICIARNDQALCyACIANJBEADQCACIAEtAAA6AAAgAUEBaiEBIAJBAWoiAiADRw0ACwsgAAsMACAAIAEpAAA3AAALQQECfyAAKAIIIgEgACgCEEkEQEEDDwsgACAAKAIEIgJBB3E2AgQgACABIAJBA3ZrIgE2AgggACABKAAANgIAQQALDAAgACABKAIANgAAC/cCAQJ/AkAgACABRg0AAkAgASACaiAASwRAIAAgAmoiBCABSw0BCyAAIAEgAhALDwsgACABc0EDcSEDAkACQCAAIAFJBEAgAwRAIAAhAwwDCyAAQQNxRQRAIAAhAwwCCyAAIQMDQCACRQ0EIAMgAS0AADoAACABQQFqIQEgAkF/aiECIANBAWoiA0EDcQ0ACwwBCwJAIAMNACAEQQNxBEADQCACRQ0FIAAgAkF/aiICaiIDIAEgAmotAAA6AAAgA0EDcQ0ACwsgAkEDTQ0AA0AgACACQXxqIgJqIAEgAmooAgA2AgAgAkEDSw0ACwsgAkUNAgNAIAAgAkF/aiICaiABIAJqLQAAOgAAIAINAAsMAgsgAkEDTQ0AIAIhBANAIAMgASgCADYCACABQQRqIQEgA0EEaiEDIARBfGoiBEEDSw0ACyACQQNxIQILIAJFDQADQCADIAEtAAA6AAAgA0EBaiEDIAFBAWohASACQX9qIgINAAsLIAAL8wICAn8BfgJAIAJFDQAgACACaiIDQX9qIAE6AAAgACABOgAAIAJBA0kNACADQX5qIAE6AAAgACABOgABIANBfWogAToAACAAIAE6AAIgAkEHSQ0AIANBfGogAToAACAAIAE6AAMgAkEJSQ0AIABBACAAa0EDcSIEaiIDIAFB/wFxQYGChAhsIgE2AgAgAyACIARrQXxxIgRqIgJBfGogATYCACAEQQlJDQAgAyABNgIIIAMgATYCBCACQXhqIAE2AgAgAkF0aiABNgIAIARBGUkNACADIAE2AhggAyABNgIUIAMgATYCECADIAE2AgwgAkFwaiABNgIAIAJBbGogATYCACACQWhqIAE2AgAgAkFkaiABNgIAIAQgA0EEcUEYciIEayICQSBJDQAgAa0iBUIghiAFhCEFIAMgBGohAQNAIAEgBTcDGCABIAU3AxAgASAFNwMIIAEgBTcDACABQSBqIQEgAkFgaiICQR9LDQALCyAACy8BAn8gACgCBCAAKAIAQQJ0aiICLQACIQMgACACLwEAIAEgAi0AAxAIajYCACADCy8BAn8gACgCBCAAKAIAQQJ0aiICLQACIQMgACACLwEAIAEgAi0AAxAFajYCACADCx8AIAAgASACKAIEEAg2AgAgARAEGiAAIAJBCGo2AgQLCAAgAGdBH3MLugUBDX8jAEEQayIKJAACfyAEQQNNBEAgCkEANgIMIApBDGogAyAEEAsaIAAgASACIApBDGpBBBAVIgBBbCAAEAMbIAAgACAESxsMAQsgAEEAIAEoAgBBAXRBAmoQECENQVQgAygAACIGQQ9xIgBBCksNABogAiAAQQVqNgIAIAMgBGoiAkF8aiEMIAJBeWohDiACQXtqIRAgAEEGaiELQQQhBSAGQQR2IQRBICAAdCIAQQFyIQkgASgCACEPQQAhAiADIQYCQANAIAlBAkggAiAPS3JFBEAgAiEHAkAgCARAA0AgBEH//wNxQf//A0YEQCAHQRhqIQcgBiAQSQR/IAZBAmoiBigAACAFdgUgBUEQaiEFIARBEHYLIQQMAQsLA0AgBEEDcSIIQQNGBEAgBUECaiEFIARBAnYhBCAHQQNqIQcMAQsLIAcgCGoiByAPSw0EIAVBAmohBQNAIAIgB0kEQCANIAJBAXRqQQA7AQAgAkEBaiECDAELCyAGIA5LQQAgBiAFQQN1aiIHIAxLG0UEQCAHKAAAIAVBB3EiBXYhBAwCCyAEQQJ2IQQLIAYhBwsCfyALQX9qIAQgAEF/anEiBiAAQQF0QX9qIgggCWsiEUkNABogBCAIcSIEQQAgESAEIABIG2shBiALCyEIIA0gAkEBdGogBkF/aiIEOwEAIAlBASAGayAEIAZBAUgbayEJA0AgCSAASARAIABBAXUhACALQX9qIQsMAQsLAn8gByAOS0EAIAcgBSAIaiIFQQN1aiIGIAxLG0UEQCAFQQdxDAELIAUgDCIGIAdrQQN0awshBSACQQFqIQIgBEUhCCAGKAAAIAVBH3F2IQQMAQsLQWwgCUEBRyAFQSBKcg0BGiABIAJBf2o2AgAgBiAFQQdqQQN1aiADawwBC0FQCyEAIApBEGokACAACwkAQQFBBSAAGwsMACAAIAEoAAA2AAALqgMBCn8jAEHwAGsiCiQAIAJBAWohDiAAQQhqIQtBgIAEIAVBf2p0QRB1IQxBACECQQEhBkEBIAV0IglBf2oiDyEIA0AgAiAORkUEQAJAIAEgAkEBdCINai8BACIHQf//A0YEQCALIAhBA3RqIAI2AgQgCEF/aiEIQQEhBwwBCyAGQQAgDCAHQRB0QRB1ShshBgsgCiANaiAHOwEAIAJBAWohAgwBCwsgACAFNgIEIAAgBjYCACAJQQN2IAlBAXZqQQNqIQxBACEAQQAhBkEAIQIDQCAGIA5GBEADQAJAIAAgCUYNACAKIAsgAEEDdGoiASgCBCIGQQF0aiICIAIvAQAiAkEBajsBACABIAUgAhAUayIIOgADIAEgAiAIQf8BcXQgCWs7AQAgASAEIAZBAnQiAmooAgA6AAIgASACIANqKAIANgIEIABBAWohAAwBCwsFIAEgBkEBdGouAQAhDUEAIQcDQCAHIA1ORQRAIAsgAkEDdGogBjYCBANAIAIgDGogD3EiAiAISw0ACyAHQQFqIQcMAQsLIAZBAWohBgwBCwsgCkHwAGokAAsjAEIAIAEQCSAAhUKHla+vmLbem55/fkLj3MqV/M7y9YV/fAsQACAAQn43AwggACABNgIACyQBAX8gAARAIAEoAgQiAgRAIAEoAgggACACEQEADwsgABAmCwsfACAAIAEgAi8BABAINgIAIAEQBBogACACQQRqNgIEC0oBAX9BoCAoAgAiASAAaiIAQX9MBEBBiCBBMDYCAEF/DwsCQCAAPwBBEHRNDQAgABBmDQBBiCBBMDYCAEF/DwtBoCAgADYCACABC9cBAQh/Qbp/IQoCQCACKAIEIgggAigCACIJaiIOIAEgAGtLDQBBbCEKIAkgBCADKAIAIgtrSw0AIAAgCWoiBCACKAIIIgxrIQ0gACABQWBqIg8gCyAJQQAQKSADIAkgC2o2AgACQAJAIAwgBCAFa00EQCANIQUMAQsgDCAEIAZrSw0CIAcgDSAFayIAaiIBIAhqIAdNBEAgBCABIAgQDxoMAgsgBCABQQAgAGsQDyEBIAIgACAIaiIINgIEIAEgAGshBAsgBCAPIAUgCEEBECkLIA4hCgsgCgubAgEBfyMAQYABayINJAAgDSADNgJ8AkAgAkEDSwRAQX8hCQwBCwJAAkACQAJAIAJBAWsOAwADAgELIAZFBEBBuH8hCQwEC0FsIQkgBS0AACICIANLDQMgACAHIAJBAnQiAmooAgAgAiAIaigCABA7IAEgADYCAEEBIQkMAwsgASAJNgIAQQAhCQwCCyAKRQRAQWwhCQwCC0EAIQkgC0UgDEEZSHINAUEIIAR0QQhqIQBBACECA0AgAiAATw0CIAJBQGshAgwAAAsAC0FsIQkgDSANQfwAaiANQfgAaiAFIAYQFSICEAMNACANKAJ4IgMgBEsNACAAIA0gDSgCfCAHIAggAxAYIAEgADYCACACIQkLIA1BgAFqJAAgCQsLACAAIAEgAhALGgsQACAALwAAIAAtAAJBEHRyCy8AAn9BuH8gAUEISQ0AGkFyIAAoAAQiAEF3Sw0AGkG4fyAAQQhqIgAgACABSxsLCwkAIAAgATsAAAsDAAELigYBBX8gACAAKAIAIgVBfnE2AgBBACAAIAVBAXZqQYQgKAIAIgQgAEYbIQECQAJAIAAoAgQiAkUNACACKAIAIgNBAXENACACQQhqIgUgA0EBdkF4aiIDQQggA0EISxtnQR9zQQJ0QYAfaiIDKAIARgRAIAMgAigCDDYCAAsgAigCCCIDBEAgAyACKAIMNgIECyACKAIMIgMEQCADIAIoAgg2AgALIAIgAigCACAAKAIAQX5xajYCAEGEICEAAkACQCABRQ0AIAEgAjYCBCABKAIAIgNBAXENASADQQF2QXhqIgNBCCADQQhLG2dBH3NBAnRBgB9qIgMoAgAgAUEIakYEQCADIAEoAgw2AgALIAEoAggiAwRAIAMgASgCDDYCBAsgASgCDCIDBEAgAyABKAIINgIAQYQgKAIAIQQLIAIgAigCACABKAIAQX5xajYCACABIARGDQAgASABKAIAQQF2akEEaiEACyAAIAI2AgALIAIoAgBBAXZBeGoiAEEIIABBCEsbZ0Efc0ECdEGAH2oiASgCACEAIAEgBTYCACACIAA2AgwgAkEANgIIIABFDQEgACAFNgIADwsCQCABRQ0AIAEoAgAiAkEBcQ0AIAJBAXZBeGoiAkEIIAJBCEsbZ0Efc0ECdEGAH2oiAigCACABQQhqRgRAIAIgASgCDDYCAAsgASgCCCICBEAgAiABKAIMNgIECyABKAIMIgIEQCACIAEoAgg2AgBBhCAoAgAhBAsgACAAKAIAIAEoAgBBfnFqIgI2AgACQCABIARHBEAgASABKAIAQQF2aiAANgIEIAAoAgAhAgwBC0GEICAANgIACyACQQF2QXhqIgFBCCABQQhLG2dBH3NBAnRBgB9qIgIoAgAhASACIABBCGoiAjYCACAAIAE2AgwgAEEANgIIIAFFDQEgASACNgIADwsgBUEBdkF4aiIBQQggAUEISxtnQR9zQQJ0QYAfaiICKAIAIQEgAiAAQQhqIgI2AgAgACABNgIMIABBADYCCCABRQ0AIAEgAjYCAAsLDgAgAARAIABBeGoQJQsLgAIBA38CQCAAQQ9qQXhxQYQgKAIAKAIAQQF2ayICEB1Bf0YNAAJAQYQgKAIAIgAoAgAiAUEBcQ0AIAFBAXZBeGoiAUEIIAFBCEsbZ0Efc0ECdEGAH2oiASgCACAAQQhqRgRAIAEgACgCDDYCAAsgACgCCCIBBEAgASAAKAIMNgIECyAAKAIMIgFFDQAgASAAKAIINgIAC0EBIQEgACAAKAIAIAJBAXRqIgI2AgAgAkEBcQ0AIAJBAXZBeGoiAkEIIAJBCEsbZ0Efc0ECdEGAH2oiAygCACECIAMgAEEIaiIDNgIAIAAgAjYCDCAAQQA2AgggAkUNACACIAM2AgALIAELtwIBA38CQAJAIABBASAAGyICEDgiAA0AAkACQEGEICgCACIARQ0AIAAoAgAiA0EBcQ0AIAAgA0EBcjYCACADQQF2QXhqIgFBCCABQQhLG2dBH3NBAnRBgB9qIgEoAgAgAEEIakYEQCABIAAoAgw2AgALIAAoAggiAQRAIAEgACgCDDYCBAsgACgCDCIBBEAgASAAKAIINgIACyACECchAkEAIQFBhCAoAgAhACACDQEgACAAKAIAQX5xNgIAQQAPCyACQQ9qQXhxIgMQHSICQX9GDQIgAkEHakF4cSIAIAJHBEAgACACaxAdQX9GDQMLAkBBhCAoAgAiAUUEQEGAICAANgIADAELIAAgATYCBAtBhCAgADYCACAAIANBAXRBAXI2AgAMAQsgAEUNAQsgAEEIaiEBCyABC7kDAQJ/IAAgA2ohBQJAIANBB0wEQANAIAAgBU8NAiAAIAItAAA6AAAgAEEBaiEAIAJBAWohAgwAAAsACyAEQQFGBEACQCAAIAJrIgZBB00EQCAAIAItAAA6AAAgACACLQABOgABIAAgAi0AAjoAAiAAIAItAAM6AAMgAEEEaiACIAZBAnQiBkHAHmooAgBqIgIQFyACIAZB4B5qKAIAayECDAELIAAgAhAMCyACQQhqIQIgAEEIaiEACwJAAkACQAJAIAUgAU0EQCAAIANqIQEgBEEBRyAAIAJrQQ9Kcg0BA0AgACACEAwgAkEIaiECIABBCGoiACABSQ0ACwwFCyAAIAFLBEAgACEBDAQLIARBAUcgACACa0EPSnINASAAIQMgAiEEA0AgAyAEEAwgBEEIaiEEIANBCGoiAyABSQ0ACwwCCwNAIAAgAhAHIAJBEGohAiAAQRBqIgAgAUkNAAsMAwsgACEDIAIhBANAIAMgBBAHIARBEGohBCADQRBqIgMgAUkNAAsLIAIgASAAa2ohAgsDQCABIAVPDQEgASACLQAAOgAAIAFBAWohASACQQFqIQIMAAALAAsLQQECfyAAIAAoArjgASIDNgLE4AEgACgCvOABIQQgACABNgK84AEgACABIAJqNgK44AEgACABIAQgA2tqNgLA4AELpgEBAX8gACAAKALs4QEQFjYCyOABIABCADcD+OABIABCADcDuOABIABBwOABakIANwMAIABBqNAAaiIBQYyAgOAANgIAIABBADYCmOIBIABCADcDiOEBIABCAzcDgOEBIABBrNABakHgEikCADcCACAAQbTQAWpB6BIoAgA2AgAgACABNgIMIAAgAEGYIGo2AgggACAAQaAwajYCBCAAIABBEGo2AgALYQEBf0G4fyEDAkAgAUEDSQ0AIAIgABAhIgFBA3YiADYCCCACIAFBAXE2AgQgAiABQQF2QQNxIgM2AgACQCADQX9qIgFBAksNAAJAIAFBAWsOAgEAAgtBbA8LIAAhAwsgAwsMACAAIAEgAkEAEC4LiAQCA38CfiADEBYhBCAAQQBBKBAQIQAgBCACSwRAIAQPCyABRQRAQX8PCwJAAkAgA0EBRg0AIAEoAAAiBkGo6r5pRg0AQXYhAyAGQXBxQdDUtMIBRw0BQQghAyACQQhJDQEgAEEAQSgQECEAIAEoAAQhASAAQQE2AhQgACABrTcDAEEADwsgASACIAMQLyIDIAJLDQAgACADNgIYQXIhAyABIARqIgVBf2otAAAiAkEIcQ0AIAJBIHEiBkUEQEFwIQMgBS0AACIFQacBSw0BIAVBB3GtQgEgBUEDdkEKaq2GIgdCA4h+IAd8IQggBEEBaiEECyACQQZ2IQMgAkECdiEFAkAgAkEDcUF/aiICQQJLBEBBACECDAELAkACQAJAIAJBAWsOAgECAAsgASAEai0AACECIARBAWohBAwCCyABIARqLwAAIQIgBEECaiEEDAELIAEgBGooAAAhAiAEQQRqIQQLIAVBAXEhBQJ+AkACQAJAIANBf2oiA0ECTQRAIANBAWsOAgIDAQtCfyAGRQ0DGiABIARqMQAADAMLIAEgBGovAACtQoACfAwCCyABIARqKAAArQwBCyABIARqKQAACyEHIAAgBTYCICAAIAI2AhwgACAHNwMAQQAhAyAAQQA2AhQgACAHIAggBhsiBzcDCCAAIAdCgIAIIAdCgIAIVBs+AhALIAMLWwEBf0G4fyEDIAIQFiICIAFNBH8gACACakF/ai0AACIAQQNxQQJ0QaAeaigCACACaiAAQQZ2IgFBAnRBsB5qKAIAaiAAQSBxIgBFaiABRSAAQQV2cWoFQbh/CwsdACAAKAKQ4gEQWiAAQQA2AqDiASAAQgA3A5DiAQu1AwEFfyMAQZACayIKJABBuH8hBgJAIAVFDQAgBCwAACIIQf8BcSEHAkAgCEF/TARAIAdBgn9qQQF2IgggBU8NAkFsIQYgB0GBf2oiBUGAAk8NAiAEQQFqIQdBACEGA0AgBiAFTwRAIAUhBiAIIQcMAwUgACAGaiAHIAZBAXZqIgQtAABBBHY6AAAgACAGQQFyaiAELQAAQQ9xOgAAIAZBAmohBgwBCwAACwALIAcgBU8NASAAIARBAWogByAKEFMiBhADDQELIAYhBEEAIQYgAUEAQTQQECEJQQAhBQNAIAQgBkcEQCAAIAZqIggtAAAiAUELSwRAQWwhBgwDBSAJIAFBAnRqIgEgASgCAEEBajYCACAGQQFqIQZBASAILQAAdEEBdSAFaiEFDAILAAsLQWwhBiAFRQ0AIAUQFEEBaiIBQQxLDQAgAyABNgIAQQFBASABdCAFayIDEBQiAXQgA0cNACAAIARqIAFBAWoiADoAACAJIABBAnRqIgAgACgCAEEBajYCACAJKAIEIgBBAkkgAEEBcXINACACIARBAWo2AgAgB0EBaiEGCyAKQZACaiQAIAYLxhEBDH8jAEHwAGsiBSQAQWwhCwJAIANBCkkNACACLwAAIQogAi8AAiEJIAIvAAQhByAFQQhqIAQQDgJAIAMgByAJIApqakEGaiIMSQ0AIAUtAAohCCAFQdgAaiACQQZqIgIgChAGIgsQAw0BIAVBQGsgAiAKaiICIAkQBiILEAMNASAFQShqIAIgCWoiAiAHEAYiCxADDQEgBUEQaiACIAdqIAMgDGsQBiILEAMNASAAIAFqIg9BfWohECAEQQRqIQZBASELIAAgAUEDakECdiIDaiIMIANqIgIgA2oiDiEDIAIhBCAMIQcDQCALIAMgEElxBEAgACAGIAVB2ABqIAgQAkECdGoiCS8BADsAACAFQdgAaiAJLQACEAEgCS0AAyELIAcgBiAFQUBrIAgQAkECdGoiCS8BADsAACAFQUBrIAktAAIQASAJLQADIQogBCAGIAVBKGogCBACQQJ0aiIJLwEAOwAAIAVBKGogCS0AAhABIAktAAMhCSADIAYgBUEQaiAIEAJBAnRqIg0vAQA7AAAgBUEQaiANLQACEAEgDS0AAyENIAAgC2oiCyAGIAVB2ABqIAgQAkECdGoiAC8BADsAACAFQdgAaiAALQACEAEgAC0AAyEAIAcgCmoiCiAGIAVBQGsgCBACQQJ0aiIHLwEAOwAAIAVBQGsgBy0AAhABIActAAMhByAEIAlqIgkgBiAFQShqIAgQAkECdGoiBC8BADsAACAFQShqIAQtAAIQASAELQADIQQgAyANaiIDIAYgBUEQaiAIEAJBAnRqIg0vAQA7AAAgBUEQaiANLQACEAEgACALaiEAIAcgCmohByAEIAlqIQQgAyANLQADaiEDIAVB2ABqEA0gBUFAaxANciAFQShqEA1yIAVBEGoQDXJFIQsMAQsLIAQgDksgByACS3INAEFsIQsgACAMSw0BIAxBfWohCQNAQQAgACAJSSAFQdgAahAEGwRAIAAgBiAFQdgAaiAIEAJBAnRqIgovAQA7AAAgBUHYAGogCi0AAhABIAAgCi0AA2oiACAGIAVB2ABqIAgQAkECdGoiCi8BADsAACAFQdgAaiAKLQACEAEgACAKLQADaiEADAEFIAxBfmohCgNAIAVB2ABqEAQgACAKS3JFBEAgACAGIAVB2ABqIAgQAkECdGoiCS8BADsAACAFQdgAaiAJLQACEAEgACAJLQADaiEADAELCwNAIAAgCk0EQCAAIAYgBUHYAGogCBACQQJ0aiIJLwEAOwAAIAVB2ABqIAktAAIQASAAIAktAANqIQAMAQsLAkAgACAMTw0AIAAgBiAFQdgAaiAIEAIiAEECdGoiDC0AADoAACAMLQADQQFGBEAgBUHYAGogDC0AAhABDAELIAUoAlxBH0sNACAFQdgAaiAGIABBAnRqLQACEAEgBSgCXEEhSQ0AIAVBIDYCXAsgAkF9aiEMA0BBACAHIAxJIAVBQGsQBBsEQCAHIAYgBUFAayAIEAJBAnRqIgAvAQA7AAAgBUFAayAALQACEAEgByAALQADaiIAIAYgBUFAayAIEAJBAnRqIgcvAQA7AAAgBUFAayAHLQACEAEgACAHLQADaiEHDAEFIAJBfmohDANAIAVBQGsQBCAHIAxLckUEQCAHIAYgBUFAayAIEAJBAnRqIgAvAQA7AAAgBUFAayAALQACEAEgByAALQADaiEHDAELCwNAIAcgDE0EQCAHIAYgBUFAayAIEAJBAnRqIgAvAQA7AAAgBUFAayAALQACEAEgByAALQADaiEHDAELCwJAIAcgAk8NACAHIAYgBUFAayAIEAIiAEECdGoiAi0AADoAACACLQADQQFGBEAgBUFAayACLQACEAEMAQsgBSgCREEfSw0AIAVBQGsgBiAAQQJ0ai0AAhABIAUoAkRBIUkNACAFQSA2AkQLIA5BfWohAgNAQQAgBCACSSAFQShqEAQbBEAgBCAGIAVBKGogCBACQQJ0aiIALwEAOwAAIAVBKGogAC0AAhABIAQgAC0AA2oiACAGIAVBKGogCBACQQJ0aiIELwEAOwAAIAVBKGogBC0AAhABIAAgBC0AA2ohBAwBBSAOQX5qIQIDQCAFQShqEAQgBCACS3JFBEAgBCAGIAVBKGogCBACQQJ0aiIALwEAOwAAIAVBKGogAC0AAhABIAQgAC0AA2ohBAwBCwsDQCAEIAJNBEAgBCAGIAVBKGogCBACQQJ0aiIALwEAOwAAIAVBKGogAC0AAhABIAQgAC0AA2ohBAwBCwsCQCAEIA5PDQAgBCAGIAVBKGogCBACIgBBAnRqIgItAAA6AAAgAi0AA0EBRgRAIAVBKGogAi0AAhABDAELIAUoAixBH0sNACAFQShqIAYgAEECdGotAAIQASAFKAIsQSFJDQAgBUEgNgIsCwNAQQAgAyAQSSAFQRBqEAQbBEAgAyAGIAVBEGogCBACQQJ0aiIALwEAOwAAIAVBEGogAC0AAhABIAMgAC0AA2oiACAGIAVBEGogCBACQQJ0aiICLwEAOwAAIAVBEGogAi0AAhABIAAgAi0AA2ohAwwBBSAPQX5qIQIDQCAFQRBqEAQgAyACS3JFBEAgAyAGIAVBEGogCBACQQJ0aiIALwEAOwAAIAVBEGogAC0AAhABIAMgAC0AA2ohAwwBCwsDQCADIAJNBEAgAyAGIAVBEGogCBACQQJ0aiIALwEAOwAAIAVBEGogAC0AAhABIAMgAC0AA2ohAwwBCwsCQCADIA9PDQAgAyAGIAVBEGogCBACIgBBAnRqIgItAAA6AAAgAi0AA0EBRgRAIAVBEGogAi0AAhABDAELIAUoAhRBH0sNACAFQRBqIAYgAEECdGotAAIQASAFKAIUQSFJDQAgBUEgNgIUCyABQWwgBUHYAGoQCiAFQUBrEApxIAVBKGoQCnEgBUEQahAKcRshCwwJCwAACwALAAALAAsAAAsACwAACwALQWwhCwsgBUHwAGokACALC7UEAQ5/IwBBEGsiBiQAIAZBBGogABAOQVQhBQJAIARB3AtJDQAgBi0ABCEHIANB8ARqQQBB7AAQECEIIAdBDEsNACADQdwJaiIJIAggBkEIaiAGQQxqIAEgAhAxIhAQA0UEQCAGKAIMIgQgB0sNASADQdwFaiEPIANBpAVqIREgAEEEaiESIANBqAVqIQEgBCEFA0AgBSICQX9qIQUgCCACQQJ0aigCAEUNAAsgAkEBaiEOQQEhBQNAIAUgDk9FBEAgCCAFQQJ0IgtqKAIAIQwgASALaiAKNgIAIAVBAWohBSAKIAxqIQoMAQsLIAEgCjYCAEEAIQUgBigCCCELA0AgBSALRkUEQCABIAUgCWotAAAiDEECdGoiDSANKAIAIg1BAWo2AgAgDyANQQF0aiINIAw6AAEgDSAFOgAAIAVBAWohBQwBCwtBACEBIANBADYCqAUgBEF/cyAHaiEJQQEhBQNAIAUgDk9FBEAgCCAFQQJ0IgtqKAIAIQwgAyALaiABNgIAIAwgBSAJanQgAWohASAFQQFqIQUMAQsLIAcgBEEBaiIBIAJrIgRrQQFqIQgDQEEBIQUgBCAIT0UEQANAIAUgDk9FBEAgBUECdCIJIAMgBEE0bGpqIAMgCWooAgAgBHY2AgAgBUEBaiEFDAELCyAEQQFqIQQMAQsLIBIgByAPIAogESADIAIgARBkIAZBAToABSAGIAc6AAYgACAGKAIENgIACyAQIQULIAZBEGokACAFC8ENAQt/IwBB8ABrIgUkAEFsIQkCQCADQQpJDQAgAi8AACEKIAIvAAIhDCACLwAEIQYgBUEIaiAEEA4CQCADIAYgCiAMampBBmoiDUkNACAFLQAKIQcgBUHYAGogAkEGaiICIAoQBiIJEAMNASAFQUBrIAIgCmoiAiAMEAYiCRADDQEgBUEoaiACIAxqIgIgBhAGIgkQAw0BIAVBEGogAiAGaiADIA1rEAYiCRADDQEgACABaiIOQX1qIQ8gBEEEaiEGQQEhCSAAIAFBA2pBAnYiAmoiCiACaiIMIAJqIg0hAyAMIQQgCiECA0AgCSADIA9JcQRAIAYgBUHYAGogBxACQQF0aiIILQAAIQsgBUHYAGogCC0AARABIAAgCzoAACAGIAVBQGsgBxACQQF0aiIILQAAIQsgBUFAayAILQABEAEgAiALOgAAIAYgBUEoaiAHEAJBAXRqIggtAAAhCyAFQShqIAgtAAEQASAEIAs6AAAgBiAFQRBqIAcQAkEBdGoiCC0AACELIAVBEGogCC0AARABIAMgCzoAACAGIAVB2ABqIAcQAkEBdGoiCC0AACELIAVB2ABqIAgtAAEQASAAIAs6AAEgBiAFQUBrIAcQAkEBdGoiCC0AACELIAVBQGsgCC0AARABIAIgCzoAASAGIAVBKGogBxACQQF0aiIILQAAIQsgBUEoaiAILQABEAEgBCALOgABIAYgBUEQaiAHEAJBAXRqIggtAAAhCyAFQRBqIAgtAAEQASADIAs6AAEgA0ECaiEDIARBAmohBCACQQJqIQIgAEECaiEAIAkgBUHYAGoQDUVxIAVBQGsQDUVxIAVBKGoQDUVxIAVBEGoQDUVxIQkMAQsLIAQgDUsgAiAMS3INAEFsIQkgACAKSw0BIApBfWohCQNAIAVB2ABqEAQgACAJT3JFBEAgBiAFQdgAaiAHEAJBAXRqIggtAAAhCyAFQdgAaiAILQABEAEgACALOgAAIAYgBUHYAGogBxACQQF0aiIILQAAIQsgBUHYAGogCC0AARABIAAgCzoAASAAQQJqIQAMAQsLA0AgBUHYAGoQBCAAIApPckUEQCAGIAVB2ABqIAcQAkEBdGoiCS0AACEIIAVB2ABqIAktAAEQASAAIAg6AAAgAEEBaiEADAELCwNAIAAgCkkEQCAGIAVB2ABqIAcQAkEBdGoiCS0AACEIIAVB2ABqIAktAAEQASAAIAg6AAAgAEEBaiEADAELCyAMQX1qIQADQCAFQUBrEAQgAiAAT3JFBEAgBiAFQUBrIAcQAkEBdGoiCi0AACEJIAVBQGsgCi0AARABIAIgCToAACAGIAVBQGsgBxACQQF0aiIKLQAAIQkgBUFAayAKLQABEAEgAiAJOgABIAJBAmohAgwBCwsDQCAFQUBrEAQgAiAMT3JFBEAgBiAFQUBrIAcQAkEBdGoiAC0AACEKIAVBQGsgAC0AARABIAIgCjoAACACQQFqIQIMAQsLA0AgAiAMSQRAIAYgBUFAayAHEAJBAXRqIgAtAAAhCiAFQUBrIAAtAAEQASACIAo6AAAgAkEBaiECDAELCyANQX1qIQADQCAFQShqEAQgBCAAT3JFBEAgBiAFQShqIAcQAkEBdGoiAi0AACEKIAVBKGogAi0AARABIAQgCjoAACAGIAVBKGogBxACQQF0aiICLQAAIQogBUEoaiACLQABEAEgBCAKOgABIARBAmohBAwBCwsDQCAFQShqEAQgBCANT3JFBEAgBiAFQShqIAcQAkEBdGoiAC0AACECIAVBKGogAC0AARABIAQgAjoAACAEQQFqIQQMAQsLA0AgBCANSQRAIAYgBUEoaiAHEAJBAXRqIgAtAAAhAiAFQShqIAAtAAEQASAEIAI6AAAgBEEBaiEEDAELCwNAIAVBEGoQBCADIA9PckUEQCAGIAVBEGogBxACQQF0aiIALQAAIQIgBUEQaiAALQABEAEgAyACOgAAIAYgBUEQaiAHEAJBAXRqIgAtAAAhAiAFQRBqIAAtAAEQASADIAI6AAEgA0ECaiEDDAELCwNAIAVBEGoQBCADIA5PckUEQCAGIAVBEGogBxACQQF0aiIALQAAIQIgBUEQaiAALQABEAEgAyACOgAAIANBAWohAwwBCwsDQCADIA5JBEAgBiAFQRBqIAcQAkEBdGoiAC0AACECIAVBEGogAC0AARABIAMgAjoAACADQQFqIQMMAQsLIAFBbCAFQdgAahAKIAVBQGsQCnEgBUEoahAKcSAFQRBqEApxGyEJDAELQWwhCQsgBUHwAGokACAJC8oCAQR/IwBBIGsiBSQAIAUgBBAOIAUtAAIhByAFQQhqIAIgAxAGIgIQA0UEQCAEQQRqIQIgACABaiIDQX1qIQQDQCAFQQhqEAQgACAET3JFBEAgAiAFQQhqIAcQAkEBdGoiBi0AACEIIAVBCGogBi0AARABIAAgCDoAACACIAVBCGogBxACQQF0aiIGLQAAIQggBUEIaiAGLQABEAEgACAIOgABIABBAmohAAwBCwsDQCAFQQhqEAQgACADT3JFBEAgAiAFQQhqIAcQAkEBdGoiBC0AACEGIAVBCGogBC0AARABIAAgBjoAACAAQQFqIQAMAQsLA0AgACADT0UEQCACIAVBCGogBxACQQF0aiIELQAAIQYgBUEIaiAELQABEAEgACAGOgAAIABBAWohAAwBCwsgAUFsIAVBCGoQChshAgsgBUEgaiQAIAILtgMBCX8jAEEQayIGJAAgBkEANgIMIAZBADYCCEFUIQQCQAJAIANBQGsiDCADIAZBCGogBkEMaiABIAIQMSICEAMNACAGQQRqIAAQDiAGKAIMIgcgBi0ABEEBaksNASAAQQRqIQogBkEAOgAFIAYgBzoABiAAIAYoAgQ2AgAgB0EBaiEJQQEhBANAIAQgCUkEQCADIARBAnRqIgEoAgAhACABIAU2AgAgACAEQX9qdCAFaiEFIARBAWohBAwBCwsgB0EBaiEHQQAhBSAGKAIIIQkDQCAFIAlGDQEgAyAFIAxqLQAAIgRBAnRqIgBBASAEdEEBdSILIAAoAgAiAWoiADYCACAHIARrIQhBACEEAkAgC0EDTQRAA0AgBCALRg0CIAogASAEakEBdGoiACAIOgABIAAgBToAACAEQQFqIQQMAAALAAsDQCABIABPDQEgCiABQQF0aiIEIAg6AAEgBCAFOgAAIAQgCDoAAyAEIAU6AAIgBCAIOgAFIAQgBToABCAEIAg6AAcgBCAFOgAGIAFBBGohAQwAAAsACyAFQQFqIQUMAAALAAsgAiEECyAGQRBqJAAgBAutAQECfwJAQYQgKAIAIABHIAAoAgBBAXYiAyABa0F4aiICQXhxQQhHcgR/IAIFIAMQJ0UNASACQQhqC0EQSQ0AIAAgACgCACICQQFxIAAgAWpBD2pBeHEiASAAa0EBdHI2AgAgASAANgIEIAEgASgCAEEBcSAAIAJBAXZqIAFrIgJBAXRyNgIAQYQgIAEgAkH/////B3FqQQRqQYQgKAIAIABGGyABNgIAIAEQJQsLygIBBX8CQAJAAkAgAEEIIABBCEsbZ0EfcyAAaUEBR2oiAUEESSAAIAF2cg0AIAFBAnRB/B5qKAIAIgJFDQADQCACQXhqIgMoAgBBAXZBeGoiBSAATwRAIAIgBUEIIAVBCEsbZ0Efc0ECdEGAH2oiASgCAEYEQCABIAIoAgQ2AgALDAMLIARBHksNASAEQQFqIQQgAigCBCICDQALC0EAIQMgAUEgTw0BA0AgAUECdEGAH2ooAgAiAkUEQCABQR5LIQIgAUEBaiEBIAJFDQEMAwsLIAIgAkF4aiIDKAIAQQF2QXhqIgFBCCABQQhLG2dBH3NBAnRBgB9qIgEoAgBGBEAgASACKAIENgIACwsgAigCACIBBEAgASACKAIENgIECyACKAIEIgEEQCABIAIoAgA2AgALIAMgAygCAEEBcjYCACADIAAQNwsgAwvhCwINfwV+IwBB8ABrIgckACAHIAAoAvDhASIINgJcIAEgAmohDSAIIAAoAoDiAWohDwJAAkAgBUUEQCABIQQMAQsgACgCxOABIRAgACgCwOABIREgACgCvOABIQ4gAEEBNgKM4QFBACEIA0AgCEEDRwRAIAcgCEECdCICaiAAIAJqQazQAWooAgA2AkQgCEEBaiEIDAELC0FsIQwgB0EYaiADIAQQBhADDQEgB0EsaiAHQRhqIAAoAgAQEyAHQTRqIAdBGGogACgCCBATIAdBPGogB0EYaiAAKAIEEBMgDUFgaiESIAEhBEEAIQwDQCAHKAIwIAcoAixBA3RqKQIAIhRCEIinQf8BcSEIIAcoAkAgBygCPEEDdGopAgAiFUIQiKdB/wFxIQsgBygCOCAHKAI0QQN0aikCACIWQiCIpyEJIBVCIIghFyAUQiCIpyECAkAgFkIQiKdB/wFxIgNBAk8EQAJAIAZFIANBGUlyRQRAIAkgB0EYaiADQSAgBygCHGsiCiAKIANLGyIKEAUgAyAKayIDdGohCSAHQRhqEAQaIANFDQEgB0EYaiADEAUgCWohCQwBCyAHQRhqIAMQBSAJaiEJIAdBGGoQBBoLIAcpAkQhGCAHIAk2AkQgByAYNwNIDAELAkAgA0UEQCACBEAgBygCRCEJDAMLIAcoAkghCQwBCwJAAkAgB0EYakEBEAUgCSACRWpqIgNBA0YEQCAHKAJEQX9qIgMgA0VqIQkMAQsgA0ECdCAHaigCRCIJIAlFaiEJIANBAUYNAQsgByAHKAJINgJMCwsgByAHKAJENgJIIAcgCTYCRAsgF6chAyALBEAgB0EYaiALEAUgA2ohAwsgCCALakEUTwRAIAdBGGoQBBoLIAgEQCAHQRhqIAgQBSACaiECCyAHQRhqEAQaIAcgB0EYaiAUQhiIp0H/AXEQCCAUp0H//wNxajYCLCAHIAdBGGogFUIYiKdB/wFxEAggFadB//8DcWo2AjwgB0EYahAEGiAHIAdBGGogFkIYiKdB/wFxEAggFqdB//8DcWo2AjQgByACNgJgIAcoAlwhCiAHIAk2AmggByADNgJkAkACQAJAIAQgAiADaiILaiASSw0AIAIgCmoiEyAPSw0AIA0gBGsgC0Egak8NAQsgByAHKQNoNwMQIAcgBykDYDcDCCAEIA0gB0EIaiAHQdwAaiAPIA4gESAQEB4hCwwBCyACIARqIQggBCAKEAcgAkERTwRAIARBEGohAgNAIAIgCkEQaiIKEAcgAkEQaiICIAhJDQALCyAIIAlrIQIgByATNgJcIAkgCCAOa0sEQCAJIAggEWtLBEBBbCELDAILIBAgAiAOayICaiIKIANqIBBNBEAgCCAKIAMQDxoMAgsgCCAKQQAgAmsQDyEIIAcgAiADaiIDNgJkIAggAmshCCAOIQILIAlBEE8EQCADIAhqIQMDQCAIIAIQByACQRBqIQIgCEEQaiIIIANJDQALDAELAkAgCUEHTQRAIAggAi0AADoAACAIIAItAAE6AAEgCCACLQACOgACIAggAi0AAzoAAyAIQQRqIAIgCUECdCIDQcAeaigCAGoiAhAXIAIgA0HgHmooAgBrIQIgBygCZCEDDAELIAggAhAMCyADQQlJDQAgAyAIaiEDIAhBCGoiCCACQQhqIgJrQQ9MBEADQCAIIAIQDCACQQhqIQIgCEEIaiIIIANJDQAMAgALAAsDQCAIIAIQByACQRBqIQIgCEEQaiIIIANJDQALCyAHQRhqEAQaIAsgDCALEAMiAhshDCAEIAQgC2ogAhshBCAFQX9qIgUNAAsgDBADDQFBbCEMIAdBGGoQBEECSQ0BQQAhCANAIAhBA0cEQCAAIAhBAnQiAmpBrNABaiACIAdqKAJENgIAIAhBAWohCAwBCwsgBygCXCEIC0G6fyEMIA8gCGsiACANIARrSw0AIAQEfyAEIAggABALIABqBUEACyABayEMCyAHQfAAaiQAIAwLkRcCFn8FfiMAQdABayIHJAAgByAAKALw4QEiCDYCvAEgASACaiESIAggACgCgOIBaiETAkACQCAFRQRAIAEhAwwBCyAAKALE4AEhESAAKALA4AEhFSAAKAK84AEhDyAAQQE2AozhAUEAIQgDQCAIQQNHBEAgByAIQQJ0IgJqIAAgAmpBrNABaigCADYCVCAIQQFqIQgMAQsLIAcgETYCZCAHIA82AmAgByABIA9rNgJoQWwhECAHQShqIAMgBBAGEAMNASAFQQQgBUEESBshFyAHQTxqIAdBKGogACgCABATIAdBxABqIAdBKGogACgCCBATIAdBzABqIAdBKGogACgCBBATQQAhBCAHQeAAaiEMIAdB5ABqIQoDQCAHQShqEARBAksgBCAXTnJFBEAgBygCQCAHKAI8QQN0aikCACIdQhCIp0H/AXEhCyAHKAJQIAcoAkxBA3RqKQIAIh5CEIinQf8BcSEJIAcoAkggBygCREEDdGopAgAiH0IgiKchCCAeQiCIISAgHUIgiKchAgJAIB9CEIinQf8BcSIDQQJPBEACQCAGRSADQRlJckUEQCAIIAdBKGogA0EgIAcoAixrIg0gDSADSxsiDRAFIAMgDWsiA3RqIQggB0EoahAEGiADRQ0BIAdBKGogAxAFIAhqIQgMAQsgB0EoaiADEAUgCGohCCAHQShqEAQaCyAHKQJUISEgByAINgJUIAcgITcDWAwBCwJAIANFBEAgAgRAIAcoAlQhCAwDCyAHKAJYIQgMAQsCQAJAIAdBKGpBARAFIAggAkVqaiIDQQNGBEAgBygCVEF/aiIDIANFaiEIDAELIANBAnQgB2ooAlQiCCAIRWohCCADQQFGDQELIAcgBygCWDYCXAsLIAcgBygCVDYCWCAHIAg2AlQLICCnIQMgCQRAIAdBKGogCRAFIANqIQMLIAkgC2pBFE8EQCAHQShqEAQaCyALBEAgB0EoaiALEAUgAmohAgsgB0EoahAEGiAHIAcoAmggAmoiCSADajYCaCAKIAwgCCAJSxsoAgAhDSAHIAdBKGogHUIYiKdB/wFxEAggHadB//8DcWo2AjwgByAHQShqIB5CGIinQf8BcRAIIB6nQf//A3FqNgJMIAdBKGoQBBogB0EoaiAfQhiIp0H/AXEQCCEOIAdB8ABqIARBBHRqIgsgCSANaiAIazYCDCALIAg2AgggCyADNgIEIAsgAjYCACAHIA4gH6dB//8DcWo2AkQgBEEBaiEEDAELCyAEIBdIDQEgEkFgaiEYIAdB4ABqIRogB0HkAGohGyABIQMDQCAHQShqEARBAksgBCAFTnJFBEAgBygCQCAHKAI8QQN0aikCACIdQhCIp0H/AXEhCyAHKAJQIAcoAkxBA3RqKQIAIh5CEIinQf8BcSEIIAcoAkggBygCREEDdGopAgAiH0IgiKchCSAeQiCIISAgHUIgiKchDAJAIB9CEIinQf8BcSICQQJPBEACQCAGRSACQRlJckUEQCAJIAdBKGogAkEgIAcoAixrIgogCiACSxsiChAFIAIgCmsiAnRqIQkgB0EoahAEGiACRQ0BIAdBKGogAhAFIAlqIQkMAQsgB0EoaiACEAUgCWohCSAHQShqEAQaCyAHKQJUISEgByAJNgJUIAcgITcDWAwBCwJAIAJFBEAgDARAIAcoAlQhCQwDCyAHKAJYIQkMAQsCQAJAIAdBKGpBARAFIAkgDEVqaiICQQNGBEAgBygCVEF/aiICIAJFaiEJDAELIAJBAnQgB2ooAlQiCSAJRWohCSACQQFGDQELIAcgBygCWDYCXAsLIAcgBygCVDYCWCAHIAk2AlQLICCnIRQgCARAIAdBKGogCBAFIBRqIRQLIAggC2pBFE8EQCAHQShqEAQaCyALBEAgB0EoaiALEAUgDGohDAsgB0EoahAEGiAHIAcoAmggDGoiGSAUajYCaCAbIBogCSAZSxsoAgAhHCAHIAdBKGogHUIYiKdB/wFxEAggHadB//8DcWo2AjwgByAHQShqIB5CGIinQf8BcRAIIB6nQf//A3FqNgJMIAdBKGoQBBogByAHQShqIB9CGIinQf8BcRAIIB+nQf//A3FqNgJEIAcgB0HwAGogBEEDcUEEdGoiDSkDCCIdNwPIASAHIA0pAwAiHjcDwAECQAJAAkAgBygCvAEiDiAepyICaiIWIBNLDQAgAyAHKALEASIKIAJqIgtqIBhLDQAgEiADayALQSBqTw0BCyAHIAcpA8gBNwMQIAcgBykDwAE3AwggAyASIAdBCGogB0G8AWogEyAPIBUgERAeIQsMAQsgAiADaiEIIAMgDhAHIAJBEU8EQCADQRBqIQIDQCACIA5BEGoiDhAHIAJBEGoiAiAISQ0ACwsgCCAdpyIOayECIAcgFjYCvAEgDiAIIA9rSwRAIA4gCCAVa0sEQEFsIQsMAgsgESACIA9rIgJqIhYgCmogEU0EQCAIIBYgChAPGgwCCyAIIBZBACACaxAPIQggByACIApqIgo2AsQBIAggAmshCCAPIQILIA5BEE8EQCAIIApqIQoDQCAIIAIQByACQRBqIQIgCEEQaiIIIApJDQALDAELAkAgDkEHTQRAIAggAi0AADoAACAIIAItAAE6AAEgCCACLQACOgACIAggAi0AAzoAAyAIQQRqIAIgDkECdCIKQcAeaigCAGoiAhAXIAIgCkHgHmooAgBrIQIgBygCxAEhCgwBCyAIIAIQDAsgCkEJSQ0AIAggCmohCiAIQQhqIgggAkEIaiICa0EPTARAA0AgCCACEAwgAkEIaiECIAhBCGoiCCAKSQ0ADAIACwALA0AgCCACEAcgAkEQaiECIAhBEGoiCCAKSQ0ACwsgCxADBEAgCyEQDAQFIA0gDDYCACANIBkgHGogCWs2AgwgDSAJNgIIIA0gFDYCBCAEQQFqIQQgAyALaiEDDAILAAsLIAQgBUgNASAEIBdrIQtBACEEA0AgCyAFSARAIAcgB0HwAGogC0EDcUEEdGoiAikDCCIdNwPIASAHIAIpAwAiHjcDwAECQAJAAkAgBygCvAEiDCAepyICaiIKIBNLDQAgAyAHKALEASIJIAJqIhBqIBhLDQAgEiADayAQQSBqTw0BCyAHIAcpA8gBNwMgIAcgBykDwAE3AxggAyASIAdBGGogB0G8AWogEyAPIBUgERAeIRAMAQsgAiADaiEIIAMgDBAHIAJBEU8EQCADQRBqIQIDQCACIAxBEGoiDBAHIAJBEGoiAiAISQ0ACwsgCCAdpyIGayECIAcgCjYCvAEgBiAIIA9rSwRAIAYgCCAVa0sEQEFsIRAMAgsgESACIA9rIgJqIgwgCWogEU0EQCAIIAwgCRAPGgwCCyAIIAxBACACaxAPIQggByACIAlqIgk2AsQBIAggAmshCCAPIQILIAZBEE8EQCAIIAlqIQYDQCAIIAIQByACQRBqIQIgCEEQaiIIIAZJDQALDAELAkAgBkEHTQRAIAggAi0AADoAACAIIAItAAE6AAEgCCACLQACOgACIAggAi0AAzoAAyAIQQRqIAIgBkECdCIGQcAeaigCAGoiAhAXIAIgBkHgHmooAgBrIQIgBygCxAEhCQwBCyAIIAIQDAsgCUEJSQ0AIAggCWohBiAIQQhqIgggAkEIaiICa0EPTARAA0AgCCACEAwgAkEIaiECIAhBCGoiCCAGSQ0ADAIACwALA0AgCCACEAcgAkEQaiECIAhBEGoiCCAGSQ0ACwsgEBADDQMgC0EBaiELIAMgEGohAwwBCwsDQCAEQQNHBEAgACAEQQJ0IgJqQazQAWogAiAHaigCVDYCACAEQQFqIQQMAQsLIAcoArwBIQgLQbp/IRAgEyAIayIAIBIgA2tLDQAgAwR/IAMgCCAAEAsgAGoFQQALIAFrIRALIAdB0AFqJAAgEAslACAAQgA3AgAgAEEAOwEIIABBADoACyAAIAE2AgwgACACOgAKC7QFAQN/IwBBMGsiBCQAIABB/wFqIgVBfWohBgJAIAMvAQIEQCAEQRhqIAEgAhAGIgIQAw0BIARBEGogBEEYaiADEBwgBEEIaiAEQRhqIAMQHCAAIQMDQAJAIARBGGoQBCADIAZPckUEQCADIARBEGogBEEYahASOgAAIAMgBEEIaiAEQRhqEBI6AAEgBEEYahAERQ0BIANBAmohAwsgBUF+aiEFAn8DQEG6fyECIAMiASAFSw0FIAEgBEEQaiAEQRhqEBI6AAAgAUEBaiEDIARBGGoQBEEDRgRAQQIhAiAEQQhqDAILIAMgBUsNBSABIARBCGogBEEYahASOgABIAFBAmohA0EDIQIgBEEYahAEQQNHDQALIARBEGoLIQUgAyAFIARBGGoQEjoAACABIAJqIABrIQIMAwsgAyAEQRBqIARBGGoQEjoAAiADIARBCGogBEEYahASOgADIANBBGohAwwAAAsACyAEQRhqIAEgAhAGIgIQAw0AIARBEGogBEEYaiADEBwgBEEIaiAEQRhqIAMQHCAAIQMDQAJAIARBGGoQBCADIAZPckUEQCADIARBEGogBEEYahAROgAAIAMgBEEIaiAEQRhqEBE6AAEgBEEYahAERQ0BIANBAmohAwsgBUF+aiEFAn8DQEG6fyECIAMiASAFSw0EIAEgBEEQaiAEQRhqEBE6AAAgAUEBaiEDIARBGGoQBEEDRgRAQQIhAiAEQQhqDAILIAMgBUsNBCABIARBCGogBEEYahAROgABIAFBAmohA0EDIQIgBEEYahAEQQNHDQALIARBEGoLIQUgAyAFIARBGGoQEToAACABIAJqIABrIQIMAgsgAyAEQRBqIARBGGoQEToAAiADIARBCGogBEEYahAROgADIANBBGohAwwAAAsACyAEQTBqJAAgAgtpAQF/An8CQAJAIAJBB00NACABKAAAQbfIwuF+Rw0AIAAgASgABDYCmOIBQWIgAEEQaiABIAIQPiIDEAMNAhogAEKBgICAEDcDiOEBIAAgASADaiACIANrECoMAQsgACABIAIQKgtBAAsLrQMBBn8jAEGAAWsiAyQAQWIhCAJAIAJBCUkNACAAQZjQAGogAUEIaiIEIAJBeGogAEGY0AAQMyIFEAMiBg0AIANBHzYCfCADIANB/ABqIANB+ABqIAQgBCAFaiAGGyIEIAEgAmoiAiAEaxAVIgUQAw0AIAMoAnwiBkEfSw0AIAMoAngiB0EJTw0AIABBiCBqIAMgBkGAC0GADCAHEBggA0E0NgJ8IAMgA0H8AGogA0H4AGogBCAFaiIEIAIgBGsQFSIFEAMNACADKAJ8IgZBNEsNACADKAJ4IgdBCk8NACAAQZAwaiADIAZBgA1B4A4gBxAYIANBIzYCfCADIANB/ABqIANB+ABqIAQgBWoiBCACIARrEBUiBRADDQAgAygCfCIGQSNLDQAgAygCeCIHQQpPDQAgACADIAZBwBBB0BEgBxAYIAQgBWoiBEEMaiIFIAJLDQAgAiAFayEFQQAhAgNAIAJBA0cEQCAEKAAAIgZBf2ogBU8NAiAAIAJBAnRqQZzQAWogBjYCACACQQFqIQIgBEEEaiEEDAELCyAEIAFrIQgLIANBgAFqJAAgCAtGAQN/IABBCGohAyAAKAIEIQJBACEAA0AgACACdkUEQCABIAMgAEEDdGotAAJBFktqIQEgAEEBaiEADAELCyABQQggAmt0C4YDAQV/Qbh/IQcCQCADRQ0AIAItAAAiBEUEQCABQQA2AgBBAUG4fyADQQFGGw8LAn8gAkEBaiIFIARBGHRBGHUiBkF/Sg0AGiAGQX9GBEAgA0EDSA0CIAUvAABBgP4BaiEEIAJBA2oMAQsgA0ECSA0BIAItAAEgBEEIdHJBgIB+aiEEIAJBAmoLIQUgASAENgIAIAVBAWoiASACIANqIgNLDQBBbCEHIABBEGogACAFLQAAIgVBBnZBI0EJIAEgAyABa0HAEEHQEUHwEiAAKAKM4QEgACgCnOIBIAQQHyIGEAMiCA0AIABBmCBqIABBCGogBUEEdkEDcUEfQQggASABIAZqIAgbIgEgAyABa0GAC0GADEGAFyAAKAKM4QEgACgCnOIBIAQQHyIGEAMiCA0AIABBoDBqIABBBGogBUECdkEDcUE0QQkgASABIAZqIAgbIgEgAyABa0GADUHgDkGQGSAAKAKM4QEgACgCnOIBIAQQHyIAEAMNACAAIAFqIAJrIQcLIAcLrQMBCn8jAEGABGsiCCQAAn9BUiACQf8BSw0AGkFUIANBDEsNABogAkEBaiELIABBBGohCUGAgAQgA0F/anRBEHUhCkEAIQJBASEEQQEgA3QiB0F/aiIMIQUDQCACIAtGRQRAAkAgASACQQF0Ig1qLwEAIgZB//8DRgRAIAkgBUECdGogAjoAAiAFQX9qIQVBASEGDAELIARBACAKIAZBEHRBEHVKGyEECyAIIA1qIAY7AQAgAkEBaiECDAELCyAAIAQ7AQIgACADOwEAIAdBA3YgB0EBdmpBA2ohBkEAIQRBACECA0AgBCALRkUEQCABIARBAXRqLgEAIQpBACEAA0AgACAKTkUEQCAJIAJBAnRqIAQ6AAIDQCACIAZqIAxxIgIgBUsNAAsgAEEBaiEADAELCyAEQQFqIQQMAQsLQX8gAg0AGkEAIQIDfyACIAdGBH9BAAUgCCAJIAJBAnRqIgAtAAJBAXRqIgEgAS8BACIBQQFqOwEAIAAgAyABEBRrIgU6AAMgACABIAVB/wFxdCAHazsBACACQQFqIQIMAQsLCyEFIAhBgARqJAAgBQvjBgEIf0FsIQcCQCACQQNJDQACQAJAAkACQCABLQAAIgNBA3EiCUEBaw4DAwEAAgsgACgCiOEBDQBBYg8LIAJBBUkNAkEDIQYgASgAACEFAn8CQAJAIANBAnZBA3EiCEF+aiIEQQFNBEAgBEEBaw0BDAILIAVBDnZB/wdxIQQgBUEEdkH/B3EhAyAIRQwCCyAFQRJ2IQRBBCEGIAVBBHZB//8AcSEDQQAMAQsgBUEEdkH//w9xIgNBgIAISw0DIAEtAARBCnQgBUEWdnIhBEEFIQZBAAshBSAEIAZqIgogAksNAgJAIANBgQZJDQAgACgCnOIBRQ0AQQAhAgNAIAJBg4ABSw0BIAJBQGshAgwAAAsACwJ/IAlBA0YEQCABIAZqIQEgAEHw4gFqIQIgACgCDCEGIAUEQCACIAMgASAEIAYQXwwCCyACIAMgASAEIAYQXQwBCyAAQbjQAWohAiABIAZqIQEgAEHw4gFqIQYgAEGo0ABqIQggBQRAIAggBiADIAEgBCACEF4MAQsgCCAGIAMgASAEIAIQXAsQAw0CIAAgAzYCgOIBIABBATYCiOEBIAAgAEHw4gFqNgLw4QEgCUECRgRAIAAgAEGo0ABqNgIMCyAAIANqIgBBiOMBakIANwAAIABBgOMBakIANwAAIABB+OIBakIANwAAIABB8OIBakIANwAAIAoPCwJ/AkACQAJAIANBAnZBA3FBf2oiBEECSw0AIARBAWsOAgACAQtBASEEIANBA3YMAgtBAiEEIAEvAABBBHYMAQtBAyEEIAEQIUEEdgsiAyAEaiIFQSBqIAJLBEAgBSACSw0CIABB8OIBaiABIARqIAMQCyEBIAAgAzYCgOIBIAAgATYC8OEBIAEgA2oiAEIANwAYIABCADcAECAAQgA3AAggAEIANwAAIAUPCyAAIAM2AoDiASAAIAEgBGo2AvDhASAFDwsCfwJAAkACQCADQQJ2QQNxQX9qIgRBAksNACAEQQFrDgIAAgELQQEhByADQQN2DAILQQIhByABLwAAQQR2DAELIAJBBEkgARAhIgJBj4CAAUtyDQFBAyEHIAJBBHYLIQIgAEHw4gFqIAEgB2otAAAgAkEgahAQIQEgACACNgKA4gEgACABNgLw4QEgB0EBaiEHCyAHC0sAIABC+erQ0OfJoeThADcDICAAQgA3AxggAELP1tO+0ser2UI3AxAgAELW64Lu6v2J9eAANwMIIABCADcDACAAQShqQQBBKBAQGgviAgICfwV+IABBKGoiASAAKAJIaiECAn4gACkDACIDQiBaBEAgACkDECIEQgeJIAApAwgiBUIBiXwgACkDGCIGQgyJfCAAKQMgIgdCEol8IAUQGSAEEBkgBhAZIAcQGQwBCyAAKQMYQsXP2bLx5brqJ3wLIAN8IQMDQCABQQhqIgAgAk0EQEIAIAEpAAAQCSADhUIbiUKHla+vmLbem55/fkLj3MqV/M7y9YV/fCEDIAAhAQwBCwsCQCABQQRqIgAgAksEQCABIQAMAQsgASgAAK1Ch5Wvr5i23puef34gA4VCF4lCz9bTvtLHq9lCfkL5893xmfaZqxZ8IQMLA0AgACACSQRAIAAxAABCxc/ZsvHluuonfiADhUILiUKHla+vmLbem55/fiEDIABBAWohAAwBCwsgA0IhiCADhULP1tO+0ser2UJ+IgNCHYggA4VC+fPd8Zn2masWfiIDQiCIIAOFC+8CAgJ/BH4gACAAKQMAIAKtfDcDAAJAAkAgACgCSCIDIAJqIgRBH00EQCABRQ0BIAAgA2pBKGogASACECAgACgCSCACaiEEDAELIAEgAmohAgJ/IAMEQCAAQShqIgQgA2ogAUEgIANrECAgACAAKQMIIAQpAAAQCTcDCCAAIAApAxAgACkAMBAJNwMQIAAgACkDGCAAKQA4EAk3AxggACAAKQMgIABBQGspAAAQCTcDICAAKAJIIQMgAEEANgJIIAEgA2tBIGohAQsgAUEgaiACTQsEQCACQWBqIQMgACkDICEFIAApAxghBiAAKQMQIQcgACkDCCEIA0AgCCABKQAAEAkhCCAHIAEpAAgQCSEHIAYgASkAEBAJIQYgBSABKQAYEAkhBSABQSBqIgEgA00NAAsgACAFNwMgIAAgBjcDGCAAIAc3AxAgACAINwMICyABIAJPDQEgAEEoaiABIAIgAWsiBBAgCyAAIAQ2AkgLCy8BAX8gAEUEQEG2f0EAIAMbDwtBun8hBCADIAFNBH8gACACIAMQEBogAwVBun8LCy8BAX8gAEUEQEG2f0EAIAMbDwtBun8hBCADIAFNBH8gACACIAMQCxogAwVBun8LC6gCAQZ/IwBBEGsiByQAIABB2OABaikDAEKAgIAQViEIQbh/IQUCQCAEQf//B0sNACAAIAMgBBBCIgUQAyIGDQAgACgCnOIBIQkgACAHQQxqIAMgAyAFaiAGGyIKIARBACAFIAYbayIGEEAiAxADBEAgAyEFDAELIAcoAgwhBCABRQRAQbp/IQUgBEEASg0BCyAGIANrIQUgAyAKaiEDAkAgCQRAIABBADYCnOIBDAELAkACQAJAIARBBUgNACAAQdjgAWopAwBCgICACFgNAAwBCyAAQQA2ApziAQwBCyAAKAIIED8hBiAAQQA2ApziASAGQRRPDQELIAAgASACIAMgBSAEIAgQOSEFDAELIAAgASACIAMgBSAEIAgQOiEFCyAHQRBqJAAgBQtnACAAQdDgAWogASACIAAoAuzhARAuIgEQAwRAIAEPC0G4fyECAkAgAQ0AIABB7OABaigCACIBBEBBYCECIAAoApjiASABRw0BC0EAIQIgAEHw4AFqKAIARQ0AIABBkOEBahBDCyACCycBAX8QVyIERQRAQUAPCyAEIAAgASACIAMgBBBLEE8hACAEEFYgAAs/AQF/AkACQAJAIAAoAqDiAUEBaiIBQQJLDQAgAUEBaw4CAAECCyAAEDBBAA8LIABBADYCoOIBCyAAKAKU4gELvAMCB38BfiMAQRBrIgkkAEG4fyEGAkAgBCgCACIIQQVBCSAAKALs4QEiBRtJDQAgAygCACIHQQFBBSAFGyAFEC8iBRADBEAgBSEGDAELIAggBUEDakkNACAAIAcgBRBJIgYQAw0AIAEgAmohCiAAQZDhAWohCyAIIAVrIQIgBSAHaiEHIAEhBQNAIAcgAiAJECwiBhADDQEgAkF9aiICIAZJBEBBuH8hBgwCCyAJKAIAIghBAksEQEFsIQYMAgsgB0EDaiEHAn8CQAJAAkAgCEEBaw4CAgABCyAAIAUgCiAFayAHIAYQSAwCCyAFIAogBWsgByAGEEcMAQsgBSAKIAVrIActAAAgCSgCCBBGCyIIEAMEQCAIIQYMAgsgACgC8OABBEAgCyAFIAgQRQsgAiAGayECIAYgB2ohByAFIAhqIQUgCSgCBEUNAAsgACkD0OABIgxCf1IEQEFsIQYgDCAFIAFrrFINAQsgACgC8OABBEBBaiEGIAJBBEkNASALEEQhDCAHKAAAIAynRw0BIAdBBGohByACQXxqIQILIAMgBzYCACAEIAI2AgAgBSABayEGCyAJQRBqJAAgBgsuACAAECsCf0EAQQAQAw0AGiABRSACRXJFBEBBYiAAIAEgAhA9EAMNARoLQQALCzcAIAEEQCAAIAAoAsTgASABKAIEIAEoAghqRzYCnOIBCyAAECtBABADIAFFckUEQCAAIAEQWwsL0QIBB38jAEEQayIGJAAgBiAENgIIIAYgAzYCDCAFBEAgBSgCBCEKIAUoAgghCQsgASEIAkACQANAIAAoAuzhARAWIQsCQANAIAQgC0kNASADKAAAQXBxQdDUtMIBRgRAIAMgBBAiIgcQAw0EIAQgB2shBCADIAdqIQMMAQsLIAYgAzYCDCAGIAQ2AggCQCAFBEAgACAFEE5BACEHQQAQA0UNAQwFCyAAIAogCRBNIgcQAw0ECyAAIAgQUCAMQQFHQQAgACAIIAIgBkEMaiAGQQhqEEwiByIDa0EAIAMQAxtBCkdyRQRAQbh/IQcMBAsgBxADDQMgAiAHayECIAcgCGohCEEBIQwgBigCDCEDIAYoAgghBAwBCwsgBiADNgIMIAYgBDYCCEG4fyEHIAQNASAIIAFrIQcMAQsgBiADNgIMIAYgBDYCCAsgBkEQaiQAIAcLRgECfyABIAAoArjgASICRwRAIAAgAjYCxOABIAAgATYCuOABIAAoArzgASEDIAAgATYCvOABIAAgASADIAJrajYCwOABCwutAgIEfwF+IwBBQGoiBCQAAkACQCACQQhJDQAgASgAAEFwcUHQ1LTCAUcNACABIAIQIiEBIABCADcDCCAAQQA2AgQgACABNgIADAELIARBGGogASACEC0iAxADBEAgACADEBoMAQsgAwRAIABBuH8QGgwBCyACIAQoAjAiA2shAiABIANqIQMDQAJAIAAgAyACIARBCGoQLCIFEAMEfyAFBSACIAVBA2oiBU8NAUG4fwsQGgwCCyAGQQFqIQYgAiAFayECIAMgBWohAyAEKAIMRQ0ACyAEKAI4BEAgAkEDTQRAIABBuH8QGgwCCyADQQRqIQMLIAQoAighAiAEKQMYIQcgAEEANgIEIAAgAyABazYCACAAIAIgBmytIAcgB0J/URs3AwgLIARBQGskAAslAQF/IwBBEGsiAiQAIAIgACABEFEgAigCACEAIAJBEGokACAAC30BBH8jAEGQBGsiBCQAIARB/wE2AggCQCAEQRBqIARBCGogBEEMaiABIAIQFSIGEAMEQCAGIQUMAQtBVCEFIAQoAgwiB0EGSw0AIAMgBEEQaiAEKAIIIAcQQSIFEAMNACAAIAEgBmogAiAGayADEDwhBQsgBEGQBGokACAFC4cBAgJ/An5BABAWIQMCQANAIAEgA08EQAJAIAAoAABBcHFB0NS0wgFGBEAgACABECIiAhADRQ0BQn4PCyAAIAEQVSIEQn1WDQMgBCAFfCIFIARUIQJCfiEEIAINAyAAIAEQUiICEAMNAwsgASACayEBIAAgAmohAAwBCwtCfiAFIAEbIQQLIAQLPwIBfwF+IwBBMGsiAiQAAn5CfiACQQhqIAAgARAtDQAaQgAgAigCHEEBRg0AGiACKQMICyEDIAJBMGokACADC40BAQJ/IwBBMGsiASQAAkAgAEUNACAAKAKI4gENACABIABB/OEBaigCADYCKCABIAApAvThATcDICAAEDAgACgCqOIBIQIgASABKAIoNgIYIAEgASkDIDcDECACIAFBEGoQGyAAQQA2AqjiASABIAEoAig2AgggASABKQMgNwMAIAAgARAbCyABQTBqJAALKgECfyMAQRBrIgAkACAAQQA2AgggAEIANwMAIAAQWCEBIABBEGokACABC4cBAQN/IwBBEGsiAiQAAkAgACgCAEUgACgCBEVzDQAgAiAAKAIINgIIIAIgACkCADcDAAJ/IAIoAgAiAQRAIAIoAghBqOMJIAERBQAMAQtBqOMJECgLIgFFDQAgASAAKQIANwL04QEgAUH84QFqIAAoAgg2AgAgARBZIAEhAwsgAkEQaiQAIAMLywEBAn8jAEEgayIBJAAgAEGBgIDAADYCtOIBIABBADYCiOIBIABBADYC7OEBIABCADcDkOIBIABBADYCpOMJIABBADYC3OIBIABCADcCzOIBIABBADYCvOIBIABBADYCxOABIABCADcCnOIBIABBpOIBakIANwIAIABBrOIBakEANgIAIAFCADcCECABQgA3AhggASABKQMYNwMIIAEgASkDEDcDACABKAIIQQh2QQFxIQIgAEEANgLg4gEgACACNgKM4gEgAUEgaiQAC3YBA38jAEEwayIBJAAgAARAIAEgAEHE0AFqIgIoAgA2AiggASAAKQK80AE3AyAgACgCACEDIAEgAigCADYCGCABIAApArzQATcDECADIAFBEGoQGyABIAEoAig2AgggASABKQMgNwMAIAAgARAbCyABQTBqJAALzAEBAX8gACABKAK00AE2ApjiASAAIAEoAgQiAjYCwOABIAAgAjYCvOABIAAgAiABKAIIaiICNgK44AEgACACNgLE4AEgASgCuNABBEAgAEKBgICAEDcDiOEBIAAgAUGk0ABqNgIMIAAgAUGUIGo2AgggACABQZwwajYCBCAAIAFBDGo2AgAgAEGs0AFqIAFBqNABaigCADYCACAAQbDQAWogAUGs0AFqKAIANgIAIABBtNABaiABQbDQAWooAgA2AgAPCyAAQgA3A4jhAQs7ACACRQRAQbp/DwsgBEUEQEFsDwsgAiAEEGAEQCAAIAEgAiADIAQgBRBhDwsgACABIAIgAyAEIAUQZQtGAQF/IwBBEGsiBSQAIAVBCGogBBAOAn8gBS0ACQRAIAAgASACIAMgBBAyDAELIAAgASACIAMgBBA0CyEAIAVBEGokACAACzQAIAAgAyAEIAUQNiIFEAMEQCAFDwsgBSAESQR/IAEgAiADIAVqIAQgBWsgABA1BUG4fwsLRgEBfyMAQRBrIgUkACAFQQhqIAQQDgJ/IAUtAAkEQCAAIAEgAiADIAQQYgwBCyAAIAEgAiADIAQQNQshACAFQRBqJAAgAAtZAQF/QQ8hAiABIABJBEAgAUEEdCAAbiECCyAAQQh2IgEgAkEYbCIAQYwIaigCAGwgAEGICGooAgBqIgJBA3YgAmogAEGACGooAgAgAEGECGooAgAgAWxqSQs3ACAAIAMgBCAFQYAQEDMiBRADBEAgBQ8LIAUgBEkEfyABIAIgAyAFaiAEIAVrIAAQMgVBuH8LC78DAQN/IwBBIGsiBSQAIAVBCGogAiADEAYiAhADRQRAIAAgAWoiB0F9aiEGIAUgBBAOIARBBGohAiAFLQACIQMDQEEAIAAgBkkgBUEIahAEGwRAIAAgAiAFQQhqIAMQAkECdGoiBC8BADsAACAFQQhqIAQtAAIQASAAIAQtAANqIgQgAiAFQQhqIAMQAkECdGoiAC8BADsAACAFQQhqIAAtAAIQASAEIAAtAANqIQAMAQUgB0F+aiEEA0AgBUEIahAEIAAgBEtyRQRAIAAgAiAFQQhqIAMQAkECdGoiBi8BADsAACAFQQhqIAYtAAIQASAAIAYtAANqIQAMAQsLA0AgACAES0UEQCAAIAIgBUEIaiADEAJBAnRqIgYvAQA7AAAgBUEIaiAGLQACEAEgACAGLQADaiEADAELCwJAIAAgB08NACAAIAIgBUEIaiADEAIiA0ECdGoiAC0AADoAACAALQADQQFGBEAgBUEIaiAALQACEAEMAQsgBSgCDEEfSw0AIAVBCGogAiADQQJ0ai0AAhABIAUoAgxBIUkNACAFQSA2AgwLIAFBbCAFQQhqEAobIQILCwsgBUEgaiQAIAILkgIBBH8jAEFAaiIJJAAgCSADQTQQCyEDAkAgBEECSA0AIAMgBEECdGooAgAhCSADQTxqIAgQIyADQQE6AD8gAyACOgA+QQAhBCADKAI8IQoDQCAEIAlGDQEgACAEQQJ0aiAKNgEAIARBAWohBAwAAAsAC0EAIQkDQCAGIAlGRQRAIAMgBSAJQQF0aiIKLQABIgtBAnRqIgwoAgAhBCADQTxqIAotAABBCHQgCGpB//8DcRAjIANBAjoAPyADIAcgC2siCiACajoAPiAEQQEgASAKa3RqIQogAygCPCELA0AgACAEQQJ0aiALNgEAIARBAWoiBCAKSQ0ACyAMIAo2AgAgCUEBaiEJDAELCyADQUBrJAALowIBCX8jAEHQAGsiCSQAIAlBEGogBUE0EAsaIAcgBmshDyAHIAFrIRADQAJAIAMgCkcEQEEBIAEgByACIApBAXRqIgYtAAEiDGsiCGsiC3QhDSAGLQAAIQ4gCUEQaiAMQQJ0aiIMKAIAIQYgCyAPTwRAIAAgBkECdGogCyAIIAUgCEE0bGogCCAQaiIIQQEgCEEBShsiCCACIAQgCEECdGooAgAiCEEBdGogAyAIayAHIA4QYyAGIA1qIQgMAgsgCUEMaiAOECMgCUEBOgAPIAkgCDoADiAGIA1qIQggCSgCDCELA0AgBiAITw0CIAAgBkECdGogCzYBACAGQQFqIQYMAAALAAsgCUHQAGokAA8LIAwgCDYCACAKQQFqIQoMAAALAAs0ACAAIAMgBCAFEDYiBRADBEAgBQ8LIAUgBEkEfyABIAIgAyAFaiAEIAVrIAAQNAVBuH8LCyMAIAA/AEEQdGtB//8DakEQdkAAQX9GBEBBAA8LQQAQAEEBCzsBAX8gAgRAA0AgACABIAJBgCAgAkGAIEkbIgMQCyEAIAFBgCBqIQEgAEGAIGohACACIANrIgINAAsLCwYAIAAQAwsLqBUJAEGICAsNAQAAAAEAAAACAAAAAgBBoAgLswYBAAAAAQAAAAIAAAACAAAAJgAAAIIAAAAhBQAASgAAAGcIAAAmAAAAwAEAAIAAAABJBQAASgAAAL4IAAApAAAALAIAAIAAAABJBQAASgAAAL4IAAAvAAAAygIAAIAAAACKBQAASgAAAIQJAAA1AAAAcwMAAIAAAACdBQAASgAAAKAJAAA9AAAAgQMAAIAAAADrBQAASwAAAD4KAABEAAAAngMAAIAAAABNBgAASwAAAKoKAABLAAAAswMAAIAAAADBBgAATQAAAB8NAABNAAAAUwQAAIAAAAAjCAAAUQAAAKYPAABUAAAAmQQAAIAAAABLCQAAVwAAALESAABYAAAA2gQAAIAAAABvCQAAXQAAACMUAABUAAAARQUAAIAAAABUCgAAagAAAIwUAABqAAAArwUAAIAAAAB2CQAAfAAAAE4QAAB8AAAA0gIAAIAAAABjBwAAkQAAAJAHAACSAAAAAAAAAAEAAAABAAAABQAAAA0AAAAdAAAAPQAAAH0AAAD9AAAA/QEAAP0DAAD9BwAA/Q8AAP0fAAD9PwAA/X8AAP3/AAD9/wEA/f8DAP3/BwD9/w8A/f8fAP3/PwD9/38A/f//AP3//wH9//8D/f//B/3//w/9//8f/f//P/3//38AAAAAAQAAAAIAAAADAAAABAAAAAUAAAAGAAAABwAAAAgAAAAJAAAACgAAAAsAAAAMAAAADQAAAA4AAAAPAAAAEAAAABEAAAASAAAAEwAAABQAAAAVAAAAFgAAABcAAAAYAAAAGQAAABoAAAAbAAAAHAAAAB0AAAAeAAAAHwAAAAMAAAAEAAAABQAAAAYAAAAHAAAACAAAAAkAAAAKAAAACwAAAAwAAAANAAAADgAAAA8AAAAQAAAAEQAAABIAAAATAAAAFAAAABUAAAAWAAAAFwAAABgAAAAZAAAAGgAAABsAAAAcAAAAHQAAAB4AAAAfAAAAIAAAACEAAAAiAAAAIwAAACUAAAAnAAAAKQAAACsAAAAvAAAAMwAAADsAAABDAAAAUwAAAGMAAACDAAAAAwEAAAMCAAADBAAAAwgAAAMQAAADIAAAA0AAAAOAAAADAAEAQeAPC1EBAAAAAQAAAAEAAAABAAAAAgAAAAIAAAADAAAAAwAAAAQAAAAEAAAABQAAAAcAAAAIAAAACQAAAAoAAAALAAAADAAAAA0AAAAOAAAADwAAABAAQcQQC4sBAQAAAAIAAAADAAAABAAAAAUAAAAGAAAABwAAAAgAAAAJAAAACgAAAAsAAAAMAAAADQAAAA4AAAAPAAAAEAAAABIAAAAUAAAAFgAAABgAAAAcAAAAIAAAACgAAAAwAAAAQAAAAIAAAAAAAQAAAAIAAAAEAAAACAAAABAAAAAgAAAAQAAAAIAAAAAAAQBBkBIL5gQBAAAAAQAAAAEAAAABAAAAAgAAAAIAAAADAAAAAwAAAAQAAAAGAAAABwAAAAgAAAAJAAAACgAAAAsAAAAMAAAADQAAAA4AAAAPAAAAEAAAAAEAAAAEAAAACAAAAAAAAAABAAEBBgAAAAAAAAQAAAAAEAAABAAAAAAgAAAFAQAAAAAAAAUDAAAAAAAABQQAAAAAAAAFBgAAAAAAAAUHAAAAAAAABQkAAAAAAAAFCgAAAAAAAAUMAAAAAAAABg4AAAAAAAEFEAAAAAAAAQUUAAAAAAABBRYAAAAAAAIFHAAAAAAAAwUgAAAAAAAEBTAAAAAgAAYFQAAAAAAABwWAAAAAAAAIBgABAAAAAAoGAAQAAAAADAYAEAAAIAAABAAAAAAAAAAEAQAAAAAAAAUCAAAAIAAABQQAAAAAAAAFBQAAACAAAAUHAAAAAAAABQgAAAAgAAAFCgAAAAAAAAULAAAAAAAABg0AAAAgAAEFEAAAAAAAAQUSAAAAIAABBRYAAAAAAAIFGAAAACAAAwUgAAAAAAADBSgAAAAAAAYEQAAAABAABgRAAAAAIAAHBYAAAAAAAAkGAAIAAAAACwYACAAAMAAABAAAAAAQAAAEAQAAACAAAAUCAAAAIAAABQMAAAAgAAAFBQAAACAAAAUGAAAAIAAABQgAAAAgAAAFCQAAACAAAAULAAAAIAAABQwAAAAAAAAGDwAAACAAAQUSAAAAIAABBRQAAAAgAAIFGAAAACAAAgUcAAAAIAADBSgAAAAgAAQFMAAAAAAAEAYAAAEAAAAPBgCAAAAAAA4GAEAAAAAADQYAIABBgBcLhwIBAAEBBQAAAAAAAAUAAAAAAAAGBD0AAAAAAAkF/QEAAAAADwX9fwAAAAAVBf3/HwAAAAMFBQAAAAAABwR9AAAAAAAMBf0PAAAAABIF/f8DAAAAFwX9/38AAAAFBR0AAAAAAAgE/QAAAAAADgX9PwAAAAAUBf3/DwAAAAIFAQAAABAABwR9AAAAAAALBf0HAAAAABEF/f8BAAAAFgX9/z8AAAAEBQ0AAAAQAAgE/QAAAAAADQX9HwAAAAATBf3/BwAAAAEFAQAAABAABgQ9AAAAAAAKBf0DAAAAABAF/f8AAAAAHAX9//8PAAAbBf3//wcAABoF/f//AwAAGQX9//8BAAAYBf3//wBBkBkLhgQBAAEBBgAAAAAAAAYDAAAAAAAABAQAAAAgAAAFBQAAAAAAAAUGAAAAAAAABQgAAAAAAAAFCQAAAAAAAAULAAAAAAAABg0AAAAAAAAGEAAAAAAAAAYTAAAAAAAABhYAAAAAAAAGGQAAAAAAAAYcAAAAAAAABh8AAAAAAAAGIgAAAAAAAQYlAAAAAAABBikAAAAAAAIGLwAAAAAAAwY7AAAAAAAEBlMAAAAAAAcGgwAAAAAACQYDAgAAEAAABAQAAAAAAAAEBQAAACAAAAUGAAAAAAAABQcAAAAgAAAFCQAAAAAAAAUKAAAAAAAABgwAAAAAAAAGDwAAAAAAAAYSAAAAAAAABhUAAAAAAAAGGAAAAAAAAAYbAAAAAAAABh4AAAAAAAAGIQAAAAAAAQYjAAAAAAABBicAAAAAAAIGKwAAAAAAAwYzAAAAAAAEBkMAAAAAAAUGYwAAAAAACAYDAQAAIAAABAQAAAAwAAAEBAAAABAAAAQFAAAAIAAABQcAAAAgAAAFCAAAACAAAAUKAAAAIAAABQsAAAAAAAAGDgAAAAAAAAYRAAAAAAAABhQAAAAAAAAGFwAAAAAAAAYaAAAAAAAABh0AAAAAAAAGIAAAAAAAEAYDAAEAAAAPBgOAAAAAAA4GA0AAAAAADQYDIAAAAAAMBgMQAAAAAAsGAwgAAAAACgYDBABBpB0L2QEBAAAAAwAAAAcAAAAPAAAAHwAAAD8AAAB/AAAA/wAAAP8BAAD/AwAA/wcAAP8PAAD/HwAA/z8AAP9/AAD//wAA//8BAP//AwD//wcA//8PAP//HwD//z8A//9/AP///wD///8B////A////wf///8P////H////z////9/AAAAAAEAAAACAAAABAAAAAAAAAACAAAABAAAAAgAAAAAAAAAAQAAAAIAAAABAAAABAAAAAQAAAAEAAAABAAAAAgAAAAIAAAACAAAAAcAAAAIAAAACQAAAAoAAAALAEGgIAsDwBBQ",h_="display-p3",u_="display-p3-linear",Zo=new WeakMap;let $o=0,ec;class Kn extends Ms{constructor(e){super(e),this.transcoderPath="",this.transcoderBinary=null,this.transcoderPending=null,this.workerPool=new e_,this.workerSourceURL="",this.workerConfig=null,typeof MSC_TRANSCODER<"u"&&console.warn('THREE.KTX2Loader: Please update to latest "basis_transcoder". "msc_basis_transcoder" is no longer supported in three.js r125+.')}setTranscoderPath(e){return this.transcoderPath=e,this}setWorkerLimit(e){return this.workerPool.setWorkerLimit(e),this}async detectSupportAsync(e){return this.workerConfig={astcSupported:await e.hasFeatureAsync("texture-compression-astc"),astcHDRSupported:!1,etc1Supported:await e.hasFeatureAsync("texture-compression-etc1"),etc2Supported:await e.hasFeatureAsync("texture-compression-etc2"),dxtSupported:await e.hasFeatureAsync("texture-compression-bc"),bptcSupported:await e.hasFeatureAsync("texture-compression-bptc"),pvrtcSupported:await e.hasFeatureAsync("texture-compression-pvrtc")},this}detectSupport(e){return e.isWebGPURenderer===!0?this.workerConfig={astcSupported:e.hasFeature("texture-compression-astc"),astcHDRSupported:!1,etc1Supported:e.hasFeature("texture-compression-etc1"),etc2Supported:e.hasFeature("texture-compression-etc2"),dxtSupported:e.hasFeature("texture-compression-bc"),bptcSupported:e.hasFeature("texture-compression-bptc"),pvrtcSupported:e.hasFeature("texture-compression-pvrtc")}:this.workerConfig={astcSupported:e.extensions.has("WEBGL_compressed_texture_astc"),astcHDRSupported:e.extensions.has("WEBGL_compressed_texture_astc")&&e.extensions.get("WEBGL_compressed_texture_astc").getSupportedProfiles().includes("hdr"),etc1Supported:e.extensions.has("WEBGL_compressed_texture_etc1"),etc2Supported:e.extensions.has("WEBGL_compressed_texture_etc"),dxtSupported:e.extensions.has("WEBGL_compressed_texture_s3tc"),bptcSupported:e.extensions.has("EXT_texture_compression_bptc"),pvrtcSupported:e.extensions.has("WEBGL_compressed_texture_pvrtc")||e.extensions.has("WEBKIT_WEBGL_compressed_texture_pvrtc")},this}init(){if(!this.transcoderPending){const e=new Na(this.manager);e.setPath(this.transcoderPath),e.setWithCredentials(this.withCredentials);const t=e.loadAsync("basis_transcoder.js"),n=new Na(this.manager);n.setPath(this.transcoderPath),n.setResponseType("arraybuffer"),n.setWithCredentials(this.withCredentials);const s=n.loadAsync("basis_transcoder.wasm");this.transcoderPending=Promise.all([t,s]).then(([a,r])=>{const o=Kn.BasisWorker.toString(),c=["/* constants */","let _EngineFormat = "+JSON.stringify(Kn.EngineFormat),"let _EngineType = "+JSON.stringify(Kn.EngineType),"let _TranscoderFormat = "+JSON.stringify(Kn.TranscoderFormat),"let _BasisFormat = "+JSON.stringify(Kn.BasisFormat),"/* basis_transcoder.js */",a,"/* worker */",o.substring(o.indexOf("{")+1,o.lastIndexOf("}"))].join(`
`);this.workerSourceURL=URL.createObjectURL(new Blob([c])),this.transcoderBinary=r,this.workerPool.setWorkerCreator(()=>{const l=new Worker(this.workerSourceURL),h=this.transcoderBinary.slice(0);return l.postMessage({type:"init",config:this.workerConfig,transcoderBinary:h},[h]),l})}),$o>0&&console.warn("THREE.KTX2Loader: Multiple active KTX2 loaders may cause performance issues. Use a single KTX2Loader instance, or call .dispose() on old instances."),$o++}return this.transcoderPending}load(e,t,n,s){if(this.workerConfig===null)throw new Error("THREE.KTX2Loader: Missing initialization with `.detectSupport( renderer )`.");const a=new Na(this.manager);a.setResponseType("arraybuffer"),a.setWithCredentials(this.withCredentials),a.load(e,r=>{this.parse(r,t,s)},n,s)}parse(e,t,n){if(this.workerConfig===null)throw new Error("THREE.KTX2Loader: Missing initialization with `.detectSupport( renderer )`.");if(Zo.has(e))return Zo.get(e).promise.then(t).catch(n);this._createTexture(e).then(s=>t?t(s):null).catch(n)}_createTextureFrom(e,t){const{type:n,error:s,data:{faces:a,width:r,height:o,format:c,type:l,dfdFlags:h}}=e;if(n==="error")return Promise.reject(s);let u;if(t.faceCount===6)u=new Tb(a,c,l);else{const d=a[0].mipmaps;u=t.layerCount>1?new Ib(d,r,o,t.layerCount,c,l):new co(d,r,o,c,l)}return u.minFilter=a[0].mipmaps.length===1?Cn:pi,u.magFilter=Cn,u.generateMipmaps=!1,u.needsUpdate=!0,u.colorSpace=Od(t),u.premultiplyAlpha=!!(h&n_),u}async _createTexture(e,t={}){const n=c_(new Uint8Array(e)),s=n.vkFormat===Ul&&n.dataFormatDescriptor[0].colorModel===167;if(!(n.vkFormat===r_||s&&!this.workerConfig.astcHDRSupported))return f_(n);const r=t,o=this.init().then(()=>this.workerPool.postMessage({type:"transcode",buffer:e,taskConfig:r},[e])).then(c=>this._createTextureFrom(c.data,n));return Zo.set(e,{promise:o}),o}dispose(){return this.workerPool.dispose(),this.workerSourceURL&&URL.revokeObjectURL(this.workerSourceURL),$o--,this}}Kn.BasisFormat={ETC1S:0,UASTC:1,UASTC_HDR:2};Kn.TranscoderFormat={ETC1:0,ETC2:1,BC1:2,BC3:3,BC4:4,BC5:5,BC7_M6_OPAQUE_ONLY:6,BC7_M5:7,PVRTC1_4_RGB:8,PVRTC1_4_RGBA:9,ASTC_4x4:10,ATC_RGB:11,ATC_RGBA_INTERPOLATED_ALPHA:12,RGBA32:13,RGB565:14,BGR565:15,RGBA4444:16,BC6H:22,RGB_HALF:24,RGBA_HALF:25};Kn.EngineFormat={RGBAFormat:sn,RGBA_ASTC_4x4_Format:za,RGB_BPTC_UNSIGNED_Format:Yr,RGBA_BPTC_Format:Pa,RGBA_ETC2_EAC_Format:qr,RGBA_PVRTC_4BPPV1_Format:Vr,RGBA_S3TC_DXT5_Format:La,RGB_ETC1_Format:Wr,RGB_ETC2_Format:jr,RGB_PVRTC_4BPPV1_Format:Hr,RGBA_S3TC_DXT1_Format:Da};Kn.EngineType={UnsignedByteType:nn,HalfFloatType:dn,FloatType:bn};Kn.BasisWorker=function(){let i,e,t;const n=_EngineFormat,s=_EngineType,a=_TranscoderFormat,r=_BasisFormat;self.addEventListener("message",function(m){const x=m.data;switch(x.type){case"init":i=x.config,o(x.transcoderBinary);break;case"transcode":e.then(()=>{try{const{faces:p,buffers:A,width:E,height:_,hasAlpha:g,format:B,type:S,dfdFlags:T}=c(x.buffer);self.postMessage({type:"transcode",id:x.id,data:{faces:p,width:E,height:_,hasAlpha:g,format:B,type:S,dfdFlags:T}},A)}catch(p){console.error(p),self.postMessage({type:"error",id:x.id,error:p.message})}});break}});function o(m){e=new Promise(x=>{t={wasmBinary:m,onRuntimeInitialized:x},BASIS(t)}).then(()=>{t.initializeBasis(),t.KTX2File===void 0&&console.warn("THREE.KTX2Loader: Please update Basis Universal transcoder.")})}function c(m){const x=new t.KTX2File(new Uint8Array(m));function p(){x.close(),x.delete()}if(!x.isValid())throw p(),new Error("THREE.KTX2Loader:	Invalid or unsupported .ktx2 file");let A;if(x.isUASTC())A=r.UASTC;else if(x.isETC1S())A=r.ETC1S;else if(x.isHDR())A=r.UASTC_HDR;else throw new Error("THREE.KTX2Loader: Unknown Basis encoding");const E=x.getWidth(),_=x.getHeight(),g=x.getLayers()||1,B=x.getLevels(),S=x.getFaces(),T=x.getHasAlpha(),U=x.getDFDFlags(),{transcoderFormat:M,engineFormat:y,engineType:L}=u(A,E,_,T);if(!E||!_||!B)throw p(),new Error("THREE.KTX2Loader:	Invalid texture");if(!x.startTranscoding())throw p(),new Error("THREE.KTX2Loader: .startTranscoding failed");const V=[],te=[];for(let Ae=0;Ae<S;Ae++){const ae=[];for(let ce=0;ce<B;ce++){const se=[];let J,fe;for(let me=0;me<g;me++){const Ce=x.getImageLevelInfo(ce,me,Ae);Ae===0&&ce===0&&me===0&&(Ce.origWidth%4!==0||Ce.origHeight%4!==0)&&console.warn("THREE.KTX2Loader: ETC1S and UASTC textures should use multiple-of-four dimensions."),B>1?(J=Ce.origWidth,fe=Ce.origHeight):(J=Ce.width,fe=Ce.height);let Me=new Uint8Array(x.getImageTranscodedSizeInBytes(ce,me,0,M));const ne=x.transcodeImage(Me,ce,me,Ae,M,0,-1,-1);if(L===s.HalfFloatType&&(Me=new Uint16Array(Me.buffer,Me.byteOffset,Me.byteLength/Uint16Array.BYTES_PER_ELEMENT)),!ne)throw p(),new Error("THREE.KTX2Loader: .transcodeImage failed.");se.push(Me)}const $=f(se);ae.push({data:$,width:J,height:fe}),te.push($.buffer)}V.push({mipmaps:ae,width:E,height:_,format:y,type:L})}return p(),{faces:V,buffers:te,width:E,height:_,hasAlpha:T,dfdFlags:U,format:y,type:L}}const l=[{if:"astcSupported",basisFormat:[r.UASTC],transcoderFormat:[a.ASTC_4x4,a.ASTC_4x4],engineFormat:[n.RGBA_ASTC_4x4_Format,n.RGBA_ASTC_4x4_Format],engineType:[s.UnsignedByteType],priorityETC1S:1/0,priorityUASTC:1,needsPowerOfTwo:!1},{if:"bptcSupported",basisFormat:[r.ETC1S,r.UASTC],transcoderFormat:[a.BC7_M5,a.BC7_M5],engineFormat:[n.RGBA_BPTC_Format,n.RGBA_BPTC_Format],engineType:[s.UnsignedByteType],priorityETC1S:3,priorityUASTC:2,needsPowerOfTwo:!1},{if:"dxtSupported",basisFormat:[r.ETC1S,r.UASTC],transcoderFormat:[a.BC1,a.BC3],engineFormat:[n.RGBA_S3TC_DXT1_Format,n.RGBA_S3TC_DXT5_Format],engineType:[s.UnsignedByteType],priorityETC1S:4,priorityUASTC:5,needsPowerOfTwo:!1},{if:"etc2Supported",basisFormat:[r.ETC1S,r.UASTC],transcoderFormat:[a.ETC1,a.ETC2],engineFormat:[n.RGB_ETC2_Format,n.RGBA_ETC2_EAC_Format],engineType:[s.UnsignedByteType],priorityETC1S:1,priorityUASTC:3,needsPowerOfTwo:!1},{if:"etc1Supported",basisFormat:[r.ETC1S,r.UASTC],transcoderFormat:[a.ETC1],engineFormat:[n.RGB_ETC1_Format],engineType:[s.UnsignedByteType],priorityETC1S:2,priorityUASTC:4,needsPowerOfTwo:!1},{if:"pvrtcSupported",basisFormat:[r.ETC1S,r.UASTC],transcoderFormat:[a.PVRTC1_4_RGB,a.PVRTC1_4_RGBA],engineFormat:[n.RGB_PVRTC_4BPPV1_Format,n.RGBA_PVRTC_4BPPV1_Format],engineType:[s.UnsignedByteType],priorityETC1S:5,priorityUASTC:6,needsPowerOfTwo:!0},{if:"bptcSupported",basisFormat:[r.UASTC_HDR],transcoderFormat:[a.BC6H],engineFormat:[n.RGB_BPTC_UNSIGNED_Format],engineType:[s.HalfFloatType],priorityHDR:1,needsPowerOfTwo:!1},{basisFormat:[r.ETC1S,r.UASTC],transcoderFormat:[a.RGBA32,a.RGBA32],engineFormat:[n.RGBAFormat,n.RGBAFormat],engineType:[s.UnsignedByteType,s.UnsignedByteType],priorityETC1S:100,priorityUASTC:100,needsPowerOfTwo:!1},{basisFormat:[r.UASTC_HDR],transcoderFormat:[a.RGBA_HALF],engineFormat:[n.RGBAFormat],engineType:[s.HalfFloatType],priorityHDR:100,needsPowerOfTwo:!1}],h={[r.ETC1S]:l.filter(m=>m.basisFormat.includes(r.ETC1S)).sort((m,x)=>m.priorityUASTC-x.priorityUASTC),[r.UASTC]:l.filter(m=>m.basisFormat.includes(r.UASTC)).sort((m,x)=>m.priorityUASTC-x.priorityUASTC),[r.UASTC_HDR]:l.filter(m=>m.basisFormat.includes(r.UASTC_HDR)).sort((m,x)=>m.priorityHDR-x.priorityHDR)};function u(m,x,p,A){const E=h[m];for(let _=0;_<E.length;_++){const g=E[_];if(g.if&&!i[g.if]||!g.basisFormat.includes(m)||A&&g.transcoderFormat.length<2||g.needsPowerOfTwo&&!(d(x)&&d(p)))continue;const B=g.transcoderFormat[A?1:0],S=g.engineFormat[A?1:0],T=g.engineType[0];return{transcoderFormat:B,engineFormat:S,engineType:T}}throw new Error("THREE.KTX2Loader: Failed to identify transcoding target.")}function d(m){return m<=2?!0:(m&m-1)===0&&m!==0}function f(m){if(m.length===1)return m[0];let x=0;for(let E=0;E<m.length;E++){const _=m[E];x+=_.byteLength}const p=new Uint8Array(x);let A=0;for(let E=0;E<m.length;E++){const _=m[E];p.set(_,A),A+=_.byteLength}return p}};const d_=new Set([sn,fs,Ki]),tc={[Nd]:sn,[Pd]:sn,[Bd]:sn,[Rd]:sn,[Fd]:fs,[Ld]:fs,[Id]:fs,[Td]:fs,[Ud]:Ki,[Dd]:Ki,[Sd]:Ki,[Cd]:Ki,[Ul]:za,[Qd]:Ha,[kd]:Ha},nc={[Nd]:bn,[Pd]:dn,[Bd]:nn,[Rd]:nn,[Fd]:bn,[Ld]:dn,[Id]:nn,[Td]:nn,[Ud]:bn,[Dd]:dn,[Sd]:nn,[Cd]:nn,[Ul]:dn,[Qd]:nn,[kd]:nn};async function f_(i){const{vkFormat:e}=i;if(tc[e]===void 0)throw new Error("THREE.KTX2Loader: Unsupported vkFormat.");let t;i.supercompressionScheme===mu&&(ec||(ec=new Promise(async a=>{const r=new l_;await r.init(),a(r)})),t=await ec);const n=[];for(let a=0;a<i.levels.length;a++){const r=Math.max(1,i.pixelWidth>>a),o=Math.max(1,i.pixelHeight>>a),c=i.pixelDepth?Math.max(1,i.pixelDepth>>a):0,l=i.levels[a];let h;if(i.supercompressionScheme===t_)h=l.levelData;else if(i.supercompressionScheme===mu)h=t.decode(l.levelData,l.uncompressedByteLength);else throw new Error("THREE.KTX2Loader: Unsupported supercompressionScheme.");let u;nc[e]===bn?u=new Float32Array(h.buffer,h.byteOffset,h.byteLength/Float32Array.BYTES_PER_ELEMENT):nc[e]===dn?u=new Uint16Array(h.buffer,h.byteOffset,h.byteLength/Uint16Array.BYTES_PER_ELEMENT):u=h,n.push({data:u,width:r,height:o,depth:c})}let s;if(d_.has(tc[e]))s=i.pixelDepth===0?new Za(n[0].data,i.pixelWidth,i.pixelHeight):new sd(n[0].data,i.pixelWidth,i.pixelHeight,i.pixelDepth);else{if(i.pixelDepth>0)throw new Error("THREE.KTX2Loader: Unsupported pixelDepth.");s=new co(n,i.pixelWidth,i.pixelHeight)}return s.mipmaps=n,s.type=nc[e],s.format=tc[e],s.colorSpace=Od(i),s.needsUpdate=!0,Promise.resolve(s)}function Od(i){const e=i.dataFormatDescriptor[0];return e.colorPrimaries===s_?e.transferFunction===gu?Wt:xn:e.colorPrimaries===a_?e.transferFunction===gu?h_:u_:(e.colorPrimaries===i_||console.warn(`THREE.KTX2Loader: Unsupported color primaries, "${e.colorPrimaries}"`),fi)}const A_={name:"HorizontalTiltShiftShader",uniforms:{tDiffuse:{value:null},h:{value:1/512},r:{value:.35}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform float h;
		uniform float r;

		varying vec2 vUv;

		void main() {

			vec4 sum = vec4( 0.0 );

			float hh = h * abs( r - vUv.y );

			sum += texture2D( tDiffuse, vec2( vUv.x - 4.0 * hh, vUv.y ) ) * 0.051;
			sum += texture2D( tDiffuse, vec2( vUv.x - 3.0 * hh, vUv.y ) ) * 0.0918;
			sum += texture2D( tDiffuse, vec2( vUv.x - 2.0 * hh, vUv.y ) ) * 0.12245;
			sum += texture2D( tDiffuse, vec2( vUv.x - 1.0 * hh, vUv.y ) ) * 0.1531;
			sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y ) ) * 0.1633;
			sum += texture2D( tDiffuse, vec2( vUv.x + 1.0 * hh, vUv.y ) ) * 0.1531;
			sum += texture2D( tDiffuse, vec2( vUv.x + 2.0 * hh, vUv.y ) ) * 0.12245;
			sum += texture2D( tDiffuse, vec2( vUv.x + 3.0 * hh, vUv.y ) ) * 0.0918;
			sum += texture2D( tDiffuse, vec2( vUv.x + 4.0 * hh, vUv.y ) ) * 0.051;

			gl_FragColor = sum;

		}`},p_={name:"VerticalTiltShiftShader",uniforms:{tDiffuse:{value:null},v:{value:1/512},r:{value:.35}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform float v;
		uniform float r;

		varying vec2 vUv;

		void main() {

			vec4 sum = vec4( 0.0 );

			float vv = v * abs( r - vUv.y );

			sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 4.0 * vv ) ) * 0.051;
			sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 3.0 * vv ) ) * 0.0918;
			sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 2.0 * vv ) ) * 0.12245;
			sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 1.0 * vv ) ) * 0.1531;
			sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y ) ) * 0.1633;
			sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 1.0 * vv ) ) * 0.1531;
			sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 2.0 * vv ) ) * 0.12245;
			sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 3.0 * vv ) ) * 0.0918;
			sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 4.0 * vv ) ) * 0.051;

			gl_FragColor = sum;

		}`};class Gd extends Ms{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new __(t)}),this.register(function(t){return new E_(t)}),this.register(function(t){return new B_(t)}),this.register(function(t){return new R_(t)}),this.register(function(t){return new D_(t)}),this.register(function(t){return new M_(t)}),this.register(function(t){return new y_(t)}),this.register(function(t){return new w_(t)}),this.register(function(t){return new C_(t)}),this.register(function(t){return new x_(t)}),this.register(function(t){return new S_(t)}),this.register(function(t){return new v_(t)}),this.register(function(t){return new T_(t)}),this.register(function(t){return new I_(t)}),this.register(function(t){return new g_(t)}),this.register(function(t){return new L_(t)}),this.register(function(t){return new P_(t)})}load(e,t,n,s){const a=this;let r;if(this.resourcePath!=="")r=this.resourcePath;else if(this.path!==""){const l=ka.extractUrlBase(e);r=ka.resolveURL(l,this.path)}else r=ka.extractUrlBase(e);this.manager.itemStart(e);const o=function(l){s?s(l):console.error(l),a.manager.itemError(e),a.manager.itemEnd(e)},c=new Na(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{a.parse(l,r,function(h){t(h),a.manager.itemEnd(e)},o)}catch(h){o(h)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let a;const r={},o={},c=new TextDecoder;if(typeof e=="string")a=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===zd){try{r[pt.KHR_BINARY_GLTF]=new U_(e)}catch(u){s&&s(u);return}a=JSON.parse(r[pt.KHR_BINARY_GLTF].content)}else a=JSON.parse(c.decode(e));else a=e;if(a.asset===void 0||a.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const l=new Y_(a,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const u=this.pluginCallbacks[h](l);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[u.name]=u,r[u.name]=!0}if(a.extensionsUsed)for(let h=0;h<a.extensionsUsed.length;++h){const u=a.extensionsUsed[h],d=a.extensionsRequired||[];switch(u){case pt.KHR_MATERIALS_UNLIT:r[u]=new b_;break;case pt.KHR_DRACO_MESH_COMPRESSION:r[u]=new F_(a,this.dracoLoader);break;case pt.KHR_TEXTURE_TRANSFORM:r[u]=new N_;break;case pt.KHR_MESH_QUANTIZATION:r[u]=new k_;break;default:d.indexOf(u)>=0&&o[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}l.setExtensions(r),l.setPlugins(o),l.parse(n,s)}parseAsync(e,t){const n=this;return new Promise(function(s,a){n.parse(e,t,s,a)})}}function m_(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}const pt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class g_{constructor(e){this.parser=e,this.name=pt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){const a=t[n];a.extensions&&a.extensions[this.name]&&a.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,a.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let s=t.cache.get(n);if(s)return s;const a=t.json,c=((a.extensions&&a.extensions[this.name]||{}).lights||[])[e];let l;const h=new De(16777215);c.color!==void 0&&h.setRGB(c.color[0],c.color[1],c.color[2],xn);const u=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new Md(h),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new dx(h),l.distance=u;break;case"spot":l=new hx(h),l.distance=u,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),l.decay=2,Bi(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),s=Promise.resolve(l),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,a=n.json.nodes[e],o=(a.extensions&&a.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(c){return n._getNodeRef(t.cache,o,c)})}}class b_{constructor(){this.name=pt.KHR_MATERIALS_UNLIT}getMaterialType(){return Qn}extendParams(e,t,n){const s=[];e.color=new De(1,1,1),e.opacity=1;const a=t.pbrMetallicRoughness;if(a){if(Array.isArray(a.baseColorFactor)){const r=a.baseColorFactor;e.color.setRGB(r[0],r[1],r[2],xn),e.opacity=r[3]}a.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",a.baseColorTexture,Wt))}return Promise.all(s)}}class x_{constructor(e){this.parser=e,this.name=pt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const a=s.extensions[this.name].emissiveStrength;return a!==void 0&&(t.emissiveIntensity=a),Promise.resolve()}}class __{constructor(e){this.parser=e,this.name=pt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:bi}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const a=[],r=s.extensions[this.name];if(r.clearcoatFactor!==void 0&&(t.clearcoat=r.clearcoatFactor),r.clearcoatTexture!==void 0&&a.push(n.assignTexture(t,"clearcoatMap",r.clearcoatTexture)),r.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=r.clearcoatRoughnessFactor),r.clearcoatRoughnessTexture!==void 0&&a.push(n.assignTexture(t,"clearcoatRoughnessMap",r.clearcoatRoughnessTexture)),r.clearcoatNormalTexture!==void 0&&(a.push(n.assignTexture(t,"clearcoatNormalMap",r.clearcoatNormalTexture)),r.clearcoatNormalTexture.scale!==void 0)){const o=r.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new He(o,o)}return Promise.all(a)}}class E_{constructor(e){this.parser=e,this.name=pt.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:bi}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const a=s.extensions[this.name];return t.dispersion=a.dispersion!==void 0?a.dispersion:0,Promise.resolve()}}class v_{constructor(e){this.parser=e,this.name=pt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:bi}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const a=[],r=s.extensions[this.name];return r.iridescenceFactor!==void 0&&(t.iridescence=r.iridescenceFactor),r.iridescenceTexture!==void 0&&a.push(n.assignTexture(t,"iridescenceMap",r.iridescenceTexture)),r.iridescenceIor!==void 0&&(t.iridescenceIOR=r.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),r.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=r.iridescenceThicknessMinimum),r.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=r.iridescenceThicknessMaximum),r.iridescenceThicknessTexture!==void 0&&a.push(n.assignTexture(t,"iridescenceThicknessMap",r.iridescenceThicknessTexture)),Promise.all(a)}}class M_{constructor(e){this.parser=e,this.name=pt.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:bi}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const a=[];t.sheenColor=new De(0,0,0),t.sheenRoughness=0,t.sheen=1;const r=s.extensions[this.name];if(r.sheenColorFactor!==void 0){const o=r.sheenColorFactor;t.sheenColor.setRGB(o[0],o[1],o[2],xn)}return r.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=r.sheenRoughnessFactor),r.sheenColorTexture!==void 0&&a.push(n.assignTexture(t,"sheenColorMap",r.sheenColorTexture,Wt)),r.sheenRoughnessTexture!==void 0&&a.push(n.assignTexture(t,"sheenRoughnessMap",r.sheenRoughnessTexture)),Promise.all(a)}}class y_{constructor(e){this.parser=e,this.name=pt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:bi}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const a=[],r=s.extensions[this.name];return r.transmissionFactor!==void 0&&(t.transmission=r.transmissionFactor),r.transmissionTexture!==void 0&&a.push(n.assignTexture(t,"transmissionMap",r.transmissionTexture)),Promise.all(a)}}class w_{constructor(e){this.parser=e,this.name=pt.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:bi}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const a=[],r=s.extensions[this.name];t.thickness=r.thicknessFactor!==void 0?r.thicknessFactor:0,r.thicknessTexture!==void 0&&a.push(n.assignTexture(t,"thicknessMap",r.thicknessTexture)),t.attenuationDistance=r.attenuationDistance||1/0;const o=r.attenuationColor||[1,1,1];return t.attenuationColor=new De().setRGB(o[0],o[1],o[2],xn),Promise.all(a)}}class C_{constructor(e){this.parser=e,this.name=pt.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:bi}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const a=s.extensions[this.name];return t.ior=a.ior!==void 0?a.ior:1.5,Promise.resolve()}}class S_{constructor(e){this.parser=e,this.name=pt.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:bi}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const a=[],r=s.extensions[this.name];t.specularIntensity=r.specularFactor!==void 0?r.specularFactor:1,r.specularTexture!==void 0&&a.push(n.assignTexture(t,"specularIntensityMap",r.specularTexture));const o=r.specularColorFactor||[1,1,1];return t.specularColor=new De().setRGB(o[0],o[1],o[2],xn),r.specularColorTexture!==void 0&&a.push(n.assignTexture(t,"specularColorMap",r.specularColorTexture,Wt)),Promise.all(a)}}class I_{constructor(e){this.parser=e,this.name=pt.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:bi}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const a=[],r=s.extensions[this.name];return t.bumpScale=r.bumpFactor!==void 0?r.bumpFactor:1,r.bumpTexture!==void 0&&a.push(n.assignTexture(t,"bumpMap",r.bumpTexture)),Promise.all(a)}}class T_{constructor(e){this.parser=e,this.name=pt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:bi}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const a=[],r=s.extensions[this.name];return r.anisotropyStrength!==void 0&&(t.anisotropy=r.anisotropyStrength),r.anisotropyRotation!==void 0&&(t.anisotropyRotation=r.anisotropyRotation),r.anisotropyTexture!==void 0&&a.push(n.assignTexture(t,"anisotropyMap",r.anisotropyTexture)),Promise.all(a)}}class B_{constructor(e){this.parser=e,this.name=pt.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;const a=s.extensions[this.name],r=t.options.ktx2Loader;if(!r){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,a.source,r)}}class R_{constructor(e){this.parser=e,this.name=pt.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,s=n.json,a=s.textures[e];if(!a.extensions||!a.extensions[t])return null;const r=a.extensions[t],o=s.images[r.source];let c=n.textureLoader;if(o.uri){const l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,r.source,c);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class D_{constructor(e){this.parser=e,this.name=pt.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,s=n.json,a=s.textures[e];if(!a.extensions||!a.extensions[t])return null;const r=a.extensions[t],o=s.images[r.source];let c=n.textureLoader;if(o.uri){const l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,r.source,c);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class L_{constructor(e){this.name=pt.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const s=n.extensions[this.name],a=this.parser.getDependency("buffer",s.buffer),r=this.parser.options.meshoptDecoder;if(!r||!r.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return a.then(function(o){const c=s.byteOffset||0,l=s.byteLength||0,h=s.count,u=s.byteStride,d=new Uint8Array(o,c,l);return r.decodeGltfBufferAsync?r.decodeGltfBufferAsync(h,u,d,s.mode,s.filter).then(function(f){return f.buffer}):r.ready.then(function(){const f=new ArrayBuffer(h*u);return r.decodeGltfBuffer(new Uint8Array(f),h,u,d,s.mode,s.filter),f})})}else return null}}class P_{constructor(e){this.name=pt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const s=t.meshes[n.mesh];for(const l of s.primitives)if(l.mode!==qn.TRIANGLES&&l.mode!==qn.TRIANGLE_STRIP&&l.mode!==qn.TRIANGLE_FAN&&l.mode!==void 0)return null;const r=n.extensions[this.name].attributes,o=[],c={};for(const l in r)o.push(this.parser.getDependency("accessor",r[l]).then(h=>(c[l]=h,c[l])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(l=>{const h=l.pop(),u=h.isGroup?h.children:[h],d=l[0].count,f=[];for(const m of u){const x=new $e,p=new G,A=new Vt,E=new G(1,1,1),_=new Qt(m.geometry,m.material,d);for(let g=0;g<d;g++)c.TRANSLATION&&p.fromBufferAttribute(c.TRANSLATION,g),c.ROTATION&&A.fromBufferAttribute(c.ROTATION,g),c.SCALE&&E.fromBufferAttribute(c.SCALE,g),_.setMatrixAt(g,x.compose(p,A,E));for(const g in c)if(g==="_COLOR_0"){const B=c[g];_.instanceColor=new Xc(B.array,B.itemSize,B.normalized)}else g!=="TRANSLATION"&&g!=="ROTATION"&&g!=="SCALE"&&m.geometry.setAttribute(g,c[g]);Ot.prototype.copy.call(_,m),this.parser.assignFinalMaterial(_),f.push(_)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}}const zd="glTF",wa=12,_u={JSON:1313821514,BIN:5130562};class U_{constructor(e){this.name=pt.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,wa),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==zd)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const s=this.header.length-wa,a=new DataView(e,wa);let r=0;for(;r<s;){const o=a.getUint32(r,!0);r+=4;const c=a.getUint32(r,!0);if(r+=4,c===_u.JSON){const l=new Uint8Array(e,wa+r,o);this.content=n.decode(l)}else if(c===_u.BIN){const l=wa+r;this.body=e.slice(l,l+o)}r+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class F_{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=pt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,s=this.dracoLoader,a=e.extensions[this.name].bufferView,r=e.extensions[this.name].attributes,o={},c={},l={};for(const h in r){const u=el[h]||h.toLowerCase();o[u]=r[h]}for(const h in e.attributes){const u=el[h]||h.toLowerCase();if(r[h]!==void 0){const d=n.accessors[e.attributes[h]],f=Zs[d.componentType];l[u]=f.name,c[u]=d.normalized===!0}}return t.getDependency("bufferView",a).then(function(h){return new Promise(function(u,d){s.decodeDracoFile(h,function(f){for(const m in f.attributes){const x=f.attributes[m],p=c[m];p!==void 0&&(x.normalized=p)}u(f)},o,l,xn,d)})})}}class N_{constructor(){this.name=pt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class k_{constructor(){this.name=pt.KHR_MESH_QUANTIZATION}}class Hd extends $a{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,a=e*s*3+s;for(let r=0;r!==s;r++)t[r]=n[a+r];return t}interpolate_(e,t,n,s){const a=this.resultBuffer,r=this.sampleValues,o=this.valueSize,c=o*2,l=o*3,h=s-t,u=(n-t)/h,d=u*u,f=d*u,m=e*l,x=m-l,p=-2*f+3*d,A=f-d,E=1-p,_=A-d+u;for(let g=0;g!==o;g++){const B=r[x+g+o],S=r[x+g+c]*h,T=r[m+g+o],U=r[m+g]*h;a[g]=E*B+_*S+p*T+A*U}return a}}const Q_=new Vt;class O_ extends Hd{interpolate_(e,t,n,s){const a=super.interpolate_(e,t,n,s);return Q_.fromArray(a).normalize().toArray(a),a}}const qn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},Zs={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Eu={9728:An,9729:Cn,9984:Vu,9985:Ur,9986:Ia,9987:pi},vu={33071:Ri,33648:zr,10497:Gn},ic={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},el={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Vi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},G_={CUBICSPLINE:void 0,LINEAR:Wa,STEP:Va},sc={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function z_(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new Es({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:ci})),i.DefaultMaterial}function os(i,e,t){for(const n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Bi(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function H_(i,e,t){let n=!1,s=!1,a=!1;for(let l=0,h=e.length;l<h;l++){const u=e[l];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(s=!0),u.COLOR_0!==void 0&&(a=!0),n&&s&&a)break}if(!n&&!s&&!a)return Promise.resolve(i);const r=[],o=[],c=[];for(let l=0,h=e.length;l<h;l++){const u=e[l];if(n){const d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):i.attributes.position;r.push(d)}if(s){const d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):i.attributes.normal;o.push(d)}if(a){const d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):i.attributes.color;c.push(d)}}return Promise.all([Promise.all(r),Promise.all(o),Promise.all(c)]).then(function(l){const h=l[0],u=l[1],d=l[2];return n&&(i.morphAttributes.position=h),s&&(i.morphAttributes.normal=u),a&&(i.morphAttributes.color=d),i.morphTargetsRelative=!0,i})}function V_(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function W_(i){let e;const t=i.extensions&&i.extensions[pt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+ac(t.attributes):e=i.indices+":"+ac(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+ac(i.targets[n]);return e}function ac(i){let e="";const t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function tl(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function j_(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const q_=new $e;class Y_{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new m_,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,a=!1,r=-1;if(typeof navigator<"u"){const o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;const c=o.match(/Version\/(\d+)/);s=n&&c?parseInt(c[1],10):-1,a=o.indexOf("Firefox")>-1,r=a?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||a&&r<98?this.textureLoader=new Bl(this.options.manager):this.textureLoader=new Ax(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Na(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,s=this.json,a=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(r){return r._markDefs&&r._markDefs()}),Promise.all(this._invokeAll(function(r){return r.beforeRoot&&r.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(r){const o={scene:r[0][s.scene||0],scenes:r[0],animations:r[1],cameras:r[2],asset:s.asset,parser:n,userData:{}};return os(a,o,s),Bi(o,s),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(o)})).then(function(){for(const c of o.scenes)c.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,a=t.length;s<a;s++){const r=t[s].joints;for(let o=0,c=r.length;o<c;o++)e[r[o]].isBone=!0}for(let s=0,a=e.length;s<a;s++){const r=e[s];r.mesh!==void 0&&(this._addNodeRef(this.meshCache,r.mesh),r.skin!==void 0&&(n[r.mesh].isSkinnedMesh=!0)),r.camera!==void 0&&this._addNodeRef(this.cameraCache,r.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const s=n.clone(),a=(r,o)=>{const c=this.associations.get(r);c!=null&&this.associations.set(o,c);for(const[l,h]of r.children.entries())a(h,o.children[l])};return a(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const s=e(t[n]);if(s)return s}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let s=0;s<t.length;s++){const a=e(t[s]);a&&n.push(a)}return n}getDependency(e,t){const n=e+":"+t;let s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(a){return a.loadNode&&a.loadNode(t)});break;case"mesh":s=this._invokeOne(function(a){return a.loadMesh&&a.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(a){return a.loadBufferView&&a.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(a){return a.loadMaterial&&a.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(a){return a.loadTexture&&a.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(a){return a.loadAnimation&&a.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(a){return a!=this&&a.getDependency&&a.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(a,r){return n.getDependency(e,r)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[pt.KHR_BINARY_GLTF].body);const s=this.options;return new Promise(function(a,r){n.load(ka.resolveURL(t.uri,s.path),a,void 0,function(){r(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const s=t.byteLength||0,a=t.byteOffset||0;return n.slice(a,a+s)})}loadAccessor(e){const t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){const r=ic[s.type],o=Zs[s.componentType],c=s.normalized===!0,l=new o(s.count*r);return Promise.resolve(new Gt(l,r,c))}const a=[];return s.bufferView!==void 0?a.push(this.getDependency("bufferView",s.bufferView)):a.push(null),s.sparse!==void 0&&(a.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),a.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(a).then(function(r){const o=r[0],c=ic[s.type],l=Zs[s.componentType],h=l.BYTES_PER_ELEMENT,u=h*c,d=s.byteOffset||0,f=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,m=s.normalized===!0;let x,p;if(f&&f!==u){const A=Math.floor(d/f),E="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+A+":"+s.count;let _=t.cache.get(E);_||(x=new l(o,A*f,s.count*f/h),_=new _b(x,f/h),t.cache.add(E,_)),p=new yl(_,c,d%f/h,m)}else o===null?x=new l(s.count*c):x=new l(o,d,s.count*c),p=new Gt(x,c,m);if(s.sparse!==void 0){const A=ic.SCALAR,E=Zs[s.sparse.indices.componentType],_=s.sparse.indices.byteOffset||0,g=s.sparse.values.byteOffset||0,B=new E(r[1],_,s.sparse.count*A),S=new l(r[2],g,s.sparse.count*c);o!==null&&(p=new Gt(p.array.slice(),p.itemSize,p.normalized)),p.normalized=!1;for(let T=0,U=B.length;T<U;T++){const M=B[T];if(p.setX(M,S[T*c]),c>=2&&p.setY(M,S[T*c+1]),c>=3&&p.setZ(M,S[T*c+2]),c>=4&&p.setW(M,S[T*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}p.normalized=m}return p})}loadTexture(e){const t=this.json,n=this.options,a=t.textures[e].source,r=t.images[a];let o=this.textureLoader;if(r.uri){const c=n.manager.getHandler(r.uri);c!==null&&(o=c)}return this.loadTextureImage(e,a,o)}loadTextureImage(e,t,n){const s=this,a=this.json,r=a.textures[e],o=a.images[t],c=(o.uri||o.bufferView)+":"+r.sampler;if(this.textureCache[c])return this.textureCache[c];const l=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=r.name||o.name||"",h.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(h.name=o.uri);const d=(a.samplers||{})[r.sampler]||{};return h.magFilter=Eu[d.magFilter]||Cn,h.minFilter=Eu[d.minFilter]||pi,h.wrapS=vu[d.wrapS]||Gn,h.wrapT=vu[d.wrapT]||Gn,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==An&&h.minFilter!==Cn,s.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){const n=this,s=this.json,a=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());const r=s.images[e],o=self.URL||self.webkitURL;let c=r.uri||"",l=!1;if(r.bufferView!==void 0)c=n.getDependency("bufferView",r.bufferView).then(function(u){l=!0;const d=new Blob([u],{type:r.mimeType});return c=o.createObjectURL(d),c});else if(r.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const h=Promise.resolve(c).then(function(u){return new Promise(function(d,f){let m=d;t.isImageBitmapLoader===!0&&(m=function(x){const p=new Xt(x);p.needsUpdate=!0,d(p)}),t.load(ka.resolveURL(u,a.path),m,void 0,f)})}).then(function(u){return l===!0&&o.revokeObjectURL(c),Bi(u,r),u.userData.mimeType=r.mimeType||j_(r.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,s){const a=this;return this.getDependency("texture",n.index).then(function(r){if(!r)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(r=r.clone(),r.channel=n.texCoord),a.extensions[pt.KHR_TEXTURE_TRANSFORM]){const o=n.extensions!==void 0?n.extensions[pt.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const c=a.associations.get(r);r=a.extensions[pt.KHR_TEXTURE_TRANSFORM].extendTexture(r,o),a.associations.set(r,c)}}return s!==void 0&&(r.colorSpace=s),e[t]=r,r})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const s=t.attributes.tangent===void 0,a=t.attributes.color!==void 0,r=t.attributes.normal===void 0;if(e.isPoints){const o="PointsMaterial:"+n.uuid;let c=this.cache.get(o);c||(c=new gd,Jn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(o,c)),n=c}else if(e.isLine){const o="LineBasicMaterial:"+n.uuid;let c=this.cache.get(o);c||(c=new md,Jn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(o,c)),n=c}if(s||a||r){let o="ClonedMaterial:"+n.uuid+":";s&&(o+="derivative-tangents:"),a&&(o+="vertex-colors:"),r&&(o+="flat-shading:");let c=this.cache.get(o);c||(c=n.clone(),a&&(c.vertexColors=!0),r&&(c.flatShading=!0),s&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(o,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return Es}loadMaterial(e){const t=this,n=this.json,s=this.extensions,a=n.materials[e];let r;const o={},c=a.extensions||{},l=[];if(c[pt.KHR_MATERIALS_UNLIT]){const u=s[pt.KHR_MATERIALS_UNLIT];r=u.getMaterialType(),l.push(u.extendParams(o,a,t))}else{const u=a.pbrMetallicRoughness||{};if(o.color=new De(1,1,1),o.opacity=1,Array.isArray(u.baseColorFactor)){const d=u.baseColorFactor;o.color.setRGB(d[0],d[1],d[2],xn),o.opacity=d[3]}u.baseColorTexture!==void 0&&l.push(t.assignTexture(o,"map",u.baseColorTexture,Wt)),o.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,o.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(o,"metalnessMap",u.metallicRoughnessTexture)),l.push(t.assignTexture(o,"roughnessMap",u.metallicRoughnessTexture))),r=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,o)})))}a.doubleSided===!0&&(o.side=zt);const h=a.alphaMode||sc.OPAQUE;if(h===sc.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===sc.MASK&&(o.alphaTest=a.alphaCutoff!==void 0?a.alphaCutoff:.5)),a.normalTexture!==void 0&&r!==Qn&&(l.push(t.assignTexture(o,"normalMap",a.normalTexture)),o.normalScale=new He(1,1),a.normalTexture.scale!==void 0)){const u=a.normalTexture.scale;o.normalScale.set(u,u)}if(a.occlusionTexture!==void 0&&r!==Qn&&(l.push(t.assignTexture(o,"aoMap",a.occlusionTexture)),a.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=a.occlusionTexture.strength)),a.emissiveFactor!==void 0&&r!==Qn){const u=a.emissiveFactor;o.emissive=new De().setRGB(u[0],u[1],u[2],xn)}return a.emissiveTexture!==void 0&&r!==Qn&&l.push(t.assignTexture(o,"emissiveMap",a.emissiveTexture,Wt)),Promise.all(l).then(function(){const u=new r(o);return a.name&&(u.name=a.name),Bi(u,a),t.associations.set(u,{materials:e}),a.extensions&&os(s,u,a),u})}createUniqueName(e){const t=Tt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,s=this.primitiveCache;function a(o){return n[pt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(c){return Mu(c,o,t)})}const r=[];for(let o=0,c=e.length;o<c;o++){const l=e[o],h=W_(l),u=s[h];if(u)r.push(u.promise);else{let d;l.extensions&&l.extensions[pt.KHR_DRACO_MESH_COMPRESSION]?d=a(l):d=Mu(new Bt,l,t),s[h]={primitive:l,promise:d},r.push(d)}}return Promise.all(r)}loadMesh(e){const t=this,n=this.json,s=this.extensions,a=n.meshes[e],r=a.primitives,o=[];for(let c=0,l=r.length;c<l;c++){const h=r[c].material===void 0?z_(this.cache):this.getDependency("material",r[c].material);o.push(h)}return o.push(t.loadGeometries(r)),Promise.all(o).then(function(c){const l=c.slice(0,c.length-1),h=c[c.length-1],u=[];for(let f=0,m=h.length;f<m;f++){const x=h[f],p=r[f];let A;const E=l[f];if(p.mode===qn.TRIANGLES||p.mode===qn.TRIANGLE_STRIP||p.mode===qn.TRIANGLE_FAN||p.mode===void 0)A=a.isSkinnedMesh===!0?new vb(x,E):new lt(x,E),A.isSkinnedMesh===!0&&A.normalizeSkinWeights(),p.mode===qn.TRIANGLE_STRIP?A.geometry=Au(A.geometry,$u):p.mode===qn.TRIANGLE_FAN&&(A.geometry=Au(A.geometry,jc));else if(p.mode===qn.LINES)A=new wb(x,E);else if(p.mode===qn.LINE_STRIP)A=new Cl(x,E);else if(p.mode===qn.LINE_LOOP)A=new Cb(x,E);else if(p.mode===qn.POINTS)A=new Sb(x,E);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+p.mode);Object.keys(A.geometry.morphAttributes).length>0&&V_(A,a),A.name=t.createUniqueName(a.name||"mesh_"+e),Bi(A,a),p.extensions&&os(s,A,p),t.assignFinalMaterial(A),u.push(A)}for(let f=0,m=u.length;f<m;f++)t.associations.set(u[f],{meshes:e,primitives:f});if(u.length===1)return a.extensions&&os(s,u[0],a),u[0];const d=new Bn;a.extensions&&os(s,d,a),t.associations.set(d,{meshes:e});for(let f=0,m=u.length;f<m;f++)d.add(u[f]);return d})}loadCamera(e){let t;const n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new yn(Jt.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new ao(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Bi(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let s=0,a=t.joints.length;s<a;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){const a=s.pop(),r=s,o=[],c=[];for(let l=0,h=r.length;l<h;l++){const u=r[l];if(u){o.push(u);const d=new $e;a!==null&&d.fromArray(a.array,l*16),c.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new wl(o,c)})}loadAnimation(e){const t=this.json,n=this,s=t.animations[e],a=s.name?s.name:"animation_"+e,r=[],o=[],c=[],l=[],h=[];for(let u=0,d=s.channels.length;u<d;u++){const f=s.channels[u],m=s.samplers[f.sampler],x=f.target,p=x.node,A=s.parameters!==void 0?s.parameters[m.input]:m.input,E=s.parameters!==void 0?s.parameters[m.output]:m.output;x.node!==void 0&&(r.push(this.getDependency("node",p)),o.push(this.getDependency("accessor",A)),c.push(this.getDependency("accessor",E)),l.push(m),h.push(x))}return Promise.all([Promise.all(r),Promise.all(o),Promise.all(c),Promise.all(l),Promise.all(h)]).then(function(u){const d=u[0],f=u[1],m=u[2],x=u[3],p=u[4],A=[];for(let E=0,_=d.length;E<_;E++){const g=d[E],B=f[E],S=m[E],T=x[E],U=p[E];if(g===void 0)continue;g.updateMatrix&&g.updateMatrix();const M=n._createAnimationTracks(g,B,S,T,U);if(M)for(let y=0;y<M.length;y++)A.push(M[y])}return new nx(a,void 0,A)})}createNodeMesh(e){const t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(a){const r=n._getNodeRef(n.meshCache,s.mesh,a);return s.weights!==void 0&&r.traverse(function(o){if(o.isMesh)for(let c=0,l=s.weights.length;c<l;c++)o.morphTargetInfluences[c]=s.weights[c]}),r})}loadNode(e){const t=this.json,n=this,s=t.nodes[e],a=n._loadNodeShallow(e),r=[],o=s.children||[];for(let l=0,h=o.length;l<h;l++)r.push(n.getDependency("node",o[l]));const c=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([a,Promise.all(r),c]).then(function(l){const h=l[0],u=l[1],d=l[2];d!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(d,q_)});for(let f=0,m=u.length;f<m;f++)h.add(u[f]);return h})}_loadNodeShallow(e){const t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const a=t.nodes[e],r=a.name?s.createUniqueName(a.name):"",o=[],c=s._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&o.push(c),a.camera!==void 0&&o.push(s.getDependency("camera",a.camera).then(function(l){return s._getNodeRef(s.cameraCache,a.camera,l)})),s._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){o.push(l)}),this.nodeCache[e]=Promise.all(o).then(function(l){let h;if(a.isBone===!0?h=new pd:l.length>1?h=new Bn:l.length===1?h=l[0]:h=new Ot,h!==l[0])for(let u=0,d=l.length;u<d;u++)h.add(l[u]);if(a.name&&(h.userData.name=a.name,h.name=r),Bi(h,a),a.extensions&&os(n,h,a),a.matrix!==void 0){const u=new $e;u.fromArray(a.matrix),h.applyMatrix4(u)}else a.translation!==void 0&&h.position.fromArray(a.translation),a.rotation!==void 0&&h.quaternion.fromArray(a.rotation),a.scale!==void 0&&h.scale.fromArray(a.scale);return s.associations.has(h)||s.associations.set(h,{}),s.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],s=this,a=new Bn;n.name&&(a.name=s.createUniqueName(n.name)),Bi(a,n),n.extensions&&os(t,a,n);const r=n.nodes||[],o=[];for(let c=0,l=r.length;c<l;c++)o.push(s.getDependency("node",r[c]));return Promise.all(o).then(function(c){for(let h=0,u=c.length;h<u;h++)a.add(c[h]);const l=h=>{const u=new Map;for(const[d,f]of s.associations)(d instanceof Jn||d instanceof Xt)&&u.set(d,f);return h.traverse(d=>{const f=s.associations.get(d);f!=null&&u.set(d,f)}),u};return s.associations=l(a),a})}_createAnimationTracks(e,t,n,s,a){const r=[],o=e.name?e.name:e.uuid,c=[];Vi[a.path]===Vi.weights?e.traverse(function(d){d.morphTargetInfluences&&c.push(d.name?d.name:d.uuid)}):c.push(o);let l;switch(Vi[a.path]){case Vi.weights:l=ra;break;case Vi.rotation:l=oa;break;case Vi.position:case Vi.scale:l=ca;break;default:n.itemSize===1?l=ra:l=ca;break}const h=s.interpolation!==void 0?G_[s.interpolation]:Wa,u=this._getArrayFromAccessor(n);for(let d=0,f=c.length;d<f;d++){const m=new l(c[d]+"."+Vi[a.path],t.array,u,h);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(m),r.push(m)}return r}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=tl(t.constructor),s=new Float32Array(t.length);for(let a=0,r=t.length;a<r;a++)s[a]=t[a]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const s=this instanceof oa?O_:Hd;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function X_(i,e,t){const n=e.attributes,s=new Ui;if(n.POSITION!==void 0){const o=t.json.accessors[n.POSITION],c=o.min,l=o.max;if(c!==void 0&&l!==void 0){if(s.set(new G(c[0],c[1],c[2]),new G(l[0],l[1],l[2])),o.normalized){const h=tl(Zs[o.componentType]);s.min.multiplyScalar(h),s.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const a=e.targets;if(a!==void 0){const o=new G,c=new G;for(let l=0,h=a.length;l<h;l++){const u=a[l];if(u.POSITION!==void 0){const d=t.json.accessors[u.POSITION],f=d.min,m=d.max;if(f!==void 0&&m!==void 0){if(c.setX(Math.max(Math.abs(f[0]),Math.abs(m[0]))),c.setY(Math.max(Math.abs(f[1]),Math.abs(m[1]))),c.setZ(Math.max(Math.abs(f[2]),Math.abs(m[2]))),d.normalized){const x=tl(Zs[d.componentType]);c.multiplyScalar(x)}o.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(o)}i.boundingBox=s;const r=new gi;s.getCenter(r.center),r.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=r}function Mu(i,e,t){const n=e.attributes,s=[];function a(r,o){return t.getDependency("accessor",r).then(function(c){i.setAttribute(o,c)})}for(const r in n){const o=el[r]||r.toLowerCase();o in i.attributes||s.push(a(n[r],o))}if(e.indices!==void 0&&!i.index){const r=t.getDependency("accessor",e.indices).then(function(o){i.setIndex(o)});s.push(r)}return gt.workingColorSpace!==xn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${gt.workingColorSpace}" not supported.`),Bi(i,e),X_(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?H_(i,e.targets,t):i})}var Vd=(function(){var i="b9H79Tebbbe8Fv9Gbb9Gvuuuuueu9Giuuub9Geueu9Giuuueuikqbeeedddillviebeoweuec:q;iekr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbeY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVbdE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbiL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtblK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbol79IV9Rbrq:P8Yqdbk;3sezu8Jjjjjbcj;eb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Radz1jjjbhwcj;abad9UhoaicefhldnadTmbaoc;WFbGgocjdaocjd6EhDcbhqinaqae9pmeaDaeaq9RaqaDfae6Egkcsfgocl4cifcd4hxdndndndnaoc9WGgmTmbcbhPcehsawcjdfhzalhHinaraH9Rax6midnaraHaxfgl9RcK6mbczhoinawcj;cbfaogifgoc9WfhOdndndndndnaHaic9WfgAco4fRbbaAci4coG4ciGPlbedibkaO9cb83ibaOcwf9cb83ibxikaOalRblalRbbgAco4gCaCciSgCE86bbaocGfalclfaCfgORbbaAcl4ciGgCaCciSgCE86bbaocVfaOaCfgORbbaAcd4ciGgCaCciSgCE86bbaoc7faOaCfgORbbaAciGgAaAciSgAE86bbaoctfaOaAfgARbbalRbegOco4gCaCciSgCE86bbaoc91faAaCfgARbbaOcl4ciGgCaCciSgCE86bbaoc4faAaCfgARbbaOcd4ciGgCaCciSgCE86bbaoc93faAaCfgARbbaOciGgOaOciSgOE86bbaoc94faAaOfgARbbalRbdgOco4gCaCciSgCE86bbaoc95faAaCfgARbbaOcl4ciGgCaCciSgCE86bbaoc96faAaCfgARbbaOcd4ciGgCaCciSgCE86bbaoc97faAaCfgARbbaOciGgOaOciSgOE86bbaoc98faAaOfgORbbalRbiglco4gAaAciSgAE86bbaoc99faOaAfgORbbalcl4ciGgAaAciSgAE86bbaoc9:faOaAfgORbbalcd4ciGgAaAciSgAE86bbaocufaOaAfgoRbbalciGglalciSglE86bbaoalfhlxdkaOalRbwalRbbgAcl4gCaCcsSgCE86bbaocGfalcwfaCfgORbbaAcsGgAaAcsSgAE86bbaocVfaOaAfgORbbalRbegAcl4gCaCcsSgCE86bbaoc7faOaCfgORbbaAcsGgAaAcsSgAE86bbaoctfaOaAfgORbbalRbdgAcl4gCaCcsSgCE86bbaoc91faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc4faOaAfgORbbalRbigAcl4gCaCcsSgCE86bbaoc93faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc94faOaAfgORbbalRblgAcl4gCaCcsSgCE86bbaoc95faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc96faOaAfgORbbalRbvgAcl4gCaCcsSgCE86bbaoc97faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc98faOaAfgORbbalRbogAcl4gCaCcsSgCE86bbaoc99faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc9:faOaAfgORbbalRbrglcl4gAaAcsSgAE86bbaocufaOaAfgoRbbalcsGglalcsSglE86bbaoalfhlxekaOal8Pbb83bbaOcwfalcwf8Pbb83bbalczfhlkdnaiam9pmbaiczfhoaral9RcL0mekkaiam6mialTmidnakTmbawaPfRbbhOcbhoazhiinaiawcj;cbfaofRbbgAce4cbaAceG9R7aOfgO86bbaiadfhiaocefgoak9hmbkkazcefhzaPcefgPad6hsalhHaPad9hmexvkkcbhlasceGmdxikalaxad2fhCdnakTmbcbhHcehsawcjdfhminaral9Rax6mialTmdalaxfhlawaHfRbbhOcbhoamhiinaiawcj;cbfaofRbbgAce4cbaAceG9R7aOfgO86bbaiadfhiaocefgoak9hmbkamcefhmaHcefgHad6hsaHad9hmbkaChlxikcbhocehsinaral9Rax6mdalTmealaxfhlaocefgoad6hsadao9hmbkaChlxdkcbhlasceGTmekc9:hoxikabaqad2fawcjdfakad2z1jjjb8Aawawcjdfakcufad2fadz1jjjb8Aakaqfhqalmbkc9:hoxekcbc99aral9Radcaadca0ESEhokavcj;ebf8Kjjjjbaok;yzeHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecjez:jjjjb8AavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhodnaeTmbcmcsaDceSEhkcbhxcbhmcbhDcbhicbhlindnaoaq9nmbc9:hoxikdndnawRbbgrc;Ve0mbavc;abfalarcl4cu7fcsGcitfgPydlhsaPydbhzdnarcsGgPak9pmbavaiarcu7fcsGcdtfydbaxaPEhraPThPdndnadcd9hmbabaDcetfgHaz87ebaHcdfas87ebaHclfar87ebxekabaDcdtfgHazBdbaHclfasBdbaHcwfarBdbkaxaPfhxavc;abfalcitfgHarBdbaHasBdlavaicdtfarBdbavc;abfalcefcsGglcitfgHazBdbaHarBdlaiaPfhialcefhlxdkdndnaPcsSmbamaPfaPc987fcefhmxekaocefhrao8SbbgPcFeGhHdndnaPcu9mmbarhoxekaocvfhoaHcFbGhHcrhPdninar8SbbgOcFbGaPtaHVhHaOcu9kmearcefhraPcrfgPc8J9hmbxdkkarcefhokaHce4cbaHceG9R7amfhmkdndnadcd9hmbabaDcetfgraz87ebarcdfas87ebarclfam87ebxekabaDcdtfgrazBdbarclfasBdbarcwfamBdbkavc;abfalcitfgramBdbarasBdlavaicdtfamBdbavc;abfalcefcsGglcitfgrazBdbaramBdlaicefhialcefhlxekdnarcpe0mbaxcefgOavaiaqarcsGfRbbgPcl49RcsGcdtfydbaPcz6gHEhravaiaP9RcsGcdtfydbaOaHfgsaPcsGgOEhPaOThOdndnadcd9hmbabaDcetfgzax87ebazcdfar87ebazclfaP87ebxekabaDcdtfgzaxBdbazclfarBdbazcwfaPBdbkavaicdtfaxBdbavc;abfalcitfgzarBdbazaxBdlavaicefgicsGcdtfarBdbavc;abfalcefcsGcitfgzaPBdbazarBdlavaiaHfcsGgicdtfaPBdbavc;abfalcdfcsGglcitfgraxBdbaraPBdlalcefhlaiaOfhiasaOfhxxekaxcbaoRbbgzEgAarc;:eSgrfhsazcsGhCazcl4hXdndnazcs0mbascefhOxekashOavaiaX9RcsGcdtfydbhskdndnaCmbaOcefhxxekaOhxavaiaz9RcsGcdtfydbhOkdndnarTmbaocefhrxekaocdfhrao8SbegHcFeGhPdnaHcu9kmbaocofhAaPcFbGhPcrhodninar8SbbgHcFbGaotaPVhPaHcu9kmearcefhraocrfgoc8J9hmbkaAhrxekarcefhrkaPce4cbaPceG9R7amfgmhAkdndnaXcsSmbarhPxekarcefhPar8SbbgocFeGhHdnaocu9kmbarcvfhsaHcFbGhHcrhodninaP8SbbgrcFbGaotaHVhHarcu9kmeaPcefhPaocrfgoc8J9hmbkashPxekaPcefhPkaHce4cbaHceG9R7amfgmhskdndnaCcsSmbaPhoxekaPcefhoaP8SbbgrcFeGhHdnarcu9kmbaPcvfhOaHcFbGhHcrhrdninao8SbbgPcFbGartaHVhHaPcu9kmeaocefhoarcrfgrc8J9hmbkaOhoxekaocefhokaHce4cbaHceG9R7amfgmhOkdndnadcd9hmbabaDcetfgraA87ebarcdfas87ebarclfaO87ebxekabaDcdtfgraABdbarclfasBdbarcwfaOBdbkavc;abfalcitfgrasBdbaraABdlavaicdtfaABdbavc;abfalcefcsGcitfgraOBdbarasBdlavaicefgicsGcdtfasBdbavc;abfalcdfcsGcitfgraABdbaraOBdlavaiazcz6aXcsSVfgicsGcdtfaOBdbaiaCTaCcsSVfhialcifhlkawcefhwalcsGhlaicsGhiaDcifgDae6mbkkcbc99aoaqSEhokavc;aef8Kjjjjbaok:llevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:Lvoeue99dud99eud99dndnadcl9hmbaeTmeindndnabcdfgd8Sbb:Yab8Sbbgi:Ygl:l:tabcefgv8Sbbgo:Ygr:l:tgwJbb;:9cawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai86bbdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad86bbdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad86bbabclfhbaecufgembxdkkaeTmbindndnabclfgd8Ueb:Yab8Uebgi:Ygl:l:tabcdfgv8Uebgo:Ygr:l:tgwJb;:FSawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai87ebdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad87ebdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad87ebabcwfhbaecufgembkkk;siliui99iue99dnaeTmbcbhiabhlindndnJ;Zl81Zalcof8UebgvciV:Y:vgoal8Ueb:YNgrJb;:FSNJbbbZJbbb:;arJbbbb9GEMgw:lJbbb9p9DTmbaw:OhDxekcjjjj94hDkalclf8Uebhqalcdf8UebhkabavcefciGaiVcetfaD87ebdndnaoak:YNgwJb;:FSNJbbbZJbbb:;awJbbbb9GEMgx:lJbbb9p9DTmbax:Ohkxekcjjjj94hkkabavcdfciGaiVcetfak87ebdndnaoaq:YNgoJb;:FSNJbbbZJbbb:;aoJbbbb9GEMgx:lJbbb9p9DTmbax:Ohqxekcjjjj94hqkabavcufciGaiVcetfaq87ebdndnJbbjZararN:tawawN:taoaoN:tgrJbbbbarJbbbb9GE:rJb;:FSNJbbbZMgr:lJbbb9p9DTmbar:Ohqxekcjjjj94hqkabavciGaiVcetfaq87ebalcwfhlaiclfhiaecufgembkkk9mbdnadcd4ae2geTmbinababydbgdcwtcw91:Yadce91cjjj;8ifcjjj98G::NUdbabclfhbaecufgembkkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik;LeeeudndnaeabVciGTmbabhixekdndnadcz9pmbabhixekabhiinaiaeydbBdbaiclfaeclfydbBdbaicwfaecwfydbBdbaicxfaecxfydbBdbaiczfhiaeczfheadc9Wfgdcs0mbkkadcl6mbinaiaeydbBdbaeclfheaiclfhiadc98fgdci0mbkkdnadTmbinaiaeRbb86bbaicefhiaecefheadcufgdmbkkabk;aeedudndnabciGTmbabhixekaecFeGc:b:c:ew2hldndnadcz9pmbabhixekabhiinaialBdbaicxfalBdbaicwfalBdbaiclfalBdbaiczfhiadc9Wfgdcs0mbkkadcl6mbinaialBdbaiclfhiadc98fgdci0mbkkdnadTmbinaiae86bbaicefhiadcufgdmbkkabkkkebcjwklz9Kbb",e="b9H79TebbbeKl9Gbb9Gvuuuuueu9Giuuub9Geueuikqbbebeedddilve9Weeeviebeoweuec:q;Aekr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbdY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVblE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtboK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbrL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbwl79IV9RbDq;t9tqlbzik9:evu8Jjjjjbcz9Rhbcbheincbhdcbhiinabcwfadfaicjuaead4ceGglE86bbaialfhiadcefgdcw9hmbkaec:q:yjjbfai86bbaecitc:q1jjbfab8Piw83ibaecefgecjd9hmbkk;h8JlHud97euo978Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Rad;8qbbcj;abad9UhoaicefhldnadTmbaoc;WFbGgocjdaocjd6EhwcbhDinaDae9pmeawaeaD9RaDawfae6Egqcsfgoc9WGgkci2hxakcethmaocl4cifcd4hPabaDad2fhscbhzdnincehHalhOcbhAdninaraO9RaP6miavcj;cbfaAak2fhCaOaPfhlcbhidnakc;ab6mbaral9Rc;Gb6mbcbhoinaCaofhidndndndndnaOaoco4fRbbgXciGPlbedibkaipxbbbbbbbbbbbbbbbbpklbxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklbalczfhlkdndndndndnaXcd4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklzxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklzalczfhlkdndndndndnaXcl4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklaxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklaalczfhlkdndndndndnaXco4Plbedibkaipxbbbbbbbbbbbbbbbbpkl8WxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WalclfaYpQbfaXc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WalcwfaYpQbfaXc:q:yjjbfRbbfhlxekaialpbbbpkl8Walczfhlkaoc;abfhiaocjefak0meaihoaral9Rc;Fb0mbkkdndnaiak9pmbaici4hoinaral9RcK6mdaCaifhXdndndndndnaOaico4fRbbaocoG4ciGPlbedibkaXpxbbbbbbbbbbbbbbbbpklbxikaXalpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaXalpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaXalpbbbpklbalczfhlkaocdfhoaiczfgiak6mbkkalTmbaAci6hHalhOaAcefgohAaoclSmdxekkcbhlaHceGmdkdnakTmbavcjdfazfhiavazfpbdbhYcbhXinaiavcj;cbfaXfgopblbgLcep9TaLpxeeeeeeeeeeeeeeeegQp9op9Hp9rgLaoakfpblbg8Acep9Ta8AaQp9op9Hp9rg8ApmbzeHdOiAlCvXoQrLgEaoamfpblbg3cep9Ta3aQp9op9Hp9rg3aoaxfpblbg5cep9Ta5aQp9op9Hp9rg5pmbzeHdOiAlCvXoQrLg8EpmbezHdiOAlvCXorQLgQaQpmbedibedibedibediaYp9UgYp9AdbbaiadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaEa8EpmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaLa8ApmwKDYq8AkEx3m5P8Es8FgLa3a5pmwKDYq8AkEx3m5P8Es8Fg8ApmbezHdiOAlvCXorQLgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaLa8ApmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfhiaXczfgXak6mbkkazclfgzad6mbkasavcjdfaqad2;8qbbavavcjdfaqcufad2fad;8qbbaqaDfhDc9:hoalmexikkc9:hoxekcbc99aral9Radcaadca0ESEhokavcj;kbf8Kjjjjbaokwbz:bjjjbk;uzeHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecje;8kbavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhodnaeTmbcmcsaDceSEhkcbhxcbhmcbhDcbhicbhlindnaoaq9nmbc9:hoxikdndnawRbbgrc;Ve0mbavc;abfalarcl4cu7fcsGcitfgPydlhsaPydbhzdnarcsGgPak9pmbavaiarcu7fcsGcdtfydbaxaPEhraPThPdndnadcd9hmbabaDcetfgHaz87ebaHcdfas87ebaHclfar87ebxekabaDcdtfgHazBdbaHclfasBdbaHcwfarBdbkaxaPfhxavc;abfalcitfgHarBdbaHasBdlavaicdtfarBdbavc;abfalcefcsGglcitfgHazBdbaHarBdlaiaPfhialcefhlxdkdndnaPcsSmbamaPfaPc987fcefhmxekaocefhrao8SbbgPcFeGhHdndnaPcu9mmbarhoxekaocvfhoaHcFbGhHcrhPdninar8SbbgOcFbGaPtaHVhHaOcu9kmearcefhraPcrfgPc8J9hmbxdkkarcefhokaHce4cbaHceG9R7amfhmkdndnadcd9hmbabaDcetfgraz87ebarcdfas87ebarclfam87ebxekabaDcdtfgrazBdbarclfasBdbarcwfamBdbkavc;abfalcitfgramBdbarasBdlavaicdtfamBdbavc;abfalcefcsGglcitfgrazBdbaramBdlaicefhialcefhlxekdnarcpe0mbaxcefgOavaiaqarcsGfRbbgPcl49RcsGcdtfydbaPcz6gHEhravaiaP9RcsGcdtfydbaOaHfgsaPcsGgOEhPaOThOdndnadcd9hmbabaDcetfgzax87ebazcdfar87ebazclfaP87ebxekabaDcdtfgzaxBdbazclfarBdbazcwfaPBdbkavaicdtfaxBdbavc;abfalcitfgzarBdbazaxBdlavaicefgicsGcdtfarBdbavc;abfalcefcsGcitfgzaPBdbazarBdlavaiaHfcsGgicdtfaPBdbavc;abfalcdfcsGglcitfgraxBdbaraPBdlalcefhlaiaOfhiasaOfhxxekaxcbaoRbbgzEgAarc;:eSgrfhsazcsGhCazcl4hXdndnazcs0mbascefhOxekashOavaiaX9RcsGcdtfydbhskdndnaCmbaOcefhxxekaOhxavaiaz9RcsGcdtfydbhOkdndnarTmbaocefhrxekaocdfhrao8SbegHcFeGhPdnaHcu9kmbaocofhAaPcFbGhPcrhodninar8SbbgHcFbGaotaPVhPaHcu9kmearcefhraocrfgoc8J9hmbkaAhrxekarcefhrkaPce4cbaPceG9R7amfgmhAkdndnaXcsSmbarhPxekarcefhPar8SbbgocFeGhHdnaocu9kmbarcvfhsaHcFbGhHcrhodninaP8SbbgrcFbGaotaHVhHarcu9kmeaPcefhPaocrfgoc8J9hmbkashPxekaPcefhPkaHce4cbaHceG9R7amfgmhskdndnaCcsSmbaPhoxekaPcefhoaP8SbbgrcFeGhHdnarcu9kmbaPcvfhOaHcFbGhHcrhrdninao8SbbgPcFbGartaHVhHaPcu9kmeaocefhoarcrfgrc8J9hmbkaOhoxekaocefhokaHce4cbaHceG9R7amfgmhOkdndnadcd9hmbabaDcetfgraA87ebarcdfas87ebarclfaO87ebxekabaDcdtfgraABdbarclfasBdbarcwfaOBdbkavc;abfalcitfgrasBdbaraABdlavaicdtfaABdbavc;abfalcefcsGcitfgraOBdbarasBdlavaicefgicsGcdtfasBdbavc;abfalcdfcsGcitfgraABdbaraOBdlavaiazcz6aXcsSVfgicsGcdtfaOBdbaiaCTaCcsSVfhialcifhlkawcefhwalcsGhlaicsGhiaDcifgDae6mbkkcbc99aoaqSEhokavc;aef8Kjjjjbaok:llevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:EPliuo97eue978Jjjjjbca9Rhidndnadcl9hmbdnaec98GglTmbcbhvabhdinadadpbbbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDpxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpkbbadczfhdavclfgval6mbkkalae9pmeaiaeciGgvcdtgdVcbczad9R;8kbaiabalcdtfglad;8qbbdnavTmbaiaipblbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDpxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpklbkalaiad;8qbbskdnaec98GgxTmbcbhvabhdinadczfglalpbbbgopxbbbbbbFFbbbbbbFFgkp9oadpbbbgDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eaDaopmbediwDqkzHOAKY8AEgoczp:Sep;6egrp;Geaoczp:Reczp:Sep;6egwp;Gep;Kep;Legopxb;:FSb;:FSb;:FSb;:FSawaopxbbbbbbbbbbbbbbbbp:2egqawpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegwawp;Meaoaop;Mearaqaramp9op9rp;Kegoaop;Mep;Kep;Kep;Jep;Negrp;Mepxbbn0bbn0bbn0bbn0gqp;Keczp:Reawarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9op9qgwaoarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogopmwDKYqk8AExm35Ps8E8Fp9qpkbbadaDakp9oawaopmbezHdiOAlvCXorQLp9qpkbbadcafhdavclfgvax6mbkkaxae9pmbaiaeciGgvcitgdfcbcaad9R;8kbaiabaxcitfglad;8qbbdnavTmbaiaipblzgopxbbbbbbFFbbbbbbFFgkp9oaipblbgDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eaDaopmbediwDqkzHOAKY8AEgoczp:Sep;6egrp;Geaoczp:Reczp:Sep;6egwp;Gep;Kep;Legopxb;:FSb;:FSb;:FSb;:FSawaopxbbbbbbbbbbbbbbbbp:2egqawpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegwawp;Meaoaop;Mearaqaramp9op9rp;Kegoaop;Mep;Kep;Kep;Jep;Negrp;Mepxbbn0bbn0bbn0bbn0gqp;Keczp:Reawarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9op9qgwaoarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogopmwDKYqk8AExm35Ps8E8Fp9qpklzaiaDakp9oawaopmbezHdiOAlvCXorQLp9qpklbkalaiad;8qbbkk;4wllue97euv978Jjjjjbc8W9Rhidnaec98GglTmbcbhvabhoinaiaopbbbgraoczfgwpbbbgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklbaopxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaqakp;Mearp;Keczp:ReaDakp;Mearp;Keamp9op9qgkpmbezHdiOAlvCXorQLgrp5baipblbpEb:T:j83ibaocwfarp5eaipblbpEe:T:j83ibawaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblbpEd:T:j83ibaocKfakp5eaipblbpEi:T:j83ibaocafhoavclfgval6mbkkdnalae9pmbaiaeciGgvcitgofcbcaao9R;8kbaiabalcitfgwao;8qbbdnavTmbaiaipblbgraipblzgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklaaipxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaqakp;Mearp;Keczp:ReaDakp;Mearp;Keamp9op9qgkpmbezHdiOAlvCXorQLgrp5baipblapEb:T:j83ibaiarp5eaipblapEe:T:j83iwaiaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblapEd:T:j83izaiakp5eaipblapEi:T:j83iKkawaiao;8qbbkk:Pddiue978Jjjjjbc;ab9Rhidnadcd4ae2glc98GgvTmbcbhdabheinaeaepbbbgocwp:Recwp:Sep;6eaocep:SepxbbjZbbjZbbjZbbjZp:UepxbbjFbbjFbbjFbbjFp9op;Mepkbbaeczfheadclfgdav6mbkkdnaval9pmbaialciGgdcdtgeVcbc;abae9R;8kbaiabavcdtfgvae;8qbbdnadTmbaiaipblbgocwp:Recwp:Sep;6eaocep:SepxbbjZbbjZbbjZbbjZp:UepxbbjFbbjFbbjFbbjFp9op;Mepklbkavaiae;8qbbkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaikkkebcjwklz9Tbb",t=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,3,2,0,0,5,3,1,0,1,12,1,0,10,22,2,12,0,65,0,65,0,65,0,252,10,0,0,11,7,0,65,0,253,15,26,11]),n=new Uint8Array([32,0,65,2,1,106,34,33,3,128,11,4,13,64,6,253,10,7,15,116,127,5,8,12,40,16,19,54,20,9,27,255,113,17,42,67,24,23,146,148,18,14,22,45,70,69,56,114,101,21,25,63,75,136,108,28,118,29,73,115]);if(typeof WebAssembly!="object")return{supported:!1};var s=WebAssembly.validate(t)?e:i,a,r=WebAssembly.instantiate(o(s),{}).then(function(A){a=A.instance,a.exports.__wasm_call_ctors()});function o(A){for(var E=new Uint8Array(A.length),_=0;_<A.length;++_){var g=A.charCodeAt(_);E[_]=g>96?g-97:g>64?g-39:g+4}for(var B=0,_=0;_<A.length;++_)E[B++]=E[_]<60?n[E[_]]:(E[_]-60)*64+E[++_];return E.buffer.slice(0,B)}function c(A,E,_,g,B,S){var T=a.exports.sbrk,U=_+3&-4,M=T(U*g),y=T(B.length),L=new Uint8Array(a.exports.memory.buffer);L.set(B,y);var V=A(M,_,g,y,B.length);if(V==0&&S&&S(M,U,g),E.set(L.subarray(M,M+_*g)),T(M-T(0)),V!=0)throw new Error("Malformed buffer data: "+V)}var l={NONE:"",OCTAHEDRAL:"meshopt_decodeFilterOct",QUATERNION:"meshopt_decodeFilterQuat",EXPONENTIAL:"meshopt_decodeFilterExp"},h={ATTRIBUTES:"meshopt_decodeVertexBuffer",TRIANGLES:"meshopt_decodeIndexBuffer",INDICES:"meshopt_decodeIndexSequence"},u=[],d=0;function f(A){var E={object:new Worker(A),pending:0,requests:{}};return E.object.onmessage=function(_){var g=_.data;E.pending-=g.count,E.requests[g.id][g.action](g.value),delete E.requests[g.id]},E}function m(A){for(var E="var instance; var ready = WebAssembly.instantiate(new Uint8Array(["+new Uint8Array(o(s))+"]), {}).then(function(result) { instance = result.instance; instance.exports.__wasm_call_ctors(); });self.onmessage = workerProcess;"+c.toString()+p.toString(),_=new Blob([E],{type:"text/javascript"}),g=URL.createObjectURL(_),B=0;B<A;++B)u[B]=f(g);URL.revokeObjectURL(g)}function x(A,E,_,g,B){for(var S=u[0],T=1;T<u.length;++T)u[T].pending<S.pending&&(S=u[T]);return new Promise(function(U,M){var y=new Uint8Array(_),L=d++;S.pending+=A,S.requests[L]={resolve:U,reject:M},S.object.postMessage({id:L,count:A,size:E,source:y,mode:g,filter:B},[y.buffer])})}function p(A){r.then(function(){var E=A.data;try{var _=new Uint8Array(E.count*E.size);c(a.exports[E.mode],_,E.count,E.size,E.source,a.exports[E.filter]),self.postMessage({id:E.id,count:E.count,action:"resolve",value:_},[_.buffer])}catch(g){self.postMessage({id:E.id,count:E.count,action:"reject",value:g})}})}return{ready:r,supported:!0,useWorkers:function(A){m(A)},decodeVertexBuffer:function(A,E,_,g,B){c(a.exports.meshopt_decodeVertexBuffer,A,E,_,g,a.exports[l[B]])},decodeIndexBuffer:function(A,E,_,g){c(a.exports.meshopt_decodeIndexBuffer,A,E,_,g)},decodeIndexSequence:function(A,E,_,g){c(a.exports.meshopt_decodeIndexSequence,A,E,_,g)},decodeGltfBuffer:function(A,E,_,g,B,S){c(a.exports[h[B]],A,E,_,g,a.exports[l[S]])},decodeGltfBufferAsync:function(A,E,_,g,B){return u.length>0?x(A,E,_,h[g],l[B]):r.then(function(){var S=new Uint8Array(A*E);return c(a.exports[h[g]],S,A,E,_,a.exports[l[B]]),S})}}})();function K_(i,e){const t=new Bt,n=i.attributes.position.count;for(const[s,a]of[["position",3],["normal",3],["color",3]]){const r=i.getAttribute(s),o=new Float32Array(n*a);for(let c=0;c<n;c++)o[c*a]=r?r.getX(c):1,o[c*a+1]=r?r.getY(c):1,o[c*a+2]=r?r.getZ(c):1;t.setAttribute(s,new Gt(o,a))}return i.index&&t.setIndex(Array.from(i.index.array)),t.applyMatrix4(e),t}function yu(i,e,t){i.updateMatrixWorld(!0);const n=(i.parent??i).matrixWorld.clone().invert(),s={};i.traverse(o=>{const c=o;if(!c.isMesh)return;const l=c.material.name.includes("lead")?"lead":"matte";(s[l]||=[]).push(K_(c.geometry,new $e().multiplyMatrices(n,c.matrixWorld)))});const a=new Bn;let r=0;for(const[o,c]of Object.entries(s)){const l=la(c);c.forEach(u=>u.dispose());const h=new lt(l,e[o]);h.castShadow=h.receiveShadow=t,h.name=o,a.add(h),r+=(l.index?l.index.count:l.attributes.position.count)/3}return{g:a,tris:r}}async function J_(i,e="ayasofya"){return(await fetch(`${i}models/${e}.anchor.json`)).json()}async function Z_(i){const e=await J_(i.base),n=await new Gd().setMeshoptDecoder(Vd).loadAsync(`${i.base}models/${e.model_web}`),s=i.shadows??!0,a={matte:new Es({name:"ayasofya_matte",vertexColors:!0,roughness:.9,metalness:0,side:zt}),lead:new Es({name:"ayasofya_lead_gold",vertexColors:!0,roughness:.68,metalness:0,side:zt})},r=new Kr;r.name="Ayasofya";const o=[],c=n.scene.getObjectByName("LOD0"),l=n.scene.getObjectByName("LOD1");if(!c)throw new Error("ayasofya: LOD0 missing");{const{g:d,tris:f}=yu(c,a,s);r.addLevel(d,0),o.push(f)}if(l){const{g:d,tris:f}=yu(l,a,s);r.addLevel(d,i.lodDistance??900),o.push(f)}n.scene.traverse(d=>{const f=d;f.isMesh&&f.geometry.dispose()});const[h,u]=i.project(e.anchor.lon,e.anchor.lat);return r.position.set(h,i.groundY?i.groundY(h,u):0,u),r.rotation.y=e.three_rotation_y_rad,r.scale.setScalar(e.scale_m),r.userData={id:e.id,source:e.source},{object:r,anchor:e,triangles:o,materials:[a.matte,a.lead]}}function $_(i,e){const t=new Bt,n=i.attributes.position.count;for(const[s,a]of[["position",3],["normal",3],["color",3]]){const r=i.getAttribute(s),o=new Float32Array(n*a);for(let c=0;c<n;c++)o[c*a]=r?r.getX(c):1,o[c*a+1]=r?r.getY(c):1,o[c*a+2]=r?r.getZ(c):1;t.setAttribute(s,new Gt(o,a))}return i.index&&t.setIndex(Array.from(i.index.array)),t.applyMatrix4(e),t}function wu(i,e,t){i.updateMatrixWorld(!0);const n=(i.parent??i).matrixWorld.clone().invert(),s={};i.traverse(o=>{const c=o;if(!c.isMesh)return;const l=c.material.name.includes("lead")?"lead":"matte";(s[l]||=[]).push($_(c.geometry,new $e().multiplyMatrices(n,c.matrixWorld)))});const a=new Bn;let r=0;for(const[o,c]of Object.entries(s)){const l=la(c);c.forEach(u=>u.dispose());const h=new lt(l,e[o]);h.castShadow=h.receiveShadow=t,h.name=o,a.add(h),r+=(l.index?l.index.count:l.attributes.position.count)/3}return{g:a,tris:r}}async function ws(i,e){const t=await(await fetch(`${e.base}models/${i}.anchor.json`)).json(),n=await new Gd().setMeshoptDecoder(Vd).loadAsync(`${e.base}models/${t.model_web}`),s=e.shadows??!0,a={matte:new Es({name:`${i}_matte`,vertexColors:!0,roughness:.9,metalness:0,side:zt}),lead:new Es({name:`${i}_lead_gold`,vertexColors:!0,roughness:.68,metalness:0,side:zt})},r=new Kr;r.name=t.name||i;const o=[],c=n.scene.getObjectByName("LOD0"),l=n.scene.getObjectByName("LOD1");if(!c)throw new Error(`${i}: LOD0 missing`);{const{g:d,tris:f}=wu(c,a,s);r.addLevel(d,0),o.push(f)}if(l){const{g:d,tris:f}=wu(l,a,s);r.addLevel(d,e.lodDistance??900),o.push(f)}n.scene.traverse(d=>{const f=d;f.isMesh&&f.geometry.dispose()});const[h,u]=e.project(t.anchor.lon,t.anchor.lat);return r.position.set(h,e.groundY?e.groundY(h,u):0,u),r.rotation.y=t.three_rotation_y_rad,r.scale.setScalar(t.scale_m),r.userData={id:t.id,source:t.source},{object:r,anchor:t,triangles:o,materials:[a.matte,a.lead]}}const eE=i=>ws("topkapi",i),tE=i=>ws("sultanahmet",i),nE=i=>ws("yenicami",i),iE=i=>ws("rustempasa",i),rc=5;function sE(i){const e=i.attributes.position,t=e.count,n=new Float32Array(t*2);for(let r=0;r<t;r++){const o=e.getX(r),c=e.getY(r),l=e.getZ(r),h=Math.hypot(o,l);n[r*2]=Math.atan2(o,l)*Math.max(h,1)/rc,n[r*2+1]=c/rc}const s=i.index?i.index.array:null,a=s?s.length/3:t/3;for(let r=0;r<a;r++){const o=[0,1,2].map(h=>s?s[r*3+h]:r*3+h),c=o.map(h=>n[h*2]);if(Math.max(...c)-Math.min(...c)>2){const h=Math.max(1,...o.map(d=>Math.hypot(e.getX(d),e.getZ(d)))),u=2*Math.PI*h/rc;for(const d of o)n[d*2]<0&&(n[d*2]+=u)}}i.setAttribute("uv",new Gt(n,2))}async function aE(i){const e=await ws("galata",i),t=await new Bl().loadAsync(`${i.base}tex/galata_stone_512.jpg`);t.wrapS=t.wrapT=Gn,t.colorSpace=Wt,t.anisotropy=4;const n=e.materials[0];return n.map=t,n.needsUpdate=!0,e.object.traverse(s=>{const a=s;a.isMesh&&a.material===n&&sE(a.geometry)}),e}function rE(i,e){const t=i.attributes.position,n=t.count,s=new Float32Array(n*2),a=new G,r=new G,o=new G,c=new G,l=new G,h=i.index?i.index.array:null,u=h?h.length/3:n/3;for(let d=0;d<u;d++){const f=[0,1,2].map(E=>h?h[d*3+E]:d*3+E);a.fromBufferAttribute(t,f[0]),r.fromBufferAttribute(t,f[1]),o.fromBufferAttribute(t,f[2]);const m=c.subVectors(r,a).cross(l.subVectors(o,a)),x=Math.abs(m.x),p=Math.abs(m.y),A=Math.abs(m.z);for(const E of f){const _=t.getX(E),g=t.getY(E),B=t.getZ(E);p>x&&p>A?(s[E*2]=_/e,s[E*2+1]=B/e):x>A?(s[E*2]=B/e,s[E*2+1]=g/e):(s[E*2]=_/e,s[E*2+1]=g/e)}}i.setAttribute("uv",new Gt(s,2))}const oE={nusretiye:["stone_ashlar_512.jpg",4],ayatriada:["stone_ashlar_512.jpg",4],stantoine:["brick_red_512.jpg",2.4]};async function cE(i,e){const t=await ws(i,e),[n,s]=oE[i],a=await new Bl().loadAsync(`${e.base}tex/${n}`);a.wrapS=a.wrapT=Gn,a.colorSpace=Wt,a.anisotropy=4;const r=t.materials[0];return r.map=a,r.needsUpdate=!0,t.object.traverse(o=>{const c=o;c.isMesh&&c.material===r&&rE(c.geometry,s)}),t}function lE(i,e,t){const n=[],s=[],a=new De,r=($,me,Ce,Me)=>{n.push(...$,...me,...Ce),a.set(Me);for(let ne=0;ne<3;ne++)s.push(a.r,a.g,a.b)},o=$=>{const me=Math.sin($*127.1+311.7)*43758.5453;return me-Math.floor(me)},c=["#b8643f","#c06a43","#ad5c3b","#c27350","#b05f40"],l="#d9cbb4",h=$=>{const me=[];for(let Ce=0;Ce<$.length;Ce+=2)me.push(new He($[Ce],$[Ce+1]));return mi.isClockWise(me)&&me.reverse(),me},u=h(i.outline);let d=0;for(const $ of u)d+=e($.x,$.y);d/=u.length;const f=($,me)=>e($,me),m=7;(($,me,Ce,Me)=>{for(let ne=0;ne<$.length;ne++){const Ee=$[ne],Te=$[(ne+1)%$.length],Se=f(Ee.x,Ee.y),Le=f(Te.x,Te.y);r([Ee.x,Se+me,Ee.y],[Te.x,Le+me,Te.y],[Te.x,Le+Ce,Te.y],Me),r([Ee.x,Se+me,Ee.y],[Te.x,Le+Ce,Te.y],[Ee.x,Se+Ce,Ee.y],Me)}})(u,-1,m,l);const p=[],A=[];i.cells.forEach(($,me)=>{const Ce=h($.p);let Me=0,ne=0;for(const je of Ce)Me+=je.x,ne+=je.y;Me/=Ce.length,ne/=Ce.length;const Ee=c[Math.floor(o(me)*c.length)],Te=new De(Ee).multiplyScalar(.82),Se=m+(o(me*3.3)-.5)*1.2,Le=f(Me,ne);let Fe=0;for(const je of Ce)Fe=Math.max(Fe,Math.hypot(je.x-Me,je.y-ne));const Ge=Math.min(2.6,.45*Fe);if($.r&&Ce.length===4){const je=Math.cos($.a),w=Math.sin($.a);let Q=1e9,R=-1e9;for(const j of Ce){const H=(j.x-Me)*je+(j.y-ne)*w;Q=Math.min(Q,H),R=Math.max(R,H)}const ee=R-Q,Y=Math.min(ee*.3,2.5),O=[Me+je*(Q+Y),Le+Se+Ge,ne+w*(Q+Y)],W=[Me+je*(R-Y),Le+Se+Ge,ne+w*(R-Y)];for(let j=0;j<4;j++){const H=Ce[j],v=Ce[(j+1)%4],b=f(H.x,H.y)+Se,C=f(v.x,v.y)+Se,P=(H.x-Me)*je+(H.y-ne)*w,I=(v.x-Me)*je+(v.y-ne)*w,k=P<0?O:W,F=I<0?O:W,N=j%2?Ee:Te;k===F?r([H.x,b,H.y],[v.x,C,v.y],k,N):(r([H.x,b,H.y],[v.x,C,v.y],F,N),r([H.x,b,H.y],F,k,N))}}else{const je=[Me,Le+Se+Ge*.8,ne];for(let w=0;w<Ce.length;w++){const Q=Ce[w],R=Ce[(w+1)%Ce.length];r([Q.x,f(Q.x,Q.y)+Se,Q.y],[R.x,f(R.x,R.y)+Se,R.y],je,w%2?Ee:Te)}}o(me*7.1)<.22&&p.push([Me+(o(me*9.1)-.5)*Fe*.6,Le+Se+Ge*.5,ne+(o(me*4.7)-.5)*Fe*.6,1.3+o(me)*.9]),o(me*5.9)<(t?.15:.3)&&A.push([Me+(o(me*2.1)-.5)*Fe,Le+Se+Ge*.4,ne+(o(me*6.3)-.5)*Fe])});const E=i.sw/2+.6;for(const $ of i.streets)for(let me=0;me<$.length-1;me++){const[Ce,Me]=$[me],[ne,Ee]=$[me+1],Te=Math.hypot(ne-Ce,Ee-Me);if(Te<.5)continue;const Se=-(Ee-Me)/Te*E,Le=(ne-Ce)/Te*E,Fe=f(Ce,Me),Ge=f(ne,Ee),je=m+.6,w=je+1.6,Q=[Ce+Se,Fe+je,Me+Le],R=[ne+Se,Ge+je,Ee+Le],ee=[Ce-Se,Fe+je,Me-Le],Y=[ne-Se,Ge+je,Ee-Le],O=[Ce,Fe+w,Me],W=[ne,Ge+w,Ee];r(Q,R,W,"#c98a68"),r(Q,W,O,"#c98a68"),r(Y,ee,O,"#b97a5c"),r(Y,O,W,"#b97a5c");const j=-(Ee-Me)/Te*.45,H=(ne-Ce)/Te*.28,v=[Ce+j,Fe+w+.08,Me+H],b=[ne+j,Ge+w+.08,Ee+H],C=[ne-j,Ge+w+.08,Ee-H],P=[Ce-j,Fe+w+.08,Me-H];r(v,b,C,"#e6dccd"),r(v,C,P,"#e6dccd")}const _=new Bt;_.setAttribute("position",new ht(n,3)),_.setAttribute("color",new ht(s,3)),_.computeVertexNormals();const g=new Bn;g.name="kapalicarsi";const B=new lt(_,new ct({vertexColors:!0,side:zt}));B.castShadow=B.receiveShadow=!0,g.add(B);const S=new ct({color:"#b7bcc2"}),T=new ct({color:"#cfc6b6"}),U=new As(1,14,5,0,Math.PI*2,0,Math.PI/2),M=new Ft(1,1,1),y=i.beds.reduce(($,me)=>$+me.nc*me.nr+4,0),L=new Qt(U,S,y+p.length),V=new $e,te=new Vt,Ae=new G(0,1,0),ae=new G,ce=new G;let se=0;for(const $ of i.beds){const me=f($.x,$.z),Ce=10.5;te.setFromAxisAngle(Ae,-$.a);const Me=new lt(M,T);Me.position.set($.x,me+Ce/2-1,$.z),Me.scale.set($.L,Ce,$.W),Me.quaternion.copy(te),Me.castShadow=Me.receiveShadow=!0,g.add(Me);const ne=$.L/$.nc,Ee=$.W/$.nr,Te=Math.min(ne,Ee)*.44,Se=Math.cos($.a),Le=Math.sin($.a);for(let Fe=0;Fe<$.nc;Fe++)for(let Ge=0;Ge<$.nr;Ge++){const je=-$.L/2+ne*(Fe+.5),w=-$.W/2+Ee*(Ge+.5);L.setMatrixAt(se++,V.compose(ae.set($.x+Se*je-Le*w,me+Ce-1,$.z+Le*je+Se*w),te,ce.set(Te,Te*.75,Te)))}for(const[Fe,Ge]of[[-1,-1],[1,-1],[1,1],[-1,1]]){const je=Fe*($.L/2-1.5),w=Ge*($.W/2-1.5);L.setMatrixAt(se++,V.compose(ae.set($.x+Se*je-Le*w,me+Ce+.4,$.z+Le*je+Se*w),te,ce.set(1.8,1.8,1.8)))}}const J=se;for(const $ of p)L.setMatrixAt(se++,V.compose(ae.set($[0],$[1],$[2]),te.identity(),ce.set($[3],$[3]*.8,$[3])));L.count=se,L.castShadow=L.receiveShadow=!0,L.computeBoundingSphere(),g.add(L);const fe=new Qt(M,new ct({color:"#8d6a55"}),Math.max(1,A.length));return A.forEach(($,me)=>fe.setMatrixAt(me,V.compose(ae.set($[0],$[1]+.9,$[2]),te.identity(),ce.set(.8,1.8,.8)))),fe.count=A.length,fe.computeBoundingSphere(),g.add(fe),{grp:g,detail:[fe],dome:L,nBig:J,outline:i.outline,tris:n.length/9}}const Dt=2.5,zs={x:-592.4,z:572.3,yaw:Math.atan2(19,-35.2)};function hE(i,e,t,n,s,a){const r=i.length;if(r<6)return;let o=1/0,c=-1/0;const l=[];for(let f=0;f<r;f+=2){const m=(f+2)%r;let x=i[f],p=i[f+1],A=i[m],E=i[m+1];if(p<o&&(o=p),E<o&&(o=E),p>c&&(c=p),E>c&&(c=E),p!==E){if(p>E){const _=x;x=A,A=_;const g=p;p=E,E=g}l.push({y0:p,y1:E,x,dx:(A-x)/(E-p)})}}const h=Math.max(0,Math.floor((o-t)/Dt)),u=Math.min(s-1,Math.floor((c-t)/Dt)),d=[];for(let f=h;f<=u;f++){const m=t+(f+.5)*Dt;d.length=0;for(const x of l)m>=x.y0&&m<x.y1&&d.push(x.x+x.dx*(m-x.y0));d.sort((x,p)=>x-p);for(let x=0;x+1<d.length;x+=2){const p=Math.max(0,Math.floor((d[x]-e)/Dt)),A=Math.min(n-1,Math.floor((d[x+1]-e)/Dt));for(let E=p;E<=A;E++)a(E,f)}}}function uE(){const i=new Bn,e=new lt(new Ft(1.7,.55,3.8),new ct({color:"#d24b3a"}));e.position.y=.7,e.castShadow=!0;const t=new lt(new Ft(1.45,.48,1.7),new ct({color:"#d7e7f2"}));t.position.set(0,1.15,.15),t.castShadow=!0,i.add(e,t);const n=new lt(new Sl(1.55,18),new Qn({color:"#1a140f",transparent:!0,opacity:.35,depthWrite:!1}));n.rotation.x=-Math.PI/2,n.position.y=.22,n.renderOrder=6,i.add(n);const s=new Ft(.28,.42,.42),a=new ct({color:"#242424"});for(const[r,o]of[[.86,1.25],[-.86,1.25],[.86,-1.2],[-.86,-1.2]]){const c=new lt(s,a);c.position.set(r,.26,o),c.castShadow=!0,i.add(c)}return i}async function dE(i){const{scene:e,camera:t,controls:n,H:s,roads:a,plazas:r,buildings:o,water:c,map:l,narrow:h}=i,[u,d,f,m]=i.bounds,x=u-20,p=d-20,A=Math.ceil((f-u+40)/Dt),E=Math.ceil((m-d+40)/Dt),_=new Uint8Array(A*E),g=new Uint8Array(A*E),B=new Map,S=(z,oe)=>oe*A+z,T=(z,oe)=>hE(z,x,p,A,E,oe),U=(z,oe,ye)=>{if(z?.[0]&&(T(z[0],oe),ye))for(let Ne=1;Ne<z.length;Ne++)T(z[Ne],ye)};for(const z of a)U(z,(oe,ye)=>{_[S(oe,ye)]=1},(oe,ye)=>{_[S(oe,ye)]=0});for(const z of r)U(z,(oe,ye)=>{_[S(oe,ye)]||(_[S(oe,ye)]=2)});try{const z=await(await fetch(`${l}data/taksim_plaza.json`)).json();for(const oe of z.plazas||[])T(oe,(ye,Ne)=>{_[S(ye,Ne)]||(_[S(ye,Ne)]=2)})}catch{}try{const z=await(await fetch(`${l}data/bridges.json`)).json();for(const oe of z.bridges)for(const ye of oe.strips){const Ne=ye.p;let Pe=0,rt=0,mt=0;for(let Z=0;Z<Ne.length;Z+=2)Pe+=Ne[Z],rt+=Ne[Z+1],mt++;const Ut=Math.max(0,s(Pe/mt,rt/mt));if(Ut>2&&ye.y<3&&oe.id!=="w280961352")continue;const bt=Z=>{const xe=Math.max(0,Math.min(1,Z));return xe*xe*(3-2*xe)},Pt=Z=>oe.id!=="w280961352"?null:Z>=530?.45+6.05*bt((588-Z)/52):Z<=236?.45+6.05*bt((Z-186)/50):6.5;T(Ne,(Z,xe)=>{const Ue=S(Z,xe),ze=Pt(p+(xe+.5)*Dt)??ye.y+Ut;_[Ue]=1;const at=B.get(Ue);(at==null||ze>at)&&B.set(Ue,ze)})}}catch(z){console.warn("drive bridges skipped",z)}const M=(z,oe)=>{let ye=0,Ne=0,Pe=0;for(let bt=0;bt<z.length;bt+=2)ye+=z[bt],Ne+=z[bt+1],Pe++;if(!Pe)return z;const rt=ye/Pe,mt=Ne/Pe,Ut=[];for(let bt=0;bt<z.length;bt+=2){const Pt=z[bt]-rt,Z=z[bt+1]-mt,xe=Math.hypot(Pt,Z)||1,Ue=Math.max(.15,(xe-oe)/xe);Ut.push(rt+Pt*Ue,mt+Z*Ue)}return Ut};for(const z of o)if(!(!z.h||z.h<2.2||!z.p))for(const oe of z.p)oe?.[0]&&oe[0].length>=6&&T(M(oe[0],3.2),(ye,Ne)=>{g[S(ye,Ne)]=1});for(const z of c)U(z,(oe,ye)=>{g[S(oe,ye)]=2},(oe,ye)=>{g[S(oe,ye)]===2&&(g[S(oe,ye)]=0)});try{i.patchMask?.({road:_,block:g,deck:B,nx:A,nz:E,x0:x,z0:p,step:Dt,buildings:o})}catch(z){console.warn("drive3 world mask skipped",z)}for(let z=0;z<_.length;z++)_[z]&&g[z]===1&&!B.has(z)&&(_[z]=0);const y=g.slice();for(let z=0;z<4;z++){const oe=z===0?y:g.slice();for(let ye=1;ye<E-1;ye++)for(let Ne=1;Ne<A-1;Ne++){const Pe=S(Ne,ye);oe[Pe]===2&&(oe[Pe-1]!==2||oe[Pe+1]!==2||oe[Pe-A]!==2||oe[Pe+A]!==2)&&(g[Pe]=0)}}const L=_.slice();for(let z=1;z<E-1;z++)for(let oe=1;oe<A-1;oe++){const ye=S(oe,z);L[ye]||g[ye]||(L[ye-1]||L[ye+1]||L[ye-A]||L[ye+A])&&(_[ye]=1)}const V=(z,oe)=>{const ye=Math.floor((z-x)/Dt),Ne=Math.floor((oe-p)/Dt);return ye<0||Ne<0||ye>=A||Ne>=E?-1:S(ye,Ne)},te=(z,oe)=>{const ye=V(z,oe);return ye<0?0:_[ye]},Ae=(z,oe)=>{const ye=V(z,oe);return ye<0?0:B.get(ye)||0},ae=(z,oe)=>{if(Ae(z,oe)>.3)return!1;const ye=V(z,oe);return ye<0?!0:_[ye]?!1:g[ye]===1||g[ye]===2&&s(z,oe)<1.5},ce=(z,oe)=>ae(z,oe)?0:te(z,oe)||3,se=(z,oe)=>{const ye=s(z,oe),Ne=Ae(z,oe);return(Ne>.3?Math.max(Ne,ye):ye)+.42};let J=zs.x,fe=zs.z;if(!ce(J,fe)){let z=!1;for(let oe=Dt;oe<80&&!z;oe+=Dt)for(let ye=0;ye<16;ye++){const Ne=zs.x+Math.cos(ye)*oe,Pe=zs.z+Math.sin(ye)*oe;if(ce(Ne,Pe)===1){J=Ne,fe=Pe,z=!0;break}}}let $=0;const me=z=>{let oe=0;for(let ye=3;ye<=90;ye+=3){const Ne=J+Math.sin(z)*ye,Pe=fe+Math.cos(z)*ye,rt=ce(Ne+Math.cos(z)*.8,Pe-Math.sin(z)*.8);if(ce(Ne,Pe)!==1||rt!==1)break;oe=ye}return oe};if(me(zs.yaw)>=12)$=zs.yaw;else{let z=-1;for(let oe=0;oe<24;oe++){const ye=oe/24*Math.PI*2,Ne=me(ye);Ne>z&&(z=Ne,$=ye)}}const Ce=uE();e.add(Ce);let Me=J,ne=fe,Ee=se(J,fe),Te=0,Se=J,Le=fe,Fe=$,Ge=null,je=0,w=0,Q=0;Ce.position.set(Me,Ee,ne),Ce.rotation.y=$,t.fov=h?68:56,t.near=.45,t.far=22e3,t.updateProjectionMatrix(),n.enabled=!1;const R=new Set;let ee=0,Y=0,O=0,W=0;const j=(z,oe)=>{const ye=z.key.length===1?z.key.toLowerCase():z.key;if(!["w","a","s","d","arrowup","arrowdown","arrowleft","arrowright"].includes(ye.toLowerCase())&&!ye.startsWith("Arrow"))return;z.preventDefault();const Ne=z.key.length===1?z.key.toLowerCase():z.key;oe?R.add(Ne):R.delete(Ne)};window.addEventListener("keydown",z=>j(z,!0),{passive:!1}),window.addEventListener("keyup",z=>j(z,!1));const H=document.getElementById("steer"),v=document.getElementById("gas"),b=document.getElementById("brake"),C=new Set,P=(z,oe)=>{if(!z)return;const ye=new Set,Ne=()=>{ee=(I.size?1:0)+(k.size?-1:0)};z.addEventListener("pointerdown",rt=>{ye.add(rt.pointerId),(z===v?I:k).add(rt.pointerId),Ne();try{z.setPointerCapture(rt.pointerId)}catch{}rt.preventDefault()});const Pe=rt=>{ye.delete(rt.pointerId),(z===v?I:k).delete(rt.pointerId),Ne()};z.addEventListener("pointerup",Pe),z.addEventListener("pointercancel",Pe)},I=new Set,k=new Set;if(P(v),P(b),H){const z=ye=>{const Ne=H.getBoundingClientRect();Y=Jt.clamp((ye.clientX-(Ne.left+Ne.width/2))/(Ne.width*.38),-1,1)};H.addEventListener("pointerdown",ye=>{C.add(ye.pointerId),z(ye);try{H.setPointerCapture(ye.pointerId)}catch{}ye.preventDefault()}),H.addEventListener("pointermove",ye=>{C.has(ye.pointerId)&&z(ye)});const oe=ye=>{C.delete(ye.pointerId),C.size||(Y=0)};H.addEventListener("pointerup",oe),H.addEventListener("pointercancel",oe)}document.getElementById("reset")?.addEventListener("pointerdown",z=>{z.preventDefault(),Re()});const N=document.getElementById("labels");N&&(N.style.display="none");const K=document.createElement("i");H?.appendChild(K);const de=document.getElementById("speed"),ie=new G,X=new G,pe=new G;let be=!1;const ge=()=>{let z=O,oe=W;return(R.has("w")||R.has("W")||R.has("ArrowUp"))&&(z+=1),(R.has("s")||R.has("S")||R.has("ArrowDown"))&&(z-=1),(R.has("a")||R.has("A")||R.has("ArrowLeft"))&&(oe-=1),(R.has("d")||R.has("D")||R.has("ArrowRight"))&&(oe+=1),z=Jt.clamp(z+ee,-1,1),oe=Jt.clamp(oe+Y,-1,1),{throttle:z,steer:oe}},Be=(z,oe,ye)=>{let Ne=0;for(let Pe=2;Pe<=22&&!ae(z+Math.sin(ye)*Pe,oe+Math.cos(ye)*Pe);Pe+=2)Ne=Pe;return Ne};function Re(){I.clear(),k.clear(),C.clear(),ee=0,Y=0,O=0,W=0,Me=Se,ne=Le,$=Fe,Te=0,Ee=se(Me,ne),Ce.position.set(Me,Ee,ne),Ce.rotation.y=$,be=!1,je=.35,w=0}const Qe=new lt(new Bt,new Qn({vertexColors:!0,depthWrite:!1,fog:!1,side:zt,polygonOffset:!0,polygonOffsetFactor:-3,polygonOffsetUnits:-3}));Qe.renderOrder=4,Qe.frustumCulled=!1,Qe.name="drive-road";const q=new URLSearchParams(location.search).get("ribbon")==="1";Qe.visible=q,e.add(Qe);let Ie=new He(1e9,1e9);const le=()=>{if(!q){Ie.set(Me,ne);return}const z=42,oe=Math.max(0,Math.floor((Me-z-x)/Dt)),ye=Math.min(A-1,Math.floor((Me+z-x)/Dt)),Ne=Math.max(0,Math.floor((ne-z-p)/Dt)),Pe=Math.min(E-1,Math.floor((ne+z-p)/Dt)),rt=[],mt=[],Ut=[.16,.15,.14],bt=[.92,.78,.22],Pt=[.72,.68,.6];for(let xe=Ne;xe<=Pe;xe++)for(let Ue=oe;Ue<=ye;Ue++){const ze=_[S(Ue,xe)];if(!ze||B.has(S(Ue,xe)))continue;const at=x+Ue*Dt,st=p+xe*Dt,ut=se(at+Dt*.5,st+Dt*.5)+.12,Et=ze===1&&(Ue+xe)%5===0,ot=!_[S(Math.max(0,Ue-1),xe)]||!_[S(Math.min(A-1,Ue+1),xe)]||!_[S(Ue,Math.max(0,xe-1))]||!_[S(Ue,Math.min(E-1,xe+1))],Ht=Et?bt:ot?Pt:Ut;rt.push(at,ut,st,at+Dt,ut,st,at+Dt,ut,st+Dt,at,ut,st,at+Dt,ut,st+Dt,at,ut,st+Dt);for(let Nt=0;Nt<6;Nt++)mt.push(Ht[0],Ht[1],Ht[2])}const Z=Qe.geometry;Z.setAttribute("position",new ht(rt,3)),Z.setAttribute("color",new ht(mt,3)),Z.computeBoundingSphere(),Ie.set(Me,ne)};function we(z){z=Math.min(.08,Math.max(0,z));let{throttle:oe,steer:ye}=ge();je>0&&(je=Math.max(0,je-z),oe=0,ye=0,Te=0);const Ne=28;if(oe>0)Te<0?Te=Math.min(0,Te+32*z):Te=Math.min(Ne,Te+22*z);else if(oe<0)Te>.3?Te=Math.max(0,Te-32*z):Te=Math.max(-12,Te-16*z);else{const Et=5*z;Math.abs(Te)<=Et?Te=0:Te-=Math.sign(Te)*Et}const Pe=Te<-.2?-1:1;$+=ye*Pe*(2.35/(1+Math.abs(Te)/22))*z;const rt=Me,mt=ne;let Ut=!1;if(z>0&&Math.abs(Te)>.04){const Et=Te*z,ot=Math.sin($)*Et,Ht=Math.cos($)*Et,Nt=(D,re)=>ae(Me+D,ne+re)?!1:(Me+=D,ne+=re,!0);if(Ut=Nt(ot,Ht)||Nt(ot,0)||Nt(0,Ht),Ut)w=0;else if(Te=0,w+=z,Ge={x:Me,z:ne,yaw:$},Math.abs(oe)>.2&&w>.2){let D=-1,re=$;for(let ve=-5;ve<=5;ve++){const he=$+ve*.45,ke=Be(Me,ne,he);ke>D&&(D=ke,re=he)}let _e=re-$;for(;_e>Math.PI;)_e-=Math.PI*2;for(;_e<-Math.PI;)_e+=Math.PI*2;$+=Math.max(-1.2,Math.min(1.2,_e))*Math.min(1,z*3)}}const bt=Math.hypot(Me-rt,ne-mt),Pt=z>0?bt/z:0;Q+=(Pt-Q)*Math.min(1,z*8);const Z=se(Me,ne);if(!be)Ee=Z;else{const Et=Z-Ee,ot=Math.abs(Et)<=2.8?Et*Math.min(1,z*10):Math.sign(Et)*6*z;Ee+=ot}Ce.position.set(Me,Ee,ne),Ce.rotation.y=$,K&&(K.style.transform=`translate(calc(-50% + ${Y*28}px), -50%)`),Ie.distanceToSquared(new He(Me,ne))>36&&le();let xe=(h?12:13)+Math.min(9,Math.abs(Te)*.28);const Ue=(h?5.4:5.8)+Math.min(2.2,Math.abs(Te)*.06),ze=Me-Math.sin($)*xe,at=ne-Math.cos($)*xe,st=V(ze,at);st>=0&&g[st]===1&&Ae(ze,at)<=.3&&(xe*=.55);const ut=new G(Me-Math.sin($)*xe,Ee+Ue,ne-Math.cos($)*xe);be?ie.lerp(ut,1-Math.exp(-z*6)):(ie.copy(ut),be=!0),t.position.copy(ie),X.set(Me+Math.sin($)*14,Ee+2.4,ne+Math.cos($)*14),t.lookAt(X),pe.set(Me,Ee+.8,ne),n.target.copy(pe),de&&(de.textContent=`${Math.round(Q*3.6)} km/sa`)}we(0);const ue=_.reduce((z,oe)=>z+(oe?1:0),0);return window.__driveInfo={start:{x:Se,z:Le,yaw:Fe},roadCells:ue,decks:B.size,maxF:28,maxR:12,model:"ground+roads; blocked by buildings and sea-level water",ramp:[555,565,572,580,590].map(z=>({z,d:Ae(-590,z)}))},{update:we,reset:Re,focus:()=>pe,state:()=>({x:Me,z:ne,y:Ee,speed:Te,yaw:$,onRoad:!!te(Me,ne),lastBlock:Ge}),input:ge,cell:(z,oe)=>ce(z,oe),probe:(z,oe)=>{const ye=V(z,oe);return{cell:ce(z,oe),blocked:ae(z,oe),road:te(z,oe),deck:Ae(z,oe),H:s(z,oe),block:ye<0?-1:g[ye]}},tick:z=>we(z),setInput:(z,oe)=>{O=z,W=oe},car:Ce,world:{STEP:Dt,x0:x,z0:p,nx:A,nz:E,road:_,block:g,blockedAt:ae,cellAt:ce,surface:se,deckAt:Ae,follow:(z,oe)=>{Me=z,ne=oe,Ie.distanceToSquared(new He(Me,ne))>36&&le()}}}}const Wd=new Set([1,2,3,4]),fE=i=>i<=4?2.6:i===5?1.2:i===6?1.6:i===9?3.2:0;let jd=null;async function AE(){if(new URLSearchParams(location.search).get("world")==="0")return null;try{const e=await fetch("./data/drive_world.json");if(!e.ok)return null;const t=await e.json();return window.__world={ways:t.ways.length,lamps:t.lamps.length,cars:t.cars.length},SE(t),window.__worldTest=IE,t}catch(i){return console.warn("drive world skipped",i),null}}const Fl=i=>{let e=0,t=0;for(let s=0;s<i.length;s+=2)e+=i[s],t+=i[s+1];const n=i.length/2;return[e/n,t/n]},qd=i=>{const e=new Map;for(const t of i){const n=`${Math.round(t[0]/4)},${Math.round(t[1]/4)}`;(e.get(n)||e.set(n,[]).get(n)).push(t[0],t[1])}return(t,n)=>{for(let s=-1;s<=1;s++)for(let a=-1;a<=1;a++){const r=e.get(`${Math.round(t/4)+s},${Math.round(n/4)+a}`);if(r){for(let o=0;o<r.length;o+=2)if(Math.abs(r[o]-t)<.6&&Math.abs(r[o+1]-n)<.6)return!0}}return!1}};function pE(i,e){const t=qd(e.remove),n=i.buildings.length;i.buildings=i.buildings.filter(s=>{const a=s.p?.[0]?.[0];if(!a)return!0;const[r,o]=Fl(a);return!t(r,o)}),window.__world={...window.__world||{},bldOnRoadFiltered:n-i.buildings.length}}function mE(i,e=24){const t=new Map,n=(s,a)=>s*100003+a;for(const s of i.ways){const a=s[5],r=s[1]/2;for(let o=0;o+3<a.length;o+=2){const c=a[o],l=a[o+1],h=a[o+2],u=a[o+3],d=Math.floor((Math.min(c,h)-r)/e),f=Math.floor((Math.max(c,h)+r)/e),m=Math.floor((Math.min(l,u)-r)/e),x=Math.floor((Math.max(l,u)+r)/e);for(let p=d;p<=f;p++)for(let A=m;A<=x;A++)(t.get(n(p,A))||t.set(n(p,A),[]).get(n(p,A))).push(c,l,h,u,r)}}return(s,a,r)=>{const o=t.get(n(Math.floor(s/e),Math.floor(a/e)));if(!o)return!1;for(let c=0;c<o.length;c+=5){const l=o[c],h=o[c+1],u=o[c+2]-l,d=o[c+3]-h,f=Math.max(0,Math.min(1,((s-l)*u+(a-h)*d)/(u*u+d*d||1)));if(Math.hypot(s-l-u*f,a-h-d*f)<o[c+4]+r)return!0}return!1}}function gE(i,e){const t=mE(e),n=i.filter(s=>!t(s[0],s[1],.5));return window.__world={...window.__world||{},treesOnRoadFiltered:i.length-n.length},n}function oc(i,e,t){const{x0:n,z0:s,nx:a,nz:r,step:o}=e,c=i.length;if(c<6)return;let l=1/0,h=-1/0;const u=[];for(let x=0;x<c;x+=2){const p=(x+2)%c;let A=i[x],E=i[x+1],_=i[p],g=i[p+1];l=Math.min(l,E,g),h=Math.max(h,E,g),E!==g&&(E>g&&([A,_]=[_,A],[E,g]=[g,E]),u.push([E,g,A,(_-A)/(g-E)]))}const d=Math.max(0,Math.floor((l-s)/o)),f=Math.min(r-1,Math.floor((h-s)/o)),m=[];for(let x=d;x<=f;x++){const p=s+(x+.5)*o;m.length=0;for(const A of u)p>=A[0]&&p<A[1]&&m.push(A[2]+A[3]*(p-A[0]));m.sort((A,E)=>A-E);for(let A=0;A+1<m.length;A+=2){const E=Math.max(0,Math.ceil((m[A]-n)/o-.5)),_=Math.min(a-1,Math.floor((m[A+1]-n)/o-.5));for(let g=E;g<=_;g++)t(x*a+g)}}}const bE=(i,e,t,n,s)=>{const a=t-i,r=n-e,o=Math.hypot(a,r)||1,c=-r/o*s,l=a/o*s,h=a/o*s*.3,u=r/o*s*.3;return[i+c-h,e+l-u,t+c+h,n+l+u,t-c+h,n-l+u,i-c-h,e-l-u]},xE=(i,e)=>{const[t,n]=Fl(i),s=[];for(let a=0;a<i.length;a+=2){const r=i[a]-t,o=i[a+1]-n,c=Math.hypot(r,o)||1,l=Math.max(.2,(c-e)/c);s.push(t+r*l,n+o*l)}return s};function _E(i,e){jd=i;const{road:t,block:n}=i;for(let o=0;o<n.length;o++)n[o]===1&&(n[o]=0);const s=qd(e.solid),a=[];for(const o of i.buildings){if(!o.h||o.h<2.2||!o.p)continue;for(const l of o.p){const h=l?.[0];!h||h.length<6||oc(h,i,u=>{n[u]=1})}const c=o.p[0]?.[0];if(c){const[l,h]=Fl(c);s(l,h)&&a.push(c)}}let r=0;for(const o of e.ways){const c=o[5],l=Math.max(1.3,o[1]/2-.6);for(let h=0;h+3<c.length;h+=2)oc(bE(c[h],c[h+1],c[h+2],c[h+3],l),i,u=>{n[u]===1&&(n[u]=0,r++),t[u]||(t[u]=1)})}for(const o of a)oc(xE(o,1.5),i,c=>{n[c]=1,t[c]=0});window.__world={...window.__world||{},maskOpenedCells:r,solidKept:a.length}}const EE=`attribute vec4 rd;
attribute float jf;
varying vec4 vRd;
varying float vJf;
`,vE=`varying vec4 vRd;
varying float vJf;
float wm_line(float x, float c, float w) { float d = abs(x - c); float a = fwidth(x) * 0.8 + 0.01; return 1.0 - smoothstep(w * 0.5 - a, w * 0.5 + a, d); }
float wm_dash(float v, float on, float period) { float m = mod(v, period); float a = fwidth(v) + 0.01; return smoothstep(0.0, a, m) * (1.0 - smoothstep(on - a, on, m)); }
`,ME=`
{
  float u = vRd.x, v = vRd.y, hw = vRd.z;
  float info = floor(vRd.w + 0.5);
  float kind = floor(info / 16.0);
  float lanes = floor(mod(info, 16.0) / 2.0);
  float ow = mod(info, 2.0);
  float au = abs(u);
  vec3 col;
  if (kind < 0.5) { // sidewalk + kerb
    col = vec3(0.80, 0.77, 0.72);
    col = mix(col, vec3(0.80, 0.76, 0.70), wm_line(fract(v / 1.6), 0.5, 0.06) * 0.6);
    col = mix(col, vec3(0.66, 0.63, 0.59), 1.0 - smoothstep(hw + 0.28, hw + 0.36, au));
  } else if (kind < 1.5 || kind > 1.5 && kind < 2.5) { // asphalt
    col = vec3(0.105, 0.103, 0.11) + 0.008 * sin(v * 0.11 + u * 0.7); // wm16: was 0.215 — under the map's warm 2.x sun it read as light brown (Karaköy); darker albedo -> dark asphalt
    if (kind > 1.5 && vJf > 0.02) {
      float m = 0.0;
      if (hw > 3.2) m = max(m, wm_line(au, hw - 0.5, 0.16));
      if (ow < 0.5) {
        float per = max(1.0, floor(lanes / 2.0 + 0.5));
        if (lanes >= 4.0) m = max(m, max(wm_line(au, 0.12, 0.12), wm_line(au, 0.36, 0.12)));
        else m = max(m, wm_line(au, 0.0, 0.14) * wm_dash(v, 3.0, 9.0));
        float lw = hw / per;
        for (int k = 1; k < 3; k++) { if (float(k) >= per) break; m = max(m, wm_line(au, lw * float(k), 0.13) * wm_dash(v, 3.0, 9.0)); }
      } else {
        float lw = 2.0 * hw / max(1.0, lanes);
        for (int k = 1; k < 5; k++) { if (float(k) >= lanes) break; m = max(m, wm_line(u, -hw + lw * float(k), 0.13) * wm_dash(v, 3.0, 9.0)); }
      }
      col = mix(col, vec3(0.93, 0.92, 0.88), m * vJf);
    }
  } else if (kind < 3.5) { // tram avenue: stone setts
    col = vec3(0.47, 0.44, 0.41) + 0.025 * sin(v * 2.1) * sin(u * 2.3);
  } else { // tram track bed + rails
    col = vec3(0.40, 0.385, 0.37);
    float r = max(wm_line(au, 0.72, 0.11), 0.0);
    col = mix(col, vec3(0.80, 0.80, 0.79), r);
    col = mix(col, vec3(0.30, 0.29, 0.28), max(wm_line(au, 0.6, 0.05), wm_line(au, 0.84, 0.05)) * 0.6);
  }
  diffuseColor.rgb = col;
}
`;function cc(i){const e=new ct({color:"#ffffff",depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2-i,polygonOffsetUnits:-4-i*2});return e.onBeforeCompile=t=>{t.vertexShader=EE+t.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
 vRd = rd; vJf = jf;`),t.fragmentShader=t.fragmentShader.replace("#include <common>",`#include <common>
`+vE).replace("#include <color_fragment>",`#include <color_fragment>
`+ME)},e.customProgramCacheKey=()=>"drive3-road",e}class lc{pos=[];rd=[];jf=[];idx=[];n=0;add(e,t,n,s,a,r){const o=t.length/2;if(o<2)return;let c=0;for(let l=0;l<o;l++){const h=t[l*2],u=t[l*2+1],d=Math.max(0,l-1),f=Math.min(o-1,l+1);let m=t[f*2]-t[d*2],x=t[f*2+1]-t[d*2+1];const p=Math.hypot(m,x)||1;m/=p,x/=p;let A=1;if(l>0&&l<o-1){const B=h-t[d*2],S=u-t[d*2+1],T=Math.hypot(B,S)||1,U=B/T*m+S/T*x;A=Math.min(1.8,1/Math.max(.55,U))}const E=-x*n*A,_=m*n*A;l>0&&(c+=Math.hypot(h-t[l*2-2],u-t[l*2-1]));const g=r?r[l]:0;for(const B of[-1,1]){const S=h+E*B,T=u+_*B;this.pos.push(S,e(S,T)+a,T),this.rd.push(B*n,c,n,s),this.jf.push(g)}if(l>0){const B=this.n+(l-1)*2;this.idx.push(B,B+1,B+2,B+1,B+3,B+2)}}this.n+=o*2}mesh(e,t){if(!this.n)return null;const n=new Bt;n.setAttribute("position",new ht(this.pos,3));const s=new Float32Array(this.n*3);for(let r=0;r<this.n;r++)s[r*3+1]=1;n.setAttribute("normal",new Gt(s,3)),n.setAttribute("rd",new ht(this.rd,4)),n.setAttribute("jf",new ht(this.jf,1)),n.setIndex(this.n>65e3?new _l(this.idx,1):new xl(this.idx,1)),n.computeBoundingSphere();const a=new lt(n,e);return a.renderOrder=t,a.receiveShadow=!0,a.matrixAutoUpdate=!1,a.updateMatrix(),a}}function Cu(i,e,t,n){const s=[],a=[],r=e.length/2;for(let c=0;c<r-1;c++){const l=e[c*2],h=e[c*2+1],u=e[c*2+2],d=e[c*2+3],f=Math.hypot(u-l,d-h);let m=Math.max(1,Math.ceil(f/14));f>6&&Math.abs(i((l+u)/2,(h+d)/2)-(i(l,h)+i(u,d))/2)>.15&&(m=Math.max(m,Math.ceil(f/5))),n&&(m=Math.max(m,Math.ceil(f/9)));for(let x=0;x<m;x++){const p=x/m;s.push(l+(u-l)*p,h+(d-h)*p),a.push(c+p)}}s.push(e[e.length-2],e[e.length-1]),a.push(r-1);let o=null;if(n){const c=s.length/2,l=new Float64Array(c);for(let u=1;u<c;u++)l[u]=l[u-1]+Math.hypot(s[u*2]-s[u*2-2],s[u*2+1]-s[u*2-1]);const h=[];for(const u of t){let d=0;for(let f=0;f<c;f++)if(Math.abs(a[f]-u)<1e-6){d=f;break}h.push(l[d])}o=[];for(let u=0;u<c;u++){let d=1e9;for(const m of h)d=Math.min(d,Math.abs(l[u]-m));const f=Math.max(0,Math.min(1,(d-7)/6));o.push(f*f*(3-2*f))}}return{pts:s,fade:o}}function yE(){const i=[],e=(n,s)=>{const a=new De(s),r=n.attributes.position.count,o=new Float32Array(r*3);for(let c=0;c<r;c++)o[c*3]=a.r,o[c*3+1]=a.g,o[c*3+2]=a.b;return n.setAttribute("color",new Gt(o,3)),n.toNonIndexed()};i.push(e(new Xn(.08,.12,6.6,5,1,!0).translate(0,3.3,0),"#46524f")),i.push(e(new Ft(.1,.1,1.5).translate(0,6.5,.7),"#46524f")),i.push(e(new Ft(.34,.16,.62).translate(0,6.42,1.4),"#f1ecdf")),i.push(e(new Xn(.2,.24,.5,5).translate(0,.25,0),"#3a4442"));const t=la(i.map(n=>(n.deleteAttribute("uv"),n)));return t.computeVertexNormals(),t}function wE(){const i=[],e=(n,s)=>{const a=n.attributes.position.count,r=new Float32Array(a*3);for(let o=0;o<a;o++)r[o*3]=s[0],r[o*3+1]=s[1],r[o*3+2]=s[2];return n.setAttribute("color",new Gt(r,3)),n.deleteAttribute("uv"),n.toNonIndexed()};i.push(e(new Ft(1.7,.62,4.1).translate(0,.62,0),[1,1,1])),i.push(e(new Ft(1.48,.5,2).translate(0,1.18,-.15),[.78,.86,.92])),i.push(e(new Ft(1.76,.3,3.4).translate(0,.22,0),[.16,.16,.16]));const t=la(i);return t.computeVertexNormals(),t}const Su=["#f2f0ea","#c8463a","#33507a","#9aa0a6","#e3c04a","#2f3133","#6d8f5a"].map(i=>new De(i));function CE(i){const{scene:e,camera:t,H:n,W:s,narrow:a}=i,r=performance.now(),o=500,c=new Map,l=(se,J)=>{const fe=Math.floor(se/o),$=Math.floor(J/o),me=`${fe},${$}`;let Ce=c.get(me);return Ce||(Ce={side:new lc,asph:new lc,top:new lc,lamps:[],cars:[],objs:[],cx:(fe+.5)*o,cz:($+.5)*o},c.set(me,Ce)),Ce},h=.3,u=.34,d=.38;for(const se of s.ways){const[J,fe,$,me,Ce,Me,ne]=se;if(Ce)continue;const Ee=Math.floor(Me.length/4)*2,Te=l(Me[Ee],Me[Ee+1]),Se=Wd.has(J),{pts:Le,fade:Fe}=Cu(n,Me,ne,Se),Ge=fe/2,je=fE(J);je>0&&Te.side.add(n,Le,Ge+je,0,h,null);const w=J===9?3:Se?2:1;Te.asph.add(n,Le,Ge,w*16+Math.min(7,$)*2+me,u,Fe)}for(const se of s.trams){const J=se.length/2;if(J<2)continue;let fe=0;const $=me=>{const Ce=se.slice(fe*2,me*2+2);if(Ce.length>=4){const Me=Math.floor(Ce.length/4)*2;l(Ce[Me],Ce[Me+1]).top.add(n,Cu(n,Ce,[],!1).pts,1.6,64,d,null)}fe=me};for(let me=1;me<J;me++)(me-fe>=40||me===J-1)&&$(me)}for(const se of s.lamps)l(se[0],se[1]).lamps.push(se);for(const se of s.cars)l(se[0],se[1]).cars.push(se);const f=cc(0),m=cc(1),x=cc(2),p=yE(),A=wE(),E=new ct({vertexColors:!0}),_=new ct({vertexColors:!0}),g=new $e,B=new Vt,S=new G,T=new G(1,1,1),U=new G(0,1,0);let M=0,y=0;const L=new Bn;L.name="drive3-world",e.add(L);for(const se of c.values()){for(const[J,fe,$]of[[se.side,f,-30],[se.asph,m,-29],[se.top,x,-28]]){const me=J.mesh(fe,$);me&&(se.objs.push(me),M+=J.idx.length/3)}if(se.lamps.length){const J=new Qt(p,E,se.lamps.length);se.lamps.forEach((fe,$)=>{S.set(fe[0],n(fe[0],fe[1])+h,fe[1]),B.setFromAxisAngle(U,fe[2]),J.setMatrixAt($,g.compose(S,B,T))}),J.castShadow=!a,J.computeBoundingSphere(),se.objs.push(J),M+=p.attributes.position.count/3*se.lamps.length}if(se.cars.length){const J=new Qt(A,_,se.cars.length);se.cars.forEach((fe,$)=>{S.set(fe[0],n(fe[0],fe[1])+.32,fe[1]),B.setFromAxisAngle(U,fe[2]),J.setMatrixAt($,g.compose(S,B,T)),J.setColorAt($,Su[fe[3]%Su.length])}),J.castShadow=!a,J.receiveShadow=!0,J.computeBoundingSphere(),se.objs.push(J),M+=A.attributes.position.count/3*se.cars.length}for(const J of se.objs)J.visible=!1,L.add(J)}const V=e.getObjectByName("drive-road");V&&(V.visible=!1);const te=a?620:820;let Ae=0,ae=0;const ce=()=>{const se=t.position.x,J=t.position.z;Ae=0,ae=0;for(const $ of c.values()){const Ce=Math.hypot(Math.max(0,Math.abs(se-$.cx)-o/2),Math.max(0,Math.abs(J-$.cz)-o/2))<te;for(const Me of $.objs)Me.visible=Ce,Ce&&ae++;if(Ce)for(const Me of $.objs)Ae+=Me instanceof Qt?Me.geometry.attributes.position.count/3*Me.count:Me.geometry.index.count/3}const fe=e.getObjectByName("drive-road");fe&&(fe.visible=!1),window.__world={...window.__world||{},visTris:Math.round(Ae),visDraws:ae}};ce(),setInterval(ce,400),y=[...c.values()].reduce((se,J)=>se+J.objs.length,0),window.__world={...window.__world||{},chunks:c.size,totalTris:Math.round(M),totalDrawObjs:y,buildMs:Math.round(performance.now()-r)}}let Qr=null;function SE(i){Qr=i}function IE(i,e="road"){const t=jd,n=window.__drive;if(!t||!n||!Qr)return{error:"no grid"};const{nx:s,nz:a,x0:r,z0:o,step:c,road:l}=t,h=s*a,u=new Uint8Array(h);for(let S=0;S<a;S++)for(let T=0;T<s;T++){const U=S*s+T;e==="road"&&!l[U]||n.cell(r+(T+.5)*c,o+(S+.5)*c)&&(u[U]=1)}const d=(S,T)=>{const U=Math.floor((S-r)/c),M=Math.floor((T-o)/c);return U<0||M<0||U>=s||M>=a?-1:M*s+U},f=new Int32Array(h),m=new Int32Array(h),x=S=>{f.fill(-1);let T=0,U=0;for(m[U++]=S,f[S]=0;T<U;){const M=m[T++],y=f[M]+1,L=M%s;L>0&&u[M-1]&&f[M-1]<0&&(f[M-1]=y,m[U++]=M-1),L<s-1&&u[M+1]&&f[M+1]<0&&(f[M+1]=y,m[U++]=M+1),M>=s&&u[M-s]&&f[M-s]<0&&(f[M-s]=y,m[U++]=M-s),M+s<h&&u[M+s]&&f[M+s]<0&&(f[M+s]=y,m[U++]=M+s)}return U},p=i.map(S=>({...S,k:d(S.x,S.z)})),A={};for(const S of p)A[S.id]=S.k>=0&&!!u[S.k];const E={};let _=0,g=[];p.forEach((S,T)=>{if(!A[S.id])return;const U=x(S.k);if(T===0){_=U;const M=new Map;Qr.ways.forEach((y,L)=>{if(!(Wd.has(y[0])||y[0]===5||y[0]===9))return;const V=y[5];for(let te=0;te+3<V.length;te+=2){const Ae=Math.hypot(V[te+2]-V[te],V[te+3]-V[te+1]);for(let ae=0;ae<Ae;ae+=10){const ce=ae/Ae,se=V[te]+(V[te+2]-V[te])*ce,J=V[te+1]+(V[te+3]-V[te+1])*ce,fe=d(se,J);if(fe<0||f[fe]>=0||fe>0&&f[fe-1]>=0||f[fe+1]>=0||fe>=s&&f[fe-s]>=0||fe+s<h&&f[fe+s]>=0)continue;const $=Qr.names?.[String(L)]||`code${y[0]}`,me=M.get($)||M.set($,{n:0,at:[]}).get($);me.n++,me.at.length<8&&me.at.push(Math.round(se),Math.round(J))}}}),g=[...M.entries()].map(([y,L])=>({name:y,n:L.n,at:L.at})).sort((y,L)=>L.n-y.n)}for(const M of p)M!==S&&M.k>=0&&(E[`${S.id}->${M.id}`]=f[M.k]>=0?Math.round(f[M.k]*c):null)});let B=0;for(let S=0;S<h;S++)B+=u[S];return{mode:e,startOk:A,pairs:E,openCells:B,reachFromFirst:_,gapSamples10m:g.reduce((S,T)=>S+T.n,0),gaps:g.slice(0,30)}}const TE=28.979,Yd=41.0235,BE=Math.cos(Yd*Math.PI/180)*111320,RE=110574,DE=(i,e)=>[(i-TE)*BE,-(e-Yd)*RE],cs=[{id:"eminonu",name:"Eminönü",x:-592.4,z:572.3,yaw:Math.atan2(19,-35.2)},{id:"karakoy",name:"Karaköy",x:-345,z:114},{id:"sultanahmet",name:"Sultanahmet",x:-205,z:1830},{id:"taksim",name:"Taksim",x:539,z:-1605,yaw:Math.atan2(-90,44)},{id:"besiktas",name:"Beşiktaş",x:2410.3,z:-2073.5,yaw:1.755}],Wi=[{id:"yenicami",name:"Yeni Cami",x:-573.6,z:733.4,r:75,info:"1597'de başlandı, 1665'te Turhan Sultan döneminde tamamlandı."},{id:"misir",name:"Mısır Çarşısı",x:-653.7,z:695.8,r:60,info:"Yeni Cami külliyesinin parçası olarak 1660'larda yapıldı; baharatçılarıyla ünlü."},{id:"rustempasa",name:"Rüstem Paşa Camii",x:-862.8,z:645,r:60,info:"Mimar Sinan'ın eseri; içi İznik çinileriyle ünlü."},{id:"suleymaniye",name:"Süleymaniye Camii",x:-1261.5,z:817,r:95,info:"Mimar Sinan, Kanuni Sultan Süleyman için yaptı (1550–1557)."},{id:"kapalicarsi",name:"Kapalıçarşı",x:-900,z:1390,r:130,info:"Çekirdeği Fatih döneminden; dünyanın en eski kapalı çarşılarından."},{id:"ayasofya",name:"Ayasofya",x:81.7,z:1654.5,r:95,info:"537'de Bizans İmparatoru Justinianus döneminde tamamlandı."},{id:"sultanahmet",name:"Sultanahmet Camii",x:-190.4,z:2006.7,r:95,info:"1609–1616'da yapıldı; altı minaresiyle ünlü, 'Mavi Cami' de denir."},{id:"dikilitas",name:"Dikilitaş (Hipodrom)",x:-302,z:1943,r:55,info:"Mısır'dan getirildi; 390'da Theodosius döneminde Hipodrom'a dikildi."},{id:"kucukayasofya",name:"Küçük Ayasofya",x:-570.5,z:2295,r:70,info:"6. yüzyılda Justinianus döneminde kilise olarak yapıldı."},{id:"topkapi",name:"Topkapı Sarayı",x:425.3,z:1181.8,r:190,info:"Yüzyıllarca Osmanlı padişahlarının sarayıydı; 1924'ten beri müze."},{id:"galatakopru",name:"Galata Köprüsü",x:-520,z:380,r:60,info:"Haliç üzerinde Eminönü ile Karaköy'ü bağlar; alt katında lokantalar var."},{id:"galata",name:"Galata Kulesi",x:-402,z:-236,r:60,info:"Cenevizliler 1348'de yaptı; yüksekliği yaklaşık 63 m."},{id:"nusretiye",name:"Nusretiye Camii",x:350.5,z:-429.4,r:65,info:"Tophane'de; 1826'da II. Mahmud döneminde tamamlandı."},{id:"taksim",name:"Taksim Cumhuriyet Anıtı",x:503.9,z:-1481.7,r:60,info:"1928'de açıldı; İtalyan heykeltıraş Pietro Canonica'nın eseri."},{id:"saatkulesi",name:"Dolmabahçe Saat Kulesi",x:1458.2,z:-1565.5,r:60,info:"Sultan II. Abdülhamid döneminde, 1890'larda yapıldı."},{id:"stadyum",name:"Beşiktaş Stadyumu",x:1294.3,z:-1762.9,r:140,info:"Beşiktaş JK'nın stadı; bugünkü yapı 2016'da açıldı."},{id:"barbaros",name:"Barbaros Meydanı",x:2338,z:-2037,r:80,info:"Barbaros Hayrettin Paşa türbesi ve heykeli; Beşiktaş iskelesinin yanında."}],LE=[["Eminönü",28.971,41.017],["Karaköy",28.977,41.0225],["Galata",28.9741,41.0256],["Tophane",28.983,41.027],["Kabataş",28.9925,41.034],["Taksim",28.9858,41.0372],["Cihangir",28.983,41.0315],["Beyoğlu",28.9775,41.0335],["Şişhane",28.9735,41.028],["Kasımpaşa",28.965,41.035],["Dolmabahçe",29,41.0392],["Beşiktaş",29.0077,41.0422],["Yıldız",29.01,41.0494],["Ihlamur",29.0012,41.0507],["Sirkeci",28.977,41.0145],["Sultanahmet",28.9768,41.0054],["Gülhane",28.981,41.0125],["Cankurtaran",28.981,41.004],["Kumkapı",28.965,41.003],["Beyazıt",28.964,41.0105],["Kapalıçarşı",28.968,41.0107],["Süleymaniye",28.964,41.016],["Unkapanı",28.958,41.022],["Vefa",28.958,41.015],["Laleli",28.956,41.009],["Aksaray",28.948,41.008],["Fatih",28.9495,41.0195],["Zeyrek",28.955,41.02],["Çemberlitaş",28.9715,41.0085],["Tahtakale",28.968,41.016],["Fener",28.95,41.029],["Balat",28.948,41.03],["Edirnekapı",28.935,41.03],["Karagümrük",28.94,41.025],["Topkapı",28.922,41.017],["Samatya",28.935,41.001],["Cerrahpaşa",28.94,41.004],["Yedikule",28.923,40.994],["Kocamustafapaşa",28.93,41.003],["Şehzadebaşı",28.956,41.0135]].map(([i,e,t])=>{const[n,s]=DE(e,t);return[i,n,s]});function PE(i,e){let t="",n=81e4;for(const[s,a,r]of LE){const o=(a-i)**2+(r-e)**2;o<n&&(n=o,t=s)}return t}const UE="modulepreload",FE=function(i,e){return new URL(i,e).href},Iu={},NE=function(e,t,n){let s=Promise.resolve();if(t&&t.length>0){let l=function(h){return Promise.all(h.map(u=>Promise.resolve(u).then(d=>({status:"fulfilled",value:d}),d=>({status:"rejected",reason:d}))))};const r=document.getElementsByTagName("link"),o=document.querySelector("meta[property=csp-nonce]"),c=o?.nonce||o?.getAttribute("nonce");s=l(t.map(h=>{if(h=FE(h,n),h in Iu)return;Iu[h]=!0;const u=h.endsWith(".css"),d=u?'[rel="stylesheet"]':"";if(n)for(let m=r.length-1;m>=0;m--){const x=r[m];if(x.href===h&&(!u||x.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${h}"]${d}`))return;const f=document.createElement("link");if(f.rel=u?"stylesheet":UE,u||(f.as="script"),f.crossOrigin="",f.href=h,c&&f.setAttribute("nonce",c),document.head.appendChild(f),u)return new Promise((m,x)=>{f.addEventListener("load",m),f.addEventListener("error",()=>x(new Error(`Unable to preload CSS for ${h}`)))})}))}function a(r){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=r,window.dispatchEvent(o),!o.defaultPrevented)throw r}return s.then(r=>{for(const o of r||[])o.status==="rejected"&&a(o.reason);return e().catch(a)})},qs=50;let $s=[];const Xd=new Map,Kd=new Map;let Nl=!1;const Jd=(i,e)=>(i+2e3)*4e3+(e+2e3),Zd=(i,e)=>{const t=Math.floor((Math.min(e.ax,e.bx)-20)/qs),n=Math.floor((Math.max(e.ax,e.bx)+20)/qs),s=Math.floor((Math.min(e.az,e.bz)-20)/qs),a=Math.floor((Math.max(e.az,e.bz)+20)/qs);for(let r=t;r<=n;r++)for(let o=s;o<=a;o++){const c=Jd(r,o);let l=i.get(c);l||i.set(c,l=[]),l.push(e)}};async function kE(i){try{const e=await(await fetch(i)).json(),t=e.names||{};e.ways.forEach((n,s)=>{const a=t[String(s)],r=n?.[5];if(!a||!r)return;let o=$s.indexOf(a);o<0&&($s.push(a),o=$s.length-1);for(let c=0;c+3<r.length;c+=2)Zd(Kd,{n:o,ax:r[c],az:r[c+1],bx:r[c+2],bz:r[c+3]})}),Nl=!0}catch{}}async function QE(){try{const i=await NE(()=>import("./streets-CAVVug3n.js"),[],import.meta.url),e=i.default||i,t=$s.length;for(const n of e.names)$s.push(n);for(const n of e.lines){const s=n[0]+t;for(let a=1;a+3<n.length;a+=2)Zd(Xd,{n:s,ax:n[a],az:n[a+1],bx:n[a+2],bz:n[a+3]})}Nl=!0}catch(i){console.warn("street names skipped",i)}}const Tu=(i,e,t,n)=>{const s=i.get(Jd(Math.floor(e/qs),Math.floor(t/qs)));if(!s)return null;let a=null,r=n*n;for(const o of s){const c=o.bx-o.ax,l=o.bz-o.az,h=c*c+l*l||1e-9,u=Math.max(0,Math.min(1,((e-o.ax)*c+(t-o.az)*l)/h)),d=o.ax+c*u-e,f=o.az+l*u-t,m=d*d+f*f;m<r&&(r=m,a=o)}return a?{name:$s[a.n],d:Math.sqrt(r)}:null};function hc(i,e,t=22){if(!Nl)return null;const n=Tu(Kd,i,e,Math.min(t,16));return n||Tu(Xd,i,e,t)}const xt=(i,e,t="",n=document.body)=>{const s=document.createElement(i);return e&&(s.className=e),t&&(s.innerHTML=t),n.appendChild(s),s};function OE(i){for(const ue of["hud","touch","badge"])document.getElementById(ue)?.remove();const e=new URLSearchParams(location.search),t=matchMedia("(pointer: coarse)").matches||i.narrow||e.get("touch")==="1";document.body.classList.add("g-on"),t&&document.body.classList.add("g-touchui");const n=xt("div","g-hud"),s=xt("div","g-info","",n),a=xt("div","g-street","İstanbul",s),r=xt("div","g-district","yükseklikler yaklaşık",s),o=xt("div","g-speed","<b>0</b><span>km/sa</span><i></i>",s),c=o.querySelector("b"),l=o.querySelector("i"),h=xt("div","g-goal","",s);h.hidden=!0;const u=xt("div","g-side","",n),d=i.narrow?112:150,f=xt("canvas","g-mini","",u),m=Math.min(2,window.devicePixelRatio||1);f.width=f.height=Math.round(d*m),f.style.width=f.style.height=`${d}px`;const x=xt("div","g-btns","",u),p=xt("button","g-btn","☰ Menü",x),A=xt("button","g-btn","↺ Yola dön",x),E=xt("button","g-btn","★ Tur",x);p.id="g-menu-btn",A.id="g-reset",E.id="g-tour-btn";const _=(ue,z)=>ue.addEventListener("pointerdown",oe=>{oe.preventDefault(),oe.stopPropagation(),z()});_(p,()=>j()),_(A,()=>i.onReset()),_(E,()=>i.onTour());const g=xt("div","g-flash","",document.body),B=xt("div","g-card","",document.body);B.hidden=!0;const S=xt("div","g-toast","",document.body);S.hidden=!0;const T=xt("div","g-help",t?"Sol: parmağını sağa-sola kaydır · Sağ: <b>Gaz</b>, <b>Fren/Geri</b>, <b>El freni</b> (drift)":"<b>W/↑</b> gaz · <b>S/↓</b> fren, durunca geri · <b>A D</b> direksiyon · <b>Boşluk</b> el freni · <b>R</b> yola dön · <b>M</b> menü · <b>T</b> tur",document.body);let U=9;const M=xt("div","g-touch","",document.body),y=xt("div","g-steer","<span>◀ Direksiyon ▶</span>",M);y.id="g-steer";const L=xt("i","","",y),V=xt("div","g-pedals","",M),te=xt("div","g-col","",V),Ae=xt("button","g-hb","El freni",te);Ae.id="g-hb";const ae=xt("button","g-brake","Fren<small>Geri</small>",te);ae.id="g-brake";const ce=xt("button","g-gas","Gaz",V);ce.id="g-gas";const se=new Set,J=new Set,fe=new Set,$=()=>{i.touch.set((se.size?1:0)-(J.size?1:0),null,fe.size>0),ce.classList.toggle("on",se.size>0),ae.classList.toggle("on",J.size>0),Ae.classList.toggle("on",fe.size>0)},me=(ue,z)=>{ue.addEventListener("pointerdown",ye=>{z.add(ye.pointerId);try{ue.setPointerCapture(ye.pointerId)}catch{}ye.preventDefault(),$()});const oe=ye=>{z.delete(ye.pointerId),$()};ue.addEventListener("pointerup",oe),ue.addEventListener("pointercancel",oe),ue.addEventListener("lostpointercapture",oe),ue.addEventListener("contextmenu",ye=>ye.preventDefault())};me(ce,se),me(ae,J),me(Ae,fe);let Ce=-1,Me=0;const ne=i.narrow?58:70,Ee=ue=>{i.touch.set(null,ue,null),L.style.transform=`translate(calc(-50% + ${ue*ne}px), -50%)`};y.addEventListener("pointerdown",ue=>{if(Ce!==-1)return;Ce=ue.pointerId,Me=ue.clientX;try{y.setPointerCapture(ue.pointerId)}catch{}const z=y.getBoundingClientRect();L.style.left=`${ue.clientX-z.left}px`,y.classList.add("on"),ue.preventDefault(),Ee(1e-4)}),y.addEventListener("pointermove",ue=>{if(ue.pointerId!==Ce)return;const z=Math.max(-1,Math.min(1,(ue.clientX-Me)/ne));Ee(z===0?1e-4:z)});const Te=ue=>{ue.pointerId===Ce&&(Ce=-1,y.classList.remove("on"),L.style.left="50%",Ee(0))};y.addEventListener("pointerup",Te),y.addEventListener("pointercancel",Te);const Se=xt("div","g-menu","",document.body);Se.id="g-menu";const Le=xt("div","g-menu-box","",Se);xt("h1","","İstanbul 3D · Sürüş",Le),xt("p","g-sub","Nereden başlayalım?",Le);let Fe="free";const Ge=xt("div","g-modes","",Le),je=xt("button","g-mode on","Serbest sürüş",Ge),w=xt("button","g-mode","★ Simge turu",Ge);je.id="g-mode-free",w.id="g-mode-tour";const Q=xt("p","g-note","Şehirde istediğin yere git. Bir simgenin yanından geçince adı ve kısa bilgisi çıkar.",Le),R=ue=>{Fe=ue,je.classList.toggle("on",ue==="free"),w.classList.toggle("on",ue==="tour"),Q.innerHTML=ue==="tour"?`Parlayan sarı ışığa sür. Varınca simgenin adı ve kısa bilgisi çıkar, sonra sıradaki gelir (${i.stops.length} simge).`:"Şehirde istediğin yere git. Bir simgenin yanından geçince adı ve kısa bilgisi çıkar."};_(je,()=>R("free")),_(w,()=>R("tour"));const ee=xt("div","g-starts","",Le);for(const ue of i.starts){const z=xt("button","g-start",ue.name,ee);z.id=`g-start-${ue.id}`,z.addEventListener("click",()=>i.onStart(ue.id,Fe))}xt("p","g-note small",t?"Sol el direksiyon, sağ el gaz / fren / el freni. Yükseklikler yaklaşık.":"W A S D veya oklar · Boşluk el freni · R yola dön · M menü. Yükseklikler yaklaşık.",Le);let Y=!1;const O=()=>{Y=!0,Se.hidden=!1,i.paused(!0)},W=()=>{Y=!1,Se.hidden=!0,i.paused(!1)},j=()=>Y?W():O();Se.hidden=!0;const H=i.world,v=2,b=Math.ceil(H.nx/v),C=Math.ceil(H.nz/v),P=document.createElement("canvas");P.width=b,P.height=C;{const ue=P.getContext("2d"),z=ue.createImageData(b,C),oe=z.data;for(let ye=0;ye<C;ye++)for(let Ne=0;Ne<b;Ne++){const Pe=ye*v*H.nx+Ne*v,rt=H.road[Pe],mt=H.block[Pe],Ut=rt===1?[255,251,240]:rt===2?[236,224,196]:mt===1?[186,160,128]:mt===2?[120,178,214]:[214,204,176],bt=(ye*b+Ne)*4;oe[bt]=Ut[0],oe[bt+1]=Ut[1],oe[bt+2]=Ut[2],oe[bt+3]=255}ue.putImageData(z,0,0)}const I=f.getContext("2d"),k=i.narrow?260:300;let F=0,N=0;const K=(ue,z,oe,ye)=>{const Ne=f.width,Pe=Ne/2,rt=Pe/k,mt=-Math.PI/2-Math.atan2(Math.cos(oe),Math.sin(oe));I.save(),I.clearRect(0,0,Ne,Ne),I.beginPath(),I.arc(Pe,Pe,Pe-1,0,Math.PI*2),I.clip(),I.fillStyle="#d6ccb0",I.fillRect(0,0,Ne,Ne),I.translate(Pe,Pe),I.rotate(mt),I.scale(rt,rt),I.imageSmoothingEnabled=!0,I.drawImage(P,H.x0-ue,H.z0-z,b*H.STEP*v,C*H.STEP*v),I.restore();const Ut=(bt,Pt)=>{const Z=bt-ue,xe=Pt-z,Ue=Math.cos(mt),ze=Math.sin(mt);return[Pe+(Z*Ue-xe*ze)*rt,Pe+(Z*ze+xe*Ue)*rt]};for(const bt of i.stops){let[Pt,Z]=Ut(bt.x,bt.z);const xe=ye&&bt.id===ye.id,Ue=Pt-Pe,ze=Z-Pe,at=Math.hypot(Ue,ze),st=Pe-7*m;if(at>st){if(!xe)continue;Pt=Pe+Ue/at*st,Z=Pe+ze/at*st}I.beginPath(),I.arc(Pt,Z,(xe?5+Math.sin(N*6)*1.2:3.2)*m,0,Math.PI*2),I.fillStyle=xe?"#ffb000":"#c0392b",I.fill(),I.lineWidth=1.5*m,I.strokeStyle="#fff",I.stroke()}{const bt=Math.cos(mt),Pt=Math.sin(mt),Z=1*Pt,xe=-1*bt,Ue=Pe+Z*(Pe-9*m),ze=Pe+xe*(Pe-9*m);I.font=`700 ${10*m}px system-ui,sans-serif`,I.textAlign="center",I.textBaseline="middle",I.fillStyle="rgba(255,255,255,.9)",I.beginPath(),I.arc(Ue,ze,7*m,0,Math.PI*2),I.fill(),I.fillStyle="#333",I.fillText("K",Ue,ze+.5)}I.save(),I.translate(Pe,Pe),I.scale(m,m),I.beginPath(),I.moveTo(0,-8),I.lineTo(6,6),I.lineTo(0,3),I.lineTo(-6,6),I.closePath(),I.fillStyle="#d24b3a",I.fill(),I.lineWidth=1.6,I.strokeStyle="#fff",I.stroke(),I.restore(),I.beginPath(),I.arc(Pe,Pe,Pe-1,0,Math.PI*2),I.lineWidth=2*m,I.strokeStyle="rgba(40,40,40,.55)",I.stroke()};let de=0,ie=0,X=0,pe=null;const be=ue=>{g.textContent=ue,g.classList.add("on"),de=1.8},ge=(ue,z,oe,ye)=>{B.innerHTML=`<div class="g-card-t">★ ${ue}</div><div class="g-card-b">${z}</div><button class="g-card-n" id="g-card-next">${oe} ›</button>`,B.hidden=!1,ie=ye?1e9:7,pe=ye,B.querySelector("button").addEventListener("pointerdown",Pe=>{Pe.preventDefault(),B.hidden=!0,ie=0;const rt=pe;pe=null,rt?.()})},Be=ue=>{S.innerHTML=ue,S.hidden=!1,X=6},Re=ue=>{E.classList.toggle("on",ue),E.textContent=ue?"★ Turu bitir":"★ Tur",h.hidden=!ue,ue||(B.hidden=!0),R(ue?"tour":"free")},Qe=ue=>A.classList.toggle("pulse",ue);let q="",Ie="",le=-1;return{frame:ue=>{const z=Math.round(ue.speed*3.6);z!==le&&(c.textContent=String(z),le=z),l.textContent=ue.vF<-.4?"GERİ":ue.hb?"EL FRENİ":"";const oe=ue.street||(ue.district?ue.district:"İstanbul"),ye=ue.street&&ue.district?`${ue.district} <small>(semt yaklaşık)</small>`:"yükseklikler yaklaşık";if(oe!==q&&(a.textContent=oe,q=oe),ye!==Ie&&(r.innerHTML=ye,Ie=ye),N+=ue.dt,F-=ue.dt,F<=0)if(F=1/20,K(ue.x,ue.z,ue.camYaw,ue.target),ue.tourOn&&ue.target){const Ne=ue.target.x-ue.x,Pe=ue.target.z-ue.z,rt=Math.hypot(Ne,Pe),Ut=-(Math.atan2(Ne,Pe)-ue.yaw)*180/Math.PI;h.innerHTML=`<span class="g-arrow" style="transform:rotate(${Ut.toFixed(0)}deg)">▲</span><span><b>${ue.target.name}</b><br>${rt>1e3?(rt/1e3).toFixed(1)+" km":Math.round(rt/10)*10+" m"} · ${ue.visited}/${ue.total}</span>`}else ue.tourOn&&(h.innerHTML=`<span><b>Tur bitti</b> · ${ue.visited}/${ue.total}</span>`);de>0&&(de-=ue.dt,de<=0&&g.classList.remove("on")),ie>0&&ie<1e8&&(ie-=ue.dt,ie<=0&&(B.hidden=!0)),X>0&&(X-=ue.dt,X<=0&&(S.hidden=!0)),U>0&&!Y&&(U-=ue.dt,U<=0&&T.classList.add("off"))},openMenu:O,closeMenu:W,toggleMenu:j,setTour:Re,card:ge,toast:Be,flash:be,stuck:Qe}}const uc=30,GE=19,Bu=34,zE=11,HE=2.6,ls=Jt.clamp,dc=(i,e)=>{let t=i-e;for(;t>Math.PI;)t-=Math.PI*2;for(;t<-Math.PI;)t+=Math.PI*2;return t};function VE(i,e,t,n,s,a,r){const o=i.length;if(o<6)return;let c=1/0,l=-1/0;const h=[];for(let m=0;m<o;m+=2){const x=(m+2)%o;let p=i[m],A=i[m+1],E=i[x],_=i[x+1];c=Math.min(c,A,_),l=Math.max(l,A,_),A!==_&&(A>_&&([p,E]=[E,p],[A,_]=[_,A]),h.push({y0:A,y1:_,x:p,dx:(E-p)/(_-A)}))}const u=Math.max(0,Math.floor((c-t)/n)),d=Math.min(a-1,Math.floor((l-t)/n)),f=[];for(let m=u;m<=d;m++){const x=t+(m+.5)*n;f.length=0;for(const p of h)x>=p.y0&&x<p.y1&&f.push(p.x+p.dx*(x-p.y0));f.sort((p,A)=>p-A);for(let p=0;p+1<f.length;p+=2){const A=Math.max(0,Math.floor((f[p]-e)/n)),E=Math.min(s-1,Math.floor((f[p+1]-e)/n));for(let _=A;_<=E;_++)r(m*s+_)}}}async function WE(i,e){if(!i.world||!i.car)return console.warn("game layer skipped: drive handle has no world"),i;const t=i.world,n=i.car,{scene:s,camera:a,H:r,narrow:o}=e,c=new URLSearchParams(location.search),l=2.5,h=t.x0,u=t.z0,d=t.nx,f=t.nz,m=new Uint8Array(d*f);for(const Z of e.buildings)if(!(!Z.h||Z.h<2.5||!Z.p))for(const xe of Z.p){const Ue=xe?.[0];if(!Ue||Ue.length<6)continue;let ze=0,at=0;for(let ut=0;ut<Ue.length;ut+=2)ze+=Ue[ut],at+=Ue[ut+1];const st=Math.min(255,Math.ceil(r(ze/(Ue.length/2),at/(Ue.length/2))+Z.h+.5));VE(Ue,h,u,l,d,f,ut=>{m[ut]<st&&(m[ut]=st)})}const x=(Z,xe)=>{const Ue=Math.floor((Z-h)/l),ze=Math.floor((xe-u)/l);return Ue<0||ze<0||Ue>=d||ze>=f?-1:ze*d+Ue},p=(Z,xe,Ue)=>{const ze=x(Z,Ue);return ze>=0&&m[ze]&&xe<m[ze]+.6?!0:xe<r(Z,Ue)+.7&&t.deckAt(Z,Ue)<.3},A=(Z,xe)=>t.cellAt(Z,xe)===1&&!t.blockedAt(Z+2,xe)&&!t.blockedAt(Z-2,xe)&&!t.blockedAt(Z,xe+2)&&!t.blockedAt(Z,xe-2),E=(Z,xe,Ue,ze=60)=>{let at=0;for(let st=3;st<=ze;st+=3){const ut=Z+Math.sin(Ue)*st,Et=xe+Math.cos(Ue)*st;if(t.cellAt(ut,Et)!==1||t.blockedAt(ut,Et))break;at=st}return at},_=(Z,xe,Ue=220)=>{for(let ze=0;ze<=Ue;ze+=2.5){const at=ze===0?1:Math.max(8,Math.ceil(ze*2*Math.PI/2.5));let st=null;for(let ut=0;ut<at;ut++){const Et=ut/at*Math.PI*2,ot=Z+Math.cos(Et)*ze,Ht=xe+Math.sin(Et)*ze;if(!A(ot,Ht))continue;let Nt=0,D=-1;for(let re=0;re<32;re++){const _e=re/32*Math.PI*2,ve=E(ot,Ht,_e);ve>D&&(D=ve,Nt=_e)}(!st||D>st.run)&&(st={x:ot,z:Ht,run:D,yaw:Nt})}if(st&&st.run>=9)return{x:st.x,z:st.z,yaw:st.yaw,d:ze}}return null};let g=0,B=0,S=0,T=0,U=0,M=0,y=0,L=0,V=0,te=0,Ae=0,ae=0,ce=12,se=!1,J=0,fe=0,$=0,me=!0,Ce=0,Me=cs[0];const ne={};try{const Z=await(await fetch(new URL("data/drive_spawns.json",location.href).href)).json();for(const xe of Z.spawns||[]){const Ue=cs.find(ze=>ze.id===xe.id);Ue&&Number.isFinite(xe.x)&&Number.isFinite(xe.z)&&!t.blockedAt(xe.x,xe.z)&&(Ue.x=xe.x,Ue.z=xe.z,Ue.yaw=xe.yaw,Ue.fromWorld=!0)}}catch{}for(const Z of cs){if(Z.fromWorld&&Z.yaw!=null&&E(Z.x,Z.z,Z.yaw)>=9){ne[Z.id]={x:Z.x,z:Z.z,yaw:Z.yaw,d:0};continue}let xe=_(Z.x,Z.z);xe&&Z.yaw!=null&&Math.hypot(xe.x-Z.x,xe.z-Z.z)<12&&E(xe.x,xe.z,Z.yaw)>=12&&(xe={...xe,yaw:Z.yaw}),ne[Z.id]=xe}n.rotation.order="YXZ";const Ee=n.children.filter(Z=>Z instanceof lt&&Z.position.z>1&&Z.position.y<.4),Te=new Qn({color:"#7a1a12"});for(const Z of[-.6,.6]){const xe=new lt(new Ft(.36,.16,.06),Te);xe.position.set(Z,.82,-1.92),n.add(xe)}const Se=new Set;let Le=0,Fe=0,Ge=!1,je=0,w=0,Q=!1,R=!1;const ee=Z=>Z.key.length===1?Z.key.toLowerCase():Z.key;window.addEventListener("keydown",Z=>{const xe=ee(Z);if(xe==="r"&&!Z.repeat){K();return}if((xe==="m"||xe==="Escape")&&!Z.repeat){oe.toggleMenu();return}if(xe==="t"&&!Z.repeat){me||P(!O.on);return}["w","a","s","d"," ","ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Shift"].includes(xe)&&(Se.add(xe),Z.preventDefault())}),window.addEventListener("keyup",Z=>Se.delete(ee(Z))),window.addEventListener("blur",()=>Se.clear());const Y=()=>{let Z=je,xe=w;(Se.has("w")||Se.has("ArrowUp"))&&(Z+=1),(Se.has("s")||Se.has("ArrowDown"))&&(Z-=1),(Se.has("a")||Se.has("ArrowLeft"))&&(xe-=1),(Se.has("d")||Se.has("ArrowRight"))&&(xe+=1),R=Fe!==0,Z=ls(Z+Le,-1,1),xe=ls(xe+Fe,-1,1);const Ue=Q||Ge||Se.has(" ")||Se.has("Shift");return me||Ce>0?{throttle:0,steer:0,hb:!1}:{throttle:Z,steer:xe,hb:Ue}},O={on:!1,target:null,visited:new Set,t0:0,seen:new Set,done:!1},W=new Bn,j=new Qn({color:"#ffcf33",transparent:!0,opacity:.38,depthWrite:!1,side:zt,fog:!1}),H=new lt(new Xn(3.2,5,90,20,1,!0),j);H.position.y=45;const v=new lt(new Tl(9,.9,8,40),new Qn({color:"#ffb000",fog:!1}));v.rotation.x=Math.PI/2,v.position.y=2,W.add(H,v),W.visible=!1,W.renderOrder=8,s.add(W);const b=Z=>(Z.x-g)**2+(Z.z-B)**2,C=()=>{let Z=null;for(const xe of Wi)!O.visited.has(xe.id)&&b(xe)>xe.r*xe.r&&(!Z||b(xe)<b(Z))&&(Z=xe);if(!Z)for(const xe of Wi)!O.visited.has(xe.id)&&(!Z||b(xe)<b(Z))&&(Z=xe);O.target=Z,Z?(W.position.set(Z.x,Math.max(0,r(Z.x,Z.z)),Z.z),W.visible=!0):W.visible=!1};function P(Z){O.on=Z,O.visited.clear(),O.done=!1,O.t0=performance.now(),Z?C():(O.target=null,W.visible=!1),oe.setTour(Z)}const I=Z=>{const xe=Math.round(Z/1e3);return`${Math.floor(xe/60)}:${String(xe%60).padStart(2,"0")}`},k=()=>{if(O.on&&O.target&&b(O.target)<O.target.r**2){const Z=O.target;O.visited.add(Z.id),C(),O.target?oe.card(Z.name,Z.info,`Sonraki: ${O.target.name}`,null):(O.done=!0,oe.card(Z.name,`${Z.info}<br><b>Tur bitti!</b> ${Wi.length} simge, süre ${I(performance.now()-O.t0)}.`,"Yeniden başla",()=>P(!0)));return}if(!O.on){for(const Z of Wi)if(!O.seen.has(Z.id)&&b(Z)<(Z.r*.8)**2){O.seen.add(Z.id),oe.toast(`<b>${Z.name}</b><br>${Z.info}`);break}}for(const Z of[...O.seen]){const xe=Wi.find(Ue=>Ue.id===Z);b(xe)>(xe.r*2.2)**2&&O.seen.delete(Z)}};function F(Z,xe,Ue){g=Z,B=xe,T=Ue,U=M=0,y=0,L=0,V=0,S=t.surface(g,B),ae=T,se=!1,fe=0,Ce=.25,Le=Fe=0,Ge=!1,je=w=0,Q=!1,t.follow(g,B),Ne="",Pe="",ye=0,typeof rt=="function"&&rt()}function N(Z,xe){const Ue=cs.find(st=>st.id===Z)||cs[0];Me=Ue;const ze=ne[Ue.id]||_(Ue.x,Ue.z,400);ze?F(ze.x,ze.z,ze.yaw):F(Ue.x,Ue.z,Ue.yaw||0),me=!1,oe.closeMenu();const at=hc(g,B);oe.flash(`${Ue.name}${at?" · "+at.name:""} · ${O.on||xe==="tour"?"Simge turu":"Serbest sürüş"}`),xe?P(xe==="tour"):O.on&&P(!0)}function K(){if(me)return;const Z=_(g,B,260);if(Z){const xe=E(Z.x,Z.z,T)>=9?T:Z.yaw;F(Z.x,Z.z,xe)}else N(Me.id);oe.flash("Yola döndün")}const de=(Z,xe,Ue)=>{if(t.blockedAt(Z,xe))return!1;const ze=Math.sin(T)*1.7*Ue,at=Math.cos(T)*1.7*Ue;return!t.blockedAt(Z+ze,xe+at)},ie=(Z,xe)=>{let Ue=0,ze=0;for(let st=0;st<12;st++){const ut=st/12*Math.PI*2,Et=Math.cos(ut),ot=Math.sin(ut);t.blockedAt(Z+Et*2.6,xe+ot*2.6)&&(Ue-=Et,ze-=ot)}const at=Math.hypot(Ue,ze);return at>.001?{x:Ue/at,z:ze/at}:null};function X(Z,xe){const Ue=U*Math.sin(T)+M*Math.cos(T)>=0?1:-1;if(t.blockedAt(g,B)){g+=Z,B+=xe;return}if(de(g+Z,B+xe,Ue)){g+=Z,B+=xe;return}$++;let ze=ie(g+Z,B+xe)||ie(g,B);if(!ze){const Ht=Math.hypot(Z,xe)||1;ze={x:-Z/Ht,z:-xe/Ht}}const at=U*ze.x+M*ze.z;at<0&&(U-=ze.x*at,M-=ze.z*at,-at>7&&(J=Math.min(1,-at/20))),U*=.93,M*=.93;const st=Z*ze.x+xe*ze.z,ut=Z-ze.x*Math.min(0,st),Et=xe-ze.z*Math.min(0,st);if(de(g+ut,B+Et,Ue)?(g+=ut,B+=Et):de(g+ze.x*.3,B+ze.z*.3,Ue)&&(g+=ze.x*.3,B+=ze.z*.3),Math.hypot(U,M)>.5){const Ht=Math.atan2(U,M)+(Ue<0?Math.PI:0);T+=ls(dc(Ht,T),-1,1)*.12}}function pe(Z){const xe=Y(),Ue=xe.steer,ze=R?10:Math.abs(Ue)<Math.abs(y)||Math.sign(Ue)!==Math.sign(y)?7:3.4;y+=ls(Ue-y,-ze*Z,ze*Z);const at=Math.sin(T),st=Math.cos(T),ut=Math.cos(T),Et=-Math.sin(T);let ot=U*at+M*st,Ht=U*ut+M*Et;const Nt=xe.throttle;if(Nt>.05)ot<-.5?ot=Math.min(0,ot+Bu*Nt*Z):ot=Math.min(uc,ot+GE*Nt*(1-.55*Math.max(0,ot)/uc)*Z);else if(Nt<-.05)ot>.5?ot=Math.max(0,ot-Bu*-Nt*Z):ot=Math.max(-9,ot-zE*-Nt*Z);else{const Oe=(2.6+.004*ot*ot)*Z;ot=Math.abs(ot)<=Oe?0:ot-Math.sign(ot)*Oe}if(xe.hb){const Oe=6.5*Z;ot=Math.abs(ot)<=Oe?0:ot-Math.sign(ot)*Oe}L+=((xe.hb?1:0)-L)*Math.min(1,Z*(xe.hb?12:2.2));const D=11*(1-L)+1.6*L;Ht*=Math.exp(-D*Z);const re=.56/(1+Math.abs(ot)/7.5),_e=ot/HE*Math.tan(y*re)*(1+.75*L);V+=(_e-V)*Math.min(1,Z*12),U=at*ot+ut*Ht,M=st*ot+Et*Ht,T-=V*Z;const ve=Math.hypot(U,M),he=Math.max(1,Math.ceil(ve*Z/.7)),ke=g,Ve=B;$=0;for(let Oe=0;Oe<he;Oe++)X(U*Z/he,M*Z/he);const qe=Z>0?Math.hypot(g-ke,B-Ve)/Z:0;Math.abs(Nt)>.3&&qe<1.2?fe+=Z:fe=Math.max(0,fe-Z*2),oe.stuck(fe>1.6);const Ye=t.surface(g,B);if(!se)S=Ye;else{const Oe=Ye-S;S+=Math.abs(Oe)<=2.8?Oe*Math.min(1,Z*10):Math.sign(Oe)*6*Z}const et=ls(-V*ot*.011,-.1,.1);te+=(et-te)*Math.min(1,Z*6);const tt=Nt<-.05&&ot>1?.04:Nt>.05&&ot<uc-1?-.025:0;Ae+=(tt-Ae)*Math.min(1,Z*5),n.position.set(g,S,B),n.rotation.set(Ae,T,te);for(const Oe of Ee)Oe.rotation.y=y*re*1.4;return Te.color.set(Nt<-.05||xe.hb?"#ff3b2f":"#7a1a12"),{vF:ot,sp:ve,moved:qe,hb:xe.hb}}const be=new G(0,.4,-1).normalize(),ge=new G,Be=new G,Re=new G,Qe=new G,q=new G,Ie=new G,le=o?68:56;let we=99,ue=0;function z(Z,xe,Ue){const ze=Ue>3&&xe>0?Math.atan2(U,M):T,at=T+ls(dc(ze,T),-.5,.5)*.5;ae+=dc(at,ae)*Math.min(1,Z*4.5),se||(ae=T);const st=(o?10.5:11.5)+Math.min(6.5,Math.max(0,xe)*.22),ut=(o?4.6:4.9)+Math.min(1.8,Math.max(0,xe)*.05);ge.set(g,S+1.7,B);const Et=Math.cos(ae),ot=-Math.sin(ae);if(p(ge.x,ge.y,ge.z)){let qe=!1;for(let Ye=.8;Ye<=5.6&&!qe;Ye+=.8)for(let et=0;et<16;et++){const tt=et/16*Math.PI*2,Oe=g+Math.cos(tt)*Ye,dt=B+Math.sin(tt)*Ye;if(!p(Oe,ge.y,dt)){ge.set(Oe,ge.y,dt),qe=!0;break}}}const Ht=p(ge.x,ge.y,ge.z),Nt=(qe,Ye)=>{let et=!Ht;for(let tt=.6;tt<=Ye+.8;tt+=.5){const Oe=ge.x+qe.x*tt,dt=ge.y+qe.y*tt,Mt=ge.z+qe.z*tt,Rt=p(Oe,dt,Mt);if(!et){Rt||(et=!0);continue}if(Rt||tt>2.5&&(p(Oe+Et*.6,dt,Mt+ot*.6)||p(Oe-Et*.6,dt,Mt-ot*.6)))return Math.max(0,tt-.9)}return et?Ye:0};let D=0,re=0,_e=-1;for(const[qe,Ye]of[[st,ut],[st*.55,ut+4.5],[st*.3,ut+10],[2,ut+13]]){Be.set(g-Math.sin(ae)*qe,S+Ye,B-Math.cos(ae)*qe);const et=Be.clone().sub(ge),tt=et.length();et.divideScalar(tt);const Oe=Nt(et,tt),dt=Oe/tt;if(dt>_e&&(_e=dt,D=tt,re=Math.max(1.6,Oe),Re.copy(et)),dt>.72)break}we=re,se?re<ce?ce+=(re-ce)*Math.min(1,Z*22):ce+=(re-ce)*Math.min(1,Z*2):ce=re,se?be.lerp(Re,1-Math.exp(-Z*7)).normalize():be.copy(Re);const ve=Math.max(1.6,Math.min(ce,Nt(be,ce)));Qe.copy(ge).addScaledVector(be,ve),ue=1-ve/(D||1),Qe.y=Math.max(Qe.y,t.surface(Qe.x,Qe.z)+.6),J>0&&(Qe.x+=(Math.random()-.5)*J*.5,Qe.y+=(Math.random()-.5)*J*.4,J=Math.max(0,J-Z*3)),a.position.copy(Qe);const he=ls((be.y-.35)/.5,0,1),ke=(7+Math.max(0,xe)*.2)*(1-.75*he);q.set(g+Math.sin(T)*ke,S+1.5-he*1.3,B+Math.cos(T)*ke),a.lookAt(q);const Ve=le+Math.min(9,Math.max(0,xe)*.3);Math.abs(a.fov-Ve)>.05&&(a.fov+=(Ve-a.fov)*Math.min(1,Z*3),a.updateProjectionMatrix()),se=!0,Ie.set(g,S+.8,B)}const oe=OE({narrow:o,starts:cs,stops:Wi,world:t,onStart:(Z,xe)=>N(Z,xe),onReset:()=>K(),onTour:()=>P(!O.on),touch:{set:(Z,xe,Ue)=>{Z!=null&&(Le=Z),xe!=null&&(Fe=xe),Ue!=null&&(Ge=Ue)}},paused:Z=>{me=Z}});let ye=0,Ne="",Pe="";const rt=()=>{const Z=hc(g,B);Z?Ne=Z.name:hc(g,B,45)||(Ne=""),Pe=PE(g,B)};kE(new URL("data/drive_world.json",location.href).href).then(()=>QE()).then(()=>rt());function mt(Z){Z=Math.min(.08,Math.max(0,Z)),Ce>0&&(Ce=Math.max(0,Ce-Z));const xe=pe(Z);z(Z,xe.vF,xe.sp),t.follow(g,B),ye-=Z,ye<=0&&(ye=.25,rt(),k()),oe.frame({x:g,z:B,yaw:T,camYaw:ae,speed:xe.moved,vF:xe.vF,street:Ne,district:Pe,target:O.target,tourOn:O.on,visited:O.visited.size,total:Wi.length,hb:xe.hb,dt:Z})}const Ut=ne.eminonu;Ut&&F(Ut.x,Ut.z,Ut.yaw),mt(0);const bt=c.get("start");bt?N(bt,c.get("mode")==="tour"?"tour":"free"):oe.openMenu();const Pt={start:N,setTour:P,resetToRoad:K,snapRoad:_,startSnap:ne,stops:Wi,starts:cs,state:()=>({x:g,z:B,y:S,yaw:T,vx:U,vz:M,speed:Math.hypot(U,M),steer:y,hb:L,paused:me,stuck:fe,hits:$,camDist:ce,hitD:we,pulled:ue,street:Ne,district:Pe,tour:{on:O.on,target:O.target?.id||null,visited:[...O.visited],done:O.done}}),setInput:(Z,xe,Ue=!1)=>{je=Z,w=xe,Q=Ue},place:F,camHit:p,world:t,sim:(Z,xe=0,Ue=0,ze=!1,at=1/30)=>{const st=[je,w,Q];je=xe,w=Ue,Q=ze;for(let ut=0;ut<Z/at;ut++)mt(at);return[je,w,Q]=st,Pt.state()}};return window.__game=Pt,{...i,update:mt,tick:mt,reset:()=>K(),focus:()=>Ie,state:()=>({x:g,z:B,y:S,speed:Math.hypot(U,M),yaw:T,onRoad:t.cellAt(g,B)===1}),input:()=>{const Z=Y();return{throttle:Z.throttle,steer:Z.steer}},setInput:(Z,xe)=>{je=Z,w=xe}}}function jE(){const i=new URL(import.meta.url),e=i.pathname.split("/").filter(Boolean);return e.pop(),e[e.length-1]==="assets"&&e.pop(),e[e.length-1]==="src"&&e.pop(),e[e.length-1]==="istanbul3d-drive"&&e.pop(),e.push("istanbul3d"),i.pathname=`/${e.join("/")}/`,i.search="",i.hash="",i.href}const Ct=jE();let kn=null;const wn=new URLSearchParams(location.search),_t=Number(wn.get("step")||99),qE=performance.now(),$d={};window.__prof=$d;const Ca=i=>{$d[i]=Math.round(performance.now()-qE)},li=wn.get("look")!=="0",nl=wn.get("roofs")!=="1",Yt=li&&nl&&wn.get("walls")!=="0",tn=Yt&&wn.get("colour")!=="0",Ke=window.innerWidth<600,YE=li&&(wn.get("q")?wn.get("q")==="high":!Ke),fn=new bb({antialias:!0});fn.setPixelRatio(Math.min(window.devicePixelRatio,Ke?1.5:2));fn.setSize(window.innerWidth,window.innerHeight);fn.shadowMap.enabled=_t>=2;fn.shadowMap.type=li&&!Ke?cl:Nu;fn.outputColorSpace=Wt;li&&(fn.toneMapping=wn.get("tm")==="agx"?ul:hl,fn.toneMappingExposure=Number(wn.get("exp")||1));document.getElementById("app").appendChild(fn.domElement);const Je=new xb,XE=new De("#f1dcc4");function Ru(i,e){const t=document.createElement("canvas");t.width=2,t.height=256;const n=t.getContext("2d"),s=n.createLinearGradient(0,0,0,256);s.addColorStop(0,i),s.addColorStop(.5,"#e6b4a3"),s.addColorStop(1,e),n.fillStyle=s,n.fillRect(0,0,2,256);const a=new Bb(t);return a.colorSpace=Wt,a}const ef=new De("#f3ead9");Je.background=ef.clone();Je.fog=new oo(ef.clone(),11e3,28e3);const tf=Yt?Ke?32:22:Ke?50:35,Vs=Math.tan(Jt.degToRad(tf/2))/Math.tan(Jt.degToRad(17.5)),Rn=new yn(tf,window.innerWidth/window.innerHeight,.45,22e3),Ln=new Ox(Rn,fn.domElement);Ln.enableDamping=!0;Ln.dampingFactor=.08;Ln.maxPolarAngle=1.2;Ln.minDistance=60;Ln.maxDistance=Yt?22e3:14e3;Ln.screenSpacePanning=!1;Ln.zoomToCursor=!0;const jn=li?new au("#b0a8b8","#7a6a5c",.95):new au("#fff6e8","#c9b79a",_t>=2?1.6:2.4);Je.add(jn);const un=new Md("#fff0d8",_t>=2?2.2:.9);un.castShadow=_t>=2;un.shadow.mapSize.set(Ke?1024:2048,Ke?1024:2048);const Pr=650;Object.assign(un.shadow.camera,{left:-Pr,right:Pr,top:Pr,bottom:-Pr,near:10,far:6e3});un.shadow.bias=-6e-4;li&&!Ke&&(un.shadow.radius=Yt?4:2,un.shadow.blurSamples=Yt?12:8);un.shadow.normalBias=.6;Je.add(un,un.target);let nf=new G(.5,.6,.4).normalize();const sf={value:0};function il(i){i=Jt.clamp(i,7.5,17.5);const e=Jt.clamp((i-7.2)/11.6,0,1),t=Jt.degToRad(Math.max(2,(Yt?50:38)*Math.sin(Math.PI*e))),n=Jt.degToRad(105+150*e);nf=new G(Math.sin(n)*Math.cos(t),Math.sin(t),-Math.cos(n)*Math.cos(t)).normalize();const s=1-Math.min(1,Math.sin(t)/Math.sin(Jt.degToRad(30)));if(li){un.color.set("#ffcf90").lerp(new De("#ff9a50"),s*.55);const o=Yt?Jt.smoothstep(i,18.2,19.6):0;un.intensity=(Yt?Jt.lerp(tn?5.5:4.7,4.7,o):5.6)-s*1.6,jn.intensity=(Yt?1.45:.95)-s*.2,jn.color.set("#b0a8b8"),jn.groundColor.set("#7a6a5c"),Yt&&(jn.color.lerp(new De("#d0a585"),s*.6),jn.groundColor.lerp(new De("#9a7458"),s*.6),jn.intensity=Jt.lerp(tn?1.12:1.45,1.45,o)+s*.15);const c=Yt?Jt.smoothstep(i,18.2,19.6):0;sf.value=c,XE.set("#ea9b7d");const l=Je.background;Yt&&c>0?(un.intensity*=1-.85*c,jn.intensity*=1-.55*c,jn.color.lerp(new De("#34406a"),c),jn.groundColor.lerp(new De("#1c2236"),c),Je.background=Ru(new De("#b5b1d0").lerp(new De("#0e1430"),c).getStyle(),new De("#ea9b7d").lerp(new De("#2a3358"),c).getStyle())):Je.background=Ru("#b5b1d0","#ea9b7d"),l instanceof Xt&&l.dispose(),Je.fog.color.set("#a49ca2"),Yt&&Je.fog.color.lerp(new De("#e0a07f"),s*.6).lerp(new De("#252c48"),c);const h=document.getElementById("hourtxt");h&&(h.textContent=`${String(Math.floor(i)).padStart(2,"0")}:${String(Math.round(i%1*60)).padStart(2,"0")}`);return}un.color.set("#fff3e0").lerp(new De("#ff9a4d"),s*.85),un.intensity=2.8-s*1,jn.intensity=1.15-s*.35,jn.color.set("#fff6e8").lerp(new De("#ffd2a8"),s*.7);const a=new De("#f3ead9").lerp(new De("#f1c9a3"),s*.6);Je.background.copy(a),Je.fog.color.copy(a);const r=document.getElementById("hourtxt");r&&(r.textContent=`${String(Math.floor(i)).padStart(2,"0")}:${String(Math.round(i%1*60)).padStart(2,"0")}`)}const af=Yt?14:16.25;il(_t>=5?li?af:15.5:14);const eo=1.2;let cn=null,Oa=null,rf=null,qt=null;const to=[],qi=[467.7,1011.1,455.9,1012.6,349.7,1092.8,287.3,1163.4,273.4,1182.5,249.9,1290.8,255.3,1300.3,361.9,1370.5,392.5,1385.8,436,1398,441.8,1394.8,572.2,1142.1,585.8,1064.4,563.1,1039.6,543.3,1027.9],ps=45,Zi=(()=>{let i=1e9,e=1e9,t=-1e9,n=-1e9;for(let s=0;s<qi.length;s+=2)i=Math.min(i,qi[s]),t=Math.max(t,qi[s]),e=Math.min(e,qi[s+1]),n=Math.max(n,qi[s+1]);return[i,e,t,n]})();function sl(i,e){if(i<Zi[0]||i>Zi[2]||e<Zi[1]||e>Zi[3])return!1;const t=qi;let n=!1;for(let s=0,a=t.length-2;s<t.length;a=s,s+=2)t[s+1]>e!=t[a+1]>e&&i<(t[a]-t[s])*(e-t[s+1])/(t[a+1]-t[s+1])+t[s]&&(n=!n);return n}function KE(i,e){const t=qi;let n=1e9;for(let s=0,a=t.length-2;s<t.length;a=s,s+=2){const r=t[a],o=t[a+1],c=t[s]-r,l=t[s+1]-o,h=Math.max(0,Math.min(1,((i-r)*c+(e-o)*l)/(c*c+l*l)));n=Math.min(n,Math.hypot(i-r-c*h,e-o-l*h))}return n}const Yi=[1924.6,-1890.6,1904.9,-1903.4,1855.5,-1885.5,1656.8,-1710.2,1651.5,-1698.3,1653.6,-1676.6,1674.3,-1637.9,1692.3,-1632.5,1825.9,-1673,1966.1,-1738.9,1970.9,-1769.5],Yn=4,$i=(()=>{let i=1e9,e=1e9,t=-1e9,n=-1e9;for(let s=0;s<Yi.length;s+=2)i=Math.min(i,Yi[s]),t=Math.max(t,Yi[s]),e=Math.min(e,Yi[s+1]),n=Math.max(n,Yi[s+1]);return[i,e,t,n]})();function al(i,e){if(i<$i[0]||i>$i[2]||e<$i[1]||e>$i[3])return!1;const t=Yi;let n=!1;for(let s=0,a=t.length-2;s<t.length;a=s,s+=2)t[s+1]>e!=t[a+1]>e&&i<(t[a]-t[s])*(e-t[s+1])/(t[a+1]-t[s+1])+t[s]&&(n=!n);return n}function JE(i,e){const t=Yi;let n=1e9;for(let s=0,a=t.length-2;s<t.length;a=s,s+=2){const r=t[a],o=t[a+1],c=t[s]-r,l=t[s+1]-o,h=Math.max(0,Math.min(1,((i-r)*c+(e-o)*l)/(c*c+l*l)));n=Math.min(n,Math.hypot(i-r-c*h,e-o-l*h))}return n}function Xe(i,e){let t=Ys(i,e);if(cn&&i>Zi[0]-40&&i<Zi[2]+40&&e>Zi[1]-40&&e<Zi[3]+40){if(sl(i,e))return ps;if(t>ps){const s=KE(i,e);if(s<40){const a=1-s/40,r=a*a*(3-2*a);t+=(ps-t)*r}}}if(cn&&i>$i[0]-30&&i<$i[2]+30&&e>$i[1]-30&&e<$i[3]+30){if(al(i,e))return Yn;const s=JE(i,e);if(s<25&&t<Yn){const a=1-s/25,r=a*a*(3-2*a);t+=(Yn-t)*r}else if(s<8&&t>Yn){const a=1-s/8,r=a*a*(3-2*a);t+=(Yn-t)*r*.35}}if(!to.length)return t;let n=t;for(const s of to){const a=Math.hypot(i-s.x,e-s.z);if(a>=s.r+s.b)continue;const r=a<=s.r?1:1-(a-s.r)/s.b,o=r*r*(3-2*r);n=n+(s.h-n)*o}return n}function en(i,e,t,n=25){if(!cn)return;let s=0,a=0;for(let r=0;r<16;r++)for(const o of[0,.5,1])s+=Ys(i+Math.cos(r*.3927)*t*o,e+Math.sin(r*.3927)*t*o),a++;to.push({x:i,z:e,r:t,b:n,h:s/a})}function rl(i,e,t){if(!i)return null;const n=(e-i.x0)/i.step,s=(t-i.z0)/i.step;if(n<0||s<0||n>=i.nx-1||s>=i.nz-1)return null;const a=Math.floor(n),r=Math.floor(s),o=n-a,c=s-r,l=i.nx,h=i.h;return(h[r*l+a]*(1-o)+h[r*l+a+1]*o)*(1-c)+(h[(r+1)*l+a]*(1-o)+h[(r+1)*l+a+1]*o)*c}function Du(i,e){const t=rl(cn,i,e);if(t!=null)return eo*t;const n=rl(rf,i,e);return n==null?0:eo*n}function Ys(i,e){if(Oa&&i>1764){const t=Oa,n=Math.min(i-1764,t.x0+t.step*(t.nx-1)-i,e-t.z0,t.z0+t.step*(t.nz-1)-e);if(n>0){const s=rl(t,i,e);if(s!=null){const a=Math.min(1,n/140),r=a*a*(3-2*a);return r>=1?eo*s:Du(i,e)*(1-r)+eo*s*r}}}return Du(i,e)}new De;class Ti{pos=[];col=[];tex=!1;wa=[];wb=[];wl=0;rl=6;seed=0;base=0;wh=0;st=0;ridge=0;tri(e,t,n,s,a=!1,r,o=0,c=0){if(a){const l=t[0]-e[0];t[1]-e[1];const h=t[2]-e[2],u=n[0]-e[0];n[1]-e[1];const d=n[2]-e[2];if(h*u-l*d<0){const m=t;t=n,n=m,r&&(r=[r[0],r[2],r[1]])}}this.pos.push(...e,...t,...n);for(let l=0;l<3;l++)this.col.push(s.r,s.g,s.b);if(this.tex){const l=[e,t,n],h=o===0?this.rl:this.wl;for(let u=0;u<3;u++){const d=r?r[u]:[l[u][0],l[u][2]];this.wa.push(d[0],d[1],h,this.seed),o===0?this.wb.push(this.wh,r&&r[u].length>2?r[u][2]:-1,0,this.ridge):this.wb.push(this.wh,c,o,this.st)}}}geometry(){const e=new Bt;return e.setAttribute("position",new ht(this.pos,3)),e.setAttribute("color",new ht(this.col,3)),this.tex&&(e.setAttribute("wa",new ht(this.wa,4)),e.setAttribute("wb",new ht(this.wb,4))),e.computeVertexNormals(),e}}function ii(i){let e=0;for(let t=0;t<i.length;t+=2){const n=(t+2)%i.length;e+=i[t]*i[n+1]-i[n]*i[t+1]}return e/2}function ZE(i,e,t,n,s,a){let r=e;const o=ii(r);if(!a&&o>0||a&&o<0){const l=[];for(let h=r.length-2;h>=0;h-=2)l.push(r[h],r[h+1]);r=l}const c=i.st;a&&c>=16&&c<128&&(i.st=32);for(let l=0;l<r.length;l+=2){const h=(l+2)%r.length,u=[r[l],t,r[l+1]],d=[r[h],t,r[h+1]],f=[r[h],n,r[h+1]],m=[r[l],n,r[l+1]];if(i.tex){const x=Math.hypot(r[h]-r[l],r[h+1]-r[l+1]),p=t-i.base,A=n-i.base,E=x>=2.4&&i.wh>=4?1:2;i.tri(u,d,f,s,!1,[[0,p],[x,p],[x,A]],E,x),i.tri(u,f,m,s,!1,[[0,p],[x,A],[0,A]],E,x)}else i.tri(u,d,f,s),i.tri(u,f,m,s)}i.st=c}function ea(i,e,t,n,s=!1){const a=d=>{const f=[];for(let m=0;m<d.length;m+=2)f.push(new He(d[m],d[m+1]));return f},r=a(e[0]),o=e.slice(1).map(a);let c;try{c=mi.triangulateShape(r,o)}catch{return}const l=r.concat(...o),h=d=>s?Xe(d.x,d.y)+t:t,u=(d,f,m,x)=>{if(s&&x<8){const p=d.clone().add(f).multiplyScalar(.5),A=f.clone().add(m).multiplyScalar(.5),E=m.clone().add(d).multiplyScalar(.5),_=Math.max(Math.abs(Xe(p.x,p.y)-(Xe(d.x,d.y)+Xe(f.x,f.y))/2),Math.abs(Xe(A.x,A.y)-(Xe(f.x,f.y)+Xe(m.x,m.y))/2),Math.abs(Xe(E.x,E.y)-(Xe(m.x,m.y)+Xe(d.x,d.y))/2));if(_>1.2&&Math.max(d.distanceTo(f),f.distanceTo(m),m.distanceTo(d))>(_>5?6:35)){u(d,p,E,x+1),u(p,f,A,x+1),u(E,A,m,x+1),u(p,A,E,x+1);return}}i.tri([d.x,h(d),d.y],[f.x,h(f),f.y],[m.x,h(m),m.y],n,!0)};for(const d of c)u(l[d[0]],l[d[1]],l[d[2]],0)}function Vn(i,e,t,n,s,a){for(const r of e)r.forEach((o,c)=>ZE(i,o,t,n,s,c>0)),a&&ea(i,r,n,a)}function $E(i,e){const t=e.pr,n=e.seg||16,s=e.a?e.a[0]:0,a=e.a?e.a[1]:Math.PI*2,r=e.k??2,o=t[0][1],c=Math.max(t[0][0],.3),l=(e.cols||[]).map(m=>new De(m)),h=new De(e.col);r===0?i.rl=e.tx??9:i.wl=e.tx??8,i.base=o,i.wh=t[t.length-1][1]-o,i.st=e.st||128,i.ridge=0;const u=r===2&&e.st?1:r,d=(a-s)*c,f=[0];for(let m=1;m<t.length;m++)f.push(f[m-1]+Math.hypot(t[m][0]-t[m-1][0],t[m][1]-t[m-1][1]));for(let m=0;m<n;m++){const x=s+(a-s)*m/n,p=s+(a-s)*(m+1)/n;for(let A=0;A<t.length-1;A++){const[E,_]=t[A],[g,B]=t[A+1],S=(l[A]||h).clone();e.rib&&m%2&&S.multiplyScalar(e.rib);const T=(se,J,fe)=>[e.x+Math.cos(fe)*se,J,e.z+Math.sin(fe)*se],U=(se,J,fe,$)=>r===0?[J*Math.max(se,E,.5),fe]:[J*c,$-o],M=T(E,_,x),y=T(E,_,p),L=T(g,B,p),V=T(g,B,x),te=U(E,x,f[A],_),Ae=U(E,p,f[A],_),ae=U(g,p,f[A+1],B),ce=U(g,x,f[A+1],B);E>.001&&i.tri(M,y,L,S,!1,[te,Ae,ae],u,d),g>.001&&i.tri(M,L,V,S,!1,[te,ae,ce],u,d)}}}function of(i,e,t,n){const[s,a,r,o,c,l]=e,h=Math.cos(r),u=Math.sin(r),d=-u,f=h,m=(T,U)=>[s+h*T*o/2+d*U*c/2,t,a+u*T*o/2+f*U*c/2],x=T=>[s+h*T*(o-c)/2,t+l,a+u*T*(o-c)/2],p=m(-1,-1),A=m(1,-1),E=m(1,1),_=m(-1,1),g=x(-1),B=x(1),S=n.clone().multiplyScalar(.92);i.tri(p,A,B,n,!0),i.tri(p,B,g,n,!0),i.tri(E,_,g,n,!0),i.tri(E,g,B,n,!0),i.tri(A,E,B,S,!0),i.tri(_,p,g,S,!0)}function ev(i,e,t,n,s){const[a,r,o,c,l,h]=e,u=Math.cos(o),d=Math.sin(o),f=-d,m=u,x=(S,T,U=0)=>[a+u*S*c/2+f*T*l/2,t+U,r+d*S*c/2+m*T*l/2],p=x(-1,-1),A=x(1,-1),E=x(1,1),_=x(-1,1),g=x(-1,0,h),B=x(1,0,h);i.tri(p,A,B,n,!0),i.tri(p,B,g,n,!0),i.tri(E,_,g,n,!0),i.tri(E,g,B,n,!0),i.tri(_,p,g,s),i.tri(A,E,B,s)}function tv(i,e,t,n,s){const[a,r,o,c,l,h]=e,u=Math.cos(o),d=Math.sin(o),f=-d,m=u,x=Math.min(.17*l,2.2),p=Math.min(.75*h+1.4,3.6),A=(g,B,S,T)=>[a+u*g*(c/2-S)+f*B*(l/2-S),t+T,r+d*g*(c/2-S)+m*B*(l/2-S)],E=[A(-1,-1,0,0),A(1,-1,0,0),A(1,1,0,0),A(-1,1,0,0)],_=[A(-1,-1,x,p),A(1,-1,x,p),A(1,1,x,p),A(-1,1,x,p)];for(let g=0;g<4;g++){const B=(g+1)%4;i.tri(E[g],E[B],_[B],n,!0),i.tri(E[g],_[B],_[g],n,!0)}of(i,[a,r,o,c-2*x,l-2*x,Math.max(.6,.12*l)],t+p,s)}function nv(i,e,t,n){const s=n/(t/2),a=e/2,r=t/2;if(i===2)return[[0,s,s*r],[0,-s,s*r]];if(i===1)return[[0,s,s*r],[0,-s,s*r],[s,0,s*a],[-s,0,s*a]];const o=Math.min(.17*t,2.2),c=Math.min(.75*n+1.4,3.6),l=c/o,h=Math.max(.6,.12*t)/(r-o),u=[];for(const[d,f,m]of[[0,1,r],[0,-1,r],[1,0,a],[-1,0,a]])u.push([d*l,f*l,m*l]),u.push([d*h,f*h,c+(m-o)*h]);return u}const Wn=(i,e,t)=>i[0]*e+i[1]*t+i[2];function iv(i,e){const t=[];for(let n=0;n<i.length;n++){const s=i[n],a=i[(n+1)%i.length],r=e(s),o=e(a);if(r<=0&&t.push(s),r<0&&o>0||r>0&&o<0){const c=r/(r-o);t.push([s[0]+(a[0]-s[0])*c,s[1]+(a[1]-s[1])*c])}}return t}const Lu=i=>{let e=0;for(let t=0;t<i.length;t++){const n=i[t],s=i[(t+1)%i.length];e+=n[0]*s[1]-s[0]*n[1]}return e/2};function sv(i,e,t,n,s,a,r,o,c=-1){const[l,h,u,d,f,m]=t,x=Math.cos(u),p=Math.sin(u),A=-p,E=x,_=nv(n,d,f,m);{let T=1e9;for(const U of _)T=Math.min(T,Wn(U,0,0));i.ridge=Math.max(0,T)}const g=(T,U)=>[(T-l)*x+(U-h)*p,(T-l)*A+(U-h)*E],B=(T,U,M)=>[l+x*T+A*U,M,h+p*T+E*U],S=(T,U)=>{let M=1e9;for(const y of _)M=Math.min(M,Wn(y,T,U));return Math.max(0,M)};for(const T of e){const U=T.map(M=>{const y=[];for(let L=0;L<M.length;L+=2)y.push(g(M[L],M[L+1]));return y});_.forEach((M,y)=>{const L=n===3&&y%2===1?r:a,V=i.rl;c>=0&&n===3&&y%2===0&&(i.rl=c);const te=Math.hypot(M[0],M[1]),Ae=te>1e-6?M[0]/te:0,ae=te>1e-6?M[1]/te:1,ce=Math.sqrt(1+te*te),se=Me=>[-Me.x*ae+Me.y*Ae,(Me.x*Ae+Me.y*ae)*ce,Math.max(0,Wn(M,Me.x,Me.y))],J=U.map(Me=>{let ne=Me;return _.forEach((Ee,Te)=>{Te!==y&&ne.length&&(ne=iv(ne,Se=>Wn(M,Se[0],Se[1])-Wn(Ee,Se[0],Se[1])-1e-6))}),ne});if(J[0].length<3||Math.abs(Lu(J[0]))<.05)return;const fe=J[0].map(Me=>new He(Me[0],Me[1])),$=J.slice(1).filter(Me=>Me.length>=3&&Math.abs(Lu(Me))>.05).map(Me=>Me.map(ne=>new He(ne[0],ne[1])));let me;try{me=mi.triangulateShape(fe,$)}catch{return}const Ce=fe.concat(...$);for(const Me of me){const ne=Ce[Me[0]],Ee=Ce[Me[1]],Te=Ce[Me[2]];i.tri(B(ne.x,ne.y,s+Math.max(0,Wn(M,ne.x,ne.y))),B(Ee.x,Ee.y,s+Math.max(0,Wn(M,Ee.x,Ee.y))),B(Te.x,Te.y,s+Math.max(0,Wn(M,Te.x,Te.y))),L,!0,i.tex?[se(ne),se(Ee),se(Te)]:void 0)}i.rl=V});for(const M of U)for(let y=0;y<M.length;y++){const L=M[y],V=M[(y+1)%M.length],te=[0,1];for(let se=0;se<_.length;se++)for(let J=se+1;J<_.length;J++){const fe=Wn(_[se],L[0],L[1])-Wn(_[J],L[0],L[1]),$=Wn(_[se],V[0],V[1])-Wn(_[J],V[0],V[1]);fe*$<0&&te.push(fe/(fe-$))}te.sort((se,J)=>se-J);const Ae=se=>[L[0]+(V[0]-L[0])*se,L[1]+(V[1]-L[1])*se];let ae=te[0],ce=S(L[0],L[1]);for(let se=1;se<te.length;se++){const J=te[se];if(J-ae<1e-4&&se<te.length-1)continue;const fe=Ae(ae),$=Ae(J),me=S($[0],$[1]);if(Math.max(ce,me)>.35){const Ce=B(fe[0],fe[1],s),Me=B($[0],$[1],s),ne=B($[0],$[1],s+me),Ee=B(fe[0],fe[1],s+ce);if(i.tex){const Te=Math.hypot(V[0]-L[0],V[1]-L[1]),Se=ae*Te,Le=J*Te,Fe=s-i.base;me>.02&&i.tri(Ce,Me,ne,o,!1,[[Se,Fe],[Le,Fe],[Le,Fe+me]],2,Te),ce>.02&&i.tri(Ce,ne,Ee,o,!1,[[Se,Fe],[Le,Fe+me],[Se,Fe+ce]],2,Te)}else me>.02&&i.tri(Ce,Me,ne,o),ce>.02&&i.tri(Ce,ne,Ee,o)}ae=J,ce=me}}}return S}function av(i,e,t,n,s,a,r){const o=new Set,c=(h,u)=>`${Math.round(h*10)},${Math.round(u*10)}`;for(const h of t)for(const u of h)for(let d=0;d<u.length;d+=2)o.add(c(u[d],u[d+1]));for(const h of e){const u=A=>{const E=[];for(let _=0;_<A.length;_+=2)E.push(new He(A[_],A[_+1]));return E},d=u(h[0]),f=h.slice(1).map(u);let m;try{m=mi.triangulateShape(d,f)}catch{continue}const x=d.concat(...f),p=A=>n+(o.has(c(A.x,A.y))?s:0);i.ridge=s;for(const A of m){const E=x[A[0]],_=x[A[1]],g=x[A[2]],B=[E.x,p(E),E.y],S=[_.x,p(_),_.y],T=[g.x,p(g),g.y];let U;if(i.tex){const M=S[0]-B[0],y=S[1]-B[1],L=S[2]-B[2],V=T[0]-B[0],te=T[1]-B[1],Ae=T[2]-B[2];let ae=y*Ae-L*te,ce=L*V-M*Ae,se=M*te-y*V;ce<0&&(ae=-ae,ce=-ce,se=-se);const J=Math.hypot(ae,ce,se)||1,fe=-ae,$=-se,me=Math.hypot(fe,$),Ce=me>1e-6?fe/me:0,Me=me>1e-6?$/me:1,ne=J/Math.max(ce,.001);U=[B,S,T].map(Ee=>[-Ee[0]*Me+Ee[2]*Ce,(Ee[0]*Ce+Ee[2]*Me)*ne,Ee[1]-n])}i.tri(B,S,T,a,!0,U)}}const l=i.rl;i.rl=2;for(const h of t)ea(i,h,n+s,r);i.rl=l}let cf=-100;function gn(i,e,t){const n=new Ti,s=new De(t);for(const r of i)ea(n,r,e,s,!!cn);const a=new lt(n.geometry(),new ct({vertexColors:!0,depthWrite:!1}));return a.renderOrder=cf++,a.receiveShadow=_t>=2,a.name="flat",Je.add(a),a}function fc(i){return i.onBeforeCompile=e=>{e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
varying float vBY;`).replace("#include <project_vertex>",`#include <project_vertex>
  
#ifdef USE_INSTANCING
  vBY = (modelMatrix * instanceMatrix * vec4(transformed, 1.0)).y;
#else
  vBY = (modelMatrix * vec4(transformed, 1.0)).y;
#endif`),e.fragmentShader=e.fragmentShader.replace("#include <common>",`#include <common>
varying float vBY;`).replace("#include <color_fragment>",`#include <color_fragment>
  { float k = mod(vBY + 1.2, 3.0); if (k < 0.75) diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.62, 0.36, 0.28), 0.75); }`)},i}function rv(i,e){const t=i.length/2;if(t<6)return i;const n=new Uint8Array(t);n[0]=1;let s=0,a=-1;for(let c=1;c<t;c++){const l=Math.hypot(i[2*c]-i[0],i[2*c+1]-i[1]);l>a&&(a=l,s=c)}n[s]=1;const r=(c,l)=>{const h=i[2*c],u=i[2*c+1],d=i[2*(l%t)],f=i[2*(l%t)+1],m=Math.hypot(d-h,f-u)||1e-6;let x=-1,p=e;for(let A=c+1;A<l;A++){const E=Math.abs((d-h)*(u-i[2*A+1])-(h-i[2*A])*(f-u))/m;E>p&&(p=E,x=A)}x>=0&&(n[x]=1,r(c,x),r(x,l))};r(0,s),r(s,t);const o=[];for(let c=0;c<t;c++)n[c]&&o.push(i[2*c],i[2*c+1]);return o.length>=6?o:i}const lf=[];function vn(i,e,t,n,s=""){const a=document.createElement("div");a.className="lbl "+s,a.textContent=i,document.getElementById("labels").appendChild(a),lf.push({el:a,p:new G(e,t,n)})}const Hs=new G;function ov(){for(const i of lf){Hs.copy(i.p).project(Rn);const e=Hs.z<1&&Math.abs(Hs.x)<1.1&&Math.abs(Hs.y)<1.1;i.el.style.display=e?"block":"none",e&&(i.el.style.left=`${(Hs.x+1)/2*window.innerWidth}px`,i.el.style.top=`${(1-Hs.y)/2*window.innerHeight}px`)}}const cv=(i,e,t)=>{const[n,s]=i.origin,a=Math.cos(s*Math.PI/180)*111320;return[(e-n)*a,-(t-s)*110574]},nt={};function hf(i){const e=nt[i];if(!e)return;Ln.maxPolarAngle=Math.max(1.2,e.pol);const t=new G(e.t[0],Xe(e.t[0],e.t[1])+(e.y||0),e.t[1]),n=new G(Math.sin(e.az)*Math.sin(e.pol),Math.cos(e.pol),Math.cos(e.az)*Math.sin(e.pol)).multiplyScalar(e.d);Ln.target.copy(t),Rn.position.copy(t).add(n),Ln.update()}const Ze=li?{ground:"#8e8b92",pilot:"#908c93",water:"#6fa4b2",parks:"#8aa63e",plazas:"#9c9cac",path:"#a5a2aa",service:"#9d9aa2",minor:"#aaa7ae",major:"#77747c",rail:"#5a5052",tram:"#8c2f2c",walls:["#f2e3b8","#e8d394","#efe6cf","#d9c7a0","#e3d6bf","#ecc9a6","#d8d0bf","#f0dcae"],roofs:["#e0963e","#e8b44c","#c87a48","#a8603e","#d98a3a","#9a5a40","#e6a446","#80808c"],flats:["#c4beb8","#b4b0b0","#ccc4ba","#aca8aa"],trees:["#e6b235","#e08a26","#c95a24","#e8c33f","#7fa03c","#557a30","#3f6a2c"]}:null;Ze&&tn&&Object.assign(Ze,{ground:"#7f746e",pilot:"#81766f",plazas:"#958a80",path:"#9b8f85",service:"#8f847c",minor:"#978c84",major:"#665e5c",parks:"#86a63a",walls:["#f0d9a0","#e6bf74","#f2e4c4","#dcbc8a","#ebc4a8","#e8b48e","#efd690","#f3dcb4","#e2c7a6","#e9a98c"],roofs:["#b85a3c","#a94a34","#c8683e","#9a4a36","#c47458","#cf8a6c","#b9705a","#8e4c3a","#80808c"],flats:["#e4e0d8","#d2cfca","#d8ccb6","#c8c3ba"],trees:["#f0b52a","#e8891f","#d4581f","#b8321e","#efc93a","#8aa83a","#5b8a32","#d97a26","#c9a227"]});function Tn(i,e,t=1){const n=Math.sin(e*12.9898)*43758.5453,s=Math.sin(e*78.233)*12345.6789,a=Math.sin(e*3.7)*9876.54,r=o=>(o-Math.floor(o))*2-1;return i.clone().offsetHSL(r(n)*.012*t,r(s)*.06*t,r(a)*.035*t)}const lv=`
float h1(float n){ return fract(sin(n) * 43758.5453); }
float lumi(vec3 c){ return dot(c, vec3(0.2126, 0.7152, 0.0722)); }
float boxm(float x, float a, float b, float e){ return smoothstep(a - e, a + e, x) - smoothstep(b - e, b + e, x); }
vec3 gEmis = vec3(0.0);
// landmarks (style >= 16): dark arched openings. 16 mosque windows, 32 courtyard arcade, 48 tower arches, 64 small scattered windows, 128 none
vec3 archWin(vec3 col, float u, float v, float wh, float el, float st, float seed){
  if (st >= 128.0 || el < 2.8) return col;
  float px = max(length(vec2(dFdx(u), dFdy(u))), length(vec2(dFdx(v), dFdy(v))));
  bool arc = st >= 32.0 && st < 48.0, tow = st >= 48.0 && st < 64.0, sct = st >= 64.0;
  float bw0 = arc ? 5.2 : tow ? 3.45 : sct ? 4.2 : 5.2;
  float nb = max(1.0, floor(el / bw0 + 0.3)), bw = el / nb;
  float bi = floor(u / bw), x = (fract(u / bw) - 0.5) * bw;
  float hw = arc ? bw * 0.36 : tow ? bw * 0.27 : sct ? 0.42 : 0.7;
  float top = arc ? min(4.8, wh - 1.0) : tow ? min(4.2, wh - 1.0) : sct ? 1.5 : 2.9;
  float rowh = sct ? 5.2 : 6.2;
  float vv = v - (arc ? 0.0 : tow ? 0.9 : 2.2), ri = 0.0, yy = vv;
  if (!(arc || tow)) { ri = floor(vv / rowh); yy = vv - ri * rowh; }
  bool ok = vv >= 0.0 && (arc || tow || (vv - yy + top < wh - 1.2));
  if (sct) ok = ok && h1(bi * 13.1 + ri * 7.7 + seed) < 0.24 && v > 3.0;
  float d = 1e3;
  if (ok) { float ys = top - hw; d = yy < ys ? max(abs(x) - hw, -yy) : length(vec2(x, yy - ys)) - hw; }
  float m = 1.0 - smoothstep(-px * 0.75, px * 0.75, d);
  float fr = (1.0 - smoothstep(0.0, 0.18 + px, d)) - m;
  vec3 c = mix(col, col * 1.1, fr * 0.6);
  c = mix(c, arc ? col * 0.3 : vec3(0.05, 0.055, 0.07), m);
  float frac = arc ? 0.5 : tow ? 0.35 : sct ? 0.02 : 0.08;
  return mix(c, col * (1.0 - 0.7 * frac), smoothstep(0.5, 1.4, px));
}
vec3 facade(vec3 tint){
  float L = floor(vWa.z + 0.5); int li = int(L);
  float kind = floor(vWb.z + 0.5);
  float sc = li >= 8 ? (li == 9 ? 6.0 : 4.5) : kind < 0.5 ? (li >= 6 ? (uCol > 0.5 ? 3.6 : 3.0) : 4.0) : 3.6;               // metres per texture repeat
  vec3 tx = texture(tArr, vec3(vWa.xy / sc, L)).rgb;
  vec3 m = uMean[li]; float ml = max(lumi(m), 1e-3);
  vec3 col = mix(tint * mix(1.0, lumi(tx) / ml, 0.7), tx * (lumi(tint) / ml), uHue[li]);
  if (kind < 0.5 && li >= 6 && li <= 7 && uCol > 0.5) {                           // colour pass: richer tile roofs
    float pr = length(fwidth(vWa.xy));
    col = mix(tint * max(0.0, mix(1.0, lumi(tx) / ml, 1.3)), tx * (lumi(tint) / ml), uHue[li] * 0.6);
    float rows = fract(vWa.y / 0.36);                                  // tile rows still read when the texture blurs
    col *= 1.0 - 0.22 * smoothstep(0.72, 0.98, rows) * (1.0 - smoothstep(0.06, 0.25, pr));
    float e = vWb.y, rh = vWb.w;
    if (e >= 0.0) {
      col *= mix(0.5, 1.0, smoothstep(0.0, 0.3 + pr, e));              // dark eave / overhang line
      if (rh > 0.6) col = mix(col, col * 0.62, smoothstep(rh - 0.32 - pr, rh - 0.12, e)); // ridge cap
    }
  }
  if (kind < 0.5 || kind > 1.5) return col;
  // ---- procedural windows: floors of ~3.2 m, bays of ~3 m, centred on each wall edge ----
  float seed = vWa.w, u = vWa.x, v = vWa.y, wh = vWb.x, el = vWb.y, st = vWb.w;
  if (st >= 16.0) return archWin(col, u, v, wh, el, st, seed);
  bool bal = mod(st, 2.0) >= 1.0, bay = mod(floor(st / 2.0), 2.0) >= 1.0, shop = mod(floor(st / 4.0), 2.0) >= 1.0, res = st >= 8.0;
  float fh = 3.2 * (0.95 + 0.1 * h1(seed * 17.0));
  float bw0 = (res ? 2.8 : 3.0) * (0.9 + 0.2 * h1(seed * 29.0));
  float nb = max(1.0, floor(el / bw0 + 0.3)), bw = el / nb;
  float px = max(length(vec2(dFdx(u), dFdy(u))), length(vec2(dFdx(v), dFdy(v)))); // metres per pixel
  float ex = px / bw * 0.75, ey = px / fh * 0.75;
  float f = floor(v / fh), fy = fract(v / fh), bx = fract(u / bw), bi = floor(u / bw);
  float ww = res ? (h1(seed * 43.0) < 0.4 ? 0.58 + 0.08 * h1(seed * 41.0) : 0.40 + 0.06 * h1(seed * 41.0)) : 0.36 + 0.16 * h1(seed * 41.0);
  float wy0 = 0.26, wy1 = res ? 0.86 : 0.74 + 0.1 * h1(seed * 53.0);
  float wfrac = ww * (wy1 - wy0);
  vec3 avg = col * (1.0 - 0.55 * wfrac - (bal ? 0.12 : 0.0));
  float fade = smoothstep(0.38, 1.1, px);
  if (wh < 4.0 || bw < 1.6) return col;
  vec3 c = col;
  bool under = (f + 1.0) * fh < wh - 0.35;                             // the whole floor fits under the cornice
  if (f >= 1.0 && under) {
    if (bay && mod(bi, 3.0) == 1.0) {                                  // bay window: a lighter bulging column with shaded sides
      c *= 1.06; c *= 1.0 - 0.35 * (boxm(bx, -0.02, 0.06, ex) + boxm(bx, 0.94, 1.02, ex));
    }
    if (fy < 0.05) c *= 0.80;                                          // floor ledge line
    else if (fy < 0.09) c = mix(c, vec3(0.80, 0.78, 0.74), 0.35);
    float fw = res ? 0.07 : 0.05;
    float frame = boxm(bx, 0.5 - ww / 2.0 - fw, 0.5 + ww / 2.0 + fw, ex) * boxm(fy, wy0 - fw, wy1 + fw * 0.7, ey);
    float glass = boxm(bx, 0.5 - ww / 2.0, 0.5 + ww / 2.0, ex) * boxm(fy, wy0, wy1, ey);
    float sill = boxm(bx, 0.5 - ww / 2.0 - 0.09, 0.5 + ww / 2.0 + 0.09, ex) * boxm(fy, wy0 - 0.075, wy0 - 0.03, ey);
    float k = h1(bi * 7.1 + f * 3.7 + seed);
    vec3 gl = mix(vec3(0.045, 0.055, 0.07), vec3(0.16, 0.18, 0.22), smoothstep(wy0, wy1, fy) * 0.7) * (0.75 + 0.5 * k);
    c = mix(c, res ? vec3(0.86, 0.86, 0.84) : vec3(0.78, 0.76, 0.72), max(frame - glass, sill) * 0.85);
    c = mix(c, gl, glass);
    if (uNight > 0.01 && k < 0.3) gEmis += vec3(1.0, 0.55, 0.22) * 0.9 * glass * uNight * (1.0 - fade * 0.6);
    if (res && h1(bi * 5.3 + f * 1.9 + seed * 3.0) < 0.12) {          // striped awning over some windows
      float aw = boxm(bx, 0.5 - ww / 2.0 - 0.06, 0.5 + ww / 2.0 + 0.06, ex) * boxm(fy, wy1 - 0.2, wy1 + 0.04, ey);
      float stp = step(0.5, fract(u * 2.5));
      c = mix(c, mix(vec3(0.75, 0.73, 0.68), vec3(0.42, 0.40, 0.36), stp), aw);
    }
    if (bal && (h1(seed * 71.0) < 0.5 || mod(bi, 2.0) == 0.0)) {     // balcony: dark railing band + slab edge
      float bwid = res ? 0.86 : 0.7;
      float rail = boxm(bx, 0.5 - bwid / 2.0, 0.5 + bwid / 2.0, ex) * boxm(fy, 0.07, 0.36, ey);
      c = mix(c, vec3(0.035, 0.035, 0.04), rail * 0.85);               // flat dark band (no bars: they alias)
      c = mix(c, vec3(0.70, 0.69, 0.66), boxm(bx, 0.5 - bwid / 2.0 - 0.02, 0.5 + bwid / 2.0 + 0.02, ex) * boxm(fy, 0.0, 0.07, ey) * 0.7);
    }
  } else if (f < 1.0 && wh >= 6.0) {                                    // ground floor: shopfronts or a darker base with doors
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
  if (wh >= 5.0) {                                                     // cornice: light band with a shadow line under it
    c = mix(c, col * 1.12, boxm(v, wh - 0.5, wh + 2.0, px * 0.75));
    c = mix(c, col * 0.62, boxm(v, wh - 0.68, wh - 0.5, px * 0.75));
  }
  if (fade > 0.0) gEmis += vec3(1.0, 0.55, 0.22) * 0.25 * wfrac * uNight * fade; // far away: a soft average glow
  return mix(c, avg, fade);
}`;async function hv(){try{const i=Ct,e=await(await fetch(`${i}tex/tex.json`)).json(),t=new Kn().setTranscoderPath(`${i}basis/`).detectSupport(fn),n=await t.loadAsync(`${i}tex/walls_${Ke?512:1024}.ktx2`);n.wrapS=n.wrapT=Gn,n.anisotropy=Ke?2:4,n.colorSpace=Wt,n.needsUpdate=!0;let s=0;for(const o of n.mipmaps)s+=o.data.byteLength;t.dispose();const a=[0,.55,0,.45,.4,.55,.3,.15,.35,.1,.45],r=new ct({vertexColors:!0,side:zt});return r.onBeforeCompile=o=>{o.uniforms.tArr={value:n},o.uniforms.uMean={value:e.means.map(c=>new G(c[0],c[1],c[2]))},o.uniforms.uHue={value:a},o.uniforms.uNight=sf,o.uniforms.uCol={value:tn?1:0},o.vertexShader=`attribute vec4 wa;
attribute vec4 wb;
varying vec4 vWa;
varying vec4 vWb;
`+o.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
vWa = wa; vWb = wb;`),o.fragmentShader=`precision highp sampler2DArray;
uniform sampler2DArray tArr;
uniform vec3 uMean[11];
uniform float uHue[11];
uniform float uNight;
uniform float uCol;
varying vec4 vWa;
varying vec4 vWb;
`+lv+`
`+o.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
diffuseColor.rgb = facade(diffuseColor.rgb);`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
totalEmissiveRadiance += gEmis;`)},{mat:r,mb:s/1048576}}catch(i){return console.warn("facade textures failed, falling back to plain walls",i),null}}async function uv(){const i=await(await fetch(`${Ct}data/scene.json`)).json();let e=null;try{e=await(await fetch(`${Ct}data/kapalicarsi.json`)).json()}catch{}const t=(w,Q)=>{if(!e)return!1;const R=e.outline;let ee=!1;for(let Y=0,O=R.length-2;Y<R.length;O=Y,Y+=2)R[Y+1]>Q!=R[O+1]>Q&&w<(R[O]-R[Y])*(Q-R[Y+1])/(R[O+1]-R[Y+1])+R[Y]&&(ee=!ee);return ee};if(e){const w=i.buildings.length;i.buildings=i.buildings.filter(Q=>{const R=Q.p[0]?.[0];if(!R)return!0;let ee=0,Y=0;for(let O=0;O<R.length;O+=2)ee+=R[O],Y+=R[O+1];return!t(ee/(R.length/2),Y/(R.length/2))}),window.__kcFiltered=w-i.buildings.length}try{const Q=(await(await fetch(`${Ct}data/bridge_filter.json`)).json()).centroids,R=i.buildings.length;i.buildings=i.buildings.filter(ee=>{const Y=ee.p[0]?.[0];if(!Y)return!0;let O=0,W=0;for(let j=0;j<Y.length;j+=2)O+=Y[j],W+=Y[j+1];return O/=Y.length/2,W/=Y.length/2,!Q.some(j=>Math.hypot(j[0]-O,j[1]-W)<.5)}),window.__bridgeFiltered=R-i.buildings.length}catch{}try{const Q=(await(await fetch(`${Ct}data/taksim_building_filter.json`)).json()).centroids,R=i.buildings.length;i.buildings=i.buildings.filter(ee=>{const Y=ee.p[0]?.[0];if(!Y)return!0;let O=0,W=0;for(let j=0;j<Y.length;j+=2)O+=Y[j],W+=Y[j+1];return O/=Y.length/2,W/=Y.length/2,!Q.some(j=>Math.hypot(j[0]-O,j[1]-W)<3)}),window.__taksimBldFiltered=R-i.buildings.length}catch{}try{const Q=(await(await fetch(`${Ct}data/underground_filter.json`)).json()).centroids,R=i.buildings.length;i.buildings=i.buildings.filter(ee=>{const Y=ee.p[0]?.[0];if(!Y)return!0;let O=0,W=0;for(let j=0;j<Y.length;j+=2)O+=Y[j],W+=Y[j+1];return O/=Y.length/2,W/=Y.length/2,!Q.some(j=>Math.abs(j[0]-O)<.5&&Math.abs(j[1]-W)<.5)}),window.__ugFiltered=R-i.buildings.length}catch{}try{const w=await(await fetch(`${Ct}data/height_fix.json`)).json();let Q=0;for(const R of i.buildings){const ee=R.p[0]?.[0];if(!ee)continue;let Y=0,O=0;for(let W=0;W<ee.length;W+=2)Y+=ee[W],O+=ee[W+1];Y/=ee.length/2,O/=ee.length/2;for(const W of w.fix)Math.abs(W.c[0]-Y)<.5&&Math.abs(W.c[1]-O)<.5&&(R.h=W.h,W.k!=null&&(R.k=W.k,R.hip=null),Q++)}window.__heightFix=Q}catch{}try{const w=await(await fetch(`${Ct}data/dolmabahce_fix.json`)).json(),Q=w.filter_centroids||[],R=i.buildings.length;i.buildings=i.buildings.filter(ee=>{const Y=ee.p[0]?.[0];if(!Y)return!0;let O=0,W=0;for(let j=0;j<Y.length;j+=2)O+=Y[j],W+=Y[j+1];return O/=Y.length/2,W/=Y.length/2,!Q.some(j=>Math.hypot(j[0]-O,j[1]-W)<8)});for(const ee of w.buildings)i.buildings.push(ee);window.__dolmaFix={removed:R-(i.buildings.length-w.buildings.length),added:w.buildings.length,dome:(w.dome||[]).length},window.__dolmaDome=w.dome||[],window.__dolmaRings=w.buildings.map(ee=>ee.p[0][0])}catch(w){console.warn("dolmabahce_fix skipped",w)}try{qt=await(await fetch(`${Ct}data/wm14_besiktas.json`)).json();for(const w of qt.buildings)i.buildings.push(w);for(const w of qt.parks||[])i.parks.push(w);for(const w of qt.plazas||[])i.plazas.push(w);for(const w of qt.trees||[])i.trees.push(w);window.__wm14Bjk={b:qt.buildings.length,t:(qt.trees||[]).length}}catch{qt=null}try{const w=await(await fetch(`${Ct}data/wm11_building_filter.json`)).json(),Q=i.buildings.length,R=w.detail||w.centroids.map(O=>({c:O,mode:"all"})),ee=new Set,Y=i.buildings.map((O,W)=>{const j=O.p[0]?.[0];if(!j)return null;let H=0,v=0;for(let b=0;b<j.length;b+=2)H+=j[b],v+=j[b+1];return{i:W,x:H/(j.length/2),z:v/(j.length/2),h:O.h,a:Math.abs(ii(j))}});for(const O of R){const W=Y.filter(j=>j&&Math.abs(j.x-O.c[0])<.6&&Math.abs(j.z-O.c[1])<.6);W.length&&(O.mode==="one"&&W.length>=2?(W.sort((j,H)=>H.a-j.a||H.h-j.h||j.i-H.i),W.slice(1).forEach(j=>ee.add(j.i))):O.mode!=="one"&&W.forEach(j=>ee.add(j.i)))}i.buildings=i.buildings.filter((O,W)=>!ee.has(W)),window.__wm11BldFiltered=Q-i.buildings.length}catch{}const n=await AE();n&&pE(i,n),Ca("scene");const s=Yt?await hv():null;if(s&&(window.__texMB=Math.round(s.mb*100)/100),_t>=7&&wn.get("terrain")!=="0"){cn=await(await fetch(`${Ct}data/terrain.json`)).json();try{rf=await(await fetch(`${Ct}data/terrain_far.json`)).json()}catch{}try{Oa=await(await fetch(`${Ct}data/wm14_terrain_bjk.json`)).json()}catch{}document.getElementById("cr-dem").textContent="Kıyı+arazi/coast+terrain: Copernicus DEM GLO-30 (© DLR, Airbus DS)"}if(cn){const w={ayasofya:100,sultanahmet:95,yenicami:70,rustempasa:30,galata:14,nusretiye:32,ayatriada:28,stantoine:60,suleymaniye:120};for(const Q of i.landmarks){const R=w[Q.id];if(!R)continue;const ee=Q.model?Q.model.x:Q.label[0],Y=Q.model?Q.model.z:Q.label[1];en(ee,Y,R,30)}for(const[Q,R,ee]of[[179,1526,38],[209,1648,22],[190,1686,16]])en(Q,R,ee,20);for(const[Q,R]of[[-302.3,1943.1],[-326.7,1972.1],[-349.2,2000.8],[-260.4,1783.6]])en(Q,R,7,10);if(e){const Q=e.outline;let R=0,ee=0;for(let Y=0;Y<Q.length;Y+=2)R+=Q[Y],ee+=Q[Y+1];en(R/(Q.length/2),ee/(Q.length/2),150,40)}en(504,-1493,125,35),en(739,-1482,55,35),en(621,-1426,45,35),en(797,-1625,70,35),en(652,-1671,90,35),en(1097.9,-1594.9,75.7,25),en(1106,-1845.1,44.9,25),en(778,-1446.1,56.7,25),en(810.8,-1502.9,40.3,25),en(944.9,-1542.1,39.3,25),en(753.5,-1786.2,57.2,25),en(793.6,-1931.2,49.6,25),en(768.7,-1253.4,50.1,25),en(794.7,-1202.2,38.8,25),en(1294.3,-1762.9,90,25),window.__H=Xe,window.__pads=to.length}const[a,r,o,c]=i.bounds_m,l=(a+o)/2,h=(r+c)/2,u=(w,Q)=>cv(i,w,Q),d=u(28.9784,41.0066),f=u(28.9741,41.0256),m=u(28.9858,41.0372);nt.overview=Ke?{t:[l+100,h+250],d:12500,pol:.55,az:0}:{t:[l+150,h+250],d:10500,pol:.72,az:-.3},nt.overview_east=Ke?{t:[0,250],d:8800,pol:.55,az:0}:{t:[150,250],d:8200,pol:.72,az:-.3},nt.sultanahmet={t:[d[0],d[1]],d:Ke?820:700,pol:.95,az:Ke?-.8:.8},nt.galata={t:[f[0],f[1]],d:Ke?420:360,pol:1,az:.35};const x=u(28.965,41.0168);if(nt.suleymaniye={t:[x[0],x[1]],d:Ke?900:760,pol:.95,az:.25},nt.yc_top={t:[-574.7,732.1],d:Ke?400:250,pol:.12,az:.7245},nt.gk_eye={t:[-402,-236],y:40,d:Ke?190:150,pol:1.2,az:.4},nt.gk_apple={t:[-402,-236],y:30,d:Ke?300:230,pol:.72,az:.4},nt.gk_ground={t:[-402,-236],y:36,d:Ke?330:270,pol:1.4,az:-.25},nt.gm_beyazit={t:[-1300,1300],y:20,d:Ke?1300:1e3,pol:1,az:-.3},nt.br_galata={t:[-600,250],y:8,d:Ke?900:700,pol:1.15,az:.9},nt.ch_pera={t:[-150,-250],y:15,d:Ke?420:330,pol:1,az:.2},nt.fatih={t:[-2900,600],y:20,d:Ke?1500:1150,pol:.95,az:-.2},nt.edirnekapi={t:[-4e3,-320],y:60,d:Ke?1e3:780,pol:1,az:-.9},nt.gate_edk={t:[-3771,-862],y:30,d:Ke?420:340,pol:1.05,az:-.9},nt.gate_tpk={t:[-4426,205],y:30,d:Ke?420:340,pol:1.05,az:-.9},nt.tekfur={t:[-3260,-1170],y:25,d:Ke?420:340,pol:1.05,az:-.9},nt.seawall={t:[-1800,2650],y:10,d:Ke?1500:1200,pol:1,az:.4},nt.kc_top={t:[-905,1386],y:40,d:Ke?900:520,pol:.02,az:-Math.PI/2},nt.kc_top_n={t:[-905,1386],y:40,d:Ke?900:520,pol:.02,az:0},nt.kc_obl={t:[-860,1400],y:40,d:Ke?700:520,pol:.8,az:-Math.PI/2-.25},nt.asia={t:[2600,600],y:20,d:Ke?3200:2600,pol:.95,az:-.9},nt.yedikule={t:[-4700,3380],y:15,d:Ke?800:620,pol:1,az:-.7},nt.surlar={t:[-4600,1400],y:15,d:Ke?1700:1300,pol:1.05,az:-1.25},nt.gm_taksim={t:[425,-1490],y:20,d:Ke?520:400,pol:1.05,az:.4},nt.eminonu={t:[-725,700],d:Ke?820:700,pol:.95,az:Ke?.6:.35},nt.taksim={t:[m[0],m[1]],d:Ke?700:600,pol:.95,az:3.4},nt.match={t:[d[0]+150,d[1]-60],d:Ke?560:470,pol:.82,az:.55},nt.roofs={t:[f[0]-120,f[1]+60],d:Ke?260:220,pol:.85,az:.6},Yt){nt.sultanahmet.pol=.82,nt.galata.pol=.85,nt.match.pol=.74,nt.roofs.pol=.78,nt.suleymaniye.pol=.82,nt.taksim.pol=.82,nt.overview.pol=Ke?.82:.88;for(const w of Object.values(nt))w.d/=Vs}hf("overview");const p=(w,Q)=>w>1764&&w<3640&&Q>-3440&&Q<-1300,A=w=>{w.onBeforeCompile=Q=>{Q.vertexShader=`varying vec3 vWp;
`+Q.vertexShader.replace("#include <project_vertex>",`#include <project_vertex>
 vWp = (modelMatrix * vec4(transformed, 1.0)).xyz;`),Q.fragmentShader=`varying vec3 vWp;
`+Q.fragmentShader.replace("#include <clipping_planes_fragment>",`#include <clipping_planes_fragment>
 if (vWp.x > 1764.0 && vWp.x < 3640.0 && vWp.z > -3440.0 && vWp.z < -1300.0) discard;`)},w.customProgramCacheKey=()=>"bjk-hide-flat"},E=new ct({color:Ze?tn?Ze.water:Ze.ground:_t>=2?"#ece6da":"#e9e4da"});A(E);const _=new lt(new aa(4e4,4e4),E);_.material.depthWrite=!1,_.renderOrder=-200,_.name="ground",_.rotation.x=-Math.PI/2,_.receiveShadow=_t>=2,Je.add(_);const g=new lt(new aa(o-a-8,c-r-8),new ct({color:Ze?Ze.pilot:_t>=2?"#e9e1d0":"#e4ddd0"}));if(g.material.depthWrite=!1,g.renderOrder=-150,g.rotation.x=-Math.PI/2,g.position.set(l,.02,h),g.receiveShadow=_t>=2,cn){const w=cn,Q=[],R=[];for(let O=0;O<w.nz;O++)for(let W=0;W<w.nx;W++)Q.push(w.x0+W*w.step,Xe(w.x0+W*w.step,w.z0+O*w.step)+.02,w.z0+O*w.step);for(let O=0;O<w.nz-1;O++)for(let W=0;W<w.nx-1;W++){const j=O*w.nx+W,H=j+1,v=j+w.nx,b=v+1,C=w.x0+W*w.step,P=w.z0+O*w.step;C<a||C+w.step>o||P<r||P+w.step>c||R.push(j,v,H,H,v,b)}const ee=new Bt;ee.setAttribute("position",new ht(Q,3)),ee.setIndex(R),ee.computeVertexNormals();const Y=new lt(ee,new ct({color:Ze?Ze.pilot:"#e9e1d0",depthWrite:!1}));if(Y.renderOrder=-150,Y.receiveShadow=!0,Y.name="terrain",g.name="pilot",g.renderOrder=-160,Je.add(Y),Je.add(g),Oa){const O=Oa,W=[],j=[];for(let b=0;b<O.nz;b++)for(let C=0;C<O.nx;C++){const P=O.x0+C*O.step,I=O.z0+b*O.step;W.push(P,Xe(P,I)+.02,I)}for(let b=0;b<O.nz-1;b++)for(let C=0;C<O.nx-1;C++){const P=O.x0+C*O.step,I=O.z0+b*O.step;if(Xe(P,I)<.8&&Xe(P+O.step,I+O.step)<.8)continue;const k=b*O.nx+C,F=k+1,N=k+O.nx,K=N+1;j.push(k,N,F,F,N,K)}const H=new Bt;H.setAttribute("position",new ht(W,3)),H.setIndex(j),H.computeVertexNormals();const v=new lt(H,new ct({color:Ze?Ze.pilot:"#e9e1d0",depthWrite:!0}));v.renderOrder=-155,v.receiveShadow=!0,v.name="terrain_bjk",Je.add(v)}}else Je.add(g);const B=w=>{const Q=w[0];let R=0,ee=0;for(let Y=0;Y<Q.length;Y+=2)R+=Q[Y],ee+=Q[Y+1];return Math.abs(ii(Q))<3e4&&Ys(R/(Q.length/2),ee/(Q.length/2))>1.5},S=i.water.filter(w=>!B(w)),T=i.water.filter(B);window.__pools=T.length;{const w=new Ti,Q=new De(Ze?Ze.water:"#8ec3d8"),R=(O,W)=>p(O,W)&&Xe(O,W)>1.5,ee=O=>{const W=[];for(let j=0;j<O.length;j+=2)W.push(new He(O[j],O[j+1]));return W};for(const O of S){const W=ee(O[0]),j=O.slice(1).map(ee);let H;try{H=mi.triangulateShape(W,j)}catch{continue}const v=W.concat(...j);for(const b of H){const C=v[b[0]],P=v[b[1]],I=v[b[2]],k=(C.x+P.x+I.x)/3,F=(C.y+P.y+I.y)/3;R(k,F)||R(C.x,C.y)||R(P.x,P.y)||R(I.x,I.y)||w.tri([C.x,-1.1,C.y],[P.x,-1.1,P.y],[I.x,-1.1,I.y],Q,!0)}}const Y=new lt(w.geometry(),new ct({vertexColors:!0,depthWrite:!1}));Y.renderOrder=cf++,Y.receiveShadow=_t>=2,Y.name="sea",Je.add(Y)}gn(T,.05,"#6fa8bb");{const w=[],Q=[],R=new De("#a39a8c"),ee=new De("#d6cebf"),Y=(H,v,b,C,P)=>{w.push(...H,...v,...b,...H,...b,...C);for(let I=0;I<6;I++)Q.push(P.r,P.g,P.b)},O=(H,v)=>Math.abs(H-a)<2||Math.abs(H-o)<2||Math.abs(v-r)<2||Math.abs(v-c)<2||Math.abs(Math.abs(H)-1764)<2||Math.abs(Math.abs(v)-2709)<2;for(const H of i.water)H.forEach((v,b)=>{const C=T.includes(H),P=(ii(v)>0?1:-1)*(b===0?1:-1);for(let I=0;I<v.length;I+=2){const k=(I+2)%v.length,F=v[I],N=v[I+1],K=v[k],de=v[k+1],ie=K-F,X=de-N,pe=Math.hypot(ie,X),be=(F+K)/2,ge=(N+de)/2;if(pe<.5||O(F,N)&&O(K,de)||be<a+3||be>o-3||ge<r+3||ge>c-3)continue;const Be=Math.max(0,Xe(F,N))+(C?.45:.34),Re=Math.max(0,Xe(K,de))+(C?.45:.34),Qe=C?Be-.5:-1.1,q=C?Re-.5:-1.1,Ie=C?.6:1,le=X/pe*P*1.6,we=-ie/pe*P*1.6;Y([F,Qe,N],[K,q,de],[K,Re,de],[F,Be,N],R),Y([F,Be,N],[K,Re,de],[K+le*Ie,Re,de+we*Ie],[F+le*Ie,Be,N+we*Ie],ee),C&&Y([F+le*Ie,Be,N+we*Ie],[K+le*Ie,Re,de+we*Ie],[K+le*Ie,Re-.6,de+we*Ie],[F+le*Ie,Be-.6,N+we*Ie],R)}});const W=new Bt;W.setAttribute("position",new ht(w,3)),W.setAttribute("color",new ht(Q,3)),W.computeVertexNormals();const j=new lt(W,new ct({vertexColors:!0,side:zt}));j.receiveShadow=_t>=2,j.name="quay",Je.add(j)}try{const w=await(await fetch(`${Ct}data/context.json`)).json();if(qt){const I=new Set(qt.ctx_skip||[]);w.polys=w.polys.filter((k,F)=>!I.has(F)).concat(qt.ctx_add||[])}const[Q,R,ee,Y]=w.bbox_m,O=w.fade,W=new De(Ze?Ze.pilot:"#e4ddd0"),j=new De(Ze?tn?Ze.water:Ze.ground:"#e9e4da"),H=new De,v=[],b=[];for(const I of w.polys){const k=de=>{const ie=[];for(let X=0;X<de.length;X+=2)ie.push(new He(de[X],de[X+1]));return ie},F=k(I[0]),N=I.slice(1).map(k),K=F.concat(...N);for(const de of mi.triangulateShape(F,N))for(const ie of[de[0],de[2],de[1]]){const X=K[ie],pe=Math.max(Q-X.x,0,X.x-ee),be=Math.max(R-X.y,0,X.y-Y),Be=Math.min(1,Math.max(0,2.2*Math.hypot(pe,be)/O));H.copy(W).lerp(j,.3+.7*Be*Be*(3-2*Be));const Re=(p(X.x,X.y)?Xe(X.x,X.y):0)+.01;v.push(X.x,Re,X.y),b.push(H.r,H.g,H.b)}}const C=new Bt;C.setAttribute("position",new ht(v,3)),C.setAttribute("color",new ht(b,3)),C.computeVertexNormals();const P=new lt(C,new ct({vertexColors:!0,depthWrite:!1}));if(P.renderOrder=-170,P.name="ctx",P.receiveShadow=_t>=2,Je.add(P),qt&&qt.land){const I=new Ti,k=new De(Ze?Ze.pilot:"#e4ddd0");for(const N of qt.land)ea(I,N,.01,k,!!cn);const F=new lt(I.geometry(),new ct({vertexColors:!0,depthWrite:!1}));F.renderOrder=-170,F.name="wm14_bjk_land",F.receiveShadow=_t>=2,Je.add(F)}}catch(w){console.warn("context land skipped",w)}try{const w=(await(await fetch(`${Ct}data/far.json`)).json()).blocks,Q=new Set((qt&&qt.far_skip||[]).map(v=>`${v[0]},${v[1]}`)),R=new Ti,ee=new De("#cdbfae"),Y=new De("#b9876a"),O=new De(Ze?tn?Ze.water:Ze.ground:"#e9e4da"),W=new De,j=new De;for(const v of w){const b=v.p;if(Ke&&Math.abs(ii(b))<2500)continue;let C=0,P=0;for(let K=0;K<b.length;K+=2)C+=b[K],P+=b[K+1];if(C/=b.length/2,P/=b.length/2,Q.has(`${b[0]},${b[1]}`)||C>1764&&C<3460&&P>-3260&&P<-1480)continue;const I=Math.max(a-C,0,C-o),k=Math.max(r-P,0,P-c),F=Math.min(1,Math.hypot(I,k)/4200);W.copy(ee).lerp(O,.15+.75*F),j.copy(Y).lerp(O,.15+.75*F);const N=Math.max(0,Xe(C,P));Vn(R,[[b]],N,N+v.h*(1-.4*F),W,j)}if(qt)for(const v of qt.far_clip||[]){const b=v.rings[0];let C=0,P=0,I=0;for(let F=0;F<b.length;F+=2)C+=b[F],P+=b[F+1],I++;const k=Math.max(0,Xe(C/I,P/I));Vn(R,[v.rings],k,k+v.h,ee,Y)}const H=new lt(R.geometry(),new ct({vertexColors:!0,side:zt}));H.receiveShadow=_t>=2,H.name="far",Je.add(H),window.__far=w.length}catch(w){console.warn("far context skipped",w)}try{const w=(await(await fetch(`${Ct}data/mosques.json`)).json()).mosques;if(qt)for(const I of qt.mosques||[])w.push(I);const Q=w.reduce((I,k)=>I+k.m.length,0),R=new $e,ee=new Vt,Y=new G,O=new G,W=new ct({color:"#8e939b"}),j=new ct({color:"#e4dccd"}),H=new Qt(new As(1,12,4,0,Math.PI*2,0,Math.PI/2),W,w.length),v=new Qt(new Xn(1,1,1,14,1,!0),j,w.length),b=new Qt(new Xn(.85,1,1,8),j,Math.max(1,Q)),C=new Qt(new ds(1,1,8),W,Math.max(1,Q));let P=0;w.forEach((I,k)=>{const F=Xe(I.x,I.z),N=.35*I.r;v.setMatrixAt(k,R.compose(Y.set(I.x,F+I.y+N/2,I.z),ee,O.set(I.r*1.02,N,I.r*1.02))),H.setMatrixAt(k,R.compose(Y.set(I.x,F+I.y+N,I.z),ee,O.set(I.r,I.r*.92,I.r)));for(const[K,de,ie,X]of I.m){const pe=Xe(K,de),be=ie*.17;b.setMatrixAt(P,R.compose(Y.set(K,pe-.8+(ie-be+.8)/2,de),ee,O.set(X,ie-be+.8,X))),C.setMatrixAt(P,R.compose(Y.set(K,pe+ie-be/2,de),ee,O.set(X*1.05,be,X*1.05))),P++}}),b.count=C.count=P;for(const I of[H,v,b,C])I.castShadow=I.receiveShadow=_t>=2,I.frustumCulled=!1,Je.add(I)}catch(w){console.warn("mosque placeholders skipped",w)}try{const w=await(await fetch(`${Ct}data/bridges.json`)).json(),Q=[],R=[],ee=new De("#77706c"),Y=new De("#c8bfb2"),O=new De("#7d766f"),W=(K,de,ie,X)=>{Q.push(...K,...de,...ie);for(let pe=0;pe<3;pe++)R.push(X.r,X.g,X.b)},j=K=>{const de=ie=>{const X=Jt.clamp(ie,0,1);return X*X*(3-2*X)};return K>=530?.45+6.05*de((588-K)/52):K<=236?.45+6.05*de((K-186)/50):null};for(const K of w.bridges)for(const de of K.strips){const ie=de.p,X=[];for(let q=0;q<ie.length;q+=2)X.push(new He(ie[q],ie[q+1]));mi.isClockWise(X)&&X.reverse();let pe=0,be=0;for(const q of X)pe+=q.x,be+=q.y;const ge=Math.max(0,Xe(pe/X.length,be/X.length));if(ge>2&&de.y<3&&K.id!=="w280961352")continue;const Be=q=>{const Ie=K.id==="w280961352"?j(q):null;return Ie??de.y+ge},Re=Be(be),Qe=Re-Math.max(1.4,de.t);for(const q of mi.triangulateShape(X,[])){const[Ie,le,we]=q.map(ue=>X[ue]);W([Ie.x,Be(Ie.y),Ie.y],[we.x,Be(we.y),we.y],[le.x,Be(le.y),le.y],ee),W([Ie.x,Be(Ie.y)-1.6,Ie.y],[le.x,Be(le.y)-1.6,le.y],[we.x,Be(we.y)-1.6,we.y],O)}for(let q=0;q<X.length;q++){const Ie=X[q],le=X[(q+1)%X.length],we=Be(Ie.y),ue=Be(le.y);W([Ie.x,we-1.6,Ie.y],[le.x,ue-1.6,le.y],[le.x,ue,le.y],Y),W([Ie.x,we-1.6,Ie.y],[le.x,ue,le.y],[Ie.x,we,Ie.y],Y)}}const H=new Bt;H.setAttribute("position",new ht(Q,3)),H.setAttribute("color",new ht(R,3)),H.computeVertexNormals();const v=new lt(H,new ct({vertexColors:!0}));v.castShadow=v.receiveShadow=_t>=2,Je.add(v);const b={pier:"#b3aa9d",tower:"#ecebe8",cable:"#d9dadc",canopy:"#cfd3d6"},C=new Ft(1,1,1),P=new $e,I=new Vt,k=new Zn,F=new G,N=new G;for(const K of Object.keys(b)){const de=w.boxes.filter(X=>X[7]===K&&!(K==="pier"&&Xe(X[0],X[2])>.3));if(!de.length)continue;const ie=new Qt(C,new ct({color:b[K]}),de.length);de.forEach((X,pe)=>{const[be,ge,Be,Re,Qe,q,Ie]=X,le=K==="cable";k.set(0,Ie,le?-X[8]:0,"YZX"),I.setFromEuler(k);const we=Math.max(0,Xe(be,Be));ie.setMatrixAt(pe,P.compose(F.set(be,(le?ge:ge+Qe/2)+we,Be),I,N.set(Re,Qe,q)))}),ie.castShadow=K!=="cable"&&_t>=2,ie.receiveShadow=_t>=2,Je.add(ie)}}catch(w){console.warn("bridges skipped",w)}try{const w=(await(await fetch(`${Ct}data/churches.json`)).json()).churches,Q=new $e,R=new Vt,ee=new G,Y=new G,O=new G(0,1,0),W=new ct({color:"#ddd3c2"}),j=new ct({color:"#8b9097"}),H=new ct({color:"#9c5a4d"}),v=new ct({color:"#6f6a68"}),b=(F,N,K,de)=>{if(!K.length)return;const ie=new Qt(F,N,K.length);K.forEach((X,pe)=>{de(X),ie.setMatrixAt(pe,Q.compose(ee,R,Y))}),ie.castShadow=ie.receiveShadow=_t>=2,Je.add(ie)},C=w.filter(F=>F.k!=="west"),P=w.filter(F=>F.k==="arm"),I=w.filter(F=>F.k==="orth"),k=w.filter(F=>F.k==="west");b(new Xn(1,1,1,10),W,C,F=>{R.identity(),ee.set(F.x,Xe(F.x,F.z)+F.y+F.r*.6,F.z),Y.set(F.r,F.r*1.2,F.r)}),b(new As(1,10,5,0,Math.PI*2,0,Math.PI/2),j,I,F=>{R.identity(),ee.set(F.x,Xe(F.x,F.z)+F.y+F.r*1.2,F.z),Y.set(F.r*1.05,F.r*.95,F.r*1.05)}),b(new ds(1,1,10),v,P,F=>{R.identity(),ee.set(F.x,Xe(F.x,F.z)+F.y+F.r*1.2+F.r*.6,F.z),Y.set(F.r*1.1,F.r*1.2,F.r*1.1)}),b(new Ft(1,1,1),W,k,F=>{R.setFromAxisAngle(O,F.ry);const N=F.h-F.w*1.1;ee.set(F.x,Xe(F.x,F.z)+N/2,F.z),Y.set(F.w,N,F.w)}),b(new ds(Math.SQRT1_2,1,4).rotateY(Math.PI/4),H,k,F=>{R.setFromAxisAngle(O,F.ry),ee.set(F.x,Xe(F.x,F.z)+F.h-F.w*.55,F.z),Y.set(F.w*1.08,F.w*1.1,F.w*1.08)})}catch(w){console.warn("church placeholders skipped",w)}try{const w=await(await fetch(`${Ct}data/walls.json`)).json(),Q={wall:"#c9b99a",outer:"#c2b293",scarp:"#b3a487",tower:"#bfae8e",otower:"#c7b796"},R=new Ft(1,1,1),ee=new $e,Y=new Vt,O=new G(0,1,0),W=new G,j=new G;gn(w.moat,.115,"#8a9d5a");for(const I of Object.keys(Q)){const k=w.boxes.filter(K=>K[7]===I);if(!k.length)continue;const F=[];for(const K of k){const[de,ie,X,pe,be,ge,Be]=K,Re=Math.cos(Be),Qe=-Math.sin(Be);let q=0;for(let le=0;le<=6;le++){const we=(le/6-.5)*pe;q=Math.max(q,Math.abs(Xe(de+Re*we,X+Qe*we)-Xe(de,X)))}const Ie=Math.min(24,Math.max(1,Math.ceil(q/.6),Math.ceil(pe/40)));for(let le=0;le<Ie;le++){const we=((le+.5)/Ie-.5)*pe,ue=de+Re*we,z=X+Qe*we,oe=Xe(ue-Re*pe/Ie/2,z-Qe*pe/Ie/2),ye=Xe(ue+Re*pe/Ie/2,z+Qe*pe/Ie/2),Ne=Xe(ue,z),Pe=Math.min(oe,ye,Ne)-2.5;F.push([ue,Pe,z,pe/Ie+.3,Ne+ie+be-Pe,ge,Be])}}const N=new Qt(R,fc(new ct({color:Q[I]})),F.length);N.name="aud:wall",F.forEach((K,de)=>{const[ie,X,pe,be,ge,Be,Re]=K;Y.setFromAxisAngle(O,Re),N.setMatrixAt(de,ee.compose(W.set(ie,X+ge/2,pe),Y,j.set(be,ge,Be)))}),N.castShadow=N.receiveShadow=_t>=2,Je.add(N)}const H=new Ti,v=new De("#bfae8e"),b=new De("#e6e0d4");for(const I of w.tpolys){let k=-1e9,F=1e9;for(let N=0;N<I.p.length;N+=2){const K=Xe(I.p[N],I.p[N+1]);k=Math.max(k,K),F=Math.min(F,K)}Vn(H,[[I.p]],F-2.5,k+I.h,I.marble?b:v,(I.marble?b:v).clone().multiplyScalar(.92))}const C=new lt(H.geometry(),new ct({vertexColors:!0,side:zt}));C.castShadow=C.receiveShadow=_t>=2,Je.add(C);const P=new Qt(new Xn(1,1.06,1,12),new ct({color:"#c6b596"}),w.ytowers.length);w.ytowers.forEach(([I,k,F,N],K)=>{Y.identity();let de=1e9;for(let X=0;X<8;X++)de=Math.min(de,Xe(I+Math.cos(X*.785)*F,k+Math.sin(X*.785)*F));de-=1;const ie=Xe(I,k)+N-de;P.setMatrixAt(K,ee.compose(W.set(I,de+ie/2,k),Y,j.set(F,ie,F)))}),P.name="aud:ytower",P.castShadow=P.receiveShadow=_t>=2,Je.add(P),vn("Kara Surları",-4600,30,1200,"district"),vn("Yedikule",-4700,34,3380)}catch(w){console.warn("walls skipped",w)}try{const w=[],Q=new $e,R=new Vt,ee=new G(0,1,0),Y=new G,O=new G,W=(X,pe,be,ge,Be,Re,Qe,q,Ie=0)=>{const le=X.index?X.toNonIndexed():X.clone();le.deleteAttribute("uv"),le.applyMatrix4(Q.compose(Y.set(be,ge,Be),R.setFromAxisAngle(ee,Ie),O.set(Re,Qe,q)));const we=new De(pe),ue=le.attributes.position.count,z=new Float32Array(ue*3);for(let oe=0;oe<ue;oe++)z.set([we.r,we.g,we.b],oe*3);le.setAttribute("color",new Gt(z,3)),w.push(le)},j=new Ft(1,1,1),H=new Xn(1,1,1,10),v=new ds(1,1,10),b=new ds(.71,1,4,1).rotateY(Math.PI/4),C=new As(1,12,4,0,Math.PI*2,0,Math.PI/2),P="#d8cdbb",I="#8e939b",k="#b9876a",F="#c9b99a",N=(X,pe,be,ge,Be,Re=0,Qe=P,q=0)=>W(j,Qe,X,q+Be/2,pe,be,Be,ge,Re),K=(X,pe,be,ge,Be,Re=0)=>{const Qe=Xe(X,pe);N(X,pe,be*2.6,be*2.6,be*1.1,Re,P,Qe),W(C,I,X,Qe+be*1.1,pe,be,be*.9,be);for(let q=0;q<ge;q++){const Ie=Re+Math.PI/4+q*Math.PI/2,le=X+Math.cos(Ie)*be*1.9,we=pe-Math.sin(Ie)*be*1.9;W(H,P,le,Qe+Be*.44,we,1.3,Be*.88,1.3),W(v,I,le,Qe+Be*.94,we,1.4,Be*.12,1.4)}},de=await(await fetch(`${Ct}data/walls.json`)).json();for(const[X,pe]of[[-3771.2,-862.5],[-4426,205]]){let be=null,ge=1e9;for(const ue of de.boxes)if(ue[7]==="wall"){const z=Math.hypot(ue[0]-X,ue[2]-pe);z<ge&&(ge=z,be=ue)}if(!be||ge>200)continue;const Be=be[6],Re=Math.cos(Be),Qe=-Math.sin(Be),q=(X-be[0])*Re+(pe-be[2])*Qe,Ie=be[0]+Re*q,le=be[2]+Qe*q,we=Xe(Ie,le);for(const ue of[-1,1]){const z=Ie+Re*ue*11,oe=le+Qe*ue*11;N(z,oe,11,13,20,Be,F,Xe(z,oe)),W(b,"#a89a82",z,Xe(z,oe)+21.5,oe,11,3,13,Be)}N(Ie,le,11.5,6,4,Be,F,we+9),N(Ie,le,11,6.6,1.2,Be,k,we+8.4)}{const be=Xe(-3250.4,-1161);N(-3250.4,-1161,28,13,17,.9,"#c4a488",be),N(-3250.4,-1161,28.4,13.4,.8,.9,k,be+6),N(-3250.4,-1161,28.4,13.4,.8,.9,k,be+11.5),vn("Tekfur Sarayı",-3250.4,be+26,-1161)}{const[X,pe]=[3099.2,1736],be=200,ge=265;N(X,pe-ge/2,be,24,20),N(X,pe+ge/2,be,24,20),N(X-be/2,pe,24,ge,20),N(X+be/2,pe,24,ge,20);for(const Be of[-1,1])for(const Re of[-1,1])N(X+Be*be/2,pe+Re*ge/2,16,16,30),W(b,I,X+Be*be/2,33,pe+Re*ge/2,16,6,16);vn("Selimiye Kışlası",X,50,pe)}K(3132.8,1537,10,2,45),K(3107.6,-376,9,2,45),K(3023.6,-143.7,12,2,50);{const[X,pe]=[2108.2,265.4];N(X,pe,22,14,6),W(H,P,X,15,pe,4.5,18,4.5),W(v,I,X,24+2.5,pe,5,5,5),W(H,P,X,30,pe,1,2,1),vn("Kız Kulesi",X,40,pe)}{const[X,pe]=[3393.2,2941.3],be=.55;N(X,pe,95,36,24,be,"#cdb79a");for(const ge of[-1,1]){const Be=X+Math.cos(be)*ge*44,Re=pe-Math.sin(be)*ge*44;N(Be,Re,14,14,30,be,"#cdb79a"),W(v,"#6f6a66",Be,34,Re,9,8,9)}vn("Haydarpaşa Garı",X,48,pe)}vn("Dolmabahçe",1812,Xe(1812,-1722)+40,-1722);for(const[X,pe,be]of[["Selimiye Camii",3132.8,1537],["Mihrimah Sultan",3107.6,-376],["Yeni Valide",3023.6,-143.7]])(!Ke||X!=="Yeni Valide")&&vn(X,pe,58,be);const ie=la(w);if(w.forEach(X=>X.dispose()),ie){ie.computeVertexNormals();const X=new lt(ie,fc(new ct({vertexColors:!0})));X.castShadow=X.receiveShadow=_t>=2,X.name="wm5ph",Je.add(X),window.__wm5ph=ie.attributes.position.count/3}}catch(w){console.warn("wm5 placeholders skipped",w)}if(e)try{const w=lE(e,Xe,Ke);Je.add(w.grp);for(const Q of w.detail)Ra.push(Q);window.__kc=w.tris,vn("Kapalıçarşı",-900,Xe(-900,1390)+30,1390,"district")}catch(w){console.warn("kapalicarsi skipped",w)}if(_t>=3){let w={};try{w=await(await fetch(`${Ct}data/landuse.json`)).json()}catch{}gn(w.railway||[],.08,"#857a70"),gn(w.construction||[],.085,"#a8957e"),gn(w.religious||[],.09,"#cdbfa8"),gn(i.parks,.12,Ze?Ze.parks:"#bcd59a"),gn(w.cemetery||[],.125,"#7f9469"),gn(w.pitch||[],.13,"#5f9e4f"),gn(i.plazas,.14,Ze?Ze.plazas:"#e8dcc6");try{const R=await(await fetch(`${Ct}data/taksim_plaza.json`)).json();gn(R.plazas||[],.145,Ze?Ze.plazas:"#e8dcc6")}catch{}const Q=i.roads;gn(Q.path||[],.16,Ze?Ze.path:"#f4ecdd"),gn(Q.service||[],.18,Ze?Ze.service:"#f7f2ea"),gn(Q.minor||[],.2,Ze?Ze.minor:"#fbf8f2"),gn(Q.major||[],.22,Ze?Ze.major:"#f2d9a6"),gn(Q.rail||[],.26,Ze?Ze.rail:"#8d8a86"),gn(Q.tram||[],.28,Ze?Ze.tram:"#b2473e")}Ca("before_buildings");const U=i.palette,M=(Ze?Ze.walls:U.walls).map(w=>new De(w)),y=(Ze?Ze.roofs:U.roofs).map(w=>new De(w)),L=(Ze?Ze.flats:U.flats).map(w=>new De(w));let V=0;const te=[],Ae=[],ae=w=>{const Q=Math.sin(w*91.17)*43758.5453;return Q-Math.floor(Q)},ce=(w,Q,R,ee,Y)=>{const[O,W,j,H,v]=w.hip,b=Math.cos(j),C=Math.sin(j),P=-C,I=b,k=w.p[0][0],F=(K,de)=>{let ie=!1;for(let X=0,pe=k.length-2;X<k.length;pe=X,X+=2){const be=k[X],ge=k[X+1],Be=k[pe],Re=k[pe+1];ge>de!=Re>de&&K<(Be-be)*(de-ge)/(Re-ge)+be&&(ie=!ie)}return ie},N=Ke?.08:.18;if(ae(Q*3.1)<N&&H>6){const K=(ae(Q*5.3)-.5)*H*.6,de=(ae(Q*7.7)<.5?-1:1)*v*.12,ie=O+b*K+P*de,X=W+C*K+I*de;F(ie,X)&&te.push([ie,ee+Y(K,de),X,j])}if(!Ke&&(R===2||R===3)&&v>7&&H>8&&ae(Q*11.3)<.16){const K=ae(Q*13.9)<.5?-1:1,de=H>16?2:1;for(let ie=0;ie<de;ie++){const X=de===1?0:(ie===0?-.22:.22)*H,pe=K*(v/2-Math.min(2.4,v*.28)),be=O+b*X+P*pe,ge=W+C*X+I*pe;F(be,ge)&&Ae.push([be,ee+Y(X,pe),ge,j+(K>0?0:Math.PI)])}}},se=["#7d828c","#6f7a80","#8a8a90","#5f6b70"].map(w=>new De(w)),J=new De("#e6ddcf"),fe=new De("#d6ccbb"),$=[],me=(w,Q,R)=>{let ee=!1;for(let Y=0,O=w.length-2;Y<w.length;O=Y,Y+=2){const W=w[Y],j=w[Y+1],H=w[O],v=w[O+1];j>R!=v>R&&Q<(H-W)*(R-j)/(v-j)+W&&(ee=!ee)}return ee},Ce=(w,Q,R)=>{const ee=w.p[0]?.[0];if(!ee)return;const Y=Math.abs(ii(ee));if(Y<60||ae(Q*15.1)>(Ke?.4:.7))return;let O=0,W=0;for(let C=0;C<ee.length;C+=2)O+=ee[C],W+=ee[C+1];const j=O/(ee.length/2),H=W/(ee.length/2),v=Y>300&&!Ke?2:1,b=Math.sqrt(Y)*.22;for(let C=0;C<v;C++){const P=ae(Q*3.7+C)*6.283,I=j+Math.cos(P)*b*ae(Q+C*5.1),k=H+Math.sin(P)*b*ae(Q*2.9+C);me(ee,I,k)&&$.push([I,R,k,C===0&&ae(Q*19.7)<.05?2:ae(Q*7.3+C)<.55?0:1,P])}},Me=new Map,ne=(tn?["#f0e2c4","#ddd6cc","#f3ede0","#e8d3a4","#ecd8bc","#d6cfc4","#efcfb4","#d4dccc","#f0d890","#b8553a","#a84c36"]:["#efe8d8","#dedcd6","#f3f0ea","#e6d8b8","#e9e2d2","#d4d3cf","#ecd9c4","#d6dcd4","#efe0a8","#b5583f","#a9533e"]).map(w=>new De(w)),Ee=["#8c7c6a","#a3907a","#7a6e62","#c4aa82","#d6bd94","#b59b7a","#c86a40","#9a8672"].map(w=>new De(w)),Te=[.11,.11,.11,.1,.1,.08,.06,.05,.04,.12,.12],Se=new Map,Le=wn.get("lod")==="0"?1e9:Ke?1800:2400;for(const w of i.buildings){let Q=Me.get(w.c);Q||(Q=new Ti,Q.tex=!!s,Me.set(w.c,Q));{let H=Se.get(w.c);H||(H=new Ti,Se.set(w.c,H));const v=w.p[0]?.[0],b=v?Math.abs(ii(v)):0;if(v&&(b>30||w.h>12)){let C=1e9,P=0,I=0;if(cn)for(let ie=0;ie<v.length;ie+=2)C=Math.min(C,Xe(v[ie],v[ie+1])),P+=v[ie],I+=v[ie+1];const k=cn?Xe(P/(v.length/2),I/(v.length/2)):0,F=w.m>0?k+w.m:cn?C-.5:0,N=M[w.w%M.length],K=w.hip?y[w.r%(y.length-1)]:L[w.r%L.length];let de=w.p[0];if(w.hip&&v.length>8){const[ie,X,pe,be,ge]=w.hip,Be=Math.cos(pe)*be/2,Re=Math.sin(pe)*be/2,Qe=-Math.sin(pe)*ge/2,q=Math.cos(pe)*ge/2;de=[[ie-Be-Qe,X-Re-q,ie+Be-Qe,X+Re-q,ie+Be+Qe,X+Re+q,ie-Be+Qe,X-Re+q]],ii(de[0])*ii(v)<0&&(de[0]=[de[0][6],de[0][7],de[0][4],de[0][5],de[0][2],de[0][3],de[0][0],de[0][1]])}else v.length>10&&(de=[rv(v,Ke?3:2)]);Vn(H,[de],F,k+w.h+(w.hip?1.5:0),N,K)}}let R=0,ee=0;if(cn&&w.p[0]?.[0]){const H=w.p[0][0];let v=0,b=0,C=0;ee=1e9;for(let P=0;P<H.length;P+=2)v+=H[P],b+=H[P+1],C++,ee=Math.min(ee,Xe(H[P],H[P+1]));R=Xe(v/C,b/C),ee-=.5}const Y=w.m>0?R+w.m:ee,O=R+w.h;if(_t<2){Vn(Q,w.p,Y,O,J,fe);continue}V++;let W=Ze?Tn(M[(w.w+V)%M.length],V,.7):M[w.w],j=Ze?w.k??(w.hip?1:0):w.hip?1:0;if(s){const H=w.p[0]?.[0]||[0,0];let v=0,b=0;for(let X=0;X<H.length;X+=2)v+=H[X],b+=H[X+1];const C=v/(H.length/2),P=b/(H.length/2),k=i.origin[1]-P/110574<41.0195,F=Math.hypot(C-d[0],P-d[1])<900,N=j===4||w.h>=19||j===0&&w.h>=12,K=ae(V*2.3);Q.wl=N?2:k?K<.06&&w.h<12?1:K<.12?4:K<.17?5:0:K<.45?3:K<.6?5:0,Q.rl=w.g?7:6,Q.base=Y,Q.wh=O-Y,Q.seed=Math.floor(ae(V*1.7)*997)/10;const de=Math.hypot(C-f[0],P-f[1])<750,ie=!F&&w.h>=11&&Q.wl!==4&&Q.wl!==5;if(Q.st=(ie?8:0)+(ie&&ae(V*4.1)<.55?1:0)+(ie&&ae(V*5.9)<.3?2:0)+(w.h>=6&&ae(V*6.7)<(ie?.6:k?.3:.5)?4:0),ie){let X=ae(V*8.3),pe=0;for(;pe<ne.length-1&&X>Te[pe];)X-=Te[pe],pe++;W=Tn(ne[pe],V,.5),(tn?w.h>=18&&!k&&!de&&j!==0&&ae(V*9.7)<.7:w.h>=14&&j!==0&&ae(V*9.7)<.7)&&(j=4,Q.rl=2)}if(tn&&!k&&!N&&j>=1&&j<=5){const X=ae(V*17.3);X<.12?(w.g=1,Q.rl=7):(w.g=0,Q.rl=6,X<.32&&(j=4,Q.rl=2))}if(tn&&de&&!N){const X=ae(V*10.9);W=Tn(Ee[Math.floor(ae(V*11.3)*Ee.length)],V,.5),X<.55&&(Q.wl=ae(V*13.1)<.6?3:4)}}if(w.col&&(W=new De(w.col),s&&(Q.wl=0,Q.st=0,Q.rl=2)),w.hip&&j>=1&&j<=3){let H=Ze?Tn(y[(w.r+(V%3===0?1:0))%(y.length-1)],V+7):y[w.r%y.length];if(tn&&!w.g&&(H=Tn(y[(w.r+V)%(y.length-1)],V+7,1.4),ae(V*12.7)<.14&&H.lerp(new De("#9a8a80"),.3)),Ze&&w.g&&(H=Tn(se[V%se.length],V+11,.6)),Ze&&nl){Vn(Q,w.p,Y,O,W,null);const v=j===3&&!w.g?Tn(se[(V>>2)%se.length],V+5,.6):H,b=sv(Q,w.p,w.hip,j,O,v,j===3?H.clone().multiplyScalar(.9):H,W,w.g?-1:7);ce(w,V,j,O,b)}else Vn(Q,w.p,Y,O,W,L[0]),j===2?ev(Q,w.hip,O,H,W):j===3?tv(Q,w.hip,O,Ze&&!w.g?Tn(se[(V>>2)%se.length],V+5,.6):H,H.clone().multiplyScalar(.9)):of(Q,w.hip,O,H)}else if(Ze&&nl&&j===5&&w.bd&&w.in){Vn(Q,w.p,Y,O,W,null);const H=w.g?Tn(se[V%se.length],V+11,.6):Tn(y[w.r%(y.length-1)],V+7);av(Q,w.bd,w.in,O,w.rh||2,H,Tn(L[w.r%L.length],V+3))}else if(Ze&&j===4){Vn(Q,w.p,Y,O+.9,W,null),Q.rl=2;for(const H of w.p)ea(Q,H,O,Tn(L[w.r%L.length],V+3));tn&&Ce(w,V,O)}else Q.rl=2,tn&&w.h>=9&&Ce(w,V,O),Vn(Q,w.p,Y,O,W,Ze?Tn(L[w.r%L.length],V+3):L[w.r%L.length])}const Fe=new ct({vertexColors:!0,side:Ze?zt:ci}),Ge=new ct({vertexColors:!0,side:Ze?zt:ci});if(te.length||Ae.length){const w=new $e,Q=new Vt,R=new G(1,1,1),ee=new G(0,1,0),Y=new G,O=new Ft(.8,2.2,.8).translate(0,.6,0),W=new Qt(O,new ct({color:"#b98068"}),te.length);te.forEach((N,K)=>{Q.setFromAxisAngle(ee,-N[3]),w.compose(Y.set(N[0],N[1],N[2]),Q,R),W.setMatrixAt(K,w)}),W.castShadow=W.receiveShadow=!0,W.computeBoundingSphere(),Je.add(W),Ra.push(W);const j=new Ft(1.7,1.6,2).translate(0,.5,.3),H=new Bt,v=1.05,b=1.3,C=2.1,P=-.8,I=1.45;H.setAttribute("position",new ht([-v,b,P,-v,b,I,0,C,I,-v,b,P,0,C,I,0,C,P,v,b,I,v,b,P,0,C,P,v,b,I,0,C,P,0,C,I,-v,b,I,v,b,I,0,C,I].map(N=>N),3)),H.computeVertexNormals();const k=new Qt(j,new ct({color:"#efe1bd"}),Ae.length),F=new Qt(H,new ct({color:"#c8703c",side:zt}),Ae.length);Ae.forEach((N,K)=>{Q.setFromAxisAngle(ee,-N[3]),w.compose(Y.set(N[0],N[1]-.4,N[2]),Q,R),k.setMatrixAt(K,w),F.setMatrixAt(K,w)});for(const N of[k,F])N.castShadow=N.receiveShadow=!0,N.computeBoundingSphere(),Je.add(N),Ra.push(N);window.__bits={chimneys:te.length,dormers:Ae.length}}if($.length){const w=new $e,Q=new Vt,R=new G(1,1,1),ee=new G(0,1,0),Y=new G,O=[new Ft(1.7,1.4,1.7).translate(0,.7,0),new Ft(2.6,2.3,2.2).translate(0,1.15,0),new As(2.6,12,5,0,Math.PI*2,0,Math.PI/2)],W=["#a9a8a6","#cfc4b4","#8794a4"];for(let j=0;j<3;j++){const H=$.filter(b=>b[3]===j);if(!H.length)continue;const v=new Qt(O[j],new ct({color:W[j]}),H.length);H.forEach((b,C)=>{Q.setFromAxisAngle(ee,b[4]),w.compose(Y.set(b[0],b[1],b[2]),Q,R),v.setMatrixAt(C,w)}),v.castShadow=v.receiveShadow=!0,v.computeBoundingSphere(),Je.add(v),Ra.push(v)}window.__boxes=$.length}for(const[w,Q]of Me){const R=Q.geometry();R.computeBoundingSphere();const ee=R.boundingSphere.center.clone(),Y=new lt(R,s?s.mat:Ge);Y.castShadow=Y.receiveShadow=_t>=2;const O=Se.get(w);if(!O||!O.pos.length||Le>1e8){Je.add(Y);continue}R.translate(-ee.x,-ee.y,-ee.z);const W=O.geometry(),j=Pu(ee.x,ee.z,a,r);j.bld.push(W.clone()),W.translate(-ee.x,-ee.y,-ee.z);const H=new lt(W,Fe);H.receiveShadow=_t>=2;const v=new Kr;v.position.copy(ee),v.addLevel(Y,0),v.addLevel(H,Le),Je.add(v),j.members.push(v)}uf=Le;for(const w of Ka.values())if(w.bld.length>1){const Q=la(w.bld);if(w.bld.forEach(ee=>ee.dispose()),w.bld=[],!Q)continue;Q.computeBoundingSphere(),w.c.copy(Q.boundingSphere.center),w.r=Q.boundingSphere.radius;const R=new lt(Q,Fe);R.receiveShadow=_t>=2,R.visible=!1,Je.add(R),w.merged.push(R)}else w.merged=[];if(window.__lod={far:Le,chunks:Me.size},Ca("before_trees"),_t>=4&&tn&&wn.get("xtrees")!=="0"){const w=[],Q=i.trees.slice();for(let b=0;b<Q.length;b++){const C=Q[b];if(C[2]*=1.15+.4*ae(b*1.3),C[4]===2){C.length=4;continue}if(ae(b*2.1)<.6){const P=ae(b*3.3)*6.283,I=4+3*ae(b*4.7);w.push([C[0]+Math.cos(P)*I,C[1]+Math.sin(P)*I,.9+.5*ae(b*5.9),(C[3]+1+b)%9])}}const R=new Map,ee=40,Y=(b,C)=>Math.floor(b/ee)*100003+Math.floor(C/ee);for(const b of i.buildings){const C=b.p[0]?.[0];if(!C)continue;let P=1e9,I=-1e9,k=1e9,F=-1e9;for(let N=0;N<C.length;N+=2)P=Math.min(P,C[N]),I=Math.max(I,C[N]),k=Math.min(k,C[N+1]),F=Math.max(F,C[N+1]);for(let N=Math.floor(P/ee);N<=Math.floor(I/ee);N++)for(let K=Math.floor(k/ee);K<=Math.floor(F/ee);K++){const de=N*100003+K;(R.get(de)||R.set(de,[]).get(de)).push(C)}}const O=(b,C,P)=>{for(const[I,k]of[[0,0],[P,0],[-P,0],[0,P],[0,-P]])for(const F of R.get(Y(b+I,C+k))||[])if(me(F,b+I,C+k))return!0;return!1};let W=0;for(const b of i.buildings)for(const C of b.p)for(let P=1;P<C.length;P++){const I=C[P],k=Math.abs(ii(I));if(k<80)continue;let F=0,N=0;for(let pe=0;pe<I.length;pe+=2)F+=I[pe],N+=I[pe+1];const K=F/(I.length/2),de=N/(I.length/2),ie=Math.min(4,1+Math.floor(k/250)),X=Math.sqrt(k)*.25;for(let pe=0;pe<ie;pe++){W++;const be=ae(W*1.9)*6.283,ge=K+Math.cos(be)*X*(pe?1:0),Be=de+Math.sin(be)*X*(pe?1:0);me(I,ge,Be)&&w.push([ge,Be,.85+.35*ae(W),W%9])}}const j=i.water.map(b=>{const C=b[0];let P=1e9,I=1e9,k=-1e9,F=-1e9;for(let N=0;N<C.length;N+=2)P=Math.min(P,C[N]),k=Math.max(k,C[N]),I=Math.min(I,C[N+1]),F=Math.max(F,C[N+1]);return[P,I,k,F]}),H=(b,C)=>i.water.some((P,I)=>{const k=j[I];if(b<k[0]||b>k[2]||C<k[1]||C>k[3])return!1;let F=!1;for(const N of P)for(let K=0,de=N.length-2;K<N.length;de=K,K+=2)N[K+1]>C!=N[de+1]>C&&b<(N[de]-N[K])*(C-N[K+1])/(N[de+1]-N[K+1])+N[K]&&(F=!F);return F});let v=0;for(const[b,C]of[["major",13],["minor",17]])for(const P of i.roads[b]||[]){const I=P[0],k=ii(I)>0?1:-1;for(let F=0;F<I.length;F+=2){const N=(F+2)%I.length,K=I[N]-I[F],de=I[N+1]-I[F+1],ie=Math.hypot(K,de);if(ie<4)continue;const X=de/ie*k,pe=-K/ie*k;for(let be=C*.5;be<ie;be+=C){if(v++,ae(v*1.7)>.65)continue;const ge=I[F]+K*(be/ie)+X*2.6,Be=I[F+1]+de*(be/ie)+pe*2.6;!O(ge,Be,2.5)&&!H(ge,Be)&&w.push([ge,Be,.75+.35*ae(v*2.3),v%9])}}}i.trees=Q.concat(w.filter((b,C)=>C%2===0).map(b=>[b[0],b[1],b[2],b[3],1])),window.__trees=i.trees.length}e&&(i.trees=i.trees.filter(w=>!t(w[0],w[1])));{const w=window.__dolmaRings;if(w){const Q=i.trees.length,R=(j,H,v)=>{let b=!1;for(let C=0,P=j.length-2;C<j.length;P=C,C+=2)j[C+1]>v!=j[P+1]>v&&H<(j[P]-j[C])*(v-j[C+1])/(j[P+1]-j[C+1])+j[C]&&(b=!b);return b},ee=Math.sin(.55),Y=Math.cos(.55),O=[];for(const j of w)for(let H=0;H<j.length;H+=2)O.push([j[H]*Y-j[H+1]*ee,j[H]*ee+j[H+1]*Y]);const W=(j,H)=>{const v=j*Y-H*ee,b=j*ee+H*Y;let C=-1e9;for(const P of O)Math.abs(P[0]-v)<30&&(C=Math.max(C,P[1]));return C>-1e9&&b>C-2};i.trees=i.trees.filter(j=>!(al(j[0],j[1])&&(j[4]===1||W(j[0],j[1])))&&!w.some(H=>R(H,j[0],j[1]))),window.__dolmaTrees=Q-i.trees.length}}{const w=new Map,Q=40,R=(b,C)=>Math.floor(b/Q)*100003+Math.floor(C/Q);for(const b of i.buildings){const C=b.p[0]?.[0];if(!C)continue;let P=1e9,I=-1e9,k=1e9,F=-1e9;for(let N=0;N<C.length;N+=2)P=Math.min(P,C[N]),I=Math.max(I,C[N]),k=Math.min(k,C[N+1]),F=Math.max(F,C[N+1]);for(let N=Math.floor(P/Q);N<=Math.floor(I/Q);N++)for(let K=Math.floor(k/Q);K<=Math.floor(F/Q);K++){const de=N*100003+K;(w.get(de)||w.set(de,[]).get(de)).push(C)}}const ee=(b,C,P)=>{let I=!1;for(let k=0,F=b.length-2;k<b.length;F=k,k+=2)b[k+1]>P!=b[F+1]>P&&C<(b[F]-b[k])*(P-b[k+1])/(b[F+1]-b[k+1])+b[k]&&(I=!I);return I},Y=(b,C)=>{for(const P of w.get(R(b,C))||[])if(ee(P,b,C))return!0;return!1},O=i.water.map(b=>{const C=b[0];let P=1e9,I=1e9,k=-1e9,F=-1e9;for(let N=0;N<C.length;N+=2)P=Math.min(P,C[N]),k=Math.max(k,C[N]),I=Math.min(I,C[N+1]),F=Math.max(F,C[N+1]);return[P,I,k,F,b]}),W=(b,C)=>O.some(P=>{if(b<P[0]||b>P[2]||C<P[1]||C>P[3])return!1;let I=!1;for(const k of P[4])for(let F=0,N=k.length-2;F<k.length;N=F,F+=2)k[F+1]>C!=k[N+1]>C&&b<(k[N]-k[F])*(C-k[F+1])/(k[N+1]-k[F+1])+k[F]&&(I=!I);return I});let j=[];try{j=((await(await fetch(`${Ct}data/landuse.json`)).json()).pitch||[]).map(C=>C[0])}catch{}const H=(b,C)=>j.some(P=>ee(P,b,C)),v=i.trees.length;i.trees=i.trees.filter(b=>!Y(b[0],b[1])&&!W(b[0],b[1])&&!H(b[0],b[1])),window.__treeFootprintFiltered=v-i.trees.length,window.__trees=i.trees.length}if(n&&(i.trees=gE(i.trees,n)),_t>=4&&i.trees.length){const w=new Xn(.3,.42,3.2,5).translate(0,1.6,0),Q=new Il(3.3,0).translate(0,4.2,0),R=new $r(3.6,0).translate(0,4.2,0),ee=new ct({color:"#7a5a3c"}),Y=new ct({flatShading:!0}),O=(Ze?Ze.trees:["#d9822b","#e6ad3c","#b8532c","#8f9d3e","#c96f2d"]).map(I=>new De(I)),W=new Map;for(const I of i.trees){const k=Math.floor((I[0]-a)/500)+1e3*Math.floor((I[1]-r)/500)+(I[4]===1?1e7:0);(W.get(k)||W.set(k,[]).get(k)).push(I)}const j=new $e,H=new Vt,v=new G,b=new G,C=new G(0,1,0);let P=0;for(const I of W.values()){const k=!!I[0][4];k&&I.sort((ge,Be)=>ae(ge[0]*.37+ge[1]*.71)-ae(Be[0]*.37+Be[1]*.71));const F=new Qt(w,ee,I.length),N=new Qt(Q,Y,I.length);let K=0,de=0;for(const ge of I)K+=ge[0],de+=ge[1];K/=I.length,de/=I.length;const ie=new Qt(R,Y,Math.ceil(I.length/2));let X=0;I.forEach((ge,Be)=>{P++;const Re=ge[2];b.set(ge[0]-K,Xe(ge[0],ge[1]),ge[1]-de),H.setFromAxisAngle(C,P*2.39996%6.283),v.set(Re,Re*(.9+P%5*.06),Re),j.compose(b,H,v);const Qe=Ze?Tn(O[(ge[3]+P)%O.length],P,.8):O[ge[3]%O.length];F.setMatrixAt(Be,j),N.setMatrixAt(Be,j),N.setColorAt(Be,Qe),Be%2===0&&(ie.setMatrixAt(X,j),ie.setColorAt(X,Qe),X++)}),F.computeBoundingSphere(),N.computeBoundingSphere(),ie.computeBoundingSphere(),N.castShadow=!k,N.receiveShadow=!0,F.castShadow=!1,ie.receiveShadow=!0,k&&df.push([F,N,I.length]);const pe=new Bn;tn&&Ke?pe.add(N):pe.add(F,N);const be=new Kr;be.position.set(K,0,de),be.addLevel(pe,0),be.addLevel(ie,Le*.8),Je.add(be);{const ge=Pu(K,de,a,r);ge.members.push(be);const Be=new $e,Re=new $e().makeTranslation(K,0,de),Qe=new De;for(let q=0;q<X;q+=Ke?2:1)ie.getMatrixAt(q,Be),ie.getColorAt(q,Qe),ge.trees.push({m:Re.clone().multiply(Be),c:Qe.clone()})}}}for(const w of Ka.values())if(w.trees.length&&w.members.length>1){const Q=new Qt(new $r(3.6,0).translate(0,5.6,0),new ct({flatShading:!0}),w.trees.length);w.trees.forEach((R,ee)=>{Q.setMatrixAt(ee,R.m),Q.setColorAt(ee,R.c)}),Q.computeBoundingSphere(),Q.receiveShadow=!0,Q.visible=!1,Je.add(Q),w.merged.push(Q),w.r||(w.c.copy(Q.boundingSphere.center),w.r=Q.boundingSphere.radius),w.trees=[]}if(Ca("before_landmarks"),_t>=6)for(const w of i.landmarks){const Q=new Ti;Q.tex=!!s,w.prims.forEach((ee,Y)=>{if(Q.seed=ae(Y*3.1+w.label[0])*100,ee.t==="lathe"){$E(Q,ee);return}const O=new De(ee.col);if(Q.wl=ee.tx??8,Q.rl=ee.t==="pave"?10:ee.tx??8,Q.base=ee.z0,Q.ridge=0,ee.t==="prism")Q.wh=ee.z1-ee.z0,Q.st=ee.st||128,Vn(Q,ee.p,ee.z0,ee.z1,O,O.clone().multiplyScalar(.95));else if(ee.t==="pave")for(const W of ee.p)ea(Q,W,ee.z0,O);else ee.t==="lowroof"&&(Q.rl=9,Q.wh=.8,Q.st=128,Vn(Q,ee.p,ee.z0,ee.z0+.8,Ze?O.set("#7b8a9c"):O,O))});const R=Xe(w.label[0],w.label[1]);if(w.prims.length){const ee=new lt(Q.geometry().translate(0,R,0),s?s.mat:Fe);ee.castShadow=ee.receiveShadow=!0,Je.add(ee)}if(w.model&&w.id==="ayasofya"){const ee=await Z_({base:Ct,project:u,groundY:Xe,lodDistance:900*(Yt?1/Vs:1)});Je.add(ee.object),window.__aya={lodTriangles:ee.triangles,at:[Math.round(ee.object.position.x*10)/10,Math.round(ee.object.position.z*10)/10]}}if(w.model&&w.id==="sultanahmet"){const ee=await tE({base:Ct,project:u,groundY:Xe,lodDistance:800*(Yt?1/Vs:1)});Je.add(ee.object),window.__lm={...window.__lm||{},sultanahmet:{lodTriangles:ee.triangles,at:[Math.round(ee.object.position.x*10)/10,Math.round(ee.object.position.z*10)/10]}}}if(w.model&&(w.id==="yenicami"||w.id==="rustempasa"||w.id==="galata"||w.id==="nusretiye"||w.id==="ayatriada"||w.id==="stantoine")){const Y=await(["nusretiye","ayatriada","stantoine"].includes(w.id)?O=>cE(w.id,O):w.id==="yenicami"?nE:w.id==="galata"?aE:iE)({base:Ct,project:u,groundY:Xe,lodDistance:700*(Yt?1/Vs:1)});Je.add(Y.object),window.__lm={...window.__lm||{},[w.id]:{lodTriangles:Y.triangles,at:[Math.round(Y.object.position.x*10)/10,Math.round(Y.object.position.z*10)/10]}}}if(w.model&&w.id==="topkapi"){const ee=await eE({base:Ct,project:u,groundY:Xe,lodDistance:700*(Yt?1/Vs:1)});if(cn){ee.object.updateMatrixWorld(!0);const Y=ee.object.position.y,O=new G,W=new Set;ee.object.traverse(j=>{if(!j.isMesh||W.has(j.geometry))return;W.add(j.geometry);const H=j.geometry,v=H.attributes.position,b=new G().setFromMatrixScale(j.matrixWorld).y||1,C=new Float32Array(v.count*3);for(let P=0;P<v.count;P++){O.fromBufferAttribute(v,P);const I=O.x,k=O.y,F=O.z;O.applyMatrix4(j.matrixWorld),C[P*3]=I,C[P*3+1]=k+((sl(O.x,O.z)?ps:Xe(O.x,O.z))-Y)/b,C[P*3+2]=F}H.setAttribute("position",new Gt(C,3)),H.computeBoundingBox(),H.computeBoundingSphere()})}if(cn){const Y=qi,O=[];for(let v=0,b=Y.length-2;v<Y.length;b=v,v+=2){const C=Y[b],P=Y[b+1],I=Y[v],k=Y[v+1],F=Math.hypot(I-C,k-P),N=Math.max(1,Math.round(F/6));let K=(k-P)/F,de=-(I-C)/F;const ie=(C+I)/2,X=(P+k)/2;sl(ie+K*3,X+de*3)&&(K=-K,de=-de);for(let pe=0;pe<N;pe++){const be=(pe+.5)/N,ge=C+(I-C)*be+K*1.4,Be=P+(k-P)*be+de*1.4,Re=Math.min(Xe(ge+K*2,Be+de*2),Xe(ge,Be),Ys(ge-(I-C)/N*.5,Be-(k-P)/N*.5),Ys(ge+(I-C)/N*.5,Be+(k-P)/N*.5));ps-Re<1||O.push([ge,Be,F/N+.6,Re-2.5,ps+1.2,Math.atan2(-(k-P),I-C)])}}const W=new Qt(new Ft(1,1,1),new ct({color:"#cbbda2"}),O.length);W.name="aud:wall";const j=new $e,H=new Vt;O.forEach((v,b)=>{H.setFromAxisAngle(new G(0,1,0),v[5]),j.compose(new G(v[0],(v[3]+v[4])/2,v[1]),H,new G(v[2],v[4]-v[3],2.8)),W.setMatrixAt(b,j)}),W.castShadow=W.receiveShadow=!0,Je.add(W),window.__tkWalls={n:O.length,maxH:Math.round(Math.max(0,...O.map(v=>ps-v[3]-2.5)))}}if(cn){const Y=Yi,O=[];for(let W=0,j=Y.length-2;W<Y.length;j=W,W+=2){const H=Y[j],v=Y[j+1],b=Y[W],C=Y[W+1],P=Math.hypot(b-H,C-v)||1,I=Math.max(1,Math.round(P/8));let k=(C-v)/P,F=-(b-H)/P;const N=(H+b)/2,K=(v+C)/2;al(N+k*3,K+F*3)&&(k=-k,F=-F);for(let de=0;de<I;de++){const ie=(de+.5)/I,X=H+(b-H)*ie,pe=v+(C-v)*ie,be=Ys(X+k*6,pe+F*6);be-Yn>2?O.push([X,pe,P/I+.5,Yn-2.5,be+.6,Math.atan2(-(C-v),b-H)]):Yn-be>1&&O.push([X,pe,P/I+.5,Yn-2.5,Yn+1.1,Math.atan2(-(C-v),b-H)])}}if(O.length){const W=new Qt(new Ft(1,1,1),new ct({color:"#d8d2c4"}),O.length);W.name="aud:wall";const j=new $e,H=new Vt;O.forEach((v,b)=>{H.setFromAxisAngle(new G(0,1,0),v[5]),j.compose(new G(v[0],(v[3]+v[4])/2,v[1]),H,new G(v[2],Math.max(1.2,v[4]-v[3]),1.8)),W.setMatrixAt(b,j)}),W.castShadow=W.receiveShadow=!0,Je.add(W),window.__dhWalls={n:O.length}}}try{const Y=window.__dolmaDome;if(Y&&Y.length){const O=new Ti,W=new De("#7a858f");for(const H of Y){const v=Yn+H.y0,b=Yn+H.y1,C=14;for(let P=0;P<C;P++){const I=P/C*Math.PI*2,k=(P+1)/C*Math.PI*2,F=H.x+Math.cos(I)*H.r,N=H.z+Math.sin(I)*H.r,K=H.x+Math.cos(k)*H.r,de=H.z+Math.sin(k)*H.r;O.tri([F,v,N],[K,b,de],[K,v,de],W),O.tri([F,v,N],[F,b,N],[K,b,de],W),O.tri([F,b,N],[H.x,b+(b-v)*.15,H.z],[K,b,de],W)}}const j=new lt(O.geometry(),new ct({vertexColors:!0}));j.castShadow=j.receiveShadow=!0,Je.add(j)}}catch{}Je.add(ee.object),window.__lm={...window.__lm||{},topkapi:{lodTriangles:ee.triangles,at:[Math.round(ee.object.position.x*10)/10,Math.round(ee.object.position.z*10)/10]}}}{const ee={ayasofya:2.6,sultanahmet:.9,suleymaniye:3.9,yenicami:3.6,galata:.4,topkapi:.8,nusretiye:.6,ayatriada:2.7,stantoine:4.75};nt["lm_"+w.id]={t:[w.label[0],w.label[1]],d:w.id==="galata"?240:["nusretiye","ayatriada","stantoine"].includes(w.id)?150:360,pol:1.15,y:w.id==="topkapi"?5:w.id==="galata"?30:["nusretiye","ayatriada","stantoine"].includes(w.id)?12:24,az:ee[w.id]??0},w.id==="ayasofya"&&(nt.hd_apse={t:[117,1675],d:95,pol:.95,y:14,az:.98},nt.hd_apse_s={t:[117,1675],d:95,pol:.95,y:14,az:1.9},nt.hd_pilot={t:[95,1662],d:230,pol:.85,y:20,az:2.9}),w.id==="stantoine"&&(nt.sa_top={t:[-172.4,-977.5],d:215,pol:.02,y:0,az:-1.897},nt.sa_obl={t:[-155.3,-971.7],d:150,pol:.82,y:8,az:-1.254}),w.id==="topkapi"&&(nt.tk_wide={t:[395,1245],d:820,pol:.95,y:5,az:.8})}vn(w.name,w.label[0],w.label[2]+R,w.label[1],w.id==="rustempasa"?"w":w.id==="yenicami"?"e":w.id==="ayatriada"?"below":"")}if(vn("Taksim",m[0],5+Xe(m[0],m[1]),m[1],"area"),_t>=5){const w=document.getElementById("hour");li&&!wn.get("hour")&&(w.value=String(af)),wn.get("hour")&&(w.value=String(Math.min(17.5,Math.max(7.5,Number(wn.get("hour"))||14)))),w.min="7.5",w.max="17.5",document.getElementById("tod").hidden=!0,w.addEventListener("input",()=>il(Number(w.value))),il(Number(w.value))}document.getElementById("loading").remove();try{const w=await(await fetch(`${Ct}data/aqueduct.json`)).json(),Q=w.line,R=13.5,ee=[];for(let F=0;F<Q.length-1;F++){const[N,K]=Q[F],[de,ie]=Q[F+1],X=Math.hypot(de-N,ie-K);if(X>60)continue;const pe=Math.max(1,Math.round(X/R));for(let be=0;be<pe;be++)ee.push([N+(de-N)*be/pe,K+(ie-K)*be/pe,Math.atan2(-(ie-K),de-N),X/pe])}let Y=1e9,O=-1e9;for(const F of ee){const N=Xe(F[0],F[1]);Y=Math.min(Y,N),O=Math.max(O,N)}const W=Math.max(Y+w.hmax,O+4),j=[];for(const[F,N,K,de]of ee){const ie=Xe(F,N);W-9>ie&&j.push([F,N,K,4.2,ie-1,W-9,w.w]),j.push([F,N,K,de+.05,Math.max(ie-1,W-9.5),W-7.5,w.w+.6]),j.push([F,N,K,3,Math.max(ie-1,W-7.5),W-2,w.w-.4]),j.push([F,N,K,de+.05,Math.max(ie-1,W-2),W,w.w])}const H=new $e,v=new Vt,b=new G(0,1,0),C=new G,P=new G,I=fc(new ct({color:"#b9a98c"}));for(const[F,N]of[[j.filter(K=>K[4]<K[5]-6||K[3]===4.2),"aud:wall"],[j.filter(K=>!(K[4]<K[5]-6||K[3]===4.2)),"aqueduct-spans"]]){const K=new Qt(new Ft(1,1,1),I,Math.max(1,F.length));K.name=N,K.count=F.length,F.forEach(([de,ie,X,pe,be,ge,Be],Re)=>K.setMatrixAt(Re,H.compose(C.set(de,(be+ge)/2,ie),v.setFromAxisAngle(b,X),P.set(pe,ge-be,Be)))),K.castShadow=K.receiveShadow=_t>=2,Je.add(K)}const k=Q[Math.floor(Q.length/2)];vn("Bozdoğan Kemeri",k[0],W+12,k[1]),window.__aq={piers:ee.length,top:Math.round(W)}}catch(w){console.warn("aqueduct skipped",w)}for(const w of["dikilitas","ormedikilitas","yilanlisutun","almancesmesi"])try{const Q=await ws(w,{base:Ct,project:u,groundY:Xe,lodDistance:1500});Q.object.name="aud:monument",Je.add(Q.object)}catch(Q){console.warn("monument skipped",w,Q)}if(vn("Dikilitaş",-302,Xe(-302,1943)+30,1943),vn("Alman Çeşmesi",-260,Xe(-260,1784)+16,1784),nt.hipodrom={t:[-310,1930],y:8,d:Ke?420:330,pol:.85,az:2.2},nt.sarayburnu={t:[430,1e3],y:20,d:Ke?900:700,pol:1,az:.3},nt.bozdogan={t:[-1900,880],y:25,d:Ke?520:420,pol:1.2,az:2.2},nt.pool={t:[-70,1800],y:30,d:Ke?330:260,pol:.95,az:.3},nt.galata_slope={t:[-420,-150],y:30,d:Ke?600:480,pol:1.05,az:.4},nt.taksim={t:[520,-1500],y:10,d:Ke?520:420,pol:.55,az:.2},nt.dolmabahce={t:[1780,-1740],y:10,d:Ke?650:520,pol:.85,az:-.6},nt.dolma_sea={t:[1800,-1740],y:8,d:Ke?700:560,pol:1.15,az:.55},nt.mid_gumussuyu={t:[1e3,-1600],y:25,d:Ke?700:560,pol:.95,az:.5},nt.suleymaniye_s={t:[-1260,820],y:30,d:Ke?600:480,pol:1,az:2.4},qt){const w=(R,ee,Y)=>vn(R,ee,Xe(ee,Y)+24,Y,"near"),Q=qt.poi||{};Q["Beşiktaş Dentur İskelesi"]&&w("Beşiktaş İskelesi",Q["Beşiktaş Dentur İskelesi"][0],Q["Beşiktaş Dentur İskelesi"][1]),Q["Barbaros Hayrettin Türbesi"]&&w("Barbaros Meydanı",Q["Barbaros Hayrettin Türbesi"][0],Q["Barbaros Hayrettin Türbesi"][1]),Q["Yıldız Hamidiye Camii"]&&w("Yıldız",Q["Yıldız Hamidiye Camii"][0],Q["Yıldız Hamidiye Camii"][1]),Q["Çırağan Sarayı"]&&w("Çırağan Sarayı",Q["Çırağan Sarayı"][0],Q["Çırağan Sarayı"][1]),nt.besiktas={t:[2410,-2075],d:Ke?420:340,pol:1.05,y:8,az:2.2},nt.besiktas_barbaros={t:[2420,-2550],d:Ke?900:760,pol:.85,y:20,az:3.5},nt.besiktas_ciragan={t:[2800,-2200],d:Ke?520:420,pol:1,y:10,az:2.4}}const je=[i.bounds_m[0],Math.min(i.bounds_m[1],-3280),Math.max(i.bounds_m[2],3480),i.bounds_m[3]];kn=await dE({scene:Je,camera:Rn,controls:Ln,H:Xe,bounds:je,map:Ct,narrow:Ke,roads:[...i.roads.major||[],...i.roads.minor||[]],plazas:i.plazas,buildings:i.buildings,water:i.water,patchMask:n?w=>_E(w,n):void 0}),n&&CE({scene:Je,camera:Rn,H:Xe,W:n,narrow:Ke}),kn=await WE(kn,{scene:Je,camera:Rn,H:Xe,buildings:i.buildings,narrow:Ke}),window.__drive=kn,Ca("ready"),window.__scene=Je,window.__camera=Rn,window.__ready=!0}let Nn=null;const Or=new Ao(A_),Gr=new Ao(p_);function dv(){if(!YE)return;const i=window.innerWidth,e=window.innerHeight;Nn=new Wx(fn),Nn.setPixelRatio(Math.min(window.devicePixelRatio,2)),Nn.setSize(i,e),Nn.addPass(new jx(Je,Rn));const t=new ui(Je,Rn,i,e);t.updateGtaoMaterial({radius:12,distanceExponent:1.4,thickness:6,scale:1.4,samples:12,distanceFallOff:1,screenSpaceRadius:!1}),t.blendIntensity=1,Nn.addPass(t),Nn.addPass(new ha(new He(i,e),.1,.5,.95)),Or.uniforms.h.value=2.2/i,Gr.uniforms.v.value=2.2/e,Or.uniforms.r.value=Gr.uniforms.r.value=.5,Nn.addPass(Or),Nn.addPass(Gr),Nn.addPass(new $x),Nn.addPass(new Ao({uniforms:{tDiffuse:{value:null}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`uniform sampler2D tDiffuse; varying vec2 vUv;
      void main(){ vec4 c = texture2D(tDiffuse, vUv); vec3 x = c.rgb;
        float l = dot(x, vec3(0.299, 0.587, 0.114));
        x = mix(vec3(l), x, ${tn?"1.12":"1.08"});                       // more saturation
        x = (x - 0.5) * ${tn?"1.1":"1.06"} + 0.5;                       // a little more contrast, no milky lift
        vec2 q = vUv - 0.5; x *= 1.0 - 0.35 * dot(q, q);  // soft vignette like the Warsaw frames
        gl_FragColor = vec4(clamp(x, 0.0, 1.0), c.a); }`}))}dv();const Ka=new Map;let uf=1e9;const Ra=[],Pu=(i,e,t,n)=>{const s=Math.floor((i-t)/1500)+1e3*Math.floor((e-n)/1500);let a=Ka.get(s);return a||(a={key:s,bld:[],trees:[],members:[],merged:[],c:new G,r:0},Ka.set(s,a)),a};function fv(){for(const i of Ka.values()){if(!i.merged.length)continue;const e=Rn.position.distanceTo(i.c)-i.r>uf;for(const t of i.merged)t.visible=e;for(const t of i.members)t.visible=!e}}const df=[];let Uu=-1,Fu=performance.now();function ff(i){const e=i??performance.now(),t=Math.min(.08,(e-Fu)/1e3);Fu=e,kn?kn.update(t):Ln.update();const n=kn?kn.focus():Ln.target;un.target.position.copy(n),un.position.copy(n).addScaledVector(nf,kn?1800:3e3);const s=Rn.position.distanceTo(n),a=s*Vs,r=a>3200?2:a>1800?1:0;if(r!==Uu){Uu=r;for(const[l,h,u]of df)l.count=h.count=r===2?Math.ceil(u*.3):r===1?Math.ceil(u*.65):u}const o=Jt.clamp(kn?160:a*.75,kn?80:250,kn?700:2600),c=un.shadow.camera;c.right!==o&&(c.left=-o,c.right=o,c.top=o,c.bottom=-o,c.updateProjectionMatrix()),li&&Je.fog instanceof oo&&(kn?(Je.fog.near=50,Je.fog.far=900):tn?(Je.fog.near=s*.95,Je.fog.far=s+a*1.3+5e3):Yt?(Je.fog.near=s*.8,Je.fog.far=s+a*.6+3500):(Je.fog.near=s*2.2,Je.fog.far=s*9+6e3)),fv();{const l=a<3e3;for(const h of Ra)h.visible=l}if(Nn){const l=Jt.clamp(2-a/2500,.4,1.6);Or.uniforms.h.value=l/window.innerWidth,Gr.uniforms.v.value=l/window.innerHeight,Nn.render()}else fn.render(Je,Rn);ov(),window.__frames=(window.__frames||0)+1,requestAnimationFrame(ff)}window.addEventListener("resize",()=>{Rn.aspect=window.innerWidth/window.innerHeight,Rn.updateProjectionMatrix(),fn.setSize(window.innerWidth,window.innerHeight),Nn?.setSize(window.innerWidth,window.innerHeight)});Object.assign(window,{__setView:hf,__controls:Ln,__renderer:fn,__stats:()=>({texMB:window.__texMB,triangles:fn.info.render.triangles,calls:fn.info.render.calls,geometries:fn.info.memory.geometries})});uv().then(()=>requestAnimationFrame(ff));
