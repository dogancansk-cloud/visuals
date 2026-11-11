(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function t(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(s){if(s.ep)return;s.ep=!0;const a=t(s);fetch(s.href,a)}})();const tl="170",Ii={ROTATE:0,DOLLY:1,PAN:2},Hi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Gf=0,wl=1,Hf=2,nl=1,bu=2,vi=3,ni=0,wn=1,It=2,tn=0,Os=1,oc=2,Sl=3,Il=4,xu=5,Zn=100,Vf=101,Wf=102,jf=103,qf=104,xa=200,Yf=201,Xf=202,Kf=203,cc=204,lc=205,hc=206,Jf=207,uc=208,Zf=209,$f=210,ed=211,td=212,nd=213,id=214,fc=0,dc=1,Ac=2,js=3,pc=4,mc=5,gc=6,bc=7,il=0,sd=1,ad=2,Xi=0,_u=1,Eu=2,vu=3,sl=4,rd=5,al=6,Mu=7,Tl="attached",od="detached",yu=300,us=301,qs=302,xc=303,_c=304,Jr=306,Pn=1e3,wi=1001,Fr=1002,on=1003,Cu=1004,_a=1005,_n=1006,Tr=1007,hi=1008,Wt=1009,wu=1010,Su=1011,Da=1012,rl=1013,fs=1014,un=1015,an=1016,ol=1017,cl=1018,ds=1020,Iu=35902,Tu=1021,Bu=1022,jt=1023,Ru=1024,Du=1025,zs=1026,As=1027,Vi=1028,ll=1029,ls=1030,hl=1031,ul=1033,Br=33776,ya=33777,Rr=33778,Ca=33779,Nr=35840,Ec=35841,Qr=35842,vc=35843,kr=36196,Or=37492,zr=37496,La=37808,Mc=37809,yc=37810,Cc=37811,Pa=37812,wc=37813,Sc=37814,Ic=37815,Tc=37816,Bc=37817,Rc=37818,Dc=37819,Lc=37820,Pc=37821,wa=36492,Uc=36494,Gr=36495,Lu=36283,Fc=36284,Nc=36285,Qc=36286,Ua=2300,Fa=2301,fo=2302,Bl=2400,Rl=2401,Dl=2402,cd=2500,ld=0,Pu=1,kc=2,hd=3200,ud=3201,Zr=0,fd=1,ci="",Pt="srgb",fn="srgb-linear",$r="linear",pt="srgb",vs=7680,Ll=519,dd=512,Ad=513,pd=514,Uu=515,md=516,gd=517,bd=518,xd=519,Oc=35044,Pl="300 es",Si=2e3,Hr=2001;class gs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const a=s.indexOf(t);a!==-1&&s.splice(a,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let a=0,r=s.length;a<r;a++)s[a].call(this,e);e.target=null}}}const ln=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Ul=1234567;const Sa=Math.PI/180,Ys=180/Math.PI;function ti(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ln[i&255]+ln[i>>8&255]+ln[i>>16&255]+ln[i>>24&255]+"-"+ln[e&255]+ln[e>>8&255]+"-"+ln[e>>16&15|64]+ln[e>>24&255]+"-"+ln[t&63|128]+ln[t>>8&255]+"-"+ln[t>>16&255]+ln[t>>24&255]+ln[n&255]+ln[n>>8&255]+ln[n>>16&255]+ln[n>>24&255]).toLowerCase()}function nn(i,e,t){return Math.max(e,Math.min(t,i))}function fl(i,e){return(i%e+e)%e}function _d(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function Ed(i,e,t){return i!==e?(t-i)/(e-i):0}function Ia(i,e,t){return(1-t)*i+t*e}function vd(i,e,t,n){return Ia(i,e,1-Math.exp(-t*n))}function Md(i,e=1){return e-Math.abs(fl(i,e*2)-e)}function yd(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Cd(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function wd(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Sd(i,e){return i+Math.random()*(e-i)}function Id(i){return i*(.5-Math.random())}function Td(i){i!==void 0&&(Ul=i);let e=Ul+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Bd(i){return i*Sa}function Rd(i){return i*Ys}function Dd(i){return(i&i-1)===0&&i!==0}function Ld(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Pd(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Ud(i,e,t,n,s){const a=Math.cos,r=Math.sin,o=a(t/2),c=r(t/2),l=a((e+n)/2),h=r((e+n)/2),u=a((e-n)/2),f=r((e-n)/2),m=a((n-e)/2),x=r((n-e)/2);switch(s){case"XYX":i.set(o*h,c*u,c*f,o*l);break;case"YZY":i.set(c*f,o*h,c*u,o*l);break;case"ZXZ":i.set(c*u,c*f,o*h,o*l);break;case"XZX":i.set(o*h,c*x,c*m,o*l);break;case"YXY":i.set(c*m,o*h,c*x,o*l);break;case"ZYZ":i.set(c*x,c*m,o*h,o*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function $n(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function mt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const gn={DEG2RAD:Sa,RAD2DEG:Ys,generateUUID:ti,clamp:nn,euclideanModulo:fl,mapLinear:_d,inverseLerp:Ed,lerp:Ia,damp:vd,pingpong:Md,smoothstep:yd,smootherstep:Cd,randInt:wd,randFloat:Sd,randFloatSpread:Id,seededRandom:Td,degToRad:Bd,radToDeg:Rd,isPowerOfTwo:Dd,ceilPowerOfTwo:Ld,floorPowerOfTwo:Pd,setQuaternionFromProperEuler:Ud,normalize:mt,denormalize:$n};class Oe{constructor(e=0,t=0){Oe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(nn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),a=this.x-e.x,r=this.y-e.y;return this.x=a*n-r*s+e.x,this.y=a*s+r*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class $e{constructor(e,t,n,s,a,r,o,c,l){$e.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,a,r,o,c,l)}set(e,t,n,s,a,r,o,c,l){const h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=a,h[5]=c,h[6]=n,h[7]=r,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,a=this.elements,r=n[0],o=n[3],c=n[6],l=n[1],h=n[4],u=n[7],f=n[2],m=n[5],x=n[8],_=s[0],p=s[3],d=s[6],C=s[1],y=s[4],M=s[7],W=s[2],V=s[5],G=s[8];return a[0]=r*_+o*C+c*W,a[3]=r*p+o*y+c*V,a[6]=r*d+o*M+c*G,a[1]=l*_+h*C+u*W,a[4]=l*p+h*y+u*V,a[7]=l*d+h*M+u*G,a[2]=f*_+m*C+x*W,a[5]=f*p+m*y+x*V,a[8]=f*d+m*M+x*G,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],a=e[3],r=e[4],o=e[5],c=e[6],l=e[7],h=e[8];return t*r*h-t*o*l-n*a*h+n*o*c+s*a*l-s*r*c}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],a=e[3],r=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=h*r-o*l,f=o*c-h*a,m=l*a-r*c,x=t*u+n*f+s*m;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/x;return e[0]=u*_,e[1]=(s*l-h*n)*_,e[2]=(o*n-s*r)*_,e[3]=f*_,e[4]=(h*t-s*c)*_,e[5]=(s*a-o*t)*_,e[6]=m*_,e[7]=(n*c-l*t)*_,e[8]=(r*t-n*a)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,a,r,o){const c=Math.cos(a),l=Math.sin(a);return this.set(n*c,n*l,-n*(c*r+l*o)+r+e,-s*l,s*c,-s*(-l*r+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Ao.makeScale(e,t)),this}rotate(e){return this.premultiply(Ao.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ao.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ao=new $e;function Fu(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Na(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Fd(){const i=Na("canvas");return i.style.display="block",i}const Fl={};function Ea(i){i in Fl||(Fl[i]=!0,console.warn(i))}function Nd(i,e,t){return new Promise(function(n,s){function a(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(a,t);break;default:n()}}setTimeout(a,t)})}function Qd(i){const e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function kd(i){const e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const ot={enabled:!0,workingColorSpace:fn,spaces:{},convert:function(i,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===pt&&(i.r=Ti(i.r),i.g=Ti(i.g),i.b=Ti(i.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(i.applyMatrix3(this.spaces[e].toXYZ),i.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===pt&&(i.r=Gs(i.r),i.g=Gs(i.g),i.b=Gs(i.b))),i},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===ci?$r:this.spaces[i].transfer},getLuminanceCoefficients:function(i,e=this.workingColorSpace){return i.fromArray(this.spaces[e].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,e,t){return i.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function Ti(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Gs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const Nl=[.64,.33,.3,.6,.15,.06],Ql=[.2126,.7152,.0722],kl=[.3127,.329],Ol=new $e().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),zl=new $e().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);ot.define({[fn]:{primaries:Nl,whitePoint:kl,transfer:$r,toXYZ:Ol,fromXYZ:zl,luminanceCoefficients:Ql,workingColorSpaceConfig:{unpackColorSpace:Pt},outputColorSpaceConfig:{drawingBufferColorSpace:Pt}},[Pt]:{primaries:Nl,whitePoint:kl,transfer:pt,toXYZ:Ol,fromXYZ:zl,luminanceCoefficients:Ql,outputColorSpaceConfig:{drawingBufferColorSpace:Pt}}});let Ms;class Od{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ms===void 0&&(Ms=Na("canvas")),Ms.width=e.width,Ms.height=e.height;const n=Ms.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Ms}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Na("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),a=s.data;for(let r=0;r<a.length;r++)a[r]=Ti(a[r]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ti(t[n]/255)*255):t[n]=Ti(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let zd=0;class Nu{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:zd++}),this.uuid=ti(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let a;if(Array.isArray(s)){a=[];for(let r=0,o=s.length;r<o;r++)s[r].isDataTexture?a.push(po(s[r].image)):a.push(po(s[r]))}else a=po(s);n.url=a}return t||(e.images[this.uuid]=n),n}}function po(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Od.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Gd=0;class kt extends gs{constructor(e=kt.DEFAULT_IMAGE,t=kt.DEFAULT_MAPPING,n=wi,s=wi,a=_n,r=hi,o=jt,c=Wt,l=kt.DEFAULT_ANISOTROPY,h=ci){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Gd++}),this.uuid=ti(),this.name="",this.source=new Nu(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=a,this.minFilter=r,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Oe(0,0),this.repeat=new Oe(1,1),this.center=new Oe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new $e,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==yu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Pn:e.x=e.x-Math.floor(e.x);break;case wi:e.x=e.x<0?0:1;break;case Fr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Pn:e.y=e.y-Math.floor(e.y);break;case wi:e.y=e.y<0?0:1;break;case Fr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}kt.DEFAULT_IMAGE=null;kt.DEFAULT_MAPPING=yu;kt.DEFAULT_ANISOTROPY=1;class ft{constructor(e=0,t=0,n=0,s=1){ft.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,a=this.w,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s+r[12]*a,this.y=r[1]*t+r[5]*n+r[9]*s+r[13]*a,this.z=r[2]*t+r[6]*n+r[10]*s+r[14]*a,this.w=r[3]*t+r[7]*n+r[11]*s+r[15]*a,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,a;const c=e.elements,l=c[0],h=c[4],u=c[8],f=c[1],m=c[5],x=c[9],_=c[2],p=c[6],d=c[10];if(Math.abs(h-f)<.01&&Math.abs(u-_)<.01&&Math.abs(x-p)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+_)<.1&&Math.abs(x+p)<.1&&Math.abs(l+m+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(l+1)/2,M=(m+1)/2,W=(d+1)/2,V=(h+f)/4,G=(u+_)/4,ee=(x+p)/4;return y>M&&y>W?y<.01?(n=0,s=.707106781,a=.707106781):(n=Math.sqrt(y),s=V/n,a=G/n):M>W?M<.01?(n=.707106781,s=0,a=.707106781):(s=Math.sqrt(M),n=V/s,a=ee/s):W<.01?(n=.707106781,s=.707106781,a=0):(a=Math.sqrt(W),n=G/a,s=ee/a),this.set(n,s,a,t),this}let C=Math.sqrt((p-x)*(p-x)+(u-_)*(u-_)+(f-h)*(f-h));return Math.abs(C)<.001&&(C=1),this.x=(p-x)/C,this.y=(u-_)/C,this.z=(f-h)/C,this.w=Math.acos((l+m+d-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Hd extends gs{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new ft(0,0,e,t),this.scissorTest=!1,this.viewport=new ft(0,0,e,t);const s={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:_n,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const a=new kt(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);a.flipY=!1,a.generateMipmaps=n.generateMipmaps,a.internalFormat=n.internalFormat,this.textures=[];const r=n.count;for(let o=0;o<r;o++)this.textures[o]=a.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,a=this.textures.length;s<a;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,s=e.textures.length;n<s;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Nu(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ln extends Hd{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Qu extends kt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=on,this.minFilter=on,this.wrapR=wi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class ku extends kt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=on,this.minFilter=on,this.wrapR=wi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class St{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,a,r,o){let c=n[s+0],l=n[s+1],h=n[s+2],u=n[s+3];const f=a[r+0],m=a[r+1],x=a[r+2],_=a[r+3];if(o===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u;return}if(o===1){e[t+0]=f,e[t+1]=m,e[t+2]=x,e[t+3]=_;return}if(u!==_||c!==f||l!==m||h!==x){let p=1-o;const d=c*f+l*m+h*x+u*_,C=d>=0?1:-1,y=1-d*d;if(y>Number.EPSILON){const W=Math.sqrt(y),V=Math.atan2(W,d*C);p=Math.sin(p*V)/W,o=Math.sin(o*V)/W}const M=o*C;if(c=c*p+f*M,l=l*p+m*M,h=h*p+x*M,u=u*p+_*M,p===1-o){const W=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=W,l*=W,h*=W,u*=W}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,a,r){const o=n[s],c=n[s+1],l=n[s+2],h=n[s+3],u=a[r],f=a[r+1],m=a[r+2],x=a[r+3];return e[t]=o*x+h*u+c*m-l*f,e[t+1]=c*x+h*f+l*u-o*m,e[t+2]=l*x+h*m+o*f-c*u,e[t+3]=h*x-o*u-c*f-l*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,a=e._z,r=e._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(s/2),u=o(a/2),f=c(n/2),m=c(s/2),x=c(a/2);switch(r){case"XYZ":this._x=f*h*u+l*m*x,this._y=l*m*u-f*h*x,this._z=l*h*x+f*m*u,this._w=l*h*u-f*m*x;break;case"YXZ":this._x=f*h*u+l*m*x,this._y=l*m*u-f*h*x,this._z=l*h*x-f*m*u,this._w=l*h*u+f*m*x;break;case"ZXY":this._x=f*h*u-l*m*x,this._y=l*m*u+f*h*x,this._z=l*h*x+f*m*u,this._w=l*h*u-f*m*x;break;case"ZYX":this._x=f*h*u-l*m*x,this._y=l*m*u+f*h*x,this._z=l*h*x-f*m*u,this._w=l*h*u+f*m*x;break;case"YZX":this._x=f*h*u+l*m*x,this._y=l*m*u+f*h*x,this._z=l*h*x-f*m*u,this._w=l*h*u-f*m*x;break;case"XZY":this._x=f*h*u-l*m*x,this._y=l*m*u-f*h*x,this._z=l*h*x+f*m*u,this._w=l*h*u+f*m*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],a=t[8],r=t[1],o=t[5],c=t[9],l=t[2],h=t[6],u=t[10],f=n+o+u;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(h-c)*m,this._y=(a-l)*m,this._z=(r-s)*m}else if(n>o&&n>u){const m=2*Math.sqrt(1+n-o-u);this._w=(h-c)/m,this._x=.25*m,this._y=(s+r)/m,this._z=(a+l)/m}else if(o>u){const m=2*Math.sqrt(1+o-n-u);this._w=(a-l)/m,this._x=(s+r)/m,this._y=.25*m,this._z=(c+h)/m}else{const m=2*Math.sqrt(1+u-n-o);this._w=(r-s)/m,this._x=(a+l)/m,this._y=(c+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(nn(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,a=e._z,r=e._w,o=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+r*o+s*l-a*c,this._y=s*h+r*c+a*o-n*l,this._z=a*h+r*l+n*c-s*o,this._w=r*h-n*o-s*c-a*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,a=this._z,r=this._w;let o=r*e._w+n*e._x+s*e._y+a*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=r,this._x=n,this._y=s,this._z=a,this;const c=1-o*o;if(c<=Number.EPSILON){const m=1-t;return this._w=m*r+t*this._w,this._x=m*n+t*this._x,this._y=m*s+t*this._y,this._z=m*a+t*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,o),u=Math.sin((1-t)*h)/l,f=Math.sin(t*h)/l;return this._w=r*u+this._w*f,this._x=n*u+this._x*f,this._y=s*u+this._y*f,this._z=a*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),a=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Z{constructor(e=0,t=0,n=0){Z.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Gl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Gl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,a=e.elements;return this.x=a[0]*t+a[3]*n+a[6]*s,this.y=a[1]*t+a[4]*n+a[7]*s,this.z=a[2]*t+a[5]*n+a[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,a=e.elements,r=1/(a[3]*t+a[7]*n+a[11]*s+a[15]);return this.x=(a[0]*t+a[4]*n+a[8]*s+a[12])*r,this.y=(a[1]*t+a[5]*n+a[9]*s+a[13])*r,this.z=(a[2]*t+a[6]*n+a[10]*s+a[14])*r,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,a=e.x,r=e.y,o=e.z,c=e.w,l=2*(r*s-o*n),h=2*(o*t-a*s),u=2*(a*n-r*t);return this.x=t+c*l+r*u-o*h,this.y=n+c*h+o*l-a*u,this.z=s+c*u+a*h-r*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s,this.y=a[1]*t+a[5]*n+a[9]*s,this.z=a[2]*t+a[6]*n+a[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,a=e.z,r=t.x,o=t.y,c=t.z;return this.x=s*c-a*o,this.y=a*r-n*c,this.z=n*o-s*r,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return mo.copy(this).projectOnVector(e),this.sub(mo)}reflect(e){return this.sub(mo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(nn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const mo=new Z,Gl=new St;class Bi{constructor(e=new Z(1/0,1/0,1/0),t=new Z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(jn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(jn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=jn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const a=n.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let r=0,o=a.count;r<o;r++)e.isMesh===!0?e.getVertexPosition(r,jn):jn.fromBufferAttribute(a,r),jn.applyMatrix4(e.matrixWorld),this.expandByPoint(jn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ja.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ja.copy(n.boundingBox)),ja.applyMatrix4(e.matrixWorld),this.union(ja)}const s=e.children;for(let a=0,r=s.length;a<r;a++)this.expandByObject(s[a],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,jn),jn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ca),qa.subVectors(this.max,ca),ys.subVectors(e.a,ca),Cs.subVectors(e.b,ca),ws.subVectors(e.c,ca),Li.subVectors(Cs,ys),Pi.subVectors(ws,Cs),Ji.subVectors(ys,ws);let t=[0,-Li.z,Li.y,0,-Pi.z,Pi.y,0,-Ji.z,Ji.y,Li.z,0,-Li.x,Pi.z,0,-Pi.x,Ji.z,0,-Ji.x,-Li.y,Li.x,0,-Pi.y,Pi.x,0,-Ji.y,Ji.x,0];return!go(t,ys,Cs,ws,qa)||(t=[1,0,0,0,1,0,0,0,1],!go(t,ys,Cs,ws,qa))?!1:(Ya.crossVectors(Li,Pi),t=[Ya.x,Ya.y,Ya.z],go(t,ys,Cs,ws,qa))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,jn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(jn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(mi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),mi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),mi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),mi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),mi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),mi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),mi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),mi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(mi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const mi=[new Z,new Z,new Z,new Z,new Z,new Z,new Z,new Z],jn=new Z,ja=new Bi,ys=new Z,Cs=new Z,ws=new Z,Li=new Z,Pi=new Z,Ji=new Z,ca=new Z,qa=new Z,Ya=new Z,Zi=new Z;function go(i,e,t,n,s){for(let a=0,r=i.length-3;a<=r;a+=3){Zi.fromArray(i,a);const o=s.x*Math.abs(Zi.x)+s.y*Math.abs(Zi.y)+s.z*Math.abs(Zi.z),c=e.dot(Zi),l=t.dot(Zi),h=n.dot(Zi);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}const Vd=new Bi,la=new Z,bo=new Z;class ui{constructor(e=new Z,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Vd.setFromPoints(e).getCenter(n);let s=0;for(let a=0,r=e.length;a<r;a++)s=Math.max(s,n.distanceToSquared(e[a]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;la.subVectors(e,this.center);const t=la.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(la,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(bo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(la.copy(e.center).add(bo)),this.expandByPoint(la.copy(e.center).sub(bo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const gi=new Z,xo=new Z,Xa=new Z,Ui=new Z,_o=new Z,Ka=new Z,Eo=new Z;class Ga{constructor(e=new Z,t=new Z(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,gi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=gi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(gi.copy(this.origin).addScaledVector(this.direction,t),gi.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){xo.copy(e).add(t).multiplyScalar(.5),Xa.copy(t).sub(e).normalize(),Ui.copy(this.origin).sub(xo);const a=e.distanceTo(t)*.5,r=-this.direction.dot(Xa),o=Ui.dot(this.direction),c=-Ui.dot(Xa),l=Ui.lengthSq(),h=Math.abs(1-r*r);let u,f,m,x;if(h>0)if(u=r*c-o,f=r*o-c,x=a*h,u>=0)if(f>=-x)if(f<=x){const _=1/h;u*=_,f*=_,m=u*(u+r*f+2*o)+f*(r*u+f+2*c)+l}else f=a,u=Math.max(0,-(r*f+o)),m=-u*u+f*(f+2*c)+l;else f=-a,u=Math.max(0,-(r*f+o)),m=-u*u+f*(f+2*c)+l;else f<=-x?(u=Math.max(0,-(-r*a+o)),f=u>0?-a:Math.min(Math.max(-a,-c),a),m=-u*u+f*(f+2*c)+l):f<=x?(u=0,f=Math.min(Math.max(-a,-c),a),m=f*(f+2*c)+l):(u=Math.max(0,-(r*a+o)),f=u>0?a:Math.min(Math.max(-a,-c),a),m=-u*u+f*(f+2*c)+l);else f=r>0?-a:a,u=Math.max(0,-(r*f+o)),m=-u*u+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(xo).addScaledVector(Xa,f),m}intersectSphere(e,t){gi.subVectors(e.center,this.origin);const n=gi.dot(this.direction),s=gi.dot(gi)-n*n,a=e.radius*e.radius;if(s>a)return null;const r=Math.sqrt(a-s),o=n-r,c=n+r;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,a,r,o,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return l>=0?(n=(e.min.x-f.x)*l,s=(e.max.x-f.x)*l):(n=(e.max.x-f.x)*l,s=(e.min.x-f.x)*l),h>=0?(a=(e.min.y-f.y)*h,r=(e.max.y-f.y)*h):(a=(e.max.y-f.y)*h,r=(e.min.y-f.y)*h),n>r||a>s||((a>n||isNaN(n))&&(n=a),(r<s||isNaN(s))&&(s=r),u>=0?(o=(e.min.z-f.z)*u,c=(e.max.z-f.z)*u):(o=(e.max.z-f.z)*u,c=(e.min.z-f.z)*u),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,gi)!==null}intersectTriangle(e,t,n,s,a){_o.subVectors(t,e),Ka.subVectors(n,e),Eo.crossVectors(_o,Ka);let r=this.direction.dot(Eo),o;if(r>0){if(s)return null;o=1}else if(r<0)o=-1,r=-r;else return null;Ui.subVectors(this.origin,e);const c=o*this.direction.dot(Ka.crossVectors(Ui,Ka));if(c<0)return null;const l=o*this.direction.dot(_o.cross(Ui));if(l<0||c+l>r)return null;const h=-o*Ui.dot(Eo);return h<0?null:this.at(h/r,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class He{constructor(e,t,n,s,a,r,o,c,l,h,u,f,m,x,_,p){He.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,a,r,o,c,l,h,u,f,m,x,_,p)}set(e,t,n,s,a,r,o,c,l,h,u,f,m,x,_,p){const d=this.elements;return d[0]=e,d[4]=t,d[8]=n,d[12]=s,d[1]=a,d[5]=r,d[9]=o,d[13]=c,d[2]=l,d[6]=h,d[10]=u,d[14]=f,d[3]=m,d[7]=x,d[11]=_,d[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new He().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/Ss.setFromMatrixColumn(e,0).length(),a=1/Ss.setFromMatrixColumn(e,1).length(),r=1/Ss.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*a,t[5]=n[5]*a,t[6]=n[6]*a,t[7]=0,t[8]=n[8]*r,t[9]=n[9]*r,t[10]=n[10]*r,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,a=e.z,r=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(a),u=Math.sin(a);if(e.order==="XYZ"){const f=r*h,m=r*u,x=o*h,_=o*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=m+x*l,t[5]=f-_*l,t[9]=-o*c,t[2]=_-f*l,t[6]=x+m*l,t[10]=r*c}else if(e.order==="YXZ"){const f=c*h,m=c*u,x=l*h,_=l*u;t[0]=f+_*o,t[4]=x*o-m,t[8]=r*l,t[1]=r*u,t[5]=r*h,t[9]=-o,t[2]=m*o-x,t[6]=_+f*o,t[10]=r*c}else if(e.order==="ZXY"){const f=c*h,m=c*u,x=l*h,_=l*u;t[0]=f-_*o,t[4]=-r*u,t[8]=x+m*o,t[1]=m+x*o,t[5]=r*h,t[9]=_-f*o,t[2]=-r*l,t[6]=o,t[10]=r*c}else if(e.order==="ZYX"){const f=r*h,m=r*u,x=o*h,_=o*u;t[0]=c*h,t[4]=x*l-m,t[8]=f*l+_,t[1]=c*u,t[5]=_*l+f,t[9]=m*l-x,t[2]=-l,t[6]=o*c,t[10]=r*c}else if(e.order==="YZX"){const f=r*c,m=r*l,x=o*c,_=o*l;t[0]=c*h,t[4]=_-f*u,t[8]=x*u+m,t[1]=u,t[5]=r*h,t[9]=-o*h,t[2]=-l*h,t[6]=m*u+x,t[10]=f-_*u}else if(e.order==="XZY"){const f=r*c,m=r*l,x=o*c,_=o*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=f*u+_,t[5]=r*h,t[9]=m*u-x,t[2]=x*u-m,t[6]=o*h,t[10]=_*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Wd,e,jd)}lookAt(e,t,n){const s=this.elements;return In.subVectors(e,t),In.lengthSq()===0&&(In.z=1),In.normalize(),Fi.crossVectors(n,In),Fi.lengthSq()===0&&(Math.abs(n.z)===1?In.x+=1e-4:In.z+=1e-4,In.normalize(),Fi.crossVectors(n,In)),Fi.normalize(),Ja.crossVectors(In,Fi),s[0]=Fi.x,s[4]=Ja.x,s[8]=In.x,s[1]=Fi.y,s[5]=Ja.y,s[9]=In.y,s[2]=Fi.z,s[6]=Ja.z,s[10]=In.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,a=this.elements,r=n[0],o=n[4],c=n[8],l=n[12],h=n[1],u=n[5],f=n[9],m=n[13],x=n[2],_=n[6],p=n[10],d=n[14],C=n[3],y=n[7],M=n[11],W=n[15],V=s[0],G=s[4],ee=s[8],R=s[12],B=s[1],A=s[5],I=s[9],N=s[13],$=s[2],q=s[6],ae=s[10],j=s[14],K=s[3],fe=s[7],ne=s[11],oe=s[15];return a[0]=r*V+o*B+c*$+l*K,a[4]=r*G+o*A+c*q+l*fe,a[8]=r*ee+o*I+c*ae+l*ne,a[12]=r*R+o*N+c*j+l*oe,a[1]=h*V+u*B+f*$+m*K,a[5]=h*G+u*A+f*q+m*fe,a[9]=h*ee+u*I+f*ae+m*ne,a[13]=h*R+u*N+f*j+m*oe,a[2]=x*V+_*B+p*$+d*K,a[6]=x*G+_*A+p*q+d*fe,a[10]=x*ee+_*I+p*ae+d*ne,a[14]=x*R+_*N+p*j+d*oe,a[3]=C*V+y*B+M*$+W*K,a[7]=C*G+y*A+M*q+W*fe,a[11]=C*ee+y*I+M*ae+W*ne,a[15]=C*R+y*N+M*j+W*oe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],a=e[12],r=e[1],o=e[5],c=e[9],l=e[13],h=e[2],u=e[6],f=e[10],m=e[14],x=e[3],_=e[7],p=e[11],d=e[15];return x*(+a*c*u-s*l*u-a*o*f+n*l*f+s*o*m-n*c*m)+_*(+t*c*m-t*l*f+a*r*f-s*r*m+s*l*h-a*c*h)+p*(+t*l*u-t*o*m-a*r*u+n*r*m+a*o*h-n*l*h)+d*(-s*o*h-t*c*u+t*o*f+s*r*u-n*r*f+n*c*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],a=e[3],r=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=e[9],f=e[10],m=e[11],x=e[12],_=e[13],p=e[14],d=e[15],C=u*p*l-_*f*l+_*c*m-o*p*m-u*c*d+o*f*d,y=x*f*l-h*p*l-x*c*m+r*p*m+h*c*d-r*f*d,M=h*_*l-x*u*l+x*o*m-r*_*m-h*o*d+r*u*d,W=x*u*c-h*_*c-x*o*f+r*_*f+h*o*p-r*u*p,V=t*C+n*y+s*M+a*W;if(V===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const G=1/V;return e[0]=C*G,e[1]=(_*f*a-u*p*a-_*s*m+n*p*m+u*s*d-n*f*d)*G,e[2]=(o*p*a-_*c*a+_*s*l-n*p*l-o*s*d+n*c*d)*G,e[3]=(u*c*a-o*f*a-u*s*l+n*f*l+o*s*m-n*c*m)*G,e[4]=y*G,e[5]=(h*p*a-x*f*a+x*s*m-t*p*m-h*s*d+t*f*d)*G,e[6]=(x*c*a-r*p*a-x*s*l+t*p*l+r*s*d-t*c*d)*G,e[7]=(r*f*a-h*c*a+h*s*l-t*f*l-r*s*m+t*c*m)*G,e[8]=M*G,e[9]=(x*u*a-h*_*a-x*n*m+t*_*m+h*n*d-t*u*d)*G,e[10]=(r*_*a-x*o*a+x*n*l-t*_*l-r*n*d+t*o*d)*G,e[11]=(h*o*a-r*u*a-h*n*l+t*u*l+r*n*m-t*o*m)*G,e[12]=W*G,e[13]=(h*_*s-x*u*s+x*n*f-t*_*f-h*n*p+t*u*p)*G,e[14]=(x*o*s-r*_*s-x*n*c+t*_*c+r*n*p-t*o*p)*G,e[15]=(r*u*s-h*o*s+h*n*c-t*u*c-r*n*f+t*o*f)*G,this}scale(e){const t=this.elements,n=e.x,s=e.y,a=e.z;return t[0]*=n,t[4]*=s,t[8]*=a,t[1]*=n,t[5]*=s,t[9]*=a,t[2]*=n,t[6]*=s,t[10]*=a,t[3]*=n,t[7]*=s,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),a=1-n,r=e.x,o=e.y,c=e.z,l=a*r,h=a*o;return this.set(l*r+n,l*o-s*c,l*c+s*o,0,l*o+s*c,h*o+n,h*c-s*r,0,l*c-s*o,h*c+s*r,a*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,a,r){return this.set(1,n,a,0,e,1,r,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,a=t._x,r=t._y,o=t._z,c=t._w,l=a+a,h=r+r,u=o+o,f=a*l,m=a*h,x=a*u,_=r*h,p=r*u,d=o*u,C=c*l,y=c*h,M=c*u,W=n.x,V=n.y,G=n.z;return s[0]=(1-(_+d))*W,s[1]=(m+M)*W,s[2]=(x-y)*W,s[3]=0,s[4]=(m-M)*V,s[5]=(1-(f+d))*V,s[6]=(p+C)*V,s[7]=0,s[8]=(x+y)*G,s[9]=(p-C)*G,s[10]=(1-(f+_))*G,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let a=Ss.set(s[0],s[1],s[2]).length();const r=Ss.set(s[4],s[5],s[6]).length(),o=Ss.set(s[8],s[9],s[10]).length();this.determinant()<0&&(a=-a),e.x=s[12],e.y=s[13],e.z=s[14],qn.copy(this);const l=1/a,h=1/r,u=1/o;return qn.elements[0]*=l,qn.elements[1]*=l,qn.elements[2]*=l,qn.elements[4]*=h,qn.elements[5]*=h,qn.elements[6]*=h,qn.elements[8]*=u,qn.elements[9]*=u,qn.elements[10]*=u,t.setFromRotationMatrix(qn),n.x=a,n.y=r,n.z=o,this}makePerspective(e,t,n,s,a,r,o=Si){const c=this.elements,l=2*a/(t-e),h=2*a/(n-s),u=(t+e)/(t-e),f=(n+s)/(n-s);let m,x;if(o===Si)m=-(r+a)/(r-a),x=-2*r*a/(r-a);else if(o===Hr)m=-r/(r-a),x=-r*a/(r-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,a,r,o=Si){const c=this.elements,l=1/(t-e),h=1/(n-s),u=1/(r-a),f=(t+e)*l,m=(n+s)*h;let x,_;if(o===Si)x=(r+a)*u,_=-2*u;else if(o===Hr)x=a*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-m,c[2]=0,c[6]=0,c[10]=_,c[14]=-x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Ss=new Z,qn=new He,Wd=new Z(0,0,0),jd=new Z(1,1,1),Fi=new Z,Ja=new Z,In=new Z,Hl=new He,Vl=new St;class Vn{constructor(e=0,t=0,n=0,s=Vn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,a=s[0],r=s[4],o=s[8],c=s[1],l=s[5],h=s[9],u=s[2],f=s[6],m=s[10];switch(t){case"XYZ":this._y=Math.asin(nn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-r,a)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-nn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,a),this._z=0);break;case"ZXY":this._x=Math.asin(nn(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,m),this._z=Math.atan2(-r,l)):(this._y=0,this._z=Math.atan2(c,a));break;case"ZYX":this._y=Math.asin(-nn(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(c,a)):(this._x=0,this._z=Math.atan2(-r,l));break;case"YZX":this._z=Math.asin(nn(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,a)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-nn(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(o,a)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Hl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Hl,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Vl.setFromEuler(this),this.setFromQuaternion(Vl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Vn.DEFAULT_ORDER="XYZ";class Ou{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let qd=0;const Wl=new Z,Is=new St,bi=new He,Za=new Z,ha=new Z,Yd=new Z,Xd=new St,jl=new Z(1,0,0),ql=new Z(0,1,0),Yl=new Z(0,0,1),Xl={type:"added"},Kd={type:"removed"},Ts={type:"childadded",child:null},vo={type:"childremoved",child:null};class Tt extends gs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:qd++}),this.uuid=ti(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Tt.DEFAULT_UP.clone();const e=new Z,t=new Vn,n=new St,s=new Z(1,1,1);function a(){n.setFromEuler(t,!1)}function r(){t.setFromQuaternion(n,void 0,!1)}t._onChange(a),n._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new He},normalMatrix:{value:new $e}}),this.matrix=new He,this.matrixWorld=new He,this.matrixAutoUpdate=Tt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Tt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ou,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Is.setFromAxisAngle(e,t),this.quaternion.multiply(Is),this}rotateOnWorldAxis(e,t){return Is.setFromAxisAngle(e,t),this.quaternion.premultiply(Is),this}rotateX(e){return this.rotateOnAxis(jl,e)}rotateY(e){return this.rotateOnAxis(ql,e)}rotateZ(e){return this.rotateOnAxis(Yl,e)}translateOnAxis(e,t){return Wl.copy(e).applyQuaternion(this.quaternion),this.position.add(Wl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(jl,e)}translateY(e){return this.translateOnAxis(ql,e)}translateZ(e){return this.translateOnAxis(Yl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(bi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Za.copy(e):Za.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),ha.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?bi.lookAt(ha,Za,this.up):bi.lookAt(Za,ha,this.up),this.quaternion.setFromRotationMatrix(bi),s&&(bi.extractRotation(s.matrixWorld),Is.setFromRotationMatrix(bi),this.quaternion.premultiply(Is.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Xl),Ts.child=e,this.dispatchEvent(Ts),Ts.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Kd),vo.child=e,this.dispatchEvent(vo),vo.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),bi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),bi.multiply(e.parent.matrixWorld)),e.applyMatrix4(bi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Xl),Ts.child=e,this.dispatchEvent(Ts),Ts.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let a=0,r=s.length;a<r;a++)s[a].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ha,e,Yd),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ha,Xd,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let a=0,r=s.length;a<r;a++)s[a].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function a(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=a(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];a(e.shapes,u)}else a(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(a(e.materials,this.material[c]));s.material=o}else s.material=a(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];s.animations.push(a(e.animations,c))}}if(t){const o=r(e.geometries),c=r(e.materials),l=r(e.textures),h=r(e.images),u=r(e.shapes),f=r(e.skeletons),m=r(e.animations),x=r(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),m.length>0&&(n.animations=m),x.length>0&&(n.nodes=x)}return n.object=s,n;function r(o){const c=[];for(const l in o){const h=o[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}Tt.DEFAULT_UP=new Z(0,1,0);Tt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Tt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Yn=new Z,xi=new Z,Mo=new Z,_i=new Z,Bs=new Z,Rs=new Z,Kl=new Z,yo=new Z,Co=new Z,wo=new Z,So=new ft,Io=new ft,To=new ft;class ei{constructor(e=new Z,t=new Z,n=new Z){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Yn.subVectors(e,t),s.cross(Yn);const a=s.lengthSq();return a>0?s.multiplyScalar(1/Math.sqrt(a)):s.set(0,0,0)}static getBarycoord(e,t,n,s,a){Yn.subVectors(s,t),xi.subVectors(n,t),Mo.subVectors(e,t);const r=Yn.dot(Yn),o=Yn.dot(xi),c=Yn.dot(Mo),l=xi.dot(xi),h=xi.dot(Mo),u=r*l-o*o;if(u===0)return a.set(0,0,0),null;const f=1/u,m=(l*c-o*h)*f,x=(r*h-o*c)*f;return a.set(1-m-x,x,m)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,_i)===null?!1:_i.x>=0&&_i.y>=0&&_i.x+_i.y<=1}static getInterpolation(e,t,n,s,a,r,o,c){return this.getBarycoord(e,t,n,s,_i)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(a,_i.x),c.addScaledVector(r,_i.y),c.addScaledVector(o,_i.z),c)}static getInterpolatedAttribute(e,t,n,s,a,r){return So.setScalar(0),Io.setScalar(0),To.setScalar(0),So.fromBufferAttribute(e,t),Io.fromBufferAttribute(e,n),To.fromBufferAttribute(e,s),r.setScalar(0),r.addScaledVector(So,a.x),r.addScaledVector(Io,a.y),r.addScaledVector(To,a.z),r}static isFrontFacing(e,t,n,s){return Yn.subVectors(n,t),xi.subVectors(e,t),Yn.cross(xi).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Yn.subVectors(this.c,this.b),xi.subVectors(this.a,this.b),Yn.cross(xi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ei.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ei.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,a){return ei.getInterpolation(e,this.a,this.b,this.c,t,n,s,a)}containsPoint(e){return ei.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ei.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,a=this.c;let r,o;Bs.subVectors(s,n),Rs.subVectors(a,n),yo.subVectors(e,n);const c=Bs.dot(yo),l=Rs.dot(yo);if(c<=0&&l<=0)return t.copy(n);Co.subVectors(e,s);const h=Bs.dot(Co),u=Rs.dot(Co);if(h>=0&&u<=h)return t.copy(s);const f=c*u-h*l;if(f<=0&&c>=0&&h<=0)return r=c/(c-h),t.copy(n).addScaledVector(Bs,r);wo.subVectors(e,a);const m=Bs.dot(wo),x=Rs.dot(wo);if(x>=0&&m<=x)return t.copy(a);const _=m*l-c*x;if(_<=0&&l>=0&&x<=0)return o=l/(l-x),t.copy(n).addScaledVector(Rs,o);const p=h*x-m*u;if(p<=0&&u-h>=0&&m-x>=0)return Kl.subVectors(a,s),o=(u-h)/(u-h+(m-x)),t.copy(s).addScaledVector(Kl,o);const d=1/(p+_+f);return r=_*d,o=f*d,t.copy(n).addScaledVector(Bs,r).addScaledVector(Rs,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const zu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ni={h:0,s:0,l:0},$a={h:0,s:0,l:0};function Bo(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Ie{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Pt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ot.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=ot.workingColorSpace){return this.r=e,this.g=t,this.b=n,ot.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=ot.workingColorSpace){if(e=fl(e,1),t=nn(t,0,1),n=nn(n,0,1),t===0)this.r=this.g=this.b=n;else{const a=n<=.5?n*(1+t):n+t-n*t,r=2*n-a;this.r=Bo(r,a,e+1/3),this.g=Bo(r,a,e),this.b=Bo(r,a,e-1/3)}return ot.toWorkingColorSpace(this,s),this}setStyle(e,t=Pt){function n(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const r=s[1],o=s[2];switch(r){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=s[1],r=a.length;if(r===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(r===6)return this.setHex(parseInt(a,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Pt){const n=zu[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ti(e.r),this.g=Ti(e.g),this.b=Ti(e.b),this}copyLinearToSRGB(e){return this.r=Gs(e.r),this.g=Gs(e.g),this.b=Gs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Pt){return ot.fromWorkingColorSpace(hn.copy(this),e),Math.round(nn(hn.r*255,0,255))*65536+Math.round(nn(hn.g*255,0,255))*256+Math.round(nn(hn.b*255,0,255))}getHexString(e=Pt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ot.workingColorSpace){ot.fromWorkingColorSpace(hn.copy(this),t);const n=hn.r,s=hn.g,a=hn.b,r=Math.max(n,s,a),o=Math.min(n,s,a);let c,l;const h=(o+r)/2;if(o===r)c=0,l=0;else{const u=r-o;switch(l=h<=.5?u/(r+o):u/(2-r-o),r){case n:c=(s-a)/u+(s<a?6:0);break;case s:c=(a-n)/u+2;break;case a:c=(n-s)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=ot.workingColorSpace){return ot.fromWorkingColorSpace(hn.copy(this),t),e.r=hn.r,e.g=hn.g,e.b=hn.b,e}getStyle(e=Pt){ot.fromWorkingColorSpace(hn.copy(this),e);const t=hn.r,n=hn.g,s=hn.b;return e!==Pt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Ni),this.setHSL(Ni.h+e,Ni.s+t,Ni.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ni),e.getHSL($a);const n=Ia(Ni.h,$a.h,t),s=Ia(Ni.s,$a.s,t),a=Ia(Ni.l,$a.l,t);return this.setHSL(n,s,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,a=e.elements;return this.r=a[0]*t+a[3]*n+a[6]*s,this.g=a[1]*t+a[4]*n+a[7]*s,this.b=a[2]*t+a[5]*n+a[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const hn=new Ie;Ie.NAMES=zu;let Jd=0;class Hn extends gs{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Jd++}),this.uuid=ti(),this.name="",this.blending=Os,this.side=ni,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=cc,this.blendDst=lc,this.blendEquation=Zn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ie(0,0,0),this.blendAlpha=0,this.depthFunc=js,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ll,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=vs,this.stencilZFail=vs,this.stencilZPass=vs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Os&&(n.blending=this.blending),this.side!==ni&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==cc&&(n.blendSrc=this.blendSrc),this.blendDst!==lc&&(n.blendDst=this.blendDst),this.blendEquation!==Zn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==js&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ll&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==vs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==vs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==vs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(a){const r=[];for(const o in a){const c=a[o];delete c.metadata,r.push(c)}return r}if(t){const a=s(e.textures),r=s(e.images);a.length>0&&(n.textures=a),r.length>0&&(n.images=r)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let a=0;a!==s;++a)n[a]=t[a].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Wi extends Hn{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new Ie(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vn,this.combine=il,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ot=new Z,er=new Oe;class Bt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Oc,this.updateRanges=[],this.gpuType=un,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,a=this.itemSize;s<a;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)er.fromBufferAttribute(this,t),er.applyMatrix3(e),this.setXY(t,er.x,er.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.applyMatrix3(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.applyMatrix4(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.applyNormalMatrix(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.transformDirection(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=$n(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=mt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=$n(t,this.array)),t}setX(e,t){return this.normalized&&(t=mt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=$n(t,this.array)),t}setY(e,t){return this.normalized&&(t=mt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=$n(t,this.array)),t}setZ(e,t){return this.normalized&&(t=mt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=$n(t,this.array)),t}setW(e,t){return this.normalized&&(t=mt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array),s=mt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,a){return e*=this.itemSize,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array),s=mt(s,this.array),a=mt(a,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Oc&&(e.usage=this.usage),e}}class Gu extends Bt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Hu extends Bt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class tt extends Bt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Zd=0;const Nn=new He,Ro=new Tt,Ds=new Z,Tn=new Bi,ua=new Bi,Kt=new Z;class xt extends gs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Zd++}),this.uuid=ti(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Fu(e)?Hu:Gu)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const a=new $e().getNormalMatrix(e);n.applyNormalMatrix(a),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Nn.makeRotationFromQuaternion(e),this.applyMatrix4(Nn),this}rotateX(e){return Nn.makeRotationX(e),this.applyMatrix4(Nn),this}rotateY(e){return Nn.makeRotationY(e),this.applyMatrix4(Nn),this}rotateZ(e){return Nn.makeRotationZ(e),this.applyMatrix4(Nn),this}translate(e,t,n){return Nn.makeTranslation(e,t,n),this.applyMatrix4(Nn),this}scale(e,t,n){return Nn.makeScale(e,t,n),this.applyMatrix4(Nn),this}lookAt(e){return Ro.lookAt(e),Ro.updateMatrix(),this.applyMatrix4(Ro.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ds).negate(),this.translate(Ds.x,Ds.y,Ds.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,a=e.length;s<a;s++){const r=e[s];n.push(r.x,r.y,r.z||0)}this.setAttribute("position",new tt(n,3))}else{for(let n=0,s=t.count;n<s;n++){const a=e[n];t.setXYZ(n,a.x,a.y,a.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Bi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Z(-1/0,-1/0,-1/0),new Z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const a=t[n];Tn.setFromBufferAttribute(a),this.morphTargetsRelative?(Kt.addVectors(this.boundingBox.min,Tn.min),this.boundingBox.expandByPoint(Kt),Kt.addVectors(this.boundingBox.max,Tn.max),this.boundingBox.expandByPoint(Kt)):(this.boundingBox.expandByPoint(Tn.min),this.boundingBox.expandByPoint(Tn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ui);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Z,1/0);return}if(e){const n=this.boundingSphere.center;if(Tn.setFromBufferAttribute(e),t)for(let a=0,r=t.length;a<r;a++){const o=t[a];ua.setFromBufferAttribute(o),this.morphTargetsRelative?(Kt.addVectors(Tn.min,ua.min),Tn.expandByPoint(Kt),Kt.addVectors(Tn.max,ua.max),Tn.expandByPoint(Kt)):(Tn.expandByPoint(ua.min),Tn.expandByPoint(ua.max))}Tn.getCenter(n);let s=0;for(let a=0,r=e.count;a<r;a++)Kt.fromBufferAttribute(e,a),s=Math.max(s,n.distanceToSquared(Kt));if(t)for(let a=0,r=t.length;a<r;a++){const o=t[a],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)Kt.fromBufferAttribute(o,l),c&&(Ds.fromBufferAttribute(e,l),Kt.add(Ds)),s=Math.max(s,n.distanceToSquared(Kt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,a=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Bt(new Float32Array(4*n.count),4));const r=this.getAttribute("tangent"),o=[],c=[];for(let ee=0;ee<n.count;ee++)o[ee]=new Z,c[ee]=new Z;const l=new Z,h=new Z,u=new Z,f=new Oe,m=new Oe,x=new Oe,_=new Z,p=new Z;function d(ee,R,B){l.fromBufferAttribute(n,ee),h.fromBufferAttribute(n,R),u.fromBufferAttribute(n,B),f.fromBufferAttribute(a,ee),m.fromBufferAttribute(a,R),x.fromBufferAttribute(a,B),h.sub(l),u.sub(l),m.sub(f),x.sub(f);const A=1/(m.x*x.y-x.x*m.y);isFinite(A)&&(_.copy(h).multiplyScalar(x.y).addScaledVector(u,-m.y).multiplyScalar(A),p.copy(u).multiplyScalar(m.x).addScaledVector(h,-x.x).multiplyScalar(A),o[ee].add(_),o[R].add(_),o[B].add(_),c[ee].add(p),c[R].add(p),c[B].add(p))}let C=this.groups;C.length===0&&(C=[{start:0,count:e.count}]);for(let ee=0,R=C.length;ee<R;++ee){const B=C[ee],A=B.start,I=B.count;for(let N=A,$=A+I;N<$;N+=3)d(e.getX(N+0),e.getX(N+1),e.getX(N+2))}const y=new Z,M=new Z,W=new Z,V=new Z;function G(ee){W.fromBufferAttribute(s,ee),V.copy(W);const R=o[ee];y.copy(R),y.sub(W.multiplyScalar(W.dot(R))).normalize(),M.crossVectors(V,R);const A=M.dot(c[ee])<0?-1:1;r.setXYZW(ee,y.x,y.y,y.z,A)}for(let ee=0,R=C.length;ee<R;++ee){const B=C[ee],A=B.start,I=B.count;for(let N=A,$=A+I;N<$;N+=3)G(e.getX(N+0)),G(e.getX(N+1)),G(e.getX(N+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Bt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,m=n.count;f<m;f++)n.setXYZ(f,0,0,0);const s=new Z,a=new Z,r=new Z,o=new Z,c=new Z,l=new Z,h=new Z,u=new Z;if(e)for(let f=0,m=e.count;f<m;f+=3){const x=e.getX(f+0),_=e.getX(f+1),p=e.getX(f+2);s.fromBufferAttribute(t,x),a.fromBufferAttribute(t,_),r.fromBufferAttribute(t,p),h.subVectors(r,a),u.subVectors(s,a),h.cross(u),o.fromBufferAttribute(n,x),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,p),o.add(h),c.add(h),l.add(h),n.setXYZ(x,o.x,o.y,o.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(p,l.x,l.y,l.z)}else for(let f=0,m=t.count;f<m;f+=3)s.fromBufferAttribute(t,f+0),a.fromBufferAttribute(t,f+1),r.fromBufferAttribute(t,f+2),h.subVectors(r,a),u.subVectors(s,a),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Kt.fromBufferAttribute(e,t),Kt.normalize(),e.setXYZ(t,Kt.x,Kt.y,Kt.z)}toNonIndexed(){function e(o,c){const l=o.array,h=o.itemSize,u=o.normalized,f=new l.constructor(c.length*h);let m=0,x=0;for(let _=0,p=c.length;_<p;_++){o.isInterleavedBufferAttribute?m=c[_]*o.data.stride+o.offset:m=c[_]*h;for(let d=0;d<h;d++)f[x++]=l[m++]}return new Bt(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new xt,n=this.index.array,s=this.attributes;for(const o in s){const c=s[o],l=e(c,n);t.setAttribute(o,l)}const a=this.morphAttributes;for(const o in a){const c=[],l=a[o];for(let h=0,u=l.length;h<u;h++){const f=l[h],m=e(f,n);c.push(m)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let o=0,c=r.length;o<c;o++){const l=r[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const s={};let a=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,f=l.length;u<f;u++){const m=l[u];h.push(m.toJSON(e.data))}h.length>0&&(s[c]=h,a=!0)}a&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(e.data.groups=JSON.parse(JSON.stringify(r)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const s=e.attributes;for(const l in s){const h=s[l];this.setAttribute(l,h.clone(t))}const a=e.morphAttributes;for(const l in a){const h=[],u=a[l];for(let f=0,m=u.length;f<m;f++)h.push(u[f].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;const r=e.groups;for(let l=0,h=r.length;l<h;l++){const u=r[l];this.addGroup(u.start,u.count,u.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Jl=new He,$i=new Ga,tr=new ui,Zl=new Z,nr=new Z,ir=new Z,sr=new Z,Do=new Z,ar=new Z,$l=new Z,rr=new Z;class st extends Tt{constructor(e=new xt,t=new Wi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,r=s.length;a<r;a++){const o=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,a=n.morphAttributes.position,r=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(a&&o){ar.set(0,0,0);for(let c=0,l=a.length;c<l;c++){const h=o[c],u=a[c];h!==0&&(Do.fromBufferAttribute(u,e),r?ar.addScaledVector(Do,h):ar.addScaledVector(Do.sub(t),h))}t.add(ar)}return t}raycast(e,t){const n=this.geometry,s=this.material,a=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),tr.copy(n.boundingSphere),tr.applyMatrix4(a),$i.copy(e.ray).recast(e.near),!(tr.containsPoint($i.origin)===!1&&($i.intersectSphere(tr,Zl)===null||$i.origin.distanceToSquared(Zl)>(e.far-e.near)**2))&&(Jl.copy(a).invert(),$i.copy(e.ray).applyMatrix4(Jl),!(n.boundingBox!==null&&$i.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,$i)))}_computeIntersections(e,t,n){let s;const a=this.geometry,r=this.material,o=a.index,c=a.attributes.position,l=a.attributes.uv,h=a.attributes.uv1,u=a.attributes.normal,f=a.groups,m=a.drawRange;if(o!==null)if(Array.isArray(r))for(let x=0,_=f.length;x<_;x++){const p=f[x],d=r[p.materialIndex],C=Math.max(p.start,m.start),y=Math.min(o.count,Math.min(p.start+p.count,m.start+m.count));for(let M=C,W=y;M<W;M+=3){const V=o.getX(M),G=o.getX(M+1),ee=o.getX(M+2);s=or(this,d,e,n,l,h,u,V,G,ee),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{const x=Math.max(0,m.start),_=Math.min(o.count,m.start+m.count);for(let p=x,d=_;p<d;p+=3){const C=o.getX(p),y=o.getX(p+1),M=o.getX(p+2);s=or(this,r,e,n,l,h,u,C,y,M),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(r))for(let x=0,_=f.length;x<_;x++){const p=f[x],d=r[p.materialIndex],C=Math.max(p.start,m.start),y=Math.min(c.count,Math.min(p.start+p.count,m.start+m.count));for(let M=C,W=y;M<W;M+=3){const V=M,G=M+1,ee=M+2;s=or(this,d,e,n,l,h,u,V,G,ee),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{const x=Math.max(0,m.start),_=Math.min(c.count,m.start+m.count);for(let p=x,d=_;p<d;p+=3){const C=p,y=p+1,M=p+2;s=or(this,r,e,n,l,h,u,C,y,M),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}}}function $d(i,e,t,n,s,a,r,o){let c;if(e.side===wn?c=n.intersectTriangle(r,a,s,!0,o):c=n.intersectTriangle(s,a,r,e.side===ni,o),c===null)return null;rr.copy(o),rr.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(rr);return l<t.near||l>t.far?null:{distance:l,point:rr.clone(),object:i}}function or(i,e,t,n,s,a,r,o,c,l){i.getVertexPosition(o,nr),i.getVertexPosition(c,ir),i.getVertexPosition(l,sr);const h=$d(i,e,t,n,nr,ir,sr,$l);if(h){const u=new Z;ei.getBarycoord($l,nr,ir,sr,u),s&&(h.uv=ei.getInterpolatedAttribute(s,o,c,l,u,new Oe)),a&&(h.uv1=ei.getInterpolatedAttribute(a,o,c,l,u,new Oe)),r&&(h.normal=ei.getInterpolatedAttribute(r,o,c,l,u,new Z),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const f={a:o,b:c,c:l,normal:new Z,materialIndex:0};ei.getNormal(nr,ir,sr,f.normal),h.face=f,h.barycoord=u}return h}class Dt extends xt{constructor(e=1,t=1,n=1,s=1,a=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:a,depthSegments:r};const o=this;s=Math.floor(s),a=Math.floor(a),r=Math.floor(r);const c=[],l=[],h=[],u=[];let f=0,m=0;x("z","y","x",-1,-1,n,t,e,r,a,0),x("z","y","x",1,-1,n,t,-e,r,a,1),x("x","z","y",1,1,e,n,t,s,r,2),x("x","z","y",1,-1,e,n,-t,s,r,3),x("x","y","z",1,-1,e,t,n,s,a,4),x("x","y","z",-1,-1,e,t,-n,s,a,5),this.setIndex(c),this.setAttribute("position",new tt(l,3)),this.setAttribute("normal",new tt(h,3)),this.setAttribute("uv",new tt(u,2));function x(_,p,d,C,y,M,W,V,G,ee,R){const B=M/G,A=W/ee,I=M/2,N=W/2,$=V/2,q=G+1,ae=ee+1;let j=0,K=0;const fe=new Z;for(let ne=0;ne<ae;ne++){const oe=ne*A-N;for(let ge=0;ge<q;ge++){const be=ge*B-I;fe[_]=be*C,fe[p]=oe*y,fe[d]=$,l.push(fe.x,fe.y,fe.z),fe[_]=0,fe[p]=0,fe[d]=V>0?1:-1,h.push(fe.x,fe.y,fe.z),u.push(ge/G),u.push(1-ne/ee),j+=1}}for(let ne=0;ne<ee;ne++)for(let oe=0;oe<G;oe++){const ge=f+oe+q*ne,be=f+oe+q*(ne+1),te=f+(oe+1)+q*(ne+1),he=f+(oe+1)+q*ne;c.push(ge,be,he),c.push(be,te,he),K+=6}o.addGroup(m,K,R),m+=K,f+=j}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Dt(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Xs(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function mn(i){const e={};for(let t=0;t<i.length;t++){const n=Xs(i[t]);for(const s in n)e[s]=n[s]}return e}function eA(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Vu(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ot.workingColorSpace}const li={clone:Xs,merge:mn};var tA=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,nA=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ht extends Hn{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=tA,this.fragmentShader=nA,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Xs(e.uniforms),this.uniformsGroups=eA(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const r=this.uniforms[s].value;r&&r.isTexture?t.uniforms[s]={type:"t",value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[s]={type:"c",value:r.getHex()}:r&&r.isVector2?t.uniforms[s]={type:"v2",value:r.toArray()}:r&&r.isVector3?t.uniforms[s]={type:"v3",value:r.toArray()}:r&&r.isVector4?t.uniforms[s]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?t.uniforms[s]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?t.uniforms[s]={type:"m4",value:r.toArray()}:t.uniforms[s]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Wu extends Tt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new He,this.projectionMatrix=new He,this.projectionMatrixInverse=new He,this.coordinateSystem=Si}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Qi=new Z,eh=new Oe,th=new Oe;class bn extends Wu{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ys*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Sa*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ys*2*Math.atan(Math.tan(Sa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Qi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Qi.x,Qi.y).multiplyScalar(-e/Qi.z),Qi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Qi.x,Qi.y).multiplyScalar(-e/Qi.z)}getViewSize(e,t){return this.getViewBounds(e,eh,th),t.subVectors(th,eh)}setViewOffset(e,t,n,s,a,r){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=a,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Sa*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,a=-.5*s;const r=this.view;if(this.view!==null&&this.view.enabled){const c=r.fullWidth,l=r.fullHeight;a+=r.offsetX*s/c,t-=r.offsetY*n/l,s*=r.width/c,n*=r.height/l}const o=this.filmOffset;o!==0&&(a+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ls=-90,Ps=1;class iA extends Tt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new bn(Ls,Ps,e,t);s.layers=this.layers,this.add(s);const a=new bn(Ls,Ps,e,t);a.layers=this.layers,this.add(a);const r=new bn(Ls,Ps,e,t);r.layers=this.layers,this.add(r);const o=new bn(Ls,Ps,e,t);o.layers=this.layers,this.add(o);const c=new bn(Ls,Ps,e,t);c.layers=this.layers,this.add(c);const l=new bn(Ls,Ps,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,a,r,o,c]=t;for(const l of t)this.remove(l);if(e===Si)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Hr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,r,o,c,l,h]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,a),e.setRenderTarget(n,1,s),e.render(t,r),e.setRenderTarget(n,2,s),e.render(t,o),e.setRenderTarget(n,3,s),e.render(t,c),e.setRenderTarget(n,4,s),e.render(t,l),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(u,f,m),e.xr.enabled=x,n.texture.needsPMREMUpdate=!0}}class ju extends kt{constructor(e,t,n,s,a,r,o,c,l,h){e=e!==void 0?e:[],t=t!==void 0?t:us,super(e,t,n,s,a,r,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class sA extends Ln{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new ju(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:_n}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Dt(5,5,5),a=new Ht({name:"CubemapFromEquirect",uniforms:Xs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:wn,blending:tn});a.uniforms.tEquirect.value=t;const r=new st(s,a),o=t.minFilter;return t.minFilter===hi&&(t.minFilter=_n),new iA(1,10,this).update(e,r),t.minFilter=o,r.geometry.dispose(),r.material.dispose(),this}clear(e,t,n,s){const a=e.getRenderTarget();for(let r=0;r<6;r++)e.setRenderTarget(this,r),e.clear(t,n,s);e.setRenderTarget(a)}}const Lo=new Z,aA=new Z,rA=new $e;class Oi{constructor(e=new Z(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=Lo.subVectors(n,t).cross(aA.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Lo),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/s;return a<0||a>1?null:t.copy(e.start).addScaledVector(n,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||rA.getNormalMatrix(e),s=this.coplanarPoint(Lo).applyMatrix4(e),a=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const es=new ui,cr=new Z;class dl{constructor(e=new Oi,t=new Oi,n=new Oi,s=new Oi,a=new Oi,r=new Oi){this.planes=[e,t,n,s,a,r]}set(e,t,n,s,a,r){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(a),o[5].copy(r),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Si){const n=this.planes,s=e.elements,a=s[0],r=s[1],o=s[2],c=s[3],l=s[4],h=s[5],u=s[6],f=s[7],m=s[8],x=s[9],_=s[10],p=s[11],d=s[12],C=s[13],y=s[14],M=s[15];if(n[0].setComponents(c-a,f-l,p-m,M-d).normalize(),n[1].setComponents(c+a,f+l,p+m,M+d).normalize(),n[2].setComponents(c+r,f+h,p+x,M+C).normalize(),n[3].setComponents(c-r,f-h,p-x,M-C).normalize(),n[4].setComponents(c-o,f-u,p-_,M-y).normalize(),t===Si)n[5].setComponents(c+o,f+u,p+_,M+y).normalize();else if(t===Hr)n[5].setComponents(o,u,_,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),es.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),es.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(es)}intersectsSprite(e){return es.center.set(0,0,0),es.radius=.7071067811865476,es.applyMatrix4(e.matrixWorld),this.intersectsSphere(es)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(cr.x=s.normal.x>0?e.max.x:e.min.x,cr.y=s.normal.y>0?e.max.y:e.min.y,cr.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(cr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function qu(){let i=null,e=!1,t=null,n=null;function s(a,r){t(a,r),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){i=a}}}function oA(i){const e=new WeakMap;function t(o,c){const l=o.array,h=o.usage,u=l.byteLength,f=i.createBuffer();i.bindBuffer(c,f),i.bufferData(c,l,h),o.onUploadCallback();let m;if(l instanceof Float32Array)m=i.FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)m=i.SHORT;else if(l instanceof Uint32Array)m=i.UNSIGNED_INT;else if(l instanceof Int32Array)m=i.INT;else if(l instanceof Int8Array)m=i.BYTE;else if(l instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:m,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,c,l){const h=c.array,u=c.updateRanges;if(i.bindBuffer(l,o),u.length===0)i.bufferSubData(l,0,h);else{u.sort((m,x)=>m.start-x.start);let f=0;for(let m=1;m<u.length;m++){const x=u[f],_=u[m];_.start<=x.start+x.count+1?x.count=Math.max(x.count,_.start+_.count-x.start):(++f,u[f]=_)}u.length=f+1;for(let m=0,x=u.length;m<x;m++){const _=u[m];i.bufferSubData(l,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function a(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(i.deleteBuffer(c.buffer),e.delete(o))}function r(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:s,remove:a,update:r}}class Ks extends xt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const a=e/2,r=t/2,o=Math.floor(n),c=Math.floor(s),l=o+1,h=c+1,u=e/o,f=t/c,m=[],x=[],_=[],p=[];for(let d=0;d<h;d++){const C=d*f-r;for(let y=0;y<l;y++){const M=y*u-a;x.push(M,-C,0),_.push(0,0,1),p.push(y/o),p.push(1-d/c)}}for(let d=0;d<c;d++)for(let C=0;C<o;C++){const y=C+l*d,M=C+l*(d+1),W=C+1+l*(d+1),V=C+1+l*d;m.push(y,M,V),m.push(M,W,V)}this.setIndex(m),this.setAttribute("position",new tt(x,3)),this.setAttribute("normal",new tt(_,3)),this.setAttribute("uv",new tt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ks(e.width,e.height,e.widthSegments,e.heightSegments)}}var cA=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,lA=`#ifdef USE_ALPHAHASH
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
#endif`,hA=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,uA=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,fA=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,dA=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,AA=`#ifdef USE_AOMAP
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
#endif`,pA=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,mA=`#ifdef USE_BATCHING
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
#endif`,gA=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,bA=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,xA=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,_A=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,EA=`#ifdef USE_IRIDESCENCE
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
#endif`,vA=`#ifdef USE_BUMPMAP
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
#endif`,MA=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,yA=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,CA=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,wA=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,SA=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,IA=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,TA=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,BA=`#if defined( USE_COLOR_ALPHA )
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
#endif`,RA=`#define PI 3.141592653589793
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
} // validated`,DA=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,LA=`vec3 transformedNormal = objectNormal;
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
#endif`,PA=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,UA=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,FA=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,NA=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,QA="gl_FragColor = linearToOutputTexel( gl_FragColor );",kA=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,OA=`#ifdef USE_ENVMAP
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
#endif`,zA=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,GA=`#ifdef USE_ENVMAP
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
#endif`,HA=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,VA=`#ifdef USE_ENVMAP
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
#endif`,WA=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,jA=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,qA=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,YA=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,XA=`#ifdef USE_GRADIENTMAP
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
}`,KA=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,JA=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ZA=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,$A=`uniform bool receiveShadow;
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
#endif`,ep=`#ifdef USE_ENVMAP
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
#endif`,tp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,np=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ip=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,sp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ap=`PhysicalMaterial material;
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
#endif`,rp=`struct PhysicalMaterial {
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
}`,op=`
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
#endif`,cp=`#if defined( RE_IndirectDiffuse )
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
#endif`,lp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,hp=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,up=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,fp=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,dp=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ap=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,pp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,mp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,gp=`#if defined( USE_POINTS_UV )
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
#endif`,bp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,xp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,_p=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ep=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,vp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Mp=`#ifdef USE_MORPHTARGETS
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
#endif`,yp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Cp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,wp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Sp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ip=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Tp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Bp=`#ifdef USE_NORMALMAP
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
#endif`,Rp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Dp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Lp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Pp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Up=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Fp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Np=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Qp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,kp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Op=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,zp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Gp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Hp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Vp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Wp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,jp=`float getShadowMask() {
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
}`,qp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Yp=`#ifdef USE_SKINNING
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
#endif`,Xp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Kp=`#ifdef USE_SKINNING
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
#endif`,Jp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Zp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,$p=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,em=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,tm=`#ifdef USE_TRANSMISSION
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
#endif`,nm=`#ifdef USE_TRANSMISSION
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
#endif`,im=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,sm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,am=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,rm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const om=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,cm=`uniform sampler2D t2D;
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
}`,lm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,um=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dm=`#include <common>
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
}`,Am=`#if DEPTH_PACKING == 3200
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
}`,pm=`#define DISTANCE
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
}`,mm=`#define DISTANCE
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
}`,gm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,bm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xm=`uniform float scale;
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
}`,_m=`uniform vec3 diffuse;
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
}`,Em=`#include <common>
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
}`,vm=`uniform vec3 diffuse;
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
}`,Mm=`#define LAMBERT
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
}`,ym=`#define LAMBERT
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
}`,Cm=`#define MATCAP
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
}`,wm=`#define MATCAP
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
}`,Sm=`#define NORMAL
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
}`,Im=`#define NORMAL
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
}`,Tm=`#define PHONG
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
}`,Bm=`#define PHONG
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
}`,Rm=`#define STANDARD
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
}`,Dm=`#define STANDARD
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
}`,Lm=`#define TOON
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
}`,Pm=`#define TOON
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
}`,Um=`uniform float size;
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
}`,Fm=`uniform vec3 diffuse;
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
}`,Nm=`#include <common>
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
}`,Qm=`uniform vec3 color;
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
}`,km=`uniform float rotation;
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
}`,Om=`uniform vec3 diffuse;
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
}`,et={alphahash_fragment:cA,alphahash_pars_fragment:lA,alphamap_fragment:hA,alphamap_pars_fragment:uA,alphatest_fragment:fA,alphatest_pars_fragment:dA,aomap_fragment:AA,aomap_pars_fragment:pA,batching_pars_vertex:mA,batching_vertex:gA,begin_vertex:bA,beginnormal_vertex:xA,bsdfs:_A,iridescence_fragment:EA,bumpmap_pars_fragment:vA,clipping_planes_fragment:MA,clipping_planes_pars_fragment:yA,clipping_planes_pars_vertex:CA,clipping_planes_vertex:wA,color_fragment:SA,color_pars_fragment:IA,color_pars_vertex:TA,color_vertex:BA,common:RA,cube_uv_reflection_fragment:DA,defaultnormal_vertex:LA,displacementmap_pars_vertex:PA,displacementmap_vertex:UA,emissivemap_fragment:FA,emissivemap_pars_fragment:NA,colorspace_fragment:QA,colorspace_pars_fragment:kA,envmap_fragment:OA,envmap_common_pars_fragment:zA,envmap_pars_fragment:GA,envmap_pars_vertex:HA,envmap_physical_pars_fragment:ep,envmap_vertex:VA,fog_vertex:WA,fog_pars_vertex:jA,fog_fragment:qA,fog_pars_fragment:YA,gradientmap_pars_fragment:XA,lightmap_pars_fragment:KA,lights_lambert_fragment:JA,lights_lambert_pars_fragment:ZA,lights_pars_begin:$A,lights_toon_fragment:tp,lights_toon_pars_fragment:np,lights_phong_fragment:ip,lights_phong_pars_fragment:sp,lights_physical_fragment:ap,lights_physical_pars_fragment:rp,lights_fragment_begin:op,lights_fragment_maps:cp,lights_fragment_end:lp,logdepthbuf_fragment:hp,logdepthbuf_pars_fragment:up,logdepthbuf_pars_vertex:fp,logdepthbuf_vertex:dp,map_fragment:Ap,map_pars_fragment:pp,map_particle_fragment:mp,map_particle_pars_fragment:gp,metalnessmap_fragment:bp,metalnessmap_pars_fragment:xp,morphinstance_vertex:_p,morphcolor_vertex:Ep,morphnormal_vertex:vp,morphtarget_pars_vertex:Mp,morphtarget_vertex:yp,normal_fragment_begin:Cp,normal_fragment_maps:wp,normal_pars_fragment:Sp,normal_pars_vertex:Ip,normal_vertex:Tp,normalmap_pars_fragment:Bp,clearcoat_normal_fragment_begin:Rp,clearcoat_normal_fragment_maps:Dp,clearcoat_pars_fragment:Lp,iridescence_pars_fragment:Pp,opaque_fragment:Up,packing:Fp,premultiplied_alpha_fragment:Np,project_vertex:Qp,dithering_fragment:kp,dithering_pars_fragment:Op,roughnessmap_fragment:zp,roughnessmap_pars_fragment:Gp,shadowmap_pars_fragment:Hp,shadowmap_pars_vertex:Vp,shadowmap_vertex:Wp,shadowmask_pars_fragment:jp,skinbase_vertex:qp,skinning_pars_vertex:Yp,skinning_vertex:Xp,skinnormal_vertex:Kp,specularmap_fragment:Jp,specularmap_pars_fragment:Zp,tonemapping_fragment:$p,tonemapping_pars_fragment:em,transmission_fragment:tm,transmission_pars_fragment:nm,uv_pars_fragment:im,uv_pars_vertex:sm,uv_vertex:am,worldpos_vertex:rm,background_vert:om,background_frag:cm,backgroundCube_vert:lm,backgroundCube_frag:hm,cube_vert:um,cube_frag:fm,depth_vert:dm,depth_frag:Am,distanceRGBA_vert:pm,distanceRGBA_frag:mm,equirect_vert:gm,equirect_frag:bm,linedashed_vert:xm,linedashed_frag:_m,meshbasic_vert:Em,meshbasic_frag:vm,meshlambert_vert:Mm,meshlambert_frag:ym,meshmatcap_vert:Cm,meshmatcap_frag:wm,meshnormal_vert:Sm,meshnormal_frag:Im,meshphong_vert:Tm,meshphong_frag:Bm,meshphysical_vert:Rm,meshphysical_frag:Dm,meshtoon_vert:Lm,meshtoon_frag:Pm,points_vert:Um,points_frag:Fm,shadow_vert:Nm,shadow_frag:Qm,sprite_vert:km,sprite_frag:Om},ke={common:{diffuse:{value:new Ie(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new $e}},envmap:{envMap:{value:null},envMapRotation:{value:new $e},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new $e}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new $e}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new $e},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new $e},normalScale:{value:new Oe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new $e},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new $e}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new $e}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new $e}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ie(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ie(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0},uvTransform:{value:new $e}},sprite:{diffuse:{value:new Ie(16777215)},opacity:{value:1},center:{value:new Oe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}}},oi={basic:{uniforms:mn([ke.common,ke.specularmap,ke.envmap,ke.aomap,ke.lightmap,ke.fog]),vertexShader:et.meshbasic_vert,fragmentShader:et.meshbasic_frag},lambert:{uniforms:mn([ke.common,ke.specularmap,ke.envmap,ke.aomap,ke.lightmap,ke.emissivemap,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.fog,ke.lights,{emissive:{value:new Ie(0)}}]),vertexShader:et.meshlambert_vert,fragmentShader:et.meshlambert_frag},phong:{uniforms:mn([ke.common,ke.specularmap,ke.envmap,ke.aomap,ke.lightmap,ke.emissivemap,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.fog,ke.lights,{emissive:{value:new Ie(0)},specular:{value:new Ie(1118481)},shininess:{value:30}}]),vertexShader:et.meshphong_vert,fragmentShader:et.meshphong_frag},standard:{uniforms:mn([ke.common,ke.envmap,ke.aomap,ke.lightmap,ke.emissivemap,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.roughnessmap,ke.metalnessmap,ke.fog,ke.lights,{emissive:{value:new Ie(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:et.meshphysical_vert,fragmentShader:et.meshphysical_frag},toon:{uniforms:mn([ke.common,ke.aomap,ke.lightmap,ke.emissivemap,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.gradientmap,ke.fog,ke.lights,{emissive:{value:new Ie(0)}}]),vertexShader:et.meshtoon_vert,fragmentShader:et.meshtoon_frag},matcap:{uniforms:mn([ke.common,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.fog,{matcap:{value:null}}]),vertexShader:et.meshmatcap_vert,fragmentShader:et.meshmatcap_frag},points:{uniforms:mn([ke.points,ke.fog]),vertexShader:et.points_vert,fragmentShader:et.points_frag},dashed:{uniforms:mn([ke.common,ke.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:et.linedashed_vert,fragmentShader:et.linedashed_frag},depth:{uniforms:mn([ke.common,ke.displacementmap]),vertexShader:et.depth_vert,fragmentShader:et.depth_frag},normal:{uniforms:mn([ke.common,ke.bumpmap,ke.normalmap,ke.displacementmap,{opacity:{value:1}}]),vertexShader:et.meshnormal_vert,fragmentShader:et.meshnormal_frag},sprite:{uniforms:mn([ke.sprite,ke.fog]),vertexShader:et.sprite_vert,fragmentShader:et.sprite_frag},background:{uniforms:{uvTransform:{value:new $e},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:et.background_vert,fragmentShader:et.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new $e}},vertexShader:et.backgroundCube_vert,fragmentShader:et.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:et.cube_vert,fragmentShader:et.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:et.equirect_vert,fragmentShader:et.equirect_frag},distanceRGBA:{uniforms:mn([ke.common,ke.displacementmap,{referencePosition:{value:new Z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:et.distanceRGBA_vert,fragmentShader:et.distanceRGBA_frag},shadow:{uniforms:mn([ke.lights,ke.fog,{color:{value:new Ie(0)},opacity:{value:1}}]),vertexShader:et.shadow_vert,fragmentShader:et.shadow_frag}};oi.physical={uniforms:mn([oi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new $e},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new $e},clearcoatNormalScale:{value:new Oe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new $e},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new $e},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new $e},sheen:{value:0},sheenColor:{value:new Ie(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new $e},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new $e},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new $e},transmissionSamplerSize:{value:new Oe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new $e},attenuationDistance:{value:0},attenuationColor:{value:new Ie(0)},specularColor:{value:new Ie(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new $e},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new $e},anisotropyVector:{value:new Oe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new $e}}]),vertexShader:et.meshphysical_vert,fragmentShader:et.meshphysical_frag};const lr={r:0,b:0,g:0},ts=new Vn,zm=new He;function Gm(i,e,t,n,s,a,r){const o=new Ie(0);let c=a===!0?0:1,l,h,u=null,f=0,m=null;function x(C){let y=C.isScene===!0?C.background:null;return y&&y.isTexture&&(y=(C.backgroundBlurriness>0?t:e).get(y)),y}function _(C){let y=!1;const M=x(C);M===null?d(o,c):M&&M.isColor&&(d(M,1),y=!0);const W=i.xr.getEnvironmentBlendMode();W==="additive"?n.buffers.color.setClear(0,0,0,1,r):W==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,r),(i.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function p(C,y){const M=x(y);M&&(M.isCubeTexture||M.mapping===Jr)?(h===void 0&&(h=new st(new Dt(1,1,1),new Ht({name:"BackgroundCubeMaterial",uniforms:Xs(oi.backgroundCube.uniforms),vertexShader:oi.backgroundCube.vertexShader,fragmentShader:oi.backgroundCube.fragmentShader,side:wn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(W,V,G){this.matrixWorld.copyPosition(G.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),ts.copy(y.backgroundRotation),ts.x*=-1,ts.y*=-1,ts.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(ts.y*=-1,ts.z*=-1),h.material.uniforms.envMap.value=M,h.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(zm.makeRotationFromEuler(ts)),h.material.toneMapped=ot.getTransfer(M.colorSpace)!==pt,(u!==M||f!==M.version||m!==i.toneMapping)&&(h.material.needsUpdate=!0,u=M,f=M.version,m=i.toneMapping),h.layers.enableAll(),C.unshift(h,h.geometry,h.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new st(new Ks(2,2),new Ht({name:"BackgroundMaterial",uniforms:Xs(oi.background.uniforms),vertexShader:oi.background.vertexShader,fragmentShader:oi.background.fragmentShader,side:ni,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=ot.getTransfer(M.colorSpace)!==pt,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(u!==M||f!==M.version||m!==i.toneMapping)&&(l.material.needsUpdate=!0,u=M,f=M.version,m=i.toneMapping),l.layers.enableAll(),C.unshift(l,l.geometry,l.material,0,0,null))}function d(C,y){C.getRGB(lr,Vu(i)),n.buffers.color.setClear(lr.r,lr.g,lr.b,y,r)}return{getClearColor:function(){return o},setClearColor:function(C,y=1){o.set(C),c=y,d(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(C){c=C,d(o,c)},render:_,addToRenderList:p}}function Hm(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null);let a=s,r=!1;function o(B,A,I,N,$){let q=!1;const ae=u(N,I,A);a!==ae&&(a=ae,l(a.object)),q=m(B,N,I,$),q&&x(B,N,I,$),$!==null&&e.update($,i.ELEMENT_ARRAY_BUFFER),(q||r)&&(r=!1,M(B,A,I,N),$!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get($).buffer))}function c(){return i.createVertexArray()}function l(B){return i.bindVertexArray(B)}function h(B){return i.deleteVertexArray(B)}function u(B,A,I){const N=I.wireframe===!0;let $=n[B.id];$===void 0&&($={},n[B.id]=$);let q=$[A.id];q===void 0&&(q={},$[A.id]=q);let ae=q[N];return ae===void 0&&(ae=f(c()),q[N]=ae),ae}function f(B){const A=[],I=[],N=[];for(let $=0;$<t;$++)A[$]=0,I[$]=0,N[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:A,enabledAttributes:I,attributeDivisors:N,object:B,attributes:{},index:null}}function m(B,A,I,N){const $=a.attributes,q=A.attributes;let ae=0;const j=I.getAttributes();for(const K in j)if(j[K].location>=0){const ne=$[K];let oe=q[K];if(oe===void 0&&(K==="instanceMatrix"&&B.instanceMatrix&&(oe=B.instanceMatrix),K==="instanceColor"&&B.instanceColor&&(oe=B.instanceColor)),ne===void 0||ne.attribute!==oe||oe&&ne.data!==oe.data)return!0;ae++}return a.attributesNum!==ae||a.index!==N}function x(B,A,I,N){const $={},q=A.attributes;let ae=0;const j=I.getAttributes();for(const K in j)if(j[K].location>=0){let ne=q[K];ne===void 0&&(K==="instanceMatrix"&&B.instanceMatrix&&(ne=B.instanceMatrix),K==="instanceColor"&&B.instanceColor&&(ne=B.instanceColor));const oe={};oe.attribute=ne,ne&&ne.data&&(oe.data=ne.data),$[K]=oe,ae++}a.attributes=$,a.attributesNum=ae,a.index=N}function _(){const B=a.newAttributes;for(let A=0,I=B.length;A<I;A++)B[A]=0}function p(B){d(B,0)}function d(B,A){const I=a.newAttributes,N=a.enabledAttributes,$=a.attributeDivisors;I[B]=1,N[B]===0&&(i.enableVertexAttribArray(B),N[B]=1),$[B]!==A&&(i.vertexAttribDivisor(B,A),$[B]=A)}function C(){const B=a.newAttributes,A=a.enabledAttributes;for(let I=0,N=A.length;I<N;I++)A[I]!==B[I]&&(i.disableVertexAttribArray(I),A[I]=0)}function y(B,A,I,N,$,q,ae){ae===!0?i.vertexAttribIPointer(B,A,I,$,q):i.vertexAttribPointer(B,A,I,N,$,q)}function M(B,A,I,N){_();const $=N.attributes,q=I.getAttributes(),ae=A.defaultAttributeValues;for(const j in q){const K=q[j];if(K.location>=0){let fe=$[j];if(fe===void 0&&(j==="instanceMatrix"&&B.instanceMatrix&&(fe=B.instanceMatrix),j==="instanceColor"&&B.instanceColor&&(fe=B.instanceColor)),fe!==void 0){const ne=fe.normalized,oe=fe.itemSize,ge=e.get(fe);if(ge===void 0)continue;const be=ge.buffer,te=ge.type,he=ge.bytesPerElement,ce=te===i.INT||te===i.UNSIGNED_INT||fe.gpuType===rl;if(fe.isInterleavedBufferAttribute){const me=fe.data,Y=me.stride,se=fe.offset;if(me.isInstancedInterleavedBuffer){for(let de=0;de<K.locationSize;de++)d(K.location+de,me.meshPerAttribute);B.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=me.meshPerAttribute*me.count)}else for(let de=0;de<K.locationSize;de++)p(K.location+de);i.bindBuffer(i.ARRAY_BUFFER,be);for(let de=0;de<K.locationSize;de++)y(K.location+de,oe/K.locationSize,te,ne,Y*he,(se+oe/K.locationSize*de)*he,ce)}else{if(fe.isInstancedBufferAttribute){for(let me=0;me<K.locationSize;me++)d(K.location+me,fe.meshPerAttribute);B.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let me=0;me<K.locationSize;me++)p(K.location+me);i.bindBuffer(i.ARRAY_BUFFER,be);for(let me=0;me<K.locationSize;me++)y(K.location+me,oe/K.locationSize,te,ne,oe*he,oe/K.locationSize*me*he,ce)}}else if(ae!==void 0){const ne=ae[j];if(ne!==void 0)switch(ne.length){case 2:i.vertexAttrib2fv(K.location,ne);break;case 3:i.vertexAttrib3fv(K.location,ne);break;case 4:i.vertexAttrib4fv(K.location,ne);break;default:i.vertexAttrib1fv(K.location,ne)}}}}C()}function W(){ee();for(const B in n){const A=n[B];for(const I in A){const N=A[I];for(const $ in N)h(N[$].object),delete N[$];delete A[I]}delete n[B]}}function V(B){if(n[B.id]===void 0)return;const A=n[B.id];for(const I in A){const N=A[I];for(const $ in N)h(N[$].object),delete N[$];delete A[I]}delete n[B.id]}function G(B){for(const A in n){const I=n[A];if(I[B.id]===void 0)continue;const N=I[B.id];for(const $ in N)h(N[$].object),delete N[$];delete I[B.id]}}function ee(){R(),r=!0,a!==s&&(a=s,l(a.object))}function R(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:ee,resetDefaultState:R,dispose:W,releaseStatesOfGeometry:V,releaseStatesOfProgram:G,initAttributes:_,enableAttribute:p,disableUnusedAttributes:C}}function Vm(i,e,t){let n;function s(l){n=l}function a(l,h){i.drawArrays(n,l,h),t.update(h,n,1)}function r(l,h,u){u!==0&&(i.drawArraysInstanced(n,l,h,u),t.update(h,n,u))}function o(l,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let m=0;for(let x=0;x<u;x++)m+=h[x];t.update(m,n,1)}function c(l,h,u,f){if(u===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let x=0;x<l.length;x++)r(l[x],h[x],f[x]);else{m.multiDrawArraysInstancedWEBGL(n,l,0,h,0,f,0,u);let x=0;for(let _=0;_<u;_++)x+=h[_]*f[_];t.update(x,n,1)}}this.setMode=s,this.render=a,this.renderInstances=r,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function Wm(i,e,t,n){let s;function a(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const G=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(G.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function r(G){return!(G!==jt&&n.convert(G)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(G){const ee=G===an&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(G!==Wt&&n.convert(G)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&G!==un&&!ee)}function c(G){if(G==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";G="mediump"}return G==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const u=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),C=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),y=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),W=x>0,V=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:r,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:u,reverseDepthBuffer:f,maxTextures:m,maxVertexTextures:x,maxTextureSize:_,maxCubemapSize:p,maxAttributes:d,maxVertexUniforms:C,maxVaryings:y,maxFragmentUniforms:M,vertexTextures:W,maxSamples:V}}function jm(i){const e=this;let t=null,n=0,s=!1,a=!1;const r=new Oi,o=new $e,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const m=u.length!==0||f||n!==0||s;return s=f,n=u.length,m},this.beginShadows=function(){a=!0,h(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(u,f){t=h(u,f,0)},this.setState=function(u,f,m){const x=u.clippingPlanes,_=u.clipIntersection,p=u.clipShadows,d=i.get(u);if(!s||x===null||x.length===0||a&&!p)a?h(null):l();else{const C=a?0:n,y=C*4;let M=d.clippingState||null;c.value=M,M=h(x,f,y,m);for(let W=0;W!==y;++W)M[W]=t[W];d.clippingState=M,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=C}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,f,m,x){const _=u!==null?u.length:0;let p=null;if(_!==0){if(p=c.value,x!==!0||p===null){const d=m+_*4,C=f.matrixWorldInverse;o.getNormalMatrix(C),(p===null||p.length<d)&&(p=new Float32Array(d));for(let y=0,M=m;y!==_;++y,M+=4)r.copy(u[y]).applyMatrix4(C,o),r.normal.toArray(p,M),p[M+3]=r.constant}c.value=p,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,p}}function qm(i){let e=new WeakMap;function t(r,o){return o===xc?r.mapping=us:o===_c&&(r.mapping=qs),r}function n(r){if(r&&r.isTexture){const o=r.mapping;if(o===xc||o===_c)if(e.has(r)){const c=e.get(r).texture;return t(c,r.mapping)}else{const c=r.image;if(c&&c.height>0){const l=new sA(c.height);return l.fromEquirectangularTexture(i,r),e.set(r,l),r.addEventListener("dispose",s),t(l.texture,r.mapping)}else return null}}return r}function s(r){const o=r.target;o.removeEventListener("dispose",s);const c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function a(){e=new WeakMap}return{get:n,dispose:a}}class eo extends Wu{constructor(e=-1,t=1,n=1,s=-1,a=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=a,this.far=r,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,a,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=a,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let a=n-e,r=n+e,o=s+t,c=s-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=l*this.view.offsetX,r=a+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(a,r,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Qs=4,nh=[.125,.215,.35,.446,.526,.582],os=20,Po=new eo,ih=new Ie;let Uo=null,Fo=0,No=0,Qo=!1;const as=(1+Math.sqrt(5))/2,Us=1/as,sh=[new Z(-as,Us,0),new Z(as,Us,0),new Z(-Us,0,as),new Z(Us,0,as),new Z(0,as,-Us),new Z(0,as,Us),new Z(-1,1,-1),new Z(1,1,-1),new Z(-1,1,1),new Z(1,1,1)];class ah{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){Uo=this._renderer.getRenderTarget(),Fo=this._renderer.getActiveCubeFace(),No=this._renderer.getActiveMipmapLevel(),Qo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(e,n,s,a),t>0&&this._blur(a,0,0,t),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ch(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=oh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Uo,Fo,No),this._renderer.xr.enabled=Qo,e.scissorTest=!1,hr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===us||e.mapping===qs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Uo=this._renderer.getRenderTarget(),Fo=this._renderer.getActiveCubeFace(),No=this._renderer.getActiveMipmapLevel(),Qo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:_n,minFilter:_n,generateMipmaps:!1,type:an,format:jt,colorSpace:fn,depthBuffer:!1},s=rh(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=rh(e,t,n);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Ym(a)),this._blurMaterial=Xm(a,e,t)}return s}_compileMaterial(e){const t=new st(this._lodPlanes[0],e);this._renderer.compile(t,Po)}_sceneToCubeUV(e,t,n,s){const o=new bn(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(ih),h.toneMapping=Xi,h.autoClear=!1;const m=new Wi({name:"PMREM.Background",side:wn,depthWrite:!1,depthTest:!1}),x=new st(new Dt,m);let _=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,_=!0):(m.color.copy(ih),_=!0);for(let d=0;d<6;d++){const C=d%3;C===0?(o.up.set(0,c[d],0),o.lookAt(l[d],0,0)):C===1?(o.up.set(0,0,c[d]),o.lookAt(0,l[d],0)):(o.up.set(0,c[d],0),o.lookAt(0,0,l[d]));const y=this._cubeSize;hr(s,C*y,d>2?y:0,y,y),h.setRenderTarget(s),_&&h.render(x,o),h.render(e,o)}x.geometry.dispose(),x.material.dispose(),h.toneMapping=f,h.autoClear=u,e.background=p}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===us||e.mapping===qs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=ch()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=oh());const a=s?this._cubemapMaterial:this._equirectMaterial,r=new st(this._lodPlanes[0],a),o=a.uniforms;o.envMap.value=e;const c=this._cubeSize;hr(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(r,Po)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let a=1;a<s;a++){const r=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),o=sh[(s-a-1)%sh.length];this._blur(e,a-1,a,r,o)}t.autoClear=n}_blur(e,t,n,s,a){const r=this._pingPongRenderTarget;this._halfBlur(e,r,t,n,s,"latitudinal",a),this._halfBlur(r,e,n,n,s,"longitudinal",a)}_halfBlur(e,t,n,s,a,r,o){const c=this._renderer,l=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new st(this._lodPlanes[s],l),f=l.uniforms,m=this._sizeLods[n]-1,x=isFinite(a)?Math.PI/(2*m):2*Math.PI/(2*os-1),_=a/x,p=isFinite(a)?1+Math.floor(h*_):os;p>os&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${os}`);const d=[];let C=0;for(let G=0;G<os;++G){const ee=G/_,R=Math.exp(-ee*ee/2);d.push(R),G===0?C+=R:G<p&&(C+=2*R)}for(let G=0;G<d.length;G++)d[G]=d[G]/C;f.envMap.value=e.texture,f.samples.value=p,f.weights.value=d,f.latitudinal.value=r==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:y}=this;f.dTheta.value=x,f.mipInt.value=y-n;const M=this._sizeLods[s],W=3*M*(s>y-Qs?s-y+Qs:0),V=4*(this._cubeSize-M);hr(t,W,V,3*M,2*M),c.setRenderTarget(t),c.render(u,Po)}}function Ym(i){const e=[],t=[],n=[];let s=i;const a=i-Qs+1+nh.length;for(let r=0;r<a;r++){const o=Math.pow(2,s);t.push(o);let c=1/o;r>i-Qs?c=nh[r-i+Qs-1]:r===0&&(c=0),n.push(c);const l=1/(o-2),h=-l,u=1+l,f=[h,h,u,h,u,u,h,h,u,u,h,u],m=6,x=6,_=3,p=2,d=1,C=new Float32Array(_*x*m),y=new Float32Array(p*x*m),M=new Float32Array(d*x*m);for(let V=0;V<m;V++){const G=V%3*2/3-1,ee=V>2?0:-1,R=[G,ee,0,G+2/3,ee,0,G+2/3,ee+1,0,G,ee,0,G+2/3,ee+1,0,G,ee+1,0];C.set(R,_*x*V),y.set(f,p*x*V);const B=[V,V,V,V,V,V];M.set(B,d*x*V)}const W=new xt;W.setAttribute("position",new Bt(C,_)),W.setAttribute("uv",new Bt(y,p)),W.setAttribute("faceIndex",new Bt(M,d)),e.push(W),s>Qs&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function rh(i,e,t){const n=new Ln(i,e,t);return n.texture.mapping=Jr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function hr(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Xm(i,e,t){const n=new Float32Array(os),s=new Z(0,1,0);return new Ht({name:"SphericalGaussianBlur",defines:{n:os,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Al(),fragmentShader:`

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
		`,blending:tn,depthTest:!1,depthWrite:!1})}function oh(){return new Ht({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Al(),fragmentShader:`

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
		`,blending:tn,depthTest:!1,depthWrite:!1})}function ch(){return new Ht({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Al(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:tn,depthTest:!1,depthWrite:!1})}function Al(){return`

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
	`}function Km(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const c=o.mapping,l=c===xc||c===_c,h=c===us||c===qs;if(l||h){let u=e.get(o);const f=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return t===null&&(t=new ah(i)),u=l?t.fromEquirectangular(o,u):t.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),u.texture;if(u!==void 0)return u.texture;{const m=o.image;return l&&m&&m.height>0||h&&m&&s(m)?(t===null&&(t=new ah(i)),u=l?t.fromEquirectangular(o):t.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),o.addEventListener("dispose",a),u.texture):null}}}return o}function s(o){let c=0;const l=6;for(let h=0;h<l;h++)o[h]!==void 0&&c++;return c===l}function a(o){const c=o.target;c.removeEventListener("dispose",a);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function r(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:r}}function Jm(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&Ea("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Zm(i,e,t,n){const s={},a=new WeakMap;function r(u){const f=u.target;f.index!==null&&e.remove(f.index);for(const x in f.attributes)e.remove(f.attributes[x]);for(const x in f.morphAttributes){const _=f.morphAttributes[x];for(let p=0,d=_.length;p<d;p++)e.remove(_[p])}f.removeEventListener("dispose",r),delete s[f.id];const m=a.get(f);m&&(e.remove(m),a.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(u,f){return s[f.id]===!0||(f.addEventListener("dispose",r),s[f.id]=!0,t.memory.geometries++),f}function c(u){const f=u.attributes;for(const x in f)e.update(f[x],i.ARRAY_BUFFER);const m=u.morphAttributes;for(const x in m){const _=m[x];for(let p=0,d=_.length;p<d;p++)e.update(_[p],i.ARRAY_BUFFER)}}function l(u){const f=[],m=u.index,x=u.attributes.position;let _=0;if(m!==null){const C=m.array;_=m.version;for(let y=0,M=C.length;y<M;y+=3){const W=C[y+0],V=C[y+1],G=C[y+2];f.push(W,V,V,G,G,W)}}else if(x!==void 0){const C=x.array;_=x.version;for(let y=0,M=C.length/3-1;y<M;y+=3){const W=y+0,V=y+1,G=y+2;f.push(W,V,V,G,G,W)}}else return;const p=new(Fu(f)?Hu:Gu)(f,1);p.version=_;const d=a.get(u);d&&e.remove(d),a.set(u,p)}function h(u){const f=a.get(u);if(f){const m=u.index;m!==null&&f.version<m.version&&l(u)}else l(u);return a.get(u)}return{get:o,update:c,getWireframeAttribute:h}}function $m(i,e,t){let n;function s(f){n=f}let a,r;function o(f){a=f.type,r=f.bytesPerElement}function c(f,m){i.drawElements(n,m,a,f*r),t.update(m,n,1)}function l(f,m,x){x!==0&&(i.drawElementsInstanced(n,m,a,f*r,x),t.update(m,n,x))}function h(f,m,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,a,f,0,x);let p=0;for(let d=0;d<x;d++)p+=m[d];t.update(p,n,1)}function u(f,m,x,_){if(x===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let d=0;d<f.length;d++)l(f[d]/r,m[d],_[d]);else{p.multiDrawElementsInstancedWEBGL(n,m,0,a,f,0,_,0,x);let d=0;for(let C=0;C<x;C++)d+=m[C]*_[C];t.update(d,n,1)}}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function eg(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(a,r,o){switch(t.calls++,r){case i.TRIANGLES:t.triangles+=o*(a/3);break;case i.LINES:t.lines+=o*(a/2);break;case i.LINE_STRIP:t.lines+=o*(a-1);break;case i.LINE_LOOP:t.lines+=o*a;break;case i.POINTS:t.points+=o*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function tg(i,e,t){const n=new WeakMap,s=new ft;function a(r,o,c){const l=r.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let f=n.get(o);if(f===void 0||f.count!==u){let B=function(){ee.dispose(),n.delete(o),o.removeEventListener("dispose",B)};var m=B;f!==void 0&&f.texture.dispose();const x=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,p=o.morphAttributes.color!==void 0,d=o.morphAttributes.position||[],C=o.morphAttributes.normal||[],y=o.morphAttributes.color||[];let M=0;x===!0&&(M=1),_===!0&&(M=2),p===!0&&(M=3);let W=o.attributes.position.count*M,V=1;W>e.maxTextureSize&&(V=Math.ceil(W/e.maxTextureSize),W=e.maxTextureSize);const G=new Float32Array(W*V*4*u),ee=new Qu(G,W,V,u);ee.type=un,ee.needsUpdate=!0;const R=M*4;for(let A=0;A<u;A++){const I=d[A],N=C[A],$=y[A],q=W*V*4*A;for(let ae=0;ae<I.count;ae++){const j=ae*R;x===!0&&(s.fromBufferAttribute(I,ae),G[q+j+0]=s.x,G[q+j+1]=s.y,G[q+j+2]=s.z,G[q+j+3]=0),_===!0&&(s.fromBufferAttribute(N,ae),G[q+j+4]=s.x,G[q+j+5]=s.y,G[q+j+6]=s.z,G[q+j+7]=0),p===!0&&(s.fromBufferAttribute($,ae),G[q+j+8]=s.x,G[q+j+9]=s.y,G[q+j+10]=s.z,G[q+j+11]=$.itemSize===4?s.w:1)}}f={count:u,texture:ee,size:new Oe(W,V)},n.set(o,f),o.addEventListener("dispose",B)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",r.morphTexture,t);else{let x=0;for(let p=0;p<l.length;p++)x+=l[p];const _=o.morphTargetsRelative?1:1-x;c.getUniforms().setValue(i,"morphTargetBaseInfluence",_),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:a}}function ng(i,e,t,n){let s=new WeakMap;function a(c){const l=n.render.frame,h=c.geometry,u=e.get(c,h);if(s.get(u)!==l&&(e.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),s.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const f=c.skeleton;s.get(f)!==l&&(f.update(),s.set(f,l))}return u}function r(){s=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:a,dispose:r}}class pl extends kt{constructor(e,t,n,s,a,r,o,c,l,h=zs){if(h!==zs&&h!==As)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===zs&&(n=fs),n===void 0&&h===As&&(n=ds),super(null,s,a,r,o,c,h,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:on,this.minFilter=c!==void 0?c:on,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Yu=new kt,lh=new pl(1,1),Xu=new Qu,Ku=new ku,Ju=new ju,hh=[],uh=[],fh=new Float32Array(16),dh=new Float32Array(9),Ah=new Float32Array(4);function ta(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let a=hh[s];if(a===void 0&&(a=new Float32Array(s),hh[s]=a),e!==0){n.toArray(a,0);for(let r=1,o=0;r!==e;++r)o+=t,i[r].toArray(a,o)}return a}function qt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Yt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function to(i,e){let t=uh[e];t===void 0&&(t=new Int32Array(e),uh[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function ig(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function sg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(qt(t,e))return;i.uniform2fv(this.addr,e),Yt(t,e)}}function ag(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(qt(t,e))return;i.uniform3fv(this.addr,e),Yt(t,e)}}function rg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(qt(t,e))return;i.uniform4fv(this.addr,e),Yt(t,e)}}function og(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(qt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Yt(t,e)}else{if(qt(t,n))return;Ah.set(n),i.uniformMatrix2fv(this.addr,!1,Ah),Yt(t,n)}}function cg(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(qt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Yt(t,e)}else{if(qt(t,n))return;dh.set(n),i.uniformMatrix3fv(this.addr,!1,dh),Yt(t,n)}}function lg(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(qt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Yt(t,e)}else{if(qt(t,n))return;fh.set(n),i.uniformMatrix4fv(this.addr,!1,fh),Yt(t,n)}}function hg(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function ug(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(qt(t,e))return;i.uniform2iv(this.addr,e),Yt(t,e)}}function fg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(qt(t,e))return;i.uniform3iv(this.addr,e),Yt(t,e)}}function dg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(qt(t,e))return;i.uniform4iv(this.addr,e),Yt(t,e)}}function Ag(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function pg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(qt(t,e))return;i.uniform2uiv(this.addr,e),Yt(t,e)}}function mg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(qt(t,e))return;i.uniform3uiv(this.addr,e),Yt(t,e)}}function gg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(qt(t,e))return;i.uniform4uiv(this.addr,e),Yt(t,e)}}function bg(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let a;this.type===i.SAMPLER_2D_SHADOW?(lh.compareFunction=Uu,a=lh):a=Yu,t.setTexture2D(e||a,s)}function xg(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Ku,s)}function _g(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Ju,s)}function Eg(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Xu,s)}function vg(i){switch(i){case 5126:return ig;case 35664:return sg;case 35665:return ag;case 35666:return rg;case 35674:return og;case 35675:return cg;case 35676:return lg;case 5124:case 35670:return hg;case 35667:case 35671:return ug;case 35668:case 35672:return fg;case 35669:case 35673:return dg;case 5125:return Ag;case 36294:return pg;case 36295:return mg;case 36296:return gg;case 35678:case 36198:case 36298:case 36306:case 35682:return bg;case 35679:case 36299:case 36307:return xg;case 35680:case 36300:case 36308:case 36293:return _g;case 36289:case 36303:case 36311:case 36292:return Eg}}function Mg(i,e){i.uniform1fv(this.addr,e)}function yg(i,e){const t=ta(e,this.size,2);i.uniform2fv(this.addr,t)}function Cg(i,e){const t=ta(e,this.size,3);i.uniform3fv(this.addr,t)}function wg(i,e){const t=ta(e,this.size,4);i.uniform4fv(this.addr,t)}function Sg(i,e){const t=ta(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Ig(i,e){const t=ta(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Tg(i,e){const t=ta(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Bg(i,e){i.uniform1iv(this.addr,e)}function Rg(i,e){i.uniform2iv(this.addr,e)}function Dg(i,e){i.uniform3iv(this.addr,e)}function Lg(i,e){i.uniform4iv(this.addr,e)}function Pg(i,e){i.uniform1uiv(this.addr,e)}function Ug(i,e){i.uniform2uiv(this.addr,e)}function Fg(i,e){i.uniform3uiv(this.addr,e)}function Ng(i,e){i.uniform4uiv(this.addr,e)}function Qg(i,e,t){const n=this.cache,s=e.length,a=to(t,s);qt(n,a)||(i.uniform1iv(this.addr,a),Yt(n,a));for(let r=0;r!==s;++r)t.setTexture2D(e[r]||Yu,a[r])}function kg(i,e,t){const n=this.cache,s=e.length,a=to(t,s);qt(n,a)||(i.uniform1iv(this.addr,a),Yt(n,a));for(let r=0;r!==s;++r)t.setTexture3D(e[r]||Ku,a[r])}function Og(i,e,t){const n=this.cache,s=e.length,a=to(t,s);qt(n,a)||(i.uniform1iv(this.addr,a),Yt(n,a));for(let r=0;r!==s;++r)t.setTextureCube(e[r]||Ju,a[r])}function zg(i,e,t){const n=this.cache,s=e.length,a=to(t,s);qt(n,a)||(i.uniform1iv(this.addr,a),Yt(n,a));for(let r=0;r!==s;++r)t.setTexture2DArray(e[r]||Xu,a[r])}function Gg(i){switch(i){case 5126:return Mg;case 35664:return yg;case 35665:return Cg;case 35666:return wg;case 35674:return Sg;case 35675:return Ig;case 35676:return Tg;case 5124:case 35670:return Bg;case 35667:case 35671:return Rg;case 35668:case 35672:return Dg;case 35669:case 35673:return Lg;case 5125:return Pg;case 36294:return Ug;case 36295:return Fg;case 36296:return Ng;case 35678:case 36198:case 36298:case 36306:case 35682:return Qg;case 35679:case 36299:case 36307:return kg;case 35680:case 36300:case 36308:case 36293:return Og;case 36289:case 36303:case 36311:case 36292:return zg}}class Hg{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=vg(t.type)}}class Vg{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Gg(t.type)}}class Wg{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let a=0,r=s.length;a!==r;++a){const o=s[a];o.setValue(e,t[o.id],n)}}}const ko=/(\w+)(\])?(\[|\.)?/g;function ph(i,e){i.seq.push(e),i.map[e.id]=e}function jg(i,e,t){const n=i.name,s=n.length;for(ko.lastIndex=0;;){const a=ko.exec(n),r=ko.lastIndex;let o=a[1];const c=a[2]==="]",l=a[3];if(c&&(o=o|0),l===void 0||l==="["&&r+2===s){ph(t,l===void 0?new Hg(o,i,e):new Vg(o,i,e));break}else{let u=t.map[o];u===void 0&&(u=new Wg(o),ph(t,u)),t=u}}}class Dr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const a=e.getActiveUniform(t,s),r=e.getUniformLocation(t,a.name);jg(a,r,this)}}setValue(e,t,n,s){const a=this.map[t];a!==void 0&&a.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let a=0,r=t.length;a!==r;++a){const o=t[a],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,a=e.length;s!==a;++s){const r=e[s];r.id in t&&n.push(r)}return n}}function mh(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const qg=37297;let Yg=0;function Xg(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let r=s;r<a;r++){const o=r+1;n.push(`${o===e?">":" "} ${o}: ${t[r]}`)}return n.join(`
`)}const gh=new $e;function Kg(i){ot._getMatrix(gh,ot.workingColorSpace,i);const e=`mat3( ${gh.elements.map(t=>t.toFixed(4))} )`;switch(ot.getTransfer(i)){case $r:return[e,"LinearTransferOETF"];case pt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function bh(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const r=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+Xg(i.getShaderSource(e),r)}else return s}function Jg(i,e){const t=Kg(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Zg(i,e){let t;switch(e){case _u:t="Linear";break;case Eu:t="Reinhard";break;case vu:t="Cineon";break;case sl:t="ACESFilmic";break;case al:t="AgX";break;case Mu:t="Neutral";break;case rd:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const ur=new Z;function $g(){ot.getLuminanceCoefficients(ur);const i=ur.x.toFixed(4),e=ur.y.toFixed(4),t=ur.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function e0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(va).join(`
`)}function t0(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function n0(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const a=i.getActiveAttrib(e,s),r=a.name;let o=1;a.type===i.FLOAT_MAT2&&(o=2),a.type===i.FLOAT_MAT3&&(o=3),a.type===i.FLOAT_MAT4&&(o=4),t[r]={type:a.type,location:i.getAttribLocation(e,r),locationSize:o}}return t}function va(i){return i!==""}function xh(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function _h(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const i0=/^[ \t]*#include +<([\w\d./]+)>/gm;function zc(i){return i.replace(i0,a0)}const s0=new Map;function a0(i,e){let t=et[e];if(t===void 0){const n=s0.get(e);if(n!==void 0)t=et[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return zc(t)}const r0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Eh(i){return i.replace(r0,o0)}function o0(i,e,t,n){let s="";for(let a=parseInt(e);a<parseInt(t);a++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return s}function vh(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function c0(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===nl?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===bu?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===vi&&(e="SHADOWMAP_TYPE_VSM"),e}function l0(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case us:case qs:e="ENVMAP_TYPE_CUBE";break;case Jr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function h0(i){let e="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===qs&&(e="ENVMAP_MODE_REFRACTION"),e}function u0(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case il:e="ENVMAP_BLENDING_MULTIPLY";break;case sd:e="ENVMAP_BLENDING_MIX";break;case ad:e="ENVMAP_BLENDING_ADD";break}return e}function f0(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function d0(i,e,t,n){const s=i.getContext(),a=t.defines;let r=t.vertexShader,o=t.fragmentShader;const c=c0(t),l=l0(t),h=h0(t),u=u0(t),f=f0(t),m=e0(t),x=t0(a),_=s.createProgram();let p,d,C=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(va).join(`
`),p.length>0&&(p+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(va).join(`
`),d.length>0&&(d+=`
`)):(p=[vh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(va).join(`
`),d=[vh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Xi?"#define TONE_MAPPING":"",t.toneMapping!==Xi?et.tonemapping_pars_fragment:"",t.toneMapping!==Xi?Zg("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",et.colorspace_pars_fragment,Jg("linearToOutputTexel",t.outputColorSpace),$g(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(va).join(`
`)),r=zc(r),r=xh(r,t),r=_h(r,t),o=zc(o),o=xh(o,t),o=_h(o,t),r=Eh(r),o=Eh(o),t.isRawShaderMaterial!==!0&&(C=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,d=["#define varying in",t.glslVersion===Pl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Pl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const y=C+p+r,M=C+d+o,W=mh(s,s.VERTEX_SHADER,y),V=mh(s,s.FRAGMENT_SHADER,M);s.attachShader(_,W),s.attachShader(_,V),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function G(A){if(i.debug.checkShaderErrors){const I=s.getProgramInfoLog(_).trim(),N=s.getShaderInfoLog(W).trim(),$=s.getShaderInfoLog(V).trim();let q=!0,ae=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(q=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,W,V);else{const j=bh(s,W,"vertex"),K=bh(s,V,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+I+`
`+j+`
`+K)}else I!==""?console.warn("THREE.WebGLProgram: Program Info Log:",I):(N===""||$==="")&&(ae=!1);ae&&(A.diagnostics={runnable:q,programLog:I,vertexShader:{log:N,prefix:p},fragmentShader:{log:$,prefix:d}})}s.deleteShader(W),s.deleteShader(V),ee=new Dr(s,_),R=n0(s,_)}let ee;this.getUniforms=function(){return ee===void 0&&G(this),ee};let R;this.getAttributes=function(){return R===void 0&&G(this),R};let B=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return B===!1&&(B=s.getProgramParameter(_,qg)),B},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Yg++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=W,this.fragmentShader=V,this}let A0=0;class p0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),a=this._getShaderStage(n),r=this._getShaderCacheForMaterial(e);return r.has(s)===!1&&(r.add(s),s.usedTimes++),r.has(a)===!1&&(r.add(a),a.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new m0(e),t.set(e,n)),n}}class m0{constructor(e){this.id=A0++,this.code=e,this.usedTimes=0}}function g0(i,e,t,n,s,a,r){const o=new Ou,c=new p0,l=new Set,h=[],u=s.logarithmicDepthBuffer,f=s.vertexTextures;let m=s.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(R){return l.add(R),R===0?"uv":`uv${R}`}function p(R,B,A,I,N){const $=I.fog,q=N.geometry,ae=R.isMeshStandardMaterial?I.environment:null,j=(R.isMeshStandardMaterial?t:e).get(R.envMap||ae),K=j&&j.mapping===Jr?j.image.height:null,fe=x[R.type];R.precision!==null&&(m=s.getMaxPrecision(R.precision),m!==R.precision&&console.warn("THREE.WebGLProgram.getParameters:",R.precision,"not supported, using",m,"instead."));const ne=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,oe=ne!==void 0?ne.length:0;let ge=0;q.morphAttributes.position!==void 0&&(ge=1),q.morphAttributes.normal!==void 0&&(ge=2),q.morphAttributes.color!==void 0&&(ge=3);let be,te,he,ce;if(fe){const it=oi[fe];be=it.vertexShader,te=it.fragmentShader}else be=R.vertexShader,te=R.fragmentShader,c.update(R),he=c.getVertexShaderID(R),ce=c.getFragmentShaderID(R);const me=i.getRenderTarget(),Y=i.state.buffers.depth.getReversed(),se=N.isInstancedMesh===!0,de=N.isBatchedMesh===!0,g=!!R.map,S=!!R.matcap,F=!!j,E=!!R.aoMap,U=!!R.lightMap,Q=!!R.bumpMap,z=!!R.normalMap,P=!!R.displacementMap,J=!!R.emissiveMap,k=!!R.metalnessMap,v=!!R.roughnessMap,b=R.anisotropy>0,T=R.clearcoat>0,D=R.dispersion>0,L=R.iridescence>0,w=R.sheen>0,H=R.transmission>0,X=b&&!!R.anisotropyMap,ue=T&&!!R.clearcoatMap,ve=T&&!!R.clearcoatNormalMap,ie=T&&!!R.clearcoatRoughnessMap,Ae=L&&!!R.iridescenceMap,pe=L&&!!R.iridescenceThicknessMap,Me=w&&!!R.sheenColorMap,le=w&&!!R.sheenRoughnessMap,Te=!!R.specularMap,Be=!!R.specularColorMap,De=!!R.specularIntensityMap,re=H&&!!R.transmissionMap,we=H&&!!R.thicknessMap,Ee=!!R.gradientMap,Se=!!R.alphaMap,Pe=R.alphaTest>0,Le=!!R.alphaHash,Ne=!!R.extensions;let ct=Xi;R.toneMapped&&(me===null||me.isXRRenderTarget===!0)&&(ct=i.toneMapping);const Mt={shaderID:fe,shaderType:R.type,shaderName:R.name,vertexShader:be,fragmentShader:te,defines:R.defines,customVertexShaderID:he,customFragmentShaderID:ce,isRawShaderMaterial:R.isRawShaderMaterial===!0,glslVersion:R.glslVersion,precision:m,batching:de,batchingColor:de&&N._colorsTexture!==null,instancing:se,instancingColor:se&&N.instanceColor!==null,instancingMorph:se&&N.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:me===null?i.outputColorSpace:me.isXRRenderTarget===!0?me.texture.colorSpace:fn,alphaToCoverage:!!R.alphaToCoverage,map:g,matcap:S,envMap:F,envMapMode:F&&j.mapping,envMapCubeUVHeight:K,aoMap:E,lightMap:U,bumpMap:Q,normalMap:z,displacementMap:f&&P,emissiveMap:J,normalMapObjectSpace:z&&R.normalMapType===fd,normalMapTangentSpace:z&&R.normalMapType===Zr,metalnessMap:k,roughnessMap:v,anisotropy:b,anisotropyMap:X,clearcoat:T,clearcoatMap:ue,clearcoatNormalMap:ve,clearcoatRoughnessMap:ie,dispersion:D,iridescence:L,iridescenceMap:Ae,iridescenceThicknessMap:pe,sheen:w,sheenColorMap:Me,sheenRoughnessMap:le,specularMap:Te,specularColorMap:Be,specularIntensityMap:De,transmission:H,transmissionMap:re,thicknessMap:we,gradientMap:Ee,opaque:R.transparent===!1&&R.blending===Os&&R.alphaToCoverage===!1,alphaMap:Se,alphaTest:Pe,alphaHash:Le,combine:R.combine,mapUv:g&&_(R.map.channel),aoMapUv:E&&_(R.aoMap.channel),lightMapUv:U&&_(R.lightMap.channel),bumpMapUv:Q&&_(R.bumpMap.channel),normalMapUv:z&&_(R.normalMap.channel),displacementMapUv:P&&_(R.displacementMap.channel),emissiveMapUv:J&&_(R.emissiveMap.channel),metalnessMapUv:k&&_(R.metalnessMap.channel),roughnessMapUv:v&&_(R.roughnessMap.channel),anisotropyMapUv:X&&_(R.anisotropyMap.channel),clearcoatMapUv:ue&&_(R.clearcoatMap.channel),clearcoatNormalMapUv:ve&&_(R.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ie&&_(R.clearcoatRoughnessMap.channel),iridescenceMapUv:Ae&&_(R.iridescenceMap.channel),iridescenceThicknessMapUv:pe&&_(R.iridescenceThicknessMap.channel),sheenColorMapUv:Me&&_(R.sheenColorMap.channel),sheenRoughnessMapUv:le&&_(R.sheenRoughnessMap.channel),specularMapUv:Te&&_(R.specularMap.channel),specularColorMapUv:Be&&_(R.specularColorMap.channel),specularIntensityMapUv:De&&_(R.specularIntensityMap.channel),transmissionMapUv:re&&_(R.transmissionMap.channel),thicknessMapUv:we&&_(R.thicknessMap.channel),alphaMapUv:Se&&_(R.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(z||b),vertexColors:R.vertexColors,vertexAlphas:R.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!q.attributes.uv&&(g||Se),fog:!!$,useFog:R.fog===!0,fogExp2:!!$&&$.isFogExp2,flatShading:R.flatShading===!0,sizeAttenuation:R.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Y,skinning:N.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:oe,morphTextureStride:ge,numDirLights:B.directional.length,numPointLights:B.point.length,numSpotLights:B.spot.length,numSpotLightMaps:B.spotLightMap.length,numRectAreaLights:B.rectArea.length,numHemiLights:B.hemi.length,numDirLightShadows:B.directionalShadowMap.length,numPointLightShadows:B.pointShadowMap.length,numSpotLightShadows:B.spotShadowMap.length,numSpotLightShadowsWithMaps:B.numSpotLightShadowsWithMaps,numLightProbes:B.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:R.dithering,shadowMapEnabled:i.shadowMap.enabled&&A.length>0,shadowMapType:i.shadowMap.type,toneMapping:ct,decodeVideoTexture:g&&R.map.isVideoTexture===!0&&ot.getTransfer(R.map.colorSpace)===pt,decodeVideoTextureEmissive:J&&R.emissiveMap.isVideoTexture===!0&&ot.getTransfer(R.emissiveMap.colorSpace)===pt,premultipliedAlpha:R.premultipliedAlpha,doubleSided:R.side===It,flipSided:R.side===wn,useDepthPacking:R.depthPacking>=0,depthPacking:R.depthPacking||0,index0AttributeName:R.index0AttributeName,extensionClipCullDistance:Ne&&R.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ne&&R.extensions.multiDraw===!0||de)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:R.customProgramCacheKey()};return Mt.vertexUv1s=l.has(1),Mt.vertexUv2s=l.has(2),Mt.vertexUv3s=l.has(3),l.clear(),Mt}function d(R){const B=[];if(R.shaderID?B.push(R.shaderID):(B.push(R.customVertexShaderID),B.push(R.customFragmentShaderID)),R.defines!==void 0)for(const A in R.defines)B.push(A),B.push(R.defines[A]);return R.isRawShaderMaterial===!1&&(C(B,R),y(B,R),B.push(i.outputColorSpace)),B.push(R.customProgramCacheKey),B.join()}function C(R,B){R.push(B.precision),R.push(B.outputColorSpace),R.push(B.envMapMode),R.push(B.envMapCubeUVHeight),R.push(B.mapUv),R.push(B.alphaMapUv),R.push(B.lightMapUv),R.push(B.aoMapUv),R.push(B.bumpMapUv),R.push(B.normalMapUv),R.push(B.displacementMapUv),R.push(B.emissiveMapUv),R.push(B.metalnessMapUv),R.push(B.roughnessMapUv),R.push(B.anisotropyMapUv),R.push(B.clearcoatMapUv),R.push(B.clearcoatNormalMapUv),R.push(B.clearcoatRoughnessMapUv),R.push(B.iridescenceMapUv),R.push(B.iridescenceThicknessMapUv),R.push(B.sheenColorMapUv),R.push(B.sheenRoughnessMapUv),R.push(B.specularMapUv),R.push(B.specularColorMapUv),R.push(B.specularIntensityMapUv),R.push(B.transmissionMapUv),R.push(B.thicknessMapUv),R.push(B.combine),R.push(B.fogExp2),R.push(B.sizeAttenuation),R.push(B.morphTargetsCount),R.push(B.morphAttributeCount),R.push(B.numDirLights),R.push(B.numPointLights),R.push(B.numSpotLights),R.push(B.numSpotLightMaps),R.push(B.numHemiLights),R.push(B.numRectAreaLights),R.push(B.numDirLightShadows),R.push(B.numPointLightShadows),R.push(B.numSpotLightShadows),R.push(B.numSpotLightShadowsWithMaps),R.push(B.numLightProbes),R.push(B.shadowMapType),R.push(B.toneMapping),R.push(B.numClippingPlanes),R.push(B.numClipIntersection),R.push(B.depthPacking)}function y(R,B){o.disableAll(),B.supportsVertexTextures&&o.enable(0),B.instancing&&o.enable(1),B.instancingColor&&o.enable(2),B.instancingMorph&&o.enable(3),B.matcap&&o.enable(4),B.envMap&&o.enable(5),B.normalMapObjectSpace&&o.enable(6),B.normalMapTangentSpace&&o.enable(7),B.clearcoat&&o.enable(8),B.iridescence&&o.enable(9),B.alphaTest&&o.enable(10),B.vertexColors&&o.enable(11),B.vertexAlphas&&o.enable(12),B.vertexUv1s&&o.enable(13),B.vertexUv2s&&o.enable(14),B.vertexUv3s&&o.enable(15),B.vertexTangents&&o.enable(16),B.anisotropy&&o.enable(17),B.alphaHash&&o.enable(18),B.batching&&o.enable(19),B.dispersion&&o.enable(20),B.batchingColor&&o.enable(21),R.push(o.mask),o.disableAll(),B.fog&&o.enable(0),B.useFog&&o.enable(1),B.flatShading&&o.enable(2),B.logarithmicDepthBuffer&&o.enable(3),B.reverseDepthBuffer&&o.enable(4),B.skinning&&o.enable(5),B.morphTargets&&o.enable(6),B.morphNormals&&o.enable(7),B.morphColors&&o.enable(8),B.premultipliedAlpha&&o.enable(9),B.shadowMapEnabled&&o.enable(10),B.doubleSided&&o.enable(11),B.flipSided&&o.enable(12),B.useDepthPacking&&o.enable(13),B.dithering&&o.enable(14),B.transmission&&o.enable(15),B.sheen&&o.enable(16),B.opaque&&o.enable(17),B.pointsUvs&&o.enable(18),B.decodeVideoTexture&&o.enable(19),B.decodeVideoTextureEmissive&&o.enable(20),B.alphaToCoverage&&o.enable(21),R.push(o.mask)}function M(R){const B=x[R.type];let A;if(B){const I=oi[B];A=li.clone(I.uniforms)}else A=R.uniforms;return A}function W(R,B){let A;for(let I=0,N=h.length;I<N;I++){const $=h[I];if($.cacheKey===B){A=$,++A.usedTimes;break}}return A===void 0&&(A=new d0(i,B,R,a),h.push(A)),A}function V(R){if(--R.usedTimes===0){const B=h.indexOf(R);h[B]=h[h.length-1],h.pop(),R.destroy()}}function G(R){c.remove(R)}function ee(){c.dispose()}return{getParameters:p,getProgramCacheKey:d,getUniforms:M,acquireProgram:W,releaseProgram:V,releaseShaderCache:G,programs:h,dispose:ee}}function b0(){let i=new WeakMap;function e(r){return i.has(r)}function t(r){let o=i.get(r);return o===void 0&&(o={},i.set(r,o)),o}function n(r){i.delete(r)}function s(r,o,c){i.get(r)[o]=c}function a(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:a}}function x0(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Mh(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function yh(){const i=[];let e=0;const t=[],n=[],s=[];function a(){e=0,t.length=0,n.length=0,s.length=0}function r(u,f,m,x,_,p){let d=i[e];return d===void 0?(d={id:u.id,object:u,geometry:f,material:m,groupOrder:x,renderOrder:u.renderOrder,z:_,group:p},i[e]=d):(d.id=u.id,d.object=u,d.geometry=f,d.material=m,d.groupOrder=x,d.renderOrder=u.renderOrder,d.z=_,d.group=p),e++,d}function o(u,f,m,x,_,p){const d=r(u,f,m,x,_,p);m.transmission>0?n.push(d):m.transparent===!0?s.push(d):t.push(d)}function c(u,f,m,x,_,p){const d=r(u,f,m,x,_,p);m.transmission>0?n.unshift(d):m.transparent===!0?s.unshift(d):t.unshift(d)}function l(u,f){t.length>1&&t.sort(u||x0),n.length>1&&n.sort(f||Mh),s.length>1&&s.sort(f||Mh)}function h(){for(let u=e,f=i.length;u<f;u++){const m=i[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:s,init:a,push:o,unshift:c,finish:h,sort:l}}function _0(){let i=new WeakMap;function e(n,s){const a=i.get(n);let r;return a===void 0?(r=new yh,i.set(n,[r])):s>=a.length?(r=new yh,a.push(r)):r=a[s],r}function t(){i=new WeakMap}return{get:e,dispose:t}}function E0(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new Z,color:new Ie};break;case"SpotLight":t={position:new Z,direction:new Z,color:new Ie,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new Z,color:new Ie,distance:0,decay:0};break;case"HemisphereLight":t={direction:new Z,skyColor:new Ie,groundColor:new Ie};break;case"RectAreaLight":t={color:new Ie,position:new Z,halfWidth:new Z,halfHeight:new Z};break}return i[e.id]=t,t}}}function v0(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let M0=0;function y0(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function C0(i){const e=new E0,t=v0(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new Z);const s=new Z,a=new He,r=new He;function o(l){let h=0,u=0,f=0;for(let R=0;R<9;R++)n.probe[R].set(0,0,0);let m=0,x=0,_=0,p=0,d=0,C=0,y=0,M=0,W=0,V=0,G=0;l.sort(y0);for(let R=0,B=l.length;R<B;R++){const A=l[R],I=A.color,N=A.intensity,$=A.distance,q=A.shadow&&A.shadow.map?A.shadow.map.texture:null;if(A.isAmbientLight)h+=I.r*N,u+=I.g*N,f+=I.b*N;else if(A.isLightProbe){for(let ae=0;ae<9;ae++)n.probe[ae].addScaledVector(A.sh.coefficients[ae],N);G++}else if(A.isDirectionalLight){const ae=e.get(A);if(ae.color.copy(A.color).multiplyScalar(A.intensity),A.castShadow){const j=A.shadow,K=t.get(A);K.shadowIntensity=j.intensity,K.shadowBias=j.bias,K.shadowNormalBias=j.normalBias,K.shadowRadius=j.radius,K.shadowMapSize=j.mapSize,n.directionalShadow[m]=K,n.directionalShadowMap[m]=q,n.directionalShadowMatrix[m]=A.shadow.matrix,C++}n.directional[m]=ae,m++}else if(A.isSpotLight){const ae=e.get(A);ae.position.setFromMatrixPosition(A.matrixWorld),ae.color.copy(I).multiplyScalar(N),ae.distance=$,ae.coneCos=Math.cos(A.angle),ae.penumbraCos=Math.cos(A.angle*(1-A.penumbra)),ae.decay=A.decay,n.spot[_]=ae;const j=A.shadow;if(A.map&&(n.spotLightMap[W]=A.map,W++,j.updateMatrices(A),A.castShadow&&V++),n.spotLightMatrix[_]=j.matrix,A.castShadow){const K=t.get(A);K.shadowIntensity=j.intensity,K.shadowBias=j.bias,K.shadowNormalBias=j.normalBias,K.shadowRadius=j.radius,K.shadowMapSize=j.mapSize,n.spotShadow[_]=K,n.spotShadowMap[_]=q,M++}_++}else if(A.isRectAreaLight){const ae=e.get(A);ae.color.copy(I).multiplyScalar(N),ae.halfWidth.set(A.width*.5,0,0),ae.halfHeight.set(0,A.height*.5,0),n.rectArea[p]=ae,p++}else if(A.isPointLight){const ae=e.get(A);if(ae.color.copy(A.color).multiplyScalar(A.intensity),ae.distance=A.distance,ae.decay=A.decay,A.castShadow){const j=A.shadow,K=t.get(A);K.shadowIntensity=j.intensity,K.shadowBias=j.bias,K.shadowNormalBias=j.normalBias,K.shadowRadius=j.radius,K.shadowMapSize=j.mapSize,K.shadowCameraNear=j.camera.near,K.shadowCameraFar=j.camera.far,n.pointShadow[x]=K,n.pointShadowMap[x]=q,n.pointShadowMatrix[x]=A.shadow.matrix,y++}n.point[x]=ae,x++}else if(A.isHemisphereLight){const ae=e.get(A);ae.skyColor.copy(A.color).multiplyScalar(N),ae.groundColor.copy(A.groundColor).multiplyScalar(N),n.hemi[d]=ae,d++}}p>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ke.LTC_FLOAT_1,n.rectAreaLTC2=ke.LTC_FLOAT_2):(n.rectAreaLTC1=ke.LTC_HALF_1,n.rectAreaLTC2=ke.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;const ee=n.hash;(ee.directionalLength!==m||ee.pointLength!==x||ee.spotLength!==_||ee.rectAreaLength!==p||ee.hemiLength!==d||ee.numDirectionalShadows!==C||ee.numPointShadows!==y||ee.numSpotShadows!==M||ee.numSpotMaps!==W||ee.numLightProbes!==G)&&(n.directional.length=m,n.spot.length=_,n.rectArea.length=p,n.point.length=x,n.hemi.length=d,n.directionalShadow.length=C,n.directionalShadowMap.length=C,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=M,n.spotShadowMap.length=M,n.directionalShadowMatrix.length=C,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=M+W-V,n.spotLightMap.length=W,n.numSpotLightShadowsWithMaps=V,n.numLightProbes=G,ee.directionalLength=m,ee.pointLength=x,ee.spotLength=_,ee.rectAreaLength=p,ee.hemiLength=d,ee.numDirectionalShadows=C,ee.numPointShadows=y,ee.numSpotShadows=M,ee.numSpotMaps=W,ee.numLightProbes=G,n.version=M0++)}function c(l,h){let u=0,f=0,m=0,x=0,_=0;const p=h.matrixWorldInverse;for(let d=0,C=l.length;d<C;d++){const y=l[d];if(y.isDirectionalLight){const M=n.directional[u];M.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(p),u++}else if(y.isSpotLight){const M=n.spot[m];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(p),M.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(p),m++}else if(y.isRectAreaLight){const M=n.rectArea[x];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(p),r.identity(),a.copy(y.matrixWorld),a.premultiply(p),r.extractRotation(a),M.halfWidth.set(y.width*.5,0,0),M.halfHeight.set(0,y.height*.5,0),M.halfWidth.applyMatrix4(r),M.halfHeight.applyMatrix4(r),x++}else if(y.isPointLight){const M=n.point[f];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(p),f++}else if(y.isHemisphereLight){const M=n.hemi[_];M.direction.setFromMatrixPosition(y.matrixWorld),M.direction.transformDirection(p),_++}}}return{setup:o,setupView:c,state:n}}function Ch(i){const e=new C0(i),t=[],n=[];function s(h){l.camera=h,t.length=0,n.length=0}function a(h){t.push(h)}function r(h){n.push(h)}function o(){e.setup(t)}function c(h){e.setupView(t,h)}const l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:o,setupLightsView:c,pushLight:a,pushShadow:r}}function w0(i){let e=new WeakMap;function t(s,a=0){const r=e.get(s);let o;return r===void 0?(o=new Ch(i),e.set(s,[o])):a>=r.length?(o=new Ch(i),r.push(o)):o=r[a],o}function n(){e=new WeakMap}return{get:t,dispose:n}}class S0 extends Hn{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=hd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class I0 extends Hn{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const T0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,B0=`uniform sampler2D shadow_pass;
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
}`;function R0(i,e,t){let n=new dl;const s=new Oe,a=new Oe,r=new ft,o=new S0({depthPacking:ud}),c=new I0,l={},h=t.maxTextureSize,u={[ni]:wn,[wn]:ni,[It]:It},f=new Ht({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Oe},radius:{value:4}},vertexShader:T0,fragmentShader:B0}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const x=new xt;x.setAttribute("position",new Bt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new st(x,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=nl;let d=this.type;this.render=function(V,G,ee){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||V.length===0)return;const R=i.getRenderTarget(),B=i.getActiveCubeFace(),A=i.getActiveMipmapLevel(),I=i.state;I.setBlending(tn),I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);const N=d!==vi&&this.type===vi,$=d===vi&&this.type!==vi;for(let q=0,ae=V.length;q<ae;q++){const j=V[q],K=j.shadow;if(K===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(K.autoUpdate===!1&&K.needsUpdate===!1)continue;s.copy(K.mapSize);const fe=K.getFrameExtents();if(s.multiply(fe),a.copy(K.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(a.x=Math.floor(h/fe.x),s.x=a.x*fe.x,K.mapSize.x=a.x),s.y>h&&(a.y=Math.floor(h/fe.y),s.y=a.y*fe.y,K.mapSize.y=a.y)),K.map===null||N===!0||$===!0){const oe=this.type!==vi?{minFilter:on,magFilter:on}:{};K.map!==null&&K.map.dispose(),K.map=new Ln(s.x,s.y,oe),K.map.texture.name=j.name+".shadowMap",K.camera.updateProjectionMatrix()}i.setRenderTarget(K.map),i.clear();const ne=K.getViewportCount();for(let oe=0;oe<ne;oe++){const ge=K.getViewport(oe);r.set(a.x*ge.x,a.y*ge.y,a.x*ge.z,a.y*ge.w),I.viewport(r),K.updateMatrices(j,oe),n=K.getFrustum(),M(G,ee,K.camera,j,this.type)}K.isPointLightShadow!==!0&&this.type===vi&&C(K,ee),K.needsUpdate=!1}d=this.type,p.needsUpdate=!1,i.setRenderTarget(R,B,A)};function C(V,G){const ee=e.update(_);f.defines.VSM_SAMPLES!==V.blurSamples&&(f.defines.VSM_SAMPLES=V.blurSamples,m.defines.VSM_SAMPLES=V.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),V.mapPass===null&&(V.mapPass=new Ln(s.x,s.y)),f.uniforms.shadow_pass.value=V.map.texture,f.uniforms.resolution.value=V.mapSize,f.uniforms.radius.value=V.radius,i.setRenderTarget(V.mapPass),i.clear(),i.renderBufferDirect(G,null,ee,f,_,null),m.uniforms.shadow_pass.value=V.mapPass.texture,m.uniforms.resolution.value=V.mapSize,m.uniforms.radius.value=V.radius,i.setRenderTarget(V.map),i.clear(),i.renderBufferDirect(G,null,ee,m,_,null)}function y(V,G,ee,R){let B=null;const A=ee.isPointLight===!0?V.customDistanceMaterial:V.customDepthMaterial;if(A!==void 0)B=A;else if(B=ee.isPointLight===!0?c:o,i.localClippingEnabled&&G.clipShadows===!0&&Array.isArray(G.clippingPlanes)&&G.clippingPlanes.length!==0||G.displacementMap&&G.displacementScale!==0||G.alphaMap&&G.alphaTest>0||G.map&&G.alphaTest>0){const I=B.uuid,N=G.uuid;let $=l[I];$===void 0&&($={},l[I]=$);let q=$[N];q===void 0&&(q=B.clone(),$[N]=q,G.addEventListener("dispose",W)),B=q}if(B.visible=G.visible,B.wireframe=G.wireframe,R===vi?B.side=G.shadowSide!==null?G.shadowSide:G.side:B.side=G.shadowSide!==null?G.shadowSide:u[G.side],B.alphaMap=G.alphaMap,B.alphaTest=G.alphaTest,B.map=G.map,B.clipShadows=G.clipShadows,B.clippingPlanes=G.clippingPlanes,B.clipIntersection=G.clipIntersection,B.displacementMap=G.displacementMap,B.displacementScale=G.displacementScale,B.displacementBias=G.displacementBias,B.wireframeLinewidth=G.wireframeLinewidth,B.linewidth=G.linewidth,ee.isPointLight===!0&&B.isMeshDistanceMaterial===!0){const I=i.properties.get(B);I.light=ee}return B}function M(V,G,ee,R,B){if(V.visible===!1)return;if(V.layers.test(G.layers)&&(V.isMesh||V.isLine||V.isPoints)&&(V.castShadow||V.receiveShadow&&B===vi)&&(!V.frustumCulled||n.intersectsObject(V))){V.modelViewMatrix.multiplyMatrices(ee.matrixWorldInverse,V.matrixWorld);const N=e.update(V),$=V.material;if(Array.isArray($)){const q=N.groups;for(let ae=0,j=q.length;ae<j;ae++){const K=q[ae],fe=$[K.materialIndex];if(fe&&fe.visible){const ne=y(V,fe,R,B);V.onBeforeShadow(i,V,G,ee,N,ne,K),i.renderBufferDirect(ee,null,N,ne,V,K),V.onAfterShadow(i,V,G,ee,N,ne,K)}}}else if($.visible){const q=y(V,$,R,B);V.onBeforeShadow(i,V,G,ee,N,q,null),i.renderBufferDirect(ee,null,N,q,V,null),V.onAfterShadow(i,V,G,ee,N,q,null)}}const I=V.children;for(let N=0,$=I.length;N<$;N++)M(I[N],G,ee,R,B)}function W(V){V.target.removeEventListener("dispose",W);for(const ee in l){const R=l[ee],B=V.target.uuid;B in R&&(R[B].dispose(),delete R[B])}}}const D0={[fc]:dc,[Ac]:gc,[pc]:bc,[js]:mc,[dc]:fc,[gc]:Ac,[bc]:pc,[mc]:js};function L0(i,e){function t(){let re=!1;const we=new ft;let Ee=null;const Se=new ft(0,0,0,0);return{setMask:function(Pe){Ee!==Pe&&!re&&(i.colorMask(Pe,Pe,Pe,Pe),Ee=Pe)},setLocked:function(Pe){re=Pe},setClear:function(Pe,Le,Ne,ct,Mt){Mt===!0&&(Pe*=ct,Le*=ct,Ne*=ct),we.set(Pe,Le,Ne,ct),Se.equals(we)===!1&&(i.clearColor(Pe,Le,Ne,ct),Se.copy(we))},reset:function(){re=!1,Ee=null,Se.set(-1,0,0,0)}}}function n(){let re=!1,we=!1,Ee=null,Se=null,Pe=null;return{setReversed:function(Le){if(we!==Le){const Ne=e.get("EXT_clip_control");we?Ne.clipControlEXT(Ne.LOWER_LEFT_EXT,Ne.ZERO_TO_ONE_EXT):Ne.clipControlEXT(Ne.LOWER_LEFT_EXT,Ne.NEGATIVE_ONE_TO_ONE_EXT);const ct=Pe;Pe=null,this.setClear(ct)}we=Le},getReversed:function(){return we},setTest:function(Le){Le?me(i.DEPTH_TEST):Y(i.DEPTH_TEST)},setMask:function(Le){Ee!==Le&&!re&&(i.depthMask(Le),Ee=Le)},setFunc:function(Le){if(we&&(Le=D0[Le]),Se!==Le){switch(Le){case fc:i.depthFunc(i.NEVER);break;case dc:i.depthFunc(i.ALWAYS);break;case Ac:i.depthFunc(i.LESS);break;case js:i.depthFunc(i.LEQUAL);break;case pc:i.depthFunc(i.EQUAL);break;case mc:i.depthFunc(i.GEQUAL);break;case gc:i.depthFunc(i.GREATER);break;case bc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Se=Le}},setLocked:function(Le){re=Le},setClear:function(Le){Pe!==Le&&(we&&(Le=1-Le),i.clearDepth(Le),Pe=Le)},reset:function(){re=!1,Ee=null,Se=null,Pe=null,we=!1}}}function s(){let re=!1,we=null,Ee=null,Se=null,Pe=null,Le=null,Ne=null,ct=null,Mt=null;return{setTest:function(it){re||(it?me(i.STENCIL_TEST):Y(i.STENCIL_TEST))},setMask:function(it){we!==it&&!re&&(i.stencilMask(it),we=it)},setFunc:function(it,Xt,Je){(Ee!==it||Se!==Xt||Pe!==Je)&&(i.stencilFunc(it,Xt,Je),Ee=it,Se=Xt,Pe=Je)},setOp:function(it,Xt,Je){(Le!==it||Ne!==Xt||ct!==Je)&&(i.stencilOp(it,Xt,Je),Le=it,Ne=Xt,ct=Je)},setLocked:function(it){re=it},setClear:function(it){Mt!==it&&(i.clearStencil(it),Mt=it)},reset:function(){re=!1,we=null,Ee=null,Se=null,Pe=null,Le=null,Ne=null,ct=null,Mt=null}}}const a=new t,r=new n,o=new s,c=new WeakMap,l=new WeakMap;let h={},u={},f=new WeakMap,m=[],x=null,_=!1,p=null,d=null,C=null,y=null,M=null,W=null,V=null,G=new Ie(0,0,0),ee=0,R=!1,B=null,A=null,I=null,N=null,$=null;const q=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ae=!1,j=0;const K=i.getParameter(i.VERSION);K.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(K)[1]),ae=j>=1):K.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),ae=j>=2);let fe=null,ne={};const oe=i.getParameter(i.SCISSOR_BOX),ge=i.getParameter(i.VIEWPORT),be=new ft().fromArray(oe),te=new ft().fromArray(ge);function he(re,we,Ee,Se){const Pe=new Uint8Array(4),Le=i.createTexture();i.bindTexture(re,Le),i.texParameteri(re,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(re,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ne=0;Ne<Ee;Ne++)re===i.TEXTURE_3D||re===i.TEXTURE_2D_ARRAY?i.texImage3D(we,0,i.RGBA,1,1,Se,0,i.RGBA,i.UNSIGNED_BYTE,Pe):i.texImage2D(we+Ne,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Pe);return Le}const ce={};ce[i.TEXTURE_2D]=he(i.TEXTURE_2D,i.TEXTURE_2D,1),ce[i.TEXTURE_CUBE_MAP]=he(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ce[i.TEXTURE_2D_ARRAY]=he(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ce[i.TEXTURE_3D]=he(i.TEXTURE_3D,i.TEXTURE_3D,1,1),a.setClear(0,0,0,1),r.setClear(1),o.setClear(0),me(i.DEPTH_TEST),r.setFunc(js),Q(!1),z(wl),me(i.CULL_FACE),E(tn);function me(re){h[re]!==!0&&(i.enable(re),h[re]=!0)}function Y(re){h[re]!==!1&&(i.disable(re),h[re]=!1)}function se(re,we){return u[re]!==we?(i.bindFramebuffer(re,we),u[re]=we,re===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=we),re===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=we),!0):!1}function de(re,we){let Ee=m,Se=!1;if(re){Ee=f.get(we),Ee===void 0&&(Ee=[],f.set(we,Ee));const Pe=re.textures;if(Ee.length!==Pe.length||Ee[0]!==i.COLOR_ATTACHMENT0){for(let Le=0,Ne=Pe.length;Le<Ne;Le++)Ee[Le]=i.COLOR_ATTACHMENT0+Le;Ee.length=Pe.length,Se=!0}}else Ee[0]!==i.BACK&&(Ee[0]=i.BACK,Se=!0);Se&&i.drawBuffers(Ee)}function g(re){return x!==re?(i.useProgram(re),x=re,!0):!1}const S={[Zn]:i.FUNC_ADD,[Vf]:i.FUNC_SUBTRACT,[Wf]:i.FUNC_REVERSE_SUBTRACT};S[jf]=i.MIN,S[qf]=i.MAX;const F={[xa]:i.ZERO,[Yf]:i.ONE,[Xf]:i.SRC_COLOR,[cc]:i.SRC_ALPHA,[$f]:i.SRC_ALPHA_SATURATE,[uc]:i.DST_COLOR,[hc]:i.DST_ALPHA,[Kf]:i.ONE_MINUS_SRC_COLOR,[lc]:i.ONE_MINUS_SRC_ALPHA,[Zf]:i.ONE_MINUS_DST_COLOR,[Jf]:i.ONE_MINUS_DST_ALPHA,[ed]:i.CONSTANT_COLOR,[td]:i.ONE_MINUS_CONSTANT_COLOR,[nd]:i.CONSTANT_ALPHA,[id]:i.ONE_MINUS_CONSTANT_ALPHA};function E(re,we,Ee,Se,Pe,Le,Ne,ct,Mt,it){if(re===tn){_===!0&&(Y(i.BLEND),_=!1);return}if(_===!1&&(me(i.BLEND),_=!0),re!==xu){if(re!==p||it!==R){if((d!==Zn||M!==Zn)&&(i.blendEquation(i.FUNC_ADD),d=Zn,M=Zn),it)switch(re){case Os:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case oc:i.blendFunc(i.ONE,i.ONE);break;case Sl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Il:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",re);break}else switch(re){case Os:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case oc:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Sl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Il:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",re);break}C=null,y=null,W=null,V=null,G.set(0,0,0),ee=0,p=re,R=it}return}Pe=Pe||we,Le=Le||Ee,Ne=Ne||Se,(we!==d||Pe!==M)&&(i.blendEquationSeparate(S[we],S[Pe]),d=we,M=Pe),(Ee!==C||Se!==y||Le!==W||Ne!==V)&&(i.blendFuncSeparate(F[Ee],F[Se],F[Le],F[Ne]),C=Ee,y=Se,W=Le,V=Ne),(ct.equals(G)===!1||Mt!==ee)&&(i.blendColor(ct.r,ct.g,ct.b,Mt),G.copy(ct),ee=Mt),p=re,R=!1}function U(re,we){re.side===It?Y(i.CULL_FACE):me(i.CULL_FACE);let Ee=re.side===wn;we&&(Ee=!Ee),Q(Ee),re.blending===Os&&re.transparent===!1?E(tn):E(re.blending,re.blendEquation,re.blendSrc,re.blendDst,re.blendEquationAlpha,re.blendSrcAlpha,re.blendDstAlpha,re.blendColor,re.blendAlpha,re.premultipliedAlpha),r.setFunc(re.depthFunc),r.setTest(re.depthTest),r.setMask(re.depthWrite),a.setMask(re.colorWrite);const Se=re.stencilWrite;o.setTest(Se),Se&&(o.setMask(re.stencilWriteMask),o.setFunc(re.stencilFunc,re.stencilRef,re.stencilFuncMask),o.setOp(re.stencilFail,re.stencilZFail,re.stencilZPass)),J(re.polygonOffset,re.polygonOffsetFactor,re.polygonOffsetUnits),re.alphaToCoverage===!0?me(i.SAMPLE_ALPHA_TO_COVERAGE):Y(i.SAMPLE_ALPHA_TO_COVERAGE)}function Q(re){B!==re&&(re?i.frontFace(i.CW):i.frontFace(i.CCW),B=re)}function z(re){re!==Gf?(me(i.CULL_FACE),re!==A&&(re===wl?i.cullFace(i.BACK):re===Hf?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Y(i.CULL_FACE),A=re}function P(re){re!==I&&(ae&&i.lineWidth(re),I=re)}function J(re,we,Ee){re?(me(i.POLYGON_OFFSET_FILL),(N!==we||$!==Ee)&&(i.polygonOffset(we,Ee),N=we,$=Ee)):Y(i.POLYGON_OFFSET_FILL)}function k(re){re?me(i.SCISSOR_TEST):Y(i.SCISSOR_TEST)}function v(re){re===void 0&&(re=i.TEXTURE0+q-1),fe!==re&&(i.activeTexture(re),fe=re)}function b(re,we,Ee){Ee===void 0&&(fe===null?Ee=i.TEXTURE0+q-1:Ee=fe);let Se=ne[Ee];Se===void 0&&(Se={type:void 0,texture:void 0},ne[Ee]=Se),(Se.type!==re||Se.texture!==we)&&(fe!==Ee&&(i.activeTexture(Ee),fe=Ee),i.bindTexture(re,we||ce[re]),Se.type=re,Se.texture=we)}function T(){const re=ne[fe];re!==void 0&&re.type!==void 0&&(i.bindTexture(re.type,null),re.type=void 0,re.texture=void 0)}function D(){try{i.compressedTexImage2D.apply(i,arguments)}catch(re){console.error("THREE.WebGLState:",re)}}function L(){try{i.compressedTexImage3D.apply(i,arguments)}catch(re){console.error("THREE.WebGLState:",re)}}function w(){try{i.texSubImage2D.apply(i,arguments)}catch(re){console.error("THREE.WebGLState:",re)}}function H(){try{i.texSubImage3D.apply(i,arguments)}catch(re){console.error("THREE.WebGLState:",re)}}function X(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(re){console.error("THREE.WebGLState:",re)}}function ue(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(re){console.error("THREE.WebGLState:",re)}}function ve(){try{i.texStorage2D.apply(i,arguments)}catch(re){console.error("THREE.WebGLState:",re)}}function ie(){try{i.texStorage3D.apply(i,arguments)}catch(re){console.error("THREE.WebGLState:",re)}}function Ae(){try{i.texImage2D.apply(i,arguments)}catch(re){console.error("THREE.WebGLState:",re)}}function pe(){try{i.texImage3D.apply(i,arguments)}catch(re){console.error("THREE.WebGLState:",re)}}function Me(re){be.equals(re)===!1&&(i.scissor(re.x,re.y,re.z,re.w),be.copy(re))}function le(re){te.equals(re)===!1&&(i.viewport(re.x,re.y,re.z,re.w),te.copy(re))}function Te(re,we){let Ee=l.get(we);Ee===void 0&&(Ee=new WeakMap,l.set(we,Ee));let Se=Ee.get(re);Se===void 0&&(Se=i.getUniformBlockIndex(we,re.name),Ee.set(re,Se))}function Be(re,we){const Se=l.get(we).get(re);c.get(we)!==Se&&(i.uniformBlockBinding(we,Se,re.__bindingPointIndex),c.set(we,Se))}function De(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),r.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},fe=null,ne={},u={},f=new WeakMap,m=[],x=null,_=!1,p=null,d=null,C=null,y=null,M=null,W=null,V=null,G=new Ie(0,0,0),ee=0,R=!1,B=null,A=null,I=null,N=null,$=null,be.set(0,0,i.canvas.width,i.canvas.height),te.set(0,0,i.canvas.width,i.canvas.height),a.reset(),r.reset(),o.reset()}return{buffers:{color:a,depth:r,stencil:o},enable:me,disable:Y,bindFramebuffer:se,drawBuffers:de,useProgram:g,setBlending:E,setMaterial:U,setFlipSided:Q,setCullFace:z,setLineWidth:P,setPolygonOffset:J,setScissorTest:k,activeTexture:v,bindTexture:b,unbindTexture:T,compressedTexImage2D:D,compressedTexImage3D:L,texImage2D:Ae,texImage3D:pe,updateUBOMapping:Te,uniformBlockBinding:Be,texStorage2D:ve,texStorage3D:ie,texSubImage2D:w,texSubImage3D:H,compressedTexSubImage2D:X,compressedTexSubImage3D:ue,scissor:Me,viewport:le,reset:De}}function wh(i,e,t,n){const s=P0(n);switch(t){case Tu:return i*e;case Ru:return i*e;case Du:return i*e*2;case Vi:return i*e/s.components*s.byteLength;case ll:return i*e/s.components*s.byteLength;case ls:return i*e*2/s.components*s.byteLength;case hl:return i*e*2/s.components*s.byteLength;case Bu:return i*e*3/s.components*s.byteLength;case jt:return i*e*4/s.components*s.byteLength;case ul:return i*e*4/s.components*s.byteLength;case Br:case ya:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Rr:case Ca:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ec:case vc:return Math.max(i,16)*Math.max(e,8)/4;case Nr:case Qr:return Math.max(i,8)*Math.max(e,8)/2;case kr:case Or:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case zr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case La:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Mc:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case yc:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Cc:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Pa:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case wc:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Sc:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Ic:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Tc:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Bc:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Rc:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Dc:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Lc:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Pc:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case wa:case Uc:case Gr:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Lu:case Fc:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Nc:case Qc:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function P0(i){switch(i){case Wt:case wu:return{byteLength:1,components:1};case Da:case Su:case an:return{byteLength:2,components:1};case ol:case cl:return{byteLength:2,components:4};case fs:case rl:case un:return{byteLength:4,components:1};case Iu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function U0(i,e,t,n,s,a,r){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Oe,h=new WeakMap;let u;const f=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(v,b){return m?new OffscreenCanvas(v,b):Na("canvas")}function _(v,b,T){let D=1;const L=k(v);if((L.width>T||L.height>T)&&(D=T/Math.max(L.width,L.height)),D<1)if(typeof HTMLImageElement<"u"&&v instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&v instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&v instanceof ImageBitmap||typeof VideoFrame<"u"&&v instanceof VideoFrame){const w=Math.floor(D*L.width),H=Math.floor(D*L.height);u===void 0&&(u=x(w,H));const X=b?x(w,H):u;return X.width=w,X.height=H,X.getContext("2d").drawImage(v,0,0,w,H),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+L.width+"x"+L.height+") to ("+w+"x"+H+")."),X}else return"data"in v&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+L.width+"x"+L.height+")."),v;return v}function p(v){return v.generateMipmaps}function d(v){i.generateMipmap(v)}function C(v){return v.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:v.isWebGL3DRenderTarget?i.TEXTURE_3D:v.isWebGLArrayRenderTarget||v.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(v,b,T,D,L=!1){if(v!==null){if(i[v]!==void 0)return i[v];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+v+"'")}let w=b;if(b===i.RED&&(T===i.FLOAT&&(w=i.R32F),T===i.HALF_FLOAT&&(w=i.R16F),T===i.UNSIGNED_BYTE&&(w=i.R8)),b===i.RED_INTEGER&&(T===i.UNSIGNED_BYTE&&(w=i.R8UI),T===i.UNSIGNED_SHORT&&(w=i.R16UI),T===i.UNSIGNED_INT&&(w=i.R32UI),T===i.BYTE&&(w=i.R8I),T===i.SHORT&&(w=i.R16I),T===i.INT&&(w=i.R32I)),b===i.RG&&(T===i.FLOAT&&(w=i.RG32F),T===i.HALF_FLOAT&&(w=i.RG16F),T===i.UNSIGNED_BYTE&&(w=i.RG8)),b===i.RG_INTEGER&&(T===i.UNSIGNED_BYTE&&(w=i.RG8UI),T===i.UNSIGNED_SHORT&&(w=i.RG16UI),T===i.UNSIGNED_INT&&(w=i.RG32UI),T===i.BYTE&&(w=i.RG8I),T===i.SHORT&&(w=i.RG16I),T===i.INT&&(w=i.RG32I)),b===i.RGB_INTEGER&&(T===i.UNSIGNED_BYTE&&(w=i.RGB8UI),T===i.UNSIGNED_SHORT&&(w=i.RGB16UI),T===i.UNSIGNED_INT&&(w=i.RGB32UI),T===i.BYTE&&(w=i.RGB8I),T===i.SHORT&&(w=i.RGB16I),T===i.INT&&(w=i.RGB32I)),b===i.RGBA_INTEGER&&(T===i.UNSIGNED_BYTE&&(w=i.RGBA8UI),T===i.UNSIGNED_SHORT&&(w=i.RGBA16UI),T===i.UNSIGNED_INT&&(w=i.RGBA32UI),T===i.BYTE&&(w=i.RGBA8I),T===i.SHORT&&(w=i.RGBA16I),T===i.INT&&(w=i.RGBA32I)),b===i.RGB&&T===i.UNSIGNED_INT_5_9_9_9_REV&&(w=i.RGB9_E5),b===i.RGBA){const H=L?$r:ot.getTransfer(D);T===i.FLOAT&&(w=i.RGBA32F),T===i.HALF_FLOAT&&(w=i.RGBA16F),T===i.UNSIGNED_BYTE&&(w=H===pt?i.SRGB8_ALPHA8:i.RGBA8),T===i.UNSIGNED_SHORT_4_4_4_4&&(w=i.RGBA4),T===i.UNSIGNED_SHORT_5_5_5_1&&(w=i.RGB5_A1)}return(w===i.R16F||w===i.R32F||w===i.RG16F||w===i.RG32F||w===i.RGBA16F||w===i.RGBA32F)&&e.get("EXT_color_buffer_float"),w}function M(v,b){let T;return v?b===null||b===fs||b===ds?T=i.DEPTH24_STENCIL8:b===un?T=i.DEPTH32F_STENCIL8:b===Da&&(T=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===fs||b===ds?T=i.DEPTH_COMPONENT24:b===un?T=i.DEPTH_COMPONENT32F:b===Da&&(T=i.DEPTH_COMPONENT16),T}function W(v,b){return p(v)===!0||v.isFramebufferTexture&&v.minFilter!==on&&v.minFilter!==_n?Math.log2(Math.max(b.width,b.height))+1:v.mipmaps!==void 0&&v.mipmaps.length>0?v.mipmaps.length:v.isCompressedTexture&&Array.isArray(v.image)?b.mipmaps.length:1}function V(v){const b=v.target;b.removeEventListener("dispose",V),ee(b),b.isVideoTexture&&h.delete(b)}function G(v){const b=v.target;b.removeEventListener("dispose",G),B(b)}function ee(v){const b=n.get(v);if(b.__webglInit===void 0)return;const T=v.source,D=f.get(T);if(D){const L=D[b.__cacheKey];L.usedTimes--,L.usedTimes===0&&R(v),Object.keys(D).length===0&&f.delete(T)}n.remove(v)}function R(v){const b=n.get(v);i.deleteTexture(b.__webglTexture);const T=v.source,D=f.get(T);delete D[b.__cacheKey],r.memory.textures--}function B(v){const b=n.get(v);if(v.depthTexture&&(v.depthTexture.dispose(),n.remove(v.depthTexture)),v.isWebGLCubeRenderTarget)for(let D=0;D<6;D++){if(Array.isArray(b.__webglFramebuffer[D]))for(let L=0;L<b.__webglFramebuffer[D].length;L++)i.deleteFramebuffer(b.__webglFramebuffer[D][L]);else i.deleteFramebuffer(b.__webglFramebuffer[D]);b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer[D])}else{if(Array.isArray(b.__webglFramebuffer))for(let D=0;D<b.__webglFramebuffer.length;D++)i.deleteFramebuffer(b.__webglFramebuffer[D]);else i.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&i.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let D=0;D<b.__webglColorRenderbuffer.length;D++)b.__webglColorRenderbuffer[D]&&i.deleteRenderbuffer(b.__webglColorRenderbuffer[D]);b.__webglDepthRenderbuffer&&i.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const T=v.textures;for(let D=0,L=T.length;D<L;D++){const w=n.get(T[D]);w.__webglTexture&&(i.deleteTexture(w.__webglTexture),r.memory.textures--),n.remove(T[D])}n.remove(v)}let A=0;function I(){A=0}function N(){const v=A;return v>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+v+" texture units while this GPU supports only "+s.maxTextures),A+=1,v}function $(v){const b=[];return b.push(v.wrapS),b.push(v.wrapT),b.push(v.wrapR||0),b.push(v.magFilter),b.push(v.minFilter),b.push(v.anisotropy),b.push(v.internalFormat),b.push(v.format),b.push(v.type),b.push(v.generateMipmaps),b.push(v.premultiplyAlpha),b.push(v.flipY),b.push(v.unpackAlignment),b.push(v.colorSpace),b.join()}function q(v,b){const T=n.get(v);if(v.isVideoTexture&&P(v),v.isRenderTargetTexture===!1&&v.version>0&&T.__version!==v.version){const D=v.image;if(D===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(D.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{te(T,v,b);return}}t.bindTexture(i.TEXTURE_2D,T.__webglTexture,i.TEXTURE0+b)}function ae(v,b){const T=n.get(v);if(v.version>0&&T.__version!==v.version){te(T,v,b);return}t.bindTexture(i.TEXTURE_2D_ARRAY,T.__webglTexture,i.TEXTURE0+b)}function j(v,b){const T=n.get(v);if(v.version>0&&T.__version!==v.version){te(T,v,b);return}t.bindTexture(i.TEXTURE_3D,T.__webglTexture,i.TEXTURE0+b)}function K(v,b){const T=n.get(v);if(v.version>0&&T.__version!==v.version){he(T,v,b);return}t.bindTexture(i.TEXTURE_CUBE_MAP,T.__webglTexture,i.TEXTURE0+b)}const fe={[Pn]:i.REPEAT,[wi]:i.CLAMP_TO_EDGE,[Fr]:i.MIRRORED_REPEAT},ne={[on]:i.NEAREST,[Cu]:i.NEAREST_MIPMAP_NEAREST,[_a]:i.NEAREST_MIPMAP_LINEAR,[_n]:i.LINEAR,[Tr]:i.LINEAR_MIPMAP_NEAREST,[hi]:i.LINEAR_MIPMAP_LINEAR},oe={[dd]:i.NEVER,[xd]:i.ALWAYS,[Ad]:i.LESS,[Uu]:i.LEQUAL,[pd]:i.EQUAL,[bd]:i.GEQUAL,[md]:i.GREATER,[gd]:i.NOTEQUAL};function ge(v,b){if(b.type===un&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===_n||b.magFilter===Tr||b.magFilter===_a||b.magFilter===hi||b.minFilter===_n||b.minFilter===Tr||b.minFilter===_a||b.minFilter===hi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(v,i.TEXTURE_WRAP_S,fe[b.wrapS]),i.texParameteri(v,i.TEXTURE_WRAP_T,fe[b.wrapT]),(v===i.TEXTURE_3D||v===i.TEXTURE_2D_ARRAY)&&i.texParameteri(v,i.TEXTURE_WRAP_R,fe[b.wrapR]),i.texParameteri(v,i.TEXTURE_MAG_FILTER,ne[b.magFilter]),i.texParameteri(v,i.TEXTURE_MIN_FILTER,ne[b.minFilter]),b.compareFunction&&(i.texParameteri(v,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(v,i.TEXTURE_COMPARE_FUNC,oe[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===on||b.minFilter!==_a&&b.minFilter!==hi||b.type===un&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){const T=e.get("EXT_texture_filter_anisotropic");i.texParameterf(v,T.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,s.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function be(v,b){let T=!1;v.__webglInit===void 0&&(v.__webglInit=!0,b.addEventListener("dispose",V));const D=b.source;let L=f.get(D);L===void 0&&(L={},f.set(D,L));const w=$(b);if(w!==v.__cacheKey){L[w]===void 0&&(L[w]={texture:i.createTexture(),usedTimes:0},r.memory.textures++,T=!0),L[w].usedTimes++;const H=L[v.__cacheKey];H!==void 0&&(L[v.__cacheKey].usedTimes--,H.usedTimes===0&&R(b)),v.__cacheKey=w,v.__webglTexture=L[w].texture}return T}function te(v,b,T){let D=i.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(D=i.TEXTURE_2D_ARRAY),b.isData3DTexture&&(D=i.TEXTURE_3D);const L=be(v,b),w=b.source;t.bindTexture(D,v.__webglTexture,i.TEXTURE0+T);const H=n.get(w);if(w.version!==H.__version||L===!0){t.activeTexture(i.TEXTURE0+T);const X=ot.getPrimaries(ot.workingColorSpace),ue=b.colorSpace===ci?null:ot.getPrimaries(b.colorSpace),ve=b.colorSpace===ci||X===ue?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ve);let ie=_(b.image,!1,s.maxTextureSize);ie=J(b,ie);const Ae=a.convert(b.format,b.colorSpace),pe=a.convert(b.type);let Me=y(b.internalFormat,Ae,pe,b.colorSpace,b.isVideoTexture);ge(D,b);let le;const Te=b.mipmaps,Be=b.isVideoTexture!==!0,De=H.__version===void 0||L===!0,re=w.dataReady,we=W(b,ie);if(b.isDepthTexture)Me=M(b.format===As,b.type),De&&(Be?t.texStorage2D(i.TEXTURE_2D,1,Me,ie.width,ie.height):t.texImage2D(i.TEXTURE_2D,0,Me,ie.width,ie.height,0,Ae,pe,null));else if(b.isDataTexture)if(Te.length>0){Be&&De&&t.texStorage2D(i.TEXTURE_2D,we,Me,Te[0].width,Te[0].height);for(let Ee=0,Se=Te.length;Ee<Se;Ee++)le=Te[Ee],Be?re&&t.texSubImage2D(i.TEXTURE_2D,Ee,0,0,le.width,le.height,Ae,pe,le.data):t.texImage2D(i.TEXTURE_2D,Ee,Me,le.width,le.height,0,Ae,pe,le.data);b.generateMipmaps=!1}else Be?(De&&t.texStorage2D(i.TEXTURE_2D,we,Me,ie.width,ie.height),re&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ie.width,ie.height,Ae,pe,ie.data)):t.texImage2D(i.TEXTURE_2D,0,Me,ie.width,ie.height,0,Ae,pe,ie.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){Be&&De&&t.texStorage3D(i.TEXTURE_2D_ARRAY,we,Me,Te[0].width,Te[0].height,ie.depth);for(let Ee=0,Se=Te.length;Ee<Se;Ee++)if(le=Te[Ee],b.format!==jt)if(Ae!==null)if(Be){if(re)if(b.layerUpdates.size>0){const Pe=wh(le.width,le.height,b.format,b.type);for(const Le of b.layerUpdates){const Ne=le.data.subarray(Le*Pe/le.data.BYTES_PER_ELEMENT,(Le+1)*Pe/le.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Ee,0,0,Le,le.width,le.height,1,Ae,Ne)}b.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Ee,0,0,0,le.width,le.height,ie.depth,Ae,le.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Ee,Me,le.width,le.height,ie.depth,0,le.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Be?re&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,Ee,0,0,0,le.width,le.height,ie.depth,Ae,pe,le.data):t.texImage3D(i.TEXTURE_2D_ARRAY,Ee,Me,le.width,le.height,ie.depth,0,Ae,pe,le.data)}else{Be&&De&&t.texStorage2D(i.TEXTURE_2D,we,Me,Te[0].width,Te[0].height);for(let Ee=0,Se=Te.length;Ee<Se;Ee++)le=Te[Ee],b.format!==jt?Ae!==null?Be?re&&t.compressedTexSubImage2D(i.TEXTURE_2D,Ee,0,0,le.width,le.height,Ae,le.data):t.compressedTexImage2D(i.TEXTURE_2D,Ee,Me,le.width,le.height,0,le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Be?re&&t.texSubImage2D(i.TEXTURE_2D,Ee,0,0,le.width,le.height,Ae,pe,le.data):t.texImage2D(i.TEXTURE_2D,Ee,Me,le.width,le.height,0,Ae,pe,le.data)}else if(b.isDataArrayTexture)if(Be){if(De&&t.texStorage3D(i.TEXTURE_2D_ARRAY,we,Me,ie.width,ie.height,ie.depth),re)if(b.layerUpdates.size>0){const Ee=wh(ie.width,ie.height,b.format,b.type);for(const Se of b.layerUpdates){const Pe=ie.data.subarray(Se*Ee/ie.data.BYTES_PER_ELEMENT,(Se+1)*Ee/ie.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Se,ie.width,ie.height,1,Ae,pe,Pe)}b.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ie.width,ie.height,ie.depth,Ae,pe,ie.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Me,ie.width,ie.height,ie.depth,0,Ae,pe,ie.data);else if(b.isData3DTexture)Be?(De&&t.texStorage3D(i.TEXTURE_3D,we,Me,ie.width,ie.height,ie.depth),re&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ie.width,ie.height,ie.depth,Ae,pe,ie.data)):t.texImage3D(i.TEXTURE_3D,0,Me,ie.width,ie.height,ie.depth,0,Ae,pe,ie.data);else if(b.isFramebufferTexture){if(De)if(Be)t.texStorage2D(i.TEXTURE_2D,we,Me,ie.width,ie.height);else{let Ee=ie.width,Se=ie.height;for(let Pe=0;Pe<we;Pe++)t.texImage2D(i.TEXTURE_2D,Pe,Me,Ee,Se,0,Ae,pe,null),Ee>>=1,Se>>=1}}else if(Te.length>0){if(Be&&De){const Ee=k(Te[0]);t.texStorage2D(i.TEXTURE_2D,we,Me,Ee.width,Ee.height)}for(let Ee=0,Se=Te.length;Ee<Se;Ee++)le=Te[Ee],Be?re&&t.texSubImage2D(i.TEXTURE_2D,Ee,0,0,Ae,pe,le):t.texImage2D(i.TEXTURE_2D,Ee,Me,Ae,pe,le);b.generateMipmaps=!1}else if(Be){if(De){const Ee=k(ie);t.texStorage2D(i.TEXTURE_2D,we,Me,Ee.width,Ee.height)}re&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Ae,pe,ie)}else t.texImage2D(i.TEXTURE_2D,0,Me,Ae,pe,ie);p(b)&&d(D),H.__version=w.version,b.onUpdate&&b.onUpdate(b)}v.__version=b.version}function he(v,b,T){if(b.image.length!==6)return;const D=be(v,b),L=b.source;t.bindTexture(i.TEXTURE_CUBE_MAP,v.__webglTexture,i.TEXTURE0+T);const w=n.get(L);if(L.version!==w.__version||D===!0){t.activeTexture(i.TEXTURE0+T);const H=ot.getPrimaries(ot.workingColorSpace),X=b.colorSpace===ci?null:ot.getPrimaries(b.colorSpace),ue=b.colorSpace===ci||H===X?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ue);const ve=b.isCompressedTexture||b.image[0].isCompressedTexture,ie=b.image[0]&&b.image[0].isDataTexture,Ae=[];for(let Se=0;Se<6;Se++)!ve&&!ie?Ae[Se]=_(b.image[Se],!0,s.maxCubemapSize):Ae[Se]=ie?b.image[Se].image:b.image[Se],Ae[Se]=J(b,Ae[Se]);const pe=Ae[0],Me=a.convert(b.format,b.colorSpace),le=a.convert(b.type),Te=y(b.internalFormat,Me,le,b.colorSpace),Be=b.isVideoTexture!==!0,De=w.__version===void 0||D===!0,re=L.dataReady;let we=W(b,pe);ge(i.TEXTURE_CUBE_MAP,b);let Ee;if(ve){Be&&De&&t.texStorage2D(i.TEXTURE_CUBE_MAP,we,Te,pe.width,pe.height);for(let Se=0;Se<6;Se++){Ee=Ae[Se].mipmaps;for(let Pe=0;Pe<Ee.length;Pe++){const Le=Ee[Pe];b.format!==jt?Me!==null?Be?re&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Pe,0,0,Le.width,Le.height,Me,Le.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Pe,Te,Le.width,Le.height,0,Le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Be?re&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Pe,0,0,Le.width,Le.height,Me,le,Le.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Pe,Te,Le.width,Le.height,0,Me,le,Le.data)}}}else{if(Ee=b.mipmaps,Be&&De){Ee.length>0&&we++;const Se=k(Ae[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,we,Te,Se.width,Se.height)}for(let Se=0;Se<6;Se++)if(ie){Be?re&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,0,0,Ae[Se].width,Ae[Se].height,Me,le,Ae[Se].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,Te,Ae[Se].width,Ae[Se].height,0,Me,le,Ae[Se].data);for(let Pe=0;Pe<Ee.length;Pe++){const Ne=Ee[Pe].image[Se].image;Be?re&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Pe+1,0,0,Ne.width,Ne.height,Me,le,Ne.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Pe+1,Te,Ne.width,Ne.height,0,Me,le,Ne.data)}}else{Be?re&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,0,0,Me,le,Ae[Se]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,Te,Me,le,Ae[Se]);for(let Pe=0;Pe<Ee.length;Pe++){const Le=Ee[Pe];Be?re&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Pe+1,0,0,Me,le,Le.image[Se]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Pe+1,Te,Me,le,Le.image[Se])}}}p(b)&&d(i.TEXTURE_CUBE_MAP),w.__version=L.version,b.onUpdate&&b.onUpdate(b)}v.__version=b.version}function ce(v,b,T,D,L,w){const H=a.convert(T.format,T.colorSpace),X=a.convert(T.type),ue=y(T.internalFormat,H,X,T.colorSpace),ve=n.get(b),ie=n.get(T);if(ie.__renderTarget=b,!ve.__hasExternalTextures){const Ae=Math.max(1,b.width>>w),pe=Math.max(1,b.height>>w);L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY?t.texImage3D(L,w,ue,Ae,pe,b.depth,0,H,X,null):t.texImage2D(L,w,ue,Ae,pe,0,H,X,null)}t.bindFramebuffer(i.FRAMEBUFFER,v),z(b)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,D,L,ie.__webglTexture,0,Q(b)):(L===i.TEXTURE_2D||L>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&L<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,D,L,ie.__webglTexture,w),t.bindFramebuffer(i.FRAMEBUFFER,null)}function me(v,b,T){if(i.bindRenderbuffer(i.RENDERBUFFER,v),b.depthBuffer){const D=b.depthTexture,L=D&&D.isDepthTexture?D.type:null,w=M(b.stencilBuffer,L),H=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,X=Q(b);z(b)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,X,w,b.width,b.height):T?i.renderbufferStorageMultisample(i.RENDERBUFFER,X,w,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,w,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,H,i.RENDERBUFFER,v)}else{const D=b.textures;for(let L=0;L<D.length;L++){const w=D[L],H=a.convert(w.format,w.colorSpace),X=a.convert(w.type),ue=y(w.internalFormat,H,X,w.colorSpace),ve=Q(b);T&&z(b)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ve,ue,b.width,b.height):z(b)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ve,ue,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,ue,b.width,b.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Y(v,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,v),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const D=n.get(b.depthTexture);D.__renderTarget=b,(!D.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),q(b.depthTexture,0);const L=D.__webglTexture,w=Q(b);if(b.depthTexture.format===zs)z(b)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,L,0,w):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,L,0);else if(b.depthTexture.format===As)z(b)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,L,0,w):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,L,0);else throw new Error("Unknown depthTexture format")}function se(v){const b=n.get(v),T=v.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==v.depthTexture){const D=v.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),D){const L=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,D.removeEventListener("dispose",L)};D.addEventListener("dispose",L),b.__depthDisposeCallback=L}b.__boundDepthTexture=D}if(v.depthTexture&&!b.__autoAllocateDepthBuffer){if(T)throw new Error("target.depthTexture not supported in Cube render targets");Y(b.__webglFramebuffer,v)}else if(T){b.__webglDepthbuffer=[];for(let D=0;D<6;D++)if(t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[D]),b.__webglDepthbuffer[D]===void 0)b.__webglDepthbuffer[D]=i.createRenderbuffer(),me(b.__webglDepthbuffer[D],v,!1);else{const L=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,w=b.__webglDepthbuffer[D];i.bindRenderbuffer(i.RENDERBUFFER,w),i.framebufferRenderbuffer(i.FRAMEBUFFER,L,i.RENDERBUFFER,w)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=i.createRenderbuffer(),me(b.__webglDepthbuffer,v,!1);else{const D=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,L=b.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,L),i.framebufferRenderbuffer(i.FRAMEBUFFER,D,i.RENDERBUFFER,L)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function de(v,b,T){const D=n.get(v);b!==void 0&&ce(D.__webglFramebuffer,v,v.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),T!==void 0&&se(v)}function g(v){const b=v.texture,T=n.get(v),D=n.get(b);v.addEventListener("dispose",G);const L=v.textures,w=v.isWebGLCubeRenderTarget===!0,H=L.length>1;if(H||(D.__webglTexture===void 0&&(D.__webglTexture=i.createTexture()),D.__version=b.version,r.memory.textures++),w){T.__webglFramebuffer=[];for(let X=0;X<6;X++)if(b.mipmaps&&b.mipmaps.length>0){T.__webglFramebuffer[X]=[];for(let ue=0;ue<b.mipmaps.length;ue++)T.__webglFramebuffer[X][ue]=i.createFramebuffer()}else T.__webglFramebuffer[X]=i.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){T.__webglFramebuffer=[];for(let X=0;X<b.mipmaps.length;X++)T.__webglFramebuffer[X]=i.createFramebuffer()}else T.__webglFramebuffer=i.createFramebuffer();if(H)for(let X=0,ue=L.length;X<ue;X++){const ve=n.get(L[X]);ve.__webglTexture===void 0&&(ve.__webglTexture=i.createTexture(),r.memory.textures++)}if(v.samples>0&&z(v)===!1){T.__webglMultisampledFramebuffer=i.createFramebuffer(),T.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,T.__webglMultisampledFramebuffer);for(let X=0;X<L.length;X++){const ue=L[X];T.__webglColorRenderbuffer[X]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,T.__webglColorRenderbuffer[X]);const ve=a.convert(ue.format,ue.colorSpace),ie=a.convert(ue.type),Ae=y(ue.internalFormat,ve,ie,ue.colorSpace,v.isXRRenderTarget===!0),pe=Q(v);i.renderbufferStorageMultisample(i.RENDERBUFFER,pe,Ae,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+X,i.RENDERBUFFER,T.__webglColorRenderbuffer[X])}i.bindRenderbuffer(i.RENDERBUFFER,null),v.depthBuffer&&(T.__webglDepthRenderbuffer=i.createRenderbuffer(),me(T.__webglDepthRenderbuffer,v,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(w){t.bindTexture(i.TEXTURE_CUBE_MAP,D.__webglTexture),ge(i.TEXTURE_CUBE_MAP,b);for(let X=0;X<6;X++)if(b.mipmaps&&b.mipmaps.length>0)for(let ue=0;ue<b.mipmaps.length;ue++)ce(T.__webglFramebuffer[X][ue],v,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+X,ue);else ce(T.__webglFramebuffer[X],v,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+X,0);p(b)&&d(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(H){for(let X=0,ue=L.length;X<ue;X++){const ve=L[X],ie=n.get(ve);t.bindTexture(i.TEXTURE_2D,ie.__webglTexture),ge(i.TEXTURE_2D,ve),ce(T.__webglFramebuffer,v,ve,i.COLOR_ATTACHMENT0+X,i.TEXTURE_2D,0),p(ve)&&d(i.TEXTURE_2D)}t.unbindTexture()}else{let X=i.TEXTURE_2D;if((v.isWebGL3DRenderTarget||v.isWebGLArrayRenderTarget)&&(X=v.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(X,D.__webglTexture),ge(X,b),b.mipmaps&&b.mipmaps.length>0)for(let ue=0;ue<b.mipmaps.length;ue++)ce(T.__webglFramebuffer[ue],v,b,i.COLOR_ATTACHMENT0,X,ue);else ce(T.__webglFramebuffer,v,b,i.COLOR_ATTACHMENT0,X,0);p(b)&&d(X),t.unbindTexture()}v.depthBuffer&&se(v)}function S(v){const b=v.textures;for(let T=0,D=b.length;T<D;T++){const L=b[T];if(p(L)){const w=C(v),H=n.get(L).__webglTexture;t.bindTexture(w,H),d(w),t.unbindTexture()}}}const F=[],E=[];function U(v){if(v.samples>0){if(z(v)===!1){const b=v.textures,T=v.width,D=v.height;let L=i.COLOR_BUFFER_BIT;const w=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,H=n.get(v),X=b.length>1;if(X)for(let ue=0;ue<b.length;ue++)t.bindFramebuffer(i.FRAMEBUFFER,H.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ue,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,H.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ue,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,H.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,H.__webglFramebuffer);for(let ue=0;ue<b.length;ue++){if(v.resolveDepthBuffer&&(v.depthBuffer&&(L|=i.DEPTH_BUFFER_BIT),v.stencilBuffer&&v.resolveStencilBuffer&&(L|=i.STENCIL_BUFFER_BIT)),X){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,H.__webglColorRenderbuffer[ue]);const ve=n.get(b[ue]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ve,0)}i.blitFramebuffer(0,0,T,D,0,0,T,D,L,i.NEAREST),c===!0&&(F.length=0,E.length=0,F.push(i.COLOR_ATTACHMENT0+ue),v.depthBuffer&&v.resolveDepthBuffer===!1&&(F.push(w),E.push(w),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,E)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,F))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),X)for(let ue=0;ue<b.length;ue++){t.bindFramebuffer(i.FRAMEBUFFER,H.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ue,i.RENDERBUFFER,H.__webglColorRenderbuffer[ue]);const ve=n.get(b[ue]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,H.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ue,i.TEXTURE_2D,ve,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,H.__webglMultisampledFramebuffer)}else if(v.depthBuffer&&v.resolveDepthBuffer===!1&&c){const b=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[b])}}}function Q(v){return Math.min(s.maxSamples,v.samples)}function z(v){const b=n.get(v);return v.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function P(v){const b=r.render.frame;h.get(v)!==b&&(h.set(v,b),v.update())}function J(v,b){const T=v.colorSpace,D=v.format,L=v.type;return v.isCompressedTexture===!0||v.isVideoTexture===!0||T!==fn&&T!==ci&&(ot.getTransfer(T)===pt?(D!==jt||L!==Wt)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",T)),b}function k(v){return typeof HTMLImageElement<"u"&&v instanceof HTMLImageElement?(l.width=v.naturalWidth||v.width,l.height=v.naturalHeight||v.height):typeof VideoFrame<"u"&&v instanceof VideoFrame?(l.width=v.displayWidth,l.height=v.displayHeight):(l.width=v.width,l.height=v.height),l}this.allocateTextureUnit=N,this.resetTextureUnits=I,this.setTexture2D=q,this.setTexture2DArray=ae,this.setTexture3D=j,this.setTextureCube=K,this.rebindTextures=de,this.setupRenderTarget=g,this.updateRenderTargetMipmap=S,this.updateMultisampleRenderTarget=U,this.setupDepthRenderbuffer=se,this.setupFrameBufferTexture=ce,this.useMultisampledRTT=z}function F0(i,e){function t(n,s=ci){let a;const r=ot.getTransfer(s);if(n===Wt)return i.UNSIGNED_BYTE;if(n===ol)return i.UNSIGNED_SHORT_4_4_4_4;if(n===cl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Iu)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===wu)return i.BYTE;if(n===Su)return i.SHORT;if(n===Da)return i.UNSIGNED_SHORT;if(n===rl)return i.INT;if(n===fs)return i.UNSIGNED_INT;if(n===un)return i.FLOAT;if(n===an)return i.HALF_FLOAT;if(n===Tu)return i.ALPHA;if(n===Bu)return i.RGB;if(n===jt)return i.RGBA;if(n===Ru)return i.LUMINANCE;if(n===Du)return i.LUMINANCE_ALPHA;if(n===zs)return i.DEPTH_COMPONENT;if(n===As)return i.DEPTH_STENCIL;if(n===Vi)return i.RED;if(n===ll)return i.RED_INTEGER;if(n===ls)return i.RG;if(n===hl)return i.RG_INTEGER;if(n===ul)return i.RGBA_INTEGER;if(n===Br||n===ya||n===Rr||n===Ca)if(r===pt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(n===Br)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ya)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Rr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ca)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(n===Br)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ya)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Rr)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ca)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Nr||n===Ec||n===Qr||n===vc)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(n===Nr)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ec)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Qr)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===vc)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===kr||n===Or||n===zr)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(n===kr||n===Or)return r===pt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(n===zr)return r===pt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===La||n===Mc||n===yc||n===Cc||n===Pa||n===wc||n===Sc||n===Ic||n===Tc||n===Bc||n===Rc||n===Dc||n===Lc||n===Pc)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(n===La)return r===pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Mc)return r===pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===yc)return r===pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Cc)return r===pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Pa)return r===pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===wc)return r===pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Sc)return r===pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ic)return r===pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Tc)return r===pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Bc)return r===pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Rc)return r===pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Dc)return r===pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Lc)return r===pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Pc)return r===pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===wa||n===Uc||n===Gr)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(n===wa)return r===pt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Uc)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Gr)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Lu||n===Fc||n===Nc||n===Qc)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(n===wa)return a.COMPRESSED_RED_RGTC1_EXT;if(n===Fc)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Nc)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Qc)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ds?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}class N0 extends bn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Dn extends Tt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Q0={type:"move"};class Oo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Dn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Dn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Dn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Z),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,a=null,r=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){r=!0;for(const _ of e.hand.values()){const p=t.getJointPose(_,n),d=this._getHandJoint(l,_);p!==null&&(d.matrix.fromArray(p.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=p.radius),d.visible=p!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],f=h.position.distanceTo(u.position),m=.02,x=.005;l.inputState.pinching&&f>m+x?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=m-x&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,n),a!==null&&(c.matrix.fromArray(a.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,a.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(a.linearVelocity)):c.hasLinearVelocity=!1,a.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(a.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&a!==null&&(s=a),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Q0)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=a!==null),l!==null&&(l.visible=r!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Dn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const k0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,O0=`
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

}`;class z0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const s=new kt,a=e.properties.get(s);a.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Ht({vertexShader:k0,fragmentShader:O0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new st(new Ks(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class G0 extends gs{constructor(e,t){super();const n=this;let s=null,a=1,r=null,o="local-floor",c=1,l=null,h=null,u=null,f=null,m=null,x=null;const _=new z0,p=t.getContextAttributes();let d=null,C=null;const y=[],M=[],W=new Oe;let V=null;const G=new bn;G.viewport=new ft;const ee=new bn;ee.viewport=new ft;const R=[G,ee],B=new N0;let A=null,I=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(te){let he=y[te];return he===void 0&&(he=new Oo,y[te]=he),he.getTargetRaySpace()},this.getControllerGrip=function(te){let he=y[te];return he===void 0&&(he=new Oo,y[te]=he),he.getGripSpace()},this.getHand=function(te){let he=y[te];return he===void 0&&(he=new Oo,y[te]=he),he.getHandSpace()};function N(te){const he=M.indexOf(te.inputSource);if(he===-1)return;const ce=y[he];ce!==void 0&&(ce.update(te.inputSource,te.frame,l||r),ce.dispatchEvent({type:te.type,data:te.inputSource}))}function $(){s.removeEventListener("select",N),s.removeEventListener("selectstart",N),s.removeEventListener("selectend",N),s.removeEventListener("squeeze",N),s.removeEventListener("squeezestart",N),s.removeEventListener("squeezeend",N),s.removeEventListener("end",$),s.removeEventListener("inputsourceschange",q);for(let te=0;te<y.length;te++){const he=M[te];he!==null&&(M[te]=null,y[te].disconnect(he))}A=null,I=null,_.reset(),e.setRenderTarget(d),m=null,f=null,u=null,s=null,C=null,be.stop(),n.isPresenting=!1,e.setPixelRatio(V),e.setSize(W.width,W.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(te){a=te,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(te){o=te,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||r},this.setReferenceSpace=function(te){l=te},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return u},this.getFrame=function(){return x},this.getSession=function(){return s},this.setSession=async function(te){if(s=te,s!==null){if(d=e.getRenderTarget(),s.addEventListener("select",N),s.addEventListener("selectstart",N),s.addEventListener("selectend",N),s.addEventListener("squeeze",N),s.addEventListener("squeezestart",N),s.addEventListener("squeezeend",N),s.addEventListener("end",$),s.addEventListener("inputsourceschange",q),p.xrCompatible!==!0&&await t.makeXRCompatible(),V=e.getPixelRatio(),e.getSize(W),s.renderState.layers===void 0){const he={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:a};m=new XRWebGLLayer(s,t,he),s.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),C=new Ln(m.framebufferWidth,m.framebufferHeight,{format:jt,type:Wt,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let he=null,ce=null,me=null;p.depth&&(me=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,he=p.stencil?As:zs,ce=p.stencil?ds:fs);const Y={colorFormat:t.RGBA8,depthFormat:me,scaleFactor:a};u=new XRWebGLBinding(s,t),f=u.createProjectionLayer(Y),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),C=new Ln(f.textureWidth,f.textureHeight,{format:jt,type:Wt,depthTexture:new pl(f.textureWidth,f.textureHeight,ce,void 0,void 0,void 0,void 0,void 0,void 0,he),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}C.isXRRenderTarget=!0,this.setFoveation(c),l=null,r=await s.requestReferenceSpace(o),be.setContext(s),be.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function q(te){for(let he=0;he<te.removed.length;he++){const ce=te.removed[he],me=M.indexOf(ce);me>=0&&(M[me]=null,y[me].disconnect(ce))}for(let he=0;he<te.added.length;he++){const ce=te.added[he];let me=M.indexOf(ce);if(me===-1){for(let se=0;se<y.length;se++)if(se>=M.length){M.push(ce),me=se;break}else if(M[se]===null){M[se]=ce,me=se;break}if(me===-1)break}const Y=y[me];Y&&Y.connect(ce)}}const ae=new Z,j=new Z;function K(te,he,ce){ae.setFromMatrixPosition(he.matrixWorld),j.setFromMatrixPosition(ce.matrixWorld);const me=ae.distanceTo(j),Y=he.projectionMatrix.elements,se=ce.projectionMatrix.elements,de=Y[14]/(Y[10]-1),g=Y[14]/(Y[10]+1),S=(Y[9]+1)/Y[5],F=(Y[9]-1)/Y[5],E=(Y[8]-1)/Y[0],U=(se[8]+1)/se[0],Q=de*E,z=de*U,P=me/(-E+U),J=P*-E;if(he.matrixWorld.decompose(te.position,te.quaternion,te.scale),te.translateX(J),te.translateZ(P),te.matrixWorld.compose(te.position,te.quaternion,te.scale),te.matrixWorldInverse.copy(te.matrixWorld).invert(),Y[10]===-1)te.projectionMatrix.copy(he.projectionMatrix),te.projectionMatrixInverse.copy(he.projectionMatrixInverse);else{const k=de+P,v=g+P,b=Q-J,T=z+(me-J),D=S*g/v*k,L=F*g/v*k;te.projectionMatrix.makePerspective(b,T,D,L,k,v),te.projectionMatrixInverse.copy(te.projectionMatrix).invert()}}function fe(te,he){he===null?te.matrixWorld.copy(te.matrix):te.matrixWorld.multiplyMatrices(he.matrixWorld,te.matrix),te.matrixWorldInverse.copy(te.matrixWorld).invert()}this.updateCamera=function(te){if(s===null)return;let he=te.near,ce=te.far;_.texture!==null&&(_.depthNear>0&&(he=_.depthNear),_.depthFar>0&&(ce=_.depthFar)),B.near=ee.near=G.near=he,B.far=ee.far=G.far=ce,(A!==B.near||I!==B.far)&&(s.updateRenderState({depthNear:B.near,depthFar:B.far}),A=B.near,I=B.far),G.layers.mask=te.layers.mask|2,ee.layers.mask=te.layers.mask|4,B.layers.mask=G.layers.mask|ee.layers.mask;const me=te.parent,Y=B.cameras;fe(B,me);for(let se=0;se<Y.length;se++)fe(Y[se],me);Y.length===2?K(B,G,ee):B.projectionMatrix.copy(G.projectionMatrix),ne(te,B,me)};function ne(te,he,ce){ce===null?te.matrix.copy(he.matrixWorld):(te.matrix.copy(ce.matrixWorld),te.matrix.invert(),te.matrix.multiply(he.matrixWorld)),te.matrix.decompose(te.position,te.quaternion,te.scale),te.updateMatrixWorld(!0),te.projectionMatrix.copy(he.projectionMatrix),te.projectionMatrixInverse.copy(he.projectionMatrixInverse),te.isPerspectiveCamera&&(te.fov=Ys*2*Math.atan(1/te.projectionMatrix.elements[5]),te.zoom=1)}this.getCamera=function(){return B},this.getFoveation=function(){if(!(f===null&&m===null))return c},this.setFoveation=function(te){c=te,f!==null&&(f.fixedFoveation=te),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=te)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(B)};let oe=null;function ge(te,he){if(h=he.getViewerPose(l||r),x=he,h!==null){const ce=h.views;m!==null&&(e.setRenderTargetFramebuffer(C,m.framebuffer),e.setRenderTarget(C));let me=!1;ce.length!==B.cameras.length&&(B.cameras.length=0,me=!0);for(let se=0;se<ce.length;se++){const de=ce[se];let g=null;if(m!==null)g=m.getViewport(de);else{const F=u.getViewSubImage(f,de);g=F.viewport,se===0&&(e.setRenderTargetTextures(C,F.colorTexture,f.ignoreDepthValues?void 0:F.depthStencilTexture),e.setRenderTarget(C))}let S=R[se];S===void 0&&(S=new bn,S.layers.enable(se),S.viewport=new ft,R[se]=S),S.matrix.fromArray(de.transform.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale),S.projectionMatrix.fromArray(de.projectionMatrix),S.projectionMatrixInverse.copy(S.projectionMatrix).invert(),S.viewport.set(g.x,g.y,g.width,g.height),se===0&&(B.matrix.copy(S.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale)),me===!0&&B.cameras.push(S)}const Y=s.enabledFeatures;if(Y&&Y.includes("depth-sensing")){const se=u.getDepthInformation(ce[0]);se&&se.isValid&&se.texture&&_.init(e,se,s.renderState)}}for(let ce=0;ce<y.length;ce++){const me=M[ce],Y=y[ce];me!==null&&Y!==void 0&&Y.update(me,he,l||r)}oe&&oe(te,he),he.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:he}),x=null}const be=new qu;be.setAnimationLoop(ge),this.setAnimationLoop=function(te){oe=te},this.dispose=function(){}}}const ns=new Vn,H0=new He;function V0(i,e){function t(p,d){p.matrixAutoUpdate===!0&&p.updateMatrix(),d.value.copy(p.matrix)}function n(p,d){d.color.getRGB(p.fogColor.value,Vu(i)),d.isFog?(p.fogNear.value=d.near,p.fogFar.value=d.far):d.isFogExp2&&(p.fogDensity.value=d.density)}function s(p,d,C,y,M){d.isMeshBasicMaterial||d.isMeshLambertMaterial?a(p,d):d.isMeshToonMaterial?(a(p,d),u(p,d)):d.isMeshPhongMaterial?(a(p,d),h(p,d)):d.isMeshStandardMaterial?(a(p,d),f(p,d),d.isMeshPhysicalMaterial&&m(p,d,M)):d.isMeshMatcapMaterial?(a(p,d),x(p,d)):d.isMeshDepthMaterial?a(p,d):d.isMeshDistanceMaterial?(a(p,d),_(p,d)):d.isMeshNormalMaterial?a(p,d):d.isLineBasicMaterial?(r(p,d),d.isLineDashedMaterial&&o(p,d)):d.isPointsMaterial?c(p,d,C,y):d.isSpriteMaterial?l(p,d):d.isShadowMaterial?(p.color.value.copy(d.color),p.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function a(p,d){p.opacity.value=d.opacity,d.color&&p.diffuse.value.copy(d.color),d.emissive&&p.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(p.map.value=d.map,t(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.bumpMap&&(p.bumpMap.value=d.bumpMap,t(d.bumpMap,p.bumpMapTransform),p.bumpScale.value=d.bumpScale,d.side===wn&&(p.bumpScale.value*=-1)),d.normalMap&&(p.normalMap.value=d.normalMap,t(d.normalMap,p.normalMapTransform),p.normalScale.value.copy(d.normalScale),d.side===wn&&p.normalScale.value.negate()),d.displacementMap&&(p.displacementMap.value=d.displacementMap,t(d.displacementMap,p.displacementMapTransform),p.displacementScale.value=d.displacementScale,p.displacementBias.value=d.displacementBias),d.emissiveMap&&(p.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,p.emissiveMapTransform)),d.specularMap&&(p.specularMap.value=d.specularMap,t(d.specularMap,p.specularMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);const C=e.get(d),y=C.envMap,M=C.envMapRotation;y&&(p.envMap.value=y,ns.copy(M),ns.x*=-1,ns.y*=-1,ns.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(ns.y*=-1,ns.z*=-1),p.envMapRotation.value.setFromMatrix4(H0.makeRotationFromEuler(ns)),p.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=d.reflectivity,p.ior.value=d.ior,p.refractionRatio.value=d.refractionRatio),d.lightMap&&(p.lightMap.value=d.lightMap,p.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,p.lightMapTransform)),d.aoMap&&(p.aoMap.value=d.aoMap,p.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,p.aoMapTransform))}function r(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,d.map&&(p.map.value=d.map,t(d.map,p.mapTransform))}function o(p,d){p.dashSize.value=d.dashSize,p.totalSize.value=d.dashSize+d.gapSize,p.scale.value=d.scale}function c(p,d,C,y){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.size.value=d.size*C,p.scale.value=y*.5,d.map&&(p.map.value=d.map,t(d.map,p.uvTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function l(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.rotation.value=d.rotation,d.map&&(p.map.value=d.map,t(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function h(p,d){p.specular.value.copy(d.specular),p.shininess.value=Math.max(d.shininess,1e-4)}function u(p,d){d.gradientMap&&(p.gradientMap.value=d.gradientMap)}function f(p,d){p.metalness.value=d.metalness,d.metalnessMap&&(p.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,p.metalnessMapTransform)),p.roughness.value=d.roughness,d.roughnessMap&&(p.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,p.roughnessMapTransform)),d.envMap&&(p.envMapIntensity.value=d.envMapIntensity)}function m(p,d,C){p.ior.value=d.ior,d.sheen>0&&(p.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),p.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(p.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,p.sheenColorMapTransform)),d.sheenRoughnessMap&&(p.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,p.sheenRoughnessMapTransform))),d.clearcoat>0&&(p.clearcoat.value=d.clearcoat,p.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(p.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,p.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(p.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===wn&&p.clearcoatNormalScale.value.negate())),d.dispersion>0&&(p.dispersion.value=d.dispersion),d.iridescence>0&&(p.iridescence.value=d.iridescence,p.iridescenceIOR.value=d.iridescenceIOR,p.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(p.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,p.iridescenceMapTransform)),d.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),d.transmission>0&&(p.transmission.value=d.transmission,p.transmissionSamplerMap.value=C.texture,p.transmissionSamplerSize.value.set(C.width,C.height),d.transmissionMap&&(p.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,p.transmissionMapTransform)),p.thickness.value=d.thickness,d.thicknessMap&&(p.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=d.attenuationDistance,p.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(p.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(p.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=d.specularIntensity,p.specularColor.value.copy(d.specularColor),d.specularColorMap&&(p.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,p.specularColorMapTransform)),d.specularIntensityMap&&(p.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,p.specularIntensityMapTransform))}function x(p,d){d.matcap&&(p.matcap.value=d.matcap)}function _(p,d){const C=e.get(d).light;p.referencePosition.value.setFromMatrixPosition(C.matrixWorld),p.nearDistance.value=C.shadow.camera.near,p.farDistance.value=C.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function W0(i,e,t,n){let s={},a={},r=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(C,y){const M=y.program;n.uniformBlockBinding(C,M)}function l(C,y){let M=s[C.id];M===void 0&&(x(C),M=h(C),s[C.id]=M,C.addEventListener("dispose",p));const W=y.program;n.updateUBOMapping(C,W);const V=e.render.frame;a[C.id]!==V&&(f(C),a[C.id]=V)}function h(C){const y=u();C.__bindingPointIndex=y;const M=i.createBuffer(),W=C.__size,V=C.usage;return i.bindBuffer(i.UNIFORM_BUFFER,M),i.bufferData(i.UNIFORM_BUFFER,W,V),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,M),M}function u(){for(let C=0;C<o;C++)if(r.indexOf(C)===-1)return r.push(C),C;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(C){const y=s[C.id],M=C.uniforms,W=C.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let V=0,G=M.length;V<G;V++){const ee=Array.isArray(M[V])?M[V]:[M[V]];for(let R=0,B=ee.length;R<B;R++){const A=ee[R];if(m(A,V,R,W)===!0){const I=A.__offset,N=Array.isArray(A.value)?A.value:[A.value];let $=0;for(let q=0;q<N.length;q++){const ae=N[q],j=_(ae);typeof ae=="number"||typeof ae=="boolean"?(A.__data[0]=ae,i.bufferSubData(i.UNIFORM_BUFFER,I+$,A.__data)):ae.isMatrix3?(A.__data[0]=ae.elements[0],A.__data[1]=ae.elements[1],A.__data[2]=ae.elements[2],A.__data[3]=0,A.__data[4]=ae.elements[3],A.__data[5]=ae.elements[4],A.__data[6]=ae.elements[5],A.__data[7]=0,A.__data[8]=ae.elements[6],A.__data[9]=ae.elements[7],A.__data[10]=ae.elements[8],A.__data[11]=0):(ae.toArray(A.__data,$),$+=j.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,I,A.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(C,y,M,W){const V=C.value,G=y+"_"+M;if(W[G]===void 0)return typeof V=="number"||typeof V=="boolean"?W[G]=V:W[G]=V.clone(),!0;{const ee=W[G];if(typeof V=="number"||typeof V=="boolean"){if(ee!==V)return W[G]=V,!0}else if(ee.equals(V)===!1)return ee.copy(V),!0}return!1}function x(C){const y=C.uniforms;let M=0;const W=16;for(let G=0,ee=y.length;G<ee;G++){const R=Array.isArray(y[G])?y[G]:[y[G]];for(let B=0,A=R.length;B<A;B++){const I=R[B],N=Array.isArray(I.value)?I.value:[I.value];for(let $=0,q=N.length;$<q;$++){const ae=N[$],j=_(ae),K=M%W,fe=K%j.boundary,ne=K+fe;M+=fe,ne!==0&&W-ne<j.storage&&(M+=W-ne),I.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=M,M+=j.storage}}}const V=M%W;return V>0&&(M+=W-V),C.__size=M,C.__cache={},this}function _(C){const y={boundary:0,storage:0};return typeof C=="number"||typeof C=="boolean"?(y.boundary=4,y.storage=4):C.isVector2?(y.boundary=8,y.storage=8):C.isVector3||C.isColor?(y.boundary=16,y.storage=12):C.isVector4?(y.boundary=16,y.storage=16):C.isMatrix3?(y.boundary=48,y.storage=48):C.isMatrix4?(y.boundary=64,y.storage=64):C.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",C),y}function p(C){const y=C.target;y.removeEventListener("dispose",p);const M=r.indexOf(y.__bindingPointIndex);r.splice(M,1),i.deleteBuffer(s[y.id]),delete s[y.id],delete a[y.id]}function d(){for(const C in s)i.deleteBuffer(s[C]);r=[],s={},a={}}return{bind:c,update:l,dispose:d}}class j0{constructor(e={}){const{canvas:t=Fd(),context:n=null,depth:s=!0,stencil:a=!1,alpha:r=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=r;const x=new Uint32Array(4),_=new Int32Array(4);let p=null,d=null;const C=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Pt,this.toneMapping=Xi,this.toneMappingExposure=1;const M=this;let W=!1,V=0,G=0,ee=null,R=-1,B=null;const A=new ft,I=new ft;let N=null;const $=new Ie(0);let q=0,ae=t.width,j=t.height,K=1,fe=null,ne=null;const oe=new ft(0,0,ae,j),ge=new ft(0,0,ae,j);let be=!1;const te=new dl;let he=!1,ce=!1;const me=new He,Y=new He,se=new Z,de=new ft,g={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let S=!1;function F(){return ee===null?K:1}let E=n;function U(O,xe){return t.getContext(O,xe)}try{const O={alpha:!0,depth:s,stencil:a,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${tl}`),t.addEventListener("webglcontextlost",Se,!1),t.addEventListener("webglcontextrestored",Pe,!1),t.addEventListener("webglcontextcreationerror",Le,!1),E===null){const xe="webgl2";if(E=U(xe,O),E===null)throw U(xe)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(O){throw console.error("THREE.WebGLRenderer: "+O.message),O}let Q,z,P,J,k,v,b,T,D,L,w,H,X,ue,ve,ie,Ae,pe,Me,le,Te,Be,De,re;function we(){Q=new Jm(E),Q.init(),Be=new F0(E,Q),z=new Wm(E,Q,e,Be),P=new L0(E,Q),z.reverseDepthBuffer&&f&&P.buffers.depth.setReversed(!0),J=new eg(E),k=new b0,v=new U0(E,Q,P,k,z,Be,J),b=new qm(M),T=new Km(M),D=new oA(E),De=new Hm(E,D),L=new Zm(E,D,J,De),w=new ng(E,L,D,J),Me=new tg(E,z,v),ie=new jm(k),H=new g0(M,b,T,Q,z,De,ie),X=new V0(M,k),ue=new _0,ve=new w0(Q),pe=new Gm(M,b,T,P,w,m,c),Ae=new R0(M,w,z),re=new W0(E,J,z,P),le=new Vm(E,Q,J),Te=new $m(E,Q,J),J.programs=H.programs,M.capabilities=z,M.extensions=Q,M.properties=k,M.renderLists=ue,M.shadowMap=Ae,M.state=P,M.info=J}we();const Ee=new G0(M,E);this.xr=Ee,this.getContext=function(){return E},this.getContextAttributes=function(){return E.getContextAttributes()},this.forceContextLoss=function(){const O=Q.get("WEBGL_lose_context");O&&O.loseContext()},this.forceContextRestore=function(){const O=Q.get("WEBGL_lose_context");O&&O.restoreContext()},this.getPixelRatio=function(){return K},this.setPixelRatio=function(O){O!==void 0&&(K=O,this.setSize(ae,j,!1))},this.getSize=function(O){return O.set(ae,j)},this.setSize=function(O,xe,ye=!0){if(Ee.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ae=O,j=xe,t.width=Math.floor(O*K),t.height=Math.floor(xe*K),ye===!0&&(t.style.width=O+"px",t.style.height=xe+"px"),this.setViewport(0,0,O,xe)},this.getDrawingBufferSize=function(O){return O.set(ae*K,j*K).floor()},this.setDrawingBufferSize=function(O,xe,ye){ae=O,j=xe,K=ye,t.width=Math.floor(O*ye),t.height=Math.floor(xe*ye),this.setViewport(0,0,O,xe)},this.getCurrentViewport=function(O){return O.copy(A)},this.getViewport=function(O){return O.copy(oe)},this.setViewport=function(O,xe,ye,Ce){O.isVector4?oe.set(O.x,O.y,O.z,O.w):oe.set(O,xe,ye,Ce),P.viewport(A.copy(oe).multiplyScalar(K).round())},this.getScissor=function(O){return O.copy(ge)},this.setScissor=function(O,xe,ye,Ce){O.isVector4?ge.set(O.x,O.y,O.z,O.w):ge.set(O,xe,ye,Ce),P.scissor(I.copy(ge).multiplyScalar(K).round())},this.getScissorTest=function(){return be},this.setScissorTest=function(O){P.setScissorTest(be=O)},this.setOpaqueSort=function(O){fe=O},this.setTransparentSort=function(O){ne=O},this.getClearColor=function(O){return O.copy(pe.getClearColor())},this.setClearColor=function(){pe.setClearColor.apply(pe,arguments)},this.getClearAlpha=function(){return pe.getClearAlpha()},this.setClearAlpha=function(){pe.setClearAlpha.apply(pe,arguments)},this.clear=function(O=!0,xe=!0,ye=!0){let Ce=0;if(O){let _e=!1;if(ee!==null){const Fe=ee.texture.format;_e=Fe===ul||Fe===hl||Fe===ll}if(_e){const Fe=ee.texture.type,ze=Fe===Wt||Fe===fs||Fe===Da||Fe===ds||Fe===ol||Fe===cl,Ve=pe.getClearColor(),We=pe.getClearAlpha(),Xe=Ve.r,Ze=Ve.g,je=Ve.b;ze?(x[0]=Xe,x[1]=Ze,x[2]=je,x[3]=We,E.clearBufferuiv(E.COLOR,0,x)):(_[0]=Xe,_[1]=Ze,_[2]=je,_[3]=We,E.clearBufferiv(E.COLOR,0,_))}else Ce|=E.COLOR_BUFFER_BIT}xe&&(Ce|=E.DEPTH_BUFFER_BIT),ye&&(Ce|=E.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),E.clear(Ce)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Se,!1),t.removeEventListener("webglcontextrestored",Pe,!1),t.removeEventListener("webglcontextcreationerror",Le,!1),ue.dispose(),ve.dispose(),k.dispose(),b.dispose(),T.dispose(),w.dispose(),De.dispose(),re.dispose(),H.dispose(),Ee.dispose(),Ee.removeEventListener("sessionstart",_t),Ee.removeEventListener("sessionend",nt),lt.stop()};function Se(O){O.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),W=!0}function Pe(){console.log("THREE.WebGLRenderer: Context Restored."),W=!1;const O=J.autoReset,xe=Ae.enabled,ye=Ae.autoUpdate,Ce=Ae.needsUpdate,_e=Ae.type;we(),J.autoReset=O,Ae.enabled=xe,Ae.autoUpdate=ye,Ae.needsUpdate=Ce,Ae.type=_e}function Le(O){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",O.statusMessage)}function Ne(O){const xe=O.target;xe.removeEventListener("dispose",Ne),ct(xe)}function ct(O){Mt(O),k.remove(O)}function Mt(O){const xe=k.get(O).programs;xe!==void 0&&(xe.forEach(function(ye){H.releaseProgram(ye)}),O.isShaderMaterial&&H.releaseShaderCache(O))}this.renderBufferDirect=function(O,xe,ye,Ce,_e,Fe){xe===null&&(xe=g);const ze=_e.isMesh&&_e.matrixWorld.determinant()<0,Ve=Wa(O,xe,ye,Ce,_e);P.setMaterial(Ce,ze);let We=ye.index,Xe=1;if(Ce.wireframe===!0){if(We=L.getWireframeAttribute(ye),We===void 0)return;Xe=2}const Ze=ye.drawRange,je=ye.attributes.position;let ht=Ze.start*Xe,Et=(Ze.start+Ze.count)*Xe;Fe!==null&&(ht=Math.max(ht,Fe.start*Xe),Et=Math.min(Et,(Fe.start+Fe.count)*Xe)),We!==null?(ht=Math.max(ht,0),Et=Math.min(Et,We.count)):je!=null&&(ht=Math.max(ht,0),Et=Math.min(Et,je.count));const yt=Et-ht;if(yt<0||yt===1/0)return;De.setup(_e,Ce,Ve,ye,We);let vn,dt=le;if(We!==null&&(vn=D.get(We),dt=Te,dt.setIndex(vn)),_e.isMesh)Ce.wireframe===!0?(P.setLineWidth(Ce.wireframeLinewidth*F()),dt.setMode(E.LINES)):dt.setMode(E.TRIANGLES);else if(_e.isLine){let Ye=Ce.linewidth;Ye===void 0&&(Ye=1),P.setLineWidth(Ye*F()),_e.isLineSegments?dt.setMode(E.LINES):_e.isLineLoop?dt.setMode(E.LINE_LOOP):dt.setMode(E.LINE_STRIP)}else _e.isPoints?dt.setMode(E.POINTS):_e.isSprite&&dt.setMode(E.TRIANGLES);if(_e.isBatchedMesh)if(_e._multiDrawInstances!==null)dt.renderMultiDrawInstances(_e._multiDrawStarts,_e._multiDrawCounts,_e._multiDrawCount,_e._multiDrawInstances);else if(Q.get("WEBGL_multi_draw"))dt.renderMultiDraw(_e._multiDrawStarts,_e._multiDrawCounts,_e._multiDrawCount);else{const Ye=_e._multiDrawStarts,pi=_e._multiDrawCounts,At=_e._multiDrawCount,Wn=We?D.get(We).bytesPerElement:1,Es=k.get(Ce).currentProgram.getUniforms();for(let Sn=0;Sn<At;Sn++)Es.setValue(E,"_gl_DrawID",Sn),dt.render(Ye[Sn]/Wn,pi[Sn])}else if(_e.isInstancedMesh)dt.renderInstances(ht,yt,_e.count);else if(ye.isInstancedBufferGeometry){const Ye=ye._maxInstanceCount!==void 0?ye._maxInstanceCount:1/0,pi=Math.min(ye.instanceCount,Ye);dt.renderInstances(ht,yt,pi)}else dt.render(ht,yt)};function it(O,xe,ye){O.transparent===!0&&O.side===It&&O.forceSinglePass===!1?(O.side=wn,O.needsUpdate=!0,dn(O,xe,ye),O.side=ni,O.needsUpdate=!0,dn(O,xe,ye),O.side=It):dn(O,xe,ye)}this.compile=function(O,xe,ye=null){ye===null&&(ye=O),d=ve.get(ye),d.init(xe),y.push(d),ye.traverseVisible(function(_e){_e.isLight&&_e.layers.test(xe.layers)&&(d.pushLight(_e),_e.castShadow&&d.pushShadow(_e))}),O!==ye&&O.traverseVisible(function(_e){_e.isLight&&_e.layers.test(xe.layers)&&(d.pushLight(_e),_e.castShadow&&d.pushShadow(_e))}),d.setupLights();const Ce=new Set;return O.traverse(function(_e){if(!(_e.isMesh||_e.isPoints||_e.isLine||_e.isSprite))return;const Fe=_e.material;if(Fe)if(Array.isArray(Fe))for(let ze=0;ze<Fe.length;ze++){const Ve=Fe[ze];it(Ve,ye,_e),Ce.add(Ve)}else it(Fe,ye,_e),Ce.add(Fe)}),y.pop(),d=null,Ce},this.compileAsync=function(O,xe,ye=null){const Ce=this.compile(O,xe,ye);return new Promise(_e=>{function Fe(){if(Ce.forEach(function(ze){k.get(ze).currentProgram.isReady()&&Ce.delete(ze)}),Ce.size===0){_e(O);return}setTimeout(Fe,10)}Q.get("KHR_parallel_shader_compile")!==null?Fe():setTimeout(Fe,10)})};let Xt=null;function Je(O){Xt&&Xt(O)}function _t(){lt.stop()}function nt(){lt.start()}const lt=new qu;lt.setAnimationLoop(Je),typeof self<"u"&&lt.setContext(self),this.setAnimationLoop=function(O){Xt=O,Ee.setAnimationLoop(O),O===null?lt.stop():lt.start()},Ee.addEventListener("sessionstart",_t),Ee.addEventListener("sessionend",nt),this.render=function(O,xe){if(xe!==void 0&&xe.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(W===!0)return;if(O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),xe.parent===null&&xe.matrixWorldAutoUpdate===!0&&xe.updateMatrixWorld(),Ee.enabled===!0&&Ee.isPresenting===!0&&(Ee.cameraAutoUpdate===!0&&Ee.updateCamera(xe),xe=Ee.getCamera()),O.isScene===!0&&O.onBeforeRender(M,O,xe,ee),d=ve.get(O,y.length),d.init(xe),y.push(d),Y.multiplyMatrices(xe.projectionMatrix,xe.matrixWorldInverse),te.setFromProjectionMatrix(Y),ce=this.localClippingEnabled,he=ie.init(this.clippingPlanes,ce),p=ue.get(O,C.length),p.init(),C.push(p),Ee.enabled===!0&&Ee.isPresenting===!0){const Fe=M.xr.getDepthSensingMesh();Fe!==null&&Lt(Fe,xe,-1/0,M.sortObjects)}Lt(O,xe,0,M.sortObjects),p.finish(),M.sortObjects===!0&&p.sort(fe,ne),S=Ee.enabled===!1||Ee.isPresenting===!1||Ee.hasDepthSensing()===!1,S&&pe.addToRenderList(p,O),this.info.render.frame++,he===!0&&ie.beginShadows();const ye=d.state.shadowsArray;Ae.render(ye,O,xe),he===!0&&ie.endShadows(),this.info.autoReset===!0&&this.info.reset();const Ce=p.opaque,_e=p.transmissive;if(d.setupLights(),xe.isArrayCamera){const Fe=xe.cameras;if(_e.length>0)for(let ze=0,Ve=Fe.length;ze<Ve;ze++){const We=Fe[ze];Ki(Ce,_e,O,We)}S&&pe.render(O);for(let ze=0,Ve=Fe.length;ze<Ve;ze++){const We=Fe[ze];Ai(p,O,We,We.viewport)}}else _e.length>0&&Ki(Ce,_e,O,xe),S&&pe.render(O),Ai(p,O,xe);ee!==null&&(v.updateMultisampleRenderTarget(ee),v.updateRenderTargetMipmap(ee)),O.isScene===!0&&O.onAfterRender(M,O,xe),De.resetDefaultState(),R=-1,B=null,y.pop(),y.length>0?(d=y[y.length-1],he===!0&&ie.setGlobalState(M.clippingPlanes,d.state.camera)):d=null,C.pop(),C.length>0?p=C[C.length-1]:p=null};function Lt(O,xe,ye,Ce){if(O.visible===!1)return;if(O.layers.test(xe.layers)){if(O.isGroup)ye=O.renderOrder;else if(O.isLOD)O.autoUpdate===!0&&O.update(xe);else if(O.isLight)d.pushLight(O),O.castShadow&&d.pushShadow(O);else if(O.isSprite){if(!O.frustumCulled||te.intersectsSprite(O)){Ce&&de.setFromMatrixPosition(O.matrixWorld).applyMatrix4(Y);const ze=w.update(O),Ve=O.material;Ve.visible&&p.push(O,ze,Ve,ye,de.z,null)}}else if((O.isMesh||O.isLine||O.isPoints)&&(!O.frustumCulled||te.intersectsObject(O))){const ze=w.update(O),Ve=O.material;if(Ce&&(O.boundingSphere!==void 0?(O.boundingSphere===null&&O.computeBoundingSphere(),de.copy(O.boundingSphere.center)):(ze.boundingSphere===null&&ze.computeBoundingSphere(),de.copy(ze.boundingSphere.center)),de.applyMatrix4(O.matrixWorld).applyMatrix4(Y)),Array.isArray(Ve)){const We=ze.groups;for(let Xe=0,Ze=We.length;Xe<Ze;Xe++){const je=We[Xe],ht=Ve[je.materialIndex];ht&&ht.visible&&p.push(O,ze,ht,ye,de.z,je)}}else Ve.visible&&p.push(O,ze,Ve,ye,de.z,null)}}const Fe=O.children;for(let ze=0,Ve=Fe.length;ze<Ve;ze++)Lt(Fe[ze],xe,ye,Ce)}function Ai(O,xe,ye,Ce){const _e=O.opaque,Fe=O.transmissive,ze=O.transparent;d.setupLightsView(ye),he===!0&&ie.setGlobalState(M.clippingPlanes,ye),Ce&&P.viewport(A.copy(Ce)),_e.length>0&&$t(_e,xe,ye),Fe.length>0&&$t(Fe,xe,ye),ze.length>0&&$t(ze,xe,ye),P.buffers.depth.setTest(!0),P.buffers.depth.setMask(!0),P.buffers.color.setMask(!0),P.setPolygonOffset(!1)}function Ki(O,xe,ye,Ce){if((ye.isScene===!0?ye.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[Ce.id]===void 0&&(d.state.transmissionRenderTarget[Ce.id]=new Ln(1,1,{generateMipmaps:!0,type:Q.has("EXT_color_buffer_half_float")||Q.has("EXT_color_buffer_float")?an:Wt,minFilter:hi,samples:4,stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ot.workingColorSpace}));const Fe=d.state.transmissionRenderTarget[Ce.id],ze=Ce.viewport||A;Fe.setSize(ze.z,ze.w);const Ve=M.getRenderTarget();M.setRenderTarget(Fe),M.getClearColor($),q=M.getClearAlpha(),q<1&&M.setClearColor(16777215,.5),M.clear(),S&&pe.render(ye);const We=M.toneMapping;M.toneMapping=Xi;const Xe=Ce.viewport;if(Ce.viewport!==void 0&&(Ce.viewport=void 0),d.setupLightsView(Ce),he===!0&&ie.setGlobalState(M.clippingPlanes,Ce),$t(O,ye,Ce),v.updateMultisampleRenderTarget(Fe),v.updateRenderTargetMipmap(Fe),Q.has("WEBGL_multisampled_render_to_texture")===!1){let Ze=!1;for(let je=0,ht=xe.length;je<ht;je++){const Et=xe[je],yt=Et.object,vn=Et.geometry,dt=Et.material,Ye=Et.group;if(dt.side===It&&yt.layers.test(Ce.layers)){const pi=dt.side;dt.side=wn,dt.needsUpdate=!0,cn(yt,ye,Ce,vn,dt,Ye),dt.side=pi,dt.needsUpdate=!0,Ze=!0}}Ze===!0&&(v.updateMultisampleRenderTarget(Fe),v.updateRenderTargetMipmap(Fe))}M.setRenderTarget(Ve),M.setClearColor($,q),Xe!==void 0&&(Ce.viewport=Xe),M.toneMapping=We}function $t(O,xe,ye){const Ce=xe.isScene===!0?xe.overrideMaterial:null;for(let _e=0,Fe=O.length;_e<Fe;_e++){const ze=O[_e],Ve=ze.object,We=ze.geometry,Xe=Ce===null?ze.material:Ce,Ze=ze.group;Ve.layers.test(ye.layers)&&cn(Ve,xe,ye,We,Xe,Ze)}}function cn(O,xe,ye,Ce,_e,Fe){O.onBeforeRender(M,xe,ye,Ce,_e,Fe),O.modelViewMatrix.multiplyMatrices(ye.matrixWorldInverse,O.matrixWorld),O.normalMatrix.getNormalMatrix(O.modelViewMatrix),_e.onBeforeRender(M,xe,ye,Ce,O,Fe),_e.transparent===!0&&_e.side===It&&_e.forceSinglePass===!1?(_e.side=wn,_e.needsUpdate=!0,M.renderBufferDirect(ye,xe,Ce,_e,O,Fe),_e.side=ni,_e.needsUpdate=!0,M.renderBufferDirect(ye,xe,Ce,_e,O,Fe),_e.side=It):M.renderBufferDirect(ye,xe,Ce,_e,O,Fe),O.onAfterRender(M,xe,ye,Ce,_e,Fe)}function dn(O,xe,ye){xe.isScene!==!0&&(xe=g);const Ce=k.get(O),_e=d.state.lights,Fe=d.state.shadowsArray,ze=_e.state.version,Ve=H.getParameters(O,_e.state,Fe,xe,ye),We=H.getProgramCacheKey(Ve);let Xe=Ce.programs;Ce.environment=O.isMeshStandardMaterial?xe.environment:null,Ce.fog=xe.fog,Ce.envMap=(O.isMeshStandardMaterial?T:b).get(O.envMap||Ce.environment),Ce.envMapRotation=Ce.environment!==null&&O.envMap===null?xe.environmentRotation:O.envMapRotation,Xe===void 0&&(O.addEventListener("dispose",Ne),Xe=new Map,Ce.programs=Xe);let Ze=Xe.get(We);if(Ze!==void 0){if(Ce.currentProgram===Ze&&Ce.lightsStateVersion===ze)return aa(O,Ve),Ze}else Ve.uniforms=H.getUniforms(O),O.onBeforeCompile(Ve,M),Ze=H.acquireProgram(Ve,We),Xe.set(We,Ze),Ce.uniforms=Ve.uniforms;const je=Ce.uniforms;return(!O.isShaderMaterial&&!O.isRawShaderMaterial||O.clipping===!0)&&(je.clippingPlanes=ie.uniform),aa(O,Ve),Ce.needsLights=uo(O),Ce.lightsStateVersion=ze,Ce.needsLights&&(je.ambientLightColor.value=_e.state.ambient,je.lightProbe.value=_e.state.probe,je.directionalLights.value=_e.state.directional,je.directionalLightShadows.value=_e.state.directionalShadow,je.spotLights.value=_e.state.spot,je.spotLightShadows.value=_e.state.spotShadow,je.rectAreaLights.value=_e.state.rectArea,je.ltc_1.value=_e.state.rectAreaLTC1,je.ltc_2.value=_e.state.rectAreaLTC2,je.pointLights.value=_e.state.point,je.pointLightShadows.value=_e.state.pointShadow,je.hemisphereLights.value=_e.state.hemi,je.directionalShadowMap.value=_e.state.directionalShadowMap,je.directionalShadowMatrix.value=_e.state.directionalShadowMatrix,je.spotShadowMap.value=_e.state.spotShadowMap,je.spotLightMatrix.value=_e.state.spotLightMatrix,je.spotLightMap.value=_e.state.spotLightMap,je.pointShadowMap.value=_e.state.pointShadowMap,je.pointShadowMatrix.value=_e.state.pointShadowMatrix),Ce.currentProgram=Ze,Ce.uniformsList=null,Ze}function sa(O){if(O.uniformsList===null){const xe=O.currentProgram.getUniforms();O.uniformsList=Dr.seqWithValue(xe.seq,O.uniforms)}return O.uniformsList}function aa(O,xe){const ye=k.get(O);ye.outputColorSpace=xe.outputColorSpace,ye.batching=xe.batching,ye.batchingColor=xe.batchingColor,ye.instancing=xe.instancing,ye.instancingColor=xe.instancingColor,ye.instancingMorph=xe.instancingMorph,ye.skinning=xe.skinning,ye.morphTargets=xe.morphTargets,ye.morphNormals=xe.morphNormals,ye.morphColors=xe.morphColors,ye.morphTargetsCount=xe.morphTargetsCount,ye.numClippingPlanes=xe.numClippingPlanes,ye.numIntersection=xe.numClipIntersection,ye.vertexAlphas=xe.vertexAlphas,ye.vertexTangents=xe.vertexTangents,ye.toneMapping=xe.toneMapping}function Wa(O,xe,ye,Ce,_e){xe.isScene!==!0&&(xe=g),v.resetTextureUnits();const Fe=xe.fog,ze=Ce.isMeshStandardMaterial?xe.environment:null,Ve=ee===null?M.outputColorSpace:ee.isXRRenderTarget===!0?ee.texture.colorSpace:fn,We=(Ce.isMeshStandardMaterial?T:b).get(Ce.envMap||ze),Xe=Ce.vertexColors===!0&&!!ye.attributes.color&&ye.attributes.color.itemSize===4,Ze=!!ye.attributes.tangent&&(!!Ce.normalMap||Ce.anisotropy>0),je=!!ye.morphAttributes.position,ht=!!ye.morphAttributes.normal,Et=!!ye.morphAttributes.color;let yt=Xi;Ce.toneMapped&&(ee===null||ee.isXRRenderTarget===!0)&&(yt=M.toneMapping);const vn=ye.morphAttributes.position||ye.morphAttributes.normal||ye.morphAttributes.color,dt=vn!==void 0?vn.length:0,Ye=k.get(Ce),pi=d.state.lights;if(he===!0&&(ce===!0||O!==B)){const Fn=O===B&&Ce.id===R;ie.setState(Ce,O,Fn)}let At=!1;Ce.version===Ye.__version?(Ye.needsLights&&Ye.lightsStateVersion!==pi.state.version||Ye.outputColorSpace!==Ve||_e.isBatchedMesh&&Ye.batching===!1||!_e.isBatchedMesh&&Ye.batching===!0||_e.isBatchedMesh&&Ye.batchingColor===!0&&_e.colorTexture===null||_e.isBatchedMesh&&Ye.batchingColor===!1&&_e.colorTexture!==null||_e.isInstancedMesh&&Ye.instancing===!1||!_e.isInstancedMesh&&Ye.instancing===!0||_e.isSkinnedMesh&&Ye.skinning===!1||!_e.isSkinnedMesh&&Ye.skinning===!0||_e.isInstancedMesh&&Ye.instancingColor===!0&&_e.instanceColor===null||_e.isInstancedMesh&&Ye.instancingColor===!1&&_e.instanceColor!==null||_e.isInstancedMesh&&Ye.instancingMorph===!0&&_e.morphTexture===null||_e.isInstancedMesh&&Ye.instancingMorph===!1&&_e.morphTexture!==null||Ye.envMap!==We||Ce.fog===!0&&Ye.fog!==Fe||Ye.numClippingPlanes!==void 0&&(Ye.numClippingPlanes!==ie.numPlanes||Ye.numIntersection!==ie.numIntersection)||Ye.vertexAlphas!==Xe||Ye.vertexTangents!==Ze||Ye.morphTargets!==je||Ye.morphNormals!==ht||Ye.morphColors!==Et||Ye.toneMapping!==yt||Ye.morphTargetsCount!==dt)&&(At=!0):(At=!0,Ye.__version=Ce.version);let Wn=Ye.currentProgram;At===!0&&(Wn=dn(Ce,xe,_e));let Es=!1,Sn=!1,ra=!1;const Ct=Wn.getUniforms(),si=Ye.uniforms;if(P.useProgram(Wn.program)&&(Es=!0,Sn=!0,ra=!0),Ce.id!==R&&(R=Ce.id,Sn=!0),Es||B!==O){P.buffers.depth.getReversed()?(me.copy(O.projectionMatrix),Qd(me),kd(me),Ct.setValue(E,"projectionMatrix",me)):Ct.setValue(E,"projectionMatrix",O.projectionMatrix),Ct.setValue(E,"viewMatrix",O.matrixWorldInverse);const Ri=Ct.map.cameraPosition;Ri!==void 0&&Ri.setValue(E,se.setFromMatrixPosition(O.matrixWorld)),z.logarithmicDepthBuffer&&Ct.setValue(E,"logDepthBufFC",2/(Math.log(O.far+1)/Math.LN2)),(Ce.isMeshPhongMaterial||Ce.isMeshToonMaterial||Ce.isMeshLambertMaterial||Ce.isMeshBasicMaterial||Ce.isMeshStandardMaterial||Ce.isShaderMaterial)&&Ct.setValue(E,"isOrthographic",O.isOrthographicCamera===!0),B!==O&&(B=O,Sn=!0,ra=!0)}if(_e.isSkinnedMesh){Ct.setOptional(E,_e,"bindMatrix"),Ct.setOptional(E,_e,"bindMatrixInverse");const Fn=_e.skeleton;Fn&&(Fn.boneTexture===null&&Fn.computeBoneTexture(),Ct.setValue(E,"boneTexture",Fn.boneTexture,v))}_e.isBatchedMesh&&(Ct.setOptional(E,_e,"batchingTexture"),Ct.setValue(E,"batchingTexture",_e._matricesTexture,v),Ct.setOptional(E,_e,"batchingIdTexture"),Ct.setValue(E,"batchingIdTexture",_e._indirectTexture,v),Ct.setOptional(E,_e,"batchingColorTexture"),_e._colorsTexture!==null&&Ct.setValue(E,"batchingColorTexture",_e._colorsTexture,v));const oa=ye.morphAttributes;if((oa.position!==void 0||oa.normal!==void 0||oa.color!==void 0)&&Me.update(_e,ye,Wn),(Sn||Ye.receiveShadow!==_e.receiveShadow)&&(Ye.receiveShadow=_e.receiveShadow,Ct.setValue(E,"receiveShadow",_e.receiveShadow)),Ce.isMeshGouraudMaterial&&Ce.envMap!==null&&(si.envMap.value=We,si.flipEnvMap.value=We.isCubeTexture&&We.isRenderTargetTexture===!1?-1:1),Ce.isMeshStandardMaterial&&Ce.envMap===null&&xe.environment!==null&&(si.envMapIntensity.value=xe.environmentIntensity),Sn&&(Ct.setValue(E,"toneMappingExposure",M.toneMappingExposure),Ye.needsLights&&ho(si,ra),Fe&&Ce.fog===!0&&X.refreshFogUniforms(si,Fe),X.refreshMaterialUniforms(si,Ce,K,j,d.state.transmissionRenderTarget[O.id]),Dr.upload(E,sa(Ye),si,v)),Ce.isShaderMaterial&&Ce.uniformsNeedUpdate===!0&&(Dr.upload(E,sa(Ye),si,v),Ce.uniformsNeedUpdate=!1),Ce.isSpriteMaterial&&Ct.setValue(E,"center",_e.center),Ct.setValue(E,"modelViewMatrix",_e.modelViewMatrix),Ct.setValue(E,"normalMatrix",_e.normalMatrix),Ct.setValue(E,"modelMatrix",_e.matrixWorld),Ce.isShaderMaterial||Ce.isRawShaderMaterial){const Fn=Ce.uniformsGroups;for(let Ri=0,Di=Fn.length;Ri<Di;Ri++){const Cl=Fn[Ri];re.update(Cl,Wn),re.bind(Cl,Wn)}}return Wn}function ho(O,xe){O.ambientLightColor.needsUpdate=xe,O.lightProbe.needsUpdate=xe,O.directionalLights.needsUpdate=xe,O.directionalLightShadows.needsUpdate=xe,O.pointLights.needsUpdate=xe,O.pointLightShadows.needsUpdate=xe,O.spotLights.needsUpdate=xe,O.spotLightShadows.needsUpdate=xe,O.rectAreaLights.needsUpdate=xe,O.hemisphereLights.needsUpdate=xe}function uo(O){return O.isMeshLambertMaterial||O.isMeshToonMaterial||O.isMeshPhongMaterial||O.isMeshStandardMaterial||O.isShadowMaterial||O.isShaderMaterial&&O.lights===!0}this.getActiveCubeFace=function(){return V},this.getActiveMipmapLevel=function(){return G},this.getRenderTarget=function(){return ee},this.setRenderTargetTextures=function(O,xe,ye){k.get(O.texture).__webglTexture=xe,k.get(O.depthTexture).__webglTexture=ye;const Ce=k.get(O);Ce.__hasExternalTextures=!0,Ce.__autoAllocateDepthBuffer=ye===void 0,Ce.__autoAllocateDepthBuffer||Q.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Ce.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(O,xe){const ye=k.get(O);ye.__webglFramebuffer=xe,ye.__useDefaultFramebuffer=xe===void 0},this.setRenderTarget=function(O,xe=0,ye=0){ee=O,V=xe,G=ye;let Ce=!0,_e=null,Fe=!1,ze=!1;if(O){const We=k.get(O);if(We.__useDefaultFramebuffer!==void 0)P.bindFramebuffer(E.FRAMEBUFFER,null),Ce=!1;else if(We.__webglFramebuffer===void 0)v.setupRenderTarget(O);else if(We.__hasExternalTextures)v.rebindTextures(O,k.get(O.texture).__webglTexture,k.get(O.depthTexture).__webglTexture);else if(O.depthBuffer){const je=O.depthTexture;if(We.__boundDepthTexture!==je){if(je!==null&&k.has(je)&&(O.width!==je.image.width||O.height!==je.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");v.setupDepthRenderbuffer(O)}}const Xe=O.texture;(Xe.isData3DTexture||Xe.isDataArrayTexture||Xe.isCompressedArrayTexture)&&(ze=!0);const Ze=k.get(O).__webglFramebuffer;O.isWebGLCubeRenderTarget?(Array.isArray(Ze[xe])?_e=Ze[xe][ye]:_e=Ze[xe],Fe=!0):O.samples>0&&v.useMultisampledRTT(O)===!1?_e=k.get(O).__webglMultisampledFramebuffer:Array.isArray(Ze)?_e=Ze[ye]:_e=Ze,A.copy(O.viewport),I.copy(O.scissor),N=O.scissorTest}else A.copy(oe).multiplyScalar(K).floor(),I.copy(ge).multiplyScalar(K).floor(),N=be;if(P.bindFramebuffer(E.FRAMEBUFFER,_e)&&Ce&&P.drawBuffers(O,_e),P.viewport(A),P.scissor(I),P.setScissorTest(N),Fe){const We=k.get(O.texture);E.framebufferTexture2D(E.FRAMEBUFFER,E.COLOR_ATTACHMENT0,E.TEXTURE_CUBE_MAP_POSITIVE_X+xe,We.__webglTexture,ye)}else if(ze){const We=k.get(O.texture),Xe=xe||0;E.framebufferTextureLayer(E.FRAMEBUFFER,E.COLOR_ATTACHMENT0,We.__webglTexture,ye||0,Xe)}R=-1},this.readRenderTargetPixels=function(O,xe,ye,Ce,_e,Fe,ze){if(!(O&&O.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ve=k.get(O).__webglFramebuffer;if(O.isWebGLCubeRenderTarget&&ze!==void 0&&(Ve=Ve[ze]),Ve){P.bindFramebuffer(E.FRAMEBUFFER,Ve);try{const We=O.texture,Xe=We.format,Ze=We.type;if(!z.textureFormatReadable(Xe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!z.textureTypeReadable(Ze)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}xe>=0&&xe<=O.width-Ce&&ye>=0&&ye<=O.height-_e&&E.readPixels(xe,ye,Ce,_e,Be.convert(Xe),Be.convert(Ze),Fe)}finally{const We=ee!==null?k.get(ee).__webglFramebuffer:null;P.bindFramebuffer(E.FRAMEBUFFER,We)}}},this.readRenderTargetPixelsAsync=async function(O,xe,ye,Ce,_e,Fe,ze){if(!(O&&O.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ve=k.get(O).__webglFramebuffer;if(O.isWebGLCubeRenderTarget&&ze!==void 0&&(Ve=Ve[ze]),Ve){const We=O.texture,Xe=We.format,Ze=We.type;if(!z.textureFormatReadable(Xe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!z.textureTypeReadable(Ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(xe>=0&&xe<=O.width-Ce&&ye>=0&&ye<=O.height-_e){P.bindFramebuffer(E.FRAMEBUFFER,Ve);const je=E.createBuffer();E.bindBuffer(E.PIXEL_PACK_BUFFER,je),E.bufferData(E.PIXEL_PACK_BUFFER,Fe.byteLength,E.STREAM_READ),E.readPixels(xe,ye,Ce,_e,Be.convert(Xe),Be.convert(Ze),0);const ht=ee!==null?k.get(ee).__webglFramebuffer:null;P.bindFramebuffer(E.FRAMEBUFFER,ht);const Et=E.fenceSync(E.SYNC_GPU_COMMANDS_COMPLETE,0);return E.flush(),await Nd(E,Et,4),E.bindBuffer(E.PIXEL_PACK_BUFFER,je),E.getBufferSubData(E.PIXEL_PACK_BUFFER,0,Fe),E.deleteBuffer(je),E.deleteSync(Et),Fe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(O,xe=null,ye=0){O.isTexture!==!0&&(Ea("WebGLRenderer: copyFramebufferToTexture function signature has changed."),xe=arguments[0]||null,O=arguments[1]);const Ce=Math.pow(2,-ye),_e=Math.floor(O.image.width*Ce),Fe=Math.floor(O.image.height*Ce),ze=xe!==null?xe.x:0,Ve=xe!==null?xe.y:0;v.setTexture2D(O,0),E.copyTexSubImage2D(E.TEXTURE_2D,ye,0,0,ze,Ve,_e,Fe),P.unbindTexture()},this.copyTextureToTexture=function(O,xe,ye=null,Ce=null,_e=0){O.isTexture!==!0&&(Ea("WebGLRenderer: copyTextureToTexture function signature has changed."),Ce=arguments[0]||null,O=arguments[1],xe=arguments[2],_e=arguments[3]||0,ye=null);let Fe,ze,Ve,We,Xe,Ze,je,ht,Et;const yt=O.isCompressedTexture?O.mipmaps[_e]:O.image;ye!==null?(Fe=ye.max.x-ye.min.x,ze=ye.max.y-ye.min.y,Ve=ye.isBox3?ye.max.z-ye.min.z:1,We=ye.min.x,Xe=ye.min.y,Ze=ye.isBox3?ye.min.z:0):(Fe=yt.width,ze=yt.height,Ve=yt.depth||1,We=0,Xe=0,Ze=0),Ce!==null?(je=Ce.x,ht=Ce.y,Et=Ce.z):(je=0,ht=0,Et=0);const vn=Be.convert(xe.format),dt=Be.convert(xe.type);let Ye;xe.isData3DTexture?(v.setTexture3D(xe,0),Ye=E.TEXTURE_3D):xe.isDataArrayTexture||xe.isCompressedArrayTexture?(v.setTexture2DArray(xe,0),Ye=E.TEXTURE_2D_ARRAY):(v.setTexture2D(xe,0),Ye=E.TEXTURE_2D),E.pixelStorei(E.UNPACK_FLIP_Y_WEBGL,xe.flipY),E.pixelStorei(E.UNPACK_PREMULTIPLY_ALPHA_WEBGL,xe.premultiplyAlpha),E.pixelStorei(E.UNPACK_ALIGNMENT,xe.unpackAlignment);const pi=E.getParameter(E.UNPACK_ROW_LENGTH),At=E.getParameter(E.UNPACK_IMAGE_HEIGHT),Wn=E.getParameter(E.UNPACK_SKIP_PIXELS),Es=E.getParameter(E.UNPACK_SKIP_ROWS),Sn=E.getParameter(E.UNPACK_SKIP_IMAGES);E.pixelStorei(E.UNPACK_ROW_LENGTH,yt.width),E.pixelStorei(E.UNPACK_IMAGE_HEIGHT,yt.height),E.pixelStorei(E.UNPACK_SKIP_PIXELS,We),E.pixelStorei(E.UNPACK_SKIP_ROWS,Xe),E.pixelStorei(E.UNPACK_SKIP_IMAGES,Ze);const ra=O.isDataArrayTexture||O.isData3DTexture,Ct=xe.isDataArrayTexture||xe.isData3DTexture;if(O.isRenderTargetTexture||O.isDepthTexture){const si=k.get(O),oa=k.get(xe),Fn=k.get(si.__renderTarget),Ri=k.get(oa.__renderTarget);P.bindFramebuffer(E.READ_FRAMEBUFFER,Fn.__webglFramebuffer),P.bindFramebuffer(E.DRAW_FRAMEBUFFER,Ri.__webglFramebuffer);for(let Di=0;Di<Ve;Di++)ra&&E.framebufferTextureLayer(E.READ_FRAMEBUFFER,E.COLOR_ATTACHMENT0,k.get(O).__webglTexture,_e,Ze+Di),O.isDepthTexture?(Ct&&E.framebufferTextureLayer(E.DRAW_FRAMEBUFFER,E.COLOR_ATTACHMENT0,k.get(xe).__webglTexture,_e,Et+Di),E.blitFramebuffer(We,Xe,Fe,ze,je,ht,Fe,ze,E.DEPTH_BUFFER_BIT,E.NEAREST)):Ct?E.copyTexSubImage3D(Ye,_e,je,ht,Et+Di,We,Xe,Fe,ze):E.copyTexSubImage2D(Ye,_e,je,ht,Et+Di,We,Xe,Fe,ze);P.bindFramebuffer(E.READ_FRAMEBUFFER,null),P.bindFramebuffer(E.DRAW_FRAMEBUFFER,null)}else Ct?O.isDataTexture||O.isData3DTexture?E.texSubImage3D(Ye,_e,je,ht,Et,Fe,ze,Ve,vn,dt,yt.data):xe.isCompressedArrayTexture?E.compressedTexSubImage3D(Ye,_e,je,ht,Et,Fe,ze,Ve,vn,yt.data):E.texSubImage3D(Ye,_e,je,ht,Et,Fe,ze,Ve,vn,dt,yt):O.isDataTexture?E.texSubImage2D(E.TEXTURE_2D,_e,je,ht,Fe,ze,vn,dt,yt.data):O.isCompressedTexture?E.compressedTexSubImage2D(E.TEXTURE_2D,_e,je,ht,yt.width,yt.height,vn,yt.data):E.texSubImage2D(E.TEXTURE_2D,_e,je,ht,Fe,ze,vn,dt,yt);E.pixelStorei(E.UNPACK_ROW_LENGTH,pi),E.pixelStorei(E.UNPACK_IMAGE_HEIGHT,At),E.pixelStorei(E.UNPACK_SKIP_PIXELS,Wn),E.pixelStorei(E.UNPACK_SKIP_ROWS,Es),E.pixelStorei(E.UNPACK_SKIP_IMAGES,Sn),_e===0&&xe.generateMipmaps&&E.generateMipmap(Ye),P.unbindTexture()},this.copyTextureToTexture3D=function(O,xe,ye=null,Ce=null,_e=0){return O.isTexture!==!0&&(Ea("WebGLRenderer: copyTextureToTexture3D function signature has changed."),ye=arguments[0]||null,Ce=arguments[1]||null,O=arguments[2],xe=arguments[3],_e=arguments[4]||0),Ea('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(O,xe,ye,Ce,_e)},this.initRenderTarget=function(O){k.get(O).__webglFramebuffer===void 0&&v.setupRenderTarget(O)},this.initTexture=function(O){O.isCubeTexture?v.setTextureCube(O,0):O.isData3DTexture?v.setTexture3D(O,0):O.isDataArrayTexture||O.isCompressedArrayTexture?v.setTexture2DArray(O,0):v.setTexture2D(O,0),P.unbindTexture()},this.resetState=function(){V=0,G=0,ee=null,P.reset(),De.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Si}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=ot._getDrawingBufferColorSpace(e),t.unpackColorSpace=ot._getUnpackColorSpace()}}class no{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ie(e),this.near=t,this.far=n}clone(){return new no(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class q0 extends Tt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Vn,this.environmentIntensity=1,this.environmentRotation=new Vn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Y0{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Oc,this.updateRanges=[],this.version=0,this.uuid=ti()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,a=this.stride;s<a;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ti()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ti()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const An=new Z;class ml{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)An.fromBufferAttribute(this,t),An.applyMatrix4(e),this.setXYZ(t,An.x,An.y,An.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)An.fromBufferAttribute(this,t),An.applyNormalMatrix(e),this.setXYZ(t,An.x,An.y,An.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)An.fromBufferAttribute(this,t),An.transformDirection(e),this.setXYZ(t,An.x,An.y,An.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=$n(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=mt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=mt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=mt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=mt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=mt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=$n(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=$n(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=$n(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=$n(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array),s=mt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,a){return e=e*this.data.stride+this.offset,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array),s=mt(s,this.array),a=mt(a,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=a,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)t.push(this.data.array[s+a])}return new Bt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new ml(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)t.push(this.data.array[s+a])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const fr=new Z,Sh=new Z;class Vr extends Tt{constructor(){super(),this._currentLevel=0,this.type="LOD",Object.defineProperties(this,{levels:{enumerable:!0,value:[]},isLOD:{value:!0}}),this.autoUpdate=!0}copy(e){super.copy(e,!1);const t=e.levels;for(let n=0,s=t.length;n<s;n++){const a=t[n];this.addLevel(a.object.clone(),a.distance,a.hysteresis)}return this.autoUpdate=e.autoUpdate,this}addLevel(e,t=0,n=0){t=Math.abs(t);const s=this.levels;let a;for(a=0;a<s.length&&!(t<s[a].distance);a++);return s.splice(a,0,{distance:t,hysteresis:n,object:e}),this.add(e),this}removeLevel(e){const t=this.levels;for(let n=0;n<t.length;n++)if(t[n].distance===e){const s=t.splice(n,1);return this.remove(s[0].object),!0}return!1}getCurrentLevel(){return this._currentLevel}getObjectForDistance(e){const t=this.levels;if(t.length>0){let n,s;for(n=1,s=t.length;n<s;n++){let a=t[n].distance;if(t[n].object.visible&&(a-=a*t[n].hysteresis),e<a)break}return t[n-1].object}return null}raycast(e,t){if(this.levels.length>0){fr.setFromMatrixPosition(this.matrixWorld);const s=e.ray.origin.distanceTo(fr);this.getObjectForDistance(s).raycast(e,t)}}update(e){const t=this.levels;if(t.length>1){fr.setFromMatrixPosition(e.matrixWorld),Sh.setFromMatrixPosition(this.matrixWorld);const n=fr.distanceTo(Sh)/e.zoom;t[0].object.visible=!0;let s,a;for(s=1,a=t.length;s<a;s++){let r=t[s].distance;if(t[s].object.visible&&(r-=r*t[s].hysteresis),n>=r)t[s-1].object.visible=!1,t[s].object.visible=!0;else break}for(this._currentLevel=s-1;s<a;s++)t[s].object.visible=!1}}toJSON(e){const t=super.toJSON(e);this.autoUpdate===!1&&(t.object.autoUpdate=!1),t.object.levels=[];const n=this.levels;for(let s=0,a=n.length;s<a;s++){const r=n[s];t.object.levels.push({object:r.object.uuid,distance:r.distance,hysteresis:r.hysteresis})}return t}}const Ih=new Z,Th=new ft,Bh=new ft,X0=new Z,Rh=new He,dr=new Z,zo=new ui,Dh=new He,Go=new Ga;class K0 extends st{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Tl,this.bindMatrix=new He,this.bindMatrixInverse=new He,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Bi),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,dr),this.boundingBox.expandByPoint(dr)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new ui),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,dr),this.boundingSphere.expandByPoint(dr)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),zo.copy(this.boundingSphere),zo.applyMatrix4(s),e.ray.intersectsSphere(zo)!==!1&&(Dh.copy(s).invert(),Go.copy(e.ray).applyMatrix4(Dh),!(this.boundingBox!==null&&Go.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Go)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new ft,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);const a=1/e.manhattanLength();a!==1/0?e.multiplyScalar(a):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Tl?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===od?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,s=this.geometry;Th.fromBufferAttribute(s.attributes.skinIndex,e),Bh.fromBufferAttribute(s.attributes.skinWeight,e),Ih.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let a=0;a<4;a++){const r=Bh.getComponent(a);if(r!==0){const o=Th.getComponent(a);Rh.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(X0.copy(Ih).applyMatrix4(Rh),r)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Zu extends Tt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Ha extends kt{constructor(e=null,t=1,n=1,s,a,r,o,c,l=on,h=on,u,f){super(null,r,o,c,l,h,s,a,u,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Lh=new He,J0=new He;class gl{constructor(e=[],t=[]){this.uuid=ti(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new He)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new He;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let a=0,r=e.length;a<r;a++){const o=e[a]?e[a].matrixWorld:J0;Lh.multiplyMatrices(o,t[a]),Lh.toArray(n,a*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new gl(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Ha(t,e,e,jt,un);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){const a=e.bones[n];let r=t[a];r===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",a),r=new Zu),this.bones.push(r),this.boneInverses.push(new He().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let s=0,a=t.length;s<a;s++){const r=t[s];e.bones.push(r.uuid);const o=n[s];e.boneInverses.push(o.toArray())}return e}}class Gc extends Bt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Fs=new He,Ph=new He,Ar=[],Uh=new Bi,Z0=new He,fa=new st,da=new ui;class Rt extends st{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Gc(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Z0)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Bi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Fs),Uh.copy(e.boundingBox).applyMatrix4(Fs),this.boundingBox.union(Uh)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new ui),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Fs),da.copy(e.boundingSphere).applyMatrix4(Fs),this.boundingSphere.union(da)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,a=n.length+1,r=e*a+1;for(let o=0;o<n.length;o++)n[o]=s[r+o]}raycast(e,t){const n=this.matrixWorld,s=this.count;if(fa.geometry=this.geometry,fa.material=this.material,fa.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),da.copy(this.boundingSphere),da.applyMatrix4(n),e.ray.intersectsSphere(da)!==!1))for(let a=0;a<s;a++){this.getMatrixAt(a,Fs),Ph.multiplyMatrices(n,Fs),fa.matrixWorld=Ph,fa.raycast(e,Ar);for(let r=0,o=Ar.length;r<o;r++){const c=Ar[r];c.instanceId=a,c.object=this,t.push(c)}Ar.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Gc(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Ha(new Float32Array(s*this.count),s,this.count,Vi,un));const a=this.morphTexture.source.data.data;let r=0;for(let l=0;l<n.length;l++)r+=n[l];const o=this.geometry.morphTargetsRelative?1:1-r,c=s*e;a[c]=o,a.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class $u extends Hn{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new Ie(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Wr=new Z,jr=new Z,Fh=new He,Aa=new Ga,pr=new ui,Ho=new Z,Nh=new Z;class bl extends Tt{constructor(e=new xt,t=new $u){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let s=1,a=t.count;s<a;s++)Wr.fromBufferAttribute(t,s-1),jr.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Wr.distanceTo(jr);e.setAttribute("lineDistance",new tt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,a=e.params.Line.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),pr.copy(n.boundingSphere),pr.applyMatrix4(s),pr.radius+=a,e.ray.intersectsSphere(pr)===!1)return;Fh.copy(s).invert(),Aa.copy(e.ray).applyMatrix4(Fh);const o=a/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){const m=Math.max(0,r.start),x=Math.min(h.count,r.start+r.count);for(let _=m,p=x-1;_<p;_+=l){const d=h.getX(_),C=h.getX(_+1),y=mr(this,e,Aa,c,d,C);y&&t.push(y)}if(this.isLineLoop){const _=h.getX(x-1),p=h.getX(m),d=mr(this,e,Aa,c,_,p);d&&t.push(d)}}else{const m=Math.max(0,r.start),x=Math.min(f.count,r.start+r.count);for(let _=m,p=x-1;_<p;_+=l){const d=mr(this,e,Aa,c,_,_+1);d&&t.push(d)}if(this.isLineLoop){const _=mr(this,e,Aa,c,x-1,m);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,r=s.length;a<r;a++){const o=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}}function mr(i,e,t,n,s,a){const r=i.geometry.attributes.position;if(Wr.fromBufferAttribute(r,s),jr.fromBufferAttribute(r,a),t.distanceSqToSegment(Wr,jr,Ho,Nh)>n)return;Ho.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(Ho);if(!(c<e.near||c>e.far))return{distance:c,point:Nh.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}const Qh=new Z,kh=new Z;class $0 extends bl{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let s=0,a=t.count;s<a;s+=2)Qh.fromBufferAttribute(t,s),kh.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Qh.distanceTo(kh);e.setAttribute("lineDistance",new tt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class eb extends bl{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class ef extends Hn{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new Ie(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Oh=new He,Hc=new Ga,gr=new ui,br=new Z;class tb extends Tt{constructor(e=new xt,t=new ef){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,a=e.params.Points.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),gr.copy(n.boundingSphere),gr.applyMatrix4(s),gr.radius+=a,e.ray.intersectsSphere(gr)===!1)return;Oh.copy(s).invert(),Hc.copy(e.ray).applyMatrix4(Oh);const o=a/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,u=n.attributes.position;if(l!==null){const f=Math.max(0,r.start),m=Math.min(l.count,r.start+r.count);for(let x=f,_=m;x<_;x++){const p=l.getX(x);br.fromBufferAttribute(u,p),zh(br,p,c,s,e,t,this)}}else{const f=Math.max(0,r.start),m=Math.min(u.count,r.start+r.count);for(let x=f,_=m;x<_;x++)br.fromBufferAttribute(u,x),zh(br,x,c,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,r=s.length;a<r;a++){const o=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}}function zh(i,e,t,n,s,a,r){const o=Hc.distanceSqToPoint(i);if(o<t){const c=new Z;Hc.closestPointToPoint(i,c),c.applyMatrix4(n);const l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;a.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:r})}}class io extends kt{constructor(e,t,n,s,a,r,o,c,l,h,u,f){super(null,r,o,c,l,h,s,a,u,f),this.isCompressedTexture=!0,this.image={width:t,height:n},this.mipmaps=e,this.flipY=!1,this.generateMipmaps=!1}}class nb extends io{constructor(e,t,n,s,a,r){super(e,t,n,a,r),this.isCompressedArrayTexture=!0,this.image.depth=s,this.wrapR=wi,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class ib extends io{constructor(e,t,n){super(void 0,e[0].width,e[0].height,t,n,us),this.isCompressedCubeTexture=!0,this.isCubeTexture=!0,this.image=e}}class sb extends kt{constructor(e,t,n,s,a,r,o,c,l){super(e,t,n,s,a,r,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Qt extends xt{constructor(e=1,t=1,n=1,s=32,a=1,r=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:a,openEnded:r,thetaStart:o,thetaLength:c};const l=this;s=Math.floor(s),a=Math.floor(a);const h=[],u=[],f=[],m=[];let x=0;const _=[],p=n/2;let d=0;C(),r===!1&&(e>0&&y(!0),t>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new tt(u,3)),this.setAttribute("normal",new tt(f,3)),this.setAttribute("uv",new tt(m,2));function C(){const M=new Z,W=new Z;let V=0;const G=(t-e)/n;for(let ee=0;ee<=a;ee++){const R=[],B=ee/a,A=B*(t-e)+e;for(let I=0;I<=s;I++){const N=I/s,$=N*c+o,q=Math.sin($),ae=Math.cos($);W.x=A*q,W.y=-B*n+p,W.z=A*ae,u.push(W.x,W.y,W.z),M.set(q,G,ae).normalize(),f.push(M.x,M.y,M.z),m.push(N,1-B),R.push(x++)}_.push(R)}for(let ee=0;ee<s;ee++)for(let R=0;R<a;R++){const B=_[R][ee],A=_[R+1][ee],I=_[R+1][ee+1],N=_[R][ee+1];(e>0||R!==0)&&(h.push(B,A,N),V+=3),(t>0||R!==a-1)&&(h.push(A,I,N),V+=3)}l.addGroup(d,V,0),d+=V}function y(M){const W=x,V=new Oe,G=new Z;let ee=0;const R=M===!0?e:t,B=M===!0?1:-1;for(let I=1;I<=s;I++)u.push(0,p*B,0),f.push(0,B,0),m.push(.5,.5),x++;const A=x;for(let I=0;I<=s;I++){const $=I/s*c+o,q=Math.cos($),ae=Math.sin($);G.x=R*ae,G.y=p*B,G.z=R*q,u.push(G.x,G.y,G.z),f.push(0,B,0),V.x=q*.5+.5,V.y=ae*.5*B+.5,m.push(V.x,V.y),x++}for(let I=0;I<s;I++){const N=W+I,$=A+I;M===!0?h.push($,$+1,N):h.push($+1,$,N),ee+=3}l.addGroup(d,ee,M===!0?1:2),d+=ee}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qt(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Jn extends Qt{constructor(e=1,t=1,n=32,s=1,a=!1,r=0,o=Math.PI*2){super(0,e,t,n,s,a,r,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:a,thetaStart:r,thetaLength:o}}static fromJSON(e){return new Jn(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class so extends xt{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};const a=[],r=[];o(s),l(n),h(),this.setAttribute("position",new tt(a,3)),this.setAttribute("normal",new tt(a.slice(),3)),this.setAttribute("uv",new tt(r,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(C){const y=new Z,M=new Z,W=new Z;for(let V=0;V<t.length;V+=3)m(t[V+0],y),m(t[V+1],M),m(t[V+2],W),c(y,M,W,C)}function c(C,y,M,W){const V=W+1,G=[];for(let ee=0;ee<=V;ee++){G[ee]=[];const R=C.clone().lerp(M,ee/V),B=y.clone().lerp(M,ee/V),A=V-ee;for(let I=0;I<=A;I++)I===0&&ee===V?G[ee][I]=R:G[ee][I]=R.clone().lerp(B,I/A)}for(let ee=0;ee<V;ee++)for(let R=0;R<2*(V-ee)-1;R++){const B=Math.floor(R/2);R%2===0?(f(G[ee][B+1]),f(G[ee+1][B]),f(G[ee][B])):(f(G[ee][B+1]),f(G[ee+1][B+1]),f(G[ee+1][B]))}}function l(C){const y=new Z;for(let M=0;M<a.length;M+=3)y.x=a[M+0],y.y=a[M+1],y.z=a[M+2],y.normalize().multiplyScalar(C),a[M+0]=y.x,a[M+1]=y.y,a[M+2]=y.z}function h(){const C=new Z;for(let y=0;y<a.length;y+=3){C.x=a[y+0],C.y=a[y+1],C.z=a[y+2];const M=p(C)/2/Math.PI+.5,W=d(C)/Math.PI+.5;r.push(M,1-W)}x(),u()}function u(){for(let C=0;C<r.length;C+=6){const y=r[C+0],M=r[C+2],W=r[C+4],V=Math.max(y,M,W),G=Math.min(y,M,W);V>.9&&G<.1&&(y<.2&&(r[C+0]+=1),M<.2&&(r[C+2]+=1),W<.2&&(r[C+4]+=1))}}function f(C){a.push(C.x,C.y,C.z)}function m(C,y){const M=C*3;y.x=e[M+0],y.y=e[M+1],y.z=e[M+2]}function x(){const C=new Z,y=new Z,M=new Z,W=new Z,V=new Oe,G=new Oe,ee=new Oe;for(let R=0,B=0;R<a.length;R+=9,B+=6){C.set(a[R+0],a[R+1],a[R+2]),y.set(a[R+3],a[R+4],a[R+5]),M.set(a[R+6],a[R+7],a[R+8]),V.set(r[B+0],r[B+1]),G.set(r[B+2],r[B+3]),ee.set(r[B+4],r[B+5]),W.copy(C).add(y).add(M).divideScalar(3);const A=p(W);_(V,B+0,C,A),_(G,B+2,y,A),_(ee,B+4,M,A)}}function _(C,y,M,W){W<0&&C.x===1&&(r[y]=C.x-1),M.x===0&&M.z===0&&(r[y]=W/2/Math.PI+.5)}function p(C){return Math.atan2(C.z,-C.x)}function d(C){return Math.atan2(-C.y,Math.sqrt(C.x*C.x+C.z*C.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new so(e.vertices,e.indices,e.radius,e.details)}}const ab={triangulate:function(i,e,t=2){const n=e&&e.length,s=n?e[0]*t:i.length;let a=tf(i,0,s,t,!0);const r=[];if(!a||a.next===a.prev)return r;let o,c,l,h,u,f,m;if(n&&(a=hb(i,e,a,t)),i.length>80*t){o=l=i[0],c=h=i[1];for(let x=t;x<s;x+=t)u=i[x],f=i[x+1],u<o&&(o=u),f<c&&(c=f),u>l&&(l=u),f>h&&(h=f);m=Math.max(l-o,h-c),m=m!==0?32767/m:0}return Qa(a,r,t,o,c,m,0),r}};function tf(i,e,t,n,s){let a,r;if(s===Eb(i,e,t,n)>0)for(a=e;a<t;a+=n)r=Gh(a,i[a],i[a+1],r);else for(a=t-n;a>=e;a-=n)r=Gh(a,i[a],i[a+1],r);return r&&ao(r,r.next)&&(Oa(r),r=r.next),r}function ps(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(ao(t,t.next)||Ut(t.prev,t,t.next)===0)){if(Oa(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Qa(i,e,t,n,s,a,r){if(!i)return;!r&&a&&pb(i,n,s,a);let o=i,c,l;for(;i.prev!==i.next;){if(c=i.prev,l=i.next,a?ob(i,n,s,a):rb(i)){e.push(c.i/t|0),e.push(i.i/t|0),e.push(l.i/t|0),Oa(i),i=l.next,o=l.next;continue}if(i=l,i===o){r?r===1?(i=cb(ps(i),e,t),Qa(i,e,t,n,s,a,2)):r===2&&lb(i,e,t,n,s,a):Qa(ps(i),e,t,n,s,a,1);break}}}function rb(i){const e=i.prev,t=i,n=i.next;if(Ut(e,t,n)>=0)return!1;const s=e.x,a=t.x,r=n.x,o=e.y,c=t.y,l=n.y,h=s<a?s<r?s:r:a<r?a:r,u=o<c?o<l?o:l:c<l?c:l,f=s>a?s>r?s:r:a>r?a:r,m=o>c?o>l?o:l:c>l?c:l;let x=n.next;for(;x!==e;){if(x.x>=h&&x.x<=f&&x.y>=u&&x.y<=m&&ks(s,o,a,c,r,l,x.x,x.y)&&Ut(x.prev,x,x.next)>=0)return!1;x=x.next}return!0}function ob(i,e,t,n){const s=i.prev,a=i,r=i.next;if(Ut(s,a,r)>=0)return!1;const o=s.x,c=a.x,l=r.x,h=s.y,u=a.y,f=r.y,m=o<c?o<l?o:l:c<l?c:l,x=h<u?h<f?h:f:u<f?u:f,_=o>c?o>l?o:l:c>l?c:l,p=h>u?h>f?h:f:u>f?u:f,d=Vc(m,x,e,t,n),C=Vc(_,p,e,t,n);let y=i.prevZ,M=i.nextZ;for(;y&&y.z>=d&&M&&M.z<=C;){if(y.x>=m&&y.x<=_&&y.y>=x&&y.y<=p&&y!==s&&y!==r&&ks(o,h,c,u,l,f,y.x,y.y)&&Ut(y.prev,y,y.next)>=0||(y=y.prevZ,M.x>=m&&M.x<=_&&M.y>=x&&M.y<=p&&M!==s&&M!==r&&ks(o,h,c,u,l,f,M.x,M.y)&&Ut(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;y&&y.z>=d;){if(y.x>=m&&y.x<=_&&y.y>=x&&y.y<=p&&y!==s&&y!==r&&ks(o,h,c,u,l,f,y.x,y.y)&&Ut(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;M&&M.z<=C;){if(M.x>=m&&M.x<=_&&M.y>=x&&M.y<=p&&M!==s&&M!==r&&ks(o,h,c,u,l,f,M.x,M.y)&&Ut(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function cb(i,e,t){let n=i;do{const s=n.prev,a=n.next.next;!ao(s,a)&&nf(s,n,n.next,a)&&ka(s,a)&&ka(a,s)&&(e.push(s.i/t|0),e.push(n.i/t|0),e.push(a.i/t|0),Oa(n),Oa(n.next),n=i=a),n=n.next}while(n!==i);return ps(n)}function lb(i,e,t,n,s,a){let r=i;do{let o=r.next.next;for(;o!==r.prev;){if(r.i!==o.i&&bb(r,o)){let c=sf(r,o);r=ps(r,r.next),c=ps(c,c.next),Qa(r,e,t,n,s,a,0),Qa(c,e,t,n,s,a,0);return}o=o.next}r=r.next}while(r!==i)}function hb(i,e,t,n){const s=[];let a,r,o,c,l;for(a=0,r=e.length;a<r;a++)o=e[a]*n,c=a<r-1?e[a+1]*n:i.length,l=tf(i,o,c,n,!1),l===l.next&&(l.steiner=!0),s.push(gb(l));for(s.sort(ub),a=0;a<s.length;a++)t=fb(s[a],t);return t}function ub(i,e){return i.x-e.x}function fb(i,e){const t=db(i,e);if(!t)return e;const n=sf(t,i);return ps(n,n.next),ps(t,t.next)}function db(i,e){let t=e,n=-1/0,s;const a=i.x,r=i.y;do{if(r<=t.y&&r>=t.next.y&&t.next.y!==t.y){const f=t.x+(r-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=a&&f>n&&(n=f,s=t.x<t.next.x?t:t.next,f===a))return s}t=t.next}while(t!==e);if(!s)return null;const o=s,c=s.x,l=s.y;let h=1/0,u;t=s;do a>=t.x&&t.x>=c&&a!==t.x&&ks(r<l?a:n,r,c,l,r<l?n:a,r,t.x,t.y)&&(u=Math.abs(r-t.y)/(a-t.x),ka(t,i)&&(u<h||u===h&&(t.x>s.x||t.x===s.x&&Ab(s,t)))&&(s=t,h=u)),t=t.next;while(t!==o);return s}function Ab(i,e){return Ut(i.prev,i,e.prev)<0&&Ut(e.next,i,i.next)<0}function pb(i,e,t,n){let s=i;do s.z===0&&(s.z=Vc(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,mb(s)}function mb(i){let e,t,n,s,a,r,o,c,l=1;do{for(t=i,i=null,a=null,r=0;t;){for(r++,n=t,o=0,e=0;e<l&&(o++,n=n.nextZ,!!n);e++);for(c=l;o>0||c>0&&n;)o!==0&&(c===0||!n||t.z<=n.z)?(s=t,t=t.nextZ,o--):(s=n,n=n.nextZ,c--),a?a.nextZ=s:i=s,s.prevZ=a,a=s;t=n}a.nextZ=null,l*=2}while(r>1);return i}function Vc(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function gb(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function ks(i,e,t,n,s,a,r,o){return(s-r)*(e-o)>=(i-r)*(a-o)&&(i-r)*(n-o)>=(t-r)*(e-o)&&(t-r)*(a-o)>=(s-r)*(n-o)}function bb(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!xb(i,e)&&(ka(i,e)&&ka(e,i)&&_b(i,e)&&(Ut(i.prev,i,e.prev)||Ut(i,e.prev,e))||ao(i,e)&&Ut(i.prev,i,i.next)>0&&Ut(e.prev,e,e.next)>0)}function Ut(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function ao(i,e){return i.x===e.x&&i.y===e.y}function nf(i,e,t,n){const s=_r(Ut(i,e,t)),a=_r(Ut(i,e,n)),r=_r(Ut(t,n,i)),o=_r(Ut(t,n,e));return!!(s!==a&&r!==o||s===0&&xr(i,t,e)||a===0&&xr(i,n,e)||r===0&&xr(t,i,n)||o===0&&xr(t,e,n))}function xr(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function _r(i){return i>0?1:i<0?-1:0}function xb(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&nf(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function ka(i,e){return Ut(i.prev,i,i.next)<0?Ut(i,e,i.next)>=0&&Ut(i,i.prev,e)>=0:Ut(i,e,i.prev)<0||Ut(i,i.next,e)<0}function _b(i,e){let t=i,n=!1;const s=(i.x+e.x)/2,a=(i.y+e.y)/2;do t.y>a!=t.next.y>a&&t.next.y!==t.y&&s<(t.next.x-t.x)*(a-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function sf(i,e){const t=new Wc(i.i,i.x,i.y),n=new Wc(e.i,e.x,e.y),s=i.next,a=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,a.next=n,n.prev=a,n}function Gh(i,e,t,n){const s=new Wc(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Oa(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Wc(i,e,t){this.i=i,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Eb(i,e,t,n){let s=0;for(let a=e,r=t-n;a<t;a+=n)s+=(i[r]-i[a])*(i[a+1]+i[r+1]),r=a;return s}class Cn{static area(e){const t=e.length;let n=0;for(let s=t-1,a=0;a<t;s=a++)n+=e[s].x*e[a].y-e[a].x*e[s].y;return n*.5}static isClockWise(e){return Cn.area(e)<0}static triangulateShape(e,t){const n=[],s=[],a=[];Hh(e),Vh(n,e);let r=e.length;t.forEach(Hh);for(let c=0;c<t.length;c++)s.push(r),r+=t[c].length,Vh(n,t[c]);const o=ab.triangulate(n,s);for(let c=0;c<o.length;c+=3)a.push(o.slice(c,c+3));return a}}function Hh(i){const e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Vh(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}class ro extends so{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],a=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,a,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new ro(e.radius,e.detail)}}class qr extends so{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new qr(e.radius,e.detail)}}class Rn extends xt{constructor(e=1,t=32,n=16,s=0,a=Math.PI*2,r=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:a,thetaStart:r,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(r+o,Math.PI);let l=0;const h=[],u=new Z,f=new Z,m=[],x=[],_=[],p=[];for(let d=0;d<=n;d++){const C=[],y=d/n;let M=0;d===0&&r===0?M=.5/t:d===n&&c===Math.PI&&(M=-.5/t);for(let W=0;W<=t;W++){const V=W/t;u.x=-e*Math.cos(s+V*a)*Math.sin(r+y*o),u.y=e*Math.cos(r+y*o),u.z=e*Math.sin(s+V*a)*Math.sin(r+y*o),x.push(u.x,u.y,u.z),f.copy(u).normalize(),_.push(f.x,f.y,f.z),p.push(V+M,1-y),C.push(l++)}h.push(C)}for(let d=0;d<n;d++)for(let C=0;C<t;C++){const y=h[d][C+1],M=h[d][C],W=h[d+1][C],V=h[d+1][C+1];(d!==0||r>0)&&m.push(y,M,V),(d!==n-1||c<Math.PI)&&m.push(M,W,V)}this.setIndex(m),this.setAttribute("position",new tt(x,3)),this.setAttribute("normal",new tt(_,3)),this.setAttribute("uv",new tt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Rn(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class vb extends Ht{static get type(){return"RawShaderMaterial"}constructor(e){super(e),this.isRawShaderMaterial=!0}}class ms extends Hn{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Ie(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ie(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Zr,this.normalScale=new Oe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class fi extends ms{static get type(){return"MeshPhysicalMaterial"}constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Oe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return nn(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ie(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ie(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ie(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Mb extends Hn{static get type(){return"MeshNormalMaterial"}constructor(e){super(),this.isMeshNormalMaterial=!0,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Zr,this.normalScale=new Oe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}class Ke extends Hn{static get type(){return"MeshLambertMaterial"}constructor(e){super(),this.isMeshLambertMaterial=!0,this.color=new Ie(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ie(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Zr,this.normalScale=new Oe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vn,this.combine=il,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}function Er(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function yb(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Cb(i){function e(s,a){return i[s]-i[a]}const t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function Wh(i,e,t){const n=i.length,s=new i.constructor(n);for(let a=0,r=0;r!==n;++a){const o=t[a]*e;for(let c=0;c!==e;++c)s[r++]=i[o+c]}return s}function af(i,e,t,n){let s=1,a=i[0];for(;a!==void 0&&a[n]===void 0;)a=i[s++];if(a===void 0)return;let r=a[n];if(r!==void 0)if(Array.isArray(r))do r=a[n],r!==void 0&&(e.push(a.time),t.push.apply(t,r)),a=i[s++];while(a!==void 0);else if(r.toArray!==void 0)do r=a[n],r!==void 0&&(e.push(a.time),r.toArray(t,t.length)),a=i[s++];while(a!==void 0);else do r=a[n],r!==void 0&&(e.push(a.time),t.push(r)),a=i[s++];while(a!==void 0)}class Va{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,s=t[n],a=t[n-1];n:{e:{let r;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<a)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(a=s,s=t[++n],e<s)break e}r=t.length;break t}if(!(e>=a)){const o=t[1];e<o&&(n=2,a=o);for(let c=n-2;;){if(a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=a,a=t[--n-1],e>=a)break e}r=n,n=0;break t}break n}for(;n<r;){const o=n+r>>>1;e<t[o]?r=o:n=o+1}if(s=t[n],a=t[n-1],a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,a,s)}return this.interpolate_(n,a,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,a=e*s;for(let r=0;r!==s;++r)t[r]=n[a+r];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class wb extends Va{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Bl,endingEnd:Bl}}intervalChanged_(e,t,n){const s=this.parameterPositions;let a=e-2,r=e+1,o=s[a],c=s[r];if(o===void 0)switch(this.getSettings_().endingStart){case Rl:a=e,o=2*t-n;break;case Dl:a=s.length-2,o=t+s[a]-s[a+1];break;default:a=e,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Rl:r=e,c=2*n-t;break;case Dl:r=1,c=n+s[1]-s[0];break;default:r=e-1,c=t}const l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-n),this._offsetPrev=a*h,this._offsetNext=r*h}interpolate_(e,t,n,s){const a=this.resultBuffer,r=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,m=this._weightNext,x=(n-t)/(s-t),_=x*x,p=_*x,d=-f*p+2*f*_-f*x,C=(1+f)*p+(-1.5-2*f)*_+(-.5+f)*x+1,y=(-1-m)*p+(1.5+m)*_+.5*x,M=m*p-m*_;for(let W=0;W!==o;++W)a[W]=d*r[h+W]+C*r[l+W]+y*r[c+W]+M*r[u+W];return a}}class Sb extends Va{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){const a=this.resultBuffer,r=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=(n-t)/(s-t),u=1-h;for(let f=0;f!==o;++f)a[f]=r[l+f]*u+r[c+f]*h;return a}}class Ib extends Va{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}}class di{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Er(t,this.TimeBufferType),this.values=Er(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Er(e.times,Array),values:Er(e.values,Array)};const s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Ib(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Sb(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new wb(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Ua:t=this.InterpolantFactoryMethodDiscrete;break;case Fa:t=this.InterpolantFactoryMethodLinear;break;case fo:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ua;case this.InterpolantFactoryMethodLinear:return Fa;case this.InterpolantFactoryMethodSmooth:return fo}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){const n=this.times,s=n.length;let a=0,r=s-1;for(;a!==s&&n[a]<e;)++a;for(;r!==-1&&n[r]>t;)--r;if(++r,a!==0||r!==s){a>=r&&(r=Math.max(r,1),a=r-1);const o=this.getValueSize();this.times=n.slice(a,r),this.values=this.values.slice(a*o,r*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,s=this.values,a=n.length;a===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let r=null;for(let o=0;o!==a;o++){const c=n[o];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(r!==null&&r>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,c,r),e=!1;break}r=c}if(s!==void 0&&yb(s))for(let o=0,c=s.length;o!==c;++o){const l=s[o];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===fo,a=e.length-1;let r=1;for(let o=1;o<a;++o){let c=!1;const l=e[o],h=e[o+1];if(l!==h&&(o!==1||l!==e[0]))if(s)c=!0;else{const u=o*n,f=u-n,m=u+n;for(let x=0;x!==n;++x){const _=t[u+x];if(_!==t[f+x]||_!==t[m+x]){c=!0;break}}}if(c){if(o!==r){e[r]=e[o];const u=o*n,f=r*n;for(let m=0;m!==n;++m)t[f+m]=t[u+m]}++r}}if(a>0){e[r]=e[a];for(let o=a*n,c=r*n,l=0;l!==n;++l)t[c+l]=t[o+l];++r}return r!==e.length?(this.times=e.slice(0,r),this.values=t.slice(0,r*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}}di.prototype.TimeBufferType=Float32Array;di.prototype.ValueBufferType=Float32Array;di.prototype.DefaultInterpolation=Fa;class na extends di{constructor(e,t,n){super(e,t,n)}}na.prototype.ValueTypeName="bool";na.prototype.ValueBufferType=Array;na.prototype.DefaultInterpolation=Ua;na.prototype.InterpolantFactoryMethodLinear=void 0;na.prototype.InterpolantFactoryMethodSmooth=void 0;class rf extends di{}rf.prototype.ValueTypeName="color";class Js extends di{}Js.prototype.ValueTypeName="number";class Tb extends Va{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){const a=this.resultBuffer,r=this.sampleValues,o=this.valueSize,c=(n-t)/(s-t);let l=e*o;for(let h=l+o;l!==h;l+=4)St.slerpFlat(a,0,r,l-o,r,l,c);return a}}class Zs extends di{InterpolantFactoryMethodLinear(e){return new Tb(this.times,this.values,this.getValueSize(),e)}}Zs.prototype.ValueTypeName="quaternion";Zs.prototype.InterpolantFactoryMethodSmooth=void 0;class ia extends di{constructor(e,t,n){super(e,t,n)}}ia.prototype.ValueTypeName="string";ia.prototype.ValueBufferType=Array;ia.prototype.DefaultInterpolation=Ua;ia.prototype.InterpolantFactoryMethodLinear=void 0;ia.prototype.InterpolantFactoryMethodSmooth=void 0;class $s extends di{}$s.prototype.ValueTypeName="vector";class Bb{constructor(e="",t=-1,n=[],s=cd){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=ti(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,s=1/(e.fps||1);for(let r=0,o=n.length;r!==o;++r)t.push(Db(n[r]).scale(s));const a=new this(e.name,e.duration,t,e.blendMode);return a.uuid=e.uuid,a}static toJSON(e){const t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let a=0,r=n.length;a!==r;++a)t.push(di.toJSON(n[a]));return s}static CreateFromMorphTargetSequence(e,t,n,s){const a=t.length,r=[];for(let o=0;o<a;o++){let c=[],l=[];c.push((o+a-1)%a,o,(o+1)%a),l.push(0,1,0);const h=Cb(c);c=Wh(c,1,h),l=Wh(l,1,h),!s&&c[0]===0&&(c.push(a),l.push(l[0])),r.push(new Js(".morphTargetInfluences["+t[o].name+"]",c,l).scale(1/n))}return new this(e,-1,r)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const s={},a=/^([\w-]*?)([\d]+)$/;for(let o=0,c=e.length;o<c;o++){const l=e[o],h=l.name.match(a);if(h&&h.length>1){const u=h[1];let f=s[u];f||(s[u]=f=[]),f.push(l)}}const r=[];for(const o in s)r.push(this.CreateFromMorphTargetSequence(o,s[o],t,n));return r}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(u,f,m,x,_){if(m.length!==0){const p=[],d=[];af(m,p,d,x),p.length!==0&&_.push(new u(f,p,d))}},s=[],a=e.name||"default",r=e.fps||30,o=e.blendMode;let c=e.length||-1;const l=e.hierarchy||[];for(let u=0;u<l.length;u++){const f=l[u].keys;if(!(!f||f.length===0))if(f[0].morphTargets){const m={};let x;for(x=0;x<f.length;x++)if(f[x].morphTargets)for(let _=0;_<f[x].morphTargets.length;_++)m[f[x].morphTargets[_]]=-1;for(const _ in m){const p=[],d=[];for(let C=0;C!==f[x].morphTargets.length;++C){const y=f[x];p.push(y.time),d.push(y.morphTarget===_?1:0)}s.push(new Js(".morphTargetInfluence["+_+"]",p,d))}c=m.length*r}else{const m=".bones["+t[u].name+"]";n($s,m+".position",f,"pos",s),n(Zs,m+".quaternion",f,"rot",s),n($s,m+".scale",f,"scl",s)}}return s.length===0?null:new this(a,c,s,o)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,s=e.length;n!==s;++n){const a=this.tracks[n];t=Math.max(t,a.times[a.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function Rb(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Js;case"vector":case"vector2":case"vector3":case"vector4":return $s;case"color":return rf;case"quaternion":return Zs;case"bool":case"boolean":return na;case"string":return ia}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function Db(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Rb(i.type);if(i.times===void 0){const t=[],n=[];af(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}const ji={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class Lb{constructor(e,t,n){const s=this;let a=!1,r=0,o=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){o++,a===!1&&s.onStart!==void 0&&s.onStart(h,r,o),a=!0},this.itemEnd=function(h){r++,s.onProgress!==void 0&&s.onProgress(h,r,o),r===o&&(a=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){const u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=l.length;u<f;u+=2){const m=l[u],x=l[u+1];if(m.global&&(m.lastIndex=0),m.test(h))return x}return null}}}const Pb=new Lb;class bs{constructor(e){this.manager=e!==void 0?e:Pb,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(s,a){n.load(e,s,t,a)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}bs.DEFAULT_MATERIAL_NAME="__DEFAULT";const Ei={};class Ub extends Error{constructor(e,t){super(e),this.response=t}}class Ta extends bs{constructor(e){super(e)}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const a=ji.get(e);if(a!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(a),this.manager.itemEnd(e)},0),a;if(Ei[e]!==void 0){Ei[e].push({onLoad:t,onProgress:n,onError:s});return}Ei[e]=[],Ei[e].push({onLoad:t,onProgress:n,onError:s});const r=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,c=this.responseType;fetch(r).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const h=Ei[e],u=l.body.getReader(),f=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),m=f?parseInt(f):0,x=m!==0;let _=0;const p=new ReadableStream({start(d){C();function C(){u.read().then(({done:y,value:M})=>{if(y)d.close();else{_+=M.byteLength;const W=new ProgressEvent("progress",{lengthComputable:x,loaded:_,total:m});for(let V=0,G=h.length;V<G;V++){const ee=h[V];ee.onProgress&&ee.onProgress(W)}d.enqueue(M),C()}},y=>{d.error(y)})}}});return new Response(p)}else throw new Ub(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return l.json();default:if(o===void 0)return l.text();{const u=/charset="?([^;"\s]*)"?/i.exec(o),f=u&&u[1]?u[1].toLowerCase():void 0,m=new TextDecoder(f);return l.arrayBuffer().then(x=>m.decode(x))}}}).then(l=>{ji.add(e,l);const h=Ei[e];delete Ei[e];for(let u=0,f=h.length;u<f;u++){const m=h[u];m.onLoad&&m.onLoad(l)}}).catch(l=>{const h=Ei[e];if(h===void 0)throw this.manager.itemError(e),l;delete Ei[e];for(let u=0,f=h.length;u<f;u++){const m=h[u];m.onError&&m.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class Fb extends bs{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const a=this,r=ji.get(e);if(r!==void 0)return a.manager.itemStart(e),setTimeout(function(){t&&t(r),a.manager.itemEnd(e)},0),r;const o=Na("img");function c(){h(),ji.add(e,this),t&&t(this),a.manager.itemEnd(e)}function l(u){h(),s&&s(u),a.manager.itemError(e),a.manager.itemEnd(e)}function h(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),a.manager.itemStart(e),o.src=e,o}}class xl extends bs{constructor(e){super(e)}load(e,t,n,s){const a=new kt,r=new Fb(this.manager);return r.setCrossOrigin(this.crossOrigin),r.setPath(this.path),r.load(e,function(o){a.image=o,a.needsUpdate=!0,t!==void 0&&t(a)},n,s),a}}class oo extends Tt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ie(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class jh extends oo{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Tt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ie(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Vo=new He,qh=new Z,Yh=new Z;class _l{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Oe(512,512),this.map=null,this.mapPass=null,this.matrix=new He,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new dl,this._frameExtents=new Oe(1,1),this._viewportCount=1,this._viewports=[new ft(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;qh.setFromMatrixPosition(e.matrixWorld),t.position.copy(qh),Yh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Yh),t.updateMatrixWorld(),Vo.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Vo),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Vo)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Nb extends _l{constructor(){super(new bn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=Ys*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,a=e.distance||t.far;(n!==t.fov||s!==t.aspect||a!==t.far)&&(t.fov=n,t.aspect=s,t.far=a,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Qb extends oo{constructor(e,t,n=0,s=Math.PI/3,a=0,r=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Tt.DEFAULT_UP),this.updateMatrix(),this.target=new Tt,this.distance=n,this.angle=s,this.penumbra=a,this.decay=r,this.map=null,this.shadow=new Nb}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Xh=new He,pa=new Z,Wo=new Z;class kb extends _l{constructor(){super(new bn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Oe(4,2),this._viewportCount=6,this._viewports=[new ft(2,1,1,1),new ft(0,1,1,1),new ft(3,1,1,1),new ft(1,1,1,1),new ft(3,0,1,1),new ft(1,0,1,1)],this._cubeDirections=[new Z(1,0,0),new Z(-1,0,0),new Z(0,0,1),new Z(0,0,-1),new Z(0,1,0),new Z(0,-1,0)],this._cubeUps=[new Z(0,1,0),new Z(0,1,0),new Z(0,1,0),new Z(0,1,0),new Z(0,0,1),new Z(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,s=this.matrix,a=e.distance||n.far;a!==n.far&&(n.far=a,n.updateProjectionMatrix()),pa.setFromMatrixPosition(e.matrixWorld),n.position.copy(pa),Wo.copy(n.position),Wo.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Wo),n.updateMatrixWorld(),s.makeTranslation(-pa.x,-pa.y,-pa.z),Xh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Xh)}}class Ob extends oo{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new kb}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class zb extends _l{constructor(){super(new eo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class of extends oo{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Tt.DEFAULT_UP),this.updateMatrix(),this.target=new Tt,this.shadow=new zb}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Ba{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,s=e.length;n<s;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class Gb extends bs{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const a=this,r=ji.get(e);if(r!==void 0){if(a.manager.itemStart(e),r.then){r.then(l=>{t&&t(l),a.manager.itemEnd(e)}).catch(l=>{s&&s(l)});return}return setTimeout(function(){t&&t(r),a.manager.itemEnd(e)},0),r}const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader;const c=fetch(e,o).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(a.options,{colorSpaceConversion:"none"}))}).then(function(l){return ji.add(e,l),t&&t(l),a.manager.itemEnd(e),l}).catch(function(l){s&&s(l),ji.remove(e),a.manager.itemError(e),a.manager.itemEnd(e)});ji.add(e,c),a.manager.itemStart(e)}}class Hb{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Kh(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Kh();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Kh(){return performance.now()}const El="\\[\\]\\.:\\/",Vb=new RegExp("["+El+"]","g"),vl="[^"+El+"]",Wb="[^"+El.replace("\\.","")+"]",jb=/((?:WC+[\/:])*)/.source.replace("WC",vl),qb=/(WCOD+)?/.source.replace("WCOD",Wb),Yb=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",vl),Xb=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",vl),Kb=new RegExp("^"+jb+qb+Yb+Xb+"$"),Jb=["material","materials","bones","map"];class Zb{constructor(e,t,n){const s=n||gt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,a=n.length;s!==a;++s)n[s].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class gt{constructor(e,t,n){this.path=t,this.parsedPath=n||gt.parseTrackName(t),this.node=gt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new gt.Composite(e,t,n):new gt(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Vb,"")}static parseTrackName(e){const t=Kb.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){const a=n.nodeName.substring(s+1);Jb.indexOf(a)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=a)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(a){for(let r=0;r<a.length;r++){const o=a[r];if(o.name===t||o.uuid===t)return o;const c=n(o.children);if(c)return c}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let s=0,a=n.length;s!==a;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let s=0,a=n.length;s!==a;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let s=0,a=n.length;s!==a;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let s=0,a=n.length;s!==a;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,s=t.propertyName;let a=t.propertyIndex;if(e||(e=gt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}const r=e[s];if(r===void 0){const l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(a!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[a]!==void 0&&(a=e.morphTargetDictionary[a])}c=this.BindingType.ArrayElement,this.resolvedProperty=r,this.propertyIndex=a}else r.fromArray!==void 0&&r.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=r):Array.isArray(r)?(c=this.BindingType.EntireArray,this.resolvedProperty=r):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}gt.Composite=Zb;gt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};gt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};gt.prototype.GetterByBindingType=[gt.prototype._getValue_direct,gt.prototype._getValue_array,gt.prototype._getValue_arrayElement,gt.prototype._getValue_toArray];gt.prototype.SetterByBindingTypeAndVersioning=[[gt.prototype._setValue_direct,gt.prototype._setValue_direct_setNeedsUpdate,gt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[gt.prototype._setValue_array,gt.prototype._setValue_array_setNeedsUpdate,gt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[gt.prototype._setValue_arrayElement,gt.prototype._setValue_arrayElement_setNeedsUpdate,gt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[gt.prototype._setValue_fromArray,gt.prototype._setValue_fromArray_setNeedsUpdate,gt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class Jh{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(nn(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class $b extends gs{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:tl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=tl);const Zh={type:"change"},Ml={type:"start"},cf={type:"end"},vr=new Ga,$h=new Oi,ex=Math.cos(70*gn.DEG2RAD),Vt=new Z,Mn=2*Math.PI,bt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},jo=1e-6;class tx extends $b{constructor(e,t=null){super(e,t),this.state=bt.NONE,this.enabled=!0,this.target=new Z,this.cursor=new Z,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ii.ROTATE,MIDDLE:Ii.DOLLY,RIGHT:Ii.PAN},this.touches={ONE:Hi.ROTATE,TWO:Hi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new Z,this._lastQuaternion=new St,this._lastTargetPosition=new Z,this._quat=new St().setFromUnitVectors(e.up,new Z(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Jh,this._sphericalDelta=new Jh,this._scale=1,this._panOffset=new Z,this._rotateStart=new Oe,this._rotateEnd=new Oe,this._rotateDelta=new Oe,this._panStart=new Oe,this._panEnd=new Oe,this._panDelta=new Oe,this._dollyStart=new Oe,this._dollyEnd=new Oe,this._dollyDelta=new Oe,this._dollyDirection=new Z,this._mouse=new Oe,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=ix.bind(this),this._onPointerDown=nx.bind(this),this._onPointerUp=sx.bind(this),this._onContextMenu=ux.bind(this),this._onMouseWheel=ox.bind(this),this._onKeyDown=cx.bind(this),this._onTouchStart=lx.bind(this),this._onTouchMove=hx.bind(this),this._onMouseDown=ax.bind(this),this._onMouseMove=rx.bind(this),this._interceptControlDown=fx.bind(this),this._interceptControlUp=dx.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Zh),this.update(),this.state=bt.NONE}update(e=null){const t=this.object.position;Vt.copy(t).sub(this.target),Vt.applyQuaternion(this._quat),this._spherical.setFromVector3(Vt),this.autoRotate&&this.state===bt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=Mn:n>Math.PI&&(n-=Mn),s<-Math.PI?s+=Mn:s>Math.PI&&(s-=Mn),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let a=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const r=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),a=r!=this._spherical.radius}if(Vt.setFromSpherical(this._spherical),Vt.applyQuaternion(this._quatInverse),t.copy(this.target).add(Vt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let r=null;if(this.object.isPerspectiveCamera){const o=Vt.length();r=this._clampDistance(o*this._scale);const c=o-r;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),a=!!c}else if(this.object.isOrthographicCamera){const o=new Z(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),a=c!==this.object.zoom;const l=new Z(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(o),this.object.updateMatrixWorld(),r=Vt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;r!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(r).add(this.object.position):(vr.origin.copy(this.object.position),vr.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(vr.direction))<ex?this.object.lookAt(this.target):($h.setFromNormalAndCoplanarPoint(this.object.up,this.target),vr.intersectPlane($h,this.target))))}else if(this.object.isOrthographicCamera){const r=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),r!==this.object.zoom&&(this.object.updateProjectionMatrix(),a=!0)}return this._scale=1,this._performCursorZoom=!1,a||this._lastPosition.distanceToSquared(this.object.position)>jo||8*(1-this._lastQuaternion.dot(this.object.quaternion))>jo||this._lastTargetPosition.distanceToSquared(this.target)>jo?(this.dispatchEvent(Zh),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Mn/60*this.autoRotateSpeed*e:Mn/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Vt.setFromMatrixColumn(t,0),Vt.multiplyScalar(-e),this._panOffset.add(Vt)}_panUp(e,t){this.screenSpacePanning===!0?Vt.setFromMatrixColumn(t,1):(Vt.setFromMatrixColumn(t,0),Vt.crossVectors(this.object.up,Vt)),Vt.multiplyScalar(e),this._panOffset.add(Vt)}_pan(e,t){const n=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;Vt.copy(s).sub(this.target);let a=Vt.length();a*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*a/n.clientHeight,this.object.matrix),this._panUp(2*t*a/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),s=e-n.left,a=t-n.top,r=n.width,o=n.height;this._mouse.x=s/r*2-1,this._mouse.y=-(a/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Mn*this._rotateDelta.x/t.clientHeight),this._rotateUp(Mn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(Mn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(-Mn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(Mn*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(-Mn*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(n,s)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,a=Math.sqrt(n*n+s*s);this._dollyStart.set(0,a)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),s=.5*(e.pageX+n.x),a=.5*(e.pageY+n.y);this._rotateEnd.set(s,a)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Mn*this._rotateDelta.x/t.clientHeight),this._rotateUp(Mn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,a=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,a),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const r=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(r,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Oe,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function nx(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function ix(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function sx(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(cf),this.state=bt.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function ax(i){let e;switch(i.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Ii.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=bt.DOLLY;break;case Ii.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=bt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=bt.ROTATE}break;case Ii.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=bt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=bt.PAN}break;default:this.state=bt.NONE}this.state!==bt.NONE&&this.dispatchEvent(Ml)}function rx(i){switch(this.state){case bt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case bt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case bt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function ox(i){this.enabled===!1||this.enableZoom===!1||this.state!==bt.NONE||(i.preventDefault(),this.dispatchEvent(Ml),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(cf))}function cx(i){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(i)}function lx(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case Hi.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=bt.TOUCH_ROTATE;break;case Hi.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=bt.TOUCH_PAN;break;default:this.state=bt.NONE}break;case 2:switch(this.touches.TWO){case Hi.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=bt.TOUCH_DOLLY_PAN;break;case Hi.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=bt.TOUCH_DOLLY_ROTATE;break;default:this.state=bt.NONE}break;default:this.state=bt.NONE}this.state!==bt.NONE&&this.dispatchEvent(Ml)}function hx(i){switch(this._trackPointer(i),this.state){case bt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case bt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case bt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case bt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=bt.NONE}}function ux(i){this.enabled!==!1&&i.preventDefault()}function fx(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function dx(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}class Ax extends tx{constructor(e,t){super(e,t),this.screenSpacePanning=!1,this.mouseButtons={LEFT:Ii.PAN,MIDDLE:Ii.DOLLY,RIGHT:Ii.ROTATE},this.touches={ONE:Hi.PAN,TWO:Hi.DOLLY_ROTATE}}}function Yr(i,e=!1){const t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),a={},r={},o=i[0].morphTargetsRelative,c=new xt;let l=0;for(let h=0;h<i.length;++h){const u=i[h];let f=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const m in u.attributes){if(!n.has(m))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+m+'" attribute exists among all geometries, or in none of them.'),null;a[m]===void 0&&(a[m]=[]),a[m].push(u.attributes[m]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const m in u.morphAttributes){if(!s.has(m))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;r[m]===void 0&&(r[m]=[]),r[m].push(u.morphAttributes[m])}if(e){let m;if(t)m=u.index.count;else if(u.attributes.position!==void 0)m=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,m,h),l+=m}}if(t){let h=0;const u=[];for(let f=0;f<i.length;++f){const m=i[f].index;for(let x=0;x<m.count;++x)u.push(m.getX(x)+h);h+=i[f].attributes.position.count}c.setIndex(u)}for(const h in a){const u=eu(a[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,u)}for(const h in r){const u=r[h][0].length;if(u===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let f=0;f<u;++f){const m=[];for(let _=0;_<r[h].length;++_)m.push(r[h][_][f]);const x=eu(m);if(!x)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(x)}}return c}function eu(i){let e,t,n,s=-1,a=0;for(let l=0;l<i.length;++l){const h=i[l];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;a+=h.count*t}const r=new e(a),o=new Bt(r,t,n);let c=0;for(let l=0;l<i.length;++l){const h=i[l];if(h.isInterleavedBufferAttribute){const u=c/t;for(let f=0,m=h.count;f<m;f++)for(let x=0;x<t;x++){const _=h.getComponent(f,x);o.setComponent(f+u,x,_)}}else r.set(h.array,c);c+=h.count*t}return s!==void 0&&(o.gpuType=s),o}function tu(i,e){if(e===ld)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===kc||e===Pu){let t=i.getIndex();if(t===null){const r=[],o=i.getAttribute("position");if(o!==void 0){for(let c=0;c<o.count;c++)r.push(c);i.setIndex(r),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}const n=t.count-2,s=[];if(e===kc)for(let r=1;r<=n;r++)s.push(t.getX(0)),s.push(t.getX(r)),s.push(t.getX(r+1));else for(let r=0;r<n;r++)r%2===0?(s.push(t.getX(r)),s.push(t.getX(r+1)),s.push(t.getX(r+2))):(s.push(t.getX(r+2)),s.push(t.getX(r+1)),s.push(t.getX(r)));s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const a=i.clone();return a.setIndex(s),a.clearGroups(),a}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}const Ra={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class xs{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const px=new eo(-1,1,1,-1,0,1);class mx extends xt{constructor(){super(),this.setAttribute("position",new tt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new tt([0,2,0,0,2,0],2))}}const gx=new mx;class co{constructor(e){this._mesh=new st(gx,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,px)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class lo extends xs{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof Ht?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=li.clone(e.uniforms),this.material=new Ht({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new co(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class nu extends xs{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const s=e.getContext(),a=e.state;a.buffers.color.setMask(!1),a.buffers.depth.setMask(!1),a.buffers.color.setLocked(!0),a.buffers.depth.setLocked(!0);let r,o;this.inverse?(r=0,o=1):(r=1,o=0),a.buffers.stencil.setTest(!0),a.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),a.buffers.stencil.setFunc(s.ALWAYS,r,4294967295),a.buffers.stencil.setClear(o),a.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),a.buffers.color.setLocked(!1),a.buffers.depth.setLocked(!1),a.buffers.color.setMask(!0),a.buffers.depth.setMask(!0),a.buffers.stencil.setLocked(!1),a.buffers.stencil.setFunc(s.EQUAL,1,4294967295),a.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),a.buffers.stencil.setLocked(!0)}}class bx extends xs{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class xx{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const n=e.getSize(new Oe);this._width=n.width,this._height=n.height,t=new Ln(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:an}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new lo(Ra),this.copyPass.material.blending=tn,this.clock=new Hb}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let s=0,a=this.passes.length;s<a;s++){const r=this.passes[s];if(r.enabled!==!1){if(r.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),r.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),r.needsSwap){if(n){const o=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),c.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}nu!==void 0&&(r instanceof nu?n=!0:r instanceof bx&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new Oe);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let a=0;a<this.passes.length;a++)this.passes[a].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class _x extends xs{constructor(e,t,n=null,s=null,a=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=a,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Ie}render(e,t,n){const s=e.autoClear;e.autoClear=!1;let a,r;this.overrideMaterial!==null&&(r=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(a=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(a),this.overrideMaterial!==null&&(this.scene.overrideMaterial=r),e.autoClear=s}}const Mr={defines:{PERSPECTIVE_CAMERA:1,SAMPLES:16,NORMAL_VECTOR_TYPE:1,DEPTH_SWIZZLING:"x",SCREEN_SPACE_RADIUS:0,SCREEN_SPACE_RADIUS_SCALE:100,SCENE_CLIP_BOX:0},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new Oe},cameraNear:{value:null},cameraFar:{value:null},cameraProjectionMatrix:{value:new He},cameraProjectionMatrixInverse:{value:new He},cameraWorldMatrix:{value:new He},radius:{value:.25},distanceExponent:{value:1},thickness:{value:1},distanceFallOff:{value:1},scale:{value:1},sceneBoxMin:{value:new Z(-1,-1,-1)},sceneBoxMax:{value:new Z(1,1,1)}},vertexShader:`

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
		}`},yr={defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`
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

		}`},qo={uniforms:{tDiffuse:{value:null},intensity:{value:1}},vertexShader:`
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
		}`};function Ex(i=5){const e=Math.floor(i)%2===0?Math.floor(i)+1:Math.floor(i),t=vx(e),n=t.length,s=new Uint8Array(n*4);for(let r=0;r<n;++r){const o=t[r],c=2*Math.PI*o/n,l=new Z(Math.cos(c),Math.sin(c),0).normalize();s[r*4]=(l.x*.5+.5)*255,s[r*4+1]=(l.y*.5+.5)*255,s[r*4+2]=127,s[r*4+3]=255}const a=new Ha(s,e,e);return a.wrapS=Pn,a.wrapT=Pn,a.needsUpdate=!0,a}function vx(i){const e=Math.floor(i)%2===0?Math.floor(i)+1:Math.floor(i),t=e*e,n=Array(t).fill(0);let s=Math.floor(e/2),a=e-1;for(let r=1;r<=t;){if(s===-1&&a===e?(a=e-2,s=0):(a===e&&(a=0),s<0&&(s=e-1)),n[s*e+a]!==0){a-=2,s++;continue}else n[s*e+a]=r++;a++,s--}return n}const Cr={defines:{SAMPLES:16,SAMPLE_VECTORS:lf(16,2,1),NORMAL_VECTOR_TYPE:1,DEPTH_VALUE_SOURCE:0},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new Oe},cameraProjectionMatrixInverse:{value:new He},lumaPhi:{value:5},depthPhi:{value:5},normalPhi:{value:5},radius:{value:4},index:{value:0}},vertexShader:`

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
		}`};function lf(i,e,t){const n=Mx(i,e,t);let s="vec3[SAMPLES](";for(let a=0;a<i;a++){const r=n[a];s+=`vec3(${r.x}, ${r.y}, ${r.z})${a<i-1?",":")"}`}return s}function Mx(i,e,t){const n=[];for(let s=0;s<i;s++){const a=2*Math.PI*e*s/i,r=Math.pow(s/(i-1),t);n.push(new Z(Math.cos(a),Math.sin(a),r))}return n}class yx{constructor(e=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let t=0;t<256;t++)this.p[t]=Math.floor(e.random()*256);this.perm=[];for(let t=0;t<512;t++)this.perm[t]=this.p[t&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}dot(e,t,n){return e[0]*t+e[1]*n}dot3(e,t,n,s){return e[0]*t+e[1]*n+e[2]*s}dot4(e,t,n,s,a){return e[0]*t+e[1]*n+e[2]*s+e[3]*a}noise(e,t){let n,s,a;const r=.5*(Math.sqrt(3)-1),o=(e+t)*r,c=Math.floor(e+o),l=Math.floor(t+o),h=(3-Math.sqrt(3))/6,u=(c+l)*h,f=c-u,m=l-u,x=e-f,_=t-m;let p,d;x>_?(p=1,d=0):(p=0,d=1);const C=x-p+h,y=_-d+h,M=x-1+2*h,W=_-1+2*h,V=c&255,G=l&255,ee=this.perm[V+this.perm[G]]%12,R=this.perm[V+p+this.perm[G+d]]%12,B=this.perm[V+1+this.perm[G+1]]%12;let A=.5-x*x-_*_;A<0?n=0:(A*=A,n=A*A*this.dot(this.grad3[ee],x,_));let I=.5-C*C-y*y;I<0?s=0:(I*=I,s=I*I*this.dot(this.grad3[R],C,y));let N=.5-M*M-W*W;return N<0?a=0:(N*=N,a=N*N*this.dot(this.grad3[B],M,W)),70*(n+s+a)}noise3d(e,t,n){let s,a,r,o;const l=(e+t+n)*.3333333333333333,h=Math.floor(e+l),u=Math.floor(t+l),f=Math.floor(n+l),m=1/6,x=(h+u+f)*m,_=h-x,p=u-x,d=f-x,C=e-_,y=t-p,M=n-d;let W,V,G,ee,R,B;C>=y?y>=M?(W=1,V=0,G=0,ee=1,R=1,B=0):C>=M?(W=1,V=0,G=0,ee=1,R=0,B=1):(W=0,V=0,G=1,ee=1,R=0,B=1):y<M?(W=0,V=0,G=1,ee=0,R=1,B=1):C<M?(W=0,V=1,G=0,ee=0,R=1,B=1):(W=0,V=1,G=0,ee=1,R=1,B=0);const A=C-W+m,I=y-V+m,N=M-G+m,$=C-ee+2*m,q=y-R+2*m,ae=M-B+2*m,j=C-1+3*m,K=y-1+3*m,fe=M-1+3*m,ne=h&255,oe=u&255,ge=f&255,be=this.perm[ne+this.perm[oe+this.perm[ge]]]%12,te=this.perm[ne+W+this.perm[oe+V+this.perm[ge+G]]]%12,he=this.perm[ne+ee+this.perm[oe+R+this.perm[ge+B]]]%12,ce=this.perm[ne+1+this.perm[oe+1+this.perm[ge+1]]]%12;let me=.6-C*C-y*y-M*M;me<0?s=0:(me*=me,s=me*me*this.dot3(this.grad3[be],C,y,M));let Y=.6-A*A-I*I-N*N;Y<0?a=0:(Y*=Y,a=Y*Y*this.dot3(this.grad3[te],A,I,N));let se=.6-$*$-q*q-ae*ae;se<0?r=0:(se*=se,r=se*se*this.dot3(this.grad3[he],$,q,ae));let de=.6-j*j-K*K-fe*fe;return de<0?o=0:(de*=de,o=de*de*this.dot3(this.grad3[ce],j,K,fe)),32*(s+a+r+o)}noise4d(e,t,n,s){const a=this.grad4,r=this.simplex,o=this.perm,c=(Math.sqrt(5)-1)/4,l=(5-Math.sqrt(5))/20;let h,u,f,m,x;const _=(e+t+n+s)*c,p=Math.floor(e+_),d=Math.floor(t+_),C=Math.floor(n+_),y=Math.floor(s+_),M=(p+d+C+y)*l,W=p-M,V=d-M,G=C-M,ee=y-M,R=e-W,B=t-V,A=n-G,I=s-ee,N=R>B?32:0,$=R>A?16:0,q=B>A?8:0,ae=R>I?4:0,j=B>I?2:0,K=A>I?1:0,fe=N+$+q+ae+j+K,ne=r[fe][0]>=3?1:0,oe=r[fe][1]>=3?1:0,ge=r[fe][2]>=3?1:0,be=r[fe][3]>=3?1:0,te=r[fe][0]>=2?1:0,he=r[fe][1]>=2?1:0,ce=r[fe][2]>=2?1:0,me=r[fe][3]>=2?1:0,Y=r[fe][0]>=1?1:0,se=r[fe][1]>=1?1:0,de=r[fe][2]>=1?1:0,g=r[fe][3]>=1?1:0,S=R-ne+l,F=B-oe+l,E=A-ge+l,U=I-be+l,Q=R-te+2*l,z=B-he+2*l,P=A-ce+2*l,J=I-me+2*l,k=R-Y+3*l,v=B-se+3*l,b=A-de+3*l,T=I-g+3*l,D=R-1+4*l,L=B-1+4*l,w=A-1+4*l,H=I-1+4*l,X=p&255,ue=d&255,ve=C&255,ie=y&255,Ae=o[X+o[ue+o[ve+o[ie]]]]%32,pe=o[X+ne+o[ue+oe+o[ve+ge+o[ie+be]]]]%32,Me=o[X+te+o[ue+he+o[ve+ce+o[ie+me]]]]%32,le=o[X+Y+o[ue+se+o[ve+de+o[ie+g]]]]%32,Te=o[X+1+o[ue+1+o[ve+1+o[ie+1]]]]%32;let Be=.6-R*R-B*B-A*A-I*I;Be<0?h=0:(Be*=Be,h=Be*Be*this.dot4(a[Ae],R,B,A,I));let De=.6-S*S-F*F-E*E-U*U;De<0?u=0:(De*=De,u=De*De*this.dot4(a[pe],S,F,E,U));let re=.6-Q*Q-z*z-P*P-J*J;re<0?f=0:(re*=re,f=re*re*this.dot4(a[Me],Q,z,P,J));let we=.6-k*k-v*v-b*b-T*T;we<0?m=0:(we*=we,m=we*we*this.dot4(a[le],k,v,b,T));let Ee=.6-D*D-L*L-w*w-H*H;return Ee<0?x=0:(Ee*=Ee,x=Ee*Ee*this.dot4(a[Te],D,L,w,H)),27*(h+u+f+m+x)}}class ri extends xs{constructor(e,t,n,s,a,r,o){super(),this.width=n!==void 0?n:512,this.height=s!==void 0?s:512,this.clear=!0,this.camera=t,this.scene=e,this.output=0,this._renderGBuffer=!0,this._visibilityCache=new Map,this.blendIntensity=1,this.pdRings=2,this.pdRadiusExponent=2,this.pdSamples=16,this.gtaoNoiseTexture=Ex(),this.pdNoiseTexture=this.generateNoise(),this.gtaoRenderTarget=new Ln(this.width,this.height,{type:an}),this.pdRenderTarget=this.gtaoRenderTarget.clone(),this.gtaoMaterial=new Ht({defines:Object.assign({},Mr.defines),uniforms:li.clone(Mr.uniforms),vertexShader:Mr.vertexShader,fragmentShader:Mr.fragmentShader,blending:tn,depthTest:!1,depthWrite:!1}),this.gtaoMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.gtaoMaterial.uniforms.tNoise.value=this.gtaoNoiseTexture,this.gtaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.normalMaterial=new Mb,this.normalMaterial.blending=tn,this.pdMaterial=new Ht({defines:Object.assign({},Cr.defines),uniforms:li.clone(Cr.uniforms),vertexShader:Cr.vertexShader,fragmentShader:Cr.fragmentShader,depthTest:!1,depthWrite:!1}),this.pdMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.pdMaterial.uniforms.tNoise.value=this.pdNoiseTexture,this.pdMaterial.uniforms.resolution.value.set(this.width,this.height),this.pdMaterial.uniforms.lumaPhi.value=10,this.pdMaterial.uniforms.depthPhi.value=2,this.pdMaterial.uniforms.normalPhi.value=3,this.pdMaterial.uniforms.radius.value=8,this.depthRenderMaterial=new Ht({defines:Object.assign({},yr.defines),uniforms:li.clone(yr.uniforms),vertexShader:yr.vertexShader,fragmentShader:yr.fragmentShader,blending:tn}),this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new Ht({uniforms:li.clone(Ra.uniforms),vertexShader:Ra.vertexShader,fragmentShader:Ra.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:uc,blendDst:xa,blendEquation:Zn,blendSrcAlpha:hc,blendDstAlpha:xa,blendEquationAlpha:Zn}),this.blendMaterial=new Ht({uniforms:li.clone(qo.uniforms),vertexShader:qo.vertexShader,fragmentShader:qo.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blending:xu,blendSrc:uc,blendDst:xa,blendEquation:Zn,blendSrcAlpha:hc,blendDstAlpha:xa,blendEquationAlpha:Zn}),this.fsQuad=new co(null),this.originalClearColor=new Ie,this.setGBuffer(a?a.depthTexture:void 0,a?a.normalTexture:void 0),r!==void 0&&this.updateGtaoMaterial(r),o!==void 0&&this.updatePdMaterial(o)}dispose(){this.gtaoNoiseTexture.dispose(),this.pdNoiseTexture.dispose(),this.normalRenderTarget.dispose(),this.gtaoRenderTarget.dispose(),this.pdRenderTarget.dispose(),this.normalMaterial.dispose(),this.pdMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this.fsQuad.dispose()}get gtaoMap(){return this.pdRenderTarget.texture}setGBuffer(e,t){e!==void 0?(this.depthTexture=e,this.normalTexture=t,this._renderGBuffer=!1):(this.depthTexture=new pl,this.depthTexture.format=As,this.depthTexture.type=ds,this.normalRenderTarget=new Ln(this.width,this.height,{minFilter:on,magFilter:on,type:an,depthTexture:this.depthTexture}),this.normalTexture=this.normalRenderTarget.texture,this._renderGBuffer=!0);const n=this.normalTexture?1:0,s=this.depthTexture===this.normalTexture?"w":"x";this.gtaoMaterial.defines.NORMAL_VECTOR_TYPE=n,this.gtaoMaterial.defines.DEPTH_SWIZZLING=s,this.gtaoMaterial.uniforms.tNormal.value=this.normalTexture,this.gtaoMaterial.uniforms.tDepth.value=this.depthTexture,this.pdMaterial.defines.NORMAL_VECTOR_TYPE=n,this.pdMaterial.defines.DEPTH_SWIZZLING=s,this.pdMaterial.uniforms.tNormal.value=this.normalTexture,this.pdMaterial.uniforms.tDepth.value=this.depthTexture,this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture}setSceneClipBox(e){e?(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX!==1,this.gtaoMaterial.defines.SCENE_CLIP_BOX=1,this.gtaoMaterial.uniforms.sceneBoxMin.value.copy(e.min),this.gtaoMaterial.uniforms.sceneBoxMax.value.copy(e.max)):(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX===0,this.gtaoMaterial.defines.SCENE_CLIP_BOX=0)}updateGtaoMaterial(e){e.radius!==void 0&&(this.gtaoMaterial.uniforms.radius.value=e.radius),e.distanceExponent!==void 0&&(this.gtaoMaterial.uniforms.distanceExponent.value=e.distanceExponent),e.thickness!==void 0&&(this.gtaoMaterial.uniforms.thickness.value=e.thickness),e.distanceFallOff!==void 0&&(this.gtaoMaterial.uniforms.distanceFallOff.value=e.distanceFallOff,this.gtaoMaterial.needsUpdate=!0),e.scale!==void 0&&(this.gtaoMaterial.uniforms.scale.value=e.scale),e.samples!==void 0&&e.samples!==this.gtaoMaterial.defines.SAMPLES&&(this.gtaoMaterial.defines.SAMPLES=e.samples,this.gtaoMaterial.needsUpdate=!0),e.screenSpaceRadius!==void 0&&(e.screenSpaceRadius?1:0)!==this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS&&(this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS=e.screenSpaceRadius?1:0,this.gtaoMaterial.needsUpdate=!0)}updatePdMaterial(e){let t=!1;e.lumaPhi!==void 0&&(this.pdMaterial.uniforms.lumaPhi.value=e.lumaPhi),e.depthPhi!==void 0&&(this.pdMaterial.uniforms.depthPhi.value=e.depthPhi),e.normalPhi!==void 0&&(this.pdMaterial.uniforms.normalPhi.value=e.normalPhi),e.radius!==void 0&&e.radius!==this.radius&&(this.pdMaterial.uniforms.radius.value=e.radius),e.radiusExponent!==void 0&&e.radiusExponent!==this.pdRadiusExponent&&(this.pdRadiusExponent=e.radiusExponent,t=!0),e.rings!==void 0&&e.rings!==this.pdRings&&(this.pdRings=e.rings,t=!0),e.samples!==void 0&&e.samples!==this.pdSamples&&(this.pdSamples=e.samples,t=!0),t&&(this.pdMaterial.defines.SAMPLES=this.pdSamples,this.pdMaterial.defines.SAMPLE_VECTORS=lf(this.pdSamples,this.pdRings,this.pdRadiusExponent),this.pdMaterial.needsUpdate=!0)}render(e,t,n){switch(this._renderGBuffer&&(this.overrideVisibility(),this.renderOverride(e,this.normalMaterial,this.normalRenderTarget,7829503,1),this.restoreVisibility()),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.gtaoMaterial.uniforms.cameraWorldMatrix.value.copy(this.camera.matrixWorld),this.renderPass(e,this.gtaoMaterial,this.gtaoRenderTarget,16777215,1),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.renderPass(e,this.pdMaterial,this.pdRenderTarget,16777215,1),this.output){case ri.OUTPUT.Off:break;case ri.OUTPUT.Diffuse:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=tn,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case ri.OUTPUT.AO:this.copyMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.copyMaterial.blending=tn,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case ri.OUTPUT.Denoise:this.copyMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.copyMaterial.blending=tn,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case ri.OUTPUT.Depth:this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.renderPass(e,this.depthRenderMaterial,this.renderToScreen?null:t);break;case ri.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=tn,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case ri.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=tn,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t),this.blendMaterial.uniforms.intensity.value=this.blendIntensity,this.blendMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.renderPass(e,this.blendMaterial,this.renderToScreen?null:t);break;default:console.warn("THREE.GTAOPass: Unknown output type.")}}renderPass(e,t,n,s,a){e.getClearColor(this.originalClearColor);const r=e.getClearAlpha(),o=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,s!=null&&(e.setClearColor(s),e.setClearAlpha(a||0),e.clear()),this.fsQuad.material=t,this.fsQuad.render(e),e.autoClear=o,e.setClearColor(this.originalClearColor),e.setClearAlpha(r)}renderOverride(e,t,n,s,a){e.getClearColor(this.originalClearColor);const r=e.getClearAlpha(),o=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,s=t.clearColor||s,a=t.clearAlpha||a,s!=null&&(e.setClearColor(s),e.setClearAlpha(a||0),e.clear()),this.scene.overrideMaterial=t,e.render(this.scene,this.camera),this.scene.overrideMaterial=null,e.autoClear=o,e.setClearColor(this.originalClearColor),e.setClearAlpha(r)}setSize(e,t){this.width=e,this.height=t,this.gtaoRenderTarget.setSize(e,t),this.normalRenderTarget.setSize(e,t),this.pdRenderTarget.setSize(e,t),this.gtaoMaterial.uniforms.resolution.value.set(e,t),this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.pdMaterial.uniforms.resolution.value.set(e,t),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse)}overrideVisibility(){const e=this.scene,t=this._visibilityCache;e.traverse(function(n){t.set(n,n.visible),(n.isPoints||n.isLine)&&(n.visible=!1)})}restoreVisibility(){const e=this.scene,t=this._visibilityCache;e.traverse(function(n){const s=t.get(n);n.visible=s}),t.clear()}generateNoise(e=64){const t=new yx,n=e*e*4,s=new Uint8Array(n);for(let r=0;r<e;r++)for(let o=0;o<e;o++){const c=r,l=o;s[(r*e+o)*4]=(t.noise(c,l)*.5+.5)*255,s[(r*e+o)*4+1]=(t.noise(c+e,l)*.5+.5)*255,s[(r*e+o)*4+2]=(t.noise(c,l+e)*.5+.5)*255,s[(r*e+o)*4+3]=(t.noise(c+e,l+e)*.5+.5)*255}const a=new Ha(s,e,e,jt,Wt);return a.wrapS=Pn,a.wrapT=Pn,a.needsUpdate=!0,a}}ri.OUTPUT={Off:-1,Default:0,Diffuse:1,Depth:2,Normal:3,AO:4,Denoise:5};const Cx={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Ie(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class ea extends xs{constructor(e,t,n,s){super(),this.strength=t!==void 0?t:1,this.radius=n,this.threshold=s,this.resolution=e!==void 0?new Oe(e.x,e.y):new Oe(256,256),this.clearColor=new Ie(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let a=Math.round(this.resolution.x/2),r=Math.round(this.resolution.y/2);this.renderTargetBright=new Ln(a,r,{type:an}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){const f=new Ln(a,r,{type:an});f.texture.name="UnrealBloomPass.h"+u,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);const m=new Ln(a,r,{type:an});m.texture.name="UnrealBloomPass.v"+u,m.texture.generateMipmaps=!1,this.renderTargetsVertical.push(m),a=Math.round(a/2),r=Math.round(r/2)}const o=Cx;this.highPassUniforms=li.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Ht({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];const c=[3,5,7,9,11];a=Math.round(this.resolution.x/2),r=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(c[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new Oe(1/a,1/r),a=Math.round(a/2),r=Math.round(r/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const l=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=l,this.bloomTintColors=[new Z(1,1,1),new Z(1,1,1),new Z(1,1,1),new Z(1,1,1),new Z(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const h=Ra;this.copyUniforms=li.clone(h.uniforms),this.blendMaterial=new Ht({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:oc,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Ie,this.oldClearAlpha=1,this.basic=new Wi,this.fsQuad=new co(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(n,s);for(let a=0;a<this.nMips;a++)this.renderTargetsHorizontal[a].setSize(n,s),this.renderTargetsVertical[a].setSize(n,s),this.separableBlurMaterials[a].uniforms.invSize.value=new Oe(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(e,t,n,s,a){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const r=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),a&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let o=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this.fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[c].uniforms.direction.value=ea.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[c]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=ea.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[c]),e.clear(),this.fsQuad.render(e),o=this.renderTargetsVertical[c];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,a&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=r}getSeperableBlurMaterial(e){const t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new Ht({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new Oe(.5,.5)},direction:{value:new Oe(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(e){return new Ht({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}}ea.BlurDirectionX=new Oe(1,0);ea.BlurDirectionY=new Oe(0,1);const wx={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class Sx extends xs{constructor(){super();const e=wx;this.uniforms=li.clone(e.uniforms),this.material=new vb({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new co(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},ot.getTransfer(this._outputColorSpace)===pt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===_u?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Eu?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===vu?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===sl?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===al?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Mu&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Ix{constructor(e=4){this.pool=e,this.queue=[],this.workers=[],this.workersResolve=[],this.workerStatus=0}_initWorker(e){if(!this.workers[e]){const t=this.workerCreator();t.addEventListener("message",this._onMessage.bind(this,e)),this.workers[e]=t}}_getIdleWorker(){for(let e=0;e<this.pool;e++)if(!(this.workerStatus&1<<e))return e;return-1}_onMessage(e,t){const n=this.workersResolve[e];if(n&&n(t),this.queue.length){const{resolve:s,msg:a,transfer:r}=this.queue.shift();this.workersResolve[e]=s,this.workers[e].postMessage(a,r)}else this.workerStatus^=1<<e}setWorkerCreator(e){this.workerCreator=e}setWorkerLimit(e){this.pool=e}postMessage(e,t){return new Promise(n=>{const s=this._getIdleWorker();s!==-1?(this._initWorker(s),this.workerStatus|=1<<s,this.workersResolve[s]=n,this.workers[s].postMessage(e,t)):this.queue.push({resolve:n,msg:e,transfer:t})})}dispose(){this.workers.forEach(e=>e.terminate()),this.workersResolve.length=0,this.workers.length=0,this.queue.length=0,this.workerStatus=0}}const Tx=0,iu=2,Bx=1,su=2,Rx=0,Dx=1,Lx=10,Px=0,hf=9,uf=15,ff=16,df=22,Af=37,pf=43,mf=76,gf=83,bf=97,xf=100,_f=103,Ef=109,vf=165,Mf=166,yl=1000066e3;class Ux{constructor(){this.vkFormat=0,this.typeSize=1,this.pixelWidth=0,this.pixelHeight=0,this.pixelDepth=0,this.layerCount=0,this.faceCount=1,this.supercompressionScheme=0,this.levels=[],this.dataFormatDescriptor=[{vendorId:0,descriptorType:0,descriptorBlockSize:0,versionNumber:2,colorModel:0,colorPrimaries:1,transferFunction:2,flags:0,texelBlockDimension:[0,0,0,0],bytesPlane:[0,0,0,0,0,0,0,0],samples:[]}],this.keyValue={},this.globalData=null}}class ma{constructor(e,t,n,s){this._dataView=void 0,this._littleEndian=void 0,this._offset=void 0,this._dataView=new DataView(e.buffer,e.byteOffset+t,n),this._littleEndian=s,this._offset=0}_nextUint8(){const e=this._dataView.getUint8(this._offset);return this._offset+=1,e}_nextUint16(){const e=this._dataView.getUint16(this._offset,this._littleEndian);return this._offset+=2,e}_nextUint32(){const e=this._dataView.getUint32(this._offset,this._littleEndian);return this._offset+=4,e}_nextUint64(){const e=this._dataView.getUint32(this._offset,this._littleEndian)+4294967296*this._dataView.getUint32(this._offset+4,this._littleEndian);return this._offset+=8,e}_nextInt32(){const e=this._dataView.getInt32(this._offset,this._littleEndian);return this._offset+=4,e}_nextUint8Array(e){const t=new Uint8Array(this._dataView.buffer,this._dataView.byteOffset+this._offset,e);return this._offset+=e,t}_skip(e){return this._offset+=e,this}_scan(e,t){t===void 0&&(t=0);const n=this._offset;let s=0;for(;this._dataView.getUint8(this._offset)!==t&&s<e;)s++,this._offset++;return s<e&&this._offset++,new Uint8Array(this._dataView.buffer,this._dataView.byteOffset+n,s)}}const pn=[171,75,84,88,32,50,48,187,13,10,26,10];function au(i){return new TextDecoder().decode(i)}function Fx(i){const e=new Uint8Array(i.buffer,i.byteOffset,pn.length);if(e[0]!==pn[0]||e[1]!==pn[1]||e[2]!==pn[2]||e[3]!==pn[3]||e[4]!==pn[4]||e[5]!==pn[5]||e[6]!==pn[6]||e[7]!==pn[7]||e[8]!==pn[8]||e[9]!==pn[9]||e[10]!==pn[10]||e[11]!==pn[11])throw new Error("Missing KTX 2.0 identifier.");const t=new Ux,n=17*Uint32Array.BYTES_PER_ELEMENT,s=new ma(i,pn.length,n,!0);t.vkFormat=s._nextUint32(),t.typeSize=s._nextUint32(),t.pixelWidth=s._nextUint32(),t.pixelHeight=s._nextUint32(),t.pixelDepth=s._nextUint32(),t.layerCount=s._nextUint32(),t.faceCount=s._nextUint32();const a=s._nextUint32();t.supercompressionScheme=s._nextUint32();const r=s._nextUint32(),o=s._nextUint32(),c=s._nextUint32(),l=s._nextUint32(),h=s._nextUint64(),u=s._nextUint64(),f=new ma(i,pn.length+n,3*a*8,!0);for(let j=0;j<a;j++)t.levels.push({levelData:new Uint8Array(i.buffer,i.byteOffset+f._nextUint64(),f._nextUint64()),uncompressedByteLength:f._nextUint64()});const m=new ma(i,r,o,!0),x={vendorId:m._skip(4)._nextUint16(),descriptorType:m._nextUint16(),versionNumber:m._nextUint16(),descriptorBlockSize:m._nextUint16(),colorModel:m._nextUint8(),colorPrimaries:m._nextUint8(),transferFunction:m._nextUint8(),flags:m._nextUint8(),texelBlockDimension:[m._nextUint8(),m._nextUint8(),m._nextUint8(),m._nextUint8()],bytesPlane:[m._nextUint8(),m._nextUint8(),m._nextUint8(),m._nextUint8(),m._nextUint8(),m._nextUint8(),m._nextUint8(),m._nextUint8()],samples:[]},_=(x.descriptorBlockSize/4-6)/4;for(let j=0;j<_;j++){const K={bitOffset:m._nextUint16(),bitLength:m._nextUint8(),channelType:m._nextUint8(),samplePosition:[m._nextUint8(),m._nextUint8(),m._nextUint8(),m._nextUint8()],sampleLower:-1/0,sampleUpper:1/0};64&K.channelType?(K.sampleLower=m._nextInt32(),K.sampleUpper=m._nextInt32()):(K.sampleLower=m._nextUint32(),K.sampleUpper=m._nextUint32()),x.samples[j]=K}t.dataFormatDescriptor.length=0,t.dataFormatDescriptor.push(x);const p=new ma(i,c,l,!0);for(;p._offset<l;){const j=p._nextUint32(),K=p._scan(j),fe=au(K);if(t.keyValue[fe]=p._nextUint8Array(j-K.byteLength-1),fe.match(/^ktx/i)){const ne=au(t.keyValue[fe]);t.keyValue[fe]=ne.substring(0,ne.lastIndexOf("\0"))}p._skip(j%4?4-j%4:0)}if(u<=0)return t;const d=new ma(i,h,u,!0),C=d._nextUint16(),y=d._nextUint16(),M=d._nextUint32(),W=d._nextUint32(),V=d._nextUint32(),G=d._nextUint32(),ee=[];for(let j=0;j<a;j++)ee.push({imageFlags:d._nextUint32(),rgbSliceByteOffset:d._nextUint32(),rgbSliceByteLength:d._nextUint32(),alphaSliceByteOffset:d._nextUint32(),alphaSliceByteLength:d._nextUint32()});const R=h+d._offset,B=R+M,A=B+W,I=A+V,N=new Uint8Array(i.buffer,i.byteOffset+R,M),$=new Uint8Array(i.buffer,i.byteOffset+B,W),q=new Uint8Array(i.buffer,i.byteOffset+A,V),ae=new Uint8Array(i.buffer,i.byteOffset+I,G);return t.globalData={endpointCount:C,selectorCount:y,imageDescs:ee,endpointsData:N,selectorsData:$,tablesData:q,extendedData:ae},t}let Yo,Mi,jc;const Xo={env:{emscripten_notify_memory_growth:function(i){jc=new Uint8Array(Mi.exports.memory.buffer)}}};class Nx{init(){return Yo||(Yo=typeof fetch<"u"?fetch("data:application/wasm;base64,"+ru).then(e=>e.arrayBuffer()).then(e=>WebAssembly.instantiate(e,Xo)).then(this._init):WebAssembly.instantiate(Buffer.from(ru,"base64"),Xo).then(this._init),Yo)}_init(e){Mi=e.instance,Xo.env.emscripten_notify_memory_growth(0)}decode(e,t=0){if(!Mi)throw new Error("ZSTDDecoder: Await .init() before decoding.");const n=e.byteLength,s=Mi.exports.malloc(n);jc.set(e,s),t=t||Number(Mi.exports.ZSTD_findDecompressedSize(s,n));const a=Mi.exports.malloc(t),r=Mi.exports.ZSTD_decompress(a,t,s,n),o=jc.slice(a,a+r);return Mi.exports.free(s),Mi.exports.free(a),o}}const ru="AGFzbQEAAAABpQEVYAF/AX9gAn9/AGADf39/AX9gBX9/f39/AX9gAX8AYAJ/fwF/YAR/f39/AX9gA39/fwBgBn9/f39/fwF/YAd/f39/f39/AX9gAn9/AX5gAn5+AX5gAABgBX9/f39/AGAGf39/f39/AGAIf39/f39/f38AYAl/f39/f39/f38AYAABf2AIf39/f39/f38Bf2ANf39/f39/f39/f39/fwF/YAF/AX4CJwEDZW52H2Vtc2NyaXB0ZW5fbm90aWZ5X21lbW9yeV9ncm93dGgABANpaAEFAAAFAgEFCwACAQABAgIFBQcAAwABDgsBAQcAEhMHAAUBDAQEAAANBwQCAgYCBAgDAwMDBgEACQkHBgICAAYGAgQUBwYGAwIGAAMCAQgBBwUGCgoEEQAEBAEIAwgDBQgDEA8IAAcABAUBcAECAgUEAQCAAgYJAX8BQaCgwAILB2AHBm1lbW9yeQIABm1hbGxvYwAoBGZyZWUAJgxaU1REX2lzRXJyb3IAaBlaU1REX2ZpbmREZWNvbXByZXNzZWRTaXplAFQPWlNURF9kZWNvbXByZXNzAEoGX3N0YXJ0ACQJBwEAQQELASQKussBaA8AIAAgACgCBCABajYCBAsZACAAKAIAIAAoAgRBH3F0QQAgAWtBH3F2CwgAIABBiH9LC34BBH9BAyEBIAAoAgQiA0EgTQRAIAAoAggiASAAKAIQTwRAIAAQDQ8LIAAoAgwiAiABRgRAQQFBAiADQSBJGw8LIAAgASABIAJrIANBA3YiBCABIARrIAJJIgEbIgJrIgQ2AgggACADIAJBA3RrNgIEIAAgBCgAADYCAAsgAQsUAQF/IAAgARACIQIgACABEAEgAgv3AQECfyACRQRAIABCADcCACAAQQA2AhAgAEIANwIIQbh/DwsgACABNgIMIAAgAUEEajYCECACQQRPBEAgACABIAJqIgFBfGoiAzYCCCAAIAMoAAA2AgAgAUF/ai0AACIBBEAgAEEIIAEQFGs2AgQgAg8LIABBADYCBEF/DwsgACABNgIIIAAgAS0AACIDNgIAIAJBfmoiBEEBTQRAIARBAWtFBEAgACABLQACQRB0IANyIgM2AgALIAAgAS0AAUEIdCADajYCAAsgASACakF/ai0AACIBRQRAIABBADYCBEFsDwsgAEEoIAEQFCACQQN0ams2AgQgAgsWACAAIAEpAAA3AAAgACABKQAINwAICy8BAX8gAUECdEGgHWooAgAgACgCAEEgIAEgACgCBGprQR9xdnEhAiAAIAEQASACCyEAIAFCz9bTvtLHq9lCfiAAfEIfiUKHla+vmLbem55/fgsdAQF/IAAoAgggACgCDEYEfyAAKAIEQSBGBUEACwuCBAEDfyACQYDAAE8EQCAAIAEgAhBnIAAPCyAAIAJqIQMCQCAAIAFzQQNxRQRAAkAgAkEBSARAIAAhAgwBCyAAQQNxRQRAIAAhAgwBCyAAIQIDQCACIAEtAAA6AAAgAUEBaiEBIAJBAWoiAiADTw0BIAJBA3ENAAsLAkAgA0F8cSIEQcAASQ0AIAIgBEFAaiIFSw0AA0AgAiABKAIANgIAIAIgASgCBDYCBCACIAEoAgg2AgggAiABKAIMNgIMIAIgASgCEDYCECACIAEoAhQ2AhQgAiABKAIYNgIYIAIgASgCHDYCHCACIAEoAiA2AiAgAiABKAIkNgIkIAIgASgCKDYCKCACIAEoAiw2AiwgAiABKAIwNgIwIAIgASgCNDYCNCACIAEoAjg2AjggAiABKAI8NgI8IAFBQGshASACQUBrIgIgBU0NAAsLIAIgBE8NAQNAIAIgASgCADYCACABQQRqIQEgAkEEaiICIARJDQALDAELIANBBEkEQCAAIQIMAQsgA0F8aiIEIABJBEAgACECDAELIAAhAgNAIAIgAS0AADoAACACIAEtAAE6AAEgAiABLQACOgACIAIgAS0AAzoAAyABQQRqIQEgAkEEaiICIARNDQALCyACIANJBEADQCACIAEtAAA6AAAgAUEBaiEBIAJBAWoiAiADRw0ACwsgAAsMACAAIAEpAAA3AAALQQECfyAAKAIIIgEgACgCEEkEQEEDDwsgACAAKAIEIgJBB3E2AgQgACABIAJBA3ZrIgE2AgggACABKAAANgIAQQALDAAgACABKAIANgAAC/cCAQJ/AkAgACABRg0AAkAgASACaiAASwRAIAAgAmoiBCABSw0BCyAAIAEgAhALDwsgACABc0EDcSEDAkACQCAAIAFJBEAgAwRAIAAhAwwDCyAAQQNxRQRAIAAhAwwCCyAAIQMDQCACRQ0EIAMgAS0AADoAACABQQFqIQEgAkF/aiECIANBAWoiA0EDcQ0ACwwBCwJAIAMNACAEQQNxBEADQCACRQ0FIAAgAkF/aiICaiIDIAEgAmotAAA6AAAgA0EDcQ0ACwsgAkEDTQ0AA0AgACACQXxqIgJqIAEgAmooAgA2AgAgAkEDSw0ACwsgAkUNAgNAIAAgAkF/aiICaiABIAJqLQAAOgAAIAINAAsMAgsgAkEDTQ0AIAIhBANAIAMgASgCADYCACABQQRqIQEgA0EEaiEDIARBfGoiBEEDSw0ACyACQQNxIQILIAJFDQADQCADIAEtAAA6AAAgA0EBaiEDIAFBAWohASACQX9qIgINAAsLIAAL8wICAn8BfgJAIAJFDQAgACACaiIDQX9qIAE6AAAgACABOgAAIAJBA0kNACADQX5qIAE6AAAgACABOgABIANBfWogAToAACAAIAE6AAIgAkEHSQ0AIANBfGogAToAACAAIAE6AAMgAkEJSQ0AIABBACAAa0EDcSIEaiIDIAFB/wFxQYGChAhsIgE2AgAgAyACIARrQXxxIgRqIgJBfGogATYCACAEQQlJDQAgAyABNgIIIAMgATYCBCACQXhqIAE2AgAgAkF0aiABNgIAIARBGUkNACADIAE2AhggAyABNgIUIAMgATYCECADIAE2AgwgAkFwaiABNgIAIAJBbGogATYCACACQWhqIAE2AgAgAkFkaiABNgIAIAQgA0EEcUEYciIEayICQSBJDQAgAa0iBUIghiAFhCEFIAMgBGohAQNAIAEgBTcDGCABIAU3AxAgASAFNwMIIAEgBTcDACABQSBqIQEgAkFgaiICQR9LDQALCyAACy8BAn8gACgCBCAAKAIAQQJ0aiICLQACIQMgACACLwEAIAEgAi0AAxAIajYCACADCy8BAn8gACgCBCAAKAIAQQJ0aiICLQACIQMgACACLwEAIAEgAi0AAxAFajYCACADCx8AIAAgASACKAIEEAg2AgAgARAEGiAAIAJBCGo2AgQLCAAgAGdBH3MLugUBDX8jAEEQayIKJAACfyAEQQNNBEAgCkEANgIMIApBDGogAyAEEAsaIAAgASACIApBDGpBBBAVIgBBbCAAEAMbIAAgACAESxsMAQsgAEEAIAEoAgBBAXRBAmoQECENQVQgAygAACIGQQ9xIgBBCksNABogAiAAQQVqNgIAIAMgBGoiAkF8aiEMIAJBeWohDiACQXtqIRAgAEEGaiELQQQhBSAGQQR2IQRBICAAdCIAQQFyIQkgASgCACEPQQAhAiADIQYCQANAIAlBAkggAiAPS3JFBEAgAiEHAkAgCARAA0AgBEH//wNxQf//A0YEQCAHQRhqIQcgBiAQSQR/IAZBAmoiBigAACAFdgUgBUEQaiEFIARBEHYLIQQMAQsLA0AgBEEDcSIIQQNGBEAgBUECaiEFIARBAnYhBCAHQQNqIQcMAQsLIAcgCGoiByAPSw0EIAVBAmohBQNAIAIgB0kEQCANIAJBAXRqQQA7AQAgAkEBaiECDAELCyAGIA5LQQAgBiAFQQN1aiIHIAxLG0UEQCAHKAAAIAVBB3EiBXYhBAwCCyAEQQJ2IQQLIAYhBwsCfyALQX9qIAQgAEF/anEiBiAAQQF0QX9qIgggCWsiEUkNABogBCAIcSIEQQAgESAEIABIG2shBiALCyEIIA0gAkEBdGogBkF/aiIEOwEAIAlBASAGayAEIAZBAUgbayEJA0AgCSAASARAIABBAXUhACALQX9qIQsMAQsLAn8gByAOS0EAIAcgBSAIaiIFQQN1aiIGIAxLG0UEQCAFQQdxDAELIAUgDCIGIAdrQQN0awshBSACQQFqIQIgBEUhCCAGKAAAIAVBH3F2IQQMAQsLQWwgCUEBRyAFQSBKcg0BGiABIAJBf2o2AgAgBiAFQQdqQQN1aiADawwBC0FQCyEAIApBEGokACAACwkAQQFBBSAAGwsMACAAIAEoAAA2AAALqgMBCn8jAEHwAGsiCiQAIAJBAWohDiAAQQhqIQtBgIAEIAVBf2p0QRB1IQxBACECQQEhBkEBIAV0IglBf2oiDyEIA0AgAiAORkUEQAJAIAEgAkEBdCINai8BACIHQf//A0YEQCALIAhBA3RqIAI2AgQgCEF/aiEIQQEhBwwBCyAGQQAgDCAHQRB0QRB1ShshBgsgCiANaiAHOwEAIAJBAWohAgwBCwsgACAFNgIEIAAgBjYCACAJQQN2IAlBAXZqQQNqIQxBACEAQQAhBkEAIQIDQCAGIA5GBEADQAJAIAAgCUYNACAKIAsgAEEDdGoiASgCBCIGQQF0aiICIAIvAQAiAkEBajsBACABIAUgAhAUayIIOgADIAEgAiAIQf8BcXQgCWs7AQAgASAEIAZBAnQiAmooAgA6AAIgASACIANqKAIANgIEIABBAWohAAwBCwsFIAEgBkEBdGouAQAhDUEAIQcDQCAHIA1ORQRAIAsgAkEDdGogBjYCBANAIAIgDGogD3EiAiAISw0ACyAHQQFqIQcMAQsLIAZBAWohBgwBCwsgCkHwAGokAAsjAEIAIAEQCSAAhUKHla+vmLbem55/fkLj3MqV/M7y9YV/fAsQACAAQn43AwggACABNgIACyQBAX8gAARAIAEoAgQiAgRAIAEoAgggACACEQEADwsgABAmCwsfACAAIAEgAi8BABAINgIAIAEQBBogACACQQRqNgIEC0oBAX9BoCAoAgAiASAAaiIAQX9MBEBBiCBBMDYCAEF/DwsCQCAAPwBBEHRNDQAgABBmDQBBiCBBMDYCAEF/DwtBoCAgADYCACABC9cBAQh/Qbp/IQoCQCACKAIEIgggAigCACIJaiIOIAEgAGtLDQBBbCEKIAkgBCADKAIAIgtrSw0AIAAgCWoiBCACKAIIIgxrIQ0gACABQWBqIg8gCyAJQQAQKSADIAkgC2o2AgACQAJAIAwgBCAFa00EQCANIQUMAQsgDCAEIAZrSw0CIAcgDSAFayIAaiIBIAhqIAdNBEAgBCABIAgQDxoMAgsgBCABQQAgAGsQDyEBIAIgACAIaiIINgIEIAEgAGshBAsgBCAPIAUgCEEBECkLIA4hCgsgCgubAgEBfyMAQYABayINJAAgDSADNgJ8AkAgAkEDSwRAQX8hCQwBCwJAAkACQAJAIAJBAWsOAwADAgELIAZFBEBBuH8hCQwEC0FsIQkgBS0AACICIANLDQMgACAHIAJBAnQiAmooAgAgAiAIaigCABA7IAEgADYCAEEBIQkMAwsgASAJNgIAQQAhCQwCCyAKRQRAQWwhCQwCC0EAIQkgC0UgDEEZSHINAUEIIAR0QQhqIQBBACECA0AgAiAATw0CIAJBQGshAgwAAAsAC0FsIQkgDSANQfwAaiANQfgAaiAFIAYQFSICEAMNACANKAJ4IgMgBEsNACAAIA0gDSgCfCAHIAggAxAYIAEgADYCACACIQkLIA1BgAFqJAAgCQsLACAAIAEgAhALGgsQACAALwAAIAAtAAJBEHRyCy8AAn9BuH8gAUEISQ0AGkFyIAAoAAQiAEF3Sw0AGkG4fyAAQQhqIgAgACABSxsLCwkAIAAgATsAAAsDAAELigYBBX8gACAAKAIAIgVBfnE2AgBBACAAIAVBAXZqQYQgKAIAIgQgAEYbIQECQAJAIAAoAgQiAkUNACACKAIAIgNBAXENACACQQhqIgUgA0EBdkF4aiIDQQggA0EISxtnQR9zQQJ0QYAfaiIDKAIARgRAIAMgAigCDDYCAAsgAigCCCIDBEAgAyACKAIMNgIECyACKAIMIgMEQCADIAIoAgg2AgALIAIgAigCACAAKAIAQX5xajYCAEGEICEAAkACQCABRQ0AIAEgAjYCBCABKAIAIgNBAXENASADQQF2QXhqIgNBCCADQQhLG2dBH3NBAnRBgB9qIgMoAgAgAUEIakYEQCADIAEoAgw2AgALIAEoAggiAwRAIAMgASgCDDYCBAsgASgCDCIDBEAgAyABKAIINgIAQYQgKAIAIQQLIAIgAigCACABKAIAQX5xajYCACABIARGDQAgASABKAIAQQF2akEEaiEACyAAIAI2AgALIAIoAgBBAXZBeGoiAEEIIABBCEsbZ0Efc0ECdEGAH2oiASgCACEAIAEgBTYCACACIAA2AgwgAkEANgIIIABFDQEgACAFNgIADwsCQCABRQ0AIAEoAgAiAkEBcQ0AIAJBAXZBeGoiAkEIIAJBCEsbZ0Efc0ECdEGAH2oiAigCACABQQhqRgRAIAIgASgCDDYCAAsgASgCCCICBEAgAiABKAIMNgIECyABKAIMIgIEQCACIAEoAgg2AgBBhCAoAgAhBAsgACAAKAIAIAEoAgBBfnFqIgI2AgACQCABIARHBEAgASABKAIAQQF2aiAANgIEIAAoAgAhAgwBC0GEICAANgIACyACQQF2QXhqIgFBCCABQQhLG2dBH3NBAnRBgB9qIgIoAgAhASACIABBCGoiAjYCACAAIAE2AgwgAEEANgIIIAFFDQEgASACNgIADwsgBUEBdkF4aiIBQQggAUEISxtnQR9zQQJ0QYAfaiICKAIAIQEgAiAAQQhqIgI2AgAgACABNgIMIABBADYCCCABRQ0AIAEgAjYCAAsLDgAgAARAIABBeGoQJQsLgAIBA38CQCAAQQ9qQXhxQYQgKAIAKAIAQQF2ayICEB1Bf0YNAAJAQYQgKAIAIgAoAgAiAUEBcQ0AIAFBAXZBeGoiAUEIIAFBCEsbZ0Efc0ECdEGAH2oiASgCACAAQQhqRgRAIAEgACgCDDYCAAsgACgCCCIBBEAgASAAKAIMNgIECyAAKAIMIgFFDQAgASAAKAIINgIAC0EBIQEgACAAKAIAIAJBAXRqIgI2AgAgAkEBcQ0AIAJBAXZBeGoiAkEIIAJBCEsbZ0Efc0ECdEGAH2oiAygCACECIAMgAEEIaiIDNgIAIAAgAjYCDCAAQQA2AgggAkUNACACIAM2AgALIAELtwIBA38CQAJAIABBASAAGyICEDgiAA0AAkACQEGEICgCACIARQ0AIAAoAgAiA0EBcQ0AIAAgA0EBcjYCACADQQF2QXhqIgFBCCABQQhLG2dBH3NBAnRBgB9qIgEoAgAgAEEIakYEQCABIAAoAgw2AgALIAAoAggiAQRAIAEgACgCDDYCBAsgACgCDCIBBEAgASAAKAIINgIACyACECchAkEAIQFBhCAoAgAhACACDQEgACAAKAIAQX5xNgIAQQAPCyACQQ9qQXhxIgMQHSICQX9GDQIgAkEHakF4cSIAIAJHBEAgACACaxAdQX9GDQMLAkBBhCAoAgAiAUUEQEGAICAANgIADAELIAAgATYCBAtBhCAgADYCACAAIANBAXRBAXI2AgAMAQsgAEUNAQsgAEEIaiEBCyABC7kDAQJ/IAAgA2ohBQJAIANBB0wEQANAIAAgBU8NAiAAIAItAAA6AAAgAEEBaiEAIAJBAWohAgwAAAsACyAEQQFGBEACQCAAIAJrIgZBB00EQCAAIAItAAA6AAAgACACLQABOgABIAAgAi0AAjoAAiAAIAItAAM6AAMgAEEEaiACIAZBAnQiBkHAHmooAgBqIgIQFyACIAZB4B5qKAIAayECDAELIAAgAhAMCyACQQhqIQIgAEEIaiEACwJAAkACQAJAIAUgAU0EQCAAIANqIQEgBEEBRyAAIAJrQQ9Kcg0BA0AgACACEAwgAkEIaiECIABBCGoiACABSQ0ACwwFCyAAIAFLBEAgACEBDAQLIARBAUcgACACa0EPSnINASAAIQMgAiEEA0AgAyAEEAwgBEEIaiEEIANBCGoiAyABSQ0ACwwCCwNAIAAgAhAHIAJBEGohAiAAQRBqIgAgAUkNAAsMAwsgACEDIAIhBANAIAMgBBAHIARBEGohBCADQRBqIgMgAUkNAAsLIAIgASAAa2ohAgsDQCABIAVPDQEgASACLQAAOgAAIAFBAWohASACQQFqIQIMAAALAAsLQQECfyAAIAAoArjgASIDNgLE4AEgACgCvOABIQQgACABNgK84AEgACABIAJqNgK44AEgACABIAQgA2tqNgLA4AELpgEBAX8gACAAKALs4QEQFjYCyOABIABCADcD+OABIABCADcDuOABIABBwOABakIANwMAIABBqNAAaiIBQYyAgOAANgIAIABBADYCmOIBIABCADcDiOEBIABCAzcDgOEBIABBrNABakHgEikCADcCACAAQbTQAWpB6BIoAgA2AgAgACABNgIMIAAgAEGYIGo2AgggACAAQaAwajYCBCAAIABBEGo2AgALYQEBf0G4fyEDAkAgAUEDSQ0AIAIgABAhIgFBA3YiADYCCCACIAFBAXE2AgQgAiABQQF2QQNxIgM2AgACQCADQX9qIgFBAksNAAJAIAFBAWsOAgEAAgtBbA8LIAAhAwsgAwsMACAAIAEgAkEAEC4LiAQCA38CfiADEBYhBCAAQQBBKBAQIQAgBCACSwRAIAQPCyABRQRAQX8PCwJAAkAgA0EBRg0AIAEoAAAiBkGo6r5pRg0AQXYhAyAGQXBxQdDUtMIBRw0BQQghAyACQQhJDQEgAEEAQSgQECEAIAEoAAQhASAAQQE2AhQgACABrTcDAEEADwsgASACIAMQLyIDIAJLDQAgACADNgIYQXIhAyABIARqIgVBf2otAAAiAkEIcQ0AIAJBIHEiBkUEQEFwIQMgBS0AACIFQacBSw0BIAVBB3GtQgEgBUEDdkEKaq2GIgdCA4h+IAd8IQggBEEBaiEECyACQQZ2IQMgAkECdiEFAkAgAkEDcUF/aiICQQJLBEBBACECDAELAkACQAJAIAJBAWsOAgECAAsgASAEai0AACECIARBAWohBAwCCyABIARqLwAAIQIgBEECaiEEDAELIAEgBGooAAAhAiAEQQRqIQQLIAVBAXEhBQJ+AkACQAJAIANBf2oiA0ECTQRAIANBAWsOAgIDAQtCfyAGRQ0DGiABIARqMQAADAMLIAEgBGovAACtQoACfAwCCyABIARqKAAArQwBCyABIARqKQAACyEHIAAgBTYCICAAIAI2AhwgACAHNwMAQQAhAyAAQQA2AhQgACAHIAggBhsiBzcDCCAAIAdCgIAIIAdCgIAIVBs+AhALIAMLWwEBf0G4fyEDIAIQFiICIAFNBH8gACACakF/ai0AACIAQQNxQQJ0QaAeaigCACACaiAAQQZ2IgFBAnRBsB5qKAIAaiAAQSBxIgBFaiABRSAAQQV2cWoFQbh/CwsdACAAKAKQ4gEQWiAAQQA2AqDiASAAQgA3A5DiAQu1AwEFfyMAQZACayIKJABBuH8hBgJAIAVFDQAgBCwAACIIQf8BcSEHAkAgCEF/TARAIAdBgn9qQQF2IgggBU8NAkFsIQYgB0GBf2oiBUGAAk8NAiAEQQFqIQdBACEGA0AgBiAFTwRAIAUhBiAIIQcMAwUgACAGaiAHIAZBAXZqIgQtAABBBHY6AAAgACAGQQFyaiAELQAAQQ9xOgAAIAZBAmohBgwBCwAACwALIAcgBU8NASAAIARBAWogByAKEFMiBhADDQELIAYhBEEAIQYgAUEAQTQQECEJQQAhBQNAIAQgBkcEQCAAIAZqIggtAAAiAUELSwRAQWwhBgwDBSAJIAFBAnRqIgEgASgCAEEBajYCACAGQQFqIQZBASAILQAAdEEBdSAFaiEFDAILAAsLQWwhBiAFRQ0AIAUQFEEBaiIBQQxLDQAgAyABNgIAQQFBASABdCAFayIDEBQiAXQgA0cNACAAIARqIAFBAWoiADoAACAJIABBAnRqIgAgACgCAEEBajYCACAJKAIEIgBBAkkgAEEBcXINACACIARBAWo2AgAgB0EBaiEGCyAKQZACaiQAIAYLxhEBDH8jAEHwAGsiBSQAQWwhCwJAIANBCkkNACACLwAAIQogAi8AAiEJIAIvAAQhByAFQQhqIAQQDgJAIAMgByAJIApqakEGaiIMSQ0AIAUtAAohCCAFQdgAaiACQQZqIgIgChAGIgsQAw0BIAVBQGsgAiAKaiICIAkQBiILEAMNASAFQShqIAIgCWoiAiAHEAYiCxADDQEgBUEQaiACIAdqIAMgDGsQBiILEAMNASAAIAFqIg9BfWohECAEQQRqIQZBASELIAAgAUEDakECdiIDaiIMIANqIgIgA2oiDiEDIAIhBCAMIQcDQCALIAMgEElxBEAgACAGIAVB2ABqIAgQAkECdGoiCS8BADsAACAFQdgAaiAJLQACEAEgCS0AAyELIAcgBiAFQUBrIAgQAkECdGoiCS8BADsAACAFQUBrIAktAAIQASAJLQADIQogBCAGIAVBKGogCBACQQJ0aiIJLwEAOwAAIAVBKGogCS0AAhABIAktAAMhCSADIAYgBUEQaiAIEAJBAnRqIg0vAQA7AAAgBUEQaiANLQACEAEgDS0AAyENIAAgC2oiCyAGIAVB2ABqIAgQAkECdGoiAC8BADsAACAFQdgAaiAALQACEAEgAC0AAyEAIAcgCmoiCiAGIAVBQGsgCBACQQJ0aiIHLwEAOwAAIAVBQGsgBy0AAhABIActAAMhByAEIAlqIgkgBiAFQShqIAgQAkECdGoiBC8BADsAACAFQShqIAQtAAIQASAELQADIQQgAyANaiIDIAYgBUEQaiAIEAJBAnRqIg0vAQA7AAAgBUEQaiANLQACEAEgACALaiEAIAcgCmohByAEIAlqIQQgAyANLQADaiEDIAVB2ABqEA0gBUFAaxANciAFQShqEA1yIAVBEGoQDXJFIQsMAQsLIAQgDksgByACS3INAEFsIQsgACAMSw0BIAxBfWohCQNAQQAgACAJSSAFQdgAahAEGwRAIAAgBiAFQdgAaiAIEAJBAnRqIgovAQA7AAAgBUHYAGogCi0AAhABIAAgCi0AA2oiACAGIAVB2ABqIAgQAkECdGoiCi8BADsAACAFQdgAaiAKLQACEAEgACAKLQADaiEADAEFIAxBfmohCgNAIAVB2ABqEAQgACAKS3JFBEAgACAGIAVB2ABqIAgQAkECdGoiCS8BADsAACAFQdgAaiAJLQACEAEgACAJLQADaiEADAELCwNAIAAgCk0EQCAAIAYgBUHYAGogCBACQQJ0aiIJLwEAOwAAIAVB2ABqIAktAAIQASAAIAktAANqIQAMAQsLAkAgACAMTw0AIAAgBiAFQdgAaiAIEAIiAEECdGoiDC0AADoAACAMLQADQQFGBEAgBUHYAGogDC0AAhABDAELIAUoAlxBH0sNACAFQdgAaiAGIABBAnRqLQACEAEgBSgCXEEhSQ0AIAVBIDYCXAsgAkF9aiEMA0BBACAHIAxJIAVBQGsQBBsEQCAHIAYgBUFAayAIEAJBAnRqIgAvAQA7AAAgBUFAayAALQACEAEgByAALQADaiIAIAYgBUFAayAIEAJBAnRqIgcvAQA7AAAgBUFAayAHLQACEAEgACAHLQADaiEHDAEFIAJBfmohDANAIAVBQGsQBCAHIAxLckUEQCAHIAYgBUFAayAIEAJBAnRqIgAvAQA7AAAgBUFAayAALQACEAEgByAALQADaiEHDAELCwNAIAcgDE0EQCAHIAYgBUFAayAIEAJBAnRqIgAvAQA7AAAgBUFAayAALQACEAEgByAALQADaiEHDAELCwJAIAcgAk8NACAHIAYgBUFAayAIEAIiAEECdGoiAi0AADoAACACLQADQQFGBEAgBUFAayACLQACEAEMAQsgBSgCREEfSw0AIAVBQGsgBiAAQQJ0ai0AAhABIAUoAkRBIUkNACAFQSA2AkQLIA5BfWohAgNAQQAgBCACSSAFQShqEAQbBEAgBCAGIAVBKGogCBACQQJ0aiIALwEAOwAAIAVBKGogAC0AAhABIAQgAC0AA2oiACAGIAVBKGogCBACQQJ0aiIELwEAOwAAIAVBKGogBC0AAhABIAAgBC0AA2ohBAwBBSAOQX5qIQIDQCAFQShqEAQgBCACS3JFBEAgBCAGIAVBKGogCBACQQJ0aiIALwEAOwAAIAVBKGogAC0AAhABIAQgAC0AA2ohBAwBCwsDQCAEIAJNBEAgBCAGIAVBKGogCBACQQJ0aiIALwEAOwAAIAVBKGogAC0AAhABIAQgAC0AA2ohBAwBCwsCQCAEIA5PDQAgBCAGIAVBKGogCBACIgBBAnRqIgItAAA6AAAgAi0AA0EBRgRAIAVBKGogAi0AAhABDAELIAUoAixBH0sNACAFQShqIAYgAEECdGotAAIQASAFKAIsQSFJDQAgBUEgNgIsCwNAQQAgAyAQSSAFQRBqEAQbBEAgAyAGIAVBEGogCBACQQJ0aiIALwEAOwAAIAVBEGogAC0AAhABIAMgAC0AA2oiACAGIAVBEGogCBACQQJ0aiICLwEAOwAAIAVBEGogAi0AAhABIAAgAi0AA2ohAwwBBSAPQX5qIQIDQCAFQRBqEAQgAyACS3JFBEAgAyAGIAVBEGogCBACQQJ0aiIALwEAOwAAIAVBEGogAC0AAhABIAMgAC0AA2ohAwwBCwsDQCADIAJNBEAgAyAGIAVBEGogCBACQQJ0aiIALwEAOwAAIAVBEGogAC0AAhABIAMgAC0AA2ohAwwBCwsCQCADIA9PDQAgAyAGIAVBEGogCBACIgBBAnRqIgItAAA6AAAgAi0AA0EBRgRAIAVBEGogAi0AAhABDAELIAUoAhRBH0sNACAFQRBqIAYgAEECdGotAAIQASAFKAIUQSFJDQAgBUEgNgIUCyABQWwgBUHYAGoQCiAFQUBrEApxIAVBKGoQCnEgBUEQahAKcRshCwwJCwAACwALAAALAAsAAAsACwAACwALQWwhCwsgBUHwAGokACALC7UEAQ5/IwBBEGsiBiQAIAZBBGogABAOQVQhBQJAIARB3AtJDQAgBi0ABCEHIANB8ARqQQBB7AAQECEIIAdBDEsNACADQdwJaiIJIAggBkEIaiAGQQxqIAEgAhAxIhAQA0UEQCAGKAIMIgQgB0sNASADQdwFaiEPIANBpAVqIREgAEEEaiESIANBqAVqIQEgBCEFA0AgBSICQX9qIQUgCCACQQJ0aigCAEUNAAsgAkEBaiEOQQEhBQNAIAUgDk9FBEAgCCAFQQJ0IgtqKAIAIQwgASALaiAKNgIAIAVBAWohBSAKIAxqIQoMAQsLIAEgCjYCAEEAIQUgBigCCCELA0AgBSALRkUEQCABIAUgCWotAAAiDEECdGoiDSANKAIAIg1BAWo2AgAgDyANQQF0aiINIAw6AAEgDSAFOgAAIAVBAWohBQwBCwtBACEBIANBADYCqAUgBEF/cyAHaiEJQQEhBQNAIAUgDk9FBEAgCCAFQQJ0IgtqKAIAIQwgAyALaiABNgIAIAwgBSAJanQgAWohASAFQQFqIQUMAQsLIAcgBEEBaiIBIAJrIgRrQQFqIQgDQEEBIQUgBCAIT0UEQANAIAUgDk9FBEAgBUECdCIJIAMgBEE0bGpqIAMgCWooAgAgBHY2AgAgBUEBaiEFDAELCyAEQQFqIQQMAQsLIBIgByAPIAogESADIAIgARBkIAZBAToABSAGIAc6AAYgACAGKAIENgIACyAQIQULIAZBEGokACAFC8ENAQt/IwBB8ABrIgUkAEFsIQkCQCADQQpJDQAgAi8AACEKIAIvAAIhDCACLwAEIQYgBUEIaiAEEA4CQCADIAYgCiAMampBBmoiDUkNACAFLQAKIQcgBUHYAGogAkEGaiICIAoQBiIJEAMNASAFQUBrIAIgCmoiAiAMEAYiCRADDQEgBUEoaiACIAxqIgIgBhAGIgkQAw0BIAVBEGogAiAGaiADIA1rEAYiCRADDQEgACABaiIOQX1qIQ8gBEEEaiEGQQEhCSAAIAFBA2pBAnYiAmoiCiACaiIMIAJqIg0hAyAMIQQgCiECA0AgCSADIA9JcQRAIAYgBUHYAGogBxACQQF0aiIILQAAIQsgBUHYAGogCC0AARABIAAgCzoAACAGIAVBQGsgBxACQQF0aiIILQAAIQsgBUFAayAILQABEAEgAiALOgAAIAYgBUEoaiAHEAJBAXRqIggtAAAhCyAFQShqIAgtAAEQASAEIAs6AAAgBiAFQRBqIAcQAkEBdGoiCC0AACELIAVBEGogCC0AARABIAMgCzoAACAGIAVB2ABqIAcQAkEBdGoiCC0AACELIAVB2ABqIAgtAAEQASAAIAs6AAEgBiAFQUBrIAcQAkEBdGoiCC0AACELIAVBQGsgCC0AARABIAIgCzoAASAGIAVBKGogBxACQQF0aiIILQAAIQsgBUEoaiAILQABEAEgBCALOgABIAYgBUEQaiAHEAJBAXRqIggtAAAhCyAFQRBqIAgtAAEQASADIAs6AAEgA0ECaiEDIARBAmohBCACQQJqIQIgAEECaiEAIAkgBUHYAGoQDUVxIAVBQGsQDUVxIAVBKGoQDUVxIAVBEGoQDUVxIQkMAQsLIAQgDUsgAiAMS3INAEFsIQkgACAKSw0BIApBfWohCQNAIAVB2ABqEAQgACAJT3JFBEAgBiAFQdgAaiAHEAJBAXRqIggtAAAhCyAFQdgAaiAILQABEAEgACALOgAAIAYgBUHYAGogBxACQQF0aiIILQAAIQsgBUHYAGogCC0AARABIAAgCzoAASAAQQJqIQAMAQsLA0AgBUHYAGoQBCAAIApPckUEQCAGIAVB2ABqIAcQAkEBdGoiCS0AACEIIAVB2ABqIAktAAEQASAAIAg6AAAgAEEBaiEADAELCwNAIAAgCkkEQCAGIAVB2ABqIAcQAkEBdGoiCS0AACEIIAVB2ABqIAktAAEQASAAIAg6AAAgAEEBaiEADAELCyAMQX1qIQADQCAFQUBrEAQgAiAAT3JFBEAgBiAFQUBrIAcQAkEBdGoiCi0AACEJIAVBQGsgCi0AARABIAIgCToAACAGIAVBQGsgBxACQQF0aiIKLQAAIQkgBUFAayAKLQABEAEgAiAJOgABIAJBAmohAgwBCwsDQCAFQUBrEAQgAiAMT3JFBEAgBiAFQUBrIAcQAkEBdGoiAC0AACEKIAVBQGsgAC0AARABIAIgCjoAACACQQFqIQIMAQsLA0AgAiAMSQRAIAYgBUFAayAHEAJBAXRqIgAtAAAhCiAFQUBrIAAtAAEQASACIAo6AAAgAkEBaiECDAELCyANQX1qIQADQCAFQShqEAQgBCAAT3JFBEAgBiAFQShqIAcQAkEBdGoiAi0AACEKIAVBKGogAi0AARABIAQgCjoAACAGIAVBKGogBxACQQF0aiICLQAAIQogBUEoaiACLQABEAEgBCAKOgABIARBAmohBAwBCwsDQCAFQShqEAQgBCANT3JFBEAgBiAFQShqIAcQAkEBdGoiAC0AACECIAVBKGogAC0AARABIAQgAjoAACAEQQFqIQQMAQsLA0AgBCANSQRAIAYgBUEoaiAHEAJBAXRqIgAtAAAhAiAFQShqIAAtAAEQASAEIAI6AAAgBEEBaiEEDAELCwNAIAVBEGoQBCADIA9PckUEQCAGIAVBEGogBxACQQF0aiIALQAAIQIgBUEQaiAALQABEAEgAyACOgAAIAYgBUEQaiAHEAJBAXRqIgAtAAAhAiAFQRBqIAAtAAEQASADIAI6AAEgA0ECaiEDDAELCwNAIAVBEGoQBCADIA5PckUEQCAGIAVBEGogBxACQQF0aiIALQAAIQIgBUEQaiAALQABEAEgAyACOgAAIANBAWohAwwBCwsDQCADIA5JBEAgBiAFQRBqIAcQAkEBdGoiAC0AACECIAVBEGogAC0AARABIAMgAjoAACADQQFqIQMMAQsLIAFBbCAFQdgAahAKIAVBQGsQCnEgBUEoahAKcSAFQRBqEApxGyEJDAELQWwhCQsgBUHwAGokACAJC8oCAQR/IwBBIGsiBSQAIAUgBBAOIAUtAAIhByAFQQhqIAIgAxAGIgIQA0UEQCAEQQRqIQIgACABaiIDQX1qIQQDQCAFQQhqEAQgACAET3JFBEAgAiAFQQhqIAcQAkEBdGoiBi0AACEIIAVBCGogBi0AARABIAAgCDoAACACIAVBCGogBxACQQF0aiIGLQAAIQggBUEIaiAGLQABEAEgACAIOgABIABBAmohAAwBCwsDQCAFQQhqEAQgACADT3JFBEAgAiAFQQhqIAcQAkEBdGoiBC0AACEGIAVBCGogBC0AARABIAAgBjoAACAAQQFqIQAMAQsLA0AgACADT0UEQCACIAVBCGogBxACQQF0aiIELQAAIQYgBUEIaiAELQABEAEgACAGOgAAIABBAWohAAwBCwsgAUFsIAVBCGoQChshAgsgBUEgaiQAIAILtgMBCX8jAEEQayIGJAAgBkEANgIMIAZBADYCCEFUIQQCQAJAIANBQGsiDCADIAZBCGogBkEMaiABIAIQMSICEAMNACAGQQRqIAAQDiAGKAIMIgcgBi0ABEEBaksNASAAQQRqIQogBkEAOgAFIAYgBzoABiAAIAYoAgQ2AgAgB0EBaiEJQQEhBANAIAQgCUkEQCADIARBAnRqIgEoAgAhACABIAU2AgAgACAEQX9qdCAFaiEFIARBAWohBAwBCwsgB0EBaiEHQQAhBSAGKAIIIQkDQCAFIAlGDQEgAyAFIAxqLQAAIgRBAnRqIgBBASAEdEEBdSILIAAoAgAiAWoiADYCACAHIARrIQhBACEEAkAgC0EDTQRAA0AgBCALRg0CIAogASAEakEBdGoiACAIOgABIAAgBToAACAEQQFqIQQMAAALAAsDQCABIABPDQEgCiABQQF0aiIEIAg6AAEgBCAFOgAAIAQgCDoAAyAEIAU6AAIgBCAIOgAFIAQgBToABCAEIAg6AAcgBCAFOgAGIAFBBGohAQwAAAsACyAFQQFqIQUMAAALAAsgAiEECyAGQRBqJAAgBAutAQECfwJAQYQgKAIAIABHIAAoAgBBAXYiAyABa0F4aiICQXhxQQhHcgR/IAIFIAMQJ0UNASACQQhqC0EQSQ0AIAAgACgCACICQQFxIAAgAWpBD2pBeHEiASAAa0EBdHI2AgAgASAANgIEIAEgASgCAEEBcSAAIAJBAXZqIAFrIgJBAXRyNgIAQYQgIAEgAkH/////B3FqQQRqQYQgKAIAIABGGyABNgIAIAEQJQsLygIBBX8CQAJAAkAgAEEIIABBCEsbZ0EfcyAAaUEBR2oiAUEESSAAIAF2cg0AIAFBAnRB/B5qKAIAIgJFDQADQCACQXhqIgMoAgBBAXZBeGoiBSAATwRAIAIgBUEIIAVBCEsbZ0Efc0ECdEGAH2oiASgCAEYEQCABIAIoAgQ2AgALDAMLIARBHksNASAEQQFqIQQgAigCBCICDQALC0EAIQMgAUEgTw0BA0AgAUECdEGAH2ooAgAiAkUEQCABQR5LIQIgAUEBaiEBIAJFDQEMAwsLIAIgAkF4aiIDKAIAQQF2QXhqIgFBCCABQQhLG2dBH3NBAnRBgB9qIgEoAgBGBEAgASACKAIENgIACwsgAigCACIBBEAgASACKAIENgIECyACKAIEIgEEQCABIAIoAgA2AgALIAMgAygCAEEBcjYCACADIAAQNwsgAwvhCwINfwV+IwBB8ABrIgckACAHIAAoAvDhASIINgJcIAEgAmohDSAIIAAoAoDiAWohDwJAAkAgBUUEQCABIQQMAQsgACgCxOABIRAgACgCwOABIREgACgCvOABIQ4gAEEBNgKM4QFBACEIA0AgCEEDRwRAIAcgCEECdCICaiAAIAJqQazQAWooAgA2AkQgCEEBaiEIDAELC0FsIQwgB0EYaiADIAQQBhADDQEgB0EsaiAHQRhqIAAoAgAQEyAHQTRqIAdBGGogACgCCBATIAdBPGogB0EYaiAAKAIEEBMgDUFgaiESIAEhBEEAIQwDQCAHKAIwIAcoAixBA3RqKQIAIhRCEIinQf8BcSEIIAcoAkAgBygCPEEDdGopAgAiFUIQiKdB/wFxIQsgBygCOCAHKAI0QQN0aikCACIWQiCIpyEJIBVCIIghFyAUQiCIpyECAkAgFkIQiKdB/wFxIgNBAk8EQAJAIAZFIANBGUlyRQRAIAkgB0EYaiADQSAgBygCHGsiCiAKIANLGyIKEAUgAyAKayIDdGohCSAHQRhqEAQaIANFDQEgB0EYaiADEAUgCWohCQwBCyAHQRhqIAMQBSAJaiEJIAdBGGoQBBoLIAcpAkQhGCAHIAk2AkQgByAYNwNIDAELAkAgA0UEQCACBEAgBygCRCEJDAMLIAcoAkghCQwBCwJAAkAgB0EYakEBEAUgCSACRWpqIgNBA0YEQCAHKAJEQX9qIgMgA0VqIQkMAQsgA0ECdCAHaigCRCIJIAlFaiEJIANBAUYNAQsgByAHKAJINgJMCwsgByAHKAJENgJIIAcgCTYCRAsgF6chAyALBEAgB0EYaiALEAUgA2ohAwsgCCALakEUTwRAIAdBGGoQBBoLIAgEQCAHQRhqIAgQBSACaiECCyAHQRhqEAQaIAcgB0EYaiAUQhiIp0H/AXEQCCAUp0H//wNxajYCLCAHIAdBGGogFUIYiKdB/wFxEAggFadB//8DcWo2AjwgB0EYahAEGiAHIAdBGGogFkIYiKdB/wFxEAggFqdB//8DcWo2AjQgByACNgJgIAcoAlwhCiAHIAk2AmggByADNgJkAkACQAJAIAQgAiADaiILaiASSw0AIAIgCmoiEyAPSw0AIA0gBGsgC0Egak8NAQsgByAHKQNoNwMQIAcgBykDYDcDCCAEIA0gB0EIaiAHQdwAaiAPIA4gESAQEB4hCwwBCyACIARqIQggBCAKEAcgAkERTwRAIARBEGohAgNAIAIgCkEQaiIKEAcgAkEQaiICIAhJDQALCyAIIAlrIQIgByATNgJcIAkgCCAOa0sEQCAJIAggEWtLBEBBbCELDAILIBAgAiAOayICaiIKIANqIBBNBEAgCCAKIAMQDxoMAgsgCCAKQQAgAmsQDyEIIAcgAiADaiIDNgJkIAggAmshCCAOIQILIAlBEE8EQCADIAhqIQMDQCAIIAIQByACQRBqIQIgCEEQaiIIIANJDQALDAELAkAgCUEHTQRAIAggAi0AADoAACAIIAItAAE6AAEgCCACLQACOgACIAggAi0AAzoAAyAIQQRqIAIgCUECdCIDQcAeaigCAGoiAhAXIAIgA0HgHmooAgBrIQIgBygCZCEDDAELIAggAhAMCyADQQlJDQAgAyAIaiEDIAhBCGoiCCACQQhqIgJrQQ9MBEADQCAIIAIQDCACQQhqIQIgCEEIaiIIIANJDQAMAgALAAsDQCAIIAIQByACQRBqIQIgCEEQaiIIIANJDQALCyAHQRhqEAQaIAsgDCALEAMiAhshDCAEIAQgC2ogAhshBCAFQX9qIgUNAAsgDBADDQFBbCEMIAdBGGoQBEECSQ0BQQAhCANAIAhBA0cEQCAAIAhBAnQiAmpBrNABaiACIAdqKAJENgIAIAhBAWohCAwBCwsgBygCXCEIC0G6fyEMIA8gCGsiACANIARrSw0AIAQEfyAEIAggABALIABqBUEACyABayEMCyAHQfAAaiQAIAwLkRcCFn8FfiMAQdABayIHJAAgByAAKALw4QEiCDYCvAEgASACaiESIAggACgCgOIBaiETAkACQCAFRQRAIAEhAwwBCyAAKALE4AEhESAAKALA4AEhFSAAKAK84AEhDyAAQQE2AozhAUEAIQgDQCAIQQNHBEAgByAIQQJ0IgJqIAAgAmpBrNABaigCADYCVCAIQQFqIQgMAQsLIAcgETYCZCAHIA82AmAgByABIA9rNgJoQWwhECAHQShqIAMgBBAGEAMNASAFQQQgBUEESBshFyAHQTxqIAdBKGogACgCABATIAdBxABqIAdBKGogACgCCBATIAdBzABqIAdBKGogACgCBBATQQAhBCAHQeAAaiEMIAdB5ABqIQoDQCAHQShqEARBAksgBCAXTnJFBEAgBygCQCAHKAI8QQN0aikCACIdQhCIp0H/AXEhCyAHKAJQIAcoAkxBA3RqKQIAIh5CEIinQf8BcSEJIAcoAkggBygCREEDdGopAgAiH0IgiKchCCAeQiCIISAgHUIgiKchAgJAIB9CEIinQf8BcSIDQQJPBEACQCAGRSADQRlJckUEQCAIIAdBKGogA0EgIAcoAixrIg0gDSADSxsiDRAFIAMgDWsiA3RqIQggB0EoahAEGiADRQ0BIAdBKGogAxAFIAhqIQgMAQsgB0EoaiADEAUgCGohCCAHQShqEAQaCyAHKQJUISEgByAINgJUIAcgITcDWAwBCwJAIANFBEAgAgRAIAcoAlQhCAwDCyAHKAJYIQgMAQsCQAJAIAdBKGpBARAFIAggAkVqaiIDQQNGBEAgBygCVEF/aiIDIANFaiEIDAELIANBAnQgB2ooAlQiCCAIRWohCCADQQFGDQELIAcgBygCWDYCXAsLIAcgBygCVDYCWCAHIAg2AlQLICCnIQMgCQRAIAdBKGogCRAFIANqIQMLIAkgC2pBFE8EQCAHQShqEAQaCyALBEAgB0EoaiALEAUgAmohAgsgB0EoahAEGiAHIAcoAmggAmoiCSADajYCaCAKIAwgCCAJSxsoAgAhDSAHIAdBKGogHUIYiKdB/wFxEAggHadB//8DcWo2AjwgByAHQShqIB5CGIinQf8BcRAIIB6nQf//A3FqNgJMIAdBKGoQBBogB0EoaiAfQhiIp0H/AXEQCCEOIAdB8ABqIARBBHRqIgsgCSANaiAIazYCDCALIAg2AgggCyADNgIEIAsgAjYCACAHIA4gH6dB//8DcWo2AkQgBEEBaiEEDAELCyAEIBdIDQEgEkFgaiEYIAdB4ABqIRogB0HkAGohGyABIQMDQCAHQShqEARBAksgBCAFTnJFBEAgBygCQCAHKAI8QQN0aikCACIdQhCIp0H/AXEhCyAHKAJQIAcoAkxBA3RqKQIAIh5CEIinQf8BcSEIIAcoAkggBygCREEDdGopAgAiH0IgiKchCSAeQiCIISAgHUIgiKchDAJAIB9CEIinQf8BcSICQQJPBEACQCAGRSACQRlJckUEQCAJIAdBKGogAkEgIAcoAixrIgogCiACSxsiChAFIAIgCmsiAnRqIQkgB0EoahAEGiACRQ0BIAdBKGogAhAFIAlqIQkMAQsgB0EoaiACEAUgCWohCSAHQShqEAQaCyAHKQJUISEgByAJNgJUIAcgITcDWAwBCwJAIAJFBEAgDARAIAcoAlQhCQwDCyAHKAJYIQkMAQsCQAJAIAdBKGpBARAFIAkgDEVqaiICQQNGBEAgBygCVEF/aiICIAJFaiEJDAELIAJBAnQgB2ooAlQiCSAJRWohCSACQQFGDQELIAcgBygCWDYCXAsLIAcgBygCVDYCWCAHIAk2AlQLICCnIRQgCARAIAdBKGogCBAFIBRqIRQLIAggC2pBFE8EQCAHQShqEAQaCyALBEAgB0EoaiALEAUgDGohDAsgB0EoahAEGiAHIAcoAmggDGoiGSAUajYCaCAbIBogCSAZSxsoAgAhHCAHIAdBKGogHUIYiKdB/wFxEAggHadB//8DcWo2AjwgByAHQShqIB5CGIinQf8BcRAIIB6nQf//A3FqNgJMIAdBKGoQBBogByAHQShqIB9CGIinQf8BcRAIIB+nQf//A3FqNgJEIAcgB0HwAGogBEEDcUEEdGoiDSkDCCIdNwPIASAHIA0pAwAiHjcDwAECQAJAAkAgBygCvAEiDiAepyICaiIWIBNLDQAgAyAHKALEASIKIAJqIgtqIBhLDQAgEiADayALQSBqTw0BCyAHIAcpA8gBNwMQIAcgBykDwAE3AwggAyASIAdBCGogB0G8AWogEyAPIBUgERAeIQsMAQsgAiADaiEIIAMgDhAHIAJBEU8EQCADQRBqIQIDQCACIA5BEGoiDhAHIAJBEGoiAiAISQ0ACwsgCCAdpyIOayECIAcgFjYCvAEgDiAIIA9rSwRAIA4gCCAVa0sEQEFsIQsMAgsgESACIA9rIgJqIhYgCmogEU0EQCAIIBYgChAPGgwCCyAIIBZBACACaxAPIQggByACIApqIgo2AsQBIAggAmshCCAPIQILIA5BEE8EQCAIIApqIQoDQCAIIAIQByACQRBqIQIgCEEQaiIIIApJDQALDAELAkAgDkEHTQRAIAggAi0AADoAACAIIAItAAE6AAEgCCACLQACOgACIAggAi0AAzoAAyAIQQRqIAIgDkECdCIKQcAeaigCAGoiAhAXIAIgCkHgHmooAgBrIQIgBygCxAEhCgwBCyAIIAIQDAsgCkEJSQ0AIAggCmohCiAIQQhqIgggAkEIaiICa0EPTARAA0AgCCACEAwgAkEIaiECIAhBCGoiCCAKSQ0ADAIACwALA0AgCCACEAcgAkEQaiECIAhBEGoiCCAKSQ0ACwsgCxADBEAgCyEQDAQFIA0gDDYCACANIBkgHGogCWs2AgwgDSAJNgIIIA0gFDYCBCAEQQFqIQQgAyALaiEDDAILAAsLIAQgBUgNASAEIBdrIQtBACEEA0AgCyAFSARAIAcgB0HwAGogC0EDcUEEdGoiAikDCCIdNwPIASAHIAIpAwAiHjcDwAECQAJAAkAgBygCvAEiDCAepyICaiIKIBNLDQAgAyAHKALEASIJIAJqIhBqIBhLDQAgEiADayAQQSBqTw0BCyAHIAcpA8gBNwMgIAcgBykDwAE3AxggAyASIAdBGGogB0G8AWogEyAPIBUgERAeIRAMAQsgAiADaiEIIAMgDBAHIAJBEU8EQCADQRBqIQIDQCACIAxBEGoiDBAHIAJBEGoiAiAISQ0ACwsgCCAdpyIGayECIAcgCjYCvAEgBiAIIA9rSwRAIAYgCCAVa0sEQEFsIRAMAgsgESACIA9rIgJqIgwgCWogEU0EQCAIIAwgCRAPGgwCCyAIIAxBACACaxAPIQggByACIAlqIgk2AsQBIAggAmshCCAPIQILIAZBEE8EQCAIIAlqIQYDQCAIIAIQByACQRBqIQIgCEEQaiIIIAZJDQALDAELAkAgBkEHTQRAIAggAi0AADoAACAIIAItAAE6AAEgCCACLQACOgACIAggAi0AAzoAAyAIQQRqIAIgBkECdCIGQcAeaigCAGoiAhAXIAIgBkHgHmooAgBrIQIgBygCxAEhCQwBCyAIIAIQDAsgCUEJSQ0AIAggCWohBiAIQQhqIgggAkEIaiICa0EPTARAA0AgCCACEAwgAkEIaiECIAhBCGoiCCAGSQ0ADAIACwALA0AgCCACEAcgAkEQaiECIAhBEGoiCCAGSQ0ACwsgEBADDQMgC0EBaiELIAMgEGohAwwBCwsDQCAEQQNHBEAgACAEQQJ0IgJqQazQAWogAiAHaigCVDYCACAEQQFqIQQMAQsLIAcoArwBIQgLQbp/IRAgEyAIayIAIBIgA2tLDQAgAwR/IAMgCCAAEAsgAGoFQQALIAFrIRALIAdB0AFqJAAgEAslACAAQgA3AgAgAEEAOwEIIABBADoACyAAIAE2AgwgACACOgAKC7QFAQN/IwBBMGsiBCQAIABB/wFqIgVBfWohBgJAIAMvAQIEQCAEQRhqIAEgAhAGIgIQAw0BIARBEGogBEEYaiADEBwgBEEIaiAEQRhqIAMQHCAAIQMDQAJAIARBGGoQBCADIAZPckUEQCADIARBEGogBEEYahASOgAAIAMgBEEIaiAEQRhqEBI6AAEgBEEYahAERQ0BIANBAmohAwsgBUF+aiEFAn8DQEG6fyECIAMiASAFSw0FIAEgBEEQaiAEQRhqEBI6AAAgAUEBaiEDIARBGGoQBEEDRgRAQQIhAiAEQQhqDAILIAMgBUsNBSABIARBCGogBEEYahASOgABIAFBAmohA0EDIQIgBEEYahAEQQNHDQALIARBEGoLIQUgAyAFIARBGGoQEjoAACABIAJqIABrIQIMAwsgAyAEQRBqIARBGGoQEjoAAiADIARBCGogBEEYahASOgADIANBBGohAwwAAAsACyAEQRhqIAEgAhAGIgIQAw0AIARBEGogBEEYaiADEBwgBEEIaiAEQRhqIAMQHCAAIQMDQAJAIARBGGoQBCADIAZPckUEQCADIARBEGogBEEYahAROgAAIAMgBEEIaiAEQRhqEBE6AAEgBEEYahAERQ0BIANBAmohAwsgBUF+aiEFAn8DQEG6fyECIAMiASAFSw0EIAEgBEEQaiAEQRhqEBE6AAAgAUEBaiEDIARBGGoQBEEDRgRAQQIhAiAEQQhqDAILIAMgBUsNBCABIARBCGogBEEYahAROgABIAFBAmohA0EDIQIgBEEYahAEQQNHDQALIARBEGoLIQUgAyAFIARBGGoQEToAACABIAJqIABrIQIMAgsgAyAEQRBqIARBGGoQEToAAiADIARBCGogBEEYahAROgADIANBBGohAwwAAAsACyAEQTBqJAAgAgtpAQF/An8CQAJAIAJBB00NACABKAAAQbfIwuF+Rw0AIAAgASgABDYCmOIBQWIgAEEQaiABIAIQPiIDEAMNAhogAEKBgICAEDcDiOEBIAAgASADaiACIANrECoMAQsgACABIAIQKgtBAAsLrQMBBn8jAEGAAWsiAyQAQWIhCAJAIAJBCUkNACAAQZjQAGogAUEIaiIEIAJBeGogAEGY0AAQMyIFEAMiBg0AIANBHzYCfCADIANB/ABqIANB+ABqIAQgBCAFaiAGGyIEIAEgAmoiAiAEaxAVIgUQAw0AIAMoAnwiBkEfSw0AIAMoAngiB0EJTw0AIABBiCBqIAMgBkGAC0GADCAHEBggA0E0NgJ8IAMgA0H8AGogA0H4AGogBCAFaiIEIAIgBGsQFSIFEAMNACADKAJ8IgZBNEsNACADKAJ4IgdBCk8NACAAQZAwaiADIAZBgA1B4A4gBxAYIANBIzYCfCADIANB/ABqIANB+ABqIAQgBWoiBCACIARrEBUiBRADDQAgAygCfCIGQSNLDQAgAygCeCIHQQpPDQAgACADIAZBwBBB0BEgBxAYIAQgBWoiBEEMaiIFIAJLDQAgAiAFayEFQQAhAgNAIAJBA0cEQCAEKAAAIgZBf2ogBU8NAiAAIAJBAnRqQZzQAWogBjYCACACQQFqIQIgBEEEaiEEDAELCyAEIAFrIQgLIANBgAFqJAAgCAtGAQN/IABBCGohAyAAKAIEIQJBACEAA0AgACACdkUEQCABIAMgAEEDdGotAAJBFktqIQEgAEEBaiEADAELCyABQQggAmt0C4YDAQV/Qbh/IQcCQCADRQ0AIAItAAAiBEUEQCABQQA2AgBBAUG4fyADQQFGGw8LAn8gAkEBaiIFIARBGHRBGHUiBkF/Sg0AGiAGQX9GBEAgA0EDSA0CIAUvAABBgP4BaiEEIAJBA2oMAQsgA0ECSA0BIAItAAEgBEEIdHJBgIB+aiEEIAJBAmoLIQUgASAENgIAIAVBAWoiASACIANqIgNLDQBBbCEHIABBEGogACAFLQAAIgVBBnZBI0EJIAEgAyABa0HAEEHQEUHwEiAAKAKM4QEgACgCnOIBIAQQHyIGEAMiCA0AIABBmCBqIABBCGogBUEEdkEDcUEfQQggASABIAZqIAgbIgEgAyABa0GAC0GADEGAFyAAKAKM4QEgACgCnOIBIAQQHyIGEAMiCA0AIABBoDBqIABBBGogBUECdkEDcUE0QQkgASABIAZqIAgbIgEgAyABa0GADUHgDkGQGSAAKAKM4QEgACgCnOIBIAQQHyIAEAMNACAAIAFqIAJrIQcLIAcLrQMBCn8jAEGABGsiCCQAAn9BUiACQf8BSw0AGkFUIANBDEsNABogAkEBaiELIABBBGohCUGAgAQgA0F/anRBEHUhCkEAIQJBASEEQQEgA3QiB0F/aiIMIQUDQCACIAtGRQRAAkAgASACQQF0Ig1qLwEAIgZB//8DRgRAIAkgBUECdGogAjoAAiAFQX9qIQVBASEGDAELIARBACAKIAZBEHRBEHVKGyEECyAIIA1qIAY7AQAgAkEBaiECDAELCyAAIAQ7AQIgACADOwEAIAdBA3YgB0EBdmpBA2ohBkEAIQRBACECA0AgBCALRkUEQCABIARBAXRqLgEAIQpBACEAA0AgACAKTkUEQCAJIAJBAnRqIAQ6AAIDQCACIAZqIAxxIgIgBUsNAAsgAEEBaiEADAELCyAEQQFqIQQMAQsLQX8gAg0AGkEAIQIDfyACIAdGBH9BAAUgCCAJIAJBAnRqIgAtAAJBAXRqIgEgAS8BACIBQQFqOwEAIAAgAyABEBRrIgU6AAMgACABIAVB/wFxdCAHazsBACACQQFqIQIMAQsLCyEFIAhBgARqJAAgBQvjBgEIf0FsIQcCQCACQQNJDQACQAJAAkACQCABLQAAIgNBA3EiCUEBaw4DAwEAAgsgACgCiOEBDQBBYg8LIAJBBUkNAkEDIQYgASgAACEFAn8CQAJAIANBAnZBA3EiCEF+aiIEQQFNBEAgBEEBaw0BDAILIAVBDnZB/wdxIQQgBUEEdkH/B3EhAyAIRQwCCyAFQRJ2IQRBBCEGIAVBBHZB//8AcSEDQQAMAQsgBUEEdkH//w9xIgNBgIAISw0DIAEtAARBCnQgBUEWdnIhBEEFIQZBAAshBSAEIAZqIgogAksNAgJAIANBgQZJDQAgACgCnOIBRQ0AQQAhAgNAIAJBg4ABSw0BIAJBQGshAgwAAAsACwJ/IAlBA0YEQCABIAZqIQEgAEHw4gFqIQIgACgCDCEGIAUEQCACIAMgASAEIAYQXwwCCyACIAMgASAEIAYQXQwBCyAAQbjQAWohAiABIAZqIQEgAEHw4gFqIQYgAEGo0ABqIQggBQRAIAggBiADIAEgBCACEF4MAQsgCCAGIAMgASAEIAIQXAsQAw0CIAAgAzYCgOIBIABBATYCiOEBIAAgAEHw4gFqNgLw4QEgCUECRgRAIAAgAEGo0ABqNgIMCyAAIANqIgBBiOMBakIANwAAIABBgOMBakIANwAAIABB+OIBakIANwAAIABB8OIBakIANwAAIAoPCwJ/AkACQAJAIANBAnZBA3FBf2oiBEECSw0AIARBAWsOAgACAQtBASEEIANBA3YMAgtBAiEEIAEvAABBBHYMAQtBAyEEIAEQIUEEdgsiAyAEaiIFQSBqIAJLBEAgBSACSw0CIABB8OIBaiABIARqIAMQCyEBIAAgAzYCgOIBIAAgATYC8OEBIAEgA2oiAEIANwAYIABCADcAECAAQgA3AAggAEIANwAAIAUPCyAAIAM2AoDiASAAIAEgBGo2AvDhASAFDwsCfwJAAkACQCADQQJ2QQNxQX9qIgRBAksNACAEQQFrDgIAAgELQQEhByADQQN2DAILQQIhByABLwAAQQR2DAELIAJBBEkgARAhIgJBj4CAAUtyDQFBAyEHIAJBBHYLIQIgAEHw4gFqIAEgB2otAAAgAkEgahAQIQEgACACNgKA4gEgACABNgLw4QEgB0EBaiEHCyAHC0sAIABC+erQ0OfJoeThADcDICAAQgA3AxggAELP1tO+0ser2UI3AxAgAELW64Lu6v2J9eAANwMIIABCADcDACAAQShqQQBBKBAQGgviAgICfwV+IABBKGoiASAAKAJIaiECAn4gACkDACIDQiBaBEAgACkDECIEQgeJIAApAwgiBUIBiXwgACkDGCIGQgyJfCAAKQMgIgdCEol8IAUQGSAEEBkgBhAZIAcQGQwBCyAAKQMYQsXP2bLx5brqJ3wLIAN8IQMDQCABQQhqIgAgAk0EQEIAIAEpAAAQCSADhUIbiUKHla+vmLbem55/fkLj3MqV/M7y9YV/fCEDIAAhAQwBCwsCQCABQQRqIgAgAksEQCABIQAMAQsgASgAAK1Ch5Wvr5i23puef34gA4VCF4lCz9bTvtLHq9lCfkL5893xmfaZqxZ8IQMLA0AgACACSQRAIAAxAABCxc/ZsvHluuonfiADhUILiUKHla+vmLbem55/fiEDIABBAWohAAwBCwsgA0IhiCADhULP1tO+0ser2UJ+IgNCHYggA4VC+fPd8Zn2masWfiIDQiCIIAOFC+8CAgJ/BH4gACAAKQMAIAKtfDcDAAJAAkAgACgCSCIDIAJqIgRBH00EQCABRQ0BIAAgA2pBKGogASACECAgACgCSCACaiEEDAELIAEgAmohAgJ/IAMEQCAAQShqIgQgA2ogAUEgIANrECAgACAAKQMIIAQpAAAQCTcDCCAAIAApAxAgACkAMBAJNwMQIAAgACkDGCAAKQA4EAk3AxggACAAKQMgIABBQGspAAAQCTcDICAAKAJIIQMgAEEANgJIIAEgA2tBIGohAQsgAUEgaiACTQsEQCACQWBqIQMgACkDICEFIAApAxghBiAAKQMQIQcgACkDCCEIA0AgCCABKQAAEAkhCCAHIAEpAAgQCSEHIAYgASkAEBAJIQYgBSABKQAYEAkhBSABQSBqIgEgA00NAAsgACAFNwMgIAAgBjcDGCAAIAc3AxAgACAINwMICyABIAJPDQEgAEEoaiABIAIgAWsiBBAgCyAAIAQ2AkgLCy8BAX8gAEUEQEG2f0EAIAMbDwtBun8hBCADIAFNBH8gACACIAMQEBogAwVBun8LCy8BAX8gAEUEQEG2f0EAIAMbDwtBun8hBCADIAFNBH8gACACIAMQCxogAwVBun8LC6gCAQZ/IwBBEGsiByQAIABB2OABaikDAEKAgIAQViEIQbh/IQUCQCAEQf//B0sNACAAIAMgBBBCIgUQAyIGDQAgACgCnOIBIQkgACAHQQxqIAMgAyAFaiAGGyIKIARBACAFIAYbayIGEEAiAxADBEAgAyEFDAELIAcoAgwhBCABRQRAQbp/IQUgBEEASg0BCyAGIANrIQUgAyAKaiEDAkAgCQRAIABBADYCnOIBDAELAkACQAJAIARBBUgNACAAQdjgAWopAwBCgICACFgNAAwBCyAAQQA2ApziAQwBCyAAKAIIED8hBiAAQQA2ApziASAGQRRPDQELIAAgASACIAMgBSAEIAgQOSEFDAELIAAgASACIAMgBSAEIAgQOiEFCyAHQRBqJAAgBQtnACAAQdDgAWogASACIAAoAuzhARAuIgEQAwRAIAEPC0G4fyECAkAgAQ0AIABB7OABaigCACIBBEBBYCECIAAoApjiASABRw0BC0EAIQIgAEHw4AFqKAIARQ0AIABBkOEBahBDCyACCycBAX8QVyIERQRAQUAPCyAEIAAgASACIAMgBBBLEE8hACAEEFYgAAs/AQF/AkACQAJAIAAoAqDiAUEBaiIBQQJLDQAgAUEBaw4CAAECCyAAEDBBAA8LIABBADYCoOIBCyAAKAKU4gELvAMCB38BfiMAQRBrIgkkAEG4fyEGAkAgBCgCACIIQQVBCSAAKALs4QEiBRtJDQAgAygCACIHQQFBBSAFGyAFEC8iBRADBEAgBSEGDAELIAggBUEDakkNACAAIAcgBRBJIgYQAw0AIAEgAmohCiAAQZDhAWohCyAIIAVrIQIgBSAHaiEHIAEhBQNAIAcgAiAJECwiBhADDQEgAkF9aiICIAZJBEBBuH8hBgwCCyAJKAIAIghBAksEQEFsIQYMAgsgB0EDaiEHAn8CQAJAAkAgCEEBaw4CAgABCyAAIAUgCiAFayAHIAYQSAwCCyAFIAogBWsgByAGEEcMAQsgBSAKIAVrIActAAAgCSgCCBBGCyIIEAMEQCAIIQYMAgsgACgC8OABBEAgCyAFIAgQRQsgAiAGayECIAYgB2ohByAFIAhqIQUgCSgCBEUNAAsgACkD0OABIgxCf1IEQEFsIQYgDCAFIAFrrFINAQsgACgC8OABBEBBaiEGIAJBBEkNASALEEQhDCAHKAAAIAynRw0BIAdBBGohByACQXxqIQILIAMgBzYCACAEIAI2AgAgBSABayEGCyAJQRBqJAAgBgsuACAAECsCf0EAQQAQAw0AGiABRSACRXJFBEBBYiAAIAEgAhA9EAMNARoLQQALCzcAIAEEQCAAIAAoAsTgASABKAIEIAEoAghqRzYCnOIBCyAAECtBABADIAFFckUEQCAAIAEQWwsL0QIBB38jAEEQayIGJAAgBiAENgIIIAYgAzYCDCAFBEAgBSgCBCEKIAUoAgghCQsgASEIAkACQANAIAAoAuzhARAWIQsCQANAIAQgC0kNASADKAAAQXBxQdDUtMIBRgRAIAMgBBAiIgcQAw0EIAQgB2shBCADIAdqIQMMAQsLIAYgAzYCDCAGIAQ2AggCQCAFBEAgACAFEE5BACEHQQAQA0UNAQwFCyAAIAogCRBNIgcQAw0ECyAAIAgQUCAMQQFHQQAgACAIIAIgBkEMaiAGQQhqEEwiByIDa0EAIAMQAxtBCkdyRQRAQbh/IQcMBAsgBxADDQMgAiAHayECIAcgCGohCEEBIQwgBigCDCEDIAYoAgghBAwBCwsgBiADNgIMIAYgBDYCCEG4fyEHIAQNASAIIAFrIQcMAQsgBiADNgIMIAYgBDYCCAsgBkEQaiQAIAcLRgECfyABIAAoArjgASICRwRAIAAgAjYCxOABIAAgATYCuOABIAAoArzgASEDIAAgATYCvOABIAAgASADIAJrajYCwOABCwutAgIEfwF+IwBBQGoiBCQAAkACQCACQQhJDQAgASgAAEFwcUHQ1LTCAUcNACABIAIQIiEBIABCADcDCCAAQQA2AgQgACABNgIADAELIARBGGogASACEC0iAxADBEAgACADEBoMAQsgAwRAIABBuH8QGgwBCyACIAQoAjAiA2shAiABIANqIQMDQAJAIAAgAyACIARBCGoQLCIFEAMEfyAFBSACIAVBA2oiBU8NAUG4fwsQGgwCCyAGQQFqIQYgAiAFayECIAMgBWohAyAEKAIMRQ0ACyAEKAI4BEAgAkEDTQRAIABBuH8QGgwCCyADQQRqIQMLIAQoAighAiAEKQMYIQcgAEEANgIEIAAgAyABazYCACAAIAIgBmytIAcgB0J/URs3AwgLIARBQGskAAslAQF/IwBBEGsiAiQAIAIgACABEFEgAigCACEAIAJBEGokACAAC30BBH8jAEGQBGsiBCQAIARB/wE2AggCQCAEQRBqIARBCGogBEEMaiABIAIQFSIGEAMEQCAGIQUMAQtBVCEFIAQoAgwiB0EGSw0AIAMgBEEQaiAEKAIIIAcQQSIFEAMNACAAIAEgBmogAiAGayADEDwhBQsgBEGQBGokACAFC4cBAgJ/An5BABAWIQMCQANAIAEgA08EQAJAIAAoAABBcHFB0NS0wgFGBEAgACABECIiAhADRQ0BQn4PCyAAIAEQVSIEQn1WDQMgBCAFfCIFIARUIQJCfiEEIAINAyAAIAEQUiICEAMNAwsgASACayEBIAAgAmohAAwBCwtCfiAFIAEbIQQLIAQLPwIBfwF+IwBBMGsiAiQAAn5CfiACQQhqIAAgARAtDQAaQgAgAigCHEEBRg0AGiACKQMICyEDIAJBMGokACADC40BAQJ/IwBBMGsiASQAAkAgAEUNACAAKAKI4gENACABIABB/OEBaigCADYCKCABIAApAvThATcDICAAEDAgACgCqOIBIQIgASABKAIoNgIYIAEgASkDIDcDECACIAFBEGoQGyAAQQA2AqjiASABIAEoAig2AgggASABKQMgNwMAIAAgARAbCyABQTBqJAALKgECfyMAQRBrIgAkACAAQQA2AgggAEIANwMAIAAQWCEBIABBEGokACABC4cBAQN/IwBBEGsiAiQAAkAgACgCAEUgACgCBEVzDQAgAiAAKAIINgIIIAIgACkCADcDAAJ/IAIoAgAiAQRAIAIoAghBqOMJIAERBQAMAQtBqOMJECgLIgFFDQAgASAAKQIANwL04QEgAUH84QFqIAAoAgg2AgAgARBZIAEhAwsgAkEQaiQAIAMLywEBAn8jAEEgayIBJAAgAEGBgIDAADYCtOIBIABBADYCiOIBIABBADYC7OEBIABCADcDkOIBIABBADYCpOMJIABBADYC3OIBIABCADcCzOIBIABBADYCvOIBIABBADYCxOABIABCADcCnOIBIABBpOIBakIANwIAIABBrOIBakEANgIAIAFCADcCECABQgA3AhggASABKQMYNwMIIAEgASkDEDcDACABKAIIQQh2QQFxIQIgAEEANgLg4gEgACACNgKM4gEgAUEgaiQAC3YBA38jAEEwayIBJAAgAARAIAEgAEHE0AFqIgIoAgA2AiggASAAKQK80AE3AyAgACgCACEDIAEgAigCADYCGCABIAApArzQATcDECADIAFBEGoQGyABIAEoAig2AgggASABKQMgNwMAIAAgARAbCyABQTBqJAALzAEBAX8gACABKAK00AE2ApjiASAAIAEoAgQiAjYCwOABIAAgAjYCvOABIAAgAiABKAIIaiICNgK44AEgACACNgLE4AEgASgCuNABBEAgAEKBgICAEDcDiOEBIAAgAUGk0ABqNgIMIAAgAUGUIGo2AgggACABQZwwajYCBCAAIAFBDGo2AgAgAEGs0AFqIAFBqNABaigCADYCACAAQbDQAWogAUGs0AFqKAIANgIAIABBtNABaiABQbDQAWooAgA2AgAPCyAAQgA3A4jhAQs7ACACRQRAQbp/DwsgBEUEQEFsDwsgAiAEEGAEQCAAIAEgAiADIAQgBRBhDwsgACABIAIgAyAEIAUQZQtGAQF/IwBBEGsiBSQAIAVBCGogBBAOAn8gBS0ACQRAIAAgASACIAMgBBAyDAELIAAgASACIAMgBBA0CyEAIAVBEGokACAACzQAIAAgAyAEIAUQNiIFEAMEQCAFDwsgBSAESQR/IAEgAiADIAVqIAQgBWsgABA1BUG4fwsLRgEBfyMAQRBrIgUkACAFQQhqIAQQDgJ/IAUtAAkEQCAAIAEgAiADIAQQYgwBCyAAIAEgAiADIAQQNQshACAFQRBqJAAgAAtZAQF/QQ8hAiABIABJBEAgAUEEdCAAbiECCyAAQQh2IgEgAkEYbCIAQYwIaigCAGwgAEGICGooAgBqIgJBA3YgAmogAEGACGooAgAgAEGECGooAgAgAWxqSQs3ACAAIAMgBCAFQYAQEDMiBRADBEAgBQ8LIAUgBEkEfyABIAIgAyAFaiAEIAVrIAAQMgVBuH8LC78DAQN/IwBBIGsiBSQAIAVBCGogAiADEAYiAhADRQRAIAAgAWoiB0F9aiEGIAUgBBAOIARBBGohAiAFLQACIQMDQEEAIAAgBkkgBUEIahAEGwRAIAAgAiAFQQhqIAMQAkECdGoiBC8BADsAACAFQQhqIAQtAAIQASAAIAQtAANqIgQgAiAFQQhqIAMQAkECdGoiAC8BADsAACAFQQhqIAAtAAIQASAEIAAtAANqIQAMAQUgB0F+aiEEA0AgBUEIahAEIAAgBEtyRQRAIAAgAiAFQQhqIAMQAkECdGoiBi8BADsAACAFQQhqIAYtAAIQASAAIAYtAANqIQAMAQsLA0AgACAES0UEQCAAIAIgBUEIaiADEAJBAnRqIgYvAQA7AAAgBUEIaiAGLQACEAEgACAGLQADaiEADAELCwJAIAAgB08NACAAIAIgBUEIaiADEAIiA0ECdGoiAC0AADoAACAALQADQQFGBEAgBUEIaiAALQACEAEMAQsgBSgCDEEfSw0AIAVBCGogAiADQQJ0ai0AAhABIAUoAgxBIUkNACAFQSA2AgwLIAFBbCAFQQhqEAobIQILCwsgBUEgaiQAIAILkgIBBH8jAEFAaiIJJAAgCSADQTQQCyEDAkAgBEECSA0AIAMgBEECdGooAgAhCSADQTxqIAgQIyADQQE6AD8gAyACOgA+QQAhBCADKAI8IQoDQCAEIAlGDQEgACAEQQJ0aiAKNgEAIARBAWohBAwAAAsAC0EAIQkDQCAGIAlGRQRAIAMgBSAJQQF0aiIKLQABIgtBAnRqIgwoAgAhBCADQTxqIAotAABBCHQgCGpB//8DcRAjIANBAjoAPyADIAcgC2siCiACajoAPiAEQQEgASAKa3RqIQogAygCPCELA0AgACAEQQJ0aiALNgEAIARBAWoiBCAKSQ0ACyAMIAo2AgAgCUEBaiEJDAELCyADQUBrJAALowIBCX8jAEHQAGsiCSQAIAlBEGogBUE0EAsaIAcgBmshDyAHIAFrIRADQAJAIAMgCkcEQEEBIAEgByACIApBAXRqIgYtAAEiDGsiCGsiC3QhDSAGLQAAIQ4gCUEQaiAMQQJ0aiIMKAIAIQYgCyAPTwRAIAAgBkECdGogCyAIIAUgCEE0bGogCCAQaiIIQQEgCEEBShsiCCACIAQgCEECdGooAgAiCEEBdGogAyAIayAHIA4QYyAGIA1qIQgMAgsgCUEMaiAOECMgCUEBOgAPIAkgCDoADiAGIA1qIQggCSgCDCELA0AgBiAITw0CIAAgBkECdGogCzYBACAGQQFqIQYMAAALAAsgCUHQAGokAA8LIAwgCDYCACAKQQFqIQoMAAALAAs0ACAAIAMgBCAFEDYiBRADBEAgBQ8LIAUgBEkEfyABIAIgAyAFaiAEIAVrIAAQNAVBuH8LCyMAIAA/AEEQdGtB//8DakEQdkAAQX9GBEBBAA8LQQAQAEEBCzsBAX8gAgRAA0AgACABIAJBgCAgAkGAIEkbIgMQCyEAIAFBgCBqIQEgAEGAIGohACACIANrIgINAAsLCwYAIAAQAwsLqBUJAEGICAsNAQAAAAEAAAACAAAAAgBBoAgLswYBAAAAAQAAAAIAAAACAAAAJgAAAIIAAAAhBQAASgAAAGcIAAAmAAAAwAEAAIAAAABJBQAASgAAAL4IAAApAAAALAIAAIAAAABJBQAASgAAAL4IAAAvAAAAygIAAIAAAACKBQAASgAAAIQJAAA1AAAAcwMAAIAAAACdBQAASgAAAKAJAAA9AAAAgQMAAIAAAADrBQAASwAAAD4KAABEAAAAngMAAIAAAABNBgAASwAAAKoKAABLAAAAswMAAIAAAADBBgAATQAAAB8NAABNAAAAUwQAAIAAAAAjCAAAUQAAAKYPAABUAAAAmQQAAIAAAABLCQAAVwAAALESAABYAAAA2gQAAIAAAABvCQAAXQAAACMUAABUAAAARQUAAIAAAABUCgAAagAAAIwUAABqAAAArwUAAIAAAAB2CQAAfAAAAE4QAAB8AAAA0gIAAIAAAABjBwAAkQAAAJAHAACSAAAAAAAAAAEAAAABAAAABQAAAA0AAAAdAAAAPQAAAH0AAAD9AAAA/QEAAP0DAAD9BwAA/Q8AAP0fAAD9PwAA/X8AAP3/AAD9/wEA/f8DAP3/BwD9/w8A/f8fAP3/PwD9/38A/f//AP3//wH9//8D/f//B/3//w/9//8f/f//P/3//38AAAAAAQAAAAIAAAADAAAABAAAAAUAAAAGAAAABwAAAAgAAAAJAAAACgAAAAsAAAAMAAAADQAAAA4AAAAPAAAAEAAAABEAAAASAAAAEwAAABQAAAAVAAAAFgAAABcAAAAYAAAAGQAAABoAAAAbAAAAHAAAAB0AAAAeAAAAHwAAAAMAAAAEAAAABQAAAAYAAAAHAAAACAAAAAkAAAAKAAAACwAAAAwAAAANAAAADgAAAA8AAAAQAAAAEQAAABIAAAATAAAAFAAAABUAAAAWAAAAFwAAABgAAAAZAAAAGgAAABsAAAAcAAAAHQAAAB4AAAAfAAAAIAAAACEAAAAiAAAAIwAAACUAAAAnAAAAKQAAACsAAAAvAAAAMwAAADsAAABDAAAAUwAAAGMAAACDAAAAAwEAAAMCAAADBAAAAwgAAAMQAAADIAAAA0AAAAOAAAADAAEAQeAPC1EBAAAAAQAAAAEAAAABAAAAAgAAAAIAAAADAAAAAwAAAAQAAAAEAAAABQAAAAcAAAAIAAAACQAAAAoAAAALAAAADAAAAA0AAAAOAAAADwAAABAAQcQQC4sBAQAAAAIAAAADAAAABAAAAAUAAAAGAAAABwAAAAgAAAAJAAAACgAAAAsAAAAMAAAADQAAAA4AAAAPAAAAEAAAABIAAAAUAAAAFgAAABgAAAAcAAAAIAAAACgAAAAwAAAAQAAAAIAAAAAAAQAAAAIAAAAEAAAACAAAABAAAAAgAAAAQAAAAIAAAAAAAQBBkBIL5gQBAAAAAQAAAAEAAAABAAAAAgAAAAIAAAADAAAAAwAAAAQAAAAGAAAABwAAAAgAAAAJAAAACgAAAAsAAAAMAAAADQAAAA4AAAAPAAAAEAAAAAEAAAAEAAAACAAAAAAAAAABAAEBBgAAAAAAAAQAAAAAEAAABAAAAAAgAAAFAQAAAAAAAAUDAAAAAAAABQQAAAAAAAAFBgAAAAAAAAUHAAAAAAAABQkAAAAAAAAFCgAAAAAAAAUMAAAAAAAABg4AAAAAAAEFEAAAAAAAAQUUAAAAAAABBRYAAAAAAAIFHAAAAAAAAwUgAAAAAAAEBTAAAAAgAAYFQAAAAAAABwWAAAAAAAAIBgABAAAAAAoGAAQAAAAADAYAEAAAIAAABAAAAAAAAAAEAQAAAAAAAAUCAAAAIAAABQQAAAAAAAAFBQAAACAAAAUHAAAAAAAABQgAAAAgAAAFCgAAAAAAAAULAAAAAAAABg0AAAAgAAEFEAAAAAAAAQUSAAAAIAABBRYAAAAAAAIFGAAAACAAAwUgAAAAAAADBSgAAAAAAAYEQAAAABAABgRAAAAAIAAHBYAAAAAAAAkGAAIAAAAACwYACAAAMAAABAAAAAAQAAAEAQAAACAAAAUCAAAAIAAABQMAAAAgAAAFBQAAACAAAAUGAAAAIAAABQgAAAAgAAAFCQAAACAAAAULAAAAIAAABQwAAAAAAAAGDwAAACAAAQUSAAAAIAABBRQAAAAgAAIFGAAAACAAAgUcAAAAIAADBSgAAAAgAAQFMAAAAAAAEAYAAAEAAAAPBgCAAAAAAA4GAEAAAAAADQYAIABBgBcLhwIBAAEBBQAAAAAAAAUAAAAAAAAGBD0AAAAAAAkF/QEAAAAADwX9fwAAAAAVBf3/HwAAAAMFBQAAAAAABwR9AAAAAAAMBf0PAAAAABIF/f8DAAAAFwX9/38AAAAFBR0AAAAAAAgE/QAAAAAADgX9PwAAAAAUBf3/DwAAAAIFAQAAABAABwR9AAAAAAALBf0HAAAAABEF/f8BAAAAFgX9/z8AAAAEBQ0AAAAQAAgE/QAAAAAADQX9HwAAAAATBf3/BwAAAAEFAQAAABAABgQ9AAAAAAAKBf0DAAAAABAF/f8AAAAAHAX9//8PAAAbBf3//wcAABoF/f//AwAAGQX9//8BAAAYBf3//wBBkBkLhgQBAAEBBgAAAAAAAAYDAAAAAAAABAQAAAAgAAAFBQAAAAAAAAUGAAAAAAAABQgAAAAAAAAFCQAAAAAAAAULAAAAAAAABg0AAAAAAAAGEAAAAAAAAAYTAAAAAAAABhYAAAAAAAAGGQAAAAAAAAYcAAAAAAAABh8AAAAAAAAGIgAAAAAAAQYlAAAAAAABBikAAAAAAAIGLwAAAAAAAwY7AAAAAAAEBlMAAAAAAAcGgwAAAAAACQYDAgAAEAAABAQAAAAAAAAEBQAAACAAAAUGAAAAAAAABQcAAAAgAAAFCQAAAAAAAAUKAAAAAAAABgwAAAAAAAAGDwAAAAAAAAYSAAAAAAAABhUAAAAAAAAGGAAAAAAAAAYbAAAAAAAABh4AAAAAAAAGIQAAAAAAAQYjAAAAAAABBicAAAAAAAIGKwAAAAAAAwYzAAAAAAAEBkMAAAAAAAUGYwAAAAAACAYDAQAAIAAABAQAAAAwAAAEBAAAABAAAAQFAAAAIAAABQcAAAAgAAAFCAAAACAAAAUKAAAAIAAABQsAAAAAAAAGDgAAAAAAAAYRAAAAAAAABhQAAAAAAAAGFwAAAAAAAAYaAAAAAAAABh0AAAAAAAAGIAAAAAAAEAYDAAEAAAAPBgOAAAAAAA4GA0AAAAAADQYDIAAAAAAMBgMQAAAAAAsGAwgAAAAACgYDBABBpB0L2QEBAAAAAwAAAAcAAAAPAAAAHwAAAD8AAAB/AAAA/wAAAP8BAAD/AwAA/wcAAP8PAAD/HwAA/z8AAP9/AAD//wAA//8BAP//AwD//wcA//8PAP//HwD//z8A//9/AP///wD///8B////A////wf///8P////H////z////9/AAAAAAEAAAACAAAABAAAAAAAAAACAAAABAAAAAgAAAAAAAAAAQAAAAIAAAABAAAABAAAAAQAAAAEAAAABAAAAAgAAAAIAAAACAAAAAcAAAAIAAAACQAAAAoAAAALAEGgIAsDwBBQ",Qx="display-p3",kx="display-p3-linear",Ko=new WeakMap;let Jo=0,Zo;class Gn extends bs{constructor(e){super(e),this.transcoderPath="",this.transcoderBinary=null,this.transcoderPending=null,this.workerPool=new Ix,this.workerSourceURL="",this.workerConfig=null,typeof MSC_TRANSCODER<"u"&&console.warn('THREE.KTX2Loader: Please update to latest "basis_transcoder". "msc_basis_transcoder" is no longer supported in three.js r125+.')}setTranscoderPath(e){return this.transcoderPath=e,this}setWorkerLimit(e){return this.workerPool.setWorkerLimit(e),this}async detectSupportAsync(e){return this.workerConfig={astcSupported:await e.hasFeatureAsync("texture-compression-astc"),astcHDRSupported:!1,etc1Supported:await e.hasFeatureAsync("texture-compression-etc1"),etc2Supported:await e.hasFeatureAsync("texture-compression-etc2"),dxtSupported:await e.hasFeatureAsync("texture-compression-bc"),bptcSupported:await e.hasFeatureAsync("texture-compression-bptc"),pvrtcSupported:await e.hasFeatureAsync("texture-compression-pvrtc")},this}detectSupport(e){return e.isWebGPURenderer===!0?this.workerConfig={astcSupported:e.hasFeature("texture-compression-astc"),astcHDRSupported:!1,etc1Supported:e.hasFeature("texture-compression-etc1"),etc2Supported:e.hasFeature("texture-compression-etc2"),dxtSupported:e.hasFeature("texture-compression-bc"),bptcSupported:e.hasFeature("texture-compression-bptc"),pvrtcSupported:e.hasFeature("texture-compression-pvrtc")}:this.workerConfig={astcSupported:e.extensions.has("WEBGL_compressed_texture_astc"),astcHDRSupported:e.extensions.has("WEBGL_compressed_texture_astc")&&e.extensions.get("WEBGL_compressed_texture_astc").getSupportedProfiles().includes("hdr"),etc1Supported:e.extensions.has("WEBGL_compressed_texture_etc1"),etc2Supported:e.extensions.has("WEBGL_compressed_texture_etc"),dxtSupported:e.extensions.has("WEBGL_compressed_texture_s3tc"),bptcSupported:e.extensions.has("EXT_texture_compression_bptc"),pvrtcSupported:e.extensions.has("WEBGL_compressed_texture_pvrtc")||e.extensions.has("WEBKIT_WEBGL_compressed_texture_pvrtc")},this}init(){if(!this.transcoderPending){const e=new Ta(this.manager);e.setPath(this.transcoderPath),e.setWithCredentials(this.withCredentials);const t=e.loadAsync("basis_transcoder.js"),n=new Ta(this.manager);n.setPath(this.transcoderPath),n.setResponseType("arraybuffer"),n.setWithCredentials(this.withCredentials);const s=n.loadAsync("basis_transcoder.wasm");this.transcoderPending=Promise.all([t,s]).then(([a,r])=>{const o=Gn.BasisWorker.toString(),c=["/* constants */","let _EngineFormat = "+JSON.stringify(Gn.EngineFormat),"let _EngineType = "+JSON.stringify(Gn.EngineType),"let _TranscoderFormat = "+JSON.stringify(Gn.TranscoderFormat),"let _BasisFormat = "+JSON.stringify(Gn.BasisFormat),"/* basis_transcoder.js */",a,"/* worker */",o.substring(o.indexOf("{")+1,o.lastIndexOf("}"))].join(`
`);this.workerSourceURL=URL.createObjectURL(new Blob([c])),this.transcoderBinary=r,this.workerPool.setWorkerCreator(()=>{const l=new Worker(this.workerSourceURL),h=this.transcoderBinary.slice(0);return l.postMessage({type:"init",config:this.workerConfig,transcoderBinary:h},[h]),l})}),Jo>0&&console.warn("THREE.KTX2Loader: Multiple active KTX2 loaders may cause performance issues. Use a single KTX2Loader instance, or call .dispose() on old instances."),Jo++}return this.transcoderPending}load(e,t,n,s){if(this.workerConfig===null)throw new Error("THREE.KTX2Loader: Missing initialization with `.detectSupport( renderer )`.");const a=new Ta(this.manager);a.setResponseType("arraybuffer"),a.setWithCredentials(this.withCredentials),a.load(e,r=>{this.parse(r,t,s)},n,s)}parse(e,t,n){if(this.workerConfig===null)throw new Error("THREE.KTX2Loader: Missing initialization with `.detectSupport( renderer )`.");if(Ko.has(e))return Ko.get(e).promise.then(t).catch(n);this._createTexture(e).then(s=>t?t(s):null).catch(n)}_createTextureFrom(e,t){const{type:n,error:s,data:{faces:a,width:r,height:o,format:c,type:l,dfdFlags:h}}=e;if(n==="error")return Promise.reject(s);let u;if(t.faceCount===6)u=new ib(a,c,l);else{const f=a[0].mipmaps;u=t.layerCount>1?new nb(f,r,o,t.layerCount,c,l):new io(f,r,o,c,l)}return u.minFilter=a[0].mipmaps.length===1?_n:hi,u.magFilter=_n,u.generateMipmaps=!1,u.needsUpdate=!0,u.colorSpace=yf(t),u.premultiplyAlpha=!!(h&Bx),u}async _createTexture(e,t={}){const n=Fx(new Uint8Array(e)),s=n.vkFormat===yl&&n.dataFormatDescriptor[0].colorModel===167;if(!(n.vkFormat===Px||s&&!this.workerConfig.astcHDRSupported))return zx(n);const r=t,o=this.init().then(()=>this.workerPool.postMessage({type:"transcode",buffer:e,taskConfig:r},[e])).then(c=>this._createTextureFrom(c.data,n));return Ko.set(e,{promise:o}),o}dispose(){return this.workerPool.dispose(),this.workerSourceURL&&URL.revokeObjectURL(this.workerSourceURL),Jo--,this}}Gn.BasisFormat={ETC1S:0,UASTC:1,UASTC_HDR:2};Gn.TranscoderFormat={ETC1:0,ETC2:1,BC1:2,BC3:3,BC4:4,BC5:5,BC7_M6_OPAQUE_ONLY:6,BC7_M5:7,PVRTC1_4_RGB:8,PVRTC1_4_RGBA:9,ASTC_4x4:10,ATC_RGB:11,ATC_RGBA_INTERPOLATED_ALPHA:12,RGBA32:13,RGB565:14,BGR565:15,RGBA4444:16,BC6H:22,RGB_HALF:24,RGBA_HALF:25};Gn.EngineFormat={RGBAFormat:jt,RGBA_ASTC_4x4_Format:La,RGB_BPTC_UNSIGNED_Format:Gr,RGBA_BPTC_Format:wa,RGBA_ETC2_EAC_Format:zr,RGBA_PVRTC_4BPPV1_Format:Qr,RGBA_S3TC_DXT5_Format:Ca,RGB_ETC1_Format:kr,RGB_ETC2_Format:Or,RGB_PVRTC_4BPPV1_Format:Nr,RGBA_S3TC_DXT1_Format:ya};Gn.EngineType={UnsignedByteType:Wt,HalfFloatType:an,FloatType:un};Gn.BasisWorker=function(){let i,e,t;const n=_EngineFormat,s=_EngineType,a=_TranscoderFormat,r=_BasisFormat;self.addEventListener("message",function(x){const _=x.data;switch(_.type){case"init":i=_.config,o(_.transcoderBinary);break;case"transcode":e.then(()=>{try{const{faces:p,buffers:d,width:C,height:y,hasAlpha:M,format:W,type:V,dfdFlags:G}=c(_.buffer);self.postMessage({type:"transcode",id:_.id,data:{faces:p,width:C,height:y,hasAlpha:M,format:W,type:V,dfdFlags:G}},d)}catch(p){console.error(p),self.postMessage({type:"error",id:_.id,error:p.message})}});break}});function o(x){e=new Promise(_=>{t={wasmBinary:x,onRuntimeInitialized:_},BASIS(t)}).then(()=>{t.initializeBasis(),t.KTX2File===void 0&&console.warn("THREE.KTX2Loader: Please update Basis Universal transcoder.")})}function c(x){const _=new t.KTX2File(new Uint8Array(x));function p(){_.close(),_.delete()}if(!_.isValid())throw p(),new Error("THREE.KTX2Loader:	Invalid or unsupported .ktx2 file");let d;if(_.isUASTC())d=r.UASTC;else if(_.isETC1S())d=r.ETC1S;else if(_.isHDR())d=r.UASTC_HDR;else throw new Error("THREE.KTX2Loader: Unknown Basis encoding");const C=_.getWidth(),y=_.getHeight(),M=_.getLayers()||1,W=_.getLevels(),V=_.getFaces(),G=_.getHasAlpha(),ee=_.getDFDFlags(),{transcoderFormat:R,engineFormat:B,engineType:A}=u(d,C,y,G);if(!C||!y||!W)throw p(),new Error("THREE.KTX2Loader:	Invalid texture");if(!_.startTranscoding())throw p(),new Error("THREE.KTX2Loader: .startTranscoding failed");const I=[],N=[];for(let $=0;$<V;$++){const q=[];for(let ae=0;ae<W;ae++){const j=[];let K,fe;for(let oe=0;oe<M;oe++){const ge=_.getImageLevelInfo(ae,oe,$);$===0&&ae===0&&oe===0&&(ge.origWidth%4!==0||ge.origHeight%4!==0)&&console.warn("THREE.KTX2Loader: ETC1S and UASTC textures should use multiple-of-four dimensions."),W>1?(K=ge.origWidth,fe=ge.origHeight):(K=ge.width,fe=ge.height);let be=new Uint8Array(_.getImageTranscodedSizeInBytes(ae,oe,0,R));const te=_.transcodeImage(be,ae,oe,$,R,0,-1,-1);if(A===s.HalfFloatType&&(be=new Uint16Array(be.buffer,be.byteOffset,be.byteLength/Uint16Array.BYTES_PER_ELEMENT)),!te)throw p(),new Error("THREE.KTX2Loader: .transcodeImage failed.");j.push(be)}const ne=m(j);q.push({data:ne,width:K,height:fe}),N.push(ne.buffer)}I.push({mipmaps:q,width:C,height:y,format:B,type:A})}return p(),{faces:I,buffers:N,width:C,height:y,hasAlpha:G,dfdFlags:ee,format:B,type:A}}const l=[{if:"astcSupported",basisFormat:[r.UASTC],transcoderFormat:[a.ASTC_4x4,a.ASTC_4x4],engineFormat:[n.RGBA_ASTC_4x4_Format,n.RGBA_ASTC_4x4_Format],engineType:[s.UnsignedByteType],priorityETC1S:1/0,priorityUASTC:1,needsPowerOfTwo:!1},{if:"bptcSupported",basisFormat:[r.ETC1S,r.UASTC],transcoderFormat:[a.BC7_M5,a.BC7_M5],engineFormat:[n.RGBA_BPTC_Format,n.RGBA_BPTC_Format],engineType:[s.UnsignedByteType],priorityETC1S:3,priorityUASTC:2,needsPowerOfTwo:!1},{if:"dxtSupported",basisFormat:[r.ETC1S,r.UASTC],transcoderFormat:[a.BC1,a.BC3],engineFormat:[n.RGBA_S3TC_DXT1_Format,n.RGBA_S3TC_DXT5_Format],engineType:[s.UnsignedByteType],priorityETC1S:4,priorityUASTC:5,needsPowerOfTwo:!1},{if:"etc2Supported",basisFormat:[r.ETC1S,r.UASTC],transcoderFormat:[a.ETC1,a.ETC2],engineFormat:[n.RGB_ETC2_Format,n.RGBA_ETC2_EAC_Format],engineType:[s.UnsignedByteType],priorityETC1S:1,priorityUASTC:3,needsPowerOfTwo:!1},{if:"etc1Supported",basisFormat:[r.ETC1S,r.UASTC],transcoderFormat:[a.ETC1],engineFormat:[n.RGB_ETC1_Format],engineType:[s.UnsignedByteType],priorityETC1S:2,priorityUASTC:4,needsPowerOfTwo:!1},{if:"pvrtcSupported",basisFormat:[r.ETC1S,r.UASTC],transcoderFormat:[a.PVRTC1_4_RGB,a.PVRTC1_4_RGBA],engineFormat:[n.RGB_PVRTC_4BPPV1_Format,n.RGBA_PVRTC_4BPPV1_Format],engineType:[s.UnsignedByteType],priorityETC1S:5,priorityUASTC:6,needsPowerOfTwo:!0},{if:"bptcSupported",basisFormat:[r.UASTC_HDR],transcoderFormat:[a.BC6H],engineFormat:[n.RGB_BPTC_UNSIGNED_Format],engineType:[s.HalfFloatType],priorityHDR:1,needsPowerOfTwo:!1},{basisFormat:[r.ETC1S,r.UASTC],transcoderFormat:[a.RGBA32,a.RGBA32],engineFormat:[n.RGBAFormat,n.RGBAFormat],engineType:[s.UnsignedByteType,s.UnsignedByteType],priorityETC1S:100,priorityUASTC:100,needsPowerOfTwo:!1},{basisFormat:[r.UASTC_HDR],transcoderFormat:[a.RGBA_HALF],engineFormat:[n.RGBAFormat],engineType:[s.HalfFloatType],priorityHDR:100,needsPowerOfTwo:!1}],h={[r.ETC1S]:l.filter(x=>x.basisFormat.includes(r.ETC1S)).sort((x,_)=>x.priorityUASTC-_.priorityUASTC),[r.UASTC]:l.filter(x=>x.basisFormat.includes(r.UASTC)).sort((x,_)=>x.priorityUASTC-_.priorityUASTC),[r.UASTC_HDR]:l.filter(x=>x.basisFormat.includes(r.UASTC_HDR)).sort((x,_)=>x.priorityHDR-_.priorityHDR)};function u(x,_,p,d){const C=h[x];for(let y=0;y<C.length;y++){const M=C[y];if(M.if&&!i[M.if]||!M.basisFormat.includes(x)||d&&M.transcoderFormat.length<2||M.needsPowerOfTwo&&!(f(_)&&f(p)))continue;const W=M.transcoderFormat[d?1:0],V=M.engineFormat[d?1:0],G=M.engineType[0];return{transcoderFormat:W,engineFormat:V,engineType:G}}throw new Error("THREE.KTX2Loader: Failed to identify transcoding target.")}function f(x){return x<=2?!0:(x&x-1)===0&&x!==0}function m(x){if(x.length===1)return x[0];let _=0;for(let C=0;C<x.length;C++){const y=x[C];_+=y.byteLength}const p=new Uint8Array(_);let d=0;for(let C=0;C<x.length;C++){const y=x[C];p.set(y,d),d+=y.byteLength}return p}};const Ox=new Set([jt,ls,Vi]),$o={[Ef]:jt,[bf]:jt,[Af]:jt,[pf]:jt,[_f]:ls,[gf]:ls,[ff]:ls,[df]:ls,[xf]:Vi,[mf]:Vi,[uf]:Vi,[hf]:Vi,[yl]:La,[Mf]:Pa,[vf]:Pa},ec={[Ef]:un,[bf]:an,[Af]:Wt,[pf]:Wt,[_f]:un,[gf]:an,[ff]:Wt,[df]:Wt,[xf]:un,[mf]:an,[uf]:Wt,[hf]:Wt,[yl]:an,[Mf]:Wt,[vf]:Wt};async function zx(i){const{vkFormat:e}=i;if($o[e]===void 0)throw new Error("THREE.KTX2Loader: Unsupported vkFormat.");let t;i.supercompressionScheme===iu&&(Zo||(Zo=new Promise(async a=>{const r=new Nx;await r.init(),a(r)})),t=await Zo);const n=[];for(let a=0;a<i.levels.length;a++){const r=Math.max(1,i.pixelWidth>>a),o=Math.max(1,i.pixelHeight>>a),c=i.pixelDepth?Math.max(1,i.pixelDepth>>a):0,l=i.levels[a];let h;if(i.supercompressionScheme===Tx)h=l.levelData;else if(i.supercompressionScheme===iu)h=t.decode(l.levelData,l.uncompressedByteLength);else throw new Error("THREE.KTX2Loader: Unsupported supercompressionScheme.");let u;ec[e]===un?u=new Float32Array(h.buffer,h.byteOffset,h.byteLength/Float32Array.BYTES_PER_ELEMENT):ec[e]===an?u=new Uint16Array(h.buffer,h.byteOffset,h.byteLength/Uint16Array.BYTES_PER_ELEMENT):u=h,n.push({data:u,width:r,height:o,depth:c})}let s;if(Ox.has($o[e]))s=i.pixelDepth===0?new Ha(n[0].data,i.pixelWidth,i.pixelHeight):new ku(n[0].data,i.pixelWidth,i.pixelHeight,i.pixelDepth);else{if(i.pixelDepth>0)throw new Error("THREE.KTX2Loader: Unsupported pixelDepth.");s=new io(n,i.pixelWidth,i.pixelHeight)}return s.mipmaps=n,s.type=ec[e],s.format=$o[e],s.colorSpace=yf(i),s.needsUpdate=!0,Promise.resolve(s)}function yf(i){const e=i.dataFormatDescriptor[0];return e.colorPrimaries===Dx?e.transferFunction===su?Pt:fn:e.colorPrimaries===Lx?e.transferFunction===su?Qx:kx:(e.colorPrimaries===Rx||console.warn(`THREE.KTX2Loader: Unsupported color primaries, "${e.colorPrimaries}"`),ci)}const Gx={name:"HorizontalTiltShiftShader",uniforms:{tDiffuse:{value:null},h:{value:1/512},r:{value:.35}},vertexShader:`

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

		}`},Hx={name:"VerticalTiltShiftShader",uniforms:{tDiffuse:{value:null},v:{value:1/512},r:{value:.35}},vertexShader:`

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

		}`};class Cf extends bs{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Yx(t)}),this.register(function(t){return new Xx(t)}),this.register(function(t){return new s_(t)}),this.register(function(t){return new a_(t)}),this.register(function(t){return new r_(t)}),this.register(function(t){return new Jx(t)}),this.register(function(t){return new Zx(t)}),this.register(function(t){return new $x(t)}),this.register(function(t){return new e_(t)}),this.register(function(t){return new qx(t)}),this.register(function(t){return new t_(t)}),this.register(function(t){return new Kx(t)}),this.register(function(t){return new i_(t)}),this.register(function(t){return new n_(t)}),this.register(function(t){return new Wx(t)}),this.register(function(t){return new o_(t)}),this.register(function(t){return new c_(t)})}load(e,t,n,s){const a=this;let r;if(this.resourcePath!=="")r=this.resourcePath;else if(this.path!==""){const l=Ba.extractUrlBase(e);r=Ba.resolveURL(l,this.path)}else r=Ba.extractUrlBase(e);this.manager.itemStart(e);const o=function(l){s?s(l):console.error(l),a.manager.itemError(e),a.manager.itemEnd(e)},c=new Ta(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{a.parse(l,r,function(h){t(h),a.manager.itemEnd(e)},o)}catch(h){o(h)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let a;const r={},o={},c=new TextDecoder;if(typeof e=="string")a=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===wf){try{r[at.KHR_BINARY_GLTF]=new l_(e)}catch(u){s&&s(u);return}a=JSON.parse(r[at.KHR_BINARY_GLTF].content)}else a=JSON.parse(c.decode(e));else a=e;if(a.asset===void 0||a.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const l=new v_(a,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const u=this.pluginCallbacks[h](l);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[u.name]=u,r[u.name]=!0}if(a.extensionsUsed)for(let h=0;h<a.extensionsUsed.length;++h){const u=a.extensionsUsed[h],f=a.extensionsRequired||[];switch(u){case at.KHR_MATERIALS_UNLIT:r[u]=new jx;break;case at.KHR_DRACO_MESH_COMPRESSION:r[u]=new h_(a,this.dracoLoader);break;case at.KHR_TEXTURE_TRANSFORM:r[u]=new u_;break;case at.KHR_MESH_QUANTIZATION:r[u]=new f_;break;default:f.indexOf(u)>=0&&o[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}l.setExtensions(r),l.setPlugins(o),l.parse(n,s)}parseAsync(e,t){const n=this;return new Promise(function(s,a){n.parse(e,t,s,a)})}}function Vx(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}const at={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class Wx{constructor(e){this.parser=e,this.name=at.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){const a=t[n];a.extensions&&a.extensions[this.name]&&a.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,a.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let s=t.cache.get(n);if(s)return s;const a=t.json,c=((a.extensions&&a.extensions[this.name]||{}).lights||[])[e];let l;const h=new Ie(16777215);c.color!==void 0&&h.setRGB(c.color[0],c.color[1],c.color[2],fn);const u=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new of(h),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new Ob(h),l.distance=u;break;case"spot":l=new Qb(h),l.distance=u,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),l.decay=2,Ci(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),s=Promise.resolve(l),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,a=n.json.nodes[e],o=(a.extensions&&a.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(c){return n._getNodeRef(t.cache,o,c)})}}class jx{constructor(){this.name=at.KHR_MATERIALS_UNLIT}getMaterialType(){return Wi}extendParams(e,t,n){const s=[];e.color=new Ie(1,1,1),e.opacity=1;const a=t.pbrMetallicRoughness;if(a){if(Array.isArray(a.baseColorFactor)){const r=a.baseColorFactor;e.color.setRGB(r[0],r[1],r[2],fn),e.opacity=r[3]}a.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",a.baseColorTexture,Pt))}return Promise.all(s)}}class qx{constructor(e){this.parser=e,this.name=at.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const a=s.extensions[this.name].emissiveStrength;return a!==void 0&&(t.emissiveIntensity=a),Promise.resolve()}}class Yx{constructor(e){this.parser=e,this.name=at.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:fi}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const a=[],r=s.extensions[this.name];if(r.clearcoatFactor!==void 0&&(t.clearcoat=r.clearcoatFactor),r.clearcoatTexture!==void 0&&a.push(n.assignTexture(t,"clearcoatMap",r.clearcoatTexture)),r.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=r.clearcoatRoughnessFactor),r.clearcoatRoughnessTexture!==void 0&&a.push(n.assignTexture(t,"clearcoatRoughnessMap",r.clearcoatRoughnessTexture)),r.clearcoatNormalTexture!==void 0&&(a.push(n.assignTexture(t,"clearcoatNormalMap",r.clearcoatNormalTexture)),r.clearcoatNormalTexture.scale!==void 0)){const o=r.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Oe(o,o)}return Promise.all(a)}}class Xx{constructor(e){this.parser=e,this.name=at.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:fi}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const a=s.extensions[this.name];return t.dispersion=a.dispersion!==void 0?a.dispersion:0,Promise.resolve()}}class Kx{constructor(e){this.parser=e,this.name=at.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:fi}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const a=[],r=s.extensions[this.name];return r.iridescenceFactor!==void 0&&(t.iridescence=r.iridescenceFactor),r.iridescenceTexture!==void 0&&a.push(n.assignTexture(t,"iridescenceMap",r.iridescenceTexture)),r.iridescenceIor!==void 0&&(t.iridescenceIOR=r.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),r.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=r.iridescenceThicknessMinimum),r.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=r.iridescenceThicknessMaximum),r.iridescenceThicknessTexture!==void 0&&a.push(n.assignTexture(t,"iridescenceThicknessMap",r.iridescenceThicknessTexture)),Promise.all(a)}}class Jx{constructor(e){this.parser=e,this.name=at.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:fi}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const a=[];t.sheenColor=new Ie(0,0,0),t.sheenRoughness=0,t.sheen=1;const r=s.extensions[this.name];if(r.sheenColorFactor!==void 0){const o=r.sheenColorFactor;t.sheenColor.setRGB(o[0],o[1],o[2],fn)}return r.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=r.sheenRoughnessFactor),r.sheenColorTexture!==void 0&&a.push(n.assignTexture(t,"sheenColorMap",r.sheenColorTexture,Pt)),r.sheenRoughnessTexture!==void 0&&a.push(n.assignTexture(t,"sheenRoughnessMap",r.sheenRoughnessTexture)),Promise.all(a)}}class Zx{constructor(e){this.parser=e,this.name=at.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:fi}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const a=[],r=s.extensions[this.name];return r.transmissionFactor!==void 0&&(t.transmission=r.transmissionFactor),r.transmissionTexture!==void 0&&a.push(n.assignTexture(t,"transmissionMap",r.transmissionTexture)),Promise.all(a)}}class $x{constructor(e){this.parser=e,this.name=at.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:fi}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const a=[],r=s.extensions[this.name];t.thickness=r.thicknessFactor!==void 0?r.thicknessFactor:0,r.thicknessTexture!==void 0&&a.push(n.assignTexture(t,"thicknessMap",r.thicknessTexture)),t.attenuationDistance=r.attenuationDistance||1/0;const o=r.attenuationColor||[1,1,1];return t.attenuationColor=new Ie().setRGB(o[0],o[1],o[2],fn),Promise.all(a)}}class e_{constructor(e){this.parser=e,this.name=at.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:fi}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const a=s.extensions[this.name];return t.ior=a.ior!==void 0?a.ior:1.5,Promise.resolve()}}class t_{constructor(e){this.parser=e,this.name=at.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:fi}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const a=[],r=s.extensions[this.name];t.specularIntensity=r.specularFactor!==void 0?r.specularFactor:1,r.specularTexture!==void 0&&a.push(n.assignTexture(t,"specularIntensityMap",r.specularTexture));const o=r.specularColorFactor||[1,1,1];return t.specularColor=new Ie().setRGB(o[0],o[1],o[2],fn),r.specularColorTexture!==void 0&&a.push(n.assignTexture(t,"specularColorMap",r.specularColorTexture,Pt)),Promise.all(a)}}class n_{constructor(e){this.parser=e,this.name=at.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:fi}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const a=[],r=s.extensions[this.name];return t.bumpScale=r.bumpFactor!==void 0?r.bumpFactor:1,r.bumpTexture!==void 0&&a.push(n.assignTexture(t,"bumpMap",r.bumpTexture)),Promise.all(a)}}class i_{constructor(e){this.parser=e,this.name=at.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:fi}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const a=[],r=s.extensions[this.name];return r.anisotropyStrength!==void 0&&(t.anisotropy=r.anisotropyStrength),r.anisotropyRotation!==void 0&&(t.anisotropyRotation=r.anisotropyRotation),r.anisotropyTexture!==void 0&&a.push(n.assignTexture(t,"anisotropyMap",r.anisotropyTexture)),Promise.all(a)}}class s_{constructor(e){this.parser=e,this.name=at.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;const a=s.extensions[this.name],r=t.options.ktx2Loader;if(!r){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,a.source,r)}}class a_{constructor(e){this.parser=e,this.name=at.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,s=n.json,a=s.textures[e];if(!a.extensions||!a.extensions[t])return null;const r=a.extensions[t],o=s.images[r.source];let c=n.textureLoader;if(o.uri){const l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,r.source,c);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class r_{constructor(e){this.parser=e,this.name=at.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,s=n.json,a=s.textures[e];if(!a.extensions||!a.extensions[t])return null;const r=a.extensions[t],o=s.images[r.source];let c=n.textureLoader;if(o.uri){const l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,r.source,c);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class o_{constructor(e){this.name=at.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const s=n.extensions[this.name],a=this.parser.getDependency("buffer",s.buffer),r=this.parser.options.meshoptDecoder;if(!r||!r.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return a.then(function(o){const c=s.byteOffset||0,l=s.byteLength||0,h=s.count,u=s.byteStride,f=new Uint8Array(o,c,l);return r.decodeGltfBufferAsync?r.decodeGltfBufferAsync(h,u,f,s.mode,s.filter).then(function(m){return m.buffer}):r.ready.then(function(){const m=new ArrayBuffer(h*u);return r.decodeGltfBuffer(new Uint8Array(m),h,u,f,s.mode,s.filter),m})})}else return null}}class c_{constructor(e){this.name=at.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const s=t.meshes[n.mesh];for(const l of s.primitives)if(l.mode!==On.TRIANGLES&&l.mode!==On.TRIANGLE_STRIP&&l.mode!==On.TRIANGLE_FAN&&l.mode!==void 0)return null;const r=n.extensions[this.name].attributes,o=[],c={};for(const l in r)o.push(this.parser.getDependency("accessor",r[l]).then(h=>(c[l]=h,c[l])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(l=>{const h=l.pop(),u=h.isGroup?h.children:[h],f=l[0].count,m=[];for(const x of u){const _=new He,p=new Z,d=new St,C=new Z(1,1,1),y=new Rt(x.geometry,x.material,f);for(let M=0;M<f;M++)c.TRANSLATION&&p.fromBufferAttribute(c.TRANSLATION,M),c.ROTATION&&d.fromBufferAttribute(c.ROTATION,M),c.SCALE&&C.fromBufferAttribute(c.SCALE,M),y.setMatrixAt(M,_.compose(p,d,C));for(const M in c)if(M==="_COLOR_0"){const W=c[M];y.instanceColor=new Gc(W.array,W.itemSize,W.normalized)}else M!=="TRANSLATION"&&M!=="ROTATION"&&M!=="SCALE"&&x.geometry.setAttribute(M,c[M]);Tt.prototype.copy.call(y,x),this.parser.assignFinalMaterial(y),m.push(y)}return h.isGroup?(h.clear(),h.add(...m),h):m[0]}))}}const wf="glTF",ga=12,ou={JSON:1313821514,BIN:5130562};class l_{constructor(e){this.name=at.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,ga),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==wf)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const s=this.header.length-ga,a=new DataView(e,ga);let r=0;for(;r<s;){const o=a.getUint32(r,!0);r+=4;const c=a.getUint32(r,!0);if(r+=4,c===ou.JSON){const l=new Uint8Array(e,ga+r,o);this.content=n.decode(l)}else if(c===ou.BIN){const l=ga+r;this.body=e.slice(l,l+o)}r+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class h_{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=at.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,s=this.dracoLoader,a=e.extensions[this.name].bufferView,r=e.extensions[this.name].attributes,o={},c={},l={};for(const h in r){const u=qc[h]||h.toLowerCase();o[u]=r[h]}for(const h in e.attributes){const u=qc[h]||h.toLowerCase();if(r[h]!==void 0){const f=n.accessors[e.attributes[h]],m=Hs[f.componentType];l[u]=m.name,c[u]=f.normalized===!0}}return t.getDependency("bufferView",a).then(function(h){return new Promise(function(u,f){s.decodeDracoFile(h,function(m){for(const x in m.attributes){const _=m.attributes[x],p=c[x];p!==void 0&&(_.normalized=p)}u(m)},o,l,fn,f)})})}}class u_{constructor(){this.name=at.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class f_{constructor(){this.name=at.KHR_MESH_QUANTIZATION}}class Sf extends Va{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,a=e*s*3+s;for(let r=0;r!==s;r++)t[r]=n[a+r];return t}interpolate_(e,t,n,s){const a=this.resultBuffer,r=this.sampleValues,o=this.valueSize,c=o*2,l=o*3,h=s-t,u=(n-t)/h,f=u*u,m=f*u,x=e*l,_=x-l,p=-2*m+3*f,d=m-f,C=1-p,y=d-f+u;for(let M=0;M!==o;M++){const W=r[_+M+o],V=r[_+M+c]*h,G=r[x+M+o],ee=r[x+M]*h;a[M]=C*W+y*V+p*G+d*ee}return a}}const d_=new St;class A_ extends Sf{interpolate_(e,t,n,s){const a=super.interpolate_(e,t,n,s);return d_.fromArray(a).normalize().toArray(a),a}}const On={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},Hs={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},cu={9728:on,9729:_n,9984:Cu,9985:Tr,9986:_a,9987:hi},lu={33071:wi,33648:Fr,10497:Pn},tc={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},qc={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},ki={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},p_={CUBICSPLINE:void 0,LINEAR:Fa,STEP:Ua},nc={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function m_(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new ms({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:ni})),i.DefaultMaterial}function is(i,e,t){for(const n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Ci(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function g_(i,e,t){let n=!1,s=!1,a=!1;for(let l=0,h=e.length;l<h;l++){const u=e[l];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(s=!0),u.COLOR_0!==void 0&&(a=!0),n&&s&&a)break}if(!n&&!s&&!a)return Promise.resolve(i);const r=[],o=[],c=[];for(let l=0,h=e.length;l<h;l++){const u=e[l];if(n){const f=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):i.attributes.position;r.push(f)}if(s){const f=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):i.attributes.normal;o.push(f)}if(a){const f=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):i.attributes.color;c.push(f)}}return Promise.all([Promise.all(r),Promise.all(o),Promise.all(c)]).then(function(l){const h=l[0],u=l[1],f=l[2];return n&&(i.morphAttributes.position=h),s&&(i.morphAttributes.normal=u),a&&(i.morphAttributes.color=f),i.morphTargetsRelative=!0,i})}function b_(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function x_(i){let e;const t=i.extensions&&i.extensions[at.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+ic(t.attributes):e=i.indices+":"+ic(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+ic(i.targets[n]);return e}function ic(i){let e="";const t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function Yc(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function __(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const E_=new He;class v_{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Vx,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,a=!1,r=-1;if(typeof navigator<"u"){const o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;const c=o.match(/Version\/(\d+)/);s=n&&c?parseInt(c[1],10):-1,a=o.indexOf("Firefox")>-1,r=a?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||a&&r<98?this.textureLoader=new xl(this.options.manager):this.textureLoader=new Gb(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Ta(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,s=this.json,a=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(r){return r._markDefs&&r._markDefs()}),Promise.all(this._invokeAll(function(r){return r.beforeRoot&&r.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(r){const o={scene:r[0][s.scene||0],scenes:r[0],animations:r[1],cameras:r[2],asset:s.asset,parser:n,userData:{}};return is(a,o,s),Ci(o,s),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(o)})).then(function(){for(const c of o.scenes)c.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,a=t.length;s<a;s++){const r=t[s].joints;for(let o=0,c=r.length;o<c;o++)e[r[o]].isBone=!0}for(let s=0,a=e.length;s<a;s++){const r=e[s];r.mesh!==void 0&&(this._addNodeRef(this.meshCache,r.mesh),r.skin!==void 0&&(n[r.mesh].isSkinnedMesh=!0)),r.camera!==void 0&&this._addNodeRef(this.cameraCache,r.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const s=n.clone(),a=(r,o)=>{const c=this.associations.get(r);c!=null&&this.associations.set(o,c);for(const[l,h]of r.children.entries())a(h,o.children[l])};return a(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const s=e(t[n]);if(s)return s}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let s=0;s<t.length;s++){const a=e(t[s]);a&&n.push(a)}return n}getDependency(e,t){const n=e+":"+t;let s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(a){return a.loadNode&&a.loadNode(t)});break;case"mesh":s=this._invokeOne(function(a){return a.loadMesh&&a.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(a){return a.loadBufferView&&a.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(a){return a.loadMaterial&&a.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(a){return a.loadTexture&&a.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(a){return a.loadAnimation&&a.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(a){return a!=this&&a.getDependency&&a.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(a,r){return n.getDependency(e,r)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[at.KHR_BINARY_GLTF].body);const s=this.options;return new Promise(function(a,r){n.load(Ba.resolveURL(t.uri,s.path),a,void 0,function(){r(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const s=t.byteLength||0,a=t.byteOffset||0;return n.slice(a,a+s)})}loadAccessor(e){const t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){const r=tc[s.type],o=Hs[s.componentType],c=s.normalized===!0,l=new o(s.count*r);return Promise.resolve(new Bt(l,r,c))}const a=[];return s.bufferView!==void 0?a.push(this.getDependency("bufferView",s.bufferView)):a.push(null),s.sparse!==void 0&&(a.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),a.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(a).then(function(r){const o=r[0],c=tc[s.type],l=Hs[s.componentType],h=l.BYTES_PER_ELEMENT,u=h*c,f=s.byteOffset||0,m=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,x=s.normalized===!0;let _,p;if(m&&m!==u){const d=Math.floor(f/m),C="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+d+":"+s.count;let y=t.cache.get(C);y||(_=new l(o,d*m,s.count*m/h),y=new Y0(_,m/h),t.cache.add(C,y)),p=new ml(y,c,f%m/h,x)}else o===null?_=new l(s.count*c):_=new l(o,f,s.count*c),p=new Bt(_,c,x);if(s.sparse!==void 0){const d=tc.SCALAR,C=Hs[s.sparse.indices.componentType],y=s.sparse.indices.byteOffset||0,M=s.sparse.values.byteOffset||0,W=new C(r[1],y,s.sparse.count*d),V=new l(r[2],M,s.sparse.count*c);o!==null&&(p=new Bt(p.array.slice(),p.itemSize,p.normalized)),p.normalized=!1;for(let G=0,ee=W.length;G<ee;G++){const R=W[G];if(p.setX(R,V[G*c]),c>=2&&p.setY(R,V[G*c+1]),c>=3&&p.setZ(R,V[G*c+2]),c>=4&&p.setW(R,V[G*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}p.normalized=x}return p})}loadTexture(e){const t=this.json,n=this.options,a=t.textures[e].source,r=t.images[a];let o=this.textureLoader;if(r.uri){const c=n.manager.getHandler(r.uri);c!==null&&(o=c)}return this.loadTextureImage(e,a,o)}loadTextureImage(e,t,n){const s=this,a=this.json,r=a.textures[e],o=a.images[t],c=(o.uri||o.bufferView)+":"+r.sampler;if(this.textureCache[c])return this.textureCache[c];const l=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=r.name||o.name||"",h.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(h.name=o.uri);const f=(a.samplers||{})[r.sampler]||{};return h.magFilter=cu[f.magFilter]||_n,h.minFilter=cu[f.minFilter]||hi,h.wrapS=lu[f.wrapS]||Pn,h.wrapT=lu[f.wrapT]||Pn,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==on&&h.minFilter!==_n,s.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){const n=this,s=this.json,a=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());const r=s.images[e],o=self.URL||self.webkitURL;let c=r.uri||"",l=!1;if(r.bufferView!==void 0)c=n.getDependency("bufferView",r.bufferView).then(function(u){l=!0;const f=new Blob([u],{type:r.mimeType});return c=o.createObjectURL(f),c});else if(r.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const h=Promise.resolve(c).then(function(u){return new Promise(function(f,m){let x=f;t.isImageBitmapLoader===!0&&(x=function(_){const p=new kt(_);p.needsUpdate=!0,f(p)}),t.load(Ba.resolveURL(u,a.path),x,void 0,m)})}).then(function(u){return l===!0&&o.revokeObjectURL(c),Ci(u,r),u.userData.mimeType=r.mimeType||__(r.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,s){const a=this;return this.getDependency("texture",n.index).then(function(r){if(!r)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(r=r.clone(),r.channel=n.texCoord),a.extensions[at.KHR_TEXTURE_TRANSFORM]){const o=n.extensions!==void 0?n.extensions[at.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const c=a.associations.get(r);r=a.extensions[at.KHR_TEXTURE_TRANSFORM].extendTexture(r,o),a.associations.set(r,c)}}return s!==void 0&&(r.colorSpace=s),e[t]=r,r})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const s=t.attributes.tangent===void 0,a=t.attributes.color!==void 0,r=t.attributes.normal===void 0;if(e.isPoints){const o="PointsMaterial:"+n.uuid;let c=this.cache.get(o);c||(c=new ef,Hn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(o,c)),n=c}else if(e.isLine){const o="LineBasicMaterial:"+n.uuid;let c=this.cache.get(o);c||(c=new $u,Hn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(o,c)),n=c}if(s||a||r){let o="ClonedMaterial:"+n.uuid+":";s&&(o+="derivative-tangents:"),a&&(o+="vertex-colors:"),r&&(o+="flat-shading:");let c=this.cache.get(o);c||(c=n.clone(),a&&(c.vertexColors=!0),r&&(c.flatShading=!0),s&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(o,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return ms}loadMaterial(e){const t=this,n=this.json,s=this.extensions,a=n.materials[e];let r;const o={},c=a.extensions||{},l=[];if(c[at.KHR_MATERIALS_UNLIT]){const u=s[at.KHR_MATERIALS_UNLIT];r=u.getMaterialType(),l.push(u.extendParams(o,a,t))}else{const u=a.pbrMetallicRoughness||{};if(o.color=new Ie(1,1,1),o.opacity=1,Array.isArray(u.baseColorFactor)){const f=u.baseColorFactor;o.color.setRGB(f[0],f[1],f[2],fn),o.opacity=f[3]}u.baseColorTexture!==void 0&&l.push(t.assignTexture(o,"map",u.baseColorTexture,Pt)),o.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,o.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(o,"metalnessMap",u.metallicRoughnessTexture)),l.push(t.assignTexture(o,"roughnessMap",u.metallicRoughnessTexture))),r=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,o)})))}a.doubleSided===!0&&(o.side=It);const h=a.alphaMode||nc.OPAQUE;if(h===nc.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===nc.MASK&&(o.alphaTest=a.alphaCutoff!==void 0?a.alphaCutoff:.5)),a.normalTexture!==void 0&&r!==Wi&&(l.push(t.assignTexture(o,"normalMap",a.normalTexture)),o.normalScale=new Oe(1,1),a.normalTexture.scale!==void 0)){const u=a.normalTexture.scale;o.normalScale.set(u,u)}if(a.occlusionTexture!==void 0&&r!==Wi&&(l.push(t.assignTexture(o,"aoMap",a.occlusionTexture)),a.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=a.occlusionTexture.strength)),a.emissiveFactor!==void 0&&r!==Wi){const u=a.emissiveFactor;o.emissive=new Ie().setRGB(u[0],u[1],u[2],fn)}return a.emissiveTexture!==void 0&&r!==Wi&&l.push(t.assignTexture(o,"emissiveMap",a.emissiveTexture,Pt)),Promise.all(l).then(function(){const u=new r(o);return a.name&&(u.name=a.name),Ci(u,a),t.associations.set(u,{materials:e}),a.extensions&&is(s,u,a),u})}createUniqueName(e){const t=gt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,s=this.primitiveCache;function a(o){return n[at.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(c){return hu(c,o,t)})}const r=[];for(let o=0,c=e.length;o<c;o++){const l=e[o],h=x_(l),u=s[h];if(u)r.push(u.promise);else{let f;l.extensions&&l.extensions[at.KHR_DRACO_MESH_COMPRESSION]?f=a(l):f=hu(new xt,l,t),s[h]={primitive:l,promise:f},r.push(f)}}return Promise.all(r)}loadMesh(e){const t=this,n=this.json,s=this.extensions,a=n.meshes[e],r=a.primitives,o=[];for(let c=0,l=r.length;c<l;c++){const h=r[c].material===void 0?m_(this.cache):this.getDependency("material",r[c].material);o.push(h)}return o.push(t.loadGeometries(r)),Promise.all(o).then(function(c){const l=c.slice(0,c.length-1),h=c[c.length-1],u=[];for(let m=0,x=h.length;m<x;m++){const _=h[m],p=r[m];let d;const C=l[m];if(p.mode===On.TRIANGLES||p.mode===On.TRIANGLE_STRIP||p.mode===On.TRIANGLE_FAN||p.mode===void 0)d=a.isSkinnedMesh===!0?new K0(_,C):new st(_,C),d.isSkinnedMesh===!0&&d.normalizeSkinWeights(),p.mode===On.TRIANGLE_STRIP?d.geometry=tu(d.geometry,Pu):p.mode===On.TRIANGLE_FAN&&(d.geometry=tu(d.geometry,kc));else if(p.mode===On.LINES)d=new $0(_,C);else if(p.mode===On.LINE_STRIP)d=new bl(_,C);else if(p.mode===On.LINE_LOOP)d=new eb(_,C);else if(p.mode===On.POINTS)d=new tb(_,C);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+p.mode);Object.keys(d.geometry.morphAttributes).length>0&&b_(d,a),d.name=t.createUniqueName(a.name||"mesh_"+e),Ci(d,a),p.extensions&&is(s,d,p),t.assignFinalMaterial(d),u.push(d)}for(let m=0,x=u.length;m<x;m++)t.associations.set(u[m],{meshes:e,primitives:m});if(u.length===1)return a.extensions&&is(s,u[0],a),u[0];const f=new Dn;a.extensions&&is(s,f,a),t.associations.set(f,{meshes:e});for(let m=0,x=u.length;m<x;m++)f.add(u[m]);return f})}loadCamera(e){let t;const n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new bn(gn.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new eo(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Ci(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let s=0,a=t.joints.length;s<a;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){const a=s.pop(),r=s,o=[],c=[];for(let l=0,h=r.length;l<h;l++){const u=r[l];if(u){o.push(u);const f=new He;a!==null&&f.fromArray(a.array,l*16),c.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new gl(o,c)})}loadAnimation(e){const t=this.json,n=this,s=t.animations[e],a=s.name?s.name:"animation_"+e,r=[],o=[],c=[],l=[],h=[];for(let u=0,f=s.channels.length;u<f;u++){const m=s.channels[u],x=s.samplers[m.sampler],_=m.target,p=_.node,d=s.parameters!==void 0?s.parameters[x.input]:x.input,C=s.parameters!==void 0?s.parameters[x.output]:x.output;_.node!==void 0&&(r.push(this.getDependency("node",p)),o.push(this.getDependency("accessor",d)),c.push(this.getDependency("accessor",C)),l.push(x),h.push(_))}return Promise.all([Promise.all(r),Promise.all(o),Promise.all(c),Promise.all(l),Promise.all(h)]).then(function(u){const f=u[0],m=u[1],x=u[2],_=u[3],p=u[4],d=[];for(let C=0,y=f.length;C<y;C++){const M=f[C],W=m[C],V=x[C],G=_[C],ee=p[C];if(M===void 0)continue;M.updateMatrix&&M.updateMatrix();const R=n._createAnimationTracks(M,W,V,G,ee);if(R)for(let B=0;B<R.length;B++)d.push(R[B])}return new Bb(a,void 0,d)})}createNodeMesh(e){const t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(a){const r=n._getNodeRef(n.meshCache,s.mesh,a);return s.weights!==void 0&&r.traverse(function(o){if(o.isMesh)for(let c=0,l=s.weights.length;c<l;c++)o.morphTargetInfluences[c]=s.weights[c]}),r})}loadNode(e){const t=this.json,n=this,s=t.nodes[e],a=n._loadNodeShallow(e),r=[],o=s.children||[];for(let l=0,h=o.length;l<h;l++)r.push(n.getDependency("node",o[l]));const c=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([a,Promise.all(r),c]).then(function(l){const h=l[0],u=l[1],f=l[2];f!==null&&h.traverse(function(m){m.isSkinnedMesh&&m.bind(f,E_)});for(let m=0,x=u.length;m<x;m++)h.add(u[m]);return h})}_loadNodeShallow(e){const t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const a=t.nodes[e],r=a.name?s.createUniqueName(a.name):"",o=[],c=s._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&o.push(c),a.camera!==void 0&&o.push(s.getDependency("camera",a.camera).then(function(l){return s._getNodeRef(s.cameraCache,a.camera,l)})),s._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){o.push(l)}),this.nodeCache[e]=Promise.all(o).then(function(l){let h;if(a.isBone===!0?h=new Zu:l.length>1?h=new Dn:l.length===1?h=l[0]:h=new Tt,h!==l[0])for(let u=0,f=l.length;u<f;u++)h.add(l[u]);if(a.name&&(h.userData.name=a.name,h.name=r),Ci(h,a),a.extensions&&is(n,h,a),a.matrix!==void 0){const u=new He;u.fromArray(a.matrix),h.applyMatrix4(u)}else a.translation!==void 0&&h.position.fromArray(a.translation),a.rotation!==void 0&&h.quaternion.fromArray(a.rotation),a.scale!==void 0&&h.scale.fromArray(a.scale);return s.associations.has(h)||s.associations.set(h,{}),s.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],s=this,a=new Dn;n.name&&(a.name=s.createUniqueName(n.name)),Ci(a,n),n.extensions&&is(t,a,n);const r=n.nodes||[],o=[];for(let c=0,l=r.length;c<l;c++)o.push(s.getDependency("node",r[c]));return Promise.all(o).then(function(c){for(let h=0,u=c.length;h<u;h++)a.add(c[h]);const l=h=>{const u=new Map;for(const[f,m]of s.associations)(f instanceof Hn||f instanceof kt)&&u.set(f,m);return h.traverse(f=>{const m=s.associations.get(f);m!=null&&u.set(f,m)}),u};return s.associations=l(a),a})}_createAnimationTracks(e,t,n,s,a){const r=[],o=e.name?e.name:e.uuid,c=[];ki[a.path]===ki.weights?e.traverse(function(f){f.morphTargetInfluences&&c.push(f.name?f.name:f.uuid)}):c.push(o);let l;switch(ki[a.path]){case ki.weights:l=Js;break;case ki.rotation:l=Zs;break;case ki.position:case ki.scale:l=$s;break;default:n.itemSize===1?l=Js:l=$s;break}const h=s.interpolation!==void 0?p_[s.interpolation]:Fa,u=this._getArrayFromAccessor(n);for(let f=0,m=c.length;f<m;f++){const x=new l(c[f]+"."+ki[a.path],t.array,u,h);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(x),r.push(x)}return r}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=Yc(t.constructor),s=new Float32Array(t.length);for(let a=0,r=t.length;a<r;a++)s[a]=t[a]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const s=this instanceof Zs?A_:Sf;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function M_(i,e,t){const n=e.attributes,s=new Bi;if(n.POSITION!==void 0){const o=t.json.accessors[n.POSITION],c=o.min,l=o.max;if(c!==void 0&&l!==void 0){if(s.set(new Z(c[0],c[1],c[2]),new Z(l[0],l[1],l[2])),o.normalized){const h=Yc(Hs[o.componentType]);s.min.multiplyScalar(h),s.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const a=e.targets;if(a!==void 0){const o=new Z,c=new Z;for(let l=0,h=a.length;l<h;l++){const u=a[l];if(u.POSITION!==void 0){const f=t.json.accessors[u.POSITION],m=f.min,x=f.max;if(m!==void 0&&x!==void 0){if(c.setX(Math.max(Math.abs(m[0]),Math.abs(x[0]))),c.setY(Math.max(Math.abs(m[1]),Math.abs(x[1]))),c.setZ(Math.max(Math.abs(m[2]),Math.abs(x[2]))),f.normalized){const _=Yc(Hs[f.componentType]);c.multiplyScalar(_)}o.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(o)}i.boundingBox=s;const r=new ui;s.getCenter(r.center),r.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=r}function hu(i,e,t){const n=e.attributes,s=[];function a(r,o){return t.getDependency("accessor",r).then(function(c){i.setAttribute(o,c)})}for(const r in n){const o=qc[r]||r.toLowerCase();o in i.attributes||s.push(a(n[r],o))}if(e.indices!==void 0&&!i.index){const r=t.getDependency("accessor",e.indices).then(function(o){i.setIndex(o)});s.push(r)}return ot.workingColorSpace!==fn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${ot.workingColorSpace}" not supported.`),Ci(i,e),M_(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?g_(i,e.targets,t):i})}var If=(function(){var i="b9H79Tebbbe8Fv9Gbb9Gvuuuuueu9Giuuub9Geueu9Giuuueuikqbeeedddillviebeoweuec:q;iekr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbeY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVbdE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbiL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtblK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbol79IV9Rbrq:P8Yqdbk;3sezu8Jjjjjbcj;eb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Radz1jjjbhwcj;abad9UhoaicefhldnadTmbaoc;WFbGgocjdaocjd6EhDcbhqinaqae9pmeaDaeaq9RaqaDfae6Egkcsfgocl4cifcd4hxdndndndnaoc9WGgmTmbcbhPcehsawcjdfhzalhHinaraH9Rax6midnaraHaxfgl9RcK6mbczhoinawcj;cbfaogifgoc9WfhOdndndndndnaHaic9WfgAco4fRbbaAci4coG4ciGPlbedibkaO9cb83ibaOcwf9cb83ibxikaOalRblalRbbgAco4gCaCciSgCE86bbaocGfalclfaCfgORbbaAcl4ciGgCaCciSgCE86bbaocVfaOaCfgORbbaAcd4ciGgCaCciSgCE86bbaoc7faOaCfgORbbaAciGgAaAciSgAE86bbaoctfaOaAfgARbbalRbegOco4gCaCciSgCE86bbaoc91faAaCfgARbbaOcl4ciGgCaCciSgCE86bbaoc4faAaCfgARbbaOcd4ciGgCaCciSgCE86bbaoc93faAaCfgARbbaOciGgOaOciSgOE86bbaoc94faAaOfgARbbalRbdgOco4gCaCciSgCE86bbaoc95faAaCfgARbbaOcl4ciGgCaCciSgCE86bbaoc96faAaCfgARbbaOcd4ciGgCaCciSgCE86bbaoc97faAaCfgARbbaOciGgOaOciSgOE86bbaoc98faAaOfgORbbalRbiglco4gAaAciSgAE86bbaoc99faOaAfgORbbalcl4ciGgAaAciSgAE86bbaoc9:faOaAfgORbbalcd4ciGgAaAciSgAE86bbaocufaOaAfgoRbbalciGglalciSglE86bbaoalfhlxdkaOalRbwalRbbgAcl4gCaCcsSgCE86bbaocGfalcwfaCfgORbbaAcsGgAaAcsSgAE86bbaocVfaOaAfgORbbalRbegAcl4gCaCcsSgCE86bbaoc7faOaCfgORbbaAcsGgAaAcsSgAE86bbaoctfaOaAfgORbbalRbdgAcl4gCaCcsSgCE86bbaoc91faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc4faOaAfgORbbalRbigAcl4gCaCcsSgCE86bbaoc93faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc94faOaAfgORbbalRblgAcl4gCaCcsSgCE86bbaoc95faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc96faOaAfgORbbalRbvgAcl4gCaCcsSgCE86bbaoc97faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc98faOaAfgORbbalRbogAcl4gCaCcsSgCE86bbaoc99faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc9:faOaAfgORbbalRbrglcl4gAaAcsSgAE86bbaocufaOaAfgoRbbalcsGglalcsSglE86bbaoalfhlxekaOal8Pbb83bbaOcwfalcwf8Pbb83bbalczfhlkdnaiam9pmbaiczfhoaral9RcL0mekkaiam6mialTmidnakTmbawaPfRbbhOcbhoazhiinaiawcj;cbfaofRbbgAce4cbaAceG9R7aOfgO86bbaiadfhiaocefgoak9hmbkkazcefhzaPcefgPad6hsalhHaPad9hmexvkkcbhlasceGmdxikalaxad2fhCdnakTmbcbhHcehsawcjdfhminaral9Rax6mialTmdalaxfhlawaHfRbbhOcbhoamhiinaiawcj;cbfaofRbbgAce4cbaAceG9R7aOfgO86bbaiadfhiaocefgoak9hmbkamcefhmaHcefgHad6hsaHad9hmbkaChlxikcbhocehsinaral9Rax6mdalTmealaxfhlaocefgoad6hsadao9hmbkaChlxdkcbhlasceGTmekc9:hoxikabaqad2fawcjdfakad2z1jjjb8Aawawcjdfakcufad2fadz1jjjb8Aakaqfhqalmbkc9:hoxekcbc99aral9Radcaadca0ESEhokavcj;ebf8Kjjjjbaok;yzeHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecjez:jjjjb8AavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhodnaeTmbcmcsaDceSEhkcbhxcbhmcbhDcbhicbhlindnaoaq9nmbc9:hoxikdndnawRbbgrc;Ve0mbavc;abfalarcl4cu7fcsGcitfgPydlhsaPydbhzdnarcsGgPak9pmbavaiarcu7fcsGcdtfydbaxaPEhraPThPdndnadcd9hmbabaDcetfgHaz87ebaHcdfas87ebaHclfar87ebxekabaDcdtfgHazBdbaHclfasBdbaHcwfarBdbkaxaPfhxavc;abfalcitfgHarBdbaHasBdlavaicdtfarBdbavc;abfalcefcsGglcitfgHazBdbaHarBdlaiaPfhialcefhlxdkdndnaPcsSmbamaPfaPc987fcefhmxekaocefhrao8SbbgPcFeGhHdndnaPcu9mmbarhoxekaocvfhoaHcFbGhHcrhPdninar8SbbgOcFbGaPtaHVhHaOcu9kmearcefhraPcrfgPc8J9hmbxdkkarcefhokaHce4cbaHceG9R7amfhmkdndnadcd9hmbabaDcetfgraz87ebarcdfas87ebarclfam87ebxekabaDcdtfgrazBdbarclfasBdbarcwfamBdbkavc;abfalcitfgramBdbarasBdlavaicdtfamBdbavc;abfalcefcsGglcitfgrazBdbaramBdlaicefhialcefhlxekdnarcpe0mbaxcefgOavaiaqarcsGfRbbgPcl49RcsGcdtfydbaPcz6gHEhravaiaP9RcsGcdtfydbaOaHfgsaPcsGgOEhPaOThOdndnadcd9hmbabaDcetfgzax87ebazcdfar87ebazclfaP87ebxekabaDcdtfgzaxBdbazclfarBdbazcwfaPBdbkavaicdtfaxBdbavc;abfalcitfgzarBdbazaxBdlavaicefgicsGcdtfarBdbavc;abfalcefcsGcitfgzaPBdbazarBdlavaiaHfcsGgicdtfaPBdbavc;abfalcdfcsGglcitfgraxBdbaraPBdlalcefhlaiaOfhiasaOfhxxekaxcbaoRbbgzEgAarc;:eSgrfhsazcsGhCazcl4hXdndnazcs0mbascefhOxekashOavaiaX9RcsGcdtfydbhskdndnaCmbaOcefhxxekaOhxavaiaz9RcsGcdtfydbhOkdndnarTmbaocefhrxekaocdfhrao8SbegHcFeGhPdnaHcu9kmbaocofhAaPcFbGhPcrhodninar8SbbgHcFbGaotaPVhPaHcu9kmearcefhraocrfgoc8J9hmbkaAhrxekarcefhrkaPce4cbaPceG9R7amfgmhAkdndnaXcsSmbarhPxekarcefhPar8SbbgocFeGhHdnaocu9kmbarcvfhsaHcFbGhHcrhodninaP8SbbgrcFbGaotaHVhHarcu9kmeaPcefhPaocrfgoc8J9hmbkashPxekaPcefhPkaHce4cbaHceG9R7amfgmhskdndnaCcsSmbaPhoxekaPcefhoaP8SbbgrcFeGhHdnarcu9kmbaPcvfhOaHcFbGhHcrhrdninao8SbbgPcFbGartaHVhHaPcu9kmeaocefhoarcrfgrc8J9hmbkaOhoxekaocefhokaHce4cbaHceG9R7amfgmhOkdndnadcd9hmbabaDcetfgraA87ebarcdfas87ebarclfaO87ebxekabaDcdtfgraABdbarclfasBdbarcwfaOBdbkavc;abfalcitfgrasBdbaraABdlavaicdtfaABdbavc;abfalcefcsGcitfgraOBdbarasBdlavaicefgicsGcdtfasBdbavc;abfalcdfcsGcitfgraABdbaraOBdlavaiazcz6aXcsSVfgicsGcdtfaOBdbaiaCTaCcsSVfhialcifhlkawcefhwalcsGhlaicsGhiaDcifgDae6mbkkcbc99aoaqSEhokavc;aef8Kjjjjbaok:llevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:Lvoeue99dud99eud99dndnadcl9hmbaeTmeindndnabcdfgd8Sbb:Yab8Sbbgi:Ygl:l:tabcefgv8Sbbgo:Ygr:l:tgwJbb;:9cawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai86bbdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad86bbdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad86bbabclfhbaecufgembxdkkaeTmbindndnabclfgd8Ueb:Yab8Uebgi:Ygl:l:tabcdfgv8Uebgo:Ygr:l:tgwJb;:FSawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai87ebdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad87ebdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad87ebabcwfhbaecufgembkkk;siliui99iue99dnaeTmbcbhiabhlindndnJ;Zl81Zalcof8UebgvciV:Y:vgoal8Ueb:YNgrJb;:FSNJbbbZJbbb:;arJbbbb9GEMgw:lJbbb9p9DTmbaw:OhDxekcjjjj94hDkalclf8Uebhqalcdf8UebhkabavcefciGaiVcetfaD87ebdndnaoak:YNgwJb;:FSNJbbbZJbbb:;awJbbbb9GEMgx:lJbbb9p9DTmbax:Ohkxekcjjjj94hkkabavcdfciGaiVcetfak87ebdndnaoaq:YNgoJb;:FSNJbbbZJbbb:;aoJbbbb9GEMgx:lJbbb9p9DTmbax:Ohqxekcjjjj94hqkabavcufciGaiVcetfaq87ebdndnJbbjZararN:tawawN:taoaoN:tgrJbbbbarJbbbb9GE:rJb;:FSNJbbbZMgr:lJbbb9p9DTmbar:Ohqxekcjjjj94hqkabavciGaiVcetfaq87ebalcwfhlaiclfhiaecufgembkkk9mbdnadcd4ae2geTmbinababydbgdcwtcw91:Yadce91cjjj;8ifcjjj98G::NUdbabclfhbaecufgembkkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik;LeeeudndnaeabVciGTmbabhixekdndnadcz9pmbabhixekabhiinaiaeydbBdbaiclfaeclfydbBdbaicwfaecwfydbBdbaicxfaecxfydbBdbaiczfhiaeczfheadc9Wfgdcs0mbkkadcl6mbinaiaeydbBdbaeclfheaiclfhiadc98fgdci0mbkkdnadTmbinaiaeRbb86bbaicefhiaecefheadcufgdmbkkabk;aeedudndnabciGTmbabhixekaecFeGc:b:c:ew2hldndnadcz9pmbabhixekabhiinaialBdbaicxfalBdbaicwfalBdbaiclfalBdbaiczfhiadc9Wfgdcs0mbkkadcl6mbinaialBdbaiclfhiadc98fgdci0mbkkdnadTmbinaiae86bbaicefhiadcufgdmbkkabkkkebcjwklz9Kbb",e="b9H79TebbbeKl9Gbb9Gvuuuuueu9Giuuub9Geueuikqbbebeedddilve9Weeeviebeoweuec:q;Aekr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbdY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVblE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtboK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbrL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbwl79IV9RbDq;t9tqlbzik9:evu8Jjjjjbcz9Rhbcbheincbhdcbhiinabcwfadfaicjuaead4ceGglE86bbaialfhiadcefgdcw9hmbkaec:q:yjjbfai86bbaecitc:q1jjbfab8Piw83ibaecefgecjd9hmbkk;h8JlHud97euo978Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Rad;8qbbcj;abad9UhoaicefhldnadTmbaoc;WFbGgocjdaocjd6EhwcbhDinaDae9pmeawaeaD9RaDawfae6Egqcsfgoc9WGgkci2hxakcethmaocl4cifcd4hPabaDad2fhscbhzdnincehHalhOcbhAdninaraO9RaP6miavcj;cbfaAak2fhCaOaPfhlcbhidnakc;ab6mbaral9Rc;Gb6mbcbhoinaCaofhidndndndndnaOaoco4fRbbgXciGPlbedibkaipxbbbbbbbbbbbbbbbbpklbxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklbalczfhlkdndndndndnaXcd4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklzxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklzalczfhlkdndndndndnaXcl4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklaxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklaalczfhlkdndndndndnaXco4Plbedibkaipxbbbbbbbbbbbbbbbbpkl8WxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WalclfaYpQbfaXc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WalcwfaYpQbfaXc:q:yjjbfRbbfhlxekaialpbbbpkl8Walczfhlkaoc;abfhiaocjefak0meaihoaral9Rc;Fb0mbkkdndnaiak9pmbaici4hoinaral9RcK6mdaCaifhXdndndndndnaOaico4fRbbaocoG4ciGPlbedibkaXpxbbbbbbbbbbbbbbbbpklbxikaXalpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaXalpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaXalpbbbpklbalczfhlkaocdfhoaiczfgiak6mbkkalTmbaAci6hHalhOaAcefgohAaoclSmdxekkcbhlaHceGmdkdnakTmbavcjdfazfhiavazfpbdbhYcbhXinaiavcj;cbfaXfgopblbgLcep9TaLpxeeeeeeeeeeeeeeeegQp9op9Hp9rgLaoakfpblbg8Acep9Ta8AaQp9op9Hp9rg8ApmbzeHdOiAlCvXoQrLgEaoamfpblbg3cep9Ta3aQp9op9Hp9rg3aoaxfpblbg5cep9Ta5aQp9op9Hp9rg5pmbzeHdOiAlCvXoQrLg8EpmbezHdiOAlvCXorQLgQaQpmbedibedibedibediaYp9UgYp9AdbbaiadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaEa8EpmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaLa8ApmwKDYq8AkEx3m5P8Es8FgLa3a5pmwKDYq8AkEx3m5P8Es8Fg8ApmbezHdiOAlvCXorQLgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaLa8ApmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfhiaXczfgXak6mbkkazclfgzad6mbkasavcjdfaqad2;8qbbavavcjdfaqcufad2fad;8qbbaqaDfhDc9:hoalmexikkc9:hoxekcbc99aral9Radcaadca0ESEhokavcj;kbf8Kjjjjbaokwbz:bjjjbk;uzeHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecje;8kbavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhodnaeTmbcmcsaDceSEhkcbhxcbhmcbhDcbhicbhlindnaoaq9nmbc9:hoxikdndnawRbbgrc;Ve0mbavc;abfalarcl4cu7fcsGcitfgPydlhsaPydbhzdnarcsGgPak9pmbavaiarcu7fcsGcdtfydbaxaPEhraPThPdndnadcd9hmbabaDcetfgHaz87ebaHcdfas87ebaHclfar87ebxekabaDcdtfgHazBdbaHclfasBdbaHcwfarBdbkaxaPfhxavc;abfalcitfgHarBdbaHasBdlavaicdtfarBdbavc;abfalcefcsGglcitfgHazBdbaHarBdlaiaPfhialcefhlxdkdndnaPcsSmbamaPfaPc987fcefhmxekaocefhrao8SbbgPcFeGhHdndnaPcu9mmbarhoxekaocvfhoaHcFbGhHcrhPdninar8SbbgOcFbGaPtaHVhHaOcu9kmearcefhraPcrfgPc8J9hmbxdkkarcefhokaHce4cbaHceG9R7amfhmkdndnadcd9hmbabaDcetfgraz87ebarcdfas87ebarclfam87ebxekabaDcdtfgrazBdbarclfasBdbarcwfamBdbkavc;abfalcitfgramBdbarasBdlavaicdtfamBdbavc;abfalcefcsGglcitfgrazBdbaramBdlaicefhialcefhlxekdnarcpe0mbaxcefgOavaiaqarcsGfRbbgPcl49RcsGcdtfydbaPcz6gHEhravaiaP9RcsGcdtfydbaOaHfgsaPcsGgOEhPaOThOdndnadcd9hmbabaDcetfgzax87ebazcdfar87ebazclfaP87ebxekabaDcdtfgzaxBdbazclfarBdbazcwfaPBdbkavaicdtfaxBdbavc;abfalcitfgzarBdbazaxBdlavaicefgicsGcdtfarBdbavc;abfalcefcsGcitfgzaPBdbazarBdlavaiaHfcsGgicdtfaPBdbavc;abfalcdfcsGglcitfgraxBdbaraPBdlalcefhlaiaOfhiasaOfhxxekaxcbaoRbbgzEgAarc;:eSgrfhsazcsGhCazcl4hXdndnazcs0mbascefhOxekashOavaiaX9RcsGcdtfydbhskdndnaCmbaOcefhxxekaOhxavaiaz9RcsGcdtfydbhOkdndnarTmbaocefhrxekaocdfhrao8SbegHcFeGhPdnaHcu9kmbaocofhAaPcFbGhPcrhodninar8SbbgHcFbGaotaPVhPaHcu9kmearcefhraocrfgoc8J9hmbkaAhrxekarcefhrkaPce4cbaPceG9R7amfgmhAkdndnaXcsSmbarhPxekarcefhPar8SbbgocFeGhHdnaocu9kmbarcvfhsaHcFbGhHcrhodninaP8SbbgrcFbGaotaHVhHarcu9kmeaPcefhPaocrfgoc8J9hmbkashPxekaPcefhPkaHce4cbaHceG9R7amfgmhskdndnaCcsSmbaPhoxekaPcefhoaP8SbbgrcFeGhHdnarcu9kmbaPcvfhOaHcFbGhHcrhrdninao8SbbgPcFbGartaHVhHaPcu9kmeaocefhoarcrfgrc8J9hmbkaOhoxekaocefhokaHce4cbaHceG9R7amfgmhOkdndnadcd9hmbabaDcetfgraA87ebarcdfas87ebarclfaO87ebxekabaDcdtfgraABdbarclfasBdbarcwfaOBdbkavc;abfalcitfgrasBdbaraABdlavaicdtfaABdbavc;abfalcefcsGcitfgraOBdbarasBdlavaicefgicsGcdtfasBdbavc;abfalcdfcsGcitfgraABdbaraOBdlavaiazcz6aXcsSVfgicsGcdtfaOBdbaiaCTaCcsSVfhialcifhlkawcefhwalcsGhlaicsGhiaDcifgDae6mbkkcbc99aoaqSEhokavc;aef8Kjjjjbaok:llevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:EPliuo97eue978Jjjjjbca9Rhidndnadcl9hmbdnaec98GglTmbcbhvabhdinadadpbbbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDpxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpkbbadczfhdavclfgval6mbkkalae9pmeaiaeciGgvcdtgdVcbczad9R;8kbaiabalcdtfglad;8qbbdnavTmbaiaipblbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDpxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpklbkalaiad;8qbbskdnaec98GgxTmbcbhvabhdinadczfglalpbbbgopxbbbbbbFFbbbbbbFFgkp9oadpbbbgDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eaDaopmbediwDqkzHOAKY8AEgoczp:Sep;6egrp;Geaoczp:Reczp:Sep;6egwp;Gep;Kep;Legopxb;:FSb;:FSb;:FSb;:FSawaopxbbbbbbbbbbbbbbbbp:2egqawpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegwawp;Meaoaop;Mearaqaramp9op9rp;Kegoaop;Mep;Kep;Kep;Jep;Negrp;Mepxbbn0bbn0bbn0bbn0gqp;Keczp:Reawarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9op9qgwaoarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogopmwDKYqk8AExm35Ps8E8Fp9qpkbbadaDakp9oawaopmbezHdiOAlvCXorQLp9qpkbbadcafhdavclfgvax6mbkkaxae9pmbaiaeciGgvcitgdfcbcaad9R;8kbaiabaxcitfglad;8qbbdnavTmbaiaipblzgopxbbbbbbFFbbbbbbFFgkp9oaipblbgDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eaDaopmbediwDqkzHOAKY8AEgoczp:Sep;6egrp;Geaoczp:Reczp:Sep;6egwp;Gep;Kep;Legopxb;:FSb;:FSb;:FSb;:FSawaopxbbbbbbbbbbbbbbbbp:2egqawpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegwawp;Meaoaop;Mearaqaramp9op9rp;Kegoaop;Mep;Kep;Kep;Jep;Negrp;Mepxbbn0bbn0bbn0bbn0gqp;Keczp:Reawarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9op9qgwaoarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogopmwDKYqk8AExm35Ps8E8Fp9qpklzaiaDakp9oawaopmbezHdiOAlvCXorQLp9qpklbkalaiad;8qbbkk;4wllue97euv978Jjjjjbc8W9Rhidnaec98GglTmbcbhvabhoinaiaopbbbgraoczfgwpbbbgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklbaopxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaqakp;Mearp;Keczp:ReaDakp;Mearp;Keamp9op9qgkpmbezHdiOAlvCXorQLgrp5baipblbpEb:T:j83ibaocwfarp5eaipblbpEe:T:j83ibawaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblbpEd:T:j83ibaocKfakp5eaipblbpEi:T:j83ibaocafhoavclfgval6mbkkdnalae9pmbaiaeciGgvcitgofcbcaao9R;8kbaiabalcitfgwao;8qbbdnavTmbaiaipblbgraipblzgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklaaipxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaqakp;Mearp;Keczp:ReaDakp;Mearp;Keamp9op9qgkpmbezHdiOAlvCXorQLgrp5baipblapEb:T:j83ibaiarp5eaipblapEe:T:j83iwaiaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblapEd:T:j83izaiakp5eaipblapEi:T:j83iKkawaiao;8qbbkk:Pddiue978Jjjjjbc;ab9Rhidnadcd4ae2glc98GgvTmbcbhdabheinaeaepbbbgocwp:Recwp:Sep;6eaocep:SepxbbjZbbjZbbjZbbjZp:UepxbbjFbbjFbbjFbbjFp9op;Mepkbbaeczfheadclfgdav6mbkkdnaval9pmbaialciGgdcdtgeVcbc;abae9R;8kbaiabavcdtfgvae;8qbbdnadTmbaiaipblbgocwp:Recwp:Sep;6eaocep:SepxbbjZbbjZbbjZbbjZp:UepxbbjFbbjFbbjFbbjFp9op;Mepklbkavaiae;8qbbkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaikkkebcjwklz9Tbb",t=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,3,2,0,0,5,3,1,0,1,12,1,0,10,22,2,12,0,65,0,65,0,65,0,252,10,0,0,11,7,0,65,0,253,15,26,11]),n=new Uint8Array([32,0,65,2,1,106,34,33,3,128,11,4,13,64,6,253,10,7,15,116,127,5,8,12,40,16,19,54,20,9,27,255,113,17,42,67,24,23,146,148,18,14,22,45,70,69,56,114,101,21,25,63,75,136,108,28,118,29,73,115]);if(typeof WebAssembly!="object")return{supported:!1};var s=WebAssembly.validate(t)?e:i,a,r=WebAssembly.instantiate(o(s),{}).then(function(d){a=d.instance,a.exports.__wasm_call_ctors()});function o(d){for(var C=new Uint8Array(d.length),y=0;y<d.length;++y){var M=d.charCodeAt(y);C[y]=M>96?M-97:M>64?M-39:M+4}for(var W=0,y=0;y<d.length;++y)C[W++]=C[y]<60?n[C[y]]:(C[y]-60)*64+C[++y];return C.buffer.slice(0,W)}function c(d,C,y,M,W,V){var G=a.exports.sbrk,ee=y+3&-4,R=G(ee*M),B=G(W.length),A=new Uint8Array(a.exports.memory.buffer);A.set(W,B);var I=d(R,y,M,B,W.length);if(I==0&&V&&V(R,ee,M),C.set(A.subarray(R,R+y*M)),G(R-G(0)),I!=0)throw new Error("Malformed buffer data: "+I)}var l={NONE:"",OCTAHEDRAL:"meshopt_decodeFilterOct",QUATERNION:"meshopt_decodeFilterQuat",EXPONENTIAL:"meshopt_decodeFilterExp"},h={ATTRIBUTES:"meshopt_decodeVertexBuffer",TRIANGLES:"meshopt_decodeIndexBuffer",INDICES:"meshopt_decodeIndexSequence"},u=[],f=0;function m(d){var C={object:new Worker(d),pending:0,requests:{}};return C.object.onmessage=function(y){var M=y.data;C.pending-=M.count,C.requests[M.id][M.action](M.value),delete C.requests[M.id]},C}function x(d){for(var C="var instance; var ready = WebAssembly.instantiate(new Uint8Array(["+new Uint8Array(o(s))+"]), {}).then(function(result) { instance = result.instance; instance.exports.__wasm_call_ctors(); });self.onmessage = workerProcess;"+c.toString()+p.toString(),y=new Blob([C],{type:"text/javascript"}),M=URL.createObjectURL(y),W=0;W<d;++W)u[W]=m(M);URL.revokeObjectURL(M)}function _(d,C,y,M,W){for(var V=u[0],G=1;G<u.length;++G)u[G].pending<V.pending&&(V=u[G]);return new Promise(function(ee,R){var B=new Uint8Array(y),A=f++;V.pending+=d,V.requests[A]={resolve:ee,reject:R},V.object.postMessage({id:A,count:d,size:C,source:B,mode:M,filter:W},[B.buffer])})}function p(d){r.then(function(){var C=d.data;try{var y=new Uint8Array(C.count*C.size);c(a.exports[C.mode],y,C.count,C.size,C.source,a.exports[C.filter]),self.postMessage({id:C.id,count:C.count,action:"resolve",value:y},[y.buffer])}catch(M){self.postMessage({id:C.id,count:C.count,action:"reject",value:M})}})}return{ready:r,supported:!0,useWorkers:function(d){x(d)},decodeVertexBuffer:function(d,C,y,M,W){c(a.exports.meshopt_decodeVertexBuffer,d,C,y,M,a.exports[l[W]])},decodeIndexBuffer:function(d,C,y,M){c(a.exports.meshopt_decodeIndexBuffer,d,C,y,M)},decodeIndexSequence:function(d,C,y,M){c(a.exports.meshopt_decodeIndexSequence,d,C,y,M)},decodeGltfBuffer:function(d,C,y,M,W,V){c(a.exports[h[W]],d,C,y,M,a.exports[l[V]])},decodeGltfBufferAsync:function(d,C,y,M,W){return u.length>0?_(d,C,y,h[M],l[W]):r.then(function(){var V=new Uint8Array(d*C);return c(a.exports[h[M]],V,d,C,y,a.exports[l[W]]),V})}}})();function y_(i,e){const t=new xt,n=i.attributes.position.count;for(const[s,a]of[["position",3],["normal",3],["color",3]]){const r=i.getAttribute(s),o=new Float32Array(n*a);for(let c=0;c<n;c++)o[c*a]=r?r.getX(c):1,o[c*a+1]=r?r.getY(c):1,o[c*a+2]=r?r.getZ(c):1;t.setAttribute(s,new Bt(o,a))}return i.index&&t.setIndex(Array.from(i.index.array)),t.applyMatrix4(e),t}function uu(i,e,t){i.updateMatrixWorld(!0);const n=(i.parent??i).matrixWorld.clone().invert(),s={};i.traverse(o=>{const c=o;if(!c.isMesh)return;const l=c.material.name.includes("lead")?"lead":"matte";(s[l]||=[]).push(y_(c.geometry,new He().multiplyMatrices(n,c.matrixWorld)))});const a=new Dn;let r=0;for(const[o,c]of Object.entries(s)){const l=Yr(c);c.forEach(u=>u.dispose());const h=new st(l,e[o]);h.castShadow=h.receiveShadow=t,h.name=o,a.add(h),r+=(l.index?l.index.count:l.attributes.position.count)/3}return{g:a,tris:r}}async function C_(i,e="ayasofya"){return(await fetch(`${i}models/${e}.anchor.json`)).json()}async function w_(i){const e=await C_(i.base),n=await new Cf().setMeshoptDecoder(If).loadAsync(`${i.base}models/${e.model_web}`),s=i.shadows??!0,a={matte:new ms({name:"ayasofya_matte",vertexColors:!0,roughness:.9,metalness:0,side:It}),lead:new ms({name:"ayasofya_lead_gold",vertexColors:!0,roughness:.68,metalness:0,side:It})},r=new Vr;r.name="Ayasofya";const o=[],c=n.scene.getObjectByName("LOD0"),l=n.scene.getObjectByName("LOD1");if(!c)throw new Error("ayasofya: LOD0 missing");{const{g:f,tris:m}=uu(c,a,s);r.addLevel(f,0),o.push(m)}if(l){const{g:f,tris:m}=uu(l,a,s);r.addLevel(f,i.lodDistance??900),o.push(m)}n.scene.traverse(f=>{const m=f;m.isMesh&&m.geometry.dispose()});const[h,u]=i.project(e.anchor.lon,e.anchor.lat);return r.position.set(h,i.groundY?i.groundY(h,u):0,u),r.rotation.y=e.three_rotation_y_rad,r.scale.setScalar(e.scale_m),r.userData={id:e.id,source:e.source},{object:r,anchor:e,triangles:o,materials:[a.matte,a.lead]}}function S_(i,e){const t=new xt,n=i.attributes.position.count;for(const[s,a]of[["position",3],["normal",3],["color",3]]){const r=i.getAttribute(s),o=new Float32Array(n*a);for(let c=0;c<n;c++)o[c*a]=r?r.getX(c):1,o[c*a+1]=r?r.getY(c):1,o[c*a+2]=r?r.getZ(c):1;t.setAttribute(s,new Bt(o,a))}return i.index&&t.setIndex(Array.from(i.index.array)),t.applyMatrix4(e),t}function fu(i,e,t){i.updateMatrixWorld(!0);const n=(i.parent??i).matrixWorld.clone().invert(),s={};i.traverse(o=>{const c=o;if(!c.isMesh)return;const l=c.material.name.includes("lead")?"lead":"matte";(s[l]||=[]).push(S_(c.geometry,new He().multiplyMatrices(n,c.matrixWorld)))});const a=new Dn;let r=0;for(const[o,c]of Object.entries(s)){const l=Yr(c);c.forEach(u=>u.dispose());const h=new st(l,e[o]);h.castShadow=h.receiveShadow=t,h.name=o,a.add(h),r+=(l.index?l.index.count:l.attributes.position.count)/3}return{g:a,tris:r}}async function _s(i,e){const t=await(await fetch(`${e.base}models/${i}.anchor.json`)).json(),n=await new Cf().setMeshoptDecoder(If).loadAsync(`${e.base}models/${t.model_web}`),s=e.shadows??!0,a={matte:new ms({name:`${i}_matte`,vertexColors:!0,roughness:.9,metalness:0,side:It}),lead:new ms({name:`${i}_lead_gold`,vertexColors:!0,roughness:.68,metalness:0,side:It})},r=new Vr;r.name=t.name||i;const o=[],c=n.scene.getObjectByName("LOD0"),l=n.scene.getObjectByName("LOD1");if(!c)throw new Error(`${i}: LOD0 missing`);{const{g:f,tris:m}=fu(c,a,s);r.addLevel(f,0),o.push(m)}if(l){const{g:f,tris:m}=fu(l,a,s);r.addLevel(f,e.lodDistance??900),o.push(m)}n.scene.traverse(f=>{const m=f;m.isMesh&&m.geometry.dispose()});const[h,u]=e.project(t.anchor.lon,t.anchor.lat);return r.position.set(h,e.groundY?e.groundY(h,u):0,u),r.rotation.y=t.three_rotation_y_rad,r.scale.setScalar(t.scale_m),r.userData={id:t.id,source:t.source},{object:r,anchor:t,triangles:o,materials:[a.matte,a.lead]}}const I_=i=>_s("topkapi",i),T_=i=>_s("sultanahmet",i),B_=i=>_s("yenicami",i),R_=i=>_s("rustempasa",i),sc=5;function D_(i){const e=i.attributes.position,t=e.count,n=new Float32Array(t*2);for(let r=0;r<t;r++){const o=e.getX(r),c=e.getY(r),l=e.getZ(r),h=Math.hypot(o,l);n[r*2]=Math.atan2(o,l)*Math.max(h,1)/sc,n[r*2+1]=c/sc}const s=i.index?i.index.array:null,a=s?s.length/3:t/3;for(let r=0;r<a;r++){const o=[0,1,2].map(h=>s?s[r*3+h]:r*3+h),c=o.map(h=>n[h*2]);if(Math.max(...c)-Math.min(...c)>2){const h=Math.max(1,...o.map(f=>Math.hypot(e.getX(f),e.getZ(f)))),u=2*Math.PI*h/sc;for(const f of o)n[f*2]<0&&(n[f*2]+=u)}}i.setAttribute("uv",new Bt(n,2))}async function L_(i){const e=await _s("galata",i),t=await new xl().loadAsync(`${i.base}tex/galata_stone_512.jpg`);t.wrapS=t.wrapT=Pn,t.colorSpace=Pt,t.anisotropy=4;const n=e.materials[0];return n.map=t,n.needsUpdate=!0,e.object.traverse(s=>{const a=s;a.isMesh&&a.material===n&&D_(a.geometry)}),e}function P_(i,e){const t=i.attributes.position,n=t.count,s=new Float32Array(n*2),a=new Z,r=new Z,o=new Z,c=new Z,l=new Z,h=i.index?i.index.array:null,u=h?h.length/3:n/3;for(let f=0;f<u;f++){const m=[0,1,2].map(C=>h?h[f*3+C]:f*3+C);a.fromBufferAttribute(t,m[0]),r.fromBufferAttribute(t,m[1]),o.fromBufferAttribute(t,m[2]);const x=c.subVectors(r,a).cross(l.subVectors(o,a)),_=Math.abs(x.x),p=Math.abs(x.y),d=Math.abs(x.z);for(const C of m){const y=t.getX(C),M=t.getY(C),W=t.getZ(C);p>_&&p>d?(s[C*2]=y/e,s[C*2+1]=W/e):_>d?(s[C*2]=W/e,s[C*2+1]=M/e):(s[C*2]=y/e,s[C*2+1]=M/e)}}i.setAttribute("uv",new Bt(s,2))}const U_={nusretiye:["stone_ashlar_512.jpg",4],ayatriada:["stone_ashlar_512.jpg",4],stantoine:["brick_red_512.jpg",2.4]};async function F_(i,e){const t=await _s(i,e),[n,s]=U_[i],a=await new xl().loadAsync(`${e.base}tex/${n}`);a.wrapS=a.wrapT=Pn,a.colorSpace=Pt,a.anisotropy=4;const r=t.materials[0];return r.map=a,r.needsUpdate=!0,t.object.traverse(o=>{const c=o;c.isMesh&&c.material===r&&P_(c.geometry,s)}),t}function N_(i,e,t){const n=[],s=[],a=new Ie,r=(ne,oe,ge,be)=>{n.push(...ne,...oe,...ge),a.set(be);for(let te=0;te<3;te++)s.push(a.r,a.g,a.b)},o=ne=>{const oe=Math.sin(ne*127.1+311.7)*43758.5453;return oe-Math.floor(oe)},c=["#b8643f","#c06a43","#ad5c3b","#c27350","#b05f40"],l="#d9cbb4",h=ne=>{const oe=[];for(let ge=0;ge<ne.length;ge+=2)oe.push(new Oe(ne[ge],ne[ge+1]));return Cn.isClockWise(oe)&&oe.reverse(),oe},u=h(i.outline);let f=0;for(const ne of u)f+=e(ne.x,ne.y);f/=u.length;const m=(ne,oe)=>e(ne,oe),x=7;((ne,oe,ge,be)=>{for(let te=0;te<ne.length;te++){const he=ne[te],ce=ne[(te+1)%ne.length],me=m(he.x,he.y),Y=m(ce.x,ce.y);r([he.x,me+oe,he.y],[ce.x,Y+oe,ce.y],[ce.x,Y+ge,ce.y],be),r([he.x,me+oe,he.y],[ce.x,Y+ge,ce.y],[he.x,me+ge,he.y],be)}})(u,-1,x,l);const p=[],d=[];i.cells.forEach((ne,oe)=>{const ge=h(ne.p);let be=0,te=0;for(const g of ge)be+=g.x,te+=g.y;be/=ge.length,te/=ge.length;const he=c[Math.floor(o(oe)*c.length)],ce=new Ie(he).multiplyScalar(.82),me=x+(o(oe*3.3)-.5)*1.2,Y=m(be,te);let se=0;for(const g of ge)se=Math.max(se,Math.hypot(g.x-be,g.y-te));const de=Math.min(2.6,.45*se);if(ne.r&&ge.length===4){const g=Math.cos(ne.a),S=Math.sin(ne.a);let F=1e9,E=-1e9;for(const J of ge){const k=(J.x-be)*g+(J.y-te)*S;F=Math.min(F,k),E=Math.max(E,k)}const U=E-F,Q=Math.min(U*.3,2.5),z=[be+g*(F+Q),Y+me+de,te+S*(F+Q)],P=[be+g*(E-Q),Y+me+de,te+S*(E-Q)];for(let J=0;J<4;J++){const k=ge[J],v=ge[(J+1)%4],b=m(k.x,k.y)+me,T=m(v.x,v.y)+me,D=(k.x-be)*g+(k.y-te)*S,L=(v.x-be)*g+(v.y-te)*S,w=D<0?z:P,H=L<0?z:P,X=J%2?he:ce;w===H?r([k.x,b,k.y],[v.x,T,v.y],w,X):(r([k.x,b,k.y],[v.x,T,v.y],H,X),r([k.x,b,k.y],H,w,X))}}else{const g=[be,Y+me+de*.8,te];for(let S=0;S<ge.length;S++){const F=ge[S],E=ge[(S+1)%ge.length];r([F.x,m(F.x,F.y)+me,F.y],[E.x,m(E.x,E.y)+me,E.y],g,S%2?he:ce)}}o(oe*7.1)<.22&&p.push([be+(o(oe*9.1)-.5)*se*.6,Y+me+de*.5,te+(o(oe*4.7)-.5)*se*.6,1.3+o(oe)*.9]),o(oe*5.9)<(t?.15:.3)&&d.push([be+(o(oe*2.1)-.5)*se,Y+me+de*.4,te+(o(oe*6.3)-.5)*se])});const C=i.sw/2+.6;for(const ne of i.streets)for(let oe=0;oe<ne.length-1;oe++){const[ge,be]=ne[oe],[te,he]=ne[oe+1],ce=Math.hypot(te-ge,he-be);if(ce<.5)continue;const me=-(he-be)/ce*C,Y=(te-ge)/ce*C,se=m(ge,be),de=m(te,he),g=x+.6,S=g+1.6,F=[ge+me,se+g,be+Y],E=[te+me,de+g,he+Y],U=[ge-me,se+g,be-Y],Q=[te-me,de+g,he-Y],z=[ge,se+S,be],P=[te,de+S,he];r(F,E,P,"#c98a68"),r(F,P,z,"#c98a68"),r(Q,U,z,"#b97a5c"),r(Q,z,P,"#b97a5c");const J=-(he-be)/ce*.45,k=(te-ge)/ce*.28,v=[ge+J,se+S+.08,be+k],b=[te+J,de+S+.08,he+k],T=[te-J,de+S+.08,he-k],D=[ge-J,se+S+.08,be-k];r(v,b,T,"#e6dccd"),r(v,T,D,"#e6dccd")}const y=new xt;y.setAttribute("position",new tt(n,3)),y.setAttribute("color",new tt(s,3)),y.computeVertexNormals();const M=new Dn;M.name="kapalicarsi";const W=new st(y,new Ke({vertexColors:!0,side:It}));W.castShadow=W.receiveShadow=!0,M.add(W);const V=new Ke({color:"#b7bcc2"}),G=new Ke({color:"#cfc6b6"}),ee=new Rn(1,14,5,0,Math.PI*2,0,Math.PI/2),R=new Dt(1,1,1),B=i.beds.reduce((ne,oe)=>ne+oe.nc*oe.nr+4,0),A=new Rt(ee,V,B+p.length),I=new He,N=new St,$=new Z(0,1,0),q=new Z,ae=new Z;let j=0;for(const ne of i.beds){const oe=m(ne.x,ne.z),ge=10.5;N.setFromAxisAngle($,-ne.a);const be=new st(R,G);be.position.set(ne.x,oe+ge/2-1,ne.z),be.scale.set(ne.L,ge,ne.W),be.quaternion.copy(N),be.castShadow=be.receiveShadow=!0,M.add(be);const te=ne.L/ne.nc,he=ne.W/ne.nr,ce=Math.min(te,he)*.44,me=Math.cos(ne.a),Y=Math.sin(ne.a);for(let se=0;se<ne.nc;se++)for(let de=0;de<ne.nr;de++){const g=-ne.L/2+te*(se+.5),S=-ne.W/2+he*(de+.5);A.setMatrixAt(j++,I.compose(q.set(ne.x+me*g-Y*S,oe+ge-1,ne.z+Y*g+me*S),N,ae.set(ce,ce*.75,ce)))}for(const[se,de]of[[-1,-1],[1,-1],[1,1],[-1,1]]){const g=se*(ne.L/2-1.5),S=de*(ne.W/2-1.5);A.setMatrixAt(j++,I.compose(q.set(ne.x+me*g-Y*S,oe+ge+.4,ne.z+Y*g+me*S),N,ae.set(1.8,1.8,1.8)))}}const K=j;for(const ne of p)A.setMatrixAt(j++,I.compose(q.set(ne[0],ne[1],ne[2]),N.identity(),ae.set(ne[3],ne[3]*.8,ne[3])));A.count=j,A.castShadow=A.receiveShadow=!0,A.computeBoundingSphere(),M.add(A);const fe=new Rt(R,new Ke({color:"#8d6a55"}),Math.max(1,d.length));return d.forEach((ne,oe)=>fe.setMatrixAt(oe,I.compose(q.set(ne[0],ne[1]+.9,ne[2]),N.identity(),ae.set(.8,1.8,.8)))),fe.count=d.length,fe.computeBoundingSphere(),M.add(fe),{grp:M,detail:[fe],dome:A,nBig:K,outline:i.outline,tris:n.length/9}}const Nt="#e6ddd0",ai="#8a9098",wr="#6b4a2a",Xn="#d8d2c6",ss="#c4a35a",ac="#b07a5c",Q_="#efe8dc",Sr="#f2ebe0";function k_(i,e){const t=new Dn;t.name="wm11";const n=[],s=new He,a=new St,r=new Z(0,1,0),o=new Z,c=new Z,l=new Dt(1,1,1),h=new Qt(1,1,1,12),u=new Jn(1,1,12),f=new Rn(1,16,8,0,Math.PI*2,0,Math.PI/2),m=new Rn(1,14,7,0,Math.PI,0,Math.PI/2),x=new Jn(Math.SQRT1_2,1,4).rotateY(Math.PI/4),_=(A,I,N,$,q,ae,j,K,fe=0)=>{const ne=A.index?A.toNonIndexed():A.clone();ne.deleteAttribute("uv"),ne.deleteAttribute("normal"),ne.applyMatrix4(s.compose(o.set(N,$,q),a.setFromAxisAngle(r,fe),c.set(ae,j,K)));const oe=new Ie(I),ge=ne.attributes.position.count,be=new Float32Array(ge*3);for(let te=0;te<ge;te++)be.set([oe.r,oe.g,oe.b],te*3);ne.setAttribute("color",new Bt(be,3)),n.push(ne)},p=(A,I,N,$,q,ae,j=0,K=Nt)=>_(l,K,A,q+ae/2,I,N,ae,$,j),d=(A,I,N,$,q=$*.85,ae=ai)=>_(f,ae,A,I,N,$,q,$),C=(A,I,N,$,q,ae,j=ai)=>_(m,j,A,I,N,$,q,$,ae),y=(A,I,N,$,q,ae=1.55,j=Nt)=>{p(A,I,ae*2.3,ae*2.3,N,3.2,0,j),_(h,j,A,N+3.2+($-6)/2,I,ae,$-6,ae);for(const K of q)_(h,Xn,A,N+K,I,ae*1.55,.55,ae*1.55);_(u,ai,A,N+$-2.1,I,ae*1.35,4.2,ae*1.35),_(h,ss,A,N+$+.4,I,.12,1.4,.12)},M=(A,I,N,$,q,ae,j,K)=>{const fe=N/2,ne=$/2,oe=Math.cos(j),ge=Math.sin(j),be=(U,Q,z)=>[A+U*oe+z*ge,Q,I-U*ge+z*oe],te=new Ie(K),he=[],ce=[],me=(U,Q,z)=>{he.push(...U,...Q,...z);for(let P=0;P<3;P++)ce.push(te.r,te.g,te.b)},Y=be(-fe,q,-ne),se=be(fe,q,-ne),de=be(fe,q+ae,0),g=be(-fe,q+ae,0),S=be(-fe,q,ne),F=be(fe,q,ne);me(Y,se,de),me(Y,de,g),me(S,g,de),me(S,de,F),me(Y,g,S),me(se,F,de);const E=new xt;E.setAttribute("position",new tt(he,3)),E.setAttribute("color",new tt(ce,3)),n.push(E)},W="#6c88a6",V=(A,I,N,$)=>{const q=[];for(let oe=0;oe<A.length;oe+=2)q.push(new Oe(A[oe],A[oe+1]));Cn.isClockWise(q)&&q.reverse();const ae=[],j=[],K=new Ie($),fe=(oe,ge,be)=>{ae.push(...oe,...ge,...be);for(let te=0;te<3;te++)j.push(K.r,K.g,K.b)};for(const oe of Cn.triangulateShape(q,[])){const ge=q[oe[0]],be=q[oe[1]],te=q[oe[2]];fe([ge.x,N,ge.y],[te.x,N,te.y],[be.x,N,be.y])}for(let oe=0;oe<q.length;oe++){const ge=q[oe],be=q[(oe+1)%q.length];fe([ge.x,I,ge.y],[be.x,I,be.y],[be.x,N,be.y]),fe([ge.x,I,ge.y],[be.x,N,be.y],[ge.x,N,ge.y])}const ne=new xt;ne.setAttribute("position",new tt(ae,3)),ne.setAttribute("color",new tt(j,3)),n.push(ne)};{const A=i.taksim_anit,I=A.x,N=A.z,$=e(I,N);_(h,"#cfc8bc",I,$+.25,N,7.2,.5,7.2),_(h,"#d7d1c6",I,$+.7,N,6,.45,6),_(h,Xn,I,$+1.15,N,5,.45,5),p(I,N,4.6,3.3,$+1.35,5.4,.2,"#e8e2d6"),p(I,N,4.85,3.55,$+6.55,.28,.2,"#ddd6c8"),p(I,N,3.6,1.6,$+6.85,2.6,.2,wr),p(I-.15,N,1.1,1.1,$+9.45,1.5,.2,wr),p(I+1.15,N+.15,.85,.85,$+6.85,2.15,.2,wr),p(I-1.2,N-.1,.85,.85,$+6.85,2.05,.2,wr)}{const A=i.misir;A.eave;const I=e(A.x,A.z),N=I,$=10.2,q="#e7d6b2",ae="#cfae78",j="#2c2622",K="#6c88a6",fe="#71859a",ne=A.outline||[],oe=[];for(let Y=0;Y<ne.length;Y+=2)oe.push(new Oe(ne[Y],ne[Y+1]));const ge=(Y,se)=>{let de=!1;for(let g=0,S=oe.length-1;g<oe.length;S=g++)oe[g].y>se!=oe[S].y>se&&Y<(oe[S].x-oe[g].x)*(se-oe[g].y)/(oe[S].y-oe[g].y)+oe[g].x&&(de=!de);return de};if(oe.length>=4){V(ne,N-1,N+$,q),V(ne,N+$-.05,N+$+.35,fe);const Y=Cn.isClockWise(oe);for(let se=0;se<oe.length;se++){const de=oe[se],g=oe[(se+1)%oe.length],S=de.distanceTo(g);if(S<5)continue;const F=-Math.atan2(g.y-de.y,g.x-de.x);let E=(g.y-de.y)/S,U=-(g.x-de.x)/S;Y&&(E=-E,U=-U);const Q=(de.x+g.x)/2+E*.12,z=(de.y+g.y)/2+U*.12;for(let P=.9;P<$-.4;P+=1.25)p(Q,z,S,.26,N+P,.55,F,ae);p(Q+E*.1,z+U*.1,S+.3,.5,N+$-.55,.5,F,"#d9c49c");for(let P=2.1;P<S-2.1;P+=4.2){const J=de.x+(g.x-de.x)*(P/S)+E*.2,k=de.y+(g.y-de.y)*(P/S)+U*.2;p(J,k,2.3,.3,N+.2,3.1,F,j),_(h,j,J,N+3.3,k,1.15,.3,.15,F),p(J,k,1,.3,N+5.6,1.7,F,j)}}}const be=A.arms||[],te=A.corner?[A.corner.x,A.corner.z]:[1e9,1e9],he=[];for(const Y of be){const se=Math.cos(Y.pang),de=Math.sin(Y.pang),g=-de,S=se,F=-Y.pang,E=Y.L/2,U=[Y.x-se*E,Y.z-de*E],Q=[Y.x+se*E,Y.z+de*E],z=Math.hypot(U[0]-te[0],U[1]-te[1])<Math.hypot(Q[0]-te[0],Q[1]-te[1]),P=z?1:-1,J=z?-E+6:-E+9,k=z?E-9:E-6,v=(J+k)/2;M(Y.x+se*v,Y.z+de*v,k-J,11.5,N+$+.3,4.4,F,fe),p(Y.x+se*v,Y.z+de*v,k-J,.7,N+$+4.6,.25,F,"#5e7184");for(const b of[-1,1])for(let T=J+2.2;T<=k-2.2;T+=4.3){const D=Y.W/2-3,L=Y.x+se*T+g*b*D,w=Y.z+de*T+S*b*D;!ge(L,w)||Math.hypot(L-te[0],w-te[1])<11||(_(h,fe,L,N+$+.55,w,2.05,.5,2.05),d(L,N+$+.8,w,1.95,1.35,K))}he.push({x:Y.x+se*E*P,z:Y.z+de*E*P,ux:se*P,uz:de*P,w:Y.W,main:Y.name==="ns"})}if(A.corner){const Y=A.corner.x,se=A.corner.z,de=be.length?-be[0].pang:0;p(Y,se,15,15,N+$,1.6,de,q),_(x,fe,Y,N+$+1.6+1.3,se,15.6,2.6,15.6,de)}const ce=(Y,se,de,g,S,F)=>{const E=-Math.atan2(g,de),U=F?12:9.5,Q=1.4,z=Y-de*(U/2-Q),P=se-g*(U/2-Q),J=S+1.6;let k=1e9;for(const X of[-.5,.5])for(const ue of[-.5,.5])k=Math.min(k,e(z+de*U*X-g*J*ue,P+g*U*X+de*J*ue));const v=Math.min(N,k),b=N+$+(F?5.2:3.6);p(z,P,U,J,v-1,b-v+1,E,q);for(let X=v+.9;X<b-.6;X+=1.25)p(z,P,U+.06,J+.06,X,.55,E,ae);p(z,P,U+.6,J+.6,b-.6,.6,E,"#d9c49c");const T=Y+de*(Q+.05),D=se+g*(Q+.05),L=F?7.2:5.4,w=F?8.6:6.6;p(T,D,.5,L+2.4,v,w+L/2+1.4,E,"#efe3c8"),p(T+de*.1,D+g*.1,.5,L,v+.02,w,E,j),p(T+de*.1,D+g*.1,.5,L*.72,v+w,L*.22,E,j),p(T+de*.1,D+g*.1,.5,L*.4,v+w+L*.22,L*.2,E,j);const H=F?3:2;for(let X=0;X<H;X++){const ue=(X-(H-1)/2)*3.2;p(T-g*ue,D+de*ue,.4,1.3,b-3.4,1.9,E,j)}if(M(z,P,J-.6,U-.6,b,F?3:2.4,E+Math.PI/2,fe),F)for(const X of[-1,1]){const ue=z-g*X*(J/2-2.6),ve=P+de*X*(J/2-2.6);d(ue,b,ve,2.2,1.6,K)}};for(const Y of he)ce(Y.x,Y.z,Y.ux,Y.uz,Y.w,Y.main);for(const Y of A.end_gates||[]){const se=Math.cos(Y.ang),de=Math.sin(Y.ang);ce(Y.x,Y.z,se,de,Y.w,!1)}if(i.wm15?.hunkar){const Y=i.wm15.hunkar,se=e(Y.ax,Y.az);_(x,"#8e3b2e",Y.x,se+12+1.35,Y.z,Y.w+1.6,2.7,Y.d+1.6,Y.rot)}if(A.awning_strip){const Y=A.awning_strip,se=N;p(Y.x,Y.z,Y.L,Y.W+.4,se+2.55,.3,Y.ang,"#6e5443")}if(A.fountain){const Y=A.fountain,se=e(Y.x,Y.z),de=Y.r||5.2;p(Y.x,Y.z,de*2.55,de*2.55,se+.02,.22,0,"#d8d0c4"),p(Y.x,Y.z,de*2.15,de*.82,se+.12,.52,0,Xn),p(Y.x,Y.z,de*2.15,de*.82,se+.12,.52,Math.PI/4,Xn),_(h,"#2e8a96",Y.x,se+.52,Y.z,3.15,.4,3.15)}for(const Y of A.hedges||[]){const se=e(Y.x,Y.z);p(Y.x,Y.z,Y.w,Y.d,se,Y.h,Y.ang,"#4e7a38")}for(const Y of[]){const se=e(Y.x,Y.z);p(Y.x,Y.z,Y.w,Y.d,se-.3,Y.h,Y.ang,"#e6dcc8"),p(Y.x,Y.z,Y.w+.4,Y.d+.4,se+Y.h-.12,.62,Y.ang,Y.roof||"#5f8a4a")}const me=new ro(1,0);for(const Y of A.garden_trees||[]){const se=Y[0],de=Y[1],g=Y[2]||.95,S=e(se,de);_(h,"#6b4d32",se,S+2.8*g,de,.5*g,5.6*g,.5*g),_(me,"#5f8f3c",se,S+8.2*g,de,6.3*g,4.9*g,6.3*g),_(me,"#6e9d45",se+2*g,S+10.4*g,de-1.4*g,4.2*g,3.2*g,4.2*g)}me.dispose()}const G=A=>{const I={...A},N=.476,$=.88;let q=Math.cos(I.ang),ae=Math.sin(I.ang);if(Math.abs(q*N+ae*$)<.7071){I.ang+=Math.PI/2;const j=I.L;I.L=I.W,I.W=j,q=Math.cos(I.ang),ae=Math.sin(I.ang)}return q*N+ae*$>0&&(I.ang+=Math.PI),I},ee=(A,I)=>{A=G(A);const N=e(A.x,A.z),$=Math.cos(A.ang),q=Math.sin(A.ang),ae=-q,j=$,K=I.court?A.L*.52:A.L,fe=I.court?A.L*.48:0,ne=A.x-$*(I.court?fe*.5:0),oe=A.z-q*(I.court?fe*.5:0),ge=I.brick?ac:Nt;p(ne,oe,K,A.W*.92,N-.8,I.wallH+.8,-A.ang,ge);const be=I.coreH??I.wallH,te=I.drumH??4.4;if(I.coreH){const Y=I.domeR*2.12;p(ne,oe,Y,Y,N+I.wallH-.2,be-I.wallH+.2,-A.ang,ge);for(const se of[-1,1])for(const de of[-1,1]){const g=ne+($*se+ae*de)*Y*.5,S=oe+(q*se+j*de)*Y*.5;_(h,ge,g,N+be+2.4,S,2,4.8,2),d(g,N+be+4.8,S,2.1,2.2)}}if(_(h,ge,ne,N+be+te/2,oe,I.domeR*1.05,te,I.domeR*1.05),d(ne,N+be+te,oe,I.domeR,I.domeH),I.halves){const Y=I.fourHalves?[[$,q],[ae,j]]:[[$,q]];for(const[se,de]of Y)for(const g of[-1,1]){const S=I.coreH?I.domeR*1.06:I.domeR*.95,F=ne+se*g*S,E=oe+de*g*S,U=Math.atan2(se*g,de*g);I.coreH?C(F,N+I.wallH,E,I.domeR*.92,Math.min(be-I.wallH+1.5,I.domeR*.92),U+Math.PI/2,ai):C(F,N+I.wallH,E,I.domeR*.78,I.domeH*.62,U+Math.PI/2,ai)}}if(!I.halves||I.fourHalves)for(const Y of[-1,1])for(const se of[-1,1]){const de=ne+$*Y*(K*.28)+ae*se*(A.W*.28),g=oe+q*Y*(K*.28)+j*se*(A.W*.28);d(de,N+I.wallH,g,Math.min(4.8,A.W*.12),3.4)}if(I.court){const Y=A.x+$*(K*.5),se=A.z+q*(K*.5),de=7.2;p(Y+ae*(A.W*.46-de/2),se+j*(A.W*.46-de/2),fe,de,N-.6,8.2,-A.ang,ge),p(Y-ae*(A.W*.46-de/2),se-j*(A.W*.46-de/2),fe,de,N-.6,8.2,-A.ang,ge),p(Y+$*(fe*.5-de/2),se+q*(fe*.5-de/2),de,A.W*.92,N-.6,8.2,-A.ang,ge),p(Y,se,fe*.7,A.W*.55,N+.12,.18,-A.ang,"#ddd4c4"),_(h,Xn,Y,N+1.1,se,3.2,2,3.2),d(Y,N+2.1,se,2.4,1.7,ai);for(const g of[-1,1])for(let S=-2;S<=2;S++){const F=Y+$*(S*fe*.14)+ae*g*(A.W*.38),E=se+q*(S*fe*.14)+j*g*(A.W*.38);d(F,N+8.2,E,2.1,1.55)}}const he=ne+$*(K*.48),ce=oe+q*(K*.48),me=[];for(const Y of[-1,1])me.push([he+ae*Y*(A.W*.42),ce+j*Y*(A.W*.42)]);if(I.nMin>=4&&I.court){const Y=A.x+$*(A.L*.46),se=A.z+q*(A.L*.46);for(const de of[-1,1])me.push([Y+ae*de*(A.W*.42),se+j*de*(A.W*.42)])}me.slice(0,I.nMin).forEach(([Y,se],de)=>y(Y,se,N,I.minH[Math.min(de,I.minH.length-1)],I.galleries[Math.min(de,I.galleries.length-1)],1.45,ge))};{const A=i.suleymaniye,I=e(A.x,A.z),N=W,$="#3a3632",q=Math.cos(A.ang),ae=Math.sin(A.ang),j=-ae,K=q,fe=-A.ang,ne=A.L*.52,oe=A.L*.48,ge=A.W*.92,be=A.x-q*oe*.5,te=A.z-ae*oe*.5,he=(k,v)=>[be+q*k+j*v,te+ae*k+K*v],ce=(k,v,b,T,D,L,w=Nt)=>{const[H,X]=he(k,v);p(H,X,b,T,D,L,fe,w)},me=(k,v,b,T,D,L=0)=>{const[w,H]=he(k,v);L&&_(h,Nt,w,b+L/2,H,T*1.06,L,T*1.06),d(w,b+L,H,T,D,N)},Y=(k,v,b,T,D,L,w)=>{const[H,X]=he(k,v),ue=q*L+j*w,ve=ae*L+K*w;C(H,b,X,T,D,Math.atan2(ue,ve),N)},se=13.25,de=28.4;ce(0,0,ne,ge,I-.8,15.8);for(const k of[-1,1])for(let v=-ne/2+4;v<=ne/2-4;v+=4.2)for(const b of[3.2,9.4])ce(v,k*(ge/2+.12),1.5,.35,I+b,3,$);for(let k=-ge/2+5;k<=ge/2-5;k+=4.2)for(const v of[3.2,9.4])ce(-ne/2-.12,k,.35,1.5,I+v,3,$);for(const k of[-1,1]){let v=0;for(let b=-20;b<=20.1;b+=10,v++)me(b,k*(ge/2-8.5),I+15,v%2?3.4:4.8,v%2?2.6:3.6,1.6)}for(const k of[-1,1])for(const v of[-1,1]){const[b,T]=he(k*(ne/2-3),v*(ge/2-3));_(h,Nt,b,I+18,T,2.2,6,2.2),d(b,I+21,T,2.3,2.2,N)}ce(0,0,ne-5,de+2,I+15,8);for(const k of[-1,1]){Y(k*de/2,0,I+23,se,12.2,k,0);for(const v of[-1,1])me(k*(de/2+9),v*(de/2+.5),I+23,3,2.4,1.2)}ce(0,0,de,de,I+23,13.5);for(const k of[-1,1])for(const v of[-1,1]){const[b,T]=he(k*de/2,v*de/2);_(h,Nt,b,I+38,T,2.4,7,2.4),d(b,I+41.5,T,2.6,2.6,N),_(h,ss,b,I+44.6,T,.1,1.2,.1)}_(h,Nt,be,I+36.5+2.5,te,se*1.06,5,se*1.06);for(let k=0;k<24;k++){const v=k/24*Math.PI*2,b=be+Math.cos(v)*se*1.07,T=te+Math.sin(v)*se*1.07;_(l,$,b,I+39,T,1.5,2.6,.3,-(v+Math.PI/2))}d(be,I+41.5,te,se,11.5,N),_(h,ss,be,I+54,te,.2,2.4,.2);const g=ne/2,S=ne/2+oe,F=7.2,E=F/2;ce(S-F/2,0,F,ge,I-.6,8.6);for(const k of[-1,1])ce((g+S)/2,k*(ge/2-F/2),oe,F,I-.6,8.6);ce(g+F/2,0,F,ge,I-.6,10.2),ce((g+S)/2,0,oe-2*F,ge-2*F,I+.1,.16,"#e8e2d6");const U=g+E,Q=S-E,z=ge/2-E,P=2*(Q-U+2*z);for(let k=0;k<28;k++){let v=(k+.5)/28*P,b,T,D=0,L=0;v<Q-U?(b=U+v,T=-z,L=1):(v-=Q-U)<2*z?(b=Q,T=-z+v,D=-1):(v-=2*z)<Q-U?(b=Q-v,T=z,L=-1):(v-=Q-U,b=U,T=z-v,D=1);const w=b===U?10.2:8.6;me(b,T,I+w-.4,2.45,2.1);const H=b+D*(E+.1),X=T+L*(E+.1);ce(H,X,D?.3:2.4,D?2.4:.3,I+.2,w-3.2,$)}{const[k,v]=he((g+S)/2+2,0);_(h,Xn,k,I+.9,v,3.8,1.8,3.8);for(let b=0;b<8;b++){const T=b/8*Math.PI*2;_(h,Xn,k+Math.cos(T)*3.2,I+3,v+Math.sin(T)*3.2,.25,2.6,.25)}d(k,I+4.3,v,3.9,2.4,N)}ce(S-F/2,0,F+2,11,I-.6,13.5),me(S-F/2,0,I+12.9,3.6,2.8);const J=[[g+E,-z,63.5,[40,47.5,54.5]],[g+E,z,63.5,[40,47.5,54.5]],[S-E,-z,49.2,[33,42]],[S-E,z,49.2,[33,42]]];for(const[k,v,b,T]of J){const[D,L]=he(k,v);y(D,L,I,b,T,1.55,Nt)}}{const A=G(i.nuruosmaniye),I=e(A.x,A.z);ee(A,{wallH:19,coreH:26,drumH:4.6,domeR:12.75,domeH:12.9,halves:!1,nMin:2,minH:[56,56],galleries:[[28,40],[28,40]],court:!1});const N=Math.cos(A.ang),$=Math.sin(A.ang),q=-$,ae=N,j=Math.min(A.W*.5,22),K=A.x+N*(A.L*.5+.5),fe=A.z+$*(A.L*.5+.5),ne=14;for(let oe=0;oe<ne;oe++){const ge=-Math.PI/2+oe/ne*Math.PI,be=-Math.PI/2+(oe+1)/ne*Math.PI,te=(ge+be)/2,he=K+N*Math.cos(te)*j+q*Math.sin(te)*j,ce=fe+$*Math.cos(te)*j+ae*Math.sin(te)*j,me=2*j*Math.sin(Math.PI/ne/2)*2+.6,Y=Math.atan2($*-Math.sin(te)+ae*Math.cos(te),N*-Math.sin(te)+q*Math.cos(te));p(he,ce,me,7,I-.5,7.6,-Y,Nt);const se=K+N*Math.cos(te)*(j-.2)+q*Math.sin(te)*(j-.2),de=fe+$*Math.cos(te)*(j-.2)+ae*Math.sin(te)*(j-.2);d(se,I+7.6,de,2.1,1.5)}{const oe=K+N*j*.5,ge=fe+$*j*.5;p(oe,ge,j,2*j-6,I+.1,.16,-A.ang,"#ddd4c4")}}ee(i.fatih,{wallH:16,coreH:26,drumH:4.5,domeR:13,domeH:13.5,halves:!0,fourHalves:!0,nMin:2,minH:[62,62],galleries:[[28,42],[28,42]],court:!0});{const A=i.kucukayasofya;let I=1e9;{const oe=Math.cos(A.ang),ge=Math.sin(A.ang);for(const be of[-.5,.5])for(const te of[-.5,.5])I=Math.min(I,e(A.x+oe*A.L*be-ge*A.W*te,A.z+ge*A.L*be+oe*A.W*te))}const N=Math.cos(A.ang),$=Math.sin(A.ang),q=-$,ae=N,j=N<0?1:-1,K=3-.0125*A.L,fe=A.x-N*j*K,ne=A.z-$*j*K;p(fe,ne,A.L*.975-6,A.W*.95,I-.6,14.2,-A.ang,ac),_(new Qt(1,1,1,8),ac,fe,I+15.4,ne,9.6,3.2,9.6),d(fe,I+17,ne,8.8,6.6,ai);{const oe=A.x+N*j*(A.L*.5-3.4),ge=A.z+$*j*(A.L*.5-3.4),be=A.W*.9;p(oe-N*j*2.6,ge-$*j*2.6,1.2,be,I-.4,6.6,-A.ang,Nt),p(oe,ge,6.4,be,I+5.6,.8,-A.ang,Nt);for(let te=0;te<6;te++){const he=(te/5-.5)*(be-1.2);_(h,Xn,oe+N*j*2.8+q*he,I+2.8,ge+$*j*2.8+ae*he,.32,5.6,.32)}for(let te=-2;te<=2;te++)d(oe+q*te*be*.2,I+6.4,ge+ae*te*be*.2,2.2,1.6,ai)}{const oe=ae>0?1:-1;y(A.x+N*j*(A.L*.475+4.5)+q*oe*(A.W*.475+3.5),A.z+$*j*(A.L*.475+4.5)+ae*oe*(A.W*.475+3.5),I,38,[26],1.15,Nt)}}{const A=i.clock,I=e(A.x,A.z),N=A.ang,$=[[9.6,6.5],[8.2,6.2],[7,6.8],[5.6,5.2]];let q=I;$.forEach(([j,K],fe)=>{p(A.x,A.z,j,j,q,K,N,fe===2?"#e8e0d2":Sr),q+=K});const ae=I+6.5+6.2+3.4;for(let j=0;j<4;j++){const K=N+j*Math.PI/2;_(h,"#2a2a28",A.x+Math.cos(K)*3.55,ae,A.z+Math.sin(K)*3.55,1.35,.18,1.35,K)}_(u,ai,A.x,q+2.1,A.z,3.4,4.2,3.4),_(h,ss,A.x,q+4.6,A.z,.12,1.6,.12)}{const A={...i.ciragan,x:3049.3,z:-2208,ang:-.405,L:122,W:34},I=e(A.x,A.z),N=A.ang,$=-N,q=Math.cos(N),ae=Math.sin(N);p(A.x,A.z,A.L,A.W,I-1,A.h+1,$,Q_),p(A.x,A.z,A.L*.28,A.W+4,I+A.h-2,8,$,Sr);for(const j of[-1,1]){const K=A.x+q*j*(A.L*.42),fe=A.z+ae*j*(A.L*.42);p(K,fe,16,A.W+3,I+A.h-1,7,$,Sr),_(u,ai,K,I+A.h+9,fe,8,5,8)}for(let j=-4;j<=4;j++){if(Math.abs(j)<1)continue;const K=A.x+q*j*12,fe=A.z+ae*j*12;p(K,fe,5.5,A.W+1.4,I+2,A.h-3,$,"#f6f0e6")}}if(i.stadium){const A=i.stadium,I=A.px??A.x,N=A.pz??A.z,$=A.pAng??A.ang,q=e(I,N),ae=(A.pL||110)/2,j=(A.pW||69)/2,K=A.L/2,fe=A.W/2,ne=ae+7,oe=j+7,ge=K+7,be=fe+7,te=Math.cos($),he=Math.sin($),ce=(se,de)=>I+se*te-de*he,me=(se,de)=>N+se*he+de*te;_(h,"#3d8a45",I,q+.32,N,ae,.64,j,$);const Y=64;for(let se=0;se<Y;se++){const de=(se+.5)/Y*Math.PI*2,g=Math.cos(de),S=Math.sin(de),F=g*(ge+ne)/2,E=S*(be+oe)/2,U=ce(F,E),Q=me(F,E),z=Math.atan2(-(Q-N),U-I),P=Math.hypot(ge*g,be*S),J=Math.hypot(ne*g,oe*S),k=2*Math.PI*((P+J)/2)/Y*1.18;p(U,Q,P-J+1.2,k,q+A.h-2.2,2.05,z,"#f4f1ea");for(let L=0;L<4;L++){const w=(L+.55)/4,H=(ae+9)*(1-w)+(K-4)*w,X=(j+9)*(1-w)+(fe-4)*w,ue=1.6+L*5.15,ve=5.35,ie=ce(g*H,S*X),Ae=me(g*H,S*X),pe=Math.max(8,(K-ae)/4);p(ie,Ae,pe,k*(.78+w*.16),q+ue,ve,z,L%2?"#2c2c2e":"#3a3a3d")}const v=ce(g*K*1.02,S*fe*1.02),b=me(g*K*1.02,S*fe*1.02);p(v,b,2.15,2.15,q-.4,A.h-2.5,z,Sr);const T=ce(g*K*.998,S*fe*.998),D=me(g*K*.998,S*fe*.998);p(T,D,.7,k*.72,q+2.4,15.2,z,"#1a222c")}}if(i.stad_hall){const A=i.stad_hall,I=e(A.x,A.z);p(A.x,A.z,A.L,A.W,I-.5,A.h,A.ang,"#e7dfd1"),p(A.x,A.z,A.L+.6,A.W+.8,I+A.h-.35,.75,A.ang,"#f3f0ea")}if(i.dolmabahce_camii){const A=G(i.dolmabahce_camii),I=e(A.x,A.z),N=Math.cos(A.ang),$=Math.sin(A.ang),q=-$,ae=N,j=A.L*.58,K=A.x-N*(A.L*.21),fe=A.z-$*(A.L*.21);p(K,fe,j,Math.min(j,A.W*.8),I-.8,17.6,-A.ang,Nt),_(h,Nt,K,I+19,fe,9.3,2.8,9.3),d(K,I+20.2,fe,9,8.4),_(h,ss,K,I+29.3,fe,.14,1.6,.14);const ne=A.x+N*(A.L*.29),oe=A.z+$*(A.L*.29);p(ne,oe,A.L*.4,A.W*.98,I-.8,13,-A.ang,"#ece6dc"),p(ne,oe,A.L*.41,A.W,I+12.2,.8,-A.ang,Xn);for(const ge of[-1,1])y(ne+N*A.L*.17+q*ge*A.W*.47,oe+$*A.L*.17+ae*ge*A.W*.47,I,46,[34],1.1,Nt)}{const A="#e7d8b8",I="#f0e6cf",N="#c4b08c",$="#59606a",q="#3b3a3c",ae="#cfc8bb",oe=(g,S)=>Math.atan2(-S,g),ge=[3300.8,3012.7],be=[3329.1,3051.4],te=[(ge[0]+be[0])/2,(ge[1]+be[1])/2],he=e(te[0],te[1]),ce=(g,S)=>[te[0]+.59*g+.806*S,te[1]+.806*g+-.59*S],me=(g,S,F,E,U,Q,z)=>{const[P,J]=ce(g,S);p(P,J,F,E,U,Q,oe(.59,.806),z)};me(0,6,86,48,he-1.5,2.1,ae),me(0,-29,36,12,he-1.5,2,ae),me(0,-31,15,8,he+.5,5.5,A);{const[g,S]=ce(0,-31);M(g,S,16,9,he+6,2.6,oe(.59,.806),$)}const Y=48,se=19.5,de=24;me(0,se/2,Y,se,he,1.8,N),me(0,se/2,Y-.4,se-.4,he+1.8,de-1.8,A),me(0,se/2,Y+.8,se+.8,he+de-.7,.9,I),me(0,se/2,Y+.5,se+.5,he+8.6,.45,I);{const[g,S]=ce(0,se/2);M(g,S,Y,se+.6,he+de+.2,7.5,oe(.59,.806),$)}for(const[g,S]of[[-.12,-1],[se+.12,1]])for(let F=-Y/2+2.6;F<=Y/2-2.6;F+=3.3)if(!(Math.abs(F)<9.5&&S<0)){me(F,g,1.6,.35,he+2.4,4.4,q);for(let E=0;E<4;E++)me(F,g,1.25,.35,he+9.6+E*3.55,2.5,q)}me(0,se/2-1.25,19,se+2.5,he,de+4,A),me(0,se/2-1.25,19.6,se+3.1,he+de+3.3,.9,I);{const[g,S]=ce(0,se/2-1.25);M(g,S,se+3.1,19.8,he+de+4.1,9.5,oe(.806,-.59),$)}for(let g=-7.5;g<=7.6;g+=3){me(g,-2.62,1.8,.35,he+2.4,5,q);for(let S=0;S<5;S++)me(g,-2.62,1.3,.35,he+9.6+S*3.55,S===4?3.4:2.5,q)}{const[g,S]=ce(0,-2.7);_(h,"#f2eee4",g,he+de+6.5,S,1.6,.25,1.6,oe(.806,-.59))}for(const[g,S,F]of[[3296.3,3007.3,6.4],[3334,3055.5,6.4]]){_(h,N,g,he+.9,S,F+.3,1.8,F+.3),_(h,A,g,he+15.3,S,F,27,F),_(h,I,g,he+28.9,S,F+.5,.9,F+.5),_(u,$,g,he+29.3+7.5,S,F+.6,15,F+.6),_(h,ss,g,he+45.2,S,.15,2.4,.15);for(let E=0;E<8;E++){const U=E/8*Math.PI*2,Q=g+Math.cos(U)*(F+.08),z=S+Math.sin(U)*(F+.08);for(let P=0;P<5;P++)_(l,q,Q,he+(P?9.6+(P-1)*3.55+1.25:4.6),z,1.2,P?2.5:4,.3,-(U+Math.PI/2))}}for(const[g,S,F,E]of[[3367.8,3026.4,60,17.6],[3320.9,2993.4,38,15.5]]){p(g,S,F,E,he,1.6,oe(.806,-.59),N),p(g,S,F-.4,E-.4,he+1.6,17.4,oe(.806,-.59),A),p(g,S,F+.6,E+.6,he+18.3,.8,oe(.806,-.59),I),M(g,S,F,E+.5,he+19,5.5,oe(.806,-.59),$);for(const U of[-1,1])for(let Q=-F/2+2.5;Q<=F/2-2.5;Q+=3.3){const z=g+.806*Q+.59*U*(E/2+.12),P=S+-.59*Q+.806*U*(E/2+.12);for(let J=0;J<4;J++)p(z,P,1.25,.35,he+(J?6.6+(J-1)*3.5:2.2),J?2.4:3.6,oe(.806,-.59),q)}}}const R=i.wm15;if(R)for(const A of R.mosques||[]){const I=A.qx,N=A.qz,$=-N,q=I,ae=Math.atan2(-N,I),j=(F,E)=>[A.x+I*F+$*E,A.z+N*F+q*E],K=A.D,fe=A.W,ne=A.courtW||fe,oe=A.court||0,ge=A.wings;let be=1e9;for(const F of[-.5,0,.5])for(const E of[-.5,0,.5]){const[U,Q]=j(F*K,E*fe);be=Math.min(be,e(U,Q))}for(const F of[-.5,.5]){const[E,U]=j(-K/2-oe,F*ne);be=Math.min(be,e(E,U))}const te=A.plat||0,he=be+te,ce=(F,E,U,Q,z,P,J=Nt)=>{const[k,v]=j(F,E);p(k,v,U,Q,z,P,ae,J)},me=(F,E,U,Q,z,P=0)=>{const[J,k]=j(F,E);P&&_(h,Nt,J,U+P/2,k,Q*1.06,P,Q*1.06),d(J,U+P,k,Q,z)},Y="#3a3632";te>.3&&ce(-oe/2,0,K+oe+2,Math.max(fe,ne)+2+(ge?2*ge.w:0),be-1.2,te+1.2,"#d6ccbb"),ce(0,0,K,fe,he-.8,A.wallH+.8);for(const F of[-1,1])for(let E=-K/2+3.5;E<=K/2-3.5;E+=4.2)for(const U of[2.6,A.wallH*.62])ce(E,F*(fe/2+.12),1.3,.35,he+U,2.4,Y);for(let F=-fe/2+3.5;F<=fe/2-3.5;F+=4.2)for(const E of[2.6,A.wallH*.62])ce(K/2+.12,F,.35,1.3,he+E,2.4,Y);if(A.side)for(const F of[-1,1])for(let E=0;E<A.side;E++){const U=-K/2+(E+.5)*K/A.side;me(U,F*(fe/2-fe*.14),he+A.wallH,Math.min(K/A.side*.42,4.2),Math.min(K/A.side*.36,3.4),.8)}const se=A.domeR,de=se*2.12,g=Math.max(A.coreH||A.wallH,A.wallH);if(g>A.wallH+.5&&ce(0,0,de,de,he+A.wallH-.2,g-A.wallH+.2),A.turrets||A.halves>=2)for(const F of[-1,1])for(const E of[-1,1]){const[U,Q]=j(F*de/2,E*de/2);_(h,Nt,U,he+g+1.8,Q,Math.max(1.3,se*.17),3.6,Math.max(1.3,se*.17)),d(U,he+g+3.6,Q,Math.max(1.4,se*.18),Math.max(1.4,se*.18))}const S=A.halves===1?[[1,0]]:A.halves===2?[[1,0],[-1,0]]:A.halves>=4?[[1,0],[-1,0],[0,1],[0,-1]]:[];for(const[F,E]of S){const[U,Q]=j(F*se*1.06,E*se*1.06),z=I*F+$*E,P=N*F+q*E;C(U,he+A.wallH,Q,se*.92,Math.min(g-A.wallH+1.5,se*.92),Math.atan2(z,P)+Math.PI/2)}_(h,Nt,A.x,he+g+A.drumH/2,A.z,se*1.05,A.drumH,se*1.05);for(let F=0;F<16;F++){const E=F/16*Math.PI*2;_(l,Y,A.x+Math.cos(E)*se*1.06,he+g+A.drumH*.5,A.z+Math.sin(E)*se*1.06,1.1,Math.max(.9,A.drumH*.6),.3,-(E+Math.PI/2))}if(d(A.x,he+g+A.drumH,A.z,se,A.domeH),_(h,ss,A.x,he+g+A.drumH+A.domeH+1,A.z,.14,2,.14),ge)for(const F of[-1,1]){const E=F*(fe/2+ge.w/2),U=-K/2+ge.d/2;if(ce(U,E,ge.d,ge.w,he-.6,ge.h+.6),ge.flat)ce(U,E,ge.d+.4,ge.w+.4,he+ge.h,.5,"#d9d0c0");else for(const Q of[-1,1])for(const z of[-1,1])me(U+Q*ge.d/4,E+z*ge.w/4,he+ge.h,Math.min(ge.w*.21,3.8),2.8,.6)}if(A.rear&&ce(K/2+A.rear.d/2,0,A.rear.d,fe*.8,he-.6,A.rear.h+.6),oe>0){const F=-K/2,E=-K/2-oe;if(A.porch){ce((F+E)/2,0,oe,fe,he-.6,A.wallH*.55);const U=A.court_domes||5;for(let Q=0;Q<U;Q++)me((F+E)/2,-fe/2+(Q+.5)*fe/U,he+A.wallH*.55,Math.min(fe/U*.42,3.2),2.2,.4)}else{const U=A.medrese?8.5:7,Q=A.medrese?6.2:8.2;ce(E+U/2,0,U,ne,he-.6,Q+.6);for(const T of[-1,1])ce((F+E)/2,T*(ne/2-U/2),oe,U,he-.6,Q+.6);A.medrese||ce(F-U/2,0,U,ne,he-.6,Q+1.6),ce((F+E)/2,0,oe-2*U,ne-2*U,he+.05,.16,"#e8e2d6");const z=U/2,P=E+z,J=F-z,k=ne/2-z,v=2*(J-P+2*k),b=A.court_tiled?0:A.court_domes||16;if(A.court_tiled){const T="#b5654a",D=(L,w,H,X,ue)=>{const[ve,ie]=j(L,w);M(ve,ie,H,X,he+Q+.6,2,ue,T)};D(E+U/2,0,ne,U+.8,ae+Math.PI/2);for(const L of[-1,1])D((F+E)/2,L*(ne/2-U/2),oe,U+.8,ae);for(const L of[-2,-1,1,2])me(F-U/2,L*ne/5,he+Q+1.6,Math.min(ne/5*.42,2.8),2.1);ce(F-U/2,0,U*.8,ne/5*.8,he+Q+1.6,.9,"#9aa4ae")}for(let T=0;T<b;T++){let D=(T+.5)/b*v,L,w;D<J-P?(L=P+D,w=-k):(D-=J-P)<2*k?(L=J,w=-k+D):(D-=2*k)<J-P?(L=J-D,w=k):(D-=J-P,L=P,w=k-D),!(A.medrese&&L===J)&&me(L,w,he+(L===J?Q+1:Q)-.2,A.medrese?2.3:2.4,A.medrese?1.8:2)}{const[T,D]=j((F+E)/2,0);_(h,Xn,T,he+.9,D,3,1.8,3),d(T,he+3.4,D,3,1.9);for(let L=0;L<8;L++){const w=L/8*Math.PI*2;_(h,Xn,T+Math.cos(w)*2.6,he+2,D+Math.sin(w)*2.6,.22,2.4,.22)}}}}for(const[F,E,U,Q]of A.minarets)y(F,E,Math.min(he,e(F,E)+te),U,Q,U>50?1.5:1.3,Nt)}if(R&&R.beyazit_tower){const A=R.beyazit_tower,I=e(A.x,A.z),N=Math.max(9,A.base||11),$=new Qt(.72,1,1,4).rotateY(Math.PI/4),q=new Qt(1,1,1,8).rotateY(Math.PI/8),ae=new Qt(1,1,1,20),j=new Rn(1,16,8),K="#ece7dd",fe="#e0d9cc",ne="#3e3a38";_($,fe,A.x,I+3.2,A.z,N/Math.SQRT2,7.4,N/Math.SQRT2),_(j,K,A.x,I+7.6,A.z,4,2.2,4),_(ae,K,A.x,I+9+17.5,A.z,3.15,35,3.15),_(ae,fe,A.x,I+10.4,A.z,3.45,.7,3.45),_(ae,fe,A.x,I+43,A.z,3.45,.7,3.45),_(new Qt(1,.62,1,20),K,A.x,I+46,A.z,5,4,5),_(ae,fe,A.x,I+48.4,A.z,5.5,.8,5.5),_(new Qt(1,1,1,20,1,!0),ne,A.x,I+49.4,A.z,5.4,1.1,5.4);const oe=[[4.3,48.8,7.4],[3.4,56.2,6.2],[2.7,62.4,5.4],[2.05,67.8,4.4]];for(const[ge,be,te]of oe){_(q,K,A.x,I+be+te/2,A.z,ge,te,ge),_(q,fe,A.x,I+be+te-.25,A.z,ge*1.1,.5,ge*1.1);for(let he=0;he<8;he++){const ce=he/8*Math.PI*2+Math.PI/8;_(l,ne,A.x+Math.cos(ce)*ge*.93,I+be+te*.5,A.z+Math.sin(ce)*ge*.93,ge*.55,te*.42,.25,-(ce+Math.PI/2))}}_(j,fe,A.x,I+72.2,A.z,1.7,1.4,1.7),_(h,ne,A.x,I+78.5,A.z,.12,12.5,.12),$.dispose(),q.dispose(),ae.dispose(),j.dispose()}if(R&&R.kabatas){for(const ne of R.kabatas.piers)V(ne,-1.6,1.3,"#cfc9be");const A=R.kabatas.main,I=A.ux,N=A.uz,$=e(A.x+I*A.L/2,A.z+N*A.L/2),q=e(A.x-I*A.L/2,A.z-N*A.L/2),ae=$>q?1:-1,j=A.x+I*ae*A.L*.2,K=A.z+N*ae*A.L*.2,fe=Math.atan2(-N,I);p(j,K,A.L*.5,A.W*.72,1.3,5.6,fe,"#e4e0d8"),p(j,K,A.L*.54,A.W*.8,6.9,.7,fe,"#8d9096"),p(j,K,A.L*.52,A.W*.74,1.6,3.2,fe,"#4a5560"),p(j-I*ae*A.L*.31,K-N*ae*A.L*.31,A.L*.12,A.W*.6,1.3,4.2,fe,"#a9b0b6")}for(const A of R?.karakoy16||[]){V(A.ring,-1.6,1.3,"#cfc9be");const I=e(A.x+A.ux*A.L/2,A.z+A.uz*A.L/2),N=e(A.x-A.ux*A.L/2,A.z-A.uz*A.L/2),$=I>N?1:-1,q=A.L>40,ae=A.x+A.ux*$*A.L*(q?.12:.05),j=A.z+A.uz*$*A.L*(q?.12:.05),K=Math.atan2(-A.uz,A.ux),fe=q?.66:.6,ne=q?8.4:4.2;p(ae,j,A.L*fe,A.W*.7,1.3,ne,K,"#e6e1d6"),p(ae,j,A.L*(fe+.02),A.W*.72,2,ne*.34,K,"#4a5560"),q&&p(ae,j,A.L*(fe+.02),A.W*.72,6,1.6,K,"#4a5560"),p(ae,j,A.L*(fe+.05),A.W*.78,1.3+ne,.6,K,"#8d9096")}if(i.wm15?.yk16){const A=i.wm15.yk16,I="#cdb994",N="#bba783",$="#e9e4da",q=new Qt(1,1.04,1,8),ae=new Qt(1,1.06,1,20),j=A.curtain,K=j.length/2,fe=13,ne=4.95,oe=(ce,me,Y,se,de,g,S)=>{for(let F=-g/2+1.1;F<=g/2-1;F+=2.6)p(ce+se*F,me+de*F,1.25,.7,Y,1.25,S,N)},ge=A.centre[0],be=A.centre[1];for(let ce=0;ce<K;ce++){const me=j[ce*2],Y=j[ce*2+1],se=j[(ce+1)%K*2],de=j[(ce+1)%K*2+1],g=Math.hypot(se-me,de-Y);if(g<2)continue;const S=(se-me)/g,F=(de-Y)/g,E=-Math.atan2(F,S);let U=-F,Q=S;const z=(me+se)/2,P=(Y+de)/2;(z+U-ge)**2+(P+Q-be)**2<(z-ge)**2+(P-be)**2&&(U=-U,Q=-Q);const J=Math.max(1,Math.ceil(g/10));for(let k=0;k<J;k++){const v=(k+.5)/J*g,b=me+S*v-U*ne/2,T=Y+F*v-Q*ne/2,D=g/J+.4;let L=1e9,w=-1e9;for(const H of[-.5,0,.5]){const X=e(b+S*D*H,T+F*D*H);L=Math.min(L,X),w=Math.max(w,X)}p(b,T,D,ne,L-2.5,w+fe-L+2.5,E,I),p(b+U*(ne/2-.35),T+Q*(ne/2-.35),D,.7,w+fe,.9,E,I),oe(b+U*(ne/2-.35),T+Q*(ne/2-.35),w+fe+.9,S,F,D,E)}}const te=(ce,me,Y,se,de)=>{for(let g=0;g<de;g++){const S=g/de*Math.PI*2;p(ce+Math.cos(S)*(Y-.5),me+Math.sin(S)*(Y-.5),1.3,.8,se,1.3,-S+Math.PI/2,N)}},he=(ce,me,Y)=>{let se=1e9;for(let de=0;de<8;de++)se=Math.min(se,e(ce+Math.cos(de*.785)*Y,me+Math.sin(de*.785)*Y));return se};for(const ce of A.otowers||[]){const me=ce.x,Y=ce.z,se=ce.r,de=e(me,Y),g=he(me,Y,se)-1.5,S=de+ce.h,F=ce.shape==="poly"?q:ae;if(_(F,I,me,(g+S)/2,Y,se,S-g,se),ce.shape==="poly"){for(const E of[ce.h*.2,ce.h*.4,ce.h*.6,ce.h*.8])_(q,N,me,de+E,Y,se+.1,.35,se+.1);te(me,Y,se,S,10);continue}te(me,Y,se+.3,S+1.9,Math.round(se*2.2));for(const E of[8,15,22])for(let U=0;U<4;U++){const Q=U*Math.PI/2+.4;p(me+Math.cos(Q)*(se+.02),Y+Math.sin(Q)*(se+.02),.25,.9,de+E,1.6,-Q,"#3b322b")}}for(const[ce,me,Y]of A.ptowers){const se=e(ce,me),de=he(ce,me,Y)-1.5,g=se+21;_(q,N,ce,(de+g)/2,me,Y,g-de,Y);for(const S of[6.5,12.5,18.5])_(q,"#b0705a",ce,se+S,me,Y+.08,.45,Y+.08);te(ce,me,Y,g,10)}for(const ce of A.pylons){const me=e(ce.x,ce.z);let Y=1e9;for(const se of[-.5,.5])for(const de of[-.5,.5])Y=Math.min(Y,e(ce.x+Math.cos(ce.rot)*ce.w*se+Math.sin(ce.rot)*ce.d*de,ce.z-Math.sin(ce.rot)*ce.w*se+Math.cos(ce.rot)*ce.d*de));p(ce.x,ce.z,ce.w,ce.d,Y-1.5,me+19.4-Y+1.5,ce.rot,$),p(ce.x,ce.z,ce.w+.5,ce.d+.5,me+18.6,.8,ce.rot,"#d8d2c6");for(let se=0;se<4;se++){const de=Math.cos(ce.rot),g=-Math.sin(ce.rot),S=Math.sin(ce.rot),F=Math.cos(ce.rot);oe(ce.x+(se<2?S:de)*(se%2?1:-1)*((se<2?ce.d:ce.w)/2-.4),ce.z+(se<2?F:g)*(se%2?1:-1)*((se<2?ce.d:ce.w)/2-.4),me+19.4,se<2?de:S,se<2?g:F,se<2?ce.w:ce.d,se<2?ce.rot:ce.rot+Math.PI/2)}}if(A.golden){const ce=A.golden,me=e(ce.x,ce.z),Y=Math.cos(ce.rot),se=-Math.sin(ce.rot),de=Math.sin(ce.rot),g=Math.cos(ce.rot);p(ce.x,ce.z,29.34,8.5,me-1.5,18.5,ce.rot,$);for(const[F,E,U]of[[0,8.35,15.5],[-10.2,5.75,10.88],[10.2,5.75,10.88]])for(const Q of[-1,1])p(ce.x+Y*F+de*Q*4.3,ce.z+se*F+g*Q*4.3,E,.2,me,U-E*.3,ce.rot,"#a9a196"),p(ce.x+Y*F+de*Q*4.3,ce.z+se*F+g*Q*4.3,E*.62,.2,me+U-E*.3,E*.3,ce.rot,"#a9a196")}}const B=O_(n);if(B){B.computeVertexNormals();const A=new st(B,new Ke({vertexColors:!0,side:It}));A.castShadow=A.receiveShadow=!0,A.name="wm11",t.add(A)}return n.forEach(A=>A.dispose()),t}function O_(i){if(!i.length)return null;let e=0;for(const r of i)e+=r.attributes.position.count;const t=new Float32Array(e*3),n=new Float32Array(e*3);let s=0;for(const r of i){const o=r.attributes.position.array,c=r.attributes.color.array;t.set(o,s),n.set(c,s),s+=o.length}const a=new xt;return a.setAttribute("position",new Bt(t,3)),a.setAttribute("color",new Bt(n,3)),a}const xn=new URLSearchParams(location.search),rt=Number(xn.get("step")||99),z_=performance.now(),Tf={};window.__prof=Tf;const ba=i=>{Tf[i]=Math.round(performance.now()-z_)},Un=xn.get("look")!=="0",Xc=xn.get("roofs")!=="1",Ft=Un&&Xc&&xn.get("walls")!=="0",Zt=Ft&&xn.get("colour")!=="0",Re=window.innerWidth<600,G_=Un&&(xn.get("q")?xn.get("q")==="high":!Re),rn=new j0({antialias:!0});rn.setPixelRatio(Math.min(window.devicePixelRatio,2));rn.setSize(window.innerWidth,window.innerHeight);rn.shadowMap.enabled=rt>=2;rn.shadowMap.type=Un&&!Re?nl:bu;rn.outputColorSpace=Pt;Un&&(rn.toneMapping=xn.get("tm")==="agx"?al:sl,rn.toneMappingExposure=Number(xn.get("exp")||1));document.getElementById("app").appendChild(rn.domElement);const Ge=new q0,H_=new Ie("#f1dcc4");function du(i,e){const t=document.createElement("canvas");t.width=2,t.height=256;const n=t.getContext("2d"),s=n.createLinearGradient(0,0,0,256);s.addColorStop(0,i),s.addColorStop(.5,"#e6b4a3"),s.addColorStop(1,e),n.fillStyle=s,n.fillRect(0,0,2,256);const a=new sb(t);return a.colorSpace=Pt,a}const Bf=new Ie("#f3ead9");Ge.background=Bf.clone();Ge.fog=new no(Bf.clone(),11e3,28e3);const Rf=Ft?Re?32:22:Re?50:35,rs=Math.tan(gn.degToRad(Rf/2))/Math.tan(gn.degToRad(17.5)),ii=new bn(Rf,window.innerWidth/window.innerHeight,20,4e4),En=new Ax(ii,rn.domElement);En.enableDamping=!0;En.dampingFactor=.08;En.maxPolarAngle=1.2;En.minDistance=60;En.maxDistance=Ft?22e3:14e3;En.screenSpacePanning=!1;En.zoomToCursor=!0;const kn=Un?new jh("#b0a8b8","#7a6a5c",.95):new jh("#fff6e8","#c9b79a",rt>=2?1.6:2.4);Ge.add(kn);const sn=new of("#fff0d8",rt>=2?2.2:.9);sn.castShadow=rt>=2;sn.shadow.mapSize.set(Re?1024:Un?4096:2048,Re?1024:Un?4096:2048);const Ir=650;Object.assign(sn.shadow.camera,{left:-Ir,right:Ir,top:Ir,bottom:-Ir,near:10,far:6e3});sn.shadow.bias=-6e-4;Un&&!Re&&(sn.shadow.radius=Ft?4:2,sn.shadow.blurSamples=Ft?12:8);sn.shadow.normalBias=.6;Ge.add(sn,sn.target);let Df=new Z(.5,.6,.4).normalize();const Lf={value:0};function Kc(i){i=gn.clamp(i,7.5,17.5);const e=gn.clamp((i-7.2)/11.6,0,1),t=gn.degToRad(Math.max(2,(Ft?50:38)*Math.sin(Math.PI*e))),n=gn.degToRad(105+150*e);Df=new Z(Math.sin(n)*Math.cos(t),Math.sin(t),-Math.cos(n)*Math.cos(t)).normalize();const s=1-Math.min(1,Math.sin(t)/Math.sin(gn.degToRad(30)));if(Un){sn.color.set("#ffcf90").lerp(new Ie("#ff9a50"),s*.55);const o=Ft?gn.smoothstep(i,18.2,19.6):0;sn.intensity=(Ft?gn.lerp(Zt?5.5:4.7,4.7,o):5.6)-s*1.6,kn.intensity=(Ft?1.45:.95)-s*.2,kn.color.set("#b0a8b8"),kn.groundColor.set("#7a6a5c"),Ft&&(kn.color.lerp(new Ie("#d0a585"),s*.6),kn.groundColor.lerp(new Ie("#9a7458"),s*.6),kn.intensity=gn.lerp(Zt?1.12:1.45,1.45,o)+s*.15);const c=Ft?gn.smoothstep(i,18.2,19.6):0;Lf.value=c,H_.set("#ea9b7d");const l=Ge.background;Ft&&c>0?(sn.intensity*=1-.85*c,kn.intensity*=1-.55*c,kn.color.lerp(new Ie("#34406a"),c),kn.groundColor.lerp(new Ie("#1c2236"),c),Ge.background=du(new Ie("#b5b1d0").lerp(new Ie("#0e1430"),c).getStyle(),new Ie("#ea9b7d").lerp(new Ie("#2a3358"),c).getStyle())):Ge.background=du("#b5b1d0","#ea9b7d"),l instanceof kt&&l.dispose(),Ge.fog.color.set("#a49ca2"),Ft&&Ge.fog.color.lerp(new Ie("#e0a07f"),s*.6).lerp(new Ie("#252c48"),c);const h=document.getElementById("hourtxt");h&&(h.textContent=`${String(Math.floor(i)).padStart(2,"0")}:${String(Math.round(i%1*60)).padStart(2,"0")}`);return}sn.color.set("#fff3e0").lerp(new Ie("#ff9a4d"),s*.85),sn.intensity=2.8-s*1,kn.intensity=1.15-s*.35,kn.color.set("#fff6e8").lerp(new Ie("#ffd2a8"),s*.7);const a=new Ie("#f3ead9").lerp(new Ie("#f1c9a3"),s*.6);Ge.background.copy(a),Ge.fog.color.copy(a);const r=document.getElementById("hourtxt");r&&(r.textContent=`${String(Math.floor(i)).padStart(2,"0")}:${String(Math.round(i%1*60)).padStart(2,"0")}`)}const Pf=Ft?14:16.25;Kc(rt>=5?Un?Pf:15.5:14);const Xr=1.2;let en=null,Uf=null,Jc=null,wt=null;const Vs=[],zi=[467.7,1011.1,455.9,1012.6,349.7,1092.8,287.3,1163.4,273.4,1182.5,249.9,1290.8,255.3,1300.3,361.9,1370.5,392.5,1385.8,436,1398,441.8,1394.8,572.2,1142.1,585.8,1064.4,563.1,1039.6,543.3,1027.9],hs=45,qi=(()=>{let i=1e9,e=1e9,t=-1e9,n=-1e9;for(let s=0;s<zi.length;s+=2)i=Math.min(i,zi[s]),t=Math.max(t,zi[s]),e=Math.min(e,zi[s+1]),n=Math.max(n,zi[s+1]);return[i,e,t,n]})();function Zc(i,e){if(i<qi[0]||i>qi[2]||e<qi[1]||e>qi[3])return!1;const t=zi;let n=!1;for(let s=0,a=t.length-2;s<t.length;a=s,s+=2)t[s+1]>e!=t[a+1]>e&&i<(t[a]-t[s])*(e-t[s+1])/(t[a+1]-t[s+1])+t[s]&&(n=!n);return n}function V_(i,e){const t=zi;let n=1e9;for(let s=0,a=t.length-2;s<t.length;a=s,s+=2){const r=t[a],o=t[a+1],c=t[s]-r,l=t[s+1]-o,h=Math.max(0,Math.min(1,((i-r)*c+(e-o)*l)/(c*c+l*l)));n=Math.min(n,Math.hypot(i-r-c*h,e-o-l*h))}return n}const Gi=[1924.6,-1890.6,1904.9,-1903.4,1855.5,-1885.5,1656.8,-1710.2,1651.5,-1698.3,1653.6,-1676.6,1674.3,-1637.9,1692.3,-1632.5,1825.9,-1673,1966.1,-1738.9,1970.9,-1769.5],zn=4,Yi=(()=>{let i=1e9,e=1e9,t=-1e9,n=-1e9;for(let s=0;s<Gi.length;s+=2)i=Math.min(i,Gi[s]),t=Math.max(t,Gi[s]),e=Math.min(e,Gi[s+1]),n=Math.max(n,Gi[s+1]);return[i,e,t,n]})();function $c(i,e){if(i<Yi[0]||i>Yi[2]||e<Yi[1]||e>Yi[3])return!1;const t=Gi;let n=!1;for(let s=0,a=t.length-2;s<t.length;a=s,s+=2)t[s+1]>e!=t[a+1]>e&&i<(t[a]-t[s])*(e-t[s+1])/(t[a+1]-t[s+1])+t[s]&&(n=!n);return n}function W_(i,e){const t=Gi;let n=1e9;for(let s=0,a=t.length-2;s<t.length;a=s,s+=2){const r=t[a],o=t[a+1],c=t[s]-r,l=t[s+1]-o,h=Math.max(0,Math.min(1,((i-r)*c+(e-o)*l)/(c*c+l*l)));n=Math.min(n,Math.hypot(i-r-c*h,e-o-l*h))}return n}function Qe(i,e){let t=cs(i,e);if(en&&i>qi[0]-40&&i<qi[2]+40&&e>qi[1]-40&&e<qi[3]+40){if(Zc(i,e))return hs;if(t>hs){const s=V_(i,e);if(s<40){const a=1-s/40,r=a*a*(3-2*a);t+=(hs-t)*r}}}if(en&&i>Yi[0]-30&&i<Yi[2]+30&&e>Yi[1]-30&&e<Yi[3]+30){if($c(i,e))return zn;const s=W_(i,e);if(s<25&&t<zn){const a=1-s/25,r=a*a*(3-2*a);t+=(zn-t)*r}else if(s<8&&t>zn){const a=1-s/8,r=a*a*(3-2*a);t+=(zn-t)*r*.35}}if(!Vs.length)return t;let n=t;for(const s of Vs){const a=Math.hypot(i-s.x,e-s.z);if(a>=s.r+s.b)continue;const r=a<=s.r?1:1-(a-s.r)/s.b,o=r*r*(3-2*r);n=n+(s.h-n)*o}return n}function zt(i,e,t,n=25){if(!en)return;let s=0,a=0;for(let r=0;r<16;r++)for(const o of[0,.5,1])s+=cs(i+Math.cos(r*.3927)*t*o,e+Math.sin(r*.3927)*t*o),a++;Vs.push({x:i,z:e,r:t,b:n,h:s/a})}function el(i,e,t){if(!i)return null;const n=(e-i.x0)/i.step,s=(t-i.z0)/i.step;if(n<0||s<0||n>=i.nx-1||s>=i.nz-1)return null;const a=Math.floor(n),r=Math.floor(s),o=n-a,c=s-r,l=i.nx,h=i.h;return(h[r*l+a]*(1-o)+h[r*l+a+1]*o)*(1-c)+(h[(r+1)*l+a]*(1-o)+h[(r+1)*l+a+1]*o)*c}function Au(i,e){const t=el(en,i,e);if(t!=null)return Xr*t;const n=el(Uf,i,e);return n==null?0:Xr*n}function cs(i,e){if(Jc&&i>1764){const t=Jc,n=Math.min(i-1764,t.x0+t.step*(t.nx-1)-i,e-t.z0,t.z0+t.step*(t.nz-1)-e);if(n>0){const s=el(t,i,e);if(s!=null){const a=Math.min(1,n/140),r=a*a*(3-2*a);return r>=1?Xr*s:Au(i,e)*(1-r)+Xr*s*r}}}return Au(i,e)}new Ie;class yi{pos=[];col=[];tex=!1;wa=[];wb=[];wl=0;rl=6;seed=0;base=0;wh=0;st=0;ridge=0;tri(e,t,n,s,a=!1,r,o=0,c=0){if(a){const l=t[0]-e[0];t[1]-e[1];const h=t[2]-e[2],u=n[0]-e[0];n[1]-e[1];const f=n[2]-e[2];if(h*u-l*f<0){const x=t;t=n,n=x,r&&(r=[r[0],r[2],r[1]])}}this.pos.push(...e,...t,...n);for(let l=0;l<3;l++)this.col.push(s.r,s.g,s.b);if(this.tex){const l=[e,t,n],h=o===0?this.rl:this.wl;for(let u=0;u<3;u++){const f=r?r[u]:[l[u][0],l[u][2]];this.wa.push(f[0],f[1],h,this.seed),o===0?this.wb.push(this.wh,r&&r[u].length>2?r[u][2]:-1,0,this.ridge):this.wb.push(this.wh,c,o,this.st)}}}geometry(){const e=new xt;return e.setAttribute("position",new tt(this.pos,3)),e.setAttribute("color",new tt(this.col,3)),this.tex&&(e.setAttribute("wa",new tt(this.wa,4)),e.setAttribute("wb",new tt(this.wb,4))),e.computeVertexNormals(),e}}function Kn(i){let e=0;for(let t=0;t<i.length;t+=2){const n=(t+2)%i.length;e+=i[t]*i[n+1]-i[n]*i[t+1]}return e/2}function j_(i,e,t,n,s,a){let r=e;const o=Kn(r);if(!a&&o>0||a&&o<0){const l=[];for(let h=r.length-2;h>=0;h-=2)l.push(r[h],r[h+1]);r=l}const c=i.st;a&&c>=16&&c<128&&(i.st=32);for(let l=0;l<r.length;l+=2){const h=(l+2)%r.length,u=[r[l],t,r[l+1]],f=[r[h],t,r[h+1]],m=[r[h],n,r[h+1]],x=[r[l],n,r[l+1]];if(i.tex){const _=Math.hypot(r[h]-r[l],r[h+1]-r[l+1]),p=t-i.base,d=n-i.base,C=_>=2.4&&i.wh>=4?1:2;i.tri(u,f,m,s,!1,[[0,p],[_,p],[_,d]],C,_),i.tri(u,m,x,s,!1,[[0,p],[_,d],[0,d]],C,_)}else i.tri(u,f,m,s),i.tri(u,m,x,s)}i.st=c}let Lr=null,Kr=!1,ut=null;const q_=(i,e)=>Qe(i,e);function Ws(i,e,t,n,s=!1){const a=x=>{const _=[];for(let p=0;p<x.length;p+=2)_.push(new Oe(x[p],x[p+1]));return _},r=a(e[0]),o=e.slice(1).map(a);let c;try{c=Cn.triangulateShape(r,o)}catch{return}const l=r.concat(...o),h=q_,u=(x,_)=>Kr&&!!Lr&&Lr(x,_)>-1e8,f=x=>s?h(x.x,x.y)+t:t,m=(x,_,p,d)=>{if(Kr&&Lr){const C=u(x.x,x.y),y=u(_.x,_.y),M=u(p.x,p.y);if(C&&y&&M&&d>0)return;if((C||y||M)&&d<9&&Math.max(x.distanceTo(_),_.distanceTo(p),p.distanceTo(x))>2.5){const W=x.clone().add(_).multiplyScalar(.5),V=_.clone().add(p).multiplyScalar(.5),G=p.clone().add(x).multiplyScalar(.5);m(x,W,G,d+1),m(W,_,V,d+1),m(G,V,p,d+1),m(W,V,G,d+1);return}if(u((x.x+_.x+p.x)/3,(x.y+_.y+p.y)/3))return}if(s&&d<8){const C=x.clone().add(_).multiplyScalar(.5),y=_.clone().add(p).multiplyScalar(.5),M=p.clone().add(x).multiplyScalar(.5),W=Math.max(Math.abs(h(C.x,C.y)-(h(x.x,x.y)+h(_.x,_.y))/2),Math.abs(h(y.x,y.y)-(h(_.x,_.y)+h(p.x,p.y))/2),Math.abs(h(M.x,M.y)-(h(p.x,p.y)+h(x.x,x.y))/2));if(W>1.2&&Math.max(x.distanceTo(_),_.distanceTo(p),p.distanceTo(x))>(W>5?6:35)){m(x,C,M,d+1),m(C,_,y,d+1),m(M,y,p,d+1),m(C,y,M,d+1);return}}i.tri([x.x,f(x),x.y],[_.x,f(_),_.y],[p.x,f(p),p.y],n,!0)};for(const x of c)m(l[x[0]],l[x[1]],l[x[2]],0)}function Gt(i,e,t,n,s,a){for(const r of e)r.forEach((o,c)=>j_(i,o,t,n,s,c>0)),a&&Ws(i,r,n,a)}function Y_(i,e){const t=e.pr,n=e.seg||16,s=e.a?e.a[0]:0,a=e.a?e.a[1]:Math.PI*2,r=e.k??2,o=t[0][1],c=Math.max(t[0][0],.3),l=(e.cols||[]).map(x=>new Ie(x)),h=new Ie(e.col);r===0?i.rl=e.tx??9:i.wl=e.tx??8,i.base=o,i.wh=t[t.length-1][1]-o,i.st=e.st||128,i.ridge=0;const u=r===2&&e.st?1:r,f=(a-s)*c,m=[0];for(let x=1;x<t.length;x++)m.push(m[x-1]+Math.hypot(t[x][0]-t[x-1][0],t[x][1]-t[x-1][1]));for(let x=0;x<n;x++){const _=s+(a-s)*x/n,p=s+(a-s)*(x+1)/n;for(let d=0;d<t.length-1;d++){const[C,y]=t[d],[M,W]=t[d+1],V=(l[d]||h).clone();e.rib&&x%2&&V.multiplyScalar(e.rib);const G=(j,K,fe)=>[e.x+Math.cos(fe)*j,K,e.z+Math.sin(fe)*j],ee=(j,K,fe,ne)=>r===0?[K*Math.max(j,C,.5),fe]:[K*c,ne-o],R=G(C,y,_),B=G(C,y,p),A=G(M,W,p),I=G(M,W,_),N=ee(C,_,m[d],y),$=ee(C,p,m[d],y),q=ee(M,p,m[d+1],W),ae=ee(M,_,m[d+1],W);C>.001&&i.tri(R,B,A,V,!1,[N,$,q],u,f),M>.001&&i.tri(R,A,I,V,!1,[N,q,ae],u,f)}}}function Ff(i,e,t,n){const[s,a,r,o,c,l]=e,h=Math.cos(r),u=Math.sin(r),f=-u,m=h,x=(G,ee)=>[s+h*G*o/2+f*ee*c/2,t,a+u*G*o/2+m*ee*c/2],_=G=>[s+h*G*(o-c)/2,t+l,a+u*G*(o-c)/2],p=x(-1,-1),d=x(1,-1),C=x(1,1),y=x(-1,1),M=_(-1),W=_(1),V=n.clone().multiplyScalar(.92);i.tri(p,d,W,n,!0),i.tri(p,W,M,n,!0),i.tri(C,y,M,n,!0),i.tri(C,M,W,n,!0),i.tri(d,C,W,V,!0),i.tri(y,p,M,V,!0)}function X_(i,e,t,n,s){const[a,r,o,c,l,h]=e,u=Math.cos(o),f=Math.sin(o),m=-f,x=u,_=(V,G,ee=0)=>[a+u*V*c/2+m*G*l/2,t+ee,r+f*V*c/2+x*G*l/2],p=_(-1,-1),d=_(1,-1),C=_(1,1),y=_(-1,1),M=_(-1,0,h),W=_(1,0,h);i.tri(p,d,W,n,!0),i.tri(p,W,M,n,!0),i.tri(C,y,M,n,!0),i.tri(C,M,W,n,!0),i.tri(y,p,M,s),i.tri(d,C,W,s)}function K_(i,e,t,n,s){const[a,r,o,c,l,h]=e,u=Math.cos(o),f=Math.sin(o),m=-f,x=u,_=Math.min(.17*l,2.2),p=Math.min(.75*h+1.4,3.6),d=(M,W,V,G)=>[a+u*M*(c/2-V)+m*W*(l/2-V),t+G,r+f*M*(c/2-V)+x*W*(l/2-V)],C=[d(-1,-1,0,0),d(1,-1,0,0),d(1,1,0,0),d(-1,1,0,0)],y=[d(-1,-1,_,p),d(1,-1,_,p),d(1,1,_,p),d(-1,1,_,p)];for(let M=0;M<4;M++){const W=(M+1)%4;i.tri(C[M],C[W],y[W],n,!0),i.tri(C[M],y[W],y[M],n,!0)}Ff(i,[a,r,o,c-2*_,l-2*_,Math.max(.6,.12*l)],t+p,s)}function J_(i,e,t,n){const s=n/(t/2),a=e/2,r=t/2;if(i===2)return[[0,s,s*r],[0,-s,s*r]];if(i===1)return[[0,s,s*r],[0,-s,s*r],[s,0,s*a],[-s,0,s*a]];const o=Math.min(.17*t,2.2),c=Math.min(.75*n+1.4,3.6),l=c/o,h=Math.max(.6,.12*t)/(r-o),u=[];for(const[f,m,x]of[[0,1,r],[0,-1,r],[1,0,a],[-1,0,a]])u.push([f*l,m*l,x*l]),u.push([f*h,m*h,c+(x-o)*h]);return u}const Qn=(i,e,t)=>i[0]*e+i[1]*t+i[2];function Z_(i,e){const t=[];for(let n=0;n<i.length;n++){const s=i[n],a=i[(n+1)%i.length],r=e(s),o=e(a);if(r<=0&&t.push(s),r<0&&o>0||r>0&&o<0){const c=r/(r-o);t.push([s[0]+(a[0]-s[0])*c,s[1]+(a[1]-s[1])*c])}}return t}const pu=i=>{let e=0;for(let t=0;t<i.length;t++){const n=i[t],s=i[(t+1)%i.length];e+=n[0]*s[1]-s[0]*n[1]}return e/2};function $_(i,e,t,n,s,a,r,o,c=-1){const[l,h,u,f,m,x]=t,_=Math.cos(u),p=Math.sin(u),d=-p,C=_,y=J_(n,f,m,x);{let G=1e9;for(const ee of y)G=Math.min(G,Qn(ee,0,0));i.ridge=Math.max(0,G)}const M=(G,ee)=>[(G-l)*_+(ee-h)*p,(G-l)*d+(ee-h)*C],W=(G,ee,R)=>[l+_*G+d*ee,R,h+p*G+C*ee],V=(G,ee)=>{let R=1e9;for(const B of y)R=Math.min(R,Qn(B,G,ee));return Math.max(0,R)};for(const G of e){const ee=G.map(R=>{const B=[];for(let A=0;A<R.length;A+=2)B.push(M(R[A],R[A+1]));return B});y.forEach((R,B)=>{const A=n===3&&B%2===1?r:a,I=i.rl;c>=0&&n===3&&B%2===0&&(i.rl=c);const N=Math.hypot(R[0],R[1]),$=N>1e-6?R[0]/N:0,q=N>1e-6?R[1]/N:1,ae=Math.sqrt(1+N*N),j=be=>[-be.x*q+be.y*$,(be.x*$+be.y*q)*ae,Math.max(0,Qn(R,be.x,be.y))],K=ee.map(be=>{let te=be;return y.forEach((he,ce)=>{ce!==B&&te.length&&(te=Z_(te,me=>Qn(R,me[0],me[1])-Qn(he,me[0],me[1])-1e-6))}),te});if(K[0].length<3||Math.abs(pu(K[0]))<.05)return;const fe=K[0].map(be=>new Oe(be[0],be[1])),ne=K.slice(1).filter(be=>be.length>=3&&Math.abs(pu(be))>.05).map(be=>be.map(te=>new Oe(te[0],te[1])));let oe;try{oe=Cn.triangulateShape(fe,ne)}catch{return}const ge=fe.concat(...ne);for(const be of oe){const te=ge[be[0]],he=ge[be[1]],ce=ge[be[2]];i.tri(W(te.x,te.y,s+Math.max(0,Qn(R,te.x,te.y))),W(he.x,he.y,s+Math.max(0,Qn(R,he.x,he.y))),W(ce.x,ce.y,s+Math.max(0,Qn(R,ce.x,ce.y))),A,!0,i.tex?[j(te),j(he),j(ce)]:void 0)}i.rl=I});for(const R of ee)for(let B=0;B<R.length;B++){const A=R[B],I=R[(B+1)%R.length],N=[0,1];for(let j=0;j<y.length;j++)for(let K=j+1;K<y.length;K++){const fe=Qn(y[j],A[0],A[1])-Qn(y[K],A[0],A[1]),ne=Qn(y[j],I[0],I[1])-Qn(y[K],I[0],I[1]);fe*ne<0&&N.push(fe/(fe-ne))}N.sort((j,K)=>j-K);const $=j=>[A[0]+(I[0]-A[0])*j,A[1]+(I[1]-A[1])*j];let q=N[0],ae=V(A[0],A[1]);for(let j=1;j<N.length;j++){const K=N[j];if(K-q<1e-4&&j<N.length-1)continue;const fe=$(q),ne=$(K),oe=V(ne[0],ne[1]);if(Math.max(ae,oe)>.35){const ge=W(fe[0],fe[1],s),be=W(ne[0],ne[1],s),te=W(ne[0],ne[1],s+oe),he=W(fe[0],fe[1],s+ae);if(i.tex){const ce=Math.hypot(I[0]-A[0],I[1]-A[1]),me=q*ce,Y=K*ce,se=s-i.base;oe>.02&&i.tri(ge,be,te,o,!1,[[me,se],[Y,se],[Y,se+oe]],2,ce),ae>.02&&i.tri(ge,te,he,o,!1,[[me,se],[Y,se+oe],[me,se+ae]],2,ce)}else oe>.02&&i.tri(ge,be,te,o),ae>.02&&i.tri(ge,te,he,o)}q=K,ae=oe}}}return V}function eE(i,e,t,n,s,a,r){const o=new Set,c=(h,u)=>`${Math.round(h*10)},${Math.round(u*10)}`;for(const h of t)for(const u of h)for(let f=0;f<u.length;f+=2)o.add(c(u[f],u[f+1]));for(const h of e){const u=d=>{const C=[];for(let y=0;y<d.length;y+=2)C.push(new Oe(d[y],d[y+1]));return C},f=u(h[0]),m=h.slice(1).map(u);let x;try{x=Cn.triangulateShape(f,m)}catch{continue}const _=f.concat(...m),p=d=>n+(o.has(c(d.x,d.y))?s:0);i.ridge=s;for(const d of x){const C=_[d[0]],y=_[d[1]],M=_[d[2]],W=[C.x,p(C),C.y],V=[y.x,p(y),y.y],G=[M.x,p(M),M.y];let ee;if(i.tex){const R=V[0]-W[0],B=V[1]-W[1],A=V[2]-W[2],I=G[0]-W[0],N=G[1]-W[1],$=G[2]-W[2];let q=B*$-A*N,ae=A*I-R*$,j=R*N-B*I;ae<0&&(q=-q,ae=-ae,j=-j);const K=Math.hypot(q,ae,j)||1,fe=-q,ne=-j,oe=Math.hypot(fe,ne),ge=oe>1e-6?fe/oe:0,be=oe>1e-6?ne/oe:1,te=K/Math.max(ae,.001);ee=[W,V,G].map(he=>[-he[0]*be+he[2]*ge,(he[0]*ge+he[2]*be)*te,he[1]-n])}i.tri(W,V,G,a,!0,ee)}}const l=i.rl;i.rl=2;for(const h of t)Ws(i,h,n+s,r);i.rl=l}let tE=-100;function Jt(i,e,t){const n=new yi,s=new Ie(t);for(const r of i)Ws(n,r,e,s,!!en);const a=new st(n.geometry(),new Ke({vertexColors:!0,depthWrite:!1}));return a.renderOrder=tE++,a.receiveShadow=rt>=2,a.name="flat",Ge.add(a),a}function rc(i){return i.onBeforeCompile=e=>{e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
varying float vBY;`).replace("#include <project_vertex>",`#include <project_vertex>
  
#ifdef USE_INSTANCING
  vBY = (modelMatrix * instanceMatrix * vec4(transformed, 1.0)).y;
#else
  vBY = (modelMatrix * vec4(transformed, 1.0)).y;
#endif`),e.fragmentShader=e.fragmentShader.replace("#include <common>",`#include <common>
varying float vBY;`).replace("#include <color_fragment>",`#include <color_fragment>
  { float k = mod(vBY + 1.2, 3.0); if (k < 0.75) diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.62, 0.36, 0.28), 0.75); }`)},i}function nE(i,e){const t=i.length/2;if(t<6)return i;const n=new Uint8Array(t);n[0]=1;let s=0,a=-1;for(let c=1;c<t;c++){const l=Math.hypot(i[2*c]-i[0],i[2*c+1]-i[1]);l>a&&(a=l,s=c)}n[s]=1;const r=(c,l)=>{const h=i[2*c],u=i[2*c+1],f=i[2*(l%t)],m=i[2*(l%t)+1],x=Math.hypot(f-h,m-u)||1e-6;let _=-1,p=e;for(let d=c+1;d<l;d++){const C=Math.abs((f-h)*(u-i[2*d+1])-(h-i[2*d])*(m-u))/x;C>p&&(p=C,_=d)}_>=0&&(n[_]=1,r(c,_),r(_,l))};r(0,s),r(s,t);const o=[];for(let c=0;c<t;c++)n[c]&&o.push(i[2*c],i[2*c+1]);return o.length>=6?o:i}const Nf=[];function vt(i,e,t,n,s=""){const a=document.createElement("div");a.className="lbl "+s,a.textContent=i,document.getElementById("labels").appendChild(a),Nf.push({el:a,p:new Z(e,t,n),near:s.includes("near")})}const Ns=new Z;function iE(){for(const i of Nf){Ns.copy(i.p).project(ii);const e=Ns.z<1&&Math.abs(Ns.x)<1.1&&Math.abs(Ns.y)<1.1&&!(i.near&&ii.position.distanceTo(i.p)>1600);i.el.style.display=e?"block":"none",e&&(i.el.style.left=`${(Ns.x+1)/2*window.innerWidth}px`,i.el.style.top=`${(1-Ns.y)/2*window.innerHeight}px`)}}const sE=(i,e,t)=>{const[n,s]=i.origin,a=Math.cos(s*Math.PI/180)*111320;return[(e-n)*a,-(t-s)*110574]},Ue={};function Qf(i){const e=Ue[i];if(!e)return;En.maxPolarAngle=Math.max(1.2,e.pol);const t=new Z(e.t[0],Qe(e.t[0],e.t[1])+(e.y||0),e.t[1]),n=new Z(Math.sin(e.az)*Math.sin(e.pol),Math.cos(e.pol),Math.cos(e.az)*Math.sin(e.pol)).multiplyScalar(e.d);En.target.copy(t),ii.position.copy(t).add(n),En.update()}const qe=Un?{ground:"#8e8b92",pilot:"#908c93",water:"#6fa4b2",parks:"#8aa63e",plazas:"#9c9cac",path:"#a5a2aa",service:"#9d9aa2",minor:"#aaa7ae",major:"#77747c",rail:"#5a5052",tram:"#8c2f2c",walls:["#f2e3b8","#e8d394","#efe6cf","#d9c7a0","#e3d6bf","#ecc9a6","#d8d0bf","#f0dcae"],roofs:["#e0963e","#e8b44c","#c87a48","#a8603e","#d98a3a","#9a5a40","#e6a446","#80808c"],flats:["#c4beb8","#b4b0b0","#ccc4ba","#aca8aa"],trees:["#e6b235","#e08a26","#c95a24","#e8c33f","#7fa03c","#557a30","#3f6a2c"]}:null;qe&&Zt&&Object.assign(qe,{ground:"#7f746e",pilot:"#81766f",plazas:"#958a80",path:"#9b8f85",service:"#8f847c",minor:"#978c84",major:"#665e5c",parks:"#86a63a",walls:["#f0d9a0","#e6bf74","#f2e4c4","#dcbc8a","#ebc4a8","#e8b48e","#efd690","#f3dcb4","#e2c7a6","#e9a98c"],roofs:["#b85a3c","#a94a34","#c8683e","#9a4a36","#c47458","#cf8a6c","#b9705a","#8e4c3a","#80808c"],flats:["#e4e0d8","#d2cfca","#d8ccb6","#c8c3ba"],trees:["#f0b52a","#e8891f","#d4581f","#b8321e","#efc93a","#8aa83a","#5b8a32","#d97a26","#c9a227"]});function yn(i,e,t=1){const n=Math.sin(e*12.9898)*43758.5453,s=Math.sin(e*78.233)*12345.6789,a=Math.sin(e*3.7)*9876.54,r=o=>(o-Math.floor(o))*2-1;return i.clone().offsetHSL(r(n)*.012*t,r(s)*.06*t,r(a)*.035*t)}const aE=`
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
  float ww = res ? (0.42 + 0.06 * h1(seed * 41.0)) : 0.34 + 0.08 * h1(seed * 41.0);
  float wy0 = 0.26, wy1 = res ? 0.86 : 0.74 + 0.1 * h1(seed * 53.0);
  float wfrac = ww * (wy1 - wy0);
  vec3 avg = col * (1.0 - 0.55 * wfrac - (bal ? 0.12 : 0.0));
  float fade = smoothstep(0.22, 0.8, px);  // wm11: fade window grid sooner so tall facades stay calmer
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
    if (res && h1(bi * 5.3 + f * 1.9 + seed * 3.0) < 0.04) {          // wm11: fewer striped awnings (less noise)
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
  if (wh > 28.0) fade = max(fade, smoothstep(0.16, 0.55, px)); // wm11: extra calm on tall slabs
  if (fade > 0.0) gEmis += vec3(1.0, 0.55, 0.22) * 0.25 * wfrac * uNight * fade; // far away: a soft average glow
  return mix(c, avg, fade);
}`;async function rE(){try{const e=await(await fetch("./tex/tex.json")).json(),t=new Gn().setTranscoderPath("./basis/").detectSupport(rn),n=await t.loadAsync(`./tex/walls_${Re?512:1024}.ktx2`);n.wrapS=n.wrapT=Pn,n.anisotropy=Re?2:4,n.colorSpace=Pt,n.needsUpdate=!0;let s=0;for(const o of n.mipmaps)s+=o.data.byteLength;t.dispose();const a=[0,.55,0,.45,.4,.55,.3,.15,.35,.1,.45],r=new Ke({vertexColors:!0,side:It});return r.onBeforeCompile=o=>{o.uniforms.tArr={value:n},o.uniforms.uMean={value:e.means.map(c=>new Z(c[0],c[1],c[2]))},o.uniforms.uHue={value:a},o.uniforms.uNight=Lf,o.uniforms.uCol={value:Zt?1:0},o.vertexShader=`attribute vec4 wa;
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
`+aE+`
`+o.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
diffuseColor.rgb = facade(diffuseColor.rgb);`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
totalEmissiveRadiance += gEmis;`)},{mat:r,mb:s/1048576}}catch(i){return console.warn("facade textures failed, falling back to plain walls",i),null}}async function oE(){const i=await(await fetch("./data/scene.json")).json();let e=null;try{e=await(await fetch("./data/kapalicarsi.json")).json()}catch{}const t=(g,S)=>{if(!e)return!1;const F=e.outline;let E=!1;for(let U=0,Q=F.length-2;U<F.length;Q=U,U+=2)F[U+1]>S!=F[Q+1]>S&&g<(F[Q]-F[U])*(S-F[U+1])/(F[Q+1]-F[U+1])+F[U]&&(E=!E);return E};if(e){const g=i.buildings.length;i.buildings=i.buildings.filter(S=>{const F=S.p[0]?.[0];if(!F)return!0;let E=0,U=0;for(let Q=0;Q<F.length;Q+=2)E+=F[Q],U+=F[Q+1];return!t(E/(F.length/2),U/(F.length/2))}),window.__kcFiltered=g-i.buildings.length}try{const S=(await(await fetch("./data/bridge_filter.json")).json()).centroids,F=i.buildings.length;i.buildings=i.buildings.filter(E=>{const U=E.p[0]?.[0];if(!U)return!0;let Q=0,z=0;for(let P=0;P<U.length;P+=2)Q+=U[P],z+=U[P+1];return Q/=U.length/2,z/=U.length/2,!S.some(P=>Math.hypot(P[0]-Q,P[1]-z)<.5)}),window.__bridgeFiltered=F-i.buildings.length}catch{}try{const S=(await(await fetch("./data/taksim_building_filter.json")).json()).centroids,F=i.buildings.length;i.buildings=i.buildings.filter(E=>{const U=E.p[0]?.[0];if(!U)return!0;let Q=0,z=0;for(let P=0;P<U.length;P+=2)Q+=U[P],z+=U[P+1];return Q/=U.length/2,z/=U.length/2,!S.some(P=>Math.hypot(P[0]-Q,P[1]-z)<3)}),window.__taksimBldFiltered=F-i.buildings.length}catch{}try{const S=(await(await fetch("./data/underground_filter.json")).json()).centroids,F=i.buildings.length;i.buildings=i.buildings.filter(E=>{const U=E.p[0]?.[0];if(!U)return!0;let Q=0,z=0;for(let P=0;P<U.length;P+=2)Q+=U[P],z+=U[P+1];return Q/=U.length/2,z/=U.length/2,!S.some(P=>Math.abs(P[0]-Q)<.5&&Math.abs(P[1]-z)<.5)}),window.__ugFiltered=F-i.buildings.length}catch{}try{const g=await(await fetch("./data/height_fix.json")).json();let S=0;for(const F of i.buildings){const E=F.p[0]?.[0];if(!E)continue;let U=0,Q=0;for(let z=0;z<E.length;z+=2)U+=E[z],Q+=E[z+1];U/=E.length/2,Q/=E.length/2;for(const z of g.fix)Math.abs(z.c[0]-U)<.5&&Math.abs(z.c[1]-Q)<.5&&(F.h=z.h,z.k!=null&&(F.k=z.k,F.hip=null),S++)}window.__heightFix=S}catch{}let n=[];try{const g=await(await fetch("./data/wm13_fatih.json")).json();let S=0;const F=new Map;for(const E of g.fix)F.set(`${Math.round(E.c[0])},${Math.round(E.c[1])}`,E);try{const E=await(await fetch("./data/wm13_mosques.json")).json();for(const U of E.hall_fix||[])F.set(`${Math.round(U.c[0])},${Math.round(U.c[1])}`,U)}catch{}for(const E of i.buildings){const U=E.p[0]?.[0];if(!U)continue;let Q=0,z=0;for(let J=0;J<U.length;J+=2)Q+=U[J],z+=U[J+1];Q/=U.length/2,z/=U.length/2;const P=F.get(`${Math.round(Q)},${Math.round(z)}`);!P||Math.abs(P.c[0]-Q)>.5||Math.abs(P.c[1]-z)>.5||(E.h=P.h,P.k!=null&&(E.k=P.k,E.hip=null),P.g!=null&&(E.g=P.g),P.bd&&(E.bd=P.bd,E.in=P.in,E.rh=P.rh),S++)}n=g.domes||[],window.__wm13Fatih=S}catch{}try{const g=await(await fetch("./data/dolmabahce_fix.json")).json(),S=g.filter_centroids||[],F=i.buildings.length;i.buildings=i.buildings.filter(E=>{const U=E.p[0]?.[0];if(!U)return!0;let Q=0,z=0;for(let P=0;P<U.length;P+=2)Q+=U[P],z+=U[P+1];return Q/=U.length/2,z/=U.length/2,!S.some(P=>Math.hypot(P[0]-Q,P[1]-z)<8)});for(const E of g.buildings)i.buildings.push(E);window.__dolmaFix={removed:F-(i.buildings.length-g.buildings.length),added:g.buildings.length,dome:(g.dome||[]).length},window.__dolmaDome=g.dome||[],window.__dolmaRings=g.buildings.map(E=>E.p[0][0])}catch(g){console.warn("dolmabahce_fix skipped",g)}let s=new Set,a=[],r=[];try{const g=await(await fetch("./data/wm13_haydarpasa.json")).json();r=g.detail_zone||[],s=new Set((g.far_skip||[]).map(S=>`${S[0]},${S[1]}`)),a=g.far_clip||[];for(const S of g.detail_buildings||[])i.buildings.push(S);window.__wm13Kad=(g.detail_buildings||[]).length}catch{}try{wt=await(await fetch("./data/wm14_besiktas.json")).json();for(const g of wt.buildings)i.buildings.push(g);for(const g of Object.keys(wt.roads||{})){const S=i.roads;S[g]=(S[g]||[]).concat(wt.roads[g])}for(const g of wt.parks||[])i.parks.push(g);for(const g of wt.plazas||[])i.plazas.push(g);for(const g of wt.trees||[])i.trees.push(g);window.__wm14Bjk={b:wt.buildings.length,t:(wt.trees||[]).length}}catch{wt=null}try{const g=await(await fetch("./data/wm11_building_filter.json")).json(),S=i.buildings.length,F=g.detail||g.centroids.map(Q=>({c:Q,mode:"all"})),E=new Set,U=i.buildings.map((Q,z)=>{const P=Q.p[0]?.[0];if(!P)return null;let J=0,k=0;for(let v=0;v<P.length;v+=2)J+=P[v],k+=P[v+1];return{i:z,x:J/(P.length/2),z:k/(P.length/2),h:Q.h,a:Math.abs(Kn(P))}});for(const Q of F){const z=U.filter(P=>P&&Math.abs(P.x-Q.c[0])<.6&&Math.abs(P.z-Q.c[1])<.6);z.length&&(Q.mode==="one"&&z.length>=2?(z.sort((P,J)=>J.a-P.a||J.h-P.h||P.i-J.i),z.slice(1).forEach(P=>E.add(P.i))):Q.mode!=="one"&&z.forEach(P=>E.add(P.i)))}i.buildings=i.buildings.filter((Q,z)=>!E.has(z)),window.__wm11BldFiltered=S-i.buildings.length}catch{}try{ut=await(await fetch("./data/wm15.json")).json();try{const F=await(await fetch("./data/wm16.json")).json();ut.filter=(ut.filter||[]).concat(F.filter||[]),delete F.filter,ut.mosques=(ut.mosques||[]).concat(F.mosques16||[]),delete F.mosques16,Object.assign(ut,F)}catch{}const g=ut.filter,S=i.buildings.length;i.buildings=i.buildings.filter(F=>{const E=F.p[0]?.[0];if(!E)return!0;let U=0,Q=0;for(let z=0;z<E.length;z+=2)U+=E[z],Q+=E[z+1];return U/=E.length/2,Q/=E.length/2,!g.some(z=>Math.abs(z[0]-U)<.6&&Math.abs(z[1]-Q)<.6)}),window.__wm15Filtered=S-i.buildings.length}catch{ut=null}if(ut?.roads_fix){const g=ut.roads_fix,S=i.roads;S.major=S.major.filter((F,E)=>!g.major_hide.includes(E)).concat(g.major_add)}ba("scene");const o=Ft?await rE():null;if(o&&(window.__texMB=Math.round(o.mb*100)/100),rt>=7&&xn.get("terrain")!=="0"){en=await(await fetch("./data/terrain.json")).json();try{const g=await(await fetch("./data/terrain_far.json")).json();Uf=g,window.__terf={nx:g.nx,nz:g.nz}}catch{}try{Jc=await(await fetch("./data/wm14_terrain_bjk.json")).json()}catch{}document.getElementById("cr-dem").textContent="Kıyı+arazi/coast+terrain: Copernicus DEM GLO-30 (© DLR, Airbus DS)"}if(en){const g={ayasofya:100,sultanahmet:95,yenicami:70,rustempasa:30,galata:14,nusretiye:32,ayatriada:28,stantoine:60,suleymaniye:120};for(const S of i.landmarks){const F=g[S.id];if(!F)continue;const E=S.model?S.model.x:S.label[0],U=S.model?S.model.z:S.label[1];zt(E,U,F,30)}for(const[S,F,E]of[[179,1526,38],[209,1648,22],[190,1686,16]])zt(S,F,E,20);for(const[S,F]of[[-302.3,1943.1],[-326.7,1972.1],[-349.2,2000.8],[-260.4,1783.6]])zt(S,F,7,10);if(e){const S=e.outline;let F=0,E=0;for(let U=0;U<S.length;U+=2)F+=S[U],E+=S[U+1];zt(F/(S.length/2),E/(S.length/2),150,40)}zt(504,-1493,125,35),zt(739,-1482,55,35),zt(621,-1426,45,35),zt(797,-1625,70,35),zt(652,-1671,90,35),zt(1097.9,-1594.9,75.7,25),zt(1106,-1845.1,44.9,25),zt(778,-1446.1,56.7,25),zt(810.8,-1502.9,40.3,25),zt(944.9,-1542.1,39.3,25),zt(753.5,-1786.2,57.2,25),zt(793.6,-1931.2,49.6,25),zt(768.7,-1253.4,50.1,25),zt(794.7,-1202.2,38.8,25),zt(1294.3,-1762.9,90,25);try{const S=await(await fetch("./data/wm11_slope_pads.json")).json(),F=[];for(const E of S.pads)zt(E.x,E.z,E.r,E.b),E.prio&&F.push({x:E.x,z:E.z,r:E.r,h:Vs[Vs.length-1].h});if(window.__slopePads=S.pads.length,F.length){const E=[];for(const U of F)for(let Q=0;Q<20;Q++){const z=Q*.31416,P=U.x+Math.cos(z)*U.r,J=U.z+Math.sin(z)*U.r,k=cs(P+Math.cos(z)*10,J+Math.sin(z)*10);U.h-k>2.2&&E.push([P,J,2*Math.PI*U.r/20+.4,k-1.5,U.h+.8,z+Math.PI/2])}if(E.length){const U=new Rt(new Dt(1,1,1),new Ke({color:"#cbbda2"}),E.length),Q=new He,z=new St;E.forEach((P,J)=>{z.setFromAxisAngle(new Z(0,1,0),P[5]),Q.compose(new Z(P[0],(P[3]+P[4])/2,P[1]),z,new Z(P[2],Math.max(1.2,P[4]-P[3]),1.6)),U.setMatrixAt(J,Q)}),U.castShadow=U.receiveShadow=!0,U.name="wm11-pads",Ge.add(U),window.__slopeWalls=E.length}}}catch{}window.__H=Qe,window.__pads=Vs.length}const[c,l,h,u]=i.bounds_m,f=(c+h)/2,m=(l+u)/2,x=(g,S)=>sE(i,g,S),_=x(28.9784,41.0066),p=x(28.9741,41.0256),d=x(28.9858,41.0372);Ue.overview=Re?{t:[f+100,m+250],d:12500,pol:.55,az:0}:{t:[f+150,m+250],d:10500,pol:.72,az:-.3},Ue.overview_east=Re?{t:[0,250],d:8800,pol:.55,az:0}:{t:[150,250],d:8200,pol:.72,az:-.3},Ue.sultanahmet={t:[_[0],_[1]],d:Re?820:700,pol:.95,az:Re?-.8:.8},Ue.galata={t:[p[0],p[1]],d:Re?420:360,pol:1,az:.35};const C=x(28.965,41.0168);if(Ue.suleymaniye={t:[C[0],C[1]],d:Re?900:760,pol:.95,az:.25},Ue.yc_top={t:[-574.7,732.1],d:Re?400:250,pol:.12,az:.7245},Ue.gk_eye={t:[-402,-236],y:40,d:Re?190:150,pol:1.2,az:.4},Ue.gk_apple={t:[-402,-236],y:30,d:Re?300:230,pol:.72,az:.4},Ue.gk_ground={t:[-402,-236],y:36,d:Re?330:270,pol:1.4,az:-.25},Ue.gm_beyazit={t:[-1300,1300],y:20,d:Re?1300:1e3,pol:1,az:-.3},Ue.br_galata={t:[-600,250],y:8,d:Re?900:700,pol:1.15,az:.9},Ue.ch_pera={t:[-150,-250],y:15,d:Re?420:330,pol:1,az:.2},Ue.fatih={t:[-2900,600],y:20,d:Re?1500:1150,pol:.95,az:-.2},Ue.edirnekapi={t:[-4e3,-320],y:60,d:Re?1e3:780,pol:1,az:-.9},Ue.gate_edk={t:[-3771,-862],y:30,d:Re?420:340,pol:1.05,az:-.9},Ue.gate_tpk={t:[-4426,205],y:30,d:Re?420:340,pol:1.05,az:-.9},Ue.tekfur={t:[-3260,-1170],y:25,d:Re?420:340,pol:1.05,az:-.9},Ue.seawall={t:[-1800,2650],y:10,d:Re?1500:1200,pol:1,az:.4},Ue.kc_top={t:[-905,1386],y:40,d:Re?900:520,pol:.02,az:-Math.PI/2},Ue.kc_top_n={t:[-905,1386],y:40,d:Re?900:520,pol:.02,az:0},Ue.kc_obl={t:[-860,1400],y:40,d:Re?700:520,pol:.8,az:-Math.PI/2-.25},Ue.asia={t:[2600,600],y:20,d:Re?3200:2600,pol:.95,az:-.9},Ue.yedikule={t:[-4700,3380],y:15,d:Re?800:620,pol:1,az:-.7},Ue.surlar={t:[-4600,1400],y:15,d:Re?1700:1300,pol:1.05,az:-1.25},Ue.gm_taksim={t:[425,-1490],y:20,d:Re?520:400,pol:1.05,az:.4},Ue.eminonu={t:[-725,700],d:Re?820:700,pol:.95,az:Re?.6:.35},Ue.taksim={t:[d[0],d[1]],d:Re?700:600,pol:.95,az:3.4},Ue.match={t:[_[0]+150,_[1]-60],d:Re?560:470,pol:.82,az:.55},Ue.roofs={t:[p[0]-120,p[1]+60],d:Re?260:220,pol:.85,az:.6},Ft){Ue.sultanahmet.pol=.82,Ue.galata.pol=.85,Ue.match.pol=.74,Ue.roofs.pol=.78,Ue.suleymaniye.pol=.82,Ue.taksim.pol=.82,Ue.overview.pol=Re?.82:.88;for(const g of Object.values(Ue))g.d/=rs}Qf("overview");const y=new st(new Ks(4e4,4e4),new Ke({color:qe?Zt?qe.water:qe.ground:rt>=2?"#ece6da":"#e9e4da"}));y.material.depthWrite=!1,y.renderOrder=-200,y.name="ground",y.rotation.x=-Math.PI/2,y.receiveShadow=rt>=2,Ge.add(y);const M=new st(new Ks(h-c-8,u-l-8),new Ke({color:qe?qe.pilot:rt>=2?"#e9e1d0":"#e4ddd0"}));if(M.material.depthWrite=!1,M.renderOrder=-150,M.rotation.x=-Math.PI/2,M.position.set(f,.02,m),M.receiveShadow=rt>=2,en){const g=en,S=[],F=[];for(let Q=0;Q<g.nz;Q++)for(let z=0;z<g.nx;z++)S.push(g.x0+z*g.step,Qe(g.x0+z*g.step,g.z0+Q*g.step)+.02,g.z0+Q*g.step);for(let Q=0;Q<g.nz-1;Q++)for(let z=0;z<g.nx-1;z++){const P=Q*g.nx+z,J=P+1,k=P+g.nx,v=k+1,b=g.x0+z*g.step,T=g.z0+Q*g.step;b<c||b+g.step>h||T<l||T+g.step>u||F.push(P,k,J,J,k,v)}const E=new xt;E.setAttribute("position",new tt(S,3)),E.setIndex(F),E.computeVertexNormals();const U=new st(E,new Ke({color:qe?qe.pilot:"#e9e1d0",depthWrite:!1}));U.renderOrder=-150,U.receiveShadow=!0,U.name="terrain",M.name="pilot",M.renderOrder=-160,Ge.add(U),Ge.add(M)}else Ge.add(M);const W=g=>{const S=g[0];let F=0,E=0;for(let U=0;U<S.length;U+=2)F+=S[U],E+=S[U+1];return Math.abs(Kn(S))<3e4&&cs(F/(S.length/2),E/(S.length/2))>1.5},V=i.water.filter(g=>!W(g)),G=i.water.filter(W);window.__pools=G.length,Jt(V,-1.1,qe?qe.water:"#8ec3d8"),Jt(G,.05,"#6fa8bb");{const g=[],S=[],F=new Ie("#a39a8c"),E=new Ie("#d6cebf"),U=(J,k,v,b,T)=>{g.push(...J,...k,...v,...J,...v,...b);for(let D=0;D<6;D++)S.push(T.r,T.g,T.b)},Q=(J,k)=>Math.abs(J-c)<2||Math.abs(J-h)<2||Math.abs(k-l)<2||Math.abs(k-u)<2||Math.abs(Math.abs(J)-1764)<2||Math.abs(Math.abs(k)-2709)<2;for(const J of i.water)J.forEach((k,v)=>{const b=G.includes(J),T=(Kn(k)>0?1:-1)*(v===0?1:-1);for(let D=0;D<k.length;D+=2){const L=(D+2)%k.length,w=k[D],H=k[D+1],X=k[L],ue=k[L+1],ve=X-w,ie=ue-H,Ae=Math.hypot(ve,ie),pe=(w+X)/2,Me=(H+ue)/2;if(Ae<.5||Q(w,H)&&Q(X,ue)||pe<c+3||pe>h-3||Me<l+3||Me>u-3)continue;const le=Math.max(0,Qe(w,H))+(b?.45:.34),Te=Math.max(0,Qe(X,ue))+(b?.45:.34),Be=b?le-.5:-1.1,De=b?Te-.5:-1.1,re=b?.6:1,we=ie/Ae*T*1.6,Ee=-ve/Ae*T*1.6;U([w,Be,H],[X,De,ue],[X,Te,ue],[w,le,H],F),U([w,le,H],[X,Te,ue],[X+we*re,Te,ue+Ee*re],[w+we*re,le,H+Ee*re],E),b&&U([w+we*re,le,H+Ee*re],[X+we*re,Te,ue+Ee*re],[X+we*re,Te-.6,ue+Ee*re],[w+we*re,le-.6,H+Ee*re],F)}});const z=new xt;z.setAttribute("position",new tt(g,3)),z.setAttribute("color",new tt(S,3)),z.computeVertexNormals();const P=new st(z,new Ke({vertexColors:!0,side:It}));P.receiveShadow=rt>=2,P.name="quay",Ge.add(P)}try{const g=await(await fetch("./data/context.json")).json();if(wt){const D=new Set(wt.ctx_skip||[]);g.polys=g.polys.filter((L,w)=>!D.has(w)).concat(wt.ctx_add||[])}try{const D=await(await fetch("./data/wm13_haydarpasa.json")).json();for(const L of D.land2||D.land||[])g.polys.push(L);window.__wm13Land=(D.land||[]).length}catch{}const[S,F,E,U]=g.bbox_m,Q=g.fade,z=new Ie(qe?qe.pilot:"#e4ddd0"),P=new Ie(qe?Zt?qe.water:qe.ground:"#e9e4da"),J=new Ie,k=[],v=[];for(const D of g.polys){const L=ue=>{const ve=[];for(let ie=0;ie<ue.length;ie+=2)ve.push(new Oe(ue[ie],ue[ie+1]));return ve},w=L(D[0]),H=D.slice(1).map(L),X=w.concat(...H);for(const ue of Cn.triangulateShape(w,H))for(const ve of[ue[0],ue[2],ue[1]]){const ie=X[ve],Ae=Math.max(S-ie.x,0,ie.x-E),pe=Math.max(F-ie.y,0,ie.y-U),Me=0,le=Math.max(1800-ie.x,0,ie.x-4700),Te=Math.max(-2600-ie.y,0,ie.y-4400),Be=Math.hypot(Math.max(1764-ie.x,0,ie.x-3460),Math.max(-3260-ie.y,0,ie.y+1480)),De=Math.min(1,Math.max(Me,2.2*Math.min(Math.hypot(Ae,pe),Math.hypot(le,Te)+250,Be+150)/Q));J.copy(z).lerp(P,.3+.7*De*De*(3-2*De)),k.push(ie.x,Math.max(0,Qe(ie.x,ie.y))+.01,ie.y),v.push(J.r,J.g,J.b)}}const b=new xt;b.setAttribute("position",new tt(k,3)),b.setAttribute("color",new tt(v,3)),b.computeVertexNormals();const T=new st(b,new Ke({vertexColors:!0,depthWrite:!1}));if(T.renderOrder=-170,T.name="ctx",T.receiveShadow=rt>=2,Ge.add(T),wt&&wt.land){const D=new yi;for(const w of wt.land)Ws(D,w,.01,z,!!en);const L=new st(D.geometry(),new Ke({vertexColors:!0,depthWrite:!1}));L.renderOrder=-170,L.name="wm14_bjk_land",L.receiveShadow=rt>=2,Ge.add(L)}}catch(g){console.warn("context land skipped",g)}if(n.length){const g=new Rt(new Rn(1,10,4,0,Math.PI*2,0,Math.PI/2),new Ke({color:"#8d9aa8"}),n.length),S=new He,F=new St,E=new Z,U=new Z;n.forEach(([Q,z,P,J],k)=>g.setMatrixAt(k,S.compose(E.set(Q,Qe(Q,z)+J+.6,z),F,U.set(P,P*.85,P)))),g.castShadow=rt>=2,g.name="wm13_fatih_domes",Ge.add(g)}try{const g=await(await fetch("./data/wm13_haydarpasa.json")).json(),S=new yi,F=new Ie("#bdb5a6"),E=new Ie("#d6cfc2"),U=new Ie("#8f8a80"),Q=new Ie("#a7a196"),z=w=>{let H=0,X=0;for(let ue=0;ue<w.length;ue+=2)H+=w[ue],X+=w[ue+1];return Math.max(0,Qe(H/(w.length/2),X/(w.length/2)))},P=new Ie("#80868a"),J=new Ie("#bdbdb8");{const w=[],H=[],X=(ie,Ae,pe)=>{const Me=De=>{const re=[];for(let we=0;we<De.length;we+=2)re.push(new Oe(De[we],De[we+1]));return re},le=Me(ie[0]),Te=ie.slice(1).map(Me),Be=le.concat(...Te);for(const De of Cn.triangulateShape(le,Te))for(const re of[De[0],De[2],De[1]]){const we=Be[re];w.push(we.x,Math.max(0,Qe(we.x,we.y))+pe,we.y),H.push(Ae.r,Ae.g,Ae.b)}};for(const ie of g.yard_t||g.yard||[])X(ie,P,.15);for(const ie of g.apron_t||g.apron||[])X(ie,J,.18);const ue=new xt;ue.setAttribute("position",new tt(w,3)),ue.setAttribute("color",new tt(H,3)),ue.computeVertexNormals();const ve=new st(ue,new Ke({vertexColors:!0,side:It}));ve.receiveShadow=!0,ve.name="wm14_hayd_yard",Ge.add(ve)}for(const w of g.piers||[]){const H=z(w);Gt(S,[[w]],H-1.5,H+1.4,F,E)}for(const w of g.breakwaters||[]){const H=z(w);Gt(S,[[w]],H-1.5,H+2.2,U,Q)}for(const w of g.platforms||[]){const H=z(w);Gt(S,[[w]],H,H+.9,F,new Ie("#cfc6b6"))}const k=new Ie("#d9ccb4"),v=new Ie("#8a8d90"),b=new Ie("#c9c4ba");for(const w of g.buildings||[]){const H=z(w.ring);Gt(S,[[w.ring]],H,H+Math.min(30,w.h),k,v)}for(const w of g.silos||[])if(w.a<1e4){const H=z(w.ring);Gt(S,[[w.ring]],H,H+32,b,b)}const T=new Ie("#8c7f70"),D=new Ie("#4a4440");for(const w of g.rails||[])for(let H=0;H+3<w.length;H+=2){const X=w[H],ue=w[H+1],ve=w[H+2],ie=w[H+3],Ae=Math.hypot(ve-X,ie-ue);if(Ae<.5)continue;const pe=-(ie-ue)/Ae,Me=(ve-X)/Ae,le=Math.max(0,Qe((X+ve)/2,(ue+ie)/2))+.3,Te=(Be,De,re)=>[[X+pe*(Be-De),ue+Me*(Be-De),ve+pe*(Be-De),ie+Me*(Be-De),ve+pe*(Be+De),ie+Me*(Be+De),X+pe*(Be+De),ue+Me*(Be+De)]];Gt(S,[Te(0,1.7,le)],le,le+.12,T,T),Gt(S,[Te(-.72,.09,le)],le+.12,le+.24,D,D),Gt(S,[Te(.72,.09,le)],le+.12,le+.24,D,D)}const L=new st(S.geometry(),new Ke({vertexColors:!0,side:It}));L.receiveShadow=L.castShadow=rt>=2,L.name="wm13_hayd",Ge.add(L)}catch(g){console.warn("wm13 haydarpasa skipped",g)}try{const g=(await(await fetch("./data/far.json")).json()).blocks,S=new Set(wt?(wt.far_skip||[]).map(k=>`${k[0]},${k[1]}`):[]),F=new yi,E=new Ie("#cdbfae"),U=new Ie("#b9876a"),Q=new Ie(qe?Zt?qe.water:qe.ground:"#e9e4da"),z=new Ie,P=new Ie;for(const k of g){const v=k.p;if(Re&&Math.abs(Kn(v))<2500)continue;const b=Math.max(c-f,0,f-h),T=Math.max(l-m,0,m-u),D=Math.min(1,Math.hypot(b,T)/4200);if([[3328,3030,70],[3049.3,-2208,70],[2108.2,265.4,35]].some(([w,H,X])=>Math.hypot(f-w,m-H)<X)||s.has(`${v[0]},${v[1]}`)||S.has(`${v[0]},${v[1]}`))continue;z.copy(E).lerp(Q,.15+.75*D),P.copy(U).lerp(Q,.15+.75*D);const L=Math.max(0,Qe(f,m));Gt(F,[[v]],L,L+k.h*(1-.4*D),z,P)}for(const k of a.concat(wt?wt.far_clip||[]:[])){const v=k.rings[0];let b=0,T=0;for(let X=0;X<v.length;X+=2)b+=v[X],T+=v[X+1];b/=v.length/2,T/=v.length/2;const D=Math.max(c-b,0,b-h),L=Math.max(l-T,0,T-u),w=Math.min(1,Math.hypot(D,L)/4200);z.copy(E).lerp(Q,.15+.75*w),P.copy(U).lerp(Q,.15+.75*w);const H=Math.max(0,Qe(b,T));Gt(F,[k.rings],H,H+k.h*(1-.4*w),z,P)}const J=new st(F.geometry(),new Ke({vertexColors:!0,side:It}));J.receiveShadow=rt>=2,J.name="far",Ge.add(J),window.__far=g.length}catch(g){console.warn("far context skipped",g)}try{let g=(await(await fetch("./data/mosques.json")).json()).mosques;try{const L=(await(await fetch("./data/wm11_mosque_filter.json")).json()).centroids;g=g.filter(w=>!L.some(H=>Math.hypot(H[0]-w.x,H[1]-w.z)<5))}catch{}if(ut){const D=ut.generic_drop||[];g=g.filter(L=>!D.some(w=>Math.abs(w[0]-L.x)<.5&&Math.abs(w[1]-L.z)<.5));for(const L of ut.generic_minarets||[])for(const w of g)Math.abs(w.x-L.c[0])<.5&&Math.abs(w.z-L.c[1])<.5&&w.m.forEach((H,X)=>{L.m[X]&&(H[0]=L.m[X][0],H[1]=L.m[X][1])})}if(wt)for(const D of wt.mosques||[])(ut?.bj_drop||[]).includes(D.n)||g.push(D);try{const D=await(await fetch("./data/wm13_mosques.json")).json();for(const L of D.mosques)for(const w of g)if(Math.hypot(w.x-L.c[0],w.z-L.c[1])<2&&(L.r&&(w.r=L.r),L.y!=null&&(w.y=L.y),L.mh))for(const H of w.m)H[2]=L.mh}catch{}const S=g.reduce((D,L)=>D+L.m.length,0),F=new He,E=new St,U=new Z,Q=new Z,z=new Ke({color:"#8e939b"}),P=new Ke({color:"#e4dccd"}),J=new Rt(new Rn(1,12,4,0,Math.PI*2,0,Math.PI/2),z,g.length),k=new Rt(new Qt(1,1,1,14,1,!0),P,g.length),v=new Rt(new Qt(.85,1,1,8),P,Math.max(1,S)),b=new Rt(new Jn(1,1,8),z,Math.max(1,S));let T=0;g.forEach((D,L)=>{const w=Qe(D.x,D.z),H=.35*D.r;k.setMatrixAt(L,F.compose(U.set(D.x,w+D.y+H/2,D.z),E,Q.set(D.r*1.02,H,D.r*1.02))),J.setMatrixAt(L,F.compose(U.set(D.x,w+D.y+H,D.z),E,Q.set(D.r,D.r*.92,D.r)));for(const[X,ue,ve,ie]of D.m){const Ae=Qe(X,ue),pe=ve*.17;v.setMatrixAt(T,F.compose(U.set(X,Ae-.8+(ve-pe+.8)/2,ue),E,Q.set(ie,ve-pe+.8,ie))),b.setMatrixAt(T,F.compose(U.set(X,Ae+ve-pe/2,ue),E,Q.set(ie*1.05,pe,ie*1.05))),T++}}),v.count=b.count=T;for(const D of[J,k,v,b])D.castShadow=D.receiveShadow=rt>=2,D.frustumCulled=!1,Ge.add(D)}catch(g){console.warn("mosque placeholders skipped",g)}try{const g=await(await fetch("./data/bridges.json")).json(),S=[],F=[],E=new Ie("#77706c"),U=new Ie("#c8bfb2"),Q=new Ie("#7d766f"),z=(Ae,pe,Me,le)=>{S.push(...Ae,...pe,...Me);for(let Te=0;Te<3;Te++)F.push(le.r,le.g,le.b)},P=g.bridges.find(Ae=>Ae.name==="Galata Köprüsü"),J=new Map,k=(Ae,pe)=>`${Math.round(Ae)},${Math.round(pe)}`;if(P)for(const Ae of P.strips){const pe=Ae.p;for(let Me=0;Me<pe.length;Me+=2){const le=k(pe[Me],pe[Me+1]),Te=J.get(le)||[];Te.push(Ae.y),J.set(le,Te)}}const v=(Ae,pe,Me)=>{const le=J.get(k(Ae,pe));return le?le.reduce((Te,Be)=>Te+Be,0)/le.length:Me},b=[];Lr=(Ae,pe)=>{for(const Me of b){if(Ae<Me.bb[0]||Ae>Me.bb[2]||pe<Me.bb[1]||pe>Me.bb[3])continue;const le=Me.v;let Te=!1;for(let re=0,we=le.length-1;re<le.length;we=re++)le[re].y>pe!=le[we].y>pe&&Ae<(le[we].x-le[re].x)*(pe-le[re].y)/(le[we].y-le[re].y)+le[re].x&&(Te=!Te);if(!Te)continue;let Be=0,De=0;for(let re=0;re<le.length;re++){const we=1/(.5+Math.hypot(le[re].x-Ae,le[re].y-pe));Be+=we,De+=we*Me.h[re]}return De/Be}return-1e9};for(const Ae of g.bridges)for(const pe of Ae.strips){const Me=pe.p,le=[];for(let Ne=0;Ne<Me.length;Ne+=2)le.push(new Oe(Me[Ne],Me[Ne+1]));Cn.isClockWise(le)&&le.reverse();let Te=0,Be=0;for(const Ne of le)Te+=Ne.x,Be+=Ne.y;const De=Math.max(0,Qe(Te/le.length,Be/le.length));if(De>.3&&pe.y<3&&Ae!==P)continue;const re=pe.y+De,we=pe.y-pe.t+De,Ee=Ae===P;if(Ee){const Ne=le.map(Je=>Math.max(v(Je.x,Je.y,pe.y)+De,Qe(Je.x,Je.y)+.05));let ct=1e9,Mt=1e9,it=-1e9,Xt=-1e9;for(const Je of le)ct=Math.min(ct,Je.x),it=Math.max(it,Je.x),Mt=Math.min(Mt,Je.y),Xt=Math.max(Xt,Je.y);b.push({v:le,h:Ne,bb:[ct,Mt,it,Xt]});{let Je=0,_t=-1;for(let nt=0;nt<le.length;nt++){const lt=le[nt].distanceTo(le[(nt+1)%le.length]);lt>_t&&(_t=lt,Je=nt)}if(le.length===4){const nt=Je,lt=(Je+1)%4,Lt=(Je+2)%4,Ai=(Je+3)%4,Ki=new Ie("#8c2f2c"),$t=(cn,dn)=>{const sa=le[nt].x+(le[lt].x-le[nt].x)*cn,aa=le[nt].y+(le[lt].y-le[nt].y)*cn,Wa=Ne[nt]+(Ne[lt]-Ne[nt])*cn,ho=le[Ai].x+(le[Lt].x-le[Ai].x)*cn,uo=le[Ai].y+(le[Lt].y-le[Ai].y)*cn,O=Ne[Ai]+(Ne[Lt]-Ne[Ai])*cn;return[sa+(ho-sa)*dn,Wa+(O-Wa)*dn+.07,aa+(uo-aa)*dn]};for(const[cn,dn]of[[.43,.475],[.525,.57]])z($t(cn,0),$t(dn,0),$t(dn,1),Ki),z($t(cn,0),$t(dn,1),$t(cn,1),Ki),z($t(cn,0),$t(dn,1),$t(dn,0),Ki),z($t(cn,0),$t(cn,1),$t(dn,1),Ki)}}if(pe.y<6.4||Ne.some(Je=>Math.abs(Je-re)>.3)){const Je=Math.max(.42,Math.min(pe.t,2.6));for(const _t of Cn.triangulateShape(le,[])){const[nt,lt,Lt]=_t;z([le[nt].x,Ne[nt],le[nt].y],[le[Lt].x,Ne[Lt],le[Lt].y],[le[lt].x,Ne[lt],le[lt].y],E),z([le[nt].x,Ne[nt]-Je,le[nt].y],[le[lt].x,Ne[lt]-Je,le[lt].y],[le[Lt].x,Ne[Lt]-Je,le[Lt].y],Q)}for(let _t=0;_t<le.length;_t++){const nt=(_t+1)%le.length,lt=le[_t],Lt=le[nt];z([lt.x,Ne[_t]-Je,lt.y],[Lt.x,Ne[nt]-Je,Lt.y],[Lt.x,Ne[nt],Lt.y],U),z([lt.x,Ne[_t]-Je,lt.y],[Lt.x,Ne[nt],Lt.y],[lt.x,Ne[_t],lt.y],U)}continue}}const Se=Ee&&pe.t>=2.2&&pe.y>=5,Pe=new Ie("#2f2b28"),Le=(Ne,ct,Mt,it,Xt)=>{for(const Je of Cn.triangulateShape(le,[])){const[_t,nt,lt]=Je.map(Lt=>le[Lt]);z([_t.x,ct,_t.y],[lt.x,ct,lt.y],[nt.x,ct,nt.y],Mt),z([_t.x,Ne,_t.y],[nt.x,Ne,nt.y],[lt.x,Ne,lt.y],it)}for(let Je=0;Je<le.length;Je++){const _t=le[Je],nt=le[(Je+1)%le.length];z([_t.x,Ne,_t.y],[nt.x,Ne,nt.y],[nt.x,ct,nt.y],Xt),z([_t.x,Ne,_t.y],[nt.x,ct,nt.y],[_t.x,ct,_t.y],Xt)}};Se?(Le(re-.55,re,E,Q,U),Le(we,we+.5,new Ie("#8a8378"),Q,U),Le(we+.5,re-.55,Pe,Pe,Pe)):Le(we,re,E,Q,U)}const T=new xt;T.setAttribute("position",new tt(S,3)),T.setAttribute("color",new tt(F,3)),T.computeVertexNormals();const D=new st(T,new Ke({vertexColors:!0}));D.castShadow=D.receiveShadow=rt>=2,D.renderOrder=-1e3,Ge.add(D);const L={pier:"#b3aa9d",tower:"#ecebe8",cable:"#d9dadc",canopy:"#cfd3d6"},w=new Dt(1,1,1),H=new He,X=new St,ue=new Vn,ve=new Z,ie=new Z;for(const Ae of Object.keys(L)){const pe=g.boxes.filter(le=>le[7]===Ae&&!(Ae==="pier"&&Qe(le[0],le[2])>.3));if(!pe.length)continue;const Me=new Rt(w,new Ke({color:L[Ae]}),pe.length);pe.forEach((le,Te)=>{const[Be,De,re,we,Ee,Se,Pe]=le,Le=Ae==="cable";ue.set(0,Pe,Le?-le[8]:0,"YZX"),X.setFromEuler(ue);const Ne=Math.max(0,Qe(Be,re));Me.setMatrixAt(Te,H.compose(ve.set(Be,(Le?De:De+Ee/2)+Ne,re),X,ie.set(we,Ee,Se)))}),Me.castShadow=Ae!=="cable"&&rt>=2,Me.receiveShadow=rt>=2,Ge.add(Me)}}catch(g){console.warn("bridges skipped",g)}try{const g=(await(await fetch("./data/churches.json")).json()).churches,S=new He,F=new St,E=new Z,U=new Z,Q=new Z(0,1,0),z=new Ke({color:"#ddd3c2"}),P=new Ke({color:"#8b9097"}),J=new Ke({color:"#9c5a4d"}),k=new Ke({color:"#6f6a68"}),v=(w,H,X,ue)=>{if(!X.length)return;const ve=new Rt(w,H,X.length);X.forEach((ie,Ae)=>{ue(ie),ve.setMatrixAt(Ae,S.compose(E,F,U))}),ve.castShadow=ve.receiveShadow=rt>=2,Ge.add(ve)},b=g.filter(w=>w.k!=="west"),T=g.filter(w=>w.k==="arm"),D=g.filter(w=>w.k==="orth"),L=g.filter(w=>w.k==="west");v(new Qt(1,1,1,10),z,b,w=>{F.identity(),E.set(w.x,Qe(w.x,w.z)+w.y+w.r*.6,w.z),U.set(w.r,w.r*1.2,w.r)}),v(new Rn(1,10,5,0,Math.PI*2,0,Math.PI/2),P,D,w=>{F.identity(),E.set(w.x,Qe(w.x,w.z)+w.y+w.r*1.2,w.z),U.set(w.r*1.05,w.r*.95,w.r*1.05)}),v(new Jn(1,1,10),k,T,w=>{F.identity(),E.set(w.x,Qe(w.x,w.z)+w.y+w.r*1.2+w.r*.6,w.z),U.set(w.r*1.1,w.r*1.2,w.r*1.1)}),v(new Dt(1,1,1),z,L,w=>{F.setFromAxisAngle(Q,w.ry);const H=w.h-w.w*1.1;E.set(w.x,Qe(w.x,w.z)+H/2,w.z),U.set(w.w,H,w.w)}),v(new Jn(Math.SQRT1_2,1,4).rotateY(Math.PI/4),J,L,w=>{F.setFromAxisAngle(Q,w.ry),E.set(w.x,Qe(w.x,w.z)+w.h-w.w*.55,w.z),U.set(w.w*1.08,w.w*1.1,w.w*1.08)})}catch(g){console.warn("church placeholders skipped",g)}try{const g=await(await fetch("./data/walls.json")).json();if(ut?.yedikule&&(g.ytowers=ut.yedikule.rtowers,g.tpolys=g.tpolys.concat(ut.yedikule.ptowers)),ut?.yk16){const D=ut.yk16;g.ytowers=[];const L=(w,H)=>D.hide_tp.some(X=>Math.hypot(X[0]-w,X[1]-H)<.3);g.tpolys=g.tpolys.filter(w=>{let H=0,X=0;const ue=w.p.length/2;for(let ve=0;ve<w.p.length;ve+=2)H+=w.p[ve],X+=w.p[ve+1];return!L(H/ue,X/ue)}),ut.walls_hide=(ut.walls_hide||[]).concat(D.hide)}ut?.walls_clip&&(ut.walls_hide=(ut.walls_hide||[]).concat(ut.walls_clip.hide),g.boxes=g.boxes.concat(ut.walls_clip.add));const S={wall:"#c9b99a",outer:"#c2b293",scarp:"#b3a487",tower:"#bfae8e",otower:"#c7b796"},F=new Dt(1,1,1),E=new He,U=new St,Q=new Z(0,1,0),z=new Z,P=new Z;Jt(g.moat,.115,"#8a9d5a");for(const D of Object.keys(S)){const L=ut?.walls_hide||[],w=g.boxes.filter(ue=>ue[7]===D&&!L.some(ve=>Math.abs(ve[0]-ue[0])<.05&&Math.abs(ve[1]-ue[2])<.05));if(!w.length)continue;const H=[];for(const ue of w){const[ve,ie,Ae,pe,Me,le,Te]=ue,Be=Math.cos(Te),De=-Math.sin(Te);let re=0;for(let Ee=0;Ee<=6;Ee++){const Se=(Ee/6-.5)*pe;re=Math.max(re,Math.abs(Qe(ve+Be*Se,Ae+De*Se)-Qe(ve,Ae)))}const we=Math.min(24,Math.max(1,Math.ceil(re/.6),Math.ceil(pe/40)));for(let Ee=0;Ee<we;Ee++){const Se=((Ee+.5)/we-.5)*pe,Pe=ve+Be*Se,Le=Ae+De*Se,Ne=Qe(Pe-Be*pe/we/2,Le-De*pe/we/2),ct=Qe(Pe+Be*pe/we/2,Le+De*pe/we/2),Mt=Qe(Pe,Le),it=Math.min(Ne,ct,Mt)-2.5;H.push([Pe,it,Le,pe/we+.3,Mt+ie+Me-it,le,Te])}}const X=new Rt(F,rc(new Ke({color:S[D]})),H.length);X.name="aud:wall",H.forEach((ue,ve)=>{const[ie,Ae,pe,Me,le,Te,Be]=ue;U.setFromAxisAngle(Q,Be),X.setMatrixAt(ve,E.compose(z.set(ie,Ae+le/2,pe),U,P.set(Me,le,Te)))}),X.castShadow=X.receiveShadow=rt>=2,Ge.add(X)}const J=new yi,k=new Ie("#bfae8e"),v=new Ie("#e6e0d4");for(const D of g.tpolys){let L=-1e9,w=1e9;for(let H=0;H<D.p.length;H+=2){const X=Qe(D.p[H],D.p[H+1]);L=Math.max(L,X),w=Math.min(w,X)}Gt(J,[[D.p]],w-2.5,L+D.h,D.marble?v:k,(D.marble?v:k).clone().multiplyScalar(.92))}const b=new st(J.geometry(),new Ke({vertexColors:!0,side:It}));b.castShadow=b.receiveShadow=rt>=2,Ge.add(b);const T=new Rt(new Qt(1,1.06,1,12),new Ke({color:"#c6b596"}),g.ytowers.length);g.ytowers.forEach(([D,L,w,H],X)=>{U.identity();let ue=1e9;for(let ie=0;ie<8;ie++)ue=Math.min(ue,Qe(D+Math.cos(ie*.785)*w,L+Math.sin(ie*.785)*w));ue-=1;const ve=Qe(D,L)+H-ue;T.setMatrixAt(X,E.compose(z.set(D,ue+ve/2,L),U,P.set(w,ve,w)))}),T.name="aud:ytower",T.castShadow=T.receiveShadow=rt>=2,Ge.add(T),vt("Kara Surları",-4600,30,1200,"district"),vt("Yedikule",-4700,34,3380)}catch(g){console.warn("walls skipped",g)}try{const g=[],S=new He,F=new St,E=new Z(0,1,0),U=new Z,Q=new Z,z=(ie,Ae,pe,Me,le,Te,Be,De,re=0)=>{const we=ie.index?ie.toNonIndexed():ie.clone();we.deleteAttribute("uv"),we.applyMatrix4(S.compose(U.set(pe,Me,le),F.setFromAxisAngle(E,re),Q.set(Te,Be,De)));const Ee=new Ie(Ae),Se=we.attributes.position.count,Pe=new Float32Array(Se*3);for(let Le=0;Le<Se;Le++)Pe.set([Ee.r,Ee.g,Ee.b],Le*3);we.setAttribute("color",new Bt(Pe,3)),g.push(we)},P=new Dt(1,1,1),J=new Qt(1,1,1,10),k=new Jn(1,1,10),v=new Jn(.71,1,4,1).rotateY(Math.PI/4),b=new Rn(1,12,4,0,Math.PI*2,0,Math.PI/2),T="#d8cdbb",D="#8e939b",L="#b9876a",w="#c9b99a",H=(ie,Ae,pe,Me,le,Te=0,Be=T,De=0)=>z(P,Be,ie,De+le/2,Ae,pe,le,Me,Te),X=(ie,Ae,pe,Me,le,Te=0)=>{const Be=Qe(ie,Ae);H(ie,Ae,pe*2.6,pe*2.6,pe*1.1,Te,T,Be),z(b,D,ie,Be+pe*1.1,Ae,pe,pe*.9,pe);for(let De=0;De<Me;De++){const re=Te+Math.PI/4+De*Math.PI/2,we=ie+Math.cos(re)*pe*1.9,Ee=Ae-Math.sin(re)*pe*1.9;z(J,T,we,Be+le*.44,Ee,1.3,le*.88,1.3),z(k,D,we,Be+le*.94,Ee,1.4,le*.12,1.4)}},ue=await(await fetch("./data/walls.json")).json();for(const[ie,Ae]of[[-3771.2,-862.5],[-4426,205]]){let pe=null,Me=1e9;for(const Se of ue.boxes)if(Se[7]==="wall"){const Pe=Math.hypot(Se[0]-ie,Se[2]-Ae);Pe<Me&&(Me=Pe,pe=Se)}if(!pe||Me>200)continue;const le=pe[6],Te=Math.cos(le),Be=-Math.sin(le),De=(ie-pe[0])*Te+(Ae-pe[2])*Be,re=pe[0]+Te*De,we=pe[2]+Be*De,Ee=Qe(re,we);for(const Se of[-1,1]){const Pe=re+Te*Se*11,Le=we+Be*Se*11;H(Pe,Le,11,13,20,le,w,Qe(Pe,Le)),z(v,"#a89a82",Pe,Qe(Pe,Le)+21.5,Le,11,3,13,le)}H(re,we,11.5,6,4,le,w,Ee+9),H(re,we,11,6.6,1.2,le,L,Ee+8.4)}{const pe=Qe(-3250.4,-1161);H(-3250.4,-1161,28,13,17,.9,"#c4a488",pe),H(-3250.4,-1161,28.4,13.4,.8,.9,L,pe+6),H(-3250.4,-1161,28.4,13.4,.8,.9,L,pe+11.5),vt("Tekfur Sarayı",-3250.4,pe+26,-1161)}{const[ie,Ae]=[3099.2,1736],pe=200,Me=265,le=Qe(ie,Ae);H(ie,Ae-Me/2,pe,24,20,0,T,le),H(ie,Ae+Me/2,pe,24,20,0,T,le),H(ie-pe/2,Ae,24,Me,20,0,T,le),H(ie+pe/2,Ae,24,Me,20,0,T,le);for(const Te of[-1,1])for(const Be of[-1,1])H(ie+Te*pe/2,Ae+Be*Me/2,16,16,30,0,T,Qe(ie+Te*pe/2,Ae+Be*Me/2)),z(v,D,ie+Te*pe/2,Qe(ie+Te*pe/2,Ae+Be*Me/2)+33,Ae+Be*Me/2,16,6,16);vt("Selimiye Kışlası",ie,le+50,Ae)}X(3132.8,1537,10,2,45),X(3107.6,-376,9,2,45),X(3023.6,-143.7,12,2,50);{const[ie,Ae]=[2108.2,265.4],pe=Qe(ie,Ae);z(J,"#c9c0b0",ie,pe+1.3,Ae,15,2.6,13),H(ie-2.2,Ae+1.4,13,9,7.5,.35,T,pe+2.4),z(J,T,ie+3.1,pe+13.2,Ae-1.1,5.1,17,5.1),z(J,"#d8d2c6",ie+3.1,pe+22,Ae-1.1,6.3,.5,6.3),z(J,T,ie+3.1,pe+23.8,Ae-1.1,4.5,3.4,4.5),z(k,D,ie+3.1,pe+28.2,Ae-1.1,5.5,6.4,5.5),z(J,"#c4a35a",ie+3.1,pe+32,Ae-1.1,.12,1.8,.12),vt("Kız Kulesi",ie,pe+42,Ae)}vt("Haydarpaşa Garı",3318,Qe(3318,3030)+52,3030),vt("Dolmabahçe",1812,Qe(1812,-1722)+40,-1722);for(const[ie,Ae,pe]of[["Selimiye Camii",3132.8,1537],["Mihrimah Sultan",3107.6,-376],["Yeni Valide",3023.6,-143.7]])(!Re||ie!=="Yeni Valide")&&vt(ie,Ae,Qe(Ae,pe)+58,pe);const ve=Yr(g);if(g.forEach(ie=>ie.dispose()),ve){ve.computeVertexNormals();const ie=new st(ve,rc(new Ke({vertexColors:!0})));ie.castShadow=ie.receiveShadow=rt>=2,ie.name="wm5ph",Ge.add(ie),window.__wm5ph=ve.attributes.position.count/3}}catch(g){console.warn("wm5 placeholders skipped",g)}if(e)try{const g=N_(e,Qe,Re);Ge.add(g.grp);for(const S of g.detail)Ma.push(S);window.__kc=g.tris,vt("Kapalıçarşı",-900,Qe(-900,1390)+30,1390,"district")}catch(g){console.warn("kapalicarsi skipped",g)}if(rt>=3){let g={};try{g=await(await fetch("./data/landuse.json")).json()}catch{}Jt(g.railway||[],.08,"#857a70"),Jt(g.construction||[],.085,"#a8957e"),Jt(g.religious||[],.09,"#cdbfa8"),Jt(i.parks,.12,qe?qe.parks:"#bcd59a"),Jt(g.cemetery||[],.125,"#7f9469"),Jt(g.pitch||[],.13,"#5f9e4f"),Jt(i.plazas,.14,qe?qe.plazas:"#e8dcc6");try{const F=await(await fetch("./data/taksim_plaza.json")).json();Jt(F.plazas||[],.145,qe?qe.plazas:"#e8dcc6")}catch{}const S=i.roads;Kr=!0,Jt(S.path||[],.16,qe?qe.path:"#f4ecdd"),Jt(S.service||[],.18,qe?qe.service:"#f7f2ea"),Jt(S.minor||[],.2,qe?qe.minor:"#fbf8f2"),Jt(S.major||[],.22,qe?qe.major:"#f2d9a6");try{const F=await(await fetch("./data/wm11_landmarks.json")).json();Jt(F.plazas||[],.225,"#ddd6c8")}catch{}Jt(S.rail||[],.26,qe?qe.rail:"#8d8a86"),Jt(S.tram||[],.28,qe?qe.tram:"#b2473e"),Kr=!1}ba("before_buildings");const ee=i.palette,R=(qe?qe.walls:ee.walls).map(g=>new Ie(g)),B=(qe?qe.roofs:ee.roofs).map(g=>new Ie(g)),A=(qe?qe.flats:ee.flats).map(g=>new Ie(g));let I=0;const N=[],$=[],q=g=>{const S=Math.sin(g*91.17)*43758.5453;return S-Math.floor(S)},ae=(g,S,F,E,U)=>{const[Q,z,P,J,k]=g.hip,v=Math.cos(P),b=Math.sin(P),T=-b,D=v,L=g.p[0][0],w=(X,ue)=>{let ve=!1;for(let ie=0,Ae=L.length-2;ie<L.length;Ae=ie,ie+=2){const pe=L[ie],Me=L[ie+1],le=L[Ae],Te=L[Ae+1];Me>ue!=Te>ue&&X<(le-pe)*(ue-Me)/(Te-Me)+pe&&(ve=!ve)}return ve},H=Re?.08:.18;if(q(S*3.1)<H&&J>6){const X=(q(S*5.3)-.5)*J*.6,ue=(q(S*7.7)<.5?-1:1)*k*.12,ve=Q+v*X+T*ue,ie=z+b*X+D*ue;w(ve,ie)&&N.push([ve,E+U(X,ue),ie,P])}if(!Re&&(F===2||F===3)&&k>7&&J>8&&q(S*11.3)<.16){const X=q(S*13.9)<.5?-1:1,ue=J>16?2:1;for(let ve=0;ve<ue;ve++){const ie=ue===1?0:(ve===0?-.22:.22)*J,Ae=X*(k/2-Math.min(2.4,k*.28)),pe=Q+v*ie+T*Ae,Me=z+b*ie+D*Ae;w(pe,Me)&&$.push([pe,E+U(ie,Ae),Me,P+(X>0?0:Math.PI)])}}},j=["#7d828c","#6f7a80","#8a8a90","#5f6b70"].map(g=>new Ie(g)),K=new Ie("#e6ddcf"),fe=new Ie("#d6ccbb"),ne=[],oe=(g,S,F)=>{let E=!1;for(let U=0,Q=g.length-2;U<g.length;Q=U,U+=2){const z=g[U],P=g[U+1],J=g[Q],k=g[Q+1];P>F!=k>F&&S<(J-z)*(F-P)/(k-P)+z&&(E=!E)}return E},ge=(g,S,F)=>{const E=g.p[0]?.[0];if(!E)return;const U=Math.abs(Kn(E));if(U<60||q(S*15.1)>(Re?.4:.7))return;let Q=0,z=0;for(let b=0;b<E.length;b+=2)Q+=E[b],z+=E[b+1];const P=Q/(E.length/2),J=z/(E.length/2),k=U>300&&!Re?2:1,v=Math.sqrt(U)*.22;for(let b=0;b<k;b++){const T=q(S*3.7+b)*6.283,D=P+Math.cos(T)*v*q(S+b*5.1),L=J+Math.sin(T)*v*q(S*2.9+b);oe(E,D,L)&&ne.push([D,F,L,b===0&&q(S*19.7)<.05?2:q(S*7.3+b)<.55?0:1,T])}},be=new Map,te=(Zt?["#f0e2c4","#ddd6cc","#f3ede0","#e8d3a4","#ecd8bc","#d6cfc4","#efcfb4","#d4dccc","#f0d890","#b8553a","#a84c36"]:["#efe8d8","#dedcd6","#f3f0ea","#e6d8b8","#e9e2d2","#d4d3cf","#ecd9c4","#d6dcd4","#efe0a8","#b5583f","#a9533e"]).map(g=>new Ie(g)),he=["#8c7c6a","#a3907a","#7a6e62","#c4aa82","#d6bd94","#b59b7a","#c86a40","#9a8672"].map(g=>new Ie(g)),ce=[.11,.11,.11,.1,.1,.08,.06,.05,.04,.12,.12],me=new Map,Y=xn.get("lod")==="0"?1e9:Re?1800:2400;for(const g of i.buildings){let S=be.get(g.c);S||(S=new yi,S.tex=!!o,be.set(g.c,S));{let J=me.get(g.c);J||(J=new yi,me.set(g.c,J));const k=g.p[0]?.[0],v=k?Math.abs(Kn(k)):0;if(k&&(v>30||g.h>12)){let b=1e9,T=0,D=0;if(en)for(let ve=0;ve<k.length;ve+=2)b=Math.min(b,Qe(k[ve],k[ve+1])),T+=k[ve],D+=k[ve+1];const L=en?Qe(T/(k.length/2),D/(k.length/2)):0,w=g.m>0?L+g.m:en?b-.5:0,H=R[g.w%R.length],X=g.hip?B[g.r%(B.length-1)]:A[g.r%A.length];let ue=g.p[0];if(g.hip&&k.length>8){const[ve,ie,Ae,pe,Me]=g.hip,le=Math.cos(Ae)*pe/2,Te=Math.sin(Ae)*pe/2,Be=-Math.sin(Ae)*Me/2,De=Math.cos(Ae)*Me/2;ue=[[ve-le-Be,ie-Te-De,ve+le-Be,ie+Te-De,ve+le+Be,ie+Te+De,ve-le+Be,ie-Te+De]],Kn(ue[0])*Kn(k)<0&&(ue[0]=[ue[0][6],ue[0][7],ue[0][4],ue[0][5],ue[0][2],ue[0][3],ue[0][0],ue[0][1]])}else k.length>10&&(ue=[nE(k,Re?3:2)]);Gt(J,[ue],w,L+g.h+(g.hip?1.5:0),H,X)}}let F=0,E=0;if(en&&g.p[0]?.[0]){const J=g.p[0][0];let k=0,v=0,b=0;E=1e9;for(let T=0;T<J.length;T+=2)k+=J[T],v+=J[T+1],b++,E=Math.min(E,Qe(J[T],J[T+1]));F=Qe(k/b,v/b),E-=.5}const U=g.m>0?F+g.m:E,Q=F+g.h;if(rt<2){Gt(S,g.p,U,Q,K,fe);continue}I++;let z=qe?yn(R[(g.w+I)%R.length],I,.7):R[g.w],P=qe?g.k??(g.hip?1:0):g.hip?1:0;if(o){const J=g.p[0]?.[0]||[0,0];let k=0,v=0;for(let ie=0;ie<J.length;ie+=2)k+=J[ie],v+=J[ie+1];const b=k/(J.length/2),T=v/(J.length/2),L=i.origin[1]-T/110574<41.0195,w=Math.hypot(b-_[0],T-_[1])<900,H=P===4||g.h>=19||P===0&&g.h>=12,X=q(I*2.3);S.wl=H?2:L?X<.06&&g.h<12?1:X<.12?4:X<.17?5:0:X<.45?3:X<.6?5:0,S.rl=g.g?7:6,S.base=U,S.wh=Q-U,S.seed=Math.floor(q(I*1.7)*997)/10;const ue=Math.hypot(b-p[0],T-p[1])<750,ve=!w&&g.h>=11&&S.wl!==4&&S.wl!==5;if(S.st=(ve?8:0)+(ve&&q(I*4.1)<.55?1:0)+(ve&&q(I*5.9)<.3?2:0)+(g.h>=6&&q(I*6.7)<(ve?.6:L?.3:.5)?4:0),ve){let ie=q(I*8.3),Ae=0;for(;Ae<te.length-1&&ie>ce[Ae];)ie-=ce[Ae],Ae++;z=yn(te[Ae],I,.5),(Zt?g.h>=18&&!L&&!ue&&P!==0&&q(I*9.7)<.7:g.h>=14&&P!==0&&q(I*9.7)<.7)&&(P=4,S.rl=2)}if(Zt&&!L&&!H&&P>=1&&P<=5){const ie=q(I*17.3);ie<.12?(g.g=1,S.rl=7):(g.g=0,S.rl=6,ie<.32&&(P=4,S.rl=2))}if(Zt&&ue&&!H){const ie=q(I*10.9);z=yn(he[Math.floor(q(I*11.3)*he.length)],I,.5),ie<.55&&(S.wl=q(I*13.1)<.6?3:4)}}if(g.col&&(z=new Ie(g.col),o&&(S.wl=0,S.st=0,S.rl=2)),g.hip&&P>=1&&P<=3){let J=qe?yn(B[(g.r+(I%3===0?1:0))%(B.length-1)],I+7):B[g.r%B.length];if(Zt&&!g.g&&(J=yn(B[(g.r+I)%(B.length-1)],I+7,1.4),q(I*12.7)<.14&&J.lerp(new Ie("#9a8a80"),.3)),qe&&g.g&&(J=yn(j[I%j.length],I+11,.6)),qe&&Xc){Gt(S,g.p,U,Q,z,null);const k=P===3&&!g.g?yn(j[(I>>2)%j.length],I+5,.6):J,v=$_(S,g.p,g.hip,P,Q,k,P===3?J.clone().multiplyScalar(.9):J,z,g.g?-1:7);ae(g,I,P,Q,v)}else Gt(S,g.p,U,Q,z,A[0]),P===2?X_(S,g.hip,Q,J,z):P===3?K_(S,g.hip,Q,qe&&!g.g?yn(j[(I>>2)%j.length],I+5,.6):J,J.clone().multiplyScalar(.9)):Ff(S,g.hip,Q,J)}else if(qe&&Xc&&P===5&&g.bd&&g.in){Gt(S,g.p,U,Q,z,null);const J=g.g?yn(j[I%j.length],I+11,.6):yn(B[g.r%(B.length-1)],I+7);eE(S,g.bd,g.in,Q,g.rh||2,J,yn(A[g.r%A.length],I+3))}else if(qe&&P===4){Gt(S,g.p,U,Q+.9,z,null),S.rl=2;for(const J of g.p)Ws(S,J,Q,yn(A[g.r%A.length],I+3));Zt&&ge(g,I,Q)}else S.rl=2,Zt&&g.h>=9&&ge(g,I,Q),Gt(S,g.p,U,Q,z,qe?yn(A[g.r%A.length],I+3):A[g.r%A.length])}const se=new Ke({vertexColors:!0,side:qe?It:ni}),de=new Ke({vertexColors:!0,side:qe?It:ni});if(N.length||$.length){const g=new He,S=new St,F=new Z(1,1,1),E=new Z(0,1,0),U=new Z,Q=new Dt(.8,2.2,.8).translate(0,.6,0),z=new Rt(Q,new Ke({color:"#b98068"}),N.length);N.forEach((H,X)=>{S.setFromAxisAngle(E,-H[3]),g.compose(U.set(H[0],H[1],H[2]),S,F),z.setMatrixAt(X,g)}),z.castShadow=z.receiveShadow=!0,z.computeBoundingSphere(),Ge.add(z),Ma.push(z);const P=new Dt(1.7,1.6,2).translate(0,.5,.3),J=new xt,k=1.05,v=1.3,b=2.1,T=-.8,D=1.45;J.setAttribute("position",new tt([-k,v,T,-k,v,D,0,b,D,-k,v,T,0,b,D,0,b,T,k,v,D,k,v,T,0,b,T,k,v,D,0,b,T,0,b,D,-k,v,D,k,v,D,0,b,D].map(H=>H),3)),J.computeVertexNormals();const L=new Rt(P,new Ke({color:"#efe1bd"}),$.length),w=new Rt(J,new Ke({color:"#c8703c",side:It}),$.length);$.forEach((H,X)=>{S.setFromAxisAngle(E,-H[3]),g.compose(U.set(H[0],H[1]-.4,H[2]),S,F),L.setMatrixAt(X,g),w.setMatrixAt(X,g)});for(const H of[L,w])H.castShadow=H.receiveShadow=!0,H.computeBoundingSphere(),Ge.add(H),Ma.push(H);window.__bits={chimneys:N.length,dormers:$.length}}if(ne.length){const g=new He,S=new St,F=new Z(1,1,1),E=new Z(0,1,0),U=new Z,Q=[new Dt(1.7,1.4,1.7).translate(0,.7,0),new Dt(2.6,2.3,2.2).translate(0,1.15,0),new Rn(2.6,12,5,0,Math.PI*2,0,Math.PI/2)],z=["#a9a8a6","#cfc4b4","#8794a4"];for(let P=0;P<3;P++){const J=ne.filter(v=>v[3]===P);if(!J.length)continue;const k=new Rt(Q[P],new Ke({color:z[P]}),J.length);J.forEach((v,b)=>{S.setFromAxisAngle(E,v[4]),g.compose(U.set(v[0],v[1],v[2]),S,F),k.setMatrixAt(b,g)}),k.castShadow=k.receiveShadow=!0,k.computeBoundingSphere(),Ge.add(k),Ma.push(k)}window.__boxes=ne.length}for(const[g,S]of be){const F=S.geometry();F.computeBoundingSphere();const E=F.boundingSphere.center.clone(),U=new st(F,o?o.mat:de);U.castShadow=U.receiveShadow=rt>=2;const Q=me.get(g);if(!Q||!Q.pos.length||Y>1e8){Ge.add(U);continue}F.translate(-E.x,-E.y,-E.z);const z=Q.geometry(),P=mu(E.x,E.z,c,l);P.bld.push(z.clone()),z.translate(-E.x,-E.y,-E.z);const J=new st(z,se);J.receiveShadow=rt>=2;const k=new Vr;k.position.copy(E),k.addLevel(U,0),k.addLevel(J,Y),Ge.add(k),P.members.push(k)}kf=Y;for(const g of za.values())if(g.bld.length>1){const S=Yr(g.bld);if(g.bld.forEach(E=>E.dispose()),g.bld=[],!S)continue;S.computeBoundingSphere(),g.c.copy(S.boundingSphere.center),g.r=S.boundingSphere.radius;const F=new st(S,se);F.receiveShadow=rt>=2,F.visible=!1,Ge.add(F),g.merged.push(F)}else g.merged=[];if(window.__lod={far:Y,chunks:be.size},ba("before_trees"),rt>=4&&Zt&&xn.get("xtrees")!=="0"){const g=[],S=i.trees.slice();for(let v=0;v<S.length;v++){const b=S[v];if(b[2]*=1.15+.4*q(v*1.3),b[4]===2){b.length=4;continue}if(q(v*2.1)<.6){const T=q(v*3.3)*6.283,D=4+3*q(v*4.7);g.push([b[0]+Math.cos(T)*D,b[1]+Math.sin(T)*D,.9+.5*q(v*5.9),(b[3]+1+v)%9])}}const F=new Map,E=40,U=(v,b)=>Math.floor(v/E)*100003+Math.floor(b/E);for(const v of i.buildings){const b=v.p[0]?.[0];if(!b)continue;let T=1e9,D=-1e9,L=1e9,w=-1e9;for(let H=0;H<b.length;H+=2)T=Math.min(T,b[H]),D=Math.max(D,b[H]),L=Math.min(L,b[H+1]),w=Math.max(w,b[H+1]);for(let H=Math.floor(T/E);H<=Math.floor(D/E);H++)for(let X=Math.floor(L/E);X<=Math.floor(w/E);X++){const ue=H*100003+X;(F.get(ue)||F.set(ue,[]).get(ue)).push(b)}}const Q=(v,b,T)=>{for(const[D,L]of[[0,0],[T,0],[-T,0],[0,T],[0,-T]])for(const w of F.get(U(v+D,b+L))||[])if(oe(w,v+D,b+L))return!0;return!1};let z=0;for(const v of i.buildings)for(const b of v.p)for(let T=1;T<b.length;T++){const D=b[T],L=Math.abs(Kn(D));if(L<80)continue;let w=0,H=0;for(let Ae=0;Ae<D.length;Ae+=2)w+=D[Ae],H+=D[Ae+1];const X=w/(D.length/2),ue=H/(D.length/2),ve=Math.min(4,1+Math.floor(L/250)),ie=Math.sqrt(L)*.25;for(let Ae=0;Ae<ve;Ae++){z++;const pe=q(z*1.9)*6.283,Me=X+Math.cos(pe)*ie*(Ae?1:0),le=ue+Math.sin(pe)*ie*(Ae?1:0);oe(D,Me,le)&&g.push([Me,le,.85+.35*q(z),z%9])}}const P=i.water.map(v=>{const b=v[0];let T=1e9,D=1e9,L=-1e9,w=-1e9;for(let H=0;H<b.length;H+=2)T=Math.min(T,b[H]),L=Math.max(L,b[H]),D=Math.min(D,b[H+1]),w=Math.max(w,b[H+1]);return[T,D,L,w]}),J=(v,b)=>i.water.some((T,D)=>{const L=P[D];if(v<L[0]||v>L[2]||b<L[1]||b>L[3])return!1;let w=!1;for(const H of T)for(let X=0,ue=H.length-2;X<H.length;ue=X,X+=2)H[X+1]>b!=H[ue+1]>b&&v<(H[ue]-H[X])*(b-H[X+1])/(H[ue+1]-H[X+1])+H[X]&&(w=!w);return w});let k=0;for(const[v,b]of[["major",13],["minor",17]])for(const T of i.roads[v]||[]){const D=T[0],L=Kn(D)>0?1:-1;for(let w=0;w<D.length;w+=2){const H=(w+2)%D.length,X=D[H]-D[w],ue=D[H+1]-D[w+1],ve=Math.hypot(X,ue);if(ve<4)continue;const ie=ue/ve*L,Ae=-X/ve*L;for(let pe=b*.5;pe<ve;pe+=b){if(k++,q(k*1.7)>.65)continue;const Me=D[w]+X*(pe/ve)+ie*2.6,le=D[w+1]+ue*(pe/ve)+Ae*2.6;!Q(Me,le,2.5)&&!J(Me,le)&&g.push([Me,le,.75+.35*q(k*2.3),k%9])}}}i.trees=S.concat(g.filter((v,b)=>b%2===0).map(v=>[v[0],v[1],v[2],v[3],1])),window.__trees=i.trees.length}e&&(i.trees=i.trees.filter(g=>!t(g[0],g[1])));{const g=window.__dolmaRings;if(g){const S=i.trees.length,F=(P,J,k)=>{let v=!1;for(let b=0,T=P.length-2;b<P.length;T=b,b+=2)P[b+1]>k!=P[T+1]>k&&J<(P[T]-P[b])*(k-P[b+1])/(P[T+1]-P[b+1])+P[b]&&(v=!v);return v},E=Math.sin(.55),U=Math.cos(.55),Q=[];for(const P of g)for(let J=0;J<P.length;J+=2)Q.push([P[J]*U-P[J+1]*E,P[J]*E+P[J+1]*U]);const z=(P,J)=>{const k=P*U-J*E,v=P*E+J*U;let b=-1e9;for(const T of Q)Math.abs(T[0]-k)<30&&(b=Math.max(b,T[1]));return b>-1e9&&v>b-2};i.trees=i.trees.filter(P=>!($c(P[0],P[1])&&(P[4]===1||z(P[0],P[1])))&&!g.some(J=>F(J,P[0],P[1]))),window.__dolmaTrees=S-i.trees.length}}{const g=new Map,S=40,F=(v,b)=>Math.floor(v/S)*100003+Math.floor(b/S);for(const v of i.buildings){const b=v.p[0]?.[0];if(!b)continue;let T=1e9,D=-1e9,L=1e9,w=-1e9;for(let H=0;H<b.length;H+=2)T=Math.min(T,b[H]),D=Math.max(D,b[H]),L=Math.min(L,b[H+1]),w=Math.max(w,b[H+1]);for(let H=Math.floor(T/S);H<=Math.floor(D/S);H++)for(let X=Math.floor(L/S);X<=Math.floor(w/S);X++){const ue=H*100003+X;(g.get(ue)||g.set(ue,[]).get(ue)).push(b)}}const E=(v,b,T)=>{let D=!1;for(let L=0,w=v.length-2;L<v.length;w=L,L+=2)v[L+1]>T!=v[w+1]>T&&b<(v[w]-v[L])*(T-v[L+1])/(v[w+1]-v[L+1])+v[L]&&(D=!D);return D},U=(v,b)=>{for(const T of g.get(F(v,b))||[])if(E(T,v,b))return!0;return!1},Q=i.water.map(v=>{const b=v[0];let T=1e9,D=1e9,L=-1e9,w=-1e9;for(let H=0;H<b.length;H+=2)T=Math.min(T,b[H]),L=Math.max(L,b[H]),D=Math.min(D,b[H+1]),w=Math.max(w,b[H+1]);return[T,D,L,w,v]}),z=(v,b)=>Q.some(T=>{if(v<T[0]||v>T[2]||b<T[1]||b>T[3])return!1;let D=!1;for(const L of T[4])for(let w=0,H=L.length-2;w<L.length;H=w,w+=2)L[w+1]>b!=L[H+1]>b&&v<(L[H]-L[w])*(b-L[w+1])/(L[H+1]-L[w+1])+L[w]&&(D=!D);return D});let P=[];try{P=((await(await fetch("./data/landuse.json")).json()).pitch||[]).map(b=>b[0])}catch{}const J=(v,b)=>P.some(T=>E(T,v,b)),k=i.trees.length;i.trees=i.trees.filter(v=>!U(v[0],v[1])&&!z(v[0],v[1])&&!J(v[0],v[1]));try{const v=await(await fetch("./data/wm11b.json")).json(),b=v.no_tree||[],T=i.trees.length;i.trees=i.trees.filter(D=>!b.some(L=>E(L,D[0],D[1])));for(const D of v.garden_trees||[])!U(D[0],D[1])&&!b.some(L=>E(L,D[0],D[1]))&&i.trees.push([D[0],D[1],D[2],D[3],2]);window.__wm11bTreeDrop=T-(i.trees.length-(v.garden_trees||[]).length)}catch{}window.__treeFootprintFiltered=k-i.trees.length,window.__trees=i.trees.length}if(rt>=4&&i.trees.length){const g=new Qt(.3,.42,3.2,5).translate(0,1.6,0),S=new ro(3.3,0).translate(0,4.2,0),F=new qr(3.6,0).translate(0,4.2,0),E=new Ke({color:"#7a5a3c"}),U=new Ke({flatShading:!0}),Q=(qe?qe.trees:["#d9822b","#e6ad3c","#b8532c","#8f9d3e","#c96f2d"]).map(D=>new Ie(D)),z=new Map;for(const D of i.trees){const L=Math.floor((D[0]-c)/500)+1e3*Math.floor((D[1]-l)/500)+(D[4]===1?1e7:0);(z.get(L)||z.set(L,[]).get(L)).push(D)}const P=new He,J=new St,k=new Z,v=new Z,b=new Z(0,1,0);let T=0;for(const D of z.values()){const L=!!D[0][4];L&&D.sort((Me,le)=>q(Me[0]*.37+Me[1]*.71)-q(le[0]*.37+le[1]*.71));const w=new Rt(g,E,D.length),H=new Rt(S,U,D.length);let X=0,ue=0;for(const Me of D)X+=Me[0],ue+=Me[1];X/=D.length,ue/=D.length;const ve=new Rt(F,U,Math.ceil(D.length/2));let ie=0;D.forEach((Me,le)=>{T++;const Te=Me[2];v.set(Me[0]-X,Qe(Me[0],Me[1]),Me[1]-ue),J.setFromAxisAngle(b,T*2.39996%6.283),k.set(Te,Te*(.9+T%5*.06),Te),P.compose(v,J,k);const Be=qe?yn(Q[(Me[3]+T)%Q.length],T,.8):Q[Me[3]%Q.length];w.setMatrixAt(le,P),H.setMatrixAt(le,P),H.setColorAt(le,Be),le%2===0&&(ve.setMatrixAt(ie,P),ve.setColorAt(ie,Be),ie++)}),w.computeBoundingSphere(),H.computeBoundingSphere(),ve.computeBoundingSphere(),H.castShadow=!L,H.receiveShadow=!0,w.castShadow=!1,ve.receiveShadow=!0,L&&Of.push([w,H,D.length]);const Ae=new Dn;Ae.add(w,H);const pe=new Vr;pe.position.set(X,0,ue),pe.addLevel(Ae,0),pe.addLevel(ve,Y*.8),Ge.add(pe);{const Me=mu(X,ue,c,l);Me.members.push(pe);const le=new He,Te=new He().makeTranslation(X,0,ue),Be=new Ie;for(let De=0;De<ie;De+=Re?2:1)ve.getMatrixAt(De,le),ve.getColorAt(De,Be),Me.trees.push({m:Te.clone().multiply(le),c:Be.clone()})}}}for(const g of za.values())if(g.trees.length&&g.members.length>1){const S=new Rt(new qr(3.6,0).translate(0,4.2,0),new Ke({flatShading:!0}),g.trees.length);g.trees.forEach((F,E)=>{S.setMatrixAt(E,F.m),S.setColorAt(E,F.c)}),S.computeBoundingSphere(),S.receiveShadow=!0,S.visible=!1,Ge.add(S),g.merged.push(S),g.r||(g.c.copy(S.boundingSphere.center),g.r=S.boundingSphere.radius),g.trees=[]}if(ba("before_landmarks"),rt>=6){for(const g of i.landmarks){g.id==="suleymaniye"&&(g.prims=[]);const S=new yi;S.tex=!!o,g.prims.forEach((E,U)=>{if(S.seed=q(U*3.1+g.label[0])*100,E.t==="lathe"){Y_(S,E);return}const Q=new Ie(E.col);if(S.wl=E.tx??8,S.rl=E.t==="pave"?10:E.tx??8,S.base=E.z0,S.ridge=0,E.t==="prism")S.wh=E.z1-E.z0,S.st=E.st||128,Gt(S,E.p,E.z0,E.z1,Q,Q.clone().multiplyScalar(.95));else if(E.t==="pave")for(const z of E.p)Ws(S,z,E.z0,Q);else E.t==="lowroof"&&(S.rl=9,S.wh=.8,S.st=128,Gt(S,E.p,E.z0,E.z0+.8,qe?Q.set("#7b8a9c"):Q,Q))});const F=Qe(g.label[0],g.label[1]);if(g.prims.length){const E=new st(S.geometry().translate(0,F,0),o?o.mat:se);E.castShadow=E.receiveShadow=!0,Ge.add(E)}if(g.model&&g.id==="ayasofya"){const E=await w_({base:"./",project:x,groundY:Qe,lodDistance:900*(Ft?1/rs:1)});Ge.add(E.object),window.__aya={lodTriangles:E.triangles,at:[Math.round(E.object.position.x*10)/10,Math.round(E.object.position.z*10)/10]}}if(g.model&&g.id==="sultanahmet"){const E=await T_({base:"./",project:x,groundY:Qe,lodDistance:800*(Ft?1/rs:1)});Ge.add(E.object),window.__lm={...window.__lm||{},sultanahmet:{lodTriangles:E.triangles,at:[Math.round(E.object.position.x*10)/10,Math.round(E.object.position.z*10)/10]}}}if(g.model&&(g.id==="yenicami"||g.id==="rustempasa"||g.id==="galata"||g.id==="nusretiye"||g.id==="ayatriada"||g.id==="stantoine")){const U=await(["nusretiye","ayatriada","stantoine"].includes(g.id)?Q=>F_(g.id,Q):g.id==="yenicami"?B_:g.id==="galata"?L_:R_)({base:"./",project:x,groundY:Qe,lodDistance:700*(Ft?1/rs:1)});Ge.add(U.object),window.__lm={...window.__lm||{},[g.id]:{lodTriangles:U.triangles,at:[Math.round(U.object.position.x*10)/10,Math.round(U.object.position.z*10)/10]}}}if(g.model&&g.id==="topkapi"){const E=await I_({base:"./",project:x,groundY:Qe,lodDistance:700*(Ft?1/rs:1)});if(en){E.object.updateMatrixWorld(!0);const U=E.object.position.y,Q=new Z,z=new Set;E.object.traverse(P=>{if(!P.isMesh||z.has(P.geometry))return;z.add(P.geometry);const J=P.geometry,k=J.attributes.position,v=new Z().setFromMatrixScale(P.matrixWorld).y||1,b=new Float32Array(k.count*3);for(let T=0;T<k.count;T++){Q.fromBufferAttribute(k,T);const D=Q.x,L=Q.y,w=Q.z;Q.applyMatrix4(P.matrixWorld),b[T*3]=D,b[T*3+1]=L+((Zc(Q.x,Q.z)?hs:Qe(Q.x,Q.z))-U)/v,b[T*3+2]=w}J.setAttribute("position",new Bt(b,3)),J.computeBoundingBox(),J.computeBoundingSphere()})}if(en){const U=zi,Q=[];for(let k=0,v=U.length-2;k<U.length;v=k,k+=2){const b=U[v],T=U[v+1],D=U[k],L=U[k+1],w=Math.hypot(D-b,L-T),H=Math.max(1,Math.round(w/6));let X=(L-T)/w,ue=-(D-b)/w;const ve=(b+D)/2,ie=(T+L)/2;Zc(ve+X*3,ie+ue*3)&&(X=-X,ue=-ue);for(let Ae=0;Ae<H;Ae++){const pe=(Ae+.5)/H,Me=b+(D-b)*pe+X*1.4,le=T+(L-T)*pe+ue*1.4,Te=Math.min(Qe(Me+X*2,le+ue*2),Qe(Me,le),cs(Me-(D-b)/H*.5,le-(L-T)/H*.5),cs(Me+(D-b)/H*.5,le+(L-T)/H*.5));hs-Te<1||Q.push([Me,le,w/H+.6,Te-2.5,hs+1.2,Math.atan2(-(L-T),D-b)])}}const z=new Rt(new Dt(1,1,1),new Ke({color:"#cbbda2"}),Q.length);z.name="aud:wall";const P=new He,J=new St;Q.forEach((k,v)=>{J.setFromAxisAngle(new Z(0,1,0),k[5]),P.compose(new Z(k[0],(k[3]+k[4])/2,k[1]),J,new Z(k[2],k[4]-k[3],2.8)),z.setMatrixAt(v,P)}),z.castShadow=z.receiveShadow=!0,Ge.add(z),window.__tkWalls={n:Q.length,maxH:Math.round(Math.max(0,...Q.map(k=>hs-k[3]-2.5)))}}if(en){const U=Gi,Q=[];for(let z=0,P=U.length-2;z<U.length;P=z,z+=2){const J=U[P],k=U[P+1],v=U[z],b=U[z+1],T=Math.hypot(v-J,b-k)||1,D=Math.max(1,Math.round(T/8));let L=(b-k)/T,w=-(v-J)/T;const H=(J+v)/2,X=(k+b)/2;$c(H+L*3,X+w*3)&&(L=-L,w=-w);for(let ue=0;ue<D;ue++){const ve=(ue+.5)/D,ie=J+(v-J)*ve,Ae=k+(b-k)*ve,pe=cs(ie+L*6,Ae+w*6);pe-zn>2?Q.push([ie,Ae,T/D+.5,zn-2.5,pe+.6,Math.atan2(-(b-k),v-J)]):zn-pe>1&&Q.push([ie,Ae,T/D+.5,zn-2.5,zn+1.1,Math.atan2(-(b-k),v-J)])}}if(Q.length){const z=new Rt(new Dt(1,1,1),new Ke({color:"#d8d2c4"}),Q.length);z.name="aud:wall";const P=new He,J=new St;Q.forEach((k,v)=>{J.setFromAxisAngle(new Z(0,1,0),k[5]),P.compose(new Z(k[0],(k[3]+k[4])/2,k[1]),J,new Z(k[2],Math.max(1.2,k[4]-k[3]),1.8)),z.setMatrixAt(v,P)}),z.castShadow=z.receiveShadow=!0,Ge.add(z),window.__dhWalls={n:Q.length}}}try{const U=window.__dolmaDome;if(U&&U.length){const Q=new yi,z=new Ie("#7a858f");for(const J of U){const k=zn+J.y0,v=zn+J.y1,b=14;for(let T=0;T<b;T++){const D=T/b*Math.PI*2,L=(T+1)/b*Math.PI*2,w=J.x+Math.cos(D)*J.r,H=J.z+Math.sin(D)*J.r,X=J.x+Math.cos(L)*J.r,ue=J.z+Math.sin(L)*J.r;Q.tri([w,k,H],[X,v,ue],[X,k,ue],z),Q.tri([w,k,H],[w,v,H],[X,v,ue],z),Q.tri([w,v,H],[J.x,v+(v-k)*.15,J.z],[X,v,ue],z)}}const P=new st(Q.geometry(),new Ke({vertexColors:!0}));P.castShadow=P.receiveShadow=!0,Ge.add(P)}}catch{}Ge.add(E.object),window.__lm={...window.__lm||{},topkapi:{lodTriangles:E.triangles,at:[Math.round(E.object.position.x*10)/10,Math.round(E.object.position.z*10)/10]}}}{const E={ayasofya:2.6,sultanahmet:.9,suleymaniye:3.9,yenicami:3.6,galata:.4,topkapi:.8,nusretiye:.6,ayatriada:2.7,stantoine:4.75};Ue["lm_"+g.id]={t:[g.label[0],g.label[1]],d:g.id==="galata"?240:["nusretiye","ayatriada","stantoine"].includes(g.id)?150:360,pol:1.15,y:g.id==="topkapi"?5:g.id==="galata"?30:["nusretiye","ayatriada","stantoine"].includes(g.id)?12:24,az:E[g.id]??0},g.id==="ayasofya"&&(Ue.hd_apse={t:[117,1675],d:95,pol:.95,y:14,az:.98},Ue.hd_apse_s={t:[117,1675],d:95,pol:.95,y:14,az:1.9},Ue.hd_pilot={t:[95,1662],d:230,pol:.85,y:20,az:2.9}),g.id==="stantoine"&&(Ue.sa_top={t:[-172.4,-977.5],d:215,pol:.02,y:0,az:-1.897},Ue.sa_obl={t:[-155.3,-971.7],d:150,pol:.82,y:8,az:-1.254}),g.id==="topkapi"&&(Ue.tk_wide={t:[395,1245],d:820,pol:.95,y:5,az:.8})}vt(g.name,g.label[0],g.label[2]+F,g.label[1],g.id==="rustempasa"?"w":g.id==="yenicami"?"e":g.id==="ayatriada"?"below":"")}try{const g=await(await fetch("./data/wm11_landmarks.json")).json();if(g.wm15=ut,Ge.add(k_(g,Qe)),window.__wm11=!0,ut){const F=ut.beyazit_tower;F&&vt("Beyazıt Kulesi",F.x,Qe(F.x,F.z)+92,F.z,"near");for(const E of ut.mosques||[])/Beyazıt|Şehzade|Laleli|Kılıç|Mihrimah|Yavuz/.test(E.n)&&vt(E.n.replace(/ (Camii|Cami)$/," Camii"),E.x,Qe(E.x,E.z)+52,E.z,"near");Ue.w15_beyazit={t:[-1170,1400],d:Re?560:460,pol:.95,y:10,az:2.6},Ue.w16_misir={t:[-660,770],d:Re?420:330,pol:.92,y:6,az:3.6},Ue.w15_karakoy={t:[-420,230],d:Re?330:270,pol:1,y:4,az:.9},Ue.w15_yedikule={t:[-4690,3365],d:Re?480:400,pol:.9,y:8,az:-.6},Ue.w15_kabatas={t:[1230,-1110],d:Re?420:340,pol:.95,y:2,az:1.2},Ue.w15_seawall={t:[-1800,2450],d:Re?1500:1200,pol:.85,y:0,az:.2},Ue.w15_sehzade={t:[-1830,1075],d:Re?700:560,pol:.95,y:10,az:2.6},Ue.w15_misir_gate={t:[-655,700],d:Re?160:130,pol:1.05,y:6,az:-.9},Ue.w15_fatih={t:[-2455,415],d:Re?420:340,pol:.95,y:12,az:2.6}}const S=(F,E,U=28)=>Qe(F,E)+U;if(vt("Mısır Çarşısı",g.misir.x,S(g.misir.x,g.misir.z,24),g.misir.z),vt("Nuruosmaniye",g.nuruosmaniye.x,S(g.nuruosmaniye.x,g.nuruosmaniye.z,36),g.nuruosmaniye.z),vt("Fatih Camii",g.fatih.x,S(g.fatih.x,g.fatih.z,40),g.fatih.z),vt("Küçük Ayasofya",g.kucukayasofya.x,S(g.kucukayasofya.x,g.kucukayasofya.z,28),g.kucukayasofya.z),vt("Çırağan Sarayı",3049.3,S(3049.3,-2208,32),-2208),Ue.lm_misir={t:[g.misir.x,g.misir.z],d:Re?280:220,pol:.95,y:12,az:.55},Ue.lm_nuruosmaniye={t:[g.nuruosmaniye.x,g.nuruosmaniye.z],d:Re?280:220,pol:1.05,y:14,az:-.4},Ue.lm_fatih={t:[g.fatih.x,g.fatih.z],d:Re?420:340,pol:.95,y:16,az:-.2},Ue.lm_kucukayasofya={t:[g.kucukayasofya.x,g.kucukayasofya.z],d:Re?220:180,pol:1.05,y:10,az:.8},Ue.lm_ciragan={t:[3049.3,-2208],d:Re?380:300,pol:1.05,y:10,az:2.4},wt){const F=new Dn;F.name="wm14_bjk_lm";const E=new Map,U=v=>{let b=E.get(v);return b||(b=new Ke({color:v}),E.set(v,b)),b},Q=(v,b,T,D,L,w=0)=>{const H=new st(v,U(b));return H.position.set(T,D,L),H.rotation.y=w,H.castShadow=H.receiveShadow=!0,F.add(H),H},z=wt.poi||{},P="#e6dcc8",J="#8496aa";if(z["Barbaros Hayrettin Türbesi"]){const[v,b]=z["Barbaros Hayrettin Türbesi"],T=Qe(v,b);Q(new Qt(4.6,4.6,7,8),P,v,T+3.5,b,Math.PI/8),Q(new Qt(3.9,3.9,1.4,16),P,v,T+7.7,b),Q(new Rn(3.9,14,6,0,Math.PI*2,0,Math.PI/2),J,v,T+8.4,b);const D=v+16,L=b+20,w=Qe(D,L);Q(new Dt(9,1.2,9),"#d9d3c6",D,w+.6,L),Q(new Dt(4.2,6.5,4.2),"#cfc7b6",D,w+4.45,L),Q(new Qt(.75,1,3.8,8),"#4d5a4f",D,w+9.6,L),Q(new Rn(.62,8,6),"#4d5a4f",D,w+11.9,L),vt("Barbaros Türbesi",v,T+18,b,"below near")}for(const[v,b,T]of wt.piers||[]){if(T<500)continue;const D=Math.max(0,Qe(v,b))+1.4;Q(new Dt(22,5.5,12),"#efe7d6",v,D+2.75,b,.62),Q(new Jn(13.5,3.2,4),"#8a8f95",v,D+7.1,b,.62+Math.PI/4).scale.set(1.25,1,.7)}if(z["Yıldız Clock Tower"]){const[v,b]=z["Yıldız Clock Tower"],T=Qe(v,b);Q(new Dt(3.6,15,3.6),"#e9dcc0",v,T+7.5,b),Q(new Dt(4.2,4,4.2),"#f0e6d0",v,T+17,b),Q(new Jn(2.6,4.5,4),"#7d858c",v,T+21.2,b,Math.PI/4)}Ge.add(F);const k=(v,b,T,D="")=>{const L=z[v];L&&vt(b,L[0],Qe(L[0],L[1])+T,L[1],(D+" near").trim())};k("Sinan Paşa Camisi","Sinan Paşa Camii",34),k("Deniz Müzesi","Deniz Müzesi",26,"w"),k("Yıldız Hamidiye Camii","Yıldız Camii",34),k("Yıldız Parkı","Yıldız Parkı",30),k("Ihlamur Kasrı (Merasim Köşkü)","Ihlamur Kasrı",22),k("Abbasağa Camii","Abbasağa",26),k("Beşiktaş Dentur İskelesi","Beşiktaş İskelesi",18,"e"),vt("Beşiktaş Çarşı",2215,Qe(2215,-2190)+30,-2190),vt("Barbaros Bulvarı",2470,Qe(2470,-2520)+26,-2520,"near"),Ue.besiktas={t:[2300,-2100],d:Re?700:560,pol:.95,y:10,az:3.3},Ue.besiktas_iskele={t:[2330,-2e3],d:Re?380:300,pol:1,y:6,az:3.6},Ue.besiktas_barbaros={t:[2480,-2550],d:Re?900:760,pol:.85,y:20,az:3.9},Ue.besiktas_wide={t:[2550,-2350],d:Re?2100:1800,pol:.7,y:0,az:3.5},Ue.besiktas_top={t:[2600,-2370],d:Re?2300:2e3,pol:.02,y:0,az:0}}if(Ue.lm_clock={t:[g.clock.x,g.clock.z],d:Re?160:130,pol:1.15,y:8,az:2.4},Ue.taksim_anit={t:[g.taksim_anit.x,g.taksim_anit.z],d:Re?90:70,pol:1.15,y:4,az:3.4},Ue.kizkulesi={t:[2108.2,265.4],d:Re?220:180,pol:1.05,y:8,az:2.6},Ue.haydarpasa={t:[3328,3030],d:Re?460:380,pol:1,y:12,az:-.9},Ue.misir_sw={t:[g.misir.x,g.misir.z],d:Re?260:200,pol:1.05,y:10,az:-.75},Ue.misir_high={t:[g.misir.x-20,g.misir.z-10],d:Re?340:280,pol:.52,y:8,az:.35},Ue.misir_top={t:[g.misir.x-10,g.misir.z-15],d:Re?280:230,pol:.06,y:0,az:.15},Ue.misir_drone={t:[g.misir.x-15,g.misir.z-20],d:Re?210:170,pol:.88,y:8,az:.12},Ue.misir_ref_top={t:[g.misir.x-18,g.misir.z-20],d:Re?310:255,pol:.045,y:0,az:0},Ue.misir_ref_obl={t:[g.misir.x-12,g.misir.z-8],d:Re?270:220,pol:.7,y:10,az:.42},g.stadium&&(Ue.stad_se={t:[g.stadium.x,g.stadium.z],d:Re?480:420,pol:.7,y:18,az:.85},Ue.stad_nw={t:[g.stadium.x,g.stadium.z],d:Re?460:400,pol:.92,y:22,az:-2.15},Ue.stad_close={t:[g.stadium.x,g.stadium.z],d:Re?250:210,pol:1.05,y:10,az:.35},vt("Beşiktaş Stadyumu",g.stadium.x,S(g.stadium.x,g.stadium.z,38),g.stadium.z)),Ft)for(const F of["lm_misir","lm_nuruosmaniye","lm_fatih","lm_kucukayasofya","lm_ciragan","lm_clock","taksim_anit","kizkulesi","haydarpasa","misir_sw","misir_high","misir_ref_top","misir_ref_obl","stad_se","stad_nw","stad_close"])Ue[F]&&(Ue[F].d/=rs)}catch(g){console.warn("wm11 extras skipped",g)}}if(vt("Taksim",d[0],5+Qe(d[0],d[1]),d[1],"area"),rt>=5){const g=document.getElementById("tod");g.hidden=!1;const S=document.getElementById("hour");Un&&!xn.get("hour")&&(S.value=String(Pf)),xn.get("hour")&&(S.value=String(Math.min(17.5,Math.max(7.5,Number(xn.get("hour"))||14)))),S.min="7.5",S.max="17.5",S.addEventListener("input",()=>Kc(Number(S.value))),Kc(Number(S.value))}document.getElementById("loading").remove();try{const g=await(await fetch("./data/aqueduct.json")).json(),S=g.line,F=13.5,E=[];for(let w=0;w<S.length-1;w++){const[H,X]=S[w],[ue,ve]=S[w+1],ie=Math.hypot(ue-H,ve-X);if(ie>60)continue;const Ae=Math.max(1,Math.round(ie/F));for(let pe=0;pe<Ae;pe++)E.push([H+(ue-H)*pe/Ae,X+(ve-X)*pe/Ae,Math.atan2(-(ve-X),ue-H),ie/Ae])}let U=1e9,Q=-1e9;for(const w of E){const H=Qe(w[0],w[1]);U=Math.min(U,H),Q=Math.max(Q,H)}const z=Math.max(U+g.hmax,Q+4),P=[];for(const[w,H,X,ue]of E){const ve=Qe(w,H);z-9>ve&&P.push([w,H,X,4.2,ve-1,z-9,g.w]),P.push([w,H,X,ue+.05,Math.max(ve-1,z-9.5),z-7.5,g.w+.6]),P.push([w,H,X,3,Math.max(ve-1,z-7.5),z-2,g.w-.4]),P.push([w,H,X,ue+.05,Math.max(ve-1,z-2),z,g.w])}const J=new He,k=new St,v=new Z(0,1,0),b=new Z,T=new Z,D=rc(new Ke({color:"#b9a98c"}));for(const[w,H]of[[P.filter(X=>X[4]<X[5]-6||X[3]===4.2),"aud:wall"],[P.filter(X=>!(X[4]<X[5]-6||X[3]===4.2)),"aqueduct-spans"]]){const X=new Rt(new Dt(1,1,1),D,Math.max(1,w.length));X.name=H,X.count=w.length,w.forEach(([ue,ve,ie,Ae,pe,Me,le],Te)=>X.setMatrixAt(Te,J.compose(b.set(ue,(pe+Me)/2,ve),k.setFromAxisAngle(v,ie),T.set(Ae,Me-pe,le)))),X.castShadow=X.receiveShadow=rt>=2,Ge.add(X)}const L=S[Math.floor(S.length/2)];vt("Bozdoğan Kemeri",L[0],z+12,L[1]),window.__aq={piers:E.length,top:Math.round(z)}}catch(g){console.warn("aqueduct skipped",g)}for(const g of["dikilitas","ormedikilitas","yilanlisutun","almancesmesi"])try{const S=await _s(g,{base:"./",project:x,groundY:Qe,lodDistance:1500});S.object.name="aud:monument",Ge.add(S.object)}catch(S){console.warn("monument skipped",g,S)}vt("Dikilitaş",-302,Qe(-302,1943)+30,1943),vt("Alman Çeşmesi",-260,Qe(-260,1784)+16,1784),Ue.hipodrom={t:[-310,1930],y:8,d:Re?420:330,pol:.85,az:2.2},Ue.sarayburnu={t:[430,1e3],y:20,d:Re?900:700,pol:1,az:.3},Ue.bozdogan={t:[-1900,880],y:25,d:Re?520:420,pol:1.2,az:2.2},Ue.pool={t:[-70,1800],y:30,d:Re?330:260,pol:.95,az:.3},Ue.galata_slope={t:[-420,-150],y:30,d:Re?600:480,pol:1.05,az:.4},Ue.taksim={t:[520,-1500],y:10,d:Re?520:420,pol:.55,az:.2},Ue.dolmabahce={t:[1780,-1740],y:10,d:Re?650:520,pol:.85,az:-.6},Ue.dolma_sea={t:[1800,-1740],y:8,d:Re?700:560,pol:1.15,az:.55},Ue.mid_gumussuyu={t:[1e3,-1600],y:25,d:Re?700:560,pol:.95,az:.5},Ue.suleymaniye_s={t:[-1260,820],y:30,d:Re?600:480,pol:1,az:2.4},ba("ready"),window.__scene=Ge,window.__ready=!0}let Bn=null;const Pr=new lo(Gx),Ur=new lo(Hx);function cE(){if(!G_)return;const i=window.innerWidth,e=window.innerHeight;Bn=new xx(rn),Bn.setPixelRatio(Math.min(window.devicePixelRatio,2)),Bn.setSize(i,e),Bn.addPass(new _x(Ge,ii));const t=new ri(Ge,ii,i,e);t.updateGtaoMaterial({radius:12,distanceExponent:1.4,thickness:6,scale:1.4,samples:12,distanceFallOff:1,screenSpaceRadius:!1}),t.blendIntensity=1,Bn.addPass(t),Bn.addPass(new ea(new Oe(i,e),.1,.5,.95)),Pr.uniforms.h.value=2.2/i,Ur.uniforms.v.value=2.2/e,Pr.uniforms.r.value=Ur.uniforms.r.value=.5,Bn.addPass(Pr),Bn.addPass(Ur),Bn.addPass(new Sx),Bn.addPass(new lo({uniforms:{tDiffuse:{value:null}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`uniform sampler2D tDiffuse; varying vec2 vUv;
      void main(){ vec4 c = texture2D(tDiffuse, vUv); vec3 x = c.rgb;
        float l = dot(x, vec3(0.299, 0.587, 0.114));
        x = mix(vec3(l), x, ${Zt?"1.12":"1.08"});                       // more saturation
        x = (x - 0.5) * ${Zt?"1.1":"1.06"} + 0.5;                       // a little more contrast, no milky lift
        vec2 q = vUv - 0.5; x *= 1.0 - 0.35 * dot(q, q);  // soft vignette like the Warsaw frames
        gl_FragColor = vec4(clamp(x, 0.0, 1.0), c.a); }`}))}cE();const za=new Map;let kf=1e9;const Ma=[],mu=(i,e,t,n)=>{const s=Math.floor((i-t)/1500)+1e3*Math.floor((e-n)/1500);let a=za.get(s);return a||(a={key:s,bld:[],trees:[],members:[],merged:[],c:new Z,r:0},za.set(s,a)),a};function lE(){for(const i of za.values()){if(!i.merged.length)continue;const e=ii.position.distanceTo(i.c)-i.r>kf;for(const t of i.merged)t.visible=e;for(const t of i.members)t.visible=!e}}const Of=[];let gu=-1;function zf(){En.update(),sn.target.position.copy(En.target),sn.position.copy(En.target).addScaledVector(Df,3e3);const i=ii.position.distanceTo(En.target),e=i*rs,t=e>3200?2:e>1800?1:0;if(t!==gu){gu=t;for(const[a,r,o]of Of)a.count=r.count=t===2?Math.ceil(o*.3):t===1?Math.ceil(o*.65):o}const n=gn.clamp(e*.75,250,2600),s=sn.shadow.camera;s.right!==n&&(s.left=-n,s.right=n,s.top=n,s.bottom=-n,s.updateProjectionMatrix()),Un&&Ge.fog instanceof no&&(Zt?(Ge.fog.near=i*.95,Ge.fog.far=i+e*1.3+5e3):Ft?(Ge.fog.near=i*.8,Ge.fog.far=i+e*.6+3500):(Ge.fog.near=i*2.2,Ge.fog.far=i*9+6e3)),lE();{const a=e<3e3;for(const r of Ma)r.visible=a}if(Bn){const a=gn.clamp(2-e/2500,.4,1.6);Pr.uniforms.h.value=a/window.innerWidth,Ur.uniforms.v.value=a/window.innerHeight,Bn.render()}else rn.render(Ge,ii);iE(),window.__frames=(window.__frames||0)+1,requestAnimationFrame(zf)}window.addEventListener("resize",()=>{ii.aspect=window.innerWidth/window.innerHeight,ii.updateProjectionMatrix(),rn.setSize(window.innerWidth,window.innerHeight),Bn?.setSize(window.innerWidth,window.innerHeight)});Object.assign(window,{__setView:Qf,__controls:En,__renderer:rn,__stats:()=>({texMB:window.__texMB,triangles:rn.info.render.triangles,calls:rn.info.render.calls,geometries:rn.info.memory.geometries})});oE().then(()=>requestAnimationFrame(zf));
