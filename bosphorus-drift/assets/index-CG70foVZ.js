(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=e(i);fetch(i.href,r)}})();const Oc="170",Pf=0,Al=1,Lf=2,yu=1,Su=2,Qn=3,ai=0,Je=1,Ue=2,wi=0,ms=1,Oo=2,Rl=3,Cl=4,If=5,Bi=100,Df=101,Uf=102,Nf=103,Ff=104,kf=200,Of=201,zf=202,Bf=203,zo=204,Bo=205,Gf=206,Hf=207,Vf=208,Wf=209,jf=210,qf=211,Xf=212,Kf=213,Yf=214,Go=0,Ho=1,Vo=2,vs=3,Wo=4,jo=5,qo=6,Xo=7,zc=0,Jf=1,Zf=2,Ei=0,Qf=1,$f=2,td=3,ed=4,nd=5,id=6,sd=7,Pl="attached",rd="detached",Tu=300,_s=301,Ms=302,Ko=303,Yo=304,La=306,ji=1e3,Mi=1001,_a=1002,je=1003,wu=1004,Qs=1005,rn=1006,ha=1007,ei=1008,oi=1009,Eu=1010,Au=1011,mr=1012,Bc=1013,Ai=1014,Cn=1015,Ls=1016,Gc=1017,Hc=1018,ys=1020,Ru=35902,Cu=1021,Pu=1022,mn=1023,Lu=1024,Iu=1025,gs=1026,Ss=1027,Ia=1028,Vc=1029,Du=1030,Wc=1031,jc=1033,ua=33776,fa=33777,da=33778,pa=33779,Jo=35840,Zo=35841,Qo=35842,$o=35843,tc=36196,ec=37492,nc=37496,ic=37808,sc=37809,rc=37810,ac=37811,oc=37812,cc=37813,lc=37814,hc=37815,uc=37816,fc=37817,dc=37818,pc=37819,mc=37820,gc=37821,ma=36492,bc=36494,xc=36495,Uu=36283,vc=36284,_c=36285,Mc=36286,gr=2300,br=2301,ja=2302,Ll=2400,Il=2401,Dl=2402,ad=2500,od=0,Nu=1,yc=2,cd=3200,ld=3201,Da=0,hd=1,vi="",Ie="srgb",Ze="srgb-linear",Ua="linear",de="srgb",Yi=7680,Ul=519,ud=512,fd=513,dd=514,Fu=515,pd=516,md=517,gd=518,bd=519,Sc=35044,Vi=35048,Nl="300 es",ni=2e3,Ma=2001;class Is{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,t);t.target=null}}}const Ge=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Fl=1234567;const sr=Math.PI/180,Ts=180/Math.PI;function bn(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ge[s&255]+Ge[s>>8&255]+Ge[s>>16&255]+Ge[s>>24&255]+"-"+Ge[t&255]+Ge[t>>8&255]+"-"+Ge[t>>16&15|64]+Ge[t>>24&255]+"-"+Ge[e&63|128]+Ge[e>>8&255]+"-"+Ge[e>>16&255]+Ge[e>>24&255]+Ge[n&255]+Ge[n>>8&255]+Ge[n>>16&255]+Ge[n>>24&255]).toLowerCase()}function ze(s,t,e){return Math.max(t,Math.min(e,s))}function qc(s,t){return(s%t+t)%t}function xd(s,t,e,n,i){return n+(s-t)*(i-n)/(e-t)}function vd(s,t,e){return s!==t?(e-s)/(t-s):0}function rr(s,t,e){return(1-e)*s+e*t}function _d(s,t,e,n){return rr(s,t,1-Math.exp(-e*n))}function Md(s,t=1){return t-Math.abs(qc(s,t*2)-t)}function yd(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function Sd(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function Td(s,t){return s+Math.floor(Math.random()*(t-s+1))}function wd(s,t){return s+Math.random()*(t-s)}function Ed(s){return s*(.5-Math.random())}function Ad(s){s!==void 0&&(Fl=s);let t=Fl+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Rd(s){return s*sr}function Cd(s){return s*Ts}function Pd(s){return(s&s-1)===0&&s!==0}function Ld(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Id(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Dd(s,t,e,n,i){const r=Math.cos,a=Math.sin,o=r(e/2),c=a(e/2),l=r((t+n)/2),h=a((t+n)/2),u=r((t-n)/2),f=a((t-n)/2),d=r((n-t)/2),b=a((n-t)/2);switch(i){case"XYX":s.set(o*h,c*u,c*f,o*l);break;case"YZY":s.set(c*f,o*h,c*u,o*l);break;case"ZXZ":s.set(c*u,c*f,o*h,o*l);break;case"XZX":s.set(o*h,c*b,c*d,o*l);break;case"YXY":s.set(c*d,o*h,c*b,o*l);break;case"ZYZ":s.set(c*b,c*d,o*h,o*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function An(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function he(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const Ud={DEG2RAD:sr,RAD2DEG:Ts,generateUUID:bn,clamp:ze,euclideanModulo:qc,mapLinear:xd,inverseLerp:vd,lerp:rr,damp:_d,pingpong:Md,smoothstep:yd,smootherstep:Sd,randInt:Td,randFloat:wd,randFloatSpread:Ed,seededRandom:Ad,degToRad:Rd,radToDeg:Cd,isPowerOfTwo:Pd,ceilPowerOfTwo:Ld,floorPowerOfTwo:Id,setQuaternionFromProperEuler:Dd,normalize:he,denormalize:An};class ct{constructor(t=0,e=0){ct.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ze(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*i+t.x,this.y=r*i+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class qt{constructor(t,e,n,i,r,a,o,c,l){qt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,a,o,c,l)}set(t,e,n,i,r,a,o,c,l){const h=this.elements;return h[0]=t,h[1]=i,h[2]=o,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],u=n[7],f=n[2],d=n[5],b=n[8],m=i[0],g=i[3],p=i[6],v=i[1],_=i[4],x=i[7],C=i[2],w=i[5],E=i[8];return r[0]=a*m+o*v+c*C,r[3]=a*g+o*_+c*w,r[6]=a*p+o*x+c*E,r[1]=l*m+h*v+u*C,r[4]=l*g+h*_+u*w,r[7]=l*p+h*x+u*E,r[2]=f*m+d*v+b*C,r[5]=f*g+d*_+b*w,r[8]=f*p+d*x+b*E,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8];return e*a*h-e*o*l-n*r*h+n*o*c+i*r*l-i*a*c}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],u=h*a-o*l,f=o*c-h*r,d=l*r-a*c,b=e*u+n*f+i*d;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const m=1/b;return t[0]=u*m,t[1]=(i*l-h*n)*m,t[2]=(o*n-i*a)*m,t[3]=f*m,t[4]=(h*e-i*c)*m,t[5]=(i*r-o*e)*m,t[6]=d*m,t[7]=(n*c-l*e)*m,t[8]=(a*e-n*r)*m,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,a,o){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+t,-i*l,i*c,-i*(-l*a+c*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(qa.makeScale(t,e)),this}rotate(t){return this.premultiply(qa.makeRotation(-t)),this}translate(t,e){return this.premultiply(qa.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const qa=new qt;function ku(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function xr(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Nd(){const s=xr("canvas");return s.style.display="block",s}const kl={};function $s(s){s in kl||(kl[s]=!0,console.warn(s))}function Fd(s,t,e){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function kd(s){const t=s.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Od(s){const t=s.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const te={enabled:!0,workingColorSpace:Ze,spaces:{},convert:function(s,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===de&&(s.r=ii(s.r),s.g=ii(s.g),s.b=ii(s.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(s.applyMatrix3(this.spaces[t].toXYZ),s.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===de&&(s.r=bs(s.r),s.g=bs(s.g),s.b=bs(s.b))),s},fromWorkingColorSpace:function(s,t){return this.convert(s,this.workingColorSpace,t)},toWorkingColorSpace:function(s,t){return this.convert(s,t,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===vi?Ua:this.spaces[s].transfer},getLuminanceCoefficients:function(s,t=this.workingColorSpace){return s.fromArray(this.spaces[t].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,t,e){return s.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}};function ii(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function bs(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}const Ol=[.64,.33,.3,.6,.15,.06],zl=[.2126,.7152,.0722],Bl=[.3127,.329],Gl=new qt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Hl=new qt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);te.define({[Ze]:{primaries:Ol,whitePoint:Bl,transfer:Ua,toXYZ:Gl,fromXYZ:Hl,luminanceCoefficients:zl,workingColorSpaceConfig:{unpackColorSpace:Ie},outputColorSpaceConfig:{drawingBufferColorSpace:Ie}},[Ie]:{primaries:Ol,whitePoint:Bl,transfer:de,toXYZ:Gl,fromXYZ:Hl,luminanceCoefficients:zl,outputColorSpaceConfig:{drawingBufferColorSpace:Ie}}});let Ji;class zd{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Ji===void 0&&(Ji=xr("canvas")),Ji.width=t.width,Ji.height=t.height;const n=Ji.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Ji}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=xr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=ii(r[a]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ii(e[n]/255)*255):e[n]=ii(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Bd=0;class Ou{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Bd++}),this.uuid=bn(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(Xa(i[a].image)):r.push(Xa(i[a]))}else r=Xa(i);n.url=r}return e||(t.images[this.uuid]=n),n}}function Xa(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?zd.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Gd=0;class Ne extends Is{constructor(t=Ne.DEFAULT_IMAGE,e=Ne.DEFAULT_MAPPING,n=Mi,i=Mi,r=rn,a=ei,o=mn,c=oi,l=Ne.DEFAULT_ANISOTROPY,h=vi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Gd++}),this.uuid=bn(),this.name="",this.source=new Ou(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new ct(0,0),this.repeat=new ct(1,1),this.center=new ct(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new qt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Tu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ji:t.x=t.x-Math.floor(t.x);break;case Mi:t.x=t.x<0?0:1;break;case _a:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ji:t.y=t.y-Math.floor(t.y);break;case Mi:t.y=t.y<0?0:1;break;case _a:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ne.DEFAULT_IMAGE=null;Ne.DEFAULT_MAPPING=Tu;Ne.DEFAULT_ANISOTROPY=1;class re{constructor(t=0,e=0,n=0,i=1){re.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*i+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r;const c=t.elements,l=c[0],h=c[4],u=c[8],f=c[1],d=c[5],b=c[9],m=c[2],g=c[6],p=c[10];if(Math.abs(h-f)<.01&&Math.abs(u-m)<.01&&Math.abs(b-g)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+m)<.1&&Math.abs(b+g)<.1&&Math.abs(l+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const _=(l+1)/2,x=(d+1)/2,C=(p+1)/2,w=(h+f)/4,E=(u+m)/4,L=(b+g)/4;return _>x&&_>C?_<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(_),i=w/n,r=E/n):x>C?x<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(x),n=w/i,r=L/i):C<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(C),n=E/r,i=L/r),this.set(n,i,r,e),this}let v=Math.sqrt((g-b)*(g-b)+(u-m)*(u-m)+(f-h)*(f-h));return Math.abs(v)<.001&&(v=1),this.x=(g-b)/v,this.y=(u-m)/v,this.z=(f-h)/v,this.w=Math.acos((l+d+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Hd extends Is{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new re(0,0,t,e),this.scissorTest=!1,this.viewport=new re(0,0,t,e);const i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:rn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Ne(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Ou(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ci extends Hd{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class zu extends Ne{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=je,this.minFilter=je,this.wrapR=Mi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Vd extends Ne{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=je,this.minFilter=je,this.wrapR=Mi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ye{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,a,o){let c=n[i+0],l=n[i+1],h=n[i+2],u=n[i+3];const f=r[a+0],d=r[a+1],b=r[a+2],m=r[a+3];if(o===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(o===1){t[e+0]=f,t[e+1]=d,t[e+2]=b,t[e+3]=m;return}if(u!==m||c!==f||l!==d||h!==b){let g=1-o;const p=c*f+l*d+h*b+u*m,v=p>=0?1:-1,_=1-p*p;if(_>Number.EPSILON){const C=Math.sqrt(_),w=Math.atan2(C,p*v);g=Math.sin(g*w)/C,o=Math.sin(o*w)/C}const x=o*v;if(c=c*g+f*x,l=l*g+d*x,h=h*g+b*x,u=u*g+m*x,g===1-o){const C=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=C,l*=C,h*=C,u*=C}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,r,a){const o=n[i],c=n[i+1],l=n[i+2],h=n[i+3],u=r[a],f=r[a+1],d=r[a+2],b=r[a+3];return t[e]=o*b+h*u+c*d-l*f,t[e+1]=c*b+h*f+l*u-o*d,t[e+2]=l*b+h*d+o*f-c*u,t[e+3]=h*b-o*u-c*f-l*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,r=t._z,a=t._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(i/2),u=o(r/2),f=c(n/2),d=c(i/2),b=c(r/2);switch(a){case"XYZ":this._x=f*h*u+l*d*b,this._y=l*d*u-f*h*b,this._z=l*h*b+f*d*u,this._w=l*h*u-f*d*b;break;case"YXZ":this._x=f*h*u+l*d*b,this._y=l*d*u-f*h*b,this._z=l*h*b-f*d*u,this._w=l*h*u+f*d*b;break;case"ZXY":this._x=f*h*u-l*d*b,this._y=l*d*u+f*h*b,this._z=l*h*b+f*d*u,this._w=l*h*u-f*d*b;break;case"ZYX":this._x=f*h*u-l*d*b,this._y=l*d*u+f*h*b,this._z=l*h*b-f*d*u,this._w=l*h*u+f*d*b;break;case"YZX":this._x=f*h*u+l*d*b,this._y=l*d*u+f*h*b,this._z=l*h*b-f*d*u,this._w=l*h*u-f*d*b;break;case"XZY":this._x=f*h*u-l*d*b,this._y=l*d*u-f*h*b,this._z=l*h*b+f*d*u,this._w=l*h*u+f*d*b;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],r=e[8],a=e[1],o=e[5],c=e[9],l=e[2],h=e[6],u=e[10],f=n+o+u;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-c)*d,this._y=(r-l)*d,this._z=(a-i)*d}else if(n>o&&n>u){const d=2*Math.sqrt(1+n-o-u);this._w=(h-c)/d,this._x=.25*d,this._y=(i+a)/d,this._z=(r+l)/d}else if(o>u){const d=2*Math.sqrt(1+o-n-u);this._w=(r-l)/d,this._x=(i+a)/d,this._y=.25*d,this._z=(c+h)/d}else{const d=2*Math.sqrt(1+u-n-o);this._w=(a-i)/d,this._x=(r+l)/d,this._y=(c+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ze(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,r=t._z,a=t._w,o=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+a*o+i*l-r*c,this._y=i*h+a*c+r*o-n*l,this._z=r*h+a*l+n*c-i*o,this._w=a*h-n*o-i*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,r=this._z,a=this._w;let o=a*t._w+n*t._x+i*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=i,this._z=r,this;const c=1-o*o;if(c<=Number.EPSILON){const d=1-e;return this._w=d*a+e*this._w,this._x=d*n+e*this._x,this._y=d*i+e*this._y,this._z=d*r+e*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,o),u=Math.sin((1-e)*h)/l,f=Math.sin(e*h)/l;return this._w=a*u+this._w*f,this._x=n*u+this._x*f,this._y=i*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class R{constructor(t=0,e=0,n=0){R.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Vl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Vl.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,r=t.x,a=t.y,o=t.z,c=t.w,l=2*(a*i-o*n),h=2*(o*e-r*i),u=2*(r*n-a*e);return this.x=e+c*l+a*u-o*h,this.y=n+c*h+o*l-r*u,this.z=i+c*u+r*h-a*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,r=t.z,a=e.x,o=e.y,c=e.z;return this.x=i*c-r*o,this.y=r*a-n*c,this.z=n*o-i*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Ka.copy(this).projectOnVector(t),this.sub(Ka)}reflect(t){return this.sub(Ka.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ze(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ka=new R,Vl=new Ye;class li{constructor(t=new R(1/0,1/0,1/0),e=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(yn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(yn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=yn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,yn):yn.fromBufferAttribute(r,a),yn.applyMatrix4(t.matrixWorld),this.expandByPoint(yn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Cr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Cr.copy(n.boundingBox)),Cr.applyMatrix4(t.matrixWorld),this.union(Cr)}const i=t.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,yn),yn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(zs),Pr.subVectors(this.max,zs),Zi.subVectors(t.a,zs),Qi.subVectors(t.b,zs),$i.subVectors(t.c,zs),fi.subVectors(Qi,Zi),di.subVectors($i,Qi),Ci.subVectors(Zi,$i);let e=[0,-fi.z,fi.y,0,-di.z,di.y,0,-Ci.z,Ci.y,fi.z,0,-fi.x,di.z,0,-di.x,Ci.z,0,-Ci.x,-fi.y,fi.x,0,-di.y,di.x,0,-Ci.y,Ci.x,0];return!Ya(e,Zi,Qi,$i,Pr)||(e=[1,0,0,0,1,0,0,0,1],!Ya(e,Zi,Qi,$i,Pr))?!1:(Lr.crossVectors(fi,di),e=[Lr.x,Lr.y,Lr.z],Ya(e,Zi,Qi,$i,Pr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,yn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(yn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(qn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),qn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),qn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),qn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),qn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),qn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),qn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),qn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(qn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const qn=[new R,new R,new R,new R,new R,new R,new R,new R],yn=new R,Cr=new li,Zi=new R,Qi=new R,$i=new R,fi=new R,di=new R,Ci=new R,zs=new R,Pr=new R,Lr=new R,Pi=new R;function Ya(s,t,e,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){Pi.fromArray(s,r);const o=i.x*Math.abs(Pi.x)+i.y*Math.abs(Pi.y)+i.z*Math.abs(Pi.z),c=t.dot(Pi),l=e.dot(Pi),h=n.dot(Pi);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}const Wd=new li,Bs=new R,Ja=new R;class Bn{constructor(t=new R,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Wd.setFromPoints(t).getCenter(n);let i=0;for(let r=0,a=t.length;r<a;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Bs.subVectors(t,this.center);const e=Bs.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Bs,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ja.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Bs.copy(t.center).add(Ja)),this.expandByPoint(Bs.copy(t.center).sub(Ja))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Xn=new R,Za=new R,Ir=new R,pi=new R,Qa=new R,Dr=new R,$a=new R;class Na{constructor(t=new R,e=new R(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Xn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Xn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Xn.copy(this.origin).addScaledVector(this.direction,e),Xn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Za.copy(t).add(e).multiplyScalar(.5),Ir.copy(e).sub(t).normalize(),pi.copy(this.origin).sub(Za);const r=t.distanceTo(e)*.5,a=-this.direction.dot(Ir),o=pi.dot(this.direction),c=-pi.dot(Ir),l=pi.lengthSq(),h=Math.abs(1-a*a);let u,f,d,b;if(h>0)if(u=a*c-o,f=a*o-c,b=r*h,u>=0)if(f>=-b)if(f<=b){const m=1/h;u*=m,f*=m,d=u*(u+a*f+2*o)+f*(a*u+f+2*c)+l}else f=r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*c)+l;else f=-r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*c)+l;else f<=-b?(u=Math.max(0,-(-a*r+o)),f=u>0?-r:Math.min(Math.max(-r,-c),r),d=-u*u+f*(f+2*c)+l):f<=b?(u=0,f=Math.min(Math.max(-r,-c),r),d=f*(f+2*c)+l):(u=Math.max(0,-(a*r+o)),f=u>0?r:Math.min(Math.max(-r,-c),r),d=-u*u+f*(f+2*c)+l);else f=a>0?-r:r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Za).addScaledVector(Ir,f),d}intersectSphere(t,e){Xn.subVectors(t.center,this.origin);const n=Xn.dot(this.direction),i=Xn.dot(Xn)-n*n,r=t.radius*t.radius;if(i>r)return null;const a=Math.sqrt(r-i),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,a,o,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return l>=0?(n=(t.min.x-f.x)*l,i=(t.max.x-f.x)*l):(n=(t.max.x-f.x)*l,i=(t.min.x-f.x)*l),h>=0?(r=(t.min.y-f.y)*h,a=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,a=(t.min.y-f.y)*h),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),u>=0?(o=(t.min.z-f.z)*u,c=(t.max.z-f.z)*u):(o=(t.max.z-f.z)*u,c=(t.min.z-f.z)*u),n>c||o>i)||((o>n||n!==n)&&(n=o),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Xn)!==null}intersectTriangle(t,e,n,i,r){Qa.subVectors(e,t),Dr.subVectors(n,t),$a.crossVectors(Qa,Dr);let a=this.direction.dot($a),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;pi.subVectors(this.origin,t);const c=o*this.direction.dot(Dr.crossVectors(pi,Dr));if(c<0)return null;const l=o*this.direction.dot(Qa.cross(pi));if(l<0||c+l>a)return null;const h=-o*pi.dot($a);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Nt{constructor(t,e,n,i,r,a,o,c,l,h,u,f,d,b,m,g){Nt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,a,o,c,l,h,u,f,d,b,m,g)}set(t,e,n,i,r,a,o,c,l,h,u,f,d,b,m,g){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=i,p[1]=r,p[5]=a,p[9]=o,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=f,p[3]=d,p[7]=b,p[11]=m,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Nt().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/ts.setFromMatrixColumn(t,0).length(),r=1/ts.setFromMatrixColumn(t,1).length(),a=1/ts.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const f=a*h,d=a*u,b=o*h,m=o*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=d+b*l,e[5]=f-m*l,e[9]=-o*c,e[2]=m-f*l,e[6]=b+d*l,e[10]=a*c}else if(t.order==="YXZ"){const f=c*h,d=c*u,b=l*h,m=l*u;e[0]=f+m*o,e[4]=b*o-d,e[8]=a*l,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=d*o-b,e[6]=m+f*o,e[10]=a*c}else if(t.order==="ZXY"){const f=c*h,d=c*u,b=l*h,m=l*u;e[0]=f-m*o,e[4]=-a*u,e[8]=b+d*o,e[1]=d+b*o,e[5]=a*h,e[9]=m-f*o,e[2]=-a*l,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){const f=a*h,d=a*u,b=o*h,m=o*u;e[0]=c*h,e[4]=b*l-d,e[8]=f*l+m,e[1]=c*u,e[5]=m*l+f,e[9]=d*l-b,e[2]=-l,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){const f=a*c,d=a*l,b=o*c,m=o*l;e[0]=c*h,e[4]=m-f*u,e[8]=b*u+d,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-l*h,e[6]=d*u+b,e[10]=f-m*u}else if(t.order==="XZY"){const f=a*c,d=a*l,b=o*c,m=o*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=f*u+m,e[5]=a*h,e[9]=d*u-b,e[2]=b*u-d,e[6]=o*h,e[10]=m*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(jd,t,qd)}lookAt(t,e,n){const i=this.elements;return en.subVectors(t,e),en.lengthSq()===0&&(en.z=1),en.normalize(),mi.crossVectors(n,en),mi.lengthSq()===0&&(Math.abs(n.z)===1?en.x+=1e-4:en.z+=1e-4,en.normalize(),mi.crossVectors(n,en)),mi.normalize(),Ur.crossVectors(en,mi),i[0]=mi.x,i[4]=Ur.x,i[8]=en.x,i[1]=mi.y,i[5]=Ur.y,i[9]=en.y,i[2]=mi.z,i[6]=Ur.z,i[10]=en.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],u=n[5],f=n[9],d=n[13],b=n[2],m=n[6],g=n[10],p=n[14],v=n[3],_=n[7],x=n[11],C=n[15],w=i[0],E=i[4],L=i[8],M=i[12],y=i[1],P=i[5],D=i[9],N=i[13],O=i[2],W=i[6],z=i[10],Z=i[14],V=i[3],et=i[7],lt=i[11],ht=i[15];return r[0]=a*w+o*y+c*O+l*V,r[4]=a*E+o*P+c*W+l*et,r[8]=a*L+o*D+c*z+l*lt,r[12]=a*M+o*N+c*Z+l*ht,r[1]=h*w+u*y+f*O+d*V,r[5]=h*E+u*P+f*W+d*et,r[9]=h*L+u*D+f*z+d*lt,r[13]=h*M+u*N+f*Z+d*ht,r[2]=b*w+m*y+g*O+p*V,r[6]=b*E+m*P+g*W+p*et,r[10]=b*L+m*D+g*z+p*lt,r[14]=b*M+m*N+g*Z+p*ht,r[3]=v*w+_*y+x*O+C*V,r[7]=v*E+_*P+x*W+C*et,r[11]=v*L+_*D+x*z+C*lt,r[15]=v*M+_*N+x*Z+C*ht,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],a=t[1],o=t[5],c=t[9],l=t[13],h=t[2],u=t[6],f=t[10],d=t[14],b=t[3],m=t[7],g=t[11],p=t[15];return b*(+r*c*u-i*l*u-r*o*f+n*l*f+i*o*d-n*c*d)+m*(+e*c*d-e*l*f+r*a*f-i*a*d+i*l*h-r*c*h)+g*(+e*l*u-e*o*d-r*a*u+n*a*d+r*o*h-n*l*h)+p*(-i*o*h-e*c*u+e*o*f+i*a*u-n*a*f+n*c*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],u=t[9],f=t[10],d=t[11],b=t[12],m=t[13],g=t[14],p=t[15],v=u*g*l-m*f*l+m*c*d-o*g*d-u*c*p+o*f*p,_=b*f*l-h*g*l-b*c*d+a*g*d+h*c*p-a*f*p,x=h*m*l-b*u*l+b*o*d-a*m*d-h*o*p+a*u*p,C=b*u*c-h*m*c-b*o*f+a*m*f+h*o*g-a*u*g,w=e*v+n*_+i*x+r*C;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const E=1/w;return t[0]=v*E,t[1]=(m*f*r-u*g*r-m*i*d+n*g*d+u*i*p-n*f*p)*E,t[2]=(o*g*r-m*c*r+m*i*l-n*g*l-o*i*p+n*c*p)*E,t[3]=(u*c*r-o*f*r-u*i*l+n*f*l+o*i*d-n*c*d)*E,t[4]=_*E,t[5]=(h*g*r-b*f*r+b*i*d-e*g*d-h*i*p+e*f*p)*E,t[6]=(b*c*r-a*g*r-b*i*l+e*g*l+a*i*p-e*c*p)*E,t[7]=(a*f*r-h*c*r+h*i*l-e*f*l-a*i*d+e*c*d)*E,t[8]=x*E,t[9]=(b*u*r-h*m*r-b*n*d+e*m*d+h*n*p-e*u*p)*E,t[10]=(a*m*r-b*o*r+b*n*l-e*m*l-a*n*p+e*o*p)*E,t[11]=(h*o*r-a*u*r-h*n*l+e*u*l+a*n*d-e*o*d)*E,t[12]=C*E,t[13]=(h*m*i-b*u*i+b*n*f-e*m*f-h*n*g+e*u*g)*E,t[14]=(b*o*i-a*m*i-b*n*c+e*m*c+a*n*g-e*o*g)*E,t[15]=(a*u*i-h*o*i+h*n*c-e*u*c-a*n*f+e*o*f)*E,this}scale(t){const e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),r=1-n,a=t.x,o=t.y,c=t.z,l=r*a,h=r*o;return this.set(l*a+n,l*o-i*c,l*c+i*o,0,l*o+i*c,h*o+n,h*c-i*a,0,l*c-i*o,h*c+i*a,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,a){return this.set(1,n,r,0,t,1,a,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,r=e._x,a=e._y,o=e._z,c=e._w,l=r+r,h=a+a,u=o+o,f=r*l,d=r*h,b=r*u,m=a*h,g=a*u,p=o*u,v=c*l,_=c*h,x=c*u,C=n.x,w=n.y,E=n.z;return i[0]=(1-(m+p))*C,i[1]=(d+x)*C,i[2]=(b-_)*C,i[3]=0,i[4]=(d-x)*w,i[5]=(1-(f+p))*w,i[6]=(g+v)*w,i[7]=0,i[8]=(b+_)*E,i[9]=(g-v)*E,i[10]=(1-(f+m))*E,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let r=ts.set(i[0],i[1],i[2]).length();const a=ts.set(i[4],i[5],i[6]).length(),o=ts.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],Sn.copy(this);const l=1/r,h=1/a,u=1/o;return Sn.elements[0]*=l,Sn.elements[1]*=l,Sn.elements[2]*=l,Sn.elements[4]*=h,Sn.elements[5]*=h,Sn.elements[6]*=h,Sn.elements[8]*=u,Sn.elements[9]*=u,Sn.elements[10]*=u,e.setFromRotationMatrix(Sn),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,i,r,a,o=ni){const c=this.elements,l=2*r/(e-t),h=2*r/(n-i),u=(e+t)/(e-t),f=(n+i)/(n-i);let d,b;if(o===ni)d=-(a+r)/(a-r),b=-2*a*r/(a-r);else if(o===Ma)d=-a/(a-r),b=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=d,c[14]=b,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,i,r,a,o=ni){const c=this.elements,l=1/(e-t),h=1/(n-i),u=1/(a-r),f=(e+t)*l,d=(n+i)*h;let b,m;if(o===ni)b=(a+r)*u,m=-2*u;else if(o===Ma)b=r*u,m=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-d,c[2]=0,c[6]=0,c[10]=m,c[14]=-b,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const ts=new R,Sn=new Nt,jd=new R(0,0,0),qd=new R(1,1,1),mi=new R,Ur=new R,en=new R,Wl=new Nt,jl=new Ye;class ln{constructor(t=0,e=0,n=0,i=ln.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,r=i[0],a=i[4],o=i[8],c=i[1],l=i[5],h=i[9],u=i[2],f=i[6],d=i[10];switch(e){case"XYZ":this._y=Math.asin(ze(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-ze(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(ze(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-ze(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(ze(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-ze(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Wl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Wl,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return jl.setFromEuler(this),this.setFromQuaternion(jl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ln.DEFAULT_ORDER="XYZ";class Bu{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Xd=0;const ql=new R,es=new Ye,Kn=new Nt,Nr=new R,Gs=new R,Kd=new R,Yd=new Ye,Xl=new R(1,0,0),Kl=new R(0,1,0),Yl=new R(0,0,1),Jl={type:"added"},Jd={type:"removed"},ns={type:"childadded",child:null},to={type:"childremoved",child:null};class pe extends Is{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Xd++}),this.uuid=bn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=pe.DEFAULT_UP.clone();const t=new R,e=new ln,n=new Ye,i=new R(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Nt},normalMatrix:{value:new qt}}),this.matrix=new Nt,this.matrixWorld=new Nt,this.matrixAutoUpdate=pe.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=pe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Bu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return es.setFromAxisAngle(t,e),this.quaternion.multiply(es),this}rotateOnWorldAxis(t,e){return es.setFromAxisAngle(t,e),this.quaternion.premultiply(es),this}rotateX(t){return this.rotateOnAxis(Xl,t)}rotateY(t){return this.rotateOnAxis(Kl,t)}rotateZ(t){return this.rotateOnAxis(Yl,t)}translateOnAxis(t,e){return ql.copy(t).applyQuaternion(this.quaternion),this.position.add(ql.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Xl,t)}translateY(t){return this.translateOnAxis(Kl,t)}translateZ(t){return this.translateOnAxis(Yl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Kn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Nr.copy(t):Nr.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Gs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Kn.lookAt(Gs,Nr,this.up):Kn.lookAt(Nr,Gs,this.up),this.quaternion.setFromRotationMatrix(Kn),i&&(Kn.extractRotation(i.matrixWorld),es.setFromRotationMatrix(Kn),this.quaternion.premultiply(es.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Jl),ns.child=t,this.dispatchEvent(ns),ns.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Jd),to.child=t,this.dispatchEvent(to),to.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Kn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Kn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Kn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Jl),ns.child=t,this.dispatchEvent(ns),ns.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Gs,t,Kd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Gs,Yd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];r(t.shapes,u)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(t.materials,this.material[c]));i.material=o}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];i.animations.push(r(t.animations,c))}}if(e){const o=a(t.geometries),c=a(t.materials),l=a(t.textures),h=a(t.images),u=a(t.shapes),f=a(t.skeletons),d=a(t.animations),b=a(t.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),b.length>0&&(n.nodes=b)}return n.object=i,n;function a(o){const c=[];for(const l in o){const h=o[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}pe.DEFAULT_UP=new R(0,1,0);pe.DEFAULT_MATRIX_AUTO_UPDATE=!0;pe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Tn=new R,Yn=new R,eo=new R,Jn=new R,is=new R,ss=new R,Zl=new R,no=new R,io=new R,so=new R,ro=new re,ao=new re,oo=new re;class Rn{constructor(t=new R,e=new R,n=new R){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),Tn.subVectors(t,e),i.cross(Tn);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){Tn.subVectors(i,e),Yn.subVectors(n,e),eo.subVectors(t,e);const a=Tn.dot(Tn),o=Tn.dot(Yn),c=Tn.dot(eo),l=Yn.dot(Yn),h=Yn.dot(eo),u=a*l-o*o;if(u===0)return r.set(0,0,0),null;const f=1/u,d=(l*c-o*h)*f,b=(a*h-o*c)*f;return r.set(1-d-b,b,d)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Jn)===null?!1:Jn.x>=0&&Jn.y>=0&&Jn.x+Jn.y<=1}static getInterpolation(t,e,n,i,r,a,o,c){return this.getBarycoord(t,e,n,i,Jn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Jn.x),c.addScaledVector(a,Jn.y),c.addScaledVector(o,Jn.z),c)}static getInterpolatedAttribute(t,e,n,i,r,a){return ro.setScalar(0),ao.setScalar(0),oo.setScalar(0),ro.fromBufferAttribute(t,e),ao.fromBufferAttribute(t,n),oo.fromBufferAttribute(t,i),a.setScalar(0),a.addScaledVector(ro,r.x),a.addScaledVector(ao,r.y),a.addScaledVector(oo,r.z),a}static isFrontFacing(t,e,n,i){return Tn.subVectors(n,e),Yn.subVectors(t,e),Tn.cross(Yn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Tn.subVectors(this.c,this.b),Yn.subVectors(this.a,this.b),Tn.cross(Yn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Rn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Rn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return Rn.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return Rn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Rn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,r=this.c;let a,o;is.subVectors(i,n),ss.subVectors(r,n),no.subVectors(t,n);const c=is.dot(no),l=ss.dot(no);if(c<=0&&l<=0)return e.copy(n);io.subVectors(t,i);const h=is.dot(io),u=ss.dot(io);if(h>=0&&u<=h)return e.copy(i);const f=c*u-h*l;if(f<=0&&c>=0&&h<=0)return a=c/(c-h),e.copy(n).addScaledVector(is,a);so.subVectors(t,r);const d=is.dot(so),b=ss.dot(so);if(b>=0&&d<=b)return e.copy(r);const m=d*l-c*b;if(m<=0&&l>=0&&b<=0)return o=l/(l-b),e.copy(n).addScaledVector(ss,o);const g=h*b-d*u;if(g<=0&&u-h>=0&&d-b>=0)return Zl.subVectors(r,i),o=(u-h)/(u-h+(d-b)),e.copy(i).addScaledVector(Zl,o);const p=1/(g+m+f);return a=m*p,o=f*p,e.copy(n).addScaledVector(is,a).addScaledVector(ss,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Gu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},gi={h:0,s:0,l:0},Fr={h:0,s:0,l:0};function co(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class ot{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ie){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,te.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=te.workingColorSpace){return this.r=t,this.g=e,this.b=n,te.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=te.workingColorSpace){if(t=qc(t,1),e=ze(e,0,1),n=ze(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=co(a,r,t+1/3),this.g=co(a,r,t),this.b=co(a,r,t-1/3)}return te.toWorkingColorSpace(this,i),this}setStyle(t,e=Ie){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ie){const n=Gu[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ii(t.r),this.g=ii(t.g),this.b=ii(t.b),this}copyLinearToSRGB(t){return this.r=bs(t.r),this.g=bs(t.g),this.b=bs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ie){return te.fromWorkingColorSpace(He.copy(this),t),Math.round(ze(He.r*255,0,255))*65536+Math.round(ze(He.g*255,0,255))*256+Math.round(ze(He.b*255,0,255))}getHexString(t=Ie){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=te.workingColorSpace){te.fromWorkingColorSpace(He.copy(this),e);const n=He.r,i=He.g,r=He.b,a=Math.max(n,i,r),o=Math.min(n,i,r);let c,l;const h=(o+a)/2;if(o===a)c=0,l=0;else{const u=a-o;switch(l=h<=.5?u/(a+o):u/(2-a-o),a){case n:c=(i-r)/u+(i<r?6:0);break;case i:c=(r-n)/u+2;break;case r:c=(n-i)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=te.workingColorSpace){return te.fromWorkingColorSpace(He.copy(this),e),t.r=He.r,t.g=He.g,t.b=He.b,t}getStyle(t=Ie){te.fromWorkingColorSpace(He.copy(this),t);const e=He.r,n=He.g,i=He.b;return t!==Ie?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(gi),this.setHSL(gi.h+t,gi.s+e,gi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(gi),t.getHSL(Fr);const n=rr(gi.h,Fr.h,e),i=rr(gi.s,Fr.s,e),r=rr(gi.l,Fr.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const He=new ot;ot.NAMES=Gu;let Zd=0;class xn extends Is{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Zd++}),this.uuid=bn(),this.name="",this.blending=ms,this.side=ai,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=zo,this.blendDst=Bo,this.blendEquation=Bi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ot(0,0,0),this.blendAlpha=0,this.depthFunc=vs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ul,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Yi,this.stencilZFail=Yi,this.stencilZPass=Yi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ms&&(n.blending=this.blending),this.side!==ai&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==zo&&(n.blendSrc=this.blendSrc),this.blendDst!==Bo&&(n.blendDst=this.blendDst),this.blendEquation!==Bi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==vs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ul&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Yi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Yi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Yi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const a=[];for(const o in r){const c=r[o];delete c.metadata,a.push(c)}return a}if(e){const r=i(t.textures),a=i(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Pe extends xn{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new ot(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ln,this.combine=zc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Le=new R,kr=new ct;class fe{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Sc,this.updateRanges=[],this.gpuType=Cn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)kr.fromBufferAttribute(this,e),kr.applyMatrix3(t),this.setXY(e,kr.x,kr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.applyMatrix3(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.applyMatrix4(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.applyNormalMatrix(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.transformDirection(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=An(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=he(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=An(e,this.array)),e}setX(t,e){return this.normalized&&(e=he(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=An(e,this.array)),e}setY(t,e){return this.normalized&&(e=he(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=An(e,this.array)),e}setZ(t,e){return this.normalized&&(e=he(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=An(e,this.array)),e}setW(t,e){return this.normalized&&(e=he(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=he(e,this.array),n=he(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=he(e,this.array),n=he(n,this.array),i=he(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=he(e,this.array),n=he(n,this.array),i=he(i,this.array),r=he(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Sc&&(t.usage=this.usage),t}}class Hu extends fe{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Vu extends fe{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class se extends fe{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Qd=0;const un=new Nt,lo=new pe,rs=new R,nn=new li,Hs=new li,Oe=new R;class ve extends Is{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Qd++}),this.uuid=bn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(ku(t)?Vu:Hu)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new qt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return un.makeRotationFromQuaternion(t),this.applyMatrix4(un),this}rotateX(t){return un.makeRotationX(t),this.applyMatrix4(un),this}rotateY(t){return un.makeRotationY(t),this.applyMatrix4(un),this}rotateZ(t){return un.makeRotationZ(t),this.applyMatrix4(un),this}translate(t,e,n){return un.makeTranslation(t,e,n),this.applyMatrix4(un),this}scale(t,e,n){return un.makeScale(t,e,n),this.applyMatrix4(un),this}lookAt(t){return lo.lookAt(t),lo.updateMatrix(),this.applyMatrix4(lo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(rs).negate(),this.translate(rs.x,rs.y,rs.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let i=0,r=t.length;i<r;i++){const a=t[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new se(n,3))}else{for(let n=0,i=e.count;n<i;n++){const r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new li);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const r=e[n];nn.setFromBufferAttribute(r),this.morphTargetsRelative?(Oe.addVectors(this.boundingBox.min,nn.min),this.boundingBox.expandByPoint(Oe),Oe.addVectors(this.boundingBox.max,nn.max),this.boundingBox.expandByPoint(Oe)):(this.boundingBox.expandByPoint(nn.min),this.boundingBox.expandByPoint(nn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Bn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new R,1/0);return}if(t){const n=this.boundingSphere.center;if(nn.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];Hs.setFromBufferAttribute(o),this.morphTargetsRelative?(Oe.addVectors(nn.min,Hs.min),nn.expandByPoint(Oe),Oe.addVectors(nn.max,Hs.max),nn.expandByPoint(Oe)):(nn.expandByPoint(Hs.min),nn.expandByPoint(Hs.max))}nn.getCenter(n);let i=0;for(let r=0,a=t.count;r<a;r++)Oe.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(Oe));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)Oe.fromBufferAttribute(o,l),c&&(rs.fromBufferAttribute(t,l),Oe.add(rs)),i=Math.max(i,n.distanceToSquared(Oe))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new fe(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let L=0;L<n.count;L++)o[L]=new R,c[L]=new R;const l=new R,h=new R,u=new R,f=new ct,d=new ct,b=new ct,m=new R,g=new R;function p(L,M,y){l.fromBufferAttribute(n,L),h.fromBufferAttribute(n,M),u.fromBufferAttribute(n,y),f.fromBufferAttribute(r,L),d.fromBufferAttribute(r,M),b.fromBufferAttribute(r,y),h.sub(l),u.sub(l),d.sub(f),b.sub(f);const P=1/(d.x*b.y-b.x*d.y);isFinite(P)&&(m.copy(h).multiplyScalar(b.y).addScaledVector(u,-d.y).multiplyScalar(P),g.copy(u).multiplyScalar(d.x).addScaledVector(h,-b.x).multiplyScalar(P),o[L].add(m),o[M].add(m),o[y].add(m),c[L].add(g),c[M].add(g),c[y].add(g))}let v=this.groups;v.length===0&&(v=[{start:0,count:t.count}]);for(let L=0,M=v.length;L<M;++L){const y=v[L],P=y.start,D=y.count;for(let N=P,O=P+D;N<O;N+=3)p(t.getX(N+0),t.getX(N+1),t.getX(N+2))}const _=new R,x=new R,C=new R,w=new R;function E(L){C.fromBufferAttribute(i,L),w.copy(C);const M=o[L];_.copy(M),_.sub(C.multiplyScalar(C.dot(M))).normalize(),x.crossVectors(w,M);const P=x.dot(c[L])<0?-1:1;a.setXYZW(L,_.x,_.y,_.z,P)}for(let L=0,M=v.length;L<M;++L){const y=v[L],P=y.start,D=y.count;for(let N=P,O=P+D;N<O;N+=3)E(t.getX(N+0)),E(t.getX(N+1)),E(t.getX(N+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new fe(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const i=new R,r=new R,a=new R,o=new R,c=new R,l=new R,h=new R,u=new R;if(t)for(let f=0,d=t.count;f<d;f+=3){const b=t.getX(f+0),m=t.getX(f+1),g=t.getX(f+2);i.fromBufferAttribute(e,b),r.fromBufferAttribute(e,m),a.fromBufferAttribute(e,g),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),o.fromBufferAttribute(n,b),c.fromBufferAttribute(n,m),l.fromBufferAttribute(n,g),o.add(h),c.add(h),l.add(h),n.setXYZ(b,o.x,o.y,o.z),n.setXYZ(m,c.x,c.y,c.z),n.setXYZ(g,l.x,l.y,l.z)}else for(let f=0,d=e.count;f<d;f+=3)i.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),a.fromBufferAttribute(e,f+2),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Oe.fromBufferAttribute(t,e),Oe.normalize(),t.setXYZ(e,Oe.x,Oe.y,Oe.z)}toNonIndexed(){function t(o,c){const l=o.array,h=o.itemSize,u=o.normalized,f=new l.constructor(c.length*h);let d=0,b=0;for(let m=0,g=c.length;m<g;m++){o.isInterleavedBufferAttribute?d=c[m]*o.data.stride+o.offset:d=c[m]*h;for(let p=0;p<h;p++)f[b++]=l[d++]}return new fe(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new ve,n=this.index.array,i=this.attributes;for(const o in i){const c=i[o],l=t(c,n);e.setAttribute(o,l)}const r=this.morphAttributes;for(const o in r){const c=[],l=r[o];for(let h=0,u=l.length;h<u;h++){const f=l[h],d=t(f,n);c.push(d)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const i={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,f=l.length;u<f;u++){const d=l[u];h.push(d.toJSON(t.data))}h.length>0&&(i[c]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const l in i){const h=i[l];this.setAttribute(l,h.clone(e))}const r=t.morphAttributes;for(const l in r){const h=[],u=r[l];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let l=0,h=a.length;l<h;l++){const u=a[l];this.addGroup(u.start,u.count,u.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ql=new Nt,Li=new Na,Or=new Bn,$l=new R,zr=new R,Br=new R,Gr=new R,ho=new R,Hr=new R,th=new R,Vr=new R;class at extends pe{constructor(t=new ve,e=new Pe){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const o=this.morphTargetInfluences;if(r&&o){Hr.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=o[c],u=r[c];h!==0&&(ho.fromBufferAttribute(u,t),a?Hr.addScaledVector(ho,h):Hr.addScaledVector(ho.sub(e),h))}e.add(Hr)}return e}raycast(t,e){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Or.copy(n.boundingSphere),Or.applyMatrix4(r),Li.copy(t.ray).recast(t.near),!(Or.containsPoint(Li.origin)===!1&&(Li.intersectSphere(Or,$l)===null||Li.origin.distanceToSquared($l)>(t.far-t.near)**2))&&(Ql.copy(r).invert(),Li.copy(t.ray).applyMatrix4(Ql),!(n.boundingBox!==null&&Li.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Li)))}_computeIntersections(t,e,n){let i;const r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let b=0,m=f.length;b<m;b++){const g=f[b],p=a[g.materialIndex],v=Math.max(g.start,d.start),_=Math.min(o.count,Math.min(g.start+g.count,d.start+d.count));for(let x=v,C=_;x<C;x+=3){const w=o.getX(x),E=o.getX(x+1),L=o.getX(x+2);i=Wr(this,p,t,n,l,h,u,w,E,L),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=g.materialIndex,e.push(i))}}else{const b=Math.max(0,d.start),m=Math.min(o.count,d.start+d.count);for(let g=b,p=m;g<p;g+=3){const v=o.getX(g),_=o.getX(g+1),x=o.getX(g+2);i=Wr(this,a,t,n,l,h,u,v,_,x),i&&(i.faceIndex=Math.floor(g/3),e.push(i))}}else if(c!==void 0)if(Array.isArray(a))for(let b=0,m=f.length;b<m;b++){const g=f[b],p=a[g.materialIndex],v=Math.max(g.start,d.start),_=Math.min(c.count,Math.min(g.start+g.count,d.start+d.count));for(let x=v,C=_;x<C;x+=3){const w=x,E=x+1,L=x+2;i=Wr(this,p,t,n,l,h,u,w,E,L),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=g.materialIndex,e.push(i))}}else{const b=Math.max(0,d.start),m=Math.min(c.count,d.start+d.count);for(let g=b,p=m;g<p;g+=3){const v=g,_=g+1,x=g+2;i=Wr(this,a,t,n,l,h,u,v,_,x),i&&(i.faceIndex=Math.floor(g/3),e.push(i))}}}}function $d(s,t,e,n,i,r,a,o){let c;if(t.side===Je?c=n.intersectTriangle(a,r,i,!0,o):c=n.intersectTriangle(i,r,a,t.side===ai,o),c===null)return null;Vr.copy(o),Vr.applyMatrix4(s.matrixWorld);const l=e.ray.origin.distanceTo(Vr);return l<e.near||l>e.far?null:{distance:l,point:Vr.clone(),object:s}}function Wr(s,t,e,n,i,r,a,o,c,l){s.getVertexPosition(o,zr),s.getVertexPosition(c,Br),s.getVertexPosition(l,Gr);const h=$d(s,t,e,n,zr,Br,Gr,th);if(h){const u=new R;Rn.getBarycoord(th,zr,Br,Gr,u),i&&(h.uv=Rn.getInterpolatedAttribute(i,o,c,l,u,new ct)),r&&(h.uv1=Rn.getInterpolatedAttribute(r,o,c,l,u,new ct)),a&&(h.normal=Rn.getInterpolatedAttribute(a,o,c,l,u,new R),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const f={a:o,b:c,c:l,normal:new R,materialIndex:0};Rn.getNormal(zr,Br,Gr,f.normal),h.face=f,h.barycoord=u}return h}class Re extends ve{constructor(t=1,e=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};const o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);const c=[],l=[],h=[],u=[];let f=0,d=0;b("z","y","x",-1,-1,n,e,t,a,r,0),b("z","y","x",1,-1,n,e,-t,a,r,1),b("x","z","y",1,1,t,n,e,i,a,2),b("x","z","y",1,-1,t,n,-e,i,a,3),b("x","y","z",1,-1,t,e,n,i,r,4),b("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new se(l,3)),this.setAttribute("normal",new se(h,3)),this.setAttribute("uv",new se(u,2));function b(m,g,p,v,_,x,C,w,E,L,M){const y=x/E,P=C/L,D=x/2,N=C/2,O=w/2,W=E+1,z=L+1;let Z=0,V=0;const et=new R;for(let lt=0;lt<z;lt++){const ht=lt*P-N;for(let Ut=0;Ut<W;Ut++){const Vt=Ut*y-D;et[m]=Vt*v,et[g]=ht*_,et[p]=O,l.push(et.x,et.y,et.z),et[m]=0,et[g]=0,et[p]=w>0?1:-1,h.push(et.x,et.y,et.z),u.push(Ut/E),u.push(1-lt/L),Z+=1}}for(let lt=0;lt<L;lt++)for(let ht=0;ht<E;ht++){const Ut=f+ht+W*lt,Vt=f+ht+W*(lt+1),q=f+(ht+1)+W*(lt+1),tt=f+(ht+1)+W*lt;c.push(Ut,Vt,tt),c.push(Vt,q,tt),V+=6}o.addGroup(d,V,M),d+=V,f+=Z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Re(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function ws(s){const t={};for(const e in s){t[e]={};for(const n in s[e]){const i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Ke(s){const t={};for(let e=0;e<s.length;e++){const n=ws(s[e]);for(const i in n)t[i]=n[i]}return t}function tp(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function Wu(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:te.workingColorSpace}const ep={clone:ws,merge:Ke};var np=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ip=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class an extends xn{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=np,this.fragmentShader=ip,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ws(t.uniforms),this.uniformsGroups=tp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?e.uniforms[i]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[i]={type:"m4",value:a.toArray()}:e.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class ju extends pe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Nt,this.projectionMatrix=new Nt,this.projectionMatrixInverse=new Nt,this.coordinateSystem=ni}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const bi=new R,eh=new ct,nh=new ct;class We extends ju{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Ts*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(sr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ts*2*Math.atan(Math.tan(sr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){bi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(bi.x,bi.y).multiplyScalar(-t/bi.z),bi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(bi.x,bi.y).multiplyScalar(-t/bi.z)}getViewSize(t,e){return this.getViewBounds(t,eh,nh),e.subVectors(nh,eh)}setViewOffset(t,e,n,i,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(sr*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*i/c,e-=a.offsetY*n/l,i*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const as=-90,os=1;class sp extends pe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new We(as,os,t,e);i.layers=this.layers,this.add(i);const r=new We(as,os,t,e);r.layers=this.layers,this.add(r);const a=new We(as,os,t,e);a.layers=this.layers,this.add(a);const o=new We(as,os,t,e);o.layers=this.layers,this.add(o);const c=new We(as,os,t,e);c.layers=this.layers,this.add(c);const l=new We(as,os,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,r,a,o,c]=e;for(const l of e)this.remove(l);if(t===ni)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Ma)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,c,l,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),b=t.xr.enabled;t.xr.enabled=!1;const m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,r),t.setRenderTarget(n,1,i),t.render(e,a),t.setRenderTarget(n,2,i),t.render(e,o),t.setRenderTarget(n,3,i),t.render(e,c),t.setRenderTarget(n,4,i),t.render(e,l),n.texture.generateMipmaps=m,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(u,f,d),t.xr.enabled=b,n.texture.needsPMREMUpdate=!0}}class qu extends Ne{constructor(t,e,n,i,r,a,o,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:_s,super(t,e,n,i,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class rp extends ci{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new qu(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:rn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Re(5,5,5),r=new an({name:"CubemapFromEquirect",uniforms:ws(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Je,blending:wi});r.uniforms.tEquirect.value=e;const a=new at(i,r),o=e.minFilter;return e.minFilter===ei&&(e.minFilter=rn),new sp(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,i){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,i);t.setRenderTarget(r)}}const uo=new R,ap=new R,op=new qt;class ki{constructor(t=new R(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=uo.subVectors(n,e).cross(ap.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(uo),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||op.getNormalMatrix(t),i=this.coplanarPoint(uo).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ii=new Bn,jr=new R;class Xc{constructor(t=new ki,e=new ki,n=new ki,i=new ki,r=new ki,a=new ki){this.planes=[t,e,n,i,r,a]}set(t,e,n,i,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=ni){const n=this.planes,i=t.elements,r=i[0],a=i[1],o=i[2],c=i[3],l=i[4],h=i[5],u=i[6],f=i[7],d=i[8],b=i[9],m=i[10],g=i[11],p=i[12],v=i[13],_=i[14],x=i[15];if(n[0].setComponents(c-r,f-l,g-d,x-p).normalize(),n[1].setComponents(c+r,f+l,g+d,x+p).normalize(),n[2].setComponents(c+a,f+h,g+b,x+v).normalize(),n[3].setComponents(c-a,f-h,g-b,x-v).normalize(),n[4].setComponents(c-o,f-u,g-m,x-_).normalize(),e===ni)n[5].setComponents(c+o,f+u,g+m,x+_).normalize();else if(e===Ma)n[5].setComponents(o,u,m,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ii.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ii.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ii)}intersectsSprite(t){return Ii.center.set(0,0,0),Ii.radius=.7071067811865476,Ii.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ii)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(jr.x=i.normal.x>0?t.max.x:t.min.x,jr.y=i.normal.y>0?t.max.y:t.min.y,jr.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(jr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Xu(){let s=null,t=!1,e=null,n=null;function i(r,a){e(r,a),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function cp(s){const t=new WeakMap;function e(o,c){const l=o.array,h=o.usage,u=l.byteLength,f=s.createBuffer();s.bindBuffer(c,f),s.bufferData(c,l,h),o.onUploadCallback();let d;if(l instanceof Float32Array)d=s.FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?d=s.HALF_FLOAT:d=s.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=s.SHORT;else if(l instanceof Uint32Array)d=s.UNSIGNED_INT;else if(l instanceof Int32Array)d=s.INT;else if(l instanceof Int8Array)d=s.BYTE;else if(l instanceof Uint8Array)d=s.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,c,l){const h=c.array,u=c.updateRanges;if(s.bindBuffer(l,o),u.length===0)s.bufferSubData(l,0,h);else{u.sort((d,b)=>d.start-b.start);let f=0;for(let d=1;d<u.length;d++){const b=u[f],m=u[d];m.start<=b.start+b.count+1?b.count=Math.max(b.count,m.start+m.count-b.start):(++f,u[f]=m)}u.length=f+1;for(let d=0,b=u.length;d<b;d++){const m=u[d];s.bufferSubData(l,m.start*h.BYTES_PER_ELEMENT,h,m.start,m.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=t.get(o);c&&(s.deleteBuffer(c.buffer),t.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=t.get(o);if(l===void 0)t.set(o,e(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:i,remove:r,update:a}}class on extends ve{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const r=t/2,a=e/2,o=Math.floor(n),c=Math.floor(i),l=o+1,h=c+1,u=t/o,f=e/c,d=[],b=[],m=[],g=[];for(let p=0;p<h;p++){const v=p*f-a;for(let _=0;_<l;_++){const x=_*u-r;b.push(x,-v,0),m.push(0,0,1),g.push(_/o),g.push(1-p/c)}}for(let p=0;p<c;p++)for(let v=0;v<o;v++){const _=v+l*p,x=v+l*(p+1),C=v+1+l*(p+1),w=v+1+l*p;d.push(_,x,w),d.push(x,C,w)}this.setIndex(d),this.setAttribute("position",new se(b,3)),this.setAttribute("normal",new se(m,3)),this.setAttribute("uv",new se(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new on(t.width,t.height,t.widthSegments,t.heightSegments)}}var lp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,hp=`#ifdef USE_ALPHAHASH
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
#endif`,up=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,fp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,dp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,pp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,mp=`#ifdef USE_AOMAP
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
#endif`,gp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,bp=`#ifdef USE_BATCHING
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
#endif`,xp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,vp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,_p=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Mp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,yp=`#ifdef USE_IRIDESCENCE
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
#endif`,Sp=`#ifdef USE_BUMPMAP
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
#endif`,Tp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,wp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ep=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ap=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Rp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Cp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Pp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Lp=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Ip=`#define PI 3.141592653589793
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
} // validated`,Dp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Up=`vec3 transformedNormal = objectNormal;
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
#endif`,Np=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Fp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,kp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Op=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,zp="gl_FragColor = linearToOutputTexel( gl_FragColor );",Bp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Gp=`#ifdef USE_ENVMAP
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
#endif`,Hp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Vp=`#ifdef USE_ENVMAP
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
#endif`,Wp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,jp=`#ifdef USE_ENVMAP
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
#endif`,qp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Xp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Kp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Yp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Jp=`#ifdef USE_GRADIENTMAP
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
}`,Zp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Qp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,$p=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,tm=`uniform bool receiveShadow;
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
#endif`,em=`#ifdef USE_ENVMAP
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
#endif`,nm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,im=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,sm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,rm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,am=`PhysicalMaterial material;
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
#endif`,om=`struct PhysicalMaterial {
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
}`,cm=`
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
#endif`,lm=`#if defined( RE_IndirectDiffuse )
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
#endif`,hm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,um=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,fm=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,dm=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,pm=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,mm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,gm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,bm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,xm=`#if defined( USE_POINTS_UV )
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
#endif`,vm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,_m=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Mm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ym=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Sm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Tm=`#ifdef USE_MORPHTARGETS
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
#endif`,wm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Em=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Am=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Rm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Cm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Pm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Lm=`#ifdef USE_NORMALMAP
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
#endif`,Im=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Dm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Um=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Nm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Fm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,km=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Om=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,zm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Bm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Gm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Hm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Vm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Wm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,jm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,qm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Xm=`float getShadowMask() {
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
}`,Km=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ym=`#ifdef USE_SKINNING
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
#endif`,Jm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Zm=`#ifdef USE_SKINNING
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
#endif`,Qm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,$m=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,t0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,e0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,n0=`#ifdef USE_TRANSMISSION
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
#endif`,i0=`#ifdef USE_TRANSMISSION
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
#endif`,s0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,r0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,a0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,o0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const c0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,l0=`uniform sampler2D t2D;
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
}`,h0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,u0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,f0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,d0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,p0=`#include <common>
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
}`,m0=`#if DEPTH_PACKING == 3200
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
}`,g0=`#define DISTANCE
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
}`,b0=`#define DISTANCE
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
}`,x0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,v0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_0=`uniform float scale;
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
}`,M0=`uniform vec3 diffuse;
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
}`,y0=`#include <common>
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
}`,S0=`uniform vec3 diffuse;
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
}`,T0=`#define LAMBERT
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
}`,w0=`#define LAMBERT
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
}`,E0=`#define MATCAP
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
}`,A0=`#define MATCAP
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
}`,R0=`#define NORMAL
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
}`,C0=`#define NORMAL
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
}`,P0=`#define PHONG
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
}`,L0=`#define PHONG
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
}`,I0=`#define STANDARD
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
}`,D0=`#define STANDARD
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
}`,U0=`#define TOON
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
}`,N0=`#define TOON
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
}`,F0=`uniform float size;
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
}`,k0=`uniform vec3 diffuse;
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
}`,O0=`#include <common>
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
}`,z0=`uniform vec3 color;
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
}`,B0=`uniform float rotation;
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
}`,G0=`uniform vec3 diffuse;
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
}`,Kt={alphahash_fragment:lp,alphahash_pars_fragment:hp,alphamap_fragment:up,alphamap_pars_fragment:fp,alphatest_fragment:dp,alphatest_pars_fragment:pp,aomap_fragment:mp,aomap_pars_fragment:gp,batching_pars_vertex:bp,batching_vertex:xp,begin_vertex:vp,beginnormal_vertex:_p,bsdfs:Mp,iridescence_fragment:yp,bumpmap_pars_fragment:Sp,clipping_planes_fragment:Tp,clipping_planes_pars_fragment:wp,clipping_planes_pars_vertex:Ep,clipping_planes_vertex:Ap,color_fragment:Rp,color_pars_fragment:Cp,color_pars_vertex:Pp,color_vertex:Lp,common:Ip,cube_uv_reflection_fragment:Dp,defaultnormal_vertex:Up,displacementmap_pars_vertex:Np,displacementmap_vertex:Fp,emissivemap_fragment:kp,emissivemap_pars_fragment:Op,colorspace_fragment:zp,colorspace_pars_fragment:Bp,envmap_fragment:Gp,envmap_common_pars_fragment:Hp,envmap_pars_fragment:Vp,envmap_pars_vertex:Wp,envmap_physical_pars_fragment:em,envmap_vertex:jp,fog_vertex:qp,fog_pars_vertex:Xp,fog_fragment:Kp,fog_pars_fragment:Yp,gradientmap_pars_fragment:Jp,lightmap_pars_fragment:Zp,lights_lambert_fragment:Qp,lights_lambert_pars_fragment:$p,lights_pars_begin:tm,lights_toon_fragment:nm,lights_toon_pars_fragment:im,lights_phong_fragment:sm,lights_phong_pars_fragment:rm,lights_physical_fragment:am,lights_physical_pars_fragment:om,lights_fragment_begin:cm,lights_fragment_maps:lm,lights_fragment_end:hm,logdepthbuf_fragment:um,logdepthbuf_pars_fragment:fm,logdepthbuf_pars_vertex:dm,logdepthbuf_vertex:pm,map_fragment:mm,map_pars_fragment:gm,map_particle_fragment:bm,map_particle_pars_fragment:xm,metalnessmap_fragment:vm,metalnessmap_pars_fragment:_m,morphinstance_vertex:Mm,morphcolor_vertex:ym,morphnormal_vertex:Sm,morphtarget_pars_vertex:Tm,morphtarget_vertex:wm,normal_fragment_begin:Em,normal_fragment_maps:Am,normal_pars_fragment:Rm,normal_pars_vertex:Cm,normal_vertex:Pm,normalmap_pars_fragment:Lm,clearcoat_normal_fragment_begin:Im,clearcoat_normal_fragment_maps:Dm,clearcoat_pars_fragment:Um,iridescence_pars_fragment:Nm,opaque_fragment:Fm,packing:km,premultiplied_alpha_fragment:Om,project_vertex:zm,dithering_fragment:Bm,dithering_pars_fragment:Gm,roughnessmap_fragment:Hm,roughnessmap_pars_fragment:Vm,shadowmap_pars_fragment:Wm,shadowmap_pars_vertex:jm,shadowmap_vertex:qm,shadowmask_pars_fragment:Xm,skinbase_vertex:Km,skinning_pars_vertex:Ym,skinning_vertex:Jm,skinnormal_vertex:Zm,specularmap_fragment:Qm,specularmap_pars_fragment:$m,tonemapping_fragment:t0,tonemapping_pars_fragment:e0,transmission_fragment:n0,transmission_pars_fragment:i0,uv_pars_fragment:s0,uv_pars_vertex:r0,uv_vertex:a0,worldpos_vertex:o0,background_vert:c0,background_frag:l0,backgroundCube_vert:h0,backgroundCube_frag:u0,cube_vert:f0,cube_frag:d0,depth_vert:p0,depth_frag:m0,distanceRGBA_vert:g0,distanceRGBA_frag:b0,equirect_vert:x0,equirect_frag:v0,linedashed_vert:_0,linedashed_frag:M0,meshbasic_vert:y0,meshbasic_frag:S0,meshlambert_vert:T0,meshlambert_frag:w0,meshmatcap_vert:E0,meshmatcap_frag:A0,meshnormal_vert:R0,meshnormal_frag:C0,meshphong_vert:P0,meshphong_frag:L0,meshphysical_vert:I0,meshphysical_frag:D0,meshtoon_vert:U0,meshtoon_frag:N0,points_vert:F0,points_frag:k0,shadow_vert:O0,shadow_frag:z0,sprite_vert:B0,sprite_frag:G0},ft={common:{diffuse:{value:new ot(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new qt},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new qt}},envmap:{envMap:{value:null},envMapRotation:{value:new qt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new qt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new qt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new qt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new qt},normalScale:{value:new ct(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new qt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new qt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new qt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new qt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ot(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ot(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0},uvTransform:{value:new qt}},sprite:{diffuse:{value:new ot(16777215)},opacity:{value:1},center:{value:new ct(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new qt},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0}}},Fn={basic:{uniforms:Ke([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.fog]),vertexShader:Kt.meshbasic_vert,fragmentShader:Kt.meshbasic_frag},lambert:{uniforms:Ke([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,ft.lights,{emissive:{value:new ot(0)}}]),vertexShader:Kt.meshlambert_vert,fragmentShader:Kt.meshlambert_frag},phong:{uniforms:Ke([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,ft.lights,{emissive:{value:new ot(0)},specular:{value:new ot(1118481)},shininess:{value:30}}]),vertexShader:Kt.meshphong_vert,fragmentShader:Kt.meshphong_frag},standard:{uniforms:Ke([ft.common,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.roughnessmap,ft.metalnessmap,ft.fog,ft.lights,{emissive:{value:new ot(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Kt.meshphysical_vert,fragmentShader:Kt.meshphysical_frag},toon:{uniforms:Ke([ft.common,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.gradientmap,ft.fog,ft.lights,{emissive:{value:new ot(0)}}]),vertexShader:Kt.meshtoon_vert,fragmentShader:Kt.meshtoon_frag},matcap:{uniforms:Ke([ft.common,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,{matcap:{value:null}}]),vertexShader:Kt.meshmatcap_vert,fragmentShader:Kt.meshmatcap_frag},points:{uniforms:Ke([ft.points,ft.fog]),vertexShader:Kt.points_vert,fragmentShader:Kt.points_frag},dashed:{uniforms:Ke([ft.common,ft.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Kt.linedashed_vert,fragmentShader:Kt.linedashed_frag},depth:{uniforms:Ke([ft.common,ft.displacementmap]),vertexShader:Kt.depth_vert,fragmentShader:Kt.depth_frag},normal:{uniforms:Ke([ft.common,ft.bumpmap,ft.normalmap,ft.displacementmap,{opacity:{value:1}}]),vertexShader:Kt.meshnormal_vert,fragmentShader:Kt.meshnormal_frag},sprite:{uniforms:Ke([ft.sprite,ft.fog]),vertexShader:Kt.sprite_vert,fragmentShader:Kt.sprite_frag},background:{uniforms:{uvTransform:{value:new qt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Kt.background_vert,fragmentShader:Kt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new qt}},vertexShader:Kt.backgroundCube_vert,fragmentShader:Kt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Kt.cube_vert,fragmentShader:Kt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Kt.equirect_vert,fragmentShader:Kt.equirect_frag},distanceRGBA:{uniforms:Ke([ft.common,ft.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Kt.distanceRGBA_vert,fragmentShader:Kt.distanceRGBA_frag},shadow:{uniforms:Ke([ft.lights,ft.fog,{color:{value:new ot(0)},opacity:{value:1}}]),vertexShader:Kt.shadow_vert,fragmentShader:Kt.shadow_frag}};Fn.physical={uniforms:Ke([Fn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new qt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new qt},clearcoatNormalScale:{value:new ct(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new qt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new qt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new qt},sheen:{value:0},sheenColor:{value:new ot(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new qt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new qt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new qt},transmissionSamplerSize:{value:new ct},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new qt},attenuationDistance:{value:0},attenuationColor:{value:new ot(0)},specularColor:{value:new ot(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new qt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new qt},anisotropyVector:{value:new ct},anisotropyMap:{value:null},anisotropyMapTransform:{value:new qt}}]),vertexShader:Kt.meshphysical_vert,fragmentShader:Kt.meshphysical_frag};const qr={r:0,b:0,g:0},Di=new ln,H0=new Nt;function V0(s,t,e,n,i,r,a){const o=new ot(0);let c=r===!0?0:1,l,h,u=null,f=0,d=null;function b(v){let _=v.isScene===!0?v.background:null;return _&&_.isTexture&&(_=(v.backgroundBlurriness>0?e:t).get(_)),_}function m(v){let _=!1;const x=b(v);x===null?p(o,c):x&&x.isColor&&(p(x,1),_=!0);const C=s.xr.getEnvironmentBlendMode();C==="additive"?n.buffers.color.setClear(0,0,0,1,a):C==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(s.autoClear||_)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function g(v,_){const x=b(_);x&&(x.isCubeTexture||x.mapping===La)?(h===void 0&&(h=new at(new Re(1,1,1),new an({name:"BackgroundCubeMaterial",uniforms:ws(Fn.backgroundCube.uniforms),vertexShader:Fn.backgroundCube.vertexShader,fragmentShader:Fn.backgroundCube.fragmentShader,side:Je,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(C,w,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),Di.copy(_.backgroundRotation),Di.x*=-1,Di.y*=-1,Di.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Di.y*=-1,Di.z*=-1),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(H0.makeRotationFromEuler(Di)),h.material.toneMapped=te.getTransfer(x.colorSpace)!==de,(u!==x||f!==x.version||d!==s.toneMapping)&&(h.material.needsUpdate=!0,u=x,f=x.version,d=s.toneMapping),h.layers.enableAll(),v.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new at(new on(2,2),new an({name:"BackgroundMaterial",uniforms:ws(Fn.background.uniforms),vertexShader:Fn.background.vertexShader,fragmentShader:Fn.background.fragmentShader,side:ai,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,l.material.toneMapped=te.getTransfer(x.colorSpace)!==de,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||f!==x.version||d!==s.toneMapping)&&(l.material.needsUpdate=!0,u=x,f=x.version,d=s.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function p(v,_){v.getRGB(qr,Wu(s)),n.buffers.color.setClear(qr.r,qr.g,qr.b,_,a)}return{getClearColor:function(){return o},setClearColor:function(v,_=1){o.set(v),c=_,p(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(v){c=v,p(o,c)},render:m,addToRenderList:g}}function W0(s,t){const e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=f(null);let r=i,a=!1;function o(y,P,D,N,O){let W=!1;const z=u(N,D,P);r!==z&&(r=z,l(r.object)),W=d(y,N,D,O),W&&b(y,N,D,O),O!==null&&t.update(O,s.ELEMENT_ARRAY_BUFFER),(W||a)&&(a=!1,x(y,P,D,N),O!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(O).buffer))}function c(){return s.createVertexArray()}function l(y){return s.bindVertexArray(y)}function h(y){return s.deleteVertexArray(y)}function u(y,P,D){const N=D.wireframe===!0;let O=n[y.id];O===void 0&&(O={},n[y.id]=O);let W=O[P.id];W===void 0&&(W={},O[P.id]=W);let z=W[N];return z===void 0&&(z=f(c()),W[N]=z),z}function f(y){const P=[],D=[],N=[];for(let O=0;O<e;O++)P[O]=0,D[O]=0,N[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:D,attributeDivisors:N,object:y,attributes:{},index:null}}function d(y,P,D,N){const O=r.attributes,W=P.attributes;let z=0;const Z=D.getAttributes();for(const V in Z)if(Z[V].location>=0){const lt=O[V];let ht=W[V];if(ht===void 0&&(V==="instanceMatrix"&&y.instanceMatrix&&(ht=y.instanceMatrix),V==="instanceColor"&&y.instanceColor&&(ht=y.instanceColor)),lt===void 0||lt.attribute!==ht||ht&&lt.data!==ht.data)return!0;z++}return r.attributesNum!==z||r.index!==N}function b(y,P,D,N){const O={},W=P.attributes;let z=0;const Z=D.getAttributes();for(const V in Z)if(Z[V].location>=0){let lt=W[V];lt===void 0&&(V==="instanceMatrix"&&y.instanceMatrix&&(lt=y.instanceMatrix),V==="instanceColor"&&y.instanceColor&&(lt=y.instanceColor));const ht={};ht.attribute=lt,lt&&lt.data&&(ht.data=lt.data),O[V]=ht,z++}r.attributes=O,r.attributesNum=z,r.index=N}function m(){const y=r.newAttributes;for(let P=0,D=y.length;P<D;P++)y[P]=0}function g(y){p(y,0)}function p(y,P){const D=r.newAttributes,N=r.enabledAttributes,O=r.attributeDivisors;D[y]=1,N[y]===0&&(s.enableVertexAttribArray(y),N[y]=1),O[y]!==P&&(s.vertexAttribDivisor(y,P),O[y]=P)}function v(){const y=r.newAttributes,P=r.enabledAttributes;for(let D=0,N=P.length;D<N;D++)P[D]!==y[D]&&(s.disableVertexAttribArray(D),P[D]=0)}function _(y,P,D,N,O,W,z){z===!0?s.vertexAttribIPointer(y,P,D,O,W):s.vertexAttribPointer(y,P,D,N,O,W)}function x(y,P,D,N){m();const O=N.attributes,W=D.getAttributes(),z=P.defaultAttributeValues;for(const Z in W){const V=W[Z];if(V.location>=0){let et=O[Z];if(et===void 0&&(Z==="instanceMatrix"&&y.instanceMatrix&&(et=y.instanceMatrix),Z==="instanceColor"&&y.instanceColor&&(et=y.instanceColor)),et!==void 0){const lt=et.normalized,ht=et.itemSize,Ut=t.get(et);if(Ut===void 0)continue;const Vt=Ut.buffer,q=Ut.type,tt=Ut.bytesPerElement,xt=q===s.INT||q===s.UNSIGNED_INT||et.gpuType===Bc;if(et.isInterleavedBufferAttribute){const st=et.data,wt=st.stride,zt=et.offset;if(st.isInstancedInterleavedBuffer){for(let Ft=0;Ft<V.locationSize;Ft++)p(V.location+Ft,st.meshPerAttribute);y.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=st.meshPerAttribute*st.count)}else for(let Ft=0;Ft<V.locationSize;Ft++)g(V.location+Ft);s.bindBuffer(s.ARRAY_BUFFER,Vt);for(let Ft=0;Ft<V.locationSize;Ft++)_(V.location+Ft,ht/V.locationSize,q,lt,wt*tt,(zt+ht/V.locationSize*Ft)*tt,xt)}else{if(et.isInstancedBufferAttribute){for(let st=0;st<V.locationSize;st++)p(V.location+st,et.meshPerAttribute);y.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=et.meshPerAttribute*et.count)}else for(let st=0;st<V.locationSize;st++)g(V.location+st);s.bindBuffer(s.ARRAY_BUFFER,Vt);for(let st=0;st<V.locationSize;st++)_(V.location+st,ht/V.locationSize,q,lt,ht*tt,ht/V.locationSize*st*tt,xt)}}else if(z!==void 0){const lt=z[Z];if(lt!==void 0)switch(lt.length){case 2:s.vertexAttrib2fv(V.location,lt);break;case 3:s.vertexAttrib3fv(V.location,lt);break;case 4:s.vertexAttrib4fv(V.location,lt);break;default:s.vertexAttrib1fv(V.location,lt)}}}}v()}function C(){L();for(const y in n){const P=n[y];for(const D in P){const N=P[D];for(const O in N)h(N[O].object),delete N[O];delete P[D]}delete n[y]}}function w(y){if(n[y.id]===void 0)return;const P=n[y.id];for(const D in P){const N=P[D];for(const O in N)h(N[O].object),delete N[O];delete P[D]}delete n[y.id]}function E(y){for(const P in n){const D=n[P];if(D[y.id]===void 0)continue;const N=D[y.id];for(const O in N)h(N[O].object),delete N[O];delete D[y.id]}}function L(){M(),a=!0,r!==i&&(r=i,l(r.object))}function M(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:L,resetDefaultState:M,dispose:C,releaseStatesOfGeometry:w,releaseStatesOfProgram:E,initAttributes:m,enableAttribute:g,disableUnusedAttributes:v}}function j0(s,t,e){let n;function i(l){n=l}function r(l,h){s.drawArrays(n,l,h),e.update(h,n,1)}function a(l,h,u){u!==0&&(s.drawArraysInstanced(n,l,h,u),e.update(h,n,u))}function o(l,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let d=0;for(let b=0;b<u;b++)d+=h[b];e.update(d,n,1)}function c(l,h,u,f){if(u===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let b=0;b<l.length;b++)a(l[b],h[b],f[b]);else{d.multiDrawArraysInstancedWEBGL(n,l,0,h,0,f,0,u);let b=0;for(let m=0;m<u;m++)b+=h[m]*f[m];e.update(b,n,1)}}this.setMode=i,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function q0(s,t,e,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const E=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(E){return!(E!==mn&&n.convert(E)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(E){const L=E===Ls&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(E!==oi&&n.convert(E)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==Cn&&!L)}function c(E){if(E==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const u=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),d=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),b=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),v=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),_=s.getParameter(s.MAX_VARYING_VECTORS),x=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),C=b>0,w=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:u,reverseDepthBuffer:f,maxTextures:d,maxVertexTextures:b,maxTextureSize:m,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:v,maxVaryings:_,maxFragmentUniforms:x,vertexTextures:C,maxSamples:w}}function X0(s){const t=this;let e=null,n=0,i=!1,r=!1;const a=new ki,o=new qt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const d=u.length!==0||f||n!==0||i;return i=f,n=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,d){const b=u.clippingPlanes,m=u.clipIntersection,g=u.clipShadows,p=s.get(u);if(!i||b===null||b.length===0||r&&!g)r?h(null):l();else{const v=r?0:n,_=v*4;let x=p.clippingState||null;c.value=x,x=h(b,f,_,d);for(let C=0;C!==_;++C)x[C]=e[C];p.clippingState=x,this.numIntersection=m?this.numPlanes:0,this.numPlanes+=v}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,f,d,b){const m=u!==null?u.length:0;let g=null;if(m!==0){if(g=c.value,b!==!0||g===null){const p=d+m*4,v=f.matrixWorldInverse;o.getNormalMatrix(v),(g===null||g.length<p)&&(g=new Float32Array(p));for(let _=0,x=d;_!==m;++_,x+=4)a.copy(u[_]).applyMatrix4(v,o),a.normal.toArray(g,x),g[x+3]=a.constant}c.value=g,c.needsUpdate=!0}return t.numPlanes=m,t.numIntersection=0,g}}function K0(s){let t=new WeakMap;function e(a,o){return o===Ko?a.mapping=_s:o===Yo&&(a.mapping=Ms),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Ko||o===Yo)if(t.has(a)){const c=t.get(a).texture;return e(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new rp(c.height);return l.fromEquirectangularTexture(s,a),t.set(a,l),a.addEventListener("dispose",i),e(l.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const c=t.get(o);c!==void 0&&(t.delete(o),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class Fa extends ju{constructor(t=-1,e=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=i+e,c=i-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const ds=4,ih=[.125,.215,.35,.446,.526,.582],Gi=20,fo=new Fa,sh=new ot;let po=null,mo=0,go=0,bo=!1;const Oi=(1+Math.sqrt(5))/2,cs=1/Oi,rh=[new R(-Oi,cs,0),new R(Oi,cs,0),new R(-cs,0,Oi),new R(cs,0,Oi),new R(0,Oi,-cs),new R(0,Oi,cs),new R(-1,1,-1),new R(1,1,-1),new R(-1,1,1),new R(1,1,1)];class ah{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){po=this._renderer.getRenderTarget(),mo=this._renderer.getActiveCubeFace(),go=this._renderer.getActiveMipmapLevel(),bo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,i,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=lh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ch(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(po,mo,go),this._renderer.xr.enabled=bo,t.scissorTest=!1,Xr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===_s||t.mapping===Ms?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),po=this._renderer.getRenderTarget(),mo=this._renderer.getActiveCubeFace(),go=this._renderer.getActiveMipmapLevel(),bo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:rn,minFilter:rn,generateMipmaps:!1,type:Ls,format:mn,colorSpace:Ze,depthBuffer:!1},i=oh(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=oh(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Y0(r)),this._blurMaterial=J0(r,t,e)}return i}_compileMaterial(t){const e=new at(this._lodPlanes[0],t);this._renderer.compile(e,fo)}_sceneToCubeUV(t,e,n,i){const o=new We(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(sh),h.toneMapping=Ei,h.autoClear=!1;const d=new Pe({name:"PMREM.Background",side:Je,depthWrite:!1,depthTest:!1}),b=new at(new Re,d);let m=!1;const g=t.background;g?g.isColor&&(d.color.copy(g),t.background=null,m=!0):(d.color.copy(sh),m=!0);for(let p=0;p<6;p++){const v=p%3;v===0?(o.up.set(0,c[p],0),o.lookAt(l[p],0,0)):v===1?(o.up.set(0,0,c[p]),o.lookAt(0,l[p],0)):(o.up.set(0,c[p],0),o.lookAt(0,0,l[p]));const _=this._cubeSize;Xr(i,v*_,p>2?_:0,_,_),h.setRenderTarget(i),m&&h.render(b,o),h.render(t,o)}b.geometry.dispose(),b.material.dispose(),h.toneMapping=f,h.autoClear=u,t.background=g}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===_s||t.mapping===Ms;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=lh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ch());const r=i?this._cubemapMaterial:this._equirectMaterial,a=new at(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const c=this._cubeSize;Xr(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(a,fo)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const i=this._lodPlanes.length;for(let r=1;r<i;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=rh[(i-r-1)%rh.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,i,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,i,"latitudinal",r),this._halfBlur(a,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new at(this._lodPlanes[i],l),f=l.uniforms,d=this._sizeLods[n]-1,b=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*Gi-1),m=r/b,g=isFinite(r)?1+Math.floor(h*m):Gi;g>Gi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Gi}`);const p=[];let v=0;for(let E=0;E<Gi;++E){const L=E/m,M=Math.exp(-L*L/2);p.push(M),E===0?v+=M:E<g&&(v+=2*M)}for(let E=0;E<p.length;E++)p[E]=p[E]/v;f.envMap.value=t.texture,f.samples.value=g,f.weights.value=p,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:_}=this;f.dTheta.value=b,f.mipInt.value=_-n;const x=this._sizeLods[i],C=3*x*(i>_-ds?i-_+ds:0),w=4*(this._cubeSize-x);Xr(e,C,w,3*x,2*x),c.setRenderTarget(e),c.render(u,fo)}}function Y0(s){const t=[],e=[],n=[];let i=s;const r=s-ds+1+ih.length;for(let a=0;a<r;a++){const o=Math.pow(2,i);e.push(o);let c=1/o;a>s-ds?c=ih[a-s+ds-1]:a===0&&(c=0),n.push(c);const l=1/(o-2),h=-l,u=1+l,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,b=6,m=3,g=2,p=1,v=new Float32Array(m*b*d),_=new Float32Array(g*b*d),x=new Float32Array(p*b*d);for(let w=0;w<d;w++){const E=w%3*2/3-1,L=w>2?0:-1,M=[E,L,0,E+2/3,L,0,E+2/3,L+1,0,E,L,0,E+2/3,L+1,0,E,L+1,0];v.set(M,m*b*w),_.set(f,g*b*w);const y=[w,w,w,w,w,w];x.set(y,p*b*w)}const C=new ve;C.setAttribute("position",new fe(v,m)),C.setAttribute("uv",new fe(_,g)),C.setAttribute("faceIndex",new fe(x,p)),t.push(C),i>ds&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function oh(s,t,e){const n=new ci(s,t,e);return n.texture.mapping=La,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Xr(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function J0(s,t,e){const n=new Float32Array(Gi),i=new R(0,1,0);return new an({name:"SphericalGaussianBlur",defines:{n:Gi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Kc(),fragmentShader:`

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
		`,blending:wi,depthTest:!1,depthWrite:!1})}function ch(){return new an({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Kc(),fragmentShader:`

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
		`,blending:wi,depthTest:!1,depthWrite:!1})}function lh(){return new an({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Kc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:wi,depthTest:!1,depthWrite:!1})}function Kc(){return`

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
	`}function Z0(s){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const c=o.mapping,l=c===Ko||c===Yo,h=c===_s||c===Ms;if(l||h){let u=t.get(o);const f=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return e===null&&(e=new ah(s)),u=l?e.fromEquirectangular(o,u):e.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),u.texture;if(u!==void 0)return u.texture;{const d=o.image;return l&&d&&d.height>0||h&&d&&i(d)?(e===null&&(e=new ah(s)),u=l?e.fromEquirectangular(o):e.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function i(o){let c=0;const l=6;for(let h=0;h<l;h++)o[h]!==void 0&&c++;return c===l}function r(o){const c=o.target;c.removeEventListener("dispose",r);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function Q0(s){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&$s("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function $0(s,t,e,n){const i={},r=new WeakMap;function a(u){const f=u.target;f.index!==null&&t.remove(f.index);for(const b in f.attributes)t.remove(f.attributes[b]);for(const b in f.morphAttributes){const m=f.morphAttributes[b];for(let g=0,p=m.length;g<p;g++)t.remove(m[g])}f.removeEventListener("dispose",a),delete i[f.id];const d=r.get(f);d&&(t.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function o(u,f){return i[f.id]===!0||(f.addEventListener("dispose",a),i[f.id]=!0,e.memory.geometries++),f}function c(u){const f=u.attributes;for(const b in f)t.update(f[b],s.ARRAY_BUFFER);const d=u.morphAttributes;for(const b in d){const m=d[b];for(let g=0,p=m.length;g<p;g++)t.update(m[g],s.ARRAY_BUFFER)}}function l(u){const f=[],d=u.index,b=u.attributes.position;let m=0;if(d!==null){const v=d.array;m=d.version;for(let _=0,x=v.length;_<x;_+=3){const C=v[_+0],w=v[_+1],E=v[_+2];f.push(C,w,w,E,E,C)}}else if(b!==void 0){const v=b.array;m=b.version;for(let _=0,x=v.length/3-1;_<x;_+=3){const C=_+0,w=_+1,E=_+2;f.push(C,w,w,E,E,C)}}else return;const g=new(ku(f)?Vu:Hu)(f,1);g.version=m;const p=r.get(u);p&&t.remove(p),r.set(u,g)}function h(u){const f=r.get(u);if(f){const d=u.index;d!==null&&f.version<d.version&&l(u)}else l(u);return r.get(u)}return{get:o,update:c,getWireframeAttribute:h}}function tg(s,t,e){let n;function i(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function c(f,d){s.drawElements(n,d,r,f*a),e.update(d,n,1)}function l(f,d,b){b!==0&&(s.drawElementsInstanced(n,d,r,f*a,b),e.update(d,n,b))}function h(f,d,b){if(b===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,f,0,b);let g=0;for(let p=0;p<b;p++)g+=d[p];e.update(g,n,1)}function u(f,d,b,m){if(b===0)return;const g=t.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<f.length;p++)l(f[p]/a,d[p],m[p]);else{g.multiDrawElementsInstancedWEBGL(n,d,0,r,f,0,m,0,b);let p=0;for(let v=0;v<b;v++)p+=d[v]*m[v];e.update(p,n,1)}}this.setMode=i,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function eg(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case s.TRIANGLES:e.triangles+=o*(r/3);break;case s.LINES:e.lines+=o*(r/2);break;case s.LINE_STRIP:e.lines+=o*(r-1);break;case s.LINE_LOOP:e.lines+=o*r;break;case s.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function ng(s,t,e){const n=new WeakMap,i=new re;function r(a,o,c){const l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let f=n.get(o);if(f===void 0||f.count!==u){let M=function(){E.dispose(),n.delete(o),o.removeEventListener("dispose",M)};f!==void 0&&f.texture.dispose();const d=o.morphAttributes.position!==void 0,b=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],v=o.morphAttributes.color||[];let _=0;d===!0&&(_=1),b===!0&&(_=2),m===!0&&(_=3);let x=o.attributes.position.count*_,C=1;x>t.maxTextureSize&&(C=Math.ceil(x/t.maxTextureSize),x=t.maxTextureSize);const w=new Float32Array(x*C*4*u),E=new zu(w,x,C,u);E.type=Cn,E.needsUpdate=!0;const L=_*4;for(let y=0;y<u;y++){const P=g[y],D=p[y],N=v[y],O=x*C*4*y;for(let W=0;W<P.count;W++){const z=W*L;d===!0&&(i.fromBufferAttribute(P,W),w[O+z+0]=i.x,w[O+z+1]=i.y,w[O+z+2]=i.z,w[O+z+3]=0),b===!0&&(i.fromBufferAttribute(D,W),w[O+z+4]=i.x,w[O+z+5]=i.y,w[O+z+6]=i.z,w[O+z+7]=0),m===!0&&(i.fromBufferAttribute(N,W),w[O+z+8]=i.x,w[O+z+9]=i.y,w[O+z+10]=i.z,w[O+z+11]=N.itemSize===4?i.w:1)}}f={count:u,texture:E,size:new ct(x,C)},n.set(o,f),o.addEventListener("dispose",M)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(s,"morphTexture",a.morphTexture,e);else{let d=0;for(let m=0;m<l.length;m++)d+=l[m];const b=o.morphTargetsRelative?1:1-d;c.getUniforms().setValue(s,"morphTargetBaseInfluence",b),c.getUniforms().setValue(s,"morphTargetInfluences",l)}c.getUniforms().setValue(s,"morphTargetsTexture",f.texture,e),c.getUniforms().setValue(s,"morphTargetsTextureSize",f.size)}return{update:r}}function ig(s,t,e,n){let i=new WeakMap;function r(c){const l=n.render.frame,h=c.geometry,u=t.get(c,h);if(i.get(u)!==l&&(t.update(u),i.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),i.get(c)!==l&&(e.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,s.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){const f=c.skeleton;i.get(f)!==l&&(f.update(),i.set(f,l))}return u}function a(){i=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:a}}class Yc extends Ne{constructor(t,e,n,i,r,a,o,c,l,h=gs){if(h!==gs&&h!==Ss)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===gs&&(n=Ai),n===void 0&&h===Ss&&(n=ys),super(null,i,r,a,o,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:je,this.minFilter=c!==void 0?c:je,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Ku=new Ne,hh=new Yc(1,1),Yu=new zu,Ju=new Vd,Zu=new qu,uh=[],fh=[],dh=new Float32Array(16),ph=new Float32Array(9),mh=new Float32Array(4);function Ds(s,t,e){const n=s[0];if(n<=0||n>0)return s;const i=t*e;let r=uh[i];if(r===void 0&&(r=new Float32Array(i),uh[i]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,s[a].toArray(r,o)}return r}function Fe(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function ke(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function ka(s,t){let e=fh[t];e===void 0&&(e=new Int32Array(t),fh[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function sg(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function rg(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Fe(e,t))return;s.uniform2fv(this.addr,t),ke(e,t)}}function ag(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Fe(e,t))return;s.uniform3fv(this.addr,t),ke(e,t)}}function og(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Fe(e,t))return;s.uniform4fv(this.addr,t),ke(e,t)}}function cg(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Fe(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),ke(e,t)}else{if(Fe(e,n))return;mh.set(n),s.uniformMatrix2fv(this.addr,!1,mh),ke(e,n)}}function lg(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Fe(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),ke(e,t)}else{if(Fe(e,n))return;ph.set(n),s.uniformMatrix3fv(this.addr,!1,ph),ke(e,n)}}function hg(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Fe(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),ke(e,t)}else{if(Fe(e,n))return;dh.set(n),s.uniformMatrix4fv(this.addr,!1,dh),ke(e,n)}}function ug(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function fg(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Fe(e,t))return;s.uniform2iv(this.addr,t),ke(e,t)}}function dg(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Fe(e,t))return;s.uniform3iv(this.addr,t),ke(e,t)}}function pg(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Fe(e,t))return;s.uniform4iv(this.addr,t),ke(e,t)}}function mg(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function gg(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Fe(e,t))return;s.uniform2uiv(this.addr,t),ke(e,t)}}function bg(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Fe(e,t))return;s.uniform3uiv(this.addr,t),ke(e,t)}}function xg(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Fe(e,t))return;s.uniform4uiv(this.addr,t),ke(e,t)}}function vg(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(hh.compareFunction=Fu,r=hh):r=Ku,e.setTexture2D(t||r,i)}function _g(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Ju,i)}function Mg(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||Zu,i)}function yg(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Yu,i)}function Sg(s){switch(s){case 5126:return sg;case 35664:return rg;case 35665:return ag;case 35666:return og;case 35674:return cg;case 35675:return lg;case 35676:return hg;case 5124:case 35670:return ug;case 35667:case 35671:return fg;case 35668:case 35672:return dg;case 35669:case 35673:return pg;case 5125:return mg;case 36294:return gg;case 36295:return bg;case 36296:return xg;case 35678:case 36198:case 36298:case 36306:case 35682:return vg;case 35679:case 36299:case 36307:return _g;case 35680:case 36300:case 36308:case 36293:return Mg;case 36289:case 36303:case 36311:case 36292:return yg}}function Tg(s,t){s.uniform1fv(this.addr,t)}function wg(s,t){const e=Ds(t,this.size,2);s.uniform2fv(this.addr,e)}function Eg(s,t){const e=Ds(t,this.size,3);s.uniform3fv(this.addr,e)}function Ag(s,t){const e=Ds(t,this.size,4);s.uniform4fv(this.addr,e)}function Rg(s,t){const e=Ds(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function Cg(s,t){const e=Ds(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function Pg(s,t){const e=Ds(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function Lg(s,t){s.uniform1iv(this.addr,t)}function Ig(s,t){s.uniform2iv(this.addr,t)}function Dg(s,t){s.uniform3iv(this.addr,t)}function Ug(s,t){s.uniform4iv(this.addr,t)}function Ng(s,t){s.uniform1uiv(this.addr,t)}function Fg(s,t){s.uniform2uiv(this.addr,t)}function kg(s,t){s.uniform3uiv(this.addr,t)}function Og(s,t){s.uniform4uiv(this.addr,t)}function zg(s,t,e){const n=this.cache,i=t.length,r=ka(e,i);Fe(n,r)||(s.uniform1iv(this.addr,r),ke(n,r));for(let a=0;a!==i;++a)e.setTexture2D(t[a]||Ku,r[a])}function Bg(s,t,e){const n=this.cache,i=t.length,r=ka(e,i);Fe(n,r)||(s.uniform1iv(this.addr,r),ke(n,r));for(let a=0;a!==i;++a)e.setTexture3D(t[a]||Ju,r[a])}function Gg(s,t,e){const n=this.cache,i=t.length,r=ka(e,i);Fe(n,r)||(s.uniform1iv(this.addr,r),ke(n,r));for(let a=0;a!==i;++a)e.setTextureCube(t[a]||Zu,r[a])}function Hg(s,t,e){const n=this.cache,i=t.length,r=ka(e,i);Fe(n,r)||(s.uniform1iv(this.addr,r),ke(n,r));for(let a=0;a!==i;++a)e.setTexture2DArray(t[a]||Yu,r[a])}function Vg(s){switch(s){case 5126:return Tg;case 35664:return wg;case 35665:return Eg;case 35666:return Ag;case 35674:return Rg;case 35675:return Cg;case 35676:return Pg;case 5124:case 35670:return Lg;case 35667:case 35671:return Ig;case 35668:case 35672:return Dg;case 35669:case 35673:return Ug;case 5125:return Ng;case 36294:return Fg;case 36295:return kg;case 36296:return Og;case 35678:case 36198:case 36298:case 36306:case 35682:return zg;case 35679:case 36299:case 36307:return Bg;case 35680:case 36300:case 36308:case 36293:return Gg;case 36289:case 36303:case 36311:case 36292:return Hg}}class Wg{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Sg(e.type)}}class jg{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Vg(e.type)}}class qg{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let r=0,a=i.length;r!==a;++r){const o=i[r];o.setValue(t,e[o.id],n)}}}const xo=/(\w+)(\])?(\[|\.)?/g;function gh(s,t){s.seq.push(t),s.map[t.id]=t}function Xg(s,t,e){const n=s.name,i=n.length;for(xo.lastIndex=0;;){const r=xo.exec(n),a=xo.lastIndex;let o=r[1];const c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===i){gh(e,l===void 0?new Wg(o,s,t):new jg(o,s,t));break}else{let u=e.map[o];u===void 0&&(u=new qg(o),gh(e,u)),e=u}}}class ga{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=t.getActiveUniform(e,i),a=t.getUniformLocation(e,r.name);Xg(r,a,this)}}setValue(t,e,n,i){const r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,a=e.length;r!==a;++r){const o=e[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,r=t.length;i!==r;++i){const a=t[i];a.id in e&&n.push(a)}return n}}function bh(s,t,e){const n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}const Kg=37297;let Yg=0;function Jg(s,t){const e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=i;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const xh=new qt;function Zg(s){te._getMatrix(xh,te.workingColorSpace,s);const t=`mat3( ${xh.elements.map(e=>e.toFixed(4))} )`;switch(te.getTransfer(s)){case Ua:return[t,"LinearTransferOETF"];case de:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function vh(s,t,e){const n=s.getShaderParameter(t,s.COMPILE_STATUS),i=s.getShaderInfoLog(t).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const a=parseInt(r[1]);return e.toUpperCase()+`

`+i+`

`+Jg(s.getShaderSource(t),a)}else return i}function Qg(s,t){const e=Zg(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function $g(s,t){let e;switch(t){case Qf:e="Linear";break;case $f:e="Reinhard";break;case td:e="Cineon";break;case ed:e="ACESFilmic";break;case id:e="AgX";break;case sd:e="Neutral";break;case nd:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Kr=new R;function tb(){te.getLuminanceCoefficients(Kr);const s=Kr.x.toFixed(4),t=Kr.y.toFixed(4),e=Kr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function eb(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(tr).join(`
`)}function nb(s){const t=[];for(const e in s){const n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function ib(s,t){const e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(t,i),a=r.name;let o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:s.getAttribLocation(t,a),locationSize:o}}return e}function tr(s){return s!==""}function _h(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Mh(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const sb=/^[ \t]*#include +<([\w\d./]+)>/gm;function Tc(s){return s.replace(sb,ab)}const rb=new Map;function ab(s,t){let e=Kt[t];if(e===void 0){const n=rb.get(t);if(n!==void 0)e=Kt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Tc(e)}const ob=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function yh(s){return s.replace(ob,cb)}function cb(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Sh(s){let t=`precision ${s.precision} float;
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
#define LOW_PRECISION`),t}function lb(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===yu?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===Su?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Qn&&(t="SHADOWMAP_TYPE_VSM"),t}function hb(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case _s:case Ms:t="ENVMAP_TYPE_CUBE";break;case La:t="ENVMAP_TYPE_CUBE_UV";break}return t}function ub(s){let t="ENVMAP_MODE_REFLECTION";return s.envMap&&s.envMapMode===Ms&&(t="ENVMAP_MODE_REFRACTION"),t}function fb(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case zc:t="ENVMAP_BLENDING_MULTIPLY";break;case Jf:t="ENVMAP_BLENDING_MIX";break;case Zf:t="ENVMAP_BLENDING_ADD";break}return t}function db(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function pb(s,t,e,n){const i=s.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const c=lb(e),l=hb(e),h=ub(e),u=fb(e),f=db(e),d=eb(e),b=nb(r),m=i.createProgram();let g,p,v=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,b].filter(tr).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,b].filter(tr).join(`
`),p.length>0&&(p+=`
`)):(g=[Sh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,b,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(tr).join(`
`),p=[Sh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,b,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Ei?"#define TONE_MAPPING":"",e.toneMapping!==Ei?Kt.tonemapping_pars_fragment:"",e.toneMapping!==Ei?$g("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Kt.colorspace_pars_fragment,Qg("linearToOutputTexel",e.outputColorSpace),tb(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(tr).join(`
`)),a=Tc(a),a=_h(a,e),a=Mh(a,e),o=Tc(o),o=_h(o,e),o=Mh(o,e),a=yh(a),o=yh(o),e.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",e.glslVersion===Nl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Nl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const _=v+g+a,x=v+p+o,C=bh(i,i.VERTEX_SHADER,_),w=bh(i,i.FRAGMENT_SHADER,x);i.attachShader(m,C),i.attachShader(m,w),e.index0AttributeName!==void 0?i.bindAttribLocation(m,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(m,0,"position"),i.linkProgram(m);function E(P){if(s.debug.checkShaderErrors){const D=i.getProgramInfoLog(m).trim(),N=i.getShaderInfoLog(C).trim(),O=i.getShaderInfoLog(w).trim();let W=!0,z=!0;if(i.getProgramParameter(m,i.LINK_STATUS)===!1)if(W=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,m,C,w);else{const Z=vh(i,C,"vertex"),V=vh(i,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(m,i.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+D+`
`+Z+`
`+V)}else D!==""?console.warn("THREE.WebGLProgram: Program Info Log:",D):(N===""||O==="")&&(z=!1);z&&(P.diagnostics={runnable:W,programLog:D,vertexShader:{log:N,prefix:g},fragmentShader:{log:O,prefix:p}})}i.deleteShader(C),i.deleteShader(w),L=new ga(i,m),M=ib(i,m)}let L;this.getUniforms=function(){return L===void 0&&E(this),L};let M;this.getAttributes=function(){return M===void 0&&E(this),M};let y=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=i.getProgramParameter(m,Kg)),y},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Yg++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=C,this.fragmentShader=w,this}let mb=0;class gb{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new bb(t),e.set(t,n)),n}}class bb{constructor(t){this.id=mb++,this.code=t,this.usedTimes=0}}function xb(s,t,e,n,i,r,a){const o=new Bu,c=new gb,l=new Set,h=[],u=i.logarithmicDepthBuffer,f=i.vertexTextures;let d=i.precision;const b={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(M){return l.add(M),M===0?"uv":`uv${M}`}function g(M,y,P,D,N){const O=D.fog,W=N.geometry,z=M.isMeshStandardMaterial?D.environment:null,Z=(M.isMeshStandardMaterial?e:t).get(M.envMap||z),V=Z&&Z.mapping===La?Z.image.height:null,et=b[M.type];M.precision!==null&&(d=i.getMaxPrecision(M.precision),d!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",d,"instead."));const lt=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,ht=lt!==void 0?lt.length:0;let Ut=0;W.morphAttributes.position!==void 0&&(Ut=1),W.morphAttributes.normal!==void 0&&(Ut=2),W.morphAttributes.color!==void 0&&(Ut=3);let Vt,q,tt,xt;if(et){const le=Fn[et];Vt=le.vertexShader,q=le.fragmentShader}else Vt=M.vertexShader,q=M.fragmentShader,c.update(M),tt=c.getVertexShaderID(M),xt=c.getFragmentShaderID(M);const st=s.getRenderTarget(),wt=s.state.buffers.depth.getReversed(),zt=N.isInstancedMesh===!0,Ft=N.isBatchedMesh===!0,$t=!!M.map,Y=!!M.matcap,nt=!!Z,I=!!M.aoMap,Tt=!!M.lightMap,$=!!M.bumpMap,Mt=!!M.normalMap,ut=!!M.displacementMap,kt=!!M.emissiveMap,vt=!!M.metalnessMap,A=!!M.roughnessMap,S=M.anisotropy>0,B=M.clearcoat>0,X=M.dispersion>0,Q=M.iridescence>0,K=M.sheen>0,Et=M.transmission>0,dt=S&&!!M.anisotropyMap,_t=B&&!!M.clearcoatMap,Qt=B&&!!M.clearcoatNormalMap,it=B&&!!M.clearcoatRoughnessMap,yt=Q&&!!M.iridescenceMap,Ot=Q&&!!M.iridescenceThicknessMap,Bt=K&&!!M.sheenColorMap,St=K&&!!M.sheenRoughnessMap,ne=!!M.specularMap,Xt=!!M.specularColorMap,ge=!!M.specularIntensityMap,U=Et&&!!M.transmissionMap,pt=Et&&!!M.thicknessMap,j=!!M.gradientMap,J=!!M.alphaMap,bt=M.alphaTest>0,mt=!!M.alphaHash,Wt=!!M.extensions;let Ae=Ei;M.toneMapped&&(st===null||st.isXRRenderTarget===!0)&&(Ae=s.toneMapping);const Be={shaderID:et,shaderType:M.type,shaderName:M.name,vertexShader:Vt,fragmentShader:q,defines:M.defines,customVertexShaderID:tt,customFragmentShaderID:xt,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:d,batching:Ft,batchingColor:Ft&&N._colorsTexture!==null,instancing:zt,instancingColor:zt&&N.instanceColor!==null,instancingMorph:zt&&N.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:st===null?s.outputColorSpace:st.isXRRenderTarget===!0?st.texture.colorSpace:Ze,alphaToCoverage:!!M.alphaToCoverage,map:$t,matcap:Y,envMap:nt,envMapMode:nt&&Z.mapping,envMapCubeUVHeight:V,aoMap:I,lightMap:Tt,bumpMap:$,normalMap:Mt,displacementMap:f&&ut,emissiveMap:kt,normalMapObjectSpace:Mt&&M.normalMapType===hd,normalMapTangentSpace:Mt&&M.normalMapType===Da,metalnessMap:vt,roughnessMap:A,anisotropy:S,anisotropyMap:dt,clearcoat:B,clearcoatMap:_t,clearcoatNormalMap:Qt,clearcoatRoughnessMap:it,dispersion:X,iridescence:Q,iridescenceMap:yt,iridescenceThicknessMap:Ot,sheen:K,sheenColorMap:Bt,sheenRoughnessMap:St,specularMap:ne,specularColorMap:Xt,specularIntensityMap:ge,transmission:Et,transmissionMap:U,thicknessMap:pt,gradientMap:j,opaque:M.transparent===!1&&M.blending===ms&&M.alphaToCoverage===!1,alphaMap:J,alphaTest:bt,alphaHash:mt,combine:M.combine,mapUv:$t&&m(M.map.channel),aoMapUv:I&&m(M.aoMap.channel),lightMapUv:Tt&&m(M.lightMap.channel),bumpMapUv:$&&m(M.bumpMap.channel),normalMapUv:Mt&&m(M.normalMap.channel),displacementMapUv:ut&&m(M.displacementMap.channel),emissiveMapUv:kt&&m(M.emissiveMap.channel),metalnessMapUv:vt&&m(M.metalnessMap.channel),roughnessMapUv:A&&m(M.roughnessMap.channel),anisotropyMapUv:dt&&m(M.anisotropyMap.channel),clearcoatMapUv:_t&&m(M.clearcoatMap.channel),clearcoatNormalMapUv:Qt&&m(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:it&&m(M.clearcoatRoughnessMap.channel),iridescenceMapUv:yt&&m(M.iridescenceMap.channel),iridescenceThicknessMapUv:Ot&&m(M.iridescenceThicknessMap.channel),sheenColorMapUv:Bt&&m(M.sheenColorMap.channel),sheenRoughnessMapUv:St&&m(M.sheenRoughnessMap.channel),specularMapUv:ne&&m(M.specularMap.channel),specularColorMapUv:Xt&&m(M.specularColorMap.channel),specularIntensityMapUv:ge&&m(M.specularIntensityMap.channel),transmissionMapUv:U&&m(M.transmissionMap.channel),thicknessMapUv:pt&&m(M.thicknessMap.channel),alphaMapUv:J&&m(M.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(Mt||S),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!W.attributes.uv&&($t||J),fog:!!O,useFog:M.fog===!0,fogExp2:!!O&&O.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:wt,skinning:N.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:ht,morphTextureStride:Ut,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:s.shadowMap.enabled&&P.length>0,shadowMapType:s.shadowMap.type,toneMapping:Ae,decodeVideoTexture:$t&&M.map.isVideoTexture===!0&&te.getTransfer(M.map.colorSpace)===de,decodeVideoTextureEmissive:kt&&M.emissiveMap.isVideoTexture===!0&&te.getTransfer(M.emissiveMap.colorSpace)===de,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Ue,flipSided:M.side===Je,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Wt&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Wt&&M.extensions.multiDraw===!0||Ft)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return Be.vertexUv1s=l.has(1),Be.vertexUv2s=l.has(2),Be.vertexUv3s=l.has(3),l.clear(),Be}function p(M){const y=[];if(M.shaderID?y.push(M.shaderID):(y.push(M.customVertexShaderID),y.push(M.customFragmentShaderID)),M.defines!==void 0)for(const P in M.defines)y.push(P),y.push(M.defines[P]);return M.isRawShaderMaterial===!1&&(v(y,M),_(y,M),y.push(s.outputColorSpace)),y.push(M.customProgramCacheKey),y.join()}function v(M,y){M.push(y.precision),M.push(y.outputColorSpace),M.push(y.envMapMode),M.push(y.envMapCubeUVHeight),M.push(y.mapUv),M.push(y.alphaMapUv),M.push(y.lightMapUv),M.push(y.aoMapUv),M.push(y.bumpMapUv),M.push(y.normalMapUv),M.push(y.displacementMapUv),M.push(y.emissiveMapUv),M.push(y.metalnessMapUv),M.push(y.roughnessMapUv),M.push(y.anisotropyMapUv),M.push(y.clearcoatMapUv),M.push(y.clearcoatNormalMapUv),M.push(y.clearcoatRoughnessMapUv),M.push(y.iridescenceMapUv),M.push(y.iridescenceThicknessMapUv),M.push(y.sheenColorMapUv),M.push(y.sheenRoughnessMapUv),M.push(y.specularMapUv),M.push(y.specularColorMapUv),M.push(y.specularIntensityMapUv),M.push(y.transmissionMapUv),M.push(y.thicknessMapUv),M.push(y.combine),M.push(y.fogExp2),M.push(y.sizeAttenuation),M.push(y.morphTargetsCount),M.push(y.morphAttributeCount),M.push(y.numDirLights),M.push(y.numPointLights),M.push(y.numSpotLights),M.push(y.numSpotLightMaps),M.push(y.numHemiLights),M.push(y.numRectAreaLights),M.push(y.numDirLightShadows),M.push(y.numPointLightShadows),M.push(y.numSpotLightShadows),M.push(y.numSpotLightShadowsWithMaps),M.push(y.numLightProbes),M.push(y.shadowMapType),M.push(y.toneMapping),M.push(y.numClippingPlanes),M.push(y.numClipIntersection),M.push(y.depthPacking)}function _(M,y){o.disableAll(),y.supportsVertexTextures&&o.enable(0),y.instancing&&o.enable(1),y.instancingColor&&o.enable(2),y.instancingMorph&&o.enable(3),y.matcap&&o.enable(4),y.envMap&&o.enable(5),y.normalMapObjectSpace&&o.enable(6),y.normalMapTangentSpace&&o.enable(7),y.clearcoat&&o.enable(8),y.iridescence&&o.enable(9),y.alphaTest&&o.enable(10),y.vertexColors&&o.enable(11),y.vertexAlphas&&o.enable(12),y.vertexUv1s&&o.enable(13),y.vertexUv2s&&o.enable(14),y.vertexUv3s&&o.enable(15),y.vertexTangents&&o.enable(16),y.anisotropy&&o.enable(17),y.alphaHash&&o.enable(18),y.batching&&o.enable(19),y.dispersion&&o.enable(20),y.batchingColor&&o.enable(21),M.push(o.mask),o.disableAll(),y.fog&&o.enable(0),y.useFog&&o.enable(1),y.flatShading&&o.enable(2),y.logarithmicDepthBuffer&&o.enable(3),y.reverseDepthBuffer&&o.enable(4),y.skinning&&o.enable(5),y.morphTargets&&o.enable(6),y.morphNormals&&o.enable(7),y.morphColors&&o.enable(8),y.premultipliedAlpha&&o.enable(9),y.shadowMapEnabled&&o.enable(10),y.doubleSided&&o.enable(11),y.flipSided&&o.enable(12),y.useDepthPacking&&o.enable(13),y.dithering&&o.enable(14),y.transmission&&o.enable(15),y.sheen&&o.enable(16),y.opaque&&o.enable(17),y.pointsUvs&&o.enable(18),y.decodeVideoTexture&&o.enable(19),y.decodeVideoTextureEmissive&&o.enable(20),y.alphaToCoverage&&o.enable(21),M.push(o.mask)}function x(M){const y=b[M.type];let P;if(y){const D=Fn[y];P=ep.clone(D.uniforms)}else P=M.uniforms;return P}function C(M,y){let P;for(let D=0,N=h.length;D<N;D++){const O=h[D];if(O.cacheKey===y){P=O,++P.usedTimes;break}}return P===void 0&&(P=new pb(s,y,M,r),h.push(P)),P}function w(M){if(--M.usedTimes===0){const y=h.indexOf(M);h[y]=h[h.length-1],h.pop(),M.destroy()}}function E(M){c.remove(M)}function L(){c.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:x,acquireProgram:C,releaseProgram:w,releaseShaderCache:E,programs:h,dispose:L}}function vb(){let s=new WeakMap;function t(a){return s.has(a)}function e(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function n(a){s.delete(a)}function i(a,o,c){s.get(a)[o]=c}function r(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:r}}function _b(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function Th(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function wh(){const s=[];let t=0;const e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function a(u,f,d,b,m,g){let p=s[t];return p===void 0?(p={id:u.id,object:u,geometry:f,material:d,groupOrder:b,renderOrder:u.renderOrder,z:m,group:g},s[t]=p):(p.id=u.id,p.object=u,p.geometry=f,p.material=d,p.groupOrder=b,p.renderOrder=u.renderOrder,p.z=m,p.group=g),t++,p}function o(u,f,d,b,m,g){const p=a(u,f,d,b,m,g);d.transmission>0?n.push(p):d.transparent===!0?i.push(p):e.push(p)}function c(u,f,d,b,m,g){const p=a(u,f,d,b,m,g);d.transmission>0?n.unshift(p):d.transparent===!0?i.unshift(p):e.unshift(p)}function l(u,f){e.length>1&&e.sort(u||_b),n.length>1&&n.sort(f||Th),i.length>1&&i.sort(f||Th)}function h(){for(let u=t,f=s.length;u<f;u++){const d=s[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:o,unshift:c,finish:h,sort:l}}function Mb(){let s=new WeakMap;function t(n,i){const r=s.get(n);let a;return r===void 0?(a=new wh,s.set(n,[a])):i>=r.length?(a=new wh,r.push(a)):a=r[i],a}function e(){s=new WeakMap}return{get:t,dispose:e}}function yb(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new R,color:new ot};break;case"SpotLight":e={position:new R,direction:new R,color:new ot,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new R,color:new ot,distance:0,decay:0};break;case"HemisphereLight":e={direction:new R,skyColor:new ot,groundColor:new ot};break;case"RectAreaLight":e={color:new ot,position:new R,halfWidth:new R,halfHeight:new R};break}return s[t.id]=e,e}}}function Sb(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let Tb=0;function wb(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function Eb(s){const t=new yb,e=Sb(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new R);const i=new R,r=new Nt,a=new Nt;function o(l){let h=0,u=0,f=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let d=0,b=0,m=0,g=0,p=0,v=0,_=0,x=0,C=0,w=0,E=0;l.sort(wb);for(let M=0,y=l.length;M<y;M++){const P=l[M],D=P.color,N=P.intensity,O=P.distance,W=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)h+=D.r*N,u+=D.g*N,f+=D.b*N;else if(P.isLightProbe){for(let z=0;z<9;z++)n.probe[z].addScaledVector(P.sh.coefficients[z],N);E++}else if(P.isDirectionalLight){const z=t.get(P);if(z.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const Z=P.shadow,V=e.get(P);V.shadowIntensity=Z.intensity,V.shadowBias=Z.bias,V.shadowNormalBias=Z.normalBias,V.shadowRadius=Z.radius,V.shadowMapSize=Z.mapSize,n.directionalShadow[d]=V,n.directionalShadowMap[d]=W,n.directionalShadowMatrix[d]=P.shadow.matrix,v++}n.directional[d]=z,d++}else if(P.isSpotLight){const z=t.get(P);z.position.setFromMatrixPosition(P.matrixWorld),z.color.copy(D).multiplyScalar(N),z.distance=O,z.coneCos=Math.cos(P.angle),z.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),z.decay=P.decay,n.spot[m]=z;const Z=P.shadow;if(P.map&&(n.spotLightMap[C]=P.map,C++,Z.updateMatrices(P),P.castShadow&&w++),n.spotLightMatrix[m]=Z.matrix,P.castShadow){const V=e.get(P);V.shadowIntensity=Z.intensity,V.shadowBias=Z.bias,V.shadowNormalBias=Z.normalBias,V.shadowRadius=Z.radius,V.shadowMapSize=Z.mapSize,n.spotShadow[m]=V,n.spotShadowMap[m]=W,x++}m++}else if(P.isRectAreaLight){const z=t.get(P);z.color.copy(D).multiplyScalar(N),z.halfWidth.set(P.width*.5,0,0),z.halfHeight.set(0,P.height*.5,0),n.rectArea[g]=z,g++}else if(P.isPointLight){const z=t.get(P);if(z.color.copy(P.color).multiplyScalar(P.intensity),z.distance=P.distance,z.decay=P.decay,P.castShadow){const Z=P.shadow,V=e.get(P);V.shadowIntensity=Z.intensity,V.shadowBias=Z.bias,V.shadowNormalBias=Z.normalBias,V.shadowRadius=Z.radius,V.shadowMapSize=Z.mapSize,V.shadowCameraNear=Z.camera.near,V.shadowCameraFar=Z.camera.far,n.pointShadow[b]=V,n.pointShadowMap[b]=W,n.pointShadowMatrix[b]=P.shadow.matrix,_++}n.point[b]=z,b++}else if(P.isHemisphereLight){const z=t.get(P);z.skyColor.copy(P.color).multiplyScalar(N),z.groundColor.copy(P.groundColor).multiplyScalar(N),n.hemi[p]=z,p++}}g>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ft.LTC_FLOAT_1,n.rectAreaLTC2=ft.LTC_FLOAT_2):(n.rectAreaLTC1=ft.LTC_HALF_1,n.rectAreaLTC2=ft.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;const L=n.hash;(L.directionalLength!==d||L.pointLength!==b||L.spotLength!==m||L.rectAreaLength!==g||L.hemiLength!==p||L.numDirectionalShadows!==v||L.numPointShadows!==_||L.numSpotShadows!==x||L.numSpotMaps!==C||L.numLightProbes!==E)&&(n.directional.length=d,n.spot.length=m,n.rectArea.length=g,n.point.length=b,n.hemi.length=p,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.pointShadow.length=_,n.pointShadowMap.length=_,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=v,n.pointShadowMatrix.length=_,n.spotLightMatrix.length=x+C-w,n.spotLightMap.length=C,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=E,L.directionalLength=d,L.pointLength=b,L.spotLength=m,L.rectAreaLength=g,L.hemiLength=p,L.numDirectionalShadows=v,L.numPointShadows=_,L.numSpotShadows=x,L.numSpotMaps=C,L.numLightProbes=E,n.version=Tb++)}function c(l,h){let u=0,f=0,d=0,b=0,m=0;const g=h.matrixWorldInverse;for(let p=0,v=l.length;p<v;p++){const _=l[p];if(_.isDirectionalLight){const x=n.directional[u];x.direction.setFromMatrixPosition(_.matrixWorld),i.setFromMatrixPosition(_.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(g),u++}else if(_.isSpotLight){const x=n.spot[d];x.position.setFromMatrixPosition(_.matrixWorld),x.position.applyMatrix4(g),x.direction.setFromMatrixPosition(_.matrixWorld),i.setFromMatrixPosition(_.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(g),d++}else if(_.isRectAreaLight){const x=n.rectArea[b];x.position.setFromMatrixPosition(_.matrixWorld),x.position.applyMatrix4(g),a.identity(),r.copy(_.matrixWorld),r.premultiply(g),a.extractRotation(r),x.halfWidth.set(_.width*.5,0,0),x.halfHeight.set(0,_.height*.5,0),x.halfWidth.applyMatrix4(a),x.halfHeight.applyMatrix4(a),b++}else if(_.isPointLight){const x=n.point[f];x.position.setFromMatrixPosition(_.matrixWorld),x.position.applyMatrix4(g),f++}else if(_.isHemisphereLight){const x=n.hemi[m];x.direction.setFromMatrixPosition(_.matrixWorld),x.direction.transformDirection(g),m++}}}return{setup:o,setupView:c,state:n}}function Eh(s){const t=new Eb(s),e=[],n=[];function i(h){l.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function a(h){n.push(h)}function o(){t.setup(e)}function c(h){t.setupView(e,h)}const l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:l,setupLights:o,setupLightsView:c,pushLight:r,pushShadow:a}}function Ab(s){let t=new WeakMap;function e(i,r=0){const a=t.get(i);let o;return a===void 0?(o=new Eh(s),t.set(i,[o])):r>=a.length?(o=new Eh(s),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}class Rb extends xn{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=cd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Cb extends xn{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Pb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Lb=`uniform sampler2D shadow_pass;
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
}`;function Ib(s,t,e){let n=new Xc;const i=new ct,r=new ct,a=new re,o=new Rb({depthPacking:ld}),c=new Cb,l={},h=e.maxTextureSize,u={[ai]:Je,[Je]:ai,[Ue]:Ue},f=new an({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ct},radius:{value:4}},vertexShader:Pb,fragmentShader:Lb}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const b=new ve;b.setAttribute("position",new fe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const m=new at(b,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=yu;let p=this.type;this.render=function(w,E,L){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||w.length===0)return;const M=s.getRenderTarget(),y=s.getActiveCubeFace(),P=s.getActiveMipmapLevel(),D=s.state;D.setBlending(wi),D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);const N=p!==Qn&&this.type===Qn,O=p===Qn&&this.type!==Qn;for(let W=0,z=w.length;W<z;W++){const Z=w[W],V=Z.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;i.copy(V.mapSize);const et=V.getFrameExtents();if(i.multiply(et),r.copy(V.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/et.x),i.x=r.x*et.x,V.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/et.y),i.y=r.y*et.y,V.mapSize.y=r.y)),V.map===null||N===!0||O===!0){const ht=this.type!==Qn?{minFilter:je,magFilter:je}:{};V.map!==null&&V.map.dispose(),V.map=new ci(i.x,i.y,ht),V.map.texture.name=Z.name+".shadowMap",V.camera.updateProjectionMatrix()}s.setRenderTarget(V.map),s.clear();const lt=V.getViewportCount();for(let ht=0;ht<lt;ht++){const Ut=V.getViewport(ht);a.set(r.x*Ut.x,r.y*Ut.y,r.x*Ut.z,r.y*Ut.w),D.viewport(a),V.updateMatrices(Z,ht),n=V.getFrustum(),x(E,L,V.camera,Z,this.type)}V.isPointLightShadow!==!0&&this.type===Qn&&v(V,L),V.needsUpdate=!1}p=this.type,g.needsUpdate=!1,s.setRenderTarget(M,y,P)};function v(w,E){const L=t.update(m);f.defines.VSM_SAMPLES!==w.blurSamples&&(f.defines.VSM_SAMPLES=w.blurSamples,d.defines.VSM_SAMPLES=w.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new ci(i.x,i.y)),f.uniforms.shadow_pass.value=w.map.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,s.setRenderTarget(w.mapPass),s.clear(),s.renderBufferDirect(E,null,L,f,m,null),d.uniforms.shadow_pass.value=w.mapPass.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,s.setRenderTarget(w.map),s.clear(),s.renderBufferDirect(E,null,L,d,m,null)}function _(w,E,L,M){let y=null;const P=L.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(P!==void 0)y=P;else if(y=L.isPointLight===!0?c:o,s.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){const D=y.uuid,N=E.uuid;let O=l[D];O===void 0&&(O={},l[D]=O);let W=O[N];W===void 0&&(W=y.clone(),O[N]=W,E.addEventListener("dispose",C)),y=W}if(y.visible=E.visible,y.wireframe=E.wireframe,M===Qn?y.side=E.shadowSide!==null?E.shadowSide:E.side:y.side=E.shadowSide!==null?E.shadowSide:u[E.side],y.alphaMap=E.alphaMap,y.alphaTest=E.alphaTest,y.map=E.map,y.clipShadows=E.clipShadows,y.clippingPlanes=E.clippingPlanes,y.clipIntersection=E.clipIntersection,y.displacementMap=E.displacementMap,y.displacementScale=E.displacementScale,y.displacementBias=E.displacementBias,y.wireframeLinewidth=E.wireframeLinewidth,y.linewidth=E.linewidth,L.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const D=s.properties.get(y);D.light=L}return y}function x(w,E,L,M,y){if(w.visible===!1)return;if(w.layers.test(E.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&y===Qn)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,w.matrixWorld);const N=t.update(w),O=w.material;if(Array.isArray(O)){const W=N.groups;for(let z=0,Z=W.length;z<Z;z++){const V=W[z],et=O[V.materialIndex];if(et&&et.visible){const lt=_(w,et,M,y);w.onBeforeShadow(s,w,E,L,N,lt,V),s.renderBufferDirect(L,null,N,lt,w,V),w.onAfterShadow(s,w,E,L,N,lt,V)}}}else if(O.visible){const W=_(w,O,M,y);w.onBeforeShadow(s,w,E,L,N,W,null),s.renderBufferDirect(L,null,N,W,w,null),w.onAfterShadow(s,w,E,L,N,W,null)}}const D=w.children;for(let N=0,O=D.length;N<O;N++)x(D[N],E,L,M,y)}function C(w){w.target.removeEventListener("dispose",C);for(const L in l){const M=l[L],y=w.target.uuid;y in M&&(M[y].dispose(),delete M[y])}}}const Db={[Go]:Ho,[Vo]:qo,[Wo]:Xo,[vs]:jo,[Ho]:Go,[qo]:Vo,[Xo]:Wo,[jo]:vs};function Ub(s,t){function e(){let U=!1;const pt=new re;let j=null;const J=new re(0,0,0,0);return{setMask:function(bt){j!==bt&&!U&&(s.colorMask(bt,bt,bt,bt),j=bt)},setLocked:function(bt){U=bt},setClear:function(bt,mt,Wt,Ae,Be){Be===!0&&(bt*=Ae,mt*=Ae,Wt*=Ae),pt.set(bt,mt,Wt,Ae),J.equals(pt)===!1&&(s.clearColor(bt,mt,Wt,Ae),J.copy(pt))},reset:function(){U=!1,j=null,J.set(-1,0,0,0)}}}function n(){let U=!1,pt=!1,j=null,J=null,bt=null;return{setReversed:function(mt){if(pt!==mt){const Wt=t.get("EXT_clip_control");pt?Wt.clipControlEXT(Wt.LOWER_LEFT_EXT,Wt.ZERO_TO_ONE_EXT):Wt.clipControlEXT(Wt.LOWER_LEFT_EXT,Wt.NEGATIVE_ONE_TO_ONE_EXT);const Ae=bt;bt=null,this.setClear(Ae)}pt=mt},getReversed:function(){return pt},setTest:function(mt){mt?st(s.DEPTH_TEST):wt(s.DEPTH_TEST)},setMask:function(mt){j!==mt&&!U&&(s.depthMask(mt),j=mt)},setFunc:function(mt){if(pt&&(mt=Db[mt]),J!==mt){switch(mt){case Go:s.depthFunc(s.NEVER);break;case Ho:s.depthFunc(s.ALWAYS);break;case Vo:s.depthFunc(s.LESS);break;case vs:s.depthFunc(s.LEQUAL);break;case Wo:s.depthFunc(s.EQUAL);break;case jo:s.depthFunc(s.GEQUAL);break;case qo:s.depthFunc(s.GREATER);break;case Xo:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}J=mt}},setLocked:function(mt){U=mt},setClear:function(mt){bt!==mt&&(pt&&(mt=1-mt),s.clearDepth(mt),bt=mt)},reset:function(){U=!1,j=null,J=null,bt=null,pt=!1}}}function i(){let U=!1,pt=null,j=null,J=null,bt=null,mt=null,Wt=null,Ae=null,Be=null;return{setTest:function(le){U||(le?st(s.STENCIL_TEST):wt(s.STENCIL_TEST))},setMask:function(le){pt!==le&&!U&&(s.stencilMask(le),pt=le)},setFunc:function(le,_n,Wn){(j!==le||J!==_n||bt!==Wn)&&(s.stencilFunc(le,_n,Wn),j=le,J=_n,bt=Wn)},setOp:function(le,_n,Wn){(mt!==le||Wt!==_n||Ae!==Wn)&&(s.stencilOp(le,_n,Wn),mt=le,Wt=_n,Ae=Wn)},setLocked:function(le){U=le},setClear:function(le){Be!==le&&(s.clearStencil(le),Be=le)},reset:function(){U=!1,pt=null,j=null,J=null,bt=null,mt=null,Wt=null,Ae=null,Be=null}}}const r=new e,a=new n,o=new i,c=new WeakMap,l=new WeakMap;let h={},u={},f=new WeakMap,d=[],b=null,m=!1,g=null,p=null,v=null,_=null,x=null,C=null,w=null,E=new ot(0,0,0),L=0,M=!1,y=null,P=null,D=null,N=null,O=null;const W=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,Z=0;const V=s.getParameter(s.VERSION);V.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(V)[1]),z=Z>=1):V.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),z=Z>=2);let et=null,lt={};const ht=s.getParameter(s.SCISSOR_BOX),Ut=s.getParameter(s.VIEWPORT),Vt=new re().fromArray(ht),q=new re().fromArray(Ut);function tt(U,pt,j,J){const bt=new Uint8Array(4),mt=s.createTexture();s.bindTexture(U,mt),s.texParameteri(U,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(U,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Wt=0;Wt<j;Wt++)U===s.TEXTURE_3D||U===s.TEXTURE_2D_ARRAY?s.texImage3D(pt,0,s.RGBA,1,1,J,0,s.RGBA,s.UNSIGNED_BYTE,bt):s.texImage2D(pt+Wt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,bt);return mt}const xt={};xt[s.TEXTURE_2D]=tt(s.TEXTURE_2D,s.TEXTURE_2D,1),xt[s.TEXTURE_CUBE_MAP]=tt(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),xt[s.TEXTURE_2D_ARRAY]=tt(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),xt[s.TEXTURE_3D]=tt(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),st(s.DEPTH_TEST),a.setFunc(vs),$(!1),Mt(Al),st(s.CULL_FACE),I(wi);function st(U){h[U]!==!0&&(s.enable(U),h[U]=!0)}function wt(U){h[U]!==!1&&(s.disable(U),h[U]=!1)}function zt(U,pt){return u[U]!==pt?(s.bindFramebuffer(U,pt),u[U]=pt,U===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=pt),U===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=pt),!0):!1}function Ft(U,pt){let j=d,J=!1;if(U){j=f.get(pt),j===void 0&&(j=[],f.set(pt,j));const bt=U.textures;if(j.length!==bt.length||j[0]!==s.COLOR_ATTACHMENT0){for(let mt=0,Wt=bt.length;mt<Wt;mt++)j[mt]=s.COLOR_ATTACHMENT0+mt;j.length=bt.length,J=!0}}else j[0]!==s.BACK&&(j[0]=s.BACK,J=!0);J&&s.drawBuffers(j)}function $t(U){return b!==U?(s.useProgram(U),b=U,!0):!1}const Y={[Bi]:s.FUNC_ADD,[Df]:s.FUNC_SUBTRACT,[Uf]:s.FUNC_REVERSE_SUBTRACT};Y[Nf]=s.MIN,Y[Ff]=s.MAX;const nt={[kf]:s.ZERO,[Of]:s.ONE,[zf]:s.SRC_COLOR,[zo]:s.SRC_ALPHA,[jf]:s.SRC_ALPHA_SATURATE,[Vf]:s.DST_COLOR,[Gf]:s.DST_ALPHA,[Bf]:s.ONE_MINUS_SRC_COLOR,[Bo]:s.ONE_MINUS_SRC_ALPHA,[Wf]:s.ONE_MINUS_DST_COLOR,[Hf]:s.ONE_MINUS_DST_ALPHA,[qf]:s.CONSTANT_COLOR,[Xf]:s.ONE_MINUS_CONSTANT_COLOR,[Kf]:s.CONSTANT_ALPHA,[Yf]:s.ONE_MINUS_CONSTANT_ALPHA};function I(U,pt,j,J,bt,mt,Wt,Ae,Be,le){if(U===wi){m===!0&&(wt(s.BLEND),m=!1);return}if(m===!1&&(st(s.BLEND),m=!0),U!==If){if(U!==g||le!==M){if((p!==Bi||x!==Bi)&&(s.blendEquation(s.FUNC_ADD),p=Bi,x=Bi),le)switch(U){case ms:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Oo:s.blendFunc(s.ONE,s.ONE);break;case Rl:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Cl:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case ms:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Oo:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Rl:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Cl:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}v=null,_=null,C=null,w=null,E.set(0,0,0),L=0,g=U,M=le}return}bt=bt||pt,mt=mt||j,Wt=Wt||J,(pt!==p||bt!==x)&&(s.blendEquationSeparate(Y[pt],Y[bt]),p=pt,x=bt),(j!==v||J!==_||mt!==C||Wt!==w)&&(s.blendFuncSeparate(nt[j],nt[J],nt[mt],nt[Wt]),v=j,_=J,C=mt,w=Wt),(Ae.equals(E)===!1||Be!==L)&&(s.blendColor(Ae.r,Ae.g,Ae.b,Be),E.copy(Ae),L=Be),g=U,M=!1}function Tt(U,pt){U.side===Ue?wt(s.CULL_FACE):st(s.CULL_FACE);let j=U.side===Je;pt&&(j=!j),$(j),U.blending===ms&&U.transparent===!1?I(wi):I(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),a.setFunc(U.depthFunc),a.setTest(U.depthTest),a.setMask(U.depthWrite),r.setMask(U.colorWrite);const J=U.stencilWrite;o.setTest(J),J&&(o.setMask(U.stencilWriteMask),o.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),o.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),kt(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?st(s.SAMPLE_ALPHA_TO_COVERAGE):wt(s.SAMPLE_ALPHA_TO_COVERAGE)}function $(U){y!==U&&(U?s.frontFace(s.CW):s.frontFace(s.CCW),y=U)}function Mt(U){U!==Pf?(st(s.CULL_FACE),U!==P&&(U===Al?s.cullFace(s.BACK):U===Lf?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):wt(s.CULL_FACE),P=U}function ut(U){U!==D&&(z&&s.lineWidth(U),D=U)}function kt(U,pt,j){U?(st(s.POLYGON_OFFSET_FILL),(N!==pt||O!==j)&&(s.polygonOffset(pt,j),N=pt,O=j)):wt(s.POLYGON_OFFSET_FILL)}function vt(U){U?st(s.SCISSOR_TEST):wt(s.SCISSOR_TEST)}function A(U){U===void 0&&(U=s.TEXTURE0+W-1),et!==U&&(s.activeTexture(U),et=U)}function S(U,pt,j){j===void 0&&(et===null?j=s.TEXTURE0+W-1:j=et);let J=lt[j];J===void 0&&(J={type:void 0,texture:void 0},lt[j]=J),(J.type!==U||J.texture!==pt)&&(et!==j&&(s.activeTexture(j),et=j),s.bindTexture(U,pt||xt[U]),J.type=U,J.texture=pt)}function B(){const U=lt[et];U!==void 0&&U.type!==void 0&&(s.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function X(){try{s.compressedTexImage2D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Q(){try{s.compressedTexImage3D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function K(){try{s.texSubImage2D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Et(){try{s.texSubImage3D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function dt(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function _t(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Qt(){try{s.texStorage2D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function it(){try{s.texStorage3D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function yt(){try{s.texImage2D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ot(){try{s.texImage3D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Bt(U){Vt.equals(U)===!1&&(s.scissor(U.x,U.y,U.z,U.w),Vt.copy(U))}function St(U){q.equals(U)===!1&&(s.viewport(U.x,U.y,U.z,U.w),q.copy(U))}function ne(U,pt){let j=l.get(pt);j===void 0&&(j=new WeakMap,l.set(pt,j));let J=j.get(U);J===void 0&&(J=s.getUniformBlockIndex(pt,U.name),j.set(U,J))}function Xt(U,pt){const J=l.get(pt).get(U);c.get(pt)!==J&&(s.uniformBlockBinding(pt,J,U.__bindingPointIndex),c.set(pt,J))}function ge(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),a.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},et=null,lt={},u={},f=new WeakMap,d=[],b=null,m=!1,g=null,p=null,v=null,_=null,x=null,C=null,w=null,E=new ot(0,0,0),L=0,M=!1,y=null,P=null,D=null,N=null,O=null,Vt.set(0,0,s.canvas.width,s.canvas.height),q.set(0,0,s.canvas.width,s.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:st,disable:wt,bindFramebuffer:zt,drawBuffers:Ft,useProgram:$t,setBlending:I,setMaterial:Tt,setFlipSided:$,setCullFace:Mt,setLineWidth:ut,setPolygonOffset:kt,setScissorTest:vt,activeTexture:A,bindTexture:S,unbindTexture:B,compressedTexImage2D:X,compressedTexImage3D:Q,texImage2D:yt,texImage3D:Ot,updateUBOMapping:ne,uniformBlockBinding:Xt,texStorage2D:Qt,texStorage3D:it,texSubImage2D:K,texSubImage3D:Et,compressedTexSubImage2D:dt,compressedTexSubImage3D:_t,scissor:Bt,viewport:St,reset:ge}}function Ah(s,t,e,n){const i=Nb(n);switch(e){case Cu:return s*t;case Lu:return s*t;case Iu:return s*t*2;case Ia:return s*t/i.components*i.byteLength;case Vc:return s*t/i.components*i.byteLength;case Du:return s*t*2/i.components*i.byteLength;case Wc:return s*t*2/i.components*i.byteLength;case Pu:return s*t*3/i.components*i.byteLength;case mn:return s*t*4/i.components*i.byteLength;case jc:return s*t*4/i.components*i.byteLength;case ua:case fa:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case da:case pa:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Zo:case $o:return Math.max(s,16)*Math.max(t,8)/4;case Jo:case Qo:return Math.max(s,8)*Math.max(t,8)/2;case tc:case ec:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case nc:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case ic:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case sc:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case rc:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case ac:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case oc:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case cc:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case lc:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case hc:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case uc:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case fc:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case dc:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case pc:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case mc:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case gc:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case ma:case bc:case xc:return Math.ceil(s/4)*Math.ceil(t/4)*16;case Uu:case vc:return Math.ceil(s/4)*Math.ceil(t/4)*8;case _c:case Mc:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Nb(s){switch(s){case oi:case Eu:return{byteLength:1,components:1};case mr:case Au:case Ls:return{byteLength:2,components:1};case Gc:case Hc:return{byteLength:2,components:4};case Ai:case Bc:case Cn:return{byteLength:4,components:1};case Ru:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function Fb(s,t,e,n,i,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new ct,h=new WeakMap;let u;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(A,S){return d?new OffscreenCanvas(A,S):xr("canvas")}function m(A,S,B){let X=1;const Q=vt(A);if((Q.width>B||Q.height>B)&&(X=B/Math.max(Q.width,Q.height)),X<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const K=Math.floor(X*Q.width),Et=Math.floor(X*Q.height);u===void 0&&(u=b(K,Et));const dt=S?b(K,Et):u;return dt.width=K,dt.height=Et,dt.getContext("2d").drawImage(A,0,0,K,Et),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+K+"x"+Et+")."),dt}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),A;return A}function g(A){return A.generateMipmaps}function p(A){s.generateMipmap(A)}function v(A){return A.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?s.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function _(A,S,B,X,Q=!1){if(A!==null){if(s[A]!==void 0)return s[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let K=S;if(S===s.RED&&(B===s.FLOAT&&(K=s.R32F),B===s.HALF_FLOAT&&(K=s.R16F),B===s.UNSIGNED_BYTE&&(K=s.R8)),S===s.RED_INTEGER&&(B===s.UNSIGNED_BYTE&&(K=s.R8UI),B===s.UNSIGNED_SHORT&&(K=s.R16UI),B===s.UNSIGNED_INT&&(K=s.R32UI),B===s.BYTE&&(K=s.R8I),B===s.SHORT&&(K=s.R16I),B===s.INT&&(K=s.R32I)),S===s.RG&&(B===s.FLOAT&&(K=s.RG32F),B===s.HALF_FLOAT&&(K=s.RG16F),B===s.UNSIGNED_BYTE&&(K=s.RG8)),S===s.RG_INTEGER&&(B===s.UNSIGNED_BYTE&&(K=s.RG8UI),B===s.UNSIGNED_SHORT&&(K=s.RG16UI),B===s.UNSIGNED_INT&&(K=s.RG32UI),B===s.BYTE&&(K=s.RG8I),B===s.SHORT&&(K=s.RG16I),B===s.INT&&(K=s.RG32I)),S===s.RGB_INTEGER&&(B===s.UNSIGNED_BYTE&&(K=s.RGB8UI),B===s.UNSIGNED_SHORT&&(K=s.RGB16UI),B===s.UNSIGNED_INT&&(K=s.RGB32UI),B===s.BYTE&&(K=s.RGB8I),B===s.SHORT&&(K=s.RGB16I),B===s.INT&&(K=s.RGB32I)),S===s.RGBA_INTEGER&&(B===s.UNSIGNED_BYTE&&(K=s.RGBA8UI),B===s.UNSIGNED_SHORT&&(K=s.RGBA16UI),B===s.UNSIGNED_INT&&(K=s.RGBA32UI),B===s.BYTE&&(K=s.RGBA8I),B===s.SHORT&&(K=s.RGBA16I),B===s.INT&&(K=s.RGBA32I)),S===s.RGB&&B===s.UNSIGNED_INT_5_9_9_9_REV&&(K=s.RGB9_E5),S===s.RGBA){const Et=Q?Ua:te.getTransfer(X);B===s.FLOAT&&(K=s.RGBA32F),B===s.HALF_FLOAT&&(K=s.RGBA16F),B===s.UNSIGNED_BYTE&&(K=Et===de?s.SRGB8_ALPHA8:s.RGBA8),B===s.UNSIGNED_SHORT_4_4_4_4&&(K=s.RGBA4),B===s.UNSIGNED_SHORT_5_5_5_1&&(K=s.RGB5_A1)}return(K===s.R16F||K===s.R32F||K===s.RG16F||K===s.RG32F||K===s.RGBA16F||K===s.RGBA32F)&&t.get("EXT_color_buffer_float"),K}function x(A,S){let B;return A?S===null||S===Ai||S===ys?B=s.DEPTH24_STENCIL8:S===Cn?B=s.DEPTH32F_STENCIL8:S===mr&&(B=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Ai||S===ys?B=s.DEPTH_COMPONENT24:S===Cn?B=s.DEPTH_COMPONENT32F:S===mr&&(B=s.DEPTH_COMPONENT16),B}function C(A,S){return g(A)===!0||A.isFramebufferTexture&&A.minFilter!==je&&A.minFilter!==rn?Math.log2(Math.max(S.width,S.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?S.mipmaps.length:1}function w(A){const S=A.target;S.removeEventListener("dispose",w),L(S),S.isVideoTexture&&h.delete(S)}function E(A){const S=A.target;S.removeEventListener("dispose",E),y(S)}function L(A){const S=n.get(A);if(S.__webglInit===void 0)return;const B=A.source,X=f.get(B);if(X){const Q=X[S.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&M(A),Object.keys(X).length===0&&f.delete(B)}n.remove(A)}function M(A){const S=n.get(A);s.deleteTexture(S.__webglTexture);const B=A.source,X=f.get(B);delete X[S.__cacheKey],a.memory.textures--}function y(A){const S=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let X=0;X<6;X++){if(Array.isArray(S.__webglFramebuffer[X]))for(let Q=0;Q<S.__webglFramebuffer[X].length;Q++)s.deleteFramebuffer(S.__webglFramebuffer[X][Q]);else s.deleteFramebuffer(S.__webglFramebuffer[X]);S.__webglDepthbuffer&&s.deleteRenderbuffer(S.__webglDepthbuffer[X])}else{if(Array.isArray(S.__webglFramebuffer))for(let X=0;X<S.__webglFramebuffer.length;X++)s.deleteFramebuffer(S.__webglFramebuffer[X]);else s.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&s.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&s.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let X=0;X<S.__webglColorRenderbuffer.length;X++)S.__webglColorRenderbuffer[X]&&s.deleteRenderbuffer(S.__webglColorRenderbuffer[X]);S.__webglDepthRenderbuffer&&s.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const B=A.textures;for(let X=0,Q=B.length;X<Q;X++){const K=n.get(B[X]);K.__webglTexture&&(s.deleteTexture(K.__webglTexture),a.memory.textures--),n.remove(B[X])}n.remove(A)}let P=0;function D(){P=0}function N(){const A=P;return A>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+i.maxTextures),P+=1,A}function O(A){const S=[];return S.push(A.wrapS),S.push(A.wrapT),S.push(A.wrapR||0),S.push(A.magFilter),S.push(A.minFilter),S.push(A.anisotropy),S.push(A.internalFormat),S.push(A.format),S.push(A.type),S.push(A.generateMipmaps),S.push(A.premultiplyAlpha),S.push(A.flipY),S.push(A.unpackAlignment),S.push(A.colorSpace),S.join()}function W(A,S){const B=n.get(A);if(A.isVideoTexture&&ut(A),A.isRenderTargetTexture===!1&&A.version>0&&B.__version!==A.version){const X=A.image;if(X===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(X.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{q(B,A,S);return}}e.bindTexture(s.TEXTURE_2D,B.__webglTexture,s.TEXTURE0+S)}function z(A,S){const B=n.get(A);if(A.version>0&&B.__version!==A.version){q(B,A,S);return}e.bindTexture(s.TEXTURE_2D_ARRAY,B.__webglTexture,s.TEXTURE0+S)}function Z(A,S){const B=n.get(A);if(A.version>0&&B.__version!==A.version){q(B,A,S);return}e.bindTexture(s.TEXTURE_3D,B.__webglTexture,s.TEXTURE0+S)}function V(A,S){const B=n.get(A);if(A.version>0&&B.__version!==A.version){tt(B,A,S);return}e.bindTexture(s.TEXTURE_CUBE_MAP,B.__webglTexture,s.TEXTURE0+S)}const et={[ji]:s.REPEAT,[Mi]:s.CLAMP_TO_EDGE,[_a]:s.MIRRORED_REPEAT},lt={[je]:s.NEAREST,[wu]:s.NEAREST_MIPMAP_NEAREST,[Qs]:s.NEAREST_MIPMAP_LINEAR,[rn]:s.LINEAR,[ha]:s.LINEAR_MIPMAP_NEAREST,[ei]:s.LINEAR_MIPMAP_LINEAR},ht={[ud]:s.NEVER,[bd]:s.ALWAYS,[fd]:s.LESS,[Fu]:s.LEQUAL,[dd]:s.EQUAL,[gd]:s.GEQUAL,[pd]:s.GREATER,[md]:s.NOTEQUAL};function Ut(A,S){if(S.type===Cn&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===rn||S.magFilter===ha||S.magFilter===Qs||S.magFilter===ei||S.minFilter===rn||S.minFilter===ha||S.minFilter===Qs||S.minFilter===ei)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(A,s.TEXTURE_WRAP_S,et[S.wrapS]),s.texParameteri(A,s.TEXTURE_WRAP_T,et[S.wrapT]),(A===s.TEXTURE_3D||A===s.TEXTURE_2D_ARRAY)&&s.texParameteri(A,s.TEXTURE_WRAP_R,et[S.wrapR]),s.texParameteri(A,s.TEXTURE_MAG_FILTER,lt[S.magFilter]),s.texParameteri(A,s.TEXTURE_MIN_FILTER,lt[S.minFilter]),S.compareFunction&&(s.texParameteri(A,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(A,s.TEXTURE_COMPARE_FUNC,ht[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===je||S.minFilter!==Qs&&S.minFilter!==ei||S.type===Cn&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){const B=t.get("EXT_texture_filter_anisotropic");s.texParameterf(A,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,i.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function Vt(A,S){let B=!1;A.__webglInit===void 0&&(A.__webglInit=!0,S.addEventListener("dispose",w));const X=S.source;let Q=f.get(X);Q===void 0&&(Q={},f.set(X,Q));const K=O(S);if(K!==A.__cacheKey){Q[K]===void 0&&(Q[K]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,B=!0),Q[K].usedTimes++;const Et=Q[A.__cacheKey];Et!==void 0&&(Q[A.__cacheKey].usedTimes--,Et.usedTimes===0&&M(S)),A.__cacheKey=K,A.__webglTexture=Q[K].texture}return B}function q(A,S,B){let X=s.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(X=s.TEXTURE_2D_ARRAY),S.isData3DTexture&&(X=s.TEXTURE_3D);const Q=Vt(A,S),K=S.source;e.bindTexture(X,A.__webglTexture,s.TEXTURE0+B);const Et=n.get(K);if(K.version!==Et.__version||Q===!0){e.activeTexture(s.TEXTURE0+B);const dt=te.getPrimaries(te.workingColorSpace),_t=S.colorSpace===vi?null:te.getPrimaries(S.colorSpace),Qt=S.colorSpace===vi||dt===_t?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Qt);let it=m(S.image,!1,i.maxTextureSize);it=kt(S,it);const yt=r.convert(S.format,S.colorSpace),Ot=r.convert(S.type);let Bt=_(S.internalFormat,yt,Ot,S.colorSpace,S.isVideoTexture);Ut(X,S);let St;const ne=S.mipmaps,Xt=S.isVideoTexture!==!0,ge=Et.__version===void 0||Q===!0,U=K.dataReady,pt=C(S,it);if(S.isDepthTexture)Bt=x(S.format===Ss,S.type),ge&&(Xt?e.texStorage2D(s.TEXTURE_2D,1,Bt,it.width,it.height):e.texImage2D(s.TEXTURE_2D,0,Bt,it.width,it.height,0,yt,Ot,null));else if(S.isDataTexture)if(ne.length>0){Xt&&ge&&e.texStorage2D(s.TEXTURE_2D,pt,Bt,ne[0].width,ne[0].height);for(let j=0,J=ne.length;j<J;j++)St=ne[j],Xt?U&&e.texSubImage2D(s.TEXTURE_2D,j,0,0,St.width,St.height,yt,Ot,St.data):e.texImage2D(s.TEXTURE_2D,j,Bt,St.width,St.height,0,yt,Ot,St.data);S.generateMipmaps=!1}else Xt?(ge&&e.texStorage2D(s.TEXTURE_2D,pt,Bt,it.width,it.height),U&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,it.width,it.height,yt,Ot,it.data)):e.texImage2D(s.TEXTURE_2D,0,Bt,it.width,it.height,0,yt,Ot,it.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Xt&&ge&&e.texStorage3D(s.TEXTURE_2D_ARRAY,pt,Bt,ne[0].width,ne[0].height,it.depth);for(let j=0,J=ne.length;j<J;j++)if(St=ne[j],S.format!==mn)if(yt!==null)if(Xt){if(U)if(S.layerUpdates.size>0){const bt=Ah(St.width,St.height,S.format,S.type);for(const mt of S.layerUpdates){const Wt=St.data.subarray(mt*bt/St.data.BYTES_PER_ELEMENT,(mt+1)*bt/St.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,j,0,0,mt,St.width,St.height,1,yt,Wt)}S.clearLayerUpdates()}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,j,0,0,0,St.width,St.height,it.depth,yt,St.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,j,Bt,St.width,St.height,it.depth,0,St.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Xt?U&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,j,0,0,0,St.width,St.height,it.depth,yt,Ot,St.data):e.texImage3D(s.TEXTURE_2D_ARRAY,j,Bt,St.width,St.height,it.depth,0,yt,Ot,St.data)}else{Xt&&ge&&e.texStorage2D(s.TEXTURE_2D,pt,Bt,ne[0].width,ne[0].height);for(let j=0,J=ne.length;j<J;j++)St=ne[j],S.format!==mn?yt!==null?Xt?U&&e.compressedTexSubImage2D(s.TEXTURE_2D,j,0,0,St.width,St.height,yt,St.data):e.compressedTexImage2D(s.TEXTURE_2D,j,Bt,St.width,St.height,0,St.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Xt?U&&e.texSubImage2D(s.TEXTURE_2D,j,0,0,St.width,St.height,yt,Ot,St.data):e.texImage2D(s.TEXTURE_2D,j,Bt,St.width,St.height,0,yt,Ot,St.data)}else if(S.isDataArrayTexture)if(Xt){if(ge&&e.texStorage3D(s.TEXTURE_2D_ARRAY,pt,Bt,it.width,it.height,it.depth),U)if(S.layerUpdates.size>0){const j=Ah(it.width,it.height,S.format,S.type);for(const J of S.layerUpdates){const bt=it.data.subarray(J*j/it.data.BYTES_PER_ELEMENT,(J+1)*j/it.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,J,it.width,it.height,1,yt,Ot,bt)}S.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,it.width,it.height,it.depth,yt,Ot,it.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,Bt,it.width,it.height,it.depth,0,yt,Ot,it.data);else if(S.isData3DTexture)Xt?(ge&&e.texStorage3D(s.TEXTURE_3D,pt,Bt,it.width,it.height,it.depth),U&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,it.width,it.height,it.depth,yt,Ot,it.data)):e.texImage3D(s.TEXTURE_3D,0,Bt,it.width,it.height,it.depth,0,yt,Ot,it.data);else if(S.isFramebufferTexture){if(ge)if(Xt)e.texStorage2D(s.TEXTURE_2D,pt,Bt,it.width,it.height);else{let j=it.width,J=it.height;for(let bt=0;bt<pt;bt++)e.texImage2D(s.TEXTURE_2D,bt,Bt,j,J,0,yt,Ot,null),j>>=1,J>>=1}}else if(ne.length>0){if(Xt&&ge){const j=vt(ne[0]);e.texStorage2D(s.TEXTURE_2D,pt,Bt,j.width,j.height)}for(let j=0,J=ne.length;j<J;j++)St=ne[j],Xt?U&&e.texSubImage2D(s.TEXTURE_2D,j,0,0,yt,Ot,St):e.texImage2D(s.TEXTURE_2D,j,Bt,yt,Ot,St);S.generateMipmaps=!1}else if(Xt){if(ge){const j=vt(it);e.texStorage2D(s.TEXTURE_2D,pt,Bt,j.width,j.height)}U&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,yt,Ot,it)}else e.texImage2D(s.TEXTURE_2D,0,Bt,yt,Ot,it);g(S)&&p(X),Et.__version=K.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function tt(A,S,B){if(S.image.length!==6)return;const X=Vt(A,S),Q=S.source;e.bindTexture(s.TEXTURE_CUBE_MAP,A.__webglTexture,s.TEXTURE0+B);const K=n.get(Q);if(Q.version!==K.__version||X===!0){e.activeTexture(s.TEXTURE0+B);const Et=te.getPrimaries(te.workingColorSpace),dt=S.colorSpace===vi?null:te.getPrimaries(S.colorSpace),_t=S.colorSpace===vi||Et===dt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,_t);const Qt=S.isCompressedTexture||S.image[0].isCompressedTexture,it=S.image[0]&&S.image[0].isDataTexture,yt=[];for(let J=0;J<6;J++)!Qt&&!it?yt[J]=m(S.image[J],!0,i.maxCubemapSize):yt[J]=it?S.image[J].image:S.image[J],yt[J]=kt(S,yt[J]);const Ot=yt[0],Bt=r.convert(S.format,S.colorSpace),St=r.convert(S.type),ne=_(S.internalFormat,Bt,St,S.colorSpace),Xt=S.isVideoTexture!==!0,ge=K.__version===void 0||X===!0,U=Q.dataReady;let pt=C(S,Ot);Ut(s.TEXTURE_CUBE_MAP,S);let j;if(Qt){Xt&&ge&&e.texStorage2D(s.TEXTURE_CUBE_MAP,pt,ne,Ot.width,Ot.height);for(let J=0;J<6;J++){j=yt[J].mipmaps;for(let bt=0;bt<j.length;bt++){const mt=j[bt];S.format!==mn?Bt!==null?Xt?U&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,bt,0,0,mt.width,mt.height,Bt,mt.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,bt,ne,mt.width,mt.height,0,mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Xt?U&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,bt,0,0,mt.width,mt.height,Bt,St,mt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,bt,ne,mt.width,mt.height,0,Bt,St,mt.data)}}}else{if(j=S.mipmaps,Xt&&ge){j.length>0&&pt++;const J=vt(yt[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,pt,ne,J.width,J.height)}for(let J=0;J<6;J++)if(it){Xt?U&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,yt[J].width,yt[J].height,Bt,St,yt[J].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,ne,yt[J].width,yt[J].height,0,Bt,St,yt[J].data);for(let bt=0;bt<j.length;bt++){const Wt=j[bt].image[J].image;Xt?U&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,bt+1,0,0,Wt.width,Wt.height,Bt,St,Wt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,bt+1,ne,Wt.width,Wt.height,0,Bt,St,Wt.data)}}else{Xt?U&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Bt,St,yt[J]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,ne,Bt,St,yt[J]);for(let bt=0;bt<j.length;bt++){const mt=j[bt];Xt?U&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,bt+1,0,0,Bt,St,mt.image[J]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,bt+1,ne,Bt,St,mt.image[J])}}}g(S)&&p(s.TEXTURE_CUBE_MAP),K.__version=Q.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function xt(A,S,B,X,Q,K){const Et=r.convert(B.format,B.colorSpace),dt=r.convert(B.type),_t=_(B.internalFormat,Et,dt,B.colorSpace),Qt=n.get(S),it=n.get(B);if(it.__renderTarget=S,!Qt.__hasExternalTextures){const yt=Math.max(1,S.width>>K),Ot=Math.max(1,S.height>>K);Q===s.TEXTURE_3D||Q===s.TEXTURE_2D_ARRAY?e.texImage3D(Q,K,_t,yt,Ot,S.depth,0,Et,dt,null):e.texImage2D(Q,K,_t,yt,Ot,0,Et,dt,null)}e.bindFramebuffer(s.FRAMEBUFFER,A),Mt(S)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,X,Q,it.__webglTexture,0,$(S)):(Q===s.TEXTURE_2D||Q>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,X,Q,it.__webglTexture,K),e.bindFramebuffer(s.FRAMEBUFFER,null)}function st(A,S,B){if(s.bindRenderbuffer(s.RENDERBUFFER,A),S.depthBuffer){const X=S.depthTexture,Q=X&&X.isDepthTexture?X.type:null,K=x(S.stencilBuffer,Q),Et=S.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,dt=$(S);Mt(S)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,dt,K,S.width,S.height):B?s.renderbufferStorageMultisample(s.RENDERBUFFER,dt,K,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,K,S.width,S.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Et,s.RENDERBUFFER,A)}else{const X=S.textures;for(let Q=0;Q<X.length;Q++){const K=X[Q],Et=r.convert(K.format,K.colorSpace),dt=r.convert(K.type),_t=_(K.internalFormat,Et,dt,K.colorSpace),Qt=$(S);B&&Mt(S)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Qt,_t,S.width,S.height):Mt(S)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Qt,_t,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,_t,S.width,S.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function wt(A,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,A),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const X=n.get(S.depthTexture);X.__renderTarget=S,(!X.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),W(S.depthTexture,0);const Q=X.__webglTexture,K=$(S);if(S.depthTexture.format===gs)Mt(S)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Q,0,K):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Q,0);else if(S.depthTexture.format===Ss)Mt(S)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Q,0,K):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function zt(A){const S=n.get(A),B=A.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==A.depthTexture){const X=A.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),X){const Q=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,X.removeEventListener("dispose",Q)};X.addEventListener("dispose",Q),S.__depthDisposeCallback=Q}S.__boundDepthTexture=X}if(A.depthTexture&&!S.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");wt(S.__webglFramebuffer,A)}else if(B){S.__webglDepthbuffer=[];for(let X=0;X<6;X++)if(e.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer[X]),S.__webglDepthbuffer[X]===void 0)S.__webglDepthbuffer[X]=s.createRenderbuffer(),st(S.__webglDepthbuffer[X],A,!1);else{const Q=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,K=S.__webglDepthbuffer[X];s.bindRenderbuffer(s.RENDERBUFFER,K),s.framebufferRenderbuffer(s.FRAMEBUFFER,Q,s.RENDERBUFFER,K)}}else if(e.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=s.createRenderbuffer(),st(S.__webglDepthbuffer,A,!1);else{const X=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Q=S.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,Q),s.framebufferRenderbuffer(s.FRAMEBUFFER,X,s.RENDERBUFFER,Q)}e.bindFramebuffer(s.FRAMEBUFFER,null)}function Ft(A,S,B){const X=n.get(A);S!==void 0&&xt(X.__webglFramebuffer,A,A.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),B!==void 0&&zt(A)}function $t(A){const S=A.texture,B=n.get(A),X=n.get(S);A.addEventListener("dispose",E);const Q=A.textures,K=A.isWebGLCubeRenderTarget===!0,Et=Q.length>1;if(Et||(X.__webglTexture===void 0&&(X.__webglTexture=s.createTexture()),X.__version=S.version,a.memory.textures++),K){B.__webglFramebuffer=[];for(let dt=0;dt<6;dt++)if(S.mipmaps&&S.mipmaps.length>0){B.__webglFramebuffer[dt]=[];for(let _t=0;_t<S.mipmaps.length;_t++)B.__webglFramebuffer[dt][_t]=s.createFramebuffer()}else B.__webglFramebuffer[dt]=s.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){B.__webglFramebuffer=[];for(let dt=0;dt<S.mipmaps.length;dt++)B.__webglFramebuffer[dt]=s.createFramebuffer()}else B.__webglFramebuffer=s.createFramebuffer();if(Et)for(let dt=0,_t=Q.length;dt<_t;dt++){const Qt=n.get(Q[dt]);Qt.__webglTexture===void 0&&(Qt.__webglTexture=s.createTexture(),a.memory.textures++)}if(A.samples>0&&Mt(A)===!1){B.__webglMultisampledFramebuffer=s.createFramebuffer(),B.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let dt=0;dt<Q.length;dt++){const _t=Q[dt];B.__webglColorRenderbuffer[dt]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,B.__webglColorRenderbuffer[dt]);const Qt=r.convert(_t.format,_t.colorSpace),it=r.convert(_t.type),yt=_(_t.internalFormat,Qt,it,_t.colorSpace,A.isXRRenderTarget===!0),Ot=$(A);s.renderbufferStorageMultisample(s.RENDERBUFFER,Ot,yt,A.width,A.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+dt,s.RENDERBUFFER,B.__webglColorRenderbuffer[dt])}s.bindRenderbuffer(s.RENDERBUFFER,null),A.depthBuffer&&(B.__webglDepthRenderbuffer=s.createRenderbuffer(),st(B.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(K){e.bindTexture(s.TEXTURE_CUBE_MAP,X.__webglTexture),Ut(s.TEXTURE_CUBE_MAP,S);for(let dt=0;dt<6;dt++)if(S.mipmaps&&S.mipmaps.length>0)for(let _t=0;_t<S.mipmaps.length;_t++)xt(B.__webglFramebuffer[dt][_t],A,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+dt,_t);else xt(B.__webglFramebuffer[dt],A,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0);g(S)&&p(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Et){for(let dt=0,_t=Q.length;dt<_t;dt++){const Qt=Q[dt],it=n.get(Qt);e.bindTexture(s.TEXTURE_2D,it.__webglTexture),Ut(s.TEXTURE_2D,Qt),xt(B.__webglFramebuffer,A,Qt,s.COLOR_ATTACHMENT0+dt,s.TEXTURE_2D,0),g(Qt)&&p(s.TEXTURE_2D)}e.unbindTexture()}else{let dt=s.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(dt=A.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(dt,X.__webglTexture),Ut(dt,S),S.mipmaps&&S.mipmaps.length>0)for(let _t=0;_t<S.mipmaps.length;_t++)xt(B.__webglFramebuffer[_t],A,S,s.COLOR_ATTACHMENT0,dt,_t);else xt(B.__webglFramebuffer,A,S,s.COLOR_ATTACHMENT0,dt,0);g(S)&&p(dt),e.unbindTexture()}A.depthBuffer&&zt(A)}function Y(A){const S=A.textures;for(let B=0,X=S.length;B<X;B++){const Q=S[B];if(g(Q)){const K=v(A),Et=n.get(Q).__webglTexture;e.bindTexture(K,Et),p(K),e.unbindTexture()}}}const nt=[],I=[];function Tt(A){if(A.samples>0){if(Mt(A)===!1){const S=A.textures,B=A.width,X=A.height;let Q=s.COLOR_BUFFER_BIT;const K=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Et=n.get(A),dt=S.length>1;if(dt)for(let _t=0;_t<S.length;_t++)e.bindFramebuffer(s.FRAMEBUFFER,Et.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+_t,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,Et.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+_t,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,Et.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Et.__webglFramebuffer);for(let _t=0;_t<S.length;_t++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(Q|=s.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(Q|=s.STENCIL_BUFFER_BIT)),dt){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Et.__webglColorRenderbuffer[_t]);const Qt=n.get(S[_t]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Qt,0)}s.blitFramebuffer(0,0,B,X,0,0,B,X,Q,s.NEAREST),c===!0&&(nt.length=0,I.length=0,nt.push(s.COLOR_ATTACHMENT0+_t),A.depthBuffer&&A.resolveDepthBuffer===!1&&(nt.push(K),I.push(K),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,I)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,nt))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),dt)for(let _t=0;_t<S.length;_t++){e.bindFramebuffer(s.FRAMEBUFFER,Et.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+_t,s.RENDERBUFFER,Et.__webglColorRenderbuffer[_t]);const Qt=n.get(S[_t]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,Et.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+_t,s.TEXTURE_2D,Qt,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Et.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&c){const S=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[S])}}}function $(A){return Math.min(i.maxSamples,A.samples)}function Mt(A){const S=n.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function ut(A){const S=a.render.frame;h.get(A)!==S&&(h.set(A,S),A.update())}function kt(A,S){const B=A.colorSpace,X=A.format,Q=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||B!==Ze&&B!==vi&&(te.getTransfer(B)===de?(X!==mn||Q!==oi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),S}function vt(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(l.width=A.naturalWidth||A.width,l.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(l.width=A.displayWidth,l.height=A.displayHeight):(l.width=A.width,l.height=A.height),l}this.allocateTextureUnit=N,this.resetTextureUnits=D,this.setTexture2D=W,this.setTexture2DArray=z,this.setTexture3D=Z,this.setTextureCube=V,this.rebindTextures=Ft,this.setupRenderTarget=$t,this.updateRenderTargetMipmap=Y,this.updateMultisampleRenderTarget=Tt,this.setupDepthRenderbuffer=zt,this.setupFrameBufferTexture=xt,this.useMultisampledRTT=Mt}function kb(s,t){function e(n,i=vi){let r;const a=te.getTransfer(i);if(n===oi)return s.UNSIGNED_BYTE;if(n===Gc)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Hc)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Ru)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Eu)return s.BYTE;if(n===Au)return s.SHORT;if(n===mr)return s.UNSIGNED_SHORT;if(n===Bc)return s.INT;if(n===Ai)return s.UNSIGNED_INT;if(n===Cn)return s.FLOAT;if(n===Ls)return s.HALF_FLOAT;if(n===Cu)return s.ALPHA;if(n===Pu)return s.RGB;if(n===mn)return s.RGBA;if(n===Lu)return s.LUMINANCE;if(n===Iu)return s.LUMINANCE_ALPHA;if(n===gs)return s.DEPTH_COMPONENT;if(n===Ss)return s.DEPTH_STENCIL;if(n===Ia)return s.RED;if(n===Vc)return s.RED_INTEGER;if(n===Du)return s.RG;if(n===Wc)return s.RG_INTEGER;if(n===jc)return s.RGBA_INTEGER;if(n===ua||n===fa||n===da||n===pa)if(a===de)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===ua)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===fa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===da)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===pa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===ua)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===fa)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===da)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===pa)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Jo||n===Zo||n===Qo||n===$o)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Jo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Zo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Qo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===$o)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===tc||n===ec||n===nc)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===tc||n===ec)return a===de?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===nc)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===ic||n===sc||n===rc||n===ac||n===oc||n===cc||n===lc||n===hc||n===uc||n===fc||n===dc||n===pc||n===mc||n===gc)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ic)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===sc)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===rc)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ac)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===oc)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===cc)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===lc)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===hc)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===uc)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===fc)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===dc)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===pc)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===mc)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===gc)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ma||n===bc||n===xc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===ma)return a===de?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===bc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===xc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Uu||n===vc||n===_c||n===Mc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===ma)return r.COMPRESSED_RED_RGTC1_EXT;if(n===vc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===_c)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Mc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ys?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}class Ob extends We{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class ee extends pe{constructor(){super(),this.isGroup=!0,this.type="Group"}}const zb={type:"move"};class vo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ee,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ee,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ee,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){a=!0;for(const m of t.hand.values()){const g=e.getJointPose(m,n),p=this._getHandJoint(l,m);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,b=.005;l.inputState.pinching&&f>d+b?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&f<=d-b&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(zb)))}return o!==null&&(o.visible=i!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new ee;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const Bb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Gb=`
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

}`;class Hb{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const i=new Ne,r=t.properties.get(i);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new an({vertexShader:Bb,fragmentShader:Gb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new at(new on(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Vb extends Is{constructor(t,e){super();const n=this;let i=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,u=null,f=null,d=null,b=null;const m=new Hb,g=e.getContextAttributes();let p=null,v=null;const _=[],x=[],C=new ct;let w=null;const E=new We;E.viewport=new re;const L=new We;L.viewport=new re;const M=[E,L],y=new Ob;let P=null,D=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let tt=_[q];return tt===void 0&&(tt=new vo,_[q]=tt),tt.getTargetRaySpace()},this.getControllerGrip=function(q){let tt=_[q];return tt===void 0&&(tt=new vo,_[q]=tt),tt.getGripSpace()},this.getHand=function(q){let tt=_[q];return tt===void 0&&(tt=new vo,_[q]=tt),tt.getHandSpace()};function N(q){const tt=x.indexOf(q.inputSource);if(tt===-1)return;const xt=_[tt];xt!==void 0&&(xt.update(q.inputSource,q.frame,l||a),xt.dispatchEvent({type:q.type,data:q.inputSource}))}function O(){i.removeEventListener("select",N),i.removeEventListener("selectstart",N),i.removeEventListener("selectend",N),i.removeEventListener("squeeze",N),i.removeEventListener("squeezestart",N),i.removeEventListener("squeezeend",N),i.removeEventListener("end",O),i.removeEventListener("inputsourceschange",W);for(let q=0;q<_.length;q++){const tt=x[q];tt!==null&&(x[q]=null,_[q].disconnect(tt))}P=null,D=null,m.reset(),t.setRenderTarget(p),d=null,f=null,u=null,i=null,v=null,Vt.stop(),n.isPresenting=!1,t.setPixelRatio(w),t.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){o=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(q){l=q},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u},this.getFrame=function(){return b},this.getSession=function(){return i},this.setSession=async function(q){if(i=q,i!==null){if(p=t.getRenderTarget(),i.addEventListener("select",N),i.addEventListener("selectstart",N),i.addEventListener("selectend",N),i.addEventListener("squeeze",N),i.addEventListener("squeezestart",N),i.addEventListener("squeezeend",N),i.addEventListener("end",O),i.addEventListener("inputsourceschange",W),g.xrCompatible!==!0&&await e.makeXRCompatible(),w=t.getPixelRatio(),t.getSize(C),i.renderState.layers===void 0){const tt={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(i,e,tt),i.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),v=new ci(d.framebufferWidth,d.framebufferHeight,{format:mn,type:oi,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil})}else{let tt=null,xt=null,st=null;g.depth&&(st=g.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,tt=g.stencil?Ss:gs,xt=g.stencil?ys:Ai);const wt={colorFormat:e.RGBA8,depthFormat:st,scaleFactor:r};u=new XRWebGLBinding(i,e),f=u.createProjectionLayer(wt),i.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),v=new ci(f.textureWidth,f.textureHeight,{format:mn,type:oi,depthTexture:new Yc(f.textureWidth,f.textureHeight,xt,void 0,void 0,void 0,void 0,void 0,void 0,tt),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await i.requestReferenceSpace(o),Vt.setContext(i),Vt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function W(q){for(let tt=0;tt<q.removed.length;tt++){const xt=q.removed[tt],st=x.indexOf(xt);st>=0&&(x[st]=null,_[st].disconnect(xt))}for(let tt=0;tt<q.added.length;tt++){const xt=q.added[tt];let st=x.indexOf(xt);if(st===-1){for(let zt=0;zt<_.length;zt++)if(zt>=x.length){x.push(xt),st=zt;break}else if(x[zt]===null){x[zt]=xt,st=zt;break}if(st===-1)break}const wt=_[st];wt&&wt.connect(xt)}}const z=new R,Z=new R;function V(q,tt,xt){z.setFromMatrixPosition(tt.matrixWorld),Z.setFromMatrixPosition(xt.matrixWorld);const st=z.distanceTo(Z),wt=tt.projectionMatrix.elements,zt=xt.projectionMatrix.elements,Ft=wt[14]/(wt[10]-1),$t=wt[14]/(wt[10]+1),Y=(wt[9]+1)/wt[5],nt=(wt[9]-1)/wt[5],I=(wt[8]-1)/wt[0],Tt=(zt[8]+1)/zt[0],$=Ft*I,Mt=Ft*Tt,ut=st/(-I+Tt),kt=ut*-I;if(tt.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(kt),q.translateZ(ut),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),wt[10]===-1)q.projectionMatrix.copy(tt.projectionMatrix),q.projectionMatrixInverse.copy(tt.projectionMatrixInverse);else{const vt=Ft+ut,A=$t+ut,S=$-kt,B=Mt+(st-kt),X=Y*$t/A*vt,Q=nt*$t/A*vt;q.projectionMatrix.makePerspective(S,B,X,Q,vt,A),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function et(q,tt){tt===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(tt.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(i===null)return;let tt=q.near,xt=q.far;m.texture!==null&&(m.depthNear>0&&(tt=m.depthNear),m.depthFar>0&&(xt=m.depthFar)),y.near=L.near=E.near=tt,y.far=L.far=E.far=xt,(P!==y.near||D!==y.far)&&(i.updateRenderState({depthNear:y.near,depthFar:y.far}),P=y.near,D=y.far),E.layers.mask=q.layers.mask|2,L.layers.mask=q.layers.mask|4,y.layers.mask=E.layers.mask|L.layers.mask;const st=q.parent,wt=y.cameras;et(y,st);for(let zt=0;zt<wt.length;zt++)et(wt[zt],st);wt.length===2?V(y,E,L):y.projectionMatrix.copy(E.projectionMatrix),lt(q,y,st)};function lt(q,tt,xt){xt===null?q.matrix.copy(tt.matrixWorld):(q.matrix.copy(xt.matrixWorld),q.matrix.invert(),q.matrix.multiply(tt.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(tt.projectionMatrix),q.projectionMatrixInverse.copy(tt.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Ts*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(f===null&&d===null))return c},this.setFoveation=function(q){c=q,f!==null&&(f.fixedFoveation=q),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=q)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(y)};let ht=null;function Ut(q,tt){if(h=tt.getViewerPose(l||a),b=tt,h!==null){const xt=h.views;d!==null&&(t.setRenderTargetFramebuffer(v,d.framebuffer),t.setRenderTarget(v));let st=!1;xt.length!==y.cameras.length&&(y.cameras.length=0,st=!0);for(let zt=0;zt<xt.length;zt++){const Ft=xt[zt];let $t=null;if(d!==null)$t=d.getViewport(Ft);else{const nt=u.getViewSubImage(f,Ft);$t=nt.viewport,zt===0&&(t.setRenderTargetTextures(v,nt.colorTexture,f.ignoreDepthValues?void 0:nt.depthStencilTexture),t.setRenderTarget(v))}let Y=M[zt];Y===void 0&&(Y=new We,Y.layers.enable(zt),Y.viewport=new re,M[zt]=Y),Y.matrix.fromArray(Ft.transform.matrix),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.projectionMatrix.fromArray(Ft.projectionMatrix),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert(),Y.viewport.set($t.x,$t.y,$t.width,$t.height),zt===0&&(y.matrix.copy(Y.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),st===!0&&y.cameras.push(Y)}const wt=i.enabledFeatures;if(wt&&wt.includes("depth-sensing")){const zt=u.getDepthInformation(xt[0]);zt&&zt.isValid&&zt.texture&&m.init(t,zt,i.renderState)}}for(let xt=0;xt<_.length;xt++){const st=x[xt],wt=_[xt];st!==null&&wt!==void 0&&wt.update(st,tt,l||a)}ht&&ht(q,tt),tt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:tt}),b=null}const Vt=new Xu;Vt.setAnimationLoop(Ut),this.setAnimationLoop=function(q){ht=q},this.dispose=function(){}}}const Ui=new ln,Wb=new Nt;function jb(s,t){function e(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,Wu(s)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function i(g,p,v,_,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(g,p):p.isMeshToonMaterial?(r(g,p),u(g,p)):p.isMeshPhongMaterial?(r(g,p),h(g,p)):p.isMeshStandardMaterial?(r(g,p),f(g,p),p.isMeshPhysicalMaterial&&d(g,p,x)):p.isMeshMatcapMaterial?(r(g,p),b(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),m(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(a(g,p),p.isLineDashedMaterial&&o(g,p)):p.isPointsMaterial?c(g,p,v,_):p.isSpriteMaterial?l(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,e(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===Je&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,e(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===Je&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,e(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,e(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);const v=t.get(p),_=v.envMap,x=v.envMapRotation;_&&(g.envMap.value=_,Ui.copy(x),Ui.x*=-1,Ui.y*=-1,Ui.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Ui.y*=-1,Ui.z*=-1),g.envMapRotation.value.setFromMatrix4(Wb.makeRotationFromEuler(Ui)),g.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,g.aoMapTransform))}function a(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform))}function o(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function c(g,p,v,_){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*v,g.scale.value=_*.5,p.map&&(g.map.value=p.map,e(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function l(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function u(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function f(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function d(g,p,v){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Je&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=v.texture,g.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,g.specularIntensityMapTransform))}function b(g,p){p.matcap&&(g.matcap.value=p.matcap)}function m(g,p){const v=t.get(p).light;g.referencePosition.value.setFromMatrixPosition(v.matrixWorld),g.nearDistance.value=v.shadow.camera.near,g.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function qb(s,t,e,n){let i={},r={},a=[];const o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function c(v,_){const x=_.program;n.uniformBlockBinding(v,x)}function l(v,_){let x=i[v.id];x===void 0&&(b(v),x=h(v),i[v.id]=x,v.addEventListener("dispose",g));const C=_.program;n.updateUBOMapping(v,C);const w=t.render.frame;r[v.id]!==w&&(f(v),r[v.id]=w)}function h(v){const _=u();v.__bindingPointIndex=_;const x=s.createBuffer(),C=v.__size,w=v.usage;return s.bindBuffer(s.UNIFORM_BUFFER,x),s.bufferData(s.UNIFORM_BUFFER,C,w),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,_,x),x}function u(){for(let v=0;v<o;v++)if(a.indexOf(v)===-1)return a.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(v){const _=i[v.id],x=v.uniforms,C=v.__cache;s.bindBuffer(s.UNIFORM_BUFFER,_);for(let w=0,E=x.length;w<E;w++){const L=Array.isArray(x[w])?x[w]:[x[w]];for(let M=0,y=L.length;M<y;M++){const P=L[M];if(d(P,w,M,C)===!0){const D=P.__offset,N=Array.isArray(P.value)?P.value:[P.value];let O=0;for(let W=0;W<N.length;W++){const z=N[W],Z=m(z);typeof z=="number"||typeof z=="boolean"?(P.__data[0]=z,s.bufferSubData(s.UNIFORM_BUFFER,D+O,P.__data)):z.isMatrix3?(P.__data[0]=z.elements[0],P.__data[1]=z.elements[1],P.__data[2]=z.elements[2],P.__data[3]=0,P.__data[4]=z.elements[3],P.__data[5]=z.elements[4],P.__data[6]=z.elements[5],P.__data[7]=0,P.__data[8]=z.elements[6],P.__data[9]=z.elements[7],P.__data[10]=z.elements[8],P.__data[11]=0):(z.toArray(P.__data,O),O+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,D,P.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function d(v,_,x,C){const w=v.value,E=_+"_"+x;if(C[E]===void 0)return typeof w=="number"||typeof w=="boolean"?C[E]=w:C[E]=w.clone(),!0;{const L=C[E];if(typeof w=="number"||typeof w=="boolean"){if(L!==w)return C[E]=w,!0}else if(L.equals(w)===!1)return L.copy(w),!0}return!1}function b(v){const _=v.uniforms;let x=0;const C=16;for(let E=0,L=_.length;E<L;E++){const M=Array.isArray(_[E])?_[E]:[_[E]];for(let y=0,P=M.length;y<P;y++){const D=M[y],N=Array.isArray(D.value)?D.value:[D.value];for(let O=0,W=N.length;O<W;O++){const z=N[O],Z=m(z),V=x%C,et=V%Z.boundary,lt=V+et;x+=et,lt!==0&&C-lt<Z.storage&&(x+=C-lt),D.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=x,x+=Z.storage}}}const w=x%C;return w>0&&(x+=C-w),v.__size=x,v.__cache={},this}function m(v){const _={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(_.boundary=4,_.storage=4):v.isVector2?(_.boundary=8,_.storage=8):v.isVector3||v.isColor?(_.boundary=16,_.storage=12):v.isVector4?(_.boundary=16,_.storage=16):v.isMatrix3?(_.boundary=48,_.storage=48):v.isMatrix4?(_.boundary=64,_.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),_}function g(v){const _=v.target;_.removeEventListener("dispose",g);const x=a.indexOf(_.__bindingPointIndex);a.splice(x,1),s.deleteBuffer(i[_.id]),delete i[_.id],delete r[_.id]}function p(){for(const v in i)s.deleteBuffer(i[v]);a=[],i={},r={}}return{bind:c,update:l,dispose:p}}class Xb{constructor(t={}){const{canvas:e=Nd(),context:n=null,depth:i=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=a;const b=new Uint32Array(4),m=new Int32Array(4);let g=null,p=null;const v=[],_=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ie,this.toneMapping=Ei,this.toneMappingExposure=1;const x=this;let C=!1,w=0,E=0,L=null,M=-1,y=null;const P=new re,D=new re;let N=null;const O=new ot(0);let W=0,z=e.width,Z=e.height,V=1,et=null,lt=null;const ht=new re(0,0,z,Z),Ut=new re(0,0,z,Z);let Vt=!1;const q=new Xc;let tt=!1,xt=!1;const st=new Nt,wt=new Nt,zt=new R,Ft=new re,$t={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Y=!1;function nt(){return L===null?V:1}let I=n;function Tt(T,F){return e.getContext(T,F)}try{const T={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Oc}`),e.addEventListener("webglcontextlost",J,!1),e.addEventListener("webglcontextrestored",bt,!1),e.addEventListener("webglcontextcreationerror",mt,!1),I===null){const F="webgl2";if(I=Tt(F,T),I===null)throw Tt(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let $,Mt,ut,kt,vt,A,S,B,X,Q,K,Et,dt,_t,Qt,it,yt,Ot,Bt,St,ne,Xt,ge,U;function pt(){$=new Q0(I),$.init(),Xt=new kb(I,$),Mt=new q0(I,$,t,Xt),ut=new Ub(I,$),Mt.reverseDepthBuffer&&f&&ut.buffers.depth.setReversed(!0),kt=new eg(I),vt=new vb,A=new Fb(I,$,ut,vt,Mt,Xt,kt),S=new K0(x),B=new Z0(x),X=new cp(I),ge=new W0(I,X),Q=new $0(I,X,kt,ge),K=new ig(I,Q,X,kt),Bt=new ng(I,Mt,A),it=new X0(vt),Et=new xb(x,S,B,$,Mt,ge,it),dt=new jb(x,vt),_t=new Mb,Qt=new Ab($),Ot=new V0(x,S,B,ut,K,d,c),yt=new Ib(x,K,Mt),U=new qb(I,kt,Mt,ut),St=new j0(I,$,kt),ne=new tg(I,$,kt),kt.programs=Et.programs,x.capabilities=Mt,x.extensions=$,x.properties=vt,x.renderLists=_t,x.shadowMap=yt,x.state=ut,x.info=kt}pt();const j=new Vb(x,I);this.xr=j,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const T=$.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=$.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(T){T!==void 0&&(V=T,this.setSize(z,Z,!1))},this.getSize=function(T){return T.set(z,Z)},this.setSize=function(T,F,G=!0){if(j.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}z=T,Z=F,e.width=Math.floor(T*V),e.height=Math.floor(F*V),G===!0&&(e.style.width=T+"px",e.style.height=F+"px"),this.setViewport(0,0,T,F)},this.getDrawingBufferSize=function(T){return T.set(z*V,Z*V).floor()},this.setDrawingBufferSize=function(T,F,G){z=T,Z=F,V=G,e.width=Math.floor(T*G),e.height=Math.floor(F*G),this.setViewport(0,0,T,F)},this.getCurrentViewport=function(T){return T.copy(P)},this.getViewport=function(T){return T.copy(ht)},this.setViewport=function(T,F,G,H){T.isVector4?ht.set(T.x,T.y,T.z,T.w):ht.set(T,F,G,H),ut.viewport(P.copy(ht).multiplyScalar(V).round())},this.getScissor=function(T){return T.copy(Ut)},this.setScissor=function(T,F,G,H){T.isVector4?Ut.set(T.x,T.y,T.z,T.w):Ut.set(T,F,G,H),ut.scissor(D.copy(Ut).multiplyScalar(V).round())},this.getScissorTest=function(){return Vt},this.setScissorTest=function(T){ut.setScissorTest(Vt=T)},this.setOpaqueSort=function(T){et=T},this.setTransparentSort=function(T){lt=T},this.getClearColor=function(T){return T.copy(Ot.getClearColor())},this.setClearColor=function(){Ot.setClearColor.apply(Ot,arguments)},this.getClearAlpha=function(){return Ot.getClearAlpha()},this.setClearAlpha=function(){Ot.setClearAlpha.apply(Ot,arguments)},this.clear=function(T=!0,F=!0,G=!0){let H=0;if(T){let k=!1;if(L!==null){const rt=L.texture.format;k=rt===jc||rt===Wc||rt===Vc}if(k){const rt=L.texture.type,gt=rt===oi||rt===Ai||rt===mr||rt===ys||rt===Gc||rt===Hc,Rt=Ot.getClearColor(),Ct=Ot.getClearAlpha(),Gt=Rt.r,jt=Rt.g,Pt=Rt.b;gt?(b[0]=Gt,b[1]=jt,b[2]=Pt,b[3]=Ct,I.clearBufferuiv(I.COLOR,0,b)):(m[0]=Gt,m[1]=jt,m[2]=Pt,m[3]=Ct,I.clearBufferiv(I.COLOR,0,m))}else H|=I.COLOR_BUFFER_BIT}F&&(H|=I.DEPTH_BUFFER_BIT),G&&(H|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",J,!1),e.removeEventListener("webglcontextrestored",bt,!1),e.removeEventListener("webglcontextcreationerror",mt,!1),_t.dispose(),Qt.dispose(),vt.dispose(),S.dispose(),B.dispose(),K.dispose(),ge.dispose(),U.dispose(),Et.dispose(),j.dispose(),j.removeEventListener("sessionstart",vl),j.removeEventListener("sessionend",_l),Ri.stop()};function J(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function bt(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;const T=kt.autoReset,F=yt.enabled,G=yt.autoUpdate,H=yt.needsUpdate,k=yt.type;pt(),kt.autoReset=T,yt.enabled=F,yt.autoUpdate=G,yt.needsUpdate=H,yt.type=k}function mt(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Wt(T){const F=T.target;F.removeEventListener("dispose",Wt),Ae(F)}function Ae(T){Be(T),vt.remove(T)}function Be(T){const F=vt.get(T).programs;F!==void 0&&(F.forEach(function(G){Et.releaseProgram(G)}),T.isShaderMaterial&&Et.releaseShaderCache(T))}this.renderBufferDirect=function(T,F,G,H,k,rt){F===null&&(F=$t);const gt=k.isMesh&&k.matrixWorld.determinant()<0,Rt=Af(T,F,G,H,k);ut.setMaterial(H,gt);let Ct=G.index,Gt=1;if(H.wireframe===!0){if(Ct=Q.getWireframeAttribute(G),Ct===void 0)return;Gt=2}const jt=G.drawRange,Pt=G.attributes.position;let ie=jt.start*Gt,be=(jt.start+jt.count)*Gt;rt!==null&&(ie=Math.max(ie,rt.start*Gt),be=Math.min(be,(rt.start+rt.count)*Gt)),Ct!==null?(ie=Math.max(ie,0),be=Math.min(be,Ct.count)):Pt!=null&&(ie=Math.max(ie,0),be=Math.min(be,Pt.count));const _e=be-ie;if(_e<0||_e===1/0)return;ge.setup(k,H,Rt,G,Ct);let Qe,ae=St;if(Ct!==null&&(Qe=X.get(Ct),ae=ne,ae.setIndex(Qe)),k.isMesh)H.wireframe===!0?(ut.setLineWidth(H.wireframeLinewidth*nt()),ae.setMode(I.LINES)):ae.setMode(I.TRIANGLES);else if(k.isLine){let It=H.linewidth;It===void 0&&(It=1),ut.setLineWidth(It*nt()),k.isLineSegments?ae.setMode(I.LINES):k.isLineLoop?ae.setMode(I.LINE_LOOP):ae.setMode(I.LINE_STRIP)}else k.isPoints?ae.setMode(I.POINTS):k.isSprite&&ae.setMode(I.TRIANGLES);if(k.isBatchedMesh)if(k._multiDrawInstances!==null)ae.renderMultiDrawInstances(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount,k._multiDrawInstances);else if($.get("WEBGL_multi_draw"))ae.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{const It=k._multiDrawStarts,jn=k._multiDrawCounts,oe=k._multiDrawCount,Mn=Ct?X.get(Ct).bytesPerElement:1,Ki=vt.get(H).currentProgram.getUniforms();for(let tn=0;tn<oe;tn++)Ki.setValue(I,"_gl_DrawID",tn),ae.render(It[tn]/Mn,jn[tn])}else if(k.isInstancedMesh)ae.renderInstances(ie,_e,k.count);else if(G.isInstancedBufferGeometry){const It=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,jn=Math.min(G.instanceCount,It);ae.renderInstances(ie,_e,jn)}else ae.render(ie,_e)};function le(T,F,G){T.transparent===!0&&T.side===Ue&&T.forceSinglePass===!1?(T.side=Je,T.needsUpdate=!0,Rr(T,F,G),T.side=ai,T.needsUpdate=!0,Rr(T,F,G),T.side=Ue):Rr(T,F,G)}this.compile=function(T,F,G=null){G===null&&(G=T),p=Qt.get(G),p.init(F),_.push(p),G.traverseVisible(function(k){k.isLight&&k.layers.test(F.layers)&&(p.pushLight(k),k.castShadow&&p.pushShadow(k))}),T!==G&&T.traverseVisible(function(k){k.isLight&&k.layers.test(F.layers)&&(p.pushLight(k),k.castShadow&&p.pushShadow(k))}),p.setupLights();const H=new Set;return T.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;const rt=k.material;if(rt)if(Array.isArray(rt))for(let gt=0;gt<rt.length;gt++){const Rt=rt[gt];le(Rt,G,k),H.add(Rt)}else le(rt,G,k),H.add(rt)}),_.pop(),p=null,H},this.compileAsync=function(T,F,G=null){const H=this.compile(T,F,G);return new Promise(k=>{function rt(){if(H.forEach(function(gt){vt.get(gt).currentProgram.isReady()&&H.delete(gt)}),H.size===0){k(T);return}setTimeout(rt,10)}$.get("KHR_parallel_shader_compile")!==null?rt():setTimeout(rt,10)})};let _n=null;function Wn(T){_n&&_n(T)}function vl(){Ri.stop()}function _l(){Ri.start()}const Ri=new Xu;Ri.setAnimationLoop(Wn),typeof self<"u"&&Ri.setContext(self),this.setAnimationLoop=function(T){_n=T,j.setAnimationLoop(T),T===null?Ri.stop():Ri.start()},j.addEventListener("sessionstart",vl),j.addEventListener("sessionend",_l),this.render=function(T,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),j.enabled===!0&&j.isPresenting===!0&&(j.cameraAutoUpdate===!0&&j.updateCamera(F),F=j.getCamera()),T.isScene===!0&&T.onBeforeRender(x,T,F,L),p=Qt.get(T,_.length),p.init(F),_.push(p),wt.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),q.setFromProjectionMatrix(wt),xt=this.localClippingEnabled,tt=it.init(this.clippingPlanes,xt),g=_t.get(T,v.length),g.init(),v.push(g),j.enabled===!0&&j.isPresenting===!0){const rt=x.xr.getDepthSensingMesh();rt!==null&&Wa(rt,F,-1/0,x.sortObjects)}Wa(T,F,0,x.sortObjects),g.finish(),x.sortObjects===!0&&g.sort(et,lt),Y=j.enabled===!1||j.isPresenting===!1||j.hasDepthSensing()===!1,Y&&Ot.addToRenderList(g,T),this.info.render.frame++,tt===!0&&it.beginShadows();const G=p.state.shadowsArray;yt.render(G,T,F),tt===!0&&it.endShadows(),this.info.autoReset===!0&&this.info.reset();const H=g.opaque,k=g.transmissive;if(p.setupLights(),F.isArrayCamera){const rt=F.cameras;if(k.length>0)for(let gt=0,Rt=rt.length;gt<Rt;gt++){const Ct=rt[gt];yl(H,k,T,Ct)}Y&&Ot.render(T);for(let gt=0,Rt=rt.length;gt<Rt;gt++){const Ct=rt[gt];Ml(g,T,Ct,Ct.viewport)}}else k.length>0&&yl(H,k,T,F),Y&&Ot.render(T),Ml(g,T,F);L!==null&&(A.updateMultisampleRenderTarget(L),A.updateRenderTargetMipmap(L)),T.isScene===!0&&T.onAfterRender(x,T,F),ge.resetDefaultState(),M=-1,y=null,_.pop(),_.length>0?(p=_[_.length-1],tt===!0&&it.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,v.pop(),v.length>0?g=v[v.length-1]:g=null};function Wa(T,F,G,H){if(T.visible===!1)return;if(T.layers.test(F.layers)){if(T.isGroup)G=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(F);else if(T.isLight)p.pushLight(T),T.castShadow&&p.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||q.intersectsSprite(T)){H&&Ft.setFromMatrixPosition(T.matrixWorld).applyMatrix4(wt);const gt=K.update(T),Rt=T.material;Rt.visible&&g.push(T,gt,Rt,G,Ft.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||q.intersectsObject(T))){const gt=K.update(T),Rt=T.material;if(H&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Ft.copy(T.boundingSphere.center)):(gt.boundingSphere===null&&gt.computeBoundingSphere(),Ft.copy(gt.boundingSphere.center)),Ft.applyMatrix4(T.matrixWorld).applyMatrix4(wt)),Array.isArray(Rt)){const Ct=gt.groups;for(let Gt=0,jt=Ct.length;Gt<jt;Gt++){const Pt=Ct[Gt],ie=Rt[Pt.materialIndex];ie&&ie.visible&&g.push(T,gt,ie,G,Ft.z,Pt)}}else Rt.visible&&g.push(T,gt,Rt,G,Ft.z,null)}}const rt=T.children;for(let gt=0,Rt=rt.length;gt<Rt;gt++)Wa(rt[gt],F,G,H)}function Ml(T,F,G,H){const k=T.opaque,rt=T.transmissive,gt=T.transparent;p.setupLightsView(G),tt===!0&&it.setGlobalState(x.clippingPlanes,G),H&&ut.viewport(P.copy(H)),k.length>0&&Ar(k,F,G),rt.length>0&&Ar(rt,F,G),gt.length>0&&Ar(gt,F,G),ut.buffers.depth.setTest(!0),ut.buffers.depth.setMask(!0),ut.buffers.color.setMask(!0),ut.setPolygonOffset(!1)}function yl(T,F,G,H){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[H.id]===void 0&&(p.state.transmissionRenderTarget[H.id]=new ci(1,1,{generateMipmaps:!0,type:$.has("EXT_color_buffer_half_float")||$.has("EXT_color_buffer_float")?Ls:oi,minFilter:ei,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:te.workingColorSpace}));const rt=p.state.transmissionRenderTarget[H.id],gt=H.viewport||P;rt.setSize(gt.z,gt.w);const Rt=x.getRenderTarget();x.setRenderTarget(rt),x.getClearColor(O),W=x.getClearAlpha(),W<1&&x.setClearColor(16777215,.5),x.clear(),Y&&Ot.render(G);const Ct=x.toneMapping;x.toneMapping=Ei;const Gt=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),p.setupLightsView(H),tt===!0&&it.setGlobalState(x.clippingPlanes,H),Ar(T,G,H),A.updateMultisampleRenderTarget(rt),A.updateRenderTargetMipmap(rt),$.has("WEBGL_multisampled_render_to_texture")===!1){let jt=!1;for(let Pt=0,ie=F.length;Pt<ie;Pt++){const be=F[Pt],_e=be.object,Qe=be.geometry,ae=be.material,It=be.group;if(ae.side===Ue&&_e.layers.test(H.layers)){const jn=ae.side;ae.side=Je,ae.needsUpdate=!0,Sl(_e,G,H,Qe,ae,It),ae.side=jn,ae.needsUpdate=!0,jt=!0}}jt===!0&&(A.updateMultisampleRenderTarget(rt),A.updateRenderTargetMipmap(rt))}x.setRenderTarget(Rt),x.setClearColor(O,W),Gt!==void 0&&(H.viewport=Gt),x.toneMapping=Ct}function Ar(T,F,G){const H=F.isScene===!0?F.overrideMaterial:null;for(let k=0,rt=T.length;k<rt;k++){const gt=T[k],Rt=gt.object,Ct=gt.geometry,Gt=H===null?gt.material:H,jt=gt.group;Rt.layers.test(G.layers)&&Sl(Rt,F,G,Ct,Gt,jt)}}function Sl(T,F,G,H,k,rt){T.onBeforeRender(x,F,G,H,k,rt),T.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),k.onBeforeRender(x,F,G,H,T,rt),k.transparent===!0&&k.side===Ue&&k.forceSinglePass===!1?(k.side=Je,k.needsUpdate=!0,x.renderBufferDirect(G,F,H,k,T,rt),k.side=ai,k.needsUpdate=!0,x.renderBufferDirect(G,F,H,k,T,rt),k.side=Ue):x.renderBufferDirect(G,F,H,k,T,rt),T.onAfterRender(x,F,G,H,k,rt)}function Rr(T,F,G){F.isScene!==!0&&(F=$t);const H=vt.get(T),k=p.state.lights,rt=p.state.shadowsArray,gt=k.state.version,Rt=Et.getParameters(T,k.state,rt,F,G),Ct=Et.getProgramCacheKey(Rt);let Gt=H.programs;H.environment=T.isMeshStandardMaterial?F.environment:null,H.fog=F.fog,H.envMap=(T.isMeshStandardMaterial?B:S).get(T.envMap||H.environment),H.envMapRotation=H.environment!==null&&T.envMap===null?F.environmentRotation:T.envMapRotation,Gt===void 0&&(T.addEventListener("dispose",Wt),Gt=new Map,H.programs=Gt);let jt=Gt.get(Ct);if(jt!==void 0){if(H.currentProgram===jt&&H.lightsStateVersion===gt)return wl(T,Rt),jt}else Rt.uniforms=Et.getUniforms(T),T.onBeforeCompile(Rt,x),jt=Et.acquireProgram(Rt,Ct),Gt.set(Ct,jt),H.uniforms=Rt.uniforms;const Pt=H.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Pt.clippingPlanes=it.uniform),wl(T,Rt),H.needsLights=Cf(T),H.lightsStateVersion=gt,H.needsLights&&(Pt.ambientLightColor.value=k.state.ambient,Pt.lightProbe.value=k.state.probe,Pt.directionalLights.value=k.state.directional,Pt.directionalLightShadows.value=k.state.directionalShadow,Pt.spotLights.value=k.state.spot,Pt.spotLightShadows.value=k.state.spotShadow,Pt.rectAreaLights.value=k.state.rectArea,Pt.ltc_1.value=k.state.rectAreaLTC1,Pt.ltc_2.value=k.state.rectAreaLTC2,Pt.pointLights.value=k.state.point,Pt.pointLightShadows.value=k.state.pointShadow,Pt.hemisphereLights.value=k.state.hemi,Pt.directionalShadowMap.value=k.state.directionalShadowMap,Pt.directionalShadowMatrix.value=k.state.directionalShadowMatrix,Pt.spotShadowMap.value=k.state.spotShadowMap,Pt.spotLightMatrix.value=k.state.spotLightMatrix,Pt.spotLightMap.value=k.state.spotLightMap,Pt.pointShadowMap.value=k.state.pointShadowMap,Pt.pointShadowMatrix.value=k.state.pointShadowMatrix),H.currentProgram=jt,H.uniformsList=null,jt}function Tl(T){if(T.uniformsList===null){const F=T.currentProgram.getUniforms();T.uniformsList=ga.seqWithValue(F.seq,T.uniforms)}return T.uniformsList}function wl(T,F){const G=vt.get(T);G.outputColorSpace=F.outputColorSpace,G.batching=F.batching,G.batchingColor=F.batchingColor,G.instancing=F.instancing,G.instancingColor=F.instancingColor,G.instancingMorph=F.instancingMorph,G.skinning=F.skinning,G.morphTargets=F.morphTargets,G.morphNormals=F.morphNormals,G.morphColors=F.morphColors,G.morphTargetsCount=F.morphTargetsCount,G.numClippingPlanes=F.numClippingPlanes,G.numIntersection=F.numClipIntersection,G.vertexAlphas=F.vertexAlphas,G.vertexTangents=F.vertexTangents,G.toneMapping=F.toneMapping}function Af(T,F,G,H,k){F.isScene!==!0&&(F=$t),A.resetTextureUnits();const rt=F.fog,gt=H.isMeshStandardMaterial?F.environment:null,Rt=L===null?x.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:Ze,Ct=(H.isMeshStandardMaterial?B:S).get(H.envMap||gt),Gt=H.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,jt=!!G.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Pt=!!G.morphAttributes.position,ie=!!G.morphAttributes.normal,be=!!G.morphAttributes.color;let _e=Ei;H.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(_e=x.toneMapping);const Qe=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,ae=Qe!==void 0?Qe.length:0,It=vt.get(H),jn=p.state.lights;if(tt===!0&&(xt===!0||T!==y)){const hn=T===y&&H.id===M;it.setState(H,T,hn)}let oe=!1;H.version===It.__version?(It.needsLights&&It.lightsStateVersion!==jn.state.version||It.outputColorSpace!==Rt||k.isBatchedMesh&&It.batching===!1||!k.isBatchedMesh&&It.batching===!0||k.isBatchedMesh&&It.batchingColor===!0&&k.colorTexture===null||k.isBatchedMesh&&It.batchingColor===!1&&k.colorTexture!==null||k.isInstancedMesh&&It.instancing===!1||!k.isInstancedMesh&&It.instancing===!0||k.isSkinnedMesh&&It.skinning===!1||!k.isSkinnedMesh&&It.skinning===!0||k.isInstancedMesh&&It.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&It.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&It.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&It.instancingMorph===!1&&k.morphTexture!==null||It.envMap!==Ct||H.fog===!0&&It.fog!==rt||It.numClippingPlanes!==void 0&&(It.numClippingPlanes!==it.numPlanes||It.numIntersection!==it.numIntersection)||It.vertexAlphas!==Gt||It.vertexTangents!==jt||It.morphTargets!==Pt||It.morphNormals!==ie||It.morphColors!==be||It.toneMapping!==_e||It.morphTargetsCount!==ae)&&(oe=!0):(oe=!0,It.__version=H.version);let Mn=It.currentProgram;oe===!0&&(Mn=Rr(H,F,k));let Ki=!1,tn=!1,ks=!1;const Me=Mn.getUniforms(),Dn=It.uniforms;if(ut.useProgram(Mn.program)&&(Ki=!0,tn=!0,ks=!0),H.id!==M&&(M=H.id,tn=!0),Ki||y!==T){ut.buffers.depth.getReversed()?(st.copy(T.projectionMatrix),kd(st),Od(st),Me.setValue(I,"projectionMatrix",st)):Me.setValue(I,"projectionMatrix",T.projectionMatrix),Me.setValue(I,"viewMatrix",T.matrixWorldInverse);const hi=Me.map.cameraPosition;hi!==void 0&&hi.setValue(I,zt.setFromMatrixPosition(T.matrixWorld)),Mt.logarithmicDepthBuffer&&Me.setValue(I,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&Me.setValue(I,"isOrthographic",T.isOrthographicCamera===!0),y!==T&&(y=T,tn=!0,ks=!0)}if(k.isSkinnedMesh){Me.setOptional(I,k,"bindMatrix"),Me.setOptional(I,k,"bindMatrixInverse");const hn=k.skeleton;hn&&(hn.boneTexture===null&&hn.computeBoneTexture(),Me.setValue(I,"boneTexture",hn.boneTexture,A))}k.isBatchedMesh&&(Me.setOptional(I,k,"batchingTexture"),Me.setValue(I,"batchingTexture",k._matricesTexture,A),Me.setOptional(I,k,"batchingIdTexture"),Me.setValue(I,"batchingIdTexture",k._indirectTexture,A),Me.setOptional(I,k,"batchingColorTexture"),k._colorsTexture!==null&&Me.setValue(I,"batchingColorTexture",k._colorsTexture,A));const Os=G.morphAttributes;if((Os.position!==void 0||Os.normal!==void 0||Os.color!==void 0)&&Bt.update(k,G,Mn),(tn||It.receiveShadow!==k.receiveShadow)&&(It.receiveShadow=k.receiveShadow,Me.setValue(I,"receiveShadow",k.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(Dn.envMap.value=Ct,Dn.flipEnvMap.value=Ct.isCubeTexture&&Ct.isRenderTargetTexture===!1?-1:1),H.isMeshStandardMaterial&&H.envMap===null&&F.environment!==null&&(Dn.envMapIntensity.value=F.environmentIntensity),tn&&(Me.setValue(I,"toneMappingExposure",x.toneMappingExposure),It.needsLights&&Rf(Dn,ks),rt&&H.fog===!0&&dt.refreshFogUniforms(Dn,rt),dt.refreshMaterialUniforms(Dn,H,V,Z,p.state.transmissionRenderTarget[T.id]),ga.upload(I,Tl(It),Dn,A)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(ga.upload(I,Tl(It),Dn,A),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&Me.setValue(I,"center",k.center),Me.setValue(I,"modelViewMatrix",k.modelViewMatrix),Me.setValue(I,"normalMatrix",k.normalMatrix),Me.setValue(I,"modelMatrix",k.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){const hn=H.uniformsGroups;for(let hi=0,ui=hn.length;hi<ui;hi++){const El=hn[hi];U.update(El,Mn),U.bind(El,Mn)}}return Mn}function Rf(T,F){T.ambientLightColor.needsUpdate=F,T.lightProbe.needsUpdate=F,T.directionalLights.needsUpdate=F,T.directionalLightShadows.needsUpdate=F,T.pointLights.needsUpdate=F,T.pointLightShadows.needsUpdate=F,T.spotLights.needsUpdate=F,T.spotLightShadows.needsUpdate=F,T.rectAreaLights.needsUpdate=F,T.hemisphereLights.needsUpdate=F}function Cf(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(T,F,G){vt.get(T.texture).__webglTexture=F,vt.get(T.depthTexture).__webglTexture=G;const H=vt.get(T);H.__hasExternalTextures=!0,H.__autoAllocateDepthBuffer=G===void 0,H.__autoAllocateDepthBuffer||$.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),H.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,F){const G=vt.get(T);G.__webglFramebuffer=F,G.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(T,F=0,G=0){L=T,w=F,E=G;let H=!0,k=null,rt=!1,gt=!1;if(T){const Ct=vt.get(T);if(Ct.__useDefaultFramebuffer!==void 0)ut.bindFramebuffer(I.FRAMEBUFFER,null),H=!1;else if(Ct.__webglFramebuffer===void 0)A.setupRenderTarget(T);else if(Ct.__hasExternalTextures)A.rebindTextures(T,vt.get(T.texture).__webglTexture,vt.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const Pt=T.depthTexture;if(Ct.__boundDepthTexture!==Pt){if(Pt!==null&&vt.has(Pt)&&(T.width!==Pt.image.width||T.height!==Pt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");A.setupDepthRenderbuffer(T)}}const Gt=T.texture;(Gt.isData3DTexture||Gt.isDataArrayTexture||Gt.isCompressedArrayTexture)&&(gt=!0);const jt=vt.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(jt[F])?k=jt[F][G]:k=jt[F],rt=!0):T.samples>0&&A.useMultisampledRTT(T)===!1?k=vt.get(T).__webglMultisampledFramebuffer:Array.isArray(jt)?k=jt[G]:k=jt,P.copy(T.viewport),D.copy(T.scissor),N=T.scissorTest}else P.copy(ht).multiplyScalar(V).floor(),D.copy(Ut).multiplyScalar(V).floor(),N=Vt;if(ut.bindFramebuffer(I.FRAMEBUFFER,k)&&H&&ut.drawBuffers(T,k),ut.viewport(P),ut.scissor(D),ut.setScissorTest(N),rt){const Ct=vt.get(T.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+F,Ct.__webglTexture,G)}else if(gt){const Ct=vt.get(T.texture),Gt=F||0;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,Ct.__webglTexture,G||0,Gt)}M=-1},this.readRenderTargetPixels=function(T,F,G,H,k,rt,gt){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Rt=vt.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&gt!==void 0&&(Rt=Rt[gt]),Rt){ut.bindFramebuffer(I.FRAMEBUFFER,Rt);try{const Ct=T.texture,Gt=Ct.format,jt=Ct.type;if(!Mt.textureFormatReadable(Gt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Mt.textureTypeReadable(jt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=T.width-H&&G>=0&&G<=T.height-k&&I.readPixels(F,G,H,k,Xt.convert(Gt),Xt.convert(jt),rt)}finally{const Ct=L!==null?vt.get(L).__webglFramebuffer:null;ut.bindFramebuffer(I.FRAMEBUFFER,Ct)}}},this.readRenderTargetPixelsAsync=async function(T,F,G,H,k,rt,gt){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Rt=vt.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&gt!==void 0&&(Rt=Rt[gt]),Rt){const Ct=T.texture,Gt=Ct.format,jt=Ct.type;if(!Mt.textureFormatReadable(Gt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Mt.textureTypeReadable(jt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(F>=0&&F<=T.width-H&&G>=0&&G<=T.height-k){ut.bindFramebuffer(I.FRAMEBUFFER,Rt);const Pt=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,Pt),I.bufferData(I.PIXEL_PACK_BUFFER,rt.byteLength,I.STREAM_READ),I.readPixels(F,G,H,k,Xt.convert(Gt),Xt.convert(jt),0);const ie=L!==null?vt.get(L).__webglFramebuffer:null;ut.bindFramebuffer(I.FRAMEBUFFER,ie);const be=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await Fd(I,be,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,Pt),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,rt),I.deleteBuffer(Pt),I.deleteSync(be),rt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(T,F=null,G=0){T.isTexture!==!0&&($s("WebGLRenderer: copyFramebufferToTexture function signature has changed."),F=arguments[0]||null,T=arguments[1]);const H=Math.pow(2,-G),k=Math.floor(T.image.width*H),rt=Math.floor(T.image.height*H),gt=F!==null?F.x:0,Rt=F!==null?F.y:0;A.setTexture2D(T,0),I.copyTexSubImage2D(I.TEXTURE_2D,G,0,0,gt,Rt,k,rt),ut.unbindTexture()},this.copyTextureToTexture=function(T,F,G=null,H=null,k=0){T.isTexture!==!0&&($s("WebGLRenderer: copyTextureToTexture function signature has changed."),H=arguments[0]||null,T=arguments[1],F=arguments[2],k=arguments[3]||0,G=null);let rt,gt,Rt,Ct,Gt,jt,Pt,ie,be;const _e=T.isCompressedTexture?T.mipmaps[k]:T.image;G!==null?(rt=G.max.x-G.min.x,gt=G.max.y-G.min.y,Rt=G.isBox3?G.max.z-G.min.z:1,Ct=G.min.x,Gt=G.min.y,jt=G.isBox3?G.min.z:0):(rt=_e.width,gt=_e.height,Rt=_e.depth||1,Ct=0,Gt=0,jt=0),H!==null?(Pt=H.x,ie=H.y,be=H.z):(Pt=0,ie=0,be=0);const Qe=Xt.convert(F.format),ae=Xt.convert(F.type);let It;F.isData3DTexture?(A.setTexture3D(F,0),It=I.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(A.setTexture2DArray(F,0),It=I.TEXTURE_2D_ARRAY):(A.setTexture2D(F,0),It=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,F.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,F.unpackAlignment);const jn=I.getParameter(I.UNPACK_ROW_LENGTH),oe=I.getParameter(I.UNPACK_IMAGE_HEIGHT),Mn=I.getParameter(I.UNPACK_SKIP_PIXELS),Ki=I.getParameter(I.UNPACK_SKIP_ROWS),tn=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,_e.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,_e.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Ct),I.pixelStorei(I.UNPACK_SKIP_ROWS,Gt),I.pixelStorei(I.UNPACK_SKIP_IMAGES,jt);const ks=T.isDataArrayTexture||T.isData3DTexture,Me=F.isDataArrayTexture||F.isData3DTexture;if(T.isRenderTargetTexture||T.isDepthTexture){const Dn=vt.get(T),Os=vt.get(F),hn=vt.get(Dn.__renderTarget),hi=vt.get(Os.__renderTarget);ut.bindFramebuffer(I.READ_FRAMEBUFFER,hn.__webglFramebuffer),ut.bindFramebuffer(I.DRAW_FRAMEBUFFER,hi.__webglFramebuffer);for(let ui=0;ui<Rt;ui++)ks&&I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,vt.get(T).__webglTexture,k,jt+ui),T.isDepthTexture?(Me&&I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,vt.get(F).__webglTexture,k,be+ui),I.blitFramebuffer(Ct,Gt,rt,gt,Pt,ie,rt,gt,I.DEPTH_BUFFER_BIT,I.NEAREST)):Me?I.copyTexSubImage3D(It,k,Pt,ie,be+ui,Ct,Gt,rt,gt):I.copyTexSubImage2D(It,k,Pt,ie,be+ui,Ct,Gt,rt,gt);ut.bindFramebuffer(I.READ_FRAMEBUFFER,null),ut.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else Me?T.isDataTexture||T.isData3DTexture?I.texSubImage3D(It,k,Pt,ie,be,rt,gt,Rt,Qe,ae,_e.data):F.isCompressedArrayTexture?I.compressedTexSubImage3D(It,k,Pt,ie,be,rt,gt,Rt,Qe,_e.data):I.texSubImage3D(It,k,Pt,ie,be,rt,gt,Rt,Qe,ae,_e):T.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,k,Pt,ie,rt,gt,Qe,ae,_e.data):T.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,k,Pt,ie,_e.width,_e.height,Qe,_e.data):I.texSubImage2D(I.TEXTURE_2D,k,Pt,ie,rt,gt,Qe,ae,_e);I.pixelStorei(I.UNPACK_ROW_LENGTH,jn),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,oe),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Mn),I.pixelStorei(I.UNPACK_SKIP_ROWS,Ki),I.pixelStorei(I.UNPACK_SKIP_IMAGES,tn),k===0&&F.generateMipmaps&&I.generateMipmap(It),ut.unbindTexture()},this.copyTextureToTexture3D=function(T,F,G=null,H=null,k=0){return T.isTexture!==!0&&($s("WebGLRenderer: copyTextureToTexture3D function signature has changed."),G=arguments[0]||null,H=arguments[1]||null,T=arguments[2],F=arguments[3],k=arguments[4]||0),$s('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(T,F,G,H,k)},this.initRenderTarget=function(T){vt.get(T).__webglFramebuffer===void 0&&A.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?A.setTextureCube(T,0):T.isData3DTexture?A.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?A.setTexture2DArray(T,0):A.setTexture2D(T,0),ut.unbindTexture()},this.resetState=function(){w=0,E=0,L=null,ut.reset(),ge.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ni}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=te._getDrawingBufferColorSpace(t),e.unpackColorSpace=te._getUnpackColorSpace()}}class Jc{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new ot(t),this.near=e,this.far=n}clone(){return new Jc(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Zc extends pe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ln,this.environmentIntensity=1,this.environmentRotation=new ln,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Kb{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Sc,this.updateRanges=[],this.version=0,this.uuid=bn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,r=this.stride;i<r;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=bn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=bn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Xe=new R;class Qc{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Xe.fromBufferAttribute(this,e),Xe.applyMatrix4(t),this.setXYZ(e,Xe.x,Xe.y,Xe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Xe.fromBufferAttribute(this,e),Xe.applyNormalMatrix(t),this.setXYZ(e,Xe.x,Xe.y,Xe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Xe.fromBufferAttribute(this,e),Xe.transformDirection(t),this.setXYZ(e,Xe.x,Xe.y,Xe.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=An(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=he(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=he(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=he(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=he(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=he(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=An(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=An(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=An(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=An(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=he(e,this.array),n=he(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=he(e,this.array),n=he(n,this.array),i=he(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=he(e,this.array),n=he(n,this.array),i=he(i,this.array),r=he(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return new fe(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Qc(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Rh=new R,Ch=new re,Ph=new re,Yb=new R,Lh=new Nt,Yr=new R,_o=new Bn,Ih=new Nt,Mo=new Na;class Jb extends at{constructor(t,e){super(t,e),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Pl,this.bindMatrix=new Nt,this.bindMatrixInverse=new Nt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const t=this.geometry;this.boundingBox===null&&(this.boundingBox=new li),this.boundingBox.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,Yr),this.boundingBox.expandByPoint(Yr)}computeBoundingSphere(){const t=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Bn),this.boundingSphere.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,Yr),this.boundingSphere.expandByPoint(Yr)}copy(t,e){return super.copy(t,e),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}raycast(t,e){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),_o.copy(this.boundingSphere),_o.applyMatrix4(i),t.ray.intersectsSphere(_o)!==!1&&(Ih.copy(i).invert(),Mo.copy(t.ray).applyMatrix4(Ih),!(this.boundingBox!==null&&Mo.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(t,e,Mo)))}getVertexPosition(t,e){return super.getVertexPosition(t,e),this.applyBoneTransform(t,e),e}bind(t,e){this.skeleton=t,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const t=new re,e=this.geometry.attributes.skinWeight;for(let n=0,i=e.count;n<i;n++){t.fromBufferAttribute(e,n);const r=1/t.manhattanLength();r!==1/0?t.multiplyScalar(r):t.set(1,0,0,0),e.setXYZW(n,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),this.bindMode===Pl?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===rd?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(t,e){const n=this.skeleton,i=this.geometry;Ch.fromBufferAttribute(i.attributes.skinIndex,t),Ph.fromBufferAttribute(i.attributes.skinWeight,t),Rh.copy(e).applyMatrix4(this.bindMatrix),e.set(0,0,0);for(let r=0;r<4;r++){const a=Ph.getComponent(r);if(a!==0){const o=Ch.getComponent(r);Lh.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),e.addScaledVector(Yb.copy(Rh).applyMatrix4(Lh),a)}}return e.applyMatrix4(this.bindMatrixInverse)}}class Qu extends pe{constructor(){super(),this.isBone=!0,this.type="Bone"}}class $c extends Ne{constructor(t=null,e=1,n=1,i,r,a,o,c,l=je,h=je,u,f){super(null,a,o,c,l,h,i,r,u,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Dh=new Nt,Zb=new Nt;class tl{constructor(t=[],e=[]){this.uuid=bn(),this.bones=t.slice(0),this.boneInverses=e,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const t=this.bones,e=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),e.length===0)this.calculateInverses();else if(t.length!==e.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Nt)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,e=this.bones.length;t<e;t++){const n=new Nt;this.bones[t]&&n.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&n.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const t=this.bones,e=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,a=t.length;r<a;r++){const o=t[r]?t[r].matrixWorld:Zb;Dh.multiplyMatrices(o,e[r]),Dh.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new tl(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(this.bones.length*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);const e=new Float32Array(t*t*4);e.set(this.boneMatrices);const n=new $c(e,t,t,mn,Cn);return n.needsUpdate=!0,this.boneMatrices=e,this.boneTexture=n,this}getBoneByName(t){for(let e=0,n=this.bones.length;e<n;e++){const i=this.bones[e];if(i.name===t)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(t,e){this.uuid=t.uuid;for(let n=0,i=t.bones.length;n<i;n++){const r=t.bones[n];let a=e[r];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),a=new Qu),this.bones.push(a),this.boneInverses.push(new Nt().fromArray(t.boneInverses[n]))}return this.init(),this}toJSON(){const t={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;const e=this.bones,n=this.boneInverses;for(let i=0,r=e.length;i<r;i++){const a=e[i];t.bones.push(a.uuid);const o=n[i];t.boneInverses.push(o.toArray())}return t}}class wc extends fe{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const ls=new Nt,Uh=new Nt,Jr=[],Nh=new li,Qb=new Nt,Vs=new at,Ws=new Bn;class Ve extends at{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new wc(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Qb)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new li),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ls),Nh.copy(t.boundingBox).applyMatrix4(ls),this.boundingBox.union(Nh)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Bn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ls),Ws.copy(t.boundingSphere).applyMatrix4(ls),this.boundingSphere.union(Ws)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(t,e){const n=this.matrixWorld,i=this.count;if(Vs.geometry=this.geometry,Vs.material=this.material,Vs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ws.copy(this.boundingSphere),Ws.applyMatrix4(n),t.ray.intersectsSphere(Ws)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,ls),Uh.multiplyMatrices(n,ls),Vs.matrixWorld=Uh,Vs.raycast(t,Jr);for(let a=0,o=Jr.length;a<o;a++){const c=Jr[a];c.instanceId=r,c.object=this,e.push(c)}Jr.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new wc(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new $c(new Float32Array(i*this.count),i,this.count,Ia,Cn));const r=this.morphTexture.source.data.data;let a=0;for(let l=0;l<n.length;l++)a+=n[l];const o=this.geometry.morphTargetsRelative?1:1-a,c=i*t;r[c]=o,r.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class Oa extends xn{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new ot(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const ya=new R,Sa=new R,Fh=new Nt,js=new Na,Zr=new Bn,yo=new R,kh=new R;class el extends pe{constructor(t=new ve,e=new Oa){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let i=1,r=e.count;i<r;i++)ya.fromBufferAttribute(e,i-1),Sa.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=ya.distanceTo(Sa);t.setAttribute("lineDistance",new se(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Zr.copy(n.boundingSphere),Zr.applyMatrix4(i),Zr.radius+=r,t.ray.intersectsSphere(Zr)===!1)return;Fh.copy(i).invert(),js.copy(t.ray).applyMatrix4(Fh);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){const d=Math.max(0,a.start),b=Math.min(h.count,a.start+a.count);for(let m=d,g=b-1;m<g;m+=l){const p=h.getX(m),v=h.getX(m+1),_=Qr(this,t,js,c,p,v);_&&e.push(_)}if(this.isLineLoop){const m=h.getX(b-1),g=h.getX(d),p=Qr(this,t,js,c,m,g);p&&e.push(p)}}else{const d=Math.max(0,a.start),b=Math.min(f.count,a.start+a.count);for(let m=d,g=b-1;m<g;m+=l){const p=Qr(this,t,js,c,m,m+1);p&&e.push(p)}if(this.isLineLoop){const m=Qr(this,t,js,c,b-1,d);m&&e.push(m)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Qr(s,t,e,n,i,r){const a=s.geometry.attributes.position;if(ya.fromBufferAttribute(a,i),Sa.fromBufferAttribute(a,r),e.distanceSqToSegment(ya,Sa,yo,kh)>n)return;yo.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(yo);if(!(c<t.near||c>t.far))return{distance:c,point:kh.clone().applyMatrix4(s.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:s}}const Oh=new R,zh=new R;class nl extends el{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let i=0,r=e.count;i<r;i+=2)Oh.fromBufferAttribute(e,i),zh.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Oh.distanceTo(zh);t.setAttribute("lineDistance",new se(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class $b extends el{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}}class $u extends xn{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new ot(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Bh=new Nt,Ec=new Na,$r=new Bn,ta=new R;class tf extends pe{constructor(t=new ve,e=new $u){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),$r.copy(n.boundingSphere),$r.applyMatrix4(i),$r.radius+=r,t.ray.intersectsSphere($r)===!1)return;Bh.copy(i).invert(),Ec.copy(t.ray).applyMatrix4(Bh);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,u=n.attributes.position;if(l!==null){const f=Math.max(0,a.start),d=Math.min(l.count,a.start+a.count);for(let b=f,m=d;b<m;b++){const g=l.getX(b);ta.fromBufferAttribute(u,g),Gh(ta,g,c,i,t,e,this)}}else{const f=Math.max(0,a.start),d=Math.min(u.count,a.start+a.count);for(let b=f,m=d;b<m;b++)ta.fromBufferAttribute(u,b),Gh(ta,b,c,i,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Gh(s,t,e,n,i,r,a){const o=Ec.distanceSqToPoint(s);if(o<e){const c=new R;Ec.closestPointToPoint(s,c),c.applyMatrix4(n);const l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}class tx extends Ne{constructor(t,e,n,i,r,a,o,c,l){super(t,e,n,i,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Gn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,i=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(i),e.push(r),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let i=0;const r=n.length;let a;e?a=e:a=t*n[r-1];let o=0,c=r-1,l;for(;o<=c;)if(i=Math.floor(o+(c-o)/2),l=n[i]-a,l<0)o=i+1;else if(l>0)c=i-1;else{c=i;break}if(i=c,n[i]===a)return i/(r-1);const h=n[i],f=n[i+1]-h,d=(a-h)/f;return(i+d)/(r-1)}getTangent(t,e){let i=t-1e-4,r=t+1e-4;i<0&&(i=0),r>1&&(r=1);const a=this.getPoint(i),o=this.getPoint(r),c=e||(a.isVector2?new ct:new R);return c.copy(o).sub(a).normalize(),c}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new R,i=[],r=[],a=[],o=new R,c=new Nt;for(let d=0;d<=t;d++){const b=d/t;i[d]=this.getTangentAt(b,new R)}r[0]=new R,a[0]=new R;let l=Number.MAX_VALUE;const h=Math.abs(i[0].x),u=Math.abs(i[0].y),f=Math.abs(i[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),f<=l&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],o),a[0].crossVectors(i[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(i[d-1],i[d]),o.length()>Number.EPSILON){o.normalize();const b=Math.acos(ze(i[d-1].dot(i[d]),-1,1));r[d].applyMatrix4(c.makeRotationAxis(o,b))}a[d].crossVectors(i[d],r[d])}if(e===!0){let d=Math.acos(ze(r[0].dot(r[t]),-1,1));d/=t,i[0].dot(o.crossVectors(r[0],r[t]))>0&&(d=-d);for(let b=1;b<=t;b++)r[b].applyMatrix4(c.makeRotationAxis(i[b],d*b)),a[b].crossVectors(i[b],r[b])}return{tangents:i,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class il extends Gn{constructor(t=0,e=0,n=1,i=1,r=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(t,e=new ct){const n=e,i=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(a?r=0:r=i),this.aClockwise===!0&&!a&&(r===i?r=-i:r=r-i);const o=this.aStartAngle+t*r;let c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=c-this.aX,d=l-this.aY;c=f*h-d*u+this.aX,l=f*u+d*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class ex extends il{constructor(t,e,n,i,r,a){super(t,e,n,n,i,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function sl(){let s=0,t=0,e=0,n=0;function i(r,a,o,c){s=r,t=o,e=-3*r+3*a-2*o-c,n=2*r-2*a+o+c}return{initCatmullRom:function(r,a,o,c,l){i(a,o,l*(o-r),l*(c-a))},initNonuniformCatmullRom:function(r,a,o,c,l,h,u){let f=(a-r)/l-(o-r)/(l+h)+(o-a)/h,d=(o-a)/h-(c-a)/(h+u)+(c-o)/u;f*=h,d*=h,i(a,o,f,d)},calc:function(r){const a=r*r,o=a*r;return s+t*r+e*a+n*o}}}const ea=new R,So=new sl,To=new sl,wo=new sl;class nx extends Gn{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new R){const n=e,i=this.points,r=i.length,a=(r-(this.closed?0:1))*t;let o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:c===0&&o===r-1&&(o=r-2,c=1);let l,h;this.closed||o>0?l=i[(o-1)%r]:(ea.subVectors(i[0],i[1]).add(i[0]),l=ea);const u=i[o%r],f=i[(o+1)%r];if(this.closed||o+2<r?h=i[(o+2)%r]:(ea.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=ea),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let b=Math.pow(l.distanceToSquared(u),d),m=Math.pow(u.distanceToSquared(f),d),g=Math.pow(f.distanceToSquared(h),d);m<1e-4&&(m=1),b<1e-4&&(b=m),g<1e-4&&(g=m),So.initNonuniformCatmullRom(l.x,u.x,f.x,h.x,b,m,g),To.initNonuniformCatmullRom(l.y,u.y,f.y,h.y,b,m,g),wo.initNonuniformCatmullRom(l.z,u.z,f.z,h.z,b,m,g)}else this.curveType==="catmullrom"&&(So.initCatmullRom(l.x,u.x,f.x,h.x,this.tension),To.initCatmullRom(l.y,u.y,f.y,h.y,this.tension),wo.initCatmullRom(l.z,u.z,f.z,h.z,this.tension));return n.set(So.calc(c),To.calc(c),wo.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new R().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Hh(s,t,e,n,i){const r=(n-t)*.5,a=(i-e)*.5,o=s*s,c=s*o;return(2*e-2*n+r+a)*c+(-3*e+3*n-2*r-a)*o+r*s+e}function ix(s,t){const e=1-s;return e*e*t}function sx(s,t){return 2*(1-s)*s*t}function rx(s,t){return s*s*t}function ar(s,t,e,n){return ix(s,t)+sx(s,e)+rx(s,n)}function ax(s,t){const e=1-s;return e*e*e*t}function ox(s,t){const e=1-s;return 3*e*e*s*t}function cx(s,t){return 3*(1-s)*s*s*t}function lx(s,t){return s*s*s*t}function or(s,t,e,n,i){return ax(s,t)+ox(s,e)+cx(s,n)+lx(s,i)}class ef extends Gn{constructor(t=new ct,e=new ct,n=new ct,i=new ct){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new ct){const n=e,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(or(t,i.x,r.x,a.x,o.x),or(t,i.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class hx extends Gn{constructor(t=new R,e=new R,n=new R,i=new R){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new R){const n=e,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(or(t,i.x,r.x,a.x,o.x),or(t,i.y,r.y,a.y,o.y),or(t,i.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class nf extends Gn{constructor(t=new ct,e=new ct){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ct){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ct){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class ux extends Gn{constructor(t=new R,e=new R){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new R){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new R){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class sf extends Gn{constructor(t=new ct,e=new ct,n=new ct){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new ct){const n=e,i=this.v0,r=this.v1,a=this.v2;return n.set(ar(t,i.x,r.x,a.x),ar(t,i.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class fx extends Gn{constructor(t=new R,e=new R,n=new R){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new R){const n=e,i=this.v0,r=this.v1,a=this.v2;return n.set(ar(t,i.x,r.x,a.x),ar(t,i.y,r.y,a.y),ar(t,i.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class rf extends Gn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ct){const n=e,i=this.points,r=(i.length-1)*t,a=Math.floor(r),o=r-a,c=i[a===0?a:a-1],l=i[a],h=i[a>i.length-2?i.length-1:a+1],u=i[a>i.length-3?i.length-1:a+2];return n.set(Hh(o,c.x,l.x,h.x,u.x),Hh(o,c.y,l.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new ct().fromArray(i))}return this}}var Ac=Object.freeze({__proto__:null,ArcCurve:ex,CatmullRomCurve3:nx,CubicBezierCurve:ef,CubicBezierCurve3:hx,EllipseCurve:il,LineCurve:nf,LineCurve3:ux,QuadraticBezierCurve:sf,QuadraticBezierCurve3:fx,SplineCurve:rf});class dx extends Gn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Ac[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),i=this.getCurveLengths();let r=0;for(;r<i.length;){if(i[r]>=n){const a=i[r]-n,o=this.curves[r],c=o.getLength(),l=c===0?0:1-a/c;return o.getPointAt(l,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let i=0,r=this.curves;i<r.length;i++){const a=r[i],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,c=a.getPoints(o);for(let l=0;l<c.length;l++){const h=c[l];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(new Ac[i.type]().fromJSON(i))}return this}}class Vh extends dx{constructor(t){super(),this.type="Path",this.currentPoint=new ct,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new nf(this.currentPoint.clone(),new ct(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){const r=new sf(this.currentPoint.clone(),new ct(t,e),new ct(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,r,a){const o=new ef(this.currentPoint.clone(),new ct(t,e),new ct(n,i),new ct(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new rf(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,r,a){const o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+o,e+c,n,i,r,a),this}absarc(t,e,n,i,r,a){return this.absellipse(t,e,n,n,i,r,a),this}ellipse(t,e,n,i,r,a,o,c){const l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,n,i,r,a,o,c),this}absellipse(t,e,n,i,r,a,o,c){const l=new il(t,e,n,i,r,a,o,c);if(this.curves.length>0){const u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);const h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class za extends ve{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);const r=[],a=[],o=[],c=[],l=new R,h=new ct;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let u=0,f=3;u<=e;u++,f+=3){const d=n+u/e*i;l.x=t*Math.cos(d),l.y=t*Math.sin(d),a.push(l.x,l.y,l.z),o.push(0,0,1),h.x=(a[f]/t+1)/2,h.y=(a[f+1]/t+1)/2,c.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new se(a,3)),this.setAttribute("normal",new se(o,3)),this.setAttribute("uv",new se(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new za(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Se extends ve{constructor(t=1,e=1,n=1,i=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};const l=this;i=Math.floor(i),r=Math.floor(r);const h=[],u=[],f=[],d=[];let b=0;const m=[],g=n/2;let p=0;v(),a===!1&&(t>0&&_(!0),e>0&&_(!1)),this.setIndex(h),this.setAttribute("position",new se(u,3)),this.setAttribute("normal",new se(f,3)),this.setAttribute("uv",new se(d,2));function v(){const x=new R,C=new R;let w=0;const E=(e-t)/n;for(let L=0;L<=r;L++){const M=[],y=L/r,P=y*(e-t)+t;for(let D=0;D<=i;D++){const N=D/i,O=N*c+o,W=Math.sin(O),z=Math.cos(O);C.x=P*W,C.y=-y*n+g,C.z=P*z,u.push(C.x,C.y,C.z),x.set(W,E,z).normalize(),f.push(x.x,x.y,x.z),d.push(N,1-y),M.push(b++)}m.push(M)}for(let L=0;L<i;L++)for(let M=0;M<r;M++){const y=m[M][L],P=m[M+1][L],D=m[M+1][L+1],N=m[M][L+1];(t>0||M!==0)&&(h.push(y,P,N),w+=3),(e>0||M!==r-1)&&(h.push(P,D,N),w+=3)}l.addGroup(p,w,0),p+=w}function _(x){const C=b,w=new ct,E=new R;let L=0;const M=x===!0?t:e,y=x===!0?1:-1;for(let D=1;D<=i;D++)u.push(0,g*y,0),f.push(0,y,0),d.push(.5,.5),b++;const P=b;for(let D=0;D<=i;D++){const O=D/i*c+o,W=Math.cos(O),z=Math.sin(O);E.x=M*z,E.y=g*y,E.z=M*W,u.push(E.x,E.y,E.z),f.push(0,y,0),w.x=W*.5+.5,w.y=z*.5*y+.5,d.push(w.x,w.y),b++}for(let D=0;D<i;D++){const N=C+D,O=P+D;x===!0?h.push(O,O+1,N):h.push(O+1,O,N),L+=3}l.addGroup(p,L,x===!0?1:2),p+=L}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Se(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class vn extends Se{constructor(t=1,e=1,n=32,i=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,i,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new vn(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class rl extends ve{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};const r=[],a=[];o(i),l(n),h(),this.setAttribute("position",new se(r,3)),this.setAttribute("normal",new se(r.slice(),3)),this.setAttribute("uv",new se(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(v){const _=new R,x=new R,C=new R;for(let w=0;w<e.length;w+=3)d(e[w+0],_),d(e[w+1],x),d(e[w+2],C),c(_,x,C,v)}function c(v,_,x,C){const w=C+1,E=[];for(let L=0;L<=w;L++){E[L]=[];const M=v.clone().lerp(x,L/w),y=_.clone().lerp(x,L/w),P=w-L;for(let D=0;D<=P;D++)D===0&&L===w?E[L][D]=M:E[L][D]=M.clone().lerp(y,D/P)}for(let L=0;L<w;L++)for(let M=0;M<2*(w-L)-1;M++){const y=Math.floor(M/2);M%2===0?(f(E[L][y+1]),f(E[L+1][y]),f(E[L][y])):(f(E[L][y+1]),f(E[L+1][y+1]),f(E[L+1][y]))}}function l(v){const _=new R;for(let x=0;x<r.length;x+=3)_.x=r[x+0],_.y=r[x+1],_.z=r[x+2],_.normalize().multiplyScalar(v),r[x+0]=_.x,r[x+1]=_.y,r[x+2]=_.z}function h(){const v=new R;for(let _=0;_<r.length;_+=3){v.x=r[_+0],v.y=r[_+1],v.z=r[_+2];const x=g(v)/2/Math.PI+.5,C=p(v)/Math.PI+.5;a.push(x,1-C)}b(),u()}function u(){for(let v=0;v<a.length;v+=6){const _=a[v+0],x=a[v+2],C=a[v+4],w=Math.max(_,x,C),E=Math.min(_,x,C);w>.9&&E<.1&&(_<.2&&(a[v+0]+=1),x<.2&&(a[v+2]+=1),C<.2&&(a[v+4]+=1))}}function f(v){r.push(v.x,v.y,v.z)}function d(v,_){const x=v*3;_.x=t[x+0],_.y=t[x+1],_.z=t[x+2]}function b(){const v=new R,_=new R,x=new R,C=new R,w=new ct,E=new ct,L=new ct;for(let M=0,y=0;M<r.length;M+=9,y+=6){v.set(r[M+0],r[M+1],r[M+2]),_.set(r[M+3],r[M+4],r[M+5]),x.set(r[M+6],r[M+7],r[M+8]),w.set(a[y+0],a[y+1]),E.set(a[y+2],a[y+3]),L.set(a[y+4],a[y+5]),C.copy(v).add(_).add(x).divideScalar(3);const P=g(C);m(w,y+0,v,P),m(E,y+2,_,P),m(L,y+4,x,P)}}function m(v,_,x,C){C<0&&v.x===1&&(a[_]=v.x-1),x.x===0&&x.z===0&&(a[_]=C/2/Math.PI+.5)}function g(v){return Math.atan2(v.z,-v.x)}function p(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new rl(t.vertices,t.indices,t.radius,t.details)}}class af extends Vh{constructor(t){super(t),this.uuid=bn(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(new Vh().fromJSON(i))}return this}}const px={triangulate:function(s,t,e=2){const n=t&&t.length,i=n?t[0]*e:s.length;let r=of(s,0,i,e,!0);const a=[];if(!r||r.next===r.prev)return a;let o,c,l,h,u,f,d;if(n&&(r=vx(s,t,r,e)),s.length>80*e){o=l=s[0],c=h=s[1];for(let b=e;b<i;b+=e)u=s[b],f=s[b+1],u<o&&(o=u),f<c&&(c=f),u>l&&(l=u),f>h&&(h=f);d=Math.max(l-o,h-c),d=d!==0?32767/d:0}return vr(r,a,e,o,c,d,0),a}};function of(s,t,e,n,i){let r,a;if(i===Px(s,t,e,n)>0)for(r=t;r<e;r+=n)a=Wh(r,s[r],s[r+1],a);else for(r=e-n;r>=t;r-=n)a=Wh(r,s[r],s[r+1],a);return a&&Ba(a,a.next)&&(Mr(a),a=a.next),a}function qi(s,t){if(!s)return s;t||(t=s);let e=s,n;do if(n=!1,!e.steiner&&(Ba(e,e.next)||we(e.prev,e,e.next)===0)){if(Mr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function vr(s,t,e,n,i,r,a){if(!s)return;!a&&r&&Tx(s,n,i,r);let o=s,c,l;for(;s.prev!==s.next;){if(c=s.prev,l=s.next,r?gx(s,n,i,r):mx(s)){t.push(c.i/e|0),t.push(s.i/e|0),t.push(l.i/e|0),Mr(s),s=l.next,o=l.next;continue}if(s=l,s===o){a?a===1?(s=bx(qi(s),t,e),vr(s,t,e,n,i,r,2)):a===2&&xx(s,t,e,n,i,r):vr(qi(s),t,e,n,i,r,1);break}}}function mx(s){const t=s.prev,e=s,n=s.next;if(we(t,e,n)>=0)return!1;const i=t.x,r=e.x,a=n.x,o=t.y,c=e.y,l=n.y,h=i<r?i<a?i:a:r<a?r:a,u=o<c?o<l?o:l:c<l?c:l,f=i>r?i>a?i:a:r>a?r:a,d=o>c?o>l?o:l:c>l?c:l;let b=n.next;for(;b!==t;){if(b.x>=h&&b.x<=f&&b.y>=u&&b.y<=d&&ps(i,o,r,c,a,l,b.x,b.y)&&we(b.prev,b,b.next)>=0)return!1;b=b.next}return!0}function gx(s,t,e,n){const i=s.prev,r=s,a=s.next;if(we(i,r,a)>=0)return!1;const o=i.x,c=r.x,l=a.x,h=i.y,u=r.y,f=a.y,d=o<c?o<l?o:l:c<l?c:l,b=h<u?h<f?h:f:u<f?u:f,m=o>c?o>l?o:l:c>l?c:l,g=h>u?h>f?h:f:u>f?u:f,p=Rc(d,b,t,e,n),v=Rc(m,g,t,e,n);let _=s.prevZ,x=s.nextZ;for(;_&&_.z>=p&&x&&x.z<=v;){if(_.x>=d&&_.x<=m&&_.y>=b&&_.y<=g&&_!==i&&_!==a&&ps(o,h,c,u,l,f,_.x,_.y)&&we(_.prev,_,_.next)>=0||(_=_.prevZ,x.x>=d&&x.x<=m&&x.y>=b&&x.y<=g&&x!==i&&x!==a&&ps(o,h,c,u,l,f,x.x,x.y)&&we(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;_&&_.z>=p;){if(_.x>=d&&_.x<=m&&_.y>=b&&_.y<=g&&_!==i&&_!==a&&ps(o,h,c,u,l,f,_.x,_.y)&&we(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;x&&x.z<=v;){if(x.x>=d&&x.x<=m&&x.y>=b&&x.y<=g&&x!==i&&x!==a&&ps(o,h,c,u,l,f,x.x,x.y)&&we(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function bx(s,t,e){let n=s;do{const i=n.prev,r=n.next.next;!Ba(i,r)&&cf(i,n,n.next,r)&&_r(i,r)&&_r(r,i)&&(t.push(i.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),Mr(n),Mr(n.next),n=s=r),n=n.next}while(n!==s);return qi(n)}function xx(s,t,e,n,i,r){let a=s;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Ax(a,o)){let c=lf(a,o);a=qi(a,a.next),c=qi(c,c.next),vr(a,t,e,n,i,r,0),vr(c,t,e,n,i,r,0);return}o=o.next}a=a.next}while(a!==s)}function vx(s,t,e,n){const i=[];let r,a,o,c,l;for(r=0,a=t.length;r<a;r++)o=t[r]*n,c=r<a-1?t[r+1]*n:s.length,l=of(s,o,c,n,!1),l===l.next&&(l.steiner=!0),i.push(Ex(l));for(i.sort(_x),r=0;r<i.length;r++)e=Mx(i[r],e);return e}function _x(s,t){return s.x-t.x}function Mx(s,t){const e=yx(s,t);if(!e)return t;const n=lf(e,s);return qi(n,n.next),qi(e,e.next)}function yx(s,t){let e=t,n=-1/0,i;const r=s.x,a=s.y;do{if(a<=e.y&&a>=e.next.y&&e.next.y!==e.y){const f=e.x+(a-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=r&&f>n&&(n=f,i=e.x<e.next.x?e:e.next,f===r))return i}e=e.next}while(e!==t);if(!i)return null;const o=i,c=i.x,l=i.y;let h=1/0,u;e=i;do r>=e.x&&e.x>=c&&r!==e.x&&ps(a<l?r:n,a,c,l,a<l?n:r,a,e.x,e.y)&&(u=Math.abs(a-e.y)/(r-e.x),_r(e,s)&&(u<h||u===h&&(e.x>i.x||e.x===i.x&&Sx(i,e)))&&(i=e,h=u)),e=e.next;while(e!==o);return i}function Sx(s,t){return we(s.prev,s,t.prev)<0&&we(t.next,s,s.next)<0}function Tx(s,t,e,n){let i=s;do i.z===0&&(i.z=Rc(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,wx(i)}function wx(s){let t,e,n,i,r,a,o,c,l=1;do{for(e=s,s=null,r=null,a=0;e;){for(a++,n=e,o=0,t=0;t<l&&(o++,n=n.nextZ,!!n);t++);for(c=l;o>0||c>0&&n;)o!==0&&(c===0||!n||e.z<=n.z)?(i=e,e=e.nextZ,o--):(i=n,n=n.nextZ,c--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;e=n}r.nextZ=null,l*=2}while(a>1);return s}function Rc(s,t,e,n,i){return s=(s-e)*i|0,t=(t-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,s|t<<1}function Ex(s){let t=s,e=s;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==s);return e}function ps(s,t,e,n,i,r,a,o){return(i-a)*(t-o)>=(s-a)*(r-o)&&(s-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(i-a)*(n-o)}function Ax(s,t){return s.next.i!==t.i&&s.prev.i!==t.i&&!Rx(s,t)&&(_r(s,t)&&_r(t,s)&&Cx(s,t)&&(we(s.prev,s,t.prev)||we(s,t.prev,t))||Ba(s,t)&&we(s.prev,s,s.next)>0&&we(t.prev,t,t.next)>0)}function we(s,t,e){return(t.y-s.y)*(e.x-t.x)-(t.x-s.x)*(e.y-t.y)}function Ba(s,t){return s.x===t.x&&s.y===t.y}function cf(s,t,e,n){const i=ia(we(s,t,e)),r=ia(we(s,t,n)),a=ia(we(e,n,s)),o=ia(we(e,n,t));return!!(i!==r&&a!==o||i===0&&na(s,e,t)||r===0&&na(s,n,t)||a===0&&na(e,s,n)||o===0&&na(e,t,n))}function na(s,t,e){return t.x<=Math.max(s.x,e.x)&&t.x>=Math.min(s.x,e.x)&&t.y<=Math.max(s.y,e.y)&&t.y>=Math.min(s.y,e.y)}function ia(s){return s>0?1:s<0?-1:0}function Rx(s,t){let e=s;do{if(e.i!==s.i&&e.next.i!==s.i&&e.i!==t.i&&e.next.i!==t.i&&cf(e,e.next,s,t))return!0;e=e.next}while(e!==s);return!1}function _r(s,t){return we(s.prev,s,s.next)<0?we(s,t,s.next)>=0&&we(s,s.prev,t)>=0:we(s,t,s.prev)<0||we(s,s.next,t)<0}function Cx(s,t){let e=s,n=!1;const i=(s.x+t.x)/2,r=(s.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&i<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==s);return n}function lf(s,t){const e=new Cc(s.i,s.x,s.y),n=new Cc(t.i,t.x,t.y),i=s.next,r=t.prev;return s.next=t,t.prev=s,e.next=i,i.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Wh(s,t,e,n){const i=new Cc(s,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Mr(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function Cc(s,t,e){this.i=s,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Px(s,t,e,n){let i=0;for(let r=t,a=e-n;r<e;r+=n)i+=(s[a]-s[r])*(s[r+1]+s[a+1]),a=r;return i}class cr{static area(t){const e=t.length;let n=0;for(let i=e-1,r=0;r<e;i=r++)n+=t[i].x*t[r].y-t[r].x*t[i].y;return n*.5}static isClockWise(t){return cr.area(t)<0}static triangulateShape(t,e){const n=[],i=[],r=[];jh(t),qh(n,t);let a=t.length;e.forEach(jh);for(let c=0;c<e.length;c++)i.push(a),a+=e[c].length,qh(n,e[c]);const o=px.triangulate(n,i);for(let c=0;c<o.length;c+=3)r.push(o.slice(c,c+3));return r}}function jh(s){const t=s.length;t>2&&s[t-1].equals(s[0])&&s.pop()}function qh(s,t){for(let e=0;e<t.length;e++)s.push(t[e].x),s.push(t[e].y)}class al extends ve{constructor(t=new af([new ct(.5,.5),new ct(-.5,.5),new ct(-.5,-.5),new ct(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,i=[],r=[];for(let o=0,c=t.length;o<c;o++){const l=t[o];a(l)}this.setAttribute("position",new se(i,3)),this.setAttribute("uv",new se(r,2)),this.computeVertexNormals();function a(o){const c=[],l=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1;let f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,b=e.bevelSize!==void 0?e.bevelSize:d-.1,m=e.bevelOffset!==void 0?e.bevelOffset:0,g=e.bevelSegments!==void 0?e.bevelSegments:3;const p=e.extrudePath,v=e.UVGenerator!==void 0?e.UVGenerator:Lx;let _,x=!1,C,w,E,L;p&&(_=p.getSpacedPoints(h),x=!0,f=!1,C=p.computeFrenetFrames(h,!1),w=new R,E=new R,L=new R),f||(g=0,d=0,b=0,m=0);const M=o.extractPoints(l);let y=M.shape;const P=M.holes;if(!cr.isClockWise(y)){y=y.reverse();for(let Y=0,nt=P.length;Y<nt;Y++){const I=P[Y];cr.isClockWise(I)&&(P[Y]=I.reverse())}}const N=cr.triangulateShape(y,P),O=y;for(let Y=0,nt=P.length;Y<nt;Y++){const I=P[Y];y=y.concat(I)}function W(Y,nt,I){return nt||console.error("THREE.ExtrudeGeometry: vec does not exist"),Y.clone().addScaledVector(nt,I)}const z=y.length,Z=N.length;function V(Y,nt,I){let Tt,$,Mt;const ut=Y.x-nt.x,kt=Y.y-nt.y,vt=I.x-Y.x,A=I.y-Y.y,S=ut*ut+kt*kt,B=ut*A-kt*vt;if(Math.abs(B)>Number.EPSILON){const X=Math.sqrt(S),Q=Math.sqrt(vt*vt+A*A),K=nt.x-kt/X,Et=nt.y+ut/X,dt=I.x-A/Q,_t=I.y+vt/Q,Qt=((dt-K)*A-(_t-Et)*vt)/(ut*A-kt*vt);Tt=K+ut*Qt-Y.x,$=Et+kt*Qt-Y.y;const it=Tt*Tt+$*$;if(it<=2)return new ct(Tt,$);Mt=Math.sqrt(it/2)}else{let X=!1;ut>Number.EPSILON?vt>Number.EPSILON&&(X=!0):ut<-Number.EPSILON?vt<-Number.EPSILON&&(X=!0):Math.sign(kt)===Math.sign(A)&&(X=!0),X?(Tt=-kt,$=ut,Mt=Math.sqrt(S)):(Tt=ut,$=kt,Mt=Math.sqrt(S/2))}return new ct(Tt/Mt,$/Mt)}const et=[];for(let Y=0,nt=O.length,I=nt-1,Tt=Y+1;Y<nt;Y++,I++,Tt++)I===nt&&(I=0),Tt===nt&&(Tt=0),et[Y]=V(O[Y],O[I],O[Tt]);const lt=[];let ht,Ut=et.concat();for(let Y=0,nt=P.length;Y<nt;Y++){const I=P[Y];ht=[];for(let Tt=0,$=I.length,Mt=$-1,ut=Tt+1;Tt<$;Tt++,Mt++,ut++)Mt===$&&(Mt=0),ut===$&&(ut=0),ht[Tt]=V(I[Tt],I[Mt],I[ut]);lt.push(ht),Ut=Ut.concat(ht)}for(let Y=0;Y<g;Y++){const nt=Y/g,I=d*Math.cos(nt*Math.PI/2),Tt=b*Math.sin(nt*Math.PI/2)+m;for(let $=0,Mt=O.length;$<Mt;$++){const ut=W(O[$],et[$],Tt);st(ut.x,ut.y,-I)}for(let $=0,Mt=P.length;$<Mt;$++){const ut=P[$];ht=lt[$];for(let kt=0,vt=ut.length;kt<vt;kt++){const A=W(ut[kt],ht[kt],Tt);st(A.x,A.y,-I)}}}const Vt=b+m;for(let Y=0;Y<z;Y++){const nt=f?W(y[Y],Ut[Y],Vt):y[Y];x?(E.copy(C.normals[0]).multiplyScalar(nt.x),w.copy(C.binormals[0]).multiplyScalar(nt.y),L.copy(_[0]).add(E).add(w),st(L.x,L.y,L.z)):st(nt.x,nt.y,0)}for(let Y=1;Y<=h;Y++)for(let nt=0;nt<z;nt++){const I=f?W(y[nt],Ut[nt],Vt):y[nt];x?(E.copy(C.normals[Y]).multiplyScalar(I.x),w.copy(C.binormals[Y]).multiplyScalar(I.y),L.copy(_[Y]).add(E).add(w),st(L.x,L.y,L.z)):st(I.x,I.y,u/h*Y)}for(let Y=g-1;Y>=0;Y--){const nt=Y/g,I=d*Math.cos(nt*Math.PI/2),Tt=b*Math.sin(nt*Math.PI/2)+m;for(let $=0,Mt=O.length;$<Mt;$++){const ut=W(O[$],et[$],Tt);st(ut.x,ut.y,u+I)}for(let $=0,Mt=P.length;$<Mt;$++){const ut=P[$];ht=lt[$];for(let kt=0,vt=ut.length;kt<vt;kt++){const A=W(ut[kt],ht[kt],Tt);x?st(A.x,A.y+_[h-1].y,_[h-1].x+I):st(A.x,A.y,u+I)}}}q(),tt();function q(){const Y=i.length/3;if(f){let nt=0,I=z*nt;for(let Tt=0;Tt<Z;Tt++){const $=N[Tt];wt($[2]+I,$[1]+I,$[0]+I)}nt=h+g*2,I=z*nt;for(let Tt=0;Tt<Z;Tt++){const $=N[Tt];wt($[0]+I,$[1]+I,$[2]+I)}}else{for(let nt=0;nt<Z;nt++){const I=N[nt];wt(I[2],I[1],I[0])}for(let nt=0;nt<Z;nt++){const I=N[nt];wt(I[0]+z*h,I[1]+z*h,I[2]+z*h)}}n.addGroup(Y,i.length/3-Y,0)}function tt(){const Y=i.length/3;let nt=0;xt(O,nt),nt+=O.length;for(let I=0,Tt=P.length;I<Tt;I++){const $=P[I];xt($,nt),nt+=$.length}n.addGroup(Y,i.length/3-Y,1)}function xt(Y,nt){let I=Y.length;for(;--I>=0;){const Tt=I;let $=I-1;$<0&&($=Y.length-1);for(let Mt=0,ut=h+g*2;Mt<ut;Mt++){const kt=z*Mt,vt=z*(Mt+1),A=nt+Tt+kt,S=nt+$+kt,B=nt+$+vt,X=nt+Tt+vt;zt(A,S,B,X)}}}function st(Y,nt,I){c.push(Y),c.push(nt),c.push(I)}function wt(Y,nt,I){Ft(Y),Ft(nt),Ft(I);const Tt=i.length/3,$=v.generateTopUV(n,i,Tt-3,Tt-2,Tt-1);$t($[0]),$t($[1]),$t($[2])}function zt(Y,nt,I,Tt){Ft(Y),Ft(nt),Ft(Tt),Ft(nt),Ft(I),Ft(Tt);const $=i.length/3,Mt=v.generateSideWallUV(n,i,$-6,$-3,$-2,$-1);$t(Mt[0]),$t(Mt[1]),$t(Mt[3]),$t(Mt[1]),$t(Mt[2]),$t(Mt[3])}function Ft(Y){i.push(c[Y*3+0]),i.push(c[Y*3+1]),i.push(c[Y*3+2])}function $t(Y){r.push(Y.x),r.push(Y.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Ix(e,n,t)}static fromJSON(t,e){const n=[];for(let r=0,a=t.shapes.length;r<a;r++){const o=e[t.shapes[r]];n.push(o)}const i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new Ac[i.type]().fromJSON(i)),new al(n,t.options)}}const Lx={generateTopUV:function(s,t,e,n,i){const r=t[e*3],a=t[e*3+1],o=t[n*3],c=t[n*3+1],l=t[i*3],h=t[i*3+1];return[new ct(r,a),new ct(o,c),new ct(l,h)]},generateSideWallUV:function(s,t,e,n,i,r){const a=t[e*3],o=t[e*3+1],c=t[e*3+2],l=t[n*3],h=t[n*3+1],u=t[n*3+2],f=t[i*3],d=t[i*3+1],b=t[i*3+2],m=t[r*3],g=t[r*3+1],p=t[r*3+2];return Math.abs(o-h)<Math.abs(a-l)?[new ct(a,1-c),new ct(l,1-u),new ct(f,1-b),new ct(m,1-p)]:[new ct(o,1-c),new ct(h,1-u),new ct(d,1-b),new ct(g,1-p)]}};function Ix(s,t,e){if(e.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){const r=s[n];e.shapes.push(r.uuid)}else e.shapes.push(s.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class ol extends rl{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new ol(t.radius,t.detail)}}class Ce extends ve{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(a+o,Math.PI);let l=0;const h=[],u=new R,f=new R,d=[],b=[],m=[],g=[];for(let p=0;p<=n;p++){const v=[],_=p/n;let x=0;p===0&&a===0?x=.5/e:p===n&&c===Math.PI&&(x=-.5/e);for(let C=0;C<=e;C++){const w=C/e;u.x=-t*Math.cos(i+w*r)*Math.sin(a+_*o),u.y=t*Math.cos(a+_*o),u.z=t*Math.sin(i+w*r)*Math.sin(a+_*o),b.push(u.x,u.y,u.z),f.copy(u).normalize(),m.push(f.x,f.y,f.z),g.push(w+x,1-_),v.push(l++)}h.push(v)}for(let p=0;p<n;p++)for(let v=0;v<e;v++){const _=h[p][v+1],x=h[p][v],C=h[p+1][v],w=h[p+1][v+1];(p!==0||a>0)&&d.push(_,x,w),(p!==n-1||c<Math.PI)&&d.push(x,C,w)}this.setIndex(d),this.setAttribute("position",new se(b,3)),this.setAttribute("normal",new se(m,3)),this.setAttribute("uv",new se(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ce(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Pn extends ve{constructor(t=1,e=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);const a=[],o=[],c=[],l=[],h=new R,u=new R,f=new R;for(let d=0;d<=n;d++)for(let b=0;b<=i;b++){const m=b/i*r,g=d/n*Math.PI*2;u.x=(t+e*Math.cos(g))*Math.cos(m),u.y=(t+e*Math.cos(g))*Math.sin(m),u.z=e*Math.sin(g),o.push(u.x,u.y,u.z),h.x=t*Math.cos(m),h.y=t*Math.sin(m),f.subVectors(u,h).normalize(),c.push(f.x,f.y,f.z),l.push(b/i),l.push(d/n)}for(let d=1;d<=n;d++)for(let b=1;b<=i;b++){const m=(i+1)*d+b-1,g=(i+1)*(d-1)+b-1,p=(i+1)*(d-1)+b,v=(i+1)*d+b;a.push(m,g,v),a.push(g,p,v)}this.setIndex(a),this.setAttribute("position",new se(o,3)),this.setAttribute("normal",new se(c,3)),this.setAttribute("uv",new se(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Pn(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class cl extends xn{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new ot(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ot(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Da,this.normalScale=new ct(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ln,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Hn extends cl{static get type(){return"MeshPhysicalMaterial"}constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ct(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ze(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ot(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ot(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ot(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class hf extends xn{static get type(){return"MeshToonMaterial"}constructor(t){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.color=new ot(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ot(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Da,this.normalScale=new ct(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.gradientMap=t.gradientMap,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}class ce extends xn{static get type(){return"MeshLambertMaterial"}constructor(t){super(),this.isMeshLambertMaterial=!0,this.color=new ot(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ot(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Da,this.normalScale=new ct(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ln,this.combine=zc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}function sa(s,t,e){return!s||!e&&s.constructor===t?s:typeof t.BYTES_PER_ELEMENT=="number"?new t(s):Array.prototype.slice.call(s)}function Dx(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function Ux(s){function t(i,r){return s[i]-s[r]}const e=s.length,n=new Array(e);for(let i=0;i!==e;++i)n[i]=i;return n.sort(t),n}function Xh(s,t,e){const n=s.length,i=new s.constructor(n);for(let r=0,a=0;a!==n;++r){const o=e[r]*t;for(let c=0;c!==t;++c)i[a++]=s[o+c]}return i}function uf(s,t,e,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(t.push(r.time),e.push.apply(e,a)),r=s[i++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(t.push(r.time),a.toArray(e,e.length)),r=s[i++];while(r!==void 0);else do a=r[n],a!==void 0&&(t.push(r.time),e.push(a)),r=s[i++];while(r!==void 0)}class wr{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){const e=this.parameterPositions;let n=this._cachedIndex,i=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<i)){for(let o=n+2;;){if(i===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=i,i=e[++n],t<i)break t}a=e.length;break e}if(!(t>=r)){const o=e[1];t<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){const o=n+a>>>1;t<e[o]?a=o:n=o+1}if(i=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){const e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i;for(let a=0;a!==i;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Nx extends wr{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ll,endingEnd:Ll}}intervalChanged_(t,e,n){const i=this.parameterPositions;let r=t-2,a=t+1,o=i[r],c=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case Il:r=t,o=2*e-n;break;case Dl:r=i.length-2,o=e+i[r]-i[r+1];break;default:r=t,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Il:a=t,c=2*n-e;break;case Dl:a=1,c=n+i[1]-i[0];break;default:a=t-1,c=e}const l=(n-e)*.5,h=this.valueSize;this._weightPrev=l/(e-o),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,b=(n-e)/(i-e),m=b*b,g=m*b,p=-f*g+2*f*m-f*b,v=(1+f)*g+(-1.5-2*f)*m+(-.5+f)*b+1,_=(-1-d)*g+(1.5+d)*m+.5*b,x=d*g-d*m;for(let C=0;C!==o;++C)r[C]=p*a[h+C]+v*a[l+C]+_*a[c+C]+x*a[u+C];return r}}class Fx extends wr{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,h=(n-e)/(i-e),u=1-h;for(let f=0;f!==o;++f)r[f]=a[l+f]*u+a[c+f]*h;return r}}class kx extends wr{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}}class Vn{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=sa(e,this.TimeBufferType),this.values=sa(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){const e=t.constructor;let n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:sa(t.times,Array),values:sa(t.values,Array)};const i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new kx(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Fx(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Nx(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case gr:e=this.InterpolantFactoryMethodDiscrete;break;case br:e=this.InterpolantFactoryMethodLinear;break;case ja:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return gr;case this.InterpolantFactoryMethodLinear:return br;case this.InterpolantFactoryMethodSmooth:return ja}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){const e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){const e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t}return this}trim(t,e){const n=this.times,i=n.length;let r=0,a=i-1;for(;r!==i&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==i){r>=a&&(a=Math.max(a,1),r=a-1);const o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0;const e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);const n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){const c=n[o];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,c),t=!1;break}if(a!==null&&a>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,c,a),t=!1;break}a=c}if(i!==void 0&&Dx(i))for(let o=0,c=i.length;o!==c;++o){const l=i[o];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,l),t=!1;break}}return t}optimize(){const t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===ja,r=t.length-1;let a=1;for(let o=1;o<r;++o){let c=!1;const l=t[o],h=t[o+1];if(l!==h&&(o!==1||l!==t[0]))if(i)c=!0;else{const u=o*n,f=u-n,d=u+n;for(let b=0;b!==n;++b){const m=e[u+b];if(m!==e[f+b]||m!==e[d+b]){c=!0;break}}}if(c){if(o!==a){t[a]=t[o];const u=o*n,f=a*n;for(let d=0;d!==n;++d)e[f+d]=e[u+d]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,c=a*n,l=0;l!==n;++l)e[c+l]=e[o+l];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){const t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,i}}Vn.prototype.TimeBufferType=Float32Array;Vn.prototype.ValueBufferType=Float32Array;Vn.prototype.DefaultInterpolation=br;class Us extends Vn{constructor(t,e,n){super(t,e,n)}}Us.prototype.ValueTypeName="bool";Us.prototype.ValueBufferType=Array;Us.prototype.DefaultInterpolation=gr;Us.prototype.InterpolantFactoryMethodLinear=void 0;Us.prototype.InterpolantFactoryMethodSmooth=void 0;class ff extends Vn{}ff.prototype.ValueTypeName="color";class Es extends Vn{}Es.prototype.ValueTypeName="number";class Ox extends wr{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-e)/(i-e);let l=t*o;for(let h=l+o;l!==h;l+=4)Ye.slerpFlat(r,0,a,l-o,a,l,c);return r}}class As extends Vn{InterpolantFactoryMethodLinear(t){return new Ox(this.times,this.values,this.getValueSize(),t)}}As.prototype.ValueTypeName="quaternion";As.prototype.InterpolantFactoryMethodSmooth=void 0;class Ns extends Vn{constructor(t,e,n){super(t,e,n)}}Ns.prototype.ValueTypeName="string";Ns.prototype.ValueBufferType=Array;Ns.prototype.DefaultInterpolation=gr;Ns.prototype.InterpolantFactoryMethodLinear=void 0;Ns.prototype.InterpolantFactoryMethodSmooth=void 0;class Rs extends Vn{}Rs.prototype.ValueTypeName="vector";class zx{constructor(t="",e=-1,n=[],i=ad){this.name=t,this.tracks=n,this.duration=e,this.blendMode=i,this.uuid=bn(),this.duration<0&&this.resetDuration()}static parse(t){const e=[],n=t.tracks,i=1/(t.fps||1);for(let a=0,o=n.length;a!==o;++a)e.push(Gx(n[a]).scale(i));const r=new this(t.name,t.duration,e,t.blendMode);return r.uuid=t.uuid,r}static toJSON(t){const e=[],n=t.tracks,i={name:t.name,duration:t.duration,tracks:e,uuid:t.uuid,blendMode:t.blendMode};for(let r=0,a=n.length;r!==a;++r)e.push(Vn.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(t,e,n,i){const r=e.length,a=[];for(let o=0;o<r;o++){let c=[],l=[];c.push((o+r-1)%r,o,(o+1)%r),l.push(0,1,0);const h=Ux(c);c=Xh(c,1,h),l=Xh(l,1,h),!i&&c[0]===0&&(c.push(r),l.push(l[0])),a.push(new Es(".morphTargetInfluences["+e[o].name+"]",c,l).scale(1/n))}return new this(t,-1,a)}static findByName(t,e){let n=t;if(!Array.isArray(t)){const i=t;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===e)return n[i];return null}static CreateClipsFromMorphTargetSequences(t,e,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,c=t.length;o<c;o++){const l=t[o],h=l.name.match(r);if(h&&h.length>1){const u=h[1];let f=i[u];f||(i[u]=f=[]),f.push(l)}}const a=[];for(const o in i)a.push(this.CreateFromMorphTargetSequence(o,i[o],e,n));return a}static parseAnimation(t,e){if(!t)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(u,f,d,b,m){if(d.length!==0){const g=[],p=[];uf(d,g,p,b),g.length!==0&&m.push(new u(f,g,p))}},i=[],r=t.name||"default",a=t.fps||30,o=t.blendMode;let c=t.length||-1;const l=t.hierarchy||[];for(let u=0;u<l.length;u++){const f=l[u].keys;if(!(!f||f.length===0))if(f[0].morphTargets){const d={};let b;for(b=0;b<f.length;b++)if(f[b].morphTargets)for(let m=0;m<f[b].morphTargets.length;m++)d[f[b].morphTargets[m]]=-1;for(const m in d){const g=[],p=[];for(let v=0;v!==f[b].morphTargets.length;++v){const _=f[b];g.push(_.time),p.push(_.morphTarget===m?1:0)}i.push(new Es(".morphTargetInfluence["+m+"]",g,p))}c=d.length*a}else{const d=".bones["+e[u].name+"]";n(Rs,d+".position",f,"pos",i),n(As,d+".quaternion",f,"rot",i),n(Rs,d+".scale",f,"scl",i)}}return i.length===0?null:new this(r,c,i,o)}resetDuration(){const t=this.tracks;let e=0;for(let n=0,i=t.length;n!==i;++n){const r=this.tracks[n];e=Math.max(e,r.times[r.times.length-1])}return this.duration=e,this}trim(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].trim(0,this.duration);return this}validate(){let t=!0;for(let e=0;e<this.tracks.length;e++)t=t&&this.tracks[e].validate();return t}optimize(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].optimize();return this}clone(){const t=[];for(let e=0;e<this.tracks.length;e++)t.push(this.tracks[e].clone());return new this.constructor(this.name,this.duration,t,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function Bx(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Es;case"vector":case"vector2":case"vector3":case"vector4":return Rs;case"color":return ff;case"quaternion":return As;case"bool":case"boolean":return Us;case"string":return Ns}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function Gx(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const t=Bx(s.type);if(s.times===void 0){const e=[],n=[];uf(s.keys,e,n,"value"),s.times=e,s.values=n}return t.parse!==void 0?t.parse(s):new t(s.name,s.times,s.values,s.interpolation)}const yi={enabled:!1,files:{},add:function(s,t){this.enabled!==!1&&(this.files[s]=t)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class Hx{constructor(t,e,n){const i=this;let r=!1,a=0,o=0,c;const l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){o++,r===!1&&i.onStart!==void 0&&i.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,i.onProgress!==void 0&&i.onProgress(h,a,o),a===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){const u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=l.length;u<f;u+=2){const d=l[u],b=l[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return b}return null}}}const Vx=new Hx;class Fs{constructor(t){this.manager=t!==void 0?t:Vx,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(i,r){n.load(t,i,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}Fs.DEFAULT_MATERIAL_NAME="__DEFAULT";const Zn={};class Wx extends Error{constructor(t,e){super(t),this.response=e}}class df extends Fs{constructor(t){super(t)}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=yi.get(t);if(r!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(r),this.manager.itemEnd(t)},0),r;if(Zn[t]!==void 0){Zn[t].push({onLoad:e,onProgress:n,onError:i});return}Zn[t]=[],Zn[t].push({onLoad:e,onProgress:n,onError:i});const a=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,c=this.responseType;fetch(a).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const h=Zn[t],u=l.body.getReader(),f=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),d=f?parseInt(f):0,b=d!==0;let m=0;const g=new ReadableStream({start(p){v();function v(){u.read().then(({done:_,value:x})=>{if(_)p.close();else{m+=x.byteLength;const C=new ProgressEvent("progress",{lengthComputable:b,loaded:m,total:d});for(let w=0,E=h.length;w<E;w++){const L=h[w];L.onProgress&&L.onProgress(C)}p.enqueue(x),v()}},_=>{p.error(_)})}}});return new Response(g)}else throw new Wx(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return l.json();default:if(o===void 0)return l.text();{const u=/charset="?([^;"\s]*)"?/i.exec(o),f=u&&u[1]?u[1].toLowerCase():void 0,d=new TextDecoder(f);return l.arrayBuffer().then(b=>d.decode(b))}}}).then(l=>{yi.add(t,l);const h=Zn[t];delete Zn[t];for(let u=0,f=h.length;u<f;u++){const d=h[u];d.onLoad&&d.onLoad(l)}}).catch(l=>{const h=Zn[t];if(h===void 0)throw this.manager.itemError(t),l;delete Zn[t];for(let u=0,f=h.length;u<f;u++){const d=h[u];d.onError&&d.onError(l)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}}class jx extends Fs{constructor(t){super(t)}load(t,e,n,i){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,a=yi.get(t);if(a!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(a),r.manager.itemEnd(t)},0),a;const o=xr("img");function c(){h(),yi.add(t,this),e&&e(this),r.manager.itemEnd(t)}function l(u){h(),i&&i(u),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(t),o.src=t,o}}class qx extends Fs{constructor(t){super(t)}load(t,e,n,i){const r=new Ne,a=new jx(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(t,function(o){r.image=o,r.needsUpdate=!0,e!==void 0&&e(r)},n,i),r}}class Ga extends pe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new ot(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class pf extends Ga{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(pe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ot(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Eo=new Nt,Kh=new R,Yh=new R;class ll{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ct(512,512),this.map=null,this.mapPass=null,this.matrix=new Nt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Xc,this._frameExtents=new ct(1,1),this._viewportCount=1,this._viewports=[new re(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Kh.setFromMatrixPosition(t.matrixWorld),e.position.copy(Kh),Yh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Yh),e.updateMatrixWorld(),Eo.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Eo),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Eo)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Xx extends ll{constructor(){super(new We(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){const e=this.camera,n=Ts*2*t.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=t.distance||e.far;(n!==e.fov||i!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=i,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class Kx extends Ga{constructor(t,e,n=0,i=Math.PI/3,r=0,a=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(pe.DEFAULT_UP),this.updateMatrix(),this.target=new pe,this.distance=n,this.angle=i,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new Xx}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}const Jh=new Nt,qs=new R,Ao=new R;class Yx extends ll{constructor(){super(new We(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ct(4,2),this._viewportCount=6,this._viewports=[new re(2,1,1,1),new re(0,1,1,1),new re(3,1,1,1),new re(1,1,1,1),new re(3,0,1,1),new re(1,0,1,1)],this._cubeDirections=[new R(1,0,0),new R(-1,0,0),new R(0,0,1),new R(0,0,-1),new R(0,1,0),new R(0,-1,0)],this._cubeUps=[new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,0,1),new R(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,i=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),qs.setFromMatrixPosition(t.matrixWorld),n.position.copy(qs),Ao.copy(n.position),Ao.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Ao),n.updateMatrixWorld(),i.makeTranslation(-qs.x,-qs.y,-qs.z),Jh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Jh)}}class Jx extends Ga{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Yx}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class Zx extends ll{constructor(){super(new Fa(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class hl extends Ga{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(pe.DEFAULT_UP),this.updateMatrix(),this.target=new pe,this.shadow=new Zx}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class lr{static decodeText(t){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(t);let e="";for(let n=0,i=t.length;n<i;n++)e+=String.fromCharCode(t[n]);try{return decodeURIComponent(escape(e))}catch{return e}}static extractUrlBase(t){const e=t.lastIndexOf("/");return e===-1?"./":t.slice(0,e+1)}static resolveURL(t,e){return typeof t!="string"||t===""?"":(/^https?:\/\//i.test(e)&&/^\//.test(t)&&(e=e.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(t)||/^data:.*,.*$/i.test(t)||/^blob:.*$/i.test(t)?t:e+t)}}class Qx extends Fs{constructor(t){super(t),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(t){return this.options=t,this}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,a=yi.get(t);if(a!==void 0){if(r.manager.itemStart(t),a.then){a.then(l=>{e&&e(l),r.manager.itemEnd(t)}).catch(l=>{i&&i(l)});return}return setTimeout(function(){e&&e(a),r.manager.itemEnd(t)},0),a}const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader;const c=fetch(t,o).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){return yi.add(t,l),e&&e(l),r.manager.itemEnd(t),l}).catch(function(l){i&&i(l),yi.remove(t),r.manager.itemError(t),r.manager.itemEnd(t)});yi.add(t,c),r.manager.itemStart(t)}}const ul="\\[\\]\\.:\\/",$x=new RegExp("["+ul+"]","g"),fl="[^"+ul+"]",tv="[^"+ul.replace("\\.","")+"]",ev=/((?:WC+[\/:])*)/.source.replace("WC",fl),nv=/(WCOD+)?/.source.replace("WCOD",tv),iv=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",fl),sv=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",fl),rv=new RegExp("^"+ev+nv+iv+sv+"$"),av=["material","materials","bones","map"];class ov{constructor(t,e,n){const i=n||ue.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(t,e)}bind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}}class ue{constructor(t,e,n){this.path=e,this.parsedPath=n||ue.parseTrackName(e),this.node=ue.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new ue.Composite(t,e,n):new ue(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace($x,"")}static parseTrackName(t){const e=rv.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);const n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);av.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){const n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){const n=function(r){for(let a=0;a<r.length;a++){const o=r[a];if(o.name===e||o.uuid===e)return o;const c=n(o.children);if(c)return c}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node;const e=this.parsedPath,n=e.objectName,i=e.propertyName;let r=e.propertyIndex;if(t||(t=ue.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===l){l=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}const a=t[i];if(a===void 0){const l=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}ue.Composite=ov;ue.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ue.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ue.prototype.GetterByBindingType=[ue.prototype._getValue_direct,ue.prototype._getValue_array,ue.prototype._getValue_arrayElement,ue.prototype._getValue_toArray];ue.prototype.SetterByBindingTypeAndVersioning=[[ue.prototype._setValue_direct,ue.prototype._setValue_direct_setNeedsUpdate,ue.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ue.prototype._setValue_array,ue.prototype._setValue_array_setNeedsUpdate,ue.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ue.prototype._setValue_arrayElement,ue.prototype._setValue_arrayElement_setNeedsUpdate,ue.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ue.prototype._setValue_fromArray,ue.prototype._setValue_fromArray_setNeedsUpdate,ue.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Oc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Oc);const De=1,Si=2,yr=4,Zh=8,hs={x:-402,z:-236},ra=23,Qh=1.25,Ro=13;function cv(s){const t=[],e=(M,y=14,P=0)=>{for(const[D,N]of M)t.push({x:D,z:N,w:y,f:P})};e([[-500,166],[-472,166],[-446,165]],15),e([[-414,160],[-394,142],[-386,116],[-385,70],[-386,20],[-388,-40],[-387,-100],[-384,-160],[-380,-196],[-379,-214]],14);const n=Math.round(Qh*2*Math.PI*ra/3);for(let M=0;M<=n;M++){const y=-(M/n)*Qh*2*Math.PI;t.push({x:hs.x+Math.cos(y)*ra,z:hs.z+Math.sin(y)*ra,w:12,f:yr|De})}e([[-414,-259],[-428,-259],[-442,-259]],12,De),e([[-458,-259],[-474,-259]],12,De|Zh),e([[-494,-259],[-516,-257],[-536,-249],[-552,-232],[-560,-208],[-563,-178],[-572,-146],[-590,-116],[-603,-84],[-602,-50],[-590,-20],[-586,12],[-596,44]],14),e([[-606,74],[-608,100],[-606,124]],12,Si),e([[-598,146],[-582,160],[-556,166],[-528,166]],15);const i=t.length,r=[];for(let M=0;M<i;M++){const y=t[(M-1+i)%i],P=t[M],D=t[(M+1)%i],N=t[(M+2)%i],O=(et,lt)=>Math.pow(Math.hypot(lt.x-et.x,lt.z-et.z),.5)||.001,W=O(y,P),z=W+O(P,D),Z=z+O(D,N),V=Math.max(2,Math.ceil(Math.hypot(D.x-P.x,D.z-P.z)/.5));for(let et=0;et<V;et++){const lt=W+(z-W)*(et/V),ht=(nt,I,Tt,$)=>Tt===$?nt:(($-lt)*nt+(lt-Tt)*I)/($-Tt),Ut=ht(y.x,P.x,0,W),Vt=ht(y.z,P.z,0,W),q=ht(P.x,D.x,W,z),tt=ht(P.z,D.z,W,z),xt=ht(D.x,N.x,z,Z),st=ht(D.z,N.z,z,Z),wt=ht(Ut,q,0,z),zt=ht(Vt,tt,0,z),Ft=ht(q,xt,W,Z),$t=ht(tt,st,W,Z),Y=et/V;r.push({x:ht(wt,Ft,W,z),z:ht(zt,$t,W,z),w:P.w+(D.w-P.w)*Y,f:Y<.5?P.f:D.f})}}const a=[0];for(let M=1;M<r.length;M++)a.push(a[M-1]+Math.hypot(r[M].x-r[M-1].x,r[M].z-r[M-1].z));const o=a[a.length-1]+Math.hypot(r[0].x-r[r.length-1].x,r[0].z-r[r.length-1].z),c=Math.round(o),l=o/c,h={n:c,length:o,x:new Float32Array(c),y:new Float32Array(c),z:new Float32Array(c),tx:new Float32Array(c),tz:new Float32Array(c),w:new Float32Array(c),bank:new Float32Array(c),flags:new Uint8Array(c),tower:{x:hs.x,z:hs.z,y0:0,y1:0,r:ra}};let u=0;for(let M=0;M<c;M++){const y=M*l;for(;u<r.length-1&&a[u+1]<y;)u++;const P=r[u],D=r[(u+1)%r.length],N=(u+1<r.length?a[u+1]:o)-a[u],O=N>0?(y-a[u])/N:0;h.x[M]=P.x+(D.x-P.x)*O,h.z[M]=P.z+(D.z-P.z)*O,h.w[M]=P.w+(D.w-P.w)*O,h.flags[M]=O<.5?P.f:D.f}for(let M=0;M<c;M++){const y=(M-1+c)%c,P=(M+1)%c,D=h.x[P]-h.x[y],N=h.z[P]-h.z[y],O=Math.hypot(D,N)||1;h.tx[M]=D/O,h.tz[M]=N/O}const f=new Float32Array(c);for(let M=0;M<c;M++)f[M]=s(h.x[M],h.z[M])+.35;const d=Co(f,14);let b=-1,m=-1,g=-1,p=-1;for(let M=0;M<c;M++){const y=h.flags[M];y&yr&&(b<0&&(b=M),m=M),y&Zh&&(g<0&&(g=M),p=M)}for(let M=0;M<c;M++)h.y[M]=d[M];for(let M=0;M<4;M++)for(let y=0;y<2*c;y++){const P=y%c,D=(P-1+c)%c,N=h.y[P]-h.y[D];Math.abs(N)>.13&&(h.y[P]=h.y[D]+Math.sign(N)*.13)}h.y.set(Co(h.y,3));const v=h.y[b];h.tower.y0=Math.min(s(hs.x,hs.z),v-.4),h.tower.y1=v+Ro;for(let M=b;M<=m;M++)h.y[M]=v+Ro*((M-b)/(m-b));const _=v+Ro,x=g-1;for(let M=m+1;M<=x;M++){const y=(M-m)/(x-m);h.y[M]=_+.6*y+1.6*Math.max(0,(y-.7)/.3)**2}const C=Math.min(c-1,p+8),w=h.y[C],E=h.y[x];for(let M=g;M<=C;M++){const y=(M-x)/(C-x);h.y[M]=E+(w-E)*(1-(1-y)*(1-y))}for(let M=0;M<c;M++){const y=(M-6+c)%c,P=(M+6)%c,D=Math.atan2(h.tz[P],h.tx[P])-Math.atan2(h.tz[y],h.tx[y]),N=Math.atan2(Math.sin(D),Math.cos(D))/12;h.bank[M]=Math.max(-.08,Math.min(.08,-N*3.5))}const L=Co(h.bank,8);return h.bank.set(L),lv(h.w,6),h}function Co(s,t){const e=s.length,n=new Float32Array(e),i=Math.ceil(t*2.5),r=[];let a=0;for(let o=-i;o<=i;o++){const c=Math.exp(-(o*o)/(2*t*t));r.push(c),a+=c}for(let o=0;o<e;o++){let c=0;for(let l=-i;l<=i;l++)c+=s[(o+l+e)%e]*r[l+i];n[o]=c/a}return n}function lv(s,t){const e=s.slice(),n=s.length;for(let i=0;i<n;i++){let r=0;for(let a=-t;a<=t;a++)r+=e[(i+a+n)%n];s[i]=r/(2*t+1)}}class hv{constructor(t){this.T=cv(t),this.n=this.T.n,this.L=this.T.length}wrap(t){return(t%this.n+this.n)%this.n}frame(t,e,n,i,r,a=18){const o=this.T;let c=-1,l=1e18;for(let h=-a;h<=a;h++){const u=this.wrap(i+h),f=t-o.x[u],d=n-o.z[u],b=e-o.y[u],m=f*f+d*d+(b*b>25?b*b*4:0);m<l&&(l=m,c=u)}return this.project(t,n,c,r)}frameGlobal(t,e,n,i){const r=this.T;let a=0,o=1e18;for(let c=0;c<this.n;c++){const l=t-r.x[c],h=n-r.z[c],u=e-r.y[c],f=l*l+h*h+u*u*4;f<o&&(o=f,a=c)}return this.project(t,n,a,i)}project(t,e,n,i){const r=this.T;let a=n,o=this.wrap(n+1),c=r.x[o]-r.x[a],l=r.z[o]-r.z[a],h=((t-r.x[a])*c+(e-r.z[a])*l)/(c*c+l*l);h<0&&(o=a,a=this.wrap(n-1),c=r.x[o]-r.x[a],l=r.z[o]-r.z[a],h=((t-r.x[a])*c+(e-r.z[a])*l)/(c*c+l*l)),h=Math.max(0,Math.min(1,h));const u=r.x[a]+c*h,f=r.z[a]+l*h,d=r.tx[a]+(r.tx[o]-r.tx[a])*h,b=r.tz[a]+(r.tz[o]-r.tz[a])*h,m=Math.hypot(d,b)||1,g=d/m,p=b/m,v=(t-u)*-p+(e-f)*g,_=r.bank[a]+(r.bank[o]-r.bank[a])*h,x=r.y[a]+(r.y[o]-r.y[a])*h;return i.i=a,i.t=h,i.s=(a+h)*(this.L/this.n),i.d=v,i.w=r.w[a]+(r.w[o]-r.w[a])*h,i.h=x+_*v,i.tx=g,i.tz=p,i.flags=r.flags[a]|r.flags[o],i}point(t,e,n=new R){const i=this.T,r=(t/this.L*this.n%this.n+this.n)%this.n,a=Math.floor(r),o=(a+1)%this.n,c=r-a,l=i.tx[a]+(i.tx[o]-i.tx[a])*c,h=i.tz[a]+(i.tz[o]-i.tz[a])*c,u=Math.hypot(l,h)||1,f=i.bank[a]+(i.bank[o]-i.bank[a])*c;return n.set(i.x[a]+(i.x[o]-i.x[a])*c-h/u*e,i.y[a]+(i.y[o]-i.y[a])*c+f*e,i.z[a]+(i.z[o]-i.z[a])*c+l/u*e),n}heading(t){const e=this.wrap(Math.round(t/this.L*this.n));return Math.atan2(this.T.tz[e],this.T.tx[e])}idxOf(t){return this.wrap(Math.round(t/this.L*this.n))}build(t,e){const n=this.T,i=this.n,r=new zi,a=new zi,o=new zi,c=new zi,l=new zi,h=(d,b,m=0)=>{const g=n.bank[d];return[n.x[d]-n.tz[d]*b,n.y[d]+g*b+m,n.z[d]+n.tx[d]*b]};let u=0;for(let d=0;d<i;d++){const b=d,m=(d+1)%i,g=n.w[b]/2,p=n.w[m]/2,v=this.L/i,_=u+v/12,x=n.flags[b]|n.flags[m];r.quad(h(b,-g),h(m,-p),h(m,p),h(b,g),[0,u],[0,_],[1,_],[1,u]);for(const C of[-1,1]){const w=C*g,E=C*p,L=C*(g+1.1),M=C*(p+1.1),y=C<0?[h(b,L,.08),h(m,M,.08),h(m,E,.02),h(b,w,.02)]:[h(b,w,.02),h(m,E,.02),h(m,M,.08),h(b,L,.08)],P=d*v/6;a.quad(y[0],y[1],y[2],y[3],[0,P],[0,P+v/6],[1,P+v/6],[1,P]);const D=C*(g+1.1),N=C*(p+1.1),O=C*(g+1.7),W=C*(p+1.7),z=x&Si?0:x&De?1:.9;if(z>0){const Ut=x&De?l:o,Vt=[h(b,D,0),h(m,N,0),h(m,N,z),h(b,D,z)],q=[h(b,O,-.2),h(m,W,-.2),h(m,W,z),h(b,O,z)],tt=[0,0],xt=[v/3,0],st=[v/3,1],wt=[0,1];C<0?(Ut.quad(Vt[1],Vt[0],Vt[3],Vt[2],xt,tt,wt,st),Ut.quad(q[0],q[1],q[2],q[3],tt,xt,st,wt)):(Ut.quad(Vt[0],Vt[1],Vt[2],Vt[3],tt,xt,st,wt),Ut.quad(q[1],q[0],q[3],q[2],xt,tt,wt,st)),Ut.quad(h(b,D,z),h(m,N,z),h(m,W,z),h(b,O,z),[0,0],[v/3,0],[v/3,.15],[0,.15])}const Z=x&De?1.4:2.5,V=C*(g+1.7),et=C*(p+1.7),lt=[h(b,V,-.2),h(m,et,-.2)],ht=[h(b,V,-Z),h(m,et,-Z)];C<0?c.quad(ht[0],ht[1],lt[1],lt[0],[0,0],[1,0],[1,1],[0,1]):c.quad(ht[1],ht[0],lt[0],lt[1],[0,0],[1,0],[1,1],[0,1])}if(x&De){const C=g+1.7,w=p+1.7;c.quad(h(m,-w,-1.4),h(b,-C,-1.4),h(b,C,-1.4),h(m,w,-1.4),[0,0],[1,0],[1,1],[0,1])}u=_}const f=(d,b,m=!0)=>{const g=new at(d.build(),b);return g.receiveShadow=m,t.add(g),g};f(r,new ce({map:e.asphalt})).name="road",f(a,new ce({map:e.curb})),f(o,new ce({map:e.wall})),f(l,new ce({map:e.rail})),f(c,new ce({color:13223128})),this.buildTunnel(t,e),this.buildSupports(t),this.buildStartLine(t,e)}buildTunnel(t,e){const n=this.T,i=new zi;let r=-1,a=-1;for(let b=0;b<this.n;b++)n.flags[b]&Si&&(r<0&&(r=b),a=b);if(r<0)return;const o=14;for(let b=r;b<a;b++){const m=n.w[b]/2+1.7;for(let g=0;g<o;g++){const p=g/o*Math.PI,v=(g+1)/o*Math.PI,_=(x,C,w)=>{const E=Math.cos(C)*w,L=Math.sin(C)*w*.85;return[n.x[x]-n.tz[x]*E,n.y[x]+L,n.z[x]+n.tx[x]*E]};i.quad(_(b,v,m),_(b+1,v,m),_(b+1,p,m),_(b,p,m),[g/o,b/4],[g/o,(b+1)/4],[(g+1)/o,(b+1)/4],[(g+1)/o,b/4]),i.quad(_(b,p,m+.8),_(b+1,p,m+.8),_(b+1,v,m+.8),_(b,v,m+.8),[0,0],[0,1],[1,1],[1,0])}}const c=new at(i.build(),new ce({map:e.tunnel,side:Ue}));t.add(c);for(const[b,m]of[[r,-1],[a,1]]){const g=new ee,p=n.w[b]/2+1.7,v=p+4,_=p*.85+5,x=new af;x.moveTo(-v,-.5),x.lineTo(-v,_),x.lineTo(v,_),x.lineTo(v,-.5),x.lineTo(p,-.5),x.lineTo(p,0);for(let L=1;L<20;L++){const M=L/20*Math.PI;x.lineTo(Math.cos(M)*p,Math.sin(M)*p*.85)}x.lineTo(-p,0),x.lineTo(-p,-.5),x.lineTo(-v,-.5);const C=new al(x,{depth:1.6,bevelEnabled:!1});C.translate(0,0,-.8);const w=new at(C,new ce({color:15910568}));w.castShadow=!0,g.add(w);const E=new at(new on(8,1.75),new Pe({map:e.sign("TÜNEL","#2f5d8a","#fff7e8"),transparent:!0}));E.position.set(0,p*.85+2.4,m*.82),m<0&&(E.rotation.y=Math.PI),g.add(E),g.position.set(n.x[b],n.y[b],n.z[b]),g.rotation.y=-Math.atan2(n.tz[b],n.tx[b])+Math.PI/2,t.add(g)}const l=new Ce(.35,8,6),h=new Pe({color:16769696}),u=Math.floor((a-r)/6),f=new Ve(l,h,u*2),d=new Nt;for(let b=0;b<u;b++){const m=r+3+b*6,g=n.w[m]/2+1.2;for(const p of[-1,1]){const v=Math.cos(p<0?2.2:.94)*g;d.makeTranslation(n.x[m]-n.tz[m]*v,n.y[m]+g*.62,n.z[m]+n.tx[m]*v),f.setMatrixAt(b*2+(p>0?1:0),d)}}t.add(f)}buildSupports(t){const e=this.T,n=[],i=new Nt,r=new Ye,a=new R;for(let u=0;u<this.n;u+=9){const f=e.flags[u];if(!(!(f&De)||f&yr)&&!(Math.hypot(e.x[u]-e.tower.x,e.z[u]-e.tower.z)<34))for(const d of[-1,1]){const b=d*(e.w[u]/2-.5),m=e.x[u]-e.tz[u]*b,g=e.z[u]+e.tx[u]*b,p=e.y[u]-1.2,v=p+2;v<1.5||(r.setFromAxisAngle(new R(0,1,0),-Math.atan2(e.tz[u],e.tx[u])),i.compose(new R(m,p-v/2,g),r,a.set(1,v,1)),n.push(i.clone()))}}const o=new Ve(new Re(1.2,1,1.2),new ce({color:14270368}),n.length);n.forEach((u,f)=>o.setMatrixAt(f,u)),o.castShadow=!0,t.add(o);const c=e.tower,l=[];for(let u=0;u<this.n;u+=6){if(!(e.flags[u]&yr))continue;const f=e.x[u]-c.x,d=e.z[u]-c.z,b=Math.hypot(f,d),m=Math.atan2(d,f),g=b+e.w[u]/2-$h+1;r.setFromAxisAngle(new R(0,1,0),-m);const p=$h+g/2-.5;i.compose(new R(c.x+Math.cos(m)*p,e.y[u]-2.2,c.z+Math.sin(m)*p),r,a.set(g,1.6,1.4)),l.push(i.clone())}const h=new Ve(new Re(1,1,1),new ce({color:14731693}),l.length);l.forEach((u,f)=>h.setMatrixAt(f,u)),h.castShadow=!0,t.add(h)}buildStartLine(t,e){const n=this.T,i=0,r=n.w[i],a=new on(r,2.2);a.rotateX(-Math.PI/2);const o=new at(a,new ce({map:e.checker}));o.rotation.y=-Math.atan2(n.tz[i],n.tx[i])+Math.PI/2,o.position.set(n.x[i],n.y[i]+.04,n.z[i]),o.receiveShadow=!0,t.add(o);const c=new ee,l=new ce({color:16183267});for(const u of[-1,1]){const f=new at(new Se(.45,.55,7.5,12),l);f.position.set(0,3.75,u*(r/2+2)),f.castShadow=!0,c.add(f)}const h=new at(new Re(.5,1.8,r+5),new ce({color:15037299}));h.position.y=7.2,c.add(h);for(const u of[-1,1]){const f=new at(new on(r+3,1.5),new Pe({map:e.sign("BOSPHORUS DRIFT","#e57373","#fff7e8"),transparent:!0}));f.position.set(u*.27,7.2,0),f.rotation.y=u*Math.PI/2,c.add(f)}c.position.set(n.x[i],n.y[i],n.z[i]),c.rotation.y=-Math.atan2(n.tz[i],n.tx[i]),t.add(c)}}const $h=8.6;class zi{constructor(){this.p=[],this.uv=[],this.idx=[],this.col=null}quad(t,e,n,i,r,a,o,c){const l=this.p.length/3;this.p.push(...t,...e,...n,...i),this.uv.push(...r,...a,...o,...c),this.idx.push(l,l+2,l+1,l,l+3,l+2)}build(){const t=new ve;return t.setAttribute("position",new se(this.p,3)),t.setAttribute("uv",new se(this.uv,2)),t.setIndex(this.idx),t.computeVertexNormals(),t}}class uv{constructor(){this.asphalt=this.make(256,512,(t,e,n)=>{t.fillStyle="#787c9e",t.fillRect(0,0,e,n);for(let i=0;i<900;i++){const r=i*97%e,a=(i*53+i%7*31)%n;t.fillStyle=i%3?"rgba(255,255,255,0.035)":"rgba(0,0,0,0.05)",t.fillRect(r,a,3,3)}t.fillStyle="#f4f2ff",t.fillRect(e*.035,0,e*.022,n),t.fillRect(e*.943,0,e*.022,n),t.fillStyle="rgba(244,242,255,0.9)";for(const i of[.335,.665])t.fillRect(e*i-3,0,6,n*.45)},!0),this.cobble=this.asphalt,this.curb=this.make(64,64,(t,e,n)=>{t.fillStyle="#e8534a",t.fillRect(0,0,e,n/2),t.fillStyle="#fbf8ff",t.fillRect(0,n/2,e,n/2)},!0),this.wall=this.make(128,64,(t,e,n)=>{t.fillStyle="#3f6fd6",t.fillRect(0,0,e/2,n),t.fillStyle="#f7f6ff",t.fillRect(e/2,0,e/2,n),t.fillStyle="#f2c94c",t.fillRect(0,0,e,9),t.fillStyle="rgba(30,40,90,0.25)",t.fillRect(0,n-6,e,6)},!0),this.rail=this.make(128,64,(t,e,n)=>{t.fillStyle="#f7f6ff",t.fillRect(0,0,e,n),t.fillStyle="#3f6fd6";for(let i=0;i<4;i++)t.fillRect(i*32+10,14,12,44);t.fillStyle="#f2c94c",t.fillRect(0,0,e,9)},!0),this.tunnel=this.make(128,128,(t,e,n)=>{t.fillStyle="#cfc6dc",t.fillRect(0,0,e,n),t.fillStyle="#a99fbd",t.fillRect(0,0,e,14),t.fillStyle="#e4ddef",t.fillRect(0,14,e,6)},!0),this.checker=this.make(128,32,(t,e,n)=>{for(let i=0;i<2;i++)for(let r=0;r<8;r++)t.fillStyle=(r+i)%2?"#3c3a47":"#fbf6ee",t.fillRect(r*16,i*16,16,16)}),this.signs=new Map}sign(t,e,n){const i=t+e;let r=this.signs.get(i);return r||(r=this.make(512,112,(a,o,c)=>{a.fillStyle=e,ba(a,2,2,o-4,c-4,26),a.fill(),a.fillStyle=n;let l=76;const h=()=>`900 ${l}px ui-rounded, "SF Pro Rounded", system-ui, sans-serif`;for(a.font=h();l>24&&a.measureText(t).width>o-48;)l-=4,a.font=h();a.textAlign="center",a.textBaseline="middle",a.fillText(t,o/2,c/2+4)}),this.signs.set(i,r)),r}make(t,e,n,i=!1){const r=document.createElement("canvas");r.width=t,r.height=e;const a=r.getContext("2d");n(a,t,e);const o=new tx(r);return o.colorSpace=Ie,o.anisotropy=4,i&&(o.wrapS=o.wrapT=ji),o}}function ba(s,t,e,n,i,r){s.beginPath(),s.moveTo(t+r,e),s.arcTo(t+n,e,t+n,e+i,r),s.arcTo(t+n,e+i,t,e+i,r),s.arcTo(t,e+i,t,e,r),s.arcTo(t,e,t+n,e,r),s.closePath()}function $n(s,t=!1){const e=s[0].index!==null,n=new Set(Object.keys(s[0].attributes)),i=new Set(Object.keys(s[0].morphAttributes)),r={},a={},o=s[0].morphTargetsRelative,c=new ve;let l=0;for(let h=0;h<s.length;++h){const u=s[h];let f=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const d in u.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(u.attributes[d]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const d in u.morphAttributes){if(!i.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[d]===void 0&&(a[d]=[]),a[d].push(u.morphAttributes[d])}if(t){let d;if(e)d=u.index.count;else if(u.attributes.position!==void 0)d=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,d,h),l+=d}}if(e){let h=0;const u=[];for(let f=0;f<s.length;++f){const d=s[f].index;for(let b=0;b<d.count;++b)u.push(d.getX(b)+h);h+=s[f].attributes.position.count}c.setIndex(u)}for(const h in r){const u=tu(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,u)}for(const h in a){const u=a[h][0].length;if(u===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let f=0;f<u;++f){const d=[];for(let m=0;m<a[h].length;++m)d.push(a[h][m][f]);const b=tu(d);if(!b)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(b)}}return c}function tu(s){let t,e,n,i=-1,r=0;for(let l=0;l<s.length;++l){const h=s[l];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=h.gpuType),i!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}const a=new t(r),o=new fe(a,e,n);let c=0;for(let l=0;l<s.length;++l){const h=s[l];if(h.isInterleavedBufferAttribute){const u=c/e;for(let f=0,d=h.count;f<d;f++)for(let b=0;b<e;b++){const m=h.getComponent(f,b);o.setComponent(f+u,b,m)}}else a.set(h.array,c);c+=h.count*e}return i!==void 0&&(o.gpuType=i),o}function eu(s,t){if(t===od)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(t===yc||t===Nu){let e=s.getIndex();if(e===null){const a=[],o=s.getAttribute("position");if(o!==void 0){for(let c=0;c<o.count;c++)a.push(c);s.setIndex(a),e=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}const n=e.count-2,i=[];if(t===yc)for(let a=1;a<=n;a++)i.push(e.getX(0)),i.push(e.getX(a)),i.push(e.getX(a+1));else for(let a=0;a<n;a++)a%2===0?(i.push(e.getX(a)),i.push(e.getX(a+1)),i.push(e.getX(a+2))):(i.push(e.getX(a+2)),i.push(e.getX(a+1)),i.push(e.getX(a)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=s.clone();return r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",t),s}class fv extends Fs{constructor(t){super(t),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(e){return new bv(e)}),this.register(function(e){return new xv(e)}),this.register(function(e){return new Av(e)}),this.register(function(e){return new Rv(e)}),this.register(function(e){return new Cv(e)}),this.register(function(e){return new _v(e)}),this.register(function(e){return new Mv(e)}),this.register(function(e){return new yv(e)}),this.register(function(e){return new Sv(e)}),this.register(function(e){return new gv(e)}),this.register(function(e){return new Tv(e)}),this.register(function(e){return new vv(e)}),this.register(function(e){return new Ev(e)}),this.register(function(e){return new wv(e)}),this.register(function(e){return new pv(e)}),this.register(function(e){return new Pv(e)}),this.register(function(e){return new Lv(e)})}load(t,e,n,i){const r=this;let a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){const l=lr.extractUrlBase(t);a=lr.resolveURL(l,this.path)}else a=lr.extractUrlBase(t);this.manager.itemStart(t);const o=function(l){i?i(l):console.error(l),r.manager.itemError(t),r.manager.itemEnd(t)},c=new df(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(t,function(l){try{r.parse(l,a,function(h){e(h),r.manager.itemEnd(t)},o)}catch(h){o(h)}},n,o)}setDRACOLoader(t){return this.dracoLoader=t,this}setKTX2Loader(t){return this.ktx2Loader=t,this}setMeshoptDecoder(t){return this.meshoptDecoder=t,this}register(t){return this.pluginCallbacks.indexOf(t)===-1&&this.pluginCallbacks.push(t),this}unregister(t){return this.pluginCallbacks.indexOf(t)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(t),1),this}parse(t,e,n,i){let r;const a={},o={},c=new TextDecoder;if(typeof t=="string")r=JSON.parse(t);else if(t instanceof ArrayBuffer)if(c.decode(new Uint8Array(t,0,4))===mf){try{a[Zt.KHR_BINARY_GLTF]=new Iv(t)}catch(u){i&&i(u);return}r=JSON.parse(a[Zt.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(t));else r=t;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const l=new jv(r,{path:e||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const u=this.pluginCallbacks[h](l);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[u.name]=u,a[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){const u=r.extensionsUsed[h],f=r.extensionsRequired||[];switch(u){case Zt.KHR_MATERIALS_UNLIT:a[u]=new mv;break;case Zt.KHR_DRACO_MESH_COMPRESSION:a[u]=new Dv(r,this.dracoLoader);break;case Zt.KHR_TEXTURE_TRANSFORM:a[u]=new Uv;break;case Zt.KHR_MESH_QUANTIZATION:a[u]=new Nv;break;default:f.indexOf(u)>=0&&o[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}l.setExtensions(a),l.setPlugins(o),l.parse(n,i)}parseAsync(t,e){const n=this;return new Promise(function(i,r){n.parse(t,e,i,r)})}}function dv(){let s={};return{get:function(t){return s[t]},add:function(t,e){s[t]=e},remove:function(t){delete s[t]},removeAll:function(){s={}}}}const Zt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class pv{constructor(t){this.parser=t,this.name=Zt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const t=this.parser,e=this.parser.json.nodes||[];for(let n=0,i=e.length;n<i;n++){const r=e[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&t._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(t){const e=this.parser,n="light:"+t;let i=e.cache.get(n);if(i)return i;const r=e.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[t];let l;const h=new ot(16777215);c.color!==void 0&&h.setRGB(c.color[0],c.color[1],c.color[2],Ze);const u=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new hl(h),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new Jx(h),l.distance=u;break;case"spot":l=new Kx(h),l.distance=u,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),l.decay=2,ti(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=e.createUniqueName(c.name||"light_"+t),i=Promise.resolve(l),e.cache.add(n,i),i}getDependency(t,e){if(t==="light")return this._loadLight(e)}createNodeAttachment(t){const e=this,n=this.parser,r=n.json.nodes[t],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(c){return n._getNodeRef(e.cache,o,c)})}}class mv{constructor(){this.name=Zt.KHR_MATERIALS_UNLIT}getMaterialType(){return Pe}extendParams(t,e,n){const i=[];t.color=new ot(1,1,1),t.opacity=1;const r=e.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const a=r.baseColorFactor;t.color.setRGB(a[0],a[1],a[2],Ze),t.opacity=a[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(t,"map",r.baseColorTexture,Ie))}return Promise.all(i)}}class gv{constructor(t){this.parser=t,this.name=Zt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(t,e){const i=this.parser.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name].emissiveStrength;return r!==void 0&&(e.emissiveIntensity=r),Promise.resolve()}}class bv{constructor(t){this.parser=t,this.name=Zt.KHR_MATERIALS_CLEARCOAT}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:Hn}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];if(a.clearcoatFactor!==void 0&&(e.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&r.push(n.assignTexture(e,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(e.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(e,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(e,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){const o=a.clearcoatNormalTexture.scale;e.clearcoatNormalScale=new ct(o,o)}return Promise.all(r)}}class xv{constructor(t){this.parser=t,this.name=Zt.KHR_MATERIALS_DISPERSION}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:Hn}extendMaterialParams(t,e){const i=this.parser.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return e.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}}class vv{constructor(t){this.parser=t,this.name=Zt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:Hn}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];return a.iridescenceFactor!==void 0&&(e.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&r.push(n.assignTexture(e,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(e.iridescenceIOR=a.iridescenceIor),e.iridescenceThicknessRange===void 0&&(e.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(e.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(e.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(e,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(r)}}class _v{constructor(t){this.parser=t,this.name=Zt.KHR_MATERIALS_SHEEN}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:Hn}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[];e.sheenColor=new ot(0,0,0),e.sheenRoughness=0,e.sheen=1;const a=i.extensions[this.name];if(a.sheenColorFactor!==void 0){const o=a.sheenColorFactor;e.sheenColor.setRGB(o[0],o[1],o[2],Ze)}return a.sheenRoughnessFactor!==void 0&&(e.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&r.push(n.assignTexture(e,"sheenColorMap",a.sheenColorTexture,Ie)),a.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(e,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(r)}}class Mv{constructor(t){this.parser=t,this.name=Zt.KHR_MATERIALS_TRANSMISSION}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:Hn}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];return a.transmissionFactor!==void 0&&(e.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&r.push(n.assignTexture(e,"transmissionMap",a.transmissionTexture)),Promise.all(r)}}class yv{constructor(t){this.parser=t,this.name=Zt.KHR_MATERIALS_VOLUME}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:Hn}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];e.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&r.push(n.assignTexture(e,"thicknessMap",a.thicknessTexture)),e.attenuationDistance=a.attenuationDistance||1/0;const o=a.attenuationColor||[1,1,1];return e.attenuationColor=new ot().setRGB(o[0],o[1],o[2],Ze),Promise.all(r)}}class Sv{constructor(t){this.parser=t,this.name=Zt.KHR_MATERIALS_IOR}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:Hn}extendMaterialParams(t,e){const i=this.parser.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return e.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class Tv{constructor(t){this.parser=t,this.name=Zt.KHR_MATERIALS_SPECULAR}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:Hn}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];e.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&r.push(n.assignTexture(e,"specularIntensityMap",a.specularTexture));const o=a.specularColorFactor||[1,1,1];return e.specularColor=new ot().setRGB(o[0],o[1],o[2],Ze),a.specularColorTexture!==void 0&&r.push(n.assignTexture(e,"specularColorMap",a.specularColorTexture,Ie)),Promise.all(r)}}class wv{constructor(t){this.parser=t,this.name=Zt.EXT_MATERIALS_BUMP}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:Hn}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];return e.bumpScale=a.bumpFactor!==void 0?a.bumpFactor:1,a.bumpTexture!==void 0&&r.push(n.assignTexture(e,"bumpMap",a.bumpTexture)),Promise.all(r)}}class Ev{constructor(t){this.parser=t,this.name=Zt.KHR_MATERIALS_ANISOTROPY}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:Hn}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];return a.anisotropyStrength!==void 0&&(e.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(e.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&r.push(n.assignTexture(e,"anisotropyMap",a.anisotropyTexture)),Promise.all(r)}}class Av{constructor(t){this.parser=t,this.name=Zt.KHR_TEXTURE_BASISU}loadTexture(t){const e=this.parser,n=e.json,i=n.textures[t];if(!i.extensions||!i.extensions[this.name])return null;const r=i.extensions[this.name],a=e.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return e.loadTextureImage(t,r.source,a)}}class Rv{constructor(t){this.parser=t,this.name=Zt.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(t){const e=this.name,n=this.parser,i=n.json,r=i.textures[t];if(!r.extensions||!r.extensions[e])return null;const a=r.extensions[e],o=i.images[a.source];let c=n.textureLoader;if(o.uri){const l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(t,a.source,c);if(i.extensionsRequired&&i.extensionsRequired.indexOf(e)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(t)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(t){const e=new Image;e.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",e.onload=e.onerror=function(){t(e.height===1)}})),this.isSupported}}class Cv{constructor(t){this.parser=t,this.name=Zt.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(t){const e=this.name,n=this.parser,i=n.json,r=i.textures[t];if(!r.extensions||!r.extensions[e])return null;const a=r.extensions[e],o=i.images[a.source];let c=n.textureLoader;if(o.uri){const l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(t,a.source,c);if(i.extensionsRequired&&i.extensionsRequired.indexOf(e)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(t)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(t){const e=new Image;e.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",e.onload=e.onerror=function(){t(e.height===1)}})),this.isSupported}}class Pv{constructor(t){this.name=Zt.EXT_MESHOPT_COMPRESSION,this.parser=t}loadBufferView(t){const e=this.parser.json,n=e.bufferViews[t];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(e.extensionsRequired&&e.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){const c=i.byteOffset||0,l=i.byteLength||0,h=i.count,u=i.byteStride,f=new Uint8Array(o,c,l);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(h,u,f,i.mode,i.filter).then(function(d){return d.buffer}):a.ready.then(function(){const d=new ArrayBuffer(h*u);return a.decodeGltfBuffer(new Uint8Array(d),h,u,f,i.mode,i.filter),d})})}else return null}}class Lv{constructor(t){this.name=Zt.EXT_MESH_GPU_INSTANCING,this.parser=t}createNodeMesh(t){const e=this.parser.json,n=e.nodes[t];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=e.meshes[n.mesh];for(const l of i.primitives)if(l.mode!==dn.TRIANGLES&&l.mode!==dn.TRIANGLE_STRIP&&l.mode!==dn.TRIANGLE_FAN&&l.mode!==void 0)return null;const a=n.extensions[this.name].attributes,o=[],c={};for(const l in a)o.push(this.parser.getDependency("accessor",a[l]).then(h=>(c[l]=h,c[l])));return o.length<1?null:(o.push(this.parser.createNodeMesh(t)),Promise.all(o).then(l=>{const h=l.pop(),u=h.isGroup?h.children:[h],f=l[0].count,d=[];for(const b of u){const m=new Nt,g=new R,p=new Ye,v=new R(1,1,1),_=new Ve(b.geometry,b.material,f);for(let x=0;x<f;x++)c.TRANSLATION&&g.fromBufferAttribute(c.TRANSLATION,x),c.ROTATION&&p.fromBufferAttribute(c.ROTATION,x),c.SCALE&&v.fromBufferAttribute(c.SCALE,x),_.setMatrixAt(x,m.compose(g,p,v));for(const x in c)if(x==="_COLOR_0"){const C=c[x];_.instanceColor=new wc(C.array,C.itemSize,C.normalized)}else x!=="TRANSLATION"&&x!=="ROTATION"&&x!=="SCALE"&&b.geometry.setAttribute(x,c[x]);pe.prototype.copy.call(_,b),this.parser.assignFinalMaterial(_),d.push(_)}return h.isGroup?(h.clear(),h.add(...d),h):d[0]}))}}const mf="glTF",Xs=12,nu={JSON:1313821514,BIN:5130562};class Iv{constructor(t){this.name=Zt.KHR_BINARY_GLTF,this.content=null,this.body=null;const e=new DataView(t,0,Xs),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(t.slice(0,4))),version:e.getUint32(4,!0),length:e.getUint32(8,!0)},this.header.magic!==mf)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-Xs,r=new DataView(t,Xs);let a=0;for(;a<i;){const o=r.getUint32(a,!0);a+=4;const c=r.getUint32(a,!0);if(a+=4,c===nu.JSON){const l=new Uint8Array(t,Xs+a,o);this.content=n.decode(l)}else if(c===nu.BIN){const l=Xs+a;this.body=t.slice(l,l+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class Dv{constructor(t,e){if(!e)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Zt.KHR_DRACO_MESH_COMPRESSION,this.json=t,this.dracoLoader=e,this.dracoLoader.preload()}decodePrimitive(t,e){const n=this.json,i=this.dracoLoader,r=t.extensions[this.name].bufferView,a=t.extensions[this.name].attributes,o={},c={},l={};for(const h in a){const u=Pc[h]||h.toLowerCase();o[u]=a[h]}for(const h in t.attributes){const u=Pc[h]||h.toLowerCase();if(a[h]!==void 0){const f=n.accessors[t.attributes[h]],d=xs[f.componentType];l[u]=d.name,c[u]=f.normalized===!0}}return e.getDependency("bufferView",r).then(function(h){return new Promise(function(u,f){i.decodeDracoFile(h,function(d){for(const b in d.attributes){const m=d.attributes[b],g=c[b];g!==void 0&&(m.normalized=g)}u(d)},o,l,Ze,f)})})}}class Uv{constructor(){this.name=Zt.KHR_TEXTURE_TRANSFORM}extendTexture(t,e){return(e.texCoord===void 0||e.texCoord===t.channel)&&e.offset===void 0&&e.rotation===void 0&&e.scale===void 0||(t=t.clone(),e.texCoord!==void 0&&(t.channel=e.texCoord),e.offset!==void 0&&t.offset.fromArray(e.offset),e.rotation!==void 0&&(t.rotation=e.rotation),e.scale!==void 0&&t.repeat.fromArray(e.scale),t.needsUpdate=!0),t}}class Nv{constructor(){this.name=Zt.KHR_MESH_QUANTIZATION}}class gf extends wr{constructor(t,e,n,i){super(t,e,n,i)}copySampleValue_(t){const e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i*3+i;for(let a=0;a!==i;a++)e[a]=n[r+a];return e}interpolate_(t,e,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=o*2,l=o*3,h=i-e,u=(n-e)/h,f=u*u,d=f*u,b=t*l,m=b-l,g=-2*d+3*f,p=d-f,v=1-g,_=p-f+u;for(let x=0;x!==o;x++){const C=a[m+x+o],w=a[m+x+c]*h,E=a[b+x+o],L=a[b+x]*h;r[x]=v*C+_*w+g*E+p*L}return r}}const Fv=new Ye;class kv extends gf{interpolate_(t,e,n,i){const r=super.interpolate_(t,e,n,i);return Fv.fromArray(r).normalize().toArray(r),r}}const dn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},xs={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},iu={9728:je,9729:rn,9984:wu,9985:ha,9986:Qs,9987:ei},su={33071:Mi,33648:_a,10497:ji},Po={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Pc={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},xi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Ov={CUBICSPLINE:void 0,LINEAR:br,STEP:gr},Lo={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function zv(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new cl({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:ai})),s.DefaultMaterial}function Ni(s,t,e){for(const n in e.extensions)s[n]===void 0&&(t.userData.gltfExtensions=t.userData.gltfExtensions||{},t.userData.gltfExtensions[n]=e.extensions[n])}function ti(s,t){t.extras!==void 0&&(typeof t.extras=="object"?Object.assign(s.userData,t.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+t.extras))}function Bv(s,t,e){let n=!1,i=!1,r=!1;for(let l=0,h=t.length;l<h;l++){const u=t[l];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(i=!0),u.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);const a=[],o=[],c=[];for(let l=0,h=t.length;l<h;l++){const u=t[l];if(n){const f=u.POSITION!==void 0?e.getDependency("accessor",u.POSITION):s.attributes.position;a.push(f)}if(i){const f=u.NORMAL!==void 0?e.getDependency("accessor",u.NORMAL):s.attributes.normal;o.push(f)}if(r){const f=u.COLOR_0!==void 0?e.getDependency("accessor",u.COLOR_0):s.attributes.color;c.push(f)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c)]).then(function(l){const h=l[0],u=l[1],f=l[2];return n&&(s.morphAttributes.position=h),i&&(s.morphAttributes.normal=u),r&&(s.morphAttributes.color=f),s.morphTargetsRelative=!0,s})}function Gv(s,t){if(s.updateMorphTargets(),t.weights!==void 0)for(let e=0,n=t.weights.length;e<n;e++)s.morphTargetInfluences[e]=t.weights[e];if(t.extras&&Array.isArray(t.extras.targetNames)){const e=t.extras.targetNames;if(s.morphTargetInfluences.length===e.length){s.morphTargetDictionary={};for(let n=0,i=e.length;n<i;n++)s.morphTargetDictionary[e[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Hv(s){let t;const e=s.extensions&&s.extensions[Zt.KHR_DRACO_MESH_COMPRESSION];if(e?t="draco:"+e.bufferView+":"+e.indices+":"+Io(e.attributes):t=s.indices+":"+Io(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)t+=":"+Io(s.targets[n]);return t}function Io(s){let t="";const e=Object.keys(s).sort();for(let n=0,i=e.length;n<i;n++)t+=e[n]+":"+s[e[n]]+";";return t}function Lc(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Vv(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":s.search(/\.ktx2($|\?)/i)>0||s.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const Wv=new Nt;class jv{constructor(t={},e={}){this.json=t,this.extensions={},this.plugins={},this.options=e,this.cache=new dv,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,r=!1,a=-1;if(typeof navigator<"u"){const o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;const c=o.match(/Version\/(\d+)/);i=n&&c?parseInt(c[1],10):-1,r=o.indexOf("Firefox")>-1,a=r?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||r&&a<98?this.textureLoader=new qx(this.options.manager):this.textureLoader=new Qx(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new df(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(t){this.extensions=t}setPlugins(t){this.plugins=t}parse(t,e){const n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){const o={scene:a[0][i.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:i.asset,parser:n,userData:{}};return Ni(r,o,i),ti(o,i),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(o)})).then(function(){for(const c of o.scenes)c.updateMatrixWorld();t(o)})}).catch(e)}_markDefs(){const t=this.json.nodes||[],e=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=e.length;i<r;i++){const a=e[i].joints;for(let o=0,c=a.length;o<c;o++)t[a[o]].isBone=!0}for(let i=0,r=t.length;i<r;i++){const a=t[i];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(t,e){e!==void 0&&(t.refs[e]===void 0&&(t.refs[e]=t.uses[e]=0),t.refs[e]++)}_getNodeRef(t,e,n){if(t.refs[e]<=1)return n;const i=n.clone(),r=(a,o)=>{const c=this.associations.get(a);c!=null&&this.associations.set(o,c);for(const[l,h]of a.children.entries())r(h,o.children[l])};return r(n,i),i.name+="_instance_"+t.uses[e]++,i}_invokeOne(t){const e=Object.values(this.plugins);e.push(this);for(let n=0;n<e.length;n++){const i=t(e[n]);if(i)return i}return null}_invokeAll(t){const e=Object.values(this.plugins);e.unshift(this);const n=[];for(let i=0;i<e.length;i++){const r=t(e[i]);r&&n.push(r)}return n}getDependency(t,e){const n=t+":"+e;let i=this.cache.get(n);if(!i){switch(t){case"scene":i=this.loadScene(e);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(e)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(e)});break;case"accessor":i=this.loadAccessor(e);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(e)});break;case"buffer":i=this.loadBuffer(e);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(e)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(e)});break;case"skin":i=this.loadSkin(e);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(e)});break;case"camera":i=this.loadCamera(e);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(t,e)}),!i)throw new Error("Unknown type: "+t);break}this.cache.add(n,i)}return i}getDependencies(t){let e=this.cache.get(t);if(!e){const n=this,i=this.json[t+(t==="mesh"?"es":"s")]||[];e=Promise.all(i.map(function(r,a){return n.getDependency(t,a)})),this.cache.add(t,e)}return e}loadBuffer(t){const e=this.json.buffers[t],n=this.fileLoader;if(e.type&&e.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+e.type+" buffer type is not supported.");if(e.uri===void 0&&t===0)return Promise.resolve(this.extensions[Zt.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(r,a){n.load(lr.resolveURL(e.uri,i.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+e.uri+'".'))})})}loadBufferView(t){const e=this.json.bufferViews[t];return this.getDependency("buffer",e.buffer).then(function(n){const i=e.byteLength||0,r=e.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(t){const e=this,n=this.json,i=this.json.accessors[t];if(i.bufferView===void 0&&i.sparse===void 0){const a=Po[i.type],o=xs[i.componentType],c=i.normalized===!0,l=new o(i.count*a);return Promise.resolve(new fe(l,a,c))}const r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(a){const o=a[0],c=Po[i.type],l=xs[i.componentType],h=l.BYTES_PER_ELEMENT,u=h*c,f=i.byteOffset||0,d=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,b=i.normalized===!0;let m,g;if(d&&d!==u){const p=Math.floor(f/d),v="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count;let _=e.cache.get(v);_||(m=new l(o,p*d,i.count*d/h),_=new Kb(m,d/h),e.cache.add(v,_)),g=new Qc(_,c,f%d/h,b)}else o===null?m=new l(i.count*c):m=new l(o,f,i.count*c),g=new fe(m,c,b);if(i.sparse!==void 0){const p=Po.SCALAR,v=xs[i.sparse.indices.componentType],_=i.sparse.indices.byteOffset||0,x=i.sparse.values.byteOffset||0,C=new v(a[1],_,i.sparse.count*p),w=new l(a[2],x,i.sparse.count*c);o!==null&&(g=new fe(g.array.slice(),g.itemSize,g.normalized)),g.normalized=!1;for(let E=0,L=C.length;E<L;E++){const M=C[E];if(g.setX(M,w[E*c]),c>=2&&g.setY(M,w[E*c+1]),c>=3&&g.setZ(M,w[E*c+2]),c>=4&&g.setW(M,w[E*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}g.normalized=b}return g})}loadTexture(t){const e=this.json,n=this.options,r=e.textures[t].source,a=e.images[r];let o=this.textureLoader;if(a.uri){const c=n.manager.getHandler(a.uri);c!==null&&(o=c)}return this.loadTextureImage(t,r,o)}loadTextureImage(t,e,n){const i=this,r=this.json,a=r.textures[t],o=r.images[e],c=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[c])return this.textureCache[c];const l=this.loadImageSource(e,n).then(function(h){h.flipY=!1,h.name=a.name||o.name||"",h.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(h.name=o.uri);const f=(r.samplers||{})[a.sampler]||{};return h.magFilter=iu[f.magFilter]||rn,h.minFilter=iu[f.minFilter]||ei,h.wrapS=su[f.wrapS]||ji,h.wrapT=su[f.wrapT]||ji,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==je&&h.minFilter!==rn,i.associations.set(h,{textures:t}),h}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(t,e){const n=this,i=this.json,r=this.options;if(this.sourceCache[t]!==void 0)return this.sourceCache[t].then(u=>u.clone());const a=i.images[t],o=self.URL||self.webkitURL;let c=a.uri||"",l=!1;if(a.bufferView!==void 0)c=n.getDependency("bufferView",a.bufferView).then(function(u){l=!0;const f=new Blob([u],{type:a.mimeType});return c=o.createObjectURL(f),c});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+t+" is missing URI and bufferView");const h=Promise.resolve(c).then(function(u){return new Promise(function(f,d){let b=f;e.isImageBitmapLoader===!0&&(b=function(m){const g=new Ne(m);g.needsUpdate=!0,f(g)}),e.load(lr.resolveURL(u,r.path),b,void 0,d)})}).then(function(u){return l===!0&&o.revokeObjectURL(c),ti(u,a),u.userData.mimeType=a.mimeType||Vv(a.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),u});return this.sourceCache[t]=h,h}assignTexture(t,e,n,i){const r=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),r.extensions[Zt.KHR_TEXTURE_TRANSFORM]){const o=n.extensions!==void 0?n.extensions[Zt.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const c=r.associations.get(a);a=r.extensions[Zt.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,c)}}return i!==void 0&&(a.colorSpace=i),t[e]=a,a})}assignFinalMaterial(t){const e=t.geometry;let n=t.material;const i=e.attributes.tangent===void 0,r=e.attributes.color!==void 0,a=e.attributes.normal===void 0;if(t.isPoints){const o="PointsMaterial:"+n.uuid;let c=this.cache.get(o);c||(c=new $u,xn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(o,c)),n=c}else if(t.isLine){const o="LineBasicMaterial:"+n.uuid;let c=this.cache.get(o);c||(c=new Oa,xn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(o,c)),n=c}if(i||r||a){let o="ClonedMaterial:"+n.uuid+":";i&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let c=this.cache.get(o);c||(c=n.clone(),r&&(c.vertexColors=!0),a&&(c.flatShading=!0),i&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(o,c),this.associations.set(c,this.associations.get(n))),n=c}t.material=n}getMaterialType(){return cl}loadMaterial(t){const e=this,n=this.json,i=this.extensions,r=n.materials[t];let a;const o={},c=r.extensions||{},l=[];if(c[Zt.KHR_MATERIALS_UNLIT]){const u=i[Zt.KHR_MATERIALS_UNLIT];a=u.getMaterialType(),l.push(u.extendParams(o,r,e))}else{const u=r.pbrMetallicRoughness||{};if(o.color=new ot(1,1,1),o.opacity=1,Array.isArray(u.baseColorFactor)){const f=u.baseColorFactor;o.color.setRGB(f[0],f[1],f[2],Ze),o.opacity=f[3]}u.baseColorTexture!==void 0&&l.push(e.assignTexture(o,"map",u.baseColorTexture,Ie)),o.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,o.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(l.push(e.assignTexture(o,"metalnessMap",u.metallicRoughnessTexture)),l.push(e.assignTexture(o,"roughnessMap",u.metallicRoughnessTexture))),a=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(t)}),l.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(t,o)})))}r.doubleSided===!0&&(o.side=Ue);const h=r.alphaMode||Lo.OPAQUE;if(h===Lo.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===Lo.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==Pe&&(l.push(e.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new ct(1,1),r.normalTexture.scale!==void 0)){const u=r.normalTexture.scale;o.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&a!==Pe&&(l.push(e.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==Pe){const u=r.emissiveFactor;o.emissive=new ot().setRGB(u[0],u[1],u[2],Ze)}return r.emissiveTexture!==void 0&&a!==Pe&&l.push(e.assignTexture(o,"emissiveMap",r.emissiveTexture,Ie)),Promise.all(l).then(function(){const u=new a(o);return r.name&&(u.name=r.name),ti(u,r),e.associations.set(u,{materials:t}),r.extensions&&Ni(i,u,r),u})}createUniqueName(t){const e=ue.sanitizeNodeName(t||"");return e in this.nodeNamesUsed?e+"_"+ ++this.nodeNamesUsed[e]:(this.nodeNamesUsed[e]=0,e)}loadGeometries(t){const e=this,n=this.extensions,i=this.primitiveCache;function r(o){return n[Zt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,e).then(function(c){return ru(c,o,e)})}const a=[];for(let o=0,c=t.length;o<c;o++){const l=t[o],h=Hv(l),u=i[h];if(u)a.push(u.promise);else{let f;l.extensions&&l.extensions[Zt.KHR_DRACO_MESH_COMPRESSION]?f=r(l):f=ru(new ve,l,e),i[h]={primitive:l,promise:f},a.push(f)}}return Promise.all(a)}loadMesh(t){const e=this,n=this.json,i=this.extensions,r=n.meshes[t],a=r.primitives,o=[];for(let c=0,l=a.length;c<l;c++){const h=a[c].material===void 0?zv(this.cache):this.getDependency("material",a[c].material);o.push(h)}return o.push(e.loadGeometries(a)),Promise.all(o).then(function(c){const l=c.slice(0,c.length-1),h=c[c.length-1],u=[];for(let d=0,b=h.length;d<b;d++){const m=h[d],g=a[d];let p;const v=l[d];if(g.mode===dn.TRIANGLES||g.mode===dn.TRIANGLE_STRIP||g.mode===dn.TRIANGLE_FAN||g.mode===void 0)p=r.isSkinnedMesh===!0?new Jb(m,v):new at(m,v),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),g.mode===dn.TRIANGLE_STRIP?p.geometry=eu(p.geometry,Nu):g.mode===dn.TRIANGLE_FAN&&(p.geometry=eu(p.geometry,yc));else if(g.mode===dn.LINES)p=new nl(m,v);else if(g.mode===dn.LINE_STRIP)p=new el(m,v);else if(g.mode===dn.LINE_LOOP)p=new $b(m,v);else if(g.mode===dn.POINTS)p=new tf(m,v);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+g.mode);Object.keys(p.geometry.morphAttributes).length>0&&Gv(p,r),p.name=e.createUniqueName(r.name||"mesh_"+t),ti(p,r),g.extensions&&Ni(i,p,g),e.assignFinalMaterial(p),u.push(p)}for(let d=0,b=u.length;d<b;d++)e.associations.set(u[d],{meshes:t,primitives:d});if(u.length===1)return r.extensions&&Ni(i,u[0],r),u[0];const f=new ee;r.extensions&&Ni(i,f,r),e.associations.set(f,{meshes:t});for(let d=0,b=u.length;d<b;d++)f.add(u[d]);return f})}loadCamera(t){let e;const n=this.json.cameras[t],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?e=new We(Ud.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(e=new Fa(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(e.name=this.createUniqueName(n.name)),ti(e,n),Promise.resolve(e)}loadSkin(t){const e=this.json.skins[t],n=[];for(let i=0,r=e.joints.length;i<r;i++)n.push(this._loadNodeShallow(e.joints[i]));return e.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",e.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const r=i.pop(),a=i,o=[],c=[];for(let l=0,h=a.length;l<h;l++){const u=a[l];if(u){o.push(u);const f=new Nt;r!==null&&f.fromArray(r.array,l*16),c.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',e.joints[l])}return new tl(o,c)})}loadAnimation(t){const e=this.json,n=this,i=e.animations[t],r=i.name?i.name:"animation_"+t,a=[],o=[],c=[],l=[],h=[];for(let u=0,f=i.channels.length;u<f;u++){const d=i.channels[u],b=i.samplers[d.sampler],m=d.target,g=m.node,p=i.parameters!==void 0?i.parameters[b.input]:b.input,v=i.parameters!==void 0?i.parameters[b.output]:b.output;m.node!==void 0&&(a.push(this.getDependency("node",g)),o.push(this.getDependency("accessor",p)),c.push(this.getDependency("accessor",v)),l.push(b),h.push(m))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c),Promise.all(l),Promise.all(h)]).then(function(u){const f=u[0],d=u[1],b=u[2],m=u[3],g=u[4],p=[];for(let v=0,_=f.length;v<_;v++){const x=f[v],C=d[v],w=b[v],E=m[v],L=g[v];if(x===void 0)continue;x.updateMatrix&&x.updateMatrix();const M=n._createAnimationTracks(x,C,w,E,L);if(M)for(let y=0;y<M.length;y++)p.push(M[y])}return new zx(r,void 0,p)})}createNodeMesh(t){const e=this.json,n=this,i=e.nodes[t];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){const a=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let c=0,l=i.weights.length;c<l;c++)o.morphTargetInfluences[c]=i.weights[c]}),a})}loadNode(t){const e=this.json,n=this,i=e.nodes[t],r=n._loadNodeShallow(t),a=[],o=i.children||[];for(let l=0,h=o.length;l<h;l++)a.push(n.getDependency("node",o[l]));const c=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(a),c]).then(function(l){const h=l[0],u=l[1],f=l[2];f!==null&&h.traverse(function(d){d.isSkinnedMesh&&d.bind(f,Wv)});for(let d=0,b=u.length;d<b;d++)h.add(u[d]);return h})}_loadNodeShallow(t){const e=this.json,n=this.extensions,i=this;if(this.nodeCache[t]!==void 0)return this.nodeCache[t];const r=e.nodes[t],a=r.name?i.createUniqueName(r.name):"",o=[],c=i._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(t)});return c&&o.push(c),r.camera!==void 0&&o.push(i.getDependency("camera",r.camera).then(function(l){return i._getNodeRef(i.cameraCache,r.camera,l)})),i._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(t)}).forEach(function(l){o.push(l)}),this.nodeCache[t]=Promise.all(o).then(function(l){let h;if(r.isBone===!0?h=new Qu:l.length>1?h=new ee:l.length===1?h=l[0]:h=new pe,h!==l[0])for(let u=0,f=l.length;u<f;u++)h.add(l[u]);if(r.name&&(h.userData.name=r.name,h.name=a),ti(h,r),r.extensions&&Ni(n,h,r),r.matrix!==void 0){const u=new Nt;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);return i.associations.has(h)||i.associations.set(h,{}),i.associations.get(h).nodes=t,h}),this.nodeCache[t]}loadScene(t){const e=this.extensions,n=this.json.scenes[t],i=this,r=new ee;n.name&&(r.name=i.createUniqueName(n.name)),ti(r,n),n.extensions&&Ni(e,r,n);const a=n.nodes||[],o=[];for(let c=0,l=a.length;c<l;c++)o.push(i.getDependency("node",a[c]));return Promise.all(o).then(function(c){for(let h=0,u=c.length;h<u;h++)r.add(c[h]);const l=h=>{const u=new Map;for(const[f,d]of i.associations)(f instanceof xn||f instanceof Ne)&&u.set(f,d);return h.traverse(f=>{const d=i.associations.get(f);d!=null&&u.set(f,d)}),u};return i.associations=l(r),r})}_createAnimationTracks(t,e,n,i,r){const a=[],o=t.name?t.name:t.uuid,c=[];xi[r.path]===xi.weights?t.traverse(function(f){f.morphTargetInfluences&&c.push(f.name?f.name:f.uuid)}):c.push(o);let l;switch(xi[r.path]){case xi.weights:l=Es;break;case xi.rotation:l=As;break;case xi.position:case xi.scale:l=Rs;break;default:n.itemSize===1?l=Es:l=Rs;break}const h=i.interpolation!==void 0?Ov[i.interpolation]:br,u=this._getArrayFromAccessor(n);for(let f=0,d=c.length;f<d;f++){const b=new l(c[f]+"."+xi[r.path],e.array,u,h);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(b),a.push(b)}return a}_getArrayFromAccessor(t){let e=t.array;if(t.normalized){const n=Lc(e.constructor),i=new Float32Array(e.length);for(let r=0,a=e.length;r<a;r++)i[r]=e[r]*n;e=i}return e}_createCubicSplineTrackInterpolant(t){t.createInterpolant=function(n){const i=this instanceof As?kv:gf;return new i(this.times,this.values,this.getValueSize()/3,n)},t.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function qv(s,t,e){const n=t.attributes,i=new li;if(n.POSITION!==void 0){const o=e.json.accessors[n.POSITION],c=o.min,l=o.max;if(c!==void 0&&l!==void 0){if(i.set(new R(c[0],c[1],c[2]),new R(l[0],l[1],l[2])),o.normalized){const h=Lc(xs[o.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=t.targets;if(r!==void 0){const o=new R,c=new R;for(let l=0,h=r.length;l<h;l++){const u=r[l];if(u.POSITION!==void 0){const f=e.json.accessors[u.POSITION],d=f.min,b=f.max;if(d!==void 0&&b!==void 0){if(c.setX(Math.max(Math.abs(d[0]),Math.abs(b[0]))),c.setY(Math.max(Math.abs(d[1]),Math.abs(b[1]))),c.setZ(Math.max(Math.abs(d[2]),Math.abs(b[2]))),f.normalized){const m=Lc(xs[f.componentType]);c.multiplyScalar(m)}o.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(o)}s.boundingBox=i;const a=new Bn;i.getCenter(a.center),a.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=a}function ru(s,t,e){const n=t.attributes,i=[];function r(a,o){return e.getDependency("accessor",a).then(function(c){s.setAttribute(o,c)})}for(const a in n){const o=Pc[a]||a.toLowerCase();o in s.attributes||i.push(r(n[a],o))}if(t.indices!==void 0&&!s.index){const a=e.getDependency("accessor",t.indices).then(function(o){s.setIndex(o)});i.push(a)}return te.workingColorSpace!==Ze&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${te.workingColorSpace}" not supported.`),ti(s,t),qv(s,t,e),Promise.all(i).then(function(){return t.targets!==void 0?Bv(s,t.targets,e):s})}var Xv=(function(){var s="b9H79Tebbbe8Fv9Gbb9Gvuuuuueu9Giuuub9Geueu9Giuuueuikqbeeedddillviebeoweuec:q;iekr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbeY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVbdE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbiL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtblK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbol79IV9Rbrq:P8Yqdbk;3sezu8Jjjjjbcj;eb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Radz1jjjbhwcj;abad9UhoaicefhldnadTmbaoc;WFbGgocjdaocjd6EhDcbhqinaqae9pmeaDaeaq9RaqaDfae6Egkcsfgocl4cifcd4hxdndndndnaoc9WGgmTmbcbhPcehsawcjdfhzalhHinaraH9Rax6midnaraHaxfgl9RcK6mbczhoinawcj;cbfaogifgoc9WfhOdndndndndnaHaic9WfgAco4fRbbaAci4coG4ciGPlbedibkaO9cb83ibaOcwf9cb83ibxikaOalRblalRbbgAco4gCaCciSgCE86bbaocGfalclfaCfgORbbaAcl4ciGgCaCciSgCE86bbaocVfaOaCfgORbbaAcd4ciGgCaCciSgCE86bbaoc7faOaCfgORbbaAciGgAaAciSgAE86bbaoctfaOaAfgARbbalRbegOco4gCaCciSgCE86bbaoc91faAaCfgARbbaOcl4ciGgCaCciSgCE86bbaoc4faAaCfgARbbaOcd4ciGgCaCciSgCE86bbaoc93faAaCfgARbbaOciGgOaOciSgOE86bbaoc94faAaOfgARbbalRbdgOco4gCaCciSgCE86bbaoc95faAaCfgARbbaOcl4ciGgCaCciSgCE86bbaoc96faAaCfgARbbaOcd4ciGgCaCciSgCE86bbaoc97faAaCfgARbbaOciGgOaOciSgOE86bbaoc98faAaOfgORbbalRbiglco4gAaAciSgAE86bbaoc99faOaAfgORbbalcl4ciGgAaAciSgAE86bbaoc9:faOaAfgORbbalcd4ciGgAaAciSgAE86bbaocufaOaAfgoRbbalciGglalciSglE86bbaoalfhlxdkaOalRbwalRbbgAcl4gCaCcsSgCE86bbaocGfalcwfaCfgORbbaAcsGgAaAcsSgAE86bbaocVfaOaAfgORbbalRbegAcl4gCaCcsSgCE86bbaoc7faOaCfgORbbaAcsGgAaAcsSgAE86bbaoctfaOaAfgORbbalRbdgAcl4gCaCcsSgCE86bbaoc91faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc4faOaAfgORbbalRbigAcl4gCaCcsSgCE86bbaoc93faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc94faOaAfgORbbalRblgAcl4gCaCcsSgCE86bbaoc95faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc96faOaAfgORbbalRbvgAcl4gCaCcsSgCE86bbaoc97faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc98faOaAfgORbbalRbogAcl4gCaCcsSgCE86bbaoc99faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc9:faOaAfgORbbalRbrglcl4gAaAcsSgAE86bbaocufaOaAfgoRbbalcsGglalcsSglE86bbaoalfhlxekaOal8Pbb83bbaOcwfalcwf8Pbb83bbalczfhlkdnaiam9pmbaiczfhoaral9RcL0mekkaiam6mialTmidnakTmbawaPfRbbhOcbhoazhiinaiawcj;cbfaofRbbgAce4cbaAceG9R7aOfgO86bbaiadfhiaocefgoak9hmbkkazcefhzaPcefgPad6hsalhHaPad9hmexvkkcbhlasceGmdxikalaxad2fhCdnakTmbcbhHcehsawcjdfhminaral9Rax6mialTmdalaxfhlawaHfRbbhOcbhoamhiinaiawcj;cbfaofRbbgAce4cbaAceG9R7aOfgO86bbaiadfhiaocefgoak9hmbkamcefhmaHcefgHad6hsaHad9hmbkaChlxikcbhocehsinaral9Rax6mdalTmealaxfhlaocefgoad6hsadao9hmbkaChlxdkcbhlasceGTmekc9:hoxikabaqad2fawcjdfakad2z1jjjb8Aawawcjdfakcufad2fadz1jjjb8Aakaqfhqalmbkc9:hoxekcbc99aral9Radcaadca0ESEhokavcj;ebf8Kjjjjbaok;yzeHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecjez:jjjjb8AavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhodnaeTmbcmcsaDceSEhkcbhxcbhmcbhDcbhicbhlindnaoaq9nmbc9:hoxikdndnawRbbgrc;Ve0mbavc;abfalarcl4cu7fcsGcitfgPydlhsaPydbhzdnarcsGgPak9pmbavaiarcu7fcsGcdtfydbaxaPEhraPThPdndnadcd9hmbabaDcetfgHaz87ebaHcdfas87ebaHclfar87ebxekabaDcdtfgHazBdbaHclfasBdbaHcwfarBdbkaxaPfhxavc;abfalcitfgHarBdbaHasBdlavaicdtfarBdbavc;abfalcefcsGglcitfgHazBdbaHarBdlaiaPfhialcefhlxdkdndnaPcsSmbamaPfaPc987fcefhmxekaocefhrao8SbbgPcFeGhHdndnaPcu9mmbarhoxekaocvfhoaHcFbGhHcrhPdninar8SbbgOcFbGaPtaHVhHaOcu9kmearcefhraPcrfgPc8J9hmbxdkkarcefhokaHce4cbaHceG9R7amfhmkdndnadcd9hmbabaDcetfgraz87ebarcdfas87ebarclfam87ebxekabaDcdtfgrazBdbarclfasBdbarcwfamBdbkavc;abfalcitfgramBdbarasBdlavaicdtfamBdbavc;abfalcefcsGglcitfgrazBdbaramBdlaicefhialcefhlxekdnarcpe0mbaxcefgOavaiaqarcsGfRbbgPcl49RcsGcdtfydbaPcz6gHEhravaiaP9RcsGcdtfydbaOaHfgsaPcsGgOEhPaOThOdndnadcd9hmbabaDcetfgzax87ebazcdfar87ebazclfaP87ebxekabaDcdtfgzaxBdbazclfarBdbazcwfaPBdbkavaicdtfaxBdbavc;abfalcitfgzarBdbazaxBdlavaicefgicsGcdtfarBdbavc;abfalcefcsGcitfgzaPBdbazarBdlavaiaHfcsGgicdtfaPBdbavc;abfalcdfcsGglcitfgraxBdbaraPBdlalcefhlaiaOfhiasaOfhxxekaxcbaoRbbgzEgAarc;:eSgrfhsazcsGhCazcl4hXdndnazcs0mbascefhOxekashOavaiaX9RcsGcdtfydbhskdndnaCmbaOcefhxxekaOhxavaiaz9RcsGcdtfydbhOkdndnarTmbaocefhrxekaocdfhrao8SbegHcFeGhPdnaHcu9kmbaocofhAaPcFbGhPcrhodninar8SbbgHcFbGaotaPVhPaHcu9kmearcefhraocrfgoc8J9hmbkaAhrxekarcefhrkaPce4cbaPceG9R7amfgmhAkdndnaXcsSmbarhPxekarcefhPar8SbbgocFeGhHdnaocu9kmbarcvfhsaHcFbGhHcrhodninaP8SbbgrcFbGaotaHVhHarcu9kmeaPcefhPaocrfgoc8J9hmbkashPxekaPcefhPkaHce4cbaHceG9R7amfgmhskdndnaCcsSmbaPhoxekaPcefhoaP8SbbgrcFeGhHdnarcu9kmbaPcvfhOaHcFbGhHcrhrdninao8SbbgPcFbGartaHVhHaPcu9kmeaocefhoarcrfgrc8J9hmbkaOhoxekaocefhokaHce4cbaHceG9R7amfgmhOkdndnadcd9hmbabaDcetfgraA87ebarcdfas87ebarclfaO87ebxekabaDcdtfgraABdbarclfasBdbarcwfaOBdbkavc;abfalcitfgrasBdbaraABdlavaicdtfaABdbavc;abfalcefcsGcitfgraOBdbarasBdlavaicefgicsGcdtfasBdbavc;abfalcdfcsGcitfgraABdbaraOBdlavaiazcz6aXcsSVfgicsGcdtfaOBdbaiaCTaCcsSVfhialcifhlkawcefhwalcsGhlaicsGhiaDcifgDae6mbkkcbc99aoaqSEhokavc;aef8Kjjjjbaok:llevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:Lvoeue99dud99eud99dndnadcl9hmbaeTmeindndnabcdfgd8Sbb:Yab8Sbbgi:Ygl:l:tabcefgv8Sbbgo:Ygr:l:tgwJbb;:9cawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai86bbdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad86bbdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad86bbabclfhbaecufgembxdkkaeTmbindndnabclfgd8Ueb:Yab8Uebgi:Ygl:l:tabcdfgv8Uebgo:Ygr:l:tgwJb;:FSawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai87ebdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad87ebdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad87ebabcwfhbaecufgembkkk;siliui99iue99dnaeTmbcbhiabhlindndnJ;Zl81Zalcof8UebgvciV:Y:vgoal8Ueb:YNgrJb;:FSNJbbbZJbbb:;arJbbbb9GEMgw:lJbbb9p9DTmbaw:OhDxekcjjjj94hDkalclf8Uebhqalcdf8UebhkabavcefciGaiVcetfaD87ebdndnaoak:YNgwJb;:FSNJbbbZJbbb:;awJbbbb9GEMgx:lJbbb9p9DTmbax:Ohkxekcjjjj94hkkabavcdfciGaiVcetfak87ebdndnaoaq:YNgoJb;:FSNJbbbZJbbb:;aoJbbbb9GEMgx:lJbbb9p9DTmbax:Ohqxekcjjjj94hqkabavcufciGaiVcetfaq87ebdndnJbbjZararN:tawawN:taoaoN:tgrJbbbbarJbbbb9GE:rJb;:FSNJbbbZMgr:lJbbb9p9DTmbar:Ohqxekcjjjj94hqkabavciGaiVcetfaq87ebalcwfhlaiclfhiaecufgembkkk9mbdnadcd4ae2geTmbinababydbgdcwtcw91:Yadce91cjjj;8ifcjjj98G::NUdbabclfhbaecufgembkkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik;LeeeudndnaeabVciGTmbabhixekdndnadcz9pmbabhixekabhiinaiaeydbBdbaiclfaeclfydbBdbaicwfaecwfydbBdbaicxfaecxfydbBdbaiczfhiaeczfheadc9Wfgdcs0mbkkadcl6mbinaiaeydbBdbaeclfheaiclfhiadc98fgdci0mbkkdnadTmbinaiaeRbb86bbaicefhiaecefheadcufgdmbkkabk;aeedudndnabciGTmbabhixekaecFeGc:b:c:ew2hldndnadcz9pmbabhixekabhiinaialBdbaicxfalBdbaicwfalBdbaiclfalBdbaiczfhiadc9Wfgdcs0mbkkadcl6mbinaialBdbaiclfhiadc98fgdci0mbkkdnadTmbinaiae86bbaicefhiadcufgdmbkkabkkkebcjwklz9Kbb",t="b9H79TebbbeKl9Gbb9Gvuuuuueu9Giuuub9Geueuikqbbebeedddilve9Weeeviebeoweuec:q;Aekr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbdY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVblE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtboK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbrL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbwl79IV9RbDq;t9tqlbzik9:evu8Jjjjjbcz9Rhbcbheincbhdcbhiinabcwfadfaicjuaead4ceGglE86bbaialfhiadcefgdcw9hmbkaec:q:yjjbfai86bbaecitc:q1jjbfab8Piw83ibaecefgecjd9hmbkk;h8JlHud97euo978Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Rad;8qbbcj;abad9UhoaicefhldnadTmbaoc;WFbGgocjdaocjd6EhwcbhDinaDae9pmeawaeaD9RaDawfae6Egqcsfgoc9WGgkci2hxakcethmaocl4cifcd4hPabaDad2fhscbhzdnincehHalhOcbhAdninaraO9RaP6miavcj;cbfaAak2fhCaOaPfhlcbhidnakc;ab6mbaral9Rc;Gb6mbcbhoinaCaofhidndndndndnaOaoco4fRbbgXciGPlbedibkaipxbbbbbbbbbbbbbbbbpklbxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklbalczfhlkdndndndndnaXcd4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklzxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklzalczfhlkdndndndndnaXcl4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklaxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklaalczfhlkdndndndndnaXco4Plbedibkaipxbbbbbbbbbbbbbbbbpkl8WxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WalclfaYpQbfaXc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WalcwfaYpQbfaXc:q:yjjbfRbbfhlxekaialpbbbpkl8Walczfhlkaoc;abfhiaocjefak0meaihoaral9Rc;Fb0mbkkdndnaiak9pmbaici4hoinaral9RcK6mdaCaifhXdndndndndnaOaico4fRbbaocoG4ciGPlbedibkaXpxbbbbbbbbbbbbbbbbpklbxikaXalpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaXalpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaXalpbbbpklbalczfhlkaocdfhoaiczfgiak6mbkkalTmbaAci6hHalhOaAcefgohAaoclSmdxekkcbhlaHceGmdkdnakTmbavcjdfazfhiavazfpbdbhYcbhXinaiavcj;cbfaXfgopblbgLcep9TaLpxeeeeeeeeeeeeeeeegQp9op9Hp9rgLaoakfpblbg8Acep9Ta8AaQp9op9Hp9rg8ApmbzeHdOiAlCvXoQrLgEaoamfpblbg3cep9Ta3aQp9op9Hp9rg3aoaxfpblbg5cep9Ta5aQp9op9Hp9rg5pmbzeHdOiAlCvXoQrLg8EpmbezHdiOAlvCXorQLgQaQpmbedibedibedibediaYp9UgYp9AdbbaiadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaEa8EpmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaLa8ApmwKDYq8AkEx3m5P8Es8FgLa3a5pmwKDYq8AkEx3m5P8Es8Fg8ApmbezHdiOAlvCXorQLgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaLa8ApmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfhiaXczfgXak6mbkkazclfgzad6mbkasavcjdfaqad2;8qbbavavcjdfaqcufad2fad;8qbbaqaDfhDc9:hoalmexikkc9:hoxekcbc99aral9Radcaadca0ESEhokavcj;kbf8Kjjjjbaokwbz:bjjjbk;uzeHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecje;8kbavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhodnaeTmbcmcsaDceSEhkcbhxcbhmcbhDcbhicbhlindnaoaq9nmbc9:hoxikdndnawRbbgrc;Ve0mbavc;abfalarcl4cu7fcsGcitfgPydlhsaPydbhzdnarcsGgPak9pmbavaiarcu7fcsGcdtfydbaxaPEhraPThPdndnadcd9hmbabaDcetfgHaz87ebaHcdfas87ebaHclfar87ebxekabaDcdtfgHazBdbaHclfasBdbaHcwfarBdbkaxaPfhxavc;abfalcitfgHarBdbaHasBdlavaicdtfarBdbavc;abfalcefcsGglcitfgHazBdbaHarBdlaiaPfhialcefhlxdkdndnaPcsSmbamaPfaPc987fcefhmxekaocefhrao8SbbgPcFeGhHdndnaPcu9mmbarhoxekaocvfhoaHcFbGhHcrhPdninar8SbbgOcFbGaPtaHVhHaOcu9kmearcefhraPcrfgPc8J9hmbxdkkarcefhokaHce4cbaHceG9R7amfhmkdndnadcd9hmbabaDcetfgraz87ebarcdfas87ebarclfam87ebxekabaDcdtfgrazBdbarclfasBdbarcwfamBdbkavc;abfalcitfgramBdbarasBdlavaicdtfamBdbavc;abfalcefcsGglcitfgrazBdbaramBdlaicefhialcefhlxekdnarcpe0mbaxcefgOavaiaqarcsGfRbbgPcl49RcsGcdtfydbaPcz6gHEhravaiaP9RcsGcdtfydbaOaHfgsaPcsGgOEhPaOThOdndnadcd9hmbabaDcetfgzax87ebazcdfar87ebazclfaP87ebxekabaDcdtfgzaxBdbazclfarBdbazcwfaPBdbkavaicdtfaxBdbavc;abfalcitfgzarBdbazaxBdlavaicefgicsGcdtfarBdbavc;abfalcefcsGcitfgzaPBdbazarBdlavaiaHfcsGgicdtfaPBdbavc;abfalcdfcsGglcitfgraxBdbaraPBdlalcefhlaiaOfhiasaOfhxxekaxcbaoRbbgzEgAarc;:eSgrfhsazcsGhCazcl4hXdndnazcs0mbascefhOxekashOavaiaX9RcsGcdtfydbhskdndnaCmbaOcefhxxekaOhxavaiaz9RcsGcdtfydbhOkdndnarTmbaocefhrxekaocdfhrao8SbegHcFeGhPdnaHcu9kmbaocofhAaPcFbGhPcrhodninar8SbbgHcFbGaotaPVhPaHcu9kmearcefhraocrfgoc8J9hmbkaAhrxekarcefhrkaPce4cbaPceG9R7amfgmhAkdndnaXcsSmbarhPxekarcefhPar8SbbgocFeGhHdnaocu9kmbarcvfhsaHcFbGhHcrhodninaP8SbbgrcFbGaotaHVhHarcu9kmeaPcefhPaocrfgoc8J9hmbkashPxekaPcefhPkaHce4cbaHceG9R7amfgmhskdndnaCcsSmbaPhoxekaPcefhoaP8SbbgrcFeGhHdnarcu9kmbaPcvfhOaHcFbGhHcrhrdninao8SbbgPcFbGartaHVhHaPcu9kmeaocefhoarcrfgrc8J9hmbkaOhoxekaocefhokaHce4cbaHceG9R7amfgmhOkdndnadcd9hmbabaDcetfgraA87ebarcdfas87ebarclfaO87ebxekabaDcdtfgraABdbarclfasBdbarcwfaOBdbkavc;abfalcitfgrasBdbaraABdlavaicdtfaABdbavc;abfalcefcsGcitfgraOBdbarasBdlavaicefgicsGcdtfasBdbavc;abfalcdfcsGcitfgraABdbaraOBdlavaiazcz6aXcsSVfgicsGcdtfaOBdbaiaCTaCcsSVfhialcifhlkawcefhwalcsGhlaicsGhiaDcifgDae6mbkkcbc99aoaqSEhokavc;aef8Kjjjjbaok:llevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:EPliuo97eue978Jjjjjbca9Rhidndnadcl9hmbdnaec98GglTmbcbhvabhdinadadpbbbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDpxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpkbbadczfhdavclfgval6mbkkalae9pmeaiaeciGgvcdtgdVcbczad9R;8kbaiabalcdtfglad;8qbbdnavTmbaiaipblbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDpxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpklbkalaiad;8qbbskdnaec98GgxTmbcbhvabhdinadczfglalpbbbgopxbbbbbbFFbbbbbbFFgkp9oadpbbbgDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eaDaopmbediwDqkzHOAKY8AEgoczp:Sep;6egrp;Geaoczp:Reczp:Sep;6egwp;Gep;Kep;Legopxb;:FSb;:FSb;:FSb;:FSawaopxbbbbbbbbbbbbbbbbp:2egqawpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegwawp;Meaoaop;Mearaqaramp9op9rp;Kegoaop;Mep;Kep;Kep;Jep;Negrp;Mepxbbn0bbn0bbn0bbn0gqp;Keczp:Reawarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9op9qgwaoarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogopmwDKYqk8AExm35Ps8E8Fp9qpkbbadaDakp9oawaopmbezHdiOAlvCXorQLp9qpkbbadcafhdavclfgvax6mbkkaxae9pmbaiaeciGgvcitgdfcbcaad9R;8kbaiabaxcitfglad;8qbbdnavTmbaiaipblzgopxbbbbbbFFbbbbbbFFgkp9oaipblbgDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eaDaopmbediwDqkzHOAKY8AEgoczp:Sep;6egrp;Geaoczp:Reczp:Sep;6egwp;Gep;Kep;Legopxb;:FSb;:FSb;:FSb;:FSawaopxbbbbbbbbbbbbbbbbp:2egqawpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegwawp;Meaoaop;Mearaqaramp9op9rp;Kegoaop;Mep;Kep;Kep;Jep;Negrp;Mepxbbn0bbn0bbn0bbn0gqp;Keczp:Reawarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9op9qgwaoarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogopmwDKYqk8AExm35Ps8E8Fp9qpklzaiaDakp9oawaopmbezHdiOAlvCXorQLp9qpklbkalaiad;8qbbkk;4wllue97euv978Jjjjjbc8W9Rhidnaec98GglTmbcbhvabhoinaiaopbbbgraoczfgwpbbbgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklbaopxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaqakp;Mearp;Keczp:ReaDakp;Mearp;Keamp9op9qgkpmbezHdiOAlvCXorQLgrp5baipblbpEb:T:j83ibaocwfarp5eaipblbpEe:T:j83ibawaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblbpEd:T:j83ibaocKfakp5eaipblbpEi:T:j83ibaocafhoavclfgval6mbkkdnalae9pmbaiaeciGgvcitgofcbcaao9R;8kbaiabalcitfgwao;8qbbdnavTmbaiaipblbgraipblzgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklaaipxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaqakp;Mearp;Keczp:ReaDakp;Mearp;Keamp9op9qgkpmbezHdiOAlvCXorQLgrp5baipblapEb:T:j83ibaiarp5eaipblapEe:T:j83iwaiaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblapEd:T:j83izaiakp5eaipblapEi:T:j83iKkawaiao;8qbbkk:Pddiue978Jjjjjbc;ab9Rhidnadcd4ae2glc98GgvTmbcbhdabheinaeaepbbbgocwp:Recwp:Sep;6eaocep:SepxbbjZbbjZbbjZbbjZp:UepxbbjFbbjFbbjFbbjFp9op;Mepkbbaeczfheadclfgdav6mbkkdnaval9pmbaialciGgdcdtgeVcbc;abae9R;8kbaiabavcdtfgvae;8qbbdnadTmbaiaipblbgocwp:Recwp:Sep;6eaocep:SepxbbjZbbjZbbjZbbjZp:UepxbbjFbbjFbbjFbbjFp9op;Mepklbkavaiae;8qbbkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaikkkebcjwklz9Tbb",e=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,3,2,0,0,5,3,1,0,1,12,1,0,10,22,2,12,0,65,0,65,0,65,0,252,10,0,0,11,7,0,65,0,253,15,26,11]),n=new Uint8Array([32,0,65,2,1,106,34,33,3,128,11,4,13,64,6,253,10,7,15,116,127,5,8,12,40,16,19,54,20,9,27,255,113,17,42,67,24,23,146,148,18,14,22,45,70,69,56,114,101,21,25,63,75,136,108,28,118,29,73,115]);if(typeof WebAssembly!="object")return{supported:!1};var i=WebAssembly.validate(e)?t:s,r,a=WebAssembly.instantiate(o(i),{}).then(function(p){r=p.instance,r.exports.__wasm_call_ctors()});function o(p){for(var v=new Uint8Array(p.length),_=0;_<p.length;++_){var x=p.charCodeAt(_);v[_]=x>96?x-97:x>64?x-39:x+4}for(var C=0,_=0;_<p.length;++_)v[C++]=v[_]<60?n[v[_]]:(v[_]-60)*64+v[++_];return v.buffer.slice(0,C)}function c(p,v,_,x,C,w){var E=r.exports.sbrk,L=_+3&-4,M=E(L*x),y=E(C.length),P=new Uint8Array(r.exports.memory.buffer);P.set(C,y);var D=p(M,_,x,y,C.length);if(D==0&&w&&w(M,L,x),v.set(P.subarray(M,M+_*x)),E(M-E(0)),D!=0)throw new Error("Malformed buffer data: "+D)}var l={NONE:"",OCTAHEDRAL:"meshopt_decodeFilterOct",QUATERNION:"meshopt_decodeFilterQuat",EXPONENTIAL:"meshopt_decodeFilterExp"},h={ATTRIBUTES:"meshopt_decodeVertexBuffer",TRIANGLES:"meshopt_decodeIndexBuffer",INDICES:"meshopt_decodeIndexSequence"},u=[],f=0;function d(p){var v={object:new Worker(p),pending:0,requests:{}};return v.object.onmessage=function(_){var x=_.data;v.pending-=x.count,v.requests[x.id][x.action](x.value),delete v.requests[x.id]},v}function b(p){for(var v="var instance; var ready = WebAssembly.instantiate(new Uint8Array(["+new Uint8Array(o(i))+"]), {}).then(function(result) { instance = result.instance; instance.exports.__wasm_call_ctors(); });self.onmessage = workerProcess;"+c.toString()+g.toString(),_=new Blob([v],{type:"text/javascript"}),x=URL.createObjectURL(_),C=0;C<p;++C)u[C]=d(x);URL.revokeObjectURL(x)}function m(p,v,_,x,C){for(var w=u[0],E=1;E<u.length;++E)u[E].pending<w.pending&&(w=u[E]);return new Promise(function(L,M){var y=new Uint8Array(_),P=f++;w.pending+=p,w.requests[P]={resolve:L,reject:M},w.object.postMessage({id:P,count:p,size:v,source:y,mode:x,filter:C},[y.buffer])})}function g(p){a.then(function(){var v=p.data;try{var _=new Uint8Array(v.count*v.size);c(r.exports[v.mode],_,v.count,v.size,v.source,r.exports[v.filter]),self.postMessage({id:v.id,count:v.count,action:"resolve",value:_},[_.buffer])}catch(x){self.postMessage({id:v.id,count:v.count,action:"reject",value:x})}})}return{ready:a,supported:!0,useWorkers:function(p){b(p)},decodeVertexBuffer:function(p,v,_,x,C){c(r.exports.meshopt_decodeVertexBuffer,p,v,_,x,r.exports[l[C]])},decodeIndexBuffer:function(p,v,_,x){c(r.exports.meshopt_decodeIndexBuffer,p,v,_,x)},decodeIndexSequence:function(p,v,_,x){c(r.exports.meshopt_decodeIndexSequence,p,v,_,x)},decodeGltfBuffer:function(p,v,_,x,C,w){c(r.exports[h[C]],p,v,_,x,r.exports[l[w]])},decodeGltfBufferAsync:function(p,v,_,x,C){return u.length>0?m(p,v,_,h[x],l[C]):a.then(function(){var w=new Uint8Array(p*v);return c(r.exports[h[x]],w,p,v,_,r.exports[l[C]]),w})}}})();function Kv(s){return new Worker(""+new URL("buildings.worker-7-lusyc3.js",import.meta.url).href,{name:s?.name})}const Ta={uNight:{value:0},uWet:{value:0}};function Yv(){const s=new ce({vertexColors:!0});return s.onBeforeCompile=t=>{t.uniforms.uNight=Ta.uNight,t.uniforms.uWet=Ta.uWet,t.vertexShader=t.vertexShader.replace("#include <common>",`#include <common>
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
  totalEmissiveRadiance += glow;`)},s}const xa=new R(-.78,.2,.59).normalize();class dl{constructor(t,e,n,i,r){this.meta=t,this.ground=e,this.buildings=n,this.trees=i,this.roads=r,this.H=(a,o)=>{const c=this.meta.grid,l=Math.min(Math.max((a-c.x0)/c.step,0),c.nx-1.001),h=Math.min(Math.max((o-c.z0)/c.step,0),c.nz-1.001),u=Math.floor(l),f=Math.floor(h),d=l-u,b=h-f,m=(g,p)=>this.ground.getInt16(((f+p)*c.nx+u+g)*2,!0)/100;return(m(0,0)*(1-d)+m(1,0)*d)*(1-b)+(m(0,1)*(1-d)+m(1,1)*d)*b}}static async load(t,e){let n=0;const i=h=>h.then(u=>(e(++n/5),u)),[r,a,o,c,l]=await Promise.all([i(fetch(t+"data/meta.json").then(h=>h.json())),i(fetch(t+"data/ground.bin").then(h=>h.arrayBuffer())),i(fetch(t+"data/buildings.bin").then(h=>h.arrayBuffer())),i(fetch(t+"data/trees.bin").then(h=>h.arrayBuffer())),i(fetch(t+"data/roads.json").then(h=>h.json()))]);return new dl(r,new DataView(a),o,new DataView(c),l)}kind(t,e){const n=this.meta.grid,i=Math.round((t-n.x0)/n.step),r=Math.round((e-n.z0)/n.step);return i<0||r<0||i>=n.nx||r>=n.nz?1:this.ground.getUint8(n.nx*n.nz*2+r*n.nx+i)}}class Jv{constructor(t,e,n,i){this.scene=t,this.data=e,this.track=n,this.mobile=i,this.fine={x0:-1100,z0:-800,step:5,nx:301,nz:341},this.hash=new Map,this.skyMats=[],this.landmarks=new ee;const r=n.T;for(let a=0;a<r.n;a++){const o=`${Math.floor(r.x[a]/20)},${Math.floor(r.z[a]/20)}`;(this.hash.get(o)||this.hash.set(o,[]).get(o)).push(a)}this.hm=this.buildHeights()}nearest(t,e,n=!1){const i=this.track.T,r=Math.floor(t/20),a=Math.floor(e/20);let o=-1,c=1e18;for(let l=1;l<=2&&o<0;l++)for(let h=-l;h<=l;h++)for(let u=-l;u<=l;u++){const f=this.hash.get(`${r+h},${a+u}`);if(f)for(const d of f){if(n&&i.flags[d]&De)continue;const b=(t-i.x[d])**2+(e-i.z[d])**2;b<c&&(c=b,o=d)}}return{i:o,d:Math.sqrt(c)}}buildHeights(){const t=this.fine,e=new Float32Array(t.nx*t.nz),n=this.track.T,i=n.tower,r=this.data;for(let a=0;a<t.nz;a++)for(let o=0;o<t.nx;o++){const c=t.x0+o*t.step,l=t.z0+a*t.step;let h=r.H(c,l);if(r.kind(c,l)===1){e[a*t.nx+o]=-3;continue}const u=Math.hypot(c-i.x,l-i.z);if(u<72){const d=au((u-40)/32);h=i.y0*(1-d)+h*d}const f=this.nearest(c,l,!0);if(f.i>=0){const d=n.w[f.i]/2+2.6,b=au((f.d-d)/20);h=(n.y[f.i]-.3)*(1-b)+h*b}e[a*t.nx+o]=Math.max(.6,h)}return e}hAt(t,e){const n=this.fine,i=Math.min(Math.max((t-n.x0)/n.step,0),n.nx-1.001),r=Math.min(Math.max((e-n.z0)/n.step,0),n.nz-1.001),a=Math.floor(i),o=Math.floor(r),c=i-a,l=r-o,h=this.hm,u=n.nx;return(h[o*u+a]*(1-c)+h[o*u+a+1]*c)*(1-l)+(h[(o+1)*u+a]*(1-c)+h[(o+1)*u+a+1]*c)*l}async build(t){const e=()=>new Promise(a=>setTimeout(a,0));this.buildSky(),this.buildSea(),this.buildTerrain(),t("Sokaklar çiziliyor…",.12),await e(),this.buildRoads(),this.buildTrees(),t("Binalar yükseliyor…",.22),await e();let n=0,i=0;const r=()=>t(i<1?"Binalar yükseliyor… ":"Galata Kulesi yerleşiyor…",.22+i*.68+n*.1);await Promise.all([this.buildBuildings(a=>{i=a,r()}),this.loadLandmarks(a=>{n=a,r()})])}buildSky(){const t=new Ce(1800,40,20),e=new an({side:Je,depthWrite:!1,fog:!1,uniforms:{sun:{value:xa},rain:{value:0}},vertexShader:"varying vec3 vP; void main(){ vP = normalize(position); vec4 p = projectionMatrix * modelViewMatrix * vec4(position,1.0); gl_Position = p.xyww; }",fragmentShader:`uniform vec3 sun; uniform float rain; varying vec3 vP;
        void main(){
          float h = vP.y; float s = max(0.0, dot(normalize(vP), sun));
          vec3 top = vec3(0.20, 0.27, 0.55), mid = vec3(0.56, 0.52, 0.78), low = vec3(0.98, 0.66, 0.55), hor = vec3(1.0, 0.80, 0.55);
          vec3 c = mix(low, mid, smoothstep(0.02, 0.22, h)); c = mix(c, top, smoothstep(0.22, 0.75, h));
          c = mix(c, hor, smoothstep(0.08, -0.02, h) * 0.8);
          c += vec3(1.0, 0.55, 0.25) * pow(s, 6.0) * 0.55 + vec3(1.0, 0.85, 0.6) * pow(s, 90.0) * 1.2;
          if (h < -0.02) c = mix(hor, vec3(0.55, 0.5, 0.7), smoothstep(-0.02, -0.2, h));
          c = mix(c, vec3(0.47, 0.5, 0.6) * (0.85 + 0.25 * h), rain * 0.88);
          gl_FragColor = vec4(c, 1.0);
        }`});this.skyMats.push(e),this.sky=new at(t,e),this.sky.renderOrder=-10,this.sky.frustumCulled=!1,this.scene.add(this.sky);const n=[];let i=11;const r=()=>(i=i*16807%2147483647)/2147483647;for(let c=0;c<26;c++){const l=r()*Math.PI*2,h=900+r()*500,u=160+r()*260,f=Math.cos(l)*h,d=Math.sin(l)*h,b=40+r()*50;for(let m=0;m<6;m++){const g=new Ce(b*(.6+r()*.6),9,6);g.scale(1.7,.55,1.1),g.translate(f+(m-3)*b*.8,u+r()*b*.3,d+(r()-.5)*b),n.push(g)}}const a=new an({fog:!1,uniforms:{sun:{value:xa},rain:{value:0}},vertexShader:"varying vec3 vN; varying vec3 vW; void main(){ vN = normalize(mat3(modelMatrix) * normal); vW = (modelMatrix * vec4(position,1.0)).xyz; gl_Position = projectionMatrix * viewMatrix * vec4(vW,1.0); }",fragmentShader:"uniform vec3 sun; uniform float rain; varying vec3 vN; varying vec3 vW; void main(){ float l = dot(vN, sun) * 0.5 + 0.5; float t = step(0.55, l) * 0.5 + step(0.8, l) * 0.5; vec3 c = mix(vec3(0.62, 0.55, 0.80), vec3(1.0, 0.72, 0.62), t); c = mix(c, vec3(1.0, 0.9, 0.75), step(0.93, l) * 0.6); c = mix(c, mix(vec3(0.36, 0.38, 0.47), vec3(0.56, 0.58, 0.66), t), rain); gl_FragColor = vec4(c, 1.0); }"});this.skyMats.push(a);const o=new at($n(n),a);o.renderOrder=-9,this.scene.add(o)}buildSea(){const t=new on(6e3,6e3,1,1);t.rotateX(-Math.PI/2);const e=new an({fog:!0,uniforms:{t:{value:0},sun:{value:xa},fogColor:{value:new ot},fogNear:{value:1},fogFar:{value:1e3}},vertexShader:`#include <fog_pars_vertex>
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
        }`});this.sea=new at(t,e),this.sea.position.y=0,this.scene.add(this.sea)}buildTerrain(){const t=this.fine,e=this.data,n=new on((t.nx-1)*t.step,(t.nz-1)*t.step,t.nx-1,t.nz-1);n.rotateX(-Math.PI/2),n.translate(t.x0+(t.nx-1)*t.step/2,0,t.z0+(t.nz-1)*t.step/2);const i=n.attributes.position,r=new Float32Array(i.count*3),a=new ot,o=new ot(14210788),c=new ot(11131048),l=new ot(15329006),h=new ot(15260872);for(let f=0;f<i.count;f++){const d=i.getX(f),b=i.getZ(f),m=Math.round((d-t.x0)/t.step),g=Math.round((b-t.z0)/t.step),p=this.hm[g*t.nx+m];i.setY(f,p);const v=e.kind(d,b);a.copy(v===2?c:v===3?l:o),p<2.2&&v!==1&&a.lerp(h,.35),r.set([a.r,a.g,a.b],f*3)}n.setAttribute("color",new fe(r,3)),n.computeVertexNormals();const u=new at(n,new ce({vertexColors:!0}));u.receiveShadow=!0,this.scene.add(u)}buildRoads(){const t=[],e=[],n=this.track.T;for(const[o,c,l]of this.data.roads){const h=Math.max(3,c)/2;for(let u=0;u+3<l.length;u+=2){const f=l[u],d=l[u+1],b=l[u+2],m=l[u+3],g=Math.hypot(b-f,m-d);if(g<.5)continue;const p=Math.ceil(g/4),v=(b-f)/g,_=(m-d)/g,x=-_*h,C=v*h;for(let w=0;w<p;w++){const E=f+v*(g*w/p),L=d+_*(g*w/p),M=f+v*(g*(w+1)/p),y=d+_*(g*(w+1)/p),P=(E+M)/2,D=(L+y)/2,N=this.nearest(P,D);if(N.i>=0&&N.d<n.w[N.i]/2+h+1.5&&!(n.flags[N.i]&De)||this.data.kind(P,D)===1)continue;const O=t.length/3,W=(z,Z)=>this.hAt(z,Z)+.07;t.push(E-x,W(E-x,L-C),L-C,E+x,W(E+x,L+C),L+C,M+x,W(M+x,y+C),y+C,M-x,W(M-x,y-C),y-C),e.push(O,O+1,O+2,O,O+2,O+3)}}}const i=new ve;i.setAttribute("position",new se(t,3)),i.setIndex(e),i.computeVertexNormals();const r=i.attributes.normal;for(let o=0;o<r.count;o++)r.getY(o)<0&&r.setXYZ(o,-r.getX(o),-r.getY(o),-r.getZ(o));const a=new at(i,new ce({color:9080750,side:Ue,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1}));a.receiveShadow=!0,this.scene.add(a)}buildTrees(){const t=this.data,e=[];for(let m=0;m+10<=t.trees.byteLength;m+=10)e.push([t.trees.getFloat32(m,!0),t.trees.getFloat32(m+4,!0),t.trees.getUint8(m+8)/100]);const n=this.track.T;let i=5;const r=()=>(i=i*16807%2147483647)/2147483647;for(let m=0;m<n.n;m+=13){if(n.flags[m]&(De|2))continue;const g=r()<.5?-1:1,p=g*(n.w[m]/2+5+r()*3);e.push([n.x[m]-n.tz[m]*p,n.z[m]+n.tx[m]*p,1])}const a=e.filter(([m,g])=>{const p=this.nearest(m,g);return!(p.i>=0&&p.d<n.w[p.i]/2+3.2)&&this.data.kind(m,g)!==1}),o=$n([0,1,2,3].map(m=>{const g=new ol(1,0),p=m*2.1;return g.scale(m===3?1.1:.85,m===3?.95:.8,m===3?1.1:.85),g.translate(m===3?0:Math.cos(p)*.8,m===3?.9:.35,m===3?0:Math.sin(p)*.8),g})),c=new Se(.16,.26,3.2,6);c.translate(0,1.6,0);const l=new Ve(o,new ce({color:16777215,flatShading:!0}),a.length),h=new Ve(c,new ce({color:9071194}),a.length),u=new Nt,f=new Ye,d=new ot,b=[6273139,7127674,5220458,8047491];a.forEach(([m,g,p],v)=>{const _=(1.6+r()*.9)*Math.max(.8,Math.min(1.4,p||1)),x=this.hAt(m,g);f.setFromAxisAngle(new R(0,1,0),r()*6),u.compose(new R(m,x+2.6+_*.6,g),f,new R(_,_,_)),l.setMatrixAt(v,u),u.compose(new R(m,x,g),f,new R(1,.8+_*.15,1)),h.setMatrixAt(v,u),l.setColorAt(v,d.setHex(b[v%4]))}),l.castShadow=!0,h.castShadow=!0,l.receiveShadow=!0,this.scene.add(l,h)}buildBuildings(t){const e=this.data,n=this.track.T,i=new Float32Array(n.n*3),r=n.tower;let a=0;for(let d=0;d<n.n;d+=2)i[a*3]=n.x[d],i[a*3+1]=n.z[d],i[a*3+2]=n.w[d]/2+3.5+(n.flags[d]&De?2:0),a++;for(let d=0;d<24;d++){const b=d/24*Math.PI*2;for(const m of[8,22,34]){if(a*3+2>=i.length)break;i[a*3]=r.x+Math.cos(b)*m,i[a*3+1]=r.z+Math.sin(b)*m,i[a*3+2]=14,a++}}const o=this.fine,c=this.worker=new Kv;c.postMessage({type:"init",buf:e.buildings,index:e.meta.chunks,palette:e.meta.palette,keep:{gx0:o.x0,gz0:o.z0,step:o.step,nx:o.nx,nz:o.nz,h:this.hm,trk:i.subarray(0,a*3)}});const l=Yv();Ta.uNight.value=.42;const h=e.meta.chunks.map((d,b)=>({ci:b,cx:(d[0]+.5)*e.meta.chunk,cz:(d[1]+.5)*e.meta.chunk})),u=(d,b)=>{let m=1e9;for(let g=0;g<n.n;g+=20)m=Math.min(m,Math.hypot(d-n.x[g],b-n.z[g]));return m<(this.mobile?160:230)?m<90&&!this.mobile?0:1:2};let f=h.length;return new Promise(d=>{c.onmessage=b=>{const m=b.data;if(m.pos.length){const g=new ve;g.setAttribute("position",new fe(m.pos,3)),g.setAttribute("normal",new fe(m.nor,3)),g.setAttribute("color",new fe(m.col,3)),g.setAttribute("fac",new fe(m.fac,4)),g.computeBoundingSphere();const p=new at(g,l);p.matrixAutoUpdate=!1,p.castShadow=m.lod<2&&!this.mobile,p.receiveShadow=!0,this.scene.add(p)}t(1-(f-1)/h.length),--f===0&&(c.terminate(),d())};for(const b of h)c.postMessage({type:"build",id:b.ci,chunk:b.ci,lod:u(b.cx,b.cz)})})}async loadLandmarks(t){const e=new fv().setMeshoptDecoder(Xv),n=new ce({vertexColors:!0,side:Ue});for(const i of this.data.meta.landmarks){try{const r=await e.loadAsync(`./models/${i.model}`),a=r.scene.getObjectByName("LOD0")||r.scene;a.traverse(c=>{const l=c;if(l.isMesh&&(l.material=n,l.castShadow=!0,l.receiveShadow=!0,!l.geometry.getAttribute("color"))){const h=new Float32Array(l.geometry.attributes.position.count*3).fill(.85);l.geometry.setAttribute("color",new fe(h,3))}});const o=i.id==="galata"?this.track.T.tower.y0-.2:this.hAt(i.x,i.z)-.3;a.position.set(i.x,o,i.z),a.rotation.y=i.ry,a.scale.setScalar(i.s),this.landmarks.add(a)}catch(r){console.warn("model",i.id,r)}t((this.data.meta.landmarks.indexOf(i)+1)/this.data.meta.landmarks.length)}this.scene.add(this.landmarks)}update(t){this.sea.material.uniforms.t.value=t}}function au(s){const t=Math.min(1,Math.max(0,s));return t*t*(3-2*t)}const Cs=[{id:"marti",name:"Martı",color:9357807,accent:15906891,blurb:"Simit kapmada usta",stats:[3,4,4]},{id:"kedi",name:"Sokak Kedisi",color:16029582,accent:15967834,blurb:"Dar sokakların kralı",stats:[3,3,5]},{id:"simitci",name:"Simitçi",color:16242548,accent:14242639,blurb:"Tablası hiç düşmez",stats:[4,4,3]},{id:"kaptan",name:"Vapur Kaptanı",color:8824540,accent:3099502,blurb:"Boğaz’ın eski kurdu",stats:[5,3,3]},{id:"balikci",name:"Balıkçı",color:12956648,accent:16041008,blurb:"Oltası hep hazır",stats:[4,3,4]},{id:"tekir",name:"Tekir",color:10410422,accent:9407110,blurb:"Sessiz ve hızlı",stats:[2,5,4]}];let Do=null;function Zv(){if(Do)return Do;const s=new Uint8Array([90,170,255]),t=new $c(s,3,1,Ia);return t.minFilter=t.magFilter=je,t.needsUpdate=!0,Do=t}const ou=new Map;function Yt(s){let t=ou.get(s);return t||(t=new hf({color:s,gradientMap:Zv()}),ou.set(s,t)),t}function At(s,t,e,n=0,i=0,r=0,a=!0){const o=new at(t,Yt(e));return o.position.set(n,i,r),o.castShadow=a,s.add(o),o}const ye=(s,t=16,e=12)=>new Ce(s,t,e),sn=(s,t,e)=>new Re(s,t,e),$e=(s,t,e,n=14)=>new Se(s,t,e,n);function pl(s){const t=new ee,e=new ee;t.add(e);const n=s.color,i=4867670,r=16513008;At(e,sn(2.1,.32,1.25),n,0,.42,0);const a=At(e,sn(.8,.26,1),n,1.15,.4,0);a.rotation.z=-.12,At(e,sn(.25,.18,1.55),r,1.5,.34,0);for(const f of[-1,1])At(e,sn(1.1,.34,.28),n,-.05,.5,f*.72);At(e,sn(.62,.5,1),i,-.85,.7,0);for(const f of[-1,1]){const d=At(e,$e(.09,.11,.42,10),12170431,-1.2,.78,f*.28);d.rotation.z=Math.PI/2}At(e,sn(.2,.08,1.4),s.accent,-1.15,1.08,0);for(const f of[-1,1])At(e,sn(.12,.3,.08),i,-1.1,.93,f*.5);const o=At(e,sn(.5,.5,.75),s.accent,-.38,.75,0);o.rotation.z=.18;const c=At(e,new Pn(.2,.045,6,16),i,.42,.95,0);c.rotation.y=Math.PI/2,c.rotation.x=0,c.rotation.z=-.5;const l=[],h=[];for(const[f,d,b]of[[.78,.74,.3],[.78,-.74,.3],[-.72,.78,.36],[-.72,-.78,.36]]){const m=new ee;m.position.set(f,b,d),t.add(m);const g=new ee;m.add(g);const p=At(g,$e(b,b,b*.9,14),4012613);p.rotation.x=Math.PI/2;const v=At(g,$e(b*.5,b*.5,b*.92,10),r,0,0,0,!1);v.rotation.x=Math.PI/2,l.push(g),f>0&&h.push(m)}const u=new ee;return u.position.set(-.3,.9,0),e.add(u),Qv[s.id](u,s),{root:t,body:e,wheels:l,front:h,driver:u,exhaust:[new R(-1.45,.78,.28),new R(-1.45,.78,-.28)]}}const va=15978416,er=(s,t,e,n,i=.055)=>{for(const r of[-1,1])At(s,ye(i*1.7,10,8),16777215,t,e,r*n,!1),At(s,ye(i,8,6),2828339,t+i*.9,e,r*n,!1)},aa=(s,t,e=.36)=>{At(s,ye(e,14,10),t,0,.15,0).scale.set(.9,1.15,1)},Uo=(s,t)=>{for(const e of[-1,1]){const n=At(s,$e(.08,.08,.55,8),t,.3,.2,e*.3);n.rotation.z=-1.1,n.rotation.x=e*.25,At(s,ye(.09,8,6),t===16777215?13226200:va,.55,.06,e*.24,!1)}},Qv={marti(s){aa(s,16777215);for(const i of[-1,1]){const r=At(s,sn(.55,.08,.32),13226200,.15,.25,i*.36);r.rotation.z=-.5,r.rotation.x=i*.3}const t=new ee;t.position.set(.08,.72,0),s.add(t),At(t,ye(.3),16777215);const e=At(t,new vn(.1,.36,10),15906891,.4,-.04,0);e.rotation.z=-Math.PI/2,At(t,ye(.05,6,6),15029067,.5,-.09,0,!1),er(t,.2,.08,.15);const n=At(s,sn(.3,.06,.3),13226200,-.4,.1,0);n.rotation.z=.4},kedi(s){cu(s,15967834,16777215,!1)},tekir(s){cu(s,11117469,15328735,!0)},simitci(s){aa(s,16513008),At(s,ye(.37,14,10),14242639,0,.12,0).scale.set(.92,1.05,1.03),Uo(s,16513008);const e=new ee;e.position.set(.06,.72,0),s.add(e),At(e,ye(.28),va),er(e,.22,.06,.11,.04),At(e,ye(.06,8,6),15313292,.29,-.02,0,!1);const n=At(e,sn(.08,.06,.26),5913130,.27,-.09,0,!1);n.rotation.x=0;const i=At(e,$e(.25,.28,.14,16),16513008,0,.24,0);i.rotation.z=.1,At(e,$e(.55,.55,.06,20),11565903,0,.36,0);const r=new Pn(.13,.055,8,14);r.rotateX(Math.PI/2);for(let a=0;a<6;a++){const o=a/6*Math.PI*2;At(e,r,14259530,Math.cos(o)*.33,.42,Math.sin(o)*.33)}At(e,r,14259530,0,.48,0)},kaptan(s){aa(s,3099502),Uo(s,3099502);for(let r=0;r<3;r++)At(s,ye(.035,6,6),15909198,.33,.28-r*.12,.07,!1);const t=new ee;t.position.set(.06,.72,0),s.add(t),At(t,ye(.28),va),er(t,.22,.07,.11,.04),At(t,ye(.24,12,8),16052716,.1,-.14,0).scale.set(.8,.8,1.05),At(t,ye(.06,8,6),15313292,.29,0,0,!1),At(t,$e(.27,.27,.12,18),3099502,0,.22,0);const n=At(t,$e(.34,.28,.12,18),16513008,.02,.32,0);n.rotation.z=-.08,At(t,$e(.2,.2,.04,14),2828339,.22,.18,0).scale.set(1,1,1.3),At(t,ye(.05,6,6),15909198,.33,.24,0,!1)},balikci(s){aa(s,16041008),Uo(s,16041008);const t=new ee;t.position.set(.06,.72,0),s.add(t),At(t,ye(.28),va),er(t,.22,.06,.11,.04),At(t,ye(.23,12,8),10132131,.1,-.15,0).scale.set(.8,.8,1.05),At(t,ye(.06,8,6),15313292,.29,-.01,0,!1),At(t,$e(.27,.3,.2,16),16041008,0,.22,0);const n=At(t,$e(.46,.5,.04,18),16041008,-.05,.13,0);n.rotation.z=-.12;const i=new ee;i.position.set(-.25,.1,-.35),i.rotation.z=.75,s.add(i),At(i,$e(.025,.035,2.2,6),9067067,0,1.1,0);const r=At(i,$e(.006,.006,.7,4),16777215,0,2.2,0,!1);r.rotation.z=-.75,r.position.set(.24,1.95,0),At(i,ye(.12,10,8),15768171,.45,1.68,0).scale.set(1.6,.8,.6);const o=At(i,new vn(.1,.16,4),15768171,.24,1.68,0);o.rotation.z=Math.PI/2}};function cu(s,t,e,n){At(s,ye(.34,14,10),t,0,.12,0).scale.set(.9,1.1,1),At(s,ye(.22,10,8),e,.16,.12,0).scale.set(.6,1.2,1.2);for(const c of[-1,1]){const l=At(s,$e(.08,.08,.5,8),t,.28,.2,c*.28);l.rotation.z=-1.1,At(s,ye(.09,8,6),e,.52,.07,c*.24,!1)}const r=new ee;r.position.set(.05,.68,0),s.add(r),At(r,ye(.32),t).scale.set(.95,.9,1.05),At(r,ye(.15,10,8),e,.24,-.08,0).scale.set(.7,.7,1.2),At(r,ye(.045,6,6),15896480,.33,-.02,0,!1),er(r,.24,.07,.12,.05);for(const c of[-1,1]){const l=At(r,new vn(.11,.24,4),t,0,.3,c*.17);l.rotation.x=c*-.3,At(r,new vn(.055,.14,4),16169156,.04,.3,c*.17,!1).rotation.x=c*-.3;for(const h of[-1,1]){const u=At(r,sn(.005,.01,.28),5985632,.31,-.07+h*.03,c*.2,!1);u.rotation.x=c*h*.2}}if(n)for(let c=0;c<3;c++){const l=At(r,sn(.06,.03,.22),7235683,.12-c*.1,.29-c*.02,0,!1);l.rotation.z=.2-c*.15}const o=new ee;o.position.set(-.32,.05,0),s.add(o);for(let c=0;c<6;c++){const l=c/5;At(o,ye(.07,8,6),n&&c%2?7235683:t,-Math.sin(l*1.6)*.38,l*.7,0).scale.set(1,1.3,1)}}const $v=new R(0,1,0);class t_{constructor(t,e,n,i,r){this.scene=t,this.track=e,this.world=n,this.tex=i,this.mobile=r,this.crowdMats=[],this.uTime={value:0},this.uPlayer={value:new R(1e5,0,1e5)},this.bulbs=null,this.flags=[],this.lamps(),this.crowds(),this.strings(),this.chevrons(),this.boards(),this.flagsAndIcons()}side(t,e){const n=this.track.T,i=n.x[t]-n.tz[t]*e,r=n.z[t]+n.tx[t]*e;return new R(i,this.world.hAt(i,r),r)}lamps(){const t=this.track.T,e=[],n=[],i=new Nt;for(let c=8;c<t.n;c+=26){if(t.flags[c]&Si)continue;const l=c/26%2<1?1:-1,h=t.flags[c]&De,u=l*(t.w[c]/2+(h?1.4:2.6)),f=h?this.track.point(c*(this.track.L/t.n),u).setY(t.y[c]+t.bank[c]*u+1):this.side(c,u);i.compose(f.clone().add(new R(0,3,0)),new Ye,new R(1,6,1)),e.push(i.clone()),i.compose(f.clone().add(new R(0,6.2,0)),new Ye,new R(1,1,1)),n.push(i.clone())}const r=new Ve(new Se(.11,.15,1,6),new ce({color:2897254}),e.length);e.forEach((c,l)=>r.setMatrixAt(l,c)),this.scene.add(r);const a=new Ce(.42,10,8),o=new Ve(a,new Pe({color:16770728}),n.length);n.forEach((c,l)=>o.setMatrixAt(l,c)),this.scene.add(o)}crowdMaterial(t){const e=new ce({color:t});return e.onBeforeCompile=n=>{n.uniforms.uTime=this.uTime,n.uniforms.uPlayer=this.uPlayer,n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
uniform float uTime; uniform vec3 uPlayer;`).replace("#include <begin_vertex>",`#include <begin_vertex>
float ph = instanceMatrix[3].x * 0.71 + instanceMatrix[3].z * 1.31;
float cheer = 1.0 - smoothstep(10.0, 34.0, distance(instanceMatrix[3].xz, uPlayer.xz));
transformed.y += abs(sin(uTime * (5.5 + cheer * 4.0) + ph)) * (0.22 + cheer * 0.55);
transformed.x += sin(uTime * 3.0 + ph) * 0.04;`)},this.crowdMats.push(e),e}crowds(){const t=this.track.T,e=this.track.L,n=$n([(m=>(m.scale(.85,1,.75),m.translate(0,.45,0),m))(new Ce(.36,8,5)),(m=>(m.translate(0,.98,0),m))(new Ce(.25,7,5))]),i=$n([(m=>(m.rotateZ(-Math.PI/2),m.translate(.3,.95,0),m))(new vn(.07,.25,6))]),r=$n([-1,1].map(m=>{const g=new Re(.3,.05,.42);return g.rotateX(m*.9),g.translate(-.02,.62,m*.38),g})),a=$n([(m=>(m.scale(.9,1,.8),m.translate(0,.42,0),m))(new Ce(.34,8,5)),(m=>(m.translate(0,.95,0),m))(new Ce(.27,7,5)),...[-1,1].map(m=>{const g=new vn(.09,.2,4);return g.translate(0,1.22,m*.15),g})]),o=[],c=(m,g)=>Math.atan2(t.z[g]-m.z,t.x[g]-m.x),l=[[1255,60,1],[20,60,1],[770,40,-1],[1205,25,1]],h=[];for(const[m,g,p]of l){for(let v=m;v<m+g;v+=1.4){const _=this.track.idxOf(v%e);for(let x=0;x<3;x++){const C=p*(t.w[_]/2+3.2+x*1.5),w=this.side(_,C);w.y+=.6+x*.9,o.push({p:w,yaw:c(w,_),kind:(Math.floor(v*3)+x)%3})}}for(let v=0;v<3;v++){const _=this.track.idxOf(m%e),x=this.track.idxOf((m+g)%e),C=this.side(_,p*(t.w[_]/2+3.2+v*1.5)),w=this.side(x,p*(t.w[x]/2+3.2+v*1.5)),E=C.clone().add(w).multiplyScalar(.5),L=C.distanceTo(w),M=new Re(L,.6+v*.9+1.5,1.5);M.translate(0,(.6+v*.9)/2-.75,0),M.rotateY(-Math.atan2(w.z-C.z,w.x-C.x)),M.translate(E.x,E.y,E.z),h.push(M)}}const u=t.tower;for(let m=0;m<(this.mobile?50:90);m++){const g=m/90*Math.PI*2*3.1,p=36+m%4*1.6,v=u.x+Math.cos(g)*p,_=u.z+Math.sin(g)*p,x=new R(v,this.world.hAt(v,_),_);o.push({p:x,yaw:Math.atan2(u.z-_,u.x-v),kind:m%3})}for(let m=30;m<t.n;m+=57){if(t.flags[m]&(De|Si))continue;const g=m/57%2<1?-1:1;for(let p=0;p<6;p++){const v=this.side((m+p*2)%t.n,g*(t.w[m]/2+3+p%2*1.3));o.push({p:v,yaw:c(v,m),kind:p%3})}}const f=[{g:n,c:16777215},{g:a,c:15967834},{g:a,c:11117469}],d=new Nt,b=new Ye;if(f.forEach((m,g)=>{const p=o.filter(_=>_.kind===g),v=[new Ve(m.g,this.crowdMaterial(m.c),p.length)];g===0&&(v.push(new Ve(i,this.crowdMaterial(15906891),p.length)),v.push(new Ve(r,this.crowdMaterial(13226200),p.length))),p.forEach((_,x)=>{b.setFromAxisAngle($v,-_.yaw),d.compose(_.p,b,new R(1,1,1));for(const C of v)C.setMatrixAt(x,d)});for(const _ of v)_.castShadow=!this.mobile,this.scene.add(_)}),h.length){const m=new at($n(h),new ce({color:4157398}));m.castShadow=!0,m.receiveShadow=!0,this.scene.add(m)}}strings(){const t=this.track.T,e=[60,180,300,400,790,880,980,1080,1240,1300],n=[],i=[],r=[],a=[],o=new Nt,c=[15358554,16250623,4157398,15911244];e.forEach((u,f)=>{const d=this.track.idxOf(u);if(t.flags[d]&(De|Si))return;const b=t.w[d]/2+2.4,m=this.side(d,-b),g=this.side(d,b),p=Math.max(m.y,g.y)+7.5;for(const x of[m,g])o.compose(new R(x.x,(x.y+p)/2,x.z),new Ye,new R(1,p-x.y,1)),a.push(o.clone());const v=f%2===0,_=22;for(let x=0;x<=_;x++){const C=x/_,w=m.x+(g.x-m.x)*C,E=m.z+(g.z-m.z)*C,L=p-Math.sin(C*Math.PI)*1.6;if(x<_){const M=(x+1)/_;r.push(w,L,E,m.x+(g.x-m.x)*M,p-Math.sin(M*Math.PI)*1.6,m.z+(g.z-m.z)*M)}if(v)o.makeTranslation(w,L-.2,E),n.push(o.clone());else if(x<_){const M=new ve,y=(g.x-m.x)/_*.45,P=(g.z-m.z)/_*.45,D=new ot(c[x%4]);M.setAttribute("position",new se([w-y,L,E-P,w+y,L,E+P,w,L-.9,E],3)),M.setAttribute("color",new se([D.r,D.g,D.b,D.r,D.g,D.b,D.r,D.g,D.b],3)),i.push(M)}}});const l=new Ve(new Se(.1,.12,1,6),new ce({color:2897254}),a.length);a.forEach((u,f)=>l.setMatrixAt(f,u)),this.scene.add(l);const h=new ve;h.setAttribute("position",new se(r,3)),this.scene.add(new nl(h,new Oa({color:1910096}))),i.length&&this.scene.add(new at($n(i),new Pe({vertexColors:!0,side:Ue}))),this.bulbs=new Ve(new Ce(.16,8,6),new Pe({color:16769696}),n.length),n.forEach((u,f)=>this.bulbs.setMatrixAt(f,u)),this.scene.add(this.bulbs)}chevrons(){const t=this.track.T,e=this.tex.make(256,128,(a,o,c)=>{a.fillStyle="#1d2550",a.fillRect(0,0,o,c),a.fillStyle="#f2c94c";for(let l=0;l<3;l++){a.beginPath();const h=40+l*70;a.moveTo(h,20),a.lineTo(h+40,64),a.lineTo(h,108),a.lineTo(h+22,108),a.lineTo(h+62,64),a.lineTo(h+22,20),a.fill()}}),n=[],i=new Pe({map:e,side:Ue});let r=-99;for(let a=0;a<t.n;a+=3){if(t.flags[a]&(yr|Si|De)||a-r<40)continue;const o=(a-10+t.n)%t.n,c=(a+10)%t.n;let l=Math.atan2(t.tz[c],t.tx[c])-Math.atan2(t.tz[o],t.tx[o]);if(l=Math.atan2(Math.sin(l),Math.cos(l)),Math.abs(l)<.55)continue;r=a;const h=l>0?-1:1;for(let u=-1;u<=1;u++){const f=(a+u*7+t.n)%t.n,d=this.side(f,h*(t.w[f]/2+1.9)),b=new on(2.6,1.3);b.translate(0,1.5,0),b.rotateY(-Math.atan2(t.tz[f],t.tx[f])+(l>0?Math.PI:0)),b.translate(d.x,d.y,d.z),n.push(b)}}n.length&&this.scene.add(new at($n(n),i))}boards(){const t=this.track.T,e=[[40,"KARAKÖY","#1d2550","#ffffff"],[140,"SİMİT 5₺","#e8534a","#ffffff"],[260,"YÜKSEK KALDIRIM","#3f6fd6","#ffffff"],[420,"GALATA","#1d2550","#f2c94c"],[800,"ÇAY OCAĞI","#c8662d","#ffffff"],[900,"ŞİŞHANE","#3f6fd6","#ffffff"],[1020,"VAPUR İSKELESİ","#1d2550","#ffffff"],[1250,"BOSPHORUS DRIFT","#e8534a","#ffffff"]];for(const[n,i,r,a]of e){const o=this.track.idxOf(n);if(!(t.flags[o]&De))for(const c of[-1,1]){const l=this.side(o,c*(t.w[o]/2+1.75)),h=new at(new on(i.length>9?9:6.5,1.3),new Pe({map:this.tex.sign(i,r,a),transparent:!0,side:Ue}));h.position.set(l.x,Math.max(l.y,t.y[o])+1.75,l.z),h.rotation.y=-Math.atan2(t.tz[o],t.tx[o]),this.scene.add(h)}}}flagsAndIcons(){const t=this.track.T,e=this.tex.make(192,128,(u,f,d)=>{u.fillStyle="#e30a17",u.fillRect(0,0,f,d),u.fillStyle="#fff",u.beginPath(),u.arc(72,64,32,0,7),u.fill(),u.fillStyle="#e30a17",u.beginPath(),u.arc(80,64,26,0,7),u.fill(),u.fillStyle="#fff",u.beginPath();for(let b=0;b<10;b++){const m=b%2?6:15,g=b/10*Math.PI*2-Math.PI/2;u.lineTo(118+Math.cos(g)*m,64+Math.sin(g)*m)}u.fill()}),n=new ce({map:e,side:Ue});n.onBeforeCompile=u=>{u.uniforms.uTime=this.uTime,u.vertexShader=u.vertexShader.replace("#include <common>",`#include <common>
uniform float uTime;`).replace("#include <begin_vertex>",`#include <begin_vertex>
float wv = position.x / 2.4; transformed.z += sin(position.x * 2.6 - uTime * 7.0 + modelMatrix[3].x) * 0.22 * wv; transformed.y += sin(position.x * 1.7 - uTime * 5.0) * 0.06 * wv;`)};const i=new ce({color:15329522});for(const u of[10,25,1290,1310,470,760]){const f=this.track.idxOf(u);for(const d of[-1,1]){if(t.flags[f]&De)continue;const b=this.side(f,d*(t.w[f]/2+3.5)),m=new at(new Se(.07,.09,8,6),i);m.position.copy(b).add(new R(0,4,0)),this.scene.add(m);const g=new on(2.4,1.6,8,1);g.translate(1.2,0,0);const p=new at(g,n);p.position.copy(b).add(new R(0,7.1,0)),p.rotation.y=-Math.atan2(-.6,.8),this.scene.add(p)}}const r=new ee;for(const[u,f,d]of[[2.4,3108787,0],[1.65,16777215,.06],[1.05,8306928,.12],[.55,1646125,.18]]){const b=new at(new Se(u,u,.3,32),Yt(f));b.rotation.x=Math.PI/2,b.position.z=d,r.add(b);const m=b.clone();m.position.z=-d,r.add(m)}const a=this.track.point(0,0);r.position.set(a.x,a.y+10.6,a.z),r.rotation.y=-Math.atan2(t.tz[0],t.tx[0])+Math.PI/2,this.scene.add(r),this.flags.push(r);const o=new at(new Pn(3.2,1.25,16,32),Yt(14192453)),c=t.tower;o.position.set(c.x+40,c.y0+3.5,c.z+18),o.rotation.set(.2,.6,0),o.castShadow=!0,this.scene.add(o);const l=new Ve(new Ce(.12,5,4),Yt(16774102),70),h=new Nt;for(let u=0;u<70;u++){const f=u/70*Math.PI*2*7.3,d=u%9/9*Math.PI-Math.PI*.1;h.makeTranslation(Math.cos(f)*(3.2+Math.cos(d)*1.25),Math.sin(d)*1.25,Math.sin(f)*(3.2+Math.cos(d)*1.25)),l.setMatrixAt(u,h)}o.add(l)}update(t,e){this.uTime.value=e;for(const n of this.flags)n.type==="Group"&&(n.rotation.y+=t*.6);this.bulbs}}class e_{constructor(t,e){this.renderer=t,this.cam=new Fa(-1,1,1,-1,0,1),this.scene=new Zc,this.enabled=!0,this.rt=new ci(4,4,{samples:e,type:Ls}),this.rt.depthTexture=new Yc(4,4),this.rt.depthTexture.type=Ai,this.mat=new an({uniforms:{tColor:{value:this.rt.texture},tDepth:{value:this.rt.depthTexture},res:{value:new ct(1,1)},near:{value:.3},far:{value:2e3},ink:{value:new ot(1910096)},width:{value:1},speed:{value:0},time:{value:0}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }",fragmentShader:`
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
        }`,depthTest:!1,depthWrite:!1}),this.quad=new at(new on(2,2),this.mat),this.quad.frustumCulled=!1,this.scene.add(this.quad)}setSize(t,e,n){this.rt.setSize(Math.floor(t*n),Math.floor(e*n)),this.mat.uniforms.res.value.set(t*n,e*n),this.mat.uniforms.width.value=Math.max(1,n*1.05)}render(t,e){if(!this.enabled){this.renderer.setRenderTarget(null),this.renderer.render(t,e);return}this.mat.uniforms.near.value=e.near,this.mat.uniforms.far.value=e.far,this.renderer.setRenderTarget(this.rt),this.renderer.render(t,e),this.renderer.setRenderTarget(null),this.renderer.render(this.scene,this.cam)}}const Un=26,n_=[new ot(16765530),new ot(16743104)],i_=[new ot(16777215),new ot(8306928),new ot(16164442),new ot(11833072)];class s_{constructor(t){this.scene=t,this.rib=new Map,this.mat=new Pe({vertexColors:!0,transparent:!0,depthWrite:!1,blending:Oo,side:Ue,fog:!1}),this.skidMax=900,this.skidN=0,this.skidHead=0,this.last=new Map,this.skidPos=new Float32Array(this.skidMax*4*3);const e=[];for(let i=0;i<this.skidMax;i++){const r=i*4;e.push(r,r+1,r+2,r,r+2,r+3)}this.skidGeo=new ve,this.skidGeo.setAttribute("position",new fe(this.skidPos,3).setUsage(Vi)),this.skidGeo.setIndex(e);const n=new at(this.skidGeo,new Pe({color:2764104,transparent:!0,opacity:.55,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-3}));n.frustumCulled=!1,t.add(n)}reset(){for(const t of this.rib.values())for(const e of t)this.scene.remove(e.mesh);this.rib.clear(),this.skidN=0,this.skidHead=0,this.skidPos.fill(0),this.skidGeo.attributes.position.needsUpdate=!0,this.last.clear()}ribbons(t){let e=this.rib.get(t);return e||(e=[0,1].map(()=>{const n=new ve;n.setAttribute("position",new fe(new Float32Array(Un*2*3),3).setUsage(Vi)),n.setAttribute("color",new fe(new Float32Array(Un*2*4),4).setUsage(Vi));const i=[];for(let a=0;a<Un-1;a++){const o=a*2;i.push(o,o+1,o+3,o,o+3,o+2)}n.setIndex(i);const r=new at(n,this.mat);return r.frustumCulled=!1,this.scene.add(r),{pts:Array.from({length:Un},()=>new R),on:new Array(Un).fill(0),col:Array.from({length:Un},()=>new ot),geo:n,mesh:r}}),this.rib.set(t,e)),e}update(t,e){for(const n of t){const i=this.ribbons(n),r=Math.cos(n.yaw),a=Math.sin(n.yaw),o=n.boostT>0,c=o||n.drifting&&n.boosts>0,l=n.pos.distanceToSquared(e)<14400;i.forEach((h,u)=>{const f=u?.62:-.62,d=-.9,b=new R(n.pos.x+d*r-f*a,n.pos.y+.08,n.pos.z+d*a+f*r);h.pts.pop(),h.pts.unshift(b),h.on.pop(),h.on.unshift(c&&l?1:0),h.col.pop(),h.col.unshift((o?n_[u]:i_[Math.min(3,n.boosts)]).clone());const m=h.geo.attributes.position,g=h.geo.attributes.color;for(let v=0;v<Un;v++){const _=h.pts[v],x=h.pts[Math.min(Un-1,v+1)],C=_.x-x.x,w=_.z-x.z,E=Math.hypot(C,w)||1,L=.13*(1-v/Un)+.03;m.setXYZ(v*2,_.x-w/E*L,_.y,_.z+C/E*L),m.setXYZ(v*2+1,_.x+w/E*L,_.y,_.z-C/E*L);const M=h.on[v]*(1-v/Un)*.95,y=h.col[v];g.setXYZW(v*2,y.r,y.g,y.b,M),g.setXYZW(v*2+1,y.r,y.g,y.b,M)}m.needsUpdate=!0,g.needsUpdate=!0;const p=n.def.id+u;if(n.drifting&&n.grounded&&l){const v=this.last.get(p);v&&v.distanceToSquared(b)>.25&&v.distanceToSquared(b)<9&&this.skid(v,b),(!v||v.distanceToSquared(b)>.25)&&this.last.set(p,b.clone())}else this.last.delete(p)})}}skid(t,e){const n=e.x-t.x,i=e.z-t.z,r=Math.hypot(n,i)||1,a=.13,o=-i/r*a,c=n/r*a,l=this.skidHead*12;this.skidPos.set([t.x-o,t.y-.03,t.z-c,t.x+o,t.y-.03,t.z+c,e.x+o,e.y-.03,e.z+c,e.x-o,e.y-.03,e.z-c],l),this.skidHead=(this.skidHead+1)%this.skidMax,this.skidN=Math.min(this.skidMax,this.skidN+1),this.skidGeo.attributes.position.needsUpdate=!0}}class r_{constructor(t,e,n,i,r,a){this.scene=t,this.track=e,this.world=n,this.items=i,this.fx=r,this.cats=[],this.vendors=[],this.gulls=[],this.ferries=[],this.fireT=0,this.fireAt=new R,this.makeCats(a?18:30),this.makeVendors(),this.makeGulls(a?14:24),this.makeFerries()}side(t,e){const n=this.track.T,i=n.x[t]-n.tz[t]*e,r=n.z[t]+n.tx[t]*e;return new R(i,this.world.hAt(i,r),r)}makeCats(t){const e=this.track.T,n=[15967834,11117469,3947079,16777215,14262374];for(let i=0;i<t;i++){const r=Math.floor((i+.37)/t*e.n)%e.n;if(e.flags[r]&(De|Si))continue;const a=i%2?1:-1,o=this.side(r,a*(e.w[r]/2+2.6)),c=this.side(r,a*(e.w[r]/2+9)),l=n[i%n.length],h=new ee,u=[],f=new at(new Ce(.3,10,8),Yt(l));f.scale.set(1.45,.9,.85),f.position.y=.38,h.add(f);const d=new at(new Ce(.22,10,8),Yt(l));d.position.set(.4,.62,0),h.add(d);for(const p of[-1,1]){const v=new at(new vn(.07,.16,4),Yt(l));v.position.set(.42,.84,p*.11),h.add(v)}for(const[p,v]of[[.24,.14],[.24,-.14],[-.24,.14],[-.24,-.14]]){const _=new at(new Se(.05,.05,.3,5),Yt(l));_.position.set(p,.15,v),h.add(_),u.push(_)}const b=new ee;b.position.set(-.4,.45,0);const m=new at(new Se(.035,.05,.55,5),Yt(l));m.position.y=.27,b.add(m),h.add(b),h.position.copy(o);const g=Math.atan2(e.z[r]-o.z,e.x[r]-o.x);h.rotation.y=-g,h.traverse(p=>{p.isMesh&&(p.castShadow=!0)}),this.scene.add(h),this.cats.push({g:h,home:o,away:c,t:Math.random()*5,state:"sit",tail:b,legs:u,face:g})}}makeVendors(){const t=this.track.T;for(const e of[120,390,880,1290]){const n=this.track.idxOf(e);if(t.flags[n]&De)continue;const i=e%2?1:-1,r=this.side(n,i*(t.w[n]/2+3.4)),a=new ee,o=new at(new Re(1.6,.9,1),Yt(14242639));o.position.set(0,.9,0),a.add(o);const c=new at(new Re(1.4,.7,.8),new ce({color:14676735,transparent:!0,opacity:.55}));c.position.set(0,1.7,0),a.add(c);const l=new Pn(.17,.07,6,12);l.rotateX(Math.PI/2);for(let _=0;_<6;_++){const x=new at(l,Yt(14916172));x.position.set(-.45+_%3*.45,1.45+Math.floor(_/3)*.16,0),a.add(x)}for(const _ of[-.6,.6]){const x=new at(new Se(.28,.28,.1,12),Yt(3947079));x.rotation.x=Math.PI/2,x.position.set(_,.3,.55),a.add(x)}const h=new at(new Re(1.9,.08,1.3),Yt(16513008));h.position.y=2.15,a.add(h);const u=new ee;u.position.set(0,0,-.95);const f=new at(new Se(.28,.32,1,10),Yt(16513008));f.position.y=.95,u.add(f);const d=new at(new Se(.3,.33,.6,10),Yt(14242639));d.position.y=1.15,u.add(d);const b=new at(new Ce(.24,10,8),Yt(15978416));b.position.y=1.72,u.add(b);const m=new at(new Se(.22,.24,.12,10),Yt(16513008));m.position.y=1.9,u.add(m);const g=new at(new Re(.06,.05,.22),Yt(5913130));g.position.set(.22,1.66,0),u.add(g);const p=new ee;p.position.set(0,1.4,.3);const v=new at(new Se(.07,.07,.6,6),Yt(16513008));v.position.y=-.3,p.add(v),u.add(p),a.add(u),a.position.copy(r),a.rotation.y=-Math.atan2(t.tz[n],t.tx[n])+(i>0?0:Math.PI),a.traverse(_=>{_.isMesh&&(_.castShadow=!0)}),this.scene.add(a),this.vendors.push({g:a,arm:p,i:n,cd:2+Math.random()*3,anim:0})}}makeGulls(t){const e=this.track.T,n=Yt(16777215),i=Yt(13226200),r=Yt(15906891),a=new Re(.45,.05,1.3);a.translate(0,0,.65);for(let o=0;o<t;o++){const c=new ee,l=new at(new Ce(.35,8,6),n);l.scale.set(1.7,.8,.8),c.add(l);const h=new at(new vn(.07,.25,6),r);h.rotation.z=-Math.PI/2,h.position.x=.65,c.add(h);const u=new pe,f=new pe;f.add(new at(a,i));const d=new at(a,i);d.rotation.y=Math.PI,u.add(d),c.add(u,f);const b=Math.floor(o/t*e.n),m=o%4===0?new R(e.tower.x,0,e.tower.z):new R(e.x[b],0,e.z[b]),g=(o%4===0?e.tower.y0+30:e.y[b]+14)+o%3*4;c.scale.setScalar(1.3),this.scene.add(c),this.gulls.push({g:c,wl:u,wr:f,c:m,r:14+o%5*6,a:o*1.7,sp:(.35+o%3*.12)*(o%2?1:-1),h:g})}}makeFerries(){const t=[[-660,460,300,330],[300,420,-540,552],[-900,300,200,230],[400,-200,350,600]];for(const[e,n,i,r]of t){const a=new ee,o=new at(new Re(34,3.2,10),Yt(3099502));o.position.y=1.2,a.add(o);const c=new at(new Re(30,3.2,9),Yt(16513008));c.position.y=4.3,a.add(c);const l=new at(new Re(18,2.6,7.5),Yt(16513008));l.position.y=7.2,a.add(l);const h=new at(new Se(1.5,1.7,4.5,12),Yt(15909198));h.position.set(0,10.6,0),a.add(h);const u=new at(new Se(1.55,1.55,.9,12),Yt(3947079));u.position.set(0,12.6,0),a.add(u),this.scene.add(a),this.ferries.push({g:a,x0:e,z0:n,x1:i,z1:r,t:Math.random(),sp:9/Math.hypot(i-e,r-n)})}}fireworks(t){this.fireT=5,this.fireAt.copy(t)}update(t,e,n,i,r){for(const a of this.cats){let o=!1;for(const b of n)if((b.pos.x-a.home.x)**2+(b.pos.z-a.home.z)**2<110){o=!0;break}a.t+=t,a.state==="sit"?o&&(a.state="flee",a.t=0,a.g.position.y+=.01):a.state==="flee"?a.t>6&&!o&&(a.state="back",a.t=0):a.state==="back"&&(o?(a.state="flee",a.t=0):a.t>2.5&&(a.state="sit"));const c=a.state==="flee"?a.away:a.home,l=a.g.position,h=c.x-l.x,u=c.z-l.z,f=Math.hypot(h,u),d=f>.2&&a.state!=="sit";if(d){const b=(a.state==="flee"?9:2.5)*t,m=Math.min(1,b/f);l.x+=h*m,l.z+=u*m,l.y=this.world.hAt(l.x,l.z)+(a.state==="flee"&&a.t<.35?Math.sin(a.t/.35*Math.PI)*.9:0),a.g.rotation.y=-Math.atan2(u,h),a.legs.forEach((g,p)=>g.rotation.z=Math.sin(e*20+p*1.7)*.7)}else a.state==="sit"&&(a.g.rotation.y+=(-a.face-a.g.rotation.y)*Math.min(1,t*2)),a.legs.forEach(b=>b.rotation.z=0);a.tail.rotation.z=Math.sin(e*(d?10:2.2)+a.home.x)*(d?.5:.35)+.4}for(const a of this.vendors){if(a.cd-=t,a.anim=Math.max(0,a.anim-t*2.5),a.arm.rotation.x=-Math.sin(a.anim*Math.PI)*2.2,!r||!i||a.cd>0)continue;const o=(this.track.T.n+a.i-i.f.i)%this.track.T.n*(this.track.L/this.track.T.n);if(o>25&&o<75){a.cd=7+Math.random()*5,a.anim=1;const c=a.g.position.clone().add(new R(0,2.2,0)),l=i.f.s+Math.min(o-6,30+Math.random()*20),h=this.track.point(l,(Math.random()-.5)*6);this.items.tossSimit(c,h)}}for(const a of this.gulls){a.a+=a.sp*t,a.g.position.set(a.c.x+Math.cos(a.a)*a.r,a.h+Math.sin(e*.7+a.r)*2,a.c.z+Math.sin(a.a)*a.r),a.g.rotation.set(0,-(a.a+(a.sp>0?Math.PI/2:-Math.PI/2)),Math.sign(a.sp)*.25);const o=Math.sin(e*7+a.r)*.55;a.wl.rotation.x=o,a.wr.rotation.x=-o}for(const a of this.ferries)if(a.t+=a.sp*t,a.t>1&&(a.t-=1),a.g.position.set(a.x0+(a.x1-a.x0)*a.t,Math.sin(e+a.x0)*.2,a.z0+(a.z1-a.z0)*a.t),a.g.rotation.y=-Math.atan2(a.z1-a.z0,a.x1-a.x0),Math.random()<t*3){const o=a.g.position;this.fx.emit(o.x,14,o.z,.5,2.5,.3,a_,.5,3,2.5)}if(this.fireT>0&&(this.fireT-=t,Math.random()<t*3.5)){const a=lu[Math.floor(Math.random()*lu.length)],o=this.fireAt.clone().add(new R((Math.random()-.5)*30,18+Math.random()*14,(Math.random()-.5)*30));for(let c=0;c<40;c++){const l=Math.random()*Math.PI*2,h=Math.random()*Math.PI-Math.PI/2,u=8+Math.random()*4;this.fx.emit(o.x,o.y,o.z,Math.cos(l)*Math.cos(h)*u,Math.sin(h)*u,Math.sin(l)*Math.cos(h)*u,a,1,.5,1.3,6)}}}}const a_=new ot(15262960),lu=[16739179,16242548,8306928,11833072,10410422].map(s=>new ot(s));class o_{constructor(t,e,n,i,r){this.scene=t,this.sun=e,this.hemi=n,this.skyMats=i,this.level=0,this.target=0,this.startAt=-1,this.flash=0,this.nextBolt=8,this.road=null,this.onStart=null,this.onThunder=null,this.n=r?700:1500,this.pos=new Float32Array(this.n*6);for(let c=0;c<this.n;c++)this.seed(c,new R,!0);const a=new ve;a.setAttribute("position",new fe(this.pos,3).setUsage(Vi)),this.lines=new nl(a,new Oa({color:14673663,transparent:!0,opacity:0,depthWrite:!1})),this.lines.frustumCulled=!1,t.add(this.lines);const o=t.fog;this.base={fog:o.color.clone(),far:o.far,sun:e.intensity,hemi:n.intensity,sky:n.color.clone(),gnd:n.groundColor.clone()},t.traverse(c=>{c.name==="road"&&(this.road=c.material)})}seed(t,e,n=!1){const i=e.x+(Math.random()-.5)*70,r=e.z+(Math.random()-.5)*70,a=e.y+(n?Math.random()*40-10:30);this.pos.set([i,a,r,i+.25,a-1.1,r+.15],t*6)}plan(){this.level=0,this.target=0,this.flash=0;const t=Math.random();this.startAt=t<.08?.5:t<.42?15+Math.random()*55:-1}clear(){this.level=0,this.target=0,this.startAt=-1}update(t,e,n){this.startAt>=0&&e>=this.startAt&&this.target===0&&(this.target=1,this.onStart?.()),this.level+=(this.target-this.level)*Math.min(1,t*.35);const i=this.level,r=this.scene.fog;r.color.copy(this.base.fog).lerp(c_,i*.85),r.far=this.base.far*(1-i*.55),this.flash=Math.max(0,this.flash-t*6),i>.7&&(this.nextBolt-=t,this.nextBolt<=0&&(this.nextBolt=7+Math.random()*10,this.flash=1,setTimeout(()=>this.onThunder?.(),600+Math.random()*900))),this.sun.intensity=this.base.sun*(1-i*.7),this.hemi.intensity=this.base.hemi*(1-i*.25)+this.flash*3,this.hemi.color.copy(this.base.sky).lerp(l_,i*.6),this.hemi.groundColor.copy(this.base.gnd).lerp(h_,i*.6);for(const o of this.skyMats)o.uniforms.rain&&(o.uniforms.rain.value=i);Ta.uWet.value=i,this.road&&this.road.color.setRGB(1-i*.28,1-i*.26,1-i*.2);const a=this.lines.material;if(a.opacity=i*.55,this.lines.visible=i>.02,i>.02){const o=this.pos;for(let c=0;c<this.n;c++){const l=c*6,h=42*t;o[l+1]-=h,o[l+4]-=h,o[l]+=6*t,o[l+3]+=6*t,(o[l+1]<n.y-12||Math.abs(o[l]-n.x)>40||Math.abs(o[l+2]-n.z)>40)&&this.seed(c,n)}this.lines.geometry.attributes.position.needsUpdate=!0}}}const c_=new ot(9081e3),l_=new ot(10135240),h_=new ot(5922680),hu=25,uu=31,kn=[.55,1],wa=.18,u_=.75;class f_{constructor(t,e,n,i={}){this.track=t,this.isPlayer=n,this.ev=i,this.pos=new R,this.vel=new R,this.yaw=0,this.speed=0,this.vy=0,this.grounded=!0,this.airT=0,this.f={i:0,t:0,s:0,d:0,h:0,w:13,tx:1,tz:0,flags:0},this.lap=0,this.maxLap=0,this.lastS=0,this.progress=0,this.finished=!1,this.finishTime=0,this.place=1,this.checkpoint=!1,this.drifting=!1,this.dir=0,this.charge=0,this.boosts=0,this.neutralT=0,this.lockT=0,this.pendT=0,this.oppT=0,this.boostT=0,this.boostP=0,this.spinT=0,this.shieldT=0,this.simit=0,this.item=null,this.rollT=0,this.lastItem=null,this.slowT=0,this.wrongT=0,this.stuckT=0,this.respawnT=0,this.prevDrift=!1,this.prevItem=!1,this.wantItem=!1,this.steerVis=0,this.lean=0,this.driftVis=0,this.squash=0,this.stat={spd:0,acc:0,han:0},this.grip=1,this.def=Cs[e],this.model=pl(this.def)}place0(t,e){this.track.point(t,e,this.pos),this.yaw=this.track.heading(t),this.f.i=this.track.idxOf(t),this.track.frame(this.pos.x,this.pos.y,this.pos.z,this.f.i,this.f,40),this.pos.y=this.f.h,this.vel.set(0,0,0),this.speed=0,this.vy=0,this.lastS=this.f.s,this.lap=0,this.progress=this.f.s-this.track.L,this.checkpoint=!0}get maxSpeed(){return(uu+this.stat.spd*.7+this.simit*.22+(this.boostT>0?this.boostP:0))*(this.slowT>0?.55:1)*(this.grip<1?.96:1)}get juiced(){return this.simit>=10}boost(t,e){this.boostP=Math.max(this.boostT>0?this.boostP:0,t),this.boostT=Math.max(this.boostT,e),this.speed=Math.max(this.speed,uu+t*.75)}hit(){return this.shieldT>0?(this.shieldT=0,!1):this.spinT>0?!1:(this.spinT=1.1,this.drifting=!1,this.boostT=0,this.simit=Math.max(0,this.simit-3),this.ev.onHit?.(this),!0)}step(t,e,n){const i=this.track;!n||this.finished&&this.isPlayer;const r=n&&this.spinT<=0?e:{gas:0,brake:0,steer:0,drift:!1,item:!1},a=r.drift&&!this.prevDrift;this.prevDrift=r.drift;const o=r.item&&!this.prevItem;this.prevItem=r.item,this.wantItem=o,this.slowT=Math.max(0,this.slowT-t),this.boostT=Math.max(0,this.boostT-t),this.shieldT=Math.max(0,this.shieldT-t),this.lockT=Math.max(0,this.lockT-t),this.spinT>0&&(this.spinT-=t,this.speed*=Math.exp(-t*2.6));const c=Math.cos(this.yaw),l=Math.sin(this.yaw),h=this.maxSpeed;if(this.grounded){if(r.gas>0&&this.speed>=-.5){const N=this.speed<h?(21+this.stat.acc*4)*(1-Math.max(0,this.speed)/h)+5:-(this.speed-h)*1.6;this.speed+=N*r.gas*t}else r.brake>0?(this.speed-=(this.speed>0?32:10)*r.brake*t,this.speed=Math.max(this.speed,-8)):this.speed-=Math.sign(this.speed)*Math.min(Math.abs(this.speed),7*t);this.speed>h&&r.gas===0&&(this.speed-=(this.speed-h)*1.2*t);const D=i.T.y[i.wrap(this.f.i+1)]-i.T.y[this.f.i];this.speed-=D*hu*.22*t*Math.sign(c*this.f.tx+l*this.f.tz)}const u=r.steer,f=D=>{this.drifting=!0,this.dir=D,this.charge=0,this.boosts=0,this.neutralT=0,this.oppT=0,this.pendT=0,this.ev.onDriftStart?.(this)};if(!this.drifting&&a&&this.grounded&&this.speed>4)this.vy=4.2,this.grounded=!1,this.pendT=.4,Math.abs(u)>.15&&this.speed>7&&f(Math.sign(u));else if(this.drifting&&a&&this.boosts<3&&this.lockT<=0)if(this.charge>=kn[0]&&this.charge<=kn[1]+wa){this.boosts++;const D=[0,5,6.5,8.5][this.boosts],N=[0,.8,1,1.35][this.boosts];this.boost(D,N),this.charge=0,this.ev.onBoost?.(this,this.boosts)}else this.ev.onDriftFail?.(this,this.charge>kn[1]),this.charge=0,this.lockT=.2;!this.drifting&&this.pendT>0&&(this.pendT-=t,Math.abs(u)>.15&&this.speed>7&&f(Math.sign(u))),this.drifting&&(this.boosts<3&&this.lockT<=0&&(this.charge+=t/u_,this.charge>kn[1]+wa+.15&&(this.charge=0)),Math.abs(u)<.12?this.neutralT+=t:this.neutralT=0,u*this.dir<-.55?this.oppT+=t:this.oppT=0,(this.neutralT>.6||this.oppT>.35||this.speed<6||r.brake>.5||this.spinT>0)&&(this.drifting=!1));let d;const b=Math.abs(this.speed),m=Math.min(1,b/7);this.drifting?(d=this.dir*(1.15+.75*u*this.dir)*m,this.speed-=1.2*t):d=u*(2.25+this.stat.han*.25-.75*Math.min(1,b/34))*m*Math.sign(this.speed||1),this.grounded||(d*=this.drifting?.9:.45),this.spinT>0&&(d=0),this.yaw+=d*t;const g=(this.drifting?3.6:this.grounded?12+this.stat.han*2:1.2)*(this.grip<1?.7:1),p=1-Math.exp(-g*t),v=Math.cos(this.yaw)*this.speed,_=Math.sin(this.yaw)*this.speed;this.vel.x+=(v-this.vel.x)*p,this.vel.z+=(_-this.vel.z)*p,this.pos.x,this.pos.z,this.pos.y,this.pos.x+=this.vel.x*t,this.pos.z+=this.vel.z*t;const x=this.f.h;i.frame(this.pos.x,this.pos.y,this.pos.z,this.f.i,this.f);const C=this.f.h,w=(C-x)/Math.max(t,1e-4);this.vy-=hu*t,this.pos.y+=this.vy*t;const E=!this.grounded;this.pos.y<=C?(E&&this.airT>.25&&(this.ev.onLand?.(this,-this.vy),this.squash=Math.min(1,-this.vy/14)),this.pos.y=C,this.vy=w,this.grounded=!0,this.airT=0):this.pos.y>C+.12&&(this.grounded=!1,this.airT+=t);const L=this.f.w/2+.6;if(Math.abs(this.f.d)>L){const D=Math.sign(this.f.d),N=Math.abs(this.f.d)-L,O=-this.f.tz,W=this.f.tx;this.pos.x-=O*D*N,this.pos.z-=W*D*N;const z=this.vel.x*O+this.vel.z*W;if(z*D>0){this.vel.x-=O*z*1.6,this.vel.z-=W*z*1.6;const Z=Math.abs(z);this.speed*=Math.max(.7,1-Z*.025);const V=Math.atan2(this.f.tz,this.f.tx)*1,et=Ea(V-this.yaw),lt=Math.cos(et)>0?et:Ea(et+Math.PI);this.yaw+=lt*Math.min(.6,Z*.05),Z>13&&(this.drifting=!1),Z>4&&this.ev.onWall?.(this,Z)}i.frame(this.pos.x,this.pos.y,this.pos.z,this.f.i,this.f)}const M=this.f.s,y=i.L;this.lastS>y*.75&&M<y*.25?this.checkpoint&&(this.lap++,this.checkpoint=!1):this.lastS<y*.25&&M>y*.75&&this.lap--,M>y*.4&&M<y*.6&&(this.checkpoint=!0),this.lastS=M,this.progress=this.lap*y+M;const P=Math.cos(this.yaw)*this.f.tx+Math.sin(this.yaw)*this.f.tz;this.wrongT=P<-.3&&this.speed>3?this.wrongT+t:0,this.stuckT=n&&r.gas>0&&Math.abs(this.speed)<2?this.stuckT+t:0,this.steerVis+=(u-this.steerVis)*Math.min(1,t*10),this.driftVis+=((this.drifting?this.dir:0)-this.driftVis)*Math.min(1,t*7),this.lean+=((this.drifting?-this.dir*.12:-u*.06*Math.min(1,b/15))-this.lean)*Math.min(1,t*8),this.squash=Math.max(0,this.squash-t*4)}respawn(){const t=this.f,e=t.s-4;this.track.point(e,0,this.pos),this.yaw=this.track.heading(e),this.track.frame(this.pos.x,this.pos.y,this.pos.z,t.i,this.f,30),this.pos.y=this.f.h+2.5,this.vel.set(0,0,0),this.speed=0,this.vy=0,this.drifting=!1,this.spinT=0,this.respawnT=1.2}sync(t,e){const n=this.model;n.root.position.copy(this.pos);let i=this.yaw+this.driftVis*.42;this.spinT>0&&(i+=(1.1-this.spinT)*Math.PI*3.6),n.root.rotation.set(0,-i,0);const r=this.track.T,a=this.f.i,o=this.track.wrap(a+3),c=Math.atan2(r.y[o]-r.y[a],3)*(this.grounded?1:.4),l=Math.cos(i)*this.f.tx+Math.sin(i)*this.f.tz;n.body.rotation.set(this.lean,0,c*l),n.body.scale.set(1+this.squash*.12,1-this.squash*.2,1+this.squash*.12),n.body.position.y=this.boostT>0?Math.sin(e*40)*.02:0;const h=this.speed*t/.33;for(const u of n.wheels)u.rotation.z-=h;for(const u of n.front)u.rotation.y=-this.steerVis*.4;n.driver.rotation.x=-this.steerVis*.15,n.driver.position.y=.9+Math.abs(Math.sin(e*9+this.def.color))*.015*Math.min(1,this.speed/10)}}function Ea(s){for(;s>Math.PI;)s-=Math.PI*2;for(;s<-Math.PI;)s+=Math.PI*2;return s}const fu=.62,du=.98;class Ic{constructor(t,e,n){this.k=t,this.track=e,this.skill=n,this.ctl={gas:1,brake:0,steer:0,drift:!1,item:!1},this.lane=0,this.laneT=0,this.pressT=0,this.itemT=0,this.wantBoostAt=.85,this.lane=(Math.random()-.5)*6}bend(t,e,n){const i=this.track.T,r=this.track.wrap(t+e),a=this.track.wrap(t+n);return Ea(Math.atan2(i.tz[a],i.tx[a])-Math.atan2(i.tz[r],i.tx[r]))}update(t,e,n,i=!1){const r=this.k,a=this.track,o=this.ctl;a.T,o.drift=!1,o.item=!1,this.laneT-=t,this.laneT<=0&&(this.laneT=2+Math.random()*3,this.lane=(Math.random()-.5)*(r.f.w-5));let c=this.lane;const l=this.bend(r.f.i,5,30);c+=-Math.sign(l)*Math.min(1,Math.abs(l))*(r.f.w*.25);for(const p of e){if(p===r)continue;const v=p.progress-r.progress;v>0&&v<12&&Math.abs(p.f.d-c)<2.2&&(c+=p.f.d>c?-2.5:2.5)}c=Math.max(-r.f.w/2+2,Math.min(r.f.w/2-2,c));const h=7+Math.abs(r.speed)*.42,u=a.point(r.f.s+h,c),f=Math.atan2(u.z-r.pos.z,u.x-r.pos.x);let d=Ea(f-r.yaw);r.drifting?(o.steer=Math.max(-1,Math.min(1,d*2.4*r.dir))*r.dir,Math.abs(l)<.18&&Math.abs(d)<.12&&(o.steer=-r.dir*.7)):o.steer=Math.max(-1,Math.min(1,d*2.6));const b=n.progress-r.progress;let m=(.86+this.skill*.12)*(b>60?1.08:b<-60?.93:1);i&&(m=1),o.gas=r.speed<r.maxSpeed*m?1:0,o.brake=0;const g=Math.abs(this.bend(r.f.i,4,22));if(g>1.1&&r.speed>22&&!r.drifting&&(o.gas=0,r.speed>25&&(o.brake=.35)),!r.drifting&&r.grounded&&g>.55&&r.speed>14&&Math.random()<t*4*(.4+this.skill)&&(o.steer=Math.sign(l)||1,o.drift=!0,this.wantBoostAt=fu+Math.random()*.25),this.pressT-=t,r.drifting&&r.boosts<3&&r.lockT<=0&&r.charge>=this.wantBoostAt&&this.pressT<=0){const p=Math.random()<.35+this.skill*.55;(p||r.charge>du)&&(o.drift=!0,this.pressT=.1,this.wantBoostAt=p?fu+Math.random()*.25:Math.random()<.5?.3:du+.25)}if(this.itemT-=t,r.item&&this.itemT<=0){this.itemT=.3;let p=!1;r.item==="turbo"?p=Math.abs(l)<.25&&r.grounded:r.item==="nazar"?p=Math.random()<.4:r.item==="marti"?p=e.some(v=>v!==r&&v.place===r.place-1&&v.progress-r.progress<90&&v.progress>r.progress):r.item==="cay"?p=e.some(v=>v!==r&&r.progress-v.progress>3&&r.progress-v.progress<30)||Math.random()<.05:r.item==="simit"?p=e.some(v=>v!==r&&v.progress-r.progress>4&&v.progress-r.progress<40&&Math.abs(v.f.d-r.f.d)<3)||Math.random()<.03:r.item==="duduk"?p=e.filter(v=>v!==r&&v.pos.distanceTo(r.pos)<12).length>=1:r.item==="kedi"&&(p=Math.random()<.25),p&&(o.item=!0)}else!r.item&&r.shieldT>0&&r.shieldT<7&&this.itemT<=0&&(this.itemT=.4,e.some(p=>p!==r&&p.place===r.place-1&&p.progress-r.progress<30&&p.progress>r.progress)&&Math.random()<.5&&(o.item=!0));(r.stuckT>2.5||r.wrongT>2.5)&&(r.respawn(),r.stuckT=0,r.wrongT=0)}}class d_{constructor(t,e,n,i,r={}){this.scene=t,this.track=e,this.fx=i,this.ev=r,this.boxes=[],this.simits=[],this.pads=[],this.gulls=[],this.puddles=[],this.projs=[],this.cats=[],this.waves=[],this.loose=[],this.shields=new Map,this.m4=new Nt,this.q=new Ye,this.v=new R,this.sc=new R;const a=e.L;for(const m of[70,300,440,800,990,1250])for(const g of[-4.5,-1.5,1.5,4.5])this.boxes.push({s:m,d:g,pos:e.point(m,g*(e.T.w[e.idxOf(m)]/13)),t:0});const o=[[30,0,6],[150,3.5,5],[230,-3,6],[360,0,6],[520,-2,6],[600,2,6],[660,0,4],[780,0,5],[850,-3.5,5],[920,3.5,5],[1060,0,6],[1170,0,5],[1280,-3,5]];for(const[m,g,p]of o)for(let v=0;v<p;v++)this.simits.push({pos:e.point((m+v*4)%a,g).add(new R(0,.9,0)),t:0});this.pads=[{s0:255,s1:262,d:0,w:5},{s0:712,s1:720,d:0,w:6},{s0:1224,s1:1231,d:-2.5,w:5}];const c=n.make(128,128,(m,g,p)=>{const v=m.createLinearGradient(0,0,g,p);v.addColorStop(0,"#9fd8f2"),v.addColorStop(1,"#c7b3f0"),m.fillStyle=v,ba(m,0,0,g,p,18),m.fill(),m.strokeStyle="#ffffff",m.lineWidth=8,ba(m,6,6,g-12,p-12,14),m.stroke(),m.fillStyle="#ffffff",m.font="900 84px ui-rounded, system-ui, sans-serif",m.textAlign="center",m.textBaseline="middle",m.fillText("?",g/2,p/2+6)});this.boxMesh=new Ve(new Re(1.3,1.3,1.3),new ce({map:c,transparent:!0,opacity:.92}),this.boxes.length),this.boxMesh.castShadow=!0,t.add(this.boxMesh);const l=new Pn(.42,.17,10,20);this.simitMesh=new Ve(l,new hf({color:15771989}),this.simits.length),this.simitMesh.castShadow=!0,t.add(this.simitMesh);const h=n.make(128,128,(m,g,p)=>{m.fillStyle="#2f6fb3",ba(m,0,0,g,p,16),m.fill(),m.strokeStyle="#ffffff",m.lineWidth=12,m.lineCap="round",m.lineJoin="round";for(let v=0;v<2;v++)m.beginPath(),m.moveTo(30,34+v*40),m.lineTo(64,14+v*40),m.lineTo(98,34+v*40),m.stroke();m.fillStyle="#9fd0f5",m.beginPath(),m.arc(64,108,10,0,7),m.fill()});for(const m of this.pads){const g=new zi,p=Math.round(m.s1-m.s0),v=new R,_=new R,x=new R,C=new R;for(let E=0;E<p;E++){const L=m.s0+E,M=L+1;e.point(L,m.d-m.w/2,v),e.point(M,m.d-m.w/2,_),e.point(M,m.d+m.w/2,x),e.point(L,m.d+m.w/2,C);for(const y of[v,_,x,C])y.y+=.05;g.quad(v.toArray(),_.toArray(),x.toArray(),C.toArray(),[0,E/p],[0,(E+1)/p],[1,(E+1)/p],[1,E/p])}const w=new at(g.build(),new Pe({map:h,transparent:!0}));t.add(w)}const u=new Re(.5,.06,1.3);u.translate(0,0,.65);const f=new Ce(.4,10,8);f.scale(1.7,.85,.85);const d=new vn(.1,.35,8);d.rotateZ(-Math.PI/2),d.translate(.8,0,0),this.gullGeo={body:f,wing:u,beak:d},this.puddleMat=new Pe({color:13133357,transparent:!0,opacity:.85,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2}),this.glassMat=new ce({color:16777215,transparent:!0,opacity:.75});const b=n.make(256,256,(m,g,p)=>{const v=g/2,_=p/2;for(const[x,C]of[[128,"rgba(47,111,179,0.55)"],[84,"rgba(255,255,255,0.75)"],[54,"rgba(126,192,240,0.8)"],[28,"rgba(25,30,45,0.9)"]])m.fillStyle=C,m.beginPath(),m.arc(v,_,x,0,7),m.fill()});this.shieldMat=new Pe({map:b,transparent:!0,opacity:.55,depthWrite:!1,side:Ue}),this.sync(0)}reset(){for(const t of this.boxes)t.t=0;for(const t of this.simits)t.t=0;for(const t of this.gulls)this.scene.remove(t.obj);this.gulls=[];for(const t of this.puddles)this.scene.remove(t.obj);this.puddles=[];for(const t of this.shields.values())this.scene.remove(t);this.shields.clear();for(const t of[...this.projs,...this.cats,...this.waves,...this.loose])this.scene.remove(t.obj);this.projs=[],this.cats=[],this.waves=[],this.loose=[]}roll(t,e){const n=(t.place-1)/Math.max(1,e-1),i={cay:2.6-1.6*n,simit:2.4-.6*n,nazar:1.6-1*n,duduk:1+.6*n,marti:.7+2.3*n,turbo:.6+2.4*n,kedi:.2+2*n};t.place===1&&(i.marti*=.3,i.kedi=0),t.lastItem&&(i[t.lastItem]*=.15);const r=Object.values(i).reduce((o,c)=>o+c,0);let a=Math.random()*r;for(const o of Object.keys(i))if(a-=i[o],a<=0)return t.lastItem=o,o;return"turbo"}use(t,e){if(!t.item&&t.shieldT>0){t.shieldT=0,this.throwProj(t,"nazar",e,0),this.ev.onUse?.(t,"nazar");return}const n=t.item;if(!n)return;t.item=null;const i=t.juiced;if(n==="turbo")t.boost(i?10:8.5,i?2.6:1.9);else if(n==="nazar")t.shieldT=i?14:10;else if(n==="cay")this.dropTea(t,i);else if(n==="marti")this.launch(t,e,i);else if(n==="simit")for(const r of i?[-.16,0,.16]:[0])this.throwProj(t,"simit",e,r);else n==="duduk"?this.horn(t,i):n==="kedi"&&this.catHerd(t,e,i);this.ev.onUse?.(t,n)}throwProj(t,e,n,i){let r;if(e==="simit"){const h=new at(new Pn(.42,.18,8,16),Yt(15771989));h.castShadow=!0,r=h}else{const h=new ee;for(const[u,f,d]of[[.8,3108787,0],[.55,16777215,.04],[.35,8306928,.08],[.18,1646125,.12]]){const b=new at(new Se(u,u,.12,20),Yt(f));b.rotation.x=Math.PI/2,b.position.z=d,h.add(b)}r=h}const a=t.yaw+i,o=Math.max(t.speed+16,44);let c=null;if(e==="nazar")for(const h of n)h!==t&&!h.finished&&h.place===t.place-1&&h.progress-t.progress<80&&(c=h);const l=t.pos.clone().add(new R(Math.cos(a)*2.4,.7,Math.sin(a)*2.4));this.scene.add(r),this.projs.push({kind:e,obj:r,pos:l,vx:Math.cos(a)*o,vz:Math.sin(a)*o,idx:t.f.i,owner:t,target:c,life:e==="simit"?3.5:4,bounces:0})}horn(t,e){const n=new at(new Pn(1,.12,6,40),new Pe({color:16777215,transparent:!0,opacity:.8,depthWrite:!1}));n.rotation.x=Math.PI/2,this.scene.add(n),this.waves.push({obj:n,pos:t.pos.clone(),t:e?-.2:0,owner:t,hit:new Set([t])})}catHerd(t,e,n){const i=e.filter(r=>r!==t&&!r.finished&&r.progress>t.progress).sort((r,a)=>r.progress-a.progress).slice(0,n?5:3);for(const r of i){this.ev.onTarget?.(r,"kedi");const a=r.f.s+38+Math.random()*10,o=this.track.idxOf(a),c=this.track.T.w[o];for(let l=0;l<3;l++){const h=Math.random()<.5?-1:1,u=-h*(c/2+1+l*1.6),f=this.catModel(l%2?11117469:l?15967834:3947079),d=this.track.point(a+l*2.5,u);f.position.copy(d),this.scene.add(f),this.cats.push({obj:f,pos:d,dir:h,life:6,owner:t,s:a+l*2.5,d:u,w:c,legs:f.userData.legs})}}}catModel(t){const e=new ee,n=[],i=new at(new Ce(.42,10,8),Yt(t));i.scale.set(1.5,.8,.8),i.position.y=.55,e.add(i);const r=new at(new Ce(.3,10,8),Yt(t));r.position.set(.62,.85,0),e.add(r);for(const o of[-1,1]){const c=new at(new vn(.1,.22,4),Yt(t));c.position.set(.62,1.15,o*.15),e.add(c)}for(const[o,c]of[[.35,.2],[.35,-.2],[-.35,.2],[-.35,-.2]]){const l=new at(new Se(.07,.07,.45,5),Yt(t));l.position.set(o,.22,c),e.add(l),n.push(l)}const a=new at(new Se(.05,.07,.7,5),Yt(t));return a.position.set(-.75,.9,0),a.rotation.z=.7,e.add(a),e.scale.setScalar(1.25),e.userData.legs=n,e}tossSimit(t,e){const n=new at(new Pn(.42,.17,8,16),Yt(15771989));n.castShadow=!0;const i=.9,r=new R((e.x-t.x)/i,(e.y-t.y)/i+.5*25*i,(e.z-t.z)/i);n.position.copy(t),this.scene.add(n),this.loose.push({pos:t.clone(),vel:r,obj:n,life:12,landed:!1})}dropTea(t,e){const n=new R(-Math.cos(t.yaw)*2.6,0,-Math.sin(t.yaw)*2.6),i=t.pos.clone().add(n),r={...t.f};this.track.frame(i.x,i.y,i.z,t.f.i,r),i.y=r.h+.04;const a=new ee,o=e?2.8:2.1,c=new at(new za(o,20),this.puddleMat);c.rotation.x=-Math.PI/2,c.scale.set(1,.8,1),a.add(c);const l=new at(new Se(.16,.11,.4,10,1,!0),this.glassMat);l.rotation.z=Math.PI/2,l.position.set(.3,.12,.2),a.add(l);const h=new at(new Se(.26,.26,.04,14),Yt(15037299));h.position.set(-.4,.03,-.3),a.add(h),a.position.copy(i),a.rotation.y=Math.random()*6,this.scene.add(a),this.puddles.push({obj:a,pos:i,life:30,r:o,owner:t,arm:.5});for(let u=0;u<18;u++)this.fx.emit(i.x,i.y+.4,i.z,(Math.random()-.5)*6,Math.random()*4+1,(Math.random()-.5)*6,m_,1,.3,.6,14)}launch(t,e,n){let i=null;for(const u of e)u!==t&&!u.finished&&u.place===t.place-1&&(i=u);const r=new ee;r.add(new at(this.gullGeo.body,Yt(16777215))),r.add(new at(this.gullGeo.beak,Yt(15906891)));const a=new pe,o=new pe,c=new at(this.gullGeo.wing,Yt(13226200));o.add(c);const l=new at(this.gullGeo.wing,Yt(13226200));l.rotation.y=Math.PI,a.add(l),r.add(a,o),r.scale.setScalar(1.3),this.scene.add(r);const h=t.pos.clone().add(new R(Math.cos(t.yaw)*2.5,1.2,Math.sin(t.yaw)*2.5));i&&this.ev.onTarget?.(i,"marti"),this.gulls.push({obj:r,wl:a,wr:o,pos:h,idx:t.f.i,owner:t,target:i,life:n?6:4.5,speed:Math.max(t.speed+14,n?46:40),d:t.f.d})}shieldFor(t){let e=this.shields.get(t);return e||(e=new at(new Ce(1.75,20,14),this.shieldMat.clone()),this.shields.set(t,e),this.scene.add(e)),e}update(t,e,n){const i=this.track;for(const a of this.boxes)a.t=Math.max(0,a.t-t);for(const a of this.simits)a.t=Math.max(0,a.t-t);for(const a of e){for(const o of this.boxes){if(o.t>0)continue;const c=a.pos.x-o.pos.x,l=a.pos.z-o.pos.z,h=a.pos.y+.6-(o.pos.y+1);c*c+l*l<3.2&&Math.abs(h)<2&&(o.t=3.5,this.burst(o.pos,12575735,10),!a.item&&a.rollT<=0&&(a.rollT=a.isPlayer?1.1:.6),this.ev.onPickup?.(a,"box"))}for(const o of this.simits){if(o.t>0)continue;const c=a.pos.x-o.pos.x,l=a.pos.z-o.pos.z,h=a.pos.y+.6-o.pos.y;c*c+l*l<2.6&&Math.abs(h)<1.8&&(o.t=8,a.simit=Math.min(10,a.simit+1),this.ev.onPickup?.(a,"simit"))}if(a.rollT>0&&(a.rollT-=t,a.rollT<=0&&(a.item=this.roll(a,e.length))),a.grounded)for(const o of this.pads)a.f.s>=o.s0&&a.f.s<=o.s1&&Math.abs(a.f.d-o.d)<o.w/2+.4&&(a.boostT<.9&&this.ev.onPad?.(a),a.boost(8,1.2));for(const o of this.puddles){if(o.arm>0||o.life<=0)continue;const c=a.pos.x-o.pos.x,l=a.pos.z-o.pos.z;c*c+l*l<(o.r+.6)**2&&Math.abs(a.pos.y-o.pos.y)<1.5&&a.grounded&&(o.life=0,a.shieldT>0?(a.shieldT=0,this.ev.onBlock?.(a)):a.hit()&&this.ev.onHit?.(a,"cay",o.owner),this.burst(o.pos,13924922,16))}}const r={i:0,t:0,s:0,d:0,h:0,w:13,tx:1,tz:0,flags:0};for(const a of this.gulls){a.life-=t;const o=a.target&&!a.target.finished?a.target:null;i.frame(a.pos.x,a.pos.y,a.pos.z,a.idx,r),a.idx=r.i;let c,l,h;const u=o?o.pos.distanceTo(a.pos):1e9;if(o&&u<22)c=o.pos.x-a.pos.x,l=o.pos.z-a.pos.z,h=o.pos.y+.9;else{const b=i.wrap(r.i+10),m=o?o.f.d:a.d,g=i.point(b*(i.L/i.n),m*.8,this.v);c=g.x-a.pos.x,l=g.z-a.pos.z,h=g.y+1.6}const f=Math.hypot(c,l)||1;a.pos.x+=c/f*a.speed*t,a.pos.z+=l/f*a.speed*t,a.pos.y+=(h-a.pos.y)*Math.min(1,t*6),a.obj.position.copy(a.pos),a.obj.rotation.set(0,-Math.atan2(l,c),0);const d=Math.sin(n*22)*.7;a.wl.rotation.x=d,a.wr.rotation.x=-d,Math.random()<.5&&this.fx.emit(a.pos.x,a.pos.y,a.pos.z,0,.5,0,p_,.6,.35,.5);for(const b of e)if(!(b===a.owner&&a.life>3.8)&&b.pos.distanceToSquared(a.pos.clone().setY(a.pos.y-.6))<3.2){a.life=0,this.burst(b.pos,16777215,18),b.shieldT>0?(b.shieldT=0,this.ev.onBlock?.(b)):b.hit()&&this.ev.onHit?.(b,"marti",a.owner);break}}for(const a of this.gulls)a.life<=0&&this.scene.remove(a.obj);this.gulls=this.gulls.filter(a=>a.life>0);for(const a of this.puddles)a.arm-=t,a.life-=t,a.life<=0&&this.scene.remove(a.obj);this.puddles=this.puddles.filter(a=>a.life>0),this.updateExtras(t,e,n,r);for(const a of e)if(a.shieldT>0){const c=this.shieldFor(a);c.visible=!0,c.position.copy(a.pos).add(new R(0,.85,0)),c.rotation.y=n*1.5,c.material.opacity=a.shieldT<2&&Math.sin(n*20)>0?.2:.55}else{const c=this.shields.get(a);c&&(c.visible=!1)}this.sync(n)}hitKart(t,e,n){if(t.shieldT>0){t.shieldT=0,this.ev.onBlock?.(t);return}t.hit()&&this.ev.onHit?.(t,e,n)}updateExtras(t,e,n,i){const r=this.track;for(const a of this.projs){if(a.life-=t,a.target&&!a.target.finished){const c=a.target.pos.x-a.pos.x,l=a.target.pos.z-a.pos.z,h=Math.hypot(c,l),u=Math.hypot(a.vx,a.vz);h<45&&(a.vx+=(c/h*u-a.vx)*Math.min(1,t*4),a.vz+=(l/h*u-a.vz)*Math.min(1,t*4))}a.pos.x+=a.vx*t,a.pos.z+=a.vz*t,r.frame(a.pos.x,a.pos.y,a.pos.z,a.idx,i),a.idx=i.i,a.pos.y=i.h+.65;const o=i.w/2+.4;if(Math.abs(i.d)>o){const c=-i.tz,l=i.tx,h=a.vx*c+a.vz*l,u=Math.sign(i.d);h*u>0&&(a.vx-=2*h*c,a.vz-=2*h*l,a.bounces++),a.pos.x-=c*u*(Math.abs(i.d)-o),a.pos.z-=l*u*(Math.abs(i.d)-o),a.bounces>4&&(a.life=0)}a.obj.position.copy(a.pos),a.kind==="nazar"?a.obj.rotation.set(0,n*6,0):a.obj.rotation.set(Math.PI/2,0,n*12);for(const c of e)if(!(c===a.owner&&a.life>(a.kind==="simit"?3.2:3.7))&&(c.pos.x-a.pos.x)**2+(c.pos.z-a.pos.z)**2<2.6&&Math.abs(c.pos.y+.6-a.pos.y)<1.6){a.life=0,this.burst(a.pos,a.kind==="simit"?15771989:8306928,14),this.hitKart(c,a.kind==="simit"?"simit":"nazar",a.owner);break}}for(const a of this.projs)a.life<=0&&this.scene.remove(a.obj);this.projs=this.projs.filter(a=>a.life>0);for(const a of this.waves){a.t+=t;const o=Math.max(0,a.t)*30;if(a.obj.position.copy(a.pos).add(new R(0,.8,0)),a.obj.scale.setScalar(Math.max(.01,o)),a.obj.material.opacity=Math.max(0,.8-a.t*1.4),a.t>0)for(const c of e)!a.hit.has(c)&&c.pos.distanceTo(a.pos)<o+1&&o<16&&(a.hit.add(c),this.hitKart(c,"duduk",a.owner),c.vel.addScaledVector(c.pos.clone().sub(a.pos).setY(0).normalize(),9))}for(const a of this.waves)a.t>.6&&this.scene.remove(a.obj);this.waves=this.waves.filter(a=>a.t<=.6);for(const a of this.cats){a.life-=t,a.d+=a.dir*5.5*t,r.point(a.s,a.d,a.pos),a.obj.position.copy(a.pos);const o=r.heading(a.s);a.obj.rotation.y=-(o+(a.dir>0?Math.PI/2:-Math.PI/2)),a.legs.forEach((c,l)=>c.rotation.z=Math.sin(n*18+l*1.6)*.6),Math.abs(a.d)>a.w/2+6&&(a.life=Math.min(a.life,0));for(const c of e)c.slowT<=0&&c.spinT<=0&&(c.pos.x-a.pos.x)**2+(c.pos.z-a.pos.z)**2<2.4&&(c.shieldT>0?(c.shieldT=0,this.ev.onBlock?.(c)):(c.slowT=1.3,c.drifting=!1,c.vy=3,c.grounded=!1,this.ev.onHit?.(c,"kedi",a.owner)),a.life=Math.min(a.life,.3))}for(const a of this.cats)a.life<=0&&this.scene.remove(a.obj);this.cats=this.cats.filter(a=>a.life>0);for(const a of this.loose){a.life-=t,a.landed||(a.vel.y-=25*t,a.pos.addScaledVector(a.vel,t),r.frameGlobal(a.pos.x,a.pos.y,a.pos.z,i),a.pos.y<i.h+.9&&a.vel.y<0&&(a.landed=!0,a.pos.y=i.h+.9)),a.obj.position.copy(a.pos),a.obj.rotation.set(a.landed?0:n*8,n*2.5,0);for(const o of e)if(a.landed&&(o.pos.x-a.pos.x)**2+(o.pos.z-a.pos.z)**2<2.8&&Math.abs(o.pos.y+.6-a.pos.y)<1.8){a.life=0,o.simit=Math.min(10,o.simit+1),this.ev.onPickup?.(o,"simit");break}}for(const a of this.loose)a.life<=0&&this.scene.remove(a.obj);this.loose=this.loose.filter(a=>a.life>0)}burst(t,e,n){const i=new ot(e);for(let r=0;r<n;r++)this.fx.emit(t.x,t.y+.8,t.z,(Math.random()-.5)*8,Math.random()*6+2,(Math.random()-.5)*8,i,1,.35,.7,14)}sync(t){const e=this.m4,n=this.q,i=this.sc;this.boxes.forEach((r,a)=>{const o=r.t<=0?1:r.t<.5?1-r.t/.5:0;n.setFromEuler(new ln(.3,t*1.6+a,.3)),e.compose(this.v.copy(r.pos).add(new R(0,1.1+Math.sin(t*2+a)*.15,0)),n,i.setScalar(o)),this.boxMesh.setMatrixAt(a,e)}),this.boxMesh.instanceMatrix.needsUpdate=!0,this.simits.forEach((r,a)=>{const o=r.t<=0?1:0;n.setFromEuler(new ln(0,t*2.5+a*.4,0)),e.compose(this.v.copy(r.pos).add(new R(0,Math.sin(t*3+a)*.1,0)),n,i.setScalar(o)),this.simitMesh.setMatrixAt(a,e)}),this.simitMesh.instanceMatrix.needsUpdate=!0}}const p_=new ot(16777215),m_=new ot(13133357);class g_{constructor(t,e=900){this.head=0,this.n=e,this.pos=new Float32Array(e*3),this.vel=new Float32Array(e*3),this.col=new Float32Array(e*4),this.life=new Float32Array(e),this.max=new Float32Array(e).fill(1),this.size=new Float32Array(e),this.grav=new Float32Array(e);const n=this.g=new ve;n.setAttribute("position",new fe(this.pos,3).setUsage(Vi)),n.setAttribute("color",new fe(this.col,4).setUsage(Vi)),n.setAttribute("size",new fe(this.size,1).setUsage(Vi));const i=new an({transparent:!0,depthWrite:!1,uniforms:{scale:{value:600}},vertexShader:"attribute float size; attribute vec4 color; varying vec4 vC; uniform float scale; void main(){ vC = color; vec4 mv = modelViewMatrix * vec4(position,1.0); gl_PointSize = size * scale / -mv.z; gl_Position = projectionMatrix * mv; }",fragmentShader:"varying vec4 vC; void main(){ vec2 p = gl_PointCoord - 0.5; float d = length(p); if (d > 0.5) discard; float a = smoothstep(0.5, 0.25, d); gl_FragColor = vec4(vC.rgb, vC.a * a); }"});this.points=new tf(n,i),this.points.frustumCulled=!1,t.add(this.points)}setScale(t){this.points.material.uniforms.scale.value=t*.9}emit(t,e,n,i,r,a,o,c,l,h,u=0){const f=this.head;this.head=(this.head+1)%this.n,this.pos.set([t,e,n],f*3),this.vel.set([i,r,a],f*3),this.col.set([o.r,o.g,o.b,c],f*4),this.life[f]=h,this.max[f]=h,this.size[f]=l,this.grav[f]=u}update(t){for(let e=0;e<this.n;e++){if(this.life[e]<=0){this.size[e]=0;continue}this.life[e]-=t;const n=e*3;this.vel[n+1]-=this.grav[e]*t,this.pos[n]+=this.vel[n]*t,this.pos[n+1]+=this.vel[n+1]*t,this.pos[n+2]+=this.vel[n+2]*t;const i=Math.max(0,this.life[e]/this.max[e]);this.col[e*4+3]=Math.min(this.col[e*4+3],i*1.2),this.life[e]<=0&&(this.size[e]=0)}this.g.attributes.position.needsUpdate=!0,this.g.attributes.color.needsUpdate=!0,this.g.attributes.size.needsUpdate=!0}}class b_{constructor(t){this.c={gas:0,brake:0,steer:0,drift:!1,item:!1},this.touch=!1,this.onKey=null,this.keys=new Set,this.kSteer=0,this.tSteer=0,this.steerId=null,this.steerX0=0,this.tDrift=!1,this.tItem=!1,this.tBrake=!1,this.dTap=!1,this.iTap=!1,this.gpPrev=[],addEventListener("keydown",o=>{const c=o.key.toLowerCase();this.keys.has(c)||(this.onKey?.(c),(c===" "||c==="shift")&&(this.dTap=!0),["e","enter","control","f"].includes(c)&&(this.iTap=!0)),this.keys.add(c),["arrowup","arrowdown","arrowleft","arrowright"," "].includes(c)&&o.preventDefault()}),addEventListener("keyup",o=>this.keys.delete(o.key.toLowerCase())),addEventListener("blur",()=>this.keys.clear());const e=t.querySelector("#tSteer"),n=t.querySelector("#tKnob"),i=()=>Math.min(innerWidth*.13,72);e.addEventListener("pointerdown",o=>{this.touch=!0,this.steerId=o.pointerId,this.steerX0=o.clientX,e.setPointerCapture(o.pointerId),this.tSteer=0,n.style.left=o.clientX-e.getBoundingClientRect().left+"px",n.style.top=o.clientY-e.getBoundingClientRect().top+"px",n.classList.add("on"),o.preventDefault()}),e.addEventListener("pointermove",o=>{if(o.pointerId!==this.steerId)return;let c=o.clientX-this.steerX0;const l=i();Math.abs(c)>l*1.4&&(this.steerX0=o.clientX-Math.sign(c)*l*1.4,c=o.clientX-this.steerX0);const h=Math.max(-1,Math.min(1,c/l)),u=Math.max(0,Math.abs(h)-.06)/.94;this.tSteer=Math.sign(h)*Math.pow(u,1.35),n.style.setProperty("--dx",h*40+"px")});const r=o=>{o.pointerId===this.steerId&&(this.steerId=null,this.tSteer=0,n.classList.remove("on"),n.style.setProperty("--dx","0px"))};e.addEventListener("pointerup",r),e.addEventListener("pointercancel",r);const a=(o,c)=>{const l=t.querySelector(o);l.addEventListener("pointerdown",u=>{this.touch=!0,c(!0),l.classList.add("on"),l.setPointerCapture(u.pointerId),u.preventDefault(),u.stopPropagation()});const h=()=>{c(!1),l.classList.remove("on")};l.addEventListener("pointerup",h),l.addEventListener("pointercancel",h),l.addEventListener("lostpointercapture",h)};a("#tDrift",o=>{this.tDrift=o,o&&(this.dTap=!0)}),a("#tItem",o=>{this.tItem=o,o&&(this.iTap=!0)}),a("#tBrake",o=>this.tBrake=o)}has(...t){return t.some(e=>this.keys.has(e))}update(t){const e=this.c,n=(this.has("d","arrowright")?1:0)-(this.has("a","q","arrowleft")?1:0);this.kSteer+=(n-this.kSteer)*Math.min(1,t*(n!==0?9:14));let i=this.steerId!==null?this.tSteer:this.kSteer,r=this.has("w","z","arrowup")||this.touch&&!this.tBrake?1:0,a=this.has("s","arrowdown")||this.tBrake?1:0,o=this.has(" ","shift")||this.tDrift,c=this.has("e","enter","control","f")||this.tItem;const l=navigator.getGamepads?[...navigator.getGamepads()].find(h=>h):null;if(l){const h=l.axes[0]??0;Math.abs(h)>.15&&(i=h),l.buttons[14]?.pressed&&(i=-1),l.buttons[15]?.pressed&&(i=1),r=Math.max(r,l.buttons[0]?.pressed?1:0,l.buttons[7]?.value??0),a=Math.max(a,l.buttons[2]?.pressed?1:0,l.buttons[6]?.value??0),o=o||!!l.buttons[5]?.pressed,c=c||!!l.buttons[4]?.pressed||!!l.buttons[1]?.pressed;const u=!!l.buttons[9]?.pressed;u&&!this.gpPrev[9]&&this.onKey?.("escape"),this.gpPrev[9]=u}e.steer=i,e.gas=r,e.brake=a,e.drift=o||this.dTap,e.item=c||this.iTap,this.dTap=!1,this.iTap=!1}}class x_{constructor(){this.ctx=null,this.muted=!1,this.musicOn=!0,this.nextNote=0,this.step=0,this.playing=!1}start(){if(this.ctx){this.ctx.state==="suspended"&&this.ctx.resume();return}const t=window.AudioContext||window.webkitAudioContext,e=this.ctx=new t;this.master=e.createGain(),this.master.gain.value=this.muted?0:.8,this.master.connect(e.destination),this.sfx=e.createGain(),this.sfx.gain.value=.7,this.sfx.connect(this.master),this.musicG=e.createGain(),this.musicG.gain.value=.22,this.musicG.connect(this.master),this.noise=e.createBuffer(1,e.sampleRate,e.sampleRate);const n=this.noise.getChannelData(0);for(let u=0;u<n.length;u++)n[u]=Math.random()*2-1;const i=e.createOscillator(),r=e.createOscillator(),a=e.createGain(),o=e.createBiquadFilter();i.type="sawtooth",r.type="square",o.type="lowpass",o.frequency.value=600,a.gain.value=0,i.connect(o),r.connect(o),o.connect(a),a.connect(this.sfx),i.start(),r.start(),this.eng={o1:i,o2:r,g:a,f:o};const c=e.createBufferSource();c.buffer=this.noise,c.loop=!0;const l=e.createBiquadFilter();l.type="bandpass",l.frequency.value=1800,l.Q.value=3;const h=e.createGain();h.gain.value=0,c.connect(l),l.connect(h),h.connect(this.sfx),c.start(),this.skid={g:h,f:l}}setMuted(t){this.muted=t,this.ctx&&this.master.gain.setTargetAtTime(t?0:.8,this.ctx.currentTime,.05)}engine(t,e,n,i,r){if(!this.ctx||!this.eng)return;const a=this.ctx.currentTime,o=this.eng,c=55+Math.abs(t)*4.2+(i?40:0);o.o1.frequency.setTargetAtTime(c,a,.05),o.o2.frequency.setTargetAtTime(c*.5,a,.05),o.f.frequency.setTargetAtTime(400+e*900+(i?700:0),a,.08),o.g.gain.setTargetAtTime(r?.05+e*.05:0,a,.1),this.skid.g.gain.setTargetAtTime(r&&n?.07:0,a,.05),this.skid.f.frequency.setTargetAtTime(1500+Math.abs(t)*20,a,.1)}tone(t,e,n="square",i=.2,r=0,a=0){if(!this.ctx)return;const o=this.ctx.currentTime+a,c=this.ctx.createOscillator(),l=this.ctx.createGain();c.type=n,c.frequency.setValueAtTime(t,o),r&&c.frequency.exponentialRampToValueAtTime(Math.max(30,t*r),o+e),l.gain.setValueAtTime(i,o),l.gain.exponentialRampToValueAtTime(.001,o+e),c.connect(l),l.connect(this.sfx),c.start(o),c.stop(o+e+.02)}burst(t,e,n=.3,i=1,r=0){if(!this.ctx)return;const a=this.ctx.currentTime+r,o=this.ctx.createBufferSource(),c=this.ctx.createBiquadFilter(),l=this.ctx.createGain();o.buffer=this.noise,c.type="bandpass",c.frequency.value=e,c.Q.value=i,l.gain.setValueAtTime(n,a),l.gain.exponentialRampToValueAtTime(.001,a+t),o.connect(c),c.connect(l),l.connect(this.sfx),o.start(a,Math.random()*.5),o.stop(a+t+.02)}simit(){this.tone(988,.08,"triangle",.18),this.tone(1318,.12,"triangle",.16,0,.06)}box(){[523,659,784,1046].forEach((t,e)=>this.tone(t,.09,"triangle",.12,0,e*.04))}boost(t){this.burst(.5,900+t*300,.35,.8),this.tone(220+t*110,.35,"sawtooth",.08,2.2)}horn(){if(!this.ctx)return;const t=this.ctx.currentTime;for(const e of[146.8,220]){const n=this.ctx.createOscillator(),i=this.ctx.createGain();n.type="sawtooth",n.frequency.value=e,i.gain.setValueAtTime(1e-4,t),i.gain.exponentialRampToValueAtTime(.12,t+.06),i.gain.setValueAtTime(.12,t+.7),i.gain.exponentialRampToValueAtTime(.001,t+.95),n.connect(i),i.connect(this.sfx),n.start(t),n.stop(t+1)}}meow(){if(!this.ctx)return;const t=this.ctx.currentTime,e=this.ctx.createOscillator(),n=this.ctx.createGain(),i=this.ctx.createBiquadFilter();e.type="sawtooth",e.frequency.setValueAtTime(520,t),e.frequency.linearRampToValueAtTime(780,t+.12),e.frequency.linearRampToValueAtTime(430,t+.38),i.type="bandpass",i.frequency.value=1300,i.Q.value=2,n.gain.setValueAtTime(1e-4,t),n.gain.exponentialRampToValueAtTime(.14,t+.05),n.gain.exponentialRampToValueAtTime(.001,t+.4),e.connect(i),i.connect(n),n.connect(this.sfx),e.start(t),e.stop(t+.42)}throwIt(){this.burst(.18,1400,.2,1.2),this.tone(500,.12,"triangle",.08,1.8)}rain(t){if(this.ctx){if(!this.rainG){const e=this.ctx.createBufferSource();e.buffer=this.noise,e.loop=!0;const n=this.ctx.createBiquadFilter();n.type="highpass",n.frequency.value=900,this.rainG=this.ctx.createGain(),this.rainG.gain.value=0,e.connect(n),n.connect(this.rainG),this.rainG.connect(this.sfx),e.start()}this.rainG.gain.setTargetAtTime(t*.11,this.ctx.currentTime,.3)}}thunder(){this.burst(2.2,90,.7,.4),this.burst(1.4,160,.4,.5,.15)}ready(){this.tone(1568,.06,"triangle",.1)}fail(){this.tone(180,.18,"square",.1,.6)}hop(){this.tone(300,.08,"triangle",.08,1.6)}hit(){this.burst(.35,300,.5,.7),this.tone(160,.4,"sawtooth",.12,.4)}wall(){this.burst(.15,200,.3,1)}land(){this.burst(.12,150,.25,1)}gull(){if(this.ctx)for(let t=0;t<2;t++){const e=this.ctx.currentTime+t*.16,n=this.ctx.createOscillator(),i=this.ctx.createGain();n.type="sawtooth",n.frequency.setValueAtTime(1500,e),n.frequency.exponentialRampToValueAtTime(900,e+.13),i.gain.setValueAtTime(1e-4,e),i.gain.exponentialRampToValueAtTime(.09,e+.02),i.gain.exponentialRampToValueAtTime(.001,e+.14),n.connect(i),i.connect(this.sfx),n.start(e),n.stop(e+.16)}}splash(){this.burst(.3,700,.3,.6)}shield(){[880,1108,1318].forEach((t,e)=>this.tone(t,.25,"sine",.1,0,e*.05))}block(){this.tone(1318,.2,"sine",.15,.5)}beep(t){this.tone(t?880:440,t?.5:.22,"square",.14)}lap(){[659,784,988].forEach((t,e)=>this.tone(t,.14,"square",.1,0,e*.09))}finish(t){(t?[523,659,784,1046,784,1046]:[523,494,440,392]).forEach((n,i)=>this.tone(n,.22,"square",.12,0,i*.14))}click(){this.tone(660,.05,"triangle",.1)}music(t){this.playing=t&&this.musicOn,this.ctx&&this.playing&&(this.nextNote=Math.max(this.nextNote,this.ctx.currentTime+.05))}tick(){if(!this.ctx||!this.playing)return;const t=138,e=60/t/2,n=[293.7,311.1,370,392,440,466.2,523.3,587.3],i=[0,2,3,4,3,2,1,0,4,5,4,3,2,3,2,1,0,2,3,4,6,5,4,3,4,3,2,1,2,1,0,-1],r=[0,0,4,4,3,3,0,0];for(;this.nextNote<this.ctx.currentTime+.2;){const a=this.nextNote-this.ctx.currentTime,o=this.step%32;i[o]>=0&&o%4!==3&&this.mnote(n[i[o]]*2,e*.9,"square",.05,a),o%4===0&&this.mnote(n[r[(this.step>>2)%8]]/2,e*3,"triangle",.12,a),o%4===0&&this.mdrum(a,90,.25),o%4===2&&this.mdrum(a,4e3,.04),o%8===4&&this.mdrum(a,1200,.12),this.nextNote+=e,this.step++}}mnote(t,e,n,i,r){const a=this.ctx.currentTime+r,o=this.ctx.createOscillator(),c=this.ctx.createGain();o.type=n,o.frequency.value=t,c.gain.setValueAtTime(i,a),c.gain.exponentialRampToValueAtTime(.001,a+e),o.connect(c),c.connect(this.musicG),o.start(a),o.stop(a+e+.02)}mdrum(t,e,n){const i=this.ctx.currentTime+t;if(e<200){const c=this.ctx.createOscillator(),l=this.ctx.createGain();c.frequency.setValueAtTime(140,i),c.frequency.exponentialRampToValueAtTime(45,i+.12),l.gain.setValueAtTime(n,i),l.gain.exponentialRampToValueAtTime(.001,i+.15),c.connect(l),l.connect(this.musicG),c.start(i),c.stop(i+.17);return}const r=this.ctx.createBufferSource(),a=this.ctx.createBiquadFilter(),o=this.ctx.createGain();r.buffer=this.noise,a.type="highpass",a.frequency.value=e,o.gain.setValueAtTime(n,i),o.gain.exponentialRampToValueAtTime(.001,i+.06),r.connect(a),a.connect(o),o.connect(this.musicG),r.start(i,Math.random()*.5),r.stop(i+.08)}}function Fi(s){const t=document.createElement("canvas");t.width=t.height=128;const e=t.getContext("2d");return e.lineJoin=e.lineCap="round",s(e),t.toDataURL()}const nr={marti:Fi(s=>{s.fillStyle="#c9d0d8",s.beginPath(),s.moveTo(20,50),s.quadraticCurveTo(45,20,64,58),s.quadraticCurveTo(83,20,108,50),s.quadraticCurveTo(84,44,64,72),s.quadraticCurveTo(44,44,20,50),s.fill(),s.fillStyle="#fff",s.beginPath(),s.ellipse(64,72,26,17,0,0,7),s.fill(),s.beginPath(),s.arc(86,62,12,0,7),s.fill(),s.fillStyle="#f2b84b",s.beginPath(),s.moveTo(96,60),s.lineTo(114,66),s.lineTo(96,68),s.fill(),s.fillStyle="#2b2833",s.beginPath(),s.arc(89,59,2.6,0,7),s.fill(),s.strokeStyle="#3c3a47",s.lineWidth=3,s.beginPath(),s.ellipse(64,72,26,17,0,0,7),s.stroke()}),cay:Fi(s=>{s.fillStyle="#e57373",s.beginPath(),s.ellipse(64,108,38,9,0,0,7),s.fill(),s.fillStyle="rgba(255,255,255,.9)",s.beginPath(),s.moveTo(42,22),s.quadraticCurveTo(38,40,50,60),s.quadraticCurveTo(40,82,48,102),s.lineTo(80,102),s.quadraticCurveTo(88,82,78,60),s.quadraticCurveTo(90,40,86,22),s.closePath(),s.fill(),s.fillStyle="#c8662d",s.beginPath(),s.moveTo(45,36),s.quadraticCurveTo(43,46,52,60),s.quadraticCurveTo(43,82,50,99),s.lineTo(78,99),s.quadraticCurveTo(85,82,76,60),s.quadraticCurveTo(85,46,83,36),s.closePath(),s.fill(),s.strokeStyle="#3c3a47",s.lineWidth=3,s.beginPath(),s.moveTo(42,22),s.quadraticCurveTo(38,40,50,60),s.quadraticCurveTo(40,82,48,102),s.lineTo(80,102),s.quadraticCurveTo(88,82,78,60),s.quadraticCurveTo(90,40,86,22),s.stroke(),s.strokeStyle="rgba(255,255,255,.8)",s.lineWidth=3,s.beginPath(),s.moveTo(56,6),s.quadraticCurveTo(50,12,58,18),s.moveTo(72,4),s.quadraticCurveTo(66,10,74,16),s.stroke()}),nazar:Fi(s=>{for(const[t,e]of[[52,"#2f6fb3"],[36,"#ffffff"],[24,"#7ec0f0"],[12,"#191e2d"]])s.fillStyle=e,s.beginPath(),s.arc(64,64,t,0,7),s.fill();s.fillStyle="rgba(255,255,255,.7)",s.beginPath(),s.ellipse(44,40,10,6,-.6,0,7),s.fill()}),turbo:Fi(s=>{s.fillStyle="#f6a65a",s.beginPath(),s.moveTo(64,10),s.quadraticCurveTo(104,56,86,92),s.quadraticCurveTo(64,124,42,92),s.quadraticCurveTo(24,56,64,10),s.fill(),s.fillStyle="#f7d774",s.beginPath(),s.moveTo(64,40),s.quadraticCurveTo(86,70,76,92),s.quadraticCurveTo(64,108,52,92),s.quadraticCurveTo(42,70,64,40),s.fill(),s.fillStyle="#fff8ee",s.beginPath(),s.arc(64,90,9,0,7),s.fill()}),simit:Fi(s=>{s.fillStyle="#e39a4c",s.beginPath(),s.arc(64,64,46,0,7),s.arc(64,64,18,0,7,!0),s.fill(),s.strokeStyle="#3c3a47",s.lineWidth=3,s.beginPath(),s.arc(64,64,46,0,7),s.stroke(),s.beginPath(),s.arc(64,64,18,0,7),s.stroke(),s.fillStyle="#fff3d6";for(let t=0;t<22;t++){const e=t*.9,n=26+t%3*7;s.beginPath(),s.ellipse(64+Math.cos(e)*n,64+Math.sin(e)*n,3.5,2,e,0,7),s.fill()}}),duduk:Fi(s=>{s.fillStyle="#f7f6ff",s.fillRect(20,62,70,20),s.fillStyle="#2f4b6e",s.beginPath(),s.moveTo(12,82),s.lineTo(98,82),s.lineTo(88,100),s.lineTo(22,100),s.fill(),s.fillStyle="#f2c14e",s.fillRect(48,38,16,26),s.fillStyle="#3c3a47",s.fillRect(48,34,16,7),s.strokeStyle="#fff",s.lineWidth=6;for(let t=0;t<3;t++)s.beginPath(),s.arc(70,40,18+t*14,-1.1,-.2),s.stroke()}),kedi:Fi(s=>{s.fillStyle="#f3a65a",s.beginPath(),s.moveTo(24,50),s.lineTo(34,14),s.lineTo(56,38),s.lineTo(72,38),s.lineTo(94,14),s.lineTo(104,50),s.quadraticCurveTo(110,108,64,110),s.quadraticCurveTo(18,108,24,50),s.fill(),s.strokeStyle="#3c3a47",s.lineWidth=3,s.stroke(),s.fillStyle="#2b2833",s.beginPath(),s.ellipse(48,66,6,9,0,0,7),s.ellipse(80,66,6,9,0,0,7),s.fill(),s.fillStyle="#f28fa0",s.beginPath(),s.moveTo(58,82),s.lineTo(70,82),s.lineTo(64,89),s.fill(),s.strokeStyle="#3c3a47",s.lineWidth=2;for(const t of[-1,1])for(const e of[-1,1])s.beginPath(),s.moveTo(64+t*12,88+e*3),s.lineTo(64+t*40,84+e*8),s.stroke()})},bf={marti:"Martı",cay:"Çay",nazar:"Nazar",turbo:"Turbo",simit:"Simit",duduk:"Vapur düdüğü",kedi:"Kedi sürüsü"};class v_{constructor(t,e){this.cv=t,this.track=e,this.sx=1,this.ox=0,this.oz=0,this.c=t.getContext("2d");const n=e.T;let i=1e9,r=-1e9,a=1e9,o=-1e9;for(let m=0;m<n.n;m++)i=Math.min(i,n.x[m]),r=Math.max(r,n.x[m]),a=Math.min(a,n.z[m]),o=Math.max(o,n.z[m]);const c=t.width-20;this.sx=c/Math.max(r-i,o-a),this.ox=10-i*this.sx+(c-(r-i)*this.sx)/2,this.oz=10-a*this.sx+(c-(o-a)*this.sx)/2,this.bg=document.createElement("canvas"),this.bg.width=t.width,this.bg.height=t.height;const l=this.bg.getContext("2d");l.lineJoin=l.lineCap="round";const h=()=>{l.beginPath();for(let m=0;m<=n.n;m++){const g=m%n.n,[p,v]=this.p(n.x[g],n.z[g]);m?l.lineTo(p,v):l.moveTo(p,v)}};h(),l.strokeStyle="rgba(60,58,71,.45)",l.lineWidth=11,l.stroke(),h(),l.strokeStyle="#fff8ee",l.lineWidth=6,l.stroke();const[u,f]=this.p(n.tower.x,n.tower.z);l.fillStyle="#8da6c2",l.beginPath(),l.arc(u,f,5,0,7),l.fill();const[d,b]=this.p(n.x[0],n.z[0]);l.fillStyle="#3c3a47",l.fillRect(d-1.5,b-7,3,14)}p(t,e){return[t*this.sx+this.ox,e*this.sx+this.oz]}draw(t,e){const n=this.c;n.clearRect(0,0,this.cv.width,this.cv.height),n.drawImage(this.bg,0,0);for(const i of[...t].sort(r=>r===e?1:-1)){const[r,a]=this.p(i.pos.x,i.pos.z);n.fillStyle="#"+i.def.color.toString(16).padStart(6,"0"),n.strokeStyle=i===e?"#3c3a47":"#fff",n.lineWidth=i===e?3:2,n.beginPath(),n.arc(r,a,i===e?6.5:4.5,0,7),n.fill(),n.stroke()}}}class __{constructor(t){this.el=t}show(t,e=""){const n=document.createElement("div");n.textContent=t,e&&(n.className=e),this.el.innerHTML="",this.el.appendChild(n)}}function xf(s){const t=Math.floor(s/60),e=s-t*60;return`${t}:${e<10?"0":""}${e.toFixed(2)}`}const hr=3,Wi=new URLSearchParams(location.search),In=matchMedia("(pointer: coarse)").matches||/Android|iPhone|iPad/i.test(navigator.userAgent),Ht=s=>document.querySelector(s),Ps={get(s){try{return localStorage.getItem("bd."+s)}catch{return null}},set(s,t){try{localStorage.setItem("bd."+s,t)}catch{}}},Dc=Ht("#view");let gn;try{gn=new Xb({canvas:Dc,antialias:!In,powerPreference:"high-performance"})}catch{throw Ht("#ltxt").textContent="Bu cihazda 3B görüntü başlatılamadı.",new Error("webgl")}const oa=Math.min(devicePixelRatio,In?1.5:2);gn.setPixelRatio(1);gn.shadowMap.enabled=!0;gn.shadowMap.type=Su;gn.outputColorSpace=Ie;const ur=new e_(gn,In?0:4),qe=new Zc;qe.fog=new Jc(14264248,220,1400);const xe=new We(70,1,.3,2e3),vf=new pf(12832245,10127528,1.9);qe.add(vf);const zn=new hl(16764830,2.3);zn.castShadow=!0;zn.shadow.mapSize.set(In?1024:2048,In?1024:2048);Object.assign(zn.shadow.camera,{left:-55,right:55,top:55,bottom:-55,near:1,far:400});zn.shadow.bias=-8e-4;zn.shadow.normalBias=.06;qe.add(zn,zn.target);const M_=Ht("#loading .lbar i"),y_=Ht("#lpct"),S_=Ht("#ltxt");let ca=0;const Xi=(s,t)=>{ca=Math.max(ca,s),M_.style.width=ca*100+"%",y_.textContent=`%${Math.round(ca*100)}`,t&&(S_.textContent=t)},ml=()=>new Promise(s=>requestAnimationFrame(()=>s(0)));Xi(.02,"Harita indiriliyor…");const _f=await dl.load("./",s=>Xi(.02+s*.38));Xi(.42,"Pist çiziliyor…");await ml();const Ha=new uv,Ee=new hv(_f.H);Ee.build(qe,Ha);Xi(.48,"Arazi ve sokaklar…");await ml();const Er=new Jv(qe,_f,Ee,In);await Er.build((s,t)=>Xi(.5+t*.44,s));Xi(.95,"Seyirciler yerleşiyor…");await ml();const pu=new t_(qe,Ee,Er,Ha,In),En=new g_(qe,In?600:1e3),Mf=new s_(qe),Lt=new x_,Hi=new b_(Ht("#ui")),pn=new __(Ht("#msg")),T_=new v_(Ht("#mini"),Ee);let Jt="title",cn=!1,Nn=Math.max(0,Math.min(5,Number(Ps.get("char")??0)||0)),fr=Ps.get("diff")||"normal";Lt.muted=Ps.get("mute")==="1";let Te=[],Aa=[],Dt,_i=null,si=0,dr=0,pr=0,ir=4,Ra=-9,mu=!1,Uc=!1;const w_=Wi.has("auto"),Ca=new d_(qe,Ee,Ha,En,{onPickup(s,t){s===Dt&&(t==="simit"?(Lt.simit(),s.simit===10&&pn.show("SİMİT DOLU!","t2")):Lt.box())},onUse(s,t){if(t==="marti"){No(s)&&Lt.gull();return}if(t==="duduk"){No(s)&&Lt.horn();return}if(t==="kedi"){Lt.meow();return}s===Dt&&(t==="nazar"&&(s.shieldT>0?Lt.shield():Lt.throwIt()),t==="turbo"&&Lt.boost(3),t==="cay"&&Lt.splash(),t==="simit"&&Lt.throwIt())},onTarget(s,t){s===Dt&&(pn.show(t==="marti"?"Martı geliyor!":"Dikkat, kediler!","bad"),t==="marti"&&Lt.gull())},onHit(s,t,e){No(s)&&(t==="kedi"?Lt.meow():Lt.hit());const i={marti:["Martı saldırısı!",`Martı ${s.def.name}’i yakaladı!`],cay:["Çaya bastın!",`${s.def.name} çayda kaydı!`],simit:["Simit isabet!",`Simit ${s.def.name}’e çarptı!`],nazar:["Nazar değdi!",`Nazar ${s.def.name}’e değdi!`],duduk:["Vapur düdüğü!",`${s.def.name} düdükle savruldu!`],kedi:["Kedilere takıldın!",`${s.def.name} kedilere takıldı!`]}[t]||["Vuruldun!",`${s.def.name} vuruldu!`];s===Dt?pn.show(i[0],"bad"):e===Dt&&pn.show(i[1],"t1")},onBlock(s){s===Dt&&(Lt.block(),pn.show("Nazar korudu!","t1"))},onPad(s){s===Dt&&Lt.boost(2)}}),No=s=>s===Dt||s.pos.distanceTo(Dt.pos)<35,yf=new r_(qe,Ee,Er,Ca,En,In),On=new o_(qe,zn,vf,Er.skyMats,In);On.onStart=()=>pn.show("Yağmur başladı!","t1");On.onThunder=()=>Lt.thunder();function E_(){for(const r of Te)qe.remove(r.model.root);Ca.reset(),Mf.reset(),Te=[],Aa=[];const s=[0,1,2,3,4,5].filter(r=>r!==Nn),t=[0,1,2,3,4,5],e=3,n=fr==="kolay"?[.2,.3,.35,.4,.45]:fr==="zor"?[.8,.85,.9,.95,1]:[.5,.55,.62,.68,.75];let i=0;for(const r of t){const a=r===e,o=a?Nn:s[i],c=new f_(Ee,o,a,A_),l=Math.floor(r/2),h=r%2?3.2:-3.2;c.place0(Ee.L-8-l*7.5,h),c.model.root.traverse(f=>{f.isMesh&&(f.castShadow=!0)});const u=Cs[o].stats;c.stat={spd:(u[0]-3)/2,acc:(u[1]-3)/2,han:(u[2]-3)/2},qe.add(c.model.root),Te.push(c),a?Dt=c:(Aa.push(new Ic(c,Ee,n[i])),i++)}Wi.has("at")&&Dt.place0(Number(Wi.get("at")),0),_i=w_?new Ic(Dt,Ee,1):null,si=0,pr=0,ir=4,Ra=-9,Uc=!1,On.plan(),Wi.has("rain")&&(On.startAt=.1);for(const r of Te)r.sync(0,0)}const A_={onBoost(s,t){s===Dt&&(Lt.boost(t),pn.show(["","TURBO!","SÜPER TURBO!","ULTRA TURBO!"][t],"t"+t))},onDriftFail(s,t){s===Dt&&(Lt.fail(),pn.show(t?"Geç kaldın!":"Erken!","bad"))},onDriftStart(s){s===Dt&&Lt.hop()},onLand(s,t){s===Dt&&t>5&&Lt.land(),L_(s,t>9?14:6)},onWall(s){s===Dt&&Lt.wall()},onHit(){}},Ks=new R,Fo=new R;let la=70,fs=!1,Ys=0,Js=0;function R_(s,t){if(Jt==="select"){const m=innerHeight<500,g=xe.aspect<1?11:m?8.6:7.2;xe.position.copy(Ti).addScaledVector(ko,g).add(new R(0,1.9,0)).addScaledVector(new R(-ko.z,0,ko.x),xe.aspect>1.3?1.2:0),xe.lookAt(Ti.x,Ti.y+(m?1:2.2),Ti.z),xe.fov=50,xe.updateProjectionMatrix(),fs=!1,wn&&(wn.root.rotation.y=t*.6,wn.root.position.y=.52+Math.abs(Math.sin(t*3))*.04,wn.wheels.forEach(p=>p.rotation.z-=.05)),ur.mat.uniforms.speed.value=0;return}if(Jt==="title"){const m=Ee.T.tower,g=t*.06+2.2,p=xe.aspect<1?150/Math.max(.5,xe.aspect):150;xe.position.set(m.x+Math.cos(g)*p,m.y0+52+(p-150)*.25,m.z+Math.sin(g)*p),xe.lookAt(m.x,m.y0+26,m.z),xe.fov=50,xe.updateProjectionMatrix(),fs=!1;return}const e=Dt,n=e.drifting?3.2:e.spinT>0?1.5:6.5;fs||(Ys=e.yaw);let i=e.yaw-Ys;i=Math.atan2(Math.sin(i),Math.cos(i)),Ys+=i*Math.min(1,s*n);const r=Math.cos(Ys),a=Math.sin(Ys),o=Math.max(0,e.speed),c=5.6+Math.min(1.2,o*.03),l=2.25+Math.min(.5,o*.012),h=new R(e.pos.x-r*c,e.pos.y+l,e.pos.z-a*c),u=new R(e.pos.x+r*7,e.pos.y+1.15,e.pos.z+a*7);fs||(Ks.copy(h),Fo.copy(u),fs=!0);const f=1-Math.exp(-s*14),d=1-Math.exp(-s*16);Ks.lerp(h,f),Fo.lerp(u,d),Ks.y<e.f.h+1.3&&(Ks.y=e.f.h+1.3),Js=Math.max(Js*Math.exp(-s*7),e.squash*.35,e.boostT>0?.04:0),xe.position.copy(Ks).add(new R((Math.random()-.5)*Js,(Math.random()-.5)*Js,(Math.random()-.5)*Js)),xe.lookAt(Fo),xe.rotateZ(-e.driftVis*.035);const b=70+Math.min(9,Math.max(0,o-18)*.45)+(e.boostT>0?9:0);la+=(b-la)*Math.min(1,s*5),xe.fov=xe.aspect<1?Math.min(100,2*Math.atan(Math.tan(la*Math.PI/360)/xe.aspect*.62)*180/Math.PI):la,xe.updateProjectionMatrix(),ur.mat.uniforms.speed.value=Jt==="race"?Math.min(1,Math.max(0,(o-30)/9)+(e.boostT>0?.6:0)):0,ur.mat.uniforms.time.value=t}const fn={white:new ot(16777215),grey:new ot(14275792),pink:new ot(16743080),l1:new ot(8306928),l2:new ot(16164442),l3:new ot(11833072),flame:new ot(16757596),flame2:new ot(16773536),dust:new ot(15392718),spray:new ot(14673653)},C_=new R;function Zs(s,t,e,n){const i=Math.cos(s.yaw),r=Math.sin(s.yaw);return C_.set(s.pos.x+t*i-n*r,s.pos.y+e,s.pos.z+t*r+n*i)}function P_(s){if(s.pos.distanceToSquared(xe.position)<4900){if(s.drifting&&s.grounded){const e=s.charge>=kn[0],n=s.boosts>=3?fn.l3:e?fn.pink:s.boosts===2?fn.l2:s.boosts===1?fn.l1:fn.grey;for(const i of[-1,1]){const r=Zs(s,-.8,.15,i*.85);(e||s.boosts>0)&&En.emit(r.x,r.y,r.z,(Math.random()-.5)*4,Math.random()*3+1,(Math.random()-.5)*4,n,1,.22,.35,12),Math.random()<.3&&En.emit(r.x,r.y+.2,r.z,Math.random()-.5,1.2,Math.random()-.5,fn.white,.3,.7,.45)}}if(s.boostT>0)for(const e of s.model.exhaust){const n=Zs(s,e.x,e.y,e.z),i=-12;En.emit(n.x,n.y,n.z,Math.cos(s.yaw)*i*.3+(Math.random()-.5),Math.random(),Math.sin(s.yaw)*i*.3+(Math.random()-.5),Math.random()<.5?fn.flame:fn.flame2,1,.55,.22)}else if(s.speed>2&&s.speed<20&&Math.random()<.1){const e=s.model.exhaust[0],n=Zs(s,e.x,e.y,e.z);En.emit(n.x,n.y,n.z,0,.8,0,fn.white,.2,.3,.4)}if(On.level>.4&&s.grounded&&s.speed>8)for(const e of[-1,1]){const n=Zs(s,-.9,.2,e*.75);En.emit(n.x,n.y,n.z,-Math.cos(s.yaw)*3+(Math.random()-.5)*2,1.5+Math.random()*2,-Math.sin(s.yaw)*3+(Math.random()-.5)*2,fn.spray,.3*On.level,.26,.4,10)}if(s.spinT>0&&Math.random()<.6){const e=Zs(s,0,1.6,0);En.emit(e.x,e.y,e.z,(Math.random()-.5)*3,2,(Math.random()-.5)*3,fn.flame2,1,.3,.5)}}}function L_(s,t){for(let e=0;e<t;e++)En.emit(s.pos.x+(Math.random()-.5)*2,s.pos.y+.2,s.pos.z+(Math.random()-.5)*2,(Math.random()-.5)*5,Math.random()*2,(Math.random()-.5)*5,fn.dust,.8,1.2,.7)}const me={spd:Ht("#spd b"),pos:Ht("#pos b"),lap:Ht("#lap"),time:Ht("#time"),item:Ht("#item"),itembox:Ht("#itembox"),simit:Ht("#simit b"),simitBox:Ht("#simit"),drift:Ht("#drift"),fill:Ht("#drift .fill"),zone:Ht("#drift .zone"),pips:[...document.querySelectorAll("#drift .pips i")],wrong:Ht("#wrong"),count:Ht("#count")},gl=1.4;me.zone.style.left=kn[0]/gl*100+"%";me.zone.style.width=(kn[1]+wa-kn[0])/gl*100+"%";let gu=0,bu=0,Nc=0,xu=!1;function I_(s){const t=Dt;if(me.pos.textContent=String(t.place),me.spd.textContent=String(Math.max(0,Math.round(t.speed*3.6*1.65))),me.spd.parentElement.classList.toggle("boost",t.boostT>0),t.place!==bu&&(me.pos.parentElement.animate([{transform:"scale(1.35)"},{transform:"scale(1)"}],{duration:250}),bu=t.place),me.lap.textContent=`TUR ${Math.min(hr,Math.max(1,t.lap))}/${hr}`,me.time.textContent=xf(t.finished?t.finishTime:si),me.simit.textContent=String(t.simit),me.simitBox.classList.toggle("full",t.simit>=10),me.itembox.classList.toggle("juiced",t.simit>=10),t.rollT>0){gu+=s*14;const e=Object.keys(nr);me.item.style.backgroundImage=`url(${nr[e[Math.floor(gu)%e.length]]})`,me.item.style.opacity="0.7"}else t.item?(me.item.style.backgroundImage=`url(${nr[t.item]})`,me.item.style.opacity="1",me.item.title=bf[t.item]):t.shieldT>0?(me.item.style.backgroundImage=`url(${nr.nazar})`,me.item.style.opacity=String(.55+Math.sin(si*6)*.2),me.item.title="Nazarı fırlat"):me.item.style.backgroundImage="none";if(me.drift.classList.toggle("hide",!t.drifting),t.drifting){me.fill.style.width=Math.min(100,t.charge/gl*100)+"%";const e=t.charge>=kn[0]&&t.charge<=kn[1]+wa&&t.boosts<3&&t.lockT<=0;if(e&&!xu){Lt.ready();try{navigator.vibrate?.(18)}catch{}}xu=e,me.drift.classList.toggle("ready",e),me.pips.forEach((n,i)=>n.classList.toggle("on",i<t.boosts))}me.wrong.classList.toggle("hide",!(t.wrongT>1.2&&!t.finished)),T_.draw(Te,Dt)}function D_(){[...Te].sort((t,e)=>t.finished&&e.finished?t.finishTime-e.finishTime:t.finished?-1:e.finished?1:e.progress-t.progress).forEach((t,e)=>t.place=e+1)}function U_(s){const t=Jt==="race"||Jt==="done";Hi.update(s);const e=Hi.c.gas>0;Jt==="count"&&e&&!mu&&(Ra=dr),mu=e;const n=_i?(_i.update(s,Te,Dt,!0),_i.ctl):Hi.c;if(!_i&&Hi.touch&&!Dt.drifting&&Math.abs(n.steer)<.12&&Dt.grounded){const i=Ee.wrap(Dt.f.i+8);let r=Math.atan2(Ee.T.tz[i],Ee.T.tx[i])-Dt.yaw;r=Math.atan2(Math.sin(r),Math.cos(r)),Math.abs(r)<.7&&(n.steer+=Math.max(-.3,Math.min(.3,r*.9)))}Dt.step(s,n,t);for(const i of Aa)i.update(s,Te,Dt),i.k.step(s,i.ctl,t);for(let i=0;i<Te.length;i++)for(let r=i+1;r<Te.length;r++){const a=Te[i],o=Te[r],c=o.pos.x-a.pos.x,l=o.pos.z-a.pos.z,h=c*c+l*l;if(h<3.6&&h>1e-4&&Math.abs(a.pos.y-o.pos.y)<1.6){const u=Math.sqrt(h),f=(1.9-u)/2,d=c/u,b=l/u;a.pos.x-=d*f,a.pos.z-=b*f,o.pos.x+=d*f,o.pos.z+=b*f;const m=(o.vel.x-a.vel.x)*d+(o.vel.z-a.vel.z)*b;m<0&&(a.vel.x+=d*m*.6,a.vel.z+=b*m*.6,o.vel.x-=d*m*.6,o.vel.z-=b*m*.6)}}if(t){Ca.update(s,Te,si);for(const i of Te)i.wantItem&&(i.item||i.shieldT>0)&&i.rollT<=0&&i.spinT<=0&&Ca.use(i,Te);D_();for(const i of Te)!i.finished&&i.lap>hr&&(i.finished=!0,i.finishTime=si,i===Dt&&N_());Dt.lap!==Nc&&Jt==="race"&&(Dt.lap===hr?(pn.show("SON TUR!","big"),Lt.lap()):Dt.lap>1&&Dt.lap<hr&&(pn.show(`${Dt.lap}. TUR`,"big"),Lt.lap()),Nc=Dt.lap),!_i&&(Dt.stuckT>3||Dt.wrongT>5)&&(Dt.respawn(),Dt.stuckT=0,Dt.wrongT=0)}}function N_(){Jt="done",pr=0,_i=new Ic(Dt,Ee,.7);const s=Dt.place===1;Lt.finish(s),pn.show(s?"BİRİNCİSİN!":`${Dt.place}. oldun!`,"big"),yf.fireworks(Ee.point(0,0)),Ht("#touch").classList.add("hide")}const ri=Ht("#menu");let Fc=[];function F_(){const s=new ci(256,256,{colorSpace:Ie}),t=new Zc;t.background=new ot(16774118),t.add(new pf(16777215,15980221,2.2));const e=new hl(16777215,1.6);e.position.set(3,5,4),t.add(e);const n=new We(32,1,.1,50);n.position.set(3.2,2.2,3.6),n.lookAt(0,.85,0);const i=new Uint8Array(256*256*4),r=document.createElement("canvas");r.width=r.height=256;const a=r.getContext("2d");for(const o of Cs){const c=pl(o);c.root.rotation.y=-.5,t.add(c.root),gn.setRenderTarget(s),gn.render(t,n),gn.readRenderTargetPixels(s,0,0,256,256,i),gn.setRenderTarget(null);const l=a.createImageData(256,256);for(let h=0;h<256;h++)l.data.set(i.subarray((255-h)*1024,(256-h)*1024),h*1024);a.putImageData(l,0,0),Fc.push(r.toDataURL()),t.remove(c.root)}s.dispose()}function Sr(){Jt="title",cn=!1,Tf(!1),On.clear(),Lt.rain(0),ri.innerHTML=`<div class="title"><div class="logo">BOSPHORUS<br>DRIFT<small>GALATA KULESİ</small></div>
    <div class="row"><button class="btn" id="bPlay">Yarış</button><button class="btn alt" id="bHow">Nasıl oynanır</button></div>
    <button class="btn ghost" id="bMute">${Lt.muted?"Ses: kapalı":"Ses: açık"}</button></div>`,Ht("#bPlay").onclick=()=>{Lt.start(),Lt.click(),Pa()},Ht("#bHow").onclick=()=>{Lt.start(),Lt.click(),Sf(Sr)},Ht("#bMute").onclick=()=>{xl(),Sr()}}const Ln=new ee;qe.add(Ln);Ln.visible=!1;const k_=698,Ti=Ee.point(k_,0),ko=new R(Ti.x-Ee.T.tower.x,0,Ti.z-Ee.T.tower.z).normalize();{const s=new at(new Se(2.4,2.6,.5,40),new ce({color:4157398}));s.position.y=.25,s.receiveShadow=!0,Ln.add(s);const t=new at(new Pn(2.45,.12,8,48),new ce({color:15911244}));t.rotation.x=Math.PI/2,t.position.y=.5,Ln.add(t);const e=new at(new za(2.3,40),new ce({map:Ha.make(256,256,(n,i,r)=>{for(const[a,o]of[[128,"#2f6fb3"],[92,"#ffffff"],[64,"#7ec0f0"],[34,"#191e2d"]])n.fillStyle=o,n.beginPath(),n.arc(i/2,r/2,a,0,7),n.fill()})}));e.rotation.x=-Math.PI/2,e.position.y=.51,Ln.add(e),Ln.position.copy(Ti)}let wn=null,vu=-1;function O_(s){vu!==s&&(vu=s,wn&&Ln.remove(wn.root),wn=pl(Cs[s]),wn.root.position.y=.52,wn.root.scale.setScalar(1.25),wn.root.traverse(t=>{t.isMesh&&(t.castShadow=!0)}),Ln.add(wn.root))}const z_=["Hız","İvme","Yol tutuş"];function Pa(){Jt="select",Fc.length||F_(),Ln.visible=!0,O_(Nn);for(const e of Te)e.model.root.visible=!1;const s=Cs[Nn];ri.innerHTML=`<div class="cs">
    <div class="selInfo"><small>KARAKTER ${Nn+1}/6</small><h1>${s.name}</h1><p>${s.blurb}</p>
      ${s.stats.map((e,n)=>`<div class="stat"><span>${z_[n]}</span><div class="bars">${[1,2,3,4,5].map(i=>`<i class="${i<=e?"on":""}"></i>`).join("")}</div></div>`).join("")}
    </div>
    <button class="selArrow l" id="sPrev" aria-label="Önceki">‹</button><button class="selArrow r" id="sNext" aria-label="Sonraki">›</button>
    <div class="selBottom">
      <div class="chips">${Cs.map((e,n)=>`<button class="chip${n===Nn?" sel":""}" data-i="${n}" style="--c:#${e.color.toString(16).padStart(6,"0")}"><img src="${Fc[n]}" alt="${e.name}"></button>`).join("")}</div>
      <div class="selRow"><div class="seg">${["kolay","normal","zor"].map(e=>`<button data-d="${e}" class="${e===fr?"sel":""}">${e[0].toUpperCase()+e.slice(1)}</button>`).join("")}</div>
      <button class="btn ghost" id="bBack">Geri</button><button class="btn" id="bGo">Başla</button></div>
    </div></div>`;const t=e=>{Nn=(e+6)%6,Ps.set("char",String(Nn)),Lt.click(),Pa()};ri.querySelectorAll(".chip").forEach(e=>e.onclick=()=>t(Number(e.dataset.i))),Ht("#sPrev").onclick=()=>t(Nn-1),Ht("#sNext").onclick=()=>t(Nn+1),ri.querySelectorAll(".seg button").forEach(e=>e.onclick=()=>{fr=e.dataset.d,Ps.set("diff",fr),Lt.click(),Pa()}),Ht("#bBack").onclick=()=>{Lt.click(),Ln.visible=!1,Sr()},Ht("#bGo").onclick=()=>{Lt.click(),Va()}}function Sf(s){const t=(e,n)=>`<div><img src="${nr[e]}" alt=""><span><b>${bf[e]}</b><br>${n}</span></div>`;ri.innerHTML=`<div class="panel help"><h2>Nasıl oynanır</h2>
    <p>Galata Kulesi’nin etrafında <b>3 tur</b>. İlk bitiren kazanır.</p>
    <table>
      <tr><td>Gaz / fren</td><td><kbd>W</kbd> <kbd>↑</kbd> / <kbd>S</kbd> <kbd>↓</kbd> · telefonda gaz kendiliğinden</td></tr>
      <tr><td>Direksiyon</td><td><kbd>A</kbd> <kbd>D</kbd> <kbd>←</kbd> <kbd>→</kbd> · telefonda sol yarıda parmağını kaydır</td></tr>
      <tr><td>Drift</td><td><kbd>Boşluk</kbd> / <kbd>Shift</kbd> ya da <b>DRİFT</b> düğmesi · dönerken dokun, kart zıplayıp kaymaya başlar. Direksiyonu bıraksan da hemen bitmez; bitirmek için ters yöne çevir ya da frene bas.</td></tr>
      <tr><td>Drift turbosu</td><td>Drift sırasında çubuk <b>yeşile</b> dönünce (zil sesi, telefonda titreşim) aynı tuşa bir kez daha dokun. Üst üste <b>3 kez</b>: Ultra Turbo!</td></tr>
      <tr><td>Eşya</td><td><kbd>E</kbd> veya <kbd>Enter</kbd></td></tr>
      <tr><td>Diğer</td><td><kbd>R</kbd> piste dön · <kbd>Esc</kbd> duraklat · <kbd>M</kbd> ses · oyun kolu da çalışır</td></tr>
    </table>
    <div class="items">${t("marti","Öndeki karta kilitlenir.")}${t("cay","Arkana çay dökersin, basan kayar.")}${t("nazar","Kalkan olur. Üstündeyken tekrar basarsan öndekine fırlatırsın.")}${t("turbo","Anında hız.")}${t("simit","Düz gider, duvardan seker. 10 simitle üçlü.")}${t("duduk","Yakındaki kartları savurur.")}${t("kedi","Öndeki kartların önüne kediler çıkar.")}</div>
    <p>Yoldaki <b>simitleri</b> topla: her biri biraz hız verir. 10 simitte eşyalar da güçlenir. Vurulursan 3 simit düşer. Mavi oklu pedler ve sürpriz kutuları <b>?</b> pistin her yerinde.</p>
    <div class="row sticky"><button class="btn" id="bOk">Tamam</button></div></div>`,Ht("#bOk").onclick=()=>{Lt.click(),s()}}function Tr(){cn=!0,ri.innerHTML=`<div class="panel"><h2>Duraklatıldı</h2><div class="row" style="flex-direction:column;align-items:center">
    <button class="btn" id="pRes">Devam</button><button class="btn alt" id="pRe">Yeniden başla</button><button class="btn ghost" id="pHow">Nasıl oynanır</button><button class="btn ghost" id="pMute">${Lt.muted?"Ses: kapalı":"Ses: açık"}</button><button class="btn ghost" id="pMenu">Ana menü</button></div></div>`,Ht("#pRes").onclick=bl,Ht("#pRe").onclick=()=>{cn=!1,Va()},Ht("#pHow").onclick=()=>Sf(Tr),Ht("#pMute").onclick=()=>{xl(),Tr()},Ht("#pMenu").onclick=()=>{cn=!1,Lt.music(!1),Sr()},Lt.music(!1)}function bl(){cn=!1,ri.innerHTML="",Lt.music(!0),kc=performance.now()}function B_(){Ht("#hud").classList.add("hide");const s=[...Te].sort((t,e)=>t.place-e.place).map(t=>`<tr class="${t===Dt?"me":""}"><td class="n">${t.place}</td><td>${t.def.name}${t===Dt?" (sen)":""}</td><td class="t">${t.finished?xf(t.finishTime):"yolda"}</td></tr>`).join("");ri.innerHTML=`<div class="panel"><h2>${Dt.place===1?"Kazandın! 🏆":"Yarış bitti"}</h2><table class="res">${s}</table>
    <div class="row"><button class="btn" id="rAgain">Tekrar yarış</button><button class="btn alt" id="rSel">Karakter seç</button></div><div class="credit">© 2026 Doğancan Işık · Bosphorus Drift · ilk sürüm</div></div>`,Ht("#rAgain").onclick=()=>{Lt.click(),Va()},Ht("#rSel").onclick=()=>{Lt.click(),Lt.music(!1),Pa()}}function Va(){ri.innerHTML="",cn=!1,Ln.visible=!1,E_(),Jt="count",dr=3.6,Nc=0,fs=!1,Tf(!0),Lt.start(),Lt.music(!0)}function Tf(s){Ht("#hud").classList.toggle("hide",!s),Ht("#touch").classList.toggle("hide",!(s&&(In||Hi.touch)))}function xl(){Lt.setMuted(!Lt.muted),Ps.set("mute",Lt.muted?"1":"0")}for(const s of["gesturestart","gesturechange","gestureend"])document.addEventListener(s,t=>t.preventDefault(),{passive:!1});document.addEventListener("touchmove",s=>{const t=s.target?.closest?.(".panel");(s.touches.length>1||!t)&&s.preventDefault()},{passive:!1});let _u=0;document.addEventListener("touchend",s=>{const t=performance.now();t-_u<350&&!s.target?.closest?.("button")&&s.preventDefault(),_u=t},{passive:!1});document.addEventListener("dblclick",s=>s.preventDefault(),{passive:!1});Hi.onKey=s=>{Lt.start(),(s==="escape"||s==="p")&&(Jt==="race"||Jt==="count")&&(cn?bl():Tr()),s==="m"&&xl(),s==="r"&&Jt==="race"&&!cn&&Dt.respawn()};Ht("#pauseBtn").addEventListener("click",()=>{(Jt==="race"||Jt==="count")&&(cn?bl():Tr())});document.addEventListener("visibilitychange",()=>{document.hidden&&(Jt==="race"||Jt==="count")&&!cn&&Tr()});function wf(){const s=innerWidth,t=innerHeight;gn.setSize(Math.floor(s*oa),Math.floor(t*oa),!1),Dc.style.width=s+"px",Dc.style.height=t+"px",xe.aspect=s/t,xe.updateProjectionMatrix(),ur.setSize(s,t,oa),En.setScale(t*oa)}addEventListener("resize",wf);wf();let kc=performance.now(),us=0;const G_=Number(Wi.get("t")||1),Mu=Number(Wi.get("fast")||0);function Ef(s){requestAnimationFrame(Ef);let t=Math.min(.05,(s-kc)/1e3)*G_;if(kc=s,Mu&&(t=Mu/60),cn&&(t=0),us+=t,Jt==="count"){dr-=t;const i=Math.ceil(dr-.6);if(i<ir&&i>=1&&i<=3&&(ir=i,me.count.innerHTML=`<div>${i}</div>`,Lt.beep(!1)),dr<=.6&&ir>0){ir=0,me.count.innerHTML='<div class="go">BAŞLA!</div>',Lt.beep(!0),Jt="race",si=0,Ra<=1.05&&Ra>.6&&!Uc&&(Uc=!0,Dt.boost(7,1.3),pn.show("Süper kalkış!","t2"));for(const r of Aa)Math.random()<r.skill*.7&&r.k.boost(6,1.1)}}if((Jt==="race"||Jt==="done")&&(si+=t),Jt!=="title"&&Jt!=="select"){const i=Math.max(2,Math.ceil(t/.009));for(let r=0;r<i;r++)U_(t/i);for(const r of Te)r.sync(t,us),P_(r);t>0&&Mf.update(Te,xe.position),(Jt==="race"||Jt==="count")&&I_(t),Lt.engine(Dt.speed,_i?1:Hi.c.gas,Dt.drifting&&Dt.grounded,Dt.boostT>0,!cn&&Jt!=="done"),Jt==="done"&&(pr+=t,pr>3&&pr-t<=3&&B_())}else Lt.engine(0,0,!1,!1,!1);Lt.tick(),En.update(t),Er.update(us),pu.update(t,us);const e=Jt==="race"||Jt==="done";if(t>0){On.update(t,e?si:-1,xe.position),yf.update(t,us,Te,Jt==="title"||Jt==="select"?null:Dt,Jt==="race");for(const i of Te)i.grip=On.level>.5?.88:1;Lt.rain(cn?0:On.level),Dt&&(e||Jt==="count")&&pu.uPlayer.value.copy(Dt.pos)}R_(t,us);const n=Jt==="title"?new R(Ee.T.tower.x,Ee.T.tower.y0+10,Ee.T.tower.z):Jt==="select"?Ti:Dt.pos;zn.position.copy(n).addScaledVector(xa,220),zn.target.position.copy(n),ur.render(qe,xe)}Xi(1,"Hazır!");setTimeout(()=>Ht("#loading").remove(),250);Sr();Wi.has("skip")&&(Lt.muted=!0,Va());requestAnimationFrame(Ef);window.__bd={get player(){return Dt},get karts(){return Te},get state(){return Jt},track:Ee,camera:xe,scene:qe,renderer:gn,get raceT(){return si}};
