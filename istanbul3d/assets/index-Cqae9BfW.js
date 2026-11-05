(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();const Sc="170",li={ROTATE:0,DOLLY:1,PAN:2},Mi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},vf=0,rl=1,yf=2,Ic=1,Kh=2,ii=3,Nn=0,hn=1,yt=2,Qt=0,xs=1,Uo=2,al=3,ol=4,Jh=5,Dn=100,Mf=101,Cf=102,Sf=103,If=104,Ks=200,wf=201,Tf=202,Bf=203,Fo=204,No=205,Qo=206,Rf=207,Oo=208,Df=209,Lf=210,Pf=211,Uf=212,Ff=213,Nf=214,ko=0,Go=1,zo=2,Cs=3,Ho=4,Vo=5,Wo=6,jo=7,wc=0,Qf=1,Of=2,Ti=0,Zh=1,$h=2,eu=3,Tc=4,kf=5,Bc=6,tu=7,cl="attached",Gf="detached",nu=300,Vi=301,Ss=302,qo=303,Yo=304,wa=306,gn=1e3,oi=1001,Aa=1002,Ht=1003,iu=1004,Js=1005,sn=1006,ca=1007,Vn=1008,Lt=1009,su=1010,ru=1011,hr=1012,Rc=1013,Wi=1014,Kt=1015,Gt=1016,Dc=1017,Lc=1018,ji=1020,au=35902,ou=1021,cu=1022,Pt=1023,lu=1024,hu=1025,vs=1026,qi=1027,Ci=1028,Pc=1029,Gi=1030,Uc=1031,Fc=1033,la=33776,tr=33777,ha=33778,nr=33779,pa=35840,Xo=35841,ga=35842,Ko=35843,ma=36196,ba=37492,_a=37496,ur=37808,Jo=37809,Zo=37810,$o=37811,fr=37812,ec=37813,tc=37814,nc=37815,ic=37816,sc=37817,rc=37818,ac=37819,oc=37820,cc=37821,ir=36492,lc=36494,Ea=36495,uu=36283,hc=36284,uc=36285,fc=36286,dr=2300,Ar=2301,Ga=2302,ll=2400,hl=2401,ul=2402,zf=2500,Hf=0,fu=1,dc=2,Vf=3200,Wf=3201,Ta=0,jf=1,zn="",_t="srgb",Jt="srgb-linear",Ba="linear",ht="srgb",ts=7680,fl=519,qf=512,Yf=513,Xf=514,du=515,Kf=516,Jf=517,Zf=518,$f=519,Ac=35044,dl="300 es",ci=2e3,xa=2001;class Ki{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const Wt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Al=1234567;const sr=Math.PI/180,Is=180/Math.PI;function Fn(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Wt[i&255]+Wt[i>>8&255]+Wt[i>>16&255]+Wt[i>>24&255]+"-"+Wt[e&255]+Wt[e>>8&255]+"-"+Wt[e>>16&15|64]+Wt[e>>24&255]+"-"+Wt[t&63|128]+Wt[t>>8&255]+"-"+Wt[t>>16&255]+Wt[t>>24&255]+Wt[n&255]+Wt[n>>8&255]+Wt[n>>16&255]+Wt[n>>24&255]).toLowerCase()}function Ot(i,e,t){return Math.max(e,Math.min(t,i))}function Nc(i,e){return(i%e+e)%e}function ed(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function td(i,e,t){return i!==e?(t-i)/(e-i):0}function rr(i,e,t){return(1-t)*i+t*e}function nd(i,e,t,n){return rr(i,e,1-Math.exp(-t*n))}function id(i,e=1){return e-Math.abs(Nc(i,e*2)-e)}function sd(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function rd(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function ad(i,e){return i+Math.floor(Math.random()*(e-i+1))}function od(i,e){return i+Math.random()*(e-i)}function cd(i){return i*(.5-Math.random())}function ld(i){i!==void 0&&(Al=i);let e=Al+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function hd(i){return i*sr}function ud(i){return i*Is}function fd(i){return(i&i-1)===0&&i!==0}function dd(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Ad(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function pd(i,e,t,n,s){const r=Math.cos,a=Math.sin,o=r(t/2),c=a(t/2),l=r((e+n)/2),h=a((e+n)/2),u=r((e-n)/2),f=a((e-n)/2),A=r((n-e)/2),g=a((n-e)/2);switch(s){case"XYX":i.set(o*h,c*u,c*f,o*l);break;case"YZY":i.set(c*f,o*h,c*u,o*l);break;case"ZXZ":i.set(c*u,c*f,o*h,o*l);break;case"XZX":i.set(o*h,c*g,c*A,o*l);break;case"YXY":i.set(c*A,o*h,c*g,o*l);break;case"ZYZ":i.set(c*g,c*A,o*h,o*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Ln(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function ut(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Xt={DEG2RAD:sr,RAD2DEG:Is,generateUUID:Fn,clamp:Ot,euclideanModulo:Nc,mapLinear:ed,inverseLerp:td,lerp:rr,damp:nd,pingpong:id,smoothstep:sd,smootherstep:rd,randInt:ad,randFloat:od,randFloatSpread:cd,seededRandom:ld,degToRad:hd,radToDeg:ud,isPowerOfTwo:fd,ceilPowerOfTwo:dd,floorPowerOfTwo:Ad,setQuaternionFromProperEuler:pd,normalize:ut,denormalize:Ln};class De{constructor(e=0,t=0){De.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ot(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Je{constructor(e,t,n,s,r,a,o,c,l){Je.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l)}set(e,t,n,s,r,a,o,c,l){const h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],u=n[7],f=n[2],A=n[5],g=n[8],_=s[0],p=s[3],d=s[6],x=s[1],E=s[4],b=s[7],L=s[2],B=s[5],w=s[8];return r[0]=a*_+o*x+c*L,r[3]=a*p+o*E+c*B,r[6]=a*d+o*b+c*w,r[1]=l*_+h*x+u*L,r[4]=l*p+h*E+u*B,r[7]=l*d+h*b+u*w,r[2]=f*_+A*x+g*L,r[5]=f*p+A*E+g*B,r[8]=f*d+A*b+g*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8];return t*a*h-t*o*l-n*r*h+n*o*c+s*r*l-s*a*c}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=h*a-o*l,f=o*c-h*r,A=l*r-a*c,g=t*u+n*f+s*A;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=u*_,e[1]=(s*l-h*n)*_,e[2]=(o*n-s*a)*_,e[3]=f*_,e[4]=(h*t-s*c)*_,e[5]=(s*r-o*t)*_,e[6]=A*_,e[7]=(n*c-l*t)*_,e[8]=(a*t-n*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-s*l,s*c,-s*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(za.makeScale(e,t)),this}rotate(e){return this.premultiply(za.makeRotation(-e)),this}translate(e,t){return this.premultiply(za.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const za=new Je;function Au(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function pr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function gd(){const i=pr("canvas");return i.style.display="block",i}const pl={};function Zs(i){i in pl||(pl[i]=!0,console.warn(i))}function md(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function bd(i){const e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function _d(i){const e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const et={enabled:!0,workingColorSpace:Jt,spaces:{},convert:function(i,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===ht&&(i.r=hi(i.r),i.g=hi(i.g),i.b=hi(i.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(i.applyMatrix3(this.spaces[e].toXYZ),i.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===ht&&(i.r=ys(i.r),i.g=ys(i.g),i.b=ys(i.b))),i},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===zn?Ba:this.spaces[i].transfer},getLuminanceCoefficients:function(i,e=this.workingColorSpace){return i.fromArray(this.spaces[e].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,e,t){return i.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function hi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ys(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const gl=[.64,.33,.3,.6,.15,.06],ml=[.2126,.7152,.0722],bl=[.3127,.329],_l=new Je().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),El=new Je().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);et.define({[Jt]:{primaries:gl,whitePoint:bl,transfer:Ba,toXYZ:_l,fromXYZ:El,luminanceCoefficients:ml,workingColorSpaceConfig:{unpackColorSpace:_t},outputColorSpaceConfig:{drawingBufferColorSpace:_t}},[_t]:{primaries:gl,whitePoint:bl,transfer:ht,toXYZ:_l,fromXYZ:El,luminanceCoefficients:ml,outputColorSpaceConfig:{drawingBufferColorSpace:_t}}});let ns;class Ed{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ns===void 0&&(ns=pr("canvas")),ns.width=e.width,ns.height=e.height;const n=ns.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=ns}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=pr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=hi(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(hi(t[n]/255)*255):t[n]=hi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let xd=0;class pu{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:xd++}),this.uuid=Fn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Ha(s[a].image)):r.push(Ha(s[a]))}else r=Ha(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function Ha(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Ed.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let vd=0;class wt extends Ki{constructor(e=wt.DEFAULT_IMAGE,t=wt.DEFAULT_MAPPING,n=oi,s=oi,r=sn,a=Vn,o=Pt,c=Lt,l=wt.DEFAULT_ANISOTROPY,h=zn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:vd++}),this.uuid=Fn(),this.name="",this.source=new pu(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new De(0,0),this.repeat=new De(1,1),this.center=new De(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Je,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==nu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case gn:e.x=e.x-Math.floor(e.x);break;case oi:e.x=e.x<0?0:1;break;case Aa:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case gn:e.y=e.y-Math.floor(e.y);break;case oi:e.y=e.y<0?0:1;break;case Aa:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}wt.DEFAULT_IMAGE=null;wt.DEFAULT_MAPPING=nu;wt.DEFAULT_ANISOTROPY=1;class at{constructor(e=0,t=0,n=0,s=1){at.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const c=e.elements,l=c[0],h=c[4],u=c[8],f=c[1],A=c[5],g=c[9],_=c[2],p=c[6],d=c[10];if(Math.abs(h-f)<.01&&Math.abs(u-_)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+_)<.1&&Math.abs(g+p)<.1&&Math.abs(l+A+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const E=(l+1)/2,b=(A+1)/2,L=(d+1)/2,B=(h+f)/4,w=(u+_)/4,D=(g+p)/4;return E>b&&E>L?E<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(E),s=B/n,r=w/n):b>L?b<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(b),n=B/s,r=D/s):L<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(L),n=w/r,s=D/r),this.set(n,s,r,t),this}let x=Math.sqrt((p-g)*(p-g)+(u-_)*(u-_)+(f-h)*(f-h));return Math.abs(x)<.001&&(x=1),this.x=(p-g)/x,this.y=(u-_)/x,this.z=(f-h)/x,this.w=Math.acos((l+A+d-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class yd extends Ki{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new at(0,0,e,t),this.scissorTest=!1,this.viewport=new at(0,0,e,t);const s={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:sn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new wt(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,s=e.textures.length;n<s;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new pu(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class pn extends yd{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class gu extends wt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Ht,this.minFilter=Ht,this.wrapR=oi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class mu extends wt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Ht,this.minFilter=Ht,this.wrapR=oi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class St{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let c=n[s+0],l=n[s+1],h=n[s+2],u=n[s+3];const f=r[a+0],A=r[a+1],g=r[a+2],_=r[a+3];if(o===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u;return}if(o===1){e[t+0]=f,e[t+1]=A,e[t+2]=g,e[t+3]=_;return}if(u!==_||c!==f||l!==A||h!==g){let p=1-o;const d=c*f+l*A+h*g+u*_,x=d>=0?1:-1,E=1-d*d;if(E>Number.EPSILON){const L=Math.sqrt(E),B=Math.atan2(L,d*x);p=Math.sin(p*B)/L,o=Math.sin(o*B)/L}const b=o*x;if(c=c*p+f*b,l=l*p+A*b,h=h*p+g*b,u=u*p+_*b,p===1-o){const L=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=L,l*=L,h*=L,u*=L}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,a){const o=n[s],c=n[s+1],l=n[s+2],h=n[s+3],u=r[a],f=r[a+1],A=r[a+2],g=r[a+3];return e[t]=o*g+h*u+c*A-l*f,e[t+1]=c*g+h*f+l*u-o*A,e[t+2]=l*g+h*A+o*f-c*u,e[t+3]=h*g-o*u-c*f-l*A,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(s/2),u=o(r/2),f=c(n/2),A=c(s/2),g=c(r/2);switch(a){case"XYZ":this._x=f*h*u+l*A*g,this._y=l*A*u-f*h*g,this._z=l*h*g+f*A*u,this._w=l*h*u-f*A*g;break;case"YXZ":this._x=f*h*u+l*A*g,this._y=l*A*u-f*h*g,this._z=l*h*g-f*A*u,this._w=l*h*u+f*A*g;break;case"ZXY":this._x=f*h*u-l*A*g,this._y=l*A*u+f*h*g,this._z=l*h*g+f*A*u,this._w=l*h*u-f*A*g;break;case"ZYX":this._x=f*h*u-l*A*g,this._y=l*A*u+f*h*g,this._z=l*h*g-f*A*u,this._w=l*h*u+f*A*g;break;case"YZX":this._x=f*h*u+l*A*g,this._y=l*A*u+f*h*g,this._z=l*h*g-f*A*u,this._w=l*h*u-f*A*g;break;case"XZY":this._x=f*h*u-l*A*g,this._y=l*A*u-f*h*g,this._z=l*h*g+f*A*u,this._w=l*h*u+f*A*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],c=t[9],l=t[2],h=t[6],u=t[10],f=n+o+u;if(f>0){const A=.5/Math.sqrt(f+1);this._w=.25/A,this._x=(h-c)*A,this._y=(r-l)*A,this._z=(a-s)*A}else if(n>o&&n>u){const A=2*Math.sqrt(1+n-o-u);this._w=(h-c)/A,this._x=.25*A,this._y=(s+a)/A,this._z=(r+l)/A}else if(o>u){const A=2*Math.sqrt(1+o-n-u);this._w=(r-l)/A,this._x=(s+a)/A,this._y=.25*A,this._z=(c+h)/A}else{const A=2*Math.sqrt(1+u-n-o);this._w=(a-s)/A,this._x=(r+l)/A,this._y=(c+h)/A,this._z=.25*A}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ot(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+a*o+s*l-r*c,this._y=s*h+a*c+r*o-n*l,this._z=r*h+a*l+n*c-s*o,this._w=a*h-n*o-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,r=this._z,a=this._w;let o=a*e._w+n*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;const c=1-o*o;if(c<=Number.EPSILON){const A=1-t;return this._w=A*a+t*this._w,this._x=A*n+t*this._x,this._y=A*s+t*this._y,this._z=A*r+t*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,o),u=Math.sin((1-t)*h)/l,f=Math.sin(t*h)/l;return this._w=a*u+this._w*f,this._x=n*u+this._x*f,this._y=s*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class U{constructor(e=0,t=0,n=0){U.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(xl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(xl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*s-o*n),h=2*(o*t-r*s),u=2*(r*n-a*t);return this.x=t+c*l+a*u-o*h,this.y=n+c*h+o*l-r*u,this.z=s+c*u+r*h-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Va.copy(this).projectOnVector(e),this.sub(Va)}reflect(e){return this.sub(Va.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ot(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Va=new U,xl=new St;class fi{constructor(e=new U(1/0,1/0,1/0),t=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(wn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(wn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=wn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,wn):wn.fromBufferAttribute(r,a),wn.applyMatrix4(e.matrixWorld),this.expandByPoint(wn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Sr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Sr.copy(n.boundingBox)),Sr.applyMatrix4(e.matrixWorld),this.union(Sr)}const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,wn),wn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Os),Ir.subVectors(this.max,Os),is.subVectors(e.a,Os),ss.subVectors(e.b,Os),rs.subVectors(e.c,Os),pi.subVectors(ss,is),gi.subVectors(rs,ss),Ri.subVectors(is,rs);let t=[0,-pi.z,pi.y,0,-gi.z,gi.y,0,-Ri.z,Ri.y,pi.z,0,-pi.x,gi.z,0,-gi.x,Ri.z,0,-Ri.x,-pi.y,pi.x,0,-gi.y,gi.x,0,-Ri.y,Ri.x,0];return!Wa(t,is,ss,rs,Ir)||(t=[1,0,0,0,1,0,0,0,1],!Wa(t,is,ss,rs,Ir))?!1:(wr.crossVectors(pi,gi),t=[wr.x,wr.y,wr.z],Wa(t,is,ss,rs,Ir))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,wn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(wn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Jn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Jn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Jn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Jn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Jn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Jn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Jn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Jn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Jn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Jn=[new U,new U,new U,new U,new U,new U,new U,new U],wn=new U,Sr=new fi,is=new U,ss=new U,rs=new U,pi=new U,gi=new U,Ri=new U,Os=new U,Ir=new U,wr=new U,Di=new U;function Wa(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Di.fromArray(i,r);const o=s.x*Math.abs(Di.x)+s.y*Math.abs(Di.y)+s.z*Math.abs(Di.z),c=e.dot(Di),l=t.dot(Di),h=n.dot(Di);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}const Md=new fi,ks=new U,ja=new U;class jn{constructor(e=new U,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Md.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ks.subVectors(e,this.center);const t=ks.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(ks,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ja.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ks.copy(e.center).add(ja)),this.expandByPoint(ks.copy(e.center).sub(ja))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Zn=new U,qa=new U,Tr=new U,mi=new U,Ya=new U,Br=new U,Xa=new U;class xr{constructor(e=new U,t=new U(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Zn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Zn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Zn.copy(this.origin).addScaledVector(this.direction,t),Zn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){qa.copy(e).add(t).multiplyScalar(.5),Tr.copy(t).sub(e).normalize(),mi.copy(this.origin).sub(qa);const r=e.distanceTo(t)*.5,a=-this.direction.dot(Tr),o=mi.dot(this.direction),c=-mi.dot(Tr),l=mi.lengthSq(),h=Math.abs(1-a*a);let u,f,A,g;if(h>0)if(u=a*c-o,f=a*o-c,g=r*h,u>=0)if(f>=-g)if(f<=g){const _=1/h;u*=_,f*=_,A=u*(u+a*f+2*o)+f*(a*u+f+2*c)+l}else f=r,u=Math.max(0,-(a*f+o)),A=-u*u+f*(f+2*c)+l;else f=-r,u=Math.max(0,-(a*f+o)),A=-u*u+f*(f+2*c)+l;else f<=-g?(u=Math.max(0,-(-a*r+o)),f=u>0?-r:Math.min(Math.max(-r,-c),r),A=-u*u+f*(f+2*c)+l):f<=g?(u=0,f=Math.min(Math.max(-r,-c),r),A=f*(f+2*c)+l):(u=Math.max(0,-(a*r+o)),f=u>0?r:Math.min(Math.max(-r,-c),r),A=-u*u+f*(f+2*c)+l);else f=a>0?-r:r,u=Math.max(0,-(a*f+o)),A=-u*u+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(qa).addScaledVector(Tr,f),A}intersectSphere(e,t){Zn.subVectors(e.center,this.origin);const n=Zn.dot(this.direction),s=Zn.dot(Zn)-n*n,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return l>=0?(n=(e.min.x-f.x)*l,s=(e.max.x-f.x)*l):(n=(e.max.x-f.x)*l,s=(e.min.x-f.x)*l),h>=0?(r=(e.min.y-f.y)*h,a=(e.max.y-f.y)*h):(r=(e.max.y-f.y)*h,a=(e.min.y-f.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(e.min.z-f.z)*u,c=(e.max.z-f.z)*u):(o=(e.max.z-f.z)*u,c=(e.min.z-f.z)*u),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Zn)!==null}intersectTriangle(e,t,n,s,r){Ya.subVectors(t,e),Br.subVectors(n,e),Xa.crossVectors(Ya,Br);let a=this.direction.dot(Xa),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;mi.subVectors(this.origin,e);const c=o*this.direction.dot(Br.crossVectors(mi,Br));if(c<0)return null;const l=o*this.direction.dot(Ya.cross(mi));if(l<0||c+l>a)return null;const h=-o*mi.dot(Xa);return h<0?null:this.at(h/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Qe{constructor(e,t,n,s,r,a,o,c,l,h,u,f,A,g,_,p){Qe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l,h,u,f,A,g,_,p)}set(e,t,n,s,r,a,o,c,l,h,u,f,A,g,_,p){const d=this.elements;return d[0]=e,d[4]=t,d[8]=n,d[12]=s,d[1]=r,d[5]=a,d[9]=o,d[13]=c,d[2]=l,d[6]=h,d[10]=u,d[14]=f,d[3]=A,d[7]=g,d[11]=_,d[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Qe().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/as.setFromMatrixColumn(e,0).length(),r=1/as.setFromMatrixColumn(e,1).length(),a=1/as.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const f=a*h,A=a*u,g=o*h,_=o*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=A+g*l,t[5]=f-_*l,t[9]=-o*c,t[2]=_-f*l,t[6]=g+A*l,t[10]=a*c}else if(e.order==="YXZ"){const f=c*h,A=c*u,g=l*h,_=l*u;t[0]=f+_*o,t[4]=g*o-A,t[8]=a*l,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=A*o-g,t[6]=_+f*o,t[10]=a*c}else if(e.order==="ZXY"){const f=c*h,A=c*u,g=l*h,_=l*u;t[0]=f-_*o,t[4]=-a*u,t[8]=g+A*o,t[1]=A+g*o,t[5]=a*h,t[9]=_-f*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){const f=a*h,A=a*u,g=o*h,_=o*u;t[0]=c*h,t[4]=g*l-A,t[8]=f*l+_,t[1]=c*u,t[5]=_*l+f,t[9]=A*l-g,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){const f=a*c,A=a*l,g=o*c,_=o*l;t[0]=c*h,t[4]=_-f*u,t[8]=g*u+A,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-l*h,t[6]=A*u+g,t[10]=f-_*u}else if(e.order==="XZY"){const f=a*c,A=a*l,g=o*c,_=o*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=f*u+_,t[5]=a*h,t[9]=A*u-g,t[2]=g*u-A,t[6]=o*h,t[10]=_*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Cd,e,Sd)}lookAt(e,t,n){const s=this.elements;return fn.subVectors(e,t),fn.lengthSq()===0&&(fn.z=1),fn.normalize(),bi.crossVectors(n,fn),bi.lengthSq()===0&&(Math.abs(n.z)===1?fn.x+=1e-4:fn.z+=1e-4,fn.normalize(),bi.crossVectors(n,fn)),bi.normalize(),Rr.crossVectors(fn,bi),s[0]=bi.x,s[4]=Rr.x,s[8]=fn.x,s[1]=bi.y,s[5]=Rr.y,s[9]=fn.y,s[2]=bi.z,s[6]=Rr.z,s[10]=fn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],u=n[5],f=n[9],A=n[13],g=n[2],_=n[6],p=n[10],d=n[14],x=n[3],E=n[7],b=n[11],L=n[15],B=s[0],w=s[4],D=s[8],M=s[12],y=s[1],T=s[5],j=s[9],V=s[13],he=s[2],fe=s[6],ae=s[10],se=s[14],te=s[3],ge=s[7],ie=s[11],me=s[15];return r[0]=a*B+o*y+c*he+l*te,r[4]=a*w+o*T+c*fe+l*ge,r[8]=a*D+o*j+c*ae+l*ie,r[12]=a*M+o*V+c*se+l*me,r[1]=h*B+u*y+f*he+A*te,r[5]=h*w+u*T+f*fe+A*ge,r[9]=h*D+u*j+f*ae+A*ie,r[13]=h*M+u*V+f*se+A*me,r[2]=g*B+_*y+p*he+d*te,r[6]=g*w+_*T+p*fe+d*ge,r[10]=g*D+_*j+p*ae+d*ie,r[14]=g*M+_*V+p*se+d*me,r[3]=x*B+E*y+b*he+L*te,r[7]=x*w+E*T+b*fe+L*ge,r[11]=x*D+E*j+b*ae+L*ie,r[15]=x*M+E*V+b*se+L*me,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],c=e[9],l=e[13],h=e[2],u=e[6],f=e[10],A=e[14],g=e[3],_=e[7],p=e[11],d=e[15];return g*(+r*c*u-s*l*u-r*o*f+n*l*f+s*o*A-n*c*A)+_*(+t*c*A-t*l*f+r*a*f-s*a*A+s*l*h-r*c*h)+p*(+t*l*u-t*o*A-r*a*u+n*a*A+r*o*h-n*l*h)+d*(-s*o*h-t*c*u+t*o*f+s*a*u-n*a*f+n*c*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=e[9],f=e[10],A=e[11],g=e[12],_=e[13],p=e[14],d=e[15],x=u*p*l-_*f*l+_*c*A-o*p*A-u*c*d+o*f*d,E=g*f*l-h*p*l-g*c*A+a*p*A+h*c*d-a*f*d,b=h*_*l-g*u*l+g*o*A-a*_*A-h*o*d+a*u*d,L=g*u*c-h*_*c-g*o*f+a*_*f+h*o*p-a*u*p,B=t*x+n*E+s*b+r*L;if(B===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/B;return e[0]=x*w,e[1]=(_*f*r-u*p*r-_*s*A+n*p*A+u*s*d-n*f*d)*w,e[2]=(o*p*r-_*c*r+_*s*l-n*p*l-o*s*d+n*c*d)*w,e[3]=(u*c*r-o*f*r-u*s*l+n*f*l+o*s*A-n*c*A)*w,e[4]=E*w,e[5]=(h*p*r-g*f*r+g*s*A-t*p*A-h*s*d+t*f*d)*w,e[6]=(g*c*r-a*p*r-g*s*l+t*p*l+a*s*d-t*c*d)*w,e[7]=(a*f*r-h*c*r+h*s*l-t*f*l-a*s*A+t*c*A)*w,e[8]=b*w,e[9]=(g*u*r-h*_*r-g*n*A+t*_*A+h*n*d-t*u*d)*w,e[10]=(a*_*r-g*o*r+g*n*l-t*_*l-a*n*d+t*o*d)*w,e[11]=(h*o*r-a*u*r-h*n*l+t*u*l+a*n*A-t*o*A)*w,e[12]=L*w,e[13]=(h*_*s-g*u*s+g*n*f-t*_*f-h*n*p+t*u*p)*w,e[14]=(g*o*s-a*_*s-g*n*c+t*_*c+a*n*p-t*o*p)*w,e[15]=(a*u*s-h*o*s+h*n*c-t*u*c-a*n*f+t*o*f)*w,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,c=e.z,l=r*a,h=r*o;return this.set(l*a+n,l*o-s*c,l*c+s*o,0,l*o+s*c,h*o+n,h*c-s*a,0,l*c-s*o,h*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,l=r+r,h=a+a,u=o+o,f=r*l,A=r*h,g=r*u,_=a*h,p=a*u,d=o*u,x=c*l,E=c*h,b=c*u,L=n.x,B=n.y,w=n.z;return s[0]=(1-(_+d))*L,s[1]=(A+b)*L,s[2]=(g-E)*L,s[3]=0,s[4]=(A-b)*B,s[5]=(1-(f+d))*B,s[6]=(p+x)*B,s[7]=0,s[8]=(g+E)*w,s[9]=(p-x)*w,s[10]=(1-(f+_))*w,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let r=as.set(s[0],s[1],s[2]).length();const a=as.set(s[4],s[5],s[6]).length(),o=as.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Tn.copy(this);const l=1/r,h=1/a,u=1/o;return Tn.elements[0]*=l,Tn.elements[1]*=l,Tn.elements[2]*=l,Tn.elements[4]*=h,Tn.elements[5]*=h,Tn.elements[6]*=h,Tn.elements[8]*=u,Tn.elements[9]*=u,Tn.elements[10]*=u,t.setFromRotationMatrix(Tn),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,s,r,a,o=ci){const c=this.elements,l=2*r/(t-e),h=2*r/(n-s),u=(t+e)/(t-e),f=(n+s)/(n-s);let A,g;if(o===ci)A=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===xa)A=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=A,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=ci){const c=this.elements,l=1/(t-e),h=1/(n-s),u=1/(a-r),f=(t+e)*l,A=(n+s)*h;let g,_;if(o===ci)g=(a+r)*u,_=-2*u;else if(o===xa)g=r*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-A,c[2]=0,c[6]=0,c[10]=_,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const as=new U,Tn=new Qe,Cd=new U(0,0,0),Sd=new U(1,1,1),bi=new U,Rr=new U,fn=new U,vl=new Qe,yl=new St;class Cn{constructor(e=0,t=0,n=0,s=Cn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],h=s[9],u=s[2],f=s[6],A=s[10];switch(t){case"XYZ":this._y=Math.asin(Ot(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,A),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ot(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,A),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ot(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,A),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Ot(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,A),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Ot(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,A));break;case"XZY":this._z=Math.asin(-Ot(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,A),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return vl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(vl,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return yl.setFromEuler(this),this.setFromQuaternion(yl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Cn.DEFAULT_ORDER="XYZ";class bu{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Id=0;const Ml=new U,os=new St,$n=new Qe,Dr=new U,Gs=new U,wd=new U,Td=new St,Cl=new U(1,0,0),Sl=new U(0,1,0),Il=new U(0,0,1),wl={type:"added"},Bd={type:"removed"},cs={type:"childadded",child:null},Ka={type:"childremoved",child:null};class mt extends Ki{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Id++}),this.uuid=Fn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=mt.DEFAULT_UP.clone();const e=new U,t=new Cn,n=new St,s=new U(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Qe},normalMatrix:{value:new Je}}),this.matrix=new Qe,this.matrixWorld=new Qe,this.matrixAutoUpdate=mt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=mt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new bu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return os.setFromAxisAngle(e,t),this.quaternion.multiply(os),this}rotateOnWorldAxis(e,t){return os.setFromAxisAngle(e,t),this.quaternion.premultiply(os),this}rotateX(e){return this.rotateOnAxis(Cl,e)}rotateY(e){return this.rotateOnAxis(Sl,e)}rotateZ(e){return this.rotateOnAxis(Il,e)}translateOnAxis(e,t){return Ml.copy(e).applyQuaternion(this.quaternion),this.position.add(Ml.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Cl,e)}translateY(e){return this.translateOnAxis(Sl,e)}translateZ(e){return this.translateOnAxis(Il,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4($n.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Dr.copy(e):Dr.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Gs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?$n.lookAt(Gs,Dr,this.up):$n.lookAt(Dr,Gs,this.up),this.quaternion.setFromRotationMatrix($n),s&&($n.extractRotation(s.matrixWorld),os.setFromRotationMatrix($n),this.quaternion.premultiply(os.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(wl),cs.child=e,this.dispatchEvent(cs),cs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Bd),Ka.child=e,this.dispatchEvent(Ka),Ka.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),$n.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),$n.multiply(e.parent.matrixWorld)),e.applyMatrix4($n),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(wl),cs.child=e,this.dispatchEvent(cs),cs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Gs,e,wd),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Gs,Td,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];r(e.shapes,u)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(e.materials,this.material[c]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];s.animations.push(r(e.animations,c))}}if(t){const o=a(e.geometries),c=a(e.materials),l=a(e.textures),h=a(e.images),u=a(e.shapes),f=a(e.skeletons),A=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),A.length>0&&(n.animations=A),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){const c=[];for(const l in o){const h=o[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}mt.DEFAULT_UP=new U(0,1,0);mt.DEFAULT_MATRIX_AUTO_UPDATE=!0;mt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Bn=new U,ei=new U,Ja=new U,ti=new U,ls=new U,hs=new U,Tl=new U,Za=new U,$a=new U,eo=new U,to=new at,no=new at,io=new at;class Pn{constructor(e=new U,t=new U,n=new U){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Bn.subVectors(e,t),s.cross(Bn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Bn.subVectors(s,t),ei.subVectors(n,t),Ja.subVectors(e,t);const a=Bn.dot(Bn),o=Bn.dot(ei),c=Bn.dot(Ja),l=ei.dot(ei),h=ei.dot(Ja),u=a*l-o*o;if(u===0)return r.set(0,0,0),null;const f=1/u,A=(l*c-o*h)*f,g=(a*h-o*c)*f;return r.set(1-A-g,g,A)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,ti)===null?!1:ti.x>=0&&ti.y>=0&&ti.x+ti.y<=1}static getInterpolation(e,t,n,s,r,a,o,c){return this.getBarycoord(e,t,n,s,ti)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,ti.x),c.addScaledVector(a,ti.y),c.addScaledVector(o,ti.z),c)}static getInterpolatedAttribute(e,t,n,s,r,a){return to.setScalar(0),no.setScalar(0),io.setScalar(0),to.fromBufferAttribute(e,t),no.fromBufferAttribute(e,n),io.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(to,r.x),a.addScaledVector(no,r.y),a.addScaledVector(io,r.z),a}static isFrontFacing(e,t,n,s){return Bn.subVectors(n,t),ei.subVectors(e,t),Bn.cross(ei).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Bn.subVectors(this.c,this.b),ei.subVectors(this.a,this.b),Bn.cross(ei).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Pn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Pn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return Pn.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return Pn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Pn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let a,o;ls.subVectors(s,n),hs.subVectors(r,n),Za.subVectors(e,n);const c=ls.dot(Za),l=hs.dot(Za);if(c<=0&&l<=0)return t.copy(n);$a.subVectors(e,s);const h=ls.dot($a),u=hs.dot($a);if(h>=0&&u<=h)return t.copy(s);const f=c*u-h*l;if(f<=0&&c>=0&&h<=0)return a=c/(c-h),t.copy(n).addScaledVector(ls,a);eo.subVectors(e,r);const A=ls.dot(eo),g=hs.dot(eo);if(g>=0&&A<=g)return t.copy(r);const _=A*l-c*g;if(_<=0&&l>=0&&g<=0)return o=l/(l-g),t.copy(n).addScaledVector(hs,o);const p=h*g-A*u;if(p<=0&&u-h>=0&&A-g>=0)return Tl.subVectors(r,s),o=(u-h)/(u-h+(A-g)),t.copy(s).addScaledVector(Tl,o);const d=1/(p+_+f);return a=_*d,o=f*d,t.copy(n).addScaledVector(ls,a).addScaledVector(hs,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const _u={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},_i={h:0,s:0,l:0},Lr={h:0,s:0,l:0};function so(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Me{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=_t){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,et.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=et.workingColorSpace){return this.r=e,this.g=t,this.b=n,et.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=et.workingColorSpace){if(e=Nc(e,1),t=Ot(t,0,1),n=Ot(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=so(a,r,e+1/3),this.g=so(a,r,e),this.b=so(a,r,e-1/3)}return et.toWorkingColorSpace(this,s),this}setStyle(e,t=_t){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=_t){const n=_u[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=hi(e.r),this.g=hi(e.g),this.b=hi(e.b),this}copyLinearToSRGB(e){return this.r=ys(e.r),this.g=ys(e.g),this.b=ys(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=_t){return et.fromWorkingColorSpace(jt.copy(this),e),Math.round(Ot(jt.r*255,0,255))*65536+Math.round(Ot(jt.g*255,0,255))*256+Math.round(Ot(jt.b*255,0,255))}getHexString(e=_t){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=et.workingColorSpace){et.fromWorkingColorSpace(jt.copy(this),t);const n=jt.r,s=jt.g,r=jt.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let c,l;const h=(o+a)/2;if(o===a)c=0,l=0;else{const u=a-o;switch(l=h<=.5?u/(a+o):u/(2-a-o),a){case n:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-n)/u+2;break;case r:c=(n-s)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=et.workingColorSpace){return et.fromWorkingColorSpace(jt.copy(this),t),e.r=jt.r,e.g=jt.g,e.b=jt.b,e}getStyle(e=_t){et.fromWorkingColorSpace(jt.copy(this),e);const t=jt.r,n=jt.g,s=jt.b;return e!==_t?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(_i),this.setHSL(_i.h+e,_i.s+t,_i.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(_i),e.getHSL(Lr);const n=rr(_i.h,Lr.h,t),s=rr(_i.s,Lr.s,t),r=rr(_i.l,Lr.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const jt=new Me;Me.NAMES=_u;let Rd=0;class Mn extends Ki{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Rd++}),this.uuid=Fn(),this.name="",this.blending=xs,this.side=Nn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Fo,this.blendDst=No,this.blendEquation=Dn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Me(0,0,0),this.blendAlpha=0,this.depthFunc=Cs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=fl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ts,this.stencilZFail=ts,this.stencilZPass=ts,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==xs&&(n.blending=this.blending),this.side!==Nn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Fo&&(n.blendSrc=this.blendSrc),this.blendDst!==No&&(n.blendDst=this.blendDst),this.blendEquation!==Dn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Cs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==fl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ts&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ts&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ts&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const c=r[o];delete c.metadata,a.push(c)}return a}if(t){const r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Si extends Mn{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new Me(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Cn,this.combine=wc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Tt=new U,Pr=new De;class Mt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Ac,this.updateRanges=[],this.gpuType=Kt,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Pr.fromBufferAttribute(this,t),Pr.applyMatrix3(e),this.setXY(t,Pr.x,Pr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Tt.fromBufferAttribute(this,t),Tt.applyMatrix3(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Tt.fromBufferAttribute(this,t),Tt.applyMatrix4(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Tt.fromBufferAttribute(this,t),Tt.applyNormalMatrix(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Tt.fromBufferAttribute(this,t),Tt.transformDirection(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Ln(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ut(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ln(t,this.array)),t}setX(e,t){return this.normalized&&(t=ut(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ln(t,this.array)),t}setY(e,t){return this.normalized&&(t=ut(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ln(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ut(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ln(t,this.array)),t}setW(e,t){return this.normalized&&(t=ut(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=ut(t,this.array),n=ut(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=ut(t,this.array),n=ut(n,this.array),s=ut(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=ut(t,this.array),n=ut(n,this.array),s=ut(s,this.array),r=ut(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ac&&(e.usage=this.usage),e}}class Eu extends Mt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class xu extends Mt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class nt extends Mt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Dd=0;const _n=new Qe,ro=new mt,us=new U,dn=new fi,zs=new fi,Nt=new U;class bt extends Ki{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Dd++}),this.uuid=Fn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Au(e)?xu:Eu)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Je().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return _n.makeRotationFromQuaternion(e),this.applyMatrix4(_n),this}rotateX(e){return _n.makeRotationX(e),this.applyMatrix4(_n),this}rotateY(e){return _n.makeRotationY(e),this.applyMatrix4(_n),this}rotateZ(e){return _n.makeRotationZ(e),this.applyMatrix4(_n),this}translate(e,t,n){return _n.makeTranslation(e,t,n),this.applyMatrix4(_n),this}scale(e,t,n){return _n.makeScale(e,t,n),this.applyMatrix4(_n),this}lookAt(e){return ro.lookAt(e),ro.updateMatrix(),this.applyMatrix4(ro.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(us).negate(),this.translate(us.x,us.y,us.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,r=e.length;s<r;s++){const a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new nt(n,3))}else{for(let n=0,s=t.count;n<s;n++){const r=e[n];t.setXYZ(n,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new fi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];dn.setFromBufferAttribute(r),this.morphTargetsRelative?(Nt.addVectors(this.boundingBox.min,dn.min),this.boundingBox.expandByPoint(Nt),Nt.addVectors(this.boundingBox.max,dn.max),this.boundingBox.expandByPoint(Nt)):(this.boundingBox.expandByPoint(dn.min),this.boundingBox.expandByPoint(dn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new jn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(e){const n=this.boundingSphere.center;if(dn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];zs.setFromBufferAttribute(o),this.morphTargetsRelative?(Nt.addVectors(dn.min,zs.min),dn.expandByPoint(Nt),Nt.addVectors(dn.max,zs.max),dn.expandByPoint(Nt)):(dn.expandByPoint(zs.min),dn.expandByPoint(zs.max))}dn.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)Nt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Nt));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)Nt.fromBufferAttribute(o,l),c&&(us.fromBufferAttribute(e,l),Nt.add(us)),s=Math.max(s,n.distanceToSquared(Nt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Mt(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let D=0;D<n.count;D++)o[D]=new U,c[D]=new U;const l=new U,h=new U,u=new U,f=new De,A=new De,g=new De,_=new U,p=new U;function d(D,M,y){l.fromBufferAttribute(n,D),h.fromBufferAttribute(n,M),u.fromBufferAttribute(n,y),f.fromBufferAttribute(r,D),A.fromBufferAttribute(r,M),g.fromBufferAttribute(r,y),h.sub(l),u.sub(l),A.sub(f),g.sub(f);const T=1/(A.x*g.y-g.x*A.y);isFinite(T)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-A.y).multiplyScalar(T),p.copy(u).multiplyScalar(A.x).addScaledVector(h,-g.x).multiplyScalar(T),o[D].add(_),o[M].add(_),o[y].add(_),c[D].add(p),c[M].add(p),c[y].add(p))}let x=this.groups;x.length===0&&(x=[{start:0,count:e.count}]);for(let D=0,M=x.length;D<M;++D){const y=x[D],T=y.start,j=y.count;for(let V=T,he=T+j;V<he;V+=3)d(e.getX(V+0),e.getX(V+1),e.getX(V+2))}const E=new U,b=new U,L=new U,B=new U;function w(D){L.fromBufferAttribute(s,D),B.copy(L);const M=o[D];E.copy(M),E.sub(L.multiplyScalar(L.dot(M))).normalize(),b.crossVectors(B,M);const T=b.dot(c[D])<0?-1:1;a.setXYZW(D,E.x,E.y,E.z,T)}for(let D=0,M=x.length;D<M;++D){const y=x[D],T=y.start,j=y.count;for(let V=T,he=T+j;V<he;V+=3)w(e.getX(V+0)),w(e.getX(V+1)),w(e.getX(V+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Mt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,A=n.count;f<A;f++)n.setXYZ(f,0,0,0);const s=new U,r=new U,a=new U,o=new U,c=new U,l=new U,h=new U,u=new U;if(e)for(let f=0,A=e.count;f<A;f+=3){const g=e.getX(f+0),_=e.getX(f+1),p=e.getX(f+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),a.fromBufferAttribute(t,p),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,p),o.add(h),c.add(h),l.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(p,l.x,l.y,l.z)}else for(let f=0,A=t.count;f<A;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Nt.fromBufferAttribute(e,t),Nt.normalize(),e.setXYZ(t,Nt.x,Nt.y,Nt.z)}toNonIndexed(){function e(o,c){const l=o.array,h=o.itemSize,u=o.normalized,f=new l.constructor(c.length*h);let A=0,g=0;for(let _=0,p=c.length;_<p;_++){o.isInterleavedBufferAttribute?A=c[_]*o.data.stride+o.offset:A=c[_]*h;for(let d=0;d<h;d++)f[g++]=l[A++]}return new Mt(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new bt,n=this.index.array,s=this.attributes;for(const o in s){const c=s[o],l=e(c,n);t.setAttribute(o,l)}const r=this.morphAttributes;for(const o in r){const c=[],l=r[o];for(let h=0,u=l.length;h<u;h++){const f=l[h],A=e(f,n);c.push(A)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,f=l.length;u<f;u++){const A=l[u];h.push(A.toJSON(e.data))}h.length>0&&(s[c]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const s=e.attributes;for(const l in s){const h=s[l];this.setAttribute(l,h.clone(t))}const r=e.morphAttributes;for(const l in r){const h=[],u=r[l];for(let f=0,A=u.length;f<A;f++)h.push(u[f].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,h=a.length;l<h;l++){const u=a[l];this.addGroup(u.start,u.count,u.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Bl=new Qe,Li=new xr,Ur=new jn,Rl=new U,Fr=new U,Nr=new U,Qr=new U,ao=new U,Or=new U,Dl=new U,kr=new U;class rt extends mt{constructor(e=new bt,t=new Si){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(r&&o){Or.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=o[c],u=r[c];h!==0&&(ao.fromBufferAttribute(u,e),a?Or.addScaledVector(ao,h):Or.addScaledVector(ao.sub(t),h))}t.add(Or)}return t}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ur.copy(n.boundingSphere),Ur.applyMatrix4(r),Li.copy(e.ray).recast(e.near),!(Ur.containsPoint(Li.origin)===!1&&(Li.intersectSphere(Ur,Rl)===null||Li.origin.distanceToSquared(Rl)>(e.far-e.near)**2))&&(Bl.copy(r).invert(),Li.copy(e.ray).applyMatrix4(Bl),!(n.boundingBox!==null&&Li.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Li)))}_computeIntersections(e,t,n){let s;const r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,A=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=f.length;g<_;g++){const p=f[g],d=a[p.materialIndex],x=Math.max(p.start,A.start),E=Math.min(o.count,Math.min(p.start+p.count,A.start+A.count));for(let b=x,L=E;b<L;b+=3){const B=o.getX(b),w=o.getX(b+1),D=o.getX(b+2);s=Gr(this,d,e,n,l,h,u,B,w,D),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{const g=Math.max(0,A.start),_=Math.min(o.count,A.start+A.count);for(let p=g,d=_;p<d;p+=3){const x=o.getX(p),E=o.getX(p+1),b=o.getX(p+2);s=Gr(this,a,e,n,l,h,u,x,E,b),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,_=f.length;g<_;g++){const p=f[g],d=a[p.materialIndex],x=Math.max(p.start,A.start),E=Math.min(c.count,Math.min(p.start+p.count,A.start+A.count));for(let b=x,L=E;b<L;b+=3){const B=b,w=b+1,D=b+2;s=Gr(this,d,e,n,l,h,u,B,w,D),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{const g=Math.max(0,A.start),_=Math.min(c.count,A.start+A.count);for(let p=g,d=_;p<d;p+=3){const x=p,E=p+1,b=p+2;s=Gr(this,a,e,n,l,h,u,x,E,b),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}}}function Ld(i,e,t,n,s,r,a,o){let c;if(e.side===hn?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,e.side===Nn,o),c===null)return null;kr.copy(o),kr.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(kr);return l<t.near||l>t.far?null:{distance:l,point:kr.clone(),object:i}}function Gr(i,e,t,n,s,r,a,o,c,l){i.getVertexPosition(o,Fr),i.getVertexPosition(c,Nr),i.getVertexPosition(l,Qr);const h=Ld(i,e,t,n,Fr,Nr,Qr,Dl);if(h){const u=new U;Pn.getBarycoord(Dl,Fr,Nr,Qr,u),s&&(h.uv=Pn.getInterpolatedAttribute(s,o,c,l,u,new De)),r&&(h.uv1=Pn.getInterpolatedAttribute(r,o,c,l,u,new De)),a&&(h.normal=Pn.getInterpolatedAttribute(a,o,c,l,u,new U),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const f={a:o,b:c,c:l,normal:new U,materialIndex:0};Pn.getNormal(Fr,Nr,Qr,f.normal),h.face=f,h.barycoord=u}return h}class Yt extends bt{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const c=[],l=[],h=[],u=[];let f=0,A=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,s,a,2),g("x","z","y",1,-1,e,n,-t,s,a,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new nt(l,3)),this.setAttribute("normal",new nt(h,3)),this.setAttribute("uv",new nt(u,2));function g(_,p,d,x,E,b,L,B,w,D,M){const y=b/w,T=L/D,j=b/2,V=L/2,he=B/2,fe=w+1,ae=D+1;let se=0,te=0;const ge=new U;for(let ie=0;ie<ae;ie++){const me=ie*T-V;for(let xe=0;xe<fe;xe++){const ve=xe*y-j;ge[_]=ve*x,ge[p]=me*E,ge[d]=he,l.push(ge.x,ge.y,ge.z),ge[_]=0,ge[p]=0,ge[d]=B>0?1:-1,h.push(ge.x,ge.y,ge.z),u.push(xe/w),u.push(1-ie/D),se+=1}}for(let ie=0;ie<D;ie++)for(let me=0;me<w;me++){const xe=f+me+fe*ie,ve=f+me+fe*(ie+1),Y=f+(me+1)+fe*(ie+1),de=f+(me+1)+fe*ie;c.push(xe,ve,de),c.push(ve,Y,de),te+=6}o.addGroup(A,te,M),A+=te,f+=se}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Yt(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ws(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function en(i){const e={};for(let t=0;t<i.length;t++){const n=ws(i[t]);for(const s in n)e[s]=n[s]}return e}function Pd(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function vu(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:et.workingColorSpace}const Hn={clone:ws,merge:en};var Ud=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Fd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Bt extends Mn{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ud,this.fragmentShader=Fd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ws(e.uniforms),this.uniformsGroups=Pd(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class yu extends mt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Qe,this.projectionMatrix=new Qe,this.projectionMatrixInverse=new Qe,this.coordinateSystem=ci}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ei=new U,Ll=new De,Pl=new De;class tn extends yu{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Is*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(sr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Is*2*Math.atan(Math.tan(sr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Ei.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ei.x,Ei.y).multiplyScalar(-e/Ei.z),Ei.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ei.x,Ei.y).multiplyScalar(-e/Ei.z)}getViewSize(e,t){return this.getViewBounds(e,Ll,Pl),t.subVectors(Pl,Ll)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(sr*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,t-=a.offsetY*n/l,s*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const fs=-90,ds=1;class Nd extends mt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new tn(fs,ds,e,t);s.layers=this.layers,this.add(s);const r=new tn(fs,ds,e,t);r.layers=this.layers,this.add(r);const a=new tn(fs,ds,e,t);a.layers=this.layers,this.add(a);const o=new tn(fs,ds,e,t);o.layers=this.layers,this.add(o);const c=new tn(fs,ds,e,t);c.layers=this.layers,this.add(c);const l=new tn(fs,ds,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,c]=t;for(const l of t)this.remove(l);if(e===ci)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===xa)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,c,l,h]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),A=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,a),e.setRenderTarget(n,2,s),e.render(t,o),e.setRenderTarget(n,3,s),e.render(t,c),e.setRenderTarget(n,4,s),e.render(t,l),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(u,f,A),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Mu extends wt{constructor(e,t,n,s,r,a,o,c,l,h){e=e!==void 0?e:[],t=t!==void 0?t:Vi,super(e,t,n,s,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Qd extends pn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Mu(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:sn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Yt(5,5,5),r=new Bt({name:"CubemapFromEquirect",uniforms:ws(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:hn,blending:Qt});r.uniforms.tEquirect.value=t;const a=new rt(s,r),o=t.minFilter;return t.minFilter===Vn&&(t.minFilter=sn),new Nd(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,s){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}}const oo=new U,Od=new U,kd=new Je;class vi{constructor(e=new U(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=oo.subVectors(n,t).cross(Od.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(oo),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||kd.getNormalMatrix(e),s=this.coplanarPoint(oo).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Pi=new jn,zr=new U;class Qc{constructor(e=new vi,t=new vi,n=new vi,s=new vi,r=new vi,a=new vi){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=ci){const n=this.planes,s=e.elements,r=s[0],a=s[1],o=s[2],c=s[3],l=s[4],h=s[5],u=s[6],f=s[7],A=s[8],g=s[9],_=s[10],p=s[11],d=s[12],x=s[13],E=s[14],b=s[15];if(n[0].setComponents(c-r,f-l,p-A,b-d).normalize(),n[1].setComponents(c+r,f+l,p+A,b+d).normalize(),n[2].setComponents(c+a,f+h,p+g,b+x).normalize(),n[3].setComponents(c-a,f-h,p-g,b-x).normalize(),n[4].setComponents(c-o,f-u,p-_,b-E).normalize(),t===ci)n[5].setComponents(c+o,f+u,p+_,b+E).normalize();else if(t===xa)n[5].setComponents(o,u,_,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Pi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Pi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Pi)}intersectsSprite(e){return Pi.center.set(0,0,0),Pi.radius=.7071067811865476,Pi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Pi)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(zr.x=s.normal.x>0?e.max.x:e.min.x,zr.y=s.normal.y>0?e.max.y:e.min.y,zr.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(zr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Cu(){let i=null,e=!1,t=null,n=null;function s(r,a){t(r,a),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Gd(i){const e=new WeakMap;function t(o,c){const l=o.array,h=o.usage,u=l.byteLength,f=i.createBuffer();i.bindBuffer(c,f),i.bufferData(c,l,h),o.onUploadCallback();let A;if(l instanceof Float32Array)A=i.FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?A=i.HALF_FLOAT:A=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)A=i.SHORT;else if(l instanceof Uint32Array)A=i.UNSIGNED_INT;else if(l instanceof Int32Array)A=i.INT;else if(l instanceof Int8Array)A=i.BYTE;else if(l instanceof Uint8Array)A=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)A=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:A,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,c,l){const h=c.array,u=c.updateRanges;if(i.bindBuffer(l,o),u.length===0)i.bufferSubData(l,0,h);else{u.sort((A,g)=>A.start-g.start);let f=0;for(let A=1;A<u.length;A++){const g=u[f],_=u[A];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++f,u[f]=_)}u.length=f+1;for(let A=0,g=u.length;A<g;A++){const _=u[A];i.bufferSubData(l,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(i.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}class Ts extends bt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,a=t/2,o=Math.floor(n),c=Math.floor(s),l=o+1,h=c+1,u=e/o,f=t/c,A=[],g=[],_=[],p=[];for(let d=0;d<h;d++){const x=d*f-a;for(let E=0;E<l;E++){const b=E*u-r;g.push(b,-x,0),_.push(0,0,1),p.push(E/o),p.push(1-d/c)}}for(let d=0;d<c;d++)for(let x=0;x<o;x++){const E=x+l*d,b=x+l*(d+1),L=x+1+l*(d+1),B=x+1+l*d;A.push(E,b,B),A.push(b,L,B)}this.setIndex(A),this.setAttribute("position",new nt(g,3)),this.setAttribute("normal",new nt(_,3)),this.setAttribute("uv",new nt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ts(e.width,e.height,e.widthSegments,e.heightSegments)}}var zd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Hd=`#ifdef USE_ALPHAHASH
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
#endif`,Vd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Wd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,jd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,qd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Yd=`#ifdef USE_AOMAP
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
#endif`,Xd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Kd=`#ifdef USE_BATCHING
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
#endif`,Jd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Zd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,$d=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,eA=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,tA=`#ifdef USE_IRIDESCENCE
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
#endif`,nA=`#ifdef USE_BUMPMAP
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
#endif`,iA=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,sA=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,rA=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,aA=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,oA=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,cA=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,lA=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,hA=`#if defined( USE_COLOR_ALPHA )
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
#endif`,uA=`#define PI 3.141592653589793
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
} // validated`,fA=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,dA=`vec3 transformedNormal = objectNormal;
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
#endif`,AA=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,pA=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,gA=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,mA=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,bA="gl_FragColor = linearToOutputTexel( gl_FragColor );",_A=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,EA=`#ifdef USE_ENVMAP
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
#endif`,xA=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,vA=`#ifdef USE_ENVMAP
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
#endif`,yA=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,MA=`#ifdef USE_ENVMAP
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
#endif`,CA=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,SA=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,IA=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,wA=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,TA=`#ifdef USE_GRADIENTMAP
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
}`,BA=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,RA=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,DA=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,LA=`uniform bool receiveShadow;
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
#endif`,PA=`#ifdef USE_ENVMAP
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
#endif`,UA=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,FA=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,NA=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,QA=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,OA=`PhysicalMaterial material;
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
#endif`,kA=`struct PhysicalMaterial {
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
}`,GA=`
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
#endif`,zA=`#if defined( RE_IndirectDiffuse )
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
#endif`,HA=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,VA=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,WA=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,jA=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,qA=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,YA=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,XA=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,KA=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,JA=`#if defined( USE_POINTS_UV )
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
#endif`,ZA=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,$A=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ep=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,tp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,np=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ip=`#ifdef USE_MORPHTARGETS
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
#endif`,sp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,rp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,ap=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,op=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,lp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,hp=`#ifdef USE_NORMALMAP
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
#endif`,up=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,fp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,dp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ap=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,pp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,gp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,mp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,bp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,_p=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ep=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,xp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,vp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,yp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Mp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Cp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Sp=`float getShadowMask() {
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
}`,Ip=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,wp=`#ifdef USE_SKINNING
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
#endif`,Tp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Bp=`#ifdef USE_SKINNING
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
#endif`,Rp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Dp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Lp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Pp=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Up=`#ifdef USE_TRANSMISSION
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
#endif`,Fp=`#ifdef USE_TRANSMISSION
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
#endif`,Np=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Qp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Op=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,kp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Gp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,zp=`uniform sampler2D t2D;
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
}`,Hp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Vp=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Wp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qp=`#include <common>
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
}`,Yp=`#if DEPTH_PACKING == 3200
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
}`,Xp=`#define DISTANCE
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
}`,Kp=`#define DISTANCE
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
}`,Jp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Zp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$p=`uniform float scale;
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
}`,eg=`uniform vec3 diffuse;
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
}`,tg=`#include <common>
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
}`,ng=`uniform vec3 diffuse;
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
}`,ig=`#define LAMBERT
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
}`,sg=`#define LAMBERT
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
}`,rg=`#define MATCAP
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
}`,ag=`#define MATCAP
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
}`,og=`#define NORMAL
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
}`,cg=`#define NORMAL
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
}`,lg=`#define PHONG
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
}`,hg=`#define PHONG
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
}`,ug=`#define STANDARD
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
}`,fg=`#define STANDARD
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
}`,dg=`#define TOON
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
}`,Ag=`#define TOON
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
}`,pg=`uniform float size;
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
}`,gg=`uniform vec3 diffuse;
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
}`,mg=`#include <common>
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
}`,bg=`uniform vec3 color;
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
}`,_g=`uniform float rotation;
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
}`,Eg=`uniform vec3 diffuse;
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
}`,Ze={alphahash_fragment:zd,alphahash_pars_fragment:Hd,alphamap_fragment:Vd,alphamap_pars_fragment:Wd,alphatest_fragment:jd,alphatest_pars_fragment:qd,aomap_fragment:Yd,aomap_pars_fragment:Xd,batching_pars_vertex:Kd,batching_vertex:Jd,begin_vertex:Zd,beginnormal_vertex:$d,bsdfs:eA,iridescence_fragment:tA,bumpmap_pars_fragment:nA,clipping_planes_fragment:iA,clipping_planes_pars_fragment:sA,clipping_planes_pars_vertex:rA,clipping_planes_vertex:aA,color_fragment:oA,color_pars_fragment:cA,color_pars_vertex:lA,color_vertex:hA,common:uA,cube_uv_reflection_fragment:fA,defaultnormal_vertex:dA,displacementmap_pars_vertex:AA,displacementmap_vertex:pA,emissivemap_fragment:gA,emissivemap_pars_fragment:mA,colorspace_fragment:bA,colorspace_pars_fragment:_A,envmap_fragment:EA,envmap_common_pars_fragment:xA,envmap_pars_fragment:vA,envmap_pars_vertex:yA,envmap_physical_pars_fragment:PA,envmap_vertex:MA,fog_vertex:CA,fog_pars_vertex:SA,fog_fragment:IA,fog_pars_fragment:wA,gradientmap_pars_fragment:TA,lightmap_pars_fragment:BA,lights_lambert_fragment:RA,lights_lambert_pars_fragment:DA,lights_pars_begin:LA,lights_toon_fragment:UA,lights_toon_pars_fragment:FA,lights_phong_fragment:NA,lights_phong_pars_fragment:QA,lights_physical_fragment:OA,lights_physical_pars_fragment:kA,lights_fragment_begin:GA,lights_fragment_maps:zA,lights_fragment_end:HA,logdepthbuf_fragment:VA,logdepthbuf_pars_fragment:WA,logdepthbuf_pars_vertex:jA,logdepthbuf_vertex:qA,map_fragment:YA,map_pars_fragment:XA,map_particle_fragment:KA,map_particle_pars_fragment:JA,metalnessmap_fragment:ZA,metalnessmap_pars_fragment:$A,morphinstance_vertex:ep,morphcolor_vertex:tp,morphnormal_vertex:np,morphtarget_pars_vertex:ip,morphtarget_vertex:sp,normal_fragment_begin:rp,normal_fragment_maps:ap,normal_pars_fragment:op,normal_pars_vertex:cp,normal_vertex:lp,normalmap_pars_fragment:hp,clearcoat_normal_fragment_begin:up,clearcoat_normal_fragment_maps:fp,clearcoat_pars_fragment:dp,iridescence_pars_fragment:Ap,opaque_fragment:pp,packing:gp,premultiplied_alpha_fragment:mp,project_vertex:bp,dithering_fragment:_p,dithering_pars_fragment:Ep,roughnessmap_fragment:xp,roughnessmap_pars_fragment:vp,shadowmap_pars_fragment:yp,shadowmap_pars_vertex:Mp,shadowmap_vertex:Cp,shadowmask_pars_fragment:Sp,skinbase_vertex:Ip,skinning_pars_vertex:wp,skinning_vertex:Tp,skinnormal_vertex:Bp,specularmap_fragment:Rp,specularmap_pars_fragment:Dp,tonemapping_fragment:Lp,tonemapping_pars_fragment:Pp,transmission_fragment:Up,transmission_pars_fragment:Fp,uv_pars_fragment:Np,uv_pars_vertex:Qp,uv_vertex:Op,worldpos_vertex:kp,background_vert:Gp,background_frag:zp,backgroundCube_vert:Hp,backgroundCube_frag:Vp,cube_vert:Wp,cube_frag:jp,depth_vert:qp,depth_frag:Yp,distanceRGBA_vert:Xp,distanceRGBA_frag:Kp,equirect_vert:Jp,equirect_frag:Zp,linedashed_vert:$p,linedashed_frag:eg,meshbasic_vert:tg,meshbasic_frag:ng,meshlambert_vert:ig,meshlambert_frag:sg,meshmatcap_vert:rg,meshmatcap_frag:ag,meshnormal_vert:og,meshnormal_frag:cg,meshphong_vert:lg,meshphong_frag:hg,meshphysical_vert:ug,meshphysical_frag:fg,meshtoon_vert:dg,meshtoon_frag:Ag,points_vert:pg,points_frag:gg,shadow_vert:mg,shadow_frag:bg,sprite_vert:_g,sprite_frag:Eg},Be={common:{diffuse:{value:new Me(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Je}},envmap:{envMap:{value:null},envMapRotation:{value:new Je},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Je},normalScale:{value:new De(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Me(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Me(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0},uvTransform:{value:new Je}},sprite:{diffuse:{value:new Me(16777215)},opacity:{value:1},center:{value:new De(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}}},Gn={basic:{uniforms:en([Be.common,Be.specularmap,Be.envmap,Be.aomap,Be.lightmap,Be.fog]),vertexShader:Ze.meshbasic_vert,fragmentShader:Ze.meshbasic_frag},lambert:{uniforms:en([Be.common,Be.specularmap,Be.envmap,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.fog,Be.lights,{emissive:{value:new Me(0)}}]),vertexShader:Ze.meshlambert_vert,fragmentShader:Ze.meshlambert_frag},phong:{uniforms:en([Be.common,Be.specularmap,Be.envmap,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.fog,Be.lights,{emissive:{value:new Me(0)},specular:{value:new Me(1118481)},shininess:{value:30}}]),vertexShader:Ze.meshphong_vert,fragmentShader:Ze.meshphong_frag},standard:{uniforms:en([Be.common,Be.envmap,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.roughnessmap,Be.metalnessmap,Be.fog,Be.lights,{emissive:{value:new Me(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag},toon:{uniforms:en([Be.common,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.gradientmap,Be.fog,Be.lights,{emissive:{value:new Me(0)}}]),vertexShader:Ze.meshtoon_vert,fragmentShader:Ze.meshtoon_frag},matcap:{uniforms:en([Be.common,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.fog,{matcap:{value:null}}]),vertexShader:Ze.meshmatcap_vert,fragmentShader:Ze.meshmatcap_frag},points:{uniforms:en([Be.points,Be.fog]),vertexShader:Ze.points_vert,fragmentShader:Ze.points_frag},dashed:{uniforms:en([Be.common,Be.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ze.linedashed_vert,fragmentShader:Ze.linedashed_frag},depth:{uniforms:en([Be.common,Be.displacementmap]),vertexShader:Ze.depth_vert,fragmentShader:Ze.depth_frag},normal:{uniforms:en([Be.common,Be.bumpmap,Be.normalmap,Be.displacementmap,{opacity:{value:1}}]),vertexShader:Ze.meshnormal_vert,fragmentShader:Ze.meshnormal_frag},sprite:{uniforms:en([Be.sprite,Be.fog]),vertexShader:Ze.sprite_vert,fragmentShader:Ze.sprite_frag},background:{uniforms:{uvTransform:{value:new Je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ze.background_vert,fragmentShader:Ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Je}},vertexShader:Ze.backgroundCube_vert,fragmentShader:Ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ze.cube_vert,fragmentShader:Ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ze.equirect_vert,fragmentShader:Ze.equirect_frag},distanceRGBA:{uniforms:en([Be.common,Be.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ze.distanceRGBA_vert,fragmentShader:Ze.distanceRGBA_frag},shadow:{uniforms:en([Be.lights,Be.fog,{color:{value:new Me(0)},opacity:{value:1}}]),vertexShader:Ze.shadow_vert,fragmentShader:Ze.shadow_frag}};Gn.physical={uniforms:en([Gn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Je},clearcoatNormalScale:{value:new De(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Je},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Je},sheen:{value:0},sheenColor:{value:new Me(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Je},transmissionSamplerSize:{value:new De},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Je},attenuationDistance:{value:0},attenuationColor:{value:new Me(0)},specularColor:{value:new Me(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Je},anisotropyVector:{value:new De},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Je}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag};const Hr={r:0,b:0,g:0},Ui=new Cn,xg=new Qe;function vg(i,e,t,n,s,r,a){const o=new Me(0);let c=r===!0?0:1,l,h,u=null,f=0,A=null;function g(x){let E=x.isScene===!0?x.background:null;return E&&E.isTexture&&(E=(x.backgroundBlurriness>0?t:e).get(E)),E}function _(x){let E=!1;const b=g(x);b===null?d(o,c):b&&b.isColor&&(d(b,1),E=!0);const L=i.xr.getEnvironmentBlendMode();L==="additive"?n.buffers.color.setClear(0,0,0,1,a):L==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||E)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function p(x,E){const b=g(E);b&&(b.isCubeTexture||b.mapping===wa)?(h===void 0&&(h=new rt(new Yt(1,1,1),new Bt({name:"BackgroundCubeMaterial",uniforms:ws(Gn.backgroundCube.uniforms),vertexShader:Gn.backgroundCube.vertexShader,fragmentShader:Gn.backgroundCube.fragmentShader,side:hn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(L,B,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Ui.copy(E.backgroundRotation),Ui.x*=-1,Ui.y*=-1,Ui.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Ui.y*=-1,Ui.z*=-1),h.material.uniforms.envMap.value=b,h.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(xg.makeRotationFromEuler(Ui)),h.material.toneMapped=et.getTransfer(b.colorSpace)!==ht,(u!==b||f!==b.version||A!==i.toneMapping)&&(h.material.needsUpdate=!0,u=b,f=b.version,A=i.toneMapping),h.layers.enableAll(),x.unshift(h,h.geometry,h.material,0,0,null)):b&&b.isTexture&&(l===void 0&&(l=new rt(new Ts(2,2),new Bt({name:"BackgroundMaterial",uniforms:ws(Gn.background.uniforms),vertexShader:Gn.background.vertexShader,fragmentShader:Gn.background.fragmentShader,side:Nn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=b,l.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,l.material.toneMapped=et.getTransfer(b.colorSpace)!==ht,b.matrixAutoUpdate===!0&&b.updateMatrix(),l.material.uniforms.uvTransform.value.copy(b.matrix),(u!==b||f!==b.version||A!==i.toneMapping)&&(l.material.needsUpdate=!0,u=b,f=b.version,A=i.toneMapping),l.layers.enableAll(),x.unshift(l,l.geometry,l.material,0,0,null))}function d(x,E){x.getRGB(Hr,vu(i)),n.buffers.color.setClear(Hr.r,Hr.g,Hr.b,E,a)}return{getClearColor:function(){return o},setClearColor:function(x,E=1){o.set(x),c=E,d(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(x){c=x,d(o,c)},render:_,addToRenderList:p}}function yg(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null);let r=s,a=!1;function o(y,T,j,V,he){let fe=!1;const ae=u(V,j,T);r!==ae&&(r=ae,l(r.object)),fe=A(y,V,j,he),fe&&g(y,V,j,he),he!==null&&e.update(he,i.ELEMENT_ARRAY_BUFFER),(fe||a)&&(a=!1,b(y,T,j,V),he!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(he).buffer))}function c(){return i.createVertexArray()}function l(y){return i.bindVertexArray(y)}function h(y){return i.deleteVertexArray(y)}function u(y,T,j){const V=j.wireframe===!0;let he=n[y.id];he===void 0&&(he={},n[y.id]=he);let fe=he[T.id];fe===void 0&&(fe={},he[T.id]=fe);let ae=fe[V];return ae===void 0&&(ae=f(c()),fe[V]=ae),ae}function f(y){const T=[],j=[],V=[];for(let he=0;he<t;he++)T[he]=0,j[he]=0,V[he]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:T,enabledAttributes:j,attributeDivisors:V,object:y,attributes:{},index:null}}function A(y,T,j,V){const he=r.attributes,fe=T.attributes;let ae=0;const se=j.getAttributes();for(const te in se)if(se[te].location>=0){const ie=he[te];let me=fe[te];if(me===void 0&&(te==="instanceMatrix"&&y.instanceMatrix&&(me=y.instanceMatrix),te==="instanceColor"&&y.instanceColor&&(me=y.instanceColor)),ie===void 0||ie.attribute!==me||me&&ie.data!==me.data)return!0;ae++}return r.attributesNum!==ae||r.index!==V}function g(y,T,j,V){const he={},fe=T.attributes;let ae=0;const se=j.getAttributes();for(const te in se)if(se[te].location>=0){let ie=fe[te];ie===void 0&&(te==="instanceMatrix"&&y.instanceMatrix&&(ie=y.instanceMatrix),te==="instanceColor"&&y.instanceColor&&(ie=y.instanceColor));const me={};me.attribute=ie,ie&&ie.data&&(me.data=ie.data),he[te]=me,ae++}r.attributes=he,r.attributesNum=ae,r.index=V}function _(){const y=r.newAttributes;for(let T=0,j=y.length;T<j;T++)y[T]=0}function p(y){d(y,0)}function d(y,T){const j=r.newAttributes,V=r.enabledAttributes,he=r.attributeDivisors;j[y]=1,V[y]===0&&(i.enableVertexAttribArray(y),V[y]=1),he[y]!==T&&(i.vertexAttribDivisor(y,T),he[y]=T)}function x(){const y=r.newAttributes,T=r.enabledAttributes;for(let j=0,V=T.length;j<V;j++)T[j]!==y[j]&&(i.disableVertexAttribArray(j),T[j]=0)}function E(y,T,j,V,he,fe,ae){ae===!0?i.vertexAttribIPointer(y,T,j,he,fe):i.vertexAttribPointer(y,T,j,V,he,fe)}function b(y,T,j,V){_();const he=V.attributes,fe=j.getAttributes(),ae=T.defaultAttributeValues;for(const se in fe){const te=fe[se];if(te.location>=0){let ge=he[se];if(ge===void 0&&(se==="instanceMatrix"&&y.instanceMatrix&&(ge=y.instanceMatrix),se==="instanceColor"&&y.instanceColor&&(ge=y.instanceColor)),ge!==void 0){const ie=ge.normalized,me=ge.itemSize,xe=e.get(ge);if(xe===void 0)continue;const ve=xe.buffer,Y=xe.type,de=xe.bytesPerElement,Ce=Y===i.INT||Y===i.UNSIGNED_INT||ge.gpuType===Rc;if(ge.isInterleavedBufferAttribute){const v=ge.data,P=v.stride,q=ge.offset;if(v.isInstancedInterleavedBuffer){for(let k=0;k<te.locationSize;k++)d(te.location+k,v.meshPerAttribute);y.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=v.meshPerAttribute*v.count)}else for(let k=0;k<te.locationSize;k++)p(te.location+k);i.bindBuffer(i.ARRAY_BUFFER,ve);for(let k=0;k<te.locationSize;k++)E(te.location+k,me/te.locationSize,Y,ie,P*de,(q+me/te.locationSize*k)*de,Ce)}else{if(ge.isInstancedBufferAttribute){for(let v=0;v<te.locationSize;v++)d(te.location+v,ge.meshPerAttribute);y.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=ge.meshPerAttribute*ge.count)}else for(let v=0;v<te.locationSize;v++)p(te.location+v);i.bindBuffer(i.ARRAY_BUFFER,ve);for(let v=0;v<te.locationSize;v++)E(te.location+v,me/te.locationSize,Y,ie,me*de,me/te.locationSize*v*de,Ce)}}else if(ae!==void 0){const ie=ae[se];if(ie!==void 0)switch(ie.length){case 2:i.vertexAttrib2fv(te.location,ie);break;case 3:i.vertexAttrib3fv(te.location,ie);break;case 4:i.vertexAttrib4fv(te.location,ie);break;default:i.vertexAttrib1fv(te.location,ie)}}}}x()}function L(){D();for(const y in n){const T=n[y];for(const j in T){const V=T[j];for(const he in V)h(V[he].object),delete V[he];delete T[j]}delete n[y]}}function B(y){if(n[y.id]===void 0)return;const T=n[y.id];for(const j in T){const V=T[j];for(const he in V)h(V[he].object),delete V[he];delete T[j]}delete n[y.id]}function w(y){for(const T in n){const j=n[T];if(j[y.id]===void 0)continue;const V=j[y.id];for(const he in V)h(V[he].object),delete V[he];delete j[y.id]}}function D(){M(),a=!0,r!==s&&(r=s,l(r.object))}function M(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:D,resetDefaultState:M,dispose:L,releaseStatesOfGeometry:B,releaseStatesOfProgram:w,initAttributes:_,enableAttribute:p,disableUnusedAttributes:x}}function Mg(i,e,t){let n;function s(l){n=l}function r(l,h){i.drawArrays(n,l,h),t.update(h,n,1)}function a(l,h,u){u!==0&&(i.drawArraysInstanced(n,l,h,u),t.update(h,n,u))}function o(l,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let A=0;for(let g=0;g<u;g++)A+=h[g];t.update(A,n,1)}function c(l,h,u,f){if(u===0)return;const A=e.get("WEBGL_multi_draw");if(A===null)for(let g=0;g<l.length;g++)a(l[g],h[g],f[g]);else{A.multiDrawArraysInstancedWEBGL(n,l,0,h,0,f,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_]*f[_];t.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function Cg(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(w){return!(w!==Pt&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(w){const D=w===Gt&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==Lt&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==Kt&&!D)}function c(w){if(w==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const u=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),A=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),x=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),E=i.getParameter(i.MAX_VARYING_VECTORS),b=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),L=g>0,B=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:u,reverseDepthBuffer:f,maxTextures:A,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:p,maxAttributes:d,maxVertexUniforms:x,maxVaryings:E,maxFragmentUniforms:b,vertexTextures:L,maxSamples:B}}function Sg(i){const e=this;let t=null,n=0,s=!1,r=!1;const a=new vi,o=new Je,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const A=u.length!==0||f||n!==0||s;return s=f,n=u.length,A},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){t=h(u,f,0)},this.setState=function(u,f,A){const g=u.clippingPlanes,_=u.clipIntersection,p=u.clipShadows,d=i.get(u);if(!s||g===null||g.length===0||r&&!p)r?h(null):l();else{const x=r?0:n,E=x*4;let b=d.clippingState||null;c.value=b,b=h(g,f,E,A);for(let L=0;L!==E;++L)b[L]=t[L];d.clippingState=b,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=x}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,f,A,g){const _=u!==null?u.length:0;let p=null;if(_!==0){if(p=c.value,g!==!0||p===null){const d=A+_*4,x=f.matrixWorldInverse;o.getNormalMatrix(x),(p===null||p.length<d)&&(p=new Float32Array(d));for(let E=0,b=A;E!==_;++E,b+=4)a.copy(u[E]).applyMatrix4(x,o),a.normal.toArray(p,b),p[b+3]=a.constant}c.value=p,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,p}}function Ig(i){let e=new WeakMap;function t(a,o){return o===qo?a.mapping=Vi:o===Yo&&(a.mapping=Ss),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===qo||o===Yo)if(e.has(a)){const c=e.get(a).texture;return t(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new Qd(c.height);return l.fromEquirectangularTexture(i,a),e.set(a,l),a.addEventListener("dispose",s),t(l.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class Ra extends yu{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=s+t,c=s-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const _s=4,Ul=[.125,.215,.35,.446,.526,.582],Oi=20,co=new Ra,Fl=new Me;let lo=null,ho=0,uo=0,fo=!1;const Qi=(1+Math.sqrt(5))/2,As=1/Qi,Nl=[new U(-Qi,As,0),new U(Qi,As,0),new U(-As,0,Qi),new U(As,0,Qi),new U(0,Qi,-As),new U(0,Qi,As),new U(-1,1,-1),new U(1,1,-1),new U(-1,1,1),new U(1,1,1)];class Ql{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){lo=this._renderer.getRenderTarget(),ho=this._renderer.getActiveCubeFace(),uo=this._renderer.getActiveMipmapLevel(),fo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Gl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=kl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(lo,ho,uo),this._renderer.xr.enabled=fo,e.scissorTest=!1,Vr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Vi||e.mapping===Ss?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),lo=this._renderer.getRenderTarget(),ho=this._renderer.getActiveCubeFace(),uo=this._renderer.getActiveMipmapLevel(),fo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:sn,minFilter:sn,generateMipmaps:!1,type:Gt,format:Pt,colorSpace:Jt,depthBuffer:!1},s=Ol(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ol(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=wg(r)),this._blurMaterial=Tg(r,e,t)}return s}_compileMaterial(e){const t=new rt(this._lodPlanes[0],e);this._renderer.compile(t,co)}_sceneToCubeUV(e,t,n,s){const o=new tn(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(Fl),h.toneMapping=Ti,h.autoClear=!1;const A=new Si({name:"PMREM.Background",side:hn,depthWrite:!1,depthTest:!1}),g=new rt(new Yt,A);let _=!1;const p=e.background;p?p.isColor&&(A.color.copy(p),e.background=null,_=!0):(A.color.copy(Fl),_=!0);for(let d=0;d<6;d++){const x=d%3;x===0?(o.up.set(0,c[d],0),o.lookAt(l[d],0,0)):x===1?(o.up.set(0,0,c[d]),o.lookAt(0,l[d],0)):(o.up.set(0,c[d],0),o.lookAt(0,0,l[d]));const E=this._cubeSize;Vr(s,x*E,d>2?E:0,E,E),h.setRenderTarget(s),_&&h.render(g,o),h.render(e,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=f,h.autoClear=u,e.background=p}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===Vi||e.mapping===Ss;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Gl()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=kl());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new rt(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;const c=this._cubeSize;Vr(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,co)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Nl[(s-r-1)%Nl.length];this._blur(e,r-1,r,a,o)}t.autoClear=n}_blur(e,t,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,s,"latitudinal",r),this._halfBlur(a,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new rt(this._lodPlanes[s],l),f=l.uniforms,A=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*A):2*Math.PI/(2*Oi-1),_=r/g,p=isFinite(r)?1+Math.floor(h*_):Oi;p>Oi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Oi}`);const d=[];let x=0;for(let w=0;w<Oi;++w){const D=w/_,M=Math.exp(-D*D/2);d.push(M),w===0?x+=M:w<p&&(x+=2*M)}for(let w=0;w<d.length;w++)d[w]=d[w]/x;f.envMap.value=e.texture,f.samples.value=p,f.weights.value=d,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:E}=this;f.dTheta.value=g,f.mipInt.value=E-n;const b=this._sizeLods[s],L=3*b*(s>E-_s?s-E+_s:0),B=4*(this._cubeSize-b);Vr(t,L,B,3*b,2*b),c.setRenderTarget(t),c.render(u,co)}}function wg(i){const e=[],t=[],n=[];let s=i;const r=i-_s+1+Ul.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);t.push(o);let c=1/o;a>i-_s?c=Ul[a-i+_s-1]:a===0&&(c=0),n.push(c);const l=1/(o-2),h=-l,u=1+l,f=[h,h,u,h,u,u,h,h,u,u,h,u],A=6,g=6,_=3,p=2,d=1,x=new Float32Array(_*g*A),E=new Float32Array(p*g*A),b=new Float32Array(d*g*A);for(let B=0;B<A;B++){const w=B%3*2/3-1,D=B>2?0:-1,M=[w,D,0,w+2/3,D,0,w+2/3,D+1,0,w,D,0,w+2/3,D+1,0,w,D+1,0];x.set(M,_*g*B),E.set(f,p*g*B);const y=[B,B,B,B,B,B];b.set(y,d*g*B)}const L=new bt;L.setAttribute("position",new Mt(x,_)),L.setAttribute("uv",new Mt(E,p)),L.setAttribute("faceIndex",new Mt(b,d)),e.push(L),s>_s&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Ol(i,e,t){const n=new pn(i,e,t);return n.texture.mapping=wa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Vr(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Tg(i,e,t){const n=new Float32Array(Oi),s=new U(0,1,0);return new Bt({name:"SphericalGaussianBlur",defines:{n:Oi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Oc(),fragmentShader:`

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
		`,blending:Qt,depthTest:!1,depthWrite:!1})}function kl(){return new Bt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Oc(),fragmentShader:`

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
		`,blending:Qt,depthTest:!1,depthWrite:!1})}function Gl(){return new Bt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Oc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Qt,depthTest:!1,depthWrite:!1})}function Oc(){return`

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
	`}function Bg(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const c=o.mapping,l=c===qo||c===Yo,h=c===Vi||c===Ss;if(l||h){let u=e.get(o);const f=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return t===null&&(t=new Ql(i)),u=l?t.fromEquirectangular(o,u):t.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),u.texture;if(u!==void 0)return u.texture;{const A=o.image;return l&&A&&A.height>0||h&&A&&s(A)?(t===null&&(t=new Ql(i)),u=l?t.fromEquirectangular(o):t.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function s(o){let c=0;const l=6;for(let h=0;h<l;h++)o[h]!==void 0&&c++;return c===l}function r(o){const c=o.target;c.removeEventListener("dispose",r);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function Rg(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&Zs("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Dg(i,e,t,n){const s={},r=new WeakMap;function a(u){const f=u.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);for(const g in f.morphAttributes){const _=f.morphAttributes[g];for(let p=0,d=_.length;p<d;p++)e.remove(_[p])}f.removeEventListener("dispose",a),delete s[f.id];const A=r.get(f);A&&(e.remove(A),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(u,f){return s[f.id]===!0||(f.addEventListener("dispose",a),s[f.id]=!0,t.memory.geometries++),f}function c(u){const f=u.attributes;for(const g in f)e.update(f[g],i.ARRAY_BUFFER);const A=u.morphAttributes;for(const g in A){const _=A[g];for(let p=0,d=_.length;p<d;p++)e.update(_[p],i.ARRAY_BUFFER)}}function l(u){const f=[],A=u.index,g=u.attributes.position;let _=0;if(A!==null){const x=A.array;_=A.version;for(let E=0,b=x.length;E<b;E+=3){const L=x[E+0],B=x[E+1],w=x[E+2];f.push(L,B,B,w,w,L)}}else if(g!==void 0){const x=g.array;_=g.version;for(let E=0,b=x.length/3-1;E<b;E+=3){const L=E+0,B=E+1,w=E+2;f.push(L,B,B,w,w,L)}}else return;const p=new(Au(f)?xu:Eu)(f,1);p.version=_;const d=r.get(u);d&&e.remove(d),r.set(u,p)}function h(u){const f=r.get(u);if(f){const A=u.index;A!==null&&f.version<A.version&&l(u)}else l(u);return r.get(u)}return{get:o,update:c,getWireframeAttribute:h}}function Lg(i,e,t){let n;function s(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function c(f,A){i.drawElements(n,A,r,f*a),t.update(A,n,1)}function l(f,A,g){g!==0&&(i.drawElementsInstanced(n,A,r,f*a,g),t.update(A,n,g))}function h(f,A,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,A,0,r,f,0,g);let p=0;for(let d=0;d<g;d++)p+=A[d];t.update(p,n,1)}function u(f,A,g,_){if(g===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let d=0;d<f.length;d++)l(f[d]/a,A[d],_[d]);else{p.multiDrawElementsInstancedWEBGL(n,A,0,r,f,0,_,0,g);let d=0;for(let x=0;x<g;x++)d+=A[x]*_[x];t.update(d,n,1)}}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Pg(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Ug(i,e,t){const n=new WeakMap,s=new at;function r(a,o,c){const l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let f=n.get(o);if(f===void 0||f.count!==u){let y=function(){D.dispose(),n.delete(o),o.removeEventListener("dispose",y)};var A=y;f!==void 0&&f.texture.dispose();const g=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,p=o.morphAttributes.color!==void 0,d=o.morphAttributes.position||[],x=o.morphAttributes.normal||[],E=o.morphAttributes.color||[];let b=0;g===!0&&(b=1),_===!0&&(b=2),p===!0&&(b=3);let L=o.attributes.position.count*b,B=1;L>e.maxTextureSize&&(B=Math.ceil(L/e.maxTextureSize),L=e.maxTextureSize);const w=new Float32Array(L*B*4*u),D=new gu(w,L,B,u);D.type=Kt,D.needsUpdate=!0;const M=b*4;for(let T=0;T<u;T++){const j=d[T],V=x[T],he=E[T],fe=L*B*4*T;for(let ae=0;ae<j.count;ae++){const se=ae*M;g===!0&&(s.fromBufferAttribute(j,ae),w[fe+se+0]=s.x,w[fe+se+1]=s.y,w[fe+se+2]=s.z,w[fe+se+3]=0),_===!0&&(s.fromBufferAttribute(V,ae),w[fe+se+4]=s.x,w[fe+se+5]=s.y,w[fe+se+6]=s.z,w[fe+se+7]=0),p===!0&&(s.fromBufferAttribute(he,ae),w[fe+se+8]=s.x,w[fe+se+9]=s.y,w[fe+se+10]=s.z,w[fe+se+11]=he.itemSize===4?s.w:1)}}f={count:u,texture:D,size:new De(L,B)},n.set(o,f),o.addEventListener("dispose",y)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let g=0;for(let p=0;p<l.length;p++)g+=l[p];const _=o.morphTargetsRelative?1:1-g;c.getUniforms().setValue(i,"morphTargetBaseInfluence",_),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function Fg(i,e,t,n){let s=new WeakMap;function r(c){const l=n.render.frame,h=c.geometry,u=e.get(c,h);if(s.get(u)!==l&&(e.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),s.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const f=c.skeleton;s.get(f)!==l&&(f.update(),s.set(f,l))}return u}function a(){s=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:a}}class kc extends wt{constructor(e,t,n,s,r,a,o,c,l,h=vs){if(h!==vs&&h!==qi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===vs&&(n=Wi),n===void 0&&h===qi&&(n=ji),super(null,s,r,a,o,c,h,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Ht,this.minFilter=c!==void 0?c:Ht,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Su=new wt,zl=new kc(1,1),Iu=new gu,wu=new mu,Tu=new Mu,Hl=[],Vl=[],Wl=new Float32Array(16),jl=new Float32Array(9),ql=new Float32Array(4);function Ps(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=Hl[s];if(r===void 0&&(r=new Float32Array(s),Hl[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function Ut(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Ft(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Da(i,e){let t=Vl[e];t===void 0&&(t=new Int32Array(e),Vl[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Ng(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Qg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ut(t,e))return;i.uniform2fv(this.addr,e),Ft(t,e)}}function Og(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ut(t,e))return;i.uniform3fv(this.addr,e),Ft(t,e)}}function kg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ut(t,e))return;i.uniform4fv(this.addr,e),Ft(t,e)}}function Gg(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ut(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Ft(t,e)}else{if(Ut(t,n))return;ql.set(n),i.uniformMatrix2fv(this.addr,!1,ql),Ft(t,n)}}function zg(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ut(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Ft(t,e)}else{if(Ut(t,n))return;jl.set(n),i.uniformMatrix3fv(this.addr,!1,jl),Ft(t,n)}}function Hg(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ut(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Ft(t,e)}else{if(Ut(t,n))return;Wl.set(n),i.uniformMatrix4fv(this.addr,!1,Wl),Ft(t,n)}}function Vg(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Wg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ut(t,e))return;i.uniform2iv(this.addr,e),Ft(t,e)}}function jg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ut(t,e))return;i.uniform3iv(this.addr,e),Ft(t,e)}}function qg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ut(t,e))return;i.uniform4iv(this.addr,e),Ft(t,e)}}function Yg(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Xg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ut(t,e))return;i.uniform2uiv(this.addr,e),Ft(t,e)}}function Kg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ut(t,e))return;i.uniform3uiv(this.addr,e),Ft(t,e)}}function Jg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ut(t,e))return;i.uniform4uiv(this.addr,e),Ft(t,e)}}function Zg(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(zl.compareFunction=du,r=zl):r=Su,t.setTexture2D(e||r,s)}function $g(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||wu,s)}function em(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Tu,s)}function tm(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Iu,s)}function nm(i){switch(i){case 5126:return Ng;case 35664:return Qg;case 35665:return Og;case 35666:return kg;case 35674:return Gg;case 35675:return zg;case 35676:return Hg;case 5124:case 35670:return Vg;case 35667:case 35671:return Wg;case 35668:case 35672:return jg;case 35669:case 35673:return qg;case 5125:return Yg;case 36294:return Xg;case 36295:return Kg;case 36296:return Jg;case 35678:case 36198:case 36298:case 36306:case 35682:return Zg;case 35679:case 36299:case 36307:return $g;case 35680:case 36300:case 36308:case 36293:return em;case 36289:case 36303:case 36311:case 36292:return tm}}function im(i,e){i.uniform1fv(this.addr,e)}function sm(i,e){const t=Ps(e,this.size,2);i.uniform2fv(this.addr,t)}function rm(i,e){const t=Ps(e,this.size,3);i.uniform3fv(this.addr,t)}function am(i,e){const t=Ps(e,this.size,4);i.uniform4fv(this.addr,t)}function om(i,e){const t=Ps(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function cm(i,e){const t=Ps(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function lm(i,e){const t=Ps(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function hm(i,e){i.uniform1iv(this.addr,e)}function um(i,e){i.uniform2iv(this.addr,e)}function fm(i,e){i.uniform3iv(this.addr,e)}function dm(i,e){i.uniform4iv(this.addr,e)}function Am(i,e){i.uniform1uiv(this.addr,e)}function pm(i,e){i.uniform2uiv(this.addr,e)}function gm(i,e){i.uniform3uiv(this.addr,e)}function mm(i,e){i.uniform4uiv(this.addr,e)}function bm(i,e,t){const n=this.cache,s=e.length,r=Da(t,s);Ut(n,r)||(i.uniform1iv(this.addr,r),Ft(n,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||Su,r[a])}function _m(i,e,t){const n=this.cache,s=e.length,r=Da(t,s);Ut(n,r)||(i.uniform1iv(this.addr,r),Ft(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||wu,r[a])}function Em(i,e,t){const n=this.cache,s=e.length,r=Da(t,s);Ut(n,r)||(i.uniform1iv(this.addr,r),Ft(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||Tu,r[a])}function xm(i,e,t){const n=this.cache,s=e.length,r=Da(t,s);Ut(n,r)||(i.uniform1iv(this.addr,r),Ft(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Iu,r[a])}function vm(i){switch(i){case 5126:return im;case 35664:return sm;case 35665:return rm;case 35666:return am;case 35674:return om;case 35675:return cm;case 35676:return lm;case 5124:case 35670:return hm;case 35667:case 35671:return um;case 35668:case 35672:return fm;case 35669:case 35673:return dm;case 5125:return Am;case 36294:return pm;case 36295:return gm;case 36296:return mm;case 35678:case 36198:case 36298:case 36306:case 35682:return bm;case 35679:case 36299:case 36307:return _m;case 35680:case 36300:case 36308:case 36293:return Em;case 36289:case 36303:case 36311:case 36292:return xm}}class ym{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=nm(t.type)}}class Mm{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=vm(t.type)}}class Cm{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(e,t[o.id],n)}}}const Ao=/(\w+)(\])?(\[|\.)?/g;function Yl(i,e){i.seq.push(e),i.map[e.id]=e}function Sm(i,e,t){const n=i.name,s=n.length;for(Ao.lastIndex=0;;){const r=Ao.exec(n),a=Ao.lastIndex;let o=r[1];const c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){Yl(t,l===void 0?new ym(o,i,e):new Mm(o,i,e));break}else{let u=t.map[o];u===void 0&&(u=new Cm(o),Yl(t,u)),t=u}}}class ua{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);Sm(r,a,this)}}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){const o=t[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in t&&n.push(a)}return n}}function Xl(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const Im=37297;let wm=0;function Tm(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const Kl=new Je;function Bm(i){et._getMatrix(Kl,et.workingColorSpace,i);const e=`mat3( ${Kl.elements.map(t=>t.toFixed(4))} )`;switch(et.getTransfer(i)){case Ba:return[e,"LinearTransferOETF"];case ht:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Jl(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+Tm(i.getShaderSource(e),a)}else return s}function Rm(i,e){const t=Bm(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Dm(i,e){let t;switch(e){case Zh:t="Linear";break;case $h:t="Reinhard";break;case eu:t="Cineon";break;case Tc:t="ACESFilmic";break;case Bc:t="AgX";break;case tu:t="Neutral";break;case kf:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Wr=new U;function Lm(){et.getLuminanceCoefficients(Wr);const i=Wr.x.toFixed(4),e=Wr.y.toFixed(4),t=Wr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Pm(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter($s).join(`
`)}function Um(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Fm(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function $s(i){return i!==""}function Zl(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function $l(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Nm=/^[ \t]*#include +<([\w\d./]+)>/gm;function pc(i){return i.replace(Nm,Om)}const Qm=new Map;function Om(i,e){let t=Ze[e];if(t===void 0){const n=Qm.get(e);if(n!==void 0)t=Ze[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return pc(t)}const km=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function eh(i){return i.replace(km,Gm)}function Gm(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function th(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function zm(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Ic?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Kh?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===ii&&(e="SHADOWMAP_TYPE_VSM"),e}function Hm(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Vi:case Ss:e="ENVMAP_TYPE_CUBE";break;case wa:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Vm(i){let e="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===Ss&&(e="ENVMAP_MODE_REFRACTION"),e}function Wm(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case wc:e="ENVMAP_BLENDING_MULTIPLY";break;case Qf:e="ENVMAP_BLENDING_MIX";break;case Of:e="ENVMAP_BLENDING_ADD";break}return e}function jm(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function qm(i,e,t,n){const s=i.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const c=zm(t),l=Hm(t),h=Vm(t),u=Wm(t),f=jm(t),A=Pm(t),g=Um(r),_=s.createProgram();let p,d,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter($s).join(`
`),p.length>0&&(p+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter($s).join(`
`),d.length>0&&(d+=`
`)):(p=[th(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter($s).join(`
`),d=[th(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ti?"#define TONE_MAPPING":"",t.toneMapping!==Ti?Ze.tonemapping_pars_fragment:"",t.toneMapping!==Ti?Dm("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ze.colorspace_pars_fragment,Rm("linearToOutputTexel",t.outputColorSpace),Lm(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter($s).join(`
`)),a=pc(a),a=Zl(a,t),a=$l(a,t),o=pc(o),o=Zl(o,t),o=$l(o,t),a=eh(a),o=eh(o),t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,p=[A,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,d=["#define varying in",t.glslVersion===dl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===dl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const E=x+p+a,b=x+d+o,L=Xl(s,s.VERTEX_SHADER,E),B=Xl(s,s.FRAGMENT_SHADER,b);s.attachShader(_,L),s.attachShader(_,B),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function w(T){if(i.debug.checkShaderErrors){const j=s.getProgramInfoLog(_).trim(),V=s.getShaderInfoLog(L).trim(),he=s.getShaderInfoLog(B).trim();let fe=!0,ae=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(fe=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,L,B);else{const se=Jl(s,L,"vertex"),te=Jl(s,B,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+T.name+`
Material Type: `+T.type+`

Program Info Log: `+j+`
`+se+`
`+te)}else j!==""?console.warn("THREE.WebGLProgram: Program Info Log:",j):(V===""||he==="")&&(ae=!1);ae&&(T.diagnostics={runnable:fe,programLog:j,vertexShader:{log:V,prefix:p},fragmentShader:{log:he,prefix:d}})}s.deleteShader(L),s.deleteShader(B),D=new ua(s,_),M=Fm(s,_)}let D;this.getUniforms=function(){return D===void 0&&w(this),D};let M;this.getAttributes=function(){return M===void 0&&w(this),M};let y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=s.getProgramParameter(_,Im)),y},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=wm++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=L,this.fragmentShader=B,this}let Ym=0;class Xm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Km(e),t.set(e,n)),n}}class Km{constructor(e){this.id=Ym++,this.code=e,this.usedTimes=0}}function Jm(i,e,t,n,s,r,a){const o=new bu,c=new Xm,l=new Set,h=[],u=s.logarithmicDepthBuffer,f=s.vertexTextures;let A=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(M){return l.add(M),M===0?"uv":`uv${M}`}function p(M,y,T,j,V){const he=j.fog,fe=V.geometry,ae=M.isMeshStandardMaterial?j.environment:null,se=(M.isMeshStandardMaterial?t:e).get(M.envMap||ae),te=se&&se.mapping===wa?se.image.height:null,ge=g[M.type];M.precision!==null&&(A=s.getMaxPrecision(M.precision),A!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",A,"instead."));const ie=fe.morphAttributes.position||fe.morphAttributes.normal||fe.morphAttributes.color,me=ie!==void 0?ie.length:0;let xe=0;fe.morphAttributes.position!==void 0&&(xe=1),fe.morphAttributes.normal!==void 0&&(xe=2),fe.morphAttributes.color!==void 0&&(xe=3);let ve,Y,de,Ce;if(ge){const lt=Gn[ge];ve=lt.vertexShader,Y=lt.fragmentShader}else ve=M.vertexShader,Y=M.fragmentShader,c.update(M),de=c.getVertexShaderID(M),Ce=c.getFragmentShaderID(M);const v=i.getRenderTarget(),P=i.state.buffers.depth.getReversed(),q=V.isInstancedMesh===!0,k=V.isBatchedMesh===!0,K=!!M.map,X=!!M.matcap,ce=!!se,R=!!M.aoMap,be=!!M.lightMap,ne=!!M.bumpMap,oe=!!M.normalMap,W=!!M.displacementMap,re=!!M.emissiveMap,O=!!M.metalnessMap,C=!!M.roughnessMap,m=M.anisotropy>0,S=M.clearcoat>0,F=M.dispersion>0,Q=M.iridescence>0,N=M.sheen>0,G=M.transmission>0,H=m&&!!M.anisotropyMap,$=S&&!!M.clearcoatMap,_e=S&&!!M.clearcoatNormalMap,J=S&&!!M.clearcoatRoughnessMap,pe=Q&&!!M.iridescenceMap,Se=Q&&!!M.iridescenceThicknessMap,we=N&&!!M.sheenColorMap,ye=N&&!!M.sheenRoughnessMap,Ue=!!M.specularMap,Fe=!!M.specularColorMap,qe=!!M.specularIntensityMap,z=G&&!!M.transmissionMap,Ie=G&&!!M.thicknessMap,Ae=!!M.gradientMap,Ee=!!M.alphaMap,Re=M.alphaTest>0,Le=!!M.alphaHash,Xe=!!M.extensions;let xt=Ti;M.toneMapped&&(v===null||v.isXRRenderTarget===!0)&&(xt=i.toneMapping);const Vt={shaderID:ge,shaderType:M.type,shaderName:M.name,vertexShader:ve,fragmentShader:Y,defines:M.defines,customVertexShaderID:de,customFragmentShaderID:Ce,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:A,batching:k,batchingColor:k&&V._colorsTexture!==null,instancing:q,instancingColor:q&&V.instanceColor!==null,instancingMorph:q&&V.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:v===null?i.outputColorSpace:v.isXRRenderTarget===!0?v.texture.colorSpace:Jt,alphaToCoverage:!!M.alphaToCoverage,map:K,matcap:X,envMap:ce,envMapMode:ce&&se.mapping,envMapCubeUVHeight:te,aoMap:R,lightMap:be,bumpMap:ne,normalMap:oe,displacementMap:f&&W,emissiveMap:re,normalMapObjectSpace:oe&&M.normalMapType===jf,normalMapTangentSpace:oe&&M.normalMapType===Ta,metalnessMap:O,roughnessMap:C,anisotropy:m,anisotropyMap:H,clearcoat:S,clearcoatMap:$,clearcoatNormalMap:_e,clearcoatRoughnessMap:J,dispersion:F,iridescence:Q,iridescenceMap:pe,iridescenceThicknessMap:Se,sheen:N,sheenColorMap:we,sheenRoughnessMap:ye,specularMap:Ue,specularColorMap:Fe,specularIntensityMap:qe,transmission:G,transmissionMap:z,thicknessMap:Ie,gradientMap:Ae,opaque:M.transparent===!1&&M.blending===xs&&M.alphaToCoverage===!1,alphaMap:Ee,alphaTest:Re,alphaHash:Le,combine:M.combine,mapUv:K&&_(M.map.channel),aoMapUv:R&&_(M.aoMap.channel),lightMapUv:be&&_(M.lightMap.channel),bumpMapUv:ne&&_(M.bumpMap.channel),normalMapUv:oe&&_(M.normalMap.channel),displacementMapUv:W&&_(M.displacementMap.channel),emissiveMapUv:re&&_(M.emissiveMap.channel),metalnessMapUv:O&&_(M.metalnessMap.channel),roughnessMapUv:C&&_(M.roughnessMap.channel),anisotropyMapUv:H&&_(M.anisotropyMap.channel),clearcoatMapUv:$&&_(M.clearcoatMap.channel),clearcoatNormalMapUv:_e&&_(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:J&&_(M.clearcoatRoughnessMap.channel),iridescenceMapUv:pe&&_(M.iridescenceMap.channel),iridescenceThicknessMapUv:Se&&_(M.iridescenceThicknessMap.channel),sheenColorMapUv:we&&_(M.sheenColorMap.channel),sheenRoughnessMapUv:ye&&_(M.sheenRoughnessMap.channel),specularMapUv:Ue&&_(M.specularMap.channel),specularColorMapUv:Fe&&_(M.specularColorMap.channel),specularIntensityMapUv:qe&&_(M.specularIntensityMap.channel),transmissionMapUv:z&&_(M.transmissionMap.channel),thicknessMapUv:Ie&&_(M.thicknessMap.channel),alphaMapUv:Ee&&_(M.alphaMap.channel),vertexTangents:!!fe.attributes.tangent&&(oe||m),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!fe.attributes.color&&fe.attributes.color.itemSize===4,pointsUvs:V.isPoints===!0&&!!fe.attributes.uv&&(K||Ee),fog:!!he,useFog:M.fog===!0,fogExp2:!!he&&he.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:P,skinning:V.isSkinnedMesh===!0,morphTargets:fe.morphAttributes.position!==void 0,morphNormals:fe.morphAttributes.normal!==void 0,morphColors:fe.morphAttributes.color!==void 0,morphTargetsCount:me,morphTextureStride:xe,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&T.length>0,shadowMapType:i.shadowMap.type,toneMapping:xt,decodeVideoTexture:K&&M.map.isVideoTexture===!0&&et.getTransfer(M.map.colorSpace)===ht,decodeVideoTextureEmissive:re&&M.emissiveMap.isVideoTexture===!0&&et.getTransfer(M.emissiveMap.colorSpace)===ht,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===yt,flipSided:M.side===hn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Xe&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Xe&&M.extensions.multiDraw===!0||k)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return Vt.vertexUv1s=l.has(1),Vt.vertexUv2s=l.has(2),Vt.vertexUv3s=l.has(3),l.clear(),Vt}function d(M){const y=[];if(M.shaderID?y.push(M.shaderID):(y.push(M.customVertexShaderID),y.push(M.customFragmentShaderID)),M.defines!==void 0)for(const T in M.defines)y.push(T),y.push(M.defines[T]);return M.isRawShaderMaterial===!1&&(x(y,M),E(y,M),y.push(i.outputColorSpace)),y.push(M.customProgramCacheKey),y.join()}function x(M,y){M.push(y.precision),M.push(y.outputColorSpace),M.push(y.envMapMode),M.push(y.envMapCubeUVHeight),M.push(y.mapUv),M.push(y.alphaMapUv),M.push(y.lightMapUv),M.push(y.aoMapUv),M.push(y.bumpMapUv),M.push(y.normalMapUv),M.push(y.displacementMapUv),M.push(y.emissiveMapUv),M.push(y.metalnessMapUv),M.push(y.roughnessMapUv),M.push(y.anisotropyMapUv),M.push(y.clearcoatMapUv),M.push(y.clearcoatNormalMapUv),M.push(y.clearcoatRoughnessMapUv),M.push(y.iridescenceMapUv),M.push(y.iridescenceThicknessMapUv),M.push(y.sheenColorMapUv),M.push(y.sheenRoughnessMapUv),M.push(y.specularMapUv),M.push(y.specularColorMapUv),M.push(y.specularIntensityMapUv),M.push(y.transmissionMapUv),M.push(y.thicknessMapUv),M.push(y.combine),M.push(y.fogExp2),M.push(y.sizeAttenuation),M.push(y.morphTargetsCount),M.push(y.morphAttributeCount),M.push(y.numDirLights),M.push(y.numPointLights),M.push(y.numSpotLights),M.push(y.numSpotLightMaps),M.push(y.numHemiLights),M.push(y.numRectAreaLights),M.push(y.numDirLightShadows),M.push(y.numPointLightShadows),M.push(y.numSpotLightShadows),M.push(y.numSpotLightShadowsWithMaps),M.push(y.numLightProbes),M.push(y.shadowMapType),M.push(y.toneMapping),M.push(y.numClippingPlanes),M.push(y.numClipIntersection),M.push(y.depthPacking)}function E(M,y){o.disableAll(),y.supportsVertexTextures&&o.enable(0),y.instancing&&o.enable(1),y.instancingColor&&o.enable(2),y.instancingMorph&&o.enable(3),y.matcap&&o.enable(4),y.envMap&&o.enable(5),y.normalMapObjectSpace&&o.enable(6),y.normalMapTangentSpace&&o.enable(7),y.clearcoat&&o.enable(8),y.iridescence&&o.enable(9),y.alphaTest&&o.enable(10),y.vertexColors&&o.enable(11),y.vertexAlphas&&o.enable(12),y.vertexUv1s&&o.enable(13),y.vertexUv2s&&o.enable(14),y.vertexUv3s&&o.enable(15),y.vertexTangents&&o.enable(16),y.anisotropy&&o.enable(17),y.alphaHash&&o.enable(18),y.batching&&o.enable(19),y.dispersion&&o.enable(20),y.batchingColor&&o.enable(21),M.push(o.mask),o.disableAll(),y.fog&&o.enable(0),y.useFog&&o.enable(1),y.flatShading&&o.enable(2),y.logarithmicDepthBuffer&&o.enable(3),y.reverseDepthBuffer&&o.enable(4),y.skinning&&o.enable(5),y.morphTargets&&o.enable(6),y.morphNormals&&o.enable(7),y.morphColors&&o.enable(8),y.premultipliedAlpha&&o.enable(9),y.shadowMapEnabled&&o.enable(10),y.doubleSided&&o.enable(11),y.flipSided&&o.enable(12),y.useDepthPacking&&o.enable(13),y.dithering&&o.enable(14),y.transmission&&o.enable(15),y.sheen&&o.enable(16),y.opaque&&o.enable(17),y.pointsUvs&&o.enable(18),y.decodeVideoTexture&&o.enable(19),y.decodeVideoTextureEmissive&&o.enable(20),y.alphaToCoverage&&o.enable(21),M.push(o.mask)}function b(M){const y=g[M.type];let T;if(y){const j=Gn[y];T=Hn.clone(j.uniforms)}else T=M.uniforms;return T}function L(M,y){let T;for(let j=0,V=h.length;j<V;j++){const he=h[j];if(he.cacheKey===y){T=he,++T.usedTimes;break}}return T===void 0&&(T=new qm(i,y,M,r),h.push(T)),T}function B(M){if(--M.usedTimes===0){const y=h.indexOf(M);h[y]=h[h.length-1],h.pop(),M.destroy()}}function w(M){c.remove(M)}function D(){c.dispose()}return{getParameters:p,getProgramCacheKey:d,getUniforms:b,acquireProgram:L,releaseProgram:B,releaseShaderCache:w,programs:h,dispose:D}}function Zm(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,c){i.get(a)[o]=c}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function $m(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function nh(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function ih(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(u,f,A,g,_,p){let d=i[e];return d===void 0?(d={id:u.id,object:u,geometry:f,material:A,groupOrder:g,renderOrder:u.renderOrder,z:_,group:p},i[e]=d):(d.id=u.id,d.object=u,d.geometry=f,d.material=A,d.groupOrder=g,d.renderOrder=u.renderOrder,d.z=_,d.group=p),e++,d}function o(u,f,A,g,_,p){const d=a(u,f,A,g,_,p);A.transmission>0?n.push(d):A.transparent===!0?s.push(d):t.push(d)}function c(u,f,A,g,_,p){const d=a(u,f,A,g,_,p);A.transmission>0?n.unshift(d):A.transparent===!0?s.unshift(d):t.unshift(d)}function l(u,f){t.length>1&&t.sort(u||$m),n.length>1&&n.sort(f||nh),s.length>1&&s.sort(f||nh)}function h(){for(let u=e,f=i.length;u<f;u++){const A=i[u];if(A.id===null)break;A.id=null,A.object=null,A.geometry=null,A.material=null,A.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:o,unshift:c,finish:h,sort:l}}function e0(){let i=new WeakMap;function e(n,s){const r=i.get(n);let a;return r===void 0?(a=new ih,i.set(n,[a])):s>=r.length?(a=new ih,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function t0(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new U,color:new Me};break;case"SpotLight":t={position:new U,direction:new U,color:new Me,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new U,color:new Me,distance:0,decay:0};break;case"HemisphereLight":t={direction:new U,skyColor:new Me,groundColor:new Me};break;case"RectAreaLight":t={color:new Me,position:new U,halfWidth:new U,halfHeight:new U};break}return i[e.id]=t,t}}}function n0(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let i0=0;function s0(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function r0(i){const e=new t0,t=n0(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new U);const s=new U,r=new Qe,a=new Qe;function o(l){let h=0,u=0,f=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let A=0,g=0,_=0,p=0,d=0,x=0,E=0,b=0,L=0,B=0,w=0;l.sort(s0);for(let M=0,y=l.length;M<y;M++){const T=l[M],j=T.color,V=T.intensity,he=T.distance,fe=T.shadow&&T.shadow.map?T.shadow.map.texture:null;if(T.isAmbientLight)h+=j.r*V,u+=j.g*V,f+=j.b*V;else if(T.isLightProbe){for(let ae=0;ae<9;ae++)n.probe[ae].addScaledVector(T.sh.coefficients[ae],V);w++}else if(T.isDirectionalLight){const ae=e.get(T);if(ae.color.copy(T.color).multiplyScalar(T.intensity),T.castShadow){const se=T.shadow,te=t.get(T);te.shadowIntensity=se.intensity,te.shadowBias=se.bias,te.shadowNormalBias=se.normalBias,te.shadowRadius=se.radius,te.shadowMapSize=se.mapSize,n.directionalShadow[A]=te,n.directionalShadowMap[A]=fe,n.directionalShadowMatrix[A]=T.shadow.matrix,x++}n.directional[A]=ae,A++}else if(T.isSpotLight){const ae=e.get(T);ae.position.setFromMatrixPosition(T.matrixWorld),ae.color.copy(j).multiplyScalar(V),ae.distance=he,ae.coneCos=Math.cos(T.angle),ae.penumbraCos=Math.cos(T.angle*(1-T.penumbra)),ae.decay=T.decay,n.spot[_]=ae;const se=T.shadow;if(T.map&&(n.spotLightMap[L]=T.map,L++,se.updateMatrices(T),T.castShadow&&B++),n.spotLightMatrix[_]=se.matrix,T.castShadow){const te=t.get(T);te.shadowIntensity=se.intensity,te.shadowBias=se.bias,te.shadowNormalBias=se.normalBias,te.shadowRadius=se.radius,te.shadowMapSize=se.mapSize,n.spotShadow[_]=te,n.spotShadowMap[_]=fe,b++}_++}else if(T.isRectAreaLight){const ae=e.get(T);ae.color.copy(j).multiplyScalar(V),ae.halfWidth.set(T.width*.5,0,0),ae.halfHeight.set(0,T.height*.5,0),n.rectArea[p]=ae,p++}else if(T.isPointLight){const ae=e.get(T);if(ae.color.copy(T.color).multiplyScalar(T.intensity),ae.distance=T.distance,ae.decay=T.decay,T.castShadow){const se=T.shadow,te=t.get(T);te.shadowIntensity=se.intensity,te.shadowBias=se.bias,te.shadowNormalBias=se.normalBias,te.shadowRadius=se.radius,te.shadowMapSize=se.mapSize,te.shadowCameraNear=se.camera.near,te.shadowCameraFar=se.camera.far,n.pointShadow[g]=te,n.pointShadowMap[g]=fe,n.pointShadowMatrix[g]=T.shadow.matrix,E++}n.point[g]=ae,g++}else if(T.isHemisphereLight){const ae=e.get(T);ae.skyColor.copy(T.color).multiplyScalar(V),ae.groundColor.copy(T.groundColor).multiplyScalar(V),n.hemi[d]=ae,d++}}p>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Be.LTC_FLOAT_1,n.rectAreaLTC2=Be.LTC_FLOAT_2):(n.rectAreaLTC1=Be.LTC_HALF_1,n.rectAreaLTC2=Be.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;const D=n.hash;(D.directionalLength!==A||D.pointLength!==g||D.spotLength!==_||D.rectAreaLength!==p||D.hemiLength!==d||D.numDirectionalShadows!==x||D.numPointShadows!==E||D.numSpotShadows!==b||D.numSpotMaps!==L||D.numLightProbes!==w)&&(n.directional.length=A,n.spot.length=_,n.rectArea.length=p,n.point.length=g,n.hemi.length=d,n.directionalShadow.length=x,n.directionalShadowMap.length=x,n.pointShadow.length=E,n.pointShadowMap.length=E,n.spotShadow.length=b,n.spotShadowMap.length=b,n.directionalShadowMatrix.length=x,n.pointShadowMatrix.length=E,n.spotLightMatrix.length=b+L-B,n.spotLightMap.length=L,n.numSpotLightShadowsWithMaps=B,n.numLightProbes=w,D.directionalLength=A,D.pointLength=g,D.spotLength=_,D.rectAreaLength=p,D.hemiLength=d,D.numDirectionalShadows=x,D.numPointShadows=E,D.numSpotShadows=b,D.numSpotMaps=L,D.numLightProbes=w,n.version=i0++)}function c(l,h){let u=0,f=0,A=0,g=0,_=0;const p=h.matrixWorldInverse;for(let d=0,x=l.length;d<x;d++){const E=l[d];if(E.isDirectionalLight){const b=n.directional[u];b.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(p),u++}else if(E.isSpotLight){const b=n.spot[A];b.position.setFromMatrixPosition(E.matrixWorld),b.position.applyMatrix4(p),b.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(p),A++}else if(E.isRectAreaLight){const b=n.rectArea[g];b.position.setFromMatrixPosition(E.matrixWorld),b.position.applyMatrix4(p),a.identity(),r.copy(E.matrixWorld),r.premultiply(p),a.extractRotation(r),b.halfWidth.set(E.width*.5,0,0),b.halfHeight.set(0,E.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),g++}else if(E.isPointLight){const b=n.point[f];b.position.setFromMatrixPosition(E.matrixWorld),b.position.applyMatrix4(p),f++}else if(E.isHemisphereLight){const b=n.hemi[_];b.direction.setFromMatrixPosition(E.matrixWorld),b.direction.transformDirection(p),_++}}}return{setup:o,setupView:c,state:n}}function sh(i){const e=new r0(i),t=[],n=[];function s(h){l.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function a(h){n.push(h)}function o(){e.setup(t)}function c(h){e.setupView(t,h)}const l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:o,setupLightsView:c,pushLight:r,pushShadow:a}}function a0(i){let e=new WeakMap;function t(s,r=0){const a=e.get(s);let o;return a===void 0?(o=new sh(i),e.set(s,[o])):r>=a.length?(o=new sh(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}class o0 extends Mn{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Vf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class c0 extends Mn{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const l0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,h0=`uniform sampler2D shadow_pass;
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
}`;function u0(i,e,t){let n=new Qc;const s=new De,r=new De,a=new at,o=new o0({depthPacking:Wf}),c=new c0,l={},h=t.maxTextureSize,u={[Nn]:hn,[hn]:Nn,[yt]:yt},f=new Bt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new De},radius:{value:4}},vertexShader:l0,fragmentShader:h0}),A=f.clone();A.defines.HORIZONTAL_PASS=1;const g=new bt;g.setAttribute("position",new Mt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new rt(g,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ic;let d=this.type;this.render=function(B,w,D){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||B.length===0)return;const M=i.getRenderTarget(),y=i.getActiveCubeFace(),T=i.getActiveMipmapLevel(),j=i.state;j.setBlending(Qt),j.buffers.color.setClear(1,1,1,1),j.buffers.depth.setTest(!0),j.setScissorTest(!1);const V=d!==ii&&this.type===ii,he=d===ii&&this.type!==ii;for(let fe=0,ae=B.length;fe<ae;fe++){const se=B[fe],te=se.shadow;if(te===void 0){console.warn("THREE.WebGLShadowMap:",se,"has no shadow.");continue}if(te.autoUpdate===!1&&te.needsUpdate===!1)continue;s.copy(te.mapSize);const ge=te.getFrameExtents();if(s.multiply(ge),r.copy(te.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ge.x),s.x=r.x*ge.x,te.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ge.y),s.y=r.y*ge.y,te.mapSize.y=r.y)),te.map===null||V===!0||he===!0){const me=this.type!==ii?{minFilter:Ht,magFilter:Ht}:{};te.map!==null&&te.map.dispose(),te.map=new pn(s.x,s.y,me),te.map.texture.name=se.name+".shadowMap",te.camera.updateProjectionMatrix()}i.setRenderTarget(te.map),i.clear();const ie=te.getViewportCount();for(let me=0;me<ie;me++){const xe=te.getViewport(me);a.set(r.x*xe.x,r.y*xe.y,r.x*xe.z,r.y*xe.w),j.viewport(a),te.updateMatrices(se,me),n=te.getFrustum(),b(w,D,te.camera,se,this.type)}te.isPointLightShadow!==!0&&this.type===ii&&x(te,D),te.needsUpdate=!1}d=this.type,p.needsUpdate=!1,i.setRenderTarget(M,y,T)};function x(B,w){const D=e.update(_);f.defines.VSM_SAMPLES!==B.blurSamples&&(f.defines.VSM_SAMPLES=B.blurSamples,A.defines.VSM_SAMPLES=B.blurSamples,f.needsUpdate=!0,A.needsUpdate=!0),B.mapPass===null&&(B.mapPass=new pn(s.x,s.y)),f.uniforms.shadow_pass.value=B.map.texture,f.uniforms.resolution.value=B.mapSize,f.uniforms.radius.value=B.radius,i.setRenderTarget(B.mapPass),i.clear(),i.renderBufferDirect(w,null,D,f,_,null),A.uniforms.shadow_pass.value=B.mapPass.texture,A.uniforms.resolution.value=B.mapSize,A.uniforms.radius.value=B.radius,i.setRenderTarget(B.map),i.clear(),i.renderBufferDirect(w,null,D,A,_,null)}function E(B,w,D,M){let y=null;const T=D.isPointLight===!0?B.customDistanceMaterial:B.customDepthMaterial;if(T!==void 0)y=T;else if(y=D.isPointLight===!0?c:o,i.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const j=y.uuid,V=w.uuid;let he=l[j];he===void 0&&(he={},l[j]=he);let fe=he[V];fe===void 0&&(fe=y.clone(),he[V]=fe,w.addEventListener("dispose",L)),y=fe}if(y.visible=w.visible,y.wireframe=w.wireframe,M===ii?y.side=w.shadowSide!==null?w.shadowSide:w.side:y.side=w.shadowSide!==null?w.shadowSide:u[w.side],y.alphaMap=w.alphaMap,y.alphaTest=w.alphaTest,y.map=w.map,y.clipShadows=w.clipShadows,y.clippingPlanes=w.clippingPlanes,y.clipIntersection=w.clipIntersection,y.displacementMap=w.displacementMap,y.displacementScale=w.displacementScale,y.displacementBias=w.displacementBias,y.wireframeLinewidth=w.wireframeLinewidth,y.linewidth=w.linewidth,D.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const j=i.properties.get(y);j.light=D}return y}function b(B,w,D,M,y){if(B.visible===!1)return;if(B.layers.test(w.layers)&&(B.isMesh||B.isLine||B.isPoints)&&(B.castShadow||B.receiveShadow&&y===ii)&&(!B.frustumCulled||n.intersectsObject(B))){B.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,B.matrixWorld);const V=e.update(B),he=B.material;if(Array.isArray(he)){const fe=V.groups;for(let ae=0,se=fe.length;ae<se;ae++){const te=fe[ae],ge=he[te.materialIndex];if(ge&&ge.visible){const ie=E(B,ge,M,y);B.onBeforeShadow(i,B,w,D,V,ie,te),i.renderBufferDirect(D,null,V,ie,B,te),B.onAfterShadow(i,B,w,D,V,ie,te)}}}else if(he.visible){const fe=E(B,he,M,y);B.onBeforeShadow(i,B,w,D,V,fe,null),i.renderBufferDirect(D,null,V,fe,B,null),B.onAfterShadow(i,B,w,D,V,fe,null)}}const j=B.children;for(let V=0,he=j.length;V<he;V++)b(j[V],w,D,M,y)}function L(B){B.target.removeEventListener("dispose",L);for(const D in l){const M=l[D],y=B.target.uuid;y in M&&(M[y].dispose(),delete M[y])}}}const f0={[ko]:Go,[zo]:Wo,[Ho]:jo,[Cs]:Vo,[Go]:ko,[Wo]:zo,[jo]:Ho,[Vo]:Cs};function d0(i,e){function t(){let z=!1;const Ie=new at;let Ae=null;const Ee=new at(0,0,0,0);return{setMask:function(Re){Ae!==Re&&!z&&(i.colorMask(Re,Re,Re,Re),Ae=Re)},setLocked:function(Re){z=Re},setClear:function(Re,Le,Xe,xt,Vt){Vt===!0&&(Re*=xt,Le*=xt,Xe*=xt),Ie.set(Re,Le,Xe,xt),Ee.equals(Ie)===!1&&(i.clearColor(Re,Le,Xe,xt),Ee.copy(Ie))},reset:function(){z=!1,Ae=null,Ee.set(-1,0,0,0)}}}function n(){let z=!1,Ie=!1,Ae=null,Ee=null,Re=null;return{setReversed:function(Le){if(Ie!==Le){const Xe=e.get("EXT_clip_control");Ie?Xe.clipControlEXT(Xe.LOWER_LEFT_EXT,Xe.ZERO_TO_ONE_EXT):Xe.clipControlEXT(Xe.LOWER_LEFT_EXT,Xe.NEGATIVE_ONE_TO_ONE_EXT);const xt=Re;Re=null,this.setClear(xt)}Ie=Le},getReversed:function(){return Ie},setTest:function(Le){Le?v(i.DEPTH_TEST):P(i.DEPTH_TEST)},setMask:function(Le){Ae!==Le&&!z&&(i.depthMask(Le),Ae=Le)},setFunc:function(Le){if(Ie&&(Le=f0[Le]),Ee!==Le){switch(Le){case ko:i.depthFunc(i.NEVER);break;case Go:i.depthFunc(i.ALWAYS);break;case zo:i.depthFunc(i.LESS);break;case Cs:i.depthFunc(i.LEQUAL);break;case Ho:i.depthFunc(i.EQUAL);break;case Vo:i.depthFunc(i.GEQUAL);break;case Wo:i.depthFunc(i.GREATER);break;case jo:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Ee=Le}},setLocked:function(Le){z=Le},setClear:function(Le){Re!==Le&&(Ie&&(Le=1-Le),i.clearDepth(Le),Re=Le)},reset:function(){z=!1,Ae=null,Ee=null,Re=null,Ie=!1}}}function s(){let z=!1,Ie=null,Ae=null,Ee=null,Re=null,Le=null,Xe=null,xt=null,Vt=null;return{setTest:function(lt){z||(lt?v(i.STENCIL_TEST):P(i.STENCIL_TEST))},setMask:function(lt){Ie!==lt&&!z&&(i.stencilMask(lt),Ie=lt)},setFunc:function(lt,Sn,Xn){(Ae!==lt||Ee!==Sn||Re!==Xn)&&(i.stencilFunc(lt,Sn,Xn),Ae=lt,Ee=Sn,Re=Xn)},setOp:function(lt,Sn,Xn){(Le!==lt||Xe!==Sn||xt!==Xn)&&(i.stencilOp(lt,Sn,Xn),Le=lt,Xe=Sn,xt=Xn)},setLocked:function(lt){z=lt},setClear:function(lt){Vt!==lt&&(i.clearStencil(lt),Vt=lt)},reset:function(){z=!1,Ie=null,Ae=null,Ee=null,Re=null,Le=null,Xe=null,xt=null,Vt=null}}}const r=new t,a=new n,o=new s,c=new WeakMap,l=new WeakMap;let h={},u={},f=new WeakMap,A=[],g=null,_=!1,p=null,d=null,x=null,E=null,b=null,L=null,B=null,w=new Me(0,0,0),D=0,M=!1,y=null,T=null,j=null,V=null,he=null;const fe=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ae=!1,se=0;const te=i.getParameter(i.VERSION);te.indexOf("WebGL")!==-1?(se=parseFloat(/^WebGL (\d)/.exec(te)[1]),ae=se>=1):te.indexOf("OpenGL ES")!==-1&&(se=parseFloat(/^OpenGL ES (\d)/.exec(te)[1]),ae=se>=2);let ge=null,ie={};const me=i.getParameter(i.SCISSOR_BOX),xe=i.getParameter(i.VIEWPORT),ve=new at().fromArray(me),Y=new at().fromArray(xe);function de(z,Ie,Ae,Ee){const Re=new Uint8Array(4),Le=i.createTexture();i.bindTexture(z,Le),i.texParameteri(z,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(z,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Xe=0;Xe<Ae;Xe++)z===i.TEXTURE_3D||z===i.TEXTURE_2D_ARRAY?i.texImage3D(Ie,0,i.RGBA,1,1,Ee,0,i.RGBA,i.UNSIGNED_BYTE,Re):i.texImage2D(Ie+Xe,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Re);return Le}const Ce={};Ce[i.TEXTURE_2D]=de(i.TEXTURE_2D,i.TEXTURE_2D,1),Ce[i.TEXTURE_CUBE_MAP]=de(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ce[i.TEXTURE_2D_ARRAY]=de(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Ce[i.TEXTURE_3D]=de(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),v(i.DEPTH_TEST),a.setFunc(Cs),ne(!1),oe(rl),v(i.CULL_FACE),R(Qt);function v(z){h[z]!==!0&&(i.enable(z),h[z]=!0)}function P(z){h[z]!==!1&&(i.disable(z),h[z]=!1)}function q(z,Ie){return u[z]!==Ie?(i.bindFramebuffer(z,Ie),u[z]=Ie,z===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=Ie),z===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=Ie),!0):!1}function k(z,Ie){let Ae=A,Ee=!1;if(z){Ae=f.get(Ie),Ae===void 0&&(Ae=[],f.set(Ie,Ae));const Re=z.textures;if(Ae.length!==Re.length||Ae[0]!==i.COLOR_ATTACHMENT0){for(let Le=0,Xe=Re.length;Le<Xe;Le++)Ae[Le]=i.COLOR_ATTACHMENT0+Le;Ae.length=Re.length,Ee=!0}}else Ae[0]!==i.BACK&&(Ae[0]=i.BACK,Ee=!0);Ee&&i.drawBuffers(Ae)}function K(z){return g!==z?(i.useProgram(z),g=z,!0):!1}const X={[Dn]:i.FUNC_ADD,[Mf]:i.FUNC_SUBTRACT,[Cf]:i.FUNC_REVERSE_SUBTRACT};X[Sf]=i.MIN,X[If]=i.MAX;const ce={[Ks]:i.ZERO,[wf]:i.ONE,[Tf]:i.SRC_COLOR,[Fo]:i.SRC_ALPHA,[Lf]:i.SRC_ALPHA_SATURATE,[Oo]:i.DST_COLOR,[Qo]:i.DST_ALPHA,[Bf]:i.ONE_MINUS_SRC_COLOR,[No]:i.ONE_MINUS_SRC_ALPHA,[Df]:i.ONE_MINUS_DST_COLOR,[Rf]:i.ONE_MINUS_DST_ALPHA,[Pf]:i.CONSTANT_COLOR,[Uf]:i.ONE_MINUS_CONSTANT_COLOR,[Ff]:i.CONSTANT_ALPHA,[Nf]:i.ONE_MINUS_CONSTANT_ALPHA};function R(z,Ie,Ae,Ee,Re,Le,Xe,xt,Vt,lt){if(z===Qt){_===!0&&(P(i.BLEND),_=!1);return}if(_===!1&&(v(i.BLEND),_=!0),z!==Jh){if(z!==p||lt!==M){if((d!==Dn||b!==Dn)&&(i.blendEquation(i.FUNC_ADD),d=Dn,b=Dn),lt)switch(z){case xs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Uo:i.blendFunc(i.ONE,i.ONE);break;case al:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ol:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}else switch(z){case xs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Uo:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case al:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ol:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}x=null,E=null,L=null,B=null,w.set(0,0,0),D=0,p=z,M=lt}return}Re=Re||Ie,Le=Le||Ae,Xe=Xe||Ee,(Ie!==d||Re!==b)&&(i.blendEquationSeparate(X[Ie],X[Re]),d=Ie,b=Re),(Ae!==x||Ee!==E||Le!==L||Xe!==B)&&(i.blendFuncSeparate(ce[Ae],ce[Ee],ce[Le],ce[Xe]),x=Ae,E=Ee,L=Le,B=Xe),(xt.equals(w)===!1||Vt!==D)&&(i.blendColor(xt.r,xt.g,xt.b,Vt),w.copy(xt),D=Vt),p=z,M=!1}function be(z,Ie){z.side===yt?P(i.CULL_FACE):v(i.CULL_FACE);let Ae=z.side===hn;Ie&&(Ae=!Ae),ne(Ae),z.blending===xs&&z.transparent===!1?R(Qt):R(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),a.setFunc(z.depthFunc),a.setTest(z.depthTest),a.setMask(z.depthWrite),r.setMask(z.colorWrite);const Ee=z.stencilWrite;o.setTest(Ee),Ee&&(o.setMask(z.stencilWriteMask),o.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),o.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),re(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?v(i.SAMPLE_ALPHA_TO_COVERAGE):P(i.SAMPLE_ALPHA_TO_COVERAGE)}function ne(z){y!==z&&(z?i.frontFace(i.CW):i.frontFace(i.CCW),y=z)}function oe(z){z!==vf?(v(i.CULL_FACE),z!==T&&(z===rl?i.cullFace(i.BACK):z===yf?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):P(i.CULL_FACE),T=z}function W(z){z!==j&&(ae&&i.lineWidth(z),j=z)}function re(z,Ie,Ae){z?(v(i.POLYGON_OFFSET_FILL),(V!==Ie||he!==Ae)&&(i.polygonOffset(Ie,Ae),V=Ie,he=Ae)):P(i.POLYGON_OFFSET_FILL)}function O(z){z?v(i.SCISSOR_TEST):P(i.SCISSOR_TEST)}function C(z){z===void 0&&(z=i.TEXTURE0+fe-1),ge!==z&&(i.activeTexture(z),ge=z)}function m(z,Ie,Ae){Ae===void 0&&(ge===null?Ae=i.TEXTURE0+fe-1:Ae=ge);let Ee=ie[Ae];Ee===void 0&&(Ee={type:void 0,texture:void 0},ie[Ae]=Ee),(Ee.type!==z||Ee.texture!==Ie)&&(ge!==Ae&&(i.activeTexture(Ae),ge=Ae),i.bindTexture(z,Ie||Ce[z]),Ee.type=z,Ee.texture=Ie)}function S(){const z=ie[ge];z!==void 0&&z.type!==void 0&&(i.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function F(){try{i.compressedTexImage2D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Q(){try{i.compressedTexImage3D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function N(){try{i.texSubImage2D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function G(){try{i.texSubImage3D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function H(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function $(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function _e(){try{i.texStorage2D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function J(){try{i.texStorage3D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function pe(){try{i.texImage2D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Se(){try{i.texImage3D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function we(z){ve.equals(z)===!1&&(i.scissor(z.x,z.y,z.z,z.w),ve.copy(z))}function ye(z){Y.equals(z)===!1&&(i.viewport(z.x,z.y,z.z,z.w),Y.copy(z))}function Ue(z,Ie){let Ae=l.get(Ie);Ae===void 0&&(Ae=new WeakMap,l.set(Ie,Ae));let Ee=Ae.get(z);Ee===void 0&&(Ee=i.getUniformBlockIndex(Ie,z.name),Ae.set(z,Ee))}function Fe(z,Ie){const Ee=l.get(Ie).get(z);c.get(Ie)!==Ee&&(i.uniformBlockBinding(Ie,Ee,z.__bindingPointIndex),c.set(Ie,Ee))}function qe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},ge=null,ie={},u={},f=new WeakMap,A=[],g=null,_=!1,p=null,d=null,x=null,E=null,b=null,L=null,B=null,w=new Me(0,0,0),D=0,M=!1,y=null,T=null,j=null,V=null,he=null,ve.set(0,0,i.canvas.width,i.canvas.height),Y.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:v,disable:P,bindFramebuffer:q,drawBuffers:k,useProgram:K,setBlending:R,setMaterial:be,setFlipSided:ne,setCullFace:oe,setLineWidth:W,setPolygonOffset:re,setScissorTest:O,activeTexture:C,bindTexture:m,unbindTexture:S,compressedTexImage2D:F,compressedTexImage3D:Q,texImage2D:pe,texImage3D:Se,updateUBOMapping:Ue,uniformBlockBinding:Fe,texStorage2D:_e,texStorage3D:J,texSubImage2D:N,texSubImage3D:G,compressedTexSubImage2D:H,compressedTexSubImage3D:$,scissor:we,viewport:ye,reset:qe}}function rh(i,e,t,n){const s=A0(n);switch(t){case ou:return i*e;case lu:return i*e;case hu:return i*e*2;case Ci:return i*e/s.components*s.byteLength;case Pc:return i*e/s.components*s.byteLength;case Gi:return i*e*2/s.components*s.byteLength;case Uc:return i*e*2/s.components*s.byteLength;case cu:return i*e*3/s.components*s.byteLength;case Pt:return i*e*4/s.components*s.byteLength;case Fc:return i*e*4/s.components*s.byteLength;case la:case tr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case ha:case nr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Xo:case Ko:return Math.max(i,16)*Math.max(e,8)/4;case pa:case ga:return Math.max(i,8)*Math.max(e,8)/2;case ma:case ba:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case _a:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ur:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Jo:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Zo:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case $o:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case fr:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case ec:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case tc:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case nc:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case ic:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case sc:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case rc:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case ac:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case oc:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case cc:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case ir:case lc:case Ea:return Math.ceil(i/4)*Math.ceil(e/4)*16;case uu:case hc:return Math.ceil(i/4)*Math.ceil(e/4)*8;case uc:case fc:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function A0(i){switch(i){case Lt:case su:return{byteLength:1,components:1};case hr:case ru:case Gt:return{byteLength:2,components:1};case Dc:case Lc:return{byteLength:2,components:4};case Wi:case Rc:case Kt:return{byteLength:4,components:1};case au:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function p0(i,e,t,n,s,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new De,h=new WeakMap;let u;const f=new WeakMap;let A=!1;try{A=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(C,m){return A?new OffscreenCanvas(C,m):pr("canvas")}function _(C,m,S){let F=1;const Q=O(C);if((Q.width>S||Q.height>S)&&(F=S/Math.max(Q.width,Q.height)),F<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const N=Math.floor(F*Q.width),G=Math.floor(F*Q.height);u===void 0&&(u=g(N,G));const H=m?g(N,G):u;return H.width=N,H.height=G,H.getContext("2d").drawImage(C,0,0,N,G),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+N+"x"+G+")."),H}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),C;return C}function p(C){return C.generateMipmaps}function d(C){i.generateMipmap(C)}function x(C){return C.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?i.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function E(C,m,S,F,Q=!1){if(C!==null){if(i[C]!==void 0)return i[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let N=m;if(m===i.RED&&(S===i.FLOAT&&(N=i.R32F),S===i.HALF_FLOAT&&(N=i.R16F),S===i.UNSIGNED_BYTE&&(N=i.R8)),m===i.RED_INTEGER&&(S===i.UNSIGNED_BYTE&&(N=i.R8UI),S===i.UNSIGNED_SHORT&&(N=i.R16UI),S===i.UNSIGNED_INT&&(N=i.R32UI),S===i.BYTE&&(N=i.R8I),S===i.SHORT&&(N=i.R16I),S===i.INT&&(N=i.R32I)),m===i.RG&&(S===i.FLOAT&&(N=i.RG32F),S===i.HALF_FLOAT&&(N=i.RG16F),S===i.UNSIGNED_BYTE&&(N=i.RG8)),m===i.RG_INTEGER&&(S===i.UNSIGNED_BYTE&&(N=i.RG8UI),S===i.UNSIGNED_SHORT&&(N=i.RG16UI),S===i.UNSIGNED_INT&&(N=i.RG32UI),S===i.BYTE&&(N=i.RG8I),S===i.SHORT&&(N=i.RG16I),S===i.INT&&(N=i.RG32I)),m===i.RGB_INTEGER&&(S===i.UNSIGNED_BYTE&&(N=i.RGB8UI),S===i.UNSIGNED_SHORT&&(N=i.RGB16UI),S===i.UNSIGNED_INT&&(N=i.RGB32UI),S===i.BYTE&&(N=i.RGB8I),S===i.SHORT&&(N=i.RGB16I),S===i.INT&&(N=i.RGB32I)),m===i.RGBA_INTEGER&&(S===i.UNSIGNED_BYTE&&(N=i.RGBA8UI),S===i.UNSIGNED_SHORT&&(N=i.RGBA16UI),S===i.UNSIGNED_INT&&(N=i.RGBA32UI),S===i.BYTE&&(N=i.RGBA8I),S===i.SHORT&&(N=i.RGBA16I),S===i.INT&&(N=i.RGBA32I)),m===i.RGB&&S===i.UNSIGNED_INT_5_9_9_9_REV&&(N=i.RGB9_E5),m===i.RGBA){const G=Q?Ba:et.getTransfer(F);S===i.FLOAT&&(N=i.RGBA32F),S===i.HALF_FLOAT&&(N=i.RGBA16F),S===i.UNSIGNED_BYTE&&(N=G===ht?i.SRGB8_ALPHA8:i.RGBA8),S===i.UNSIGNED_SHORT_4_4_4_4&&(N=i.RGBA4),S===i.UNSIGNED_SHORT_5_5_5_1&&(N=i.RGB5_A1)}return(N===i.R16F||N===i.R32F||N===i.RG16F||N===i.RG32F||N===i.RGBA16F||N===i.RGBA32F)&&e.get("EXT_color_buffer_float"),N}function b(C,m){let S;return C?m===null||m===Wi||m===ji?S=i.DEPTH24_STENCIL8:m===Kt?S=i.DEPTH32F_STENCIL8:m===hr&&(S=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):m===null||m===Wi||m===ji?S=i.DEPTH_COMPONENT24:m===Kt?S=i.DEPTH_COMPONENT32F:m===hr&&(S=i.DEPTH_COMPONENT16),S}function L(C,m){return p(C)===!0||C.isFramebufferTexture&&C.minFilter!==Ht&&C.minFilter!==sn?Math.log2(Math.max(m.width,m.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?m.mipmaps.length:1}function B(C){const m=C.target;m.removeEventListener("dispose",B),D(m),m.isVideoTexture&&h.delete(m)}function w(C){const m=C.target;m.removeEventListener("dispose",w),y(m)}function D(C){const m=n.get(C);if(m.__webglInit===void 0)return;const S=C.source,F=f.get(S);if(F){const Q=F[m.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&M(C),Object.keys(F).length===0&&f.delete(S)}n.remove(C)}function M(C){const m=n.get(C);i.deleteTexture(m.__webglTexture);const S=C.source,F=f.get(S);delete F[m.__cacheKey],a.memory.textures--}function y(C){const m=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let F=0;F<6;F++){if(Array.isArray(m.__webglFramebuffer[F]))for(let Q=0;Q<m.__webglFramebuffer[F].length;Q++)i.deleteFramebuffer(m.__webglFramebuffer[F][Q]);else i.deleteFramebuffer(m.__webglFramebuffer[F]);m.__webglDepthbuffer&&i.deleteRenderbuffer(m.__webglDepthbuffer[F])}else{if(Array.isArray(m.__webglFramebuffer))for(let F=0;F<m.__webglFramebuffer.length;F++)i.deleteFramebuffer(m.__webglFramebuffer[F]);else i.deleteFramebuffer(m.__webglFramebuffer);if(m.__webglDepthbuffer&&i.deleteRenderbuffer(m.__webglDepthbuffer),m.__webglMultisampledFramebuffer&&i.deleteFramebuffer(m.__webglMultisampledFramebuffer),m.__webglColorRenderbuffer)for(let F=0;F<m.__webglColorRenderbuffer.length;F++)m.__webglColorRenderbuffer[F]&&i.deleteRenderbuffer(m.__webglColorRenderbuffer[F]);m.__webglDepthRenderbuffer&&i.deleteRenderbuffer(m.__webglDepthRenderbuffer)}const S=C.textures;for(let F=0,Q=S.length;F<Q;F++){const N=n.get(S[F]);N.__webglTexture&&(i.deleteTexture(N.__webglTexture),a.memory.textures--),n.remove(S[F])}n.remove(C)}let T=0;function j(){T=0}function V(){const C=T;return C>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+s.maxTextures),T+=1,C}function he(C){const m=[];return m.push(C.wrapS),m.push(C.wrapT),m.push(C.wrapR||0),m.push(C.magFilter),m.push(C.minFilter),m.push(C.anisotropy),m.push(C.internalFormat),m.push(C.format),m.push(C.type),m.push(C.generateMipmaps),m.push(C.premultiplyAlpha),m.push(C.flipY),m.push(C.unpackAlignment),m.push(C.colorSpace),m.join()}function fe(C,m){const S=n.get(C);if(C.isVideoTexture&&W(C),C.isRenderTargetTexture===!1&&C.version>0&&S.__version!==C.version){const F=C.image;if(F===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(F.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Y(S,C,m);return}}t.bindTexture(i.TEXTURE_2D,S.__webglTexture,i.TEXTURE0+m)}function ae(C,m){const S=n.get(C);if(C.version>0&&S.__version!==C.version){Y(S,C,m);return}t.bindTexture(i.TEXTURE_2D_ARRAY,S.__webglTexture,i.TEXTURE0+m)}function se(C,m){const S=n.get(C);if(C.version>0&&S.__version!==C.version){Y(S,C,m);return}t.bindTexture(i.TEXTURE_3D,S.__webglTexture,i.TEXTURE0+m)}function te(C,m){const S=n.get(C);if(C.version>0&&S.__version!==C.version){de(S,C,m);return}t.bindTexture(i.TEXTURE_CUBE_MAP,S.__webglTexture,i.TEXTURE0+m)}const ge={[gn]:i.REPEAT,[oi]:i.CLAMP_TO_EDGE,[Aa]:i.MIRRORED_REPEAT},ie={[Ht]:i.NEAREST,[iu]:i.NEAREST_MIPMAP_NEAREST,[Js]:i.NEAREST_MIPMAP_LINEAR,[sn]:i.LINEAR,[ca]:i.LINEAR_MIPMAP_NEAREST,[Vn]:i.LINEAR_MIPMAP_LINEAR},me={[qf]:i.NEVER,[$f]:i.ALWAYS,[Yf]:i.LESS,[du]:i.LEQUAL,[Xf]:i.EQUAL,[Zf]:i.GEQUAL,[Kf]:i.GREATER,[Jf]:i.NOTEQUAL};function xe(C,m){if(m.type===Kt&&e.has("OES_texture_float_linear")===!1&&(m.magFilter===sn||m.magFilter===ca||m.magFilter===Js||m.magFilter===Vn||m.minFilter===sn||m.minFilter===ca||m.minFilter===Js||m.minFilter===Vn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(C,i.TEXTURE_WRAP_S,ge[m.wrapS]),i.texParameteri(C,i.TEXTURE_WRAP_T,ge[m.wrapT]),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,ge[m.wrapR]),i.texParameteri(C,i.TEXTURE_MAG_FILTER,ie[m.magFilter]),i.texParameteri(C,i.TEXTURE_MIN_FILTER,ie[m.minFilter]),m.compareFunction&&(i.texParameteri(C,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(C,i.TEXTURE_COMPARE_FUNC,me[m.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(m.magFilter===Ht||m.minFilter!==Js&&m.minFilter!==Vn||m.type===Kt&&e.has("OES_texture_float_linear")===!1)return;if(m.anisotropy>1||n.get(m).__currentAnisotropy){const S=e.get("EXT_texture_filter_anisotropic");i.texParameterf(C,S.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(m.anisotropy,s.getMaxAnisotropy())),n.get(m).__currentAnisotropy=m.anisotropy}}}function ve(C,m){let S=!1;C.__webglInit===void 0&&(C.__webglInit=!0,m.addEventListener("dispose",B));const F=m.source;let Q=f.get(F);Q===void 0&&(Q={},f.set(F,Q));const N=he(m);if(N!==C.__cacheKey){Q[N]===void 0&&(Q[N]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,S=!0),Q[N].usedTimes++;const G=Q[C.__cacheKey];G!==void 0&&(Q[C.__cacheKey].usedTimes--,G.usedTimes===0&&M(m)),C.__cacheKey=N,C.__webglTexture=Q[N].texture}return S}function Y(C,m,S){let F=i.TEXTURE_2D;(m.isDataArrayTexture||m.isCompressedArrayTexture)&&(F=i.TEXTURE_2D_ARRAY),m.isData3DTexture&&(F=i.TEXTURE_3D);const Q=ve(C,m),N=m.source;t.bindTexture(F,C.__webglTexture,i.TEXTURE0+S);const G=n.get(N);if(N.version!==G.__version||Q===!0){t.activeTexture(i.TEXTURE0+S);const H=et.getPrimaries(et.workingColorSpace),$=m.colorSpace===zn?null:et.getPrimaries(m.colorSpace),_e=m.colorSpace===zn||H===$?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,m.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,m.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,m.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e);let J=_(m.image,!1,s.maxTextureSize);J=re(m,J);const pe=r.convert(m.format,m.colorSpace),Se=r.convert(m.type);let we=E(m.internalFormat,pe,Se,m.colorSpace,m.isVideoTexture);xe(F,m);let ye;const Ue=m.mipmaps,Fe=m.isVideoTexture!==!0,qe=G.__version===void 0||Q===!0,z=N.dataReady,Ie=L(m,J);if(m.isDepthTexture)we=b(m.format===qi,m.type),qe&&(Fe?t.texStorage2D(i.TEXTURE_2D,1,we,J.width,J.height):t.texImage2D(i.TEXTURE_2D,0,we,J.width,J.height,0,pe,Se,null));else if(m.isDataTexture)if(Ue.length>0){Fe&&qe&&t.texStorage2D(i.TEXTURE_2D,Ie,we,Ue[0].width,Ue[0].height);for(let Ae=0,Ee=Ue.length;Ae<Ee;Ae++)ye=Ue[Ae],Fe?z&&t.texSubImage2D(i.TEXTURE_2D,Ae,0,0,ye.width,ye.height,pe,Se,ye.data):t.texImage2D(i.TEXTURE_2D,Ae,we,ye.width,ye.height,0,pe,Se,ye.data);m.generateMipmaps=!1}else Fe?(qe&&t.texStorage2D(i.TEXTURE_2D,Ie,we,J.width,J.height),z&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,J.width,J.height,pe,Se,J.data)):t.texImage2D(i.TEXTURE_2D,0,we,J.width,J.height,0,pe,Se,J.data);else if(m.isCompressedTexture)if(m.isCompressedArrayTexture){Fe&&qe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ie,we,Ue[0].width,Ue[0].height,J.depth);for(let Ae=0,Ee=Ue.length;Ae<Ee;Ae++)if(ye=Ue[Ae],m.format!==Pt)if(pe!==null)if(Fe){if(z)if(m.layerUpdates.size>0){const Re=rh(ye.width,ye.height,m.format,m.type);for(const Le of m.layerUpdates){const Xe=ye.data.subarray(Le*Re/ye.data.BYTES_PER_ELEMENT,(Le+1)*Re/ye.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Ae,0,0,Le,ye.width,ye.height,1,pe,Xe)}m.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Ae,0,0,0,ye.width,ye.height,J.depth,pe,ye.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Ae,we,ye.width,ye.height,J.depth,0,ye.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Fe?z&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,Ae,0,0,0,ye.width,ye.height,J.depth,pe,Se,ye.data):t.texImage3D(i.TEXTURE_2D_ARRAY,Ae,we,ye.width,ye.height,J.depth,0,pe,Se,ye.data)}else{Fe&&qe&&t.texStorage2D(i.TEXTURE_2D,Ie,we,Ue[0].width,Ue[0].height);for(let Ae=0,Ee=Ue.length;Ae<Ee;Ae++)ye=Ue[Ae],m.format!==Pt?pe!==null?Fe?z&&t.compressedTexSubImage2D(i.TEXTURE_2D,Ae,0,0,ye.width,ye.height,pe,ye.data):t.compressedTexImage2D(i.TEXTURE_2D,Ae,we,ye.width,ye.height,0,ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Fe?z&&t.texSubImage2D(i.TEXTURE_2D,Ae,0,0,ye.width,ye.height,pe,Se,ye.data):t.texImage2D(i.TEXTURE_2D,Ae,we,ye.width,ye.height,0,pe,Se,ye.data)}else if(m.isDataArrayTexture)if(Fe){if(qe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ie,we,J.width,J.height,J.depth),z)if(m.layerUpdates.size>0){const Ae=rh(J.width,J.height,m.format,m.type);for(const Ee of m.layerUpdates){const Re=J.data.subarray(Ee*Ae/J.data.BYTES_PER_ELEMENT,(Ee+1)*Ae/J.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Ee,J.width,J.height,1,pe,Se,Re)}m.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,pe,Se,J.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,we,J.width,J.height,J.depth,0,pe,Se,J.data);else if(m.isData3DTexture)Fe?(qe&&t.texStorage3D(i.TEXTURE_3D,Ie,we,J.width,J.height,J.depth),z&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,pe,Se,J.data)):t.texImage3D(i.TEXTURE_3D,0,we,J.width,J.height,J.depth,0,pe,Se,J.data);else if(m.isFramebufferTexture){if(qe)if(Fe)t.texStorage2D(i.TEXTURE_2D,Ie,we,J.width,J.height);else{let Ae=J.width,Ee=J.height;for(let Re=0;Re<Ie;Re++)t.texImage2D(i.TEXTURE_2D,Re,we,Ae,Ee,0,pe,Se,null),Ae>>=1,Ee>>=1}}else if(Ue.length>0){if(Fe&&qe){const Ae=O(Ue[0]);t.texStorage2D(i.TEXTURE_2D,Ie,we,Ae.width,Ae.height)}for(let Ae=0,Ee=Ue.length;Ae<Ee;Ae++)ye=Ue[Ae],Fe?z&&t.texSubImage2D(i.TEXTURE_2D,Ae,0,0,pe,Se,ye):t.texImage2D(i.TEXTURE_2D,Ae,we,pe,Se,ye);m.generateMipmaps=!1}else if(Fe){if(qe){const Ae=O(J);t.texStorage2D(i.TEXTURE_2D,Ie,we,Ae.width,Ae.height)}z&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,pe,Se,J)}else t.texImage2D(i.TEXTURE_2D,0,we,pe,Se,J);p(m)&&d(F),G.__version=N.version,m.onUpdate&&m.onUpdate(m)}C.__version=m.version}function de(C,m,S){if(m.image.length!==6)return;const F=ve(C,m),Q=m.source;t.bindTexture(i.TEXTURE_CUBE_MAP,C.__webglTexture,i.TEXTURE0+S);const N=n.get(Q);if(Q.version!==N.__version||F===!0){t.activeTexture(i.TEXTURE0+S);const G=et.getPrimaries(et.workingColorSpace),H=m.colorSpace===zn?null:et.getPrimaries(m.colorSpace),$=m.colorSpace===zn||G===H?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,m.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,m.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,m.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,$);const _e=m.isCompressedTexture||m.image[0].isCompressedTexture,J=m.image[0]&&m.image[0].isDataTexture,pe=[];for(let Ee=0;Ee<6;Ee++)!_e&&!J?pe[Ee]=_(m.image[Ee],!0,s.maxCubemapSize):pe[Ee]=J?m.image[Ee].image:m.image[Ee],pe[Ee]=re(m,pe[Ee]);const Se=pe[0],we=r.convert(m.format,m.colorSpace),ye=r.convert(m.type),Ue=E(m.internalFormat,we,ye,m.colorSpace),Fe=m.isVideoTexture!==!0,qe=N.__version===void 0||F===!0,z=Q.dataReady;let Ie=L(m,Se);xe(i.TEXTURE_CUBE_MAP,m);let Ae;if(_e){Fe&&qe&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Ie,Ue,Se.width,Se.height);for(let Ee=0;Ee<6;Ee++){Ae=pe[Ee].mipmaps;for(let Re=0;Re<Ae.length;Re++){const Le=Ae[Re];m.format!==Pt?we!==null?Fe?z&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,Re,0,0,Le.width,Le.height,we,Le.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,Re,Ue,Le.width,Le.height,0,Le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Fe?z&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,Re,0,0,Le.width,Le.height,we,ye,Le.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,Re,Ue,Le.width,Le.height,0,we,ye,Le.data)}}}else{if(Ae=m.mipmaps,Fe&&qe){Ae.length>0&&Ie++;const Ee=O(pe[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Ie,Ue,Ee.width,Ee.height)}for(let Ee=0;Ee<6;Ee++)if(J){Fe?z&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,0,0,pe[Ee].width,pe[Ee].height,we,ye,pe[Ee].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,Ue,pe[Ee].width,pe[Ee].height,0,we,ye,pe[Ee].data);for(let Re=0;Re<Ae.length;Re++){const Xe=Ae[Re].image[Ee].image;Fe?z&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,Re+1,0,0,Xe.width,Xe.height,we,ye,Xe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,Re+1,Ue,Xe.width,Xe.height,0,we,ye,Xe.data)}}else{Fe?z&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,0,0,we,ye,pe[Ee]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,Ue,we,ye,pe[Ee]);for(let Re=0;Re<Ae.length;Re++){const Le=Ae[Re];Fe?z&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,Re+1,0,0,we,ye,Le.image[Ee]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,Re+1,Ue,we,ye,Le.image[Ee])}}}p(m)&&d(i.TEXTURE_CUBE_MAP),N.__version=Q.version,m.onUpdate&&m.onUpdate(m)}C.__version=m.version}function Ce(C,m,S,F,Q,N){const G=r.convert(S.format,S.colorSpace),H=r.convert(S.type),$=E(S.internalFormat,G,H,S.colorSpace),_e=n.get(m),J=n.get(S);if(J.__renderTarget=m,!_e.__hasExternalTextures){const pe=Math.max(1,m.width>>N),Se=Math.max(1,m.height>>N);Q===i.TEXTURE_3D||Q===i.TEXTURE_2D_ARRAY?t.texImage3D(Q,N,$,pe,Se,m.depth,0,G,H,null):t.texImage2D(Q,N,$,pe,Se,0,G,H,null)}t.bindFramebuffer(i.FRAMEBUFFER,C),oe(m)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,F,Q,J.__webglTexture,0,ne(m)):(Q===i.TEXTURE_2D||Q>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,F,Q,J.__webglTexture,N),t.bindFramebuffer(i.FRAMEBUFFER,null)}function v(C,m,S){if(i.bindRenderbuffer(i.RENDERBUFFER,C),m.depthBuffer){const F=m.depthTexture,Q=F&&F.isDepthTexture?F.type:null,N=b(m.stencilBuffer,Q),G=m.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,H=ne(m);oe(m)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,H,N,m.width,m.height):S?i.renderbufferStorageMultisample(i.RENDERBUFFER,H,N,m.width,m.height):i.renderbufferStorage(i.RENDERBUFFER,N,m.width,m.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,G,i.RENDERBUFFER,C)}else{const F=m.textures;for(let Q=0;Q<F.length;Q++){const N=F[Q],G=r.convert(N.format,N.colorSpace),H=r.convert(N.type),$=E(N.internalFormat,G,H,N.colorSpace),_e=ne(m);S&&oe(m)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,_e,$,m.width,m.height):oe(m)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,_e,$,m.width,m.height):i.renderbufferStorage(i.RENDERBUFFER,$,m.width,m.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function P(C,m){if(m&&m.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,C),!(m.depthTexture&&m.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const F=n.get(m.depthTexture);F.__renderTarget=m,(!F.__webglTexture||m.depthTexture.image.width!==m.width||m.depthTexture.image.height!==m.height)&&(m.depthTexture.image.width=m.width,m.depthTexture.image.height=m.height,m.depthTexture.needsUpdate=!0),fe(m.depthTexture,0);const Q=F.__webglTexture,N=ne(m);if(m.depthTexture.format===vs)oe(m)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Q,0,N):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Q,0);else if(m.depthTexture.format===qi)oe(m)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Q,0,N):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function q(C){const m=n.get(C),S=C.isWebGLCubeRenderTarget===!0;if(m.__boundDepthTexture!==C.depthTexture){const F=C.depthTexture;if(m.__depthDisposeCallback&&m.__depthDisposeCallback(),F){const Q=()=>{delete m.__boundDepthTexture,delete m.__depthDisposeCallback,F.removeEventListener("dispose",Q)};F.addEventListener("dispose",Q),m.__depthDisposeCallback=Q}m.__boundDepthTexture=F}if(C.depthTexture&&!m.__autoAllocateDepthBuffer){if(S)throw new Error("target.depthTexture not supported in Cube render targets");P(m.__webglFramebuffer,C)}else if(S){m.__webglDepthbuffer=[];for(let F=0;F<6;F++)if(t.bindFramebuffer(i.FRAMEBUFFER,m.__webglFramebuffer[F]),m.__webglDepthbuffer[F]===void 0)m.__webglDepthbuffer[F]=i.createRenderbuffer(),v(m.__webglDepthbuffer[F],C,!1);else{const Q=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,N=m.__webglDepthbuffer[F];i.bindRenderbuffer(i.RENDERBUFFER,N),i.framebufferRenderbuffer(i.FRAMEBUFFER,Q,i.RENDERBUFFER,N)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,m.__webglFramebuffer),m.__webglDepthbuffer===void 0)m.__webglDepthbuffer=i.createRenderbuffer(),v(m.__webglDepthbuffer,C,!1);else{const F=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Q=m.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Q),i.framebufferRenderbuffer(i.FRAMEBUFFER,F,i.RENDERBUFFER,Q)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function k(C,m,S){const F=n.get(C);m!==void 0&&Ce(F.__webglFramebuffer,C,C.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),S!==void 0&&q(C)}function K(C){const m=C.texture,S=n.get(C),F=n.get(m);C.addEventListener("dispose",w);const Q=C.textures,N=C.isWebGLCubeRenderTarget===!0,G=Q.length>1;if(G||(F.__webglTexture===void 0&&(F.__webglTexture=i.createTexture()),F.__version=m.version,a.memory.textures++),N){S.__webglFramebuffer=[];for(let H=0;H<6;H++)if(m.mipmaps&&m.mipmaps.length>0){S.__webglFramebuffer[H]=[];for(let $=0;$<m.mipmaps.length;$++)S.__webglFramebuffer[H][$]=i.createFramebuffer()}else S.__webglFramebuffer[H]=i.createFramebuffer()}else{if(m.mipmaps&&m.mipmaps.length>0){S.__webglFramebuffer=[];for(let H=0;H<m.mipmaps.length;H++)S.__webglFramebuffer[H]=i.createFramebuffer()}else S.__webglFramebuffer=i.createFramebuffer();if(G)for(let H=0,$=Q.length;H<$;H++){const _e=n.get(Q[H]);_e.__webglTexture===void 0&&(_e.__webglTexture=i.createTexture(),a.memory.textures++)}if(C.samples>0&&oe(C)===!1){S.__webglMultisampledFramebuffer=i.createFramebuffer(),S.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,S.__webglMultisampledFramebuffer);for(let H=0;H<Q.length;H++){const $=Q[H];S.__webglColorRenderbuffer[H]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,S.__webglColorRenderbuffer[H]);const _e=r.convert($.format,$.colorSpace),J=r.convert($.type),pe=E($.internalFormat,_e,J,$.colorSpace,C.isXRRenderTarget===!0),Se=ne(C);i.renderbufferStorageMultisample(i.RENDERBUFFER,Se,pe,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+H,i.RENDERBUFFER,S.__webglColorRenderbuffer[H])}i.bindRenderbuffer(i.RENDERBUFFER,null),C.depthBuffer&&(S.__webglDepthRenderbuffer=i.createRenderbuffer(),v(S.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(N){t.bindTexture(i.TEXTURE_CUBE_MAP,F.__webglTexture),xe(i.TEXTURE_CUBE_MAP,m);for(let H=0;H<6;H++)if(m.mipmaps&&m.mipmaps.length>0)for(let $=0;$<m.mipmaps.length;$++)Ce(S.__webglFramebuffer[H][$],C,m,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+H,$);else Ce(S.__webglFramebuffer[H],C,m,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+H,0);p(m)&&d(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(G){for(let H=0,$=Q.length;H<$;H++){const _e=Q[H],J=n.get(_e);t.bindTexture(i.TEXTURE_2D,J.__webglTexture),xe(i.TEXTURE_2D,_e),Ce(S.__webglFramebuffer,C,_e,i.COLOR_ATTACHMENT0+H,i.TEXTURE_2D,0),p(_e)&&d(i.TEXTURE_2D)}t.unbindTexture()}else{let H=i.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(H=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(H,F.__webglTexture),xe(H,m),m.mipmaps&&m.mipmaps.length>0)for(let $=0;$<m.mipmaps.length;$++)Ce(S.__webglFramebuffer[$],C,m,i.COLOR_ATTACHMENT0,H,$);else Ce(S.__webglFramebuffer,C,m,i.COLOR_ATTACHMENT0,H,0);p(m)&&d(H),t.unbindTexture()}C.depthBuffer&&q(C)}function X(C){const m=C.textures;for(let S=0,F=m.length;S<F;S++){const Q=m[S];if(p(Q)){const N=x(C),G=n.get(Q).__webglTexture;t.bindTexture(N,G),d(N),t.unbindTexture()}}}const ce=[],R=[];function be(C){if(C.samples>0){if(oe(C)===!1){const m=C.textures,S=C.width,F=C.height;let Q=i.COLOR_BUFFER_BIT;const N=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,G=n.get(C),H=m.length>1;if(H)for(let $=0;$<m.length;$++)t.bindFramebuffer(i.FRAMEBUFFER,G.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+$,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,G.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+$,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,G.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,G.__webglFramebuffer);for(let $=0;$<m.length;$++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(Q|=i.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(Q|=i.STENCIL_BUFFER_BIT)),H){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,G.__webglColorRenderbuffer[$]);const _e=n.get(m[$]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,_e,0)}i.blitFramebuffer(0,0,S,F,0,0,S,F,Q,i.NEAREST),c===!0&&(ce.length=0,R.length=0,ce.push(i.COLOR_ATTACHMENT0+$),C.depthBuffer&&C.resolveDepthBuffer===!1&&(ce.push(N),R.push(N),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,R)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ce))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),H)for(let $=0;$<m.length;$++){t.bindFramebuffer(i.FRAMEBUFFER,G.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+$,i.RENDERBUFFER,G.__webglColorRenderbuffer[$]);const _e=n.get(m[$]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,G.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+$,i.TEXTURE_2D,_e,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,G.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&c){const m=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[m])}}}function ne(C){return Math.min(s.maxSamples,C.samples)}function oe(C){const m=n.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&m.__useRenderToTexture!==!1}function W(C){const m=a.render.frame;h.get(C)!==m&&(h.set(C,m),C.update())}function re(C,m){const S=C.colorSpace,F=C.format,Q=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||S!==Jt&&S!==zn&&(et.getTransfer(S)===ht?(F!==Pt||Q!==Lt)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",S)),m}function O(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(l.width=C.naturalWidth||C.width,l.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(l.width=C.displayWidth,l.height=C.displayHeight):(l.width=C.width,l.height=C.height),l}this.allocateTextureUnit=V,this.resetTextureUnits=j,this.setTexture2D=fe,this.setTexture2DArray=ae,this.setTexture3D=se,this.setTextureCube=te,this.rebindTextures=k,this.setupRenderTarget=K,this.updateRenderTargetMipmap=X,this.updateMultisampleRenderTarget=be,this.setupDepthRenderbuffer=q,this.setupFrameBufferTexture=Ce,this.useMultisampledRTT=oe}function g0(i,e){function t(n,s=zn){let r;const a=et.getTransfer(s);if(n===Lt)return i.UNSIGNED_BYTE;if(n===Dc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Lc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===au)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===su)return i.BYTE;if(n===ru)return i.SHORT;if(n===hr)return i.UNSIGNED_SHORT;if(n===Rc)return i.INT;if(n===Wi)return i.UNSIGNED_INT;if(n===Kt)return i.FLOAT;if(n===Gt)return i.HALF_FLOAT;if(n===ou)return i.ALPHA;if(n===cu)return i.RGB;if(n===Pt)return i.RGBA;if(n===lu)return i.LUMINANCE;if(n===hu)return i.LUMINANCE_ALPHA;if(n===vs)return i.DEPTH_COMPONENT;if(n===qi)return i.DEPTH_STENCIL;if(n===Ci)return i.RED;if(n===Pc)return i.RED_INTEGER;if(n===Gi)return i.RG;if(n===Uc)return i.RG_INTEGER;if(n===Fc)return i.RGBA_INTEGER;if(n===la||n===tr||n===ha||n===nr)if(a===ht)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===la)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===tr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ha)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===nr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===la)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===tr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ha)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===nr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===pa||n===Xo||n===ga||n===Ko)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===pa)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Xo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ga)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ko)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ma||n===ba||n===_a)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===ma||n===ba)return a===ht?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===_a)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===ur||n===Jo||n===Zo||n===$o||n===fr||n===ec||n===tc||n===nc||n===ic||n===sc||n===rc||n===ac||n===oc||n===cc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ur)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Jo)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Zo)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===$o)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===fr)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ec)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===tc)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===nc)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ic)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===sc)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===rc)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ac)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===oc)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===cc)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ir||n===lc||n===Ea)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===ir)return a===ht?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===lc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ea)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===uu||n===hc||n===uc||n===fc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===ir)return r.COMPRESSED_RED_RGTC1_EXT;if(n===hc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===uc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===fc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ji?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}class m0 extends tn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Un extends mt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const b0={type:"move"};class po{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Un,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Un,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Un,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const _ of e.hand.values()){const p=t.getJointPose(_,n),d=this._getHandJoint(l,_);p!==null&&(d.matrix.fromArray(p.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=p.radius),d.visible=p!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],f=h.position.distanceTo(u.position),A=.02,g=.005;l.inputState.pinching&&f>A+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=A-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(b0)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Un;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const _0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,E0=`
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

}`;class x0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const s=new wt,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Bt({vertexShader:_0,fragmentShader:E0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new rt(new Ts(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class v0 extends Ki{constructor(e,t){super();const n=this;let s=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,u=null,f=null,A=null,g=null;const _=new x0,p=t.getContextAttributes();let d=null,x=null;const E=[],b=[],L=new De;let B=null;const w=new tn;w.viewport=new at;const D=new tn;D.viewport=new at;const M=[w,D],y=new m0;let T=null,j=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let de=E[Y];return de===void 0&&(de=new po,E[Y]=de),de.getTargetRaySpace()},this.getControllerGrip=function(Y){let de=E[Y];return de===void 0&&(de=new po,E[Y]=de),de.getGripSpace()},this.getHand=function(Y){let de=E[Y];return de===void 0&&(de=new po,E[Y]=de),de.getHandSpace()};function V(Y){const de=b.indexOf(Y.inputSource);if(de===-1)return;const Ce=E[de];Ce!==void 0&&(Ce.update(Y.inputSource,Y.frame,l||a),Ce.dispatchEvent({type:Y.type,data:Y.inputSource}))}function he(){s.removeEventListener("select",V),s.removeEventListener("selectstart",V),s.removeEventListener("selectend",V),s.removeEventListener("squeeze",V),s.removeEventListener("squeezestart",V),s.removeEventListener("squeezeend",V),s.removeEventListener("end",he),s.removeEventListener("inputsourceschange",fe);for(let Y=0;Y<E.length;Y++){const de=b[Y];de!==null&&(b[Y]=null,E[Y].disconnect(de))}T=null,j=null,_.reset(),e.setRenderTarget(d),A=null,f=null,u=null,s=null,x=null,ve.stop(),n.isPresenting=!1,e.setPixelRatio(B),e.setSize(L.width,L.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){o=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(Y){l=Y},this.getBaseLayer=function(){return f!==null?f:A},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(Y){if(s=Y,s!==null){if(d=e.getRenderTarget(),s.addEventListener("select",V),s.addEventListener("selectstart",V),s.addEventListener("selectend",V),s.addEventListener("squeeze",V),s.addEventListener("squeezestart",V),s.addEventListener("squeezeend",V),s.addEventListener("end",he),s.addEventListener("inputsourceschange",fe),p.xrCompatible!==!0&&await t.makeXRCompatible(),B=e.getPixelRatio(),e.getSize(L),s.renderState.layers===void 0){const de={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};A=new XRWebGLLayer(s,t,de),s.updateRenderState({baseLayer:A}),e.setPixelRatio(1),e.setSize(A.framebufferWidth,A.framebufferHeight,!1),x=new pn(A.framebufferWidth,A.framebufferHeight,{format:Pt,type:Lt,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let de=null,Ce=null,v=null;p.depth&&(v=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,de=p.stencil?qi:vs,Ce=p.stencil?ji:Wi);const P={colorFormat:t.RGBA8,depthFormat:v,scaleFactor:r};u=new XRWebGLBinding(s,t),f=u.createProjectionLayer(P),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),x=new pn(f.textureWidth,f.textureHeight,{format:Pt,type:Lt,depthTexture:new kc(f.textureWidth,f.textureHeight,Ce,void 0,void 0,void 0,void 0,void 0,void 0,de),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),ve.setContext(s),ve.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function fe(Y){for(let de=0;de<Y.removed.length;de++){const Ce=Y.removed[de],v=b.indexOf(Ce);v>=0&&(b[v]=null,E[v].disconnect(Ce))}for(let de=0;de<Y.added.length;de++){const Ce=Y.added[de];let v=b.indexOf(Ce);if(v===-1){for(let q=0;q<E.length;q++)if(q>=b.length){b.push(Ce),v=q;break}else if(b[q]===null){b[q]=Ce,v=q;break}if(v===-1)break}const P=E[v];P&&P.connect(Ce)}}const ae=new U,se=new U;function te(Y,de,Ce){ae.setFromMatrixPosition(de.matrixWorld),se.setFromMatrixPosition(Ce.matrixWorld);const v=ae.distanceTo(se),P=de.projectionMatrix.elements,q=Ce.projectionMatrix.elements,k=P[14]/(P[10]-1),K=P[14]/(P[10]+1),X=(P[9]+1)/P[5],ce=(P[9]-1)/P[5],R=(P[8]-1)/P[0],be=(q[8]+1)/q[0],ne=k*R,oe=k*be,W=v/(-R+be),re=W*-R;if(de.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(re),Y.translateZ(W),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),P[10]===-1)Y.projectionMatrix.copy(de.projectionMatrix),Y.projectionMatrixInverse.copy(de.projectionMatrixInverse);else{const O=k+W,C=K+W,m=ne-re,S=oe+(v-re),F=X*K/C*O,Q=ce*K/C*O;Y.projectionMatrix.makePerspective(m,S,F,Q,O,C),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function ge(Y,de){de===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(de.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(s===null)return;let de=Y.near,Ce=Y.far;_.texture!==null&&(_.depthNear>0&&(de=_.depthNear),_.depthFar>0&&(Ce=_.depthFar)),y.near=D.near=w.near=de,y.far=D.far=w.far=Ce,(T!==y.near||j!==y.far)&&(s.updateRenderState({depthNear:y.near,depthFar:y.far}),T=y.near,j=y.far),w.layers.mask=Y.layers.mask|2,D.layers.mask=Y.layers.mask|4,y.layers.mask=w.layers.mask|D.layers.mask;const v=Y.parent,P=y.cameras;ge(y,v);for(let q=0;q<P.length;q++)ge(P[q],v);P.length===2?te(y,w,D):y.projectionMatrix.copy(w.projectionMatrix),ie(Y,y,v)};function ie(Y,de,Ce){Ce===null?Y.matrix.copy(de.matrixWorld):(Y.matrix.copy(Ce.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(de.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(de.projectionMatrix),Y.projectionMatrixInverse.copy(de.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Is*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(f===null&&A===null))return c},this.setFoveation=function(Y){c=Y,f!==null&&(f.fixedFoveation=Y),A!==null&&A.fixedFoveation!==void 0&&(A.fixedFoveation=Y)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(y)};let me=null;function xe(Y,de){if(h=de.getViewerPose(l||a),g=de,h!==null){const Ce=h.views;A!==null&&(e.setRenderTargetFramebuffer(x,A.framebuffer),e.setRenderTarget(x));let v=!1;Ce.length!==y.cameras.length&&(y.cameras.length=0,v=!0);for(let q=0;q<Ce.length;q++){const k=Ce[q];let K=null;if(A!==null)K=A.getViewport(k);else{const ce=u.getViewSubImage(f,k);K=ce.viewport,q===0&&(e.setRenderTargetTextures(x,ce.colorTexture,f.ignoreDepthValues?void 0:ce.depthStencilTexture),e.setRenderTarget(x))}let X=M[q];X===void 0&&(X=new tn,X.layers.enable(q),X.viewport=new at,M[q]=X),X.matrix.fromArray(k.transform.matrix),X.matrix.decompose(X.position,X.quaternion,X.scale),X.projectionMatrix.fromArray(k.projectionMatrix),X.projectionMatrixInverse.copy(X.projectionMatrix).invert(),X.viewport.set(K.x,K.y,K.width,K.height),q===0&&(y.matrix.copy(X.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),v===!0&&y.cameras.push(X)}const P=s.enabledFeatures;if(P&&P.includes("depth-sensing")){const q=u.getDepthInformation(Ce[0]);q&&q.isValid&&q.texture&&_.init(e,q,s.renderState)}}for(let Ce=0;Ce<E.length;Ce++){const v=b[Ce],P=E[Ce];v!==null&&P!==void 0&&P.update(v,de,l||a)}me&&me(Y,de),de.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:de}),g=null}const ve=new Cu;ve.setAnimationLoop(xe),this.setAnimationLoop=function(Y){me=Y},this.dispose=function(){}}}const Fi=new Cn,y0=new Qe;function M0(i,e){function t(p,d){p.matrixAutoUpdate===!0&&p.updateMatrix(),d.value.copy(p.matrix)}function n(p,d){d.color.getRGB(p.fogColor.value,vu(i)),d.isFog?(p.fogNear.value=d.near,p.fogFar.value=d.far):d.isFogExp2&&(p.fogDensity.value=d.density)}function s(p,d,x,E,b){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(p,d):d.isMeshToonMaterial?(r(p,d),u(p,d)):d.isMeshPhongMaterial?(r(p,d),h(p,d)):d.isMeshStandardMaterial?(r(p,d),f(p,d),d.isMeshPhysicalMaterial&&A(p,d,b)):d.isMeshMatcapMaterial?(r(p,d),g(p,d)):d.isMeshDepthMaterial?r(p,d):d.isMeshDistanceMaterial?(r(p,d),_(p,d)):d.isMeshNormalMaterial?r(p,d):d.isLineBasicMaterial?(a(p,d),d.isLineDashedMaterial&&o(p,d)):d.isPointsMaterial?c(p,d,x,E):d.isSpriteMaterial?l(p,d):d.isShadowMaterial?(p.color.value.copy(d.color),p.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(p,d){p.opacity.value=d.opacity,d.color&&p.diffuse.value.copy(d.color),d.emissive&&p.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(p.map.value=d.map,t(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.bumpMap&&(p.bumpMap.value=d.bumpMap,t(d.bumpMap,p.bumpMapTransform),p.bumpScale.value=d.bumpScale,d.side===hn&&(p.bumpScale.value*=-1)),d.normalMap&&(p.normalMap.value=d.normalMap,t(d.normalMap,p.normalMapTransform),p.normalScale.value.copy(d.normalScale),d.side===hn&&p.normalScale.value.negate()),d.displacementMap&&(p.displacementMap.value=d.displacementMap,t(d.displacementMap,p.displacementMapTransform),p.displacementScale.value=d.displacementScale,p.displacementBias.value=d.displacementBias),d.emissiveMap&&(p.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,p.emissiveMapTransform)),d.specularMap&&(p.specularMap.value=d.specularMap,t(d.specularMap,p.specularMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);const x=e.get(d),E=x.envMap,b=x.envMapRotation;E&&(p.envMap.value=E,Fi.copy(b),Fi.x*=-1,Fi.y*=-1,Fi.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(Fi.y*=-1,Fi.z*=-1),p.envMapRotation.value.setFromMatrix4(y0.makeRotationFromEuler(Fi)),p.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=d.reflectivity,p.ior.value=d.ior,p.refractionRatio.value=d.refractionRatio),d.lightMap&&(p.lightMap.value=d.lightMap,p.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,p.lightMapTransform)),d.aoMap&&(p.aoMap.value=d.aoMap,p.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,p.aoMapTransform))}function a(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,d.map&&(p.map.value=d.map,t(d.map,p.mapTransform))}function o(p,d){p.dashSize.value=d.dashSize,p.totalSize.value=d.dashSize+d.gapSize,p.scale.value=d.scale}function c(p,d,x,E){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.size.value=d.size*x,p.scale.value=E*.5,d.map&&(p.map.value=d.map,t(d.map,p.uvTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function l(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.rotation.value=d.rotation,d.map&&(p.map.value=d.map,t(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function h(p,d){p.specular.value.copy(d.specular),p.shininess.value=Math.max(d.shininess,1e-4)}function u(p,d){d.gradientMap&&(p.gradientMap.value=d.gradientMap)}function f(p,d){p.metalness.value=d.metalness,d.metalnessMap&&(p.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,p.metalnessMapTransform)),p.roughness.value=d.roughness,d.roughnessMap&&(p.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,p.roughnessMapTransform)),d.envMap&&(p.envMapIntensity.value=d.envMapIntensity)}function A(p,d,x){p.ior.value=d.ior,d.sheen>0&&(p.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),p.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(p.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,p.sheenColorMapTransform)),d.sheenRoughnessMap&&(p.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,p.sheenRoughnessMapTransform))),d.clearcoat>0&&(p.clearcoat.value=d.clearcoat,p.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(p.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,p.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(p.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===hn&&p.clearcoatNormalScale.value.negate())),d.dispersion>0&&(p.dispersion.value=d.dispersion),d.iridescence>0&&(p.iridescence.value=d.iridescence,p.iridescenceIOR.value=d.iridescenceIOR,p.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(p.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,p.iridescenceMapTransform)),d.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),d.transmission>0&&(p.transmission.value=d.transmission,p.transmissionSamplerMap.value=x.texture,p.transmissionSamplerSize.value.set(x.width,x.height),d.transmissionMap&&(p.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,p.transmissionMapTransform)),p.thickness.value=d.thickness,d.thicknessMap&&(p.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=d.attenuationDistance,p.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(p.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(p.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=d.specularIntensity,p.specularColor.value.copy(d.specularColor),d.specularColorMap&&(p.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,p.specularColorMapTransform)),d.specularIntensityMap&&(p.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,d){d.matcap&&(p.matcap.value=d.matcap)}function _(p,d){const x=e.get(d).light;p.referencePosition.value.setFromMatrixPosition(x.matrixWorld),p.nearDistance.value=x.shadow.camera.near,p.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function C0(i,e,t,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(x,E){const b=E.program;n.uniformBlockBinding(x,b)}function l(x,E){let b=s[x.id];b===void 0&&(g(x),b=h(x),s[x.id]=b,x.addEventListener("dispose",p));const L=E.program;n.updateUBOMapping(x,L);const B=e.render.frame;r[x.id]!==B&&(f(x),r[x.id]=B)}function h(x){const E=u();x.__bindingPointIndex=E;const b=i.createBuffer(),L=x.__size,B=x.usage;return i.bindBuffer(i.UNIFORM_BUFFER,b),i.bufferData(i.UNIFORM_BUFFER,L,B),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,E,b),b}function u(){for(let x=0;x<o;x++)if(a.indexOf(x)===-1)return a.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(x){const E=s[x.id],b=x.uniforms,L=x.__cache;i.bindBuffer(i.UNIFORM_BUFFER,E);for(let B=0,w=b.length;B<w;B++){const D=Array.isArray(b[B])?b[B]:[b[B]];for(let M=0,y=D.length;M<y;M++){const T=D[M];if(A(T,B,M,L)===!0){const j=T.__offset,V=Array.isArray(T.value)?T.value:[T.value];let he=0;for(let fe=0;fe<V.length;fe++){const ae=V[fe],se=_(ae);typeof ae=="number"||typeof ae=="boolean"?(T.__data[0]=ae,i.bufferSubData(i.UNIFORM_BUFFER,j+he,T.__data)):ae.isMatrix3?(T.__data[0]=ae.elements[0],T.__data[1]=ae.elements[1],T.__data[2]=ae.elements[2],T.__data[3]=0,T.__data[4]=ae.elements[3],T.__data[5]=ae.elements[4],T.__data[6]=ae.elements[5],T.__data[7]=0,T.__data[8]=ae.elements[6],T.__data[9]=ae.elements[7],T.__data[10]=ae.elements[8],T.__data[11]=0):(ae.toArray(T.__data,he),he+=se.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,j,T.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function A(x,E,b,L){const B=x.value,w=E+"_"+b;if(L[w]===void 0)return typeof B=="number"||typeof B=="boolean"?L[w]=B:L[w]=B.clone(),!0;{const D=L[w];if(typeof B=="number"||typeof B=="boolean"){if(D!==B)return L[w]=B,!0}else if(D.equals(B)===!1)return D.copy(B),!0}return!1}function g(x){const E=x.uniforms;let b=0;const L=16;for(let w=0,D=E.length;w<D;w++){const M=Array.isArray(E[w])?E[w]:[E[w]];for(let y=0,T=M.length;y<T;y++){const j=M[y],V=Array.isArray(j.value)?j.value:[j.value];for(let he=0,fe=V.length;he<fe;he++){const ae=V[he],se=_(ae),te=b%L,ge=te%se.boundary,ie=te+ge;b+=ge,ie!==0&&L-ie<se.storage&&(b+=L-ie),j.__data=new Float32Array(se.storage/Float32Array.BYTES_PER_ELEMENT),j.__offset=b,b+=se.storage}}}const B=b%L;return B>0&&(b+=L-B),x.__size=b,x.__cache={},this}function _(x){const E={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(E.boundary=4,E.storage=4):x.isVector2?(E.boundary=8,E.storage=8):x.isVector3||x.isColor?(E.boundary=16,E.storage=12):x.isVector4?(E.boundary=16,E.storage=16):x.isMatrix3?(E.boundary=48,E.storage=48):x.isMatrix4?(E.boundary=64,E.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),E}function p(x){const E=x.target;E.removeEventListener("dispose",p);const b=a.indexOf(E.__bindingPointIndex);a.splice(b,1),i.deleteBuffer(s[E.id]),delete s[E.id],delete r[E.id]}function d(){for(const x in s)i.deleteBuffer(s[x]);a=[],s={},r={}}return{bind:c,update:l,dispose:d}}class S0{constructor(e={}){const{canvas:t=gd(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let A;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");A=n.getContextAttributes().alpha}else A=a;const g=new Uint32Array(4),_=new Int32Array(4);let p=null,d=null;const x=[],E=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=_t,this.toneMapping=Ti,this.toneMappingExposure=1;const b=this;let L=!1,B=0,w=0,D=null,M=-1,y=null;const T=new at,j=new at;let V=null;const he=new Me(0);let fe=0,ae=t.width,se=t.height,te=1,ge=null,ie=null;const me=new at(0,0,ae,se),xe=new at(0,0,ae,se);let ve=!1;const Y=new Qc;let de=!1,Ce=!1;const v=new Qe,P=new Qe,q=new U,k=new at,K={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let X=!1;function ce(){return D===null?te:1}let R=n;function be(I,Z){return t.getContext(I,Z)}try{const I={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Sc}`),t.addEventListener("webglcontextlost",Ee,!1),t.addEventListener("webglcontextrestored",Re,!1),t.addEventListener("webglcontextcreationerror",Le,!1),R===null){const Z="webgl2";if(R=be(Z,I),R===null)throw be(Z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(I){throw console.error("THREE.WebGLRenderer: "+I.message),I}let ne,oe,W,re,O,C,m,S,F,Q,N,G,H,$,_e,J,pe,Se,we,ye,Ue,Fe,qe,z;function Ie(){ne=new Rg(R),ne.init(),Fe=new g0(R,ne),oe=new Cg(R,ne,e,Fe),W=new d0(R,ne),oe.reverseDepthBuffer&&f&&W.buffers.depth.setReversed(!0),re=new Pg(R),O=new Zm,C=new p0(R,ne,W,O,oe,Fe,re),m=new Ig(b),S=new Bg(b),F=new Gd(R),qe=new yg(R,F),Q=new Dg(R,F,re,qe),N=new Fg(R,Q,F,re),we=new Ug(R,oe,C),J=new Sg(O),G=new Jm(b,m,S,ne,oe,qe,J),H=new M0(b,O),$=new e0,_e=new a0(ne),Se=new vg(b,m,S,W,N,A,c),pe=new u0(b,N,oe),z=new C0(R,re,oe,W),ye=new Mg(R,ne,re),Ue=new Lg(R,ne,re),re.programs=G.programs,b.capabilities=oe,b.extensions=ne,b.properties=O,b.renderLists=$,b.shadowMap=pe,b.state=W,b.info=re}Ie();const Ae=new v0(b,R);this.xr=Ae,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){const I=ne.get("WEBGL_lose_context");I&&I.loseContext()},this.forceContextRestore=function(){const I=ne.get("WEBGL_lose_context");I&&I.restoreContext()},this.getPixelRatio=function(){return te},this.setPixelRatio=function(I){I!==void 0&&(te=I,this.setSize(ae,se,!1))},this.getSize=function(I){return I.set(ae,se)},this.setSize=function(I,Z,le=!0){if(Ae.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ae=I,se=Z,t.width=Math.floor(I*te),t.height=Math.floor(Z*te),le===!0&&(t.style.width=I+"px",t.style.height=Z+"px"),this.setViewport(0,0,I,Z)},this.getDrawingBufferSize=function(I){return I.set(ae*te,se*te).floor()},this.setDrawingBufferSize=function(I,Z,le){ae=I,se=Z,te=le,t.width=Math.floor(I*le),t.height=Math.floor(Z*le),this.setViewport(0,0,I,Z)},this.getCurrentViewport=function(I){return I.copy(T)},this.getViewport=function(I){return I.copy(me)},this.setViewport=function(I,Z,le,ue){I.isVector4?me.set(I.x,I.y,I.z,I.w):me.set(I,Z,le,ue),W.viewport(T.copy(me).multiplyScalar(te).round())},this.getScissor=function(I){return I.copy(xe)},this.setScissor=function(I,Z,le,ue){I.isVector4?xe.set(I.x,I.y,I.z,I.w):xe.set(I,Z,le,ue),W.scissor(j.copy(xe).multiplyScalar(te).round())},this.getScissorTest=function(){return ve},this.setScissorTest=function(I){W.setScissorTest(ve=I)},this.setOpaqueSort=function(I){ge=I},this.setTransparentSort=function(I){ie=I},this.getClearColor=function(I){return I.copy(Se.getClearColor())},this.setClearColor=function(){Se.setClearColor.apply(Se,arguments)},this.getClearAlpha=function(){return Se.getClearAlpha()},this.setClearAlpha=function(){Se.setClearAlpha.apply(Se,arguments)},this.clear=function(I=!0,Z=!0,le=!0){let ue=0;if(I){let ee=!1;if(D!==null){const Te=D.texture.format;ee=Te===Fc||Te===Uc||Te===Pc}if(ee){const Te=D.texture.type,Pe=Te===Lt||Te===Wi||Te===hr||Te===ji||Te===Dc||Te===Lc,Oe=Se.getClearColor(),ke=Se.getClearAlpha(),Ye=Oe.r,Ke=Oe.g,Ge=Oe.b;Pe?(g[0]=Ye,g[1]=Ke,g[2]=Ge,g[3]=ke,R.clearBufferuiv(R.COLOR,0,g)):(_[0]=Ye,_[1]=Ke,_[2]=Ge,_[3]=ke,R.clearBufferiv(R.COLOR,0,_))}else ue|=R.COLOR_BUFFER_BIT}Z&&(ue|=R.DEPTH_BUFFER_BIT),le&&(ue|=R.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),R.clear(ue)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Ee,!1),t.removeEventListener("webglcontextrestored",Re,!1),t.removeEventListener("webglcontextcreationerror",Le,!1),$.dispose(),_e.dispose(),O.dispose(),m.dispose(),S.dispose(),N.dispose(),qe.dispose(),z.dispose(),G.dispose(),Ae.dispose(),Ae.removeEventListener("sessionstart",Jc),Ae.removeEventListener("sessionend",Zc),Bi.stop()};function Ee(I){I.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),L=!0}function Re(){console.log("THREE.WebGLRenderer: Context Restored."),L=!1;const I=re.autoReset,Z=pe.enabled,le=pe.autoUpdate,ue=pe.needsUpdate,ee=pe.type;Ie(),re.autoReset=I,pe.enabled=Z,pe.autoUpdate=le,pe.needsUpdate=ue,pe.type=ee}function Le(I){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",I.statusMessage)}function Xe(I){const Z=I.target;Z.removeEventListener("dispose",Xe),xt(Z)}function xt(I){Vt(I),O.remove(I)}function Vt(I){const Z=O.get(I).programs;Z!==void 0&&(Z.forEach(function(le){G.releaseProgram(le)}),I.isShaderMaterial&&G.releaseShaderCache(I))}this.renderBufferDirect=function(I,Z,le,ue,ee,Te){Z===null&&(Z=K);const Pe=ee.isMesh&&ee.matrixWorld.determinant()<0,Oe=_f(I,Z,le,ue,ee);W.setMaterial(ue,Pe);let ke=le.index,Ye=1;if(ue.wireframe===!0){if(ke=Q.getWireframeAttribute(le),ke===void 0)return;Ye=2}const Ke=le.drawRange,Ge=le.attributes.position;let st=Ke.start*Ye,At=(Ke.start+Ke.count)*Ye;Te!==null&&(st=Math.max(st,Te.start*Ye),At=Math.min(At,(Te.start+Te.count)*Ye)),ke!==null?(st=Math.max(st,0),At=Math.min(At,ke.count)):Ge!=null&&(st=Math.max(st,0),At=Math.min(At,Ge.count));const pt=At-st;if(pt<0||pt===1/0)return;qe.setup(ee,ue,Oe,le,ke);let an,ot=ye;if(ke!==null&&(an=F.get(ke),ot=Ue,ot.setIndex(an)),ee.isMesh)ue.wireframe===!0?(W.setLineWidth(ue.wireframeLinewidth*ce()),ot.setMode(R.LINES)):ot.setMode(R.TRIANGLES);else if(ee.isLine){let He=ue.linewidth;He===void 0&&(He=1),W.setLineWidth(He*ce()),ee.isLineSegments?ot.setMode(R.LINES):ee.isLineLoop?ot.setMode(R.LINE_LOOP):ot.setMode(R.LINE_STRIP)}else ee.isPoints?ot.setMode(R.POINTS):ee.isSprite&&ot.setMode(R.TRIANGLES);if(ee.isBatchedMesh)if(ee._multiDrawInstances!==null)ot.renderMultiDrawInstances(ee._multiDrawStarts,ee._multiDrawCounts,ee._multiDrawCount,ee._multiDrawInstances);else if(ne.get("WEBGL_multi_draw"))ot.renderMultiDraw(ee._multiDrawStarts,ee._multiDrawCounts,ee._multiDrawCount);else{const He=ee._multiDrawStarts,Kn=ee._multiDrawCounts,ct=ee._multiDrawCount,In=ke?F.get(ke).bytesPerElement:1,es=O.get(ue).currentProgram.getUniforms();for(let un=0;un<ct;un++)es.setValue(R,"_gl_DrawID",un),ot.render(He[un]/In,Kn[un])}else if(ee.isInstancedMesh)ot.renderInstances(st,pt,ee.count);else if(le.isInstancedBufferGeometry){const He=le._maxInstanceCount!==void 0?le._maxInstanceCount:1/0,Kn=Math.min(le.instanceCount,He);ot.renderInstances(st,pt,Kn)}else ot.render(st,pt)};function lt(I,Z,le){I.transparent===!0&&I.side===yt&&I.forceSinglePass===!1?(I.side=hn,I.needsUpdate=!0,Cr(I,Z,le),I.side=Nn,I.needsUpdate=!0,Cr(I,Z,le),I.side=yt):Cr(I,Z,le)}this.compile=function(I,Z,le=null){le===null&&(le=I),d=_e.get(le),d.init(Z),E.push(d),le.traverseVisible(function(ee){ee.isLight&&ee.layers.test(Z.layers)&&(d.pushLight(ee),ee.castShadow&&d.pushShadow(ee))}),I!==le&&I.traverseVisible(function(ee){ee.isLight&&ee.layers.test(Z.layers)&&(d.pushLight(ee),ee.castShadow&&d.pushShadow(ee))}),d.setupLights();const ue=new Set;return I.traverse(function(ee){if(!(ee.isMesh||ee.isPoints||ee.isLine||ee.isSprite))return;const Te=ee.material;if(Te)if(Array.isArray(Te))for(let Pe=0;Pe<Te.length;Pe++){const Oe=Te[Pe];lt(Oe,le,ee),ue.add(Oe)}else lt(Te,le,ee),ue.add(Te)}),E.pop(),d=null,ue},this.compileAsync=function(I,Z,le=null){const ue=this.compile(I,Z,le);return new Promise(ee=>{function Te(){if(ue.forEach(function(Pe){O.get(Pe).currentProgram.isReady()&&ue.delete(Pe)}),ue.size===0){ee(I);return}setTimeout(Te,10)}ne.get("KHR_parallel_shader_compile")!==null?Te():setTimeout(Te,10)})};let Sn=null;function Xn(I){Sn&&Sn(I)}function Jc(){Bi.stop()}function Zc(){Bi.start()}const Bi=new Cu;Bi.setAnimationLoop(Xn),typeof self<"u"&&Bi.setContext(self),this.setAnimationLoop=function(I){Sn=I,Ae.setAnimationLoop(I),I===null?Bi.stop():Bi.start()},Ae.addEventListener("sessionstart",Jc),Ae.addEventListener("sessionend",Zc),this.render=function(I,Z){if(Z!==void 0&&Z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;if(I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),Z.parent===null&&Z.matrixWorldAutoUpdate===!0&&Z.updateMatrixWorld(),Ae.enabled===!0&&Ae.isPresenting===!0&&(Ae.cameraAutoUpdate===!0&&Ae.updateCamera(Z),Z=Ae.getCamera()),I.isScene===!0&&I.onBeforeRender(b,I,Z,D),d=_e.get(I,E.length),d.init(Z),E.push(d),P.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),Y.setFromProjectionMatrix(P),Ce=this.localClippingEnabled,de=J.init(this.clippingPlanes,Ce),p=$.get(I,x.length),p.init(),x.push(p),Ae.enabled===!0&&Ae.isPresenting===!0){const Te=b.xr.getDepthSensingMesh();Te!==null&&ka(Te,Z,-1/0,b.sortObjects)}ka(I,Z,0,b.sortObjects),p.finish(),b.sortObjects===!0&&p.sort(ge,ie),X=Ae.enabled===!1||Ae.isPresenting===!1||Ae.hasDepthSensing()===!1,X&&Se.addToRenderList(p,I),this.info.render.frame++,de===!0&&J.beginShadows();const le=d.state.shadowsArray;pe.render(le,I,Z),de===!0&&J.endShadows(),this.info.autoReset===!0&&this.info.reset();const ue=p.opaque,ee=p.transmissive;if(d.setupLights(),Z.isArrayCamera){const Te=Z.cameras;if(ee.length>0)for(let Pe=0,Oe=Te.length;Pe<Oe;Pe++){const ke=Te[Pe];el(ue,ee,I,ke)}X&&Se.render(I);for(let Pe=0,Oe=Te.length;Pe<Oe;Pe++){const ke=Te[Pe];$c(p,I,ke,ke.viewport)}}else ee.length>0&&el(ue,ee,I,Z),X&&Se.render(I),$c(p,I,Z);D!==null&&(C.updateMultisampleRenderTarget(D),C.updateRenderTargetMipmap(D)),I.isScene===!0&&I.onAfterRender(b,I,Z),qe.resetDefaultState(),M=-1,y=null,E.pop(),E.length>0?(d=E[E.length-1],de===!0&&J.setGlobalState(b.clippingPlanes,d.state.camera)):d=null,x.pop(),x.length>0?p=x[x.length-1]:p=null};function ka(I,Z,le,ue){if(I.visible===!1)return;if(I.layers.test(Z.layers)){if(I.isGroup)le=I.renderOrder;else if(I.isLOD)I.autoUpdate===!0&&I.update(Z);else if(I.isLight)d.pushLight(I),I.castShadow&&d.pushShadow(I);else if(I.isSprite){if(!I.frustumCulled||Y.intersectsSprite(I)){ue&&k.setFromMatrixPosition(I.matrixWorld).applyMatrix4(P);const Pe=N.update(I),Oe=I.material;Oe.visible&&p.push(I,Pe,Oe,le,k.z,null)}}else if((I.isMesh||I.isLine||I.isPoints)&&(!I.frustumCulled||Y.intersectsObject(I))){const Pe=N.update(I),Oe=I.material;if(ue&&(I.boundingSphere!==void 0?(I.boundingSphere===null&&I.computeBoundingSphere(),k.copy(I.boundingSphere.center)):(Pe.boundingSphere===null&&Pe.computeBoundingSphere(),k.copy(Pe.boundingSphere.center)),k.applyMatrix4(I.matrixWorld).applyMatrix4(P)),Array.isArray(Oe)){const ke=Pe.groups;for(let Ye=0,Ke=ke.length;Ye<Ke;Ye++){const Ge=ke[Ye],st=Oe[Ge.materialIndex];st&&st.visible&&p.push(I,Pe,st,le,k.z,Ge)}}else Oe.visible&&p.push(I,Pe,Oe,le,k.z,null)}}const Te=I.children;for(let Pe=0,Oe=Te.length;Pe<Oe;Pe++)ka(Te[Pe],Z,le,ue)}function $c(I,Z,le,ue){const ee=I.opaque,Te=I.transmissive,Pe=I.transparent;d.setupLightsView(le),de===!0&&J.setGlobalState(b.clippingPlanes,le),ue&&W.viewport(T.copy(ue)),ee.length>0&&Mr(ee,Z,le),Te.length>0&&Mr(Te,Z,le),Pe.length>0&&Mr(Pe,Z,le),W.buffers.depth.setTest(!0),W.buffers.depth.setMask(!0),W.buffers.color.setMask(!0),W.setPolygonOffset(!1)}function el(I,Z,le,ue){if((le.isScene===!0?le.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[ue.id]===void 0&&(d.state.transmissionRenderTarget[ue.id]=new pn(1,1,{generateMipmaps:!0,type:ne.has("EXT_color_buffer_half_float")||ne.has("EXT_color_buffer_float")?Gt:Lt,minFilter:Vn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:et.workingColorSpace}));const Te=d.state.transmissionRenderTarget[ue.id],Pe=ue.viewport||T;Te.setSize(Pe.z,Pe.w);const Oe=b.getRenderTarget();b.setRenderTarget(Te),b.getClearColor(he),fe=b.getClearAlpha(),fe<1&&b.setClearColor(16777215,.5),b.clear(),X&&Se.render(le);const ke=b.toneMapping;b.toneMapping=Ti;const Ye=ue.viewport;if(ue.viewport!==void 0&&(ue.viewport=void 0),d.setupLightsView(ue),de===!0&&J.setGlobalState(b.clippingPlanes,ue),Mr(I,le,ue),C.updateMultisampleRenderTarget(Te),C.updateRenderTargetMipmap(Te),ne.has("WEBGL_multisampled_render_to_texture")===!1){let Ke=!1;for(let Ge=0,st=Z.length;Ge<st;Ge++){const At=Z[Ge],pt=At.object,an=At.geometry,ot=At.material,He=At.group;if(ot.side===yt&&pt.layers.test(ue.layers)){const Kn=ot.side;ot.side=hn,ot.needsUpdate=!0,tl(pt,le,ue,an,ot,He),ot.side=Kn,ot.needsUpdate=!0,Ke=!0}}Ke===!0&&(C.updateMultisampleRenderTarget(Te),C.updateRenderTargetMipmap(Te))}b.setRenderTarget(Oe),b.setClearColor(he,fe),Ye!==void 0&&(ue.viewport=Ye),b.toneMapping=ke}function Mr(I,Z,le){const ue=Z.isScene===!0?Z.overrideMaterial:null;for(let ee=0,Te=I.length;ee<Te;ee++){const Pe=I[ee],Oe=Pe.object,ke=Pe.geometry,Ye=ue===null?Pe.material:ue,Ke=Pe.group;Oe.layers.test(le.layers)&&tl(Oe,Z,le,ke,Ye,Ke)}}function tl(I,Z,le,ue,ee,Te){I.onBeforeRender(b,Z,le,ue,ee,Te),I.modelViewMatrix.multiplyMatrices(le.matrixWorldInverse,I.matrixWorld),I.normalMatrix.getNormalMatrix(I.modelViewMatrix),ee.onBeforeRender(b,Z,le,ue,I,Te),ee.transparent===!0&&ee.side===yt&&ee.forceSinglePass===!1?(ee.side=hn,ee.needsUpdate=!0,b.renderBufferDirect(le,Z,ue,ee,I,Te),ee.side=Nn,ee.needsUpdate=!0,b.renderBufferDirect(le,Z,ue,ee,I,Te),ee.side=yt):b.renderBufferDirect(le,Z,ue,ee,I,Te),I.onAfterRender(b,Z,le,ue,ee,Te)}function Cr(I,Z,le){Z.isScene!==!0&&(Z=K);const ue=O.get(I),ee=d.state.lights,Te=d.state.shadowsArray,Pe=ee.state.version,Oe=G.getParameters(I,ee.state,Te,Z,le),ke=G.getProgramCacheKey(Oe);let Ye=ue.programs;ue.environment=I.isMeshStandardMaterial?Z.environment:null,ue.fog=Z.fog,ue.envMap=(I.isMeshStandardMaterial?S:m).get(I.envMap||ue.environment),ue.envMapRotation=ue.environment!==null&&I.envMap===null?Z.environmentRotation:I.envMapRotation,Ye===void 0&&(I.addEventListener("dispose",Xe),Ye=new Map,ue.programs=Ye);let Ke=Ye.get(ke);if(Ke!==void 0){if(ue.currentProgram===Ke&&ue.lightsStateVersion===Pe)return il(I,Oe),Ke}else Oe.uniforms=G.getUniforms(I),I.onBeforeCompile(Oe,b),Ke=G.acquireProgram(Oe,ke),Ye.set(ke,Ke),ue.uniforms=Oe.uniforms;const Ge=ue.uniforms;return(!I.isShaderMaterial&&!I.isRawShaderMaterial||I.clipping===!0)&&(Ge.clippingPlanes=J.uniform),il(I,Oe),ue.needsLights=xf(I),ue.lightsStateVersion=Pe,ue.needsLights&&(Ge.ambientLightColor.value=ee.state.ambient,Ge.lightProbe.value=ee.state.probe,Ge.directionalLights.value=ee.state.directional,Ge.directionalLightShadows.value=ee.state.directionalShadow,Ge.spotLights.value=ee.state.spot,Ge.spotLightShadows.value=ee.state.spotShadow,Ge.rectAreaLights.value=ee.state.rectArea,Ge.ltc_1.value=ee.state.rectAreaLTC1,Ge.ltc_2.value=ee.state.rectAreaLTC2,Ge.pointLights.value=ee.state.point,Ge.pointLightShadows.value=ee.state.pointShadow,Ge.hemisphereLights.value=ee.state.hemi,Ge.directionalShadowMap.value=ee.state.directionalShadowMap,Ge.directionalShadowMatrix.value=ee.state.directionalShadowMatrix,Ge.spotShadowMap.value=ee.state.spotShadowMap,Ge.spotLightMatrix.value=ee.state.spotLightMatrix,Ge.spotLightMap.value=ee.state.spotLightMap,Ge.pointShadowMap.value=ee.state.pointShadowMap,Ge.pointShadowMatrix.value=ee.state.pointShadowMatrix),ue.currentProgram=Ke,ue.uniformsList=null,Ke}function nl(I){if(I.uniformsList===null){const Z=I.currentProgram.getUniforms();I.uniformsList=ua.seqWithValue(Z.seq,I.uniforms)}return I.uniformsList}function il(I,Z){const le=O.get(I);le.outputColorSpace=Z.outputColorSpace,le.batching=Z.batching,le.batchingColor=Z.batchingColor,le.instancing=Z.instancing,le.instancingColor=Z.instancingColor,le.instancingMorph=Z.instancingMorph,le.skinning=Z.skinning,le.morphTargets=Z.morphTargets,le.morphNormals=Z.morphNormals,le.morphColors=Z.morphColors,le.morphTargetsCount=Z.morphTargetsCount,le.numClippingPlanes=Z.numClippingPlanes,le.numIntersection=Z.numClipIntersection,le.vertexAlphas=Z.vertexAlphas,le.vertexTangents=Z.vertexTangents,le.toneMapping=Z.toneMapping}function _f(I,Z,le,ue,ee){Z.isScene!==!0&&(Z=K),C.resetTextureUnits();const Te=Z.fog,Pe=ue.isMeshStandardMaterial?Z.environment:null,Oe=D===null?b.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:Jt,ke=(ue.isMeshStandardMaterial?S:m).get(ue.envMap||Pe),Ye=ue.vertexColors===!0&&!!le.attributes.color&&le.attributes.color.itemSize===4,Ke=!!le.attributes.tangent&&(!!ue.normalMap||ue.anisotropy>0),Ge=!!le.morphAttributes.position,st=!!le.morphAttributes.normal,At=!!le.morphAttributes.color;let pt=Ti;ue.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(pt=b.toneMapping);const an=le.morphAttributes.position||le.morphAttributes.normal||le.morphAttributes.color,ot=an!==void 0?an.length:0,He=O.get(ue),Kn=d.state.lights;if(de===!0&&(Ce===!0||I!==y)){const bn=I===y&&ue.id===M;J.setState(ue,I,bn)}let ct=!1;ue.version===He.__version?(He.needsLights&&He.lightsStateVersion!==Kn.state.version||He.outputColorSpace!==Oe||ee.isBatchedMesh&&He.batching===!1||!ee.isBatchedMesh&&He.batching===!0||ee.isBatchedMesh&&He.batchingColor===!0&&ee.colorTexture===null||ee.isBatchedMesh&&He.batchingColor===!1&&ee.colorTexture!==null||ee.isInstancedMesh&&He.instancing===!1||!ee.isInstancedMesh&&He.instancing===!0||ee.isSkinnedMesh&&He.skinning===!1||!ee.isSkinnedMesh&&He.skinning===!0||ee.isInstancedMesh&&He.instancingColor===!0&&ee.instanceColor===null||ee.isInstancedMesh&&He.instancingColor===!1&&ee.instanceColor!==null||ee.isInstancedMesh&&He.instancingMorph===!0&&ee.morphTexture===null||ee.isInstancedMesh&&He.instancingMorph===!1&&ee.morphTexture!==null||He.envMap!==ke||ue.fog===!0&&He.fog!==Te||He.numClippingPlanes!==void 0&&(He.numClippingPlanes!==J.numPlanes||He.numIntersection!==J.numIntersection)||He.vertexAlphas!==Ye||He.vertexTangents!==Ke||He.morphTargets!==Ge||He.morphNormals!==st||He.morphColors!==At||He.toneMapping!==pt||He.morphTargetsCount!==ot)&&(ct=!0):(ct=!0,He.__version=ue.version);let In=He.currentProgram;ct===!0&&(In=Cr(ue,Z,ee));let es=!1,un=!1,Ns=!1;const gt=In.getUniforms(),Qn=He.uniforms;if(W.useProgram(In.program)&&(es=!0,un=!0,Ns=!0),ue.id!==M&&(M=ue.id,un=!0),es||y!==I){W.buffers.depth.getReversed()?(v.copy(I.projectionMatrix),bd(v),_d(v),gt.setValue(R,"projectionMatrix",v)):gt.setValue(R,"projectionMatrix",I.projectionMatrix),gt.setValue(R,"viewMatrix",I.matrixWorldInverse);const di=gt.map.cameraPosition;di!==void 0&&di.setValue(R,q.setFromMatrixPosition(I.matrixWorld)),oe.logarithmicDepthBuffer&&gt.setValue(R,"logDepthBufFC",2/(Math.log(I.far+1)/Math.LN2)),(ue.isMeshPhongMaterial||ue.isMeshToonMaterial||ue.isMeshLambertMaterial||ue.isMeshBasicMaterial||ue.isMeshStandardMaterial||ue.isShaderMaterial)&&gt.setValue(R,"isOrthographic",I.isOrthographicCamera===!0),y!==I&&(y=I,un=!0,Ns=!0)}if(ee.isSkinnedMesh){gt.setOptional(R,ee,"bindMatrix"),gt.setOptional(R,ee,"bindMatrixInverse");const bn=ee.skeleton;bn&&(bn.boneTexture===null&&bn.computeBoneTexture(),gt.setValue(R,"boneTexture",bn.boneTexture,C))}ee.isBatchedMesh&&(gt.setOptional(R,ee,"batchingTexture"),gt.setValue(R,"batchingTexture",ee._matricesTexture,C),gt.setOptional(R,ee,"batchingIdTexture"),gt.setValue(R,"batchingIdTexture",ee._indirectTexture,C),gt.setOptional(R,ee,"batchingColorTexture"),ee._colorsTexture!==null&&gt.setValue(R,"batchingColorTexture",ee._colorsTexture,C));const Qs=le.morphAttributes;if((Qs.position!==void 0||Qs.normal!==void 0||Qs.color!==void 0)&&we.update(ee,le,In),(un||He.receiveShadow!==ee.receiveShadow)&&(He.receiveShadow=ee.receiveShadow,gt.setValue(R,"receiveShadow",ee.receiveShadow)),ue.isMeshGouraudMaterial&&ue.envMap!==null&&(Qn.envMap.value=ke,Qn.flipEnvMap.value=ke.isCubeTexture&&ke.isRenderTargetTexture===!1?-1:1),ue.isMeshStandardMaterial&&ue.envMap===null&&Z.environment!==null&&(Qn.envMapIntensity.value=Z.environmentIntensity),un&&(gt.setValue(R,"toneMappingExposure",b.toneMappingExposure),He.needsLights&&Ef(Qn,Ns),Te&&ue.fog===!0&&H.refreshFogUniforms(Qn,Te),H.refreshMaterialUniforms(Qn,ue,te,se,d.state.transmissionRenderTarget[I.id]),ua.upload(R,nl(He),Qn,C)),ue.isShaderMaterial&&ue.uniformsNeedUpdate===!0&&(ua.upload(R,nl(He),Qn,C),ue.uniformsNeedUpdate=!1),ue.isSpriteMaterial&&gt.setValue(R,"center",ee.center),gt.setValue(R,"modelViewMatrix",ee.modelViewMatrix),gt.setValue(R,"normalMatrix",ee.normalMatrix),gt.setValue(R,"modelMatrix",ee.matrixWorld),ue.isShaderMaterial||ue.isRawShaderMaterial){const bn=ue.uniformsGroups;for(let di=0,Ai=bn.length;di<Ai;di++){const sl=bn[di];z.update(sl,In),z.bind(sl,In)}}return In}function Ef(I,Z){I.ambientLightColor.needsUpdate=Z,I.lightProbe.needsUpdate=Z,I.directionalLights.needsUpdate=Z,I.directionalLightShadows.needsUpdate=Z,I.pointLights.needsUpdate=Z,I.pointLightShadows.needsUpdate=Z,I.spotLights.needsUpdate=Z,I.spotLightShadows.needsUpdate=Z,I.rectAreaLights.needsUpdate=Z,I.hemisphereLights.needsUpdate=Z}function xf(I){return I.isMeshLambertMaterial||I.isMeshToonMaterial||I.isMeshPhongMaterial||I.isMeshStandardMaterial||I.isShadowMaterial||I.isShaderMaterial&&I.lights===!0}this.getActiveCubeFace=function(){return B},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(I,Z,le){O.get(I.texture).__webglTexture=Z,O.get(I.depthTexture).__webglTexture=le;const ue=O.get(I);ue.__hasExternalTextures=!0,ue.__autoAllocateDepthBuffer=le===void 0,ue.__autoAllocateDepthBuffer||ne.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ue.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(I,Z){const le=O.get(I);le.__webglFramebuffer=Z,le.__useDefaultFramebuffer=Z===void 0},this.setRenderTarget=function(I,Z=0,le=0){D=I,B=Z,w=le;let ue=!0,ee=null,Te=!1,Pe=!1;if(I){const ke=O.get(I);if(ke.__useDefaultFramebuffer!==void 0)W.bindFramebuffer(R.FRAMEBUFFER,null),ue=!1;else if(ke.__webglFramebuffer===void 0)C.setupRenderTarget(I);else if(ke.__hasExternalTextures)C.rebindTextures(I,O.get(I.texture).__webglTexture,O.get(I.depthTexture).__webglTexture);else if(I.depthBuffer){const Ge=I.depthTexture;if(ke.__boundDepthTexture!==Ge){if(Ge!==null&&O.has(Ge)&&(I.width!==Ge.image.width||I.height!==Ge.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");C.setupDepthRenderbuffer(I)}}const Ye=I.texture;(Ye.isData3DTexture||Ye.isDataArrayTexture||Ye.isCompressedArrayTexture)&&(Pe=!0);const Ke=O.get(I).__webglFramebuffer;I.isWebGLCubeRenderTarget?(Array.isArray(Ke[Z])?ee=Ke[Z][le]:ee=Ke[Z],Te=!0):I.samples>0&&C.useMultisampledRTT(I)===!1?ee=O.get(I).__webglMultisampledFramebuffer:Array.isArray(Ke)?ee=Ke[le]:ee=Ke,T.copy(I.viewport),j.copy(I.scissor),V=I.scissorTest}else T.copy(me).multiplyScalar(te).floor(),j.copy(xe).multiplyScalar(te).floor(),V=ve;if(W.bindFramebuffer(R.FRAMEBUFFER,ee)&&ue&&W.drawBuffers(I,ee),W.viewport(T),W.scissor(j),W.setScissorTest(V),Te){const ke=O.get(I.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ke.__webglTexture,le)}else if(Pe){const ke=O.get(I.texture),Ye=Z||0;R.framebufferTextureLayer(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,ke.__webglTexture,le||0,Ye)}M=-1},this.readRenderTargetPixels=function(I,Z,le,ue,ee,Te,Pe){if(!(I&&I.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Oe=O.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&Pe!==void 0&&(Oe=Oe[Pe]),Oe){W.bindFramebuffer(R.FRAMEBUFFER,Oe);try{const ke=I.texture,Ye=ke.format,Ke=ke.type;if(!oe.textureFormatReadable(Ye)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!oe.textureTypeReadable(Ke)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Z>=0&&Z<=I.width-ue&&le>=0&&le<=I.height-ee&&R.readPixels(Z,le,ue,ee,Fe.convert(Ye),Fe.convert(Ke),Te)}finally{const ke=D!==null?O.get(D).__webglFramebuffer:null;W.bindFramebuffer(R.FRAMEBUFFER,ke)}}},this.readRenderTargetPixelsAsync=async function(I,Z,le,ue,ee,Te,Pe){if(!(I&&I.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Oe=O.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&Pe!==void 0&&(Oe=Oe[Pe]),Oe){const ke=I.texture,Ye=ke.format,Ke=ke.type;if(!oe.textureFormatReadable(Ye))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!oe.textureTypeReadable(Ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(Z>=0&&Z<=I.width-ue&&le>=0&&le<=I.height-ee){W.bindFramebuffer(R.FRAMEBUFFER,Oe);const Ge=R.createBuffer();R.bindBuffer(R.PIXEL_PACK_BUFFER,Ge),R.bufferData(R.PIXEL_PACK_BUFFER,Te.byteLength,R.STREAM_READ),R.readPixels(Z,le,ue,ee,Fe.convert(Ye),Fe.convert(Ke),0);const st=D!==null?O.get(D).__webglFramebuffer:null;W.bindFramebuffer(R.FRAMEBUFFER,st);const At=R.fenceSync(R.SYNC_GPU_COMMANDS_COMPLETE,0);return R.flush(),await md(R,At,4),R.bindBuffer(R.PIXEL_PACK_BUFFER,Ge),R.getBufferSubData(R.PIXEL_PACK_BUFFER,0,Te),R.deleteBuffer(Ge),R.deleteSync(At),Te}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(I,Z=null,le=0){I.isTexture!==!0&&(Zs("WebGLRenderer: copyFramebufferToTexture function signature has changed."),Z=arguments[0]||null,I=arguments[1]);const ue=Math.pow(2,-le),ee=Math.floor(I.image.width*ue),Te=Math.floor(I.image.height*ue),Pe=Z!==null?Z.x:0,Oe=Z!==null?Z.y:0;C.setTexture2D(I,0),R.copyTexSubImage2D(R.TEXTURE_2D,le,0,0,Pe,Oe,ee,Te),W.unbindTexture()},this.copyTextureToTexture=function(I,Z,le=null,ue=null,ee=0){I.isTexture!==!0&&(Zs("WebGLRenderer: copyTextureToTexture function signature has changed."),ue=arguments[0]||null,I=arguments[1],Z=arguments[2],ee=arguments[3]||0,le=null);let Te,Pe,Oe,ke,Ye,Ke,Ge,st,At;const pt=I.isCompressedTexture?I.mipmaps[ee]:I.image;le!==null?(Te=le.max.x-le.min.x,Pe=le.max.y-le.min.y,Oe=le.isBox3?le.max.z-le.min.z:1,ke=le.min.x,Ye=le.min.y,Ke=le.isBox3?le.min.z:0):(Te=pt.width,Pe=pt.height,Oe=pt.depth||1,ke=0,Ye=0,Ke=0),ue!==null?(Ge=ue.x,st=ue.y,At=ue.z):(Ge=0,st=0,At=0);const an=Fe.convert(Z.format),ot=Fe.convert(Z.type);let He;Z.isData3DTexture?(C.setTexture3D(Z,0),He=R.TEXTURE_3D):Z.isDataArrayTexture||Z.isCompressedArrayTexture?(C.setTexture2DArray(Z,0),He=R.TEXTURE_2D_ARRAY):(C.setTexture2D(Z,0),He=R.TEXTURE_2D),R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,Z.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,Z.unpackAlignment);const Kn=R.getParameter(R.UNPACK_ROW_LENGTH),ct=R.getParameter(R.UNPACK_IMAGE_HEIGHT),In=R.getParameter(R.UNPACK_SKIP_PIXELS),es=R.getParameter(R.UNPACK_SKIP_ROWS),un=R.getParameter(R.UNPACK_SKIP_IMAGES);R.pixelStorei(R.UNPACK_ROW_LENGTH,pt.width),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,pt.height),R.pixelStorei(R.UNPACK_SKIP_PIXELS,ke),R.pixelStorei(R.UNPACK_SKIP_ROWS,Ye),R.pixelStorei(R.UNPACK_SKIP_IMAGES,Ke);const Ns=I.isDataArrayTexture||I.isData3DTexture,gt=Z.isDataArrayTexture||Z.isData3DTexture;if(I.isRenderTargetTexture||I.isDepthTexture){const Qn=O.get(I),Qs=O.get(Z),bn=O.get(Qn.__renderTarget),di=O.get(Qs.__renderTarget);W.bindFramebuffer(R.READ_FRAMEBUFFER,bn.__webglFramebuffer),W.bindFramebuffer(R.DRAW_FRAMEBUFFER,di.__webglFramebuffer);for(let Ai=0;Ai<Oe;Ai++)Ns&&R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,O.get(I).__webglTexture,ee,Ke+Ai),I.isDepthTexture?(gt&&R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,O.get(Z).__webglTexture,ee,At+Ai),R.blitFramebuffer(ke,Ye,Te,Pe,Ge,st,Te,Pe,R.DEPTH_BUFFER_BIT,R.NEAREST)):gt?R.copyTexSubImage3D(He,ee,Ge,st,At+Ai,ke,Ye,Te,Pe):R.copyTexSubImage2D(He,ee,Ge,st,At+Ai,ke,Ye,Te,Pe);W.bindFramebuffer(R.READ_FRAMEBUFFER,null),W.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else gt?I.isDataTexture||I.isData3DTexture?R.texSubImage3D(He,ee,Ge,st,At,Te,Pe,Oe,an,ot,pt.data):Z.isCompressedArrayTexture?R.compressedTexSubImage3D(He,ee,Ge,st,At,Te,Pe,Oe,an,pt.data):R.texSubImage3D(He,ee,Ge,st,At,Te,Pe,Oe,an,ot,pt):I.isDataTexture?R.texSubImage2D(R.TEXTURE_2D,ee,Ge,st,Te,Pe,an,ot,pt.data):I.isCompressedTexture?R.compressedTexSubImage2D(R.TEXTURE_2D,ee,Ge,st,pt.width,pt.height,an,pt.data):R.texSubImage2D(R.TEXTURE_2D,ee,Ge,st,Te,Pe,an,ot,pt);R.pixelStorei(R.UNPACK_ROW_LENGTH,Kn),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,ct),R.pixelStorei(R.UNPACK_SKIP_PIXELS,In),R.pixelStorei(R.UNPACK_SKIP_ROWS,es),R.pixelStorei(R.UNPACK_SKIP_IMAGES,un),ee===0&&Z.generateMipmaps&&R.generateMipmap(He),W.unbindTexture()},this.copyTextureToTexture3D=function(I,Z,le=null,ue=null,ee=0){return I.isTexture!==!0&&(Zs("WebGLRenderer: copyTextureToTexture3D function signature has changed."),le=arguments[0]||null,ue=arguments[1]||null,I=arguments[2],Z=arguments[3],ee=arguments[4]||0),Zs('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(I,Z,le,ue,ee)},this.initRenderTarget=function(I){O.get(I).__webglFramebuffer===void 0&&C.setupRenderTarget(I)},this.initTexture=function(I){I.isCubeTexture?C.setTextureCube(I,0):I.isData3DTexture?C.setTexture3D(I,0):I.isDataArrayTexture||I.isCompressedArrayTexture?C.setTexture2DArray(I,0):C.setTexture2D(I,0),W.unbindTexture()},this.resetState=function(){B=0,w=0,D=null,W.reset(),qe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ci}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=et._getDrawingBufferColorSpace(e),t.unpackColorSpace=et._getUnpackColorSpace()}}class La{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Me(e),this.near=t,this.far=n}clone(){return new La(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class I0 extends mt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Cn,this.environmentIntensity=1,this.environmentRotation=new Cn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class w0{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Ac,this.updateRanges=[],this.version=0,this.uuid=Fn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Fn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Fn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Zt=new U;class Gc{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Zt.fromBufferAttribute(this,t),Zt.applyMatrix4(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Zt.fromBufferAttribute(this,t),Zt.applyNormalMatrix(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Zt.fromBufferAttribute(this,t),Zt.transformDirection(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Ln(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ut(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=ut(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=ut(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=ut(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=ut(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Ln(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Ln(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Ln(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Ln(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=ut(t,this.array),n=ut(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=ut(t,this.array),n=ut(n,this.array),s=ut(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=ut(t,this.array),n=ut(n,this.array),s=ut(s,this.array),r=ut(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Mt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Gc(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const jr=new U,ah=new U;class va extends mt{constructor(){super(),this._currentLevel=0,this.type="LOD",Object.defineProperties(this,{levels:{enumerable:!0,value:[]},isLOD:{value:!0}}),this.autoUpdate=!0}copy(e){super.copy(e,!1);const t=e.levels;for(let n=0,s=t.length;n<s;n++){const r=t[n];this.addLevel(r.object.clone(),r.distance,r.hysteresis)}return this.autoUpdate=e.autoUpdate,this}addLevel(e,t=0,n=0){t=Math.abs(t);const s=this.levels;let r;for(r=0;r<s.length&&!(t<s[r].distance);r++);return s.splice(r,0,{distance:t,hysteresis:n,object:e}),this.add(e),this}removeLevel(e){const t=this.levels;for(let n=0;n<t.length;n++)if(t[n].distance===e){const s=t.splice(n,1);return this.remove(s[0].object),!0}return!1}getCurrentLevel(){return this._currentLevel}getObjectForDistance(e){const t=this.levels;if(t.length>0){let n,s;for(n=1,s=t.length;n<s;n++){let r=t[n].distance;if(t[n].object.visible&&(r-=r*t[n].hysteresis),e<r)break}return t[n-1].object}return null}raycast(e,t){if(this.levels.length>0){jr.setFromMatrixPosition(this.matrixWorld);const s=e.ray.origin.distanceTo(jr);this.getObjectForDistance(s).raycast(e,t)}}update(e){const t=this.levels;if(t.length>1){jr.setFromMatrixPosition(e.matrixWorld),ah.setFromMatrixPosition(this.matrixWorld);const n=jr.distanceTo(ah)/e.zoom;t[0].object.visible=!0;let s,r;for(s=1,r=t.length;s<r;s++){let a=t[s].distance;if(t[s].object.visible&&(a-=a*t[s].hysteresis),n>=a)t[s-1].object.visible=!1,t[s].object.visible=!0;else break}for(this._currentLevel=s-1;s<r;s++)t[s].object.visible=!1}}toJSON(e){const t=super.toJSON(e);this.autoUpdate===!1&&(t.object.autoUpdate=!1),t.object.levels=[];const n=this.levels;for(let s=0,r=n.length;s<r;s++){const a=n[s];t.object.levels.push({object:a.object.uuid,distance:a.distance,hysteresis:a.hysteresis})}return t}}const oh=new U,ch=new at,lh=new at,T0=new U,hh=new Qe,qr=new U,go=new jn,uh=new Qe,mo=new xr;class B0 extends rt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=cl,this.bindMatrix=new Qe,this.bindMatrixInverse=new Qe,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new fi),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,qr),this.boundingBox.expandByPoint(qr)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new jn),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,qr),this.boundingSphere.expandByPoint(qr)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),go.copy(this.boundingSphere),go.applyMatrix4(s),e.ray.intersectsSphere(go)!==!1&&(uh.copy(s).invert(),mo.copy(e.ray).applyMatrix4(uh),!(this.boundingBox!==null&&mo.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,mo)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new at,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===cl?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Gf?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,s=this.geometry;ch.fromBufferAttribute(s.attributes.skinIndex,e),lh.fromBufferAttribute(s.attributes.skinWeight,e),oh.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const a=lh.getComponent(r);if(a!==0){const o=ch.getComponent(r);hh.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(T0.copy(oh).applyMatrix4(hh),a)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Bu extends mt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class vr extends wt{constructor(e=null,t=1,n=1,s,r,a,o,c,l=Ht,h=Ht,u,f){super(null,a,o,c,l,h,s,r,u,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const fh=new Qe,R0=new Qe;class zc{constructor(e=[],t=[]){this.uuid=Fn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new Qe)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Qe;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,a=e.length;r<a;r++){const o=e[r]?e[r].matrixWorld:R0;fh.multiplyMatrices(o,t[r]),fh.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new zc(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new vr(t,e,e,Pt,Kt);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){const r=e.bones[n];let a=t[r];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),a=new Bu),this.bones.push(a),this.boneInverses.push(new Qe().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){const a=t[s];e.bones.push(a.uuid);const o=n[s];e.boneInverses.push(o.toArray())}return e}}class gc extends Mt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const ps=new Qe,dh=new Qe,Yr=[],Ah=new fi,D0=new Qe,Hs=new rt,Vs=new jn;class Ct extends rt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new gc(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,D0)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new fi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ps),Ah.copy(e.boundingBox).applyMatrix4(ps),this.boundingBox.union(Ah)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new jn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ps),Vs.copy(e.boundingSphere).applyMatrix4(ps),this.boundingSphere.union(Vs)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(e,t){const n=this.matrixWorld,s=this.count;if(Hs.geometry=this.geometry,Hs.material=this.material,Hs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Vs.copy(this.boundingSphere),Vs.applyMatrix4(n),e.ray.intersectsSphere(Vs)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,ps),dh.multiplyMatrices(n,ps),Hs.matrixWorld=dh,Hs.raycast(e,Yr);for(let a=0,o=Yr.length;a<o;a++){const c=Yr[a];c.instanceId=r,c.object=this,t.push(c)}Yr.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new gc(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new vr(new Float32Array(s*this.count),s,this.count,Ci,Kt));const r=this.morphTexture.source.data.data;let a=0;for(let l=0;l<n.length;l++)a+=n[l];const o=this.geometry.morphTargetsRelative?1:1-a,c=s*e;r[c]=o,r.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class Ru extends Mn{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new Me(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const ya=new U,Ma=new U,ph=new Qe,Ws=new xr,Xr=new jn,bo=new U,gh=new U;class Hc extends mt{constructor(e=new bt,t=new Ru){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)ya.fromBufferAttribute(t,s-1),Ma.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=ya.distanceTo(Ma);e.setAttribute("lineDistance",new nt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Xr.copy(n.boundingSphere),Xr.applyMatrix4(s),Xr.radius+=r,e.ray.intersectsSphere(Xr)===!1)return;ph.copy(s).invert(),Ws.copy(e.ray).applyMatrix4(ph);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){const A=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let _=A,p=g-1;_<p;_+=l){const d=h.getX(_),x=h.getX(_+1),E=Kr(this,e,Ws,c,d,x);E&&t.push(E)}if(this.isLineLoop){const _=h.getX(g-1),p=h.getX(A),d=Kr(this,e,Ws,c,_,p);d&&t.push(d)}}else{const A=Math.max(0,a.start),g=Math.min(f.count,a.start+a.count);for(let _=A,p=g-1;_<p;_+=l){const d=Kr(this,e,Ws,c,_,_+1);d&&t.push(d)}if(this.isLineLoop){const _=Kr(this,e,Ws,c,g-1,A);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Kr(i,e,t,n,s,r){const a=i.geometry.attributes.position;if(ya.fromBufferAttribute(a,s),Ma.fromBufferAttribute(a,r),t.distanceSqToSegment(ya,Ma,bo,gh)>n)return;bo.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(bo);if(!(c<e.near||c>e.far))return{distance:c,point:gh.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}const mh=new U,bh=new U;class L0 extends Hc{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)mh.fromBufferAttribute(t,s),bh.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+mh.distanceTo(bh);e.setAttribute("lineDistance",new nt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class P0 extends Hc{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Du extends Mn{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new Me(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const _h=new Qe,mc=new xr,Jr=new jn,Zr=new U;class U0 extends mt{constructor(e=new bt,t=new Du){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Jr.copy(n.boundingSphere),Jr.applyMatrix4(s),Jr.radius+=r,e.ray.intersectsSphere(Jr)===!1)return;_h.copy(s).invert(),mc.copy(e.ray).applyMatrix4(_h);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,u=n.attributes.position;if(l!==null){const f=Math.max(0,a.start),A=Math.min(l.count,a.start+a.count);for(let g=f,_=A;g<_;g++){const p=l.getX(g);Zr.fromBufferAttribute(u,p),Eh(Zr,p,c,s,e,t,this)}}else{const f=Math.max(0,a.start),A=Math.min(u.count,a.start+a.count);for(let g=f,_=A;g<_;g++)Zr.fromBufferAttribute(u,g),Eh(Zr,g,c,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Eh(i,e,t,n,s,r,a){const o=mc.distanceSqToPoint(i);if(o<t){const c=new U;mc.closestPointToPoint(i,c),c.applyMatrix4(n);const l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class Pa extends wt{constructor(e,t,n,s,r,a,o,c,l,h,u,f){super(null,a,o,c,l,h,s,r,u,f),this.isCompressedTexture=!0,this.image={width:t,height:n},this.mipmaps=e,this.flipY=!1,this.generateMipmaps=!1}}class F0 extends Pa{constructor(e,t,n,s,r,a){super(e,t,n,r,a),this.isCompressedArrayTexture=!0,this.image.depth=s,this.wrapR=oi,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class N0 extends Pa{constructor(e,t,n){super(void 0,e[0].width,e[0].height,t,n,Vi),this.isCompressedCubeTexture=!0,this.isCubeTexture=!0,this.image=e}}class Q0 extends wt{constructor(e,t,n,s,r,a,o,c,l){super(e,t,n,s,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ai extends bt{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const h=[],u=[],f=[],A=[];let g=0;const _=[],p=n/2;let d=0;x(),a===!1&&(e>0&&E(!0),t>0&&E(!1)),this.setIndex(h),this.setAttribute("position",new nt(u,3)),this.setAttribute("normal",new nt(f,3)),this.setAttribute("uv",new nt(A,2));function x(){const b=new U,L=new U;let B=0;const w=(t-e)/n;for(let D=0;D<=r;D++){const M=[],y=D/r,T=y*(t-e)+e;for(let j=0;j<=s;j++){const V=j/s,he=V*c+o,fe=Math.sin(he),ae=Math.cos(he);L.x=T*fe,L.y=-y*n+p,L.z=T*ae,u.push(L.x,L.y,L.z),b.set(fe,w,ae).normalize(),f.push(b.x,b.y,b.z),A.push(V,1-y),M.push(g++)}_.push(M)}for(let D=0;D<s;D++)for(let M=0;M<r;M++){const y=_[M][D],T=_[M+1][D],j=_[M+1][D+1],V=_[M][D+1];(e>0||M!==0)&&(h.push(y,T,V),B+=3),(t>0||M!==r-1)&&(h.push(T,j,V),B+=3)}l.addGroup(d,B,0),d+=B}function E(b){const L=g,B=new De,w=new U;let D=0;const M=b===!0?e:t,y=b===!0?1:-1;for(let j=1;j<=s;j++)u.push(0,p*y,0),f.push(0,y,0),A.push(.5,.5),g++;const T=g;for(let j=0;j<=s;j++){const he=j/s*c+o,fe=Math.cos(he),ae=Math.sin(he);w.x=M*ae,w.y=p*y,w.z=M*fe,u.push(w.x,w.y,w.z),f.push(0,y,0),B.x=fe*.5+.5,B.y=ae*.5*y+.5,A.push(B.x,B.y),g++}for(let j=0;j<s;j++){const V=L+j,he=T+j;b===!0?h.push(he,he+1,V):h.push(he+1,he,V),D+=3}l.addGroup(d,D,b===!0?1:2),d+=D}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ai(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ki extends ai{constructor(e=1,t=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new ki(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Ua extends bt{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};const r=[],a=[];o(s),l(n),h(),this.setAttribute("position",new nt(r,3)),this.setAttribute("normal",new nt(r.slice(),3)),this.setAttribute("uv",new nt(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(x){const E=new U,b=new U,L=new U;for(let B=0;B<t.length;B+=3)A(t[B+0],E),A(t[B+1],b),A(t[B+2],L),c(E,b,L,x)}function c(x,E,b,L){const B=L+1,w=[];for(let D=0;D<=B;D++){w[D]=[];const M=x.clone().lerp(b,D/B),y=E.clone().lerp(b,D/B),T=B-D;for(let j=0;j<=T;j++)j===0&&D===B?w[D][j]=M:w[D][j]=M.clone().lerp(y,j/T)}for(let D=0;D<B;D++)for(let M=0;M<2*(B-D)-1;M++){const y=Math.floor(M/2);M%2===0?(f(w[D][y+1]),f(w[D+1][y]),f(w[D][y])):(f(w[D][y+1]),f(w[D+1][y+1]),f(w[D+1][y]))}}function l(x){const E=new U;for(let b=0;b<r.length;b+=3)E.x=r[b+0],E.y=r[b+1],E.z=r[b+2],E.normalize().multiplyScalar(x),r[b+0]=E.x,r[b+1]=E.y,r[b+2]=E.z}function h(){const x=new U;for(let E=0;E<r.length;E+=3){x.x=r[E+0],x.y=r[E+1],x.z=r[E+2];const b=p(x)/2/Math.PI+.5,L=d(x)/Math.PI+.5;a.push(b,1-L)}g(),u()}function u(){for(let x=0;x<a.length;x+=6){const E=a[x+0],b=a[x+2],L=a[x+4],B=Math.max(E,b,L),w=Math.min(E,b,L);B>.9&&w<.1&&(E<.2&&(a[x+0]+=1),b<.2&&(a[x+2]+=1),L<.2&&(a[x+4]+=1))}}function f(x){r.push(x.x,x.y,x.z)}function A(x,E){const b=x*3;E.x=e[b+0],E.y=e[b+1],E.z=e[b+2]}function g(){const x=new U,E=new U,b=new U,L=new U,B=new De,w=new De,D=new De;for(let M=0,y=0;M<r.length;M+=9,y+=6){x.set(r[M+0],r[M+1],r[M+2]),E.set(r[M+3],r[M+4],r[M+5]),b.set(r[M+6],r[M+7],r[M+8]),B.set(a[y+0],a[y+1]),w.set(a[y+2],a[y+3]),D.set(a[y+4],a[y+5]),L.copy(x).add(E).add(b).divideScalar(3);const T=p(L);_(B,y+0,x,T),_(w,y+2,E,T),_(D,y+4,b,T)}}function _(x,E,b,L){L<0&&x.x===1&&(a[E]=x.x-1),b.x===0&&b.z===0&&(a[E]=L/2/Math.PI+.5)}function p(x){return Math.atan2(x.z,-x.x)}function d(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ua(e.vertices,e.indices,e.radius,e.details)}}const O0={triangulate:function(i,e,t=2){const n=e&&e.length,s=n?e[0]*t:i.length;let r=Lu(i,0,s,t,!0);const a=[];if(!r||r.next===r.prev)return a;let o,c,l,h,u,f,A;if(n&&(r=V0(i,e,r,t)),i.length>80*t){o=l=i[0],c=h=i[1];for(let g=t;g<s;g+=t)u=i[g],f=i[g+1],u<o&&(o=u),f<c&&(c=f),u>l&&(l=u),f>h&&(h=f);A=Math.max(l-o,h-c),A=A!==0?32767/A:0}return gr(r,a,t,o,c,A,0),a}};function Lu(i,e,t,n,s){let r,a;if(s===tb(i,e,t,n)>0)for(r=e;r<t;r+=n)a=xh(r,i[r],i[r+1],a);else for(r=t-n;r>=e;r-=n)a=xh(r,i[r],i[r+1],a);return a&&Fa(a,a.next)&&(br(a),a=a.next),a}function Yi(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(Fa(t,t.next)||Et(t.prev,t,t.next)===0)){if(br(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function gr(i,e,t,n,s,r,a){if(!i)return;!a&&r&&X0(i,n,s,r);let o=i,c,l;for(;i.prev!==i.next;){if(c=i.prev,l=i.next,r?G0(i,n,s,r):k0(i)){e.push(c.i/t|0),e.push(i.i/t|0),e.push(l.i/t|0),br(i),i=l.next,o=l.next;continue}if(i=l,i===o){a?a===1?(i=z0(Yi(i),e,t),gr(i,e,t,n,s,r,2)):a===2&&H0(i,e,t,n,s,r):gr(Yi(i),e,t,n,s,r,1);break}}}function k0(i){const e=i.prev,t=i,n=i.next;if(Et(e,t,n)>=0)return!1;const s=e.x,r=t.x,a=n.x,o=e.y,c=t.y,l=n.y,h=s<r?s<a?s:a:r<a?r:a,u=o<c?o<l?o:l:c<l?c:l,f=s>r?s>a?s:a:r>a?r:a,A=o>c?o>l?o:l:c>l?c:l;let g=n.next;for(;g!==e;){if(g.x>=h&&g.x<=f&&g.y>=u&&g.y<=A&&Es(s,o,r,c,a,l,g.x,g.y)&&Et(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function G0(i,e,t,n){const s=i.prev,r=i,a=i.next;if(Et(s,r,a)>=0)return!1;const o=s.x,c=r.x,l=a.x,h=s.y,u=r.y,f=a.y,A=o<c?o<l?o:l:c<l?c:l,g=h<u?h<f?h:f:u<f?u:f,_=o>c?o>l?o:l:c>l?c:l,p=h>u?h>f?h:f:u>f?u:f,d=bc(A,g,e,t,n),x=bc(_,p,e,t,n);let E=i.prevZ,b=i.nextZ;for(;E&&E.z>=d&&b&&b.z<=x;){if(E.x>=A&&E.x<=_&&E.y>=g&&E.y<=p&&E!==s&&E!==a&&Es(o,h,c,u,l,f,E.x,E.y)&&Et(E.prev,E,E.next)>=0||(E=E.prevZ,b.x>=A&&b.x<=_&&b.y>=g&&b.y<=p&&b!==s&&b!==a&&Es(o,h,c,u,l,f,b.x,b.y)&&Et(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;E&&E.z>=d;){if(E.x>=A&&E.x<=_&&E.y>=g&&E.y<=p&&E!==s&&E!==a&&Es(o,h,c,u,l,f,E.x,E.y)&&Et(E.prev,E,E.next)>=0)return!1;E=E.prevZ}for(;b&&b.z<=x;){if(b.x>=A&&b.x<=_&&b.y>=g&&b.y<=p&&b!==s&&b!==a&&Es(o,h,c,u,l,f,b.x,b.y)&&Et(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function z0(i,e,t){let n=i;do{const s=n.prev,r=n.next.next;!Fa(s,r)&&Pu(s,n,n.next,r)&&mr(s,r)&&mr(r,s)&&(e.push(s.i/t|0),e.push(n.i/t|0),e.push(r.i/t|0),br(n),br(n.next),n=i=r),n=n.next}while(n!==i);return Yi(n)}function H0(i,e,t,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Z0(a,o)){let c=Uu(a,o);a=Yi(a,a.next),c=Yi(c,c.next),gr(a,e,t,n,s,r,0),gr(c,e,t,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function V0(i,e,t,n){const s=[];let r,a,o,c,l;for(r=0,a=e.length;r<a;r++)o=e[r]*n,c=r<a-1?e[r+1]*n:i.length,l=Lu(i,o,c,n,!1),l===l.next&&(l.steiner=!0),s.push(J0(l));for(s.sort(W0),r=0;r<s.length;r++)t=j0(s[r],t);return t}function W0(i,e){return i.x-e.x}function j0(i,e){const t=q0(i,e);if(!t)return e;const n=Uu(t,i);return Yi(n,n.next),Yi(t,t.next)}function q0(i,e){let t=e,n=-1/0,s;const r=i.x,a=i.y;do{if(a<=t.y&&a>=t.next.y&&t.next.y!==t.y){const f=t.x+(a-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=r&&f>n&&(n=f,s=t.x<t.next.x?t:t.next,f===r))return s}t=t.next}while(t!==e);if(!s)return null;const o=s,c=s.x,l=s.y;let h=1/0,u;t=s;do r>=t.x&&t.x>=c&&r!==t.x&&Es(a<l?r:n,a,c,l,a<l?n:r,a,t.x,t.y)&&(u=Math.abs(a-t.y)/(r-t.x),mr(t,i)&&(u<h||u===h&&(t.x>s.x||t.x===s.x&&Y0(s,t)))&&(s=t,h=u)),t=t.next;while(t!==o);return s}function Y0(i,e){return Et(i.prev,i,e.prev)<0&&Et(e.next,i,i.next)<0}function X0(i,e,t,n){let s=i;do s.z===0&&(s.z=bc(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,K0(s)}function K0(i){let e,t,n,s,r,a,o,c,l=1;do{for(t=i,i=null,r=null,a=0;t;){for(a++,n=t,o=0,e=0;e<l&&(o++,n=n.nextZ,!!n);e++);for(c=l;o>0||c>0&&n;)o!==0&&(c===0||!n||t.z<=n.z)?(s=t,t=t.nextZ,o--):(s=n,n=n.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;t=n}r.nextZ=null,l*=2}while(a>1);return i}function bc(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function J0(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function Es(i,e,t,n,s,r,a,o){return(s-a)*(e-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(s-a)*(n-o)}function Z0(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!$0(i,e)&&(mr(i,e)&&mr(e,i)&&eb(i,e)&&(Et(i.prev,i,e.prev)||Et(i,e.prev,e))||Fa(i,e)&&Et(i.prev,i,i.next)>0&&Et(e.prev,e,e.next)>0)}function Et(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function Fa(i,e){return i.x===e.x&&i.y===e.y}function Pu(i,e,t,n){const s=ea(Et(i,e,t)),r=ea(Et(i,e,n)),a=ea(Et(t,n,i)),o=ea(Et(t,n,e));return!!(s!==r&&a!==o||s===0&&$r(i,t,e)||r===0&&$r(i,n,e)||a===0&&$r(t,i,n)||o===0&&$r(t,e,n))}function $r(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function ea(i){return i>0?1:i<0?-1:0}function $0(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&Pu(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function mr(i,e){return Et(i.prev,i,i.next)<0?Et(i,e,i.next)>=0&&Et(i,i.prev,e)>=0:Et(i,e,i.prev)<0||Et(i,i.next,e)<0}function eb(i,e){let t=i,n=!1;const s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function Uu(i,e){const t=new _c(i.i,i.x,i.y),n=new _c(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function xh(i,e,t,n){const s=new _c(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function br(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function _c(i,e,t){this.i=i,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function tb(i,e,t,n){let s=0;for(let r=e,a=t-n;r<t;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}class ui{static area(e){const t=e.length;let n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return ui.area(e)<0}static triangulateShape(e,t){const n=[],s=[],r=[];vh(e),yh(n,e);let a=e.length;t.forEach(vh);for(let c=0;c<t.length;c++)s.push(a),a+=t[c].length,yh(n,t[c]);const o=O0.triangulate(n,s);for(let c=0;c<o.length;c+=3)r.push(o.slice(c,c+3));return r}}function vh(i){const e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function yh(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}class Vc extends Ua{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Vc(e.radius,e.detail)}}class Ca extends Ua{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Ca(e.radius,e.detail)}}class zi extends bt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(a+o,Math.PI);let l=0;const h=[],u=new U,f=new U,A=[],g=[],_=[],p=[];for(let d=0;d<=n;d++){const x=[],E=d/n;let b=0;d===0&&a===0?b=.5/t:d===n&&c===Math.PI&&(b=-.5/t);for(let L=0;L<=t;L++){const B=L/t;u.x=-e*Math.cos(s+B*r)*Math.sin(a+E*o),u.y=e*Math.cos(a+E*o),u.z=e*Math.sin(s+B*r)*Math.sin(a+E*o),g.push(u.x,u.y,u.z),f.copy(u).normalize(),_.push(f.x,f.y,f.z),p.push(B+b,1-E),x.push(l++)}h.push(x)}for(let d=0;d<n;d++)for(let x=0;x<t;x++){const E=h[d][x+1],b=h[d][x],L=h[d+1][x],B=h[d+1][x+1];(d!==0||a>0)&&A.push(E,b,B),(d!==n-1||c<Math.PI)&&A.push(b,L,B)}this.setIndex(A),this.setAttribute("position",new nt(g,3)),this.setAttribute("normal",new nt(_,3)),this.setAttribute("uv",new nt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zi(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class nb extends Bt{static get type(){return"RawShaderMaterial"}constructor(e){super(e),this.isRawShaderMaterial=!0}}class Xi extends Mn{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Me(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Me(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ta,this.normalScale=new De(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Cn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class qn extends Xi{static get type(){return"MeshPhysicalMaterial"}constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new De(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ot(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Me(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Me(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Me(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class ib extends Mn{static get type(){return"MeshNormalMaterial"}constructor(e){super(),this.isMeshNormalMaterial=!0,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ta,this.normalScale=new De(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}class tt extends Mn{static get type(){return"MeshLambertMaterial"}constructor(e){super(),this.isMeshLambertMaterial=!0,this.color=new Me(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Me(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ta,this.normalScale=new De(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Cn,this.combine=wc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}function ta(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function sb(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function rb(i){function e(s,r){return i[s]-i[r]}const t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function Mh(i,e,t){const n=i.length,s=new i.constructor(n);for(let r=0,a=0;a!==n;++r){const o=t[r]*e;for(let c=0;c!==e;++c)s[a++]=i[o+c]}return s}function Fu(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push.apply(t,a)),r=i[s++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=i[s++];while(r!==void 0)}class yr{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){const o=t[1];e<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){const o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class ab extends yr{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ll,endingEnd:ll}}intervalChanged_(e,t,n){const s=this.parameterPositions;let r=e-2,a=e+1,o=s[r],c=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case hl:r=e,o=2*t-n;break;case ul:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case hl:a=e,c=2*n-t;break;case ul:a=1,c=n+s[1]-s[0];break;default:a=e-1,c=t}const l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,A=this._weightNext,g=(n-t)/(s-t),_=g*g,p=_*g,d=-f*p+2*f*_-f*g,x=(1+f)*p+(-1.5-2*f)*_+(-.5+f)*g+1,E=(-1-A)*p+(1.5+A)*_+.5*g,b=A*p-A*_;for(let L=0;L!==o;++L)r[L]=d*a[h+L]+x*a[l+L]+E*a[c+L]+b*a[u+L];return r}}class ob extends yr{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=(n-t)/(s-t),u=1-h;for(let f=0;f!==o;++f)r[f]=a[l+f]*u+a[c+f]*h;return r}}class cb extends yr{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}}class Yn{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ta(t,this.TimeBufferType),this.values=ta(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:ta(e.times,Array),values:ta(e.values,Array)};const s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new cb(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new ob(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new ab(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case dr:t=this.InterpolantFactoryMethodDiscrete;break;case Ar:t=this.InterpolantFactoryMethodLinear;break;case Ga:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return dr;case this.InterpolantFactoryMethodLinear:return Ar;case this.InterpolantFactoryMethodSmooth:return Ga}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){const n=this.times,s=n.length;let r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);const o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){const c=n[o];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(s!==void 0&&sb(s))for(let o=0,c=s.length;o!==c;++o){const l=s[o];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Ga,r=e.length-1;let a=1;for(let o=1;o<r;++o){let c=!1;const l=e[o],h=e[o+1];if(l!==h&&(o!==1||l!==e[0]))if(s)c=!0;else{const u=o*n,f=u-n,A=u+n;for(let g=0;g!==n;++g){const _=t[u+g];if(_!==t[f+g]||_!==t[A+g]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];const u=o*n,f=a*n;for(let A=0;A!==n;++A)t[f+A]=t[u+A]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,c=a*n,l=0;l!==n;++l)t[c+l]=t[o+l];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}}Yn.prototype.TimeBufferType=Float32Array;Yn.prototype.ValueBufferType=Float32Array;Yn.prototype.DefaultInterpolation=Ar;class Us extends Yn{constructor(e,t,n){super(e,t,n)}}Us.prototype.ValueTypeName="bool";Us.prototype.ValueBufferType=Array;Us.prototype.DefaultInterpolation=dr;Us.prototype.InterpolantFactoryMethodLinear=void 0;Us.prototype.InterpolantFactoryMethodSmooth=void 0;class Nu extends Yn{}Nu.prototype.ValueTypeName="color";class Bs extends Yn{}Bs.prototype.ValueTypeName="number";class lb extends yr{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-t)/(s-t);let l=e*o;for(let h=l+o;l!==h;l+=4)St.slerpFlat(r,0,a,l-o,a,l,c);return r}}class Rs extends Yn{InterpolantFactoryMethodLinear(e){return new lb(this.times,this.values,this.getValueSize(),e)}}Rs.prototype.ValueTypeName="quaternion";Rs.prototype.InterpolantFactoryMethodSmooth=void 0;class Fs extends Yn{constructor(e,t,n){super(e,t,n)}}Fs.prototype.ValueTypeName="string";Fs.prototype.ValueBufferType=Array;Fs.prototype.DefaultInterpolation=dr;Fs.prototype.InterpolantFactoryMethodLinear=void 0;Fs.prototype.InterpolantFactoryMethodSmooth=void 0;class Ds extends Yn{}Ds.prototype.ValueTypeName="vector";class hb{constructor(e="",t=-1,n=[],s=zf){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=Fn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,s=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(fb(n[a]).scale(s));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,a=n.length;r!==a;++r)t.push(Yn.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){const r=t.length,a=[];for(let o=0;o<r;o++){let c=[],l=[];c.push((o+r-1)%r,o,(o+1)%r),l.push(0,1,0);const h=rb(c);c=Mh(c,1,h),l=Mh(l,1,h),!s&&c[0]===0&&(c.push(r),l.push(l[0])),a.push(new Bs(".morphTargetInfluences["+t[o].name+"]",c,l).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const s={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,c=e.length;o<c;o++){const l=e[o],h=l.name.match(r);if(h&&h.length>1){const u=h[1];let f=s[u];f||(s[u]=f=[]),f.push(l)}}const a=[];for(const o in s)a.push(this.CreateFromMorphTargetSequence(o,s[o],t,n));return a}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(u,f,A,g,_){if(A.length!==0){const p=[],d=[];Fu(A,p,d,g),p.length!==0&&_.push(new u(f,p,d))}},s=[],r=e.name||"default",a=e.fps||30,o=e.blendMode;let c=e.length||-1;const l=e.hierarchy||[];for(let u=0;u<l.length;u++){const f=l[u].keys;if(!(!f||f.length===0))if(f[0].morphTargets){const A={};let g;for(g=0;g<f.length;g++)if(f[g].morphTargets)for(let _=0;_<f[g].morphTargets.length;_++)A[f[g].morphTargets[_]]=-1;for(const _ in A){const p=[],d=[];for(let x=0;x!==f[g].morphTargets.length;++x){const E=f[g];p.push(E.time),d.push(E.morphTarget===_?1:0)}s.push(new Bs(".morphTargetInfluence["+_+"]",p,d))}c=A.length*a}else{const A=".bones["+t[u].name+"]";n(Ds,A+".position",f,"pos",s),n(Rs,A+".quaternion",f,"rot",s),n(Ds,A+".scale",f,"scl",s)}}return s.length===0?null:new this(r,c,s,o)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,s=e.length;n!==s;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function ub(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Bs;case"vector":case"vector2":case"vector3":case"vector4":return Ds;case"color":return Nu;case"quaternion":return Rs;case"bool":case"boolean":return Us;case"string":return Fs}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function fb(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=ub(i.type);if(i.times===void 0){const t=[],n=[];Fu(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}const Ii={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class db{constructor(e,t,n){const s=this;let r=!1,a=0,o=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){const u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=l.length;u<f;u+=2){const A=l[u],g=l[u+1];if(A.global&&(A.lastIndex=0),A.test(h))return g}return null}}}const Ab=new db;class Ji{constructor(e){this.manager=e!==void 0?e:Ab,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Ji.DEFAULT_MATERIAL_NAME="__DEFAULT";const ni={};class pb extends Error{constructor(e,t){super(e),this.response=t}}class ar extends Ji{constructor(e){super(e)}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=Ii.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(ni[e]!==void 0){ni[e].push({onLoad:t,onProgress:n,onError:s});return}ni[e]=[],ni[e].push({onLoad:t,onProgress:n,onError:s});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,c=this.responseType;fetch(a).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const h=ni[e],u=l.body.getReader(),f=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),A=f?parseInt(f):0,g=A!==0;let _=0;const p=new ReadableStream({start(d){x();function x(){u.read().then(({done:E,value:b})=>{if(E)d.close();else{_+=b.byteLength;const L=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:A});for(let B=0,w=h.length;B<w;B++){const D=h[B];D.onProgress&&D.onProgress(L)}d.enqueue(b),x()}},E=>{d.error(E)})}}});return new Response(p)}else throw new pb(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return l.json();default:if(o===void 0)return l.text();{const u=/charset="?([^;"\s]*)"?/i.exec(o),f=u&&u[1]?u[1].toLowerCase():void 0,A=new TextDecoder(f);return l.arrayBuffer().then(g=>A.decode(g))}}}).then(l=>{Ii.add(e,l);const h=ni[e];delete ni[e];for(let u=0,f=h.length;u<f;u++){const A=h[u];A.onLoad&&A.onLoad(l)}}).catch(l=>{const h=ni[e];if(h===void 0)throw this.manager.itemError(e),l;delete ni[e];for(let u=0,f=h.length;u<f;u++){const A=h[u];A.onError&&A.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class gb extends Ji{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=Ii.get(e);if(a!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a;const o=pr("img");function c(){h(),Ii.add(e,this),t&&t(this),r.manager.itemEnd(e)}function l(u){h(),s&&s(u),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(e),o.src=e,o}}class Wc extends Ji{constructor(e){super(e)}load(e,t,n,s){const r=new wt,a=new gb(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}}class Na extends mt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Me(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class Ch extends Na{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(mt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Me(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const _o=new Qe,Sh=new U,Ih=new U;class jc{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new De(512,512),this.map=null,this.mapPass=null,this.matrix=new Qe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Qc,this._frameExtents=new De(1,1),this._viewportCount=1,this._viewports=[new at(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Sh.setFromMatrixPosition(e.matrixWorld),t.position.copy(Sh),Ih.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Ih),t.updateMatrixWorld(),_o.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(_o),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(_o)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class mb extends jc{constructor(){super(new tn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=Is*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class bb extends Na{constructor(e,t,n=0,s=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(mt.DEFAULT_UP),this.updateMatrix(),this.target=new mt,this.distance=n,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new mb}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const wh=new Qe,js=new U,Eo=new U;class _b extends jc{constructor(){super(new tn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new De(4,2),this._viewportCount=6,this._viewports=[new at(2,1,1,1),new at(0,1,1,1),new at(3,1,1,1),new at(1,1,1,1),new at(3,0,1,1),new at(1,0,1,1)],this._cubeDirections=[new U(1,0,0),new U(-1,0,0),new U(0,0,1),new U(0,0,-1),new U(0,1,0),new U(0,-1,0)],this._cubeUps=[new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,0,1),new U(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),js.setFromMatrixPosition(e.matrixWorld),n.position.copy(js),Eo.copy(n.position),Eo.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Eo),n.updateMatrixWorld(),s.makeTranslation(-js.x,-js.y,-js.z),wh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(wh)}}class Eb extends Na{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new _b}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class xb extends jc{constructor(){super(new Ra(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Qu extends Na{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(mt.DEFAULT_UP),this.updateMatrix(),this.target=new mt,this.shadow=new xb}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class or{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,s=e.length;n<s;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class vb extends Ji{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=Ii.get(e);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(l=>{t&&t(l),r.manager.itemEnd(e)}).catch(l=>{s&&s(l)});return}return setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a}const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader;const c=fetch(e,o).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){return Ii.add(e,l),t&&t(l),r.manager.itemEnd(e),l}).catch(function(l){s&&s(l),Ii.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});Ii.add(e,c),r.manager.itemStart(e)}}class yb{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Th(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Th();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Th(){return performance.now()}const qc="\\[\\]\\.:\\/",Mb=new RegExp("["+qc+"]","g"),Yc="[^"+qc+"]",Cb="[^"+qc.replace("\\.","")+"]",Sb=/((?:WC+[\/:])*)/.source.replace("WC",Yc),Ib=/(WCOD+)?/.source.replace("WCOD",Cb),wb=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Yc),Tb=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Yc),Bb=new RegExp("^"+Sb+Ib+wb+Tb+"$"),Rb=["material","materials","bones","map"];class Db{constructor(e,t,n){const s=n||ft.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class ft{constructor(e,t,n){this.path=t,this.parsedPath=n||ft.parseTrackName(t),this.node=ft.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new ft.Composite(e,t,n):new ft(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Mb,"")}static parseTrackName(e){const t=Bb.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){const r=n.nodeName.substring(s+1);Rb.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let a=0;a<r.length;a++){const o=r[a];if(o.name===t||o.uuid===t)return o;const c=n(o.children);if(c)return c}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,s=t.propertyName;let r=t.propertyIndex;if(e||(e=ft.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}const a=e[s];if(a===void 0){const l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}ft.Composite=Db;ft.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ft.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ft.prototype.GetterByBindingType=[ft.prototype._getValue_direct,ft.prototype._getValue_array,ft.prototype._getValue_arrayElement,ft.prototype._getValue_toArray];ft.prototype.SetterByBindingTypeAndVersioning=[[ft.prototype._setValue_direct,ft.prototype._setValue_direct_setNeedsUpdate,ft.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ft.prototype._setValue_array,ft.prototype._setValue_array_setNeedsUpdate,ft.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ft.prototype._setValue_arrayElement,ft.prototype._setValue_arrayElement_setNeedsUpdate,ft.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ft.prototype._setValue_fromArray,ft.prototype._setValue_fromArray_setNeedsUpdate,ft.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class Bh{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Ot(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Lb extends Ki{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Sc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Sc);const Rh={type:"change"},Xc={type:"start"},Ou={type:"end"},na=new xr,Dh=new vi,Pb=Math.cos(70*Xt.DEG2RAD),Rt=new U,on=2*Math.PI,dt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},xo=1e-6;class Ub extends Lb{constructor(e,t=null){super(e,t),this.state=dt.NONE,this.enabled=!0,this.target=new U,this.cursor=new U,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:li.ROTATE,MIDDLE:li.DOLLY,RIGHT:li.PAN},this.touches={ONE:Mi.ROTATE,TWO:Mi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new U,this._lastQuaternion=new St,this._lastTargetPosition=new U,this._quat=new St().setFromUnitVectors(e.up,new U(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Bh,this._sphericalDelta=new Bh,this._scale=1,this._panOffset=new U,this._rotateStart=new De,this._rotateEnd=new De,this._rotateDelta=new De,this._panStart=new De,this._panEnd=new De,this._panDelta=new De,this._dollyStart=new De,this._dollyEnd=new De,this._dollyDelta=new De,this._dollyDirection=new U,this._mouse=new De,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Nb.bind(this),this._onPointerDown=Fb.bind(this),this._onPointerUp=Qb.bind(this),this._onContextMenu=Wb.bind(this),this._onMouseWheel=Gb.bind(this),this._onKeyDown=zb.bind(this),this._onTouchStart=Hb.bind(this),this._onTouchMove=Vb.bind(this),this._onMouseDown=Ob.bind(this),this._onMouseMove=kb.bind(this),this._interceptControlDown=jb.bind(this),this._interceptControlUp=qb.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Rh),this.update(),this.state=dt.NONE}update(e=null){const t=this.object.position;Rt.copy(t).sub(this.target),Rt.applyQuaternion(this._quat),this._spherical.setFromVector3(Rt),this.autoRotate&&this.state===dt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=on:n>Math.PI&&(n-=on),s<-Math.PI?s+=on:s>Math.PI&&(s-=on),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(Rt.setFromSpherical(this._spherical),Rt.applyQuaternion(this._quatInverse),t.copy(this.target).add(Rt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=Rt.length();a=this._clampDistance(o*this._scale);const c=o-a;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),r=!!c}else if(this.object.isOrthographicCamera){const o=new U(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=c!==this.object.zoom;const l=new U(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(o),this.object.updateMatrixWorld(),a=Rt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(na.origin.copy(this.object.position),na.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(na.direction))<Pb?this.object.lookAt(this.target):(Dh.setFromNormalAndCoplanarPoint(this.object.up,this.target),na.intersectPlane(Dh,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>xo||8*(1-this._lastQuaternion.dot(this.object.quaternion))>xo||this._lastTargetPosition.distanceToSquared(this.target)>xo?(this.dispatchEvent(Rh),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?on/60*this.autoRotateSpeed*e:on/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Rt.setFromMatrixColumn(t,0),Rt.multiplyScalar(-e),this._panOffset.add(Rt)}_panUp(e,t){this.screenSpacePanning===!0?Rt.setFromMatrixColumn(t,1):(Rt.setFromMatrixColumn(t,0),Rt.crossVectors(this.object.up,Rt)),Rt.multiplyScalar(e),this._panOffset.add(Rt)}_pan(e,t){const n=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;Rt.copy(s).sub(this.target);let r=Rt.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/n.clientHeight,this.object.matrix),this._panUp(2*t*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),s=e-n.left,r=t-n.top,a=n.width,o=n.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(on*this._rotateDelta.x/t.clientHeight),this._rotateUp(on*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(on*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(-on*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(on*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(-on*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(n,s)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),s=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(on*this._rotateDelta.x/t.clientHeight),this._rotateUp(on*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new De,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function Fb(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function Nb(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function Qb(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Ou),this.state=dt.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function Ob(i){let e;switch(i.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case li.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=dt.DOLLY;break;case li.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=dt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=dt.ROTATE}break;case li.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=dt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=dt.PAN}break;default:this.state=dt.NONE}this.state!==dt.NONE&&this.dispatchEvent(Xc)}function kb(i){switch(this.state){case dt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case dt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case dt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function Gb(i){this.enabled===!1||this.enableZoom===!1||this.state!==dt.NONE||(i.preventDefault(),this.dispatchEvent(Xc),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(Ou))}function zb(i){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(i)}function Hb(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case Mi.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=dt.TOUCH_ROTATE;break;case Mi.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=dt.TOUCH_PAN;break;default:this.state=dt.NONE}break;case 2:switch(this.touches.TWO){case Mi.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=dt.TOUCH_DOLLY_PAN;break;case Mi.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=dt.TOUCH_DOLLY_ROTATE;break;default:this.state=dt.NONE}break;default:this.state=dt.NONE}this.state!==dt.NONE&&this.dispatchEvent(Xc)}function Vb(i){switch(this._trackPointer(i),this.state){case dt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case dt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case dt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case dt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=dt.NONE}}function Wb(i){this.enabled!==!1&&i.preventDefault()}function jb(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function qb(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}class Yb extends Ub{constructor(e,t){super(e,t),this.screenSpacePanning=!1,this.mouseButtons={LEFT:li.PAN,MIDDLE:li.DOLLY,RIGHT:li.ROTATE},this.touches={ONE:Mi.PAN,TWO:Mi.DOLLY_ROTATE}}}function Sa(i,e=!1){const t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},a={},o=i[0].morphTargetsRelative,c=new bt;let l=0;for(let h=0;h<i.length;++h){const u=i[h];let f=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const A in u.attributes){if(!n.has(A))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+A+'" attribute exists among all geometries, or in none of them.'),null;r[A]===void 0&&(r[A]=[]),r[A].push(u.attributes[A]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const A in u.morphAttributes){if(!s.has(A))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[A]===void 0&&(a[A]=[]),a[A].push(u.morphAttributes[A])}if(e){let A;if(t)A=u.index.count;else if(u.attributes.position!==void 0)A=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,A,h),l+=A}}if(t){let h=0;const u=[];for(let f=0;f<i.length;++f){const A=i[f].index;for(let g=0;g<A.count;++g)u.push(A.getX(g)+h);h+=i[f].attributes.position.count}c.setIndex(u)}for(const h in r){const u=Lh(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,u)}for(const h in a){const u=a[h][0].length;if(u===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let f=0;f<u;++f){const A=[];for(let _=0;_<a[h].length;++_)A.push(a[h][_][f]);const g=Lh(A);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(g)}}return c}function Lh(i){let e,t,n,s=-1,r=0;for(let l=0;l<i.length;++l){const h=i[l];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}const a=new e(r),o=new Mt(a,t,n);let c=0;for(let l=0;l<i.length;++l){const h=i[l];if(h.isInterleavedBufferAttribute){const u=c/t;for(let f=0,A=h.count;f<A;f++)for(let g=0;g<t;g++){const _=h.getComponent(f,g);o.setComponent(f+u,g,_)}}else a.set(h.array,c);c+=h.count*t}return s!==void 0&&(o.gpuType=s),o}function Ph(i,e){if(e===Hf)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===dc||e===fu){let t=i.getIndex();if(t===null){const a=[],o=i.getAttribute("position");if(o!==void 0){for(let c=0;c<o.count;c++)a.push(c);i.setIndex(a),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}const n=t.count-2,s=[];if(e===dc)for(let a=1;a<=n;a++)s.push(t.getX(0)),s.push(t.getX(a)),s.push(t.getX(a+1));else for(let a=0;a<n;a++)a%2===0?(s.push(t.getX(a)),s.push(t.getX(a+1)),s.push(t.getX(a+2))):(s.push(t.getX(a+2)),s.push(t.getX(a+1)),s.push(t.getX(a)));s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=i.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}const cr={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class Zi{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const Xb=new Ra(-1,1,1,-1,0,1);class Kb extends bt{constructor(){super(),this.setAttribute("position",new nt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new nt([0,2,0,0,2,0],2))}}const Jb=new Kb;class Qa{constructor(e){this._mesh=new rt(Jb,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Xb)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class Oa extends Zi{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof Bt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Hn.clone(e.uniforms),this.material=new Bt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Qa(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Uh extends Zi{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}}class Zb extends Zi{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class $b{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const n=e.getSize(new De);this._width=n.width,this._height=n.height,t=new pn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Gt}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Oa(cr),this.copyPass.material.blending=Qt,this.clock=new yb}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let s=0,r=this.passes.length;s<r;s++){const a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),a.needsSwap){if(n){const o=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),c.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Uh!==void 0&&(a instanceof Uh?n=!0:a instanceof Zb&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new De);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class e_ extends Zi{constructor(e,t,n=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Me}render(e,t,n){const s=e.autoClear;e.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=s}}const ia={defines:{PERSPECTIVE_CAMERA:1,SAMPLES:16,NORMAL_VECTOR_TYPE:1,DEPTH_SWIZZLING:"x",SCREEN_SPACE_RADIUS:0,SCREEN_SPACE_RADIUS_SCALE:100,SCENE_CLIP_BOX:0},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new De},cameraNear:{value:null},cameraFar:{value:null},cameraProjectionMatrix:{value:new Qe},cameraProjectionMatrixInverse:{value:new Qe},cameraWorldMatrix:{value:new Qe},radius:{value:.25},distanceExponent:{value:1},thickness:{value:1},distanceFallOff:{value:1},scale:{value:1},sceneBoxMin:{value:new U(-1,-1,-1)},sceneBoxMax:{value:new U(1,1,1)}},vertexShader:`

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
		}`},sa={defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`
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

		}`},vo={uniforms:{tDiffuse:{value:null},intensity:{value:1}},vertexShader:`
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
		}`};function t_(i=5){const e=Math.floor(i)%2===0?Math.floor(i)+1:Math.floor(i),t=n_(e),n=t.length,s=new Uint8Array(n*4);for(let a=0;a<n;++a){const o=t[a],c=2*Math.PI*o/n,l=new U(Math.cos(c),Math.sin(c),0).normalize();s[a*4]=(l.x*.5+.5)*255,s[a*4+1]=(l.y*.5+.5)*255,s[a*4+2]=127,s[a*4+3]=255}const r=new vr(s,e,e);return r.wrapS=gn,r.wrapT=gn,r.needsUpdate=!0,r}function n_(i){const e=Math.floor(i)%2===0?Math.floor(i)+1:Math.floor(i),t=e*e,n=Array(t).fill(0);let s=Math.floor(e/2),r=e-1;for(let a=1;a<=t;){if(s===-1&&r===e?(r=e-2,s=0):(r===e&&(r=0),s<0&&(s=e-1)),n[s*e+r]!==0){r-=2,s++;continue}else n[s*e+r]=a++;r++,s--}return n}const ra={defines:{SAMPLES:16,SAMPLE_VECTORS:ku(16,2,1),NORMAL_VECTOR_TYPE:1,DEPTH_VALUE_SOURCE:0},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new De},cameraProjectionMatrixInverse:{value:new Qe},lumaPhi:{value:5},depthPhi:{value:5},normalPhi:{value:5},radius:{value:4},index:{value:0}},vertexShader:`

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
		}`};function ku(i,e,t){const n=i_(i,e,t);let s="vec3[SAMPLES](";for(let r=0;r<i;r++){const a=n[r];s+=`vec3(${a.x}, ${a.y}, ${a.z})${r<i-1?",":")"}`}return s}function i_(i,e,t){const n=[];for(let s=0;s<i;s++){const r=2*Math.PI*e*s/i,a=Math.pow(s/(i-1),t);n.push(new U(Math.cos(r),Math.sin(r),a))}return n}class s_{constructor(e=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let t=0;t<256;t++)this.p[t]=Math.floor(e.random()*256);this.perm=[];for(let t=0;t<512;t++)this.perm[t]=this.p[t&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}dot(e,t,n){return e[0]*t+e[1]*n}dot3(e,t,n,s){return e[0]*t+e[1]*n+e[2]*s}dot4(e,t,n,s,r){return e[0]*t+e[1]*n+e[2]*s+e[3]*r}noise(e,t){let n,s,r;const a=.5*(Math.sqrt(3)-1),o=(e+t)*a,c=Math.floor(e+o),l=Math.floor(t+o),h=(3-Math.sqrt(3))/6,u=(c+l)*h,f=c-u,A=l-u,g=e-f,_=t-A;let p,d;g>_?(p=1,d=0):(p=0,d=1);const x=g-p+h,E=_-d+h,b=g-1+2*h,L=_-1+2*h,B=c&255,w=l&255,D=this.perm[B+this.perm[w]]%12,M=this.perm[B+p+this.perm[w+d]]%12,y=this.perm[B+1+this.perm[w+1]]%12;let T=.5-g*g-_*_;T<0?n=0:(T*=T,n=T*T*this.dot(this.grad3[D],g,_));let j=.5-x*x-E*E;j<0?s=0:(j*=j,s=j*j*this.dot(this.grad3[M],x,E));let V=.5-b*b-L*L;return V<0?r=0:(V*=V,r=V*V*this.dot(this.grad3[y],b,L)),70*(n+s+r)}noise3d(e,t,n){let s,r,a,o;const l=(e+t+n)*.3333333333333333,h=Math.floor(e+l),u=Math.floor(t+l),f=Math.floor(n+l),A=1/6,g=(h+u+f)*A,_=h-g,p=u-g,d=f-g,x=e-_,E=t-p,b=n-d;let L,B,w,D,M,y;x>=E?E>=b?(L=1,B=0,w=0,D=1,M=1,y=0):x>=b?(L=1,B=0,w=0,D=1,M=0,y=1):(L=0,B=0,w=1,D=1,M=0,y=1):E<b?(L=0,B=0,w=1,D=0,M=1,y=1):x<b?(L=0,B=1,w=0,D=0,M=1,y=1):(L=0,B=1,w=0,D=1,M=1,y=0);const T=x-L+A,j=E-B+A,V=b-w+A,he=x-D+2*A,fe=E-M+2*A,ae=b-y+2*A,se=x-1+3*A,te=E-1+3*A,ge=b-1+3*A,ie=h&255,me=u&255,xe=f&255,ve=this.perm[ie+this.perm[me+this.perm[xe]]]%12,Y=this.perm[ie+L+this.perm[me+B+this.perm[xe+w]]]%12,de=this.perm[ie+D+this.perm[me+M+this.perm[xe+y]]]%12,Ce=this.perm[ie+1+this.perm[me+1+this.perm[xe+1]]]%12;let v=.6-x*x-E*E-b*b;v<0?s=0:(v*=v,s=v*v*this.dot3(this.grad3[ve],x,E,b));let P=.6-T*T-j*j-V*V;P<0?r=0:(P*=P,r=P*P*this.dot3(this.grad3[Y],T,j,V));let q=.6-he*he-fe*fe-ae*ae;q<0?a=0:(q*=q,a=q*q*this.dot3(this.grad3[de],he,fe,ae));let k=.6-se*se-te*te-ge*ge;return k<0?o=0:(k*=k,o=k*k*this.dot3(this.grad3[Ce],se,te,ge)),32*(s+r+a+o)}noise4d(e,t,n,s){const r=this.grad4,a=this.simplex,o=this.perm,c=(Math.sqrt(5)-1)/4,l=(5-Math.sqrt(5))/20;let h,u,f,A,g;const _=(e+t+n+s)*c,p=Math.floor(e+_),d=Math.floor(t+_),x=Math.floor(n+_),E=Math.floor(s+_),b=(p+d+x+E)*l,L=p-b,B=d-b,w=x-b,D=E-b,M=e-L,y=t-B,T=n-w,j=s-D,V=M>y?32:0,he=M>T?16:0,fe=y>T?8:0,ae=M>j?4:0,se=y>j?2:0,te=T>j?1:0,ge=V+he+fe+ae+se+te,ie=a[ge][0]>=3?1:0,me=a[ge][1]>=3?1:0,xe=a[ge][2]>=3?1:0,ve=a[ge][3]>=3?1:0,Y=a[ge][0]>=2?1:0,de=a[ge][1]>=2?1:0,Ce=a[ge][2]>=2?1:0,v=a[ge][3]>=2?1:0,P=a[ge][0]>=1?1:0,q=a[ge][1]>=1?1:0,k=a[ge][2]>=1?1:0,K=a[ge][3]>=1?1:0,X=M-ie+l,ce=y-me+l,R=T-xe+l,be=j-ve+l,ne=M-Y+2*l,oe=y-de+2*l,W=T-Ce+2*l,re=j-v+2*l,O=M-P+3*l,C=y-q+3*l,m=T-k+3*l,S=j-K+3*l,F=M-1+4*l,Q=y-1+4*l,N=T-1+4*l,G=j-1+4*l,H=p&255,$=d&255,_e=x&255,J=E&255,pe=o[H+o[$+o[_e+o[J]]]]%32,Se=o[H+ie+o[$+me+o[_e+xe+o[J+ve]]]]%32,we=o[H+Y+o[$+de+o[_e+Ce+o[J+v]]]]%32,ye=o[H+P+o[$+q+o[_e+k+o[J+K]]]]%32,Ue=o[H+1+o[$+1+o[_e+1+o[J+1]]]]%32;let Fe=.6-M*M-y*y-T*T-j*j;Fe<0?h=0:(Fe*=Fe,h=Fe*Fe*this.dot4(r[pe],M,y,T,j));let qe=.6-X*X-ce*ce-R*R-be*be;qe<0?u=0:(qe*=qe,u=qe*qe*this.dot4(r[Se],X,ce,R,be));let z=.6-ne*ne-oe*oe-W*W-re*re;z<0?f=0:(z*=z,f=z*z*this.dot4(r[we],ne,oe,W,re));let Ie=.6-O*O-C*C-m*m-S*S;Ie<0?A=0:(Ie*=Ie,A=Ie*Ie*this.dot4(r[ye],O,C,m,S));let Ae=.6-F*F-Q*Q-N*N-G*G;return Ae<0?g=0:(Ae*=Ae,g=Ae*Ae*this.dot4(r[Ue],F,Q,N,G)),27*(h+u+f+A+g)}}class kn extends Zi{constructor(e,t,n,s,r,a,o){super(),this.width=n!==void 0?n:512,this.height=s!==void 0?s:512,this.clear=!0,this.camera=t,this.scene=e,this.output=0,this._renderGBuffer=!0,this._visibilityCache=new Map,this.blendIntensity=1,this.pdRings=2,this.pdRadiusExponent=2,this.pdSamples=16,this.gtaoNoiseTexture=t_(),this.pdNoiseTexture=this.generateNoise(),this.gtaoRenderTarget=new pn(this.width,this.height,{type:Gt}),this.pdRenderTarget=this.gtaoRenderTarget.clone(),this.gtaoMaterial=new Bt({defines:Object.assign({},ia.defines),uniforms:Hn.clone(ia.uniforms),vertexShader:ia.vertexShader,fragmentShader:ia.fragmentShader,blending:Qt,depthTest:!1,depthWrite:!1}),this.gtaoMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.gtaoMaterial.uniforms.tNoise.value=this.gtaoNoiseTexture,this.gtaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.normalMaterial=new ib,this.normalMaterial.blending=Qt,this.pdMaterial=new Bt({defines:Object.assign({},ra.defines),uniforms:Hn.clone(ra.uniforms),vertexShader:ra.vertexShader,fragmentShader:ra.fragmentShader,depthTest:!1,depthWrite:!1}),this.pdMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.pdMaterial.uniforms.tNoise.value=this.pdNoiseTexture,this.pdMaterial.uniforms.resolution.value.set(this.width,this.height),this.pdMaterial.uniforms.lumaPhi.value=10,this.pdMaterial.uniforms.depthPhi.value=2,this.pdMaterial.uniforms.normalPhi.value=3,this.pdMaterial.uniforms.radius.value=8,this.depthRenderMaterial=new Bt({defines:Object.assign({},sa.defines),uniforms:Hn.clone(sa.uniforms),vertexShader:sa.vertexShader,fragmentShader:sa.fragmentShader,blending:Qt}),this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new Bt({uniforms:Hn.clone(cr.uniforms),vertexShader:cr.vertexShader,fragmentShader:cr.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:Oo,blendDst:Ks,blendEquation:Dn,blendSrcAlpha:Qo,blendDstAlpha:Ks,blendEquationAlpha:Dn}),this.blendMaterial=new Bt({uniforms:Hn.clone(vo.uniforms),vertexShader:vo.vertexShader,fragmentShader:vo.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blending:Jh,blendSrc:Oo,blendDst:Ks,blendEquation:Dn,blendSrcAlpha:Qo,blendDstAlpha:Ks,blendEquationAlpha:Dn}),this.fsQuad=new Qa(null),this.originalClearColor=new Me,this.setGBuffer(r?r.depthTexture:void 0,r?r.normalTexture:void 0),a!==void 0&&this.updateGtaoMaterial(a),o!==void 0&&this.updatePdMaterial(o)}dispose(){this.gtaoNoiseTexture.dispose(),this.pdNoiseTexture.dispose(),this.normalRenderTarget.dispose(),this.gtaoRenderTarget.dispose(),this.pdRenderTarget.dispose(),this.normalMaterial.dispose(),this.pdMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this.fsQuad.dispose()}get gtaoMap(){return this.pdRenderTarget.texture}setGBuffer(e,t){e!==void 0?(this.depthTexture=e,this.normalTexture=t,this._renderGBuffer=!1):(this.depthTexture=new kc,this.depthTexture.format=qi,this.depthTexture.type=ji,this.normalRenderTarget=new pn(this.width,this.height,{minFilter:Ht,magFilter:Ht,type:Gt,depthTexture:this.depthTexture}),this.normalTexture=this.normalRenderTarget.texture,this._renderGBuffer=!0);const n=this.normalTexture?1:0,s=this.depthTexture===this.normalTexture?"w":"x";this.gtaoMaterial.defines.NORMAL_VECTOR_TYPE=n,this.gtaoMaterial.defines.DEPTH_SWIZZLING=s,this.gtaoMaterial.uniforms.tNormal.value=this.normalTexture,this.gtaoMaterial.uniforms.tDepth.value=this.depthTexture,this.pdMaterial.defines.NORMAL_VECTOR_TYPE=n,this.pdMaterial.defines.DEPTH_SWIZZLING=s,this.pdMaterial.uniforms.tNormal.value=this.normalTexture,this.pdMaterial.uniforms.tDepth.value=this.depthTexture,this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture}setSceneClipBox(e){e?(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX!==1,this.gtaoMaterial.defines.SCENE_CLIP_BOX=1,this.gtaoMaterial.uniforms.sceneBoxMin.value.copy(e.min),this.gtaoMaterial.uniforms.sceneBoxMax.value.copy(e.max)):(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX===0,this.gtaoMaterial.defines.SCENE_CLIP_BOX=0)}updateGtaoMaterial(e){e.radius!==void 0&&(this.gtaoMaterial.uniforms.radius.value=e.radius),e.distanceExponent!==void 0&&(this.gtaoMaterial.uniforms.distanceExponent.value=e.distanceExponent),e.thickness!==void 0&&(this.gtaoMaterial.uniforms.thickness.value=e.thickness),e.distanceFallOff!==void 0&&(this.gtaoMaterial.uniforms.distanceFallOff.value=e.distanceFallOff,this.gtaoMaterial.needsUpdate=!0),e.scale!==void 0&&(this.gtaoMaterial.uniforms.scale.value=e.scale),e.samples!==void 0&&e.samples!==this.gtaoMaterial.defines.SAMPLES&&(this.gtaoMaterial.defines.SAMPLES=e.samples,this.gtaoMaterial.needsUpdate=!0),e.screenSpaceRadius!==void 0&&(e.screenSpaceRadius?1:0)!==this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS&&(this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS=e.screenSpaceRadius?1:0,this.gtaoMaterial.needsUpdate=!0)}updatePdMaterial(e){let t=!1;e.lumaPhi!==void 0&&(this.pdMaterial.uniforms.lumaPhi.value=e.lumaPhi),e.depthPhi!==void 0&&(this.pdMaterial.uniforms.depthPhi.value=e.depthPhi),e.normalPhi!==void 0&&(this.pdMaterial.uniforms.normalPhi.value=e.normalPhi),e.radius!==void 0&&e.radius!==this.radius&&(this.pdMaterial.uniforms.radius.value=e.radius),e.radiusExponent!==void 0&&e.radiusExponent!==this.pdRadiusExponent&&(this.pdRadiusExponent=e.radiusExponent,t=!0),e.rings!==void 0&&e.rings!==this.pdRings&&(this.pdRings=e.rings,t=!0),e.samples!==void 0&&e.samples!==this.pdSamples&&(this.pdSamples=e.samples,t=!0),t&&(this.pdMaterial.defines.SAMPLES=this.pdSamples,this.pdMaterial.defines.SAMPLE_VECTORS=ku(this.pdSamples,this.pdRings,this.pdRadiusExponent),this.pdMaterial.needsUpdate=!0)}render(e,t,n){switch(this._renderGBuffer&&(this.overrideVisibility(),this.renderOverride(e,this.normalMaterial,this.normalRenderTarget,7829503,1),this.restoreVisibility()),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.gtaoMaterial.uniforms.cameraWorldMatrix.value.copy(this.camera.matrixWorld),this.renderPass(e,this.gtaoMaterial,this.gtaoRenderTarget,16777215,1),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.renderPass(e,this.pdMaterial,this.pdRenderTarget,16777215,1),this.output){case kn.OUTPUT.Off:break;case kn.OUTPUT.Diffuse:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=Qt,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case kn.OUTPUT.AO:this.copyMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.copyMaterial.blending=Qt,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case kn.OUTPUT.Denoise:this.copyMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.copyMaterial.blending=Qt,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case kn.OUTPUT.Depth:this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.renderPass(e,this.depthRenderMaterial,this.renderToScreen?null:t);break;case kn.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=Qt,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case kn.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=Qt,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t),this.blendMaterial.uniforms.intensity.value=this.blendIntensity,this.blendMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.renderPass(e,this.blendMaterial,this.renderToScreen?null:t);break;default:console.warn("THREE.GTAOPass: Unknown output type.")}}renderPass(e,t,n,s,r){e.getClearColor(this.originalClearColor);const a=e.getClearAlpha(),o=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,s!=null&&(e.setClearColor(s),e.setClearAlpha(r||0),e.clear()),this.fsQuad.material=t,this.fsQuad.render(e),e.autoClear=o,e.setClearColor(this.originalClearColor),e.setClearAlpha(a)}renderOverride(e,t,n,s,r){e.getClearColor(this.originalClearColor);const a=e.getClearAlpha(),o=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,s=t.clearColor||s,r=t.clearAlpha||r,s!=null&&(e.setClearColor(s),e.setClearAlpha(r||0),e.clear()),this.scene.overrideMaterial=t,e.render(this.scene,this.camera),this.scene.overrideMaterial=null,e.autoClear=o,e.setClearColor(this.originalClearColor),e.setClearAlpha(a)}setSize(e,t){this.width=e,this.height=t,this.gtaoRenderTarget.setSize(e,t),this.normalRenderTarget.setSize(e,t),this.pdRenderTarget.setSize(e,t),this.gtaoMaterial.uniforms.resolution.value.set(e,t),this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.pdMaterial.uniforms.resolution.value.set(e,t),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse)}overrideVisibility(){const e=this.scene,t=this._visibilityCache;e.traverse(function(n){t.set(n,n.visible),(n.isPoints||n.isLine)&&(n.visible=!1)})}restoreVisibility(){const e=this.scene,t=this._visibilityCache;e.traverse(function(n){const s=t.get(n);n.visible=s}),t.clear()}generateNoise(e=64){const t=new s_,n=e*e*4,s=new Uint8Array(n);for(let a=0;a<e;a++)for(let o=0;o<e;o++){const c=a,l=o;s[(a*e+o)*4]=(t.noise(c,l)*.5+.5)*255,s[(a*e+o)*4+1]=(t.noise(c+e,l)*.5+.5)*255,s[(a*e+o)*4+2]=(t.noise(c,l+e)*.5+.5)*255,s[(a*e+o)*4+3]=(t.noise(c+e,l+e)*.5+.5)*255}const r=new vr(s,e,e,Pt,Lt);return r.wrapS=gn,r.wrapT=gn,r.needsUpdate=!0,r}}kn.OUTPUT={Off:-1,Default:0,Diffuse:1,Depth:2,Normal:3,AO:4,Denoise:5};const r_={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Me(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class Ls extends Zi{constructor(e,t,n,s){super(),this.strength=t!==void 0?t:1,this.radius=n,this.threshold=s,this.resolution=e!==void 0?new De(e.x,e.y):new De(256,256),this.clearColor=new Me(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new pn(r,a,{type:Gt}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){const f=new pn(r,a,{type:Gt});f.texture.name="UnrealBloomPass.h"+u,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);const A=new pn(r,a,{type:Gt});A.texture.name="UnrealBloomPass.v"+u,A.texture.generateMipmaps=!1,this.renderTargetsVertical.push(A),r=Math.round(r/2),a=Math.round(a/2)}const o=r_;this.highPassUniforms=Hn.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Bt({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];const c=[3,5,7,9,11];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(c[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new De(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const l=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=l,this.bloomTintColors=[new U(1,1,1),new U(1,1,1),new U(1,1,1),new U(1,1,1),new U(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const h=cr;this.copyUniforms=Hn.clone(h.uniforms),this.blendMaterial=new Bt({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:Uo,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Me,this.oldClearAlpha=1,this.basic=new Si,this.fsQuad=new Qa(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new De(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(e,t,n,s,r){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let o=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this.fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[c].uniforms.direction.value=Ls.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[c]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=Ls.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[c]),e.clear(),this.fsQuad.render(e),o=this.renderTargetsVertical[c];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=a}getSeperableBlurMaterial(e){const t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new Bt({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new De(.5,.5)},direction:{value:new De(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(e){return new Bt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}}Ls.BlurDirectionX=new De(1,0);Ls.BlurDirectionY=new De(0,1);const a_={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class o_ extends Zi{constructor(){super();const e=a_;this.uniforms=Hn.clone(e.uniforms),this.material=new nb({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new Qa(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},et.getTransfer(this._outputColorSpace)===ht&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Zh?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===$h?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===eu?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Tc?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Bc?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===tu&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class c_{constructor(e=4){this.pool=e,this.queue=[],this.workers=[],this.workersResolve=[],this.workerStatus=0}_initWorker(e){if(!this.workers[e]){const t=this.workerCreator();t.addEventListener("message",this._onMessage.bind(this,e)),this.workers[e]=t}}_getIdleWorker(){for(let e=0;e<this.pool;e++)if(!(this.workerStatus&1<<e))return e;return-1}_onMessage(e,t){const n=this.workersResolve[e];if(n&&n(t),this.queue.length){const{resolve:s,msg:r,transfer:a}=this.queue.shift();this.workersResolve[e]=s,this.workers[e].postMessage(r,a)}else this.workerStatus^=1<<e}setWorkerCreator(e){this.workerCreator=e}setWorkerLimit(e){this.pool=e}postMessage(e,t){return new Promise(n=>{const s=this._getIdleWorker();s!==-1?(this._initWorker(s),this.workerStatus|=1<<s,this.workersResolve[s]=n,this.workers[s].postMessage(e,t)):this.queue.push({resolve:n,msg:e,transfer:t})})}dispose(){this.workers.forEach(e=>e.terminate()),this.workersResolve.length=0,this.workers.length=0,this.queue.length=0,this.workerStatus=0}}const l_=0,Fh=2,h_=1,Nh=2,u_=0,f_=1,d_=10,A_=0,Gu=9,zu=15,Hu=16,Vu=22,Wu=37,ju=43,qu=76,Yu=83,Xu=97,Ku=100,Ju=103,Zu=109,$u=165,ef=166,Kc=1000066e3;class p_{constructor(){this.vkFormat=0,this.typeSize=1,this.pixelWidth=0,this.pixelHeight=0,this.pixelDepth=0,this.layerCount=0,this.faceCount=1,this.supercompressionScheme=0,this.levels=[],this.dataFormatDescriptor=[{vendorId:0,descriptorType:0,descriptorBlockSize:0,versionNumber:2,colorModel:0,colorPrimaries:1,transferFunction:2,flags:0,texelBlockDimension:[0,0,0,0],bytesPlane:[0,0,0,0,0,0,0,0],samples:[]}],this.keyValue={},this.globalData=null}}class qs{constructor(e,t,n,s){this._dataView=void 0,this._littleEndian=void 0,this._offset=void 0,this._dataView=new DataView(e.buffer,e.byteOffset+t,n),this._littleEndian=s,this._offset=0}_nextUint8(){const e=this._dataView.getUint8(this._offset);return this._offset+=1,e}_nextUint16(){const e=this._dataView.getUint16(this._offset,this._littleEndian);return this._offset+=2,e}_nextUint32(){const e=this._dataView.getUint32(this._offset,this._littleEndian);return this._offset+=4,e}_nextUint64(){const e=this._dataView.getUint32(this._offset,this._littleEndian)+4294967296*this._dataView.getUint32(this._offset+4,this._littleEndian);return this._offset+=8,e}_nextInt32(){const e=this._dataView.getInt32(this._offset,this._littleEndian);return this._offset+=4,e}_nextUint8Array(e){const t=new Uint8Array(this._dataView.buffer,this._dataView.byteOffset+this._offset,e);return this._offset+=e,t}_skip(e){return this._offset+=e,this}_scan(e,t){t===void 0&&(t=0);const n=this._offset;let s=0;for(;this._dataView.getUint8(this._offset)!==t&&s<e;)s++,this._offset++;return s<e&&this._offset++,new Uint8Array(this._dataView.buffer,this._dataView.byteOffset+n,s)}}const $t=[171,75,84,88,32,50,48,187,13,10,26,10];function Qh(i){return new TextDecoder().decode(i)}function g_(i){const e=new Uint8Array(i.buffer,i.byteOffset,$t.length);if(e[0]!==$t[0]||e[1]!==$t[1]||e[2]!==$t[2]||e[3]!==$t[3]||e[4]!==$t[4]||e[5]!==$t[5]||e[6]!==$t[6]||e[7]!==$t[7]||e[8]!==$t[8]||e[9]!==$t[9]||e[10]!==$t[10]||e[11]!==$t[11])throw new Error("Missing KTX 2.0 identifier.");const t=new p_,n=17*Uint32Array.BYTES_PER_ELEMENT,s=new qs(i,$t.length,n,!0);t.vkFormat=s._nextUint32(),t.typeSize=s._nextUint32(),t.pixelWidth=s._nextUint32(),t.pixelHeight=s._nextUint32(),t.pixelDepth=s._nextUint32(),t.layerCount=s._nextUint32(),t.faceCount=s._nextUint32();const r=s._nextUint32();t.supercompressionScheme=s._nextUint32();const a=s._nextUint32(),o=s._nextUint32(),c=s._nextUint32(),l=s._nextUint32(),h=s._nextUint64(),u=s._nextUint64(),f=new qs(i,$t.length+n,3*r*8,!0);for(let se=0;se<r;se++)t.levels.push({levelData:new Uint8Array(i.buffer,i.byteOffset+f._nextUint64(),f._nextUint64()),uncompressedByteLength:f._nextUint64()});const A=new qs(i,a,o,!0),g={vendorId:A._skip(4)._nextUint16(),descriptorType:A._nextUint16(),versionNumber:A._nextUint16(),descriptorBlockSize:A._nextUint16(),colorModel:A._nextUint8(),colorPrimaries:A._nextUint8(),transferFunction:A._nextUint8(),flags:A._nextUint8(),texelBlockDimension:[A._nextUint8(),A._nextUint8(),A._nextUint8(),A._nextUint8()],bytesPlane:[A._nextUint8(),A._nextUint8(),A._nextUint8(),A._nextUint8(),A._nextUint8(),A._nextUint8(),A._nextUint8(),A._nextUint8()],samples:[]},_=(g.descriptorBlockSize/4-6)/4;for(let se=0;se<_;se++){const te={bitOffset:A._nextUint16(),bitLength:A._nextUint8(),channelType:A._nextUint8(),samplePosition:[A._nextUint8(),A._nextUint8(),A._nextUint8(),A._nextUint8()],sampleLower:-1/0,sampleUpper:1/0};64&te.channelType?(te.sampleLower=A._nextInt32(),te.sampleUpper=A._nextInt32()):(te.sampleLower=A._nextUint32(),te.sampleUpper=A._nextUint32()),g.samples[se]=te}t.dataFormatDescriptor.length=0,t.dataFormatDescriptor.push(g);const p=new qs(i,c,l,!0);for(;p._offset<l;){const se=p._nextUint32(),te=p._scan(se),ge=Qh(te);if(t.keyValue[ge]=p._nextUint8Array(se-te.byteLength-1),ge.match(/^ktx/i)){const ie=Qh(t.keyValue[ge]);t.keyValue[ge]=ie.substring(0,ie.lastIndexOf("\0"))}p._skip(se%4?4-se%4:0)}if(u<=0)return t;const d=new qs(i,h,u,!0),x=d._nextUint16(),E=d._nextUint16(),b=d._nextUint32(),L=d._nextUint32(),B=d._nextUint32(),w=d._nextUint32(),D=[];for(let se=0;se<r;se++)D.push({imageFlags:d._nextUint32(),rgbSliceByteOffset:d._nextUint32(),rgbSliceByteLength:d._nextUint32(),alphaSliceByteOffset:d._nextUint32(),alphaSliceByteLength:d._nextUint32()});const M=h+d._offset,y=M+b,T=y+L,j=T+B,V=new Uint8Array(i.buffer,i.byteOffset+M,b),he=new Uint8Array(i.buffer,i.byteOffset+y,L),fe=new Uint8Array(i.buffer,i.byteOffset+T,B),ae=new Uint8Array(i.buffer,i.byteOffset+j,w);return t.globalData={endpointCount:x,selectorCount:E,imageDescs:D,endpointsData:V,selectorsData:he,tablesData:fe,extendedData:ae},t}let yo,si,Ec;const Mo={env:{emscripten_notify_memory_growth:function(i){Ec=new Uint8Array(si.exports.memory.buffer)}}};class m_{init(){return yo||(yo=typeof fetch<"u"?fetch("data:application/wasm;base64,"+Oh).then(e=>e.arrayBuffer()).then(e=>WebAssembly.instantiate(e,Mo)).then(this._init):WebAssembly.instantiate(Buffer.from(Oh,"base64"),Mo).then(this._init),yo)}_init(e){si=e.instance,Mo.env.emscripten_notify_memory_growth(0)}decode(e,t=0){if(!si)throw new Error("ZSTDDecoder: Await .init() before decoding.");const n=e.byteLength,s=si.exports.malloc(n);Ec.set(e,s),t=t||Number(si.exports.ZSTD_findDecompressedSize(s,n));const r=si.exports.malloc(t),a=si.exports.ZSTD_decompress(r,t,s,n),o=Ec.slice(r,r+a);return si.exports.free(s),si.exports.free(r),o}}const Oh="AGFzbQEAAAABpQEVYAF/AX9gAn9/AGADf39/AX9gBX9/f39/AX9gAX8AYAJ/fwF/YAR/f39/AX9gA39/fwBgBn9/f39/fwF/YAd/f39/f39/AX9gAn9/AX5gAn5+AX5gAABgBX9/f39/AGAGf39/f39/AGAIf39/f39/f38AYAl/f39/f39/f38AYAABf2AIf39/f39/f38Bf2ANf39/f39/f39/f39/fwF/YAF/AX4CJwEDZW52H2Vtc2NyaXB0ZW5fbm90aWZ5X21lbW9yeV9ncm93dGgABANpaAEFAAAFAgEFCwACAQABAgIFBQcAAwABDgsBAQcAEhMHAAUBDAQEAAANBwQCAgYCBAgDAwMDBgEACQkHBgICAAYGAgQUBwYGAwIGAAMCAQgBBwUGCgoEEQAEBAEIAwgDBQgDEA8IAAcABAUBcAECAgUEAQCAAgYJAX8BQaCgwAILB2AHBm1lbW9yeQIABm1hbGxvYwAoBGZyZWUAJgxaU1REX2lzRXJyb3IAaBlaU1REX2ZpbmREZWNvbXByZXNzZWRTaXplAFQPWlNURF9kZWNvbXByZXNzAEoGX3N0YXJ0ACQJBwEAQQELASQKussBaA8AIAAgACgCBCABajYCBAsZACAAKAIAIAAoAgRBH3F0QQAgAWtBH3F2CwgAIABBiH9LC34BBH9BAyEBIAAoAgQiA0EgTQRAIAAoAggiASAAKAIQTwRAIAAQDQ8LIAAoAgwiAiABRgRAQQFBAiADQSBJGw8LIAAgASABIAJrIANBA3YiBCABIARrIAJJIgEbIgJrIgQ2AgggACADIAJBA3RrNgIEIAAgBCgAADYCAAsgAQsUAQF/IAAgARACIQIgACABEAEgAgv3AQECfyACRQRAIABCADcCACAAQQA2AhAgAEIANwIIQbh/DwsgACABNgIMIAAgAUEEajYCECACQQRPBEAgACABIAJqIgFBfGoiAzYCCCAAIAMoAAA2AgAgAUF/ai0AACIBBEAgAEEIIAEQFGs2AgQgAg8LIABBADYCBEF/DwsgACABNgIIIAAgAS0AACIDNgIAIAJBfmoiBEEBTQRAIARBAWtFBEAgACABLQACQRB0IANyIgM2AgALIAAgAS0AAUEIdCADajYCAAsgASACakF/ai0AACIBRQRAIABBADYCBEFsDwsgAEEoIAEQFCACQQN0ams2AgQgAgsWACAAIAEpAAA3AAAgACABKQAINwAICy8BAX8gAUECdEGgHWooAgAgACgCAEEgIAEgACgCBGprQR9xdnEhAiAAIAEQASACCyEAIAFCz9bTvtLHq9lCfiAAfEIfiUKHla+vmLbem55/fgsdAQF/IAAoAgggACgCDEYEfyAAKAIEQSBGBUEACwuCBAEDfyACQYDAAE8EQCAAIAEgAhBnIAAPCyAAIAJqIQMCQCAAIAFzQQNxRQRAAkAgAkEBSARAIAAhAgwBCyAAQQNxRQRAIAAhAgwBCyAAIQIDQCACIAEtAAA6AAAgAUEBaiEBIAJBAWoiAiADTw0BIAJBA3ENAAsLAkAgA0F8cSIEQcAASQ0AIAIgBEFAaiIFSw0AA0AgAiABKAIANgIAIAIgASgCBDYCBCACIAEoAgg2AgggAiABKAIMNgIMIAIgASgCEDYCECACIAEoAhQ2AhQgAiABKAIYNgIYIAIgASgCHDYCHCACIAEoAiA2AiAgAiABKAIkNgIkIAIgASgCKDYCKCACIAEoAiw2AiwgAiABKAIwNgIwIAIgASgCNDYCNCACIAEoAjg2AjggAiABKAI8NgI8IAFBQGshASACQUBrIgIgBU0NAAsLIAIgBE8NAQNAIAIgASgCADYCACABQQRqIQEgAkEEaiICIARJDQALDAELIANBBEkEQCAAIQIMAQsgA0F8aiIEIABJBEAgACECDAELIAAhAgNAIAIgAS0AADoAACACIAEtAAE6AAEgAiABLQACOgACIAIgAS0AAzoAAyABQQRqIQEgAkEEaiICIARNDQALCyACIANJBEADQCACIAEtAAA6AAAgAUEBaiEBIAJBAWoiAiADRw0ACwsgAAsMACAAIAEpAAA3AAALQQECfyAAKAIIIgEgACgCEEkEQEEDDwsgACAAKAIEIgJBB3E2AgQgACABIAJBA3ZrIgE2AgggACABKAAANgIAQQALDAAgACABKAIANgAAC/cCAQJ/AkAgACABRg0AAkAgASACaiAASwRAIAAgAmoiBCABSw0BCyAAIAEgAhALDwsgACABc0EDcSEDAkACQCAAIAFJBEAgAwRAIAAhAwwDCyAAQQNxRQRAIAAhAwwCCyAAIQMDQCACRQ0EIAMgAS0AADoAACABQQFqIQEgAkF/aiECIANBAWoiA0EDcQ0ACwwBCwJAIAMNACAEQQNxBEADQCACRQ0FIAAgAkF/aiICaiIDIAEgAmotAAA6AAAgA0EDcQ0ACwsgAkEDTQ0AA0AgACACQXxqIgJqIAEgAmooAgA2AgAgAkEDSw0ACwsgAkUNAgNAIAAgAkF/aiICaiABIAJqLQAAOgAAIAINAAsMAgsgAkEDTQ0AIAIhBANAIAMgASgCADYCACABQQRqIQEgA0EEaiEDIARBfGoiBEEDSw0ACyACQQNxIQILIAJFDQADQCADIAEtAAA6AAAgA0EBaiEDIAFBAWohASACQX9qIgINAAsLIAAL8wICAn8BfgJAIAJFDQAgACACaiIDQX9qIAE6AAAgACABOgAAIAJBA0kNACADQX5qIAE6AAAgACABOgABIANBfWogAToAACAAIAE6AAIgAkEHSQ0AIANBfGogAToAACAAIAE6AAMgAkEJSQ0AIABBACAAa0EDcSIEaiIDIAFB/wFxQYGChAhsIgE2AgAgAyACIARrQXxxIgRqIgJBfGogATYCACAEQQlJDQAgAyABNgIIIAMgATYCBCACQXhqIAE2AgAgAkF0aiABNgIAIARBGUkNACADIAE2AhggAyABNgIUIAMgATYCECADIAE2AgwgAkFwaiABNgIAIAJBbGogATYCACACQWhqIAE2AgAgAkFkaiABNgIAIAQgA0EEcUEYciIEayICQSBJDQAgAa0iBUIghiAFhCEFIAMgBGohAQNAIAEgBTcDGCABIAU3AxAgASAFNwMIIAEgBTcDACABQSBqIQEgAkFgaiICQR9LDQALCyAACy8BAn8gACgCBCAAKAIAQQJ0aiICLQACIQMgACACLwEAIAEgAi0AAxAIajYCACADCy8BAn8gACgCBCAAKAIAQQJ0aiICLQACIQMgACACLwEAIAEgAi0AAxAFajYCACADCx8AIAAgASACKAIEEAg2AgAgARAEGiAAIAJBCGo2AgQLCAAgAGdBH3MLugUBDX8jAEEQayIKJAACfyAEQQNNBEAgCkEANgIMIApBDGogAyAEEAsaIAAgASACIApBDGpBBBAVIgBBbCAAEAMbIAAgACAESxsMAQsgAEEAIAEoAgBBAXRBAmoQECENQVQgAygAACIGQQ9xIgBBCksNABogAiAAQQVqNgIAIAMgBGoiAkF8aiEMIAJBeWohDiACQXtqIRAgAEEGaiELQQQhBSAGQQR2IQRBICAAdCIAQQFyIQkgASgCACEPQQAhAiADIQYCQANAIAlBAkggAiAPS3JFBEAgAiEHAkAgCARAA0AgBEH//wNxQf//A0YEQCAHQRhqIQcgBiAQSQR/IAZBAmoiBigAACAFdgUgBUEQaiEFIARBEHYLIQQMAQsLA0AgBEEDcSIIQQNGBEAgBUECaiEFIARBAnYhBCAHQQNqIQcMAQsLIAcgCGoiByAPSw0EIAVBAmohBQNAIAIgB0kEQCANIAJBAXRqQQA7AQAgAkEBaiECDAELCyAGIA5LQQAgBiAFQQN1aiIHIAxLG0UEQCAHKAAAIAVBB3EiBXYhBAwCCyAEQQJ2IQQLIAYhBwsCfyALQX9qIAQgAEF/anEiBiAAQQF0QX9qIgggCWsiEUkNABogBCAIcSIEQQAgESAEIABIG2shBiALCyEIIA0gAkEBdGogBkF/aiIEOwEAIAlBASAGayAEIAZBAUgbayEJA0AgCSAASARAIABBAXUhACALQX9qIQsMAQsLAn8gByAOS0EAIAcgBSAIaiIFQQN1aiIGIAxLG0UEQCAFQQdxDAELIAUgDCIGIAdrQQN0awshBSACQQFqIQIgBEUhCCAGKAAAIAVBH3F2IQQMAQsLQWwgCUEBRyAFQSBKcg0BGiABIAJBf2o2AgAgBiAFQQdqQQN1aiADawwBC0FQCyEAIApBEGokACAACwkAQQFBBSAAGwsMACAAIAEoAAA2AAALqgMBCn8jAEHwAGsiCiQAIAJBAWohDiAAQQhqIQtBgIAEIAVBf2p0QRB1IQxBACECQQEhBkEBIAV0IglBf2oiDyEIA0AgAiAORkUEQAJAIAEgAkEBdCINai8BACIHQf//A0YEQCALIAhBA3RqIAI2AgQgCEF/aiEIQQEhBwwBCyAGQQAgDCAHQRB0QRB1ShshBgsgCiANaiAHOwEAIAJBAWohAgwBCwsgACAFNgIEIAAgBjYCACAJQQN2IAlBAXZqQQNqIQxBACEAQQAhBkEAIQIDQCAGIA5GBEADQAJAIAAgCUYNACAKIAsgAEEDdGoiASgCBCIGQQF0aiICIAIvAQAiAkEBajsBACABIAUgAhAUayIIOgADIAEgAiAIQf8BcXQgCWs7AQAgASAEIAZBAnQiAmooAgA6AAIgASACIANqKAIANgIEIABBAWohAAwBCwsFIAEgBkEBdGouAQAhDUEAIQcDQCAHIA1ORQRAIAsgAkEDdGogBjYCBANAIAIgDGogD3EiAiAISw0ACyAHQQFqIQcMAQsLIAZBAWohBgwBCwsgCkHwAGokAAsjAEIAIAEQCSAAhUKHla+vmLbem55/fkLj3MqV/M7y9YV/fAsQACAAQn43AwggACABNgIACyQBAX8gAARAIAEoAgQiAgRAIAEoAgggACACEQEADwsgABAmCwsfACAAIAEgAi8BABAINgIAIAEQBBogACACQQRqNgIEC0oBAX9BoCAoAgAiASAAaiIAQX9MBEBBiCBBMDYCAEF/DwsCQCAAPwBBEHRNDQAgABBmDQBBiCBBMDYCAEF/DwtBoCAgADYCACABC9cBAQh/Qbp/IQoCQCACKAIEIgggAigCACIJaiIOIAEgAGtLDQBBbCEKIAkgBCADKAIAIgtrSw0AIAAgCWoiBCACKAIIIgxrIQ0gACABQWBqIg8gCyAJQQAQKSADIAkgC2o2AgACQAJAIAwgBCAFa00EQCANIQUMAQsgDCAEIAZrSw0CIAcgDSAFayIAaiIBIAhqIAdNBEAgBCABIAgQDxoMAgsgBCABQQAgAGsQDyEBIAIgACAIaiIINgIEIAEgAGshBAsgBCAPIAUgCEEBECkLIA4hCgsgCgubAgEBfyMAQYABayINJAAgDSADNgJ8AkAgAkEDSwRAQX8hCQwBCwJAAkACQAJAIAJBAWsOAwADAgELIAZFBEBBuH8hCQwEC0FsIQkgBS0AACICIANLDQMgACAHIAJBAnQiAmooAgAgAiAIaigCABA7IAEgADYCAEEBIQkMAwsgASAJNgIAQQAhCQwCCyAKRQRAQWwhCQwCC0EAIQkgC0UgDEEZSHINAUEIIAR0QQhqIQBBACECA0AgAiAATw0CIAJBQGshAgwAAAsAC0FsIQkgDSANQfwAaiANQfgAaiAFIAYQFSICEAMNACANKAJ4IgMgBEsNACAAIA0gDSgCfCAHIAggAxAYIAEgADYCACACIQkLIA1BgAFqJAAgCQsLACAAIAEgAhALGgsQACAALwAAIAAtAAJBEHRyCy8AAn9BuH8gAUEISQ0AGkFyIAAoAAQiAEF3Sw0AGkG4fyAAQQhqIgAgACABSxsLCwkAIAAgATsAAAsDAAELigYBBX8gACAAKAIAIgVBfnE2AgBBACAAIAVBAXZqQYQgKAIAIgQgAEYbIQECQAJAIAAoAgQiAkUNACACKAIAIgNBAXENACACQQhqIgUgA0EBdkF4aiIDQQggA0EISxtnQR9zQQJ0QYAfaiIDKAIARgRAIAMgAigCDDYCAAsgAigCCCIDBEAgAyACKAIMNgIECyACKAIMIgMEQCADIAIoAgg2AgALIAIgAigCACAAKAIAQX5xajYCAEGEICEAAkACQCABRQ0AIAEgAjYCBCABKAIAIgNBAXENASADQQF2QXhqIgNBCCADQQhLG2dBH3NBAnRBgB9qIgMoAgAgAUEIakYEQCADIAEoAgw2AgALIAEoAggiAwRAIAMgASgCDDYCBAsgASgCDCIDBEAgAyABKAIINgIAQYQgKAIAIQQLIAIgAigCACABKAIAQX5xajYCACABIARGDQAgASABKAIAQQF2akEEaiEACyAAIAI2AgALIAIoAgBBAXZBeGoiAEEIIABBCEsbZ0Efc0ECdEGAH2oiASgCACEAIAEgBTYCACACIAA2AgwgAkEANgIIIABFDQEgACAFNgIADwsCQCABRQ0AIAEoAgAiAkEBcQ0AIAJBAXZBeGoiAkEIIAJBCEsbZ0Efc0ECdEGAH2oiAigCACABQQhqRgRAIAIgASgCDDYCAAsgASgCCCICBEAgAiABKAIMNgIECyABKAIMIgIEQCACIAEoAgg2AgBBhCAoAgAhBAsgACAAKAIAIAEoAgBBfnFqIgI2AgACQCABIARHBEAgASABKAIAQQF2aiAANgIEIAAoAgAhAgwBC0GEICAANgIACyACQQF2QXhqIgFBCCABQQhLG2dBH3NBAnRBgB9qIgIoAgAhASACIABBCGoiAjYCACAAIAE2AgwgAEEANgIIIAFFDQEgASACNgIADwsgBUEBdkF4aiIBQQggAUEISxtnQR9zQQJ0QYAfaiICKAIAIQEgAiAAQQhqIgI2AgAgACABNgIMIABBADYCCCABRQ0AIAEgAjYCAAsLDgAgAARAIABBeGoQJQsLgAIBA38CQCAAQQ9qQXhxQYQgKAIAKAIAQQF2ayICEB1Bf0YNAAJAQYQgKAIAIgAoAgAiAUEBcQ0AIAFBAXZBeGoiAUEIIAFBCEsbZ0Efc0ECdEGAH2oiASgCACAAQQhqRgRAIAEgACgCDDYCAAsgACgCCCIBBEAgASAAKAIMNgIECyAAKAIMIgFFDQAgASAAKAIINgIAC0EBIQEgACAAKAIAIAJBAXRqIgI2AgAgAkEBcQ0AIAJBAXZBeGoiAkEIIAJBCEsbZ0Efc0ECdEGAH2oiAygCACECIAMgAEEIaiIDNgIAIAAgAjYCDCAAQQA2AgggAkUNACACIAM2AgALIAELtwIBA38CQAJAIABBASAAGyICEDgiAA0AAkACQEGEICgCACIARQ0AIAAoAgAiA0EBcQ0AIAAgA0EBcjYCACADQQF2QXhqIgFBCCABQQhLG2dBH3NBAnRBgB9qIgEoAgAgAEEIakYEQCABIAAoAgw2AgALIAAoAggiAQRAIAEgACgCDDYCBAsgACgCDCIBBEAgASAAKAIINgIACyACECchAkEAIQFBhCAoAgAhACACDQEgACAAKAIAQX5xNgIAQQAPCyACQQ9qQXhxIgMQHSICQX9GDQIgAkEHakF4cSIAIAJHBEAgACACaxAdQX9GDQMLAkBBhCAoAgAiAUUEQEGAICAANgIADAELIAAgATYCBAtBhCAgADYCACAAIANBAXRBAXI2AgAMAQsgAEUNAQsgAEEIaiEBCyABC7kDAQJ/IAAgA2ohBQJAIANBB0wEQANAIAAgBU8NAiAAIAItAAA6AAAgAEEBaiEAIAJBAWohAgwAAAsACyAEQQFGBEACQCAAIAJrIgZBB00EQCAAIAItAAA6AAAgACACLQABOgABIAAgAi0AAjoAAiAAIAItAAM6AAMgAEEEaiACIAZBAnQiBkHAHmooAgBqIgIQFyACIAZB4B5qKAIAayECDAELIAAgAhAMCyACQQhqIQIgAEEIaiEACwJAAkACQAJAIAUgAU0EQCAAIANqIQEgBEEBRyAAIAJrQQ9Kcg0BA0AgACACEAwgAkEIaiECIABBCGoiACABSQ0ACwwFCyAAIAFLBEAgACEBDAQLIARBAUcgACACa0EPSnINASAAIQMgAiEEA0AgAyAEEAwgBEEIaiEEIANBCGoiAyABSQ0ACwwCCwNAIAAgAhAHIAJBEGohAiAAQRBqIgAgAUkNAAsMAwsgACEDIAIhBANAIAMgBBAHIARBEGohBCADQRBqIgMgAUkNAAsLIAIgASAAa2ohAgsDQCABIAVPDQEgASACLQAAOgAAIAFBAWohASACQQFqIQIMAAALAAsLQQECfyAAIAAoArjgASIDNgLE4AEgACgCvOABIQQgACABNgK84AEgACABIAJqNgK44AEgACABIAQgA2tqNgLA4AELpgEBAX8gACAAKALs4QEQFjYCyOABIABCADcD+OABIABCADcDuOABIABBwOABakIANwMAIABBqNAAaiIBQYyAgOAANgIAIABBADYCmOIBIABCADcDiOEBIABCAzcDgOEBIABBrNABakHgEikCADcCACAAQbTQAWpB6BIoAgA2AgAgACABNgIMIAAgAEGYIGo2AgggACAAQaAwajYCBCAAIABBEGo2AgALYQEBf0G4fyEDAkAgAUEDSQ0AIAIgABAhIgFBA3YiADYCCCACIAFBAXE2AgQgAiABQQF2QQNxIgM2AgACQCADQX9qIgFBAksNAAJAIAFBAWsOAgEAAgtBbA8LIAAhAwsgAwsMACAAIAEgAkEAEC4LiAQCA38CfiADEBYhBCAAQQBBKBAQIQAgBCACSwRAIAQPCyABRQRAQX8PCwJAAkAgA0EBRg0AIAEoAAAiBkGo6r5pRg0AQXYhAyAGQXBxQdDUtMIBRw0BQQghAyACQQhJDQEgAEEAQSgQECEAIAEoAAQhASAAQQE2AhQgACABrTcDAEEADwsgASACIAMQLyIDIAJLDQAgACADNgIYQXIhAyABIARqIgVBf2otAAAiAkEIcQ0AIAJBIHEiBkUEQEFwIQMgBS0AACIFQacBSw0BIAVBB3GtQgEgBUEDdkEKaq2GIgdCA4h+IAd8IQggBEEBaiEECyACQQZ2IQMgAkECdiEFAkAgAkEDcUF/aiICQQJLBEBBACECDAELAkACQAJAIAJBAWsOAgECAAsgASAEai0AACECIARBAWohBAwCCyABIARqLwAAIQIgBEECaiEEDAELIAEgBGooAAAhAiAEQQRqIQQLIAVBAXEhBQJ+AkACQAJAIANBf2oiA0ECTQRAIANBAWsOAgIDAQtCfyAGRQ0DGiABIARqMQAADAMLIAEgBGovAACtQoACfAwCCyABIARqKAAArQwBCyABIARqKQAACyEHIAAgBTYCICAAIAI2AhwgACAHNwMAQQAhAyAAQQA2AhQgACAHIAggBhsiBzcDCCAAIAdCgIAIIAdCgIAIVBs+AhALIAMLWwEBf0G4fyEDIAIQFiICIAFNBH8gACACakF/ai0AACIAQQNxQQJ0QaAeaigCACACaiAAQQZ2IgFBAnRBsB5qKAIAaiAAQSBxIgBFaiABRSAAQQV2cWoFQbh/CwsdACAAKAKQ4gEQWiAAQQA2AqDiASAAQgA3A5DiAQu1AwEFfyMAQZACayIKJABBuH8hBgJAIAVFDQAgBCwAACIIQf8BcSEHAkAgCEF/TARAIAdBgn9qQQF2IgggBU8NAkFsIQYgB0GBf2oiBUGAAk8NAiAEQQFqIQdBACEGA0AgBiAFTwRAIAUhBiAIIQcMAwUgACAGaiAHIAZBAXZqIgQtAABBBHY6AAAgACAGQQFyaiAELQAAQQ9xOgAAIAZBAmohBgwBCwAACwALIAcgBU8NASAAIARBAWogByAKEFMiBhADDQELIAYhBEEAIQYgAUEAQTQQECEJQQAhBQNAIAQgBkcEQCAAIAZqIggtAAAiAUELSwRAQWwhBgwDBSAJIAFBAnRqIgEgASgCAEEBajYCACAGQQFqIQZBASAILQAAdEEBdSAFaiEFDAILAAsLQWwhBiAFRQ0AIAUQFEEBaiIBQQxLDQAgAyABNgIAQQFBASABdCAFayIDEBQiAXQgA0cNACAAIARqIAFBAWoiADoAACAJIABBAnRqIgAgACgCAEEBajYCACAJKAIEIgBBAkkgAEEBcXINACACIARBAWo2AgAgB0EBaiEGCyAKQZACaiQAIAYLxhEBDH8jAEHwAGsiBSQAQWwhCwJAIANBCkkNACACLwAAIQogAi8AAiEJIAIvAAQhByAFQQhqIAQQDgJAIAMgByAJIApqakEGaiIMSQ0AIAUtAAohCCAFQdgAaiACQQZqIgIgChAGIgsQAw0BIAVBQGsgAiAKaiICIAkQBiILEAMNASAFQShqIAIgCWoiAiAHEAYiCxADDQEgBUEQaiACIAdqIAMgDGsQBiILEAMNASAAIAFqIg9BfWohECAEQQRqIQZBASELIAAgAUEDakECdiIDaiIMIANqIgIgA2oiDiEDIAIhBCAMIQcDQCALIAMgEElxBEAgACAGIAVB2ABqIAgQAkECdGoiCS8BADsAACAFQdgAaiAJLQACEAEgCS0AAyELIAcgBiAFQUBrIAgQAkECdGoiCS8BADsAACAFQUBrIAktAAIQASAJLQADIQogBCAGIAVBKGogCBACQQJ0aiIJLwEAOwAAIAVBKGogCS0AAhABIAktAAMhCSADIAYgBUEQaiAIEAJBAnRqIg0vAQA7AAAgBUEQaiANLQACEAEgDS0AAyENIAAgC2oiCyAGIAVB2ABqIAgQAkECdGoiAC8BADsAACAFQdgAaiAALQACEAEgAC0AAyEAIAcgCmoiCiAGIAVBQGsgCBACQQJ0aiIHLwEAOwAAIAVBQGsgBy0AAhABIActAAMhByAEIAlqIgkgBiAFQShqIAgQAkECdGoiBC8BADsAACAFQShqIAQtAAIQASAELQADIQQgAyANaiIDIAYgBUEQaiAIEAJBAnRqIg0vAQA7AAAgBUEQaiANLQACEAEgACALaiEAIAcgCmohByAEIAlqIQQgAyANLQADaiEDIAVB2ABqEA0gBUFAaxANciAFQShqEA1yIAVBEGoQDXJFIQsMAQsLIAQgDksgByACS3INAEFsIQsgACAMSw0BIAxBfWohCQNAQQAgACAJSSAFQdgAahAEGwRAIAAgBiAFQdgAaiAIEAJBAnRqIgovAQA7AAAgBUHYAGogCi0AAhABIAAgCi0AA2oiACAGIAVB2ABqIAgQAkECdGoiCi8BADsAACAFQdgAaiAKLQACEAEgACAKLQADaiEADAEFIAxBfmohCgNAIAVB2ABqEAQgACAKS3JFBEAgACAGIAVB2ABqIAgQAkECdGoiCS8BADsAACAFQdgAaiAJLQACEAEgACAJLQADaiEADAELCwNAIAAgCk0EQCAAIAYgBUHYAGogCBACQQJ0aiIJLwEAOwAAIAVB2ABqIAktAAIQASAAIAktAANqIQAMAQsLAkAgACAMTw0AIAAgBiAFQdgAaiAIEAIiAEECdGoiDC0AADoAACAMLQADQQFGBEAgBUHYAGogDC0AAhABDAELIAUoAlxBH0sNACAFQdgAaiAGIABBAnRqLQACEAEgBSgCXEEhSQ0AIAVBIDYCXAsgAkF9aiEMA0BBACAHIAxJIAVBQGsQBBsEQCAHIAYgBUFAayAIEAJBAnRqIgAvAQA7AAAgBUFAayAALQACEAEgByAALQADaiIAIAYgBUFAayAIEAJBAnRqIgcvAQA7AAAgBUFAayAHLQACEAEgACAHLQADaiEHDAEFIAJBfmohDANAIAVBQGsQBCAHIAxLckUEQCAHIAYgBUFAayAIEAJBAnRqIgAvAQA7AAAgBUFAayAALQACEAEgByAALQADaiEHDAELCwNAIAcgDE0EQCAHIAYgBUFAayAIEAJBAnRqIgAvAQA7AAAgBUFAayAALQACEAEgByAALQADaiEHDAELCwJAIAcgAk8NACAHIAYgBUFAayAIEAIiAEECdGoiAi0AADoAACACLQADQQFGBEAgBUFAayACLQACEAEMAQsgBSgCREEfSw0AIAVBQGsgBiAAQQJ0ai0AAhABIAUoAkRBIUkNACAFQSA2AkQLIA5BfWohAgNAQQAgBCACSSAFQShqEAQbBEAgBCAGIAVBKGogCBACQQJ0aiIALwEAOwAAIAVBKGogAC0AAhABIAQgAC0AA2oiACAGIAVBKGogCBACQQJ0aiIELwEAOwAAIAVBKGogBC0AAhABIAAgBC0AA2ohBAwBBSAOQX5qIQIDQCAFQShqEAQgBCACS3JFBEAgBCAGIAVBKGogCBACQQJ0aiIALwEAOwAAIAVBKGogAC0AAhABIAQgAC0AA2ohBAwBCwsDQCAEIAJNBEAgBCAGIAVBKGogCBACQQJ0aiIALwEAOwAAIAVBKGogAC0AAhABIAQgAC0AA2ohBAwBCwsCQCAEIA5PDQAgBCAGIAVBKGogCBACIgBBAnRqIgItAAA6AAAgAi0AA0EBRgRAIAVBKGogAi0AAhABDAELIAUoAixBH0sNACAFQShqIAYgAEECdGotAAIQASAFKAIsQSFJDQAgBUEgNgIsCwNAQQAgAyAQSSAFQRBqEAQbBEAgAyAGIAVBEGogCBACQQJ0aiIALwEAOwAAIAVBEGogAC0AAhABIAMgAC0AA2oiACAGIAVBEGogCBACQQJ0aiICLwEAOwAAIAVBEGogAi0AAhABIAAgAi0AA2ohAwwBBSAPQX5qIQIDQCAFQRBqEAQgAyACS3JFBEAgAyAGIAVBEGogCBACQQJ0aiIALwEAOwAAIAVBEGogAC0AAhABIAMgAC0AA2ohAwwBCwsDQCADIAJNBEAgAyAGIAVBEGogCBACQQJ0aiIALwEAOwAAIAVBEGogAC0AAhABIAMgAC0AA2ohAwwBCwsCQCADIA9PDQAgAyAGIAVBEGogCBACIgBBAnRqIgItAAA6AAAgAi0AA0EBRgRAIAVBEGogAi0AAhABDAELIAUoAhRBH0sNACAFQRBqIAYgAEECdGotAAIQASAFKAIUQSFJDQAgBUEgNgIUCyABQWwgBUHYAGoQCiAFQUBrEApxIAVBKGoQCnEgBUEQahAKcRshCwwJCwAACwALAAALAAsAAAsACwAACwALQWwhCwsgBUHwAGokACALC7UEAQ5/IwBBEGsiBiQAIAZBBGogABAOQVQhBQJAIARB3AtJDQAgBi0ABCEHIANB8ARqQQBB7AAQECEIIAdBDEsNACADQdwJaiIJIAggBkEIaiAGQQxqIAEgAhAxIhAQA0UEQCAGKAIMIgQgB0sNASADQdwFaiEPIANBpAVqIREgAEEEaiESIANBqAVqIQEgBCEFA0AgBSICQX9qIQUgCCACQQJ0aigCAEUNAAsgAkEBaiEOQQEhBQNAIAUgDk9FBEAgCCAFQQJ0IgtqKAIAIQwgASALaiAKNgIAIAVBAWohBSAKIAxqIQoMAQsLIAEgCjYCAEEAIQUgBigCCCELA0AgBSALRkUEQCABIAUgCWotAAAiDEECdGoiDSANKAIAIg1BAWo2AgAgDyANQQF0aiINIAw6AAEgDSAFOgAAIAVBAWohBQwBCwtBACEBIANBADYCqAUgBEF/cyAHaiEJQQEhBQNAIAUgDk9FBEAgCCAFQQJ0IgtqKAIAIQwgAyALaiABNgIAIAwgBSAJanQgAWohASAFQQFqIQUMAQsLIAcgBEEBaiIBIAJrIgRrQQFqIQgDQEEBIQUgBCAIT0UEQANAIAUgDk9FBEAgBUECdCIJIAMgBEE0bGpqIAMgCWooAgAgBHY2AgAgBUEBaiEFDAELCyAEQQFqIQQMAQsLIBIgByAPIAogESADIAIgARBkIAZBAToABSAGIAc6AAYgACAGKAIENgIACyAQIQULIAZBEGokACAFC8ENAQt/IwBB8ABrIgUkAEFsIQkCQCADQQpJDQAgAi8AACEKIAIvAAIhDCACLwAEIQYgBUEIaiAEEA4CQCADIAYgCiAMampBBmoiDUkNACAFLQAKIQcgBUHYAGogAkEGaiICIAoQBiIJEAMNASAFQUBrIAIgCmoiAiAMEAYiCRADDQEgBUEoaiACIAxqIgIgBhAGIgkQAw0BIAVBEGogAiAGaiADIA1rEAYiCRADDQEgACABaiIOQX1qIQ8gBEEEaiEGQQEhCSAAIAFBA2pBAnYiAmoiCiACaiIMIAJqIg0hAyAMIQQgCiECA0AgCSADIA9JcQRAIAYgBUHYAGogBxACQQF0aiIILQAAIQsgBUHYAGogCC0AARABIAAgCzoAACAGIAVBQGsgBxACQQF0aiIILQAAIQsgBUFAayAILQABEAEgAiALOgAAIAYgBUEoaiAHEAJBAXRqIggtAAAhCyAFQShqIAgtAAEQASAEIAs6AAAgBiAFQRBqIAcQAkEBdGoiCC0AACELIAVBEGogCC0AARABIAMgCzoAACAGIAVB2ABqIAcQAkEBdGoiCC0AACELIAVB2ABqIAgtAAEQASAAIAs6AAEgBiAFQUBrIAcQAkEBdGoiCC0AACELIAVBQGsgCC0AARABIAIgCzoAASAGIAVBKGogBxACQQF0aiIILQAAIQsgBUEoaiAILQABEAEgBCALOgABIAYgBUEQaiAHEAJBAXRqIggtAAAhCyAFQRBqIAgtAAEQASADIAs6AAEgA0ECaiEDIARBAmohBCACQQJqIQIgAEECaiEAIAkgBUHYAGoQDUVxIAVBQGsQDUVxIAVBKGoQDUVxIAVBEGoQDUVxIQkMAQsLIAQgDUsgAiAMS3INAEFsIQkgACAKSw0BIApBfWohCQNAIAVB2ABqEAQgACAJT3JFBEAgBiAFQdgAaiAHEAJBAXRqIggtAAAhCyAFQdgAaiAILQABEAEgACALOgAAIAYgBUHYAGogBxACQQF0aiIILQAAIQsgBUHYAGogCC0AARABIAAgCzoAASAAQQJqIQAMAQsLA0AgBUHYAGoQBCAAIApPckUEQCAGIAVB2ABqIAcQAkEBdGoiCS0AACEIIAVB2ABqIAktAAEQASAAIAg6AAAgAEEBaiEADAELCwNAIAAgCkkEQCAGIAVB2ABqIAcQAkEBdGoiCS0AACEIIAVB2ABqIAktAAEQASAAIAg6AAAgAEEBaiEADAELCyAMQX1qIQADQCAFQUBrEAQgAiAAT3JFBEAgBiAFQUBrIAcQAkEBdGoiCi0AACEJIAVBQGsgCi0AARABIAIgCToAACAGIAVBQGsgBxACQQF0aiIKLQAAIQkgBUFAayAKLQABEAEgAiAJOgABIAJBAmohAgwBCwsDQCAFQUBrEAQgAiAMT3JFBEAgBiAFQUBrIAcQAkEBdGoiAC0AACEKIAVBQGsgAC0AARABIAIgCjoAACACQQFqIQIMAQsLA0AgAiAMSQRAIAYgBUFAayAHEAJBAXRqIgAtAAAhCiAFQUBrIAAtAAEQASACIAo6AAAgAkEBaiECDAELCyANQX1qIQADQCAFQShqEAQgBCAAT3JFBEAgBiAFQShqIAcQAkEBdGoiAi0AACEKIAVBKGogAi0AARABIAQgCjoAACAGIAVBKGogBxACQQF0aiICLQAAIQogBUEoaiACLQABEAEgBCAKOgABIARBAmohBAwBCwsDQCAFQShqEAQgBCANT3JFBEAgBiAFQShqIAcQAkEBdGoiAC0AACECIAVBKGogAC0AARABIAQgAjoAACAEQQFqIQQMAQsLA0AgBCANSQRAIAYgBUEoaiAHEAJBAXRqIgAtAAAhAiAFQShqIAAtAAEQASAEIAI6AAAgBEEBaiEEDAELCwNAIAVBEGoQBCADIA9PckUEQCAGIAVBEGogBxACQQF0aiIALQAAIQIgBUEQaiAALQABEAEgAyACOgAAIAYgBUEQaiAHEAJBAXRqIgAtAAAhAiAFQRBqIAAtAAEQASADIAI6AAEgA0ECaiEDDAELCwNAIAVBEGoQBCADIA5PckUEQCAGIAVBEGogBxACQQF0aiIALQAAIQIgBUEQaiAALQABEAEgAyACOgAAIANBAWohAwwBCwsDQCADIA5JBEAgBiAFQRBqIAcQAkEBdGoiAC0AACECIAVBEGogAC0AARABIAMgAjoAACADQQFqIQMMAQsLIAFBbCAFQdgAahAKIAVBQGsQCnEgBUEoahAKcSAFQRBqEApxGyEJDAELQWwhCQsgBUHwAGokACAJC8oCAQR/IwBBIGsiBSQAIAUgBBAOIAUtAAIhByAFQQhqIAIgAxAGIgIQA0UEQCAEQQRqIQIgACABaiIDQX1qIQQDQCAFQQhqEAQgACAET3JFBEAgAiAFQQhqIAcQAkEBdGoiBi0AACEIIAVBCGogBi0AARABIAAgCDoAACACIAVBCGogBxACQQF0aiIGLQAAIQggBUEIaiAGLQABEAEgACAIOgABIABBAmohAAwBCwsDQCAFQQhqEAQgACADT3JFBEAgAiAFQQhqIAcQAkEBdGoiBC0AACEGIAVBCGogBC0AARABIAAgBjoAACAAQQFqIQAMAQsLA0AgACADT0UEQCACIAVBCGogBxACQQF0aiIELQAAIQYgBUEIaiAELQABEAEgACAGOgAAIABBAWohAAwBCwsgAUFsIAVBCGoQChshAgsgBUEgaiQAIAILtgMBCX8jAEEQayIGJAAgBkEANgIMIAZBADYCCEFUIQQCQAJAIANBQGsiDCADIAZBCGogBkEMaiABIAIQMSICEAMNACAGQQRqIAAQDiAGKAIMIgcgBi0ABEEBaksNASAAQQRqIQogBkEAOgAFIAYgBzoABiAAIAYoAgQ2AgAgB0EBaiEJQQEhBANAIAQgCUkEQCADIARBAnRqIgEoAgAhACABIAU2AgAgACAEQX9qdCAFaiEFIARBAWohBAwBCwsgB0EBaiEHQQAhBSAGKAIIIQkDQCAFIAlGDQEgAyAFIAxqLQAAIgRBAnRqIgBBASAEdEEBdSILIAAoAgAiAWoiADYCACAHIARrIQhBACEEAkAgC0EDTQRAA0AgBCALRg0CIAogASAEakEBdGoiACAIOgABIAAgBToAACAEQQFqIQQMAAALAAsDQCABIABPDQEgCiABQQF0aiIEIAg6AAEgBCAFOgAAIAQgCDoAAyAEIAU6AAIgBCAIOgAFIAQgBToABCAEIAg6AAcgBCAFOgAGIAFBBGohAQwAAAsACyAFQQFqIQUMAAALAAsgAiEECyAGQRBqJAAgBAutAQECfwJAQYQgKAIAIABHIAAoAgBBAXYiAyABa0F4aiICQXhxQQhHcgR/IAIFIAMQJ0UNASACQQhqC0EQSQ0AIAAgACgCACICQQFxIAAgAWpBD2pBeHEiASAAa0EBdHI2AgAgASAANgIEIAEgASgCAEEBcSAAIAJBAXZqIAFrIgJBAXRyNgIAQYQgIAEgAkH/////B3FqQQRqQYQgKAIAIABGGyABNgIAIAEQJQsLygIBBX8CQAJAAkAgAEEIIABBCEsbZ0EfcyAAaUEBR2oiAUEESSAAIAF2cg0AIAFBAnRB/B5qKAIAIgJFDQADQCACQXhqIgMoAgBBAXZBeGoiBSAATwRAIAIgBUEIIAVBCEsbZ0Efc0ECdEGAH2oiASgCAEYEQCABIAIoAgQ2AgALDAMLIARBHksNASAEQQFqIQQgAigCBCICDQALC0EAIQMgAUEgTw0BA0AgAUECdEGAH2ooAgAiAkUEQCABQR5LIQIgAUEBaiEBIAJFDQEMAwsLIAIgAkF4aiIDKAIAQQF2QXhqIgFBCCABQQhLG2dBH3NBAnRBgB9qIgEoAgBGBEAgASACKAIENgIACwsgAigCACIBBEAgASACKAIENgIECyACKAIEIgEEQCABIAIoAgA2AgALIAMgAygCAEEBcjYCACADIAAQNwsgAwvhCwINfwV+IwBB8ABrIgckACAHIAAoAvDhASIINgJcIAEgAmohDSAIIAAoAoDiAWohDwJAAkAgBUUEQCABIQQMAQsgACgCxOABIRAgACgCwOABIREgACgCvOABIQ4gAEEBNgKM4QFBACEIA0AgCEEDRwRAIAcgCEECdCICaiAAIAJqQazQAWooAgA2AkQgCEEBaiEIDAELC0FsIQwgB0EYaiADIAQQBhADDQEgB0EsaiAHQRhqIAAoAgAQEyAHQTRqIAdBGGogACgCCBATIAdBPGogB0EYaiAAKAIEEBMgDUFgaiESIAEhBEEAIQwDQCAHKAIwIAcoAixBA3RqKQIAIhRCEIinQf8BcSEIIAcoAkAgBygCPEEDdGopAgAiFUIQiKdB/wFxIQsgBygCOCAHKAI0QQN0aikCACIWQiCIpyEJIBVCIIghFyAUQiCIpyECAkAgFkIQiKdB/wFxIgNBAk8EQAJAIAZFIANBGUlyRQRAIAkgB0EYaiADQSAgBygCHGsiCiAKIANLGyIKEAUgAyAKayIDdGohCSAHQRhqEAQaIANFDQEgB0EYaiADEAUgCWohCQwBCyAHQRhqIAMQBSAJaiEJIAdBGGoQBBoLIAcpAkQhGCAHIAk2AkQgByAYNwNIDAELAkAgA0UEQCACBEAgBygCRCEJDAMLIAcoAkghCQwBCwJAAkAgB0EYakEBEAUgCSACRWpqIgNBA0YEQCAHKAJEQX9qIgMgA0VqIQkMAQsgA0ECdCAHaigCRCIJIAlFaiEJIANBAUYNAQsgByAHKAJINgJMCwsgByAHKAJENgJIIAcgCTYCRAsgF6chAyALBEAgB0EYaiALEAUgA2ohAwsgCCALakEUTwRAIAdBGGoQBBoLIAgEQCAHQRhqIAgQBSACaiECCyAHQRhqEAQaIAcgB0EYaiAUQhiIp0H/AXEQCCAUp0H//wNxajYCLCAHIAdBGGogFUIYiKdB/wFxEAggFadB//8DcWo2AjwgB0EYahAEGiAHIAdBGGogFkIYiKdB/wFxEAggFqdB//8DcWo2AjQgByACNgJgIAcoAlwhCiAHIAk2AmggByADNgJkAkACQAJAIAQgAiADaiILaiASSw0AIAIgCmoiEyAPSw0AIA0gBGsgC0Egak8NAQsgByAHKQNoNwMQIAcgBykDYDcDCCAEIA0gB0EIaiAHQdwAaiAPIA4gESAQEB4hCwwBCyACIARqIQggBCAKEAcgAkERTwRAIARBEGohAgNAIAIgCkEQaiIKEAcgAkEQaiICIAhJDQALCyAIIAlrIQIgByATNgJcIAkgCCAOa0sEQCAJIAggEWtLBEBBbCELDAILIBAgAiAOayICaiIKIANqIBBNBEAgCCAKIAMQDxoMAgsgCCAKQQAgAmsQDyEIIAcgAiADaiIDNgJkIAggAmshCCAOIQILIAlBEE8EQCADIAhqIQMDQCAIIAIQByACQRBqIQIgCEEQaiIIIANJDQALDAELAkAgCUEHTQRAIAggAi0AADoAACAIIAItAAE6AAEgCCACLQACOgACIAggAi0AAzoAAyAIQQRqIAIgCUECdCIDQcAeaigCAGoiAhAXIAIgA0HgHmooAgBrIQIgBygCZCEDDAELIAggAhAMCyADQQlJDQAgAyAIaiEDIAhBCGoiCCACQQhqIgJrQQ9MBEADQCAIIAIQDCACQQhqIQIgCEEIaiIIIANJDQAMAgALAAsDQCAIIAIQByACQRBqIQIgCEEQaiIIIANJDQALCyAHQRhqEAQaIAsgDCALEAMiAhshDCAEIAQgC2ogAhshBCAFQX9qIgUNAAsgDBADDQFBbCEMIAdBGGoQBEECSQ0BQQAhCANAIAhBA0cEQCAAIAhBAnQiAmpBrNABaiACIAdqKAJENgIAIAhBAWohCAwBCwsgBygCXCEIC0G6fyEMIA8gCGsiACANIARrSw0AIAQEfyAEIAggABALIABqBUEACyABayEMCyAHQfAAaiQAIAwLkRcCFn8FfiMAQdABayIHJAAgByAAKALw4QEiCDYCvAEgASACaiESIAggACgCgOIBaiETAkACQCAFRQRAIAEhAwwBCyAAKALE4AEhESAAKALA4AEhFSAAKAK84AEhDyAAQQE2AozhAUEAIQgDQCAIQQNHBEAgByAIQQJ0IgJqIAAgAmpBrNABaigCADYCVCAIQQFqIQgMAQsLIAcgETYCZCAHIA82AmAgByABIA9rNgJoQWwhECAHQShqIAMgBBAGEAMNASAFQQQgBUEESBshFyAHQTxqIAdBKGogACgCABATIAdBxABqIAdBKGogACgCCBATIAdBzABqIAdBKGogACgCBBATQQAhBCAHQeAAaiEMIAdB5ABqIQoDQCAHQShqEARBAksgBCAXTnJFBEAgBygCQCAHKAI8QQN0aikCACIdQhCIp0H/AXEhCyAHKAJQIAcoAkxBA3RqKQIAIh5CEIinQf8BcSEJIAcoAkggBygCREEDdGopAgAiH0IgiKchCCAeQiCIISAgHUIgiKchAgJAIB9CEIinQf8BcSIDQQJPBEACQCAGRSADQRlJckUEQCAIIAdBKGogA0EgIAcoAixrIg0gDSADSxsiDRAFIAMgDWsiA3RqIQggB0EoahAEGiADRQ0BIAdBKGogAxAFIAhqIQgMAQsgB0EoaiADEAUgCGohCCAHQShqEAQaCyAHKQJUISEgByAINgJUIAcgITcDWAwBCwJAIANFBEAgAgRAIAcoAlQhCAwDCyAHKAJYIQgMAQsCQAJAIAdBKGpBARAFIAggAkVqaiIDQQNGBEAgBygCVEF/aiIDIANFaiEIDAELIANBAnQgB2ooAlQiCCAIRWohCCADQQFGDQELIAcgBygCWDYCXAsLIAcgBygCVDYCWCAHIAg2AlQLICCnIQMgCQRAIAdBKGogCRAFIANqIQMLIAkgC2pBFE8EQCAHQShqEAQaCyALBEAgB0EoaiALEAUgAmohAgsgB0EoahAEGiAHIAcoAmggAmoiCSADajYCaCAKIAwgCCAJSxsoAgAhDSAHIAdBKGogHUIYiKdB/wFxEAggHadB//8DcWo2AjwgByAHQShqIB5CGIinQf8BcRAIIB6nQf//A3FqNgJMIAdBKGoQBBogB0EoaiAfQhiIp0H/AXEQCCEOIAdB8ABqIARBBHRqIgsgCSANaiAIazYCDCALIAg2AgggCyADNgIEIAsgAjYCACAHIA4gH6dB//8DcWo2AkQgBEEBaiEEDAELCyAEIBdIDQEgEkFgaiEYIAdB4ABqIRogB0HkAGohGyABIQMDQCAHQShqEARBAksgBCAFTnJFBEAgBygCQCAHKAI8QQN0aikCACIdQhCIp0H/AXEhCyAHKAJQIAcoAkxBA3RqKQIAIh5CEIinQf8BcSEIIAcoAkggBygCREEDdGopAgAiH0IgiKchCSAeQiCIISAgHUIgiKchDAJAIB9CEIinQf8BcSICQQJPBEACQCAGRSACQRlJckUEQCAJIAdBKGogAkEgIAcoAixrIgogCiACSxsiChAFIAIgCmsiAnRqIQkgB0EoahAEGiACRQ0BIAdBKGogAhAFIAlqIQkMAQsgB0EoaiACEAUgCWohCSAHQShqEAQaCyAHKQJUISEgByAJNgJUIAcgITcDWAwBCwJAIAJFBEAgDARAIAcoAlQhCQwDCyAHKAJYIQkMAQsCQAJAIAdBKGpBARAFIAkgDEVqaiICQQNGBEAgBygCVEF/aiICIAJFaiEJDAELIAJBAnQgB2ooAlQiCSAJRWohCSACQQFGDQELIAcgBygCWDYCXAsLIAcgBygCVDYCWCAHIAk2AlQLICCnIRQgCARAIAdBKGogCBAFIBRqIRQLIAggC2pBFE8EQCAHQShqEAQaCyALBEAgB0EoaiALEAUgDGohDAsgB0EoahAEGiAHIAcoAmggDGoiGSAUajYCaCAbIBogCSAZSxsoAgAhHCAHIAdBKGogHUIYiKdB/wFxEAggHadB//8DcWo2AjwgByAHQShqIB5CGIinQf8BcRAIIB6nQf//A3FqNgJMIAdBKGoQBBogByAHQShqIB9CGIinQf8BcRAIIB+nQf//A3FqNgJEIAcgB0HwAGogBEEDcUEEdGoiDSkDCCIdNwPIASAHIA0pAwAiHjcDwAECQAJAAkAgBygCvAEiDiAepyICaiIWIBNLDQAgAyAHKALEASIKIAJqIgtqIBhLDQAgEiADayALQSBqTw0BCyAHIAcpA8gBNwMQIAcgBykDwAE3AwggAyASIAdBCGogB0G8AWogEyAPIBUgERAeIQsMAQsgAiADaiEIIAMgDhAHIAJBEU8EQCADQRBqIQIDQCACIA5BEGoiDhAHIAJBEGoiAiAISQ0ACwsgCCAdpyIOayECIAcgFjYCvAEgDiAIIA9rSwRAIA4gCCAVa0sEQEFsIQsMAgsgESACIA9rIgJqIhYgCmogEU0EQCAIIBYgChAPGgwCCyAIIBZBACACaxAPIQggByACIApqIgo2AsQBIAggAmshCCAPIQILIA5BEE8EQCAIIApqIQoDQCAIIAIQByACQRBqIQIgCEEQaiIIIApJDQALDAELAkAgDkEHTQRAIAggAi0AADoAACAIIAItAAE6AAEgCCACLQACOgACIAggAi0AAzoAAyAIQQRqIAIgDkECdCIKQcAeaigCAGoiAhAXIAIgCkHgHmooAgBrIQIgBygCxAEhCgwBCyAIIAIQDAsgCkEJSQ0AIAggCmohCiAIQQhqIgggAkEIaiICa0EPTARAA0AgCCACEAwgAkEIaiECIAhBCGoiCCAKSQ0ADAIACwALA0AgCCACEAcgAkEQaiECIAhBEGoiCCAKSQ0ACwsgCxADBEAgCyEQDAQFIA0gDDYCACANIBkgHGogCWs2AgwgDSAJNgIIIA0gFDYCBCAEQQFqIQQgAyALaiEDDAILAAsLIAQgBUgNASAEIBdrIQtBACEEA0AgCyAFSARAIAcgB0HwAGogC0EDcUEEdGoiAikDCCIdNwPIASAHIAIpAwAiHjcDwAECQAJAAkAgBygCvAEiDCAepyICaiIKIBNLDQAgAyAHKALEASIJIAJqIhBqIBhLDQAgEiADayAQQSBqTw0BCyAHIAcpA8gBNwMgIAcgBykDwAE3AxggAyASIAdBGGogB0G8AWogEyAPIBUgERAeIRAMAQsgAiADaiEIIAMgDBAHIAJBEU8EQCADQRBqIQIDQCACIAxBEGoiDBAHIAJBEGoiAiAISQ0ACwsgCCAdpyIGayECIAcgCjYCvAEgBiAIIA9rSwRAIAYgCCAVa0sEQEFsIRAMAgsgESACIA9rIgJqIgwgCWogEU0EQCAIIAwgCRAPGgwCCyAIIAxBACACaxAPIQggByACIAlqIgk2AsQBIAggAmshCCAPIQILIAZBEE8EQCAIIAlqIQYDQCAIIAIQByACQRBqIQIgCEEQaiIIIAZJDQALDAELAkAgBkEHTQRAIAggAi0AADoAACAIIAItAAE6AAEgCCACLQACOgACIAggAi0AAzoAAyAIQQRqIAIgBkECdCIGQcAeaigCAGoiAhAXIAIgBkHgHmooAgBrIQIgBygCxAEhCQwBCyAIIAIQDAsgCUEJSQ0AIAggCWohBiAIQQhqIgggAkEIaiICa0EPTARAA0AgCCACEAwgAkEIaiECIAhBCGoiCCAGSQ0ADAIACwALA0AgCCACEAcgAkEQaiECIAhBEGoiCCAGSQ0ACwsgEBADDQMgC0EBaiELIAMgEGohAwwBCwsDQCAEQQNHBEAgACAEQQJ0IgJqQazQAWogAiAHaigCVDYCACAEQQFqIQQMAQsLIAcoArwBIQgLQbp/IRAgEyAIayIAIBIgA2tLDQAgAwR/IAMgCCAAEAsgAGoFQQALIAFrIRALIAdB0AFqJAAgEAslACAAQgA3AgAgAEEAOwEIIABBADoACyAAIAE2AgwgACACOgAKC7QFAQN/IwBBMGsiBCQAIABB/wFqIgVBfWohBgJAIAMvAQIEQCAEQRhqIAEgAhAGIgIQAw0BIARBEGogBEEYaiADEBwgBEEIaiAEQRhqIAMQHCAAIQMDQAJAIARBGGoQBCADIAZPckUEQCADIARBEGogBEEYahASOgAAIAMgBEEIaiAEQRhqEBI6AAEgBEEYahAERQ0BIANBAmohAwsgBUF+aiEFAn8DQEG6fyECIAMiASAFSw0FIAEgBEEQaiAEQRhqEBI6AAAgAUEBaiEDIARBGGoQBEEDRgRAQQIhAiAEQQhqDAILIAMgBUsNBSABIARBCGogBEEYahASOgABIAFBAmohA0EDIQIgBEEYahAEQQNHDQALIARBEGoLIQUgAyAFIARBGGoQEjoAACABIAJqIABrIQIMAwsgAyAEQRBqIARBGGoQEjoAAiADIARBCGogBEEYahASOgADIANBBGohAwwAAAsACyAEQRhqIAEgAhAGIgIQAw0AIARBEGogBEEYaiADEBwgBEEIaiAEQRhqIAMQHCAAIQMDQAJAIARBGGoQBCADIAZPckUEQCADIARBEGogBEEYahAROgAAIAMgBEEIaiAEQRhqEBE6AAEgBEEYahAERQ0BIANBAmohAwsgBUF+aiEFAn8DQEG6fyECIAMiASAFSw0EIAEgBEEQaiAEQRhqEBE6AAAgAUEBaiEDIARBGGoQBEEDRgRAQQIhAiAEQQhqDAILIAMgBUsNBCABIARBCGogBEEYahAROgABIAFBAmohA0EDIQIgBEEYahAEQQNHDQALIARBEGoLIQUgAyAFIARBGGoQEToAACABIAJqIABrIQIMAgsgAyAEQRBqIARBGGoQEToAAiADIARBCGogBEEYahAROgADIANBBGohAwwAAAsACyAEQTBqJAAgAgtpAQF/An8CQAJAIAJBB00NACABKAAAQbfIwuF+Rw0AIAAgASgABDYCmOIBQWIgAEEQaiABIAIQPiIDEAMNAhogAEKBgICAEDcDiOEBIAAgASADaiACIANrECoMAQsgACABIAIQKgtBAAsLrQMBBn8jAEGAAWsiAyQAQWIhCAJAIAJBCUkNACAAQZjQAGogAUEIaiIEIAJBeGogAEGY0AAQMyIFEAMiBg0AIANBHzYCfCADIANB/ABqIANB+ABqIAQgBCAFaiAGGyIEIAEgAmoiAiAEaxAVIgUQAw0AIAMoAnwiBkEfSw0AIAMoAngiB0EJTw0AIABBiCBqIAMgBkGAC0GADCAHEBggA0E0NgJ8IAMgA0H8AGogA0H4AGogBCAFaiIEIAIgBGsQFSIFEAMNACADKAJ8IgZBNEsNACADKAJ4IgdBCk8NACAAQZAwaiADIAZBgA1B4A4gBxAYIANBIzYCfCADIANB/ABqIANB+ABqIAQgBWoiBCACIARrEBUiBRADDQAgAygCfCIGQSNLDQAgAygCeCIHQQpPDQAgACADIAZBwBBB0BEgBxAYIAQgBWoiBEEMaiIFIAJLDQAgAiAFayEFQQAhAgNAIAJBA0cEQCAEKAAAIgZBf2ogBU8NAiAAIAJBAnRqQZzQAWogBjYCACACQQFqIQIgBEEEaiEEDAELCyAEIAFrIQgLIANBgAFqJAAgCAtGAQN/IABBCGohAyAAKAIEIQJBACEAA0AgACACdkUEQCABIAMgAEEDdGotAAJBFktqIQEgAEEBaiEADAELCyABQQggAmt0C4YDAQV/Qbh/IQcCQCADRQ0AIAItAAAiBEUEQCABQQA2AgBBAUG4fyADQQFGGw8LAn8gAkEBaiIFIARBGHRBGHUiBkF/Sg0AGiAGQX9GBEAgA0EDSA0CIAUvAABBgP4BaiEEIAJBA2oMAQsgA0ECSA0BIAItAAEgBEEIdHJBgIB+aiEEIAJBAmoLIQUgASAENgIAIAVBAWoiASACIANqIgNLDQBBbCEHIABBEGogACAFLQAAIgVBBnZBI0EJIAEgAyABa0HAEEHQEUHwEiAAKAKM4QEgACgCnOIBIAQQHyIGEAMiCA0AIABBmCBqIABBCGogBUEEdkEDcUEfQQggASABIAZqIAgbIgEgAyABa0GAC0GADEGAFyAAKAKM4QEgACgCnOIBIAQQHyIGEAMiCA0AIABBoDBqIABBBGogBUECdkEDcUE0QQkgASABIAZqIAgbIgEgAyABa0GADUHgDkGQGSAAKAKM4QEgACgCnOIBIAQQHyIAEAMNACAAIAFqIAJrIQcLIAcLrQMBCn8jAEGABGsiCCQAAn9BUiACQf8BSw0AGkFUIANBDEsNABogAkEBaiELIABBBGohCUGAgAQgA0F/anRBEHUhCkEAIQJBASEEQQEgA3QiB0F/aiIMIQUDQCACIAtGRQRAAkAgASACQQF0Ig1qLwEAIgZB//8DRgRAIAkgBUECdGogAjoAAiAFQX9qIQVBASEGDAELIARBACAKIAZBEHRBEHVKGyEECyAIIA1qIAY7AQAgAkEBaiECDAELCyAAIAQ7AQIgACADOwEAIAdBA3YgB0EBdmpBA2ohBkEAIQRBACECA0AgBCALRkUEQCABIARBAXRqLgEAIQpBACEAA0AgACAKTkUEQCAJIAJBAnRqIAQ6AAIDQCACIAZqIAxxIgIgBUsNAAsgAEEBaiEADAELCyAEQQFqIQQMAQsLQX8gAg0AGkEAIQIDfyACIAdGBH9BAAUgCCAJIAJBAnRqIgAtAAJBAXRqIgEgAS8BACIBQQFqOwEAIAAgAyABEBRrIgU6AAMgACABIAVB/wFxdCAHazsBACACQQFqIQIMAQsLCyEFIAhBgARqJAAgBQvjBgEIf0FsIQcCQCACQQNJDQACQAJAAkACQCABLQAAIgNBA3EiCUEBaw4DAwEAAgsgACgCiOEBDQBBYg8LIAJBBUkNAkEDIQYgASgAACEFAn8CQAJAIANBAnZBA3EiCEF+aiIEQQFNBEAgBEEBaw0BDAILIAVBDnZB/wdxIQQgBUEEdkH/B3EhAyAIRQwCCyAFQRJ2IQRBBCEGIAVBBHZB//8AcSEDQQAMAQsgBUEEdkH//w9xIgNBgIAISw0DIAEtAARBCnQgBUEWdnIhBEEFIQZBAAshBSAEIAZqIgogAksNAgJAIANBgQZJDQAgACgCnOIBRQ0AQQAhAgNAIAJBg4ABSw0BIAJBQGshAgwAAAsACwJ/IAlBA0YEQCABIAZqIQEgAEHw4gFqIQIgACgCDCEGIAUEQCACIAMgASAEIAYQXwwCCyACIAMgASAEIAYQXQwBCyAAQbjQAWohAiABIAZqIQEgAEHw4gFqIQYgAEGo0ABqIQggBQRAIAggBiADIAEgBCACEF4MAQsgCCAGIAMgASAEIAIQXAsQAw0CIAAgAzYCgOIBIABBATYCiOEBIAAgAEHw4gFqNgLw4QEgCUECRgRAIAAgAEGo0ABqNgIMCyAAIANqIgBBiOMBakIANwAAIABBgOMBakIANwAAIABB+OIBakIANwAAIABB8OIBakIANwAAIAoPCwJ/AkACQAJAIANBAnZBA3FBf2oiBEECSw0AIARBAWsOAgACAQtBASEEIANBA3YMAgtBAiEEIAEvAABBBHYMAQtBAyEEIAEQIUEEdgsiAyAEaiIFQSBqIAJLBEAgBSACSw0CIABB8OIBaiABIARqIAMQCyEBIAAgAzYCgOIBIAAgATYC8OEBIAEgA2oiAEIANwAYIABCADcAECAAQgA3AAggAEIANwAAIAUPCyAAIAM2AoDiASAAIAEgBGo2AvDhASAFDwsCfwJAAkACQCADQQJ2QQNxQX9qIgRBAksNACAEQQFrDgIAAgELQQEhByADQQN2DAILQQIhByABLwAAQQR2DAELIAJBBEkgARAhIgJBj4CAAUtyDQFBAyEHIAJBBHYLIQIgAEHw4gFqIAEgB2otAAAgAkEgahAQIQEgACACNgKA4gEgACABNgLw4QEgB0EBaiEHCyAHC0sAIABC+erQ0OfJoeThADcDICAAQgA3AxggAELP1tO+0ser2UI3AxAgAELW64Lu6v2J9eAANwMIIABCADcDACAAQShqQQBBKBAQGgviAgICfwV+IABBKGoiASAAKAJIaiECAn4gACkDACIDQiBaBEAgACkDECIEQgeJIAApAwgiBUIBiXwgACkDGCIGQgyJfCAAKQMgIgdCEol8IAUQGSAEEBkgBhAZIAcQGQwBCyAAKQMYQsXP2bLx5brqJ3wLIAN8IQMDQCABQQhqIgAgAk0EQEIAIAEpAAAQCSADhUIbiUKHla+vmLbem55/fkLj3MqV/M7y9YV/fCEDIAAhAQwBCwsCQCABQQRqIgAgAksEQCABIQAMAQsgASgAAK1Ch5Wvr5i23puef34gA4VCF4lCz9bTvtLHq9lCfkL5893xmfaZqxZ8IQMLA0AgACACSQRAIAAxAABCxc/ZsvHluuonfiADhUILiUKHla+vmLbem55/fiEDIABBAWohAAwBCwsgA0IhiCADhULP1tO+0ser2UJ+IgNCHYggA4VC+fPd8Zn2masWfiIDQiCIIAOFC+8CAgJ/BH4gACAAKQMAIAKtfDcDAAJAAkAgACgCSCIDIAJqIgRBH00EQCABRQ0BIAAgA2pBKGogASACECAgACgCSCACaiEEDAELIAEgAmohAgJ/IAMEQCAAQShqIgQgA2ogAUEgIANrECAgACAAKQMIIAQpAAAQCTcDCCAAIAApAxAgACkAMBAJNwMQIAAgACkDGCAAKQA4EAk3AxggACAAKQMgIABBQGspAAAQCTcDICAAKAJIIQMgAEEANgJIIAEgA2tBIGohAQsgAUEgaiACTQsEQCACQWBqIQMgACkDICEFIAApAxghBiAAKQMQIQcgACkDCCEIA0AgCCABKQAAEAkhCCAHIAEpAAgQCSEHIAYgASkAEBAJIQYgBSABKQAYEAkhBSABQSBqIgEgA00NAAsgACAFNwMgIAAgBjcDGCAAIAc3AxAgACAINwMICyABIAJPDQEgAEEoaiABIAIgAWsiBBAgCyAAIAQ2AkgLCy8BAX8gAEUEQEG2f0EAIAMbDwtBun8hBCADIAFNBH8gACACIAMQEBogAwVBun8LCy8BAX8gAEUEQEG2f0EAIAMbDwtBun8hBCADIAFNBH8gACACIAMQCxogAwVBun8LC6gCAQZ/IwBBEGsiByQAIABB2OABaikDAEKAgIAQViEIQbh/IQUCQCAEQf//B0sNACAAIAMgBBBCIgUQAyIGDQAgACgCnOIBIQkgACAHQQxqIAMgAyAFaiAGGyIKIARBACAFIAYbayIGEEAiAxADBEAgAyEFDAELIAcoAgwhBCABRQRAQbp/IQUgBEEASg0BCyAGIANrIQUgAyAKaiEDAkAgCQRAIABBADYCnOIBDAELAkACQAJAIARBBUgNACAAQdjgAWopAwBCgICACFgNAAwBCyAAQQA2ApziAQwBCyAAKAIIED8hBiAAQQA2ApziASAGQRRPDQELIAAgASACIAMgBSAEIAgQOSEFDAELIAAgASACIAMgBSAEIAgQOiEFCyAHQRBqJAAgBQtnACAAQdDgAWogASACIAAoAuzhARAuIgEQAwRAIAEPC0G4fyECAkAgAQ0AIABB7OABaigCACIBBEBBYCECIAAoApjiASABRw0BC0EAIQIgAEHw4AFqKAIARQ0AIABBkOEBahBDCyACCycBAX8QVyIERQRAQUAPCyAEIAAgASACIAMgBBBLEE8hACAEEFYgAAs/AQF/AkACQAJAIAAoAqDiAUEBaiIBQQJLDQAgAUEBaw4CAAECCyAAEDBBAA8LIABBADYCoOIBCyAAKAKU4gELvAMCB38BfiMAQRBrIgkkAEG4fyEGAkAgBCgCACIIQQVBCSAAKALs4QEiBRtJDQAgAygCACIHQQFBBSAFGyAFEC8iBRADBEAgBSEGDAELIAggBUEDakkNACAAIAcgBRBJIgYQAw0AIAEgAmohCiAAQZDhAWohCyAIIAVrIQIgBSAHaiEHIAEhBQNAIAcgAiAJECwiBhADDQEgAkF9aiICIAZJBEBBuH8hBgwCCyAJKAIAIghBAksEQEFsIQYMAgsgB0EDaiEHAn8CQAJAAkAgCEEBaw4CAgABCyAAIAUgCiAFayAHIAYQSAwCCyAFIAogBWsgByAGEEcMAQsgBSAKIAVrIActAAAgCSgCCBBGCyIIEAMEQCAIIQYMAgsgACgC8OABBEAgCyAFIAgQRQsgAiAGayECIAYgB2ohByAFIAhqIQUgCSgCBEUNAAsgACkD0OABIgxCf1IEQEFsIQYgDCAFIAFrrFINAQsgACgC8OABBEBBaiEGIAJBBEkNASALEEQhDCAHKAAAIAynRw0BIAdBBGohByACQXxqIQILIAMgBzYCACAEIAI2AgAgBSABayEGCyAJQRBqJAAgBgsuACAAECsCf0EAQQAQAw0AGiABRSACRXJFBEBBYiAAIAEgAhA9EAMNARoLQQALCzcAIAEEQCAAIAAoAsTgASABKAIEIAEoAghqRzYCnOIBCyAAECtBABADIAFFckUEQCAAIAEQWwsL0QIBB38jAEEQayIGJAAgBiAENgIIIAYgAzYCDCAFBEAgBSgCBCEKIAUoAgghCQsgASEIAkACQANAIAAoAuzhARAWIQsCQANAIAQgC0kNASADKAAAQXBxQdDUtMIBRgRAIAMgBBAiIgcQAw0EIAQgB2shBCADIAdqIQMMAQsLIAYgAzYCDCAGIAQ2AggCQCAFBEAgACAFEE5BACEHQQAQA0UNAQwFCyAAIAogCRBNIgcQAw0ECyAAIAgQUCAMQQFHQQAgACAIIAIgBkEMaiAGQQhqEEwiByIDa0EAIAMQAxtBCkdyRQRAQbh/IQcMBAsgBxADDQMgAiAHayECIAcgCGohCEEBIQwgBigCDCEDIAYoAgghBAwBCwsgBiADNgIMIAYgBDYCCEG4fyEHIAQNASAIIAFrIQcMAQsgBiADNgIMIAYgBDYCCAsgBkEQaiQAIAcLRgECfyABIAAoArjgASICRwRAIAAgAjYCxOABIAAgATYCuOABIAAoArzgASEDIAAgATYCvOABIAAgASADIAJrajYCwOABCwutAgIEfwF+IwBBQGoiBCQAAkACQCACQQhJDQAgASgAAEFwcUHQ1LTCAUcNACABIAIQIiEBIABCADcDCCAAQQA2AgQgACABNgIADAELIARBGGogASACEC0iAxADBEAgACADEBoMAQsgAwRAIABBuH8QGgwBCyACIAQoAjAiA2shAiABIANqIQMDQAJAIAAgAyACIARBCGoQLCIFEAMEfyAFBSACIAVBA2oiBU8NAUG4fwsQGgwCCyAGQQFqIQYgAiAFayECIAMgBWohAyAEKAIMRQ0ACyAEKAI4BEAgAkEDTQRAIABBuH8QGgwCCyADQQRqIQMLIAQoAighAiAEKQMYIQcgAEEANgIEIAAgAyABazYCACAAIAIgBmytIAcgB0J/URs3AwgLIARBQGskAAslAQF/IwBBEGsiAiQAIAIgACABEFEgAigCACEAIAJBEGokACAAC30BBH8jAEGQBGsiBCQAIARB/wE2AggCQCAEQRBqIARBCGogBEEMaiABIAIQFSIGEAMEQCAGIQUMAQtBVCEFIAQoAgwiB0EGSw0AIAMgBEEQaiAEKAIIIAcQQSIFEAMNACAAIAEgBmogAiAGayADEDwhBQsgBEGQBGokACAFC4cBAgJ/An5BABAWIQMCQANAIAEgA08EQAJAIAAoAABBcHFB0NS0wgFGBEAgACABECIiAhADRQ0BQn4PCyAAIAEQVSIEQn1WDQMgBCAFfCIFIARUIQJCfiEEIAINAyAAIAEQUiICEAMNAwsgASACayEBIAAgAmohAAwBCwtCfiAFIAEbIQQLIAQLPwIBfwF+IwBBMGsiAiQAAn5CfiACQQhqIAAgARAtDQAaQgAgAigCHEEBRg0AGiACKQMICyEDIAJBMGokACADC40BAQJ/IwBBMGsiASQAAkAgAEUNACAAKAKI4gENACABIABB/OEBaigCADYCKCABIAApAvThATcDICAAEDAgACgCqOIBIQIgASABKAIoNgIYIAEgASkDIDcDECACIAFBEGoQGyAAQQA2AqjiASABIAEoAig2AgggASABKQMgNwMAIAAgARAbCyABQTBqJAALKgECfyMAQRBrIgAkACAAQQA2AgggAEIANwMAIAAQWCEBIABBEGokACABC4cBAQN/IwBBEGsiAiQAAkAgACgCAEUgACgCBEVzDQAgAiAAKAIINgIIIAIgACkCADcDAAJ/IAIoAgAiAQRAIAIoAghBqOMJIAERBQAMAQtBqOMJECgLIgFFDQAgASAAKQIANwL04QEgAUH84QFqIAAoAgg2AgAgARBZIAEhAwsgAkEQaiQAIAMLywEBAn8jAEEgayIBJAAgAEGBgIDAADYCtOIBIABBADYCiOIBIABBADYC7OEBIABCADcDkOIBIABBADYCpOMJIABBADYC3OIBIABCADcCzOIBIABBADYCvOIBIABBADYCxOABIABCADcCnOIBIABBpOIBakIANwIAIABBrOIBakEANgIAIAFCADcCECABQgA3AhggASABKQMYNwMIIAEgASkDEDcDACABKAIIQQh2QQFxIQIgAEEANgLg4gEgACACNgKM4gEgAUEgaiQAC3YBA38jAEEwayIBJAAgAARAIAEgAEHE0AFqIgIoAgA2AiggASAAKQK80AE3AyAgACgCACEDIAEgAigCADYCGCABIAApArzQATcDECADIAFBEGoQGyABIAEoAig2AgggASABKQMgNwMAIAAgARAbCyABQTBqJAALzAEBAX8gACABKAK00AE2ApjiASAAIAEoAgQiAjYCwOABIAAgAjYCvOABIAAgAiABKAIIaiICNgK44AEgACACNgLE4AEgASgCuNABBEAgAEKBgICAEDcDiOEBIAAgAUGk0ABqNgIMIAAgAUGUIGo2AgggACABQZwwajYCBCAAIAFBDGo2AgAgAEGs0AFqIAFBqNABaigCADYCACAAQbDQAWogAUGs0AFqKAIANgIAIABBtNABaiABQbDQAWooAgA2AgAPCyAAQgA3A4jhAQs7ACACRQRAQbp/DwsgBEUEQEFsDwsgAiAEEGAEQCAAIAEgAiADIAQgBRBhDwsgACABIAIgAyAEIAUQZQtGAQF/IwBBEGsiBSQAIAVBCGogBBAOAn8gBS0ACQRAIAAgASACIAMgBBAyDAELIAAgASACIAMgBBA0CyEAIAVBEGokACAACzQAIAAgAyAEIAUQNiIFEAMEQCAFDwsgBSAESQR/IAEgAiADIAVqIAQgBWsgABA1BUG4fwsLRgEBfyMAQRBrIgUkACAFQQhqIAQQDgJ/IAUtAAkEQCAAIAEgAiADIAQQYgwBCyAAIAEgAiADIAQQNQshACAFQRBqJAAgAAtZAQF/QQ8hAiABIABJBEAgAUEEdCAAbiECCyAAQQh2IgEgAkEYbCIAQYwIaigCAGwgAEGICGooAgBqIgJBA3YgAmogAEGACGooAgAgAEGECGooAgAgAWxqSQs3ACAAIAMgBCAFQYAQEDMiBRADBEAgBQ8LIAUgBEkEfyABIAIgAyAFaiAEIAVrIAAQMgVBuH8LC78DAQN/IwBBIGsiBSQAIAVBCGogAiADEAYiAhADRQRAIAAgAWoiB0F9aiEGIAUgBBAOIARBBGohAiAFLQACIQMDQEEAIAAgBkkgBUEIahAEGwRAIAAgAiAFQQhqIAMQAkECdGoiBC8BADsAACAFQQhqIAQtAAIQASAAIAQtAANqIgQgAiAFQQhqIAMQAkECdGoiAC8BADsAACAFQQhqIAAtAAIQASAEIAAtAANqIQAMAQUgB0F+aiEEA0AgBUEIahAEIAAgBEtyRQRAIAAgAiAFQQhqIAMQAkECdGoiBi8BADsAACAFQQhqIAYtAAIQASAAIAYtAANqIQAMAQsLA0AgACAES0UEQCAAIAIgBUEIaiADEAJBAnRqIgYvAQA7AAAgBUEIaiAGLQACEAEgACAGLQADaiEADAELCwJAIAAgB08NACAAIAIgBUEIaiADEAIiA0ECdGoiAC0AADoAACAALQADQQFGBEAgBUEIaiAALQACEAEMAQsgBSgCDEEfSw0AIAVBCGogAiADQQJ0ai0AAhABIAUoAgxBIUkNACAFQSA2AgwLIAFBbCAFQQhqEAobIQILCwsgBUEgaiQAIAILkgIBBH8jAEFAaiIJJAAgCSADQTQQCyEDAkAgBEECSA0AIAMgBEECdGooAgAhCSADQTxqIAgQIyADQQE6AD8gAyACOgA+QQAhBCADKAI8IQoDQCAEIAlGDQEgACAEQQJ0aiAKNgEAIARBAWohBAwAAAsAC0EAIQkDQCAGIAlGRQRAIAMgBSAJQQF0aiIKLQABIgtBAnRqIgwoAgAhBCADQTxqIAotAABBCHQgCGpB//8DcRAjIANBAjoAPyADIAcgC2siCiACajoAPiAEQQEgASAKa3RqIQogAygCPCELA0AgACAEQQJ0aiALNgEAIARBAWoiBCAKSQ0ACyAMIAo2AgAgCUEBaiEJDAELCyADQUBrJAALowIBCX8jAEHQAGsiCSQAIAlBEGogBUE0EAsaIAcgBmshDyAHIAFrIRADQAJAIAMgCkcEQEEBIAEgByACIApBAXRqIgYtAAEiDGsiCGsiC3QhDSAGLQAAIQ4gCUEQaiAMQQJ0aiIMKAIAIQYgCyAPTwRAIAAgBkECdGogCyAIIAUgCEE0bGogCCAQaiIIQQEgCEEBShsiCCACIAQgCEECdGooAgAiCEEBdGogAyAIayAHIA4QYyAGIA1qIQgMAgsgCUEMaiAOECMgCUEBOgAPIAkgCDoADiAGIA1qIQggCSgCDCELA0AgBiAITw0CIAAgBkECdGogCzYBACAGQQFqIQYMAAALAAsgCUHQAGokAA8LIAwgCDYCACAKQQFqIQoMAAALAAs0ACAAIAMgBCAFEDYiBRADBEAgBQ8LIAUgBEkEfyABIAIgAyAFaiAEIAVrIAAQNAVBuH8LCyMAIAA/AEEQdGtB//8DakEQdkAAQX9GBEBBAA8LQQAQAEEBCzsBAX8gAgRAA0AgACABIAJBgCAgAkGAIEkbIgMQCyEAIAFBgCBqIQEgAEGAIGohACACIANrIgINAAsLCwYAIAAQAwsLqBUJAEGICAsNAQAAAAEAAAACAAAAAgBBoAgLswYBAAAAAQAAAAIAAAACAAAAJgAAAIIAAAAhBQAASgAAAGcIAAAmAAAAwAEAAIAAAABJBQAASgAAAL4IAAApAAAALAIAAIAAAABJBQAASgAAAL4IAAAvAAAAygIAAIAAAACKBQAASgAAAIQJAAA1AAAAcwMAAIAAAACdBQAASgAAAKAJAAA9AAAAgQMAAIAAAADrBQAASwAAAD4KAABEAAAAngMAAIAAAABNBgAASwAAAKoKAABLAAAAswMAAIAAAADBBgAATQAAAB8NAABNAAAAUwQAAIAAAAAjCAAAUQAAAKYPAABUAAAAmQQAAIAAAABLCQAAVwAAALESAABYAAAA2gQAAIAAAABvCQAAXQAAACMUAABUAAAARQUAAIAAAABUCgAAagAAAIwUAABqAAAArwUAAIAAAAB2CQAAfAAAAE4QAAB8AAAA0gIAAIAAAABjBwAAkQAAAJAHAACSAAAAAAAAAAEAAAABAAAABQAAAA0AAAAdAAAAPQAAAH0AAAD9AAAA/QEAAP0DAAD9BwAA/Q8AAP0fAAD9PwAA/X8AAP3/AAD9/wEA/f8DAP3/BwD9/w8A/f8fAP3/PwD9/38A/f//AP3//wH9//8D/f//B/3//w/9//8f/f//P/3//38AAAAAAQAAAAIAAAADAAAABAAAAAUAAAAGAAAABwAAAAgAAAAJAAAACgAAAAsAAAAMAAAADQAAAA4AAAAPAAAAEAAAABEAAAASAAAAEwAAABQAAAAVAAAAFgAAABcAAAAYAAAAGQAAABoAAAAbAAAAHAAAAB0AAAAeAAAAHwAAAAMAAAAEAAAABQAAAAYAAAAHAAAACAAAAAkAAAAKAAAACwAAAAwAAAANAAAADgAAAA8AAAAQAAAAEQAAABIAAAATAAAAFAAAABUAAAAWAAAAFwAAABgAAAAZAAAAGgAAABsAAAAcAAAAHQAAAB4AAAAfAAAAIAAAACEAAAAiAAAAIwAAACUAAAAnAAAAKQAAACsAAAAvAAAAMwAAADsAAABDAAAAUwAAAGMAAACDAAAAAwEAAAMCAAADBAAAAwgAAAMQAAADIAAAA0AAAAOAAAADAAEAQeAPC1EBAAAAAQAAAAEAAAABAAAAAgAAAAIAAAADAAAAAwAAAAQAAAAEAAAABQAAAAcAAAAIAAAACQAAAAoAAAALAAAADAAAAA0AAAAOAAAADwAAABAAQcQQC4sBAQAAAAIAAAADAAAABAAAAAUAAAAGAAAABwAAAAgAAAAJAAAACgAAAAsAAAAMAAAADQAAAA4AAAAPAAAAEAAAABIAAAAUAAAAFgAAABgAAAAcAAAAIAAAACgAAAAwAAAAQAAAAIAAAAAAAQAAAAIAAAAEAAAACAAAABAAAAAgAAAAQAAAAIAAAAAAAQBBkBIL5gQBAAAAAQAAAAEAAAABAAAAAgAAAAIAAAADAAAAAwAAAAQAAAAGAAAABwAAAAgAAAAJAAAACgAAAAsAAAAMAAAADQAAAA4AAAAPAAAAEAAAAAEAAAAEAAAACAAAAAAAAAABAAEBBgAAAAAAAAQAAAAAEAAABAAAAAAgAAAFAQAAAAAAAAUDAAAAAAAABQQAAAAAAAAFBgAAAAAAAAUHAAAAAAAABQkAAAAAAAAFCgAAAAAAAAUMAAAAAAAABg4AAAAAAAEFEAAAAAAAAQUUAAAAAAABBRYAAAAAAAIFHAAAAAAAAwUgAAAAAAAEBTAAAAAgAAYFQAAAAAAABwWAAAAAAAAIBgABAAAAAAoGAAQAAAAADAYAEAAAIAAABAAAAAAAAAAEAQAAAAAAAAUCAAAAIAAABQQAAAAAAAAFBQAAACAAAAUHAAAAAAAABQgAAAAgAAAFCgAAAAAAAAULAAAAAAAABg0AAAAgAAEFEAAAAAAAAQUSAAAAIAABBRYAAAAAAAIFGAAAACAAAwUgAAAAAAADBSgAAAAAAAYEQAAAABAABgRAAAAAIAAHBYAAAAAAAAkGAAIAAAAACwYACAAAMAAABAAAAAAQAAAEAQAAACAAAAUCAAAAIAAABQMAAAAgAAAFBQAAACAAAAUGAAAAIAAABQgAAAAgAAAFCQAAACAAAAULAAAAIAAABQwAAAAAAAAGDwAAACAAAQUSAAAAIAABBRQAAAAgAAIFGAAAACAAAgUcAAAAIAADBSgAAAAgAAQFMAAAAAAAEAYAAAEAAAAPBgCAAAAAAA4GAEAAAAAADQYAIABBgBcLhwIBAAEBBQAAAAAAAAUAAAAAAAAGBD0AAAAAAAkF/QEAAAAADwX9fwAAAAAVBf3/HwAAAAMFBQAAAAAABwR9AAAAAAAMBf0PAAAAABIF/f8DAAAAFwX9/38AAAAFBR0AAAAAAAgE/QAAAAAADgX9PwAAAAAUBf3/DwAAAAIFAQAAABAABwR9AAAAAAALBf0HAAAAABEF/f8BAAAAFgX9/z8AAAAEBQ0AAAAQAAgE/QAAAAAADQX9HwAAAAATBf3/BwAAAAEFAQAAABAABgQ9AAAAAAAKBf0DAAAAABAF/f8AAAAAHAX9//8PAAAbBf3//wcAABoF/f//AwAAGQX9//8BAAAYBf3//wBBkBkLhgQBAAEBBgAAAAAAAAYDAAAAAAAABAQAAAAgAAAFBQAAAAAAAAUGAAAAAAAABQgAAAAAAAAFCQAAAAAAAAULAAAAAAAABg0AAAAAAAAGEAAAAAAAAAYTAAAAAAAABhYAAAAAAAAGGQAAAAAAAAYcAAAAAAAABh8AAAAAAAAGIgAAAAAAAQYlAAAAAAABBikAAAAAAAIGLwAAAAAAAwY7AAAAAAAEBlMAAAAAAAcGgwAAAAAACQYDAgAAEAAABAQAAAAAAAAEBQAAACAAAAUGAAAAAAAABQcAAAAgAAAFCQAAAAAAAAUKAAAAAAAABgwAAAAAAAAGDwAAAAAAAAYSAAAAAAAABhUAAAAAAAAGGAAAAAAAAAYbAAAAAAAABh4AAAAAAAAGIQAAAAAAAQYjAAAAAAABBicAAAAAAAIGKwAAAAAAAwYzAAAAAAAEBkMAAAAAAAUGYwAAAAAACAYDAQAAIAAABAQAAAAwAAAEBAAAABAAAAQFAAAAIAAABQcAAAAgAAAFCAAAACAAAAUKAAAAIAAABQsAAAAAAAAGDgAAAAAAAAYRAAAAAAAABhQAAAAAAAAGFwAAAAAAAAYaAAAAAAAABh0AAAAAAAAGIAAAAAAAEAYDAAEAAAAPBgOAAAAAAA4GA0AAAAAADQYDIAAAAAAMBgMQAAAAAAsGAwgAAAAACgYDBABBpB0L2QEBAAAAAwAAAAcAAAAPAAAAHwAAAD8AAAB/AAAA/wAAAP8BAAD/AwAA/wcAAP8PAAD/HwAA/z8AAP9/AAD//wAA//8BAP//AwD//wcA//8PAP//HwD//z8A//9/AP///wD///8B////A////wf///8P////H////z////9/AAAAAAEAAAACAAAABAAAAAAAAAACAAAABAAAAAgAAAAAAAAAAQAAAAIAAAABAAAABAAAAAQAAAAEAAAABAAAAAgAAAAIAAAACAAAAAcAAAAIAAAACQAAAAoAAAALAEGgIAsDwBBQ",b_="display-p3",__="display-p3-linear",Co=new WeakMap;let So=0,Io;class yn extends Ji{constructor(e){super(e),this.transcoderPath="",this.transcoderBinary=null,this.transcoderPending=null,this.workerPool=new c_,this.workerSourceURL="",this.workerConfig=null,typeof MSC_TRANSCODER<"u"&&console.warn('THREE.KTX2Loader: Please update to latest "basis_transcoder". "msc_basis_transcoder" is no longer supported in three.js r125+.')}setTranscoderPath(e){return this.transcoderPath=e,this}setWorkerLimit(e){return this.workerPool.setWorkerLimit(e),this}async detectSupportAsync(e){return this.workerConfig={astcSupported:await e.hasFeatureAsync("texture-compression-astc"),astcHDRSupported:!1,etc1Supported:await e.hasFeatureAsync("texture-compression-etc1"),etc2Supported:await e.hasFeatureAsync("texture-compression-etc2"),dxtSupported:await e.hasFeatureAsync("texture-compression-bc"),bptcSupported:await e.hasFeatureAsync("texture-compression-bptc"),pvrtcSupported:await e.hasFeatureAsync("texture-compression-pvrtc")},this}detectSupport(e){return e.isWebGPURenderer===!0?this.workerConfig={astcSupported:e.hasFeature("texture-compression-astc"),astcHDRSupported:!1,etc1Supported:e.hasFeature("texture-compression-etc1"),etc2Supported:e.hasFeature("texture-compression-etc2"),dxtSupported:e.hasFeature("texture-compression-bc"),bptcSupported:e.hasFeature("texture-compression-bptc"),pvrtcSupported:e.hasFeature("texture-compression-pvrtc")}:this.workerConfig={astcSupported:e.extensions.has("WEBGL_compressed_texture_astc"),astcHDRSupported:e.extensions.has("WEBGL_compressed_texture_astc")&&e.extensions.get("WEBGL_compressed_texture_astc").getSupportedProfiles().includes("hdr"),etc1Supported:e.extensions.has("WEBGL_compressed_texture_etc1"),etc2Supported:e.extensions.has("WEBGL_compressed_texture_etc"),dxtSupported:e.extensions.has("WEBGL_compressed_texture_s3tc"),bptcSupported:e.extensions.has("EXT_texture_compression_bptc"),pvrtcSupported:e.extensions.has("WEBGL_compressed_texture_pvrtc")||e.extensions.has("WEBKIT_WEBGL_compressed_texture_pvrtc")},this}init(){if(!this.transcoderPending){const e=new ar(this.manager);e.setPath(this.transcoderPath),e.setWithCredentials(this.withCredentials);const t=e.loadAsync("basis_transcoder.js"),n=new ar(this.manager);n.setPath(this.transcoderPath),n.setResponseType("arraybuffer"),n.setWithCredentials(this.withCredentials);const s=n.loadAsync("basis_transcoder.wasm");this.transcoderPending=Promise.all([t,s]).then(([r,a])=>{const o=yn.BasisWorker.toString(),c=["/* constants */","let _EngineFormat = "+JSON.stringify(yn.EngineFormat),"let _EngineType = "+JSON.stringify(yn.EngineType),"let _TranscoderFormat = "+JSON.stringify(yn.TranscoderFormat),"let _BasisFormat = "+JSON.stringify(yn.BasisFormat),"/* basis_transcoder.js */",r,"/* worker */",o.substring(o.indexOf("{")+1,o.lastIndexOf("}"))].join(`
`);this.workerSourceURL=URL.createObjectURL(new Blob([c])),this.transcoderBinary=a,this.workerPool.setWorkerCreator(()=>{const l=new Worker(this.workerSourceURL),h=this.transcoderBinary.slice(0);return l.postMessage({type:"init",config:this.workerConfig,transcoderBinary:h},[h]),l})}),So>0&&console.warn("THREE.KTX2Loader: Multiple active KTX2 loaders may cause performance issues. Use a single KTX2Loader instance, or call .dispose() on old instances."),So++}return this.transcoderPending}load(e,t,n,s){if(this.workerConfig===null)throw new Error("THREE.KTX2Loader: Missing initialization with `.detectSupport( renderer )`.");const r=new ar(this.manager);r.setResponseType("arraybuffer"),r.setWithCredentials(this.withCredentials),r.load(e,a=>{this.parse(a,t,s)},n,s)}parse(e,t,n){if(this.workerConfig===null)throw new Error("THREE.KTX2Loader: Missing initialization with `.detectSupport( renderer )`.");if(Co.has(e))return Co.get(e).promise.then(t).catch(n);this._createTexture(e).then(s=>t?t(s):null).catch(n)}_createTextureFrom(e,t){const{type:n,error:s,data:{faces:r,width:a,height:o,format:c,type:l,dfdFlags:h}}=e;if(n==="error")return Promise.reject(s);let u;if(t.faceCount===6)u=new N0(r,c,l);else{const f=r[0].mipmaps;u=t.layerCount>1?new F0(f,a,o,t.layerCount,c,l):new Pa(f,a,o,c,l)}return u.minFilter=r[0].mipmaps.length===1?sn:Vn,u.magFilter=sn,u.generateMipmaps=!1,u.needsUpdate=!0,u.colorSpace=tf(t),u.premultiplyAlpha=!!(h&h_),u}async _createTexture(e,t={}){const n=g_(new Uint8Array(e)),s=n.vkFormat===Kc&&n.dataFormatDescriptor[0].colorModel===167;if(!(n.vkFormat===A_||s&&!this.workerConfig.astcHDRSupported))return x_(n);const a=t,o=this.init().then(()=>this.workerPool.postMessage({type:"transcode",buffer:e,taskConfig:a},[e])).then(c=>this._createTextureFrom(c.data,n));return Co.set(e,{promise:o}),o}dispose(){return this.workerPool.dispose(),this.workerSourceURL&&URL.revokeObjectURL(this.workerSourceURL),So--,this}}yn.BasisFormat={ETC1S:0,UASTC:1,UASTC_HDR:2};yn.TranscoderFormat={ETC1:0,ETC2:1,BC1:2,BC3:3,BC4:4,BC5:5,BC7_M6_OPAQUE_ONLY:6,BC7_M5:7,PVRTC1_4_RGB:8,PVRTC1_4_RGBA:9,ASTC_4x4:10,ATC_RGB:11,ATC_RGBA_INTERPOLATED_ALPHA:12,RGBA32:13,RGB565:14,BGR565:15,RGBA4444:16,BC6H:22,RGB_HALF:24,RGBA_HALF:25};yn.EngineFormat={RGBAFormat:Pt,RGBA_ASTC_4x4_Format:ur,RGB_BPTC_UNSIGNED_Format:Ea,RGBA_BPTC_Format:ir,RGBA_ETC2_EAC_Format:_a,RGBA_PVRTC_4BPPV1_Format:ga,RGBA_S3TC_DXT5_Format:nr,RGB_ETC1_Format:ma,RGB_ETC2_Format:ba,RGB_PVRTC_4BPPV1_Format:pa,RGBA_S3TC_DXT1_Format:tr};yn.EngineType={UnsignedByteType:Lt,HalfFloatType:Gt,FloatType:Kt};yn.BasisWorker=function(){let i,e,t;const n=_EngineFormat,s=_EngineType,r=_TranscoderFormat,a=_BasisFormat;self.addEventListener("message",function(g){const _=g.data;switch(_.type){case"init":i=_.config,o(_.transcoderBinary);break;case"transcode":e.then(()=>{try{const{faces:p,buffers:d,width:x,height:E,hasAlpha:b,format:L,type:B,dfdFlags:w}=c(_.buffer);self.postMessage({type:"transcode",id:_.id,data:{faces:p,width:x,height:E,hasAlpha:b,format:L,type:B,dfdFlags:w}},d)}catch(p){console.error(p),self.postMessage({type:"error",id:_.id,error:p.message})}});break}});function o(g){e=new Promise(_=>{t={wasmBinary:g,onRuntimeInitialized:_},BASIS(t)}).then(()=>{t.initializeBasis(),t.KTX2File===void 0&&console.warn("THREE.KTX2Loader: Please update Basis Universal transcoder.")})}function c(g){const _=new t.KTX2File(new Uint8Array(g));function p(){_.close(),_.delete()}if(!_.isValid())throw p(),new Error("THREE.KTX2Loader:	Invalid or unsupported .ktx2 file");let d;if(_.isUASTC())d=a.UASTC;else if(_.isETC1S())d=a.ETC1S;else if(_.isHDR())d=a.UASTC_HDR;else throw new Error("THREE.KTX2Loader: Unknown Basis encoding");const x=_.getWidth(),E=_.getHeight(),b=_.getLayers()||1,L=_.getLevels(),B=_.getFaces(),w=_.getHasAlpha(),D=_.getDFDFlags(),{transcoderFormat:M,engineFormat:y,engineType:T}=u(d,x,E,w);if(!x||!E||!L)throw p(),new Error("THREE.KTX2Loader:	Invalid texture");if(!_.startTranscoding())throw p(),new Error("THREE.KTX2Loader: .startTranscoding failed");const j=[],V=[];for(let he=0;he<B;he++){const fe=[];for(let ae=0;ae<L;ae++){const se=[];let te,ge;for(let me=0;me<b;me++){const xe=_.getImageLevelInfo(ae,me,he);he===0&&ae===0&&me===0&&(xe.origWidth%4!==0||xe.origHeight%4!==0)&&console.warn("THREE.KTX2Loader: ETC1S and UASTC textures should use multiple-of-four dimensions."),L>1?(te=xe.origWidth,ge=xe.origHeight):(te=xe.width,ge=xe.height);let ve=new Uint8Array(_.getImageTranscodedSizeInBytes(ae,me,0,M));const Y=_.transcodeImage(ve,ae,me,he,M,0,-1,-1);if(T===s.HalfFloatType&&(ve=new Uint16Array(ve.buffer,ve.byteOffset,ve.byteLength/Uint16Array.BYTES_PER_ELEMENT)),!Y)throw p(),new Error("THREE.KTX2Loader: .transcodeImage failed.");se.push(ve)}const ie=A(se);fe.push({data:ie,width:te,height:ge}),V.push(ie.buffer)}j.push({mipmaps:fe,width:x,height:E,format:y,type:T})}return p(),{faces:j,buffers:V,width:x,height:E,hasAlpha:w,dfdFlags:D,format:y,type:T}}const l=[{if:"astcSupported",basisFormat:[a.UASTC],transcoderFormat:[r.ASTC_4x4,r.ASTC_4x4],engineFormat:[n.RGBA_ASTC_4x4_Format,n.RGBA_ASTC_4x4_Format],engineType:[s.UnsignedByteType],priorityETC1S:1/0,priorityUASTC:1,needsPowerOfTwo:!1},{if:"bptcSupported",basisFormat:[a.ETC1S,a.UASTC],transcoderFormat:[r.BC7_M5,r.BC7_M5],engineFormat:[n.RGBA_BPTC_Format,n.RGBA_BPTC_Format],engineType:[s.UnsignedByteType],priorityETC1S:3,priorityUASTC:2,needsPowerOfTwo:!1},{if:"dxtSupported",basisFormat:[a.ETC1S,a.UASTC],transcoderFormat:[r.BC1,r.BC3],engineFormat:[n.RGBA_S3TC_DXT1_Format,n.RGBA_S3TC_DXT5_Format],engineType:[s.UnsignedByteType],priorityETC1S:4,priorityUASTC:5,needsPowerOfTwo:!1},{if:"etc2Supported",basisFormat:[a.ETC1S,a.UASTC],transcoderFormat:[r.ETC1,r.ETC2],engineFormat:[n.RGB_ETC2_Format,n.RGBA_ETC2_EAC_Format],engineType:[s.UnsignedByteType],priorityETC1S:1,priorityUASTC:3,needsPowerOfTwo:!1},{if:"etc1Supported",basisFormat:[a.ETC1S,a.UASTC],transcoderFormat:[r.ETC1],engineFormat:[n.RGB_ETC1_Format],engineType:[s.UnsignedByteType],priorityETC1S:2,priorityUASTC:4,needsPowerOfTwo:!1},{if:"pvrtcSupported",basisFormat:[a.ETC1S,a.UASTC],transcoderFormat:[r.PVRTC1_4_RGB,r.PVRTC1_4_RGBA],engineFormat:[n.RGB_PVRTC_4BPPV1_Format,n.RGBA_PVRTC_4BPPV1_Format],engineType:[s.UnsignedByteType],priorityETC1S:5,priorityUASTC:6,needsPowerOfTwo:!0},{if:"bptcSupported",basisFormat:[a.UASTC_HDR],transcoderFormat:[r.BC6H],engineFormat:[n.RGB_BPTC_UNSIGNED_Format],engineType:[s.HalfFloatType],priorityHDR:1,needsPowerOfTwo:!1},{basisFormat:[a.ETC1S,a.UASTC],transcoderFormat:[r.RGBA32,r.RGBA32],engineFormat:[n.RGBAFormat,n.RGBAFormat],engineType:[s.UnsignedByteType,s.UnsignedByteType],priorityETC1S:100,priorityUASTC:100,needsPowerOfTwo:!1},{basisFormat:[a.UASTC_HDR],transcoderFormat:[r.RGBA_HALF],engineFormat:[n.RGBAFormat],engineType:[s.HalfFloatType],priorityHDR:100,needsPowerOfTwo:!1}],h={[a.ETC1S]:l.filter(g=>g.basisFormat.includes(a.ETC1S)).sort((g,_)=>g.priorityUASTC-_.priorityUASTC),[a.UASTC]:l.filter(g=>g.basisFormat.includes(a.UASTC)).sort((g,_)=>g.priorityUASTC-_.priorityUASTC),[a.UASTC_HDR]:l.filter(g=>g.basisFormat.includes(a.UASTC_HDR)).sort((g,_)=>g.priorityHDR-_.priorityHDR)};function u(g,_,p,d){const x=h[g];for(let E=0;E<x.length;E++){const b=x[E];if(b.if&&!i[b.if]||!b.basisFormat.includes(g)||d&&b.transcoderFormat.length<2||b.needsPowerOfTwo&&!(f(_)&&f(p)))continue;const L=b.transcoderFormat[d?1:0],B=b.engineFormat[d?1:0],w=b.engineType[0];return{transcoderFormat:L,engineFormat:B,engineType:w}}throw new Error("THREE.KTX2Loader: Failed to identify transcoding target.")}function f(g){return g<=2?!0:(g&g-1)===0&&g!==0}function A(g){if(g.length===1)return g[0];let _=0;for(let x=0;x<g.length;x++){const E=g[x];_+=E.byteLength}const p=new Uint8Array(_);let d=0;for(let x=0;x<g.length;x++){const E=g[x];p.set(E,d),d+=E.byteLength}return p}};const E_=new Set([Pt,Gi,Ci]),wo={[Zu]:Pt,[Xu]:Pt,[Wu]:Pt,[ju]:Pt,[Ju]:Gi,[Yu]:Gi,[Hu]:Gi,[Vu]:Gi,[Ku]:Ci,[qu]:Ci,[zu]:Ci,[Gu]:Ci,[Kc]:ur,[ef]:fr,[$u]:fr},To={[Zu]:Kt,[Xu]:Gt,[Wu]:Lt,[ju]:Lt,[Ju]:Kt,[Yu]:Gt,[Hu]:Lt,[Vu]:Lt,[Ku]:Kt,[qu]:Gt,[zu]:Lt,[Gu]:Lt,[Kc]:Gt,[ef]:Lt,[$u]:Lt};async function x_(i){const{vkFormat:e}=i;if(wo[e]===void 0)throw new Error("THREE.KTX2Loader: Unsupported vkFormat.");let t;i.supercompressionScheme===Fh&&(Io||(Io=new Promise(async r=>{const a=new m_;await a.init(),r(a)})),t=await Io);const n=[];for(let r=0;r<i.levels.length;r++){const a=Math.max(1,i.pixelWidth>>r),o=Math.max(1,i.pixelHeight>>r),c=i.pixelDepth?Math.max(1,i.pixelDepth>>r):0,l=i.levels[r];let h;if(i.supercompressionScheme===l_)h=l.levelData;else if(i.supercompressionScheme===Fh)h=t.decode(l.levelData,l.uncompressedByteLength);else throw new Error("THREE.KTX2Loader: Unsupported supercompressionScheme.");let u;To[e]===Kt?u=new Float32Array(h.buffer,h.byteOffset,h.byteLength/Float32Array.BYTES_PER_ELEMENT):To[e]===Gt?u=new Uint16Array(h.buffer,h.byteOffset,h.byteLength/Uint16Array.BYTES_PER_ELEMENT):u=h,n.push({data:u,width:a,height:o,depth:c})}let s;if(E_.has(wo[e]))s=i.pixelDepth===0?new vr(n[0].data,i.pixelWidth,i.pixelHeight):new mu(n[0].data,i.pixelWidth,i.pixelHeight,i.pixelDepth);else{if(i.pixelDepth>0)throw new Error("THREE.KTX2Loader: Unsupported pixelDepth.");s=new Pa(n,i.pixelWidth,i.pixelHeight)}return s.mipmaps=n,s.type=To[e],s.format=wo[e],s.colorSpace=tf(i),s.needsUpdate=!0,Promise.resolve(s)}function tf(i){const e=i.dataFormatDescriptor[0];return e.colorPrimaries===f_?e.transferFunction===Nh?_t:Jt:e.colorPrimaries===d_?e.transferFunction===Nh?b_:__:(e.colorPrimaries===u_||console.warn(`THREE.KTX2Loader: Unsupported color primaries, "${e.colorPrimaries}"`),zn)}const v_={name:"HorizontalTiltShiftShader",uniforms:{tDiffuse:{value:null},h:{value:1/512},r:{value:.35}},vertexShader:`

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

		}`},y_={name:"VerticalTiltShiftShader",uniforms:{tDiffuse:{value:null},v:{value:1/512},r:{value:.35}},vertexShader:`

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

		}`};class nf extends Ji{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new w_(t)}),this.register(function(t){return new T_(t)}),this.register(function(t){return new Q_(t)}),this.register(function(t){return new O_(t)}),this.register(function(t){return new k_(t)}),this.register(function(t){return new R_(t)}),this.register(function(t){return new D_(t)}),this.register(function(t){return new L_(t)}),this.register(function(t){return new P_(t)}),this.register(function(t){return new I_(t)}),this.register(function(t){return new U_(t)}),this.register(function(t){return new B_(t)}),this.register(function(t){return new N_(t)}),this.register(function(t){return new F_(t)}),this.register(function(t){return new C_(t)}),this.register(function(t){return new G_(t)}),this.register(function(t){return new z_(t)})}load(e,t,n,s){const r=this;let a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){const l=or.extractUrlBase(e);a=or.resolveURL(l,this.path)}else a=or.extractUrlBase(e);this.manager.itemStart(e);const o=function(l){s?s(l):console.error(l),r.manager.itemError(e),r.manager.itemEnd(e)},c=new ar(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{r.parse(l,a,function(h){t(h),r.manager.itemEnd(e)},o)}catch(h){o(h)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r;const a={},o={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===sf){try{a[$e.KHR_BINARY_GLTF]=new H_(e)}catch(u){s&&s(u);return}r=JSON.parse(a[$e.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const l=new nE(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const u=this.pluginCallbacks[h](l);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[u.name]=u,a[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){const u=r.extensionsUsed[h],f=r.extensionsRequired||[];switch(u){case $e.KHR_MATERIALS_UNLIT:a[u]=new S_;break;case $e.KHR_DRACO_MESH_COMPRESSION:a[u]=new V_(r,this.dracoLoader);break;case $e.KHR_TEXTURE_TRANSFORM:a[u]=new W_;break;case $e.KHR_MESH_QUANTIZATION:a[u]=new j_;break;default:f.indexOf(u)>=0&&o[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}l.setExtensions(a),l.setPlugins(o),l.parse(n,s)}parseAsync(e,t){const n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}}function M_(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}const $e={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class C_{constructor(e){this.parser=e,this.name=$e.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let s=t.cache.get(n);if(s)return s;const r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let l;const h=new Me(16777215);c.color!==void 0&&h.setRGB(c.color[0],c.color[1],c.color[2],Jt);const u=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new Qu(h),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new Eb(h),l.distance=u;break;case"spot":l=new bb(h),l.distance=u,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),l.decay=2,ri(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),s=Promise.resolve(l),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(c){return n._getNodeRef(t.cache,o,c)})}}class S_{constructor(){this.name=$e.KHR_MATERIALS_UNLIT}getMaterialType(){return Si}extendParams(e,t,n){const s=[];e.color=new Me(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const a=r.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],Jt),e.opacity=a[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,_t))}return Promise.all(s)}}class I_{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class w_{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:qn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],a=s.extensions[this.name];if(a.clearcoatFactor!==void 0&&(t.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){const o=a.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new De(o,o)}return Promise.all(r)}}class T_{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:qn}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}}class B_{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:qn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],a=s.extensions[this.name];return a.iridescenceFactor!==void 0&&(t.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(t.iridescenceIOR=a.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(r)}}class R_{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:qn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new Me(0,0,0),t.sheenRoughness=0,t.sheen=1;const a=s.extensions[this.name];if(a.sheenColorFactor!==void 0){const o=a.sheenColorFactor;t.sheenColor.setRGB(o[0],o[1],o[2],Jt)}return a.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",a.sheenColorTexture,_t)),a.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(r)}}class D_{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:qn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],a=s.extensions[this.name];return a.transmissionFactor!==void 0&&(t.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",a.transmissionTexture)),Promise.all(r)}}class L_{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:qn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],a=s.extensions[this.name];t.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",a.thicknessTexture)),t.attenuationDistance=a.attenuationDistance||1/0;const o=a.attenuationColor||[1,1,1];return t.attenuationColor=new Me().setRGB(o[0],o[1],o[2],Jt),Promise.all(r)}}class P_{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:qn}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class U_{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:qn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],a=s.extensions[this.name];t.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",a.specularTexture));const o=a.specularColorFactor||[1,1,1];return t.specularColor=new Me().setRGB(o[0],o[1],o[2],Jt),a.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",a.specularColorTexture,_t)),Promise.all(r)}}class F_{constructor(e){this.parser=e,this.name=$e.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:qn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],a=s.extensions[this.name];return t.bumpScale=a.bumpFactor!==void 0?a.bumpFactor:1,a.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",a.bumpTexture)),Promise.all(r)}}class N_{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:qn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],a=s.extensions[this.name];return a.anisotropyStrength!==void 0&&(t.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(t.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",a.anisotropyTexture)),Promise.all(r)}}class Q_{constructor(e){this.parser=e,this.name=$e.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;const r=s.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}}class O_{constructor(e){this.parser=e,this.name=$e.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const a=r.extensions[t],o=s.images[a.source];let c=n.textureLoader;if(o.uri){const l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,a.source,c);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class k_{constructor(e){this.parser=e,this.name=$e.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const a=r.extensions[t],o=s.images[a.source];let c=n.textureLoader;if(o.uri){const l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,a.source,c);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class G_{constructor(e){this.name=$e.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){const c=s.byteOffset||0,l=s.byteLength||0,h=s.count,u=s.byteStride,f=new Uint8Array(o,c,l);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(h,u,f,s.mode,s.filter).then(function(A){return A.buffer}):a.ready.then(function(){const A=new ArrayBuffer(h*u);return a.decodeGltfBuffer(new Uint8Array(A),h,u,f,s.mode,s.filter),A})})}else return null}}class z_{constructor(e){this.name=$e.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const s=t.meshes[n.mesh];for(const l of s.primitives)if(l.mode!==vn.TRIANGLES&&l.mode!==vn.TRIANGLE_STRIP&&l.mode!==vn.TRIANGLE_FAN&&l.mode!==void 0)return null;const a=n.extensions[this.name].attributes,o=[],c={};for(const l in a)o.push(this.parser.getDependency("accessor",a[l]).then(h=>(c[l]=h,c[l])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(l=>{const h=l.pop(),u=h.isGroup?h.children:[h],f=l[0].count,A=[];for(const g of u){const _=new Qe,p=new U,d=new St,x=new U(1,1,1),E=new Ct(g.geometry,g.material,f);for(let b=0;b<f;b++)c.TRANSLATION&&p.fromBufferAttribute(c.TRANSLATION,b),c.ROTATION&&d.fromBufferAttribute(c.ROTATION,b),c.SCALE&&x.fromBufferAttribute(c.SCALE,b),E.setMatrixAt(b,_.compose(p,d,x));for(const b in c)if(b==="_COLOR_0"){const L=c[b];E.instanceColor=new gc(L.array,L.itemSize,L.normalized)}else b!=="TRANSLATION"&&b!=="ROTATION"&&b!=="SCALE"&&g.geometry.setAttribute(b,c[b]);mt.prototype.copy.call(E,g),this.parser.assignFinalMaterial(E),A.push(E)}return h.isGroup?(h.clear(),h.add(...A),h):A[0]}))}}const sf="glTF",Ys=12,kh={JSON:1313821514,BIN:5130562};class H_{constructor(e){this.name=$e.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Ys),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==sf)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const s=this.header.length-Ys,r=new DataView(e,Ys);let a=0;for(;a<s;){const o=r.getUint32(a,!0);a+=4;const c=r.getUint32(a,!0);if(a+=4,c===kh.JSON){const l=new Uint8Array(e,Ys+a,o);this.content=n.decode(l)}else if(c===kh.BIN){const l=Ys+a;this.body=e.slice(l,l+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class V_{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=$e.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},c={},l={};for(const h in a){const u=xc[h]||h.toLowerCase();o[u]=a[h]}for(const h in e.attributes){const u=xc[h]||h.toLowerCase();if(a[h]!==void 0){const f=n.accessors[e.attributes[h]],A=Ms[f.componentType];l[u]=A.name,c[u]=f.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,f){s.decodeDracoFile(h,function(A){for(const g in A.attributes){const _=A.attributes[g],p=c[g];p!==void 0&&(_.normalized=p)}u(A)},o,l,Jt,f)})})}}class W_{constructor(){this.name=$e.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class j_{constructor(){this.name=$e.KHR_MESH_QUANTIZATION}}class rf extends yr{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let a=0;a!==s;a++)t[a]=n[r+a];return t}interpolate_(e,t,n,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=o*2,l=o*3,h=s-t,u=(n-t)/h,f=u*u,A=f*u,g=e*l,_=g-l,p=-2*A+3*f,d=A-f,x=1-p,E=d-f+u;for(let b=0;b!==o;b++){const L=a[_+b+o],B=a[_+b+c]*h,w=a[g+b+o],D=a[g+b]*h;r[b]=x*L+E*B+p*w+d*D}return r}}const q_=new St;class Y_ extends rf{interpolate_(e,t,n,s){const r=super.interpolate_(e,t,n,s);return q_.fromArray(r).normalize().toArray(r),r}}const vn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},Ms={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Gh={9728:Ht,9729:sn,9984:iu,9985:ca,9986:Js,9987:Vn},zh={33071:oi,33648:Aa,10497:gn},Bo={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},xc={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},xi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},X_={CUBICSPLINE:void 0,LINEAR:Ar,STEP:dr},Ro={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function K_(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new Xi({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Nn})),i.DefaultMaterial}function Ni(i,e,t){for(const n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function ri(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function J_(i,e,t){let n=!1,s=!1,r=!1;for(let l=0,h=e.length;l<h;l++){const u=e[l];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(s=!0),u.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);const a=[],o=[],c=[];for(let l=0,h=e.length;l<h;l++){const u=e[l];if(n){const f=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):i.attributes.position;a.push(f)}if(s){const f=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):i.attributes.normal;o.push(f)}if(r){const f=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):i.attributes.color;c.push(f)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c)]).then(function(l){const h=l[0],u=l[1],f=l[2];return n&&(i.morphAttributes.position=h),s&&(i.morphAttributes.normal=u),r&&(i.morphAttributes.color=f),i.morphTargetsRelative=!0,i})}function Z_(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function $_(i){let e;const t=i.extensions&&i.extensions[$e.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Do(t.attributes):e=i.indices+":"+Do(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+Do(i.targets[n]);return e}function Do(i){let e="";const t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function vc(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function eE(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const tE=new Qe;class nE{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new M_,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,a=-1;if(typeof navigator<"u"){const o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;const c=o.match(/Version\/(\d+)/);s=n&&c?parseInt(c[1],10):-1,r=o.indexOf("Firefox")>-1,a=r?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||r&&a<98?this.textureLoader=new Wc(this.options.manager):this.textureLoader=new vb(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new ar(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){const o={scene:a[0][s.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:s.asset,parser:n,userData:{}};return Ni(r,o,s),ri(o,s),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(o)})).then(function(){for(const c of o.scenes)c.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){const a=t[s].joints;for(let o=0,c=a.length;o<c;o++)e[a[o]].isBone=!0}for(let s=0,r=e.length;s<r;s++){const a=e[s];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const s=n.clone(),r=(a,o)=>{const c=this.associations.get(a);c!=null&&this.associations.set(o,c);for(const[l,h]of a.children.entries())r(h,o.children[l])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const s=e(t[n]);if(s)return s}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let s=0;s<t.length;s++){const r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[$e.KHR_BINARY_GLTF].body);const s=this.options;return new Promise(function(r,a){n.load(or.resolveURL(t.uri,s.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){const t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){const a=Bo[s.type],o=Ms[s.componentType],c=s.normalized===!0,l=new o(s.count*a);return Promise.resolve(new Mt(l,a,c))}const r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(a){const o=a[0],c=Bo[s.type],l=Ms[s.componentType],h=l.BYTES_PER_ELEMENT,u=h*c,f=s.byteOffset||0,A=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,g=s.normalized===!0;let _,p;if(A&&A!==u){const d=Math.floor(f/A),x="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+d+":"+s.count;let E=t.cache.get(x);E||(_=new l(o,d*A,s.count*A/h),E=new w0(_,A/h),t.cache.add(x,E)),p=new Gc(E,c,f%A/h,g)}else o===null?_=new l(s.count*c):_=new l(o,f,s.count*c),p=new Mt(_,c,g);if(s.sparse!==void 0){const d=Bo.SCALAR,x=Ms[s.sparse.indices.componentType],E=s.sparse.indices.byteOffset||0,b=s.sparse.values.byteOffset||0,L=new x(a[1],E,s.sparse.count*d),B=new l(a[2],b,s.sparse.count*c);o!==null&&(p=new Mt(p.array.slice(),p.itemSize,p.normalized)),p.normalized=!1;for(let w=0,D=L.length;w<D;w++){const M=L[w];if(p.setX(M,B[w*c]),c>=2&&p.setY(M,B[w*c+1]),c>=3&&p.setZ(M,B[w*c+2]),c>=4&&p.setW(M,B[w*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}p.normalized=g}return p})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,a=t.images[r];let o=this.textureLoader;if(a.uri){const c=n.manager.getHandler(a.uri);c!==null&&(o=c)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,n){const s=this,r=this.json,a=r.textures[e],o=r.images[t],c=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[c])return this.textureCache[c];const l=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=a.name||o.name||"",h.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(h.name=o.uri);const f=(r.samplers||{})[a.sampler]||{};return h.magFilter=Gh[f.magFilter]||sn,h.minFilter=Gh[f.minFilter]||Vn,h.wrapS=zh[f.wrapS]||gn,h.wrapT=zh[f.wrapT]||gn,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==Ht&&h.minFilter!==sn,s.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){const n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());const a=s.images[e],o=self.URL||self.webkitURL;let c=a.uri||"",l=!1;if(a.bufferView!==void 0)c=n.getDependency("bufferView",a.bufferView).then(function(u){l=!0;const f=new Blob([u],{type:a.mimeType});return c=o.createObjectURL(f),c});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const h=Promise.resolve(c).then(function(u){return new Promise(function(f,A){let g=f;t.isImageBitmapLoader===!0&&(g=function(_){const p=new wt(_);p.needsUpdate=!0,f(p)}),t.load(or.resolveURL(u,r.path),g,void 0,A)})}).then(function(u){return l===!0&&o.revokeObjectURL(c),ri(u,a),u.userData.mimeType=a.mimeType||eE(a.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,s){const r=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),r.extensions[$e.KHR_TEXTURE_TRANSFORM]){const o=n.extensions!==void 0?n.extensions[$e.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const c=r.associations.get(a);a=r.extensions[$e.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,c)}}return s!==void 0&&(a.colorSpace=s),e[t]=a,a})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){const o="PointsMaterial:"+n.uuid;let c=this.cache.get(o);c||(c=new Du,Mn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(o,c)),n=c}else if(e.isLine){const o="LineBasicMaterial:"+n.uuid;let c=this.cache.get(o);c||(c=new Ru,Mn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(o,c)),n=c}if(s||r||a){let o="ClonedMaterial:"+n.uuid+":";s&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let c=this.cache.get(o);c||(c=n.clone(),r&&(c.vertexColors=!0),a&&(c.flatShading=!0),s&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(o,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return Xi}loadMaterial(e){const t=this,n=this.json,s=this.extensions,r=n.materials[e];let a;const o={},c=r.extensions||{},l=[];if(c[$e.KHR_MATERIALS_UNLIT]){const u=s[$e.KHR_MATERIALS_UNLIT];a=u.getMaterialType(),l.push(u.extendParams(o,r,t))}else{const u=r.pbrMetallicRoughness||{};if(o.color=new Me(1,1,1),o.opacity=1,Array.isArray(u.baseColorFactor)){const f=u.baseColorFactor;o.color.setRGB(f[0],f[1],f[2],Jt),o.opacity=f[3]}u.baseColorTexture!==void 0&&l.push(t.assignTexture(o,"map",u.baseColorTexture,_t)),o.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,o.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(o,"metalnessMap",u.metallicRoughnessTexture)),l.push(t.assignTexture(o,"roughnessMap",u.metallicRoughnessTexture))),a=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=yt);const h=r.alphaMode||Ro.OPAQUE;if(h===Ro.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===Ro.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==Si&&(l.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new De(1,1),r.normalTexture.scale!==void 0)){const u=r.normalTexture.scale;o.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&a!==Si&&(l.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==Si){const u=r.emissiveFactor;o.emissive=new Me().setRGB(u[0],u[1],u[2],Jt)}return r.emissiveTexture!==void 0&&a!==Si&&l.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,_t)),Promise.all(l).then(function(){const u=new a(o);return r.name&&(u.name=r.name),ri(u,r),t.associations.set(u,{materials:e}),r.extensions&&Ni(s,u,r),u})}createUniqueName(e){const t=ft.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,s=this.primitiveCache;function r(o){return n[$e.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(c){return Hh(c,o,t)})}const a=[];for(let o=0,c=e.length;o<c;o++){const l=e[o],h=$_(l),u=s[h];if(u)a.push(u.promise);else{let f;l.extensions&&l.extensions[$e.KHR_DRACO_MESH_COMPRESSION]?f=r(l):f=Hh(new bt,l,t),s[h]={primitive:l,promise:f},a.push(f)}}return Promise.all(a)}loadMesh(e){const t=this,n=this.json,s=this.extensions,r=n.meshes[e],a=r.primitives,o=[];for(let c=0,l=a.length;c<l;c++){const h=a[c].material===void 0?K_(this.cache):this.getDependency("material",a[c].material);o.push(h)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(c){const l=c.slice(0,c.length-1),h=c[c.length-1],u=[];for(let A=0,g=h.length;A<g;A++){const _=h[A],p=a[A];let d;const x=l[A];if(p.mode===vn.TRIANGLES||p.mode===vn.TRIANGLE_STRIP||p.mode===vn.TRIANGLE_FAN||p.mode===void 0)d=r.isSkinnedMesh===!0?new B0(_,x):new rt(_,x),d.isSkinnedMesh===!0&&d.normalizeSkinWeights(),p.mode===vn.TRIANGLE_STRIP?d.geometry=Ph(d.geometry,fu):p.mode===vn.TRIANGLE_FAN&&(d.geometry=Ph(d.geometry,dc));else if(p.mode===vn.LINES)d=new L0(_,x);else if(p.mode===vn.LINE_STRIP)d=new Hc(_,x);else if(p.mode===vn.LINE_LOOP)d=new P0(_,x);else if(p.mode===vn.POINTS)d=new U0(_,x);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+p.mode);Object.keys(d.geometry.morphAttributes).length>0&&Z_(d,r),d.name=t.createUniqueName(r.name||"mesh_"+e),ri(d,r),p.extensions&&Ni(s,d,p),t.assignFinalMaterial(d),u.push(d)}for(let A=0,g=u.length;A<g;A++)t.associations.set(u[A],{meshes:e,primitives:A});if(u.length===1)return r.extensions&&Ni(s,u[0],r),u[0];const f=new Un;r.extensions&&Ni(s,f,r),t.associations.set(f,{meshes:e});for(let A=0,g=u.length;A<g;A++)f.add(u[A]);return f})}loadCamera(e){let t;const n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new tn(Xt.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new Ra(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),ri(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){const r=s.pop(),a=s,o=[],c=[];for(let l=0,h=a.length;l<h;l++){const u=a[l];if(u){o.push(u);const f=new Qe;r!==null&&f.fromArray(r.array,l*16),c.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new zc(o,c)})}loadAnimation(e){const t=this.json,n=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,a=[],o=[],c=[],l=[],h=[];for(let u=0,f=s.channels.length;u<f;u++){const A=s.channels[u],g=s.samplers[A.sampler],_=A.target,p=_.node,d=s.parameters!==void 0?s.parameters[g.input]:g.input,x=s.parameters!==void 0?s.parameters[g.output]:g.output;_.node!==void 0&&(a.push(this.getDependency("node",p)),o.push(this.getDependency("accessor",d)),c.push(this.getDependency("accessor",x)),l.push(g),h.push(_))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c),Promise.all(l),Promise.all(h)]).then(function(u){const f=u[0],A=u[1],g=u[2],_=u[3],p=u[4],d=[];for(let x=0,E=f.length;x<E;x++){const b=f[x],L=A[x],B=g[x],w=_[x],D=p[x];if(b===void 0)continue;b.updateMatrix&&b.updateMatrix();const M=n._createAnimationTracks(b,L,B,w,D);if(M)for(let y=0;y<M.length;y++)d.push(M[y])}return new hb(r,void 0,d)})}createNodeMesh(e){const t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){const a=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let c=0,l=s.weights.length;c<l;c++)o.morphTargetInfluences[c]=s.weights[c]}),a})}loadNode(e){const t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),a=[],o=s.children||[];for(let l=0,h=o.length;l<h;l++)a.push(n.getDependency("node",o[l]));const c=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(a),c]).then(function(l){const h=l[0],u=l[1],f=l[2];f!==null&&h.traverse(function(A){A.isSkinnedMesh&&A.bind(f,tE)});for(let A=0,g=u.length;A<g;A++)h.add(u[A]);return h})}_loadNodeShallow(e){const t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],a=r.name?s.createUniqueName(r.name):"",o=[],c=s._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&o.push(c),r.camera!==void 0&&o.push(s.getDependency("camera",r.camera).then(function(l){return s._getNodeRef(s.cameraCache,r.camera,l)})),s._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){o.push(l)}),this.nodeCache[e]=Promise.all(o).then(function(l){let h;if(r.isBone===!0?h=new Bu:l.length>1?h=new Un:l.length===1?h=l[0]:h=new mt,h!==l[0])for(let u=0,f=l.length;u<f;u++)h.add(l[u]);if(r.name&&(h.userData.name=r.name,h.name=a),ri(h,r),r.extensions&&Ni(n,h,r),r.matrix!==void 0){const u=new Qe;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);return s.associations.has(h)||s.associations.set(h,{}),s.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],s=this,r=new Un;n.name&&(r.name=s.createUniqueName(n.name)),ri(r,n),n.extensions&&Ni(t,r,n);const a=n.nodes||[],o=[];for(let c=0,l=a.length;c<l;c++)o.push(s.getDependency("node",a[c]));return Promise.all(o).then(function(c){for(let h=0,u=c.length;h<u;h++)r.add(c[h]);const l=h=>{const u=new Map;for(const[f,A]of s.associations)(f instanceof Mn||f instanceof wt)&&u.set(f,A);return h.traverse(f=>{const A=s.associations.get(f);A!=null&&u.set(f,A)}),u};return s.associations=l(r),r})}_createAnimationTracks(e,t,n,s,r){const a=[],o=e.name?e.name:e.uuid,c=[];xi[r.path]===xi.weights?e.traverse(function(f){f.morphTargetInfluences&&c.push(f.name?f.name:f.uuid)}):c.push(o);let l;switch(xi[r.path]){case xi.weights:l=Bs;break;case xi.rotation:l=Rs;break;case xi.position:case xi.scale:l=Ds;break;default:n.itemSize===1?l=Bs:l=Ds;break}const h=s.interpolation!==void 0?X_[s.interpolation]:Ar,u=this._getArrayFromAccessor(n);for(let f=0,A=c.length;f<A;f++){const g=new l(c[f]+"."+xi[r.path],t.array,u,h);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),a.push(g)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=vc(t.constructor),s=new Float32Array(t.length);for(let r=0,a=t.length;r<a;r++)s[r]=t[r]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const s=this instanceof Rs?Y_:rf;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function iE(i,e,t){const n=e.attributes,s=new fi;if(n.POSITION!==void 0){const o=t.json.accessors[n.POSITION],c=o.min,l=o.max;if(c!==void 0&&l!==void 0){if(s.set(new U(c[0],c[1],c[2]),new U(l[0],l[1],l[2])),o.normalized){const h=vc(Ms[o.componentType]);s.min.multiplyScalar(h),s.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const o=new U,c=new U;for(let l=0,h=r.length;l<h;l++){const u=r[l];if(u.POSITION!==void 0){const f=t.json.accessors[u.POSITION],A=f.min,g=f.max;if(A!==void 0&&g!==void 0){if(c.setX(Math.max(Math.abs(A[0]),Math.abs(g[0]))),c.setY(Math.max(Math.abs(A[1]),Math.abs(g[1]))),c.setZ(Math.max(Math.abs(A[2]),Math.abs(g[2]))),f.normalized){const _=vc(Ms[f.componentType]);c.multiplyScalar(_)}o.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(o)}i.boundingBox=s;const a=new jn;s.getCenter(a.center),a.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=a}function Hh(i,e,t){const n=e.attributes,s=[];function r(a,o){return t.getDependency("accessor",a).then(function(c){i.setAttribute(o,c)})}for(const a in n){const o=xc[a]||a.toLowerCase();o in i.attributes||s.push(r(n[a],o))}if(e.indices!==void 0&&!i.index){const a=t.getDependency("accessor",e.indices).then(function(o){i.setIndex(o)});s.push(a)}return et.workingColorSpace!==Jt&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${et.workingColorSpace}" not supported.`),ri(i,e),iE(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?J_(i,e.targets,t):i})}var af=(function(){var i="b9H79Tebbbe8Fv9Gbb9Gvuuuuueu9Giuuub9Geueu9Giuuueuikqbeeedddillviebeoweuec:q;iekr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbeY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVbdE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbiL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtblK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbol79IV9Rbrq:P8Yqdbk;3sezu8Jjjjjbcj;eb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Radz1jjjbhwcj;abad9UhoaicefhldnadTmbaoc;WFbGgocjdaocjd6EhDcbhqinaqae9pmeaDaeaq9RaqaDfae6Egkcsfgocl4cifcd4hxdndndndnaoc9WGgmTmbcbhPcehsawcjdfhzalhHinaraH9Rax6midnaraHaxfgl9RcK6mbczhoinawcj;cbfaogifgoc9WfhOdndndndndnaHaic9WfgAco4fRbbaAci4coG4ciGPlbedibkaO9cb83ibaOcwf9cb83ibxikaOalRblalRbbgAco4gCaCciSgCE86bbaocGfalclfaCfgORbbaAcl4ciGgCaCciSgCE86bbaocVfaOaCfgORbbaAcd4ciGgCaCciSgCE86bbaoc7faOaCfgORbbaAciGgAaAciSgAE86bbaoctfaOaAfgARbbalRbegOco4gCaCciSgCE86bbaoc91faAaCfgARbbaOcl4ciGgCaCciSgCE86bbaoc4faAaCfgARbbaOcd4ciGgCaCciSgCE86bbaoc93faAaCfgARbbaOciGgOaOciSgOE86bbaoc94faAaOfgARbbalRbdgOco4gCaCciSgCE86bbaoc95faAaCfgARbbaOcl4ciGgCaCciSgCE86bbaoc96faAaCfgARbbaOcd4ciGgCaCciSgCE86bbaoc97faAaCfgARbbaOciGgOaOciSgOE86bbaoc98faAaOfgORbbalRbiglco4gAaAciSgAE86bbaoc99faOaAfgORbbalcl4ciGgAaAciSgAE86bbaoc9:faOaAfgORbbalcd4ciGgAaAciSgAE86bbaocufaOaAfgoRbbalciGglalciSglE86bbaoalfhlxdkaOalRbwalRbbgAcl4gCaCcsSgCE86bbaocGfalcwfaCfgORbbaAcsGgAaAcsSgAE86bbaocVfaOaAfgORbbalRbegAcl4gCaCcsSgCE86bbaoc7faOaCfgORbbaAcsGgAaAcsSgAE86bbaoctfaOaAfgORbbalRbdgAcl4gCaCcsSgCE86bbaoc91faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc4faOaAfgORbbalRbigAcl4gCaCcsSgCE86bbaoc93faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc94faOaAfgORbbalRblgAcl4gCaCcsSgCE86bbaoc95faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc96faOaAfgORbbalRbvgAcl4gCaCcsSgCE86bbaoc97faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc98faOaAfgORbbalRbogAcl4gCaCcsSgCE86bbaoc99faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc9:faOaAfgORbbalRbrglcl4gAaAcsSgAE86bbaocufaOaAfgoRbbalcsGglalcsSglE86bbaoalfhlxekaOal8Pbb83bbaOcwfalcwf8Pbb83bbalczfhlkdnaiam9pmbaiczfhoaral9RcL0mekkaiam6mialTmidnakTmbawaPfRbbhOcbhoazhiinaiawcj;cbfaofRbbgAce4cbaAceG9R7aOfgO86bbaiadfhiaocefgoak9hmbkkazcefhzaPcefgPad6hsalhHaPad9hmexvkkcbhlasceGmdxikalaxad2fhCdnakTmbcbhHcehsawcjdfhminaral9Rax6mialTmdalaxfhlawaHfRbbhOcbhoamhiinaiawcj;cbfaofRbbgAce4cbaAceG9R7aOfgO86bbaiadfhiaocefgoak9hmbkamcefhmaHcefgHad6hsaHad9hmbkaChlxikcbhocehsinaral9Rax6mdalTmealaxfhlaocefgoad6hsadao9hmbkaChlxdkcbhlasceGTmekc9:hoxikabaqad2fawcjdfakad2z1jjjb8Aawawcjdfakcufad2fadz1jjjb8Aakaqfhqalmbkc9:hoxekcbc99aral9Radcaadca0ESEhokavcj;ebf8Kjjjjbaok;yzeHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecjez:jjjjb8AavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhodnaeTmbcmcsaDceSEhkcbhxcbhmcbhDcbhicbhlindnaoaq9nmbc9:hoxikdndnawRbbgrc;Ve0mbavc;abfalarcl4cu7fcsGcitfgPydlhsaPydbhzdnarcsGgPak9pmbavaiarcu7fcsGcdtfydbaxaPEhraPThPdndnadcd9hmbabaDcetfgHaz87ebaHcdfas87ebaHclfar87ebxekabaDcdtfgHazBdbaHclfasBdbaHcwfarBdbkaxaPfhxavc;abfalcitfgHarBdbaHasBdlavaicdtfarBdbavc;abfalcefcsGglcitfgHazBdbaHarBdlaiaPfhialcefhlxdkdndnaPcsSmbamaPfaPc987fcefhmxekaocefhrao8SbbgPcFeGhHdndnaPcu9mmbarhoxekaocvfhoaHcFbGhHcrhPdninar8SbbgOcFbGaPtaHVhHaOcu9kmearcefhraPcrfgPc8J9hmbxdkkarcefhokaHce4cbaHceG9R7amfhmkdndnadcd9hmbabaDcetfgraz87ebarcdfas87ebarclfam87ebxekabaDcdtfgrazBdbarclfasBdbarcwfamBdbkavc;abfalcitfgramBdbarasBdlavaicdtfamBdbavc;abfalcefcsGglcitfgrazBdbaramBdlaicefhialcefhlxekdnarcpe0mbaxcefgOavaiaqarcsGfRbbgPcl49RcsGcdtfydbaPcz6gHEhravaiaP9RcsGcdtfydbaOaHfgsaPcsGgOEhPaOThOdndnadcd9hmbabaDcetfgzax87ebazcdfar87ebazclfaP87ebxekabaDcdtfgzaxBdbazclfarBdbazcwfaPBdbkavaicdtfaxBdbavc;abfalcitfgzarBdbazaxBdlavaicefgicsGcdtfarBdbavc;abfalcefcsGcitfgzaPBdbazarBdlavaiaHfcsGgicdtfaPBdbavc;abfalcdfcsGglcitfgraxBdbaraPBdlalcefhlaiaOfhiasaOfhxxekaxcbaoRbbgzEgAarc;:eSgrfhsazcsGhCazcl4hXdndnazcs0mbascefhOxekashOavaiaX9RcsGcdtfydbhskdndnaCmbaOcefhxxekaOhxavaiaz9RcsGcdtfydbhOkdndnarTmbaocefhrxekaocdfhrao8SbegHcFeGhPdnaHcu9kmbaocofhAaPcFbGhPcrhodninar8SbbgHcFbGaotaPVhPaHcu9kmearcefhraocrfgoc8J9hmbkaAhrxekarcefhrkaPce4cbaPceG9R7amfgmhAkdndnaXcsSmbarhPxekarcefhPar8SbbgocFeGhHdnaocu9kmbarcvfhsaHcFbGhHcrhodninaP8SbbgrcFbGaotaHVhHarcu9kmeaPcefhPaocrfgoc8J9hmbkashPxekaPcefhPkaHce4cbaHceG9R7amfgmhskdndnaCcsSmbaPhoxekaPcefhoaP8SbbgrcFeGhHdnarcu9kmbaPcvfhOaHcFbGhHcrhrdninao8SbbgPcFbGartaHVhHaPcu9kmeaocefhoarcrfgrc8J9hmbkaOhoxekaocefhokaHce4cbaHceG9R7amfgmhOkdndnadcd9hmbabaDcetfgraA87ebarcdfas87ebarclfaO87ebxekabaDcdtfgraABdbarclfasBdbarcwfaOBdbkavc;abfalcitfgrasBdbaraABdlavaicdtfaABdbavc;abfalcefcsGcitfgraOBdbarasBdlavaicefgicsGcdtfasBdbavc;abfalcdfcsGcitfgraABdbaraOBdlavaiazcz6aXcsSVfgicsGcdtfaOBdbaiaCTaCcsSVfhialcifhlkawcefhwalcsGhlaicsGhiaDcifgDae6mbkkcbc99aoaqSEhokavc;aef8Kjjjjbaok:llevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:Lvoeue99dud99eud99dndnadcl9hmbaeTmeindndnabcdfgd8Sbb:Yab8Sbbgi:Ygl:l:tabcefgv8Sbbgo:Ygr:l:tgwJbb;:9cawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai86bbdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad86bbdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad86bbabclfhbaecufgembxdkkaeTmbindndnabclfgd8Ueb:Yab8Uebgi:Ygl:l:tabcdfgv8Uebgo:Ygr:l:tgwJb;:FSawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai87ebdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad87ebdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad87ebabcwfhbaecufgembkkk;siliui99iue99dnaeTmbcbhiabhlindndnJ;Zl81Zalcof8UebgvciV:Y:vgoal8Ueb:YNgrJb;:FSNJbbbZJbbb:;arJbbbb9GEMgw:lJbbb9p9DTmbaw:OhDxekcjjjj94hDkalclf8Uebhqalcdf8UebhkabavcefciGaiVcetfaD87ebdndnaoak:YNgwJb;:FSNJbbbZJbbb:;awJbbbb9GEMgx:lJbbb9p9DTmbax:Ohkxekcjjjj94hkkabavcdfciGaiVcetfak87ebdndnaoaq:YNgoJb;:FSNJbbbZJbbb:;aoJbbbb9GEMgx:lJbbb9p9DTmbax:Ohqxekcjjjj94hqkabavcufciGaiVcetfaq87ebdndnJbbjZararN:tawawN:taoaoN:tgrJbbbbarJbbbb9GE:rJb;:FSNJbbbZMgr:lJbbb9p9DTmbar:Ohqxekcjjjj94hqkabavciGaiVcetfaq87ebalcwfhlaiclfhiaecufgembkkk9mbdnadcd4ae2geTmbinababydbgdcwtcw91:Yadce91cjjj;8ifcjjj98G::NUdbabclfhbaecufgembkkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik;LeeeudndnaeabVciGTmbabhixekdndnadcz9pmbabhixekabhiinaiaeydbBdbaiclfaeclfydbBdbaicwfaecwfydbBdbaicxfaecxfydbBdbaiczfhiaeczfheadc9Wfgdcs0mbkkadcl6mbinaiaeydbBdbaeclfheaiclfhiadc98fgdci0mbkkdnadTmbinaiaeRbb86bbaicefhiaecefheadcufgdmbkkabk;aeedudndnabciGTmbabhixekaecFeGc:b:c:ew2hldndnadcz9pmbabhixekabhiinaialBdbaicxfalBdbaicwfalBdbaiclfalBdbaiczfhiadc9Wfgdcs0mbkkadcl6mbinaialBdbaiclfhiadc98fgdci0mbkkdnadTmbinaiae86bbaicefhiadcufgdmbkkabkkkebcjwklz9Kbb",e="b9H79TebbbeKl9Gbb9Gvuuuuueu9Giuuub9Geueuikqbbebeedddilve9Weeeviebeoweuec:q;Aekr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbdY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVblE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtboK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbrL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbwl79IV9RbDq;t9tqlbzik9:evu8Jjjjjbcz9Rhbcbheincbhdcbhiinabcwfadfaicjuaead4ceGglE86bbaialfhiadcefgdcw9hmbkaec:q:yjjbfai86bbaecitc:q1jjbfab8Piw83ibaecefgecjd9hmbkk;h8JlHud97euo978Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Rad;8qbbcj;abad9UhoaicefhldnadTmbaoc;WFbGgocjdaocjd6EhwcbhDinaDae9pmeawaeaD9RaDawfae6Egqcsfgoc9WGgkci2hxakcethmaocl4cifcd4hPabaDad2fhscbhzdnincehHalhOcbhAdninaraO9RaP6miavcj;cbfaAak2fhCaOaPfhlcbhidnakc;ab6mbaral9Rc;Gb6mbcbhoinaCaofhidndndndndnaOaoco4fRbbgXciGPlbedibkaipxbbbbbbbbbbbbbbbbpklbxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklbalczfhlkdndndndndnaXcd4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklzxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklzalczfhlkdndndndndnaXcl4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklaxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklaalczfhlkdndndndndnaXco4Plbedibkaipxbbbbbbbbbbbbbbbbpkl8WxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WalclfaYpQbfaXc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WalcwfaYpQbfaXc:q:yjjbfRbbfhlxekaialpbbbpkl8Walczfhlkaoc;abfhiaocjefak0meaihoaral9Rc;Fb0mbkkdndnaiak9pmbaici4hoinaral9RcK6mdaCaifhXdndndndndnaOaico4fRbbaocoG4ciGPlbedibkaXpxbbbbbbbbbbbbbbbbpklbxikaXalpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaXalpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaXalpbbbpklbalczfhlkaocdfhoaiczfgiak6mbkkalTmbaAci6hHalhOaAcefgohAaoclSmdxekkcbhlaHceGmdkdnakTmbavcjdfazfhiavazfpbdbhYcbhXinaiavcj;cbfaXfgopblbgLcep9TaLpxeeeeeeeeeeeeeeeegQp9op9Hp9rgLaoakfpblbg8Acep9Ta8AaQp9op9Hp9rg8ApmbzeHdOiAlCvXoQrLgEaoamfpblbg3cep9Ta3aQp9op9Hp9rg3aoaxfpblbg5cep9Ta5aQp9op9Hp9rg5pmbzeHdOiAlCvXoQrLg8EpmbezHdiOAlvCXorQLgQaQpmbedibedibedibediaYp9UgYp9AdbbaiadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaEa8EpmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaLa8ApmwKDYq8AkEx3m5P8Es8FgLa3a5pmwKDYq8AkEx3m5P8Es8Fg8ApmbezHdiOAlvCXorQLgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaLa8ApmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfhiaXczfgXak6mbkkazclfgzad6mbkasavcjdfaqad2;8qbbavavcjdfaqcufad2fad;8qbbaqaDfhDc9:hoalmexikkc9:hoxekcbc99aral9Radcaadca0ESEhokavcj;kbf8Kjjjjbaokwbz:bjjjbk;uzeHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecje;8kbavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhodnaeTmbcmcsaDceSEhkcbhxcbhmcbhDcbhicbhlindnaoaq9nmbc9:hoxikdndnawRbbgrc;Ve0mbavc;abfalarcl4cu7fcsGcitfgPydlhsaPydbhzdnarcsGgPak9pmbavaiarcu7fcsGcdtfydbaxaPEhraPThPdndnadcd9hmbabaDcetfgHaz87ebaHcdfas87ebaHclfar87ebxekabaDcdtfgHazBdbaHclfasBdbaHcwfarBdbkaxaPfhxavc;abfalcitfgHarBdbaHasBdlavaicdtfarBdbavc;abfalcefcsGglcitfgHazBdbaHarBdlaiaPfhialcefhlxdkdndnaPcsSmbamaPfaPc987fcefhmxekaocefhrao8SbbgPcFeGhHdndnaPcu9mmbarhoxekaocvfhoaHcFbGhHcrhPdninar8SbbgOcFbGaPtaHVhHaOcu9kmearcefhraPcrfgPc8J9hmbxdkkarcefhokaHce4cbaHceG9R7amfhmkdndnadcd9hmbabaDcetfgraz87ebarcdfas87ebarclfam87ebxekabaDcdtfgrazBdbarclfasBdbarcwfamBdbkavc;abfalcitfgramBdbarasBdlavaicdtfamBdbavc;abfalcefcsGglcitfgrazBdbaramBdlaicefhialcefhlxekdnarcpe0mbaxcefgOavaiaqarcsGfRbbgPcl49RcsGcdtfydbaPcz6gHEhravaiaP9RcsGcdtfydbaOaHfgsaPcsGgOEhPaOThOdndnadcd9hmbabaDcetfgzax87ebazcdfar87ebazclfaP87ebxekabaDcdtfgzaxBdbazclfarBdbazcwfaPBdbkavaicdtfaxBdbavc;abfalcitfgzarBdbazaxBdlavaicefgicsGcdtfarBdbavc;abfalcefcsGcitfgzaPBdbazarBdlavaiaHfcsGgicdtfaPBdbavc;abfalcdfcsGglcitfgraxBdbaraPBdlalcefhlaiaOfhiasaOfhxxekaxcbaoRbbgzEgAarc;:eSgrfhsazcsGhCazcl4hXdndnazcs0mbascefhOxekashOavaiaX9RcsGcdtfydbhskdndnaCmbaOcefhxxekaOhxavaiaz9RcsGcdtfydbhOkdndnarTmbaocefhrxekaocdfhrao8SbegHcFeGhPdnaHcu9kmbaocofhAaPcFbGhPcrhodninar8SbbgHcFbGaotaPVhPaHcu9kmearcefhraocrfgoc8J9hmbkaAhrxekarcefhrkaPce4cbaPceG9R7amfgmhAkdndnaXcsSmbarhPxekarcefhPar8SbbgocFeGhHdnaocu9kmbarcvfhsaHcFbGhHcrhodninaP8SbbgrcFbGaotaHVhHarcu9kmeaPcefhPaocrfgoc8J9hmbkashPxekaPcefhPkaHce4cbaHceG9R7amfgmhskdndnaCcsSmbaPhoxekaPcefhoaP8SbbgrcFeGhHdnarcu9kmbaPcvfhOaHcFbGhHcrhrdninao8SbbgPcFbGartaHVhHaPcu9kmeaocefhoarcrfgrc8J9hmbkaOhoxekaocefhokaHce4cbaHceG9R7amfgmhOkdndnadcd9hmbabaDcetfgraA87ebarcdfas87ebarclfaO87ebxekabaDcdtfgraABdbarclfasBdbarcwfaOBdbkavc;abfalcitfgrasBdbaraABdlavaicdtfaABdbavc;abfalcefcsGcitfgraOBdbarasBdlavaicefgicsGcdtfasBdbavc;abfalcdfcsGcitfgraABdbaraOBdlavaiazcz6aXcsSVfgicsGcdtfaOBdbaiaCTaCcsSVfhialcifhlkawcefhwalcsGhlaicsGhiaDcifgDae6mbkkcbc99aoaqSEhokavc;aef8Kjjjjbaok:llevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:EPliuo97eue978Jjjjjbca9Rhidndnadcl9hmbdnaec98GglTmbcbhvabhdinadadpbbbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDpxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpkbbadczfhdavclfgval6mbkkalae9pmeaiaeciGgvcdtgdVcbczad9R;8kbaiabalcdtfglad;8qbbdnavTmbaiaipblbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDpxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpklbkalaiad;8qbbskdnaec98GgxTmbcbhvabhdinadczfglalpbbbgopxbbbbbbFFbbbbbbFFgkp9oadpbbbgDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eaDaopmbediwDqkzHOAKY8AEgoczp:Sep;6egrp;Geaoczp:Reczp:Sep;6egwp;Gep;Kep;Legopxb;:FSb;:FSb;:FSb;:FSawaopxbbbbbbbbbbbbbbbbp:2egqawpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegwawp;Meaoaop;Mearaqaramp9op9rp;Kegoaop;Mep;Kep;Kep;Jep;Negrp;Mepxbbn0bbn0bbn0bbn0gqp;Keczp:Reawarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9op9qgwaoarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogopmwDKYqk8AExm35Ps8E8Fp9qpkbbadaDakp9oawaopmbezHdiOAlvCXorQLp9qpkbbadcafhdavclfgvax6mbkkaxae9pmbaiaeciGgvcitgdfcbcaad9R;8kbaiabaxcitfglad;8qbbdnavTmbaiaipblzgopxbbbbbbFFbbbbbbFFgkp9oaipblbgDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eaDaopmbediwDqkzHOAKY8AEgoczp:Sep;6egrp;Geaoczp:Reczp:Sep;6egwp;Gep;Kep;Legopxb;:FSb;:FSb;:FSb;:FSawaopxbbbbbbbbbbbbbbbbp:2egqawpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegwawp;Meaoaop;Mearaqaramp9op9rp;Kegoaop;Mep;Kep;Kep;Jep;Negrp;Mepxbbn0bbn0bbn0bbn0gqp;Keczp:Reawarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9op9qgwaoarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogopmwDKYqk8AExm35Ps8E8Fp9qpklzaiaDakp9oawaopmbezHdiOAlvCXorQLp9qpklbkalaiad;8qbbkk;4wllue97euv978Jjjjjbc8W9Rhidnaec98GglTmbcbhvabhoinaiaopbbbgraoczfgwpbbbgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklbaopxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaqakp;Mearp;Keczp:ReaDakp;Mearp;Keamp9op9qgkpmbezHdiOAlvCXorQLgrp5baipblbpEb:T:j83ibaocwfarp5eaipblbpEe:T:j83ibawaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblbpEd:T:j83ibaocKfakp5eaipblbpEi:T:j83ibaocafhoavclfgval6mbkkdnalae9pmbaiaeciGgvcitgofcbcaao9R;8kbaiabalcitfgwao;8qbbdnavTmbaiaipblbgraipblzgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklaaipxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaqakp;Mearp;Keczp:ReaDakp;Mearp;Keamp9op9qgkpmbezHdiOAlvCXorQLgrp5baipblapEb:T:j83ibaiarp5eaipblapEe:T:j83iwaiaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblapEd:T:j83izaiakp5eaipblapEi:T:j83iKkawaiao;8qbbkk:Pddiue978Jjjjjbc;ab9Rhidnadcd4ae2glc98GgvTmbcbhdabheinaeaepbbbgocwp:Recwp:Sep;6eaocep:SepxbbjZbbjZbbjZbbjZp:UepxbbjFbbjFbbjFbbjFp9op;Mepkbbaeczfheadclfgdav6mbkkdnaval9pmbaialciGgdcdtgeVcbc;abae9R;8kbaiabavcdtfgvae;8qbbdnadTmbaiaipblbgocwp:Recwp:Sep;6eaocep:SepxbbjZbbjZbbjZbbjZp:UepxbbjFbbjFbbjFbbjFp9op;Mepklbkavaiae;8qbbkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaikkkebcjwklz9Tbb",t=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,3,2,0,0,5,3,1,0,1,12,1,0,10,22,2,12,0,65,0,65,0,65,0,252,10,0,0,11,7,0,65,0,253,15,26,11]),n=new Uint8Array([32,0,65,2,1,106,34,33,3,128,11,4,13,64,6,253,10,7,15,116,127,5,8,12,40,16,19,54,20,9,27,255,113,17,42,67,24,23,146,148,18,14,22,45,70,69,56,114,101,21,25,63,75,136,108,28,118,29,73,115]);if(typeof WebAssembly!="object")return{supported:!1};var s=WebAssembly.validate(t)?e:i,r,a=WebAssembly.instantiate(o(s),{}).then(function(d){r=d.instance,r.exports.__wasm_call_ctors()});function o(d){for(var x=new Uint8Array(d.length),E=0;E<d.length;++E){var b=d.charCodeAt(E);x[E]=b>96?b-97:b>64?b-39:b+4}for(var L=0,E=0;E<d.length;++E)x[L++]=x[E]<60?n[x[E]]:(x[E]-60)*64+x[++E];return x.buffer.slice(0,L)}function c(d,x,E,b,L,B){var w=r.exports.sbrk,D=E+3&-4,M=w(D*b),y=w(L.length),T=new Uint8Array(r.exports.memory.buffer);T.set(L,y);var j=d(M,E,b,y,L.length);if(j==0&&B&&B(M,D,b),x.set(T.subarray(M,M+E*b)),w(M-w(0)),j!=0)throw new Error("Malformed buffer data: "+j)}var l={NONE:"",OCTAHEDRAL:"meshopt_decodeFilterOct",QUATERNION:"meshopt_decodeFilterQuat",EXPONENTIAL:"meshopt_decodeFilterExp"},h={ATTRIBUTES:"meshopt_decodeVertexBuffer",TRIANGLES:"meshopt_decodeIndexBuffer",INDICES:"meshopt_decodeIndexSequence"},u=[],f=0;function A(d){var x={object:new Worker(d),pending:0,requests:{}};return x.object.onmessage=function(E){var b=E.data;x.pending-=b.count,x.requests[b.id][b.action](b.value),delete x.requests[b.id]},x}function g(d){for(var x="var instance; var ready = WebAssembly.instantiate(new Uint8Array(["+new Uint8Array(o(s))+"]), {}).then(function(result) { instance = result.instance; instance.exports.__wasm_call_ctors(); });self.onmessage = workerProcess;"+c.toString()+p.toString(),E=new Blob([x],{type:"text/javascript"}),b=URL.createObjectURL(E),L=0;L<d;++L)u[L]=A(b);URL.revokeObjectURL(b)}function _(d,x,E,b,L){for(var B=u[0],w=1;w<u.length;++w)u[w].pending<B.pending&&(B=u[w]);return new Promise(function(D,M){var y=new Uint8Array(E),T=f++;B.pending+=d,B.requests[T]={resolve:D,reject:M},B.object.postMessage({id:T,count:d,size:x,source:y,mode:b,filter:L},[y.buffer])})}function p(d){a.then(function(){var x=d.data;try{var E=new Uint8Array(x.count*x.size);c(r.exports[x.mode],E,x.count,x.size,x.source,r.exports[x.filter]),self.postMessage({id:x.id,count:x.count,action:"resolve",value:E},[E.buffer])}catch(b){self.postMessage({id:x.id,count:x.count,action:"reject",value:b})}})}return{ready:a,supported:!0,useWorkers:function(d){g(d)},decodeVertexBuffer:function(d,x,E,b,L){c(r.exports.meshopt_decodeVertexBuffer,d,x,E,b,r.exports[l[L]])},decodeIndexBuffer:function(d,x,E,b){c(r.exports.meshopt_decodeIndexBuffer,d,x,E,b)},decodeIndexSequence:function(d,x,E,b){c(r.exports.meshopt_decodeIndexSequence,d,x,E,b)},decodeGltfBuffer:function(d,x,E,b,L,B){c(r.exports[h[L]],d,x,E,b,r.exports[l[B]])},decodeGltfBufferAsync:function(d,x,E,b,L){return u.length>0?_(d,x,E,h[b],l[L]):a.then(function(){var B=new Uint8Array(d*x);return c(r.exports[h[b]],B,d,x,E,r.exports[l[L]]),B})}}})();function sE(i,e){const t=new bt,n=i.attributes.position.count;for(const[s,r]of[["position",3],["normal",3],["color",3]]){const a=i.getAttribute(s),o=new Float32Array(n*r);for(let c=0;c<n;c++)o[c*r]=a?a.getX(c):1,o[c*r+1]=a?a.getY(c):1,o[c*r+2]=a?a.getZ(c):1;t.setAttribute(s,new Mt(o,r))}return i.index&&t.setIndex(Array.from(i.index.array)),t.applyMatrix4(e),t}function Vh(i,e,t){i.updateMatrixWorld(!0);const n=(i.parent??i).matrixWorld.clone().invert(),s={};i.traverse(o=>{const c=o;if(!c.isMesh)return;const l=c.material.name.includes("lead")?"lead":"matte";(s[l]||=[]).push(sE(c.geometry,new Qe().multiplyMatrices(n,c.matrixWorld)))});const r=new Un;let a=0;for(const[o,c]of Object.entries(s)){const l=Sa(c);c.forEach(u=>u.dispose());const h=new rt(l,e[o]);h.castShadow=h.receiveShadow=t,h.name=o,r.add(h),a+=(l.index?l.index.count:l.attributes.position.count)/3}return{g:r,tris:a}}async function rE(i,e="ayasofya"){return(await fetch(`${i}models/${e}.anchor.json`)).json()}async function aE(i){const e=await rE(i.base),n=await new nf().setMeshoptDecoder(af).loadAsync(`${i.base}models/${e.model_web}`),s=i.shadows??!0,r={matte:new Xi({name:"ayasofya_matte",vertexColors:!0,roughness:.9,metalness:0,side:yt}),lead:new Xi({name:"ayasofya_lead_gold",vertexColors:!0,roughness:.68,metalness:0,side:yt})},a=new va;a.name="Ayasofya";const o=[],c=n.scene.getObjectByName("LOD0"),l=n.scene.getObjectByName("LOD1");if(!c)throw new Error("ayasofya: LOD0 missing");{const{g:f,tris:A}=Vh(c,r,s);a.addLevel(f,0),o.push(A)}if(l){const{g:f,tris:A}=Vh(l,r,s);a.addLevel(f,i.lodDistance??900),o.push(A)}n.scene.traverse(f=>{const A=f;A.isMesh&&A.geometry.dispose()});const[h,u]=i.project(e.anchor.lon,e.anchor.lat);return a.position.set(h,i.groundY?i.groundY(h,u):0,u),a.rotation.y=e.three_rotation_y_rad,a.scale.setScalar(e.scale_m),a.userData={id:e.id,source:e.source},{object:a,anchor:e,triangles:o,materials:[r.matte,r.lead]}}function oE(i,e){const t=new bt,n=i.attributes.position.count;for(const[s,r]of[["position",3],["normal",3],["color",3]]){const a=i.getAttribute(s),o=new Float32Array(n*r);for(let c=0;c<n;c++)o[c*r]=a?a.getX(c):1,o[c*r+1]=a?a.getY(c):1,o[c*r+2]=a?a.getZ(c):1;t.setAttribute(s,new Mt(o,r))}return i.index&&t.setIndex(Array.from(i.index.array)),t.applyMatrix4(e),t}function Wh(i,e,t){i.updateMatrixWorld(!0);const n=(i.parent??i).matrixWorld.clone().invert(),s={};i.traverse(o=>{const c=o;if(!c.isMesh)return;const l=c.material.name.includes("lead")?"lead":"matte";(s[l]||=[]).push(oE(c.geometry,new Qe().multiplyMatrices(n,c.matrixWorld)))});const r=new Un;let a=0;for(const[o,c]of Object.entries(s)){const l=Sa(c);c.forEach(u=>u.dispose());const h=new rt(l,e[o]);h.castShadow=h.receiveShadow=t,h.name=o,r.add(h),a+=(l.index?l.index.count:l.attributes.position.count)/3}return{g:r,tris:a}}async function $i(i,e){const t=await(await fetch(`${e.base}models/${i}.anchor.json`)).json(),n=await new nf().setMeshoptDecoder(af).loadAsync(`${e.base}models/${t.model_web}`),s=e.shadows??!0,r={matte:new Xi({name:`${i}_matte`,vertexColors:!0,roughness:.9,metalness:0,side:yt}),lead:new Xi({name:`${i}_lead_gold`,vertexColors:!0,roughness:.68,metalness:0,side:yt})},a=new va;a.name=t.name||i;const o=[],c=n.scene.getObjectByName("LOD0"),l=n.scene.getObjectByName("LOD1");if(!c)throw new Error(`${i}: LOD0 missing`);{const{g:f,tris:A}=Wh(c,r,s);a.addLevel(f,0),o.push(A)}if(l){const{g:f,tris:A}=Wh(l,r,s);a.addLevel(f,e.lodDistance??900),o.push(A)}n.scene.traverse(f=>{const A=f;A.isMesh&&A.geometry.dispose()});const[h,u]=e.project(t.anchor.lon,t.anchor.lat);return a.position.set(h,e.groundY?e.groundY(h,u):0,u),a.rotation.y=t.three_rotation_y_rad,a.scale.setScalar(t.scale_m),a.userData={id:t.id,source:t.source},{object:a,anchor:t,triangles:o,materials:[r.matte,r.lead]}}const cE=i=>$i("topkapi",i),lE=i=>$i("sultanahmet",i),hE=i=>$i("yenicami",i),uE=i=>$i("rustempasa",i),Lo=5;function fE(i){const e=i.attributes.position,t=e.count,n=new Float32Array(t*2);for(let a=0;a<t;a++){const o=e.getX(a),c=e.getY(a),l=e.getZ(a),h=Math.hypot(o,l);n[a*2]=Math.atan2(o,l)*Math.max(h,1)/Lo,n[a*2+1]=c/Lo}const s=i.index?i.index.array:null,r=s?s.length/3:t/3;for(let a=0;a<r;a++){const o=[0,1,2].map(h=>s?s[a*3+h]:a*3+h),c=o.map(h=>n[h*2]);if(Math.max(...c)-Math.min(...c)>2){const h=Math.max(1,...o.map(f=>Math.hypot(e.getX(f),e.getZ(f)))),u=2*Math.PI*h/Lo;for(const f of o)n[f*2]<0&&(n[f*2]+=u)}}i.setAttribute("uv",new Mt(n,2))}async function dE(i){const e=await $i("galata",i),t=await new Wc().loadAsync(`${i.base}tex/galata_stone_512.jpg`);t.wrapS=t.wrapT=gn,t.colorSpace=_t,t.anisotropy=4;const n=e.materials[0];return n.map=t,n.needsUpdate=!0,e.object.traverse(s=>{const r=s;r.isMesh&&r.material===n&&fE(r.geometry)}),e}function AE(i,e){const t=i.attributes.position,n=t.count,s=new Float32Array(n*2),r=new U,a=new U,o=new U,c=new U,l=new U,h=i.index?i.index.array:null,u=h?h.length/3:n/3;for(let f=0;f<u;f++){const A=[0,1,2].map(x=>h?h[f*3+x]:f*3+x);r.fromBufferAttribute(t,A[0]),a.fromBufferAttribute(t,A[1]),o.fromBufferAttribute(t,A[2]);const g=c.subVectors(a,r).cross(l.subVectors(o,r)),_=Math.abs(g.x),p=Math.abs(g.y),d=Math.abs(g.z);for(const x of A){const E=t.getX(x),b=t.getY(x),L=t.getZ(x);p>_&&p>d?(s[x*2]=E/e,s[x*2+1]=L/e):_>d?(s[x*2]=L/e,s[x*2+1]=b/e):(s[x*2]=E/e,s[x*2+1]=b/e)}}i.setAttribute("uv",new Mt(s,2))}const pE={nusretiye:["stone_ashlar_512.jpg",4],ayatriada:["stone_ashlar_512.jpg",4],stantoine:["brick_red_512.jpg",2.4]};async function gE(i,e){const t=await $i(i,e),[n,s]=pE[i],r=await new Wc().loadAsync(`${e.base}tex/${n}`);r.wrapS=r.wrapT=gn,r.colorSpace=_t,r.anisotropy=4;const a=t.materials[0];return a.map=r,a.needsUpdate=!0,t.object.traverse(o=>{const c=o;c.isMesh&&c.material===a&&AE(c.geometry,s)}),t}function mE(i,e,t){const n=[],s=[],r=new Me,a=(ie,me,xe,ve)=>{n.push(...ie,...me,...xe),r.set(ve);for(let Y=0;Y<3;Y++)s.push(r.r,r.g,r.b)},o=ie=>{const me=Math.sin(ie*127.1+311.7)*43758.5453;return me-Math.floor(me)},c=["#b8643f","#c06a43","#ad5c3b","#c27350","#b05f40"],l="#d9cbb4",h=ie=>{const me=[];for(let xe=0;xe<ie.length;xe+=2)me.push(new De(ie[xe],ie[xe+1]));return ui.isClockWise(me)&&me.reverse(),me},u=h(i.outline);let f=0;for(const ie of u)f+=e(ie.x,ie.y);f/=u.length;const A=(ie,me)=>e(ie,me),g=7;((ie,me,xe,ve)=>{for(let Y=0;Y<ie.length;Y++){const de=ie[Y],Ce=ie[(Y+1)%ie.length],v=A(de.x,de.y),P=A(Ce.x,Ce.y);a([de.x,v+me,de.y],[Ce.x,P+me,Ce.y],[Ce.x,P+xe,Ce.y],ve),a([de.x,v+me,de.y],[Ce.x,P+xe,Ce.y],[de.x,v+xe,de.y],ve)}})(u,-1,g,l);const p=[],d=[];i.cells.forEach((ie,me)=>{const xe=h(ie.p);let ve=0,Y=0;for(const K of xe)ve+=K.x,Y+=K.y;ve/=xe.length,Y/=xe.length;const de=c[Math.floor(o(me)*c.length)],Ce=new Me(de).multiplyScalar(.82),v=g+(o(me*3.3)-.5)*1.2,P=A(ve,Y);let q=0;for(const K of xe)q=Math.max(q,Math.hypot(K.x-ve,K.y-Y));const k=Math.min(2.6,.45*q);if(ie.r&&xe.length===4){const K=Math.cos(ie.a),X=Math.sin(ie.a);let ce=1e9,R=-1e9;for(const re of xe){const O=(re.x-ve)*K+(re.y-Y)*X;ce=Math.min(ce,O),R=Math.max(R,O)}const be=R-ce,ne=Math.min(be*.3,2.5),oe=[ve+K*(ce+ne),P+v+k,Y+X*(ce+ne)],W=[ve+K*(R-ne),P+v+k,Y+X*(R-ne)];for(let re=0;re<4;re++){const O=xe[re],C=xe[(re+1)%4],m=A(O.x,O.y)+v,S=A(C.x,C.y)+v,F=(O.x-ve)*K+(O.y-Y)*X,Q=(C.x-ve)*K+(C.y-Y)*X,N=F<0?oe:W,G=Q<0?oe:W,H=re%2?de:Ce;N===G?a([O.x,m,O.y],[C.x,S,C.y],N,H):(a([O.x,m,O.y],[C.x,S,C.y],G,H),a([O.x,m,O.y],G,N,H))}}else{const K=[ve,P+v+k*.8,Y];for(let X=0;X<xe.length;X++){const ce=xe[X],R=xe[(X+1)%xe.length];a([ce.x,A(ce.x,ce.y)+v,ce.y],[R.x,A(R.x,R.y)+v,R.y],K,X%2?de:Ce)}}o(me*7.1)<.22&&p.push([ve+(o(me*9.1)-.5)*q*.6,P+v+k*.5,Y+(o(me*4.7)-.5)*q*.6,1.3+o(me)*.9]),o(me*5.9)<(t?.15:.3)&&d.push([ve+(o(me*2.1)-.5)*q,P+v+k*.4,Y+(o(me*6.3)-.5)*q])});const x=i.sw/2+.6;for(const ie of i.streets)for(let me=0;me<ie.length-1;me++){const[xe,ve]=ie[me],[Y,de]=ie[me+1],Ce=Math.hypot(Y-xe,de-ve);if(Ce<.5)continue;const v=-(de-ve)/Ce*x,P=(Y-xe)/Ce*x,q=A(xe,ve),k=A(Y,de),K=g+.6,X=K+1.6,ce=[xe+v,q+K,ve+P],R=[Y+v,k+K,de+P],be=[xe-v,q+K,ve-P],ne=[Y-v,k+K,de-P],oe=[xe,q+X,ve],W=[Y,k+X,de];a(ce,R,W,"#c98a68"),a(ce,W,oe,"#c98a68"),a(ne,be,oe,"#b97a5c"),a(ne,oe,W,"#b97a5c");const re=-(de-ve)/Ce*.45,O=(Y-xe)/Ce*.28,C=[xe+re,q+X+.08,ve+O],m=[Y+re,k+X+.08,de+O],S=[Y-re,k+X+.08,de-O],F=[xe-re,q+X+.08,ve-O];a(C,m,S,"#e6dccd"),a(C,S,F,"#e6dccd")}const E=new bt;E.setAttribute("position",new nt(n,3)),E.setAttribute("color",new nt(s,3)),E.computeVertexNormals();const b=new Un;b.name="kapalicarsi";const L=new rt(E,new tt({vertexColors:!0,side:yt}));L.castShadow=L.receiveShadow=!0,b.add(L);const B=new tt({color:"#b7bcc2"}),w=new tt({color:"#cfc6b6"}),D=new zi(1,14,5,0,Math.PI*2,0,Math.PI/2),M=new Yt(1,1,1),y=i.beds.reduce((ie,me)=>ie+me.nc*me.nr+4,0),T=new Ct(D,B,y+p.length),j=new Qe,V=new St,he=new U(0,1,0),fe=new U,ae=new U;let se=0;for(const ie of i.beds){const me=A(ie.x,ie.z),xe=10.5;V.setFromAxisAngle(he,-ie.a);const ve=new rt(M,w);ve.position.set(ie.x,me+xe/2-1,ie.z),ve.scale.set(ie.L,xe,ie.W),ve.quaternion.copy(V),ve.castShadow=ve.receiveShadow=!0,b.add(ve);const Y=ie.L/ie.nc,de=ie.W/ie.nr,Ce=Math.min(Y,de)*.44,v=Math.cos(ie.a),P=Math.sin(ie.a);for(let q=0;q<ie.nc;q++)for(let k=0;k<ie.nr;k++){const K=-ie.L/2+Y*(q+.5),X=-ie.W/2+de*(k+.5);T.setMatrixAt(se++,j.compose(fe.set(ie.x+v*K-P*X,me+xe-1,ie.z+P*K+v*X),V,ae.set(Ce,Ce*.75,Ce)))}for(const[q,k]of[[-1,-1],[1,-1],[1,1],[-1,1]]){const K=q*(ie.L/2-1.5),X=k*(ie.W/2-1.5);T.setMatrixAt(se++,j.compose(fe.set(ie.x+v*K-P*X,me+xe+.4,ie.z+P*K+v*X),V,ae.set(1.8,1.8,1.8)))}}const te=se;for(const ie of p)T.setMatrixAt(se++,j.compose(fe.set(ie[0],ie[1],ie[2]),V.identity(),ae.set(ie[3],ie[3]*.8,ie[3])));T.count=se,T.castShadow=T.receiveShadow=!0,T.computeBoundingSphere(),b.add(T);const ge=new Ct(M,new tt({color:"#8d6a55"}),Math.max(1,d.length));return d.forEach((ie,me)=>ge.setMatrixAt(me,j.compose(fe.set(ie[0],ie[1]+.9,ie[2]),V.identity(),ae.set(.8,1.8,.8)))),ge.count=d.length,ge.computeBoundingSphere(),b.add(ge),{grp:b,detail:[ge],dome:T,nBig:te,outline:i.outline,tris:n.length/9}}const nn=new URLSearchParams(location.search),it=Number(nn.get("step")||99),bE=performance.now(),of={};window.__prof=of;const Xs=i=>{of[i]=Math.round(performance.now()-bE)},mn=nn.get("look")!=="0",yc=nn.get("roofs")!=="1",It=mn&&yc&&nn.get("walls")!=="0",Dt=It&&nn.get("colour")!=="0",ze=window.innerWidth<600,_E=mn&&(nn.get("q")?nn.get("q")==="high":!ze),zt=new S0({antialias:!0});zt.setPixelRatio(Math.min(window.devicePixelRatio,2));zt.setSize(window.innerWidth,window.innerHeight);zt.shadowMap.enabled=it>=2;zt.shadowMap.type=mn&&!ze?Ic:Kh;zt.outputColorSpace=_t;mn&&(zt.toneMapping=nn.get("tm")==="agx"?Bc:Tc,zt.toneMappingExposure=Number(nn.get("exp")||1));document.getElementById("app").appendChild(zt.domElement);const We=new I0,EE=new Me("#f1dcc4");function jh(i,e){const t=document.createElement("canvas");t.width=2,t.height=256;const n=t.getContext("2d"),s=n.createLinearGradient(0,0,0,256);s.addColorStop(0,i),s.addColorStop(.5,"#e6b4a3"),s.addColorStop(1,e),n.fillStyle=s,n.fillRect(0,0,2,256);const r=new Q0(t);return r.colorSpace=_t,r}const cf=new Me("#f3ead9");We.background=cf.clone();We.fog=new La(cf.clone(),11e3,28e3);const lf=It?ze?32:22:ze?50:35,ms=Math.tan(Xt.degToRad(lf/2))/Math.tan(Xt.degToRad(17.5)),Wn=new tn(lf,window.innerWidth/window.innerHeight,20,4e4),rn=new Yb(Wn,zt.domElement);rn.enableDamping=!0;rn.dampingFactor=.08;rn.maxPolarAngle=1.2;rn.minDistance=60;rn.maxDistance=It?22e3:14e3;rn.screenSpacePanning=!1;rn.zoomToCursor=!0;const xn=mn?new Ch("#b0a8b8","#7a6a5c",.95):new Ch("#fff6e8","#c9b79a",it>=2?1.6:2.4);We.add(xn);const kt=new Qu("#fff0d8",it>=2?2.2:.9);kt.castShadow=it>=2;kt.shadow.mapSize.set(ze?1024:mn?4096:2048,ze?1024:mn?4096:2048);const aa=650;Object.assign(kt.shadow.camera,{left:-aa,right:aa,top:aa,bottom:-aa,near:10,far:6e3});kt.shadow.bias=-6e-4;mn&&!ze&&(kt.shadow.radius=It?4:2,kt.shadow.blurSamples=It?12:8);kt.shadow.normalBias=.6;We.add(kt,kt.target);let hf=new U(.5,.6,.4).normalize();const uf={value:0};function Mc(i){const e=Xt.clamp((i-7.2)/11.6,0,1),t=Xt.degToRad(Math.max(2,(It?50:38)*Math.sin(Math.PI*e))),n=Xt.degToRad(105+150*e);hf=new U(Math.sin(n)*Math.cos(t),Math.sin(t),-Math.cos(n)*Math.cos(t)).normalize();const s=1-Math.min(1,Math.sin(t)/Math.sin(Xt.degToRad(30)));if(mn){kt.color.set("#ffcf90").lerp(new Me("#ff9a50"),s*.55);const o=It?Xt.smoothstep(i,18.2,19.6):0;kt.intensity=(It?Xt.lerp(Dt?5.5:4.7,4.7,o):5.6)-s*1.6,xn.intensity=(It?1.45:.95)-s*.2,xn.color.set("#b0a8b8"),xn.groundColor.set("#7a6a5c"),It&&(xn.color.lerp(new Me("#d0a585"),s*.6),xn.groundColor.lerp(new Me("#9a7458"),s*.6),xn.intensity=Xt.lerp(Dt?1.12:1.45,1.45,o)+s*.15);const c=It?Xt.smoothstep(i,18.2,19.6):0;uf.value=c,EE.set("#ea9b7d");const l=We.background;It&&c>0?(kt.intensity*=1-.85*c,xn.intensity*=1-.55*c,xn.color.lerp(new Me("#34406a"),c),xn.groundColor.lerp(new Me("#1c2236"),c),We.background=jh(new Me("#b5b1d0").lerp(new Me("#0e1430"),c).getStyle(),new Me("#ea9b7d").lerp(new Me("#2a3358"),c).getStyle())):We.background=jh("#b5b1d0","#ea9b7d"),l instanceof wt&&l.dispose(),We.fog.color.set("#a49ca2"),It&&We.fog.color.lerp(new Me("#e0a07f"),s*.6).lerp(new Me("#252c48"),c);const h=document.getElementById("hourtxt");h&&(h.textContent=`${String(Math.floor(i)).padStart(2,"0")}:${String(Math.round(i%1*60)).padStart(2,"0")}`);return}kt.color.set("#fff3e0").lerp(new Me("#ff9a4d"),s*.85),kt.intensity=2.8-s*1,xn.intensity=1.15-s*.35,xn.color.set("#fff6e8").lerp(new Me("#ffd2a8"),s*.7);const r=new Me("#f3ead9").lerp(new Me("#f1c9a3"),s*.6);We.background.copy(r),We.fog.color.copy(r);const a=document.getElementById("hourtxt");a&&(a.textContent=`${String(Math.floor(i)).padStart(2,"0")}:${String(Math.round(i%1*60)).padStart(2,"0")}`)}const ff=It?14:16.25;Mc(it>=5?mn?ff:15.5:14);const xE=1.2;let vt=null;const Ia=[],yi=[467.7,1011.1,455.9,1012.6,349.7,1092.8,287.3,1163.4,273.4,1182.5,249.9,1290.8,255.3,1300.3,361.9,1370.5,392.5,1385.8,436,1398,441.8,1394.8,572.2,1142.1,585.8,1064.4,563.1,1039.6,543.3,1027.9],Hi=45,wi=(()=>{let i=1e9,e=1e9,t=-1e9,n=-1e9;for(let s=0;s<yi.length;s+=2)i=Math.min(i,yi[s]),t=Math.max(t,yi[s]),e=Math.min(e,yi[s+1]),n=Math.max(n,yi[s+1]);return[i,e,t,n]})();function Cc(i,e){if(i<wi[0]||i>wi[2]||e<wi[1]||e>wi[3])return!1;const t=yi;let n=!1;for(let s=0,r=t.length-2;s<t.length;r=s,s+=2)t[s+1]>e!=t[r+1]>e&&i<(t[r]-t[s])*(e-t[s+1])/(t[r+1]-t[s+1])+t[s]&&(n=!n);return n}function vE(i,e){const t=yi;let n=1e9;for(let s=0,r=t.length-2;s<t.length;r=s,s+=2){const a=t[r],o=t[r+1],c=t[s]-a,l=t[s+1]-o,h=Math.max(0,Math.min(1,((i-a)*c+(e-o)*l)/(c*c+l*l)));n=Math.min(n,Math.hypot(i-a-c*h,e-o-l*h))}return n}function Ne(i,e){let t=lr(i,e);if(vt&&i>wi[0]-40&&i<wi[2]+40&&e>wi[1]-40&&e<wi[3]+40){if(Cc(i,e))return Hi;if(t>Hi){const s=vE(i,e);if(s<40){const r=1-s/40,a=r*r*(3-2*r);t+=(Hi-t)*a}}}if(!Ia.length)return t;let n=t;for(const s of Ia){const r=Math.hypot(i-s.x,e-s.z);if(r>=s.r+s.b)continue;const a=r<=s.r?1:1-(r-s.r)/s.b,o=a*a*(3-2*a);n=n+(s.h-n)*o}return n}function oa(i,e,t,n=25){if(!vt)return;let s=0,r=0;for(let a=0;a<16;a++)for(const o of[0,.5,1])s+=lr(i+Math.cos(a*.3927)*t*o,e+Math.sin(a*.3927)*t*o),r++;Ia.push({x:i,z:e,r:t,b:n,h:s/r})}function lr(i,e){if(!vt)return 0;const t=Xt.clamp((i-vt.x0)/vt.step,0,vt.nx-1.001),n=Xt.clamp((e-vt.z0)/vt.step,0,vt.nz-1.001),s=Math.floor(t),r=Math.floor(n),a=t-s,o=n-r,c=vt.nx,l=vt.h;return xE*((l[r*c+s]*(1-a)+l[r*c+s+1]*a)*(1-o)+(l[(r+1)*c+s]*(1-a)+l[(r+1)*c+s+1]*a)*o)}new Me;class bs{pos=[];col=[];tex=!1;wa=[];wb=[];wl=0;rl=6;seed=0;base=0;wh=0;st=0;ridge=0;tri(e,t,n,s,r=!1,a,o=0,c=0){if(r){const l=t[0]-e[0];t[1]-e[1];const h=t[2]-e[2],u=n[0]-e[0];n[1]-e[1];const f=n[2]-e[2];if(h*u-l*f<0){const g=t;t=n,n=g,a&&(a=[a[0],a[2],a[1]])}}this.pos.push(...e,...t,...n);for(let l=0;l<3;l++)this.col.push(s.r,s.g,s.b);if(this.tex){const l=[e,t,n],h=o===0?this.rl:this.wl;for(let u=0;u<3;u++){const f=a?a[u]:[l[u][0],l[u][2]];this.wa.push(f[0],f[1],h,this.seed),o===0?this.wb.push(this.wh,a&&a[u].length>2?a[u][2]:-1,0,this.ridge):this.wb.push(this.wh,c,o,this.st)}}}geometry(){const e=new bt;return e.setAttribute("position",new nt(this.pos,3)),e.setAttribute("color",new nt(this.col,3)),this.tex&&(e.setAttribute("wa",new nt(this.wa,4)),e.setAttribute("wb",new nt(this.wb,4))),e.computeVertexNormals(),e}}function On(i){let e=0;for(let t=0;t<i.length;t+=2){const n=(t+2)%i.length;e+=i[t]*i[n+1]-i[n]*i[t+1]}return e/2}function yE(i,e,t,n,s,r){let a=e;const o=On(a);if(!r&&o>0||r&&o<0){const l=[];for(let h=a.length-2;h>=0;h-=2)l.push(a[h],a[h+1]);a=l}const c=i.st;r&&c>=16&&c<128&&(i.st=32);for(let l=0;l<a.length;l+=2){const h=(l+2)%a.length,u=[a[l],t,a[l+1]],f=[a[h],t,a[h+1]],A=[a[h],n,a[h+1]],g=[a[l],n,a[l+1]];if(i.tex){const _=Math.hypot(a[h]-a[l],a[h+1]-a[l+1]),p=t-i.base,d=n-i.base,x=_>=2.4&&i.wh>=4?1:2;i.tri(u,f,A,s,!1,[[0,p],[_,p],[_,d]],x,_),i.tri(u,A,g,s,!1,[[0,p],[_,d],[0,d]],x,_)}else i.tri(u,f,A,s),i.tri(u,A,g,s)}i.st=c}function _r(i,e,t,n,s=!1){const r=f=>{const A=[];for(let g=0;g<f.length;g+=2)A.push(new De(f[g],f[g+1]));return A},a=r(e[0]),o=e.slice(1).map(r);let c;try{c=ui.triangulateShape(a,o)}catch{return}const l=a.concat(...o),h=f=>s?Ne(f.x,f.y)+t:t,u=(f,A,g,_)=>{if(s&&_<8){const p=f.clone().add(A).multiplyScalar(.5),d=A.clone().add(g).multiplyScalar(.5),x=g.clone().add(f).multiplyScalar(.5),E=Math.max(Math.abs(Ne(p.x,p.y)-(Ne(f.x,f.y)+Ne(A.x,A.y))/2),Math.abs(Ne(d.x,d.y)-(Ne(A.x,A.y)+Ne(g.x,g.y))/2),Math.abs(Ne(x.x,x.y)-(Ne(g.x,g.y)+Ne(f.x,f.y))/2));if(E>1.2&&Math.max(f.distanceTo(A),A.distanceTo(g),g.distanceTo(f))>(E>5?6:35)){u(f,p,x,_+1),u(p,A,d,_+1),u(x,d,g,_+1),u(p,d,x,_+1);return}}i.tri([f.x,h(f),f.y],[A.x,h(A),A.y],[g.x,h(g),g.y],n,!0)};for(const f of c)u(l[f[0]],l[f[1]],l[f[2]],0)}function Rn(i,e,t,n,s,r){for(const a of e)a.forEach((o,c)=>yE(i,o,t,n,s,c>0)),r&&_r(i,a,n,r)}function ME(i,e){const t=e.pr,n=e.seg||16,s=e.a?e.a[0]:0,r=e.a?e.a[1]:Math.PI*2,a=e.k??2,o=t[0][1],c=Math.max(t[0][0],.3),l=(e.cols||[]).map(g=>new Me(g)),h=new Me(e.col);a===0?i.rl=e.tx??9:i.wl=e.tx??8,i.base=o,i.wh=t[t.length-1][1]-o,i.st=e.st||128,i.ridge=0;const u=a===2&&e.st?1:a,f=(r-s)*c,A=[0];for(let g=1;g<t.length;g++)A.push(A[g-1]+Math.hypot(t[g][0]-t[g-1][0],t[g][1]-t[g-1][1]));for(let g=0;g<n;g++){const _=s+(r-s)*g/n,p=s+(r-s)*(g+1)/n;for(let d=0;d<t.length-1;d++){const[x,E]=t[d],[b,L]=t[d+1],B=(l[d]||h).clone();e.rib&&g%2&&B.multiplyScalar(e.rib);const w=(se,te,ge)=>[e.x+Math.cos(ge)*se,te,e.z+Math.sin(ge)*se],D=(se,te,ge,ie)=>a===0?[te*Math.max(se,x,.5),ge]:[te*c,ie-o],M=w(x,E,_),y=w(x,E,p),T=w(b,L,p),j=w(b,L,_),V=D(x,_,A[d],E),he=D(x,p,A[d],E),fe=D(b,p,A[d+1],L),ae=D(b,_,A[d+1],L);x>.001&&i.tri(M,y,T,B,!1,[V,he,fe],u,f),b>.001&&i.tri(M,T,j,B,!1,[V,fe,ae],u,f)}}}function df(i,e,t,n){const[s,r,a,o,c,l]=e,h=Math.cos(a),u=Math.sin(a),f=-u,A=h,g=(w,D)=>[s+h*w*o/2+f*D*c/2,t,r+u*w*o/2+A*D*c/2],_=w=>[s+h*w*(o-c)/2,t+l,r+u*w*(o-c)/2],p=g(-1,-1),d=g(1,-1),x=g(1,1),E=g(-1,1),b=_(-1),L=_(1),B=n.clone().multiplyScalar(.92);i.tri(p,d,L,n,!0),i.tri(p,L,b,n,!0),i.tri(x,E,b,n,!0),i.tri(x,b,L,n,!0),i.tri(d,x,L,B,!0),i.tri(E,p,b,B,!0)}function CE(i,e,t,n,s){const[r,a,o,c,l,h]=e,u=Math.cos(o),f=Math.sin(o),A=-f,g=u,_=(B,w,D=0)=>[r+u*B*c/2+A*w*l/2,t+D,a+f*B*c/2+g*w*l/2],p=_(-1,-1),d=_(1,-1),x=_(1,1),E=_(-1,1),b=_(-1,0,h),L=_(1,0,h);i.tri(p,d,L,n,!0),i.tri(p,L,b,n,!0),i.tri(x,E,b,n,!0),i.tri(x,b,L,n,!0),i.tri(E,p,b,s),i.tri(d,x,L,s)}function SE(i,e,t,n,s){const[r,a,o,c,l,h]=e,u=Math.cos(o),f=Math.sin(o),A=-f,g=u,_=Math.min(.17*l,2.2),p=Math.min(.75*h+1.4,3.6),d=(b,L,B,w)=>[r+u*b*(c/2-B)+A*L*(l/2-B),t+w,a+f*b*(c/2-B)+g*L*(l/2-B)],x=[d(-1,-1,0,0),d(1,-1,0,0),d(1,1,0,0),d(-1,1,0,0)],E=[d(-1,-1,_,p),d(1,-1,_,p),d(1,1,_,p),d(-1,1,_,p)];for(let b=0;b<4;b++){const L=(b+1)%4;i.tri(x[b],x[L],E[L],n,!0),i.tri(x[b],E[L],E[b],n,!0)}df(i,[r,a,o,c-2*_,l-2*_,Math.max(.6,.12*l)],t+p,s)}function IE(i,e,t,n){const s=n/(t/2),r=e/2,a=t/2;if(i===2)return[[0,s,s*a],[0,-s,s*a]];if(i===1)return[[0,s,s*a],[0,-s,s*a],[s,0,s*r],[-s,0,s*r]];const o=Math.min(.17*t,2.2),c=Math.min(.75*n+1.4,3.6),l=c/o,h=Math.max(.6,.12*t)/(a-o),u=[];for(const[f,A,g]of[[0,1,a],[0,-1,a],[1,0,r],[-1,0,r]])u.push([f*l,A*l,g*l]),u.push([f*h,A*h,c+(g-o)*h]);return u}const En=(i,e,t)=>i[0]*e+i[1]*t+i[2];function wE(i,e){const t=[];for(let n=0;n<i.length;n++){const s=i[n],r=i[(n+1)%i.length],a=e(s),o=e(r);if(a<=0&&t.push(s),a<0&&o>0||a>0&&o<0){const c=a/(a-o);t.push([s[0]+(r[0]-s[0])*c,s[1]+(r[1]-s[1])*c])}}return t}const qh=i=>{let e=0;for(let t=0;t<i.length;t++){const n=i[t],s=i[(t+1)%i.length];e+=n[0]*s[1]-s[0]*n[1]}return e/2};function TE(i,e,t,n,s,r,a,o,c=-1){const[l,h,u,f,A,g]=t,_=Math.cos(u),p=Math.sin(u),d=-p,x=_,E=IE(n,f,A,g);{let w=1e9;for(const D of E)w=Math.min(w,En(D,0,0));i.ridge=Math.max(0,w)}const b=(w,D)=>[(w-l)*_+(D-h)*p,(w-l)*d+(D-h)*x],L=(w,D,M)=>[l+_*w+d*D,M,h+p*w+x*D],B=(w,D)=>{let M=1e9;for(const y of E)M=Math.min(M,En(y,w,D));return Math.max(0,M)};for(const w of e){const D=w.map(M=>{const y=[];for(let T=0;T<M.length;T+=2)y.push(b(M[T],M[T+1]));return y});E.forEach((M,y)=>{const T=n===3&&y%2===1?a:r,j=i.rl;c>=0&&n===3&&y%2===0&&(i.rl=c);const V=Math.hypot(M[0],M[1]),he=V>1e-6?M[0]/V:0,fe=V>1e-6?M[1]/V:1,ae=Math.sqrt(1+V*V),se=ve=>[-ve.x*fe+ve.y*he,(ve.x*he+ve.y*fe)*ae,Math.max(0,En(M,ve.x,ve.y))],te=D.map(ve=>{let Y=ve;return E.forEach((de,Ce)=>{Ce!==y&&Y.length&&(Y=wE(Y,v=>En(M,v[0],v[1])-En(de,v[0],v[1])-1e-6))}),Y});if(te[0].length<3||Math.abs(qh(te[0]))<.05)return;const ge=te[0].map(ve=>new De(ve[0],ve[1])),ie=te.slice(1).filter(ve=>ve.length>=3&&Math.abs(qh(ve))>.05).map(ve=>ve.map(Y=>new De(Y[0],Y[1])));let me;try{me=ui.triangulateShape(ge,ie)}catch{return}const xe=ge.concat(...ie);for(const ve of me){const Y=xe[ve[0]],de=xe[ve[1]],Ce=xe[ve[2]];i.tri(L(Y.x,Y.y,s+Math.max(0,En(M,Y.x,Y.y))),L(de.x,de.y,s+Math.max(0,En(M,de.x,de.y))),L(Ce.x,Ce.y,s+Math.max(0,En(M,Ce.x,Ce.y))),T,!0,i.tex?[se(Y),se(de),se(Ce)]:void 0)}i.rl=j});for(const M of D)for(let y=0;y<M.length;y++){const T=M[y],j=M[(y+1)%M.length],V=[0,1];for(let se=0;se<E.length;se++)for(let te=se+1;te<E.length;te++){const ge=En(E[se],T[0],T[1])-En(E[te],T[0],T[1]),ie=En(E[se],j[0],j[1])-En(E[te],j[0],j[1]);ge*ie<0&&V.push(ge/(ge-ie))}V.sort((se,te)=>se-te);const he=se=>[T[0]+(j[0]-T[0])*se,T[1]+(j[1]-T[1])*se];let fe=V[0],ae=B(T[0],T[1]);for(let se=1;se<V.length;se++){const te=V[se];if(te-fe<1e-4&&se<V.length-1)continue;const ge=he(fe),ie=he(te),me=B(ie[0],ie[1]);if(Math.max(ae,me)>.35){const xe=L(ge[0],ge[1],s),ve=L(ie[0],ie[1],s),Y=L(ie[0],ie[1],s+me),de=L(ge[0],ge[1],s+ae);if(i.tex){const Ce=Math.hypot(j[0]-T[0],j[1]-T[1]),v=fe*Ce,P=te*Ce,q=s-i.base;me>.02&&i.tri(xe,ve,Y,o,!1,[[v,q],[P,q],[P,q+me]],2,Ce),ae>.02&&i.tri(xe,Y,de,o,!1,[[v,q],[P,q+me],[v,q+ae]],2,Ce)}else me>.02&&i.tri(xe,ve,Y,o),ae>.02&&i.tri(xe,Y,de,o)}fe=te,ae=me}}}return B}function BE(i,e,t,n,s,r,a){const o=new Set,c=(h,u)=>`${Math.round(h*10)},${Math.round(u*10)}`;for(const h of t)for(const u of h)for(let f=0;f<u.length;f+=2)o.add(c(u[f],u[f+1]));for(const h of e){const u=d=>{const x=[];for(let E=0;E<d.length;E+=2)x.push(new De(d[E],d[E+1]));return x},f=u(h[0]),A=h.slice(1).map(u);let g;try{g=ui.triangulateShape(f,A)}catch{continue}const _=f.concat(...A),p=d=>n+(o.has(c(d.x,d.y))?s:0);i.ridge=s;for(const d of g){const x=_[d[0]],E=_[d[1]],b=_[d[2]],L=[x.x,p(x),x.y],B=[E.x,p(E),E.y],w=[b.x,p(b),b.y];let D;if(i.tex){const M=B[0]-L[0],y=B[1]-L[1],T=B[2]-L[2],j=w[0]-L[0],V=w[1]-L[1],he=w[2]-L[2];let fe=y*he-T*V,ae=T*j-M*he,se=M*V-y*j;ae<0&&(fe=-fe,ae=-ae,se=-se);const te=Math.hypot(fe,ae,se)||1,ge=-fe,ie=-se,me=Math.hypot(ge,ie),xe=me>1e-6?ge/me:0,ve=me>1e-6?ie/me:1,Y=te/Math.max(ae,.001);D=[L,B,w].map(de=>[-de[0]*ve+de[2]*xe,(de[0]*xe+de[2]*ve)*Y,de[1]-n])}i.tri(L,B,w,r,!0,D)}}const l=i.rl;i.rl=2;for(const h of t)_r(i,h,n+s,a);i.rl=l}let RE=-100;function qt(i,e,t){const n=new bs,s=new Me(t);for(const a of i)_r(n,a,e,s,!!vt);const r=new rt(n.geometry(),new tt({vertexColors:!0,depthWrite:!1}));return r.renderOrder=RE++,r.receiveShadow=it>=2,r.name="flat",We.add(r),r}function Po(i){return i.onBeforeCompile=e=>{e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
varying float vBY;`).replace("#include <project_vertex>",`#include <project_vertex>
  
#ifdef USE_INSTANCING
  vBY = (modelMatrix * instanceMatrix * vec4(transformed, 1.0)).y;
#else
  vBY = (modelMatrix * vec4(transformed, 1.0)).y;
#endif`),e.fragmentShader=e.fragmentShader.replace("#include <common>",`#include <common>
varying float vBY;`).replace("#include <color_fragment>",`#include <color_fragment>
  { float k = mod(vBY + 1.2, 3.0); if (k < 0.75) diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.62, 0.36, 0.28), 0.75); }`)},i}function DE(i,e){const t=i.length/2;if(t<6)return i;const n=new Uint8Array(t);n[0]=1;let s=0,r=-1;for(let c=1;c<t;c++){const l=Math.hypot(i[2*c]-i[0],i[2*c+1]-i[1]);l>r&&(r=l,s=c)}n[s]=1;const a=(c,l)=>{const h=i[2*c],u=i[2*c+1],f=i[2*(l%t)],A=i[2*(l%t)+1],g=Math.hypot(f-h,A-u)||1e-6;let _=-1,p=e;for(let d=c+1;d<l;d++){const x=Math.abs((f-h)*(u-i[2*d+1])-(h-i[2*d])*(A-u))/g;x>p&&(p=x,_=d)}_>=0&&(n[_]=1,a(c,_),a(_,l))};a(0,s),a(s,t);const o=[];for(let c=0;c<t;c++)n[c]&&o.push(i[2*c],i[2*c+1]);return o.length>=6?o:i}const Af=[];function cn(i,e,t,n,s=""){const r=document.createElement("div");r.className="lbl "+s,r.textContent=i,document.getElementById("labels").appendChild(r),Af.push({el:r,p:new U(e,t,n)})}const gs=new U;function LE(){for(const i of Af){gs.copy(i.p).project(Wn);const e=gs.z<1&&Math.abs(gs.x)<1.1&&Math.abs(gs.y)<1.1;i.el.style.display=e?"block":"none",e&&(i.el.style.left=`${(gs.x+1)/2*window.innerWidth}px`,i.el.style.top=`${(1-gs.y)/2*window.innerHeight}px`)}}const PE=(i,e,t)=>{const[n,s]=i.origin,r=Math.cos(s*Math.PI/180)*111320;return[(e-n)*r,-(t-s)*110574]},je={};function pf(i){const e=je[i];if(!e)return;rn.maxPolarAngle=Math.max(1.2,e.pol);const t=new U(e.t[0],Ne(e.t[0],e.t[1])+(e.y||0),e.t[1]),n=new U(Math.sin(e.az)*Math.sin(e.pol),Math.cos(e.pol),Math.cos(e.az)*Math.sin(e.pol)).multiplyScalar(e.d);rn.target.copy(t),Wn.position.copy(t).add(n),rn.update()}const Ve=mn?{ground:"#8e8b92",pilot:"#908c93",water:"#6fa4b2",parks:"#8aa63e",plazas:"#9c9cac",path:"#a5a2aa",service:"#9d9aa2",minor:"#aaa7ae",major:"#77747c",rail:"#5a5052",tram:"#8c2f2c",walls:["#f2e3b8","#e8d394","#efe6cf","#d9c7a0","#e3d6bf","#ecc9a6","#d8d0bf","#f0dcae"],roofs:["#e0963e","#e8b44c","#c87a48","#a8603e","#d98a3a","#9a5a40","#e6a446","#80808c"],flats:["#c4beb8","#b4b0b0","#ccc4ba","#aca8aa"],trees:["#e6b235","#e08a26","#c95a24","#e8c33f","#7fa03c","#557a30","#3f6a2c"]}:null;Ve&&Dt&&Object.assign(Ve,{ground:"#7f746e",pilot:"#81766f",plazas:"#958a80",path:"#9b8f85",service:"#8f847c",minor:"#978c84",major:"#665e5c",parks:"#86a63a",walls:["#f0d9a0","#e6bf74","#f2e4c4","#dcbc8a","#ebc4a8","#e8b48e","#efd690","#f3dcb4","#e2c7a6","#e9a98c"],roofs:["#b85a3c","#a94a34","#c8683e","#9a4a36","#c47458","#cf8a6c","#b9705a","#8e4c3a","#80808c"],flats:["#e4e0d8","#d2cfca","#d8ccb6","#c8c3ba"],trees:["#f0b52a","#e8891f","#d4581f","#b8321e","#efc93a","#8aa83a","#5b8a32","#d97a26","#c9a227"]});function ln(i,e,t=1){const n=Math.sin(e*12.9898)*43758.5453,s=Math.sin(e*78.233)*12345.6789,r=Math.sin(e*3.7)*9876.54,a=o=>(o-Math.floor(o))*2-1;return i.clone().offsetHSL(a(n)*.012*t,a(s)*.06*t,a(r)*.035*t)}const UE=`
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
}`;async function FE(){try{const e=await(await fetch("./tex/tex.json")).json(),t=new yn().setTranscoderPath("./basis/").detectSupport(zt),n=await t.loadAsync(`./tex/walls_${ze?512:1024}.ktx2`);n.wrapS=n.wrapT=gn,n.anisotropy=ze?2:4,n.colorSpace=_t,n.needsUpdate=!0;let s=0;for(const o of n.mipmaps)s+=o.data.byteLength;t.dispose();const r=[0,.55,0,.45,.4,.55,.3,.15,.35,.1,.45],a=new tt({vertexColors:!0,side:yt});return a.onBeforeCompile=o=>{o.uniforms.tArr={value:n},o.uniforms.uMean={value:e.means.map(c=>new U(c[0],c[1],c[2]))},o.uniforms.uHue={value:r},o.uniforms.uNight=uf,o.uniforms.uCol={value:Dt?1:0},o.vertexShader=`attribute vec4 wa;
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
`+UE+`
`+o.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
diffuseColor.rgb = facade(diffuseColor.rgb);`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
totalEmissiveRadiance += gEmis;`)},{mat:a,mb:s/1048576}}catch(i){return console.warn("facade textures failed, falling back to plain walls",i),null}}async function NE(){const i=await(await fetch("./data/scene.json")).json();let e=null;try{e=await(await fetch("./data/kapalicarsi.json")).json()}catch{}const t=(v,P)=>{if(!e)return!1;const q=e.outline;let k=!1;for(let K=0,X=q.length-2;K<q.length;X=K,K+=2)q[K+1]>P!=q[X+1]>P&&v<(q[X]-q[K])*(P-q[K+1])/(q[X+1]-q[K+1])+q[K]&&(k=!k);return k};if(e){const v=i.buildings.length;i.buildings=i.buildings.filter(P=>{const q=P.p[0]?.[0];if(!q)return!0;let k=0,K=0;for(let X=0;X<q.length;X+=2)k+=q[X],K+=q[X+1];return!t(k/(q.length/2),K/(q.length/2))}),window.__kcFiltered=v-i.buildings.length}try{const P=(await(await fetch("./data/bridge_filter.json")).json()).centroids,q=i.buildings.length;i.buildings=i.buildings.filter(k=>{const K=k.p[0]?.[0];if(!K)return!0;let X=0,ce=0;for(let R=0;R<K.length;R+=2)X+=K[R],ce+=K[R+1];return X/=K.length/2,ce/=K.length/2,!P.some(R=>Math.hypot(R[0]-X,R[1]-ce)<.5)}),window.__bridgeFiltered=q-i.buildings.length}catch{}Xs("scene");const n=It?await FE():null;if(n&&(window.__texMB=Math.round(n.mb*100)/100),it>=7&&nn.get("terrain")!=="0"&&(vt=await(await fetch("./data/terrain.json")).json(),document.getElementById("cr-dem").textContent="Kıyı+arazi/coast+terrain: Copernicus DEM GLO-30 (© DLR, Airbus DS)"),vt){const v={ayasofya:100,sultanahmet:95,yenicami:70,rustempasa:30,galata:14,nusretiye:32,ayatriada:28,stantoine:60,suleymaniye:120};for(const P of i.landmarks){const q=v[P.id];if(!q)continue;const k=P.model?P.model.x:P.label[0],K=P.model?P.model.z:P.label[1];oa(k,K,q,30)}for(const[P,q,k]of[[179,1526,38],[209,1648,22],[190,1686,16]])oa(P,q,k,20);for(const[P,q]of[[-302.3,1943.1],[-326.7,1972.1],[-349.2,2000.8],[-260.4,1783.6]])oa(P,q,7,10);if(e){const P=e.outline;let q=0,k=0;for(let K=0;K<P.length;K+=2)q+=P[K],k+=P[K+1];oa(q/(P.length/2),k/(P.length/2),150,40)}window.__H=Ne,window.__pads=Ia.length}const[s,r,a,o]=i.bounds_m,c=(s+a)/2,l=(r+o)/2,h=(v,P)=>PE(i,v,P),u=h(28.9784,41.0066),f=h(28.9741,41.0256),A=h(28.9858,41.0372);je.overview=ze?{t:[c+100,l+250],d:12500,pol:.55,az:0}:{t:[c+150,l+250],d:10500,pol:.72,az:-.3},je.overview_east=ze?{t:[0,250],d:8800,pol:.55,az:0}:{t:[150,250],d:8200,pol:.72,az:-.3},je.sultanahmet={t:[u[0],u[1]],d:ze?820:700,pol:.95,az:ze?-.8:.8},je.galata={t:[f[0],f[1]],d:ze?420:360,pol:1,az:.35};const g=h(28.965,41.0168);if(je.suleymaniye={t:[g[0],g[1]],d:ze?900:760,pol:.95,az:.25},je.yc_top={t:[-574.7,732.1],d:ze?400:250,pol:.12,az:.7245},je.gk_eye={t:[-402,-236],y:40,d:ze?190:150,pol:1.2,az:.4},je.gk_apple={t:[-402,-236],y:30,d:ze?300:230,pol:.72,az:.4},je.gk_ground={t:[-402,-236],y:36,d:ze?330:270,pol:1.4,az:-.25},je.gm_beyazit={t:[-1300,1300],y:20,d:ze?1300:1e3,pol:1,az:-.3},je.br_galata={t:[-600,250],y:8,d:ze?900:700,pol:1.15,az:.9},je.ch_pera={t:[-150,-250],y:15,d:ze?420:330,pol:1,az:.2},je.fatih={t:[-2900,600],y:20,d:ze?1500:1150,pol:.95,az:-.2},je.edirnekapi={t:[-4e3,-320],y:60,d:ze?1e3:780,pol:1,az:-.9},je.gate_edk={t:[-3771,-862],y:30,d:ze?420:340,pol:1.05,az:-.9},je.gate_tpk={t:[-4426,205],y:30,d:ze?420:340,pol:1.05,az:-.9},je.tekfur={t:[-3260,-1170],y:25,d:ze?420:340,pol:1.05,az:-.9},je.seawall={t:[-1800,2650],y:10,d:ze?1500:1200,pol:1,az:.4},je.kc_top={t:[-905,1386],y:40,d:ze?900:520,pol:.02,az:-Math.PI/2},je.kc_top_n={t:[-905,1386],y:40,d:ze?900:520,pol:.02,az:0},je.kc_obl={t:[-860,1400],y:40,d:ze?700:520,pol:.8,az:-Math.PI/2-.25},je.asia={t:[2600,600],y:20,d:ze?3200:2600,pol:.95,az:-.9},je.yedikule={t:[-4700,3380],y:15,d:ze?800:620,pol:1,az:-.7},je.surlar={t:[-4600,1400],y:15,d:ze?1700:1300,pol:1.05,az:-1.25},je.gm_taksim={t:[425,-1490],y:20,d:ze?520:400,pol:1.05,az:.4},je.eminonu={t:[-725,700],d:ze?820:700,pol:.95,az:ze?.6:.35},je.taksim={t:[A[0],A[1]],d:ze?700:600,pol:.95,az:3.4},je.match={t:[u[0]+150,u[1]-60],d:ze?560:470,pol:.82,az:.55},je.roofs={t:[f[0]-120,f[1]+60],d:ze?260:220,pol:.85,az:.6},It){je.sultanahmet.pol=.82,je.galata.pol=.85,je.match.pol=.74,je.roofs.pol=.78,je.suleymaniye.pol=.82,je.taksim.pol=.82,je.overview.pol=ze?.82:.88;for(const v of Object.values(je))v.d/=ms}pf("overview");const _=new rt(new Ts(4e4,4e4),new tt({color:Ve?Dt?Ve.water:Ve.ground:it>=2?"#ece6da":"#e9e4da"}));_.material.depthWrite=!1,_.renderOrder=-200,_.name="ground",_.rotation.x=-Math.PI/2,_.receiveShadow=it>=2,We.add(_);const p=new rt(new Ts(a-s-8,o-r-8),new tt({color:Ve?Ve.pilot:it>=2?"#e9e1d0":"#e4ddd0"}));if(p.material.depthWrite=!1,p.renderOrder=-150,p.rotation.x=-Math.PI/2,p.position.set(c,.02,l),p.receiveShadow=it>=2,vt){const v=vt,P=[],q=[];for(let X=0;X<v.nz;X++)for(let ce=0;ce<v.nx;ce++)P.push(v.x0+ce*v.step,Ne(v.x0+ce*v.step,v.z0+X*v.step)+.02,v.z0+X*v.step);for(let X=0;X<v.nz-1;X++)for(let ce=0;ce<v.nx-1;ce++){const R=X*v.nx+ce,be=R+1,ne=R+v.nx,oe=ne+1,W=v.x0+ce*v.step,re=v.z0+X*v.step;W<s||W+v.step>a||re<r||re+v.step>o||q.push(R,ne,be,be,ne,oe)}const k=new bt;k.setAttribute("position",new nt(P,3)),k.setIndex(q),k.computeVertexNormals();const K=new rt(k,new tt({color:Ve?Ve.pilot:"#e9e1d0",depthWrite:!1}));K.renderOrder=-150,K.receiveShadow=!0,K.name="terrain",p.name="pilot",p.renderOrder=-160,We.add(K),We.add(p)}else We.add(p);const d=v=>{const P=v[0];let q=0,k=0;for(let K=0;K<P.length;K+=2)q+=P[K],k+=P[K+1];return Math.abs(On(P))<3e4&&lr(q/(P.length/2),k/(P.length/2))>1.5},x=i.water.filter(v=>!d(v)),E=i.water.filter(d);window.__pools=E.length,qt(x,-1.1,Ve?Ve.water:"#8ec3d8"),qt(E,.05,"#6fa8bb");{const v=[],P=[],q=new Me("#a39a8c"),k=new Me("#d6cebf"),K=(be,ne,oe,W,re)=>{v.push(...be,...ne,...oe,...be,...oe,...W);for(let O=0;O<6;O++)P.push(re.r,re.g,re.b)},X=(be,ne)=>Math.abs(be-s)<2||Math.abs(be-a)<2||Math.abs(ne-r)<2||Math.abs(ne-o)<2||Math.abs(Math.abs(be)-1764)<2||Math.abs(Math.abs(ne)-2709)<2;for(const be of i.water)be.forEach((ne,oe)=>{const W=E.includes(be),re=(On(ne)>0?1:-1)*(oe===0?1:-1);for(let O=0;O<ne.length;O+=2){const C=(O+2)%ne.length,m=ne[O],S=ne[O+1],F=ne[C],Q=ne[C+1],N=F-m,G=Q-S,H=Math.hypot(N,G),$=(m+F)/2,_e=(S+Q)/2;if(H<.5||X(m,S)&&X(F,Q)||$<s+3||$>a-3||_e<r+3||_e>o-3)continue;const J=Math.max(0,Ne(m,S))+(W?.45:.34),pe=Math.max(0,Ne(F,Q))+(W?.45:.34),Se=W?J-.5:-1.1,we=W?pe-.5:-1.1,ye=W?.6:1,Ue=G/H*re*1.6,Fe=-N/H*re*1.6;K([m,Se,S],[F,we,Q],[F,pe,Q],[m,J,S],q),K([m,J,S],[F,pe,Q],[F+Ue*ye,pe,Q+Fe*ye],[m+Ue*ye,J,S+Fe*ye],k),W&&K([m+Ue*ye,J,S+Fe*ye],[F+Ue*ye,pe,Q+Fe*ye],[F+Ue*ye,pe-.6,Q+Fe*ye],[m+Ue*ye,J-.6,S+Fe*ye],q)}});const ce=new bt;ce.setAttribute("position",new nt(v,3)),ce.setAttribute("color",new nt(P,3)),ce.computeVertexNormals();const R=new rt(ce,new tt({vertexColors:!0,side:yt}));R.receiveShadow=it>=2,R.name="quay",We.add(R)}try{const v=await(await fetch("./data/context.json")).json(),[P,q,k,K]=v.bbox_m,X=v.fade,ce=new Me(Ve?Ve.pilot:"#e4ddd0"),R=new Me(Ve?Dt?Ve.water:Ve.ground:"#e9e4da"),be=new Me,ne=[],oe=[];for(const O of v.polys){const C=Q=>{const N=[];for(let G=0;G<Q.length;G+=2)N.push(new De(Q[G],Q[G+1]));return N},m=C(O[0]),S=O.slice(1).map(C),F=m.concat(...S);for(const Q of ui.triangulateShape(m,S))for(const N of[Q[0],Q[2],Q[1]]){const G=F[N],H=Math.max(P-G.x,0,G.x-k),$=Math.max(q-G.y,0,G.y-K),J=Math.min(1,Math.max(0,2.2*Math.hypot(H,$)/X));be.copy(ce).lerp(R,.3+.7*J*J*(3-2*J)),ne.push(G.x,.01,G.y),oe.push(be.r,be.g,be.b)}}const W=new bt;W.setAttribute("position",new nt(ne,3)),W.setAttribute("color",new nt(oe,3)),W.computeVertexNormals();const re=new rt(W,new tt({vertexColors:!0,depthWrite:!1}));re.renderOrder=-170,re.name="ctx",re.receiveShadow=it>=2,We.add(re)}catch(v){console.warn("context land skipped",v)}try{const v=(await(await fetch("./data/far.json")).json()).blocks,P=new bs,q=new Me("#cdbfae"),k=new Me("#b9876a"),K=new Me(Ve?Dt?Ve.water:Ve.ground:"#e9e4da"),X=new Me,ce=new Me;for(const be of v){const ne=be.p;if(ze&&Math.abs(On(ne))<2500)continue;const oe=Math.max(s-c,0,c-a),W=Math.max(r-l,0,l-o),re=Math.min(1,Math.hypot(oe,W)/4200);X.copy(q).lerp(K,.15+.75*re),ce.copy(k).lerp(K,.15+.75*re),Rn(P,[[ne]],0,be.h*(1-.4*re),X,ce)}const R=new rt(P.geometry(),new tt({vertexColors:!0,side:yt}));R.receiveShadow=it>=2,R.name="far",We.add(R),window.__far=v.length}catch(v){console.warn("far context skipped",v)}try{const v=(await(await fetch("./data/mosques.json")).json()).mosques,P=v.reduce((O,C)=>O+C.m.length,0),q=new Qe,k=new St,K=new U,X=new U,ce=new tt({color:"#8e939b"}),R=new tt({color:"#e4dccd"}),be=new Ct(new zi(1,12,4,0,Math.PI*2,0,Math.PI/2),ce,v.length),ne=new Ct(new ai(1,1,1,14,1,!0),R,v.length),oe=new Ct(new ai(.85,1,1,8),R,Math.max(1,P)),W=new Ct(new ki(1,1,8),ce,Math.max(1,P));let re=0;v.forEach((O,C)=>{const m=Ne(O.x,O.z),S=.35*O.r;ne.setMatrixAt(C,q.compose(K.set(O.x,m+O.y+S/2,O.z),k,X.set(O.r*1.02,S,O.r*1.02))),be.setMatrixAt(C,q.compose(K.set(O.x,m+O.y+S,O.z),k,X.set(O.r,O.r*.92,O.r)));for(const[F,Q,N,G]of O.m){const H=Ne(F,Q),$=N*.17;oe.setMatrixAt(re,q.compose(K.set(F,H-.8+(N-$+.8)/2,Q),k,X.set(G,N-$+.8,G))),W.setMatrixAt(re,q.compose(K.set(F,H+N-$/2,Q),k,X.set(G*1.05,$,G*1.05))),re++}}),oe.count=W.count=re;for(const O of[be,ne,oe,W])O.castShadow=O.receiveShadow=it>=2,O.frustumCulled=!1,We.add(O)}catch(v){console.warn("mosque placeholders skipped",v)}try{const v=await(await fetch("./data/bridges.json")).json(),P=[],q=[],k=new Me("#77706c"),K=new Me("#c8bfb2"),X=new Me("#7d766f"),ce=(S,F,Q,N)=>{P.push(...S,...F,...Q);for(let G=0;G<3;G++)q.push(N.r,N.g,N.b)};for(const S of v.bridges)for(const F of S.strips){const Q=F.p,N=[];for(let pe=0;pe<Q.length;pe+=2)N.push(new De(Q[pe],Q[pe+1]));ui.isClockWise(N)&&N.reverse();let G=0,H=0;for(const pe of N)G+=pe.x,H+=pe.y;const $=Math.max(0,Ne(G/N.length,H/N.length));if($>.3&&F.y<3)continue;const _e=F.y+$,J=F.y-F.t+$;for(const pe of ui.triangulateShape(N,[])){const[Se,we,ye]=pe.map(Ue=>N[Ue]);ce([Se.x,_e,Se.y],[ye.x,_e,ye.y],[we.x,_e,we.y],k),ce([Se.x,J,Se.y],[we.x,J,we.y],[ye.x,J,ye.y],X)}for(let pe=0;pe<N.length;pe++){const Se=N[pe],we=N[(pe+1)%N.length];ce([Se.x,J,Se.y],[we.x,J,we.y],[we.x,_e,we.y],K),ce([Se.x,J,Se.y],[we.x,_e,we.y],[Se.x,_e,Se.y],K)}}const R=new bt;R.setAttribute("position",new nt(P,3)),R.setAttribute("color",new nt(q,3)),R.computeVertexNormals();const be=new rt(R,new tt({vertexColors:!0}));be.castShadow=be.receiveShadow=it>=2,We.add(be);const ne={pier:"#b3aa9d",tower:"#ecebe8",cable:"#d9dadc",canopy:"#cfd3d6"},oe=new Yt(1,1,1),W=new Qe,re=new St,O=new Cn,C=new U,m=new U;for(const S of Object.keys(ne)){const F=v.boxes.filter(N=>N[7]===S&&!(S==="pier"&&Ne(N[0],N[2])>.3));if(!F.length)continue;const Q=new Ct(oe,new tt({color:ne[S]}),F.length);F.forEach((N,G)=>{const[H,$,_e,J,pe,Se,we]=N,ye=S==="cable";O.set(0,we,ye?-N[8]:0,"YZX"),re.setFromEuler(O);const Ue=Math.max(0,Ne(H,_e));Q.setMatrixAt(G,W.compose(C.set(H,(ye?$:$+pe/2)+Ue,_e),re,m.set(J,pe,Se)))}),Q.castShadow=S!=="cable"&&it>=2,Q.receiveShadow=it>=2,We.add(Q)}}catch(v){console.warn("bridges skipped",v)}try{const v=(await(await fetch("./data/churches.json")).json()).churches,P=new Qe,q=new St,k=new U,K=new U,X=new U(0,1,0),ce=new tt({color:"#ddd3c2"}),R=new tt({color:"#8b9097"}),be=new tt({color:"#9c5a4d"}),ne=new tt({color:"#6f6a68"}),oe=(m,S,F,Q)=>{if(!F.length)return;const N=new Ct(m,S,F.length);F.forEach((G,H)=>{Q(G),N.setMatrixAt(H,P.compose(k,q,K))}),N.castShadow=N.receiveShadow=it>=2,We.add(N)},W=v.filter(m=>m.k!=="west"),re=v.filter(m=>m.k==="arm"),O=v.filter(m=>m.k==="orth"),C=v.filter(m=>m.k==="west");oe(new ai(1,1,1,10),ce,W,m=>{q.identity(),k.set(m.x,Ne(m.x,m.z)+m.y+m.r*.6,m.z),K.set(m.r,m.r*1.2,m.r)}),oe(new zi(1,10,5,0,Math.PI*2,0,Math.PI/2),R,O,m=>{q.identity(),k.set(m.x,Ne(m.x,m.z)+m.y+m.r*1.2,m.z),K.set(m.r*1.05,m.r*.95,m.r*1.05)}),oe(new ki(1,1,10),ne,re,m=>{q.identity(),k.set(m.x,Ne(m.x,m.z)+m.y+m.r*1.2+m.r*.6,m.z),K.set(m.r*1.1,m.r*1.2,m.r*1.1)}),oe(new Yt(1,1,1),ce,C,m=>{q.setFromAxisAngle(X,m.ry);const S=m.h-m.w*1.1;k.set(m.x,Ne(m.x,m.z)+S/2,m.z),K.set(m.w,S,m.w)}),oe(new ki(Math.SQRT1_2,1,4).rotateY(Math.PI/4),be,C,m=>{q.setFromAxisAngle(X,m.ry),k.set(m.x,Ne(m.x,m.z)+m.h-m.w*.55,m.z),K.set(m.w*1.08,m.w*1.1,m.w*1.08)})}catch(v){console.warn("church placeholders skipped",v)}try{const v=await(await fetch("./data/walls.json")).json(),P={wall:"#c9b99a",outer:"#c2b293",scarp:"#b3a487",tower:"#bfae8e",otower:"#c7b796"},q=new Yt(1,1,1),k=new Qe,K=new St,X=new U(0,1,0),ce=new U,R=new U;qt(v.moat,.115,"#8a9d5a");for(const O of Object.keys(P)){const C=v.boxes.filter(F=>F[7]===O);if(!C.length)continue;const m=[];for(const F of C){const[Q,N,G,H,$,_e,J]=F,pe=Math.cos(J),Se=-Math.sin(J);let we=0;for(let Ue=0;Ue<=6;Ue++){const Fe=(Ue/6-.5)*H;we=Math.max(we,Math.abs(Ne(Q+pe*Fe,G+Se*Fe)-Ne(Q,G)))}const ye=Math.min(24,Math.max(1,Math.ceil(we/.6),Math.ceil(H/40)));for(let Ue=0;Ue<ye;Ue++){const Fe=((Ue+.5)/ye-.5)*H,qe=Q+pe*Fe,z=G+Se*Fe,Ie=Ne(qe-pe*H/ye/2,z-Se*H/ye/2),Ae=Ne(qe+pe*H/ye/2,z+Se*H/ye/2),Ee=Ne(qe,z),Re=Math.min(Ie,Ae,Ee)-2.5;m.push([qe,Re,z,H/ye+.3,Ee+N+$-Re,_e,J])}}const S=new Ct(q,Po(new tt({color:P[O]})),m.length);S.name="aud:wall",m.forEach((F,Q)=>{const[N,G,H,$,_e,J,pe]=F;K.setFromAxisAngle(X,pe),S.setMatrixAt(Q,k.compose(ce.set(N,G+_e/2,H),K,R.set($,_e,J)))}),S.castShadow=S.receiveShadow=it>=2,We.add(S)}const be=new bs,ne=new Me("#bfae8e"),oe=new Me("#e6e0d4");for(const O of v.tpolys){let C=-1e9,m=1e9;for(let S=0;S<O.p.length;S+=2){const F=Ne(O.p[S],O.p[S+1]);C=Math.max(C,F),m=Math.min(m,F)}Rn(be,[[O.p]],m-2.5,C+O.h,O.marble?oe:ne,(O.marble?oe:ne).clone().multiplyScalar(.92))}const W=new rt(be.geometry(),new tt({vertexColors:!0,side:yt}));W.castShadow=W.receiveShadow=it>=2,We.add(W);const re=new Ct(new ai(1,1.06,1,12),new tt({color:"#c6b596"}),v.ytowers.length);v.ytowers.forEach(([O,C,m,S],F)=>{K.identity();let Q=1e9;for(let G=0;G<8;G++)Q=Math.min(Q,Ne(O+Math.cos(G*.785)*m,C+Math.sin(G*.785)*m));Q-=1;const N=Ne(O,C)+S-Q;re.setMatrixAt(F,k.compose(ce.set(O,Q+N/2,C),K,R.set(m,N,m)))}),re.name="aud:ytower",re.castShadow=re.receiveShadow=it>=2,We.add(re),cn("Kara Surları",-4600,30,1200,"district"),cn("Yedikule",-4700,34,3380)}catch(v){console.warn("walls skipped",v)}try{const v=[],P=new Qe,q=new St,k=new U(0,1,0),K=new U,X=new U,ce=(G,H,$,_e,J,pe,Se,we,ye=0)=>{const Ue=G.index?G.toNonIndexed():G.clone();Ue.deleteAttribute("uv"),Ue.applyMatrix4(P.compose(K.set($,_e,J),q.setFromAxisAngle(k,ye),X.set(pe,Se,we)));const Fe=new Me(H),qe=Ue.attributes.position.count,z=new Float32Array(qe*3);for(let Ie=0;Ie<qe;Ie++)z.set([Fe.r,Fe.g,Fe.b],Ie*3);Ue.setAttribute("color",new Mt(z,3)),v.push(Ue)},R=new Yt(1,1,1),be=new ai(1,1,1,10),ne=new ki(1,1,10),oe=new ki(.71,1,4,1).rotateY(Math.PI/4),W=new zi(1,12,4,0,Math.PI*2,0,Math.PI/2),re="#d8cdbb",O="#8e939b",C="#b9876a",m="#c9b99a",S=(G,H,$,_e,J,pe=0,Se=re,we=0)=>ce(R,Se,G,we+J/2,H,$,J,_e,pe),F=(G,H,$,_e,J,pe=0)=>{const Se=Ne(G,H);S(G,H,$*2.6,$*2.6,$*1.1,pe,re,Se),ce(W,O,G,Se+$*1.1,H,$,$*.9,$);for(let we=0;we<_e;we++){const ye=pe+Math.PI/4+we*Math.PI/2,Ue=G+Math.cos(ye)*$*1.9,Fe=H-Math.sin(ye)*$*1.9;ce(be,re,Ue,Se+J*.44,Fe,1.3,J*.88,1.3),ce(ne,O,Ue,Se+J*.94,Fe,1.4,J*.12,1.4)}},Q=await(await fetch("./data/walls.json")).json();for(const[G,H]of[[-3771.2,-862.5],[-4426,205]]){let $=null,_e=1e9;for(const qe of Q.boxes)if(qe[7]==="wall"){const z=Math.hypot(qe[0]-G,qe[2]-H);z<_e&&(_e=z,$=qe)}if(!$||_e>200)continue;const J=$[6],pe=Math.cos(J),Se=-Math.sin(J),we=(G-$[0])*pe+(H-$[2])*Se,ye=$[0]+pe*we,Ue=$[2]+Se*we,Fe=Ne(ye,Ue);for(const qe of[-1,1]){const z=ye+pe*qe*11,Ie=Ue+Se*qe*11;S(z,Ie,11,13,20,J,m,Ne(z,Ie)),ce(oe,"#a89a82",z,Ne(z,Ie)+21.5,Ie,11,3,13,J)}S(ye,Ue,11.5,6,4,J,m,Fe+9),S(ye,Ue,11,6.6,1.2,J,C,Fe+8.4)}{const $=Ne(-3250.4,-1161);S(-3250.4,-1161,28,13,17,.9,"#c4a488",$),S(-3250.4,-1161,28.4,13.4,.8,.9,C,$+6),S(-3250.4,-1161,28.4,13.4,.8,.9,C,$+11.5),cn("Tekfur Sarayı",-3250.4,$+26,-1161)}try{const G=await(await fetch("./data/seawall.json")).json();for(const[H,$,_e,J]of G.boxes)S(H,$,_e,3.5,G.h+2,J,m,Ne(H,$)-2.5);for(const[H,$,_e]of G.towers)S(H,$,9,8,G.th,_e,"#c2b293",Ne(H,$)-.5)}catch{}{const[G,H]=[3099.2,1736],$=200,_e=265;S(G,H-_e/2,$,24,20),S(G,H+_e/2,$,24,20),S(G-$/2,H,24,_e,20),S(G+$/2,H,24,_e,20);for(const J of[-1,1])for(const pe of[-1,1])S(G+J*$/2,H+pe*_e/2,16,16,30),ce(oe,O,G+J*$/2,33,H+pe*_e/2,16,6,16);cn("Selimiye Kışlası",G,50,H)}F(3132.8,1537,10,2,45),F(3107.6,-376,9,2,45),F(3023.6,-143.7,12,2,50);{const[G,H]=[2108.2,265.4];S(G,H,22,14,6),ce(be,re,G,15,H,4.5,18,4.5),ce(ne,O,G,24+2.5,H,5,5,5),ce(be,re,G,30,H,1,2,1),cn("Kız Kulesi",G,40,H)}{const[G,H]=[3393.2,2941.3],$=.55;S(G,H,95,36,24,$,"#cdb79a");for(const _e of[-1,1]){const J=G+Math.cos($)*_e*44,pe=H-Math.sin($)*_e*44;S(J,pe,14,14,30,$,"#cdb79a"),ce(ne,"#6f6a66",J,34,pe,9,8,9)}cn("Haydarpaşa Garı",G,48,H)}{const[G,H]=[1679.8,-1725],$=.87;S(G,H,280,42,18,$,"#ece6da"),S(G,H,55,50,28,$,"#ece6da"),ce(W,O,G,28,H,14,9,14),cn("Dolmabahçe",G,46,H)}for(const[G,H,$]of[["Selimiye Camii",3132.8,1537],["Mihrimah Sultan",3107.6,-376],["Yeni Valide",3023.6,-143.7]])(!ze||G!=="Yeni Valide")&&cn(G,H,58,$);const N=Sa(v);if(v.forEach(G=>G.dispose()),N){N.computeVertexNormals();const G=new rt(N,Po(new tt({vertexColors:!0})));G.castShadow=G.receiveShadow=it>=2,G.name="wm5ph",We.add(G),window.__wm5ph=N.attributes.position.count/3}}catch(v){console.warn("wm5 placeholders skipped",v)}if(e)try{const v=mE(e,Ne,ze);We.add(v.grp);for(const P of v.detail)er.push(P);window.__kc=v.tris,cn("Kapalıçarşı",-900,Ne(-900,1390)+30,1390,"district")}catch(v){console.warn("kapalicarsi skipped",v)}if(it>=3){let v={};try{v=await(await fetch("./data/landuse.json")).json()}catch{}qt(v.railway||[],.08,"#857a70"),qt(v.construction||[],.085,"#a8957e"),qt(v.religious||[],.09,"#cdbfa8"),qt(i.parks,.12,Ve?Ve.parks:"#bcd59a"),qt(v.cemetery||[],.125,"#7f9469"),qt(v.pitch||[],.13,"#5f9e4f"),qt(i.plazas,.14,Ve?Ve.plazas:"#e8dcc6");const P=i.roads;qt(P.path||[],.16,Ve?Ve.path:"#f4ecdd"),qt(P.service||[],.18,Ve?Ve.service:"#f7f2ea"),qt(P.minor||[],.2,Ve?Ve.minor:"#fbf8f2"),qt(P.major||[],.22,Ve?Ve.major:"#f2d9a6"),qt(P.rail||[],.26,Ve?Ve.rail:"#8d8a86"),qt(P.tram||[],.28,Ve?Ve.tram:"#b2473e")}Xs("before_buildings");const b=i.palette,L=(Ve?Ve.walls:b.walls).map(v=>new Me(v)),B=(Ve?Ve.roofs:b.roofs).map(v=>new Me(v)),w=(Ve?Ve.flats:b.flats).map(v=>new Me(v));let D=0;const M=[],y=[],T=v=>{const P=Math.sin(v*91.17)*43758.5453;return P-Math.floor(P)},j=(v,P,q,k,K)=>{const[X,ce,R,be,ne]=v.hip,oe=Math.cos(R),W=Math.sin(R),re=-W,O=oe,C=v.p[0][0],m=(F,Q)=>{let N=!1;for(let G=0,H=C.length-2;G<C.length;H=G,G+=2){const $=C[G],_e=C[G+1],J=C[H],pe=C[H+1];_e>Q!=pe>Q&&F<(J-$)*(Q-_e)/(pe-_e)+$&&(N=!N)}return N},S=ze?.08:.18;if(T(P*3.1)<S&&be>6){const F=(T(P*5.3)-.5)*be*.6,Q=(T(P*7.7)<.5?-1:1)*ne*.12,N=X+oe*F+re*Q,G=ce+W*F+O*Q;m(N,G)&&M.push([N,k+K(F,Q),G,R])}if(!ze&&(q===2||q===3)&&ne>7&&be>8&&T(P*11.3)<.16){const F=T(P*13.9)<.5?-1:1,Q=be>16?2:1;for(let N=0;N<Q;N++){const G=Q===1?0:(N===0?-.22:.22)*be,H=F*(ne/2-Math.min(2.4,ne*.28)),$=X+oe*G+re*H,_e=ce+W*G+O*H;m($,_e)&&y.push([$,k+K(G,H),_e,R+(F>0?0:Math.PI)])}}},V=["#7d828c","#6f7a80","#8a8a90","#5f6b70"].map(v=>new Me(v)),he=new Me("#e6ddcf"),fe=new Me("#d6ccbb"),ae=[],se=(v,P,q)=>{let k=!1;for(let K=0,X=v.length-2;K<v.length;X=K,K+=2){const ce=v[K],R=v[K+1],be=v[X],ne=v[X+1];R>q!=ne>q&&P<(be-ce)*(q-R)/(ne-R)+ce&&(k=!k)}return k},te=(v,P,q)=>{const k=v.p[0]?.[0];if(!k)return;const K=Math.abs(On(k));if(K<60||T(P*15.1)>(ze?.4:.7))return;let X=0,ce=0;for(let W=0;W<k.length;W+=2)X+=k[W],ce+=k[W+1];const R=X/(k.length/2),be=ce/(k.length/2),ne=K>300&&!ze?2:1,oe=Math.sqrt(K)*.22;for(let W=0;W<ne;W++){const re=T(P*3.7+W)*6.283,O=R+Math.cos(re)*oe*T(P+W*5.1),C=be+Math.sin(re)*oe*T(P*2.9+W);se(k,O,C)&&ae.push([O,q,C,W===0&&T(P*19.7)<.05?2:T(P*7.3+W)<.55?0:1,re])}},ge=new Map,ie=(Dt?["#f0e2c4","#ddd6cc","#f3ede0","#e8d3a4","#ecd8bc","#d6cfc4","#efcfb4","#d4dccc","#f0d890","#b8553a","#a84c36"]:["#efe8d8","#dedcd6","#f3f0ea","#e6d8b8","#e9e2d2","#d4d3cf","#ecd9c4","#d6dcd4","#efe0a8","#b5583f","#a9533e"]).map(v=>new Me(v)),me=["#8c7c6a","#a3907a","#7a6e62","#c4aa82","#d6bd94","#b59b7a","#c86a40","#9a8672"].map(v=>new Me(v)),xe=[.11,.11,.11,.1,.1,.08,.06,.05,.04,.12,.12],ve=new Map,Y=nn.get("lod")==="0"?1e9:ze?1800:2400;for(const v of i.buildings){let P=ge.get(v.c);P||(P=new bs,P.tex=!!n,ge.set(v.c,P));{let be=ve.get(v.c);be||(be=new bs,ve.set(v.c,be));const ne=v.p[0]?.[0],oe=ne?Math.abs(On(ne)):0;if(ne&&(oe>30||v.h>12)){let W=1e9,re=0,O=0;if(vt)for(let N=0;N<ne.length;N+=2)W=Math.min(W,Ne(ne[N],ne[N+1])),re+=ne[N],O+=ne[N+1];const C=vt?Ne(re/(ne.length/2),O/(ne.length/2)):0,m=v.m>0?C+v.m:vt?W-.5:0,S=L[v.w%L.length],F=v.hip?B[v.r%(B.length-1)]:w[v.r%w.length];let Q=v.p[0];if(v.hip&&ne.length>8){const[N,G,H,$,_e]=v.hip,J=Math.cos(H)*$/2,pe=Math.sin(H)*$/2,Se=-Math.sin(H)*_e/2,we=Math.cos(H)*_e/2;Q=[[N-J-Se,G-pe-we,N+J-Se,G+pe-we,N+J+Se,G+pe+we,N-J+Se,G-pe+we]],On(Q[0])*On(ne)<0&&(Q[0]=[Q[0][6],Q[0][7],Q[0][4],Q[0][5],Q[0][2],Q[0][3],Q[0][0],Q[0][1]])}else ne.length>10&&(Q=[DE(ne,ze?3:2)]);Rn(be,[Q],m,C+v.h+(v.hip?1.5:0),S,F)}}let q=0,k=0;if(vt&&v.p[0]?.[0]){const be=v.p[0][0];let ne=0,oe=0,W=0;k=1e9;for(let re=0;re<be.length;re+=2)ne+=be[re],oe+=be[re+1],W++,k=Math.min(k,Ne(be[re],be[re+1]));q=Ne(ne/W,oe/W),k-=.5}const K=v.m>0?q+v.m:k,X=q+v.h;if(it<2){Rn(P,v.p,K,X,he,fe);continue}D++;let ce=Ve?ln(L[(v.w+D)%L.length],D,.7):L[v.w],R=Ve?v.k??(v.hip?1:0):v.hip?1:0;if(n){const be=v.p[0]?.[0]||[0,0];let ne=0,oe=0;for(let G=0;G<be.length;G+=2)ne+=be[G],oe+=be[G+1];const W=ne/(be.length/2),re=oe/(be.length/2),C=i.origin[1]-re/110574<41.0195,m=Math.hypot(W-u[0],re-u[1])<900,S=R===4||v.h>=19||R===0&&v.h>=12,F=T(D*2.3);P.wl=S?2:C?F<.06&&v.h<12?1:F<.12?4:F<.17?5:0:F<.45?3:F<.6?5:0,P.rl=v.g?7:6,P.base=K,P.wh=X-K,P.seed=Math.floor(T(D*1.7)*997)/10;const Q=Math.hypot(W-f[0],re-f[1])<750,N=!m&&v.h>=11&&P.wl!==4&&P.wl!==5;if(P.st=(N?8:0)+(N&&T(D*4.1)<.55?1:0)+(N&&T(D*5.9)<.3?2:0)+(v.h>=6&&T(D*6.7)<(N?.6:C?.3:.5)?4:0),N){let G=T(D*8.3),H=0;for(;H<ie.length-1&&G>xe[H];)G-=xe[H],H++;ce=ln(ie[H],D,.5),(Dt?v.h>=18&&!C&&!Q&&R!==0&&T(D*9.7)<.7:v.h>=14&&R!==0&&T(D*9.7)<.7)&&(R=4,P.rl=2)}if(Dt&&!C&&!S&&R>=1&&R<=5){const G=T(D*17.3);G<.12?(v.g=1,P.rl=7):(v.g=0,P.rl=6,G<.32&&(R=4,P.rl=2))}if(Dt&&Q&&!S){const G=T(D*10.9);ce=ln(me[Math.floor(T(D*11.3)*me.length)],D,.5),G<.55&&(P.wl=T(D*13.1)<.6?3:4)}}if(v.hip&&R>=1&&R<=3){let be=Ve?ln(B[(v.r+(D%3===0?1:0))%(B.length-1)],D+7):B[v.r%B.length];if(Dt&&!v.g&&(be=ln(B[(v.r+D)%(B.length-1)],D+7,1.4),T(D*12.7)<.14&&be.lerp(new Me("#9a8a80"),.3)),Ve&&v.g&&(be=ln(V[D%V.length],D+11,.6)),Ve&&yc){Rn(P,v.p,K,X,ce,null);const ne=R===3&&!v.g?ln(V[(D>>2)%V.length],D+5,.6):be,oe=TE(P,v.p,v.hip,R,X,ne,R===3?be.clone().multiplyScalar(.9):be,ce,v.g?-1:7);j(v,D,R,X,oe)}else Rn(P,v.p,K,X,ce,w[0]),R===2?CE(P,v.hip,X,be,ce):R===3?SE(P,v.hip,X,Ve&&!v.g?ln(V[(D>>2)%V.length],D+5,.6):be,be.clone().multiplyScalar(.9)):df(P,v.hip,X,be)}else if(Ve&&yc&&R===5&&v.bd&&v.in){Rn(P,v.p,K,X,ce,null);const be=v.g?ln(V[D%V.length],D+11,.6):ln(B[v.r%(B.length-1)],D+7);BE(P,v.bd,v.in,X,v.rh||2,be,ln(w[v.r%w.length],D+3))}else if(Ve&&R===4){Rn(P,v.p,K,X+.9,ce,null),P.rl=2;for(const be of v.p)_r(P,be,X,ln(w[v.r%w.length],D+3));Dt&&te(v,D,X)}else P.rl=2,Dt&&v.h>=9&&te(v,D,X),Rn(P,v.p,K,X,ce,Ve?ln(w[v.r%w.length],D+3):w[v.r%w.length])}const de=new tt({vertexColors:!0,side:Ve?yt:Nn}),Ce=new tt({vertexColors:!0,side:Ve?yt:Nn});if(M.length||y.length){const v=new Qe,P=new St,q=new U(1,1,1),k=new U(0,1,0),K=new U,X=new Yt(.8,2.2,.8).translate(0,.6,0),ce=new Ct(X,new tt({color:"#b98068"}),M.length);M.forEach((S,F)=>{P.setFromAxisAngle(k,-S[3]),v.compose(K.set(S[0],S[1],S[2]),P,q),ce.setMatrixAt(F,v)}),ce.castShadow=ce.receiveShadow=!0,ce.computeBoundingSphere(),We.add(ce),er.push(ce);const R=new Yt(1.7,1.6,2).translate(0,.5,.3),be=new bt,ne=1.05,oe=1.3,W=2.1,re=-.8,O=1.45;be.setAttribute("position",new nt([-ne,oe,re,-ne,oe,O,0,W,O,-ne,oe,re,0,W,O,0,W,re,ne,oe,O,ne,oe,re,0,W,re,ne,oe,O,0,W,re,0,W,O,-ne,oe,O,ne,oe,O,0,W,O].map(S=>S),3)),be.computeVertexNormals();const C=new Ct(R,new tt({color:"#efe1bd"}),y.length),m=new Ct(be,new tt({color:"#c8703c",side:yt}),y.length);y.forEach((S,F)=>{P.setFromAxisAngle(k,-S[3]),v.compose(K.set(S[0],S[1]-.4,S[2]),P,q),C.setMatrixAt(F,v),m.setMatrixAt(F,v)});for(const S of[C,m])S.castShadow=S.receiveShadow=!0,S.computeBoundingSphere(),We.add(S),er.push(S);window.__bits={chimneys:M.length,dormers:y.length}}if(ae.length){const v=new Qe,P=new St,q=new U(1,1,1),k=new U(0,1,0),K=new U,X=[new Yt(1.7,1.4,1.7).translate(0,.7,0),new Yt(2.6,2.3,2.2).translate(0,1.15,0),new zi(2.6,12,5,0,Math.PI*2,0,Math.PI/2)],ce=["#a9a8a6","#cfc4b4","#8794a4"];for(let R=0;R<3;R++){const be=ae.filter(oe=>oe[3]===R);if(!be.length)continue;const ne=new Ct(X[R],new tt({color:ce[R]}),be.length);be.forEach((oe,W)=>{P.setFromAxisAngle(k,oe[4]),v.compose(K.set(oe[0],oe[1],oe[2]),P,q),ne.setMatrixAt(W,v)}),ne.castShadow=ne.receiveShadow=!0,ne.computeBoundingSphere(),We.add(ne),er.push(ne)}window.__boxes=ae.length}for(const[v,P]of ge){const q=P.geometry();q.computeBoundingSphere();const k=q.boundingSphere.center.clone(),K=new rt(q,n?n.mat:Ce);K.castShadow=K.receiveShadow=it>=2;const X=ve.get(v);if(!X||!X.pos.length||Y>1e8){We.add(K);continue}q.translate(-k.x,-k.y,-k.z);const ce=X.geometry(),R=Yh(k.x,k.z,s,r);R.bld.push(ce.clone()),ce.translate(-k.x,-k.y,-k.z);const be=new rt(ce,de);be.receiveShadow=it>=2;const ne=new va;ne.position.copy(k),ne.addLevel(K,0),ne.addLevel(be,Y),We.add(ne),R.members.push(ne)}gf=Y;for(const v of Er.values())if(v.bld.length>1){const P=Sa(v.bld);if(v.bld.forEach(k=>k.dispose()),v.bld=[],!P)continue;P.computeBoundingSphere(),v.c.copy(P.boundingSphere.center),v.r=P.boundingSphere.radius;const q=new rt(P,de);q.receiveShadow=it>=2,q.visible=!1,We.add(q),v.merged.push(q)}else v.merged=[];if(window.__lod={far:Y,chunks:ge.size},Xs("before_trees"),it>=4&&Dt&&nn.get("xtrees")!=="0"){const v=[],P=i.trees.slice();for(let oe=0;oe<P.length;oe++){const W=P[oe];if(W[2]*=1.15+.4*T(oe*1.3),W[4]===2){W.length=4;continue}if(T(oe*2.1)<.6){const re=T(oe*3.3)*6.283,O=4+3*T(oe*4.7);v.push([W[0]+Math.cos(re)*O,W[1]+Math.sin(re)*O,.9+.5*T(oe*5.9),(W[3]+1+oe)%9])}}const q=new Map,k=40,K=(oe,W)=>Math.floor(oe/k)*100003+Math.floor(W/k);for(const oe of i.buildings){const W=oe.p[0]?.[0];if(!W)continue;let re=1e9,O=-1e9,C=1e9,m=-1e9;for(let S=0;S<W.length;S+=2)re=Math.min(re,W[S]),O=Math.max(O,W[S]),C=Math.min(C,W[S+1]),m=Math.max(m,W[S+1]);for(let S=Math.floor(re/k);S<=Math.floor(O/k);S++)for(let F=Math.floor(C/k);F<=Math.floor(m/k);F++){const Q=S*100003+F;(q.get(Q)||q.set(Q,[]).get(Q)).push(W)}}const X=(oe,W,re)=>{for(const[O,C]of[[0,0],[re,0],[-re,0],[0,re],[0,-re]])for(const m of q.get(K(oe+O,W+C))||[])if(se(m,oe+O,W+C))return!0;return!1};let ce=0;for(const oe of i.buildings)for(const W of oe.p)for(let re=1;re<W.length;re++){const O=W[re],C=Math.abs(On(O));if(C<80)continue;let m=0,S=0;for(let H=0;H<O.length;H+=2)m+=O[H],S+=O[H+1];const F=m/(O.length/2),Q=S/(O.length/2),N=Math.min(4,1+Math.floor(C/250)),G=Math.sqrt(C)*.25;for(let H=0;H<N;H++){ce++;const $=T(ce*1.9)*6.283,_e=F+Math.cos($)*G*(H?1:0),J=Q+Math.sin($)*G*(H?1:0);se(O,_e,J)&&v.push([_e,J,.85+.35*T(ce),ce%9])}}const R=i.water.map(oe=>{const W=oe[0];let re=1e9,O=1e9,C=-1e9,m=-1e9;for(let S=0;S<W.length;S+=2)re=Math.min(re,W[S]),C=Math.max(C,W[S]),O=Math.min(O,W[S+1]),m=Math.max(m,W[S+1]);return[re,O,C,m]}),be=(oe,W)=>i.water.some((re,O)=>{const C=R[O];if(oe<C[0]||oe>C[2]||W<C[1]||W>C[3])return!1;let m=!1;for(const S of re)for(let F=0,Q=S.length-2;F<S.length;Q=F,F+=2)S[F+1]>W!=S[Q+1]>W&&oe<(S[Q]-S[F])*(W-S[F+1])/(S[Q+1]-S[F+1])+S[F]&&(m=!m);return m});let ne=0;for(const[oe,W]of[["major",13],["minor",17]])for(const re of i.roads[oe]||[]){const O=re[0],C=On(O)>0?1:-1;for(let m=0;m<O.length;m+=2){const S=(m+2)%O.length,F=O[S]-O[m],Q=O[S+1]-O[m+1],N=Math.hypot(F,Q);if(N<4)continue;const G=Q/N*C,H=-F/N*C;for(let $=W*.5;$<N;$+=W){if(ne++,T(ne*1.7)>.65)continue;const _e=O[m]+F*($/N)+G*2.6,J=O[m+1]+Q*($/N)+H*2.6;!X(_e,J,2.5)&&!be(_e,J)&&v.push([_e,J,.75+.35*T(ne*2.3),ne%9])}}}i.trees=P.concat(v.filter((oe,W)=>W%2===0).map(oe=>[oe[0],oe[1],oe[2],oe[3],1])),window.__trees=i.trees.length}if(e&&(i.trees=i.trees.filter(v=>!t(v[0],v[1]))),it>=4&&i.trees.length){const v=new ai(.3,.42,3.2,5).translate(0,1.6,0),P=new Vc(3.3,0).translate(0,5.6,0),q=new Ca(3.6,0).translate(0,5.6,0),k=new tt({color:"#7a5a3c"}),K=new tt({flatShading:!0}),X=(Ve?Ve.trees:["#d9822b","#e6ad3c","#b8532c","#8f9d3e","#c96f2d"]).map(O=>new Me(O)),ce=new Map;for(const O of i.trees){const C=Math.floor((O[0]-s)/500)+1e3*Math.floor((O[1]-r)/500)+(O[4]===1?1e7:0);(ce.get(C)||ce.set(C,[]).get(C)).push(O)}const R=new Qe,be=new St,ne=new U,oe=new U,W=new U(0,1,0);let re=0;for(const O of ce.values()){const C=!!O[0][4];C&&O.sort((_e,J)=>T(_e[0]*.37+_e[1]*.71)-T(J[0]*.37+J[1]*.71));const m=new Ct(v,k,O.length),S=new Ct(P,K,O.length);let F=0,Q=0;for(const _e of O)F+=_e[0],Q+=_e[1];F/=O.length,Q/=O.length;const N=new Ct(q,K,Math.ceil(O.length/2));let G=0;O.forEach((_e,J)=>{re++;const pe=_e[2];oe.set(_e[0]-F,Ne(_e[0],_e[1]),_e[1]-Q),be.setFromAxisAngle(W,re*2.39996%6.283),ne.set(pe,pe*(.9+re%5*.06),pe),R.compose(oe,be,ne);const Se=Ve?ln(X[(_e[3]+re)%X.length],re,.8):X[_e[3]%X.length];m.setMatrixAt(J,R),S.setMatrixAt(J,R),S.setColorAt(J,Se),J%2===0&&(N.setMatrixAt(G,R),N.setColorAt(G,Se),G++)}),m.computeBoundingSphere(),S.computeBoundingSphere(),N.computeBoundingSphere(),S.castShadow=!C,S.receiveShadow=!0,m.castShadow=!1,N.receiveShadow=!0,C&&mf.push([m,S,O.length]);const H=new Un;Dt&&ze?H.add(S):H.add(m,S);const $=new va;$.position.set(F,0,Q),$.addLevel(H,0),$.addLevel(N,Y*.8),We.add($);{const _e=Yh(F,Q,s,r);_e.members.push($);const J=new Qe,pe=new Qe().makeTranslation(F,0,Q),Se=new Me;for(let we=0;we<G;we+=ze?2:1)N.getMatrixAt(we,J),N.getColorAt(we,Se),_e.trees.push({m:pe.clone().multiply(J),c:Se.clone()})}}}for(const v of Er.values())if(v.trees.length&&v.members.length>1){const P=new Ct(new Ca(3.6,0).translate(0,5.6,0),new tt({flatShading:!0}),v.trees.length);v.trees.forEach((q,k)=>{P.setMatrixAt(k,q.m),P.setColorAt(k,q.c)}),P.computeBoundingSphere(),P.receiveShadow=!0,P.visible=!1,We.add(P),v.merged.push(P),v.r||(v.c.copy(P.boundingSphere.center),v.r=P.boundingSphere.radius),v.trees=[]}if(Xs("before_landmarks"),it>=6)for(const v of i.landmarks){const P=new bs;P.tex=!!n,v.prims.forEach((k,K)=>{if(P.seed=T(K*3.1+v.label[0])*100,k.t==="lathe"){ME(P,k);return}const X=new Me(k.col);if(P.wl=k.tx??8,P.rl=k.t==="pave"?10:k.tx??8,P.base=k.z0,P.ridge=0,k.t==="prism")P.wh=k.z1-k.z0,P.st=k.st||128,Rn(P,k.p,k.z0,k.z1,X,X.clone().multiplyScalar(.95));else if(k.t==="pave")for(const ce of k.p)_r(P,ce,k.z0,X);else k.t==="lowroof"&&(P.rl=9,P.wh=.8,P.st=128,Rn(P,k.p,k.z0,k.z0+.8,Ve?X.set("#7b8a9c"):X,X))});const q=Ne(v.label[0],v.label[1]);if(v.prims.length){const k=new rt(P.geometry().translate(0,q,0),n?n.mat:de);k.castShadow=k.receiveShadow=!0,We.add(k)}if(v.model&&v.id==="ayasofya"){const k=await aE({base:"./",project:h,groundY:Ne,lodDistance:900*(It?1/ms:1)});We.add(k.object),window.__aya={lodTriangles:k.triangles,at:[Math.round(k.object.position.x*10)/10,Math.round(k.object.position.z*10)/10]}}if(v.model&&v.id==="sultanahmet"){const k=await lE({base:"./",project:h,groundY:Ne,lodDistance:800*(It?1/ms:1)});We.add(k.object),window.__lm={...window.__lm||{},sultanahmet:{lodTriangles:k.triangles,at:[Math.round(k.object.position.x*10)/10,Math.round(k.object.position.z*10)/10]}}}if(v.model&&(v.id==="yenicami"||v.id==="rustempasa"||v.id==="galata"||v.id==="nusretiye"||v.id==="ayatriada"||v.id==="stantoine")){const K=await(["nusretiye","ayatriada","stantoine"].includes(v.id)?X=>gE(v.id,X):v.id==="yenicami"?hE:v.id==="galata"?dE:uE)({base:"./",project:h,groundY:Ne,lodDistance:700*(It?1/ms:1)});We.add(K.object),window.__lm={...window.__lm||{},[v.id]:{lodTriangles:K.triangles,at:[Math.round(K.object.position.x*10)/10,Math.round(K.object.position.z*10)/10]}}}if(v.model&&v.id==="topkapi"){const k=await cE({base:"./",project:h,groundY:Ne,lodDistance:700*(It?1/ms:1)});if(vt){k.object.updateMatrixWorld(!0);const K=k.object.position.y,X=new U,ce=new Set;k.object.traverse(R=>{if(!R.isMesh||ce.has(R.geometry))return;ce.add(R.geometry);const be=R.geometry,ne=be.attributes.position,oe=new U().setFromMatrixScale(R.matrixWorld).y||1,W=new Float32Array(ne.count*3);for(let re=0;re<ne.count;re++){X.fromBufferAttribute(ne,re);const O=X.x,C=X.y,m=X.z;X.applyMatrix4(R.matrixWorld),W[re*3]=O,W[re*3+1]=C+((Cc(X.x,X.z)?Hi:Ne(X.x,X.z))-K)/oe,W[re*3+2]=m}be.setAttribute("position",new Mt(W,3)),be.computeBoundingBox(),be.computeBoundingSphere()})}if(vt){const K=yi,X=[];for(let ne=0,oe=K.length-2;ne<K.length;oe=ne,ne+=2){const W=K[oe],re=K[oe+1],O=K[ne],C=K[ne+1],m=Math.hypot(O-W,C-re),S=Math.max(1,Math.round(m/6));let F=(C-re)/m,Q=-(O-W)/m;const N=(W+O)/2,G=(re+C)/2;Cc(N+F*3,G+Q*3)&&(F=-F,Q=-Q);for(let H=0;H<S;H++){const $=(H+.5)/S,_e=W+(O-W)*$+F*1.4,J=re+(C-re)*$+Q*1.4,pe=Math.min(Ne(_e+F*2,J+Q*2),Ne(_e,J),lr(_e-(O-W)/S*.5,J-(C-re)/S*.5),lr(_e+(O-W)/S*.5,J+(C-re)/S*.5));Hi-pe<1||X.push([_e,J,m/S+.6,pe-2.5,Hi+1.2,Math.atan2(-(C-re),O-W)])}}const ce=new Ct(new Yt(1,1,1),new tt({color:"#cbbda2"}),X.length);ce.name="aud:wall";const R=new Qe,be=new St;X.forEach((ne,oe)=>{be.setFromAxisAngle(new U(0,1,0),ne[5]),R.compose(new U(ne[0],(ne[3]+ne[4])/2,ne[1]),be,new U(ne[2],ne[4]-ne[3],2.8)),ce.setMatrixAt(oe,R)}),ce.castShadow=ce.receiveShadow=!0,We.add(ce),window.__tkWalls={n:X.length,maxH:Math.round(Math.max(0,...X.map(ne=>Hi-ne[3]-2.5)))}}We.add(k.object),window.__lm={...window.__lm||{},topkapi:{lodTriangles:k.triangles,at:[Math.round(k.object.position.x*10)/10,Math.round(k.object.position.z*10)/10]}}}{const k={ayasofya:2.6,sultanahmet:.9,suleymaniye:3.9,yenicami:3.6,galata:.4,topkapi:.8,nusretiye:.6,ayatriada:2.7,stantoine:4.75};je["lm_"+v.id]={t:[v.label[0],v.label[1]],d:v.id==="galata"?240:["nusretiye","ayatriada","stantoine"].includes(v.id)?150:360,pol:1.15,y:v.id==="topkapi"?5:v.id==="galata"?30:["nusretiye","ayatriada","stantoine"].includes(v.id)?12:24,az:k[v.id]??0},v.id==="ayasofya"&&(je.hd_apse={t:[117,1675],d:95,pol:.95,y:14,az:.98},je.hd_apse_s={t:[117,1675],d:95,pol:.95,y:14,az:1.9},je.hd_pilot={t:[95,1662],d:230,pol:.85,y:20,az:2.9}),v.id==="stantoine"&&(je.sa_top={t:[-172.4,-977.5],d:215,pol:.02,y:0,az:-1.897},je.sa_obl={t:[-155.3,-971.7],d:150,pol:.82,y:8,az:-1.254}),v.id==="topkapi"&&(je.tk_wide={t:[395,1245],d:820,pol:.95,y:5,az:.8})}cn(v.name,v.label[0],v.label[2]+q,v.label[1],v.id==="rustempasa"?"w":v.id==="yenicami"?"e":v.id==="ayatriada"?"below":"")}if(cn("Taksim",A[0],5+Ne(A[0],A[1]),A[1],"area"),it>=5){const v=document.getElementById("tod");v.hidden=!1;const P=document.getElementById("hour");mn&&!nn.get("hour")&&(P.value=String(ff)),nn.get("hour")&&(P.value=nn.get("hour")),P.addEventListener("input",()=>Mc(Number(P.value))),Mc(Number(P.value))}document.getElementById("loading").remove();try{const v=await(await fetch("./data/aqueduct.json")).json(),P=v.line,q=13.5,k=[];for(let m=0;m<P.length-1;m++){const[S,F]=P[m],[Q,N]=P[m+1],G=Math.hypot(Q-S,N-F);if(G>60)continue;const H=Math.max(1,Math.round(G/q));for(let $=0;$<H;$++)k.push([S+(Q-S)*$/H,F+(N-F)*$/H,Math.atan2(-(N-F),Q-S),G/H])}let K=1e9,X=-1e9;for(const m of k){const S=Ne(m[0],m[1]);K=Math.min(K,S),X=Math.max(X,S)}const ce=Math.max(K+v.hmax,X+4),R=[];for(const[m,S,F,Q]of k){const N=Ne(m,S);ce-9>N&&R.push([m,S,F,4.2,N-1,ce-9,v.w]),R.push([m,S,F,Q+.05,Math.max(N-1,ce-9.5),ce-7.5,v.w+.6]),R.push([m,S,F,3,Math.max(N-1,ce-7.5),ce-2,v.w-.4]),R.push([m,S,F,Q+.05,Math.max(N-1,ce-2),ce,v.w])}const be=new Qe,ne=new St,oe=new U(0,1,0),W=new U,re=new U,O=Po(new tt({color:"#b9a98c"}));for(const[m,S]of[[R.filter(F=>F[4]<F[5]-6||F[3]===4.2),"aud:wall"],[R.filter(F=>!(F[4]<F[5]-6||F[3]===4.2)),"aqueduct-spans"]]){const F=new Ct(new Yt(1,1,1),O,Math.max(1,m.length));F.name=S,F.count=m.length,m.forEach(([Q,N,G,H,$,_e,J],pe)=>F.setMatrixAt(pe,be.compose(W.set(Q,($+_e)/2,N),ne.setFromAxisAngle(oe,G),re.set(H,_e-$,J)))),F.castShadow=F.receiveShadow=it>=2,We.add(F)}const C=P[Math.floor(P.length/2)];cn("Bozdoğan Kemeri",C[0],ce+12,C[1]),window.__aq={piers:k.length,top:Math.round(ce)}}catch(v){console.warn("aqueduct skipped",v)}for(const v of["dikilitas","ormedikilitas","yilanlisutun","almancesmesi"])try{const P=await $i(v,{base:"./",project:h,groundY:Ne,lodDistance:1500});P.object.name="aud:monument",We.add(P.object)}catch(P){console.warn("monument skipped",v,P)}cn("Dikilitaş",-302,Ne(-302,1943)+30,1943),cn("Alman Çeşmesi",-260,Ne(-260,1784)+16,1784),je.hipodrom={t:[-310,1930],y:8,d:ze?420:330,pol:.85,az:2.2},je.sarayburnu={t:[430,1e3],y:20,d:ze?900:700,pol:1,az:.3},je.bozdogan={t:[-1900,880],y:25,d:ze?520:420,pol:1.2,az:2.2},je.pool={t:[-70,1800],y:30,d:ze?330:260,pol:.95,az:.3},je.galata_slope={t:[-420,-150],y:30,d:ze?600:480,pol:1.05,az:.4},je.suleymaniye_s={t:[-1260,820],y:30,d:ze?600:480,pol:1,az:2.4},Xs("ready"),window.__scene=We,window.__ready=!0}let An=null;const fa=new Oa(v_),da=new Oa(y_);function QE(){if(!_E)return;const i=window.innerWidth,e=window.innerHeight;An=new $b(zt),An.setPixelRatio(Math.min(window.devicePixelRatio,2)),An.setSize(i,e),An.addPass(new e_(We,Wn));const t=new kn(We,Wn,i,e);t.updateGtaoMaterial({radius:12,distanceExponent:1.4,thickness:6,scale:1.4,samples:12,distanceFallOff:1,screenSpaceRadius:!1}),t.blendIntensity=1,An.addPass(t),An.addPass(new Ls(new De(i,e),.1,.5,.95)),fa.uniforms.h.value=2.2/i,da.uniforms.v.value=2.2/e,fa.uniforms.r.value=da.uniforms.r.value=.5,An.addPass(fa),An.addPass(da),An.addPass(new o_),An.addPass(new Oa({uniforms:{tDiffuse:{value:null}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`uniform sampler2D tDiffuse; varying vec2 vUv;
      void main(){ vec4 c = texture2D(tDiffuse, vUv); vec3 x = c.rgb;
        float l = dot(x, vec3(0.299, 0.587, 0.114));
        x = mix(vec3(l), x, ${Dt?"1.12":"1.08"});                       // more saturation
        x = (x - 0.5) * ${Dt?"1.1":"1.06"} + 0.5;                       // a little more contrast, no milky lift
        vec2 q = vUv - 0.5; x *= 1.0 - 0.35 * dot(q, q);  // soft vignette like the Warsaw frames
        gl_FragColor = vec4(clamp(x, 0.0, 1.0), c.a); }`}))}QE();const Er=new Map;let gf=1e9;const er=[],Yh=(i,e,t,n)=>{const s=Math.floor((i-t)/1500)+1e3*Math.floor((e-n)/1500);let r=Er.get(s);return r||(r={key:s,bld:[],trees:[],members:[],merged:[],c:new U,r:0},Er.set(s,r)),r};function OE(){for(const i of Er.values()){if(!i.merged.length)continue;const e=Wn.position.distanceTo(i.c)-i.r>gf;for(const t of i.merged)t.visible=e;for(const t of i.members)t.visible=!e}}const mf=[];let Xh=-1;function bf(){rn.update(),kt.target.position.copy(rn.target),kt.position.copy(rn.target).addScaledVector(hf,3e3);const i=Wn.position.distanceTo(rn.target),e=i*ms,t=e>3200?2:e>1800?1:0;if(t!==Xh){Xh=t;for(const[r,a,o]of mf)r.count=a.count=t===2?Math.ceil(o*.3):t===1?Math.ceil(o*.65):o}const n=Xt.clamp(e*.75,250,2600),s=kt.shadow.camera;s.right!==n&&(s.left=-n,s.right=n,s.top=n,s.bottom=-n,s.updateProjectionMatrix()),mn&&We.fog instanceof La&&(Dt?(We.fog.near=i*.95,We.fog.far=i+e*1.3+5e3):It?(We.fog.near=i*.8,We.fog.far=i+e*.6+3500):(We.fog.near=i*2.2,We.fog.far=i*9+6e3)),OE();{const r=e<3e3;for(const a of er)a.visible=r}if(An){const r=Xt.clamp(2-e/2500,.4,1.6);fa.uniforms.h.value=r/window.innerWidth,da.uniforms.v.value=r/window.innerHeight,An.render()}else zt.render(We,Wn);LE(),window.__frames=(window.__frames||0)+1,requestAnimationFrame(bf)}window.addEventListener("resize",()=>{Wn.aspect=window.innerWidth/window.innerHeight,Wn.updateProjectionMatrix(),zt.setSize(window.innerWidth,window.innerHeight),An?.setSize(window.innerWidth,window.innerHeight)});Object.assign(window,{__setView:pf,__controls:rn,__renderer:zt,__stats:()=>({texMB:window.__texMB,triangles:zt.info.render.triangles,calls:zt.info.render.calls,geometries:zt.info.memory.geometries})});NE().then(()=>requestAnimationFrame(bf));
//# sourceMappingURL=index-Cqae9BfW.js.map
