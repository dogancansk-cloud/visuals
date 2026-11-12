(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function t(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(s){if(s.ep)return;s.ep=!0;const a=t(s);fetch(s.href,a)}})();const Ze={};function Td(){Ze.__ready=!0,document.documentElement.dataset.ready="1"}const Bd=["hour","start","mode"];function rr(){const i=new URLSearchParams(location.search),e=new URLSearchParams;for(const t of Bd){const n=i.get(t);n!==null&&e.set(t,n)}return e}const Ml="170",ki={ROTATE:0,DOLLY:1,PAN:2},ts={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Rd=0,$l=1,Dd=2,yl=1,Zf=2,Ri=3,Ai=0,On=1,Vt=2,mn=0,ta=1,Bc=2,eh=3,th=4,$f=5,hi=100,Ld=101,Pd=102,Ud=103,Fd=104,La=200,Nd=201,kd=202,Qd=203,Rc=204,Dc=205,Lc=206,Od=207,Pc=208,zd=209,Gd=210,Hd=211,Vd=212,Wd=213,jd=214,Uc=0,Fc=1,Nc=2,ca=3,kc=4,Qc=5,Oc=6,zc=7,wl=0,qd=1,Yd=2,os=0,eu=1,tu=2,nu=3,Cl=4,Xd=5,iu=6,su=7,nh="attached",Kd="detached",au=300,vs=301,la=302,Gc=303,Hc=304,bo=306,Jn=1e3,Ui=1001,so=1002,_n=1003,ru=1004,Pa=1005,Dn=1006,Yr=1007,_i=1008,cn=1009,ou=1010,cu=1011,Ka=1012,Sl=1013,Ms=1014,wn=1015,bn=1016,Il=1017,Tl=1018,ys=1020,lu=35902,hu=1021,fu=1022,ln=1023,uu=1024,du=1025,na=1026,ws=1027,ns=1028,Bl=1029,_s=1030,Rl=1031,Dl=1033,Xr=33776,Qa=33777,Kr=33778,Oa=33779,ao=35840,Vc=35841,ro=35842,Wc=35843,oo=36196,co=37492,lo=37496,Ja=37808,jc=37809,qc=37810,Yc=37811,Za=37812,Xc=37813,Kc=37814,Jc=37815,Zc=37816,$c=37817,el=37818,tl=37819,nl=37820,il=37821,za=36492,sl=36494,ho=36495,Au=36283,al=36284,rl=36285,ol=36286,$a=2300,er=2301,Bo=2302,ih=2400,sh=2401,ah=2402,Jd=2500,Zd=0,pu=1,cl=2,$d=3200,eA=3201,xo=0,tA=1,bi="",Kt="srgb",Cn="srgb-linear",_o="linear",Ft="srgb",Ds=7680,rh=519,nA=512,iA=513,sA=514,mu=515,aA=516,rA=517,oA=518,cA=519,ll=35044,oh="300 es",Fi=2e3,fo=2001;class Is{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const a=s.indexOf(t);a!==-1&&s.splice(a,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let a=0,r=s.length;a<r;a++)s[a].call(this,e);e.target=null}}}const vn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let ch=1234567;const Ga=Math.PI/180,ha=180/Math.PI;function di(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(vn[i&255]+vn[i>>8&255]+vn[i>>16&255]+vn[i>>24&255]+"-"+vn[e&255]+vn[e>>8&255]+"-"+vn[e>>16&15|64]+vn[e>>24&255]+"-"+vn[t&63|128]+vn[t>>8&255]+"-"+vn[t>>16&255]+vn[t>>24&255]+vn[n&255]+vn[n>>8&255]+vn[n>>16&255]+vn[n>>24&255]).toLowerCase()}function gn(i,e,t){return Math.max(e,Math.min(t,i))}function Ll(i,e){return(i%e+e)%e}function lA(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function hA(i,e,t){return i!==e?(t-i)/(e-i):0}function Ha(i,e,t){return(1-t)*i+t*e}function fA(i,e,t,n){return Ha(i,e,1-Math.exp(-t*n))}function uA(i,e=1){return e-Math.abs(Ll(i,e*2)-e)}function dA(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function AA(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function pA(i,e){return i+Math.floor(Math.random()*(e-i+1))}function mA(i,e){return i+Math.random()*(e-i)}function gA(i){return i*(.5-Math.random())}function bA(i){i!==void 0&&(ch=i);let e=ch+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function xA(i){return i*Ga}function _A(i){return i*ha}function EA(i){return(i&i-1)===0&&i!==0}function vA(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function MA(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function yA(i,e,t,n,s){const a=Math.cos,r=Math.sin,o=a(t/2),c=r(t/2),l=a((e+n)/2),h=r((e+n)/2),f=a((e-n)/2),u=r((e-n)/2),d=a((n-e)/2),m=r((n-e)/2);switch(s){case"XYX":i.set(o*h,c*f,c*u,o*l);break;case"YZY":i.set(c*u,o*h,c*f,o*l);break;case"ZXZ":i.set(c*f,c*u,o*h,o*l);break;case"XZX":i.set(o*h,c*m,c*d,o*l);break;case"YXY":i.set(c*d,o*h,c*m,o*l);break;case"ZYZ":i.set(c*m,c*d,o*h,o*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function fi(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function kt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const sn={DEG2RAD:Ga,RAD2DEG:ha,generateUUID:di,clamp:gn,euclideanModulo:Ll,mapLinear:lA,inverseLerp:hA,lerp:Ha,damp:fA,pingpong:uA,smoothstep:dA,smootherstep:AA,randInt:pA,randFloat:mA,randFloatSpread:gA,seededRandom:bA,degToRad:xA,radToDeg:_A,isPowerOfTwo:EA,ceilPowerOfTwo:vA,floorPowerOfTwo:MA,setQuaternionFromProperEuler:yA,normalize:kt,denormalize:fi};class Ye{constructor(e=0,t=0){Ye.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(gn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),a=this.x-e.x,r=this.y-e.y;return this.x=a*n-r*s+e.x,this.y=a*s+r*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class _t{constructor(e,t,n,s,a,r,o,c,l){_t.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,a,r,o,c,l)}set(e,t,n,s,a,r,o,c,l){const h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=a,h[5]=c,h[6]=n,h[7]=r,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,a=this.elements,r=n[0],o=n[3],c=n[6],l=n[1],h=n[4],f=n[7],u=n[2],d=n[5],m=n[8],_=s[0],p=s[3],A=s[6],b=s[1],x=s[4],g=s[7],C=s[2],w=s[5],y=s[8];return a[0]=r*_+o*b+c*C,a[3]=r*p+o*x+c*w,a[6]=r*A+o*g+c*y,a[1]=l*_+h*b+f*C,a[4]=l*p+h*x+f*w,a[7]=l*A+h*g+f*y,a[2]=u*_+d*b+m*C,a[5]=u*p+d*x+m*w,a[8]=u*A+d*g+m*y,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],a=e[3],r=e[4],o=e[5],c=e[6],l=e[7],h=e[8];return t*r*h-t*o*l-n*a*h+n*o*c+s*a*l-s*r*c}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],a=e[3],r=e[4],o=e[5],c=e[6],l=e[7],h=e[8],f=h*r-o*l,u=o*c-h*a,d=l*a-r*c,m=t*f+n*u+s*d;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/m;return e[0]=f*_,e[1]=(s*l-h*n)*_,e[2]=(o*n-s*r)*_,e[3]=u*_,e[4]=(h*t-s*c)*_,e[5]=(s*a-o*t)*_,e[6]=d*_,e[7]=(n*c-l*t)*_,e[8]=(r*t-n*a)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,a,r,o){const c=Math.cos(a),l=Math.sin(a);return this.set(n*c,n*l,-n*(c*r+l*o)+r+e,-s*l,s*c,-s*(-l*r+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Ro.makeScale(e,t)),this}rotate(e){return this.premultiply(Ro.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ro.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ro=new _t;function gu(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function tr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function wA(){const i=tr("canvas");return i.style.display="block",i}const lh={};function Ua(i){i in lh||(lh[i]=!0,console.warn(i))}function CA(i,e,t){return new Promise(function(n,s){function a(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(a,t);break;default:n()}}setTimeout(a,t)})}function SA(i){const e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function IA(i){const e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Ct={enabled:!0,workingColorSpace:Cn,spaces:{},convert:function(i,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===Ft&&(i.r=Qi(i.r),i.g=Qi(i.g),i.b=Qi(i.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(i.applyMatrix3(this.spaces[e].toXYZ),i.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===Ft&&(i.r=ia(i.r),i.g=ia(i.g),i.b=ia(i.b))),i},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===bi?_o:this.spaces[i].transfer},getLuminanceCoefficients:function(i,e=this.workingColorSpace){return i.fromArray(this.spaces[e].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,e,t){return i.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function Qi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ia(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const hh=[.64,.33,.3,.6,.15,.06],fh=[.2126,.7152,.0722],uh=[.3127,.329],dh=new _t().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ah=new _t().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Ct.define({[Cn]:{primaries:hh,whitePoint:uh,transfer:_o,toXYZ:dh,fromXYZ:Ah,luminanceCoefficients:fh,workingColorSpaceConfig:{unpackColorSpace:Kt},outputColorSpaceConfig:{drawingBufferColorSpace:Kt}},[Kt]:{primaries:hh,whitePoint:uh,transfer:Ft,toXYZ:dh,fromXYZ:Ah,luminanceCoefficients:fh,outputColorSpaceConfig:{drawingBufferColorSpace:Kt}}});let Ls;class TA{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ls===void 0&&(Ls=tr("canvas")),Ls.width=e.width,Ls.height=e.height;const n=Ls.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Ls}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=tr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),a=s.data;for(let r=0;r<a.length;r++)a[r]=Qi(a[r]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Qi(t[n]/255)*255):t[n]=Qi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let BA=0;class bu{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:BA++}),this.uuid=di(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let a;if(Array.isArray(s)){a=[];for(let r=0,o=s.length;r<o;r++)s[r].isDataTexture?a.push(Do(s[r].image)):a.push(Do(s[r]))}else a=Do(s);n.url=a}return t||(e.images[this.uuid]=n),n}}function Do(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?TA.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let RA=0;class tn extends Is{constructor(e=tn.DEFAULT_IMAGE,t=tn.DEFAULT_MAPPING,n=Ui,s=Ui,a=Dn,r=_i,o=ln,c=cn,l=tn.DEFAULT_ANISOTROPY,h=bi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:RA++}),this.uuid=di(),this.name="",this.source=new bu(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=a,this.minFilter=r,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Ye(0,0),this.repeat=new Ye(1,1),this.center=new Ye(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new _t,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==au)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Jn:e.x=e.x-Math.floor(e.x);break;case Ui:e.x=e.x<0?0:1;break;case so:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Jn:e.y=e.y-Math.floor(e.y);break;case Ui:e.y=e.y<0?0:1;break;case so:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}tn.DEFAULT_IMAGE=null;tn.DEFAULT_MAPPING=au;tn.DEFAULT_ANISOTROPY=1;class Dt{constructor(e=0,t=0,n=0,s=1){Dt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,a=this.w,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s+r[12]*a,this.y=r[1]*t+r[5]*n+r[9]*s+r[13]*a,this.z=r[2]*t+r[6]*n+r[10]*s+r[14]*a,this.w=r[3]*t+r[7]*n+r[11]*s+r[15]*a,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,a;const c=e.elements,l=c[0],h=c[4],f=c[8],u=c[1],d=c[5],m=c[9],_=c[2],p=c[6],A=c[10];if(Math.abs(h-u)<.01&&Math.abs(f-_)<.01&&Math.abs(m-p)<.01){if(Math.abs(h+u)<.1&&Math.abs(f+_)<.1&&Math.abs(m+p)<.1&&Math.abs(l+d+A-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(l+1)/2,g=(d+1)/2,C=(A+1)/2,w=(h+u)/4,y=(f+_)/4,S=(m+p)/4;return x>g&&x>C?x<.01?(n=0,s=.707106781,a=.707106781):(n=Math.sqrt(x),s=w/n,a=y/n):g>C?g<.01?(n=.707106781,s=0,a=.707106781):(s=Math.sqrt(g),n=w/s,a=S/s):C<.01?(n=.707106781,s=.707106781,a=0):(a=Math.sqrt(C),n=y/a,s=S/a),this.set(n,s,a,t),this}let b=Math.sqrt((p-m)*(p-m)+(f-_)*(f-_)+(u-h)*(u-h));return Math.abs(b)<.001&&(b=1),this.x=(p-m)/b,this.y=(f-_)/b,this.z=(u-h)/b,this.w=Math.acos((l+d+A-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class DA extends Is{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Dt(0,0,e,t),this.scissorTest=!1,this.viewport=new Dt(0,0,e,t);const s={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Dn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const a=new tn(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);a.flipY=!1,a.generateMipmaps=n.generateMipmaps,a.internalFormat=n.internalFormat,this.textures=[];const r=n.count;for(let o=0;o<r;o++)this.textures[o]=a.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,a=this.textures.length;s<a;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,s=e.textures.length;n<s;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new bu(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Kn extends DA{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class xu extends tn{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=_n,this.minFilter=_n,this.wrapR=Ui,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class _u extends tn{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=_n,this.minFilter=_n,this.wrapR=Ui,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class qt{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,a,r,o){let c=n[s+0],l=n[s+1],h=n[s+2],f=n[s+3];const u=a[r+0],d=a[r+1],m=a[r+2],_=a[r+3];if(o===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=f;return}if(o===1){e[t+0]=u,e[t+1]=d,e[t+2]=m,e[t+3]=_;return}if(f!==_||c!==u||l!==d||h!==m){let p=1-o;const A=c*u+l*d+h*m+f*_,b=A>=0?1:-1,x=1-A*A;if(x>Number.EPSILON){const C=Math.sqrt(x),w=Math.atan2(C,A*b);p=Math.sin(p*w)/C,o=Math.sin(o*w)/C}const g=o*b;if(c=c*p+u*g,l=l*p+d*g,h=h*p+m*g,f=f*p+_*g,p===1-o){const C=1/Math.sqrt(c*c+l*l+h*h+f*f);c*=C,l*=C,h*=C,f*=C}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,s,a,r){const o=n[s],c=n[s+1],l=n[s+2],h=n[s+3],f=a[r],u=a[r+1],d=a[r+2],m=a[r+3];return e[t]=o*m+h*f+c*d-l*u,e[t+1]=c*m+h*u+l*f-o*d,e[t+2]=l*m+h*d+o*u-c*f,e[t+3]=h*m-o*f-c*u-l*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,a=e._z,r=e._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(s/2),f=o(a/2),u=c(n/2),d=c(s/2),m=c(a/2);switch(r){case"XYZ":this._x=u*h*f+l*d*m,this._y=l*d*f-u*h*m,this._z=l*h*m+u*d*f,this._w=l*h*f-u*d*m;break;case"YXZ":this._x=u*h*f+l*d*m,this._y=l*d*f-u*h*m,this._z=l*h*m-u*d*f,this._w=l*h*f+u*d*m;break;case"ZXY":this._x=u*h*f-l*d*m,this._y=l*d*f+u*h*m,this._z=l*h*m+u*d*f,this._w=l*h*f-u*d*m;break;case"ZYX":this._x=u*h*f-l*d*m,this._y=l*d*f+u*h*m,this._z=l*h*m-u*d*f,this._w=l*h*f+u*d*m;break;case"YZX":this._x=u*h*f+l*d*m,this._y=l*d*f+u*h*m,this._z=l*h*m-u*d*f,this._w=l*h*f-u*d*m;break;case"XZY":this._x=u*h*f-l*d*m,this._y=l*d*f-u*h*m,this._z=l*h*m+u*d*f,this._w=l*h*f+u*d*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],a=t[8],r=t[1],o=t[5],c=t[9],l=t[2],h=t[6],f=t[10],u=n+o+f;if(u>0){const d=.5/Math.sqrt(u+1);this._w=.25/d,this._x=(h-c)*d,this._y=(a-l)*d,this._z=(r-s)*d}else if(n>o&&n>f){const d=2*Math.sqrt(1+n-o-f);this._w=(h-c)/d,this._x=.25*d,this._y=(s+r)/d,this._z=(a+l)/d}else if(o>f){const d=2*Math.sqrt(1+o-n-f);this._w=(a-l)/d,this._x=(s+r)/d,this._y=.25*d,this._z=(c+h)/d}else{const d=2*Math.sqrt(1+f-n-o);this._w=(r-s)/d,this._x=(a+l)/d,this._y=(c+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(gn(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,a=e._z,r=e._w,o=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+r*o+s*l-a*c,this._y=s*h+r*c+a*o-n*l,this._z=a*h+r*l+n*c-s*o,this._w=r*h-n*o-s*c-a*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,a=this._z,r=this._w;let o=r*e._w+n*e._x+s*e._y+a*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=r,this._x=n,this._y=s,this._z=a,this;const c=1-o*o;if(c<=Number.EPSILON){const d=1-t;return this._w=d*r+t*this._w,this._x=d*n+t*this._x,this._y=d*s+t*this._y,this._z=d*a+t*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,o),f=Math.sin((1-t)*h)/l,u=Math.sin(t*h)/l;return this._w=r*f+this._w*u,this._x=n*f+this._x*u,this._y=s*f+this._y*u,this._z=a*f+this._z*u,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),a=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ne{constructor(e=0,t=0,n=0){ne.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ph.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ph.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,a=e.elements;return this.x=a[0]*t+a[3]*n+a[6]*s,this.y=a[1]*t+a[4]*n+a[7]*s,this.z=a[2]*t+a[5]*n+a[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,a=e.elements,r=1/(a[3]*t+a[7]*n+a[11]*s+a[15]);return this.x=(a[0]*t+a[4]*n+a[8]*s+a[12])*r,this.y=(a[1]*t+a[5]*n+a[9]*s+a[13])*r,this.z=(a[2]*t+a[6]*n+a[10]*s+a[14])*r,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,a=e.x,r=e.y,o=e.z,c=e.w,l=2*(r*s-o*n),h=2*(o*t-a*s),f=2*(a*n-r*t);return this.x=t+c*l+r*f-o*h,this.y=n+c*h+o*l-a*f,this.z=s+c*f+a*h-r*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s,this.y=a[1]*t+a[5]*n+a[9]*s,this.z=a[2]*t+a[6]*n+a[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,a=e.z,r=t.x,o=t.y,c=t.z;return this.x=s*c-a*o,this.y=a*r-n*c,this.z=n*o-s*r,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Lo.copy(this).projectOnVector(e),this.sub(Lo)}reflect(e){return this.sub(Lo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(gn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Lo=new ne,ph=new qt;class Oi{constructor(e=new ne(1/0,1/0,1/0),t=new ne(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(ri.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(ri.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=ri.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const a=n.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let r=0,o=a.count;r<o;r++)e.isMesh===!0?e.getVertexPosition(r,ri):ri.fromBufferAttribute(a,r),ri.applyMatrix4(e.matrixWorld),this.expandByPoint(ri);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),hr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),hr.copy(n.boundingBox)),hr.applyMatrix4(e.matrixWorld),this.union(hr)}const s=e.children;for(let a=0,r=s.length;a<r;a++)this.expandByObject(s[a],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ri),ri.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ea),fr.subVectors(this.max,Ea),Ps.subVectors(e.a,Ea),Us.subVectors(e.b,Ea),Fs.subVectors(e.c,Ea),Hi.subVectors(Us,Ps),Vi.subVectors(Fs,Us),ls.subVectors(Ps,Fs);let t=[0,-Hi.z,Hi.y,0,-Vi.z,Vi.y,0,-ls.z,ls.y,Hi.z,0,-Hi.x,Vi.z,0,-Vi.x,ls.z,0,-ls.x,-Hi.y,Hi.x,0,-Vi.y,Vi.x,0,-ls.y,ls.x,0];return!Po(t,Ps,Us,Fs,fr)||(t=[1,0,0,0,1,0,0,0,1],!Po(t,Ps,Us,Fs,fr))?!1:(ur.crossVectors(Hi,Vi),t=[ur.x,ur.y,ur.z],Po(t,Ps,Us,Fs,fr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ri).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ri).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(wi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),wi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),wi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),wi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),wi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),wi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),wi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),wi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(wi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const wi=[new ne,new ne,new ne,new ne,new ne,new ne,new ne,new ne],ri=new ne,hr=new Oi,Ps=new ne,Us=new ne,Fs=new ne,Hi=new ne,Vi=new ne,ls=new ne,Ea=new ne,fr=new ne,ur=new ne,hs=new ne;function Po(i,e,t,n,s){for(let a=0,r=i.length-3;a<=r;a+=3){hs.fromArray(i,a);const o=s.x*Math.abs(hs.x)+s.y*Math.abs(hs.y)+s.z*Math.abs(hs.z),c=e.dot(hs),l=t.dot(hs),h=n.dot(hs);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}const LA=new Oi,va=new ne,Uo=new ne;class Ei{constructor(e=new ne,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):LA.setFromPoints(e).getCenter(n);let s=0;for(let a=0,r=e.length;a<r;a++)s=Math.max(s,n.distanceToSquared(e[a]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;va.subVectors(e,this.center);const t=va.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(va,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Uo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(va.copy(e.center).add(Uo)),this.expandByPoint(va.copy(e.center).sub(Uo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ci=new ne,Fo=new ne,dr=new ne,Wi=new ne,No=new ne,Ar=new ne,ko=new ne;class or{constructor(e=new ne,t=new ne(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ci)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Ci.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ci.copy(this.origin).addScaledVector(this.direction,t),Ci.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Fo.copy(e).add(t).multiplyScalar(.5),dr.copy(t).sub(e).normalize(),Wi.copy(this.origin).sub(Fo);const a=e.distanceTo(t)*.5,r=-this.direction.dot(dr),o=Wi.dot(this.direction),c=-Wi.dot(dr),l=Wi.lengthSq(),h=Math.abs(1-r*r);let f,u,d,m;if(h>0)if(f=r*c-o,u=r*o-c,m=a*h,f>=0)if(u>=-m)if(u<=m){const _=1/h;f*=_,u*=_,d=f*(f+r*u+2*o)+u*(r*f+u+2*c)+l}else u=a,f=Math.max(0,-(r*u+o)),d=-f*f+u*(u+2*c)+l;else u=-a,f=Math.max(0,-(r*u+o)),d=-f*f+u*(u+2*c)+l;else u<=-m?(f=Math.max(0,-(-r*a+o)),u=f>0?-a:Math.min(Math.max(-a,-c),a),d=-f*f+u*(u+2*c)+l):u<=m?(f=0,u=Math.min(Math.max(-a,-c),a),d=u*(u+2*c)+l):(f=Math.max(0,-(r*a+o)),u=f>0?a:Math.min(Math.max(-a,-c),a),d=-f*f+u*(u+2*c)+l);else u=r>0?-a:a,f=Math.max(0,-(r*u+o)),d=-f*f+u*(u+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(Fo).addScaledVector(dr,u),d}intersectSphere(e,t){Ci.subVectors(e.center,this.origin);const n=Ci.dot(this.direction),s=Ci.dot(Ci)-n*n,a=e.radius*e.radius;if(s>a)return null;const r=Math.sqrt(a-s),o=n-r,c=n+r;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,a,r,o,c;const l=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,u=this.origin;return l>=0?(n=(e.min.x-u.x)*l,s=(e.max.x-u.x)*l):(n=(e.max.x-u.x)*l,s=(e.min.x-u.x)*l),h>=0?(a=(e.min.y-u.y)*h,r=(e.max.y-u.y)*h):(a=(e.max.y-u.y)*h,r=(e.min.y-u.y)*h),n>r||a>s||((a>n||isNaN(n))&&(n=a),(r<s||isNaN(s))&&(s=r),f>=0?(o=(e.min.z-u.z)*f,c=(e.max.z-u.z)*f):(o=(e.max.z-u.z)*f,c=(e.min.z-u.z)*f),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Ci)!==null}intersectTriangle(e,t,n,s,a){No.subVectors(t,e),Ar.subVectors(n,e),ko.crossVectors(No,Ar);let r=this.direction.dot(ko),o;if(r>0){if(s)return null;o=1}else if(r<0)o=-1,r=-r;else return null;Wi.subVectors(this.origin,e);const c=o*this.direction.dot(Ar.crossVectors(Wi,Ar));if(c<0)return null;const l=o*this.direction.dot(No.cross(Wi));if(l<0||c+l>r)return null;const h=-o*Wi.dot(ko);return h<0?null:this.at(h/r,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ot{constructor(e,t,n,s,a,r,o,c,l,h,f,u,d,m,_,p){ot.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,a,r,o,c,l,h,f,u,d,m,_,p)}set(e,t,n,s,a,r,o,c,l,h,f,u,d,m,_,p){const A=this.elements;return A[0]=e,A[4]=t,A[8]=n,A[12]=s,A[1]=a,A[5]=r,A[9]=o,A[13]=c,A[2]=l,A[6]=h,A[10]=f,A[14]=u,A[3]=d,A[7]=m,A[11]=_,A[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ot().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/Ns.setFromMatrixColumn(e,0).length(),a=1/Ns.setFromMatrixColumn(e,1).length(),r=1/Ns.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*a,t[5]=n[5]*a,t[6]=n[6]*a,t[7]=0,t[8]=n[8]*r,t[9]=n[9]*r,t[10]=n[10]*r,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,a=e.z,r=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(a),f=Math.sin(a);if(e.order==="XYZ"){const u=r*h,d=r*f,m=o*h,_=o*f;t[0]=c*h,t[4]=-c*f,t[8]=l,t[1]=d+m*l,t[5]=u-_*l,t[9]=-o*c,t[2]=_-u*l,t[6]=m+d*l,t[10]=r*c}else if(e.order==="YXZ"){const u=c*h,d=c*f,m=l*h,_=l*f;t[0]=u+_*o,t[4]=m*o-d,t[8]=r*l,t[1]=r*f,t[5]=r*h,t[9]=-o,t[2]=d*o-m,t[6]=_+u*o,t[10]=r*c}else if(e.order==="ZXY"){const u=c*h,d=c*f,m=l*h,_=l*f;t[0]=u-_*o,t[4]=-r*f,t[8]=m+d*o,t[1]=d+m*o,t[5]=r*h,t[9]=_-u*o,t[2]=-r*l,t[6]=o,t[10]=r*c}else if(e.order==="ZYX"){const u=r*h,d=r*f,m=o*h,_=o*f;t[0]=c*h,t[4]=m*l-d,t[8]=u*l+_,t[1]=c*f,t[5]=_*l+u,t[9]=d*l-m,t[2]=-l,t[6]=o*c,t[10]=r*c}else if(e.order==="YZX"){const u=r*c,d=r*l,m=o*c,_=o*l;t[0]=c*h,t[4]=_-u*f,t[8]=m*f+d,t[1]=f,t[5]=r*h,t[9]=-o*h,t[2]=-l*h,t[6]=d*f+m,t[10]=u-_*f}else if(e.order==="XZY"){const u=r*c,d=r*l,m=o*c,_=o*l;t[0]=c*h,t[4]=-f,t[8]=l*h,t[1]=u*f+_,t[5]=r*h,t[9]=d*f-m,t[2]=m*f-d,t[6]=o*h,t[10]=_*f+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(PA,e,UA)}lookAt(e,t,n){const s=this.elements;return Hn.subVectors(e,t),Hn.lengthSq()===0&&(Hn.z=1),Hn.normalize(),ji.crossVectors(n,Hn),ji.lengthSq()===0&&(Math.abs(n.z)===1?Hn.x+=1e-4:Hn.z+=1e-4,Hn.normalize(),ji.crossVectors(n,Hn)),ji.normalize(),pr.crossVectors(Hn,ji),s[0]=ji.x,s[4]=pr.x,s[8]=Hn.x,s[1]=ji.y,s[5]=pr.y,s[9]=Hn.y,s[2]=ji.z,s[6]=pr.z,s[10]=Hn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,a=this.elements,r=n[0],o=n[4],c=n[8],l=n[12],h=n[1],f=n[5],u=n[9],d=n[13],m=n[2],_=n[6],p=n[10],A=n[14],b=n[3],x=n[7],g=n[11],C=n[15],w=s[0],y=s[4],S=s[8],v=s[12],M=s[1],N=s[5],T=s[9],H=s[13],ie=s[2],ge=s[6],ue=s[10],ae=s[14],$=s[3],fe=s[7],se=s[11],oe=s[15];return a[0]=r*w+o*M+c*ie+l*$,a[4]=r*y+o*N+c*ge+l*fe,a[8]=r*S+o*T+c*ue+l*se,a[12]=r*v+o*H+c*ae+l*oe,a[1]=h*w+f*M+u*ie+d*$,a[5]=h*y+f*N+u*ge+d*fe,a[9]=h*S+f*T+u*ue+d*se,a[13]=h*v+f*H+u*ae+d*oe,a[2]=m*w+_*M+p*ie+A*$,a[6]=m*y+_*N+p*ge+A*fe,a[10]=m*S+_*T+p*ue+A*se,a[14]=m*v+_*H+p*ae+A*oe,a[3]=b*w+x*M+g*ie+C*$,a[7]=b*y+x*N+g*ge+C*fe,a[11]=b*S+x*T+g*ue+C*se,a[15]=b*v+x*H+g*ae+C*oe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],a=e[12],r=e[1],o=e[5],c=e[9],l=e[13],h=e[2],f=e[6],u=e[10],d=e[14],m=e[3],_=e[7],p=e[11],A=e[15];return m*(+a*c*f-s*l*f-a*o*u+n*l*u+s*o*d-n*c*d)+_*(+t*c*d-t*l*u+a*r*u-s*r*d+s*l*h-a*c*h)+p*(+t*l*f-t*o*d-a*r*f+n*r*d+a*o*h-n*l*h)+A*(-s*o*h-t*c*f+t*o*u+s*r*f-n*r*u+n*c*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],a=e[3],r=e[4],o=e[5],c=e[6],l=e[7],h=e[8],f=e[9],u=e[10],d=e[11],m=e[12],_=e[13],p=e[14],A=e[15],b=f*p*l-_*u*l+_*c*d-o*p*d-f*c*A+o*u*A,x=m*u*l-h*p*l-m*c*d+r*p*d+h*c*A-r*u*A,g=h*_*l-m*f*l+m*o*d-r*_*d-h*o*A+r*f*A,C=m*f*c-h*_*c-m*o*u+r*_*u+h*o*p-r*f*p,w=t*b+n*x+s*g+a*C;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const y=1/w;return e[0]=b*y,e[1]=(_*u*a-f*p*a-_*s*d+n*p*d+f*s*A-n*u*A)*y,e[2]=(o*p*a-_*c*a+_*s*l-n*p*l-o*s*A+n*c*A)*y,e[3]=(f*c*a-o*u*a-f*s*l+n*u*l+o*s*d-n*c*d)*y,e[4]=x*y,e[5]=(h*p*a-m*u*a+m*s*d-t*p*d-h*s*A+t*u*A)*y,e[6]=(m*c*a-r*p*a-m*s*l+t*p*l+r*s*A-t*c*A)*y,e[7]=(r*u*a-h*c*a+h*s*l-t*u*l-r*s*d+t*c*d)*y,e[8]=g*y,e[9]=(m*f*a-h*_*a-m*n*d+t*_*d+h*n*A-t*f*A)*y,e[10]=(r*_*a-m*o*a+m*n*l-t*_*l-r*n*A+t*o*A)*y,e[11]=(h*o*a-r*f*a-h*n*l+t*f*l+r*n*d-t*o*d)*y,e[12]=C*y,e[13]=(h*_*s-m*f*s+m*n*u-t*_*u-h*n*p+t*f*p)*y,e[14]=(m*o*s-r*_*s-m*n*c+t*_*c+r*n*p-t*o*p)*y,e[15]=(r*f*s-h*o*s+h*n*c-t*f*c-r*n*u+t*o*u)*y,this}scale(e){const t=this.elements,n=e.x,s=e.y,a=e.z;return t[0]*=n,t[4]*=s,t[8]*=a,t[1]*=n,t[5]*=s,t[9]*=a,t[2]*=n,t[6]*=s,t[10]*=a,t[3]*=n,t[7]*=s,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),a=1-n,r=e.x,o=e.y,c=e.z,l=a*r,h=a*o;return this.set(l*r+n,l*o-s*c,l*c+s*o,0,l*o+s*c,h*o+n,h*c-s*r,0,l*c-s*o,h*c+s*r,a*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,a,r){return this.set(1,n,a,0,e,1,r,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,a=t._x,r=t._y,o=t._z,c=t._w,l=a+a,h=r+r,f=o+o,u=a*l,d=a*h,m=a*f,_=r*h,p=r*f,A=o*f,b=c*l,x=c*h,g=c*f,C=n.x,w=n.y,y=n.z;return s[0]=(1-(_+A))*C,s[1]=(d+g)*C,s[2]=(m-x)*C,s[3]=0,s[4]=(d-g)*w,s[5]=(1-(u+A))*w,s[6]=(p+b)*w,s[7]=0,s[8]=(m+x)*y,s[9]=(p-b)*y,s[10]=(1-(u+_))*y,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let a=Ns.set(s[0],s[1],s[2]).length();const r=Ns.set(s[4],s[5],s[6]).length(),o=Ns.set(s[8],s[9],s[10]).length();this.determinant()<0&&(a=-a),e.x=s[12],e.y=s[13],e.z=s[14],oi.copy(this);const l=1/a,h=1/r,f=1/o;return oi.elements[0]*=l,oi.elements[1]*=l,oi.elements[2]*=l,oi.elements[4]*=h,oi.elements[5]*=h,oi.elements[6]*=h,oi.elements[8]*=f,oi.elements[9]*=f,oi.elements[10]*=f,t.setFromRotationMatrix(oi),n.x=a,n.y=r,n.z=o,this}makePerspective(e,t,n,s,a,r,o=Fi){const c=this.elements,l=2*a/(t-e),h=2*a/(n-s),f=(t+e)/(t-e),u=(n+s)/(n-s);let d,m;if(o===Fi)d=-(r+a)/(r-a),m=-2*r*a/(r-a);else if(o===fo)d=-r/(r-a),m=-r*a/(r-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=h,c[9]=u,c[13]=0,c[2]=0,c[6]=0,c[10]=d,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,a,r,o=Fi){const c=this.elements,l=1/(t-e),h=1/(n-s),f=1/(r-a),u=(t+e)*l,d=(n+s)*h;let m,_;if(o===Fi)m=(r+a)*f,_=-2*f;else if(o===fo)m=a*f,_=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-u,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-d,c[2]=0,c[6]=0,c[10]=_,c[14]=-m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Ns=new ne,oi=new ot,PA=new ne(0,0,0),UA=new ne(1,1,1),ji=new ne,pr=new ne,Hn=new ne,mh=new ot,gh=new qt;class ai{constructor(e=0,t=0,n=0,s=ai.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,a=s[0],r=s[4],o=s[8],c=s[1],l=s[5],h=s[9],f=s[2],u=s[6],d=s[10];switch(t){case"XYZ":this._y=Math.asin(gn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-r,a)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-gn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,a),this._z=0);break;case"ZXY":this._x=Math.asin(gn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-r,l)):(this._y=0,this._z=Math.atan2(c,a));break;case"ZYX":this._y=Math.asin(-gn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(u,d),this._z=Math.atan2(c,a)):(this._x=0,this._z=Math.atan2(-r,l));break;case"YZX":this._z=Math.asin(gn(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-f,a)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-gn(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(o,a)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return mh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(mh,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return gh.setFromEuler(this),this.setFromQuaternion(gh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ai.DEFAULT_ORDER="XYZ";class Eu{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let FA=0;const bh=new ne,ks=new qt,Si=new ot,mr=new ne,Ma=new ne,NA=new ne,kA=new qt,xh=new ne(1,0,0),_h=new ne(0,1,0),Eh=new ne(0,0,1),vh={type:"added"},QA={type:"removed"},Qs={type:"childadded",child:null},Qo={type:"childremoved",child:null};class Yt extends Is{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:FA++}),this.uuid=di(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Yt.DEFAULT_UP.clone();const e=new ne,t=new ai,n=new qt,s=new ne(1,1,1);function a(){n.setFromEuler(t,!1)}function r(){t.setFromQuaternion(n,void 0,!1)}t._onChange(a),n._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ot},normalMatrix:{value:new _t}}),this.matrix=new ot,this.matrixWorld=new ot,this.matrixAutoUpdate=Yt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Yt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Eu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ks.setFromAxisAngle(e,t),this.quaternion.multiply(ks),this}rotateOnWorldAxis(e,t){return ks.setFromAxisAngle(e,t),this.quaternion.premultiply(ks),this}rotateX(e){return this.rotateOnAxis(xh,e)}rotateY(e){return this.rotateOnAxis(_h,e)}rotateZ(e){return this.rotateOnAxis(Eh,e)}translateOnAxis(e,t){return bh.copy(e).applyQuaternion(this.quaternion),this.position.add(bh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(xh,e)}translateY(e){return this.translateOnAxis(_h,e)}translateZ(e){return this.translateOnAxis(Eh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Si.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?mr.copy(e):mr.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Ma.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Si.lookAt(Ma,mr,this.up):Si.lookAt(mr,Ma,this.up),this.quaternion.setFromRotationMatrix(Si),s&&(Si.extractRotation(s.matrixWorld),ks.setFromRotationMatrix(Si),this.quaternion.premultiply(ks.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(vh),Qs.child=e,this.dispatchEvent(Qs),Qs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(QA),Qo.child=e,this.dispatchEvent(Qo),Qo.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Si.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Si.multiply(e.parent.matrixWorld)),e.applyMatrix4(Si),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(vh),Qs.child=e,this.dispatchEvent(Qs),Qs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let a=0,r=s.length;a<r;a++)s[a].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ma,e,NA),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ma,kA,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let a=0,r=s.length;a<r;a++)s[a].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function a(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=a(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const f=c[l];a(e.shapes,f)}else a(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(a(e.materials,this.material[c]));s.material=o}else s.material=a(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];s.animations.push(a(e.animations,c))}}if(t){const o=r(e.geometries),c=r(e.materials),l=r(e.textures),h=r(e.images),f=r(e.shapes),u=r(e.skeletons),d=r(e.animations),m=r(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),u.length>0&&(n.skeletons=u),d.length>0&&(n.animations=d),m.length>0&&(n.nodes=m)}return n.object=s,n;function r(o){const c=[];for(const l in o){const h=o[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}Yt.DEFAULT_UP=new ne(0,1,0);Yt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Yt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ci=new ne,Ii=new ne,Oo=new ne,Ti=new ne,Os=new ne,zs=new ne,Mh=new ne,zo=new ne,Go=new ne,Ho=new ne,Vo=new Dt,Wo=new Dt,jo=new Dt;class ui{constructor(e=new ne,t=new ne,n=new ne){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),ci.subVectors(e,t),s.cross(ci);const a=s.lengthSq();return a>0?s.multiplyScalar(1/Math.sqrt(a)):s.set(0,0,0)}static getBarycoord(e,t,n,s,a){ci.subVectors(s,t),Ii.subVectors(n,t),Oo.subVectors(e,t);const r=ci.dot(ci),o=ci.dot(Ii),c=ci.dot(Oo),l=Ii.dot(Ii),h=Ii.dot(Oo),f=r*l-o*o;if(f===0)return a.set(0,0,0),null;const u=1/f,d=(l*c-o*h)*u,m=(r*h-o*c)*u;return a.set(1-d-m,m,d)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Ti)===null?!1:Ti.x>=0&&Ti.y>=0&&Ti.x+Ti.y<=1}static getInterpolation(e,t,n,s,a,r,o,c){return this.getBarycoord(e,t,n,s,Ti)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(a,Ti.x),c.addScaledVector(r,Ti.y),c.addScaledVector(o,Ti.z),c)}static getInterpolatedAttribute(e,t,n,s,a,r){return Vo.setScalar(0),Wo.setScalar(0),jo.setScalar(0),Vo.fromBufferAttribute(e,t),Wo.fromBufferAttribute(e,n),jo.fromBufferAttribute(e,s),r.setScalar(0),r.addScaledVector(Vo,a.x),r.addScaledVector(Wo,a.y),r.addScaledVector(jo,a.z),r}static isFrontFacing(e,t,n,s){return ci.subVectors(n,t),Ii.subVectors(e,t),ci.cross(Ii).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ci.subVectors(this.c,this.b),Ii.subVectors(this.a,this.b),ci.cross(Ii).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ui.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ui.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,a){return ui.getInterpolation(e,this.a,this.b,this.c,t,n,s,a)}containsPoint(e){return ui.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ui.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,a=this.c;let r,o;Os.subVectors(s,n),zs.subVectors(a,n),zo.subVectors(e,n);const c=Os.dot(zo),l=zs.dot(zo);if(c<=0&&l<=0)return t.copy(n);Go.subVectors(e,s);const h=Os.dot(Go),f=zs.dot(Go);if(h>=0&&f<=h)return t.copy(s);const u=c*f-h*l;if(u<=0&&c>=0&&h<=0)return r=c/(c-h),t.copy(n).addScaledVector(Os,r);Ho.subVectors(e,a);const d=Os.dot(Ho),m=zs.dot(Ho);if(m>=0&&d<=m)return t.copy(a);const _=d*l-c*m;if(_<=0&&l>=0&&m<=0)return o=l/(l-m),t.copy(n).addScaledVector(zs,o);const p=h*m-d*f;if(p<=0&&f-h>=0&&d-m>=0)return Mh.subVectors(a,s),o=(f-h)/(f-h+(d-m)),t.copy(s).addScaledVector(Mh,o);const A=1/(p+_+u);return r=_*A,o=u*A,t.copy(n).addScaledVector(Os,r).addScaledVector(zs,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const vu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},qi={h:0,s:0,l:0},gr={h:0,s:0,l:0};function qo(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Ne{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Kt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ct.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=Ct.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ct.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=Ct.workingColorSpace){if(e=Ll(e,1),t=gn(t,0,1),n=gn(n,0,1),t===0)this.r=this.g=this.b=n;else{const a=n<=.5?n*(1+t):n+t-n*t,r=2*n-a;this.r=qo(r,a,e+1/3),this.g=qo(r,a,e),this.b=qo(r,a,e-1/3)}return Ct.toWorkingColorSpace(this,s),this}setStyle(e,t=Kt){function n(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const r=s[1],o=s[2];switch(r){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=s[1],r=a.length;if(r===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(r===6)return this.setHex(parseInt(a,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Kt){const n=vu[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Qi(e.r),this.g=Qi(e.g),this.b=Qi(e.b),this}copyLinearToSRGB(e){return this.r=ia(e.r),this.g=ia(e.g),this.b=ia(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Kt){return Ct.fromWorkingColorSpace(Mn.copy(this),e),Math.round(gn(Mn.r*255,0,255))*65536+Math.round(gn(Mn.g*255,0,255))*256+Math.round(gn(Mn.b*255,0,255))}getHexString(e=Kt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ct.workingColorSpace){Ct.fromWorkingColorSpace(Mn.copy(this),t);const n=Mn.r,s=Mn.g,a=Mn.b,r=Math.max(n,s,a),o=Math.min(n,s,a);let c,l;const h=(o+r)/2;if(o===r)c=0,l=0;else{const f=r-o;switch(l=h<=.5?f/(r+o):f/(2-r-o),r){case n:c=(s-a)/f+(s<a?6:0);break;case s:c=(a-n)/f+2;break;case a:c=(n-s)/f+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=Ct.workingColorSpace){return Ct.fromWorkingColorSpace(Mn.copy(this),t),e.r=Mn.r,e.g=Mn.g,e.b=Mn.b,e}getStyle(e=Kt){Ct.fromWorkingColorSpace(Mn.copy(this),e);const t=Mn.r,n=Mn.g,s=Mn.b;return e!==Kt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(qi),this.setHSL(qi.h+e,qi.s+t,qi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(qi),e.getHSL(gr);const n=Ha(qi.h,gr.h,t),s=Ha(qi.s,gr.s,t),a=Ha(qi.l,gr.l,t);return this.setHSL(n,s,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,a=e.elements;return this.r=a[0]*t+a[3]*n+a[6]*s,this.g=a[1]*t+a[4]*n+a[7]*s,this.b=a[2]*t+a[5]*n+a[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Mn=new Ne;Ne.NAMES=vu;let OA=0;class si extends Is{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:OA++}),this.uuid=di(),this.name="",this.blending=ta,this.side=Ai,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Rc,this.blendDst=Dc,this.blendEquation=hi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ne(0,0,0),this.blendAlpha=0,this.depthFunc=ca,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=rh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ds,this.stencilZFail=Ds,this.stencilZPass=Ds,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ta&&(n.blending=this.blending),this.side!==Ai&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Rc&&(n.blendSrc=this.blendSrc),this.blendDst!==Dc&&(n.blendDst=this.blendDst),this.blendEquation!==hi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ca&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==rh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ds&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ds&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ds&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(a){const r=[];for(const o in a){const c=a[o];delete c.metadata,r.push(c)}return r}if(t){const a=s(e.textures),r=s(e.images);a.length>0&&(n.textures=a),r.length>0&&(n.images=r)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let a=0;a!==s;++a)n[a]=t[a].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Xn extends si{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new Ne(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ai,this.combine=wl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const nn=new ne,br=new Ye;class Xt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=ll,this.updateRanges=[],this.gpuType=wn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,a=this.itemSize;s<a;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)br.fromBufferAttribute(this,t),br.applyMatrix3(e),this.setXY(t,br.x,br.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)nn.fromBufferAttribute(this,t),nn.applyMatrix3(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)nn.fromBufferAttribute(this,t),nn.applyMatrix4(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)nn.fromBufferAttribute(this,t),nn.applyNormalMatrix(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)nn.fromBufferAttribute(this,t),nn.transformDirection(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=fi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=kt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=fi(t,this.array)),t}setX(e,t){return this.normalized&&(t=kt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=fi(t,this.array)),t}setY(e,t){return this.normalized&&(t=kt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=fi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=kt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=fi(t,this.array)),t}setW(e,t){return this.normalized&&(t=kt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=kt(t,this.array),n=kt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=kt(t,this.array),n=kt(n,this.array),s=kt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,a){return e*=this.itemSize,this.normalized&&(t=kt(t,this.array),n=kt(n,this.array),s=kt(s,this.array),a=kt(a,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ll&&(e.usage=this.usage),e}}class Pl extends Xt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Ul extends Xt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class pt extends Xt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let zA=0;const Zn=new ot,Yo=new Yt,Gs=new ne,Vn=new Oi,ya=new Oi,un=new ne;class It extends Is{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:zA++}),this.uuid=di(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(gu(e)?Ul:Pl)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const a=new _t().getNormalMatrix(e);n.applyNormalMatrix(a),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Zn.makeRotationFromQuaternion(e),this.applyMatrix4(Zn),this}rotateX(e){return Zn.makeRotationX(e),this.applyMatrix4(Zn),this}rotateY(e){return Zn.makeRotationY(e),this.applyMatrix4(Zn),this}rotateZ(e){return Zn.makeRotationZ(e),this.applyMatrix4(Zn),this}translate(e,t,n){return Zn.makeTranslation(e,t,n),this.applyMatrix4(Zn),this}scale(e,t,n){return Zn.makeScale(e,t,n),this.applyMatrix4(Zn),this}lookAt(e){return Yo.lookAt(e),Yo.updateMatrix(),this.applyMatrix4(Yo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Gs).negate(),this.translate(Gs.x,Gs.y,Gs.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,a=e.length;s<a;s++){const r=e[s];n.push(r.x,r.y,r.z||0)}this.setAttribute("position",new pt(n,3))}else{for(let n=0,s=t.count;n<s;n++){const a=e[n];t.setXYZ(n,a.x,a.y,a.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Oi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ne(-1/0,-1/0,-1/0),new ne(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const a=t[n];Vn.setFromBufferAttribute(a),this.morphTargetsRelative?(un.addVectors(this.boundingBox.min,Vn.min),this.boundingBox.expandByPoint(un),un.addVectors(this.boundingBox.max,Vn.max),this.boundingBox.expandByPoint(un)):(this.boundingBox.expandByPoint(Vn.min),this.boundingBox.expandByPoint(Vn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ei);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ne,1/0);return}if(e){const n=this.boundingSphere.center;if(Vn.setFromBufferAttribute(e),t)for(let a=0,r=t.length;a<r;a++){const o=t[a];ya.setFromBufferAttribute(o),this.morphTargetsRelative?(un.addVectors(Vn.min,ya.min),Vn.expandByPoint(un),un.addVectors(Vn.max,ya.max),Vn.expandByPoint(un)):(Vn.expandByPoint(ya.min),Vn.expandByPoint(ya.max))}Vn.getCenter(n);let s=0;for(let a=0,r=e.count;a<r;a++)un.fromBufferAttribute(e,a),s=Math.max(s,n.distanceToSquared(un));if(t)for(let a=0,r=t.length;a<r;a++){const o=t[a],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)un.fromBufferAttribute(o,l),c&&(Gs.fromBufferAttribute(e,l),un.add(Gs)),s=Math.max(s,n.distanceToSquared(un))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,a=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Xt(new Float32Array(4*n.count),4));const r=this.getAttribute("tangent"),o=[],c=[];for(let S=0;S<n.count;S++)o[S]=new ne,c[S]=new ne;const l=new ne,h=new ne,f=new ne,u=new Ye,d=new Ye,m=new Ye,_=new ne,p=new ne;function A(S,v,M){l.fromBufferAttribute(n,S),h.fromBufferAttribute(n,v),f.fromBufferAttribute(n,M),u.fromBufferAttribute(a,S),d.fromBufferAttribute(a,v),m.fromBufferAttribute(a,M),h.sub(l),f.sub(l),d.sub(u),m.sub(u);const N=1/(d.x*m.y-m.x*d.y);isFinite(N)&&(_.copy(h).multiplyScalar(m.y).addScaledVector(f,-d.y).multiplyScalar(N),p.copy(f).multiplyScalar(d.x).addScaledVector(h,-m.x).multiplyScalar(N),o[S].add(_),o[v].add(_),o[M].add(_),c[S].add(p),c[v].add(p),c[M].add(p))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let S=0,v=b.length;S<v;++S){const M=b[S],N=M.start,T=M.count;for(let H=N,ie=N+T;H<ie;H+=3)A(e.getX(H+0),e.getX(H+1),e.getX(H+2))}const x=new ne,g=new ne,C=new ne,w=new ne;function y(S){C.fromBufferAttribute(s,S),w.copy(C);const v=o[S];x.copy(v),x.sub(C.multiplyScalar(C.dot(v))).normalize(),g.crossVectors(w,v);const N=g.dot(c[S])<0?-1:1;r.setXYZW(S,x.x,x.y,x.z,N)}for(let S=0,v=b.length;S<v;++S){const M=b[S],N=M.start,T=M.count;for(let H=N,ie=N+T;H<ie;H+=3)y(e.getX(H+0)),y(e.getX(H+1)),y(e.getX(H+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Xt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,d=n.count;u<d;u++)n.setXYZ(u,0,0,0);const s=new ne,a=new ne,r=new ne,o=new ne,c=new ne,l=new ne,h=new ne,f=new ne;if(e)for(let u=0,d=e.count;u<d;u+=3){const m=e.getX(u+0),_=e.getX(u+1),p=e.getX(u+2);s.fromBufferAttribute(t,m),a.fromBufferAttribute(t,_),r.fromBufferAttribute(t,p),h.subVectors(r,a),f.subVectors(s,a),h.cross(f),o.fromBufferAttribute(n,m),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,p),o.add(h),c.add(h),l.add(h),n.setXYZ(m,o.x,o.y,o.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(p,l.x,l.y,l.z)}else for(let u=0,d=t.count;u<d;u+=3)s.fromBufferAttribute(t,u+0),a.fromBufferAttribute(t,u+1),r.fromBufferAttribute(t,u+2),h.subVectors(r,a),f.subVectors(s,a),h.cross(f),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)un.fromBufferAttribute(e,t),un.normalize(),e.setXYZ(t,un.x,un.y,un.z)}toNonIndexed(){function e(o,c){const l=o.array,h=o.itemSize,f=o.normalized,u=new l.constructor(c.length*h);let d=0,m=0;for(let _=0,p=c.length;_<p;_++){o.isInterleavedBufferAttribute?d=c[_]*o.data.stride+o.offset:d=c[_]*h;for(let A=0;A<h;A++)u[m++]=l[d++]}return new Xt(u,h,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new It,n=this.index.array,s=this.attributes;for(const o in s){const c=s[o],l=e(c,n);t.setAttribute(o,l)}const a=this.morphAttributes;for(const o in a){const c=[],l=a[o];for(let h=0,f=l.length;h<f;h++){const u=l[h],d=e(u,n);c.push(d)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let o=0,c=r.length;o<c;o++){const l=r[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const s={};let a=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let f=0,u=l.length;f<u;f++){const d=l[f];h.push(d.toJSON(e.data))}h.length>0&&(s[c]=h,a=!0)}a&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(e.data.groups=JSON.parse(JSON.stringify(r)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const s=e.attributes;for(const l in s){const h=s[l];this.setAttribute(l,h.clone(t))}const a=e.morphAttributes;for(const l in a){const h=[],f=a[l];for(let u=0,d=f.length;u<d;u++)h.push(f[u].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;const r=e.groups;for(let l=0,h=r.length;l<h;l++){const f=r[l];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const yh=new ot,fs=new or,xr=new Ei,wh=new ne,_r=new ne,Er=new ne,vr=new ne,Xo=new ne,Mr=new ne,Ch=new ne,yr=new ne;class dt extends Yt{constructor(e=new It,t=new Xn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,r=s.length;a<r;a++){const o=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,a=n.morphAttributes.position,r=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(a&&o){Mr.set(0,0,0);for(let c=0,l=a.length;c<l;c++){const h=o[c],f=a[c];h!==0&&(Xo.fromBufferAttribute(f,e),r?Mr.addScaledVector(Xo,h):Mr.addScaledVector(Xo.sub(t),h))}t.add(Mr)}return t}raycast(e,t){const n=this.geometry,s=this.material,a=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),xr.copy(n.boundingSphere),xr.applyMatrix4(a),fs.copy(e.ray).recast(e.near),!(xr.containsPoint(fs.origin)===!1&&(fs.intersectSphere(xr,wh)===null||fs.origin.distanceToSquared(wh)>(e.far-e.near)**2))&&(yh.copy(a).invert(),fs.copy(e.ray).applyMatrix4(yh),!(n.boundingBox!==null&&fs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,fs)))}_computeIntersections(e,t,n){let s;const a=this.geometry,r=this.material,o=a.index,c=a.attributes.position,l=a.attributes.uv,h=a.attributes.uv1,f=a.attributes.normal,u=a.groups,d=a.drawRange;if(o!==null)if(Array.isArray(r))for(let m=0,_=u.length;m<_;m++){const p=u[m],A=r[p.materialIndex],b=Math.max(p.start,d.start),x=Math.min(o.count,Math.min(p.start+p.count,d.start+d.count));for(let g=b,C=x;g<C;g+=3){const w=o.getX(g),y=o.getX(g+1),S=o.getX(g+2);s=wr(this,A,e,n,l,h,f,w,y,S),s&&(s.faceIndex=Math.floor(g/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{const m=Math.max(0,d.start),_=Math.min(o.count,d.start+d.count);for(let p=m,A=_;p<A;p+=3){const b=o.getX(p),x=o.getX(p+1),g=o.getX(p+2);s=wr(this,r,e,n,l,h,f,b,x,g),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(r))for(let m=0,_=u.length;m<_;m++){const p=u[m],A=r[p.materialIndex],b=Math.max(p.start,d.start),x=Math.min(c.count,Math.min(p.start+p.count,d.start+d.count));for(let g=b,C=x;g<C;g+=3){const w=g,y=g+1,S=g+2;s=wr(this,A,e,n,l,h,f,w,y,S),s&&(s.faceIndex=Math.floor(g/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{const m=Math.max(0,d.start),_=Math.min(c.count,d.start+d.count);for(let p=m,A=_;p<A;p+=3){const b=p,x=p+1,g=p+2;s=wr(this,r,e,n,l,h,f,b,x,g),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}}}function GA(i,e,t,n,s,a,r,o){let c;if(e.side===On?c=n.intersectTriangle(r,a,s,!0,o):c=n.intersectTriangle(s,a,r,e.side===Ai,o),c===null)return null;yr.copy(o),yr.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(yr);return l<t.near||l>t.far?null:{distance:l,point:yr.clone(),object:i}}function wr(i,e,t,n,s,a,r,o,c,l){i.getVertexPosition(o,_r),i.getVertexPosition(c,Er),i.getVertexPosition(l,vr);const h=GA(i,e,t,n,_r,Er,vr,Ch);if(h){const f=new ne;ui.getBarycoord(Ch,_r,Er,vr,f),s&&(h.uv=ui.getInterpolatedAttribute(s,o,c,l,f,new Ye)),a&&(h.uv1=ui.getInterpolatedAttribute(a,o,c,l,f,new Ye)),r&&(h.normal=ui.getInterpolatedAttribute(r,o,c,l,f,new ne),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a:o,b:c,c:l,normal:new ne,materialIndex:0};ui.getNormal(_r,Er,vr,u.normal),h.face=u,h.barycoord=f}return h}class Gt extends It{constructor(e=1,t=1,n=1,s=1,a=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:a,depthSegments:r};const o=this;s=Math.floor(s),a=Math.floor(a),r=Math.floor(r);const c=[],l=[],h=[],f=[];let u=0,d=0;m("z","y","x",-1,-1,n,t,e,r,a,0),m("z","y","x",1,-1,n,t,-e,r,a,1),m("x","z","y",1,1,e,n,t,s,r,2),m("x","z","y",1,-1,e,n,-t,s,r,3),m("x","y","z",1,-1,e,t,n,s,a,4),m("x","y","z",-1,-1,e,t,-n,s,a,5),this.setIndex(c),this.setAttribute("position",new pt(l,3)),this.setAttribute("normal",new pt(h,3)),this.setAttribute("uv",new pt(f,2));function m(_,p,A,b,x,g,C,w,y,S,v){const M=g/y,N=C/S,T=g/2,H=C/2,ie=w/2,ge=y+1,ue=S+1;let ae=0,$=0;const fe=new ne;for(let se=0;se<ue;se++){const oe=se*N-H;for(let ve=0;ve<ge;ve++){const me=ve*M-T;fe[_]=me*b,fe[p]=oe*x,fe[A]=ie,l.push(fe.x,fe.y,fe.z),fe[_]=0,fe[p]=0,fe[A]=w>0?1:-1,h.push(fe.x,fe.y,fe.z),f.push(ve/y),f.push(1-se/S),ae+=1}}for(let se=0;se<S;se++)for(let oe=0;oe<y;oe++){const ve=u+oe+ge*se,me=u+oe+ge*(se+1),j=u+(oe+1)+ge*(se+1),pe=u+(oe+1)+ge*se;c.push(ve,me,pe),c.push(me,j,pe),$+=6}o.addGroup(d,$,v),d+=$,u+=ae}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Gt(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function fa(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function Bn(i){const e={};for(let t=0;t<i.length;t++){const n=fa(i[t]);for(const s in n)e[s]=n[s]}return e}function HA(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Mu(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ct.workingColorSpace}const xi={clone:fa,merge:Bn};var VA=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,WA=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class an extends si{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=VA,this.fragmentShader=WA,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=fa(e.uniforms),this.uniformsGroups=HA(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const r=this.uniforms[s].value;r&&r.isTexture?t.uniforms[s]={type:"t",value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[s]={type:"c",value:r.getHex()}:r&&r.isVector2?t.uniforms[s]={type:"v2",value:r.toArray()}:r&&r.isVector3?t.uniforms[s]={type:"v3",value:r.toArray()}:r&&r.isVector4?t.uniforms[s]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?t.uniforms[s]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?t.uniforms[s]={type:"m4",value:r.toArray()}:t.uniforms[s]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class yu extends Yt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ot,this.projectionMatrix=new ot,this.projectionMatrixInverse=new ot,this.coordinateSystem=Fi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Yi=new ne,Sh=new Ye,Ih=new Ye;class Rn extends yu{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ha*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ga*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ha*2*Math.atan(Math.tan(Ga*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Yi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Yi.x,Yi.y).multiplyScalar(-e/Yi.z),Yi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Yi.x,Yi.y).multiplyScalar(-e/Yi.z)}getViewSize(e,t){return this.getViewBounds(e,Sh,Ih),t.subVectors(Ih,Sh)}setViewOffset(e,t,n,s,a,r){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=a,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ga*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,a=-.5*s;const r=this.view;if(this.view!==null&&this.view.enabled){const c=r.fullWidth,l=r.fullHeight;a+=r.offsetX*s/c,t-=r.offsetY*n/l,s*=r.width/c,n*=r.height/l}const o=this.filmOffset;o!==0&&(a+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Hs=-90,Vs=1;class jA extends Yt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Rn(Hs,Vs,e,t);s.layers=this.layers,this.add(s);const a=new Rn(Hs,Vs,e,t);a.layers=this.layers,this.add(a);const r=new Rn(Hs,Vs,e,t);r.layers=this.layers,this.add(r);const o=new Rn(Hs,Vs,e,t);o.layers=this.layers,this.add(o);const c=new Rn(Hs,Vs,e,t);c.layers=this.layers,this.add(c);const l=new Rn(Hs,Vs,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,a,r,o,c]=t;for(const l of t)this.remove(l);if(e===Fi)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===fo)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,r,o,c,l,h]=this.children,f=e.getRenderTarget(),u=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,a),e.setRenderTarget(n,1,s),e.render(t,r),e.setRenderTarget(n,2,s),e.render(t,o),e.setRenderTarget(n,3,s),e.render(t,c),e.setRenderTarget(n,4,s),e.render(t,l),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(f,u,d),e.xr.enabled=m,n.texture.needsPMREMUpdate=!0}}class wu extends tn{constructor(e,t,n,s,a,r,o,c,l,h){e=e!==void 0?e:[],t=t!==void 0?t:vs,super(e,t,n,s,a,r,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class qA extends Kn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new wu(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Dn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Gt(5,5,5),a=new an({name:"CubemapFromEquirect",uniforms:fa(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:On,blending:mn});a.uniforms.tEquirect.value=t;const r=new dt(s,a),o=t.minFilter;return t.minFilter===_i&&(t.minFilter=Dn),new jA(1,10,this).update(e,r),t.minFilter=o,r.geometry.dispose(),r.material.dispose(),this}clear(e,t,n,s){const a=e.getRenderTarget();for(let r=0;r<6;r++)e.setRenderTarget(this,r),e.clear(t,n,s);e.setRenderTarget(a)}}const Ko=new ne,YA=new ne,XA=new _t;class Ji{constructor(e=new ne(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=Ko.subVectors(n,t).cross(YA.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Ko),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/s;return a<0||a>1?null:t.copy(e.start).addScaledVector(n,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||XA.getNormalMatrix(e),s=this.coplanarPoint(Ko).applyMatrix4(e),a=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const us=new Ei,Cr=new ne;class Fl{constructor(e=new Ji,t=new Ji,n=new Ji,s=new Ji,a=new Ji,r=new Ji){this.planes=[e,t,n,s,a,r]}set(e,t,n,s,a,r){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(a),o[5].copy(r),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Fi){const n=this.planes,s=e.elements,a=s[0],r=s[1],o=s[2],c=s[3],l=s[4],h=s[5],f=s[6],u=s[7],d=s[8],m=s[9],_=s[10],p=s[11],A=s[12],b=s[13],x=s[14],g=s[15];if(n[0].setComponents(c-a,u-l,p-d,g-A).normalize(),n[1].setComponents(c+a,u+l,p+d,g+A).normalize(),n[2].setComponents(c+r,u+h,p+m,g+b).normalize(),n[3].setComponents(c-r,u-h,p-m,g-b).normalize(),n[4].setComponents(c-o,u-f,p-_,g-x).normalize(),t===Fi)n[5].setComponents(c+o,u+f,p+_,g+x).normalize();else if(t===fo)n[5].setComponents(o,f,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),us.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),us.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(us)}intersectsSprite(e){return us.center.set(0,0,0),us.radius=.7071067811865476,us.applyMatrix4(e.matrixWorld),this.intersectsSphere(us)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(Cr.x=s.normal.x>0?e.max.x:e.min.x,Cr.y=s.normal.y>0?e.max.y:e.min.y,Cr.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Cr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Cu(){let i=null,e=!1,t=null,n=null;function s(a,r){t(a,r),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){i=a}}}function KA(i){const e=new WeakMap;function t(o,c){const l=o.array,h=o.usage,f=l.byteLength,u=i.createBuffer();i.bindBuffer(c,u),i.bufferData(c,l,h),o.onUploadCallback();let d;if(l instanceof Float32Array)d=i.FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=i.SHORT;else if(l instanceof Uint32Array)d=i.UNSIGNED_INT;else if(l instanceof Int32Array)d=i.INT;else if(l instanceof Int8Array)d=i.BYTE;else if(l instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:u,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:f}}function n(o,c,l){const h=c.array,f=c.updateRanges;if(i.bindBuffer(l,o),f.length===0)i.bufferSubData(l,0,h);else{f.sort((d,m)=>d.start-m.start);let u=0;for(let d=1;d<f.length;d++){const m=f[u],_=f[d];_.start<=m.start+m.count+1?m.count=Math.max(m.count,_.start+_.count-m.start):(++u,f[u]=_)}f.length=u+1;for(let d=0,m=f.length;d<m;d++){const _=f[d];i.bufferSubData(l,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function a(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(i.deleteBuffer(c.buffer),e.delete(o))}function r(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:s,remove:a,update:r}}class ua extends It{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const a=e/2,r=t/2,o=Math.floor(n),c=Math.floor(s),l=o+1,h=c+1,f=e/o,u=t/c,d=[],m=[],_=[],p=[];for(let A=0;A<h;A++){const b=A*u-r;for(let x=0;x<l;x++){const g=x*f-a;m.push(g,-b,0),_.push(0,0,1),p.push(x/o),p.push(1-A/c)}}for(let A=0;A<c;A++)for(let b=0;b<o;b++){const x=b+l*A,g=b+l*(A+1),C=b+1+l*(A+1),w=b+1+l*A;d.push(x,g,w),d.push(g,C,w)}this.setIndex(d),this.setAttribute("position",new pt(m,3)),this.setAttribute("normal",new pt(_,3)),this.setAttribute("uv",new pt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ua(e.width,e.height,e.widthSegments,e.heightSegments)}}var JA=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ZA=`#ifdef USE_ALPHAHASH
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
#endif`,$A=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ep=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,tp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,np=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ip=`#ifdef USE_AOMAP
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
#endif`,sp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ap=`#ifdef USE_BATCHING
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
#endif`,rp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,op=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,cp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,lp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,hp=`#ifdef USE_IRIDESCENCE
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
#endif`,fp=`#ifdef USE_BUMPMAP
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
#endif`,up=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,dp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ap=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,pp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,mp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,gp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,bp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,xp=`#if defined( USE_COLOR_ALPHA )
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
#endif`,_p=`#define PI 3.141592653589793
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
} // validated`,Ep=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,vp=`vec3 transformedNormal = objectNormal;
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
#endif`,Mp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,yp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,wp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Cp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Sp="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ip=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Tp=`#ifdef USE_ENVMAP
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
#endif`,Bp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Rp=`#ifdef USE_ENVMAP
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
#endif`,Dp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Lp=`#ifdef USE_ENVMAP
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
#endif`,Pp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Up=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Fp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Np=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,kp=`#ifdef USE_GRADIENTMAP
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
}`,Qp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Op=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,zp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Gp=`uniform bool receiveShadow;
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
#endif`,Hp=`#ifdef USE_ENVMAP
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
#endif`,Vp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Wp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,jp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,qp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Yp=`PhysicalMaterial material;
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
#endif`,Xp=`struct PhysicalMaterial {
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
}`,Kp=`
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
#endif`,Jp=`#if defined( RE_IndirectDiffuse )
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
#endif`,Zp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,$p=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,em=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,tm=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,nm=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,im=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,sm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,am=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,rm=`#if defined( USE_POINTS_UV )
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
#endif`,om=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,cm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,lm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,hm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,fm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,um=`#ifdef USE_MORPHTARGETS
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
#endif`,dm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Am=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,pm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,mm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,gm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,bm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,xm=`#ifdef USE_NORMALMAP
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
#endif`,_m=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Em=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,vm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Mm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ym=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,wm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Cm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Sm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Im=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Tm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Bm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Rm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Dm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Lm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Pm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Um=`float getShadowMask() {
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
}`,Fm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Nm=`#ifdef USE_SKINNING
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
#endif`,km=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Qm=`#ifdef USE_SKINNING
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
#endif`,Om=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,zm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Gm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Hm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Vm=`#ifdef USE_TRANSMISSION
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
#endif`,Wm=`#ifdef USE_TRANSMISSION
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
#endif`,jm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,qm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ym=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Xm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Km=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Jm=`uniform sampler2D t2D;
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
}`,Zm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$m=`#ifdef ENVMAP_TYPE_CUBE
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
}`,eg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,tg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ng=`#include <common>
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
}`,ig=`#if DEPTH_PACKING == 3200
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
}`,sg=`#define DISTANCE
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
}`,ag=`#define DISTANCE
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
}`,rg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,og=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cg=`uniform float scale;
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
}`,lg=`uniform vec3 diffuse;
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
}`,hg=`#include <common>
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
}`,fg=`uniform vec3 diffuse;
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
}`,ug=`#define LAMBERT
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
}`,dg=`#define LAMBERT
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
}`,Ag=`#define MATCAP
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
}`,pg=`#define MATCAP
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
}`,mg=`#define NORMAL
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
}`,gg=`#define NORMAL
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
}`,bg=`#define PHONG
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
}`,xg=`#define PHONG
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
}`,_g=`#define STANDARD
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
}`,Eg=`#define STANDARD
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
}`,vg=`#define TOON
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
}`,Mg=`#define TOON
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
}`,yg=`uniform float size;
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
}`,wg=`uniform vec3 diffuse;
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
}`,Cg=`#include <common>
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
}`,Sg=`uniform vec3 color;
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
}`,Ig=`uniform float rotation;
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
}`,Tg=`uniform vec3 diffuse;
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
}`,vt={alphahash_fragment:JA,alphahash_pars_fragment:ZA,alphamap_fragment:$A,alphamap_pars_fragment:ep,alphatest_fragment:tp,alphatest_pars_fragment:np,aomap_fragment:ip,aomap_pars_fragment:sp,batching_pars_vertex:ap,batching_vertex:rp,begin_vertex:op,beginnormal_vertex:cp,bsdfs:lp,iridescence_fragment:hp,bumpmap_pars_fragment:fp,clipping_planes_fragment:up,clipping_planes_pars_fragment:dp,clipping_planes_pars_vertex:Ap,clipping_planes_vertex:pp,color_fragment:mp,color_pars_fragment:gp,color_pars_vertex:bp,color_vertex:xp,common:_p,cube_uv_reflection_fragment:Ep,defaultnormal_vertex:vp,displacementmap_pars_vertex:Mp,displacementmap_vertex:yp,emissivemap_fragment:wp,emissivemap_pars_fragment:Cp,colorspace_fragment:Sp,colorspace_pars_fragment:Ip,envmap_fragment:Tp,envmap_common_pars_fragment:Bp,envmap_pars_fragment:Rp,envmap_pars_vertex:Dp,envmap_physical_pars_fragment:Hp,envmap_vertex:Lp,fog_vertex:Pp,fog_pars_vertex:Up,fog_fragment:Fp,fog_pars_fragment:Np,gradientmap_pars_fragment:kp,lightmap_pars_fragment:Qp,lights_lambert_fragment:Op,lights_lambert_pars_fragment:zp,lights_pars_begin:Gp,lights_toon_fragment:Vp,lights_toon_pars_fragment:Wp,lights_phong_fragment:jp,lights_phong_pars_fragment:qp,lights_physical_fragment:Yp,lights_physical_pars_fragment:Xp,lights_fragment_begin:Kp,lights_fragment_maps:Jp,lights_fragment_end:Zp,logdepthbuf_fragment:$p,logdepthbuf_pars_fragment:em,logdepthbuf_pars_vertex:tm,logdepthbuf_vertex:nm,map_fragment:im,map_pars_fragment:sm,map_particle_fragment:am,map_particle_pars_fragment:rm,metalnessmap_fragment:om,metalnessmap_pars_fragment:cm,morphinstance_vertex:lm,morphcolor_vertex:hm,morphnormal_vertex:fm,morphtarget_pars_vertex:um,morphtarget_vertex:dm,normal_fragment_begin:Am,normal_fragment_maps:pm,normal_pars_fragment:mm,normal_pars_vertex:gm,normal_vertex:bm,normalmap_pars_fragment:xm,clearcoat_normal_fragment_begin:_m,clearcoat_normal_fragment_maps:Em,clearcoat_pars_fragment:vm,iridescence_pars_fragment:Mm,opaque_fragment:ym,packing:wm,premultiplied_alpha_fragment:Cm,project_vertex:Sm,dithering_fragment:Im,dithering_pars_fragment:Tm,roughnessmap_fragment:Bm,roughnessmap_pars_fragment:Rm,shadowmap_pars_fragment:Dm,shadowmap_pars_vertex:Lm,shadowmap_vertex:Pm,shadowmask_pars_fragment:Um,skinbase_vertex:Fm,skinning_pars_vertex:Nm,skinning_vertex:km,skinnormal_vertex:Qm,specularmap_fragment:Om,specularmap_pars_fragment:zm,tonemapping_fragment:Gm,tonemapping_pars_fragment:Hm,transmission_fragment:Vm,transmission_pars_fragment:Wm,uv_pars_fragment:jm,uv_pars_vertex:qm,uv_vertex:Ym,worldpos_vertex:Xm,background_vert:Km,background_frag:Jm,backgroundCube_vert:Zm,backgroundCube_frag:$m,cube_vert:eg,cube_frag:tg,depth_vert:ng,depth_frag:ig,distanceRGBA_vert:sg,distanceRGBA_frag:ag,equirect_vert:rg,equirect_frag:og,linedashed_vert:cg,linedashed_frag:lg,meshbasic_vert:hg,meshbasic_frag:fg,meshlambert_vert:ug,meshlambert_frag:dg,meshmatcap_vert:Ag,meshmatcap_frag:pg,meshnormal_vert:mg,meshnormal_frag:gg,meshphong_vert:bg,meshphong_frag:xg,meshphysical_vert:_g,meshphysical_frag:Eg,meshtoon_vert:vg,meshtoon_frag:Mg,points_vert:yg,points_frag:wg,shadow_vert:Cg,shadow_frag:Sg,sprite_vert:Ig,sprite_frag:Tg},Xe={common:{diffuse:{value:new Ne(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new _t},alphaMap:{value:null},alphaMapTransform:{value:new _t},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new _t}},envmap:{envMap:{value:null},envMapRotation:{value:new _t},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new _t}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new _t}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new _t},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new _t},normalScale:{value:new Ye(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new _t},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new _t}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new _t}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new _t}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ne(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ne(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new _t},alphaTest:{value:0},uvTransform:{value:new _t}},sprite:{diffuse:{value:new Ne(16777215)},opacity:{value:1},center:{value:new Ye(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new _t},alphaMap:{value:null},alphaMapTransform:{value:new _t},alphaTest:{value:0}}},gi={basic:{uniforms:Bn([Xe.common,Xe.specularmap,Xe.envmap,Xe.aomap,Xe.lightmap,Xe.fog]),vertexShader:vt.meshbasic_vert,fragmentShader:vt.meshbasic_frag},lambert:{uniforms:Bn([Xe.common,Xe.specularmap,Xe.envmap,Xe.aomap,Xe.lightmap,Xe.emissivemap,Xe.bumpmap,Xe.normalmap,Xe.displacementmap,Xe.fog,Xe.lights,{emissive:{value:new Ne(0)}}]),vertexShader:vt.meshlambert_vert,fragmentShader:vt.meshlambert_frag},phong:{uniforms:Bn([Xe.common,Xe.specularmap,Xe.envmap,Xe.aomap,Xe.lightmap,Xe.emissivemap,Xe.bumpmap,Xe.normalmap,Xe.displacementmap,Xe.fog,Xe.lights,{emissive:{value:new Ne(0)},specular:{value:new Ne(1118481)},shininess:{value:30}}]),vertexShader:vt.meshphong_vert,fragmentShader:vt.meshphong_frag},standard:{uniforms:Bn([Xe.common,Xe.envmap,Xe.aomap,Xe.lightmap,Xe.emissivemap,Xe.bumpmap,Xe.normalmap,Xe.displacementmap,Xe.roughnessmap,Xe.metalnessmap,Xe.fog,Xe.lights,{emissive:{value:new Ne(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:vt.meshphysical_vert,fragmentShader:vt.meshphysical_frag},toon:{uniforms:Bn([Xe.common,Xe.aomap,Xe.lightmap,Xe.emissivemap,Xe.bumpmap,Xe.normalmap,Xe.displacementmap,Xe.gradientmap,Xe.fog,Xe.lights,{emissive:{value:new Ne(0)}}]),vertexShader:vt.meshtoon_vert,fragmentShader:vt.meshtoon_frag},matcap:{uniforms:Bn([Xe.common,Xe.bumpmap,Xe.normalmap,Xe.displacementmap,Xe.fog,{matcap:{value:null}}]),vertexShader:vt.meshmatcap_vert,fragmentShader:vt.meshmatcap_frag},points:{uniforms:Bn([Xe.points,Xe.fog]),vertexShader:vt.points_vert,fragmentShader:vt.points_frag},dashed:{uniforms:Bn([Xe.common,Xe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:vt.linedashed_vert,fragmentShader:vt.linedashed_frag},depth:{uniforms:Bn([Xe.common,Xe.displacementmap]),vertexShader:vt.depth_vert,fragmentShader:vt.depth_frag},normal:{uniforms:Bn([Xe.common,Xe.bumpmap,Xe.normalmap,Xe.displacementmap,{opacity:{value:1}}]),vertexShader:vt.meshnormal_vert,fragmentShader:vt.meshnormal_frag},sprite:{uniforms:Bn([Xe.sprite,Xe.fog]),vertexShader:vt.sprite_vert,fragmentShader:vt.sprite_frag},background:{uniforms:{uvTransform:{value:new _t},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:vt.background_vert,fragmentShader:vt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new _t}},vertexShader:vt.backgroundCube_vert,fragmentShader:vt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:vt.cube_vert,fragmentShader:vt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:vt.equirect_vert,fragmentShader:vt.equirect_frag},distanceRGBA:{uniforms:Bn([Xe.common,Xe.displacementmap,{referencePosition:{value:new ne},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:vt.distanceRGBA_vert,fragmentShader:vt.distanceRGBA_frag},shadow:{uniforms:Bn([Xe.lights,Xe.fog,{color:{value:new Ne(0)},opacity:{value:1}}]),vertexShader:vt.shadow_vert,fragmentShader:vt.shadow_frag}};gi.physical={uniforms:Bn([gi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new _t},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new _t},clearcoatNormalScale:{value:new Ye(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new _t},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new _t},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new _t},sheen:{value:0},sheenColor:{value:new Ne(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new _t},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new _t},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new _t},transmissionSamplerSize:{value:new Ye},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new _t},attenuationDistance:{value:0},attenuationColor:{value:new Ne(0)},specularColor:{value:new Ne(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new _t},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new _t},anisotropyVector:{value:new Ye},anisotropyMap:{value:null},anisotropyMapTransform:{value:new _t}}]),vertexShader:vt.meshphysical_vert,fragmentShader:vt.meshphysical_frag};const Sr={r:0,b:0,g:0},ds=new ai,Bg=new ot;function Rg(i,e,t,n,s,a,r){const o=new Ne(0);let c=a===!0?0:1,l,h,f=null,u=0,d=null;function m(b){let x=b.isScene===!0?b.background:null;return x&&x.isTexture&&(x=(b.backgroundBlurriness>0?t:e).get(x)),x}function _(b){let x=!1;const g=m(b);g===null?A(o,c):g&&g.isColor&&(A(g,1),x=!0);const C=i.xr.getEnvironmentBlendMode();C==="additive"?n.buffers.color.setClear(0,0,0,1,r):C==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,r),(i.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function p(b,x){const g=m(x);g&&(g.isCubeTexture||g.mapping===bo)?(h===void 0&&(h=new dt(new Gt(1,1,1),new an({name:"BackgroundCubeMaterial",uniforms:fa(gi.backgroundCube.uniforms),vertexShader:gi.backgroundCube.vertexShader,fragmentShader:gi.backgroundCube.fragmentShader,side:On,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(C,w,y){this.matrixWorld.copyPosition(y.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),ds.copy(x.backgroundRotation),ds.x*=-1,ds.y*=-1,ds.z*=-1,g.isCubeTexture&&g.isRenderTargetTexture===!1&&(ds.y*=-1,ds.z*=-1),h.material.uniforms.envMap.value=g,h.material.uniforms.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Bg.makeRotationFromEuler(ds)),h.material.toneMapped=Ct.getTransfer(g.colorSpace)!==Ft,(f!==g||u!==g.version||d!==i.toneMapping)&&(h.material.needsUpdate=!0,f=g,u=g.version,d=i.toneMapping),h.layers.enableAll(),b.unshift(h,h.geometry,h.material,0,0,null)):g&&g.isTexture&&(l===void 0&&(l=new dt(new ua(2,2),new an({name:"BackgroundMaterial",uniforms:fa(gi.background.uniforms),vertexShader:gi.background.vertexShader,fragmentShader:gi.background.fragmentShader,side:Ai,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=g,l.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,l.material.toneMapped=Ct.getTransfer(g.colorSpace)!==Ft,g.matrixAutoUpdate===!0&&g.updateMatrix(),l.material.uniforms.uvTransform.value.copy(g.matrix),(f!==g||u!==g.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,f=g,u=g.version,d=i.toneMapping),l.layers.enableAll(),b.unshift(l,l.geometry,l.material,0,0,null))}function A(b,x){b.getRGB(Sr,Mu(i)),n.buffers.color.setClear(Sr.r,Sr.g,Sr.b,x,r)}return{getClearColor:function(){return o},setClearColor:function(b,x=1){o.set(b),c=x,A(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(b){c=b,A(o,c)},render:_,addToRenderList:p}}function Dg(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null);let a=s,r=!1;function o(M,N,T,H,ie){let ge=!1;const ue=f(H,T,N);a!==ue&&(a=ue,l(a.object)),ge=d(M,H,T,ie),ge&&m(M,H,T,ie),ie!==null&&e.update(ie,i.ELEMENT_ARRAY_BUFFER),(ge||r)&&(r=!1,g(M,N,T,H),ie!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(ie).buffer))}function c(){return i.createVertexArray()}function l(M){return i.bindVertexArray(M)}function h(M){return i.deleteVertexArray(M)}function f(M,N,T){const H=T.wireframe===!0;let ie=n[M.id];ie===void 0&&(ie={},n[M.id]=ie);let ge=ie[N.id];ge===void 0&&(ge={},ie[N.id]=ge);let ue=ge[H];return ue===void 0&&(ue=u(c()),ge[H]=ue),ue}function u(M){const N=[],T=[],H=[];for(let ie=0;ie<t;ie++)N[ie]=0,T[ie]=0,H[ie]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:T,attributeDivisors:H,object:M,attributes:{},index:null}}function d(M,N,T,H){const ie=a.attributes,ge=N.attributes;let ue=0;const ae=T.getAttributes();for(const $ in ae)if(ae[$].location>=0){const se=ie[$];let oe=ge[$];if(oe===void 0&&($==="instanceMatrix"&&M.instanceMatrix&&(oe=M.instanceMatrix),$==="instanceColor"&&M.instanceColor&&(oe=M.instanceColor)),se===void 0||se.attribute!==oe||oe&&se.data!==oe.data)return!0;ue++}return a.attributesNum!==ue||a.index!==H}function m(M,N,T,H){const ie={},ge=N.attributes;let ue=0;const ae=T.getAttributes();for(const $ in ae)if(ae[$].location>=0){let se=ge[$];se===void 0&&($==="instanceMatrix"&&M.instanceMatrix&&(se=M.instanceMatrix),$==="instanceColor"&&M.instanceColor&&(se=M.instanceColor));const oe={};oe.attribute=se,se&&se.data&&(oe.data=se.data),ie[$]=oe,ue++}a.attributes=ie,a.attributesNum=ue,a.index=H}function _(){const M=a.newAttributes;for(let N=0,T=M.length;N<T;N++)M[N]=0}function p(M){A(M,0)}function A(M,N){const T=a.newAttributes,H=a.enabledAttributes,ie=a.attributeDivisors;T[M]=1,H[M]===0&&(i.enableVertexAttribArray(M),H[M]=1),ie[M]!==N&&(i.vertexAttribDivisor(M,N),ie[M]=N)}function b(){const M=a.newAttributes,N=a.enabledAttributes;for(let T=0,H=N.length;T<H;T++)N[T]!==M[T]&&(i.disableVertexAttribArray(T),N[T]=0)}function x(M,N,T,H,ie,ge,ue){ue===!0?i.vertexAttribIPointer(M,N,T,ie,ge):i.vertexAttribPointer(M,N,T,H,ie,ge)}function g(M,N,T,H){_();const ie=H.attributes,ge=T.getAttributes(),ue=N.defaultAttributeValues;for(const ae in ge){const $=ge[ae];if($.location>=0){let fe=ie[ae];if(fe===void 0&&(ae==="instanceMatrix"&&M.instanceMatrix&&(fe=M.instanceMatrix),ae==="instanceColor"&&M.instanceColor&&(fe=M.instanceColor)),fe!==void 0){const se=fe.normalized,oe=fe.itemSize,ve=e.get(fe);if(ve===void 0)continue;const me=ve.buffer,j=ve.type,pe=ve.bytesPerElement,xe=j===i.INT||j===i.UNSIGNED_INT||fe.gpuType===Sl;if(fe.isInterleavedBufferAttribute){const Me=fe.data,Ie=Me.stride,Te=fe.offset;if(Me.isInstancedInterleavedBuffer){for(let Qe=0;Qe<$.locationSize;Qe++)A($.location+Qe,Me.meshPerAttribute);M.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=Me.meshPerAttribute*Me.count)}else for(let Qe=0;Qe<$.locationSize;Qe++)p($.location+Qe);i.bindBuffer(i.ARRAY_BUFFER,me);for(let Qe=0;Qe<$.locationSize;Qe++)x($.location+Qe,oe/$.locationSize,j,se,Ie*pe,(Te+oe/$.locationSize*Qe)*pe,xe)}else{if(fe.isInstancedBufferAttribute){for(let Me=0;Me<$.locationSize;Me++)A($.location+Me,fe.meshPerAttribute);M.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let Me=0;Me<$.locationSize;Me++)p($.location+Me);i.bindBuffer(i.ARRAY_BUFFER,me);for(let Me=0;Me<$.locationSize;Me++)x($.location+Me,oe/$.locationSize,j,se,oe*pe,oe/$.locationSize*Me*pe,xe)}}else if(ue!==void 0){const se=ue[ae];if(se!==void 0)switch(se.length){case 2:i.vertexAttrib2fv($.location,se);break;case 3:i.vertexAttrib3fv($.location,se);break;case 4:i.vertexAttrib4fv($.location,se);break;default:i.vertexAttrib1fv($.location,se)}}}}b()}function C(){S();for(const M in n){const N=n[M];for(const T in N){const H=N[T];for(const ie in H)h(H[ie].object),delete H[ie];delete N[T]}delete n[M]}}function w(M){if(n[M.id]===void 0)return;const N=n[M.id];for(const T in N){const H=N[T];for(const ie in H)h(H[ie].object),delete H[ie];delete N[T]}delete n[M.id]}function y(M){for(const N in n){const T=n[N];if(T[M.id]===void 0)continue;const H=T[M.id];for(const ie in H)h(H[ie].object),delete H[ie];delete T[M.id]}}function S(){v(),r=!0,a!==s&&(a=s,l(a.object))}function v(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:S,resetDefaultState:v,dispose:C,releaseStatesOfGeometry:w,releaseStatesOfProgram:y,initAttributes:_,enableAttribute:p,disableUnusedAttributes:b}}function Lg(i,e,t){let n;function s(l){n=l}function a(l,h){i.drawArrays(n,l,h),t.update(h,n,1)}function r(l,h,f){f!==0&&(i.drawArraysInstanced(n,l,h,f),t.update(h,n,f))}function o(l,h,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,f);let d=0;for(let m=0;m<f;m++)d+=h[m];t.update(d,n,1)}function c(l,h,f,u){if(f===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let m=0;m<l.length;m++)r(l[m],h[m],u[m]);else{d.multiDrawArraysInstancedWEBGL(n,l,0,h,0,u,0,f);let m=0;for(let _=0;_<f;_++)m+=h[_]*u[_];t.update(m,n,1)}}this.setMode=s,this.render=a,this.renderInstances=r,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function Pg(i,e,t,n){let s;function a(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const y=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(y.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function r(y){return!(y!==ln&&n.convert(y)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(y){const S=y===bn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(y!==cn&&n.convert(y)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&y!==wn&&!S)}function c(y){if(y==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";y="mediump"}return y==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const f=t.logarithmicDepthBuffer===!0,u=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),A=i.getParameter(i.MAX_VERTEX_ATTRIBS),b=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),x=i.getParameter(i.MAX_VARYING_VECTORS),g=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),C=m>0,w=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:r,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:f,reverseDepthBuffer:u,maxTextures:d,maxVertexTextures:m,maxTextureSize:_,maxCubemapSize:p,maxAttributes:A,maxVertexUniforms:b,maxVaryings:x,maxFragmentUniforms:g,vertexTextures:C,maxSamples:w}}function Ug(i){const e=this;let t=null,n=0,s=!1,a=!1;const r=new Ji,o=new _t,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,u){const d=f.length!==0||u||n!==0||s;return s=u,n=f.length,d},this.beginShadows=function(){a=!0,h(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(f,u){t=h(f,u,0)},this.setState=function(f,u,d){const m=f.clippingPlanes,_=f.clipIntersection,p=f.clipShadows,A=i.get(f);if(!s||m===null||m.length===0||a&&!p)a?h(null):l();else{const b=a?0:n,x=b*4;let g=A.clippingState||null;c.value=g,g=h(m,u,x,d);for(let C=0;C!==x;++C)g[C]=t[C];A.clippingState=g,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=b}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(f,u,d,m){const _=f!==null?f.length:0;let p=null;if(_!==0){if(p=c.value,m!==!0||p===null){const A=d+_*4,b=u.matrixWorldInverse;o.getNormalMatrix(b),(p===null||p.length<A)&&(p=new Float32Array(A));for(let x=0,g=d;x!==_;++x,g+=4)r.copy(f[x]).applyMatrix4(b,o),r.normal.toArray(p,g),p[g+3]=r.constant}c.value=p,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,p}}function Fg(i){let e=new WeakMap;function t(r,o){return o===Gc?r.mapping=vs:o===Hc&&(r.mapping=la),r}function n(r){if(r&&r.isTexture){const o=r.mapping;if(o===Gc||o===Hc)if(e.has(r)){const c=e.get(r).texture;return t(c,r.mapping)}else{const c=r.image;if(c&&c.height>0){const l=new qA(c.height);return l.fromEquirectangularTexture(i,r),e.set(r,l),r.addEventListener("dispose",s),t(l.texture,r.mapping)}else return null}}return r}function s(r){const o=r.target;o.removeEventListener("dispose",s);const c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function a(){e=new WeakMap}return{get:n,dispose:a}}class Eo extends yu{constructor(e=-1,t=1,n=1,s=-1,a=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=a,this.far=r,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,a,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=a,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let a=n-e,r=n+e,o=s+t,c=s-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=l*this.view.offsetX,r=a+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(a,r,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Zs=4,Th=[.125,.215,.35,.446,.526,.582],xs=20,Jo=new Eo,Bh=new Ne;let Zo=null,$o=0,ec=0,tc=!1;const bs=(1+Math.sqrt(5))/2,Ws=1/bs,Rh=[new ne(-bs,Ws,0),new ne(bs,Ws,0),new ne(-Ws,0,bs),new ne(Ws,0,bs),new ne(0,bs,-Ws),new ne(0,bs,Ws),new ne(-1,1,-1),new ne(1,1,-1),new ne(-1,1,1),new ne(1,1,1)];class Dh{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){Zo=this._renderer.getRenderTarget(),$o=this._renderer.getActiveCubeFace(),ec=this._renderer.getActiveMipmapLevel(),tc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(e,n,s,a),t>0&&this._blur(a,0,0,t),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Uh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ph(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Zo,$o,ec),this._renderer.xr.enabled=tc,e.scissorTest=!1,Ir(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===vs||e.mapping===la?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Zo=this._renderer.getRenderTarget(),$o=this._renderer.getActiveCubeFace(),ec=this._renderer.getActiveMipmapLevel(),tc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Dn,minFilter:Dn,generateMipmaps:!1,type:bn,format:ln,colorSpace:Cn,depthBuffer:!1},s=Lh(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Lh(e,t,n);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Ng(a)),this._blurMaterial=kg(a,e,t)}return s}_compileMaterial(e){const t=new dt(this._lodPlanes[0],e);this._renderer.compile(t,Jo)}_sceneToCubeUV(e,t,n,s){const o=new Rn(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,u=h.toneMapping;h.getClearColor(Bh),h.toneMapping=os,h.autoClear=!1;const d=new Xn({name:"PMREM.Background",side:On,depthWrite:!1,depthTest:!1}),m=new dt(new Gt,d);let _=!1;const p=e.background;p?p.isColor&&(d.color.copy(p),e.background=null,_=!0):(d.color.copy(Bh),_=!0);for(let A=0;A<6;A++){const b=A%3;b===0?(o.up.set(0,c[A],0),o.lookAt(l[A],0,0)):b===1?(o.up.set(0,0,c[A]),o.lookAt(0,l[A],0)):(o.up.set(0,c[A],0),o.lookAt(0,0,l[A]));const x=this._cubeSize;Ir(s,b*x,A>2?x:0,x,x),h.setRenderTarget(s),_&&h.render(m,o),h.render(e,o)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=u,h.autoClear=f,e.background=p}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===vs||e.mapping===la;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Uh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ph());const a=s?this._cubemapMaterial:this._equirectMaterial,r=new dt(this._lodPlanes[0],a),o=a.uniforms;o.envMap.value=e;const c=this._cubeSize;Ir(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(r,Jo)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let a=1;a<s;a++){const r=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),o=Rh[(s-a-1)%Rh.length];this._blur(e,a-1,a,r,o)}t.autoClear=n}_blur(e,t,n,s,a){const r=this._pingPongRenderTarget;this._halfBlur(e,r,t,n,s,"latitudinal",a),this._halfBlur(r,e,n,n,s,"longitudinal",a)}_halfBlur(e,t,n,s,a,r,o){const c=this._renderer,l=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,f=new dt(this._lodPlanes[s],l),u=l.uniforms,d=this._sizeLods[n]-1,m=isFinite(a)?Math.PI/(2*d):2*Math.PI/(2*xs-1),_=a/m,p=isFinite(a)?1+Math.floor(h*_):xs;p>xs&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${xs}`);const A=[];let b=0;for(let y=0;y<xs;++y){const S=y/_,v=Math.exp(-S*S/2);A.push(v),y===0?b+=v:y<p&&(b+=2*v)}for(let y=0;y<A.length;y++)A[y]=A[y]/b;u.envMap.value=e.texture,u.samples.value=p,u.weights.value=A,u.latitudinal.value=r==="latitudinal",o&&(u.poleAxis.value=o);const{_lodMax:x}=this;u.dTheta.value=m,u.mipInt.value=x-n;const g=this._sizeLods[s],C=3*g*(s>x-Zs?s-x+Zs:0),w=4*(this._cubeSize-g);Ir(t,C,w,3*g,2*g),c.setRenderTarget(t),c.render(f,Jo)}}function Ng(i){const e=[],t=[],n=[];let s=i;const a=i-Zs+1+Th.length;for(let r=0;r<a;r++){const o=Math.pow(2,s);t.push(o);let c=1/o;r>i-Zs?c=Th[r-i+Zs-1]:r===0&&(c=0),n.push(c);const l=1/(o-2),h=-l,f=1+l,u=[h,h,f,h,f,f,h,h,f,f,h,f],d=6,m=6,_=3,p=2,A=1,b=new Float32Array(_*m*d),x=new Float32Array(p*m*d),g=new Float32Array(A*m*d);for(let w=0;w<d;w++){const y=w%3*2/3-1,S=w>2?0:-1,v=[y,S,0,y+2/3,S,0,y+2/3,S+1,0,y,S,0,y+2/3,S+1,0,y,S+1,0];b.set(v,_*m*w),x.set(u,p*m*w);const M=[w,w,w,w,w,w];g.set(M,A*m*w)}const C=new It;C.setAttribute("position",new Xt(b,_)),C.setAttribute("uv",new Xt(x,p)),C.setAttribute("faceIndex",new Xt(g,A)),e.push(C),s>Zs&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Lh(i,e,t){const n=new Kn(i,e,t);return n.texture.mapping=bo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ir(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function kg(i,e,t){const n=new Float32Array(xs),s=new ne(0,1,0);return new an({name:"SphericalGaussianBlur",defines:{n:xs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Nl(),fragmentShader:`

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
		`,blending:mn,depthTest:!1,depthWrite:!1})}function Ph(){return new an({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Nl(),fragmentShader:`

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
		`,blending:mn,depthTest:!1,depthWrite:!1})}function Uh(){return new an({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Nl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:mn,depthTest:!1,depthWrite:!1})}function Nl(){return`

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
	`}function Qg(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const c=o.mapping,l=c===Gc||c===Hc,h=c===vs||c===la;if(l||h){let f=e.get(o);const u=f!==void 0?f.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==u)return t===null&&(t=new Dh(i)),f=l?t.fromEquirectangular(o,f):t.fromCubemap(o,f),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),f.texture;if(f!==void 0)return f.texture;{const d=o.image;return l&&d&&d.height>0||h&&d&&s(d)?(t===null&&(t=new Dh(i)),f=l?t.fromEquirectangular(o):t.fromCubemap(o),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),o.addEventListener("dispose",a),f.texture):null}}}return o}function s(o){let c=0;const l=6;for(let h=0;h<l;h++)o[h]!==void 0&&c++;return c===l}function a(o){const c=o.target;c.removeEventListener("dispose",a);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function r(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:r}}function Og(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&Ua("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function zg(i,e,t,n){const s={},a=new WeakMap;function r(f){const u=f.target;u.index!==null&&e.remove(u.index);for(const m in u.attributes)e.remove(u.attributes[m]);for(const m in u.morphAttributes){const _=u.morphAttributes[m];for(let p=0,A=_.length;p<A;p++)e.remove(_[p])}u.removeEventListener("dispose",r),delete s[u.id];const d=a.get(u);d&&(e.remove(d),a.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function o(f,u){return s[u.id]===!0||(u.addEventListener("dispose",r),s[u.id]=!0,t.memory.geometries++),u}function c(f){const u=f.attributes;for(const m in u)e.update(u[m],i.ARRAY_BUFFER);const d=f.morphAttributes;for(const m in d){const _=d[m];for(let p=0,A=_.length;p<A;p++)e.update(_[p],i.ARRAY_BUFFER)}}function l(f){const u=[],d=f.index,m=f.attributes.position;let _=0;if(d!==null){const b=d.array;_=d.version;for(let x=0,g=b.length;x<g;x+=3){const C=b[x+0],w=b[x+1],y=b[x+2];u.push(C,w,w,y,y,C)}}else if(m!==void 0){const b=m.array;_=m.version;for(let x=0,g=b.length/3-1;x<g;x+=3){const C=x+0,w=x+1,y=x+2;u.push(C,w,w,y,y,C)}}else return;const p=new(gu(u)?Ul:Pl)(u,1);p.version=_;const A=a.get(f);A&&e.remove(A),a.set(f,p)}function h(f){const u=a.get(f);if(u){const d=f.index;d!==null&&u.version<d.version&&l(f)}else l(f);return a.get(f)}return{get:o,update:c,getWireframeAttribute:h}}function Gg(i,e,t){let n;function s(u){n=u}let a,r;function o(u){a=u.type,r=u.bytesPerElement}function c(u,d){i.drawElements(n,d,a,u*r),t.update(d,n,1)}function l(u,d,m){m!==0&&(i.drawElementsInstanced(n,d,a,u*r,m),t.update(d,n,m))}function h(u,d,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,a,u,0,m);let p=0;for(let A=0;A<m;A++)p+=d[A];t.update(p,n,1)}function f(u,d,m,_){if(m===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let A=0;A<u.length;A++)l(u[A]/r,d[A],_[A]);else{p.multiDrawElementsInstancedWEBGL(n,d,0,a,u,0,_,0,m);let A=0;for(let b=0;b<m;b++)A+=d[b]*_[b];t.update(A,n,1)}}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=f}function Hg(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(a,r,o){switch(t.calls++,r){case i.TRIANGLES:t.triangles+=o*(a/3);break;case i.LINES:t.lines+=o*(a/2);break;case i.LINE_STRIP:t.lines+=o*(a-1);break;case i.LINE_LOOP:t.lines+=o*a;break;case i.POINTS:t.points+=o*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Vg(i,e,t){const n=new WeakMap,s=new Dt;function a(r,o,c){const l=r.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=h!==void 0?h.length:0;let u=n.get(o);if(u===void 0||u.count!==f){let v=function(){y.dispose(),n.delete(o),o.removeEventListener("dispose",v)};u!==void 0&&u.texture.dispose();const d=o.morphAttributes.position!==void 0,m=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],A=o.morphAttributes.normal||[],b=o.morphAttributes.color||[];let x=0;d===!0&&(x=1),m===!0&&(x=2),_===!0&&(x=3);let g=o.attributes.position.count*x,C=1;g>e.maxTextureSize&&(C=Math.ceil(g/e.maxTextureSize),g=e.maxTextureSize);const w=new Float32Array(g*C*4*f),y=new xu(w,g,C,f);y.type=wn,y.needsUpdate=!0;const S=x*4;for(let M=0;M<f;M++){const N=p[M],T=A[M],H=b[M],ie=g*C*4*M;for(let ge=0;ge<N.count;ge++){const ue=ge*S;d===!0&&(s.fromBufferAttribute(N,ge),w[ie+ue+0]=s.x,w[ie+ue+1]=s.y,w[ie+ue+2]=s.z,w[ie+ue+3]=0),m===!0&&(s.fromBufferAttribute(T,ge),w[ie+ue+4]=s.x,w[ie+ue+5]=s.y,w[ie+ue+6]=s.z,w[ie+ue+7]=0),_===!0&&(s.fromBufferAttribute(H,ge),w[ie+ue+8]=s.x,w[ie+ue+9]=s.y,w[ie+ue+10]=s.z,w[ie+ue+11]=H.itemSize===4?s.w:1)}}u={count:f,texture:y,size:new Ye(g,C)},n.set(o,u),o.addEventListener("dispose",v)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",r.morphTexture,t);else{let d=0;for(let _=0;_<l.length;_++)d+=l[_];const m=o.morphTargetsRelative?1:1-d;c.getUniforms().setValue(i,"morphTargetBaseInfluence",m),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",u.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:a}}function Wg(i,e,t,n){let s=new WeakMap;function a(c){const l=n.render.frame,h=c.geometry,f=e.get(c,h);if(s.get(f)!==l&&(e.update(f),s.set(f,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),s.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const u=c.skeleton;s.get(u)!==l&&(u.update(),s.set(u,l))}return f}function r(){s=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:a,dispose:r}}class kl extends tn{constructor(e,t,n,s,a,r,o,c,l,h=na){if(h!==na&&h!==ws)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===na&&(n=Ms),n===void 0&&h===ws&&(n=ys),super(null,s,a,r,o,c,h,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:_n,this.minFilter=c!==void 0?c:_n,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Su=new tn,Fh=new kl(1,1),Iu=new xu,Tu=new _u,Bu=new wu,Nh=[],kh=[],Qh=new Float32Array(16),Oh=new Float32Array(9),zh=new Float32Array(4);function ba(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let a=Nh[s];if(a===void 0&&(a=new Float32Array(s),Nh[s]=a),e!==0){n.toArray(a,0);for(let r=1,o=0;r!==e;++r)o+=t,i[r].toArray(a,o)}return a}function hn(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function fn(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function vo(i,e){let t=kh[e];t===void 0&&(t=new Int32Array(e),kh[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function jg(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function qg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(hn(t,e))return;i.uniform2fv(this.addr,e),fn(t,e)}}function Yg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(hn(t,e))return;i.uniform3fv(this.addr,e),fn(t,e)}}function Xg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(hn(t,e))return;i.uniform4fv(this.addr,e),fn(t,e)}}function Kg(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(hn(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),fn(t,e)}else{if(hn(t,n))return;zh.set(n),i.uniformMatrix2fv(this.addr,!1,zh),fn(t,n)}}function Jg(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(hn(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),fn(t,e)}else{if(hn(t,n))return;Oh.set(n),i.uniformMatrix3fv(this.addr,!1,Oh),fn(t,n)}}function Zg(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(hn(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),fn(t,e)}else{if(hn(t,n))return;Qh.set(n),i.uniformMatrix4fv(this.addr,!1,Qh),fn(t,n)}}function $g(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function e0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(hn(t,e))return;i.uniform2iv(this.addr,e),fn(t,e)}}function t0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(hn(t,e))return;i.uniform3iv(this.addr,e),fn(t,e)}}function n0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(hn(t,e))return;i.uniform4iv(this.addr,e),fn(t,e)}}function i0(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function s0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(hn(t,e))return;i.uniform2uiv(this.addr,e),fn(t,e)}}function a0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(hn(t,e))return;i.uniform3uiv(this.addr,e),fn(t,e)}}function r0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(hn(t,e))return;i.uniform4uiv(this.addr,e),fn(t,e)}}function o0(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let a;this.type===i.SAMPLER_2D_SHADOW?(Fh.compareFunction=mu,a=Fh):a=Su,t.setTexture2D(e||a,s)}function c0(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Tu,s)}function l0(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Bu,s)}function h0(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Iu,s)}function f0(i){switch(i){case 5126:return jg;case 35664:return qg;case 35665:return Yg;case 35666:return Xg;case 35674:return Kg;case 35675:return Jg;case 35676:return Zg;case 5124:case 35670:return $g;case 35667:case 35671:return e0;case 35668:case 35672:return t0;case 35669:case 35673:return n0;case 5125:return i0;case 36294:return s0;case 36295:return a0;case 36296:return r0;case 35678:case 36198:case 36298:case 36306:case 35682:return o0;case 35679:case 36299:case 36307:return c0;case 35680:case 36300:case 36308:case 36293:return l0;case 36289:case 36303:case 36311:case 36292:return h0}}function u0(i,e){i.uniform1fv(this.addr,e)}function d0(i,e){const t=ba(e,this.size,2);i.uniform2fv(this.addr,t)}function A0(i,e){const t=ba(e,this.size,3);i.uniform3fv(this.addr,t)}function p0(i,e){const t=ba(e,this.size,4);i.uniform4fv(this.addr,t)}function m0(i,e){const t=ba(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function g0(i,e){const t=ba(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function b0(i,e){const t=ba(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function x0(i,e){i.uniform1iv(this.addr,e)}function _0(i,e){i.uniform2iv(this.addr,e)}function E0(i,e){i.uniform3iv(this.addr,e)}function v0(i,e){i.uniform4iv(this.addr,e)}function M0(i,e){i.uniform1uiv(this.addr,e)}function y0(i,e){i.uniform2uiv(this.addr,e)}function w0(i,e){i.uniform3uiv(this.addr,e)}function C0(i,e){i.uniform4uiv(this.addr,e)}function S0(i,e,t){const n=this.cache,s=e.length,a=vo(t,s);hn(n,a)||(i.uniform1iv(this.addr,a),fn(n,a));for(let r=0;r!==s;++r)t.setTexture2D(e[r]||Su,a[r])}function I0(i,e,t){const n=this.cache,s=e.length,a=vo(t,s);hn(n,a)||(i.uniform1iv(this.addr,a),fn(n,a));for(let r=0;r!==s;++r)t.setTexture3D(e[r]||Tu,a[r])}function T0(i,e,t){const n=this.cache,s=e.length,a=vo(t,s);hn(n,a)||(i.uniform1iv(this.addr,a),fn(n,a));for(let r=0;r!==s;++r)t.setTextureCube(e[r]||Bu,a[r])}function B0(i,e,t){const n=this.cache,s=e.length,a=vo(t,s);hn(n,a)||(i.uniform1iv(this.addr,a),fn(n,a));for(let r=0;r!==s;++r)t.setTexture2DArray(e[r]||Iu,a[r])}function R0(i){switch(i){case 5126:return u0;case 35664:return d0;case 35665:return A0;case 35666:return p0;case 35674:return m0;case 35675:return g0;case 35676:return b0;case 5124:case 35670:return x0;case 35667:case 35671:return _0;case 35668:case 35672:return E0;case 35669:case 35673:return v0;case 5125:return M0;case 36294:return y0;case 36295:return w0;case 36296:return C0;case 35678:case 36198:case 36298:case 36306:case 35682:return S0;case 35679:case 36299:case 36307:return I0;case 35680:case 36300:case 36308:case 36293:return T0;case 36289:case 36303:case 36311:case 36292:return B0}}class D0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=f0(t.type)}}class L0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=R0(t.type)}}class P0{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let a=0,r=s.length;a!==r;++a){const o=s[a];o.setValue(e,t[o.id],n)}}}const nc=/(\w+)(\])?(\[|\.)?/g;function Gh(i,e){i.seq.push(e),i.map[e.id]=e}function U0(i,e,t){const n=i.name,s=n.length;for(nc.lastIndex=0;;){const a=nc.exec(n),r=nc.lastIndex;let o=a[1];const c=a[2]==="]",l=a[3];if(c&&(o=o|0),l===void 0||l==="["&&r+2===s){Gh(t,l===void 0?new D0(o,i,e):new L0(o,i,e));break}else{let f=t.map[o];f===void 0&&(f=new P0(o),Gh(t,f)),t=f}}}class Jr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const a=e.getActiveUniform(t,s),r=e.getUniformLocation(t,a.name);U0(a,r,this)}}setValue(e,t,n,s){const a=this.map[t];a!==void 0&&a.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let a=0,r=t.length;a!==r;++a){const o=t[a],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,a=e.length;s!==a;++s){const r=e[s];r.id in t&&n.push(r)}return n}}function Hh(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const F0=37297;let N0=0;function k0(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let r=s;r<a;r++){const o=r+1;n.push(`${o===e?">":" "} ${o}: ${t[r]}`)}return n.join(`
`)}const Vh=new _t;function Q0(i){Ct._getMatrix(Vh,Ct.workingColorSpace,i);const e=`mat3( ${Vh.elements.map(t=>t.toFixed(4))} )`;switch(Ct.getTransfer(i)){case _o:return[e,"LinearTransferOETF"];case Ft:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Wh(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const r=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+k0(i.getShaderSource(e),r)}else return s}function O0(i,e){const t=Q0(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function z0(i,e){let t;switch(e){case eu:t="Linear";break;case tu:t="Reinhard";break;case nu:t="Cineon";break;case Cl:t="ACESFilmic";break;case iu:t="AgX";break;case su:t="Neutral";break;case Xd:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Tr=new ne;function G0(){Ct.getLuminanceCoefficients(Tr);const i=Tr.x.toFixed(4),e=Tr.y.toFixed(4),t=Tr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function H0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Fa).join(`
`)}function V0(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function W0(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const a=i.getActiveAttrib(e,s),r=a.name;let o=1;a.type===i.FLOAT_MAT2&&(o=2),a.type===i.FLOAT_MAT3&&(o=3),a.type===i.FLOAT_MAT4&&(o=4),t[r]={type:a.type,location:i.getAttribLocation(e,r),locationSize:o}}return t}function Fa(i){return i!==""}function jh(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function qh(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const j0=/^[ \t]*#include +<([\w\d./]+)>/gm;function hl(i){return i.replace(j0,Y0)}const q0=new Map;function Y0(i,e){let t=vt[e];if(t===void 0){const n=q0.get(e);if(n!==void 0)t=vt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return hl(t)}const X0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Yh(i){return i.replace(X0,K0)}function K0(i,e,t,n){let s="";for(let a=parseInt(e);a<parseInt(t);a++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return s}function Xh(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function J0(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===yl?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Zf?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Ri&&(e="SHADOWMAP_TYPE_VSM"),e}function Z0(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case vs:case la:e="ENVMAP_TYPE_CUBE";break;case bo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function $0(i){let e="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===la&&(e="ENVMAP_MODE_REFRACTION"),e}function eb(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case wl:e="ENVMAP_BLENDING_MULTIPLY";break;case qd:e="ENVMAP_BLENDING_MIX";break;case Yd:e="ENVMAP_BLENDING_ADD";break}return e}function tb(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function nb(i,e,t,n){const s=i.getContext(),a=t.defines;let r=t.vertexShader,o=t.fragmentShader;const c=J0(t),l=Z0(t),h=$0(t),f=eb(t),u=tb(t),d=H0(t),m=V0(a),_=s.createProgram();let p,A,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Fa).join(`
`),p.length>0&&(p+=`
`),A=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Fa).join(`
`),A.length>0&&(A+=`
`)):(p=[Xh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Fa).join(`
`),A=[Xh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+f:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==os?"#define TONE_MAPPING":"",t.toneMapping!==os?vt.tonemapping_pars_fragment:"",t.toneMapping!==os?z0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",vt.colorspace_pars_fragment,O0("linearToOutputTexel",t.outputColorSpace),G0(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Fa).join(`
`)),r=hl(r),r=jh(r,t),r=qh(r,t),o=hl(o),o=jh(o,t),o=qh(o,t),r=Yh(r),o=Yh(o),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,p=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,A=["#define varying in",t.glslVersion===oh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===oh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+A);const x=b+p+r,g=b+A+o,C=Hh(s,s.VERTEX_SHADER,x),w=Hh(s,s.FRAGMENT_SHADER,g);s.attachShader(_,C),s.attachShader(_,w),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function y(N){if(i.debug.checkShaderErrors){const T=s.getProgramInfoLog(_).trim(),H=s.getShaderInfoLog(C).trim(),ie=s.getShaderInfoLog(w).trim();let ge=!0,ue=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(ge=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,C,w);else{const ae=Wh(s,C,"vertex"),$=Wh(s,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+T+`
`+ae+`
`+$)}else T!==""?console.warn("THREE.WebGLProgram: Program Info Log:",T):(H===""||ie==="")&&(ue=!1);ue&&(N.diagnostics={runnable:ge,programLog:T,vertexShader:{log:H,prefix:p},fragmentShader:{log:ie,prefix:A}})}s.deleteShader(C),s.deleteShader(w),S=new Jr(s,_),v=W0(s,_)}let S;this.getUniforms=function(){return S===void 0&&y(this),S};let v;this.getAttributes=function(){return v===void 0&&y(this),v};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(_,F0)),M},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=N0++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=C,this.fragmentShader=w,this}let ib=0;class sb{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),a=this._getShaderStage(n),r=this._getShaderCacheForMaterial(e);return r.has(s)===!1&&(r.add(s),s.usedTimes++),r.has(a)===!1&&(r.add(a),a.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new ab(e),t.set(e,n)),n}}class ab{constructor(e){this.id=ib++,this.code=e,this.usedTimes=0}}function rb(i,e,t,n,s,a,r){const o=new Eu,c=new sb,l=new Set,h=[],f=s.logarithmicDepthBuffer,u=s.vertexTextures;let d=s.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(v){return l.add(v),v===0?"uv":`uv${v}`}function p(v,M,N,T,H){const ie=T.fog,ge=H.geometry,ue=v.isMeshStandardMaterial?T.environment:null,ae=(v.isMeshStandardMaterial?t:e).get(v.envMap||ue),$=ae&&ae.mapping===bo?ae.image.height:null,fe=m[v.type];v.precision!==null&&(d=s.getMaxPrecision(v.precision),d!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",d,"instead."));const se=ge.morphAttributes.position||ge.morphAttributes.normal||ge.morphAttributes.color,oe=se!==void 0?se.length:0;let ve=0;ge.morphAttributes.position!==void 0&&(ve=1),ge.morphAttributes.normal!==void 0&&(ve=2),ge.morphAttributes.color!==void 0&&(ve=3);let me,j,pe,xe;if(fe){const q=gi[fe];me=q.vertexShader,j=q.fragmentShader}else me=v.vertexShader,j=v.fragmentShader,c.update(v),pe=c.getVertexShaderID(v),xe=c.getFragmentShaderID(v);const Me=i.getRenderTarget(),Ie=i.state.buffers.depth.getReversed(),Te=H.isInstancedMesh===!0,Qe=H.isBatchedMesh===!0,je=!!v.map,ze=!!v.matcap,ht=!!ae,be=!!v.aoMap,xt=!!v.lightMap,tt=!!v.bumpMap,$e=!!v.normalMap,Ke=!!v.displacementMap,ft=!!v.emissiveMap,Pe=!!v.metalnessMap,J=!!v.roughnessMap,L=v.anisotropy>0,we=v.clearcoat>0,Re=v.dispersion>0,E=v.iridescence>0,I=v.sheen>0,ce=v.transmission>0,O=L&&!!v.anisotropyMap,Q=we&&!!v.clearcoatMap,K=we&&!!v.clearcoatNormalMap,P=we&&!!v.clearcoatRoughnessMap,z=E&&!!v.iridescenceMap,W=E&&!!v.iridescenceThicknessMap,Y=I&&!!v.sheenColorMap,F=I&&!!v.sheenRoughnessMap,G=!!v.specularMap,te=!!v.specularColorMap,ee=!!v.specularIntensityMap,R=ce&&!!v.transmissionMap,k=ce&&!!v.thicknessMap,B=!!v.gradientMap,X=!!v.alphaMap,V=v.alphaTest>0,le=!!v.alphaHash,Z=!!v.extensions;let re=os;v.toneMapped&&(Me===null||Me.isXRRenderTarget===!0)&&(re=i.toneMapping);const U={shaderID:fe,shaderType:v.type,shaderName:v.name,vertexShader:me,fragmentShader:j,defines:v.defines,customVertexShaderID:pe,customFragmentShaderID:xe,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:d,batching:Qe,batchingColor:Qe&&H._colorsTexture!==null,instancing:Te,instancingColor:Te&&H.instanceColor!==null,instancingMorph:Te&&H.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:Me===null?i.outputColorSpace:Me.isXRRenderTarget===!0?Me.texture.colorSpace:Cn,alphaToCoverage:!!v.alphaToCoverage,map:je,matcap:ze,envMap:ht,envMapMode:ht&&ae.mapping,envMapCubeUVHeight:$,aoMap:be,lightMap:xt,bumpMap:tt,normalMap:$e,displacementMap:u&&Ke,emissiveMap:ft,normalMapObjectSpace:$e&&v.normalMapType===tA,normalMapTangentSpace:$e&&v.normalMapType===xo,metalnessMap:Pe,roughnessMap:J,anisotropy:L,anisotropyMap:O,clearcoat:we,clearcoatMap:Q,clearcoatNormalMap:K,clearcoatRoughnessMap:P,dispersion:Re,iridescence:E,iridescenceMap:z,iridescenceThicknessMap:W,sheen:I,sheenColorMap:Y,sheenRoughnessMap:F,specularMap:G,specularColorMap:te,specularIntensityMap:ee,transmission:ce,transmissionMap:R,thicknessMap:k,gradientMap:B,opaque:v.transparent===!1&&v.blending===ta&&v.alphaToCoverage===!1,alphaMap:X,alphaTest:V,alphaHash:le,combine:v.combine,mapUv:je&&_(v.map.channel),aoMapUv:be&&_(v.aoMap.channel),lightMapUv:xt&&_(v.lightMap.channel),bumpMapUv:tt&&_(v.bumpMap.channel),normalMapUv:$e&&_(v.normalMap.channel),displacementMapUv:Ke&&_(v.displacementMap.channel),emissiveMapUv:ft&&_(v.emissiveMap.channel),metalnessMapUv:Pe&&_(v.metalnessMap.channel),roughnessMapUv:J&&_(v.roughnessMap.channel),anisotropyMapUv:O&&_(v.anisotropyMap.channel),clearcoatMapUv:Q&&_(v.clearcoatMap.channel),clearcoatNormalMapUv:K&&_(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:P&&_(v.clearcoatRoughnessMap.channel),iridescenceMapUv:z&&_(v.iridescenceMap.channel),iridescenceThicknessMapUv:W&&_(v.iridescenceThicknessMap.channel),sheenColorMapUv:Y&&_(v.sheenColorMap.channel),sheenRoughnessMapUv:F&&_(v.sheenRoughnessMap.channel),specularMapUv:G&&_(v.specularMap.channel),specularColorMapUv:te&&_(v.specularColorMap.channel),specularIntensityMapUv:ee&&_(v.specularIntensityMap.channel),transmissionMapUv:R&&_(v.transmissionMap.channel),thicknessMapUv:k&&_(v.thicknessMap.channel),alphaMapUv:X&&_(v.alphaMap.channel),vertexTangents:!!ge.attributes.tangent&&($e||L),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!ge.attributes.color&&ge.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!ge.attributes.uv&&(je||X),fog:!!ie,useFog:v.fog===!0,fogExp2:!!ie&&ie.isFogExp2,flatShading:v.flatShading===!0,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:Ie,skinning:H.isSkinnedMesh===!0,morphTargets:ge.morphAttributes.position!==void 0,morphNormals:ge.morphAttributes.normal!==void 0,morphColors:ge.morphAttributes.color!==void 0,morphTargetsCount:oe,morphTextureStride:ve,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&N.length>0,shadowMapType:i.shadowMap.type,toneMapping:re,decodeVideoTexture:je&&v.map.isVideoTexture===!0&&Ct.getTransfer(v.map.colorSpace)===Ft,decodeVideoTextureEmissive:ft&&v.emissiveMap.isVideoTexture===!0&&Ct.getTransfer(v.emissiveMap.colorSpace)===Ft,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Vt,flipSided:v.side===On,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:Z&&v.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Z&&v.extensions.multiDraw===!0||Qe)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return U.vertexUv1s=l.has(1),U.vertexUv2s=l.has(2),U.vertexUv3s=l.has(3),l.clear(),U}function A(v){const M=[];if(v.shaderID?M.push(v.shaderID):(M.push(v.customVertexShaderID),M.push(v.customFragmentShaderID)),v.defines!==void 0)for(const N in v.defines)M.push(N),M.push(v.defines[N]);return v.isRawShaderMaterial===!1&&(b(M,v),x(M,v),M.push(i.outputColorSpace)),M.push(v.customProgramCacheKey),M.join()}function b(v,M){v.push(M.precision),v.push(M.outputColorSpace),v.push(M.envMapMode),v.push(M.envMapCubeUVHeight),v.push(M.mapUv),v.push(M.alphaMapUv),v.push(M.lightMapUv),v.push(M.aoMapUv),v.push(M.bumpMapUv),v.push(M.normalMapUv),v.push(M.displacementMapUv),v.push(M.emissiveMapUv),v.push(M.metalnessMapUv),v.push(M.roughnessMapUv),v.push(M.anisotropyMapUv),v.push(M.clearcoatMapUv),v.push(M.clearcoatNormalMapUv),v.push(M.clearcoatRoughnessMapUv),v.push(M.iridescenceMapUv),v.push(M.iridescenceThicknessMapUv),v.push(M.sheenColorMapUv),v.push(M.sheenRoughnessMapUv),v.push(M.specularMapUv),v.push(M.specularColorMapUv),v.push(M.specularIntensityMapUv),v.push(M.transmissionMapUv),v.push(M.thicknessMapUv),v.push(M.combine),v.push(M.fogExp2),v.push(M.sizeAttenuation),v.push(M.morphTargetsCount),v.push(M.morphAttributeCount),v.push(M.numDirLights),v.push(M.numPointLights),v.push(M.numSpotLights),v.push(M.numSpotLightMaps),v.push(M.numHemiLights),v.push(M.numRectAreaLights),v.push(M.numDirLightShadows),v.push(M.numPointLightShadows),v.push(M.numSpotLightShadows),v.push(M.numSpotLightShadowsWithMaps),v.push(M.numLightProbes),v.push(M.shadowMapType),v.push(M.toneMapping),v.push(M.numClippingPlanes),v.push(M.numClipIntersection),v.push(M.depthPacking)}function x(v,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),M.dispersion&&o.enable(20),M.batchingColor&&o.enable(21),v.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reverseDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),v.push(o.mask)}function g(v){const M=m[v.type];let N;if(M){const T=gi[M];N=xi.clone(T.uniforms)}else N=v.uniforms;return N}function C(v,M){let N;for(let T=0,H=h.length;T<H;T++){const ie=h[T];if(ie.cacheKey===M){N=ie,++N.usedTimes;break}}return N===void 0&&(N=new nb(i,M,v,a),h.push(N)),N}function w(v){if(--v.usedTimes===0){const M=h.indexOf(v);h[M]=h[h.length-1],h.pop(),v.destroy()}}function y(v){c.remove(v)}function S(){c.dispose()}return{getParameters:p,getProgramCacheKey:A,getUniforms:g,acquireProgram:C,releaseProgram:w,releaseShaderCache:y,programs:h,dispose:S}}function ob(){let i=new WeakMap;function e(r){return i.has(r)}function t(r){let o=i.get(r);return o===void 0&&(o={},i.set(r,o)),o}function n(r){i.delete(r)}function s(r,o,c){i.get(r)[o]=c}function a(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:a}}function cb(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Kh(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Jh(){const i=[];let e=0;const t=[],n=[],s=[];function a(){e=0,t.length=0,n.length=0,s.length=0}function r(f,u,d,m,_,p){let A=i[e];return A===void 0?(A={id:f.id,object:f,geometry:u,material:d,groupOrder:m,renderOrder:f.renderOrder,z:_,group:p},i[e]=A):(A.id=f.id,A.object=f,A.geometry=u,A.material=d,A.groupOrder=m,A.renderOrder=f.renderOrder,A.z=_,A.group=p),e++,A}function o(f,u,d,m,_,p){const A=r(f,u,d,m,_,p);d.transmission>0?n.push(A):d.transparent===!0?s.push(A):t.push(A)}function c(f,u,d,m,_,p){const A=r(f,u,d,m,_,p);d.transmission>0?n.unshift(A):d.transparent===!0?s.unshift(A):t.unshift(A)}function l(f,u){t.length>1&&t.sort(f||cb),n.length>1&&n.sort(u||Kh),s.length>1&&s.sort(u||Kh)}function h(){for(let f=e,u=i.length;f<u;f++){const d=i[f];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:s,init:a,push:o,unshift:c,finish:h,sort:l}}function lb(){let i=new WeakMap;function e(n,s){const a=i.get(n);let r;return a===void 0?(r=new Jh,i.set(n,[r])):s>=a.length?(r=new Jh,a.push(r)):r=a[s],r}function t(){i=new WeakMap}return{get:e,dispose:t}}function hb(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new ne,color:new Ne};break;case"SpotLight":t={position:new ne,direction:new ne,color:new Ne,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new ne,color:new Ne,distance:0,decay:0};break;case"HemisphereLight":t={direction:new ne,skyColor:new Ne,groundColor:new Ne};break;case"RectAreaLight":t={color:new Ne,position:new ne,halfWidth:new ne,halfHeight:new ne};break}return i[e.id]=t,t}}}function fb(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ye};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ye};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ye,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let ub=0;function db(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Ab(i){const e=new hb,t=fb(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new ne);const s=new ne,a=new ot,r=new ot;function o(l){let h=0,f=0,u=0;for(let v=0;v<9;v++)n.probe[v].set(0,0,0);let d=0,m=0,_=0,p=0,A=0,b=0,x=0,g=0,C=0,w=0,y=0;l.sort(db);for(let v=0,M=l.length;v<M;v++){const N=l[v],T=N.color,H=N.intensity,ie=N.distance,ge=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)h+=T.r*H,f+=T.g*H,u+=T.b*H;else if(N.isLightProbe){for(let ue=0;ue<9;ue++)n.probe[ue].addScaledVector(N.sh.coefficients[ue],H);y++}else if(N.isDirectionalLight){const ue=e.get(N);if(ue.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){const ae=N.shadow,$=t.get(N);$.shadowIntensity=ae.intensity,$.shadowBias=ae.bias,$.shadowNormalBias=ae.normalBias,$.shadowRadius=ae.radius,$.shadowMapSize=ae.mapSize,n.directionalShadow[d]=$,n.directionalShadowMap[d]=ge,n.directionalShadowMatrix[d]=N.shadow.matrix,b++}n.directional[d]=ue,d++}else if(N.isSpotLight){const ue=e.get(N);ue.position.setFromMatrixPosition(N.matrixWorld),ue.color.copy(T).multiplyScalar(H),ue.distance=ie,ue.coneCos=Math.cos(N.angle),ue.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),ue.decay=N.decay,n.spot[_]=ue;const ae=N.shadow;if(N.map&&(n.spotLightMap[C]=N.map,C++,ae.updateMatrices(N),N.castShadow&&w++),n.spotLightMatrix[_]=ae.matrix,N.castShadow){const $=t.get(N);$.shadowIntensity=ae.intensity,$.shadowBias=ae.bias,$.shadowNormalBias=ae.normalBias,$.shadowRadius=ae.radius,$.shadowMapSize=ae.mapSize,n.spotShadow[_]=$,n.spotShadowMap[_]=ge,g++}_++}else if(N.isRectAreaLight){const ue=e.get(N);ue.color.copy(T).multiplyScalar(H),ue.halfWidth.set(N.width*.5,0,0),ue.halfHeight.set(0,N.height*.5,0),n.rectArea[p]=ue,p++}else if(N.isPointLight){const ue=e.get(N);if(ue.color.copy(N.color).multiplyScalar(N.intensity),ue.distance=N.distance,ue.decay=N.decay,N.castShadow){const ae=N.shadow,$=t.get(N);$.shadowIntensity=ae.intensity,$.shadowBias=ae.bias,$.shadowNormalBias=ae.normalBias,$.shadowRadius=ae.radius,$.shadowMapSize=ae.mapSize,$.shadowCameraNear=ae.camera.near,$.shadowCameraFar=ae.camera.far,n.pointShadow[m]=$,n.pointShadowMap[m]=ge,n.pointShadowMatrix[m]=N.shadow.matrix,x++}n.point[m]=ue,m++}else if(N.isHemisphereLight){const ue=e.get(N);ue.skyColor.copy(N.color).multiplyScalar(H),ue.groundColor.copy(N.groundColor).multiplyScalar(H),n.hemi[A]=ue,A++}}p>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Xe.LTC_FLOAT_1,n.rectAreaLTC2=Xe.LTC_FLOAT_2):(n.rectAreaLTC1=Xe.LTC_HALF_1,n.rectAreaLTC2=Xe.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=f,n.ambient[2]=u;const S=n.hash;(S.directionalLength!==d||S.pointLength!==m||S.spotLength!==_||S.rectAreaLength!==p||S.hemiLength!==A||S.numDirectionalShadows!==b||S.numPointShadows!==x||S.numSpotShadows!==g||S.numSpotMaps!==C||S.numLightProbes!==y)&&(n.directional.length=d,n.spot.length=_,n.rectArea.length=p,n.point.length=m,n.hemi.length=A,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.pointShadow.length=x,n.pointShadowMap.length=x,n.spotShadow.length=g,n.spotShadowMap.length=g,n.directionalShadowMatrix.length=b,n.pointShadowMatrix.length=x,n.spotLightMatrix.length=g+C-w,n.spotLightMap.length=C,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=y,S.directionalLength=d,S.pointLength=m,S.spotLength=_,S.rectAreaLength=p,S.hemiLength=A,S.numDirectionalShadows=b,S.numPointShadows=x,S.numSpotShadows=g,S.numSpotMaps=C,S.numLightProbes=y,n.version=ub++)}function c(l,h){let f=0,u=0,d=0,m=0,_=0;const p=h.matrixWorldInverse;for(let A=0,b=l.length;A<b;A++){const x=l[A];if(x.isDirectionalLight){const g=n.directional[f];g.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),g.direction.sub(s),g.direction.transformDirection(p),f++}else if(x.isSpotLight){const g=n.spot[d];g.position.setFromMatrixPosition(x.matrixWorld),g.position.applyMatrix4(p),g.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),g.direction.sub(s),g.direction.transformDirection(p),d++}else if(x.isRectAreaLight){const g=n.rectArea[m];g.position.setFromMatrixPosition(x.matrixWorld),g.position.applyMatrix4(p),r.identity(),a.copy(x.matrixWorld),a.premultiply(p),r.extractRotation(a),g.halfWidth.set(x.width*.5,0,0),g.halfHeight.set(0,x.height*.5,0),g.halfWidth.applyMatrix4(r),g.halfHeight.applyMatrix4(r),m++}else if(x.isPointLight){const g=n.point[u];g.position.setFromMatrixPosition(x.matrixWorld),g.position.applyMatrix4(p),u++}else if(x.isHemisphereLight){const g=n.hemi[_];g.direction.setFromMatrixPosition(x.matrixWorld),g.direction.transformDirection(p),_++}}}return{setup:o,setupView:c,state:n}}function Zh(i){const e=new Ab(i),t=[],n=[];function s(h){l.camera=h,t.length=0,n.length=0}function a(h){t.push(h)}function r(h){n.push(h)}function o(){e.setup(t)}function c(h){e.setupView(t,h)}const l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:o,setupLightsView:c,pushLight:a,pushShadow:r}}function pb(i){let e=new WeakMap;function t(s,a=0){const r=e.get(s);let o;return r===void 0?(o=new Zh(i),e.set(s,[o])):a>=r.length?(o=new Zh(i),r.push(o)):o=r[a],o}function n(){e=new WeakMap}return{get:t,dispose:n}}class mb extends si{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=$d,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class gb extends si{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const bb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,xb=`uniform sampler2D shadow_pass;
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
}`;function _b(i,e,t){let n=new Fl;const s=new Ye,a=new Ye,r=new Dt,o=new mb({depthPacking:eA}),c=new gb,l={},h=t.maxTextureSize,f={[Ai]:On,[On]:Ai,[Vt]:Vt},u=new an({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ye},radius:{value:4}},vertexShader:bb,fragmentShader:xb}),d=u.clone();d.defines.HORIZONTAL_PASS=1;const m=new It;m.setAttribute("position",new Xt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new dt(m,u),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=yl;let A=this.type;this.render=function(w,y,S){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||w.length===0)return;const v=i.getRenderTarget(),M=i.getActiveCubeFace(),N=i.getActiveMipmapLevel(),T=i.state;T.setBlending(mn),T.buffers.color.setClear(1,1,1,1),T.buffers.depth.setTest(!0),T.setScissorTest(!1);const H=A!==Ri&&this.type===Ri,ie=A===Ri&&this.type!==Ri;for(let ge=0,ue=w.length;ge<ue;ge++){const ae=w[ge],$=ae.shadow;if($===void 0){console.warn("THREE.WebGLShadowMap:",ae,"has no shadow.");continue}if($.autoUpdate===!1&&$.needsUpdate===!1)continue;s.copy($.mapSize);const fe=$.getFrameExtents();if(s.multiply(fe),a.copy($.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(a.x=Math.floor(h/fe.x),s.x=a.x*fe.x,$.mapSize.x=a.x),s.y>h&&(a.y=Math.floor(h/fe.y),s.y=a.y*fe.y,$.mapSize.y=a.y)),$.map===null||H===!0||ie===!0){const oe=this.type!==Ri?{minFilter:_n,magFilter:_n}:{};$.map!==null&&$.map.dispose(),$.map=new Kn(s.x,s.y,oe),$.map.texture.name=ae.name+".shadowMap",$.camera.updateProjectionMatrix()}i.setRenderTarget($.map),i.clear();const se=$.getViewportCount();for(let oe=0;oe<se;oe++){const ve=$.getViewport(oe);r.set(a.x*ve.x,a.y*ve.y,a.x*ve.z,a.y*ve.w),T.viewport(r),$.updateMatrices(ae,oe),n=$.getFrustum(),g(y,S,$.camera,ae,this.type)}$.isPointLightShadow!==!0&&this.type===Ri&&b($,S),$.needsUpdate=!1}A=this.type,p.needsUpdate=!1,i.setRenderTarget(v,M,N)};function b(w,y){const S=e.update(_);u.defines.VSM_SAMPLES!==w.blurSamples&&(u.defines.VSM_SAMPLES=w.blurSamples,d.defines.VSM_SAMPLES=w.blurSamples,u.needsUpdate=!0,d.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Kn(s.x,s.y)),u.uniforms.shadow_pass.value=w.map.texture,u.uniforms.resolution.value=w.mapSize,u.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(y,null,S,u,_,null),d.uniforms.shadow_pass.value=w.mapPass.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(y,null,S,d,_,null)}function x(w,y,S,v){let M=null;const N=S.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(N!==void 0)M=N;else if(M=S.isPointLight===!0?c:o,i.localClippingEnabled&&y.clipShadows===!0&&Array.isArray(y.clippingPlanes)&&y.clippingPlanes.length!==0||y.displacementMap&&y.displacementScale!==0||y.alphaMap&&y.alphaTest>0||y.map&&y.alphaTest>0){const T=M.uuid,H=y.uuid;let ie=l[T];ie===void 0&&(ie={},l[T]=ie);let ge=ie[H];ge===void 0&&(ge=M.clone(),ie[H]=ge,y.addEventListener("dispose",C)),M=ge}if(M.visible=y.visible,M.wireframe=y.wireframe,v===Ri?M.side=y.shadowSide!==null?y.shadowSide:y.side:M.side=y.shadowSide!==null?y.shadowSide:f[y.side],M.alphaMap=y.alphaMap,M.alphaTest=y.alphaTest,M.map=y.map,M.clipShadows=y.clipShadows,M.clippingPlanes=y.clippingPlanes,M.clipIntersection=y.clipIntersection,M.displacementMap=y.displacementMap,M.displacementScale=y.displacementScale,M.displacementBias=y.displacementBias,M.wireframeLinewidth=y.wireframeLinewidth,M.linewidth=y.linewidth,S.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const T=i.properties.get(M);T.light=S}return M}function g(w,y,S,v,M){if(w.visible===!1)return;if(w.layers.test(y.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&M===Ri)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,w.matrixWorld);const H=e.update(w),ie=w.material;if(Array.isArray(ie)){const ge=H.groups;for(let ue=0,ae=ge.length;ue<ae;ue++){const $=ge[ue],fe=ie[$.materialIndex];if(fe&&fe.visible){const se=x(w,fe,v,M);w.onBeforeShadow(i,w,y,S,H,se,$),i.renderBufferDirect(S,null,H,se,w,$),w.onAfterShadow(i,w,y,S,H,se,$)}}}else if(ie.visible){const ge=x(w,ie,v,M);w.onBeforeShadow(i,w,y,S,H,ge,null),i.renderBufferDirect(S,null,H,ge,w,null),w.onAfterShadow(i,w,y,S,H,ge,null)}}const T=w.children;for(let H=0,ie=T.length;H<ie;H++)g(T[H],y,S,v,M)}function C(w){w.target.removeEventListener("dispose",C);for(const S in l){const v=l[S],M=w.target.uuid;M in v&&(v[M].dispose(),delete v[M])}}}const Eb={[Uc]:Fc,[Nc]:Oc,[kc]:zc,[ca]:Qc,[Fc]:Uc,[Oc]:Nc,[zc]:kc,[Qc]:ca};function vb(i,e){function t(){let R=!1;const k=new Dt;let B=null;const X=new Dt(0,0,0,0);return{setMask:function(V){B!==V&&!R&&(i.colorMask(V,V,V,V),B=V)},setLocked:function(V){R=V},setClear:function(V,le,Z,re,U){U===!0&&(V*=re,le*=re,Z*=re),k.set(V,le,Z,re),X.equals(k)===!1&&(i.clearColor(V,le,Z,re),X.copy(k))},reset:function(){R=!1,B=null,X.set(-1,0,0,0)}}}function n(){let R=!1,k=!1,B=null,X=null,V=null;return{setReversed:function(le){if(k!==le){const Z=e.get("EXT_clip_control");k?Z.clipControlEXT(Z.LOWER_LEFT_EXT,Z.ZERO_TO_ONE_EXT):Z.clipControlEXT(Z.LOWER_LEFT_EXT,Z.NEGATIVE_ONE_TO_ONE_EXT);const re=V;V=null,this.setClear(re)}k=le},getReversed:function(){return k},setTest:function(le){le?Me(i.DEPTH_TEST):Ie(i.DEPTH_TEST)},setMask:function(le){B!==le&&!R&&(i.depthMask(le),B=le)},setFunc:function(le){if(k&&(le=Eb[le]),X!==le){switch(le){case Uc:i.depthFunc(i.NEVER);break;case Fc:i.depthFunc(i.ALWAYS);break;case Nc:i.depthFunc(i.LESS);break;case ca:i.depthFunc(i.LEQUAL);break;case kc:i.depthFunc(i.EQUAL);break;case Qc:i.depthFunc(i.GEQUAL);break;case Oc:i.depthFunc(i.GREATER);break;case zc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}X=le}},setLocked:function(le){R=le},setClear:function(le){V!==le&&(k&&(le=1-le),i.clearDepth(le),V=le)},reset:function(){R=!1,B=null,X=null,V=null,k=!1}}}function s(){let R=!1,k=null,B=null,X=null,V=null,le=null,Z=null,re=null,U=null;return{setTest:function(q){R||(q?Me(i.STENCIL_TEST):Ie(i.STENCIL_TEST))},setMask:function(q){k!==q&&!R&&(i.stencilMask(q),k=q)},setFunc:function(q,he,Ce){(B!==q||X!==he||V!==Ce)&&(i.stencilFunc(q,he,Ce),B=q,X=he,V=Ce)},setOp:function(q,he,Ce){(le!==q||Z!==he||re!==Ce)&&(i.stencilOp(q,he,Ce),le=q,Z=he,re=Ce)},setLocked:function(q){R=q},setClear:function(q){U!==q&&(i.clearStencil(q),U=q)},reset:function(){R=!1,k=null,B=null,X=null,V=null,le=null,Z=null,re=null,U=null}}}const a=new t,r=new n,o=new s,c=new WeakMap,l=new WeakMap;let h={},f={},u=new WeakMap,d=[],m=null,_=!1,p=null,A=null,b=null,x=null,g=null,C=null,w=null,y=new Ne(0,0,0),S=0,v=!1,M=null,N=null,T=null,H=null,ie=null;const ge=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ue=!1,ae=0;const $=i.getParameter(i.VERSION);$.indexOf("WebGL")!==-1?(ae=parseFloat(/^WebGL (\d)/.exec($)[1]),ue=ae>=1):$.indexOf("OpenGL ES")!==-1&&(ae=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),ue=ae>=2);let fe=null,se={};const oe=i.getParameter(i.SCISSOR_BOX),ve=i.getParameter(i.VIEWPORT),me=new Dt().fromArray(oe),j=new Dt().fromArray(ve);function pe(R,k,B,X){const V=new Uint8Array(4),le=i.createTexture();i.bindTexture(R,le),i.texParameteri(R,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(R,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Z=0;Z<B;Z++)R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY?i.texImage3D(k,0,i.RGBA,1,1,X,0,i.RGBA,i.UNSIGNED_BYTE,V):i.texImage2D(k+Z,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,V);return le}const xe={};xe[i.TEXTURE_2D]=pe(i.TEXTURE_2D,i.TEXTURE_2D,1),xe[i.TEXTURE_CUBE_MAP]=pe(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),xe[i.TEXTURE_2D_ARRAY]=pe(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),xe[i.TEXTURE_3D]=pe(i.TEXTURE_3D,i.TEXTURE_3D,1,1),a.setClear(0,0,0,1),r.setClear(1),o.setClear(0),Me(i.DEPTH_TEST),r.setFunc(ca),tt(!1),$e($l),Me(i.CULL_FACE),be(mn);function Me(R){h[R]!==!0&&(i.enable(R),h[R]=!0)}function Ie(R){h[R]!==!1&&(i.disable(R),h[R]=!1)}function Te(R,k){return f[R]!==k?(i.bindFramebuffer(R,k),f[R]=k,R===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=k),R===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=k),!0):!1}function Qe(R,k){let B=d,X=!1;if(R){B=u.get(k),B===void 0&&(B=[],u.set(k,B));const V=R.textures;if(B.length!==V.length||B[0]!==i.COLOR_ATTACHMENT0){for(let le=0,Z=V.length;le<Z;le++)B[le]=i.COLOR_ATTACHMENT0+le;B.length=V.length,X=!0}}else B[0]!==i.BACK&&(B[0]=i.BACK,X=!0);X&&i.drawBuffers(B)}function je(R){return m!==R?(i.useProgram(R),m=R,!0):!1}const ze={[hi]:i.FUNC_ADD,[Ld]:i.FUNC_SUBTRACT,[Pd]:i.FUNC_REVERSE_SUBTRACT};ze[Ud]=i.MIN,ze[Fd]=i.MAX;const ht={[La]:i.ZERO,[Nd]:i.ONE,[kd]:i.SRC_COLOR,[Rc]:i.SRC_ALPHA,[Gd]:i.SRC_ALPHA_SATURATE,[Pc]:i.DST_COLOR,[Lc]:i.DST_ALPHA,[Qd]:i.ONE_MINUS_SRC_COLOR,[Dc]:i.ONE_MINUS_SRC_ALPHA,[zd]:i.ONE_MINUS_DST_COLOR,[Od]:i.ONE_MINUS_DST_ALPHA,[Hd]:i.CONSTANT_COLOR,[Vd]:i.ONE_MINUS_CONSTANT_COLOR,[Wd]:i.CONSTANT_ALPHA,[jd]:i.ONE_MINUS_CONSTANT_ALPHA};function be(R,k,B,X,V,le,Z,re,U,q){if(R===mn){_===!0&&(Ie(i.BLEND),_=!1);return}if(_===!1&&(Me(i.BLEND),_=!0),R!==$f){if(R!==p||q!==v){if((A!==hi||g!==hi)&&(i.blendEquation(i.FUNC_ADD),A=hi,g=hi),q)switch(R){case ta:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Bc:i.blendFunc(i.ONE,i.ONE);break;case eh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case th:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}else switch(R){case ta:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Bc:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case eh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case th:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}b=null,x=null,C=null,w=null,y.set(0,0,0),S=0,p=R,v=q}return}V=V||k,le=le||B,Z=Z||X,(k!==A||V!==g)&&(i.blendEquationSeparate(ze[k],ze[V]),A=k,g=V),(B!==b||X!==x||le!==C||Z!==w)&&(i.blendFuncSeparate(ht[B],ht[X],ht[le],ht[Z]),b=B,x=X,C=le,w=Z),(re.equals(y)===!1||U!==S)&&(i.blendColor(re.r,re.g,re.b,U),y.copy(re),S=U),p=R,v=!1}function xt(R,k){R.side===Vt?Ie(i.CULL_FACE):Me(i.CULL_FACE);let B=R.side===On;k&&(B=!B),tt(B),R.blending===ta&&R.transparent===!1?be(mn):be(R.blending,R.blendEquation,R.blendSrc,R.blendDst,R.blendEquationAlpha,R.blendSrcAlpha,R.blendDstAlpha,R.blendColor,R.blendAlpha,R.premultipliedAlpha),r.setFunc(R.depthFunc),r.setTest(R.depthTest),r.setMask(R.depthWrite),a.setMask(R.colorWrite);const X=R.stencilWrite;o.setTest(X),X&&(o.setMask(R.stencilWriteMask),o.setFunc(R.stencilFunc,R.stencilRef,R.stencilFuncMask),o.setOp(R.stencilFail,R.stencilZFail,R.stencilZPass)),ft(R.polygonOffset,R.polygonOffsetFactor,R.polygonOffsetUnits),R.alphaToCoverage===!0?Me(i.SAMPLE_ALPHA_TO_COVERAGE):Ie(i.SAMPLE_ALPHA_TO_COVERAGE)}function tt(R){M!==R&&(R?i.frontFace(i.CW):i.frontFace(i.CCW),M=R)}function $e(R){R!==Rd?(Me(i.CULL_FACE),R!==N&&(R===$l?i.cullFace(i.BACK):R===Dd?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ie(i.CULL_FACE),N=R}function Ke(R){R!==T&&(ue&&i.lineWidth(R),T=R)}function ft(R,k,B){R?(Me(i.POLYGON_OFFSET_FILL),(H!==k||ie!==B)&&(i.polygonOffset(k,B),H=k,ie=B)):Ie(i.POLYGON_OFFSET_FILL)}function Pe(R){R?Me(i.SCISSOR_TEST):Ie(i.SCISSOR_TEST)}function J(R){R===void 0&&(R=i.TEXTURE0+ge-1),fe!==R&&(i.activeTexture(R),fe=R)}function L(R,k,B){B===void 0&&(fe===null?B=i.TEXTURE0+ge-1:B=fe);let X=se[B];X===void 0&&(X={type:void 0,texture:void 0},se[B]=X),(X.type!==R||X.texture!==k)&&(fe!==B&&(i.activeTexture(B),fe=B),i.bindTexture(R,k||xe[R]),X.type=R,X.texture=k)}function we(){const R=se[fe];R!==void 0&&R.type!==void 0&&(i.bindTexture(R.type,null),R.type=void 0,R.texture=void 0)}function Re(){try{i.compressedTexImage2D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function E(){try{i.compressedTexImage3D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function I(){try{i.texSubImage2D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ce(){try{i.texSubImage3D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function O(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Q(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function K(){try{i.texStorage2D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function P(){try{i.texStorage3D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function z(){try{i.texImage2D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function W(){try{i.texImage3D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Y(R){me.equals(R)===!1&&(i.scissor(R.x,R.y,R.z,R.w),me.copy(R))}function F(R){j.equals(R)===!1&&(i.viewport(R.x,R.y,R.z,R.w),j.copy(R))}function G(R,k){let B=l.get(k);B===void 0&&(B=new WeakMap,l.set(k,B));let X=B.get(R);X===void 0&&(X=i.getUniformBlockIndex(k,R.name),B.set(R,X))}function te(R,k){const X=l.get(k).get(R);c.get(k)!==X&&(i.uniformBlockBinding(k,X,R.__bindingPointIndex),c.set(k,X))}function ee(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),r.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},fe=null,se={},f={},u=new WeakMap,d=[],m=null,_=!1,p=null,A=null,b=null,x=null,g=null,C=null,w=null,y=new Ne(0,0,0),S=0,v=!1,M=null,N=null,T=null,H=null,ie=null,me.set(0,0,i.canvas.width,i.canvas.height),j.set(0,0,i.canvas.width,i.canvas.height),a.reset(),r.reset(),o.reset()}return{buffers:{color:a,depth:r,stencil:o},enable:Me,disable:Ie,bindFramebuffer:Te,drawBuffers:Qe,useProgram:je,setBlending:be,setMaterial:xt,setFlipSided:tt,setCullFace:$e,setLineWidth:Ke,setPolygonOffset:ft,setScissorTest:Pe,activeTexture:J,bindTexture:L,unbindTexture:we,compressedTexImage2D:Re,compressedTexImage3D:E,texImage2D:z,texImage3D:W,updateUBOMapping:G,uniformBlockBinding:te,texStorage2D:K,texStorage3D:P,texSubImage2D:I,texSubImage3D:ce,compressedTexSubImage2D:O,compressedTexSubImage3D:Q,scissor:Y,viewport:F,reset:ee}}function $h(i,e,t,n){const s=Mb(n);switch(t){case hu:return i*e;case uu:return i*e;case du:return i*e*2;case ns:return i*e/s.components*s.byteLength;case Bl:return i*e/s.components*s.byteLength;case _s:return i*e*2/s.components*s.byteLength;case Rl:return i*e*2/s.components*s.byteLength;case fu:return i*e*3/s.components*s.byteLength;case ln:return i*e*4/s.components*s.byteLength;case Dl:return i*e*4/s.components*s.byteLength;case Xr:case Qa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Kr:case Oa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Vc:case Wc:return Math.max(i,16)*Math.max(e,8)/4;case ao:case ro:return Math.max(i,8)*Math.max(e,8)/2;case oo:case co:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case lo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ja:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case jc:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case qc:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Yc:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Za:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Xc:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Kc:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Jc:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Zc:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case $c:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case el:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case tl:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case nl:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case il:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case za:case sl:case ho:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Au:case al:return Math.ceil(i/4)*Math.ceil(e/4)*8;case rl:case ol:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Mb(i){switch(i){case cn:case ou:return{byteLength:1,components:1};case Ka:case cu:case bn:return{byteLength:2,components:1};case Il:case Tl:return{byteLength:2,components:4};case Ms:case Sl:case wn:return{byteLength:4,components:1};case lu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function yb(i,e,t,n,s,a,r){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Ye,h=new WeakMap;let f;const u=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(J,L){return d?new OffscreenCanvas(J,L):tr("canvas")}function _(J,L,we){let Re=1;const E=Pe(J);if((E.width>we||E.height>we)&&(Re=we/Math.max(E.width,E.height)),Re<1)if(typeof HTMLImageElement<"u"&&J instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&J instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&J instanceof ImageBitmap||typeof VideoFrame<"u"&&J instanceof VideoFrame){const I=Math.floor(Re*E.width),ce=Math.floor(Re*E.height);f===void 0&&(f=m(I,ce));const O=L?m(I,ce):f;return O.width=I,O.height=ce,O.getContext("2d").drawImage(J,0,0,I,ce),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+E.width+"x"+E.height+") to ("+I+"x"+ce+")."),O}else return"data"in J&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+E.width+"x"+E.height+")."),J;return J}function p(J){return J.generateMipmaps}function A(J){i.generateMipmap(J)}function b(J){return J.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:J.isWebGL3DRenderTarget?i.TEXTURE_3D:J.isWebGLArrayRenderTarget||J.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function x(J,L,we,Re,E=!1){if(J!==null){if(i[J]!==void 0)return i[J];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+J+"'")}let I=L;if(L===i.RED&&(we===i.FLOAT&&(I=i.R32F),we===i.HALF_FLOAT&&(I=i.R16F),we===i.UNSIGNED_BYTE&&(I=i.R8)),L===i.RED_INTEGER&&(we===i.UNSIGNED_BYTE&&(I=i.R8UI),we===i.UNSIGNED_SHORT&&(I=i.R16UI),we===i.UNSIGNED_INT&&(I=i.R32UI),we===i.BYTE&&(I=i.R8I),we===i.SHORT&&(I=i.R16I),we===i.INT&&(I=i.R32I)),L===i.RG&&(we===i.FLOAT&&(I=i.RG32F),we===i.HALF_FLOAT&&(I=i.RG16F),we===i.UNSIGNED_BYTE&&(I=i.RG8)),L===i.RG_INTEGER&&(we===i.UNSIGNED_BYTE&&(I=i.RG8UI),we===i.UNSIGNED_SHORT&&(I=i.RG16UI),we===i.UNSIGNED_INT&&(I=i.RG32UI),we===i.BYTE&&(I=i.RG8I),we===i.SHORT&&(I=i.RG16I),we===i.INT&&(I=i.RG32I)),L===i.RGB_INTEGER&&(we===i.UNSIGNED_BYTE&&(I=i.RGB8UI),we===i.UNSIGNED_SHORT&&(I=i.RGB16UI),we===i.UNSIGNED_INT&&(I=i.RGB32UI),we===i.BYTE&&(I=i.RGB8I),we===i.SHORT&&(I=i.RGB16I),we===i.INT&&(I=i.RGB32I)),L===i.RGBA_INTEGER&&(we===i.UNSIGNED_BYTE&&(I=i.RGBA8UI),we===i.UNSIGNED_SHORT&&(I=i.RGBA16UI),we===i.UNSIGNED_INT&&(I=i.RGBA32UI),we===i.BYTE&&(I=i.RGBA8I),we===i.SHORT&&(I=i.RGBA16I),we===i.INT&&(I=i.RGBA32I)),L===i.RGB&&we===i.UNSIGNED_INT_5_9_9_9_REV&&(I=i.RGB9_E5),L===i.RGBA){const ce=E?_o:Ct.getTransfer(Re);we===i.FLOAT&&(I=i.RGBA32F),we===i.HALF_FLOAT&&(I=i.RGBA16F),we===i.UNSIGNED_BYTE&&(I=ce===Ft?i.SRGB8_ALPHA8:i.RGBA8),we===i.UNSIGNED_SHORT_4_4_4_4&&(I=i.RGBA4),we===i.UNSIGNED_SHORT_5_5_5_1&&(I=i.RGB5_A1)}return(I===i.R16F||I===i.R32F||I===i.RG16F||I===i.RG32F||I===i.RGBA16F||I===i.RGBA32F)&&e.get("EXT_color_buffer_float"),I}function g(J,L){let we;return J?L===null||L===Ms||L===ys?we=i.DEPTH24_STENCIL8:L===wn?we=i.DEPTH32F_STENCIL8:L===Ka&&(we=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):L===null||L===Ms||L===ys?we=i.DEPTH_COMPONENT24:L===wn?we=i.DEPTH_COMPONENT32F:L===Ka&&(we=i.DEPTH_COMPONENT16),we}function C(J,L){return p(J)===!0||J.isFramebufferTexture&&J.minFilter!==_n&&J.minFilter!==Dn?Math.log2(Math.max(L.width,L.height))+1:J.mipmaps!==void 0&&J.mipmaps.length>0?J.mipmaps.length:J.isCompressedTexture&&Array.isArray(J.image)?L.mipmaps.length:1}function w(J){const L=J.target;L.removeEventListener("dispose",w),S(L),L.isVideoTexture&&h.delete(L)}function y(J){const L=J.target;L.removeEventListener("dispose",y),M(L)}function S(J){const L=n.get(J);if(L.__webglInit===void 0)return;const we=J.source,Re=u.get(we);if(Re){const E=Re[L.__cacheKey];E.usedTimes--,E.usedTimes===0&&v(J),Object.keys(Re).length===0&&u.delete(we)}n.remove(J)}function v(J){const L=n.get(J);i.deleteTexture(L.__webglTexture);const we=J.source,Re=u.get(we);delete Re[L.__cacheKey],r.memory.textures--}function M(J){const L=n.get(J);if(J.depthTexture&&(J.depthTexture.dispose(),n.remove(J.depthTexture)),J.isWebGLCubeRenderTarget)for(let Re=0;Re<6;Re++){if(Array.isArray(L.__webglFramebuffer[Re]))for(let E=0;E<L.__webglFramebuffer[Re].length;E++)i.deleteFramebuffer(L.__webglFramebuffer[Re][E]);else i.deleteFramebuffer(L.__webglFramebuffer[Re]);L.__webglDepthbuffer&&i.deleteRenderbuffer(L.__webglDepthbuffer[Re])}else{if(Array.isArray(L.__webglFramebuffer))for(let Re=0;Re<L.__webglFramebuffer.length;Re++)i.deleteFramebuffer(L.__webglFramebuffer[Re]);else i.deleteFramebuffer(L.__webglFramebuffer);if(L.__webglDepthbuffer&&i.deleteRenderbuffer(L.__webglDepthbuffer),L.__webglMultisampledFramebuffer&&i.deleteFramebuffer(L.__webglMultisampledFramebuffer),L.__webglColorRenderbuffer)for(let Re=0;Re<L.__webglColorRenderbuffer.length;Re++)L.__webglColorRenderbuffer[Re]&&i.deleteRenderbuffer(L.__webglColorRenderbuffer[Re]);L.__webglDepthRenderbuffer&&i.deleteRenderbuffer(L.__webglDepthRenderbuffer)}const we=J.textures;for(let Re=0,E=we.length;Re<E;Re++){const I=n.get(we[Re]);I.__webglTexture&&(i.deleteTexture(I.__webglTexture),r.memory.textures--),n.remove(we[Re])}n.remove(J)}let N=0;function T(){N=0}function H(){const J=N;return J>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+J+" texture units while this GPU supports only "+s.maxTextures),N+=1,J}function ie(J){const L=[];return L.push(J.wrapS),L.push(J.wrapT),L.push(J.wrapR||0),L.push(J.magFilter),L.push(J.minFilter),L.push(J.anisotropy),L.push(J.internalFormat),L.push(J.format),L.push(J.type),L.push(J.generateMipmaps),L.push(J.premultiplyAlpha),L.push(J.flipY),L.push(J.unpackAlignment),L.push(J.colorSpace),L.join()}function ge(J,L){const we=n.get(J);if(J.isVideoTexture&&Ke(J),J.isRenderTargetTexture===!1&&J.version>0&&we.__version!==J.version){const Re=J.image;if(Re===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Re.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{j(we,J,L);return}}t.bindTexture(i.TEXTURE_2D,we.__webglTexture,i.TEXTURE0+L)}function ue(J,L){const we=n.get(J);if(J.version>0&&we.__version!==J.version){j(we,J,L);return}t.bindTexture(i.TEXTURE_2D_ARRAY,we.__webglTexture,i.TEXTURE0+L)}function ae(J,L){const we=n.get(J);if(J.version>0&&we.__version!==J.version){j(we,J,L);return}t.bindTexture(i.TEXTURE_3D,we.__webglTexture,i.TEXTURE0+L)}function $(J,L){const we=n.get(J);if(J.version>0&&we.__version!==J.version){pe(we,J,L);return}t.bindTexture(i.TEXTURE_CUBE_MAP,we.__webglTexture,i.TEXTURE0+L)}const fe={[Jn]:i.REPEAT,[Ui]:i.CLAMP_TO_EDGE,[so]:i.MIRRORED_REPEAT},se={[_n]:i.NEAREST,[ru]:i.NEAREST_MIPMAP_NEAREST,[Pa]:i.NEAREST_MIPMAP_LINEAR,[Dn]:i.LINEAR,[Yr]:i.LINEAR_MIPMAP_NEAREST,[_i]:i.LINEAR_MIPMAP_LINEAR},oe={[nA]:i.NEVER,[cA]:i.ALWAYS,[iA]:i.LESS,[mu]:i.LEQUAL,[sA]:i.EQUAL,[oA]:i.GEQUAL,[aA]:i.GREATER,[rA]:i.NOTEQUAL};function ve(J,L){if(L.type===wn&&e.has("OES_texture_float_linear")===!1&&(L.magFilter===Dn||L.magFilter===Yr||L.magFilter===Pa||L.magFilter===_i||L.minFilter===Dn||L.minFilter===Yr||L.minFilter===Pa||L.minFilter===_i)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(J,i.TEXTURE_WRAP_S,fe[L.wrapS]),i.texParameteri(J,i.TEXTURE_WRAP_T,fe[L.wrapT]),(J===i.TEXTURE_3D||J===i.TEXTURE_2D_ARRAY)&&i.texParameteri(J,i.TEXTURE_WRAP_R,fe[L.wrapR]),i.texParameteri(J,i.TEXTURE_MAG_FILTER,se[L.magFilter]),i.texParameteri(J,i.TEXTURE_MIN_FILTER,se[L.minFilter]),L.compareFunction&&(i.texParameteri(J,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(J,i.TEXTURE_COMPARE_FUNC,oe[L.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(L.magFilter===_n||L.minFilter!==Pa&&L.minFilter!==_i||L.type===wn&&e.has("OES_texture_float_linear")===!1)return;if(L.anisotropy>1||n.get(L).__currentAnisotropy){const we=e.get("EXT_texture_filter_anisotropic");i.texParameterf(J,we.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(L.anisotropy,s.getMaxAnisotropy())),n.get(L).__currentAnisotropy=L.anisotropy}}}function me(J,L){let we=!1;J.__webglInit===void 0&&(J.__webglInit=!0,L.addEventListener("dispose",w));const Re=L.source;let E=u.get(Re);E===void 0&&(E={},u.set(Re,E));const I=ie(L);if(I!==J.__cacheKey){E[I]===void 0&&(E[I]={texture:i.createTexture(),usedTimes:0},r.memory.textures++,we=!0),E[I].usedTimes++;const ce=E[J.__cacheKey];ce!==void 0&&(E[J.__cacheKey].usedTimes--,ce.usedTimes===0&&v(L)),J.__cacheKey=I,J.__webglTexture=E[I].texture}return we}function j(J,L,we){let Re=i.TEXTURE_2D;(L.isDataArrayTexture||L.isCompressedArrayTexture)&&(Re=i.TEXTURE_2D_ARRAY),L.isData3DTexture&&(Re=i.TEXTURE_3D);const E=me(J,L),I=L.source;t.bindTexture(Re,J.__webglTexture,i.TEXTURE0+we);const ce=n.get(I);if(I.version!==ce.__version||E===!0){t.activeTexture(i.TEXTURE0+we);const O=Ct.getPrimaries(Ct.workingColorSpace),Q=L.colorSpace===bi?null:Ct.getPrimaries(L.colorSpace),K=L.colorSpace===bi||O===Q?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,L.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,L.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,K);let P=_(L.image,!1,s.maxTextureSize);P=ft(L,P);const z=a.convert(L.format,L.colorSpace),W=a.convert(L.type);let Y=x(L.internalFormat,z,W,L.colorSpace,L.isVideoTexture);ve(Re,L);let F;const G=L.mipmaps,te=L.isVideoTexture!==!0,ee=ce.__version===void 0||E===!0,R=I.dataReady,k=C(L,P);if(L.isDepthTexture)Y=g(L.format===ws,L.type),ee&&(te?t.texStorage2D(i.TEXTURE_2D,1,Y,P.width,P.height):t.texImage2D(i.TEXTURE_2D,0,Y,P.width,P.height,0,z,W,null));else if(L.isDataTexture)if(G.length>0){te&&ee&&t.texStorage2D(i.TEXTURE_2D,k,Y,G[0].width,G[0].height);for(let B=0,X=G.length;B<X;B++)F=G[B],te?R&&t.texSubImage2D(i.TEXTURE_2D,B,0,0,F.width,F.height,z,W,F.data):t.texImage2D(i.TEXTURE_2D,B,Y,F.width,F.height,0,z,W,F.data);L.generateMipmaps=!1}else te?(ee&&t.texStorage2D(i.TEXTURE_2D,k,Y,P.width,P.height),R&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,P.width,P.height,z,W,P.data)):t.texImage2D(i.TEXTURE_2D,0,Y,P.width,P.height,0,z,W,P.data);else if(L.isCompressedTexture)if(L.isCompressedArrayTexture){te&&ee&&t.texStorage3D(i.TEXTURE_2D_ARRAY,k,Y,G[0].width,G[0].height,P.depth);for(let B=0,X=G.length;B<X;B++)if(F=G[B],L.format!==ln)if(z!==null)if(te){if(R)if(L.layerUpdates.size>0){const V=$h(F.width,F.height,L.format,L.type);for(const le of L.layerUpdates){const Z=F.data.subarray(le*V/F.data.BYTES_PER_ELEMENT,(le+1)*V/F.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,B,0,0,le,F.width,F.height,1,z,Z)}L.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,B,0,0,0,F.width,F.height,P.depth,z,F.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,B,Y,F.width,F.height,P.depth,0,F.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else te?R&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,B,0,0,0,F.width,F.height,P.depth,z,W,F.data):t.texImage3D(i.TEXTURE_2D_ARRAY,B,Y,F.width,F.height,P.depth,0,z,W,F.data)}else{te&&ee&&t.texStorage2D(i.TEXTURE_2D,k,Y,G[0].width,G[0].height);for(let B=0,X=G.length;B<X;B++)F=G[B],L.format!==ln?z!==null?te?R&&t.compressedTexSubImage2D(i.TEXTURE_2D,B,0,0,F.width,F.height,z,F.data):t.compressedTexImage2D(i.TEXTURE_2D,B,Y,F.width,F.height,0,F.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):te?R&&t.texSubImage2D(i.TEXTURE_2D,B,0,0,F.width,F.height,z,W,F.data):t.texImage2D(i.TEXTURE_2D,B,Y,F.width,F.height,0,z,W,F.data)}else if(L.isDataArrayTexture)if(te){if(ee&&t.texStorage3D(i.TEXTURE_2D_ARRAY,k,Y,P.width,P.height,P.depth),R)if(L.layerUpdates.size>0){const B=$h(P.width,P.height,L.format,L.type);for(const X of L.layerUpdates){const V=P.data.subarray(X*B/P.data.BYTES_PER_ELEMENT,(X+1)*B/P.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,X,P.width,P.height,1,z,W,V)}L.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,P.width,P.height,P.depth,z,W,P.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Y,P.width,P.height,P.depth,0,z,W,P.data);else if(L.isData3DTexture)te?(ee&&t.texStorage3D(i.TEXTURE_3D,k,Y,P.width,P.height,P.depth),R&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,P.width,P.height,P.depth,z,W,P.data)):t.texImage3D(i.TEXTURE_3D,0,Y,P.width,P.height,P.depth,0,z,W,P.data);else if(L.isFramebufferTexture){if(ee)if(te)t.texStorage2D(i.TEXTURE_2D,k,Y,P.width,P.height);else{let B=P.width,X=P.height;for(let V=0;V<k;V++)t.texImage2D(i.TEXTURE_2D,V,Y,B,X,0,z,W,null),B>>=1,X>>=1}}else if(G.length>0){if(te&&ee){const B=Pe(G[0]);t.texStorage2D(i.TEXTURE_2D,k,Y,B.width,B.height)}for(let B=0,X=G.length;B<X;B++)F=G[B],te?R&&t.texSubImage2D(i.TEXTURE_2D,B,0,0,z,W,F):t.texImage2D(i.TEXTURE_2D,B,Y,z,W,F);L.generateMipmaps=!1}else if(te){if(ee){const B=Pe(P);t.texStorage2D(i.TEXTURE_2D,k,Y,B.width,B.height)}R&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,z,W,P)}else t.texImage2D(i.TEXTURE_2D,0,Y,z,W,P);p(L)&&A(Re),ce.__version=I.version,L.onUpdate&&L.onUpdate(L)}J.__version=L.version}function pe(J,L,we){if(L.image.length!==6)return;const Re=me(J,L),E=L.source;t.bindTexture(i.TEXTURE_CUBE_MAP,J.__webglTexture,i.TEXTURE0+we);const I=n.get(E);if(E.version!==I.__version||Re===!0){t.activeTexture(i.TEXTURE0+we);const ce=Ct.getPrimaries(Ct.workingColorSpace),O=L.colorSpace===bi?null:Ct.getPrimaries(L.colorSpace),Q=L.colorSpace===bi||ce===O?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,L.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,L.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Q);const K=L.isCompressedTexture||L.image[0].isCompressedTexture,P=L.image[0]&&L.image[0].isDataTexture,z=[];for(let X=0;X<6;X++)!K&&!P?z[X]=_(L.image[X],!0,s.maxCubemapSize):z[X]=P?L.image[X].image:L.image[X],z[X]=ft(L,z[X]);const W=z[0],Y=a.convert(L.format,L.colorSpace),F=a.convert(L.type),G=x(L.internalFormat,Y,F,L.colorSpace),te=L.isVideoTexture!==!0,ee=I.__version===void 0||Re===!0,R=E.dataReady;let k=C(L,W);ve(i.TEXTURE_CUBE_MAP,L);let B;if(K){te&&ee&&t.texStorage2D(i.TEXTURE_CUBE_MAP,k,G,W.width,W.height);for(let X=0;X<6;X++){B=z[X].mipmaps;for(let V=0;V<B.length;V++){const le=B[V];L.format!==ln?Y!==null?te?R&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,V,0,0,le.width,le.height,Y,le.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,V,G,le.width,le.height,0,le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):te?R&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,V,0,0,le.width,le.height,Y,F,le.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,V,G,le.width,le.height,0,Y,F,le.data)}}}else{if(B=L.mipmaps,te&&ee){B.length>0&&k++;const X=Pe(z[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,k,G,X.width,X.height)}for(let X=0;X<6;X++)if(P){te?R&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,0,0,z[X].width,z[X].height,Y,F,z[X].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,G,z[X].width,z[X].height,0,Y,F,z[X].data);for(let V=0;V<B.length;V++){const Z=B[V].image[X].image;te?R&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,V+1,0,0,Z.width,Z.height,Y,F,Z.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,V+1,G,Z.width,Z.height,0,Y,F,Z.data)}}else{te?R&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,0,0,Y,F,z[X]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,G,Y,F,z[X]);for(let V=0;V<B.length;V++){const le=B[V];te?R&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,V+1,0,0,Y,F,le.image[X]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,V+1,G,Y,F,le.image[X])}}}p(L)&&A(i.TEXTURE_CUBE_MAP),I.__version=E.version,L.onUpdate&&L.onUpdate(L)}J.__version=L.version}function xe(J,L,we,Re,E,I){const ce=a.convert(we.format,we.colorSpace),O=a.convert(we.type),Q=x(we.internalFormat,ce,O,we.colorSpace),K=n.get(L),P=n.get(we);if(P.__renderTarget=L,!K.__hasExternalTextures){const z=Math.max(1,L.width>>I),W=Math.max(1,L.height>>I);E===i.TEXTURE_3D||E===i.TEXTURE_2D_ARRAY?t.texImage3D(E,I,Q,z,W,L.depth,0,ce,O,null):t.texImage2D(E,I,Q,z,W,0,ce,O,null)}t.bindFramebuffer(i.FRAMEBUFFER,J),$e(L)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Re,E,P.__webglTexture,0,tt(L)):(E===i.TEXTURE_2D||E>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&E<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Re,E,P.__webglTexture,I),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Me(J,L,we){if(i.bindRenderbuffer(i.RENDERBUFFER,J),L.depthBuffer){const Re=L.depthTexture,E=Re&&Re.isDepthTexture?Re.type:null,I=g(L.stencilBuffer,E),ce=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,O=tt(L);$e(L)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,O,I,L.width,L.height):we?i.renderbufferStorageMultisample(i.RENDERBUFFER,O,I,L.width,L.height):i.renderbufferStorage(i.RENDERBUFFER,I,L.width,L.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ce,i.RENDERBUFFER,J)}else{const Re=L.textures;for(let E=0;E<Re.length;E++){const I=Re[E],ce=a.convert(I.format,I.colorSpace),O=a.convert(I.type),Q=x(I.internalFormat,ce,O,I.colorSpace),K=tt(L);we&&$e(L)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,K,Q,L.width,L.height):$e(L)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,K,Q,L.width,L.height):i.renderbufferStorage(i.RENDERBUFFER,Q,L.width,L.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ie(J,L){if(L&&L.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,J),!(L.depthTexture&&L.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Re=n.get(L.depthTexture);Re.__renderTarget=L,(!Re.__webglTexture||L.depthTexture.image.width!==L.width||L.depthTexture.image.height!==L.height)&&(L.depthTexture.image.width=L.width,L.depthTexture.image.height=L.height,L.depthTexture.needsUpdate=!0),ge(L.depthTexture,0);const E=Re.__webglTexture,I=tt(L);if(L.depthTexture.format===na)$e(L)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,E,0,I):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,E,0);else if(L.depthTexture.format===ws)$e(L)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,E,0,I):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,E,0);else throw new Error("Unknown depthTexture format")}function Te(J){const L=n.get(J),we=J.isWebGLCubeRenderTarget===!0;if(L.__boundDepthTexture!==J.depthTexture){const Re=J.depthTexture;if(L.__depthDisposeCallback&&L.__depthDisposeCallback(),Re){const E=()=>{delete L.__boundDepthTexture,delete L.__depthDisposeCallback,Re.removeEventListener("dispose",E)};Re.addEventListener("dispose",E),L.__depthDisposeCallback=E}L.__boundDepthTexture=Re}if(J.depthTexture&&!L.__autoAllocateDepthBuffer){if(we)throw new Error("target.depthTexture not supported in Cube render targets");Ie(L.__webglFramebuffer,J)}else if(we){L.__webglDepthbuffer=[];for(let Re=0;Re<6;Re++)if(t.bindFramebuffer(i.FRAMEBUFFER,L.__webglFramebuffer[Re]),L.__webglDepthbuffer[Re]===void 0)L.__webglDepthbuffer[Re]=i.createRenderbuffer(),Me(L.__webglDepthbuffer[Re],J,!1);else{const E=J.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,I=L.__webglDepthbuffer[Re];i.bindRenderbuffer(i.RENDERBUFFER,I),i.framebufferRenderbuffer(i.FRAMEBUFFER,E,i.RENDERBUFFER,I)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,L.__webglFramebuffer),L.__webglDepthbuffer===void 0)L.__webglDepthbuffer=i.createRenderbuffer(),Me(L.__webglDepthbuffer,J,!1);else{const Re=J.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,E=L.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,E),i.framebufferRenderbuffer(i.FRAMEBUFFER,Re,i.RENDERBUFFER,E)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Qe(J,L,we){const Re=n.get(J);L!==void 0&&xe(Re.__webglFramebuffer,J,J.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),we!==void 0&&Te(J)}function je(J){const L=J.texture,we=n.get(J),Re=n.get(L);J.addEventListener("dispose",y);const E=J.textures,I=J.isWebGLCubeRenderTarget===!0,ce=E.length>1;if(ce||(Re.__webglTexture===void 0&&(Re.__webglTexture=i.createTexture()),Re.__version=L.version,r.memory.textures++),I){we.__webglFramebuffer=[];for(let O=0;O<6;O++)if(L.mipmaps&&L.mipmaps.length>0){we.__webglFramebuffer[O]=[];for(let Q=0;Q<L.mipmaps.length;Q++)we.__webglFramebuffer[O][Q]=i.createFramebuffer()}else we.__webglFramebuffer[O]=i.createFramebuffer()}else{if(L.mipmaps&&L.mipmaps.length>0){we.__webglFramebuffer=[];for(let O=0;O<L.mipmaps.length;O++)we.__webglFramebuffer[O]=i.createFramebuffer()}else we.__webglFramebuffer=i.createFramebuffer();if(ce)for(let O=0,Q=E.length;O<Q;O++){const K=n.get(E[O]);K.__webglTexture===void 0&&(K.__webglTexture=i.createTexture(),r.memory.textures++)}if(J.samples>0&&$e(J)===!1){we.__webglMultisampledFramebuffer=i.createFramebuffer(),we.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,we.__webglMultisampledFramebuffer);for(let O=0;O<E.length;O++){const Q=E[O];we.__webglColorRenderbuffer[O]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,we.__webglColorRenderbuffer[O]);const K=a.convert(Q.format,Q.colorSpace),P=a.convert(Q.type),z=x(Q.internalFormat,K,P,Q.colorSpace,J.isXRRenderTarget===!0),W=tt(J);i.renderbufferStorageMultisample(i.RENDERBUFFER,W,z,J.width,J.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+O,i.RENDERBUFFER,we.__webglColorRenderbuffer[O])}i.bindRenderbuffer(i.RENDERBUFFER,null),J.depthBuffer&&(we.__webglDepthRenderbuffer=i.createRenderbuffer(),Me(we.__webglDepthRenderbuffer,J,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(I){t.bindTexture(i.TEXTURE_CUBE_MAP,Re.__webglTexture),ve(i.TEXTURE_CUBE_MAP,L);for(let O=0;O<6;O++)if(L.mipmaps&&L.mipmaps.length>0)for(let Q=0;Q<L.mipmaps.length;Q++)xe(we.__webglFramebuffer[O][Q],J,L,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+O,Q);else xe(we.__webglFramebuffer[O],J,L,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+O,0);p(L)&&A(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ce){for(let O=0,Q=E.length;O<Q;O++){const K=E[O],P=n.get(K);t.bindTexture(i.TEXTURE_2D,P.__webglTexture),ve(i.TEXTURE_2D,K),xe(we.__webglFramebuffer,J,K,i.COLOR_ATTACHMENT0+O,i.TEXTURE_2D,0),p(K)&&A(i.TEXTURE_2D)}t.unbindTexture()}else{let O=i.TEXTURE_2D;if((J.isWebGL3DRenderTarget||J.isWebGLArrayRenderTarget)&&(O=J.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(O,Re.__webglTexture),ve(O,L),L.mipmaps&&L.mipmaps.length>0)for(let Q=0;Q<L.mipmaps.length;Q++)xe(we.__webglFramebuffer[Q],J,L,i.COLOR_ATTACHMENT0,O,Q);else xe(we.__webglFramebuffer,J,L,i.COLOR_ATTACHMENT0,O,0);p(L)&&A(O),t.unbindTexture()}J.depthBuffer&&Te(J)}function ze(J){const L=J.textures;for(let we=0,Re=L.length;we<Re;we++){const E=L[we];if(p(E)){const I=b(J),ce=n.get(E).__webglTexture;t.bindTexture(I,ce),A(I),t.unbindTexture()}}}const ht=[],be=[];function xt(J){if(J.samples>0){if($e(J)===!1){const L=J.textures,we=J.width,Re=J.height;let E=i.COLOR_BUFFER_BIT;const I=J.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ce=n.get(J),O=L.length>1;if(O)for(let Q=0;Q<L.length;Q++)t.bindFramebuffer(i.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Q,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ce.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Q,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ce.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ce.__webglFramebuffer);for(let Q=0;Q<L.length;Q++){if(J.resolveDepthBuffer&&(J.depthBuffer&&(E|=i.DEPTH_BUFFER_BIT),J.stencilBuffer&&J.resolveStencilBuffer&&(E|=i.STENCIL_BUFFER_BIT)),O){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ce.__webglColorRenderbuffer[Q]);const K=n.get(L[Q]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,K,0)}i.blitFramebuffer(0,0,we,Re,0,0,we,Re,E,i.NEAREST),c===!0&&(ht.length=0,be.length=0,ht.push(i.COLOR_ATTACHMENT0+Q),J.depthBuffer&&J.resolveDepthBuffer===!1&&(ht.push(I),be.push(I),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,be)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ht))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),O)for(let Q=0;Q<L.length;Q++){t.bindFramebuffer(i.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Q,i.RENDERBUFFER,ce.__webglColorRenderbuffer[Q]);const K=n.get(L[Q]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ce.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Q,i.TEXTURE_2D,K,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ce.__webglMultisampledFramebuffer)}else if(J.depthBuffer&&J.resolveDepthBuffer===!1&&c){const L=J.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[L])}}}function tt(J){return Math.min(s.maxSamples,J.samples)}function $e(J){const L=n.get(J);return J.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&L.__useRenderToTexture!==!1}function Ke(J){const L=r.render.frame;h.get(J)!==L&&(h.set(J,L),J.update())}function ft(J,L){const we=J.colorSpace,Re=J.format,E=J.type;return J.isCompressedTexture===!0||J.isVideoTexture===!0||we!==Cn&&we!==bi&&(Ct.getTransfer(we)===Ft?(Re!==ln||E!==cn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",we)),L}function Pe(J){return typeof HTMLImageElement<"u"&&J instanceof HTMLImageElement?(l.width=J.naturalWidth||J.width,l.height=J.naturalHeight||J.height):typeof VideoFrame<"u"&&J instanceof VideoFrame?(l.width=J.displayWidth,l.height=J.displayHeight):(l.width=J.width,l.height=J.height),l}this.allocateTextureUnit=H,this.resetTextureUnits=T,this.setTexture2D=ge,this.setTexture2DArray=ue,this.setTexture3D=ae,this.setTextureCube=$,this.rebindTextures=Qe,this.setupRenderTarget=je,this.updateRenderTargetMipmap=ze,this.updateMultisampleRenderTarget=xt,this.setupDepthRenderbuffer=Te,this.setupFrameBufferTexture=xe,this.useMultisampledRTT=$e}function wb(i,e){function t(n,s=bi){let a;const r=Ct.getTransfer(s);if(n===cn)return i.UNSIGNED_BYTE;if(n===Il)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Tl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===lu)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===ou)return i.BYTE;if(n===cu)return i.SHORT;if(n===Ka)return i.UNSIGNED_SHORT;if(n===Sl)return i.INT;if(n===Ms)return i.UNSIGNED_INT;if(n===wn)return i.FLOAT;if(n===bn)return i.HALF_FLOAT;if(n===hu)return i.ALPHA;if(n===fu)return i.RGB;if(n===ln)return i.RGBA;if(n===uu)return i.LUMINANCE;if(n===du)return i.LUMINANCE_ALPHA;if(n===na)return i.DEPTH_COMPONENT;if(n===ws)return i.DEPTH_STENCIL;if(n===ns)return i.RED;if(n===Bl)return i.RED_INTEGER;if(n===_s)return i.RG;if(n===Rl)return i.RG_INTEGER;if(n===Dl)return i.RGBA_INTEGER;if(n===Xr||n===Qa||n===Kr||n===Oa)if(r===Ft)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(n===Xr)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Qa)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Kr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Oa)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(n===Xr)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Qa)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Kr)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Oa)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ao||n===Vc||n===ro||n===Wc)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(n===ao)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Vc)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ro)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Wc)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===oo||n===co||n===lo)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(n===oo||n===co)return r===Ft?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(n===lo)return r===Ft?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Ja||n===jc||n===qc||n===Yc||n===Za||n===Xc||n===Kc||n===Jc||n===Zc||n===$c||n===el||n===tl||n===nl||n===il)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(n===Ja)return r===Ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===jc)return r===Ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===qc)return r===Ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Yc)return r===Ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Za)return r===Ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Xc)return r===Ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Kc)return r===Ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Jc)return r===Ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Zc)return r===Ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===$c)return r===Ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===el)return r===Ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===tl)return r===Ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===nl)return r===Ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===il)return r===Ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===za||n===sl||n===ho)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(n===za)return r===Ft?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===sl)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ho)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Au||n===al||n===rl||n===ol)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(n===za)return a.COMPRESSED_RED_RGTC1_EXT;if(n===al)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===rl)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ol)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ys?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}class Cb extends Rn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Ln extends Yt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Sb={type:"move"};class ic{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ln,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ln,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ne,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ne),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ln,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ne,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ne),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,a=null,r=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){r=!0;for(const _ of e.hand.values()){const p=t.getJointPose(_,n),A=this._getHandJoint(l,_);p!==null&&(A.matrix.fromArray(p.transform.matrix),A.matrix.decompose(A.position,A.rotation,A.scale),A.matrixWorldNeedsUpdate=!0,A.jointRadius=p.radius),A.visible=p!==null}const h=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],u=h.position.distanceTo(f.position),d=.02,m=.005;l.inputState.pinching&&u>d+m?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&u<=d-m&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,n),a!==null&&(c.matrix.fromArray(a.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,a.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(a.linearVelocity)):c.hasLinearVelocity=!1,a.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(a.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&a!==null&&(s=a),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Sb)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=a!==null),l!==null&&(l.visible=r!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Ln;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const Ib=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Tb=`
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

}`;class Bb{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const s=new tn,a=e.properties.get(s);a.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new an({vertexShader:Ib,fragmentShader:Tb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new dt(new ua(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Rb extends Is{constructor(e,t){super();const n=this;let s=null,a=1,r=null,o="local-floor",c=1,l=null,h=null,f=null,u=null,d=null,m=null;const _=new Bb,p=t.getContextAttributes();let A=null,b=null;const x=[],g=[],C=new Ye;let w=null;const y=new Rn;y.viewport=new Dt;const S=new Rn;S.viewport=new Dt;const v=[y,S],M=new Cb;let N=null,T=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let pe=x[j];return pe===void 0&&(pe=new ic,x[j]=pe),pe.getTargetRaySpace()},this.getControllerGrip=function(j){let pe=x[j];return pe===void 0&&(pe=new ic,x[j]=pe),pe.getGripSpace()},this.getHand=function(j){let pe=x[j];return pe===void 0&&(pe=new ic,x[j]=pe),pe.getHandSpace()};function H(j){const pe=g.indexOf(j.inputSource);if(pe===-1)return;const xe=x[pe];xe!==void 0&&(xe.update(j.inputSource,j.frame,l||r),xe.dispatchEvent({type:j.type,data:j.inputSource}))}function ie(){s.removeEventListener("select",H),s.removeEventListener("selectstart",H),s.removeEventListener("selectend",H),s.removeEventListener("squeeze",H),s.removeEventListener("squeezestart",H),s.removeEventListener("squeezeend",H),s.removeEventListener("end",ie),s.removeEventListener("inputsourceschange",ge);for(let j=0;j<x.length;j++){const pe=g[j];pe!==null&&(g[j]=null,x[j].disconnect(pe))}N=null,T=null,_.reset(),e.setRenderTarget(A),d=null,u=null,f=null,s=null,b=null,me.stop(),n.isPresenting=!1,e.setPixelRatio(w),e.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){a=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){o=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||r},this.setReferenceSpace=function(j){l=j},this.getBaseLayer=function(){return u!==null?u:d},this.getBinding=function(){return f},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(j){if(s=j,s!==null){if(A=e.getRenderTarget(),s.addEventListener("select",H),s.addEventListener("selectstart",H),s.addEventListener("selectend",H),s.addEventListener("squeeze",H),s.addEventListener("squeezestart",H),s.addEventListener("squeezeend",H),s.addEventListener("end",ie),s.addEventListener("inputsourceschange",ge),p.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(C),s.renderState.layers===void 0){const pe={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:a};d=new XRWebGLLayer(s,t,pe),s.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),b=new Kn(d.framebufferWidth,d.framebufferHeight,{format:ln,type:cn,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let pe=null,xe=null,Me=null;p.depth&&(Me=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,pe=p.stencil?ws:na,xe=p.stencil?ys:Ms);const Ie={colorFormat:t.RGBA8,depthFormat:Me,scaleFactor:a};f=new XRWebGLBinding(s,t),u=f.createProjectionLayer(Ie),s.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),b=new Kn(u.textureWidth,u.textureHeight,{format:ln,type:cn,depthTexture:new kl(u.textureWidth,u.textureHeight,xe,void 0,void 0,void 0,void 0,void 0,void 0,pe),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(c),l=null,r=await s.requestReferenceSpace(o),me.setContext(s),me.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function ge(j){for(let pe=0;pe<j.removed.length;pe++){const xe=j.removed[pe],Me=g.indexOf(xe);Me>=0&&(g[Me]=null,x[Me].disconnect(xe))}for(let pe=0;pe<j.added.length;pe++){const xe=j.added[pe];let Me=g.indexOf(xe);if(Me===-1){for(let Te=0;Te<x.length;Te++)if(Te>=g.length){g.push(xe),Me=Te;break}else if(g[Te]===null){g[Te]=xe,Me=Te;break}if(Me===-1)break}const Ie=x[Me];Ie&&Ie.connect(xe)}}const ue=new ne,ae=new ne;function $(j,pe,xe){ue.setFromMatrixPosition(pe.matrixWorld),ae.setFromMatrixPosition(xe.matrixWorld);const Me=ue.distanceTo(ae),Ie=pe.projectionMatrix.elements,Te=xe.projectionMatrix.elements,Qe=Ie[14]/(Ie[10]-1),je=Ie[14]/(Ie[10]+1),ze=(Ie[9]+1)/Ie[5],ht=(Ie[9]-1)/Ie[5],be=(Ie[8]-1)/Ie[0],xt=(Te[8]+1)/Te[0],tt=Qe*be,$e=Qe*xt,Ke=Me/(-be+xt),ft=Ke*-be;if(pe.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(ft),j.translateZ(Ke),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),Ie[10]===-1)j.projectionMatrix.copy(pe.projectionMatrix),j.projectionMatrixInverse.copy(pe.projectionMatrixInverse);else{const Pe=Qe+Ke,J=je+Ke,L=tt-ft,we=$e+(Me-ft),Re=ze*je/J*Pe,E=ht*je/J*Pe;j.projectionMatrix.makePerspective(L,we,Re,E,Pe,J),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function fe(j,pe){pe===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(pe.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(s===null)return;let pe=j.near,xe=j.far;_.texture!==null&&(_.depthNear>0&&(pe=_.depthNear),_.depthFar>0&&(xe=_.depthFar)),M.near=S.near=y.near=pe,M.far=S.far=y.far=xe,(N!==M.near||T!==M.far)&&(s.updateRenderState({depthNear:M.near,depthFar:M.far}),N=M.near,T=M.far),y.layers.mask=j.layers.mask|2,S.layers.mask=j.layers.mask|4,M.layers.mask=y.layers.mask|S.layers.mask;const Me=j.parent,Ie=M.cameras;fe(M,Me);for(let Te=0;Te<Ie.length;Te++)fe(Ie[Te],Me);Ie.length===2?$(M,y,S):M.projectionMatrix.copy(y.projectionMatrix),se(j,M,Me)};function se(j,pe,xe){xe===null?j.matrix.copy(pe.matrixWorld):(j.matrix.copy(xe.matrixWorld),j.matrix.invert(),j.matrix.multiply(pe.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(pe.projectionMatrix),j.projectionMatrixInverse.copy(pe.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=ha*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(u===null&&d===null))return c},this.setFoveation=function(j){c=j,u!==null&&(u.fixedFoveation=j),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=j)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(M)};let oe=null;function ve(j,pe){if(h=pe.getViewerPose(l||r),m=pe,h!==null){const xe=h.views;d!==null&&(e.setRenderTargetFramebuffer(b,d.framebuffer),e.setRenderTarget(b));let Me=!1;xe.length!==M.cameras.length&&(M.cameras.length=0,Me=!0);for(let Te=0;Te<xe.length;Te++){const Qe=xe[Te];let je=null;if(d!==null)je=d.getViewport(Qe);else{const ht=f.getViewSubImage(u,Qe);je=ht.viewport,Te===0&&(e.setRenderTargetTextures(b,ht.colorTexture,u.ignoreDepthValues?void 0:ht.depthStencilTexture),e.setRenderTarget(b))}let ze=v[Te];ze===void 0&&(ze=new Rn,ze.layers.enable(Te),ze.viewport=new Dt,v[Te]=ze),ze.matrix.fromArray(Qe.transform.matrix),ze.matrix.decompose(ze.position,ze.quaternion,ze.scale),ze.projectionMatrix.fromArray(Qe.projectionMatrix),ze.projectionMatrixInverse.copy(ze.projectionMatrix).invert(),ze.viewport.set(je.x,je.y,je.width,je.height),Te===0&&(M.matrix.copy(ze.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),Me===!0&&M.cameras.push(ze)}const Ie=s.enabledFeatures;if(Ie&&Ie.includes("depth-sensing")){const Te=f.getDepthInformation(xe[0]);Te&&Te.isValid&&Te.texture&&_.init(e,Te,s.renderState)}}for(let xe=0;xe<x.length;xe++){const Me=g[xe],Ie=x[xe];Me!==null&&Ie!==void 0&&Ie.update(Me,pe,l||r)}oe&&oe(j,pe),pe.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:pe}),m=null}const me=new Cu;me.setAnimationLoop(ve),this.setAnimationLoop=function(j){oe=j},this.dispose=function(){}}}const As=new ai,Db=new ot;function Lb(i,e){function t(p,A){p.matrixAutoUpdate===!0&&p.updateMatrix(),A.value.copy(p.matrix)}function n(p,A){A.color.getRGB(p.fogColor.value,Mu(i)),A.isFog?(p.fogNear.value=A.near,p.fogFar.value=A.far):A.isFogExp2&&(p.fogDensity.value=A.density)}function s(p,A,b,x,g){A.isMeshBasicMaterial||A.isMeshLambertMaterial?a(p,A):A.isMeshToonMaterial?(a(p,A),f(p,A)):A.isMeshPhongMaterial?(a(p,A),h(p,A)):A.isMeshStandardMaterial?(a(p,A),u(p,A),A.isMeshPhysicalMaterial&&d(p,A,g)):A.isMeshMatcapMaterial?(a(p,A),m(p,A)):A.isMeshDepthMaterial?a(p,A):A.isMeshDistanceMaterial?(a(p,A),_(p,A)):A.isMeshNormalMaterial?a(p,A):A.isLineBasicMaterial?(r(p,A),A.isLineDashedMaterial&&o(p,A)):A.isPointsMaterial?c(p,A,b,x):A.isSpriteMaterial?l(p,A):A.isShadowMaterial?(p.color.value.copy(A.color),p.opacity.value=A.opacity):A.isShaderMaterial&&(A.uniformsNeedUpdate=!1)}function a(p,A){p.opacity.value=A.opacity,A.color&&p.diffuse.value.copy(A.color),A.emissive&&p.emissive.value.copy(A.emissive).multiplyScalar(A.emissiveIntensity),A.map&&(p.map.value=A.map,t(A.map,p.mapTransform)),A.alphaMap&&(p.alphaMap.value=A.alphaMap,t(A.alphaMap,p.alphaMapTransform)),A.bumpMap&&(p.bumpMap.value=A.bumpMap,t(A.bumpMap,p.bumpMapTransform),p.bumpScale.value=A.bumpScale,A.side===On&&(p.bumpScale.value*=-1)),A.normalMap&&(p.normalMap.value=A.normalMap,t(A.normalMap,p.normalMapTransform),p.normalScale.value.copy(A.normalScale),A.side===On&&p.normalScale.value.negate()),A.displacementMap&&(p.displacementMap.value=A.displacementMap,t(A.displacementMap,p.displacementMapTransform),p.displacementScale.value=A.displacementScale,p.displacementBias.value=A.displacementBias),A.emissiveMap&&(p.emissiveMap.value=A.emissiveMap,t(A.emissiveMap,p.emissiveMapTransform)),A.specularMap&&(p.specularMap.value=A.specularMap,t(A.specularMap,p.specularMapTransform)),A.alphaTest>0&&(p.alphaTest.value=A.alphaTest);const b=e.get(A),x=b.envMap,g=b.envMapRotation;x&&(p.envMap.value=x,As.copy(g),As.x*=-1,As.y*=-1,As.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(As.y*=-1,As.z*=-1),p.envMapRotation.value.setFromMatrix4(Db.makeRotationFromEuler(As)),p.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=A.reflectivity,p.ior.value=A.ior,p.refractionRatio.value=A.refractionRatio),A.lightMap&&(p.lightMap.value=A.lightMap,p.lightMapIntensity.value=A.lightMapIntensity,t(A.lightMap,p.lightMapTransform)),A.aoMap&&(p.aoMap.value=A.aoMap,p.aoMapIntensity.value=A.aoMapIntensity,t(A.aoMap,p.aoMapTransform))}function r(p,A){p.diffuse.value.copy(A.color),p.opacity.value=A.opacity,A.map&&(p.map.value=A.map,t(A.map,p.mapTransform))}function o(p,A){p.dashSize.value=A.dashSize,p.totalSize.value=A.dashSize+A.gapSize,p.scale.value=A.scale}function c(p,A,b,x){p.diffuse.value.copy(A.color),p.opacity.value=A.opacity,p.size.value=A.size*b,p.scale.value=x*.5,A.map&&(p.map.value=A.map,t(A.map,p.uvTransform)),A.alphaMap&&(p.alphaMap.value=A.alphaMap,t(A.alphaMap,p.alphaMapTransform)),A.alphaTest>0&&(p.alphaTest.value=A.alphaTest)}function l(p,A){p.diffuse.value.copy(A.color),p.opacity.value=A.opacity,p.rotation.value=A.rotation,A.map&&(p.map.value=A.map,t(A.map,p.mapTransform)),A.alphaMap&&(p.alphaMap.value=A.alphaMap,t(A.alphaMap,p.alphaMapTransform)),A.alphaTest>0&&(p.alphaTest.value=A.alphaTest)}function h(p,A){p.specular.value.copy(A.specular),p.shininess.value=Math.max(A.shininess,1e-4)}function f(p,A){A.gradientMap&&(p.gradientMap.value=A.gradientMap)}function u(p,A){p.metalness.value=A.metalness,A.metalnessMap&&(p.metalnessMap.value=A.metalnessMap,t(A.metalnessMap,p.metalnessMapTransform)),p.roughness.value=A.roughness,A.roughnessMap&&(p.roughnessMap.value=A.roughnessMap,t(A.roughnessMap,p.roughnessMapTransform)),A.envMap&&(p.envMapIntensity.value=A.envMapIntensity)}function d(p,A,b){p.ior.value=A.ior,A.sheen>0&&(p.sheenColor.value.copy(A.sheenColor).multiplyScalar(A.sheen),p.sheenRoughness.value=A.sheenRoughness,A.sheenColorMap&&(p.sheenColorMap.value=A.sheenColorMap,t(A.sheenColorMap,p.sheenColorMapTransform)),A.sheenRoughnessMap&&(p.sheenRoughnessMap.value=A.sheenRoughnessMap,t(A.sheenRoughnessMap,p.sheenRoughnessMapTransform))),A.clearcoat>0&&(p.clearcoat.value=A.clearcoat,p.clearcoatRoughness.value=A.clearcoatRoughness,A.clearcoatMap&&(p.clearcoatMap.value=A.clearcoatMap,t(A.clearcoatMap,p.clearcoatMapTransform)),A.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=A.clearcoatRoughnessMap,t(A.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),A.clearcoatNormalMap&&(p.clearcoatNormalMap.value=A.clearcoatNormalMap,t(A.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(A.clearcoatNormalScale),A.side===On&&p.clearcoatNormalScale.value.negate())),A.dispersion>0&&(p.dispersion.value=A.dispersion),A.iridescence>0&&(p.iridescence.value=A.iridescence,p.iridescenceIOR.value=A.iridescenceIOR,p.iridescenceThicknessMinimum.value=A.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=A.iridescenceThicknessRange[1],A.iridescenceMap&&(p.iridescenceMap.value=A.iridescenceMap,t(A.iridescenceMap,p.iridescenceMapTransform)),A.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=A.iridescenceThicknessMap,t(A.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),A.transmission>0&&(p.transmission.value=A.transmission,p.transmissionSamplerMap.value=b.texture,p.transmissionSamplerSize.value.set(b.width,b.height),A.transmissionMap&&(p.transmissionMap.value=A.transmissionMap,t(A.transmissionMap,p.transmissionMapTransform)),p.thickness.value=A.thickness,A.thicknessMap&&(p.thicknessMap.value=A.thicknessMap,t(A.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=A.attenuationDistance,p.attenuationColor.value.copy(A.attenuationColor)),A.anisotropy>0&&(p.anisotropyVector.value.set(A.anisotropy*Math.cos(A.anisotropyRotation),A.anisotropy*Math.sin(A.anisotropyRotation)),A.anisotropyMap&&(p.anisotropyMap.value=A.anisotropyMap,t(A.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=A.specularIntensity,p.specularColor.value.copy(A.specularColor),A.specularColorMap&&(p.specularColorMap.value=A.specularColorMap,t(A.specularColorMap,p.specularColorMapTransform)),A.specularIntensityMap&&(p.specularIntensityMap.value=A.specularIntensityMap,t(A.specularIntensityMap,p.specularIntensityMapTransform))}function m(p,A){A.matcap&&(p.matcap.value=A.matcap)}function _(p,A){const b=e.get(A).light;p.referencePosition.value.setFromMatrixPosition(b.matrixWorld),p.nearDistance.value=b.shadow.camera.near,p.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Pb(i,e,t,n){let s={},a={},r=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(b,x){const g=x.program;n.uniformBlockBinding(b,g)}function l(b,x){let g=s[b.id];g===void 0&&(m(b),g=h(b),s[b.id]=g,b.addEventListener("dispose",p));const C=x.program;n.updateUBOMapping(b,C);const w=e.render.frame;a[b.id]!==w&&(u(b),a[b.id]=w)}function h(b){const x=f();b.__bindingPointIndex=x;const g=i.createBuffer(),C=b.__size,w=b.usage;return i.bindBuffer(i.UNIFORM_BUFFER,g),i.bufferData(i.UNIFORM_BUFFER,C,w),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,x,g),g}function f(){for(let b=0;b<o;b++)if(r.indexOf(b)===-1)return r.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(b){const x=s[b.id],g=b.uniforms,C=b.__cache;i.bindBuffer(i.UNIFORM_BUFFER,x);for(let w=0,y=g.length;w<y;w++){const S=Array.isArray(g[w])?g[w]:[g[w]];for(let v=0,M=S.length;v<M;v++){const N=S[v];if(d(N,w,v,C)===!0){const T=N.__offset,H=Array.isArray(N.value)?N.value:[N.value];let ie=0;for(let ge=0;ge<H.length;ge++){const ue=H[ge],ae=_(ue);typeof ue=="number"||typeof ue=="boolean"?(N.__data[0]=ue,i.bufferSubData(i.UNIFORM_BUFFER,T+ie,N.__data)):ue.isMatrix3?(N.__data[0]=ue.elements[0],N.__data[1]=ue.elements[1],N.__data[2]=ue.elements[2],N.__data[3]=0,N.__data[4]=ue.elements[3],N.__data[5]=ue.elements[4],N.__data[6]=ue.elements[5],N.__data[7]=0,N.__data[8]=ue.elements[6],N.__data[9]=ue.elements[7],N.__data[10]=ue.elements[8],N.__data[11]=0):(ue.toArray(N.__data,ie),ie+=ae.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,T,N.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(b,x,g,C){const w=b.value,y=x+"_"+g;if(C[y]===void 0)return typeof w=="number"||typeof w=="boolean"?C[y]=w:C[y]=w.clone(),!0;{const S=C[y];if(typeof w=="number"||typeof w=="boolean"){if(S!==w)return C[y]=w,!0}else if(S.equals(w)===!1)return S.copy(w),!0}return!1}function m(b){const x=b.uniforms;let g=0;const C=16;for(let y=0,S=x.length;y<S;y++){const v=Array.isArray(x[y])?x[y]:[x[y]];for(let M=0,N=v.length;M<N;M++){const T=v[M],H=Array.isArray(T.value)?T.value:[T.value];for(let ie=0,ge=H.length;ie<ge;ie++){const ue=H[ie],ae=_(ue),$=g%C,fe=$%ae.boundary,se=$+fe;g+=fe,se!==0&&C-se<ae.storage&&(g+=C-se),T.__data=new Float32Array(ae.storage/Float32Array.BYTES_PER_ELEMENT),T.__offset=g,g+=ae.storage}}}const w=g%C;return w>0&&(g+=C-w),b.__size=g,b.__cache={},this}function _(b){const x={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(x.boundary=4,x.storage=4):b.isVector2?(x.boundary=8,x.storage=8):b.isVector3||b.isColor?(x.boundary=16,x.storage=12):b.isVector4?(x.boundary=16,x.storage=16):b.isMatrix3?(x.boundary=48,x.storage=48):b.isMatrix4?(x.boundary=64,x.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),x}function p(b){const x=b.target;x.removeEventListener("dispose",p);const g=r.indexOf(x.__bindingPointIndex);r.splice(g,1),i.deleteBuffer(s[x.id]),delete s[x.id],delete a[x.id]}function A(){for(const b in s)i.deleteBuffer(s[b]);r=[],s={},a={}}return{bind:c,update:l,dispose:A}}class Ub{constructor(e={}){const{canvas:t=wA(),context:n=null,depth:s=!0,stencil:a=!1,alpha:r=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:u=!1}=e;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=r;const m=new Uint32Array(4),_=new Int32Array(4);let p=null,A=null;const b=[],x=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Kt,this.toneMapping=os,this.toneMappingExposure=1;const g=this;let C=!1,w=0,y=0,S=null,v=-1,M=null;const N=new Dt,T=new Dt;let H=null;const ie=new Ne(0);let ge=0,ue=t.width,ae=t.height,$=1,fe=null,se=null;const oe=new Dt(0,0,ue,ae),ve=new Dt(0,0,ue,ae);let me=!1;const j=new Fl;let pe=!1,xe=!1;const Me=new ot,Ie=new ot,Te=new ne,Qe=new Dt,je={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ze=!1;function ht(){return S===null?$:1}let be=n;function xt(D,de){return t.getContext(D,de)}try{const D={alpha:!0,depth:s,stencil:a,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ml}`),t.addEventListener("webglcontextlost",X,!1),t.addEventListener("webglcontextrestored",V,!1),t.addEventListener("webglcontextcreationerror",le,!1),be===null){const de="webgl2";if(be=xt(de,D),be===null)throw xt(de)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(D){throw console.error("THREE.WebGLRenderer: "+D.message),D}let tt,$e,Ke,ft,Pe,J,L,we,Re,E,I,ce,O,Q,K,P,z,W,Y,F,G,te,ee,R;function k(){tt=new Og(be),tt.init(),te=new wb(be,tt),$e=new Pg(be,tt,e,te),Ke=new vb(be,tt),$e.reverseDepthBuffer&&u&&Ke.buffers.depth.setReversed(!0),ft=new Hg(be),Pe=new ob,J=new yb(be,tt,Ke,Pe,$e,te,ft),L=new Fg(g),we=new Qg(g),Re=new KA(be),ee=new Dg(be,Re),E=new zg(be,Re,ft,ee),I=new Wg(be,E,Re,ft),Y=new Vg(be,$e,J),P=new Ug(Pe),ce=new rb(g,L,we,tt,$e,ee,P),O=new Lb(g,Pe),Q=new lb,K=new pb(tt),W=new Rg(g,L,we,Ke,I,d,c),z=new _b(g,I,$e),R=new Pb(be,ft,$e,Ke),F=new Lg(be,tt,ft),G=new Gg(be,tt,ft),ft.programs=ce.programs,g.capabilities=$e,g.extensions=tt,g.properties=Pe,g.renderLists=Q,g.shadowMap=z,g.state=Ke,g.info=ft}k();const B=new Rb(g,be);this.xr=B,this.getContext=function(){return be},this.getContextAttributes=function(){return be.getContextAttributes()},this.forceContextLoss=function(){const D=tt.get("WEBGL_lose_context");D&&D.loseContext()},this.forceContextRestore=function(){const D=tt.get("WEBGL_lose_context");D&&D.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(D){D!==void 0&&($=D,this.setSize(ue,ae,!1))},this.getSize=function(D){return D.set(ue,ae)},this.setSize=function(D,de,Ee=!0){if(B.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ue=D,ae=de,t.width=Math.floor(D*$),t.height=Math.floor(de*$),Ee===!0&&(t.style.width=D+"px",t.style.height=de+"px"),this.setViewport(0,0,D,de)},this.getDrawingBufferSize=function(D){return D.set(ue*$,ae*$).floor()},this.setDrawingBufferSize=function(D,de,Ee){ue=D,ae=de,$=Ee,t.width=Math.floor(D*Ee),t.height=Math.floor(de*Ee),this.setViewport(0,0,D,de)},this.getCurrentViewport=function(D){return D.copy(N)},this.getViewport=function(D){return D.copy(oe)},this.setViewport=function(D,de,Ee,ye){D.isVector4?oe.set(D.x,D.y,D.z,D.w):oe.set(D,de,Ee,ye),Ke.viewport(N.copy(oe).multiplyScalar($).round())},this.getScissor=function(D){return D.copy(ve)},this.setScissor=function(D,de,Ee,ye){D.isVector4?ve.set(D.x,D.y,D.z,D.w):ve.set(D,de,Ee,ye),Ke.scissor(T.copy(ve).multiplyScalar($).round())},this.getScissorTest=function(){return me},this.setScissorTest=function(D){Ke.setScissorTest(me=D)},this.setOpaqueSort=function(D){fe=D},this.setTransparentSort=function(D){se=D},this.getClearColor=function(D){return D.copy(W.getClearColor())},this.setClearColor=function(){W.setClearColor.apply(W,arguments)},this.getClearAlpha=function(){return W.getClearAlpha()},this.setClearAlpha=function(){W.setClearAlpha.apply(W,arguments)},this.clear=function(D=!0,de=!0,Ee=!0){let ye=0;if(D){let _e=!1;if(S!==null){const Be=S.texture.format;_e=Be===Dl||Be===Rl||Be===Bl}if(_e){const Be=S.texture.type,He=Be===cn||Be===Ms||Be===Ka||Be===ys||Be===Il||Be===Tl,We=W.getClearColor(),et=W.getClearAlpha(),ct=We.r,mt=We.g,st=We.b;He?(m[0]=ct,m[1]=mt,m[2]=st,m[3]=et,be.clearBufferuiv(be.COLOR,0,m)):(_[0]=ct,_[1]=mt,_[2]=st,_[3]=et,be.clearBufferiv(be.COLOR,0,_))}else ye|=be.COLOR_BUFFER_BIT}de&&(ye|=be.DEPTH_BUFFER_BIT),Ee&&(ye|=be.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),be.clear(ye)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",X,!1),t.removeEventListener("webglcontextrestored",V,!1),t.removeEventListener("webglcontextcreationerror",le,!1),Q.dispose(),K.dispose(),Pe.dispose(),L.dispose(),we.dispose(),I.dispose(),ee.dispose(),R.dispose(),ce.dispose(),B.dispose(),B.removeEventListener("sessionstart",De),B.removeEventListener("sessionend",Fe),ke.stop()};function X(D){D.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function V(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;const D=ft.autoReset,de=z.enabled,Ee=z.autoUpdate,ye=z.needsUpdate,_e=z.type;k(),ft.autoReset=D,z.enabled=de,z.autoUpdate=Ee,z.needsUpdate=ye,z.type=_e}function le(D){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",D.statusMessage)}function Z(D){const de=D.target;de.removeEventListener("dispose",Z),re(de)}function re(D){U(D),Pe.remove(D)}function U(D){const de=Pe.get(D).programs;de!==void 0&&(de.forEach(function(Ee){ce.releaseProgram(Ee)}),D.isShaderMaterial&&ce.releaseShaderCache(D))}this.renderBufferDirect=function(D,de,Ee,ye,_e,Be){de===null&&(de=je);const He=_e.isMesh&&_e.matrixWorld.determinant()<0,We=Ae(D,de,Ee,ye,_e);Ke.setMaterial(ye,He);let et=Ee.index,ct=1;if(ye.wireframe===!0){if(et=E.getWireframeAttribute(Ee),et===void 0)return;ct=2}const mt=Ee.drawRange,st=Ee.attributes.position;let Mt=mt.start*ct,Tt=(mt.start+mt.count)*ct;Be!==null&&(Mt=Math.max(Mt,Be.start*ct),Tt=Math.min(Tt,(Be.start+Be.count)*ct)),et!==null?(Mt=Math.max(Mt,0),Tt=Math.min(Tt,et.count)):st!=null&&(Mt=Math.max(Mt,0),Tt=Math.min(Tt,st.count));const Lt=Tt-Mt;if(Lt<0||Lt===1/0)return;ee.setup(_e,ye,We,Ee,et);let Rt,gt=F;if(et!==null&&(Rt=Re.get(et),gt=G,gt.setIndex(Rt)),_e.isMesh)ye.wireframe===!0?(Ke.setLineWidth(ye.wireframeLinewidth*ht()),gt.setMode(be.LINES)):gt.setMode(be.TRIANGLES);else if(_e.isLine){let Je=ye.linewidth;Je===void 0&&(Je=1),Ke.setLineWidth(Je*ht()),_e.isLineSegments?gt.setMode(be.LINES):_e.isLineLoop?gt.setMode(be.LINE_LOOP):gt.setMode(be.LINE_STRIP)}else _e.isPoints?gt.setMode(be.POINTS):_e.isSprite&&gt.setMode(be.TRIANGLES);if(_e.isBatchedMesh)if(_e._multiDrawInstances!==null)gt.renderMultiDrawInstances(_e._multiDrawStarts,_e._multiDrawCounts,_e._multiDrawCount,_e._multiDrawInstances);else if(tt.get("WEBGL_multi_draw"))gt.renderMultiDraw(_e._multiDrawStarts,_e._multiDrawCounts,_e._multiDrawCount);else{const Je=_e._multiDrawStarts,Pt=_e._multiDrawCounts,bt=_e._multiDrawCount,Et=et?Re.get(et).bytesPerElement:1,Gn=Pe.get(ye).currentProgram.getUniforms();for(let $t=0;$t<bt;$t++)Gn.setValue(be,"_gl_DrawID",$t),gt.render(Je[$t]/Et,Pt[$t])}else if(_e.isInstancedMesh)gt.renderInstances(Mt,Lt,_e.count);else if(Ee.isInstancedBufferGeometry){const Je=Ee._maxInstanceCount!==void 0?Ee._maxInstanceCount:1/0,Pt=Math.min(Ee.instanceCount,Je);gt.renderInstances(Mt,Lt,Pt)}else gt.render(Mt,Lt)};function q(D,de,Ee){D.transparent===!0&&D.side===Vt&&D.forceSinglePass===!1?(D.side=On,D.needsUpdate=!0,At(D,de,Ee),D.side=Ai,D.needsUpdate=!0,At(D,de,Ee),D.side=Vt):At(D,de,Ee)}this.compile=function(D,de,Ee=null){Ee===null&&(Ee=D),A=K.get(Ee),A.init(de),x.push(A),Ee.traverseVisible(function(_e){_e.isLight&&_e.layers.test(de.layers)&&(A.pushLight(_e),_e.castShadow&&A.pushShadow(_e))}),D!==Ee&&D.traverseVisible(function(_e){_e.isLight&&_e.layers.test(de.layers)&&(A.pushLight(_e),_e.castShadow&&A.pushShadow(_e))}),A.setupLights();const ye=new Set;return D.traverse(function(_e){if(!(_e.isMesh||_e.isPoints||_e.isLine||_e.isSprite))return;const Be=_e.material;if(Be)if(Array.isArray(Be))for(let He=0;He<Be.length;He++){const We=Be[He];q(We,Ee,_e),ye.add(We)}else q(Be,Ee,_e),ye.add(Be)}),x.pop(),A=null,ye},this.compileAsync=function(D,de,Ee=null){const ye=this.compile(D,de,Ee);return new Promise(_e=>{function Be(){if(ye.forEach(function(He){Pe.get(He).currentProgram.isReady()&&ye.delete(He)}),ye.size===0){_e(D);return}setTimeout(Be,10)}tt.get("KHR_parallel_shader_compile")!==null?Be():setTimeout(Be,10)})};let he=null;function Ce(D){he&&he(D)}function De(){ke.stop()}function Fe(){ke.start()}const ke=new Cu;ke.setAnimationLoop(Ce),typeof self<"u"&&ke.setContext(self),this.setAnimationLoop=function(D){he=D,B.setAnimationLoop(D),D===null?ke.stop():ke.start()},B.addEventListener("sessionstart",De),B.addEventListener("sessionend",Fe),this.render=function(D,de){if(de!==void 0&&de.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),de.parent===null&&de.matrixWorldAutoUpdate===!0&&de.updateMatrixWorld(),B.enabled===!0&&B.isPresenting===!0&&(B.cameraAutoUpdate===!0&&B.updateCamera(de),de=B.getCamera()),D.isScene===!0&&D.onBeforeRender(g,D,de,S),A=K.get(D,x.length),A.init(de),x.push(A),Ie.multiplyMatrices(de.projectionMatrix,de.matrixWorldInverse),j.setFromProjectionMatrix(Ie),xe=this.localClippingEnabled,pe=P.init(this.clippingPlanes,xe),p=Q.get(D,b.length),p.init(),b.push(p),B.enabled===!0&&B.isPresenting===!0){const Be=g.xr.getDepthSensingMesh();Be!==null&&Le(Be,de,-1/0,g.sortObjects)}Le(D,de,0,g.sortObjects),p.finish(),g.sortObjects===!0&&p.sort(fe,se),ze=B.enabled===!1||B.isPresenting===!1||B.hasDepthSensing()===!1,ze&&W.addToRenderList(p,D),this.info.render.frame++,pe===!0&&P.beginShadows();const Ee=A.state.shadowsArray;z.render(Ee,D,de),pe===!0&&P.endShadows(),this.info.autoReset===!0&&this.info.reset();const ye=p.opaque,_e=p.transmissive;if(A.setupLights(),de.isArrayCamera){const Be=de.cameras;if(_e.length>0)for(let He=0,We=Be.length;He<We;He++){const et=Be[He];at(ye,_e,D,et)}ze&&W.render(D);for(let He=0,We=Be.length;He<We;He++){const et=Be[He];Ue(p,D,et,et.viewport)}}else _e.length>0&&at(ye,_e,D,de),ze&&W.render(D),Ue(p,D,de);S!==null&&(J.updateMultisampleRenderTarget(S),J.updateRenderTargetMipmap(S)),D.isScene===!0&&D.onAfterRender(g,D,de),ee.resetDefaultState(),v=-1,M=null,x.pop(),x.length>0?(A=x[x.length-1],pe===!0&&P.setGlobalState(g.clippingPlanes,A.state.camera)):A=null,b.pop(),b.length>0?p=b[b.length-1]:p=null};function Le(D,de,Ee,ye){if(D.visible===!1)return;if(D.layers.test(de.layers)){if(D.isGroup)Ee=D.renderOrder;else if(D.isLOD)D.autoUpdate===!0&&D.update(de);else if(D.isLight)A.pushLight(D),D.castShadow&&A.pushShadow(D);else if(D.isSprite){if(!D.frustumCulled||j.intersectsSprite(D)){ye&&Qe.setFromMatrixPosition(D.matrixWorld).applyMatrix4(Ie);const He=I.update(D),We=D.material;We.visible&&p.push(D,He,We,Ee,Qe.z,null)}}else if((D.isMesh||D.isLine||D.isPoints)&&(!D.frustumCulled||j.intersectsObject(D))){const He=I.update(D),We=D.material;if(ye&&(D.boundingSphere!==void 0?(D.boundingSphere===null&&D.computeBoundingSphere(),Qe.copy(D.boundingSphere.center)):(He.boundingSphere===null&&He.computeBoundingSphere(),Qe.copy(He.boundingSphere.center)),Qe.applyMatrix4(D.matrixWorld).applyMatrix4(Ie)),Array.isArray(We)){const et=He.groups;for(let ct=0,mt=et.length;ct<mt;ct++){const st=et[ct],Mt=We[st.materialIndex];Mt&&Mt.visible&&p.push(D,He,Mt,Ee,Qe.z,st)}}else We.visible&&p.push(D,He,We,Ee,Qe.z,null)}}const Be=D.children;for(let He=0,We=Be.length;He<We;He++)Le(Be[He],de,Ee,ye)}function Ue(D,de,Ee,ye){const _e=D.opaque,Be=D.transmissive,He=D.transparent;A.setupLightsView(Ee),pe===!0&&P.setGlobalState(g.clippingPlanes,Ee),ye&&Ke.viewport(N.copy(ye)),_e.length>0&&Ge(_e,de,Ee),Be.length>0&&Ge(Be,de,Ee),He.length>0&&Ge(He,de,Ee),Ke.buffers.depth.setTest(!0),Ke.buffers.depth.setMask(!0),Ke.buffers.color.setMask(!0),Ke.setPolygonOffset(!1)}function at(D,de,Ee,ye){if((Ee.isScene===!0?Ee.overrideMaterial:null)!==null)return;A.state.transmissionRenderTarget[ye.id]===void 0&&(A.state.transmissionRenderTarget[ye.id]=new Kn(1,1,{generateMipmaps:!0,type:tt.has("EXT_color_buffer_half_float")||tt.has("EXT_color_buffer_float")?bn:cn,minFilter:_i,samples:4,stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ct.workingColorSpace}));const Be=A.state.transmissionRenderTarget[ye.id],He=ye.viewport||N;Be.setSize(He.z,He.w);const We=g.getRenderTarget();g.setRenderTarget(Be),g.getClearColor(ie),ge=g.getClearAlpha(),ge<1&&g.setClearColor(16777215,.5),g.clear(),ze&&W.render(Ee);const et=g.toneMapping;g.toneMapping=os;const ct=ye.viewport;if(ye.viewport!==void 0&&(ye.viewport=void 0),A.setupLightsView(ye),pe===!0&&P.setGlobalState(g.clippingPlanes,ye),Ge(D,Ee,ye),J.updateMultisampleRenderTarget(Be),J.updateRenderTargetMipmap(Be),tt.has("WEBGL_multisampled_render_to_texture")===!1){let mt=!1;for(let st=0,Mt=de.length;st<Mt;st++){const Tt=de[st],Lt=Tt.object,Rt=Tt.geometry,gt=Tt.material,Je=Tt.group;if(gt.side===Vt&&Lt.layers.test(ye.layers)){const Pt=gt.side;gt.side=On,gt.needsUpdate=!0,qe(Lt,Ee,ye,Rt,gt,Je),gt.side=Pt,gt.needsUpdate=!0,mt=!0}}mt===!0&&(J.updateMultisampleRenderTarget(Be),J.updateRenderTargetMipmap(Be))}g.setRenderTarget(We),g.setClearColor(ie,ge),ct!==void 0&&(ye.viewport=ct),g.toneMapping=et}function Ge(D,de,Ee){const ye=de.isScene===!0?de.overrideMaterial:null;for(let _e=0,Be=D.length;_e<Be;_e++){const He=D[_e],We=He.object,et=He.geometry,ct=ye===null?He.material:ye,mt=He.group;We.layers.test(Ee.layers)&&qe(We,de,Ee,et,ct,mt)}}function qe(D,de,Ee,ye,_e,Be){D.onBeforeRender(g,de,Ee,ye,_e,Be),D.modelViewMatrix.multiplyMatrices(Ee.matrixWorldInverse,D.matrixWorld),D.normalMatrix.getNormalMatrix(D.modelViewMatrix),_e.onBeforeRender(g,de,Ee,ye,D,Be),_e.transparent===!0&&_e.side===Vt&&_e.forceSinglePass===!1?(_e.side=On,_e.needsUpdate=!0,g.renderBufferDirect(Ee,de,ye,_e,D,Be),_e.side=Ai,_e.needsUpdate=!0,g.renderBufferDirect(Ee,de,ye,_e,D,Be),_e.side=Vt):g.renderBufferDirect(Ee,de,ye,_e,D,Be),D.onAfterRender(g,de,Ee,ye,_e,Be)}function At(D,de,Ee){de.isScene!==!0&&(de=je);const ye=Pe.get(D),_e=A.state.lights,Be=A.state.shadowsArray,He=_e.state.version,We=ce.getParameters(D,_e.state,Be,de,Ee),et=ce.getProgramCacheKey(We);let ct=ye.programs;ye.environment=D.isMeshStandardMaterial?de.environment:null,ye.fog=de.fog,ye.envMap=(D.isMeshStandardMaterial?we:L).get(D.envMap||ye.environment),ye.envMapRotation=ye.environment!==null&&D.envMap===null?de.environmentRotation:D.envMapRotation,ct===void 0&&(D.addEventListener("dispose",Z),ct=new Map,ye.programs=ct);let mt=ct.get(et);if(mt!==void 0){if(ye.currentProgram===mt&&ye.lightsStateVersion===He)return Wt(D,We),mt}else We.uniforms=ce.getUniforms(D),D.onBeforeCompile(We,g),mt=ce.acquireProgram(We,et),ct.set(et,mt),ye.uniforms=We.uniforms;const st=ye.uniforms;return(!D.isShaderMaterial&&!D.isRawShaderMaterial||D.clipping===!0)&&(st.clippingPlanes=P.uniform),Wt(D,We),ye.needsLights=Oe(D),ye.lightsStateVersion=He,ye.needsLights&&(st.ambientLightColor.value=_e.state.ambient,st.lightProbe.value=_e.state.probe,st.directionalLights.value=_e.state.directional,st.directionalLightShadows.value=_e.state.directionalShadow,st.spotLights.value=_e.state.spot,st.spotLightShadows.value=_e.state.spotShadow,st.rectAreaLights.value=_e.state.rectArea,st.ltc_1.value=_e.state.rectAreaLTC1,st.ltc_2.value=_e.state.rectAreaLTC2,st.pointLights.value=_e.state.point,st.pointLightShadows.value=_e.state.pointShadow,st.hemisphereLights.value=_e.state.hemi,st.directionalShadowMap.value=_e.state.directionalShadowMap,st.directionalShadowMatrix.value=_e.state.directionalShadowMatrix,st.spotShadowMap.value=_e.state.spotShadowMap,st.spotLightMatrix.value=_e.state.spotLightMatrix,st.spotLightMap.value=_e.state.spotLightMap,st.pointShadowMap.value=_e.state.pointShadowMap,st.pointShadowMatrix.value=_e.state.pointShadowMatrix),ye.currentProgram=mt,ye.uniformsList=null,mt}function Ot(D){if(D.uniformsList===null){const de=D.currentProgram.getUniforms();D.uniformsList=Jr.seqWithValue(de.seq,D.uniforms)}return D.uniformsList}function Wt(D,de){const Ee=Pe.get(D);Ee.outputColorSpace=de.outputColorSpace,Ee.batching=de.batching,Ee.batchingColor=de.batchingColor,Ee.instancing=de.instancing,Ee.instancingColor=de.instancingColor,Ee.instancingMorph=de.instancingMorph,Ee.skinning=de.skinning,Ee.morphTargets=de.morphTargets,Ee.morphNormals=de.morphNormals,Ee.morphColors=de.morphColors,Ee.morphTargetsCount=de.morphTargetsCount,Ee.numClippingPlanes=de.numClippingPlanes,Ee.numIntersection=de.numClipIntersection,Ee.vertexAlphas=de.vertexAlphas,Ee.vertexTangents=de.vertexTangents,Ee.toneMapping=de.toneMapping}function Ae(D,de,Ee,ye,_e){de.isScene!==!0&&(de=je),J.resetTextureUnits();const Be=de.fog,He=ye.isMeshStandardMaterial?de.environment:null,We=S===null?g.outputColorSpace:S.isXRRenderTarget===!0?S.texture.colorSpace:Cn,et=(ye.isMeshStandardMaterial?we:L).get(ye.envMap||He),ct=ye.vertexColors===!0&&!!Ee.attributes.color&&Ee.attributes.color.itemSize===4,mt=!!Ee.attributes.tangent&&(!!ye.normalMap||ye.anisotropy>0),st=!!Ee.morphAttributes.position,Mt=!!Ee.morphAttributes.normal,Tt=!!Ee.morphAttributes.color;let Lt=os;ye.toneMapped&&(S===null||S.isXRRenderTarget===!0)&&(Lt=g.toneMapping);const Rt=Ee.morphAttributes.position||Ee.morphAttributes.normal||Ee.morphAttributes.color,gt=Rt!==void 0?Rt.length:0,Je=Pe.get(ye),Pt=A.state.lights;if(pe===!0&&(xe===!0||D!==M)){const En=D===M&&ye.id===v;P.setState(ye,D,En)}let bt=!1;ye.version===Je.__version?(Je.needsLights&&Je.lightsStateVersion!==Pt.state.version||Je.outputColorSpace!==We||_e.isBatchedMesh&&Je.batching===!1||!_e.isBatchedMesh&&Je.batching===!0||_e.isBatchedMesh&&Je.batchingColor===!0&&_e.colorTexture===null||_e.isBatchedMesh&&Je.batchingColor===!1&&_e.colorTexture!==null||_e.isInstancedMesh&&Je.instancing===!1||!_e.isInstancedMesh&&Je.instancing===!0||_e.isSkinnedMesh&&Je.skinning===!1||!_e.isSkinnedMesh&&Je.skinning===!0||_e.isInstancedMesh&&Je.instancingColor===!0&&_e.instanceColor===null||_e.isInstancedMesh&&Je.instancingColor===!1&&_e.instanceColor!==null||_e.isInstancedMesh&&Je.instancingMorph===!0&&_e.morphTexture===null||_e.isInstancedMesh&&Je.instancingMorph===!1&&_e.morphTexture!==null||Je.envMap!==et||ye.fog===!0&&Je.fog!==Be||Je.numClippingPlanes!==void 0&&(Je.numClippingPlanes!==P.numPlanes||Je.numIntersection!==P.numIntersection)||Je.vertexAlphas!==ct||Je.vertexTangents!==mt||Je.morphTargets!==st||Je.morphNormals!==Mt||Je.morphColors!==Tt||Je.toneMapping!==Lt||Je.morphTargetsCount!==gt)&&(bt=!0):(bt=!0,Je.__version=ye.version);let Et=Je.currentProgram;bt===!0&&(Et=At(ye,de,_e));let Gn=!1,$t=!1,cs=!1;const Ut=Et.getUniforms(),Pn=Je.uniforms;if(Ke.useProgram(Et.program)&&(Gn=!0,$t=!0,cs=!0),ye.id!==v&&(v=ye.id,$t=!0),Gn||M!==D){Ke.buffers.depth.getReversed()?(Me.copy(D.projectionMatrix),SA(Me),IA(Me),Ut.setValue(be,"projectionMatrix",Me)):Ut.setValue(be,"projectionMatrix",D.projectionMatrix),Ut.setValue(be,"viewMatrix",D.matrixWorldInverse);const zi=Ut.map.cameraPosition;zi!==void 0&&zi.setValue(be,Te.setFromMatrixPosition(D.matrixWorld)),$e.logarithmicDepthBuffer&&Ut.setValue(be,"logDepthBufFC",2/(Math.log(D.far+1)/Math.LN2)),(ye.isMeshPhongMaterial||ye.isMeshToonMaterial||ye.isMeshLambertMaterial||ye.isMeshBasicMaterial||ye.isMeshStandardMaterial||ye.isShaderMaterial)&&Ut.setValue(be,"isOrthographic",D.isOrthographicCamera===!0),M!==D&&(M=D,$t=!0,cs=!0)}if(_e.isSkinnedMesh){Ut.setOptional(be,_e,"bindMatrix"),Ut.setOptional(be,_e,"bindMatrixInverse");const En=_e.skeleton;En&&(En.boneTexture===null&&En.computeBoneTexture(),Ut.setValue(be,"boneTexture",En.boneTexture,J))}_e.isBatchedMesh&&(Ut.setOptional(be,_e,"batchingTexture"),Ut.setValue(be,"batchingTexture",_e._matricesTexture,J),Ut.setOptional(be,_e,"batchingIdTexture"),Ut.setValue(be,"batchingIdTexture",_e._indirectTexture,J),Ut.setOptional(be,_e,"batchingColorTexture"),_e._colorsTexture!==null&&Ut.setValue(be,"batchingColorTexture",_e._colorsTexture,J));const yi=Ee.morphAttributes;if((yi.position!==void 0||yi.normal!==void 0||yi.color!==void 0)&&Y.update(_e,Ee,Et),($t||Je.receiveShadow!==_e.receiveShadow)&&(Je.receiveShadow=_e.receiveShadow,Ut.setValue(be,"receiveShadow",_e.receiveShadow)),ye.isMeshGouraudMaterial&&ye.envMap!==null&&(Pn.envMap.value=et,Pn.flipEnvMap.value=et.isCubeTexture&&et.isRenderTargetTexture===!1?-1:1),ye.isMeshStandardMaterial&&ye.envMap===null&&de.environment!==null&&(Pn.envMapIntensity.value=de.environmentIntensity),$t&&(Ut.setValue(be,"toneMappingExposure",g.toneMappingExposure),Je.needsLights&&Se(Pn,cs),Be&&ye.fog===!0&&O.refreshFogUniforms(Pn,Be),O.refreshMaterialUniforms(Pn,ye,$,ae,A.state.transmissionRenderTarget[D.id]),Jr.upload(be,Ot(Je),Pn,J)),ye.isShaderMaterial&&ye.uniformsNeedUpdate===!0&&(Jr.upload(be,Ot(Je),Pn,J),ye.uniformsNeedUpdate=!1),ye.isSpriteMaterial&&Ut.setValue(be,"center",_e.center),Ut.setValue(be,"modelViewMatrix",_e.modelViewMatrix),Ut.setValue(be,"normalMatrix",_e.normalMatrix),Ut.setValue(be,"modelMatrix",_e.matrixWorld),ye.isShaderMaterial||ye.isRawShaderMaterial){const En=ye.uniformsGroups;for(let zi=0,Gi=En.length;zi<Gi;zi++){const Zl=En[zi];R.update(Zl,Et),R.bind(Zl,Et)}}return Et}function Se(D,de){D.ambientLightColor.needsUpdate=de,D.lightProbe.needsUpdate=de,D.directionalLights.needsUpdate=de,D.directionalLightShadows.needsUpdate=de,D.pointLights.needsUpdate=de,D.pointLightShadows.needsUpdate=de,D.spotLights.needsUpdate=de,D.spotLightShadows.needsUpdate=de,D.rectAreaLights.needsUpdate=de,D.hemisphereLights.needsUpdate=de}function Oe(D){return D.isMeshLambertMaterial||D.isMeshToonMaterial||D.isMeshPhongMaterial||D.isMeshStandardMaterial||D.isShadowMaterial||D.isShaderMaterial&&D.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return y},this.getRenderTarget=function(){return S},this.setRenderTargetTextures=function(D,de,Ee){Pe.get(D.texture).__webglTexture=de,Pe.get(D.depthTexture).__webglTexture=Ee;const ye=Pe.get(D);ye.__hasExternalTextures=!0,ye.__autoAllocateDepthBuffer=Ee===void 0,ye.__autoAllocateDepthBuffer||tt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ye.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(D,de){const Ee=Pe.get(D);Ee.__webglFramebuffer=de,Ee.__useDefaultFramebuffer=de===void 0},this.setRenderTarget=function(D,de=0,Ee=0){S=D,w=de,y=Ee;let ye=!0,_e=null,Be=!1,He=!1;if(D){const et=Pe.get(D);if(et.__useDefaultFramebuffer!==void 0)Ke.bindFramebuffer(be.FRAMEBUFFER,null),ye=!1;else if(et.__webglFramebuffer===void 0)J.setupRenderTarget(D);else if(et.__hasExternalTextures)J.rebindTextures(D,Pe.get(D.texture).__webglTexture,Pe.get(D.depthTexture).__webglTexture);else if(D.depthBuffer){const st=D.depthTexture;if(et.__boundDepthTexture!==st){if(st!==null&&Pe.has(st)&&(D.width!==st.image.width||D.height!==st.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");J.setupDepthRenderbuffer(D)}}const ct=D.texture;(ct.isData3DTexture||ct.isDataArrayTexture||ct.isCompressedArrayTexture)&&(He=!0);const mt=Pe.get(D).__webglFramebuffer;D.isWebGLCubeRenderTarget?(Array.isArray(mt[de])?_e=mt[de][Ee]:_e=mt[de],Be=!0):D.samples>0&&J.useMultisampledRTT(D)===!1?_e=Pe.get(D).__webglMultisampledFramebuffer:Array.isArray(mt)?_e=mt[Ee]:_e=mt,N.copy(D.viewport),T.copy(D.scissor),H=D.scissorTest}else N.copy(oe).multiplyScalar($).floor(),T.copy(ve).multiplyScalar($).floor(),H=me;if(Ke.bindFramebuffer(be.FRAMEBUFFER,_e)&&ye&&Ke.drawBuffers(D,_e),Ke.viewport(N),Ke.scissor(T),Ke.setScissorTest(H),Be){const et=Pe.get(D.texture);be.framebufferTexture2D(be.FRAMEBUFFER,be.COLOR_ATTACHMENT0,be.TEXTURE_CUBE_MAP_POSITIVE_X+de,et.__webglTexture,Ee)}else if(He){const et=Pe.get(D.texture),ct=de||0;be.framebufferTextureLayer(be.FRAMEBUFFER,be.COLOR_ATTACHMENT0,et.__webglTexture,Ee||0,ct)}v=-1},this.readRenderTargetPixels=function(D,de,Ee,ye,_e,Be,He){if(!(D&&D.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let We=Pe.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&He!==void 0&&(We=We[He]),We){Ke.bindFramebuffer(be.FRAMEBUFFER,We);try{const et=D.texture,ct=et.format,mt=et.type;if(!$e.textureFormatReadable(ct)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!$e.textureTypeReadable(mt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}de>=0&&de<=D.width-ye&&Ee>=0&&Ee<=D.height-_e&&be.readPixels(de,Ee,ye,_e,te.convert(ct),te.convert(mt),Be)}finally{const et=S!==null?Pe.get(S).__webglFramebuffer:null;Ke.bindFramebuffer(be.FRAMEBUFFER,et)}}},this.readRenderTargetPixelsAsync=async function(D,de,Ee,ye,_e,Be,He){if(!(D&&D.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let We=Pe.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&He!==void 0&&(We=We[He]),We){const et=D.texture,ct=et.format,mt=et.type;if(!$e.textureFormatReadable(ct))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!$e.textureTypeReadable(mt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(de>=0&&de<=D.width-ye&&Ee>=0&&Ee<=D.height-_e){Ke.bindFramebuffer(be.FRAMEBUFFER,We);const st=be.createBuffer();be.bindBuffer(be.PIXEL_PACK_BUFFER,st),be.bufferData(be.PIXEL_PACK_BUFFER,Be.byteLength,be.STREAM_READ),be.readPixels(de,Ee,ye,_e,te.convert(ct),te.convert(mt),0);const Mt=S!==null?Pe.get(S).__webglFramebuffer:null;Ke.bindFramebuffer(be.FRAMEBUFFER,Mt);const Tt=be.fenceSync(be.SYNC_GPU_COMMANDS_COMPLETE,0);return be.flush(),await CA(be,Tt,4),be.bindBuffer(be.PIXEL_PACK_BUFFER,st),be.getBufferSubData(be.PIXEL_PACK_BUFFER,0,Be),be.deleteBuffer(st),be.deleteSync(Tt),Be}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(D,de=null,Ee=0){D.isTexture!==!0&&(Ua("WebGLRenderer: copyFramebufferToTexture function signature has changed."),de=arguments[0]||null,D=arguments[1]);const ye=Math.pow(2,-Ee),_e=Math.floor(D.image.width*ye),Be=Math.floor(D.image.height*ye),He=de!==null?de.x:0,We=de!==null?de.y:0;J.setTexture2D(D,0),be.copyTexSubImage2D(be.TEXTURE_2D,Ee,0,0,He,We,_e,Be),Ke.unbindTexture()},this.copyTextureToTexture=function(D,de,Ee=null,ye=null,_e=0){D.isTexture!==!0&&(Ua("WebGLRenderer: copyTextureToTexture function signature has changed."),ye=arguments[0]||null,D=arguments[1],de=arguments[2],_e=arguments[3]||0,Ee=null);let Be,He,We,et,ct,mt,st,Mt,Tt;const Lt=D.isCompressedTexture?D.mipmaps[_e]:D.image;Ee!==null?(Be=Ee.max.x-Ee.min.x,He=Ee.max.y-Ee.min.y,We=Ee.isBox3?Ee.max.z-Ee.min.z:1,et=Ee.min.x,ct=Ee.min.y,mt=Ee.isBox3?Ee.min.z:0):(Be=Lt.width,He=Lt.height,We=Lt.depth||1,et=0,ct=0,mt=0),ye!==null?(st=ye.x,Mt=ye.y,Tt=ye.z):(st=0,Mt=0,Tt=0);const Rt=te.convert(de.format),gt=te.convert(de.type);let Je;de.isData3DTexture?(J.setTexture3D(de,0),Je=be.TEXTURE_3D):de.isDataArrayTexture||de.isCompressedArrayTexture?(J.setTexture2DArray(de,0),Je=be.TEXTURE_2D_ARRAY):(J.setTexture2D(de,0),Je=be.TEXTURE_2D),be.pixelStorei(be.UNPACK_FLIP_Y_WEBGL,de.flipY),be.pixelStorei(be.UNPACK_PREMULTIPLY_ALPHA_WEBGL,de.premultiplyAlpha),be.pixelStorei(be.UNPACK_ALIGNMENT,de.unpackAlignment);const Pt=be.getParameter(be.UNPACK_ROW_LENGTH),bt=be.getParameter(be.UNPACK_IMAGE_HEIGHT),Et=be.getParameter(be.UNPACK_SKIP_PIXELS),Gn=be.getParameter(be.UNPACK_SKIP_ROWS),$t=be.getParameter(be.UNPACK_SKIP_IMAGES);be.pixelStorei(be.UNPACK_ROW_LENGTH,Lt.width),be.pixelStorei(be.UNPACK_IMAGE_HEIGHT,Lt.height),be.pixelStorei(be.UNPACK_SKIP_PIXELS,et),be.pixelStorei(be.UNPACK_SKIP_ROWS,ct),be.pixelStorei(be.UNPACK_SKIP_IMAGES,mt);const cs=D.isDataArrayTexture||D.isData3DTexture,Ut=de.isDataArrayTexture||de.isData3DTexture;if(D.isRenderTargetTexture||D.isDepthTexture){const Pn=Pe.get(D),yi=Pe.get(de),En=Pe.get(Pn.__renderTarget),zi=Pe.get(yi.__renderTarget);Ke.bindFramebuffer(be.READ_FRAMEBUFFER,En.__webglFramebuffer),Ke.bindFramebuffer(be.DRAW_FRAMEBUFFER,zi.__webglFramebuffer);for(let Gi=0;Gi<We;Gi++)cs&&be.framebufferTextureLayer(be.READ_FRAMEBUFFER,be.COLOR_ATTACHMENT0,Pe.get(D).__webglTexture,_e,mt+Gi),D.isDepthTexture?(Ut&&be.framebufferTextureLayer(be.DRAW_FRAMEBUFFER,be.COLOR_ATTACHMENT0,Pe.get(de).__webglTexture,_e,Tt+Gi),be.blitFramebuffer(et,ct,Be,He,st,Mt,Be,He,be.DEPTH_BUFFER_BIT,be.NEAREST)):Ut?be.copyTexSubImage3D(Je,_e,st,Mt,Tt+Gi,et,ct,Be,He):be.copyTexSubImage2D(Je,_e,st,Mt,Tt+Gi,et,ct,Be,He);Ke.bindFramebuffer(be.READ_FRAMEBUFFER,null),Ke.bindFramebuffer(be.DRAW_FRAMEBUFFER,null)}else Ut?D.isDataTexture||D.isData3DTexture?be.texSubImage3D(Je,_e,st,Mt,Tt,Be,He,We,Rt,gt,Lt.data):de.isCompressedArrayTexture?be.compressedTexSubImage3D(Je,_e,st,Mt,Tt,Be,He,We,Rt,Lt.data):be.texSubImage3D(Je,_e,st,Mt,Tt,Be,He,We,Rt,gt,Lt):D.isDataTexture?be.texSubImage2D(be.TEXTURE_2D,_e,st,Mt,Be,He,Rt,gt,Lt.data):D.isCompressedTexture?be.compressedTexSubImage2D(be.TEXTURE_2D,_e,st,Mt,Lt.width,Lt.height,Rt,Lt.data):be.texSubImage2D(be.TEXTURE_2D,_e,st,Mt,Be,He,Rt,gt,Lt);be.pixelStorei(be.UNPACK_ROW_LENGTH,Pt),be.pixelStorei(be.UNPACK_IMAGE_HEIGHT,bt),be.pixelStorei(be.UNPACK_SKIP_PIXELS,Et),be.pixelStorei(be.UNPACK_SKIP_ROWS,Gn),be.pixelStorei(be.UNPACK_SKIP_IMAGES,$t),_e===0&&de.generateMipmaps&&be.generateMipmap(Je),Ke.unbindTexture()},this.copyTextureToTexture3D=function(D,de,Ee=null,ye=null,_e=0){return D.isTexture!==!0&&(Ua("WebGLRenderer: copyTextureToTexture3D function signature has changed."),Ee=arguments[0]||null,ye=arguments[1]||null,D=arguments[2],de=arguments[3],_e=arguments[4]||0),Ua('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(D,de,Ee,ye,_e)},this.initRenderTarget=function(D){Pe.get(D).__webglFramebuffer===void 0&&J.setupRenderTarget(D)},this.initTexture=function(D){D.isCubeTexture?J.setTextureCube(D,0):D.isData3DTexture?J.setTexture3D(D,0):D.isDataArrayTexture||D.isCompressedArrayTexture?J.setTexture2DArray(D,0):J.setTexture2D(D,0),Ke.unbindTexture()},this.resetState=function(){w=0,y=0,S=null,Ke.reset(),ee.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Fi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=Ct._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ct._getUnpackColorSpace()}}class Mo{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ne(e),this.near=t,this.far=n}clone(){return new Mo(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Fb extends Yt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ai,this.environmentIntensity=1,this.environmentRotation=new ai,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Nb{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=ll,this.updateRanges=[],this.version=0,this.uuid=di()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,a=this.stride;s<a;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=di()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=di()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Sn=new ne;class Ql{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Sn.fromBufferAttribute(this,t),Sn.applyMatrix4(e),this.setXYZ(t,Sn.x,Sn.y,Sn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Sn.fromBufferAttribute(this,t),Sn.applyNormalMatrix(e),this.setXYZ(t,Sn.x,Sn.y,Sn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Sn.fromBufferAttribute(this,t),Sn.transformDirection(e),this.setXYZ(t,Sn.x,Sn.y,Sn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=fi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=kt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=kt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=kt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=kt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=kt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=fi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=fi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=fi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=fi(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=kt(t,this.array),n=kt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=kt(t,this.array),n=kt(n,this.array),s=kt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,a){return e=e*this.data.stride+this.offset,this.normalized&&(t=kt(t,this.array),n=kt(n,this.array),s=kt(s,this.array),a=kt(a,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=a,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)t.push(this.data.array[s+a])}return new Xt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Ql(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)t.push(this.data.array[s+a])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Br=new ne,ef=new ne;class uo extends Yt{constructor(){super(),this._currentLevel=0,this.type="LOD",Object.defineProperties(this,{levels:{enumerable:!0,value:[]},isLOD:{value:!0}}),this.autoUpdate=!0}copy(e){super.copy(e,!1);const t=e.levels;for(let n=0,s=t.length;n<s;n++){const a=t[n];this.addLevel(a.object.clone(),a.distance,a.hysteresis)}return this.autoUpdate=e.autoUpdate,this}addLevel(e,t=0,n=0){t=Math.abs(t);const s=this.levels;let a;for(a=0;a<s.length&&!(t<s[a].distance);a++);return s.splice(a,0,{distance:t,hysteresis:n,object:e}),this.add(e),this}removeLevel(e){const t=this.levels;for(let n=0;n<t.length;n++)if(t[n].distance===e){const s=t.splice(n,1);return this.remove(s[0].object),!0}return!1}getCurrentLevel(){return this._currentLevel}getObjectForDistance(e){const t=this.levels;if(t.length>0){let n,s;for(n=1,s=t.length;n<s;n++){let a=t[n].distance;if(t[n].object.visible&&(a-=a*t[n].hysteresis),e<a)break}return t[n-1].object}return null}raycast(e,t){if(this.levels.length>0){Br.setFromMatrixPosition(this.matrixWorld);const s=e.ray.origin.distanceTo(Br);this.getObjectForDistance(s).raycast(e,t)}}update(e){const t=this.levels;if(t.length>1){Br.setFromMatrixPosition(e.matrixWorld),ef.setFromMatrixPosition(this.matrixWorld);const n=Br.distanceTo(ef)/e.zoom;t[0].object.visible=!0;let s,a;for(s=1,a=t.length;s<a;s++){let r=t[s].distance;if(t[s].object.visible&&(r-=r*t[s].hysteresis),n>=r)t[s-1].object.visible=!1,t[s].object.visible=!0;else break}for(this._currentLevel=s-1;s<a;s++)t[s].object.visible=!1}}toJSON(e){const t=super.toJSON(e);this.autoUpdate===!1&&(t.object.autoUpdate=!1),t.object.levels=[];const n=this.levels;for(let s=0,a=n.length;s<a;s++){const r=n[s];t.object.levels.push({object:r.object.uuid,distance:r.distance,hysteresis:r.hysteresis})}return t}}const tf=new ne,nf=new Dt,sf=new Dt,kb=new ne,af=new ot,Rr=new ne,sc=new Ei,rf=new ot,ac=new or;class Qb extends dt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=nh,this.bindMatrix=new ot,this.bindMatrixInverse=new ot,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Oi),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Rr),this.boundingBox.expandByPoint(Rr)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Ei),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Rr),this.boundingSphere.expandByPoint(Rr)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),sc.copy(this.boundingSphere),sc.applyMatrix4(s),e.ray.intersectsSphere(sc)!==!1&&(rf.copy(s).invert(),ac.copy(e.ray).applyMatrix4(rf),!(this.boundingBox!==null&&ac.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,ac)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Dt,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);const a=1/e.manhattanLength();a!==1/0?e.multiplyScalar(a):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===nh?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Kd?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,s=this.geometry;nf.fromBufferAttribute(s.attributes.skinIndex,e),sf.fromBufferAttribute(s.attributes.skinWeight,e),tf.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let a=0;a<4;a++){const r=sf.getComponent(a);if(r!==0){const o=nf.getComponent(a);af.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(kb.copy(tf).applyMatrix4(af),r)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Ru extends Yt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class cr extends tn{constructor(e=null,t=1,n=1,s,a,r,o,c,l=_n,h=_n,f,u){super(null,r,o,c,l,h,s,a,f,u),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const of=new ot,Ob=new ot;class Ol{constructor(e=[],t=[]){this.uuid=di(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new ot)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new ot;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let a=0,r=e.length;a<r;a++){const o=e[a]?e[a].matrixWorld:Ob;of.multiplyMatrices(o,t[a]),of.toArray(n,a*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new Ol(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new cr(t,e,e,ln,wn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){const a=e.bones[n];let r=t[a];r===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",a),r=new Ru),this.bones.push(r),this.boneInverses.push(new ot().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let s=0,a=t.length;s<a;s++){const r=t[s];e.bones.push(r.uuid);const o=n[s];e.boneInverses.push(o.toArray())}return e}}class fl extends Xt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const js=new ot,cf=new ot,Dr=[],lf=new Oi,zb=new ot,wa=new dt,Ca=new Ei;class jt extends dt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new fl(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,zb)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Oi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,js),lf.copy(e.boundingBox).applyMatrix4(js),this.boundingBox.union(lf)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ei),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,js),Ca.copy(e.boundingSphere).applyMatrix4(js),this.boundingSphere.union(Ca)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,a=n.length+1,r=e*a+1;for(let o=0;o<n.length;o++)n[o]=s[r+o]}raycast(e,t){const n=this.matrixWorld,s=this.count;if(wa.geometry=this.geometry,wa.material=this.material,wa.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ca.copy(this.boundingSphere),Ca.applyMatrix4(n),e.ray.intersectsSphere(Ca)!==!1))for(let a=0;a<s;a++){this.getMatrixAt(a,js),cf.multiplyMatrices(n,js),wa.matrixWorld=cf,wa.raycast(e,Dr);for(let r=0,o=Dr.length;r<o;r++){const c=Dr[r];c.instanceId=a,c.object=this,t.push(c)}Dr.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new fl(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new cr(new Float32Array(s*this.count),s,this.count,ns,wn));const a=this.morphTexture.source.data.data;let r=0;for(let l=0;l<n.length;l++)r+=n[l];const o=this.geometry.morphTargetsRelative?1:1-r,c=s*e;a[c]=o,a.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class Du extends si{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new Ne(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Ao=new ne,po=new ne,hf=new ot,Sa=new or,Lr=new Ei,rc=new ne,ff=new ne;class zl extends Yt{constructor(e=new It,t=new Du){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let s=1,a=t.count;s<a;s++)Ao.fromBufferAttribute(t,s-1),po.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Ao.distanceTo(po);e.setAttribute("lineDistance",new pt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,a=e.params.Line.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Lr.copy(n.boundingSphere),Lr.applyMatrix4(s),Lr.radius+=a,e.ray.intersectsSphere(Lr)===!1)return;hf.copy(s).invert(),Sa.copy(e.ray).applyMatrix4(hf);const o=a/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,h=n.index,u=n.attributes.position;if(h!==null){const d=Math.max(0,r.start),m=Math.min(h.count,r.start+r.count);for(let _=d,p=m-1;_<p;_+=l){const A=h.getX(_),b=h.getX(_+1),x=Pr(this,e,Sa,c,A,b);x&&t.push(x)}if(this.isLineLoop){const _=h.getX(m-1),p=h.getX(d),A=Pr(this,e,Sa,c,_,p);A&&t.push(A)}}else{const d=Math.max(0,r.start),m=Math.min(u.count,r.start+r.count);for(let _=d,p=m-1;_<p;_+=l){const A=Pr(this,e,Sa,c,_,_+1);A&&t.push(A)}if(this.isLineLoop){const _=Pr(this,e,Sa,c,m-1,d);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,r=s.length;a<r;a++){const o=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}}function Pr(i,e,t,n,s,a){const r=i.geometry.attributes.position;if(Ao.fromBufferAttribute(r,s),po.fromBufferAttribute(r,a),t.distanceSqToSegment(Ao,po,rc,ff)>n)return;rc.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(rc);if(!(c<e.near||c>e.far))return{distance:c,point:ff.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}const uf=new ne,df=new ne;class Gb extends zl{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let s=0,a=t.count;s<a;s+=2)uf.fromBufferAttribute(t,s),df.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+uf.distanceTo(df);e.setAttribute("lineDistance",new pt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Hb extends zl{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Lu extends si{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new Ne(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Af=new ot,ul=new or,Ur=new Ei,Fr=new ne;class Vb extends Yt{constructor(e=new It,t=new Lu){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,a=e.params.Points.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ur.copy(n.boundingSphere),Ur.applyMatrix4(s),Ur.radius+=a,e.ray.intersectsSphere(Ur)===!1)return;Af.copy(s).invert(),ul.copy(e.ray).applyMatrix4(Af);const o=a/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,f=n.attributes.position;if(l!==null){const u=Math.max(0,r.start),d=Math.min(l.count,r.start+r.count);for(let m=u,_=d;m<_;m++){const p=l.getX(m);Fr.fromBufferAttribute(f,p),pf(Fr,p,c,s,e,t,this)}}else{const u=Math.max(0,r.start),d=Math.min(f.count,r.start+r.count);for(let m=u,_=d;m<_;m++)Fr.fromBufferAttribute(f,m),pf(Fr,m,c,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,r=s.length;a<r;a++){const o=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}}function pf(i,e,t,n,s,a,r){const o=ul.distanceSqToPoint(i);if(o<t){const c=new ne;ul.closestPointToPoint(i,c),c.applyMatrix4(n);const l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;a.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:r})}}class yo extends tn{constructor(e,t,n,s,a,r,o,c,l,h,f,u){super(null,r,o,c,l,h,s,a,f,u),this.isCompressedTexture=!0,this.image={width:t,height:n},this.mipmaps=e,this.flipY=!1,this.generateMipmaps=!1}}class Wb extends yo{constructor(e,t,n,s,a,r){super(e,t,n,a,r),this.isCompressedArrayTexture=!0,this.image.depth=s,this.wrapR=Ui,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class jb extends yo{constructor(e,t,n){super(void 0,e[0].width,e[0].height,t,n,vs),this.isCompressedCubeTexture=!0,this.isCubeTexture=!0,this.image=e}}class qb extends tn{constructor(e,t,n,s,a,r,o,c,l){super(e,t,n,s,a,r,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Gl extends It{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);const a=[],r=[],o=[],c=[],l=new ne,h=new Ye;r.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let f=0,u=3;f<=t;f++,u+=3){const d=n+f/t*s;l.x=e*Math.cos(d),l.y=e*Math.sin(d),r.push(l.x,l.y,l.z),o.push(0,0,1),h.x=(r[u]/e+1)/2,h.y=(r[u+1]/e+1)/2,c.push(h.x,h.y)}for(let f=1;f<=t;f++)a.push(f,f+1,0);this.setIndex(a),this.setAttribute("position",new pt(r,3)),this.setAttribute("normal",new pt(o,3)),this.setAttribute("uv",new pt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Gl(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Nn extends It{constructor(e=1,t=1,n=1,s=32,a=1,r=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:a,openEnded:r,thetaStart:o,thetaLength:c};const l=this;s=Math.floor(s),a=Math.floor(a);const h=[],f=[],u=[],d=[];let m=0;const _=[],p=n/2;let A=0;b(),r===!1&&(e>0&&x(!0),t>0&&x(!1)),this.setIndex(h),this.setAttribute("position",new pt(f,3)),this.setAttribute("normal",new pt(u,3)),this.setAttribute("uv",new pt(d,2));function b(){const g=new ne,C=new ne;let w=0;const y=(t-e)/n;for(let S=0;S<=a;S++){const v=[],M=S/a,N=M*(t-e)+e;for(let T=0;T<=s;T++){const H=T/s,ie=H*c+o,ge=Math.sin(ie),ue=Math.cos(ie);C.x=N*ge,C.y=-M*n+p,C.z=N*ue,f.push(C.x,C.y,C.z),g.set(ge,y,ue).normalize(),u.push(g.x,g.y,g.z),d.push(H,1-M),v.push(m++)}_.push(v)}for(let S=0;S<s;S++)for(let v=0;v<a;v++){const M=_[v][S],N=_[v+1][S],T=_[v+1][S+1],H=_[v][S+1];(e>0||v!==0)&&(h.push(M,N,H),w+=3),(t>0||v!==a-1)&&(h.push(N,T,H),w+=3)}l.addGroup(A,w,0),A+=w}function x(g){const C=m,w=new Ye,y=new ne;let S=0;const v=g===!0?e:t,M=g===!0?1:-1;for(let T=1;T<=s;T++)f.push(0,p*M,0),u.push(0,M,0),d.push(.5,.5),m++;const N=m;for(let T=0;T<=s;T++){const ie=T/s*c+o,ge=Math.cos(ie),ue=Math.sin(ie);y.x=v*ue,y.y=p*M,y.z=v*ge,f.push(y.x,y.y,y.z),u.push(0,M,0),w.x=ge*.5+.5,w.y=ue*.5*M+.5,d.push(w.x,w.y),m++}for(let T=0;T<s;T++){const H=C+T,ie=N+T;g===!0?h.push(ie,ie+1,H):h.push(ie+1,ie,H),S+=3}l.addGroup(A,S,g===!0?1:2),A+=S}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Nn(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Zi extends Nn{constructor(e=1,t=1,n=32,s=1,a=!1,r=0,o=Math.PI*2){super(0,e,t,n,s,a,r,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:a,thetaStart:r,thetaLength:o}}static fromJSON(e){return new Zi(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class wo extends It{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};const a=[],r=[];o(s),l(n),h(),this.setAttribute("position",new pt(a,3)),this.setAttribute("normal",new pt(a.slice(),3)),this.setAttribute("uv",new pt(r,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(b){const x=new ne,g=new ne,C=new ne;for(let w=0;w<t.length;w+=3)d(t[w+0],x),d(t[w+1],g),d(t[w+2],C),c(x,g,C,b)}function c(b,x,g,C){const w=C+1,y=[];for(let S=0;S<=w;S++){y[S]=[];const v=b.clone().lerp(g,S/w),M=x.clone().lerp(g,S/w),N=w-S;for(let T=0;T<=N;T++)T===0&&S===w?y[S][T]=v:y[S][T]=v.clone().lerp(M,T/N)}for(let S=0;S<w;S++)for(let v=0;v<2*(w-S)-1;v++){const M=Math.floor(v/2);v%2===0?(u(y[S][M+1]),u(y[S+1][M]),u(y[S][M])):(u(y[S][M+1]),u(y[S+1][M+1]),u(y[S+1][M]))}}function l(b){const x=new ne;for(let g=0;g<a.length;g+=3)x.x=a[g+0],x.y=a[g+1],x.z=a[g+2],x.normalize().multiplyScalar(b),a[g+0]=x.x,a[g+1]=x.y,a[g+2]=x.z}function h(){const b=new ne;for(let x=0;x<a.length;x+=3){b.x=a[x+0],b.y=a[x+1],b.z=a[x+2];const g=p(b)/2/Math.PI+.5,C=A(b)/Math.PI+.5;r.push(g,1-C)}m(),f()}function f(){for(let b=0;b<r.length;b+=6){const x=r[b+0],g=r[b+2],C=r[b+4],w=Math.max(x,g,C),y=Math.min(x,g,C);w>.9&&y<.1&&(x<.2&&(r[b+0]+=1),g<.2&&(r[b+2]+=1),C<.2&&(r[b+4]+=1))}}function u(b){a.push(b.x,b.y,b.z)}function d(b,x){const g=b*3;x.x=e[g+0],x.y=e[g+1],x.z=e[g+2]}function m(){const b=new ne,x=new ne,g=new ne,C=new ne,w=new Ye,y=new Ye,S=new Ye;for(let v=0,M=0;v<a.length;v+=9,M+=6){b.set(a[v+0],a[v+1],a[v+2]),x.set(a[v+3],a[v+4],a[v+5]),g.set(a[v+6],a[v+7],a[v+8]),w.set(r[M+0],r[M+1]),y.set(r[M+2],r[M+3]),S.set(r[M+4],r[M+5]),C.copy(b).add(x).add(g).divideScalar(3);const N=p(C);_(w,M+0,b,N),_(y,M+2,x,N),_(S,M+4,g,N)}}function _(b,x,g,C){C<0&&b.x===1&&(r[x]=b.x-1),g.x===0&&g.z===0&&(r[x]=C/2/Math.PI+.5)}function p(b){return Math.atan2(b.z,-b.x)}function A(b){return Math.atan2(-b.y,Math.sqrt(b.x*b.x+b.z*b.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wo(e.vertices,e.indices,e.radius,e.details)}}const Yb={triangulate:function(i,e,t=2){const n=e&&e.length,s=n?e[0]*t:i.length;let a=Pu(i,0,s,t,!0);const r=[];if(!a||a.next===a.prev)return r;let o,c,l,h,f,u,d;if(n&&(a=$b(i,e,a,t)),i.length>80*t){o=l=i[0],c=h=i[1];for(let m=t;m<s;m+=t)f=i[m],u=i[m+1],f<o&&(o=f),u<c&&(c=u),f>l&&(l=f),u>h&&(h=u);d=Math.max(l-o,h-c),d=d!==0?32767/d:0}return nr(a,r,t,o,c,d,0),r}};function Pu(i,e,t,n,s){let a,r;if(s===hx(i,e,t,n)>0)for(a=e;a<t;a+=n)r=mf(a,i[a],i[a+1],r);else for(a=t-n;a>=e;a-=n)r=mf(a,i[a],i[a+1],r);return r&&Co(r,r.next)&&(sr(r),r=r.next),r}function Cs(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(Co(t,t.next)||Jt(t.prev,t,t.next)===0)){if(sr(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function nr(i,e,t,n,s,a,r){if(!i)return;!r&&a&&sx(i,n,s,a);let o=i,c,l;for(;i.prev!==i.next;){if(c=i.prev,l=i.next,a?Kb(i,n,s,a):Xb(i)){e.push(c.i/t|0),e.push(i.i/t|0),e.push(l.i/t|0),sr(i),i=l.next,o=l.next;continue}if(i=l,i===o){r?r===1?(i=Jb(Cs(i),e,t),nr(i,e,t,n,s,a,2)):r===2&&Zb(i,e,t,n,s,a):nr(Cs(i),e,t,n,s,a,1);break}}}function Xb(i){const e=i.prev,t=i,n=i.next;if(Jt(e,t,n)>=0)return!1;const s=e.x,a=t.x,r=n.x,o=e.y,c=t.y,l=n.y,h=s<a?s<r?s:r:a<r?a:r,f=o<c?o<l?o:l:c<l?c:l,u=s>a?s>r?s:r:a>r?a:r,d=o>c?o>l?o:l:c>l?c:l;let m=n.next;for(;m!==e;){if(m.x>=h&&m.x<=u&&m.y>=f&&m.y<=d&&$s(s,o,a,c,r,l,m.x,m.y)&&Jt(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function Kb(i,e,t,n){const s=i.prev,a=i,r=i.next;if(Jt(s,a,r)>=0)return!1;const o=s.x,c=a.x,l=r.x,h=s.y,f=a.y,u=r.y,d=o<c?o<l?o:l:c<l?c:l,m=h<f?h<u?h:u:f<u?f:u,_=o>c?o>l?o:l:c>l?c:l,p=h>f?h>u?h:u:f>u?f:u,A=dl(d,m,e,t,n),b=dl(_,p,e,t,n);let x=i.prevZ,g=i.nextZ;for(;x&&x.z>=A&&g&&g.z<=b;){if(x.x>=d&&x.x<=_&&x.y>=m&&x.y<=p&&x!==s&&x!==r&&$s(o,h,c,f,l,u,x.x,x.y)&&Jt(x.prev,x,x.next)>=0||(x=x.prevZ,g.x>=d&&g.x<=_&&g.y>=m&&g.y<=p&&g!==s&&g!==r&&$s(o,h,c,f,l,u,g.x,g.y)&&Jt(g.prev,g,g.next)>=0))return!1;g=g.nextZ}for(;x&&x.z>=A;){if(x.x>=d&&x.x<=_&&x.y>=m&&x.y<=p&&x!==s&&x!==r&&$s(o,h,c,f,l,u,x.x,x.y)&&Jt(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;g&&g.z<=b;){if(g.x>=d&&g.x<=_&&g.y>=m&&g.y<=p&&g!==s&&g!==r&&$s(o,h,c,f,l,u,g.x,g.y)&&Jt(g.prev,g,g.next)>=0)return!1;g=g.nextZ}return!0}function Jb(i,e,t){let n=i;do{const s=n.prev,a=n.next.next;!Co(s,a)&&Uu(s,n,n.next,a)&&ir(s,a)&&ir(a,s)&&(e.push(s.i/t|0),e.push(n.i/t|0),e.push(a.i/t|0),sr(n),sr(n.next),n=i=a),n=n.next}while(n!==i);return Cs(n)}function Zb(i,e,t,n,s,a){let r=i;do{let o=r.next.next;for(;o!==r.prev;){if(r.i!==o.i&&ox(r,o)){let c=Fu(r,o);r=Cs(r,r.next),c=Cs(c,c.next),nr(r,e,t,n,s,a,0),nr(c,e,t,n,s,a,0);return}o=o.next}r=r.next}while(r!==i)}function $b(i,e,t,n){const s=[];let a,r,o,c,l;for(a=0,r=e.length;a<r;a++)o=e[a]*n,c=a<r-1?e[a+1]*n:i.length,l=Pu(i,o,c,n,!1),l===l.next&&(l.steiner=!0),s.push(rx(l));for(s.sort(ex),a=0;a<s.length;a++)t=tx(s[a],t);return t}function ex(i,e){return i.x-e.x}function tx(i,e){const t=nx(i,e);if(!t)return e;const n=Fu(t,i);return Cs(n,n.next),Cs(t,t.next)}function nx(i,e){let t=e,n=-1/0,s;const a=i.x,r=i.y;do{if(r<=t.y&&r>=t.next.y&&t.next.y!==t.y){const u=t.x+(r-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=a&&u>n&&(n=u,s=t.x<t.next.x?t:t.next,u===a))return s}t=t.next}while(t!==e);if(!s)return null;const o=s,c=s.x,l=s.y;let h=1/0,f;t=s;do a>=t.x&&t.x>=c&&a!==t.x&&$s(r<l?a:n,r,c,l,r<l?n:a,r,t.x,t.y)&&(f=Math.abs(r-t.y)/(a-t.x),ir(t,i)&&(f<h||f===h&&(t.x>s.x||t.x===s.x&&ix(s,t)))&&(s=t,h=f)),t=t.next;while(t!==o);return s}function ix(i,e){return Jt(i.prev,i,e.prev)<0&&Jt(e.next,i,i.next)<0}function sx(i,e,t,n){let s=i;do s.z===0&&(s.z=dl(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,ax(s)}function ax(i){let e,t,n,s,a,r,o,c,l=1;do{for(t=i,i=null,a=null,r=0;t;){for(r++,n=t,o=0,e=0;e<l&&(o++,n=n.nextZ,!!n);e++);for(c=l;o>0||c>0&&n;)o!==0&&(c===0||!n||t.z<=n.z)?(s=t,t=t.nextZ,o--):(s=n,n=n.nextZ,c--),a?a.nextZ=s:i=s,s.prevZ=a,a=s;t=n}a.nextZ=null,l*=2}while(r>1);return i}function dl(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function rx(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function $s(i,e,t,n,s,a,r,o){return(s-r)*(e-o)>=(i-r)*(a-o)&&(i-r)*(n-o)>=(t-r)*(e-o)&&(t-r)*(a-o)>=(s-r)*(n-o)}function ox(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!cx(i,e)&&(ir(i,e)&&ir(e,i)&&lx(i,e)&&(Jt(i.prev,i,e.prev)||Jt(i,e.prev,e))||Co(i,e)&&Jt(i.prev,i,i.next)>0&&Jt(e.prev,e,e.next)>0)}function Jt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function Co(i,e){return i.x===e.x&&i.y===e.y}function Uu(i,e,t,n){const s=kr(Jt(i,e,t)),a=kr(Jt(i,e,n)),r=kr(Jt(t,n,i)),o=kr(Jt(t,n,e));return!!(s!==a&&r!==o||s===0&&Nr(i,t,e)||a===0&&Nr(i,n,e)||r===0&&Nr(t,i,n)||o===0&&Nr(t,e,n))}function Nr(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function kr(i){return i>0?1:i<0?-1:0}function cx(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&Uu(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function ir(i,e){return Jt(i.prev,i,i.next)<0?Jt(i,e,i.next)>=0&&Jt(i,i.prev,e)>=0:Jt(i,e,i.prev)<0||Jt(i,i.next,e)<0}function lx(i,e){let t=i,n=!1;const s=(i.x+e.x)/2,a=(i.y+e.y)/2;do t.y>a!=t.next.y>a&&t.next.y!==t.y&&s<(t.next.x-t.x)*(a-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function Fu(i,e){const t=new Al(i.i,i.x,i.y),n=new Al(e.i,e.x,e.y),s=i.next,a=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,a.next=n,n.prev=a,n}function mf(i,e,t,n){const s=new Al(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function sr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Al(i,e,t){this.i=i,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function hx(i,e,t,n){let s=0;for(let a=e,r=t-n;a<t;a+=n)s+=(i[r]-i[a])*(i[a+1]+i[r+1]),r=a;return s}class kn{static area(e){const t=e.length;let n=0;for(let s=t-1,a=0;a<t;s=a++)n+=e[s].x*e[a].y-e[a].x*e[s].y;return n*.5}static isClockWise(e){return kn.area(e)<0}static triangulateShape(e,t){const n=[],s=[],a=[];gf(e),bf(n,e);let r=e.length;t.forEach(gf);for(let c=0;c<t.length;c++)s.push(r),r+=t[c].length,bf(n,t[c]);const o=Yb.triangulate(n,s);for(let c=0;c<o.length;c+=3)a.push(o.slice(c,c+3));return a}}function gf(i){const e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function bf(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}class Hl extends wo{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],a=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,a,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Hl(e.radius,e.detail)}}class mo extends wo{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new mo(e.radius,e.detail)}}class Ni extends It{constructor(e=1,t=32,n=16,s=0,a=Math.PI*2,r=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:a,thetaStart:r,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(r+o,Math.PI);let l=0;const h=[],f=new ne,u=new ne,d=[],m=[],_=[],p=[];for(let A=0;A<=n;A++){const b=[],x=A/n;let g=0;A===0&&r===0?g=.5/t:A===n&&c===Math.PI&&(g=-.5/t);for(let C=0;C<=t;C++){const w=C/t;f.x=-e*Math.cos(s+w*a)*Math.sin(r+x*o),f.y=e*Math.cos(r+x*o),f.z=e*Math.sin(s+w*a)*Math.sin(r+x*o),m.push(f.x,f.y,f.z),u.copy(f).normalize(),_.push(u.x,u.y,u.z),p.push(w+g,1-x),b.push(l++)}h.push(b)}for(let A=0;A<n;A++)for(let b=0;b<t;b++){const x=h[A][b+1],g=h[A][b],C=h[A+1][b],w=h[A+1][b+1];(A!==0||r>0)&&d.push(x,g,w),(A!==n-1||c<Math.PI)&&d.push(g,C,w)}this.setIndex(d),this.setAttribute("position",new pt(m,3)),this.setAttribute("normal",new pt(_,3)),this.setAttribute("uv",new pt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ni(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Vl extends It{constructor(e=1,t=.4,n=12,s=48,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:a},n=Math.floor(n),s=Math.floor(s);const r=[],o=[],c=[],l=[],h=new ne,f=new ne,u=new ne;for(let d=0;d<=n;d++)for(let m=0;m<=s;m++){const _=m/s*a,p=d/n*Math.PI*2;f.x=(e+t*Math.cos(p))*Math.cos(_),f.y=(e+t*Math.cos(p))*Math.sin(_),f.z=t*Math.sin(p),o.push(f.x,f.y,f.z),h.x=e*Math.cos(_),h.y=e*Math.sin(_),u.subVectors(f,h).normalize(),c.push(u.x,u.y,u.z),l.push(m/s),l.push(d/n)}for(let d=1;d<=n;d++)for(let m=1;m<=s;m++){const _=(s+1)*d+m-1,p=(s+1)*(d-1)+m-1,A=(s+1)*(d-1)+m,b=(s+1)*d+m;r.push(_,p,b),r.push(p,A,b)}this.setIndex(r),this.setAttribute("position",new pt(o,3)),this.setAttribute("normal",new pt(c,3)),this.setAttribute("uv",new pt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vl(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class fx extends an{static get type(){return"RawShaderMaterial"}constructor(e){super(e),this.isRawShaderMaterial=!0}}class Ss extends si{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Ne(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ne(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=xo,this.normalScale=new Ye(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ai,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class vi extends Ss{static get type(){return"MeshPhysicalMaterial"}constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ye(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return gn(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ne(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ne(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ne(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class ux extends si{static get type(){return"MeshNormalMaterial"}constructor(e){super(),this.isMeshNormalMaterial=!0,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=xo,this.normalScale=new Ye(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}class ut extends si{static get type(){return"MeshLambertMaterial"}constructor(e){super(),this.isMeshLambertMaterial=!0,this.color=new Ne(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ne(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=xo,this.normalScale=new Ye(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ai,this.combine=wl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}function Qr(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function dx(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Ax(i){function e(s,a){return i[s]-i[a]}const t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function xf(i,e,t){const n=i.length,s=new i.constructor(n);for(let a=0,r=0;r!==n;++a){const o=t[a]*e;for(let c=0;c!==e;++c)s[r++]=i[o+c]}return s}function Nu(i,e,t,n){let s=1,a=i[0];for(;a!==void 0&&a[n]===void 0;)a=i[s++];if(a===void 0)return;let r=a[n];if(r!==void 0)if(Array.isArray(r))do r=a[n],r!==void 0&&(e.push(a.time),t.push.apply(t,r)),a=i[s++];while(a!==void 0);else if(r.toArray!==void 0)do r=a[n],r!==void 0&&(e.push(a.time),r.toArray(t,t.length)),a=i[s++];while(a!==void 0);else do r=a[n],r!==void 0&&(e.push(a.time),t.push(r)),a=i[s++];while(a!==void 0)}class lr{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,s=t[n],a=t[n-1];n:{e:{let r;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<a)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(a=s,s=t[++n],e<s)break e}r=t.length;break t}if(!(e>=a)){const o=t[1];e<o&&(n=2,a=o);for(let c=n-2;;){if(a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=a,a=t[--n-1],e>=a)break e}r=n,n=0;break t}break n}for(;n<r;){const o=n+r>>>1;e<t[o]?r=o:n=o+1}if(s=t[n],a=t[n-1],a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,a,s)}return this.interpolate_(n,a,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,a=e*s;for(let r=0;r!==s;++r)t[r]=n[a+r];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class px extends lr{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ih,endingEnd:ih}}intervalChanged_(e,t,n){const s=this.parameterPositions;let a=e-2,r=e+1,o=s[a],c=s[r];if(o===void 0)switch(this.getSettings_().endingStart){case sh:a=e,o=2*t-n;break;case ah:a=s.length-2,o=t+s[a]-s[a+1];break;default:a=e,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case sh:r=e,c=2*n-t;break;case ah:r=1,c=n+s[1]-s[0];break;default:r=e-1,c=t}const l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-n),this._offsetPrev=a*h,this._offsetNext=r*h}interpolate_(e,t,n,s){const a=this.resultBuffer,r=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=this._offsetPrev,f=this._offsetNext,u=this._weightPrev,d=this._weightNext,m=(n-t)/(s-t),_=m*m,p=_*m,A=-u*p+2*u*_-u*m,b=(1+u)*p+(-1.5-2*u)*_+(-.5+u)*m+1,x=(-1-d)*p+(1.5+d)*_+.5*m,g=d*p-d*_;for(let C=0;C!==o;++C)a[C]=A*r[h+C]+b*r[l+C]+x*r[c+C]+g*r[f+C];return a}}class mx extends lr{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){const a=this.resultBuffer,r=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=(n-t)/(s-t),f=1-h;for(let u=0;u!==o;++u)a[u]=r[l+u]*f+r[c+u]*h;return a}}class gx extends lr{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}}class Mi{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Qr(t,this.TimeBufferType),this.values=Qr(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Qr(e.times,Array),values:Qr(e.values,Array)};const s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new gx(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new mx(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new px(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case $a:t=this.InterpolantFactoryMethodDiscrete;break;case er:t=this.InterpolantFactoryMethodLinear;break;case Bo:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return $a;case this.InterpolantFactoryMethodLinear:return er;case this.InterpolantFactoryMethodSmooth:return Bo}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){const n=this.times,s=n.length;let a=0,r=s-1;for(;a!==s&&n[a]<e;)++a;for(;r!==-1&&n[r]>t;)--r;if(++r,a!==0||r!==s){a>=r&&(r=Math.max(r,1),a=r-1);const o=this.getValueSize();this.times=n.slice(a,r),this.values=this.values.slice(a*o,r*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,s=this.values,a=n.length;a===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let r=null;for(let o=0;o!==a;o++){const c=n[o];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(r!==null&&r>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,c,r),e=!1;break}r=c}if(s!==void 0&&dx(s))for(let o=0,c=s.length;o!==c;++o){const l=s[o];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Bo,a=e.length-1;let r=1;for(let o=1;o<a;++o){let c=!1;const l=e[o],h=e[o+1];if(l!==h&&(o!==1||l!==e[0]))if(s)c=!0;else{const f=o*n,u=f-n,d=f+n;for(let m=0;m!==n;++m){const _=t[f+m];if(_!==t[u+m]||_!==t[d+m]){c=!0;break}}}if(c){if(o!==r){e[r]=e[o];const f=o*n,u=r*n;for(let d=0;d!==n;++d)t[u+d]=t[f+d]}++r}}if(a>0){e[r]=e[a];for(let o=a*n,c=r*n,l=0;l!==n;++l)t[c+l]=t[o+l];++r}return r!==e.length?(this.times=e.slice(0,r),this.values=t.slice(0,r*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}}Mi.prototype.TimeBufferType=Float32Array;Mi.prototype.ValueBufferType=Float32Array;Mi.prototype.DefaultInterpolation=er;class xa extends Mi{constructor(e,t,n){super(e,t,n)}}xa.prototype.ValueTypeName="bool";xa.prototype.ValueBufferType=Array;xa.prototype.DefaultInterpolation=$a;xa.prototype.InterpolantFactoryMethodLinear=void 0;xa.prototype.InterpolantFactoryMethodSmooth=void 0;class ku extends Mi{}ku.prototype.ValueTypeName="color";class da extends Mi{}da.prototype.ValueTypeName="number";class bx extends lr{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){const a=this.resultBuffer,r=this.sampleValues,o=this.valueSize,c=(n-t)/(s-t);let l=e*o;for(let h=l+o;l!==h;l+=4)qt.slerpFlat(a,0,r,l-o,r,l,c);return a}}class Aa extends Mi{InterpolantFactoryMethodLinear(e){return new bx(this.times,this.values,this.getValueSize(),e)}}Aa.prototype.ValueTypeName="quaternion";Aa.prototype.InterpolantFactoryMethodSmooth=void 0;class _a extends Mi{constructor(e,t,n){super(e,t,n)}}_a.prototype.ValueTypeName="string";_a.prototype.ValueBufferType=Array;_a.prototype.DefaultInterpolation=$a;_a.prototype.InterpolantFactoryMethodLinear=void 0;_a.prototype.InterpolantFactoryMethodSmooth=void 0;class pa extends Mi{}pa.prototype.ValueTypeName="vector";class xx{constructor(e="",t=-1,n=[],s=Jd){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=di(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,s=1/(e.fps||1);for(let r=0,o=n.length;r!==o;++r)t.push(Ex(n[r]).scale(s));const a=new this(e.name,e.duration,t,e.blendMode);return a.uuid=e.uuid,a}static toJSON(e){const t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let a=0,r=n.length;a!==r;++a)t.push(Mi.toJSON(n[a]));return s}static CreateFromMorphTargetSequence(e,t,n,s){const a=t.length,r=[];for(let o=0;o<a;o++){let c=[],l=[];c.push((o+a-1)%a,o,(o+1)%a),l.push(0,1,0);const h=Ax(c);c=xf(c,1,h),l=xf(l,1,h),!s&&c[0]===0&&(c.push(a),l.push(l[0])),r.push(new da(".morphTargetInfluences["+t[o].name+"]",c,l).scale(1/n))}return new this(e,-1,r)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const s={},a=/^([\w-]*?)([\d]+)$/;for(let o=0,c=e.length;o<c;o++){const l=e[o],h=l.name.match(a);if(h&&h.length>1){const f=h[1];let u=s[f];u||(s[f]=u=[]),u.push(l)}}const r=[];for(const o in s)r.push(this.CreateFromMorphTargetSequence(o,s[o],t,n));return r}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(f,u,d,m,_){if(d.length!==0){const p=[],A=[];Nu(d,p,A,m),p.length!==0&&_.push(new f(u,p,A))}},s=[],a=e.name||"default",r=e.fps||30,o=e.blendMode;let c=e.length||-1;const l=e.hierarchy||[];for(let f=0;f<l.length;f++){const u=l[f].keys;if(!(!u||u.length===0))if(u[0].morphTargets){const d={};let m;for(m=0;m<u.length;m++)if(u[m].morphTargets)for(let _=0;_<u[m].morphTargets.length;_++)d[u[m].morphTargets[_]]=-1;for(const _ in d){const p=[],A=[];for(let b=0;b!==u[m].morphTargets.length;++b){const x=u[m];p.push(x.time),A.push(x.morphTarget===_?1:0)}s.push(new da(".morphTargetInfluence["+_+"]",p,A))}c=d.length*r}else{const d=".bones["+t[f].name+"]";n(pa,d+".position",u,"pos",s),n(Aa,d+".quaternion",u,"rot",s),n(pa,d+".scale",u,"scl",s)}}return s.length===0?null:new this(a,c,s,o)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,s=e.length;n!==s;++n){const a=this.tracks[n];t=Math.max(t,a.times[a.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function _x(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return da;case"vector":case"vector2":case"vector3":case"vector4":return pa;case"color":return ku;case"quaternion":return Aa;case"bool":case"boolean":return xa;case"string":return _a}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function Ex(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=_x(i.type);if(i.times===void 0){const t=[],n=[];Nu(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}const is={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class vx{constructor(e,t,n){const s=this;let a=!1,r=0,o=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){o++,a===!1&&s.onStart!==void 0&&s.onStart(h,r,o),a=!0},this.itemEnd=function(h){r++,s.onProgress!==void 0&&s.onProgress(h,r,o),r===o&&(a=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,f){return l.push(h,f),this},this.removeHandler=function(h){const f=l.indexOf(h);return f!==-1&&l.splice(f,2),this},this.getHandler=function(h){for(let f=0,u=l.length;f<u;f+=2){const d=l[f],m=l[f+1];if(d.global&&(d.lastIndex=0),d.test(h))return m}return null}}}const Mx=new vx;class Ts{constructor(e){this.manager=e!==void 0?e:Mx,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(s,a){n.load(e,s,t,a)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Ts.DEFAULT_MATERIAL_NAME="__DEFAULT";const Bi={};class yx extends Error{constructor(e,t){super(e),this.response=t}}class Va extends Ts{constructor(e){super(e)}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const a=is.get(e);if(a!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(a),this.manager.itemEnd(e)},0),a;if(Bi[e]!==void 0){Bi[e].push({onLoad:t,onProgress:n,onError:s});return}Bi[e]=[],Bi[e].push({onLoad:t,onProgress:n,onError:s});const r=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,c=this.responseType;fetch(r).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const h=Bi[e],f=l.body.getReader(),u=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),d=u?parseInt(u):0,m=d!==0;let _=0;const p=new ReadableStream({start(A){b();function b(){f.read().then(({done:x,value:g})=>{if(x)A.close();else{_+=g.byteLength;const C=new ProgressEvent("progress",{lengthComputable:m,loaded:_,total:d});for(let w=0,y=h.length;w<y;w++){const S=h[w];S.onProgress&&S.onProgress(C)}A.enqueue(g),b()}},x=>{A.error(x)})}}});return new Response(p)}else throw new yx(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return l.json();default:if(o===void 0)return l.text();{const f=/charset="?([^;"\s]*)"?/i.exec(o),u=f&&f[1]?f[1].toLowerCase():void 0,d=new TextDecoder(u);return l.arrayBuffer().then(m=>d.decode(m))}}}).then(l=>{is.add(e,l);const h=Bi[e];delete Bi[e];for(let f=0,u=h.length;f<u;f++){const d=h[f];d.onLoad&&d.onLoad(l)}}).catch(l=>{const h=Bi[e];if(h===void 0)throw this.manager.itemError(e),l;delete Bi[e];for(let f=0,u=h.length;f<u;f++){const d=h[f];d.onError&&d.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class wx extends Ts{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const a=this,r=is.get(e);if(r!==void 0)return a.manager.itemStart(e),setTimeout(function(){t&&t(r),a.manager.itemEnd(e)},0),r;const o=tr("img");function c(){h(),is.add(e,this),t&&t(this),a.manager.itemEnd(e)}function l(f){h(),s&&s(f),a.manager.itemError(e),a.manager.itemEnd(e)}function h(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),a.manager.itemStart(e),o.src=e,o}}class Wl extends Ts{constructor(e){super(e)}load(e,t,n,s){const a=new tn,r=new wx(this.manager);return r.setCrossOrigin(this.crossOrigin),r.setPath(this.path),r.load(e,function(o){a.image=o,a.needsUpdate=!0,t!==void 0&&t(a)},n,s),a}}class So extends Yt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ne(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class _f extends So{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Yt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ne(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const oc=new ot,Ef=new ne,vf=new ne;class jl{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ye(512,512),this.map=null,this.mapPass=null,this.matrix=new ot,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Fl,this._frameExtents=new Ye(1,1),this._viewportCount=1,this._viewports=[new Dt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Ef.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ef),vf.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(vf),t.updateMatrixWorld(),oc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(oc),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(oc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Cx extends jl{constructor(){super(new Rn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=ha*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,a=e.distance||t.far;(n!==t.fov||s!==t.aspect||a!==t.far)&&(t.fov=n,t.aspect=s,t.far=a,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Sx extends So{constructor(e,t,n=0,s=Math.PI/3,a=0,r=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Yt.DEFAULT_UP),this.updateMatrix(),this.target=new Yt,this.distance=n,this.angle=s,this.penumbra=a,this.decay=r,this.map=null,this.shadow=new Cx}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Mf=new ot,Ia=new ne,cc=new ne;class Ix extends jl{constructor(){super(new Rn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ye(4,2),this._viewportCount=6,this._viewports=[new Dt(2,1,1,1),new Dt(0,1,1,1),new Dt(3,1,1,1),new Dt(1,1,1,1),new Dt(3,0,1,1),new Dt(1,0,1,1)],this._cubeDirections=[new ne(1,0,0),new ne(-1,0,0),new ne(0,0,1),new ne(0,0,-1),new ne(0,1,0),new ne(0,-1,0)],this._cubeUps=[new ne(0,1,0),new ne(0,1,0),new ne(0,1,0),new ne(0,1,0),new ne(0,0,1),new ne(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,s=this.matrix,a=e.distance||n.far;a!==n.far&&(n.far=a,n.updateProjectionMatrix()),Ia.setFromMatrixPosition(e.matrixWorld),n.position.copy(Ia),cc.copy(n.position),cc.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(cc),n.updateMatrixWorld(),s.makeTranslation(-Ia.x,-Ia.y,-Ia.z),Mf.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Mf)}}class Tx extends So{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Ix}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Bx extends jl{constructor(){super(new Eo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Qu extends So{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Yt.DEFAULT_UP),this.updateMatrix(),this.target=new Yt,this.shadow=new Bx}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Wa{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,s=e.length;n<s;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class Rx extends Ts{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const a=this,r=is.get(e);if(r!==void 0){if(a.manager.itemStart(e),r.then){r.then(l=>{t&&t(l),a.manager.itemEnd(e)}).catch(l=>{s&&s(l)});return}return setTimeout(function(){t&&t(r),a.manager.itemEnd(e)},0),r}const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader;const c=fetch(e,o).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(a.options,{colorSpaceConversion:"none"}))}).then(function(l){return is.add(e,l),t&&t(l),a.manager.itemEnd(e),l}).catch(function(l){s&&s(l),is.remove(e),a.manager.itemError(e),a.manager.itemEnd(e)});is.add(e,c),a.manager.itemStart(e)}}class Dx{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=yf(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=yf();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function yf(){return performance.now()}const ql="\\[\\]\\.:\\/",Lx=new RegExp("["+ql+"]","g"),Yl="[^"+ql+"]",Px="[^"+ql.replace("\\.","")+"]",Ux=/((?:WC+[\/:])*)/.source.replace("WC",Yl),Fx=/(WCOD+)?/.source.replace("WCOD",Px),Nx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Yl),kx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Yl),Qx=new RegExp("^"+Ux+Fx+Nx+kx+"$"),Ox=["material","materials","bones","map"];class zx{constructor(e,t,n){const s=n||Qt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,a=n.length;s!==a;++s)n[s].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class Qt{constructor(e,t,n){this.path=t,this.parsedPath=n||Qt.parseTrackName(t),this.node=Qt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new Qt.Composite(e,t,n):new Qt(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Lx,"")}static parseTrackName(e){const t=Qx.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){const a=n.nodeName.substring(s+1);Ox.indexOf(a)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=a)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(a){for(let r=0;r<a.length;r++){const o=a[r];if(o.name===t||o.uuid===t)return o;const c=n(o.children);if(c)return c}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let s=0,a=n.length;s!==a;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let s=0,a=n.length;s!==a;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let s=0,a=n.length;s!==a;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let s=0,a=n.length;s!==a;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,s=t.propertyName;let a=t.propertyIndex;if(e||(e=Qt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}const r=e[s];if(r===void 0){const l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(a!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[a]!==void 0&&(a=e.morphTargetDictionary[a])}c=this.BindingType.ArrayElement,this.resolvedProperty=r,this.propertyIndex=a}else r.fromArray!==void 0&&r.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=r):Array.isArray(r)?(c=this.BindingType.EntireArray,this.resolvedProperty=r):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Qt.Composite=zx;Qt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Qt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Qt.prototype.GetterByBindingType=[Qt.prototype._getValue_direct,Qt.prototype._getValue_array,Qt.prototype._getValue_arrayElement,Qt.prototype._getValue_toArray];Qt.prototype.SetterByBindingTypeAndVersioning=[[Qt.prototype._setValue_direct,Qt.prototype._setValue_direct_setNeedsUpdate,Qt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Qt.prototype._setValue_array,Qt.prototype._setValue_array_setNeedsUpdate,Qt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Qt.prototype._setValue_arrayElement,Qt.prototype._setValue_arrayElement_setNeedsUpdate,Qt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Qt.prototype._setValue_fromArray,Qt.prototype._setValue_fromArray_setNeedsUpdate,Qt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class wf{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(gn(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Gx extends Is{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ml}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ml);const Cf={type:"change"},Xl={type:"start"},Ou={type:"end"},Or=new or,Sf=new Ji,Hx=Math.cos(70*sn.DEG2RAD),rn=new ne,Un=2*Math.PI,Ht={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},lc=1e-6;class Vx extends Gx{constructor(e,t=null){super(e,t),this.state=Ht.NONE,this.enabled=!0,this.target=new ne,this.cursor=new ne,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ki.ROTATE,MIDDLE:ki.DOLLY,RIGHT:ki.PAN},this.touches={ONE:ts.ROTATE,TWO:ts.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new ne,this._lastQuaternion=new qt,this._lastTargetPosition=new ne,this._quat=new qt().setFromUnitVectors(e.up,new ne(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new wf,this._sphericalDelta=new wf,this._scale=1,this._panOffset=new ne,this._rotateStart=new Ye,this._rotateEnd=new Ye,this._rotateDelta=new Ye,this._panStart=new Ye,this._panEnd=new Ye,this._panDelta=new Ye,this._dollyStart=new Ye,this._dollyEnd=new Ye,this._dollyDelta=new Ye,this._dollyDirection=new ne,this._mouse=new Ye,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=jx.bind(this),this._onPointerDown=Wx.bind(this),this._onPointerUp=qx.bind(this),this._onContextMenu=e_.bind(this),this._onMouseWheel=Kx.bind(this),this._onKeyDown=Jx.bind(this),this._onTouchStart=Zx.bind(this),this._onTouchMove=$x.bind(this),this._onMouseDown=Yx.bind(this),this._onMouseMove=Xx.bind(this),this._interceptControlDown=t_.bind(this),this._interceptControlUp=n_.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Cf),this.update(),this.state=Ht.NONE}update(e=null){const t=this.object.position;rn.copy(t).sub(this.target),rn.applyQuaternion(this._quat),this._spherical.setFromVector3(rn),this.autoRotate&&this.state===Ht.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=Un:n>Math.PI&&(n-=Un),s<-Math.PI?s+=Un:s>Math.PI&&(s-=Un),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let a=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const r=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),a=r!=this._spherical.radius}if(rn.setFromSpherical(this._spherical),rn.applyQuaternion(this._quatInverse),t.copy(this.target).add(rn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let r=null;if(this.object.isPerspectiveCamera){const o=rn.length();r=this._clampDistance(o*this._scale);const c=o-r;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),a=!!c}else if(this.object.isOrthographicCamera){const o=new ne(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),a=c!==this.object.zoom;const l=new ne(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(o),this.object.updateMatrixWorld(),r=rn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;r!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(r).add(this.object.position):(Or.origin.copy(this.object.position),Or.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Or.direction))<Hx?this.object.lookAt(this.target):(Sf.setFromNormalAndCoplanarPoint(this.object.up,this.target),Or.intersectPlane(Sf,this.target))))}else if(this.object.isOrthographicCamera){const r=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),r!==this.object.zoom&&(this.object.updateProjectionMatrix(),a=!0)}return this._scale=1,this._performCursorZoom=!1,a||this._lastPosition.distanceToSquared(this.object.position)>lc||8*(1-this._lastQuaternion.dot(this.object.quaternion))>lc||this._lastTargetPosition.distanceToSquared(this.target)>lc?(this.dispatchEvent(Cf),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Un/60*this.autoRotateSpeed*e:Un/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){rn.setFromMatrixColumn(t,0),rn.multiplyScalar(-e),this._panOffset.add(rn)}_panUp(e,t){this.screenSpacePanning===!0?rn.setFromMatrixColumn(t,1):(rn.setFromMatrixColumn(t,0),rn.crossVectors(this.object.up,rn)),rn.multiplyScalar(e),this._panOffset.add(rn)}_pan(e,t){const n=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;rn.copy(s).sub(this.target);let a=rn.length();a*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*a/n.clientHeight,this.object.matrix),this._panUp(2*t*a/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),s=e-n.left,a=t-n.top,r=n.width,o=n.height;this._mouse.x=s/r*2-1,this._mouse.y=-(a/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Un*this._rotateDelta.x/t.clientHeight),this._rotateUp(Un*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(Un*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(-Un*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(Un*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(-Un*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(n,s)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,a=Math.sqrt(n*n+s*s);this._dollyStart.set(0,a)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),s=.5*(e.pageX+n.x),a=.5*(e.pageY+n.y);this._rotateEnd.set(s,a)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Un*this._rotateDelta.x/t.clientHeight),this._rotateUp(Un*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,a=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,a),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const r=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(r,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Ye,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function Wx(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function jx(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function qx(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Ou),this.state=Ht.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function Yx(i){let e;switch(i.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case ki.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=Ht.DOLLY;break;case ki.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Ht.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Ht.ROTATE}break;case ki.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Ht.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Ht.PAN}break;default:this.state=Ht.NONE}this.state!==Ht.NONE&&this.dispatchEvent(Xl)}function Xx(i){switch(this.state){case Ht.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case Ht.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case Ht.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function Kx(i){this.enabled===!1||this.enableZoom===!1||this.state!==Ht.NONE||(i.preventDefault(),this.dispatchEvent(Xl),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(Ou))}function Jx(i){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(i)}function Zx(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case ts.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=Ht.TOUCH_ROTATE;break;case ts.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=Ht.TOUCH_PAN;break;default:this.state=Ht.NONE}break;case 2:switch(this.touches.TWO){case ts.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=Ht.TOUCH_DOLLY_PAN;break;case ts.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=Ht.TOUCH_DOLLY_ROTATE;break;default:this.state=Ht.NONE}break;default:this.state=Ht.NONE}this.state!==Ht.NONE&&this.dispatchEvent(Xl)}function $x(i){switch(this._trackPointer(i),this.state){case Ht.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case Ht.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case Ht.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case Ht.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=Ht.NONE}}function e_(i){this.enabled!==!1&&i.preventDefault()}function t_(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function n_(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}class i_ extends Vx{constructor(e,t){super(e,t),this.screenSpacePanning=!1,this.mouseButtons={LEFT:ki.PAN,MIDDLE:ki.DOLLY,RIGHT:ki.ROTATE},this.touches={ONE:ts.PAN,TWO:ts.DOLLY_ROTATE}}}function ma(i,e=!1){const t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),a={},r={},o=i[0].morphTargetsRelative,c=new It;let l=0;for(let h=0;h<i.length;++h){const f=i[h];let u=0;if(t!==(f.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const d in f.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;a[d]===void 0&&(a[d]=[]),a[d].push(f.attributes[d]),u++}if(u!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==f.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const d in f.morphAttributes){if(!s.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;r[d]===void 0&&(r[d]=[]),r[d].push(f.morphAttributes[d])}if(e){let d;if(t)d=f.index.count;else if(f.attributes.position!==void 0)d=f.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,d,h),l+=d}}if(t){let h=0;const f=[];for(let u=0;u<i.length;++u){const d=i[u].index;for(let m=0;m<d.count;++m)f.push(d.getX(m)+h);h+=i[u].attributes.position.count}c.setIndex(f)}for(const h in a){const f=If(a[h]);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,f)}for(const h in r){const f=r[h][0].length;if(f===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let u=0;u<f;++u){const d=[];for(let _=0;_<r[h].length;++_)d.push(r[h][_][u]);const m=If(d);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(m)}}return c}function If(i){let e,t,n,s=-1,a=0;for(let l=0;l<i.length;++l){const h=i[l];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;a+=h.count*t}const r=new e(a),o=new Xt(r,t,n);let c=0;for(let l=0;l<i.length;++l){const h=i[l];if(h.isInterleavedBufferAttribute){const f=c/t;for(let u=0,d=h.count;u<d;u++)for(let m=0;m<t;m++){const _=h.getComponent(u,m);o.setComponent(u+f,m,_)}}else r.set(h.array,c);c+=h.count*t}return s!==void 0&&(o.gpuType=s),o}function Tf(i,e){if(e===Zd)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===cl||e===pu){let t=i.getIndex();if(t===null){const r=[],o=i.getAttribute("position");if(o!==void 0){for(let c=0;c<o.count;c++)r.push(c);i.setIndex(r),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}const n=t.count-2,s=[];if(e===cl)for(let r=1;r<=n;r++)s.push(t.getX(0)),s.push(t.getX(r)),s.push(t.getX(r+1));else for(let r=0;r<n;r++)r%2===0?(s.push(t.getX(r)),s.push(t.getX(r+1)),s.push(t.getX(r+2))):(s.push(t.getX(r+2)),s.push(t.getX(r+1)),s.push(t.getX(r)));s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const a=i.clone();return a.setIndex(s),a.clearGroups(),a}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}const ja={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class Bs{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const s_=new Eo(-1,1,1,-1,0,1);class a_ extends It{constructor(){super(),this.setAttribute("position",new pt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new pt([0,2,0,0,2,0],2))}}const r_=new a_;class Io{constructor(e){this._mesh=new dt(r_,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,s_)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class To extends Bs{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof an?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=xi.clone(e.uniforms),this.material=new an({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Io(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Bf extends Bs{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const s=e.getContext(),a=e.state;a.buffers.color.setMask(!1),a.buffers.depth.setMask(!1),a.buffers.color.setLocked(!0),a.buffers.depth.setLocked(!0);let r,o;this.inverse?(r=0,o=1):(r=1,o=0),a.buffers.stencil.setTest(!0),a.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),a.buffers.stencil.setFunc(s.ALWAYS,r,4294967295),a.buffers.stencil.setClear(o),a.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),a.buffers.color.setLocked(!1),a.buffers.depth.setLocked(!1),a.buffers.color.setMask(!0),a.buffers.depth.setMask(!0),a.buffers.stencil.setLocked(!1),a.buffers.stencil.setFunc(s.EQUAL,1,4294967295),a.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),a.buffers.stencil.setLocked(!0)}}class o_ extends Bs{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class c_{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const n=e.getSize(new Ye);this._width=n.width,this._height=n.height,t=new Kn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:bn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new To(ja),this.copyPass.material.blending=mn,this.clock=new Dx}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let s=0,a=this.passes.length;s<a;s++){const r=this.passes[s];if(r.enabled!==!1){if(r.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),r.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),r.needsSwap){if(n){const o=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),c.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Bf!==void 0&&(r instanceof Bf?n=!0:r instanceof o_&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new Ye);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let a=0;a<this.passes.length;a++)this.passes[a].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class l_ extends Bs{constructor(e,t,n=null,s=null,a=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=a,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Ne}render(e,t,n){const s=e.autoClear;e.autoClear=!1;let a,r;this.overrideMaterial!==null&&(r=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(a=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(a),this.overrideMaterial!==null&&(this.scene.overrideMaterial=r),e.autoClear=s}}const zr={defines:{PERSPECTIVE_CAMERA:1,SAMPLES:16,NORMAL_VECTOR_TYPE:1,DEPTH_SWIZZLING:"x",SCREEN_SPACE_RADIUS:0,SCREEN_SPACE_RADIUS_SCALE:100,SCENE_CLIP_BOX:0},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new Ye},cameraNear:{value:null},cameraFar:{value:null},cameraProjectionMatrix:{value:new ot},cameraProjectionMatrixInverse:{value:new ot},cameraWorldMatrix:{value:new ot},radius:{value:.25},distanceExponent:{value:1},thickness:{value:1},distanceFallOff:{value:1},scale:{value:1},sceneBoxMin:{value:new ne(-1,-1,-1)},sceneBoxMax:{value:new ne(1,1,1)}},vertexShader:`

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
		}`},Gr={defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`
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

		}`},hc={uniforms:{tDiffuse:{value:null},intensity:{value:1}},vertexShader:`
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
		}`};function h_(i=5){const e=Math.floor(i)%2===0?Math.floor(i)+1:Math.floor(i),t=f_(e),n=t.length,s=new Uint8Array(n*4);for(let r=0;r<n;++r){const o=t[r],c=2*Math.PI*o/n,l=new ne(Math.cos(c),Math.sin(c),0).normalize();s[r*4]=(l.x*.5+.5)*255,s[r*4+1]=(l.y*.5+.5)*255,s[r*4+2]=127,s[r*4+3]=255}const a=new cr(s,e,e);return a.wrapS=Jn,a.wrapT=Jn,a.needsUpdate=!0,a}function f_(i){const e=Math.floor(i)%2===0?Math.floor(i)+1:Math.floor(i),t=e*e,n=Array(t).fill(0);let s=Math.floor(e/2),a=e-1;for(let r=1;r<=t;){if(s===-1&&a===e?(a=e-2,s=0):(a===e&&(a=0),s<0&&(s=e-1)),n[s*e+a]!==0){a-=2,s++;continue}else n[s*e+a]=r++;a++,s--}return n}const Hr={defines:{SAMPLES:16,SAMPLE_VECTORS:zu(16,2,1),NORMAL_VECTOR_TYPE:1,DEPTH_VALUE_SOURCE:0},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new Ye},cameraProjectionMatrixInverse:{value:new ot},lumaPhi:{value:5},depthPhi:{value:5},normalPhi:{value:5},radius:{value:4},index:{value:0}},vertexShader:`

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
		}`};function zu(i,e,t){const n=u_(i,e,t);let s="vec3[SAMPLES](";for(let a=0;a<i;a++){const r=n[a];s+=`vec3(${r.x}, ${r.y}, ${r.z})${a<i-1?",":")"}`}return s}function u_(i,e,t){const n=[];for(let s=0;s<i;s++){const a=2*Math.PI*e*s/i,r=Math.pow(s/(i-1),t);n.push(new ne(Math.cos(a),Math.sin(a),r))}return n}class d_{constructor(e=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let t=0;t<256;t++)this.p[t]=Math.floor(e.random()*256);this.perm=[];for(let t=0;t<512;t++)this.perm[t]=this.p[t&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}dot(e,t,n){return e[0]*t+e[1]*n}dot3(e,t,n,s){return e[0]*t+e[1]*n+e[2]*s}dot4(e,t,n,s,a){return e[0]*t+e[1]*n+e[2]*s+e[3]*a}noise(e,t){let n,s,a;const r=.5*(Math.sqrt(3)-1),o=(e+t)*r,c=Math.floor(e+o),l=Math.floor(t+o),h=(3-Math.sqrt(3))/6,f=(c+l)*h,u=c-f,d=l-f,m=e-u,_=t-d;let p,A;m>_?(p=1,A=0):(p=0,A=1);const b=m-p+h,x=_-A+h,g=m-1+2*h,C=_-1+2*h,w=c&255,y=l&255,S=this.perm[w+this.perm[y]]%12,v=this.perm[w+p+this.perm[y+A]]%12,M=this.perm[w+1+this.perm[y+1]]%12;let N=.5-m*m-_*_;N<0?n=0:(N*=N,n=N*N*this.dot(this.grad3[S],m,_));let T=.5-b*b-x*x;T<0?s=0:(T*=T,s=T*T*this.dot(this.grad3[v],b,x));let H=.5-g*g-C*C;return H<0?a=0:(H*=H,a=H*H*this.dot(this.grad3[M],g,C)),70*(n+s+a)}noise3d(e,t,n){let s,a,r,o;const l=(e+t+n)*.3333333333333333,h=Math.floor(e+l),f=Math.floor(t+l),u=Math.floor(n+l),d=1/6,m=(h+f+u)*d,_=h-m,p=f-m,A=u-m,b=e-_,x=t-p,g=n-A;let C,w,y,S,v,M;b>=x?x>=g?(C=1,w=0,y=0,S=1,v=1,M=0):b>=g?(C=1,w=0,y=0,S=1,v=0,M=1):(C=0,w=0,y=1,S=1,v=0,M=1):x<g?(C=0,w=0,y=1,S=0,v=1,M=1):b<g?(C=0,w=1,y=0,S=0,v=1,M=1):(C=0,w=1,y=0,S=1,v=1,M=0);const N=b-C+d,T=x-w+d,H=g-y+d,ie=b-S+2*d,ge=x-v+2*d,ue=g-M+2*d,ae=b-1+3*d,$=x-1+3*d,fe=g-1+3*d,se=h&255,oe=f&255,ve=u&255,me=this.perm[se+this.perm[oe+this.perm[ve]]]%12,j=this.perm[se+C+this.perm[oe+w+this.perm[ve+y]]]%12,pe=this.perm[se+S+this.perm[oe+v+this.perm[ve+M]]]%12,xe=this.perm[se+1+this.perm[oe+1+this.perm[ve+1]]]%12;let Me=.6-b*b-x*x-g*g;Me<0?s=0:(Me*=Me,s=Me*Me*this.dot3(this.grad3[me],b,x,g));let Ie=.6-N*N-T*T-H*H;Ie<0?a=0:(Ie*=Ie,a=Ie*Ie*this.dot3(this.grad3[j],N,T,H));let Te=.6-ie*ie-ge*ge-ue*ue;Te<0?r=0:(Te*=Te,r=Te*Te*this.dot3(this.grad3[pe],ie,ge,ue));let Qe=.6-ae*ae-$*$-fe*fe;return Qe<0?o=0:(Qe*=Qe,o=Qe*Qe*this.dot3(this.grad3[xe],ae,$,fe)),32*(s+a+r+o)}noise4d(e,t,n,s){const a=this.grad4,r=this.simplex,o=this.perm,c=(Math.sqrt(5)-1)/4,l=(5-Math.sqrt(5))/20;let h,f,u,d,m;const _=(e+t+n+s)*c,p=Math.floor(e+_),A=Math.floor(t+_),b=Math.floor(n+_),x=Math.floor(s+_),g=(p+A+b+x)*l,C=p-g,w=A-g,y=b-g,S=x-g,v=e-C,M=t-w,N=n-y,T=s-S,H=v>M?32:0,ie=v>N?16:0,ge=M>N?8:0,ue=v>T?4:0,ae=M>T?2:0,$=N>T?1:0,fe=H+ie+ge+ue+ae+$,se=r[fe][0]>=3?1:0,oe=r[fe][1]>=3?1:0,ve=r[fe][2]>=3?1:0,me=r[fe][3]>=3?1:0,j=r[fe][0]>=2?1:0,pe=r[fe][1]>=2?1:0,xe=r[fe][2]>=2?1:0,Me=r[fe][3]>=2?1:0,Ie=r[fe][0]>=1?1:0,Te=r[fe][1]>=1?1:0,Qe=r[fe][2]>=1?1:0,je=r[fe][3]>=1?1:0,ze=v-se+l,ht=M-oe+l,be=N-ve+l,xt=T-me+l,tt=v-j+2*l,$e=M-pe+2*l,Ke=N-xe+2*l,ft=T-Me+2*l,Pe=v-Ie+3*l,J=M-Te+3*l,L=N-Qe+3*l,we=T-je+3*l,Re=v-1+4*l,E=M-1+4*l,I=N-1+4*l,ce=T-1+4*l,O=p&255,Q=A&255,K=b&255,P=x&255,z=o[O+o[Q+o[K+o[P]]]]%32,W=o[O+se+o[Q+oe+o[K+ve+o[P+me]]]]%32,Y=o[O+j+o[Q+pe+o[K+xe+o[P+Me]]]]%32,F=o[O+Ie+o[Q+Te+o[K+Qe+o[P+je]]]]%32,G=o[O+1+o[Q+1+o[K+1+o[P+1]]]]%32;let te=.6-v*v-M*M-N*N-T*T;te<0?h=0:(te*=te,h=te*te*this.dot4(a[z],v,M,N,T));let ee=.6-ze*ze-ht*ht-be*be-xt*xt;ee<0?f=0:(ee*=ee,f=ee*ee*this.dot4(a[W],ze,ht,be,xt));let R=.6-tt*tt-$e*$e-Ke*Ke-ft*ft;R<0?u=0:(R*=R,u=R*R*this.dot4(a[Y],tt,$e,Ke,ft));let k=.6-Pe*Pe-J*J-L*L-we*we;k<0?d=0:(k*=k,d=k*k*this.dot4(a[F],Pe,J,L,we));let B=.6-Re*Re-E*E-I*I-ce*ce;return B<0?m=0:(B*=B,m=B*B*this.dot4(a[G],Re,E,I,ce)),27*(h+f+u+d+m)}}class mi extends Bs{constructor(e,t,n,s,a,r,o){super(),this.width=n!==void 0?n:512,this.height=s!==void 0?s:512,this.clear=!0,this.camera=t,this.scene=e,this.output=0,this._renderGBuffer=!0,this._visibilityCache=new Map,this.blendIntensity=1,this.pdRings=2,this.pdRadiusExponent=2,this.pdSamples=16,this.gtaoNoiseTexture=h_(),this.pdNoiseTexture=this.generateNoise(),this.gtaoRenderTarget=new Kn(this.width,this.height,{type:bn}),this.pdRenderTarget=this.gtaoRenderTarget.clone(),this.gtaoMaterial=new an({defines:Object.assign({},zr.defines),uniforms:xi.clone(zr.uniforms),vertexShader:zr.vertexShader,fragmentShader:zr.fragmentShader,blending:mn,depthTest:!1,depthWrite:!1}),this.gtaoMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.gtaoMaterial.uniforms.tNoise.value=this.gtaoNoiseTexture,this.gtaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.normalMaterial=new ux,this.normalMaterial.blending=mn,this.pdMaterial=new an({defines:Object.assign({},Hr.defines),uniforms:xi.clone(Hr.uniforms),vertexShader:Hr.vertexShader,fragmentShader:Hr.fragmentShader,depthTest:!1,depthWrite:!1}),this.pdMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.pdMaterial.uniforms.tNoise.value=this.pdNoiseTexture,this.pdMaterial.uniforms.resolution.value.set(this.width,this.height),this.pdMaterial.uniforms.lumaPhi.value=10,this.pdMaterial.uniforms.depthPhi.value=2,this.pdMaterial.uniforms.normalPhi.value=3,this.pdMaterial.uniforms.radius.value=8,this.depthRenderMaterial=new an({defines:Object.assign({},Gr.defines),uniforms:xi.clone(Gr.uniforms),vertexShader:Gr.vertexShader,fragmentShader:Gr.fragmentShader,blending:mn}),this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new an({uniforms:xi.clone(ja.uniforms),vertexShader:ja.vertexShader,fragmentShader:ja.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:Pc,blendDst:La,blendEquation:hi,blendSrcAlpha:Lc,blendDstAlpha:La,blendEquationAlpha:hi}),this.blendMaterial=new an({uniforms:xi.clone(hc.uniforms),vertexShader:hc.vertexShader,fragmentShader:hc.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blending:$f,blendSrc:Pc,blendDst:La,blendEquation:hi,blendSrcAlpha:Lc,blendDstAlpha:La,blendEquationAlpha:hi}),this.fsQuad=new Io(null),this.originalClearColor=new Ne,this.setGBuffer(a?a.depthTexture:void 0,a?a.normalTexture:void 0),r!==void 0&&this.updateGtaoMaterial(r),o!==void 0&&this.updatePdMaterial(o)}dispose(){this.gtaoNoiseTexture.dispose(),this.pdNoiseTexture.dispose(),this.normalRenderTarget.dispose(),this.gtaoRenderTarget.dispose(),this.pdRenderTarget.dispose(),this.normalMaterial.dispose(),this.pdMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this.fsQuad.dispose()}get gtaoMap(){return this.pdRenderTarget.texture}setGBuffer(e,t){e!==void 0?(this.depthTexture=e,this.normalTexture=t,this._renderGBuffer=!1):(this.depthTexture=new kl,this.depthTexture.format=ws,this.depthTexture.type=ys,this.normalRenderTarget=new Kn(this.width,this.height,{minFilter:_n,magFilter:_n,type:bn,depthTexture:this.depthTexture}),this.normalTexture=this.normalRenderTarget.texture,this._renderGBuffer=!0);const n=this.normalTexture?1:0,s=this.depthTexture===this.normalTexture?"w":"x";this.gtaoMaterial.defines.NORMAL_VECTOR_TYPE=n,this.gtaoMaterial.defines.DEPTH_SWIZZLING=s,this.gtaoMaterial.uniforms.tNormal.value=this.normalTexture,this.gtaoMaterial.uniforms.tDepth.value=this.depthTexture,this.pdMaterial.defines.NORMAL_VECTOR_TYPE=n,this.pdMaterial.defines.DEPTH_SWIZZLING=s,this.pdMaterial.uniforms.tNormal.value=this.normalTexture,this.pdMaterial.uniforms.tDepth.value=this.depthTexture,this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture}setSceneClipBox(e){e?(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX!==1,this.gtaoMaterial.defines.SCENE_CLIP_BOX=1,this.gtaoMaterial.uniforms.sceneBoxMin.value.copy(e.min),this.gtaoMaterial.uniforms.sceneBoxMax.value.copy(e.max)):(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX===0,this.gtaoMaterial.defines.SCENE_CLIP_BOX=0)}updateGtaoMaterial(e){e.radius!==void 0&&(this.gtaoMaterial.uniforms.radius.value=e.radius),e.distanceExponent!==void 0&&(this.gtaoMaterial.uniforms.distanceExponent.value=e.distanceExponent),e.thickness!==void 0&&(this.gtaoMaterial.uniforms.thickness.value=e.thickness),e.distanceFallOff!==void 0&&(this.gtaoMaterial.uniforms.distanceFallOff.value=e.distanceFallOff,this.gtaoMaterial.needsUpdate=!0),e.scale!==void 0&&(this.gtaoMaterial.uniforms.scale.value=e.scale),e.samples!==void 0&&e.samples!==this.gtaoMaterial.defines.SAMPLES&&(this.gtaoMaterial.defines.SAMPLES=e.samples,this.gtaoMaterial.needsUpdate=!0),e.screenSpaceRadius!==void 0&&(e.screenSpaceRadius?1:0)!==this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS&&(this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS=e.screenSpaceRadius?1:0,this.gtaoMaterial.needsUpdate=!0)}updatePdMaterial(e){let t=!1;e.lumaPhi!==void 0&&(this.pdMaterial.uniforms.lumaPhi.value=e.lumaPhi),e.depthPhi!==void 0&&(this.pdMaterial.uniforms.depthPhi.value=e.depthPhi),e.normalPhi!==void 0&&(this.pdMaterial.uniforms.normalPhi.value=e.normalPhi),e.radius!==void 0&&e.radius!==this.radius&&(this.pdMaterial.uniforms.radius.value=e.radius),e.radiusExponent!==void 0&&e.radiusExponent!==this.pdRadiusExponent&&(this.pdRadiusExponent=e.radiusExponent,t=!0),e.rings!==void 0&&e.rings!==this.pdRings&&(this.pdRings=e.rings,t=!0),e.samples!==void 0&&e.samples!==this.pdSamples&&(this.pdSamples=e.samples,t=!0),t&&(this.pdMaterial.defines.SAMPLES=this.pdSamples,this.pdMaterial.defines.SAMPLE_VECTORS=zu(this.pdSamples,this.pdRings,this.pdRadiusExponent),this.pdMaterial.needsUpdate=!0)}render(e,t,n){switch(this._renderGBuffer&&(this.overrideVisibility(),this.renderOverride(e,this.normalMaterial,this.normalRenderTarget,7829503,1),this.restoreVisibility()),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.gtaoMaterial.uniforms.cameraWorldMatrix.value.copy(this.camera.matrixWorld),this.renderPass(e,this.gtaoMaterial,this.gtaoRenderTarget,16777215,1),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.renderPass(e,this.pdMaterial,this.pdRenderTarget,16777215,1),this.output){case mi.OUTPUT.Off:break;case mi.OUTPUT.Diffuse:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=mn,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case mi.OUTPUT.AO:this.copyMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.copyMaterial.blending=mn,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case mi.OUTPUT.Denoise:this.copyMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.copyMaterial.blending=mn,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case mi.OUTPUT.Depth:this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.renderPass(e,this.depthRenderMaterial,this.renderToScreen?null:t);break;case mi.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=mn,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case mi.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=mn,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t),this.blendMaterial.uniforms.intensity.value=this.blendIntensity,this.blendMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.renderPass(e,this.blendMaterial,this.renderToScreen?null:t);break;default:console.warn("THREE.GTAOPass: Unknown output type.")}}renderPass(e,t,n,s,a){e.getClearColor(this.originalClearColor);const r=e.getClearAlpha(),o=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,s!=null&&(e.setClearColor(s),e.setClearAlpha(a||0),e.clear()),this.fsQuad.material=t,this.fsQuad.render(e),e.autoClear=o,e.setClearColor(this.originalClearColor),e.setClearAlpha(r)}renderOverride(e,t,n,s,a){e.getClearColor(this.originalClearColor);const r=e.getClearAlpha(),o=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,s=t.clearColor||s,a=t.clearAlpha||a,s!=null&&(e.setClearColor(s),e.setClearAlpha(a||0),e.clear()),this.scene.overrideMaterial=t,e.render(this.scene,this.camera),this.scene.overrideMaterial=null,e.autoClear=o,e.setClearColor(this.originalClearColor),e.setClearAlpha(r)}setSize(e,t){this.width=e,this.height=t,this.gtaoRenderTarget.setSize(e,t),this.normalRenderTarget.setSize(e,t),this.pdRenderTarget.setSize(e,t),this.gtaoMaterial.uniforms.resolution.value.set(e,t),this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.pdMaterial.uniforms.resolution.value.set(e,t),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse)}overrideVisibility(){const e=this.scene,t=this._visibilityCache;e.traverse(function(n){t.set(n,n.visible),(n.isPoints||n.isLine)&&(n.visible=!1)})}restoreVisibility(){const e=this.scene,t=this._visibilityCache;e.traverse(function(n){const s=t.get(n);n.visible=s}),t.clear()}generateNoise(e=64){const t=new d_,n=e*e*4,s=new Uint8Array(n);for(let r=0;r<e;r++)for(let o=0;o<e;o++){const c=r,l=o;s[(r*e+o)*4]=(t.noise(c,l)*.5+.5)*255,s[(r*e+o)*4+1]=(t.noise(c+e,l)*.5+.5)*255,s[(r*e+o)*4+2]=(t.noise(c,l+e)*.5+.5)*255,s[(r*e+o)*4+3]=(t.noise(c+e,l+e)*.5+.5)*255}const a=new cr(s,e,e,ln,cn);return a.wrapS=Jn,a.wrapT=Jn,a.needsUpdate=!0,a}}mi.OUTPUT={Off:-1,Default:0,Diffuse:1,Depth:2,Normal:3,AO:4,Denoise:5};const A_={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Ne(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class ga extends Bs{constructor(e,t,n,s){super(),this.strength=t!==void 0?t:1,this.radius=n,this.threshold=s,this.resolution=e!==void 0?new Ye(e.x,e.y):new Ye(256,256),this.clearColor=new Ne(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let a=Math.round(this.resolution.x/2),r=Math.round(this.resolution.y/2);this.renderTargetBright=new Kn(a,r,{type:bn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let f=0;f<this.nMips;f++){const u=new Kn(a,r,{type:bn});u.texture.name="UnrealBloomPass.h"+f,u.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(u);const d=new Kn(a,r,{type:bn});d.texture.name="UnrealBloomPass.v"+f,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),a=Math.round(a/2),r=Math.round(r/2)}const o=A_;this.highPassUniforms=xi.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new an({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];const c=[3,5,7,9,11];a=Math.round(this.resolution.x/2),r=Math.round(this.resolution.y/2);for(let f=0;f<this.nMips;f++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(c[f])),this.separableBlurMaterials[f].uniforms.invSize.value=new Ye(1/a,1/r),a=Math.round(a/2),r=Math.round(r/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const l=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=l,this.bloomTintColors=[new ne(1,1,1),new ne(1,1,1),new ne(1,1,1),new ne(1,1,1),new ne(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const h=ja;this.copyUniforms=xi.clone(h.uniforms),this.blendMaterial=new an({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:Bc,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Ne,this.oldClearAlpha=1,this.basic=new Xn,this.fsQuad=new Io(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(n,s);for(let a=0;a<this.nMips;a++)this.renderTargetsHorizontal[a].setSize(n,s),this.renderTargetsVertical[a].setSize(n,s),this.separableBlurMaterials[a].uniforms.invSize.value=new Ye(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(e,t,n,s,a){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const r=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),a&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let o=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this.fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[c].uniforms.direction.value=ga.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[c]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=ga.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[c]),e.clear(),this.fsQuad.render(e),o=this.renderTargetsVertical[c];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,a&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=r}getSeperableBlurMaterial(e){const t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new an({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new Ye(.5,.5)},direction:{value:new Ye(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(e){return new an({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}}ga.BlurDirectionX=new Ye(1,0);ga.BlurDirectionY=new Ye(0,1);const p_={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class m_ extends Bs{constructor(){super();const e=p_;this.uniforms=xi.clone(e.uniforms),this.material=new fx({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new Io(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},Ct.getTransfer(this._outputColorSpace)===Ft&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===eu?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===tu?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===nu?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Cl?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===iu?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===su&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class g_{constructor(e=4){this.pool=e,this.queue=[],this.workers=[],this.workersResolve=[],this.workerStatus=0}_initWorker(e){if(!this.workers[e]){const t=this.workerCreator();t.addEventListener("message",this._onMessage.bind(this,e)),this.workers[e]=t}}_getIdleWorker(){for(let e=0;e<this.pool;e++)if(!(this.workerStatus&1<<e))return e;return-1}_onMessage(e,t){const n=this.workersResolve[e];if(n&&n(t),this.queue.length){const{resolve:s,msg:a,transfer:r}=this.queue.shift();this.workersResolve[e]=s,this.workers[e].postMessage(a,r)}else this.workerStatus^=1<<e}setWorkerCreator(e){this.workerCreator=e}setWorkerLimit(e){this.pool=e}postMessage(e,t){return new Promise(n=>{const s=this._getIdleWorker();s!==-1?(this._initWorker(s),this.workerStatus|=1<<s,this.workersResolve[s]=n,this.workers[s].postMessage(e,t)):this.queue.push({resolve:n,msg:e,transfer:t})})}dispose(){this.workers.forEach(e=>e.terminate()),this.workersResolve.length=0,this.workers.length=0,this.queue.length=0,this.workerStatus=0}}const b_=0,Rf=2,x_=1,Df=2,__=0,E_=1,v_=10,M_=0,Gu=9,Hu=15,Vu=16,Wu=22,ju=37,qu=43,Yu=76,Xu=83,Ku=97,Ju=100,Zu=103,$u=109,ed=165,td=166,Kl=1000066e3;class y_{constructor(){this.vkFormat=0,this.typeSize=1,this.pixelWidth=0,this.pixelHeight=0,this.pixelDepth=0,this.layerCount=0,this.faceCount=1,this.supercompressionScheme=0,this.levels=[],this.dataFormatDescriptor=[{vendorId:0,descriptorType:0,descriptorBlockSize:0,versionNumber:2,colorModel:0,colorPrimaries:1,transferFunction:2,flags:0,texelBlockDimension:[0,0,0,0],bytesPlane:[0,0,0,0,0,0,0,0],samples:[]}],this.keyValue={},this.globalData=null}}class Ta{constructor(e,t,n,s){this._dataView=void 0,this._littleEndian=void 0,this._offset=void 0,this._dataView=new DataView(e.buffer,e.byteOffset+t,n),this._littleEndian=s,this._offset=0}_nextUint8(){const e=this._dataView.getUint8(this._offset);return this._offset+=1,e}_nextUint16(){const e=this._dataView.getUint16(this._offset,this._littleEndian);return this._offset+=2,e}_nextUint32(){const e=this._dataView.getUint32(this._offset,this._littleEndian);return this._offset+=4,e}_nextUint64(){const e=this._dataView.getUint32(this._offset,this._littleEndian)+4294967296*this._dataView.getUint32(this._offset+4,this._littleEndian);return this._offset+=8,e}_nextInt32(){const e=this._dataView.getInt32(this._offset,this._littleEndian);return this._offset+=4,e}_nextUint8Array(e){const t=new Uint8Array(this._dataView.buffer,this._dataView.byteOffset+this._offset,e);return this._offset+=e,t}_skip(e){return this._offset+=e,this}_scan(e,t){t===void 0&&(t=0);const n=this._offset;let s=0;for(;this._dataView.getUint8(this._offset)!==t&&s<e;)s++,this._offset++;return s<e&&this._offset++,new Uint8Array(this._dataView.buffer,this._dataView.byteOffset+n,s)}}const In=[171,75,84,88,32,50,48,187,13,10,26,10];function Lf(i){return new TextDecoder().decode(i)}function w_(i){const e=new Uint8Array(i.buffer,i.byteOffset,In.length);if(e[0]!==In[0]||e[1]!==In[1]||e[2]!==In[2]||e[3]!==In[3]||e[4]!==In[4]||e[5]!==In[5]||e[6]!==In[6]||e[7]!==In[7]||e[8]!==In[8]||e[9]!==In[9]||e[10]!==In[10]||e[11]!==In[11])throw new Error("Missing KTX 2.0 identifier.");const t=new y_,n=17*Uint32Array.BYTES_PER_ELEMENT,s=new Ta(i,In.length,n,!0);t.vkFormat=s._nextUint32(),t.typeSize=s._nextUint32(),t.pixelWidth=s._nextUint32(),t.pixelHeight=s._nextUint32(),t.pixelDepth=s._nextUint32(),t.layerCount=s._nextUint32(),t.faceCount=s._nextUint32();const a=s._nextUint32();t.supercompressionScheme=s._nextUint32();const r=s._nextUint32(),o=s._nextUint32(),c=s._nextUint32(),l=s._nextUint32(),h=s._nextUint64(),f=s._nextUint64(),u=new Ta(i,In.length+n,3*a*8,!0);for(let ae=0;ae<a;ae++)t.levels.push({levelData:new Uint8Array(i.buffer,i.byteOffset+u._nextUint64(),u._nextUint64()),uncompressedByteLength:u._nextUint64()});const d=new Ta(i,r,o,!0),m={vendorId:d._skip(4)._nextUint16(),descriptorType:d._nextUint16(),versionNumber:d._nextUint16(),descriptorBlockSize:d._nextUint16(),colorModel:d._nextUint8(),colorPrimaries:d._nextUint8(),transferFunction:d._nextUint8(),flags:d._nextUint8(),texelBlockDimension:[d._nextUint8(),d._nextUint8(),d._nextUint8(),d._nextUint8()],bytesPlane:[d._nextUint8(),d._nextUint8(),d._nextUint8(),d._nextUint8(),d._nextUint8(),d._nextUint8(),d._nextUint8(),d._nextUint8()],samples:[]},_=(m.descriptorBlockSize/4-6)/4;for(let ae=0;ae<_;ae++){const $={bitOffset:d._nextUint16(),bitLength:d._nextUint8(),channelType:d._nextUint8(),samplePosition:[d._nextUint8(),d._nextUint8(),d._nextUint8(),d._nextUint8()],sampleLower:-1/0,sampleUpper:1/0};64&$.channelType?($.sampleLower=d._nextInt32(),$.sampleUpper=d._nextInt32()):($.sampleLower=d._nextUint32(),$.sampleUpper=d._nextUint32()),m.samples[ae]=$}t.dataFormatDescriptor.length=0,t.dataFormatDescriptor.push(m);const p=new Ta(i,c,l,!0);for(;p._offset<l;){const ae=p._nextUint32(),$=p._scan(ae),fe=Lf($);if(t.keyValue[fe]=p._nextUint8Array(ae-$.byteLength-1),fe.match(/^ktx/i)){const se=Lf(t.keyValue[fe]);t.keyValue[fe]=se.substring(0,se.lastIndexOf("\0"))}p._skip(ae%4?4-ae%4:0)}if(f<=0)return t;const A=new Ta(i,h,f,!0),b=A._nextUint16(),x=A._nextUint16(),g=A._nextUint32(),C=A._nextUint32(),w=A._nextUint32(),y=A._nextUint32(),S=[];for(let ae=0;ae<a;ae++)S.push({imageFlags:A._nextUint32(),rgbSliceByteOffset:A._nextUint32(),rgbSliceByteLength:A._nextUint32(),alphaSliceByteOffset:A._nextUint32(),alphaSliceByteLength:A._nextUint32()});const v=h+A._offset,M=v+g,N=M+C,T=N+w,H=new Uint8Array(i.buffer,i.byteOffset+v,g),ie=new Uint8Array(i.buffer,i.byteOffset+M,C),ge=new Uint8Array(i.buffer,i.byteOffset+N,w),ue=new Uint8Array(i.buffer,i.byteOffset+T,y);return t.globalData={endpointCount:b,selectorCount:x,imageDescs:S,endpointsData:H,selectorsData:ie,tablesData:ge,extendedData:ue},t}let fc,Di,pl;const uc={env:{emscripten_notify_memory_growth:function(i){pl=new Uint8Array(Di.exports.memory.buffer)}}};class C_{init(){return fc||(fc=typeof fetch<"u"?fetch("data:application/wasm;base64,"+Pf).then(e=>e.arrayBuffer()).then(e=>WebAssembly.instantiate(e,uc)).then(this._init):WebAssembly.instantiate(Buffer.from(Pf,"base64"),uc).then(this._init),fc)}_init(e){Di=e.instance,uc.env.emscripten_notify_memory_growth(0)}decode(e,t=0){if(!Di)throw new Error("ZSTDDecoder: Await .init() before decoding.");const n=e.byteLength,s=Di.exports.malloc(n);pl.set(e,s),t=t||Number(Di.exports.ZSTD_findDecompressedSize(s,n));const a=Di.exports.malloc(t),r=Di.exports.ZSTD_decompress(a,t,s,n),o=pl.slice(a,a+r);return Di.exports.free(s),Di.exports.free(a),o}}const Pf="AGFzbQEAAAABpQEVYAF/AX9gAn9/AGADf39/AX9gBX9/f39/AX9gAX8AYAJ/fwF/YAR/f39/AX9gA39/fwBgBn9/f39/fwF/YAd/f39/f39/AX9gAn9/AX5gAn5+AX5gAABgBX9/f39/AGAGf39/f39/AGAIf39/f39/f38AYAl/f39/f39/f38AYAABf2AIf39/f39/f38Bf2ANf39/f39/f39/f39/fwF/YAF/AX4CJwEDZW52H2Vtc2NyaXB0ZW5fbm90aWZ5X21lbW9yeV9ncm93dGgABANpaAEFAAAFAgEFCwACAQABAgIFBQcAAwABDgsBAQcAEhMHAAUBDAQEAAANBwQCAgYCBAgDAwMDBgEACQkHBgICAAYGAgQUBwYGAwIGAAMCAQgBBwUGCgoEEQAEBAEIAwgDBQgDEA8IAAcABAUBcAECAgUEAQCAAgYJAX8BQaCgwAILB2AHBm1lbW9yeQIABm1hbGxvYwAoBGZyZWUAJgxaU1REX2lzRXJyb3IAaBlaU1REX2ZpbmREZWNvbXByZXNzZWRTaXplAFQPWlNURF9kZWNvbXByZXNzAEoGX3N0YXJ0ACQJBwEAQQELASQKussBaA8AIAAgACgCBCABajYCBAsZACAAKAIAIAAoAgRBH3F0QQAgAWtBH3F2CwgAIABBiH9LC34BBH9BAyEBIAAoAgQiA0EgTQRAIAAoAggiASAAKAIQTwRAIAAQDQ8LIAAoAgwiAiABRgRAQQFBAiADQSBJGw8LIAAgASABIAJrIANBA3YiBCABIARrIAJJIgEbIgJrIgQ2AgggACADIAJBA3RrNgIEIAAgBCgAADYCAAsgAQsUAQF/IAAgARACIQIgACABEAEgAgv3AQECfyACRQRAIABCADcCACAAQQA2AhAgAEIANwIIQbh/DwsgACABNgIMIAAgAUEEajYCECACQQRPBEAgACABIAJqIgFBfGoiAzYCCCAAIAMoAAA2AgAgAUF/ai0AACIBBEAgAEEIIAEQFGs2AgQgAg8LIABBADYCBEF/DwsgACABNgIIIAAgAS0AACIDNgIAIAJBfmoiBEEBTQRAIARBAWtFBEAgACABLQACQRB0IANyIgM2AgALIAAgAS0AAUEIdCADajYCAAsgASACakF/ai0AACIBRQRAIABBADYCBEFsDwsgAEEoIAEQFCACQQN0ams2AgQgAgsWACAAIAEpAAA3AAAgACABKQAINwAICy8BAX8gAUECdEGgHWooAgAgACgCAEEgIAEgACgCBGprQR9xdnEhAiAAIAEQASACCyEAIAFCz9bTvtLHq9lCfiAAfEIfiUKHla+vmLbem55/fgsdAQF/IAAoAgggACgCDEYEfyAAKAIEQSBGBUEACwuCBAEDfyACQYDAAE8EQCAAIAEgAhBnIAAPCyAAIAJqIQMCQCAAIAFzQQNxRQRAAkAgAkEBSARAIAAhAgwBCyAAQQNxRQRAIAAhAgwBCyAAIQIDQCACIAEtAAA6AAAgAUEBaiEBIAJBAWoiAiADTw0BIAJBA3ENAAsLAkAgA0F8cSIEQcAASQ0AIAIgBEFAaiIFSw0AA0AgAiABKAIANgIAIAIgASgCBDYCBCACIAEoAgg2AgggAiABKAIMNgIMIAIgASgCEDYCECACIAEoAhQ2AhQgAiABKAIYNgIYIAIgASgCHDYCHCACIAEoAiA2AiAgAiABKAIkNgIkIAIgASgCKDYCKCACIAEoAiw2AiwgAiABKAIwNgIwIAIgASgCNDYCNCACIAEoAjg2AjggAiABKAI8NgI8IAFBQGshASACQUBrIgIgBU0NAAsLIAIgBE8NAQNAIAIgASgCADYCACABQQRqIQEgAkEEaiICIARJDQALDAELIANBBEkEQCAAIQIMAQsgA0F8aiIEIABJBEAgACECDAELIAAhAgNAIAIgAS0AADoAACACIAEtAAE6AAEgAiABLQACOgACIAIgAS0AAzoAAyABQQRqIQEgAkEEaiICIARNDQALCyACIANJBEADQCACIAEtAAA6AAAgAUEBaiEBIAJBAWoiAiADRw0ACwsgAAsMACAAIAEpAAA3AAALQQECfyAAKAIIIgEgACgCEEkEQEEDDwsgACAAKAIEIgJBB3E2AgQgACABIAJBA3ZrIgE2AgggACABKAAANgIAQQALDAAgACABKAIANgAAC/cCAQJ/AkAgACABRg0AAkAgASACaiAASwRAIAAgAmoiBCABSw0BCyAAIAEgAhALDwsgACABc0EDcSEDAkACQCAAIAFJBEAgAwRAIAAhAwwDCyAAQQNxRQRAIAAhAwwCCyAAIQMDQCACRQ0EIAMgAS0AADoAACABQQFqIQEgAkF/aiECIANBAWoiA0EDcQ0ACwwBCwJAIAMNACAEQQNxBEADQCACRQ0FIAAgAkF/aiICaiIDIAEgAmotAAA6AAAgA0EDcQ0ACwsgAkEDTQ0AA0AgACACQXxqIgJqIAEgAmooAgA2AgAgAkEDSw0ACwsgAkUNAgNAIAAgAkF/aiICaiABIAJqLQAAOgAAIAINAAsMAgsgAkEDTQ0AIAIhBANAIAMgASgCADYCACABQQRqIQEgA0EEaiEDIARBfGoiBEEDSw0ACyACQQNxIQILIAJFDQADQCADIAEtAAA6AAAgA0EBaiEDIAFBAWohASACQX9qIgINAAsLIAAL8wICAn8BfgJAIAJFDQAgACACaiIDQX9qIAE6AAAgACABOgAAIAJBA0kNACADQX5qIAE6AAAgACABOgABIANBfWogAToAACAAIAE6AAIgAkEHSQ0AIANBfGogAToAACAAIAE6AAMgAkEJSQ0AIABBACAAa0EDcSIEaiIDIAFB/wFxQYGChAhsIgE2AgAgAyACIARrQXxxIgRqIgJBfGogATYCACAEQQlJDQAgAyABNgIIIAMgATYCBCACQXhqIAE2AgAgAkF0aiABNgIAIARBGUkNACADIAE2AhggAyABNgIUIAMgATYCECADIAE2AgwgAkFwaiABNgIAIAJBbGogATYCACACQWhqIAE2AgAgAkFkaiABNgIAIAQgA0EEcUEYciIEayICQSBJDQAgAa0iBUIghiAFhCEFIAMgBGohAQNAIAEgBTcDGCABIAU3AxAgASAFNwMIIAEgBTcDACABQSBqIQEgAkFgaiICQR9LDQALCyAACy8BAn8gACgCBCAAKAIAQQJ0aiICLQACIQMgACACLwEAIAEgAi0AAxAIajYCACADCy8BAn8gACgCBCAAKAIAQQJ0aiICLQACIQMgACACLwEAIAEgAi0AAxAFajYCACADCx8AIAAgASACKAIEEAg2AgAgARAEGiAAIAJBCGo2AgQLCAAgAGdBH3MLugUBDX8jAEEQayIKJAACfyAEQQNNBEAgCkEANgIMIApBDGogAyAEEAsaIAAgASACIApBDGpBBBAVIgBBbCAAEAMbIAAgACAESxsMAQsgAEEAIAEoAgBBAXRBAmoQECENQVQgAygAACIGQQ9xIgBBCksNABogAiAAQQVqNgIAIAMgBGoiAkF8aiEMIAJBeWohDiACQXtqIRAgAEEGaiELQQQhBSAGQQR2IQRBICAAdCIAQQFyIQkgASgCACEPQQAhAiADIQYCQANAIAlBAkggAiAPS3JFBEAgAiEHAkAgCARAA0AgBEH//wNxQf//A0YEQCAHQRhqIQcgBiAQSQR/IAZBAmoiBigAACAFdgUgBUEQaiEFIARBEHYLIQQMAQsLA0AgBEEDcSIIQQNGBEAgBUECaiEFIARBAnYhBCAHQQNqIQcMAQsLIAcgCGoiByAPSw0EIAVBAmohBQNAIAIgB0kEQCANIAJBAXRqQQA7AQAgAkEBaiECDAELCyAGIA5LQQAgBiAFQQN1aiIHIAxLG0UEQCAHKAAAIAVBB3EiBXYhBAwCCyAEQQJ2IQQLIAYhBwsCfyALQX9qIAQgAEF/anEiBiAAQQF0QX9qIgggCWsiEUkNABogBCAIcSIEQQAgESAEIABIG2shBiALCyEIIA0gAkEBdGogBkF/aiIEOwEAIAlBASAGayAEIAZBAUgbayEJA0AgCSAASARAIABBAXUhACALQX9qIQsMAQsLAn8gByAOS0EAIAcgBSAIaiIFQQN1aiIGIAxLG0UEQCAFQQdxDAELIAUgDCIGIAdrQQN0awshBSACQQFqIQIgBEUhCCAGKAAAIAVBH3F2IQQMAQsLQWwgCUEBRyAFQSBKcg0BGiABIAJBf2o2AgAgBiAFQQdqQQN1aiADawwBC0FQCyEAIApBEGokACAACwkAQQFBBSAAGwsMACAAIAEoAAA2AAALqgMBCn8jAEHwAGsiCiQAIAJBAWohDiAAQQhqIQtBgIAEIAVBf2p0QRB1IQxBACECQQEhBkEBIAV0IglBf2oiDyEIA0AgAiAORkUEQAJAIAEgAkEBdCINai8BACIHQf//A0YEQCALIAhBA3RqIAI2AgQgCEF/aiEIQQEhBwwBCyAGQQAgDCAHQRB0QRB1ShshBgsgCiANaiAHOwEAIAJBAWohAgwBCwsgACAFNgIEIAAgBjYCACAJQQN2IAlBAXZqQQNqIQxBACEAQQAhBkEAIQIDQCAGIA5GBEADQAJAIAAgCUYNACAKIAsgAEEDdGoiASgCBCIGQQF0aiICIAIvAQAiAkEBajsBACABIAUgAhAUayIIOgADIAEgAiAIQf8BcXQgCWs7AQAgASAEIAZBAnQiAmooAgA6AAIgASACIANqKAIANgIEIABBAWohAAwBCwsFIAEgBkEBdGouAQAhDUEAIQcDQCAHIA1ORQRAIAsgAkEDdGogBjYCBANAIAIgDGogD3EiAiAISw0ACyAHQQFqIQcMAQsLIAZBAWohBgwBCwsgCkHwAGokAAsjAEIAIAEQCSAAhUKHla+vmLbem55/fkLj3MqV/M7y9YV/fAsQACAAQn43AwggACABNgIACyQBAX8gAARAIAEoAgQiAgRAIAEoAgggACACEQEADwsgABAmCwsfACAAIAEgAi8BABAINgIAIAEQBBogACACQQRqNgIEC0oBAX9BoCAoAgAiASAAaiIAQX9MBEBBiCBBMDYCAEF/DwsCQCAAPwBBEHRNDQAgABBmDQBBiCBBMDYCAEF/DwtBoCAgADYCACABC9cBAQh/Qbp/IQoCQCACKAIEIgggAigCACIJaiIOIAEgAGtLDQBBbCEKIAkgBCADKAIAIgtrSw0AIAAgCWoiBCACKAIIIgxrIQ0gACABQWBqIg8gCyAJQQAQKSADIAkgC2o2AgACQAJAIAwgBCAFa00EQCANIQUMAQsgDCAEIAZrSw0CIAcgDSAFayIAaiIBIAhqIAdNBEAgBCABIAgQDxoMAgsgBCABQQAgAGsQDyEBIAIgACAIaiIINgIEIAEgAGshBAsgBCAPIAUgCEEBECkLIA4hCgsgCgubAgEBfyMAQYABayINJAAgDSADNgJ8AkAgAkEDSwRAQX8hCQwBCwJAAkACQAJAIAJBAWsOAwADAgELIAZFBEBBuH8hCQwEC0FsIQkgBS0AACICIANLDQMgACAHIAJBAnQiAmooAgAgAiAIaigCABA7IAEgADYCAEEBIQkMAwsgASAJNgIAQQAhCQwCCyAKRQRAQWwhCQwCC0EAIQkgC0UgDEEZSHINAUEIIAR0QQhqIQBBACECA0AgAiAATw0CIAJBQGshAgwAAAsAC0FsIQkgDSANQfwAaiANQfgAaiAFIAYQFSICEAMNACANKAJ4IgMgBEsNACAAIA0gDSgCfCAHIAggAxAYIAEgADYCACACIQkLIA1BgAFqJAAgCQsLACAAIAEgAhALGgsQACAALwAAIAAtAAJBEHRyCy8AAn9BuH8gAUEISQ0AGkFyIAAoAAQiAEF3Sw0AGkG4fyAAQQhqIgAgACABSxsLCwkAIAAgATsAAAsDAAELigYBBX8gACAAKAIAIgVBfnE2AgBBACAAIAVBAXZqQYQgKAIAIgQgAEYbIQECQAJAIAAoAgQiAkUNACACKAIAIgNBAXENACACQQhqIgUgA0EBdkF4aiIDQQggA0EISxtnQR9zQQJ0QYAfaiIDKAIARgRAIAMgAigCDDYCAAsgAigCCCIDBEAgAyACKAIMNgIECyACKAIMIgMEQCADIAIoAgg2AgALIAIgAigCACAAKAIAQX5xajYCAEGEICEAAkACQCABRQ0AIAEgAjYCBCABKAIAIgNBAXENASADQQF2QXhqIgNBCCADQQhLG2dBH3NBAnRBgB9qIgMoAgAgAUEIakYEQCADIAEoAgw2AgALIAEoAggiAwRAIAMgASgCDDYCBAsgASgCDCIDBEAgAyABKAIINgIAQYQgKAIAIQQLIAIgAigCACABKAIAQX5xajYCACABIARGDQAgASABKAIAQQF2akEEaiEACyAAIAI2AgALIAIoAgBBAXZBeGoiAEEIIABBCEsbZ0Efc0ECdEGAH2oiASgCACEAIAEgBTYCACACIAA2AgwgAkEANgIIIABFDQEgACAFNgIADwsCQCABRQ0AIAEoAgAiAkEBcQ0AIAJBAXZBeGoiAkEIIAJBCEsbZ0Efc0ECdEGAH2oiAigCACABQQhqRgRAIAIgASgCDDYCAAsgASgCCCICBEAgAiABKAIMNgIECyABKAIMIgIEQCACIAEoAgg2AgBBhCAoAgAhBAsgACAAKAIAIAEoAgBBfnFqIgI2AgACQCABIARHBEAgASABKAIAQQF2aiAANgIEIAAoAgAhAgwBC0GEICAANgIACyACQQF2QXhqIgFBCCABQQhLG2dBH3NBAnRBgB9qIgIoAgAhASACIABBCGoiAjYCACAAIAE2AgwgAEEANgIIIAFFDQEgASACNgIADwsgBUEBdkF4aiIBQQggAUEISxtnQR9zQQJ0QYAfaiICKAIAIQEgAiAAQQhqIgI2AgAgACABNgIMIABBADYCCCABRQ0AIAEgAjYCAAsLDgAgAARAIABBeGoQJQsLgAIBA38CQCAAQQ9qQXhxQYQgKAIAKAIAQQF2ayICEB1Bf0YNAAJAQYQgKAIAIgAoAgAiAUEBcQ0AIAFBAXZBeGoiAUEIIAFBCEsbZ0Efc0ECdEGAH2oiASgCACAAQQhqRgRAIAEgACgCDDYCAAsgACgCCCIBBEAgASAAKAIMNgIECyAAKAIMIgFFDQAgASAAKAIINgIAC0EBIQEgACAAKAIAIAJBAXRqIgI2AgAgAkEBcQ0AIAJBAXZBeGoiAkEIIAJBCEsbZ0Efc0ECdEGAH2oiAygCACECIAMgAEEIaiIDNgIAIAAgAjYCDCAAQQA2AgggAkUNACACIAM2AgALIAELtwIBA38CQAJAIABBASAAGyICEDgiAA0AAkACQEGEICgCACIARQ0AIAAoAgAiA0EBcQ0AIAAgA0EBcjYCACADQQF2QXhqIgFBCCABQQhLG2dBH3NBAnRBgB9qIgEoAgAgAEEIakYEQCABIAAoAgw2AgALIAAoAggiAQRAIAEgACgCDDYCBAsgACgCDCIBBEAgASAAKAIINgIACyACECchAkEAIQFBhCAoAgAhACACDQEgACAAKAIAQX5xNgIAQQAPCyACQQ9qQXhxIgMQHSICQX9GDQIgAkEHakF4cSIAIAJHBEAgACACaxAdQX9GDQMLAkBBhCAoAgAiAUUEQEGAICAANgIADAELIAAgATYCBAtBhCAgADYCACAAIANBAXRBAXI2AgAMAQsgAEUNAQsgAEEIaiEBCyABC7kDAQJ/IAAgA2ohBQJAIANBB0wEQANAIAAgBU8NAiAAIAItAAA6AAAgAEEBaiEAIAJBAWohAgwAAAsACyAEQQFGBEACQCAAIAJrIgZBB00EQCAAIAItAAA6AAAgACACLQABOgABIAAgAi0AAjoAAiAAIAItAAM6AAMgAEEEaiACIAZBAnQiBkHAHmooAgBqIgIQFyACIAZB4B5qKAIAayECDAELIAAgAhAMCyACQQhqIQIgAEEIaiEACwJAAkACQAJAIAUgAU0EQCAAIANqIQEgBEEBRyAAIAJrQQ9Kcg0BA0AgACACEAwgAkEIaiECIABBCGoiACABSQ0ACwwFCyAAIAFLBEAgACEBDAQLIARBAUcgACACa0EPSnINASAAIQMgAiEEA0AgAyAEEAwgBEEIaiEEIANBCGoiAyABSQ0ACwwCCwNAIAAgAhAHIAJBEGohAiAAQRBqIgAgAUkNAAsMAwsgACEDIAIhBANAIAMgBBAHIARBEGohBCADQRBqIgMgAUkNAAsLIAIgASAAa2ohAgsDQCABIAVPDQEgASACLQAAOgAAIAFBAWohASACQQFqIQIMAAALAAsLQQECfyAAIAAoArjgASIDNgLE4AEgACgCvOABIQQgACABNgK84AEgACABIAJqNgK44AEgACABIAQgA2tqNgLA4AELpgEBAX8gACAAKALs4QEQFjYCyOABIABCADcD+OABIABCADcDuOABIABBwOABakIANwMAIABBqNAAaiIBQYyAgOAANgIAIABBADYCmOIBIABCADcDiOEBIABCAzcDgOEBIABBrNABakHgEikCADcCACAAQbTQAWpB6BIoAgA2AgAgACABNgIMIAAgAEGYIGo2AgggACAAQaAwajYCBCAAIABBEGo2AgALYQEBf0G4fyEDAkAgAUEDSQ0AIAIgABAhIgFBA3YiADYCCCACIAFBAXE2AgQgAiABQQF2QQNxIgM2AgACQCADQX9qIgFBAksNAAJAIAFBAWsOAgEAAgtBbA8LIAAhAwsgAwsMACAAIAEgAkEAEC4LiAQCA38CfiADEBYhBCAAQQBBKBAQIQAgBCACSwRAIAQPCyABRQRAQX8PCwJAAkAgA0EBRg0AIAEoAAAiBkGo6r5pRg0AQXYhAyAGQXBxQdDUtMIBRw0BQQghAyACQQhJDQEgAEEAQSgQECEAIAEoAAQhASAAQQE2AhQgACABrTcDAEEADwsgASACIAMQLyIDIAJLDQAgACADNgIYQXIhAyABIARqIgVBf2otAAAiAkEIcQ0AIAJBIHEiBkUEQEFwIQMgBS0AACIFQacBSw0BIAVBB3GtQgEgBUEDdkEKaq2GIgdCA4h+IAd8IQggBEEBaiEECyACQQZ2IQMgAkECdiEFAkAgAkEDcUF/aiICQQJLBEBBACECDAELAkACQAJAIAJBAWsOAgECAAsgASAEai0AACECIARBAWohBAwCCyABIARqLwAAIQIgBEECaiEEDAELIAEgBGooAAAhAiAEQQRqIQQLIAVBAXEhBQJ+AkACQAJAIANBf2oiA0ECTQRAIANBAWsOAgIDAQtCfyAGRQ0DGiABIARqMQAADAMLIAEgBGovAACtQoACfAwCCyABIARqKAAArQwBCyABIARqKQAACyEHIAAgBTYCICAAIAI2AhwgACAHNwMAQQAhAyAAQQA2AhQgACAHIAggBhsiBzcDCCAAIAdCgIAIIAdCgIAIVBs+AhALIAMLWwEBf0G4fyEDIAIQFiICIAFNBH8gACACakF/ai0AACIAQQNxQQJ0QaAeaigCACACaiAAQQZ2IgFBAnRBsB5qKAIAaiAAQSBxIgBFaiABRSAAQQV2cWoFQbh/CwsdACAAKAKQ4gEQWiAAQQA2AqDiASAAQgA3A5DiAQu1AwEFfyMAQZACayIKJABBuH8hBgJAIAVFDQAgBCwAACIIQf8BcSEHAkAgCEF/TARAIAdBgn9qQQF2IgggBU8NAkFsIQYgB0GBf2oiBUGAAk8NAiAEQQFqIQdBACEGA0AgBiAFTwRAIAUhBiAIIQcMAwUgACAGaiAHIAZBAXZqIgQtAABBBHY6AAAgACAGQQFyaiAELQAAQQ9xOgAAIAZBAmohBgwBCwAACwALIAcgBU8NASAAIARBAWogByAKEFMiBhADDQELIAYhBEEAIQYgAUEAQTQQECEJQQAhBQNAIAQgBkcEQCAAIAZqIggtAAAiAUELSwRAQWwhBgwDBSAJIAFBAnRqIgEgASgCAEEBajYCACAGQQFqIQZBASAILQAAdEEBdSAFaiEFDAILAAsLQWwhBiAFRQ0AIAUQFEEBaiIBQQxLDQAgAyABNgIAQQFBASABdCAFayIDEBQiAXQgA0cNACAAIARqIAFBAWoiADoAACAJIABBAnRqIgAgACgCAEEBajYCACAJKAIEIgBBAkkgAEEBcXINACACIARBAWo2AgAgB0EBaiEGCyAKQZACaiQAIAYLxhEBDH8jAEHwAGsiBSQAQWwhCwJAIANBCkkNACACLwAAIQogAi8AAiEJIAIvAAQhByAFQQhqIAQQDgJAIAMgByAJIApqakEGaiIMSQ0AIAUtAAohCCAFQdgAaiACQQZqIgIgChAGIgsQAw0BIAVBQGsgAiAKaiICIAkQBiILEAMNASAFQShqIAIgCWoiAiAHEAYiCxADDQEgBUEQaiACIAdqIAMgDGsQBiILEAMNASAAIAFqIg9BfWohECAEQQRqIQZBASELIAAgAUEDakECdiIDaiIMIANqIgIgA2oiDiEDIAIhBCAMIQcDQCALIAMgEElxBEAgACAGIAVB2ABqIAgQAkECdGoiCS8BADsAACAFQdgAaiAJLQACEAEgCS0AAyELIAcgBiAFQUBrIAgQAkECdGoiCS8BADsAACAFQUBrIAktAAIQASAJLQADIQogBCAGIAVBKGogCBACQQJ0aiIJLwEAOwAAIAVBKGogCS0AAhABIAktAAMhCSADIAYgBUEQaiAIEAJBAnRqIg0vAQA7AAAgBUEQaiANLQACEAEgDS0AAyENIAAgC2oiCyAGIAVB2ABqIAgQAkECdGoiAC8BADsAACAFQdgAaiAALQACEAEgAC0AAyEAIAcgCmoiCiAGIAVBQGsgCBACQQJ0aiIHLwEAOwAAIAVBQGsgBy0AAhABIActAAMhByAEIAlqIgkgBiAFQShqIAgQAkECdGoiBC8BADsAACAFQShqIAQtAAIQASAELQADIQQgAyANaiIDIAYgBUEQaiAIEAJBAnRqIg0vAQA7AAAgBUEQaiANLQACEAEgACALaiEAIAcgCmohByAEIAlqIQQgAyANLQADaiEDIAVB2ABqEA0gBUFAaxANciAFQShqEA1yIAVBEGoQDXJFIQsMAQsLIAQgDksgByACS3INAEFsIQsgACAMSw0BIAxBfWohCQNAQQAgACAJSSAFQdgAahAEGwRAIAAgBiAFQdgAaiAIEAJBAnRqIgovAQA7AAAgBUHYAGogCi0AAhABIAAgCi0AA2oiACAGIAVB2ABqIAgQAkECdGoiCi8BADsAACAFQdgAaiAKLQACEAEgACAKLQADaiEADAEFIAxBfmohCgNAIAVB2ABqEAQgACAKS3JFBEAgACAGIAVB2ABqIAgQAkECdGoiCS8BADsAACAFQdgAaiAJLQACEAEgACAJLQADaiEADAELCwNAIAAgCk0EQCAAIAYgBUHYAGogCBACQQJ0aiIJLwEAOwAAIAVB2ABqIAktAAIQASAAIAktAANqIQAMAQsLAkAgACAMTw0AIAAgBiAFQdgAaiAIEAIiAEECdGoiDC0AADoAACAMLQADQQFGBEAgBUHYAGogDC0AAhABDAELIAUoAlxBH0sNACAFQdgAaiAGIABBAnRqLQACEAEgBSgCXEEhSQ0AIAVBIDYCXAsgAkF9aiEMA0BBACAHIAxJIAVBQGsQBBsEQCAHIAYgBUFAayAIEAJBAnRqIgAvAQA7AAAgBUFAayAALQACEAEgByAALQADaiIAIAYgBUFAayAIEAJBAnRqIgcvAQA7AAAgBUFAayAHLQACEAEgACAHLQADaiEHDAEFIAJBfmohDANAIAVBQGsQBCAHIAxLckUEQCAHIAYgBUFAayAIEAJBAnRqIgAvAQA7AAAgBUFAayAALQACEAEgByAALQADaiEHDAELCwNAIAcgDE0EQCAHIAYgBUFAayAIEAJBAnRqIgAvAQA7AAAgBUFAayAALQACEAEgByAALQADaiEHDAELCwJAIAcgAk8NACAHIAYgBUFAayAIEAIiAEECdGoiAi0AADoAACACLQADQQFGBEAgBUFAayACLQACEAEMAQsgBSgCREEfSw0AIAVBQGsgBiAAQQJ0ai0AAhABIAUoAkRBIUkNACAFQSA2AkQLIA5BfWohAgNAQQAgBCACSSAFQShqEAQbBEAgBCAGIAVBKGogCBACQQJ0aiIALwEAOwAAIAVBKGogAC0AAhABIAQgAC0AA2oiACAGIAVBKGogCBACQQJ0aiIELwEAOwAAIAVBKGogBC0AAhABIAAgBC0AA2ohBAwBBSAOQX5qIQIDQCAFQShqEAQgBCACS3JFBEAgBCAGIAVBKGogCBACQQJ0aiIALwEAOwAAIAVBKGogAC0AAhABIAQgAC0AA2ohBAwBCwsDQCAEIAJNBEAgBCAGIAVBKGogCBACQQJ0aiIALwEAOwAAIAVBKGogAC0AAhABIAQgAC0AA2ohBAwBCwsCQCAEIA5PDQAgBCAGIAVBKGogCBACIgBBAnRqIgItAAA6AAAgAi0AA0EBRgRAIAVBKGogAi0AAhABDAELIAUoAixBH0sNACAFQShqIAYgAEECdGotAAIQASAFKAIsQSFJDQAgBUEgNgIsCwNAQQAgAyAQSSAFQRBqEAQbBEAgAyAGIAVBEGogCBACQQJ0aiIALwEAOwAAIAVBEGogAC0AAhABIAMgAC0AA2oiACAGIAVBEGogCBACQQJ0aiICLwEAOwAAIAVBEGogAi0AAhABIAAgAi0AA2ohAwwBBSAPQX5qIQIDQCAFQRBqEAQgAyACS3JFBEAgAyAGIAVBEGogCBACQQJ0aiIALwEAOwAAIAVBEGogAC0AAhABIAMgAC0AA2ohAwwBCwsDQCADIAJNBEAgAyAGIAVBEGogCBACQQJ0aiIALwEAOwAAIAVBEGogAC0AAhABIAMgAC0AA2ohAwwBCwsCQCADIA9PDQAgAyAGIAVBEGogCBACIgBBAnRqIgItAAA6AAAgAi0AA0EBRgRAIAVBEGogAi0AAhABDAELIAUoAhRBH0sNACAFQRBqIAYgAEECdGotAAIQASAFKAIUQSFJDQAgBUEgNgIUCyABQWwgBUHYAGoQCiAFQUBrEApxIAVBKGoQCnEgBUEQahAKcRshCwwJCwAACwALAAALAAsAAAsACwAACwALQWwhCwsgBUHwAGokACALC7UEAQ5/IwBBEGsiBiQAIAZBBGogABAOQVQhBQJAIARB3AtJDQAgBi0ABCEHIANB8ARqQQBB7AAQECEIIAdBDEsNACADQdwJaiIJIAggBkEIaiAGQQxqIAEgAhAxIhAQA0UEQCAGKAIMIgQgB0sNASADQdwFaiEPIANBpAVqIREgAEEEaiESIANBqAVqIQEgBCEFA0AgBSICQX9qIQUgCCACQQJ0aigCAEUNAAsgAkEBaiEOQQEhBQNAIAUgDk9FBEAgCCAFQQJ0IgtqKAIAIQwgASALaiAKNgIAIAVBAWohBSAKIAxqIQoMAQsLIAEgCjYCAEEAIQUgBigCCCELA0AgBSALRkUEQCABIAUgCWotAAAiDEECdGoiDSANKAIAIg1BAWo2AgAgDyANQQF0aiINIAw6AAEgDSAFOgAAIAVBAWohBQwBCwtBACEBIANBADYCqAUgBEF/cyAHaiEJQQEhBQNAIAUgDk9FBEAgCCAFQQJ0IgtqKAIAIQwgAyALaiABNgIAIAwgBSAJanQgAWohASAFQQFqIQUMAQsLIAcgBEEBaiIBIAJrIgRrQQFqIQgDQEEBIQUgBCAIT0UEQANAIAUgDk9FBEAgBUECdCIJIAMgBEE0bGpqIAMgCWooAgAgBHY2AgAgBUEBaiEFDAELCyAEQQFqIQQMAQsLIBIgByAPIAogESADIAIgARBkIAZBAToABSAGIAc6AAYgACAGKAIENgIACyAQIQULIAZBEGokACAFC8ENAQt/IwBB8ABrIgUkAEFsIQkCQCADQQpJDQAgAi8AACEKIAIvAAIhDCACLwAEIQYgBUEIaiAEEA4CQCADIAYgCiAMampBBmoiDUkNACAFLQAKIQcgBUHYAGogAkEGaiICIAoQBiIJEAMNASAFQUBrIAIgCmoiAiAMEAYiCRADDQEgBUEoaiACIAxqIgIgBhAGIgkQAw0BIAVBEGogAiAGaiADIA1rEAYiCRADDQEgACABaiIOQX1qIQ8gBEEEaiEGQQEhCSAAIAFBA2pBAnYiAmoiCiACaiIMIAJqIg0hAyAMIQQgCiECA0AgCSADIA9JcQRAIAYgBUHYAGogBxACQQF0aiIILQAAIQsgBUHYAGogCC0AARABIAAgCzoAACAGIAVBQGsgBxACQQF0aiIILQAAIQsgBUFAayAILQABEAEgAiALOgAAIAYgBUEoaiAHEAJBAXRqIggtAAAhCyAFQShqIAgtAAEQASAEIAs6AAAgBiAFQRBqIAcQAkEBdGoiCC0AACELIAVBEGogCC0AARABIAMgCzoAACAGIAVB2ABqIAcQAkEBdGoiCC0AACELIAVB2ABqIAgtAAEQASAAIAs6AAEgBiAFQUBrIAcQAkEBdGoiCC0AACELIAVBQGsgCC0AARABIAIgCzoAASAGIAVBKGogBxACQQF0aiIILQAAIQsgBUEoaiAILQABEAEgBCALOgABIAYgBUEQaiAHEAJBAXRqIggtAAAhCyAFQRBqIAgtAAEQASADIAs6AAEgA0ECaiEDIARBAmohBCACQQJqIQIgAEECaiEAIAkgBUHYAGoQDUVxIAVBQGsQDUVxIAVBKGoQDUVxIAVBEGoQDUVxIQkMAQsLIAQgDUsgAiAMS3INAEFsIQkgACAKSw0BIApBfWohCQNAIAVB2ABqEAQgACAJT3JFBEAgBiAFQdgAaiAHEAJBAXRqIggtAAAhCyAFQdgAaiAILQABEAEgACALOgAAIAYgBUHYAGogBxACQQF0aiIILQAAIQsgBUHYAGogCC0AARABIAAgCzoAASAAQQJqIQAMAQsLA0AgBUHYAGoQBCAAIApPckUEQCAGIAVB2ABqIAcQAkEBdGoiCS0AACEIIAVB2ABqIAktAAEQASAAIAg6AAAgAEEBaiEADAELCwNAIAAgCkkEQCAGIAVB2ABqIAcQAkEBdGoiCS0AACEIIAVB2ABqIAktAAEQASAAIAg6AAAgAEEBaiEADAELCyAMQX1qIQADQCAFQUBrEAQgAiAAT3JFBEAgBiAFQUBrIAcQAkEBdGoiCi0AACEJIAVBQGsgCi0AARABIAIgCToAACAGIAVBQGsgBxACQQF0aiIKLQAAIQkgBUFAayAKLQABEAEgAiAJOgABIAJBAmohAgwBCwsDQCAFQUBrEAQgAiAMT3JFBEAgBiAFQUBrIAcQAkEBdGoiAC0AACEKIAVBQGsgAC0AARABIAIgCjoAACACQQFqIQIMAQsLA0AgAiAMSQRAIAYgBUFAayAHEAJBAXRqIgAtAAAhCiAFQUBrIAAtAAEQASACIAo6AAAgAkEBaiECDAELCyANQX1qIQADQCAFQShqEAQgBCAAT3JFBEAgBiAFQShqIAcQAkEBdGoiAi0AACEKIAVBKGogAi0AARABIAQgCjoAACAGIAVBKGogBxACQQF0aiICLQAAIQogBUEoaiACLQABEAEgBCAKOgABIARBAmohBAwBCwsDQCAFQShqEAQgBCANT3JFBEAgBiAFQShqIAcQAkEBdGoiAC0AACECIAVBKGogAC0AARABIAQgAjoAACAEQQFqIQQMAQsLA0AgBCANSQRAIAYgBUEoaiAHEAJBAXRqIgAtAAAhAiAFQShqIAAtAAEQASAEIAI6AAAgBEEBaiEEDAELCwNAIAVBEGoQBCADIA9PckUEQCAGIAVBEGogBxACQQF0aiIALQAAIQIgBUEQaiAALQABEAEgAyACOgAAIAYgBUEQaiAHEAJBAXRqIgAtAAAhAiAFQRBqIAAtAAEQASADIAI6AAEgA0ECaiEDDAELCwNAIAVBEGoQBCADIA5PckUEQCAGIAVBEGogBxACQQF0aiIALQAAIQIgBUEQaiAALQABEAEgAyACOgAAIANBAWohAwwBCwsDQCADIA5JBEAgBiAFQRBqIAcQAkEBdGoiAC0AACECIAVBEGogAC0AARABIAMgAjoAACADQQFqIQMMAQsLIAFBbCAFQdgAahAKIAVBQGsQCnEgBUEoahAKcSAFQRBqEApxGyEJDAELQWwhCQsgBUHwAGokACAJC8oCAQR/IwBBIGsiBSQAIAUgBBAOIAUtAAIhByAFQQhqIAIgAxAGIgIQA0UEQCAEQQRqIQIgACABaiIDQX1qIQQDQCAFQQhqEAQgACAET3JFBEAgAiAFQQhqIAcQAkEBdGoiBi0AACEIIAVBCGogBi0AARABIAAgCDoAACACIAVBCGogBxACQQF0aiIGLQAAIQggBUEIaiAGLQABEAEgACAIOgABIABBAmohAAwBCwsDQCAFQQhqEAQgACADT3JFBEAgAiAFQQhqIAcQAkEBdGoiBC0AACEGIAVBCGogBC0AARABIAAgBjoAACAAQQFqIQAMAQsLA0AgACADT0UEQCACIAVBCGogBxACQQF0aiIELQAAIQYgBUEIaiAELQABEAEgACAGOgAAIABBAWohAAwBCwsgAUFsIAVBCGoQChshAgsgBUEgaiQAIAILtgMBCX8jAEEQayIGJAAgBkEANgIMIAZBADYCCEFUIQQCQAJAIANBQGsiDCADIAZBCGogBkEMaiABIAIQMSICEAMNACAGQQRqIAAQDiAGKAIMIgcgBi0ABEEBaksNASAAQQRqIQogBkEAOgAFIAYgBzoABiAAIAYoAgQ2AgAgB0EBaiEJQQEhBANAIAQgCUkEQCADIARBAnRqIgEoAgAhACABIAU2AgAgACAEQX9qdCAFaiEFIARBAWohBAwBCwsgB0EBaiEHQQAhBSAGKAIIIQkDQCAFIAlGDQEgAyAFIAxqLQAAIgRBAnRqIgBBASAEdEEBdSILIAAoAgAiAWoiADYCACAHIARrIQhBACEEAkAgC0EDTQRAA0AgBCALRg0CIAogASAEakEBdGoiACAIOgABIAAgBToAACAEQQFqIQQMAAALAAsDQCABIABPDQEgCiABQQF0aiIEIAg6AAEgBCAFOgAAIAQgCDoAAyAEIAU6AAIgBCAIOgAFIAQgBToABCAEIAg6AAcgBCAFOgAGIAFBBGohAQwAAAsACyAFQQFqIQUMAAALAAsgAiEECyAGQRBqJAAgBAutAQECfwJAQYQgKAIAIABHIAAoAgBBAXYiAyABa0F4aiICQXhxQQhHcgR/IAIFIAMQJ0UNASACQQhqC0EQSQ0AIAAgACgCACICQQFxIAAgAWpBD2pBeHEiASAAa0EBdHI2AgAgASAANgIEIAEgASgCAEEBcSAAIAJBAXZqIAFrIgJBAXRyNgIAQYQgIAEgAkH/////B3FqQQRqQYQgKAIAIABGGyABNgIAIAEQJQsLygIBBX8CQAJAAkAgAEEIIABBCEsbZ0EfcyAAaUEBR2oiAUEESSAAIAF2cg0AIAFBAnRB/B5qKAIAIgJFDQADQCACQXhqIgMoAgBBAXZBeGoiBSAATwRAIAIgBUEIIAVBCEsbZ0Efc0ECdEGAH2oiASgCAEYEQCABIAIoAgQ2AgALDAMLIARBHksNASAEQQFqIQQgAigCBCICDQALC0EAIQMgAUEgTw0BA0AgAUECdEGAH2ooAgAiAkUEQCABQR5LIQIgAUEBaiEBIAJFDQEMAwsLIAIgAkF4aiIDKAIAQQF2QXhqIgFBCCABQQhLG2dBH3NBAnRBgB9qIgEoAgBGBEAgASACKAIENgIACwsgAigCACIBBEAgASACKAIENgIECyACKAIEIgEEQCABIAIoAgA2AgALIAMgAygCAEEBcjYCACADIAAQNwsgAwvhCwINfwV+IwBB8ABrIgckACAHIAAoAvDhASIINgJcIAEgAmohDSAIIAAoAoDiAWohDwJAAkAgBUUEQCABIQQMAQsgACgCxOABIRAgACgCwOABIREgACgCvOABIQ4gAEEBNgKM4QFBACEIA0AgCEEDRwRAIAcgCEECdCICaiAAIAJqQazQAWooAgA2AkQgCEEBaiEIDAELC0FsIQwgB0EYaiADIAQQBhADDQEgB0EsaiAHQRhqIAAoAgAQEyAHQTRqIAdBGGogACgCCBATIAdBPGogB0EYaiAAKAIEEBMgDUFgaiESIAEhBEEAIQwDQCAHKAIwIAcoAixBA3RqKQIAIhRCEIinQf8BcSEIIAcoAkAgBygCPEEDdGopAgAiFUIQiKdB/wFxIQsgBygCOCAHKAI0QQN0aikCACIWQiCIpyEJIBVCIIghFyAUQiCIpyECAkAgFkIQiKdB/wFxIgNBAk8EQAJAIAZFIANBGUlyRQRAIAkgB0EYaiADQSAgBygCHGsiCiAKIANLGyIKEAUgAyAKayIDdGohCSAHQRhqEAQaIANFDQEgB0EYaiADEAUgCWohCQwBCyAHQRhqIAMQBSAJaiEJIAdBGGoQBBoLIAcpAkQhGCAHIAk2AkQgByAYNwNIDAELAkAgA0UEQCACBEAgBygCRCEJDAMLIAcoAkghCQwBCwJAAkAgB0EYakEBEAUgCSACRWpqIgNBA0YEQCAHKAJEQX9qIgMgA0VqIQkMAQsgA0ECdCAHaigCRCIJIAlFaiEJIANBAUYNAQsgByAHKAJINgJMCwsgByAHKAJENgJIIAcgCTYCRAsgF6chAyALBEAgB0EYaiALEAUgA2ohAwsgCCALakEUTwRAIAdBGGoQBBoLIAgEQCAHQRhqIAgQBSACaiECCyAHQRhqEAQaIAcgB0EYaiAUQhiIp0H/AXEQCCAUp0H//wNxajYCLCAHIAdBGGogFUIYiKdB/wFxEAggFadB//8DcWo2AjwgB0EYahAEGiAHIAdBGGogFkIYiKdB/wFxEAggFqdB//8DcWo2AjQgByACNgJgIAcoAlwhCiAHIAk2AmggByADNgJkAkACQAJAIAQgAiADaiILaiASSw0AIAIgCmoiEyAPSw0AIA0gBGsgC0Egak8NAQsgByAHKQNoNwMQIAcgBykDYDcDCCAEIA0gB0EIaiAHQdwAaiAPIA4gESAQEB4hCwwBCyACIARqIQggBCAKEAcgAkERTwRAIARBEGohAgNAIAIgCkEQaiIKEAcgAkEQaiICIAhJDQALCyAIIAlrIQIgByATNgJcIAkgCCAOa0sEQCAJIAggEWtLBEBBbCELDAILIBAgAiAOayICaiIKIANqIBBNBEAgCCAKIAMQDxoMAgsgCCAKQQAgAmsQDyEIIAcgAiADaiIDNgJkIAggAmshCCAOIQILIAlBEE8EQCADIAhqIQMDQCAIIAIQByACQRBqIQIgCEEQaiIIIANJDQALDAELAkAgCUEHTQRAIAggAi0AADoAACAIIAItAAE6AAEgCCACLQACOgACIAggAi0AAzoAAyAIQQRqIAIgCUECdCIDQcAeaigCAGoiAhAXIAIgA0HgHmooAgBrIQIgBygCZCEDDAELIAggAhAMCyADQQlJDQAgAyAIaiEDIAhBCGoiCCACQQhqIgJrQQ9MBEADQCAIIAIQDCACQQhqIQIgCEEIaiIIIANJDQAMAgALAAsDQCAIIAIQByACQRBqIQIgCEEQaiIIIANJDQALCyAHQRhqEAQaIAsgDCALEAMiAhshDCAEIAQgC2ogAhshBCAFQX9qIgUNAAsgDBADDQFBbCEMIAdBGGoQBEECSQ0BQQAhCANAIAhBA0cEQCAAIAhBAnQiAmpBrNABaiACIAdqKAJENgIAIAhBAWohCAwBCwsgBygCXCEIC0G6fyEMIA8gCGsiACANIARrSw0AIAQEfyAEIAggABALIABqBUEACyABayEMCyAHQfAAaiQAIAwLkRcCFn8FfiMAQdABayIHJAAgByAAKALw4QEiCDYCvAEgASACaiESIAggACgCgOIBaiETAkACQCAFRQRAIAEhAwwBCyAAKALE4AEhESAAKALA4AEhFSAAKAK84AEhDyAAQQE2AozhAUEAIQgDQCAIQQNHBEAgByAIQQJ0IgJqIAAgAmpBrNABaigCADYCVCAIQQFqIQgMAQsLIAcgETYCZCAHIA82AmAgByABIA9rNgJoQWwhECAHQShqIAMgBBAGEAMNASAFQQQgBUEESBshFyAHQTxqIAdBKGogACgCABATIAdBxABqIAdBKGogACgCCBATIAdBzABqIAdBKGogACgCBBATQQAhBCAHQeAAaiEMIAdB5ABqIQoDQCAHQShqEARBAksgBCAXTnJFBEAgBygCQCAHKAI8QQN0aikCACIdQhCIp0H/AXEhCyAHKAJQIAcoAkxBA3RqKQIAIh5CEIinQf8BcSEJIAcoAkggBygCREEDdGopAgAiH0IgiKchCCAeQiCIISAgHUIgiKchAgJAIB9CEIinQf8BcSIDQQJPBEACQCAGRSADQRlJckUEQCAIIAdBKGogA0EgIAcoAixrIg0gDSADSxsiDRAFIAMgDWsiA3RqIQggB0EoahAEGiADRQ0BIAdBKGogAxAFIAhqIQgMAQsgB0EoaiADEAUgCGohCCAHQShqEAQaCyAHKQJUISEgByAINgJUIAcgITcDWAwBCwJAIANFBEAgAgRAIAcoAlQhCAwDCyAHKAJYIQgMAQsCQAJAIAdBKGpBARAFIAggAkVqaiIDQQNGBEAgBygCVEF/aiIDIANFaiEIDAELIANBAnQgB2ooAlQiCCAIRWohCCADQQFGDQELIAcgBygCWDYCXAsLIAcgBygCVDYCWCAHIAg2AlQLICCnIQMgCQRAIAdBKGogCRAFIANqIQMLIAkgC2pBFE8EQCAHQShqEAQaCyALBEAgB0EoaiALEAUgAmohAgsgB0EoahAEGiAHIAcoAmggAmoiCSADajYCaCAKIAwgCCAJSxsoAgAhDSAHIAdBKGogHUIYiKdB/wFxEAggHadB//8DcWo2AjwgByAHQShqIB5CGIinQf8BcRAIIB6nQf//A3FqNgJMIAdBKGoQBBogB0EoaiAfQhiIp0H/AXEQCCEOIAdB8ABqIARBBHRqIgsgCSANaiAIazYCDCALIAg2AgggCyADNgIEIAsgAjYCACAHIA4gH6dB//8DcWo2AkQgBEEBaiEEDAELCyAEIBdIDQEgEkFgaiEYIAdB4ABqIRogB0HkAGohGyABIQMDQCAHQShqEARBAksgBCAFTnJFBEAgBygCQCAHKAI8QQN0aikCACIdQhCIp0H/AXEhCyAHKAJQIAcoAkxBA3RqKQIAIh5CEIinQf8BcSEIIAcoAkggBygCREEDdGopAgAiH0IgiKchCSAeQiCIISAgHUIgiKchDAJAIB9CEIinQf8BcSICQQJPBEACQCAGRSACQRlJckUEQCAJIAdBKGogAkEgIAcoAixrIgogCiACSxsiChAFIAIgCmsiAnRqIQkgB0EoahAEGiACRQ0BIAdBKGogAhAFIAlqIQkMAQsgB0EoaiACEAUgCWohCSAHQShqEAQaCyAHKQJUISEgByAJNgJUIAcgITcDWAwBCwJAIAJFBEAgDARAIAcoAlQhCQwDCyAHKAJYIQkMAQsCQAJAIAdBKGpBARAFIAkgDEVqaiICQQNGBEAgBygCVEF/aiICIAJFaiEJDAELIAJBAnQgB2ooAlQiCSAJRWohCSACQQFGDQELIAcgBygCWDYCXAsLIAcgBygCVDYCWCAHIAk2AlQLICCnIRQgCARAIAdBKGogCBAFIBRqIRQLIAggC2pBFE8EQCAHQShqEAQaCyALBEAgB0EoaiALEAUgDGohDAsgB0EoahAEGiAHIAcoAmggDGoiGSAUajYCaCAbIBogCSAZSxsoAgAhHCAHIAdBKGogHUIYiKdB/wFxEAggHadB//8DcWo2AjwgByAHQShqIB5CGIinQf8BcRAIIB6nQf//A3FqNgJMIAdBKGoQBBogByAHQShqIB9CGIinQf8BcRAIIB+nQf//A3FqNgJEIAcgB0HwAGogBEEDcUEEdGoiDSkDCCIdNwPIASAHIA0pAwAiHjcDwAECQAJAAkAgBygCvAEiDiAepyICaiIWIBNLDQAgAyAHKALEASIKIAJqIgtqIBhLDQAgEiADayALQSBqTw0BCyAHIAcpA8gBNwMQIAcgBykDwAE3AwggAyASIAdBCGogB0G8AWogEyAPIBUgERAeIQsMAQsgAiADaiEIIAMgDhAHIAJBEU8EQCADQRBqIQIDQCACIA5BEGoiDhAHIAJBEGoiAiAISQ0ACwsgCCAdpyIOayECIAcgFjYCvAEgDiAIIA9rSwRAIA4gCCAVa0sEQEFsIQsMAgsgESACIA9rIgJqIhYgCmogEU0EQCAIIBYgChAPGgwCCyAIIBZBACACaxAPIQggByACIApqIgo2AsQBIAggAmshCCAPIQILIA5BEE8EQCAIIApqIQoDQCAIIAIQByACQRBqIQIgCEEQaiIIIApJDQALDAELAkAgDkEHTQRAIAggAi0AADoAACAIIAItAAE6AAEgCCACLQACOgACIAggAi0AAzoAAyAIQQRqIAIgDkECdCIKQcAeaigCAGoiAhAXIAIgCkHgHmooAgBrIQIgBygCxAEhCgwBCyAIIAIQDAsgCkEJSQ0AIAggCmohCiAIQQhqIgggAkEIaiICa0EPTARAA0AgCCACEAwgAkEIaiECIAhBCGoiCCAKSQ0ADAIACwALA0AgCCACEAcgAkEQaiECIAhBEGoiCCAKSQ0ACwsgCxADBEAgCyEQDAQFIA0gDDYCACANIBkgHGogCWs2AgwgDSAJNgIIIA0gFDYCBCAEQQFqIQQgAyALaiEDDAILAAsLIAQgBUgNASAEIBdrIQtBACEEA0AgCyAFSARAIAcgB0HwAGogC0EDcUEEdGoiAikDCCIdNwPIASAHIAIpAwAiHjcDwAECQAJAAkAgBygCvAEiDCAepyICaiIKIBNLDQAgAyAHKALEASIJIAJqIhBqIBhLDQAgEiADayAQQSBqTw0BCyAHIAcpA8gBNwMgIAcgBykDwAE3AxggAyASIAdBGGogB0G8AWogEyAPIBUgERAeIRAMAQsgAiADaiEIIAMgDBAHIAJBEU8EQCADQRBqIQIDQCACIAxBEGoiDBAHIAJBEGoiAiAISQ0ACwsgCCAdpyIGayECIAcgCjYCvAEgBiAIIA9rSwRAIAYgCCAVa0sEQEFsIRAMAgsgESACIA9rIgJqIgwgCWogEU0EQCAIIAwgCRAPGgwCCyAIIAxBACACaxAPIQggByACIAlqIgk2AsQBIAggAmshCCAPIQILIAZBEE8EQCAIIAlqIQYDQCAIIAIQByACQRBqIQIgCEEQaiIIIAZJDQALDAELAkAgBkEHTQRAIAggAi0AADoAACAIIAItAAE6AAEgCCACLQACOgACIAggAi0AAzoAAyAIQQRqIAIgBkECdCIGQcAeaigCAGoiAhAXIAIgBkHgHmooAgBrIQIgBygCxAEhCQwBCyAIIAIQDAsgCUEJSQ0AIAggCWohBiAIQQhqIgggAkEIaiICa0EPTARAA0AgCCACEAwgAkEIaiECIAhBCGoiCCAGSQ0ADAIACwALA0AgCCACEAcgAkEQaiECIAhBEGoiCCAGSQ0ACwsgEBADDQMgC0EBaiELIAMgEGohAwwBCwsDQCAEQQNHBEAgACAEQQJ0IgJqQazQAWogAiAHaigCVDYCACAEQQFqIQQMAQsLIAcoArwBIQgLQbp/IRAgEyAIayIAIBIgA2tLDQAgAwR/IAMgCCAAEAsgAGoFQQALIAFrIRALIAdB0AFqJAAgEAslACAAQgA3AgAgAEEAOwEIIABBADoACyAAIAE2AgwgACACOgAKC7QFAQN/IwBBMGsiBCQAIABB/wFqIgVBfWohBgJAIAMvAQIEQCAEQRhqIAEgAhAGIgIQAw0BIARBEGogBEEYaiADEBwgBEEIaiAEQRhqIAMQHCAAIQMDQAJAIARBGGoQBCADIAZPckUEQCADIARBEGogBEEYahASOgAAIAMgBEEIaiAEQRhqEBI6AAEgBEEYahAERQ0BIANBAmohAwsgBUF+aiEFAn8DQEG6fyECIAMiASAFSw0FIAEgBEEQaiAEQRhqEBI6AAAgAUEBaiEDIARBGGoQBEEDRgRAQQIhAiAEQQhqDAILIAMgBUsNBSABIARBCGogBEEYahASOgABIAFBAmohA0EDIQIgBEEYahAEQQNHDQALIARBEGoLIQUgAyAFIARBGGoQEjoAACABIAJqIABrIQIMAwsgAyAEQRBqIARBGGoQEjoAAiADIARBCGogBEEYahASOgADIANBBGohAwwAAAsACyAEQRhqIAEgAhAGIgIQAw0AIARBEGogBEEYaiADEBwgBEEIaiAEQRhqIAMQHCAAIQMDQAJAIARBGGoQBCADIAZPckUEQCADIARBEGogBEEYahAROgAAIAMgBEEIaiAEQRhqEBE6AAEgBEEYahAERQ0BIANBAmohAwsgBUF+aiEFAn8DQEG6fyECIAMiASAFSw0EIAEgBEEQaiAEQRhqEBE6AAAgAUEBaiEDIARBGGoQBEEDRgRAQQIhAiAEQQhqDAILIAMgBUsNBCABIARBCGogBEEYahAROgABIAFBAmohA0EDIQIgBEEYahAEQQNHDQALIARBEGoLIQUgAyAFIARBGGoQEToAACABIAJqIABrIQIMAgsgAyAEQRBqIARBGGoQEToAAiADIARBCGogBEEYahAROgADIANBBGohAwwAAAsACyAEQTBqJAAgAgtpAQF/An8CQAJAIAJBB00NACABKAAAQbfIwuF+Rw0AIAAgASgABDYCmOIBQWIgAEEQaiABIAIQPiIDEAMNAhogAEKBgICAEDcDiOEBIAAgASADaiACIANrECoMAQsgACABIAIQKgtBAAsLrQMBBn8jAEGAAWsiAyQAQWIhCAJAIAJBCUkNACAAQZjQAGogAUEIaiIEIAJBeGogAEGY0AAQMyIFEAMiBg0AIANBHzYCfCADIANB/ABqIANB+ABqIAQgBCAFaiAGGyIEIAEgAmoiAiAEaxAVIgUQAw0AIAMoAnwiBkEfSw0AIAMoAngiB0EJTw0AIABBiCBqIAMgBkGAC0GADCAHEBggA0E0NgJ8IAMgA0H8AGogA0H4AGogBCAFaiIEIAIgBGsQFSIFEAMNACADKAJ8IgZBNEsNACADKAJ4IgdBCk8NACAAQZAwaiADIAZBgA1B4A4gBxAYIANBIzYCfCADIANB/ABqIANB+ABqIAQgBWoiBCACIARrEBUiBRADDQAgAygCfCIGQSNLDQAgAygCeCIHQQpPDQAgACADIAZBwBBB0BEgBxAYIAQgBWoiBEEMaiIFIAJLDQAgAiAFayEFQQAhAgNAIAJBA0cEQCAEKAAAIgZBf2ogBU8NAiAAIAJBAnRqQZzQAWogBjYCACACQQFqIQIgBEEEaiEEDAELCyAEIAFrIQgLIANBgAFqJAAgCAtGAQN/IABBCGohAyAAKAIEIQJBACEAA0AgACACdkUEQCABIAMgAEEDdGotAAJBFktqIQEgAEEBaiEADAELCyABQQggAmt0C4YDAQV/Qbh/IQcCQCADRQ0AIAItAAAiBEUEQCABQQA2AgBBAUG4fyADQQFGGw8LAn8gAkEBaiIFIARBGHRBGHUiBkF/Sg0AGiAGQX9GBEAgA0EDSA0CIAUvAABBgP4BaiEEIAJBA2oMAQsgA0ECSA0BIAItAAEgBEEIdHJBgIB+aiEEIAJBAmoLIQUgASAENgIAIAVBAWoiASACIANqIgNLDQBBbCEHIABBEGogACAFLQAAIgVBBnZBI0EJIAEgAyABa0HAEEHQEUHwEiAAKAKM4QEgACgCnOIBIAQQHyIGEAMiCA0AIABBmCBqIABBCGogBUEEdkEDcUEfQQggASABIAZqIAgbIgEgAyABa0GAC0GADEGAFyAAKAKM4QEgACgCnOIBIAQQHyIGEAMiCA0AIABBoDBqIABBBGogBUECdkEDcUE0QQkgASABIAZqIAgbIgEgAyABa0GADUHgDkGQGSAAKAKM4QEgACgCnOIBIAQQHyIAEAMNACAAIAFqIAJrIQcLIAcLrQMBCn8jAEGABGsiCCQAAn9BUiACQf8BSw0AGkFUIANBDEsNABogAkEBaiELIABBBGohCUGAgAQgA0F/anRBEHUhCkEAIQJBASEEQQEgA3QiB0F/aiIMIQUDQCACIAtGRQRAAkAgASACQQF0Ig1qLwEAIgZB//8DRgRAIAkgBUECdGogAjoAAiAFQX9qIQVBASEGDAELIARBACAKIAZBEHRBEHVKGyEECyAIIA1qIAY7AQAgAkEBaiECDAELCyAAIAQ7AQIgACADOwEAIAdBA3YgB0EBdmpBA2ohBkEAIQRBACECA0AgBCALRkUEQCABIARBAXRqLgEAIQpBACEAA0AgACAKTkUEQCAJIAJBAnRqIAQ6AAIDQCACIAZqIAxxIgIgBUsNAAsgAEEBaiEADAELCyAEQQFqIQQMAQsLQX8gAg0AGkEAIQIDfyACIAdGBH9BAAUgCCAJIAJBAnRqIgAtAAJBAXRqIgEgAS8BACIBQQFqOwEAIAAgAyABEBRrIgU6AAMgACABIAVB/wFxdCAHazsBACACQQFqIQIMAQsLCyEFIAhBgARqJAAgBQvjBgEIf0FsIQcCQCACQQNJDQACQAJAAkACQCABLQAAIgNBA3EiCUEBaw4DAwEAAgsgACgCiOEBDQBBYg8LIAJBBUkNAkEDIQYgASgAACEFAn8CQAJAIANBAnZBA3EiCEF+aiIEQQFNBEAgBEEBaw0BDAILIAVBDnZB/wdxIQQgBUEEdkH/B3EhAyAIRQwCCyAFQRJ2IQRBBCEGIAVBBHZB//8AcSEDQQAMAQsgBUEEdkH//w9xIgNBgIAISw0DIAEtAARBCnQgBUEWdnIhBEEFIQZBAAshBSAEIAZqIgogAksNAgJAIANBgQZJDQAgACgCnOIBRQ0AQQAhAgNAIAJBg4ABSw0BIAJBQGshAgwAAAsACwJ/IAlBA0YEQCABIAZqIQEgAEHw4gFqIQIgACgCDCEGIAUEQCACIAMgASAEIAYQXwwCCyACIAMgASAEIAYQXQwBCyAAQbjQAWohAiABIAZqIQEgAEHw4gFqIQYgAEGo0ABqIQggBQRAIAggBiADIAEgBCACEF4MAQsgCCAGIAMgASAEIAIQXAsQAw0CIAAgAzYCgOIBIABBATYCiOEBIAAgAEHw4gFqNgLw4QEgCUECRgRAIAAgAEGo0ABqNgIMCyAAIANqIgBBiOMBakIANwAAIABBgOMBakIANwAAIABB+OIBakIANwAAIABB8OIBakIANwAAIAoPCwJ/AkACQAJAIANBAnZBA3FBf2oiBEECSw0AIARBAWsOAgACAQtBASEEIANBA3YMAgtBAiEEIAEvAABBBHYMAQtBAyEEIAEQIUEEdgsiAyAEaiIFQSBqIAJLBEAgBSACSw0CIABB8OIBaiABIARqIAMQCyEBIAAgAzYCgOIBIAAgATYC8OEBIAEgA2oiAEIANwAYIABCADcAECAAQgA3AAggAEIANwAAIAUPCyAAIAM2AoDiASAAIAEgBGo2AvDhASAFDwsCfwJAAkACQCADQQJ2QQNxQX9qIgRBAksNACAEQQFrDgIAAgELQQEhByADQQN2DAILQQIhByABLwAAQQR2DAELIAJBBEkgARAhIgJBj4CAAUtyDQFBAyEHIAJBBHYLIQIgAEHw4gFqIAEgB2otAAAgAkEgahAQIQEgACACNgKA4gEgACABNgLw4QEgB0EBaiEHCyAHC0sAIABC+erQ0OfJoeThADcDICAAQgA3AxggAELP1tO+0ser2UI3AxAgAELW64Lu6v2J9eAANwMIIABCADcDACAAQShqQQBBKBAQGgviAgICfwV+IABBKGoiASAAKAJIaiECAn4gACkDACIDQiBaBEAgACkDECIEQgeJIAApAwgiBUIBiXwgACkDGCIGQgyJfCAAKQMgIgdCEol8IAUQGSAEEBkgBhAZIAcQGQwBCyAAKQMYQsXP2bLx5brqJ3wLIAN8IQMDQCABQQhqIgAgAk0EQEIAIAEpAAAQCSADhUIbiUKHla+vmLbem55/fkLj3MqV/M7y9YV/fCEDIAAhAQwBCwsCQCABQQRqIgAgAksEQCABIQAMAQsgASgAAK1Ch5Wvr5i23puef34gA4VCF4lCz9bTvtLHq9lCfkL5893xmfaZqxZ8IQMLA0AgACACSQRAIAAxAABCxc/ZsvHluuonfiADhUILiUKHla+vmLbem55/fiEDIABBAWohAAwBCwsgA0IhiCADhULP1tO+0ser2UJ+IgNCHYggA4VC+fPd8Zn2masWfiIDQiCIIAOFC+8CAgJ/BH4gACAAKQMAIAKtfDcDAAJAAkAgACgCSCIDIAJqIgRBH00EQCABRQ0BIAAgA2pBKGogASACECAgACgCSCACaiEEDAELIAEgAmohAgJ/IAMEQCAAQShqIgQgA2ogAUEgIANrECAgACAAKQMIIAQpAAAQCTcDCCAAIAApAxAgACkAMBAJNwMQIAAgACkDGCAAKQA4EAk3AxggACAAKQMgIABBQGspAAAQCTcDICAAKAJIIQMgAEEANgJIIAEgA2tBIGohAQsgAUEgaiACTQsEQCACQWBqIQMgACkDICEFIAApAxghBiAAKQMQIQcgACkDCCEIA0AgCCABKQAAEAkhCCAHIAEpAAgQCSEHIAYgASkAEBAJIQYgBSABKQAYEAkhBSABQSBqIgEgA00NAAsgACAFNwMgIAAgBjcDGCAAIAc3AxAgACAINwMICyABIAJPDQEgAEEoaiABIAIgAWsiBBAgCyAAIAQ2AkgLCy8BAX8gAEUEQEG2f0EAIAMbDwtBun8hBCADIAFNBH8gACACIAMQEBogAwVBun8LCy8BAX8gAEUEQEG2f0EAIAMbDwtBun8hBCADIAFNBH8gACACIAMQCxogAwVBun8LC6gCAQZ/IwBBEGsiByQAIABB2OABaikDAEKAgIAQViEIQbh/IQUCQCAEQf//B0sNACAAIAMgBBBCIgUQAyIGDQAgACgCnOIBIQkgACAHQQxqIAMgAyAFaiAGGyIKIARBACAFIAYbayIGEEAiAxADBEAgAyEFDAELIAcoAgwhBCABRQRAQbp/IQUgBEEASg0BCyAGIANrIQUgAyAKaiEDAkAgCQRAIABBADYCnOIBDAELAkACQAJAIARBBUgNACAAQdjgAWopAwBCgICACFgNAAwBCyAAQQA2ApziAQwBCyAAKAIIED8hBiAAQQA2ApziASAGQRRPDQELIAAgASACIAMgBSAEIAgQOSEFDAELIAAgASACIAMgBSAEIAgQOiEFCyAHQRBqJAAgBQtnACAAQdDgAWogASACIAAoAuzhARAuIgEQAwRAIAEPC0G4fyECAkAgAQ0AIABB7OABaigCACIBBEBBYCECIAAoApjiASABRw0BC0EAIQIgAEHw4AFqKAIARQ0AIABBkOEBahBDCyACCycBAX8QVyIERQRAQUAPCyAEIAAgASACIAMgBBBLEE8hACAEEFYgAAs/AQF/AkACQAJAIAAoAqDiAUEBaiIBQQJLDQAgAUEBaw4CAAECCyAAEDBBAA8LIABBADYCoOIBCyAAKAKU4gELvAMCB38BfiMAQRBrIgkkAEG4fyEGAkAgBCgCACIIQQVBCSAAKALs4QEiBRtJDQAgAygCACIHQQFBBSAFGyAFEC8iBRADBEAgBSEGDAELIAggBUEDakkNACAAIAcgBRBJIgYQAw0AIAEgAmohCiAAQZDhAWohCyAIIAVrIQIgBSAHaiEHIAEhBQNAIAcgAiAJECwiBhADDQEgAkF9aiICIAZJBEBBuH8hBgwCCyAJKAIAIghBAksEQEFsIQYMAgsgB0EDaiEHAn8CQAJAAkAgCEEBaw4CAgABCyAAIAUgCiAFayAHIAYQSAwCCyAFIAogBWsgByAGEEcMAQsgBSAKIAVrIActAAAgCSgCCBBGCyIIEAMEQCAIIQYMAgsgACgC8OABBEAgCyAFIAgQRQsgAiAGayECIAYgB2ohByAFIAhqIQUgCSgCBEUNAAsgACkD0OABIgxCf1IEQEFsIQYgDCAFIAFrrFINAQsgACgC8OABBEBBaiEGIAJBBEkNASALEEQhDCAHKAAAIAynRw0BIAdBBGohByACQXxqIQILIAMgBzYCACAEIAI2AgAgBSABayEGCyAJQRBqJAAgBgsuACAAECsCf0EAQQAQAw0AGiABRSACRXJFBEBBYiAAIAEgAhA9EAMNARoLQQALCzcAIAEEQCAAIAAoAsTgASABKAIEIAEoAghqRzYCnOIBCyAAECtBABADIAFFckUEQCAAIAEQWwsL0QIBB38jAEEQayIGJAAgBiAENgIIIAYgAzYCDCAFBEAgBSgCBCEKIAUoAgghCQsgASEIAkACQANAIAAoAuzhARAWIQsCQANAIAQgC0kNASADKAAAQXBxQdDUtMIBRgRAIAMgBBAiIgcQAw0EIAQgB2shBCADIAdqIQMMAQsLIAYgAzYCDCAGIAQ2AggCQCAFBEAgACAFEE5BACEHQQAQA0UNAQwFCyAAIAogCRBNIgcQAw0ECyAAIAgQUCAMQQFHQQAgACAIIAIgBkEMaiAGQQhqEEwiByIDa0EAIAMQAxtBCkdyRQRAQbh/IQcMBAsgBxADDQMgAiAHayECIAcgCGohCEEBIQwgBigCDCEDIAYoAgghBAwBCwsgBiADNgIMIAYgBDYCCEG4fyEHIAQNASAIIAFrIQcMAQsgBiADNgIMIAYgBDYCCAsgBkEQaiQAIAcLRgECfyABIAAoArjgASICRwRAIAAgAjYCxOABIAAgATYCuOABIAAoArzgASEDIAAgATYCvOABIAAgASADIAJrajYCwOABCwutAgIEfwF+IwBBQGoiBCQAAkACQCACQQhJDQAgASgAAEFwcUHQ1LTCAUcNACABIAIQIiEBIABCADcDCCAAQQA2AgQgACABNgIADAELIARBGGogASACEC0iAxADBEAgACADEBoMAQsgAwRAIABBuH8QGgwBCyACIAQoAjAiA2shAiABIANqIQMDQAJAIAAgAyACIARBCGoQLCIFEAMEfyAFBSACIAVBA2oiBU8NAUG4fwsQGgwCCyAGQQFqIQYgAiAFayECIAMgBWohAyAEKAIMRQ0ACyAEKAI4BEAgAkEDTQRAIABBuH8QGgwCCyADQQRqIQMLIAQoAighAiAEKQMYIQcgAEEANgIEIAAgAyABazYCACAAIAIgBmytIAcgB0J/URs3AwgLIARBQGskAAslAQF/IwBBEGsiAiQAIAIgACABEFEgAigCACEAIAJBEGokACAAC30BBH8jAEGQBGsiBCQAIARB/wE2AggCQCAEQRBqIARBCGogBEEMaiABIAIQFSIGEAMEQCAGIQUMAQtBVCEFIAQoAgwiB0EGSw0AIAMgBEEQaiAEKAIIIAcQQSIFEAMNACAAIAEgBmogAiAGayADEDwhBQsgBEGQBGokACAFC4cBAgJ/An5BABAWIQMCQANAIAEgA08EQAJAIAAoAABBcHFB0NS0wgFGBEAgACABECIiAhADRQ0BQn4PCyAAIAEQVSIEQn1WDQMgBCAFfCIFIARUIQJCfiEEIAINAyAAIAEQUiICEAMNAwsgASACayEBIAAgAmohAAwBCwtCfiAFIAEbIQQLIAQLPwIBfwF+IwBBMGsiAiQAAn5CfiACQQhqIAAgARAtDQAaQgAgAigCHEEBRg0AGiACKQMICyEDIAJBMGokACADC40BAQJ/IwBBMGsiASQAAkAgAEUNACAAKAKI4gENACABIABB/OEBaigCADYCKCABIAApAvThATcDICAAEDAgACgCqOIBIQIgASABKAIoNgIYIAEgASkDIDcDECACIAFBEGoQGyAAQQA2AqjiASABIAEoAig2AgggASABKQMgNwMAIAAgARAbCyABQTBqJAALKgECfyMAQRBrIgAkACAAQQA2AgggAEIANwMAIAAQWCEBIABBEGokACABC4cBAQN/IwBBEGsiAiQAAkAgACgCAEUgACgCBEVzDQAgAiAAKAIINgIIIAIgACkCADcDAAJ/IAIoAgAiAQRAIAIoAghBqOMJIAERBQAMAQtBqOMJECgLIgFFDQAgASAAKQIANwL04QEgAUH84QFqIAAoAgg2AgAgARBZIAEhAwsgAkEQaiQAIAMLywEBAn8jAEEgayIBJAAgAEGBgIDAADYCtOIBIABBADYCiOIBIABBADYC7OEBIABCADcDkOIBIABBADYCpOMJIABBADYC3OIBIABCADcCzOIBIABBADYCvOIBIABBADYCxOABIABCADcCnOIBIABBpOIBakIANwIAIABBrOIBakEANgIAIAFCADcCECABQgA3AhggASABKQMYNwMIIAEgASkDEDcDACABKAIIQQh2QQFxIQIgAEEANgLg4gEgACACNgKM4gEgAUEgaiQAC3YBA38jAEEwayIBJAAgAARAIAEgAEHE0AFqIgIoAgA2AiggASAAKQK80AE3AyAgACgCACEDIAEgAigCADYCGCABIAApArzQATcDECADIAFBEGoQGyABIAEoAig2AgggASABKQMgNwMAIAAgARAbCyABQTBqJAALzAEBAX8gACABKAK00AE2ApjiASAAIAEoAgQiAjYCwOABIAAgAjYCvOABIAAgAiABKAIIaiICNgK44AEgACACNgLE4AEgASgCuNABBEAgAEKBgICAEDcDiOEBIAAgAUGk0ABqNgIMIAAgAUGUIGo2AgggACABQZwwajYCBCAAIAFBDGo2AgAgAEGs0AFqIAFBqNABaigCADYCACAAQbDQAWogAUGs0AFqKAIANgIAIABBtNABaiABQbDQAWooAgA2AgAPCyAAQgA3A4jhAQs7ACACRQRAQbp/DwsgBEUEQEFsDwsgAiAEEGAEQCAAIAEgAiADIAQgBRBhDwsgACABIAIgAyAEIAUQZQtGAQF/IwBBEGsiBSQAIAVBCGogBBAOAn8gBS0ACQRAIAAgASACIAMgBBAyDAELIAAgASACIAMgBBA0CyEAIAVBEGokACAACzQAIAAgAyAEIAUQNiIFEAMEQCAFDwsgBSAESQR/IAEgAiADIAVqIAQgBWsgABA1BUG4fwsLRgEBfyMAQRBrIgUkACAFQQhqIAQQDgJ/IAUtAAkEQCAAIAEgAiADIAQQYgwBCyAAIAEgAiADIAQQNQshACAFQRBqJAAgAAtZAQF/QQ8hAiABIABJBEAgAUEEdCAAbiECCyAAQQh2IgEgAkEYbCIAQYwIaigCAGwgAEGICGooAgBqIgJBA3YgAmogAEGACGooAgAgAEGECGooAgAgAWxqSQs3ACAAIAMgBCAFQYAQEDMiBRADBEAgBQ8LIAUgBEkEfyABIAIgAyAFaiAEIAVrIAAQMgVBuH8LC78DAQN/IwBBIGsiBSQAIAVBCGogAiADEAYiAhADRQRAIAAgAWoiB0F9aiEGIAUgBBAOIARBBGohAiAFLQACIQMDQEEAIAAgBkkgBUEIahAEGwRAIAAgAiAFQQhqIAMQAkECdGoiBC8BADsAACAFQQhqIAQtAAIQASAAIAQtAANqIgQgAiAFQQhqIAMQAkECdGoiAC8BADsAACAFQQhqIAAtAAIQASAEIAAtAANqIQAMAQUgB0F+aiEEA0AgBUEIahAEIAAgBEtyRQRAIAAgAiAFQQhqIAMQAkECdGoiBi8BADsAACAFQQhqIAYtAAIQASAAIAYtAANqIQAMAQsLA0AgACAES0UEQCAAIAIgBUEIaiADEAJBAnRqIgYvAQA7AAAgBUEIaiAGLQACEAEgACAGLQADaiEADAELCwJAIAAgB08NACAAIAIgBUEIaiADEAIiA0ECdGoiAC0AADoAACAALQADQQFGBEAgBUEIaiAALQACEAEMAQsgBSgCDEEfSw0AIAVBCGogAiADQQJ0ai0AAhABIAUoAgxBIUkNACAFQSA2AgwLIAFBbCAFQQhqEAobIQILCwsgBUEgaiQAIAILkgIBBH8jAEFAaiIJJAAgCSADQTQQCyEDAkAgBEECSA0AIAMgBEECdGooAgAhCSADQTxqIAgQIyADQQE6AD8gAyACOgA+QQAhBCADKAI8IQoDQCAEIAlGDQEgACAEQQJ0aiAKNgEAIARBAWohBAwAAAsAC0EAIQkDQCAGIAlGRQRAIAMgBSAJQQF0aiIKLQABIgtBAnRqIgwoAgAhBCADQTxqIAotAABBCHQgCGpB//8DcRAjIANBAjoAPyADIAcgC2siCiACajoAPiAEQQEgASAKa3RqIQogAygCPCELA0AgACAEQQJ0aiALNgEAIARBAWoiBCAKSQ0ACyAMIAo2AgAgCUEBaiEJDAELCyADQUBrJAALowIBCX8jAEHQAGsiCSQAIAlBEGogBUE0EAsaIAcgBmshDyAHIAFrIRADQAJAIAMgCkcEQEEBIAEgByACIApBAXRqIgYtAAEiDGsiCGsiC3QhDSAGLQAAIQ4gCUEQaiAMQQJ0aiIMKAIAIQYgCyAPTwRAIAAgBkECdGogCyAIIAUgCEE0bGogCCAQaiIIQQEgCEEBShsiCCACIAQgCEECdGooAgAiCEEBdGogAyAIayAHIA4QYyAGIA1qIQgMAgsgCUEMaiAOECMgCUEBOgAPIAkgCDoADiAGIA1qIQggCSgCDCELA0AgBiAITw0CIAAgBkECdGogCzYBACAGQQFqIQYMAAALAAsgCUHQAGokAA8LIAwgCDYCACAKQQFqIQoMAAALAAs0ACAAIAMgBCAFEDYiBRADBEAgBQ8LIAUgBEkEfyABIAIgAyAFaiAEIAVrIAAQNAVBuH8LCyMAIAA/AEEQdGtB//8DakEQdkAAQX9GBEBBAA8LQQAQAEEBCzsBAX8gAgRAA0AgACABIAJBgCAgAkGAIEkbIgMQCyEAIAFBgCBqIQEgAEGAIGohACACIANrIgINAAsLCwYAIAAQAwsLqBUJAEGICAsNAQAAAAEAAAACAAAAAgBBoAgLswYBAAAAAQAAAAIAAAACAAAAJgAAAIIAAAAhBQAASgAAAGcIAAAmAAAAwAEAAIAAAABJBQAASgAAAL4IAAApAAAALAIAAIAAAABJBQAASgAAAL4IAAAvAAAAygIAAIAAAACKBQAASgAAAIQJAAA1AAAAcwMAAIAAAACdBQAASgAAAKAJAAA9AAAAgQMAAIAAAADrBQAASwAAAD4KAABEAAAAngMAAIAAAABNBgAASwAAAKoKAABLAAAAswMAAIAAAADBBgAATQAAAB8NAABNAAAAUwQAAIAAAAAjCAAAUQAAAKYPAABUAAAAmQQAAIAAAABLCQAAVwAAALESAABYAAAA2gQAAIAAAABvCQAAXQAAACMUAABUAAAARQUAAIAAAABUCgAAagAAAIwUAABqAAAArwUAAIAAAAB2CQAAfAAAAE4QAAB8AAAA0gIAAIAAAABjBwAAkQAAAJAHAACSAAAAAAAAAAEAAAABAAAABQAAAA0AAAAdAAAAPQAAAH0AAAD9AAAA/QEAAP0DAAD9BwAA/Q8AAP0fAAD9PwAA/X8AAP3/AAD9/wEA/f8DAP3/BwD9/w8A/f8fAP3/PwD9/38A/f//AP3//wH9//8D/f//B/3//w/9//8f/f//P/3//38AAAAAAQAAAAIAAAADAAAABAAAAAUAAAAGAAAABwAAAAgAAAAJAAAACgAAAAsAAAAMAAAADQAAAA4AAAAPAAAAEAAAABEAAAASAAAAEwAAABQAAAAVAAAAFgAAABcAAAAYAAAAGQAAABoAAAAbAAAAHAAAAB0AAAAeAAAAHwAAAAMAAAAEAAAABQAAAAYAAAAHAAAACAAAAAkAAAAKAAAACwAAAAwAAAANAAAADgAAAA8AAAAQAAAAEQAAABIAAAATAAAAFAAAABUAAAAWAAAAFwAAABgAAAAZAAAAGgAAABsAAAAcAAAAHQAAAB4AAAAfAAAAIAAAACEAAAAiAAAAIwAAACUAAAAnAAAAKQAAACsAAAAvAAAAMwAAADsAAABDAAAAUwAAAGMAAACDAAAAAwEAAAMCAAADBAAAAwgAAAMQAAADIAAAA0AAAAOAAAADAAEAQeAPC1EBAAAAAQAAAAEAAAABAAAAAgAAAAIAAAADAAAAAwAAAAQAAAAEAAAABQAAAAcAAAAIAAAACQAAAAoAAAALAAAADAAAAA0AAAAOAAAADwAAABAAQcQQC4sBAQAAAAIAAAADAAAABAAAAAUAAAAGAAAABwAAAAgAAAAJAAAACgAAAAsAAAAMAAAADQAAAA4AAAAPAAAAEAAAABIAAAAUAAAAFgAAABgAAAAcAAAAIAAAACgAAAAwAAAAQAAAAIAAAAAAAQAAAAIAAAAEAAAACAAAABAAAAAgAAAAQAAAAIAAAAAAAQBBkBIL5gQBAAAAAQAAAAEAAAABAAAAAgAAAAIAAAADAAAAAwAAAAQAAAAGAAAABwAAAAgAAAAJAAAACgAAAAsAAAAMAAAADQAAAA4AAAAPAAAAEAAAAAEAAAAEAAAACAAAAAAAAAABAAEBBgAAAAAAAAQAAAAAEAAABAAAAAAgAAAFAQAAAAAAAAUDAAAAAAAABQQAAAAAAAAFBgAAAAAAAAUHAAAAAAAABQkAAAAAAAAFCgAAAAAAAAUMAAAAAAAABg4AAAAAAAEFEAAAAAAAAQUUAAAAAAABBRYAAAAAAAIFHAAAAAAAAwUgAAAAAAAEBTAAAAAgAAYFQAAAAAAABwWAAAAAAAAIBgABAAAAAAoGAAQAAAAADAYAEAAAIAAABAAAAAAAAAAEAQAAAAAAAAUCAAAAIAAABQQAAAAAAAAFBQAAACAAAAUHAAAAAAAABQgAAAAgAAAFCgAAAAAAAAULAAAAAAAABg0AAAAgAAEFEAAAAAAAAQUSAAAAIAABBRYAAAAAAAIFGAAAACAAAwUgAAAAAAADBSgAAAAAAAYEQAAAABAABgRAAAAAIAAHBYAAAAAAAAkGAAIAAAAACwYACAAAMAAABAAAAAAQAAAEAQAAACAAAAUCAAAAIAAABQMAAAAgAAAFBQAAACAAAAUGAAAAIAAABQgAAAAgAAAFCQAAACAAAAULAAAAIAAABQwAAAAAAAAGDwAAACAAAQUSAAAAIAABBRQAAAAgAAIFGAAAACAAAgUcAAAAIAADBSgAAAAgAAQFMAAAAAAAEAYAAAEAAAAPBgCAAAAAAA4GAEAAAAAADQYAIABBgBcLhwIBAAEBBQAAAAAAAAUAAAAAAAAGBD0AAAAAAAkF/QEAAAAADwX9fwAAAAAVBf3/HwAAAAMFBQAAAAAABwR9AAAAAAAMBf0PAAAAABIF/f8DAAAAFwX9/38AAAAFBR0AAAAAAAgE/QAAAAAADgX9PwAAAAAUBf3/DwAAAAIFAQAAABAABwR9AAAAAAALBf0HAAAAABEF/f8BAAAAFgX9/z8AAAAEBQ0AAAAQAAgE/QAAAAAADQX9HwAAAAATBf3/BwAAAAEFAQAAABAABgQ9AAAAAAAKBf0DAAAAABAF/f8AAAAAHAX9//8PAAAbBf3//wcAABoF/f//AwAAGQX9//8BAAAYBf3//wBBkBkLhgQBAAEBBgAAAAAAAAYDAAAAAAAABAQAAAAgAAAFBQAAAAAAAAUGAAAAAAAABQgAAAAAAAAFCQAAAAAAAAULAAAAAAAABg0AAAAAAAAGEAAAAAAAAAYTAAAAAAAABhYAAAAAAAAGGQAAAAAAAAYcAAAAAAAABh8AAAAAAAAGIgAAAAAAAQYlAAAAAAABBikAAAAAAAIGLwAAAAAAAwY7AAAAAAAEBlMAAAAAAAcGgwAAAAAACQYDAgAAEAAABAQAAAAAAAAEBQAAACAAAAUGAAAAAAAABQcAAAAgAAAFCQAAAAAAAAUKAAAAAAAABgwAAAAAAAAGDwAAAAAAAAYSAAAAAAAABhUAAAAAAAAGGAAAAAAAAAYbAAAAAAAABh4AAAAAAAAGIQAAAAAAAQYjAAAAAAABBicAAAAAAAIGKwAAAAAAAwYzAAAAAAAEBkMAAAAAAAUGYwAAAAAACAYDAQAAIAAABAQAAAAwAAAEBAAAABAAAAQFAAAAIAAABQcAAAAgAAAFCAAAACAAAAUKAAAAIAAABQsAAAAAAAAGDgAAAAAAAAYRAAAAAAAABhQAAAAAAAAGFwAAAAAAAAYaAAAAAAAABh0AAAAAAAAGIAAAAAAAEAYDAAEAAAAPBgOAAAAAAA4GA0AAAAAADQYDIAAAAAAMBgMQAAAAAAsGAwgAAAAACgYDBABBpB0L2QEBAAAAAwAAAAcAAAAPAAAAHwAAAD8AAAB/AAAA/wAAAP8BAAD/AwAA/wcAAP8PAAD/HwAA/z8AAP9/AAD//wAA//8BAP//AwD//wcA//8PAP//HwD//z8A//9/AP///wD///8B////A////wf///8P////H////z////9/AAAAAAEAAAACAAAABAAAAAAAAAACAAAABAAAAAgAAAAAAAAAAQAAAAIAAAABAAAABAAAAAQAAAAEAAAABAAAAAgAAAAIAAAACAAAAAcAAAAIAAAACQAAAAoAAAALAEGgIAsDwBBQ",S_="display-p3",I_="display-p3-linear",dc=new WeakMap;let Ac=0,pc;class ii extends Ts{constructor(e){super(e),this.transcoderPath="",this.transcoderBinary=null,this.transcoderPending=null,this.workerPool=new g_,this.workerSourceURL="",this.workerConfig=null,typeof MSC_TRANSCODER<"u"&&console.warn('THREE.KTX2Loader: Please update to latest "basis_transcoder". "msc_basis_transcoder" is no longer supported in three.js r125+.')}setTranscoderPath(e){return this.transcoderPath=e,this}setWorkerLimit(e){return this.workerPool.setWorkerLimit(e),this}async detectSupportAsync(e){return this.workerConfig={astcSupported:await e.hasFeatureAsync("texture-compression-astc"),astcHDRSupported:!1,etc1Supported:await e.hasFeatureAsync("texture-compression-etc1"),etc2Supported:await e.hasFeatureAsync("texture-compression-etc2"),dxtSupported:await e.hasFeatureAsync("texture-compression-bc"),bptcSupported:await e.hasFeatureAsync("texture-compression-bptc"),pvrtcSupported:await e.hasFeatureAsync("texture-compression-pvrtc")},this}detectSupport(e){return e.isWebGPURenderer===!0?this.workerConfig={astcSupported:e.hasFeature("texture-compression-astc"),astcHDRSupported:!1,etc1Supported:e.hasFeature("texture-compression-etc1"),etc2Supported:e.hasFeature("texture-compression-etc2"),dxtSupported:e.hasFeature("texture-compression-bc"),bptcSupported:e.hasFeature("texture-compression-bptc"),pvrtcSupported:e.hasFeature("texture-compression-pvrtc")}:this.workerConfig={astcSupported:e.extensions.has("WEBGL_compressed_texture_astc"),astcHDRSupported:e.extensions.has("WEBGL_compressed_texture_astc")&&e.extensions.get("WEBGL_compressed_texture_astc").getSupportedProfiles().includes("hdr"),etc1Supported:e.extensions.has("WEBGL_compressed_texture_etc1"),etc2Supported:e.extensions.has("WEBGL_compressed_texture_etc"),dxtSupported:e.extensions.has("WEBGL_compressed_texture_s3tc"),bptcSupported:e.extensions.has("EXT_texture_compression_bptc"),pvrtcSupported:e.extensions.has("WEBGL_compressed_texture_pvrtc")||e.extensions.has("WEBKIT_WEBGL_compressed_texture_pvrtc")},this}init(){if(!this.transcoderPending){const e=new Va(this.manager);e.setPath(this.transcoderPath),e.setWithCredentials(this.withCredentials);const t=e.loadAsync("basis_transcoder.js"),n=new Va(this.manager);n.setPath(this.transcoderPath),n.setResponseType("arraybuffer"),n.setWithCredentials(this.withCredentials);const s=n.loadAsync("basis_transcoder.wasm");this.transcoderPending=Promise.all([t,s]).then(([a,r])=>{const o=ii.BasisWorker.toString(),c=["/* constants */","let _EngineFormat = "+JSON.stringify(ii.EngineFormat),"let _EngineType = "+JSON.stringify(ii.EngineType),"let _TranscoderFormat = "+JSON.stringify(ii.TranscoderFormat),"let _BasisFormat = "+JSON.stringify(ii.BasisFormat),"/* basis_transcoder.js */",a,"/* worker */",o.substring(o.indexOf("{")+1,o.lastIndexOf("}"))].join(`
`);this.workerSourceURL=URL.createObjectURL(new Blob([c])),this.transcoderBinary=r,this.workerPool.setWorkerCreator(()=>{const l=new Worker(this.workerSourceURL),h=this.transcoderBinary.slice(0);return l.postMessage({type:"init",config:this.workerConfig,transcoderBinary:h},[h]),l})}),Ac>0&&console.warn("THREE.KTX2Loader: Multiple active KTX2 loaders may cause performance issues. Use a single KTX2Loader instance, or call .dispose() on old instances."),Ac++}return this.transcoderPending}load(e,t,n,s){if(this.workerConfig===null)throw new Error("THREE.KTX2Loader: Missing initialization with `.detectSupport( renderer )`.");const a=new Va(this.manager);a.setResponseType("arraybuffer"),a.setWithCredentials(this.withCredentials),a.load(e,r=>{this.parse(r,t,s)},n,s)}parse(e,t,n){if(this.workerConfig===null)throw new Error("THREE.KTX2Loader: Missing initialization with `.detectSupport( renderer )`.");if(dc.has(e))return dc.get(e).promise.then(t).catch(n);this._createTexture(e).then(s=>t?t(s):null).catch(n)}_createTextureFrom(e,t){const{type:n,error:s,data:{faces:a,width:r,height:o,format:c,type:l,dfdFlags:h}}=e;if(n==="error")return Promise.reject(s);let f;if(t.faceCount===6)f=new jb(a,c,l);else{const u=a[0].mipmaps;f=t.layerCount>1?new Wb(u,r,o,t.layerCount,c,l):new yo(u,r,o,c,l)}return f.minFilter=a[0].mipmaps.length===1?Dn:_i,f.magFilter=Dn,f.generateMipmaps=!1,f.needsUpdate=!0,f.colorSpace=nd(t),f.premultiplyAlpha=!!(h&x_),f}async _createTexture(e,t={}){const n=w_(new Uint8Array(e)),s=n.vkFormat===Kl&&n.dataFormatDescriptor[0].colorModel===167;if(!(n.vkFormat===M_||s&&!this.workerConfig.astcHDRSupported))return B_(n);const r=t,o=this.init().then(()=>this.workerPool.postMessage({type:"transcode",buffer:e,taskConfig:r},[e])).then(c=>this._createTextureFrom(c.data,n));return dc.set(e,{promise:o}),o}dispose(){return this.workerPool.dispose(),this.workerSourceURL&&URL.revokeObjectURL(this.workerSourceURL),Ac--,this}}ii.BasisFormat={ETC1S:0,UASTC:1,UASTC_HDR:2};ii.TranscoderFormat={ETC1:0,ETC2:1,BC1:2,BC3:3,BC4:4,BC5:5,BC7_M6_OPAQUE_ONLY:6,BC7_M5:7,PVRTC1_4_RGB:8,PVRTC1_4_RGBA:9,ASTC_4x4:10,ATC_RGB:11,ATC_RGBA_INTERPOLATED_ALPHA:12,RGBA32:13,RGB565:14,BGR565:15,RGBA4444:16,BC6H:22,RGB_HALF:24,RGBA_HALF:25};ii.EngineFormat={RGBAFormat:ln,RGBA_ASTC_4x4_Format:Ja,RGB_BPTC_UNSIGNED_Format:ho,RGBA_BPTC_Format:za,RGBA_ETC2_EAC_Format:lo,RGBA_PVRTC_4BPPV1_Format:ro,RGBA_S3TC_DXT5_Format:Oa,RGB_ETC1_Format:oo,RGB_ETC2_Format:co,RGB_PVRTC_4BPPV1_Format:ao,RGBA_S3TC_DXT1_Format:Qa};ii.EngineType={UnsignedByteType:cn,HalfFloatType:bn,FloatType:wn};ii.BasisWorker=function(){let i,e,t;const n=_EngineFormat,s=_EngineType,a=_TranscoderFormat,r=_BasisFormat;self.addEventListener("message",function(m){const _=m.data;switch(_.type){case"init":i=_.config,o(_.transcoderBinary);break;case"transcode":e.then(()=>{try{const{faces:p,buffers:A,width:b,height:x,hasAlpha:g,format:C,type:w,dfdFlags:y}=c(_.buffer);self.postMessage({type:"transcode",id:_.id,data:{faces:p,width:b,height:x,hasAlpha:g,format:C,type:w,dfdFlags:y}},A)}catch(p){console.error(p),self.postMessage({type:"error",id:_.id,error:p.message})}});break}});function o(m){e=new Promise(_=>{t={wasmBinary:m,onRuntimeInitialized:_},BASIS(t)}).then(()=>{t.initializeBasis(),t.KTX2File===void 0&&console.warn("THREE.KTX2Loader: Please update Basis Universal transcoder.")})}function c(m){const _=new t.KTX2File(new Uint8Array(m));function p(){_.close(),_.delete()}if(!_.isValid())throw p(),new Error("THREE.KTX2Loader:	Invalid or unsupported .ktx2 file");let A;if(_.isUASTC())A=r.UASTC;else if(_.isETC1S())A=r.ETC1S;else if(_.isHDR())A=r.UASTC_HDR;else throw new Error("THREE.KTX2Loader: Unknown Basis encoding");const b=_.getWidth(),x=_.getHeight(),g=_.getLayers()||1,C=_.getLevels(),w=_.getFaces(),y=_.getHasAlpha(),S=_.getDFDFlags(),{transcoderFormat:v,engineFormat:M,engineType:N}=f(A,b,x,y);if(!b||!x||!C)throw p(),new Error("THREE.KTX2Loader:	Invalid texture");if(!_.startTranscoding())throw p(),new Error("THREE.KTX2Loader: .startTranscoding failed");const T=[],H=[];for(let ie=0;ie<w;ie++){const ge=[];for(let ue=0;ue<C;ue++){const ae=[];let $,fe;for(let oe=0;oe<g;oe++){const ve=_.getImageLevelInfo(ue,oe,ie);ie===0&&ue===0&&oe===0&&(ve.origWidth%4!==0||ve.origHeight%4!==0)&&console.warn("THREE.KTX2Loader: ETC1S and UASTC textures should use multiple-of-four dimensions."),C>1?($=ve.origWidth,fe=ve.origHeight):($=ve.width,fe=ve.height);let me=new Uint8Array(_.getImageTranscodedSizeInBytes(ue,oe,0,v));const j=_.transcodeImage(me,ue,oe,ie,v,0,-1,-1);if(N===s.HalfFloatType&&(me=new Uint16Array(me.buffer,me.byteOffset,me.byteLength/Uint16Array.BYTES_PER_ELEMENT)),!j)throw p(),new Error("THREE.KTX2Loader: .transcodeImage failed.");ae.push(me)}const se=d(ae);ge.push({data:se,width:$,height:fe}),H.push(se.buffer)}T.push({mipmaps:ge,width:b,height:x,format:M,type:N})}return p(),{faces:T,buffers:H,width:b,height:x,hasAlpha:y,dfdFlags:S,format:M,type:N}}const l=[{if:"astcSupported",basisFormat:[r.UASTC],transcoderFormat:[a.ASTC_4x4,a.ASTC_4x4],engineFormat:[n.RGBA_ASTC_4x4_Format,n.RGBA_ASTC_4x4_Format],engineType:[s.UnsignedByteType],priorityETC1S:1/0,priorityUASTC:1,needsPowerOfTwo:!1},{if:"bptcSupported",basisFormat:[r.ETC1S,r.UASTC],transcoderFormat:[a.BC7_M5,a.BC7_M5],engineFormat:[n.RGBA_BPTC_Format,n.RGBA_BPTC_Format],engineType:[s.UnsignedByteType],priorityETC1S:3,priorityUASTC:2,needsPowerOfTwo:!1},{if:"dxtSupported",basisFormat:[r.ETC1S,r.UASTC],transcoderFormat:[a.BC1,a.BC3],engineFormat:[n.RGBA_S3TC_DXT1_Format,n.RGBA_S3TC_DXT5_Format],engineType:[s.UnsignedByteType],priorityETC1S:4,priorityUASTC:5,needsPowerOfTwo:!1},{if:"etc2Supported",basisFormat:[r.ETC1S,r.UASTC],transcoderFormat:[a.ETC1,a.ETC2],engineFormat:[n.RGB_ETC2_Format,n.RGBA_ETC2_EAC_Format],engineType:[s.UnsignedByteType],priorityETC1S:1,priorityUASTC:3,needsPowerOfTwo:!1},{if:"etc1Supported",basisFormat:[r.ETC1S,r.UASTC],transcoderFormat:[a.ETC1],engineFormat:[n.RGB_ETC1_Format],engineType:[s.UnsignedByteType],priorityETC1S:2,priorityUASTC:4,needsPowerOfTwo:!1},{if:"pvrtcSupported",basisFormat:[r.ETC1S,r.UASTC],transcoderFormat:[a.PVRTC1_4_RGB,a.PVRTC1_4_RGBA],engineFormat:[n.RGB_PVRTC_4BPPV1_Format,n.RGBA_PVRTC_4BPPV1_Format],engineType:[s.UnsignedByteType],priorityETC1S:5,priorityUASTC:6,needsPowerOfTwo:!0},{if:"bptcSupported",basisFormat:[r.UASTC_HDR],transcoderFormat:[a.BC6H],engineFormat:[n.RGB_BPTC_UNSIGNED_Format],engineType:[s.HalfFloatType],priorityHDR:1,needsPowerOfTwo:!1},{basisFormat:[r.ETC1S,r.UASTC],transcoderFormat:[a.RGBA32,a.RGBA32],engineFormat:[n.RGBAFormat,n.RGBAFormat],engineType:[s.UnsignedByteType,s.UnsignedByteType],priorityETC1S:100,priorityUASTC:100,needsPowerOfTwo:!1},{basisFormat:[r.UASTC_HDR],transcoderFormat:[a.RGBA_HALF],engineFormat:[n.RGBAFormat],engineType:[s.HalfFloatType],priorityHDR:100,needsPowerOfTwo:!1}],h={[r.ETC1S]:l.filter(m=>m.basisFormat.includes(r.ETC1S)).sort((m,_)=>m.priorityUASTC-_.priorityUASTC),[r.UASTC]:l.filter(m=>m.basisFormat.includes(r.UASTC)).sort((m,_)=>m.priorityUASTC-_.priorityUASTC),[r.UASTC_HDR]:l.filter(m=>m.basisFormat.includes(r.UASTC_HDR)).sort((m,_)=>m.priorityHDR-_.priorityHDR)};function f(m,_,p,A){const b=h[m];for(let x=0;x<b.length;x++){const g=b[x];if(g.if&&!i[g.if]||!g.basisFormat.includes(m)||A&&g.transcoderFormat.length<2||g.needsPowerOfTwo&&!(u(_)&&u(p)))continue;const C=g.transcoderFormat[A?1:0],w=g.engineFormat[A?1:0],y=g.engineType[0];return{transcoderFormat:C,engineFormat:w,engineType:y}}throw new Error("THREE.KTX2Loader: Failed to identify transcoding target.")}function u(m){return m<=2?!0:(m&m-1)===0&&m!==0}function d(m){if(m.length===1)return m[0];let _=0;for(let b=0;b<m.length;b++){const x=m[b];_+=x.byteLength}const p=new Uint8Array(_);let A=0;for(let b=0;b<m.length;b++){const x=m[b];p.set(x,A),A+=x.byteLength}return p}};const T_=new Set([ln,_s,ns]),mc={[$u]:ln,[Ku]:ln,[ju]:ln,[qu]:ln,[Zu]:_s,[Xu]:_s,[Vu]:_s,[Wu]:_s,[Ju]:ns,[Yu]:ns,[Hu]:ns,[Gu]:ns,[Kl]:Ja,[td]:Za,[ed]:Za},gc={[$u]:wn,[Ku]:bn,[ju]:cn,[qu]:cn,[Zu]:wn,[Xu]:bn,[Vu]:cn,[Wu]:cn,[Ju]:wn,[Yu]:bn,[Hu]:cn,[Gu]:cn,[Kl]:bn,[td]:cn,[ed]:cn};async function B_(i){const{vkFormat:e}=i;if(mc[e]===void 0)throw new Error("THREE.KTX2Loader: Unsupported vkFormat.");let t;i.supercompressionScheme===Rf&&(pc||(pc=new Promise(async a=>{const r=new C_;await r.init(),a(r)})),t=await pc);const n=[];for(let a=0;a<i.levels.length;a++){const r=Math.max(1,i.pixelWidth>>a),o=Math.max(1,i.pixelHeight>>a),c=i.pixelDepth?Math.max(1,i.pixelDepth>>a):0,l=i.levels[a];let h;if(i.supercompressionScheme===b_)h=l.levelData;else if(i.supercompressionScheme===Rf)h=t.decode(l.levelData,l.uncompressedByteLength);else throw new Error("THREE.KTX2Loader: Unsupported supercompressionScheme.");let f;gc[e]===wn?f=new Float32Array(h.buffer,h.byteOffset,h.byteLength/Float32Array.BYTES_PER_ELEMENT):gc[e]===bn?f=new Uint16Array(h.buffer,h.byteOffset,h.byteLength/Uint16Array.BYTES_PER_ELEMENT):f=h,n.push({data:f,width:r,height:o,depth:c})}let s;if(T_.has(mc[e]))s=i.pixelDepth===0?new cr(n[0].data,i.pixelWidth,i.pixelHeight):new _u(n[0].data,i.pixelWidth,i.pixelHeight,i.pixelDepth);else{if(i.pixelDepth>0)throw new Error("THREE.KTX2Loader: Unsupported pixelDepth.");s=new yo(n,i.pixelWidth,i.pixelHeight)}return s.mipmaps=n,s.type=gc[e],s.format=mc[e],s.colorSpace=nd(i),s.needsUpdate=!0,Promise.resolve(s)}function nd(i){const e=i.dataFormatDescriptor[0];return e.colorPrimaries===E_?e.transferFunction===Df?Kt:Cn:e.colorPrimaries===v_?e.transferFunction===Df?S_:I_:(e.colorPrimaries===__||console.warn(`THREE.KTX2Loader: Unsupported color primaries, "${e.colorPrimaries}"`),bi)}const R_={name:"HorizontalTiltShiftShader",uniforms:{tDiffuse:{value:null},h:{value:1/512},r:{value:.35}},vertexShader:`

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

		}`},D_={name:"VerticalTiltShiftShader",uniforms:{tDiffuse:{value:null},v:{value:1/512},r:{value:.35}},vertexShader:`

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

		}`};class id extends Ts{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new N_(t)}),this.register(function(t){return new k_(t)}),this.register(function(t){return new q_(t)}),this.register(function(t){return new Y_(t)}),this.register(function(t){return new X_(t)}),this.register(function(t){return new O_(t)}),this.register(function(t){return new z_(t)}),this.register(function(t){return new G_(t)}),this.register(function(t){return new H_(t)}),this.register(function(t){return new F_(t)}),this.register(function(t){return new V_(t)}),this.register(function(t){return new Q_(t)}),this.register(function(t){return new j_(t)}),this.register(function(t){return new W_(t)}),this.register(function(t){return new P_(t)}),this.register(function(t){return new K_(t)}),this.register(function(t){return new J_(t)})}load(e,t,n,s){const a=this;let r;if(this.resourcePath!=="")r=this.resourcePath;else if(this.path!==""){const l=Wa.extractUrlBase(e);r=Wa.resolveURL(l,this.path)}else r=Wa.extractUrlBase(e);this.manager.itemStart(e);const o=function(l){s?s(l):console.error(l),a.manager.itemError(e),a.manager.itemEnd(e)},c=new Va(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{a.parse(l,r,function(h){t(h),a.manager.itemEnd(e)},o)}catch(h){o(h)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let a;const r={},o={},c=new TextDecoder;if(typeof e=="string")a=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===sd){try{r[yt.KHR_BINARY_GLTF]=new Z_(e)}catch(f){s&&s(f);return}a=JSON.parse(r[yt.KHR_BINARY_GLTF].content)}else a=JSON.parse(c.decode(e));else a=e;if(a.asset===void 0||a.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const l=new fE(a,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const f=this.pluginCallbacks[h](l);f.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[f.name]=f,r[f.name]=!0}if(a.extensionsUsed)for(let h=0;h<a.extensionsUsed.length;++h){const f=a.extensionsUsed[h],u=a.extensionsRequired||[];switch(f){case yt.KHR_MATERIALS_UNLIT:r[f]=new U_;break;case yt.KHR_DRACO_MESH_COMPRESSION:r[f]=new $_(a,this.dracoLoader);break;case yt.KHR_TEXTURE_TRANSFORM:r[f]=new eE;break;case yt.KHR_MESH_QUANTIZATION:r[f]=new tE;break;default:u.indexOf(f)>=0&&o[f]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+f+'".')}}l.setExtensions(r),l.setPlugins(o),l.parse(n,s)}parseAsync(e,t){const n=this;return new Promise(function(s,a){n.parse(e,t,s,a)})}}function L_(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}const yt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class P_{constructor(e){this.parser=e,this.name=yt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){const a=t[n];a.extensions&&a.extensions[this.name]&&a.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,a.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let s=t.cache.get(n);if(s)return s;const a=t.json,c=((a.extensions&&a.extensions[this.name]||{}).lights||[])[e];let l;const h=new Ne(16777215);c.color!==void 0&&h.setRGB(c.color[0],c.color[1],c.color[2],Cn);const f=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new Qu(h),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new Tx(h),l.distance=f;break;case"spot":l=new Sx(h),l.distance=f,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),l.decay=2,Pi(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),s=Promise.resolve(l),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,a=n.json.nodes[e],o=(a.extensions&&a.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(c){return n._getNodeRef(t.cache,o,c)})}}class U_{constructor(){this.name=yt.KHR_MATERIALS_UNLIT}getMaterialType(){return Xn}extendParams(e,t,n){const s=[];e.color=new Ne(1,1,1),e.opacity=1;const a=t.pbrMetallicRoughness;if(a){if(Array.isArray(a.baseColorFactor)){const r=a.baseColorFactor;e.color.setRGB(r[0],r[1],r[2],Cn),e.opacity=r[3]}a.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",a.baseColorTexture,Kt))}return Promise.all(s)}}class F_{constructor(e){this.parser=e,this.name=yt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const a=s.extensions[this.name].emissiveStrength;return a!==void 0&&(t.emissiveIntensity=a),Promise.resolve()}}class N_{constructor(e){this.parser=e,this.name=yt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:vi}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const a=[],r=s.extensions[this.name];if(r.clearcoatFactor!==void 0&&(t.clearcoat=r.clearcoatFactor),r.clearcoatTexture!==void 0&&a.push(n.assignTexture(t,"clearcoatMap",r.clearcoatTexture)),r.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=r.clearcoatRoughnessFactor),r.clearcoatRoughnessTexture!==void 0&&a.push(n.assignTexture(t,"clearcoatRoughnessMap",r.clearcoatRoughnessTexture)),r.clearcoatNormalTexture!==void 0&&(a.push(n.assignTexture(t,"clearcoatNormalMap",r.clearcoatNormalTexture)),r.clearcoatNormalTexture.scale!==void 0)){const o=r.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Ye(o,o)}return Promise.all(a)}}class k_{constructor(e){this.parser=e,this.name=yt.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:vi}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const a=s.extensions[this.name];return t.dispersion=a.dispersion!==void 0?a.dispersion:0,Promise.resolve()}}class Q_{constructor(e){this.parser=e,this.name=yt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:vi}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const a=[],r=s.extensions[this.name];return r.iridescenceFactor!==void 0&&(t.iridescence=r.iridescenceFactor),r.iridescenceTexture!==void 0&&a.push(n.assignTexture(t,"iridescenceMap",r.iridescenceTexture)),r.iridescenceIor!==void 0&&(t.iridescenceIOR=r.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),r.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=r.iridescenceThicknessMinimum),r.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=r.iridescenceThicknessMaximum),r.iridescenceThicknessTexture!==void 0&&a.push(n.assignTexture(t,"iridescenceThicknessMap",r.iridescenceThicknessTexture)),Promise.all(a)}}class O_{constructor(e){this.parser=e,this.name=yt.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:vi}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const a=[];t.sheenColor=new Ne(0,0,0),t.sheenRoughness=0,t.sheen=1;const r=s.extensions[this.name];if(r.sheenColorFactor!==void 0){const o=r.sheenColorFactor;t.sheenColor.setRGB(o[0],o[1],o[2],Cn)}return r.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=r.sheenRoughnessFactor),r.sheenColorTexture!==void 0&&a.push(n.assignTexture(t,"sheenColorMap",r.sheenColorTexture,Kt)),r.sheenRoughnessTexture!==void 0&&a.push(n.assignTexture(t,"sheenRoughnessMap",r.sheenRoughnessTexture)),Promise.all(a)}}class z_{constructor(e){this.parser=e,this.name=yt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:vi}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const a=[],r=s.extensions[this.name];return r.transmissionFactor!==void 0&&(t.transmission=r.transmissionFactor),r.transmissionTexture!==void 0&&a.push(n.assignTexture(t,"transmissionMap",r.transmissionTexture)),Promise.all(a)}}class G_{constructor(e){this.parser=e,this.name=yt.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:vi}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const a=[],r=s.extensions[this.name];t.thickness=r.thicknessFactor!==void 0?r.thicknessFactor:0,r.thicknessTexture!==void 0&&a.push(n.assignTexture(t,"thicknessMap",r.thicknessTexture)),t.attenuationDistance=r.attenuationDistance||1/0;const o=r.attenuationColor||[1,1,1];return t.attenuationColor=new Ne().setRGB(o[0],o[1],o[2],Cn),Promise.all(a)}}class H_{constructor(e){this.parser=e,this.name=yt.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:vi}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const a=s.extensions[this.name];return t.ior=a.ior!==void 0?a.ior:1.5,Promise.resolve()}}class V_{constructor(e){this.parser=e,this.name=yt.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:vi}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const a=[],r=s.extensions[this.name];t.specularIntensity=r.specularFactor!==void 0?r.specularFactor:1,r.specularTexture!==void 0&&a.push(n.assignTexture(t,"specularIntensityMap",r.specularTexture));const o=r.specularColorFactor||[1,1,1];return t.specularColor=new Ne().setRGB(o[0],o[1],o[2],Cn),r.specularColorTexture!==void 0&&a.push(n.assignTexture(t,"specularColorMap",r.specularColorTexture,Kt)),Promise.all(a)}}class W_{constructor(e){this.parser=e,this.name=yt.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:vi}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const a=[],r=s.extensions[this.name];return t.bumpScale=r.bumpFactor!==void 0?r.bumpFactor:1,r.bumpTexture!==void 0&&a.push(n.assignTexture(t,"bumpMap",r.bumpTexture)),Promise.all(a)}}class j_{constructor(e){this.parser=e,this.name=yt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:vi}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const a=[],r=s.extensions[this.name];return r.anisotropyStrength!==void 0&&(t.anisotropy=r.anisotropyStrength),r.anisotropyRotation!==void 0&&(t.anisotropyRotation=r.anisotropyRotation),r.anisotropyTexture!==void 0&&a.push(n.assignTexture(t,"anisotropyMap",r.anisotropyTexture)),Promise.all(a)}}class q_{constructor(e){this.parser=e,this.name=yt.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;const a=s.extensions[this.name],r=t.options.ktx2Loader;if(!r){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,a.source,r)}}class Y_{constructor(e){this.parser=e,this.name=yt.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,s=n.json,a=s.textures[e];if(!a.extensions||!a.extensions[t])return null;const r=a.extensions[t],o=s.images[r.source];let c=n.textureLoader;if(o.uri){const l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,r.source,c);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class X_{constructor(e){this.parser=e,this.name=yt.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,s=n.json,a=s.textures[e];if(!a.extensions||!a.extensions[t])return null;const r=a.extensions[t],o=s.images[r.source];let c=n.textureLoader;if(o.uri){const l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,r.source,c);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class K_{constructor(e){this.name=yt.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const s=n.extensions[this.name],a=this.parser.getDependency("buffer",s.buffer),r=this.parser.options.meshoptDecoder;if(!r||!r.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return a.then(function(o){const c=s.byteOffset||0,l=s.byteLength||0,h=s.count,f=s.byteStride,u=new Uint8Array(o,c,l);return r.decodeGltfBufferAsync?r.decodeGltfBufferAsync(h,f,u,s.mode,s.filter).then(function(d){return d.buffer}):r.ready.then(function(){const d=new ArrayBuffer(h*f);return r.decodeGltfBuffer(new Uint8Array(d),h,f,u,s.mode,s.filter),d})})}else return null}}class J_{constructor(e){this.name=yt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const s=t.meshes[n.mesh];for(const l of s.primitives)if(l.mode!==ti.TRIANGLES&&l.mode!==ti.TRIANGLE_STRIP&&l.mode!==ti.TRIANGLE_FAN&&l.mode!==void 0)return null;const r=n.extensions[this.name].attributes,o=[],c={};for(const l in r)o.push(this.parser.getDependency("accessor",r[l]).then(h=>(c[l]=h,c[l])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(l=>{const h=l.pop(),f=h.isGroup?h.children:[h],u=l[0].count,d=[];for(const m of f){const _=new ot,p=new ne,A=new qt,b=new ne(1,1,1),x=new jt(m.geometry,m.material,u);for(let g=0;g<u;g++)c.TRANSLATION&&p.fromBufferAttribute(c.TRANSLATION,g),c.ROTATION&&A.fromBufferAttribute(c.ROTATION,g),c.SCALE&&b.fromBufferAttribute(c.SCALE,g),x.setMatrixAt(g,_.compose(p,A,b));for(const g in c)if(g==="_COLOR_0"){const C=c[g];x.instanceColor=new fl(C.array,C.itemSize,C.normalized)}else g!=="TRANSLATION"&&g!=="ROTATION"&&g!=="SCALE"&&m.geometry.setAttribute(g,c[g]);Yt.prototype.copy.call(x,m),this.parser.assignFinalMaterial(x),d.push(x)}return h.isGroup?(h.clear(),h.add(...d),h):d[0]}))}}const sd="glTF",Ba=12,Uf={JSON:1313821514,BIN:5130562};class Z_{constructor(e){this.name=yt.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Ba),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==sd)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const s=this.header.length-Ba,a=new DataView(e,Ba);let r=0;for(;r<s;){const o=a.getUint32(r,!0);r+=4;const c=a.getUint32(r,!0);if(r+=4,c===Uf.JSON){const l=new Uint8Array(e,Ba+r,o);this.content=n.decode(l)}else if(c===Uf.BIN){const l=Ba+r;this.body=e.slice(l,l+o)}r+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class $_{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=yt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,s=this.dracoLoader,a=e.extensions[this.name].bufferView,r=e.extensions[this.name].attributes,o={},c={},l={};for(const h in r){const f=ml[h]||h.toLowerCase();o[f]=r[h]}for(const h in e.attributes){const f=ml[h]||h.toLowerCase();if(r[h]!==void 0){const u=n.accessors[e.attributes[h]],d=sa[u.componentType];l[f]=d.name,c[f]=u.normalized===!0}}return t.getDependency("bufferView",a).then(function(h){return new Promise(function(f,u){s.decodeDracoFile(h,function(d){for(const m in d.attributes){const _=d.attributes[m],p=c[m];p!==void 0&&(_.normalized=p)}f(d)},o,l,Cn,u)})})}}class eE{constructor(){this.name=yt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class tE{constructor(){this.name=yt.KHR_MESH_QUANTIZATION}}class ad extends lr{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,a=e*s*3+s;for(let r=0;r!==s;r++)t[r]=n[a+r];return t}interpolate_(e,t,n,s){const a=this.resultBuffer,r=this.sampleValues,o=this.valueSize,c=o*2,l=o*3,h=s-t,f=(n-t)/h,u=f*f,d=u*f,m=e*l,_=m-l,p=-2*d+3*u,A=d-u,b=1-p,x=A-u+f;for(let g=0;g!==o;g++){const C=r[_+g+o],w=r[_+g+c]*h,y=r[m+g+o],S=r[m+g]*h;a[g]=b*C+x*w+p*y+A*S}return a}}const nE=new qt;class iE extends ad{interpolate_(e,t,n,s){const a=super.interpolate_(e,t,n,s);return nE.fromArray(a).normalize().toArray(a),a}}const ti={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},sa={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Ff={9728:_n,9729:Dn,9984:ru,9985:Yr,9986:Pa,9987:_i},Nf={33071:Ui,33648:so,10497:Jn},bc={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},ml={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Xi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},sE={CUBICSPLINE:void 0,LINEAR:er,STEP:$a},xc={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function aE(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new Ss({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Ai})),i.DefaultMaterial}function ps(i,e,t){for(const n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Pi(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function rE(i,e,t){let n=!1,s=!1,a=!1;for(let l=0,h=e.length;l<h;l++){const f=e[l];if(f.POSITION!==void 0&&(n=!0),f.NORMAL!==void 0&&(s=!0),f.COLOR_0!==void 0&&(a=!0),n&&s&&a)break}if(!n&&!s&&!a)return Promise.resolve(i);const r=[],o=[],c=[];for(let l=0,h=e.length;l<h;l++){const f=e[l];if(n){const u=f.POSITION!==void 0?t.getDependency("accessor",f.POSITION):i.attributes.position;r.push(u)}if(s){const u=f.NORMAL!==void 0?t.getDependency("accessor",f.NORMAL):i.attributes.normal;o.push(u)}if(a){const u=f.COLOR_0!==void 0?t.getDependency("accessor",f.COLOR_0):i.attributes.color;c.push(u)}}return Promise.all([Promise.all(r),Promise.all(o),Promise.all(c)]).then(function(l){const h=l[0],f=l[1],u=l[2];return n&&(i.morphAttributes.position=h),s&&(i.morphAttributes.normal=f),a&&(i.morphAttributes.color=u),i.morphTargetsRelative=!0,i})}function oE(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function cE(i){let e;const t=i.extensions&&i.extensions[yt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+_c(t.attributes):e=i.indices+":"+_c(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+_c(i.targets[n]);return e}function _c(i){let e="";const t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function gl(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function lE(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const hE=new ot;class fE{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new L_,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,a=!1,r=-1;if(typeof navigator<"u"){const o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;const c=o.match(/Version\/(\d+)/);s=n&&c?parseInt(c[1],10):-1,a=o.indexOf("Firefox")>-1,r=a?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||a&&r<98?this.textureLoader=new Wl(this.options.manager):this.textureLoader=new Rx(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Va(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,s=this.json,a=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(r){return r._markDefs&&r._markDefs()}),Promise.all(this._invokeAll(function(r){return r.beforeRoot&&r.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(r){const o={scene:r[0][s.scene||0],scenes:r[0],animations:r[1],cameras:r[2],asset:s.asset,parser:n,userData:{}};return ps(a,o,s),Pi(o,s),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(o)})).then(function(){for(const c of o.scenes)c.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,a=t.length;s<a;s++){const r=t[s].joints;for(let o=0,c=r.length;o<c;o++)e[r[o]].isBone=!0}for(let s=0,a=e.length;s<a;s++){const r=e[s];r.mesh!==void 0&&(this._addNodeRef(this.meshCache,r.mesh),r.skin!==void 0&&(n[r.mesh].isSkinnedMesh=!0)),r.camera!==void 0&&this._addNodeRef(this.cameraCache,r.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const s=n.clone(),a=(r,o)=>{const c=this.associations.get(r);c!=null&&this.associations.set(o,c);for(const[l,h]of r.children.entries())a(h,o.children[l])};return a(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const s=e(t[n]);if(s)return s}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let s=0;s<t.length;s++){const a=e(t[s]);a&&n.push(a)}return n}getDependency(e,t){const n=e+":"+t;let s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(a){return a.loadNode&&a.loadNode(t)});break;case"mesh":s=this._invokeOne(function(a){return a.loadMesh&&a.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(a){return a.loadBufferView&&a.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(a){return a.loadMaterial&&a.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(a){return a.loadTexture&&a.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(a){return a.loadAnimation&&a.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(a){return a!=this&&a.getDependency&&a.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(a,r){return n.getDependency(e,r)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[yt.KHR_BINARY_GLTF].body);const s=this.options;return new Promise(function(a,r){n.load(Wa.resolveURL(t.uri,s.path),a,void 0,function(){r(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const s=t.byteLength||0,a=t.byteOffset||0;return n.slice(a,a+s)})}loadAccessor(e){const t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){const r=bc[s.type],o=sa[s.componentType],c=s.normalized===!0,l=new o(s.count*r);return Promise.resolve(new Xt(l,r,c))}const a=[];return s.bufferView!==void 0?a.push(this.getDependency("bufferView",s.bufferView)):a.push(null),s.sparse!==void 0&&(a.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),a.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(a).then(function(r){const o=r[0],c=bc[s.type],l=sa[s.componentType],h=l.BYTES_PER_ELEMENT,f=h*c,u=s.byteOffset||0,d=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,m=s.normalized===!0;let _,p;if(d&&d!==f){const A=Math.floor(u/d),b="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+A+":"+s.count;let x=t.cache.get(b);x||(_=new l(o,A*d,s.count*d/h),x=new Nb(_,d/h),t.cache.add(b,x)),p=new Ql(x,c,u%d/h,m)}else o===null?_=new l(s.count*c):_=new l(o,u,s.count*c),p=new Xt(_,c,m);if(s.sparse!==void 0){const A=bc.SCALAR,b=sa[s.sparse.indices.componentType],x=s.sparse.indices.byteOffset||0,g=s.sparse.values.byteOffset||0,C=new b(r[1],x,s.sparse.count*A),w=new l(r[2],g,s.sparse.count*c);o!==null&&(p=new Xt(p.array.slice(),p.itemSize,p.normalized)),p.normalized=!1;for(let y=0,S=C.length;y<S;y++){const v=C[y];if(p.setX(v,w[y*c]),c>=2&&p.setY(v,w[y*c+1]),c>=3&&p.setZ(v,w[y*c+2]),c>=4&&p.setW(v,w[y*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}p.normalized=m}return p})}loadTexture(e){const t=this.json,n=this.options,a=t.textures[e].source,r=t.images[a];let o=this.textureLoader;if(r.uri){const c=n.manager.getHandler(r.uri);c!==null&&(o=c)}return this.loadTextureImage(e,a,o)}loadTextureImage(e,t,n){const s=this,a=this.json,r=a.textures[e],o=a.images[t],c=(o.uri||o.bufferView)+":"+r.sampler;if(this.textureCache[c])return this.textureCache[c];const l=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=r.name||o.name||"",h.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(h.name=o.uri);const u=(a.samplers||{})[r.sampler]||{};return h.magFilter=Ff[u.magFilter]||Dn,h.minFilter=Ff[u.minFilter]||_i,h.wrapS=Nf[u.wrapS]||Jn,h.wrapT=Nf[u.wrapT]||Jn,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==_n&&h.minFilter!==Dn,s.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){const n=this,s=this.json,a=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(f=>f.clone());const r=s.images[e],o=self.URL||self.webkitURL;let c=r.uri||"",l=!1;if(r.bufferView!==void 0)c=n.getDependency("bufferView",r.bufferView).then(function(f){l=!0;const u=new Blob([f],{type:r.mimeType});return c=o.createObjectURL(u),c});else if(r.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const h=Promise.resolve(c).then(function(f){return new Promise(function(u,d){let m=u;t.isImageBitmapLoader===!0&&(m=function(_){const p=new tn(_);p.needsUpdate=!0,u(p)}),t.load(Wa.resolveURL(f,a.path),m,void 0,d)})}).then(function(f){return l===!0&&o.revokeObjectURL(c),Pi(f,r),f.userData.mimeType=r.mimeType||lE(r.uri),f}).catch(function(f){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),f});return this.sourceCache[e]=h,h}assignTexture(e,t,n,s){const a=this;return this.getDependency("texture",n.index).then(function(r){if(!r)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(r=r.clone(),r.channel=n.texCoord),a.extensions[yt.KHR_TEXTURE_TRANSFORM]){const o=n.extensions!==void 0?n.extensions[yt.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const c=a.associations.get(r);r=a.extensions[yt.KHR_TEXTURE_TRANSFORM].extendTexture(r,o),a.associations.set(r,c)}}return s!==void 0&&(r.colorSpace=s),e[t]=r,r})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const s=t.attributes.tangent===void 0,a=t.attributes.color!==void 0,r=t.attributes.normal===void 0;if(e.isPoints){const o="PointsMaterial:"+n.uuid;let c=this.cache.get(o);c||(c=new Lu,si.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(o,c)),n=c}else if(e.isLine){const o="LineBasicMaterial:"+n.uuid;let c=this.cache.get(o);c||(c=new Du,si.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(o,c)),n=c}if(s||a||r){let o="ClonedMaterial:"+n.uuid+":";s&&(o+="derivative-tangents:"),a&&(o+="vertex-colors:"),r&&(o+="flat-shading:");let c=this.cache.get(o);c||(c=n.clone(),a&&(c.vertexColors=!0),r&&(c.flatShading=!0),s&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(o,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return Ss}loadMaterial(e){const t=this,n=this.json,s=this.extensions,a=n.materials[e];let r;const o={},c=a.extensions||{},l=[];if(c[yt.KHR_MATERIALS_UNLIT]){const f=s[yt.KHR_MATERIALS_UNLIT];r=f.getMaterialType(),l.push(f.extendParams(o,a,t))}else{const f=a.pbrMetallicRoughness||{};if(o.color=new Ne(1,1,1),o.opacity=1,Array.isArray(f.baseColorFactor)){const u=f.baseColorFactor;o.color.setRGB(u[0],u[1],u[2],Cn),o.opacity=u[3]}f.baseColorTexture!==void 0&&l.push(t.assignTexture(o,"map",f.baseColorTexture,Kt)),o.metalness=f.metallicFactor!==void 0?f.metallicFactor:1,o.roughness=f.roughnessFactor!==void 0?f.roughnessFactor:1,f.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(o,"metalnessMap",f.metallicRoughnessTexture)),l.push(t.assignTexture(o,"roughnessMap",f.metallicRoughnessTexture))),r=this._invokeOne(function(u){return u.getMaterialType&&u.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(u){return u.extendMaterialParams&&u.extendMaterialParams(e,o)})))}a.doubleSided===!0&&(o.side=Vt);const h=a.alphaMode||xc.OPAQUE;if(h===xc.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===xc.MASK&&(o.alphaTest=a.alphaCutoff!==void 0?a.alphaCutoff:.5)),a.normalTexture!==void 0&&r!==Xn&&(l.push(t.assignTexture(o,"normalMap",a.normalTexture)),o.normalScale=new Ye(1,1),a.normalTexture.scale!==void 0)){const f=a.normalTexture.scale;o.normalScale.set(f,f)}if(a.occlusionTexture!==void 0&&r!==Xn&&(l.push(t.assignTexture(o,"aoMap",a.occlusionTexture)),a.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=a.occlusionTexture.strength)),a.emissiveFactor!==void 0&&r!==Xn){const f=a.emissiveFactor;o.emissive=new Ne().setRGB(f[0],f[1],f[2],Cn)}return a.emissiveTexture!==void 0&&r!==Xn&&l.push(t.assignTexture(o,"emissiveMap",a.emissiveTexture,Kt)),Promise.all(l).then(function(){const f=new r(o);return a.name&&(f.name=a.name),Pi(f,a),t.associations.set(f,{materials:e}),a.extensions&&ps(s,f,a),f})}createUniqueName(e){const t=Qt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,s=this.primitiveCache;function a(o){return n[yt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(c){return kf(c,o,t)})}const r=[];for(let o=0,c=e.length;o<c;o++){const l=e[o],h=cE(l),f=s[h];if(f)r.push(f.promise);else{let u;l.extensions&&l.extensions[yt.KHR_DRACO_MESH_COMPRESSION]?u=a(l):u=kf(new It,l,t),s[h]={primitive:l,promise:u},r.push(u)}}return Promise.all(r)}loadMesh(e){const t=this,n=this.json,s=this.extensions,a=n.meshes[e],r=a.primitives,o=[];for(let c=0,l=r.length;c<l;c++){const h=r[c].material===void 0?aE(this.cache):this.getDependency("material",r[c].material);o.push(h)}return o.push(t.loadGeometries(r)),Promise.all(o).then(function(c){const l=c.slice(0,c.length-1),h=c[c.length-1],f=[];for(let d=0,m=h.length;d<m;d++){const _=h[d],p=r[d];let A;const b=l[d];if(p.mode===ti.TRIANGLES||p.mode===ti.TRIANGLE_STRIP||p.mode===ti.TRIANGLE_FAN||p.mode===void 0)A=a.isSkinnedMesh===!0?new Qb(_,b):new dt(_,b),A.isSkinnedMesh===!0&&A.normalizeSkinWeights(),p.mode===ti.TRIANGLE_STRIP?A.geometry=Tf(A.geometry,pu):p.mode===ti.TRIANGLE_FAN&&(A.geometry=Tf(A.geometry,cl));else if(p.mode===ti.LINES)A=new Gb(_,b);else if(p.mode===ti.LINE_STRIP)A=new zl(_,b);else if(p.mode===ti.LINE_LOOP)A=new Hb(_,b);else if(p.mode===ti.POINTS)A=new Vb(_,b);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+p.mode);Object.keys(A.geometry.morphAttributes).length>0&&oE(A,a),A.name=t.createUniqueName(a.name||"mesh_"+e),Pi(A,a),p.extensions&&ps(s,A,p),t.assignFinalMaterial(A),f.push(A)}for(let d=0,m=f.length;d<m;d++)t.associations.set(f[d],{meshes:e,primitives:d});if(f.length===1)return a.extensions&&ps(s,f[0],a),f[0];const u=new Ln;a.extensions&&ps(s,u,a),t.associations.set(u,{meshes:e});for(let d=0,m=f.length;d<m;d++)u.add(f[d]);return u})}loadCamera(e){let t;const n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Rn(sn.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new Eo(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Pi(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let s=0,a=t.joints.length;s<a;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){const a=s.pop(),r=s,o=[],c=[];for(let l=0,h=r.length;l<h;l++){const f=r[l];if(f){o.push(f);const u=new ot;a!==null&&u.fromArray(a.array,l*16),c.push(u)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new Ol(o,c)})}loadAnimation(e){const t=this.json,n=this,s=t.animations[e],a=s.name?s.name:"animation_"+e,r=[],o=[],c=[],l=[],h=[];for(let f=0,u=s.channels.length;f<u;f++){const d=s.channels[f],m=s.samplers[d.sampler],_=d.target,p=_.node,A=s.parameters!==void 0?s.parameters[m.input]:m.input,b=s.parameters!==void 0?s.parameters[m.output]:m.output;_.node!==void 0&&(r.push(this.getDependency("node",p)),o.push(this.getDependency("accessor",A)),c.push(this.getDependency("accessor",b)),l.push(m),h.push(_))}return Promise.all([Promise.all(r),Promise.all(o),Promise.all(c),Promise.all(l),Promise.all(h)]).then(function(f){const u=f[0],d=f[1],m=f[2],_=f[3],p=f[4],A=[];for(let b=0,x=u.length;b<x;b++){const g=u[b],C=d[b],w=m[b],y=_[b],S=p[b];if(g===void 0)continue;g.updateMatrix&&g.updateMatrix();const v=n._createAnimationTracks(g,C,w,y,S);if(v)for(let M=0;M<v.length;M++)A.push(v[M])}return new xx(a,void 0,A)})}createNodeMesh(e){const t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(a){const r=n._getNodeRef(n.meshCache,s.mesh,a);return s.weights!==void 0&&r.traverse(function(o){if(o.isMesh)for(let c=0,l=s.weights.length;c<l;c++)o.morphTargetInfluences[c]=s.weights[c]}),r})}loadNode(e){const t=this.json,n=this,s=t.nodes[e],a=n._loadNodeShallow(e),r=[],o=s.children||[];for(let l=0,h=o.length;l<h;l++)r.push(n.getDependency("node",o[l]));const c=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([a,Promise.all(r),c]).then(function(l){const h=l[0],f=l[1],u=l[2];u!==null&&h.traverse(function(d){d.isSkinnedMesh&&d.bind(u,hE)});for(let d=0,m=f.length;d<m;d++)h.add(f[d]);return h})}_loadNodeShallow(e){const t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const a=t.nodes[e],r=a.name?s.createUniqueName(a.name):"",o=[],c=s._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&o.push(c),a.camera!==void 0&&o.push(s.getDependency("camera",a.camera).then(function(l){return s._getNodeRef(s.cameraCache,a.camera,l)})),s._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){o.push(l)}),this.nodeCache[e]=Promise.all(o).then(function(l){let h;if(a.isBone===!0?h=new Ru:l.length>1?h=new Ln:l.length===1?h=l[0]:h=new Yt,h!==l[0])for(let f=0,u=l.length;f<u;f++)h.add(l[f]);if(a.name&&(h.userData.name=a.name,h.name=r),Pi(h,a),a.extensions&&ps(n,h,a),a.matrix!==void 0){const f=new ot;f.fromArray(a.matrix),h.applyMatrix4(f)}else a.translation!==void 0&&h.position.fromArray(a.translation),a.rotation!==void 0&&h.quaternion.fromArray(a.rotation),a.scale!==void 0&&h.scale.fromArray(a.scale);return s.associations.has(h)||s.associations.set(h,{}),s.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],s=this,a=new Ln;n.name&&(a.name=s.createUniqueName(n.name)),Pi(a,n),n.extensions&&ps(t,a,n);const r=n.nodes||[],o=[];for(let c=0,l=r.length;c<l;c++)o.push(s.getDependency("node",r[c]));return Promise.all(o).then(function(c){for(let h=0,f=c.length;h<f;h++)a.add(c[h]);const l=h=>{const f=new Map;for(const[u,d]of s.associations)(u instanceof si||u instanceof tn)&&f.set(u,d);return h.traverse(u=>{const d=s.associations.get(u);d!=null&&f.set(u,d)}),f};return s.associations=l(a),a})}_createAnimationTracks(e,t,n,s,a){const r=[],o=e.name?e.name:e.uuid,c=[];Xi[a.path]===Xi.weights?e.traverse(function(u){u.morphTargetInfluences&&c.push(u.name?u.name:u.uuid)}):c.push(o);let l;switch(Xi[a.path]){case Xi.weights:l=da;break;case Xi.rotation:l=Aa;break;case Xi.position:case Xi.scale:l=pa;break;default:n.itemSize===1?l=da:l=pa;break}const h=s.interpolation!==void 0?sE[s.interpolation]:er,f=this._getArrayFromAccessor(n);for(let u=0,d=c.length;u<d;u++){const m=new l(c[u]+"."+Xi[a.path],t.array,f,h);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(m),r.push(m)}return r}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=gl(t.constructor),s=new Float32Array(t.length);for(let a=0,r=t.length;a<r;a++)s[a]=t[a]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const s=this instanceof Aa?iE:ad;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function uE(i,e,t){const n=e.attributes,s=new Oi;if(n.POSITION!==void 0){const o=t.json.accessors[n.POSITION],c=o.min,l=o.max;if(c!==void 0&&l!==void 0){if(s.set(new ne(c[0],c[1],c[2]),new ne(l[0],l[1],l[2])),o.normalized){const h=gl(sa[o.componentType]);s.min.multiplyScalar(h),s.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const a=e.targets;if(a!==void 0){const o=new ne,c=new ne;for(let l=0,h=a.length;l<h;l++){const f=a[l];if(f.POSITION!==void 0){const u=t.json.accessors[f.POSITION],d=u.min,m=u.max;if(d!==void 0&&m!==void 0){if(c.setX(Math.max(Math.abs(d[0]),Math.abs(m[0]))),c.setY(Math.max(Math.abs(d[1]),Math.abs(m[1]))),c.setZ(Math.max(Math.abs(d[2]),Math.abs(m[2]))),u.normalized){const _=gl(sa[u.componentType]);c.multiplyScalar(_)}o.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(o)}i.boundingBox=s;const r=new Ei;s.getCenter(r.center),r.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=r}function kf(i,e,t){const n=e.attributes,s=[];function a(r,o){return t.getDependency("accessor",r).then(function(c){i.setAttribute(o,c)})}for(const r in n){const o=ml[r]||r.toLowerCase();o in i.attributes||s.push(a(n[r],o))}if(e.indices!==void 0&&!i.index){const r=t.getDependency("accessor",e.indices).then(function(o){i.setIndex(o)});s.push(r)}return Ct.workingColorSpace!==Cn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Ct.workingColorSpace}" not supported.`),Pi(i,e),uE(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?rE(i,e.targets,t):i})}var rd=(function(){var i="b9H79Tebbbe8Fv9Gbb9Gvuuuuueu9Giuuub9Geueu9Giuuueuikqbeeedddillviebeoweuec:q;iekr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbeY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVbdE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbiL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtblK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbol79IV9Rbrq:P8Yqdbk;3sezu8Jjjjjbcj;eb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Radz1jjjbhwcj;abad9UhoaicefhldnadTmbaoc;WFbGgocjdaocjd6EhDcbhqinaqae9pmeaDaeaq9RaqaDfae6Egkcsfgocl4cifcd4hxdndndndnaoc9WGgmTmbcbhPcehsawcjdfhzalhHinaraH9Rax6midnaraHaxfgl9RcK6mbczhoinawcj;cbfaogifgoc9WfhOdndndndndnaHaic9WfgAco4fRbbaAci4coG4ciGPlbedibkaO9cb83ibaOcwf9cb83ibxikaOalRblalRbbgAco4gCaCciSgCE86bbaocGfalclfaCfgORbbaAcl4ciGgCaCciSgCE86bbaocVfaOaCfgORbbaAcd4ciGgCaCciSgCE86bbaoc7faOaCfgORbbaAciGgAaAciSgAE86bbaoctfaOaAfgARbbalRbegOco4gCaCciSgCE86bbaoc91faAaCfgARbbaOcl4ciGgCaCciSgCE86bbaoc4faAaCfgARbbaOcd4ciGgCaCciSgCE86bbaoc93faAaCfgARbbaOciGgOaOciSgOE86bbaoc94faAaOfgARbbalRbdgOco4gCaCciSgCE86bbaoc95faAaCfgARbbaOcl4ciGgCaCciSgCE86bbaoc96faAaCfgARbbaOcd4ciGgCaCciSgCE86bbaoc97faAaCfgARbbaOciGgOaOciSgOE86bbaoc98faAaOfgORbbalRbiglco4gAaAciSgAE86bbaoc99faOaAfgORbbalcl4ciGgAaAciSgAE86bbaoc9:faOaAfgORbbalcd4ciGgAaAciSgAE86bbaocufaOaAfgoRbbalciGglalciSglE86bbaoalfhlxdkaOalRbwalRbbgAcl4gCaCcsSgCE86bbaocGfalcwfaCfgORbbaAcsGgAaAcsSgAE86bbaocVfaOaAfgORbbalRbegAcl4gCaCcsSgCE86bbaoc7faOaCfgORbbaAcsGgAaAcsSgAE86bbaoctfaOaAfgORbbalRbdgAcl4gCaCcsSgCE86bbaoc91faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc4faOaAfgORbbalRbigAcl4gCaCcsSgCE86bbaoc93faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc94faOaAfgORbbalRblgAcl4gCaCcsSgCE86bbaoc95faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc96faOaAfgORbbalRbvgAcl4gCaCcsSgCE86bbaoc97faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc98faOaAfgORbbalRbogAcl4gCaCcsSgCE86bbaoc99faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc9:faOaAfgORbbalRbrglcl4gAaAcsSgAE86bbaocufaOaAfgoRbbalcsGglalcsSglE86bbaoalfhlxekaOal8Pbb83bbaOcwfalcwf8Pbb83bbalczfhlkdnaiam9pmbaiczfhoaral9RcL0mekkaiam6mialTmidnakTmbawaPfRbbhOcbhoazhiinaiawcj;cbfaofRbbgAce4cbaAceG9R7aOfgO86bbaiadfhiaocefgoak9hmbkkazcefhzaPcefgPad6hsalhHaPad9hmexvkkcbhlasceGmdxikalaxad2fhCdnakTmbcbhHcehsawcjdfhminaral9Rax6mialTmdalaxfhlawaHfRbbhOcbhoamhiinaiawcj;cbfaofRbbgAce4cbaAceG9R7aOfgO86bbaiadfhiaocefgoak9hmbkamcefhmaHcefgHad6hsaHad9hmbkaChlxikcbhocehsinaral9Rax6mdalTmealaxfhlaocefgoad6hsadao9hmbkaChlxdkcbhlasceGTmekc9:hoxikabaqad2fawcjdfakad2z1jjjb8Aawawcjdfakcufad2fadz1jjjb8Aakaqfhqalmbkc9:hoxekcbc99aral9Radcaadca0ESEhokavcj;ebf8Kjjjjbaok;yzeHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecjez:jjjjb8AavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhodnaeTmbcmcsaDceSEhkcbhxcbhmcbhDcbhicbhlindnaoaq9nmbc9:hoxikdndnawRbbgrc;Ve0mbavc;abfalarcl4cu7fcsGcitfgPydlhsaPydbhzdnarcsGgPak9pmbavaiarcu7fcsGcdtfydbaxaPEhraPThPdndnadcd9hmbabaDcetfgHaz87ebaHcdfas87ebaHclfar87ebxekabaDcdtfgHazBdbaHclfasBdbaHcwfarBdbkaxaPfhxavc;abfalcitfgHarBdbaHasBdlavaicdtfarBdbavc;abfalcefcsGglcitfgHazBdbaHarBdlaiaPfhialcefhlxdkdndnaPcsSmbamaPfaPc987fcefhmxekaocefhrao8SbbgPcFeGhHdndnaPcu9mmbarhoxekaocvfhoaHcFbGhHcrhPdninar8SbbgOcFbGaPtaHVhHaOcu9kmearcefhraPcrfgPc8J9hmbxdkkarcefhokaHce4cbaHceG9R7amfhmkdndnadcd9hmbabaDcetfgraz87ebarcdfas87ebarclfam87ebxekabaDcdtfgrazBdbarclfasBdbarcwfamBdbkavc;abfalcitfgramBdbarasBdlavaicdtfamBdbavc;abfalcefcsGglcitfgrazBdbaramBdlaicefhialcefhlxekdnarcpe0mbaxcefgOavaiaqarcsGfRbbgPcl49RcsGcdtfydbaPcz6gHEhravaiaP9RcsGcdtfydbaOaHfgsaPcsGgOEhPaOThOdndnadcd9hmbabaDcetfgzax87ebazcdfar87ebazclfaP87ebxekabaDcdtfgzaxBdbazclfarBdbazcwfaPBdbkavaicdtfaxBdbavc;abfalcitfgzarBdbazaxBdlavaicefgicsGcdtfarBdbavc;abfalcefcsGcitfgzaPBdbazarBdlavaiaHfcsGgicdtfaPBdbavc;abfalcdfcsGglcitfgraxBdbaraPBdlalcefhlaiaOfhiasaOfhxxekaxcbaoRbbgzEgAarc;:eSgrfhsazcsGhCazcl4hXdndnazcs0mbascefhOxekashOavaiaX9RcsGcdtfydbhskdndnaCmbaOcefhxxekaOhxavaiaz9RcsGcdtfydbhOkdndnarTmbaocefhrxekaocdfhrao8SbegHcFeGhPdnaHcu9kmbaocofhAaPcFbGhPcrhodninar8SbbgHcFbGaotaPVhPaHcu9kmearcefhraocrfgoc8J9hmbkaAhrxekarcefhrkaPce4cbaPceG9R7amfgmhAkdndnaXcsSmbarhPxekarcefhPar8SbbgocFeGhHdnaocu9kmbarcvfhsaHcFbGhHcrhodninaP8SbbgrcFbGaotaHVhHarcu9kmeaPcefhPaocrfgoc8J9hmbkashPxekaPcefhPkaHce4cbaHceG9R7amfgmhskdndnaCcsSmbaPhoxekaPcefhoaP8SbbgrcFeGhHdnarcu9kmbaPcvfhOaHcFbGhHcrhrdninao8SbbgPcFbGartaHVhHaPcu9kmeaocefhoarcrfgrc8J9hmbkaOhoxekaocefhokaHce4cbaHceG9R7amfgmhOkdndnadcd9hmbabaDcetfgraA87ebarcdfas87ebarclfaO87ebxekabaDcdtfgraABdbarclfasBdbarcwfaOBdbkavc;abfalcitfgrasBdbaraABdlavaicdtfaABdbavc;abfalcefcsGcitfgraOBdbarasBdlavaicefgicsGcdtfasBdbavc;abfalcdfcsGcitfgraABdbaraOBdlavaiazcz6aXcsSVfgicsGcdtfaOBdbaiaCTaCcsSVfhialcifhlkawcefhwalcsGhlaicsGhiaDcifgDae6mbkkcbc99aoaqSEhokavc;aef8Kjjjjbaok:llevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:Lvoeue99dud99eud99dndnadcl9hmbaeTmeindndnabcdfgd8Sbb:Yab8Sbbgi:Ygl:l:tabcefgv8Sbbgo:Ygr:l:tgwJbb;:9cawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai86bbdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad86bbdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad86bbabclfhbaecufgembxdkkaeTmbindndnabclfgd8Ueb:Yab8Uebgi:Ygl:l:tabcdfgv8Uebgo:Ygr:l:tgwJb;:FSawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai87ebdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad87ebdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad87ebabcwfhbaecufgembkkk;siliui99iue99dnaeTmbcbhiabhlindndnJ;Zl81Zalcof8UebgvciV:Y:vgoal8Ueb:YNgrJb;:FSNJbbbZJbbb:;arJbbbb9GEMgw:lJbbb9p9DTmbaw:OhDxekcjjjj94hDkalclf8Uebhqalcdf8UebhkabavcefciGaiVcetfaD87ebdndnaoak:YNgwJb;:FSNJbbbZJbbb:;awJbbbb9GEMgx:lJbbb9p9DTmbax:Ohkxekcjjjj94hkkabavcdfciGaiVcetfak87ebdndnaoaq:YNgoJb;:FSNJbbbZJbbb:;aoJbbbb9GEMgx:lJbbb9p9DTmbax:Ohqxekcjjjj94hqkabavcufciGaiVcetfaq87ebdndnJbbjZararN:tawawN:taoaoN:tgrJbbbbarJbbbb9GE:rJb;:FSNJbbbZMgr:lJbbb9p9DTmbar:Ohqxekcjjjj94hqkabavciGaiVcetfaq87ebalcwfhlaiclfhiaecufgembkkk9mbdnadcd4ae2geTmbinababydbgdcwtcw91:Yadce91cjjj;8ifcjjj98G::NUdbabclfhbaecufgembkkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik;LeeeudndnaeabVciGTmbabhixekdndnadcz9pmbabhixekabhiinaiaeydbBdbaiclfaeclfydbBdbaicwfaecwfydbBdbaicxfaecxfydbBdbaiczfhiaeczfheadc9Wfgdcs0mbkkadcl6mbinaiaeydbBdbaeclfheaiclfhiadc98fgdci0mbkkdnadTmbinaiaeRbb86bbaicefhiaecefheadcufgdmbkkabk;aeedudndnabciGTmbabhixekaecFeGc:b:c:ew2hldndnadcz9pmbabhixekabhiinaialBdbaicxfalBdbaicwfalBdbaiclfalBdbaiczfhiadc9Wfgdcs0mbkkadcl6mbinaialBdbaiclfhiadc98fgdci0mbkkdnadTmbinaiae86bbaicefhiadcufgdmbkkabkkkebcjwklz9Kbb",e="b9H79TebbbeKl9Gbb9Gvuuuuueu9Giuuub9Geueuikqbbebeedddilve9Weeeviebeoweuec:q;Aekr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbdY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVblE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtboK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbrL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbwl79IV9RbDq;t9tqlbzik9:evu8Jjjjjbcz9Rhbcbheincbhdcbhiinabcwfadfaicjuaead4ceGglE86bbaialfhiadcefgdcw9hmbkaec:q:yjjbfai86bbaecitc:q1jjbfab8Piw83ibaecefgecjd9hmbkk;h8JlHud97euo978Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Rad;8qbbcj;abad9UhoaicefhldnadTmbaoc;WFbGgocjdaocjd6EhwcbhDinaDae9pmeawaeaD9RaDawfae6Egqcsfgoc9WGgkci2hxakcethmaocl4cifcd4hPabaDad2fhscbhzdnincehHalhOcbhAdninaraO9RaP6miavcj;cbfaAak2fhCaOaPfhlcbhidnakc;ab6mbaral9Rc;Gb6mbcbhoinaCaofhidndndndndnaOaoco4fRbbgXciGPlbedibkaipxbbbbbbbbbbbbbbbbpklbxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklbalczfhlkdndndndndnaXcd4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklzxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklzalczfhlkdndndndndnaXcl4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklaxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklaalczfhlkdndndndndnaXco4Plbedibkaipxbbbbbbbbbbbbbbbbpkl8WxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WalclfaYpQbfaXc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WalcwfaYpQbfaXc:q:yjjbfRbbfhlxekaialpbbbpkl8Walczfhlkaoc;abfhiaocjefak0meaihoaral9Rc;Fb0mbkkdndnaiak9pmbaici4hoinaral9RcK6mdaCaifhXdndndndndnaOaico4fRbbaocoG4ciGPlbedibkaXpxbbbbbbbbbbbbbbbbpklbxikaXalpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaXalpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaXalpbbbpklbalczfhlkaocdfhoaiczfgiak6mbkkalTmbaAci6hHalhOaAcefgohAaoclSmdxekkcbhlaHceGmdkdnakTmbavcjdfazfhiavazfpbdbhYcbhXinaiavcj;cbfaXfgopblbgLcep9TaLpxeeeeeeeeeeeeeeeegQp9op9Hp9rgLaoakfpblbg8Acep9Ta8AaQp9op9Hp9rg8ApmbzeHdOiAlCvXoQrLgEaoamfpblbg3cep9Ta3aQp9op9Hp9rg3aoaxfpblbg5cep9Ta5aQp9op9Hp9rg5pmbzeHdOiAlCvXoQrLg8EpmbezHdiOAlvCXorQLgQaQpmbedibedibedibediaYp9UgYp9AdbbaiadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaEa8EpmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaLa8ApmwKDYq8AkEx3m5P8Es8FgLa3a5pmwKDYq8AkEx3m5P8Es8Fg8ApmbezHdiOAlvCXorQLgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaLa8ApmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfhiaXczfgXak6mbkkazclfgzad6mbkasavcjdfaqad2;8qbbavavcjdfaqcufad2fad;8qbbaqaDfhDc9:hoalmexikkc9:hoxekcbc99aral9Radcaadca0ESEhokavcj;kbf8Kjjjjbaokwbz:bjjjbk;uzeHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecje;8kbavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhodnaeTmbcmcsaDceSEhkcbhxcbhmcbhDcbhicbhlindnaoaq9nmbc9:hoxikdndnawRbbgrc;Ve0mbavc;abfalarcl4cu7fcsGcitfgPydlhsaPydbhzdnarcsGgPak9pmbavaiarcu7fcsGcdtfydbaxaPEhraPThPdndnadcd9hmbabaDcetfgHaz87ebaHcdfas87ebaHclfar87ebxekabaDcdtfgHazBdbaHclfasBdbaHcwfarBdbkaxaPfhxavc;abfalcitfgHarBdbaHasBdlavaicdtfarBdbavc;abfalcefcsGglcitfgHazBdbaHarBdlaiaPfhialcefhlxdkdndnaPcsSmbamaPfaPc987fcefhmxekaocefhrao8SbbgPcFeGhHdndnaPcu9mmbarhoxekaocvfhoaHcFbGhHcrhPdninar8SbbgOcFbGaPtaHVhHaOcu9kmearcefhraPcrfgPc8J9hmbxdkkarcefhokaHce4cbaHceG9R7amfhmkdndnadcd9hmbabaDcetfgraz87ebarcdfas87ebarclfam87ebxekabaDcdtfgrazBdbarclfasBdbarcwfamBdbkavc;abfalcitfgramBdbarasBdlavaicdtfamBdbavc;abfalcefcsGglcitfgrazBdbaramBdlaicefhialcefhlxekdnarcpe0mbaxcefgOavaiaqarcsGfRbbgPcl49RcsGcdtfydbaPcz6gHEhravaiaP9RcsGcdtfydbaOaHfgsaPcsGgOEhPaOThOdndnadcd9hmbabaDcetfgzax87ebazcdfar87ebazclfaP87ebxekabaDcdtfgzaxBdbazclfarBdbazcwfaPBdbkavaicdtfaxBdbavc;abfalcitfgzarBdbazaxBdlavaicefgicsGcdtfarBdbavc;abfalcefcsGcitfgzaPBdbazarBdlavaiaHfcsGgicdtfaPBdbavc;abfalcdfcsGglcitfgraxBdbaraPBdlalcefhlaiaOfhiasaOfhxxekaxcbaoRbbgzEgAarc;:eSgrfhsazcsGhCazcl4hXdndnazcs0mbascefhOxekashOavaiaX9RcsGcdtfydbhskdndnaCmbaOcefhxxekaOhxavaiaz9RcsGcdtfydbhOkdndnarTmbaocefhrxekaocdfhrao8SbegHcFeGhPdnaHcu9kmbaocofhAaPcFbGhPcrhodninar8SbbgHcFbGaotaPVhPaHcu9kmearcefhraocrfgoc8J9hmbkaAhrxekarcefhrkaPce4cbaPceG9R7amfgmhAkdndnaXcsSmbarhPxekarcefhPar8SbbgocFeGhHdnaocu9kmbarcvfhsaHcFbGhHcrhodninaP8SbbgrcFbGaotaHVhHarcu9kmeaPcefhPaocrfgoc8J9hmbkashPxekaPcefhPkaHce4cbaHceG9R7amfgmhskdndnaCcsSmbaPhoxekaPcefhoaP8SbbgrcFeGhHdnarcu9kmbaPcvfhOaHcFbGhHcrhrdninao8SbbgPcFbGartaHVhHaPcu9kmeaocefhoarcrfgrc8J9hmbkaOhoxekaocefhokaHce4cbaHceG9R7amfgmhOkdndnadcd9hmbabaDcetfgraA87ebarcdfas87ebarclfaO87ebxekabaDcdtfgraABdbarclfasBdbarcwfaOBdbkavc;abfalcitfgrasBdbaraABdlavaicdtfaABdbavc;abfalcefcsGcitfgraOBdbarasBdlavaicefgicsGcdtfasBdbavc;abfalcdfcsGcitfgraABdbaraOBdlavaiazcz6aXcsSVfgicsGcdtfaOBdbaiaCTaCcsSVfhialcifhlkawcefhwalcsGhlaicsGhiaDcifgDae6mbkkcbc99aoaqSEhokavc;aef8Kjjjjbaok:llevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:EPliuo97eue978Jjjjjbca9Rhidndnadcl9hmbdnaec98GglTmbcbhvabhdinadadpbbbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDpxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpkbbadczfhdavclfgval6mbkkalae9pmeaiaeciGgvcdtgdVcbczad9R;8kbaiabalcdtfglad;8qbbdnavTmbaiaipblbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDpxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpklbkalaiad;8qbbskdnaec98GgxTmbcbhvabhdinadczfglalpbbbgopxbbbbbbFFbbbbbbFFgkp9oadpbbbgDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eaDaopmbediwDqkzHOAKY8AEgoczp:Sep;6egrp;Geaoczp:Reczp:Sep;6egwp;Gep;Kep;Legopxb;:FSb;:FSb;:FSb;:FSawaopxbbbbbbbbbbbbbbbbp:2egqawpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegwawp;Meaoaop;Mearaqaramp9op9rp;Kegoaop;Mep;Kep;Kep;Jep;Negrp;Mepxbbn0bbn0bbn0bbn0gqp;Keczp:Reawarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9op9qgwaoarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogopmwDKYqk8AExm35Ps8E8Fp9qpkbbadaDakp9oawaopmbezHdiOAlvCXorQLp9qpkbbadcafhdavclfgvax6mbkkaxae9pmbaiaeciGgvcitgdfcbcaad9R;8kbaiabaxcitfglad;8qbbdnavTmbaiaipblzgopxbbbbbbFFbbbbbbFFgkp9oaipblbgDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eaDaopmbediwDqkzHOAKY8AEgoczp:Sep;6egrp;Geaoczp:Reczp:Sep;6egwp;Gep;Kep;Legopxb;:FSb;:FSb;:FSb;:FSawaopxbbbbbbbbbbbbbbbbp:2egqawpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegwawp;Meaoaop;Mearaqaramp9op9rp;Kegoaop;Mep;Kep;Kep;Jep;Negrp;Mepxbbn0bbn0bbn0bbn0gqp;Keczp:Reawarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9op9qgwaoarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogopmwDKYqk8AExm35Ps8E8Fp9qpklzaiaDakp9oawaopmbezHdiOAlvCXorQLp9qpklbkalaiad;8qbbkk;4wllue97euv978Jjjjjbc8W9Rhidnaec98GglTmbcbhvabhoinaiaopbbbgraoczfgwpbbbgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklbaopxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaqakp;Mearp;Keczp:ReaDakp;Mearp;Keamp9op9qgkpmbezHdiOAlvCXorQLgrp5baipblbpEb:T:j83ibaocwfarp5eaipblbpEe:T:j83ibawaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblbpEd:T:j83ibaocKfakp5eaipblbpEi:T:j83ibaocafhoavclfgval6mbkkdnalae9pmbaiaeciGgvcitgofcbcaao9R;8kbaiabalcitfgwao;8qbbdnavTmbaiaipblbgraipblzgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklaaipxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaqakp;Mearp;Keczp:ReaDakp;Mearp;Keamp9op9qgkpmbezHdiOAlvCXorQLgrp5baipblapEb:T:j83ibaiarp5eaipblapEe:T:j83iwaiaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblapEd:T:j83izaiakp5eaipblapEi:T:j83iKkawaiao;8qbbkk:Pddiue978Jjjjjbc;ab9Rhidnadcd4ae2glc98GgvTmbcbhdabheinaeaepbbbgocwp:Recwp:Sep;6eaocep:SepxbbjZbbjZbbjZbbjZp:UepxbbjFbbjFbbjFbbjFp9op;Mepkbbaeczfheadclfgdav6mbkkdnaval9pmbaialciGgdcdtgeVcbc;abae9R;8kbaiabavcdtfgvae;8qbbdnadTmbaiaipblbgocwp:Recwp:Sep;6eaocep:SepxbbjZbbjZbbjZbbjZp:UepxbbjFbbjFbbjFbbjFp9op;Mepklbkavaiae;8qbbkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaikkkebcjwklz9Tbb",t=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,3,2,0,0,5,3,1,0,1,12,1,0,10,22,2,12,0,65,0,65,0,65,0,252,10,0,0,11,7,0,65,0,253,15,26,11]),n=new Uint8Array([32,0,65,2,1,106,34,33,3,128,11,4,13,64,6,253,10,7,15,116,127,5,8,12,40,16,19,54,20,9,27,255,113,17,42,67,24,23,146,148,18,14,22,45,70,69,56,114,101,21,25,63,75,136,108,28,118,29,73,115]);if(typeof WebAssembly!="object")return{supported:!1};var s=WebAssembly.validate(t)?e:i,a,r=WebAssembly.instantiate(o(s),{}).then(function(A){a=A.instance,a.exports.__wasm_call_ctors()});function o(A){for(var b=new Uint8Array(A.length),x=0;x<A.length;++x){var g=A.charCodeAt(x);b[x]=g>96?g-97:g>64?g-39:g+4}for(var C=0,x=0;x<A.length;++x)b[C++]=b[x]<60?n[b[x]]:(b[x]-60)*64+b[++x];return b.buffer.slice(0,C)}function c(A,b,x,g,C,w){var y=a.exports.sbrk,S=x+3&-4,v=y(S*g),M=y(C.length),N=new Uint8Array(a.exports.memory.buffer);N.set(C,M);var T=A(v,x,g,M,C.length);if(T==0&&w&&w(v,S,g),b.set(N.subarray(v,v+x*g)),y(v-y(0)),T!=0)throw new Error("Malformed buffer data: "+T)}var l={NONE:"",OCTAHEDRAL:"meshopt_decodeFilterOct",QUATERNION:"meshopt_decodeFilterQuat",EXPONENTIAL:"meshopt_decodeFilterExp"},h={ATTRIBUTES:"meshopt_decodeVertexBuffer",TRIANGLES:"meshopt_decodeIndexBuffer",INDICES:"meshopt_decodeIndexSequence"},f=[],u=0;function d(A){var b={object:new Worker(A),pending:0,requests:{}};return b.object.onmessage=function(x){var g=x.data;b.pending-=g.count,b.requests[g.id][g.action](g.value),delete b.requests[g.id]},b}function m(A){for(var b="var instance; var ready = WebAssembly.instantiate(new Uint8Array(["+new Uint8Array(o(s))+"]), {}).then(function(result) { instance = result.instance; instance.exports.__wasm_call_ctors(); });self.onmessage = workerProcess;"+c.toString()+p.toString(),x=new Blob([b],{type:"text/javascript"}),g=URL.createObjectURL(x),C=0;C<A;++C)f[C]=d(g);URL.revokeObjectURL(g)}function _(A,b,x,g,C){for(var w=f[0],y=1;y<f.length;++y)f[y].pending<w.pending&&(w=f[y]);return new Promise(function(S,v){var M=new Uint8Array(x),N=u++;w.pending+=A,w.requests[N]={resolve:S,reject:v},w.object.postMessage({id:N,count:A,size:b,source:M,mode:g,filter:C},[M.buffer])})}function p(A){r.then(function(){var b=A.data;try{var x=new Uint8Array(b.count*b.size);c(a.exports[b.mode],x,b.count,b.size,b.source,a.exports[b.filter]),self.postMessage({id:b.id,count:b.count,action:"resolve",value:x},[x.buffer])}catch(g){self.postMessage({id:b.id,count:b.count,action:"reject",value:g})}})}return{ready:r,supported:!0,useWorkers:function(A){m(A)},decodeVertexBuffer:function(A,b,x,g,C){c(a.exports.meshopt_decodeVertexBuffer,A,b,x,g,a.exports[l[C]])},decodeIndexBuffer:function(A,b,x,g){c(a.exports.meshopt_decodeIndexBuffer,A,b,x,g)},decodeIndexSequence:function(A,b,x,g){c(a.exports.meshopt_decodeIndexSequence,A,b,x,g)},decodeGltfBuffer:function(A,b,x,g,C,w){c(a.exports[h[C]],A,b,x,g,a.exports[l[w]])},decodeGltfBufferAsync:function(A,b,x,g,C){return f.length>0?_(A,b,x,h[g],l[C]):r.then(function(){var w=new Uint8Array(A*b);return c(a.exports[h[g]],w,A,b,x,a.exports[l[C]]),w})}}})();function dE(i,e){const t=new It,n=i.attributes.position.count;for(const[s,a]of[["position",3],["normal",3],["color",3]]){const r=i.getAttribute(s),o=new Float32Array(n*a);for(let c=0;c<n;c++)o[c*a]=r?r.getX(c):1,o[c*a+1]=r?r.getY(c):1,o[c*a+2]=r?r.getZ(c):1;t.setAttribute(s,new Xt(o,a))}return i.index&&t.setIndex(Array.from(i.index.array)),t.applyMatrix4(e),t}function Qf(i,e,t){i.updateMatrixWorld(!0);const n=(i.parent??i).matrixWorld.clone().invert(),s={};i.traverse(o=>{const c=o;if(!c.isMesh)return;const l=c.material.name.includes("lead")?"lead":"matte";(s[l]||=[]).push(dE(c.geometry,new ot().multiplyMatrices(n,c.matrixWorld)))});const a=new Ln;let r=0;for(const[o,c]of Object.entries(s)){const l=ma(c);c.forEach(f=>f.dispose());const h=new dt(l,e[o]);h.castShadow=h.receiveShadow=t,h.name=o,a.add(h),r+=(l.index?l.index.count:l.attributes.position.count)/3}return{g:a,tris:r}}async function AE(i,e="ayasofya"){return(await fetch(`${i}models/${e}.anchor.json`)).json()}async function pE(i){const e=await AE(i.base),n=await new id().setMeshoptDecoder(rd).loadAsync(`${i.base}models/${e.model_web}`),s=i.shadows??!0,a={matte:new Ss({name:"ayasofya_matte",vertexColors:!0,roughness:.9,metalness:0,side:Vt}),lead:new Ss({name:"ayasofya_lead_gold",vertexColors:!0,roughness:.68,metalness:0,side:Vt})},r=new uo;r.name="Ayasofya";const o=[],c=n.scene.getObjectByName("LOD0"),l=n.scene.getObjectByName("LOD1");if(!c)throw new Error("ayasofya: LOD0 missing");{const{g:u,tris:d}=Qf(c,a,s);r.addLevel(u,0),o.push(d)}if(l){const{g:u,tris:d}=Qf(l,a,s);r.addLevel(u,i.lodDistance??900),o.push(d)}n.scene.traverse(u=>{const d=u;d.isMesh&&d.geometry.dispose()});const[h,f]=i.project(e.anchor.lon,e.anchor.lat);return r.position.set(h,i.groundY?i.groundY(h,f):0,f),r.rotation.y=e.three_rotation_y_rad,r.scale.setScalar(e.scale_m),r.userData={id:e.id,source:e.source},{object:r,anchor:e,triangles:o,materials:[a.matte,a.lead]}}function mE(i,e){const t=new It,n=i.attributes.position.count;for(const[s,a]of[["position",3],["normal",3],["color",3]]){const r=i.getAttribute(s),o=new Float32Array(n*a);for(let c=0;c<n;c++)o[c*a]=r?r.getX(c):1,o[c*a+1]=r?r.getY(c):1,o[c*a+2]=r?r.getZ(c):1;t.setAttribute(s,new Xt(o,a))}return i.index&&t.setIndex(Array.from(i.index.array)),t.applyMatrix4(e),t}function Of(i,e,t){i.updateMatrixWorld(!0);const n=(i.parent??i).matrixWorld.clone().invert(),s={};i.traverse(o=>{const c=o;if(!c.isMesh)return;const l=c.material.name.includes("lead")?"lead":"matte";(s[l]||=[]).push(mE(c.geometry,new ot().multiplyMatrices(n,c.matrixWorld)))});const a=new Ln;let r=0;for(const[o,c]of Object.entries(s)){const l=ma(c);c.forEach(f=>f.dispose());const h=new dt(l,e[o]);h.castShadow=h.receiveShadow=t,h.name=o,a.add(h),r+=(l.index?l.index.count:l.attributes.position.count)/3}return{g:a,tris:r}}async function Rs(i,e){const t=await(await fetch(`${e.base}models/${i}.anchor.json`)).json(),n=await new id().setMeshoptDecoder(rd).loadAsync(`${e.base}models/${t.model_web}`),s=e.shadows??!0,a={matte:new Ss({name:`${i}_matte`,vertexColors:!0,roughness:.9,metalness:0,side:Vt}),lead:new Ss({name:`${i}_lead_gold`,vertexColors:!0,roughness:.68,metalness:0,side:Vt})},r=new uo;r.name=t.name||i;const o=[],c=n.scene.getObjectByName("LOD0"),l=n.scene.getObjectByName("LOD1");if(!c)throw new Error(`${i}: LOD0 missing`);{const{g:u,tris:d}=Of(c,a,s);r.addLevel(u,0),o.push(d)}if(l){const{g:u,tris:d}=Of(l,a,s);r.addLevel(u,e.lodDistance??900),o.push(d)}n.scene.traverse(u=>{const d=u;d.isMesh&&d.geometry.dispose()});const[h,f]=e.project(t.anchor.lon,t.anchor.lat);return r.position.set(h,e.groundY?e.groundY(h,f):0,f),r.rotation.y=t.three_rotation_y_rad,r.scale.setScalar(t.scale_m),r.userData={id:t.id,source:t.source},{object:r,anchor:t,triangles:o,materials:[a.matte,a.lead]}}const gE=i=>Rs("topkapi",i),bE=i=>Rs("sultanahmet",i),xE=i=>Rs("yenicami",i),_E=i=>Rs("rustempasa",i),Ec=5;function EE(i){const e=i.attributes.position,t=e.count,n=new Float32Array(t*2);for(let r=0;r<t;r++){const o=e.getX(r),c=e.getY(r),l=e.getZ(r),h=Math.hypot(o,l);n[r*2]=Math.atan2(o,l)*Math.max(h,1)/Ec,n[r*2+1]=c/Ec}const s=i.index?i.index.array:null,a=s?s.length/3:t/3;for(let r=0;r<a;r++){const o=[0,1,2].map(h=>s?s[r*3+h]:r*3+h),c=o.map(h=>n[h*2]);if(Math.max(...c)-Math.min(...c)>2){const h=Math.max(1,...o.map(u=>Math.hypot(e.getX(u),e.getZ(u)))),f=2*Math.PI*h/Ec;for(const u of o)n[u*2]<0&&(n[u*2]+=f)}}i.setAttribute("uv",new Xt(n,2))}async function vE(i){const e=await Rs("galata",i),t=await new Wl().loadAsync(`${i.base}tex/galata_stone_512.jpg`);t.wrapS=t.wrapT=Jn,t.colorSpace=Kt,t.anisotropy=4;const n=e.materials[0];return n.map=t,n.needsUpdate=!0,e.object.traverse(s=>{const a=s;a.isMesh&&a.material===n&&EE(a.geometry)}),e}function ME(i,e){const t=i.attributes.position,n=t.count,s=new Float32Array(n*2),a=new ne,r=new ne,o=new ne,c=new ne,l=new ne,h=i.index?i.index.array:null,f=h?h.length/3:n/3;for(let u=0;u<f;u++){const d=[0,1,2].map(b=>h?h[u*3+b]:u*3+b);a.fromBufferAttribute(t,d[0]),r.fromBufferAttribute(t,d[1]),o.fromBufferAttribute(t,d[2]);const m=c.subVectors(r,a).cross(l.subVectors(o,a)),_=Math.abs(m.x),p=Math.abs(m.y),A=Math.abs(m.z);for(const b of d){const x=t.getX(b),g=t.getY(b),C=t.getZ(b);p>_&&p>A?(s[b*2]=x/e,s[b*2+1]=C/e):_>A?(s[b*2]=C/e,s[b*2+1]=g/e):(s[b*2]=x/e,s[b*2+1]=g/e)}}i.setAttribute("uv",new Xt(s,2))}const yE={nusretiye:["stone_ashlar_512.jpg",4],ayatriada:["stone_ashlar_512.jpg",4],stantoine:["brick_red_512.jpg",2.4]};async function wE(i,e){const t=await Rs(i,e),[n,s]=yE[i],a=await new Wl().loadAsync(`${e.base}tex/${n}`);a.wrapS=a.wrapT=Jn,a.colorSpace=Kt,a.anisotropy=4;const r=t.materials[0];return r.map=a,r.needsUpdate=!0,t.object.traverse(o=>{const c=o;c.isMesh&&c.material===r&&ME(c.geometry,s)}),t}function CE(i,e,t){const n=[],s=[],a=new Ne,r=(se,oe,ve,me)=>{n.push(...se,...oe,...ve),a.set(me);for(let j=0;j<3;j++)s.push(a.r,a.g,a.b)},o=se=>{const oe=Math.sin(se*127.1+311.7)*43758.5453;return oe-Math.floor(oe)},c=["#b8643f","#c06a43","#ad5c3b","#c27350","#b05f40"],l="#d9cbb4",h=se=>{const oe=[];for(let ve=0;ve<se.length;ve+=2)oe.push(new Ye(se[ve],se[ve+1]));return kn.isClockWise(oe)&&oe.reverse(),oe},f=h(i.outline);let u=0;for(const se of f)u+=e(se.x,se.y);u/=f.length;const d=(se,oe)=>e(se,oe),m=7;((se,oe,ve,me)=>{for(let j=0;j<se.length;j++){const pe=se[j],xe=se[(j+1)%se.length],Me=d(pe.x,pe.y),Ie=d(xe.x,xe.y);r([pe.x,Me+oe,pe.y],[xe.x,Ie+oe,xe.y],[xe.x,Ie+ve,xe.y],me),r([pe.x,Me+oe,pe.y],[xe.x,Ie+ve,xe.y],[pe.x,Me+ve,pe.y],me)}})(f,-1,m,l);const p=[],A=[];i.cells.forEach((se,oe)=>{const ve=h(se.p);let me=0,j=0;for(const je of ve)me+=je.x,j+=je.y;me/=ve.length,j/=ve.length;const pe=c[Math.floor(o(oe)*c.length)],xe=new Ne(pe).multiplyScalar(.82),Me=m+(o(oe*3.3)-.5)*1.2,Ie=d(me,j);let Te=0;for(const je of ve)Te=Math.max(Te,Math.hypot(je.x-me,je.y-j));const Qe=Math.min(2.6,.45*Te);if(se.r&&ve.length===4){const je=Math.cos(se.a),ze=Math.sin(se.a);let ht=1e9,be=-1e9;for(const ft of ve){const Pe=(ft.x-me)*je+(ft.y-j)*ze;ht=Math.min(ht,Pe),be=Math.max(be,Pe)}const xt=be-ht,tt=Math.min(xt*.3,2.5),$e=[me+je*(ht+tt),Ie+Me+Qe,j+ze*(ht+tt)],Ke=[me+je*(be-tt),Ie+Me+Qe,j+ze*(be-tt)];for(let ft=0;ft<4;ft++){const Pe=ve[ft],J=ve[(ft+1)%4],L=d(Pe.x,Pe.y)+Me,we=d(J.x,J.y)+Me,Re=(Pe.x-me)*je+(Pe.y-j)*ze,E=(J.x-me)*je+(J.y-j)*ze,I=Re<0?$e:Ke,ce=E<0?$e:Ke,O=ft%2?pe:xe;I===ce?r([Pe.x,L,Pe.y],[J.x,we,J.y],I,O):(r([Pe.x,L,Pe.y],[J.x,we,J.y],ce,O),r([Pe.x,L,Pe.y],ce,I,O))}}else{const je=[me,Ie+Me+Qe*.8,j];for(let ze=0;ze<ve.length;ze++){const ht=ve[ze],be=ve[(ze+1)%ve.length];r([ht.x,d(ht.x,ht.y)+Me,ht.y],[be.x,d(be.x,be.y)+Me,be.y],je,ze%2?pe:xe)}}o(oe*7.1)<.22&&p.push([me+(o(oe*9.1)-.5)*Te*.6,Ie+Me+Qe*.5,j+(o(oe*4.7)-.5)*Te*.6,1.3+o(oe)*.9]),o(oe*5.9)<(t?.15:.3)&&A.push([me+(o(oe*2.1)-.5)*Te,Ie+Me+Qe*.4,j+(o(oe*6.3)-.5)*Te])});const b=i.sw/2+.6;for(const se of i.streets)for(let oe=0;oe<se.length-1;oe++){const[ve,me]=se[oe],[j,pe]=se[oe+1],xe=Math.hypot(j-ve,pe-me);if(xe<.5)continue;const Me=-(pe-me)/xe*b,Ie=(j-ve)/xe*b,Te=d(ve,me),Qe=d(j,pe),je=m+.6,ze=je+1.6,ht=[ve+Me,Te+je,me+Ie],be=[j+Me,Qe+je,pe+Ie],xt=[ve-Me,Te+je,me-Ie],tt=[j-Me,Qe+je,pe-Ie],$e=[ve,Te+ze,me],Ke=[j,Qe+ze,pe];r(ht,be,Ke,"#c98a68"),r(ht,Ke,$e,"#c98a68"),r(tt,xt,$e,"#b97a5c"),r(tt,$e,Ke,"#b97a5c");const ft=-(pe-me)/xe*.45,Pe=(j-ve)/xe*.28,J=[ve+ft,Te+ze+.08,me+Pe],L=[j+ft,Qe+ze+.08,pe+Pe],we=[j-ft,Qe+ze+.08,pe-Pe],Re=[ve-ft,Te+ze+.08,me-Pe];r(J,L,we,"#e6dccd"),r(J,we,Re,"#e6dccd")}const x=new It;x.setAttribute("position",new pt(n,3)),x.setAttribute("color",new pt(s,3)),x.computeVertexNormals();const g=new Ln;g.name="kapalicarsi";const C=new dt(x,new ut({vertexColors:!0,side:Vt}));C.castShadow=C.receiveShadow=!0,g.add(C);const w=new ut({color:"#b7bcc2"}),y=new ut({color:"#cfc6b6"}),S=new Ni(1,14,5,0,Math.PI*2,0,Math.PI/2),v=new Gt(1,1,1),M=i.beds.reduce((se,oe)=>se+oe.nc*oe.nr+4,0),N=new jt(S,w,M+p.length),T=new ot,H=new qt,ie=new ne(0,1,0),ge=new ne,ue=new ne;let ae=0;for(const se of i.beds){const oe=d(se.x,se.z),ve=10.5;H.setFromAxisAngle(ie,-se.a);const me=new dt(v,y);me.position.set(se.x,oe+ve/2-1,se.z),me.scale.set(se.L,ve,se.W),me.quaternion.copy(H),me.castShadow=me.receiveShadow=!0,g.add(me);const j=se.L/se.nc,pe=se.W/se.nr,xe=Math.min(j,pe)*.44,Me=Math.cos(se.a),Ie=Math.sin(se.a);for(let Te=0;Te<se.nc;Te++)for(let Qe=0;Qe<se.nr;Qe++){const je=-se.L/2+j*(Te+.5),ze=-se.W/2+pe*(Qe+.5);N.setMatrixAt(ae++,T.compose(ge.set(se.x+Me*je-Ie*ze,oe+ve-1,se.z+Ie*je+Me*ze),H,ue.set(xe,xe*.75,xe)))}for(const[Te,Qe]of[[-1,-1],[1,-1],[1,1],[-1,1]]){const je=Te*(se.L/2-1.5),ze=Qe*(se.W/2-1.5);N.setMatrixAt(ae++,T.compose(ge.set(se.x+Me*je-Ie*ze,oe+ve+.4,se.z+Ie*je+Me*ze),H,ue.set(1.8,1.8,1.8)))}}const $=ae;for(const se of p)N.setMatrixAt(ae++,T.compose(ge.set(se[0],se[1],se[2]),H.identity(),ue.set(se[3],se[3]*.8,se[3])));N.count=ae,N.castShadow=N.receiveShadow=!0,N.computeBoundingSphere(),g.add(N);const fe=new jt(v,new ut({color:"#8d6a55"}),Math.max(1,A.length));return A.forEach((se,oe)=>fe.setMatrixAt(oe,T.compose(ge.set(se[0],se[1]+.9,se[2]),H.identity(),ue.set(.8,1.8,.8)))),fe.count=A.length,fe.computeBoundingSphere(),g.add(fe),{grp:g,detail:[fe],dome:N,nBig:$,outline:i.outline,tris:n.length/9}}function od(i,e,t=.6){return i.ways.flatMap(n=>SE(n,e,t,i.top||0,i.ramp||250))}function SE(i,e,t,n,s){const a=i.p,r=a.length/2;let o=0;const c=[0];for(let d=1;d<r;d++)o+=Math.hypot(a[2*d]-a[2*d-2],a[2*d+1]-a[2*d-1]),c.push(o);const l=e(a[0],a[1]),h=e(a[2*r-2],a[2*r-1]),f=i.w/2+t,u=[];for(let d=0;d+1<r;d++){const m=a[2*d],_=a[2*d+1],p=a[2*d+2],A=a[2*d+3],b=c[d+1]-c[d];if(b<.01)continue;const x=(p-m)/b,g=(A-_)/b,C=-g,w=x,y=Math.max(1,Math.ceil(b/8));for(let S=0;S<y;S++){const v=b*S/y,M=b*(S+1)/y+.4,N=(v+M)/2,T=m+x*N,H=_+g*N,ie=e(T,H),ge=c[d]+N,ue=Math.max(0,Math.min(1,Math.min(ge,o-ge)/s)),ae=Math.max(ie,l+(h-l)*ge/o,n*ue*ue*(3-2*ue));if(ae-ie<.3)continue;const $=[m+x*v+C*f,_+g*v+w*f,m+x*M+C*f,_+g*M+w*f,m+x*M-C*f,_+g*M-w*f,m+x*v-C*f,_+g*v-w*f];u.push({ring:$,y:ae,g:ie,x:T,z:H,rot:Math.atan2(-g,x),len:M-v,w:i.w})}}return u}const zt=2.5,qs={x:-592.4,z:572.3,yaw:Math.atan2(19,-35.2)};function IE(i,e,t,n,s,a){const r=i.length;if(r<6)return;let o=1/0,c=-1/0;const l=[];for(let d=0;d<r;d+=2){const m=(d+2)%r;let _=i[d],p=i[d+1],A=i[m],b=i[m+1];if(p<o&&(o=p),b<o&&(o=b),p>c&&(c=p),b>c&&(c=b),p!==b){if(p>b){const x=_;_=A,A=x;const g=p;p=b,b=g}l.push({y0:p,y1:b,x:_,dx:(A-_)/(b-p)})}}const h=Math.max(0,Math.floor((o-t)/zt)),f=Math.min(s-1,Math.floor((c-t)/zt)),u=[];for(let d=h;d<=f;d++){const m=t+(d+.5)*zt;u.length=0;for(const _ of l)m>=_.y0&&m<_.y1&&u.push(_.x+_.dx*(m-_.y0));u.sort((_,p)=>_-p);for(let _=0;_+1<u.length;_+=2){const p=Math.max(0,Math.floor((u[_]-e)/zt)),A=Math.min(n-1,Math.floor((u[_+1]-e)/zt));for(let b=p;b<=A;b++)a(b,d)}}}function TE(){const i=new Ln,e=new dt(new Gt(1.7,.55,3.8),new ut({color:"#d24b3a"}));e.position.y=.7,e.castShadow=!0;const t=new dt(new Gt(1.45,.48,1.7),new ut({color:"#d7e7f2"}));t.position.set(0,1.15,.15),t.castShadow=!0,i.add(e,t);const n=new dt(new Gl(1.55,18),new Xn({color:"#1a140f",transparent:!0,opacity:.35,depthWrite:!1}));n.rotation.x=-Math.PI/2,n.position.y=.22,n.renderOrder=6,i.add(n);const s=new Gt(.28,.42,.42),a=new ut({color:"#242424"});for(const[r,o]of[[.86,1.25],[-.86,1.25],[.86,-1.2],[-.86,-1.2]]){const c=new dt(s,a);c.position.set(r,.26,o),c.castShadow=!0,i.add(c)}return i}async function BE(i){const{scene:e,camera:t,controls:n,H:s,roads:a,plazas:r,buildings:o,water:c,map:l,narrow:h}=i,[f,u,d,m]=i.bounds,_=f-20,p=u-20,A=Math.ceil((d-f+40)/zt),b=Math.ceil((m-u+40)/zt),x=new Uint8Array(A*b),g=new Uint8Array(A*b),C=new Map,w=new Map,y=[],S=(U,q)=>q*A+U,v=(U,q)=>IE(U,_,p,A,b,q),M=(U,q,he)=>{if(U?.[0]&&(v(U[0],q),he))for(let Ce=1;Ce<U.length;Ce++)v(U[Ce],he)};for(const U of a)M(U,(q,he)=>{x[S(q,he)]=1},(q,he)=>{x[S(q,he)]=0});for(const U of r)M(U,(q,he)=>{x[S(q,he)]||(x[S(q,he)]=2)});try{const U=await(await fetch(`${l}data/taksim_plaza.json`)).json();for(const q of U.plazas||[])v(q,(he,Ce)=>{x[S(he,Ce)]||(x[S(he,Ce)]=2)})}catch{}try{const U=await(await fetch(`${l}data/bridges.json`)).json();for(const q of U.bridges){if(q.id==="w949665670")continue;const he=q.name?y.indexOf(q.name)+1||y.push(q.name):0;for(const Ce of q.strips){const De=Ce.p;let Fe=0,ke=0,Le=0;for(let qe=0;qe<De.length;qe+=2)Fe+=De[qe],ke+=De[qe+1],Le++;const Ue=Math.max(0,s(Fe/Le,ke/Le));if(Ue>2&&Ce.y<3&&q.id!=="w280961352")continue;const at=qe=>{const At=Math.max(0,Math.min(1,qe));return At*At*(3-2*At)},Ge=qe=>q.id!=="w280961352"?null:qe>=530?.45+6.05*at((588-qe)/52):qe<=236?.45+6.05*at((qe-186)/50):6.5;v(De,(qe,At)=>{const Ot=S(qe,At),Wt=Ge(p+(At+.5)*zt)??Ce.y+Ue;x[Ot]=1;const Ae=C.get(Ot);(Ae==null||Wt>Ae)&&(C.set(Ot,Wt),he&&w.set(Ot,he))})}}}catch(U){console.warn("drive bridges skipped",U)}try{const U=await(await fetch(new URL("data/halic17e.json",location.href).href)).json(),q=y.indexOf(U.name)+1||y.push(U.name);for(const he of od(U,s))v(he.ring,(Ce,De)=>{const Fe=S(Ce,De);x[Fe]=1;const ke=C.get(Fe);(ke==null||he.y>ke)&&(C.set(Fe,he.y),w.set(Fe,q))})}catch(U){console.warn("Haliç deck skipped",U)}const N=(U,q)=>{let he=0,Ce=0,De=0;for(let Ue=0;Ue<U.length;Ue+=2)he+=U[Ue],Ce+=U[Ue+1],De++;if(!De)return U;const Fe=he/De,ke=Ce/De,Le=[];for(let Ue=0;Ue<U.length;Ue+=2){const at=U[Ue]-Fe,Ge=U[Ue+1]-ke,qe=Math.hypot(at,Ge)||1,At=Math.max(.15,(qe-q)/qe);Le.push(Fe+at*At,ke+Ge*At)}return Le};for(const U of o)if(!(!U.h||U.h<2.2||!U.p))for(const q of U.p)q?.[0]&&q[0].length>=6&&v(N(q[0],3.2),(he,Ce)=>{g[S(he,Ce)]=1});for(const U of c)M(U,(q,he)=>{g[S(q,he)]=2},(q,he)=>{g[S(q,he)]===2&&(g[S(q,he)]=0)});try{i.patchMask?.({road:x,block:g,deck:C,nx:A,nz:b,x0:_,z0:p,step:zt,buildings:o})}catch(U){console.warn("drive3 world mask skipped",U)}for(let U=0;U<x.length;U++)x[U]&&g[U]===1&&!C.has(U)&&(x[U]=0);const T=g.slice();for(let U=0;U<4;U++){const q=U===0?T:g.slice();for(let he=1;he<b-1;he++)for(let Ce=1;Ce<A-1;Ce++){const De=S(Ce,he);q[De]===2&&(q[De-1]!==2||q[De+1]!==2||q[De-A]!==2||q[De+A]!==2)&&(g[De]=0)}}const H=x.slice();for(let U=1;U<b-1;U++)for(let q=1;q<A-1;q++){const he=S(q,U);H[he]||g[he]||(H[he-1]||H[he+1]||H[he-A]||H[he+A])&&(x[he]=1)}const ie=(U,q)=>{const he=Math.floor((U-_)/zt),Ce=Math.floor((q-p)/zt);return he<0||Ce<0||he>=A||Ce>=b?-1:S(he,Ce)},ge=(U,q)=>{const he=ie(U,q);return he<0?0:x[he]},ue=(U,q)=>{const he=ie(U,q),Ce=he<0?0:w.get(he)||0;return Ce?y[Ce-1]:""},ae=(U,q)=>{const he=ie(U,q);return he<0?0:C.get(he)||0},$=(U,q)=>{if(ae(U,q)>.3)return!1;const he=ie(U,q);return he<0?!0:x[he]?!1:g[he]===1||g[he]===2&&s(U,q)<1.5},fe=(U,q)=>$(U,q)?0:ge(U,q)||3,se=(U,q,he)=>{const Ce=s(U,q),De=ae(U,q);return De>.3&&he!=null&&De-Ce>4&&he<De-3?Ce+.42:(De>.3?Math.max(De,Ce):Ce)+.42};let oe=qs.x,ve=qs.z;if(!fe(oe,ve)){let U=!1;for(let q=zt;q<80&&!U;q+=zt)for(let he=0;he<16;he++){const Ce=qs.x+Math.cos(he)*q,De=qs.z+Math.sin(he)*q;if(fe(Ce,De)===1){oe=Ce,ve=De,U=!0;break}}}let me=0;const j=U=>{let q=0;for(let he=3;he<=90;he+=3){const Ce=oe+Math.sin(U)*he,De=ve+Math.cos(U)*he,Fe=fe(Ce+Math.cos(U)*.8,De-Math.sin(U)*.8);if(fe(Ce,De)!==1||Fe!==1)break;q=he}return q};if(j(qs.yaw)>=12)me=qs.yaw;else{let U=-1;for(let q=0;q<24;q++){const he=q/24*Math.PI*2,Ce=j(he);Ce>U&&(U=Ce,me=he)}}const pe=TE();e.add(pe);let xe=oe,Me=ve,Ie=se(oe,ve),Te=0,Qe=oe,je=ve,ze=me,ht=null,be=0,xt=0,tt=0;pe.position.set(xe,Ie,Me),pe.rotation.y=me,t.fov=h?68:56,t.near=.45,t.far=22e3,t.updateProjectionMatrix(),n.enabled=!1;const $e=new Set;let Ke=0,ft=0,Pe=0,J=0;const L=(U,q)=>{const he=U.key.length===1?U.key.toLowerCase():U.key;if(!["w","a","s","d","arrowup","arrowdown","arrowleft","arrowright"].includes(he.toLowerCase())&&!he.startsWith("Arrow"))return;U.preventDefault();const Ce=U.key.length===1?U.key.toLowerCase():U.key;q?$e.add(Ce):$e.delete(Ce)};window.addEventListener("keydown",U=>L(U,!0),{passive:!1}),window.addEventListener("keyup",U=>L(U,!1));const we=document.getElementById("steer"),Re=document.getElementById("gas"),E=document.getElementById("brake"),I=new Set,ce=(U,q)=>{if(!U)return;const he=new Set,Ce=()=>{Ke=(O.size?1:0)+(Q.size?-1:0)};U.addEventListener("pointerdown",Fe=>{he.add(Fe.pointerId),(U===Re?O:Q).add(Fe.pointerId),Ce();try{U.setPointerCapture(Fe.pointerId)}catch{}Fe.preventDefault()});const De=Fe=>{he.delete(Fe.pointerId),(U===Re?O:Q).delete(Fe.pointerId),Ce()};U.addEventListener("pointerup",De),U.addEventListener("pointercancel",De)},O=new Set,Q=new Set;if(ce(Re),ce(E),we){const U=he=>{const Ce=we.getBoundingClientRect();ft=sn.clamp((he.clientX-(Ce.left+Ce.width/2))/(Ce.width*.38),-1,1)};we.addEventListener("pointerdown",he=>{I.add(he.pointerId),U(he);try{we.setPointerCapture(he.pointerId)}catch{}he.preventDefault()}),we.addEventListener("pointermove",he=>{I.has(he.pointerId)&&U(he)});const q=he=>{I.delete(he.pointerId),I.size||(ft=0)};we.addEventListener("pointerup",q),we.addEventListener("pointercancel",q)}document.getElementById("reset")?.addEventListener("pointerdown",U=>{U.preventDefault(),k()});const P=document.getElementById("labels");P&&(P.style.display="none");const z=document.createElement("i");we?.appendChild(z);const W=document.getElementById("speed"),Y=new ne,F=new ne,G=new ne;let te=!1;const ee=()=>{let U=Pe,q=J;return($e.has("w")||$e.has("W")||$e.has("ArrowUp"))&&(U+=1),($e.has("s")||$e.has("S")||$e.has("ArrowDown"))&&(U-=1),($e.has("a")||$e.has("A")||$e.has("ArrowLeft"))&&(q-=1),($e.has("d")||$e.has("D")||$e.has("ArrowRight"))&&(q+=1),U=sn.clamp(U+Ke,-1,1),q=sn.clamp(q+ft,-1,1),{throttle:U,steer:q}},R=(U,q,he)=>{let Ce=0;for(let De=2;De<=22&&!$(U+Math.sin(he)*De,q+Math.cos(he)*De);De+=2)Ce=De;return Ce};function k(){O.clear(),Q.clear(),I.clear(),Ke=0,ft=0,Pe=0,J=0,xe=Qe,Me=je,me=ze,Te=0,Ie=se(xe,Me),pe.position.set(xe,Ie,Me),pe.rotation.y=me,te=!1,be=.35,xt=0}const B=new dt(new It,new Xn({vertexColors:!0,depthWrite:!1,fog:!1,side:Vt,polygonOffset:!0,polygonOffsetFactor:-3,polygonOffsetUnits:-3}));B.renderOrder=4,B.frustumCulled=!1,B.name="drive-road";const X=rr().get("ribbon")==="1";B.visible=X,e.add(B);let V=new Ye(1e9,1e9);const le=()=>{if(!X){V.set(xe,Me);return}const U=42,q=Math.max(0,Math.floor((xe-U-_)/zt)),he=Math.min(A-1,Math.floor((xe+U-_)/zt)),Ce=Math.max(0,Math.floor((Me-U-p)/zt)),De=Math.min(b-1,Math.floor((Me+U-p)/zt)),Fe=[],ke=[],Le=[.16,.15,.14],Ue=[.92,.78,.22],at=[.72,.68,.6];for(let qe=Ce;qe<=De;qe++)for(let At=q;At<=he;At++){const Ot=x[S(At,qe)];if(!Ot||C.has(S(At,qe)))continue;const Wt=_+At*zt,Ae=p+qe*zt,Se=se(Wt+zt*.5,Ae+zt*.5)+.12,Oe=Ot===1&&(At+qe)%5===0,D=!x[S(Math.max(0,At-1),qe)]||!x[S(Math.min(A-1,At+1),qe)]||!x[S(At,Math.max(0,qe-1))]||!x[S(At,Math.min(b-1,qe+1))],de=Oe?Ue:D?at:Le;Fe.push(Wt,Se,Ae,Wt+zt,Se,Ae,Wt+zt,Se,Ae+zt,Wt,Se,Ae,Wt+zt,Se,Ae+zt,Wt,Se,Ae+zt);for(let Ee=0;Ee<6;Ee++)ke.push(de[0],de[1],de[2])}const Ge=B.geometry;Ge.setAttribute("position",new pt(Fe,3)),Ge.setAttribute("color",new pt(ke,3)),Ge.computeBoundingSphere(),V.set(xe,Me)};function Z(U){U=Math.min(.08,Math.max(0,U));let{throttle:q,steer:he}=ee();be>0&&(be=Math.max(0,be-U),q=0,he=0,Te=0);const Ce=28;if(q>0)Te<0?Te=Math.min(0,Te+32*U):Te=Math.min(Ce,Te+22*U);else if(q<0)Te>.3?Te=Math.max(0,Te-32*U):Te=Math.max(-12,Te-16*U);else{const Oe=5*U;Math.abs(Te)<=Oe?Te=0:Te-=Math.sign(Te)*Oe}const De=Te<-.2?-1:1;me+=he*De*(2.35/(1+Math.abs(Te)/22))*U;const Fe=xe,ke=Me;let Le=!1;if(U>0&&Math.abs(Te)>.04){const Oe=Te*U,D=Math.sin(me)*Oe,de=Math.cos(me)*Oe,Ee=(ye,_e)=>$(xe+ye,Me+_e)?!1:(xe+=ye,Me+=_e,!0);if(Le=Ee(D,de)||Ee(D,0)||Ee(0,de),Le)xt=0;else if(Te=0,xt+=U,ht={x:xe,z:Me,yaw:me},Math.abs(q)>.2&&xt>.2){let ye=-1,_e=me;for(let He=-5;He<=5;He++){const We=me+He*.45,et=R(xe,Me,We);et>ye&&(ye=et,_e=We)}let Be=_e-me;for(;Be>Math.PI;)Be-=Math.PI*2;for(;Be<-Math.PI;)Be+=Math.PI*2;me+=Math.max(-1.2,Math.min(1.2,Be))*Math.min(1,U*3)}}const Ue=Math.hypot(xe-Fe,Me-ke),at=U>0?Ue/U:0;tt+=(at-tt)*Math.min(1,U*8);const Ge=se(xe,Me);if(!te)Ie=Ge;else{const Oe=Ge-Ie,D=Math.abs(Oe)<=2.8?Oe*Math.min(1,U*10):Math.sign(Oe)*6*U;Ie+=D}pe.position.set(xe,Ie,Me),pe.rotation.y=me,z&&(z.style.transform=`translate(calc(-50% + ${ft*28}px), -50%)`),V.distanceToSquared(new Ye(xe,Me))>36&&le();let qe=(h?12:13)+Math.min(9,Math.abs(Te)*.28);const At=(h?5.4:5.8)+Math.min(2.2,Math.abs(Te)*.06),Ot=xe-Math.sin(me)*qe,Wt=Me-Math.cos(me)*qe,Ae=ie(Ot,Wt);Ae>=0&&g[Ae]===1&&ae(Ot,Wt)<=.3&&(qe*=.55);const Se=new ne(xe-Math.sin(me)*qe,Ie+At,Me-Math.cos(me)*qe);te?Y.lerp(Se,1-Math.exp(-U*6)):(Y.copy(Se),te=!0),t.position.copy(Y),F.set(xe+Math.sin(me)*14,Ie+2.4,Me+Math.cos(me)*14),t.lookAt(F),G.set(xe,Ie+.8,Me),n.target.copy(G),W&&(W.textContent=`${Math.round(tt*3.6)} km/sa`)}Z(0);const re=x.reduce((U,q)=>U+(q?1:0),0);return Ze.__driveInfo={start:{x:Qe,z:je,yaw:ze},roadCells:re,decks:C.size,maxF:28,maxR:12,model:"ground+roads; blocked by buildings and sea-level water",ramp:[555,565,572,580,590].map(U=>({z:U,d:ae(-590,U)}))},{update:Z,reset:k,focus:()=>G,state:()=>({x:xe,z:Me,y:Ie,speed:Te,yaw:me,onRoad:!!ge(xe,Me),lastBlock:ht}),input:ee,cell:(U,q)=>fe(U,q),probe:(U,q)=>{const he=ie(U,q);return{cell:fe(U,q),blocked:$(U,q),road:ge(U,q),deck:ae(U,q),H:s(U,q),block:he<0?-1:g[he]}},tick:U=>Z(U),setInput:(U,q)=>{Pe=U,J=q},car:pe,world:{STEP:zt,x0:_,z0:p,nx:A,nz:b,road:x,block:g,blockedAt:$,cellAt:fe,surface:se,deckAt:ae,deckNameAt:ue,follow:(U,q)=>{xe=U,Me=q,V.distanceToSquared(new Ye(xe,Me))>36&&le()}}}}const RE=["#a39383","#8f8478","#e2d5bc","#b8a993"].map(i=>new Ne(i)),Ys=new Ne("#f3efe6"),Vr=new Ne("#3a3936"),Ra=new Ne("#a35a42"),Wr=new Ne("#934f3a"),DE=new Ne("#c9c2b4"),LE=new Ne("#2f2e2c");function PE(i,e){const t=e.units.map(n=>({cx:n.c[0],cz:n.c[1],tx:Math.cos(n.rot),tz:-Math.sin(n.rot),hw:n.w/2+1,hd:n.d/2+1}));return i.filter(n=>{const s=n.p?.[0]?.[0];if(!s)return!0;let a=0,r=0;for(let o=0;o<s.length;o+=2)a+=s[o],r+=s[o+1];return a/=s.length/2,r/=s.length/2,!t.some(o=>{const c=a-o.cx,l=r-o.cz,h=c*o.tx+l*o.tz,f=-c*o.tz+l*o.tx;return Math.abs(h)<o.hw&&Math.abs(f)<o.hd})})}function UE(i,e){const t=[],n=[];let s=0,a=0,r=1,o=0,c=0;const l=(p,A,b)=>[s+p*r-b*o,c+A,a+p*o+b*r],h=(p,A,b,x)=>{const g=l(p[0],p[1],p[2]),C=l(A[0],A[1],A[2]),w=l(b[0],b[1],b[2]);t.push(...g,...C,...w);for(let y=0;y<3;y++)n.push(x.r,x.g,x.b)},f=(p,A,b,x,g)=>{h(p,A,b,g),h(p,b,x,g)},u=(p,A,b,x,g,C,w)=>{const y=p-x/2,S=p+x/2,v=A-g/2,M=A+g/2,N=b+C;f([y,b,M],[S,b,M],[S,N,M],[y,N,M],w),f([S,b,v],[y,b,v],[y,N,v],[S,N,v],w),f([y,b,v],[y,b,M],[y,N,M],[y,N,v],w),f([S,b,M],[S,b,v],[S,N,v],[S,N,M],w),f([y,N,M],[S,N,M],[S,N,v],[y,N,v],w)},d=(p,A,b,x,g,C)=>{for(let y=0;y<6;y++){const S=Math.PI*y/6,v=Math.PI*(y+1)/6,M=[p,A,b],N=[p+Math.cos(S)*g,A+Math.sin(S)*g,b],T=[p+Math.cos(v)*g,A+Math.sin(v)*g,b];x>0?h(M,N,T,C):h(M,T,N,C)}};for(const p of i.units){s=p.c[0],a=p.c[1],r=Math.cos(p.rot),o=-Math.sin(p.rot);const A=p.w/2,b=p.d/2;let x=1e9;for(const[j,pe]of[[-A,-b],[A,-b],[A,b],[-A,b]]){const xe=l(j,0,pe);x=Math.min(x,e(xe[0],xe[2]))}c=x-.3;const g=Math.max(2,Math.min(4,p.lv||3)),C=4.2,w=3.6,y=.9+C+(g-1)*w,S=RE[p.k],v=p.f;u(0,0,0,p.w,p.d,.9,DE),u(0,0,.9,p.w,p.d,y-.9,S),u(0,0,y-.5,p.w+.1,p.d+.7,.5,Ys);for(let j=1;j<g;j++)u(0,v*(b+.04),.9+C+(j-1)*w-.1,p.w,.16,.22,Ys);const M=Math.max(1,Math.round(p.w/2.6)),N=p.w/M;for(const j of[v,-v]){const pe=j*(b+.06),xe=j===v;for(let Me=0;Me<M;Me++){const Ie=-A+N*(Me+.5);for(let Te=0;Te<g;Te++){const Qe=Te===0?1.5:.9+C+(Te-1)*w+.7,je=Te===0?2.5:2,ze=Math.min(1.15,N*.48);!xe&&Te===0&&Me%2||(u(Ie,j*(b+.03),Qe-.15,ze+.36,.06,je+.3,Ys),u(Ie,pe,Qe,ze,.04,je,Vr),Te===g-1&&xe&&(d(Ie,Qe+je+.15,pe+j*.02,j,(ze+.36)/2,Ys),d(Ie,Qe+je,pe+j*.05,j,ze/2,Vr)),Te===1&&xe&&(M===1||Me===Math.floor(M/2))&&(u(Ie,j*(b+.4),Qe-.25,ze+1,.8,.14,Ys),u(Ie,j*(b+.78),Qe-.11,ze+1,.05,.9,LE)))}}}const T=.45,H=-A-(p.hl?T:0),ie=A+(p.hr?T:0),ge=-b-T,ue=b+T,ae=(b+T)*Math.tan(32*Math.PI/180),$=y+ae,fe=p.hl?H+(b+T):H,se=p.hr?ie-(b+T):ie,oe=Math.min(fe,(H+ie)/2),ve=Math.max(se,(H+ie)/2);f([H,y,ue],[ie,y,ue],[ve,$,0],[oe,$,0],v>0?Ra:Wr),f([ie,y,ge],[H,y,ge],[oe,$,0],[ve,$,0],v>0?Wr:Ra),p.hl?h([H,y,ge],[H,y,ue],[oe,$,0],Wr):h([H,y,ge],[H,y,ue],[H,$,0],S),p.hr?h([ie,y,ue],[ie,y,ge],[ve,$,0],Wr):h([ie,y,ue],[ie,y,ge],[ie,$,0],S);const me=Math.max(1,Math.round(p.w/6.5));for(let j=0;j<me;j++){const pe=-A+p.w*(j+.5)/me,xe=v*(b*.45),Me=y+(b-b*.45-.5)*Math.tan(32*Math.PI/180)-.6;u(pe,xe,Me,1.4,1.3,1.7,S),u(pe,xe+v*.66,Me+.35,.8,.04,1,Vr);const Ie=Me+1.7;f([pe-.8,Ie,xe-.75],[pe+.8,Ie,xe-.75],[pe,Ie+.7,xe-.75],[pe,Ie+.7,xe-.75],Ra),h([pe-.8,Ie,xe+v*.75],[pe+.8,Ie,xe+v*.75],[pe,Ie+.7,xe+v*.75],Ys),f([pe-.8,Ie,xe-.75],[pe-.8,Ie,xe+.75],[pe,Ie+.7,xe+.75],[pe,Ie+.7,xe-.75],Ra),f([pe+.8,Ie,xe+.75],[pe+.8,Ie,xe-.75],[pe,Ie+.7,xe-.75],[pe,Ie+.7,xe+.75],Ra)}{const j=-v*b*.5,pe=y+(b*.5+T)*Math.tan(32*Math.PI/180)+.05;u(0,j,pe-.12,Math.min(2.2,p.w*.3),1.2,.18,Vr)}}const m=new It;m.setAttribute("position",new pt(t,3)),m.setAttribute("color",new pt(n,3)),m.computeVertexNormals();const _=new dt(m,new ut({vertexColors:!0,side:Vt}));return _.name="akaretler17b",_.castShadow=_.receiveShadow=!0,_}const cd=(i,e,t)=>{let n=!1;for(let s=0,a=i.length-2;s<i.length;a=s,s+=2){const r=i[s],o=i[s+1],c=i[a],l=i[a+1];o>t!=l>t&&e<(c-r)*(t-o)/(l-o)+r&&(n=!n)}return n},Zr=i=>{let e=0,t=0;for(let n=0;n<i.length;n+=2)e+=i[n],t+=i[n+1];return[e/(i.length/2),t/(i.length/2)]},aa=12;function ld(i){const e=[];for(const[t,n,s,a,r]of i.portals||[]){const o=-a,c=s,l=(h,f,u)=>[t+s*h+o*u,n+a*h+c*u,t+s*f+o*u,n+a*f+c*u,t+s*f-o*u,n+a*f-c*u,t+s*h-o*u,n+a*h-c*u];e.push(l(1,4,r/2)),e.push(l(-9,1,r/2+3))}return e}function FE(i,e){const t=[e.akm.ring,e.mosque.ring,e.maksem.ring,e.marmara.ring,...e.maksem.osm?[e.maksem.osm]:[]];return i.filter(n=>{const s=n.p?.[0]?.[0];if(!s)return!0;const[a,r]=Zr(s);return!t.some(o=>cd(o,a,r))})}function NE(i,e){const t=new Ln;t.name="taksim17d";const n=(T,H,ie)=>{const ge=me=>{const j=[];for(let pe=0;pe<me.length;pe+=2)j.push(new Ye(me[pe],me[pe+1]));return j};let ue=ge(T);kn.isClockWise(ue)&&(ue=ue.reverse());const ae=H.map(me=>{let j=ge(me);return kn.isClockWise(j)||(j=j.reverse()),j}),$=ue.concat(...ae),fe=kn.triangulateShape(ue,ae),se=[],oe=(me,j,pe,xe)=>{if(Math.max(Math.hypot(me[0]-j[0],me[1]-j[1]),Math.hypot(j[0]-pe[0],j[1]-pe[1]),Math.hypot(pe[0]-me[0],pe[1]-me[1]))>7&&xe<7){const Ie=[(me[0]+j[0])/2,(me[1]+j[1])/2],Te=[(j[0]+pe[0])/2,(j[1]+pe[1])/2],Qe=[(pe[0]+me[0])/2,(pe[1]+me[1])/2];oe(me,Ie,Qe,xe+1),oe(Ie,j,Te,xe+1),oe(Qe,Te,pe,xe+1),oe(Ie,Te,Qe,xe+1);return}for(const Ie of[me,pe,j])se.push(Ie[0],e(Ie[0],Ie[1])+ie,Ie[1])};for(const me of fe)oe([$[me[0]].x,$[me[0]].y],[$[me[1]].x,$[me[1]].y],[$[me[2]].x,$[me[2]].y],0);const ve=new It;return ve.setAttribute("position",new pt(se,3)),ve.computeVertexNormals(),ve},s=new ut({color:"#c2c4c4",depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-2});s.onBeforeCompile=T=>{T.vertexShader=`varying vec3 vTp;
`+T.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
 vTp = (modelMatrix * vec4(transformed, 1.0)).xyz;`),T.fragmentShader=`varying vec3 vTp;
`+T.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
      { vec2 q = vTp.xz / 1.2; vec2 f = abs(fract(q) - 0.5); float j = 1.0 - smoothstep(0.44, 0.49, max(f.x, f.y)) * 0.0; float jl = smoothstep(0.455, 0.5, max(f.x, f.y));
        vec2 b = abs(fract(vTp.xz / 12.0) - 0.5); float band = step(0.47, max(b.x, b.y));
        diffuseColor.rgb *= (1.0 - 0.22 * jl) * (1.0 - 0.10 * band) * (0.97 + 0.03 * sin(floor(q.x) * 1.7 + floor(q.y) * 2.3)) * j; }`)},s.customProgramCacheKey=()=>"tk-pave";{const T=new ut({color:"#b3b5b4",depthWrite:!1}),H=[330,-1960,920,-1960,920,-1240,330,-1240],ie=new dt(n(H,[],.04),T);ie.renderOrder=-149,ie.receiveShadow=!0,ie.name="taksim_hardscape",t.add(ie)}for(const T of i.square){const H=new dt(n(T,i.square_holes.filter(ie=>{const[ge,ue]=Zr(ie);return cd(T,ge,ue)}),.16),s);H.renderOrder=-40,H.receiveShadow=!0,H.name="taksim_square",t.add(H)}{const T=new dt(n(i.istiklal,[],.15),s);T.renderOrder=-40,T.receiveShadow=!0,t.add(T)}{const T=new ut({color:"#7fa65a",depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-2}),H=new dt(n(i.park,[],.15),T);H.renderOrder=-41,H.receiveShadow=!0,H.name="gezi_lawn",t.add(H)}const a=[],r=[],o=new Ne,c=(T,H,ie,ge)=>{a.push(...T,...H,...ie),o.set(ge);for(let ue=0;ue<3;ue++)r.push(o.r,o.g,o.b)},l=(T,H,ie,ge,ue)=>{for(let ae=0,$=T.length-2;ae<T.length;$=ae,ae+=2){const fe=[T[$],H,T[$+1]],se=[T[ae],H,T[ae+1]],oe=[T[ae],ie,T[ae+1]],ve=[T[$],ie,T[$+1]];c(fe,se,oe,ge),c(fe,oe,ve,ge)}if(ue){const ae=[];for(let $=0;$<T.length;$+=2)ae.push(new Ye(T[$],T[$+1]));for(const $ of kn.triangulateShape(ae,[]))c([ae[$[0]].x,ie,ae[$[0]].y],[ae[$[1]].x,ie,ae[$[1]].y],[ae[$[2]].x,ie,ae[$[2]].y],ue)}},h=[],f=new ot,u=new qt,d=new ne(0,1,0),m=new ne,_=new ne,p=(T,H,ie,ge,ue,ae,$,fe,se=0)=>{const oe=T.index?T.toNonIndexed():T.clone();oe.deleteAttribute("uv"),oe.deleteAttribute("normal"),oe.applyMatrix4(f.compose(m.set(ie,ge,ue),u.setFromAxisAngle(d,se),_.set(ae,$,fe)));const ve=oe.attributes.position.count,me=oe.attributes.position.array;o.set(H);for(let j=0;j<ve*3;j++)a.push(me[j]);for(let j=0;j<ve;j++)r.push(o.r,o.g,o.b);h.push(oe)},A=new Nn(1,1,1,8),b=new Gt(1,1,1),x=new Nn(1,1,1,14),g=new Zi(1,1,14),C=new Ni(1,20,10,0,Math.PI*2,0,Math.PI/2),w=new Ni(1,22,14),y=T=>{let H=1e9;for(let ie=0;ie<T.length;ie+=2)H=Math.min(H,e(T[ie],T[ie+1]));return H},S=T=>{const[H,ie]=Zr(T);let ge=0,ue=0;for(let ae=0;ae<Math.PI;ae+=Math.PI/90){const $=Math.cos(ae),fe=Math.sin(ae);let se=1e9,oe=-1e9;for(let ve=0;ve<T.length;ve+=2){const me=(T[ve]-H)*$+(T[ve+1]-ie)*fe;se=Math.min(se,me),oe=Math.max(oe,me)}oe-se>ge&&(ge=oe-se,ue=ae)}return{cx:H,cz:ie,ang:ue,len:ge}};{const T=i.akm.ring,H=y(T)-.5,ie=H+.5+i.akm.h;l(T,H,ie-3,"#7a8d9b",null),l(T,ie-3,ie,"#e9e7e1","#cfcbc2");const[ge,ue]=Zr(T);let ae=-1,$=1e9;for(let fe=0,se=T.length-2;fe<T.length;se=fe,fe+=2){if(Math.hypot(T[fe]-T[se],T[fe+1]-T[se+1])<25)continue;const ve=Math.hypot((T[fe]+T[se])/2-i.anit[0],(T[fe+1]+T[se+1])/2-i.anit[1]);ve<$&&($=ve,ae=fe)}if(ae>=0){const fe=(ae-2+T.length)%T.length,se=(T[ae]+T[fe])/2,oe=(T[ae+1]+T[fe+1])/2,ve=Math.hypot(ge-se,ue-oe)||1,me=se+(ge-se)/ve*5,j=oe+(ue-oe)/ve*5;p(w,"#c8392d",me,H+12.5,j,11.5,11,11.5)}for(let fe=0,se=T.length-2;fe<T.length;se=fe,fe+=2){const oe=T[fe]-T[se],ve=T[fe+1]-T[se+1],me=Math.hypot(oe,ve);if(me<4)continue;const j=Math.atan2(-ve,oe);for(let pe=3;pe<me-1;pe+=6){const xe=T[se]+oe*pe/me,Me=T[se+1]+ve*pe/me;p(b,"#e9e7e1",xe,(H+ie-3)/2,Me,.7,ie-3-H,.9,j)}}}{const T=i.mosque,H=T.ring,ie=y(H)-.5,ge=ie+.5,ue=S(H),ae=Math.cos(ue.ang),$=Math.sin(ue.ang),fe=T.dome_d/2,se=17,oe=4.5,ve=ge+T.dome_top;l(H,ie,ge+se,"#e3d8c4","#cfc4ae"),p(x,"#e3d8c4",ue.cx,ge+se+oe/2,ue.cz,fe+.4,oe,fe+.4),p(C,"#8f9aa6",ue.cx,ge+se+oe,ue.cz,fe,ve-(ge+se+oe),fe),p(g,"#c4a35a",ue.cx,ve+1.1,ue.cz,.4,2.2,.4);for(const me of[-1,1]){const[j,pe]=[ue.cx+ae*me*(fe+6),ue.cz+$*me*(fe+6)];p(C,"#8f9aa6",j,ge+se,pe,6,5,6)}for(const[me,j]of T.minarets){const pe=e(me,j),xe=T.minaret_h;p(b,"#e7dfcf",me,pe+3,j,4.4,6,4.4),p(x,"#ece6da",me,pe+6+(xe-14-6)/2,j,1.5,xe-14-6,1.5);for(const Me of[xe*.6,xe*.78])p(x,"#ddd5c6",me,pe+Me,j,2.3,.8,2.3),p(x,"#ece6da",me,pe+Me+.9,j,2.25,1,2.25);p(x,"#ece6da",me,pe+xe-14+1.5,j,1.3,3,1.3),p(g,"#8f9aa6",me,pe+xe-12.5+5.5,j,1.5,11,1.5),p(x,"#c4a35a",me,pe+xe-.5,j,.12,1,.12)}}{const[T,H]=i.maksem.octagon,ie=e(T,H);let ge=Math.atan2(-i.maksem.axis[1],i.maksem.axis[0])+Math.PI/8;const ue=i.maksem.d?i.maksem.d/2/Math.cos(Math.PI/8):6.2,ae=ue/6.2;i.maksem.rot!=null&&(ge=i.maksem.rot),p(A,"#d8ccb3",T,ie+3.5,H,ue,8,ue,ge),p(A,"#ece4d2",T,ie+7.6,H,6.6*ae,.6,6.6*ae,ge),p(C,"#8f9aa6",T,ie+7.9,H,5.2*ae,2.6*ae,5.2*ae),p(g,"#c4a35a",T,ie+7.9+2.6*ae+.6,H,.25,1.2,.25)}{const T=i.marmara.ring,H=y(T)-.5,ie=H+85;l(T,H,ie,"#c9c4ba","#a9a49a")}{const[T,H]=i.anit,ie=e(T,H);p(x,"#cfc8bc",T,ie+.25,H,7.2,.5,7.2),p(x,"#d7d1c6",T,ie+.7,H,6,.45,6),p(x,"#d8d2c6",T,ie+1.15,H,5,.45,5),p(b,"#e8e2d6",T,ie+1.35+2.7,H,4.6,5.4,3.3,.2),p(b,"#ddd6c8",T,ie+6.55+.14,H,4.85,.28,3.55,.2),p(b,"#6b4a2a",T,ie+6.85+1.3,H,3.6,2.6,1.6,.2),p(b,"#6b4a2a",T-.15,ie+9.45+.75,H,1.1,1.5,1.1,.2),p(b,"#6b4a2a",T+1.15,ie+6.85+1.07,H+.15,.85,2.15,.85,.2),p(b,"#6b4a2a",T-1.2,ie+6.85+1.02,H-.1,.85,2.05,.85,.2)}(i.portals||[]).forEach(([T,H,ie,ge,ue],ae)=>{const $=ld(i)[ae],fe=e(T,H),se=Math.atan2(-ge,ie);l($,fe-1,fe+6.8,"#b9b6af","#a9a6a0");{const oe=-ge*ue/2,ve=ie*ue/2,me=[];for(let xe=0;xe<6;xe++){const Me=-aa+xe*aa/6,Ie=Me+aa/6+1.05*(xe===5?1:0),Te=[[Me,1],[Me,-1],[Ie,-1],[Ie,1]].map(([Qe,je])=>{const ze=T+ie*Qe+oe*je,ht=H+ge*Qe+ve*je;return[ze,e(ze,ht)+.2,ht]});me.push(...Te[0],...Te[2],...Te[1],...Te[0],...Te[3],...Te[2])}const j=new It;j.setAttribute("position",new pt(me,3)),j.computeVertexNormals();const pe=new dt(j,new ut({color:"#8d8f91",depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-4,side:Vt}));pe.renderOrder=-37,pe.receiveShadow=!0,pe.name="taksim_portal_apron",t.add(pe)}p(b,"#1d1d1f",T+ie*.95,fe+2.6,H+ge*.95,.12,5,ue-2.5,se),p(b,"#e2c33a",T+ie*.9,fe+5.6,H+ge*.9,.1,.4,ue-2.5,se)});const v=new It;v.setAttribute("position",new pt(a,3)),v.setAttribute("color",new pt(r,3)),v.computeVertexNormals(),h.forEach(T=>T.dispose());const M=new dt(v,new ut({vertexColors:!0,side:Vt}));M.castShadow=M.receiveShadow=!0,M.name="taksim17d_models",t.add(M);const N=(T,H,ie,ge,ue)=>{const ae=[];for(let se=0;se+3<T.length;se+=2){const oe=T[se],ve=T[se+1],me=T[se+2],j=T[se+3],pe=Math.hypot(me-oe,j-ve)||1,xe=Math.max(1,Math.ceil(pe/5)),Me=-(j-ve)/pe*H,Ie=(me-oe)/pe*H;for(let Te=0;Te<xe;Te++){const Qe=oe+(me-oe)*Te/xe,je=ve+(j-ve)*Te/xe,ze=oe+(me-oe)*(Te+1)/xe,ht=ve+(j-ve)*(Te+1)/xe,be=[[Qe+Me,je+Ie],[Qe-Me,je-Ie],[ze-Me,ht-Ie],[ze+Me,ht+Ie]].map(([xt,tt])=>[xt,e(xt,tt)+ie,tt]);ae.push(...be[0],...be[2],...be[1],...be[0],...be[3],...be[2])}}const $=new It;$.setAttribute("position",new pt(ae,3)),$.computeVertexNormals();const fe=new dt($,new ut({color:ge,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-4,side:Vt}));fe.renderOrder=ue,fe.receiveShadow=!0,t.add(fe)};for(const T of i.paths)N(T,1.3,.17,"#e2d6bd",-39);for(const T of i.trams)N(T,.85,.18,"#8c8780",-38);return t}const hd=new Set([1,2,3,4]),kE=i=>i<=4?2.6:i===5?1.2:i===6?1.6:i===9?3.2:0;let fd=null;async function QE(){if(rr().get("world")==="0")return null;try{const e=await fetch("./data/drive_world.json");if(!e.ok)return null;const t=await e.json();return Ze.__world={ways:t.ways.length,lamps:t.lamps.length,cars:t.cars.length},ev(t),Ze.__worldTest=tv,t}catch(i){return console.warn("drive world skipped",i),null}}const qa=i=>{let e=0,t=0;for(let s=0;s<i.length;s+=2)e+=i[s],t+=i[s+1];const n=i.length/2;return[e/n,t/n]},bl=i=>{const e=new Map;for(const t of i){const n=`${Math.round(t[0]/4)},${Math.round(t[1]/4)}`;(e.get(n)||e.set(n,[]).get(n)).push(t[0],t[1])}return(t,n)=>{for(let s=-1;s<=1;s++)for(let a=-1;a<=1;a++){const r=e.get(`${Math.round(t/4)+s},${Math.round(n/4)+a}`);if(r){for(let o=0;o<r.length;o+=2)if(Math.abs(r[o]-t)<.6&&Math.abs(r[o+1]-n)<.6)return!0}}return!1}};function OE(i,e,t){const n=bl(e.remove),s=i.buildings.length;i.buildings=i.buildings.filter(b=>{const x=b.p?.[0]?.[0];if(!x)return!0;const[g,C]=qa(x);return!n(g,C)});const a=new Map;for(const[b,x]of t||[]){const g=Math.floor(b/16)*100003+Math.floor(x/16);(a.get(g)||a.set(g,[]).get(g)).push(b,x)}const r=new Set,o=(b,x,g)=>{if(!a.size)return!1;for(let C=-1;C<=1;C++)for(let w=-1;w<=1;w++){const y=a.get((Math.floor(x/16)+C)*100003+Math.floor(g/16)+w);if(y){for(let S=0;S<y.length;S+=2)if(Math.hypot(y[S]-x,y[S+1]-g)<3||u(b,y[S],y[S+1]))return!0}}return!1},c=bl(e.solid||[]),l=32,h=new Map,f=(b,x)=>b*100003+x,u=(b,x,g)=>{let C=!1;for(let w=0,y=b.length-2;w<b.length;y=w,w+=2){const S=b[w],v=b[w+1],M=b[y],N=b[y+1];v>g!=N>g&&x<(M-S)*(g-v)/(N-v)+S&&(C=!C)}return C};i.buildings.forEach((b,x)=>{const g=b.p?.[0]?.[0];if(!g)return;let C=1e9,w=-1e9,y=1e9,S=-1e9;for(let v=0;v<g.length;v+=2)C=Math.min(C,g[v]),w=Math.max(w,g[v]),y=Math.min(y,g[v+1]),S=Math.max(S,g[v+1]);for(let v=Math.floor(C/l);v<=Math.floor(w/l);v++)for(let M=Math.floor(y/l);M<=Math.floor(S/l);M++)(h.get(f(v,M))||h.set(f(v,M),[]).get(f(v,M))).push(x)});const d=new Set,m=new Map;for(const b of e.ways){if(b[4]||!(b[0]<=4||b[0]===9))continue;const x=b[5],g=Math.max(0,b[1]/2-.3);for(let C=0;C+3<x.length;C+=2){const w=x[C],y=x[C+1],S=x[C+2]-w,v=x[C+3]-y,M=Math.hypot(S,v)||1,N=-v/M,T=S/M,H=Math.max(1,Math.ceil(M/3));for(let ie=0;ie<=H;ie++)for(const ge of[0,-g/2,g/2,-g,g]){const ue=w+S*ie/H+N*ge,ae=y+v*ie/H+T*ge,$=h.get(f(Math.floor(ue/l),Math.floor(ae/l)));if($)for(const fe of $){const se=i.buildings[fe];if(!se.h||se.h<2.2)continue;const oe=se.p[0][0];if(u(oe,ue,ae)){const[ve,me]=qa(oe);if(!c(ve,me)&&!(o(oe,ve,me)&&r.add(fe))){const j=m.get(fe)||m.set(fe,[]).get(fe);(!j.length||j[j.length-5]!==w||j[j.length-4]!==y)&&j.push(w,y,x[C+2],x[C+3],b[1]/2)}}}}}}let _=0,p=0;const A=b=>{let x=0;for(let g=0,C=b.length-2;g<b.length;C=g,g+=2)x+=b[C]*b[g+1]-b[g]*b[C+1];return Math.abs(x)/2};for(const[b,x]of m){const g=i.buildings[b];let C=g.p[0][0].slice();const w=A(C),[y,S]=qa(C);for(let T=0;T<x.length&&C.length>=6;T+=5){const H=x[T],ie=x[T+1],ge=x[T+2]-H,ue=x[T+3]-ie,ae=Math.hypot(ge,ue)||1,$=-ue/ae,fe=ge/ae,se=x[T+4]+.4,oe=(y-H)*$+(S-ie)*fe;if(Math.abs(oe)<.5){C=[];break}const ve=Math.sign(oe),me=(pe,xe)=>ve*((pe-H)*$+(xe-ie)*fe)-se,j=[];for(let pe=0,xe=C.length-2;pe<C.length;xe=pe,pe+=2){const Me=me(C[pe],C[pe+1]),Ie=me(C[xe],C[xe+1]);if(Me>=0!=Ie>=0){const Te=Ie/(Ie-Me);j.push(C[xe]+(C[pe]-C[xe])*Te,C[xe+1]+(C[pe+1]-C[xe+1])*Te)}Me>=0&&j.push(C[pe],C[pe+1])}C=j}const v=T=>{let H=0;for(let ie=0,ge=T.length-2;ie<T.length;ge=ie,ie+=2)H+=Math.hypot(T[ie]-T[ge],T[ie+1]-T[ge+1]);return H||1},M=C.length>=6?A(C):0,N=M>0&&M<.5*w&&2*M/v(C)<3.5;C.length>=6&&M>=Math.max(20,.3*w)&&!N?(g.p=[[C]],g.hip&&(g.clipHip=1),delete g.bd,delete g.in,_++):(d.add(b),N&&p++)}d.size&&(i.buildings=i.buildings.filter((b,x)=>!d.has(x))),Ze.__world={...Ze.__world||{},bldOnRoadFiltered:s-i.buildings.length,bldLaneFiltered:d.size,bldLaneClipped:_,bldLaneThin:p,protected:r.size}}function zE(i,e=24){const t=new Map,n=(s,a)=>s*100003+a;for(const s of i.ways){const a=s[5],r=s[1]/2;for(let o=0;o+3<a.length;o+=2){const c=a[o],l=a[o+1],h=a[o+2],f=a[o+3],u=Math.floor((Math.min(c,h)-r)/e),d=Math.floor((Math.max(c,h)+r)/e),m=Math.floor((Math.min(l,f)-r)/e),_=Math.floor((Math.max(l,f)+r)/e);for(let p=u;p<=d;p++)for(let A=m;A<=_;A++)(t.get(n(p,A))||t.set(n(p,A),[]).get(n(p,A))).push(c,l,h,f,r)}}return(s,a,r)=>{const o=t.get(n(Math.floor(s/e),Math.floor(a/e)));if(!o)return!1;for(let c=0;c<o.length;c+=5){const l=o[c],h=o[c+1],f=o[c+2]-l,u=o[c+3]-h,d=Math.max(0,Math.min(1,((s-l)*f+(a-h)*u)/(f*f+u*u||1)));if(Math.hypot(s-l-f*d,a-h-u*d)<o[c+4]+r)return!0}return!1}}function GE(i,e){const t=zE(e),n=i.filter(s=>!t(s[0],s[1],.5));return Ze.__world={...Ze.__world||{},treesOnRoadFiltered:i.length-n.length},n}function $r(i,e,t){const{x0:n,z0:s,nx:a,nz:r,step:o}=e,c=i.length;if(c<6)return;let l=1/0,h=-1/0;const f=[];for(let _=0;_<c;_+=2){const p=(_+2)%c;let A=i[_],b=i[_+1],x=i[p],g=i[p+1];l=Math.min(l,b,g),h=Math.max(h,b,g),b!==g&&(b>g&&([A,x]=[x,A],[b,g]=[g,b]),f.push([b,g,A,(x-A)/(g-b)]))}const u=Math.max(0,Math.floor((l-s)/o)),d=Math.min(r-1,Math.floor((h-s)/o)),m=[];for(let _=u;_<=d;_++){const p=s+(_+.5)*o;m.length=0;for(const A of f)p>=A[0]&&p<A[1]&&m.push(A[2]+A[3]*(p-A[0]));m.sort((A,b)=>A-b);for(let A=0;A+1<m.length;A+=2){const b=Math.max(0,Math.ceil((m[A]-n)/o-.5)),x=Math.min(a-1,Math.floor((m[A+1]-n)/o-.5));for(let g=b;g<=x;g++)t(_*a+g)}}}const HE=(i,e,t,n,s)=>{const a=t-i,r=n-e,o=Math.hypot(a,r)||1,c=-r/o*s,l=a/o*s,h=a/o*s*.3,f=r/o*s*.3;return[i+c-h,e+l-f,t+c+h,n+l+f,t-c+h,n-l+f,i-c-h,e-l-f]},VE=(i,e)=>{const[t,n]=qa(i),s=[];for(let a=0;a<i.length;a+=2){const r=i[a]-t,o=i[a+1]-n,c=Math.hypot(r,o)||1,l=Math.max(.2,(c-e)/c);s.push(t+r*l,n+o*l)}return s};function WE(i,e){fd=i;const{road:t,block:n}=i;for(let o=0;o<n.length;o++)n[o]===1&&(n[o]=0);const s=bl(e.solid),a=[];for(const o of i.buildings){if(!o.h||o.h<2.2||!o.p)continue;for(const l of o.p){const h=l?.[0];!h||h.length<6||$r(h,i,f=>{n[f]=1})}const c=o.p[0]?.[0];if(c){const[l,h]=qa(c);s(l,h)&&a.push(c)}}let r=0;for(const o of e.ways){const c=o[5],l=Math.max(1.3,o[1]/2-.6);for(let h=0;h+3<c.length;h+=2)$r(HE(c[h],c[h+1],c[h+2],c[h+3],l),i,f=>{n[f]===1&&(n[f]=0,r++),t[f]||(t[f]=1)})}for(const o of a)$r(VE(o,1.5),i,c=>{n[c]=1,t[c]=0});Ze.__world={...Ze.__world||{},maskOpenedCells:r,solidKept:a.length}}function jE(i,e){let t=0;const n=e.map(s=>{const[a,,r,o,,c,l]=s;return{x:a,z:r,hw:o/2,hd:c/2,ux:Math.cos(l),uz:-Math.sin(l)}});for(const s of i.ways){const a=s[5],r=s[1]/2+.6;if(a.length<4)continue;let o=!1;for(const p of n)if(Math.abs(p.x-a[0])<3e3&&Math.abs(p.z-a[1])<3e3){o=!0;break}if(!o)continue;const c=[a[0],a[1]];for(let p=0;p+3<a.length;p+=2){const A=Math.hypot(a[p+2]-a[p],a[p+3]-a[p+1]),b=Math.max(1,Math.ceil(A/4));for(let x=1;x<=b;x++)c.push(a[p]+(a[p+2]-a[p])*x/b,a[p+1]+(a[p+3]-a[p+1])*x/b)}const l=c.length/2,h=new Float64Array(l),f=new Float64Array(l);let u=!1;for(let p=1;p<l-1;p++){const A=c[2*p],b=c[2*p+1],x=c[2*p+2]-c[2*p-2],g=c[2*p+3]-c[2*p-1],C=Math.hypot(x,g)||1;for(const w of n){const y=A-w.x,S=b-w.z;if(Math.abs(y)>w.hw+20||Math.abs(S)>w.hw+20)continue;const v=y*w.ux+S*w.uz,M=-y*w.uz+S*w.ux;if(Math.abs(v)>w.hw+2||Math.abs((x*w.ux+g*w.uz)/C)<.906)continue;const N=w.hd+r-Math.abs(M);if(N<=0||N>5)continue;const T=M>=0?1:-1,H=-w.uz*T*N,ie=w.ux*T*N;Math.hypot(H,ie)>Math.hypot(h[p],f[p])&&(h[p]=H,f[p]=ie,u=!0)}}if(!u)continue;const d=p=>{const A=h.slice(),b=f.slice();for(let x=0;x<l;x++){let g=0,C=0,w=0;for(let y=Math.max(0,x-p);y<=Math.min(l-1,x+p);y++){const S=Math.hypot(A[y],b[y]);S>w&&(w=S,g=A[y],C=b[y])}h[x]=g,f[x]=C}},m=p=>{const A=h.slice(),b=f.slice();for(let x=0;x<l;x++){let g=0,C=0,w=0;for(let y=x-p;y<=x+p;y++){const S=Math.max(0,Math.min(l-1,y));g+=A[S],C+=b[S],w++}h[x]=g/w,f[x]=C/w}};d(6),m(5),m(5);for(let p=0;p<l;p++){const A=Math.min(p,l-1-p)*4,b=Math.min(1,A/24),x=b*b*(3-2*b);c[2*p]+=h[p]*x,c[2*p+1]+=f[p]*x,x>0&&(h[p]||f[p])&&t++}s[5]=c;let _=99;for(let p=0;p<l;p++){const A=c[2*p],b=c[2*p+1];for(const x of n){const g=A-x.x,C=b-x.z;if(Math.abs(g)>x.hw+20||Math.abs(C)>x.hw+20)continue;const w=g*x.ux+C*x.uz,y=-g*x.uz+C*x.ux;if(Math.abs(w)>x.hw)continue;const S=Math.abs(y)-x.hd-s[1]/2;S>-1&&S<_&&(_=S)}}s.swMax=Math.max(0,_-.2)}return t}function qE(i,e){const t=[];for(const n of e){const[s,,a,r,,o,c]=n,l=Math.cos(c),h=-Math.sin(c),f=r/2,u=o/2;let d=!1,m=!1;if(n[7]!=="scarp"){for(const _ of i.ways){if(m)break;const p=_[5],A=_[1]/2+.4;for(let b=0;b+3<p.length&&!m;b+=2){const x=p[b],g=p[b+1],C=p[b+2],w=p[b+3];if(Math.max(x,C)<s-f-20||Math.min(x,C)>s+f+20||Math.max(g,w)<a-f-20||Math.min(g,w)>a+f+20)continue;const y=Math.hypot(C-x,w-g)||1;if(Math.abs(((C-x)*l+(w-g)*h)/y)<.906)continue;const S=Math.max(1,Math.ceil(y/2));for(let v=0;v<=S&&!m;v++){const M=x+(C-x)*v/S-s,N=g+(w-g)*v/S-a,T=M*l+N*h,H=-M*h+N*l;Math.abs(T)<=f&&Math.abs(H)<u?m=!0:Math.abs(T)<=f&&Math.abs(H)<u+A&&(d=!0)}}}if(d&&!m){const _=-h,p=l;t.push([s+l*f+_*u,a+h*f+p*u,s-l*f+_*u,a-h*f+p*u,s-l*f-_*u,a-h*f-p*u,s+l*f-_*u,a+h*f-p*u])}}}return t}function jr(i,e){for(const t of e)$r(t,i,n=>{i.block[n]=1,i.road[n]=0})}const YE=`attribute vec4 rd;
attribute float jf;
varying vec4 vRd;
varying float vJf;
`,XE=`varying vec4 vRd;
varying float vJf;
float wm_line(float x, float c, float w) { float d = abs(x - c); float a = fwidth(x) * 0.8 + 0.01; return 1.0 - smoothstep(w * 0.5 - a, w * 0.5 + a, d); }
float wm_dash(float v, float on, float period) { float m = mod(v, period); float a = fwidth(v) + 0.01; return smoothstep(0.0, a, m) * (1.0 - smoothstep(on - a, on, m)); }
`,KE=`
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
    col = vec3(0.069, 0.080, 0.098) + 0.007 * sin(v * 0.11 + u * 0.7); // wm17: albedo pre-compensated for the warm sun (lit result read brown at Karaköy) -> neutral dark grey // wm16: was 0.215 — under the map's warm 2.x sun it read as light brown (Karaköy); darker albedo -> dark asphalt
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
`;function vc(i){const e=new ut({color:"#ffffff",depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2-i,polygonOffsetUnits:-4-i*2});return e.onBeforeCompile=t=>{t.vertexShader=YE+t.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
 vRd = rd; vJf = jf;`),t.fragmentShader=t.fragmentShader.replace("#include <common>",`#include <common>
`+XE).replace("#include <color_fragment>",`#include <color_fragment>
`+KE)},e.customProgramCacheKey=()=>"drive3-road",e}class Mc{pos=[];rd=[];jf=[];idx=[];n=0;add(e,t,n,s,a,r){const o=t.length/2;if(o<2)return;let c=0;for(let l=0;l<o;l++){const h=t[l*2],f=t[l*2+1],u=Math.max(0,l-1),d=Math.min(o-1,l+1);let m=t[d*2]-t[u*2],_=t[d*2+1]-t[u*2+1];const p=Math.hypot(m,_)||1;m/=p,_/=p;let A=1;if(l>0&&l<o-1){const C=h-t[u*2],w=f-t[u*2+1],y=Math.hypot(C,w)||1,S=C/y*m+w/y*_;A=Math.min(1.8,1/Math.max(.55,S))}const b=-_*n*A,x=m*n*A;l>0&&(c+=Math.hypot(h-t[l*2-2],f-t[l*2-1]));const g=r?r[l]:0;for(const C of[-1,1]){const w=h+b*C,y=f+x*C;this.pos.push(w,e(w,y)+a,y),this.rd.push(C*n,c,n,s),this.jf.push(g)}if(l>0){const C=this.n+(l-1)*2;this.idx.push(C,C+1,C+2,C+1,C+3,C+2)}}this.n+=o*2}mesh(e,t){if(!this.n)return null;const n=new It;n.setAttribute("position",new pt(this.pos,3));const s=new Float32Array(this.n*3);for(let r=0;r<this.n;r++)s[r*3+1]=1;n.setAttribute("normal",new Xt(s,3)),n.setAttribute("rd",new pt(this.rd,4)),n.setAttribute("jf",new pt(this.jf,1)),n.setIndex(this.n>65e3?new Ul(this.idx,1):new Pl(this.idx,1)),n.computeBoundingSphere();const a=new dt(n,e);return a.renderOrder=t,a.receiveShadow=!0,a.matrixAutoUpdate=!1,a.updateMatrix(),a}}function zf(i,e,t,n){const s=[],a=[],r=e.length/2;for(let c=0;c<r-1;c++){const l=e[c*2],h=e[c*2+1],f=e[c*2+2],u=e[c*2+3],d=Math.hypot(f-l,u-h);let m=Math.max(1,Math.ceil(d/14));d>6&&Math.abs(i((l+f)/2,(h+u)/2)-(i(l,h)+i(f,u))/2)>.15&&(m=Math.max(m,Math.ceil(d/5))),n&&(m=Math.max(m,Math.ceil(d/9)));for(let _=0;_<m;_++){const p=_/m;s.push(l+(f-l)*p,h+(u-h)*p),a.push(c+p)}}s.push(e[e.length-2],e[e.length-1]),a.push(r-1);let o=null;if(n){const c=s.length/2,l=new Float64Array(c);for(let f=1;f<c;f++)l[f]=l[f-1]+Math.hypot(s[f*2]-s[f*2-2],s[f*2+1]-s[f*2-1]);const h=[];for(const f of t){let u=0;for(let d=0;d<c;d++)if(Math.abs(a[d]-f)<1e-6){u=d;break}h.push(l[u])}o=[];for(let f=0;f<c;f++){let u=1e9;for(const m of h)u=Math.min(u,Math.abs(l[f]-m));const d=Math.max(0,Math.min(1,(u-7)/6));o.push(d*d*(3-2*d))}}return{pts:s,fade:o}}function JE(){const i=[],e=(n,s)=>{const a=new Ne(s),r=n.attributes.position.count,o=new Float32Array(r*3);for(let c=0;c<r;c++)o[c*3]=a.r,o[c*3+1]=a.g,o[c*3+2]=a.b;return n.setAttribute("color",new Xt(o,3)),n.toNonIndexed()};i.push(e(new Nn(.08,.12,6.6,5,1,!0).translate(0,3.3,0),"#46524f")),i.push(e(new Gt(.1,.1,1.5).translate(0,6.5,.7),"#46524f")),i.push(e(new Gt(.34,.16,.62).translate(0,6.42,1.4),"#f1ecdf")),i.push(e(new Nn(.2,.24,.5,5).translate(0,.25,0),"#3a4442"));const t=ma(i.map(n=>(n.deleteAttribute("uv"),n)));return t.computeVertexNormals(),t}function ZE(){const i=[],e=(n,s)=>{const a=n.attributes.position.count,r=new Float32Array(a*3);for(let o=0;o<a;o++)r[o*3]=s[0],r[o*3+1]=s[1],r[o*3+2]=s[2];return n.setAttribute("color",new Xt(r,3)),n.deleteAttribute("uv"),n.toNonIndexed()};i.push(e(new Gt(1.7,.62,4.1).translate(0,.62,0),[1,1,1])),i.push(e(new Gt(1.48,.5,2).translate(0,1.18,-.15),[.78,.86,.92])),i.push(e(new Gt(1.76,.3,3.4).translate(0,.22,0),[.16,.16,.16]));const t=ma(i);return t.computeVertexNormals(),t}const Gf=["#f2f0ea","#c8463a","#33507a","#9aa0a6","#e3c04a","#2f3133","#6d8f5a"].map(i=>new Ne(i));function $E(i){const{scene:e,camera:t,H:n,W:s,narrow:a}=i,r=performance.now(),o=500,c=new Map,l=(ae,$)=>{const fe=Math.floor(ae/o),se=Math.floor($/o),oe=`${fe},${se}`;let ve=c.get(oe);return ve||(ve={side:new Mc,asph:new Mc,top:new Mc,lamps:[],cars:[],objs:[],cx:(fe+.5)*o,cz:(se+.5)*o},c.set(oe,ve)),ve},h=.3,f=.34,u=.38;for(const ae of s.ways){const[$,fe,se,oe,ve,me,j]=ae;if(ve)continue;const pe=Math.floor(me.length/4)*2,xe=l(me[pe],me[pe+1]),Me=hd.has($),{pts:Ie,fade:Te}=zf(n,me,j,Me),Qe=fe/2,je=Math.min(kE($),ae.swMax??99);je>0&&xe.side.add(n,Ie,Qe+je,0,h,null);const ze=$===9?3:Me?2:1;xe.asph.add(n,Ie,Qe,ze*16+Math.min(7,se)*2+oe,f,Te)}for(const ae of s.trams){const $=ae.length/2;if($<2)continue;let fe=0;const se=oe=>{const ve=ae.slice(fe*2,oe*2+2);if(ve.length>=4){const me=Math.floor(ve.length/4)*2;l(ve[me],ve[me+1]).top.add(n,zf(n,ve,[],!1).pts,1.6,64,u,null)}fe=oe};for(let oe=1;oe<$;oe++)(oe-fe>=40||oe===$-1)&&se(oe)}for(const ae of s.lamps)l(ae[0],ae[1]).lamps.push(ae);for(const ae of s.cars)l(ae[0],ae[1]).cars.push(ae);const d=vc(0),m=vc(1),_=vc(2),p=JE(),A=ZE(),b=new ut({vertexColors:!0}),x=new ut({vertexColors:!0}),g=new ot,C=new qt,w=new ne,y=new ne(1,1,1),S=new ne(0,1,0);let v=0,M=0;const N=new Ln;N.name="drive3-world",e.add(N);for(const ae of c.values()){for(const[$,fe,se]of[[ae.side,d,-30],[ae.asph,m,-29],[ae.top,_,-28]]){const oe=$.mesh(fe,se);oe&&(ae.objs.push(oe),v+=$.idx.length/3)}if(ae.lamps.length){const $=new jt(p,b,ae.lamps.length);ae.lamps.forEach((fe,se)=>{w.set(fe[0],n(fe[0],fe[1])+h,fe[1]),C.setFromAxisAngle(S,fe[2]),$.setMatrixAt(se,g.compose(w,C,y))}),$.castShadow=!a,$.computeBoundingSphere(),ae.objs.push($),v+=p.attributes.position.count/3*ae.lamps.length}if(ae.cars.length){const $=new jt(A,x,ae.cars.length);ae.cars.forEach((fe,se)=>{w.set(fe[0],n(fe[0],fe[1])+.32,fe[1]),C.setFromAxisAngle(S,fe[2]),$.setMatrixAt(se,g.compose(w,C,y)),$.setColorAt(se,Gf[fe[3]%Gf.length])}),$.castShadow=!a,$.receiveShadow=!0,$.computeBoundingSphere(),ae.objs.push($),v+=A.attributes.position.count/3*ae.cars.length}for(const $ of ae.objs)$.visible=!1,N.add($)}const T=e.getObjectByName("drive-road");T&&(T.visible=!1);const H=a?620:820;let ie=0,ge=0;const ue=()=>{const ae=t.position.x,$=t.position.z;ie=0,ge=0;for(const se of c.values()){const ve=Math.hypot(Math.max(0,Math.abs(ae-se.cx)-o/2),Math.max(0,Math.abs($-se.cz)-o/2))<H;for(const me of se.objs)me.visible=ve,ve&&ge++;if(ve)for(const me of se.objs)ie+=me instanceof jt?me.geometry.attributes.position.count/3*me.count:me.geometry.index.count/3}const fe=e.getObjectByName("drive-road");fe&&(fe.visible=!1),Ze.__world={...Ze.__world||{},visTris:Math.round(ie),visDraws:ge}};ue(),setInterval(ue,400),M=[...c.values()].reduce((ae,$)=>ae+$.objs.length,0),Ze.__world={...Ze.__world||{},chunks:c.size,totalTris:Math.round(v),totalDrawObjs:M,buildMs:Math.round(performance.now()-r)}}let eo=null;function ev(i){eo=i}function tv(i,e="road"){const t=fd,n=Ze.__drive;if(!t||!n||!eo)return{error:"no grid"};const{nx:s,nz:a,x0:r,z0:o,step:c,road:l}=t,h=s*a,f=new Uint8Array(h);for(let w=0;w<a;w++)for(let y=0;y<s;y++){const S=w*s+y;e==="road"&&!l[S]||n.cell(r+(y+.5)*c,o+(w+.5)*c)&&(f[S]=1)}const u=(w,y)=>{const S=Math.floor((w-r)/c),v=Math.floor((y-o)/c);return S<0||v<0||S>=s||v>=a?-1:v*s+S},d=new Int32Array(h),m=new Int32Array(h),_=w=>{d.fill(-1);let y=0,S=0;for(m[S++]=w,d[w]=0;y<S;){const v=m[y++],M=d[v]+1,N=v%s;N>0&&f[v-1]&&d[v-1]<0&&(d[v-1]=M,m[S++]=v-1),N<s-1&&f[v+1]&&d[v+1]<0&&(d[v+1]=M,m[S++]=v+1),v>=s&&f[v-s]&&d[v-s]<0&&(d[v-s]=M,m[S++]=v-s),v+s<h&&f[v+s]&&d[v+s]<0&&(d[v+s]=M,m[S++]=v+s)}return S},p=i.map(w=>({...w,k:u(w.x,w.z)})),A={};for(const w of p)A[w.id]=w.k>=0&&!!f[w.k];const b={};let x=0,g=[];p.forEach((w,y)=>{if(!A[w.id])return;const S=_(w.k);if(y===0){x=S;const v=new Map;eo.ways.forEach((M,N)=>{if(!(hd.has(M[0])||M[0]===5||M[0]===9))return;const T=M[5];for(let H=0;H+3<T.length;H+=2){const ie=Math.hypot(T[H+2]-T[H],T[H+3]-T[H+1]);for(let ge=0;ge<ie;ge+=10){const ue=ge/ie,ae=T[H]+(T[H+2]-T[H])*ue,$=T[H+1]+(T[H+3]-T[H+1])*ue,fe=u(ae,$);if(fe<0||d[fe]>=0||fe>0&&d[fe-1]>=0||d[fe+1]>=0||fe>=s&&d[fe-s]>=0||fe+s<h&&d[fe+s]>=0)continue;const se=eo.names?.[String(N)]||`code${M[0]}`,oe=v.get(se)||v.set(se,{n:0,at:[]}).get(se);oe.n++,oe.at.length<8&&oe.at.push(Math.round(ae),Math.round($))}}}),g=[...v.entries()].map(([M,N])=>({name:M,n:N.n,at:N.at})).sort((M,N)=>N.n-M.n)}for(const v of p)v!==w&&v.k>=0&&(b[`${w.id}->${v.id}`]=d[v.k]>=0?Math.round(d[v.k]*c):null)});let C=0;for(let w=0;w<h;w++)C+=f[w];return{mode:e,startOk:A,pairs:b,openCells:C,reachFromFirst:x,gapSamples10m:g.reduce((w,y)=>w+y.n,0),gaps:g.slice(0,30)}}function nv(i,e,t,n,s){const a=[],r=(f,u,d,m,_,p)=>{let A=-1e9;for(let b=-2;b<=2;b++)A=Math.max(A,s(f+d*_*b/2,u+m*_*b/2));return A+p};for(const f of i){const[u,d,m,_,p,A,b]=f,x=Math.cos(b),g=-Math.sin(b),C=Math.max(1,Math.ceil(_/20));for(let w=0;w<C;w++){const y=((w+.5)/C-.5)*_,S=u+x*y,v=m+g*y,M=_/C/2+.15;a.push({x:S,z:v,ux:x,uz:g,hw:M,hd:A/2,r:0,top:r(S,v,x,g,M,d+p)})}}for(const f of e){const u=f.p;if(u.length<6)continue;let d=u[2]-u[0],m=u[3]-u[1];const _=Math.hypot(d,m)||1;d/=_,m/=_;let p=1e9,A=-1e9,b=1e9,x=-1e9;for(let v=0;v<u.length;v+=2){const M=u[v]*d+u[v+1]*m,N=-u[v]*m+u[v+1]*d;p=Math.min(p,M),A=Math.max(A,M),b=Math.min(b,N),x=Math.max(x,N)}const g=(p+A)/2,C=(b+x)/2,w=g*d-C*m,y=g*m+C*d,S=(A-p)/2;a.push({x:w,z:y,ux:d,uz:m,hw:S,hd:(x-b)/2,r:0,top:r(w,y,d,m,S,f.h)})}for(const[f,u,d,m]of t)a.push({x:f,z:u,ux:1,uz:0,hw:0,hd:0,r:d*1.06,top:s(f,u)+m});for(const[f,u,d,m,_,p]of n){const A=Math.cos(p),b=-Math.sin(p);a.push({x:f,z:u,ux:A,uz:b,hw:d/2,hd:m/2,r:0,top:s(f,u)+_})}const o=16,c=new Map,l=(f,u)=>f*100003+u;return a.forEach((f,u)=>{const d=f.r||Math.hypot(f.hw,f.hd);for(let m=Math.floor((f.x-d)/o);m<=Math.floor((f.x+d)/o);m++)for(let _=Math.floor((f.z-d)/o);_<=Math.floor((f.z+d)/o);_++)(c.get(l(m,_))||c.set(l(m,_),[]).get(l(m,_))).push(u)}),{solids:a,near:(f,u,d)=>{const m=new Set;for(let _=Math.floor((f-d)/o);_<=Math.floor((f+d)/o);_++)for(let p=Math.floor((u-d)/o);p<=Math.floor((u+d)/o);p++)for(const A of c.get(l(_,p))||[])m.add(A);return[...m].map(_=>a[_])},count:a.length}}function yc(i,e,t,n,s,a=1.95,r=.9){const o=Math.sin(n),c=Math.cos(n),l=Math.cos(n),h=-Math.sin(n);let f=null;for(const u of i.near(e,t,3)){if(s>u.top+.3)continue;let d=null;if(u.r>0){const m=u.x-e,_=u.z-t,p=Math.max(-a,Math.min(a,m*o+_*c)),A=Math.max(-r,Math.min(r,m*l+_*h)),b=e+o*p+l*A,x=t+c*p+h*A,g=b-u.x,C=x-u.z,w=Math.hypot(g,C);if(w<u.r)if(w>1e-4)d={nx:g/w,nz:C/w,d:u.r-w};else{const y=Math.hypot(e-u.x,t-u.z)||1;d={nx:(e-u.x)/y,nz:(t-u.z)/y,d:u.r+r}}}else{const m=[[u.ux,u.uz],[-u.uz,u.ux],[o,c],[l,h]];let _=1e9,p=[0,0];const A=e-u.x,b=t-u.z;let x=!1;for(const[g,C]of m){const w=a*Math.abs(o*g+c*C)+r*Math.abs(l*g+h*C),y=u.hw*Math.abs(u.ux*g+u.uz*C)+u.hd*Math.abs(-u.uz*g+u.ux*C),S=A*g+b*C,v=w+y-Math.abs(S);if(v<=0){x=!0;break}v<_&&(_=v,p=S>=0?[g,C]:[-g,-C])}x||(d={nx:p[0],nz:p[1],d:_})}d&&(!f||d.d>f.d)&&(f=d)}return f}function wc(i,e,t,n,s=.4){for(const a of i.near(e,n,1)){if(t>a.top+s)continue;if(a.r>0){if(Math.hypot(e-a.x,n-a.z)<a.r+s)return!0;continue}const r=e-a.x,o=n-a.z,c=r*a.ux+o*a.uz,l=-r*a.uz+o*a.ux;if(Math.abs(c)<a.hw+s&&Math.abs(l)<a.hd+s)return!0}return!1}const iv=28.979,ud=41.0235,sv=Math.cos(ud*Math.PI/180)*111320,av=110574,rv=(i,e)=>[(i-iv)*sv,-(e-ud)*av],ms=[{id:"eminonu",name:"Eminönü",x:-592.4,z:572.3,yaw:Math.atan2(19,-35.2)},{id:"karakoy",name:"Karaköy",x:-345,z:114},{id:"sultanahmet",name:"Sultanahmet",x:-205,z:1830},{id:"taksim",name:"Taksim",x:539,z:-1605,yaw:Math.atan2(-90,44)},{id:"besiktas",name:"Beşiktaş",x:2410.3,z:-2073.5,yaw:1.755}],Ki=[{id:"yenicami",name:"Yeni Cami",x:-573.6,z:733.4,r:75,info:"1597'de başlandı, 1665'te Turhan Sultan döneminde tamamlandı."},{id:"misir",name:"Mısır Çarşısı",x:-653.7,z:695.8,r:60,info:"Yeni Cami külliyesinin parçası olarak 1660'larda yapıldı; baharatçılarıyla ünlü."},{id:"rustempasa",name:"Rüstem Paşa Camii",x:-862.8,z:645,r:60,info:"Mimar Sinan'ın eseri; içi İznik çinileriyle ünlü."},{id:"suleymaniye",name:"Süleymaniye Camii",x:-1261.5,z:817,r:95,info:"Mimar Sinan, Kanuni Sultan Süleyman için yaptı (1550–1557)."},{id:"kapalicarsi",name:"Kapalıçarşı",x:-900,z:1390,r:130,info:"Çekirdeği Fatih döneminden; dünyanın en eski kapalı çarşılarından."},{id:"ayasofya",name:"Ayasofya",x:81.7,z:1654.5,r:95,info:"537'de Bizans İmparatoru Justinianus döneminde tamamlandı."},{id:"sultanahmet",name:"Sultanahmet Camii",x:-190.4,z:2006.7,r:95,info:"1609–1616'da yapıldı; altı minaresiyle ünlü, 'Mavi Cami' de denir."},{id:"dikilitas",name:"Dikilitaş (Hipodrom)",x:-302,z:1943,r:55,info:"Mısır'dan getirildi; 390'da Theodosius döneminde Hipodrom'a dikildi."},{id:"kucukayasofya",name:"Küçük Ayasofya",x:-570.5,z:2295,r:70,info:"6. yüzyılda Justinianus döneminde kilise olarak yapıldı."},{id:"topkapi",name:"Topkapı Sarayı",x:425.3,z:1181.8,r:190,info:"Yüzyıllarca Osmanlı padişahlarının sarayıydı; 1924'ten beri müze."},{id:"galatakopru",name:"Galata Köprüsü",x:-520,z:380,r:60,info:"Haliç üzerinde Eminönü ile Karaköy'ü bağlar; alt katında lokantalar var."},{id:"galata",name:"Galata Kulesi",x:-402,z:-236,r:60,info:"Cenevizliler 1348'de yaptı; yüksekliği yaklaşık 63 m."},{id:"nusretiye",name:"Nusretiye Camii",x:350.5,z:-429.4,r:65,info:"Tophane'de; 1826'da II. Mahmud döneminde tamamlandı."},{id:"taksim",name:"Taksim Cumhuriyet Anıtı",x:503.9,z:-1481.7,r:60,info:"1928'de açıldı; İtalyan heykeltıraş Pietro Canonica'nın eseri."},{id:"saatkulesi",name:"Dolmabahçe Saat Kulesi",x:1458.2,z:-1565.5,r:60,info:"Sultan II. Abdülhamid döneminde, 1890'larda yapıldı."},{id:"stadyum",name:"Beşiktaş Stadyumu",x:1294.3,z:-1762.9,r:140,info:"Beşiktaş JK'nın stadı; bugünkü yapı 2016'da açıldı."},{id:"barbaros",name:"Barbaros Meydanı",x:2338,z:-2037,r:80,info:"Barbaros Hayrettin Paşa türbesi ve heykeli; Beşiktaş iskelesinin yanında."}],ov=[["Eminönü",28.971,41.017],["Karaköy",28.977,41.0225],["Galata",28.9741,41.0256],["Tophane",28.983,41.027],["Kabataş",28.9925,41.034],["Taksim",28.9858,41.0372],["Cihangir",28.983,41.0315],["Beyoğlu",28.9775,41.0335],["Şişhane",28.9735,41.028],["Kasımpaşa",28.965,41.035],["Dolmabahçe",29,41.0392],["Beşiktaş",29.0077,41.0422],["Yıldız",29.01,41.0494],["Ihlamur",29.0012,41.0507],["Sirkeci",28.977,41.0145],["Sultanahmet",28.9768,41.0054],["Gülhane",28.981,41.0125],["Cankurtaran",28.981,41.004],["Kumkapı",28.965,41.003],["Beyazıt",28.964,41.0105],["Kapalıçarşı",28.968,41.0107],["Süleymaniye",28.964,41.016],["Unkapanı",28.958,41.022],["Vefa",28.958,41.015],["Laleli",28.956,41.009],["Aksaray",28.948,41.008],["Fatih",28.9495,41.0195],["Zeyrek",28.955,41.02],["Çemberlitaş",28.9715,41.0085],["Tahtakale",28.968,41.016],["Fener",28.95,41.029],["Balat",28.948,41.03],["Edirnekapı",28.935,41.03],["Karagümrük",28.94,41.025],["Topkapı",28.922,41.017],["Samatya",28.935,41.001],["Cerrahpaşa",28.94,41.004],["Yedikule",28.923,40.994],["Kocamustafapaşa",28.93,41.003],["Şehzadebaşı",28.956,41.0135]].map(([i,e,t])=>{const[n,s]=rv(e,t);return[i,n,s]});function cv(i,e){let t="",n=81e4;for(const[s,a,r]of ov){const o=(a-i)**2+(r-e)**2;o<n&&(n=o,t=s)}return t}const lv="modulepreload",hv=function(i,e){return new URL(i,e).href},Hf={},fv=function(e,t,n){let s=Promise.resolve();if(t&&t.length>0){let l=function(h){return Promise.all(h.map(f=>Promise.resolve(f).then(u=>({status:"fulfilled",value:u}),u=>({status:"rejected",reason:u}))))};const r=document.getElementsByTagName("link"),o=document.querySelector("meta[property=csp-nonce]"),c=o?.nonce||o?.getAttribute("nonce");s=l(t.map(h=>{if(h=hv(h,n),h in Hf)return;Hf[h]=!0;const f=h.endsWith(".css"),u=f?'[rel="stylesheet"]':"";if(n)for(let m=r.length-1;m>=0;m--){const _=r[m];if(_.href===h&&(!f||_.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${h}"]${u}`))return;const d=document.createElement("link");if(d.rel=f?"stylesheet":lv,f||(d.as="script"),d.crossOrigin="",d.href=h,c&&d.setAttribute("nonce",c),document.head.appendChild(d),f)return new Promise((m,_)=>{d.addEventListener("load",m),d.addEventListener("error",()=>_(new Error(`Unable to preload CSS for ${h}`)))})}))}function a(r){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=r,window.dispatchEvent(o),!o.defaultPrevented)throw r}return s.then(r=>{for(const o of r||[])o.status==="rejected"&&a(o.reason);return e().catch(a)})},ss=50;let ra=[];const dd=new Map,Ad=new Map;let Jl=!1;const xl=(i,e)=>(i+2e3)*4e3+(e+2e3),pd=(i,e)=>{const t=Math.floor((Math.min(e.ax,e.bx)-20)/ss),n=Math.floor((Math.max(e.ax,e.bx)+20)/ss),s=Math.floor((Math.min(e.az,e.bz)-20)/ss),a=Math.floor((Math.max(e.az,e.bz)+20)/ss);for(let r=t;r<=n;r++)for(let o=s;o<=a;o++){const c=xl(r,o);let l=i.get(c);l||i.set(c,l=[]),l.push(e)}};async function uv(i){try{const e=await(await fetch(i)).json(),t=e.names||{};e.ways.forEach((n,s)=>{const a=t[String(s)],r=n?.[5];if(!a||!r)return;let o=ra.indexOf(a);o<0&&(ra.push(a),o=ra.length-1);for(let c=0;c+3<r.length;c+=2)pd(Ad,{n:o,ax:r[c],az:r[c+1],bx:r[c+2],bz:r[c+3]})}),Jl=!0}catch{}}async function dv(){try{const i=await fv(()=>import("./streets-CAVVug3n.js"),[],import.meta.url),e=i.default||i,t=ra.length;for(const n of e.names)ra.push(n);for(const n of e.lines){const s=n[0]+t;for(let a=1;a+3<n.length;a+=2)pd(dd,{n:s,ax:n[a],az:n[a+1],bx:n[a+2],bz:n[a+3]})}Jl=!0}catch(i){console.warn("street names skipped",i)}}const Vf=(i,e,t,n)=>{let s=i.get(xl(Math.floor(e/ss),Math.floor(t/ss)))||[];if(n>20){const o=Math.floor(e/ss),c=Math.floor(t/ss);s=s.slice();for(let l=-1;l<=1;l++)for(let h=-1;h<=1;h++)if(l||h)for(const f of i.get(xl(o+l,c+h))||[])s.push(f)}if(!s.length)return null;let a=null,r=n*n;for(const o of s){const c=o.bx-o.ax,l=o.bz-o.az,h=c*c+l*l||1e-9,f=Math.max(0,Math.min(1,((e-o.ax)*c+(t-o.az)*l)/h)),u=o.ax+c*f-e,d=o.az+l*f-t,m=u*u+d*d;m<r&&(r=m,a=o)}return a?{name:ra[a.n],d:Math.sqrt(r)}:null};function Cc(i,e,t=22){if(!Jl)return null;const n=Vf(Ad,i,e,Math.min(t,16));return n||Vf(dd,i,e,t)}const St=(i,e,t="",n=document.body)=>{const s=document.createElement(i);return e&&(s.className=e),t&&(s.innerHTML=t),n.appendChild(s),s};function Av(i){for(const V of["hud","touch","badge"])document.getElementById(V)?.remove();const e=rr(),t=matchMedia("(pointer: coarse)").matches||i.narrow||e.get("touch")==="1";document.body.classList.add("g-on"),t&&document.body.classList.add("g-touchui");const n=St("div","g-hud"),s=St("div","g-info","",n),a=St("div","g-street","İstanbul",s),r=St("div","g-district","yükseklikler yaklaşık",s),o=St("div","g-speed","<b>0</b><span>km/sa</span><i></i>",s),c=o.querySelector("b"),l=o.querySelector("i"),h=St("div","g-goal","",s);h.hidden=!0;const f=St("div","g-side","",n),u=i.narrow?112:150,d=St("canvas","g-mini","",f),m=Math.min(2,window.devicePixelRatio||1);d.width=d.height=Math.round(u*m),d.style.width=d.style.height=`${u}px`;const _=St("div","g-btns","",f),p=St("button","g-btn","☰ Menü",_),A=St("button","g-btn","↺ Yola dön",_),b=St("button","g-btn","★ Tur",_);p.id="g-menu-btn",A.id="g-reset",b.id="g-tour-btn";const x=(V,le)=>V.addEventListener("pointerdown",Z=>{Z.preventDefault(),Z.stopPropagation(),le()});x(p,()=>ft()),x(A,()=>i.onReset()),x(b,()=>i.onTour());const g=St("div","g-flash","",document.body),C=St("div","g-card","",document.body);C.hidden=!0;const w=St("div","g-toast","",document.body);w.hidden=!0;const y=St("div","g-help",t?"Sol: parmağını sağa-sola kaydır · Sağ: <b>Gaz</b>, <b>Fren/Geri</b>, <b>El freni</b> (drift)":"<b>W/↑</b> gaz · <b>S/↓</b> fren, durunca geri · <b>A D</b> direksiyon · <b>Boşluk</b> el freni · <b>R</b> yola dön · <b>M</b> menü · <b>T</b> tur",document.body);let S=9;const v=St("div","g-touch","",document.body),M=St("div","g-steer","<span>◀ Direksiyon ▶</span>",v);M.id="g-steer";const N=St("i","","",M),T=St("div","g-pedals","",v),H=St("div","g-col","",T),ie=St("button","g-hb","El freni",H);ie.id="g-hb";const ge=St("button","g-brake","Fren<small>Geri</small>",H);ge.id="g-brake";const ue=St("button","g-gas","Gaz",T);ue.id="g-gas";const ae=new Set,$=new Set,fe=new Set,se=()=>{i.touch.set((ae.size?1:0)-($.size?1:0),null,fe.size>0),ue.classList.toggle("on",ae.size>0),ge.classList.toggle("on",$.size>0),ie.classList.toggle("on",fe.size>0)},oe=(V,le)=>{V.addEventListener("pointerdown",re=>{le.add(re.pointerId);try{V.setPointerCapture(re.pointerId)}catch{}re.preventDefault(),se()});const Z=re=>{le.delete(re.pointerId),se()};V.addEventListener("pointerup",Z),V.addEventListener("pointercancel",Z),V.addEventListener("lostpointercapture",Z),V.addEventListener("contextmenu",re=>re.preventDefault())};oe(ue,ae),oe(ge,$),oe(ie,fe);let ve=-1,me=0;const j=i.narrow?58:70,pe=V=>{i.touch.set(null,V,null),N.style.transform=`translate(calc(-50% + ${V*j}px), -50%)`};M.addEventListener("pointerdown",V=>{if(ve!==-1)return;ve=V.pointerId,me=V.clientX;try{M.setPointerCapture(V.pointerId)}catch{}const le=M.getBoundingClientRect();N.style.left=`${V.clientX-le.left}px`,M.classList.add("on"),V.preventDefault(),pe(1e-4)}),M.addEventListener("pointermove",V=>{if(V.pointerId!==ve)return;const le=Math.max(-1,Math.min(1,(V.clientX-me)/j));pe(le===0?1e-4:le)});const xe=V=>{V.pointerId===ve&&(ve=-1,M.classList.remove("on"),N.style.left="50%",pe(0))};M.addEventListener("pointerup",xe),M.addEventListener("pointercancel",xe);const Me=St("div","g-menu","",document.body);Me.id="g-menu";const Ie=St("div","g-menu-box","",Me);St("h1","","İstanbul 3D · Sürüş",Ie),St("p","g-sub","Nereden başlayalım?",Ie);let Te="free";const Qe=St("div","g-modes","",Ie),je=St("button","g-mode on","Serbest sürüş",Qe),ze=St("button","g-mode","★ Simge turu",Qe);je.id="g-mode-free",ze.id="g-mode-tour";const ht=St("p","g-note","Şehirde istediğin yere git. Bir simgenin yanından geçince adı ve kısa bilgisi çıkar.",Ie),be=V=>{Te=V,je.classList.toggle("on",V==="free"),ze.classList.toggle("on",V==="tour"),ht.innerHTML=V==="tour"?`Parlayan sarı ışığa sür. Varınca simgenin adı ve kısa bilgisi çıkar, sonra sıradaki gelir (${i.stops.length} simge).`:"Şehirde istediğin yere git. Bir simgenin yanından geçince adı ve kısa bilgisi çıkar."};x(je,()=>be("free")),x(ze,()=>be("tour"));const xt=St("div","g-starts","",Ie);for(const V of i.starts){const le=St("button","g-start",V.name,xt);le.id=`g-start-${V.id}`,le.addEventListener("click",()=>i.onStart(V.id,Te))}St("p","g-note small",t?"Sol el direksiyon, sağ el gaz / fren / el freni. Yükseklikler yaklaşık.":"W A S D veya oklar · Boşluk el freni · R yola dön · M menü. Yükseklikler yaklaşık.",Ie);let tt=!1;const $e=()=>{tt=!0,Me.hidden=!1,i.paused(!0)},Ke=()=>{tt=!1,Me.hidden=!0,i.paused(!1)},ft=()=>tt?Ke():$e();Me.hidden=!0;const Pe=i.world,J=2,L=Math.ceil(Pe.nx/J),we=Math.ceil(Pe.nz/J),Re=document.createElement("canvas");Re.width=L,Re.height=we;{const V=Re.getContext("2d"),le=V.createImageData(L,we),Z=le.data;for(let re=0;re<we;re++)for(let U=0;U<L;U++){const q=re*J*Pe.nx+U*J,he=Pe.road[q],Ce=Pe.block[q],De=he===1?[255,251,240]:he===2?[236,224,196]:Ce===1?[186,160,128]:Ce===2?[120,178,214]:[214,204,176],Fe=(re*L+U)*4;Z[Fe]=De[0],Z[Fe+1]=De[1],Z[Fe+2]=De[2],Z[Fe+3]=255}V.putImageData(le,0,0)}const E=d.getContext("2d"),I=i.narrow?260:300;let ce=0,O=0;const Q=(V,le,Z,re)=>{const U=d.width,q=U/2,he=q/I,Ce=-Math.PI/2-Math.atan2(Math.cos(Z),Math.sin(Z));E.save(),E.clearRect(0,0,U,U),E.beginPath(),E.arc(q,q,q-1,0,Math.PI*2),E.clip(),E.fillStyle="#d6ccb0",E.fillRect(0,0,U,U),E.translate(q,q),E.rotate(Ce),E.scale(he,he),E.imageSmoothingEnabled=!0,E.drawImage(Re,Pe.x0-V,Pe.z0-le,L*Pe.STEP*J,we*Pe.STEP*J),E.restore();const De=(Fe,ke)=>{const Le=Fe-V,Ue=ke-le,at=Math.cos(Ce),Ge=Math.sin(Ce);return[q+(Le*at-Ue*Ge)*he,q+(Le*Ge+Ue*at)*he]};for(const Fe of i.stops){let[ke,Le]=De(Fe.x,Fe.z);const Ue=re&&Fe.id===re.id,at=ke-q,Ge=Le-q,qe=Math.hypot(at,Ge),At=q-7*m;if(qe>At){if(!Ue)continue;ke=q+at/qe*At,Le=q+Ge/qe*At}E.beginPath(),E.arc(ke,Le,(Ue?5+Math.sin(O*6)*1.2:3.2)*m,0,Math.PI*2),E.fillStyle=Ue?"#ffb000":"#c0392b",E.fill(),E.lineWidth=1.5*m,E.strokeStyle="#fff",E.stroke()}{const Fe=Math.cos(Ce),ke=Math.sin(Ce),Le=1*ke,Ue=-1*Fe,at=q+Le*(q-9*m),Ge=q+Ue*(q-9*m);E.font=`700 ${10*m}px system-ui,sans-serif`,E.textAlign="center",E.textBaseline="middle",E.fillStyle="rgba(255,255,255,.9)",E.beginPath(),E.arc(at,Ge,7*m,0,Math.PI*2),E.fill(),E.fillStyle="#333",E.fillText("K",at,Ge+.5)}E.save(),E.translate(q,q),E.scale(m,m),E.beginPath(),E.moveTo(0,-8),E.lineTo(6,6),E.lineTo(0,3),E.lineTo(-6,6),E.closePath(),E.fillStyle="#d24b3a",E.fill(),E.lineWidth=1.6,E.strokeStyle="#fff",E.stroke(),E.restore(),E.beginPath(),E.arc(q,q,q-1,0,Math.PI*2),E.lineWidth=2*m,E.strokeStyle="rgba(40,40,40,.55)",E.stroke()};let K=0,P=0,z=0,W=null;const Y=V=>{g.textContent=V,g.classList.add("on"),K=1.8},F=(V,le,Z,re)=>{C.innerHTML=`<div class="g-card-t">★ ${V}</div><div class="g-card-b">${le}</div><button class="g-card-n" id="g-card-next">${Z} ›</button>`,C.hidden=!1,P=re?1e9:7,W=re,C.querySelector("button").addEventListener("pointerdown",q=>{q.preventDefault(),C.hidden=!0,P=0;const he=W;W=null,he?.()})},G=V=>{w.innerHTML=V,w.hidden=!1,z=6},te=V=>{b.classList.toggle("on",V),b.textContent=V?"★ Turu bitir":"★ Tur",h.hidden=!V,V||(C.hidden=!0),be(V?"tour":"free")},ee=V=>A.classList.toggle("pulse",V);let R="",k="",B=-1;return{frame:V=>{const le=Math.round(V.speed*3.6);le!==B&&(c.textContent=String(le),B=le),l.textContent=V.vF<-.4?"GERİ":V.hb?"EL FRENİ":"";const Z=V.street||(V.district?V.district:"İstanbul"),re=V.street&&V.district?`${V.district} <small>(semt yaklaşık)</small>`:"yükseklikler yaklaşık";if(Z!==R&&(a.textContent=Z,R=Z),re!==k&&(r.innerHTML=re,k=re),O+=V.dt,ce-=V.dt,ce<=0)if(ce=1/20,Q(V.x,V.z,V.camYaw,V.target),V.tourOn&&V.target){const U=V.target.x-V.x,q=V.target.z-V.z,he=Math.hypot(U,q),De=-(Math.atan2(U,q)-V.yaw)*180/Math.PI;h.innerHTML=`<span class="g-arrow" style="transform:rotate(${De.toFixed(0)}deg)">▲</span><span><b>${V.target.name}</b><br>${he>1e3?(he/1e3).toFixed(1)+" km":Math.round(he/10)*10+" m"} · ${V.visited}/${V.total}</span>`}else V.tourOn&&(h.innerHTML=`<span><b>Tur bitti</b> · ${V.visited}/${V.total}</span>`);K>0&&(K-=V.dt,K<=0&&g.classList.remove("on")),P>0&&P<1e8&&(P-=V.dt,P<=0&&(C.hidden=!0)),z>0&&(z-=V.dt,z<=0&&(w.hidden=!0)),S>0&&!tt&&(S-=V.dt,S<=0&&y.classList.add("off"))},openMenu:$e,closeMenu:Ke,toggleMenu:ft,setTour:te,card:F,toast:G,flash:Y,stuck:ee}}const Sc=30,pv=19,Wf=34,mv=11,gv=2.6,gs=sn.clamp,Ic=(i,e)=>{let t=i-e;for(;t>Math.PI;)t-=Math.PI*2;for(;t<-Math.PI;)t+=Math.PI*2;return t};function bv(i,e,t,n,s,a,r){const o=i.length;if(o<6)return;let c=1/0,l=-1/0;const h=[];for(let m=0;m<o;m+=2){const _=(m+2)%o;let p=i[m],A=i[m+1],b=i[_],x=i[_+1];c=Math.min(c,A,x),l=Math.max(l,A,x),A!==x&&(A>x&&([p,b]=[b,p],[A,x]=[x,A]),h.push({y0:A,y1:x,x:p,dx:(b-p)/(x-A)}))}const f=Math.max(0,Math.floor((c-t)/n)),u=Math.min(a-1,Math.floor((l-t)/n)),d=[];for(let m=f;m<=u;m++){const _=t+(m+.5)*n;d.length=0;for(const p of h)_>=p.y0&&_<p.y1&&d.push(p.x+p.dx*(_-p.y0));d.sort((p,A)=>p-A);for(let p=0;p+1<d.length;p+=2){const A=Math.max(0,Math.floor((d[p]-e)/n)),b=Math.min(s-1,Math.floor((d[p+1]-e)/n));for(let x=A;x<=b;x++)r(m*s+x)}}}async function xv(i,e){if(!i.world||!i.car)return console.warn("game layer skipped: drive handle has no world"),i;const t=i.world,n=i.car,{scene:s,camera:a,H:r,narrow:o}=e,c=e.walls||null,l=rr(),h=2.5,f=t.x0,u=t.z0,d=t.nx,m=t.nz,_=new Uint8Array(d*m);for(const Ae of e.buildings)if(!(!Ae.h||Ae.h<2.5||!Ae.p))for(const Se of Ae.p){const Oe=Se?.[0];if(!Oe||Oe.length<6)continue;let D=0,de=0;for(let ye=0;ye<Oe.length;ye+=2)D+=Oe[ye],de+=Oe[ye+1];const Ee=Math.min(255,Math.ceil(r(D/(Oe.length/2),de/(Oe.length/2))+Ae.h+.5));bv(Oe,f,u,h,d,m,ye=>{_[ye]<Ee&&(_[ye]=Ee)})}const p=(Ae,Se)=>{const Oe=Math.floor((Ae-f)/h),D=Math.floor((Se-u)/h);return Oe<0||D<0||Oe>=d||D>=m?-1:D*d+Oe},A=(Ae,Se,Oe)=>{const D=p(Ae,Oe);return D>=0&&_[D]&&Se<_[D]+.6||c&&wc(c,Ae,Se,Oe)?!0:Se<r(Ae,Oe)+.7&&t.deckAt(Ae,Oe)<.3},b=e.seaAt,x=(Ae,Se)=>(Ae>-3420&&Ae<-2800&&Se>-2700&&Se<-1760||(b?b(Ae,Se):!1))&&r(Ae,Se)<1&&t.deckAt(Ae,Se)<.3,g=(Ae,Se)=>!x(Ae,Se)&&!x(Ae+2,Se)&&!x(Ae-2,Se)&&!x(Ae,Se+2)&&!x(Ae,Se-2)&&!(c&&yc(c,Ae,Se,0,r(Ae,Se)+.4,2.4,2.4))&&t.cellAt(Ae,Se)===1&&!t.blockedAt(Ae+2,Se)&&!t.blockedAt(Ae-2,Se)&&!t.blockedAt(Ae,Se+2)&&!t.blockedAt(Ae,Se-2),C=(Ae,Se,Oe,D=60)=>{let de=0;for(let Ee=3;Ee<=D;Ee+=3){const ye=Ae+Math.sin(Oe)*Ee,_e=Se+Math.cos(Oe)*Ee;if(t.cellAt(ye,_e)!==1||t.blockedAt(ye,_e)||x(ye,_e)||c&&wc(c,ye,r(ye,_e)+.5,_e,1.3))break;de=Ee}return de},w=(Ae,Se,Oe=220)=>{for(const D of e.portalStarts||[])if(!(!D.length||Math.hypot(Ae-D[0][3],Se-D[0][4])>40)){for(const[de,Ee,ye]of D)if(g(de,Ee)&&C(de,Ee,ye,30)>=9)return{x:de,z:Ee,yaw:ye,d:Math.hypot(de-Ae,Ee-Se)}}for(let D=0;D<=Oe;D+=2.5){const de=D===0?1:Math.max(8,Math.ceil(D*2*Math.PI/2.5));let Ee=null;for(let ye=0;ye<de;ye++){const _e=ye/de*Math.PI*2,Be=Ae+Math.cos(_e)*D,He=Se+Math.sin(_e)*D;if(!g(Be,He))continue;let We=0,et=-1;for(let ct=0;ct<32;ct++){const mt=ct/32*Math.PI*2,st=C(Be,He,mt);st>et&&(et=st,We=mt)}(!Ee||et>Ee.run)&&(Ee={x:Be,z:He,run:et,yaw:We})}if(Ee&&Ee.run>=9)return{x:Ee.x,z:Ee.z,yaw:Ee.yaw,d:D}}return null};let y=0,S=0,v=0,M=0,N=0,T=0,H=0,ie=0,ge=0,ue=0,ae=0,$=0,fe=12,se=!1,oe=0,ve=0,me=0,j=!0,pe=0,xe=ms[0];const Me={};try{const Ae=await(await fetch(new URL("data/drive_spawns.json",location.href).href)).json();for(const Se of Ae.spawns||[]){const Oe=ms.find(D=>D.id===Se.id);Oe&&Number.isFinite(Se.x)&&Number.isFinite(Se.z)&&!t.blockedAt(Se.x,Se.z)&&(Oe.x=Se.x,Oe.z=Se.z,Oe.yaw=Se.yaw,Oe.fromWorld=!0)}}catch{}for(const Ae of ms){if(Ae.fromWorld&&Ae.yaw!=null&&C(Ae.x,Ae.z,Ae.yaw)>=9){Me[Ae.id]={x:Ae.x,z:Ae.z,yaw:Ae.yaw,d:0};continue}let Se=w(Ae.x,Ae.z);Se&&Ae.yaw!=null&&Math.hypot(Se.x-Ae.x,Se.z-Ae.z)<12&&C(Se.x,Se.z,Ae.yaw)>=12&&(Se={...Se,yaw:Ae.yaw}),Me[Ae.id]=Se}n.rotation.order="YXZ";const Ie=n.children.filter(Ae=>Ae instanceof dt&&Ae.position.z>1&&Ae.position.y<.4),Te=new Xn({color:"#7a1a12"});for(const Ae of[-.6,.6]){const Se=new dt(new Gt(.36,.16,.06),Te);Se.position.set(Ae,.82,-1.92),n.add(Se)}const Qe=new Set;let je=0,ze=0,ht=!1,be=0,xt=0,tt=!1,$e=!1;const Ke=Ae=>Ae.key.length===1?Ae.key.toLowerCase():Ae.key;window.addEventListener("keydown",Ae=>{const Se=Ke(Ae);if(Se==="r"&&!Ae.repeat){z();return}if((Se==="m"||Se==="Escape")&&!Ae.repeat){ke.toggleMenu();return}if(Se==="t"&&!Ae.repeat){j||ce(!Pe.on);return}["w","a","s","d"," ","ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Shift"].includes(Se)&&(Qe.add(Se),Ae.preventDefault())}),window.addEventListener("keyup",Ae=>Qe.delete(Ke(Ae))),window.addEventListener("blur",()=>Qe.clear());const ft=()=>{let Ae=be,Se=xt;(Qe.has("w")||Qe.has("ArrowUp"))&&(Ae+=1),(Qe.has("s")||Qe.has("ArrowDown"))&&(Ae-=1),(Qe.has("a")||Qe.has("ArrowLeft"))&&(Se-=1),(Qe.has("d")||Qe.has("ArrowRight"))&&(Se+=1),$e=ze!==0,Ae=gs(Ae+je,-1,1),Se=gs(Se+ze,-1,1);const Oe=tt||ht||Qe.has(" ")||Qe.has("Shift");return j||pe>0?{throttle:0,steer:0,hb:!1}:{throttle:Ae,steer:Se,hb:Oe}},Pe={on:!1,target:null,visited:new Set,t0:0,seen:new Set,done:!1},J=new Ln,L=new Xn({color:"#ffcf33",transparent:!0,opacity:.38,depthWrite:!1,side:Vt,fog:!1}),we=new dt(new Nn(3.2,5,90,20,1,!0),L);we.position.y=45;const Re=new dt(new Vl(9,.9,8,40),new Xn({color:"#ffb000",fog:!1}));Re.rotation.x=Math.PI/2,Re.position.y=2,J.add(we,Re),J.visible=!1,J.renderOrder=8,s.add(J);const E=Ae=>(Ae.x-y)**2+(Ae.z-S)**2,I=()=>{let Ae=null;for(const Se of Ki)!Pe.visited.has(Se.id)&&E(Se)>Se.r*Se.r&&(!Ae||E(Se)<E(Ae))&&(Ae=Se);if(!Ae)for(const Se of Ki)!Pe.visited.has(Se.id)&&(!Ae||E(Se)<E(Ae))&&(Ae=Se);Pe.target=Ae,Ae?(J.position.set(Ae.x,Math.max(0,r(Ae.x,Ae.z)),Ae.z),J.visible=!0):J.visible=!1};function ce(Ae){Pe.on=Ae,Pe.visited.clear(),Pe.done=!1,Pe.t0=performance.now(),Ae?I():(Pe.target=null,J.visible=!1),ke.setTour(Ae)}const O=Ae=>{const Se=Math.round(Ae/1e3);return`${Math.floor(Se/60)}:${String(Se%60).padStart(2,"0")}`},Q=()=>{if(Pe.on&&Pe.target&&E(Pe.target)<Pe.target.r**2){const Ae=Pe.target;Pe.visited.add(Ae.id),I(),Pe.target?ke.card(Ae.name,Ae.info,`Sonraki: ${Pe.target.name}`,null):(Pe.done=!0,ke.card(Ae.name,`${Ae.info}<br><b>Tur bitti!</b> ${Ki.length} simge, süre ${O(performance.now()-Pe.t0)}.`,"Yeniden başla",()=>ce(!0)));return}if(!Pe.on){for(const Ae of Ki)if(!Pe.seen.has(Ae.id)&&E(Ae)<(Ae.r*.8)**2){Pe.seen.add(Ae.id),ke.toast(`<b>${Ae.name}</b><br>${Ae.info}`);break}}for(const Ae of[...Pe.seen]){const Se=Ki.find(Oe=>Oe.id===Ae);E(Se)>(Se.r*2.2)**2&&Pe.seen.delete(Ae)}};function K(Ae,Se,Oe){y=Ae,S=Se,M=Oe,N=T=0,H=0,ie=0,ge=0;{const D=r(y,S);v=t.surface(y,S,D>1?D:void 0)}$=M,se=!1,ve=0,De=!1,je=ze=0,ht=!1,be=xt=0,tt=!1,Y(40),F[0]=y,F[1]=S,F[2]=M,t.follow(y,S),Ue="",at="",Le=0,typeof Ge=="function"&&Ge()}function P(Ae,Se){const Oe=ms.find(Ee=>Ee.id===Ae)||ms[0];xe=Oe;const D=Me[Oe.id]||w(Oe.x,Oe.z,400);D?K(D.x,D.z,D.yaw):K(Oe.x,Oe.z,Oe.yaw||0),j=!1,ke.closeMenu();const de=Cc(y,S);ke.flash(`${Oe.name}${de?" · "+de.name:""} · ${Pe.on||Se==="tour"?"Simge turu":"Serbest sürüş"}`),Se?ce(Se==="tour"):Pe.on&&ce(!0)}function z(){if(j)return;const Ae=w(y,S,260);if(Ae){const Se=C(Ae.x,Ae.z,M)>=9?M:Ae.yaw;K(Ae.x,Ae.z,Se)}else P(xe.id);ke.flash("Yola döndün")}const W=(Ae,Se)=>c?yc(c,Ae,Se,M,v):null,Y=Ae=>{if(c)for(let Se=0;Se<Ae;Se++){const Oe=yc(c,y,S,M,v);if(!Oe)return;const D=Math.min(.6,Oe.d+.03);y+=Oe.nx*D,S+=Oe.nz*D;const de=N*Oe.nx+T*Oe.nz;de<0&&(N-=Oe.nx*de,T-=Oe.nz*de)}},F=[0,0,0],G=(Ae,Se,Oe)=>{if(W(Ae,Se))return!1;{const Ee=t.deckAt(Ae,Se);if(Ee>.3&&v<Ee-3&&r(Ae,Se)<1)return!1}if(t.blockedAt(Ae,Se)||x(Ae,Se))return!1;const D=Math.sin(M)*1.7*Oe,de=Math.cos(M)*1.7*Oe;return!t.blockedAt(Ae+D,Se+de)},te=(Ae,Se)=>{let Oe=0,D=0;for(let Ee=0;Ee<12;Ee++){const ye=Ee/12*Math.PI*2,_e=Math.cos(ye),Be=Math.sin(ye);t.blockedAt(Ae+_e*2.6,Se+Be*2.6)&&(Oe-=_e,D-=Be)}const de=Math.hypot(Oe,D);return de>.001?{x:Oe/de,z:D/de}:null};function ee(Ae,Se){const Oe=N*Math.sin(M)+T*Math.cos(M)>=0?1:-1;if(t.blockedAt(y,S)&&!W(y+Ae,S+Se)){y+=Ae,S+=Se;return}if(G(y+Ae,S+Se,Oe)){y+=Ae,S+=Se;return}me++;const D=W(y+Ae,S+Se);let de=(D?{x:D.nx,z:D.nz}:null)||te(y+Ae,S+Se)||te(y,S);if(!de){const We=Math.hypot(Ae,Se)||1;de={x:-Ae/We,z:-Se/We}}const Ee=N*de.x+T*de.z;Ee<0&&(N-=de.x*Ee,T-=de.z*Ee,-Ee>7&&(oe=Math.min(1,-Ee/20))),N*=.93,T*=.93;const ye=Ae*de.x+Se*de.z,_e=Ae-de.x*Math.min(0,ye),Be=Se-de.z*Math.min(0,ye);if(G(y+_e,S+Be,Oe)?(y+=_e,S+=Be):G(y+de.x*.3,S+de.z*.3,Oe)&&(y+=de.x*.3,S+=de.z*.3),Math.hypot(N,T)>.5){const We=Math.atan2(N,T)+(Oe<0?Math.PI:0);M+=gs(Ic(We,M),-1,1)*.12}}function R(Ae){const Se=ft(),Oe=Se.steer,D=$e?10:Math.abs(Oe)<Math.abs(H)||Math.sign(Oe)!==Math.sign(H)?7:3.4;H+=gs(Oe-H,-D*Ae,D*Ae);const de=Math.sin(M),Ee=Math.cos(M),ye=Math.cos(M),_e=-Math.sin(M);let Be=N*de+T*Ee,He=N*ye+T*_e;const We=Se.throttle;if(We>.05)Be<-.5?Be=Math.min(0,Be+Wf*We*Ae):Be=Math.min(Sc,Be+pv*We*(1-.55*Math.max(0,Be)/Sc)*Ae);else if(We<-.05)Be>.5?Be=Math.max(0,Be-Wf*-We*Ae):Be=Math.max(-9,Be-mv*-We*Ae);else{const Et=(2.6+.004*Be*Be)*Ae;Be=Math.abs(Be)<=Et?0:Be-Math.sign(Be)*Et}if(Se.hb){const Et=6.5*Ae;Be=Math.abs(Be)<=Et?0:Be-Math.sign(Be)*Et}ie+=((Se.hb?1:0)-ie)*Math.min(1,Ae*(Se.hb?12:2.2));const et=11*(1-ie)+1.6*ie;He*=Math.exp(-et*Ae);const ct=.56/(1+Math.abs(Be)/7.5),mt=Be/gv*Math.tan(H*ct)*(1+.75*ie);ge+=(mt-ge)*Math.min(1,Ae*12),N=de*Be+ye*He,T=Ee*Be+_e*He;const st=M;M-=ge*Ae,c&&W(y,S)&&(M=st,ge=0),Y(6);const Mt=Math.hypot(N,T),Tt=Math.max(1,Math.ceil(Mt*Ae/.7)),Lt=y,Rt=S;me=0;for(let Et=0;Et<Tt;Et++)ee(N*Ae/Tt,T*Ae/Tt);const gt=Ae>0?Math.hypot(y-Lt,S-Rt)/Ae:0;Math.abs(We)>.3&&gt<1.2?ve+=Ae:ve=Math.max(0,ve-Ae*2),ke.stuck(ve>1.6),c&&(W(y,S)?(y=F[0],S=F[1],M=F[2],N=T=0):(F[0]=y,F[1]=S,F[2]=M));const Je=t.surface(y,S,v);if(!se)v=Je;else{const Et=Je-v;v+=Math.abs(Et)<=2.8?Et*Math.min(1,Ae*10):Math.sign(Et)*6*Ae}const Pt=gs(-ge*Be*.011,-.1,.1);ue+=(Pt-ue)*Math.min(1,Ae*6);const bt=We<-.05&&Be>1?.04:We>.05&&Be<Sc-1?-.025:0;ae+=(bt-ae)*Math.min(1,Ae*5),n.position.set(y,v,S),n.rotation.set(ae,M,ue);for(const Et of Ie)Et.rotation.y=H*ct*1.4;return Te.color.set(We<-.05||Se.hb?"#ff3b2f":"#7a1a12"),{vF:Be,sp:Mt,moved:gt,hb:Se.hb}}const k=new ne(0,.4,-1).normalize(),B=new ne,X=new ne,V=new ne,le=new ne,Z=new ne,re=new ne,U=o?68:56;let q=99,he=0;const Ce=new ne;let De=!1;function Fe(Ae,Se,Oe){const D=Oe>3&&Se>0?Math.atan2(N,T):M,de=M+gs(Ic(D,M),-.5,.5)*.5;$+=Ic(de,$)*Math.min(1,Ae*4.5),se||($=M);const Ee=(o?10.5:11.5)+Math.min(6.5,Math.max(0,Se)*.22),ye=(o?4.6:4.9)+Math.min(1.8,Math.max(0,Se)*.05);B.set(y,v+1.7,S);const _e=Math.cos($),Be=-Math.sin($);if(A(B.x,B.y,B.z)){let Rt=!1;for(let gt=.8;gt<=5.6&&!Rt;gt+=.8)for(let Je=0;Je<16;Je++){const Pt=Je/16*Math.PI*2,bt=y+Math.cos(Pt)*gt,Et=S+Math.sin(Pt)*gt;if(!A(bt,B.y,Et)){B.set(bt,B.y,Et),Rt=!0;break}}}const He=A(B.x,B.y,B.z),We=(Rt,gt)=>{let Je=!He;for(let Pt=.6;Pt<=gt+.8;Pt+=.5){const bt=B.x+Rt.x*Pt,Et=B.y+Rt.y*Pt,Gn=B.z+Rt.z*Pt,$t=A(bt,Et,Gn);if(!Je){$t||(Je=!0);continue}if($t||Pt>2.5&&(A(bt+_e*.6,Et,Gn+Be*.6)||A(bt-_e*.6,Et,Gn-Be*.6)))return Math.max(0,Pt-.9)}return Je?gt:0};let et=0,ct=0,mt=-1;for(const[Rt,gt]of[[Ee,ye],[Ee*.55,ye+4.5],[Ee*.3,ye+10],[2,ye+13]]){X.set(y-Math.sin($)*Rt,v+gt,S-Math.cos($)*Rt);const Je=X.clone().sub(B),Pt=Je.length();Je.divideScalar(Pt);const bt=We(Je,Pt),Et=bt/Pt;if(Et>mt&&(mt=Et,et=Pt,ct=Math.max(1.6,bt),V.copy(Je)),Et>.72)break}q=ct,se?ct<fe?fe+=(ct-fe)*Math.min(1,Ae*22):fe+=(ct-fe)*Math.min(1,Ae*2):fe=ct,se?k.lerp(V,1-Math.exp(-Ae*7)).normalize():k.copy(V);const st=Math.max(1.6,Math.min(fe,We(k,fe)));if(le.copy(B).addScaledVector(k,st),c)for(let Rt=st;Rt>.4&&wc(c,le.x,le.y,le.z);Rt-=.3)le.copy(B).addScaledVector(k,Rt-.3);he=1-st/(et||1),le.y=Math.max(le.y,t.surface(le.x,le.z,v)+.6),oe>0&&(le.x+=(Math.random()-.5)*oe*.5,le.y+=(Math.random()-.5)*oe*.4,oe=Math.max(0,oe-Ae*3));{const Rt=le.x-B.x,gt=le.y-B.y,Je=le.z-B.z;if(De){const Pt=Rt-Ce.x,bt=gt-Ce.y,Et=Je-Ce.z,Gn=Math.hypot(Pt,bt,Et),$t=2*Math.max(.25,Ae*30);if(Gn>$t)for(const cs of[$t,$t*1.5,$t*2.1]){const Ut=Math.min(1,cs/Gn),Pn=B.x+Ce.x+Pt*Ut,yi=B.y+Ce.y+bt*Ut,En=B.z+Ce.z+Et*Ut;if(!A(Pn,yi,En)&&yi>r(Pn,En)+.5){le.set(Pn,yi,En);break}}}Ce.set(le.x-B.x,le.y-B.y,le.z-B.z),De=!0}a.position.copy(le);const Mt=gs((k.y-.35)/.5,0,1),Tt=(7+Math.max(0,Se)*.2)*(1-.75*Mt);Z.set(y+Math.sin(M)*Tt,v+1.5-Mt*1.3,S+Math.cos(M)*Tt),a.lookAt(Z);const Lt=U+Math.min(9,Math.max(0,Se)*.3);Math.abs(a.fov-Lt)>.05&&(a.fov+=(Lt-a.fov)*Math.min(1,Ae*3),a.updateProjectionMatrix()),se=!0,re.set(y,v+.8,S)}const ke=Av({narrow:o,starts:ms,stops:Ki,world:t,onStart:(Ae,Se)=>P(Ae,Se),onReset:()=>z(),onTour:()=>ce(!Pe.on),touch:{set:(Ae,Se,Oe)=>{Ae!=null&&(je=Ae),Se!=null&&(ze=Se),Oe!=null&&(ht=Oe)}},paused:Ae=>{j=Ae}});let Le=0,Ue="",at="";const Ge=()=>{const Ae=t.deckNameAt?t.deckNameAt(y,S):"",Se=Cc(y,S);if(Ae&&v>r(y,S)+2.5)Ue=Ae;else if(Se)Ue=Se.name;else{const Oe=Cc(y,S,45);Oe?Ue||(Ue=Oe.name):Ue=(e.portalStarts||[]).find(de=>de.length&&Math.hypot(y-de[0][0],S-de[0][1])<90)?"Taksim Tüneli ağzı":""}{const Oe="Sur gediği (1950'ler) · ";Ue.startsWith(Oe)&&(Ue=Ue.slice(Oe.length)),Math.hypot(y+3626,S+848)<32&&(Ue=Oe+(Ue||"Edirnekapı"))}at=cv(y,S)};uv(new URL("data/drive_world.json",location.href).href).then(()=>dv()).then(()=>Ge());function qe(Ae){Ae=Math.min(.08,Math.max(0,Ae));const Se=R(Ae);Fe(Ae,Se.vF,Se.sp),t.follow(y,S),Le-=Ae,Le<=0&&(Le=.25,Ge(),Q()),ke.frame({x:y,z:S,yaw:M,camYaw:$,speed:Se.moved,vF:Se.vF,street:Ue,district:at,target:Pe.target,tourOn:Pe.on,visited:Pe.visited.size,total:Ki.length,hb:Se.hb,dt:Ae})}const At=Me.eminonu;At&&K(At.x,At.z,At.yaw),qe(0);const Ot=l.get("start");Ot?P(Ot,l.get("mode")==="tour"?"tour":"free"):ke.openMenu();const Wt={start:P,setTour:ce,resetToRoad:z,snapRoad:w,startSnap:Me,stops:Ki,starts:ms,state:()=>({x:y,z:S,y:v,yaw:M,vx:N,vz:T,speed:Math.hypot(N,T),steer:H,hb:ie,paused:j,stuck:ve,hits:me,camDist:fe,hitD:q,pulled:he,street:Ue,district:at,tour:{on:Pe.on,target:Pe.target?.id||null,visited:[...Pe.visited],done:Pe.done}}),setInput:(Ae,Se,Oe=!1)=>{be=Ae,xt=Se,tt=Oe},place:K,camHit:A,world:t,sim:(Ae,Se=0,Oe=0,D=!1,de=1/30)=>{const Ee=[be,xt,tt];be=Se,xt=Oe,tt=D;for(let ye=0;ye<Ae/de;ye++)qe(de);return[be,xt,tt]=Ee,Wt.state()}};return Ze.__game=Wt,{...i,update:qe,tick:qe,reset:()=>z(),focus:()=>re,state:()=>({x:y,z:S,y:v,speed:Math.hypot(N,T),yaw:M,onRoad:t.cellAt(y,S)===1}),input:()=>{const Ae=ft();return{throttle:Ae.throttle,steer:Ae.steer}},setInput:(Ae,Se)=>{be=Ae,xt=Se}}}function _v(){const i=new URL(import.meta.url),e=i.pathname.split("/").filter(Boolean);return e.pop(),e[e.length-1]==="assets"&&e.pop(),e[e.length-1]==="src"&&e.pop(),e[e.length-1]==="istanbul3d-drive"&&e.pop(),e.push("istanbul3d"),i.pathname=`/${e.join("/")}/`,i.search="",i.hash="",i.href}const Bt=_v();let qn=null;const Yn=rr(),wt=Number(Yn.get("step")||99),Ev=performance.now(),md={};Ze.__prof=md;const Da=i=>{md[i]=Math.round(performance.now()-Ev)},pi=Yn.get("look")!=="0",to=Yn.get("roofs")!=="1",en=pi&&to&&Yn.get("walls")!=="0",dn=en&&Yn.get("colour")!=="0",it=window.innerWidth<600,vv=pi&&(Yn.get("q")?Yn.get("q")==="high":!it),xn=new Ub({antialias:!0});xn.setPixelRatio(Math.min(window.devicePixelRatio,it?1.5:2));xn.setSize(window.innerWidth,window.innerHeight);xn.shadowMap.enabled=wt>=2;xn.shadowMap.type=pi&&!it?yl:Zf;xn.outputColorSpace=Kt;pi&&(xn.toneMapping=Cl,xn.toneMappingExposure=1);document.getElementById("app").appendChild(xn.domElement);const nt=new Fb,Mv=new Ne("#f1dcc4");function jf(i,e){const t=document.createElement("canvas");t.width=2,t.height=256;const n=t.getContext("2d"),s=n.createLinearGradient(0,0,0,256);s.addColorStop(0,i),s.addColorStop(.5,"#e6b4a3"),s.addColorStop(1,e),n.fillStyle=s,n.fillRect(0,0,2,256);const a=new qb(t);return a.colorSpace=Kt,a}const gd=new Ne("#f3ead9");nt.background=gd.clone();nt.fog=new Mo(gd.clone(),11e3,28e3);const bd=en?it?32:22:it?50:35,Ks=Math.tan(sn.degToRad(bd/2))/Math.tan(sn.degToRad(17.5)),Qn=new Rn(bd,window.innerWidth/window.innerHeight,.45,22e3),zn=new i_(Qn,xn.domElement);zn.enableDamping=!0;zn.dampingFactor=.08;zn.maxPolarAngle=1.2;zn.minDistance=60;zn.maxDistance=en?22e3:14e3;zn.screenSpacePanning=!1;zn.zoomToCursor=!0;const ei=pi?new _f("#b0a8b8","#7a6a5c",.95):new _f("#fff6e8","#c9b79a",wt>=2?1.6:2.4);nt.add(ei);const An=new Qu("#fff0d8",wt>=2?2.2:.9);An.castShadow=wt>=2;An.shadow.mapSize.set(it?1024:2048,it?1024:2048);const qr=650;Object.assign(An.shadow.camera,{left:-qr,right:qr,top:qr,bottom:-qr,near:10,far:6e3});An.shadow.bias=-6e-4;pi&&!it&&(An.shadow.radius=en?4:2,An.shadow.blurSamples=en?12:8);An.shadow.normalBias=.6;An.shadow.intensity=.6;nt.add(An,An.target);let xd=new ne(.5,.6,.4).normalize();const _d={value:0};function _l(i){i=sn.clamp(i,7.5,17.5);const e=sn.clamp((i-7.2)/11.6,0,1),t=sn.degToRad(Math.max(2,(en?50:38)*Math.sin(Math.PI*e))),n=sn.degToRad(105+150*e);xd=new ne(Math.sin(n)*Math.cos(t),Math.sin(t),-Math.cos(n)*Math.cos(t)).normalize();const s=1-Math.min(1,Math.sin(t)/Math.sin(sn.degToRad(30)));if(pi){An.color.set("#ffcf90").lerp(new Ne("#ff9a50"),s*.55);const o=en?sn.smoothstep(i,18.2,19.6):0;An.intensity=(en?sn.lerp(dn?5.5:4.7,4.7,o):5.6)-s*1.6,ei.intensity=(en?1.45:.95)-s*.2,ei.color.set("#b0a8b8"),ei.groundColor.set("#7a6a5c"),en&&(ei.color.lerp(new Ne("#d0a585"),s*.6),ei.groundColor.lerp(new Ne("#9a7458"),s*.6),ei.intensity=sn.lerp(dn?1.12:1.45,1.45,o)+s*.15);const c=en?sn.smoothstep(i,18.2,19.6):0;_d.value=c,Mv.set("#ea9b7d");const l=nt.background;en&&c>0?(An.intensity*=1-.85*c,ei.intensity*=1-.55*c,ei.color.lerp(new Ne("#34406a"),c),ei.groundColor.lerp(new Ne("#1c2236"),c),nt.background=jf(new Ne("#b5b1d0").lerp(new Ne("#0e1430"),c).getStyle(),new Ne("#ea9b7d").lerp(new Ne("#2a3358"),c).getStyle())):nt.background=jf("#b5b1d0","#ea9b7d"),l instanceof tn&&l.dispose(),nt.fog.color.set("#a49ca2"),en&&nt.fog.color.lerp(new Ne("#e0a07f"),s*.6).lerp(new Ne("#252c48"),c);const h=document.getElementById("hourtxt");h&&(h.textContent=`${String(Math.floor(i)).padStart(2,"0")}:${String(Math.round(i%1*60)).padStart(2,"0")}`);return}An.color.set("#fff3e0").lerp(new Ne("#ff9a4d"),s*.85),An.intensity=2.8-s*1,ei.intensity=1.15-s*.35,ei.color.set("#fff6e8").lerp(new Ne("#ffd2a8"),s*.7);const a=new Ne("#f3ead9").lerp(new Ne("#f1c9a3"),s*.6);nt.background.copy(a),nt.fog.color.copy(a);const r=document.getElementById("hourtxt");r&&(r.textContent=`${String(Math.floor(i)).padStart(2,"0")}:${String(Math.round(i%1*60)).padStart(2,"0")}`)}const Ed=en?14:16.25;_l(wt>=5?pi?Ed:15.5:14);const Ya=1.2;let Nt=null,pn=null,Na=null,Zt=null;const go=[],$i=[467.7,1011.1,455.9,1012.6,349.7,1092.8,287.3,1163.4,273.4,1182.5,249.9,1290.8,255.3,1300.3,361.9,1370.5,392.5,1385.8,436,1398,441.8,1394.8,572.2,1142.1,585.8,1064.4,563.1,1039.6,543.3,1027.9],Es=45,as=(()=>{let i=1e9,e=1e9,t=-1e9,n=-1e9;for(let s=0;s<$i.length;s+=2)i=Math.min(i,$i[s]),t=Math.max(t,$i[s]),e=Math.min(e,$i[s+1]),n=Math.max(n,$i[s+1]);return[i,e,t,n]})();function El(i,e){if(i<as[0]||i>as[2]||e<as[1]||e>as[3])return!1;const t=$i;let n=!1;for(let s=0,a=t.length-2;s<t.length;a=s,s+=2)t[s+1]>e!=t[a+1]>e&&i<(t[a]-t[s])*(e-t[s+1])/(t[a+1]-t[s+1])+t[s]&&(n=!n);return n}function yv(i,e){const t=$i;let n=1e9;for(let s=0,a=t.length-2;s<t.length;a=s,s+=2){const r=t[a],o=t[a+1],c=t[s]-r,l=t[s+1]-o,h=Math.max(0,Math.min(1,((i-r)*c+(e-o)*l)/(c*c+l*l)));n=Math.min(n,Math.hypot(i-r-c*h,e-o-l*h))}return n}const es=[1924.6,-1890.6,1904.9,-1903.4,1855.5,-1885.5,1656.8,-1710.2,1651.5,-1698.3,1653.6,-1676.6,1674.3,-1637.9,1692.3,-1632.5,1825.9,-1673,1966.1,-1738.9,1970.9,-1769.5],ni=4,rs=(()=>{let i=1e9,e=1e9,t=-1e9,n=-1e9;for(let s=0;s<es.length;s+=2)i=Math.min(i,es[s]),t=Math.max(t,es[s]),e=Math.min(e,es[s+1]),n=Math.max(n,es[s+1]);return[i,e,t,n]})();function vl(i,e){if(i<rs[0]||i>rs[2]||e<rs[1]||e>rs[3])return!1;const t=es;let n=!1;for(let s=0,a=t.length-2;s<t.length;a=s,s+=2)t[s+1]>e!=t[a+1]>e&&i<(t[a]-t[s])*(e-t[s+1])/(t[a+1]-t[s+1])+t[s]&&(n=!n);return n}function wv(i,e){const t=es;let n=1e9;for(let s=0,a=t.length-2;s<t.length;a=s,s+=2){const r=t[a],o=t[a+1],c=t[s]-r,l=t[s+1]-o,h=Math.max(0,Math.min(1,((i-r)*c+(e-o)*l)/(c*c+l*l)));n=Math.min(n,Math.hypot(i-r-c*h,e-o-l*h))}return n}function Ve(i,e){let t=ea(i,e);if(Nt&&i>as[0]-40&&i<as[2]+40&&e>as[1]-40&&e<as[3]+40){if(El(i,e))return Es;if(t>Es){const s=yv(i,e);if(s<40){const a=1-s/40,r=a*a*(3-2*a);t+=(Es-t)*r}}}if(Nt&&i>rs[0]-30&&i<rs[2]+30&&e>rs[1]-30&&e<rs[3]+30){if(vl(i,e))return ni;const s=wv(i,e);if(s<25&&t<ni){const a=1-s/25,r=a*a*(3-2*a);t+=(ni-t)*r}else if(s<8&&t>ni){const a=1-s/8,r=a*a*(3-2*a);t+=(ni-t)*r*.35}}if(!go.length)return t;let n=t;for(const s of go){const a=Math.hypot(i-s.x,e-s.z);if(a>=s.r+s.b)continue;const r=a<=s.r?1:1-(a-s.r)/s.b,o=r*r*(3-2*r);n=n+(s.h-n)*o}return n}function on(i,e,t,n=25){if(!Nt)return;let s=0,a=0;for(let r=0;r<16;r++)for(const o of[0,.5,1])s+=ea(i+Math.cos(r*.3927)*t*o,e+Math.sin(r*.3927)*t*o),a++;go.push({x:i,z:e,r:t,b:n,h:s/a})}function Js(i,e,t){if(!i)return null;const n=(e-i.x0)/i.step,s=(t-i.z0)/i.step;if(n<0||s<0||n>=i.nx-1||s>=i.nz-1)return null;const a=Math.floor(n),r=Math.floor(s),o=n-a,c=s-r,l=i.nx,h=i.h;return(h[r*l+a]*(1-o)+h[r*l+a+1]*o)*(1-c)+(h[(r+1)*l+a]*(1-o)+h[(r+1)*l+a+1]*o)*c}const Cv=9;function qf(i,e){const t=Js(Nt,i,e);if(t!=null&&Nt&&Na){const s=Math.min(e-Nt.z0,i-Nt.x0);if(s<330){const a=Js(Na,i,e);if(a!=null){const r=e-Nt.z0<i-Nt.x0,o=r?i:Nt.x0+330,c=r?Nt.z0+330:e,l=Js(Nt,o,c),h=Js(Na,o,c),f=l!=null&&h!=null?Math.max(-5,Math.min(20,l-h)):Cv,u=a+f*Math.min(1,s/120),d=Math.min(1,Math.max(0,(s-280)/50)),m=d*d*(3-2*d);return Ya*(u*(1-m)+t*m)}}}if(t!=null)return Ya*t;const n=Js(Na,i,e);return n==null?0:Ya*n}function ea(i,e){if(pn&&i>1764){const t=pn,n=Math.min(i-1764,t.x0+t.step*(t.nx-1)-i,e-t.z0,t.z0+t.step*(t.nz-1)-e);if(n>0){const s=Js(t,i,e);if(s!=null){const a=Math.min(1,n/140),r=a*a*(3-2*a);return r>=1?Ya*s:qf(i,e)*(1-r)+Ya*s*r}}}return qf(i,e)}new Ne;class Li{pos=[];col=[];tex=!1;wa=[];wb=[];wl=0;rl=6;seed=0;base=0;wh=0;st=0;ridge=0;tri(e,t,n,s,a=!1,r,o=0,c=0){if(a){const l=t[0]-e[0];t[1]-e[1];const h=t[2]-e[2],f=n[0]-e[0];n[1]-e[1];const u=n[2]-e[2];if(h*f-l*u<0){const m=t;t=n,n=m,r&&(r=[r[0],r[2],r[1]])}}this.pos.push(...e,...t,...n);for(let l=0;l<3;l++)this.col.push(s.r,s.g,s.b);if(this.tex){const l=[e,t,n],h=o===0?this.rl:this.wl;for(let f=0;f<3;f++){const u=r?r[f]:[l[f][0],l[f][2]];this.wa.push(u[0],u[1],h,this.seed),o===0?this.wb.push(this.wh,r&&r[f].length>2?r[f][2]:-1,0,this.ridge):this.wb.push(this.wh,c,o,this.st)}}}geometry(){const e=new It;return e.setAttribute("position",new pt(this.pos,3)),e.setAttribute("color",new pt(this.col,3)),this.tex&&(e.setAttribute("wa",new pt(this.wa,4)),e.setAttribute("wb",new pt(this.wb,4))),e.computeVertexNormals(),e}}function li(i){let e=0;for(let t=0;t<i.length;t+=2){const n=(t+2)%i.length;e+=i[t]*i[n+1]-i[n]*i[t+1]}return e/2}function Sv(i,e,t,n,s,a){let r=e;const o=li(r);if(!a&&o>0||a&&o<0){const l=[];for(let h=r.length-2;h>=0;h-=2)l.push(r[h],r[h+1]);r=l}const c=i.st;a&&c>=16&&c<128&&(i.st=32);for(let l=0;l<r.length;l+=2){const h=(l+2)%r.length,f=[r[l],t,r[l+1]],u=[r[h],t,r[h+1]],d=[r[h],n,r[h+1]],m=[r[l],n,r[l+1]];if(i.tex){const _=Math.hypot(r[h]-r[l],r[h+1]-r[l+1]),p=t-i.base,A=n-i.base,b=_>=2.4&&i.wh>=4?1:2;i.tri(f,u,d,s,!1,[[0,p],[_,p],[_,A]],b,_),i.tri(f,d,m,s,!1,[[0,p],[_,A],[0,A]],b,_)}else i.tri(f,u,d,s),i.tri(f,d,m,s)}i.st=c}let Xa=!1;function oa(i,e,t,n,s=!1){const a=u=>{const d=[];for(let m=0;m<u.length;m+=2)d.push(new Ye(u[m],u[m+1]));return d},r=a(e[0]),o=e.slice(1).map(a);let c;try{c=kn.triangulateShape(r,o)}catch{return}const l=r.concat(...o),h=u=>s?Ve(u.x,u.y)+t:t,f=(u,d,m,_)=>{if(s&&_<(Xa?10:8)){const p=u.clone().add(d).multiplyScalar(.5),A=d.clone().add(m).multiplyScalar(.5),b=m.clone().add(u).multiplyScalar(.5),x=Math.max(Math.abs(Ve(p.x,p.y)-(Ve(u.x,u.y)+Ve(d.x,d.y))/2),Math.abs(Ve(A.x,A.y)-(Ve(d.x,d.y)+Ve(m.x,m.y))/2),Math.abs(Ve(b.x,b.y)-(Ve(m.x,m.y)+Ve(u.x,u.y))/2));if(x>(Xa?.4:1.2)&&Math.max(u.distanceTo(d),d.distanceTo(m),m.distanceTo(u))>(Xa||x>5?6:35)){f(u,p,b,_+1),f(p,d,A,_+1),f(b,A,m,_+1),f(p,A,b,_+1);return}}i.tri([u.x,h(u),u.y],[d.x,h(d),d.y],[m.x,h(m),m.y],n,!0)};for(const u of c)f(l[u[0]],l[u[1]],l[u[2]],0)}function Wn(i,e,t,n,s,a){for(const r of e)r.forEach((o,c)=>Sv(i,o,t,n,s,c>0)),a&&oa(i,r,n,a)}function Iv(i,e){const t=e.pr,n=e.seg||16,s=e.a?e.a[0]:0,a=e.a?e.a[1]:Math.PI*2,r=e.k??2,o=t[0][1],c=Math.max(t[0][0],.3),l=(e.cols||[]).map(m=>new Ne(m)),h=new Ne(e.col);r===0?i.rl=e.tx??9:i.wl=e.tx??8,i.base=o,i.wh=t[t.length-1][1]-o,i.st=e.st||128,i.ridge=0;const f=r===2&&e.st?1:r,u=(a-s)*c,d=[0];for(let m=1;m<t.length;m++)d.push(d[m-1]+Math.hypot(t[m][0]-t[m-1][0],t[m][1]-t[m-1][1]));for(let m=0;m<n;m++){const _=s+(a-s)*m/n,p=s+(a-s)*(m+1)/n;for(let A=0;A<t.length-1;A++){const[b,x]=t[A],[g,C]=t[A+1],w=(l[A]||h).clone();e.rib&&m%2&&w.multiplyScalar(e.rib);const y=(ae,$,fe)=>[e.x+Math.cos(fe)*ae,$,e.z+Math.sin(fe)*ae],S=(ae,$,fe,se)=>r===0?[$*Math.max(ae,b,.5),fe]:[$*c,se-o],v=y(b,x,_),M=y(b,x,p),N=y(g,C,p),T=y(g,C,_),H=S(b,_,d[A],x),ie=S(b,p,d[A],x),ge=S(g,p,d[A+1],C),ue=S(g,_,d[A+1],C);b>.001&&i.tri(v,M,N,w,!1,[H,ie,ge],f,u),g>.001&&i.tri(v,N,T,w,!1,[H,ge,ue],f,u)}}}function vd(i,e,t,n){const[s,a,r,o,c,l]=e,h=Math.cos(r),f=Math.sin(r),u=-f,d=h,m=(y,S)=>[s+h*y*o/2+u*S*c/2,t,a+f*y*o/2+d*S*c/2],_=y=>[s+h*y*(o-c)/2,t+l,a+f*y*(o-c)/2],p=m(-1,-1),A=m(1,-1),b=m(1,1),x=m(-1,1),g=_(-1),C=_(1),w=n.clone().multiplyScalar(.92);i.tri(p,A,C,n,!0),i.tri(p,C,g,n,!0),i.tri(b,x,g,n,!0),i.tri(b,g,C,n,!0),i.tri(A,b,C,w,!0),i.tri(x,p,g,w,!0)}function Tv(i,e,t,n,s){const[a,r,o,c,l,h]=e,f=Math.cos(o),u=Math.sin(o),d=-u,m=f,_=(w,y,S=0)=>[a+f*w*c/2+d*y*l/2,t+S,r+u*w*c/2+m*y*l/2],p=_(-1,-1),A=_(1,-1),b=_(1,1),x=_(-1,1),g=_(-1,0,h),C=_(1,0,h);i.tri(p,A,C,n,!0),i.tri(p,C,g,n,!0),i.tri(b,x,g,n,!0),i.tri(b,g,C,n,!0),i.tri(x,p,g,s),i.tri(A,b,C,s)}function Bv(i,e,t,n,s){const[a,r,o,c,l,h]=e,f=Math.cos(o),u=Math.sin(o),d=-u,m=f,_=Math.min(.17*l,2.2),p=Math.min(.75*h+1.4,3.6),A=(g,C,w,y)=>[a+f*g*(c/2-w)+d*C*(l/2-w),t+y,r+u*g*(c/2-w)+m*C*(l/2-w)],b=[A(-1,-1,0,0),A(1,-1,0,0),A(1,1,0,0),A(-1,1,0,0)],x=[A(-1,-1,_,p),A(1,-1,_,p),A(1,1,_,p),A(-1,1,_,p)];for(let g=0;g<4;g++){const C=(g+1)%4;i.tri(b[g],b[C],x[C],n,!0),i.tri(b[g],x[C],x[g],n,!0)}vd(i,[a,r,o,c-2*_,l-2*_,Math.max(.6,.12*l)],t+p,s)}function Rv(i,e,t,n){const s=n/(t/2),a=e/2,r=t/2;if(i===2)return[[0,s,s*r],[0,-s,s*r]];if(i===1)return[[0,s,s*r],[0,-s,s*r],[s,0,s*a],[-s,0,s*a]];const o=Math.min(.17*t,2.2),c=Math.min(.75*n+1.4,3.6),l=c/o,h=Math.max(.6,.12*t)/(r-o),f=[];for(const[u,d,m]of[[0,1,r],[0,-1,r],[1,0,a],[-1,0,a]])f.push([u*l,d*l,m*l]),f.push([u*h,d*h,c+(m-o)*h]);return f}const $n=(i,e,t)=>i[0]*e+i[1]*t+i[2];function Dv(i,e){const t=[];for(let n=0;n<i.length;n++){const s=i[n],a=i[(n+1)%i.length],r=e(s),o=e(a);if(r<=0&&t.push(s),r<0&&o>0||r>0&&o<0){const c=r/(r-o);t.push([s[0]+(a[0]-s[0])*c,s[1]+(a[1]-s[1])*c])}}return t}const Yf=i=>{let e=0;for(let t=0;t<i.length;t++){const n=i[t],s=i[(t+1)%i.length];e+=n[0]*s[1]-s[0]*n[1]}return e/2};function Lv(i,e,t,n,s,a,r,o,c=-1){const[l,h,f,u,d,m]=t,_=Math.cos(f),p=Math.sin(f),A=-p,b=_,x=Rv(n,u,d,m);{let y=1e9;for(const S of x)y=Math.min(y,$n(S,0,0));i.ridge=Math.max(0,y)}const g=(y,S)=>[(y-l)*_+(S-h)*p,(y-l)*A+(S-h)*b],C=(y,S,v)=>[l+_*y+A*S,v,h+p*y+b*S],w=(y,S)=>{let v=1e9;for(const M of x)v=Math.min(v,$n(M,y,S));return Math.max(0,v)};for(const y of e){const S=y.map(v=>{const M=[];for(let N=0;N<v.length;N+=2)M.push(g(v[N],v[N+1]));return M});x.forEach((v,M)=>{const N=n===3&&M%2===1?r:a,T=i.rl;c>=0&&n===3&&M%2===0&&(i.rl=c);const H=Math.hypot(v[0],v[1]),ie=H>1e-6?v[0]/H:0,ge=H>1e-6?v[1]/H:1,ue=Math.sqrt(1+H*H),ae=me=>[-me.x*ge+me.y*ie,(me.x*ie+me.y*ge)*ue,Math.max(0,$n(v,me.x,me.y))],$=S.map(me=>{let j=me;return x.forEach((pe,xe)=>{xe!==M&&j.length&&(j=Dv(j,Me=>$n(v,Me[0],Me[1])-$n(pe,Me[0],Me[1])-1e-6))}),j});if($[0].length<3||Math.abs(Yf($[0]))<.05)return;const fe=$[0].map(me=>new Ye(me[0],me[1])),se=$.slice(1).filter(me=>me.length>=3&&Math.abs(Yf(me))>.05).map(me=>me.map(j=>new Ye(j[0],j[1])));let oe;try{oe=kn.triangulateShape(fe,se)}catch{return}const ve=fe.concat(...se);for(const me of oe){const j=ve[me[0]],pe=ve[me[1]],xe=ve[me[2]];i.tri(C(j.x,j.y,s+Math.max(0,$n(v,j.x,j.y))),C(pe.x,pe.y,s+Math.max(0,$n(v,pe.x,pe.y))),C(xe.x,xe.y,s+Math.max(0,$n(v,xe.x,xe.y))),N,!0,i.tex?[ae(j),ae(pe),ae(xe)]:void 0)}i.rl=T});for(const v of S)for(let M=0;M<v.length;M++){const N=v[M],T=v[(M+1)%v.length],H=[0,1];for(let ae=0;ae<x.length;ae++)for(let $=ae+1;$<x.length;$++){const fe=$n(x[ae],N[0],N[1])-$n(x[$],N[0],N[1]),se=$n(x[ae],T[0],T[1])-$n(x[$],T[0],T[1]);fe*se<0&&H.push(fe/(fe-se))}H.sort((ae,$)=>ae-$);const ie=ae=>[N[0]+(T[0]-N[0])*ae,N[1]+(T[1]-N[1])*ae];let ge=H[0],ue=w(N[0],N[1]);for(let ae=1;ae<H.length;ae++){const $=H[ae];if($-ge<1e-4&&ae<H.length-1)continue;const fe=ie(ge),se=ie($),oe=w(se[0],se[1]);if(Math.max(ue,oe)>.35){const ve=C(fe[0],fe[1],s),me=C(se[0],se[1],s),j=C(se[0],se[1],s+oe),pe=C(fe[0],fe[1],s+ue);if(i.tex){const xe=Math.hypot(T[0]-N[0],T[1]-N[1]),Me=ge*xe,Ie=$*xe,Te=s-i.base;oe>.02&&i.tri(ve,me,j,o,!1,[[Me,Te],[Ie,Te],[Ie,Te+oe]],2,xe),ue>.02&&i.tri(ve,j,pe,o,!1,[[Me,Te],[Ie,Te+oe],[Me,Te+ue]],2,xe)}else oe>.02&&i.tri(ve,me,j,o),ue>.02&&i.tri(ve,j,pe,o)}ge=$,ue=oe}}}return w}function Pv(i,e,t,n,s,a,r){const o=new Set,c=(h,f)=>`${Math.round(h*10)},${Math.round(f*10)}`;for(const h of t)for(const f of h)for(let u=0;u<f.length;u+=2)o.add(c(f[u],f[u+1]));for(const h of e){const f=A=>{const b=[];for(let x=0;x<A.length;x+=2)b.push(new Ye(A[x],A[x+1]));return b},u=f(h[0]),d=h.slice(1).map(f);let m;try{m=kn.triangulateShape(u,d)}catch{continue}const _=u.concat(...d),p=A=>n+(o.has(c(A.x,A.y))?s:0);i.ridge=s;for(const A of m){const b=_[A[0]],x=_[A[1]],g=_[A[2]],C=[b.x,p(b),b.y],w=[x.x,p(x),x.y],y=[g.x,p(g),g.y];let S;if(i.tex){const v=w[0]-C[0],M=w[1]-C[1],N=w[2]-C[2],T=y[0]-C[0],H=y[1]-C[1],ie=y[2]-C[2];let ge=M*ie-N*H,ue=N*T-v*ie,ae=v*H-M*T;ue<0&&(ge=-ge,ue=-ue,ae=-ae);const $=Math.hypot(ge,ue,ae)||1,fe=-ge,se=-ae,oe=Math.hypot(fe,se),ve=oe>1e-6?fe/oe:0,me=oe>1e-6?se/oe:1,j=$/Math.max(ue,.001);S=[C,w,y].map(pe=>[-pe[0]*me+pe[2]*ve,(pe[0]*ve+pe[2]*me)*j,pe[1]-n])}i.tri(C,w,y,a,!0,S)}}const l=i.rl;i.rl=2;for(const h of t)oa(i,h,n+s,r);i.rl=l}let Md=-100;function yn(i,e,t){const n=new Li,s=new Ne(t);for(const r of i)oa(n,r,e,s,!!Nt);const a=new dt(n.geometry(),new ut({vertexColors:!0,depthWrite:!1}));return a.renderOrder=Md++,a.receiveShadow=wt>=2,a.name="flat",nt.add(a),a}function Tc(i){return i.onBeforeCompile=e=>{e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
varying float vBY;`).replace("#include <project_vertex>",`#include <project_vertex>
  
#ifdef USE_INSTANCING
  vBY = (modelMatrix * instanceMatrix * vec4(transformed, 1.0)).y;
#else
  vBY = (modelMatrix * vec4(transformed, 1.0)).y;
#endif`),e.fragmentShader=e.fragmentShader.replace("#include <common>",`#include <common>
varying float vBY;`).replace("#include <color_fragment>",`#include <color_fragment>
  { float k = mod(vBY + 1.2, 3.0); if (k < 0.75) diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.62, 0.36, 0.28), 0.75); }`)},i}function Uv(i,e){const t=i.length/2;if(t<6)return i;const n=new Uint8Array(t);n[0]=1;let s=0,a=-1;for(let c=1;c<t;c++){const l=Math.hypot(i[2*c]-i[0],i[2*c+1]-i[1]);l>a&&(a=l,s=c)}n[s]=1;const r=(c,l)=>{const h=i[2*c],f=i[2*c+1],u=i[2*(l%t)],d=i[2*(l%t)+1],m=Math.hypot(u-h,d-f)||1e-6;let _=-1,p=e;for(let A=c+1;A<l;A++){const b=Math.abs((u-h)*(f-i[2*A+1])-(h-i[2*A])*(d-f))/m;b>p&&(p=b,_=A)}_>=0&&(n[_]=1,r(c,_),r(_,l))};r(0,s),r(s,t);const o=[];for(let c=0;c<t;c++)n[c]&&o.push(i[2*c],i[2*c+1]);return o.length>=6?o:i}const yd=[];function Tn(i,e,t,n,s=""){const a=document.createElement("div");a.className="lbl "+s,a.textContent=i,document.getElementById("labels").appendChild(a),yd.push({el:a,p:new ne(e,t,n)})}const Xs=new ne;function Fv(){for(const i of yd){Xs.copy(i.p).project(Qn);const e=Xs.z<1&&Math.abs(Xs.x)<1.1&&Math.abs(Xs.y)<1.1;i.el.style.display=e?"block":"none",e&&(i.el.style.left=`${(Xs.x+1)/2*window.innerWidth}px`,i.el.style.top=`${(1-Xs.y)/2*window.innerHeight}px`)}}const Nv=(i,e,t)=>{const[n,s]=i.origin,a=Math.cos(s*Math.PI/180)*111320;return[(e-n)*a,-(t-s)*110574]},lt={};function wd(i){const e=lt[i];if(!e)return;zn.maxPolarAngle=Math.max(1.2,e.pol);const t=new ne(e.t[0],Ve(e.t[0],e.t[1])+(e.y||0),e.t[1]),n=new ne(Math.sin(e.az)*Math.sin(e.pol),Math.cos(e.pol),Math.cos(e.az)*Math.sin(e.pol)).multiplyScalar(e.d);zn.target.copy(t),Qn.position.copy(t).add(n),zn.update()}const rt=pi?{ground:"#8e8b92",pilot:"#908c93",water:"#6fa4b2",parks:"#8aa63e",plazas:"#9c9cac",path:"#a5a2aa",service:"#9d9aa2",minor:"#aaa7ae",major:"#77747c",rail:"#5a5052",tram:"#8c2f2c",walls:["#f2e3b8","#e8d394","#efe6cf","#d9c7a0","#e3d6bf","#ecc9a6","#d8d0bf","#f0dcae"],roofs:["#e0963e","#e8b44c","#c87a48","#a8603e","#d98a3a","#9a5a40","#e6a446","#80808c"],flats:["#c4beb8","#b4b0b0","#ccc4ba","#aca8aa"],trees:["#e6b235","#e08a26","#c95a24","#e8c33f","#7fa03c","#557a30","#3f6a2c"]}:null;rt&&dn&&Object.assign(rt,{ground:"#7f746e",pilot:"#81766f",plazas:"#958a80",path:"#9b8f85",service:"#8f847c",minor:"#978c84",major:"#665e5c",parks:"#86a63a",walls:["#f0d9a0","#e6bf74","#f2e4c4","#dcbc8a","#ebc4a8","#e8b48e","#efd690","#f3dcb4","#e2c7a6","#e9a98c"],roofs:["#b85a3c","#a94a34","#c8683e","#9a4a36","#c47458","#cf8a6c","#b9705a","#8e4c3a","#80808c"],flats:["#e4e0d8","#d2cfca","#d8ccb6","#c8c3ba"],trees:["#f0b52a","#e8891f","#d4581f","#b8321e","#efc93a","#8aa83a","#5b8a32","#d97a26","#c9a227"]});function Fn(i,e,t=1){const n=Math.sin(e*12.9898)*43758.5453,s=Math.sin(e*78.233)*12345.6789,a=Math.sin(e*3.7)*9876.54,r=o=>(o-Math.floor(o))*2-1;return i.clone().offsetHSL(r(n)*.012*t,r(s)*.06*t,r(a)*.035*t)}const kv=`
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
}`;async function Qv(){try{const i=Bt,e=await(await fetch(`${i}tex/tex.json`)).json(),t=new ii().setTranscoderPath(`${i}basis/`).detectSupport(xn),n=await t.loadAsync(`${i}tex/walls_${it?512:1024}.ktx2`);n.wrapS=n.wrapT=Jn,n.anisotropy=it?2:4,n.colorSpace=Kt,n.needsUpdate=!0;let s=0;for(const o of n.mipmaps)s+=o.data.byteLength;t.dispose();const a=[0,.55,0,.45,.4,.55,.3,.15,.35,.1,.45],r=new ut({vertexColors:!0,side:Vt});return r.onBeforeCompile=o=>{o.uniforms.tArr={value:n},o.uniforms.uMean={value:e.means.map(c=>new ne(c[0],c[1],c[2]))},o.uniforms.uHue={value:a},o.uniforms.uNight=_d,o.uniforms.uCol={value:dn?1:0},o.vertexShader=`attribute vec4 wa;
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
`+kv+`
`+o.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
diffuseColor.rgb = facade(diffuseColor.rgb);`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
totalEmissiveRadiance += gEmis;`)},{mat:r,mb:s/1048576}}catch(i){return console.warn("facade textures failed, falling back to plain walls",i),null}}async function Ov(){const i=await(await fetch(`${Bt}data/scene.json`)).json();let e=null;try{e=await(await fetch(`${Bt}data/kapalicarsi.json`)).json()}catch{}const t=(E,I)=>{if(!e)return!1;const ce=e.outline;let O=!1;for(let Q=0,K=ce.length-2;Q<ce.length;K=Q,Q+=2)ce[Q+1]>I!=ce[K+1]>I&&E<(ce[K]-ce[Q])*(I-ce[Q+1])/(ce[K+1]-ce[Q+1])+ce[Q]&&(O=!O);return O};if(e){const E=i.buildings.length;i.buildings=i.buildings.filter(I=>{const ce=I.p[0]?.[0];if(!ce)return!0;let O=0,Q=0;for(let K=0;K<ce.length;K+=2)O+=ce[K],Q+=ce[K+1];return!t(O/(ce.length/2),Q/(ce.length/2))}),Ze.__kcFiltered=E-i.buildings.length}try{const I=(await(await fetch(`${Bt}data/bridge_filter.json`)).json()).centroids,ce=i.buildings.length;i.buildings=i.buildings.filter(O=>{const Q=O.p[0]?.[0];if(!Q)return!0;let K=0,P=0;for(let z=0;z<Q.length;z+=2)K+=Q[z],P+=Q[z+1];return K/=Q.length/2,P/=Q.length/2,!I.some(z=>Math.hypot(z[0]-K,z[1]-P)<.5)}),Ze.__bridgeFiltered=ce-i.buildings.length}catch{}try{const I=(await(await fetch(`${Bt}data/taksim_building_filter.json`)).json()).centroids,ce=i.buildings.length;i.buildings=i.buildings.filter(O=>{const Q=O.p[0]?.[0];if(!Q)return!0;let K=0,P=0;for(let z=0;z<Q.length;z+=2)K+=Q[z],P+=Q[z+1];return K/=Q.length/2,P/=Q.length/2,!I.some(z=>Math.hypot(z[0]-K,z[1]-P)<3)}),Ze.__taksimBldFiltered=ce-i.buildings.length}catch{}try{const I=(await(await fetch(`${Bt}data/underground_filter.json`)).json()).centroids,ce=i.buildings.length;i.buildings=i.buildings.filter(O=>{const Q=O.p[0]?.[0];if(!Q)return!0;let K=0,P=0;for(let z=0;z<Q.length;z+=2)K+=Q[z],P+=Q[z+1];return K/=Q.length/2,P/=Q.length/2,!I.some(z=>Math.abs(z[0]-K)<.5&&Math.abs(z[1]-P)<.5)}),Ze.__ugFiltered=ce-i.buildings.length}catch{}try{const E=await(await fetch(`${Bt}data/height_fix.json`)).json();let I=0;for(const ce of i.buildings){const O=ce.p[0]?.[0];if(!O)continue;let Q=0,K=0;for(let P=0;P<O.length;P+=2)Q+=O[P],K+=O[P+1];Q/=O.length/2,K/=O.length/2;for(const P of E.fix)Math.abs(P.c[0]-Q)<.5&&Math.abs(P.c[1]-K)<.5&&(ce.h=P.h,P.k!=null&&(ce.k=P.k,ce.hip=null),I++)}Ze.__heightFix=I}catch{}try{const E=await(await fetch(`${Bt}data/dolmabahce_fix.json`)).json(),I=E.filter_centroids||[],ce=i.buildings.length;i.buildings=i.buildings.filter(O=>{const Q=O.p[0]?.[0];if(!Q)return!0;let K=0,P=0;for(let z=0;z<Q.length;z+=2)K+=Q[z],P+=Q[z+1];return K/=Q.length/2,P/=Q.length/2,!I.some(z=>Math.hypot(z[0]-K,z[1]-P)<8)});for(const O of E.buildings)i.buildings.push(O);Ze.__dolmaFix={removed:ce-(i.buildings.length-E.buildings.length),added:E.buildings.length,dome:(E.dome||[]).length},Ze.__dolmaDome=E.dome||[],Ze.__dolmaRings=E.buildings.map(O=>O.p[0][0])}catch(E){console.warn("dolmabahce_fix skipped",E)}try{Zt=await(await fetch(`${Bt}data/wm14_besiktas.json`)).json();for(const E of Zt.buildings)i.buildings.push(E);for(const E of Zt.parks||[])i.parks.push(E);for(const E of Zt.plazas||[])i.plazas.push(E);for(const E of Zt.trees||[])i.trees.push(E);Ze.__wm14Bjk={b:Zt.buildings.length,t:(Zt.trees||[]).length}}catch{Zt=null}try{const E=await(await fetch(`${Bt}data/wm11_building_filter.json`)).json(),I=i.buildings.length,ce=E.detail||E.centroids.map(K=>({c:K,mode:"all"})),O=new Set,Q=i.buildings.map((K,P)=>{const z=K.p[0]?.[0];if(!z)return null;let W=0,Y=0;for(let F=0;F<z.length;F+=2)W+=z[F],Y+=z[F+1];return{i:P,x:W/(z.length/2),z:Y/(z.length/2),h:K.h,a:Math.abs(li(z))}});for(const K of ce){const P=Q.filter(z=>z&&Math.abs(z.x-K.c[0])<.6&&Math.abs(z.z-K.c[1])<.6);P.length&&(K.mode==="one"&&P.length>=2?(P.sort((z,W)=>W.a-z.a||W.h-z.h||z.i-W.i),P.slice(1).forEach(z=>O.add(z.i))):K.mode!=="one"&&P.forEach(z=>O.add(z.i)))}i.buildings=i.buildings.filter((K,P)=>!O.has(P)),Ze.__wm11BldFiltered=I-i.buildings.length}catch{}let n=null;try{n=await(await fetch(new URL("data/taksim17d.json",location.href).href)).json();const E=i.buildings.length;i.buildings=FE(i.buildings,n),Ze.__taksim17c={hidden:E-i.buildings.length}}catch{n=null}let s=null;try{s=await(await fetch(`${Bt}data/akaretler17c.json`)).json();const E=i.buildings.length;i.buildings=PE(i.buildings,s),Ze.__akaretler={units:s.units.length,hidden:E-i.buildings.length}}catch{s=null}let a=[],r=null,o=null;try{o=await(await fetch(`${Bt}data/wm16.json`)).json()}catch{o=null}const c=await QE(),l=[],h=[[7469,-3489,-961,"parking aisle inside the Blachernae land wall (OSM w1421690648)"],[6556,-4818,3295,"service under the Yedikule land wall"],[7316,-4576,331,"service along the moat scarp, Topkapı–Vatan"],[8304,-4808,1493,"service through the moat scarp, Silivrikapı north"],[7788,-176,2355,"service through the Kumkapı sea wall"],[7370,-3292,-1061,"service through the wall at Tekfur Sarayı (no sourced gate)"],[4892,-4705,3472,"path through the outer wall, Yedikule south"],[89,-3348.7,-1797.9,"Haliç bridge-flagged side link at water level (wm17f M2)"],[573,-2995.8,-2473.6,"Haliç bridge-flagged side link at water level (wm17f M2)"],[3158,-3353.6,-1845.4,"Haliç bridge-flagged side link at water level (wm17f M2)"]];if(c){const E=new Set;for(const[I,ce,O]of h){const Q=c.ways[I];Q&&Math.hypot(Q[5][0]-ce,Q[5][1]-O)<2&&E.add(I)}for(const I of E)h.find(ce=>ce[0]===I)[3].startsWith("Haliç")&&l.push(c.ways[I]);c.ways=c.ways.filter((I,ce)=>!E.has(ce)),Ze.__wallDrop=E.size}if(c)try{const E=await(await fetch(`${Bt}data/walls.json`)).json(),I=o?.walls_clip?.hide||[],ce=E.boxes.filter(O=>!I.some(Q=>Math.abs(Q[0]-O[0])<.05&&Math.abs(Q[1]-O[2])<.05)).concat(o?.walls_clip?.add||[]);{const O=[];for(const[Q,K]of[[-3663,-746],[-4426,205]]){let P=null,z=1e9;for(const R of E.boxes)if(R[7]==="wall"){const k=Math.hypot(R[0]-Q,R[2]-K);k<z&&(z=k,P=R)}if(!P||z>200)continue;const W=P[6],Y=Math.cos(W),F=-Math.sin(W),G=(Q-P[0])*Y+(K-P[2])*F,te=P[0]+Y*G,ee=P[2]+F*G;for(const R of[-1,1])O.push([te+Y*R*11,ee+F*R*11,11,13,20,W])}O.push([-3250.4,-1161,28,13,17,.9]),r={bx:ce,tp:E.tpolys||[],yt:E.ytowers||[],gx:O}}Ze.__wallNudge=jE(c,ce),a=qE(c,ce),Ze.__wallSolid=a.length}catch{}if(c&&n)for(const[E,I]of n.portals||[])for(const ce of c.ways){const O=ce[5],Q=Math.hypot(O[O.length-2]-E,O[O.length-1]-I)<1,K=Math.hypot(O[0]-E,O[1]-I)<1;if(!Q&&!K)continue;const P=[];for(let W=0;W<O.length;W+=2)P.push(O[W],O[W+1]);if(K){const W=[];for(let Y=P.length-2;Y>=0;Y-=2)W.push(P[Y],P[Y+1]);P.splice(0,P.length,...W)}let z=aa;for(;P.length>=4&&z>0;){const W=P.length,Y=P[W-4],F=P[W-3],G=P[W-2],te=P[W-1],ee=Math.hypot(G-Y,te-F);if(ee>z+1)P[W-2]=G+(Y-G)*z/ee,P[W-1]=te+(F-te)*z/ee,z=0;else if(W>4)P.splice(W-2,2),z-=ee;else break}if(K){const W=[];for(let Y=P.length-2;Y>=0;Y-=2)W.push(P[Y],P[Y+1]);P.splice(0,P.length,...W)}ce[5]=P}let f=null;try{f=await(await fetch(new URL("data/halic17e.json",location.href).href)).json()}catch{f=null}if(f){const E=[];for(const O of f.ways){const Q=O.p;for(let K=0;K+3<Q.length;K+=2){const P=Math.hypot(Q[K+2]-Q[K],Q[K+3]-Q[K+1]),z=(Q[K+2]-Q[K])/P,W=(Q[K+3]-Q[K+1])/P;for(let Y=0;Y<=P;Y+=2)for(const F of[-O.w/2,0,O.w/2])E.push(Q[K]+z*Y-W*F,Q[K+1]+W*Y+z*F)}}const I=(O,Q,K)=>{let P=!1;for(let z=0,W=O.length-2;z<O.length;W=z,z+=2){const Y=O[z],F=O[z+1],G=O[W],te=O[W+1];F>K!=te>K&&Q<(G-Y)*(K-F)/(te-F)+Y&&(P=!P)}return P},ce=i.buildings.length;i.buildings=i.buildings.filter(O=>{const Q=O.p?.[0]?.[0];if(!Q||(O.g||0)!==0)return!0;let K=1e9,P=-1e9,z=1e9,W=-1e9;for(let Y=0;Y<Q.length;Y+=2)K=Math.min(K,Q[Y]),P=Math.max(P,Q[Y]),z=Math.min(z,Q[Y+1]),W=Math.max(W,Q[Y+1]);for(let Y=0;Y<E.length;Y+=2)if(E[Y]>K&&E[Y]<P&&E[Y+1]>z&&E[Y+1]<W&&I(Q,E[Y],E[Y+1]))return!1;return!0}),Ze.__halicHidden=ce-i.buildings.length}let u=[];try{u=(await(await fetch(new URL("data/historic17e.json",location.href).href)).json()).items.map(E=>[E[0],E[1]])}catch{u=[]}c&&OE(i,c,u),Da("scene");const d=en?await Qv():null;if(d&&(Ze.__texMB=Math.round(d.mb*100)/100),wt>=7&&Yn.get("terrain")!=="0"){Nt=await(await fetch(`${Bt}data/terrain.json`)).json();try{Na=await(await fetch(`${Bt}data/terrain_far.json`)).json()}catch{}try{pn=await(await fetch(`${Bt}data/wm14_terrain_bjk.json`)).json()}catch{}document.getElementById("cr-dem").textContent="Kıyı+arazi/coast+terrain: Copernicus DEM GLO-30 (© DLR, Airbus DS)"}if(Nt){const E={ayasofya:100,sultanahmet:95,yenicami:70,rustempasa:30,galata:14,nusretiye:32,ayatriada:28,stantoine:60,suleymaniye:120};for(const I of i.landmarks){const ce=E[I.id];if(!ce)continue;const O=I.model?I.model.x:I.label[0],Q=I.model?I.model.z:I.label[1];on(O,Q,ce,30)}for(const[I,ce,O]of[[179,1526,38],[209,1648,22],[190,1686,16]])on(I,ce,O,20);for(const[I,ce]of[[-302.3,1943.1],[-326.7,1972.1],[-349.2,2000.8],[-260.4,1783.6]])on(I,ce,7,10);if(e){const I=e.outline;let ce=0,O=0;for(let Q=0;Q<I.length;Q+=2)ce+=I[Q],O+=I[Q+1];on(ce/(I.length/2),O/(I.length/2),150,40)}on(504,-1493,125,35),on(739,-1482,55,35),on(621,-1426,45,35),on(797,-1625,70,35),on(652,-1671,90,35),on(1097.9,-1594.9,75.7,25),on(1106,-1845.1,44.9,25),on(778,-1446.1,56.7,25),on(810.8,-1502.9,40.3,25),on(944.9,-1542.1,39.3,25),on(753.5,-1786.2,57.2,25),on(793.6,-1931.2,49.6,25),on(768.7,-1253.4,50.1,25),on(794.7,-1202.2,38.8,25),on(1294.3,-1762.9,90,25),Ze.__H=Ve,Ze.__pads=go.length}const[m,_,p,A]=i.bounds_m,b=(m+p)/2,x=(_+A)/2,g=(E,I)=>Nv(i,E,I),C=g(28.9784,41.0066),w=g(28.9741,41.0256),y=g(28.9858,41.0372);lt.overview=it?{t:[b+100,x+250],d:12500,pol:.55,az:0}:{t:[b+150,x+250],d:10500,pol:.72,az:-.3},lt.overview_east=it?{t:[0,250],d:8800,pol:.55,az:0}:{t:[150,250],d:8200,pol:.72,az:-.3},lt.sultanahmet={t:[C[0],C[1]],d:it?820:700,pol:.95,az:it?-.8:.8},lt.galata={t:[w[0],w[1]],d:it?420:360,pol:1,az:.35};const S=g(28.965,41.0168);if(lt.suleymaniye={t:[S[0],S[1]],d:it?900:760,pol:.95,az:.25},lt.yc_top={t:[-574.7,732.1],d:it?400:250,pol:.12,az:.7245},lt.gk_eye={t:[-402,-236],y:40,d:it?190:150,pol:1.2,az:.4},lt.gk_apple={t:[-402,-236],y:30,d:it?300:230,pol:.72,az:.4},lt.gk_ground={t:[-402,-236],y:36,d:it?330:270,pol:1.4,az:-.25},lt.gm_beyazit={t:[-1300,1300],y:20,d:it?1300:1e3,pol:1,az:-.3},lt.br_galata={t:[-600,250],y:8,d:it?900:700,pol:1.15,az:.9},lt.ch_pera={t:[-150,-250],y:15,d:it?420:330,pol:1,az:.2},lt.fatih={t:[-2900,600],y:20,d:it?1500:1150,pol:.95,az:-.2},lt.edirnekapi={t:[-4e3,-320],y:60,d:it?1e3:780,pol:1,az:-.9},lt.gate_edk={t:[-3771,-862],y:30,d:it?420:340,pol:1.05,az:-.9},lt.gate_tpk={t:[-4426,205],y:30,d:it?420:340,pol:1.05,az:-.9},lt.tekfur={t:[-3260,-1170],y:25,d:it?420:340,pol:1.05,az:-.9},lt.seawall={t:[-1800,2650],y:10,d:it?1500:1200,pol:1,az:.4},lt.kc_top={t:[-905,1386],y:40,d:it?900:520,pol:.02,az:-Math.PI/2},lt.kc_top_n={t:[-905,1386],y:40,d:it?900:520,pol:.02,az:0},lt.kc_obl={t:[-860,1400],y:40,d:it?700:520,pol:.8,az:-Math.PI/2-.25},lt.asia={t:[2600,600],y:20,d:it?3200:2600,pol:.95,az:-.9},lt.yedikule={t:[-4700,3380],y:15,d:it?800:620,pol:1,az:-.7},lt.surlar={t:[-4600,1400],y:15,d:it?1700:1300,pol:1.05,az:-1.25},lt.gm_taksim={t:[425,-1490],y:20,d:it?520:400,pol:1.05,az:.4},lt.eminonu={t:[-725,700],d:it?820:700,pol:.95,az:it?.6:.35},lt.taksim={t:[y[0],y[1]],d:it?700:600,pol:.95,az:3.4},lt.match={t:[C[0]+150,C[1]-60],d:it?560:470,pol:.82,az:.55},lt.roofs={t:[w[0]-120,w[1]+60],d:it?260:220,pol:.85,az:.6},en){lt.sultanahmet.pol=.82,lt.galata.pol=.85,lt.match.pol=.74,lt.roofs.pol=.78,lt.suleymaniye.pol=.82,lt.taksim.pol=.82,lt.overview.pol=it?.82:.88;for(const E of Object.values(lt))E.d/=Ks}wd("overview");const v=(E,I)=>E>1764&&E<3640&&I>-3440&&I<-1300,M=E=>{E.onBeforeCompile=I=>{I.vertexShader=`varying vec3 vWp;
`+I.vertexShader.replace("#include <project_vertex>",`#include <project_vertex>
 vWp = (modelMatrix * vec4(transformed, 1.0)).xyz;`),I.fragmentShader=`varying vec3 vWp;
`+I.fragmentShader.replace("#include <clipping_planes_fragment>",`#include <clipping_planes_fragment>
 if (vWp.x > 1764.0 && vWp.x < 3640.0 && vWp.z > -3440.0 && vWp.z < -1300.0) discard;`)},E.customProgramCacheKey=()=>"bjk-hide-flat"},N=new ut({color:rt?dn?rt.water:rt.ground:wt>=2?"#ece6da":"#e9e4da"});M(N);const T=new dt(new ua(4e4,4e4),N);T.material.depthWrite=!1,T.renderOrder=-200,T.name="ground",T.rotation.x=-Math.PI/2,T.receiveShadow=wt>=2,nt.add(T);const H=new dt(new ua(p-m-8,A-_-8),new ut({color:rt?rt.pilot:wt>=2?"#e9e1d0":"#e4ddd0"}));if(H.material.depthWrite=!1,H.renderOrder=-150,H.rotation.x=-Math.PI/2,H.position.set(b,.02,x),H.receiveShadow=wt>=2,Nt){const E={...Nt,step:Nt.step/2,nx:Nt.nx*2-1,nz:Nt.nz*2-1},I=[],ce=[];for(let K=0;K<E.nz;K++)for(let P=0;P<E.nx;P++)I.push(E.x0+P*E.step,Ve(E.x0+P*E.step,E.z0+K*E.step)+.02,E.z0+K*E.step);for(let K=0;K<E.nz-1;K++)for(let P=0;P<E.nx-1;P++){const z=K*E.nx+P,W=z+1,Y=z+E.nx,F=Y+1,G=E.x0+P*E.step,te=E.z0+K*E.step;G<m||G+E.step>p||te<_||te+E.step>A||ce.push(z,Y,W,W,Y,F)}const O=new It;O.setAttribute("position",new pt(I,3)),O.setIndex(ce),O.computeVertexNormals();const Q=new dt(O,new ut({color:rt?rt.pilot:"#e9e1d0",depthWrite:!1}));if(Q.renderOrder=-150,Q.receiveShadow=!0,Q.name="terrain",H.name="pilot",H.renderOrder=-160,nt.add(Q),nt.add(H),pn){const K={...pn,step:pn.step/2,nx:pn.nx*2-1,nz:pn.nz*2-1},P=[],z=[];for(let F=0;F<K.nz;F++)for(let G=0;G<K.nx;G++){const te=K.x0+G*K.step,ee=K.z0+F*K.step;P.push(te,Ve(te,ee)+.02,ee)}for(let F=0;F<K.nz-1;F++)for(let G=0;G<K.nx-1;G++){const te=K.x0+G*K.step,ee=K.z0+F*K.step;if(Ve(te,ee)<.8&&Ve(te+K.step,ee+K.step)<.8)continue;const R=F*K.nx+G,k=R+1,B=R+K.nx,X=B+1;z.push(R,B,k,k,B,X)}const W=new It;W.setAttribute("position",new pt(P,3)),W.setIndex(z),W.computeVertexNormals();const Y=new dt(W,new ut({color:rt?rt.pilot:"#e9e1d0",depthWrite:!0}));Y.renderOrder=-155,Y.receiveShadow=!0,Y.name="terrain_bjk",nt.add(Y)}}else nt.add(H);if(Nt){const I=(F,G)=>F>=m&&F<=p&&G>=_&&G<=A,ce=(F,G)=>!!pn&&F>=pn.x0&&F<=pn.x0+pn.step*(pn.nx-1)&&G>=pn.z0&&G<=pn.z0+pn.step*(pn.nz-1),O=new Set,Q=(F,G)=>F*100003+G,K=10;for(const F of["major","minor","service"])for(const G of i.roads[F]||[])for(const te of G)for(let ee=0;ee<te.length;ee+=6){const R=te[ee],k=te[ee+1];if(I(R,k)&&!(R>p-60||k<_+60))continue;const B=Math.floor(R/30),X=Math.floor(k/30);for(let V=-K;V<=K;V++)for(let le=-K;le<=K;le++)O.add(Q(B+V,X+le))}const P=[],z=[],W=new Map,Y=(F,G)=>{const te=Q(F,G);let ee=W.get(te);return ee===void 0&&(ee=P.length/3,W.set(te,ee),P.push(F*30,Ve(F*30,G*30)+.02,G*30)),ee};for(const F of O){const G=Math.round(F/100003),te=F-G*100003,ee=G*30,R=te*30,k=ee+30/2,B=R+30/2;if(I(k,B)||ce(k,B)||Ve(ee,R)<.8&&Ve(ee+30,R+30)<.8&&Ve(ee+30,R)<.8&&Ve(ee,R+30)<.8)continue;const X=Y(G,te),V=Y(G+1,te),le=Y(G,te+1),Z=Y(G+1,te+1);z.push(X,le,V,V,le,Z)}if(z.length){const F=new It;F.setAttribute("position",new pt(P,3)),F.setIndex(z),F.computeVertexNormals();const G=new dt(F,new ut({color:rt?rt.pilot:"#e9e1d0",depthWrite:!1}));G.renderOrder=-150,G.receiveShadow=!0,G.name="terrain_outer",nt.add(G)}Ze.__outerTerrain=z.length/6}const ie=E=>{const I=E[0];let ce=0,O=0;for(let Q=0;Q<I.length;Q+=2)ce+=I[Q],O+=I[Q+1];return Math.abs(li(I))<3e4&&ea(ce/(I.length/2),O/(I.length/2))>1.5},ge=i.water.filter(E=>!ie(E)),ue=i.water.filter(ie);Ze.__pools=ue.length;{const E=new Li,I=new Ne(rt?rt.water:"#8ec3d8"),ce=(K,P)=>v(K,P)&&Ve(K,P)>1.5,O=K=>{const P=[];for(let z=0;z<K.length;z+=2)P.push(new Ye(K[z],K[z+1]));return P};for(const K of ge){const P=O(K[0]),z=K.slice(1).map(O);let W;try{W=kn.triangulateShape(P,z)}catch{continue}const Y=P.concat(...z);for(const F of W){const G=Y[F[0]],te=Y[F[1]],ee=Y[F[2]],R=(G.x+te.x+ee.x)/3,k=(G.y+te.y+ee.y)/3;ce(R,k)||ce(G.x,G.y)||ce(te.x,te.y)||ce(ee.x,ee.y)||E.tri([G.x,-1.1,G.y],[te.x,-1.1,te.y],[ee.x,-1.1,ee.y],I,!0)}}const Q=new dt(E.geometry(),new ut({vertexColors:!0,depthWrite:!1}));Q.renderOrder=Md++,Q.receiveShadow=wt>=2,Q.name="sea",nt.add(Q)}yn(ue,.05,"#6fa8bb");{const E=[],I=[],ce=new Ne("#a39a8c"),O=new Ne("#d6cebf"),Q=(W,Y,F,G,te)=>{E.push(...W,...Y,...F,...W,...F,...G);for(let ee=0;ee<6;ee++)I.push(te.r,te.g,te.b)},K=(W,Y)=>Math.abs(W-m)<2||Math.abs(W-p)<2||Math.abs(Y-_)<2||Math.abs(Y-A)<2||Math.abs(Math.abs(W)-1764)<2||Math.abs(Math.abs(Y)-2709)<2;for(const W of i.water)W.forEach((Y,F)=>{const G=ue.includes(W),te=(li(Y)>0?1:-1)*(F===0?1:-1);for(let ee=0;ee<Y.length;ee+=2){const R=(ee+2)%Y.length,k=Y[ee],B=Y[ee+1],X=Y[R],V=Y[R+1],le=X-k,Z=V-B,re=Math.hypot(le,Z),U=(k+X)/2,q=(B+V)/2;if(re<.5||K(k,B)&&K(X,V)||U<m+3||U>p-3||q<_+3||q>A-3)continue;const he=Math.max(0,Ve(k,B))+(G?.45:.34),Ce=Math.max(0,Ve(X,V))+(G?.45:.34),De=G?he-.5:-1.1,Fe=G?Ce-.5:-1.1,ke=G?.6:1,Le=Z/re*te*1.6,Ue=-le/re*te*1.6;Q([k,De,B],[X,Fe,V],[X,Ce,V],[k,he,B],ce),Q([k,he,B],[X,Ce,V],[X+Le*ke,Ce,V+Ue*ke],[k+Le*ke,he,B+Ue*ke],O),G&&Q([k+Le*ke,he,B+Ue*ke],[X+Le*ke,Ce,V+Ue*ke],[X+Le*ke,Ce-.6,V+Ue*ke],[k+Le*ke,he-.6,B+Ue*ke],ce)}});const P=new It;P.setAttribute("position",new pt(E,3)),P.setAttribute("color",new pt(I,3)),P.computeVertexNormals();const z=new dt(P,new ut({vertexColors:!0,side:Vt}));z.receiveShadow=wt>=2,z.name="quay",nt.add(z)}try{const E=await(await fetch(`${Bt}data/context.json`)).json();if(Zt){const ee=new Set(Zt.ctx_skip||[]);E.polys=E.polys.filter((R,k)=>!ee.has(k)).concat(Zt.ctx_add||[])}const[I,ce,O,Q]=E.bbox_m,K=E.fade,P=new Ne(rt?rt.pilot:"#e4ddd0"),z=new Ne(rt?dn?rt.water:rt.ground:"#e9e4da"),W=new Ne,Y=[],F=[];for(const ee of E.polys){const R=Z=>{const re=[];for(let U=0;U<Z.length;U+=2)re.push(new Ye(Z[U],Z[U+1]));return re},k=R(ee[0]),B=ee.slice(1).map(R),X=k.concat(...B),V=[],le=(Z,re,U,q)=>{const he=Z.distanceTo(re),Ce=re.distanceTo(U),De=U.distanceTo(Z),Fe=Math.max(he,Ce,De);if(!(Math.max(Z.x,re.x,U.x)>1764&&Math.min(Z.x,re.x,U.x)<3640&&Math.max(Z.y,re.y,U.y)>-3440&&Math.min(Z.y,re.y,U.y)<-1300)||q>18||Fe<=25){V.push([Z,re,U]);return}if(he===Fe){const Le=Z.clone().lerp(re,.5);le(Z,Le,U,q+1),le(Le,re,U,q+1)}else if(Ce===Fe){const Le=re.clone().lerp(U,.5);le(Z,re,Le,q+1),le(Z,Le,U,q+1)}else{const Le=U.clone().lerp(Z,.5);le(Z,re,Le,q+1),le(Le,re,U,q+1)}};for(const Z of kn.triangulateShape(k,B))le(X[Z[0]],X[Z[2]],X[Z[1]],0);for(const Z of V)for(const re of Z){const U=Math.max(I-re.x,0,re.x-O),q=Math.max(ce-re.y,0,re.y-Q),Ce=Math.min(1,Math.max(0,2.2*Math.hypot(U,q)/K));W.copy(P).lerp(z,.3+.7*Ce*Ce*(3-2*Ce));const De=(v(re.x,re.y)?Ve(re.x,re.y):0)+.01;Y.push(re.x,De,re.y),F.push(W.r,W.g,W.b)}}const G=new It;G.setAttribute("position",new pt(Y,3)),G.setAttribute("color",new pt(F,3)),G.computeVertexNormals();const te=new dt(G,new ut({vertexColors:!0,depthWrite:!1}));if(te.renderOrder=-170,te.name="ctx",te.receiveShadow=wt>=2,nt.add(te),Zt&&Zt.land){const ee=new Li,R=new Ne(rt?rt.pilot:"#e4ddd0");Xa=!0;for(const B of Zt.land)oa(ee,B,.01,R,!!Nt);Xa=!1;const k=new dt(ee.geometry(),new ut({vertexColors:!0,depthWrite:!1}));k.renderOrder=-170,k.name="wm14_bjk_land",k.receiveShadow=wt>=2,nt.add(k)}}catch(E){console.warn("context land skipped",E)}try{const E=(await(await fetch(`${Bt}data/far.json`)).json()).blocks,I=new Set((Zt&&Zt.far_skip||[]).map(Z=>`${Z[0]},${Z[1]}`)),ce=new Li,O=new Ne("#cdbfae"),Q=new Ne("#b9876a"),K=new Ne(rt?dn?rt.water:rt.ground:"#e9e4da"),P=new Ne,z=new Ne,W=new Set,Y=(Z,re)=>Math.floor(Z/10)*100003+Math.floor(re/10);let F=1e9,G=-1e9,te=1e9,ee=-1e9;if(c)for(const Z of c.ways){const re=Z[5];for(let U=0;U+3<re.length;U+=2){const q=Math.hypot(re[U+2]-re[U],re[U+3]-re[U+1]),he=Math.max(1,Math.ceil(q/6));for(let Ce=0;Ce<=he;Ce++){const De=re[U]+(re[U+2]-re[U])*Ce/he,Fe=re[U+1]+(re[U+3]-re[U+1])*Ce/he;W.add(Y(De,Fe)),F=Math.min(F,De),G=Math.max(G,De),te=Math.min(te,Fe),ee=Math.max(ee,Fe)}}}const R=(Z,re,U)=>{for(let q=Math.floor((Z-U)/10);q<=Math.floor((Z+U)/10);q++)for(let he=Math.floor((re-U)/10);he<=Math.floor((re+U)/10);he++)if(W.has(q*100003+he))return!0;return!1},k=(Z,re,U)=>{let q=!1;for(let he=0,Ce=Z.length-2;he<Z.length;Ce=he,he+=2){const De=Z[he],Fe=Z[he+1],ke=Z[Ce],Le=Z[Ce+1];Fe>U!=Le>U&&re<(ke-De)*(U-Fe)/(Le-Fe)+De&&(q=!q)}return q};let B=0;const X=(Z,re,U,q,he,Ce,De,Fe,ke=[])=>{for(let Le=Math.floor(re/40)*40;Le<U;Le+=40)for(let Ue=Math.floor(q/40)*40;Ue<he;Ue+=40){const at=Le>F-800&&Le<G+800&&Ue>te-800&&Ue<ee+800,Ge=at?40:80;if(!at&&(Le/40%2!==0||Ue/40%2!==0))continue;const qe=Le+Ge/2,At=Ue+Ge/2;if(!k(Z,qe,At)||ke.some(Oe=>k(Oe,qe,At))||at&&R(qe,At,22)||R(qe,At,12)||[[Le,Ue],[Le+Ge,Ue],[Le,Ue+Ge],[Le+Ge,Ue+Ge],[qe,Ue],[qe,Ue+Ge],[Le,At],[Le+Ge,At]].some(([Oe,D])=>R(Oe,D,6))||Le>m-40&&Le<p&&Ue>_-40&&Ue<A||qe>1764&&qe<3460&&At>-3260&&At<-1480)continue;const Ot=Ge*.14,Wt=[Le+Ot,Ue+Ot,Le+Ge-Ot,Ue+Ot,Le+Ge-Ot,Ue+Ge-Ot,Le+Ot,Ue+Ge-Ot];let Ae=1e9;for(let Oe=0;Oe<8;Oe+=2)Ae=Math.min(Ae,Ve(Wt[Oe],Wt[Oe+1]));if(Ae=Math.max(0,Ae),Ae<.8&&Ve(qe,At)<.8)continue;const Se=.7+.6*((Le*73856093^Ue*19349663)>>>0)%1e3/1e3;Wn(ce,[[Wt]],Ae-.5,Math.max(0,Ve(qe,At))+Ce*Se,De,Fe),B++}},V=(Z,re)=>{let U=re;for(let q=0;q<Z.length;q+=2)U=Math.min(U,Math.max(0,Ve(Z[q],Z[q+1])));return U-.5};for(const Z of E){const re=Z.p;if(it&&Math.abs(li(re))<2500)continue;let U=0,q=0;for(let Ge=0;Ge<re.length;Ge+=2)U+=re[Ge],q+=re[Ge+1];if(U/=re.length/2,q/=re.length/2,I.has(`${re[0]},${re[1]}`)||U>1764&&U<3460&&q>-3260&&q<-1480)continue;const he=Math.max(m-U,0,U-p),Ce=Math.max(_-q,0,q-A),De=Math.min(1,Math.hypot(he,Ce)/4200);P.copy(O).lerp(K,.15+.75*De),z.copy(Q).lerp(K,.15+.75*De);const Fe=Math.max(0,Ve(U,q));let ke=1e9,Le=-1e9,Ue=1e9,at=-1e9;for(let Ge=0;Ge<re.length;Ge+=2)ke=Math.min(ke,re[Ge]),Le=Math.max(Le,re[Ge]),Ue=Math.min(Ue,re[Ge+1]),at=Math.max(at,re[Ge+1]);if(Math.max(Le-ke,at-Ue)>300){X(re,ke,Le,Ue,at,Z.h*(1-.4*De),P,z);continue}{let Ge=R(U,q,6);for(let qe=0;!Ge&&qe<re.length;qe+=2)Ge=R((U+re[qe])/2,(q+re[qe+1])/2,5);for(let qe=Math.floor(ke/10);!Ge&&qe<=Math.floor(Le/10);qe++)for(let At=Math.floor(Ue/10);!Ge&&At<=Math.floor(at/10);At++)W.has(qe*100003+At)&&k(re,qe*10+5,At*10+5)&&(Ge=!0);if(Ge){X(re,ke,Le,Ue,at,Z.h*(1-.4*De),P,z);continue}}Wn(ce,[[re]],V(re,Fe),Fe+Z.h*(1-.4*De),P,z)}if(Zt)for(const Z of Zt.far_clip||[]){const re=Z.rings[0];let U=0,q=0,he=0;for(let Ue=0;Ue<re.length;Ue+=2)U+=re[Ue],q+=re[Ue+1],he++;const Ce=Math.max(0,Ve(U/he,q/he));let De=1e9,Fe=-1e9,ke=1e9,Le=-1e9;for(let Ue=0;Ue<re.length;Ue+=2)De=Math.min(De,re[Ue]),Fe=Math.max(Fe,re[Ue]),ke=Math.min(ke,re[Ue+1]),Le=Math.max(Le,re[Ue+1]);if(Math.max(Fe-De,Le-ke)>300){X(re,De,Fe,ke,Le,Z.h,O,Q,Z.rings.slice(1));continue}{let Ue=!1;for(let at=Math.floor(De/10);!Ue&&at<=Math.floor(Fe/10);at++)for(let Ge=Math.floor(ke/10);!Ue&&Ge<=Math.floor(Le/10);Ge++)W.has(at*100003+Ge)&&k(re,at*10+5,Ge*10+5)&&!Z.rings.slice(1).some(qe=>k(qe,at*10+5,Ge*10+5))&&(Ue=!0);if(Ue){X(re,De,Fe,ke,Le,Z.h,O,Q,Z.rings.slice(1));continue}}Wn(ce,[Z.rings],V(re,Ce),Ce+Z.h,O,Q)}const le=new dt(ce.geometry(),new ut({vertexColors:!0,side:Vt}));le.receiveShadow=wt>=2,le.name="far",nt.add(le),s&&nt.add(UE(s,Ve)),n&&nt.add(NE(n,Ve)),Ze.__far=E.length,Ze.__farCarpet=B}catch(E){console.warn("far context skipped",E)}try{const E=(await(await fetch(`${Bt}data/mosques.json`)).json()).mosques;if(Zt)for(const ee of Zt.mosques||[])E.push(ee);if(n){const ee=E.findIndex(R=>R.n==="Taksim Camii");ee>=0&&E.splice(ee,1)}if(c){const ee=(B,X,V)=>{let le=1e9;for(const Z of c.ways){if(Z[4])continue;const re=Z[5],U=Z[1]/2;for(let q=0;q+3<re.length;q+=2){const he=re[q],Ce=re[q+1],De=re[q+2]-he,Fe=re[q+3]-Ce;if(Math.min(he,he+De)>B+V+20||Math.max(he,he+De)<B-V-20||Math.min(Ce,Ce+Fe)>X+V+20||Math.max(Ce,Ce+Fe)<X-V-20)continue;const ke=De*De+Fe*Fe||1,Le=Math.max(0,Math.min(1,((B-he)*De+(X-Ce)*Fe)/ke));le=Math.min(le,Math.hypot(he+De*Le-B,Ce+Fe*Le-X)-U)}}return le};let R=0;for(const B of E){const X=ee(B.x,B.z,B.r);X>0&&B.r*1.02>X-.4&&(B.r=Math.max(2.5,(X-.4)/1.02),R++)}let k=0;for(const B of E)for(const X of B.m){if(ee(X[0],X[1],2)>=X[3]*1.05+.3)continue;const V=B.x-X[0],le=B.z-X[1],Z=Math.hypot(V,le)||1;for(let re=.5;re<=Math.min(10,Z);re+=.5){const U=X[0]+V/Z*.5,q=X[1]+le/Z*.5;if(X[0]=U,X[1]=q,ee(U,q,2)>=X[3]*1.05+.3)break}k++}Ze.__mosqueLaneFit={domes:R,minarets:k}}const I=E.reduce((ee,R)=>ee+R.m.length,0),ce=new ot,O=new qt,Q=new ne,K=new ne,P=new ut({color:"#8e939b"}),z=new ut({color:"#e4dccd"}),W=new jt(new Ni(1,12,4,0,Math.PI*2,0,Math.PI/2),P,E.length),Y=new jt(new Nn(1,1,1,14,1,!0),z,E.length),F=new jt(new Nn(.85,1,1,8),z,Math.max(1,I)),G=new jt(new Zi(1,1,8),P,Math.max(1,I));let te=0;E.forEach((ee,R)=>{const k=Ve(ee.x,ee.z),B=.35*ee.r;Y.setMatrixAt(R,ce.compose(Q.set(ee.x,k+ee.y+B/2,ee.z),O,K.set(ee.r*1.02,B,ee.r*1.02))),W.setMatrixAt(R,ce.compose(Q.set(ee.x,k+ee.y+B,ee.z),O,K.set(ee.r,ee.r*.92,ee.r)));for(const[X,V,le,Z]of ee.m){const re=Ve(X,V),U=le*.17;F.setMatrixAt(te,ce.compose(Q.set(X,re-.8+(le-U+.8)/2,V),O,K.set(Z,le-U+.8,Z))),G.setMatrixAt(te,ce.compose(Q.set(X,re+le-U/2,V),O,K.set(Z*1.05,U,Z*1.05))),te++}}),F.count=G.count=te;for(const ee of[W,Y,F,G])ee.castShadow=ee.receiveShadow=wt>=2,ee.frustumCulled=!1,nt.add(ee)}catch(E){console.warn("mosque placeholders skipped",E)}try{const E=await(await fetch(`${Bt}data/bridges.json`)).json(),I=[],ce=[],O=new Ne("#77706c"),Q=new Ne("#c8bfb2"),K=new Ne("#7d766f"),P=(X,V,le,Z)=>{I.push(...X,...V,...le);for(let re=0;re<3;re++)ce.push(Z.r,Z.g,Z.b)},z=X=>{const V=le=>{const Z=sn.clamp(le,0,1);return Z*Z*(3-2*Z)};return X>=530?.45+6.05*V((588-X)/52):X<=236?.45+6.05*V((X-186)/50):null};for(const X of E.bridges)for(const V of X.strips){const le=V.p,Z=[];for(let Fe=0;Fe<le.length;Fe+=2)Z.push(new Ye(le[Fe],le[Fe+1]));kn.isClockWise(Z)&&Z.reverse();let re=0,U=0;for(const Fe of Z)re+=Fe.x,U+=Fe.y;const q=Math.max(0,Ve(re/Z.length,U/Z.length));if(q>2&&V.y<3&&X.id!=="w280961352")continue;const he=Fe=>{const ke=X.id==="w280961352"?z(Fe):null;return ke??V.y+q},Ce=he(U),De=Ce-Math.max(1.4,V.t);for(const Fe of kn.triangulateShape(Z,[])){const[ke,Le,Ue]=Fe.map(at=>Z[at]);P([ke.x,he(ke.y),ke.y],[Ue.x,he(Ue.y),Ue.y],[Le.x,he(Le.y),Le.y],O),P([ke.x,he(ke.y)-1.6,ke.y],[Le.x,he(Le.y)-1.6,Le.y],[Ue.x,he(Ue.y)-1.6,Ue.y],K)}for(let Fe=0;Fe<Z.length;Fe++){const ke=Z[Fe],Le=Z[(Fe+1)%Z.length],Ue=he(ke.y),at=he(Le.y);P([ke.x,Ue-1.6,ke.y],[Le.x,at-1.6,Le.y],[Le.x,at,Le.y],Q),P([ke.x,Ue-1.6,ke.y],[Le.x,at,Le.y],[ke.x,Ue,ke.y],Q)}}const W=new It;W.setAttribute("position",new pt(I,3)),W.setAttribute("color",new pt(ce,3)),W.computeVertexNormals();const Y=new dt(W,new ut({vertexColors:!0}));Y.castShadow=Y.receiveShadow=wt>=2,nt.add(Y);const F={pier:"#b3aa9d",tower:"#ecebe8",cable:"#d9dadc",canopy:"#cfd3d6"},G=new Gt(1,1,1),te=new ot,ee=new qt,R=new ai,k=new ne,B=new ne;for(const X of Object.keys(F)){const V=E.boxes.filter(Z=>Z[7]===X&&!(X==="pier"&&Ve(Z[0],Z[2])>.3));if(!V.length)continue;const le=new jt(G,new ut({color:F[X]}),V.length);V.forEach((Z,re)=>{const[U,q,he,Ce,De,Fe,ke]=Z,Le=X==="cable";R.set(0,ke,Le?-Z[8]:0,"YZX"),ee.setFromEuler(R);const Ue=Math.max(0,Ve(U,he));le.setMatrixAt(re,te.compose(k.set(U,(Le?q:q+De/2)+Ue,he),ee,B.set(Ce,De,Fe)))}),le.castShadow=X!=="cable"&&wt>=2,le.receiveShadow=wt>=2,nt.add(le)}}catch(E){console.warn("bridges skipped",E)}if(f)try{const E=od(f,Ve),I=new Gt(1,1,1),ce=new ot,O=new qt,Q=new ne,K=new ne,P=new ne(0,1,0),z=[["#a9a59e",[]],["#5a5d61",[]],["#c9c6bf",[]],["#b3aa9d",[]]];E.forEach((W,Y)=>{const F=W.w+1.2;z[0][1].push([W.x,W.y-.85,W.z,W.len+.3,1.6,F,W.rot]),z[1][1].push([W.x,W.y+.02,W.z,W.len+.3,.08,W.w,W.rot]);for(const G of[-1,1]){const te=-Math.sin(W.rot)*G*(F/2-.15),ee=-Math.cos(W.rot)*G*(F/2-.15);z[2][1].push([W.x+te,W.y+.5,W.z+ee,W.len+.3,1,.3,W.rot])}if(Y%6===3&&W.y-W.g>3){const G=W.y-1.6-Math.min(W.g,0)+1;z[3][1].push([W.x,Math.min(W.g,0)-1+G/2,W.z,2.2,G,W.w-1,W.rot])}});for(const[W,Y]of z){if(!Y.length)continue;const F=new jt(I,new ut({color:W}),Y.length);F.name="halic-deck",Y.forEach(([G,te,ee,R,k,B,X],V)=>F.setMatrixAt(V,ce.compose(Q.set(G,te,ee),O.setFromAxisAngle(P,X),K.set(R,k,B)))),F.castShadow=F.receiveShadow=wt>=2,nt.add(F)}Ze.__halicDeck=E.length}catch(E){console.warn("Haliç deck skipped",E)}try{const E=(await(await fetch(`${Bt}data/churches.json`)).json()).churches,I=new ot,ce=new qt,O=new ne,Q=new ne,K=new ne(0,1,0),P=new ut({color:"#ddd3c2"}),z=new ut({color:"#8b9097"}),W=new ut({color:"#9c5a4d"}),Y=new ut({color:"#6f6a68"}),F=(k,B,X,V)=>{if(!X.length)return;const le=new jt(k,B,X.length);X.forEach((Z,re)=>{V(Z),le.setMatrixAt(re,I.compose(O,ce,Q))}),le.castShadow=le.receiveShadow=wt>=2,nt.add(le)},G=E.filter(k=>k.k!=="west"),te=E.filter(k=>k.k==="arm"),ee=E.filter(k=>k.k==="orth"),R=E.filter(k=>k.k==="west");F(new Nn(1,1,1,10),P,G,k=>{ce.identity(),O.set(k.x,Ve(k.x,k.z)+k.y+k.r*.6,k.z),Q.set(k.r,k.r*1.2,k.r)}),F(new Ni(1,10,5,0,Math.PI*2,0,Math.PI/2),z,ee,k=>{ce.identity(),O.set(k.x,Ve(k.x,k.z)+k.y+k.r*1.2,k.z),Q.set(k.r*1.05,k.r*.95,k.r*1.05)}),F(new Zi(1,1,10),Y,te,k=>{ce.identity(),O.set(k.x,Ve(k.x,k.z)+k.y+k.r*1.2+k.r*.6,k.z),Q.set(k.r*1.1,k.r*1.2,k.r*1.1)}),F(new Gt(1,1,1),P,R,k=>{ce.setFromAxisAngle(K,k.ry);const B=k.h-k.w*1.1;O.set(k.x,Ve(k.x,k.z)+B/2,k.z),Q.set(k.w,B,k.w)}),F(new Zi(Math.SQRT1_2,1,4).rotateY(Math.PI/4),W,R,k=>{ce.setFromAxisAngle(K,k.ry),O.set(k.x,Ve(k.x,k.z)+k.h-k.w*.55,k.z),Q.set(k.w*1.08,k.w*1.1,k.w*1.08)})}catch(E){console.warn("church placeholders skipped",E)}try{const E=await(await fetch(`${Bt}data/walls.json`)).json();if(o?.walls_clip){const ee=o.walls_clip.hide;E.boxes=E.boxes.filter(R=>!ee.some(k=>Math.abs(k[0]-R[0])<.05&&Math.abs(k[1]-R[2])<.05)).concat(o.walls_clip.add)}const I={wall:"#c9b99a",outer:"#c2b293",scarp:"#b3a487",tower:"#bfae8e",otower:"#c7b796"},ce=new Gt(1,1,1),O=new ot,Q=new qt,K=new ne(0,1,0),P=new ne,z=new ne;yn(E.moat,.115,"#8a9d5a");for(const ee of Object.keys(I)){const R=E.boxes.filter(X=>X[7]===ee);if(!R.length)continue;const k=[];for(const X of R){const[V,le,Z,re,U,q,he]=X,Ce=Math.cos(he),De=-Math.sin(he);let Fe=0;for(let Le=0;Le<=6;Le++){const Ue=(Le/6-.5)*re;Fe=Math.max(Fe,Math.abs(Ve(V+Ce*Ue,Z+De*Ue)-Ve(V,Z)))}const ke=Math.min(24,Math.max(1,Math.ceil(Fe/.6),Math.ceil(re/40)));for(let Le=0;Le<ke;Le++){const Ue=((Le+.5)/ke-.5)*re,at=V+Ce*Ue,Ge=Z+De*Ue,qe=Ve(at-Ce*re/ke/2,Ge-De*re/ke/2),At=Ve(at+Ce*re/ke/2,Ge+De*re/ke/2),Ot=Ve(at,Ge),Wt=Math.min(qe,At,Ot)-2.5;k.push([at,Wt,Ge,re/ke+.3,Ot+le+U-Wt,q,he])}}const B=new jt(ce,Tc(new ut({color:I[ee]})),k.length);B.name="aud:wall",k.forEach((X,V)=>{const[le,Z,re,U,q,he,Ce]=X;Q.setFromAxisAngle(K,Ce),B.setMatrixAt(V,O.compose(P.set(le,Z+q/2,re),Q,z.set(U,q,he)))}),B.castShadow=B.receiveShadow=wt>=2,nt.add(B)}const W=new Li,Y=new Ne("#bfae8e"),F=new Ne("#e6e0d4");for(const ee of E.tpolys){let R=-1e9,k=1e9;for(let B=0;B<ee.p.length;B+=2){const X=Ve(ee.p[B],ee.p[B+1]);R=Math.max(R,X),k=Math.min(k,X)}Wn(W,[[ee.p]],k-2.5,R+ee.h,ee.marble?F:Y,(ee.marble?F:Y).clone().multiplyScalar(.92))}const G=new dt(W.geometry(),new ut({vertexColors:!0,side:Vt}));G.castShadow=G.receiveShadow=wt>=2,nt.add(G);const te=new jt(new Nn(1,1.06,1,12),new ut({color:"#c6b596"}),E.ytowers.length);E.ytowers.forEach(([ee,R,k,B],X)=>{Q.identity();let V=1e9;for(let Z=0;Z<8;Z++)V=Math.min(V,Ve(ee+Math.cos(Z*.785)*k,R+Math.sin(Z*.785)*k));V-=1;const le=Ve(ee,R)+B-V;te.setMatrixAt(X,O.compose(P.set(ee,V+le/2,R),Q,z.set(k,le,k)))}),te.name="aud:ytower",te.castShadow=te.receiveShadow=wt>=2,nt.add(te),Tn("Kara Surları",-4600,30,1200,"district"),Tn("Yedikule",-4700,34,3380)}catch(E){console.warn("walls skipped",E)}try{const E=[],I=new ot,ce=new qt,O=new ne(0,1,0),Q=new ne,K=new ne,P=(Z,re,U,q,he,Ce,De,Fe,ke=0)=>{const Le=Z.index?Z.toNonIndexed():Z.clone();Le.deleteAttribute("uv"),Le.applyMatrix4(I.compose(Q.set(U,q,he),ce.setFromAxisAngle(O,ke),K.set(Ce,De,Fe)));const Ue=new Ne(re),at=Le.attributes.position.count,Ge=new Float32Array(at*3);for(let qe=0;qe<at;qe++)Ge.set([Ue.r,Ue.g,Ue.b],qe*3);Le.setAttribute("color",new Xt(Ge,3)),E.push(Le)},z=new Gt(1,1,1),W=new Nn(1,1,1,10),Y=new Zi(1,1,10),F=new Zi(.71,1,4,1).rotateY(Math.PI/4),G=new Ni(1,12,4,0,Math.PI*2,0,Math.PI/2),te="#d8cdbb",ee="#8e939b",R="#b9876a",k="#c9b99a",B=(Z,re,U,q,he,Ce=0,De=te,Fe=0)=>P(z,De,Z,Fe+he/2,re,U,he,q,Ce),X=(Z,re,U,q,he,Ce=0)=>{const De=Ve(Z,re);B(Z,re,U*2.6,U*2.6,U*1.1,Ce,te,De),P(G,ee,Z,De+U*1.1,re,U,U*.9,U);for(let Fe=0;Fe<q;Fe++){const ke=Ce+Math.PI/4+Fe*Math.PI/2,Le=Z+Math.cos(ke)*U*1.9,Ue=re-Math.sin(ke)*U*1.9;P(W,te,Le,De+he*.44,Ue,1.3,he*.88,1.3),P(Y,ee,Le,De+he*.94,Ue,1.4,he*.12,1.4)}},V=await(await fetch(`${Bt}data/walls.json`)).json();for(const[Z,re]of[[-3663,-746],[-4426,205]]){let U=null,q=1e9;for(const at of V.boxes)if(at[7]==="wall"){const Ge=Math.hypot(at[0]-Z,at[2]-re);Ge<q&&(q=Ge,U=at)}if(!U||q>200)continue;const he=U[6],Ce=Math.cos(he),De=-Math.sin(he),Fe=(Z-U[0])*Ce+(re-U[2])*De,ke=U[0]+Ce*Fe,Le=U[2]+De*Fe,Ue=Ve(ke,Le);for(const at of[-1,1]){const Ge=ke+Ce*at*11,qe=Le+De*at*11;B(Ge,qe,11,13,20,he,k,Ve(Ge,qe)),P(F,"#a89a82",Ge,Ve(Ge,qe)+21.5,qe,11,3,13,he)}B(ke,Le,11.5,6,4,he,k,Ue+9),B(ke,Le,11,6.6,1.2,he,R,Ue+8.4)}{const U=Ve(-3250.4,-1161);B(-3250.4,-1161,28,13,17,.9,"#c4a488",U),B(-3250.4,-1161,28.4,13.4,.8,.9,R,U+6),B(-3250.4,-1161,28.4,13.4,.8,.9,R,U+11.5),Tn("Tekfur Sarayı",-3250.4,U+26,-1161)}{const[Z,re]=[3099.2,1736],U=200,q=265;B(Z,re-q/2,U,24,20),B(Z,re+q/2,U,24,20),B(Z-U/2,re,24,q,20),B(Z+U/2,re,24,q,20);for(const he of[-1,1])for(const Ce of[-1,1])B(Z+he*U/2,re+Ce*q/2,16,16,30),P(F,ee,Z+he*U/2,33,re+Ce*q/2,16,6,16);Tn("Selimiye Kışlası",Z,50,re)}X(3132.8,1537,10,2,45),X(3107.6,-376,9,2,45),X(3023.6,-143.7,12,2,50);{const[Z,re]=[2108.2,265.4];B(Z,re,22,14,6),P(W,te,Z,15,re,4.5,18,4.5),P(Y,ee,Z,24+2.5,re,5,5,5),P(W,te,Z,30,re,1,2,1),Tn("Kız Kulesi",Z,40,re)}{const[Z,re]=[3393.2,2941.3],U=.55;B(Z,re,95,36,24,U,"#cdb79a");for(const q of[-1,1]){const he=Z+Math.cos(U)*q*44,Ce=re-Math.sin(U)*q*44;B(he,Ce,14,14,30,U,"#cdb79a"),P(Y,"#6f6a66",he,34,Ce,9,8,9)}Tn("Haydarpaşa Garı",Z,48,re)}Tn("Dolmabahçe",1812,Ve(1812,-1722)+40,-1722);for(const[Z,re,U]of[["Selimiye Camii",3132.8,1537],["Mihrimah Sultan",3107.6,-376],["Yeni Valide",3023.6,-143.7]])(!it||Z!=="Yeni Valide")&&Tn(Z,re,58,U);const le=ma(E);if(E.forEach(Z=>Z.dispose()),le){le.computeVertexNormals();const Z=new dt(le,Tc(new ut({vertexColors:!0})));Z.castShadow=Z.receiveShadow=wt>=2,Z.name="wm5ph",nt.add(Z),Ze.__wm5ph=le.attributes.position.count/3}}catch(E){console.warn("wm5 placeholders skipped",E)}if(e)try{const E=CE(e,Ve,it);nt.add(E.grp);for(const I of E.detail)ka.push(I);Ze.__kc=E.tris,Tn("Kapalıçarşı",-900,Ve(-900,1390)+30,1390,"district")}catch(E){console.warn("kapalicarsi skipped",E)}if(wt>=3){let E={};try{E=await(await fetch(`${Bt}data/landuse.json`)).json()}catch{}yn(E.railway||[],.08,"#857a70"),yn(E.construction||[],.085,"#a8957e"),yn(E.religious||[],.09,"#cdbfa8"),yn(i.parks,.12,rt?rt.parks:"#bcd59a"),yn(E.cemetery||[],.125,"#7f9469"),yn(E.pitch||[],.13,"#5f9e4f"),yn(i.plazas,.14,rt?rt.plazas:"#e8dcc6");try{const ce=await(await fetch(`${Bt}data/taksim_plaza.json`)).json();yn(ce.plazas||[],.145,rt?rt.plazas:"#e8dcc6")}catch{}const I=i.roads;yn(I.path||[],.16,rt?rt.path:"#f4ecdd"),yn(I.service||[],.18,rt?rt.service:"#f7f2ea"),yn(I.minor||[],.2,rt?rt.minor:"#fbf8f2"),yn(I.major||[],.22,rt?rt.major:"#f2d9a6"),yn(I.rail||[],.26,rt?rt.rail:"#8d8a86"),yn(I.tram||[],.28,rt?rt.tram:"#b2473e")}Da("before_buildings");const ae=i.palette,$=(rt?rt.walls:ae.walls).map(E=>new Ne(E)),fe=(rt?rt.roofs:ae.roofs).map(E=>new Ne(E)),se=(rt?rt.flats:ae.flats).map(E=>new Ne(E));let oe=0;const ve=[],me=[],j=E=>{const I=Math.sin(E*91.17)*43758.5453;return I-Math.floor(I)},pe=(E,I,ce,O,Q)=>{const[K,P,z,W,Y]=E.hip,F=Math.cos(z),G=Math.sin(z),te=-G,ee=F,R=E.p[0][0],k=(X,V)=>{let le=!1;for(let Z=0,re=R.length-2;Z<R.length;re=Z,Z+=2){const U=R[Z],q=R[Z+1],he=R[re],Ce=R[re+1];q>V!=Ce>V&&X<(he-U)*(V-q)/(Ce-q)+U&&(le=!le)}return le},B=it?.08:.18;if(j(I*3.1)<B&&W>6){const X=(j(I*5.3)-.5)*W*.6,V=(j(I*7.7)<.5?-1:1)*Y*.12,le=K+F*X+te*V,Z=P+G*X+ee*V;k(le,Z)&&ve.push([le,O+Q(X,V),Z,z])}if(!it&&(ce===2||ce===3)&&Y>7&&W>8&&j(I*11.3)<.16){const X=j(I*13.9)<.5?-1:1,V=W>16?2:1;for(let le=0;le<V;le++){const Z=V===1?0:(le===0?-.22:.22)*W,re=X*(Y/2-Math.min(2.4,Y*.28)),U=K+F*Z+te*re,q=P+G*Z+ee*re;k(U,q)&&me.push([U,O+Q(Z,re),q,z+(X>0?0:Math.PI)])}}},xe=["#7d828c","#6f7a80","#8a8a90","#5f6b70"].map(E=>new Ne(E)),Me=new Ne("#e6ddcf"),Ie=new Ne("#d6ccbb"),Te=[],Qe=(E,I,ce)=>{let O=!1;for(let Q=0,K=E.length-2;Q<E.length;K=Q,Q+=2){const P=E[Q],z=E[Q+1],W=E[K],Y=E[K+1];z>ce!=Y>ce&&I<(W-P)*(ce-z)/(Y-z)+P&&(O=!O)}return O},je=(E,I,ce)=>{const O=E.p[0]?.[0];if(!O)return;const Q=Math.abs(li(O));if(Q<60||j(I*15.1)>(it?.4:.7))return;let K=0,P=0;for(let G=0;G<O.length;G+=2)K+=O[G],P+=O[G+1];const z=K/(O.length/2),W=P/(O.length/2),Y=Q>300&&!it?2:1,F=Math.sqrt(Q)*.22;for(let G=0;G<Y;G++){const te=j(I*3.7+G)*6.283,ee=z+Math.cos(te)*F*j(I+G*5.1),R=W+Math.sin(te)*F*j(I*2.9+G);Qe(O,ee,R)&&Te.push([ee,ce,R,G===0&&j(I*19.7)<.05?2:j(I*7.3+G)<.55?0:1,te])}},ze=new Map,ht=(dn?["#f0e2c4","#ddd6cc","#f3ede0","#e8d3a4","#ecd8bc","#d6cfc4","#efcfb4","#d4dccc","#f0d890","#b8553a","#a84c36"]:["#efe8d8","#dedcd6","#f3f0ea","#e6d8b8","#e9e2d2","#d4d3cf","#ecd9c4","#d6dcd4","#efe0a8","#b5583f","#a9533e"]).map(E=>new Ne(E)),be=["#8c7c6a","#a3907a","#7a6e62","#c4aa82","#d6bd94","#b59b7a","#c86a40","#9a8672"].map(E=>new Ne(E)),xt=[.11,.11,.11,.1,.1,.08,.06,.05,.04,.12,.12],tt=new Map,$e=Yn.get("lod")==="0"?1e9:it?1800:2400;for(const E of i.buildings){let I=ze.get(E.c);I||(I=new Li,I.tex=!!d,ze.set(E.c,I));{let W=tt.get(E.c);W||(W=new Li,tt.set(E.c,W));const Y=E.p[0]?.[0],F=Y?Math.abs(li(Y)):0;if(Y&&(F>30||E.h>12)){let G=1e9,te=0,ee=0;if(Nt)for(let le=0;le<Y.length;le+=2)G=Math.min(G,Ve(Y[le],Y[le+1])),te+=Y[le],ee+=Y[le+1];const R=Nt?Ve(te/(Y.length/2),ee/(Y.length/2)):0,k=E.m>0?R+E.m:Nt?G-.5:0,B=$[E.w%$.length],X=E.hip?fe[E.r%(fe.length-1)]:se[E.r%se.length];let V=E.p[0];if(E.hip&&Y.length>8&&!E.clipHip){const[le,Z,re,U,q]=E.hip,he=Math.cos(re)*U/2,Ce=Math.sin(re)*U/2,De=-Math.sin(re)*q/2,Fe=Math.cos(re)*q/2;V=[[le-he-De,Z-Ce-Fe,le+he-De,Z+Ce-Fe,le+he+De,Z+Ce+Fe,le-he+De,Z-Ce+Fe]],li(V[0])*li(Y)<0&&(V[0]=[V[0][6],V[0][7],V[0][4],V[0][5],V[0][2],V[0][3],V[0][0],V[0][1]])}else Y.length>10&&(V=[Uv(Y,it?3:2)]);Wn(W,[V],k,R+E.h+(E.hip?1.5:0),B,X)}}let ce=0,O=0;if(Nt&&E.p[0]?.[0]){const W=E.p[0][0];let Y=0,F=0,G=0;O=1e9;for(let te=0;te<W.length;te+=2)Y+=W[te],F+=W[te+1],G++,O=Math.min(O,Ve(W[te],W[te+1]));ce=Ve(Y/G,F/G),O-=.5}const Q=E.m>0?ce+E.m:O,K=ce+E.h;if(wt<2){Wn(I,E.p,Q,K,Me,Ie);continue}oe++;let P=rt?Fn($[(E.w+oe)%$.length],oe,.7):$[E.w],z=rt?E.k??(E.hip?1:0):E.hip?1:0;if(d){const W=E.p[0]?.[0]||[0,0];let Y=0,F=0;for(let Z=0;Z<W.length;Z+=2)Y+=W[Z],F+=W[Z+1];const G=Y/(W.length/2),te=F/(W.length/2),R=i.origin[1]-te/110574<41.0195,k=Math.hypot(G-C[0],te-C[1])<900,B=z===4||E.h>=19||z===0&&E.h>=12,X=j(oe*2.3);I.wl=B?2:R?X<.06&&E.h<12?1:X<.12?4:X<.17?5:0:X<.45?3:X<.6?5:0,I.rl=E.g?7:6,I.base=Q,I.wh=K-Q,I.seed=Math.floor(j(oe*1.7)*997)/10;const V=Math.hypot(G-w[0],te-w[1])<750,le=!k&&E.h>=11&&I.wl!==4&&I.wl!==5;if(I.st=(le?8:0)+(le&&j(oe*4.1)<.55?1:0)+(le&&j(oe*5.9)<.3?2:0)+(E.h>=6&&j(oe*6.7)<(le?.6:R?.3:.5)?4:0),le){let Z=j(oe*8.3),re=0;for(;re<ht.length-1&&Z>xt[re];)Z-=xt[re],re++;P=Fn(ht[re],oe,.5),(dn?E.h>=18&&!R&&!V&&z!==0&&j(oe*9.7)<.7:E.h>=14&&z!==0&&j(oe*9.7)<.7)&&(z=4,I.rl=2)}if(dn&&!R&&!B&&z>=1&&z<=5){const Z=j(oe*17.3);Z<.12?(E.g=1,I.rl=7):(E.g=0,I.rl=6,Z<.32&&(z=4,I.rl=2))}if(dn&&V&&!B){const Z=j(oe*10.9);P=Fn(be[Math.floor(j(oe*11.3)*be.length)],oe,.5),Z<.55&&(I.wl=j(oe*13.1)<.6?3:4)}}if(E.col&&(P=new Ne(E.col),d&&(I.wl=0,I.st=0,I.rl=2)),E.hip&&z>=1&&z<=3&&(to||!E.clipHip)){let W=rt?Fn(fe[(E.r+(oe%3===0?1:0))%(fe.length-1)],oe+7):fe[E.r%fe.length];if(dn&&!E.g&&(W=Fn(fe[(E.r+oe)%(fe.length-1)],oe+7,1.4),j(oe*12.7)<.14&&W.lerp(new Ne("#9a8a80"),.3)),rt&&E.g&&(W=Fn(xe[oe%xe.length],oe+11,.6)),rt&&to){Wn(I,E.p,Q,K,P,null);const Y=z===3&&!E.g?Fn(xe[(oe>>2)%xe.length],oe+5,.6):W,F=Lv(I,E.p,E.hip,z,K,Y,z===3?W.clone().multiplyScalar(.9):W,P,E.g?-1:7);pe(E,oe,z,K,F)}else Wn(I,E.p,Q,K,P,se[0]),z===2?Tv(I,E.hip,K,W,P):z===3?Bv(I,E.hip,K,rt&&!E.g?Fn(xe[(oe>>2)%xe.length],oe+5,.6):W,W.clone().multiplyScalar(.9)):vd(I,E.hip,K,W)}else if(rt&&to&&z===5&&E.bd&&E.in){Wn(I,E.p,Q,K,P,null);const W=E.g?Fn(xe[oe%xe.length],oe+11,.6):Fn(fe[E.r%(fe.length-1)],oe+7);Pv(I,E.bd,E.in,K,E.rh||2,W,Fn(se[E.r%se.length],oe+3))}else if(rt&&z===4){Wn(I,E.p,Q,K+.9,P,null),I.rl=2;for(const W of E.p)oa(I,W,K,Fn(se[E.r%se.length],oe+3));dn&&je(E,oe,K)}else I.rl=2,dn&&E.h>=9&&je(E,oe,K),Wn(I,E.p,Q,K,P,rt?Fn(se[E.r%se.length],oe+3):se[E.r%se.length])}const Ke=new ut({vertexColors:!0,side:rt?Vt:Ai}),ft=new ut({vertexColors:!0,side:rt?Vt:Ai});if(ve.length||me.length){const E=new ot,I=new qt,ce=new ne(1,1,1),O=new ne(0,1,0),Q=new ne,K=new Gt(.8,2.2,.8).translate(0,.6,0),P=new jt(K,new ut({color:"#b98068"}),ve.length);ve.forEach((B,X)=>{I.setFromAxisAngle(O,-B[3]),E.compose(Q.set(B[0],B[1],B[2]),I,ce),P.setMatrixAt(X,E)}),P.castShadow=P.receiveShadow=!0,P.computeBoundingSphere(),nt.add(P),ka.push(P);const z=new Gt(1.7,1.6,2).translate(0,.5,.3),W=new It,Y=1.05,F=1.3,G=2.1,te=-.8,ee=1.45;W.setAttribute("position",new pt([-Y,F,te,-Y,F,ee,0,G,ee,-Y,F,te,0,G,ee,0,G,te,Y,F,ee,Y,F,te,0,G,te,Y,F,ee,0,G,te,0,G,ee,-Y,F,ee,Y,F,ee,0,G,ee].map(B=>B),3)),W.computeVertexNormals();const R=new jt(z,new ut({color:"#efe1bd"}),me.length),k=new jt(W,new ut({color:"#c8703c",side:Vt}),me.length);me.forEach((B,X)=>{I.setFromAxisAngle(O,-B[3]),E.compose(Q.set(B[0],B[1]-.4,B[2]),I,ce),R.setMatrixAt(X,E),k.setMatrixAt(X,E)});for(const B of[R,k])B.castShadow=B.receiveShadow=!0,B.computeBoundingSphere(),nt.add(B),ka.push(B);Ze.__bits={chimneys:ve.length,dormers:me.length}}if(Te.length){const E=new ot,I=new qt,ce=new ne(1,1,1),O=new ne(0,1,0),Q=new ne,K=[new Gt(1.7,1.4,1.7).translate(0,.7,0),new Gt(2.6,2.3,2.2).translate(0,1.15,0),new Ni(2.6,12,5,0,Math.PI*2,0,Math.PI/2)],P=["#a9a8a6","#cfc4b4","#8794a4"];for(let z=0;z<3;z++){const W=Te.filter(F=>F[3]===z);if(!W.length)continue;const Y=new jt(K[z],new ut({color:P[z]}),W.length);W.forEach((F,G)=>{I.setFromAxisAngle(O,F[4]),E.compose(Q.set(F[0],F[1],F[2]),I,ce),Y.setMatrixAt(G,E)}),Y.castShadow=Y.receiveShadow=!0,Y.computeBoundingSphere(),nt.add(Y),ka.push(Y)}Ze.__boxes=Te.length}for(const[E,I]of ze){const ce=I.geometry();ce.computeBoundingSphere();const O=ce.boundingSphere.center.clone(),Q=new dt(ce,d?d.mat:ft);Q.castShadow=Q.receiveShadow=wt>=2;const K=tt.get(E);if(!K||!K.pos.length||$e>1e8){nt.add(Q);continue}ce.translate(-O.x,-O.y,-O.z);const P=K.geometry(),z=Xf(O.x,O.z,m,_);z.bld.push(P.clone()),P.translate(-O.x,-O.y,-O.z);const W=new dt(P,Ke);W.receiveShadow=wt>=2;const Y=new uo;Y.position.copy(O),Y.addLevel(Q,0),Y.addLevel(W,$e),nt.add(Y),z.members.push(Y)}Cd=$e;for(const E of ar.values())if(E.bld.length>1){const I=ma(E.bld);if(E.bld.forEach(O=>O.dispose()),E.bld=[],!I)continue;I.computeBoundingSphere(),E.c.copy(I.boundingSphere.center),E.r=I.boundingSphere.radius;const ce=new dt(I,Ke);ce.receiveShadow=wt>=2,ce.visible=!1,nt.add(ce),E.merged.push(ce)}else E.merged=[];if(Ze.__lod={far:$e,chunks:ze.size},Da("before_trees"),wt>=4&&dn&&Yn.get("xtrees")!=="0"){const E=[],I=i.trees.slice();for(let F=0;F<I.length;F++){const G=I[F];if(G[2]*=1.15+.4*j(F*1.3),G[4]===2){G.length=4;continue}if(j(F*2.1)<.6){const te=j(F*3.3)*6.283,ee=4+3*j(F*4.7);E.push([G[0]+Math.cos(te)*ee,G[1]+Math.sin(te)*ee,.9+.5*j(F*5.9),(G[3]+1+F)%9])}}const ce=new Map,O=40,Q=(F,G)=>Math.floor(F/O)*100003+Math.floor(G/O);for(const F of i.buildings){const G=F.p[0]?.[0];if(!G)continue;let te=1e9,ee=-1e9,R=1e9,k=-1e9;for(let B=0;B<G.length;B+=2)te=Math.min(te,G[B]),ee=Math.max(ee,G[B]),R=Math.min(R,G[B+1]),k=Math.max(k,G[B+1]);for(let B=Math.floor(te/O);B<=Math.floor(ee/O);B++)for(let X=Math.floor(R/O);X<=Math.floor(k/O);X++){const V=B*100003+X;(ce.get(V)||ce.set(V,[]).get(V)).push(G)}}const K=(F,G,te)=>{for(const[ee,R]of[[0,0],[te,0],[-te,0],[0,te],[0,-te]])for(const k of ce.get(Q(F+ee,G+R))||[])if(Qe(k,F+ee,G+R))return!0;return!1};let P=0;for(const F of i.buildings)for(const G of F.p)for(let te=1;te<G.length;te++){const ee=G[te],R=Math.abs(li(ee));if(R<80)continue;let k=0,B=0;for(let re=0;re<ee.length;re+=2)k+=ee[re],B+=ee[re+1];const X=k/(ee.length/2),V=B/(ee.length/2),le=Math.min(4,1+Math.floor(R/250)),Z=Math.sqrt(R)*.25;for(let re=0;re<le;re++){P++;const U=j(P*1.9)*6.283,q=X+Math.cos(U)*Z*(re?1:0),he=V+Math.sin(U)*Z*(re?1:0);Qe(ee,q,he)&&E.push([q,he,.85+.35*j(P),P%9])}}const z=i.water.map(F=>{const G=F[0];let te=1e9,ee=1e9,R=-1e9,k=-1e9;for(let B=0;B<G.length;B+=2)te=Math.min(te,G[B]),R=Math.max(R,G[B]),ee=Math.min(ee,G[B+1]),k=Math.max(k,G[B+1]);return[te,ee,R,k]}),W=(F,G)=>i.water.some((te,ee)=>{const R=z[ee];if(F<R[0]||F>R[2]||G<R[1]||G>R[3])return!1;let k=!1;for(const B of te)for(let X=0,V=B.length-2;X<B.length;V=X,X+=2)B[X+1]>G!=B[V+1]>G&&F<(B[V]-B[X])*(G-B[X+1])/(B[V+1]-B[X+1])+B[X]&&(k=!k);return k});let Y=0;for(const[F,G]of[["major",13],["minor",17]])for(const te of i.roads[F]||[]){const ee=te[0],R=li(ee)>0?1:-1;for(let k=0;k<ee.length;k+=2){const B=(k+2)%ee.length,X=ee[B]-ee[k],V=ee[B+1]-ee[k+1],le=Math.hypot(X,V);if(le<4)continue;const Z=V/le*R,re=-X/le*R;for(let U=G*.5;U<le;U+=G){if(Y++,j(Y*1.7)>.65)continue;const q=ee[k]+X*(U/le)+Z*2.6,he=ee[k+1]+V*(U/le)+re*2.6;!K(q,he,2.5)&&!W(q,he)&&E.push([q,he,.75+.35*j(Y*2.3),Y%9])}}}i.trees=I.concat(E.filter((F,G)=>G%2===0).map(F=>[F[0],F[1],F[2],F[3],1])),Ze.__trees=i.trees.length}e&&(i.trees=i.trees.filter(E=>!t(E[0],E[1])));{const E=Ze.__dolmaRings;if(E){const I=i.trees.length,ce=(z,W,Y)=>{let F=!1;for(let G=0,te=z.length-2;G<z.length;te=G,G+=2)z[G+1]>Y!=z[te+1]>Y&&W<(z[te]-z[G])*(Y-z[G+1])/(z[te+1]-z[G+1])+z[G]&&(F=!F);return F},O=Math.sin(.55),Q=Math.cos(.55),K=[];for(const z of E)for(let W=0;W<z.length;W+=2)K.push([z[W]*Q-z[W+1]*O,z[W]*O+z[W+1]*Q]);const P=(z,W)=>{const Y=z*Q-W*O,F=z*O+W*Q;let G=-1e9;for(const te of K)Math.abs(te[0]-Y)<30&&(G=Math.max(G,te[1]));return G>-1e9&&F>G-2};i.trees=i.trees.filter(z=>!(vl(z[0],z[1])&&(z[4]===1||P(z[0],z[1])))&&!E.some(W=>ce(W,z[0],z[1]))),Ze.__dolmaTrees=I-i.trees.length}}{const E=new Map,I=40,ce=(F,G)=>Math.floor(F/I)*100003+Math.floor(G/I);for(const F of i.buildings){const G=F.p[0]?.[0];if(!G)continue;let te=1e9,ee=-1e9,R=1e9,k=-1e9;for(let B=0;B<G.length;B+=2)te=Math.min(te,G[B]),ee=Math.max(ee,G[B]),R=Math.min(R,G[B+1]),k=Math.max(k,G[B+1]);for(let B=Math.floor(te/I);B<=Math.floor(ee/I);B++)for(let X=Math.floor(R/I);X<=Math.floor(k/I);X++){const V=B*100003+X;(E.get(V)||E.set(V,[]).get(V)).push(G)}}const O=(F,G,te)=>{let ee=!1;for(let R=0,k=F.length-2;R<F.length;k=R,R+=2)F[R+1]>te!=F[k+1]>te&&G<(F[k]-F[R])*(te-F[R+1])/(F[k+1]-F[R+1])+F[R]&&(ee=!ee);return ee},Q=(F,G)=>{for(const te of E.get(ce(F,G))||[])if(O(te,F,G))return!0;return!1},K=i.water.map(F=>{const G=F[0];let te=1e9,ee=1e9,R=-1e9,k=-1e9;for(let B=0;B<G.length;B+=2)te=Math.min(te,G[B]),R=Math.max(R,G[B]),ee=Math.min(ee,G[B+1]),k=Math.max(k,G[B+1]);return[te,ee,R,k,F]}),P=(F,G)=>K.some(te=>{if(F<te[0]||F>te[2]||G<te[1]||G>te[3])return!1;let ee=!1;for(const R of te[4])for(let k=0,B=R.length-2;k<R.length;B=k,k+=2)R[k+1]>G!=R[B+1]>G&&F<(R[B]-R[k])*(G-R[k+1])/(R[B+1]-R[k+1])+R[k]&&(ee=!ee);return ee});let z=[];try{z=((await(await fetch(`${Bt}data/landuse.json`)).json()).pitch||[]).map(G=>G[0])}catch{}const W=(F,G)=>z.some(te=>O(te,F,G)),Y=i.trees.length;i.trees=i.trees.filter(F=>!Q(F[0],F[1])&&!P(F[0],F[1])&&!W(F[0],F[1])),Ze.__treeFootprintFiltered=Y-i.trees.length,Ze.__trees=i.trees.length}if(c&&(i.trees=GE(i.trees,c)),wt>=4&&i.trees.length){const E=new Nn(.3,.42,3.2,5).translate(0,1.6,0),I=new Hl(3.3,0).translate(0,4.2,0),ce=new mo(3.6,0).translate(0,4.2,0),O=new ut({color:"#7a5a3c"}),Q=new ut({flatShading:!0}),K=(rt?rt.trees:["#d9822b","#e6ad3c","#b8532c","#8f9d3e","#c96f2d"]).map(ee=>new Ne(ee)),P=new Map;for(const ee of i.trees){const R=Math.floor((ee[0]-m)/500)+1e3*Math.floor((ee[1]-_)/500)+(ee[4]===1?1e7:0);(P.get(R)||P.set(R,[]).get(R)).push(ee)}const z=new ot,W=new qt,Y=new ne,F=new ne,G=new ne(0,1,0);let te=0;for(const ee of P.values()){const R=!!ee[0][4];R&&ee.sort((q,he)=>j(q[0]*.37+q[1]*.71)-j(he[0]*.37+he[1]*.71));const k=new jt(E,O,ee.length),B=new jt(I,Q,ee.length);let X=0,V=0;for(const q of ee)X+=q[0],V+=q[1];X/=ee.length,V/=ee.length;const le=new jt(ce,Q,Math.ceil(ee.length/2));let Z=0;ee.forEach((q,he)=>{te++;const Ce=q[2];F.set(q[0]-X,Ve(q[0],q[1]),q[1]-V),W.setFromAxisAngle(G,te*2.39996%6.283),Y.set(Ce,Ce*(.9+te%5*.06),Ce),z.compose(F,W,Y);const De=rt?Fn(K[(q[3]+te)%K.length],te,.8):K[q[3]%K.length];k.setMatrixAt(he,z),B.setMatrixAt(he,z),B.setColorAt(he,De),he%2===0&&(le.setMatrixAt(Z,z),le.setColorAt(Z,De),Z++)}),k.computeBoundingSphere(),B.computeBoundingSphere(),le.computeBoundingSphere(),B.castShadow=!R,B.receiveShadow=!0,k.castShadow=!1,le.receiveShadow=!0,R&&Sd.push([k,B,ee.length]);const re=new Ln;re.add(k,B);const U=new uo;U.position.set(X,0,V),U.addLevel(re,0),U.addLevel(le,$e*.8),nt.add(U);{const q=Xf(X,V,m,_);q.members.push(U);const he=new ot,Ce=new ot().makeTranslation(X,0,V),De=new Ne;for(let Fe=0;Fe<Z;Fe+=it?2:1)le.getMatrixAt(Fe,he),le.getColorAt(Fe,De),q.trees.push({m:Ce.clone().multiply(he),c:De.clone()})}}}for(const E of ar.values())if(E.trees.length&&E.members.length>1){const I=new jt(new mo(3.6,0).translate(0,4.2,0),new ut({flatShading:!0}),E.trees.length);E.trees.forEach((ce,O)=>{I.setMatrixAt(O,ce.m),I.setColorAt(O,ce.c)}),I.computeBoundingSphere(),I.receiveShadow=!0,I.visible=!1,nt.add(I),E.merged.push(I),E.r||(E.c.copy(I.boundingSphere.center),E.r=I.boundingSphere.radius),E.trees=[]}if(Da("before_landmarks"),wt>=6)for(const E of i.landmarks){const I=new Li;I.tex=!!d,E.prims.forEach((O,Q)=>{if(I.seed=j(Q*3.1+E.label[0])*100,O.t==="lathe"){Iv(I,O);return}const K=new Ne(O.col);if(I.wl=O.tx??8,I.rl=O.t==="pave"?10:O.tx??8,I.base=O.z0,I.ridge=0,O.t==="prism")I.wh=O.z1-O.z0,I.st=O.st||128,Wn(I,O.p,O.z0,O.z1,K,K.clone().multiplyScalar(.95));else if(O.t==="pave")for(const P of O.p)oa(I,P,O.z0,K);else O.t==="lowroof"&&(I.rl=9,I.wh=.8,I.st=128,Wn(I,O.p,O.z0,O.z0+.8,rt?K.set("#7b8a9c"):K,K))});const ce=Ve(E.label[0],E.label[1]);if(E.prims.length){const O=new dt(I.geometry().translate(0,ce,0),d?d.mat:Ke);O.castShadow=O.receiveShadow=!0,nt.add(O)}if(E.model&&E.id==="ayasofya"){const O=await pE({base:Bt,project:g,groundY:Ve,lodDistance:900*(en?1/Ks:1)});nt.add(O.object),Ze.__aya={lodTriangles:O.triangles,at:[Math.round(O.object.position.x*10)/10,Math.round(O.object.position.z*10)/10]}}if(E.model&&E.id==="sultanahmet"){const O=await bE({base:Bt,project:g,groundY:Ve,lodDistance:800*(en?1/Ks:1)});nt.add(O.object),Ze.__lm={...Ze.__lm||{},sultanahmet:{lodTriangles:O.triangles,at:[Math.round(O.object.position.x*10)/10,Math.round(O.object.position.z*10)/10]}}}if(E.model&&(E.id==="yenicami"||E.id==="rustempasa"||E.id==="galata"||E.id==="nusretiye"||E.id==="ayatriada"||E.id==="stantoine")){const Q=await(["nusretiye","ayatriada","stantoine"].includes(E.id)?K=>wE(E.id,K):E.id==="yenicami"?xE:E.id==="galata"?vE:_E)({base:Bt,project:g,groundY:Ve,lodDistance:700*(en?1/Ks:1)});nt.add(Q.object),Ze.__lm={...Ze.__lm||{},[E.id]:{lodTriangles:Q.triangles,at:[Math.round(Q.object.position.x*10)/10,Math.round(Q.object.position.z*10)/10]}}}if(E.model&&E.id==="topkapi"){const O=await gE({base:Bt,project:g,groundY:Ve,lodDistance:700*(en?1/Ks:1)});if(Nt){O.object.updateMatrixWorld(!0);const Q=O.object.position.y,K=new ne,P=new Set;O.object.traverse(z=>{if(!z.isMesh||P.has(z.geometry))return;P.add(z.geometry);const W=z.geometry,Y=W.attributes.position,F=new ne().setFromMatrixScale(z.matrixWorld).y||1,G=new Float32Array(Y.count*3);for(let te=0;te<Y.count;te++){K.fromBufferAttribute(Y,te);const ee=K.x,R=K.y,k=K.z;K.applyMatrix4(z.matrixWorld),G[te*3]=ee,G[te*3+1]=R+((El(K.x,K.z)?Es:Ve(K.x,K.z))-Q)/F,G[te*3+2]=k}W.setAttribute("position",new Xt(G,3)),W.computeBoundingBox(),W.computeBoundingSphere()})}if(Nt){const Q=$i,K=[];for(let Y=0,F=Q.length-2;Y<Q.length;F=Y,Y+=2){const G=Q[F],te=Q[F+1],ee=Q[Y],R=Q[Y+1],k=Math.hypot(ee-G,R-te),B=Math.max(1,Math.round(k/6));let X=(R-te)/k,V=-(ee-G)/k;const le=(G+ee)/2,Z=(te+R)/2;El(le+X*3,Z+V*3)&&(X=-X,V=-V);for(let re=0;re<B;re++){const U=(re+.5)/B,q=G+(ee-G)*U+X*1.4,he=te+(R-te)*U+V*1.4,Ce=Math.min(Ve(q+X*2,he+V*2),Ve(q,he),ea(q-(ee-G)/B*.5,he-(R-te)/B*.5),ea(q+(ee-G)/B*.5,he+(R-te)/B*.5));Es-Ce<1||K.push([q,he,k/B+.6,Ce-2.5,Es+1.2,Math.atan2(-(R-te),ee-G)])}}const P=new jt(new Gt(1,1,1),new ut({color:"#cbbda2"}),K.length);P.name="aud:wall";const z=new ot,W=new qt;K.forEach((Y,F)=>{W.setFromAxisAngle(new ne(0,1,0),Y[5]),z.compose(new ne(Y[0],(Y[3]+Y[4])/2,Y[1]),W,new ne(Y[2],Y[4]-Y[3],2.8)),P.setMatrixAt(F,z)}),P.castShadow=P.receiveShadow=!0,nt.add(P),Ze.__tkWalls={n:K.length,maxH:Math.round(Math.max(0,...K.map(Y=>Es-Y[3]-2.5)))}}if(Nt){const Q=es,K=[];for(let P=0,z=Q.length-2;P<Q.length;z=P,P+=2){const W=Q[z],Y=Q[z+1],F=Q[P],G=Q[P+1],te=Math.hypot(F-W,G-Y)||1,ee=Math.max(1,Math.round(te/8));let R=(G-Y)/te,k=-(F-W)/te;const B=(W+F)/2,X=(Y+G)/2;vl(B+R*3,X+k*3)&&(R=-R,k=-k);for(let V=0;V<ee;V++){const le=(V+.5)/ee,Z=W+(F-W)*le,re=Y+(G-Y)*le,U=ea(Z+R*6,re+k*6);U-ni>2?K.push([Z,re,te/ee+.5,ni-2.5,U+.6,Math.atan2(-(G-Y),F-W)]):ni-U>1&&K.push([Z,re,te/ee+.5,ni-2.5,ni+1.1,Math.atan2(-(G-Y),F-W)])}}if(K.length){const P=new jt(new Gt(1,1,1),new ut({color:"#d8d2c4"}),K.length);P.name="aud:wall";const z=new ot,W=new qt;K.forEach((Y,F)=>{W.setFromAxisAngle(new ne(0,1,0),Y[5]),z.compose(new ne(Y[0],(Y[3]+Y[4])/2,Y[1]),W,new ne(Y[2],Math.max(1.2,Y[4]-Y[3]),1.8)),P.setMatrixAt(F,z)}),P.castShadow=P.receiveShadow=!0,nt.add(P),Ze.__dhWalls={n:K.length}}}try{const Q=Ze.__dolmaDome;if(Q&&Q.length){const K=new Li,P=new Ne("#7a858f");for(const W of Q){const Y=ni+W.y0,F=ni+W.y1,G=14;for(let te=0;te<G;te++){const ee=te/G*Math.PI*2,R=(te+1)/G*Math.PI*2,k=W.x+Math.cos(ee)*W.r,B=W.z+Math.sin(ee)*W.r,X=W.x+Math.cos(R)*W.r,V=W.z+Math.sin(R)*W.r;K.tri([k,Y,B],[X,F,V],[X,Y,V],P),K.tri([k,Y,B],[k,F,B],[X,F,V],P),K.tri([k,F,B],[W.x,F+(F-Y)*.15,W.z],[X,F,V],P)}}const z=new dt(K.geometry(),new ut({vertexColors:!0}));z.castShadow=z.receiveShadow=!0,nt.add(z)}}catch{}nt.add(O.object),Ze.__lm={...Ze.__lm||{},topkapi:{lodTriangles:O.triangles,at:[Math.round(O.object.position.x*10)/10,Math.round(O.object.position.z*10)/10]}}}{const O={ayasofya:2.6,sultanahmet:.9,suleymaniye:3.9,yenicami:3.6,galata:.4,topkapi:.8,nusretiye:.6,ayatriada:2.7,stantoine:4.75};lt["lm_"+E.id]={t:[E.label[0],E.label[1]],d:E.id==="galata"?240:["nusretiye","ayatriada","stantoine"].includes(E.id)?150:360,pol:1.15,y:E.id==="topkapi"?5:E.id==="galata"?30:["nusretiye","ayatriada","stantoine"].includes(E.id)?12:24,az:O[E.id]??0},E.id==="ayasofya"&&(lt.hd_apse={t:[117,1675],d:95,pol:.95,y:14,az:.98},lt.hd_apse_s={t:[117,1675],d:95,pol:.95,y:14,az:1.9},lt.hd_pilot={t:[95,1662],d:230,pol:.85,y:20,az:2.9}),E.id==="stantoine"&&(lt.sa_top={t:[-172.4,-977.5],d:215,pol:.02,y:0,az:-1.897},lt.sa_obl={t:[-155.3,-971.7],d:150,pol:.82,y:8,az:-1.254}),E.id==="topkapi"&&(lt.tk_wide={t:[395,1245],d:820,pol:.95,y:5,az:.8})}Tn(E.name,E.label[0],E.label[2]+ce,E.label[1],E.id==="rustempasa"?"w":E.id==="yenicami"?"e":E.id==="ayatriada"?"below":"")}if(Tn("Taksim",y[0],5+Ve(y[0],y[1]),y[1],"area"),wt>=5){const E=document.getElementById("hour");pi&&!Yn.get("hour")&&(E.value=String(Ed)),Yn.get("hour")&&(E.value=String(Math.min(17.5,Math.max(7.5,Number(Yn.get("hour"))||14)))),E.min="7.5",E.max="17.5",document.getElementById("tod").hidden=!0,E.addEventListener("input",()=>_l(Number(E.value))),_l(Number(E.value))}document.getElementById("loading").remove();try{const E=await(await fetch(`${Bt}data/aqueduct.json`)).json(),I=E.line,ce=13.5,O=[];for(let k=0;k<I.length-1;k++){const[B,X]=I[k],[V,le]=I[k+1],Z=Math.hypot(V-B,le-X);if(Z>60)continue;const re=Math.max(1,Math.round(Z/ce));for(let U=0;U<re;U++)O.push([B+(V-B)*U/re,X+(le-X)*U/re,Math.atan2(-(le-X),V-B),Z/re])}let Q=1e9,K=-1e9;for(const k of O){const B=Ve(k[0],k[1]);Q=Math.min(Q,B),K=Math.max(K,B)}const P=Math.max(Q+E.hmax,K+4),z=[];for(const[k,B,X,V]of O){const le=Ve(k,B);P-9>le&&z.push([k,B,X,4.2,le-1,P-9,E.w]),z.push([k,B,X,V+.05,Math.max(le-1,P-9.5),P-7.5,E.w+.6]),z.push([k,B,X,3,Math.max(le-1,P-7.5),P-2,E.w-.4]),z.push([k,B,X,V+.05,Math.max(le-1,P-2),P,E.w])}const W=new ot,Y=new qt,F=new ne(0,1,0),G=new ne,te=new ne,ee=Tc(new ut({color:"#b9a98c"}));for(const[k,B]of[[z.filter(X=>X[4]<X[5]-6||X[3]===4.2),"aud:wall"],[z.filter(X=>!(X[4]<X[5]-6||X[3]===4.2)),"aqueduct-spans"]]){const X=new jt(new Gt(1,1,1),ee,Math.max(1,k.length));X.name=B,X.count=k.length,k.forEach(([V,le,Z,re,U,q,he],Ce)=>X.setMatrixAt(Ce,W.compose(G.set(V,(U+q)/2,le),Y.setFromAxisAngle(F,Z),te.set(re,q-U,he)))),X.castShadow=X.receiveShadow=wt>=2,nt.add(X)}const R=I[Math.floor(I.length/2)];Tn("Bozdoğan Kemeri",R[0],P+12,R[1]),Ze.__aq={piers:O.length,top:Math.round(P)}}catch(E){console.warn("aqueduct skipped",E)}for(const E of["dikilitas","ormedikilitas","yilanlisutun","almancesmesi"])try{const I=await Rs(E,{base:Bt,project:g,groundY:Ve,lodDistance:1500});I.object.name="aud:monument",nt.add(I.object)}catch(I){console.warn("monument skipped",E,I)}if(Tn("Dikilitaş",-302,Ve(-302,1943)+30,1943),Tn("Alman Çeşmesi",-260,Ve(-260,1784)+16,1784),lt.hipodrom={t:[-310,1930],y:8,d:it?420:330,pol:.85,az:2.2},lt.sarayburnu={t:[430,1e3],y:20,d:it?900:700,pol:1,az:.3},lt.bozdogan={t:[-1900,880],y:25,d:it?520:420,pol:1.2,az:2.2},lt.pool={t:[-70,1800],y:30,d:it?330:260,pol:.95,az:.3},lt.galata_slope={t:[-420,-150],y:30,d:it?600:480,pol:1.05,az:.4},lt.taksim={t:[520,-1500],y:10,d:it?520:420,pol:.55,az:.2},lt.dolmabahce={t:[1780,-1740],y:10,d:it?650:520,pol:.85,az:-.6},lt.dolma_sea={t:[1800,-1740],y:8,d:it?700:560,pol:1.15,az:.55},lt.mid_gumussuyu={t:[1e3,-1600],y:25,d:it?700:560,pol:.95,az:.5},lt.suleymaniye_s={t:[-1260,820],y:30,d:it?600:480,pol:1,az:2.4},Zt){const E=(ce,O,Q)=>Tn(ce,O,Ve(O,Q)+24,Q,"near"),I=Zt.poi||{};I["Beşiktaş Dentur İskelesi"]&&E("Beşiktaş İskelesi",I["Beşiktaş Dentur İskelesi"][0],I["Beşiktaş Dentur İskelesi"][1]),I["Barbaros Hayrettin Türbesi"]&&E("Barbaros Meydanı",I["Barbaros Hayrettin Türbesi"][0],I["Barbaros Hayrettin Türbesi"][1]),I["Yıldız Hamidiye Camii"]&&E("Yıldız",I["Yıldız Hamidiye Camii"][0],I["Yıldız Hamidiye Camii"][1]),I["Çırağan Sarayı"]&&E("Çırağan Sarayı",I["Çırağan Sarayı"][0],I["Çırağan Sarayı"][1]),lt.besiktas={t:[2410,-2075],d:it?420:340,pol:1.05,y:8,az:2.2},lt.besiktas_barbaros={t:[2420,-2550],d:it?900:760,pol:.85,y:20,az:3.5},lt.besiktas_ciragan={t:[2800,-2200],d:it?520:420,pol:1,y:10,az:2.4}}const Pe=[i.bounds_m[0],Math.min(i.bounds_m[1],-3280),Math.max(i.bounds_m[2],3480),i.bounds_m[3]];qn=await BE({scene:nt,camera:Qn,controls:zn,H:Ve,bounds:Pe,map:Bt,narrow:it,roads:[...i.roads.major||[],...i.roads.minor||[]],plazas:i.plazas,buildings:i.buildings,water:i.water,patchMask:c?E=>{WE(E,c),n&&(jr(E,ld(n)),n.maksem.osm&&jr(E,[n.maksem.osm]));{const I=(O,Q)=>(f?.ways||[]).some(K=>{const P=K.p;for(let z=0;z+3<P.length;z+=2){const W=P[z+2]-P[z],Y=P[z+3]-P[z+1],F=W*W+Y*Y||1,G=Math.max(0,Math.min(1,((O-P[z])*W+(Q-P[z+1])*Y)/F));if(Math.hypot(P[z]+W*G-O,P[z+1]+Y*G-Q)<K.w/2+2.5)return!0}return!1}),ce=[];for(const O of l){const Q=O[5],K=O[1]/2+1.5;for(let P=0;P+3<Q.length;P+=2){const z=Math.hypot(Q[P+2]-Q[P],Q[P+3]-Q[P+1])||1;for(let W=0;W<=z;W+=2){const Y=Q[P]+(Q[P+2]-Q[P])*W/z,F=Q[P+1]+(Q[P+3]-Q[P+1])*W/z;Ve(Y,F)<1&&!I(Y,F)&&ce.push([Y-K,F-K,Y+K,F-K,Y+K,F+K,Y-K,F+K])}}}ce.length&&jr(E,ce),Ze.__halicWaterBlocks=ce.length}a.length&&jr(E,a)}:void 0}),c&&$E({scene:nt,camera:Qn,H:Ve,W:c,narrow:it});const J=[];if(c&&n)for(const[E,I]of n.portals||[]){const ce=[];for(const O of c.ways){const Q=O[5];if(Q.length<4)continue;const K=Q.length,P=Math.hypot(Q[0]-E,Q[1]-I)<aa+2,z=Math.hypot(Q[K-2]-E,Q[K-1]-I)<aa+2;if(!P&&!z)continue;const W=[];for(let F=0;F<K;F+=2)W.push([Q[F],Q[F+1]]);z&&W.reverse();let Y=0;for(let F=0;F+1<W.length&&Y<70;F++){const[G,te]=W[F],[ee,R]=W[F+1],k=Math.hypot(ee-G,R-te);if(!(k<.01)){for(let B=0;B<k;B+=2)Y+B>=3&&ce.push([G+(ee-G)*B/k,te+(R-te)*B/k,Math.atan2(ee-G,R-te),E,I]);Y+=k}}}J.push(ce)}Ze.__portalStarts=J.map(E=>E.length);const L=r?nv(r.bx,r.tp,r.yt,r.gx,Ve):void 0;L&&(Ze.__wallSolids=L.count);let we=null;if(c)try{let E=1e9,I=1e9,ce=-1e9,O=-1e9;for(const Y of c.ways){const F=Y[5];for(let G=0;G<F.length;G+=2)F[G]<E&&(E=F[G]),F[G]>ce&&(ce=F[G]),F[G+1]<I&&(I=F[G+1]),F[G+1]>O&&(O=F[G+1])}const Q=2,K=Math.ceil((ce-E+200)/Q),P=Math.ceil((O-I+200)/Q);E-=100,I-=100;const z=new Uint8Array(K*P+7>>3),W=(Y,F)=>{F?z[Y>>3]|=1<<(Y&7):z[Y>>3]&=~(1<<(Y&7))};for(const Y of ge){const F=new Map;for(const G of Y)for(let te=0;te<G.length;te+=2){const ee=(te+2)%G.length,R=G[te],k=G[te+1],B=G[ee],X=G[ee+1];if(k===X)continue;const V=Math.max(0,Math.ceil((Math.min(k,X)-I)/Q-.5)),le=Math.min(P-1,Math.floor((Math.max(k,X)-I)/Q-.5));for(let Z=V;Z<=le;Z++){const re=I+(Z+.5)*Q;if(re<Math.min(k,X)||re>=Math.max(k,X))continue;const U=R+(B-R)*(re-k)/(X-k);let q=F.get(Z);q||F.set(Z,q=[]),q.push(U)}}for(const[G,te]of F){te.sort((ee,R)=>ee-R);for(let ee=0;ee+1<te.length;ee+=2){const R=Math.max(0,Math.ceil((te[ee]-E)/Q-.5)),k=Math.min(K-1,Math.floor((te[ee+1]-E)/Q-.5));for(let B=R;B<=k;B++)W(G*K+B,!0)}}}for(const Y of c.ways){if(!Y[4])continue;const F=Y[5],G=Y[1]/2+2;for(let te=0;te+3<F.length;te+=2){const ee=Math.hypot(F[te+2]-F[te],F[te+3]-F[te+1]);for(let R=0;R<=ee;R+=1){const k=F[te]+(F[te+2]-F[te])*R/ee,B=F[te+1]+(F[te+3]-F[te+1])*R/ee;for(let X=-G;X<=G;X+=Q)for(let V=-G;V<=G;V+=Q){if(X*X+V*V>G*G)continue;const le=Math.floor((k+X-E)/Q),Z=Math.floor((B+V-I)/Q);le>=0&&Z>=0&&le<K&&Z<P&&W(Z*K+le,!1)}}}}we={x0:E,z0:I,nx:K,nz:P,c:Q,m:z}}catch{we=null}const Re=we?(E,I)=>{const ce=we,O=Math.floor((E-ce.x0)/ce.c),Q=Math.floor((I-ce.z0)/ce.c);if(O<0||Q<0||O>=ce.nx||Q>=ce.nz)return!1;const K=Q*ce.nx+O;return(ce.m[K>>3]&1<<(K&7))!==0}:void 0;qn=await xv(qn,{scene:nt,camera:Qn,H:Ve,buildings:i.buildings,narrow:it,walls:L,portalStarts:J,seaAt:Re}),Ze.__drive=qn,Da("ready"),Ze.__scene=nt,Ze.__camera=Qn,Td()}let jn=null;const no=new To(R_),io=new To(D_);function zv(){if(!vv)return;const i=window.innerWidth,e=window.innerHeight;jn=new c_(xn),jn.setPixelRatio(Math.min(window.devicePixelRatio,2)),jn.setSize(i,e),jn.addPass(new l_(nt,Qn));const t=new mi(nt,Qn,i,e);t.updateGtaoMaterial({radius:12,distanceExponent:1.4,thickness:6,scale:1.4,samples:12,distanceFallOff:1,screenSpaceRadius:!1}),t.blendIntensity=1,jn.addPass(t),jn.addPass(new ga(new Ye(i,e),.1,.5,.95)),no.uniforms.h.value=2.2/i,io.uniforms.v.value=2.2/e,no.uniforms.r.value=io.uniforms.r.value=.5,jn.addPass(no),jn.addPass(io),jn.addPass(new m_),jn.addPass(new To({uniforms:{tDiffuse:{value:null}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`uniform sampler2D tDiffuse; varying vec2 vUv;
      void main(){ vec4 c = texture2D(tDiffuse, vUv); vec3 x = c.rgb;
        float l = dot(x, vec3(0.299, 0.587, 0.114));
        x = mix(vec3(l), x, ${dn?"1.12":"1.08"});                       // more saturation
        x = (x - 0.5) * ${dn?"1.1":"1.06"} + 0.5;                       // a little more contrast, no milky lift
        vec2 q = vUv - 0.5; x *= 1.0 - 0.35 * dot(q, q);  // soft vignette like the Warsaw frames
        gl_FragColor = vec4(clamp(x, 0.0, 1.0), c.a); }`}))}zv();const ar=new Map;let Cd=1e9;const ka=[],Xf=(i,e,t,n)=>{const s=Math.floor((i-t)/1500)+1e3*Math.floor((e-n)/1500);let a=ar.get(s);return a||(a={key:s,bld:[],trees:[],members:[],merged:[],c:new ne,r:0},ar.set(s,a)),a};function Gv(){for(const i of ar.values()){if(!i.merged.length)continue;const e=Qn.position.distanceTo(i.c)-i.r>Cd;for(const t of i.merged)t.visible=e;for(const t of i.members)t.visible=!e}}const Sd=[];let Kf=-1,Jf=performance.now();function Id(i){const e=i??performance.now(),t=Math.min(.08,(e-Jf)/1e3);Jf=e,qn?qn.update(t):zn.update();const n=qn?qn.focus():zn.target;An.target.position.copy(n),An.position.copy(n).addScaledVector(xd,qn?1800:3e3);const s=Qn.position.distanceTo(n),a=s*Ks,r=a>3200?2:a>1800?1:0;if(r!==Kf){Kf=r;for(const[l,h,f]of Sd)l.count=h.count=r===2?Math.ceil(f*.3):r===1?Math.ceil(f*.65):f}const o=sn.clamp(qn?210:a*.75,qn?80:250,qn?700:2600),c=An.shadow.camera;c.right!==o&&(c.left=-o,c.right=o,c.top=o,c.bottom=-o,c.updateProjectionMatrix()),pi&&nt.fog instanceof Mo&&(qn?(nt.fog.near=50,nt.fog.far=900):dn?(nt.fog.near=s*.95,nt.fog.far=s+a*1.3+5e3):en?(nt.fog.near=s*.8,nt.fog.far=s+a*.6+3500):(nt.fog.near=s*2.2,nt.fog.far=s*9+6e3)),Gv();{const l=a<3e3;for(const h of ka)h.visible=l}if(jn){const l=sn.clamp(2-a/2500,.4,1.6);no.uniforms.h.value=l/window.innerWidth,io.uniforms.v.value=l/window.innerHeight,jn.render()}else xn.render(nt,Qn);Fv(),Ze.__frames=(Ze.__frames||0)+1,requestAnimationFrame(Id)}window.addEventListener("resize",()=>{Qn.aspect=window.innerWidth/window.innerHeight,Qn.updateProjectionMatrix(),xn.setSize(window.innerWidth,window.innerHeight),jn?.setSize(window.innerWidth,window.innerHeight)});Object.assign(Ze,{__setView:wd,__controls:zn,__renderer:xn,__stats:()=>({texMB:Ze.__texMB,triangles:xn.info.render.triangles,calls:xn.info.render.calls,geometries:xn.info.memory.geometries})});Ov().then(()=>requestAnimationFrame(Id));
