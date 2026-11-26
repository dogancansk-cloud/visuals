(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=e(i);fetch(i.href,r)}})();const al="170",Ku=0,Wl=1,Yu=2,Bf=1,Gf=2,oi=3,gi=0,Je=1,ge=2,Ui=0,Ts=1,ic=2,ql=3,jl=4,Ju=5,Ji=100,Zu=101,$u=102,Qu=103,td=104,ed=200,nd=201,id=202,sd=203,sc=204,rc=205,rd=206,ad=207,od=208,cd=209,ld=210,hd=211,fd=212,ud=213,dd=214,ac=0,oc=1,cc=2,Ls=3,lc=4,hc=5,fc=6,uc=7,ol=0,pd=1,md=2,Ni=0,gd=1,bd=2,xd=3,vd=4,_d=5,yd=6,Md=7,Xl="attached",Sd="detached",Hf=300,Is=301,Ds=302,dc=303,pc=304,$a=306,ki=1e3,Pi=1001,ka=1002,Ze=1003,Vf=1004,hr=1005,fn=1006,Aa=1007,fi=1008,bi=1009,Wf=1010,qf=1011,Rr=1012,cl=1013,Fi=1014,zn=1015,Vs=1016,ll=1017,hl=1018,Us=1020,jf=35902,Xf=1021,Kf=1022,vn=1023,Yf=1024,Jf=1025,Es=1026,Ns=1027,Qa=1028,fl=1029,Zf=1030,ul=1031,dl=1033,Ra=33776,Ca=33777,Pa=33778,La=33779,mc=35840,gc=35841,bc=35842,xc=35843,vc=36196,_c=37492,yc=37496,Mc=37808,Sc=37809,wc=37810,Tc=37811,Ec=37812,Ac=37813,Rc=37814,Cc=37815,Pc=37816,Lc=37817,Ic=37818,Dc=37819,Uc=37820,Nc=37821,Ia=36492,kc=36494,Fc=36495,$f=36283,Oc=36284,zc=36285,Bc=36286,Cr=2300,Pr=2301,ho=2302,Kl=2400,Yl=2401,Jl=2402,wd=2500,Td=0,Qf=1,Gc=2,Ed=3200,Ad=3201,to=0,Rd=1,Ci="",Ne="srgb",tn="srgb-linear",eo="linear",ve="srgb",ss=7680,Zl=519,Cd=512,Pd=513,Ld=514,tu=515,Id=516,Dd=517,Ud=518,Nd=519,Hc=35044,ts=35048,$l="300 es",ui=2e3,Fa=2001;class Ws{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,t);t.target=null}}}const Xe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Ql=1234567;const gr=Math.PI/180,ks=180/Math.PI;function Mn(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Xe[s&255]+Xe[s>>8&255]+Xe[s>>16&255]+Xe[s>>24&255]+"-"+Xe[t&255]+Xe[t>>8&255]+"-"+Xe[t>>16&15|64]+Xe[t>>24&255]+"-"+Xe[e&63|128]+Xe[e>>8&255]+"-"+Xe[e>>16&255]+Xe[e>>24&255]+Xe[n&255]+Xe[n>>8&255]+Xe[n>>16&255]+Xe[n>>24&255]).toLowerCase()}function He(s,t,e){return Math.max(t,Math.min(e,s))}function pl(s,t){return(s%t+t)%t}function kd(s,t,e,n,i){return n+(s-t)*(i-n)/(e-t)}function Fd(s,t,e){return s!==t?(e-s)/(t-s):0}function br(s,t,e){return(1-e)*s+e*t}function Od(s,t,e,n){return br(s,t,1-Math.exp(-e*n))}function zd(s,t=1){return t-Math.abs(pl(s,t*2)-t)}function Bd(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function Gd(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function Hd(s,t){return s+Math.floor(Math.random()*(t-s+1))}function Vd(s,t){return s+Math.random()*(t-s)}function Wd(s){return s*(.5-Math.random())}function qd(s){s!==void 0&&(Ql=s);let t=Ql+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function jd(s){return s*gr}function Xd(s){return s*ks}function Kd(s){return(s&s-1)===0&&s!==0}function Yd(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Jd(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Zd(s,t,e,n,i){const r=Math.cos,a=Math.sin,o=r(e/2),c=a(e/2),l=r((t+n)/2),h=a((t+n)/2),f=r((t-n)/2),u=a((t-n)/2),d=r((n-t)/2),g=a((n-t)/2);switch(i){case"XYX":s.set(o*h,c*f,c*u,o*l);break;case"YZY":s.set(c*u,o*h,c*f,o*l);break;case"ZXZ":s.set(c*f,c*u,o*h,o*l);break;case"XZX":s.set(o*h,c*g,c*d,o*l);break;case"YXY":s.set(c*d,o*h,c*g,o*l);break;case"ZYZ":s.set(c*g,c*d,o*h,o*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Fn(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function pe(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const $d={DEG2RAD:gr,RAD2DEG:ks,generateUUID:Mn,clamp:He,euclideanModulo:pl,mapLinear:kd,inverseLerp:Fd,lerp:br,damp:Od,pingpong:zd,smoothstep:Bd,smootherstep:Gd,randInt:Hd,randFloat:Vd,randFloatSpread:Wd,seededRandom:qd,degToRad:jd,radToDeg:Xd,isPowerOfTwo:Kd,ceilPowerOfTwo:Yd,floorPowerOfTwo:Jd,setQuaternionFromProperEuler:Zd,normalize:pe,denormalize:Fn};class ht{constructor(t=0,e=0){ht.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(He(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*i+t.x,this.y=r*i+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Kt{constructor(t,e,n,i,r,a,o,c,l){Kt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,a,o,c,l)}set(t,e,n,i,r,a,o,c,l){const h=this.elements;return h[0]=t,h[1]=i,h[2]=o,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],f=n[7],u=n[2],d=n[5],g=n[8],b=i[0],m=i[3],p=i[6],v=i[1],_=i[4],x=i[7],C=i[2],w=i[5],R=i[8];return r[0]=a*b+o*v+c*C,r[3]=a*m+o*_+c*w,r[6]=a*p+o*x+c*R,r[1]=l*b+h*v+f*C,r[4]=l*m+h*_+f*w,r[7]=l*p+h*x+f*R,r[2]=u*b+d*v+g*C,r[5]=u*m+d*_+g*w,r[8]=u*p+d*x+g*R,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8];return e*a*h-e*o*l-n*r*h+n*o*c+i*r*l-i*a*c}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],f=h*a-o*l,u=o*c-h*r,d=l*r-a*c,g=e*f+n*u+i*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const b=1/g;return t[0]=f*b,t[1]=(i*l-h*n)*b,t[2]=(o*n-i*a)*b,t[3]=u*b,t[4]=(h*e-i*c)*b,t[5]=(i*r-o*e)*b,t[6]=d*b,t[7]=(n*c-l*e)*b,t[8]=(a*e-n*r)*b,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,a,o){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+t,-i*l,i*c,-i*(-l*a+c*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(fo.makeScale(t,e)),this}rotate(t){return this.premultiply(fo.makeRotation(-t)),this}translate(t,e){return this.premultiply(fo.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const fo=new Kt;function eu(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function Lr(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Qd(){const s=Lr("canvas");return s.style.display="block",s}const th={};function fr(s){s in th||(th[s]=!0,console.warn(s))}function tp(s,t,e){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function ep(s){const t=s.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function np(s){const t=s.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const ie={enabled:!0,workingColorSpace:tn,spaces:{},convert:function(s,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===ve&&(s.r=di(s.r),s.g=di(s.g),s.b=di(s.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(s.applyMatrix3(this.spaces[t].toXYZ),s.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===ve&&(s.r=As(s.r),s.g=As(s.g),s.b=As(s.b))),s},fromWorkingColorSpace:function(s,t){return this.convert(s,this.workingColorSpace,t)},toWorkingColorSpace:function(s,t){return this.convert(s,t,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Ci?eo:this.spaces[s].transfer},getLuminanceCoefficients:function(s,t=this.workingColorSpace){return s.fromArray(this.spaces[t].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,t,e){return s.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}};function di(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function As(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}const eh=[.64,.33,.3,.6,.15,.06],nh=[.2126,.7152,.0722],ih=[.3127,.329],sh=new Kt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),rh=new Kt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);ie.define({[tn]:{primaries:eh,whitePoint:ih,transfer:eo,toXYZ:sh,fromXYZ:rh,luminanceCoefficients:nh,workingColorSpaceConfig:{unpackColorSpace:Ne},outputColorSpaceConfig:{drawingBufferColorSpace:Ne}},[Ne]:{primaries:eh,whitePoint:ih,transfer:ve,toXYZ:sh,fromXYZ:rh,luminanceCoefficients:nh,outputColorSpaceConfig:{drawingBufferColorSpace:Ne}}});let rs;class ip{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{rs===void 0&&(rs=Lr("canvas")),rs.width=t.width,rs.height=t.height;const n=rs.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=rs}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Lr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=di(r[a]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(di(e[n]/255)*255):e[n]=di(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let sp=0;class nu{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:sp++}),this.uuid=Mn(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(uo(i[a].image)):r.push(uo(i[a]))}else r=uo(i);n.url=r}return e||(t.images[this.uuid]=n),n}}function uo(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?ip.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let rp=0;class Fe extends Ws{constructor(t=Fe.DEFAULT_IMAGE,e=Fe.DEFAULT_MAPPING,n=Pi,i=Pi,r=fn,a=fi,o=vn,c=bi,l=Fe.DEFAULT_ANISOTROPY,h=Ci){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:rp++}),this.uuid=Mn(),this.name="",this.source=new nu(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new ht(0,0),this.repeat=new ht(1,1),this.center=new ht(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Kt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Hf)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ki:t.x=t.x-Math.floor(t.x);break;case Pi:t.x=t.x<0?0:1;break;case ka:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ki:t.y=t.y-Math.floor(t.y);break;case Pi:t.y=t.y<0?0:1;break;case ka:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Fe.DEFAULT_IMAGE=null;Fe.DEFAULT_MAPPING=Hf;Fe.DEFAULT_ANISOTROPY=1;class le{constructor(t=0,e=0,n=0,i=1){le.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*i+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r;const c=t.elements,l=c[0],h=c[4],f=c[8],u=c[1],d=c[5],g=c[9],b=c[2],m=c[6],p=c[10];if(Math.abs(h-u)<.01&&Math.abs(f-b)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(f+b)<.1&&Math.abs(g+m)<.1&&Math.abs(l+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const _=(l+1)/2,x=(d+1)/2,C=(p+1)/2,w=(h+u)/4,R=(f+b)/4,A=(g+m)/4;return _>x&&_>C?_<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(_),i=w/n,r=R/n):x>C?x<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(x),n=w/i,r=A/i):C<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(C),n=R/r,i=A/r),this.set(n,i,r,e),this}let v=Math.sqrt((m-g)*(m-g)+(f-b)*(f-b)+(u-h)*(u-h));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(f-b)/v,this.z=(u-h)/v,this.w=Math.acos((l+d+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ap extends Ws{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new le(0,0,t,e),this.scissorTest=!1,this.viewport=new le(0,0,t,e);const i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:fn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Fe(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new nu(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class xi extends ap{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class iu extends Fe{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Ze,this.minFilter=Ze,this.wrapR=Pi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class op extends Fe{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Ze,this.minFilter=Ze,this.wrapR=Pi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class We{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,a,o){let c=n[i+0],l=n[i+1],h=n[i+2],f=n[i+3];const u=r[a+0],d=r[a+1],g=r[a+2],b=r[a+3];if(o===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=f;return}if(o===1){t[e+0]=u,t[e+1]=d,t[e+2]=g,t[e+3]=b;return}if(f!==b||c!==u||l!==d||h!==g){let m=1-o;const p=c*u+l*d+h*g+f*b,v=p>=0?1:-1,_=1-p*p;if(_>Number.EPSILON){const C=Math.sqrt(_),w=Math.atan2(C,p*v);m=Math.sin(m*w)/C,o=Math.sin(o*w)/C}const x=o*v;if(c=c*m+u*x,l=l*m+d*x,h=h*m+g*x,f=f*m+b*x,m===1-o){const C=1/Math.sqrt(c*c+l*l+h*h+f*f);c*=C,l*=C,h*=C,f*=C}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,i,r,a){const o=n[i],c=n[i+1],l=n[i+2],h=n[i+3],f=r[a],u=r[a+1],d=r[a+2],g=r[a+3];return t[e]=o*g+h*f+c*d-l*u,t[e+1]=c*g+h*u+l*f-o*d,t[e+2]=l*g+h*d+o*u-c*f,t[e+3]=h*g-o*f-c*u-l*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,r=t._z,a=t._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(i/2),f=o(r/2),u=c(n/2),d=c(i/2),g=c(r/2);switch(a){case"XYZ":this._x=u*h*f+l*d*g,this._y=l*d*f-u*h*g,this._z=l*h*g+u*d*f,this._w=l*h*f-u*d*g;break;case"YXZ":this._x=u*h*f+l*d*g,this._y=l*d*f-u*h*g,this._z=l*h*g-u*d*f,this._w=l*h*f+u*d*g;break;case"ZXY":this._x=u*h*f-l*d*g,this._y=l*d*f+u*h*g,this._z=l*h*g+u*d*f,this._w=l*h*f-u*d*g;break;case"ZYX":this._x=u*h*f-l*d*g,this._y=l*d*f+u*h*g,this._z=l*h*g-u*d*f,this._w=l*h*f+u*d*g;break;case"YZX":this._x=u*h*f+l*d*g,this._y=l*d*f+u*h*g,this._z=l*h*g-u*d*f,this._w=l*h*f-u*d*g;break;case"XZY":this._x=u*h*f-l*d*g,this._y=l*d*f-u*h*g,this._z=l*h*g+u*d*f,this._w=l*h*f+u*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],r=e[8],a=e[1],o=e[5],c=e[9],l=e[2],h=e[6],f=e[10],u=n+o+f;if(u>0){const d=.5/Math.sqrt(u+1);this._w=.25/d,this._x=(h-c)*d,this._y=(r-l)*d,this._z=(a-i)*d}else if(n>o&&n>f){const d=2*Math.sqrt(1+n-o-f);this._w=(h-c)/d,this._x=.25*d,this._y=(i+a)/d,this._z=(r+l)/d}else if(o>f){const d=2*Math.sqrt(1+o-n-f);this._w=(r-l)/d,this._x=(i+a)/d,this._y=.25*d,this._z=(c+h)/d}else{const d=2*Math.sqrt(1+f-n-o);this._w=(a-i)/d,this._x=(r+l)/d,this._y=(c+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(He(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,r=t._z,a=t._w,o=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+a*o+i*l-r*c,this._y=i*h+a*c+r*o-n*l,this._z=r*h+a*l+n*c-i*o,this._w=a*h-n*o-i*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,r=this._z,a=this._w;let o=a*t._w+n*t._x+i*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=i,this._z=r,this;const c=1-o*o;if(c<=Number.EPSILON){const d=1-e;return this._w=d*a+e*this._w,this._x=d*n+e*this._x,this._y=d*i+e*this._y,this._z=d*r+e*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,o),f=Math.sin((1-e)*h)/l,u=Math.sin(e*h)/l;return this._w=a*f+this._w*u,this._x=n*f+this._x*u,this._y=i*f+this._y*u,this._z=r*f+this._z*u,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class P{constructor(t=0,e=0,n=0){P.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(ah.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(ah.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,r=t.x,a=t.y,o=t.z,c=t.w,l=2*(a*i-o*n),h=2*(o*e-r*i),f=2*(r*n-a*e);return this.x=e+c*l+a*f-o*h,this.y=n+c*h+o*l-r*f,this.z=i+c*f+r*h-a*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,r=t.z,a=e.x,o=e.y,c=e.z;return this.x=i*c-r*o,this.y=r*a-n*c,this.z=n*o-i*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return po.copy(this).projectOnVector(t),this.sub(po)}reflect(t){return this.sub(po.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(He(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const po=new P,ah=new We;class vi{constructor(t=new P(1/0,1/0,1/0),e=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Pn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Pn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Pn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Pn):Pn.fromBufferAttribute(r,a),Pn.applyMatrix4(t.matrixWorld),this.expandByPoint(Pn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),qr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),qr.copy(n.boundingBox)),qr.applyMatrix4(t.matrixWorld),this.union(qr)}const i=t.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Pn),Pn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Zs),jr.subVectors(this.max,Zs),as.subVectors(t.a,Zs),os.subVectors(t.b,Zs),cs.subVectors(t.c,Zs),Mi.subVectors(os,as),Si.subVectors(cs,os),zi.subVectors(as,cs);let e=[0,-Mi.z,Mi.y,0,-Si.z,Si.y,0,-zi.z,zi.y,Mi.z,0,-Mi.x,Si.z,0,-Si.x,zi.z,0,-zi.x,-Mi.y,Mi.x,0,-Si.y,Si.x,0,-zi.y,zi.x,0];return!mo(e,as,os,cs,jr)||(e=[1,0,0,0,1,0,0,0,1],!mo(e,as,os,cs,jr))?!1:(Xr.crossVectors(Mi,Si),e=[Xr.x,Xr.y,Xr.z],mo(e,as,os,cs,jr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Pn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Pn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ei[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ei[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ei[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ei[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ei[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ei[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ei[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ei[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ei),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const ei=[new P,new P,new P,new P,new P,new P,new P,new P],Pn=new P,qr=new vi,as=new P,os=new P,cs=new P,Mi=new P,Si=new P,zi=new P,Zs=new P,jr=new P,Xr=new P,Bi=new P;function mo(s,t,e,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){Bi.fromArray(s,r);const o=i.x*Math.abs(Bi.x)+i.y*Math.abs(Bi.y)+i.z*Math.abs(Bi.z),c=t.dot(Bi),l=e.dot(Bi),h=n.dot(Bi);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}const cp=new vi,$s=new P,go=new P;class Yn{constructor(t=new P,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):cp.setFromPoints(t).getCenter(n);let i=0;for(let r=0,a=t.length;r<a;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;$s.subVectors(t,this.center);const e=$s.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector($s,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(go.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint($s.copy(t.center).add(go)),this.expandByPoint($s.copy(t.center).sub(go))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ni=new P,bo=new P,Kr=new P,wi=new P,xo=new P,Yr=new P,vo=new P;class no{constructor(t=new P,e=new P(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ni)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=ni.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ni.copy(this.origin).addScaledVector(this.direction,e),ni.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){bo.copy(t).add(e).multiplyScalar(.5),Kr.copy(e).sub(t).normalize(),wi.copy(this.origin).sub(bo);const r=t.distanceTo(e)*.5,a=-this.direction.dot(Kr),o=wi.dot(this.direction),c=-wi.dot(Kr),l=wi.lengthSq(),h=Math.abs(1-a*a);let f,u,d,g;if(h>0)if(f=a*c-o,u=a*o-c,g=r*h,f>=0)if(u>=-g)if(u<=g){const b=1/h;f*=b,u*=b,d=f*(f+a*u+2*o)+u*(a*f+u+2*c)+l}else u=r,f=Math.max(0,-(a*u+o)),d=-f*f+u*(u+2*c)+l;else u=-r,f=Math.max(0,-(a*u+o)),d=-f*f+u*(u+2*c)+l;else u<=-g?(f=Math.max(0,-(-a*r+o)),u=f>0?-r:Math.min(Math.max(-r,-c),r),d=-f*f+u*(u+2*c)+l):u<=g?(f=0,u=Math.min(Math.max(-r,-c),r),d=u*(u+2*c)+l):(f=Math.max(0,-(a*r+o)),u=f>0?r:Math.min(Math.max(-r,-c),r),d=-f*f+u*(u+2*c)+l);else u=a>0?-r:r,f=Math.max(0,-(a*u+o)),d=-f*f+u*(u+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,f),i&&i.copy(bo).addScaledVector(Kr,u),d}intersectSphere(t,e){ni.subVectors(t.center,this.origin);const n=ni.dot(this.direction),i=ni.dot(ni)-n*n,r=t.radius*t.radius;if(i>r)return null;const a=Math.sqrt(r-i),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,a,o,c;const l=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,u=this.origin;return l>=0?(n=(t.min.x-u.x)*l,i=(t.max.x-u.x)*l):(n=(t.max.x-u.x)*l,i=(t.min.x-u.x)*l),h>=0?(r=(t.min.y-u.y)*h,a=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,a=(t.min.y-u.y)*h),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),f>=0?(o=(t.min.z-u.z)*f,c=(t.max.z-u.z)*f):(o=(t.max.z-u.z)*f,c=(t.min.z-u.z)*f),n>c||o>i)||((o>n||n!==n)&&(n=o),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,ni)!==null}intersectTriangle(t,e,n,i,r){xo.subVectors(e,t),Yr.subVectors(n,t),vo.crossVectors(xo,Yr);let a=this.direction.dot(vo),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;wi.subVectors(this.origin,t);const c=o*this.direction.dot(Yr.crossVectors(wi,Yr));if(c<0)return null;const l=o*this.direction.dot(xo.cross(wi));if(l<0||c+l>a)return null;const h=-o*wi.dot(vo);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class kt{constructor(t,e,n,i,r,a,o,c,l,h,f,u,d,g,b,m){kt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,a,o,c,l,h,f,u,d,g,b,m)}set(t,e,n,i,r,a,o,c,l,h,f,u,d,g,b,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=i,p[1]=r,p[5]=a,p[9]=o,p[13]=c,p[2]=l,p[6]=h,p[10]=f,p[14]=u,p[3]=d,p[7]=g,p[11]=b,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new kt().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/ls.setFromMatrixColumn(t,0).length(),r=1/ls.setFromMatrixColumn(t,1).length(),a=1/ls.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(r),f=Math.sin(r);if(t.order==="XYZ"){const u=a*h,d=a*f,g=o*h,b=o*f;e[0]=c*h,e[4]=-c*f,e[8]=l,e[1]=d+g*l,e[5]=u-b*l,e[9]=-o*c,e[2]=b-u*l,e[6]=g+d*l,e[10]=a*c}else if(t.order==="YXZ"){const u=c*h,d=c*f,g=l*h,b=l*f;e[0]=u+b*o,e[4]=g*o-d,e[8]=a*l,e[1]=a*f,e[5]=a*h,e[9]=-o,e[2]=d*o-g,e[6]=b+u*o,e[10]=a*c}else if(t.order==="ZXY"){const u=c*h,d=c*f,g=l*h,b=l*f;e[0]=u-b*o,e[4]=-a*f,e[8]=g+d*o,e[1]=d+g*o,e[5]=a*h,e[9]=b-u*o,e[2]=-a*l,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){const u=a*h,d=a*f,g=o*h,b=o*f;e[0]=c*h,e[4]=g*l-d,e[8]=u*l+b,e[1]=c*f,e[5]=b*l+u,e[9]=d*l-g,e[2]=-l,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){const u=a*c,d=a*l,g=o*c,b=o*l;e[0]=c*h,e[4]=b-u*f,e[8]=g*f+d,e[1]=f,e[5]=a*h,e[9]=-o*h,e[2]=-l*h,e[6]=d*f+g,e[10]=u-b*f}else if(t.order==="XZY"){const u=a*c,d=a*l,g=o*c,b=o*l;e[0]=c*h,e[4]=-f,e[8]=l*h,e[1]=u*f+b,e[5]=a*h,e[9]=d*f-g,e[2]=g*f-d,e[6]=o*h,e[10]=b*f+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(lp,t,hp)}lookAt(t,e,n){const i=this.elements;return cn.subVectors(t,e),cn.lengthSq()===0&&(cn.z=1),cn.normalize(),Ti.crossVectors(n,cn),Ti.lengthSq()===0&&(Math.abs(n.z)===1?cn.x+=1e-4:cn.z+=1e-4,cn.normalize(),Ti.crossVectors(n,cn)),Ti.normalize(),Jr.crossVectors(cn,Ti),i[0]=Ti.x,i[4]=Jr.x,i[8]=cn.x,i[1]=Ti.y,i[5]=Jr.y,i[9]=cn.y,i[2]=Ti.z,i[6]=Jr.z,i[10]=cn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],f=n[5],u=n[9],d=n[13],g=n[2],b=n[6],m=n[10],p=n[14],v=n[3],_=n[7],x=n[11],C=n[15],w=i[0],R=i[4],A=i[8],y=i[12],M=i[1],S=i[5],D=i[9],U=i[13],N=i[2],z=i[6],F=i[10],k=i[14],H=i[3],X=i[7],nt=i[11],$=i[15];return r[0]=a*w+o*M+c*N+l*H,r[4]=a*R+o*S+c*z+l*X,r[8]=a*A+o*D+c*F+l*nt,r[12]=a*y+o*U+c*k+l*$,r[1]=h*w+f*M+u*N+d*H,r[5]=h*R+f*S+u*z+d*X,r[9]=h*A+f*D+u*F+d*nt,r[13]=h*y+f*U+u*k+d*$,r[2]=g*w+b*M+m*N+p*H,r[6]=g*R+b*S+m*z+p*X,r[10]=g*A+b*D+m*F+p*nt,r[14]=g*y+b*U+m*k+p*$,r[3]=v*w+_*M+x*N+C*H,r[7]=v*R+_*S+x*z+C*X,r[11]=v*A+_*D+x*F+C*nt,r[15]=v*y+_*U+x*k+C*$,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],a=t[1],o=t[5],c=t[9],l=t[13],h=t[2],f=t[6],u=t[10],d=t[14],g=t[3],b=t[7],m=t[11],p=t[15];return g*(+r*c*f-i*l*f-r*o*u+n*l*u+i*o*d-n*c*d)+b*(+e*c*d-e*l*u+r*a*u-i*a*d+i*l*h-r*c*h)+m*(+e*l*f-e*o*d-r*a*f+n*a*d+r*o*h-n*l*h)+p*(-i*o*h-e*c*f+e*o*u+i*a*f-n*a*u+n*c*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],f=t[9],u=t[10],d=t[11],g=t[12],b=t[13],m=t[14],p=t[15],v=f*m*l-b*u*l+b*c*d-o*m*d-f*c*p+o*u*p,_=g*u*l-h*m*l-g*c*d+a*m*d+h*c*p-a*u*p,x=h*b*l-g*f*l+g*o*d-a*b*d-h*o*p+a*f*p,C=g*f*c-h*b*c-g*o*u+a*b*u+h*o*m-a*f*m,w=e*v+n*_+i*x+r*C;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/w;return t[0]=v*R,t[1]=(b*u*r-f*m*r-b*i*d+n*m*d+f*i*p-n*u*p)*R,t[2]=(o*m*r-b*c*r+b*i*l-n*m*l-o*i*p+n*c*p)*R,t[3]=(f*c*r-o*u*r-f*i*l+n*u*l+o*i*d-n*c*d)*R,t[4]=_*R,t[5]=(h*m*r-g*u*r+g*i*d-e*m*d-h*i*p+e*u*p)*R,t[6]=(g*c*r-a*m*r-g*i*l+e*m*l+a*i*p-e*c*p)*R,t[7]=(a*u*r-h*c*r+h*i*l-e*u*l-a*i*d+e*c*d)*R,t[8]=x*R,t[9]=(g*f*r-h*b*r-g*n*d+e*b*d+h*n*p-e*f*p)*R,t[10]=(a*b*r-g*o*r+g*n*l-e*b*l-a*n*p+e*o*p)*R,t[11]=(h*o*r-a*f*r-h*n*l+e*f*l+a*n*d-e*o*d)*R,t[12]=C*R,t[13]=(h*b*i-g*f*i+g*n*u-e*b*u-h*n*m+e*f*m)*R,t[14]=(g*o*i-a*b*i-g*n*c+e*b*c+a*n*m-e*o*m)*R,t[15]=(a*f*i-h*o*i+h*n*c-e*f*c-a*n*u+e*o*u)*R,this}scale(t){const e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),r=1-n,a=t.x,o=t.y,c=t.z,l=r*a,h=r*o;return this.set(l*a+n,l*o-i*c,l*c+i*o,0,l*o+i*c,h*o+n,h*c-i*a,0,l*c-i*o,h*c+i*a,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,a){return this.set(1,n,r,0,t,1,a,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,r=e._x,a=e._y,o=e._z,c=e._w,l=r+r,h=a+a,f=o+o,u=r*l,d=r*h,g=r*f,b=a*h,m=a*f,p=o*f,v=c*l,_=c*h,x=c*f,C=n.x,w=n.y,R=n.z;return i[0]=(1-(b+p))*C,i[1]=(d+x)*C,i[2]=(g-_)*C,i[3]=0,i[4]=(d-x)*w,i[5]=(1-(u+p))*w,i[6]=(m+v)*w,i[7]=0,i[8]=(g+_)*R,i[9]=(m-v)*R,i[10]=(1-(u+b))*R,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let r=ls.set(i[0],i[1],i[2]).length();const a=ls.set(i[4],i[5],i[6]).length(),o=ls.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],Ln.copy(this);const l=1/r,h=1/a,f=1/o;return Ln.elements[0]*=l,Ln.elements[1]*=l,Ln.elements[2]*=l,Ln.elements[4]*=h,Ln.elements[5]*=h,Ln.elements[6]*=h,Ln.elements[8]*=f,Ln.elements[9]*=f,Ln.elements[10]*=f,e.setFromRotationMatrix(Ln),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,i,r,a,o=ui){const c=this.elements,l=2*r/(e-t),h=2*r/(n-i),f=(e+t)/(e-t),u=(n+i)/(n-i);let d,g;if(o===ui)d=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===Fa)d=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=h,c[9]=u,c[13]=0,c[2]=0,c[6]=0,c[10]=d,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,i,r,a,o=ui){const c=this.elements,l=1/(e-t),h=1/(n-i),f=1/(a-r),u=(e+t)*l,d=(n+i)*h;let g,b;if(o===ui)g=(a+r)*f,b=-2*f;else if(o===Fa)g=r*f,b=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-u,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-d,c[2]=0,c[6]=0,c[10]=b,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const ls=new P,Ln=new kt,lp=new P(0,0,0),hp=new P(1,1,1),Ti=new P,Jr=new P,cn=new P,oh=new kt,ch=new We;class an{constructor(t=0,e=0,n=0,i=an.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,r=i[0],a=i[4],o=i[8],c=i[1],l=i[5],h=i[9],f=i[2],u=i[6],d=i[10];switch(e){case"XYZ":this._y=Math.asin(He(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-He(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(He(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-He(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(u,d),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(He(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-He(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return oh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(oh,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return ch.setFromEuler(this),this.setFromQuaternion(ch,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}an.DEFAULT_ORDER="XYZ";class su{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let fp=0;const lh=new P,hs=new We,ii=new kt,Zr=new P,Qs=new P,up=new P,dp=new We,hh=new P(1,0,0),fh=new P(0,1,0),uh=new P(0,0,1),dh={type:"added"},pp={type:"removed"},fs={type:"childadded",child:null},_o={type:"childremoved",child:null};class _e extends Ws{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:fp++}),this.uuid=Mn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=_e.DEFAULT_UP.clone();const t=new P,e=new an,n=new We,i=new P(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new kt},normalMatrix:{value:new Kt}}),this.matrix=new kt,this.matrixWorld=new kt,this.matrixAutoUpdate=_e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=_e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new su,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return hs.setFromAxisAngle(t,e),this.quaternion.multiply(hs),this}rotateOnWorldAxis(t,e){return hs.setFromAxisAngle(t,e),this.quaternion.premultiply(hs),this}rotateX(t){return this.rotateOnAxis(hh,t)}rotateY(t){return this.rotateOnAxis(fh,t)}rotateZ(t){return this.rotateOnAxis(uh,t)}translateOnAxis(t,e){return lh.copy(t).applyQuaternion(this.quaternion),this.position.add(lh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(hh,t)}translateY(t){return this.translateOnAxis(fh,t)}translateZ(t){return this.translateOnAxis(uh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ii.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Zr.copy(t):Zr.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Qs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ii.lookAt(Qs,Zr,this.up):ii.lookAt(Zr,Qs,this.up),this.quaternion.setFromRotationMatrix(ii),i&&(ii.extractRotation(i.matrixWorld),hs.setFromRotationMatrix(ii),this.quaternion.premultiply(hs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(dh),fs.child=t,this.dispatchEvent(fs),fs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(pp),_o.child=t,this.dispatchEvent(_o),_o.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ii.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ii.multiply(t.parent.matrixWorld)),t.applyMatrix4(ii),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(dh),fs.child=t,this.dispatchEvent(fs),fs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qs,t,up),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qs,dp,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const f=c[l];r(t.shapes,f)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(t.materials,this.material[c]));i.material=o}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];i.animations.push(r(t.animations,c))}}if(e){const o=a(t.geometries),c=a(t.materials),l=a(t.textures),h=a(t.images),f=a(t.shapes),u=a(t.skeletons),d=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),u.length>0&&(n.skeletons=u),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){const c=[];for(const l in o){const h=o[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}_e.DEFAULT_UP=new P(0,1,0);_e.DEFAULT_MATRIX_AUTO_UPDATE=!0;_e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const In=new P,si=new P,yo=new P,ri=new P,us=new P,ds=new P,ph=new P,Mo=new P,So=new P,wo=new P,To=new le,Eo=new le,Ao=new le;class On{constructor(t=new P,e=new P,n=new P){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),In.subVectors(t,e),i.cross(In);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){In.subVectors(i,e),si.subVectors(n,e),yo.subVectors(t,e);const a=In.dot(In),o=In.dot(si),c=In.dot(yo),l=si.dot(si),h=si.dot(yo),f=a*l-o*o;if(f===0)return r.set(0,0,0),null;const u=1/f,d=(l*c-o*h)*u,g=(a*h-o*c)*u;return r.set(1-d-g,g,d)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,ri)===null?!1:ri.x>=0&&ri.y>=0&&ri.x+ri.y<=1}static getInterpolation(t,e,n,i,r,a,o,c){return this.getBarycoord(t,e,n,i,ri)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,ri.x),c.addScaledVector(a,ri.y),c.addScaledVector(o,ri.z),c)}static getInterpolatedAttribute(t,e,n,i,r,a){return To.setScalar(0),Eo.setScalar(0),Ao.setScalar(0),To.fromBufferAttribute(t,e),Eo.fromBufferAttribute(t,n),Ao.fromBufferAttribute(t,i),a.setScalar(0),a.addScaledVector(To,r.x),a.addScaledVector(Eo,r.y),a.addScaledVector(Ao,r.z),a}static isFrontFacing(t,e,n,i){return In.subVectors(n,e),si.subVectors(t,e),In.cross(si).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return In.subVectors(this.c,this.b),si.subVectors(this.a,this.b),In.cross(si).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return On.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return On.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return On.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return On.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return On.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,r=this.c;let a,o;us.subVectors(i,n),ds.subVectors(r,n),Mo.subVectors(t,n);const c=us.dot(Mo),l=ds.dot(Mo);if(c<=0&&l<=0)return e.copy(n);So.subVectors(t,i);const h=us.dot(So),f=ds.dot(So);if(h>=0&&f<=h)return e.copy(i);const u=c*f-h*l;if(u<=0&&c>=0&&h<=0)return a=c/(c-h),e.copy(n).addScaledVector(us,a);wo.subVectors(t,r);const d=us.dot(wo),g=ds.dot(wo);if(g>=0&&d<=g)return e.copy(r);const b=d*l-c*g;if(b<=0&&l>=0&&g<=0)return o=l/(l-g),e.copy(n).addScaledVector(ds,o);const m=h*g-d*f;if(m<=0&&f-h>=0&&d-g>=0)return ph.subVectors(r,i),o=(f-h)/(f-h+(d-g)),e.copy(i).addScaledVector(ph,o);const p=1/(m+b+u);return a=b*p,o=u*p,e.copy(n).addScaledVector(us,a).addScaledVector(ds,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const ru={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ei={h:0,s:0,l:0},$r={h:0,s:0,l:0};function Ro(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class ct{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ne){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ie.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=ie.workingColorSpace){return this.r=t,this.g=e,this.b=n,ie.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=ie.workingColorSpace){if(t=pl(t,1),e=He(e,0,1),n=He(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Ro(a,r,t+1/3),this.g=Ro(a,r,t),this.b=Ro(a,r,t-1/3)}return ie.toWorkingColorSpace(this,i),this}setStyle(t,e=Ne){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ne){const n=ru[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=di(t.r),this.g=di(t.g),this.b=di(t.b),this}copyLinearToSRGB(t){return this.r=As(t.r),this.g=As(t.g),this.b=As(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ne){return ie.fromWorkingColorSpace(Ke.copy(this),t),Math.round(He(Ke.r*255,0,255))*65536+Math.round(He(Ke.g*255,0,255))*256+Math.round(He(Ke.b*255,0,255))}getHexString(t=Ne){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ie.workingColorSpace){ie.fromWorkingColorSpace(Ke.copy(this),e);const n=Ke.r,i=Ke.g,r=Ke.b,a=Math.max(n,i,r),o=Math.min(n,i,r);let c,l;const h=(o+a)/2;if(o===a)c=0,l=0;else{const f=a-o;switch(l=h<=.5?f/(a+o):f/(2-a-o),a){case n:c=(i-r)/f+(i<r?6:0);break;case i:c=(r-n)/f+2;break;case r:c=(n-i)/f+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=ie.workingColorSpace){return ie.fromWorkingColorSpace(Ke.copy(this),e),t.r=Ke.r,t.g=Ke.g,t.b=Ke.b,t}getStyle(t=Ne){ie.fromWorkingColorSpace(Ke.copy(this),t);const e=Ke.r,n=Ke.g,i=Ke.b;return t!==Ne?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(Ei),this.setHSL(Ei.h+t,Ei.s+e,Ei.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Ei),t.getHSL($r);const n=br(Ei.h,$r.h,e),i=br(Ei.s,$r.s,e),r=br(Ei.l,$r.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ke=new ct;ct.NAMES=ru;let mp=0;class Sn extends Ws{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:mp++}),this.uuid=Mn(),this.name="",this.blending=Ts,this.side=gi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=sc,this.blendDst=rc,this.blendEquation=Ji,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ct(0,0,0),this.blendAlpha=0,this.depthFunc=Ls,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Zl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ss,this.stencilZFail=ss,this.stencilZPass=ss,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ts&&(n.blending=this.blending),this.side!==gi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==sc&&(n.blendSrc=this.blendSrc),this.blendDst!==rc&&(n.blendDst=this.blendDst),this.blendEquation!==Ji&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ls&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Zl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ss&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ss&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ss&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const a=[];for(const o in r){const c=r[o];delete c.metadata,a.push(c)}return a}if(e){const r=i(t.textures),a=i(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Ee extends Sn{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new ct(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new an,this.combine=ol,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Ue=new P,Qr=new ht;class be{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Hc,this.updateRanges=[],this.gpuType=zn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Qr.fromBufferAttribute(this,e),Qr.applyMatrix3(t),this.setXY(e,Qr.x,Qr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ue.fromBufferAttribute(this,e),Ue.applyMatrix3(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ue.fromBufferAttribute(this,e),Ue.applyMatrix4(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ue.fromBufferAttribute(this,e),Ue.applyNormalMatrix(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ue.fromBufferAttribute(this,e),Ue.transformDirection(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Fn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=pe(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Fn(e,this.array)),e}setX(t,e){return this.normalized&&(e=pe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Fn(e,this.array)),e}setY(t,e){return this.normalized&&(e=pe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Fn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=pe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Fn(e,this.array)),e}setW(t,e){return this.normalized&&(e=pe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=pe(e,this.array),n=pe(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=pe(e,this.array),n=pe(n,this.array),i=pe(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=pe(e,this.array),n=pe(n,this.array),i=pe(i,this.array),r=pe(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Hc&&(t.usage=this.usage),t}}class au extends be{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class ou extends be{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class te extends be{constructor(t,e,n){super(new Float32Array(t),e,n)}}let gp=0;const pn=new kt,Co=new _e,ps=new P,ln=new vi,tr=new vi,Be=new P;class xe extends Ws{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:gp++}),this.uuid=Mn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(eu(t)?ou:au)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Kt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return pn.makeRotationFromQuaternion(t),this.applyMatrix4(pn),this}rotateX(t){return pn.makeRotationX(t),this.applyMatrix4(pn),this}rotateY(t){return pn.makeRotationY(t),this.applyMatrix4(pn),this}rotateZ(t){return pn.makeRotationZ(t),this.applyMatrix4(pn),this}translate(t,e,n){return pn.makeTranslation(t,e,n),this.applyMatrix4(pn),this}scale(t,e,n){return pn.makeScale(t,e,n),this.applyMatrix4(pn),this}lookAt(t){return Co.lookAt(t),Co.updateMatrix(),this.applyMatrix4(Co.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ps).negate(),this.translate(ps.x,ps.y,ps.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let i=0,r=t.length;i<r;i++){const a=t[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new te(n,3))}else{for(let n=0,i=e.count;n<i;n++){const r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new vi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const r=e[n];ln.setFromBufferAttribute(r),this.morphTargetsRelative?(Be.addVectors(this.boundingBox.min,ln.min),this.boundingBox.expandByPoint(Be),Be.addVectors(this.boundingBox.max,ln.max),this.boundingBox.expandByPoint(Be)):(this.boundingBox.expandByPoint(ln.min),this.boundingBox.expandByPoint(ln.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Yn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(t){const n=this.boundingSphere.center;if(ln.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];tr.setFromBufferAttribute(o),this.morphTargetsRelative?(Be.addVectors(ln.min,tr.min),ln.expandByPoint(Be),Be.addVectors(ln.max,tr.max),ln.expandByPoint(Be)):(ln.expandByPoint(tr.min),ln.expandByPoint(tr.max))}ln.getCenter(n);let i=0;for(let r=0,a=t.count;r<a;r++)Be.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(Be));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)Be.fromBufferAttribute(o,l),c&&(ps.fromBufferAttribute(t,l),Be.add(ps)),i=Math.max(i,n.distanceToSquared(Be))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new be(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let A=0;A<n.count;A++)o[A]=new P,c[A]=new P;const l=new P,h=new P,f=new P,u=new ht,d=new ht,g=new ht,b=new P,m=new P;function p(A,y,M){l.fromBufferAttribute(n,A),h.fromBufferAttribute(n,y),f.fromBufferAttribute(n,M),u.fromBufferAttribute(r,A),d.fromBufferAttribute(r,y),g.fromBufferAttribute(r,M),h.sub(l),f.sub(l),d.sub(u),g.sub(u);const S=1/(d.x*g.y-g.x*d.y);isFinite(S)&&(b.copy(h).multiplyScalar(g.y).addScaledVector(f,-d.y).multiplyScalar(S),m.copy(f).multiplyScalar(d.x).addScaledVector(h,-g.x).multiplyScalar(S),o[A].add(b),o[y].add(b),o[M].add(b),c[A].add(m),c[y].add(m),c[M].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:t.count}]);for(let A=0,y=v.length;A<y;++A){const M=v[A],S=M.start,D=M.count;for(let U=S,N=S+D;U<N;U+=3)p(t.getX(U+0),t.getX(U+1),t.getX(U+2))}const _=new P,x=new P,C=new P,w=new P;function R(A){C.fromBufferAttribute(i,A),w.copy(C);const y=o[A];_.copy(y),_.sub(C.multiplyScalar(C.dot(y))).normalize(),x.crossVectors(w,y);const S=x.dot(c[A])<0?-1:1;a.setXYZW(A,_.x,_.y,_.z,S)}for(let A=0,y=v.length;A<y;++A){const M=v[A],S=M.start,D=M.count;for(let U=S,N=S+D;U<N;U+=3)R(t.getX(U+0)),R(t.getX(U+1)),R(t.getX(U+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new be(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,d=n.count;u<d;u++)n.setXYZ(u,0,0,0);const i=new P,r=new P,a=new P,o=new P,c=new P,l=new P,h=new P,f=new P;if(t)for(let u=0,d=t.count;u<d;u+=3){const g=t.getX(u+0),b=t.getX(u+1),m=t.getX(u+2);i.fromBufferAttribute(e,g),r.fromBufferAttribute(e,b),a.fromBufferAttribute(e,m),h.subVectors(a,r),f.subVectors(i,r),h.cross(f),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,b),l.fromBufferAttribute(n,m),o.add(h),c.add(h),l.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(b,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let u=0,d=e.count;u<d;u+=3)i.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),a.fromBufferAttribute(e,u+2),h.subVectors(a,r),f.subVectors(i,r),h.cross(f),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Be.fromBufferAttribute(t,e),Be.normalize(),t.setXYZ(e,Be.x,Be.y,Be.z)}toNonIndexed(){function t(o,c){const l=o.array,h=o.itemSize,f=o.normalized,u=new l.constructor(c.length*h);let d=0,g=0;for(let b=0,m=c.length;b<m;b++){o.isInterleavedBufferAttribute?d=c[b]*o.data.stride+o.offset:d=c[b]*h;for(let p=0;p<h;p++)u[g++]=l[d++]}return new be(u,h,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new xe,n=this.index.array,i=this.attributes;for(const o in i){const c=i[o],l=t(c,n);e.setAttribute(o,l)}const r=this.morphAttributes;for(const o in r){const c=[],l=r[o];for(let h=0,f=l.length;h<f;h++){const u=l[h],d=t(u,n);c.push(d)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const i={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let f=0,u=l.length;f<u;f++){const d=l[f];h.push(d.toJSON(t.data))}h.length>0&&(i[c]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const l in i){const h=i[l];this.setAttribute(l,h.clone(e))}const r=t.morphAttributes;for(const l in r){const h=[],f=r[l];for(let u=0,d=f.length;u<d;u++)h.push(f[u].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let l=0,h=a.length;l<h;l++){const f=a[l];this.addGroup(f.start,f.count,f.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const mh=new kt,Gi=new no,ta=new Yn,gh=new P,ea=new P,na=new P,ia=new P,Po=new P,sa=new P,bh=new P,ra=new P;class J extends _e{constructor(t=new xe,e=new Ee){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const o=this.morphTargetInfluences;if(r&&o){sa.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=o[c],f=r[c];h!==0&&(Po.fromBufferAttribute(f,t),a?sa.addScaledVector(Po,h):sa.addScaledVector(Po.sub(e),h))}e.add(sa)}return e}raycast(t,e){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ta.copy(n.boundingSphere),ta.applyMatrix4(r),Gi.copy(t.ray).recast(t.near),!(ta.containsPoint(Gi.origin)===!1&&(Gi.intersectSphere(ta,gh)===null||Gi.origin.distanceToSquared(gh)>(t.far-t.near)**2))&&(mh.copy(r).invert(),Gi.copy(t.ray).applyMatrix4(mh),!(n.boundingBox!==null&&Gi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Gi)))}_computeIntersections(t,e,n){let i;const r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,f=r.attributes.normal,u=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,b=u.length;g<b;g++){const m=u[g],p=a[m.materialIndex],v=Math.max(m.start,d.start),_=Math.min(o.count,Math.min(m.start+m.count,d.start+d.count));for(let x=v,C=_;x<C;x+=3){const w=o.getX(x),R=o.getX(x+1),A=o.getX(x+2);i=aa(this,p,t,n,l,h,f,w,R,A),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const g=Math.max(0,d.start),b=Math.min(o.count,d.start+d.count);for(let m=g,p=b;m<p;m+=3){const v=o.getX(m),_=o.getX(m+1),x=o.getX(m+2);i=aa(this,a,t,n,l,h,f,v,_,x),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,b=u.length;g<b;g++){const m=u[g],p=a[m.materialIndex],v=Math.max(m.start,d.start),_=Math.min(c.count,Math.min(m.start+m.count,d.start+d.count));for(let x=v,C=_;x<C;x+=3){const w=x,R=x+1,A=x+2;i=aa(this,p,t,n,l,h,f,w,R,A),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const g=Math.max(0,d.start),b=Math.min(c.count,d.start+d.count);for(let m=g,p=b;m<p;m+=3){const v=m,_=m+1,x=m+2;i=aa(this,a,t,n,l,h,f,v,_,x),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}}function bp(s,t,e,n,i,r,a,o){let c;if(t.side===Je?c=n.intersectTriangle(a,r,i,!0,o):c=n.intersectTriangle(i,r,a,t.side===gi,o),c===null)return null;ra.copy(o),ra.applyMatrix4(s.matrixWorld);const l=e.ray.origin.distanceTo(ra);return l<e.near||l>e.far?null:{distance:l,point:ra.clone(),object:s}}function aa(s,t,e,n,i,r,a,o,c,l){s.getVertexPosition(o,ea),s.getVertexPosition(c,na),s.getVertexPosition(l,ia);const h=bp(s,t,e,n,ea,na,ia,bh);if(h){const f=new P;On.getBarycoord(bh,ea,na,ia,f),i&&(h.uv=On.getInterpolatedAttribute(i,o,c,l,f,new ht)),r&&(h.uv1=On.getInterpolatedAttribute(r,o,c,l,f,new ht)),a&&(h.normal=On.getInterpolatedAttribute(a,o,c,l,f,new P),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a:o,b:c,c:l,normal:new P,materialIndex:0};On.getNormal(ea,na,ia,u.normal),h.face=u,h.barycoord=f}return h}class Te extends xe{constructor(t=1,e=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};const o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);const c=[],l=[],h=[],f=[];let u=0,d=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,i,a,2),g("x","z","y",1,-1,t,n,-e,i,a,3),g("x","y","z",1,-1,t,e,n,i,r,4),g("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new te(l,3)),this.setAttribute("normal",new te(h,3)),this.setAttribute("uv",new te(f,2));function g(b,m,p,v,_,x,C,w,R,A,y){const M=x/R,S=C/A,D=x/2,U=C/2,N=w/2,z=R+1,F=A+1;let k=0,H=0;const X=new P;for(let nt=0;nt<F;nt++){const $=nt*S-U;for(let St=0;St<z;St++){const Ht=St*M-D;X[b]=Ht*v,X[m]=$*_,X[p]=N,l.push(X.x,X.y,X.z),X[b]=0,X[m]=0,X[p]=w>0?1:-1,h.push(X.x,X.y,X.z),f.push(St/R),f.push(1-nt/A),k+=1}}for(let nt=0;nt<A;nt++)for(let $=0;$<R;$++){const St=u+$+z*nt,Ht=u+$+z*(nt+1),j=u+($+1)+z*(nt+1),Q=u+($+1)+z*nt;c.push(St,Ht,Q),c.push(Ht,j,Q),H+=6}o.addGroup(d,H,y),d+=H,u+=k}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Te(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Fs(s){const t={};for(const e in s){t[e]={};for(const n in s[e]){const i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Qe(s){const t={};for(let e=0;e<s.length;e++){const n=Fs(s[e]);for(const i in n)t[i]=n[i]}return t}function xp(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function cu(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ie.workingColorSpace}const vp={clone:Fs,merge:Qe};var _p=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,yp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class rn extends Sn{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=_p,this.fragmentShader=yp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Fs(t.uniforms),this.uniformsGroups=xp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?e.uniforms[i]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[i]={type:"m4",value:a.toArray()}:e.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class lu extends _e{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new kt,this.projectionMatrix=new kt,this.projectionMatrixInverse=new kt,this.coordinateSystem=ui}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ai=new P,xh=new ht,vh=new ht;class Ye extends lu{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=ks*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(gr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ks*2*Math.atan(Math.tan(gr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Ai.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Ai.x,Ai.y).multiplyScalar(-t/Ai.z),Ai.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ai.x,Ai.y).multiplyScalar(-t/Ai.z)}getViewSize(t,e){return this.getViewBounds(t,xh,vh),e.subVectors(vh,xh)}setViewOffset(t,e,n,i,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(gr*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*i/c,e-=a.offsetY*n/l,i*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const ms=-90,gs=1;class Mp extends _e{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Ye(ms,gs,t,e);i.layers=this.layers,this.add(i);const r=new Ye(ms,gs,t,e);r.layers=this.layers,this.add(r);const a=new Ye(ms,gs,t,e);a.layers=this.layers,this.add(a);const o=new Ye(ms,gs,t,e);o.layers=this.layers,this.add(o);const c=new Ye(ms,gs,t,e);c.layers=this.layers,this.add(c);const l=new Ye(ms,gs,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,r,a,o,c]=e;for(const l of e)this.remove(l);if(t===ui)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Fa)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,c,l,h]=this.children,f=t.getRenderTarget(),u=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const b=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,r),t.setRenderTarget(n,1,i),t.render(e,a),t.setRenderTarget(n,2,i),t.render(e,o),t.setRenderTarget(n,3,i),t.render(e,c),t.setRenderTarget(n,4,i),t.render(e,l),n.texture.generateMipmaps=b,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(f,u,d),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class hu extends Fe{constructor(t,e,n,i,r,a,o,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:Is,super(t,e,n,i,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Sp extends xi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new hu(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:fn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Te(5,5,5),r=new rn({name:"CubemapFromEquirect",uniforms:Fs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Je,blending:Ui});r.uniforms.tEquirect.value=e;const a=new J(i,r),o=e.minFilter;return e.minFilter===fi&&(e.minFilter=fn),new Mp(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,i){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,i);t.setRenderTarget(r)}}const Lo=new P,wp=new P,Tp=new Kt;class Xi{constructor(t=new P(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=Lo.subVectors(n,e).cross(wp.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Lo),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Tp.getNormalMatrix(t),i=this.coplanarPoint(Lo).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Hi=new Yn,oa=new P;class ml{constructor(t=new Xi,e=new Xi,n=new Xi,i=new Xi,r=new Xi,a=new Xi){this.planes=[t,e,n,i,r,a]}set(t,e,n,i,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=ui){const n=this.planes,i=t.elements,r=i[0],a=i[1],o=i[2],c=i[3],l=i[4],h=i[5],f=i[6],u=i[7],d=i[8],g=i[9],b=i[10],m=i[11],p=i[12],v=i[13],_=i[14],x=i[15];if(n[0].setComponents(c-r,u-l,m-d,x-p).normalize(),n[1].setComponents(c+r,u+l,m+d,x+p).normalize(),n[2].setComponents(c+a,u+h,m+g,x+v).normalize(),n[3].setComponents(c-a,u-h,m-g,x-v).normalize(),n[4].setComponents(c-o,u-f,m-b,x-_).normalize(),e===ui)n[5].setComponents(c+o,u+f,m+b,x+_).normalize();else if(e===Fa)n[5].setComponents(o,f,b,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Hi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Hi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Hi)}intersectsSprite(t){return Hi.center.set(0,0,0),Hi.radius=.7071067811865476,Hi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Hi)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(oa.x=i.normal.x>0?t.max.x:t.min.x,oa.y=i.normal.y>0?t.max.y:t.min.y,oa.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(oa)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function fu(){let s=null,t=!1,e=null,n=null;function i(r,a){e(r,a),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function Ep(s){const t=new WeakMap;function e(o,c){const l=o.array,h=o.usage,f=l.byteLength,u=s.createBuffer();s.bindBuffer(c,u),s.bufferData(c,l,h),o.onUploadCallback();let d;if(l instanceof Float32Array)d=s.FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?d=s.HALF_FLOAT:d=s.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=s.SHORT;else if(l instanceof Uint32Array)d=s.UNSIGNED_INT;else if(l instanceof Int32Array)d=s.INT;else if(l instanceof Int8Array)d=s.BYTE;else if(l instanceof Uint8Array)d=s.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:u,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:f}}function n(o,c,l){const h=c.array,f=c.updateRanges;if(s.bindBuffer(l,o),f.length===0)s.bufferSubData(l,0,h);else{f.sort((d,g)=>d.start-g.start);let u=0;for(let d=1;d<f.length;d++){const g=f[u],b=f[d];b.start<=g.start+g.count+1?g.count=Math.max(g.count,b.start+b.count-g.start):(++u,f[u]=b)}f.length=u+1;for(let d=0,g=f.length;d<g;d++){const b=f[d];s.bufferSubData(l,b.start*h.BYTES_PER_ELEMENT,h,b.start,b.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=t.get(o);c&&(s.deleteBuffer(c.buffer),t.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=t.get(o);if(l===void 0)t.set(o,e(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:i,remove:r,update:a}}class qe extends xe{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const r=t/2,a=e/2,o=Math.floor(n),c=Math.floor(i),l=o+1,h=c+1,f=t/o,u=e/c,d=[],g=[],b=[],m=[];for(let p=0;p<h;p++){const v=p*u-a;for(let _=0;_<l;_++){const x=_*f-r;g.push(x,-v,0),b.push(0,0,1),m.push(_/o),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let v=0;v<o;v++){const _=v+l*p,x=v+l*(p+1),C=v+1+l*(p+1),w=v+1+l*p;d.push(_,x,w),d.push(x,C,w)}this.setIndex(d),this.setAttribute("position",new te(g,3)),this.setAttribute("normal",new te(b,3)),this.setAttribute("uv",new te(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new qe(t.width,t.height,t.widthSegments,t.heightSegments)}}var Ap=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Rp=`#ifdef USE_ALPHAHASH
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
#endif`,Cp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Pp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Lp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ip=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Dp=`#ifdef USE_AOMAP
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
#endif`,Up=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Np=`#ifdef USE_BATCHING
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
#endif`,kp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Fp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Op=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,zp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Bp=`#ifdef USE_IRIDESCENCE
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
#endif`,Gp=`#ifdef USE_BUMPMAP
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
#endif`,Hp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Vp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Wp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,qp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,jp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Xp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Kp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Yp=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Jp=`#define PI 3.141592653589793
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
} // validated`,Zp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,$p=`vec3 transformedNormal = objectNormal;
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
#endif`,Qp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,tm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,em=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,nm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,im="gl_FragColor = linearToOutputTexel( gl_FragColor );",sm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,rm=`#ifdef USE_ENVMAP
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
#endif`,am=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,om=`#ifdef USE_ENVMAP
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
#endif`,cm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,lm=`#ifdef USE_ENVMAP
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
#endif`,hm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,um=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,dm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,pm=`#ifdef USE_GRADIENTMAP
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
}`,mm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,gm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,bm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,xm=`uniform bool receiveShadow;
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
#endif`,vm=`#ifdef USE_ENVMAP
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
#endif`,_m=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ym=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Mm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Sm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,wm=`PhysicalMaterial material;
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
#endif`,Tm=`struct PhysicalMaterial {
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
}`,Em=`
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
#endif`,Am=`#if defined( RE_IndirectDiffuse )
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
#endif`,Rm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Cm=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Pm=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Lm=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Im=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Dm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Um=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Nm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,km=`#if defined( USE_POINTS_UV )
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
#endif`,Fm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Om=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,zm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Bm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Gm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Hm=`#ifdef USE_MORPHTARGETS
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
#endif`,Vm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Wm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,qm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,jm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Xm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Km=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Ym=`#ifdef USE_NORMALMAP
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
#endif`,Jm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Zm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,$m=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Qm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,t0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,e0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,n0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,i0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,s0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,r0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,a0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,o0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,c0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,l0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,h0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,f0=`float getShadowMask() {
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
}`,u0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,d0=`#ifdef USE_SKINNING
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
#endif`,p0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,m0=`#ifdef USE_SKINNING
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
#endif`,g0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,b0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,x0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,v0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,_0=`#ifdef USE_TRANSMISSION
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
#endif`,y0=`#ifdef USE_TRANSMISSION
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
#endif`,M0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,S0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,w0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,T0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const E0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,A0=`uniform sampler2D t2D;
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
}`,R0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,C0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,P0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,L0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,I0=`#include <common>
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
}`,D0=`#if DEPTH_PACKING == 3200
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
}`,U0=`#define DISTANCE
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
}`,N0=`#define DISTANCE
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
}`,k0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,F0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,O0=`uniform float scale;
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
}`,z0=`uniform vec3 diffuse;
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
}`,B0=`#include <common>
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
}`,G0=`uniform vec3 diffuse;
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
}`,H0=`#define LAMBERT
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
}`,V0=`#define LAMBERT
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
}`,W0=`#define MATCAP
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
}`,q0=`#define MATCAP
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
}`,j0=`#define NORMAL
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
}`,X0=`#define NORMAL
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
}`,K0=`#define PHONG
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
}`,Y0=`#define PHONG
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
}`,J0=`#define STANDARD
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
}`,Z0=`#define STANDARD
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
}`,$0=`#define TOON
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
}`,Q0=`#define TOON
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
}`,tg=`uniform float size;
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
}`,eg=`uniform vec3 diffuse;
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
}`,ng=`#include <common>
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
}`,ig=`uniform vec3 color;
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
}`,sg=`uniform float rotation;
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
}`,rg=`uniform vec3 diffuse;
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
}`,Jt={alphahash_fragment:Ap,alphahash_pars_fragment:Rp,alphamap_fragment:Cp,alphamap_pars_fragment:Pp,alphatest_fragment:Lp,alphatest_pars_fragment:Ip,aomap_fragment:Dp,aomap_pars_fragment:Up,batching_pars_vertex:Np,batching_vertex:kp,begin_vertex:Fp,beginnormal_vertex:Op,bsdfs:zp,iridescence_fragment:Bp,bumpmap_pars_fragment:Gp,clipping_planes_fragment:Hp,clipping_planes_pars_fragment:Vp,clipping_planes_pars_vertex:Wp,clipping_planes_vertex:qp,color_fragment:jp,color_pars_fragment:Xp,color_pars_vertex:Kp,color_vertex:Yp,common:Jp,cube_uv_reflection_fragment:Zp,defaultnormal_vertex:$p,displacementmap_pars_vertex:Qp,displacementmap_vertex:tm,emissivemap_fragment:em,emissivemap_pars_fragment:nm,colorspace_fragment:im,colorspace_pars_fragment:sm,envmap_fragment:rm,envmap_common_pars_fragment:am,envmap_pars_fragment:om,envmap_pars_vertex:cm,envmap_physical_pars_fragment:vm,envmap_vertex:lm,fog_vertex:hm,fog_pars_vertex:fm,fog_fragment:um,fog_pars_fragment:dm,gradientmap_pars_fragment:pm,lightmap_pars_fragment:mm,lights_lambert_fragment:gm,lights_lambert_pars_fragment:bm,lights_pars_begin:xm,lights_toon_fragment:_m,lights_toon_pars_fragment:ym,lights_phong_fragment:Mm,lights_phong_pars_fragment:Sm,lights_physical_fragment:wm,lights_physical_pars_fragment:Tm,lights_fragment_begin:Em,lights_fragment_maps:Am,lights_fragment_end:Rm,logdepthbuf_fragment:Cm,logdepthbuf_pars_fragment:Pm,logdepthbuf_pars_vertex:Lm,logdepthbuf_vertex:Im,map_fragment:Dm,map_pars_fragment:Um,map_particle_fragment:Nm,map_particle_pars_fragment:km,metalnessmap_fragment:Fm,metalnessmap_pars_fragment:Om,morphinstance_vertex:zm,morphcolor_vertex:Bm,morphnormal_vertex:Gm,morphtarget_pars_vertex:Hm,morphtarget_vertex:Vm,normal_fragment_begin:Wm,normal_fragment_maps:qm,normal_pars_fragment:jm,normal_pars_vertex:Xm,normal_vertex:Km,normalmap_pars_fragment:Ym,clearcoat_normal_fragment_begin:Jm,clearcoat_normal_fragment_maps:Zm,clearcoat_pars_fragment:$m,iridescence_pars_fragment:Qm,opaque_fragment:t0,packing:e0,premultiplied_alpha_fragment:n0,project_vertex:i0,dithering_fragment:s0,dithering_pars_fragment:r0,roughnessmap_fragment:a0,roughnessmap_pars_fragment:o0,shadowmap_pars_fragment:c0,shadowmap_pars_vertex:l0,shadowmap_vertex:h0,shadowmask_pars_fragment:f0,skinbase_vertex:u0,skinning_pars_vertex:d0,skinning_vertex:p0,skinnormal_vertex:m0,specularmap_fragment:g0,specularmap_pars_fragment:b0,tonemapping_fragment:x0,tonemapping_pars_fragment:v0,transmission_fragment:_0,transmission_pars_fragment:y0,uv_pars_fragment:M0,uv_pars_vertex:S0,uv_vertex:w0,worldpos_vertex:T0,background_vert:E0,background_frag:A0,backgroundCube_vert:R0,backgroundCube_frag:C0,cube_vert:P0,cube_frag:L0,depth_vert:I0,depth_frag:D0,distanceRGBA_vert:U0,distanceRGBA_frag:N0,equirect_vert:k0,equirect_frag:F0,linedashed_vert:O0,linedashed_frag:z0,meshbasic_vert:B0,meshbasic_frag:G0,meshlambert_vert:H0,meshlambert_frag:V0,meshmatcap_vert:W0,meshmatcap_frag:q0,meshnormal_vert:j0,meshnormal_frag:X0,meshphong_vert:K0,meshphong_frag:Y0,meshphysical_vert:J0,meshphysical_frag:Z0,meshtoon_vert:$0,meshtoon_frag:Q0,points_vert:tg,points_frag:eg,shadow_vert:ng,shadow_frag:ig,sprite_vert:sg,sprite_frag:rg},ut={common:{diffuse:{value:new ct(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Kt},alphaMap:{value:null},alphaMapTransform:{value:new Kt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Kt}},envmap:{envMap:{value:null},envMapRotation:{value:new Kt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Kt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Kt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Kt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Kt},normalScale:{value:new ht(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Kt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Kt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Kt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Kt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ct(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ct(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Kt},alphaTest:{value:0},uvTransform:{value:new Kt}},sprite:{diffuse:{value:new ct(16777215)},opacity:{value:1},center:{value:new ht(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Kt},alphaMap:{value:null},alphaMapTransform:{value:new Kt},alphaTest:{value:0}}},jn={basic:{uniforms:Qe([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.fog]),vertexShader:Jt.meshbasic_vert,fragmentShader:Jt.meshbasic_frag},lambert:{uniforms:Qe([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,ut.lights,{emissive:{value:new ct(0)}}]),vertexShader:Jt.meshlambert_vert,fragmentShader:Jt.meshlambert_frag},phong:{uniforms:Qe([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,ut.lights,{emissive:{value:new ct(0)},specular:{value:new ct(1118481)},shininess:{value:30}}]),vertexShader:Jt.meshphong_vert,fragmentShader:Jt.meshphong_frag},standard:{uniforms:Qe([ut.common,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.roughnessmap,ut.metalnessmap,ut.fog,ut.lights,{emissive:{value:new ct(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Jt.meshphysical_vert,fragmentShader:Jt.meshphysical_frag},toon:{uniforms:Qe([ut.common,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.gradientmap,ut.fog,ut.lights,{emissive:{value:new ct(0)}}]),vertexShader:Jt.meshtoon_vert,fragmentShader:Jt.meshtoon_frag},matcap:{uniforms:Qe([ut.common,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,{matcap:{value:null}}]),vertexShader:Jt.meshmatcap_vert,fragmentShader:Jt.meshmatcap_frag},points:{uniforms:Qe([ut.points,ut.fog]),vertexShader:Jt.points_vert,fragmentShader:Jt.points_frag},dashed:{uniforms:Qe([ut.common,ut.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Jt.linedashed_vert,fragmentShader:Jt.linedashed_frag},depth:{uniforms:Qe([ut.common,ut.displacementmap]),vertexShader:Jt.depth_vert,fragmentShader:Jt.depth_frag},normal:{uniforms:Qe([ut.common,ut.bumpmap,ut.normalmap,ut.displacementmap,{opacity:{value:1}}]),vertexShader:Jt.meshnormal_vert,fragmentShader:Jt.meshnormal_frag},sprite:{uniforms:Qe([ut.sprite,ut.fog]),vertexShader:Jt.sprite_vert,fragmentShader:Jt.sprite_frag},background:{uniforms:{uvTransform:{value:new Kt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Jt.background_vert,fragmentShader:Jt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Kt}},vertexShader:Jt.backgroundCube_vert,fragmentShader:Jt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Jt.cube_vert,fragmentShader:Jt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Jt.equirect_vert,fragmentShader:Jt.equirect_frag},distanceRGBA:{uniforms:Qe([ut.common,ut.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Jt.distanceRGBA_vert,fragmentShader:Jt.distanceRGBA_frag},shadow:{uniforms:Qe([ut.lights,ut.fog,{color:{value:new ct(0)},opacity:{value:1}}]),vertexShader:Jt.shadow_vert,fragmentShader:Jt.shadow_frag}};jn.physical={uniforms:Qe([jn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Kt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Kt},clearcoatNormalScale:{value:new ht(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Kt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Kt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Kt},sheen:{value:0},sheenColor:{value:new ct(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Kt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Kt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Kt},transmissionSamplerSize:{value:new ht},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Kt},attenuationDistance:{value:0},attenuationColor:{value:new ct(0)},specularColor:{value:new ct(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Kt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Kt},anisotropyVector:{value:new ht},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Kt}}]),vertexShader:Jt.meshphysical_vert,fragmentShader:Jt.meshphysical_frag};const ca={r:0,b:0,g:0},Vi=new an,ag=new kt;function og(s,t,e,n,i,r,a){const o=new ct(0);let c=r===!0?0:1,l,h,f=null,u=0,d=null;function g(v){let _=v.isScene===!0?v.background:null;return _&&_.isTexture&&(_=(v.backgroundBlurriness>0?e:t).get(_)),_}function b(v){let _=!1;const x=g(v);x===null?p(o,c):x&&x.isColor&&(p(x,1),_=!0);const C=s.xr.getEnvironmentBlendMode();C==="additive"?n.buffers.color.setClear(0,0,0,1,a):C==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(s.autoClear||_)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function m(v,_){const x=g(_);x&&(x.isCubeTexture||x.mapping===$a)?(h===void 0&&(h=new J(new Te(1,1,1),new rn({name:"BackgroundCubeMaterial",uniforms:Fs(jn.backgroundCube.uniforms),vertexShader:jn.backgroundCube.vertexShader,fragmentShader:jn.backgroundCube.fragmentShader,side:Je,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(C,w,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),Vi.copy(_.backgroundRotation),Vi.x*=-1,Vi.y*=-1,Vi.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Vi.y*=-1,Vi.z*=-1),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(ag.makeRotationFromEuler(Vi)),h.material.toneMapped=ie.getTransfer(x.colorSpace)!==ve,(f!==x||u!==x.version||d!==s.toneMapping)&&(h.material.needsUpdate=!0,f=x,u=x.version,d=s.toneMapping),h.layers.enableAll(),v.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new J(new qe(2,2),new rn({name:"BackgroundMaterial",uniforms:Fs(jn.background.uniforms),vertexShader:jn.background.vertexShader,fragmentShader:jn.background.fragmentShader,side:gi,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,l.material.toneMapped=ie.getTransfer(x.colorSpace)!==ve,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(f!==x||u!==x.version||d!==s.toneMapping)&&(l.material.needsUpdate=!0,f=x,u=x.version,d=s.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function p(v,_){v.getRGB(ca,cu(s)),n.buffers.color.setClear(ca.r,ca.g,ca.b,_,a)}return{getClearColor:function(){return o},setClearColor:function(v,_=1){o.set(v),c=_,p(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(v){c=v,p(o,c)},render:b,addToRenderList:m}}function cg(s,t){const e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=u(null);let r=i,a=!1;function o(M,S,D,U,N){let z=!1;const F=f(U,D,S);r!==F&&(r=F,l(r.object)),z=d(M,U,D,N),z&&g(M,U,D,N),N!==null&&t.update(N,s.ELEMENT_ARRAY_BUFFER),(z||a)&&(a=!1,x(M,S,D,U),N!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(N).buffer))}function c(){return s.createVertexArray()}function l(M){return s.bindVertexArray(M)}function h(M){return s.deleteVertexArray(M)}function f(M,S,D){const U=D.wireframe===!0;let N=n[M.id];N===void 0&&(N={},n[M.id]=N);let z=N[S.id];z===void 0&&(z={},N[S.id]=z);let F=z[U];return F===void 0&&(F=u(c()),z[U]=F),F}function u(M){const S=[],D=[],U=[];for(let N=0;N<e;N++)S[N]=0,D[N]=0,U[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:S,enabledAttributes:D,attributeDivisors:U,object:M,attributes:{},index:null}}function d(M,S,D,U){const N=r.attributes,z=S.attributes;let F=0;const k=D.getAttributes();for(const H in k)if(k[H].location>=0){const nt=N[H];let $=z[H];if($===void 0&&(H==="instanceMatrix"&&M.instanceMatrix&&($=M.instanceMatrix),H==="instanceColor"&&M.instanceColor&&($=M.instanceColor)),nt===void 0||nt.attribute!==$||$&&nt.data!==$.data)return!0;F++}return r.attributesNum!==F||r.index!==U}function g(M,S,D,U){const N={},z=S.attributes;let F=0;const k=D.getAttributes();for(const H in k)if(k[H].location>=0){let nt=z[H];nt===void 0&&(H==="instanceMatrix"&&M.instanceMatrix&&(nt=M.instanceMatrix),H==="instanceColor"&&M.instanceColor&&(nt=M.instanceColor));const $={};$.attribute=nt,nt&&nt.data&&($.data=nt.data),N[H]=$,F++}r.attributes=N,r.attributesNum=F,r.index=U}function b(){const M=r.newAttributes;for(let S=0,D=M.length;S<D;S++)M[S]=0}function m(M){p(M,0)}function p(M,S){const D=r.newAttributes,U=r.enabledAttributes,N=r.attributeDivisors;D[M]=1,U[M]===0&&(s.enableVertexAttribArray(M),U[M]=1),N[M]!==S&&(s.vertexAttribDivisor(M,S),N[M]=S)}function v(){const M=r.newAttributes,S=r.enabledAttributes;for(let D=0,U=S.length;D<U;D++)S[D]!==M[D]&&(s.disableVertexAttribArray(D),S[D]=0)}function _(M,S,D,U,N,z,F){F===!0?s.vertexAttribIPointer(M,S,D,N,z):s.vertexAttribPointer(M,S,D,U,N,z)}function x(M,S,D,U){b();const N=U.attributes,z=D.getAttributes(),F=S.defaultAttributeValues;for(const k in z){const H=z[k];if(H.location>=0){let X=N[k];if(X===void 0&&(k==="instanceMatrix"&&M.instanceMatrix&&(X=M.instanceMatrix),k==="instanceColor"&&M.instanceColor&&(X=M.instanceColor)),X!==void 0){const nt=X.normalized,$=X.itemSize,St=t.get(X);if(St===void 0)continue;const Ht=St.buffer,j=St.type,Q=St.bytesPerElement,dt=j===s.INT||j===s.UNSIGNED_INT||X.gpuType===cl;if(X.isInterleavedBufferAttribute){const st=X.data,vt=st.stride,Dt=X.offset;if(st.isInstancedInterleavedBuffer){for(let zt=0;zt<H.locationSize;zt++)p(H.location+zt,st.meshPerAttribute);M.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=st.meshPerAttribute*st.count)}else for(let zt=0;zt<H.locationSize;zt++)m(H.location+zt);s.bindBuffer(s.ARRAY_BUFFER,Ht);for(let zt=0;zt<H.locationSize;zt++)_(H.location+zt,$/H.locationSize,j,nt,vt*Q,(Dt+$/H.locationSize*zt)*Q,dt)}else{if(X.isInstancedBufferAttribute){for(let st=0;st<H.locationSize;st++)p(H.location+st,X.meshPerAttribute);M.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=X.meshPerAttribute*X.count)}else for(let st=0;st<H.locationSize;st++)m(H.location+st);s.bindBuffer(s.ARRAY_BUFFER,Ht);for(let st=0;st<H.locationSize;st++)_(H.location+st,$/H.locationSize,j,nt,$*Q,$/H.locationSize*st*Q,dt)}}else if(F!==void 0){const nt=F[k];if(nt!==void 0)switch(nt.length){case 2:s.vertexAttrib2fv(H.location,nt);break;case 3:s.vertexAttrib3fv(H.location,nt);break;case 4:s.vertexAttrib4fv(H.location,nt);break;default:s.vertexAttrib1fv(H.location,nt)}}}}v()}function C(){A();for(const M in n){const S=n[M];for(const D in S){const U=S[D];for(const N in U)h(U[N].object),delete U[N];delete S[D]}delete n[M]}}function w(M){if(n[M.id]===void 0)return;const S=n[M.id];for(const D in S){const U=S[D];for(const N in U)h(U[N].object),delete U[N];delete S[D]}delete n[M.id]}function R(M){for(const S in n){const D=n[S];if(D[M.id]===void 0)continue;const U=D[M.id];for(const N in U)h(U[N].object),delete U[N];delete D[M.id]}}function A(){y(),a=!0,r!==i&&(r=i,l(r.object))}function y(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:A,resetDefaultState:y,dispose:C,releaseStatesOfGeometry:w,releaseStatesOfProgram:R,initAttributes:b,enableAttribute:m,disableUnusedAttributes:v}}function lg(s,t,e){let n;function i(l){n=l}function r(l,h){s.drawArrays(n,l,h),e.update(h,n,1)}function a(l,h,f){f!==0&&(s.drawArraysInstanced(n,l,h,f),e.update(h,n,f))}function o(l,h,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,f);let d=0;for(let g=0;g<f;g++)d+=h[g];e.update(d,n,1)}function c(l,h,f,u){if(f===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<l.length;g++)a(l[g],h[g],u[g]);else{d.multiDrawArraysInstancedWEBGL(n,l,0,h,0,u,0,f);let g=0;for(let b=0;b<f;b++)g+=h[b]*u[b];e.update(g,n,1)}}this.setMode=i,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function hg(s,t,e,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const R=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(R){return!(R!==vn&&n.convert(R)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){const A=R===Vs&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==bi&&n.convert(R)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==zn&&!A)}function c(R){if(R==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const f=e.logarithmicDepthBuffer===!0,u=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),d=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),v=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),_=s.getParameter(s.MAX_VARYING_VECTORS),x=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),C=g>0,w=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:f,reverseDepthBuffer:u,maxTextures:d,maxVertexTextures:g,maxTextureSize:b,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:v,maxVaryings:_,maxFragmentUniforms:x,vertexTextures:C,maxSamples:w}}function fg(s){const t=this;let e=null,n=0,i=!1,r=!1;const a=new Xi,o=new Kt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,u){const d=f.length!==0||u||n!==0||i;return i=u,n=f.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,u){e=h(f,u,0)},this.setState=function(f,u,d){const g=f.clippingPlanes,b=f.clipIntersection,m=f.clipShadows,p=s.get(f);if(!i||g===null||g.length===0||r&&!m)r?h(null):l();else{const v=r?0:n,_=v*4;let x=p.clippingState||null;c.value=x,x=h(g,u,_,d);for(let C=0;C!==_;++C)x[C]=e[C];p.clippingState=x,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=v}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(f,u,d,g){const b=f!==null?f.length:0;let m=null;if(b!==0){if(m=c.value,g!==!0||m===null){const p=d+b*4,v=u.matrixWorldInverse;o.getNormalMatrix(v),(m===null||m.length<p)&&(m=new Float32Array(p));for(let _=0,x=d;_!==b;++_,x+=4)a.copy(f[_]).applyMatrix4(v,o),a.normal.toArray(m,x),m[x+3]=a.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=b,t.numIntersection=0,m}}function ug(s){let t=new WeakMap;function e(a,o){return o===dc?a.mapping=Is:o===pc&&(a.mapping=Ds),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===dc||o===pc)if(t.has(a)){const c=t.get(a).texture;return e(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new Sp(c.height);return l.fromEquirectangularTexture(s,a),t.set(a,l),a.addEventListener("dispose",i),e(l.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const c=t.get(o);c!==void 0&&(t.delete(o),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class io extends lu{constructor(t=-1,e=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=i+e,c=i-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Ms=4,_h=[.125,.215,.35,.446,.526,.582],Zi=20,Io=new io,yh=new ct;let Do=null,Uo=0,No=0,ko=!1;const Ki=(1+Math.sqrt(5))/2,bs=1/Ki,Mh=[new P(-Ki,bs,0),new P(Ki,bs,0),new P(-bs,0,Ki),new P(bs,0,Ki),new P(0,Ki,-bs),new P(0,Ki,bs),new P(-1,1,-1),new P(1,1,-1),new P(-1,1,1),new P(1,1,1)];class Sh{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){Do=this._renderer.getRenderTarget(),Uo=this._renderer.getActiveCubeFace(),No=this._renderer.getActiveMipmapLevel(),ko=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,i,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Eh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Th(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Do,Uo,No),this._renderer.xr.enabled=ko,t.scissorTest=!1,la(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Is||t.mapping===Ds?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Do=this._renderer.getRenderTarget(),Uo=this._renderer.getActiveCubeFace(),No=this._renderer.getActiveMipmapLevel(),ko=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:fn,minFilter:fn,generateMipmaps:!1,type:Vs,format:vn,colorSpace:tn,depthBuffer:!1},i=wh(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=wh(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=dg(r)),this._blurMaterial=pg(r,t,e)}return i}_compileMaterial(t){const e=new J(this._lodPlanes[0],t);this._renderer.compile(e,Io)}_sceneToCubeUV(t,e,n,i){const o=new Ye(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,u=h.toneMapping;h.getClearColor(yh),h.toneMapping=Ni,h.autoClear=!1;const d=new Ee({name:"PMREM.Background",side:Je,depthWrite:!1,depthTest:!1}),g=new J(new Te,d);let b=!1;const m=t.background;m?m.isColor&&(d.color.copy(m),t.background=null,b=!0):(d.color.copy(yh),b=!0);for(let p=0;p<6;p++){const v=p%3;v===0?(o.up.set(0,c[p],0),o.lookAt(l[p],0,0)):v===1?(o.up.set(0,0,c[p]),o.lookAt(0,l[p],0)):(o.up.set(0,c[p],0),o.lookAt(0,0,l[p]));const _=this._cubeSize;la(i,v*_,p>2?_:0,_,_),h.setRenderTarget(i),b&&h.render(g,o),h.render(t,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=u,h.autoClear=f,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===Is||t.mapping===Ds;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Eh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Th());const r=i?this._cubemapMaterial:this._equirectMaterial,a=new J(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const c=this._cubeSize;la(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(a,Io)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const i=this._lodPlanes.length;for(let r=1;r<i;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Mh[(i-r-1)%Mh.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,i,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,i,"latitudinal",r),this._halfBlur(a,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,f=new J(this._lodPlanes[i],l),u=l.uniforms,d=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*Zi-1),b=r/g,m=isFinite(r)?1+Math.floor(h*b):Zi;m>Zi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Zi}`);const p=[];let v=0;for(let R=0;R<Zi;++R){const A=R/b,y=Math.exp(-A*A/2);p.push(y),R===0?v+=y:R<m&&(v+=2*y)}for(let R=0;R<p.length;R++)p[R]=p[R]/v;u.envMap.value=t.texture,u.samples.value=m,u.weights.value=p,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);const{_lodMax:_}=this;u.dTheta.value=g,u.mipInt.value=_-n;const x=this._sizeLods[i],C=3*x*(i>_-Ms?i-_+Ms:0),w=4*(this._cubeSize-x);la(e,C,w,3*x,2*x),c.setRenderTarget(e),c.render(f,Io)}}function dg(s){const t=[],e=[],n=[];let i=s;const r=s-Ms+1+_h.length;for(let a=0;a<r;a++){const o=Math.pow(2,i);e.push(o);let c=1/o;a>s-Ms?c=_h[a-s+Ms-1]:a===0&&(c=0),n.push(c);const l=1/(o-2),h=-l,f=1+l,u=[h,h,f,h,f,f,h,h,f,f,h,f],d=6,g=6,b=3,m=2,p=1,v=new Float32Array(b*g*d),_=new Float32Array(m*g*d),x=new Float32Array(p*g*d);for(let w=0;w<d;w++){const R=w%3*2/3-1,A=w>2?0:-1,y=[R,A,0,R+2/3,A,0,R+2/3,A+1,0,R,A,0,R+2/3,A+1,0,R,A+1,0];v.set(y,b*g*w),_.set(u,m*g*w);const M=[w,w,w,w,w,w];x.set(M,p*g*w)}const C=new xe;C.setAttribute("position",new be(v,b)),C.setAttribute("uv",new be(_,m)),C.setAttribute("faceIndex",new be(x,p)),t.push(C),i>Ms&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function wh(s,t,e){const n=new xi(s,t,e);return n.texture.mapping=$a,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function la(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function pg(s,t,e){const n=new Float32Array(Zi),i=new P(0,1,0);return new rn({name:"SphericalGaussianBlur",defines:{n:Zi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:gl(),fragmentShader:`

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
		`,blending:Ui,depthTest:!1,depthWrite:!1})}function Th(){return new rn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:gl(),fragmentShader:`

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
		`,blending:Ui,depthTest:!1,depthWrite:!1})}function Eh(){return new rn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:gl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ui,depthTest:!1,depthWrite:!1})}function gl(){return`

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
	`}function mg(s){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const c=o.mapping,l=c===dc||c===pc,h=c===Is||c===Ds;if(l||h){let f=t.get(o);const u=f!==void 0?f.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==u)return e===null&&(e=new Sh(s)),f=l?e.fromEquirectangular(o,f):e.fromCubemap(o,f),f.texture.pmremVersion=o.pmremVersion,t.set(o,f),f.texture;if(f!==void 0)return f.texture;{const d=o.image;return l&&d&&d.height>0||h&&d&&i(d)?(e===null&&(e=new Sh(s)),f=l?e.fromEquirectangular(o):e.fromCubemap(o),f.texture.pmremVersion=o.pmremVersion,t.set(o,f),o.addEventListener("dispose",r),f.texture):null}}}return o}function i(o){let c=0;const l=6;for(let h=0;h<l;h++)o[h]!==void 0&&c++;return c===l}function r(o){const c=o.target;c.removeEventListener("dispose",r);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function gg(s){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&fr("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function bg(s,t,e,n){const i={},r=new WeakMap;function a(f){const u=f.target;u.index!==null&&t.remove(u.index);for(const g in u.attributes)t.remove(u.attributes[g]);for(const g in u.morphAttributes){const b=u.morphAttributes[g];for(let m=0,p=b.length;m<p;m++)t.remove(b[m])}u.removeEventListener("dispose",a),delete i[u.id];const d=r.get(u);d&&(t.remove(d),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function o(f,u){return i[u.id]===!0||(u.addEventListener("dispose",a),i[u.id]=!0,e.memory.geometries++),u}function c(f){const u=f.attributes;for(const g in u)t.update(u[g],s.ARRAY_BUFFER);const d=f.morphAttributes;for(const g in d){const b=d[g];for(let m=0,p=b.length;m<p;m++)t.update(b[m],s.ARRAY_BUFFER)}}function l(f){const u=[],d=f.index,g=f.attributes.position;let b=0;if(d!==null){const v=d.array;b=d.version;for(let _=0,x=v.length;_<x;_+=3){const C=v[_+0],w=v[_+1],R=v[_+2];u.push(C,w,w,R,R,C)}}else if(g!==void 0){const v=g.array;b=g.version;for(let _=0,x=v.length/3-1;_<x;_+=3){const C=_+0,w=_+1,R=_+2;u.push(C,w,w,R,R,C)}}else return;const m=new(eu(u)?ou:au)(u,1);m.version=b;const p=r.get(f);p&&t.remove(p),r.set(f,m)}function h(f){const u=r.get(f);if(u){const d=f.index;d!==null&&u.version<d.version&&l(f)}else l(f);return r.get(f)}return{get:o,update:c,getWireframeAttribute:h}}function xg(s,t,e){let n;function i(u){n=u}let r,a;function o(u){r=u.type,a=u.bytesPerElement}function c(u,d){s.drawElements(n,d,r,u*a),e.update(d,n,1)}function l(u,d,g){g!==0&&(s.drawElementsInstanced(n,d,r,u*a,g),e.update(d,n,g))}function h(u,d,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,u,0,g);let m=0;for(let p=0;p<g;p++)m+=d[p];e.update(m,n,1)}function f(u,d,g,b){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<u.length;p++)l(u[p]/a,d[p],b[p]);else{m.multiDrawElementsInstancedWEBGL(n,d,0,r,u,0,b,0,g);let p=0;for(let v=0;v<g;v++)p+=d[v]*b[v];e.update(p,n,1)}}this.setMode=i,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=f}function vg(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case s.TRIANGLES:e.triangles+=o*(r/3);break;case s.LINES:e.lines+=o*(r/2);break;case s.LINE_STRIP:e.lines+=o*(r-1);break;case s.LINE_LOOP:e.lines+=o*r;break;case s.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function _g(s,t,e){const n=new WeakMap,i=new le;function r(a,o,c){const l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=h!==void 0?h.length:0;let u=n.get(o);if(u===void 0||u.count!==f){let y=function(){R.dispose(),n.delete(o),o.removeEventListener("dispose",y)};u!==void 0&&u.texture.dispose();const d=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,b=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],v=o.morphAttributes.color||[];let _=0;d===!0&&(_=1),g===!0&&(_=2),b===!0&&(_=3);let x=o.attributes.position.count*_,C=1;x>t.maxTextureSize&&(C=Math.ceil(x/t.maxTextureSize),x=t.maxTextureSize);const w=new Float32Array(x*C*4*f),R=new iu(w,x,C,f);R.type=zn,R.needsUpdate=!0;const A=_*4;for(let M=0;M<f;M++){const S=m[M],D=p[M],U=v[M],N=x*C*4*M;for(let z=0;z<S.count;z++){const F=z*A;d===!0&&(i.fromBufferAttribute(S,z),w[N+F+0]=i.x,w[N+F+1]=i.y,w[N+F+2]=i.z,w[N+F+3]=0),g===!0&&(i.fromBufferAttribute(D,z),w[N+F+4]=i.x,w[N+F+5]=i.y,w[N+F+6]=i.z,w[N+F+7]=0),b===!0&&(i.fromBufferAttribute(U,z),w[N+F+8]=i.x,w[N+F+9]=i.y,w[N+F+10]=i.z,w[N+F+11]=U.itemSize===4?i.w:1)}}u={count:f,texture:R,size:new ht(x,C)},n.set(o,u),o.addEventListener("dispose",y)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(s,"morphTexture",a.morphTexture,e);else{let d=0;for(let b=0;b<l.length;b++)d+=l[b];const g=o.morphTargetsRelative?1:1-d;c.getUniforms().setValue(s,"morphTargetBaseInfluence",g),c.getUniforms().setValue(s,"morphTargetInfluences",l)}c.getUniforms().setValue(s,"morphTargetsTexture",u.texture,e),c.getUniforms().setValue(s,"morphTargetsTextureSize",u.size)}return{update:r}}function yg(s,t,e,n){let i=new WeakMap;function r(c){const l=n.render.frame,h=c.geometry,f=t.get(c,h);if(i.get(f)!==l&&(t.update(f),i.set(f,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),i.get(c)!==l&&(e.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,s.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){const u=c.skeleton;i.get(u)!==l&&(u.update(),i.set(u,l))}return f}function a(){i=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:a}}class bl extends Fe{constructor(t,e,n,i,r,a,o,c,l,h=Es){if(h!==Es&&h!==Ns)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Es&&(n=Fi),n===void 0&&h===Ns&&(n=Us),super(null,i,r,a,o,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:Ze,this.minFilter=c!==void 0?c:Ze,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const uu=new Fe,Ah=new bl(1,1),du=new iu,pu=new op,mu=new hu,Rh=[],Ch=[],Ph=new Float32Array(16),Lh=new Float32Array(9),Ih=new Float32Array(4);function qs(s,t,e){const n=s[0];if(n<=0||n>0)return s;const i=t*e;let r=Rh[i];if(r===void 0&&(r=new Float32Array(i),Rh[i]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,s[a].toArray(r,o)}return r}function Oe(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function ze(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function so(s,t){let e=Ch[t];e===void 0&&(e=new Int32Array(t),Ch[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function Mg(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function Sg(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Oe(e,t))return;s.uniform2fv(this.addr,t),ze(e,t)}}function wg(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Oe(e,t))return;s.uniform3fv(this.addr,t),ze(e,t)}}function Tg(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Oe(e,t))return;s.uniform4fv(this.addr,t),ze(e,t)}}function Eg(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Oe(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),ze(e,t)}else{if(Oe(e,n))return;Ih.set(n),s.uniformMatrix2fv(this.addr,!1,Ih),ze(e,n)}}function Ag(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Oe(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),ze(e,t)}else{if(Oe(e,n))return;Lh.set(n),s.uniformMatrix3fv(this.addr,!1,Lh),ze(e,n)}}function Rg(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Oe(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),ze(e,t)}else{if(Oe(e,n))return;Ph.set(n),s.uniformMatrix4fv(this.addr,!1,Ph),ze(e,n)}}function Cg(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function Pg(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Oe(e,t))return;s.uniform2iv(this.addr,t),ze(e,t)}}function Lg(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Oe(e,t))return;s.uniform3iv(this.addr,t),ze(e,t)}}function Ig(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Oe(e,t))return;s.uniform4iv(this.addr,t),ze(e,t)}}function Dg(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function Ug(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Oe(e,t))return;s.uniform2uiv(this.addr,t),ze(e,t)}}function Ng(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Oe(e,t))return;s.uniform3uiv(this.addr,t),ze(e,t)}}function kg(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Oe(e,t))return;s.uniform4uiv(this.addr,t),ze(e,t)}}function Fg(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(Ah.compareFunction=tu,r=Ah):r=uu,e.setTexture2D(t||r,i)}function Og(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||pu,i)}function zg(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||mu,i)}function Bg(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||du,i)}function Gg(s){switch(s){case 5126:return Mg;case 35664:return Sg;case 35665:return wg;case 35666:return Tg;case 35674:return Eg;case 35675:return Ag;case 35676:return Rg;case 5124:case 35670:return Cg;case 35667:case 35671:return Pg;case 35668:case 35672:return Lg;case 35669:case 35673:return Ig;case 5125:return Dg;case 36294:return Ug;case 36295:return Ng;case 36296:return kg;case 35678:case 36198:case 36298:case 36306:case 35682:return Fg;case 35679:case 36299:case 36307:return Og;case 35680:case 36300:case 36308:case 36293:return zg;case 36289:case 36303:case 36311:case 36292:return Bg}}function Hg(s,t){s.uniform1fv(this.addr,t)}function Vg(s,t){const e=qs(t,this.size,2);s.uniform2fv(this.addr,e)}function Wg(s,t){const e=qs(t,this.size,3);s.uniform3fv(this.addr,e)}function qg(s,t){const e=qs(t,this.size,4);s.uniform4fv(this.addr,e)}function jg(s,t){const e=qs(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function Xg(s,t){const e=qs(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function Kg(s,t){const e=qs(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function Yg(s,t){s.uniform1iv(this.addr,t)}function Jg(s,t){s.uniform2iv(this.addr,t)}function Zg(s,t){s.uniform3iv(this.addr,t)}function $g(s,t){s.uniform4iv(this.addr,t)}function Qg(s,t){s.uniform1uiv(this.addr,t)}function tb(s,t){s.uniform2uiv(this.addr,t)}function eb(s,t){s.uniform3uiv(this.addr,t)}function nb(s,t){s.uniform4uiv(this.addr,t)}function ib(s,t,e){const n=this.cache,i=t.length,r=so(e,i);Oe(n,r)||(s.uniform1iv(this.addr,r),ze(n,r));for(let a=0;a!==i;++a)e.setTexture2D(t[a]||uu,r[a])}function sb(s,t,e){const n=this.cache,i=t.length,r=so(e,i);Oe(n,r)||(s.uniform1iv(this.addr,r),ze(n,r));for(let a=0;a!==i;++a)e.setTexture3D(t[a]||pu,r[a])}function rb(s,t,e){const n=this.cache,i=t.length,r=so(e,i);Oe(n,r)||(s.uniform1iv(this.addr,r),ze(n,r));for(let a=0;a!==i;++a)e.setTextureCube(t[a]||mu,r[a])}function ab(s,t,e){const n=this.cache,i=t.length,r=so(e,i);Oe(n,r)||(s.uniform1iv(this.addr,r),ze(n,r));for(let a=0;a!==i;++a)e.setTexture2DArray(t[a]||du,r[a])}function ob(s){switch(s){case 5126:return Hg;case 35664:return Vg;case 35665:return Wg;case 35666:return qg;case 35674:return jg;case 35675:return Xg;case 35676:return Kg;case 5124:case 35670:return Yg;case 35667:case 35671:return Jg;case 35668:case 35672:return Zg;case 35669:case 35673:return $g;case 5125:return Qg;case 36294:return tb;case 36295:return eb;case 36296:return nb;case 35678:case 36198:case 36298:case 36306:case 35682:return ib;case 35679:case 36299:case 36307:return sb;case 35680:case 36300:case 36308:case 36293:return rb;case 36289:case 36303:case 36311:case 36292:return ab}}class cb{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Gg(e.type)}}class lb{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=ob(e.type)}}class hb{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let r=0,a=i.length;r!==a;++r){const o=i[r];o.setValue(t,e[o.id],n)}}}const Fo=/(\w+)(\])?(\[|\.)?/g;function Dh(s,t){s.seq.push(t),s.map[t.id]=t}function fb(s,t,e){const n=s.name,i=n.length;for(Fo.lastIndex=0;;){const r=Fo.exec(n),a=Fo.lastIndex;let o=r[1];const c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===i){Dh(e,l===void 0?new cb(o,s,t):new lb(o,s,t));break}else{let f=e.map[o];f===void 0&&(f=new hb(o),Dh(e,f)),e=f}}}class Da{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=t.getActiveUniform(e,i),a=t.getUniformLocation(e,r.name);fb(r,a,this)}}setValue(t,e,n,i){const r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,a=e.length;r!==a;++r){const o=e[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,r=t.length;i!==r;++i){const a=t[i];a.id in e&&n.push(a)}return n}}function Uh(s,t,e){const n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}const ub=37297;let db=0;function pb(s,t){const e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=i;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const Nh=new Kt;function mb(s){ie._getMatrix(Nh,ie.workingColorSpace,s);const t=`mat3( ${Nh.elements.map(e=>e.toFixed(4))} )`;switch(ie.getTransfer(s)){case eo:return[t,"LinearTransferOETF"];case ve:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function kh(s,t,e){const n=s.getShaderParameter(t,s.COMPILE_STATUS),i=s.getShaderInfoLog(t).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const a=parseInt(r[1]);return e.toUpperCase()+`

`+i+`

`+pb(s.getShaderSource(t),a)}else return i}function gb(s,t){const e=mb(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function bb(s,t){let e;switch(t){case gd:e="Linear";break;case bd:e="Reinhard";break;case xd:e="Cineon";break;case vd:e="ACESFilmic";break;case yd:e="AgX";break;case Md:e="Neutral";break;case _d:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const ha=new P;function xb(){ie.getLuminanceCoefficients(ha);const s=ha.x.toFixed(4),t=ha.y.toFixed(4),e=ha.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function vb(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ur).join(`
`)}function _b(s){const t=[];for(const e in s){const n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function yb(s,t){const e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(t,i),a=r.name;let o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:s.getAttribLocation(t,a),locationSize:o}}return e}function ur(s){return s!==""}function Fh(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Oh(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Mb=/^[ \t]*#include +<([\w\d./]+)>/gm;function Vc(s){return s.replace(Mb,wb)}const Sb=new Map;function wb(s,t){let e=Jt[t];if(e===void 0){const n=Sb.get(t);if(n!==void 0)e=Jt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Vc(e)}const Tb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function zh(s){return s.replace(Tb,Eb)}function Eb(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Bh(s){let t=`precision ${s.precision} float;
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
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Ab(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Bf?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===Gf?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===oi&&(t="SHADOWMAP_TYPE_VSM"),t}function Rb(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Is:case Ds:t="ENVMAP_TYPE_CUBE";break;case $a:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Cb(s){let t="ENVMAP_MODE_REFLECTION";return s.envMap&&s.envMapMode===Ds&&(t="ENVMAP_MODE_REFRACTION"),t}function Pb(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case ol:t="ENVMAP_BLENDING_MULTIPLY";break;case pd:t="ENVMAP_BLENDING_MIX";break;case md:t="ENVMAP_BLENDING_ADD";break}return t}function Lb(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Ib(s,t,e,n){const i=s.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const c=Ab(e),l=Rb(e),h=Cb(e),f=Pb(e),u=Lb(e),d=vb(e),g=_b(r),b=i.createProgram();let m,p,v=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(ur).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(ur).join(`
`),p.length>0&&(p+=`
`)):(m=[Bh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ur).join(`
`),p=[Bh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+f:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Ni?"#define TONE_MAPPING":"",e.toneMapping!==Ni?Jt.tonemapping_pars_fragment:"",e.toneMapping!==Ni?bb("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Jt.colorspace_pars_fragment,gb("linearToOutputTexel",e.outputColorSpace),xb(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ur).join(`
`)),a=Vc(a),a=Fh(a,e),a=Oh(a,e),o=Vc(o),o=Fh(o,e),o=Oh(o,e),a=zh(a),o=zh(o),e.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===$l?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===$l?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const _=v+m+a,x=v+p+o,C=Uh(i,i.VERTEX_SHADER,_),w=Uh(i,i.FRAGMENT_SHADER,x);i.attachShader(b,C),i.attachShader(b,w),e.index0AttributeName!==void 0?i.bindAttribLocation(b,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(b,0,"position"),i.linkProgram(b);function R(S){if(s.debug.checkShaderErrors){const D=i.getProgramInfoLog(b).trim(),U=i.getShaderInfoLog(C).trim(),N=i.getShaderInfoLog(w).trim();let z=!0,F=!0;if(i.getProgramParameter(b,i.LINK_STATUS)===!1)if(z=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,b,C,w);else{const k=kh(i,C,"vertex"),H=kh(i,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(b,i.VALIDATE_STATUS)+`

Material Name: `+S.name+`
Material Type: `+S.type+`

Program Info Log: `+D+`
`+k+`
`+H)}else D!==""?console.warn("THREE.WebGLProgram: Program Info Log:",D):(U===""||N==="")&&(F=!1);F&&(S.diagnostics={runnable:z,programLog:D,vertexShader:{log:U,prefix:m},fragmentShader:{log:N,prefix:p}})}i.deleteShader(C),i.deleteShader(w),A=new Da(i,b),y=yb(i,b)}let A;this.getUniforms=function(){return A===void 0&&R(this),A};let y;this.getAttributes=function(){return y===void 0&&R(this),y};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=i.getProgramParameter(b,ub)),M},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(b),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=db++,this.cacheKey=t,this.usedTimes=1,this.program=b,this.vertexShader=C,this.fragmentShader=w,this}let Db=0;class Ub{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Nb(t),e.set(t,n)),n}}class Nb{constructor(t){this.id=Db++,this.code=t,this.usedTimes=0}}function kb(s,t,e,n,i,r,a){const o=new su,c=new Ub,l=new Set,h=[],f=i.logarithmicDepthBuffer,u=i.vertexTextures;let d=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(y){return l.add(y),y===0?"uv":`uv${y}`}function m(y,M,S,D,U){const N=D.fog,z=U.geometry,F=y.isMeshStandardMaterial?D.environment:null,k=(y.isMeshStandardMaterial?e:t).get(y.envMap||F),H=k&&k.mapping===$a?k.image.height:null,X=g[y.type];y.precision!==null&&(d=i.getMaxPrecision(y.precision),d!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",d,"instead."));const nt=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,$=nt!==void 0?nt.length:0;let St=0;z.morphAttributes.position!==void 0&&(St=1),z.morphAttributes.normal!==void 0&&(St=2),z.morphAttributes.color!==void 0&&(St=3);let Ht,j,Q,dt;if(X){const de=jn[X];Ht=de.vertexShader,j=de.fragmentShader}else Ht=y.vertexShader,j=y.fragmentShader,c.update(y),Q=c.getVertexShaderID(y),dt=c.getFragmentShaderID(y);const st=s.getRenderTarget(),vt=s.state.buffers.depth.getReversed(),Dt=U.isInstancedMesh===!0,zt=U.isBatchedMesh===!0,ne=!!y.map,tt=!!y.matcap,at=!!k,I=!!y.aoMap,Et=!!y.lightMap,rt=!!y.bumpMap,Mt=!!y.normalMap,ft=!!y.displacementMap,Bt=!!y.emissiveMap,_t=!!y.metalnessMap,L=!!y.roughnessMap,T=y.anisotropy>0,V=y.clearcoat>0,Y=y.dispersion>0,it=y.iridescence>0,Z=y.sheen>0,At=y.transmission>0,pt=T&&!!y.anisotropyMap,yt=V&&!!y.clearcoatMap,ee=V&&!!y.clearcoatNormalMap,ot=V&&!!y.clearcoatRoughnessMap,wt=it&&!!y.iridescenceMap,Gt=it&&!!y.iridescenceThicknessMap,Vt=Z&&!!y.sheenColorMap,Tt=Z&&!!y.sheenRoughnessMap,se=!!y.specularMap,Yt=!!y.specularColorMap,Se=!!y.specularIntensityMap,O=At&&!!y.transmissionMap,mt=At&&!!y.thicknessMap,K=!!y.gradientMap,et=!!y.alphaMap,xt=y.alphaTest>0,gt=!!y.alphaHash,jt=!!y.extensions;let De=Ni;y.toneMapped&&(st===null||st.isXRRenderTarget===!0)&&(De=s.toneMapping);const je={shaderID:X,shaderType:y.type,shaderName:y.name,vertexShader:Ht,fragmentShader:j,defines:y.defines,customVertexShaderID:Q,customFragmentShaderID:dt,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:d,batching:zt,batchingColor:zt&&U._colorsTexture!==null,instancing:Dt,instancingColor:Dt&&U.instanceColor!==null,instancingMorph:Dt&&U.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:st===null?s.outputColorSpace:st.isXRRenderTarget===!0?st.texture.colorSpace:tn,alphaToCoverage:!!y.alphaToCoverage,map:ne,matcap:tt,envMap:at,envMapMode:at&&k.mapping,envMapCubeUVHeight:H,aoMap:I,lightMap:Et,bumpMap:rt,normalMap:Mt,displacementMap:u&&ft,emissiveMap:Bt,normalMapObjectSpace:Mt&&y.normalMapType===Rd,normalMapTangentSpace:Mt&&y.normalMapType===to,metalnessMap:_t,roughnessMap:L,anisotropy:T,anisotropyMap:pt,clearcoat:V,clearcoatMap:yt,clearcoatNormalMap:ee,clearcoatRoughnessMap:ot,dispersion:Y,iridescence:it,iridescenceMap:wt,iridescenceThicknessMap:Gt,sheen:Z,sheenColorMap:Vt,sheenRoughnessMap:Tt,specularMap:se,specularColorMap:Yt,specularIntensityMap:Se,transmission:At,transmissionMap:O,thicknessMap:mt,gradientMap:K,opaque:y.transparent===!1&&y.blending===Ts&&y.alphaToCoverage===!1,alphaMap:et,alphaTest:xt,alphaHash:gt,combine:y.combine,mapUv:ne&&b(y.map.channel),aoMapUv:I&&b(y.aoMap.channel),lightMapUv:Et&&b(y.lightMap.channel),bumpMapUv:rt&&b(y.bumpMap.channel),normalMapUv:Mt&&b(y.normalMap.channel),displacementMapUv:ft&&b(y.displacementMap.channel),emissiveMapUv:Bt&&b(y.emissiveMap.channel),metalnessMapUv:_t&&b(y.metalnessMap.channel),roughnessMapUv:L&&b(y.roughnessMap.channel),anisotropyMapUv:pt&&b(y.anisotropyMap.channel),clearcoatMapUv:yt&&b(y.clearcoatMap.channel),clearcoatNormalMapUv:ee&&b(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ot&&b(y.clearcoatRoughnessMap.channel),iridescenceMapUv:wt&&b(y.iridescenceMap.channel),iridescenceThicknessMapUv:Gt&&b(y.iridescenceThicknessMap.channel),sheenColorMapUv:Vt&&b(y.sheenColorMap.channel),sheenRoughnessMapUv:Tt&&b(y.sheenRoughnessMap.channel),specularMapUv:se&&b(y.specularMap.channel),specularColorMapUv:Yt&&b(y.specularColorMap.channel),specularIntensityMapUv:Se&&b(y.specularIntensityMap.channel),transmissionMapUv:O&&b(y.transmissionMap.channel),thicknessMapUv:mt&&b(y.thicknessMap.channel),alphaMapUv:et&&b(y.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(Mt||T),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!z.attributes.uv&&(ne||et),fog:!!N,useFog:y.fog===!0,fogExp2:!!N&&N.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:vt,skinning:U.isSkinnedMesh===!0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:$,morphTextureStride:St,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:y.dithering,shadowMapEnabled:s.shadowMap.enabled&&S.length>0,shadowMapType:s.shadowMap.type,toneMapping:De,decodeVideoTexture:ne&&y.map.isVideoTexture===!0&&ie.getTransfer(y.map.colorSpace)===ve,decodeVideoTextureEmissive:Bt&&y.emissiveMap.isVideoTexture===!0&&ie.getTransfer(y.emissiveMap.colorSpace)===ve,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===ge,flipSided:y.side===Je,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:jt&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(jt&&y.extensions.multiDraw===!0||zt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return je.vertexUv1s=l.has(1),je.vertexUv2s=l.has(2),je.vertexUv3s=l.has(3),l.clear(),je}function p(y){const M=[];if(y.shaderID?M.push(y.shaderID):(M.push(y.customVertexShaderID),M.push(y.customFragmentShaderID)),y.defines!==void 0)for(const S in y.defines)M.push(S),M.push(y.defines[S]);return y.isRawShaderMaterial===!1&&(v(M,y),_(M,y),M.push(s.outputColorSpace)),M.push(y.customProgramCacheKey),M.join()}function v(y,M){y.push(M.precision),y.push(M.outputColorSpace),y.push(M.envMapMode),y.push(M.envMapCubeUVHeight),y.push(M.mapUv),y.push(M.alphaMapUv),y.push(M.lightMapUv),y.push(M.aoMapUv),y.push(M.bumpMapUv),y.push(M.normalMapUv),y.push(M.displacementMapUv),y.push(M.emissiveMapUv),y.push(M.metalnessMapUv),y.push(M.roughnessMapUv),y.push(M.anisotropyMapUv),y.push(M.clearcoatMapUv),y.push(M.clearcoatNormalMapUv),y.push(M.clearcoatRoughnessMapUv),y.push(M.iridescenceMapUv),y.push(M.iridescenceThicknessMapUv),y.push(M.sheenColorMapUv),y.push(M.sheenRoughnessMapUv),y.push(M.specularMapUv),y.push(M.specularColorMapUv),y.push(M.specularIntensityMapUv),y.push(M.transmissionMapUv),y.push(M.thicknessMapUv),y.push(M.combine),y.push(M.fogExp2),y.push(M.sizeAttenuation),y.push(M.morphTargetsCount),y.push(M.morphAttributeCount),y.push(M.numDirLights),y.push(M.numPointLights),y.push(M.numSpotLights),y.push(M.numSpotLightMaps),y.push(M.numHemiLights),y.push(M.numRectAreaLights),y.push(M.numDirLightShadows),y.push(M.numPointLightShadows),y.push(M.numSpotLightShadows),y.push(M.numSpotLightShadowsWithMaps),y.push(M.numLightProbes),y.push(M.shadowMapType),y.push(M.toneMapping),y.push(M.numClippingPlanes),y.push(M.numClipIntersection),y.push(M.depthPacking)}function _(y,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),M.dispersion&&o.enable(20),M.batchingColor&&o.enable(21),y.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reverseDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),y.push(o.mask)}function x(y){const M=g[y.type];let S;if(M){const D=jn[M];S=vp.clone(D.uniforms)}else S=y.uniforms;return S}function C(y,M){let S;for(let D=0,U=h.length;D<U;D++){const N=h[D];if(N.cacheKey===M){S=N,++S.usedTimes;break}}return S===void 0&&(S=new Ib(s,M,y,r),h.push(S)),S}function w(y){if(--y.usedTimes===0){const M=h.indexOf(y);h[M]=h[h.length-1],h.pop(),y.destroy()}}function R(y){c.remove(y)}function A(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:x,acquireProgram:C,releaseProgram:w,releaseShaderCache:R,programs:h,dispose:A}}function Fb(){let s=new WeakMap;function t(a){return s.has(a)}function e(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function n(a){s.delete(a)}function i(a,o,c){s.get(a)[o]=c}function r(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:r}}function Ob(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function Gh(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function Hh(){const s=[];let t=0;const e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function a(f,u,d,g,b,m){let p=s[t];return p===void 0?(p={id:f.id,object:f,geometry:u,material:d,groupOrder:g,renderOrder:f.renderOrder,z:b,group:m},s[t]=p):(p.id=f.id,p.object=f,p.geometry=u,p.material=d,p.groupOrder=g,p.renderOrder=f.renderOrder,p.z=b,p.group=m),t++,p}function o(f,u,d,g,b,m){const p=a(f,u,d,g,b,m);d.transmission>0?n.push(p):d.transparent===!0?i.push(p):e.push(p)}function c(f,u,d,g,b,m){const p=a(f,u,d,g,b,m);d.transmission>0?n.unshift(p):d.transparent===!0?i.unshift(p):e.unshift(p)}function l(f,u){e.length>1&&e.sort(f||Ob),n.length>1&&n.sort(u||Gh),i.length>1&&i.sort(u||Gh)}function h(){for(let f=t,u=s.length;f<u;f++){const d=s[f];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:o,unshift:c,finish:h,sort:l}}function zb(){let s=new WeakMap;function t(n,i){const r=s.get(n);let a;return r===void 0?(a=new Hh,s.set(n,[a])):i>=r.length?(a=new Hh,r.push(a)):a=r[i],a}function e(){s=new WeakMap}return{get:t,dispose:e}}function Bb(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new P,color:new ct};break;case"SpotLight":e={position:new P,direction:new P,color:new ct,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new P,color:new ct,distance:0,decay:0};break;case"HemisphereLight":e={direction:new P,skyColor:new ct,groundColor:new ct};break;case"RectAreaLight":e={color:new ct,position:new P,halfWidth:new P,halfHeight:new P};break}return s[t.id]=e,e}}}function Gb(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let Hb=0;function Vb(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function Wb(s){const t=new Bb,e=Gb(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new P);const i=new P,r=new kt,a=new kt;function o(l){let h=0,f=0,u=0;for(let y=0;y<9;y++)n.probe[y].set(0,0,0);let d=0,g=0,b=0,m=0,p=0,v=0,_=0,x=0,C=0,w=0,R=0;l.sort(Vb);for(let y=0,M=l.length;y<M;y++){const S=l[y],D=S.color,U=S.intensity,N=S.distance,z=S.shadow&&S.shadow.map?S.shadow.map.texture:null;if(S.isAmbientLight)h+=D.r*U,f+=D.g*U,u+=D.b*U;else if(S.isLightProbe){for(let F=0;F<9;F++)n.probe[F].addScaledVector(S.sh.coefficients[F],U);R++}else if(S.isDirectionalLight){const F=t.get(S);if(F.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){const k=S.shadow,H=e.get(S);H.shadowIntensity=k.intensity,H.shadowBias=k.bias,H.shadowNormalBias=k.normalBias,H.shadowRadius=k.radius,H.shadowMapSize=k.mapSize,n.directionalShadow[d]=H,n.directionalShadowMap[d]=z,n.directionalShadowMatrix[d]=S.shadow.matrix,v++}n.directional[d]=F,d++}else if(S.isSpotLight){const F=t.get(S);F.position.setFromMatrixPosition(S.matrixWorld),F.color.copy(D).multiplyScalar(U),F.distance=N,F.coneCos=Math.cos(S.angle),F.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),F.decay=S.decay,n.spot[b]=F;const k=S.shadow;if(S.map&&(n.spotLightMap[C]=S.map,C++,k.updateMatrices(S),S.castShadow&&w++),n.spotLightMatrix[b]=k.matrix,S.castShadow){const H=e.get(S);H.shadowIntensity=k.intensity,H.shadowBias=k.bias,H.shadowNormalBias=k.normalBias,H.shadowRadius=k.radius,H.shadowMapSize=k.mapSize,n.spotShadow[b]=H,n.spotShadowMap[b]=z,x++}b++}else if(S.isRectAreaLight){const F=t.get(S);F.color.copy(D).multiplyScalar(U),F.halfWidth.set(S.width*.5,0,0),F.halfHeight.set(0,S.height*.5,0),n.rectArea[m]=F,m++}else if(S.isPointLight){const F=t.get(S);if(F.color.copy(S.color).multiplyScalar(S.intensity),F.distance=S.distance,F.decay=S.decay,S.castShadow){const k=S.shadow,H=e.get(S);H.shadowIntensity=k.intensity,H.shadowBias=k.bias,H.shadowNormalBias=k.normalBias,H.shadowRadius=k.radius,H.shadowMapSize=k.mapSize,H.shadowCameraNear=k.camera.near,H.shadowCameraFar=k.camera.far,n.pointShadow[g]=H,n.pointShadowMap[g]=z,n.pointShadowMatrix[g]=S.shadow.matrix,_++}n.point[g]=F,g++}else if(S.isHemisphereLight){const F=t.get(S);F.skyColor.copy(S.color).multiplyScalar(U),F.groundColor.copy(S.groundColor).multiplyScalar(U),n.hemi[p]=F,p++}}m>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ut.LTC_FLOAT_1,n.rectAreaLTC2=ut.LTC_FLOAT_2):(n.rectAreaLTC1=ut.LTC_HALF_1,n.rectAreaLTC2=ut.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=f,n.ambient[2]=u;const A=n.hash;(A.directionalLength!==d||A.pointLength!==g||A.spotLength!==b||A.rectAreaLength!==m||A.hemiLength!==p||A.numDirectionalShadows!==v||A.numPointShadows!==_||A.numSpotShadows!==x||A.numSpotMaps!==C||A.numLightProbes!==R)&&(n.directional.length=d,n.spot.length=b,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.pointShadow.length=_,n.pointShadowMap.length=_,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=v,n.pointShadowMatrix.length=_,n.spotLightMatrix.length=x+C-w,n.spotLightMap.length=C,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=R,A.directionalLength=d,A.pointLength=g,A.spotLength=b,A.rectAreaLength=m,A.hemiLength=p,A.numDirectionalShadows=v,A.numPointShadows=_,A.numSpotShadows=x,A.numSpotMaps=C,A.numLightProbes=R,n.version=Hb++)}function c(l,h){let f=0,u=0,d=0,g=0,b=0;const m=h.matrixWorldInverse;for(let p=0,v=l.length;p<v;p++){const _=l[p];if(_.isDirectionalLight){const x=n.directional[f];x.direction.setFromMatrixPosition(_.matrixWorld),i.setFromMatrixPosition(_.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(m),f++}else if(_.isSpotLight){const x=n.spot[d];x.position.setFromMatrixPosition(_.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(_.matrixWorld),i.setFromMatrixPosition(_.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(m),d++}else if(_.isRectAreaLight){const x=n.rectArea[g];x.position.setFromMatrixPosition(_.matrixWorld),x.position.applyMatrix4(m),a.identity(),r.copy(_.matrixWorld),r.premultiply(m),a.extractRotation(r),x.halfWidth.set(_.width*.5,0,0),x.halfHeight.set(0,_.height*.5,0),x.halfWidth.applyMatrix4(a),x.halfHeight.applyMatrix4(a),g++}else if(_.isPointLight){const x=n.point[u];x.position.setFromMatrixPosition(_.matrixWorld),x.position.applyMatrix4(m),u++}else if(_.isHemisphereLight){const x=n.hemi[b];x.direction.setFromMatrixPosition(_.matrixWorld),x.direction.transformDirection(m),b++}}}return{setup:o,setupView:c,state:n}}function Vh(s){const t=new Wb(s),e=[],n=[];function i(h){l.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function a(h){n.push(h)}function o(){t.setup(e)}function c(h){t.setupView(e,h)}const l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:l,setupLights:o,setupLightsView:c,pushLight:r,pushShadow:a}}function qb(s){let t=new WeakMap;function e(i,r=0){const a=t.get(i);let o;return a===void 0?(o=new Vh(s),t.set(i,[o])):r>=a.length?(o=new Vh(s),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}class jb extends Sn{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Ed,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Xb extends Sn{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Kb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Yb=`uniform sampler2D shadow_pass;
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
}`;function Jb(s,t,e){let n=new ml;const i=new ht,r=new ht,a=new le,o=new jb({depthPacking:Ad}),c=new Xb,l={},h=e.maxTextureSize,f={[gi]:Je,[Je]:gi,[ge]:ge},u=new rn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ht},radius:{value:4}},vertexShader:Kb,fragmentShader:Yb}),d=u.clone();d.defines.HORIZONTAL_PASS=1;const g=new xe;g.setAttribute("position",new be(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const b=new J(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Bf;let p=this.type;this.render=function(w,R,A){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;const y=s.getRenderTarget(),M=s.getActiveCubeFace(),S=s.getActiveMipmapLevel(),D=s.state;D.setBlending(Ui),D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);const U=p!==oi&&this.type===oi,N=p===oi&&this.type!==oi;for(let z=0,F=w.length;z<F;z++){const k=w[z],H=k.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",k,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;i.copy(H.mapSize);const X=H.getFrameExtents();if(i.multiply(X),r.copy(H.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/X.x),i.x=r.x*X.x,H.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/X.y),i.y=r.y*X.y,H.mapSize.y=r.y)),H.map===null||U===!0||N===!0){const $=this.type!==oi?{minFilter:Ze,magFilter:Ze}:{};H.map!==null&&H.map.dispose(),H.map=new xi(i.x,i.y,$),H.map.texture.name=k.name+".shadowMap",H.camera.updateProjectionMatrix()}s.setRenderTarget(H.map),s.clear();const nt=H.getViewportCount();for(let $=0;$<nt;$++){const St=H.getViewport($);a.set(r.x*St.x,r.y*St.y,r.x*St.z,r.y*St.w),D.viewport(a),H.updateMatrices(k,$),n=H.getFrustum(),x(R,A,H.camera,k,this.type)}H.isPointLightShadow!==!0&&this.type===oi&&v(H,A),H.needsUpdate=!1}p=this.type,m.needsUpdate=!1,s.setRenderTarget(y,M,S)};function v(w,R){const A=t.update(b);u.defines.VSM_SAMPLES!==w.blurSamples&&(u.defines.VSM_SAMPLES=w.blurSamples,d.defines.VSM_SAMPLES=w.blurSamples,u.needsUpdate=!0,d.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new xi(i.x,i.y)),u.uniforms.shadow_pass.value=w.map.texture,u.uniforms.resolution.value=w.mapSize,u.uniforms.radius.value=w.radius,s.setRenderTarget(w.mapPass),s.clear(),s.renderBufferDirect(R,null,A,u,b,null),d.uniforms.shadow_pass.value=w.mapPass.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,s.setRenderTarget(w.map),s.clear(),s.renderBufferDirect(R,null,A,d,b,null)}function _(w,R,A,y){let M=null;const S=A.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(S!==void 0)M=S;else if(M=A.isPointLight===!0?c:o,s.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const D=M.uuid,U=R.uuid;let N=l[D];N===void 0&&(N={},l[D]=N);let z=N[U];z===void 0&&(z=M.clone(),N[U]=z,R.addEventListener("dispose",C)),M=z}if(M.visible=R.visible,M.wireframe=R.wireframe,y===oi?M.side=R.shadowSide!==null?R.shadowSide:R.side:M.side=R.shadowSide!==null?R.shadowSide:f[R.side],M.alphaMap=R.alphaMap,M.alphaTest=R.alphaTest,M.map=R.map,M.clipShadows=R.clipShadows,M.clippingPlanes=R.clippingPlanes,M.clipIntersection=R.clipIntersection,M.displacementMap=R.displacementMap,M.displacementScale=R.displacementScale,M.displacementBias=R.displacementBias,M.wireframeLinewidth=R.wireframeLinewidth,M.linewidth=R.linewidth,A.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const D=s.properties.get(M);D.light=A}return M}function x(w,R,A,y,M){if(w.visible===!1)return;if(w.layers.test(R.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&M===oi)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,w.matrixWorld);const U=t.update(w),N=w.material;if(Array.isArray(N)){const z=U.groups;for(let F=0,k=z.length;F<k;F++){const H=z[F],X=N[H.materialIndex];if(X&&X.visible){const nt=_(w,X,y,M);w.onBeforeShadow(s,w,R,A,U,nt,H),s.renderBufferDirect(A,null,U,nt,w,H),w.onAfterShadow(s,w,R,A,U,nt,H)}}}else if(N.visible){const z=_(w,N,y,M);w.onBeforeShadow(s,w,R,A,U,z,null),s.renderBufferDirect(A,null,U,z,w,null),w.onAfterShadow(s,w,R,A,U,z,null)}}const D=w.children;for(let U=0,N=D.length;U<N;U++)x(D[U],R,A,y,M)}function C(w){w.target.removeEventListener("dispose",C);for(const A in l){const y=l[A],M=w.target.uuid;M in y&&(y[M].dispose(),delete y[M])}}}const Zb={[ac]:oc,[cc]:fc,[lc]:uc,[Ls]:hc,[oc]:ac,[fc]:cc,[uc]:lc,[hc]:Ls};function $b(s,t){function e(){let O=!1;const mt=new le;let K=null;const et=new le(0,0,0,0);return{setMask:function(xt){K!==xt&&!O&&(s.colorMask(xt,xt,xt,xt),K=xt)},setLocked:function(xt){O=xt},setClear:function(xt,gt,jt,De,je){je===!0&&(xt*=De,gt*=De,jt*=De),mt.set(xt,gt,jt,De),et.equals(mt)===!1&&(s.clearColor(xt,gt,jt,De),et.copy(mt))},reset:function(){O=!1,K=null,et.set(-1,0,0,0)}}}function n(){let O=!1,mt=!1,K=null,et=null,xt=null;return{setReversed:function(gt){if(mt!==gt){const jt=t.get("EXT_clip_control");mt?jt.clipControlEXT(jt.LOWER_LEFT_EXT,jt.ZERO_TO_ONE_EXT):jt.clipControlEXT(jt.LOWER_LEFT_EXT,jt.NEGATIVE_ONE_TO_ONE_EXT);const De=xt;xt=null,this.setClear(De)}mt=gt},getReversed:function(){return mt},setTest:function(gt){gt?st(s.DEPTH_TEST):vt(s.DEPTH_TEST)},setMask:function(gt){K!==gt&&!O&&(s.depthMask(gt),K=gt)},setFunc:function(gt){if(mt&&(gt=Zb[gt]),et!==gt){switch(gt){case ac:s.depthFunc(s.NEVER);break;case oc:s.depthFunc(s.ALWAYS);break;case cc:s.depthFunc(s.LESS);break;case Ls:s.depthFunc(s.LEQUAL);break;case lc:s.depthFunc(s.EQUAL);break;case hc:s.depthFunc(s.GEQUAL);break;case fc:s.depthFunc(s.GREATER);break;case uc:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}et=gt}},setLocked:function(gt){O=gt},setClear:function(gt){xt!==gt&&(mt&&(gt=1-gt),s.clearDepth(gt),xt=gt)},reset:function(){O=!1,K=null,et=null,xt=null,mt=!1}}}function i(){let O=!1,mt=null,K=null,et=null,xt=null,gt=null,jt=null,De=null,je=null;return{setTest:function(de){O||(de?st(s.STENCIL_TEST):vt(s.STENCIL_TEST))},setMask:function(de){mt!==de&&!O&&(s.stencilMask(de),mt=de)},setFunc:function(de,Rn,Qn){(K!==de||et!==Rn||xt!==Qn)&&(s.stencilFunc(de,Rn,Qn),K=de,et=Rn,xt=Qn)},setOp:function(de,Rn,Qn){(gt!==de||jt!==Rn||De!==Qn)&&(s.stencilOp(de,Rn,Qn),gt=de,jt=Rn,De=Qn)},setLocked:function(de){O=de},setClear:function(de){je!==de&&(s.clearStencil(de),je=de)},reset:function(){O=!1,mt=null,K=null,et=null,xt=null,gt=null,jt=null,De=null,je=null}}}const r=new e,a=new n,o=new i,c=new WeakMap,l=new WeakMap;let h={},f={},u=new WeakMap,d=[],g=null,b=!1,m=null,p=null,v=null,_=null,x=null,C=null,w=null,R=new ct(0,0,0),A=0,y=!1,M=null,S=null,D=null,U=null,N=null;const z=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let F=!1,k=0;const H=s.getParameter(s.VERSION);H.indexOf("WebGL")!==-1?(k=parseFloat(/^WebGL (\d)/.exec(H)[1]),F=k>=1):H.indexOf("OpenGL ES")!==-1&&(k=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),F=k>=2);let X=null,nt={};const $=s.getParameter(s.SCISSOR_BOX),St=s.getParameter(s.VIEWPORT),Ht=new le().fromArray($),j=new le().fromArray(St);function Q(O,mt,K,et){const xt=new Uint8Array(4),gt=s.createTexture();s.bindTexture(O,gt),s.texParameteri(O,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(O,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let jt=0;jt<K;jt++)O===s.TEXTURE_3D||O===s.TEXTURE_2D_ARRAY?s.texImage3D(mt,0,s.RGBA,1,1,et,0,s.RGBA,s.UNSIGNED_BYTE,xt):s.texImage2D(mt+jt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,xt);return gt}const dt={};dt[s.TEXTURE_2D]=Q(s.TEXTURE_2D,s.TEXTURE_2D,1),dt[s.TEXTURE_CUBE_MAP]=Q(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),dt[s.TEXTURE_2D_ARRAY]=Q(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),dt[s.TEXTURE_3D]=Q(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),st(s.DEPTH_TEST),a.setFunc(Ls),rt(!1),Mt(Wl),st(s.CULL_FACE),I(Ui);function st(O){h[O]!==!0&&(s.enable(O),h[O]=!0)}function vt(O){h[O]!==!1&&(s.disable(O),h[O]=!1)}function Dt(O,mt){return f[O]!==mt?(s.bindFramebuffer(O,mt),f[O]=mt,O===s.DRAW_FRAMEBUFFER&&(f[s.FRAMEBUFFER]=mt),O===s.FRAMEBUFFER&&(f[s.DRAW_FRAMEBUFFER]=mt),!0):!1}function zt(O,mt){let K=d,et=!1;if(O){K=u.get(mt),K===void 0&&(K=[],u.set(mt,K));const xt=O.textures;if(K.length!==xt.length||K[0]!==s.COLOR_ATTACHMENT0){for(let gt=0,jt=xt.length;gt<jt;gt++)K[gt]=s.COLOR_ATTACHMENT0+gt;K.length=xt.length,et=!0}}else K[0]!==s.BACK&&(K[0]=s.BACK,et=!0);et&&s.drawBuffers(K)}function ne(O){return g!==O?(s.useProgram(O),g=O,!0):!1}const tt={[Ji]:s.FUNC_ADD,[Zu]:s.FUNC_SUBTRACT,[$u]:s.FUNC_REVERSE_SUBTRACT};tt[Qu]=s.MIN,tt[td]=s.MAX;const at={[ed]:s.ZERO,[nd]:s.ONE,[id]:s.SRC_COLOR,[sc]:s.SRC_ALPHA,[ld]:s.SRC_ALPHA_SATURATE,[od]:s.DST_COLOR,[rd]:s.DST_ALPHA,[sd]:s.ONE_MINUS_SRC_COLOR,[rc]:s.ONE_MINUS_SRC_ALPHA,[cd]:s.ONE_MINUS_DST_COLOR,[ad]:s.ONE_MINUS_DST_ALPHA,[hd]:s.CONSTANT_COLOR,[fd]:s.ONE_MINUS_CONSTANT_COLOR,[ud]:s.CONSTANT_ALPHA,[dd]:s.ONE_MINUS_CONSTANT_ALPHA};function I(O,mt,K,et,xt,gt,jt,De,je,de){if(O===Ui){b===!0&&(vt(s.BLEND),b=!1);return}if(b===!1&&(st(s.BLEND),b=!0),O!==Ju){if(O!==m||de!==y){if((p!==Ji||x!==Ji)&&(s.blendEquation(s.FUNC_ADD),p=Ji,x=Ji),de)switch(O){case Ts:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case ic:s.blendFunc(s.ONE,s.ONE);break;case ql:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case jl:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case Ts:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case ic:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case ql:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case jl:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}v=null,_=null,C=null,w=null,R.set(0,0,0),A=0,m=O,y=de}return}xt=xt||mt,gt=gt||K,jt=jt||et,(mt!==p||xt!==x)&&(s.blendEquationSeparate(tt[mt],tt[xt]),p=mt,x=xt),(K!==v||et!==_||gt!==C||jt!==w)&&(s.blendFuncSeparate(at[K],at[et],at[gt],at[jt]),v=K,_=et,C=gt,w=jt),(De.equals(R)===!1||je!==A)&&(s.blendColor(De.r,De.g,De.b,je),R.copy(De),A=je),m=O,y=!1}function Et(O,mt){O.side===ge?vt(s.CULL_FACE):st(s.CULL_FACE);let K=O.side===Je;mt&&(K=!K),rt(K),O.blending===Ts&&O.transparent===!1?I(Ui):I(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),a.setFunc(O.depthFunc),a.setTest(O.depthTest),a.setMask(O.depthWrite),r.setMask(O.colorWrite);const et=O.stencilWrite;o.setTest(et),et&&(o.setMask(O.stencilWriteMask),o.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),o.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),Bt(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?st(s.SAMPLE_ALPHA_TO_COVERAGE):vt(s.SAMPLE_ALPHA_TO_COVERAGE)}function rt(O){M!==O&&(O?s.frontFace(s.CW):s.frontFace(s.CCW),M=O)}function Mt(O){O!==Ku?(st(s.CULL_FACE),O!==S&&(O===Wl?s.cullFace(s.BACK):O===Yu?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):vt(s.CULL_FACE),S=O}function ft(O){O!==D&&(F&&s.lineWidth(O),D=O)}function Bt(O,mt,K){O?(st(s.POLYGON_OFFSET_FILL),(U!==mt||N!==K)&&(s.polygonOffset(mt,K),U=mt,N=K)):vt(s.POLYGON_OFFSET_FILL)}function _t(O){O?st(s.SCISSOR_TEST):vt(s.SCISSOR_TEST)}function L(O){O===void 0&&(O=s.TEXTURE0+z-1),X!==O&&(s.activeTexture(O),X=O)}function T(O,mt,K){K===void 0&&(X===null?K=s.TEXTURE0+z-1:K=X);let et=nt[K];et===void 0&&(et={type:void 0,texture:void 0},nt[K]=et),(et.type!==O||et.texture!==mt)&&(X!==K&&(s.activeTexture(K),X=K),s.bindTexture(O,mt||dt[O]),et.type=O,et.texture=mt)}function V(){const O=nt[X];O!==void 0&&O.type!==void 0&&(s.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function Y(){try{s.compressedTexImage2D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function it(){try{s.compressedTexImage3D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Z(){try{s.texSubImage2D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function At(){try{s.texSubImage3D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function pt(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function yt(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ee(){try{s.texStorage2D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ot(){try{s.texStorage3D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function wt(){try{s.texImage2D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Gt(){try{s.texImage3D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Vt(O){Ht.equals(O)===!1&&(s.scissor(O.x,O.y,O.z,O.w),Ht.copy(O))}function Tt(O){j.equals(O)===!1&&(s.viewport(O.x,O.y,O.z,O.w),j.copy(O))}function se(O,mt){let K=l.get(mt);K===void 0&&(K=new WeakMap,l.set(mt,K));let et=K.get(O);et===void 0&&(et=s.getUniformBlockIndex(mt,O.name),K.set(O,et))}function Yt(O,mt){const et=l.get(mt).get(O);c.get(mt)!==et&&(s.uniformBlockBinding(mt,et,O.__bindingPointIndex),c.set(mt,et))}function Se(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),a.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},X=null,nt={},f={},u=new WeakMap,d=[],g=null,b=!1,m=null,p=null,v=null,_=null,x=null,C=null,w=null,R=new ct(0,0,0),A=0,y=!1,M=null,S=null,D=null,U=null,N=null,Ht.set(0,0,s.canvas.width,s.canvas.height),j.set(0,0,s.canvas.width,s.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:st,disable:vt,bindFramebuffer:Dt,drawBuffers:zt,useProgram:ne,setBlending:I,setMaterial:Et,setFlipSided:rt,setCullFace:Mt,setLineWidth:ft,setPolygonOffset:Bt,setScissorTest:_t,activeTexture:L,bindTexture:T,unbindTexture:V,compressedTexImage2D:Y,compressedTexImage3D:it,texImage2D:wt,texImage3D:Gt,updateUBOMapping:se,uniformBlockBinding:Yt,texStorage2D:ee,texStorage3D:ot,texSubImage2D:Z,texSubImage3D:At,compressedTexSubImage2D:pt,compressedTexSubImage3D:yt,scissor:Vt,viewport:Tt,reset:Se}}function Wh(s,t,e,n){const i=Qb(n);switch(e){case Xf:return s*t;case Yf:return s*t;case Jf:return s*t*2;case Qa:return s*t/i.components*i.byteLength;case fl:return s*t/i.components*i.byteLength;case Zf:return s*t*2/i.components*i.byteLength;case ul:return s*t*2/i.components*i.byteLength;case Kf:return s*t*3/i.components*i.byteLength;case vn:return s*t*4/i.components*i.byteLength;case dl:return s*t*4/i.components*i.byteLength;case Ra:case Ca:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Pa:case La:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case gc:case xc:return Math.max(s,16)*Math.max(t,8)/4;case mc:case bc:return Math.max(s,8)*Math.max(t,8)/2;case vc:case _c:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case yc:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Mc:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Sc:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case wc:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case Tc:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case Ec:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case Ac:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case Rc:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case Cc:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case Pc:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case Lc:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case Ic:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case Dc:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case Uc:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case Nc:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case Ia:case kc:case Fc:return Math.ceil(s/4)*Math.ceil(t/4)*16;case $f:case Oc:return Math.ceil(s/4)*Math.ceil(t/4)*8;case zc:case Bc:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Qb(s){switch(s){case bi:case Wf:return{byteLength:1,components:1};case Rr:case qf:case Vs:return{byteLength:2,components:1};case ll:case hl:return{byteLength:2,components:4};case Fi:case cl:case zn:return{byteLength:4,components:1};case jf:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function tx(s,t,e,n,i,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new ht,h=new WeakMap;let f;const u=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(L,T){return d?new OffscreenCanvas(L,T):Lr("canvas")}function b(L,T,V){let Y=1;const it=_t(L);if((it.width>V||it.height>V)&&(Y=V/Math.max(it.width,it.height)),Y<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const Z=Math.floor(Y*it.width),At=Math.floor(Y*it.height);f===void 0&&(f=g(Z,At));const pt=T?g(Z,At):f;return pt.width=Z,pt.height=At,pt.getContext("2d").drawImage(L,0,0,Z,At),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+it.width+"x"+it.height+") to ("+Z+"x"+At+")."),pt}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+it.width+"x"+it.height+")."),L;return L}function m(L){return L.generateMipmaps}function p(L){s.generateMipmap(L)}function v(L){return L.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?s.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function _(L,T,V,Y,it=!1){if(L!==null){if(s[L]!==void 0)return s[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let Z=T;if(T===s.RED&&(V===s.FLOAT&&(Z=s.R32F),V===s.HALF_FLOAT&&(Z=s.R16F),V===s.UNSIGNED_BYTE&&(Z=s.R8)),T===s.RED_INTEGER&&(V===s.UNSIGNED_BYTE&&(Z=s.R8UI),V===s.UNSIGNED_SHORT&&(Z=s.R16UI),V===s.UNSIGNED_INT&&(Z=s.R32UI),V===s.BYTE&&(Z=s.R8I),V===s.SHORT&&(Z=s.R16I),V===s.INT&&(Z=s.R32I)),T===s.RG&&(V===s.FLOAT&&(Z=s.RG32F),V===s.HALF_FLOAT&&(Z=s.RG16F),V===s.UNSIGNED_BYTE&&(Z=s.RG8)),T===s.RG_INTEGER&&(V===s.UNSIGNED_BYTE&&(Z=s.RG8UI),V===s.UNSIGNED_SHORT&&(Z=s.RG16UI),V===s.UNSIGNED_INT&&(Z=s.RG32UI),V===s.BYTE&&(Z=s.RG8I),V===s.SHORT&&(Z=s.RG16I),V===s.INT&&(Z=s.RG32I)),T===s.RGB_INTEGER&&(V===s.UNSIGNED_BYTE&&(Z=s.RGB8UI),V===s.UNSIGNED_SHORT&&(Z=s.RGB16UI),V===s.UNSIGNED_INT&&(Z=s.RGB32UI),V===s.BYTE&&(Z=s.RGB8I),V===s.SHORT&&(Z=s.RGB16I),V===s.INT&&(Z=s.RGB32I)),T===s.RGBA_INTEGER&&(V===s.UNSIGNED_BYTE&&(Z=s.RGBA8UI),V===s.UNSIGNED_SHORT&&(Z=s.RGBA16UI),V===s.UNSIGNED_INT&&(Z=s.RGBA32UI),V===s.BYTE&&(Z=s.RGBA8I),V===s.SHORT&&(Z=s.RGBA16I),V===s.INT&&(Z=s.RGBA32I)),T===s.RGB&&V===s.UNSIGNED_INT_5_9_9_9_REV&&(Z=s.RGB9_E5),T===s.RGBA){const At=it?eo:ie.getTransfer(Y);V===s.FLOAT&&(Z=s.RGBA32F),V===s.HALF_FLOAT&&(Z=s.RGBA16F),V===s.UNSIGNED_BYTE&&(Z=At===ve?s.SRGB8_ALPHA8:s.RGBA8),V===s.UNSIGNED_SHORT_4_4_4_4&&(Z=s.RGBA4),V===s.UNSIGNED_SHORT_5_5_5_1&&(Z=s.RGB5_A1)}return(Z===s.R16F||Z===s.R32F||Z===s.RG16F||Z===s.RG32F||Z===s.RGBA16F||Z===s.RGBA32F)&&t.get("EXT_color_buffer_float"),Z}function x(L,T){let V;return L?T===null||T===Fi||T===Us?V=s.DEPTH24_STENCIL8:T===zn?V=s.DEPTH32F_STENCIL8:T===Rr&&(V=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Fi||T===Us?V=s.DEPTH_COMPONENT24:T===zn?V=s.DEPTH_COMPONENT32F:T===Rr&&(V=s.DEPTH_COMPONENT16),V}function C(L,T){return m(L)===!0||L.isFramebufferTexture&&L.minFilter!==Ze&&L.minFilter!==fn?Math.log2(Math.max(T.width,T.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?T.mipmaps.length:1}function w(L){const T=L.target;T.removeEventListener("dispose",w),A(T),T.isVideoTexture&&h.delete(T)}function R(L){const T=L.target;T.removeEventListener("dispose",R),M(T)}function A(L){const T=n.get(L);if(T.__webglInit===void 0)return;const V=L.source,Y=u.get(V);if(Y){const it=Y[T.__cacheKey];it.usedTimes--,it.usedTimes===0&&y(L),Object.keys(Y).length===0&&u.delete(V)}n.remove(L)}function y(L){const T=n.get(L);s.deleteTexture(T.__webglTexture);const V=L.source,Y=u.get(V);delete Y[T.__cacheKey],a.memory.textures--}function M(L){const T=n.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),n.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(T.__webglFramebuffer[Y]))for(let it=0;it<T.__webglFramebuffer[Y].length;it++)s.deleteFramebuffer(T.__webglFramebuffer[Y][it]);else s.deleteFramebuffer(T.__webglFramebuffer[Y]);T.__webglDepthbuffer&&s.deleteRenderbuffer(T.__webglDepthbuffer[Y])}else{if(Array.isArray(T.__webglFramebuffer))for(let Y=0;Y<T.__webglFramebuffer.length;Y++)s.deleteFramebuffer(T.__webglFramebuffer[Y]);else s.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&s.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&s.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let Y=0;Y<T.__webglColorRenderbuffer.length;Y++)T.__webglColorRenderbuffer[Y]&&s.deleteRenderbuffer(T.__webglColorRenderbuffer[Y]);T.__webglDepthRenderbuffer&&s.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const V=L.textures;for(let Y=0,it=V.length;Y<it;Y++){const Z=n.get(V[Y]);Z.__webglTexture&&(s.deleteTexture(Z.__webglTexture),a.memory.textures--),n.remove(V[Y])}n.remove(L)}let S=0;function D(){S=0}function U(){const L=S;return L>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+i.maxTextures),S+=1,L}function N(L){const T=[];return T.push(L.wrapS),T.push(L.wrapT),T.push(L.wrapR||0),T.push(L.magFilter),T.push(L.minFilter),T.push(L.anisotropy),T.push(L.internalFormat),T.push(L.format),T.push(L.type),T.push(L.generateMipmaps),T.push(L.premultiplyAlpha),T.push(L.flipY),T.push(L.unpackAlignment),T.push(L.colorSpace),T.join()}function z(L,T){const V=n.get(L);if(L.isVideoTexture&&ft(L),L.isRenderTargetTexture===!1&&L.version>0&&V.__version!==L.version){const Y=L.image;if(Y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{j(V,L,T);return}}e.bindTexture(s.TEXTURE_2D,V.__webglTexture,s.TEXTURE0+T)}function F(L,T){const V=n.get(L);if(L.version>0&&V.__version!==L.version){j(V,L,T);return}e.bindTexture(s.TEXTURE_2D_ARRAY,V.__webglTexture,s.TEXTURE0+T)}function k(L,T){const V=n.get(L);if(L.version>0&&V.__version!==L.version){j(V,L,T);return}e.bindTexture(s.TEXTURE_3D,V.__webglTexture,s.TEXTURE0+T)}function H(L,T){const V=n.get(L);if(L.version>0&&V.__version!==L.version){Q(V,L,T);return}e.bindTexture(s.TEXTURE_CUBE_MAP,V.__webglTexture,s.TEXTURE0+T)}const X={[ki]:s.REPEAT,[Pi]:s.CLAMP_TO_EDGE,[ka]:s.MIRRORED_REPEAT},nt={[Ze]:s.NEAREST,[Vf]:s.NEAREST_MIPMAP_NEAREST,[hr]:s.NEAREST_MIPMAP_LINEAR,[fn]:s.LINEAR,[Aa]:s.LINEAR_MIPMAP_NEAREST,[fi]:s.LINEAR_MIPMAP_LINEAR},$={[Cd]:s.NEVER,[Nd]:s.ALWAYS,[Pd]:s.LESS,[tu]:s.LEQUAL,[Ld]:s.EQUAL,[Ud]:s.GEQUAL,[Id]:s.GREATER,[Dd]:s.NOTEQUAL};function St(L,T){if(T.type===zn&&t.has("OES_texture_float_linear")===!1&&(T.magFilter===fn||T.magFilter===Aa||T.magFilter===hr||T.magFilter===fi||T.minFilter===fn||T.minFilter===Aa||T.minFilter===hr||T.minFilter===fi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(L,s.TEXTURE_WRAP_S,X[T.wrapS]),s.texParameteri(L,s.TEXTURE_WRAP_T,X[T.wrapT]),(L===s.TEXTURE_3D||L===s.TEXTURE_2D_ARRAY)&&s.texParameteri(L,s.TEXTURE_WRAP_R,X[T.wrapR]),s.texParameteri(L,s.TEXTURE_MAG_FILTER,nt[T.magFilter]),s.texParameteri(L,s.TEXTURE_MIN_FILTER,nt[T.minFilter]),T.compareFunction&&(s.texParameteri(L,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(L,s.TEXTURE_COMPARE_FUNC,$[T.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===Ze||T.minFilter!==hr&&T.minFilter!==fi||T.type===zn&&t.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||n.get(T).__currentAnisotropy){const V=t.get("EXT_texture_filter_anisotropic");s.texParameterf(L,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,i.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy}}}function Ht(L,T){let V=!1;L.__webglInit===void 0&&(L.__webglInit=!0,T.addEventListener("dispose",w));const Y=T.source;let it=u.get(Y);it===void 0&&(it={},u.set(Y,it));const Z=N(T);if(Z!==L.__cacheKey){it[Z]===void 0&&(it[Z]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,V=!0),it[Z].usedTimes++;const At=it[L.__cacheKey];At!==void 0&&(it[L.__cacheKey].usedTimes--,At.usedTimes===0&&y(T)),L.__cacheKey=Z,L.__webglTexture=it[Z].texture}return V}function j(L,T,V){let Y=s.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(Y=s.TEXTURE_2D_ARRAY),T.isData3DTexture&&(Y=s.TEXTURE_3D);const it=Ht(L,T),Z=T.source;e.bindTexture(Y,L.__webglTexture,s.TEXTURE0+V);const At=n.get(Z);if(Z.version!==At.__version||it===!0){e.activeTexture(s.TEXTURE0+V);const pt=ie.getPrimaries(ie.workingColorSpace),yt=T.colorSpace===Ci?null:ie.getPrimaries(T.colorSpace),ee=T.colorSpace===Ci||pt===yt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ee);let ot=b(T.image,!1,i.maxTextureSize);ot=Bt(T,ot);const wt=r.convert(T.format,T.colorSpace),Gt=r.convert(T.type);let Vt=_(T.internalFormat,wt,Gt,T.colorSpace,T.isVideoTexture);St(Y,T);let Tt;const se=T.mipmaps,Yt=T.isVideoTexture!==!0,Se=At.__version===void 0||it===!0,O=Z.dataReady,mt=C(T,ot);if(T.isDepthTexture)Vt=x(T.format===Ns,T.type),Se&&(Yt?e.texStorage2D(s.TEXTURE_2D,1,Vt,ot.width,ot.height):e.texImage2D(s.TEXTURE_2D,0,Vt,ot.width,ot.height,0,wt,Gt,null));else if(T.isDataTexture)if(se.length>0){Yt&&Se&&e.texStorage2D(s.TEXTURE_2D,mt,Vt,se[0].width,se[0].height);for(let K=0,et=se.length;K<et;K++)Tt=se[K],Yt?O&&e.texSubImage2D(s.TEXTURE_2D,K,0,0,Tt.width,Tt.height,wt,Gt,Tt.data):e.texImage2D(s.TEXTURE_2D,K,Vt,Tt.width,Tt.height,0,wt,Gt,Tt.data);T.generateMipmaps=!1}else Yt?(Se&&e.texStorage2D(s.TEXTURE_2D,mt,Vt,ot.width,ot.height),O&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,ot.width,ot.height,wt,Gt,ot.data)):e.texImage2D(s.TEXTURE_2D,0,Vt,ot.width,ot.height,0,wt,Gt,ot.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){Yt&&Se&&e.texStorage3D(s.TEXTURE_2D_ARRAY,mt,Vt,se[0].width,se[0].height,ot.depth);for(let K=0,et=se.length;K<et;K++)if(Tt=se[K],T.format!==vn)if(wt!==null)if(Yt){if(O)if(T.layerUpdates.size>0){const xt=Wh(Tt.width,Tt.height,T.format,T.type);for(const gt of T.layerUpdates){const jt=Tt.data.subarray(gt*xt/Tt.data.BYTES_PER_ELEMENT,(gt+1)*xt/Tt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,K,0,0,gt,Tt.width,Tt.height,1,wt,jt)}T.clearLayerUpdates()}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,K,0,0,0,Tt.width,Tt.height,ot.depth,wt,Tt.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,K,Vt,Tt.width,Tt.height,ot.depth,0,Tt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Yt?O&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,K,0,0,0,Tt.width,Tt.height,ot.depth,wt,Gt,Tt.data):e.texImage3D(s.TEXTURE_2D_ARRAY,K,Vt,Tt.width,Tt.height,ot.depth,0,wt,Gt,Tt.data)}else{Yt&&Se&&e.texStorage2D(s.TEXTURE_2D,mt,Vt,se[0].width,se[0].height);for(let K=0,et=se.length;K<et;K++)Tt=se[K],T.format!==vn?wt!==null?Yt?O&&e.compressedTexSubImage2D(s.TEXTURE_2D,K,0,0,Tt.width,Tt.height,wt,Tt.data):e.compressedTexImage2D(s.TEXTURE_2D,K,Vt,Tt.width,Tt.height,0,Tt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Yt?O&&e.texSubImage2D(s.TEXTURE_2D,K,0,0,Tt.width,Tt.height,wt,Gt,Tt.data):e.texImage2D(s.TEXTURE_2D,K,Vt,Tt.width,Tt.height,0,wt,Gt,Tt.data)}else if(T.isDataArrayTexture)if(Yt){if(Se&&e.texStorage3D(s.TEXTURE_2D_ARRAY,mt,Vt,ot.width,ot.height,ot.depth),O)if(T.layerUpdates.size>0){const K=Wh(ot.width,ot.height,T.format,T.type);for(const et of T.layerUpdates){const xt=ot.data.subarray(et*K/ot.data.BYTES_PER_ELEMENT,(et+1)*K/ot.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,et,ot.width,ot.height,1,wt,Gt,xt)}T.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ot.width,ot.height,ot.depth,wt,Gt,ot.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,Vt,ot.width,ot.height,ot.depth,0,wt,Gt,ot.data);else if(T.isData3DTexture)Yt?(Se&&e.texStorage3D(s.TEXTURE_3D,mt,Vt,ot.width,ot.height,ot.depth),O&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ot.width,ot.height,ot.depth,wt,Gt,ot.data)):e.texImage3D(s.TEXTURE_3D,0,Vt,ot.width,ot.height,ot.depth,0,wt,Gt,ot.data);else if(T.isFramebufferTexture){if(Se)if(Yt)e.texStorage2D(s.TEXTURE_2D,mt,Vt,ot.width,ot.height);else{let K=ot.width,et=ot.height;for(let xt=0;xt<mt;xt++)e.texImage2D(s.TEXTURE_2D,xt,Vt,K,et,0,wt,Gt,null),K>>=1,et>>=1}}else if(se.length>0){if(Yt&&Se){const K=_t(se[0]);e.texStorage2D(s.TEXTURE_2D,mt,Vt,K.width,K.height)}for(let K=0,et=se.length;K<et;K++)Tt=se[K],Yt?O&&e.texSubImage2D(s.TEXTURE_2D,K,0,0,wt,Gt,Tt):e.texImage2D(s.TEXTURE_2D,K,Vt,wt,Gt,Tt);T.generateMipmaps=!1}else if(Yt){if(Se){const K=_t(ot);e.texStorage2D(s.TEXTURE_2D,mt,Vt,K.width,K.height)}O&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,wt,Gt,ot)}else e.texImage2D(s.TEXTURE_2D,0,Vt,wt,Gt,ot);m(T)&&p(Y),At.__version=Z.version,T.onUpdate&&T.onUpdate(T)}L.__version=T.version}function Q(L,T,V){if(T.image.length!==6)return;const Y=Ht(L,T),it=T.source;e.bindTexture(s.TEXTURE_CUBE_MAP,L.__webglTexture,s.TEXTURE0+V);const Z=n.get(it);if(it.version!==Z.__version||Y===!0){e.activeTexture(s.TEXTURE0+V);const At=ie.getPrimaries(ie.workingColorSpace),pt=T.colorSpace===Ci?null:ie.getPrimaries(T.colorSpace),yt=T.colorSpace===Ci||At===pt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,yt);const ee=T.isCompressedTexture||T.image[0].isCompressedTexture,ot=T.image[0]&&T.image[0].isDataTexture,wt=[];for(let et=0;et<6;et++)!ee&&!ot?wt[et]=b(T.image[et],!0,i.maxCubemapSize):wt[et]=ot?T.image[et].image:T.image[et],wt[et]=Bt(T,wt[et]);const Gt=wt[0],Vt=r.convert(T.format,T.colorSpace),Tt=r.convert(T.type),se=_(T.internalFormat,Vt,Tt,T.colorSpace),Yt=T.isVideoTexture!==!0,Se=Z.__version===void 0||Y===!0,O=it.dataReady;let mt=C(T,Gt);St(s.TEXTURE_CUBE_MAP,T);let K;if(ee){Yt&&Se&&e.texStorage2D(s.TEXTURE_CUBE_MAP,mt,se,Gt.width,Gt.height);for(let et=0;et<6;et++){K=wt[et].mipmaps;for(let xt=0;xt<K.length;xt++){const gt=K[xt];T.format!==vn?Vt!==null?Yt?O&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+et,xt,0,0,gt.width,gt.height,Vt,gt.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+et,xt,se,gt.width,gt.height,0,gt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Yt?O&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+et,xt,0,0,gt.width,gt.height,Vt,Tt,gt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+et,xt,se,gt.width,gt.height,0,Vt,Tt,gt.data)}}}else{if(K=T.mipmaps,Yt&&Se){K.length>0&&mt++;const et=_t(wt[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,mt,se,et.width,et.height)}for(let et=0;et<6;et++)if(ot){Yt?O&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,0,0,wt[et].width,wt[et].height,Vt,Tt,wt[et].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,se,wt[et].width,wt[et].height,0,Vt,Tt,wt[et].data);for(let xt=0;xt<K.length;xt++){const jt=K[xt].image[et].image;Yt?O&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+et,xt+1,0,0,jt.width,jt.height,Vt,Tt,jt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+et,xt+1,se,jt.width,jt.height,0,Vt,Tt,jt.data)}}else{Yt?O&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,0,0,Vt,Tt,wt[et]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,se,Vt,Tt,wt[et]);for(let xt=0;xt<K.length;xt++){const gt=K[xt];Yt?O&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+et,xt+1,0,0,Vt,Tt,gt.image[et]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+et,xt+1,se,Vt,Tt,gt.image[et])}}}m(T)&&p(s.TEXTURE_CUBE_MAP),Z.__version=it.version,T.onUpdate&&T.onUpdate(T)}L.__version=T.version}function dt(L,T,V,Y,it,Z){const At=r.convert(V.format,V.colorSpace),pt=r.convert(V.type),yt=_(V.internalFormat,At,pt,V.colorSpace),ee=n.get(T),ot=n.get(V);if(ot.__renderTarget=T,!ee.__hasExternalTextures){const wt=Math.max(1,T.width>>Z),Gt=Math.max(1,T.height>>Z);it===s.TEXTURE_3D||it===s.TEXTURE_2D_ARRAY?e.texImage3D(it,Z,yt,wt,Gt,T.depth,0,At,pt,null):e.texImage2D(it,Z,yt,wt,Gt,0,At,pt,null)}e.bindFramebuffer(s.FRAMEBUFFER,L),Mt(T)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Y,it,ot.__webglTexture,0,rt(T)):(it===s.TEXTURE_2D||it>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&it<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,Y,it,ot.__webglTexture,Z),e.bindFramebuffer(s.FRAMEBUFFER,null)}function st(L,T,V){if(s.bindRenderbuffer(s.RENDERBUFFER,L),T.depthBuffer){const Y=T.depthTexture,it=Y&&Y.isDepthTexture?Y.type:null,Z=x(T.stencilBuffer,it),At=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,pt=rt(T);Mt(T)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,pt,Z,T.width,T.height):V?s.renderbufferStorageMultisample(s.RENDERBUFFER,pt,Z,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,Z,T.width,T.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,At,s.RENDERBUFFER,L)}else{const Y=T.textures;for(let it=0;it<Y.length;it++){const Z=Y[it],At=r.convert(Z.format,Z.colorSpace),pt=r.convert(Z.type),yt=_(Z.internalFormat,At,pt,Z.colorSpace),ee=rt(T);V&&Mt(T)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,ee,yt,T.width,T.height):Mt(T)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ee,yt,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,yt,T.width,T.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function vt(L,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,L),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Y=n.get(T.depthTexture);Y.__renderTarget=T,(!Y.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),z(T.depthTexture,0);const it=Y.__webglTexture,Z=rt(T);if(T.depthTexture.format===Es)Mt(T)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,it,0,Z):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,it,0);else if(T.depthTexture.format===Ns)Mt(T)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,it,0,Z):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,it,0);else throw new Error("Unknown depthTexture format")}function Dt(L){const T=n.get(L),V=L.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==L.depthTexture){const Y=L.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),Y){const it=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,Y.removeEventListener("dispose",it)};Y.addEventListener("dispose",it),T.__depthDisposeCallback=it}T.__boundDepthTexture=Y}if(L.depthTexture&&!T.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");vt(T.__webglFramebuffer,L)}else if(V){T.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(e.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer[Y]),T.__webglDepthbuffer[Y]===void 0)T.__webglDepthbuffer[Y]=s.createRenderbuffer(),st(T.__webglDepthbuffer[Y],L,!1);else{const it=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Z=T.__webglDepthbuffer[Y];s.bindRenderbuffer(s.RENDERBUFFER,Z),s.framebufferRenderbuffer(s.FRAMEBUFFER,it,s.RENDERBUFFER,Z)}}else if(e.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=s.createRenderbuffer(),st(T.__webglDepthbuffer,L,!1);else{const Y=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,it=T.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,it),s.framebufferRenderbuffer(s.FRAMEBUFFER,Y,s.RENDERBUFFER,it)}e.bindFramebuffer(s.FRAMEBUFFER,null)}function zt(L,T,V){const Y=n.get(L);T!==void 0&&dt(Y.__webglFramebuffer,L,L.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),V!==void 0&&Dt(L)}function ne(L){const T=L.texture,V=n.get(L),Y=n.get(T);L.addEventListener("dispose",R);const it=L.textures,Z=L.isWebGLCubeRenderTarget===!0,At=it.length>1;if(At||(Y.__webglTexture===void 0&&(Y.__webglTexture=s.createTexture()),Y.__version=T.version,a.memory.textures++),Z){V.__webglFramebuffer=[];for(let pt=0;pt<6;pt++)if(T.mipmaps&&T.mipmaps.length>0){V.__webglFramebuffer[pt]=[];for(let yt=0;yt<T.mipmaps.length;yt++)V.__webglFramebuffer[pt][yt]=s.createFramebuffer()}else V.__webglFramebuffer[pt]=s.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){V.__webglFramebuffer=[];for(let pt=0;pt<T.mipmaps.length;pt++)V.__webglFramebuffer[pt]=s.createFramebuffer()}else V.__webglFramebuffer=s.createFramebuffer();if(At)for(let pt=0,yt=it.length;pt<yt;pt++){const ee=n.get(it[pt]);ee.__webglTexture===void 0&&(ee.__webglTexture=s.createTexture(),a.memory.textures++)}if(L.samples>0&&Mt(L)===!1){V.__webglMultisampledFramebuffer=s.createFramebuffer(),V.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let pt=0;pt<it.length;pt++){const yt=it[pt];V.__webglColorRenderbuffer[pt]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,V.__webglColorRenderbuffer[pt]);const ee=r.convert(yt.format,yt.colorSpace),ot=r.convert(yt.type),wt=_(yt.internalFormat,ee,ot,yt.colorSpace,L.isXRRenderTarget===!0),Gt=rt(L);s.renderbufferStorageMultisample(s.RENDERBUFFER,Gt,wt,L.width,L.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+pt,s.RENDERBUFFER,V.__webglColorRenderbuffer[pt])}s.bindRenderbuffer(s.RENDERBUFFER,null),L.depthBuffer&&(V.__webglDepthRenderbuffer=s.createRenderbuffer(),st(V.__webglDepthRenderbuffer,L,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Z){e.bindTexture(s.TEXTURE_CUBE_MAP,Y.__webglTexture),St(s.TEXTURE_CUBE_MAP,T);for(let pt=0;pt<6;pt++)if(T.mipmaps&&T.mipmaps.length>0)for(let yt=0;yt<T.mipmaps.length;yt++)dt(V.__webglFramebuffer[pt][yt],L,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+pt,yt);else dt(V.__webglFramebuffer[pt],L,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0);m(T)&&p(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(At){for(let pt=0,yt=it.length;pt<yt;pt++){const ee=it[pt],ot=n.get(ee);e.bindTexture(s.TEXTURE_2D,ot.__webglTexture),St(s.TEXTURE_2D,ee),dt(V.__webglFramebuffer,L,ee,s.COLOR_ATTACHMENT0+pt,s.TEXTURE_2D,0),m(ee)&&p(s.TEXTURE_2D)}e.unbindTexture()}else{let pt=s.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(pt=L.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(pt,Y.__webglTexture),St(pt,T),T.mipmaps&&T.mipmaps.length>0)for(let yt=0;yt<T.mipmaps.length;yt++)dt(V.__webglFramebuffer[yt],L,T,s.COLOR_ATTACHMENT0,pt,yt);else dt(V.__webglFramebuffer,L,T,s.COLOR_ATTACHMENT0,pt,0);m(T)&&p(pt),e.unbindTexture()}L.depthBuffer&&Dt(L)}function tt(L){const T=L.textures;for(let V=0,Y=T.length;V<Y;V++){const it=T[V];if(m(it)){const Z=v(L),At=n.get(it).__webglTexture;e.bindTexture(Z,At),p(Z),e.unbindTexture()}}}const at=[],I=[];function Et(L){if(L.samples>0){if(Mt(L)===!1){const T=L.textures,V=L.width,Y=L.height;let it=s.COLOR_BUFFER_BIT;const Z=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,At=n.get(L),pt=T.length>1;if(pt)for(let yt=0;yt<T.length;yt++)e.bindFramebuffer(s.FRAMEBUFFER,At.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+yt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,At.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+yt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,At.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,At.__webglFramebuffer);for(let yt=0;yt<T.length;yt++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(it|=s.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(it|=s.STENCIL_BUFFER_BIT)),pt){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,At.__webglColorRenderbuffer[yt]);const ee=n.get(T[yt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,ee,0)}s.blitFramebuffer(0,0,V,Y,0,0,V,Y,it,s.NEAREST),c===!0&&(at.length=0,I.length=0,at.push(s.COLOR_ATTACHMENT0+yt),L.depthBuffer&&L.resolveDepthBuffer===!1&&(at.push(Z),I.push(Z),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,I)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,at))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),pt)for(let yt=0;yt<T.length;yt++){e.bindFramebuffer(s.FRAMEBUFFER,At.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+yt,s.RENDERBUFFER,At.__webglColorRenderbuffer[yt]);const ee=n.get(T[yt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,At.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+yt,s.TEXTURE_2D,ee,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,At.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&c){const T=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[T])}}}function rt(L){return Math.min(i.maxSamples,L.samples)}function Mt(L){const T=n.get(L);return L.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function ft(L){const T=a.render.frame;h.get(L)!==T&&(h.set(L,T),L.update())}function Bt(L,T){const V=L.colorSpace,Y=L.format,it=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||V!==tn&&V!==Ci&&(ie.getTransfer(V)===ve?(Y!==vn||it!==bi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),T}function _t(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(l.width=L.naturalWidth||L.width,l.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(l.width=L.displayWidth,l.height=L.displayHeight):(l.width=L.width,l.height=L.height),l}this.allocateTextureUnit=U,this.resetTextureUnits=D,this.setTexture2D=z,this.setTexture2DArray=F,this.setTexture3D=k,this.setTextureCube=H,this.rebindTextures=zt,this.setupRenderTarget=ne,this.updateRenderTargetMipmap=tt,this.updateMultisampleRenderTarget=Et,this.setupDepthRenderbuffer=Dt,this.setupFrameBufferTexture=dt,this.useMultisampledRTT=Mt}function ex(s,t){function e(n,i=Ci){let r;const a=ie.getTransfer(i);if(n===bi)return s.UNSIGNED_BYTE;if(n===ll)return s.UNSIGNED_SHORT_4_4_4_4;if(n===hl)return s.UNSIGNED_SHORT_5_5_5_1;if(n===jf)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Wf)return s.BYTE;if(n===qf)return s.SHORT;if(n===Rr)return s.UNSIGNED_SHORT;if(n===cl)return s.INT;if(n===Fi)return s.UNSIGNED_INT;if(n===zn)return s.FLOAT;if(n===Vs)return s.HALF_FLOAT;if(n===Xf)return s.ALPHA;if(n===Kf)return s.RGB;if(n===vn)return s.RGBA;if(n===Yf)return s.LUMINANCE;if(n===Jf)return s.LUMINANCE_ALPHA;if(n===Es)return s.DEPTH_COMPONENT;if(n===Ns)return s.DEPTH_STENCIL;if(n===Qa)return s.RED;if(n===fl)return s.RED_INTEGER;if(n===Zf)return s.RG;if(n===ul)return s.RG_INTEGER;if(n===dl)return s.RGBA_INTEGER;if(n===Ra||n===Ca||n===Pa||n===La)if(a===ve)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Ra)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ca)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Pa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===La)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Ra)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ca)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Pa)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===La)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===mc||n===gc||n===bc||n===xc)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===mc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===gc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===bc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===xc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===vc||n===_c||n===yc)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===vc||n===_c)return a===ve?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===yc)return a===ve?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Mc||n===Sc||n===wc||n===Tc||n===Ec||n===Ac||n===Rc||n===Cc||n===Pc||n===Lc||n===Ic||n===Dc||n===Uc||n===Nc)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Mc)return a===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Sc)return a===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===wc)return a===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Tc)return a===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ec)return a===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ac)return a===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Rc)return a===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Cc)return a===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Pc)return a===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Lc)return a===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ic)return a===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Dc)return a===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Uc)return a===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Nc)return a===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ia||n===kc||n===Fc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Ia)return a===ve?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===kc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Fc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===$f||n===Oc||n===zc||n===Bc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Ia)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Oc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===zc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Bc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Us?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}class nx extends Ye{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Zt extends _e{constructor(){super(),this.isGroup=!0,this.type="Group"}}const ix={type:"move"};class Oo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Zt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Zt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Zt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){a=!0;for(const b of t.hand.values()){const m=e.getJointPose(b,n),p=this._getHandJoint(l,b);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],u=h.position.distanceTo(f.position),d=.02,g=.005;l.inputState.pinching&&u>d+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&u<=d-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(ix)))}return o!==null&&(o.visible=i!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Zt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const sx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,rx=`
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

}`;class ax{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const i=new Fe,r=t.properties.get(i);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new rn({vertexShader:sx,fragmentShader:rx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new J(new qe(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class ox extends Ws{constructor(t,e){super();const n=this;let i=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,f=null,u=null,d=null,g=null;const b=new ax,m=e.getContextAttributes();let p=null,v=null;const _=[],x=[],C=new ht;let w=null;const R=new Ye;R.viewport=new le;const A=new Ye;A.viewport=new le;const y=[R,A],M=new nx;let S=null,D=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let Q=_[j];return Q===void 0&&(Q=new Oo,_[j]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(j){let Q=_[j];return Q===void 0&&(Q=new Oo,_[j]=Q),Q.getGripSpace()},this.getHand=function(j){let Q=_[j];return Q===void 0&&(Q=new Oo,_[j]=Q),Q.getHandSpace()};function U(j){const Q=x.indexOf(j.inputSource);if(Q===-1)return;const dt=_[Q];dt!==void 0&&(dt.update(j.inputSource,j.frame,l||a),dt.dispatchEvent({type:j.type,data:j.inputSource}))}function N(){i.removeEventListener("select",U),i.removeEventListener("selectstart",U),i.removeEventListener("selectend",U),i.removeEventListener("squeeze",U),i.removeEventListener("squeezestart",U),i.removeEventListener("squeezeend",U),i.removeEventListener("end",N),i.removeEventListener("inputsourceschange",z);for(let j=0;j<_.length;j++){const Q=x[j];Q!==null&&(x[j]=null,_[j].disconnect(Q))}S=null,D=null,b.reset(),t.setRenderTarget(p),d=null,u=null,f=null,i=null,v=null,Ht.stop(),n.isPresenting=!1,t.setPixelRatio(w),t.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){r=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){o=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(j){l=j},this.getBaseLayer=function(){return u!==null?u:d},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(j){if(i=j,i!==null){if(p=t.getRenderTarget(),i.addEventListener("select",U),i.addEventListener("selectstart",U),i.addEventListener("selectend",U),i.addEventListener("squeeze",U),i.addEventListener("squeezestart",U),i.addEventListener("squeezeend",U),i.addEventListener("end",N),i.addEventListener("inputsourceschange",z),m.xrCompatible!==!0&&await e.makeXRCompatible(),w=t.getPixelRatio(),t.getSize(C),i.renderState.layers===void 0){const Q={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(i,e,Q),i.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),v=new xi(d.framebufferWidth,d.framebufferHeight,{format:vn,type:bi,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let Q=null,dt=null,st=null;m.depth&&(st=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Q=m.stencil?Ns:Es,dt=m.stencil?Us:Fi);const vt={colorFormat:e.RGBA8,depthFormat:st,scaleFactor:r};f=new XRWebGLBinding(i,e),u=f.createProjectionLayer(vt),i.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),v=new xi(u.textureWidth,u.textureHeight,{format:vn,type:bi,depthTexture:new bl(u.textureWidth,u.textureHeight,dt,void 0,void 0,void 0,void 0,void 0,void 0,Q),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await i.requestReferenceSpace(o),Ht.setContext(i),Ht.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return b.getDepthTexture()};function z(j){for(let Q=0;Q<j.removed.length;Q++){const dt=j.removed[Q],st=x.indexOf(dt);st>=0&&(x[st]=null,_[st].disconnect(dt))}for(let Q=0;Q<j.added.length;Q++){const dt=j.added[Q];let st=x.indexOf(dt);if(st===-1){for(let Dt=0;Dt<_.length;Dt++)if(Dt>=x.length){x.push(dt),st=Dt;break}else if(x[Dt]===null){x[Dt]=dt,st=Dt;break}if(st===-1)break}const vt=_[st];vt&&vt.connect(dt)}}const F=new P,k=new P;function H(j,Q,dt){F.setFromMatrixPosition(Q.matrixWorld),k.setFromMatrixPosition(dt.matrixWorld);const st=F.distanceTo(k),vt=Q.projectionMatrix.elements,Dt=dt.projectionMatrix.elements,zt=vt[14]/(vt[10]-1),ne=vt[14]/(vt[10]+1),tt=(vt[9]+1)/vt[5],at=(vt[9]-1)/vt[5],I=(vt[8]-1)/vt[0],Et=(Dt[8]+1)/Dt[0],rt=zt*I,Mt=zt*Et,ft=st/(-I+Et),Bt=ft*-I;if(Q.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(Bt),j.translateZ(ft),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),vt[10]===-1)j.projectionMatrix.copy(Q.projectionMatrix),j.projectionMatrixInverse.copy(Q.projectionMatrixInverse);else{const _t=zt+ft,L=ne+ft,T=rt-Bt,V=Mt+(st-Bt),Y=tt*ne/L*_t,it=at*ne/L*_t;j.projectionMatrix.makePerspective(T,V,Y,it,_t,L),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function X(j,Q){Q===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(Q.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(i===null)return;let Q=j.near,dt=j.far;b.texture!==null&&(b.depthNear>0&&(Q=b.depthNear),b.depthFar>0&&(dt=b.depthFar)),M.near=A.near=R.near=Q,M.far=A.far=R.far=dt,(S!==M.near||D!==M.far)&&(i.updateRenderState({depthNear:M.near,depthFar:M.far}),S=M.near,D=M.far),R.layers.mask=j.layers.mask|2,A.layers.mask=j.layers.mask|4,M.layers.mask=R.layers.mask|A.layers.mask;const st=j.parent,vt=M.cameras;X(M,st);for(let Dt=0;Dt<vt.length;Dt++)X(vt[Dt],st);vt.length===2?H(M,R,A):M.projectionMatrix.copy(R.projectionMatrix),nt(j,M,st)};function nt(j,Q,dt){dt===null?j.matrix.copy(Q.matrixWorld):(j.matrix.copy(dt.matrixWorld),j.matrix.invert(),j.matrix.multiply(Q.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(Q.projectionMatrix),j.projectionMatrixInverse.copy(Q.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=ks*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(u===null&&d===null))return c},this.setFoveation=function(j){c=j,u!==null&&(u.fixedFoveation=j),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=j)},this.hasDepthSensing=function(){return b.texture!==null},this.getDepthSensingMesh=function(){return b.getMesh(M)};let $=null;function St(j,Q){if(h=Q.getViewerPose(l||a),g=Q,h!==null){const dt=h.views;d!==null&&(t.setRenderTargetFramebuffer(v,d.framebuffer),t.setRenderTarget(v));let st=!1;dt.length!==M.cameras.length&&(M.cameras.length=0,st=!0);for(let Dt=0;Dt<dt.length;Dt++){const zt=dt[Dt];let ne=null;if(d!==null)ne=d.getViewport(zt);else{const at=f.getViewSubImage(u,zt);ne=at.viewport,Dt===0&&(t.setRenderTargetTextures(v,at.colorTexture,u.ignoreDepthValues?void 0:at.depthStencilTexture),t.setRenderTarget(v))}let tt=y[Dt];tt===void 0&&(tt=new Ye,tt.layers.enable(Dt),tt.viewport=new le,y[Dt]=tt),tt.matrix.fromArray(zt.transform.matrix),tt.matrix.decompose(tt.position,tt.quaternion,tt.scale),tt.projectionMatrix.fromArray(zt.projectionMatrix),tt.projectionMatrixInverse.copy(tt.projectionMatrix).invert(),tt.viewport.set(ne.x,ne.y,ne.width,ne.height),Dt===0&&(M.matrix.copy(tt.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),st===!0&&M.cameras.push(tt)}const vt=i.enabledFeatures;if(vt&&vt.includes("depth-sensing")){const Dt=f.getDepthInformation(dt[0]);Dt&&Dt.isValid&&Dt.texture&&b.init(t,Dt,i.renderState)}}for(let dt=0;dt<_.length;dt++){const st=x[dt],vt=_[dt];st!==null&&vt!==void 0&&vt.update(st,Q,l||a)}$&&$(j,Q),Q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Q}),g=null}const Ht=new fu;Ht.setAnimationLoop(St),this.setAnimationLoop=function(j){$=j},this.dispose=function(){}}}const Wi=new an,cx=new kt;function lx(s,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,cu(s)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,v,_,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),f(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),u(m,p),p.isMeshPhysicalMaterial&&d(m,p,x)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),b(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?c(m,p,v,_):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Je&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Je&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const v=t.get(p),_=v.envMap,x=v.envMapRotation;_&&(m.envMap.value=_,Wi.copy(x),Wi.x*=-1,Wi.y*=-1,Wi.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Wi.y*=-1,Wi.z*=-1),m.envMapRotation.value.setFromMatrix4(cx.makeRotationFromEuler(Wi)),m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,v,_){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*v,m.scale.value=_*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,v){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Je&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function b(m,p){const v=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function hx(s,t,e,n){let i={},r={},a=[];const o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function c(v,_){const x=_.program;n.uniformBlockBinding(v,x)}function l(v,_){let x=i[v.id];x===void 0&&(g(v),x=h(v),i[v.id]=x,v.addEventListener("dispose",m));const C=_.program;n.updateUBOMapping(v,C);const w=t.render.frame;r[v.id]!==w&&(u(v),r[v.id]=w)}function h(v){const _=f();v.__bindingPointIndex=_;const x=s.createBuffer(),C=v.__size,w=v.usage;return s.bindBuffer(s.UNIFORM_BUFFER,x),s.bufferData(s.UNIFORM_BUFFER,C,w),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,_,x),x}function f(){for(let v=0;v<o;v++)if(a.indexOf(v)===-1)return a.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(v){const _=i[v.id],x=v.uniforms,C=v.__cache;s.bindBuffer(s.UNIFORM_BUFFER,_);for(let w=0,R=x.length;w<R;w++){const A=Array.isArray(x[w])?x[w]:[x[w]];for(let y=0,M=A.length;y<M;y++){const S=A[y];if(d(S,w,y,C)===!0){const D=S.__offset,U=Array.isArray(S.value)?S.value:[S.value];let N=0;for(let z=0;z<U.length;z++){const F=U[z],k=b(F);typeof F=="number"||typeof F=="boolean"?(S.__data[0]=F,s.bufferSubData(s.UNIFORM_BUFFER,D+N,S.__data)):F.isMatrix3?(S.__data[0]=F.elements[0],S.__data[1]=F.elements[1],S.__data[2]=F.elements[2],S.__data[3]=0,S.__data[4]=F.elements[3],S.__data[5]=F.elements[4],S.__data[6]=F.elements[5],S.__data[7]=0,S.__data[8]=F.elements[6],S.__data[9]=F.elements[7],S.__data[10]=F.elements[8],S.__data[11]=0):(F.toArray(S.__data,N),N+=k.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,D,S.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function d(v,_,x,C){const w=v.value,R=_+"_"+x;if(C[R]===void 0)return typeof w=="number"||typeof w=="boolean"?C[R]=w:C[R]=w.clone(),!0;{const A=C[R];if(typeof w=="number"||typeof w=="boolean"){if(A!==w)return C[R]=w,!0}else if(A.equals(w)===!1)return A.copy(w),!0}return!1}function g(v){const _=v.uniforms;let x=0;const C=16;for(let R=0,A=_.length;R<A;R++){const y=Array.isArray(_[R])?_[R]:[_[R]];for(let M=0,S=y.length;M<S;M++){const D=y[M],U=Array.isArray(D.value)?D.value:[D.value];for(let N=0,z=U.length;N<z;N++){const F=U[N],k=b(F),H=x%C,X=H%k.boundary,nt=H+X;x+=X,nt!==0&&C-nt<k.storage&&(x+=C-nt),D.__data=new Float32Array(k.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=x,x+=k.storage}}}const w=x%C;return w>0&&(x+=C-w),v.__size=x,v.__cache={},this}function b(v){const _={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(_.boundary=4,_.storage=4):v.isVector2?(_.boundary=8,_.storage=8):v.isVector3||v.isColor?(_.boundary=16,_.storage=12):v.isVector4?(_.boundary=16,_.storage=16):v.isMatrix3?(_.boundary=48,_.storage=48):v.isMatrix4?(_.boundary=64,_.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),_}function m(v){const _=v.target;_.removeEventListener("dispose",m);const x=a.indexOf(_.__bindingPointIndex);a.splice(x,1),s.deleteBuffer(i[_.id]),delete i[_.id],delete r[_.id]}function p(){for(const v in i)s.deleteBuffer(i[v]);a=[],i={},r={}}return{bind:c,update:l,dispose:p}}class fx{constructor(t={}){const{canvas:e=Qd(),context:n=null,depth:i=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:u=!1}=t;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=a;const g=new Uint32Array(4),b=new Int32Array(4);let m=null,p=null;const v=[],_=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ne,this.toneMapping=Ni,this.toneMappingExposure=1;const x=this;let C=!1,w=0,R=0,A=null,y=-1,M=null;const S=new le,D=new le;let U=null;const N=new ct(0);let z=0,F=e.width,k=e.height,H=1,X=null,nt=null;const $=new le(0,0,F,k),St=new le(0,0,F,k);let Ht=!1;const j=new ml;let Q=!1,dt=!1;const st=new kt,vt=new kt,Dt=new P,zt=new le,ne={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let tt=!1;function at(){return A===null?H:1}let I=n;function Et(E,B){return e.getContext(E,B)}try{const E={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${al}`),e.addEventListener("webglcontextlost",et,!1),e.addEventListener("webglcontextrestored",xt,!1),e.addEventListener("webglcontextcreationerror",gt,!1),I===null){const B="webgl2";if(I=Et(B,E),I===null)throw Et(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let rt,Mt,ft,Bt,_t,L,T,V,Y,it,Z,At,pt,yt,ee,ot,wt,Gt,Vt,Tt,se,Yt,Se,O;function mt(){rt=new gg(I),rt.init(),Yt=new ex(I,rt),Mt=new hg(I,rt,t,Yt),ft=new $b(I,rt),Mt.reverseDepthBuffer&&u&&ft.buffers.depth.setReversed(!0),Bt=new vg(I),_t=new Fb,L=new tx(I,rt,ft,_t,Mt,Yt,Bt),T=new ug(x),V=new mg(x),Y=new Ep(I),Se=new cg(I,Y),it=new bg(I,Y,Bt,Se),Z=new yg(I,it,Y,Bt),Vt=new _g(I,Mt,L),ot=new fg(_t),At=new kb(x,T,V,rt,Mt,Se,ot),pt=new lx(x,_t),yt=new zb,ee=new qb(rt),Gt=new og(x,T,V,ft,Z,d,c),wt=new Jb(x,Z,Mt),O=new hx(I,Bt,Mt,ft),Tt=new lg(I,rt,Bt),se=new xg(I,rt,Bt),Bt.programs=At.programs,x.capabilities=Mt,x.extensions=rt,x.properties=_t,x.renderLists=yt,x.shadowMap=wt,x.state=ft,x.info=Bt}mt();const K=new ox(x,I);this.xr=K,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const E=rt.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=rt.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(E){E!==void 0&&(H=E,this.setSize(F,k,!1))},this.getSize=function(E){return E.set(F,k)},this.setSize=function(E,B,W=!0){if(K.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}F=E,k=B,e.width=Math.floor(E*H),e.height=Math.floor(B*H),W===!0&&(e.style.width=E+"px",e.style.height=B+"px"),this.setViewport(0,0,E,B)},this.getDrawingBufferSize=function(E){return E.set(F*H,k*H).floor()},this.setDrawingBufferSize=function(E,B,W){F=E,k=B,H=W,e.width=Math.floor(E*W),e.height=Math.floor(B*W),this.setViewport(0,0,E,B)},this.getCurrentViewport=function(E){return E.copy(S)},this.getViewport=function(E){return E.copy($)},this.setViewport=function(E,B,W,q){E.isVector4?$.set(E.x,E.y,E.z,E.w):$.set(E,B,W,q),ft.viewport(S.copy($).multiplyScalar(H).round())},this.getScissor=function(E){return E.copy(St)},this.setScissor=function(E,B,W,q){E.isVector4?St.set(E.x,E.y,E.z,E.w):St.set(E,B,W,q),ft.scissor(D.copy(St).multiplyScalar(H).round())},this.getScissorTest=function(){return Ht},this.setScissorTest=function(E){ft.setScissorTest(Ht=E)},this.setOpaqueSort=function(E){X=E},this.setTransparentSort=function(E){nt=E},this.getClearColor=function(E){return E.copy(Gt.getClearColor())},this.setClearColor=function(){Gt.setClearColor.apply(Gt,arguments)},this.getClearAlpha=function(){return Gt.getClearAlpha()},this.setClearAlpha=function(){Gt.setClearAlpha.apply(Gt,arguments)},this.clear=function(E=!0,B=!0,W=!0){let q=0;if(E){let G=!1;if(A!==null){const lt=A.texture.format;G=lt===dl||lt===ul||lt===fl}if(G){const lt=A.texture.type,bt=lt===bi||lt===Fi||lt===Rr||lt===Us||lt===ll||lt===hl,Pt=Gt.getClearColor(),Lt=Gt.getClearAlpha(),Wt=Pt.r,Xt=Pt.g,It=Pt.b;bt?(g[0]=Wt,g[1]=Xt,g[2]=It,g[3]=Lt,I.clearBufferuiv(I.COLOR,0,g)):(b[0]=Wt,b[1]=Xt,b[2]=It,b[3]=Lt,I.clearBufferiv(I.COLOR,0,b))}else q|=I.COLOR_BUFFER_BIT}B&&(q|=I.DEPTH_BUFFER_BIT),W&&(q|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",et,!1),e.removeEventListener("webglcontextrestored",xt,!1),e.removeEventListener("webglcontextcreationerror",gt,!1),yt.dispose(),ee.dispose(),_t.dispose(),T.dispose(),V.dispose(),Z.dispose(),Se.dispose(),O.dispose(),At.dispose(),K.dispose(),K.removeEventListener("sessionstart",kl),K.removeEventListener("sessionend",Fl),Oi.stop()};function et(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function xt(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;const E=Bt.autoReset,B=wt.enabled,W=wt.autoUpdate,q=wt.needsUpdate,G=wt.type;mt(),Bt.autoReset=E,wt.enabled=B,wt.autoUpdate=W,wt.needsUpdate=q,wt.type=G}function gt(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function jt(E){const B=E.target;B.removeEventListener("dispose",jt),De(B)}function De(E){je(E),_t.remove(E)}function je(E){const B=_t.get(E).programs;B!==void 0&&(B.forEach(function(W){At.releaseProgram(W)}),E.isShaderMaterial&&At.releaseShaderCache(E))}this.renderBufferDirect=function(E,B,W,q,G,lt){B===null&&(B=ne);const bt=G.isMesh&&G.matrixWorld.determinant()<0,Pt=qu(E,B,W,q,G);ft.setMaterial(q,bt);let Lt=W.index,Wt=1;if(q.wireframe===!0){if(Lt=it.getWireframeAttribute(W),Lt===void 0)return;Wt=2}const Xt=W.drawRange,It=W.attributes.position;let ae=Xt.start*Wt,we=(Xt.start+Xt.count)*Wt;lt!==null&&(ae=Math.max(ae,lt.start*Wt),we=Math.min(we,(lt.start+lt.count)*Wt)),Lt!==null?(ae=Math.max(ae,0),we=Math.min(we,Lt.count)):It!=null&&(ae=Math.max(ae,0),we=Math.min(we,It.count));const Ae=we-ae;if(Ae<0||Ae===1/0)return;Se.setup(G,q,Pt,W,Lt);let en,fe=Tt;if(Lt!==null&&(en=Y.get(Lt),fe=se,fe.setIndex(en)),G.isMesh)q.wireframe===!0?(ft.setLineWidth(q.wireframeLinewidth*at()),fe.setMode(I.LINES)):fe.setMode(I.TRIANGLES);else if(G.isLine){let Nt=q.linewidth;Nt===void 0&&(Nt=1),ft.setLineWidth(Nt*at()),G.isLineSegments?fe.setMode(I.LINES):G.isLineLoop?fe.setMode(I.LINE_LOOP):fe.setMode(I.LINE_STRIP)}else G.isPoints?fe.setMode(I.POINTS):G.isSprite&&fe.setMode(I.TRIANGLES);if(G.isBatchedMesh)if(G._multiDrawInstances!==null)fe.renderMultiDrawInstances(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount,G._multiDrawInstances);else if(rt.get("WEBGL_multi_draw"))fe.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{const Nt=G._multiDrawStarts,ti=G._multiDrawCounts,ue=G._multiDrawCount,Cn=Lt?Y.get(Lt).bytesPerElement:1,is=_t.get(q).currentProgram.getUniforms();for(let on=0;on<ue;on++)is.setValue(I,"_gl_DrawID",on),fe.render(Nt[on]/Cn,ti[on])}else if(G.isInstancedMesh)fe.renderInstances(ae,Ae,G.count);else if(W.isInstancedBufferGeometry){const Nt=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,ti=Math.min(W.instanceCount,Nt);fe.renderInstances(ae,Ae,ti)}else fe.render(ae,Ae)};function de(E,B,W){E.transparent===!0&&E.side===ge&&E.forceSinglePass===!1?(E.side=Je,E.needsUpdate=!0,Wr(E,B,W),E.side=gi,E.needsUpdate=!0,Wr(E,B,W),E.side=ge):Wr(E,B,W)}this.compile=function(E,B,W=null){W===null&&(W=E),p=ee.get(W),p.init(B),_.push(p),W.traverseVisible(function(G){G.isLight&&G.layers.test(B.layers)&&(p.pushLight(G),G.castShadow&&p.pushShadow(G))}),E!==W&&E.traverseVisible(function(G){G.isLight&&G.layers.test(B.layers)&&(p.pushLight(G),G.castShadow&&p.pushShadow(G))}),p.setupLights();const q=new Set;return E.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;const lt=G.material;if(lt)if(Array.isArray(lt))for(let bt=0;bt<lt.length;bt++){const Pt=lt[bt];de(Pt,W,G),q.add(Pt)}else de(lt,W,G),q.add(lt)}),_.pop(),p=null,q},this.compileAsync=function(E,B,W=null){const q=this.compile(E,B,W);return new Promise(G=>{function lt(){if(q.forEach(function(bt){_t.get(bt).currentProgram.isReady()&&q.delete(bt)}),q.size===0){G(E);return}setTimeout(lt,10)}rt.get("KHR_parallel_shader_compile")!==null?lt():setTimeout(lt,10)})};let Rn=null;function Qn(E){Rn&&Rn(E)}function kl(){Oi.stop()}function Fl(){Oi.start()}const Oi=new fu;Oi.setAnimationLoop(Qn),typeof self<"u"&&Oi.setContext(self),this.setAnimationLoop=function(E){Rn=E,K.setAnimationLoop(E),E===null?Oi.stop():Oi.start()},K.addEventListener("sessionstart",kl),K.addEventListener("sessionend",Fl),this.render=function(E,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),K.enabled===!0&&K.isPresenting===!0&&(K.cameraAutoUpdate===!0&&K.updateCamera(B),B=K.getCamera()),E.isScene===!0&&E.onBeforeRender(x,E,B,A),p=ee.get(E,_.length),p.init(B),_.push(p),vt.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),j.setFromProjectionMatrix(vt),dt=this.localClippingEnabled,Q=ot.init(this.clippingPlanes,dt),m=yt.get(E,v.length),m.init(),v.push(m),K.enabled===!0&&K.isPresenting===!0){const lt=x.xr.getDepthSensingMesh();lt!==null&&lo(lt,B,-1/0,x.sortObjects)}lo(E,B,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(X,nt),tt=K.enabled===!1||K.isPresenting===!1||K.hasDepthSensing()===!1,tt&&Gt.addToRenderList(m,E),this.info.render.frame++,Q===!0&&ot.beginShadows();const W=p.state.shadowsArray;wt.render(W,E,B),Q===!0&&ot.endShadows(),this.info.autoReset===!0&&this.info.reset();const q=m.opaque,G=m.transmissive;if(p.setupLights(),B.isArrayCamera){const lt=B.cameras;if(G.length>0)for(let bt=0,Pt=lt.length;bt<Pt;bt++){const Lt=lt[bt];zl(q,G,E,Lt)}tt&&Gt.render(E);for(let bt=0,Pt=lt.length;bt<Pt;bt++){const Lt=lt[bt];Ol(m,E,Lt,Lt.viewport)}}else G.length>0&&zl(q,G,E,B),tt&&Gt.render(E),Ol(m,E,B);A!==null&&(L.updateMultisampleRenderTarget(A),L.updateRenderTargetMipmap(A)),E.isScene===!0&&E.onAfterRender(x,E,B),Se.resetDefaultState(),y=-1,M=null,_.pop(),_.length>0?(p=_[_.length-1],Q===!0&&ot.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,v.pop(),v.length>0?m=v[v.length-1]:m=null};function lo(E,B,W,q){if(E.visible===!1)return;if(E.layers.test(B.layers)){if(E.isGroup)W=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(B);else if(E.isLight)p.pushLight(E),E.castShadow&&p.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||j.intersectsSprite(E)){q&&zt.setFromMatrixPosition(E.matrixWorld).applyMatrix4(vt);const bt=Z.update(E),Pt=E.material;Pt.visible&&m.push(E,bt,Pt,W,zt.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||j.intersectsObject(E))){const bt=Z.update(E),Pt=E.material;if(q&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),zt.copy(E.boundingSphere.center)):(bt.boundingSphere===null&&bt.computeBoundingSphere(),zt.copy(bt.boundingSphere.center)),zt.applyMatrix4(E.matrixWorld).applyMatrix4(vt)),Array.isArray(Pt)){const Lt=bt.groups;for(let Wt=0,Xt=Lt.length;Wt<Xt;Wt++){const It=Lt[Wt],ae=Pt[It.materialIndex];ae&&ae.visible&&m.push(E,bt,ae,W,zt.z,It)}}else Pt.visible&&m.push(E,bt,Pt,W,zt.z,null)}}const lt=E.children;for(let bt=0,Pt=lt.length;bt<Pt;bt++)lo(lt[bt],B,W,q)}function Ol(E,B,W,q){const G=E.opaque,lt=E.transmissive,bt=E.transparent;p.setupLightsView(W),Q===!0&&ot.setGlobalState(x.clippingPlanes,W),q&&ft.viewport(S.copy(q)),G.length>0&&Vr(G,B,W),lt.length>0&&Vr(lt,B,W),bt.length>0&&Vr(bt,B,W),ft.buffers.depth.setTest(!0),ft.buffers.depth.setMask(!0),ft.buffers.color.setMask(!0),ft.setPolygonOffset(!1)}function zl(E,B,W,q){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[q.id]===void 0&&(p.state.transmissionRenderTarget[q.id]=new xi(1,1,{generateMipmaps:!0,type:rt.has("EXT_color_buffer_half_float")||rt.has("EXT_color_buffer_float")?Vs:bi,minFilter:fi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ie.workingColorSpace}));const lt=p.state.transmissionRenderTarget[q.id],bt=q.viewport||S;lt.setSize(bt.z,bt.w);const Pt=x.getRenderTarget();x.setRenderTarget(lt),x.getClearColor(N),z=x.getClearAlpha(),z<1&&x.setClearColor(16777215,.5),x.clear(),tt&&Gt.render(W);const Lt=x.toneMapping;x.toneMapping=Ni;const Wt=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),p.setupLightsView(q),Q===!0&&ot.setGlobalState(x.clippingPlanes,q),Vr(E,W,q),L.updateMultisampleRenderTarget(lt),L.updateRenderTargetMipmap(lt),rt.has("WEBGL_multisampled_render_to_texture")===!1){let Xt=!1;for(let It=0,ae=B.length;It<ae;It++){const we=B[It],Ae=we.object,en=we.geometry,fe=we.material,Nt=we.group;if(fe.side===ge&&Ae.layers.test(q.layers)){const ti=fe.side;fe.side=Je,fe.needsUpdate=!0,Bl(Ae,W,q,en,fe,Nt),fe.side=ti,fe.needsUpdate=!0,Xt=!0}}Xt===!0&&(L.updateMultisampleRenderTarget(lt),L.updateRenderTargetMipmap(lt))}x.setRenderTarget(Pt),x.setClearColor(N,z),Wt!==void 0&&(q.viewport=Wt),x.toneMapping=Lt}function Vr(E,B,W){const q=B.isScene===!0?B.overrideMaterial:null;for(let G=0,lt=E.length;G<lt;G++){const bt=E[G],Pt=bt.object,Lt=bt.geometry,Wt=q===null?bt.material:q,Xt=bt.group;Pt.layers.test(W.layers)&&Bl(Pt,B,W,Lt,Wt,Xt)}}function Bl(E,B,W,q,G,lt){E.onBeforeRender(x,B,W,q,G,lt),E.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),G.onBeforeRender(x,B,W,q,E,lt),G.transparent===!0&&G.side===ge&&G.forceSinglePass===!1?(G.side=Je,G.needsUpdate=!0,x.renderBufferDirect(W,B,q,G,E,lt),G.side=gi,G.needsUpdate=!0,x.renderBufferDirect(W,B,q,G,E,lt),G.side=ge):x.renderBufferDirect(W,B,q,G,E,lt),E.onAfterRender(x,B,W,q,G,lt)}function Wr(E,B,W){B.isScene!==!0&&(B=ne);const q=_t.get(E),G=p.state.lights,lt=p.state.shadowsArray,bt=G.state.version,Pt=At.getParameters(E,G.state,lt,B,W),Lt=At.getProgramCacheKey(Pt);let Wt=q.programs;q.environment=E.isMeshStandardMaterial?B.environment:null,q.fog=B.fog,q.envMap=(E.isMeshStandardMaterial?V:T).get(E.envMap||q.environment),q.envMapRotation=q.environment!==null&&E.envMap===null?B.environmentRotation:E.envMapRotation,Wt===void 0&&(E.addEventListener("dispose",jt),Wt=new Map,q.programs=Wt);let Xt=Wt.get(Lt);if(Xt!==void 0){if(q.currentProgram===Xt&&q.lightsStateVersion===bt)return Hl(E,Pt),Xt}else Pt.uniforms=At.getUniforms(E),E.onBeforeCompile(Pt,x),Xt=At.acquireProgram(Pt,Lt),Wt.set(Lt,Xt),q.uniforms=Pt.uniforms;const It=q.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(It.clippingPlanes=ot.uniform),Hl(E,Pt),q.needsLights=Xu(E),q.lightsStateVersion=bt,q.needsLights&&(It.ambientLightColor.value=G.state.ambient,It.lightProbe.value=G.state.probe,It.directionalLights.value=G.state.directional,It.directionalLightShadows.value=G.state.directionalShadow,It.spotLights.value=G.state.spot,It.spotLightShadows.value=G.state.spotShadow,It.rectAreaLights.value=G.state.rectArea,It.ltc_1.value=G.state.rectAreaLTC1,It.ltc_2.value=G.state.rectAreaLTC2,It.pointLights.value=G.state.point,It.pointLightShadows.value=G.state.pointShadow,It.hemisphereLights.value=G.state.hemi,It.directionalShadowMap.value=G.state.directionalShadowMap,It.directionalShadowMatrix.value=G.state.directionalShadowMatrix,It.spotShadowMap.value=G.state.spotShadowMap,It.spotLightMatrix.value=G.state.spotLightMatrix,It.spotLightMap.value=G.state.spotLightMap,It.pointShadowMap.value=G.state.pointShadowMap,It.pointShadowMatrix.value=G.state.pointShadowMatrix),q.currentProgram=Xt,q.uniformsList=null,Xt}function Gl(E){if(E.uniformsList===null){const B=E.currentProgram.getUniforms();E.uniformsList=Da.seqWithValue(B.seq,E.uniforms)}return E.uniformsList}function Hl(E,B){const W=_t.get(E);W.outputColorSpace=B.outputColorSpace,W.batching=B.batching,W.batchingColor=B.batchingColor,W.instancing=B.instancing,W.instancingColor=B.instancingColor,W.instancingMorph=B.instancingMorph,W.skinning=B.skinning,W.morphTargets=B.morphTargets,W.morphNormals=B.morphNormals,W.morphColors=B.morphColors,W.morphTargetsCount=B.morphTargetsCount,W.numClippingPlanes=B.numClippingPlanes,W.numIntersection=B.numClipIntersection,W.vertexAlphas=B.vertexAlphas,W.vertexTangents=B.vertexTangents,W.toneMapping=B.toneMapping}function qu(E,B,W,q,G){B.isScene!==!0&&(B=ne),L.resetTextureUnits();const lt=B.fog,bt=q.isMeshStandardMaterial?B.environment:null,Pt=A===null?x.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:tn,Lt=(q.isMeshStandardMaterial?V:T).get(q.envMap||bt),Wt=q.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Xt=!!W.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),It=!!W.morphAttributes.position,ae=!!W.morphAttributes.normal,we=!!W.morphAttributes.color;let Ae=Ni;q.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(Ae=x.toneMapping);const en=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,fe=en!==void 0?en.length:0,Nt=_t.get(q),ti=p.state.lights;if(Q===!0&&(dt===!0||E!==M)){const dn=E===M&&q.id===y;ot.setState(q,E,dn)}let ue=!1;q.version===Nt.__version?(Nt.needsLights&&Nt.lightsStateVersion!==ti.state.version||Nt.outputColorSpace!==Pt||G.isBatchedMesh&&Nt.batching===!1||!G.isBatchedMesh&&Nt.batching===!0||G.isBatchedMesh&&Nt.batchingColor===!0&&G.colorTexture===null||G.isBatchedMesh&&Nt.batchingColor===!1&&G.colorTexture!==null||G.isInstancedMesh&&Nt.instancing===!1||!G.isInstancedMesh&&Nt.instancing===!0||G.isSkinnedMesh&&Nt.skinning===!1||!G.isSkinnedMesh&&Nt.skinning===!0||G.isInstancedMesh&&Nt.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&Nt.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&Nt.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&Nt.instancingMorph===!1&&G.morphTexture!==null||Nt.envMap!==Lt||q.fog===!0&&Nt.fog!==lt||Nt.numClippingPlanes!==void 0&&(Nt.numClippingPlanes!==ot.numPlanes||Nt.numIntersection!==ot.numIntersection)||Nt.vertexAlphas!==Wt||Nt.vertexTangents!==Xt||Nt.morphTargets!==It||Nt.morphNormals!==ae||Nt.morphColors!==we||Nt.toneMapping!==Ae||Nt.morphTargetsCount!==fe)&&(ue=!0):(ue=!0,Nt.__version=q.version);let Cn=Nt.currentProgram;ue===!0&&(Cn=Wr(q,B,G));let is=!1,on=!1,Ys=!1;const Re=Cn.getUniforms(),Gn=Nt.uniforms;if(ft.useProgram(Cn.program)&&(is=!0,on=!0,Ys=!0),q.id!==y&&(y=q.id,on=!0),is||M!==E){ft.buffers.depth.getReversed()?(st.copy(E.projectionMatrix),ep(st),np(st),Re.setValue(I,"projectionMatrix",st)):Re.setValue(I,"projectionMatrix",E.projectionMatrix),Re.setValue(I,"viewMatrix",E.matrixWorldInverse);const _i=Re.map.cameraPosition;_i!==void 0&&_i.setValue(I,Dt.setFromMatrixPosition(E.matrixWorld)),Mt.logarithmicDepthBuffer&&Re.setValue(I,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&Re.setValue(I,"isOrthographic",E.isOrthographicCamera===!0),M!==E&&(M=E,on=!0,Ys=!0)}if(G.isSkinnedMesh){Re.setOptional(I,G,"bindMatrix"),Re.setOptional(I,G,"bindMatrixInverse");const dn=G.skeleton;dn&&(dn.boneTexture===null&&dn.computeBoneTexture(),Re.setValue(I,"boneTexture",dn.boneTexture,L))}G.isBatchedMesh&&(Re.setOptional(I,G,"batchingTexture"),Re.setValue(I,"batchingTexture",G._matricesTexture,L),Re.setOptional(I,G,"batchingIdTexture"),Re.setValue(I,"batchingIdTexture",G._indirectTexture,L),Re.setOptional(I,G,"batchingColorTexture"),G._colorsTexture!==null&&Re.setValue(I,"batchingColorTexture",G._colorsTexture,L));const Js=W.morphAttributes;if((Js.position!==void 0||Js.normal!==void 0||Js.color!==void 0)&&Vt.update(G,W,Cn),(on||Nt.receiveShadow!==G.receiveShadow)&&(Nt.receiveShadow=G.receiveShadow,Re.setValue(I,"receiveShadow",G.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(Gn.envMap.value=Lt,Gn.flipEnvMap.value=Lt.isCubeTexture&&Lt.isRenderTargetTexture===!1?-1:1),q.isMeshStandardMaterial&&q.envMap===null&&B.environment!==null&&(Gn.envMapIntensity.value=B.environmentIntensity),on&&(Re.setValue(I,"toneMappingExposure",x.toneMappingExposure),Nt.needsLights&&ju(Gn,Ys),lt&&q.fog===!0&&pt.refreshFogUniforms(Gn,lt),pt.refreshMaterialUniforms(Gn,q,H,k,p.state.transmissionRenderTarget[E.id]),Da.upload(I,Gl(Nt),Gn,L)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(Da.upload(I,Gl(Nt),Gn,L),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&Re.setValue(I,"center",G.center),Re.setValue(I,"modelViewMatrix",G.modelViewMatrix),Re.setValue(I,"normalMatrix",G.normalMatrix),Re.setValue(I,"modelMatrix",G.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){const dn=q.uniformsGroups;for(let _i=0,yi=dn.length;_i<yi;_i++){const Vl=dn[_i];O.update(Vl,Cn),O.bind(Vl,Cn)}}return Cn}function ju(E,B){E.ambientLightColor.needsUpdate=B,E.lightProbe.needsUpdate=B,E.directionalLights.needsUpdate=B,E.directionalLightShadows.needsUpdate=B,E.pointLights.needsUpdate=B,E.pointLightShadows.needsUpdate=B,E.spotLights.needsUpdate=B,E.spotLightShadows.needsUpdate=B,E.rectAreaLights.needsUpdate=B,E.hemisphereLights.needsUpdate=B}function Xu(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(E,B,W){_t.get(E.texture).__webglTexture=B,_t.get(E.depthTexture).__webglTexture=W;const q=_t.get(E);q.__hasExternalTextures=!0,q.__autoAllocateDepthBuffer=W===void 0,q.__autoAllocateDepthBuffer||rt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),q.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,B){const W=_t.get(E);W.__webglFramebuffer=B,W.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(E,B=0,W=0){A=E,w=B,R=W;let q=!0,G=null,lt=!1,bt=!1;if(E){const Lt=_t.get(E);if(Lt.__useDefaultFramebuffer!==void 0)ft.bindFramebuffer(I.FRAMEBUFFER,null),q=!1;else if(Lt.__webglFramebuffer===void 0)L.setupRenderTarget(E);else if(Lt.__hasExternalTextures)L.rebindTextures(E,_t.get(E.texture).__webglTexture,_t.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const It=E.depthTexture;if(Lt.__boundDepthTexture!==It){if(It!==null&&_t.has(It)&&(E.width!==It.image.width||E.height!==It.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");L.setupDepthRenderbuffer(E)}}const Wt=E.texture;(Wt.isData3DTexture||Wt.isDataArrayTexture||Wt.isCompressedArrayTexture)&&(bt=!0);const Xt=_t.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Xt[B])?G=Xt[B][W]:G=Xt[B],lt=!0):E.samples>0&&L.useMultisampledRTT(E)===!1?G=_t.get(E).__webglMultisampledFramebuffer:Array.isArray(Xt)?G=Xt[W]:G=Xt,S.copy(E.viewport),D.copy(E.scissor),U=E.scissorTest}else S.copy($).multiplyScalar(H).floor(),D.copy(St).multiplyScalar(H).floor(),U=Ht;if(ft.bindFramebuffer(I.FRAMEBUFFER,G)&&q&&ft.drawBuffers(E,G),ft.viewport(S),ft.scissor(D),ft.setScissorTest(U),lt){const Lt=_t.get(E.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+B,Lt.__webglTexture,W)}else if(bt){const Lt=_t.get(E.texture),Wt=B||0;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,Lt.__webglTexture,W||0,Wt)}y=-1},this.readRenderTargetPixels=function(E,B,W,q,G,lt,bt){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pt=_t.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&bt!==void 0&&(Pt=Pt[bt]),Pt){ft.bindFramebuffer(I.FRAMEBUFFER,Pt);try{const Lt=E.texture,Wt=Lt.format,Xt=Lt.type;if(!Mt.textureFormatReadable(Wt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Mt.textureTypeReadable(Xt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=E.width-q&&W>=0&&W<=E.height-G&&I.readPixels(B,W,q,G,Yt.convert(Wt),Yt.convert(Xt),lt)}finally{const Lt=A!==null?_t.get(A).__webglFramebuffer:null;ft.bindFramebuffer(I.FRAMEBUFFER,Lt)}}},this.readRenderTargetPixelsAsync=async function(E,B,W,q,G,lt,bt){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Pt=_t.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&bt!==void 0&&(Pt=Pt[bt]),Pt){const Lt=E.texture,Wt=Lt.format,Xt=Lt.type;if(!Mt.textureFormatReadable(Wt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Mt.textureTypeReadable(Xt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(B>=0&&B<=E.width-q&&W>=0&&W<=E.height-G){ft.bindFramebuffer(I.FRAMEBUFFER,Pt);const It=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,It),I.bufferData(I.PIXEL_PACK_BUFFER,lt.byteLength,I.STREAM_READ),I.readPixels(B,W,q,G,Yt.convert(Wt),Yt.convert(Xt),0);const ae=A!==null?_t.get(A).__webglFramebuffer:null;ft.bindFramebuffer(I.FRAMEBUFFER,ae);const we=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await tp(I,we,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,It),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,lt),I.deleteBuffer(It),I.deleteSync(we),lt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(E,B=null,W=0){E.isTexture!==!0&&(fr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),B=arguments[0]||null,E=arguments[1]);const q=Math.pow(2,-W),G=Math.floor(E.image.width*q),lt=Math.floor(E.image.height*q),bt=B!==null?B.x:0,Pt=B!==null?B.y:0;L.setTexture2D(E,0),I.copyTexSubImage2D(I.TEXTURE_2D,W,0,0,bt,Pt,G,lt),ft.unbindTexture()},this.copyTextureToTexture=function(E,B,W=null,q=null,G=0){E.isTexture!==!0&&(fr("WebGLRenderer: copyTextureToTexture function signature has changed."),q=arguments[0]||null,E=arguments[1],B=arguments[2],G=arguments[3]||0,W=null);let lt,bt,Pt,Lt,Wt,Xt,It,ae,we;const Ae=E.isCompressedTexture?E.mipmaps[G]:E.image;W!==null?(lt=W.max.x-W.min.x,bt=W.max.y-W.min.y,Pt=W.isBox3?W.max.z-W.min.z:1,Lt=W.min.x,Wt=W.min.y,Xt=W.isBox3?W.min.z:0):(lt=Ae.width,bt=Ae.height,Pt=Ae.depth||1,Lt=0,Wt=0,Xt=0),q!==null?(It=q.x,ae=q.y,we=q.z):(It=0,ae=0,we=0);const en=Yt.convert(B.format),fe=Yt.convert(B.type);let Nt;B.isData3DTexture?(L.setTexture3D(B,0),Nt=I.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(L.setTexture2DArray(B,0),Nt=I.TEXTURE_2D_ARRAY):(L.setTexture2D(B,0),Nt=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,B.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,B.unpackAlignment);const ti=I.getParameter(I.UNPACK_ROW_LENGTH),ue=I.getParameter(I.UNPACK_IMAGE_HEIGHT),Cn=I.getParameter(I.UNPACK_SKIP_PIXELS),is=I.getParameter(I.UNPACK_SKIP_ROWS),on=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,Ae.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Ae.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Lt),I.pixelStorei(I.UNPACK_SKIP_ROWS,Wt),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Xt);const Ys=E.isDataArrayTexture||E.isData3DTexture,Re=B.isDataArrayTexture||B.isData3DTexture;if(E.isRenderTargetTexture||E.isDepthTexture){const Gn=_t.get(E),Js=_t.get(B),dn=_t.get(Gn.__renderTarget),_i=_t.get(Js.__renderTarget);ft.bindFramebuffer(I.READ_FRAMEBUFFER,dn.__webglFramebuffer),ft.bindFramebuffer(I.DRAW_FRAMEBUFFER,_i.__webglFramebuffer);for(let yi=0;yi<Pt;yi++)Ys&&I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,_t.get(E).__webglTexture,G,Xt+yi),E.isDepthTexture?(Re&&I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,_t.get(B).__webglTexture,G,we+yi),I.blitFramebuffer(Lt,Wt,lt,bt,It,ae,lt,bt,I.DEPTH_BUFFER_BIT,I.NEAREST)):Re?I.copyTexSubImage3D(Nt,G,It,ae,we+yi,Lt,Wt,lt,bt):I.copyTexSubImage2D(Nt,G,It,ae,we+yi,Lt,Wt,lt,bt);ft.bindFramebuffer(I.READ_FRAMEBUFFER,null),ft.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else Re?E.isDataTexture||E.isData3DTexture?I.texSubImage3D(Nt,G,It,ae,we,lt,bt,Pt,en,fe,Ae.data):B.isCompressedArrayTexture?I.compressedTexSubImage3D(Nt,G,It,ae,we,lt,bt,Pt,en,Ae.data):I.texSubImage3D(Nt,G,It,ae,we,lt,bt,Pt,en,fe,Ae):E.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,G,It,ae,lt,bt,en,fe,Ae.data):E.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,G,It,ae,Ae.width,Ae.height,en,Ae.data):I.texSubImage2D(I.TEXTURE_2D,G,It,ae,lt,bt,en,fe,Ae);I.pixelStorei(I.UNPACK_ROW_LENGTH,ti),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,ue),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Cn),I.pixelStorei(I.UNPACK_SKIP_ROWS,is),I.pixelStorei(I.UNPACK_SKIP_IMAGES,on),G===0&&B.generateMipmaps&&I.generateMipmap(Nt),ft.unbindTexture()},this.copyTextureToTexture3D=function(E,B,W=null,q=null,G=0){return E.isTexture!==!0&&(fr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),W=arguments[0]||null,q=arguments[1]||null,E=arguments[2],B=arguments[3],G=arguments[4]||0),fr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(E,B,W,q,G)},this.initRenderTarget=function(E){_t.get(E).__webglFramebuffer===void 0&&L.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?L.setTextureCube(E,0):E.isData3DTexture?L.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?L.setTexture2DArray(E,0):L.setTexture2D(E,0),ft.unbindTexture()},this.resetState=function(){w=0,R=0,A=null,ft.reset(),Se.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ui}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=ie._getDrawingBufferColorSpace(t),e.unpackColorSpace=ie._getUnpackColorSpace()}}class Oa{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new ct(t),this.near=e,this.far=n}clone(){return new Oa(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class xl extends _e{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new an,this.environmentIntensity=1,this.environmentRotation=new an,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class ux{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Hc,this.updateRanges=[],this.version=0,this.uuid=Mn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,r=this.stride;i<r;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Mn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Mn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const $e=new P;class vl{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)$e.fromBufferAttribute(this,e),$e.applyMatrix4(t),this.setXYZ(e,$e.x,$e.y,$e.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)$e.fromBufferAttribute(this,e),$e.applyNormalMatrix(t),this.setXYZ(e,$e.x,$e.y,$e.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)$e.fromBufferAttribute(this,e),$e.transformDirection(t),this.setXYZ(e,$e.x,$e.y,$e.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Fn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=pe(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=pe(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=pe(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=pe(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=pe(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Fn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Fn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Fn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Fn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=pe(e,this.array),n=pe(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=pe(e,this.array),n=pe(n,this.array),i=pe(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=pe(e,this.array),n=pe(n,this.array),i=pe(i,this.array),r=pe(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return new be(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new vl(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const qh=new P,jh=new le,Xh=new le,dx=new P,Kh=new kt,fa=new P,zo=new Yn,Yh=new kt,Bo=new no;class px extends J{constructor(t,e){super(t,e),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Xl,this.bindMatrix=new kt,this.bindMatrixInverse=new kt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const t=this.geometry;this.boundingBox===null&&(this.boundingBox=new vi),this.boundingBox.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,fa),this.boundingBox.expandByPoint(fa)}computeBoundingSphere(){const t=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Yn),this.boundingSphere.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,fa),this.boundingSphere.expandByPoint(fa)}copy(t,e){return super.copy(t,e),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}raycast(t,e){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),zo.copy(this.boundingSphere),zo.applyMatrix4(i),t.ray.intersectsSphere(zo)!==!1&&(Yh.copy(i).invert(),Bo.copy(t.ray).applyMatrix4(Yh),!(this.boundingBox!==null&&Bo.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(t,e,Bo)))}getVertexPosition(t,e){return super.getVertexPosition(t,e),this.applyBoneTransform(t,e),e}bind(t,e){this.skeleton=t,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const t=new le,e=this.geometry.attributes.skinWeight;for(let n=0,i=e.count;n<i;n++){t.fromBufferAttribute(e,n);const r=1/t.manhattanLength();r!==1/0?t.multiplyScalar(r):t.set(1,0,0,0),e.setXYZW(n,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),this.bindMode===Xl?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Sd?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(t,e){const n=this.skeleton,i=this.geometry;jh.fromBufferAttribute(i.attributes.skinIndex,t),Xh.fromBufferAttribute(i.attributes.skinWeight,t),qh.copy(e).applyMatrix4(this.bindMatrix),e.set(0,0,0);for(let r=0;r<4;r++){const a=Xh.getComponent(r);if(a!==0){const o=jh.getComponent(r);Kh.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),e.addScaledVector(dx.copy(qh).applyMatrix4(Kh),a)}}return e.applyMatrix4(this.bindMatrixInverse)}}class gu extends _e{constructor(){super(),this.isBone=!0,this.type="Bone"}}class _l extends Fe{constructor(t=null,e=1,n=1,i,r,a,o,c,l=Ze,h=Ze,f,u){super(null,a,o,c,l,h,i,r,f,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Jh=new kt,mx=new kt;class yl{constructor(t=[],e=[]){this.uuid=Mn(),this.bones=t.slice(0),this.boneInverses=e,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const t=this.bones,e=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),e.length===0)this.calculateInverses();else if(t.length!==e.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new kt)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,e=this.bones.length;t<e;t++){const n=new kt;this.bones[t]&&n.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&n.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const t=this.bones,e=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,a=t.length;r<a;r++){const o=t[r]?t[r].matrixWorld:mx;Jh.multiplyMatrices(o,e[r]),Jh.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new yl(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(this.bones.length*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);const e=new Float32Array(t*t*4);e.set(this.boneMatrices);const n=new _l(e,t,t,vn,zn);return n.needsUpdate=!0,this.boneMatrices=e,this.boneTexture=n,this}getBoneByName(t){for(let e=0,n=this.bones.length;e<n;e++){const i=this.bones[e];if(i.name===t)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(t,e){this.uuid=t.uuid;for(let n=0,i=t.bones.length;n<i;n++){const r=t.bones[n];let a=e[r];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),a=new gu),this.bones.push(a),this.boneInverses.push(new kt().fromArray(t.boneInverses[n]))}return this.init(),this}toJSON(){const t={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;const e=this.bones,n=this.boneInverses;for(let i=0,r=e.length;i<r;i++){const a=e[i];t.bones.push(a.uuid);const o=n[i];t.boneInverses.push(o.toArray())}return t}}class Wc extends be{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const xs=new kt,Zh=new kt,ua=[],$h=new vi,gx=new kt,er=new J,nr=new Yn;class Le extends J{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Wc(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,gx)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new vi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,xs),$h.copy(t.boundingBox).applyMatrix4(xs),this.boundingBox.union($h)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Yn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,xs),nr.copy(t.boundingSphere).applyMatrix4(xs),this.boundingSphere.union(nr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(t,e){const n=this.matrixWorld,i=this.count;if(er.geometry=this.geometry,er.material=this.material,er.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),nr.copy(this.boundingSphere),nr.applyMatrix4(n),t.ray.intersectsSphere(nr)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,xs),Zh.multiplyMatrices(n,xs),er.matrixWorld=Zh,er.raycast(t,ua);for(let a=0,o=ua.length;a<o;a++){const c=ua[a];c.instanceId=r,c.object=this,e.push(c)}ua.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Wc(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new _l(new Float32Array(i*this.count),i,this.count,Qa,zn));const r=this.morphTexture.source.data.data;let a=0;for(let l=0;l<n.length;l++)a+=n[l];const o=this.geometry.morphTargetsRelative?1:1-a,c=i*t;r[c]=o,r.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class Os extends Sn{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new ct(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const za=new P,Ba=new P,Qh=new kt,ir=new no,da=new Yn,Go=new P,tf=new P;class Ml extends _e{constructor(t=new xe,e=new Os){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let i=1,r=e.count;i<r;i++)za.fromBufferAttribute(e,i-1),Ba.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=za.distanceTo(Ba);t.setAttribute("lineDistance",new te(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),da.copy(n.boundingSphere),da.applyMatrix4(i),da.radius+=r,t.ray.intersectsSphere(da)===!1)return;Qh.copy(i).invert(),ir.copy(t.ray).applyMatrix4(Qh);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,h=n.index,u=n.attributes.position;if(h!==null){const d=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let b=d,m=g-1;b<m;b+=l){const p=h.getX(b),v=h.getX(b+1),_=pa(this,t,ir,c,p,v);_&&e.push(_)}if(this.isLineLoop){const b=h.getX(g-1),m=h.getX(d),p=pa(this,t,ir,c,b,m);p&&e.push(p)}}else{const d=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let b=d,m=g-1;b<m;b+=l){const p=pa(this,t,ir,c,b,b+1);p&&e.push(p)}if(this.isLineLoop){const b=pa(this,t,ir,c,g-1,d);b&&e.push(b)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function pa(s,t,e,n,i,r){const a=s.geometry.attributes.position;if(za.fromBufferAttribute(a,i),Ba.fromBufferAttribute(a,r),e.distanceSqToSegment(za,Ba,Go,tf)>n)return;Go.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(Go);if(!(c<t.near||c>t.far))return{distance:c,point:tf.clone().applyMatrix4(s.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:s}}const ef=new P,nf=new P;class Ir extends Ml{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let i=0,r=e.count;i<r;i+=2)ef.fromBufferAttribute(e,i),nf.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+ef.distanceTo(nf);t.setAttribute("lineDistance",new te(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class bx extends Ml{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}}class bu extends Sn{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new ct(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const sf=new kt,qc=new no,ma=new Yn,ga=new P;class xu extends _e{constructor(t=new xe,e=new bu){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ma.copy(n.boundingSphere),ma.applyMatrix4(i),ma.radius+=r,t.ray.intersectsSphere(ma)===!1)return;sf.copy(i).invert(),qc.copy(t.ray).applyMatrix4(sf);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,f=n.attributes.position;if(l!==null){const u=Math.max(0,a.start),d=Math.min(l.count,a.start+a.count);for(let g=u,b=d;g<b;g++){const m=l.getX(g);ga.fromBufferAttribute(f,m),rf(ga,m,c,i,t,e,this)}}else{const u=Math.max(0,a.start),d=Math.min(f.count,a.start+a.count);for(let g=u,b=d;g<b;g++)ga.fromBufferAttribute(f,g),rf(ga,g,c,i,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function rf(s,t,e,n,i,r,a){const o=qc.distanceSqToPoint(s);if(o<e){const c=new P;qc.closestPointToPoint(s,c),c.applyMatrix4(n);const l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}class xx extends Fe{constructor(t,e,n,i,r,a,o,c,l){super(t,e,n,i,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Jn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,i=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(i),e.push(r),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let i=0;const r=n.length;let a;e?a=e:a=t*n[r-1];let o=0,c=r-1,l;for(;o<=c;)if(i=Math.floor(o+(c-o)/2),l=n[i]-a,l<0)o=i+1;else if(l>0)c=i-1;else{c=i;break}if(i=c,n[i]===a)return i/(r-1);const h=n[i],u=n[i+1]-h,d=(a-h)/u;return(i+d)/(r-1)}getTangent(t,e){let i=t-1e-4,r=t+1e-4;i<0&&(i=0),r>1&&(r=1);const a=this.getPoint(i),o=this.getPoint(r),c=e||(a.isVector2?new ht:new P);return c.copy(o).sub(a).normalize(),c}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new P,i=[],r=[],a=[],o=new P,c=new kt;for(let d=0;d<=t;d++){const g=d/t;i[d]=this.getTangentAt(g,new P)}r[0]=new P,a[0]=new P;let l=Number.MAX_VALUE;const h=Math.abs(i[0].x),f=Math.abs(i[0].y),u=Math.abs(i[0].z);h<=l&&(l=h,n.set(1,0,0)),f<=l&&(l=f,n.set(0,1,0)),u<=l&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],o),a[0].crossVectors(i[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(i[d-1],i[d]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(He(i[d-1].dot(i[d]),-1,1));r[d].applyMatrix4(c.makeRotationAxis(o,g))}a[d].crossVectors(i[d],r[d])}if(e===!0){let d=Math.acos(He(r[0].dot(r[t]),-1,1));d/=t,i[0].dot(o.crossVectors(r[0],r[t]))>0&&(d=-d);for(let g=1;g<=t;g++)r[g].applyMatrix4(c.makeRotationAxis(i[g],d*g)),a[g].crossVectors(i[g],r[g])}return{tangents:i,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Sl extends Jn{constructor(t=0,e=0,n=1,i=1,r=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(t,e=new ht){const n=e,i=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(a?r=0:r=i),this.aClockwise===!0&&!a&&(r===i?r=-i:r=r-i);const o=this.aStartAngle+t*r;let c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),f=Math.sin(this.aRotation),u=c-this.aX,d=l-this.aY;c=u*h-d*f+this.aX,l=u*f+d*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class vx extends Sl{constructor(t,e,n,i,r,a){super(t,e,n,n,i,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function wl(){let s=0,t=0,e=0,n=0;function i(r,a,o,c){s=r,t=o,e=-3*r+3*a-2*o-c,n=2*r-2*a+o+c}return{initCatmullRom:function(r,a,o,c,l){i(a,o,l*(o-r),l*(c-a))},initNonuniformCatmullRom:function(r,a,o,c,l,h,f){let u=(a-r)/l-(o-r)/(l+h)+(o-a)/h,d=(o-a)/h-(c-a)/(h+f)+(c-o)/f;u*=h,d*=h,i(a,o,u,d)},calc:function(r){const a=r*r,o=a*r;return s+t*r+e*a+n*o}}}const ba=new P,Ho=new wl,Vo=new wl,Wo=new wl;class vu extends Jn{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new P){const n=e,i=this.points,r=i.length,a=(r-(this.closed?0:1))*t;let o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:c===0&&o===r-1&&(o=r-2,c=1);let l,h;this.closed||o>0?l=i[(o-1)%r]:(ba.subVectors(i[0],i[1]).add(i[0]),l=ba);const f=i[o%r],u=i[(o+1)%r];if(this.closed||o+2<r?h=i[(o+2)%r]:(ba.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=ba),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(f),d),b=Math.pow(f.distanceToSquared(u),d),m=Math.pow(u.distanceToSquared(h),d);b<1e-4&&(b=1),g<1e-4&&(g=b),m<1e-4&&(m=b),Ho.initNonuniformCatmullRom(l.x,f.x,u.x,h.x,g,b,m),Vo.initNonuniformCatmullRom(l.y,f.y,u.y,h.y,g,b,m),Wo.initNonuniformCatmullRom(l.z,f.z,u.z,h.z,g,b,m)}else this.curveType==="catmullrom"&&(Ho.initCatmullRom(l.x,f.x,u.x,h.x,this.tension),Vo.initCatmullRom(l.y,f.y,u.y,h.y,this.tension),Wo.initCatmullRom(l.z,f.z,u.z,h.z,this.tension));return n.set(Ho.calc(c),Vo.calc(c),Wo.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new P().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function af(s,t,e,n,i){const r=(n-t)*.5,a=(i-e)*.5,o=s*s,c=s*o;return(2*e-2*n+r+a)*c+(-3*e+3*n-2*r-a)*o+r*s+e}function _x(s,t){const e=1-s;return e*e*t}function yx(s,t){return 2*(1-s)*s*t}function Mx(s,t){return s*s*t}function xr(s,t,e,n){return _x(s,t)+yx(s,e)+Mx(s,n)}function Sx(s,t){const e=1-s;return e*e*e*t}function wx(s,t){const e=1-s;return 3*e*e*s*t}function Tx(s,t){return 3*(1-s)*s*s*t}function Ex(s,t){return s*s*s*t}function vr(s,t,e,n,i){return Sx(s,t)+wx(s,e)+Tx(s,n)+Ex(s,i)}class _u extends Jn{constructor(t=new ht,e=new ht,n=new ht,i=new ht){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new ht){const n=e,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(vr(t,i.x,r.x,a.x,o.x),vr(t,i.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Ax extends Jn{constructor(t=new P,e=new P,n=new P,i=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new P){const n=e,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(vr(t,i.x,r.x,a.x,o.x),vr(t,i.y,r.y,a.y,o.y),vr(t,i.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class yu extends Jn{constructor(t=new ht,e=new ht){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ht){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ht){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Rx extends Jn{constructor(t=new P,e=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new P){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new P){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Mu extends Jn{constructor(t=new ht,e=new ht,n=new ht){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new ht){const n=e,i=this.v0,r=this.v1,a=this.v2;return n.set(xr(t,i.x,r.x,a.x),xr(t,i.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Su extends Jn{constructor(t=new P,e=new P,n=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new P){const n=e,i=this.v0,r=this.v1,a=this.v2;return n.set(xr(t,i.x,r.x,a.x),xr(t,i.y,r.y,a.y),xr(t,i.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class wu extends Jn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ht){const n=e,i=this.points,r=(i.length-1)*t,a=Math.floor(r),o=r-a,c=i[a===0?a:a-1],l=i[a],h=i[a>i.length-2?i.length-1:a+1],f=i[a>i.length-3?i.length-1:a+2];return n.set(af(o,c.x,l.x,h.x,f.x),af(o,c.y,l.y,h.y,f.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new ht().fromArray(i))}return this}}var Ga=Object.freeze({__proto__:null,ArcCurve:vx,CatmullRomCurve3:vu,CubicBezierCurve:_u,CubicBezierCurve3:Ax,EllipseCurve:Sl,LineCurve:yu,LineCurve3:Rx,QuadraticBezierCurve:Mu,QuadraticBezierCurve3:Su,SplineCurve:wu});class Cx extends Jn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Ga[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),i=this.getCurveLengths();let r=0;for(;r<i.length;){if(i[r]>=n){const a=i[r]-n,o=this.curves[r],c=o.getLength(),l=c===0?0:1-a/c;return o.getPointAt(l,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let i=0,r=this.curves;i<r.length;i++){const a=r[i],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,c=a.getPoints(o);for(let l=0;l<c.length;l++){const h=c[l];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(new Ga[i.type]().fromJSON(i))}return this}}class Ha extends Cx{constructor(t){super(),this.type="Path",this.currentPoint=new ht,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new yu(this.currentPoint.clone(),new ht(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){const r=new Mu(this.currentPoint.clone(),new ht(t,e),new ht(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,r,a){const o=new _u(this.currentPoint.clone(),new ht(t,e),new ht(n,i),new ht(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new wu(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,r,a){const o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+o,e+c,n,i,r,a),this}absarc(t,e,n,i,r,a){return this.absellipse(t,e,n,n,i,r,a),this}ellipse(t,e,n,i,r,a,o,c){const l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,n,i,r,a,o,c),this}absellipse(t,e,n,i,r,a,o,c){const l=new Sl(t,e,n,i,r,a,o,c);if(this.curves.length>0){const f=l.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(l);const h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Gr extends xe{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);const r=[],a=[],o=[],c=[],l=new P,h=new ht;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let f=0,u=3;f<=e;f++,u+=3){const d=n+f/e*i;l.x=t*Math.cos(d),l.y=t*Math.sin(d),a.push(l.x,l.y,l.z),o.push(0,0,1),h.x=(a[u]/t+1)/2,h.y=(a[u+1]/t+1)/2,c.push(h.x,h.y)}for(let f=1;f<=e;f++)r.push(f,f+1,0);this.setIndex(r),this.setAttribute("position",new te(a,3)),this.setAttribute("normal",new te(o,3)),this.setAttribute("uv",new te(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Gr(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class re extends xe{constructor(t=1,e=1,n=1,i=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};const l=this;i=Math.floor(i),r=Math.floor(r);const h=[],f=[],u=[],d=[];let g=0;const b=[],m=n/2;let p=0;v(),a===!1&&(t>0&&_(!0),e>0&&_(!1)),this.setIndex(h),this.setAttribute("position",new te(f,3)),this.setAttribute("normal",new te(u,3)),this.setAttribute("uv",new te(d,2));function v(){const x=new P,C=new P;let w=0;const R=(e-t)/n;for(let A=0;A<=r;A++){const y=[],M=A/r,S=M*(e-t)+t;for(let D=0;D<=i;D++){const U=D/i,N=U*c+o,z=Math.sin(N),F=Math.cos(N);C.x=S*z,C.y=-M*n+m,C.z=S*F,f.push(C.x,C.y,C.z),x.set(z,R,F).normalize(),u.push(x.x,x.y,x.z),d.push(U,1-M),y.push(g++)}b.push(y)}for(let A=0;A<i;A++)for(let y=0;y<r;y++){const M=b[y][A],S=b[y+1][A],D=b[y+1][A+1],U=b[y][A+1];(t>0||y!==0)&&(h.push(M,S,U),w+=3),(e>0||y!==r-1)&&(h.push(S,D,U),w+=3)}l.addGroup(p,w,0),p+=w}function _(x){const C=g,w=new ht,R=new P;let A=0;const y=x===!0?t:e,M=x===!0?1:-1;for(let D=1;D<=i;D++)f.push(0,m*M,0),u.push(0,M,0),d.push(.5,.5),g++;const S=g;for(let D=0;D<=i;D++){const N=D/i*c+o,z=Math.cos(N),F=Math.sin(N);R.x=y*F,R.y=m*M,R.z=y*z,f.push(R.x,R.y,R.z),u.push(0,M,0),w.x=z*.5+.5,w.y=F*.5*M+.5,d.push(w.x,w.y),g++}for(let D=0;D<i;D++){const U=C+D,N=S+D;x===!0?h.push(N,N+1,U):h.push(N+1,N,U),A+=3}l.addGroup(p,A,x===!0?1:2),p+=A}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new re(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Ve extends re{constructor(t=1,e=1,n=32,i=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,i,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new Ve(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Tl extends xe{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};const r=[],a=[];o(i),l(n),h(),this.setAttribute("position",new te(r,3)),this.setAttribute("normal",new te(r.slice(),3)),this.setAttribute("uv",new te(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(v){const _=new P,x=new P,C=new P;for(let w=0;w<e.length;w+=3)d(e[w+0],_),d(e[w+1],x),d(e[w+2],C),c(_,x,C,v)}function c(v,_,x,C){const w=C+1,R=[];for(let A=0;A<=w;A++){R[A]=[];const y=v.clone().lerp(x,A/w),M=_.clone().lerp(x,A/w),S=w-A;for(let D=0;D<=S;D++)D===0&&A===w?R[A][D]=y:R[A][D]=y.clone().lerp(M,D/S)}for(let A=0;A<w;A++)for(let y=0;y<2*(w-A)-1;y++){const M=Math.floor(y/2);y%2===0?(u(R[A][M+1]),u(R[A+1][M]),u(R[A][M])):(u(R[A][M+1]),u(R[A+1][M+1]),u(R[A+1][M]))}}function l(v){const _=new P;for(let x=0;x<r.length;x+=3)_.x=r[x+0],_.y=r[x+1],_.z=r[x+2],_.normalize().multiplyScalar(v),r[x+0]=_.x,r[x+1]=_.y,r[x+2]=_.z}function h(){const v=new P;for(let _=0;_<r.length;_+=3){v.x=r[_+0],v.y=r[_+1],v.z=r[_+2];const x=m(v)/2/Math.PI+.5,C=p(v)/Math.PI+.5;a.push(x,1-C)}g(),f()}function f(){for(let v=0;v<a.length;v+=6){const _=a[v+0],x=a[v+2],C=a[v+4],w=Math.max(_,x,C),R=Math.min(_,x,C);w>.9&&R<.1&&(_<.2&&(a[v+0]+=1),x<.2&&(a[v+2]+=1),C<.2&&(a[v+4]+=1))}}function u(v){r.push(v.x,v.y,v.z)}function d(v,_){const x=v*3;_.x=t[x+0],_.y=t[x+1],_.z=t[x+2]}function g(){const v=new P,_=new P,x=new P,C=new P,w=new ht,R=new ht,A=new ht;for(let y=0,M=0;y<r.length;y+=9,M+=6){v.set(r[y+0],r[y+1],r[y+2]),_.set(r[y+3],r[y+4],r[y+5]),x.set(r[y+6],r[y+7],r[y+8]),w.set(a[M+0],a[M+1]),R.set(a[M+2],a[M+3]),A.set(a[M+4],a[M+5]),C.copy(v).add(_).add(x).divideScalar(3);const S=m(C);b(w,M+0,v,S),b(R,M+2,_,S),b(A,M+4,x,S)}}function b(v,_,x,C){C<0&&v.x===1&&(a[_]=v.x-1),x.x===0&&x.z===0&&(a[_]=C/2/Math.PI+.5)}function m(v){return Math.atan2(v.z,-v.x)}function p(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Tl(t.vertices,t.indices,t.radius,t.details)}}class _r extends Ha{constructor(t){super(t),this.uuid=Mn(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(new Ha().fromJSON(i))}return this}}const Px={triangulate:function(s,t,e=2){const n=t&&t.length,i=n?t[0]*e:s.length;let r=Tu(s,0,i,e,!0);const a=[];if(!r||r.next===r.prev)return a;let o,c,l,h,f,u,d;if(n&&(r=Nx(s,t,r,e)),s.length>80*e){o=l=s[0],c=h=s[1];for(let g=e;g<i;g+=e)f=s[g],u=s[g+1],f<o&&(o=f),u<c&&(c=u),f>l&&(l=f),u>h&&(h=u);d=Math.max(l-o,h-c),d=d!==0?32767/d:0}return Dr(r,a,e,o,c,d,0),a}};function Tu(s,t,e,n,i){let r,a;if(i===jx(s,t,e,n)>0)for(r=t;r<e;r+=n)a=of(r,s[r],s[r+1],a);else for(r=e-n;r>=t;r-=n)a=of(r,s[r],s[r+1],a);return a&&ro(a,a.next)&&(Nr(a),a=a.next),a}function ns(s,t){if(!s)return s;t||(t=s);let e=s,n;do if(n=!1,!e.steiner&&(ro(e,e.next)||Ie(e.prev,e,e.next)===0)){if(Nr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Dr(s,t,e,n,i,r,a){if(!s)return;!a&&r&&Bx(s,n,i,r);let o=s,c,l;for(;s.prev!==s.next;){if(c=s.prev,l=s.next,r?Ix(s,n,i,r):Lx(s)){t.push(c.i/e|0),t.push(s.i/e|0),t.push(l.i/e|0),Nr(s),s=l.next,o=l.next;continue}if(s=l,s===o){a?a===1?(s=Dx(ns(s),t,e),Dr(s,t,e,n,i,r,2)):a===2&&Ux(s,t,e,n,i,r):Dr(ns(s),t,e,n,i,r,1);break}}}function Lx(s){const t=s.prev,e=s,n=s.next;if(Ie(t,e,n)>=0)return!1;const i=t.x,r=e.x,a=n.x,o=t.y,c=e.y,l=n.y,h=i<r?i<a?i:a:r<a?r:a,f=o<c?o<l?o:l:c<l?c:l,u=i>r?i>a?i:a:r>a?r:a,d=o>c?o>l?o:l:c>l?c:l;let g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=u&&g.y>=f&&g.y<=d&&Ss(i,o,r,c,a,l,g.x,g.y)&&Ie(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Ix(s,t,e,n){const i=s.prev,r=s,a=s.next;if(Ie(i,r,a)>=0)return!1;const o=i.x,c=r.x,l=a.x,h=i.y,f=r.y,u=a.y,d=o<c?o<l?o:l:c<l?c:l,g=h<f?h<u?h:u:f<u?f:u,b=o>c?o>l?o:l:c>l?c:l,m=h>f?h>u?h:u:f>u?f:u,p=jc(d,g,t,e,n),v=jc(b,m,t,e,n);let _=s.prevZ,x=s.nextZ;for(;_&&_.z>=p&&x&&x.z<=v;){if(_.x>=d&&_.x<=b&&_.y>=g&&_.y<=m&&_!==i&&_!==a&&Ss(o,h,c,f,l,u,_.x,_.y)&&Ie(_.prev,_,_.next)>=0||(_=_.prevZ,x.x>=d&&x.x<=b&&x.y>=g&&x.y<=m&&x!==i&&x!==a&&Ss(o,h,c,f,l,u,x.x,x.y)&&Ie(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;_&&_.z>=p;){if(_.x>=d&&_.x<=b&&_.y>=g&&_.y<=m&&_!==i&&_!==a&&Ss(o,h,c,f,l,u,_.x,_.y)&&Ie(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;x&&x.z<=v;){if(x.x>=d&&x.x<=b&&x.y>=g&&x.y<=m&&x!==i&&x!==a&&Ss(o,h,c,f,l,u,x.x,x.y)&&Ie(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function Dx(s,t,e){let n=s;do{const i=n.prev,r=n.next.next;!ro(i,r)&&Eu(i,n,n.next,r)&&Ur(i,r)&&Ur(r,i)&&(t.push(i.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),Nr(n),Nr(n.next),n=s=r),n=n.next}while(n!==s);return ns(n)}function Ux(s,t,e,n,i,r){let a=s;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Vx(a,o)){let c=Au(a,o);a=ns(a,a.next),c=ns(c,c.next),Dr(a,t,e,n,i,r,0),Dr(c,t,e,n,i,r,0);return}o=o.next}a=a.next}while(a!==s)}function Nx(s,t,e,n){const i=[];let r,a,o,c,l;for(r=0,a=t.length;r<a;r++)o=t[r]*n,c=r<a-1?t[r+1]*n:s.length,l=Tu(s,o,c,n,!1),l===l.next&&(l.steiner=!0),i.push(Hx(l));for(i.sort(kx),r=0;r<i.length;r++)e=Fx(i[r],e);return e}function kx(s,t){return s.x-t.x}function Fx(s,t){const e=Ox(s,t);if(!e)return t;const n=Au(e,s);return ns(n,n.next),ns(e,e.next)}function Ox(s,t){let e=t,n=-1/0,i;const r=s.x,a=s.y;do{if(a<=e.y&&a>=e.next.y&&e.next.y!==e.y){const u=e.x+(a-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=r&&u>n&&(n=u,i=e.x<e.next.x?e:e.next,u===r))return i}e=e.next}while(e!==t);if(!i)return null;const o=i,c=i.x,l=i.y;let h=1/0,f;e=i;do r>=e.x&&e.x>=c&&r!==e.x&&Ss(a<l?r:n,a,c,l,a<l?n:r,a,e.x,e.y)&&(f=Math.abs(a-e.y)/(r-e.x),Ur(e,s)&&(f<h||f===h&&(e.x>i.x||e.x===i.x&&zx(i,e)))&&(i=e,h=f)),e=e.next;while(e!==o);return i}function zx(s,t){return Ie(s.prev,s,t.prev)<0&&Ie(t.next,s,s.next)<0}function Bx(s,t,e,n){let i=s;do i.z===0&&(i.z=jc(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,Gx(i)}function Gx(s){let t,e,n,i,r,a,o,c,l=1;do{for(e=s,s=null,r=null,a=0;e;){for(a++,n=e,o=0,t=0;t<l&&(o++,n=n.nextZ,!!n);t++);for(c=l;o>0||c>0&&n;)o!==0&&(c===0||!n||e.z<=n.z)?(i=e,e=e.nextZ,o--):(i=n,n=n.nextZ,c--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;e=n}r.nextZ=null,l*=2}while(a>1);return s}function jc(s,t,e,n,i){return s=(s-e)*i|0,t=(t-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,s|t<<1}function Hx(s){let t=s,e=s;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==s);return e}function Ss(s,t,e,n,i,r,a,o){return(i-a)*(t-o)>=(s-a)*(r-o)&&(s-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(i-a)*(n-o)}function Vx(s,t){return s.next.i!==t.i&&s.prev.i!==t.i&&!Wx(s,t)&&(Ur(s,t)&&Ur(t,s)&&qx(s,t)&&(Ie(s.prev,s,t.prev)||Ie(s,t.prev,t))||ro(s,t)&&Ie(s.prev,s,s.next)>0&&Ie(t.prev,t,t.next)>0)}function Ie(s,t,e){return(t.y-s.y)*(e.x-t.x)-(t.x-s.x)*(e.y-t.y)}function ro(s,t){return s.x===t.x&&s.y===t.y}function Eu(s,t,e,n){const i=va(Ie(s,t,e)),r=va(Ie(s,t,n)),a=va(Ie(e,n,s)),o=va(Ie(e,n,t));return!!(i!==r&&a!==o||i===0&&xa(s,e,t)||r===0&&xa(s,n,t)||a===0&&xa(e,s,n)||o===0&&xa(e,t,n))}function xa(s,t,e){return t.x<=Math.max(s.x,e.x)&&t.x>=Math.min(s.x,e.x)&&t.y<=Math.max(s.y,e.y)&&t.y>=Math.min(s.y,e.y)}function va(s){return s>0?1:s<0?-1:0}function Wx(s,t){let e=s;do{if(e.i!==s.i&&e.next.i!==s.i&&e.i!==t.i&&e.next.i!==t.i&&Eu(e,e.next,s,t))return!0;e=e.next}while(e!==s);return!1}function Ur(s,t){return Ie(s.prev,s,s.next)<0?Ie(s,t,s.next)>=0&&Ie(s,s.prev,t)>=0:Ie(s,t,s.prev)<0||Ie(s,s.next,t)<0}function qx(s,t){let e=s,n=!1;const i=(s.x+t.x)/2,r=(s.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&i<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==s);return n}function Au(s,t){const e=new Xc(s.i,s.x,s.y),n=new Xc(t.i,t.x,t.y),i=s.next,r=t.prev;return s.next=t,t.prev=s,e.next=i,i.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function of(s,t,e,n){const i=new Xc(s,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Nr(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function Xc(s,t,e){this.i=s,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function jx(s,t,e,n){let i=0;for(let r=t,a=e-n;r<e;r+=n)i+=(s[a]-s[r])*(s[r+1]+s[a+1]),a=r;return i}class yr{static area(t){const e=t.length;let n=0;for(let i=e-1,r=0;r<e;i=r++)n+=t[i].x*t[r].y-t[r].x*t[i].y;return n*.5}static isClockWise(t){return yr.area(t)<0}static triangulateShape(t,e){const n=[],i=[],r=[];cf(t),lf(n,t);let a=t.length;e.forEach(cf);for(let c=0;c<e.length;c++)i.push(a),a+=e[c].length,lf(n,e[c]);const o=Px.triangulate(n,i);for(let c=0;c<o.length;c+=3)r.push(o.slice(c,c+3));return r}}function cf(s){const t=s.length;t>2&&s[t-1].equals(s[0])&&s.pop()}function lf(s,t){for(let e=0;e<t.length;e++)s.push(t[e].x),s.push(t[e].y)}class Rs extends xe{constructor(t=new _r([new ht(.5,.5),new ht(-.5,.5),new ht(-.5,-.5),new ht(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,i=[],r=[];for(let o=0,c=t.length;o<c;o++){const l=t[o];a(l)}this.setAttribute("position",new te(i,3)),this.setAttribute("uv",new te(r,2)),this.computeVertexNormals();function a(o){const c=[],l=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,f=e.depth!==void 0?e.depth:1;let u=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:d-.1,b=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3;const p=e.extrudePath,v=e.UVGenerator!==void 0?e.UVGenerator:Xx;let _,x=!1,C,w,R,A;p&&(_=p.getSpacedPoints(h),x=!0,u=!1,C=p.computeFrenetFrames(h,!1),w=new P,R=new P,A=new P),u||(m=0,d=0,g=0,b=0);const y=o.extractPoints(l);let M=y.shape;const S=y.holes;if(!yr.isClockWise(M)){M=M.reverse();for(let tt=0,at=S.length;tt<at;tt++){const I=S[tt];yr.isClockWise(I)&&(S[tt]=I.reverse())}}const U=yr.triangulateShape(M,S),N=M;for(let tt=0,at=S.length;tt<at;tt++){const I=S[tt];M=M.concat(I)}function z(tt,at,I){return at||console.error("THREE.ExtrudeGeometry: vec does not exist"),tt.clone().addScaledVector(at,I)}const F=M.length,k=U.length;function H(tt,at,I){let Et,rt,Mt;const ft=tt.x-at.x,Bt=tt.y-at.y,_t=I.x-tt.x,L=I.y-tt.y,T=ft*ft+Bt*Bt,V=ft*L-Bt*_t;if(Math.abs(V)>Number.EPSILON){const Y=Math.sqrt(T),it=Math.sqrt(_t*_t+L*L),Z=at.x-Bt/Y,At=at.y+ft/Y,pt=I.x-L/it,yt=I.y+_t/it,ee=((pt-Z)*L-(yt-At)*_t)/(ft*L-Bt*_t);Et=Z+ft*ee-tt.x,rt=At+Bt*ee-tt.y;const ot=Et*Et+rt*rt;if(ot<=2)return new ht(Et,rt);Mt=Math.sqrt(ot/2)}else{let Y=!1;ft>Number.EPSILON?_t>Number.EPSILON&&(Y=!0):ft<-Number.EPSILON?_t<-Number.EPSILON&&(Y=!0):Math.sign(Bt)===Math.sign(L)&&(Y=!0),Y?(Et=-Bt,rt=ft,Mt=Math.sqrt(T)):(Et=ft,rt=Bt,Mt=Math.sqrt(T/2))}return new ht(Et/Mt,rt/Mt)}const X=[];for(let tt=0,at=N.length,I=at-1,Et=tt+1;tt<at;tt++,I++,Et++)I===at&&(I=0),Et===at&&(Et=0),X[tt]=H(N[tt],N[I],N[Et]);const nt=[];let $,St=X.concat();for(let tt=0,at=S.length;tt<at;tt++){const I=S[tt];$=[];for(let Et=0,rt=I.length,Mt=rt-1,ft=Et+1;Et<rt;Et++,Mt++,ft++)Mt===rt&&(Mt=0),ft===rt&&(ft=0),$[Et]=H(I[Et],I[Mt],I[ft]);nt.push($),St=St.concat($)}for(let tt=0;tt<m;tt++){const at=tt/m,I=d*Math.cos(at*Math.PI/2),Et=g*Math.sin(at*Math.PI/2)+b;for(let rt=0,Mt=N.length;rt<Mt;rt++){const ft=z(N[rt],X[rt],Et);st(ft.x,ft.y,-I)}for(let rt=0,Mt=S.length;rt<Mt;rt++){const ft=S[rt];$=nt[rt];for(let Bt=0,_t=ft.length;Bt<_t;Bt++){const L=z(ft[Bt],$[Bt],Et);st(L.x,L.y,-I)}}}const Ht=g+b;for(let tt=0;tt<F;tt++){const at=u?z(M[tt],St[tt],Ht):M[tt];x?(R.copy(C.normals[0]).multiplyScalar(at.x),w.copy(C.binormals[0]).multiplyScalar(at.y),A.copy(_[0]).add(R).add(w),st(A.x,A.y,A.z)):st(at.x,at.y,0)}for(let tt=1;tt<=h;tt++)for(let at=0;at<F;at++){const I=u?z(M[at],St[at],Ht):M[at];x?(R.copy(C.normals[tt]).multiplyScalar(I.x),w.copy(C.binormals[tt]).multiplyScalar(I.y),A.copy(_[tt]).add(R).add(w),st(A.x,A.y,A.z)):st(I.x,I.y,f/h*tt)}for(let tt=m-1;tt>=0;tt--){const at=tt/m,I=d*Math.cos(at*Math.PI/2),Et=g*Math.sin(at*Math.PI/2)+b;for(let rt=0,Mt=N.length;rt<Mt;rt++){const ft=z(N[rt],X[rt],Et);st(ft.x,ft.y,f+I)}for(let rt=0,Mt=S.length;rt<Mt;rt++){const ft=S[rt];$=nt[rt];for(let Bt=0,_t=ft.length;Bt<_t;Bt++){const L=z(ft[Bt],$[Bt],Et);x?st(L.x,L.y+_[h-1].y,_[h-1].x+I):st(L.x,L.y,f+I)}}}j(),Q();function j(){const tt=i.length/3;if(u){let at=0,I=F*at;for(let Et=0;Et<k;Et++){const rt=U[Et];vt(rt[2]+I,rt[1]+I,rt[0]+I)}at=h+m*2,I=F*at;for(let Et=0;Et<k;Et++){const rt=U[Et];vt(rt[0]+I,rt[1]+I,rt[2]+I)}}else{for(let at=0;at<k;at++){const I=U[at];vt(I[2],I[1],I[0])}for(let at=0;at<k;at++){const I=U[at];vt(I[0]+F*h,I[1]+F*h,I[2]+F*h)}}n.addGroup(tt,i.length/3-tt,0)}function Q(){const tt=i.length/3;let at=0;dt(N,at),at+=N.length;for(let I=0,Et=S.length;I<Et;I++){const rt=S[I];dt(rt,at),at+=rt.length}n.addGroup(tt,i.length/3-tt,1)}function dt(tt,at){let I=tt.length;for(;--I>=0;){const Et=I;let rt=I-1;rt<0&&(rt=tt.length-1);for(let Mt=0,ft=h+m*2;Mt<ft;Mt++){const Bt=F*Mt,_t=F*(Mt+1),L=at+Et+Bt,T=at+rt+Bt,V=at+rt+_t,Y=at+Et+_t;Dt(L,T,V,Y)}}}function st(tt,at,I){c.push(tt),c.push(at),c.push(I)}function vt(tt,at,I){zt(tt),zt(at),zt(I);const Et=i.length/3,rt=v.generateTopUV(n,i,Et-3,Et-2,Et-1);ne(rt[0]),ne(rt[1]),ne(rt[2])}function Dt(tt,at,I,Et){zt(tt),zt(at),zt(Et),zt(at),zt(I),zt(Et);const rt=i.length/3,Mt=v.generateSideWallUV(n,i,rt-6,rt-3,rt-2,rt-1);ne(Mt[0]),ne(Mt[1]),ne(Mt[3]),ne(Mt[1]),ne(Mt[2]),ne(Mt[3])}function zt(tt){i.push(c[tt*3+0]),i.push(c[tt*3+1]),i.push(c[tt*3+2])}function ne(tt){r.push(tt.x),r.push(tt.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Kx(e,n,t)}static fromJSON(t,e){const n=[];for(let r=0,a=t.shapes.length;r<a;r++){const o=e[t.shapes[r]];n.push(o)}const i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new Ga[i.type]().fromJSON(i)),new Rs(n,t.options)}}const Xx={generateTopUV:function(s,t,e,n,i){const r=t[e*3],a=t[e*3+1],o=t[n*3],c=t[n*3+1],l=t[i*3],h=t[i*3+1];return[new ht(r,a),new ht(o,c),new ht(l,h)]},generateSideWallUV:function(s,t,e,n,i,r){const a=t[e*3],o=t[e*3+1],c=t[e*3+2],l=t[n*3],h=t[n*3+1],f=t[n*3+2],u=t[i*3],d=t[i*3+1],g=t[i*3+2],b=t[r*3],m=t[r*3+1],p=t[r*3+2];return Math.abs(o-h)<Math.abs(a-l)?[new ht(a,1-c),new ht(l,1-f),new ht(u,1-g),new ht(b,1-p)]:[new ht(o,1-c),new ht(h,1-f),new ht(d,1-g),new ht(m,1-p)]}};function Kx(s,t,e){if(e.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){const r=s[n];e.shapes.push(r.uuid)}else e.shapes.push(s.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class ao extends Tl{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new ao(t.radius,t.detail)}}class Me extends xe{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(a+o,Math.PI);let l=0;const h=[],f=new P,u=new P,d=[],g=[],b=[],m=[];for(let p=0;p<=n;p++){const v=[],_=p/n;let x=0;p===0&&a===0?x=.5/e:p===n&&c===Math.PI&&(x=-.5/e);for(let C=0;C<=e;C++){const w=C/e;f.x=-t*Math.cos(i+w*r)*Math.sin(a+_*o),f.y=t*Math.cos(a+_*o),f.z=t*Math.sin(i+w*r)*Math.sin(a+_*o),g.push(f.x,f.y,f.z),u.copy(f).normalize(),b.push(u.x,u.y,u.z),m.push(w+x,1-_),v.push(l++)}h.push(v)}for(let p=0;p<n;p++)for(let v=0;v<e;v++){const _=h[p][v+1],x=h[p][v],C=h[p+1][v],w=h[p+1][v+1];(p!==0||a>0)&&d.push(_,x,w),(p!==n-1||c<Math.PI)&&d.push(x,C,w)}this.setIndex(d),this.setAttribute("position",new te(g,3)),this.setAttribute("normal",new te(b,3)),this.setAttribute("uv",new te(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Me(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class _n extends xe{constructor(t=1,e=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);const a=[],o=[],c=[],l=[],h=new P,f=new P,u=new P;for(let d=0;d<=n;d++)for(let g=0;g<=i;g++){const b=g/i*r,m=d/n*Math.PI*2;f.x=(t+e*Math.cos(m))*Math.cos(b),f.y=(t+e*Math.cos(m))*Math.sin(b),f.z=e*Math.sin(m),o.push(f.x,f.y,f.z),h.x=t*Math.cos(b),h.y=t*Math.sin(b),u.subVectors(f,h).normalize(),c.push(u.x,u.y,u.z),l.push(g/i),l.push(d/n)}for(let d=1;d<=n;d++)for(let g=1;g<=i;g++){const b=(i+1)*d+g-1,m=(i+1)*(d-1)+g-1,p=(i+1)*(d-1)+g,v=(i+1)*d+g;a.push(b,m,v),a.push(m,p,v)}this.setIndex(a),this.setAttribute("position",new te(o,3)),this.setAttribute("normal",new te(c,3)),this.setAttribute("uv",new te(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new _n(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class El extends xe{constructor(t=new Su(new P(-1,-1,0),new P(-1,1,0),new P(1,1,0)),e=64,n=1,i=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:i,closed:r};const a=t.computeFrenetFrames(e,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;const o=new P,c=new P,l=new ht;let h=new P;const f=[],u=[],d=[],g=[];b(),this.setIndex(g),this.setAttribute("position",new te(f,3)),this.setAttribute("normal",new te(u,3)),this.setAttribute("uv",new te(d,2));function b(){for(let _=0;_<e;_++)m(_);m(r===!1?e:0),v(),p()}function m(_){h=t.getPointAt(_/e,h);const x=a.normals[_],C=a.binormals[_];for(let w=0;w<=i;w++){const R=w/i*Math.PI*2,A=Math.sin(R),y=-Math.cos(R);c.x=y*x.x+A*C.x,c.y=y*x.y+A*C.y,c.z=y*x.z+A*C.z,c.normalize(),u.push(c.x,c.y,c.z),o.x=h.x+n*c.x,o.y=h.y+n*c.y,o.z=h.z+n*c.z,f.push(o.x,o.y,o.z)}}function p(){for(let _=1;_<=e;_++)for(let x=1;x<=i;x++){const C=(i+1)*(_-1)+(x-1),w=(i+1)*_+(x-1),R=(i+1)*_+x,A=(i+1)*(_-1)+x;g.push(C,w,A),g.push(w,R,A)}}function v(){for(let _=0;_<=e;_++)for(let x=0;x<=i;x++)l.x=_/e,l.y=x/i,d.push(l.x,l.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new El(new Ga[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class Al extends Sn{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new ct(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ct(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=to,this.normalScale=new ht(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new an,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Zn extends Al{static get type(){return"MeshPhysicalMaterial"}constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ht(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return He(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ct(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ct(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ct(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class Ru extends Sn{static get type(){return"MeshToonMaterial"}constructor(t){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.color=new ct(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ct(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=to,this.normalScale=new ht(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.gradientMap=t.gradientMap,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}class Ut extends Sn{static get type(){return"MeshLambertMaterial"}constructor(t){super(),this.isMeshLambertMaterial=!0,this.color=new ct(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ct(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=to,this.normalScale=new ht(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new an,this.combine=ol,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}function _a(s,t,e){return!s||!e&&s.constructor===t?s:typeof t.BYTES_PER_ELEMENT=="number"?new t(s):Array.prototype.slice.call(s)}function Yx(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function Jx(s){function t(i,r){return s[i]-s[r]}const e=s.length,n=new Array(e);for(let i=0;i!==e;++i)n[i]=i;return n.sort(t),n}function hf(s,t,e){const n=s.length,i=new s.constructor(n);for(let r=0,a=0;a!==n;++r){const o=e[r]*t;for(let c=0;c!==t;++c)i[a++]=s[o+c]}return i}function Cu(s,t,e,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(t.push(r.time),e.push.apply(e,a)),r=s[i++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(t.push(r.time),a.toArray(e,e.length)),r=s[i++];while(r!==void 0);else do a=r[n],a!==void 0&&(t.push(r.time),e.push(a)),r=s[i++];while(r!==void 0)}class Hr{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){const e=this.parameterPositions;let n=this._cachedIndex,i=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<i)){for(let o=n+2;;){if(i===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=i,i=e[++n],t<i)break t}a=e.length;break e}if(!(t>=r)){const o=e[1];t<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){const o=n+a>>>1;t<e[o]?a=o:n=o+1}if(i=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){const e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i;for(let a=0;a!==i;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Zx extends Hr{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Kl,endingEnd:Kl}}intervalChanged_(t,e,n){const i=this.parameterPositions;let r=t-2,a=t+1,o=i[r],c=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case Yl:r=t,o=2*e-n;break;case Jl:r=i.length-2,o=e+i[r]-i[r+1];break;default:r=t,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Yl:a=t,c=2*n-e;break;case Jl:a=1,c=n+i[1]-i[0];break;default:a=t-1,c=e}const l=(n-e)*.5,h=this.valueSize;this._weightPrev=l/(e-o),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,h=this._offsetPrev,f=this._offsetNext,u=this._weightPrev,d=this._weightNext,g=(n-e)/(i-e),b=g*g,m=b*g,p=-u*m+2*u*b-u*g,v=(1+u)*m+(-1.5-2*u)*b+(-.5+u)*g+1,_=(-1-d)*m+(1.5+d)*b+.5*g,x=d*m-d*b;for(let C=0;C!==o;++C)r[C]=p*a[h+C]+v*a[l+C]+_*a[c+C]+x*a[f+C];return r}}class $x extends Hr{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,h=(n-e)/(i-e),f=1-h;for(let u=0;u!==o;++u)r[u]=a[l+u]*f+a[c+u]*h;return r}}class Qx extends Hr{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}}class $n{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=_a(e,this.TimeBufferType),this.values=_a(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){const e=t.constructor;let n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:_a(t.times,Array),values:_a(t.values,Array)};const i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Qx(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new $x(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Zx(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Cr:e=this.InterpolantFactoryMethodDiscrete;break;case Pr:e=this.InterpolantFactoryMethodLinear;break;case ho:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Cr;case this.InterpolantFactoryMethodLinear:return Pr;case this.InterpolantFactoryMethodSmooth:return ho}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){const e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){const e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t}return this}trim(t,e){const n=this.times,i=n.length;let r=0,a=i-1;for(;r!==i&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==i){r>=a&&(a=Math.max(a,1),r=a-1);const o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0;const e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);const n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){const c=n[o];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,c),t=!1;break}if(a!==null&&a>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,c,a),t=!1;break}a=c}if(i!==void 0&&Yx(i))for(let o=0,c=i.length;o!==c;++o){const l=i[o];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,l),t=!1;break}}return t}optimize(){const t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===ho,r=t.length-1;let a=1;for(let o=1;o<r;++o){let c=!1;const l=t[o],h=t[o+1];if(l!==h&&(o!==1||l!==t[0]))if(i)c=!0;else{const f=o*n,u=f-n,d=f+n;for(let g=0;g!==n;++g){const b=e[f+g];if(b!==e[u+g]||b!==e[d+g]){c=!0;break}}}if(c){if(o!==a){t[a]=t[o];const f=o*n,u=a*n;for(let d=0;d!==n;++d)e[u+d]=e[f+d]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,c=a*n,l=0;l!==n;++l)e[c+l]=e[o+l];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){const t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,i}}$n.prototype.TimeBufferType=Float32Array;$n.prototype.ValueBufferType=Float32Array;$n.prototype.DefaultInterpolation=Pr;class js extends $n{constructor(t,e,n){super(t,e,n)}}js.prototype.ValueTypeName="bool";js.prototype.ValueBufferType=Array;js.prototype.DefaultInterpolation=Cr;js.prototype.InterpolantFactoryMethodLinear=void 0;js.prototype.InterpolantFactoryMethodSmooth=void 0;class Pu extends $n{}Pu.prototype.ValueTypeName="color";class zs extends $n{}zs.prototype.ValueTypeName="number";class tv extends Hr{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-e)/(i-e);let l=t*o;for(let h=l+o;l!==h;l+=4)We.slerpFlat(r,0,a,l-o,a,l,c);return r}}class Bs extends $n{InterpolantFactoryMethodLinear(t){return new tv(this.times,this.values,this.getValueSize(),t)}}Bs.prototype.ValueTypeName="quaternion";Bs.prototype.InterpolantFactoryMethodSmooth=void 0;class Xs extends $n{constructor(t,e,n){super(t,e,n)}}Xs.prototype.ValueTypeName="string";Xs.prototype.ValueBufferType=Array;Xs.prototype.DefaultInterpolation=Cr;Xs.prototype.InterpolantFactoryMethodLinear=void 0;Xs.prototype.InterpolantFactoryMethodSmooth=void 0;class Gs extends $n{}Gs.prototype.ValueTypeName="vector";class ev{constructor(t="",e=-1,n=[],i=wd){this.name=t,this.tracks=n,this.duration=e,this.blendMode=i,this.uuid=Mn(),this.duration<0&&this.resetDuration()}static parse(t){const e=[],n=t.tracks,i=1/(t.fps||1);for(let a=0,o=n.length;a!==o;++a)e.push(iv(n[a]).scale(i));const r=new this(t.name,t.duration,e,t.blendMode);return r.uuid=t.uuid,r}static toJSON(t){const e=[],n=t.tracks,i={name:t.name,duration:t.duration,tracks:e,uuid:t.uuid,blendMode:t.blendMode};for(let r=0,a=n.length;r!==a;++r)e.push($n.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(t,e,n,i){const r=e.length,a=[];for(let o=0;o<r;o++){let c=[],l=[];c.push((o+r-1)%r,o,(o+1)%r),l.push(0,1,0);const h=Jx(c);c=hf(c,1,h),l=hf(l,1,h),!i&&c[0]===0&&(c.push(r),l.push(l[0])),a.push(new zs(".morphTargetInfluences["+e[o].name+"]",c,l).scale(1/n))}return new this(t,-1,a)}static findByName(t,e){let n=t;if(!Array.isArray(t)){const i=t;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===e)return n[i];return null}static CreateClipsFromMorphTargetSequences(t,e,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,c=t.length;o<c;o++){const l=t[o],h=l.name.match(r);if(h&&h.length>1){const f=h[1];let u=i[f];u||(i[f]=u=[]),u.push(l)}}const a=[];for(const o in i)a.push(this.CreateFromMorphTargetSequence(o,i[o],e,n));return a}static parseAnimation(t,e){if(!t)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(f,u,d,g,b){if(d.length!==0){const m=[],p=[];Cu(d,m,p,g),m.length!==0&&b.push(new f(u,m,p))}},i=[],r=t.name||"default",a=t.fps||30,o=t.blendMode;let c=t.length||-1;const l=t.hierarchy||[];for(let f=0;f<l.length;f++){const u=l[f].keys;if(!(!u||u.length===0))if(u[0].morphTargets){const d={};let g;for(g=0;g<u.length;g++)if(u[g].morphTargets)for(let b=0;b<u[g].morphTargets.length;b++)d[u[g].morphTargets[b]]=-1;for(const b in d){const m=[],p=[];for(let v=0;v!==u[g].morphTargets.length;++v){const _=u[g];m.push(_.time),p.push(_.morphTarget===b?1:0)}i.push(new zs(".morphTargetInfluence["+b+"]",m,p))}c=d.length*a}else{const d=".bones["+e[f].name+"]";n(Gs,d+".position",u,"pos",i),n(Bs,d+".quaternion",u,"rot",i),n(Gs,d+".scale",u,"scl",i)}}return i.length===0?null:new this(r,c,i,o)}resetDuration(){const t=this.tracks;let e=0;for(let n=0,i=t.length;n!==i;++n){const r=this.tracks[n];e=Math.max(e,r.times[r.times.length-1])}return this.duration=e,this}trim(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].trim(0,this.duration);return this}validate(){let t=!0;for(let e=0;e<this.tracks.length;e++)t=t&&this.tracks[e].validate();return t}optimize(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].optimize();return this}clone(){const t=[];for(let e=0;e<this.tracks.length;e++)t.push(this.tracks[e].clone());return new this.constructor(this.name,this.duration,t,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function nv(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return zs;case"vector":case"vector2":case"vector3":case"vector4":return Gs;case"color":return Pu;case"quaternion":return Bs;case"bool":case"boolean":return js;case"string":return Xs}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function iv(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const t=nv(s.type);if(s.times===void 0){const e=[],n=[];Cu(s.keys,e,n,"value"),s.times=e,s.values=n}return t.parse!==void 0?t.parse(s):new t(s.name,s.times,s.values,s.interpolation)}const Li={enabled:!1,files:{},add:function(s,t){this.enabled!==!1&&(this.files[s]=t)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class sv{constructor(t,e,n){const i=this;let r=!1,a=0,o=0,c;const l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){o++,r===!1&&i.onStart!==void 0&&i.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,i.onProgress!==void 0&&i.onProgress(h,a,o),a===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,f){return l.push(h,f),this},this.removeHandler=function(h){const f=l.indexOf(h);return f!==-1&&l.splice(f,2),this},this.getHandler=function(h){for(let f=0,u=l.length;f<u;f+=2){const d=l[f],g=l[f+1];if(d.global&&(d.lastIndex=0),d.test(h))return g}return null}}}const rv=new sv;class Ks{constructor(t){this.manager=t!==void 0?t:rv,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(i,r){n.load(t,i,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}Ks.DEFAULT_MATERIAL_NAME="__DEFAULT";const ai={};class av extends Error{constructor(t,e){super(t),this.response=e}}class Lu extends Ks{constructor(t){super(t)}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=Li.get(t);if(r!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(r),this.manager.itemEnd(t)},0),r;if(ai[t]!==void 0){ai[t].push({onLoad:e,onProgress:n,onError:i});return}ai[t]=[],ai[t].push({onLoad:e,onProgress:n,onError:i});const a=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,c=this.responseType;fetch(a).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const h=ai[t],f=l.body.getReader(),u=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),d=u?parseInt(u):0,g=d!==0;let b=0;const m=new ReadableStream({start(p){v();function v(){f.read().then(({done:_,value:x})=>{if(_)p.close();else{b+=x.byteLength;const C=new ProgressEvent("progress",{lengthComputable:g,loaded:b,total:d});for(let w=0,R=h.length;w<R;w++){const A=h[w];A.onProgress&&A.onProgress(C)}p.enqueue(x),v()}},_=>{p.error(_)})}}});return new Response(m)}else throw new av(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return l.json();default:if(o===void 0)return l.text();{const f=/charset="?([^;"\s]*)"?/i.exec(o),u=f&&f[1]?f[1].toLowerCase():void 0,d=new TextDecoder(u);return l.arrayBuffer().then(g=>d.decode(g))}}}).then(l=>{Li.add(t,l);const h=ai[t];delete ai[t];for(let f=0,u=h.length;f<u;f++){const d=h[f];d.onLoad&&d.onLoad(l)}}).catch(l=>{const h=ai[t];if(h===void 0)throw this.manager.itemError(t),l;delete ai[t];for(let f=0,u=h.length;f<u;f++){const d=h[f];d.onError&&d.onError(l)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}}class ov extends Ks{constructor(t){super(t)}load(t,e,n,i){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,a=Li.get(t);if(a!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(a),r.manager.itemEnd(t)},0),a;const o=Lr("img");function c(){h(),Li.add(t,this),e&&e(this),r.manager.itemEnd(t)}function l(f){h(),i&&i(f),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(t),o.src=t,o}}class cv extends Ks{constructor(t){super(t)}load(t,e,n,i){const r=new Fe,a=new ov(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(t,function(o){r.image=o,r.needsUpdate=!0,e!==void 0&&e(r)},n,i),r}}class oo extends _e{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new ct(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class Kc extends oo{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(_e.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ct(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const qo=new kt,ff=new P,uf=new P;class Rl{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ht(512,512),this.map=null,this.mapPass=null,this.matrix=new kt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ml,this._frameExtents=new ht(1,1),this._viewportCount=1,this._viewports=[new le(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;ff.setFromMatrixPosition(t.matrixWorld),e.position.copy(ff),uf.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(uf),e.updateMatrixWorld(),qo.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(qo),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(qo)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class lv extends Rl{constructor(){super(new Ye(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){const e=this.camera,n=ks*2*t.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=t.distance||e.far;(n!==e.fov||i!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=i,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class hv extends oo{constructor(t,e,n=0,i=Math.PI/3,r=0,a=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(_e.DEFAULT_UP),this.updateMatrix(),this.target=new _e,this.distance=n,this.angle=i,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new lv}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}const df=new kt,sr=new P,jo=new P;class fv extends Rl{constructor(){super(new Ye(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ht(4,2),this._viewportCount=6,this._viewports=[new le(2,1,1,1),new le(0,1,1,1),new le(3,1,1,1),new le(1,1,1,1),new le(3,0,1,1),new le(1,0,1,1)],this._cubeDirections=[new P(1,0,0),new P(-1,0,0),new P(0,0,1),new P(0,0,-1),new P(0,1,0),new P(0,-1,0)],this._cubeUps=[new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,0,1),new P(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,i=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),sr.setFromMatrixPosition(t.matrixWorld),n.position.copy(sr),jo.copy(n.position),jo.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(jo),n.updateMatrixWorld(),i.makeTranslation(-sr.x,-sr.y,-sr.z),df.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(df)}}class uv extends oo{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new fv}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class dv extends Rl{constructor(){super(new io(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Va extends oo{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(_e.DEFAULT_UP),this.updateMatrix(),this.target=new _e,this.shadow=new dv}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Mr{static decodeText(t){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(t);let e="";for(let n=0,i=t.length;n<i;n++)e+=String.fromCharCode(t[n]);try{return decodeURIComponent(escape(e))}catch{return e}}static extractUrlBase(t){const e=t.lastIndexOf("/");return e===-1?"./":t.slice(0,e+1)}static resolveURL(t,e){return typeof t!="string"||t===""?"":(/^https?:\/\//i.test(e)&&/^\//.test(t)&&(e=e.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(t)||/^data:.*,.*$/i.test(t)||/^blob:.*$/i.test(t)?t:e+t)}}class pv extends Ks{constructor(t){super(t),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(t){return this.options=t,this}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,a=Li.get(t);if(a!==void 0){if(r.manager.itemStart(t),a.then){a.then(l=>{e&&e(l),r.manager.itemEnd(t)}).catch(l=>{i&&i(l)});return}return setTimeout(function(){e&&e(a),r.manager.itemEnd(t)},0),a}const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader;const c=fetch(t,o).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){return Li.add(t,l),e&&e(l),r.manager.itemEnd(t),l}).catch(function(l){i&&i(l),Li.remove(t),r.manager.itemError(t),r.manager.itemEnd(t)});Li.add(t,c),r.manager.itemStart(t)}}const Cl="\\[\\]\\.:\\/",mv=new RegExp("["+Cl+"]","g"),Pl="[^"+Cl+"]",gv="[^"+Cl.replace("\\.","")+"]",bv=/((?:WC+[\/:])*)/.source.replace("WC",Pl),xv=/(WCOD+)?/.source.replace("WCOD",gv),vv=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Pl),_v=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Pl),yv=new RegExp("^"+bv+xv+vv+_v+"$"),Mv=["material","materials","bones","map"];class Sv{constructor(t,e,n){const i=n||me.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(t,e)}bind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}}class me{constructor(t,e,n){this.path=e,this.parsedPath=n||me.parseTrackName(e),this.node=me.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new me.Composite(t,e,n):new me(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(mv,"")}static parseTrackName(t){const e=yv.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);const n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);Mv.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){const n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){const n=function(r){for(let a=0;a<r.length;a++){const o=r[a];if(o.name===e||o.uuid===e)return o;const c=n(o.children);if(c)return c}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node;const e=this.parsedPath,n=e.objectName,i=e.propertyName;let r=e.propertyIndex;if(t||(t=me.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===l){l=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}const a=t[i];if(a===void 0){const l=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}me.Composite=Sv;me.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};me.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};me.prototype.GetterByBindingType=[me.prototype._getValue_direct,me.prototype._getValue_array,me.prototype._getValue_arrayElement,me.prototype._getValue_toArray];me.prototype.SetterByBindingTypeAndVersioning=[[me.prototype._setValue_direct,me.prototype._setValue_direct_setNeedsUpdate,me.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[me.prototype._setValue_array,me.prototype._setValue_array_setNeedsUpdate,me.prototype._setValue_array_setMatrixWorldNeedsUpdate],[me.prototype._setValue_arrayElement,me.prototype._setValue_arrayElement_setNeedsUpdate,me.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[me.prototype._setValue_fromArray,me.prototype._setValue_fromArray_setNeedsUpdate,me.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:al}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=al);const he=1,Ii=2,kr=4,Yc=8,vs={x:-402,z:-236},ya=23,pf=1.25,Xo=13;function wv(s){const t=[],e=(y,M=14,S=0)=>{for(const[D,U]of y)t.push({x:D,z:U,w:M,f:S})};e([[-500,166],[-472,166],[-446,165]],15),e([[-414,160],[-394,142],[-386,116],[-385,70],[-386,20],[-388,-40],[-387,-100],[-384,-160],[-380,-196],[-379,-214]],14);const n=Math.round(pf*2*Math.PI*ya/3);for(let y=0;y<=n;y++){const M=-(y/n)*pf*2*Math.PI;t.push({x:vs.x+Math.cos(M)*ya,z:vs.z+Math.sin(M)*ya,w:12,f:kr|he})}e([[-414,-259],[-428,-259],[-442,-259]],12,he),e([[-458,-259],[-474,-259]],12,he|Yc),e([[-494,-259],[-516,-257],[-536,-249],[-552,-232],[-560,-208],[-563,-178],[-572,-146],[-590,-116],[-603,-84],[-602,-50],[-590,-20],[-586,12],[-596,44]],14),e([[-606,74],[-608,100],[-606,124]],12,Ii),e([[-598,146],[-582,160],[-556,166],[-528,166]],15);const i=t.length,r=[];for(let y=0;y<i;y++){const M=t[(y-1+i)%i],S=t[y],D=t[(y+1)%i],U=t[(y+2)%i],N=(X,nt)=>Math.pow(Math.hypot(nt.x-X.x,nt.z-X.z),.5)||.001,z=N(M,S),F=z+N(S,D),k=F+N(D,U),H=Math.max(2,Math.ceil(Math.hypot(D.x-S.x,D.z-S.z)/.5));for(let X=0;X<H;X++){const nt=z+(F-z)*(X/H),$=(at,I,Et,rt)=>Et===rt?at:((rt-nt)*at+(nt-Et)*I)/(rt-Et),St=$(M.x,S.x,0,z),Ht=$(M.z,S.z,0,z),j=$(S.x,D.x,z,F),Q=$(S.z,D.z,z,F),dt=$(D.x,U.x,F,k),st=$(D.z,U.z,F,k),vt=$(St,j,0,F),Dt=$(Ht,Q,0,F),zt=$(j,dt,z,k),ne=$(Q,st,z,k),tt=X/H;r.push({x:$(vt,zt,z,F),z:$(Dt,ne,z,F),w:S.w+(D.w-S.w)*tt,f:tt<.5?S.f:D.f})}}const a=[0];for(let y=1;y<r.length;y++)a.push(a[y-1]+Math.hypot(r[y].x-r[y-1].x,r[y].z-r[y-1].z));const o=a[a.length-1]+Math.hypot(r[0].x-r[r.length-1].x,r[0].z-r[r.length-1].z),c=Math.round(o),l=o/c,h={n:c,length:o,x:new Float32Array(c),y:new Float32Array(c),z:new Float32Array(c),tx:new Float32Array(c),tz:new Float32Array(c),w:new Float32Array(c),bank:new Float32Array(c),flags:new Uint8Array(c),tower:{x:vs.x,z:vs.z,y0:0,y1:0,r:ya}};let f=0;for(let y=0;y<c;y++){const M=y*l;for(;f<r.length-1&&a[f+1]<M;)f++;const S=r[f],D=r[(f+1)%r.length],U=(f+1<r.length?a[f+1]:o)-a[f],N=U>0?(M-a[f])/U:0;h.x[y]=S.x+(D.x-S.x)*N,h.z[y]=S.z+(D.z-S.z)*N,h.w[y]=S.w+(D.w-S.w)*N,h.flags[y]=N<.5?S.f:D.f}for(let y=0;y<c;y++){const M=(y-1+c)%c,S=(y+1)%c,D=h.x[S]-h.x[M],U=h.z[S]-h.z[M],N=Math.hypot(D,U)||1;h.tx[y]=D/N,h.tz[y]=U/N}const u=new Float32Array(c);for(let y=0;y<c;y++)u[y]=s(h.x[y],h.z[y])+.35;const d=Ko(u,14);let g=-1,b=-1,m=-1,p=-1;for(let y=0;y<c;y++){const M=h.flags[y];M&kr&&(g<0&&(g=y),b=y),M&Yc&&(m<0&&(m=y),p=y)}for(let y=0;y<c;y++)h.y[y]=d[y];for(let y=0;y<4;y++)for(let M=0;M<2*c;M++){const S=M%c,D=(S-1+c)%c,U=h.y[S]-h.y[D];Math.abs(U)>.13&&(h.y[S]=h.y[D]+Math.sign(U)*.13)}h.y.set(Ko(h.y,3));const v=h.y[g];h.tower.y0=Math.min(s(vs.x,vs.z),v-.4),h.tower.y1=v+Xo;for(let y=g;y<=b;y++)h.y[y]=v+Xo*((y-g)/(b-g));const _=v+Xo,x=m-1;for(let y=b+1;y<=x;y++){const M=(y-b)/(x-b);h.y[y]=_+.6*M+1.6*Math.max(0,(M-.7)/.3)**2}const C=Math.min(c-1,p+8),w=h.y[C],R=h.y[x];for(let y=m;y<=C;y++){const M=(y-x)/(C-x);h.y[y]=R+(w-R)*(1-(1-M)*(1-M))}for(let y=0;y<c;y++){const M=(y-6+c)%c,S=(y+6)%c,D=Math.atan2(h.tz[S],h.tx[S])-Math.atan2(h.tz[M],h.tx[M]),U=Math.atan2(Math.sin(D),Math.cos(D))/12;h.bank[y]=Math.max(-.08,Math.min(.08,-U*3.5))}const A=Ko(h.bank,8);return h.bank.set(A),Tv(h.w,6),h}function Ko(s,t){const e=s.length,n=new Float32Array(e),i=Math.ceil(t*2.5),r=[];let a=0;for(let o=-i;o<=i;o++){const c=Math.exp(-(o*o)/(2*t*t));r.push(c),a+=c}for(let o=0;o<e;o++){let c=0;for(let l=-i;l<=i;l++)c+=s[(o+l+e)%e]*r[l+i];n[o]=c/a}return n}function Tv(s,t){const e=s.slice(),n=s.length;for(let i=0;i<n;i++){let r=0;for(let a=-t;a<=t;a++)r+=e[(i+a+n)%n];s[i]=r/(2*t+1)}}class mf{constructor(t){this.T=typeof t=="function"?wv(t):t,this.n=this.T.n,this.L=this.T.length}wrap(t){return(t%this.n+this.n)%this.n}frame(t,e,n,i,r,a=18){const o=this.T;let c=-1,l=1e18;for(let h=-a;h<=a;h++){const f=this.wrap(i+h),u=t-o.x[f],d=n-o.z[f],g=e-o.y[f],b=u*u+d*d+(g*g>25?g*g*4:0);b<l&&(l=b,c=f)}return this.project(t,n,c,r)}frameGlobal(t,e,n,i){const r=this.T;let a=0,o=1e18;for(let c=0;c<this.n;c++){const l=t-r.x[c],h=n-r.z[c],f=e-r.y[c],u=l*l+h*h+f*f*4;u<o&&(o=u,a=c)}return this.project(t,n,a,i)}project(t,e,n,i){const r=this.T;let a=n,o=this.wrap(n+1),c=r.x[o]-r.x[a],l=r.z[o]-r.z[a],h=((t-r.x[a])*c+(e-r.z[a])*l)/(c*c+l*l);h<0&&(o=a,a=this.wrap(n-1),c=r.x[o]-r.x[a],l=r.z[o]-r.z[a],h=((t-r.x[a])*c+(e-r.z[a])*l)/(c*c+l*l)),h=Math.max(0,Math.min(1,h));const f=r.x[a]+c*h,u=r.z[a]+l*h,d=r.tx[a]+(r.tx[o]-r.tx[a])*h,g=r.tz[a]+(r.tz[o]-r.tz[a])*h,b=Math.hypot(d,g)||1,m=d/b,p=g/b,v=(t-f)*-p+(e-u)*m,_=r.bank[a]+(r.bank[o]-r.bank[a])*h,x=r.y[a]+(r.y[o]-r.y[a])*h;return i.i=a,i.t=h,i.s=(a+h)*(this.L/this.n),i.d=v,i.w=r.w[a]+(r.w[o]-r.w[a])*h,i.h=x+_*v,i.tx=m,i.tz=p,i.flags=r.flags[a]|r.flags[o],i}point(t,e,n=new P){const i=this.T,r=(t/this.L*this.n%this.n+this.n)%this.n,a=Math.floor(r),o=(a+1)%this.n,c=r-a,l=i.tx[a]+(i.tx[o]-i.tx[a])*c,h=i.tz[a]+(i.tz[o]-i.tz[a])*c,f=Math.hypot(l,h)||1,u=i.bank[a]+(i.bank[o]-i.bank[a])*c;return n.set(i.x[a]+(i.x[o]-i.x[a])*c-h/f*e,i.y[a]+(i.y[o]-i.y[a])*c+u*e,i.z[a]+(i.z[o]-i.z[a])*c+l/f*e),n}heading(t){const e=this.wrap(Math.round(t/this.L*this.n));return Math.atan2(this.T.tz[e],this.T.tx[e])}idxOf(t){return this.wrap(Math.round(t/this.L*this.n))}build(t,e,n={}){const i=this.T,r=this.n,a=new Ge,o=new Ge,c=new Ge,l=new Ge,h=new Ge,f=(g,b,m=0)=>{const p=i.bank[g];return[i.x[g]-i.tz[g]*b,i.y[g]+p*b+m,i.z[g]+i.tx[g]*b]};let u=0;for(let g=0;g<r;g++){const b=g,m=(g+1)%r,p=i.w[b]/2,v=i.w[m]/2,_=this.L/r,x=u+_/12,C=i.flags[b]|i.flags[m];a.quad(f(b,-p),f(m,-v),f(m,v),f(b,p),[0,u],[0,x],[1,x],[1,u]);for(const w of[-1,1]){const R=w*p,A=w*v,y=w*(p+1.1),M=w*(v+1.1),S=w<0?[f(b,y,.08),f(m,M,.08),f(m,A,.02),f(b,R,.02)]:[f(b,R,.02),f(m,A,.02),f(m,M,.08),f(b,y,.08)],D=g*_/6;o.quad(S[0],S[1],S[2],S[3],[0,D],[0,D+_/6],[1,D+_/6],[1,D]);const U=w*(p+1.1),N=w*(v+1.1),z=w*(p+1.7),F=w*(v+1.7),k=C&Ii?0:C&he?1:.9;if(k>0){const Ht=C&he?h:c,j=[f(b,U,0),f(m,N,0),f(m,N,k),f(b,U,k)],Q=[f(b,z,-.2),f(m,F,-.2),f(m,F,k),f(b,z,k)],dt=[0,0],st=[_/3,0],vt=[_/3,1],Dt=[0,1];w<0?(Ht.quad(j[1],j[0],j[3],j[2],st,dt,Dt,vt),Ht.quad(Q[0],Q[1],Q[2],Q[3],dt,st,vt,Dt)):(Ht.quad(j[0],j[1],j[2],j[3],dt,st,vt,Dt),Ht.quad(Q[1],Q[0],Q[3],Q[2],st,dt,Dt,vt)),Ht.quad(f(b,U,k),f(m,N,k),f(m,F,k),f(b,z,k),[0,0],[_/3,0],[_/3,.15],[0,.15])}const H=C&he?1.4:2.5,X=w*(p+1.7),nt=w*(v+1.7),$=[f(b,X,-.2),f(m,nt,-.2)],St=[f(b,X,-H),f(m,nt,-H)];w<0?l.quad(St[0],St[1],$[1],$[0],[0,0],[1,0],[1,1],[0,1]):l.quad(St[1],St[0],$[0],$[1],[0,0],[1,0],[1,1],[0,1])}if(C&he){const w=p+1.7,R=v+1.7;l.quad(f(m,-R,-1.4),f(b,-w,-1.4),f(b,w,-1.4),f(m,R,-1.4),[0,0],[1,0],[1,1],[0,1])}u=x}const d=(g,b,m=!0)=>{const p=new J(g.build(),b);return p.receiveShadow=m,t.add(p),p};d(a,new Ut({map:n.road||e.asphalt})).name="road",d(o,new Ut({map:n.curb||e.curb})),d(c,new Ut({map:n.wall||e.wall})),d(h,new Ut({map:n.rail||e.rail})),d(l,new Ut({color:n.under??13223128})),this.buildTunnel(t,e),this.buildSupports(t),this.buildStartLine(t,e)}buildTunnel(t,e){const n=this.T,i=new Ge;let r=-1,a=-1;for(let g=0;g<this.n;g++)n.flags[g]&Ii&&(r<0&&(r=g),a=g);if(r<0)return;const o=14;for(let g=r;g<a;g++){const b=n.w[g]/2+1.7;for(let m=0;m<o;m++){const p=m/o*Math.PI,v=(m+1)/o*Math.PI,_=(x,C,w)=>{const R=Math.cos(C)*w,A=Math.sin(C)*w*.85;return[n.x[x]-n.tz[x]*R,n.y[x]+A,n.z[x]+n.tx[x]*R]};i.quad(_(g,v,b),_(g+1,v,b),_(g+1,p,b),_(g,p,b),[m/o,g/4],[m/o,(g+1)/4],[(m+1)/o,(g+1)/4],[(m+1)/o,g/4]),i.quad(_(g,p,b+.8),_(g+1,p,b+.8),_(g+1,v,b+.8),_(g,v,b+.8),[0,0],[0,1],[1,1],[1,0])}}const c=new J(i.build(),new Ut({map:e.tunnel,side:ge}));t.add(c);for(const[g,b]of[[r,-1],[a,1]]){const m=new Zt,p=n.w[g]/2+1.7,v=p+4,_=p*.85+5,x=new _r;x.moveTo(-v,-.5),x.lineTo(-v,_),x.lineTo(v,_),x.lineTo(v,-.5),x.lineTo(p,-.5),x.lineTo(p,0);for(let A=1;A<20;A++){const y=A/20*Math.PI;x.lineTo(Math.cos(y)*p,Math.sin(y)*p*.85)}x.lineTo(-p,0),x.lineTo(-p,-.5),x.lineTo(-v,-.5);const C=new Rs(x,{depth:1.6,bevelEnabled:!1});C.translate(0,0,-.8);const w=new J(C,new Ut({color:15910568}));w.castShadow=!0,m.add(w);const R=new J(new qe(8,1.75),new Ee({map:e.sign("TÜNEL","#2f5d8a","#fff7e8"),transparent:!0}));R.position.set(0,p*.85+2.4,b*.82),b<0&&(R.rotation.y=Math.PI),m.add(R),m.position.set(n.x[g],n.y[g],n.z[g]),m.rotation.y=-Math.atan2(n.tz[g],n.tx[g])+Math.PI/2,t.add(m)}const l=new Me(.35,8,6),h=new Ee({color:16769696}),f=Math.floor((a-r)/6),u=new Le(l,h,f*2),d=new kt;for(let g=0;g<f;g++){const b=r+3+g*6,m=n.w[b]/2+1.2;for(const p of[-1,1]){const v=Math.cos(p<0?2.2:.94)*m;d.makeTranslation(n.x[b]-n.tz[b]*v,n.y[b]+m*.62,n.z[b]+n.tx[b]*v),u.setMatrixAt(g*2+(p>0?1:0),d)}}t.add(u)}buildSupports(t){const e=this.T,n=[],i=new kt,r=new We,a=new P;for(let f=0;f<this.n;f+=9){const u=e.flags[f];if(!(!(u&he)||u&kr)&&!(Math.hypot(e.x[f]-e.tower.x,e.z[f]-e.tower.z)<34))for(const d of[-1,1]){const g=d*(e.w[f]/2-.5),b=e.x[f]-e.tz[f]*g,m=e.z[f]+e.tx[f]*g,p=e.y[f]-1.2,v=p+2;v<1.5||(r.setFromAxisAngle(new P(0,1,0),-Math.atan2(e.tz[f],e.tx[f])),i.compose(new P(b,p-v/2,m),r,a.set(1,v,1)),n.push(i.clone()))}}const o=new Le(new Te(1.2,1,1.2),new Ut({color:14270368}),n.length);n.forEach((f,u)=>o.setMatrixAt(u,f)),o.castShadow=!0,t.add(o);const c=e.tower,l=[];for(let f=0;f<this.n;f+=6){if(!(e.flags[f]&kr))continue;const u=e.x[f]-c.x,d=e.z[f]-c.z,g=Math.hypot(u,d),b=Math.atan2(d,u),m=g+e.w[f]/2-gf+1;r.setFromAxisAngle(new P(0,1,0),-b);const p=gf+m/2-.5;i.compose(new P(c.x+Math.cos(b)*p,e.y[f]-2.2,c.z+Math.sin(b)*p),r,a.set(m,1.6,1.4)),l.push(i.clone())}const h=new Le(new Te(1,1,1),new Ut({color:14731693}),l.length);l.forEach((f,u)=>h.setMatrixAt(u,f)),h.castShadow=!0,t.add(h)}buildStartLine(t,e){const n=this.T,i=0,r=n.w[i],a=new qe(r,2.2);a.rotateX(-Math.PI/2);const o=new J(a,new Ut({map:e.checker}));o.rotation.y=-Math.atan2(n.tz[i],n.tx[i])+Math.PI/2,o.position.set(n.x[i],n.y[i]+.04,n.z[i]),o.receiveShadow=!0,t.add(o);const c=new Zt,l=new Ut({color:16183267});for(const f of[-1,1]){const u=new J(new re(.45,.55,7.5,12),l);u.position.set(0,3.75,f*(r/2+2)),u.castShadow=!0,c.add(u)}const h=new J(new Te(.5,1.8,r+5),new Ut({color:15037299}));h.position.y=7.2,c.add(h);for(const f of[-1,1]){const u=new J(new qe(r+3,1.5),new Ee({map:e.sign("BOSPHORUS DRIFT","#e57373","#fff7e8"),transparent:!0}));u.position.set(f*.27,7.2,0),u.rotation.y=f*Math.PI/2,c.add(u)}c.position.set(n.x[i],n.y[i],n.z[i]),c.rotation.y=-Math.atan2(n.tz[i],n.tx[i]),t.add(c)}}const gf=8.6;class Ge{constructor(){this.p=[],this.uv=[],this.idx=[],this.col=null}quad(t,e,n,i,r,a,o,c){const l=this.p.length/3;this.p.push(...t,...e,...n,...i),this.uv.push(...r,...a,...o,...c),this.idx.push(l,l+2,l+1,l,l+3,l+2)}build(){const t=new xe;return t.setAttribute("position",new te(this.p,3)),t.setAttribute("uv",new te(this.uv,2)),t.setIndex(this.idx),t.computeVertexNormals(),t}}class Ev{constructor(){this.asphalt=this.make(256,512,(t,e,n)=>{t.fillStyle="#787c9e",t.fillRect(0,0,e,n);for(let i=0;i<900;i++){const r=i*97%e,a=(i*53+i%7*31)%n;t.fillStyle=i%3?"rgba(255,255,255,0.035)":"rgba(0,0,0,0.05)",t.fillRect(r,a,3,3)}t.fillStyle="#f4f2ff",t.fillRect(e*.035,0,e*.022,n),t.fillRect(e*.943,0,e*.022,n),t.fillStyle="rgba(244,242,255,0.9)";for(const i of[.335,.665])t.fillRect(e*i-3,0,6,n*.45)},!0),this.cobble=this.asphalt,this.curb=this.make(64,64,(t,e,n)=>{t.fillStyle="#e8534a",t.fillRect(0,0,e,n/2),t.fillStyle="#fbf8ff",t.fillRect(0,n/2,e,n/2)},!0),this.wall=this.make(128,64,(t,e,n)=>{t.fillStyle="#3f6fd6",t.fillRect(0,0,e/2,n),t.fillStyle="#f7f6ff",t.fillRect(e/2,0,e/2,n),t.fillStyle="#f2c94c",t.fillRect(0,0,e,9),t.fillStyle="rgba(30,40,90,0.25)",t.fillRect(0,n-6,e,6)},!0),this.rail=this.make(128,64,(t,e,n)=>{t.fillStyle="#f7f6ff",t.fillRect(0,0,e,n),t.fillStyle="#3f6fd6";for(let i=0;i<4;i++)t.fillRect(i*32+10,14,12,44);t.fillStyle="#f2c94c",t.fillRect(0,0,e,9)},!0),this.tunnel=this.make(128,128,(t,e,n)=>{t.fillStyle="#cfc6dc",t.fillRect(0,0,e,n),t.fillStyle="#a99fbd",t.fillRect(0,0,e,14),t.fillStyle="#e4ddef",t.fillRect(0,14,e,6)},!0),this.checker=this.make(128,32,(t,e,n)=>{for(let i=0;i<2;i++)for(let r=0;r<8;r++)t.fillStyle=(r+i)%2?"#3c3a47":"#fbf6ee",t.fillRect(r*16,i*16,16,16)}),this.signs=new Map}sign(t,e,n){const i=t+e;let r=this.signs.get(i);return r||(r=this.make(512,112,(a,o,c)=>{a.fillStyle=e,hi(a,2,2,o-4,c-4,26),a.fill(),a.fillStyle=n;let l=76;const h=()=>`900 ${l}px ui-rounded, "SF Pro Rounded", system-ui, sans-serif`;for(a.font=h();l>24&&a.measureText(t).width>o-48;)l-=4,a.font=h();a.textAlign="center",a.textBaseline="middle",a.fillText(t,o/2,c/2+4)}),this.signs.set(i,r)),r}make(t,e,n,i=!1){const r=document.createElement("canvas");r.width=t,r.height=e;const a=r.getContext("2d");n(a,t,e);const o=new xx(r);return o.colorSpace=Ne,o.anisotropy=4,i&&(o.wrapS=o.wrapT=ki),o}}function hi(s,t,e,n,i,r){s.beginPath(),s.moveTo(t+r,e),s.arcTo(t+n,e,t+n,e+i,r),s.arcTo(t+n,e+i,t,e+i,r),s.arcTo(t,e+i,t,e,r),s.arcTo(t,e,t+n,e,r),s.closePath()}function sn(s,t=!1){const e=s[0].index!==null,n=new Set(Object.keys(s[0].attributes)),i=new Set(Object.keys(s[0].morphAttributes)),r={},a={},o=s[0].morphTargetsRelative,c=new xe;let l=0;for(let h=0;h<s.length;++h){const f=s[h];let u=0;if(e!==(f.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const d in f.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(f.attributes[d]),u++}if(u!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==f.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const d in f.morphAttributes){if(!i.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[d]===void 0&&(a[d]=[]),a[d].push(f.morphAttributes[d])}if(t){let d;if(e)d=f.index.count;else if(f.attributes.position!==void 0)d=f.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,d,h),l+=d}}if(e){let h=0;const f=[];for(let u=0;u<s.length;++u){const d=s[u].index;for(let g=0;g<d.count;++g)f.push(d.getX(g)+h);h+=s[u].attributes.position.count}c.setIndex(f)}for(const h in r){const f=bf(r[h]);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,f)}for(const h in a){const f=a[h][0].length;if(f===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let u=0;u<f;++u){const d=[];for(let b=0;b<a[h].length;++b)d.push(a[h][b][u]);const g=bf(d);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(g)}}return c}function bf(s){let t,e,n,i=-1,r=0;for(let l=0;l<s.length;++l){const h=s[l];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=h.gpuType),i!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}const a=new t(r),o=new be(a,e,n);let c=0;for(let l=0;l<s.length;++l){const h=s[l];if(h.isInterleavedBufferAttribute){const f=c/e;for(let u=0,d=h.count;u<d;u++)for(let g=0;g<e;g++){const b=h.getComponent(u,g);o.setComponent(u+f,g,b)}}else a.set(h.array,c);c+=h.count*e}return i!==void 0&&(o.gpuType=i),o}function xf(s,t){if(t===Td)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(t===Gc||t===Qf){let e=s.getIndex();if(e===null){const a=[],o=s.getAttribute("position");if(o!==void 0){for(let c=0;c<o.count;c++)a.push(c);s.setIndex(a),e=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}const n=e.count-2,i=[];if(t===Gc)for(let a=1;a<=n;a++)i.push(e.getX(0)),i.push(e.getX(a)),i.push(e.getX(a+1));else for(let a=0;a<n;a++)a%2===0?(i.push(e.getX(a)),i.push(e.getX(a+1)),i.push(e.getX(a+2))):(i.push(e.getX(a+2)),i.push(e.getX(a+1)),i.push(e.getX(a)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=s.clone();return r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",t),s}class Av extends Ks{constructor(t){super(t),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(e){return new Iv(e)}),this.register(function(e){return new Dv(e)}),this.register(function(e){return new Hv(e)}),this.register(function(e){return new Vv(e)}),this.register(function(e){return new Wv(e)}),this.register(function(e){return new Nv(e)}),this.register(function(e){return new kv(e)}),this.register(function(e){return new Fv(e)}),this.register(function(e){return new Ov(e)}),this.register(function(e){return new Lv(e)}),this.register(function(e){return new zv(e)}),this.register(function(e){return new Uv(e)}),this.register(function(e){return new Gv(e)}),this.register(function(e){return new Bv(e)}),this.register(function(e){return new Cv(e)}),this.register(function(e){return new qv(e)}),this.register(function(e){return new jv(e)})}load(t,e,n,i){const r=this;let a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){const l=Mr.extractUrlBase(t);a=Mr.resolveURL(l,this.path)}else a=Mr.extractUrlBase(t);this.manager.itemStart(t);const o=function(l){i?i(l):console.error(l),r.manager.itemError(t),r.manager.itemEnd(t)},c=new Lu(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(t,function(l){try{r.parse(l,a,function(h){e(h),r.manager.itemEnd(t)},o)}catch(h){o(h)}},n,o)}setDRACOLoader(t){return this.dracoLoader=t,this}setKTX2Loader(t){return this.ktx2Loader=t,this}setMeshoptDecoder(t){return this.meshoptDecoder=t,this}register(t){return this.pluginCallbacks.indexOf(t)===-1&&this.pluginCallbacks.push(t),this}unregister(t){return this.pluginCallbacks.indexOf(t)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(t),1),this}parse(t,e,n,i){let r;const a={},o={},c=new TextDecoder;if(typeof t=="string")r=JSON.parse(t);else if(t instanceof ArrayBuffer)if(c.decode(new Uint8Array(t,0,4))===Iu){try{a[Qt.KHR_BINARY_GLTF]=new Xv(t)}catch(f){i&&i(f);return}r=JSON.parse(a[Qt.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(t));else r=t;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const l=new a_(r,{path:e||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const f=this.pluginCallbacks[h](l);f.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[f.name]=f,a[f.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){const f=r.extensionsUsed[h],u=r.extensionsRequired||[];switch(f){case Qt.KHR_MATERIALS_UNLIT:a[f]=new Pv;break;case Qt.KHR_DRACO_MESH_COMPRESSION:a[f]=new Kv(r,this.dracoLoader);break;case Qt.KHR_TEXTURE_TRANSFORM:a[f]=new Yv;break;case Qt.KHR_MESH_QUANTIZATION:a[f]=new Jv;break;default:u.indexOf(f)>=0&&o[f]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+f+'".')}}l.setExtensions(a),l.setPlugins(o),l.parse(n,i)}parseAsync(t,e){const n=this;return new Promise(function(i,r){n.parse(t,e,i,r)})}}function Rv(){let s={};return{get:function(t){return s[t]},add:function(t,e){s[t]=e},remove:function(t){delete s[t]},removeAll:function(){s={}}}}const Qt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class Cv{constructor(t){this.parser=t,this.name=Qt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const t=this.parser,e=this.parser.json.nodes||[];for(let n=0,i=e.length;n<i;n++){const r=e[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&t._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(t){const e=this.parser,n="light:"+t;let i=e.cache.get(n);if(i)return i;const r=e.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[t];let l;const h=new ct(16777215);c.color!==void 0&&h.setRGB(c.color[0],c.color[1],c.color[2],tn);const f=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new Va(h),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new uv(h),l.distance=f;break;case"spot":l=new hv(h),l.distance=f,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),l.decay=2,ci(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=e.createUniqueName(c.name||"light_"+t),i=Promise.resolve(l),e.cache.add(n,i),i}getDependency(t,e){if(t==="light")return this._loadLight(e)}createNodeAttachment(t){const e=this,n=this.parser,r=n.json.nodes[t],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(c){return n._getNodeRef(e.cache,o,c)})}}class Pv{constructor(){this.name=Qt.KHR_MATERIALS_UNLIT}getMaterialType(){return Ee}extendParams(t,e,n){const i=[];t.color=new ct(1,1,1),t.opacity=1;const r=e.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const a=r.baseColorFactor;t.color.setRGB(a[0],a[1],a[2],tn),t.opacity=a[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(t,"map",r.baseColorTexture,Ne))}return Promise.all(i)}}class Lv{constructor(t){this.parser=t,this.name=Qt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(t,e){const i=this.parser.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name].emissiveStrength;return r!==void 0&&(e.emissiveIntensity=r),Promise.resolve()}}class Iv{constructor(t){this.parser=t,this.name=Qt.KHR_MATERIALS_CLEARCOAT}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:Zn}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];if(a.clearcoatFactor!==void 0&&(e.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&r.push(n.assignTexture(e,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(e.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(e,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(e,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){const o=a.clearcoatNormalTexture.scale;e.clearcoatNormalScale=new ht(o,o)}return Promise.all(r)}}class Dv{constructor(t){this.parser=t,this.name=Qt.KHR_MATERIALS_DISPERSION}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:Zn}extendMaterialParams(t,e){const i=this.parser.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return e.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}}class Uv{constructor(t){this.parser=t,this.name=Qt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:Zn}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];return a.iridescenceFactor!==void 0&&(e.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&r.push(n.assignTexture(e,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(e.iridescenceIOR=a.iridescenceIor),e.iridescenceThicknessRange===void 0&&(e.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(e.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(e.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(e,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(r)}}class Nv{constructor(t){this.parser=t,this.name=Qt.KHR_MATERIALS_SHEEN}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:Zn}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[];e.sheenColor=new ct(0,0,0),e.sheenRoughness=0,e.sheen=1;const a=i.extensions[this.name];if(a.sheenColorFactor!==void 0){const o=a.sheenColorFactor;e.sheenColor.setRGB(o[0],o[1],o[2],tn)}return a.sheenRoughnessFactor!==void 0&&(e.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&r.push(n.assignTexture(e,"sheenColorMap",a.sheenColorTexture,Ne)),a.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(e,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(r)}}class kv{constructor(t){this.parser=t,this.name=Qt.KHR_MATERIALS_TRANSMISSION}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:Zn}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];return a.transmissionFactor!==void 0&&(e.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&r.push(n.assignTexture(e,"transmissionMap",a.transmissionTexture)),Promise.all(r)}}class Fv{constructor(t){this.parser=t,this.name=Qt.KHR_MATERIALS_VOLUME}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:Zn}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];e.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&r.push(n.assignTexture(e,"thicknessMap",a.thicknessTexture)),e.attenuationDistance=a.attenuationDistance||1/0;const o=a.attenuationColor||[1,1,1];return e.attenuationColor=new ct().setRGB(o[0],o[1],o[2],tn),Promise.all(r)}}class Ov{constructor(t){this.parser=t,this.name=Qt.KHR_MATERIALS_IOR}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:Zn}extendMaterialParams(t,e){const i=this.parser.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return e.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class zv{constructor(t){this.parser=t,this.name=Qt.KHR_MATERIALS_SPECULAR}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:Zn}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];e.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&r.push(n.assignTexture(e,"specularIntensityMap",a.specularTexture));const o=a.specularColorFactor||[1,1,1];return e.specularColor=new ct().setRGB(o[0],o[1],o[2],tn),a.specularColorTexture!==void 0&&r.push(n.assignTexture(e,"specularColorMap",a.specularColorTexture,Ne)),Promise.all(r)}}class Bv{constructor(t){this.parser=t,this.name=Qt.EXT_MATERIALS_BUMP}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:Zn}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];return e.bumpScale=a.bumpFactor!==void 0?a.bumpFactor:1,a.bumpTexture!==void 0&&r.push(n.assignTexture(e,"bumpMap",a.bumpTexture)),Promise.all(r)}}class Gv{constructor(t){this.parser=t,this.name=Qt.KHR_MATERIALS_ANISOTROPY}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:Zn}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];return a.anisotropyStrength!==void 0&&(e.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(e.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&r.push(n.assignTexture(e,"anisotropyMap",a.anisotropyTexture)),Promise.all(r)}}class Hv{constructor(t){this.parser=t,this.name=Qt.KHR_TEXTURE_BASISU}loadTexture(t){const e=this.parser,n=e.json,i=n.textures[t];if(!i.extensions||!i.extensions[this.name])return null;const r=i.extensions[this.name],a=e.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return e.loadTextureImage(t,r.source,a)}}class Vv{constructor(t){this.parser=t,this.name=Qt.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(t){const e=this.name,n=this.parser,i=n.json,r=i.textures[t];if(!r.extensions||!r.extensions[e])return null;const a=r.extensions[e],o=i.images[a.source];let c=n.textureLoader;if(o.uri){const l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(t,a.source,c);if(i.extensionsRequired&&i.extensionsRequired.indexOf(e)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(t)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(t){const e=new Image;e.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",e.onload=e.onerror=function(){t(e.height===1)}})),this.isSupported}}class Wv{constructor(t){this.parser=t,this.name=Qt.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(t){const e=this.name,n=this.parser,i=n.json,r=i.textures[t];if(!r.extensions||!r.extensions[e])return null;const a=r.extensions[e],o=i.images[a.source];let c=n.textureLoader;if(o.uri){const l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(t,a.source,c);if(i.extensionsRequired&&i.extensionsRequired.indexOf(e)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(t)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(t){const e=new Image;e.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",e.onload=e.onerror=function(){t(e.height===1)}})),this.isSupported}}class qv{constructor(t){this.name=Qt.EXT_MESHOPT_COMPRESSION,this.parser=t}loadBufferView(t){const e=this.parser.json,n=e.bufferViews[t];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(e.extensionsRequired&&e.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){const c=i.byteOffset||0,l=i.byteLength||0,h=i.count,f=i.byteStride,u=new Uint8Array(o,c,l);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(h,f,u,i.mode,i.filter).then(function(d){return d.buffer}):a.ready.then(function(){const d=new ArrayBuffer(h*f);return a.decodeGltfBuffer(new Uint8Array(d),h,f,u,i.mode,i.filter),d})})}else return null}}class jv{constructor(t){this.name=Qt.EXT_MESH_GPU_INSTANCING,this.parser=t}createNodeMesh(t){const e=this.parser.json,n=e.nodes[t];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=e.meshes[n.mesh];for(const l of i.primitives)if(l.mode!==gn.TRIANGLES&&l.mode!==gn.TRIANGLE_STRIP&&l.mode!==gn.TRIANGLE_FAN&&l.mode!==void 0)return null;const a=n.extensions[this.name].attributes,o=[],c={};for(const l in a)o.push(this.parser.getDependency("accessor",a[l]).then(h=>(c[l]=h,c[l])));return o.length<1?null:(o.push(this.parser.createNodeMesh(t)),Promise.all(o).then(l=>{const h=l.pop(),f=h.isGroup?h.children:[h],u=l[0].count,d=[];for(const g of f){const b=new kt,m=new P,p=new We,v=new P(1,1,1),_=new Le(g.geometry,g.material,u);for(let x=0;x<u;x++)c.TRANSLATION&&m.fromBufferAttribute(c.TRANSLATION,x),c.ROTATION&&p.fromBufferAttribute(c.ROTATION,x),c.SCALE&&v.fromBufferAttribute(c.SCALE,x),_.setMatrixAt(x,b.compose(m,p,v));for(const x in c)if(x==="_COLOR_0"){const C=c[x];_.instanceColor=new Wc(C.array,C.itemSize,C.normalized)}else x!=="TRANSLATION"&&x!=="ROTATION"&&x!=="SCALE"&&g.geometry.setAttribute(x,c[x]);_e.prototype.copy.call(_,g),this.parser.assignFinalMaterial(_),d.push(_)}return h.isGroup?(h.clear(),h.add(...d),h):d[0]}))}}const Iu="glTF",rr=12,vf={JSON:1313821514,BIN:5130562};class Xv{constructor(t){this.name=Qt.KHR_BINARY_GLTF,this.content=null,this.body=null;const e=new DataView(t,0,rr),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(t.slice(0,4))),version:e.getUint32(4,!0),length:e.getUint32(8,!0)},this.header.magic!==Iu)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-rr,r=new DataView(t,rr);let a=0;for(;a<i;){const o=r.getUint32(a,!0);a+=4;const c=r.getUint32(a,!0);if(a+=4,c===vf.JSON){const l=new Uint8Array(t,rr+a,o);this.content=n.decode(l)}else if(c===vf.BIN){const l=rr+a;this.body=t.slice(l,l+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class Kv{constructor(t,e){if(!e)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Qt.KHR_DRACO_MESH_COMPRESSION,this.json=t,this.dracoLoader=e,this.dracoLoader.preload()}decodePrimitive(t,e){const n=this.json,i=this.dracoLoader,r=t.extensions[this.name].bufferView,a=t.extensions[this.name].attributes,o={},c={},l={};for(const h in a){const f=Jc[h]||h.toLowerCase();o[f]=a[h]}for(const h in t.attributes){const f=Jc[h]||h.toLowerCase();if(a[h]!==void 0){const u=n.accessors[t.attributes[h]],d=Cs[u.componentType];l[f]=d.name,c[f]=u.normalized===!0}}return e.getDependency("bufferView",r).then(function(h){return new Promise(function(f,u){i.decodeDracoFile(h,function(d){for(const g in d.attributes){const b=d.attributes[g],m=c[g];m!==void 0&&(b.normalized=m)}f(d)},o,l,tn,u)})})}}class Yv{constructor(){this.name=Qt.KHR_TEXTURE_TRANSFORM}extendTexture(t,e){return(e.texCoord===void 0||e.texCoord===t.channel)&&e.offset===void 0&&e.rotation===void 0&&e.scale===void 0||(t=t.clone(),e.texCoord!==void 0&&(t.channel=e.texCoord),e.offset!==void 0&&t.offset.fromArray(e.offset),e.rotation!==void 0&&(t.rotation=e.rotation),e.scale!==void 0&&t.repeat.fromArray(e.scale),t.needsUpdate=!0),t}}class Jv{constructor(){this.name=Qt.KHR_MESH_QUANTIZATION}}class Du extends Hr{constructor(t,e,n,i){super(t,e,n,i)}copySampleValue_(t){const e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i*3+i;for(let a=0;a!==i;a++)e[a]=n[r+a];return e}interpolate_(t,e,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=o*2,l=o*3,h=i-e,f=(n-e)/h,u=f*f,d=u*f,g=t*l,b=g-l,m=-2*d+3*u,p=d-u,v=1-m,_=p-u+f;for(let x=0;x!==o;x++){const C=a[b+x+o],w=a[b+x+c]*h,R=a[g+x+o],A=a[g+x]*h;r[x]=v*C+_*w+m*R+p*A}return r}}const Zv=new We;class $v extends Du{interpolate_(t,e,n,i){const r=super.interpolate_(t,e,n,i);return Zv.fromArray(r).normalize().toArray(r),r}}const gn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},Cs={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},_f={9728:Ze,9729:fn,9984:Vf,9985:Aa,9986:hr,9987:fi},yf={33071:Pi,33648:ka,10497:ki},Yo={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Jc={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Ri={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Qv={CUBICSPLINE:void 0,LINEAR:Pr,STEP:Cr},Jo={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function t_(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new Al({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:gi})),s.DefaultMaterial}function qi(s,t,e){for(const n in e.extensions)s[n]===void 0&&(t.userData.gltfExtensions=t.userData.gltfExtensions||{},t.userData.gltfExtensions[n]=e.extensions[n])}function ci(s,t){t.extras!==void 0&&(typeof t.extras=="object"?Object.assign(s.userData,t.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+t.extras))}function e_(s,t,e){let n=!1,i=!1,r=!1;for(let l=0,h=t.length;l<h;l++){const f=t[l];if(f.POSITION!==void 0&&(n=!0),f.NORMAL!==void 0&&(i=!0),f.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);const a=[],o=[],c=[];for(let l=0,h=t.length;l<h;l++){const f=t[l];if(n){const u=f.POSITION!==void 0?e.getDependency("accessor",f.POSITION):s.attributes.position;a.push(u)}if(i){const u=f.NORMAL!==void 0?e.getDependency("accessor",f.NORMAL):s.attributes.normal;o.push(u)}if(r){const u=f.COLOR_0!==void 0?e.getDependency("accessor",f.COLOR_0):s.attributes.color;c.push(u)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c)]).then(function(l){const h=l[0],f=l[1],u=l[2];return n&&(s.morphAttributes.position=h),i&&(s.morphAttributes.normal=f),r&&(s.morphAttributes.color=u),s.morphTargetsRelative=!0,s})}function n_(s,t){if(s.updateMorphTargets(),t.weights!==void 0)for(let e=0,n=t.weights.length;e<n;e++)s.morphTargetInfluences[e]=t.weights[e];if(t.extras&&Array.isArray(t.extras.targetNames)){const e=t.extras.targetNames;if(s.morphTargetInfluences.length===e.length){s.morphTargetDictionary={};for(let n=0,i=e.length;n<i;n++)s.morphTargetDictionary[e[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function i_(s){let t;const e=s.extensions&&s.extensions[Qt.KHR_DRACO_MESH_COMPRESSION];if(e?t="draco:"+e.bufferView+":"+e.indices+":"+Zo(e.attributes):t=s.indices+":"+Zo(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)t+=":"+Zo(s.targets[n]);return t}function Zo(s){let t="";const e=Object.keys(s).sort();for(let n=0,i=e.length;n<i;n++)t+=e[n]+":"+s[e[n]]+";";return t}function Zc(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function s_(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":s.search(/\.ktx2($|\?)/i)>0||s.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const r_=new kt;class a_{constructor(t={},e={}){this.json=t,this.extensions={},this.plugins={},this.options=e,this.cache=new Rv,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,r=!1,a=-1;if(typeof navigator<"u"){const o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;const c=o.match(/Version\/(\d+)/);i=n&&c?parseInt(c[1],10):-1,r=o.indexOf("Firefox")>-1,a=r?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||r&&a<98?this.textureLoader=new cv(this.options.manager):this.textureLoader=new pv(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Lu(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(t){this.extensions=t}setPlugins(t){this.plugins=t}parse(t,e){const n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){const o={scene:a[0][i.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:i.asset,parser:n,userData:{}};return qi(r,o,i),ci(o,i),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(o)})).then(function(){for(const c of o.scenes)c.updateMatrixWorld();t(o)})}).catch(e)}_markDefs(){const t=this.json.nodes||[],e=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=e.length;i<r;i++){const a=e[i].joints;for(let o=0,c=a.length;o<c;o++)t[a[o]].isBone=!0}for(let i=0,r=t.length;i<r;i++){const a=t[i];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(t,e){e!==void 0&&(t.refs[e]===void 0&&(t.refs[e]=t.uses[e]=0),t.refs[e]++)}_getNodeRef(t,e,n){if(t.refs[e]<=1)return n;const i=n.clone(),r=(a,o)=>{const c=this.associations.get(a);c!=null&&this.associations.set(o,c);for(const[l,h]of a.children.entries())r(h,o.children[l])};return r(n,i),i.name+="_instance_"+t.uses[e]++,i}_invokeOne(t){const e=Object.values(this.plugins);e.push(this);for(let n=0;n<e.length;n++){const i=t(e[n]);if(i)return i}return null}_invokeAll(t){const e=Object.values(this.plugins);e.unshift(this);const n=[];for(let i=0;i<e.length;i++){const r=t(e[i]);r&&n.push(r)}return n}getDependency(t,e){const n=t+":"+e;let i=this.cache.get(n);if(!i){switch(t){case"scene":i=this.loadScene(e);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(e)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(e)});break;case"accessor":i=this.loadAccessor(e);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(e)});break;case"buffer":i=this.loadBuffer(e);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(e)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(e)});break;case"skin":i=this.loadSkin(e);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(e)});break;case"camera":i=this.loadCamera(e);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(t,e)}),!i)throw new Error("Unknown type: "+t);break}this.cache.add(n,i)}return i}getDependencies(t){let e=this.cache.get(t);if(!e){const n=this,i=this.json[t+(t==="mesh"?"es":"s")]||[];e=Promise.all(i.map(function(r,a){return n.getDependency(t,a)})),this.cache.add(t,e)}return e}loadBuffer(t){const e=this.json.buffers[t],n=this.fileLoader;if(e.type&&e.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+e.type+" buffer type is not supported.");if(e.uri===void 0&&t===0)return Promise.resolve(this.extensions[Qt.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(r,a){n.load(Mr.resolveURL(e.uri,i.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+e.uri+'".'))})})}loadBufferView(t){const e=this.json.bufferViews[t];return this.getDependency("buffer",e.buffer).then(function(n){const i=e.byteLength||0,r=e.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(t){const e=this,n=this.json,i=this.json.accessors[t];if(i.bufferView===void 0&&i.sparse===void 0){const a=Yo[i.type],o=Cs[i.componentType],c=i.normalized===!0,l=new o(i.count*a);return Promise.resolve(new be(l,a,c))}const r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(a){const o=a[0],c=Yo[i.type],l=Cs[i.componentType],h=l.BYTES_PER_ELEMENT,f=h*c,u=i.byteOffset||0,d=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0;let b,m;if(d&&d!==f){const p=Math.floor(u/d),v="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count;let _=e.cache.get(v);_||(b=new l(o,p*d,i.count*d/h),_=new ux(b,d/h),e.cache.add(v,_)),m=new vl(_,c,u%d/h,g)}else o===null?b=new l(i.count*c):b=new l(o,u,i.count*c),m=new be(b,c,g);if(i.sparse!==void 0){const p=Yo.SCALAR,v=Cs[i.sparse.indices.componentType],_=i.sparse.indices.byteOffset||0,x=i.sparse.values.byteOffset||0,C=new v(a[1],_,i.sparse.count*p),w=new l(a[2],x,i.sparse.count*c);o!==null&&(m=new be(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let R=0,A=C.length;R<A;R++){const y=C[R];if(m.setX(y,w[R*c]),c>=2&&m.setY(y,w[R*c+1]),c>=3&&m.setZ(y,w[R*c+2]),c>=4&&m.setW(y,w[R*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(t){const e=this.json,n=this.options,r=e.textures[t].source,a=e.images[r];let o=this.textureLoader;if(a.uri){const c=n.manager.getHandler(a.uri);c!==null&&(o=c)}return this.loadTextureImage(t,r,o)}loadTextureImage(t,e,n){const i=this,r=this.json,a=r.textures[t],o=r.images[e],c=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[c])return this.textureCache[c];const l=this.loadImageSource(e,n).then(function(h){h.flipY=!1,h.name=a.name||o.name||"",h.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(h.name=o.uri);const u=(r.samplers||{})[a.sampler]||{};return h.magFilter=_f[u.magFilter]||fn,h.minFilter=_f[u.minFilter]||fi,h.wrapS=yf[u.wrapS]||ki,h.wrapT=yf[u.wrapT]||ki,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==Ze&&h.minFilter!==fn,i.associations.set(h,{textures:t}),h}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(t,e){const n=this,i=this.json,r=this.options;if(this.sourceCache[t]!==void 0)return this.sourceCache[t].then(f=>f.clone());const a=i.images[t],o=self.URL||self.webkitURL;let c=a.uri||"",l=!1;if(a.bufferView!==void 0)c=n.getDependency("bufferView",a.bufferView).then(function(f){l=!0;const u=new Blob([f],{type:a.mimeType});return c=o.createObjectURL(u),c});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+t+" is missing URI and bufferView");const h=Promise.resolve(c).then(function(f){return new Promise(function(u,d){let g=u;e.isImageBitmapLoader===!0&&(g=function(b){const m=new Fe(b);m.needsUpdate=!0,u(m)}),e.load(Mr.resolveURL(f,r.path),g,void 0,d)})}).then(function(f){return l===!0&&o.revokeObjectURL(c),ci(f,a),f.userData.mimeType=a.mimeType||s_(a.uri),f}).catch(function(f){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),f});return this.sourceCache[t]=h,h}assignTexture(t,e,n,i){const r=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),r.extensions[Qt.KHR_TEXTURE_TRANSFORM]){const o=n.extensions!==void 0?n.extensions[Qt.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const c=r.associations.get(a);a=r.extensions[Qt.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,c)}}return i!==void 0&&(a.colorSpace=i),t[e]=a,a})}assignFinalMaterial(t){const e=t.geometry;let n=t.material;const i=e.attributes.tangent===void 0,r=e.attributes.color!==void 0,a=e.attributes.normal===void 0;if(t.isPoints){const o="PointsMaterial:"+n.uuid;let c=this.cache.get(o);c||(c=new bu,Sn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(o,c)),n=c}else if(t.isLine){const o="LineBasicMaterial:"+n.uuid;let c=this.cache.get(o);c||(c=new Os,Sn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(o,c)),n=c}if(i||r||a){let o="ClonedMaterial:"+n.uuid+":";i&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let c=this.cache.get(o);c||(c=n.clone(),r&&(c.vertexColors=!0),a&&(c.flatShading=!0),i&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(o,c),this.associations.set(c,this.associations.get(n))),n=c}t.material=n}getMaterialType(){return Al}loadMaterial(t){const e=this,n=this.json,i=this.extensions,r=n.materials[t];let a;const o={},c=r.extensions||{},l=[];if(c[Qt.KHR_MATERIALS_UNLIT]){const f=i[Qt.KHR_MATERIALS_UNLIT];a=f.getMaterialType(),l.push(f.extendParams(o,r,e))}else{const f=r.pbrMetallicRoughness||{};if(o.color=new ct(1,1,1),o.opacity=1,Array.isArray(f.baseColorFactor)){const u=f.baseColorFactor;o.color.setRGB(u[0],u[1],u[2],tn),o.opacity=u[3]}f.baseColorTexture!==void 0&&l.push(e.assignTexture(o,"map",f.baseColorTexture,Ne)),o.metalness=f.metallicFactor!==void 0?f.metallicFactor:1,o.roughness=f.roughnessFactor!==void 0?f.roughnessFactor:1,f.metallicRoughnessTexture!==void 0&&(l.push(e.assignTexture(o,"metalnessMap",f.metallicRoughnessTexture)),l.push(e.assignTexture(o,"roughnessMap",f.metallicRoughnessTexture))),a=this._invokeOne(function(u){return u.getMaterialType&&u.getMaterialType(t)}),l.push(Promise.all(this._invokeAll(function(u){return u.extendMaterialParams&&u.extendMaterialParams(t,o)})))}r.doubleSided===!0&&(o.side=ge);const h=r.alphaMode||Jo.OPAQUE;if(h===Jo.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===Jo.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==Ee&&(l.push(e.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new ht(1,1),r.normalTexture.scale!==void 0)){const f=r.normalTexture.scale;o.normalScale.set(f,f)}if(r.occlusionTexture!==void 0&&a!==Ee&&(l.push(e.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==Ee){const f=r.emissiveFactor;o.emissive=new ct().setRGB(f[0],f[1],f[2],tn)}return r.emissiveTexture!==void 0&&a!==Ee&&l.push(e.assignTexture(o,"emissiveMap",r.emissiveTexture,Ne)),Promise.all(l).then(function(){const f=new a(o);return r.name&&(f.name=r.name),ci(f,r),e.associations.set(f,{materials:t}),r.extensions&&qi(i,f,r),f})}createUniqueName(t){const e=me.sanitizeNodeName(t||"");return e in this.nodeNamesUsed?e+"_"+ ++this.nodeNamesUsed[e]:(this.nodeNamesUsed[e]=0,e)}loadGeometries(t){const e=this,n=this.extensions,i=this.primitiveCache;function r(o){return n[Qt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,e).then(function(c){return Mf(c,o,e)})}const a=[];for(let o=0,c=t.length;o<c;o++){const l=t[o],h=i_(l),f=i[h];if(f)a.push(f.promise);else{let u;l.extensions&&l.extensions[Qt.KHR_DRACO_MESH_COMPRESSION]?u=r(l):u=Mf(new xe,l,e),i[h]={primitive:l,promise:u},a.push(u)}}return Promise.all(a)}loadMesh(t){const e=this,n=this.json,i=this.extensions,r=n.meshes[t],a=r.primitives,o=[];for(let c=0,l=a.length;c<l;c++){const h=a[c].material===void 0?t_(this.cache):this.getDependency("material",a[c].material);o.push(h)}return o.push(e.loadGeometries(a)),Promise.all(o).then(function(c){const l=c.slice(0,c.length-1),h=c[c.length-1],f=[];for(let d=0,g=h.length;d<g;d++){const b=h[d],m=a[d];let p;const v=l[d];if(m.mode===gn.TRIANGLES||m.mode===gn.TRIANGLE_STRIP||m.mode===gn.TRIANGLE_FAN||m.mode===void 0)p=r.isSkinnedMesh===!0?new px(b,v):new J(b,v),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===gn.TRIANGLE_STRIP?p.geometry=xf(p.geometry,Qf):m.mode===gn.TRIANGLE_FAN&&(p.geometry=xf(p.geometry,Gc));else if(m.mode===gn.LINES)p=new Ir(b,v);else if(m.mode===gn.LINE_STRIP)p=new Ml(b,v);else if(m.mode===gn.LINE_LOOP)p=new bx(b,v);else if(m.mode===gn.POINTS)p=new xu(b,v);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&n_(p,r),p.name=e.createUniqueName(r.name||"mesh_"+t),ci(p,r),m.extensions&&qi(i,p,m),e.assignFinalMaterial(p),f.push(p)}for(let d=0,g=f.length;d<g;d++)e.associations.set(f[d],{meshes:t,primitives:d});if(f.length===1)return r.extensions&&qi(i,f[0],r),f[0];const u=new Zt;r.extensions&&qi(i,u,r),e.associations.set(u,{meshes:t});for(let d=0,g=f.length;d<g;d++)u.add(f[d]);return u})}loadCamera(t){let e;const n=this.json.cameras[t],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?e=new Ye($d.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(e=new io(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(e.name=this.createUniqueName(n.name)),ci(e,n),Promise.resolve(e)}loadSkin(t){const e=this.json.skins[t],n=[];for(let i=0,r=e.joints.length;i<r;i++)n.push(this._loadNodeShallow(e.joints[i]));return e.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",e.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const r=i.pop(),a=i,o=[],c=[];for(let l=0,h=a.length;l<h;l++){const f=a[l];if(f){o.push(f);const u=new kt;r!==null&&u.fromArray(r.array,l*16),c.push(u)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',e.joints[l])}return new yl(o,c)})}loadAnimation(t){const e=this.json,n=this,i=e.animations[t],r=i.name?i.name:"animation_"+t,a=[],o=[],c=[],l=[],h=[];for(let f=0,u=i.channels.length;f<u;f++){const d=i.channels[f],g=i.samplers[d.sampler],b=d.target,m=b.node,p=i.parameters!==void 0?i.parameters[g.input]:g.input,v=i.parameters!==void 0?i.parameters[g.output]:g.output;b.node!==void 0&&(a.push(this.getDependency("node",m)),o.push(this.getDependency("accessor",p)),c.push(this.getDependency("accessor",v)),l.push(g),h.push(b))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c),Promise.all(l),Promise.all(h)]).then(function(f){const u=f[0],d=f[1],g=f[2],b=f[3],m=f[4],p=[];for(let v=0,_=u.length;v<_;v++){const x=u[v],C=d[v],w=g[v],R=b[v],A=m[v];if(x===void 0)continue;x.updateMatrix&&x.updateMatrix();const y=n._createAnimationTracks(x,C,w,R,A);if(y)for(let M=0;M<y.length;M++)p.push(y[M])}return new ev(r,void 0,p)})}createNodeMesh(t){const e=this.json,n=this,i=e.nodes[t];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){const a=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let c=0,l=i.weights.length;c<l;c++)o.morphTargetInfluences[c]=i.weights[c]}),a})}loadNode(t){const e=this.json,n=this,i=e.nodes[t],r=n._loadNodeShallow(t),a=[],o=i.children||[];for(let l=0,h=o.length;l<h;l++)a.push(n.getDependency("node",o[l]));const c=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(a),c]).then(function(l){const h=l[0],f=l[1],u=l[2];u!==null&&h.traverse(function(d){d.isSkinnedMesh&&d.bind(u,r_)});for(let d=0,g=f.length;d<g;d++)h.add(f[d]);return h})}_loadNodeShallow(t){const e=this.json,n=this.extensions,i=this;if(this.nodeCache[t]!==void 0)return this.nodeCache[t];const r=e.nodes[t],a=r.name?i.createUniqueName(r.name):"",o=[],c=i._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(t)});return c&&o.push(c),r.camera!==void 0&&o.push(i.getDependency("camera",r.camera).then(function(l){return i._getNodeRef(i.cameraCache,r.camera,l)})),i._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(t)}).forEach(function(l){o.push(l)}),this.nodeCache[t]=Promise.all(o).then(function(l){let h;if(r.isBone===!0?h=new gu:l.length>1?h=new Zt:l.length===1?h=l[0]:h=new _e,h!==l[0])for(let f=0,u=l.length;f<u;f++)h.add(l[f]);if(r.name&&(h.userData.name=r.name,h.name=a),ci(h,r),r.extensions&&qi(n,h,r),r.matrix!==void 0){const f=new kt;f.fromArray(r.matrix),h.applyMatrix4(f)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);return i.associations.has(h)||i.associations.set(h,{}),i.associations.get(h).nodes=t,h}),this.nodeCache[t]}loadScene(t){const e=this.extensions,n=this.json.scenes[t],i=this,r=new Zt;n.name&&(r.name=i.createUniqueName(n.name)),ci(r,n),n.extensions&&qi(e,r,n);const a=n.nodes||[],o=[];for(let c=0,l=a.length;c<l;c++)o.push(i.getDependency("node",a[c]));return Promise.all(o).then(function(c){for(let h=0,f=c.length;h<f;h++)r.add(c[h]);const l=h=>{const f=new Map;for(const[u,d]of i.associations)(u instanceof Sn||u instanceof Fe)&&f.set(u,d);return h.traverse(u=>{const d=i.associations.get(u);d!=null&&f.set(u,d)}),f};return i.associations=l(r),r})}_createAnimationTracks(t,e,n,i,r){const a=[],o=t.name?t.name:t.uuid,c=[];Ri[r.path]===Ri.weights?t.traverse(function(u){u.morphTargetInfluences&&c.push(u.name?u.name:u.uuid)}):c.push(o);let l;switch(Ri[r.path]){case Ri.weights:l=zs;break;case Ri.rotation:l=Bs;break;case Ri.position:case Ri.scale:l=Gs;break;default:n.itemSize===1?l=zs:l=Gs;break}const h=i.interpolation!==void 0?Qv[i.interpolation]:Pr,f=this._getArrayFromAccessor(n);for(let u=0,d=c.length;u<d;u++){const g=new l(c[u]+"."+Ri[r.path],e.array,f,h);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),a.push(g)}return a}_getArrayFromAccessor(t){let e=t.array;if(t.normalized){const n=Zc(e.constructor),i=new Float32Array(e.length);for(let r=0,a=e.length;r<a;r++)i[r]=e[r]*n;e=i}return e}_createCubicSplineTrackInterpolant(t){t.createInterpolant=function(n){const i=this instanceof Bs?$v:Du;return new i(this.times,this.values,this.getValueSize()/3,n)},t.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function o_(s,t,e){const n=t.attributes,i=new vi;if(n.POSITION!==void 0){const o=e.json.accessors[n.POSITION],c=o.min,l=o.max;if(c!==void 0&&l!==void 0){if(i.set(new P(c[0],c[1],c[2]),new P(l[0],l[1],l[2])),o.normalized){const h=Zc(Cs[o.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=t.targets;if(r!==void 0){const o=new P,c=new P;for(let l=0,h=r.length;l<h;l++){const f=r[l];if(f.POSITION!==void 0){const u=e.json.accessors[f.POSITION],d=u.min,g=u.max;if(d!==void 0&&g!==void 0){if(c.setX(Math.max(Math.abs(d[0]),Math.abs(g[0]))),c.setY(Math.max(Math.abs(d[1]),Math.abs(g[1]))),c.setZ(Math.max(Math.abs(d[2]),Math.abs(g[2]))),u.normalized){const b=Zc(Cs[u.componentType]);c.multiplyScalar(b)}o.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(o)}s.boundingBox=i;const a=new Yn;i.getCenter(a.center),a.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=a}function Mf(s,t,e){const n=t.attributes,i=[];function r(a,o){return e.getDependency("accessor",a).then(function(c){s.setAttribute(o,c)})}for(const a in n){const o=Jc[a]||a.toLowerCase();o in s.attributes||i.push(r(n[a],o))}if(t.indices!==void 0&&!s.index){const a=e.getDependency("accessor",t.indices).then(function(o){s.setIndex(o)});i.push(a)}return ie.workingColorSpace!==tn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${ie.workingColorSpace}" not supported.`),ci(s,t),o_(s,t,e),Promise.all(i).then(function(){return t.targets!==void 0?e_(s,t.targets,e):s})}var c_=(function(){var s="b9H79Tebbbe8Fv9Gbb9Gvuuuuueu9Giuuub9Geueu9Giuuueuikqbeeedddillviebeoweuec:q;iekr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbeY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVbdE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbiL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtblK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbol79IV9Rbrq:P8Yqdbk;3sezu8Jjjjjbcj;eb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Radz1jjjbhwcj;abad9UhoaicefhldnadTmbaoc;WFbGgocjdaocjd6EhDcbhqinaqae9pmeaDaeaq9RaqaDfae6Egkcsfgocl4cifcd4hxdndndndnaoc9WGgmTmbcbhPcehsawcjdfhzalhHinaraH9Rax6midnaraHaxfgl9RcK6mbczhoinawcj;cbfaogifgoc9WfhOdndndndndnaHaic9WfgAco4fRbbaAci4coG4ciGPlbedibkaO9cb83ibaOcwf9cb83ibxikaOalRblalRbbgAco4gCaCciSgCE86bbaocGfalclfaCfgORbbaAcl4ciGgCaCciSgCE86bbaocVfaOaCfgORbbaAcd4ciGgCaCciSgCE86bbaoc7faOaCfgORbbaAciGgAaAciSgAE86bbaoctfaOaAfgARbbalRbegOco4gCaCciSgCE86bbaoc91faAaCfgARbbaOcl4ciGgCaCciSgCE86bbaoc4faAaCfgARbbaOcd4ciGgCaCciSgCE86bbaoc93faAaCfgARbbaOciGgOaOciSgOE86bbaoc94faAaOfgARbbalRbdgOco4gCaCciSgCE86bbaoc95faAaCfgARbbaOcl4ciGgCaCciSgCE86bbaoc96faAaCfgARbbaOcd4ciGgCaCciSgCE86bbaoc97faAaCfgARbbaOciGgOaOciSgOE86bbaoc98faAaOfgORbbalRbiglco4gAaAciSgAE86bbaoc99faOaAfgORbbalcl4ciGgAaAciSgAE86bbaoc9:faOaAfgORbbalcd4ciGgAaAciSgAE86bbaocufaOaAfgoRbbalciGglalciSglE86bbaoalfhlxdkaOalRbwalRbbgAcl4gCaCcsSgCE86bbaocGfalcwfaCfgORbbaAcsGgAaAcsSgAE86bbaocVfaOaAfgORbbalRbegAcl4gCaCcsSgCE86bbaoc7faOaCfgORbbaAcsGgAaAcsSgAE86bbaoctfaOaAfgORbbalRbdgAcl4gCaCcsSgCE86bbaoc91faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc4faOaAfgORbbalRbigAcl4gCaCcsSgCE86bbaoc93faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc94faOaAfgORbbalRblgAcl4gCaCcsSgCE86bbaoc95faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc96faOaAfgORbbalRbvgAcl4gCaCcsSgCE86bbaoc97faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc98faOaAfgORbbalRbogAcl4gCaCcsSgCE86bbaoc99faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc9:faOaAfgORbbalRbrglcl4gAaAcsSgAE86bbaocufaOaAfgoRbbalcsGglalcsSglE86bbaoalfhlxekaOal8Pbb83bbaOcwfalcwf8Pbb83bbalczfhlkdnaiam9pmbaiczfhoaral9RcL0mekkaiam6mialTmidnakTmbawaPfRbbhOcbhoazhiinaiawcj;cbfaofRbbgAce4cbaAceG9R7aOfgO86bbaiadfhiaocefgoak9hmbkkazcefhzaPcefgPad6hsalhHaPad9hmexvkkcbhlasceGmdxikalaxad2fhCdnakTmbcbhHcehsawcjdfhminaral9Rax6mialTmdalaxfhlawaHfRbbhOcbhoamhiinaiawcj;cbfaofRbbgAce4cbaAceG9R7aOfgO86bbaiadfhiaocefgoak9hmbkamcefhmaHcefgHad6hsaHad9hmbkaChlxikcbhocehsinaral9Rax6mdalTmealaxfhlaocefgoad6hsadao9hmbkaChlxdkcbhlasceGTmekc9:hoxikabaqad2fawcjdfakad2z1jjjb8Aawawcjdfakcufad2fadz1jjjb8Aakaqfhqalmbkc9:hoxekcbc99aral9Radcaadca0ESEhokavcj;ebf8Kjjjjbaok;yzeHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecjez:jjjjb8AavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhodnaeTmbcmcsaDceSEhkcbhxcbhmcbhDcbhicbhlindnaoaq9nmbc9:hoxikdndnawRbbgrc;Ve0mbavc;abfalarcl4cu7fcsGcitfgPydlhsaPydbhzdnarcsGgPak9pmbavaiarcu7fcsGcdtfydbaxaPEhraPThPdndnadcd9hmbabaDcetfgHaz87ebaHcdfas87ebaHclfar87ebxekabaDcdtfgHazBdbaHclfasBdbaHcwfarBdbkaxaPfhxavc;abfalcitfgHarBdbaHasBdlavaicdtfarBdbavc;abfalcefcsGglcitfgHazBdbaHarBdlaiaPfhialcefhlxdkdndnaPcsSmbamaPfaPc987fcefhmxekaocefhrao8SbbgPcFeGhHdndnaPcu9mmbarhoxekaocvfhoaHcFbGhHcrhPdninar8SbbgOcFbGaPtaHVhHaOcu9kmearcefhraPcrfgPc8J9hmbxdkkarcefhokaHce4cbaHceG9R7amfhmkdndnadcd9hmbabaDcetfgraz87ebarcdfas87ebarclfam87ebxekabaDcdtfgrazBdbarclfasBdbarcwfamBdbkavc;abfalcitfgramBdbarasBdlavaicdtfamBdbavc;abfalcefcsGglcitfgrazBdbaramBdlaicefhialcefhlxekdnarcpe0mbaxcefgOavaiaqarcsGfRbbgPcl49RcsGcdtfydbaPcz6gHEhravaiaP9RcsGcdtfydbaOaHfgsaPcsGgOEhPaOThOdndnadcd9hmbabaDcetfgzax87ebazcdfar87ebazclfaP87ebxekabaDcdtfgzaxBdbazclfarBdbazcwfaPBdbkavaicdtfaxBdbavc;abfalcitfgzarBdbazaxBdlavaicefgicsGcdtfarBdbavc;abfalcefcsGcitfgzaPBdbazarBdlavaiaHfcsGgicdtfaPBdbavc;abfalcdfcsGglcitfgraxBdbaraPBdlalcefhlaiaOfhiasaOfhxxekaxcbaoRbbgzEgAarc;:eSgrfhsazcsGhCazcl4hXdndnazcs0mbascefhOxekashOavaiaX9RcsGcdtfydbhskdndnaCmbaOcefhxxekaOhxavaiaz9RcsGcdtfydbhOkdndnarTmbaocefhrxekaocdfhrao8SbegHcFeGhPdnaHcu9kmbaocofhAaPcFbGhPcrhodninar8SbbgHcFbGaotaPVhPaHcu9kmearcefhraocrfgoc8J9hmbkaAhrxekarcefhrkaPce4cbaPceG9R7amfgmhAkdndnaXcsSmbarhPxekarcefhPar8SbbgocFeGhHdnaocu9kmbarcvfhsaHcFbGhHcrhodninaP8SbbgrcFbGaotaHVhHarcu9kmeaPcefhPaocrfgoc8J9hmbkashPxekaPcefhPkaHce4cbaHceG9R7amfgmhskdndnaCcsSmbaPhoxekaPcefhoaP8SbbgrcFeGhHdnarcu9kmbaPcvfhOaHcFbGhHcrhrdninao8SbbgPcFbGartaHVhHaPcu9kmeaocefhoarcrfgrc8J9hmbkaOhoxekaocefhokaHce4cbaHceG9R7amfgmhOkdndnadcd9hmbabaDcetfgraA87ebarcdfas87ebarclfaO87ebxekabaDcdtfgraABdbarclfasBdbarcwfaOBdbkavc;abfalcitfgrasBdbaraABdlavaicdtfaABdbavc;abfalcefcsGcitfgraOBdbarasBdlavaicefgicsGcdtfasBdbavc;abfalcdfcsGcitfgraABdbaraOBdlavaiazcz6aXcsSVfgicsGcdtfaOBdbaiaCTaCcsSVfhialcifhlkawcefhwalcsGhlaicsGhiaDcifgDae6mbkkcbc99aoaqSEhokavc;aef8Kjjjjbaok:llevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:Lvoeue99dud99eud99dndnadcl9hmbaeTmeindndnabcdfgd8Sbb:Yab8Sbbgi:Ygl:l:tabcefgv8Sbbgo:Ygr:l:tgwJbb;:9cawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai86bbdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad86bbdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad86bbabclfhbaecufgembxdkkaeTmbindndnabclfgd8Ueb:Yab8Uebgi:Ygl:l:tabcdfgv8Uebgo:Ygr:l:tgwJb;:FSawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai87ebdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad87ebdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad87ebabcwfhbaecufgembkkk;siliui99iue99dnaeTmbcbhiabhlindndnJ;Zl81Zalcof8UebgvciV:Y:vgoal8Ueb:YNgrJb;:FSNJbbbZJbbb:;arJbbbb9GEMgw:lJbbb9p9DTmbaw:OhDxekcjjjj94hDkalclf8Uebhqalcdf8UebhkabavcefciGaiVcetfaD87ebdndnaoak:YNgwJb;:FSNJbbbZJbbb:;awJbbbb9GEMgx:lJbbb9p9DTmbax:Ohkxekcjjjj94hkkabavcdfciGaiVcetfak87ebdndnaoaq:YNgoJb;:FSNJbbbZJbbb:;aoJbbbb9GEMgx:lJbbb9p9DTmbax:Ohqxekcjjjj94hqkabavcufciGaiVcetfaq87ebdndnJbbjZararN:tawawN:taoaoN:tgrJbbbbarJbbbb9GE:rJb;:FSNJbbbZMgr:lJbbb9p9DTmbar:Ohqxekcjjjj94hqkabavciGaiVcetfaq87ebalcwfhlaiclfhiaecufgembkkk9mbdnadcd4ae2geTmbinababydbgdcwtcw91:Yadce91cjjj;8ifcjjj98G::NUdbabclfhbaecufgembkkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik;LeeeudndnaeabVciGTmbabhixekdndnadcz9pmbabhixekabhiinaiaeydbBdbaiclfaeclfydbBdbaicwfaecwfydbBdbaicxfaecxfydbBdbaiczfhiaeczfheadc9Wfgdcs0mbkkadcl6mbinaiaeydbBdbaeclfheaiclfhiadc98fgdci0mbkkdnadTmbinaiaeRbb86bbaicefhiaecefheadcufgdmbkkabk;aeedudndnabciGTmbabhixekaecFeGc:b:c:ew2hldndnadcz9pmbabhixekabhiinaialBdbaicxfalBdbaicwfalBdbaiclfalBdbaiczfhiadc9Wfgdcs0mbkkadcl6mbinaialBdbaiclfhiadc98fgdci0mbkkdnadTmbinaiae86bbaicefhiadcufgdmbkkabkkkebcjwklz9Kbb",t="b9H79TebbbeKl9Gbb9Gvuuuuueu9Giuuub9Geueuikqbbebeedddilve9Weeeviebeoweuec:q;Aekr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbdY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVblE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtboK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbrL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbwl79IV9RbDq;t9tqlbzik9:evu8Jjjjjbcz9Rhbcbheincbhdcbhiinabcwfadfaicjuaead4ceGglE86bbaialfhiadcefgdcw9hmbkaec:q:yjjbfai86bbaecitc:q1jjbfab8Piw83ibaecefgecjd9hmbkk;h8JlHud97euo978Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Rad;8qbbcj;abad9UhoaicefhldnadTmbaoc;WFbGgocjdaocjd6EhwcbhDinaDae9pmeawaeaD9RaDawfae6Egqcsfgoc9WGgkci2hxakcethmaocl4cifcd4hPabaDad2fhscbhzdnincehHalhOcbhAdninaraO9RaP6miavcj;cbfaAak2fhCaOaPfhlcbhidnakc;ab6mbaral9Rc;Gb6mbcbhoinaCaofhidndndndndnaOaoco4fRbbgXciGPlbedibkaipxbbbbbbbbbbbbbbbbpklbxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklbalczfhlkdndndndndnaXcd4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklzxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklzalczfhlkdndndndndnaXcl4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklaxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklaalczfhlkdndndndndnaXco4Plbedibkaipxbbbbbbbbbbbbbbbbpkl8WxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WalclfaYpQbfaXc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WalcwfaYpQbfaXc:q:yjjbfRbbfhlxekaialpbbbpkl8Walczfhlkaoc;abfhiaocjefak0meaihoaral9Rc;Fb0mbkkdndnaiak9pmbaici4hoinaral9RcK6mdaCaifhXdndndndndnaOaico4fRbbaocoG4ciGPlbedibkaXpxbbbbbbbbbbbbbbbbpklbxikaXalpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaXalpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaXalpbbbpklbalczfhlkaocdfhoaiczfgiak6mbkkalTmbaAci6hHalhOaAcefgohAaoclSmdxekkcbhlaHceGmdkdnakTmbavcjdfazfhiavazfpbdbhYcbhXinaiavcj;cbfaXfgopblbgLcep9TaLpxeeeeeeeeeeeeeeeegQp9op9Hp9rgLaoakfpblbg8Acep9Ta8AaQp9op9Hp9rg8ApmbzeHdOiAlCvXoQrLgEaoamfpblbg3cep9Ta3aQp9op9Hp9rg3aoaxfpblbg5cep9Ta5aQp9op9Hp9rg5pmbzeHdOiAlCvXoQrLg8EpmbezHdiOAlvCXorQLgQaQpmbedibedibedibediaYp9UgYp9AdbbaiadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaEa8EpmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaLa8ApmwKDYq8AkEx3m5P8Es8FgLa3a5pmwKDYq8AkEx3m5P8Es8Fg8ApmbezHdiOAlvCXorQLgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaLa8ApmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfhiaXczfgXak6mbkkazclfgzad6mbkasavcjdfaqad2;8qbbavavcjdfaqcufad2fad;8qbbaqaDfhDc9:hoalmexikkc9:hoxekcbc99aral9Radcaadca0ESEhokavcj;kbf8Kjjjjbaokwbz:bjjjbk;uzeHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecje;8kbavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhodnaeTmbcmcsaDceSEhkcbhxcbhmcbhDcbhicbhlindnaoaq9nmbc9:hoxikdndnawRbbgrc;Ve0mbavc;abfalarcl4cu7fcsGcitfgPydlhsaPydbhzdnarcsGgPak9pmbavaiarcu7fcsGcdtfydbaxaPEhraPThPdndnadcd9hmbabaDcetfgHaz87ebaHcdfas87ebaHclfar87ebxekabaDcdtfgHazBdbaHclfasBdbaHcwfarBdbkaxaPfhxavc;abfalcitfgHarBdbaHasBdlavaicdtfarBdbavc;abfalcefcsGglcitfgHazBdbaHarBdlaiaPfhialcefhlxdkdndnaPcsSmbamaPfaPc987fcefhmxekaocefhrao8SbbgPcFeGhHdndnaPcu9mmbarhoxekaocvfhoaHcFbGhHcrhPdninar8SbbgOcFbGaPtaHVhHaOcu9kmearcefhraPcrfgPc8J9hmbxdkkarcefhokaHce4cbaHceG9R7amfhmkdndnadcd9hmbabaDcetfgraz87ebarcdfas87ebarclfam87ebxekabaDcdtfgrazBdbarclfasBdbarcwfamBdbkavc;abfalcitfgramBdbarasBdlavaicdtfamBdbavc;abfalcefcsGglcitfgrazBdbaramBdlaicefhialcefhlxekdnarcpe0mbaxcefgOavaiaqarcsGfRbbgPcl49RcsGcdtfydbaPcz6gHEhravaiaP9RcsGcdtfydbaOaHfgsaPcsGgOEhPaOThOdndnadcd9hmbabaDcetfgzax87ebazcdfar87ebazclfaP87ebxekabaDcdtfgzaxBdbazclfarBdbazcwfaPBdbkavaicdtfaxBdbavc;abfalcitfgzarBdbazaxBdlavaicefgicsGcdtfarBdbavc;abfalcefcsGcitfgzaPBdbazarBdlavaiaHfcsGgicdtfaPBdbavc;abfalcdfcsGglcitfgraxBdbaraPBdlalcefhlaiaOfhiasaOfhxxekaxcbaoRbbgzEgAarc;:eSgrfhsazcsGhCazcl4hXdndnazcs0mbascefhOxekashOavaiaX9RcsGcdtfydbhskdndnaCmbaOcefhxxekaOhxavaiaz9RcsGcdtfydbhOkdndnarTmbaocefhrxekaocdfhrao8SbegHcFeGhPdnaHcu9kmbaocofhAaPcFbGhPcrhodninar8SbbgHcFbGaotaPVhPaHcu9kmearcefhraocrfgoc8J9hmbkaAhrxekarcefhrkaPce4cbaPceG9R7amfgmhAkdndnaXcsSmbarhPxekarcefhPar8SbbgocFeGhHdnaocu9kmbarcvfhsaHcFbGhHcrhodninaP8SbbgrcFbGaotaHVhHarcu9kmeaPcefhPaocrfgoc8J9hmbkashPxekaPcefhPkaHce4cbaHceG9R7amfgmhskdndnaCcsSmbaPhoxekaPcefhoaP8SbbgrcFeGhHdnarcu9kmbaPcvfhOaHcFbGhHcrhrdninao8SbbgPcFbGartaHVhHaPcu9kmeaocefhoarcrfgrc8J9hmbkaOhoxekaocefhokaHce4cbaHceG9R7amfgmhOkdndnadcd9hmbabaDcetfgraA87ebarcdfas87ebarclfaO87ebxekabaDcdtfgraABdbarclfasBdbarcwfaOBdbkavc;abfalcitfgrasBdbaraABdlavaicdtfaABdbavc;abfalcefcsGcitfgraOBdbarasBdlavaicefgicsGcdtfasBdbavc;abfalcdfcsGcitfgraABdbaraOBdlavaiazcz6aXcsSVfgicsGcdtfaOBdbaiaCTaCcsSVfhialcifhlkawcefhwalcsGhlaicsGhiaDcifgDae6mbkkcbc99aoaqSEhokavc;aef8Kjjjjbaok:llevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:EPliuo97eue978Jjjjjbca9Rhidndnadcl9hmbdnaec98GglTmbcbhvabhdinadadpbbbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDpxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpkbbadczfhdavclfgval6mbkkalae9pmeaiaeciGgvcdtgdVcbczad9R;8kbaiabalcdtfglad;8qbbdnavTmbaiaipblbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDpxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpklbkalaiad;8qbbskdnaec98GgxTmbcbhvabhdinadczfglalpbbbgopxbbbbbbFFbbbbbbFFgkp9oadpbbbgDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eaDaopmbediwDqkzHOAKY8AEgoczp:Sep;6egrp;Geaoczp:Reczp:Sep;6egwp;Gep;Kep;Legopxb;:FSb;:FSb;:FSb;:FSawaopxbbbbbbbbbbbbbbbbp:2egqawpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegwawp;Meaoaop;Mearaqaramp9op9rp;Kegoaop;Mep;Kep;Kep;Jep;Negrp;Mepxbbn0bbn0bbn0bbn0gqp;Keczp:Reawarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9op9qgwaoarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogopmwDKYqk8AExm35Ps8E8Fp9qpkbbadaDakp9oawaopmbezHdiOAlvCXorQLp9qpkbbadcafhdavclfgvax6mbkkaxae9pmbaiaeciGgvcitgdfcbcaad9R;8kbaiabaxcitfglad;8qbbdnavTmbaiaipblzgopxbbbbbbFFbbbbbbFFgkp9oaipblbgDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eaDaopmbediwDqkzHOAKY8AEgoczp:Sep;6egrp;Geaoczp:Reczp:Sep;6egwp;Gep;Kep;Legopxb;:FSb;:FSb;:FSb;:FSawaopxbbbbbbbbbbbbbbbbp:2egqawpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegwawp;Meaoaop;Mearaqaramp9op9rp;Kegoaop;Mep;Kep;Kep;Jep;Negrp;Mepxbbn0bbn0bbn0bbn0gqp;Keczp:Reawarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9op9qgwaoarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogopmwDKYqk8AExm35Ps8E8Fp9qpklzaiaDakp9oawaopmbezHdiOAlvCXorQLp9qpklbkalaiad;8qbbkk;4wllue97euv978Jjjjjbc8W9Rhidnaec98GglTmbcbhvabhoinaiaopbbbgraoczfgwpbbbgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklbaopxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaqakp;Mearp;Keczp:ReaDakp;Mearp;Keamp9op9qgkpmbezHdiOAlvCXorQLgrp5baipblbpEb:T:j83ibaocwfarp5eaipblbpEe:T:j83ibawaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblbpEd:T:j83ibaocKfakp5eaipblbpEi:T:j83ibaocafhoavclfgval6mbkkdnalae9pmbaiaeciGgvcitgofcbcaao9R;8kbaiabalcitfgwao;8qbbdnavTmbaiaipblbgraipblzgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklaaipxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaqakp;Mearp;Keczp:ReaDakp;Mearp;Keamp9op9qgkpmbezHdiOAlvCXorQLgrp5baipblapEb:T:j83ibaiarp5eaipblapEe:T:j83iwaiaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblapEd:T:j83izaiakp5eaipblapEi:T:j83iKkawaiao;8qbbkk:Pddiue978Jjjjjbc;ab9Rhidnadcd4ae2glc98GgvTmbcbhdabheinaeaepbbbgocwp:Recwp:Sep;6eaocep:SepxbbjZbbjZbbjZbbjZp:UepxbbjFbbjFbbjFbbjFp9op;Mepkbbaeczfheadclfgdav6mbkkdnaval9pmbaialciGgdcdtgeVcbc;abae9R;8kbaiabavcdtfgvae;8qbbdnadTmbaiaipblbgocwp:Recwp:Sep;6eaocep:SepxbbjZbbjZbbjZbbjZp:UepxbbjFbbjFbbjFbbjFp9op;Mepklbkavaiae;8qbbkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaikkkebcjwklz9Tbb",e=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,3,2,0,0,5,3,1,0,1,12,1,0,10,22,2,12,0,65,0,65,0,65,0,252,10,0,0,11,7,0,65,0,253,15,26,11]),n=new Uint8Array([32,0,65,2,1,106,34,33,3,128,11,4,13,64,6,253,10,7,15,116,127,5,8,12,40,16,19,54,20,9,27,255,113,17,42,67,24,23,146,148,18,14,22,45,70,69,56,114,101,21,25,63,75,136,108,28,118,29,73,115]);if(typeof WebAssembly!="object")return{supported:!1};var i=WebAssembly.validate(e)?t:s,r,a=WebAssembly.instantiate(o(i),{}).then(function(p){r=p.instance,r.exports.__wasm_call_ctors()});function o(p){for(var v=new Uint8Array(p.length),_=0;_<p.length;++_){var x=p.charCodeAt(_);v[_]=x>96?x-97:x>64?x-39:x+4}for(var C=0,_=0;_<p.length;++_)v[C++]=v[_]<60?n[v[_]]:(v[_]-60)*64+v[++_];return v.buffer.slice(0,C)}function c(p,v,_,x,C,w){var R=r.exports.sbrk,A=_+3&-4,y=R(A*x),M=R(C.length),S=new Uint8Array(r.exports.memory.buffer);S.set(C,M);var D=p(y,_,x,M,C.length);if(D==0&&w&&w(y,A,x),v.set(S.subarray(y,y+_*x)),R(y-R(0)),D!=0)throw new Error("Malformed buffer data: "+D)}var l={NONE:"",OCTAHEDRAL:"meshopt_decodeFilterOct",QUATERNION:"meshopt_decodeFilterQuat",EXPONENTIAL:"meshopt_decodeFilterExp"},h={ATTRIBUTES:"meshopt_decodeVertexBuffer",TRIANGLES:"meshopt_decodeIndexBuffer",INDICES:"meshopt_decodeIndexSequence"},f=[],u=0;function d(p){var v={object:new Worker(p),pending:0,requests:{}};return v.object.onmessage=function(_){var x=_.data;v.pending-=x.count,v.requests[x.id][x.action](x.value),delete v.requests[x.id]},v}function g(p){for(var v="var instance; var ready = WebAssembly.instantiate(new Uint8Array(["+new Uint8Array(o(i))+"]), {}).then(function(result) { instance = result.instance; instance.exports.__wasm_call_ctors(); });self.onmessage = workerProcess;"+c.toString()+m.toString(),_=new Blob([v],{type:"text/javascript"}),x=URL.createObjectURL(_),C=0;C<p;++C)f[C]=d(x);URL.revokeObjectURL(x)}function b(p,v,_,x,C){for(var w=f[0],R=1;R<f.length;++R)f[R].pending<w.pending&&(w=f[R]);return new Promise(function(A,y){var M=new Uint8Array(_),S=u++;w.pending+=p,w.requests[S]={resolve:A,reject:y},w.object.postMessage({id:S,count:p,size:v,source:M,mode:x,filter:C},[M.buffer])})}function m(p){a.then(function(){var v=p.data;try{var _=new Uint8Array(v.count*v.size);c(r.exports[v.mode],_,v.count,v.size,v.source,r.exports[v.filter]),self.postMessage({id:v.id,count:v.count,action:"resolve",value:_},[_.buffer])}catch(x){self.postMessage({id:v.id,count:v.count,action:"reject",value:x})}})}return{ready:a,supported:!0,useWorkers:function(p){g(p)},decodeVertexBuffer:function(p,v,_,x,C){c(r.exports.meshopt_decodeVertexBuffer,p,v,_,x,r.exports[l[C]])},decodeIndexBuffer:function(p,v,_,x){c(r.exports.meshopt_decodeIndexBuffer,p,v,_,x)},decodeIndexSequence:function(p,v,_,x){c(r.exports.meshopt_decodeIndexSequence,p,v,_,x)},decodeGltfBuffer:function(p,v,_,x,C,w){c(r.exports[h[C]],p,v,_,x,r.exports[l[w]])},decodeGltfBufferAsync:function(p,v,_,x,C){return f.length>0?b(p,v,_,h[x],l[C]):a.then(function(){var w=new Uint8Array(p*v);return c(r.exports[h[x]],w,p,v,_,r.exports[l[C]]),w})}}})();function l_(s){return new Worker(""+new URL("buildings.worker-7-lusyc3.js",import.meta.url).href,{name:s?.name})}const Wa={uNight:{value:0},uWet:{value:0}};function h_(){const s=new Ut({vertexColors:!0});return s.onBeforeCompile=t=>{t.uniforms.uNight=Wa.uNight,t.uniforms.uWet=Wa.uWet,t.vertexShader=t.vertexShader.replace("#include <common>",`#include <common>
attribute vec4 fac;
varying vec4 vFac;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vFac = fac;`),t.fragmentShader=t.fragmentShader.replace("#include <common>",`#include <common>
varying vec4 vFac; uniform float uNight; uniform float uWet;
float h21(vec2 p){ p = fract(p * vec2(0.1031, 0.1030)); p += dot(p, p.yx + 33.33); return fract((p.x + p.y) * p.x); }`).replace("#include <color_fragment>",`#include <color_fragment>
  float kind = floor(vFac.z + 0.5); vec3 glow = vec3(0.0);
  float sd = floor(vFac.w * 997.0 + 0.5); // tohum: ara değer gürültüsünü yok et
  if (kind == 1.0) {
    float u = vFac.x, v = vFac.y, sp = 2.9 + sd / 997.0 * 0.8, fh = 3.2;
    vec2 cell = vec2(floor(u / sp), floor(v / fh));
    float fu = fract(u / sp), fv = fract(v / fh);
    bool ground = v < 3.6;
    float bs = fract(sd * 0.6180339);           // bina tarzı
    bool shutters = bs < 0.3;                   // panjurlu eski apartman
    vec3 base = diffuseColor.rgb;
    if (ground) {
      // taş kaide + dükkân camekânı
      diffuseColor.rgb = mix(base, vec3(0.62, 0.58, 0.52), 0.35) * 0.9;
      bool shop = fu > 0.1 && fu < 0.9 && v > 0.35 && v < 2.9;
      bool frame = fu > 0.07 && fu < 0.93 && v > 0.25 && v < 3.0 && !shop;
      if (frame) diffuseColor.rgb = vec3(0.86, 0.84, 0.8);
      if (shop) {
        float r = h21(cell + sd * 0.137);
        vec3 glass = mix(vec3(0.1, 0.12, 0.14), vec3(0.24, 0.3, 0.34), smoothstep(0.4, 2.8, v));
        bool door = fu > 0.42 && fu < 0.58 && r > 0.6;
        diffuseColor.rgb = door ? vec3(0.28, 0.2, 0.14) : glass;
        if (!door && fract(u * 1.3) < 0.04) diffuseColor.rgb = vec3(0.75);
        float lit = step(0.35, h21(cell * 1.7 + sd * 0.071 + 3.1));
        glow = vec3(1.0, 0.8, 0.5) * lit * uNight * 1.1;
      }
    } else {
      bool win = fu > 0.3 && fu < 0.7 && fv > 0.3 && fv < 0.82;
      bool frame = fu > 0.26 && fu < 0.74 && fv > 0.26 && fv < 0.86 && !win;
      bool shut = shutters && !win && fv > 0.3 && fv < 0.82 && ((fu > 0.17 && fu < 0.29) || (fu > 0.71 && fu < 0.83));
      if (frame) diffuseColor.rgb = mix(base, vec3(0.97, 0.95, 0.9), 0.75);
      if (shut) { vec3 sc = bs < 0.1 ? vec3(0.25, 0.4, 0.3) : bs < 0.2 ? vec3(0.5, 0.32, 0.22) : vec3(0.35, 0.4, 0.45); diffuseColor.rgb = sc * (0.85 + 0.15 * step(0.5, fract(v * 6.0))); }
      if (win) {
        float r = h21(cell + sd * 0.137);
        float wy = (fv - 0.3) / 0.52;
        vec3 glass = mix(vec3(0.14, 0.18, 0.22), vec3(0.42, 0.52, 0.6), wy * 0.8 + r * 0.15);
        if (r > 0.8) glass = mix(glass, vec3(0.85, 0.82, 0.74), 0.55); // perde
        diffuseColor.rgb = glass;
        if (abs(fu - 0.5) < 0.012) diffuseColor.rgb = vec3(0.92);    // orta kayıt
        float lit = step(0.52, h21(cell * 1.7 + sd * 0.071 + 3.1));
        glow = mix(vec3(1.0, 0.72, 0.4), vec3(0.85, 0.9, 1.0), step(0.8, r)) * lit * uNight * 0.85;
      }
      if (fv < 0.035) diffuseColor.rgb *= 0.94; // kat çizgisi
    }
    diffuseColor.rgb *= 0.8 + 0.2 * smoothstep(0.0, 2.2, v); // dip gölgesi
  } else if (kind == 2.0) {
    diffuseColor.rgb *= 0.8 + 0.2 * smoothstep(0.0, 2.2, vFac.y);
  } else if (kind == 0.0) {
    float row = fract(vFac.y / 0.42);
    diffuseColor.rgb *= 0.9 + 0.12 * smoothstep(0.0, 0.25, row) - 0.05 * step(0.85, row);
  }
  diffuseColor.rgb *= 1.0 - uWet * 0.22;`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
  totalEmissiveRadiance += glow;`)},s}const Ua=new P(-.78,.2,.59).normalize();class Ll{constructor(t,e,n,i,r){this.meta=t,this.ground=e,this.buildings=n,this.trees=i,this.roads=r,this.H=(a,o)=>{const c=this.meta.grid,l=Math.min(Math.max((a-c.x0)/c.step,0),c.nx-1.001),h=Math.min(Math.max((o-c.z0)/c.step,0),c.nz-1.001),f=Math.floor(l),u=Math.floor(h),d=l-f,g=h-u,b=(m,p)=>this.ground.getInt16(((u+p)*c.nx+f+m)*2,!0)/100;return(b(0,0)*(1-d)+b(1,0)*d)*(1-g)+(b(0,1)*(1-d)+b(1,1)*d)*g}}static async load(t,e){let n=0;const i=h=>h.then(f=>(e(++n/5),f)),[r,a,o,c,l]=await Promise.all([i(fetch(t+"data/meta.json").then(h=>h.json())),i(fetch(t+"data/ground.bin").then(h=>h.arrayBuffer())),i(fetch(t+"data/buildings.bin").then(h=>h.arrayBuffer())),i(fetch(t+"data/trees.bin").then(h=>h.arrayBuffer())),i(fetch(t+"data/roads.json").then(h=>h.json()))]);return new Ll(r,new DataView(a),o,new DataView(c),l)}kind(t,e){const n=this.meta.grid,i=Math.round((t-n.x0)/n.step),r=Math.round((e-n.z0)/n.step);return i<0||r<0||i>=n.nx||r>=n.nz?1:this.ground.getUint8(n.nx*n.nz*2+r*n.nx+i)}}class f_{constructor(t,e,n,i){this.scene=t,this.data=e,this.track=n,this.mobile=i,this.fine={x0:-1100,z0:-800,step:5,nx:301,nz:341},this.hash=new Map,this.skyMats=[],this.landmarks=new Zt;const r=n.T;for(let a=0;a<r.n;a++){const o=`${Math.floor(r.x[a]/20)},${Math.floor(r.z[a]/20)}`;(this.hash.get(o)||this.hash.set(o,[]).get(o)).push(a)}this.hm=this.buildHeights()}nearest(t,e,n=!1){const i=this.track.T,r=Math.floor(t/20),a=Math.floor(e/20);let o=-1,c=1e18;for(let l=1;l<=2&&o<0;l++)for(let h=-l;h<=l;h++)for(let f=-l;f<=l;f++){const u=this.hash.get(`${r+h},${a+f}`);if(u)for(const d of u){if(n&&i.flags[d]&he)continue;const g=(t-i.x[d])**2+(e-i.z[d])**2;g<c&&(c=g,o=d)}}return{i:o,d:Math.sqrt(c)}}buildHeights(){const t=this.fine,e=new Float32Array(t.nx*t.nz),n=this.track.T,i=n.tower,r=this.data;for(let a=0;a<t.nz;a++)for(let o=0;o<t.nx;o++){const c=t.x0+o*t.step,l=t.z0+a*t.step;let h=r.H(c,l);if(r.kind(c,l)===1){e[a*t.nx+o]=-3;continue}const f=Math.hypot(c-i.x,l-i.z);if(f<72){const d=Sf((f-40)/32);h=i.y0*(1-d)+h*d}const u=this.nearest(c,l,!0);if(u.i>=0){const d=n.w[u.i]/2+2.6,g=Sf((u.d-d)/20);h=(n.y[u.i]-.3)*(1-g)+h*g}e[a*t.nx+o]=Math.max(.6,h)}return e}hAt(t,e){const n=this.fine,i=Math.min(Math.max((t-n.x0)/n.step,0),n.nx-1.001),r=Math.min(Math.max((e-n.z0)/n.step,0),n.nz-1.001),a=Math.floor(i),o=Math.floor(r),c=i-a,l=r-o,h=this.hm,f=n.nx;return(h[o*f+a]*(1-c)+h[o*f+a+1]*c)*(1-l)+(h[(o+1)*f+a]*(1-c)+h[(o+1)*f+a+1]*c)*l}async build(t){const e=()=>new Promise(a=>setTimeout(a,0));this.buildSky(),this.buildSea(),this.buildTerrain(),t("Sokaklar çiziliyor…",.12),await e(),this.buildRoads(),this.buildTrees(),t("Binalar yükseliyor…",.22),await e();let n=0,i=0;const r=()=>t(i<1?"Binalar yükseliyor… ":"Galata Kulesi yerleşiyor…",.22+i*.68+n*.1);await Promise.all([this.buildBuildings(a=>{i=a,r()}),this.loadLandmarks(a=>{n=a,r()})])}buildSky(){const t=new Me(1800,40,20),e=new rn({side:Je,depthWrite:!1,fog:!1,uniforms:{sun:{value:Ua},rain:{value:0}},vertexShader:"varying vec3 vP; void main(){ vP = normalize(position); vec4 p = projectionMatrix * modelViewMatrix * vec4(position,1.0); gl_Position = p.xyww; }",fragmentShader:`uniform vec3 sun; uniform float rain; varying vec3 vP;
        void main(){
          float h = vP.y; float s = max(0.0, dot(normalize(vP), sun));
          vec3 top = vec3(0.20, 0.27, 0.55), mid = vec3(0.56, 0.52, 0.78), low = vec3(0.98, 0.66, 0.55), hor = vec3(1.0, 0.80, 0.55);
          vec3 c = mix(low, mid, smoothstep(0.02, 0.22, h)); c = mix(c, top, smoothstep(0.22, 0.75, h));
          c = mix(c, hor, smoothstep(0.08, -0.02, h) * 0.8);
          c += vec3(1.0, 0.55, 0.25) * pow(s, 6.0) * 0.55 + vec3(1.0, 0.85, 0.6) * pow(s, 90.0) * 1.2;
          if (h < -0.02) c = mix(hor, vec3(0.55, 0.5, 0.7), smoothstep(-0.02, -0.2, h));
          c = mix(c, vec3(0.47, 0.5, 0.6) * (0.85 + 0.25 * h), rain * 0.88);
          gl_FragColor = vec4(c, 1.0);
        }`});this.skyMats.push(e),this.sky=new J(t,e),this.sky.renderOrder=-10,this.sky.frustumCulled=!1,this.scene.add(this.sky);const n=[];let i=11;const r=()=>(i=i*16807%2147483647)/2147483647;for(let c=0;c<26;c++){const l=r()*Math.PI*2,h=900+r()*500,f=160+r()*260,u=Math.cos(l)*h,d=Math.sin(l)*h,g=40+r()*50;for(let b=0;b<6;b++){const m=new Me(g*(.6+r()*.6),9,6);m.scale(1.7,.55,1.1),m.translate(u+(b-3)*g*.8,f+r()*g*.3,d+(r()-.5)*g),n.push(m)}}const a=new rn({fog:!1,uniforms:{sun:{value:Ua},rain:{value:0}},vertexShader:"varying vec3 vN; varying vec3 vW; void main(){ vN = normalize(mat3(modelMatrix) * normal); vW = (modelMatrix * vec4(position,1.0)).xyz; gl_Position = projectionMatrix * viewMatrix * vec4(vW,1.0); }",fragmentShader:"uniform vec3 sun; uniform float rain; varying vec3 vN; varying vec3 vW; void main(){ float l = dot(vN, sun) * 0.5 + 0.5; float t = step(0.55, l) * 0.5 + step(0.8, l) * 0.5; vec3 c = mix(vec3(0.62, 0.55, 0.80), vec3(1.0, 0.72, 0.62), t); c = mix(c, vec3(1.0, 0.9, 0.75), step(0.93, l) * 0.6); c = mix(c, mix(vec3(0.36, 0.38, 0.47), vec3(0.56, 0.58, 0.66), t), rain); gl_FragColor = vec4(c, 1.0); }"});this.skyMats.push(a);const o=new J(sn(n),a);o.renderOrder=-9,this.scene.add(o)}buildSea(){const t=new qe(6e3,6e3,1,1);t.rotateX(-Math.PI/2);const e=new rn({fog:!0,uniforms:{t:{value:0},sun:{value:Ua},fogColor:{value:new ct},fogNear:{value:1},fogFar:{value:1e3}},vertexShader:`#include <fog_pars_vertex>
varying vec3 vW; void main(){ vW = (modelMatrix * vec4(position,1.0)).xyz; vec4 mvPosition = viewMatrix * vec4(vW,1.0); gl_Position = projectionMatrix * mvPosition;
#include <fog_vertex>
}`,fragmentShader:`#include <fog_pars_fragment>
        uniform float t; uniform vec3 sun; varying vec3 vW;
        void main(){
          vec3 V = normalize(cameraPosition - vW); vec3 R = reflect(-V, vec3(0.0,1.0,0.0));
          float w = sin(vW.x*0.09 + t*0.8)*sin(vW.z*0.12 - t*0.6) + 0.5*sin(vW.x*0.27 - vW.z*0.2 + t*1.6);
          vec3 c = mix(vec3(0.33, 0.48, 0.80), vec3(0.45, 0.62, 0.90), smoothstep(-0.6, 1.0, w));
          float glint = pow(max(0.0, dot(R, sun)), 40.0);
          c = mix(c, vec3(1.0, 0.72, 0.45), clamp(glint * 1.4, 0.0, 0.85));
          c = mix(c, vec3(1.0, 0.92, 0.78), step(1.25, w + glint * 0.8) * 0.8);
          gl_FragColor = vec4(c, 1.0);
        #include <fog_fragment>
        }`});this.sea=new J(t,e),this.sea.position.y=0,this.scene.add(this.sea)}buildTerrain(){const t=this.fine,e=this.data,n=new qe((t.nx-1)*t.step,(t.nz-1)*t.step,t.nx-1,t.nz-1);n.rotateX(-Math.PI/2),n.translate(t.x0+(t.nx-1)*t.step/2,0,t.z0+(t.nz-1)*t.step/2);const i=n.attributes.position,r=new Float32Array(i.count*3),a=new ct,o=new ct(14210788),c=new ct(11131048),l=new ct(15329006),h=new ct(15260872);for(let u=0;u<i.count;u++){const d=i.getX(u),g=i.getZ(u),b=Math.round((d-t.x0)/t.step),m=Math.round((g-t.z0)/t.step),p=this.hm[m*t.nx+b];i.setY(u,p);const v=e.kind(d,g);a.copy(v===2?c:v===3?l:o),p<2.2&&v!==1&&a.lerp(h,.35),r.set([a.r,a.g,a.b],u*3)}n.setAttribute("color",new be(r,3)),n.computeVertexNormals();const f=new J(n,new Ut({vertexColors:!0}));f.receiveShadow=!0,this.scene.add(f)}buildRoads(){const t=[],e=[],n=this.track.T;for(const[o,c,l]of this.data.roads){const h=Math.max(3,c)/2;for(let f=0;f+3<l.length;f+=2){const u=l[f],d=l[f+1],g=l[f+2],b=l[f+3],m=Math.hypot(g-u,b-d);if(m<.5)continue;const p=Math.ceil(m/4),v=(g-u)/m,_=(b-d)/m,x=-_*h,C=v*h;for(let w=0;w<p;w++){const R=u+v*(m*w/p),A=d+_*(m*w/p),y=u+v*(m*(w+1)/p),M=d+_*(m*(w+1)/p),S=(R+y)/2,D=(A+M)/2,U=this.nearest(S,D);if(U.i>=0&&U.d<n.w[U.i]/2+h+1.5&&!(n.flags[U.i]&he)||this.data.kind(S,D)===1)continue;const N=t.length/3,z=(F,k)=>this.hAt(F,k)+.07;t.push(R-x,z(R-x,A-C),A-C,R+x,z(R+x,A+C),A+C,y+x,z(y+x,M+C),M+C,y-x,z(y-x,M-C),M-C),e.push(N,N+1,N+2,N,N+2,N+3)}}}const i=new xe;i.setAttribute("position",new te(t,3)),i.setIndex(e),i.computeVertexNormals();const r=i.attributes.normal;for(let o=0;o<r.count;o++)r.getY(o)<0&&r.setXYZ(o,-r.getX(o),-r.getY(o),-r.getZ(o));const a=new J(i,new Ut({color:9080750,side:ge,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1}));a.receiveShadow=!0,this.scene.add(a)}buildTrees(){const t=this.data,e=[];for(let b=0;b+10<=t.trees.byteLength;b+=10)e.push([t.trees.getFloat32(b,!0),t.trees.getFloat32(b+4,!0),t.trees.getUint8(b+8)/100]);const n=this.track.T;let i=5;const r=()=>(i=i*16807%2147483647)/2147483647;for(let b=0;b<n.n;b+=13){if(n.flags[b]&(he|2))continue;const m=r()<.5?-1:1,p=m*(n.w[b]/2+5+r()*3);e.push([n.x[b]-n.tz[b]*p,n.z[b]+n.tx[b]*p,1])}const a=e.filter(([b,m])=>{const p=this.nearest(b,m);return!(p.i>=0&&p.d<n.w[p.i]/2+3.2)&&this.data.kind(b,m)!==1}),o=sn([0,1,2,3].map(b=>{const m=new ao(1,0),p=b*2.1;return m.scale(b===3?1.1:.85,b===3?.95:.8,b===3?1.1:.85),m.translate(b===3?0:Math.cos(p)*.8,b===3?.9:.35,b===3?0:Math.sin(p)*.8),m})),c=new re(.16,.26,3.2,6);c.translate(0,1.6,0);const l=new Le(o,new Ut({color:16777215,flatShading:!0}),a.length),h=new Le(c,new Ut({color:9071194}),a.length),f=new kt,u=new We,d=new ct,g=[6273139,7127674,5220458,8047491];a.forEach(([b,m,p],v)=>{const _=(1.6+r()*.9)*Math.max(.8,Math.min(1.4,p||1)),x=this.hAt(b,m);u.setFromAxisAngle(new P(0,1,0),r()*6),f.compose(new P(b,x+2.6+_*.6,m),u,new P(_,_,_)),l.setMatrixAt(v,f),f.compose(new P(b,x,m),u,new P(1,.8+_*.15,1)),h.setMatrixAt(v,f),l.setColorAt(v,d.setHex(g[v%4]))}),l.castShadow=!0,h.castShadow=!0,l.receiveShadow=!0,this.scene.add(l,h)}buildBuildings(t){const e=this.data,n=this.track.T,i=new Float32Array(n.n*3),r=n.tower;let a=0;for(let d=0;d<n.n;d+=2)i[a*3]=n.x[d],i[a*3+1]=n.z[d],i[a*3+2]=n.w[d]/2+3.5+(n.flags[d]&he?2:0),a++;for(let d=0;d<24;d++){const g=d/24*Math.PI*2;for(const b of[8,22,34]){if(a*3+2>=i.length)break;i[a*3]=r.x+Math.cos(g)*b,i[a*3+1]=r.z+Math.sin(g)*b,i[a*3+2]=14,a++}}const o=this.fine,c=this.worker=new l_;c.postMessage({type:"init",buf:e.buildings,index:e.meta.chunks,palette:e.meta.palette,keep:{gx0:o.x0,gz0:o.z0,step:o.step,nx:o.nx,nz:o.nz,h:this.hm,trk:i.subarray(0,a*3)}});const l=h_();Wa.uNight.value=.42;const h=e.meta.chunks.map((d,g)=>({ci:g,cx:(d[0]+.5)*e.meta.chunk,cz:(d[1]+.5)*e.meta.chunk})),f=(d,g)=>{let b=1e9;for(let m=0;m<n.n;m+=20)b=Math.min(b,Math.hypot(d-n.x[m],g-n.z[m]));return b<(this.mobile?160:230)?b<90&&!this.mobile?0:1:2};let u=h.length;return new Promise(d=>{c.onmessage=g=>{const b=g.data;if(b.pos.length){const m=new xe;m.setAttribute("position",new be(b.pos,3)),m.setAttribute("normal",new be(b.nor,3)),m.setAttribute("color",new be(b.col,3)),m.setAttribute("fac",new be(b.fac,4)),m.computeBoundingSphere();const p=new J(m,l);p.matrixAutoUpdate=!1,p.castShadow=b.lod<2&&!this.mobile,p.receiveShadow=!0,this.scene.add(p)}t(1-(u-1)/h.length),--u===0&&(c.terminate(),d())};for(const g of h)c.postMessage({type:"build",id:g.ci,chunk:g.ci,lod:f(g.cx,g.cz)})})}async loadLandmarks(t){const e=new Av().setMeshoptDecoder(c_),n=new Ut({vertexColors:!0,side:ge});for(const i of this.data.meta.landmarks){try{const r=await e.loadAsync(`./models/${i.model}`),a=r.scene.getObjectByName("LOD0")||r.scene;a.traverse(c=>{const l=c;if(l.isMesh&&(l.material=n,l.castShadow=!0,l.receiveShadow=!0,!l.geometry.getAttribute("color"))){const h=new Float32Array(l.geometry.attributes.position.count*3).fill(.85);l.geometry.setAttribute("color",new be(h,3))}});const o=i.id==="galata"?this.track.T.tower.y0-.2:this.hAt(i.x,i.z)-.3;a.position.set(i.x,o,i.z),a.rotation.y=i.ry,a.scale.setScalar(i.s),this.landmarks.add(a)}catch(r){console.warn("model",i.id,r)}t((this.data.meta.landmarks.indexOf(i)+1)/this.data.meta.landmarks.length)}this.scene.add(this.landmarks)}update(t){this.sea.material.uniforms.t.value=t}}function Sf(s){const t=Math.min(1,Math.max(0,s));return t*t*(3-2*t)}const Hs=[{id:"marti",name:"Martı",color:9357807,accent:15906891,blurb:"Simit kapmada usta",stats:[3,4,4]},{id:"kedi",name:"Sokak Kedisi",color:16029582,accent:15967834,blurb:"Dar sokakların kralı",stats:[3,3,5]},{id:"simitci",name:"Simitçi",color:16242548,accent:14242639,blurb:"Tablası hiç düşmez",stats:[4,4,3]},{id:"kaptan",name:"Vapur Kaptanı",color:8824540,accent:3099502,blurb:"Boğaz’ın eski kurdu",stats:[5,3,3]},{id:"balikci",name:"Balıkçı",color:12956648,accent:16041008,blurb:"Oltası hep hazır",stats:[4,3,4]},{id:"tekir",name:"Tekir",color:10410422,accent:9407110,blurb:"Sessiz ve hızlı",stats:[2,5,4]}];let $o=null;function u_(){if($o)return $o;const s=new Uint8Array([90,170,255]),t=new _l(s,3,1,Qa);return t.minFilter=t.magFilter=Ze,t.needsUpdate=!0,$o=t}const wf=new Map;function Ot(s){let t=wf.get(s);return t||(t=new Ru({color:s,gradientMap:u_()}),wf.set(s,t)),t}function Rt(s,t,e,n=0,i=0,r=0,a=!0){const o=new J(t,Ot(e));return o.position.set(n,i,r),o.castShadow=a,s.add(o),o}const Ce=(s,t=16,e=12)=>new Me(s,t,e),hn=(s,t,e)=>new Te(s,t,e),nn=(s,t,e,n=14)=>new re(s,t,e,n);function Il(s){const t=new Zt,e=new Zt;t.add(e);const n=s.color,i=4867670,r=16513008;Rt(e,hn(2.1,.32,1.25),n,0,.42,0);const a=Rt(e,hn(.8,.26,1),n,1.15,.4,0);a.rotation.z=-.12,Rt(e,hn(.25,.18,1.55),r,1.5,.34,0);for(const u of[-1,1])Rt(e,hn(1.1,.34,.28),n,-.05,.5,u*.72);Rt(e,hn(.62,.5,1),i,-.85,.7,0);for(const u of[-1,1]){const d=Rt(e,nn(.09,.11,.42,10),12170431,-1.2,.78,u*.28);d.rotation.z=Math.PI/2}Rt(e,hn(.2,.08,1.4),s.accent,-1.15,1.08,0);for(const u of[-1,1])Rt(e,hn(.12,.3,.08),i,-1.1,.93,u*.5);const o=Rt(e,hn(.5,.5,.75),s.accent,-.38,.75,0);o.rotation.z=.18;const c=Rt(e,new _n(.2,.045,6,16),i,.42,.95,0);c.rotation.y=Math.PI/2,c.rotation.x=0,c.rotation.z=-.5;const l=[],h=[];for(const[u,d,g]of[[.78,.74,.3],[.78,-.74,.3],[-.72,.78,.36],[-.72,-.78,.36]]){const b=new Zt;b.position.set(u,g,d),t.add(b);const m=new Zt;b.add(m);const p=Rt(m,nn(g,g,g*.9,14),4012613);p.rotation.x=Math.PI/2;const v=Rt(m,nn(g*.5,g*.5,g*.92,10),r,0,0,0,!1);v.rotation.x=Math.PI/2,l.push(m),u>0&&h.push(b)}const f=new Zt;return f.position.set(-.3,.9,0),e.add(f),d_[s.id](f,s),{root:t,body:e,wheels:l,front:h,driver:f,exhaust:[new P(-1.45,.78,.28),new P(-1.45,.78,-.28)]}}const Na=15978416,dr=(s,t,e,n,i=.055)=>{for(const r of[-1,1])Rt(s,Ce(i*1.7,10,8),16777215,t,e,r*n,!1),Rt(s,Ce(i,8,6),2828339,t+i*.9,e,r*n,!1)},Ma=(s,t,e=.36)=>{Rt(s,Ce(e,14,10),t,0,.15,0).scale.set(.9,1.15,1)},Qo=(s,t)=>{for(const e of[-1,1]){const n=Rt(s,nn(.08,.08,.55,8),t,.3,.2,e*.3);n.rotation.z=-1.1,n.rotation.x=e*.25,Rt(s,Ce(.09,8,6),t===16777215?13226200:Na,.55,.06,e*.24,!1)}},d_={marti(s){Ma(s,16777215);for(const i of[-1,1]){const r=Rt(s,hn(.55,.08,.32),13226200,.15,.25,i*.36);r.rotation.z=-.5,r.rotation.x=i*.3}const t=new Zt;t.position.set(.08,.72,0),s.add(t),Rt(t,Ce(.3),16777215);const e=Rt(t,new Ve(.1,.36,10),15906891,.4,-.04,0);e.rotation.z=-Math.PI/2,Rt(t,Ce(.05,6,6),15029067,.5,-.09,0,!1),dr(t,.2,.08,.15);const n=Rt(s,hn(.3,.06,.3),13226200,-.4,.1,0);n.rotation.z=.4},kedi(s){Tf(s,15967834,16777215,!1)},tekir(s){Tf(s,11117469,15328735,!0)},simitci(s){Ma(s,16513008),Rt(s,Ce(.37,14,10),14242639,0,.12,0).scale.set(.92,1.05,1.03),Qo(s,16513008);const e=new Zt;e.position.set(.06,.72,0),s.add(e),Rt(e,Ce(.28),Na),dr(e,.22,.06,.11,.04),Rt(e,Ce(.06,8,6),15313292,.29,-.02,0,!1);const n=Rt(e,hn(.08,.06,.26),5913130,.27,-.09,0,!1);n.rotation.x=0;const i=Rt(e,nn(.25,.28,.14,16),16513008,0,.24,0);i.rotation.z=.1,Rt(e,nn(.55,.55,.06,20),11565903,0,.36,0);const r=new _n(.13,.055,8,14);r.rotateX(Math.PI/2);for(let a=0;a<6;a++){const o=a/6*Math.PI*2;Rt(e,r,14259530,Math.cos(o)*.33,.42,Math.sin(o)*.33)}Rt(e,r,14259530,0,.48,0)},kaptan(s){Ma(s,3099502),Qo(s,3099502);for(let r=0;r<3;r++)Rt(s,Ce(.035,6,6),15909198,.33,.28-r*.12,.07,!1);const t=new Zt;t.position.set(.06,.72,0),s.add(t),Rt(t,Ce(.28),Na),dr(t,.22,.07,.11,.04),Rt(t,Ce(.24,12,8),16052716,.1,-.14,0).scale.set(.8,.8,1.05),Rt(t,Ce(.06,8,6),15313292,.29,0,0,!1),Rt(t,nn(.27,.27,.12,18),3099502,0,.22,0);const n=Rt(t,nn(.34,.28,.12,18),16513008,.02,.32,0);n.rotation.z=-.08,Rt(t,nn(.2,.2,.04,14),2828339,.22,.18,0).scale.set(1,1,1.3),Rt(t,Ce(.05,6,6),15909198,.33,.24,0,!1)},balikci(s){Ma(s,16041008),Qo(s,16041008);const t=new Zt;t.position.set(.06,.72,0),s.add(t),Rt(t,Ce(.28),Na),dr(t,.22,.06,.11,.04),Rt(t,Ce(.23,12,8),10132131,.1,-.15,0).scale.set(.8,.8,1.05),Rt(t,Ce(.06,8,6),15313292,.29,-.01,0,!1),Rt(t,nn(.27,.3,.2,16),16041008,0,.22,0);const n=Rt(t,nn(.46,.5,.04,18),16041008,-.05,.13,0);n.rotation.z=-.12;const i=new Zt;i.position.set(-.25,.1,-.35),i.rotation.z=.75,s.add(i),Rt(i,nn(.025,.035,2.2,6),9067067,0,1.1,0);const r=Rt(i,nn(.006,.006,.7,4),16777215,0,2.2,0,!1);r.rotation.z=-.75,r.position.set(.24,1.95,0),Rt(i,Ce(.12,10,8),15768171,.45,1.68,0).scale.set(1.6,.8,.6);const o=Rt(i,new Ve(.1,.16,4),15768171,.24,1.68,0);o.rotation.z=Math.PI/2}};function Tf(s,t,e,n){Rt(s,Ce(.34,14,10),t,0,.12,0).scale.set(.9,1.1,1),Rt(s,Ce(.22,10,8),e,.16,.12,0).scale.set(.6,1.2,1.2);for(const c of[-1,1]){const l=Rt(s,nn(.08,.08,.5,8),t,.28,.2,c*.28);l.rotation.z=-1.1,Rt(s,Ce(.09,8,6),e,.52,.07,c*.24,!1)}const r=new Zt;r.position.set(.05,.68,0),s.add(r),Rt(r,Ce(.32),t).scale.set(.95,.9,1.05),Rt(r,Ce(.15,10,8),e,.24,-.08,0).scale.set(.7,.7,1.2),Rt(r,Ce(.045,6,6),15896480,.33,-.02,0,!1),dr(r,.24,.07,.12,.05);for(const c of[-1,1]){const l=Rt(r,new Ve(.11,.24,4),t,0,.3,c*.17);l.rotation.x=c*-.3,Rt(r,new Ve(.055,.14,4),16169156,.04,.3,c*.17,!1).rotation.x=c*-.3;for(const h of[-1,1]){const f=Rt(r,hn(.005,.01,.28),5985632,.31,-.07+h*.03,c*.2,!1);f.rotation.x=c*h*.2}}if(n)for(let c=0;c<3;c++){const l=Rt(r,hn(.06,.03,.22),7235683,.12-c*.1,.29-c*.02,0,!1);l.rotation.z=.2-c*.15}const o=new Zt;o.position.set(-.32,.05,0),s.add(o);for(let c=0;c<6;c++){const l=c/5;Rt(o,Ce(.07,8,6),n&&c%2?7235683:t,-Math.sin(l*1.6)*.38,l*.7,0).scale.set(1,1.3,1)}}const p_=new P(0,1,0);class m_{constructor(t,e,n,i,r){this.scene=t,this.track=e,this.world=n,this.tex=i,this.mobile=r,this.crowdMats=[],this.uTime={value:0},this.uPlayer={value:new P(1e5,0,1e5)},this.bulbs=null,this.flags=[],this.lamps(),this.crowds(),this.strings(),this.chevrons(),this.boards(),this.flagsAndIcons()}side(t,e){const n=this.track.T,i=n.x[t]-n.tz[t]*e,r=n.z[t]+n.tx[t]*e;return new P(i,this.world.hAt(i,r),r)}lamps(){const t=this.track.T,e=[],n=[],i=new kt;for(let c=8;c<t.n;c+=26){if(t.flags[c]&Ii)continue;const l=c/26%2<1?1:-1,h=t.flags[c]&he,f=l*(t.w[c]/2+(h?1.4:2.6)),u=h?this.track.point(c*(this.track.L/t.n),f).setY(t.y[c]+t.bank[c]*f+1):this.side(c,f);i.compose(u.clone().add(new P(0,3,0)),new We,new P(1,6,1)),e.push(i.clone()),i.compose(u.clone().add(new P(0,6.2,0)),new We,new P(1,1,1)),n.push(i.clone())}const r=new Le(new re(.11,.15,1,6),new Ut({color:2897254}),e.length);e.forEach((c,l)=>r.setMatrixAt(l,c)),this.scene.add(r);const a=new Me(.42,10,8),o=new Le(a,new Ee({color:16770728}),n.length);n.forEach((c,l)=>o.setMatrixAt(l,c)),this.scene.add(o)}crowdMaterial(t){const e=new Ut({color:t});return e.onBeforeCompile=n=>{n.uniforms.uTime=this.uTime,n.uniforms.uPlayer=this.uPlayer,n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
uniform float uTime; uniform vec3 uPlayer;`).replace("#include <begin_vertex>",`#include <begin_vertex>
float ph = instanceMatrix[3].x * 0.71 + instanceMatrix[3].z * 1.31;
float cheer = 1.0 - smoothstep(10.0, 34.0, distance(instanceMatrix[3].xz, uPlayer.xz));
transformed.y += abs(sin(uTime * (5.5 + cheer * 4.0) + ph)) * (0.22 + cheer * 0.55);
transformed.x += sin(uTime * 3.0 + ph) * 0.04;`)},this.crowdMats.push(e),e}crowds(){const t=this.track.T,e=this.track.L,n=sn([(b=>(b.scale(.85,1,.75),b.translate(0,.45,0),b))(new Me(.36,8,5)),(b=>(b.translate(0,.98,0),b))(new Me(.25,7,5))]),i=sn([(b=>(b.rotateZ(-Math.PI/2),b.translate(.3,.95,0),b))(new Ve(.07,.25,6))]),r=sn([-1,1].map(b=>{const m=new Te(.3,.05,.42);return m.rotateX(b*.9),m.translate(-.02,.62,b*.38),m})),a=sn([(b=>(b.scale(.9,1,.8),b.translate(0,.42,0),b))(new Me(.34,8,5)),(b=>(b.translate(0,.95,0),b))(new Me(.27,7,5)),...[-1,1].map(b=>{const m=new Ve(.09,.2,4);return m.translate(0,1.22,b*.15),m})]),o=[],c=(b,m)=>Math.atan2(t.z[m]-b.z,t.x[m]-b.x),l=[[1255,60,1],[20,60,1],[770,40,-1],[1205,25,1]],h=[];for(const[b,m,p]of l){for(let v=b;v<b+m;v+=1.4){const _=this.track.idxOf(v%e);for(let x=0;x<3;x++){const C=p*(t.w[_]/2+3.2+x*1.5),w=this.side(_,C);w.y+=.6+x*.9,o.push({p:w,yaw:c(w,_),kind:(Math.floor(v*3)+x)%3})}}for(let v=0;v<3;v++){const _=this.track.idxOf(b%e),x=this.track.idxOf((b+m)%e),C=this.side(_,p*(t.w[_]/2+3.2+v*1.5)),w=this.side(x,p*(t.w[x]/2+3.2+v*1.5)),R=C.clone().add(w).multiplyScalar(.5),A=C.distanceTo(w),y=new Te(A,.6+v*.9+1.5,1.5);y.translate(0,(.6+v*.9)/2-.75,0),y.rotateY(-Math.atan2(w.z-C.z,w.x-C.x)),y.translate(R.x,R.y,R.z),h.push(y)}}const f=t.tower;for(let b=0;b<(this.mobile?50:90);b++){const m=b/90*Math.PI*2*3.1,p=36+b%4*1.6,v=f.x+Math.cos(m)*p,_=f.z+Math.sin(m)*p,x=new P(v,this.world.hAt(v,_),_);o.push({p:x,yaw:Math.atan2(f.z-_,f.x-v),kind:b%3})}for(let b=30;b<t.n;b+=57){if(t.flags[b]&(he|Ii))continue;const m=b/57%2<1?-1:1;for(let p=0;p<6;p++){const v=this.side((b+p*2)%t.n,m*(t.w[b]/2+3+p%2*1.3));o.push({p:v,yaw:c(v,b),kind:p%3})}}const u=[{g:n,c:16777215},{g:a,c:15967834},{g:a,c:11117469}],d=new kt,g=new We;if(u.forEach((b,m)=>{const p=o.filter(_=>_.kind===m),v=[new Le(b.g,this.crowdMaterial(b.c),p.length)];m===0&&(v.push(new Le(i,this.crowdMaterial(15906891),p.length)),v.push(new Le(r,this.crowdMaterial(13226200),p.length))),p.forEach((_,x)=>{g.setFromAxisAngle(p_,-_.yaw),d.compose(_.p,g,new P(1,1,1));for(const C of v)C.setMatrixAt(x,d)});for(const _ of v)_.castShadow=!this.mobile,this.scene.add(_)}),h.length){const b=new J(sn(h),new Ut({color:4157398}));b.castShadow=!0,b.receiveShadow=!0,this.scene.add(b)}}strings(){const t=this.track.T,e=[60,180,300,400,790,880,980,1080,1240,1300],n=[],i=[],r=[],a=[],o=new kt,c=[15358554,16250623,4157398,15911244];e.forEach((f,u)=>{const d=this.track.idxOf(f);if(t.flags[d]&(he|Ii))return;const g=t.w[d]/2+2.4,b=this.side(d,-g),m=this.side(d,g),p=Math.max(b.y,m.y)+7.5;for(const x of[b,m])o.compose(new P(x.x,(x.y+p)/2,x.z),new We,new P(1,p-x.y,1)),a.push(o.clone());const v=u%2===0,_=22;for(let x=0;x<=_;x++){const C=x/_,w=b.x+(m.x-b.x)*C,R=b.z+(m.z-b.z)*C,A=p-Math.sin(C*Math.PI)*1.6;if(x<_){const y=(x+1)/_;r.push(w,A,R,b.x+(m.x-b.x)*y,p-Math.sin(y*Math.PI)*1.6,b.z+(m.z-b.z)*y)}if(v)o.makeTranslation(w,A-.2,R),n.push(o.clone());else if(x<_){const y=new xe,M=(m.x-b.x)/_*.45,S=(m.z-b.z)/_*.45,D=new ct(c[x%4]);y.setAttribute("position",new te([w-M,A,R-S,w+M,A,R+S,w,A-.9,R],3)),y.setAttribute("color",new te([D.r,D.g,D.b,D.r,D.g,D.b,D.r,D.g,D.b],3)),i.push(y)}}});const l=new Le(new re(.1,.12,1,6),new Ut({color:2897254}),a.length);a.forEach((f,u)=>l.setMatrixAt(u,f)),this.scene.add(l);const h=new xe;h.setAttribute("position",new te(r,3)),this.scene.add(new Ir(h,new Os({color:1910096}))),i.length&&this.scene.add(new J(sn(i),new Ee({vertexColors:!0,side:ge}))),this.bulbs=new Le(new Me(.16,8,6),new Ee({color:16769696}),n.length),n.forEach((f,u)=>this.bulbs.setMatrixAt(u,f)),this.scene.add(this.bulbs)}chevrons(){const t=this.track.T,e=this.tex.make(256,128,(a,o,c)=>{a.fillStyle="#1d2550",a.fillRect(0,0,o,c),a.fillStyle="#f2c94c";for(let l=0;l<3;l++){a.beginPath();const h=40+l*70;a.moveTo(h,20),a.lineTo(h+40,64),a.lineTo(h,108),a.lineTo(h+22,108),a.lineTo(h+62,64),a.lineTo(h+22,20),a.fill()}}),n=[],i=new Ee({map:e,side:ge});let r=-99;for(let a=0;a<t.n;a+=3){if(t.flags[a]&(kr|Ii|he)||a-r<40)continue;const o=(a-10+t.n)%t.n,c=(a+10)%t.n;let l=Math.atan2(t.tz[c],t.tx[c])-Math.atan2(t.tz[o],t.tx[o]);if(l=Math.atan2(Math.sin(l),Math.cos(l)),Math.abs(l)<.55)continue;r=a;const h=l>0?-1:1;for(let f=-1;f<=1;f++){const u=(a+f*7+t.n)%t.n,d=this.side(u,h*(t.w[u]/2+1.9)),g=new qe(2.6,1.3);g.translate(0,1.5,0),g.rotateY(-Math.atan2(t.tz[u],t.tx[u])+(l>0?Math.PI:0)),g.translate(d.x,d.y,d.z),n.push(g)}}n.length&&this.scene.add(new J(sn(n),i))}boards(){const t=this.track.T,e=[[40,"KARAKÖY","#1d2550","#ffffff"],[140,"SİMİT 5₺","#e8534a","#ffffff"],[260,"YÜKSEK KALDIRIM","#3f6fd6","#ffffff"],[420,"GALATA","#1d2550","#f2c94c"],[800,"ÇAY OCAĞI","#c8662d","#ffffff"],[900,"ŞİŞHANE","#3f6fd6","#ffffff"],[1020,"VAPUR İSKELESİ","#1d2550","#ffffff"],[1250,"BOSPHORUS DRIFT","#e8534a","#ffffff"]];for(const[n,i,r,a]of e){const o=this.track.idxOf(n);if(!(t.flags[o]&he))for(const c of[-1,1]){const l=this.side(o,c*(t.w[o]/2+1.75)),h=new J(new qe(i.length>9?9:6.5,1.3),new Ee({map:this.tex.sign(i,r,a),transparent:!0,side:ge}));h.position.set(l.x,Math.max(l.y,t.y[o])+1.75,l.z),h.rotation.y=-Math.atan2(t.tz[o],t.tx[o]),this.scene.add(h)}}}flagsAndIcons(){const t=this.track.T,e=this.tex.make(192,128,(f,u,d)=>{f.fillStyle="#e30a17",f.fillRect(0,0,u,d),f.fillStyle="#fff",f.beginPath(),f.arc(72,64,32,0,7),f.fill(),f.fillStyle="#e30a17",f.beginPath(),f.arc(80,64,26,0,7),f.fill(),f.fillStyle="#fff",f.beginPath();for(let g=0;g<10;g++){const b=g%2?6:15,m=g/10*Math.PI*2-Math.PI/2;f.lineTo(118+Math.cos(m)*b,64+Math.sin(m)*b)}f.fill()}),n=new Ut({map:e,side:ge});n.onBeforeCompile=f=>{f.uniforms.uTime=this.uTime,f.vertexShader=f.vertexShader.replace("#include <common>",`#include <common>
uniform float uTime;`).replace("#include <begin_vertex>",`#include <begin_vertex>
float wv = position.x / 2.4; transformed.z += sin(position.x * 2.6 - uTime * 7.0 + modelMatrix[3].x) * 0.22 * wv; transformed.y += sin(position.x * 1.7 - uTime * 5.0) * 0.06 * wv;`)};const i=new Ut({color:15329522});for(const f of[10,25,1290,1310,470,760]){const u=this.track.idxOf(f);for(const d of[-1,1]){if(t.flags[u]&he)continue;const g=this.side(u,d*(t.w[u]/2+3.5)),b=new J(new re(.07,.09,8,6),i);b.position.copy(g).add(new P(0,4,0)),this.scene.add(b);const m=new qe(2.4,1.6,8,1);m.translate(1.2,0,0);const p=new J(m,n);p.position.copy(g).add(new P(0,7.1,0)),p.rotation.y=-Math.atan2(-.6,.8),this.scene.add(p)}}const r=new Zt;for(const[f,u,d]of[[2.4,3108787,0],[1.65,16777215,.06],[1.05,8306928,.12],[.55,1646125,.18]]){const g=new J(new re(f,f,.3,32),Ot(u));g.rotation.x=Math.PI/2,g.position.z=d,r.add(g);const b=g.clone();b.position.z=-d,r.add(b)}const a=this.track.point(0,0);r.position.set(a.x,a.y+10.6,a.z),r.rotation.y=-Math.atan2(t.tz[0],t.tx[0])+Math.PI/2,this.scene.add(r),this.flags.push(r);const o=new J(new _n(3.2,1.25,16,32),Ot(14192453)),c=t.tower;o.position.set(c.x+40,c.y0+3.5,c.z+18),o.rotation.set(.2,.6,0),o.castShadow=!0,this.scene.add(o);const l=new Le(new Me(.12,5,4),Ot(16774102),70),h=new kt;for(let f=0;f<70;f++){const u=f/70*Math.PI*2*7.3,d=f%9/9*Math.PI-Math.PI*.1;h.makeTranslation(Math.cos(u)*(3.2+Math.cos(d)*1.25),Math.sin(d)*1.25,Math.sin(u)*(3.2+Math.cos(d)*1.25)),l.setMatrixAt(f,h)}o.add(l)}update(t,e){this.uTime.value=e;for(const n of this.flags)n.type==="Group"&&(n.rotation.y+=t*.6);this.bulbs}}class g_{constructor(t,e){this.renderer=t,this.cam=new io(-1,1,1,-1,0,1),this.scene=new xl,this.enabled=!0,this.rt=new xi(4,4,{samples:e,type:Vs}),this.rt.depthTexture=new bl(4,4),this.rt.depthTexture.type=Fi,this.mat=new rn({uniforms:{tColor:{value:this.rt.texture},tDepth:{value:this.rt.depthTexture},res:{value:new ht(1,1)},near:{value:.3},far:{value:2e3},ink:{value:new ct(1910096)},width:{value:1},speed:{value:0},time:{value:0}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }",fragmentShader:`
        uniform sampler2D tColor; uniform sampler2D tDepth; uniform vec2 res; uniform float near; uniform float far; uniform vec3 ink; uniform float width; uniform float speed; uniform float time;
        varying vec2 vUv;
        float lin(vec2 uv){ float d = texture2D(tDepth, uv).x; return (near * far) / (far - d * (far - near)); }
        float hash(float n){ return fract(sin(n) * 43758.5453); }
        void main(){
          vec2 px = width / res;
          float c = lin(vUv);
          float l = lin(vUv - vec2(px.x, 0.0)), r = lin(vUv + vec2(px.x, 0.0)), u = lin(vUv + vec2(0.0, px.y)), d = lin(vUv - vec2(0.0, px.y));
          // siluet: göreli derinlik farkı
          float sil = max(max(abs(l - c), abs(r - c)), max(abs(u - c), abs(d - c))) / c;
          float e1 = smoothstep(0.018, 0.05, sil);
          // kırışık: ikinci türev (eğim değişimi)
          float lap = (abs(l + r - 2.0 * c) + abs(u + d - 2.0 * c)) / c;
          float e2 = smoothstep(0.004, 0.012, lap) * 0.8;
          float e = max(e1, e2);
          e *= mix(1.0, 0.25, smoothstep(120.0, 600.0, c)); // uzakta incelir
          if (c > far * 0.9) e *= 0.0;
          vec3 col = texture2D(tColor, vUv).rgb;
          col = mix(col, ink, clamp(e, 0.0, 1.0) * 0.92);
          // hız çizgileri (ekran kenarlarında, ışınsal)
          if (speed > 0.01) {
            vec2 p = vUv - 0.5; p.x *= res.x / res.y;
            float a = atan(p.y, p.x), rr = length(p);
            float k = floor(a * 38.0), f = fract(a * 38.0);
            float on = step(0.86, hash(k + floor(time * 9.0) * 7.0));
            float line = on * smoothstep(0.42, 0.06, abs(f - 0.5)) * smoothstep(0.28, 0.62, rr);
            col = mix(col, vec3(1.0, 0.98, 0.95), line * speed * 0.55);
          }
          gl_FragColor = vec4(col, 1.0);
          #include <colorspace_fragment>
        }`,depthTest:!1,depthWrite:!1}),this.quad=new J(new qe(2,2),this.mat),this.quad.frustumCulled=!1,this.scene.add(this.quad)}setSize(t,e,n){this.rt.setSize(Math.floor(t*n),Math.floor(e*n)),this.mat.uniforms.res.value.set(t*n,e*n),this.mat.uniforms.width.value=Math.max(1,n*1.05)}render(t,e){if(!this.enabled){this.renderer.setRenderTarget(null),this.renderer.render(t,e);return}this.mat.uniforms.near.value=e.near,this.mat.uniforms.far.value=e.far,this.renderer.setRenderTarget(this.rt),this.renderer.render(t,e),this.renderer.setRenderTarget(null),this.renderer.render(this.scene,this.cam)}}const Hn=26,b_=[new ct(16765530),new ct(16743104)],x_=[new ct(16777215),new ct(8306928),new ct(16164442),new ct(11833072)];class v_{constructor(t){this.scene=t,this.rib=new Map,this.mat=new Ee({vertexColors:!0,transparent:!0,depthWrite:!1,blending:ic,side:ge,fog:!1}),this.skidMax=900,this.skidN=0,this.skidHead=0,this.last=new Map,this.skidPos=new Float32Array(this.skidMax*4*3);const e=[];for(let i=0;i<this.skidMax;i++){const r=i*4;e.push(r,r+1,r+2,r,r+2,r+3)}this.skidGeo=new xe,this.skidGeo.setAttribute("position",new be(this.skidPos,3).setUsage(ts)),this.skidGeo.setIndex(e);const n=new J(this.skidGeo,new Ee({color:2764104,transparent:!0,opacity:.55,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-3}));n.frustumCulled=!1,t.add(n)}reset(){for(const t of this.rib.values())for(const e of t)this.scene.remove(e.mesh);this.rib.clear(),this.skidN=0,this.skidHead=0,this.skidPos.fill(0),this.skidGeo.attributes.position.needsUpdate=!0,this.last.clear()}ribbons(t){let e=this.rib.get(t);return e||(e=[0,1].map(()=>{const n=new xe;n.setAttribute("position",new be(new Float32Array(Hn*2*3),3).setUsage(ts)),n.setAttribute("color",new be(new Float32Array(Hn*2*4),4).setUsage(ts));const i=[];for(let a=0;a<Hn-1;a++){const o=a*2;i.push(o,o+1,o+3,o,o+3,o+2)}n.setIndex(i);const r=new J(n,this.mat);return r.frustumCulled=!1,this.scene.add(r),{pts:Array.from({length:Hn},()=>new P),on:new Array(Hn).fill(0),col:Array.from({length:Hn},()=>new ct),geo:n,mesh:r}}),this.rib.set(t,e)),e}update(t,e){for(const n of t){const i=this.ribbons(n),r=Math.cos(n.yaw),a=Math.sin(n.yaw),o=n.boostT>0,c=o||n.drifting&&n.boosts>0,l=n.pos.distanceToSquared(e)<14400;i.forEach((h,f)=>{const u=f?.62:-.62,d=-.9,g=new P(n.pos.x+d*r-u*a,n.pos.y+.08,n.pos.z+d*a+u*r);h.pts.pop(),h.pts.unshift(g),h.on.pop(),h.on.unshift(c&&l?1:0),h.col.pop(),h.col.unshift((o?b_[f]:x_[Math.min(3,n.boosts)]).clone());const b=h.geo.attributes.position,m=h.geo.attributes.color;for(let v=0;v<Hn;v++){const _=h.pts[v],x=h.pts[Math.min(Hn-1,v+1)],C=_.x-x.x,w=_.z-x.z,R=Math.hypot(C,w)||1,A=.13*(1-v/Hn)+.03;b.setXYZ(v*2,_.x-w/R*A,_.y,_.z+C/R*A),b.setXYZ(v*2+1,_.x+w/R*A,_.y,_.z-C/R*A);const y=h.on[v]*(1-v/Hn)*.95,M=h.col[v];m.setXYZW(v*2,M.r,M.g,M.b,y),m.setXYZW(v*2+1,M.r,M.g,M.b,y)}b.needsUpdate=!0,m.needsUpdate=!0;const p=n.def.id+f;if(n.drifting&&n.grounded&&l){const v=this.last.get(p);v&&v.distanceToSquared(g)>.25&&v.distanceToSquared(g)<9&&this.skid(v,g),(!v||v.distanceToSquared(g)>.25)&&this.last.set(p,g.clone())}else this.last.delete(p)})}}skid(t,e){const n=e.x-t.x,i=e.z-t.z,r=Math.hypot(n,i)||1,a=.13,o=-i/r*a,c=n/r*a,l=this.skidHead*12;this.skidPos.set([t.x-o,t.y-.03,t.z-c,t.x+o,t.y-.03,t.z+c,e.x+o,e.y-.03,e.z+c,e.x-o,e.y-.03,e.z-c],l),this.skidHead=(this.skidHead+1)%this.skidMax,this.skidN=Math.min(this.skidMax,this.skidN+1),this.skidGeo.attributes.position.needsUpdate=!0}}class __{constructor(t,e,n,i,r,a,o={cats:30,vendors:[120,390,880,1290],gulls:24,ferries:!0}){this.scene=t,this.track=e,this.world=n,this.items=i,this.fx=r,this.cats=[],this.vendors=[],this.gulls=[],this.ferries=[],this.fireT=0,this.fireAt=new P,this.makeCats(Math.round(o.cats*(a?.6:1))),this.makeVendors(o.vendors),o.gulls&&this.makeGulls(Math.round(o.gulls*(a?.6:1))),o.ferries&&this.makeFerries()}side(t,e){const n=this.track.T,i=n.x[t]-n.tz[t]*e,r=n.z[t]+n.tx[t]*e;return new P(i,this.world.hAt(i,r),r)}makeCats(t){const e=this.track.T,n=[15967834,11117469,3947079,16777215,14262374];for(let i=0;i<t;i++){const r=Math.floor((i+.37)/t*e.n)%e.n;if(e.flags[r]&(he|Ii))continue;const a=i%2?1:-1,o=this.side(r,a*(e.w[r]/2+2.6)),c=this.side(r,a*(e.w[r]/2+9)),l=n[i%n.length],h=new Zt,f=[],u=new J(new Me(.3,10,8),Ot(l));u.scale.set(1.45,.9,.85),u.position.y=.38,h.add(u);const d=new J(new Me(.22,10,8),Ot(l));d.position.set(.4,.62,0),h.add(d);for(const p of[-1,1]){const v=new J(new Ve(.07,.16,4),Ot(l));v.position.set(.42,.84,p*.11),h.add(v)}for(const[p,v]of[[.24,.14],[.24,-.14],[-.24,.14],[-.24,-.14]]){const _=new J(new re(.05,.05,.3,5),Ot(l));_.position.set(p,.15,v),h.add(_),f.push(_)}const g=new Zt;g.position.set(-.4,.45,0);const b=new J(new re(.035,.05,.55,5),Ot(l));b.position.y=.27,g.add(b),h.add(g),h.position.copy(o);const m=Math.atan2(e.z[r]-o.z,e.x[r]-o.x);h.rotation.y=-m,h.traverse(p=>{p.isMesh&&(p.castShadow=!0)}),this.scene.add(h),this.cats.push({g:h,home:o,away:c,t:Math.random()*5,state:"sit",tail:g,legs:f,face:m})}}makeVendors(t){const e=this.track.T;for(const n of t){const i=this.track.idxOf(n);if(e.flags[i]&he)continue;const r=n%2?1:-1,a=this.side(i,r*(e.w[i]/2+3.4)),o=new Zt,c=new J(new Te(1.6,.9,1),Ot(14242639));c.position.set(0,.9,0),o.add(c);const l=new J(new Te(1.4,.7,.8),new Ut({color:14676735,transparent:!0,opacity:.55}));l.position.set(0,1.7,0),o.add(l);const h=new _n(.17,.07,6,12);h.rotateX(Math.PI/2);for(let x=0;x<6;x++){const C=new J(h,Ot(14916172));C.position.set(-.45+x%3*.45,1.45+Math.floor(x/3)*.16,0),o.add(C)}for(const x of[-.6,.6]){const C=new J(new re(.28,.28,.1,12),Ot(3947079));C.rotation.x=Math.PI/2,C.position.set(x,.3,.55),o.add(C)}const f=new J(new Te(1.9,.08,1.3),Ot(16513008));f.position.y=2.15,o.add(f);const u=new Zt;u.position.set(0,0,-.95);const d=new J(new re(.28,.32,1,10),Ot(16513008));d.position.y=.95,u.add(d);const g=new J(new re(.3,.33,.6,10),Ot(14242639));g.position.y=1.15,u.add(g);const b=new J(new Me(.24,10,8),Ot(15978416));b.position.y=1.72,u.add(b);const m=new J(new re(.22,.24,.12,10),Ot(16513008));m.position.y=1.9,u.add(m);const p=new J(new Te(.06,.05,.22),Ot(5913130));p.position.set(.22,1.66,0),u.add(p);const v=new Zt;v.position.set(0,1.4,.3);const _=new J(new re(.07,.07,.6,6),Ot(16513008));_.position.y=-.3,v.add(_),u.add(v),o.add(u),o.position.copy(a),o.rotation.y=-Math.atan2(e.tz[i],e.tx[i])+(r>0?0:Math.PI),o.traverse(x=>{x.isMesh&&(x.castShadow=!0)}),this.scene.add(o),this.vendors.push({g:o,arm:v,i,cd:2+Math.random()*3,anim:0})}}makeGulls(t){const e=this.track.T,n=Ot(16777215),i=Ot(13226200),r=Ot(15906891),a=new Te(.45,.05,1.3);a.translate(0,0,.65);for(let o=0;o<t;o++){const c=new Zt,l=new J(new Me(.35,8,6),n);l.scale.set(1.7,.8,.8),c.add(l);const h=new J(new Ve(.07,.25,6),r);h.rotation.z=-Math.PI/2,h.position.x=.65,c.add(h);const f=new _e,u=new _e;u.add(new J(a,i));const d=new J(a,i);d.rotation.y=Math.PI,f.add(d),c.add(f,u);const g=Math.floor(o/t*e.n),b=o%4===0?new P(e.tower.x,0,e.tower.z):new P(e.x[g],0,e.z[g]),m=(o%4===0?e.tower.y0+30:e.y[g]+14)+o%3*4;c.scale.setScalar(1.3),this.scene.add(c),this.gulls.push({g:c,wl:f,wr:u,c:b,r:14+o%5*6,a:o*1.7,sp:(.35+o%3*.12)*(o%2?1:-1),h:m})}}makeFerries(){const t=[[-660,460,300,330],[300,420,-540,552],[-900,300,200,230],[400,-200,350,600]];for(const[e,n,i,r]of t){const a=new Zt,o=new J(new Te(34,3.2,10),Ot(3099502));o.position.y=1.2,a.add(o);const c=new J(new Te(30,3.2,9),Ot(16513008));c.position.y=4.3,a.add(c);const l=new J(new Te(18,2.6,7.5),Ot(16513008));l.position.y=7.2,a.add(l);const h=new J(new re(1.5,1.7,4.5,12),Ot(15909198));h.position.set(0,10.6,0),a.add(h);const f=new J(new re(1.55,1.55,.9,12),Ot(3947079));f.position.set(0,12.6,0),a.add(f),this.scene.add(a),this.ferries.push({g:a,x0:e,z0:n,x1:i,z1:r,t:Math.random(),sp:9/Math.hypot(i-e,r-n)})}}fireworks(t){this.fireT=5,this.fireAt.copy(t)}update(t,e,n,i,r){for(const a of this.cats){let o=!1;for(const g of n)if((g.pos.x-a.home.x)**2+(g.pos.z-a.home.z)**2<110){o=!0;break}a.t+=t,a.state==="sit"?o&&(a.state="flee",a.t=0,a.g.position.y+=.01):a.state==="flee"?a.t>6&&!o&&(a.state="back",a.t=0):a.state==="back"&&(o?(a.state="flee",a.t=0):a.t>2.5&&(a.state="sit"));const c=a.state==="flee"?a.away:a.home,l=a.g.position,h=c.x-l.x,f=c.z-l.z,u=Math.hypot(h,f),d=u>.2&&a.state!=="sit";if(d){const g=(a.state==="flee"?9:2.5)*t,b=Math.min(1,g/u);l.x+=h*b,l.z+=f*b,l.y=this.world.hAt(l.x,l.z)+(a.state==="flee"&&a.t<.35?Math.sin(a.t/.35*Math.PI)*.9:0),a.g.rotation.y=-Math.atan2(f,h),a.legs.forEach((m,p)=>m.rotation.z=Math.sin(e*20+p*1.7)*.7)}else a.state==="sit"&&(a.g.rotation.y+=(-a.face-a.g.rotation.y)*Math.min(1,t*2)),a.legs.forEach(g=>g.rotation.z=0);a.tail.rotation.z=Math.sin(e*(d?10:2.2)+a.home.x)*(d?.5:.35)+.4}for(const a of this.vendors){if(a.cd-=t,a.anim=Math.max(0,a.anim-t*2.5),a.arm.rotation.x=-Math.sin(a.anim*Math.PI)*2.2,!r||!i||a.cd>0)continue;const o=(this.track.T.n+a.i-i.f.i)%this.track.T.n*(this.track.L/this.track.T.n);if(o>25&&o<75){a.cd=7+Math.random()*5,a.anim=1;const c=a.g.position.clone().add(new P(0,2.2,0)),l=i.f.s+Math.min(o-6,30+Math.random()*20),h=this.track.point(l,(Math.random()-.5)*6);this.items.tossSimit(c,h)}}for(const a of this.gulls){a.a+=a.sp*t,a.g.position.set(a.c.x+Math.cos(a.a)*a.r,a.h+Math.sin(e*.7+a.r)*2,a.c.z+Math.sin(a.a)*a.r),a.g.rotation.set(0,-(a.a+(a.sp>0?Math.PI/2:-Math.PI/2)),Math.sign(a.sp)*.25);const o=Math.sin(e*7+a.r)*.55;a.wl.rotation.x=o,a.wr.rotation.x=-o}for(const a of this.ferries)if(a.t+=a.sp*t,a.t>1&&(a.t-=1),a.g.position.set(a.x0+(a.x1-a.x0)*a.t,Math.sin(e+a.x0)*.2,a.z0+(a.z1-a.z0)*a.t),a.g.rotation.y=-Math.atan2(a.z1-a.z0,a.x1-a.x0),Math.random()<t*3){const o=a.g.position;this.fx.emit(o.x,14,o.z,.5,2.5,.3,y_,.5,3,2.5)}if(this.fireT>0&&(this.fireT-=t,Math.random()<t*3.5)){const a=Ef[Math.floor(Math.random()*Ef.length)],o=this.fireAt.clone().add(new P((Math.random()-.5)*30,18+Math.random()*14,(Math.random()-.5)*30));for(let c=0;c<40;c++){const l=Math.random()*Math.PI*2,h=Math.random()*Math.PI-Math.PI/2,f=8+Math.random()*4;this.fx.emit(o.x,o.y,o.z,Math.cos(l)*Math.cos(h)*f,Math.sin(h)*f,Math.sin(l)*Math.cos(h)*f,a,1,.5,1.3,6)}}}}const y_=new ct(15262960),Ef=[16739179,16242548,8306928,11833072,10410422].map(s=>new ct(s));class M_{constructor(t,e,n,i,r){this.scene=t,this.sun=e,this.hemi=n,this.skyMats=i,this.level=0,this.target=0,this.startAt=-1,this.flash=0,this.nextBolt=8,this.road=null,this.onStart=null,this.onThunder=null,this.n=r?700:1500,this.pos=new Float32Array(this.n*6);for(let c=0;c<this.n;c++)this.seed(c,new P,!0);const a=new xe;a.setAttribute("position",new be(this.pos,3).setUsage(ts)),this.lines=new Ir(a,new Os({color:14673663,transparent:!0,opacity:0,depthWrite:!1})),this.lines.frustumCulled=!1,t.add(this.lines);const o=t.fog;this.base={fog:o.color.clone(),far:o.far,sun:e.intensity,hemi:n.intensity,sky:n.color.clone(),gnd:n.groundColor.clone()},t.traverse(c=>{c.name==="road"&&(this.road=c.material)})}seed(t,e,n=!1){const i=e.x+(Math.random()-.5)*70,r=e.z+(Math.random()-.5)*70,a=e.y+(n?Math.random()*40-10:30);this.pos.set([i,a,r,i+.25,a-1.1,r+.15],t*6)}plan(){this.level=0,this.target=0,this.flash=0;const t=Math.random();this.startAt=t<.08?.5:t<.42?15+Math.random()*55:-1}clear(){this.level=0,this.target=0,this.startAt=-1}update(t,e,n){this.startAt>=0&&e>=this.startAt&&this.target===0&&(this.target=1,this.onStart?.()),this.level+=(this.target-this.level)*Math.min(1,t*.35);const i=this.level,r=this.scene.fog;r.color.copy(this.base.fog).lerp(S_,i*.85),r.far=this.base.far*(1-i*.55),this.flash=Math.max(0,this.flash-t*6),i>.7&&(this.nextBolt-=t,this.nextBolt<=0&&(this.nextBolt=7+Math.random()*10,this.flash=1,setTimeout(()=>this.onThunder?.(),600+Math.random()*900))),this.sun.intensity=this.base.sun*(1-i*.7),this.hemi.intensity=this.base.hemi*(1-i*.25)+this.flash*3,this.hemi.color.copy(this.base.sky).lerp(w_,i*.6),this.hemi.groundColor.copy(this.base.gnd).lerp(T_,i*.6);for(const o of this.skyMats)o.uniforms.rain&&(o.uniforms.rain.value=i);Wa.uWet.value=i,this.road&&this.road.color.setRGB(1-i*.28,1-i*.26,1-i*.2);const a=this.lines.material;if(a.opacity=i*.55,this.lines.visible=i>.02,i>.02){const o=this.pos;for(let c=0;c<this.n;c++){const l=c*6,h=42*t;o[l+1]-=h,o[l+4]-=h,o[l]+=6*t,o[l+3]+=6*t,(o[l+1]<n.y-12||Math.abs(o[l]-n.x)>40||Math.abs(o[l+2]-n.z)>40)&&this.seed(c,n)}this.lines.geometry.attributes.position.needsUpdate=!0}}}const S_=new ct(9081e3),w_=new ct(10135240),T_=new ct(5922680),Af=25,Rf=31,Xn=[.55,1],qa=.18,E_=.75;class A_{constructor(t,e,n,i={}){this.track=t,this.isPlayer=n,this.ev=i,this.pos=new P,this.vel=new P,this.yaw=0,this.speed=0,this.vy=0,this.grounded=!0,this.airT=0,this.f={i:0,t:0,s:0,d:0,h:0,w:13,tx:1,tz:0,flags:0},this.lap=0,this.maxLap=0,this.lastS=0,this.progress=0,this.finished=!1,this.finishTime=0,this.place=1,this.checkpoint=!1,this.drifting=!1,this.dir=0,this.charge=0,this.boosts=0,this.neutralT=0,this.lockT=0,this.pendT=0,this.oppT=0,this.boostT=0,this.boostP=0,this.spinT=0,this.shieldT=0,this.simit=0,this.item=null,this.rollT=0,this.lastItem=null,this.slowT=0,this.wrongT=0,this.stuckT=0,this.respawnT=0,this.prevDrift=!1,this.prevItem=!1,this.wantItem=!1,this.steerVis=0,this.lean=0,this.driftVis=0,this.squash=0,this.stat={spd:0,acc:0,han:0},this.grip=1,this.def=Hs[e],this.model=Il(this.def)}place0(t,e){this.track.point(t,e,this.pos),this.yaw=this.track.heading(t),this.f.i=this.track.idxOf(t),this.track.frame(this.pos.x,this.pos.y,this.pos.z,this.f.i,this.f,40),this.pos.y=this.f.h,this.vel.set(0,0,0),this.speed=0,this.vy=0,this.lastS=this.f.s,this.lap=0,this.progress=this.f.s-this.track.L,this.checkpoint=!0}get maxSpeed(){return(Rf+this.stat.spd*.7+this.simit*.22+(this.boostT>0?this.boostP:0))*(this.slowT>0?.55:1)*(this.grip<1?.96:1)}get juiced(){return this.simit>=10}boost(t,e){this.boostP=Math.max(this.boostT>0?this.boostP:0,t),this.boostT=Math.max(this.boostT,e),this.speed=Math.max(this.speed,Rf+t*.75)}hit(){return this.shieldT>0?(this.shieldT=0,!1):this.spinT>0?!1:(this.spinT=1.1,this.drifting=!1,this.boostT=0,this.simit=Math.max(0,this.simit-3),this.ev.onHit?.(this),!0)}step(t,e,n){const i=this.track;!n||this.finished&&this.isPlayer;const r=n&&this.spinT<=0?e:{gas:0,brake:0,steer:0,drift:!1,item:!1},a=r.drift&&!this.prevDrift;this.prevDrift=r.drift;const o=r.item&&!this.prevItem;this.prevItem=r.item,this.wantItem=o,this.slowT=Math.max(0,this.slowT-t),this.boostT=Math.max(0,this.boostT-t),this.shieldT=Math.max(0,this.shieldT-t),this.lockT=Math.max(0,this.lockT-t),this.spinT>0&&(this.spinT-=t,this.speed*=Math.exp(-t*2.6));const c=Math.cos(this.yaw),l=Math.sin(this.yaw),h=this.maxSpeed;if(this.grounded){if(r.gas>0&&this.speed>=-.5){const D=this.speed<h?(21+this.stat.acc*4)*(1-Math.max(0,this.speed)/h)+5:-(this.speed-h)*1.6;this.speed+=D*r.gas*t}else r.brake>0?(this.speed-=(this.speed>0?32:10)*r.brake*t,this.speed=Math.max(this.speed,-8)):this.speed-=Math.sign(this.speed)*Math.min(Math.abs(this.speed),7*t);this.speed>h&&r.gas===0&&(this.speed-=(this.speed-h)*1.2*t);const S=i.T.y[i.wrap(this.f.i+1)]-i.T.y[this.f.i];this.speed-=S*Af*.22*t*Math.sign(c*this.f.tx+l*this.f.tz)}const f=r.steer;if(this.drifting&&a&&this.boosts<3&&this.lockT<=0)if(this.charge>=Xn[0]&&this.charge<=Xn[1]+qa){this.boosts++;const S=[0,5,6.5,8.5][this.boosts],D=[0,.8,1,1.35][this.boosts];this.boost(S,D),this.charge=0,this.ev.onBoost?.(this,this.boosts)}else this.ev.onDriftFail?.(this,this.charge>Xn[1]),this.charge=0,this.lockT=.2;this.drifting&&(this.boosts<3&&this.lockT<=0&&(this.charge+=t/E_,this.charge>Xn[1]+qa+.15&&(this.charge=0)),Math.abs(f)<.12?this.neutralT+=t:this.neutralT=0,f*this.dir<-.55?this.oppT+=t:this.oppT=0,(this.neutralT>.6||this.oppT>.35||this.speed<6||r.brake>.5||this.spinT>0)&&(this.drifting=!1));let u;const d=Math.abs(this.speed),g=Math.min(1,d/7);this.drifting?(u=this.dir*(1.15+.75*f*this.dir)*g,this.speed-=1.2*t):u=f*(2.25+this.stat.han*.25-.75*Math.min(1,d/34))*g*Math.sign(this.speed||1),this.grounded||(u*=this.drifting?.9:.45),this.spinT>0&&(u=0),this.yaw+=u*t;const b=(this.drifting?3.6:this.grounded?12+this.stat.han*2:1.2)*(this.grip<1?.7:1),m=1-Math.exp(-b*t),p=Math.cos(this.yaw)*this.speed,v=Math.sin(this.yaw)*this.speed;this.vel.x+=(p-this.vel.x)*m,this.vel.z+=(v-this.vel.z)*m,this.pos.x,this.pos.z,this.pos.y,this.pos.x+=this.vel.x*t,this.pos.z+=this.vel.z*t;const _=this.f.h;i.frame(this.pos.x,this.pos.y,this.pos.z,this.f.i,this.f);const x=this.f.h,C=(x-_)/Math.max(t,1e-4);this.vy-=Af*t,this.pos.y+=this.vy*t;const w=!this.grounded;this.pos.y<=x?(w&&this.airT>.25&&(this.ev.onLand?.(this,-this.vy),this.squash=Math.min(1,-this.vy/14)),this.pos.y=x,this.vy=C,this.grounded=!0,this.airT=0):this.pos.y>x+.12&&(this.grounded=!1,this.airT+=t);const R=this.f.w/2+.6;if(Math.abs(this.f.d)>R){const S=Math.sign(this.f.d),D=Math.abs(this.f.d)-R,U=-this.f.tz,N=this.f.tx;this.pos.x-=U*S*D,this.pos.z-=N*S*D;const z=this.vel.x*U+this.vel.z*N;if(z*S>0){this.vel.x-=U*z*1.6,this.vel.z-=N*z*1.6;const F=Math.abs(z);this.speed*=Math.max(.7,1-F*.025);const k=Math.atan2(this.f.tz,this.f.tx)*1,H=ja(k-this.yaw),X=Math.cos(H)>0?H:ja(H+Math.PI);this.yaw+=X*Math.min(.6,F*.05),F>13&&(this.drifting=!1),F>4&&this.ev.onWall?.(this,F)}i.frame(this.pos.x,this.pos.y,this.pos.z,this.f.i,this.f)}const A=this.f.s,y=i.L;this.lastS>y*.75&&A<y*.25?this.checkpoint&&(this.lap++,this.checkpoint=!1):this.lastS<y*.25&&A>y*.75&&this.lap--,A>y*.4&&A<y*.6&&(this.checkpoint=!0),this.lastS=A,this.progress=this.lap*y+A;const M=Math.cos(this.yaw)*this.f.tx+Math.sin(this.yaw)*this.f.tz;this.wrongT=M<-.3&&this.speed>3?this.wrongT+t:0,this.stuckT=n&&r.gas>0&&Math.abs(this.speed)<2?this.stuckT+t:0,this.steerVis+=(f-this.steerVis)*Math.min(1,t*10),this.driftVis+=((this.drifting?this.dir:0)-this.driftVis)*Math.min(1,t*7),this.lean+=((this.drifting?-this.dir*.12:-f*.06*Math.min(1,d/15))-this.lean)*Math.min(1,t*8),this.squash=Math.max(0,this.squash-t*4)}respawn(){const t=this.f,e=t.s-4;this.track.point(e,0,this.pos),this.yaw=this.track.heading(e),this.track.frame(this.pos.x,this.pos.y,this.pos.z,t.i,this.f,30),this.pos.y=this.f.h+2.5,this.vel.set(0,0,0),this.speed=0,this.vy=0,this.drifting=!1,this.spinT=0,this.respawnT=1.2}sync(t,e){const n=this.model;n.root.position.copy(this.pos);let i=this.yaw+this.driftVis*.42;this.spinT>0&&(i+=(1.1-this.spinT)*Math.PI*3.6),n.root.rotation.set(0,-i,0);const r=this.track.T,a=this.f.i,o=this.track.wrap(a+3),c=Math.atan2(r.y[o]-r.y[a],3)*(this.grounded?1:.4),l=Math.cos(i)*this.f.tx+Math.sin(i)*this.f.tz;n.body.rotation.set(this.lean,0,c*l),n.body.scale.set(1+this.squash*.12,1-this.squash*.2,1+this.squash*.12),n.body.position.y=this.boostT>0?Math.sin(e*40)*.02:0;const h=this.speed*t/.33;for(const f of n.wheels)f.rotation.z-=h;for(const f of n.front)f.rotation.y=-this.steerVis*.4;n.driver.rotation.x=-this.steerVis*.15,n.driver.position.y=.9+Math.abs(Math.sin(e*9+this.def.color))*.015*Math.min(1,this.speed/10)}}function ja(s){for(;s>Math.PI;)s-=Math.PI*2;for(;s<-Math.PI;)s+=Math.PI*2;return s}const R_=.62,Cf=.98;class $c{constructor(t,e,n){this.k=t,this.track=e,this.skill=n,this.ctl={gas:1,brake:0,steer:0,drift:!1,item:!1},this.lane=0,this.laneT=0,this.pressT=0,this.itemT=0,this.wantBoostAt=.85,this.lane=(Math.random()-.5)*6}bend(t,e,n){const i=this.track.T,r=this.track.wrap(t+e),a=this.track.wrap(t+n);return ja(Math.atan2(i.tz[a],i.tx[a])-Math.atan2(i.tz[r],i.tx[r]))}update(t,e,n,i=!1){const r=this.k,a=this.track,o=this.ctl;a.T,o.drift=!1,o.item=!1,this.laneT-=t,this.laneT<=0&&(this.laneT=2+Math.random()*3,this.lane=(Math.random()-.5)*(r.f.w-5));let c=this.lane;const l=this.bend(r.f.i,5,30);c+=-Math.sign(l)*Math.min(1,Math.abs(l))*(r.f.w*.25);for(const p of e){if(p===r)continue;const v=p.progress-r.progress;v>0&&v<12&&Math.abs(p.f.d-c)<2.2&&(c+=p.f.d>c?-2.5:2.5)}c=Math.max(-r.f.w/2+2,Math.min(r.f.w/2-2,c));const h=7+Math.abs(r.speed)*.42,f=a.point(r.f.s+h,c),u=Math.atan2(f.z-r.pos.z,f.x-r.pos.x);let d=ja(u-r.yaw);r.drifting?(o.steer=Math.max(-1,Math.min(1,d*2.4*r.dir))*r.dir,Math.abs(l)<.18&&Math.abs(d)<.12&&(o.steer=-r.dir*.7)):o.steer=Math.max(-1,Math.min(1,d*2.6));const g=n.progress-r.progress;let b=(.86+this.skill*.12)*(g>60?1.08:g<-60?.93:1);if(i&&(b=1),o.gas=r.speed<r.maxSpeed*b?1:0,o.brake=0,Math.abs(this.bend(r.f.i,4,22))>1.1&&r.speed>22&&!r.drifting&&(o.gas=0,r.speed>25&&(o.brake=.35)),this.pressT-=t,r.drifting&&r.boosts<3&&r.lockT<=0&&r.charge>=this.wantBoostAt&&this.pressT<=0){const p=Math.random()<.35+this.skill*.55;(p||r.charge>Cf)&&(o.drift=!0,this.pressT=.1,this.wantBoostAt=p?R_+Math.random()*.25:Math.random()<.5?.3:Cf+.25)}if(this.itemT-=t,r.item&&this.itemT<=0){this.itemT=.3;let p=!1;r.item==="turbo"?p=Math.abs(l)<.25&&r.grounded:r.item==="nazar"?p=Math.random()<.4:r.item==="marti"?p=e.some(v=>v!==r&&v.place===r.place-1&&v.progress-r.progress<90&&v.progress>r.progress):r.item==="cay"?p=e.some(v=>v!==r&&r.progress-v.progress>3&&r.progress-v.progress<30)||Math.random()<.05:r.item==="simit"?p=e.some(v=>v!==r&&v.progress-r.progress>4&&v.progress-r.progress<40&&Math.abs(v.f.d-r.f.d)<3)||Math.random()<.03:r.item==="duduk"?p=e.filter(v=>v!==r&&v.pos.distanceTo(r.pos)<12).length>=1:r.item==="kedi"&&(p=Math.random()<.25),p&&(o.item=!0)}else!r.item&&r.shieldT>0&&r.shieldT<7&&this.itemT<=0&&(this.itemT=.4,e.some(p=>p!==r&&p.place===r.place-1&&p.progress-r.progress<30&&p.progress>r.progress)&&Math.random()<.5&&(o.item=!0));(r.stuckT>2.5||r.wrongT>2.5)&&(r.respawn(),r.stuckT=0,r.wrongT=0)}}const Uu={boxes:[70,300,440,800,990,1250],simits:[[30,0,6],[150,3.5,5],[230,-3,6],[360,0,6],[520,-2,6],[600,2,6],[660,0,4],[780,0,5],[850,-3.5,5],[920,3.5,5],[1060,0,6],[1170,0,5],[1280,-3,5]],pads:[{s0:255,s1:262,d:0,w:5},{s0:712,s1:720,d:0,w:6},{s0:1224,s1:1231,d:-2.5,w:5}]};class C_{constructor(t,e,n,i,r={},a=Uu){this.scene=t,this.track=e,this.fx=i,this.ev=r,this.boxes=[],this.simits=[],this.pads=[],this.gulls=[],this.puddles=[],this.projs=[],this.cats=[],this.waves=[],this.loose=[],this.shields=new Map,this.m4=new kt,this.q=new We,this.v=new P,this.sc=new P;const o=e.L;for(const m of a.boxes)for(const p of[-4.5,-1.5,1.5,4.5])this.boxes.push({s:m,d:p,pos:e.point(m,p*(e.T.w[e.idxOf(m)]/13)),t:0});const c=a.simits;for(const[m,p,v]of c)for(let _=0;_<v;_++)this.simits.push({pos:e.point((m+_*4)%o,p).add(new P(0,.9,0)),t:0});this.pads=a.pads;const l=n.make(128,128,(m,p,v)=>{const _=m.createLinearGradient(0,0,p,v);_.addColorStop(0,"#9fd8f2"),_.addColorStop(1,"#c7b3f0"),m.fillStyle=_,hi(m,0,0,p,v,18),m.fill(),m.strokeStyle="#ffffff",m.lineWidth=8,hi(m,6,6,p-12,v-12,14),m.stroke(),m.fillStyle="#ffffff",m.font="900 84px ui-rounded, system-ui, sans-serif",m.textAlign="center",m.textBaseline="middle",m.fillText("?",p/2,v/2+6)});this.boxMesh=new Le(new Te(1.3,1.3,1.3),new Ut({map:l,transparent:!0,opacity:.92}),this.boxes.length),this.boxMesh.castShadow=!0,t.add(this.boxMesh);const h=new _n(.42,.17,10,20);this.simitMesh=new Le(h,new Ru({color:15771989}),this.simits.length),this.simitMesh.castShadow=!0,t.add(this.simitMesh);const f=n.make(128,128,(m,p,v)=>{m.fillStyle="#2f6fb3",hi(m,0,0,p,v,16),m.fill(),m.strokeStyle="#ffffff",m.lineWidth=12,m.lineCap="round",m.lineJoin="round";for(let _=0;_<2;_++)m.beginPath(),m.moveTo(30,34+_*40),m.lineTo(64,14+_*40),m.lineTo(98,34+_*40),m.stroke();m.fillStyle="#9fd0f5",m.beginPath(),m.arc(64,108,10,0,7),m.fill()});for(const m of this.pads){const p=new Ge,v=Math.round(m.s1-m.s0),_=new P,x=new P,C=new P,w=new P;for(let A=0;A<v;A++){const y=m.s0+A,M=y+1;e.point(y,m.d-m.w/2,_),e.point(M,m.d-m.w/2,x),e.point(M,m.d+m.w/2,C),e.point(y,m.d+m.w/2,w);for(const S of[_,x,C,w])S.y+=.05;p.quad(_.toArray(),x.toArray(),C.toArray(),w.toArray(),[0,A/v],[0,(A+1)/v],[1,(A+1)/v],[1,A/v])}const R=new J(p.build(),new Ee({map:f,transparent:!0}));t.add(R)}const u=new Te(.5,.06,1.3);u.translate(0,0,.65);const d=new Me(.4,10,8);d.scale(1.7,.85,.85);const g=new Ve(.1,.35,8);g.rotateZ(-Math.PI/2),g.translate(.8,0,0),this.gullGeo={body:d,wing:u,beak:g},this.puddleMat=new Ee({color:13133357,transparent:!0,opacity:.85,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2}),this.glassMat=new Ut({color:16777215,transparent:!0,opacity:.75});const b=n.make(256,256,(m,p,v)=>{const _=p/2,x=v/2;for(const[C,w]of[[128,"rgba(47,111,179,0.55)"],[84,"rgba(255,255,255,0.75)"],[54,"rgba(126,192,240,0.8)"],[28,"rgba(25,30,45,0.9)"]])m.fillStyle=w,m.beginPath(),m.arc(_,x,C,0,7),m.fill()});this.shieldMat=new Ee({map:b,transparent:!0,opacity:.55,depthWrite:!1,side:ge}),this.sync(0)}reset(){for(const t of this.boxes)t.t=0;for(const t of this.simits)t.t=0;for(const t of this.gulls)this.scene.remove(t.obj);this.gulls=[];for(const t of this.puddles)this.scene.remove(t.obj);this.puddles=[];for(const t of this.shields.values())this.scene.remove(t);this.shields.clear();for(const t of[...this.projs,...this.cats,...this.waves,...this.loose])this.scene.remove(t.obj);this.projs=[],this.cats=[],this.waves=[],this.loose=[]}roll(t,e){const n=(t.place-1)/Math.max(1,e-1),i={cay:2.6-1.6*n,simit:2.4-.6*n,nazar:1.6-1*n,duduk:1+.6*n,marti:.7+2.3*n,turbo:.6+2.4*n,kedi:.2+2*n};t.place===1&&(i.marti*=.3,i.kedi=0),t.lastItem&&(i[t.lastItem]*=.15);const r=Object.values(i).reduce((o,c)=>o+c,0);let a=Math.random()*r;for(const o of Object.keys(i))if(a-=i[o],a<=0)return t.lastItem=o,o;return"turbo"}use(t,e){if(!t.item&&t.shieldT>0){t.shieldT=0,this.throwProj(t,"nazar",e,0),this.ev.onUse?.(t,"nazar");return}const n=t.item;if(!n)return;t.item=null;const i=t.juiced;if(n==="turbo")t.boost(i?10:8.5,i?2.6:1.9);else if(n==="nazar")t.shieldT=i?14:10;else if(n==="cay")this.dropTea(t,i);else if(n==="marti")this.launch(t,e,i);else if(n==="simit")for(const r of i?[-.16,0,.16]:[0])this.throwProj(t,"simit",e,r);else n==="duduk"?this.horn(t,i):n==="kedi"&&this.catHerd(t,e,i);this.ev.onUse?.(t,n)}throwProj(t,e,n,i){let r;if(e==="simit"){const h=new J(new _n(.42,.18,8,16),Ot(15771989));h.castShadow=!0,r=h}else{const h=new Zt;for(const[f,u,d]of[[.8,3108787,0],[.55,16777215,.04],[.35,8306928,.08],[.18,1646125,.12]]){const g=new J(new re(f,f,.12,20),Ot(u));g.rotation.x=Math.PI/2,g.position.z=d,h.add(g)}r=h}const a=t.yaw+i,o=Math.max(t.speed+16,44);let c=null;if(e==="nazar")for(const h of n)h!==t&&!h.finished&&h.place===t.place-1&&h.progress-t.progress<80&&(c=h);const l=t.pos.clone().add(new P(Math.cos(a)*2.4,.7,Math.sin(a)*2.4));this.scene.add(r),this.projs.push({kind:e,obj:r,pos:l,vx:Math.cos(a)*o,vz:Math.sin(a)*o,idx:t.f.i,owner:t,target:c,life:e==="simit"?3.5:4,bounces:0})}horn(t,e){const n=new J(new _n(1,.12,6,40),new Ee({color:16777215,transparent:!0,opacity:.8,depthWrite:!1}));n.rotation.x=Math.PI/2,this.scene.add(n),this.waves.push({obj:n,pos:t.pos.clone(),t:e?-.2:0,owner:t,hit:new Set([t])})}catHerd(t,e,n){const i=e.filter(r=>r!==t&&!r.finished&&r.progress>t.progress).sort((r,a)=>r.progress-a.progress).slice(0,n?5:3);for(const r of i){this.ev.onTarget?.(r,"kedi");const a=r.f.s+38+Math.random()*10,o=this.track.idxOf(a),c=this.track.T.w[o];for(let l=0;l<3;l++){const h=Math.random()<.5?-1:1,f=-h*(c/2+1+l*1.6),u=this.catModel(l%2?11117469:l?15967834:3947079),d=this.track.point(a+l*2.5,f);u.position.copy(d),this.scene.add(u),this.cats.push({obj:u,pos:d,dir:h,life:6,owner:t,s:a+l*2.5,d:f,w:c,legs:u.userData.legs})}}}catModel(t){const e=new Zt,n=[],i=new J(new Me(.42,10,8),Ot(t));i.scale.set(1.5,.8,.8),i.position.y=.55,e.add(i);const r=new J(new Me(.3,10,8),Ot(t));r.position.set(.62,.85,0),e.add(r);for(const o of[-1,1]){const c=new J(new Ve(.1,.22,4),Ot(t));c.position.set(.62,1.15,o*.15),e.add(c)}for(const[o,c]of[[.35,.2],[.35,-.2],[-.35,.2],[-.35,-.2]]){const l=new J(new re(.07,.07,.45,5),Ot(t));l.position.set(o,.22,c),e.add(l),n.push(l)}const a=new J(new re(.05,.07,.7,5),Ot(t));return a.position.set(-.75,.9,0),a.rotation.z=.7,e.add(a),e.scale.setScalar(1.25),e.userData.legs=n,e}tossSimit(t,e){const n=new J(new _n(.42,.17,8,16),Ot(15771989));n.castShadow=!0;const i=.9,r=new P((e.x-t.x)/i,(e.y-t.y)/i+.5*25*i,(e.z-t.z)/i);n.position.copy(t),this.scene.add(n),this.loose.push({pos:t.clone(),vel:r,obj:n,life:12,landed:!1})}dropTea(t,e){const n=new P(-Math.cos(t.yaw)*2.6,0,-Math.sin(t.yaw)*2.6),i=t.pos.clone().add(n),r={...t.f};this.track.frame(i.x,i.y,i.z,t.f.i,r),i.y=r.h+.04;const a=new Zt,o=e?2.8:2.1,c=new J(new Gr(o,20),this.puddleMat);c.rotation.x=-Math.PI/2,c.scale.set(1,.8,1),a.add(c);const l=new J(new re(.16,.11,.4,10,1,!0),this.glassMat);l.rotation.z=Math.PI/2,l.position.set(.3,.12,.2),a.add(l);const h=new J(new re(.26,.26,.04,14),Ot(15037299));h.position.set(-.4,.03,-.3),a.add(h),a.position.copy(i),a.rotation.y=Math.random()*6,this.scene.add(a),this.puddles.push({obj:a,pos:i,life:30,r:o,owner:t,arm:.5});for(let f=0;f<18;f++)this.fx.emit(i.x,i.y+.4,i.z,(Math.random()-.5)*6,Math.random()*4+1,(Math.random()-.5)*6,L_,1,.3,.6,14)}launch(t,e,n){let i=null;for(const f of e)f!==t&&!f.finished&&f.place===t.place-1&&(i=f);const r=new Zt;r.add(new J(this.gullGeo.body,Ot(16777215))),r.add(new J(this.gullGeo.beak,Ot(15906891)));const a=new _e,o=new _e,c=new J(this.gullGeo.wing,Ot(13226200));o.add(c);const l=new J(this.gullGeo.wing,Ot(13226200));l.rotation.y=Math.PI,a.add(l),r.add(a,o),r.scale.setScalar(1.3),this.scene.add(r);const h=t.pos.clone().add(new P(Math.cos(t.yaw)*2.5,1.2,Math.sin(t.yaw)*2.5));i&&this.ev.onTarget?.(i,"marti"),this.gulls.push({obj:r,wl:a,wr:o,pos:h,idx:t.f.i,owner:t,target:i,life:n?6:4.5,speed:Math.max(t.speed+14,n?46:40),d:t.f.d})}shieldFor(t){let e=this.shields.get(t);return e||(e=new J(new Me(1.75,20,14),this.shieldMat.clone()),this.shields.set(t,e),this.scene.add(e)),e}update(t,e,n){const i=this.track;for(const a of this.boxes)a.t=Math.max(0,a.t-t);for(const a of this.simits)a.t=Math.max(0,a.t-t);for(const a of e){for(const o of this.boxes){if(o.t>0)continue;const c=a.pos.x-o.pos.x,l=a.pos.z-o.pos.z,h=a.pos.y+.6-(o.pos.y+1);c*c+l*l<3.2&&Math.abs(h)<2&&(o.t=3.5,this.burst(o.pos,12575735,10),!a.item&&a.rollT<=0&&(a.rollT=a.isPlayer?1.1:.6),this.ev.onPickup?.(a,"box"))}for(const o of this.simits){if(o.t>0)continue;const c=a.pos.x-o.pos.x,l=a.pos.z-o.pos.z,h=a.pos.y+.6-o.pos.y;c*c+l*l<2.6&&Math.abs(h)<1.8&&(o.t=8,a.simit=Math.min(10,a.simit+1),this.ev.onPickup?.(a,"simit"))}if(a.rollT>0&&(a.rollT-=t,a.rollT<=0&&(a.item=this.roll(a,e.length))),a.grounded)for(const o of this.pads)a.f.s>=o.s0&&a.f.s<=o.s1&&Math.abs(a.f.d-o.d)<o.w/2+.4&&(a.boostT<.9&&this.ev.onPad?.(a),a.boost(8,1.2));for(const o of this.puddles){if(o.arm>0||o.life<=0)continue;const c=a.pos.x-o.pos.x,l=a.pos.z-o.pos.z;c*c+l*l<(o.r+.6)**2&&Math.abs(a.pos.y-o.pos.y)<1.5&&a.grounded&&(o.life=0,a.shieldT>0?(a.shieldT=0,this.ev.onBlock?.(a)):a.hit()&&this.ev.onHit?.(a,"cay",o.owner),this.burst(o.pos,13924922,16))}}const r={i:0,t:0,s:0,d:0,h:0,w:13,tx:1,tz:0,flags:0};for(const a of this.gulls){a.life-=t;const o=a.target&&!a.target.finished?a.target:null;i.frame(a.pos.x,a.pos.y,a.pos.z,a.idx,r),a.idx=r.i;let c,l,h;const f=o?o.pos.distanceTo(a.pos):1e9;if(o&&f<22)c=o.pos.x-a.pos.x,l=o.pos.z-a.pos.z,h=o.pos.y+.9;else{const g=i.wrap(r.i+10),b=o?o.f.d:a.d,m=i.point(g*(i.L/i.n),b*.8,this.v);c=m.x-a.pos.x,l=m.z-a.pos.z,h=m.y+1.6}const u=Math.hypot(c,l)||1;a.pos.x+=c/u*a.speed*t,a.pos.z+=l/u*a.speed*t,a.pos.y+=(h-a.pos.y)*Math.min(1,t*6),a.obj.position.copy(a.pos),a.obj.rotation.set(0,-Math.atan2(l,c),0);const d=Math.sin(n*22)*.7;a.wl.rotation.x=d,a.wr.rotation.x=-d,Math.random()<.5&&this.fx.emit(a.pos.x,a.pos.y,a.pos.z,0,.5,0,P_,.6,.35,.5);for(const g of e)if(!(g===a.owner&&a.life>3.8)&&g.pos.distanceToSquared(a.pos.clone().setY(a.pos.y-.6))<3.2){a.life=0,this.burst(g.pos,16777215,18),g.shieldT>0?(g.shieldT=0,this.ev.onBlock?.(g)):g.hit()&&this.ev.onHit?.(g,"marti",a.owner);break}}for(const a of this.gulls)a.life<=0&&this.scene.remove(a.obj);this.gulls=this.gulls.filter(a=>a.life>0);for(const a of this.puddles)a.arm-=t,a.life-=t,a.life<=0&&this.scene.remove(a.obj);this.puddles=this.puddles.filter(a=>a.life>0),this.updateExtras(t,e,n,r);for(const a of e)if(a.shieldT>0){const c=this.shieldFor(a);c.visible=!0,c.position.copy(a.pos).add(new P(0,.85,0)),c.rotation.y=n*1.5,c.material.opacity=a.shieldT<2&&Math.sin(n*20)>0?.2:.55}else{const c=this.shields.get(a);c&&(c.visible=!1)}this.sync(n)}hitKart(t,e,n){if(t.shieldT>0){t.shieldT=0,this.ev.onBlock?.(t);return}t.hit()&&this.ev.onHit?.(t,e,n)}updateExtras(t,e,n,i){const r=this.track;for(const a of this.projs){if(a.life-=t,a.target&&!a.target.finished){const c=a.target.pos.x-a.pos.x,l=a.target.pos.z-a.pos.z,h=Math.hypot(c,l),f=Math.hypot(a.vx,a.vz);h<45&&(a.vx+=(c/h*f-a.vx)*Math.min(1,t*4),a.vz+=(l/h*f-a.vz)*Math.min(1,t*4))}a.pos.x+=a.vx*t,a.pos.z+=a.vz*t,r.frame(a.pos.x,a.pos.y,a.pos.z,a.idx,i),a.idx=i.i,a.pos.y=i.h+.65;const o=i.w/2+.4;if(Math.abs(i.d)>o){const c=-i.tz,l=i.tx,h=a.vx*c+a.vz*l,f=Math.sign(i.d);h*f>0&&(a.vx-=2*h*c,a.vz-=2*h*l,a.bounces++),a.pos.x-=c*f*(Math.abs(i.d)-o),a.pos.z-=l*f*(Math.abs(i.d)-o),a.bounces>4&&(a.life=0)}a.obj.position.copy(a.pos),a.kind==="nazar"?a.obj.rotation.set(0,n*6,0):a.obj.rotation.set(Math.PI/2,0,n*12);for(const c of e)if(!(c===a.owner&&a.life>(a.kind==="simit"?3.2:3.7))&&(c.pos.x-a.pos.x)**2+(c.pos.z-a.pos.z)**2<2.6&&Math.abs(c.pos.y+.6-a.pos.y)<1.6){a.life=0,this.burst(a.pos,a.kind==="simit"?15771989:8306928,14),this.hitKart(c,a.kind==="simit"?"simit":"nazar",a.owner);break}}for(const a of this.projs)a.life<=0&&this.scene.remove(a.obj);this.projs=this.projs.filter(a=>a.life>0);for(const a of this.waves){a.t+=t;const o=Math.max(0,a.t)*30;if(a.obj.position.copy(a.pos).add(new P(0,.8,0)),a.obj.scale.setScalar(Math.max(.01,o)),a.obj.material.opacity=Math.max(0,.8-a.t*1.4),a.t>0)for(const c of e)!a.hit.has(c)&&c.pos.distanceTo(a.pos)<o+1&&o<16&&(a.hit.add(c),this.hitKart(c,"duduk",a.owner),c.vel.addScaledVector(c.pos.clone().sub(a.pos).setY(0).normalize(),9))}for(const a of this.waves)a.t>.6&&this.scene.remove(a.obj);this.waves=this.waves.filter(a=>a.t<=.6);for(const a of this.cats){a.life-=t,a.d+=a.dir*5.5*t,r.point(a.s,a.d,a.pos),a.obj.position.copy(a.pos);const o=r.heading(a.s);a.obj.rotation.y=-(o+(a.dir>0?Math.PI/2:-Math.PI/2)),a.legs.forEach((c,l)=>c.rotation.z=Math.sin(n*18+l*1.6)*.6),Math.abs(a.d)>a.w/2+6&&(a.life=Math.min(a.life,0));for(const c of e)c.slowT<=0&&c.spinT<=0&&(c.pos.x-a.pos.x)**2+(c.pos.z-a.pos.z)**2<2.4&&(c.shieldT>0?(c.shieldT=0,this.ev.onBlock?.(c)):(c.slowT=1.3,c.drifting=!1,c.vy=3,c.grounded=!1,this.ev.onHit?.(c,"kedi",a.owner)),a.life=Math.min(a.life,.3))}for(const a of this.cats)a.life<=0&&this.scene.remove(a.obj);this.cats=this.cats.filter(a=>a.life>0);for(const a of this.loose){a.life-=t,a.landed||(a.vel.y-=25*t,a.pos.addScaledVector(a.vel,t),r.frameGlobal(a.pos.x,a.pos.y,a.pos.z,i),a.pos.y<i.h+.9&&a.vel.y<0&&(a.landed=!0,a.pos.y=i.h+.9)),a.obj.position.copy(a.pos),a.obj.rotation.set(a.landed?0:n*8,n*2.5,0);for(const o of e)if(a.landed&&(o.pos.x-a.pos.x)**2+(o.pos.z-a.pos.z)**2<2.8&&Math.abs(o.pos.y+.6-a.pos.y)<1.8){a.life=0,o.simit=Math.min(10,o.simit+1),this.ev.onPickup?.(o,"simit");break}}for(const a of this.loose)a.life<=0&&this.scene.remove(a.obj);this.loose=this.loose.filter(a=>a.life>0)}burst(t,e,n){const i=new ct(e);for(let r=0;r<n;r++)this.fx.emit(t.x,t.y+.8,t.z,(Math.random()-.5)*8,Math.random()*6+2,(Math.random()-.5)*8,i,1,.35,.7,14)}sync(t){const e=this.m4,n=this.q,i=this.sc;this.boxes.forEach((r,a)=>{const o=r.t<=0?1:r.t<.5?1-r.t/.5:0;n.setFromEuler(new an(.3,t*1.6+a,.3)),e.compose(this.v.copy(r.pos).add(new P(0,1.1+Math.sin(t*2+a)*.15,0)),n,i.setScalar(o)),this.boxMesh.setMatrixAt(a,e)}),this.boxMesh.instanceMatrix.needsUpdate=!0,this.simits.forEach((r,a)=>{const o=r.t<=0?1:0;n.setFromEuler(new an(0,t*2.5+a*.4,0)),e.compose(this.v.copy(r.pos).add(new P(0,Math.sin(t*3+a)*.1,0)),n,i.setScalar(o)),this.simitMesh.setMatrixAt(a,e)}),this.simitMesh.instanceMatrix.needsUpdate=!0}}const P_=new ct(16777215),L_=new ct(13133357),ws=16,$i=32,bn=64,Pf=128,Lf={x:-1020,z:1350};function I_(){const s=[];let t=40,e=160,n=2,i=0;const r={x:t,z:e,y:n,phi:i},a=S=>S*S*(3-2*S),o=(S,D)=>s.push({x:t,y:n,z:e,w:S,f:D}),c=(S,D=0,U=11,N=0)=>{const z=t,F=e,k=n,H=Math.max(1,Math.round(S));for(let X=1;X<=H;X++){const nt=X/H;t=z+Math.cos(i)*S*nt,e=F+Math.sin(i)*S*nt,n=k+D*a(nt),o(U,N)}},l=(S,D,U=0,N=11,z=0)=>{const F=D*Math.PI/180,k=Math.sign(F),H=Math.abs(F)*S,X=Math.max(2,Math.round(H)),nt=t-Math.sin(i)*S*k,$=e+Math.cos(i)*S*k,St=i,Ht=n;for(let j=1;j<=X;j++){const Q=j/X;i=St+F*Q,t=nt+Math.sin(i)*S*k,e=$-Math.cos(i)*S*k,n=Ht+U*a(Q),o(N,z)}};o(12,0),c(228,0,12),l(22,-90,.5),c(12,.3),c(50,.5,15,ws),c(14,.3),c(38,.6),c(8,0,11,$i),c(18,2.2,12,bn|he),l(16,-90,2.2,12,bn|he),c(24,1.2,11,bn|Pf|he),c(6,.6,11,bn|Pf|he|Yc),c(14,-6.6,12,bn|he),l(14,-90,0,12,bn),c(12,0,12,bn),c(8,0,11,$i),c(22,-.3),l(18,90,-.3),c(96,-.6),c(6,0,11,$i),c(48,0,16,ws),c(6,0,11,$i),c(46,-.4),l(30,-45,-.3),c(44,-.4),l(30,45,-.3),c(118,-.5),l(20,-180,-.4),c(106,-.2),l(26,40,0),l(26,-40,0),c(30,0);const h=s[s.length-1],f=r.x-h.x,u=r.z-h.z,d=Math.hypot(f,u),g=d*1.1,b=Math.cos(i)*g,m=Math.sin(i)*g,p=Math.cos(r.phi)*g,v=Math.sin(r.phi)*g,_=Math.max(4,Math.round(d*1.3));for(let S=1;S<_;S++){const D=S/_,U=D*D,N=U*D,z=2*N-3*U+1,F=N-2*U+D,k=-2*N+3*U,H=N-U;s.push({x:z*h.x+F*b+k*r.x+H*p,z:z*h.z+F*m+k*r.z+H*v,y:h.y+(r.y-h.y)*a(D),w:11,f:0})}const x=[0];for(let S=1;S<s.length;S++)x.push(x[S-1]+Math.hypot(s[S].x-s[S-1].x,s[S].z-s[S-1].z));const C=x[x.length-1]+Math.hypot(s[0].x-s[s.length-1].x,s[0].z-s[s.length-1].z),w=Math.round(C),R=C/w,A={n:w,length:C,x:new Float32Array(w),y:new Float32Array(w),z:new Float32Array(w),tx:new Float32Array(w),tz:new Float32Array(w),w:new Float32Array(w),bank:new Float32Array(w),flags:new Uint8Array(w),tower:{x:0,z:0,y0:0,y1:0,r:0}};let y=0;for(let S=0;S<w;S++){const D=S*R;for(;y<s.length-1&&x[y+1]<D;)y++;const U=s[y],N=s[(y+1)%s.length],z=(y+1<s.length?x[y+1]:C)-x[y],F=z>0?(D-x[y])/z:0;A.x[S]=U.x+(N.x-U.x)*F+Lf.x,A.z[S]=U.z+(N.z-U.z)*F+Lf.z,A.y[S]=U.y+(N.y-U.y)*F,A.w[S]=U.w,A.flags[S]=F<.5?U.f:N.f}((S,D)=>{const U=S.slice();for(let N=0;N<w;N++){let z=0;for(let F=-D;F<=D;F++)z+=U[(N+F+w)%w];S[N]=z/(2*D+1)}})(A.w,5);for(let S=0;S<w;S++){const D=(S-1+w)%w,U=(S+1)%w,N=A.x[U]-A.x[D],z=A.z[U]-A.z[D],F=Math.hypot(N,z)||1;A.tx[S]=N/F,A.tz[S]=z/F}return A}const Dn=5,Un=4.6,Vn=2.4,If=16,Sa=[{name:"HALICI",bg:"#9e2b25",fg:"#f6d38a",goods:"carpet"},{name:"KUYUMCU",bg:"#1f4f8a",fg:"#ffd96a",goods:"gold"},{name:"FENERCİ",bg:"#2d6a4f",fg:"#ffe9a8",goods:"lamp"},{name:"BAHARATÇI",bg:"#a45a1c",fg:"#fff1d6",goods:"spice"},{name:"ÇİNİCİ",bg:"#1d3f6e",fg:"#ffffff",goods:"plate"},{name:"LOKUMCU",bg:"#b03a6a",fg:"#fff1f6",goods:"candy"},{name:"ŞALCI",bg:"#4b3a6e",fg:"#ffe9a8",goods:"cloth"},{name:"ANTİKACI",bg:"#5a4632",fg:"#f6d38a",goods:"gold"},{name:"BAKIRCI",bg:"#7a3a1c",fg:"#ffd9a8",goods:"copper"},{name:"DERİCİ",bg:"#3a2a1c",fg:"#f2d8a0",goods:"cloth"},{name:"TESPİHÇİ",bg:"#2a5a5a",fg:"#ffffff",goods:"gold"},{name:"ÇAYCI",bg:"#c8662d",fg:"#ffffff",goods:"tea"}];class D_{constructor(t,e,n,i){this.scene=t,this.track=e,this.tex=n,this.mobile=i,this.skyMats=[],this.uTime={value:0},this.uPlayer={value:new P(1e5,0,1e5)},this.lampPos=[],this.platePos=[],this.sackPos=[],this.hang=new Ge,this.boxes=[],this.boxCols=[],this.T=e.T;let r=17;this.rnd=()=>(r=r*16807%2147483647)/2147483647,this.scene.background=new ct(9419750);const a=this.planBays();this.streetFloor(),this.facades(a),this.vault(),this.alleys(a),this.halls(),this.han(),this.gates(),this.streetLanterns(),this.goodsMeshes(),this.shoppers()}hAt(t,e){const n=this.T;let i=0,r=1e18;for(let a=0;a<n.n;a+=3){const o=(t-n.x[a])**2+(e-n.z[a])**2;o<r&&(r=o,i=a)}return n.y[i]}update(t){this.uTime.value=t}P(t,e,n=0){const i=this.T,r=(t%i.n+i.n)%i.n;return[i.x[r]-i.tz[r]*e,i.y[r]+n,i.z[r]+i.tx[r]*e]}V(t,e,n=0){const i=this.P(t,e,n);return new P(i[0],i[1],i[2])}half(t){return this.T.w[(t%this.T.n+this.T.n)%this.T.n]/2+1.7}street(t){return!(this.T.flags[(t%this.T.n+this.T.n)%this.T.n]&(ws|$i|bn))}yaw(t){const e=(t%this.T.n+this.T.n)%this.T.n;return Math.atan2(this.T.tz[e],this.T.tx[e])}boxAt(t,e,n,i,r,a,o){const c=new Te(i,r,a),l=this.P(t,e,n);c.rotateY(-this.yaw(t)),c.translate(l[0],l[1],l[2]),this.boxes.push(c.toNonIndexed()),this.boxCols.push(o)}sky(){const t=new Me(900,24,12),e=new rn({side:Je,depthWrite:!1,depthTest:!1,fog:!1,vertexShader:"varying vec3 vP; void main(){ vP = normalize(position); vec4 p = projectionMatrix * modelViewMatrix * vec4(position,1.0); gl_Position = p.xyww; }",fragmentShader:"varying vec3 vP; void main(){ float h = vP.y; vec3 c = mix(vec3(0.98, 0.88, 0.78), vec3(0.55, 0.74, 0.95), smoothstep(0.0, 0.5, h)); c = mix(c, vec3(0.35, 0.55, 0.88), smoothstep(0.5, 1.0, h)); gl_FragColor = vec4(c, 1.0); }"}),n=new J(t,e);n.renderOrder=-10,n.frustumCulled=!1,this.scene.add(n),this.skyMats.push(e)}planBays(){const t=this.T,e=[];for(const n of[-1,1]){let i=0,r=n>0?3:0;for(;i<t.n;){if(!this.street(i)){i++;continue}let a=i;for(;a<i+Dn&&a<t.n&&this.street(a);)a++;if(a-i<Dn){i=a;continue}r++;const o=r>6&&this.rnd()<.45;o&&(r=0),e.push({i0:i,i1:a,side:n,kind:o?"alley":"shop",shop:Math.floor(this.rnd()*Sa.length)}),i=a}}return e}marble(t="#efe6d8",e="#d9ccb8"){return this.tex.make(128,128,(n,i,r)=>{n.fillStyle=t,n.fillRect(0,0,i,r),n.strokeStyle=e,n.lineWidth=2;for(let a=0;a<2;a++)for(let o=0;o<2;o++)n.strokeRect(o*64+a%2*32,a*64,64,64);n.strokeStyle="rgba(160,140,120,0.25)",n.lineWidth=1;for(let a=0;a<8;a++)n.beginPath(),n.moveTo(a*37%i,0),n.bezierCurveTo(40,40,80,70,a*53%i,r),n.stroke()},!0)}streetFloor(){const t=this.T,e=new Ge;for(let i=0;i<t.n;i++){const r=(i+1)%t.n;if((t.flags[i]|t.flags[r])&(ws|bn|he))continue;const o=this.half(i),c=this.half(r),l=o+Vn+.4,h=c+Vn+.4;e.quad(this.P(i,-l,-.02),this.P(r,-h,-.02),this.P(r,-c,-.02),this.P(i,-o,-.02),[0,0],[0,.5],[.5,.5],[.5,0]),e.quad(this.P(i,o,-.02),this.P(r,c,-.02),this.P(r,h,-.02),this.P(i,l,-.02),[0,0],[0,.5],[.5,.5],[.5,0])}const n=new J(e.build(),new Ut({map:this.marble()}));n.receiveShadow=!0,this.scene.add(n)}facades(t){const e=this.signAtlas(),n=this.goodsAtlas(),i=new Ge,r=new Ge,a=new Ge,o=15853526,c=14273717,l=6963248;for(const f of t){const{i0:u,i1:d,side:g}=f,b=Math.floor((u+d)/2),m=g*(this.half(u)+Vn),p=g*(this.half(d)+Vn);if(this.boxAt(u,m-g*.2,Un/2,.7,Un,.7,c),f.kind==="alley")continue;const v=Sa[f.shop],_=(N,z,F,k,H,X,nt,$,St)=>{const Ht=this.P(u,z,k),j=this.P(d,F,k),Q=this.P(d,F,H),dt=this.P(u,z,H);g>0?N.quad(j,Ht,dt,Q,[X,$],[nt,$],[nt,St],[X,St]):N.quad(Ht,j,Q,dt,[X,$],[nt,$],[nt,St],[X,St])};_(i,m,p,3.9,Un,0,1,0,1);const x=f.shop,C=x%4/4,w=1-(Math.floor(x/4)+1)/3,R=m-g*.12,A=p-g*.12;_(r,R,A,3.2,3.85,C+.01,C+.24,w+.01,w+.32);const y=m+g*.35,M=p+g*.35,S=["carpet","gold","lamp","spice","plate","candy","cloth","copper","tea"].indexOf(v.goods),D=S%3/3,U=1-(Math.floor(S/3)+1)/3;_(a,y,M,.55,3.15,D+.01,D+.32,U+.01,U+.32),this.boxAt(u+.6,m+g*.15,1.6,.18,3.2,.5,l),this.boxAt(d-.6,p+g*.15,1.6,.18,3.2,.5,l),this.boxAt(b,(m+p)/2+g*.15,.27,Dn-1,.55,.5,c),this.displayGoods(v.goods,u,d,g,m,p)}const h=(f,u)=>{const d=new J(f.build(),u);return d.receiveShadow=!0,this.scene.add(d),d};h(i,new Ut({color:o,side:ge})),h(r,new Ut({map:e,emissive:2760728,side:ge})),h(a,new Ut({map:n,emissive:3811866,side:ge}))}displayGoods(t,e,n,i,r,a){const o=(e+n)/2,c=(r+a)/2;if(t==="lamp"){const l=[16739179,7061759,16766282,8117402,13863935,16752474];for(let h=0;h<7;h++){const f=(h+.5)/7,u=e+(n-e)*f;this.lampPos.push({p:this.V(u,c-i*(.7+h%2*.35),2.2+h%3*.35),c:l[(h+e)%l.length]})}}else if(t==="carpet"||t==="cloth")for(const l of[.12,.88]){const h=e+(n-e)*l,f=t==="carpet"?1.1:.5,u=Math.floor(this.rnd()*6),d=u%3/3,g=1-(Math.floor(u/3)+1)/2,b=this.P(h-f,c-i*.3,.5),m=this.P(h+f,c-i*.3,.5),p=this.P(h+f,c-i*.3,3.1),v=this.P(h-f,c-i*.3,3.1);i>0?this.hang.quad(m,b,v,p,[d,g],[d+.33,g],[d+.33,g+.5],[d,g+.5]):this.hang.quad(b,m,p,v,[d,g],[d+.33,g],[d+.33,g+.5],[d,g+.5])}else if(t==="plate"||t==="copper"){this.boxAt(o,c-i*.6,1,3.2,.08,.6,6963248),this.boxAt(o,c-i*.6,1.8,3.2,.08,.6,6963248);const l=new kt,h=new We;for(let f=0;f<10;f++){const u=(f%5+.5)/5,d=e+.9+(n-e-1.8)*u,g=this.V(d,c-i*.6,f<5?1.3:2.1);h.setFromEuler(new an(Math.PI/2-.25*i,0,-this.yaw(Math.round(d)),"YXZ")),l.compose(g,h,new P(1,1,1)),this.platePos.push(l.clone())}}else if(t==="spice"||t==="tea"||t==="candy"){const l=t==="spice"?[14239260,15905564,8010268,13082652,10103836]:t==="tea"?[3828266,8010268,13133357,2771498]:[16748465,16769162,11069135,16777215],h=new kt;for(let f=0;f<4;f++){const u=(f+.5)/4,d=e+.6+(n-e-1.2)*u;h.makeTranslation(...this.P(d,c-i*.7,0)),this.sackPos.push({m:h.clone(),c:l[f%l.length]})}}}signAtlas(){return this.tex.make(1024,384,r=>{Sa.forEach((a,o)=>{const c=o%4*256,l=Math.floor(o/4)*128;r.fillStyle=a.bg,r.fillRect(c,l,256,128),r.strokeStyle=a.fg,r.lineWidth=5,hi(r,c+8,l+8,240,112,10),r.stroke(),r.fillStyle=a.fg;let h=54;for(r.font=`900 ${h}px ui-rounded, system-ui, sans-serif`;r.measureText(a.name).width>160&&h>18;)h-=2,r.font=`900 ${h}px ui-rounded, system-ui, sans-serif`;r.textAlign="center",r.textBaseline="middle",r.fillText(a.name,c+256/2,l+128/2+3)})})}goodsAtlas(){const r=["carpet","gold","lamp","spice","plate","candy","cloth","copper","tea"];return this.tex.make(768,768,a=>{r.forEach((o,c)=>{const l=c%3*256,h=Math.floor(c/3)*256;a.save(),a.translate(l,h);const f=a.createLinearGradient(0,0,0,256);f.addColorStop(0,"#f6e2bf"),f.addColorStop(1,"#c9a27a"),a.fillStyle=f,a.fillRect(0,0,256,256);const u=d=>Math.abs(Math.sin(c*13.7+d*7.1));if(o==="carpet")for(let d=0;d<4;d++){const g=10+d*60;a.fillStyle=["#b8322c","#2f4f8a","#c98a2c","#6a2c5a"][d],a.fillRect(g,14,54,228),a.strokeStyle="#f2d8a0",a.lineWidth=3,a.strokeRect(g+6,22,42,212),a.beginPath(),a.moveTo(g+27,40),a.lineTo(g+46,256/2),a.lineTo(g+27,216),a.lineTo(g+8,256/2),a.closePath(),a.stroke()}if(o==="gold"){a.fillStyle="#3a1f3a",a.fillRect(10,10,236,236);for(let d=0;d<30;d++)a.fillStyle=d%3?"#ffd54a":"#fff3b0",a.beginPath(),a.arc(26+d%6*41,34+Math.floor(d/6)*46,8+u(d)*7,0,7),a.fill()}if(o==="lamp")for(let d=0;d<14;d++){const g=26+d%5*50,b=40+Math.floor(d/5)*72+d%2*12;a.strokeStyle="#b08a4a",a.lineWidth=2,a.beginPath(),a.moveTo(g,0),a.lineTo(g,b-20),a.stroke(),a.fillStyle=["#ff6b6b","#6bc0ff","#ffd54a","#7bdc9a","#d38bff"][d%5],a.beginPath(),a.ellipse(g,b,17,22,0,0,7),a.fill(),a.fillStyle="rgba(255,255,230,0.75)",a.beginPath(),a.arc(g-5,b-7,5,0,7),a.fill()}if(o==="spice")for(let d=0;d<10;d++){const g=26+d%5*50,b=d<5?242:146;a.fillStyle=["#d9461c","#f2b31c","#7a3a1c","#c7a01c","#9a2c1c","#5a7a2c"][d%6],a.beginPath(),a.moveTo(g-22,b),a.lineTo(g,b-60-u(d)*20),a.lineTo(g+22,b),a.fill()}if(o==="plate")for(let d=0;d<12;d++){const g=36+d%4*62,b=44+Math.floor(d/4)*80;a.fillStyle="#f7f3ea",a.beginPath(),a.arc(g,b,27,0,7),a.fill(),a.strokeStyle="#2a5fa8",a.lineWidth=5,a.beginPath(),a.arc(g,b,18,0,7),a.stroke(),a.fillStyle=d%2?"#c8302c":"#2a8a6a",a.beginPath(),a.arc(g,b,7,0,7),a.fill()}if(o==="candy")for(let d=0;d<36;d++)a.fillStyle=["#ff8fb1","#ffe08a","#a8e6cf","#ffffff","#c8a0e8"][d%5],a.fillRect(12+d%6*39,16+Math.floor(d/6)*39,33,33);if(o==="cloth")for(let d=0;d<9;d++)a.fillStyle=["#e85d75","#5d8be8","#e8c35d","#5de8a5","#b15de8","#e8865d","#ffffff","#2a8a8a","#c83a3a"][d],a.fillRect(8+d*27,8,23,240-u(d)*40);if(o==="copper")for(let d=0;d<8;d++){const g=40+d%4*58,b=d<4?90:200;a.fillStyle=d%2?"#c87533":"#e0954a",a.beginPath(),a.ellipse(g,b,24,30,0,0,7),a.fill(),a.fillRect(g-10,b-46,20,18)}if(o==="tea")for(let d=0;d<12;d++){const g=30+d%6*40,b=d<6?120:220;a.fillStyle=["#3a6a2a","#7a3a1c","#c8662d","#2a4a2a"][d%4],a.fillRect(g-15,b-60,30,60),a.fillStyle="#f2d8a0",a.fillRect(g-15,b-44,30,10)}a.strokeStyle="#6a4030",a.lineWidth=10,a.strokeRect(0,0,256,256),a.restore()})})}vault(){const t=this.T,e=14,n=new Ge,i=new Ge,r=this.tex.make(256,256,(h,f,u)=>{h.fillStyle="#f7f0e2",h.fillRect(0,0,f,u),h.strokeStyle="#2f6a8a",h.lineWidth=3;for(let d=0;d<2;d++){const g=64+d*128,b=128;h.beginPath();for(let m=0;m<8;m++){const p=m/8*Math.PI*2;h.moveTo(g,b),h.quadraticCurveTo(g+Math.cos(p+.4)*40,b+Math.sin(p+.4)*40,g+Math.cos(p)*54,b+Math.sin(p)*54)}h.stroke(),h.fillStyle="#c8402c",h.beginPath(),h.arc(g,b,10,0,7),h.fill(),h.strokeStyle="#d4a85a",h.beginPath(),h.arc(g,b,30,0,7),h.stroke(),h.strokeStyle="#2f6a8a"}h.fillStyle="#7aa35a";for(let d=0;d<16;d++)h.beginPath(),h.ellipse(d*16+8,14,4,8,.5,0,7),h.fill(),h.beginPath(),h.ellipse(d*16+8,u-14,4,8,-.5,0,7),h.fill();h.fillStyle="#c8402c",h.fillRect(0,0,f,4),h.fillRect(0,u-4,f,4)},!0),a=this.tex.make(256,32,(h,f,u)=>{for(let d=0;d<16;d++)h.fillStyle=d%2?"#b8322c":"#f6ecdc",h.fillRect(d*16,0,16,u);h.fillStyle="#2f6a8a",h.fillRect(0,0,f,3),h.fillRect(0,u-3,f,3)},!0),o=[];let c=0;for(let h=0;h<t.n;h++){const f=(h+1)%t.n;if(!this.street(h)||!this.street(f)||t.flags[h]&he)continue;const u=this.half(h)+Vn,d=this.half(f)+Vn,g=(b,m,p,v=0)=>{const _=Math.cos(p)*(m+v),x=Un+Math.sin(p)*(m*.5+v);return[t.x[b]-t.tz[b]*_,t.y[b]+x,t.z[b]+t.tx[b]*_]};for(let b=0;b<e;b++){const m=b/e*Math.PI,p=(b+1)/e*Math.PI;n.quad(g(h,u,p),g(f,d,p),g(f,d,m),g(h,u,m),[b/e,c/Dn],[b/e,(c+1)/Dn],[(b+1)/e,(c+1)/Dn],[(b+1)/e,c/Dn])}if(h%Dn===2)for(const b of[.62,Math.PI-.62]){const m=g(h,u,b,-.05),p=g(f+1,d,b,-.05),v=g(h,u,b+(b<1.5?.22:-.22),-.05),_=g(f+1,d,b+(b<1.5?.22:-.22),-.05);i.quad(m,p,_,v,[0,0],[1,0],[1,1],[0,1])}if(c++,h%Dn===0){const b=[];for(let p=0;p<=e;p++){const v=g(h,u,p/e*Math.PI,-.25);b.push(new P(v[0],v[1],v[2]))}const m=new El(new vu(b),24,.32,6,!1);o.push(m)}}const l=new J(n.build(),new Ut({map:r,side:ge}));if(this.scene.add(l),this.scene.add(new J(i.build(),new Ee({color:16773324,side:ge}))),o.length){const h=a;h.repeat.set(1,1);const f=new J(sn(o),new Ut({map:h}));this.scene.add(f)}}alleys(t){const e=new Ge,n=new Ge,i=new Ge,r=new Ge;this.signAtlas();for(const c of t){if(c.kind!=="alley")continue;const{i0:l,i1:h,side:f}=c,u=this.half(l)+Vn,d=this.half(h)+Vn,g=this.V(l,f*u),b=this.V(h,f*d),m=new P(-this.T.tz[l]*f,0,this.T.tx[l]*f),p=g.clone().addScaledVector(m,If),v=b.clone().addScaledVector(m,If),_=(A,y=0)=>[A.x,A.y+y,A.z];e.quad(_(g,-.02),_(b,-.02),_(v,-.02),_(p,-.02),[0,0],[1,0],[1,3],[0,3]);const x=(A,y,M)=>{const S=[_(A),_(y),_(y,Un),_(A,Un)];M?n.quad(S[1],S[0],S[3],S[2],[0,0],[3,0],[3,1],[0,1]):n.quad(S[0],S[1],S[2],S[3],[0,0],[3,0],[3,1],[0,1])};x(g,p,f>0),x(b,v,f<0),Math.floor(this.rnd()*Sa.length);const C=[_(p),_(v),_(v,Un),_(p,Un)];f>0?i.quad(C[0],C[1],C[2],C[3],[0,0],[1,0],[1,1],[0,1]):i.quad(C[1],C[0],C[3],C[2],[0,0],[1,0],[1,1],[0,1]);const w=(A,y)=>A.clone().add(y).multiplyScalar(.5),R=8;for(let A=0;A<R;A++){const y=A/R*Math.PI,M=(A+1)/R*Math.PI,S=(D,U,N)=>{const z=w(D,U),F=D.distanceTo(U)/2,k=U.clone().sub(D).normalize();return[z.x+k.x*Math.cos(N)*F,z.y+Un+Math.sin(N)*F*.6,z.z+k.z*Math.cos(N)*F]};r.quad(S(g,b,M),S(p,v,M),S(p,v,y),S(g,b,y),[A/R,0],[A/R,3],[(A+1)/R,3],[(A+1)/R,0])}this.lampPos.push({p:w(g,v).add(new P(0,3.6,0)),c:16766282})}const a=this.tex.make(512,128,(c,l,h)=>{for(let f=0;f<3;f++){const u=f*170+4;c.fillStyle="#f1e7d6",c.fillRect(u,0,166,h),c.fillStyle=["#9e2b25","#1f4f8a","#2d6a4f"][f],c.fillRect(u+10,6,146,20),c.fillStyle="#4a2a1c",c.fillRect(u+14,34,138,80),c.fillStyle="rgba(255,214,150,0.35)",c.fillRect(u+14,34,138,30)}c.fillStyle="#d9ccb5";for(let f=0;f<4;f++)c.fillRect(f*170-4,0,10,h)},!0),o=(c,l)=>{const h=new J(c.build(),l);h.receiveShadow=!0,this.scene.add(h)};o(e,new Ut({map:this.marble()})),o(n,new Ut({map:a,side:ge})),o(i,new Ut({map:a,emissive:4206624})),o(r,new Ut({color:15985368,side:ge}))}halls(){const t=this.T,e=[];let n=-1;for(let l=0;l<t.n;l++){const h=t.flags[l]&ws;h&&n<0&&(n=l),!h&&n>=0&&(e.push([n,l-1]),n=-1)}const i=this.tex.make(256,256,(l,h,f)=>{l.fillStyle="#ebe0cc",l.fillRect(0,0,h,f),l.strokeStyle="#d2c3a8",l.lineWidth=3;for(let u=0;u<8;u++)for(let d=0;d<4;d++)l.strokeRect(d*64+u%2*32,u*32,64,32);l.fillStyle="#8a5a3a",hi(l,84,90,88,150,44),l.fill(),l.fillStyle="#f6d9a0",hi(l,94,100,68,70,34),l.fill()},!0),r=new Ut({map:i}),a=new Ut({color:14734008}),o=this.tex.make(256,256,(l,h,f)=>{l.fillStyle="#f8f2e6",l.fillRect(0,0,h,f),l.strokeStyle="#2f6a8a",l.lineWidth=5,l.beginPath(),l.arc(h/2,f/2,100,0,7),l.stroke(),l.strokeStyle="#c8402c",l.lineWidth=3;for(let u=0;u<12;u++){const d=u/12*Math.PI*2;l.beginPath(),l.moveTo(h/2+Math.cos(d)*40,f/2+Math.sin(d)*40),l.lineTo(h/2+Math.cos(d)*92,f/2+Math.sin(d)*92),l.stroke()}}),c=new Ut({map:o,emissive:5260342,side:ge});for(const[l,h]of e){const f=this.track.point(l*(this.track.L/t.n),0),u=this.track.point(h*(this.track.L/t.n),0),d=f.clone().add(u).multiplyScalar(.5),g=f.distanceTo(u)+8,b=t.w[l]+2*12.5,m=9.5,p=Math.atan2(u.z-f.z,u.x-f.x),v=new Zt;v.position.set(d.x,Math.min(f.y,u.y)-.05,d.z),v.rotation.y=-p;const _=new J(new qe(g,b),new Ut({map:this.marble("#e8dcc6","#cdbd9f")}));_.rotation.x=-Math.PI/2,_.position.y=-.04,_.receiveShadow=!0,v.add(_);const x=(M,S,D,U,N)=>{const z=new _r;if(z.moveTo(-M/2,0),z.lineTo(M/2,0),z.lineTo(M/2,m),z.lineTo(-M/2,m),z.lineTo(-M/2,0),N>0){const X=new Ha;X.moveTo(-N/2,0),X.lineTo(N/2,0),X.lineTo(N/2,4.6),X.absarc(0,4.6,N/2,0,Math.PI,!1),X.lineTo(-N/2,0),z.holes.push(X)}const F=new Rs(z,{depth:1.2,bevelEnabled:!1});F.translate(0,0,-.6);const k=F.attributes.uv;for(let X=0;X<k.count;X++)k.setXY(X,k.getX(X)/8,k.getY(X)/8);const H=new J(F,r);H.position.set(S,0,D),H.rotation.y=U,H.receiveShadow=!0,v.add(H)};x(g,0,-b/2,0,0),x(g,0,b/2,0,0),x(b+1.2,-g/2,0,Math.PI/2,t.w[l]+3.8),x(b+1.2,g/2,0,Math.PI/2,t.w[h]+3.8);const C=Math.max(2,Math.round(g/10)),w=3,R=g/C,A=b/w;for(let M=1;M<C;M++)for(const S of[-b/2+A,b/2-A]){const D=new J(new Te(1.4,m,1.4),a);D.position.set(-g/2+M*R,m/2,S),D.castShadow=!0,v.add(D)}for(let M=0;M<C;M++)for(let S=0;S<w;S++){const D=Math.min(R,A)/2,U=new J(new Me(D,18,9,0,Math.PI*2,0,Math.PI/2),c);U.position.set(-g/2+(M+.5)*R,m,-b/2+(S+.5)*A),v.add(U);const N=new J(new Gr(D*.2,12),new Ee({color:16774876}));N.rotation.x=Math.PI/2,N.position.set(U.position.x,m+D-.05,U.position.z),v.add(N);const z=new J(new _n(D,.2,6,24),Ot(12071468));z.rotation.x=Math.PI/2,z.position.copy(U.position),v.add(z)}const y=new J(new qe(g,b),new Ut({map:o,color:15985368,emissive:6970956,side:ge}));y.material.map=o.clone(),y.material.map.wrapS=y.material.map.wrapT=ki,y.material.map.repeat.set(C,w),y.rotation.x=Math.PI/2,y.position.y=m,v.add(y);for(let M=0;M<12;M++){const S=M%2?1:-1,D=-g/2+4+M/12*(g-8),U=S*(t.w[l]/2+6.5+M%3*1.6),N=new Zt;for(let z=0;z<4;z++){const F=new J(new Te(2.6,.22,1.8),Ot([12071468,3100554,13208108,6958170,2783834][(M+z)%5]));F.position.y=.11+z*.22,F.rotation.y=z*.15,N.add(F)}N.position.set(D,0,U),v.add(N)}this.scene.add(v)}}han(){const t=this.T;let e=1e9,n=-1e9,i=1e9,r=-1e9,a=1e9;for(let k=0;k<t.n;k++)t.flags[k]&bn&&(e=Math.min(e,t.x[k]),n=Math.max(n,t.x[k]),i=Math.min(i,t.z[k]),r=Math.max(r,t.z[k]),t.flags[k]&he||(a=Math.min(a,t.y[k])));if(e>n)return;const o=11,c=e-o,l=n+o,h=i-o,f=r+2,u=(c+l)/2,d=(h+f)/2,g=l-c,b=f-h,m=new Zt;m.position.set(u,a-.05,d);const p=new J(new qe(g,b),new Ut({map:this.marble("#ddd2bf","#bfb39c")}));p.rotation.x=-Math.PI/2,p.receiveShadow=!0,m.add(p);const v=this.tex.make(512,256,(k,H,X)=>{k.fillStyle="#e9dcc4",k.fillRect(0,0,H,X),k.fillStyle="#c45a3a",k.fillRect(0,118,H,10),k.fillStyle="#b14a2e",k.fillRect(0,0,H,14);for(let nt=0;nt<4;nt++){const $=nt*128+64;k.fillStyle="#4a2e22",k.beginPath(),k.moveTo($-40,256),k.lineTo($-40,186),k.quadraticCurveTo($-40,140,$,132),k.quadraticCurveTo($+40,140,$+40,186),k.lineTo($+40,256),k.fill(),k.strokeStyle="#f6ecdc",k.lineWidth=6,k.stroke(),k.fillStyle="#3a2a24",k.beginPath(),k.moveTo($-34,110),k.lineTo($-34,60),k.quadraticCurveTo($-34,26,$,22),k.quadraticCurveTo($+34,26,$+34,60),k.lineTo($+34,110),k.fill(),k.strokeStyle="#b8322c",k.lineWidth=5,k.stroke()}},!0),_=12,x=new Ut({map:v}),C=(k,H,X,nt,$)=>{const St=new _r;St.moveTo(-k/2,0),St.lineTo(k/2,0),St.lineTo(k/2,_),St.lineTo(-k/2,_),St.lineTo(-k/2,0);for(const st of $){const vt=new Ha,Dt=8;vt.moveTo(st-Dt,0),vt.lineTo(st+Dt,0),vt.lineTo(st+Dt,5),vt.absarc(st,5,Dt,0,Math.PI,!1),vt.lineTo(st-Dt,0),St.holes.push(vt)}const Ht=new Rs(St,{depth:1.5,bevelEnabled:!1});Ht.translate(0,0,-.75);const j=Ht.attributes.uv;for(let st=0;st<j.count;st++)j.setXY(st,(j.getX(st)+k/2)/16,j.getY(st)/_);const Q=new J(Ht,x);Q.position.set(H,0,X),Q.rotation.y=nt,Q.receiveShadow=!0,m.add(Q);const dt=new J(new Te(k+2,.5,3),Ot(12868154));dt.position.set(H,_+.25,X),dt.rotation.y=nt,m.add(dt)},w=[];for(let k=0;k<t.n;k++)t.flags[k]&$i&&Math.abs(t.z[k]-f)<14&&t.x[k]>c-5&&t.x[k]<l+5&&w.push(t.x[k]-u);const R=w.filter((k,H)=>w.findIndex(X=>Math.abs(X-k)<6)===H);C(g,0,-b/2,0,[]),C(g,0,b/2,Math.PI,R.map(k=>-k)),C(b,-g/2,0,Math.PI/2,[]),C(b,g/2,0,-Math.PI/2,[]);let A=0,y=0,M=0;for(let k=0;k<t.n;k++)t.flags[k]&bn&&!(t.flags[k]&he)&&(A+=t.x[k],y+=t.z[k],M++);const S=new Zt,D=new J(new re(4.2,4.6,.9,8),Ot(15129800));D.position.y=.45,S.add(D);const U=new J(new re(3.8,3.8,.1,8),new Ut({color:7124714,emissive:1718874}));U.position.y=.9,S.add(U);for(let k=0;k<8;k++){const H=k/8*Math.PI*2,X=new J(new re(.22,.25,4.2,8),Ot(15920352));X.position.set(Math.cos(H)*3.6,3,Math.sin(H)*3.6),S.add(X)}const N=new J(new Ve(5.2,2.4,8),Ot(8031386));N.position.y=6.3,S.add(N);const z=new J(new Me(1.4,12,6,0,Math.PI*2,0,Math.PI/2),Ot(8031386));z.position.y=7.4,S.add(z);const F=new J(new Ve(.18,1.2,6),Ot(15909198));F.position.y=9.2,S.add(F),S.position.set(A/Math.max(1,M)-u+4,0,y/Math.max(1,M)-d-6),S.traverse(k=>{k.isMesh&&(k.castShadow=!0)}),m.add(S);for(const[k,H]of[[-g/2+5,-b/2+5],[g/2-5,-b/2+5]]){const X=new J(new re(.45,.7,7,8),Ot(9071194));X.position.set(k,3.5,H),m.add(X);for(let nt=0;nt<4;nt++){const $=new J(new ao(3.4,0),new Ut({color:[6273139,7127674,5220458][nt%3],flatShading:!0}));$.position.set(k+Math.cos(nt*2)*2.2,8+nt%2*1.5,H+Math.sin(nt*2)*2.2),$.castShadow=!0,m.add($)}}this.scene.add(m)}gates(){const t=this.T,e=this.tex.make(512,128,(i,r,a)=>{i.fillStyle="#1f5a3a",hi(i,4,4,r-8,a-8,20),i.fill(),i.strokeStyle="#e6c15a",i.lineWidth=6,hi(i,14,14,r-28,a-28,14),i.stroke(),i.fillStyle="#f2d06a",i.font="900 56px ui-rounded, system-ui, sans-serif",i.textAlign="center",i.textBaseline="middle",i.fillText("KAPALIÇARŞI",r/2,a/2+3)});let n=-99;for(let i=0;i<t.n;i++){if(!(t.flags[i]&$i)||i-n<30)continue;n=i;const r=new Zt,a=t.w[i]/2+1.9,o=a+Vn+1.2,c=Un+5.5,l=new _r;l.moveTo(-o,-.2),l.lineTo(-a,-.2),l.lineTo(-a,4.4),l.absarc(0,4.4,a,Math.PI,0,!0),l.lineTo(a,-.2),l.lineTo(o,-.2),l.lineTo(o,c),l.lineTo(-o,c),l.lineTo(-o,-.2);const h=new Rs(l,{depth:1.6,bevelEnabled:!1});h.translate(0,0,-.8),r.add(new J(h,new Ut({color:15524040})));for(let f=0;f<15;f++){const u=Math.PI-f/14*Math.PI,d=new J(new Te(.85,.75,1.7),Ot(f%2?12071468:16182492));d.position.set(Math.cos(u)*(a+.38),4.4+Math.sin(u)*(a+.38),0),d.rotation.z=u-Math.PI/2,r.add(d)}for(const f of[-1,1]){const u=new J(new qe(7,1.75),new Ee({map:e,transparent:!0}));u.position.set(0,c-1.5,f*.82),f<0&&(u.rotation.y=Math.PI),r.add(u)}r.position.set(t.x[i],t.y[i],t.z[i]),r.rotation.y=-Math.atan2(t.tz[i],t.tx[i])+Math.PI/2,this.scene.add(r)}}streetLanterns(){const t=this.T,e=[],n=[];for(let l=Dn;l<t.n;l+=Dn*2){if(!this.street(l)||t.flags[l]&he)continue;const h=Un+(this.half(l)+Vn)*.5,f=this.V(l,0,h-2.6);e.push(f),n.push(f.x,f.y+.7,f.z,f.x,t.y[l]+h-.2,f.z)}const i=new Le(new re(.42,.3,.9,6),new Ut({color:3811872}),e.length),r=new Le(new re(.36,.26,.8,6),new Ee({color:16769696}),e.length),a=new Le(new Ve(.5,.45,6),new Ut({color:13148506}),e.length),o=new kt;e.forEach((l,h)=>{o.makeTranslation(l.x,l.y,l.z),i.setMatrixAt(h,o),r.setMatrixAt(h,o),o.makeTranslation(l.x,l.y+.65,l.z),a.setMatrixAt(h,o)}),r.material.transparent=!0,r.material.opacity=.95,this.scene.add(r,a);const c=new xe;c.setAttribute("position",new te(n,3)),this.scene.add(new Ir(c,new Os({color:3811872})))}goodsMeshes(){if(this.lampPos.length){const n=new Me(.28,10,8);n.scale(1,1.25,1);const i=new Map;for(const c of this.lampPos)(i.get(c.c)||i.set(c.c,[]).get(c.c)).push(c.p);const r=new kt;for(const[c,l]of i){const h=new Le(n,new Ee({color:c}),l.length);l.forEach((f,u)=>{r.makeTranslation(f.x,f.y,f.z),h.setMatrixAt(u,r)}),this.scene.add(h)}const a=[];for(const c of this.lampPos)a.push(c.p.x,c.p.y+.3,c.p.z,c.p.x,c.p.y+1.1,c.p.z);const o=new xe;o.setAttribute("position",new te(a,3)),this.scene.add(new Ir(o,new Os({color:11569738})))}if(this.platePos.length){const n=new re(.28,.2,.06,14),i=new Le(n,new Ut({map:this.tex.make(64,64,r=>{r.fillStyle="#f7f3ea",r.fillRect(0,0,64,64),r.strokeStyle="#2a5fa8",r.lineWidth=6,r.beginPath(),r.arc(32,32,20,0,7),r.stroke(),r.fillStyle="#c8302c",r.beginPath(),r.arc(32,32,8,0,7),r.fill()})}),this.platePos.length);this.platePos.forEach((r,a)=>i.setMatrixAt(a,r)),this.scene.add(i)}if(this.sackPos.length){const n=sn([(a=>(a.translate(0,.35,0),a))(new re(.32,.38,.7,10)),(a=>(a.translate(0,.78,0),a))(new Ve(.33,.3,10))]),i=new Le(n,new Ut({color:16777215}),this.sackPos.length),r=new ct;this.sackPos.forEach((a,o)=>{i.setMatrixAt(o,a.m),i.setColorAt(o,r.setHex(a.c))}),i.castShadow=!0,this.scene.add(i)}const t=this.tex.make(512,256,n=>{["#b8322c","#2f4f8a","#c98a2c","#6a2c5a","#2a7a5a","#d2553a"].forEach((i,r)=>{const a=r%3*170+4,o=Math.floor(r/3)*128+4,c=162,l=120;n.fillStyle=i,n.fillRect(a,o,c,l),n.strokeStyle="#f2d8a0",n.lineWidth=6,n.strokeRect(a+8,o+8,c-16,l-16),n.fillStyle="#f2d8a0",n.beginPath(),n.moveTo(a+c/2,o+22),n.lineTo(a+c-30,o+l/2),n.lineTo(a+c/2,o+l-22),n.lineTo(a+30,o+l/2),n.closePath(),n.fill(),n.fillStyle=i,n.beginPath(),n.arc(a+c/2,o+l/2,16,0,7),n.fill()})});this.hang.p.length&&this.scene.add(new J(this.hang.build(),new Ut({map:t,side:ge})));const e=new Map;this.boxes.forEach((n,i)=>{const r=this.boxCols[i];(e.get(r)||e.set(r,[]).get(r)).push(n)});for(const[n,i]of e){const r=new J(sn(i),new Ut({color:n}));r.castShadow=!this.mobile,r.receiveShadow=!0,this.scene.add(r)}}shoppers(){const t=this.T,e=[];for(let l=0;l<t.n;l+=this.mobile?8:5){const h=t.flags[l];if(h&he)continue;const f=h&(ws|bn);for(const u of[-1,1]){if((l/5|0)%3===(u>0?0:1))continue;const d=u*(this.half(l)+(f?3+l%5:1)),g=this.P(l,d,0);e.push({p:new P(g[0],g[1],g[2]),yaw:Math.atan2(-t.tx[l]*u,t.tz[l]*u),k:(l+(u>0?1:0))%3})}}const n=new Me(.36,8,5);n.scale(.85,1,.75),n.translate(0,.45,0);const i=new Me(.26,7,5);i.translate(0,.98,0);const r=[-1,1].map(l=>{const h=new Ve(.09,.2,4);return h.translate(0,1.22,l*.15),h}),a=sn([n,i,...r]),o=sn([n.clone(),i.clone(),(l=>(l.rotateZ(-Math.PI/2),l.translate(.3,.95,0),l))(new Ve(.07,.25,6))]),c=l=>{const h=new Ut({color:l});return h.onBeforeCompile=f=>{f.uniforms.uTime=this.uTime,f.uniforms.uPlayer=this.uPlayer,f.vertexShader=f.vertexShader.replace("#include <common>",`#include <common>
uniform float uTime; uniform vec3 uPlayer;`).replace("#include <begin_vertex>",`#include <begin_vertex>
float ph = instanceMatrix[3].x * 0.71 + instanceMatrix[3].z * 1.31; float cheer = 1.0 - smoothstep(8.0, 26.0, distance(instanceMatrix[3].xz, uPlayer.xz));
transformed.y += abs(sin(uTime * (4.0 + cheer * 5.0) + ph)) * (0.12 + cheer * 0.5);`)},h};[[o,16777215],[a,15967834],[a,11117469]].forEach(([l,h],f)=>{const u=e.filter(m=>m.k===f),d=new Le(l,c(h),u.length),g=new kt,b=new We;u.forEach((m,p)=>{b.setFromAxisAngle(new P(0,1,0),-m.yaw),g.compose(m.p,b,new P(1,1,1)),d.setMatrixAt(p,g)}),d.castShadow=!this.mobile,this.scene.add(d)})}}class U_{constructor(t,e=900){this.head=0,this.n=e,this.pos=new Float32Array(e*3),this.vel=new Float32Array(e*3),this.col=new Float32Array(e*4),this.life=new Float32Array(e),this.max=new Float32Array(e).fill(1),this.size=new Float32Array(e),this.grav=new Float32Array(e);const n=this.g=new xe;n.setAttribute("position",new be(this.pos,3).setUsage(ts)),n.setAttribute("color",new be(this.col,4).setUsage(ts)),n.setAttribute("size",new be(this.size,1).setUsage(ts));const i=new rn({transparent:!0,depthWrite:!1,uniforms:{scale:{value:600}},vertexShader:"attribute float size; attribute vec4 color; varying vec4 vC; uniform float scale; void main(){ vC = color; vec4 mv = modelViewMatrix * vec4(position,1.0); gl_PointSize = size * scale / -mv.z; gl_Position = projectionMatrix * mv; }",fragmentShader:"varying vec4 vC; void main(){ vec2 p = gl_PointCoord - 0.5; float d = length(p); if (d > 0.5) discard; float a = smoothstep(0.5, 0.25, d); gl_FragColor = vec4(vC.rgb, vC.a * a); }"});this.points=new xu(n,i),this.points.frustumCulled=!1,t.add(this.points)}setScale(t){this.points.material.uniforms.scale.value=t*.9}emit(t,e,n,i,r,a,o,c,l,h,f=0){const u=this.head;this.head=(this.head+1)%this.n,this.pos.set([t,e,n],u*3),this.vel.set([i,r,a],u*3),this.col.set([o.r,o.g,o.b,c],u*4),this.life[u]=h,this.max[u]=h,this.size[u]=l,this.grav[u]=f}update(t){for(let e=0;e<this.n;e++){if(this.life[e]<=0){this.size[e]=0;continue}this.life[e]-=t;const n=e*3;this.vel[n+1]-=this.grav[e]*t,this.pos[n]+=this.vel[n]*t,this.pos[n+1]+=this.vel[n+1]*t,this.pos[n+2]+=this.vel[n+2]*t;const i=Math.max(0,this.life[e]/this.max[e]);this.col[e*4+3]=Math.min(this.col[e*4+3],i*1.2),this.life[e]<=0&&(this.size[e]=0)}this.g.attributes.position.needsUpdate=!0,this.g.attributes.color.needsUpdate=!0,this.g.attributes.size.needsUpdate=!0}}class N_{constructor(t){this.c={gas:0,brake:0,steer:0,drift:!1,item:!1},this.touch=!1,this.onKey=null,this.keys=new Set,this.kSteer=0,this.tSteer=0,this.steerId=null,this.steerX0=0,this.tDrift=!1,this.tItem=!1,this.tBrake=!1,this.dTap=!1,this.iTap=!1,this.gpPrev=[],addEventListener("keydown",o=>{const c=o.key.toLowerCase();this.keys.has(c)||(this.onKey?.(c),(c===" "||c==="shift")&&(this.dTap=!0),["e","enter","control","f"].includes(c)&&(this.iTap=!0)),this.keys.add(c),["arrowup","arrowdown","arrowleft","arrowright"," "].includes(c)&&o.preventDefault()}),addEventListener("keyup",o=>this.keys.delete(o.key.toLowerCase())),addEventListener("blur",()=>this.keys.clear());const e=t.querySelector("#tSteer"),n=t.querySelector("#tKnob"),i=()=>Math.min(innerWidth*.13,72);e.addEventListener("pointerdown",o=>{this.touch=!0,this.steerId=o.pointerId,this.steerX0=o.clientX,e.setPointerCapture(o.pointerId),this.tSteer=0,n.style.left=o.clientX-e.getBoundingClientRect().left+"px",n.style.top=o.clientY-e.getBoundingClientRect().top+"px",n.classList.add("on"),o.preventDefault()}),e.addEventListener("pointermove",o=>{if(o.pointerId!==this.steerId)return;let c=o.clientX-this.steerX0;const l=i();Math.abs(c)>l*1.4&&(this.steerX0=o.clientX-Math.sign(c)*l*1.4,c=o.clientX-this.steerX0);const h=Math.max(-1,Math.min(1,c/l)),f=Math.max(0,Math.abs(h)-.06)/.94;this.tSteer=Math.sign(h)*Math.pow(f,1.35),n.style.setProperty("--dx",h*40+"px")});const r=o=>{o.pointerId===this.steerId&&(this.steerId=null,this.tSteer=0,n.classList.remove("on"),n.style.setProperty("--dx","0px"))};e.addEventListener("pointerup",r),e.addEventListener("pointercancel",r);const a=(o,c)=>{const l=t.querySelector(o);l.addEventListener("pointerdown",f=>{this.touch=!0,c(!0),l.classList.add("on"),l.setPointerCapture(f.pointerId),f.preventDefault(),f.stopPropagation()});const h=()=>{c(!1),l.classList.remove("on")};l.addEventListener("pointerup",h),l.addEventListener("pointercancel",h),l.addEventListener("lostpointercapture",h)};a("#tDrift",o=>{this.tDrift=o,o&&(this.dTap=!0)}),a("#tItem",o=>{this.tItem=o,o&&(this.iTap=!0)}),a("#tBrake",o=>this.tBrake=o)}has(...t){return t.some(e=>this.keys.has(e))}update(t){const e=this.c,n=(this.has("d","arrowright")?1:0)-(this.has("a","q","arrowleft")?1:0);this.kSteer+=(n-this.kSteer)*Math.min(1,t*(n!==0?9:14));let i=this.steerId!==null?this.tSteer:this.kSteer,r=this.has("w","z","arrowup")||this.touch&&!this.tBrake?1:0,a=this.has("s","arrowdown")||this.tBrake?1:0,o=this.has(" ","shift")||this.tDrift,c=this.has("e","enter","control","f")||this.tItem;const l=navigator.getGamepads?[...navigator.getGamepads()].find(h=>h):null;if(l){const h=l.axes[0]??0;Math.abs(h)>.15&&(i=h),l.buttons[14]?.pressed&&(i=-1),l.buttons[15]?.pressed&&(i=1),r=Math.max(r,l.buttons[0]?.pressed?1:0,l.buttons[7]?.value??0),a=Math.max(a,l.buttons[2]?.pressed?1:0,l.buttons[6]?.value??0),o=o||!!l.buttons[5]?.pressed,c=c||!!l.buttons[4]?.pressed||!!l.buttons[1]?.pressed;const f=!!l.buttons[9]?.pressed;f&&!this.gpPrev[9]&&this.onKey?.("escape"),this.gpPrev[9]=f}e.steer=i,e.gas=r,e.brake=a,e.drift=o||this.dTap,e.item=c||this.iTap,this.dTap=!1,this.iTap=!1}}class k_{constructor(){this.ctx=null,this.muted=!1,this.musicOn=!0,this.nextNote=0,this.step=0,this.playing=!1}start(){if(this.ctx){this.ctx.state==="suspended"&&this.ctx.resume();return}const t=window.AudioContext||window.webkitAudioContext,e=this.ctx=new t;this.master=e.createGain(),this.master.gain.value=this.muted?0:.8,this.master.connect(e.destination),this.sfx=e.createGain(),this.sfx.gain.value=.7,this.sfx.connect(this.master),this.musicG=e.createGain(),this.musicG.gain.value=.22,this.musicG.connect(this.master),this.noise=e.createBuffer(1,e.sampleRate,e.sampleRate);const n=this.noise.getChannelData(0);for(let f=0;f<n.length;f++)n[f]=Math.random()*2-1;const i=e.createOscillator(),r=e.createOscillator(),a=e.createGain(),o=e.createBiquadFilter();i.type="sawtooth",r.type="square",o.type="lowpass",o.frequency.value=600,a.gain.value=0,i.connect(o),r.connect(o),o.connect(a),a.connect(this.sfx),i.start(),r.start(),this.eng={o1:i,o2:r,g:a,f:o};const c=e.createBufferSource();c.buffer=this.noise,c.loop=!0;const l=e.createBiquadFilter();l.type="bandpass",l.frequency.value=1800,l.Q.value=3;const h=e.createGain();h.gain.value=0,c.connect(l),l.connect(h),h.connect(this.sfx),c.start(),this.skid={g:h,f:l}}setMuted(t){this.muted=t,this.ctx&&this.master.gain.setTargetAtTime(t?0:.8,this.ctx.currentTime,.05)}engine(t,e,n,i,r){if(!this.ctx||!this.eng)return;const a=this.ctx.currentTime,o=this.eng,c=55+Math.abs(t)*4.2+(i?40:0);o.o1.frequency.setTargetAtTime(c,a,.05),o.o2.frequency.setTargetAtTime(c*.5,a,.05),o.f.frequency.setTargetAtTime(400+e*900+(i?700:0),a,.08),o.g.gain.setTargetAtTime(r?.05+e*.05:0,a,.1),this.skid.g.gain.setTargetAtTime(r&&n?.07:0,a,.05),this.skid.f.frequency.setTargetAtTime(1500+Math.abs(t)*20,a,.1)}tone(t,e,n="square",i=.2,r=0,a=0){if(!this.ctx)return;const o=this.ctx.currentTime+a,c=this.ctx.createOscillator(),l=this.ctx.createGain();c.type=n,c.frequency.setValueAtTime(t,o),r&&c.frequency.exponentialRampToValueAtTime(Math.max(30,t*r),o+e),l.gain.setValueAtTime(i,o),l.gain.exponentialRampToValueAtTime(.001,o+e),c.connect(l),l.connect(this.sfx),c.start(o),c.stop(o+e+.02)}burst(t,e,n=.3,i=1,r=0){if(!this.ctx)return;const a=this.ctx.currentTime+r,o=this.ctx.createBufferSource(),c=this.ctx.createBiquadFilter(),l=this.ctx.createGain();o.buffer=this.noise,c.type="bandpass",c.frequency.value=e,c.Q.value=i,l.gain.setValueAtTime(n,a),l.gain.exponentialRampToValueAtTime(.001,a+t),o.connect(c),c.connect(l),l.connect(this.sfx),o.start(a,Math.random()*.5),o.stop(a+t+.02)}simit(){this.tone(988,.08,"triangle",.18),this.tone(1318,.12,"triangle",.16,0,.06)}box(){[523,659,784,1046].forEach((t,e)=>this.tone(t,.09,"triangle",.12,0,e*.04))}boost(t){this.burst(.5,900+t*300,.35,.8),this.tone(220+t*110,.35,"sawtooth",.08,2.2)}horn(){if(!this.ctx)return;const t=this.ctx.currentTime;for(const e of[146.8,220]){const n=this.ctx.createOscillator(),i=this.ctx.createGain();n.type="sawtooth",n.frequency.value=e,i.gain.setValueAtTime(1e-4,t),i.gain.exponentialRampToValueAtTime(.12,t+.06),i.gain.setValueAtTime(.12,t+.7),i.gain.exponentialRampToValueAtTime(.001,t+.95),n.connect(i),i.connect(this.sfx),n.start(t),n.stop(t+1)}}meow(){if(!this.ctx)return;const t=this.ctx.currentTime,e=this.ctx.createOscillator(),n=this.ctx.createGain(),i=this.ctx.createBiquadFilter();e.type="sawtooth",e.frequency.setValueAtTime(520,t),e.frequency.linearRampToValueAtTime(780,t+.12),e.frequency.linearRampToValueAtTime(430,t+.38),i.type="bandpass",i.frequency.value=1300,i.Q.value=2,n.gain.setValueAtTime(1e-4,t),n.gain.exponentialRampToValueAtTime(.14,t+.05),n.gain.exponentialRampToValueAtTime(.001,t+.4),e.connect(i),i.connect(n),n.connect(this.sfx),e.start(t),e.stop(t+.42)}throwIt(){this.burst(.18,1400,.2,1.2),this.tone(500,.12,"triangle",.08,1.8)}rain(t){if(this.ctx){if(!this.rainG){const e=this.ctx.createBufferSource();e.buffer=this.noise,e.loop=!0;const n=this.ctx.createBiquadFilter();n.type="highpass",n.frequency.value=900,this.rainG=this.ctx.createGain(),this.rainG.gain.value=0,e.connect(n),n.connect(this.rainG),this.rainG.connect(this.sfx),e.start()}this.rainG.gain.setTargetAtTime(t*.11,this.ctx.currentTime,.3)}}thunder(){this.burst(2.2,90,.7,.4),this.burst(1.4,160,.4,.5,.15)}ready(){this.tone(1568,.06,"triangle",.1)}fail(){this.tone(180,.18,"square",.1,.6)}hop(){this.tone(300,.08,"triangle",.08,1.6)}hit(){this.burst(.35,300,.5,.7),this.tone(160,.4,"sawtooth",.12,.4)}wall(){this.burst(.15,200,.3,1)}land(){this.burst(.12,150,.25,1)}gull(){if(this.ctx)for(let t=0;t<2;t++){const e=this.ctx.currentTime+t*.16,n=this.ctx.createOscillator(),i=this.ctx.createGain();n.type="sawtooth",n.frequency.setValueAtTime(1500,e),n.frequency.exponentialRampToValueAtTime(900,e+.13),i.gain.setValueAtTime(1e-4,e),i.gain.exponentialRampToValueAtTime(.09,e+.02),i.gain.exponentialRampToValueAtTime(.001,e+.14),n.connect(i),i.connect(this.sfx),n.start(e),n.stop(e+.16)}}splash(){this.burst(.3,700,.3,.6)}shield(){[880,1108,1318].forEach((t,e)=>this.tone(t,.25,"sine",.1,0,e*.05))}block(){this.tone(1318,.2,"sine",.15,.5)}beep(t){this.tone(t?880:440,t?.5:.22,"square",.14)}lap(){[659,784,988].forEach((t,e)=>this.tone(t,.14,"square",.1,0,e*.09))}finish(t){(t?[523,659,784,1046,784,1046]:[523,494,440,392]).forEach((n,i)=>this.tone(n,.22,"square",.12,0,i*.14))}click(){this.tone(660,.05,"triangle",.1)}music(t){this.playing=t&&this.musicOn,this.ctx&&this.playing&&(this.nextNote=Math.max(this.nextNote,this.ctx.currentTime+.05))}tick(){if(!this.ctx||!this.playing)return;const t=138,e=60/t/2,n=[293.7,311.1,370,392,440,466.2,523.3,587.3],i=[0,2,3,4,3,2,1,0,4,5,4,3,2,3,2,1,0,2,3,4,6,5,4,3,4,3,2,1,2,1,0,-1],r=[0,0,4,4,3,3,0,0];for(;this.nextNote<this.ctx.currentTime+.2;){const a=this.nextNote-this.ctx.currentTime,o=this.step%32;i[o]>=0&&o%4!==3&&this.mnote(n[i[o]]*2,e*.9,"square",.05,a),o%4===0&&this.mnote(n[r[(this.step>>2)%8]]/2,e*3,"triangle",.12,a),o%4===0&&this.mdrum(a,90,.25),o%4===2&&this.mdrum(a,4e3,.04),o%8===4&&this.mdrum(a,1200,.12),this.nextNote+=e,this.step++}}mnote(t,e,n,i,r){const a=this.ctx.currentTime+r,o=this.ctx.createOscillator(),c=this.ctx.createGain();o.type=n,o.frequency.value=t,c.gain.setValueAtTime(i,a),c.gain.exponentialRampToValueAtTime(.001,a+e),o.connect(c),c.connect(this.musicG),o.start(a),o.stop(a+e+.02)}mdrum(t,e,n){const i=this.ctx.currentTime+t;if(e<200){const c=this.ctx.createOscillator(),l=this.ctx.createGain();c.frequency.setValueAtTime(140,i),c.frequency.exponentialRampToValueAtTime(45,i+.12),l.gain.setValueAtTime(n,i),l.gain.exponentialRampToValueAtTime(.001,i+.15),c.connect(l),l.connect(this.musicG),c.start(i),c.stop(i+.17);return}const r=this.ctx.createBufferSource(),a=this.ctx.createBiquadFilter(),o=this.ctx.createGain();r.buffer=this.noise,a.type="highpass",a.frequency.value=e,o.gain.setValueAtTime(n,i),o.gain.exponentialRampToValueAtTime(.001,i+.06),r.connect(a),a.connect(o),o.connect(this.musicG),r.start(i,Math.random()*.5),r.stop(i+.08)}}function ji(s){const t=document.createElement("canvas");t.width=t.height=128;const e=t.getContext("2d");return e.lineJoin=e.lineCap="round",s(e),t.toDataURL()}const pr={marti:ji(s=>{s.fillStyle="#c9d0d8",s.beginPath(),s.moveTo(20,50),s.quadraticCurveTo(45,20,64,58),s.quadraticCurveTo(83,20,108,50),s.quadraticCurveTo(84,44,64,72),s.quadraticCurveTo(44,44,20,50),s.fill(),s.fillStyle="#fff",s.beginPath(),s.ellipse(64,72,26,17,0,0,7),s.fill(),s.beginPath(),s.arc(86,62,12,0,7),s.fill(),s.fillStyle="#f2b84b",s.beginPath(),s.moveTo(96,60),s.lineTo(114,66),s.lineTo(96,68),s.fill(),s.fillStyle="#2b2833",s.beginPath(),s.arc(89,59,2.6,0,7),s.fill(),s.strokeStyle="#3c3a47",s.lineWidth=3,s.beginPath(),s.ellipse(64,72,26,17,0,0,7),s.stroke()}),cay:ji(s=>{s.fillStyle="#e57373",s.beginPath(),s.ellipse(64,108,38,9,0,0,7),s.fill(),s.fillStyle="rgba(255,255,255,.9)",s.beginPath(),s.moveTo(42,22),s.quadraticCurveTo(38,40,50,60),s.quadraticCurveTo(40,82,48,102),s.lineTo(80,102),s.quadraticCurveTo(88,82,78,60),s.quadraticCurveTo(90,40,86,22),s.closePath(),s.fill(),s.fillStyle="#c8662d",s.beginPath(),s.moveTo(45,36),s.quadraticCurveTo(43,46,52,60),s.quadraticCurveTo(43,82,50,99),s.lineTo(78,99),s.quadraticCurveTo(85,82,76,60),s.quadraticCurveTo(85,46,83,36),s.closePath(),s.fill(),s.strokeStyle="#3c3a47",s.lineWidth=3,s.beginPath(),s.moveTo(42,22),s.quadraticCurveTo(38,40,50,60),s.quadraticCurveTo(40,82,48,102),s.lineTo(80,102),s.quadraticCurveTo(88,82,78,60),s.quadraticCurveTo(90,40,86,22),s.stroke(),s.strokeStyle="rgba(255,255,255,.8)",s.lineWidth=3,s.beginPath(),s.moveTo(56,6),s.quadraticCurveTo(50,12,58,18),s.moveTo(72,4),s.quadraticCurveTo(66,10,74,16),s.stroke()}),nazar:ji(s=>{for(const[t,e]of[[52,"#2f6fb3"],[36,"#ffffff"],[24,"#7ec0f0"],[12,"#191e2d"]])s.fillStyle=e,s.beginPath(),s.arc(64,64,t,0,7),s.fill();s.fillStyle="rgba(255,255,255,.7)",s.beginPath(),s.ellipse(44,40,10,6,-.6,0,7),s.fill()}),turbo:ji(s=>{s.fillStyle="#f6a65a",s.beginPath(),s.moveTo(64,10),s.quadraticCurveTo(104,56,86,92),s.quadraticCurveTo(64,124,42,92),s.quadraticCurveTo(24,56,64,10),s.fill(),s.fillStyle="#f7d774",s.beginPath(),s.moveTo(64,40),s.quadraticCurveTo(86,70,76,92),s.quadraticCurveTo(64,108,52,92),s.quadraticCurveTo(42,70,64,40),s.fill(),s.fillStyle="#fff8ee",s.beginPath(),s.arc(64,90,9,0,7),s.fill()}),simit:ji(s=>{s.fillStyle="#e39a4c",s.beginPath(),s.arc(64,64,46,0,7),s.arc(64,64,18,0,7,!0),s.fill(),s.strokeStyle="#3c3a47",s.lineWidth=3,s.beginPath(),s.arc(64,64,46,0,7),s.stroke(),s.beginPath(),s.arc(64,64,18,0,7),s.stroke(),s.fillStyle="#fff3d6";for(let t=0;t<22;t++){const e=t*.9,n=26+t%3*7;s.beginPath(),s.ellipse(64+Math.cos(e)*n,64+Math.sin(e)*n,3.5,2,e,0,7),s.fill()}}),duduk:ji(s=>{s.fillStyle="#f7f6ff",s.fillRect(20,62,70,20),s.fillStyle="#2f4b6e",s.beginPath(),s.moveTo(12,82),s.lineTo(98,82),s.lineTo(88,100),s.lineTo(22,100),s.fill(),s.fillStyle="#f2c14e",s.fillRect(48,38,16,26),s.fillStyle="#3c3a47",s.fillRect(48,34,16,7),s.strokeStyle="#fff",s.lineWidth=6;for(let t=0;t<3;t++)s.beginPath(),s.arc(70,40,18+t*14,-1.1,-.2),s.stroke()}),kedi:ji(s=>{s.fillStyle="#f3a65a",s.beginPath(),s.moveTo(24,50),s.lineTo(34,14),s.lineTo(56,38),s.lineTo(72,38),s.lineTo(94,14),s.lineTo(104,50),s.quadraticCurveTo(110,108,64,110),s.quadraticCurveTo(18,108,24,50),s.fill(),s.strokeStyle="#3c3a47",s.lineWidth=3,s.stroke(),s.fillStyle="#2b2833",s.beginPath(),s.ellipse(48,66,6,9,0,0,7),s.ellipse(80,66,6,9,0,0,7),s.fill(),s.fillStyle="#f28fa0",s.beginPath(),s.moveTo(58,82),s.lineTo(70,82),s.lineTo(64,89),s.fill(),s.strokeStyle="#3c3a47",s.lineWidth=2;for(const t of[-1,1])for(const e of[-1,1])s.beginPath(),s.moveTo(64+t*12,88+e*3),s.lineTo(64+t*40,84+e*8),s.stroke()})},Nu={marti:"Martı",cay:"Çay",nazar:"Nazar",turbo:"Turbo",simit:"Simit",duduk:"Vapur düdüğü",kedi:"Kedi sürüsü"};class F_{constructor(t,e){this.cv=t,this.track=e,this.sx=1,this.ox=0,this.oz=0,this.c=t.getContext("2d");const n=e.T;let i=1e9,r=-1e9,a=1e9,o=-1e9;for(let b=0;b<n.n;b++)i=Math.min(i,n.x[b]),r=Math.max(r,n.x[b]),a=Math.min(a,n.z[b]),o=Math.max(o,n.z[b]);const c=t.width-20;this.sx=c/Math.max(r-i,o-a),this.ox=10-i*this.sx+(c-(r-i)*this.sx)/2,this.oz=10-a*this.sx+(c-(o-a)*this.sx)/2,this.bg=document.createElement("canvas"),this.bg.width=t.width,this.bg.height=t.height;const l=this.bg.getContext("2d");l.lineJoin=l.lineCap="round";const h=()=>{l.beginPath();for(let b=0;b<=n.n;b++){const m=b%n.n,[p,v]=this.p(n.x[m],n.z[m]);b?l.lineTo(p,v):l.moveTo(p,v)}};h(),l.strokeStyle="rgba(60,58,71,.45)",l.lineWidth=11,l.stroke(),h(),l.strokeStyle="#fff8ee",l.lineWidth=6,l.stroke();const[f,u]=this.p(n.tower.x,n.tower.z);l.fillStyle="#8da6c2",l.beginPath(),l.arc(f,u,5,0,7),l.fill();const[d,g]=this.p(n.x[0],n.z[0]);l.fillStyle="#3c3a47",l.fillRect(d-1.5,g-7,3,14)}p(t,e){return[t*this.sx+this.ox,e*this.sx+this.oz]}draw(t,e){const n=this.c;n.clearRect(0,0,this.cv.width,this.cv.height),n.drawImage(this.bg,0,0);for(const i of[...t].sort(r=>r===e?1:-1)){const[r,a]=this.p(i.pos.x,i.pos.z);n.fillStyle="#"+i.def.color.toString(16).padStart(6,"0"),n.strokeStyle=i===e?"#3c3a47":"#fff",n.lineWidth=i===e?3:2,n.beginPath(),n.arc(r,a,i===e?6.5:4.5,0,7),n.fill(),n.stroke()}}}class O_{constructor(t){this.el=t}show(t,e=""){const n=document.createElement("div");n.textContent=t,e&&(n.className=e),this.el.innerHTML="",this.el.appendChild(n)}}function ku(s){const t=Math.floor(s/60),e=s-t*60;return`${t}:${e<10?"0":""}${e.toFixed(2)}`}const Sr=3,pi=new URLSearchParams(location.search),z_=(()=>{try{return localStorage.getItem("bd.pist")}catch{return null}})(),En=(pi.get("pist")||z_||"galata")==="kc"?"kc":"galata",Qc={galata:"Galata Kulesi",kc:"Kapalıçarşı"},wn=matchMedia("(pointer: coarse)").matches||/Android|iPhone|iPad/i.test(navigator.userAgent),qt=s=>document.querySelector(s),es={get(s){try{return localStorage.getItem("bd."+s)}catch{return null}},set(s,t){try{localStorage.setItem("bd."+s,t)}catch{}}},tl=qt("#view");let yn;try{yn=new fx({canvas:tl,antialias:!wn,powerPreference:"high-performance"})}catch{throw qt("#ltxt").textContent="Bu cihazda 3B görüntü başlatılamadı.",new Error("webgl")}const wa=Math.min(devicePixelRatio,wn?1.5:2);yn.setPixelRatio(1);yn.shadowMap.enabled=!0;yn.shadowMap.type=Gf;yn.outputColorSpace=Ne;const wr=new g_(yn,wn?0:4),ke=new xl,oe=new Ye(70,1,.3,2e3);let Xa,An;En==="galata"?(ke.fog=new Oa(14264248,220,1400),Xa=new Kc(12832245,10127528,1.9),An=new Va(16764830,2.3)):(ke.background=new ct(5917252),ke.fog=new Oa(10126456,70,320),Xa=new Kc(16774112,9072742,2.5),An=new Va(16773340,1.5));ke.add(Xa);An.castShadow=!0;An.shadow.mapSize.set(wn?1024:2048,wn?1024:2048);Object.assign(An.shadow.camera,{left:-55,right:55,top:55,bottom:-55,near:1,far:400});An.shadow.bias=-8e-4;An.shadow.normalBias=.06;ke.add(An,An.target);const B_=En==="galata"?Ua:new P(.25,1,.15).normalize(),G_=qt("#loading .lbar i"),H_=qt("#lpct"),V_=qt("#ltxt");let Ta=0;const Wn=(s,t)=>{Ta=Math.max(Ta,s),G_.style.width=Ta*100+"%",H_.textContent=`%${Math.round(Ta*100)}`,t&&(V_.textContent=t)},_s=()=>new Promise(s=>requestAnimationFrame(()=>s(0))),li=new Ev;let ce,Fr,Ka,Fu=Uu,Ou={cats:30,vendors:[120,390,880,1290],gulls:24,ferries:!0};if(En==="galata"){Wn(.02,"Harita indiriliyor…");const s=await Ll.load("./",e=>Wn(.02+e*.38));Wn(.42,"Pist çiziliyor…"),await _s(),ce=new mf(s.H),ce.build(ke,li),Wn(.48,"Arazi ve sokaklar…"),await _s();const t=new f_(ke,s,ce,wn);await t.build((e,n)=>Wn(.5+n*.44,e)),Fr=t,Wn(.95,"Seyirciler yerleşiyor…"),await _s(),Ka=new m_(ke,ce,t,li,wn)}else{Wn(.1,"Çarşı kapıları açılıyor…"),await _s(),ce=new mf(I_());const s=li.make(256,256,(i,r,a)=>{i.fillStyle="#d6c8b4",i.fillRect(0,0,r,a),i.strokeStyle="#b3a48e",i.lineWidth=4;for(let o=0;o<4;o++)for(let c=0;c<4;c++)i.strokeRect(c*64+o%2*32,o*64,64,64);i.fillStyle="rgba(255,240,210,0.18)";for(let o=0;o<30;o++)i.fillRect(o*71%r,o*37%a,18,6);i.fillStyle="#e8d9bf",i.fillRect(r*.035,0,r*.02,a),i.fillRect(r*.945,0,r*.02,a)},!0),t=li.make(64,64,(i,r,a)=>{i.fillStyle="#9e2b25",i.fillRect(0,0,r,a),i.fillStyle="#e6c15a",i.fillRect(0,a/2-4,r,8),i.fillStyle="#1f3f6e",i.fillRect(r/2-6,0,12,a)},!0),e=li.make(256,64,(i,r,a)=>{i.fillStyle="#7a4a32",i.fillRect(0,0,r,a),["#c8302c","#2a5fa8","#e6a82c","#2a8a6a","#8a3a7a","#e8e0d0"].forEach((o,c)=>{i.fillStyle=o,i.fillRect(6+c*42,12,36,a-18),i.fillStyle="rgba(255,255,255,0.35)",i.fillRect(6+c*42,12+c%3*9,36,4)}),i.fillStyle="#e6c15a",i.fillRect(0,0,r,7)},!0);ce.build(ke,li,{road:s,curb:t,wall:e,rail:e,under:6965818}),Wn(.45,"Dükkânlar kuruluyor…"),await _s();const n=new D_(ke,ce,li,wn);Fr=n,Ka=n,Fu={boxes:[60,250,540,760,940,1150],simits:[[20,0,6],[120,3,6],[200,-2,4],[300,0,5],[360,-3,4],[420,0,4],[520,2,5],[620,-2,5],[690,3,5],[800,0,6],[880,-3,4],[1e3,2,5],[1080,-2,5],[1220,0,6]],pads:[{s0:150,s1:157,d:0,w:5},{s0:690,s1:697,d:0,w:6},{s0:990,s1:997,d:0,w:5},{s0:1180,s1:1187,d:2,w:5}]},Ou={cats:20,vendors:[100,360,600,880,1100],gulls:0,ferries:!1},Wn(.9,"Esnaf yerini alıyor…"),await _s()}const kn=new U_(ke,wn?600:1e3),zu=new v_(ke),Ct=new k_,Ps=new N_(qt("#ui")),xn=new O_(qt("#msg")),W_=new F_(qt("#mini"),ce);let $t="title",un=!1,qn=Math.max(0,Math.min(5,Number(es.get("char")??0)||0)),Tr=es.get("diff")||"normal";Ct.muted=es.get("mute")==="1";let Pe=[],Ya=[],Ft,Qi=null,mi=0,Er=0,Ar=0,mr=4,Ja=-9,Df=!1,el=!1;const q_=pi.has("auto"),Za=new C_(ke,ce,li,kn,{onPickup(s,t){s===Ft&&(t==="simit"?(Ct.simit(),s.simit===10&&xn.show("SİMİT DOLU!","t2")):Ct.box())},onUse(s,t){if(t==="marti"){tc(s)&&Ct.gull();return}if(t==="duduk"){tc(s)&&Ct.horn();return}if(t==="kedi"){Ct.meow();return}s===Ft&&(t==="nazar"&&(s.shieldT>0?Ct.shield():Ct.throwIt()),t==="turbo"&&Ct.boost(3),t==="cay"&&Ct.splash(),t==="simit"&&Ct.throwIt())},onTarget(s,t){s===Ft&&(xn.show(t==="marti"?"Martı geliyor!":"Dikkat, kediler!","bad"),t==="marti"&&Ct.gull())},onHit(s,t,e){tc(s)&&(t==="kedi"?Ct.meow():Ct.hit());const i={marti:["Martı saldırısı!",`Martı ${s.def.name}’i yakaladı!`],cay:["Çaya bastın!",`${s.def.name} çayda kaydı!`],simit:["Simit isabet!",`Simit ${s.def.name}’e çarptı!`],nazar:["Nazar değdi!",`Nazar ${s.def.name}’e değdi!`],duduk:["Vapur düdüğü!",`${s.def.name} düdükle savruldu!`],kedi:["Kedilere takıldın!",`${s.def.name} kedilere takıldı!`]}[t]||["Vuruldun!",`${s.def.name} vuruldu!`];s===Ft?xn.show(i[0],"bad"):e===Ft&&xn.show(i[1],"t1")},onBlock(s){s===Ft&&(Ct.block(),xn.show("Nazar korudu!","t1"))},onPad(s){s===Ft&&Ct.boost(2)}},Fu),tc=s=>s===Ft||s.pos.distanceTo(Ft.pos)<35,Bu=new __(ke,ce,Fr,Za,kn,wn,Ou),Tn=new M_(ke,An,Xa,Fr.skyMats,wn);Tn.onStart=()=>xn.show("Yağmur başladı!","t1");En==="kc"&&(Tn.onStart=null);Tn.onThunder=()=>Ct.thunder();function j_(){for(const r of Pe)ke.remove(r.model.root);Za.reset(),zu.reset(),Pe=[],Ya=[];const s=[0,1,2,3,4,5].filter(r=>r!==qn),t=[0,1,2,3,4,5],e=3,n=Tr==="kolay"?[.2,.3,.35,.4,.45]:Tr==="zor"?[.8,.85,.9,.95,1]:[.5,.55,.62,.68,.75];let i=0;for(const r of t){const a=r===e,o=a?qn:s[i],c=new A_(ce,o,a,X_),l=Math.floor(r/2),h=r%2?3.2:-3.2;c.place0(ce.L-8-l*7.5,h),c.model.root.traverse(u=>{u.isMesh&&(u.castShadow=!0)});const f=Hs[o].stats;c.stat={spd:(f[0]-3)/2,acc:(f[1]-3)/2,han:(f[2]-3)/2},ke.add(c.model.root),Pe.push(c),a?Ft=c:(Ya.push(new $c(c,ce,n[i])),i++)}pi.has("at")&&Ft.place0(Number(pi.get("at")),0),Qi=q_?new $c(Ft,ce,1):null,mi=0,Ar=0,mr=4,Ja=-9,el=!1,Tn.plan(),pi.has("rain")&&(Tn.startAt=.1),En==="kc"&&Tn.clear();for(const r of Pe)r.sync(0,0)}const X_={onBoost(s,t){s===Ft&&(Ct.boost(t),xn.show(["","TURBO!","SÜPER TURBO!","ULTRA TURBO!"][t],"t"+t))},onDriftFail(s,t){s===Ft&&(Ct.fail(),xn.show(t?"Geç kaldın!":"Erken!","bad"))},onDriftStart(s){s===Ft&&Ct.hop()},onLand(s,t){s===Ft&&t>5&&Ct.land(),Z_(s,t>9?14:6)},onWall(s){s===Ft&&Ct.wall()},onHit(){}},ar=new P,ec=new P;let Ea=70,Yi=!1,or=0,cr=0;function K_(s,t){if($t==="select"){const b=innerHeight<500,m=oe.aspect<1?11:b?8.6:7.2;oe.position.copy(Di).addScaledVector(nc,m).add(new P(0,1.9,0)).addScaledVector(new P(-nc.z,0,nc.x),oe.aspect>1.3?1.2:0),oe.lookAt(Di.x,Di.y+(b?1:2.2),Di.z),oe.fov=50,oe.updateProjectionMatrix(),Yi=!1,Nn&&(Nn.root.rotation.y=t*.6,Nn.root.position.y=.52+Math.abs(Math.sin(t*3))*.04,Nn.wheels.forEach(p=>p.rotation.z-=.05)),wr.mat.uniforms.speed.value=0;return}if($t==="title"&&En==="kc"){const b=t*9%ce.L,m=ce.point(b,0),p=ce.point(b+14,0);oe.position.set(m.x,m.y+3.4,m.z),oe.lookAt(p.x,p.y+2.2,p.z),oe.fov=62,oe.updateProjectionMatrix(),Yi=!1;return}if($t==="title"){const b=ce.T.tower,m=t*.06+2.2,p=oe.aspect<1?150/Math.max(.5,oe.aspect):150;oe.position.set(b.x+Math.cos(m)*p,b.y0+52+(p-150)*.25,b.z+Math.sin(m)*p),oe.lookAt(b.x,b.y0+26,b.z),oe.fov=50,oe.updateProjectionMatrix(),Yi=!1;return}const e=Ft,n=e.drifting?3.2:e.spinT>0?1.5:6.5;Yi||(or=e.yaw);let i=e.yaw-or;i=Math.atan2(Math.sin(i),Math.cos(i)),or+=i*Math.min(1,s*n);const r=Math.cos(or),a=Math.sin(or),o=Math.max(0,e.speed),c=5.6+Math.min(1.2,o*.03),l=2.25+Math.min(.5,o*.012),h=new P(e.pos.x-r*c,e.pos.y+l,e.pos.z-a*c),f=new P(e.pos.x+r*7,e.pos.y+1.15,e.pos.z+a*7);Yi||(ar.copy(h),ec.copy(f),Yi=!0);const u=1-Math.exp(-s*14),d=1-Math.exp(-s*16);ar.lerp(h,u),ec.lerp(f,d),ar.y<e.f.h+1.3&&(ar.y=e.f.h+1.3),cr=Math.max(cr*Math.exp(-s*7),e.squash*.35,e.boostT>0?.04:0),oe.position.copy(ar).add(new P((Math.random()-.5)*cr,(Math.random()-.5)*cr,(Math.random()-.5)*cr)),oe.lookAt(ec),oe.rotateZ(-e.driftVis*.035);const g=70+Math.min(9,Math.max(0,o-18)*.45)+(e.boostT>0?9:0);Ea+=(g-Ea)*Math.min(1,s*5),oe.fov=oe.aspect<1?Math.min(100,2*Math.atan(Math.tan(Ea*Math.PI/360)/oe.aspect*.62)*180/Math.PI):Ea,oe.updateProjectionMatrix(),wr.mat.uniforms.speed.value=$t==="race"?Math.min(1,Math.max(0,(o-30)/9)+(e.boostT>0?.6:0)):0,wr.mat.uniforms.time.value=t}const mn={white:new ct(16777215),grey:new ct(14275792),pink:new ct(16743080),l1:new ct(8306928),l2:new ct(16164442),l3:new ct(11833072),flame:new ct(16757596),flame2:new ct(16773536),dust:new ct(15392718),spray:new ct(14673653)},Y_=new P;function lr(s,t,e,n){const i=Math.cos(s.yaw),r=Math.sin(s.yaw);return Y_.set(s.pos.x+t*i-n*r,s.pos.y+e,s.pos.z+t*r+n*i)}function J_(s){if(s.pos.distanceToSquared(oe.position)<4900){if(s.drifting&&s.grounded){const e=s.charge>=Xn[0],n=s.boosts>=3?mn.l3:e?mn.pink:s.boosts===2?mn.l2:s.boosts===1?mn.l1:mn.grey;for(const i of[-1,1]){const r=lr(s,-.8,.15,i*.85);(e||s.boosts>0)&&kn.emit(r.x,r.y,r.z,(Math.random()-.5)*4,Math.random()*3+1,(Math.random()-.5)*4,n,1,.22,.35,12),Math.random()<.3&&kn.emit(r.x,r.y+.2,r.z,Math.random()-.5,1.2,Math.random()-.5,mn.white,.3,.7,.45)}}if(s.boostT>0)for(const e of s.model.exhaust){const n=lr(s,e.x,e.y,e.z),i=-12;kn.emit(n.x,n.y,n.z,Math.cos(s.yaw)*i*.3+(Math.random()-.5),Math.random(),Math.sin(s.yaw)*i*.3+(Math.random()-.5),Math.random()<.5?mn.flame:mn.flame2,1,.55,.22)}else if(s.speed>2&&s.speed<20&&Math.random()<.1){const e=s.model.exhaust[0],n=lr(s,e.x,e.y,e.z);kn.emit(n.x,n.y,n.z,0,.8,0,mn.white,.2,.3,.4)}if(Tn.level>.4&&s.grounded&&s.speed>8)for(const e of[-1,1]){const n=lr(s,-.9,.2,e*.75);kn.emit(n.x,n.y,n.z,-Math.cos(s.yaw)*3+(Math.random()-.5)*2,1.5+Math.random()*2,-Math.sin(s.yaw)*3+(Math.random()-.5)*2,mn.spray,.3*Tn.level,.26,.4,10)}if(s.spinT>0&&Math.random()<.6){const e=lr(s,0,1.6,0);kn.emit(e.x,e.y,e.z,(Math.random()-.5)*3,2,(Math.random()-.5)*3,mn.flame2,1,.3,.5)}}}function Z_(s,t){for(let e=0;e<t;e++)kn.emit(s.pos.x+(Math.random()-.5)*2,s.pos.y+.2,s.pos.z+(Math.random()-.5)*2,(Math.random()-.5)*5,Math.random()*2,(Math.random()-.5)*5,mn.dust,.8,1.2,.7)}const ye={spd:qt("#spd b"),pos:qt("#pos b"),lap:qt("#lap"),time:qt("#time"),item:qt("#item"),itembox:qt("#itembox"),simit:qt("#simit b"),simitBox:qt("#simit"),drift:qt("#drift"),fill:qt("#drift .fill"),zone:qt("#drift .zone"),pips:[...document.querySelectorAll("#drift .pips i")],wrong:qt("#wrong"),count:qt("#count")},Dl=1.4;ye.zone.style.left=Xn[0]/Dl*100+"%";ye.zone.style.width=(Xn[1]+qa-Xn[0])/Dl*100+"%";let Uf=0,Nf=0,nl=0,kf=!1;function $_(s){const t=Ft;if(ye.pos.textContent=String(t.place),ye.spd.textContent=String(Math.max(0,Math.round(t.speed*3.6*1.65))),ye.spd.parentElement.classList.toggle("boost",t.boostT>0),t.place!==Nf&&(ye.pos.parentElement.animate([{transform:"scale(1.35)"},{transform:"scale(1)"}],{duration:250}),Nf=t.place),ye.lap.textContent=`TUR ${Math.min(Sr,Math.max(1,t.lap))}/${Sr}`,ye.time.textContent=ku(t.finished?t.finishTime:mi),ye.simit.textContent=String(t.simit),ye.simitBox.classList.toggle("full",t.simit>=10),ye.itembox.classList.toggle("juiced",t.simit>=10),t.rollT>0){Uf+=s*14;const e=Object.keys(pr);ye.item.style.backgroundImage=`url(${pr[e[Math.floor(Uf)%e.length]]})`,ye.item.style.opacity="0.7"}else t.item?(ye.item.style.backgroundImage=`url(${pr[t.item]})`,ye.item.style.opacity="1",ye.item.title=Nu[t.item]):t.shieldT>0?(ye.item.style.backgroundImage=`url(${pr.nazar})`,ye.item.style.opacity=String(.55+Math.sin(mi*6)*.2),ye.item.title="Nazarı fırlat"):ye.item.style.backgroundImage="none";if(ye.drift.classList.toggle("hide",!t.drifting),t.drifting){ye.fill.style.width=Math.min(100,t.charge/Dl*100)+"%";const e=t.charge>=Xn[0]&&t.charge<=Xn[1]+qa&&t.boosts<3&&t.lockT<=0;if(e&&!kf){Ct.ready();try{navigator.vibrate?.(18)}catch{}}kf=e,ye.drift.classList.toggle("ready",e),ye.pips.forEach((n,i)=>n.classList.toggle("on",i<t.boosts))}ye.wrong.classList.toggle("hide",!(t.wrongT>1.2&&!t.finished)),W_.draw(Pe,Ft)}function Q_(){[...Pe].sort((t,e)=>t.finished&&e.finished?t.finishTime-e.finishTime:t.finished?-1:e.finished?1:e.progress-t.progress).forEach((t,e)=>t.place=e+1)}function ty(s){const t=$t==="race"||$t==="done";Ps.update(s);const e=Ps.c.gas>0;$t==="count"&&e&&!Df&&(Ja=Er),Df=e;const n=Qi?(Qi.update(s,Pe,Ft,!0),Qi.ctl):Ps.c;Ft.step(s,n,t);for(const i of Ya)i.update(s,Pe,Ft),i.k.step(s,i.ctl,t);for(let i=0;i<Pe.length;i++)for(let r=i+1;r<Pe.length;r++){const a=Pe[i],o=Pe[r],c=o.pos.x-a.pos.x,l=o.pos.z-a.pos.z,h=c*c+l*l;if(h<3.6&&h>1e-4&&Math.abs(a.pos.y-o.pos.y)<1.6){const f=Math.sqrt(h),u=(1.9-f)/2,d=c/f,g=l/f;a.pos.x-=d*u,a.pos.z-=g*u,o.pos.x+=d*u,o.pos.z+=g*u;const b=(o.vel.x-a.vel.x)*d+(o.vel.z-a.vel.z)*g;b<0&&(a.vel.x+=d*b*.6,a.vel.z+=g*b*.6,o.vel.x-=d*b*.6,o.vel.z-=g*b*.6)}}if(t){Za.update(s,Pe,mi);for(const i of Pe)i.wantItem&&(i.item||i.shieldT>0)&&i.rollT<=0&&i.spinT<=0&&Za.use(i,Pe);Q_();for(const i of Pe)!i.finished&&i.lap>Sr&&(i.finished=!0,i.finishTime=mi,i===Ft&&ey());Ft.lap!==nl&&$t==="race"&&(Ft.lap===Sr?(xn.show("SON TUR!","big"),Ct.lap()):Ft.lap>1&&Ft.lap<Sr&&(xn.show(`${Ft.lap}. TUR`,"big"),Ct.lap()),nl=Ft.lap),!Qi&&(Ft.stuckT>3||Ft.wrongT>5)&&(Ft.respawn(),Ft.stuckT=0,Ft.wrongT=0)}}function ey(){$t="done",Ar=0,Qi=new $c(Ft,ce,.7);const s=Ft.place===1;Ct.finish(s),xn.show(s?"BİRİNCİSİN!":`${Ft.place}. oldun!`,"big"),Bu.fireworks(ce.point(0,0)),qt("#touch").classList.add("hide")}const Kn=qt("#menu");let il=[];function ny(){const s=new xi(256,256,{colorSpace:Ne}),t=new xl;t.background=new ct(16774118),t.add(new Kc(16777215,15980221,2.2));const e=new Va(16777215,1.6);e.position.set(3,5,4),t.add(e);const n=new Ye(32,1,.1,50);n.position.set(3.2,2.2,3.6),n.lookAt(0,.85,0);const i=new Uint8Array(256*256*4),r=document.createElement("canvas");r.width=r.height=256;const a=r.getContext("2d");for(const o of Hs){const c=Il(o);c.root.rotation.y=-.5,t.add(c.root),yn.setRenderTarget(s),yn.render(t,n),yn.readRenderTargetPixels(s,0,0,256,256,i),yn.setRenderTarget(null);const l=a.createImageData(256,256);for(let h=0;h<256;h++)l.data.set(i.subarray((255-h)*1024,(256-h)*1024),h*1024);a.putImageData(l,0,0),il.push(r.toDataURL()),t.remove(c.root)}s.dispose()}function Or(){$t="title",un=!1,Hu(!1),Tn.clear(),Ct.rain(0),Kn.innerHTML=`<div class="title"><div class="logo">BOSPHORUS<br>DRIFT<small>${Qc[En].toLocaleUpperCase("tr")}</small></div>
    <div class="row"><button class="btn" id="bPlay">Yarış</button><button class="btn alt" id="bHow">Nasıl oynanır</button></div>
    <button class="btn ghost" id="bMute">${Ct.muted?"Ses: kapalı":"Ses: açık"}</button></div>`,qt("#bPlay").onclick=()=>{Ct.start(),Ct.click(),zr()},qt("#bHow").onclick=()=>{Ct.start(),Ct.click(),Gu(Or)},qt("#bMute").onclick=()=>{Nl(),Or()}}const Bn=new Zt;ke.add(Bn);Bn.visible=!1;const sl=En==="galata"?698:300,Di=ce.point(sl,0),nc=En==="galata"?new P(Di.x-ce.T.tower.x,0,Di.z-ce.T.tower.z).normalize():new P(ce.T.tx[ce.idxOf(sl)],0,ce.T.tz[ce.idxOf(sl)]);{const s=new J(new re(2.4,2.6,.5,40),new Ut({color:4157398}));s.position.y=.25,s.receiveShadow=!0,Bn.add(s);const t=new J(new _n(2.45,.12,8,48),new Ut({color:15911244}));t.rotation.x=Math.PI/2,t.position.y=.5,Bn.add(t);const e=new J(new Gr(2.3,40),new Ut({map:li.make(256,256,(n,i,r)=>{for(const[a,o]of[[128,"#2f6fb3"],[92,"#ffffff"],[64,"#7ec0f0"],[34,"#191e2d"]])n.fillStyle=o,n.beginPath(),n.arc(i/2,r/2,a,0,7),n.fill()})}));e.rotation.x=-Math.PI/2,e.position.y=.51,Bn.add(e),Bn.position.copy(Di)}let Nn=null,Ff=-1;function iy(s){Ff!==s&&(Ff=s,Nn&&Bn.remove(Nn.root),Nn=Il(Hs[s]),Nn.root.position.y=.52,Nn.root.scale.setScalar(1.25),Nn.root.traverse(t=>{t.isMesh&&(t.castShadow=!0)}),Bn.add(Nn.root))}const sy=["Hız","İvme","Yol tutuş"];function zr(){$t="select",il.length||ny(),Bn.visible=!0,iy(qn);for(const e of Pe)e.model.root.visible=!1;const s=Hs[qn];Kn.innerHTML=`<div class="cs">
    <div class="selInfo"><small>KARAKTER ${qn+1}/6</small><h1>${s.name}</h1><p>${s.blurb}</p>
      ${s.stats.map((e,n)=>`<div class="stat"><span>${sy[n]}</span><div class="bars">${[1,2,3,4,5].map(i=>`<i class="${i<=e?"on":""}"></i>`).join("")}</div></div>`).join("")}
    </div>
    <button class="selArrow l" id="sPrev" aria-label="Önceki">‹</button><button class="selArrow r" id="sNext" aria-label="Sonraki">›</button>
    <div class="selBottom">
      <div class="chips">${Hs.map((e,n)=>`<button class="chip${n===qn?" sel":""}" data-i="${n}" style="--c:#${e.color.toString(16).padStart(6,"0")}"><img src="${il[n]}" alt="${e.name}"></button>`).join("")}</div>
      <div class="selRow"><div class="seg pist">${Object.keys(Qc).map(e=>`<button data-p="${e}" class="${e===En?"sel":""}">${Qc[e]}</button>`).join("")}</div><div class="seg">${["kolay","normal","zor"].map(e=>`<button data-d="${e}" class="${e===Tr?"sel":""}">${e[0].toUpperCase()+e.slice(1)}</button>`).join("")}</div>
      <button class="btn ghost" id="bBack">Geri</button><button class="btn" id="bGo">Başla</button></div>
    </div></div>`;const t=e=>{qn=(e+6)%6,es.set("char",String(qn)),Ct.click(),zr()};Kn.querySelectorAll(".chip").forEach(e=>e.onclick=()=>t(Number(e.dataset.i))),qt("#sPrev").onclick=()=>t(qn-1),qt("#sNext").onclick=()=>t(qn+1),Kn.querySelectorAll(".seg button[data-d]").forEach(e=>e.onclick=()=>{Tr=e.dataset.d,es.set("diff",Tr),Ct.click(),zr()}),Kn.querySelectorAll(".seg button[data-p]").forEach(e=>e.onclick=()=>{const n=e.dataset.p;if(n===En)return;es.set("pist",n),Ct.click();const i=new URL(location.href);i.searchParams.set("pist",n),i.searchParams.set("sel","1"),location.href=i.toString()}),qt("#bBack").onclick=()=>{Ct.click(),Bn.visible=!1,Or()},qt("#bGo").onclick=()=>{Ct.click(),co()}}function Gu(s){const t=(e,n)=>`<div><img src="${pr[e]}" alt=""><span><b>${Nu[e]}</b><br>${n}</span></div>`;Kn.innerHTML=`<div class="panel help"><h2>Nasıl oynanır</h2>
    <p>Galata Kulesi’nin etrafında <b>3 tur</b>. İlk bitiren kazanır.</p>
    <table>
      <tr><td>Gaz / fren</td><td><kbd>W</kbd> <kbd>↑</kbd> / <kbd>S</kbd> <kbd>↓</kbd> · telefonda gaz kendiliğinden</td></tr>
      <tr><td>Direksiyon</td><td><kbd>A</kbd> <kbd>D</kbd> <kbd>←</kbd> <kbd>→</kbd> · telefonda sol yarıda parmağını kaydır</td></tr>
      <tr style="display:none"><td>Drift</td><td><kbd>Boşluk</kbd> / <kbd>Shift</kbd> ya da <b>DRİFT</b> düğmesi · dönerken dokun, kart zıplayıp kaymaya başlar. Direksiyonu bıraksan da hemen bitmez; bitirmek için ters yöne çevir ya da frene bas.</td></tr>
      <tr style="display:none"><td>Drift turbosu</td><td>Drift sırasında çubuk <b>yeşile</b> dönünce (zil sesi, telefonda titreşim) aynı tuşa bir kez daha dokun. Üst üste <b>3 kez</b>: Ultra Turbo!</td></tr>
      <tr><td>Eşya</td><td><kbd>E</kbd> veya <kbd>Enter</kbd></td></tr>
      <tr><td>Diğer</td><td>Mavi oklu pedler ve çıkardığın turbo seni hızlandırır · <kbd>R</kbd> piste dön · <kbd>Esc</kbd> duraklat · <kbd>M</kbd> ses · oyun kolu da çalışır</td></tr>
    </table>
    <div class="items">${t("marti","Öndeki karta kilitlenir.")}${t("cay","Arkana çay dökersin, basan kayar.")}${t("nazar","Kalkan olur. Üstündeyken tekrar basarsan öndekine fırlatırsın.")}${t("turbo","Anında hız.")}${t("simit","Düz gider, duvardan seker. 10 simitle üçlü.")}${t("duduk","Yakındaki kartları savurur.")}${t("kedi","Öndeki kartların önüne kediler çıkar.")}</div>
    <p>Yoldaki <b>simitleri</b> topla: her biri biraz hız verir. 10 simitte eşyalar da güçlenir. Vurulursan 3 simit düşer. Mavi oklu pedler ve sürpriz kutuları <b>?</b> pistin her yerinde.</p>
    <div class="row sticky"><button class="btn" id="bOk">Tamam</button></div></div>`,qt("#bOk").onclick=()=>{Ct.click(),s()}}function Br(){un=!0,Kn.innerHTML=`<div class="panel"><h2>Duraklatıldı</h2><div class="row" style="flex-direction:column;align-items:center">
    <button class="btn" id="pRes">Devam</button><button class="btn alt" id="pRe">Yeniden başla</button><button class="btn ghost" id="pHow">Nasıl oynanır</button><button class="btn ghost" id="pMute">${Ct.muted?"Ses: kapalı":"Ses: açık"}</button><button class="btn ghost" id="pMenu">Ana menü</button></div></div>`,qt("#pRes").onclick=Ul,qt("#pRe").onclick=()=>{un=!1,co()},qt("#pHow").onclick=()=>Gu(Br),qt("#pMute").onclick=()=>{Nl(),Br()},qt("#pMenu").onclick=()=>{un=!1,Ct.music(!1),Or()},Ct.music(!1)}function Ul(){un=!1,Kn.innerHTML="",Ct.music(!0),rl=performance.now()}function ry(){qt("#hud").classList.add("hide");const s=[...Pe].sort((t,e)=>t.place-e.place).map(t=>`<tr class="${t===Ft?"me":""}"><td class="n">${t.place}</td><td>${t.def.name}${t===Ft?" (sen)":""}</td><td class="t">${t.finished?ku(t.finishTime):"yolda"}</td></tr>`).join("");Kn.innerHTML=`<div class="panel"><h2>${Ft.place===1?"Kazandın! 🏆":"Yarış bitti"}</h2><table class="res">${s}</table>
    <div class="row"><button class="btn" id="rAgain">Tekrar yarış</button><button class="btn alt" id="rSel">Karakter seç</button></div><div class="credit">© 2026 Doğancan Işık · Bosphorus Drift · ilk sürüm</div></div>`,qt("#rAgain").onclick=()=>{Ct.click(),co()},qt("#rSel").onclick=()=>{Ct.click(),Ct.music(!1),zr()}}function co(){Kn.innerHTML="",un=!1,Bn.visible=!1,j_(),$t="count",Er=3.6,nl=0,Yi=!1,Hu(!0),Ct.start(),Ct.music(!0)}function Hu(s){qt("#hud").classList.toggle("hide",!s),qt("#touch").classList.toggle("hide",!(s&&(wn||Ps.touch)))}function Nl(){Ct.setMuted(!Ct.muted),es.set("mute",Ct.muted?"1":"0")}for(const s of["gesturestart","gesturechange","gestureend"])document.addEventListener(s,t=>t.preventDefault(),{passive:!1});document.addEventListener("touchmove",s=>{const t=s.target?.closest?.(".panel");(s.touches.length>1||!t)&&s.preventDefault()},{passive:!1});let Of=0;document.addEventListener("touchend",s=>{const t=performance.now();t-Of<350&&!s.target?.closest?.("button")&&s.preventDefault(),Of=t},{passive:!1});document.addEventListener("dblclick",s=>s.preventDefault(),{passive:!1});Ps.onKey=s=>{Ct.start(),(s==="escape"||s==="p")&&($t==="race"||$t==="count")&&(un?Ul():Br()),s==="m"&&Nl(),s==="r"&&$t==="race"&&!un&&Ft.respawn()};qt("#pauseBtn").addEventListener("click",()=>{($t==="race"||$t==="count")&&(un?Ul():Br())});document.addEventListener("visibilitychange",()=>{document.hidden&&($t==="race"||$t==="count")&&!un&&Br()});function Vu(){const s=innerWidth,t=innerHeight;yn.setSize(Math.floor(s*wa),Math.floor(t*wa),!1),tl.style.width=s+"px",tl.style.height=t+"px",oe.aspect=s/t,oe.updateProjectionMatrix(),wr.setSize(s,t,wa),kn.setScale(t*wa)}addEventListener("resize",Vu);Vu();let rl=performance.now(),ys=0;const ay=Number(pi.get("t")||1),zf=Number(pi.get("fast")||0);function Wu(s){requestAnimationFrame(Wu);let t=Math.min(.05,(s-rl)/1e3)*ay;if(rl=s,zf&&(t=zf/60),un&&(t=0),ys+=t,$t==="count"){Er-=t;const i=Math.ceil(Er-.6);if(i<mr&&i>=1&&i<=3&&(mr=i,ye.count.innerHTML=`<div>${i}</div>`,Ct.beep(!1)),Er<=.6&&mr>0){mr=0,ye.count.innerHTML='<div class="go">BAŞLA!</div>',Ct.beep(!0),$t="race",mi=0,Ja<=1.05&&Ja>.6&&!el&&(el=!0,Ft.boost(7,1.3),xn.show("Süper kalkış!","t2"));for(const r of Ya)Math.random()<r.skill*.7&&r.k.boost(6,1.1)}}if(($t==="race"||$t==="done")&&(mi+=t),$t!=="title"&&$t!=="select"){const i=Math.max(2,Math.ceil(t/.009));for(let r=0;r<i;r++)ty(t/i);for(const r of Pe)r.sync(t,ys),J_(r);t>0&&zu.update(Pe,oe.position),($t==="race"||$t==="count")&&$_(t),Ct.engine(Ft.speed,Qi?1:Ps.c.gas,Ft.drifting&&Ft.grounded,Ft.boostT>0,!un&&$t!=="done"),$t==="done"&&(Ar+=t,Ar>3&&Ar-t<=3&&ry())}else Ct.engine(0,0,!1,!1,!1);Ct.tick(),kn.update(t),Fr.update(ys),Ka.update(t,ys);const e=$t==="race"||$t==="done";if(t>0){Tn.update(t,e?mi:-1,oe.position),Bu.update(t,ys,Pe,$t==="title"||$t==="select"?null:Ft,$t==="race");for(const i of Pe)i.grip=Tn.level>.5?.88:1;Ct.rain(un?0:Tn.level),Ft&&(e||$t==="count")&&Ka.uPlayer.value.copy(Ft.pos)}K_(t,ys);const n=$t==="title"?En==="kc"?oe.position:new P(ce.T.tower.x,ce.T.tower.y0+10,ce.T.tower.z):$t==="select"?Di:Ft.pos;An.position.copy(n).addScaledVector(B_,220),An.target.position.copy(n),wr.render(ke,oe)}Wn(1,"Hazır!");setTimeout(()=>qt("#loading").remove(),250);pi.has("sel")?(Ct.start(),zr()):Or();pi.has("skip")&&(Ct.muted=!0,co());requestAnimationFrame(Wu);window.__bd={get player(){return Ft},get karts(){return Pe},get state(){return $t},track:ce,camera:oe,scene:ke,renderer:yn,get raceT(){return mi}};
