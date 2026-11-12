(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function t(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(s){if(s.ep)return;s.ep=!0;const a=t(s);fetch(s.href,a)}})();const Ke={};function qf(){Ke.__ready=!0,document.documentElement.dataset.ready="1"}const Yf=["hour"];function Xf(){const i=new URLSearchParams(location.search),e=new URLSearchParams;for(const t of Yf){const n=i.get(t);n!==null&&e.set(t,n)}return e}const rl="170",Li={ROTATE:0,DOLLY:1,PAN:2},Xi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Kf=0,Bl=1,Jf=2,ol=1,vu=2,Ii=3,ai=0,In=1,Mt=2,nn=0,Ws=1,fc=2,Rl=3,Dl=4,Mu=5,ti=100,Zf=101,$f=102,ed=103,td=104,Ma=200,nd=201,id=202,sd=203,dc=204,Ac=205,pc=206,ad=207,mc=208,rd=209,od=210,cd=211,ld=212,hd=213,ud=214,gc=0,bc=1,xc=2,Js=3,_c=4,Ec=5,vc=6,Mc=7,cl=0,fd=1,dd=2,ts=0,yu=1,Cu=2,wu=3,ll=4,Ad=5,Su=6,Iu=7,Ll="attached",pd="detached",Tu=300,ps=301,Zs=302,yc=303,Cc=304,so=306,Un=1e3,Ri=1001,Hr=1002,cn=1003,Bu=1004,ya=1005,_n=1006,Fr=1007,Ai=1008,qt=1009,Ru=1010,Du=1011,Fa=1012,hl=1013,ms=1014,fn=1015,rn=1016,ul=1017,fl=1018,gs=1020,Lu=35902,Pu=1021,Uu=1022,Yt=1023,Fu=1024,Nu=1025,js=1026,bs=1027,Ki=1028,dl=1029,ds=1030,Al=1031,pl=1033,Nr=33776,Ia=33777,Qr=33778,Ta=33779,Vr=35840,wc=35841,Wr=35842,Sc=35843,jr=36196,qr=37492,Yr=37496,Na=37808,Ic=37809,Tc=37810,Bc=37811,Qa=37812,Rc=37813,Dc=37814,Lc=37815,Pc=37816,Uc=37817,Fc=37818,Nc=37819,Qc=37820,kc=37821,Ba=36492,Oc=36494,Xr=36495,Qu=36283,zc=36284,Gc=36285,Hc=36286,ka=2300,Oa=2301,bo=2302,Pl=2400,Ul=2401,Fl=2402,md=2500,gd=0,ku=1,Vc=2,bd=3200,xd=3201,ao=0,_d=1,fi="",Nt="srgb",dn="srgb-linear",ro="linear",mt="srgb",ws=7680,Nl=519,Ed=512,vd=513,Md=514,Ou=515,yd=516,Cd=517,wd=518,Sd=519,Wc=35044,Ql="300 es",Di=2e3,Kr=2001;class Es{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const a=s.indexOf(t);a!==-1&&s.splice(a,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let a=0,r=s.length;a<r;a++)s[a].call(this,e);e.target=null}}}const hn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let kl=1234567;const Ra=Math.PI/180,$s=180/Math.PI;function si(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(hn[i&255]+hn[i>>8&255]+hn[i>>16&255]+hn[i>>24&255]+"-"+hn[e&255]+hn[e>>8&255]+"-"+hn[e>>16&15|64]+hn[e>>24&255]+"-"+hn[t&63|128]+hn[t>>8&255]+"-"+hn[t>>16&255]+hn[t>>24&255]+hn[n&255]+hn[n>>8&255]+hn[n>>16&255]+hn[n>>24&255]).toLowerCase()}function sn(i,e,t){return Math.max(e,Math.min(t,i))}function ml(i,e){return(i%e+e)%e}function Id(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function Td(i,e,t){return i!==e?(t-i)/(e-i):0}function Da(i,e,t){return(1-t)*i+t*e}function Bd(i,e,t,n){return Da(i,e,1-Math.exp(-t*n))}function Rd(i,e=1){return e-Math.abs(ml(i,e*2)-e)}function Dd(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Ld(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Pd(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Ud(i,e){return i+Math.random()*(e-i)}function Fd(i){return i*(.5-Math.random())}function Nd(i){i!==void 0&&(kl=i);let e=kl+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Qd(i){return i*Ra}function kd(i){return i*$s}function Od(i){return(i&i-1)===0&&i!==0}function zd(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Gd(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Hd(i,e,t,n,s){const a=Math.cos,r=Math.sin,o=a(t/2),c=r(t/2),l=a((e+n)/2),h=r((e+n)/2),u=a((e-n)/2),A=r((e-n)/2),g=a((n-e)/2),x=r((n-e)/2);switch(s){case"XYX":i.set(o*h,c*u,c*A,o*l);break;case"YZY":i.set(c*A,o*h,c*u,o*l);break;case"ZXZ":i.set(c*u,c*A,o*h,o*l);break;case"XZX":i.set(o*h,c*x,c*g,o*l);break;case"YXY":i.set(c*g,o*h,c*x,o*l);break;case"ZYZ":i.set(c*x,c*g,o*h,o*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function ni(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function gt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const bn={DEG2RAD:Ra,RAD2DEG:$s,generateUUID:si,clamp:sn,euclideanModulo:ml,mapLinear:Id,inverseLerp:Td,lerp:Da,damp:Bd,pingpong:Rd,smoothstep:Dd,smootherstep:Ld,randInt:Pd,randFloat:Ud,randFloatSpread:Fd,seededRandom:Nd,degToRad:Qd,radToDeg:kd,isPowerOfTwo:Od,ceilPowerOfTwo:zd,floorPowerOfTwo:Gd,setQuaternionFromProperEuler:Hd,normalize:gt,denormalize:ni};class ke{constructor(e=0,t=0){ke.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(sn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),a=this.x-e.x,r=this.y-e.y;return this.x=a*n-r*s+e.x,this.y=a*s+r*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class it{constructor(e,t,n,s,a,r,o,c,l){it.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,a,r,o,c,l)}set(e,t,n,s,a,r,o,c,l){const h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=a,h[5]=c,h[6]=n,h[7]=r,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,a=this.elements,r=n[0],o=n[3],c=n[6],l=n[1],h=n[4],u=n[7],A=n[2],g=n[5],x=n[8],_=s[0],p=s[3],d=s[6],M=s[1],y=s[4],v=s[7],q=s[2],H=s[5],U=s[8];return a[0]=r*_+o*M+c*q,a[3]=r*p+o*y+c*H,a[6]=r*d+o*v+c*U,a[1]=l*_+h*M+u*q,a[4]=l*p+h*y+u*H,a[7]=l*d+h*v+u*U,a[2]=A*_+g*M+x*q,a[5]=A*p+g*y+x*H,a[8]=A*d+g*v+x*U,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],a=e[3],r=e[4],o=e[5],c=e[6],l=e[7],h=e[8];return t*r*h-t*o*l-n*a*h+n*o*c+s*a*l-s*r*c}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],a=e[3],r=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=h*r-o*l,A=o*c-h*a,g=l*a-r*c,x=t*u+n*A+s*g;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/x;return e[0]=u*_,e[1]=(s*l-h*n)*_,e[2]=(o*n-s*r)*_,e[3]=A*_,e[4]=(h*t-s*c)*_,e[5]=(s*a-o*t)*_,e[6]=g*_,e[7]=(n*c-l*t)*_,e[8]=(r*t-n*a)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,a,r,o){const c=Math.cos(a),l=Math.sin(a);return this.set(n*c,n*l,-n*(c*r+l*o)+r+e,-s*l,s*c,-s*(-l*r+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(xo.makeScale(e,t)),this}rotate(e){return this.premultiply(xo.makeRotation(-e)),this}translate(e,t){return this.premultiply(xo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const xo=new it;function zu(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function za(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Vd(){const i=za("canvas");return i.style.display="block",i}const Ol={};function Ca(i){i in Ol||(Ol[i]=!0,console.warn(i))}function Wd(i,e,t){return new Promise(function(n,s){function a(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(a,t);break;default:n()}}setTimeout(a,t)})}function jd(i){const e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function qd(i){const e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const ht={enabled:!0,workingColorSpace:dn,spaces:{},convert:function(i,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===mt&&(i.r=Pi(i.r),i.g=Pi(i.g),i.b=Pi(i.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(i.applyMatrix3(this.spaces[e].toXYZ),i.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===mt&&(i.r=qs(i.r),i.g=qs(i.g),i.b=qs(i.b))),i},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===fi?ro:this.spaces[i].transfer},getLuminanceCoefficients:function(i,e=this.workingColorSpace){return i.fromArray(this.spaces[e].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,e,t){return i.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function Pi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function qs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const zl=[.64,.33,.3,.6,.15,.06],Gl=[.2126,.7152,.0722],Hl=[.3127,.329],Vl=new it().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Wl=new it().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);ht.define({[dn]:{primaries:zl,whitePoint:Hl,transfer:ro,toXYZ:Vl,fromXYZ:Wl,luminanceCoefficients:Gl,workingColorSpaceConfig:{unpackColorSpace:Nt},outputColorSpaceConfig:{drawingBufferColorSpace:Nt}},[Nt]:{primaries:zl,whitePoint:Hl,transfer:mt,toXYZ:Vl,fromXYZ:Wl,luminanceCoefficients:Gl,outputColorSpaceConfig:{drawingBufferColorSpace:Nt}}});let Ss;class Yd{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ss===void 0&&(Ss=za("canvas")),Ss.width=e.width,Ss.height=e.height;const n=Ss.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Ss}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=za("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),a=s.data;for(let r=0;r<a.length;r++)a[r]=Pi(a[r]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Pi(t[n]/255)*255):t[n]=Pi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Xd=0;class Gu{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Xd++}),this.uuid=si(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let a;if(Array.isArray(s)){a=[];for(let r=0,o=s.length;r<o;r++)s[r].isDataTexture?a.push(_o(s[r].image)):a.push(_o(s[r]))}else a=_o(s);n.url=a}return t||(e.images[this.uuid]=n),n}}function _o(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Yd.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Kd=0;class Gt extends Es{constructor(e=Gt.DEFAULT_IMAGE,t=Gt.DEFAULT_MAPPING,n=Ri,s=Ri,a=_n,r=Ai,o=Yt,c=qt,l=Gt.DEFAULT_ANISOTROPY,h=fi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Kd++}),this.uuid=si(),this.name="",this.source=new Gu(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=a,this.minFilter=r,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new ke(0,0),this.repeat=new ke(1,1),this.center=new ke(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new it,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Tu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Un:e.x=e.x-Math.floor(e.x);break;case Ri:e.x=e.x<0?0:1;break;case Hr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Un:e.y=e.y-Math.floor(e.y);break;case Ri:e.y=e.y<0?0:1;break;case Hr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Gt.DEFAULT_IMAGE=null;Gt.DEFAULT_MAPPING=Tu;Gt.DEFAULT_ANISOTROPY=1;class dt{constructor(e=0,t=0,n=0,s=1){dt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,a=this.w,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s+r[12]*a,this.y=r[1]*t+r[5]*n+r[9]*s+r[13]*a,this.z=r[2]*t+r[6]*n+r[10]*s+r[14]*a,this.w=r[3]*t+r[7]*n+r[11]*s+r[15]*a,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,a;const c=e.elements,l=c[0],h=c[4],u=c[8],A=c[1],g=c[5],x=c[9],_=c[2],p=c[6],d=c[10];if(Math.abs(h-A)<.01&&Math.abs(u-_)<.01&&Math.abs(x-p)<.01){if(Math.abs(h+A)<.1&&Math.abs(u+_)<.1&&Math.abs(x+p)<.1&&Math.abs(l+g+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(l+1)/2,v=(g+1)/2,q=(d+1)/2,H=(h+A)/4,U=(u+_)/4,Z=(x+p)/4;return y>v&&y>q?y<.01?(n=0,s=.707106781,a=.707106781):(n=Math.sqrt(y),s=H/n,a=U/n):v>q?v<.01?(n=.707106781,s=0,a=.707106781):(s=Math.sqrt(v),n=H/s,a=Z/s):q<.01?(n=.707106781,s=.707106781,a=0):(a=Math.sqrt(q),n=U/a,s=Z/a),this.set(n,s,a,t),this}let M=Math.sqrt((p-x)*(p-x)+(u-_)*(u-_)+(A-h)*(A-h));return Math.abs(M)<.001&&(M=1),this.x=(p-x)/M,this.y=(u-_)/M,this.z=(A-h)/M,this.w=Math.acos((l+g+d-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Jd extends Es{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new dt(0,0,e,t),this.scissorTest=!1,this.viewport=new dt(0,0,e,t);const s={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:_n,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const a=new Gt(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);a.flipY=!1,a.generateMipmaps=n.generateMipmaps,a.internalFormat=n.internalFormat,this.textures=[];const r=n.count;for(let o=0;o<r;o++)this.textures[o]=a.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,a=this.textures.length;s<a;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,s=e.textures.length;n<s;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Gu(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Pn extends Jd{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Hu extends Gt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=cn,this.minFilter=cn,this.wrapR=Ri,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Vu extends Gt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=cn,this.minFilter=cn,this.wrapR=Ri,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class wt{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,a,r,o){let c=n[s+0],l=n[s+1],h=n[s+2],u=n[s+3];const A=a[r+0],g=a[r+1],x=a[r+2],_=a[r+3];if(o===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u;return}if(o===1){e[t+0]=A,e[t+1]=g,e[t+2]=x,e[t+3]=_;return}if(u!==_||c!==A||l!==g||h!==x){let p=1-o;const d=c*A+l*g+h*x+u*_,M=d>=0?1:-1,y=1-d*d;if(y>Number.EPSILON){const q=Math.sqrt(y),H=Math.atan2(q,d*M);p=Math.sin(p*H)/q,o=Math.sin(o*H)/q}const v=o*M;if(c=c*p+A*v,l=l*p+g*v,h=h*p+x*v,u=u*p+_*v,p===1-o){const q=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=q,l*=q,h*=q,u*=q}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,a,r){const o=n[s],c=n[s+1],l=n[s+2],h=n[s+3],u=a[r],A=a[r+1],g=a[r+2],x=a[r+3];return e[t]=o*x+h*u+c*g-l*A,e[t+1]=c*x+h*A+l*u-o*g,e[t+2]=l*x+h*g+o*A-c*u,e[t+3]=h*x-o*u-c*A-l*g,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,a=e._z,r=e._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(s/2),u=o(a/2),A=c(n/2),g=c(s/2),x=c(a/2);switch(r){case"XYZ":this._x=A*h*u+l*g*x,this._y=l*g*u-A*h*x,this._z=l*h*x+A*g*u,this._w=l*h*u-A*g*x;break;case"YXZ":this._x=A*h*u+l*g*x,this._y=l*g*u-A*h*x,this._z=l*h*x-A*g*u,this._w=l*h*u+A*g*x;break;case"ZXY":this._x=A*h*u-l*g*x,this._y=l*g*u+A*h*x,this._z=l*h*x+A*g*u,this._w=l*h*u-A*g*x;break;case"ZYX":this._x=A*h*u-l*g*x,this._y=l*g*u+A*h*x,this._z=l*h*x-A*g*u,this._w=l*h*u+A*g*x;break;case"YZX":this._x=A*h*u+l*g*x,this._y=l*g*u+A*h*x,this._z=l*h*x-A*g*u,this._w=l*h*u-A*g*x;break;case"XZY":this._x=A*h*u-l*g*x,this._y=l*g*u-A*h*x,this._z=l*h*x+A*g*u,this._w=l*h*u+A*g*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],a=t[8],r=t[1],o=t[5],c=t[9],l=t[2],h=t[6],u=t[10],A=n+o+u;if(A>0){const g=.5/Math.sqrt(A+1);this._w=.25/g,this._x=(h-c)*g,this._y=(a-l)*g,this._z=(r-s)*g}else if(n>o&&n>u){const g=2*Math.sqrt(1+n-o-u);this._w=(h-c)/g,this._x=.25*g,this._y=(s+r)/g,this._z=(a+l)/g}else if(o>u){const g=2*Math.sqrt(1+o-n-u);this._w=(a-l)/g,this._x=(s+r)/g,this._y=.25*g,this._z=(c+h)/g}else{const g=2*Math.sqrt(1+u-n-o);this._w=(r-s)/g,this._x=(a+l)/g,this._y=(c+h)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(sn(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,a=e._z,r=e._w,o=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+r*o+s*l-a*c,this._y=s*h+r*c+a*o-n*l,this._z=a*h+r*l+n*c-s*o,this._w=r*h-n*o-s*c-a*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,a=this._z,r=this._w;let o=r*e._w+n*e._x+s*e._y+a*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=r,this._x=n,this._y=s,this._z=a,this;const c=1-o*o;if(c<=Number.EPSILON){const g=1-t;return this._w=g*r+t*this._w,this._x=g*n+t*this._x,this._y=g*s+t*this._y,this._z=g*a+t*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,o),u=Math.sin((1-t)*h)/l,A=Math.sin(t*h)/l;return this._w=r*u+this._w*A,this._x=n*u+this._x*A,this._y=s*u+this._y*A,this._z=a*u+this._z*A,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),a=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ne{constructor(e=0,t=0,n=0){ne.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(jl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(jl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,a=e.elements;return this.x=a[0]*t+a[3]*n+a[6]*s,this.y=a[1]*t+a[4]*n+a[7]*s,this.z=a[2]*t+a[5]*n+a[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,a=e.elements,r=1/(a[3]*t+a[7]*n+a[11]*s+a[15]);return this.x=(a[0]*t+a[4]*n+a[8]*s+a[12])*r,this.y=(a[1]*t+a[5]*n+a[9]*s+a[13])*r,this.z=(a[2]*t+a[6]*n+a[10]*s+a[14])*r,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,a=e.x,r=e.y,o=e.z,c=e.w,l=2*(r*s-o*n),h=2*(o*t-a*s),u=2*(a*n-r*t);return this.x=t+c*l+r*u-o*h,this.y=n+c*h+o*l-a*u,this.z=s+c*u+a*h-r*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s,this.y=a[1]*t+a[5]*n+a[9]*s,this.z=a[2]*t+a[6]*n+a[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,a=e.z,r=t.x,o=t.y,c=t.z;return this.x=s*c-a*o,this.y=a*r-n*c,this.z=n*o-s*r,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Eo.copy(this).projectOnVector(e),this.sub(Eo)}reflect(e){return this.sub(Eo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(sn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Eo=new ne,jl=new wt;class Ui{constructor(e=new ne(1/0,1/0,1/0),t=new ne(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Kn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Kn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Kn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const a=n.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let r=0,o=a.count;r<o;r++)e.isMesh===!0?e.getVertexPosition(r,Kn):Kn.fromBufferAttribute(a,r),Kn.applyMatrix4(e.matrixWorld),this.expandByPoint(Kn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ja.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ja.copy(n.boundingBox)),Ja.applyMatrix4(e.matrixWorld),this.union(Ja)}const s=e.children;for(let a=0,r=s.length;a<r;a++)this.expandByObject(s[a],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Kn),Kn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ua),Za.subVectors(this.max,ua),Is.subVectors(e.a,ua),Ts.subVectors(e.b,ua),Bs.subVectors(e.c,ua),Qi.subVectors(Ts,Is),ki.subVectors(Bs,Ts),ns.subVectors(Is,Bs);let t=[0,-Qi.z,Qi.y,0,-ki.z,ki.y,0,-ns.z,ns.y,Qi.z,0,-Qi.x,ki.z,0,-ki.x,ns.z,0,-ns.x,-Qi.y,Qi.x,0,-ki.y,ki.x,0,-ns.y,ns.x,0];return!vo(t,Is,Ts,Bs,Za)||(t=[1,0,0,0,1,0,0,0,1],!vo(t,Is,Ts,Bs,Za))?!1:($a.crossVectors(Qi,ki),t=[$a.x,$a.y,$a.z],vo(t,Is,Ts,Bs,Za))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Kn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Kn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(vi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),vi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),vi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),vi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),vi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),vi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),vi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),vi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(vi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const vi=[new ne,new ne,new ne,new ne,new ne,new ne,new ne,new ne],Kn=new ne,Ja=new Ui,Is=new ne,Ts=new ne,Bs=new ne,Qi=new ne,ki=new ne,ns=new ne,ua=new ne,Za=new ne,$a=new ne,is=new ne;function vo(i,e,t,n,s){for(let a=0,r=i.length-3;a<=r;a+=3){is.fromArray(i,a);const o=s.x*Math.abs(is.x)+s.y*Math.abs(is.y)+s.z*Math.abs(is.z),c=e.dot(is),l=t.dot(is),h=n.dot(is);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}const Zd=new Ui,fa=new ne,Mo=new ne;class pi{constructor(e=new ne,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Zd.setFromPoints(e).getCenter(n);let s=0;for(let a=0,r=e.length;a<r;a++)s=Math.max(s,n.distanceToSquared(e[a]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;fa.subVectors(e,this.center);const t=fa.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(fa,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Mo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(fa.copy(e.center).add(Mo)),this.expandByPoint(fa.copy(e.center).sub(Mo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Mi=new ne,yo=new ne,er=new ne,Oi=new ne,Co=new ne,tr=new ne,wo=new ne;class ja{constructor(e=new ne,t=new ne(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Mi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Mi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Mi.copy(this.origin).addScaledVector(this.direction,t),Mi.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){yo.copy(e).add(t).multiplyScalar(.5),er.copy(t).sub(e).normalize(),Oi.copy(this.origin).sub(yo);const a=e.distanceTo(t)*.5,r=-this.direction.dot(er),o=Oi.dot(this.direction),c=-Oi.dot(er),l=Oi.lengthSq(),h=Math.abs(1-r*r);let u,A,g,x;if(h>0)if(u=r*c-o,A=r*o-c,x=a*h,u>=0)if(A>=-x)if(A<=x){const _=1/h;u*=_,A*=_,g=u*(u+r*A+2*o)+A*(r*u+A+2*c)+l}else A=a,u=Math.max(0,-(r*A+o)),g=-u*u+A*(A+2*c)+l;else A=-a,u=Math.max(0,-(r*A+o)),g=-u*u+A*(A+2*c)+l;else A<=-x?(u=Math.max(0,-(-r*a+o)),A=u>0?-a:Math.min(Math.max(-a,-c),a),g=-u*u+A*(A+2*c)+l):A<=x?(u=0,A=Math.min(Math.max(-a,-c),a),g=A*(A+2*c)+l):(u=Math.max(0,-(r*a+o)),A=u>0?a:Math.min(Math.max(-a,-c),a),g=-u*u+A*(A+2*c)+l);else A=r>0?-a:a,u=Math.max(0,-(r*A+o)),g=-u*u+A*(A+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(yo).addScaledVector(er,A),g}intersectSphere(e,t){Mi.subVectors(e.center,this.origin);const n=Mi.dot(this.direction),s=Mi.dot(Mi)-n*n,a=e.radius*e.radius;if(s>a)return null;const r=Math.sqrt(a-s),o=n-r,c=n+r;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,a,r,o,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,A=this.origin;return l>=0?(n=(e.min.x-A.x)*l,s=(e.max.x-A.x)*l):(n=(e.max.x-A.x)*l,s=(e.min.x-A.x)*l),h>=0?(a=(e.min.y-A.y)*h,r=(e.max.y-A.y)*h):(a=(e.max.y-A.y)*h,r=(e.min.y-A.y)*h),n>r||a>s||((a>n||isNaN(n))&&(n=a),(r<s||isNaN(s))&&(s=r),u>=0?(o=(e.min.z-A.z)*u,c=(e.max.z-A.z)*u):(o=(e.max.z-A.z)*u,c=(e.min.z-A.z)*u),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Mi)!==null}intersectTriangle(e,t,n,s,a){Co.subVectors(t,e),tr.subVectors(n,e),wo.crossVectors(Co,tr);let r=this.direction.dot(wo),o;if(r>0){if(s)return null;o=1}else if(r<0)o=-1,r=-r;else return null;Oi.subVectors(this.origin,e);const c=o*this.direction.dot(tr.crossVectors(Oi,tr));if(c<0)return null;const l=o*this.direction.dot(Co.cross(Oi));if(l<0||c+l>r)return null;const h=-o*Oi.dot(wo);return h<0?null:this.at(h/r,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class He{constructor(e,t,n,s,a,r,o,c,l,h,u,A,g,x,_,p){He.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,a,r,o,c,l,h,u,A,g,x,_,p)}set(e,t,n,s,a,r,o,c,l,h,u,A,g,x,_,p){const d=this.elements;return d[0]=e,d[4]=t,d[8]=n,d[12]=s,d[1]=a,d[5]=r,d[9]=o,d[13]=c,d[2]=l,d[6]=h,d[10]=u,d[14]=A,d[3]=g,d[7]=x,d[11]=_,d[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new He().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/Rs.setFromMatrixColumn(e,0).length(),a=1/Rs.setFromMatrixColumn(e,1).length(),r=1/Rs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*a,t[5]=n[5]*a,t[6]=n[6]*a,t[7]=0,t[8]=n[8]*r,t[9]=n[9]*r,t[10]=n[10]*r,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,a=e.z,r=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(a),u=Math.sin(a);if(e.order==="XYZ"){const A=r*h,g=r*u,x=o*h,_=o*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=g+x*l,t[5]=A-_*l,t[9]=-o*c,t[2]=_-A*l,t[6]=x+g*l,t[10]=r*c}else if(e.order==="YXZ"){const A=c*h,g=c*u,x=l*h,_=l*u;t[0]=A+_*o,t[4]=x*o-g,t[8]=r*l,t[1]=r*u,t[5]=r*h,t[9]=-o,t[2]=g*o-x,t[6]=_+A*o,t[10]=r*c}else if(e.order==="ZXY"){const A=c*h,g=c*u,x=l*h,_=l*u;t[0]=A-_*o,t[4]=-r*u,t[8]=x+g*o,t[1]=g+x*o,t[5]=r*h,t[9]=_-A*o,t[2]=-r*l,t[6]=o,t[10]=r*c}else if(e.order==="ZYX"){const A=r*h,g=r*u,x=o*h,_=o*u;t[0]=c*h,t[4]=x*l-g,t[8]=A*l+_,t[1]=c*u,t[5]=_*l+A,t[9]=g*l-x,t[2]=-l,t[6]=o*c,t[10]=r*c}else if(e.order==="YZX"){const A=r*c,g=r*l,x=o*c,_=o*l;t[0]=c*h,t[4]=_-A*u,t[8]=x*u+g,t[1]=u,t[5]=r*h,t[9]=-o*h,t[2]=-l*h,t[6]=g*u+x,t[10]=A-_*u}else if(e.order==="XZY"){const A=r*c,g=r*l,x=o*c,_=o*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=A*u+_,t[5]=r*h,t[9]=g*u-x,t[2]=x*u-g,t[6]=o*h,t[10]=_*u+A}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose($d,e,eA)}lookAt(e,t,n){const s=this.elements;return Bn.subVectors(e,t),Bn.lengthSq()===0&&(Bn.z=1),Bn.normalize(),zi.crossVectors(n,Bn),zi.lengthSq()===0&&(Math.abs(n.z)===1?Bn.x+=1e-4:Bn.z+=1e-4,Bn.normalize(),zi.crossVectors(n,Bn)),zi.normalize(),nr.crossVectors(Bn,zi),s[0]=zi.x,s[4]=nr.x,s[8]=Bn.x,s[1]=zi.y,s[5]=nr.y,s[9]=Bn.y,s[2]=zi.z,s[6]=nr.z,s[10]=Bn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,a=this.elements,r=n[0],o=n[4],c=n[8],l=n[12],h=n[1],u=n[5],A=n[9],g=n[13],x=n[2],_=n[6],p=n[10],d=n[14],M=n[3],y=n[7],v=n[11],q=n[15],H=s[0],U=s[4],Z=s[8],w=s[12],S=s[1],m=s[5],I=s[9],Q=s[13],K=s[2],Y=s[6],te=s[10],X=s[14],V=s[3],ue=s[7],ae=s[11],le=s[15];return a[0]=r*H+o*S+c*K+l*V,a[4]=r*U+o*m+c*Y+l*ue,a[8]=r*Z+o*I+c*te+l*ae,a[12]=r*w+o*Q+c*X+l*le,a[1]=h*H+u*S+A*K+g*V,a[5]=h*U+u*m+A*Y+g*ue,a[9]=h*Z+u*I+A*te+g*ae,a[13]=h*w+u*Q+A*X+g*le,a[2]=x*H+_*S+p*K+d*V,a[6]=x*U+_*m+p*Y+d*ue,a[10]=x*Z+_*I+p*te+d*ae,a[14]=x*w+_*Q+p*X+d*le,a[3]=M*H+y*S+v*K+q*V,a[7]=M*U+y*m+v*Y+q*ue,a[11]=M*Z+y*I+v*te+q*ae,a[15]=M*w+y*Q+v*X+q*le,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],a=e[12],r=e[1],o=e[5],c=e[9],l=e[13],h=e[2],u=e[6],A=e[10],g=e[14],x=e[3],_=e[7],p=e[11],d=e[15];return x*(+a*c*u-s*l*u-a*o*A+n*l*A+s*o*g-n*c*g)+_*(+t*c*g-t*l*A+a*r*A-s*r*g+s*l*h-a*c*h)+p*(+t*l*u-t*o*g-a*r*u+n*r*g+a*o*h-n*l*h)+d*(-s*o*h-t*c*u+t*o*A+s*r*u-n*r*A+n*c*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],a=e[3],r=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=e[9],A=e[10],g=e[11],x=e[12],_=e[13],p=e[14],d=e[15],M=u*p*l-_*A*l+_*c*g-o*p*g-u*c*d+o*A*d,y=x*A*l-h*p*l-x*c*g+r*p*g+h*c*d-r*A*d,v=h*_*l-x*u*l+x*o*g-r*_*g-h*o*d+r*u*d,q=x*u*c-h*_*c-x*o*A+r*_*A+h*o*p-r*u*p,H=t*M+n*y+s*v+a*q;if(H===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const U=1/H;return e[0]=M*U,e[1]=(_*A*a-u*p*a-_*s*g+n*p*g+u*s*d-n*A*d)*U,e[2]=(o*p*a-_*c*a+_*s*l-n*p*l-o*s*d+n*c*d)*U,e[3]=(u*c*a-o*A*a-u*s*l+n*A*l+o*s*g-n*c*g)*U,e[4]=y*U,e[5]=(h*p*a-x*A*a+x*s*g-t*p*g-h*s*d+t*A*d)*U,e[6]=(x*c*a-r*p*a-x*s*l+t*p*l+r*s*d-t*c*d)*U,e[7]=(r*A*a-h*c*a+h*s*l-t*A*l-r*s*g+t*c*g)*U,e[8]=v*U,e[9]=(x*u*a-h*_*a-x*n*g+t*_*g+h*n*d-t*u*d)*U,e[10]=(r*_*a-x*o*a+x*n*l-t*_*l-r*n*d+t*o*d)*U,e[11]=(h*o*a-r*u*a-h*n*l+t*u*l+r*n*g-t*o*g)*U,e[12]=q*U,e[13]=(h*_*s-x*u*s+x*n*A-t*_*A-h*n*p+t*u*p)*U,e[14]=(x*o*s-r*_*s-x*n*c+t*_*c+r*n*p-t*o*p)*U,e[15]=(r*u*s-h*o*s+h*n*c-t*u*c-r*n*A+t*o*A)*U,this}scale(e){const t=this.elements,n=e.x,s=e.y,a=e.z;return t[0]*=n,t[4]*=s,t[8]*=a,t[1]*=n,t[5]*=s,t[9]*=a,t[2]*=n,t[6]*=s,t[10]*=a,t[3]*=n,t[7]*=s,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),a=1-n,r=e.x,o=e.y,c=e.z,l=a*r,h=a*o;return this.set(l*r+n,l*o-s*c,l*c+s*o,0,l*o+s*c,h*o+n,h*c-s*r,0,l*c-s*o,h*c+s*r,a*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,a,r){return this.set(1,n,a,0,e,1,r,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,a=t._x,r=t._y,o=t._z,c=t._w,l=a+a,h=r+r,u=o+o,A=a*l,g=a*h,x=a*u,_=r*h,p=r*u,d=o*u,M=c*l,y=c*h,v=c*u,q=n.x,H=n.y,U=n.z;return s[0]=(1-(_+d))*q,s[1]=(g+v)*q,s[2]=(x-y)*q,s[3]=0,s[4]=(g-v)*H,s[5]=(1-(A+d))*H,s[6]=(p+M)*H,s[7]=0,s[8]=(x+y)*U,s[9]=(p-M)*U,s[10]=(1-(A+_))*U,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let a=Rs.set(s[0],s[1],s[2]).length();const r=Rs.set(s[4],s[5],s[6]).length(),o=Rs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(a=-a),e.x=s[12],e.y=s[13],e.z=s[14],Jn.copy(this);const l=1/a,h=1/r,u=1/o;return Jn.elements[0]*=l,Jn.elements[1]*=l,Jn.elements[2]*=l,Jn.elements[4]*=h,Jn.elements[5]*=h,Jn.elements[6]*=h,Jn.elements[8]*=u,Jn.elements[9]*=u,Jn.elements[10]*=u,t.setFromRotationMatrix(Jn),n.x=a,n.y=r,n.z=o,this}makePerspective(e,t,n,s,a,r,o=Di){const c=this.elements,l=2*a/(t-e),h=2*a/(n-s),u=(t+e)/(t-e),A=(n+s)/(n-s);let g,x;if(o===Di)g=-(r+a)/(r-a),x=-2*r*a/(r-a);else if(o===Kr)g=-r/(r-a),x=-r*a/(r-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=A,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,a,r,o=Di){const c=this.elements,l=1/(t-e),h=1/(n-s),u=1/(r-a),A=(t+e)*l,g=(n+s)*h;let x,_;if(o===Di)x=(r+a)*u,_=-2*u;else if(o===Kr)x=a*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-A,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-g,c[2]=0,c[6]=0,c[10]=_,c[14]=-x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Rs=new ne,Jn=new He,$d=new ne(0,0,0),eA=new ne(1,1,1),zi=new ne,nr=new ne,Bn=new ne,ql=new He,Yl=new wt;class qn{constructor(e=0,t=0,n=0,s=qn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,a=s[0],r=s[4],o=s[8],c=s[1],l=s[5],h=s[9],u=s[2],A=s[6],g=s[10];switch(t){case"XYZ":this._y=Math.asin(sn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,g),this._z=Math.atan2(-r,a)):(this._x=Math.atan2(A,l),this._z=0);break;case"YXZ":this._x=Math.asin(-sn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,g),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,a),this._z=0);break;case"ZXY":this._x=Math.asin(sn(A,-1,1)),Math.abs(A)<.9999999?(this._y=Math.atan2(-u,g),this._z=Math.atan2(-r,l)):(this._y=0,this._z=Math.atan2(c,a));break;case"ZYX":this._y=Math.asin(-sn(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(A,g),this._z=Math.atan2(c,a)):(this._x=0,this._z=Math.atan2(-r,l));break;case"YZX":this._z=Math.asin(sn(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,a)):(this._x=0,this._y=Math.atan2(o,g));break;case"XZY":this._z=Math.asin(-sn(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(A,l),this._y=Math.atan2(o,a)):(this._x=Math.atan2(-h,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return ql.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ql,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Yl.setFromEuler(this),this.setFromQuaternion(Yl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}qn.DEFAULT_ORDER="XYZ";class Wu{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let tA=0;const Xl=new ne,Ds=new wt,yi=new He,ir=new ne,da=new ne,nA=new ne,iA=new wt,Kl=new ne(1,0,0),Jl=new ne(0,1,0),Zl=new ne(0,0,1),$l={type:"added"},sA={type:"removed"},Ls={type:"childadded",child:null},So={type:"childremoved",child:null};class Dt extends Es{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:tA++}),this.uuid=si(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Dt.DEFAULT_UP.clone();const e=new ne,t=new qn,n=new wt,s=new ne(1,1,1);function a(){n.setFromEuler(t,!1)}function r(){t.setFromQuaternion(n,void 0,!1)}t._onChange(a),n._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new He},normalMatrix:{value:new it}}),this.matrix=new He,this.matrixWorld=new He,this.matrixAutoUpdate=Dt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Wu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ds.setFromAxisAngle(e,t),this.quaternion.multiply(Ds),this}rotateOnWorldAxis(e,t){return Ds.setFromAxisAngle(e,t),this.quaternion.premultiply(Ds),this}rotateX(e){return this.rotateOnAxis(Kl,e)}rotateY(e){return this.rotateOnAxis(Jl,e)}rotateZ(e){return this.rotateOnAxis(Zl,e)}translateOnAxis(e,t){return Xl.copy(e).applyQuaternion(this.quaternion),this.position.add(Xl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Kl,e)}translateY(e){return this.translateOnAxis(Jl,e)}translateZ(e){return this.translateOnAxis(Zl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(yi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ir.copy(e):ir.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),da.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?yi.lookAt(da,ir,this.up):yi.lookAt(ir,da,this.up),this.quaternion.setFromRotationMatrix(yi),s&&(yi.extractRotation(s.matrixWorld),Ds.setFromRotationMatrix(yi),this.quaternion.premultiply(Ds.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent($l),Ls.child=e,this.dispatchEvent(Ls),Ls.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(sA),So.child=e,this.dispatchEvent(So),So.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),yi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),yi.multiply(e.parent.matrixWorld)),e.applyMatrix4(yi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent($l),Ls.child=e,this.dispatchEvent(Ls),Ls.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let a=0,r=s.length;a<r;a++)s[a].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(da,e,nA),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(da,iA,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let a=0,r=s.length;a<r;a++)s[a].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function a(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=a(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];a(e.shapes,u)}else a(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(a(e.materials,this.material[c]));s.material=o}else s.material=a(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];s.animations.push(a(e.animations,c))}}if(t){const o=r(e.geometries),c=r(e.materials),l=r(e.textures),h=r(e.images),u=r(e.shapes),A=r(e.skeletons),g=r(e.animations),x=r(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),A.length>0&&(n.skeletons=A),g.length>0&&(n.animations=g),x.length>0&&(n.nodes=x)}return n.object=s,n;function r(o){const c=[];for(const l in o){const h=o[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}Dt.DEFAULT_UP=new ne(0,1,0);Dt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Zn=new ne,Ci=new ne,Io=new ne,wi=new ne,Ps=new ne,Us=new ne,eh=new ne,To=new ne,Bo=new ne,Ro=new ne,Do=new dt,Lo=new dt,Po=new dt;class ii{constructor(e=new ne,t=new ne,n=new ne){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Zn.subVectors(e,t),s.cross(Zn);const a=s.lengthSq();return a>0?s.multiplyScalar(1/Math.sqrt(a)):s.set(0,0,0)}static getBarycoord(e,t,n,s,a){Zn.subVectors(s,t),Ci.subVectors(n,t),Io.subVectors(e,t);const r=Zn.dot(Zn),o=Zn.dot(Ci),c=Zn.dot(Io),l=Ci.dot(Ci),h=Ci.dot(Io),u=r*l-o*o;if(u===0)return a.set(0,0,0),null;const A=1/u,g=(l*c-o*h)*A,x=(r*h-o*c)*A;return a.set(1-g-x,x,g)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,wi)===null?!1:wi.x>=0&&wi.y>=0&&wi.x+wi.y<=1}static getInterpolation(e,t,n,s,a,r,o,c){return this.getBarycoord(e,t,n,s,wi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(a,wi.x),c.addScaledVector(r,wi.y),c.addScaledVector(o,wi.z),c)}static getInterpolatedAttribute(e,t,n,s,a,r){return Do.setScalar(0),Lo.setScalar(0),Po.setScalar(0),Do.fromBufferAttribute(e,t),Lo.fromBufferAttribute(e,n),Po.fromBufferAttribute(e,s),r.setScalar(0),r.addScaledVector(Do,a.x),r.addScaledVector(Lo,a.y),r.addScaledVector(Po,a.z),r}static isFrontFacing(e,t,n,s){return Zn.subVectors(n,t),Ci.subVectors(e,t),Zn.cross(Ci).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Zn.subVectors(this.c,this.b),Ci.subVectors(this.a,this.b),Zn.cross(Ci).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ii.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ii.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,a){return ii.getInterpolation(e,this.a,this.b,this.c,t,n,s,a)}containsPoint(e){return ii.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ii.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,a=this.c;let r,o;Ps.subVectors(s,n),Us.subVectors(a,n),To.subVectors(e,n);const c=Ps.dot(To),l=Us.dot(To);if(c<=0&&l<=0)return t.copy(n);Bo.subVectors(e,s);const h=Ps.dot(Bo),u=Us.dot(Bo);if(h>=0&&u<=h)return t.copy(s);const A=c*u-h*l;if(A<=0&&c>=0&&h<=0)return r=c/(c-h),t.copy(n).addScaledVector(Ps,r);Ro.subVectors(e,a);const g=Ps.dot(Ro),x=Us.dot(Ro);if(x>=0&&g<=x)return t.copy(a);const _=g*l-c*x;if(_<=0&&l>=0&&x<=0)return o=l/(l-x),t.copy(n).addScaledVector(Us,o);const p=h*x-g*u;if(p<=0&&u-h>=0&&g-x>=0)return eh.subVectors(a,s),o=(u-h)/(u-h+(g-x)),t.copy(s).addScaledVector(eh,o);const d=1/(p+_+A);return r=_*d,o=A*d,t.copy(n).addScaledVector(Ps,r).addScaledVector(Us,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const ju={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Gi={h:0,s:0,l:0},sr={h:0,s:0,l:0};function Uo(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Re{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Nt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ht.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=ht.workingColorSpace){return this.r=e,this.g=t,this.b=n,ht.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=ht.workingColorSpace){if(e=ml(e,1),t=sn(t,0,1),n=sn(n,0,1),t===0)this.r=this.g=this.b=n;else{const a=n<=.5?n*(1+t):n+t-n*t,r=2*n-a;this.r=Uo(r,a,e+1/3),this.g=Uo(r,a,e),this.b=Uo(r,a,e-1/3)}return ht.toWorkingColorSpace(this,s),this}setStyle(e,t=Nt){function n(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const r=s[1],o=s[2];switch(r){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=s[1],r=a.length;if(r===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(r===6)return this.setHex(parseInt(a,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Nt){const n=ju[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Pi(e.r),this.g=Pi(e.g),this.b=Pi(e.b),this}copyLinearToSRGB(e){return this.r=qs(e.r),this.g=qs(e.g),this.b=qs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Nt){return ht.fromWorkingColorSpace(un.copy(this),e),Math.round(sn(un.r*255,0,255))*65536+Math.round(sn(un.g*255,0,255))*256+Math.round(sn(un.b*255,0,255))}getHexString(e=Nt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ht.workingColorSpace){ht.fromWorkingColorSpace(un.copy(this),t);const n=un.r,s=un.g,a=un.b,r=Math.max(n,s,a),o=Math.min(n,s,a);let c,l;const h=(o+r)/2;if(o===r)c=0,l=0;else{const u=r-o;switch(l=h<=.5?u/(r+o):u/(2-r-o),r){case n:c=(s-a)/u+(s<a?6:0);break;case s:c=(a-n)/u+2;break;case a:c=(n-s)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=ht.workingColorSpace){return ht.fromWorkingColorSpace(un.copy(this),t),e.r=un.r,e.g=un.g,e.b=un.b,e}getStyle(e=Nt){ht.fromWorkingColorSpace(un.copy(this),e);const t=un.r,n=un.g,s=un.b;return e!==Nt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Gi),this.setHSL(Gi.h+e,Gi.s+t,Gi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Gi),e.getHSL(sr);const n=Da(Gi.h,sr.h,t),s=Da(Gi.s,sr.s,t),a=Da(Gi.l,sr.l,t);return this.setHSL(n,s,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,a=e.elements;return this.r=a[0]*t+a[3]*n+a[6]*s,this.g=a[1]*t+a[4]*n+a[7]*s,this.b=a[2]*t+a[5]*n+a[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const un=new Re;Re.NAMES=ju;let aA=0;class jn extends Es{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:aA++}),this.uuid=si(),this.name="",this.blending=Ws,this.side=ai,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=dc,this.blendDst=Ac,this.blendEquation=ti,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Re(0,0,0),this.blendAlpha=0,this.depthFunc=Js,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Nl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ws,this.stencilZFail=ws,this.stencilZPass=ws,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ws&&(n.blending=this.blending),this.side!==ai&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==dc&&(n.blendSrc=this.blendSrc),this.blendDst!==Ac&&(n.blendDst=this.blendDst),this.blendEquation!==ti&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Js&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Nl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ws&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ws&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ws&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(a){const r=[];for(const o in a){const c=a[o];delete c.metadata,r.push(c)}return r}if(t){const a=s(e.textures),r=s(e.images);a.length>0&&(n.textures=a),r.length>0&&(n.images=r)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let a=0;a!==s;++a)n[a]=t[a].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Ji extends jn{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new Re(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qn,this.combine=cl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ht=new ne,ar=new ke;class Lt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Wc,this.updateRanges=[],this.gpuType=fn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,a=this.itemSize;s<a;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ar.fromBufferAttribute(this,t),ar.applyMatrix3(e),this.setXY(t,ar.x,ar.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ht.fromBufferAttribute(this,t),Ht.applyMatrix3(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ht.fromBufferAttribute(this,t),Ht.applyMatrix4(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ht.fromBufferAttribute(this,t),Ht.applyNormalMatrix(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ht.fromBufferAttribute(this,t),Ht.transformDirection(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=ni(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=gt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ni(t,this.array)),t}setX(e,t){return this.normalized&&(t=gt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ni(t,this.array)),t}setY(e,t){return this.normalized&&(t=gt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ni(t,this.array)),t}setZ(e,t){return this.normalized&&(t=gt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ni(t,this.array)),t}setW(e,t){return this.normalized&&(t=gt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=gt(t,this.array),n=gt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=gt(t,this.array),n=gt(n,this.array),s=gt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,a){return e*=this.itemSize,this.normalized&&(t=gt(t,this.array),n=gt(n,this.array),s=gt(s,this.array),a=gt(a,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Wc&&(e.usage=this.usage),e}}class qu extends Lt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Yu extends Lt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class et extends Lt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let rA=0;const kn=new He,Fo=new Dt,Fs=new ne,Rn=new Ui,Aa=new Ui,Zt=new ne;class xt extends Es{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:rA++}),this.uuid=si(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(zu(e)?Yu:qu)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const a=new it().getNormalMatrix(e);n.applyNormalMatrix(a),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return kn.makeRotationFromQuaternion(e),this.applyMatrix4(kn),this}rotateX(e){return kn.makeRotationX(e),this.applyMatrix4(kn),this}rotateY(e){return kn.makeRotationY(e),this.applyMatrix4(kn),this}rotateZ(e){return kn.makeRotationZ(e),this.applyMatrix4(kn),this}translate(e,t,n){return kn.makeTranslation(e,t,n),this.applyMatrix4(kn),this}scale(e,t,n){return kn.makeScale(e,t,n),this.applyMatrix4(kn),this}lookAt(e){return Fo.lookAt(e),Fo.updateMatrix(),this.applyMatrix4(Fo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Fs).negate(),this.translate(Fs.x,Fs.y,Fs.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,a=e.length;s<a;s++){const r=e[s];n.push(r.x,r.y,r.z||0)}this.setAttribute("position",new et(n,3))}else{for(let n=0,s=t.count;n<s;n++){const a=e[n];t.setXYZ(n,a.x,a.y,a.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ui);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ne(-1/0,-1/0,-1/0),new ne(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const a=t[n];Rn.setFromBufferAttribute(a),this.morphTargetsRelative?(Zt.addVectors(this.boundingBox.min,Rn.min),this.boundingBox.expandByPoint(Zt),Zt.addVectors(this.boundingBox.max,Rn.max),this.boundingBox.expandByPoint(Zt)):(this.boundingBox.expandByPoint(Rn.min),this.boundingBox.expandByPoint(Rn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new pi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ne,1/0);return}if(e){const n=this.boundingSphere.center;if(Rn.setFromBufferAttribute(e),t)for(let a=0,r=t.length;a<r;a++){const o=t[a];Aa.setFromBufferAttribute(o),this.morphTargetsRelative?(Zt.addVectors(Rn.min,Aa.min),Rn.expandByPoint(Zt),Zt.addVectors(Rn.max,Aa.max),Rn.expandByPoint(Zt)):(Rn.expandByPoint(Aa.min),Rn.expandByPoint(Aa.max))}Rn.getCenter(n);let s=0;for(let a=0,r=e.count;a<r;a++)Zt.fromBufferAttribute(e,a),s=Math.max(s,n.distanceToSquared(Zt));if(t)for(let a=0,r=t.length;a<r;a++){const o=t[a],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)Zt.fromBufferAttribute(o,l),c&&(Fs.fromBufferAttribute(e,l),Zt.add(Fs)),s=Math.max(s,n.distanceToSquared(Zt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,a=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Lt(new Float32Array(4*n.count),4));const r=this.getAttribute("tangent"),o=[],c=[];for(let Z=0;Z<n.count;Z++)o[Z]=new ne,c[Z]=new ne;const l=new ne,h=new ne,u=new ne,A=new ke,g=new ke,x=new ke,_=new ne,p=new ne;function d(Z,w,S){l.fromBufferAttribute(n,Z),h.fromBufferAttribute(n,w),u.fromBufferAttribute(n,S),A.fromBufferAttribute(a,Z),g.fromBufferAttribute(a,w),x.fromBufferAttribute(a,S),h.sub(l),u.sub(l),g.sub(A),x.sub(A);const m=1/(g.x*x.y-x.x*g.y);isFinite(m)&&(_.copy(h).multiplyScalar(x.y).addScaledVector(u,-g.y).multiplyScalar(m),p.copy(u).multiplyScalar(g.x).addScaledVector(h,-x.x).multiplyScalar(m),o[Z].add(_),o[w].add(_),o[S].add(_),c[Z].add(p),c[w].add(p),c[S].add(p))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let Z=0,w=M.length;Z<w;++Z){const S=M[Z],m=S.start,I=S.count;for(let Q=m,K=m+I;Q<K;Q+=3)d(e.getX(Q+0),e.getX(Q+1),e.getX(Q+2))}const y=new ne,v=new ne,q=new ne,H=new ne;function U(Z){q.fromBufferAttribute(s,Z),H.copy(q);const w=o[Z];y.copy(w),y.sub(q.multiplyScalar(q.dot(w))).normalize(),v.crossVectors(H,w);const m=v.dot(c[Z])<0?-1:1;r.setXYZW(Z,y.x,y.y,y.z,m)}for(let Z=0,w=M.length;Z<w;++Z){const S=M[Z],m=S.start,I=S.count;for(let Q=m,K=m+I;Q<K;Q+=3)U(e.getX(Q+0)),U(e.getX(Q+1)),U(e.getX(Q+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Lt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let A=0,g=n.count;A<g;A++)n.setXYZ(A,0,0,0);const s=new ne,a=new ne,r=new ne,o=new ne,c=new ne,l=new ne,h=new ne,u=new ne;if(e)for(let A=0,g=e.count;A<g;A+=3){const x=e.getX(A+0),_=e.getX(A+1),p=e.getX(A+2);s.fromBufferAttribute(t,x),a.fromBufferAttribute(t,_),r.fromBufferAttribute(t,p),h.subVectors(r,a),u.subVectors(s,a),h.cross(u),o.fromBufferAttribute(n,x),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,p),o.add(h),c.add(h),l.add(h),n.setXYZ(x,o.x,o.y,o.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(p,l.x,l.y,l.z)}else for(let A=0,g=t.count;A<g;A+=3)s.fromBufferAttribute(t,A+0),a.fromBufferAttribute(t,A+1),r.fromBufferAttribute(t,A+2),h.subVectors(r,a),u.subVectors(s,a),h.cross(u),n.setXYZ(A+0,h.x,h.y,h.z),n.setXYZ(A+1,h.x,h.y,h.z),n.setXYZ(A+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Zt.fromBufferAttribute(e,t),Zt.normalize(),e.setXYZ(t,Zt.x,Zt.y,Zt.z)}toNonIndexed(){function e(o,c){const l=o.array,h=o.itemSize,u=o.normalized,A=new l.constructor(c.length*h);let g=0,x=0;for(let _=0,p=c.length;_<p;_++){o.isInterleavedBufferAttribute?g=c[_]*o.data.stride+o.offset:g=c[_]*h;for(let d=0;d<h;d++)A[x++]=l[g++]}return new Lt(A,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new xt,n=this.index.array,s=this.attributes;for(const o in s){const c=s[o],l=e(c,n);t.setAttribute(o,l)}const a=this.morphAttributes;for(const o in a){const c=[],l=a[o];for(let h=0,u=l.length;h<u;h++){const A=l[h],g=e(A,n);c.push(g)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let o=0,c=r.length;o<c;o++){const l=r[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const s={};let a=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,A=l.length;u<A;u++){const g=l[u];h.push(g.toJSON(e.data))}h.length>0&&(s[c]=h,a=!0)}a&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(e.data.groups=JSON.parse(JSON.stringify(r)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const s=e.attributes;for(const l in s){const h=s[l];this.setAttribute(l,h.clone(t))}const a=e.morphAttributes;for(const l in a){const h=[],u=a[l];for(let A=0,g=u.length;A<g;A++)h.push(u[A].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;const r=e.groups;for(let l=0,h=r.length;l<h;l++){const u=r[l];this.addGroup(u.start,u.count,u.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const th=new He,ss=new ja,rr=new pi,nh=new ne,or=new ne,cr=new ne,lr=new ne,No=new ne,hr=new ne,ih=new ne,ur=new ne;class nt extends Dt{constructor(e=new xt,t=new Ji){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,r=s.length;a<r;a++){const o=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,a=n.morphAttributes.position,r=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(a&&o){hr.set(0,0,0);for(let c=0,l=a.length;c<l;c++){const h=o[c],u=a[c];h!==0&&(No.fromBufferAttribute(u,e),r?hr.addScaledVector(No,h):hr.addScaledVector(No.sub(t),h))}t.add(hr)}return t}raycast(e,t){const n=this.geometry,s=this.material,a=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),rr.copy(n.boundingSphere),rr.applyMatrix4(a),ss.copy(e.ray).recast(e.near),!(rr.containsPoint(ss.origin)===!1&&(ss.intersectSphere(rr,nh)===null||ss.origin.distanceToSquared(nh)>(e.far-e.near)**2))&&(th.copy(a).invert(),ss.copy(e.ray).applyMatrix4(th),!(n.boundingBox!==null&&ss.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ss)))}_computeIntersections(e,t,n){let s;const a=this.geometry,r=this.material,o=a.index,c=a.attributes.position,l=a.attributes.uv,h=a.attributes.uv1,u=a.attributes.normal,A=a.groups,g=a.drawRange;if(o!==null)if(Array.isArray(r))for(let x=0,_=A.length;x<_;x++){const p=A[x],d=r[p.materialIndex],M=Math.max(p.start,g.start),y=Math.min(o.count,Math.min(p.start+p.count,g.start+g.count));for(let v=M,q=y;v<q;v+=3){const H=o.getX(v),U=o.getX(v+1),Z=o.getX(v+2);s=fr(this,d,e,n,l,h,u,H,U,Z),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{const x=Math.max(0,g.start),_=Math.min(o.count,g.start+g.count);for(let p=x,d=_;p<d;p+=3){const M=o.getX(p),y=o.getX(p+1),v=o.getX(p+2);s=fr(this,r,e,n,l,h,u,M,y,v),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(r))for(let x=0,_=A.length;x<_;x++){const p=A[x],d=r[p.materialIndex],M=Math.max(p.start,g.start),y=Math.min(c.count,Math.min(p.start+p.count,g.start+g.count));for(let v=M,q=y;v<q;v+=3){const H=v,U=v+1,Z=v+2;s=fr(this,d,e,n,l,h,u,H,U,Z),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{const x=Math.max(0,g.start),_=Math.min(c.count,g.start+g.count);for(let p=x,d=_;p<d;p+=3){const M=p,y=p+1,v=p+2;s=fr(this,r,e,n,l,h,u,M,y,v),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}}}function oA(i,e,t,n,s,a,r,o){let c;if(e.side===In?c=n.intersectTriangle(r,a,s,!0,o):c=n.intersectTriangle(s,a,r,e.side===ai,o),c===null)return null;ur.copy(o),ur.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(ur);return l<t.near||l>t.far?null:{distance:l,point:ur.clone(),object:i}}function fr(i,e,t,n,s,a,r,o,c,l){i.getVertexPosition(o,or),i.getVertexPosition(c,cr),i.getVertexPosition(l,lr);const h=oA(i,e,t,n,or,cr,lr,ih);if(h){const u=new ne;ii.getBarycoord(ih,or,cr,lr,u),s&&(h.uv=ii.getInterpolatedAttribute(s,o,c,l,u,new ke)),a&&(h.uv1=ii.getInterpolatedAttribute(a,o,c,l,u,new ke)),r&&(h.normal=ii.getInterpolatedAttribute(r,o,c,l,u,new ne),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const A={a:o,b:c,c:l,normal:new ne,materialIndex:0};ii.getNormal(or,cr,lr,A.normal),h.face=A,h.barycoord=u}return h}class Rt extends xt{constructor(e=1,t=1,n=1,s=1,a=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:a,depthSegments:r};const o=this;s=Math.floor(s),a=Math.floor(a),r=Math.floor(r);const c=[],l=[],h=[],u=[];let A=0,g=0;x("z","y","x",-1,-1,n,t,e,r,a,0),x("z","y","x",1,-1,n,t,-e,r,a,1),x("x","z","y",1,1,e,n,t,s,r,2),x("x","z","y",1,-1,e,n,-t,s,r,3),x("x","y","z",1,-1,e,t,n,s,a,4),x("x","y","z",-1,-1,e,t,-n,s,a,5),this.setIndex(c),this.setAttribute("position",new et(l,3)),this.setAttribute("normal",new et(h,3)),this.setAttribute("uv",new et(u,2));function x(_,p,d,M,y,v,q,H,U,Z,w){const S=v/U,m=q/Z,I=v/2,Q=q/2,K=H/2,Y=U+1,te=Z+1;let X=0,V=0;const ue=new ne;for(let ae=0;ae<te;ae++){const le=ae*m-Q;for(let ge=0;ge<Y;ge++){const Ee=ge*S-I;ue[_]=Ee*M,ue[p]=le*y,ue[d]=K,l.push(ue.x,ue.y,ue.z),ue[_]=0,ue[p]=0,ue[d]=H>0?1:-1,h.push(ue.x,ue.y,ue.z),u.push(ge/U),u.push(1-ae/Z),X+=1}}for(let ae=0;ae<Z;ae++)for(let le=0;le<U;le++){const ge=A+le+Y*ae,Ee=A+le+Y*(ae+1),$=A+(le+1)+Y*(ae+1),oe=A+(le+1)+Y*ae;c.push(ge,Ee,oe),c.push(Ee,$,oe),V+=6}o.addGroup(g,V,w),g+=V,A+=X}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Rt(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ea(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function gn(i){const e={};for(let t=0;t<i.length;t++){const n=ea(i[t]);for(const s in n)e[s]=n[s]}return e}function cA(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Xu(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ht.workingColorSpace}const di={clone:ea,merge:gn};var lA=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,hA=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Wt extends jn{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=lA,this.fragmentShader=hA,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ea(e.uniforms),this.uniformsGroups=cA(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const r=this.uniforms[s].value;r&&r.isTexture?t.uniforms[s]={type:"t",value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[s]={type:"c",value:r.getHex()}:r&&r.isVector2?t.uniforms[s]={type:"v2",value:r.toArray()}:r&&r.isVector3?t.uniforms[s]={type:"v3",value:r.toArray()}:r&&r.isVector4?t.uniforms[s]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?t.uniforms[s]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?t.uniforms[s]={type:"m4",value:r.toArray()}:t.uniforms[s]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Ku extends Dt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new He,this.projectionMatrix=new He,this.projectionMatrixInverse=new He,this.coordinateSystem=Di}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Hi=new ne,sh=new ke,ah=new ke;class xn extends Ku{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=$s*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ra*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return $s*2*Math.atan(Math.tan(Ra*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Hi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Hi.x,Hi.y).multiplyScalar(-e/Hi.z),Hi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Hi.x,Hi.y).multiplyScalar(-e/Hi.z)}getViewSize(e,t){return this.getViewBounds(e,sh,ah),t.subVectors(ah,sh)}setViewOffset(e,t,n,s,a,r){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=a,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ra*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,a=-.5*s;const r=this.view;if(this.view!==null&&this.view.enabled){const c=r.fullWidth,l=r.fullHeight;a+=r.offsetX*s/c,t-=r.offsetY*n/l,s*=r.width/c,n*=r.height/l}const o=this.filmOffset;o!==0&&(a+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ns=-90,Qs=1;class uA extends Dt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new xn(Ns,Qs,e,t);s.layers=this.layers,this.add(s);const a=new xn(Ns,Qs,e,t);a.layers=this.layers,this.add(a);const r=new xn(Ns,Qs,e,t);r.layers=this.layers,this.add(r);const o=new xn(Ns,Qs,e,t);o.layers=this.layers,this.add(o);const c=new xn(Ns,Qs,e,t);c.layers=this.layers,this.add(c);const l=new xn(Ns,Qs,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,a,r,o,c]=t;for(const l of t)this.remove(l);if(e===Di)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Kr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,r,o,c,l,h]=this.children,u=e.getRenderTarget(),A=e.getActiveCubeFace(),g=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,a),e.setRenderTarget(n,1,s),e.render(t,r),e.setRenderTarget(n,2,s),e.render(t,o),e.setRenderTarget(n,3,s),e.render(t,c),e.setRenderTarget(n,4,s),e.render(t,l),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(u,A,g),e.xr.enabled=x,n.texture.needsPMREMUpdate=!0}}class Ju extends Gt{constructor(e,t,n,s,a,r,o,c,l,h){e=e!==void 0?e:[],t=t!==void 0?t:ps,super(e,t,n,s,a,r,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class fA extends Pn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Ju(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:_n}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Rt(5,5,5),a=new Wt({name:"CubemapFromEquirect",uniforms:ea(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:In,blending:nn});a.uniforms.tEquirect.value=t;const r=new nt(s,a),o=t.minFilter;return t.minFilter===Ai&&(t.minFilter=_n),new uA(1,10,this).update(e,r),t.minFilter=o,r.geometry.dispose(),r.material.dispose(),this}clear(e,t,n,s){const a=e.getRenderTarget();for(let r=0;r<6;r++)e.setRenderTarget(this,r),e.clear(t,n,s);e.setRenderTarget(a)}}const Qo=new ne,dA=new ne,AA=new it;class ji{constructor(e=new ne(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=Qo.subVectors(n,t).cross(dA.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Qo),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/s;return a<0||a>1?null:t.copy(e.start).addScaledVector(n,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||AA.getNormalMatrix(e),s=this.coplanarPoint(Qo).applyMatrix4(e),a=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const as=new pi,dr=new ne;class gl{constructor(e=new ji,t=new ji,n=new ji,s=new ji,a=new ji,r=new ji){this.planes=[e,t,n,s,a,r]}set(e,t,n,s,a,r){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(a),o[5].copy(r),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Di){const n=this.planes,s=e.elements,a=s[0],r=s[1],o=s[2],c=s[3],l=s[4],h=s[5],u=s[6],A=s[7],g=s[8],x=s[9],_=s[10],p=s[11],d=s[12],M=s[13],y=s[14],v=s[15];if(n[0].setComponents(c-a,A-l,p-g,v-d).normalize(),n[1].setComponents(c+a,A+l,p+g,v+d).normalize(),n[2].setComponents(c+r,A+h,p+x,v+M).normalize(),n[3].setComponents(c-r,A-h,p-x,v-M).normalize(),n[4].setComponents(c-o,A-u,p-_,v-y).normalize(),t===Di)n[5].setComponents(c+o,A+u,p+_,v+y).normalize();else if(t===Kr)n[5].setComponents(o,u,_,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),as.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),as.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(as)}intersectsSprite(e){return as.center.set(0,0,0),as.radius=.7071067811865476,as.applyMatrix4(e.matrixWorld),this.intersectsSphere(as)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(dr.x=s.normal.x>0?e.max.x:e.min.x,dr.y=s.normal.y>0?e.max.y:e.min.y,dr.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(dr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Zu(){let i=null,e=!1,t=null,n=null;function s(a,r){t(a,r),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){i=a}}}function pA(i){const e=new WeakMap;function t(o,c){const l=o.array,h=o.usage,u=l.byteLength,A=i.createBuffer();i.bindBuffer(c,A),i.bufferData(c,l,h),o.onUploadCallback();let g;if(l instanceof Float32Array)g=i.FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?g=i.HALF_FLOAT:g=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)g=i.SHORT;else if(l instanceof Uint32Array)g=i.UNSIGNED_INT;else if(l instanceof Int32Array)g=i.INT;else if(l instanceof Int8Array)g=i.BYTE;else if(l instanceof Uint8Array)g=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)g=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:A,type:g,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,c,l){const h=c.array,u=c.updateRanges;if(i.bindBuffer(l,o),u.length===0)i.bufferSubData(l,0,h);else{u.sort((g,x)=>g.start-x.start);let A=0;for(let g=1;g<u.length;g++){const x=u[A],_=u[g];_.start<=x.start+x.count+1?x.count=Math.max(x.count,_.start+_.count-x.start):(++A,u[A]=_)}u.length=A+1;for(let g=0,x=u.length;g<x;g++){const _=u[g];i.bufferSubData(l,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function a(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(i.deleteBuffer(c.buffer),e.delete(o))}function r(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:s,remove:a,update:r}}class ta extends xt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const a=e/2,r=t/2,o=Math.floor(n),c=Math.floor(s),l=o+1,h=c+1,u=e/o,A=t/c,g=[],x=[],_=[],p=[];for(let d=0;d<h;d++){const M=d*A-r;for(let y=0;y<l;y++){const v=y*u-a;x.push(v,-M,0),_.push(0,0,1),p.push(y/o),p.push(1-d/c)}}for(let d=0;d<c;d++)for(let M=0;M<o;M++){const y=M+l*d,v=M+l*(d+1),q=M+1+l*(d+1),H=M+1+l*d;g.push(y,v,H),g.push(v,q,H)}this.setIndex(g),this.setAttribute("position",new et(x,3)),this.setAttribute("normal",new et(_,3)),this.setAttribute("uv",new et(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ta(e.width,e.height,e.widthSegments,e.heightSegments)}}var mA=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,gA=`#ifdef USE_ALPHAHASH
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
#endif`,bA=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,xA=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,_A=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,EA=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,vA=`#ifdef USE_AOMAP
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
#endif`,MA=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,yA=`#ifdef USE_BATCHING
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
#endif`,CA=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,wA=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,SA=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,IA=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,TA=`#ifdef USE_IRIDESCENCE
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
#endif`,BA=`#ifdef USE_BUMPMAP
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
#endif`,RA=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,DA=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,LA=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,PA=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,UA=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,FA=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,NA=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,QA=`#if defined( USE_COLOR_ALPHA )
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
#endif`,kA=`#define PI 3.141592653589793
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
} // validated`,OA=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,zA=`vec3 transformedNormal = objectNormal;
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
#endif`,GA=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,HA=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,VA=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,WA=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,jA="gl_FragColor = linearToOutputTexel( gl_FragColor );",qA=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,YA=`#ifdef USE_ENVMAP
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
#endif`,XA=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,KA=`#ifdef USE_ENVMAP
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
#endif`,JA=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ZA=`#ifdef USE_ENVMAP
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
#endif`,$A=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ep=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,tp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,np=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ip=`#ifdef USE_GRADIENTMAP
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
}`,sp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ap=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,rp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,op=`uniform bool receiveShadow;
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
#endif`,cp=`#ifdef USE_ENVMAP
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
#endif`,lp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,hp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,up=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,fp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,dp=`PhysicalMaterial material;
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
#endif`,Ap=`struct PhysicalMaterial {
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
}`,pp=`
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
#endif`,mp=`#if defined( RE_IndirectDiffuse )
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
#endif`,gp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,bp=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,xp=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_p=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ep=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,vp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Mp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,yp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Cp=`#if defined( USE_POINTS_UV )
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
#endif`,wp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Sp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ip=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Tp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Bp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Rp=`#ifdef USE_MORPHTARGETS
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
#endif`,Dp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Lp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Pp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Up=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Fp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Np=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Qp=`#ifdef USE_NORMALMAP
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
#endif`,kp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Op=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,zp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Gp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Hp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Vp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Wp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,jp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,qp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Yp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Xp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Kp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Jp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Zp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,$p=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,em=`float getShadowMask() {
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
}`,tm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,nm=`#ifdef USE_SKINNING
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
#endif`,im=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,sm=`#ifdef USE_SKINNING
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
#endif`,am=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,rm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,om=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,cm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,lm=`#ifdef USE_TRANSMISSION
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
#endif`,hm=`#ifdef USE_TRANSMISSION
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
#endif`,um=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,fm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,dm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Am=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const pm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,mm=`uniform sampler2D t2D;
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
}`,gm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,bm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,xm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_m=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Em=`#include <common>
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
}`,vm=`#if DEPTH_PACKING == 3200
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
}`,Mm=`#define DISTANCE
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
}`,ym=`#define DISTANCE
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
}`,Cm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,wm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Sm=`uniform float scale;
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
}`,Im=`uniform vec3 diffuse;
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
}`,Tm=`#include <common>
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
}`,Bm=`uniform vec3 diffuse;
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
}`,Rm=`#define LAMBERT
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
}`,Dm=`#define LAMBERT
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
}`,Lm=`#define MATCAP
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
}`,Pm=`#define MATCAP
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
}`,Um=`#define NORMAL
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
}`,Fm=`#define NORMAL
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
}`,Nm=`#define PHONG
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
}`,Qm=`#define PHONG
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
}`,km=`#define STANDARD
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
}`,Om=`#define STANDARD
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
}`,zm=`#define TOON
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
}`,Gm=`#define TOON
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
}`,Hm=`uniform float size;
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
}`,Vm=`uniform vec3 diffuse;
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
}`,Wm=`#include <common>
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
}`,jm=`uniform vec3 color;
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
}`,qm=`uniform float rotation;
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
}`,Ym=`uniform vec3 diffuse;
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
}`,st={alphahash_fragment:mA,alphahash_pars_fragment:gA,alphamap_fragment:bA,alphamap_pars_fragment:xA,alphatest_fragment:_A,alphatest_pars_fragment:EA,aomap_fragment:vA,aomap_pars_fragment:MA,batching_pars_vertex:yA,batching_vertex:CA,begin_vertex:wA,beginnormal_vertex:SA,bsdfs:IA,iridescence_fragment:TA,bumpmap_pars_fragment:BA,clipping_planes_fragment:RA,clipping_planes_pars_fragment:DA,clipping_planes_pars_vertex:LA,clipping_planes_vertex:PA,color_fragment:UA,color_pars_fragment:FA,color_pars_vertex:NA,color_vertex:QA,common:kA,cube_uv_reflection_fragment:OA,defaultnormal_vertex:zA,displacementmap_pars_vertex:GA,displacementmap_vertex:HA,emissivemap_fragment:VA,emissivemap_pars_fragment:WA,colorspace_fragment:jA,colorspace_pars_fragment:qA,envmap_fragment:YA,envmap_common_pars_fragment:XA,envmap_pars_fragment:KA,envmap_pars_vertex:JA,envmap_physical_pars_fragment:cp,envmap_vertex:ZA,fog_vertex:$A,fog_pars_vertex:ep,fog_fragment:tp,fog_pars_fragment:np,gradientmap_pars_fragment:ip,lightmap_pars_fragment:sp,lights_lambert_fragment:ap,lights_lambert_pars_fragment:rp,lights_pars_begin:op,lights_toon_fragment:lp,lights_toon_pars_fragment:hp,lights_phong_fragment:up,lights_phong_pars_fragment:fp,lights_physical_fragment:dp,lights_physical_pars_fragment:Ap,lights_fragment_begin:pp,lights_fragment_maps:mp,lights_fragment_end:gp,logdepthbuf_fragment:bp,logdepthbuf_pars_fragment:xp,logdepthbuf_pars_vertex:_p,logdepthbuf_vertex:Ep,map_fragment:vp,map_pars_fragment:Mp,map_particle_fragment:yp,map_particle_pars_fragment:Cp,metalnessmap_fragment:wp,metalnessmap_pars_fragment:Sp,morphinstance_vertex:Ip,morphcolor_vertex:Tp,morphnormal_vertex:Bp,morphtarget_pars_vertex:Rp,morphtarget_vertex:Dp,normal_fragment_begin:Lp,normal_fragment_maps:Pp,normal_pars_fragment:Up,normal_pars_vertex:Fp,normal_vertex:Np,normalmap_pars_fragment:Qp,clearcoat_normal_fragment_begin:kp,clearcoat_normal_fragment_maps:Op,clearcoat_pars_fragment:zp,iridescence_pars_fragment:Gp,opaque_fragment:Hp,packing:Vp,premultiplied_alpha_fragment:Wp,project_vertex:jp,dithering_fragment:qp,dithering_pars_fragment:Yp,roughnessmap_fragment:Xp,roughnessmap_pars_fragment:Kp,shadowmap_pars_fragment:Jp,shadowmap_pars_vertex:Zp,shadowmap_vertex:$p,shadowmask_pars_fragment:em,skinbase_vertex:tm,skinning_pars_vertex:nm,skinning_vertex:im,skinnormal_vertex:sm,specularmap_fragment:am,specularmap_pars_fragment:rm,tonemapping_fragment:om,tonemapping_pars_fragment:cm,transmission_fragment:lm,transmission_pars_fragment:hm,uv_pars_fragment:um,uv_pars_vertex:fm,uv_vertex:dm,worldpos_vertex:Am,background_vert:pm,background_frag:mm,backgroundCube_vert:gm,backgroundCube_frag:bm,cube_vert:xm,cube_frag:_m,depth_vert:Em,depth_frag:vm,distanceRGBA_vert:Mm,distanceRGBA_frag:ym,equirect_vert:Cm,equirect_frag:wm,linedashed_vert:Sm,linedashed_frag:Im,meshbasic_vert:Tm,meshbasic_frag:Bm,meshlambert_vert:Rm,meshlambert_frag:Dm,meshmatcap_vert:Lm,meshmatcap_frag:Pm,meshnormal_vert:Um,meshnormal_frag:Fm,meshphong_vert:Nm,meshphong_frag:Qm,meshphysical_vert:km,meshphysical_frag:Om,meshtoon_vert:zm,meshtoon_frag:Gm,points_vert:Hm,points_frag:Vm,shadow_vert:Wm,shadow_frag:jm,sprite_vert:qm,sprite_frag:Ym},Qe={common:{diffuse:{value:new Re(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new it},alphaMap:{value:null},alphaMapTransform:{value:new it},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new it}},envmap:{envMap:{value:null},envMapRotation:{value:new it},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new it}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new it}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new it},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new it},normalScale:{value:new ke(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new it},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new it}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new it}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new it}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Re(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Re(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new it},alphaTest:{value:0},uvTransform:{value:new it}},sprite:{diffuse:{value:new Re(16777215)},opacity:{value:1},center:{value:new ke(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new it},alphaMap:{value:null},alphaMapTransform:{value:new it},alphaTest:{value:0}}},ui={basic:{uniforms:gn([Qe.common,Qe.specularmap,Qe.envmap,Qe.aomap,Qe.lightmap,Qe.fog]),vertexShader:st.meshbasic_vert,fragmentShader:st.meshbasic_frag},lambert:{uniforms:gn([Qe.common,Qe.specularmap,Qe.envmap,Qe.aomap,Qe.lightmap,Qe.emissivemap,Qe.bumpmap,Qe.normalmap,Qe.displacementmap,Qe.fog,Qe.lights,{emissive:{value:new Re(0)}}]),vertexShader:st.meshlambert_vert,fragmentShader:st.meshlambert_frag},phong:{uniforms:gn([Qe.common,Qe.specularmap,Qe.envmap,Qe.aomap,Qe.lightmap,Qe.emissivemap,Qe.bumpmap,Qe.normalmap,Qe.displacementmap,Qe.fog,Qe.lights,{emissive:{value:new Re(0)},specular:{value:new Re(1118481)},shininess:{value:30}}]),vertexShader:st.meshphong_vert,fragmentShader:st.meshphong_frag},standard:{uniforms:gn([Qe.common,Qe.envmap,Qe.aomap,Qe.lightmap,Qe.emissivemap,Qe.bumpmap,Qe.normalmap,Qe.displacementmap,Qe.roughnessmap,Qe.metalnessmap,Qe.fog,Qe.lights,{emissive:{value:new Re(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:st.meshphysical_vert,fragmentShader:st.meshphysical_frag},toon:{uniforms:gn([Qe.common,Qe.aomap,Qe.lightmap,Qe.emissivemap,Qe.bumpmap,Qe.normalmap,Qe.displacementmap,Qe.gradientmap,Qe.fog,Qe.lights,{emissive:{value:new Re(0)}}]),vertexShader:st.meshtoon_vert,fragmentShader:st.meshtoon_frag},matcap:{uniforms:gn([Qe.common,Qe.bumpmap,Qe.normalmap,Qe.displacementmap,Qe.fog,{matcap:{value:null}}]),vertexShader:st.meshmatcap_vert,fragmentShader:st.meshmatcap_frag},points:{uniforms:gn([Qe.points,Qe.fog]),vertexShader:st.points_vert,fragmentShader:st.points_frag},dashed:{uniforms:gn([Qe.common,Qe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:st.linedashed_vert,fragmentShader:st.linedashed_frag},depth:{uniforms:gn([Qe.common,Qe.displacementmap]),vertexShader:st.depth_vert,fragmentShader:st.depth_frag},normal:{uniforms:gn([Qe.common,Qe.bumpmap,Qe.normalmap,Qe.displacementmap,{opacity:{value:1}}]),vertexShader:st.meshnormal_vert,fragmentShader:st.meshnormal_frag},sprite:{uniforms:gn([Qe.sprite,Qe.fog]),vertexShader:st.sprite_vert,fragmentShader:st.sprite_frag},background:{uniforms:{uvTransform:{value:new it},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:st.background_vert,fragmentShader:st.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new it}},vertexShader:st.backgroundCube_vert,fragmentShader:st.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:st.cube_vert,fragmentShader:st.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:st.equirect_vert,fragmentShader:st.equirect_frag},distanceRGBA:{uniforms:gn([Qe.common,Qe.displacementmap,{referencePosition:{value:new ne},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:st.distanceRGBA_vert,fragmentShader:st.distanceRGBA_frag},shadow:{uniforms:gn([Qe.lights,Qe.fog,{color:{value:new Re(0)},opacity:{value:1}}]),vertexShader:st.shadow_vert,fragmentShader:st.shadow_frag}};ui.physical={uniforms:gn([ui.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new it},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new it},clearcoatNormalScale:{value:new ke(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new it},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new it},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new it},sheen:{value:0},sheenColor:{value:new Re(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new it},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new it},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new it},transmissionSamplerSize:{value:new ke},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new it},attenuationDistance:{value:0},attenuationColor:{value:new Re(0)},specularColor:{value:new Re(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new it},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new it},anisotropyVector:{value:new ke},anisotropyMap:{value:null},anisotropyMapTransform:{value:new it}}]),vertexShader:st.meshphysical_vert,fragmentShader:st.meshphysical_frag};const Ar={r:0,b:0,g:0},rs=new qn,Xm=new He;function Km(i,e,t,n,s,a,r){const o=new Re(0);let c=a===!0?0:1,l,h,u=null,A=0,g=null;function x(M){let y=M.isScene===!0?M.background:null;return y&&y.isTexture&&(y=(M.backgroundBlurriness>0?t:e).get(y)),y}function _(M){let y=!1;const v=x(M);v===null?d(o,c):v&&v.isColor&&(d(v,1),y=!0);const q=i.xr.getEnvironmentBlendMode();q==="additive"?n.buffers.color.setClear(0,0,0,1,r):q==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,r),(i.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function p(M,y){const v=x(y);v&&(v.isCubeTexture||v.mapping===so)?(h===void 0&&(h=new nt(new Rt(1,1,1),new Wt({name:"BackgroundCubeMaterial",uniforms:ea(ui.backgroundCube.uniforms),vertexShader:ui.backgroundCube.vertexShader,fragmentShader:ui.backgroundCube.fragmentShader,side:In,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(q,H,U){this.matrixWorld.copyPosition(U.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),rs.copy(y.backgroundRotation),rs.x*=-1,rs.y*=-1,rs.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(rs.y*=-1,rs.z*=-1),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Xm.makeRotationFromEuler(rs)),h.material.toneMapped=ht.getTransfer(v.colorSpace)!==mt,(u!==v||A!==v.version||g!==i.toneMapping)&&(h.material.needsUpdate=!0,u=v,A=v.version,g=i.toneMapping),h.layers.enableAll(),M.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new nt(new ta(2,2),new Wt({name:"BackgroundMaterial",uniforms:ea(ui.background.uniforms),vertexShader:ui.background.vertexShader,fragmentShader:ui.background.fragmentShader,side:ai,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=ht.getTransfer(v.colorSpace)!==mt,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||A!==v.version||g!==i.toneMapping)&&(l.material.needsUpdate=!0,u=v,A=v.version,g=i.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function d(M,y){M.getRGB(Ar,Xu(i)),n.buffers.color.setClear(Ar.r,Ar.g,Ar.b,y,r)}return{getClearColor:function(){return o},setClearColor:function(M,y=1){o.set(M),c=y,d(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(M){c=M,d(o,c)},render:_,addToRenderList:p}}function Jm(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=A(null);let a=s,r=!1;function o(S,m,I,Q,K){let Y=!1;const te=u(Q,I,m);a!==te&&(a=te,l(a.object)),Y=g(S,Q,I,K),Y&&x(S,Q,I,K),K!==null&&e.update(K,i.ELEMENT_ARRAY_BUFFER),(Y||r)&&(r=!1,v(S,m,I,Q),K!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(K).buffer))}function c(){return i.createVertexArray()}function l(S){return i.bindVertexArray(S)}function h(S){return i.deleteVertexArray(S)}function u(S,m,I){const Q=I.wireframe===!0;let K=n[S.id];K===void 0&&(K={},n[S.id]=K);let Y=K[m.id];Y===void 0&&(Y={},K[m.id]=Y);let te=Y[Q];return te===void 0&&(te=A(c()),Y[Q]=te),te}function A(S){const m=[],I=[],Q=[];for(let K=0;K<t;K++)m[K]=0,I[K]=0,Q[K]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:m,enabledAttributes:I,attributeDivisors:Q,object:S,attributes:{},index:null}}function g(S,m,I,Q){const K=a.attributes,Y=m.attributes;let te=0;const X=I.getAttributes();for(const V in X)if(X[V].location>=0){const ae=K[V];let le=Y[V];if(le===void 0&&(V==="instanceMatrix"&&S.instanceMatrix&&(le=S.instanceMatrix),V==="instanceColor"&&S.instanceColor&&(le=S.instanceColor)),ae===void 0||ae.attribute!==le||le&&ae.data!==le.data)return!0;te++}return a.attributesNum!==te||a.index!==Q}function x(S,m,I,Q){const K={},Y=m.attributes;let te=0;const X=I.getAttributes();for(const V in X)if(X[V].location>=0){let ae=Y[V];ae===void 0&&(V==="instanceMatrix"&&S.instanceMatrix&&(ae=S.instanceMatrix),V==="instanceColor"&&S.instanceColor&&(ae=S.instanceColor));const le={};le.attribute=ae,ae&&ae.data&&(le.data=ae.data),K[V]=le,te++}a.attributes=K,a.attributesNum=te,a.index=Q}function _(){const S=a.newAttributes;for(let m=0,I=S.length;m<I;m++)S[m]=0}function p(S){d(S,0)}function d(S,m){const I=a.newAttributes,Q=a.enabledAttributes,K=a.attributeDivisors;I[S]=1,Q[S]===0&&(i.enableVertexAttribArray(S),Q[S]=1),K[S]!==m&&(i.vertexAttribDivisor(S,m),K[S]=m)}function M(){const S=a.newAttributes,m=a.enabledAttributes;for(let I=0,Q=m.length;I<Q;I++)m[I]!==S[I]&&(i.disableVertexAttribArray(I),m[I]=0)}function y(S,m,I,Q,K,Y,te){te===!0?i.vertexAttribIPointer(S,m,I,K,Y):i.vertexAttribPointer(S,m,I,Q,K,Y)}function v(S,m,I,Q){_();const K=Q.attributes,Y=I.getAttributes(),te=m.defaultAttributeValues;for(const X in Y){const V=Y[X];if(V.location>=0){let ue=K[X];if(ue===void 0&&(X==="instanceMatrix"&&S.instanceMatrix&&(ue=S.instanceMatrix),X==="instanceColor"&&S.instanceColor&&(ue=S.instanceColor)),ue!==void 0){const ae=ue.normalized,le=ue.itemSize,ge=e.get(ue);if(ge===void 0)continue;const Ee=ge.buffer,$=ge.type,oe=ge.bytesPerElement,ee=$===i.INT||$===i.UNSIGNED_INT||ue.gpuType===hl;if(ue.isInterleavedBufferAttribute){const Ae=ue.data,W=Ae.stride,re=ue.offset;if(Ae.isInstancedInterleavedBuffer){for(let he=0;he<V.locationSize;he++)d(V.location+he,Ae.meshPerAttribute);S.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=Ae.meshPerAttribute*Ae.count)}else for(let he=0;he<V.locationSize;he++)p(V.location+he);i.bindBuffer(i.ARRAY_BUFFER,Ee);for(let he=0;he<V.locationSize;he++)y(V.location+he,le/V.locationSize,$,ae,W*oe,(re+le/V.locationSize*he)*oe,ee)}else{if(ue.isInstancedBufferAttribute){for(let Ae=0;Ae<V.locationSize;Ae++)d(V.location+Ae,ue.meshPerAttribute);S.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let Ae=0;Ae<V.locationSize;Ae++)p(V.location+Ae);i.bindBuffer(i.ARRAY_BUFFER,Ee);for(let Ae=0;Ae<V.locationSize;Ae++)y(V.location+Ae,le/V.locationSize,$,ae,le*oe,le/V.locationSize*Ae*oe,ee)}}else if(te!==void 0){const ae=te[X];if(ae!==void 0)switch(ae.length){case 2:i.vertexAttrib2fv(V.location,ae);break;case 3:i.vertexAttrib3fv(V.location,ae);break;case 4:i.vertexAttrib4fv(V.location,ae);break;default:i.vertexAttrib1fv(V.location,ae)}}}}M()}function q(){Z();for(const S in n){const m=n[S];for(const I in m){const Q=m[I];for(const K in Q)h(Q[K].object),delete Q[K];delete m[I]}delete n[S]}}function H(S){if(n[S.id]===void 0)return;const m=n[S.id];for(const I in m){const Q=m[I];for(const K in Q)h(Q[K].object),delete Q[K];delete m[I]}delete n[S.id]}function U(S){for(const m in n){const I=n[m];if(I[S.id]===void 0)continue;const Q=I[S.id];for(const K in Q)h(Q[K].object),delete Q[K];delete I[S.id]}}function Z(){w(),r=!0,a!==s&&(a=s,l(a.object))}function w(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:Z,resetDefaultState:w,dispose:q,releaseStatesOfGeometry:H,releaseStatesOfProgram:U,initAttributes:_,enableAttribute:p,disableUnusedAttributes:M}}function Zm(i,e,t){let n;function s(l){n=l}function a(l,h){i.drawArrays(n,l,h),t.update(h,n,1)}function r(l,h,u){u!==0&&(i.drawArraysInstanced(n,l,h,u),t.update(h,n,u))}function o(l,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let g=0;for(let x=0;x<u;x++)g+=h[x];t.update(g,n,1)}function c(l,h,u,A){if(u===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let x=0;x<l.length;x++)r(l[x],h[x],A[x]);else{g.multiDrawArraysInstancedWEBGL(n,l,0,h,0,A,0,u);let x=0;for(let _=0;_<u;_++)x+=h[_]*A[_];t.update(x,n,1)}}this.setMode=s,this.render=a,this.renderInstances=r,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function $m(i,e,t,n){let s;function a(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const U=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(U.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function r(U){return!(U!==Yt&&n.convert(U)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(U){const Z=U===rn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(U!==qt&&n.convert(U)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&U!==fn&&!Z)}function c(U){if(U==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";U="mediump"}return U==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const u=t.logarithmicDepthBuffer===!0,A=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),g=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),y=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),q=x>0,H=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:r,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:u,reverseDepthBuffer:A,maxTextures:g,maxVertexTextures:x,maxTextureSize:_,maxCubemapSize:p,maxAttributes:d,maxVertexUniforms:M,maxVaryings:y,maxFragmentUniforms:v,vertexTextures:q,maxSamples:H}}function eg(i){const e=this;let t=null,n=0,s=!1,a=!1;const r=new ji,o=new it,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,A){const g=u.length!==0||A||n!==0||s;return s=A,n=u.length,g},this.beginShadows=function(){a=!0,h(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(u,A){t=h(u,A,0)},this.setState=function(u,A,g){const x=u.clippingPlanes,_=u.clipIntersection,p=u.clipShadows,d=i.get(u);if(!s||x===null||x.length===0||a&&!p)a?h(null):l();else{const M=a?0:n,y=M*4;let v=d.clippingState||null;c.value=v,v=h(x,A,y,g);for(let q=0;q!==y;++q)v[q]=t[q];d.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=M}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,A,g,x){const _=u!==null?u.length:0;let p=null;if(_!==0){if(p=c.value,x!==!0||p===null){const d=g+_*4,M=A.matrixWorldInverse;o.getNormalMatrix(M),(p===null||p.length<d)&&(p=new Float32Array(d));for(let y=0,v=g;y!==_;++y,v+=4)r.copy(u[y]).applyMatrix4(M,o),r.normal.toArray(p,v),p[v+3]=r.constant}c.value=p,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,p}}function tg(i){let e=new WeakMap;function t(r,o){return o===yc?r.mapping=ps:o===Cc&&(r.mapping=Zs),r}function n(r){if(r&&r.isTexture){const o=r.mapping;if(o===yc||o===Cc)if(e.has(r)){const c=e.get(r).texture;return t(c,r.mapping)}else{const c=r.image;if(c&&c.height>0){const l=new fA(c.height);return l.fromEquirectangularTexture(i,r),e.set(r,l),r.addEventListener("dispose",s),t(l.texture,r.mapping)}else return null}}return r}function s(r){const o=r.target;o.removeEventListener("dispose",s);const c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function a(){e=new WeakMap}return{get:n,dispose:a}}class oo extends Ku{constructor(e=-1,t=1,n=1,s=-1,a=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=a,this.far=r,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,a,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=a,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let a=n-e,r=n+e,o=s+t,c=s-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=l*this.view.offsetX,r=a+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(a,r,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Hs=4,rh=[.125,.215,.35,.446,.526,.582],us=20,ko=new oo,oh=new Re;let Oo=null,zo=0,Go=0,Ho=!1;const ls=(1+Math.sqrt(5))/2,ks=1/ls,ch=[new ne(-ls,ks,0),new ne(ls,ks,0),new ne(-ks,0,ls),new ne(ks,0,ls),new ne(0,ls,-ks),new ne(0,ls,ks),new ne(-1,1,-1),new ne(1,1,-1),new ne(-1,1,1),new ne(1,1,1)];class lh{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){Oo=this._renderer.getRenderTarget(),zo=this._renderer.getActiveCubeFace(),Go=this._renderer.getActiveMipmapLevel(),Ho=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(e,n,s,a),t>0&&this._blur(a,0,0,t),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=fh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=uh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Oo,zo,Go),this._renderer.xr.enabled=Ho,e.scissorTest=!1,pr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ps||e.mapping===Zs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Oo=this._renderer.getRenderTarget(),zo=this._renderer.getActiveCubeFace(),Go=this._renderer.getActiveMipmapLevel(),Ho=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:_n,minFilter:_n,generateMipmaps:!1,type:rn,format:Yt,colorSpace:dn,depthBuffer:!1},s=hh(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=hh(e,t,n);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ng(a)),this._blurMaterial=ig(a,e,t)}return s}_compileMaterial(e){const t=new nt(this._lodPlanes[0],e);this._renderer.compile(t,ko)}_sceneToCubeUV(e,t,n,s){const o=new xn(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,A=h.toneMapping;h.getClearColor(oh),h.toneMapping=ts,h.autoClear=!1;const g=new Ji({name:"PMREM.Background",side:In,depthWrite:!1,depthTest:!1}),x=new nt(new Rt,g);let _=!1;const p=e.background;p?p.isColor&&(g.color.copy(p),e.background=null,_=!0):(g.color.copy(oh),_=!0);for(let d=0;d<6;d++){const M=d%3;M===0?(o.up.set(0,c[d],0),o.lookAt(l[d],0,0)):M===1?(o.up.set(0,0,c[d]),o.lookAt(0,l[d],0)):(o.up.set(0,c[d],0),o.lookAt(0,0,l[d]));const y=this._cubeSize;pr(s,M*y,d>2?y:0,y,y),h.setRenderTarget(s),_&&h.render(x,o),h.render(e,o)}x.geometry.dispose(),x.material.dispose(),h.toneMapping=A,h.autoClear=u,e.background=p}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===ps||e.mapping===Zs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=fh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=uh());const a=s?this._cubemapMaterial:this._equirectMaterial,r=new nt(this._lodPlanes[0],a),o=a.uniforms;o.envMap.value=e;const c=this._cubeSize;pr(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(r,ko)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let a=1;a<s;a++){const r=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),o=ch[(s-a-1)%ch.length];this._blur(e,a-1,a,r,o)}t.autoClear=n}_blur(e,t,n,s,a){const r=this._pingPongRenderTarget;this._halfBlur(e,r,t,n,s,"latitudinal",a),this._halfBlur(r,e,n,n,s,"longitudinal",a)}_halfBlur(e,t,n,s,a,r,o){const c=this._renderer,l=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new nt(this._lodPlanes[s],l),A=l.uniforms,g=this._sizeLods[n]-1,x=isFinite(a)?Math.PI/(2*g):2*Math.PI/(2*us-1),_=a/x,p=isFinite(a)?1+Math.floor(h*_):us;p>us&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${us}`);const d=[];let M=0;for(let U=0;U<us;++U){const Z=U/_,w=Math.exp(-Z*Z/2);d.push(w),U===0?M+=w:U<p&&(M+=2*w)}for(let U=0;U<d.length;U++)d[U]=d[U]/M;A.envMap.value=e.texture,A.samples.value=p,A.weights.value=d,A.latitudinal.value=r==="latitudinal",o&&(A.poleAxis.value=o);const{_lodMax:y}=this;A.dTheta.value=x,A.mipInt.value=y-n;const v=this._sizeLods[s],q=3*v*(s>y-Hs?s-y+Hs:0),H=4*(this._cubeSize-v);pr(t,q,H,3*v,2*v),c.setRenderTarget(t),c.render(u,ko)}}function ng(i){const e=[],t=[],n=[];let s=i;const a=i-Hs+1+rh.length;for(let r=0;r<a;r++){const o=Math.pow(2,s);t.push(o);let c=1/o;r>i-Hs?c=rh[r-i+Hs-1]:r===0&&(c=0),n.push(c);const l=1/(o-2),h=-l,u=1+l,A=[h,h,u,h,u,u,h,h,u,u,h,u],g=6,x=6,_=3,p=2,d=1,M=new Float32Array(_*x*g),y=new Float32Array(p*x*g),v=new Float32Array(d*x*g);for(let H=0;H<g;H++){const U=H%3*2/3-1,Z=H>2?0:-1,w=[U,Z,0,U+2/3,Z,0,U+2/3,Z+1,0,U,Z,0,U+2/3,Z+1,0,U,Z+1,0];M.set(w,_*x*H),y.set(A,p*x*H);const S=[H,H,H,H,H,H];v.set(S,d*x*H)}const q=new xt;q.setAttribute("position",new Lt(M,_)),q.setAttribute("uv",new Lt(y,p)),q.setAttribute("faceIndex",new Lt(v,d)),e.push(q),s>Hs&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function hh(i,e,t){const n=new Pn(i,e,t);return n.texture.mapping=so,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function pr(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function ig(i,e,t){const n=new Float32Array(us),s=new ne(0,1,0);return new Wt({name:"SphericalGaussianBlur",defines:{n:us,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:bl(),fragmentShader:`

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
		`,blending:nn,depthTest:!1,depthWrite:!1})}function uh(){return new Wt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:bl(),fragmentShader:`

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
		`,blending:nn,depthTest:!1,depthWrite:!1})}function fh(){return new Wt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:bl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:nn,depthTest:!1,depthWrite:!1})}function bl(){return`

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
	`}function sg(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const c=o.mapping,l=c===yc||c===Cc,h=c===ps||c===Zs;if(l||h){let u=e.get(o);const A=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==A)return t===null&&(t=new lh(i)),u=l?t.fromEquirectangular(o,u):t.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),u.texture;if(u!==void 0)return u.texture;{const g=o.image;return l&&g&&g.height>0||h&&g&&s(g)?(t===null&&(t=new lh(i)),u=l?t.fromEquirectangular(o):t.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),o.addEventListener("dispose",a),u.texture):null}}}return o}function s(o){let c=0;const l=6;for(let h=0;h<l;h++)o[h]!==void 0&&c++;return c===l}function a(o){const c=o.target;c.removeEventListener("dispose",a);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function r(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:r}}function ag(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&Ca("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function rg(i,e,t,n){const s={},a=new WeakMap;function r(u){const A=u.target;A.index!==null&&e.remove(A.index);for(const x in A.attributes)e.remove(A.attributes[x]);for(const x in A.morphAttributes){const _=A.morphAttributes[x];for(let p=0,d=_.length;p<d;p++)e.remove(_[p])}A.removeEventListener("dispose",r),delete s[A.id];const g=a.get(A);g&&(e.remove(g),a.delete(A)),n.releaseStatesOfGeometry(A),A.isInstancedBufferGeometry===!0&&delete A._maxInstanceCount,t.memory.geometries--}function o(u,A){return s[A.id]===!0||(A.addEventListener("dispose",r),s[A.id]=!0,t.memory.geometries++),A}function c(u){const A=u.attributes;for(const x in A)e.update(A[x],i.ARRAY_BUFFER);const g=u.morphAttributes;for(const x in g){const _=g[x];for(let p=0,d=_.length;p<d;p++)e.update(_[p],i.ARRAY_BUFFER)}}function l(u){const A=[],g=u.index,x=u.attributes.position;let _=0;if(g!==null){const M=g.array;_=g.version;for(let y=0,v=M.length;y<v;y+=3){const q=M[y+0],H=M[y+1],U=M[y+2];A.push(q,H,H,U,U,q)}}else if(x!==void 0){const M=x.array;_=x.version;for(let y=0,v=M.length/3-1;y<v;y+=3){const q=y+0,H=y+1,U=y+2;A.push(q,H,H,U,U,q)}}else return;const p=new(zu(A)?Yu:qu)(A,1);p.version=_;const d=a.get(u);d&&e.remove(d),a.set(u,p)}function h(u){const A=a.get(u);if(A){const g=u.index;g!==null&&A.version<g.version&&l(u)}else l(u);return a.get(u)}return{get:o,update:c,getWireframeAttribute:h}}function og(i,e,t){let n;function s(A){n=A}let a,r;function o(A){a=A.type,r=A.bytesPerElement}function c(A,g){i.drawElements(n,g,a,A*r),t.update(g,n,1)}function l(A,g,x){x!==0&&(i.drawElementsInstanced(n,g,a,A*r,x),t.update(g,n,x))}function h(A,g,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,g,0,a,A,0,x);let p=0;for(let d=0;d<x;d++)p+=g[d];t.update(p,n,1)}function u(A,g,x,_){if(x===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let d=0;d<A.length;d++)l(A[d]/r,g[d],_[d]);else{p.multiDrawElementsInstancedWEBGL(n,g,0,a,A,0,_,0,x);let d=0;for(let M=0;M<x;M++)d+=g[M]*_[M];t.update(d,n,1)}}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function cg(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(a,r,o){switch(t.calls++,r){case i.TRIANGLES:t.triangles+=o*(a/3);break;case i.LINES:t.lines+=o*(a/2);break;case i.LINE_STRIP:t.lines+=o*(a-1);break;case i.LINE_LOOP:t.lines+=o*a;break;case i.POINTS:t.points+=o*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function lg(i,e,t){const n=new WeakMap,s=new dt;function a(r,o,c){const l=r.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let A=n.get(o);if(A===void 0||A.count!==u){let S=function(){Z.dispose(),n.delete(o),o.removeEventListener("dispose",S)};var g=S;A!==void 0&&A.texture.dispose();const x=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,p=o.morphAttributes.color!==void 0,d=o.morphAttributes.position||[],M=o.morphAttributes.normal||[],y=o.morphAttributes.color||[];let v=0;x===!0&&(v=1),_===!0&&(v=2),p===!0&&(v=3);let q=o.attributes.position.count*v,H=1;q>e.maxTextureSize&&(H=Math.ceil(q/e.maxTextureSize),q=e.maxTextureSize);const U=new Float32Array(q*H*4*u),Z=new Hu(U,q,H,u);Z.type=fn,Z.needsUpdate=!0;const w=v*4;for(let m=0;m<u;m++){const I=d[m],Q=M[m],K=y[m],Y=q*H*4*m;for(let te=0;te<I.count;te++){const X=te*w;x===!0&&(s.fromBufferAttribute(I,te),U[Y+X+0]=s.x,U[Y+X+1]=s.y,U[Y+X+2]=s.z,U[Y+X+3]=0),_===!0&&(s.fromBufferAttribute(Q,te),U[Y+X+4]=s.x,U[Y+X+5]=s.y,U[Y+X+6]=s.z,U[Y+X+7]=0),p===!0&&(s.fromBufferAttribute(K,te),U[Y+X+8]=s.x,U[Y+X+9]=s.y,U[Y+X+10]=s.z,U[Y+X+11]=K.itemSize===4?s.w:1)}}A={count:u,texture:Z,size:new ke(q,H)},n.set(o,A),o.addEventListener("dispose",S)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",r.morphTexture,t);else{let x=0;for(let p=0;p<l.length;p++)x+=l[p];const _=o.morphTargetsRelative?1:1-x;c.getUniforms().setValue(i,"morphTargetBaseInfluence",_),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",A.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",A.size)}return{update:a}}function hg(i,e,t,n){let s=new WeakMap;function a(c){const l=n.render.frame,h=c.geometry,u=e.get(c,h);if(s.get(u)!==l&&(e.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),s.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const A=c.skeleton;s.get(A)!==l&&(A.update(),s.set(A,l))}return u}function r(){s=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:a,dispose:r}}class xl extends Gt{constructor(e,t,n,s,a,r,o,c,l,h=js){if(h!==js&&h!==bs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===js&&(n=ms),n===void 0&&h===bs&&(n=gs),super(null,s,a,r,o,c,h,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:cn,this.minFilter=c!==void 0?c:cn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const $u=new Gt,dh=new xl(1,1),ef=new Hu,tf=new Vu,nf=new Ju,Ah=[],ph=[],mh=new Float32Array(16),gh=new Float32Array(9),bh=new Float32Array(4);function ra(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let a=Ah[s];if(a===void 0&&(a=new Float32Array(s),Ah[s]=a),e!==0){n.toArray(a,0);for(let r=1,o=0;r!==e;++r)o+=t,i[r].toArray(a,o)}return a}function Xt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Kt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function co(i,e){let t=ph[e];t===void 0&&(t=new Int32Array(e),ph[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function ug(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function fg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Xt(t,e))return;i.uniform2fv(this.addr,e),Kt(t,e)}}function dg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Xt(t,e))return;i.uniform3fv(this.addr,e),Kt(t,e)}}function Ag(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Xt(t,e))return;i.uniform4fv(this.addr,e),Kt(t,e)}}function pg(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Xt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Kt(t,e)}else{if(Xt(t,n))return;bh.set(n),i.uniformMatrix2fv(this.addr,!1,bh),Kt(t,n)}}function mg(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Xt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Kt(t,e)}else{if(Xt(t,n))return;gh.set(n),i.uniformMatrix3fv(this.addr,!1,gh),Kt(t,n)}}function gg(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Xt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Kt(t,e)}else{if(Xt(t,n))return;mh.set(n),i.uniformMatrix4fv(this.addr,!1,mh),Kt(t,n)}}function bg(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function xg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Xt(t,e))return;i.uniform2iv(this.addr,e),Kt(t,e)}}function _g(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Xt(t,e))return;i.uniform3iv(this.addr,e),Kt(t,e)}}function Eg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Xt(t,e))return;i.uniform4iv(this.addr,e),Kt(t,e)}}function vg(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Mg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Xt(t,e))return;i.uniform2uiv(this.addr,e),Kt(t,e)}}function yg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Xt(t,e))return;i.uniform3uiv(this.addr,e),Kt(t,e)}}function Cg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Xt(t,e))return;i.uniform4uiv(this.addr,e),Kt(t,e)}}function wg(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let a;this.type===i.SAMPLER_2D_SHADOW?(dh.compareFunction=Ou,a=dh):a=$u,t.setTexture2D(e||a,s)}function Sg(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||tf,s)}function Ig(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||nf,s)}function Tg(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||ef,s)}function Bg(i){switch(i){case 5126:return ug;case 35664:return fg;case 35665:return dg;case 35666:return Ag;case 35674:return pg;case 35675:return mg;case 35676:return gg;case 5124:case 35670:return bg;case 35667:case 35671:return xg;case 35668:case 35672:return _g;case 35669:case 35673:return Eg;case 5125:return vg;case 36294:return Mg;case 36295:return yg;case 36296:return Cg;case 35678:case 36198:case 36298:case 36306:case 35682:return wg;case 35679:case 36299:case 36307:return Sg;case 35680:case 36300:case 36308:case 36293:return Ig;case 36289:case 36303:case 36311:case 36292:return Tg}}function Rg(i,e){i.uniform1fv(this.addr,e)}function Dg(i,e){const t=ra(e,this.size,2);i.uniform2fv(this.addr,t)}function Lg(i,e){const t=ra(e,this.size,3);i.uniform3fv(this.addr,t)}function Pg(i,e){const t=ra(e,this.size,4);i.uniform4fv(this.addr,t)}function Ug(i,e){const t=ra(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Fg(i,e){const t=ra(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Ng(i,e){const t=ra(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Qg(i,e){i.uniform1iv(this.addr,e)}function kg(i,e){i.uniform2iv(this.addr,e)}function Og(i,e){i.uniform3iv(this.addr,e)}function zg(i,e){i.uniform4iv(this.addr,e)}function Gg(i,e){i.uniform1uiv(this.addr,e)}function Hg(i,e){i.uniform2uiv(this.addr,e)}function Vg(i,e){i.uniform3uiv(this.addr,e)}function Wg(i,e){i.uniform4uiv(this.addr,e)}function jg(i,e,t){const n=this.cache,s=e.length,a=co(t,s);Xt(n,a)||(i.uniform1iv(this.addr,a),Kt(n,a));for(let r=0;r!==s;++r)t.setTexture2D(e[r]||$u,a[r])}function qg(i,e,t){const n=this.cache,s=e.length,a=co(t,s);Xt(n,a)||(i.uniform1iv(this.addr,a),Kt(n,a));for(let r=0;r!==s;++r)t.setTexture3D(e[r]||tf,a[r])}function Yg(i,e,t){const n=this.cache,s=e.length,a=co(t,s);Xt(n,a)||(i.uniform1iv(this.addr,a),Kt(n,a));for(let r=0;r!==s;++r)t.setTextureCube(e[r]||nf,a[r])}function Xg(i,e,t){const n=this.cache,s=e.length,a=co(t,s);Xt(n,a)||(i.uniform1iv(this.addr,a),Kt(n,a));for(let r=0;r!==s;++r)t.setTexture2DArray(e[r]||ef,a[r])}function Kg(i){switch(i){case 5126:return Rg;case 35664:return Dg;case 35665:return Lg;case 35666:return Pg;case 35674:return Ug;case 35675:return Fg;case 35676:return Ng;case 5124:case 35670:return Qg;case 35667:case 35671:return kg;case 35668:case 35672:return Og;case 35669:case 35673:return zg;case 5125:return Gg;case 36294:return Hg;case 36295:return Vg;case 36296:return Wg;case 35678:case 36198:case 36298:case 36306:case 35682:return jg;case 35679:case 36299:case 36307:return qg;case 35680:case 36300:case 36308:case 36293:return Yg;case 36289:case 36303:case 36311:case 36292:return Xg}}class Jg{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Bg(t.type)}}class Zg{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Kg(t.type)}}class $g{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let a=0,r=s.length;a!==r;++a){const o=s[a];o.setValue(e,t[o.id],n)}}}const Vo=/(\w+)(\])?(\[|\.)?/g;function xh(i,e){i.seq.push(e),i.map[e.id]=e}function e0(i,e,t){const n=i.name,s=n.length;for(Vo.lastIndex=0;;){const a=Vo.exec(n),r=Vo.lastIndex;let o=a[1];const c=a[2]==="]",l=a[3];if(c&&(o=o|0),l===void 0||l==="["&&r+2===s){xh(t,l===void 0?new Jg(o,i,e):new Zg(o,i,e));break}else{let u=t.map[o];u===void 0&&(u=new $g(o),xh(t,u)),t=u}}}class kr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const a=e.getActiveUniform(t,s),r=e.getUniformLocation(t,a.name);e0(a,r,this)}}setValue(e,t,n,s){const a=this.map[t];a!==void 0&&a.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let a=0,r=t.length;a!==r;++a){const o=t[a],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,a=e.length;s!==a;++s){const r=e[s];r.id in t&&n.push(r)}return n}}function _h(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const t0=37297;let n0=0;function i0(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let r=s;r<a;r++){const o=r+1;n.push(`${o===e?">":" "} ${o}: ${t[r]}`)}return n.join(`
`)}const Eh=new it;function s0(i){ht._getMatrix(Eh,ht.workingColorSpace,i);const e=`mat3( ${Eh.elements.map(t=>t.toFixed(4))} )`;switch(ht.getTransfer(i)){case ro:return[e,"LinearTransferOETF"];case mt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function vh(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const r=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+i0(i.getShaderSource(e),r)}else return s}function a0(i,e){const t=s0(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function r0(i,e){let t;switch(e){case yu:t="Linear";break;case Cu:t="Reinhard";break;case wu:t="Cineon";break;case ll:t="ACESFilmic";break;case Su:t="AgX";break;case Iu:t="Neutral";break;case Ad:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const mr=new ne;function o0(){ht.getLuminanceCoefficients(mr);const i=mr.x.toFixed(4),e=mr.y.toFixed(4),t=mr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function c0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(wa).join(`
`)}function l0(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function h0(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const a=i.getActiveAttrib(e,s),r=a.name;let o=1;a.type===i.FLOAT_MAT2&&(o=2),a.type===i.FLOAT_MAT3&&(o=3),a.type===i.FLOAT_MAT4&&(o=4),t[r]={type:a.type,location:i.getAttribLocation(e,r),locationSize:o}}return t}function wa(i){return i!==""}function Mh(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function yh(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const u0=/^[ \t]*#include +<([\w\d./]+)>/gm;function jc(i){return i.replace(u0,d0)}const f0=new Map;function d0(i,e){let t=st[e];if(t===void 0){const n=f0.get(e);if(n!==void 0)t=st[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return jc(t)}const A0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ch(i){return i.replace(A0,p0)}function p0(i,e,t,n){let s="";for(let a=parseInt(e);a<parseInt(t);a++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return s}function wh(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function m0(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===ol?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===vu?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Ii&&(e="SHADOWMAP_TYPE_VSM"),e}function g0(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case ps:case Zs:e="ENVMAP_TYPE_CUBE";break;case so:e="ENVMAP_TYPE_CUBE_UV";break}return e}function b0(i){let e="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===Zs&&(e="ENVMAP_MODE_REFRACTION"),e}function x0(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case cl:e="ENVMAP_BLENDING_MULTIPLY";break;case fd:e="ENVMAP_BLENDING_MIX";break;case dd:e="ENVMAP_BLENDING_ADD";break}return e}function _0(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function E0(i,e,t,n){const s=i.getContext(),a=t.defines;let r=t.vertexShader,o=t.fragmentShader;const c=m0(t),l=g0(t),h=b0(t),u=x0(t),A=_0(t),g=c0(t),x=l0(a),_=s.createProgram();let p,d,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(wa).join(`
`),p.length>0&&(p+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(wa).join(`
`),d.length>0&&(d+=`
`)):(p=[wh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(wa).join(`
`),d=[wh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",A?"#define CUBEUV_TEXEL_WIDTH "+A.texelWidth:"",A?"#define CUBEUV_TEXEL_HEIGHT "+A.texelHeight:"",A?"#define CUBEUV_MAX_MIP "+A.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ts?"#define TONE_MAPPING":"",t.toneMapping!==ts?st.tonemapping_pars_fragment:"",t.toneMapping!==ts?r0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",st.colorspace_pars_fragment,a0("linearToOutputTexel",t.outputColorSpace),o0(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(wa).join(`
`)),r=jc(r),r=Mh(r,t),r=yh(r,t),o=jc(o),o=Mh(o,t),o=yh(o,t),r=Ch(r),o=Ch(o),t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,p=[g,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,d=["#define varying in",t.glslVersion===Ql?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ql?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const y=M+p+r,v=M+d+o,q=_h(s,s.VERTEX_SHADER,y),H=_h(s,s.FRAGMENT_SHADER,v);s.attachShader(_,q),s.attachShader(_,H),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function U(m){if(i.debug.checkShaderErrors){const I=s.getProgramInfoLog(_).trim(),Q=s.getShaderInfoLog(q).trim(),K=s.getShaderInfoLog(H).trim();let Y=!0,te=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(Y=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,q,H);else{const X=vh(s,q,"vertex"),V=vh(s,H,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+m.name+`
Material Type: `+m.type+`

Program Info Log: `+I+`
`+X+`
`+V)}else I!==""?console.warn("THREE.WebGLProgram: Program Info Log:",I):(Q===""||K==="")&&(te=!1);te&&(m.diagnostics={runnable:Y,programLog:I,vertexShader:{log:Q,prefix:p},fragmentShader:{log:K,prefix:d}})}s.deleteShader(q),s.deleteShader(H),Z=new kr(s,_),w=h0(s,_)}let Z;this.getUniforms=function(){return Z===void 0&&U(this),Z};let w;this.getAttributes=function(){return w===void 0&&U(this),w};let S=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=s.getProgramParameter(_,t0)),S},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=n0++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=q,this.fragmentShader=H,this}let v0=0;class M0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),a=this._getShaderStage(n),r=this._getShaderCacheForMaterial(e);return r.has(s)===!1&&(r.add(s),s.usedTimes++),r.has(a)===!1&&(r.add(a),a.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new y0(e),t.set(e,n)),n}}class y0{constructor(e){this.id=v0++,this.code=e,this.usedTimes=0}}function C0(i,e,t,n,s,a,r){const o=new Wu,c=new M0,l=new Set,h=[],u=s.logarithmicDepthBuffer,A=s.vertexTextures;let g=s.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(w){return l.add(w),w===0?"uv":`uv${w}`}function p(w,S,m,I,Q){const K=I.fog,Y=Q.geometry,te=w.isMeshStandardMaterial?I.environment:null,X=(w.isMeshStandardMaterial?t:e).get(w.envMap||te),V=X&&X.mapping===so?X.image.height:null,ue=x[w.type];w.precision!==null&&(g=s.getMaxPrecision(w.precision),g!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",g,"instead."));const ae=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,le=ae!==void 0?ae.length:0;let ge=0;Y.morphAttributes.position!==void 0&&(ge=1),Y.morphAttributes.normal!==void 0&&(ge=2),Y.morphAttributes.color!==void 0&&(ge=3);let Ee,$,oe,ee;if(ue){const ze=ui[ue];Ee=ze.vertexShader,$=ze.fragmentShader}else Ee=w.vertexShader,$=w.fragmentShader,c.update(w),oe=c.getVertexShaderID(w),ee=c.getFragmentShaderID(w);const Ae=i.getRenderTarget(),W=i.state.buffers.depth.getReversed(),re=Q.isInstancedMesh===!0,he=Q.isBatchedMesh===!0,ce=!!w.map,fe=!!w.matcap,_e=!!X,f=!!w.aoMap,B=!!w.lightMap,j=!!w.bumpMap,L=!!w.normalMap,N=!!w.displacementMap,O=!!w.emissiveMap,D=!!w.metalnessMap,E=!!w.roughnessMap,b=w.anisotropy>0,C=w.clearcoat>0,T=w.dispersion>0,R=w.iridescence>0,F=w.sheen>0,k=w.transmission>0,G=b&&!!w.anisotropyMap,P=C&&!!w.clearcoatMap,J=C&&!!w.clearcoatNormalMap,ie=C&&!!w.clearcoatRoughnessMap,de=R&&!!w.iridescenceMap,ye=R&&!!w.iridescenceThicknessMap,me=F&&!!w.sheenColorMap,pe=F&&!!w.sheenRoughnessMap,ve=!!w.specularMap,Se=!!w.specularColorMap,be=!!w.specularIntensityMap,se=k&&!!w.transmissionMap,Be=k&&!!w.thicknessMap,xe=!!w.gradientMap,we=!!w.alphaMap,De=w.alphaTest>0,Le=!!w.alphaHash,Ve=!!w.extensions;let Ze=ts;w.toneMapped&&(Ae===null||Ae.isXRRenderTarget===!0)&&(Ze=i.toneMapping);const ct={shaderID:ue,shaderType:w.type,shaderName:w.name,vertexShader:Ee,fragmentShader:$,defines:w.defines,customVertexShaderID:oe,customFragmentShaderID:ee,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:g,batching:he,batchingColor:he&&Q._colorsTexture!==null,instancing:re,instancingColor:re&&Q.instanceColor!==null,instancingMorph:re&&Q.morphTexture!==null,supportsVertexTextures:A,outputColorSpace:Ae===null?i.outputColorSpace:Ae.isXRRenderTarget===!0?Ae.texture.colorSpace:dn,alphaToCoverage:!!w.alphaToCoverage,map:ce,matcap:fe,envMap:_e,envMapMode:_e&&X.mapping,envMapCubeUVHeight:V,aoMap:f,lightMap:B,bumpMap:j,normalMap:L,displacementMap:A&&N,emissiveMap:O,normalMapObjectSpace:L&&w.normalMapType===_d,normalMapTangentSpace:L&&w.normalMapType===ao,metalnessMap:D,roughnessMap:E,anisotropy:b,anisotropyMap:G,clearcoat:C,clearcoatMap:P,clearcoatNormalMap:J,clearcoatRoughnessMap:ie,dispersion:T,iridescence:R,iridescenceMap:de,iridescenceThicknessMap:ye,sheen:F,sheenColorMap:me,sheenRoughnessMap:pe,specularMap:ve,specularColorMap:Se,specularIntensityMap:be,transmission:k,transmissionMap:se,thicknessMap:Be,gradientMap:xe,opaque:w.transparent===!1&&w.blending===Ws&&w.alphaToCoverage===!1,alphaMap:we,alphaTest:De,alphaHash:Le,combine:w.combine,mapUv:ce&&_(w.map.channel),aoMapUv:f&&_(w.aoMap.channel),lightMapUv:B&&_(w.lightMap.channel),bumpMapUv:j&&_(w.bumpMap.channel),normalMapUv:L&&_(w.normalMap.channel),displacementMapUv:N&&_(w.displacementMap.channel),emissiveMapUv:O&&_(w.emissiveMap.channel),metalnessMapUv:D&&_(w.metalnessMap.channel),roughnessMapUv:E&&_(w.roughnessMap.channel),anisotropyMapUv:G&&_(w.anisotropyMap.channel),clearcoatMapUv:P&&_(w.clearcoatMap.channel),clearcoatNormalMapUv:J&&_(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ie&&_(w.clearcoatRoughnessMap.channel),iridescenceMapUv:de&&_(w.iridescenceMap.channel),iridescenceThicknessMapUv:ye&&_(w.iridescenceThicknessMap.channel),sheenColorMapUv:me&&_(w.sheenColorMap.channel),sheenRoughnessMapUv:pe&&_(w.sheenRoughnessMap.channel),specularMapUv:ve&&_(w.specularMap.channel),specularColorMapUv:Se&&_(w.specularColorMap.channel),specularIntensityMapUv:be&&_(w.specularIntensityMap.channel),transmissionMapUv:se&&_(w.transmissionMap.channel),thicknessMapUv:Be&&_(w.thicknessMap.channel),alphaMapUv:we&&_(w.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(L||b),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pointsUvs:Q.isPoints===!0&&!!Y.attributes.uv&&(ce||we),fog:!!K,useFog:w.fog===!0,fogExp2:!!K&&K.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:W,skinning:Q.isSkinnedMesh===!0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:le,morphTextureStride:ge,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:w.dithering,shadowMapEnabled:i.shadowMap.enabled&&m.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ze,decodeVideoTexture:ce&&w.map.isVideoTexture===!0&&ht.getTransfer(w.map.colorSpace)===mt,decodeVideoTextureEmissive:O&&w.emissiveMap.isVideoTexture===!0&&ht.getTransfer(w.emissiveMap.colorSpace)===mt,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===Mt,flipSided:w.side===In,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Ve&&w.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ve&&w.extensions.multiDraw===!0||he)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return ct.vertexUv1s=l.has(1),ct.vertexUv2s=l.has(2),ct.vertexUv3s=l.has(3),l.clear(),ct}function d(w){const S=[];if(w.shaderID?S.push(w.shaderID):(S.push(w.customVertexShaderID),S.push(w.customFragmentShaderID)),w.defines!==void 0)for(const m in w.defines)S.push(m),S.push(w.defines[m]);return w.isRawShaderMaterial===!1&&(M(S,w),y(S,w),S.push(i.outputColorSpace)),S.push(w.customProgramCacheKey),S.join()}function M(w,S){w.push(S.precision),w.push(S.outputColorSpace),w.push(S.envMapMode),w.push(S.envMapCubeUVHeight),w.push(S.mapUv),w.push(S.alphaMapUv),w.push(S.lightMapUv),w.push(S.aoMapUv),w.push(S.bumpMapUv),w.push(S.normalMapUv),w.push(S.displacementMapUv),w.push(S.emissiveMapUv),w.push(S.metalnessMapUv),w.push(S.roughnessMapUv),w.push(S.anisotropyMapUv),w.push(S.clearcoatMapUv),w.push(S.clearcoatNormalMapUv),w.push(S.clearcoatRoughnessMapUv),w.push(S.iridescenceMapUv),w.push(S.iridescenceThicknessMapUv),w.push(S.sheenColorMapUv),w.push(S.sheenRoughnessMapUv),w.push(S.specularMapUv),w.push(S.specularColorMapUv),w.push(S.specularIntensityMapUv),w.push(S.transmissionMapUv),w.push(S.thicknessMapUv),w.push(S.combine),w.push(S.fogExp2),w.push(S.sizeAttenuation),w.push(S.morphTargetsCount),w.push(S.morphAttributeCount),w.push(S.numDirLights),w.push(S.numPointLights),w.push(S.numSpotLights),w.push(S.numSpotLightMaps),w.push(S.numHemiLights),w.push(S.numRectAreaLights),w.push(S.numDirLightShadows),w.push(S.numPointLightShadows),w.push(S.numSpotLightShadows),w.push(S.numSpotLightShadowsWithMaps),w.push(S.numLightProbes),w.push(S.shadowMapType),w.push(S.toneMapping),w.push(S.numClippingPlanes),w.push(S.numClipIntersection),w.push(S.depthPacking)}function y(w,S){o.disableAll(),S.supportsVertexTextures&&o.enable(0),S.instancing&&o.enable(1),S.instancingColor&&o.enable(2),S.instancingMorph&&o.enable(3),S.matcap&&o.enable(4),S.envMap&&o.enable(5),S.normalMapObjectSpace&&o.enable(6),S.normalMapTangentSpace&&o.enable(7),S.clearcoat&&o.enable(8),S.iridescence&&o.enable(9),S.alphaTest&&o.enable(10),S.vertexColors&&o.enable(11),S.vertexAlphas&&o.enable(12),S.vertexUv1s&&o.enable(13),S.vertexUv2s&&o.enable(14),S.vertexUv3s&&o.enable(15),S.vertexTangents&&o.enable(16),S.anisotropy&&o.enable(17),S.alphaHash&&o.enable(18),S.batching&&o.enable(19),S.dispersion&&o.enable(20),S.batchingColor&&o.enable(21),w.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reverseDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.decodeVideoTextureEmissive&&o.enable(20),S.alphaToCoverage&&o.enable(21),w.push(o.mask)}function v(w){const S=x[w.type];let m;if(S){const I=ui[S];m=di.clone(I.uniforms)}else m=w.uniforms;return m}function q(w,S){let m;for(let I=0,Q=h.length;I<Q;I++){const K=h[I];if(K.cacheKey===S){m=K,++m.usedTimes;break}}return m===void 0&&(m=new E0(i,S,w,a),h.push(m)),m}function H(w){if(--w.usedTimes===0){const S=h.indexOf(w);h[S]=h[h.length-1],h.pop(),w.destroy()}}function U(w){c.remove(w)}function Z(){c.dispose()}return{getParameters:p,getProgramCacheKey:d,getUniforms:v,acquireProgram:q,releaseProgram:H,releaseShaderCache:U,programs:h,dispose:Z}}function w0(){let i=new WeakMap;function e(r){return i.has(r)}function t(r){let o=i.get(r);return o===void 0&&(o={},i.set(r,o)),o}function n(r){i.delete(r)}function s(r,o,c){i.get(r)[o]=c}function a(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:a}}function S0(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Sh(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Ih(){const i=[];let e=0;const t=[],n=[],s=[];function a(){e=0,t.length=0,n.length=0,s.length=0}function r(u,A,g,x,_,p){let d=i[e];return d===void 0?(d={id:u.id,object:u,geometry:A,material:g,groupOrder:x,renderOrder:u.renderOrder,z:_,group:p},i[e]=d):(d.id=u.id,d.object=u,d.geometry=A,d.material=g,d.groupOrder=x,d.renderOrder=u.renderOrder,d.z=_,d.group=p),e++,d}function o(u,A,g,x,_,p){const d=r(u,A,g,x,_,p);g.transmission>0?n.push(d):g.transparent===!0?s.push(d):t.push(d)}function c(u,A,g,x,_,p){const d=r(u,A,g,x,_,p);g.transmission>0?n.unshift(d):g.transparent===!0?s.unshift(d):t.unshift(d)}function l(u,A){t.length>1&&t.sort(u||S0),n.length>1&&n.sort(A||Sh),s.length>1&&s.sort(A||Sh)}function h(){for(let u=e,A=i.length;u<A;u++){const g=i[u];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:n,transparent:s,init:a,push:o,unshift:c,finish:h,sort:l}}function I0(){let i=new WeakMap;function e(n,s){const a=i.get(n);let r;return a===void 0?(r=new Ih,i.set(n,[r])):s>=a.length?(r=new Ih,a.push(r)):r=a[s],r}function t(){i=new WeakMap}return{get:e,dispose:t}}function T0(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new ne,color:new Re};break;case"SpotLight":t={position:new ne,direction:new ne,color:new Re,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new ne,color:new Re,distance:0,decay:0};break;case"HemisphereLight":t={direction:new ne,skyColor:new Re,groundColor:new Re};break;case"RectAreaLight":t={color:new Re,position:new ne,halfWidth:new ne,halfHeight:new ne};break}return i[e.id]=t,t}}}function B0(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let R0=0;function D0(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function L0(i){const e=new T0,t=B0(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new ne);const s=new ne,a=new He,r=new He;function o(l){let h=0,u=0,A=0;for(let w=0;w<9;w++)n.probe[w].set(0,0,0);let g=0,x=0,_=0,p=0,d=0,M=0,y=0,v=0,q=0,H=0,U=0;l.sort(D0);for(let w=0,S=l.length;w<S;w++){const m=l[w],I=m.color,Q=m.intensity,K=m.distance,Y=m.shadow&&m.shadow.map?m.shadow.map.texture:null;if(m.isAmbientLight)h+=I.r*Q,u+=I.g*Q,A+=I.b*Q;else if(m.isLightProbe){for(let te=0;te<9;te++)n.probe[te].addScaledVector(m.sh.coefficients[te],Q);U++}else if(m.isDirectionalLight){const te=e.get(m);if(te.color.copy(m.color).multiplyScalar(m.intensity),m.castShadow){const X=m.shadow,V=t.get(m);V.shadowIntensity=X.intensity,V.shadowBias=X.bias,V.shadowNormalBias=X.normalBias,V.shadowRadius=X.radius,V.shadowMapSize=X.mapSize,n.directionalShadow[g]=V,n.directionalShadowMap[g]=Y,n.directionalShadowMatrix[g]=m.shadow.matrix,M++}n.directional[g]=te,g++}else if(m.isSpotLight){const te=e.get(m);te.position.setFromMatrixPosition(m.matrixWorld),te.color.copy(I).multiplyScalar(Q),te.distance=K,te.coneCos=Math.cos(m.angle),te.penumbraCos=Math.cos(m.angle*(1-m.penumbra)),te.decay=m.decay,n.spot[_]=te;const X=m.shadow;if(m.map&&(n.spotLightMap[q]=m.map,q++,X.updateMatrices(m),m.castShadow&&H++),n.spotLightMatrix[_]=X.matrix,m.castShadow){const V=t.get(m);V.shadowIntensity=X.intensity,V.shadowBias=X.bias,V.shadowNormalBias=X.normalBias,V.shadowRadius=X.radius,V.shadowMapSize=X.mapSize,n.spotShadow[_]=V,n.spotShadowMap[_]=Y,v++}_++}else if(m.isRectAreaLight){const te=e.get(m);te.color.copy(I).multiplyScalar(Q),te.halfWidth.set(m.width*.5,0,0),te.halfHeight.set(0,m.height*.5,0),n.rectArea[p]=te,p++}else if(m.isPointLight){const te=e.get(m);if(te.color.copy(m.color).multiplyScalar(m.intensity),te.distance=m.distance,te.decay=m.decay,m.castShadow){const X=m.shadow,V=t.get(m);V.shadowIntensity=X.intensity,V.shadowBias=X.bias,V.shadowNormalBias=X.normalBias,V.shadowRadius=X.radius,V.shadowMapSize=X.mapSize,V.shadowCameraNear=X.camera.near,V.shadowCameraFar=X.camera.far,n.pointShadow[x]=V,n.pointShadowMap[x]=Y,n.pointShadowMatrix[x]=m.shadow.matrix,y++}n.point[x]=te,x++}else if(m.isHemisphereLight){const te=e.get(m);te.skyColor.copy(m.color).multiplyScalar(Q),te.groundColor.copy(m.groundColor).multiplyScalar(Q),n.hemi[d]=te,d++}}p>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Qe.LTC_FLOAT_1,n.rectAreaLTC2=Qe.LTC_FLOAT_2):(n.rectAreaLTC1=Qe.LTC_HALF_1,n.rectAreaLTC2=Qe.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=A;const Z=n.hash;(Z.directionalLength!==g||Z.pointLength!==x||Z.spotLength!==_||Z.rectAreaLength!==p||Z.hemiLength!==d||Z.numDirectionalShadows!==M||Z.numPointShadows!==y||Z.numSpotShadows!==v||Z.numSpotMaps!==q||Z.numLightProbes!==U)&&(n.directional.length=g,n.spot.length=_,n.rectArea.length=p,n.point.length=x,n.hemi.length=d,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=v+q-H,n.spotLightMap.length=q,n.numSpotLightShadowsWithMaps=H,n.numLightProbes=U,Z.directionalLength=g,Z.pointLength=x,Z.spotLength=_,Z.rectAreaLength=p,Z.hemiLength=d,Z.numDirectionalShadows=M,Z.numPointShadows=y,Z.numSpotShadows=v,Z.numSpotMaps=q,Z.numLightProbes=U,n.version=R0++)}function c(l,h){let u=0,A=0,g=0,x=0,_=0;const p=h.matrixWorldInverse;for(let d=0,M=l.length;d<M;d++){const y=l[d];if(y.isDirectionalLight){const v=n.directional[u];v.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(p),u++}else if(y.isSpotLight){const v=n.spot[g];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(p),v.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(p),g++}else if(y.isRectAreaLight){const v=n.rectArea[x];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(p),r.identity(),a.copy(y.matrixWorld),a.premultiply(p),r.extractRotation(a),v.halfWidth.set(y.width*.5,0,0),v.halfHeight.set(0,y.height*.5,0),v.halfWidth.applyMatrix4(r),v.halfHeight.applyMatrix4(r),x++}else if(y.isPointLight){const v=n.point[A];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(p),A++}else if(y.isHemisphereLight){const v=n.hemi[_];v.direction.setFromMatrixPosition(y.matrixWorld),v.direction.transformDirection(p),_++}}}return{setup:o,setupView:c,state:n}}function Th(i){const e=new L0(i),t=[],n=[];function s(h){l.camera=h,t.length=0,n.length=0}function a(h){t.push(h)}function r(h){n.push(h)}function o(){e.setup(t)}function c(h){e.setupView(t,h)}const l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:o,setupLightsView:c,pushLight:a,pushShadow:r}}function P0(i){let e=new WeakMap;function t(s,a=0){const r=e.get(s);let o;return r===void 0?(o=new Th(i),e.set(s,[o])):a>=r.length?(o=new Th(i),r.push(o)):o=r[a],o}function n(){e=new WeakMap}return{get:t,dispose:n}}class U0 extends jn{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=bd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class F0 extends jn{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const N0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Q0=`uniform sampler2D shadow_pass;
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
}`;function k0(i,e,t){let n=new gl;const s=new ke,a=new ke,r=new dt,o=new U0({depthPacking:xd}),c=new F0,l={},h=t.maxTextureSize,u={[ai]:In,[In]:ai,[Mt]:Mt},A=new Wt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ke},radius:{value:4}},vertexShader:N0,fragmentShader:Q0}),g=A.clone();g.defines.HORIZONTAL_PASS=1;const x=new xt;x.setAttribute("position",new Lt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new nt(x,A),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ol;let d=this.type;this.render=function(H,U,Z){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||H.length===0)return;const w=i.getRenderTarget(),S=i.getActiveCubeFace(),m=i.getActiveMipmapLevel(),I=i.state;I.setBlending(nn),I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);const Q=d!==Ii&&this.type===Ii,K=d===Ii&&this.type!==Ii;for(let Y=0,te=H.length;Y<te;Y++){const X=H[Y],V=X.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",X,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;s.copy(V.mapSize);const ue=V.getFrameExtents();if(s.multiply(ue),a.copy(V.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(a.x=Math.floor(h/ue.x),s.x=a.x*ue.x,V.mapSize.x=a.x),s.y>h&&(a.y=Math.floor(h/ue.y),s.y=a.y*ue.y,V.mapSize.y=a.y)),V.map===null||Q===!0||K===!0){const le=this.type!==Ii?{minFilter:cn,magFilter:cn}:{};V.map!==null&&V.map.dispose(),V.map=new Pn(s.x,s.y,le),V.map.texture.name=X.name+".shadowMap",V.camera.updateProjectionMatrix()}i.setRenderTarget(V.map),i.clear();const ae=V.getViewportCount();for(let le=0;le<ae;le++){const ge=V.getViewport(le);r.set(a.x*ge.x,a.y*ge.y,a.x*ge.z,a.y*ge.w),I.viewport(r),V.updateMatrices(X,le),n=V.getFrustum(),v(U,Z,V.camera,X,this.type)}V.isPointLightShadow!==!0&&this.type===Ii&&M(V,Z),V.needsUpdate=!1}d=this.type,p.needsUpdate=!1,i.setRenderTarget(w,S,m)};function M(H,U){const Z=e.update(_);A.defines.VSM_SAMPLES!==H.blurSamples&&(A.defines.VSM_SAMPLES=H.blurSamples,g.defines.VSM_SAMPLES=H.blurSamples,A.needsUpdate=!0,g.needsUpdate=!0),H.mapPass===null&&(H.mapPass=new Pn(s.x,s.y)),A.uniforms.shadow_pass.value=H.map.texture,A.uniforms.resolution.value=H.mapSize,A.uniforms.radius.value=H.radius,i.setRenderTarget(H.mapPass),i.clear(),i.renderBufferDirect(U,null,Z,A,_,null),g.uniforms.shadow_pass.value=H.mapPass.texture,g.uniforms.resolution.value=H.mapSize,g.uniforms.radius.value=H.radius,i.setRenderTarget(H.map),i.clear(),i.renderBufferDirect(U,null,Z,g,_,null)}function y(H,U,Z,w){let S=null;const m=Z.isPointLight===!0?H.customDistanceMaterial:H.customDepthMaterial;if(m!==void 0)S=m;else if(S=Z.isPointLight===!0?c:o,i.localClippingEnabled&&U.clipShadows===!0&&Array.isArray(U.clippingPlanes)&&U.clippingPlanes.length!==0||U.displacementMap&&U.displacementScale!==0||U.alphaMap&&U.alphaTest>0||U.map&&U.alphaTest>0){const I=S.uuid,Q=U.uuid;let K=l[I];K===void 0&&(K={},l[I]=K);let Y=K[Q];Y===void 0&&(Y=S.clone(),K[Q]=Y,U.addEventListener("dispose",q)),S=Y}if(S.visible=U.visible,S.wireframe=U.wireframe,w===Ii?S.side=U.shadowSide!==null?U.shadowSide:U.side:S.side=U.shadowSide!==null?U.shadowSide:u[U.side],S.alphaMap=U.alphaMap,S.alphaTest=U.alphaTest,S.map=U.map,S.clipShadows=U.clipShadows,S.clippingPlanes=U.clippingPlanes,S.clipIntersection=U.clipIntersection,S.displacementMap=U.displacementMap,S.displacementScale=U.displacementScale,S.displacementBias=U.displacementBias,S.wireframeLinewidth=U.wireframeLinewidth,S.linewidth=U.linewidth,Z.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const I=i.properties.get(S);I.light=Z}return S}function v(H,U,Z,w,S){if(H.visible===!1)return;if(H.layers.test(U.layers)&&(H.isMesh||H.isLine||H.isPoints)&&(H.castShadow||H.receiveShadow&&S===Ii)&&(!H.frustumCulled||n.intersectsObject(H))){H.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,H.matrixWorld);const Q=e.update(H),K=H.material;if(Array.isArray(K)){const Y=Q.groups;for(let te=0,X=Y.length;te<X;te++){const V=Y[te],ue=K[V.materialIndex];if(ue&&ue.visible){const ae=y(H,ue,w,S);H.onBeforeShadow(i,H,U,Z,Q,ae,V),i.renderBufferDirect(Z,null,Q,ae,H,V),H.onAfterShadow(i,H,U,Z,Q,ae,V)}}}else if(K.visible){const Y=y(H,K,w,S);H.onBeforeShadow(i,H,U,Z,Q,Y,null),i.renderBufferDirect(Z,null,Q,Y,H,null),H.onAfterShadow(i,H,U,Z,Q,Y,null)}}const I=H.children;for(let Q=0,K=I.length;Q<K;Q++)v(I[Q],U,Z,w,S)}function q(H){H.target.removeEventListener("dispose",q);for(const Z in l){const w=l[Z],S=H.target.uuid;S in w&&(w[S].dispose(),delete w[S])}}}const O0={[gc]:bc,[xc]:vc,[_c]:Mc,[Js]:Ec,[bc]:gc,[vc]:xc,[Mc]:_c,[Ec]:Js};function z0(i,e){function t(){let se=!1;const Be=new dt;let xe=null;const we=new dt(0,0,0,0);return{setMask:function(De){xe!==De&&!se&&(i.colorMask(De,De,De,De),xe=De)},setLocked:function(De){se=De},setClear:function(De,Le,Ve,Ze,ct){ct===!0&&(De*=Ze,Le*=Ze,Ve*=Ze),Be.set(De,Le,Ve,Ze),we.equals(Be)===!1&&(i.clearColor(De,Le,Ve,Ze),we.copy(Be))},reset:function(){se=!1,xe=null,we.set(-1,0,0,0)}}}function n(){let se=!1,Be=!1,xe=null,we=null,De=null;return{setReversed:function(Le){if(Be!==Le){const Ve=e.get("EXT_clip_control");Be?Ve.clipControlEXT(Ve.LOWER_LEFT_EXT,Ve.ZERO_TO_ONE_EXT):Ve.clipControlEXT(Ve.LOWER_LEFT_EXT,Ve.NEGATIVE_ONE_TO_ONE_EXT);const Ze=De;De=null,this.setClear(Ze)}Be=Le},getReversed:function(){return Be},setTest:function(Le){Le?Ae(i.DEPTH_TEST):W(i.DEPTH_TEST)},setMask:function(Le){xe!==Le&&!se&&(i.depthMask(Le),xe=Le)},setFunc:function(Le){if(Be&&(Le=O0[Le]),we!==Le){switch(Le){case gc:i.depthFunc(i.NEVER);break;case bc:i.depthFunc(i.ALWAYS);break;case xc:i.depthFunc(i.LESS);break;case Js:i.depthFunc(i.LEQUAL);break;case _c:i.depthFunc(i.EQUAL);break;case Ec:i.depthFunc(i.GEQUAL);break;case vc:i.depthFunc(i.GREATER);break;case Mc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}we=Le}},setLocked:function(Le){se=Le},setClear:function(Le){De!==Le&&(Be&&(Le=1-Le),i.clearDepth(Le),De=Le)},reset:function(){se=!1,xe=null,we=null,De=null,Be=!1}}}function s(){let se=!1,Be=null,xe=null,we=null,De=null,Le=null,Ve=null,Ze=null,ct=null;return{setTest:function(ze){se||(ze?Ae(i.STENCIL_TEST):W(i.STENCIL_TEST))},setMask:function(ze){Be!==ze&&!se&&(i.stencilMask(ze),Be=ze)},setFunc:function(ze,Pt,Jt){(xe!==ze||we!==Pt||De!==Jt)&&(i.stencilFunc(ze,Pt,Jt),xe=ze,we=Pt,De=Jt)},setOp:function(ze,Pt,Jt){(Le!==ze||Ve!==Pt||Ze!==Jt)&&(i.stencilOp(ze,Pt,Jt),Le=ze,Ve=Pt,Ze=Jt)},setLocked:function(ze){se=ze},setClear:function(ze){ct!==ze&&(i.clearStencil(ze),ct=ze)},reset:function(){se=!1,Be=null,xe=null,we=null,De=null,Le=null,Ve=null,Ze=null,ct=null}}}const a=new t,r=new n,o=new s,c=new WeakMap,l=new WeakMap;let h={},u={},A=new WeakMap,g=[],x=null,_=!1,p=null,d=null,M=null,y=null,v=null,q=null,H=null,U=new Re(0,0,0),Z=0,w=!1,S=null,m=null,I=null,Q=null,K=null;const Y=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let te=!1,X=0;const V=i.getParameter(i.VERSION);V.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(V)[1]),te=X>=1):V.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),te=X>=2);let ue=null,ae={};const le=i.getParameter(i.SCISSOR_BOX),ge=i.getParameter(i.VIEWPORT),Ee=new dt().fromArray(le),$=new dt().fromArray(ge);function oe(se,Be,xe,we){const De=new Uint8Array(4),Le=i.createTexture();i.bindTexture(se,Le),i.texParameteri(se,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(se,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ve=0;Ve<xe;Ve++)se===i.TEXTURE_3D||se===i.TEXTURE_2D_ARRAY?i.texImage3D(Be,0,i.RGBA,1,1,we,0,i.RGBA,i.UNSIGNED_BYTE,De):i.texImage2D(Be+Ve,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,De);return Le}const ee={};ee[i.TEXTURE_2D]=oe(i.TEXTURE_2D,i.TEXTURE_2D,1),ee[i.TEXTURE_CUBE_MAP]=oe(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ee[i.TEXTURE_2D_ARRAY]=oe(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ee[i.TEXTURE_3D]=oe(i.TEXTURE_3D,i.TEXTURE_3D,1,1),a.setClear(0,0,0,1),r.setClear(1),o.setClear(0),Ae(i.DEPTH_TEST),r.setFunc(Js),j(!1),L(Bl),Ae(i.CULL_FACE),f(nn);function Ae(se){h[se]!==!0&&(i.enable(se),h[se]=!0)}function W(se){h[se]!==!1&&(i.disable(se),h[se]=!1)}function re(se,Be){return u[se]!==Be?(i.bindFramebuffer(se,Be),u[se]=Be,se===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=Be),se===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=Be),!0):!1}function he(se,Be){let xe=g,we=!1;if(se){xe=A.get(Be),xe===void 0&&(xe=[],A.set(Be,xe));const De=se.textures;if(xe.length!==De.length||xe[0]!==i.COLOR_ATTACHMENT0){for(let Le=0,Ve=De.length;Le<Ve;Le++)xe[Le]=i.COLOR_ATTACHMENT0+Le;xe.length=De.length,we=!0}}else xe[0]!==i.BACK&&(xe[0]=i.BACK,we=!0);we&&i.drawBuffers(xe)}function ce(se){return x!==se?(i.useProgram(se),x=se,!0):!1}const fe={[ti]:i.FUNC_ADD,[Zf]:i.FUNC_SUBTRACT,[$f]:i.FUNC_REVERSE_SUBTRACT};fe[ed]=i.MIN,fe[td]=i.MAX;const _e={[Ma]:i.ZERO,[nd]:i.ONE,[id]:i.SRC_COLOR,[dc]:i.SRC_ALPHA,[od]:i.SRC_ALPHA_SATURATE,[mc]:i.DST_COLOR,[pc]:i.DST_ALPHA,[sd]:i.ONE_MINUS_SRC_COLOR,[Ac]:i.ONE_MINUS_SRC_ALPHA,[rd]:i.ONE_MINUS_DST_COLOR,[ad]:i.ONE_MINUS_DST_ALPHA,[cd]:i.CONSTANT_COLOR,[ld]:i.ONE_MINUS_CONSTANT_COLOR,[hd]:i.CONSTANT_ALPHA,[ud]:i.ONE_MINUS_CONSTANT_ALPHA};function f(se,Be,xe,we,De,Le,Ve,Ze,ct,ze){if(se===nn){_===!0&&(W(i.BLEND),_=!1);return}if(_===!1&&(Ae(i.BLEND),_=!0),se!==Mu){if(se!==p||ze!==w){if((d!==ti||v!==ti)&&(i.blendEquation(i.FUNC_ADD),d=ti,v=ti),ze)switch(se){case Ws:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case fc:i.blendFunc(i.ONE,i.ONE);break;case Rl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Dl:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",se);break}else switch(se){case Ws:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case fc:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Rl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Dl:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",se);break}M=null,y=null,q=null,H=null,U.set(0,0,0),Z=0,p=se,w=ze}return}De=De||Be,Le=Le||xe,Ve=Ve||we,(Be!==d||De!==v)&&(i.blendEquationSeparate(fe[Be],fe[De]),d=Be,v=De),(xe!==M||we!==y||Le!==q||Ve!==H)&&(i.blendFuncSeparate(_e[xe],_e[we],_e[Le],_e[Ve]),M=xe,y=we,q=Le,H=Ve),(Ze.equals(U)===!1||ct!==Z)&&(i.blendColor(Ze.r,Ze.g,Ze.b,ct),U.copy(Ze),Z=ct),p=se,w=!1}function B(se,Be){se.side===Mt?W(i.CULL_FACE):Ae(i.CULL_FACE);let xe=se.side===In;Be&&(xe=!xe),j(xe),se.blending===Ws&&se.transparent===!1?f(nn):f(se.blending,se.blendEquation,se.blendSrc,se.blendDst,se.blendEquationAlpha,se.blendSrcAlpha,se.blendDstAlpha,se.blendColor,se.blendAlpha,se.premultipliedAlpha),r.setFunc(se.depthFunc),r.setTest(se.depthTest),r.setMask(se.depthWrite),a.setMask(se.colorWrite);const we=se.stencilWrite;o.setTest(we),we&&(o.setMask(se.stencilWriteMask),o.setFunc(se.stencilFunc,se.stencilRef,se.stencilFuncMask),o.setOp(se.stencilFail,se.stencilZFail,se.stencilZPass)),O(se.polygonOffset,se.polygonOffsetFactor,se.polygonOffsetUnits),se.alphaToCoverage===!0?Ae(i.SAMPLE_ALPHA_TO_COVERAGE):W(i.SAMPLE_ALPHA_TO_COVERAGE)}function j(se){S!==se&&(se?i.frontFace(i.CW):i.frontFace(i.CCW),S=se)}function L(se){se!==Kf?(Ae(i.CULL_FACE),se!==m&&(se===Bl?i.cullFace(i.BACK):se===Jf?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):W(i.CULL_FACE),m=se}function N(se){se!==I&&(te&&i.lineWidth(se),I=se)}function O(se,Be,xe){se?(Ae(i.POLYGON_OFFSET_FILL),(Q!==Be||K!==xe)&&(i.polygonOffset(Be,xe),Q=Be,K=xe)):W(i.POLYGON_OFFSET_FILL)}function D(se){se?Ae(i.SCISSOR_TEST):W(i.SCISSOR_TEST)}function E(se){se===void 0&&(se=i.TEXTURE0+Y-1),ue!==se&&(i.activeTexture(se),ue=se)}function b(se,Be,xe){xe===void 0&&(ue===null?xe=i.TEXTURE0+Y-1:xe=ue);let we=ae[xe];we===void 0&&(we={type:void 0,texture:void 0},ae[xe]=we),(we.type!==se||we.texture!==Be)&&(ue!==xe&&(i.activeTexture(xe),ue=xe),i.bindTexture(se,Be||ee[se]),we.type=se,we.texture=Be)}function C(){const se=ae[ue];se!==void 0&&se.type!==void 0&&(i.bindTexture(se.type,null),se.type=void 0,se.texture=void 0)}function T(){try{i.compressedTexImage2D.apply(i,arguments)}catch(se){console.error("THREE.WebGLState:",se)}}function R(){try{i.compressedTexImage3D.apply(i,arguments)}catch(se){console.error("THREE.WebGLState:",se)}}function F(){try{i.texSubImage2D.apply(i,arguments)}catch(se){console.error("THREE.WebGLState:",se)}}function k(){try{i.texSubImage3D.apply(i,arguments)}catch(se){console.error("THREE.WebGLState:",se)}}function G(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(se){console.error("THREE.WebGLState:",se)}}function P(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(se){console.error("THREE.WebGLState:",se)}}function J(){try{i.texStorage2D.apply(i,arguments)}catch(se){console.error("THREE.WebGLState:",se)}}function ie(){try{i.texStorage3D.apply(i,arguments)}catch(se){console.error("THREE.WebGLState:",se)}}function de(){try{i.texImage2D.apply(i,arguments)}catch(se){console.error("THREE.WebGLState:",se)}}function ye(){try{i.texImage3D.apply(i,arguments)}catch(se){console.error("THREE.WebGLState:",se)}}function me(se){Ee.equals(se)===!1&&(i.scissor(se.x,se.y,se.z,se.w),Ee.copy(se))}function pe(se){$.equals(se)===!1&&(i.viewport(se.x,se.y,se.z,se.w),$.copy(se))}function ve(se,Be){let xe=l.get(Be);xe===void 0&&(xe=new WeakMap,l.set(Be,xe));let we=xe.get(se);we===void 0&&(we=i.getUniformBlockIndex(Be,se.name),xe.set(se,we))}function Se(se,Be){const we=l.get(Be).get(se);c.get(Be)!==we&&(i.uniformBlockBinding(Be,we,se.__bindingPointIndex),c.set(Be,we))}function be(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),r.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},ue=null,ae={},u={},A=new WeakMap,g=[],x=null,_=!1,p=null,d=null,M=null,y=null,v=null,q=null,H=null,U=new Re(0,0,0),Z=0,w=!1,S=null,m=null,I=null,Q=null,K=null,Ee.set(0,0,i.canvas.width,i.canvas.height),$.set(0,0,i.canvas.width,i.canvas.height),a.reset(),r.reset(),o.reset()}return{buffers:{color:a,depth:r,stencil:o},enable:Ae,disable:W,bindFramebuffer:re,drawBuffers:he,useProgram:ce,setBlending:f,setMaterial:B,setFlipSided:j,setCullFace:L,setLineWidth:N,setPolygonOffset:O,setScissorTest:D,activeTexture:E,bindTexture:b,unbindTexture:C,compressedTexImage2D:T,compressedTexImage3D:R,texImage2D:de,texImage3D:ye,updateUBOMapping:ve,uniformBlockBinding:Se,texStorage2D:J,texStorage3D:ie,texSubImage2D:F,texSubImage3D:k,compressedTexSubImage2D:G,compressedTexSubImage3D:P,scissor:me,viewport:pe,reset:be}}function Bh(i,e,t,n){const s=G0(n);switch(t){case Pu:return i*e;case Fu:return i*e;case Nu:return i*e*2;case Ki:return i*e/s.components*s.byteLength;case dl:return i*e/s.components*s.byteLength;case ds:return i*e*2/s.components*s.byteLength;case Al:return i*e*2/s.components*s.byteLength;case Uu:return i*e*3/s.components*s.byteLength;case Yt:return i*e*4/s.components*s.byteLength;case pl:return i*e*4/s.components*s.byteLength;case Nr:case Ia:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Qr:case Ta:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case wc:case Sc:return Math.max(i,16)*Math.max(e,8)/4;case Vr:case Wr:return Math.max(i,8)*Math.max(e,8)/2;case jr:case qr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Yr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Na:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ic:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Tc:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Bc:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Qa:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Rc:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Dc:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Lc:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Pc:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Uc:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Fc:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Nc:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Qc:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case kc:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Ba:case Oc:case Xr:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Qu:case zc:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Gc:case Hc:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function G0(i){switch(i){case qt:case Ru:return{byteLength:1,components:1};case Fa:case Du:case rn:return{byteLength:2,components:1};case ul:case fl:return{byteLength:2,components:4};case ms:case hl:case fn:return{byteLength:4,components:1};case Lu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function H0(i,e,t,n,s,a,r){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new ke,h=new WeakMap;let u;const A=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(E,b){return g?new OffscreenCanvas(E,b):za("canvas")}function _(E,b,C){let T=1;const R=D(E);if((R.width>C||R.height>C)&&(T=C/Math.max(R.width,R.height)),T<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){const F=Math.floor(T*R.width),k=Math.floor(T*R.height);u===void 0&&(u=x(F,k));const G=b?x(F,k):u;return G.width=F,G.height=k,G.getContext("2d").drawImage(E,0,0,F,k),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+R.width+"x"+R.height+") to ("+F+"x"+k+")."),G}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+R.width+"x"+R.height+")."),E;return E}function p(E){return E.generateMipmaps}function d(E){i.generateMipmap(E)}function M(E){return E.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?i.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(E,b,C,T,R=!1){if(E!==null){if(i[E]!==void 0)return i[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let F=b;if(b===i.RED&&(C===i.FLOAT&&(F=i.R32F),C===i.HALF_FLOAT&&(F=i.R16F),C===i.UNSIGNED_BYTE&&(F=i.R8)),b===i.RED_INTEGER&&(C===i.UNSIGNED_BYTE&&(F=i.R8UI),C===i.UNSIGNED_SHORT&&(F=i.R16UI),C===i.UNSIGNED_INT&&(F=i.R32UI),C===i.BYTE&&(F=i.R8I),C===i.SHORT&&(F=i.R16I),C===i.INT&&(F=i.R32I)),b===i.RG&&(C===i.FLOAT&&(F=i.RG32F),C===i.HALF_FLOAT&&(F=i.RG16F),C===i.UNSIGNED_BYTE&&(F=i.RG8)),b===i.RG_INTEGER&&(C===i.UNSIGNED_BYTE&&(F=i.RG8UI),C===i.UNSIGNED_SHORT&&(F=i.RG16UI),C===i.UNSIGNED_INT&&(F=i.RG32UI),C===i.BYTE&&(F=i.RG8I),C===i.SHORT&&(F=i.RG16I),C===i.INT&&(F=i.RG32I)),b===i.RGB_INTEGER&&(C===i.UNSIGNED_BYTE&&(F=i.RGB8UI),C===i.UNSIGNED_SHORT&&(F=i.RGB16UI),C===i.UNSIGNED_INT&&(F=i.RGB32UI),C===i.BYTE&&(F=i.RGB8I),C===i.SHORT&&(F=i.RGB16I),C===i.INT&&(F=i.RGB32I)),b===i.RGBA_INTEGER&&(C===i.UNSIGNED_BYTE&&(F=i.RGBA8UI),C===i.UNSIGNED_SHORT&&(F=i.RGBA16UI),C===i.UNSIGNED_INT&&(F=i.RGBA32UI),C===i.BYTE&&(F=i.RGBA8I),C===i.SHORT&&(F=i.RGBA16I),C===i.INT&&(F=i.RGBA32I)),b===i.RGB&&C===i.UNSIGNED_INT_5_9_9_9_REV&&(F=i.RGB9_E5),b===i.RGBA){const k=R?ro:ht.getTransfer(T);C===i.FLOAT&&(F=i.RGBA32F),C===i.HALF_FLOAT&&(F=i.RGBA16F),C===i.UNSIGNED_BYTE&&(F=k===mt?i.SRGB8_ALPHA8:i.RGBA8),C===i.UNSIGNED_SHORT_4_4_4_4&&(F=i.RGBA4),C===i.UNSIGNED_SHORT_5_5_5_1&&(F=i.RGB5_A1)}return(F===i.R16F||F===i.R32F||F===i.RG16F||F===i.RG32F||F===i.RGBA16F||F===i.RGBA32F)&&e.get("EXT_color_buffer_float"),F}function v(E,b){let C;return E?b===null||b===ms||b===gs?C=i.DEPTH24_STENCIL8:b===fn?C=i.DEPTH32F_STENCIL8:b===Fa&&(C=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===ms||b===gs?C=i.DEPTH_COMPONENT24:b===fn?C=i.DEPTH_COMPONENT32F:b===Fa&&(C=i.DEPTH_COMPONENT16),C}function q(E,b){return p(E)===!0||E.isFramebufferTexture&&E.minFilter!==cn&&E.minFilter!==_n?Math.log2(Math.max(b.width,b.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?b.mipmaps.length:1}function H(E){const b=E.target;b.removeEventListener("dispose",H),Z(b),b.isVideoTexture&&h.delete(b)}function U(E){const b=E.target;b.removeEventListener("dispose",U),S(b)}function Z(E){const b=n.get(E);if(b.__webglInit===void 0)return;const C=E.source,T=A.get(C);if(T){const R=T[b.__cacheKey];R.usedTimes--,R.usedTimes===0&&w(E),Object.keys(T).length===0&&A.delete(C)}n.remove(E)}function w(E){const b=n.get(E);i.deleteTexture(b.__webglTexture);const C=E.source,T=A.get(C);delete T[b.__cacheKey],r.memory.textures--}function S(E){const b=n.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),n.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let T=0;T<6;T++){if(Array.isArray(b.__webglFramebuffer[T]))for(let R=0;R<b.__webglFramebuffer[T].length;R++)i.deleteFramebuffer(b.__webglFramebuffer[T][R]);else i.deleteFramebuffer(b.__webglFramebuffer[T]);b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer[T])}else{if(Array.isArray(b.__webglFramebuffer))for(let T=0;T<b.__webglFramebuffer.length;T++)i.deleteFramebuffer(b.__webglFramebuffer[T]);else i.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&i.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let T=0;T<b.__webglColorRenderbuffer.length;T++)b.__webglColorRenderbuffer[T]&&i.deleteRenderbuffer(b.__webglColorRenderbuffer[T]);b.__webglDepthRenderbuffer&&i.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const C=E.textures;for(let T=0,R=C.length;T<R;T++){const F=n.get(C[T]);F.__webglTexture&&(i.deleteTexture(F.__webglTexture),r.memory.textures--),n.remove(C[T])}n.remove(E)}let m=0;function I(){m=0}function Q(){const E=m;return E>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+s.maxTextures),m+=1,E}function K(E){const b=[];return b.push(E.wrapS),b.push(E.wrapT),b.push(E.wrapR||0),b.push(E.magFilter),b.push(E.minFilter),b.push(E.anisotropy),b.push(E.internalFormat),b.push(E.format),b.push(E.type),b.push(E.generateMipmaps),b.push(E.premultiplyAlpha),b.push(E.flipY),b.push(E.unpackAlignment),b.push(E.colorSpace),b.join()}function Y(E,b){const C=n.get(E);if(E.isVideoTexture&&N(E),E.isRenderTargetTexture===!1&&E.version>0&&C.__version!==E.version){const T=E.image;if(T===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(T.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{$(C,E,b);return}}t.bindTexture(i.TEXTURE_2D,C.__webglTexture,i.TEXTURE0+b)}function te(E,b){const C=n.get(E);if(E.version>0&&C.__version!==E.version){$(C,E,b);return}t.bindTexture(i.TEXTURE_2D_ARRAY,C.__webglTexture,i.TEXTURE0+b)}function X(E,b){const C=n.get(E);if(E.version>0&&C.__version!==E.version){$(C,E,b);return}t.bindTexture(i.TEXTURE_3D,C.__webglTexture,i.TEXTURE0+b)}function V(E,b){const C=n.get(E);if(E.version>0&&C.__version!==E.version){oe(C,E,b);return}t.bindTexture(i.TEXTURE_CUBE_MAP,C.__webglTexture,i.TEXTURE0+b)}const ue={[Un]:i.REPEAT,[Ri]:i.CLAMP_TO_EDGE,[Hr]:i.MIRRORED_REPEAT},ae={[cn]:i.NEAREST,[Bu]:i.NEAREST_MIPMAP_NEAREST,[ya]:i.NEAREST_MIPMAP_LINEAR,[_n]:i.LINEAR,[Fr]:i.LINEAR_MIPMAP_NEAREST,[Ai]:i.LINEAR_MIPMAP_LINEAR},le={[Ed]:i.NEVER,[Sd]:i.ALWAYS,[vd]:i.LESS,[Ou]:i.LEQUAL,[Md]:i.EQUAL,[wd]:i.GEQUAL,[yd]:i.GREATER,[Cd]:i.NOTEQUAL};function ge(E,b){if(b.type===fn&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===_n||b.magFilter===Fr||b.magFilter===ya||b.magFilter===Ai||b.minFilter===_n||b.minFilter===Fr||b.minFilter===ya||b.minFilter===Ai)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(E,i.TEXTURE_WRAP_S,ue[b.wrapS]),i.texParameteri(E,i.TEXTURE_WRAP_T,ue[b.wrapT]),(E===i.TEXTURE_3D||E===i.TEXTURE_2D_ARRAY)&&i.texParameteri(E,i.TEXTURE_WRAP_R,ue[b.wrapR]),i.texParameteri(E,i.TEXTURE_MAG_FILTER,ae[b.magFilter]),i.texParameteri(E,i.TEXTURE_MIN_FILTER,ae[b.minFilter]),b.compareFunction&&(i.texParameteri(E,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(E,i.TEXTURE_COMPARE_FUNC,le[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===cn||b.minFilter!==ya&&b.minFilter!==Ai||b.type===fn&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){const C=e.get("EXT_texture_filter_anisotropic");i.texParameterf(E,C.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,s.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function Ee(E,b){let C=!1;E.__webglInit===void 0&&(E.__webglInit=!0,b.addEventListener("dispose",H));const T=b.source;let R=A.get(T);R===void 0&&(R={},A.set(T,R));const F=K(b);if(F!==E.__cacheKey){R[F]===void 0&&(R[F]={texture:i.createTexture(),usedTimes:0},r.memory.textures++,C=!0),R[F].usedTimes++;const k=R[E.__cacheKey];k!==void 0&&(R[E.__cacheKey].usedTimes--,k.usedTimes===0&&w(b)),E.__cacheKey=F,E.__webglTexture=R[F].texture}return C}function $(E,b,C){let T=i.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(T=i.TEXTURE_2D_ARRAY),b.isData3DTexture&&(T=i.TEXTURE_3D);const R=Ee(E,b),F=b.source;t.bindTexture(T,E.__webglTexture,i.TEXTURE0+C);const k=n.get(F);if(F.version!==k.__version||R===!0){t.activeTexture(i.TEXTURE0+C);const G=ht.getPrimaries(ht.workingColorSpace),P=b.colorSpace===fi?null:ht.getPrimaries(b.colorSpace),J=b.colorSpace===fi||G===P?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,J);let ie=_(b.image,!1,s.maxTextureSize);ie=O(b,ie);const de=a.convert(b.format,b.colorSpace),ye=a.convert(b.type);let me=y(b.internalFormat,de,ye,b.colorSpace,b.isVideoTexture);ge(T,b);let pe;const ve=b.mipmaps,Se=b.isVideoTexture!==!0,be=k.__version===void 0||R===!0,se=F.dataReady,Be=q(b,ie);if(b.isDepthTexture)me=v(b.format===bs,b.type),be&&(Se?t.texStorage2D(i.TEXTURE_2D,1,me,ie.width,ie.height):t.texImage2D(i.TEXTURE_2D,0,me,ie.width,ie.height,0,de,ye,null));else if(b.isDataTexture)if(ve.length>0){Se&&be&&t.texStorage2D(i.TEXTURE_2D,Be,me,ve[0].width,ve[0].height);for(let xe=0,we=ve.length;xe<we;xe++)pe=ve[xe],Se?se&&t.texSubImage2D(i.TEXTURE_2D,xe,0,0,pe.width,pe.height,de,ye,pe.data):t.texImage2D(i.TEXTURE_2D,xe,me,pe.width,pe.height,0,de,ye,pe.data);b.generateMipmaps=!1}else Se?(be&&t.texStorage2D(i.TEXTURE_2D,Be,me,ie.width,ie.height),se&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ie.width,ie.height,de,ye,ie.data)):t.texImage2D(i.TEXTURE_2D,0,me,ie.width,ie.height,0,de,ye,ie.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){Se&&be&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Be,me,ve[0].width,ve[0].height,ie.depth);for(let xe=0,we=ve.length;xe<we;xe++)if(pe=ve[xe],b.format!==Yt)if(de!==null)if(Se){if(se)if(b.layerUpdates.size>0){const De=Bh(pe.width,pe.height,b.format,b.type);for(const Le of b.layerUpdates){const Ve=pe.data.subarray(Le*De/pe.data.BYTES_PER_ELEMENT,(Le+1)*De/pe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,xe,0,0,Le,pe.width,pe.height,1,de,Ve)}b.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,xe,0,0,0,pe.width,pe.height,ie.depth,de,pe.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,xe,me,pe.width,pe.height,ie.depth,0,pe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Se?se&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,xe,0,0,0,pe.width,pe.height,ie.depth,de,ye,pe.data):t.texImage3D(i.TEXTURE_2D_ARRAY,xe,me,pe.width,pe.height,ie.depth,0,de,ye,pe.data)}else{Se&&be&&t.texStorage2D(i.TEXTURE_2D,Be,me,ve[0].width,ve[0].height);for(let xe=0,we=ve.length;xe<we;xe++)pe=ve[xe],b.format!==Yt?de!==null?Se?se&&t.compressedTexSubImage2D(i.TEXTURE_2D,xe,0,0,pe.width,pe.height,de,pe.data):t.compressedTexImage2D(i.TEXTURE_2D,xe,me,pe.width,pe.height,0,pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Se?se&&t.texSubImage2D(i.TEXTURE_2D,xe,0,0,pe.width,pe.height,de,ye,pe.data):t.texImage2D(i.TEXTURE_2D,xe,me,pe.width,pe.height,0,de,ye,pe.data)}else if(b.isDataArrayTexture)if(Se){if(be&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Be,me,ie.width,ie.height,ie.depth),se)if(b.layerUpdates.size>0){const xe=Bh(ie.width,ie.height,b.format,b.type);for(const we of b.layerUpdates){const De=ie.data.subarray(we*xe/ie.data.BYTES_PER_ELEMENT,(we+1)*xe/ie.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,we,ie.width,ie.height,1,de,ye,De)}b.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ie.width,ie.height,ie.depth,de,ye,ie.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,me,ie.width,ie.height,ie.depth,0,de,ye,ie.data);else if(b.isData3DTexture)Se?(be&&t.texStorage3D(i.TEXTURE_3D,Be,me,ie.width,ie.height,ie.depth),se&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ie.width,ie.height,ie.depth,de,ye,ie.data)):t.texImage3D(i.TEXTURE_3D,0,me,ie.width,ie.height,ie.depth,0,de,ye,ie.data);else if(b.isFramebufferTexture){if(be)if(Se)t.texStorage2D(i.TEXTURE_2D,Be,me,ie.width,ie.height);else{let xe=ie.width,we=ie.height;for(let De=0;De<Be;De++)t.texImage2D(i.TEXTURE_2D,De,me,xe,we,0,de,ye,null),xe>>=1,we>>=1}}else if(ve.length>0){if(Se&&be){const xe=D(ve[0]);t.texStorage2D(i.TEXTURE_2D,Be,me,xe.width,xe.height)}for(let xe=0,we=ve.length;xe<we;xe++)pe=ve[xe],Se?se&&t.texSubImage2D(i.TEXTURE_2D,xe,0,0,de,ye,pe):t.texImage2D(i.TEXTURE_2D,xe,me,de,ye,pe);b.generateMipmaps=!1}else if(Se){if(be){const xe=D(ie);t.texStorage2D(i.TEXTURE_2D,Be,me,xe.width,xe.height)}se&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,de,ye,ie)}else t.texImage2D(i.TEXTURE_2D,0,me,de,ye,ie);p(b)&&d(T),k.__version=F.version,b.onUpdate&&b.onUpdate(b)}E.__version=b.version}function oe(E,b,C){if(b.image.length!==6)return;const T=Ee(E,b),R=b.source;t.bindTexture(i.TEXTURE_CUBE_MAP,E.__webglTexture,i.TEXTURE0+C);const F=n.get(R);if(R.version!==F.__version||T===!0){t.activeTexture(i.TEXTURE0+C);const k=ht.getPrimaries(ht.workingColorSpace),G=b.colorSpace===fi?null:ht.getPrimaries(b.colorSpace),P=b.colorSpace===fi||k===G?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,P);const J=b.isCompressedTexture||b.image[0].isCompressedTexture,ie=b.image[0]&&b.image[0].isDataTexture,de=[];for(let we=0;we<6;we++)!J&&!ie?de[we]=_(b.image[we],!0,s.maxCubemapSize):de[we]=ie?b.image[we].image:b.image[we],de[we]=O(b,de[we]);const ye=de[0],me=a.convert(b.format,b.colorSpace),pe=a.convert(b.type),ve=y(b.internalFormat,me,pe,b.colorSpace),Se=b.isVideoTexture!==!0,be=F.__version===void 0||T===!0,se=R.dataReady;let Be=q(b,ye);ge(i.TEXTURE_CUBE_MAP,b);let xe;if(J){Se&&be&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Be,ve,ye.width,ye.height);for(let we=0;we<6;we++){xe=de[we].mipmaps;for(let De=0;De<xe.length;De++){const Le=xe[De];b.format!==Yt?me!==null?Se?se&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+we,De,0,0,Le.width,Le.height,me,Le.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+we,De,ve,Le.width,Le.height,0,Le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Se?se&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+we,De,0,0,Le.width,Le.height,me,pe,Le.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+we,De,ve,Le.width,Le.height,0,me,pe,Le.data)}}}else{if(xe=b.mipmaps,Se&&be){xe.length>0&&Be++;const we=D(de[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Be,ve,we.width,we.height)}for(let we=0;we<6;we++)if(ie){Se?se&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+we,0,0,0,de[we].width,de[we].height,me,pe,de[we].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+we,0,ve,de[we].width,de[we].height,0,me,pe,de[we].data);for(let De=0;De<xe.length;De++){const Ve=xe[De].image[we].image;Se?se&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+we,De+1,0,0,Ve.width,Ve.height,me,pe,Ve.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+we,De+1,ve,Ve.width,Ve.height,0,me,pe,Ve.data)}}else{Se?se&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+we,0,0,0,me,pe,de[we]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+we,0,ve,me,pe,de[we]);for(let De=0;De<xe.length;De++){const Le=xe[De];Se?se&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+we,De+1,0,0,me,pe,Le.image[we]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+we,De+1,ve,me,pe,Le.image[we])}}}p(b)&&d(i.TEXTURE_CUBE_MAP),F.__version=R.version,b.onUpdate&&b.onUpdate(b)}E.__version=b.version}function ee(E,b,C,T,R,F){const k=a.convert(C.format,C.colorSpace),G=a.convert(C.type),P=y(C.internalFormat,k,G,C.colorSpace),J=n.get(b),ie=n.get(C);if(ie.__renderTarget=b,!J.__hasExternalTextures){const de=Math.max(1,b.width>>F),ye=Math.max(1,b.height>>F);R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY?t.texImage3D(R,F,P,de,ye,b.depth,0,k,G,null):t.texImage2D(R,F,P,de,ye,0,k,G,null)}t.bindFramebuffer(i.FRAMEBUFFER,E),L(b)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,T,R,ie.__webglTexture,0,j(b)):(R===i.TEXTURE_2D||R>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&R<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,T,R,ie.__webglTexture,F),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ae(E,b,C){if(i.bindRenderbuffer(i.RENDERBUFFER,E),b.depthBuffer){const T=b.depthTexture,R=T&&T.isDepthTexture?T.type:null,F=v(b.stencilBuffer,R),k=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,G=j(b);L(b)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,G,F,b.width,b.height):C?i.renderbufferStorageMultisample(i.RENDERBUFFER,G,F,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,F,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,k,i.RENDERBUFFER,E)}else{const T=b.textures;for(let R=0;R<T.length;R++){const F=T[R],k=a.convert(F.format,F.colorSpace),G=a.convert(F.type),P=y(F.internalFormat,k,G,F.colorSpace),J=j(b);C&&L(b)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,J,P,b.width,b.height):L(b)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,J,P,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,P,b.width,b.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function W(E,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,E),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const T=n.get(b.depthTexture);T.__renderTarget=b,(!T.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),Y(b.depthTexture,0);const R=T.__webglTexture,F=j(b);if(b.depthTexture.format===js)L(b)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,R,0,F):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,R,0);else if(b.depthTexture.format===bs)L(b)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,R,0,F):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,R,0);else throw new Error("Unknown depthTexture format")}function re(E){const b=n.get(E),C=E.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==E.depthTexture){const T=E.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),T){const R=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,T.removeEventListener("dispose",R)};T.addEventListener("dispose",R),b.__depthDisposeCallback=R}b.__boundDepthTexture=T}if(E.depthTexture&&!b.__autoAllocateDepthBuffer){if(C)throw new Error("target.depthTexture not supported in Cube render targets");W(b.__webglFramebuffer,E)}else if(C){b.__webglDepthbuffer=[];for(let T=0;T<6;T++)if(t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[T]),b.__webglDepthbuffer[T]===void 0)b.__webglDepthbuffer[T]=i.createRenderbuffer(),Ae(b.__webglDepthbuffer[T],E,!1);else{const R=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,F=b.__webglDepthbuffer[T];i.bindRenderbuffer(i.RENDERBUFFER,F),i.framebufferRenderbuffer(i.FRAMEBUFFER,R,i.RENDERBUFFER,F)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=i.createRenderbuffer(),Ae(b.__webglDepthbuffer,E,!1);else{const T=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,R=b.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,R),i.framebufferRenderbuffer(i.FRAMEBUFFER,T,i.RENDERBUFFER,R)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function he(E,b,C){const T=n.get(E);b!==void 0&&ee(T.__webglFramebuffer,E,E.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),C!==void 0&&re(E)}function ce(E){const b=E.texture,C=n.get(E),T=n.get(b);E.addEventListener("dispose",U);const R=E.textures,F=E.isWebGLCubeRenderTarget===!0,k=R.length>1;if(k||(T.__webglTexture===void 0&&(T.__webglTexture=i.createTexture()),T.__version=b.version,r.memory.textures++),F){C.__webglFramebuffer=[];for(let G=0;G<6;G++)if(b.mipmaps&&b.mipmaps.length>0){C.__webglFramebuffer[G]=[];for(let P=0;P<b.mipmaps.length;P++)C.__webglFramebuffer[G][P]=i.createFramebuffer()}else C.__webglFramebuffer[G]=i.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){C.__webglFramebuffer=[];for(let G=0;G<b.mipmaps.length;G++)C.__webglFramebuffer[G]=i.createFramebuffer()}else C.__webglFramebuffer=i.createFramebuffer();if(k)for(let G=0,P=R.length;G<P;G++){const J=n.get(R[G]);J.__webglTexture===void 0&&(J.__webglTexture=i.createTexture(),r.memory.textures++)}if(E.samples>0&&L(E)===!1){C.__webglMultisampledFramebuffer=i.createFramebuffer(),C.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,C.__webglMultisampledFramebuffer);for(let G=0;G<R.length;G++){const P=R[G];C.__webglColorRenderbuffer[G]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,C.__webglColorRenderbuffer[G]);const J=a.convert(P.format,P.colorSpace),ie=a.convert(P.type),de=y(P.internalFormat,J,ie,P.colorSpace,E.isXRRenderTarget===!0),ye=j(E);i.renderbufferStorageMultisample(i.RENDERBUFFER,ye,de,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+G,i.RENDERBUFFER,C.__webglColorRenderbuffer[G])}i.bindRenderbuffer(i.RENDERBUFFER,null),E.depthBuffer&&(C.__webglDepthRenderbuffer=i.createRenderbuffer(),Ae(C.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(F){t.bindTexture(i.TEXTURE_CUBE_MAP,T.__webglTexture),ge(i.TEXTURE_CUBE_MAP,b);for(let G=0;G<6;G++)if(b.mipmaps&&b.mipmaps.length>0)for(let P=0;P<b.mipmaps.length;P++)ee(C.__webglFramebuffer[G][P],E,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+G,P);else ee(C.__webglFramebuffer[G],E,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+G,0);p(b)&&d(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(k){for(let G=0,P=R.length;G<P;G++){const J=R[G],ie=n.get(J);t.bindTexture(i.TEXTURE_2D,ie.__webglTexture),ge(i.TEXTURE_2D,J),ee(C.__webglFramebuffer,E,J,i.COLOR_ATTACHMENT0+G,i.TEXTURE_2D,0),p(J)&&d(i.TEXTURE_2D)}t.unbindTexture()}else{let G=i.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(G=E.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(G,T.__webglTexture),ge(G,b),b.mipmaps&&b.mipmaps.length>0)for(let P=0;P<b.mipmaps.length;P++)ee(C.__webglFramebuffer[P],E,b,i.COLOR_ATTACHMENT0,G,P);else ee(C.__webglFramebuffer,E,b,i.COLOR_ATTACHMENT0,G,0);p(b)&&d(G),t.unbindTexture()}E.depthBuffer&&re(E)}function fe(E){const b=E.textures;for(let C=0,T=b.length;C<T;C++){const R=b[C];if(p(R)){const F=M(E),k=n.get(R).__webglTexture;t.bindTexture(F,k),d(F),t.unbindTexture()}}}const _e=[],f=[];function B(E){if(E.samples>0){if(L(E)===!1){const b=E.textures,C=E.width,T=E.height;let R=i.COLOR_BUFFER_BIT;const F=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,k=n.get(E),G=b.length>1;if(G)for(let P=0;P<b.length;P++)t.bindFramebuffer(i.FRAMEBUFFER,k.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+P,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,k.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+P,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,k.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,k.__webglFramebuffer);for(let P=0;P<b.length;P++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(R|=i.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(R|=i.STENCIL_BUFFER_BIT)),G){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,k.__webglColorRenderbuffer[P]);const J=n.get(b[P]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,J,0)}i.blitFramebuffer(0,0,C,T,0,0,C,T,R,i.NEAREST),c===!0&&(_e.length=0,f.length=0,_e.push(i.COLOR_ATTACHMENT0+P),E.depthBuffer&&E.resolveDepthBuffer===!1&&(_e.push(F),f.push(F),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,f)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,_e))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),G)for(let P=0;P<b.length;P++){t.bindFramebuffer(i.FRAMEBUFFER,k.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+P,i.RENDERBUFFER,k.__webglColorRenderbuffer[P]);const J=n.get(b[P]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,k.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+P,i.TEXTURE_2D,J,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,k.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&c){const b=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[b])}}}function j(E){return Math.min(s.maxSamples,E.samples)}function L(E){const b=n.get(E);return E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function N(E){const b=r.render.frame;h.get(E)!==b&&(h.set(E,b),E.update())}function O(E,b){const C=E.colorSpace,T=E.format,R=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||C!==dn&&C!==fi&&(ht.getTransfer(C)===mt?(T!==Yt||R!==qt)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",C)),b}function D(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(l.width=E.naturalWidth||E.width,l.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(l.width=E.displayWidth,l.height=E.displayHeight):(l.width=E.width,l.height=E.height),l}this.allocateTextureUnit=Q,this.resetTextureUnits=I,this.setTexture2D=Y,this.setTexture2DArray=te,this.setTexture3D=X,this.setTextureCube=V,this.rebindTextures=he,this.setupRenderTarget=ce,this.updateRenderTargetMipmap=fe,this.updateMultisampleRenderTarget=B,this.setupDepthRenderbuffer=re,this.setupFrameBufferTexture=ee,this.useMultisampledRTT=L}function V0(i,e){function t(n,s=fi){let a;const r=ht.getTransfer(s);if(n===qt)return i.UNSIGNED_BYTE;if(n===ul)return i.UNSIGNED_SHORT_4_4_4_4;if(n===fl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Lu)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Ru)return i.BYTE;if(n===Du)return i.SHORT;if(n===Fa)return i.UNSIGNED_SHORT;if(n===hl)return i.INT;if(n===ms)return i.UNSIGNED_INT;if(n===fn)return i.FLOAT;if(n===rn)return i.HALF_FLOAT;if(n===Pu)return i.ALPHA;if(n===Uu)return i.RGB;if(n===Yt)return i.RGBA;if(n===Fu)return i.LUMINANCE;if(n===Nu)return i.LUMINANCE_ALPHA;if(n===js)return i.DEPTH_COMPONENT;if(n===bs)return i.DEPTH_STENCIL;if(n===Ki)return i.RED;if(n===dl)return i.RED_INTEGER;if(n===ds)return i.RG;if(n===Al)return i.RG_INTEGER;if(n===pl)return i.RGBA_INTEGER;if(n===Nr||n===Ia||n===Qr||n===Ta)if(r===mt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(n===Nr)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ia)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Qr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ta)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(n===Nr)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ia)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Qr)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ta)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Vr||n===wc||n===Wr||n===Sc)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(n===Vr)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===wc)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Wr)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Sc)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===jr||n===qr||n===Yr)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(n===jr||n===qr)return r===mt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(n===Yr)return r===mt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Na||n===Ic||n===Tc||n===Bc||n===Qa||n===Rc||n===Dc||n===Lc||n===Pc||n===Uc||n===Fc||n===Nc||n===Qc||n===kc)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(n===Na)return r===mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ic)return r===mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Tc)return r===mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Bc)return r===mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Qa)return r===mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Rc)return r===mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Dc)return r===mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Lc)return r===mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Pc)return r===mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Uc)return r===mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Fc)return r===mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Nc)return r===mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Qc)return r===mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===kc)return r===mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ba||n===Oc||n===Xr)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(n===Ba)return r===mt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Oc)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Xr)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Qu||n===zc||n===Gc||n===Hc)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(n===Ba)return a.COMPRESSED_RED_RGTC1_EXT;if(n===zc)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Gc)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Hc)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===gs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}class W0 extends xn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Sn extends Dt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const j0={type:"move"};class Wo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Sn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Sn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ne,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ne),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Sn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ne,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ne),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,a=null,r=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){r=!0;for(const _ of e.hand.values()){const p=t.getJointPose(_,n),d=this._getHandJoint(l,_);p!==null&&(d.matrix.fromArray(p.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=p.radius),d.visible=p!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],A=h.position.distanceTo(u.position),g=.02,x=.005;l.inputState.pinching&&A>g+x?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&A<=g-x&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,n),a!==null&&(c.matrix.fromArray(a.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,a.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(a.linearVelocity)):c.hasLinearVelocity=!1,a.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(a.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&a!==null&&(s=a),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(j0)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=a!==null),l!==null&&(l.visible=r!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Sn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const q0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Y0=`
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

}`;class X0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const s=new Gt,a=e.properties.get(s);a.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Wt({vertexShader:q0,fragmentShader:Y0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new nt(new ta(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class K0 extends Es{constructor(e,t){super();const n=this;let s=null,a=1,r=null,o="local-floor",c=1,l=null,h=null,u=null,A=null,g=null,x=null;const _=new X0,p=t.getContextAttributes();let d=null,M=null;const y=[],v=[],q=new ke;let H=null;const U=new xn;U.viewport=new dt;const Z=new xn;Z.viewport=new dt;const w=[U,Z],S=new W0;let m=null,I=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let oe=y[$];return oe===void 0&&(oe=new Wo,y[$]=oe),oe.getTargetRaySpace()},this.getControllerGrip=function($){let oe=y[$];return oe===void 0&&(oe=new Wo,y[$]=oe),oe.getGripSpace()},this.getHand=function($){let oe=y[$];return oe===void 0&&(oe=new Wo,y[$]=oe),oe.getHandSpace()};function Q($){const oe=v.indexOf($.inputSource);if(oe===-1)return;const ee=y[oe];ee!==void 0&&(ee.update($.inputSource,$.frame,l||r),ee.dispatchEvent({type:$.type,data:$.inputSource}))}function K(){s.removeEventListener("select",Q),s.removeEventListener("selectstart",Q),s.removeEventListener("selectend",Q),s.removeEventListener("squeeze",Q),s.removeEventListener("squeezestart",Q),s.removeEventListener("squeezeend",Q),s.removeEventListener("end",K),s.removeEventListener("inputsourceschange",Y);for(let $=0;$<y.length;$++){const oe=v[$];oe!==null&&(v[$]=null,y[$].disconnect(oe))}m=null,I=null,_.reset(),e.setRenderTarget(d),g=null,A=null,u=null,s=null,M=null,Ee.stop(),n.isPresenting=!1,e.setPixelRatio(H),e.setSize(q.width,q.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){a=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){o=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||r},this.setReferenceSpace=function($){l=$},this.getBaseLayer=function(){return A!==null?A:g},this.getBinding=function(){return u},this.getFrame=function(){return x},this.getSession=function(){return s},this.setSession=async function($){if(s=$,s!==null){if(d=e.getRenderTarget(),s.addEventListener("select",Q),s.addEventListener("selectstart",Q),s.addEventListener("selectend",Q),s.addEventListener("squeeze",Q),s.addEventListener("squeezestart",Q),s.addEventListener("squeezeend",Q),s.addEventListener("end",K),s.addEventListener("inputsourceschange",Y),p.xrCompatible!==!0&&await t.makeXRCompatible(),H=e.getPixelRatio(),e.getSize(q),s.renderState.layers===void 0){const oe={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:a};g=new XRWebGLLayer(s,t,oe),s.updateRenderState({baseLayer:g}),e.setPixelRatio(1),e.setSize(g.framebufferWidth,g.framebufferHeight,!1),M=new Pn(g.framebufferWidth,g.framebufferHeight,{format:Yt,type:qt,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let oe=null,ee=null,Ae=null;p.depth&&(Ae=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,oe=p.stencil?bs:js,ee=p.stencil?gs:ms);const W={colorFormat:t.RGBA8,depthFormat:Ae,scaleFactor:a};u=new XRWebGLBinding(s,t),A=u.createProjectionLayer(W),s.updateRenderState({layers:[A]}),e.setPixelRatio(1),e.setSize(A.textureWidth,A.textureHeight,!1),M=new Pn(A.textureWidth,A.textureHeight,{format:Yt,type:qt,depthTexture:new xl(A.textureWidth,A.textureHeight,ee,void 0,void 0,void 0,void 0,void 0,void 0,oe),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:A.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(c),l=null,r=await s.requestReferenceSpace(o),Ee.setContext(s),Ee.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function Y($){for(let oe=0;oe<$.removed.length;oe++){const ee=$.removed[oe],Ae=v.indexOf(ee);Ae>=0&&(v[Ae]=null,y[Ae].disconnect(ee))}for(let oe=0;oe<$.added.length;oe++){const ee=$.added[oe];let Ae=v.indexOf(ee);if(Ae===-1){for(let re=0;re<y.length;re++)if(re>=v.length){v.push(ee),Ae=re;break}else if(v[re]===null){v[re]=ee,Ae=re;break}if(Ae===-1)break}const W=y[Ae];W&&W.connect(ee)}}const te=new ne,X=new ne;function V($,oe,ee){te.setFromMatrixPosition(oe.matrixWorld),X.setFromMatrixPosition(ee.matrixWorld);const Ae=te.distanceTo(X),W=oe.projectionMatrix.elements,re=ee.projectionMatrix.elements,he=W[14]/(W[10]-1),ce=W[14]/(W[10]+1),fe=(W[9]+1)/W[5],_e=(W[9]-1)/W[5],f=(W[8]-1)/W[0],B=(re[8]+1)/re[0],j=he*f,L=he*B,N=Ae/(-f+B),O=N*-f;if(oe.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(O),$.translateZ(N),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),W[10]===-1)$.projectionMatrix.copy(oe.projectionMatrix),$.projectionMatrixInverse.copy(oe.projectionMatrixInverse);else{const D=he+N,E=ce+N,b=j-O,C=L+(Ae-O),T=fe*ce/E*D,R=_e*ce/E*D;$.projectionMatrix.makePerspective(b,C,T,R,D,E),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function ue($,oe){oe===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(oe.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(s===null)return;let oe=$.near,ee=$.far;_.texture!==null&&(_.depthNear>0&&(oe=_.depthNear),_.depthFar>0&&(ee=_.depthFar)),S.near=Z.near=U.near=oe,S.far=Z.far=U.far=ee,(m!==S.near||I!==S.far)&&(s.updateRenderState({depthNear:S.near,depthFar:S.far}),m=S.near,I=S.far),U.layers.mask=$.layers.mask|2,Z.layers.mask=$.layers.mask|4,S.layers.mask=U.layers.mask|Z.layers.mask;const Ae=$.parent,W=S.cameras;ue(S,Ae);for(let re=0;re<W.length;re++)ue(W[re],Ae);W.length===2?V(S,U,Z):S.projectionMatrix.copy(U.projectionMatrix),ae($,S,Ae)};function ae($,oe,ee){ee===null?$.matrix.copy(oe.matrixWorld):($.matrix.copy(ee.matrixWorld),$.matrix.invert(),$.matrix.multiply(oe.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(oe.projectionMatrix),$.projectionMatrixInverse.copy(oe.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=$s*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(A===null&&g===null))return c},this.setFoveation=function($){c=$,A!==null&&(A.fixedFoveation=$),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=$)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(S)};let le=null;function ge($,oe){if(h=oe.getViewerPose(l||r),x=oe,h!==null){const ee=h.views;g!==null&&(e.setRenderTargetFramebuffer(M,g.framebuffer),e.setRenderTarget(M));let Ae=!1;ee.length!==S.cameras.length&&(S.cameras.length=0,Ae=!0);for(let re=0;re<ee.length;re++){const he=ee[re];let ce=null;if(g!==null)ce=g.getViewport(he);else{const _e=u.getViewSubImage(A,he);ce=_e.viewport,re===0&&(e.setRenderTargetTextures(M,_e.colorTexture,A.ignoreDepthValues?void 0:_e.depthStencilTexture),e.setRenderTarget(M))}let fe=w[re];fe===void 0&&(fe=new xn,fe.layers.enable(re),fe.viewport=new dt,w[re]=fe),fe.matrix.fromArray(he.transform.matrix),fe.matrix.decompose(fe.position,fe.quaternion,fe.scale),fe.projectionMatrix.fromArray(he.projectionMatrix),fe.projectionMatrixInverse.copy(fe.projectionMatrix).invert(),fe.viewport.set(ce.x,ce.y,ce.width,ce.height),re===0&&(S.matrix.copy(fe.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),Ae===!0&&S.cameras.push(fe)}const W=s.enabledFeatures;if(W&&W.includes("depth-sensing")){const re=u.getDepthInformation(ee[0]);re&&re.isValid&&re.texture&&_.init(e,re,s.renderState)}}for(let ee=0;ee<y.length;ee++){const Ae=v[ee],W=y[ee];Ae!==null&&W!==void 0&&W.update(Ae,oe,l||r)}le&&le($,oe),oe.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:oe}),x=null}const Ee=new Zu;Ee.setAnimationLoop(ge),this.setAnimationLoop=function($){le=$},this.dispose=function(){}}}const os=new qn,J0=new He;function Z0(i,e){function t(p,d){p.matrixAutoUpdate===!0&&p.updateMatrix(),d.value.copy(p.matrix)}function n(p,d){d.color.getRGB(p.fogColor.value,Xu(i)),d.isFog?(p.fogNear.value=d.near,p.fogFar.value=d.far):d.isFogExp2&&(p.fogDensity.value=d.density)}function s(p,d,M,y,v){d.isMeshBasicMaterial||d.isMeshLambertMaterial?a(p,d):d.isMeshToonMaterial?(a(p,d),u(p,d)):d.isMeshPhongMaterial?(a(p,d),h(p,d)):d.isMeshStandardMaterial?(a(p,d),A(p,d),d.isMeshPhysicalMaterial&&g(p,d,v)):d.isMeshMatcapMaterial?(a(p,d),x(p,d)):d.isMeshDepthMaterial?a(p,d):d.isMeshDistanceMaterial?(a(p,d),_(p,d)):d.isMeshNormalMaterial?a(p,d):d.isLineBasicMaterial?(r(p,d),d.isLineDashedMaterial&&o(p,d)):d.isPointsMaterial?c(p,d,M,y):d.isSpriteMaterial?l(p,d):d.isShadowMaterial?(p.color.value.copy(d.color),p.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function a(p,d){p.opacity.value=d.opacity,d.color&&p.diffuse.value.copy(d.color),d.emissive&&p.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(p.map.value=d.map,t(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.bumpMap&&(p.bumpMap.value=d.bumpMap,t(d.bumpMap,p.bumpMapTransform),p.bumpScale.value=d.bumpScale,d.side===In&&(p.bumpScale.value*=-1)),d.normalMap&&(p.normalMap.value=d.normalMap,t(d.normalMap,p.normalMapTransform),p.normalScale.value.copy(d.normalScale),d.side===In&&p.normalScale.value.negate()),d.displacementMap&&(p.displacementMap.value=d.displacementMap,t(d.displacementMap,p.displacementMapTransform),p.displacementScale.value=d.displacementScale,p.displacementBias.value=d.displacementBias),d.emissiveMap&&(p.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,p.emissiveMapTransform)),d.specularMap&&(p.specularMap.value=d.specularMap,t(d.specularMap,p.specularMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);const M=e.get(d),y=M.envMap,v=M.envMapRotation;y&&(p.envMap.value=y,os.copy(v),os.x*=-1,os.y*=-1,os.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(os.y*=-1,os.z*=-1),p.envMapRotation.value.setFromMatrix4(J0.makeRotationFromEuler(os)),p.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=d.reflectivity,p.ior.value=d.ior,p.refractionRatio.value=d.refractionRatio),d.lightMap&&(p.lightMap.value=d.lightMap,p.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,p.lightMapTransform)),d.aoMap&&(p.aoMap.value=d.aoMap,p.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,p.aoMapTransform))}function r(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,d.map&&(p.map.value=d.map,t(d.map,p.mapTransform))}function o(p,d){p.dashSize.value=d.dashSize,p.totalSize.value=d.dashSize+d.gapSize,p.scale.value=d.scale}function c(p,d,M,y){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.size.value=d.size*M,p.scale.value=y*.5,d.map&&(p.map.value=d.map,t(d.map,p.uvTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function l(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.rotation.value=d.rotation,d.map&&(p.map.value=d.map,t(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function h(p,d){p.specular.value.copy(d.specular),p.shininess.value=Math.max(d.shininess,1e-4)}function u(p,d){d.gradientMap&&(p.gradientMap.value=d.gradientMap)}function A(p,d){p.metalness.value=d.metalness,d.metalnessMap&&(p.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,p.metalnessMapTransform)),p.roughness.value=d.roughness,d.roughnessMap&&(p.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,p.roughnessMapTransform)),d.envMap&&(p.envMapIntensity.value=d.envMapIntensity)}function g(p,d,M){p.ior.value=d.ior,d.sheen>0&&(p.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),p.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(p.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,p.sheenColorMapTransform)),d.sheenRoughnessMap&&(p.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,p.sheenRoughnessMapTransform))),d.clearcoat>0&&(p.clearcoat.value=d.clearcoat,p.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(p.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,p.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(p.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===In&&p.clearcoatNormalScale.value.negate())),d.dispersion>0&&(p.dispersion.value=d.dispersion),d.iridescence>0&&(p.iridescence.value=d.iridescence,p.iridescenceIOR.value=d.iridescenceIOR,p.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(p.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,p.iridescenceMapTransform)),d.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),d.transmission>0&&(p.transmission.value=d.transmission,p.transmissionSamplerMap.value=M.texture,p.transmissionSamplerSize.value.set(M.width,M.height),d.transmissionMap&&(p.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,p.transmissionMapTransform)),p.thickness.value=d.thickness,d.thicknessMap&&(p.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=d.attenuationDistance,p.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(p.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(p.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=d.specularIntensity,p.specularColor.value.copy(d.specularColor),d.specularColorMap&&(p.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,p.specularColorMapTransform)),d.specularIntensityMap&&(p.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,p.specularIntensityMapTransform))}function x(p,d){d.matcap&&(p.matcap.value=d.matcap)}function _(p,d){const M=e.get(d).light;p.referencePosition.value.setFromMatrixPosition(M.matrixWorld),p.nearDistance.value=M.shadow.camera.near,p.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function $0(i,e,t,n){let s={},a={},r=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(M,y){const v=y.program;n.uniformBlockBinding(M,v)}function l(M,y){let v=s[M.id];v===void 0&&(x(M),v=h(M),s[M.id]=v,M.addEventListener("dispose",p));const q=y.program;n.updateUBOMapping(M,q);const H=e.render.frame;a[M.id]!==H&&(A(M),a[M.id]=H)}function h(M){const y=u();M.__bindingPointIndex=y;const v=i.createBuffer(),q=M.__size,H=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,q,H),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,v),v}function u(){for(let M=0;M<o;M++)if(r.indexOf(M)===-1)return r.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function A(M){const y=s[M.id],v=M.uniforms,q=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let H=0,U=v.length;H<U;H++){const Z=Array.isArray(v[H])?v[H]:[v[H]];for(let w=0,S=Z.length;w<S;w++){const m=Z[w];if(g(m,H,w,q)===!0){const I=m.__offset,Q=Array.isArray(m.value)?m.value:[m.value];let K=0;for(let Y=0;Y<Q.length;Y++){const te=Q[Y],X=_(te);typeof te=="number"||typeof te=="boolean"?(m.__data[0]=te,i.bufferSubData(i.UNIFORM_BUFFER,I+K,m.__data)):te.isMatrix3?(m.__data[0]=te.elements[0],m.__data[1]=te.elements[1],m.__data[2]=te.elements[2],m.__data[3]=0,m.__data[4]=te.elements[3],m.__data[5]=te.elements[4],m.__data[6]=te.elements[5],m.__data[7]=0,m.__data[8]=te.elements[6],m.__data[9]=te.elements[7],m.__data[10]=te.elements[8],m.__data[11]=0):(te.toArray(m.__data,K),K+=X.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,I,m.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function g(M,y,v,q){const H=M.value,U=y+"_"+v;if(q[U]===void 0)return typeof H=="number"||typeof H=="boolean"?q[U]=H:q[U]=H.clone(),!0;{const Z=q[U];if(typeof H=="number"||typeof H=="boolean"){if(Z!==H)return q[U]=H,!0}else if(Z.equals(H)===!1)return Z.copy(H),!0}return!1}function x(M){const y=M.uniforms;let v=0;const q=16;for(let U=0,Z=y.length;U<Z;U++){const w=Array.isArray(y[U])?y[U]:[y[U]];for(let S=0,m=w.length;S<m;S++){const I=w[S],Q=Array.isArray(I.value)?I.value:[I.value];for(let K=0,Y=Q.length;K<Y;K++){const te=Q[K],X=_(te),V=v%q,ue=V%X.boundary,ae=V+ue;v+=ue,ae!==0&&q-ae<X.storage&&(v+=q-ae),I.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=v,v+=X.storage}}}const H=v%q;return H>0&&(v+=q-H),M.__size=v,M.__cache={},this}function _(M){const y={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(y.boundary=4,y.storage=4):M.isVector2?(y.boundary=8,y.storage=8):M.isVector3||M.isColor?(y.boundary=16,y.storage=12):M.isVector4?(y.boundary=16,y.storage=16):M.isMatrix3?(y.boundary=48,y.storage=48):M.isMatrix4?(y.boundary=64,y.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),y}function p(M){const y=M.target;y.removeEventListener("dispose",p);const v=r.indexOf(y.__bindingPointIndex);r.splice(v,1),i.deleteBuffer(s[y.id]),delete s[y.id],delete a[y.id]}function d(){for(const M in s)i.deleteBuffer(s[M]);r=[],s={},a={}}return{bind:c,update:l,dispose:d}}class eb{constructor(e={}){const{canvas:t=Vd(),context:n=null,depth:s=!0,stencil:a=!1,alpha:r=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:A=!1}=e;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=r;const x=new Uint32Array(4),_=new Int32Array(4);let p=null,d=null;const M=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Nt,this.toneMapping=ts,this.toneMappingExposure=1;const v=this;let q=!1,H=0,U=0,Z=null,w=-1,S=null;const m=new dt,I=new dt;let Q=null;const K=new Re(0);let Y=0,te=t.width,X=t.height,V=1,ue=null,ae=null;const le=new dt(0,0,te,X),ge=new dt(0,0,te,X);let Ee=!1;const $=new gl;let oe=!1,ee=!1;const Ae=new He,W=new He,re=new ne,he=new dt,ce={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let fe=!1;function _e(){return Z===null?V:1}let f=n;function B(z,Me){return t.getContext(z,Me)}try{const z={alpha:!0,depth:s,stencil:a,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${rl}`),t.addEventListener("webglcontextlost",we,!1),t.addEventListener("webglcontextrestored",De,!1),t.addEventListener("webglcontextcreationerror",Le,!1),f===null){const Me="webgl2";if(f=B(Me,z),f===null)throw B(Me)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(z){throw console.error("THREE.WebGLRenderer: "+z.message),z}let j,L,N,O,D,E,b,C,T,R,F,k,G,P,J,ie,de,ye,me,pe,ve,Se,be,se;function Be(){j=new ag(f),j.init(),Se=new V0(f,j),L=new $m(f,j,e,Se),N=new z0(f,j),L.reverseDepthBuffer&&A&&N.buffers.depth.setReversed(!0),O=new cg(f),D=new w0,E=new H0(f,j,N,D,L,Se,O),b=new tg(v),C=new sg(v),T=new pA(f),be=new Jm(f,T),R=new rg(f,T,O,be),F=new hg(f,R,T,O),me=new lg(f,L,E),ie=new eg(D),k=new C0(v,b,C,j,L,be,ie),G=new Z0(v,D),P=new I0,J=new P0(j),ye=new Km(v,b,C,N,F,g,c),de=new k0(v,F,L),se=new $0(f,O,L,N),pe=new Zm(f,j,O),ve=new og(f,j,O),O.programs=k.programs,v.capabilities=L,v.extensions=j,v.properties=D,v.renderLists=P,v.shadowMap=de,v.state=N,v.info=O}Be();const xe=new K0(v,f);this.xr=xe,this.getContext=function(){return f},this.getContextAttributes=function(){return f.getContextAttributes()},this.forceContextLoss=function(){const z=j.get("WEBGL_lose_context");z&&z.loseContext()},this.forceContextRestore=function(){const z=j.get("WEBGL_lose_context");z&&z.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(z){z!==void 0&&(V=z,this.setSize(te,X,!1))},this.getSize=function(z){return z.set(te,X)},this.setSize=function(z,Me,Ie=!0){if(xe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}te=z,X=Me,t.width=Math.floor(z*V),t.height=Math.floor(Me*V),Ie===!0&&(t.style.width=z+"px",t.style.height=Me+"px"),this.setViewport(0,0,z,Me)},this.getDrawingBufferSize=function(z){return z.set(te*V,X*V).floor()},this.setDrawingBufferSize=function(z,Me,Ie){te=z,X=Me,V=Ie,t.width=Math.floor(z*Ie),t.height=Math.floor(Me*Ie),this.setViewport(0,0,z,Me)},this.getCurrentViewport=function(z){return z.copy(m)},this.getViewport=function(z){return z.copy(le)},this.setViewport=function(z,Me,Ie,Te){z.isVector4?le.set(z.x,z.y,z.z,z.w):le.set(z,Me,Ie,Te),N.viewport(m.copy(le).multiplyScalar(V).round())},this.getScissor=function(z){return z.copy(ge)},this.setScissor=function(z,Me,Ie,Te){z.isVector4?ge.set(z.x,z.y,z.z,z.w):ge.set(z,Me,Ie,Te),N.scissor(I.copy(ge).multiplyScalar(V).round())},this.getScissorTest=function(){return Ee},this.setScissorTest=function(z){N.setScissorTest(Ee=z)},this.setOpaqueSort=function(z){ue=z},this.setTransparentSort=function(z){ae=z},this.getClearColor=function(z){return z.copy(ye.getClearColor())},this.setClearColor=function(){ye.setClearColor.apply(ye,arguments)},this.getClearAlpha=function(){return ye.getClearAlpha()},this.setClearAlpha=function(){ye.setClearAlpha.apply(ye,arguments)},this.clear=function(z=!0,Me=!0,Ie=!0){let Te=0;if(z){let Ce=!1;if(Z!==null){const Fe=Z.texture.format;Ce=Fe===pl||Fe===Al||Fe===dl}if(Ce){const Fe=Z.texture.type,Oe=Fe===qt||Fe===ms||Fe===Fa||Fe===gs||Fe===ul||Fe===fl,We=ye.getClearColor(),je=ye.getClearAlpha(),$e=We.r,tt=We.g,qe=We.b;Oe?(x[0]=$e,x[1]=tt,x[2]=qe,x[3]=je,f.clearBufferuiv(f.COLOR,0,x)):(_[0]=$e,_[1]=tt,_[2]=qe,_[3]=je,f.clearBufferiv(f.COLOR,0,_))}else Te|=f.COLOR_BUFFER_BIT}Me&&(Te|=f.DEPTH_BUFFER_BIT),Ie&&(Te|=f.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),f.clear(Te)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",we,!1),t.removeEventListener("webglcontextrestored",De,!1),t.removeEventListener("webglcontextcreationerror",Le,!1),P.dispose(),J.dispose(),D.dispose(),b.dispose(),C.dispose(),F.dispose(),be.dispose(),se.dispose(),k.dispose(),xe.dispose(),xe.removeEventListener("sessionstart",Yn),xe.removeEventListener("sessionend",bi),at.stop()};function we(z){z.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),q=!0}function De(){console.log("THREE.WebGLRenderer: Context Restored."),q=!1;const z=O.autoReset,Me=de.enabled,Ie=de.autoUpdate,Te=de.needsUpdate,Ce=de.type;Be(),O.autoReset=z,de.enabled=Me,de.autoUpdate=Ie,de.needsUpdate=Te,de.type=Ce}function Le(z){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",z.statusMessage)}function Ve(z){const Me=z.target;Me.removeEventListener("dispose",Ve),Ze(Me)}function Ze(z){ct(z),D.remove(z)}function ct(z){const Me=D.get(z).programs;Me!==void 0&&(Me.forEach(function(Ie){k.releaseProgram(Ie)}),z.isShaderMaterial&&k.releaseShaderCache(z))}this.renderBufferDirect=function(z,Me,Ie,Te,Ce,Fe){Me===null&&(Me=ce);const Oe=Ce.isMesh&&Ce.matrixWorld.determinant()<0,We=Nn(z,Me,Ie,Te,Ce);N.setMaterial(Te,Oe);let je=Ie.index,$e=1;if(Te.wireframe===!0){if(je=R.getWireframeAttribute(Ie),je===void 0)return;$e=2}const tt=Ie.drawRange,qe=Ie.attributes.position;let ut=tt.start*$e,yt=(tt.start+tt.count)*$e;Fe!==null&&(ut=Math.max(ut,Fe.start*$e),yt=Math.min(yt,(Fe.start+Fe.count)*$e)),je!==null?(ut=Math.max(ut,0),yt=Math.min(yt,je.count)):qe!=null&&(ut=Math.max(ut,0),yt=Math.min(yt,qe.count));const St=yt-ut;if(St<0||St===1/0)return;be.setup(Ce,Te,We,Ie,je);let vn,At=pe;if(je!==null&&(vn=T.get(je),At=ve,At.setIndex(vn)),Ce.isMesh)Te.wireframe===!0?(N.setLineWidth(Te.wireframeLinewidth*_e()),At.setMode(f.LINES)):At.setMode(f.TRIANGLES);else if(Ce.isLine){let Xe=Te.linewidth;Xe===void 0&&(Xe=1),N.setLineWidth(Xe*_e()),Ce.isLineSegments?At.setMode(f.LINES):Ce.isLineLoop?At.setMode(f.LINE_LOOP):At.setMode(f.LINE_STRIP)}else Ce.isPoints?At.setMode(f.POINTS):Ce.isSprite&&At.setMode(f.TRIANGLES);if(Ce.isBatchedMesh)if(Ce._multiDrawInstances!==null)At.renderMultiDrawInstances(Ce._multiDrawStarts,Ce._multiDrawCounts,Ce._multiDrawCount,Ce._multiDrawInstances);else if(j.get("WEBGL_multi_draw"))At.renderMultiDraw(Ce._multiDrawStarts,Ce._multiDrawCounts,Ce._multiDrawCount);else{const Xe=Ce._multiDrawStarts,Ei=Ce._multiDrawCounts,pt=Ce._multiDrawCount,Xn=je?T.get(je).bytesPerElement:1,Cs=D.get(Te).currentProgram.getUniforms();for(let Tn=0;Tn<pt;Tn++)Cs.setValue(f,"_gl_DrawID",Tn),At.render(Xe[Tn]/Xn,Ei[Tn])}else if(Ce.isInstancedMesh)At.renderInstances(ut,St,Ce.count);else if(Ie.isInstancedBufferGeometry){const Xe=Ie._maxInstanceCount!==void 0?Ie._maxInstanceCount:1/0,Ei=Math.min(Ie.instanceCount,Xe);At.renderInstances(ut,St,Ei)}else At.render(ut,St)};function ze(z,Me,Ie){z.transparent===!0&&z.side===Mt&&z.forceSinglePass===!1?(z.side=In,z.needsUpdate=!0,_i(z,Me,Ie),z.side=ai,z.needsUpdate=!0,_i(z,Me,Ie),z.side=Mt):_i(z,Me,Ie)}this.compile=function(z,Me,Ie=null){Ie===null&&(Ie=z),d=J.get(Ie),d.init(Me),y.push(d),Ie.traverseVisible(function(Ce){Ce.isLight&&Ce.layers.test(Me.layers)&&(d.pushLight(Ce),Ce.castShadow&&d.pushShadow(Ce))}),z!==Ie&&z.traverseVisible(function(Ce){Ce.isLight&&Ce.layers.test(Me.layers)&&(d.pushLight(Ce),Ce.castShadow&&d.pushShadow(Ce))}),d.setupLights();const Te=new Set;return z.traverse(function(Ce){if(!(Ce.isMesh||Ce.isPoints||Ce.isLine||Ce.isSprite))return;const Fe=Ce.material;if(Fe)if(Array.isArray(Fe))for(let Oe=0;Oe<Fe.length;Oe++){const We=Fe[Oe];ze(We,Ie,Ce),Te.add(We)}else ze(Fe,Ie,Ce),Te.add(Fe)}),y.pop(),d=null,Te},this.compileAsync=function(z,Me,Ie=null){const Te=this.compile(z,Me,Ie);return new Promise(Ce=>{function Fe(){if(Te.forEach(function(Oe){D.get(Oe).currentProgram.isReady()&&Te.delete(Oe)}),Te.size===0){Ce(z);return}setTimeout(Fe,10)}j.get("KHR_parallel_shader_compile")!==null?Fe():setTimeout(Fe,10)})};let Pt=null;function Jt(z){Pt&&Pt(z)}function Yn(){at.stop()}function bi(){at.start()}const at=new Zu;at.setAnimationLoop(Jt),typeof self<"u"&&at.setContext(self),this.setAnimationLoop=function(z){Pt=z,xe.setAnimationLoop(z),z===null?at.stop():at.start()},xe.addEventListener("sessionstart",Yn),xe.addEventListener("sessionend",bi),this.render=function(z,Me){if(Me!==void 0&&Me.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(q===!0)return;if(z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),Me.parent===null&&Me.matrixWorldAutoUpdate===!0&&Me.updateMatrixWorld(),xe.enabled===!0&&xe.isPresenting===!0&&(xe.cameraAutoUpdate===!0&&xe.updateCamera(Me),Me=xe.getCamera()),z.isScene===!0&&z.onBeforeRender(v,z,Me,Z),d=J.get(z,y.length),d.init(Me),y.push(d),W.multiplyMatrices(Me.projectionMatrix,Me.matrixWorldInverse),$.setFromProjectionMatrix(W),ee=this.localClippingEnabled,oe=ie.init(this.clippingPlanes,ee),p=P.get(z,M.length),p.init(),M.push(p),xe.enabled===!0&&xe.isPresenting===!0){const Fe=v.xr.getDepthSensingMesh();Fe!==null&&_t(Fe,Me,-1/0,v.sortObjects)}_t(z,Me,0,v.sortObjects),p.finish(),v.sortObjects===!0&&p.sort(ue,ae),fe=xe.enabled===!1||xe.isPresenting===!1||xe.hasDepthSensing()===!1,fe&&ye.addToRenderList(p,z),this.info.render.frame++,oe===!0&&ie.beginShadows();const Ie=d.state.shadowsArray;de.render(Ie,z,Me),oe===!0&&ie.endShadows(),this.info.autoReset===!0&&this.info.reset();const Te=p.opaque,Ce=p.transmissive;if(d.setupLights(),Me.isArrayCamera){const Fe=Me.cameras;if(Ce.length>0)for(let Oe=0,We=Fe.length;Oe<We;Oe++){const je=Fe[Oe];Et(Te,Ce,z,je)}fe&&ye.render(z);for(let Oe=0,We=Fe.length;Oe<We;Oe++){const je=Fe[Oe];rt(p,z,je,je.viewport)}}else Ce.length>0&&Et(Te,Ce,z,Me),fe&&ye.render(z),rt(p,z,Me);Z!==null&&(E.updateMultisampleRenderTarget(Z),E.updateRenderTargetMipmap(Z)),z.isScene===!0&&z.onAfterRender(v,z,Me),be.resetDefaultState(),w=-1,S=null,y.pop(),y.length>0?(d=y[y.length-1],oe===!0&&ie.setGlobalState(v.clippingPlanes,d.state.camera)):d=null,M.pop(),M.length>0?p=M[M.length-1]:p=null};function _t(z,Me,Ie,Te){if(z.visible===!1)return;if(z.layers.test(Me.layers)){if(z.isGroup)Ie=z.renderOrder;else if(z.isLOD)z.autoUpdate===!0&&z.update(Me);else if(z.isLight)d.pushLight(z),z.castShadow&&d.pushShadow(z);else if(z.isSprite){if(!z.frustumCulled||$.intersectsSprite(z)){Te&&he.setFromMatrixPosition(z.matrixWorld).applyMatrix4(W);const Oe=F.update(z),We=z.material;We.visible&&p.push(z,Oe,We,Ie,he.z,null)}}else if((z.isMesh||z.isLine||z.isPoints)&&(!z.frustumCulled||$.intersectsObject(z))){const Oe=F.update(z),We=z.material;if(Te&&(z.boundingSphere!==void 0?(z.boundingSphere===null&&z.computeBoundingSphere(),he.copy(z.boundingSphere.center)):(Oe.boundingSphere===null&&Oe.computeBoundingSphere(),he.copy(Oe.boundingSphere.center)),he.applyMatrix4(z.matrixWorld).applyMatrix4(W)),Array.isArray(We)){const je=Oe.groups;for(let $e=0,tt=je.length;$e<tt;$e++){const qe=je[$e],ut=We[qe.materialIndex];ut&&ut.visible&&p.push(z,Oe,ut,Ie,he.z,qe)}}else We.visible&&p.push(z,Oe,We,Ie,he.z,null)}}const Fe=z.children;for(let Oe=0,We=Fe.length;Oe<We;Oe++)_t(Fe[Oe],Me,Ie,Te)}function rt(z,Me,Ie,Te){const Ce=z.opaque,Fe=z.transmissive,Oe=z.transparent;d.setupLightsView(Ie),oe===!0&&ie.setGlobalState(v.clippingPlanes,Ie),Te&&N.viewport(m.copy(Te)),Ce.length>0&&Ut(Ce,Me,Ie),Fe.length>0&&Ut(Fe,Me,Ie),Oe.length>0&&Ut(Oe,Me,Ie),N.buffers.depth.setTest(!0),N.buffers.depth.setMask(!0),N.buffers.color.setMask(!0),N.setPolygonOffset(!1)}function Et(z,Me,Ie,Te){if((Ie.isScene===!0?Ie.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[Te.id]===void 0&&(d.state.transmissionRenderTarget[Te.id]=new Pn(1,1,{generateMipmaps:!0,type:j.has("EXT_color_buffer_half_float")||j.has("EXT_color_buffer_float")?rn:qt,minFilter:Ai,samples:4,stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ht.workingColorSpace}));const Fe=d.state.transmissionRenderTarget[Te.id],Oe=Te.viewport||m;Fe.setSize(Oe.z,Oe.w);const We=v.getRenderTarget();v.setRenderTarget(Fe),v.getClearColor(K),Y=v.getClearAlpha(),Y<1&&v.setClearColor(16777215,.5),v.clear(),fe&&ye.render(Ie);const je=v.toneMapping;v.toneMapping=ts;const $e=Te.viewport;if(Te.viewport!==void 0&&(Te.viewport=void 0),d.setupLightsView(Te),oe===!0&&ie.setGlobalState(v.clippingPlanes,Te),Ut(z,Ie,Te),E.updateMultisampleRenderTarget(Fe),E.updateRenderTargetMipmap(Fe),j.has("WEBGL_multisampled_render_to_texture")===!1){let tt=!1;for(let qe=0,ut=Me.length;qe<ut;qe++){const yt=Me[qe],St=yt.object,vn=yt.geometry,At=yt.material,Xe=yt.group;if(At.side===Mt&&St.layers.test(Te.layers)){const Ei=At.side;At.side=In,At.needsUpdate=!0,xi(St,Ie,Te,vn,At,Xe),At.side=Ei,At.needsUpdate=!0,tt=!0}}tt===!0&&(E.updateMultisampleRenderTarget(Fe),E.updateRenderTargetMipmap(Fe))}v.setRenderTarget(We),v.setClearColor(K,Y),$e!==void 0&&(Te.viewport=$e),v.toneMapping=je}function Ut(z,Me,Ie){const Te=Me.isScene===!0?Me.overrideMaterial:null;for(let Ce=0,Fe=z.length;Ce<Fe;Ce++){const Oe=z[Ce],We=Oe.object,je=Oe.geometry,$e=Te===null?Oe.material:Te,tt=Oe.group;We.layers.test(Ie.layers)&&xi(We,Me,Ie,je,$e,tt)}}function xi(z,Me,Ie,Te,Ce,Fe){z.onBeforeRender(v,Me,Ie,Te,Ce,Fe),z.modelViewMatrix.multiplyMatrices(Ie.matrixWorldInverse,z.matrixWorld),z.normalMatrix.getNormalMatrix(z.modelViewMatrix),Ce.onBeforeRender(v,Me,Ie,Te,z,Fe),Ce.transparent===!0&&Ce.side===Mt&&Ce.forceSinglePass===!1?(Ce.side=In,Ce.needsUpdate=!0,v.renderBufferDirect(Ie,Me,Te,Ce,z,Fe),Ce.side=ai,Ce.needsUpdate=!0,v.renderBufferDirect(Ie,Me,Te,Ce,z,Fe),Ce.side=Mt):v.renderBufferDirect(Ie,Me,Te,Ce,z,Fe),z.onAfterRender(v,Me,Ie,Te,Ce,Fe)}function _i(z,Me,Ie){Me.isScene!==!0&&(Me=ce);const Te=D.get(z),Ce=d.state.lights,Fe=d.state.shadowsArray,Oe=Ce.state.version,We=k.getParameters(z,Ce.state,Fe,Me,Ie),je=k.getProgramCacheKey(We);let $e=Te.programs;Te.environment=z.isMeshStandardMaterial?Me.environment:null,Te.fog=Me.fog,Te.envMap=(z.isMeshStandardMaterial?C:b).get(z.envMap||Te.environment),Te.envMapRotation=Te.environment!==null&&z.envMap===null?Me.environmentRotation:z.envMapRotation,$e===void 0&&(z.addEventListener("dispose",Ve),$e=new Map,Te.programs=$e);let tt=$e.get(je);if(tt!==void 0){if(Te.currentProgram===tt&&Te.lightsStateVersion===Oe)return ln(z,We),tt}else We.uniforms=k.getUniforms(z),z.onBeforeCompile(We,v),tt=k.acquireProgram(We,je),$e.set(je,tt),Te.uniforms=We.uniforms;const qe=Te.uniforms;return(!z.isShaderMaterial&&!z.isRawShaderMaterial||z.clipping===!0)&&(qe.clippingPlanes=ie.uniform),ln(z,We),Te.needsLights=Ka(z),Te.lightsStateVersion=Oe,Te.needsLights&&(qe.ambientLightColor.value=Ce.state.ambient,qe.lightProbe.value=Ce.state.probe,qe.directionalLights.value=Ce.state.directional,qe.directionalLightShadows.value=Ce.state.directionalShadow,qe.spotLights.value=Ce.state.spot,qe.spotLightShadows.value=Ce.state.spotShadow,qe.rectAreaLights.value=Ce.state.rectArea,qe.ltc_1.value=Ce.state.rectAreaLTC1,qe.ltc_2.value=Ce.state.rectAreaLTC2,qe.pointLights.value=Ce.state.point,qe.pointLightShadows.value=Ce.state.pointShadow,qe.hemisphereLights.value=Ce.state.hemi,qe.directionalShadowMap.value=Ce.state.directionalShadowMap,qe.directionalShadowMatrix.value=Ce.state.directionalShadowMatrix,qe.spotShadowMap.value=Ce.state.spotShadowMap,qe.spotLightMatrix.value=Ce.state.spotLightMatrix,qe.spotLightMap.value=Ce.state.spotLightMap,qe.pointShadowMap.value=Ce.state.pointShadowMap,qe.pointShadowMatrix.value=Ce.state.pointShadowMatrix),Te.currentProgram=tt,Te.uniformsList=null,tt}function An(z){if(z.uniformsList===null){const Me=z.currentProgram.getUniforms();z.uniformsList=kr.seqWithValue(Me.seq,z.uniforms)}return z.uniformsList}function ln(z,Me){const Ie=D.get(z);Ie.outputColorSpace=Me.outputColorSpace,Ie.batching=Me.batching,Ie.batchingColor=Me.batchingColor,Ie.instancing=Me.instancing,Ie.instancingColor=Me.instancingColor,Ie.instancingMorph=Me.instancingMorph,Ie.skinning=Me.skinning,Ie.morphTargets=Me.morphTargets,Ie.morphNormals=Me.morphNormals,Ie.morphColors=Me.morphColors,Ie.morphTargetsCount=Me.morphTargetsCount,Ie.numClippingPlanes=Me.numClippingPlanes,Ie.numIntersection=Me.numClipIntersection,Ie.vertexAlphas=Me.vertexAlphas,Ie.vertexTangents=Me.vertexTangents,Ie.toneMapping=Me.toneMapping}function Nn(z,Me,Ie,Te,Ce){Me.isScene!==!0&&(Me=ce),E.resetTextureUnits();const Fe=Me.fog,Oe=Te.isMeshStandardMaterial?Me.environment:null,We=Z===null?v.outputColorSpace:Z.isXRRenderTarget===!0?Z.texture.colorSpace:dn,je=(Te.isMeshStandardMaterial?C:b).get(Te.envMap||Oe),$e=Te.vertexColors===!0&&!!Ie.attributes.color&&Ie.attributes.color.itemSize===4,tt=!!Ie.attributes.tangent&&(!!Te.normalMap||Te.anisotropy>0),qe=!!Ie.morphAttributes.position,ut=!!Ie.morphAttributes.normal,yt=!!Ie.morphAttributes.color;let St=ts;Te.toneMapped&&(Z===null||Z.isXRRenderTarget===!0)&&(St=v.toneMapping);const vn=Ie.morphAttributes.position||Ie.morphAttributes.normal||Ie.morphAttributes.color,At=vn!==void 0?vn.length:0,Xe=D.get(Te),Ei=d.state.lights;if(oe===!0&&(ee===!0||z!==S)){const Qn=z===S&&Te.id===w;ie.setState(Te,z,Qn)}let pt=!1;Te.version===Xe.__version?(Xe.needsLights&&Xe.lightsStateVersion!==Ei.state.version||Xe.outputColorSpace!==We||Ce.isBatchedMesh&&Xe.batching===!1||!Ce.isBatchedMesh&&Xe.batching===!0||Ce.isBatchedMesh&&Xe.batchingColor===!0&&Ce.colorTexture===null||Ce.isBatchedMesh&&Xe.batchingColor===!1&&Ce.colorTexture!==null||Ce.isInstancedMesh&&Xe.instancing===!1||!Ce.isInstancedMesh&&Xe.instancing===!0||Ce.isSkinnedMesh&&Xe.skinning===!1||!Ce.isSkinnedMesh&&Xe.skinning===!0||Ce.isInstancedMesh&&Xe.instancingColor===!0&&Ce.instanceColor===null||Ce.isInstancedMesh&&Xe.instancingColor===!1&&Ce.instanceColor!==null||Ce.isInstancedMesh&&Xe.instancingMorph===!0&&Ce.morphTexture===null||Ce.isInstancedMesh&&Xe.instancingMorph===!1&&Ce.morphTexture!==null||Xe.envMap!==je||Te.fog===!0&&Xe.fog!==Fe||Xe.numClippingPlanes!==void 0&&(Xe.numClippingPlanes!==ie.numPlanes||Xe.numIntersection!==ie.numIntersection)||Xe.vertexAlphas!==$e||Xe.vertexTangents!==tt||Xe.morphTargets!==qe||Xe.morphNormals!==ut||Xe.morphColors!==yt||Xe.toneMapping!==St||Xe.morphTargetsCount!==At)&&(pt=!0):(pt=!0,Xe.__version=Te.version);let Xn=Xe.currentProgram;pt===!0&&(Xn=_i(Te,Me,Ce));let Cs=!1,Tn=!1,la=!1;const It=Xn.getUniforms(),oi=Xe.uniforms;if(N.useProgram(Xn.program)&&(Cs=!0,Tn=!0,la=!0),Te.id!==w&&(w=Te.id,Tn=!0),Cs||S!==z){N.buffers.depth.getReversed()?(Ae.copy(z.projectionMatrix),jd(Ae),qd(Ae),It.setValue(f,"projectionMatrix",Ae)):It.setValue(f,"projectionMatrix",z.projectionMatrix),It.setValue(f,"viewMatrix",z.matrixWorldInverse);const Fi=It.map.cameraPosition;Fi!==void 0&&Fi.setValue(f,re.setFromMatrixPosition(z.matrixWorld)),L.logarithmicDepthBuffer&&It.setValue(f,"logDepthBufFC",2/(Math.log(z.far+1)/Math.LN2)),(Te.isMeshPhongMaterial||Te.isMeshToonMaterial||Te.isMeshLambertMaterial||Te.isMeshBasicMaterial||Te.isMeshStandardMaterial||Te.isShaderMaterial)&&It.setValue(f,"isOrthographic",z.isOrthographicCamera===!0),S!==z&&(S=z,Tn=!0,la=!0)}if(Ce.isSkinnedMesh){It.setOptional(f,Ce,"bindMatrix"),It.setOptional(f,Ce,"bindMatrixInverse");const Qn=Ce.skeleton;Qn&&(Qn.boneTexture===null&&Qn.computeBoneTexture(),It.setValue(f,"boneTexture",Qn.boneTexture,E))}Ce.isBatchedMesh&&(It.setOptional(f,Ce,"batchingTexture"),It.setValue(f,"batchingTexture",Ce._matricesTexture,E),It.setOptional(f,Ce,"batchingIdTexture"),It.setValue(f,"batchingIdTexture",Ce._indirectTexture,E),It.setOptional(f,Ce,"batchingColorTexture"),Ce._colorsTexture!==null&&It.setValue(f,"batchingColorTexture",Ce._colorsTexture,E));const ha=Ie.morphAttributes;if((ha.position!==void 0||ha.normal!==void 0||ha.color!==void 0)&&me.update(Ce,Ie,Xn),(Tn||Xe.receiveShadow!==Ce.receiveShadow)&&(Xe.receiveShadow=Ce.receiveShadow,It.setValue(f,"receiveShadow",Ce.receiveShadow)),Te.isMeshGouraudMaterial&&Te.envMap!==null&&(oi.envMap.value=je,oi.flipEnvMap.value=je.isCubeTexture&&je.isRenderTargetTexture===!1?-1:1),Te.isMeshStandardMaterial&&Te.envMap===null&&Me.environment!==null&&(oi.envMapIntensity.value=Me.environmentIntensity),Tn&&(It.setValue(f,"toneMappingExposure",v.toneMappingExposure),Xe.needsLights&&Xa(oi,la),Fe&&Te.fog===!0&&G.refreshFogUniforms(oi,Fe),G.refreshMaterialUniforms(oi,Te,V,X,d.state.transmissionRenderTarget[z.id]),kr.upload(f,An(Xe),oi,E)),Te.isShaderMaterial&&Te.uniformsNeedUpdate===!0&&(kr.upload(f,An(Xe),oi,E),Te.uniformsNeedUpdate=!1),Te.isSpriteMaterial&&It.setValue(f,"center",Ce.center),It.setValue(f,"modelViewMatrix",Ce.modelViewMatrix),It.setValue(f,"normalMatrix",Ce.normalMatrix),It.setValue(f,"modelMatrix",Ce.matrixWorld),Te.isShaderMaterial||Te.isRawShaderMaterial){const Qn=Te.uniformsGroups;for(let Fi=0,Ni=Qn.length;Fi<Ni;Fi++){const Tl=Qn[Fi];se.update(Tl,Xn),se.bind(Tl,Xn)}}return Xn}function Xa(z,Me){z.ambientLightColor.needsUpdate=Me,z.lightProbe.needsUpdate=Me,z.directionalLights.needsUpdate=Me,z.directionalLightShadows.needsUpdate=Me,z.pointLights.needsUpdate=Me,z.pointLightShadows.needsUpdate=Me,z.spotLights.needsUpdate=Me,z.spotLightShadows.needsUpdate=Me,z.rectAreaLights.needsUpdate=Me,z.hemisphereLights.needsUpdate=Me}function Ka(z){return z.isMeshLambertMaterial||z.isMeshToonMaterial||z.isMeshPhongMaterial||z.isMeshStandardMaterial||z.isShadowMaterial||z.isShaderMaterial&&z.lights===!0}this.getActiveCubeFace=function(){return H},this.getActiveMipmapLevel=function(){return U},this.getRenderTarget=function(){return Z},this.setRenderTargetTextures=function(z,Me,Ie){D.get(z.texture).__webglTexture=Me,D.get(z.depthTexture).__webglTexture=Ie;const Te=D.get(z);Te.__hasExternalTextures=!0,Te.__autoAllocateDepthBuffer=Ie===void 0,Te.__autoAllocateDepthBuffer||j.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Te.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(z,Me){const Ie=D.get(z);Ie.__webglFramebuffer=Me,Ie.__useDefaultFramebuffer=Me===void 0},this.setRenderTarget=function(z,Me=0,Ie=0){Z=z,H=Me,U=Ie;let Te=!0,Ce=null,Fe=!1,Oe=!1;if(z){const je=D.get(z);if(je.__useDefaultFramebuffer!==void 0)N.bindFramebuffer(f.FRAMEBUFFER,null),Te=!1;else if(je.__webglFramebuffer===void 0)E.setupRenderTarget(z);else if(je.__hasExternalTextures)E.rebindTextures(z,D.get(z.texture).__webglTexture,D.get(z.depthTexture).__webglTexture);else if(z.depthBuffer){const qe=z.depthTexture;if(je.__boundDepthTexture!==qe){if(qe!==null&&D.has(qe)&&(z.width!==qe.image.width||z.height!==qe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");E.setupDepthRenderbuffer(z)}}const $e=z.texture;($e.isData3DTexture||$e.isDataArrayTexture||$e.isCompressedArrayTexture)&&(Oe=!0);const tt=D.get(z).__webglFramebuffer;z.isWebGLCubeRenderTarget?(Array.isArray(tt[Me])?Ce=tt[Me][Ie]:Ce=tt[Me],Fe=!0):z.samples>0&&E.useMultisampledRTT(z)===!1?Ce=D.get(z).__webglMultisampledFramebuffer:Array.isArray(tt)?Ce=tt[Ie]:Ce=tt,m.copy(z.viewport),I.copy(z.scissor),Q=z.scissorTest}else m.copy(le).multiplyScalar(V).floor(),I.copy(ge).multiplyScalar(V).floor(),Q=Ee;if(N.bindFramebuffer(f.FRAMEBUFFER,Ce)&&Te&&N.drawBuffers(z,Ce),N.viewport(m),N.scissor(I),N.setScissorTest(Q),Fe){const je=D.get(z.texture);f.framebufferTexture2D(f.FRAMEBUFFER,f.COLOR_ATTACHMENT0,f.TEXTURE_CUBE_MAP_POSITIVE_X+Me,je.__webglTexture,Ie)}else if(Oe){const je=D.get(z.texture),$e=Me||0;f.framebufferTextureLayer(f.FRAMEBUFFER,f.COLOR_ATTACHMENT0,je.__webglTexture,Ie||0,$e)}w=-1},this.readRenderTargetPixels=function(z,Me,Ie,Te,Ce,Fe,Oe){if(!(z&&z.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let We=D.get(z).__webglFramebuffer;if(z.isWebGLCubeRenderTarget&&Oe!==void 0&&(We=We[Oe]),We){N.bindFramebuffer(f.FRAMEBUFFER,We);try{const je=z.texture,$e=je.format,tt=je.type;if(!L.textureFormatReadable($e)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!L.textureTypeReadable(tt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Me>=0&&Me<=z.width-Te&&Ie>=0&&Ie<=z.height-Ce&&f.readPixels(Me,Ie,Te,Ce,Se.convert($e),Se.convert(tt),Fe)}finally{const je=Z!==null?D.get(Z).__webglFramebuffer:null;N.bindFramebuffer(f.FRAMEBUFFER,je)}}},this.readRenderTargetPixelsAsync=async function(z,Me,Ie,Te,Ce,Fe,Oe){if(!(z&&z.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let We=D.get(z).__webglFramebuffer;if(z.isWebGLCubeRenderTarget&&Oe!==void 0&&(We=We[Oe]),We){const je=z.texture,$e=je.format,tt=je.type;if(!L.textureFormatReadable($e))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!L.textureTypeReadable(tt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(Me>=0&&Me<=z.width-Te&&Ie>=0&&Ie<=z.height-Ce){N.bindFramebuffer(f.FRAMEBUFFER,We);const qe=f.createBuffer();f.bindBuffer(f.PIXEL_PACK_BUFFER,qe),f.bufferData(f.PIXEL_PACK_BUFFER,Fe.byteLength,f.STREAM_READ),f.readPixels(Me,Ie,Te,Ce,Se.convert($e),Se.convert(tt),0);const ut=Z!==null?D.get(Z).__webglFramebuffer:null;N.bindFramebuffer(f.FRAMEBUFFER,ut);const yt=f.fenceSync(f.SYNC_GPU_COMMANDS_COMPLETE,0);return f.flush(),await Wd(f,yt,4),f.bindBuffer(f.PIXEL_PACK_BUFFER,qe),f.getBufferSubData(f.PIXEL_PACK_BUFFER,0,Fe),f.deleteBuffer(qe),f.deleteSync(yt),Fe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(z,Me=null,Ie=0){z.isTexture!==!0&&(Ca("WebGLRenderer: copyFramebufferToTexture function signature has changed."),Me=arguments[0]||null,z=arguments[1]);const Te=Math.pow(2,-Ie),Ce=Math.floor(z.image.width*Te),Fe=Math.floor(z.image.height*Te),Oe=Me!==null?Me.x:0,We=Me!==null?Me.y:0;E.setTexture2D(z,0),f.copyTexSubImage2D(f.TEXTURE_2D,Ie,0,0,Oe,We,Ce,Fe),N.unbindTexture()},this.copyTextureToTexture=function(z,Me,Ie=null,Te=null,Ce=0){z.isTexture!==!0&&(Ca("WebGLRenderer: copyTextureToTexture function signature has changed."),Te=arguments[0]||null,z=arguments[1],Me=arguments[2],Ce=arguments[3]||0,Ie=null);let Fe,Oe,We,je,$e,tt,qe,ut,yt;const St=z.isCompressedTexture?z.mipmaps[Ce]:z.image;Ie!==null?(Fe=Ie.max.x-Ie.min.x,Oe=Ie.max.y-Ie.min.y,We=Ie.isBox3?Ie.max.z-Ie.min.z:1,je=Ie.min.x,$e=Ie.min.y,tt=Ie.isBox3?Ie.min.z:0):(Fe=St.width,Oe=St.height,We=St.depth||1,je=0,$e=0,tt=0),Te!==null?(qe=Te.x,ut=Te.y,yt=Te.z):(qe=0,ut=0,yt=0);const vn=Se.convert(Me.format),At=Se.convert(Me.type);let Xe;Me.isData3DTexture?(E.setTexture3D(Me,0),Xe=f.TEXTURE_3D):Me.isDataArrayTexture||Me.isCompressedArrayTexture?(E.setTexture2DArray(Me,0),Xe=f.TEXTURE_2D_ARRAY):(E.setTexture2D(Me,0),Xe=f.TEXTURE_2D),f.pixelStorei(f.UNPACK_FLIP_Y_WEBGL,Me.flipY),f.pixelStorei(f.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Me.premultiplyAlpha),f.pixelStorei(f.UNPACK_ALIGNMENT,Me.unpackAlignment);const Ei=f.getParameter(f.UNPACK_ROW_LENGTH),pt=f.getParameter(f.UNPACK_IMAGE_HEIGHT),Xn=f.getParameter(f.UNPACK_SKIP_PIXELS),Cs=f.getParameter(f.UNPACK_SKIP_ROWS),Tn=f.getParameter(f.UNPACK_SKIP_IMAGES);f.pixelStorei(f.UNPACK_ROW_LENGTH,St.width),f.pixelStorei(f.UNPACK_IMAGE_HEIGHT,St.height),f.pixelStorei(f.UNPACK_SKIP_PIXELS,je),f.pixelStorei(f.UNPACK_SKIP_ROWS,$e),f.pixelStorei(f.UNPACK_SKIP_IMAGES,tt);const la=z.isDataArrayTexture||z.isData3DTexture,It=Me.isDataArrayTexture||Me.isData3DTexture;if(z.isRenderTargetTexture||z.isDepthTexture){const oi=D.get(z),ha=D.get(Me),Qn=D.get(oi.__renderTarget),Fi=D.get(ha.__renderTarget);N.bindFramebuffer(f.READ_FRAMEBUFFER,Qn.__webglFramebuffer),N.bindFramebuffer(f.DRAW_FRAMEBUFFER,Fi.__webglFramebuffer);for(let Ni=0;Ni<We;Ni++)la&&f.framebufferTextureLayer(f.READ_FRAMEBUFFER,f.COLOR_ATTACHMENT0,D.get(z).__webglTexture,Ce,tt+Ni),z.isDepthTexture?(It&&f.framebufferTextureLayer(f.DRAW_FRAMEBUFFER,f.COLOR_ATTACHMENT0,D.get(Me).__webglTexture,Ce,yt+Ni),f.blitFramebuffer(je,$e,Fe,Oe,qe,ut,Fe,Oe,f.DEPTH_BUFFER_BIT,f.NEAREST)):It?f.copyTexSubImage3D(Xe,Ce,qe,ut,yt+Ni,je,$e,Fe,Oe):f.copyTexSubImage2D(Xe,Ce,qe,ut,yt+Ni,je,$e,Fe,Oe);N.bindFramebuffer(f.READ_FRAMEBUFFER,null),N.bindFramebuffer(f.DRAW_FRAMEBUFFER,null)}else It?z.isDataTexture||z.isData3DTexture?f.texSubImage3D(Xe,Ce,qe,ut,yt,Fe,Oe,We,vn,At,St.data):Me.isCompressedArrayTexture?f.compressedTexSubImage3D(Xe,Ce,qe,ut,yt,Fe,Oe,We,vn,St.data):f.texSubImage3D(Xe,Ce,qe,ut,yt,Fe,Oe,We,vn,At,St):z.isDataTexture?f.texSubImage2D(f.TEXTURE_2D,Ce,qe,ut,Fe,Oe,vn,At,St.data):z.isCompressedTexture?f.compressedTexSubImage2D(f.TEXTURE_2D,Ce,qe,ut,St.width,St.height,vn,St.data):f.texSubImage2D(f.TEXTURE_2D,Ce,qe,ut,Fe,Oe,vn,At,St);f.pixelStorei(f.UNPACK_ROW_LENGTH,Ei),f.pixelStorei(f.UNPACK_IMAGE_HEIGHT,pt),f.pixelStorei(f.UNPACK_SKIP_PIXELS,Xn),f.pixelStorei(f.UNPACK_SKIP_ROWS,Cs),f.pixelStorei(f.UNPACK_SKIP_IMAGES,Tn),Ce===0&&Me.generateMipmaps&&f.generateMipmap(Xe),N.unbindTexture()},this.copyTextureToTexture3D=function(z,Me,Ie=null,Te=null,Ce=0){return z.isTexture!==!0&&(Ca("WebGLRenderer: copyTextureToTexture3D function signature has changed."),Ie=arguments[0]||null,Te=arguments[1]||null,z=arguments[2],Me=arguments[3],Ce=arguments[4]||0),Ca('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(z,Me,Ie,Te,Ce)},this.initRenderTarget=function(z){D.get(z).__webglFramebuffer===void 0&&E.setupRenderTarget(z)},this.initTexture=function(z){z.isCubeTexture?E.setTextureCube(z,0):z.isData3DTexture?E.setTexture3D(z,0):z.isDataArrayTexture||z.isCompressedArrayTexture?E.setTexture2DArray(z,0):E.setTexture2D(z,0),N.unbindTexture()},this.resetState=function(){H=0,U=0,Z=null,N.reset(),be.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Di}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=ht._getDrawingBufferColorSpace(e),t.unpackColorSpace=ht._getUnpackColorSpace()}}class lo{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Re(e),this.near=t,this.far=n}clone(){return new lo(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class tb extends Dt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new qn,this.environmentIntensity=1,this.environmentRotation=new qn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class nb{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Wc,this.updateRanges=[],this.version=0,this.uuid=si()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,a=this.stride;s<a;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=si()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=si()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const pn=new ne;class _l{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)pn.fromBufferAttribute(this,t),pn.applyMatrix4(e),this.setXYZ(t,pn.x,pn.y,pn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)pn.fromBufferAttribute(this,t),pn.applyNormalMatrix(e),this.setXYZ(t,pn.x,pn.y,pn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)pn.fromBufferAttribute(this,t),pn.transformDirection(e),this.setXYZ(t,pn.x,pn.y,pn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=ni(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=gt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=gt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=gt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=gt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=gt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=ni(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=ni(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=ni(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=ni(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=gt(t,this.array),n=gt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=gt(t,this.array),n=gt(n,this.array),s=gt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,a){return e=e*this.data.stride+this.offset,this.normalized&&(t=gt(t,this.array),n=gt(n,this.array),s=gt(s,this.array),a=gt(a,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=a,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)t.push(this.data.array[s+a])}return new Lt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new _l(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)t.push(this.data.array[s+a])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const gr=new ne,Rh=new ne;class Jr extends Dt{constructor(){super(),this._currentLevel=0,this.type="LOD",Object.defineProperties(this,{levels:{enumerable:!0,value:[]},isLOD:{value:!0}}),this.autoUpdate=!0}copy(e){super.copy(e,!1);const t=e.levels;for(let n=0,s=t.length;n<s;n++){const a=t[n];this.addLevel(a.object.clone(),a.distance,a.hysteresis)}return this.autoUpdate=e.autoUpdate,this}addLevel(e,t=0,n=0){t=Math.abs(t);const s=this.levels;let a;for(a=0;a<s.length&&!(t<s[a].distance);a++);return s.splice(a,0,{distance:t,hysteresis:n,object:e}),this.add(e),this}removeLevel(e){const t=this.levels;for(let n=0;n<t.length;n++)if(t[n].distance===e){const s=t.splice(n,1);return this.remove(s[0].object),!0}return!1}getCurrentLevel(){return this._currentLevel}getObjectForDistance(e){const t=this.levels;if(t.length>0){let n,s;for(n=1,s=t.length;n<s;n++){let a=t[n].distance;if(t[n].object.visible&&(a-=a*t[n].hysteresis),e<a)break}return t[n-1].object}return null}raycast(e,t){if(this.levels.length>0){gr.setFromMatrixPosition(this.matrixWorld);const s=e.ray.origin.distanceTo(gr);this.getObjectForDistance(s).raycast(e,t)}}update(e){const t=this.levels;if(t.length>1){gr.setFromMatrixPosition(e.matrixWorld),Rh.setFromMatrixPosition(this.matrixWorld);const n=gr.distanceTo(Rh)/e.zoom;t[0].object.visible=!0;let s,a;for(s=1,a=t.length;s<a;s++){let r=t[s].distance;if(t[s].object.visible&&(r-=r*t[s].hysteresis),n>=r)t[s-1].object.visible=!1,t[s].object.visible=!0;else break}for(this._currentLevel=s-1;s<a;s++)t[s].object.visible=!1}}toJSON(e){const t=super.toJSON(e);this.autoUpdate===!1&&(t.object.autoUpdate=!1),t.object.levels=[];const n=this.levels;for(let s=0,a=n.length;s<a;s++){const r=n[s];t.object.levels.push({object:r.object.uuid,distance:r.distance,hysteresis:r.hysteresis})}return t}}const Dh=new ne,Lh=new dt,Ph=new dt,ib=new ne,Uh=new He,br=new ne,jo=new pi,Fh=new He,qo=new ja;class sb extends nt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Ll,this.bindMatrix=new He,this.bindMatrixInverse=new He,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Ui),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,br),this.boundingBox.expandByPoint(br)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new pi),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,br),this.boundingSphere.expandByPoint(br)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),jo.copy(this.boundingSphere),jo.applyMatrix4(s),e.ray.intersectsSphere(jo)!==!1&&(Fh.copy(s).invert(),qo.copy(e.ray).applyMatrix4(Fh),!(this.boundingBox!==null&&qo.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,qo)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new dt,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);const a=1/e.manhattanLength();a!==1/0?e.multiplyScalar(a):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Ll?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===pd?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,s=this.geometry;Lh.fromBufferAttribute(s.attributes.skinIndex,e),Ph.fromBufferAttribute(s.attributes.skinWeight,e),Dh.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let a=0;a<4;a++){const r=Ph.getComponent(a);if(r!==0){const o=Lh.getComponent(a);Uh.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(ib.copy(Dh).applyMatrix4(Uh),r)}}return t.applyMatrix4(this.bindMatrixInverse)}}class sf extends Dt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class qa extends Gt{constructor(e=null,t=1,n=1,s,a,r,o,c,l=cn,h=cn,u,A){super(null,r,o,c,l,h,s,a,u,A),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Nh=new He,ab=new He;class El{constructor(e=[],t=[]){this.uuid=si(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new He)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new He;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let a=0,r=e.length;a<r;a++){const o=e[a]?e[a].matrixWorld:ab;Nh.multiplyMatrices(o,t[a]),Nh.toArray(n,a*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new El(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new qa(t,e,e,Yt,fn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){const a=e.bones[n];let r=t[a];r===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",a),r=new sf),this.bones.push(r),this.boneInverses.push(new He().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let s=0,a=t.length;s<a;s++){const r=t[s];e.bones.push(r.uuid);const o=n[s];e.boneInverses.push(o.toArray())}return e}}class qc extends Lt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Os=new He,Qh=new He,xr=[],kh=new Ui,rb=new He,pa=new nt,ma=new pi;class Bt extends nt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new qc(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,rb)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Ui),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Os),kh.copy(e.boundingBox).applyMatrix4(Os),this.boundingBox.union(kh)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new pi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Os),ma.copy(e.boundingSphere).applyMatrix4(Os),this.boundingSphere.union(ma)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,a=n.length+1,r=e*a+1;for(let o=0;o<n.length;o++)n[o]=s[r+o]}raycast(e,t){const n=this.matrixWorld,s=this.count;if(pa.geometry=this.geometry,pa.material=this.material,pa.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ma.copy(this.boundingSphere),ma.applyMatrix4(n),e.ray.intersectsSphere(ma)!==!1))for(let a=0;a<s;a++){this.getMatrixAt(a,Os),Qh.multiplyMatrices(n,Os),pa.matrixWorld=Qh,pa.raycast(e,xr);for(let r=0,o=xr.length;r<o;r++){const c=xr[r];c.instanceId=a,c.object=this,t.push(c)}xr.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new qc(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new qa(new Float32Array(s*this.count),s,this.count,Ki,fn));const a=this.morphTexture.source.data.data;let r=0;for(let l=0;l<n.length;l++)r+=n[l];const o=this.geometry.morphTargetsRelative?1:1-r,c=s*e;a[c]=o,a.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class af extends jn{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new Re(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Zr=new ne,$r=new ne,Oh=new He,ga=new ja,_r=new pi,Yo=new ne,zh=new ne;class vl extends Dt{constructor(e=new xt,t=new af){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let s=1,a=t.count;s<a;s++)Zr.fromBufferAttribute(t,s-1),$r.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Zr.distanceTo($r);e.setAttribute("lineDistance",new et(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,a=e.params.Line.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),_r.copy(n.boundingSphere),_r.applyMatrix4(s),_r.radius+=a,e.ray.intersectsSphere(_r)===!1)return;Oh.copy(s).invert(),ga.copy(e.ray).applyMatrix4(Oh);const o=a/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,h=n.index,A=n.attributes.position;if(h!==null){const g=Math.max(0,r.start),x=Math.min(h.count,r.start+r.count);for(let _=g,p=x-1;_<p;_+=l){const d=h.getX(_),M=h.getX(_+1),y=Er(this,e,ga,c,d,M);y&&t.push(y)}if(this.isLineLoop){const _=h.getX(x-1),p=h.getX(g),d=Er(this,e,ga,c,_,p);d&&t.push(d)}}else{const g=Math.max(0,r.start),x=Math.min(A.count,r.start+r.count);for(let _=g,p=x-1;_<p;_+=l){const d=Er(this,e,ga,c,_,_+1);d&&t.push(d)}if(this.isLineLoop){const _=Er(this,e,ga,c,x-1,g);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,r=s.length;a<r;a++){const o=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}}function Er(i,e,t,n,s,a){const r=i.geometry.attributes.position;if(Zr.fromBufferAttribute(r,s),$r.fromBufferAttribute(r,a),t.distanceSqToSegment(Zr,$r,Yo,zh)>n)return;Yo.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(Yo);if(!(c<e.near||c>e.far))return{distance:c,point:zh.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}const Gh=new ne,Hh=new ne;class ob extends vl{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let s=0,a=t.count;s<a;s+=2)Gh.fromBufferAttribute(t,s),Hh.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Gh.distanceTo(Hh);e.setAttribute("lineDistance",new et(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class cb extends vl{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class rf extends jn{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new Re(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Vh=new He,Yc=new ja,vr=new pi,Mr=new ne;class lb extends Dt{constructor(e=new xt,t=new rf){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,a=e.params.Points.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),vr.copy(n.boundingSphere),vr.applyMatrix4(s),vr.radius+=a,e.ray.intersectsSphere(vr)===!1)return;Vh.copy(s).invert(),Yc.copy(e.ray).applyMatrix4(Vh);const o=a/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,u=n.attributes.position;if(l!==null){const A=Math.max(0,r.start),g=Math.min(l.count,r.start+r.count);for(let x=A,_=g;x<_;x++){const p=l.getX(x);Mr.fromBufferAttribute(u,p),Wh(Mr,p,c,s,e,t,this)}}else{const A=Math.max(0,r.start),g=Math.min(u.count,r.start+r.count);for(let x=A,_=g;x<_;x++)Mr.fromBufferAttribute(u,x),Wh(Mr,x,c,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,r=s.length;a<r;a++){const o=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}}function Wh(i,e,t,n,s,a,r){const o=Yc.distanceSqToPoint(i);if(o<t){const c=new ne;Yc.closestPointToPoint(i,c),c.applyMatrix4(n);const l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;a.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:r})}}class ho extends Gt{constructor(e,t,n,s,a,r,o,c,l,h,u,A){super(null,r,o,c,l,h,s,a,u,A),this.isCompressedTexture=!0,this.image={width:t,height:n},this.mipmaps=e,this.flipY=!1,this.generateMipmaps=!1}}class hb extends ho{constructor(e,t,n,s,a,r){super(e,t,n,a,r),this.isCompressedArrayTexture=!0,this.image.depth=s,this.wrapR=Ri,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class ub extends ho{constructor(e,t,n){super(void 0,e[0].width,e[0].height,t,n,ps),this.isCompressedCubeTexture=!0,this.isCubeTexture=!0,this.image=e}}class fb extends Gt{constructor(e,t,n,s,a,r,o,c,l){super(e,t,n,s,a,r,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ft extends xt{constructor(e=1,t=1,n=1,s=32,a=1,r=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:a,openEnded:r,thetaStart:o,thetaLength:c};const l=this;s=Math.floor(s),a=Math.floor(a);const h=[],u=[],A=[],g=[];let x=0;const _=[],p=n/2;let d=0;M(),r===!1&&(e>0&&y(!0),t>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new et(u,3)),this.setAttribute("normal",new et(A,3)),this.setAttribute("uv",new et(g,2));function M(){const v=new ne,q=new ne;let H=0;const U=(t-e)/n;for(let Z=0;Z<=a;Z++){const w=[],S=Z/a,m=S*(t-e)+e;for(let I=0;I<=s;I++){const Q=I/s,K=Q*c+o,Y=Math.sin(K),te=Math.cos(K);q.x=m*Y,q.y=-S*n+p,q.z=m*te,u.push(q.x,q.y,q.z),v.set(Y,U,te).normalize(),A.push(v.x,v.y,v.z),g.push(Q,1-S),w.push(x++)}_.push(w)}for(let Z=0;Z<s;Z++)for(let w=0;w<a;w++){const S=_[w][Z],m=_[w+1][Z],I=_[w+1][Z+1],Q=_[w][Z+1];(e>0||w!==0)&&(h.push(S,m,Q),H+=3),(t>0||w!==a-1)&&(h.push(m,I,Q),H+=3)}l.addGroup(d,H,0),d+=H}function y(v){const q=x,H=new ke,U=new ne;let Z=0;const w=v===!0?e:t,S=v===!0?1:-1;for(let I=1;I<=s;I++)u.push(0,p*S,0),A.push(0,S,0),g.push(.5,.5),x++;const m=x;for(let I=0;I<=s;I++){const K=I/s*c+o,Y=Math.cos(K),te=Math.sin(K);U.x=w*te,U.y=p*S,U.z=w*Y,u.push(U.x,U.y,U.z),A.push(0,S,0),H.x=Y*.5+.5,H.y=te*.5*S+.5,g.push(H.x,H.y),x++}for(let I=0;I<s;I++){const Q=q+I,K=m+I;v===!0?h.push(K,K+1,Q):h.push(K+1,K,Q),Z+=3}l.addGroup(d,Z,v===!0?1:2),d+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ft(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ei extends Ft{constructor(e=1,t=1,n=32,s=1,a=!1,r=0,o=Math.PI*2){super(0,e,t,n,s,a,r,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:a,thetaStart:r,thetaLength:o}}static fromJSON(e){return new ei(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class uo extends xt{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};const a=[],r=[];o(s),l(n),h(),this.setAttribute("position",new et(a,3)),this.setAttribute("normal",new et(a.slice(),3)),this.setAttribute("uv",new et(r,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(M){const y=new ne,v=new ne,q=new ne;for(let H=0;H<t.length;H+=3)g(t[H+0],y),g(t[H+1],v),g(t[H+2],q),c(y,v,q,M)}function c(M,y,v,q){const H=q+1,U=[];for(let Z=0;Z<=H;Z++){U[Z]=[];const w=M.clone().lerp(v,Z/H),S=y.clone().lerp(v,Z/H),m=H-Z;for(let I=0;I<=m;I++)I===0&&Z===H?U[Z][I]=w:U[Z][I]=w.clone().lerp(S,I/m)}for(let Z=0;Z<H;Z++)for(let w=0;w<2*(H-Z)-1;w++){const S=Math.floor(w/2);w%2===0?(A(U[Z][S+1]),A(U[Z+1][S]),A(U[Z][S])):(A(U[Z][S+1]),A(U[Z+1][S+1]),A(U[Z+1][S]))}}function l(M){const y=new ne;for(let v=0;v<a.length;v+=3)y.x=a[v+0],y.y=a[v+1],y.z=a[v+2],y.normalize().multiplyScalar(M),a[v+0]=y.x,a[v+1]=y.y,a[v+2]=y.z}function h(){const M=new ne;for(let y=0;y<a.length;y+=3){M.x=a[y+0],M.y=a[y+1],M.z=a[y+2];const v=p(M)/2/Math.PI+.5,q=d(M)/Math.PI+.5;r.push(v,1-q)}x(),u()}function u(){for(let M=0;M<r.length;M+=6){const y=r[M+0],v=r[M+2],q=r[M+4],H=Math.max(y,v,q),U=Math.min(y,v,q);H>.9&&U<.1&&(y<.2&&(r[M+0]+=1),v<.2&&(r[M+2]+=1),q<.2&&(r[M+4]+=1))}}function A(M){a.push(M.x,M.y,M.z)}function g(M,y){const v=M*3;y.x=e[v+0],y.y=e[v+1],y.z=e[v+2]}function x(){const M=new ne,y=new ne,v=new ne,q=new ne,H=new ke,U=new ke,Z=new ke;for(let w=0,S=0;w<a.length;w+=9,S+=6){M.set(a[w+0],a[w+1],a[w+2]),y.set(a[w+3],a[w+4],a[w+5]),v.set(a[w+6],a[w+7],a[w+8]),H.set(r[S+0],r[S+1]),U.set(r[S+2],r[S+3]),Z.set(r[S+4],r[S+5]),q.copy(M).add(y).add(v).divideScalar(3);const m=p(q);_(H,S+0,M,m),_(U,S+2,y,m),_(Z,S+4,v,m)}}function _(M,y,v,q){q<0&&M.x===1&&(r[y]=M.x-1),v.x===0&&v.z===0&&(r[y]=q/2/Math.PI+.5)}function p(M){return Math.atan2(M.z,-M.x)}function d(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new uo(e.vertices,e.indices,e.radius,e.details)}}const db={triangulate:function(i,e,t=2){const n=e&&e.length,s=n?e[0]*t:i.length;let a=of(i,0,s,t,!0);const r=[];if(!a||a.next===a.prev)return r;let o,c,l,h,u,A,g;if(n&&(a=bb(i,e,a,t)),i.length>80*t){o=l=i[0],c=h=i[1];for(let x=t;x<s;x+=t)u=i[x],A=i[x+1],u<o&&(o=u),A<c&&(c=A),u>l&&(l=u),A>h&&(h=A);g=Math.max(l-o,h-c),g=g!==0?32767/g:0}return Ga(a,r,t,o,c,g,0),r}};function of(i,e,t,n,s){let a,r;if(s===Tb(i,e,t,n)>0)for(a=e;a<t;a+=n)r=jh(a,i[a],i[a+1],r);else for(a=t-n;a>=e;a-=n)r=jh(a,i[a],i[a+1],r);return r&&fo(r,r.next)&&(Va(r),r=r.next),r}function xs(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(fo(t,t.next)||Qt(t.prev,t,t.next)===0)){if(Va(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Ga(i,e,t,n,s,a,r){if(!i)return;!r&&a&&Mb(i,n,s,a);let o=i,c,l;for(;i.prev!==i.next;){if(c=i.prev,l=i.next,a?pb(i,n,s,a):Ab(i)){e.push(c.i/t|0),e.push(i.i/t|0),e.push(l.i/t|0),Va(i),i=l.next,o=l.next;continue}if(i=l,i===o){r?r===1?(i=mb(xs(i),e,t),Ga(i,e,t,n,s,a,2)):r===2&&gb(i,e,t,n,s,a):Ga(xs(i),e,t,n,s,a,1);break}}}function Ab(i){const e=i.prev,t=i,n=i.next;if(Qt(e,t,n)>=0)return!1;const s=e.x,a=t.x,r=n.x,o=e.y,c=t.y,l=n.y,h=s<a?s<r?s:r:a<r?a:r,u=o<c?o<l?o:l:c<l?c:l,A=s>a?s>r?s:r:a>r?a:r,g=o>c?o>l?o:l:c>l?c:l;let x=n.next;for(;x!==e;){if(x.x>=h&&x.x<=A&&x.y>=u&&x.y<=g&&Vs(s,o,a,c,r,l,x.x,x.y)&&Qt(x.prev,x,x.next)>=0)return!1;x=x.next}return!0}function pb(i,e,t,n){const s=i.prev,a=i,r=i.next;if(Qt(s,a,r)>=0)return!1;const o=s.x,c=a.x,l=r.x,h=s.y,u=a.y,A=r.y,g=o<c?o<l?o:l:c<l?c:l,x=h<u?h<A?h:A:u<A?u:A,_=o>c?o>l?o:l:c>l?c:l,p=h>u?h>A?h:A:u>A?u:A,d=Xc(g,x,e,t,n),M=Xc(_,p,e,t,n);let y=i.prevZ,v=i.nextZ;for(;y&&y.z>=d&&v&&v.z<=M;){if(y.x>=g&&y.x<=_&&y.y>=x&&y.y<=p&&y!==s&&y!==r&&Vs(o,h,c,u,l,A,y.x,y.y)&&Qt(y.prev,y,y.next)>=0||(y=y.prevZ,v.x>=g&&v.x<=_&&v.y>=x&&v.y<=p&&v!==s&&v!==r&&Vs(o,h,c,u,l,A,v.x,v.y)&&Qt(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;y&&y.z>=d;){if(y.x>=g&&y.x<=_&&y.y>=x&&y.y<=p&&y!==s&&y!==r&&Vs(o,h,c,u,l,A,y.x,y.y)&&Qt(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;v&&v.z<=M;){if(v.x>=g&&v.x<=_&&v.y>=x&&v.y<=p&&v!==s&&v!==r&&Vs(o,h,c,u,l,A,v.x,v.y)&&Qt(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function mb(i,e,t){let n=i;do{const s=n.prev,a=n.next.next;!fo(s,a)&&cf(s,n,n.next,a)&&Ha(s,a)&&Ha(a,s)&&(e.push(s.i/t|0),e.push(n.i/t|0),e.push(a.i/t|0),Va(n),Va(n.next),n=i=a),n=n.next}while(n!==i);return xs(n)}function gb(i,e,t,n,s,a){let r=i;do{let o=r.next.next;for(;o!==r.prev;){if(r.i!==o.i&&wb(r,o)){let c=lf(r,o);r=xs(r,r.next),c=xs(c,c.next),Ga(r,e,t,n,s,a,0),Ga(c,e,t,n,s,a,0);return}o=o.next}r=r.next}while(r!==i)}function bb(i,e,t,n){const s=[];let a,r,o,c,l;for(a=0,r=e.length;a<r;a++)o=e[a]*n,c=a<r-1?e[a+1]*n:i.length,l=of(i,o,c,n,!1),l===l.next&&(l.steiner=!0),s.push(Cb(l));for(s.sort(xb),a=0;a<s.length;a++)t=_b(s[a],t);return t}function xb(i,e){return i.x-e.x}function _b(i,e){const t=Eb(i,e);if(!t)return e;const n=lf(t,i);return xs(n,n.next),xs(t,t.next)}function Eb(i,e){let t=e,n=-1/0,s;const a=i.x,r=i.y;do{if(r<=t.y&&r>=t.next.y&&t.next.y!==t.y){const A=t.x+(r-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(A<=a&&A>n&&(n=A,s=t.x<t.next.x?t:t.next,A===a))return s}t=t.next}while(t!==e);if(!s)return null;const o=s,c=s.x,l=s.y;let h=1/0,u;t=s;do a>=t.x&&t.x>=c&&a!==t.x&&Vs(r<l?a:n,r,c,l,r<l?n:a,r,t.x,t.y)&&(u=Math.abs(r-t.y)/(a-t.x),Ha(t,i)&&(u<h||u===h&&(t.x>s.x||t.x===s.x&&vb(s,t)))&&(s=t,h=u)),t=t.next;while(t!==o);return s}function vb(i,e){return Qt(i.prev,i,e.prev)<0&&Qt(e.next,i,i.next)<0}function Mb(i,e,t,n){let s=i;do s.z===0&&(s.z=Xc(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,yb(s)}function yb(i){let e,t,n,s,a,r,o,c,l=1;do{for(t=i,i=null,a=null,r=0;t;){for(r++,n=t,o=0,e=0;e<l&&(o++,n=n.nextZ,!!n);e++);for(c=l;o>0||c>0&&n;)o!==0&&(c===0||!n||t.z<=n.z)?(s=t,t=t.nextZ,o--):(s=n,n=n.nextZ,c--),a?a.nextZ=s:i=s,s.prevZ=a,a=s;t=n}a.nextZ=null,l*=2}while(r>1);return i}function Xc(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function Cb(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function Vs(i,e,t,n,s,a,r,o){return(s-r)*(e-o)>=(i-r)*(a-o)&&(i-r)*(n-o)>=(t-r)*(e-o)&&(t-r)*(a-o)>=(s-r)*(n-o)}function wb(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!Sb(i,e)&&(Ha(i,e)&&Ha(e,i)&&Ib(i,e)&&(Qt(i.prev,i,e.prev)||Qt(i,e.prev,e))||fo(i,e)&&Qt(i.prev,i,i.next)>0&&Qt(e.prev,e,e.next)>0)}function Qt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function fo(i,e){return i.x===e.x&&i.y===e.y}function cf(i,e,t,n){const s=Cr(Qt(i,e,t)),a=Cr(Qt(i,e,n)),r=Cr(Qt(t,n,i)),o=Cr(Qt(t,n,e));return!!(s!==a&&r!==o||s===0&&yr(i,t,e)||a===0&&yr(i,n,e)||r===0&&yr(t,i,n)||o===0&&yr(t,e,n))}function yr(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function Cr(i){return i>0?1:i<0?-1:0}function Sb(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&cf(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function Ha(i,e){return Qt(i.prev,i,i.next)<0?Qt(i,e,i.next)>=0&&Qt(i,i.prev,e)>=0:Qt(i,e,i.prev)<0||Qt(i,i.next,e)<0}function Ib(i,e){let t=i,n=!1;const s=(i.x+e.x)/2,a=(i.y+e.y)/2;do t.y>a!=t.next.y>a&&t.next.y!==t.y&&s<(t.next.x-t.x)*(a-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function lf(i,e){const t=new Kc(i.i,i.x,i.y),n=new Kc(e.i,e.x,e.y),s=i.next,a=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,a.next=n,n.prev=a,n}function jh(i,e,t,n){const s=new Kc(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Va(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Kc(i,e,t){this.i=i,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Tb(i,e,t,n){let s=0;for(let a=e,r=t-n;a<t;a+=n)s+=(i[r]-i[a])*(i[a+1]+i[r+1]),r=a;return s}class wn{static area(e){const t=e.length;let n=0;for(let s=t-1,a=0;a<t;s=a++)n+=e[s].x*e[a].y-e[a].x*e[s].y;return n*.5}static isClockWise(e){return wn.area(e)<0}static triangulateShape(e,t){const n=[],s=[],a=[];qh(e),Yh(n,e);let r=e.length;t.forEach(qh);for(let c=0;c<t.length;c++)s.push(r),r+=t[c].length,Yh(n,t[c]);const o=db.triangulate(n,s);for(let c=0;c<o.length;c+=3)a.push(o.slice(c,c+3));return a}}function qh(i){const e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Yh(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}class Ao extends uo{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],a=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,a,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Ao(e.radius,e.detail)}}class eo extends uo{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new eo(e.radius,e.detail)}}class Cn extends xt{constructor(e=1,t=32,n=16,s=0,a=Math.PI*2,r=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:a,thetaStart:r,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(r+o,Math.PI);let l=0;const h=[],u=new ne,A=new ne,g=[],x=[],_=[],p=[];for(let d=0;d<=n;d++){const M=[],y=d/n;let v=0;d===0&&r===0?v=.5/t:d===n&&c===Math.PI&&(v=-.5/t);for(let q=0;q<=t;q++){const H=q/t;u.x=-e*Math.cos(s+H*a)*Math.sin(r+y*o),u.y=e*Math.cos(r+y*o),u.z=e*Math.sin(s+H*a)*Math.sin(r+y*o),x.push(u.x,u.y,u.z),A.copy(u).normalize(),_.push(A.x,A.y,A.z),p.push(H+v,1-y),M.push(l++)}h.push(M)}for(let d=0;d<n;d++)for(let M=0;M<t;M++){const y=h[d][M+1],v=h[d][M],q=h[d+1][M],H=h[d+1][M+1];(d!==0||r>0)&&g.push(y,v,H),(d!==n-1||c<Math.PI)&&g.push(v,q,H)}this.setIndex(g),this.setAttribute("position",new et(x,3)),this.setAttribute("normal",new et(_,3)),this.setAttribute("uv",new et(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Cn(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Bb extends Wt{static get type(){return"RawShaderMaterial"}constructor(e){super(e),this.isRawShaderMaterial=!0}}class _s extends jn{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Re(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Re(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ao,this.normalScale=new ke(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class mi extends _s{static get type(){return"MeshPhysicalMaterial"}constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ke(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return sn(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Re(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Re(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Re(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Rb extends jn{static get type(){return"MeshNormalMaterial"}constructor(e){super(),this.isMeshNormalMaterial=!0,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ao,this.normalScale=new ke(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}class Je extends jn{static get type(){return"MeshLambertMaterial"}constructor(e){super(),this.isMeshLambertMaterial=!0,this.color=new Re(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Re(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ao,this.normalScale=new ke(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qn,this.combine=cl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}function wr(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Db(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Lb(i){function e(s,a){return i[s]-i[a]}const t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function Xh(i,e,t){const n=i.length,s=new i.constructor(n);for(let a=0,r=0;r!==n;++a){const o=t[a]*e;for(let c=0;c!==e;++c)s[r++]=i[o+c]}return s}function hf(i,e,t,n){let s=1,a=i[0];for(;a!==void 0&&a[n]===void 0;)a=i[s++];if(a===void 0)return;let r=a[n];if(r!==void 0)if(Array.isArray(r))do r=a[n],r!==void 0&&(e.push(a.time),t.push.apply(t,r)),a=i[s++];while(a!==void 0);else if(r.toArray!==void 0)do r=a[n],r!==void 0&&(e.push(a.time),r.toArray(t,t.length)),a=i[s++];while(a!==void 0);else do r=a[n],r!==void 0&&(e.push(a.time),t.push(r)),a=i[s++];while(a!==void 0)}class Ya{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,s=t[n],a=t[n-1];n:{e:{let r;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<a)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(a=s,s=t[++n],e<s)break e}r=t.length;break t}if(!(e>=a)){const o=t[1];e<o&&(n=2,a=o);for(let c=n-2;;){if(a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=a,a=t[--n-1],e>=a)break e}r=n,n=0;break t}break n}for(;n<r;){const o=n+r>>>1;e<t[o]?r=o:n=o+1}if(s=t[n],a=t[n-1],a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,a,s)}return this.interpolate_(n,a,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,a=e*s;for(let r=0;r!==s;++r)t[r]=n[a+r];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Pb extends Ya{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Pl,endingEnd:Pl}}intervalChanged_(e,t,n){const s=this.parameterPositions;let a=e-2,r=e+1,o=s[a],c=s[r];if(o===void 0)switch(this.getSettings_().endingStart){case Ul:a=e,o=2*t-n;break;case Fl:a=s.length-2,o=t+s[a]-s[a+1];break;default:a=e,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Ul:r=e,c=2*n-t;break;case Fl:r=1,c=n+s[1]-s[0];break;default:r=e-1,c=t}const l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-n),this._offsetPrev=a*h,this._offsetNext=r*h}interpolate_(e,t,n,s){const a=this.resultBuffer,r=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=this._offsetPrev,u=this._offsetNext,A=this._weightPrev,g=this._weightNext,x=(n-t)/(s-t),_=x*x,p=_*x,d=-A*p+2*A*_-A*x,M=(1+A)*p+(-1.5-2*A)*_+(-.5+A)*x+1,y=(-1-g)*p+(1.5+g)*_+.5*x,v=g*p-g*_;for(let q=0;q!==o;++q)a[q]=d*r[h+q]+M*r[l+q]+y*r[c+q]+v*r[u+q];return a}}class Ub extends Ya{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){const a=this.resultBuffer,r=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=(n-t)/(s-t),u=1-h;for(let A=0;A!==o;++A)a[A]=r[l+A]*u+r[c+A]*h;return a}}class Fb extends Ya{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}}class gi{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=wr(t,this.TimeBufferType),this.values=wr(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:wr(e.times,Array),values:wr(e.values,Array)};const s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Fb(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Ub(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Pb(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case ka:t=this.InterpolantFactoryMethodDiscrete;break;case Oa:t=this.InterpolantFactoryMethodLinear;break;case bo:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ka;case this.InterpolantFactoryMethodLinear:return Oa;case this.InterpolantFactoryMethodSmooth:return bo}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){const n=this.times,s=n.length;let a=0,r=s-1;for(;a!==s&&n[a]<e;)++a;for(;r!==-1&&n[r]>t;)--r;if(++r,a!==0||r!==s){a>=r&&(r=Math.max(r,1),a=r-1);const o=this.getValueSize();this.times=n.slice(a,r),this.values=this.values.slice(a*o,r*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,s=this.values,a=n.length;a===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let r=null;for(let o=0;o!==a;o++){const c=n[o];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(r!==null&&r>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,c,r),e=!1;break}r=c}if(s!==void 0&&Db(s))for(let o=0,c=s.length;o!==c;++o){const l=s[o];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===bo,a=e.length-1;let r=1;for(let o=1;o<a;++o){let c=!1;const l=e[o],h=e[o+1];if(l!==h&&(o!==1||l!==e[0]))if(s)c=!0;else{const u=o*n,A=u-n,g=u+n;for(let x=0;x!==n;++x){const _=t[u+x];if(_!==t[A+x]||_!==t[g+x]){c=!0;break}}}if(c){if(o!==r){e[r]=e[o];const u=o*n,A=r*n;for(let g=0;g!==n;++g)t[A+g]=t[u+g]}++r}}if(a>0){e[r]=e[a];for(let o=a*n,c=r*n,l=0;l!==n;++l)t[c+l]=t[o+l];++r}return r!==e.length?(this.times=e.slice(0,r),this.values=t.slice(0,r*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}}gi.prototype.TimeBufferType=Float32Array;gi.prototype.ValueBufferType=Float32Array;gi.prototype.DefaultInterpolation=Oa;class oa extends gi{constructor(e,t,n){super(e,t,n)}}oa.prototype.ValueTypeName="bool";oa.prototype.ValueBufferType=Array;oa.prototype.DefaultInterpolation=ka;oa.prototype.InterpolantFactoryMethodLinear=void 0;oa.prototype.InterpolantFactoryMethodSmooth=void 0;class uf extends gi{}uf.prototype.ValueTypeName="color";class na extends gi{}na.prototype.ValueTypeName="number";class Nb extends Ya{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){const a=this.resultBuffer,r=this.sampleValues,o=this.valueSize,c=(n-t)/(s-t);let l=e*o;for(let h=l+o;l!==h;l+=4)wt.slerpFlat(a,0,r,l-o,r,l,c);return a}}class ia extends gi{InterpolantFactoryMethodLinear(e){return new Nb(this.times,this.values,this.getValueSize(),e)}}ia.prototype.ValueTypeName="quaternion";ia.prototype.InterpolantFactoryMethodSmooth=void 0;class ca extends gi{constructor(e,t,n){super(e,t,n)}}ca.prototype.ValueTypeName="string";ca.prototype.ValueBufferType=Array;ca.prototype.DefaultInterpolation=ka;ca.prototype.InterpolantFactoryMethodLinear=void 0;ca.prototype.InterpolantFactoryMethodSmooth=void 0;class sa extends gi{}sa.prototype.ValueTypeName="vector";class Qb{constructor(e="",t=-1,n=[],s=md){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=si(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,s=1/(e.fps||1);for(let r=0,o=n.length;r!==o;++r)t.push(Ob(n[r]).scale(s));const a=new this(e.name,e.duration,t,e.blendMode);return a.uuid=e.uuid,a}static toJSON(e){const t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let a=0,r=n.length;a!==r;++a)t.push(gi.toJSON(n[a]));return s}static CreateFromMorphTargetSequence(e,t,n,s){const a=t.length,r=[];for(let o=0;o<a;o++){let c=[],l=[];c.push((o+a-1)%a,o,(o+1)%a),l.push(0,1,0);const h=Lb(c);c=Xh(c,1,h),l=Xh(l,1,h),!s&&c[0]===0&&(c.push(a),l.push(l[0])),r.push(new na(".morphTargetInfluences["+t[o].name+"]",c,l).scale(1/n))}return new this(e,-1,r)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const s={},a=/^([\w-]*?)([\d]+)$/;for(let o=0,c=e.length;o<c;o++){const l=e[o],h=l.name.match(a);if(h&&h.length>1){const u=h[1];let A=s[u];A||(s[u]=A=[]),A.push(l)}}const r=[];for(const o in s)r.push(this.CreateFromMorphTargetSequence(o,s[o],t,n));return r}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(u,A,g,x,_){if(g.length!==0){const p=[],d=[];hf(g,p,d,x),p.length!==0&&_.push(new u(A,p,d))}},s=[],a=e.name||"default",r=e.fps||30,o=e.blendMode;let c=e.length||-1;const l=e.hierarchy||[];for(let u=0;u<l.length;u++){const A=l[u].keys;if(!(!A||A.length===0))if(A[0].morphTargets){const g={};let x;for(x=0;x<A.length;x++)if(A[x].morphTargets)for(let _=0;_<A[x].morphTargets.length;_++)g[A[x].morphTargets[_]]=-1;for(const _ in g){const p=[],d=[];for(let M=0;M!==A[x].morphTargets.length;++M){const y=A[x];p.push(y.time),d.push(y.morphTarget===_?1:0)}s.push(new na(".morphTargetInfluence["+_+"]",p,d))}c=g.length*r}else{const g=".bones["+t[u].name+"]";n(sa,g+".position",A,"pos",s),n(ia,g+".quaternion",A,"rot",s),n(sa,g+".scale",A,"scl",s)}}return s.length===0?null:new this(a,c,s,o)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,s=e.length;n!==s;++n){const a=this.tracks[n];t=Math.max(t,a.times[a.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function kb(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return na;case"vector":case"vector2":case"vector3":case"vector4":return sa;case"color":return uf;case"quaternion":return ia;case"bool":case"boolean":return oa;case"string":return ca}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function Ob(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=kb(i.type);if(i.times===void 0){const t=[],n=[];hf(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}const Zi={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class zb{constructor(e,t,n){const s=this;let a=!1,r=0,o=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){o++,a===!1&&s.onStart!==void 0&&s.onStart(h,r,o),a=!0},this.itemEnd=function(h){r++,s.onProgress!==void 0&&s.onProgress(h,r,o),r===o&&(a=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){const u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,A=l.length;u<A;u+=2){const g=l[u],x=l[u+1];if(g.global&&(g.lastIndex=0),g.test(h))return x}return null}}}const Gb=new zb;class vs{constructor(e){this.manager=e!==void 0?e:Gb,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(s,a){n.load(e,s,t,a)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}vs.DEFAULT_MATERIAL_NAME="__DEFAULT";const Si={};class Hb extends Error{constructor(e,t){super(e),this.response=t}}class La extends vs{constructor(e){super(e)}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const a=Zi.get(e);if(a!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(a),this.manager.itemEnd(e)},0),a;if(Si[e]!==void 0){Si[e].push({onLoad:t,onProgress:n,onError:s});return}Si[e]=[],Si[e].push({onLoad:t,onProgress:n,onError:s});const r=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,c=this.responseType;fetch(r).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const h=Si[e],u=l.body.getReader(),A=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),g=A?parseInt(A):0,x=g!==0;let _=0;const p=new ReadableStream({start(d){M();function M(){u.read().then(({done:y,value:v})=>{if(y)d.close();else{_+=v.byteLength;const q=new ProgressEvent("progress",{lengthComputable:x,loaded:_,total:g});for(let H=0,U=h.length;H<U;H++){const Z=h[H];Z.onProgress&&Z.onProgress(q)}d.enqueue(v),M()}},y=>{d.error(y)})}}});return new Response(p)}else throw new Hb(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return l.json();default:if(o===void 0)return l.text();{const u=/charset="?([^;"\s]*)"?/i.exec(o),A=u&&u[1]?u[1].toLowerCase():void 0,g=new TextDecoder(A);return l.arrayBuffer().then(x=>g.decode(x))}}}).then(l=>{Zi.add(e,l);const h=Si[e];delete Si[e];for(let u=0,A=h.length;u<A;u++){const g=h[u];g.onLoad&&g.onLoad(l)}}).catch(l=>{const h=Si[e];if(h===void 0)throw this.manager.itemError(e),l;delete Si[e];for(let u=0,A=h.length;u<A;u++){const g=h[u];g.onError&&g.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class Vb extends vs{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const a=this,r=Zi.get(e);if(r!==void 0)return a.manager.itemStart(e),setTimeout(function(){t&&t(r),a.manager.itemEnd(e)},0),r;const o=za("img");function c(){h(),Zi.add(e,this),t&&t(this),a.manager.itemEnd(e)}function l(u){h(),s&&s(u),a.manager.itemError(e),a.manager.itemEnd(e)}function h(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),a.manager.itemStart(e),o.src=e,o}}class Ml extends vs{constructor(e){super(e)}load(e,t,n,s){const a=new Gt,r=new Vb(this.manager);return r.setCrossOrigin(this.crossOrigin),r.setPath(this.path),r.load(e,function(o){a.image=o,a.needsUpdate=!0,t!==void 0&&t(a)},n,s),a}}class po extends Dt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Re(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class Kh extends po{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Dt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Re(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Xo=new He,Jh=new ne,Zh=new ne;class yl{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ke(512,512),this.map=null,this.mapPass=null,this.matrix=new He,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new gl,this._frameExtents=new ke(1,1),this._viewportCount=1,this._viewports=[new dt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Jh.setFromMatrixPosition(e.matrixWorld),t.position.copy(Jh),Zh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Zh),t.updateMatrixWorld(),Xo.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Xo),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Xo)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Wb extends yl{constructor(){super(new xn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=$s*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,a=e.distance||t.far;(n!==t.fov||s!==t.aspect||a!==t.far)&&(t.fov=n,t.aspect=s,t.far=a,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class jb extends po{constructor(e,t,n=0,s=Math.PI/3,a=0,r=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Dt.DEFAULT_UP),this.updateMatrix(),this.target=new Dt,this.distance=n,this.angle=s,this.penumbra=a,this.decay=r,this.map=null,this.shadow=new Wb}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const $h=new He,ba=new ne,Ko=new ne;class qb extends yl{constructor(){super(new xn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ke(4,2),this._viewportCount=6,this._viewports=[new dt(2,1,1,1),new dt(0,1,1,1),new dt(3,1,1,1),new dt(1,1,1,1),new dt(3,0,1,1),new dt(1,0,1,1)],this._cubeDirections=[new ne(1,0,0),new ne(-1,0,0),new ne(0,0,1),new ne(0,0,-1),new ne(0,1,0),new ne(0,-1,0)],this._cubeUps=[new ne(0,1,0),new ne(0,1,0),new ne(0,1,0),new ne(0,1,0),new ne(0,0,1),new ne(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,s=this.matrix,a=e.distance||n.far;a!==n.far&&(n.far=a,n.updateProjectionMatrix()),ba.setFromMatrixPosition(e.matrixWorld),n.position.copy(ba),Ko.copy(n.position),Ko.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Ko),n.updateMatrixWorld(),s.makeTranslation(-ba.x,-ba.y,-ba.z),$h.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix($h)}}class Yb extends po{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new qb}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Xb extends yl{constructor(){super(new oo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class ff extends po{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Dt.DEFAULT_UP),this.updateMatrix(),this.target=new Dt,this.shadow=new Xb}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Pa{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,s=e.length;n<s;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class Kb extends vs{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const a=this,r=Zi.get(e);if(r!==void 0){if(a.manager.itemStart(e),r.then){r.then(l=>{t&&t(l),a.manager.itemEnd(e)}).catch(l=>{s&&s(l)});return}return setTimeout(function(){t&&t(r),a.manager.itemEnd(e)},0),r}const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader;const c=fetch(e,o).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(a.options,{colorSpaceConversion:"none"}))}).then(function(l){return Zi.add(e,l),t&&t(l),a.manager.itemEnd(e),l}).catch(function(l){s&&s(l),Zi.remove(e),a.manager.itemError(e),a.manager.itemEnd(e)});Zi.add(e,c),a.manager.itemStart(e)}}class Jb{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=eu(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=eu();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function eu(){return performance.now()}const Cl="\\[\\]\\.:\\/",Zb=new RegExp("["+Cl+"]","g"),wl="[^"+Cl+"]",$b="[^"+Cl.replace("\\.","")+"]",ex=/((?:WC+[\/:])*)/.source.replace("WC",wl),tx=/(WCOD+)?/.source.replace("WCOD",$b),nx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",wl),ix=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",wl),sx=new RegExp("^"+ex+tx+nx+ix+"$"),ax=["material","materials","bones","map"];class rx{constructor(e,t,n){const s=n||bt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,a=n.length;s!==a;++s)n[s].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class bt{constructor(e,t,n){this.path=t,this.parsedPath=n||bt.parseTrackName(t),this.node=bt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new bt.Composite(e,t,n):new bt(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Zb,"")}static parseTrackName(e){const t=sx.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){const a=n.nodeName.substring(s+1);ax.indexOf(a)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=a)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(a){for(let r=0;r<a.length;r++){const o=a[r];if(o.name===t||o.uuid===t)return o;const c=n(o.children);if(c)return c}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let s=0,a=n.length;s!==a;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let s=0,a=n.length;s!==a;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let s=0,a=n.length;s!==a;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let s=0,a=n.length;s!==a;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,s=t.propertyName;let a=t.propertyIndex;if(e||(e=bt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}const r=e[s];if(r===void 0){const l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(a!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[a]!==void 0&&(a=e.morphTargetDictionary[a])}c=this.BindingType.ArrayElement,this.resolvedProperty=r,this.propertyIndex=a}else r.fromArray!==void 0&&r.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=r):Array.isArray(r)?(c=this.BindingType.EntireArray,this.resolvedProperty=r):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}bt.Composite=rx;bt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};bt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};bt.prototype.GetterByBindingType=[bt.prototype._getValue_direct,bt.prototype._getValue_array,bt.prototype._getValue_arrayElement,bt.prototype._getValue_toArray];bt.prototype.SetterByBindingTypeAndVersioning=[[bt.prototype._setValue_direct,bt.prototype._setValue_direct_setNeedsUpdate,bt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[bt.prototype._setValue_array,bt.prototype._setValue_array_setNeedsUpdate,bt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[bt.prototype._setValue_arrayElement,bt.prototype._setValue_arrayElement_setNeedsUpdate,bt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[bt.prototype._setValue_fromArray,bt.prototype._setValue_fromArray_setNeedsUpdate,bt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class tu{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(sn(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class ox extends Es{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:rl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=rl);const nu={type:"change"},Sl={type:"start"},df={type:"end"},Sr=new ja,iu=new ji,cx=Math.cos(70*bn.DEG2RAD),jt=new ne,Mn=2*Math.PI,vt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Jo=1e-6;class lx extends ox{constructor(e,t=null){super(e,t),this.state=vt.NONE,this.enabled=!0,this.target=new ne,this.cursor=new ne,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Li.ROTATE,MIDDLE:Li.DOLLY,RIGHT:Li.PAN},this.touches={ONE:Xi.ROTATE,TWO:Xi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new ne,this._lastQuaternion=new wt,this._lastTargetPosition=new ne,this._quat=new wt().setFromUnitVectors(e.up,new ne(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new tu,this._sphericalDelta=new tu,this._scale=1,this._panOffset=new ne,this._rotateStart=new ke,this._rotateEnd=new ke,this._rotateDelta=new ke,this._panStart=new ke,this._panEnd=new ke,this._panDelta=new ke,this._dollyStart=new ke,this._dollyEnd=new ke,this._dollyDelta=new ke,this._dollyDirection=new ne,this._mouse=new ke,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=ux.bind(this),this._onPointerDown=hx.bind(this),this._onPointerUp=fx.bind(this),this._onContextMenu=xx.bind(this),this._onMouseWheel=px.bind(this),this._onKeyDown=mx.bind(this),this._onTouchStart=gx.bind(this),this._onTouchMove=bx.bind(this),this._onMouseDown=dx.bind(this),this._onMouseMove=Ax.bind(this),this._interceptControlDown=_x.bind(this),this._interceptControlUp=Ex.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(nu),this.update(),this.state=vt.NONE}update(e=null){const t=this.object.position;jt.copy(t).sub(this.target),jt.applyQuaternion(this._quat),this._spherical.setFromVector3(jt),this.autoRotate&&this.state===vt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=Mn:n>Math.PI&&(n-=Mn),s<-Math.PI?s+=Mn:s>Math.PI&&(s-=Mn),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let a=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const r=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),a=r!=this._spherical.radius}if(jt.setFromSpherical(this._spherical),jt.applyQuaternion(this._quatInverse),t.copy(this.target).add(jt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let r=null;if(this.object.isPerspectiveCamera){const o=jt.length();r=this._clampDistance(o*this._scale);const c=o-r;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),a=!!c}else if(this.object.isOrthographicCamera){const o=new ne(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),a=c!==this.object.zoom;const l=new ne(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(o),this.object.updateMatrixWorld(),r=jt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;r!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(r).add(this.object.position):(Sr.origin.copy(this.object.position),Sr.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Sr.direction))<cx?this.object.lookAt(this.target):(iu.setFromNormalAndCoplanarPoint(this.object.up,this.target),Sr.intersectPlane(iu,this.target))))}else if(this.object.isOrthographicCamera){const r=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),r!==this.object.zoom&&(this.object.updateProjectionMatrix(),a=!0)}return this._scale=1,this._performCursorZoom=!1,a||this._lastPosition.distanceToSquared(this.object.position)>Jo||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Jo||this._lastTargetPosition.distanceToSquared(this.target)>Jo?(this.dispatchEvent(nu),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Mn/60*this.autoRotateSpeed*e:Mn/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){jt.setFromMatrixColumn(t,0),jt.multiplyScalar(-e),this._panOffset.add(jt)}_panUp(e,t){this.screenSpacePanning===!0?jt.setFromMatrixColumn(t,1):(jt.setFromMatrixColumn(t,0),jt.crossVectors(this.object.up,jt)),jt.multiplyScalar(e),this._panOffset.add(jt)}_pan(e,t){const n=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;jt.copy(s).sub(this.target);let a=jt.length();a*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*a/n.clientHeight,this.object.matrix),this._panUp(2*t*a/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),s=e-n.left,a=t-n.top,r=n.width,o=n.height;this._mouse.x=s/r*2-1,this._mouse.y=-(a/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Mn*this._rotateDelta.x/t.clientHeight),this._rotateUp(Mn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(Mn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(-Mn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(Mn*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(-Mn*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(n,s)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,a=Math.sqrt(n*n+s*s);this._dollyStart.set(0,a)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),s=.5*(e.pageX+n.x),a=.5*(e.pageY+n.y);this._rotateEnd.set(s,a)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Mn*this._rotateDelta.x/t.clientHeight),this._rotateUp(Mn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,a=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,a),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const r=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(r,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new ke,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function hx(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function ux(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function fx(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(df),this.state=vt.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function dx(i){let e;switch(i.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Li.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=vt.DOLLY;break;case Li.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=vt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=vt.ROTATE}break;case Li.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=vt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=vt.PAN}break;default:this.state=vt.NONE}this.state!==vt.NONE&&this.dispatchEvent(Sl)}function Ax(i){switch(this.state){case vt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case vt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case vt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function px(i){this.enabled===!1||this.enableZoom===!1||this.state!==vt.NONE||(i.preventDefault(),this.dispatchEvent(Sl),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(df))}function mx(i){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(i)}function gx(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case Xi.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=vt.TOUCH_ROTATE;break;case Xi.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=vt.TOUCH_PAN;break;default:this.state=vt.NONE}break;case 2:switch(this.touches.TWO){case Xi.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=vt.TOUCH_DOLLY_PAN;break;case Xi.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=vt.TOUCH_DOLLY_ROTATE;break;default:this.state=vt.NONE}break;default:this.state=vt.NONE}this.state!==vt.NONE&&this.dispatchEvent(Sl)}function bx(i){switch(this._trackPointer(i),this.state){case vt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case vt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case vt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case vt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=vt.NONE}}function xx(i){this.enabled!==!1&&i.preventDefault()}function _x(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Ex(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}class vx extends lx{constructor(e,t){super(e,t),this.screenSpacePanning=!1,this.mouseButtons={LEFT:Li.PAN,MIDDLE:Li.DOLLY,RIGHT:Li.ROTATE},this.touches={ONE:Xi.PAN,TWO:Xi.DOLLY_ROTATE}}}function to(i,e=!1){const t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),a={},r={},o=i[0].morphTargetsRelative,c=new xt;let l=0;for(let h=0;h<i.length;++h){const u=i[h];let A=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const g in u.attributes){if(!n.has(g))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+g+'" attribute exists among all geometries, or in none of them.'),null;a[g]===void 0&&(a[g]=[]),a[g].push(u.attributes[g]),A++}if(A!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const g in u.morphAttributes){if(!s.has(g))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;r[g]===void 0&&(r[g]=[]),r[g].push(u.morphAttributes[g])}if(e){let g;if(t)g=u.index.count;else if(u.attributes.position!==void 0)g=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,g,h),l+=g}}if(t){let h=0;const u=[];for(let A=0;A<i.length;++A){const g=i[A].index;for(let x=0;x<g.count;++x)u.push(g.getX(x)+h);h+=i[A].attributes.position.count}c.setIndex(u)}for(const h in a){const u=su(a[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,u)}for(const h in r){const u=r[h][0].length;if(u===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let A=0;A<u;++A){const g=[];for(let _=0;_<r[h].length;++_)g.push(r[h][_][A]);const x=su(g);if(!x)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(x)}}return c}function su(i){let e,t,n,s=-1,a=0;for(let l=0;l<i.length;++l){const h=i[l];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;a+=h.count*t}const r=new e(a),o=new Lt(r,t,n);let c=0;for(let l=0;l<i.length;++l){const h=i[l];if(h.isInterleavedBufferAttribute){const u=c/t;for(let A=0,g=h.count;A<g;A++)for(let x=0;x<t;x++){const _=h.getComponent(A,x);o.setComponent(A+u,x,_)}}else r.set(h.array,c);c+=h.count*t}return s!==void 0&&(o.gpuType=s),o}function au(i,e){if(e===gd)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===Vc||e===ku){let t=i.getIndex();if(t===null){const r=[],o=i.getAttribute("position");if(o!==void 0){for(let c=0;c<o.count;c++)r.push(c);i.setIndex(r),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}const n=t.count-2,s=[];if(e===Vc)for(let r=1;r<=n;r++)s.push(t.getX(0)),s.push(t.getX(r)),s.push(t.getX(r+1));else for(let r=0;r<n;r++)r%2===0?(s.push(t.getX(r)),s.push(t.getX(r+1)),s.push(t.getX(r+2))):(s.push(t.getX(r+2)),s.push(t.getX(r+1)),s.push(t.getX(r)));s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const a=i.clone();return a.setIndex(s),a.clearGroups(),a}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}const Ua={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class Ms{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const Mx=new oo(-1,1,1,-1,0,1);class yx extends xt{constructor(){super(),this.setAttribute("position",new et([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new et([0,2,0,0,2,0],2))}}const Cx=new yx;class mo{constructor(e){this._mesh=new nt(Cx,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Mx)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class go extends Ms{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof Wt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=di.clone(e.uniforms),this.material=new Wt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new mo(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class ru extends Ms{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const s=e.getContext(),a=e.state;a.buffers.color.setMask(!1),a.buffers.depth.setMask(!1),a.buffers.color.setLocked(!0),a.buffers.depth.setLocked(!0);let r,o;this.inverse?(r=0,o=1):(r=1,o=0),a.buffers.stencil.setTest(!0),a.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),a.buffers.stencil.setFunc(s.ALWAYS,r,4294967295),a.buffers.stencil.setClear(o),a.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),a.buffers.color.setLocked(!1),a.buffers.depth.setLocked(!1),a.buffers.color.setMask(!0),a.buffers.depth.setMask(!0),a.buffers.stencil.setLocked(!1),a.buffers.stencil.setFunc(s.EQUAL,1,4294967295),a.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),a.buffers.stencil.setLocked(!0)}}class wx extends Ms{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class Sx{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const n=e.getSize(new ke);this._width=n.width,this._height=n.height,t=new Pn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:rn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new go(Ua),this.copyPass.material.blending=nn,this.clock=new Jb}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let s=0,a=this.passes.length;s<a;s++){const r=this.passes[s];if(r.enabled!==!1){if(r.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),r.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),r.needsSwap){if(n){const o=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),c.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}ru!==void 0&&(r instanceof ru?n=!0:r instanceof wx&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new ke);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let a=0;a<this.passes.length;a++)this.passes[a].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class Ix extends Ms{constructor(e,t,n=null,s=null,a=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=a,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Re}render(e,t,n){const s=e.autoClear;e.autoClear=!1;let a,r;this.overrideMaterial!==null&&(r=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(a=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(a),this.overrideMaterial!==null&&(this.scene.overrideMaterial=r),e.autoClear=s}}const Ir={defines:{PERSPECTIVE_CAMERA:1,SAMPLES:16,NORMAL_VECTOR_TYPE:1,DEPTH_SWIZZLING:"x",SCREEN_SPACE_RADIUS:0,SCREEN_SPACE_RADIUS_SCALE:100,SCENE_CLIP_BOX:0},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new ke},cameraNear:{value:null},cameraFar:{value:null},cameraProjectionMatrix:{value:new He},cameraProjectionMatrixInverse:{value:new He},cameraWorldMatrix:{value:new He},radius:{value:.25},distanceExponent:{value:1},thickness:{value:1},distanceFallOff:{value:1},scale:{value:1},sceneBoxMin:{value:new ne(-1,-1,-1)},sceneBoxMax:{value:new ne(1,1,1)}},vertexShader:`

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
		}`},Tr={defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`
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

		}`},Zo={uniforms:{tDiffuse:{value:null},intensity:{value:1}},vertexShader:`
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
		}`};function Tx(i=5){const e=Math.floor(i)%2===0?Math.floor(i)+1:Math.floor(i),t=Bx(e),n=t.length,s=new Uint8Array(n*4);for(let r=0;r<n;++r){const o=t[r],c=2*Math.PI*o/n,l=new ne(Math.cos(c),Math.sin(c),0).normalize();s[r*4]=(l.x*.5+.5)*255,s[r*4+1]=(l.y*.5+.5)*255,s[r*4+2]=127,s[r*4+3]=255}const a=new qa(s,e,e);return a.wrapS=Un,a.wrapT=Un,a.needsUpdate=!0,a}function Bx(i){const e=Math.floor(i)%2===0?Math.floor(i)+1:Math.floor(i),t=e*e,n=Array(t).fill(0);let s=Math.floor(e/2),a=e-1;for(let r=1;r<=t;){if(s===-1&&a===e?(a=e-2,s=0):(a===e&&(a=0),s<0&&(s=e-1)),n[s*e+a]!==0){a-=2,s++;continue}else n[s*e+a]=r++;a++,s--}return n}const Br={defines:{SAMPLES:16,SAMPLE_VECTORS:Af(16,2,1),NORMAL_VECTOR_TYPE:1,DEPTH_VALUE_SOURCE:0},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new ke},cameraProjectionMatrixInverse:{value:new He},lumaPhi:{value:5},depthPhi:{value:5},normalPhi:{value:5},radius:{value:4},index:{value:0}},vertexShader:`

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
		}`};function Af(i,e,t){const n=Rx(i,e,t);let s="vec3[SAMPLES](";for(let a=0;a<i;a++){const r=n[a];s+=`vec3(${r.x}, ${r.y}, ${r.z})${a<i-1?",":")"}`}return s}function Rx(i,e,t){const n=[];for(let s=0;s<i;s++){const a=2*Math.PI*e*s/i,r=Math.pow(s/(i-1),t);n.push(new ne(Math.cos(a),Math.sin(a),r))}return n}class Dx{constructor(e=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let t=0;t<256;t++)this.p[t]=Math.floor(e.random()*256);this.perm=[];for(let t=0;t<512;t++)this.perm[t]=this.p[t&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}dot(e,t,n){return e[0]*t+e[1]*n}dot3(e,t,n,s){return e[0]*t+e[1]*n+e[2]*s}dot4(e,t,n,s,a){return e[0]*t+e[1]*n+e[2]*s+e[3]*a}noise(e,t){let n,s,a;const r=.5*(Math.sqrt(3)-1),o=(e+t)*r,c=Math.floor(e+o),l=Math.floor(t+o),h=(3-Math.sqrt(3))/6,u=(c+l)*h,A=c-u,g=l-u,x=e-A,_=t-g;let p,d;x>_?(p=1,d=0):(p=0,d=1);const M=x-p+h,y=_-d+h,v=x-1+2*h,q=_-1+2*h,H=c&255,U=l&255,Z=this.perm[H+this.perm[U]]%12,w=this.perm[H+p+this.perm[U+d]]%12,S=this.perm[H+1+this.perm[U+1]]%12;let m=.5-x*x-_*_;m<0?n=0:(m*=m,n=m*m*this.dot(this.grad3[Z],x,_));let I=.5-M*M-y*y;I<0?s=0:(I*=I,s=I*I*this.dot(this.grad3[w],M,y));let Q=.5-v*v-q*q;return Q<0?a=0:(Q*=Q,a=Q*Q*this.dot(this.grad3[S],v,q)),70*(n+s+a)}noise3d(e,t,n){let s,a,r,o;const l=(e+t+n)*.3333333333333333,h=Math.floor(e+l),u=Math.floor(t+l),A=Math.floor(n+l),g=1/6,x=(h+u+A)*g,_=h-x,p=u-x,d=A-x,M=e-_,y=t-p,v=n-d;let q,H,U,Z,w,S;M>=y?y>=v?(q=1,H=0,U=0,Z=1,w=1,S=0):M>=v?(q=1,H=0,U=0,Z=1,w=0,S=1):(q=0,H=0,U=1,Z=1,w=0,S=1):y<v?(q=0,H=0,U=1,Z=0,w=1,S=1):M<v?(q=0,H=1,U=0,Z=0,w=1,S=1):(q=0,H=1,U=0,Z=1,w=1,S=0);const m=M-q+g,I=y-H+g,Q=v-U+g,K=M-Z+2*g,Y=y-w+2*g,te=v-S+2*g,X=M-1+3*g,V=y-1+3*g,ue=v-1+3*g,ae=h&255,le=u&255,ge=A&255,Ee=this.perm[ae+this.perm[le+this.perm[ge]]]%12,$=this.perm[ae+q+this.perm[le+H+this.perm[ge+U]]]%12,oe=this.perm[ae+Z+this.perm[le+w+this.perm[ge+S]]]%12,ee=this.perm[ae+1+this.perm[le+1+this.perm[ge+1]]]%12;let Ae=.6-M*M-y*y-v*v;Ae<0?s=0:(Ae*=Ae,s=Ae*Ae*this.dot3(this.grad3[Ee],M,y,v));let W=.6-m*m-I*I-Q*Q;W<0?a=0:(W*=W,a=W*W*this.dot3(this.grad3[$],m,I,Q));let re=.6-K*K-Y*Y-te*te;re<0?r=0:(re*=re,r=re*re*this.dot3(this.grad3[oe],K,Y,te));let he=.6-X*X-V*V-ue*ue;return he<0?o=0:(he*=he,o=he*he*this.dot3(this.grad3[ee],X,V,ue)),32*(s+a+r+o)}noise4d(e,t,n,s){const a=this.grad4,r=this.simplex,o=this.perm,c=(Math.sqrt(5)-1)/4,l=(5-Math.sqrt(5))/20;let h,u,A,g,x;const _=(e+t+n+s)*c,p=Math.floor(e+_),d=Math.floor(t+_),M=Math.floor(n+_),y=Math.floor(s+_),v=(p+d+M+y)*l,q=p-v,H=d-v,U=M-v,Z=y-v,w=e-q,S=t-H,m=n-U,I=s-Z,Q=w>S?32:0,K=w>m?16:0,Y=S>m?8:0,te=w>I?4:0,X=S>I?2:0,V=m>I?1:0,ue=Q+K+Y+te+X+V,ae=r[ue][0]>=3?1:0,le=r[ue][1]>=3?1:0,ge=r[ue][2]>=3?1:0,Ee=r[ue][3]>=3?1:0,$=r[ue][0]>=2?1:0,oe=r[ue][1]>=2?1:0,ee=r[ue][2]>=2?1:0,Ae=r[ue][3]>=2?1:0,W=r[ue][0]>=1?1:0,re=r[ue][1]>=1?1:0,he=r[ue][2]>=1?1:0,ce=r[ue][3]>=1?1:0,fe=w-ae+l,_e=S-le+l,f=m-ge+l,B=I-Ee+l,j=w-$+2*l,L=S-oe+2*l,N=m-ee+2*l,O=I-Ae+2*l,D=w-W+3*l,E=S-re+3*l,b=m-he+3*l,C=I-ce+3*l,T=w-1+4*l,R=S-1+4*l,F=m-1+4*l,k=I-1+4*l,G=p&255,P=d&255,J=M&255,ie=y&255,de=o[G+o[P+o[J+o[ie]]]]%32,ye=o[G+ae+o[P+le+o[J+ge+o[ie+Ee]]]]%32,me=o[G+$+o[P+oe+o[J+ee+o[ie+Ae]]]]%32,pe=o[G+W+o[P+re+o[J+he+o[ie+ce]]]]%32,ve=o[G+1+o[P+1+o[J+1+o[ie+1]]]]%32;let Se=.6-w*w-S*S-m*m-I*I;Se<0?h=0:(Se*=Se,h=Se*Se*this.dot4(a[de],w,S,m,I));let be=.6-fe*fe-_e*_e-f*f-B*B;be<0?u=0:(be*=be,u=be*be*this.dot4(a[ye],fe,_e,f,B));let se=.6-j*j-L*L-N*N-O*O;se<0?A=0:(se*=se,A=se*se*this.dot4(a[me],j,L,N,O));let Be=.6-D*D-E*E-b*b-C*C;Be<0?g=0:(Be*=Be,g=Be*Be*this.dot4(a[pe],D,E,b,C));let xe=.6-T*T-R*R-F*F-k*k;return xe<0?x=0:(xe*=xe,x=xe*xe*this.dot4(a[ve],T,R,F,k)),27*(h+u+A+g+x)}}class hi extends Ms{constructor(e,t,n,s,a,r,o){super(),this.width=n!==void 0?n:512,this.height=s!==void 0?s:512,this.clear=!0,this.camera=t,this.scene=e,this.output=0,this._renderGBuffer=!0,this._visibilityCache=new Map,this.blendIntensity=1,this.pdRings=2,this.pdRadiusExponent=2,this.pdSamples=16,this.gtaoNoiseTexture=Tx(),this.pdNoiseTexture=this.generateNoise(),this.gtaoRenderTarget=new Pn(this.width,this.height,{type:rn}),this.pdRenderTarget=this.gtaoRenderTarget.clone(),this.gtaoMaterial=new Wt({defines:Object.assign({},Ir.defines),uniforms:di.clone(Ir.uniforms),vertexShader:Ir.vertexShader,fragmentShader:Ir.fragmentShader,blending:nn,depthTest:!1,depthWrite:!1}),this.gtaoMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.gtaoMaterial.uniforms.tNoise.value=this.gtaoNoiseTexture,this.gtaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.normalMaterial=new Rb,this.normalMaterial.blending=nn,this.pdMaterial=new Wt({defines:Object.assign({},Br.defines),uniforms:di.clone(Br.uniforms),vertexShader:Br.vertexShader,fragmentShader:Br.fragmentShader,depthTest:!1,depthWrite:!1}),this.pdMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.pdMaterial.uniforms.tNoise.value=this.pdNoiseTexture,this.pdMaterial.uniforms.resolution.value.set(this.width,this.height),this.pdMaterial.uniforms.lumaPhi.value=10,this.pdMaterial.uniforms.depthPhi.value=2,this.pdMaterial.uniforms.normalPhi.value=3,this.pdMaterial.uniforms.radius.value=8,this.depthRenderMaterial=new Wt({defines:Object.assign({},Tr.defines),uniforms:di.clone(Tr.uniforms),vertexShader:Tr.vertexShader,fragmentShader:Tr.fragmentShader,blending:nn}),this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new Wt({uniforms:di.clone(Ua.uniforms),vertexShader:Ua.vertexShader,fragmentShader:Ua.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:mc,blendDst:Ma,blendEquation:ti,blendSrcAlpha:pc,blendDstAlpha:Ma,blendEquationAlpha:ti}),this.blendMaterial=new Wt({uniforms:di.clone(Zo.uniforms),vertexShader:Zo.vertexShader,fragmentShader:Zo.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blending:Mu,blendSrc:mc,blendDst:Ma,blendEquation:ti,blendSrcAlpha:pc,blendDstAlpha:Ma,blendEquationAlpha:ti}),this.fsQuad=new mo(null),this.originalClearColor=new Re,this.setGBuffer(a?a.depthTexture:void 0,a?a.normalTexture:void 0),r!==void 0&&this.updateGtaoMaterial(r),o!==void 0&&this.updatePdMaterial(o)}dispose(){this.gtaoNoiseTexture.dispose(),this.pdNoiseTexture.dispose(),this.normalRenderTarget.dispose(),this.gtaoRenderTarget.dispose(),this.pdRenderTarget.dispose(),this.normalMaterial.dispose(),this.pdMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this.fsQuad.dispose()}get gtaoMap(){return this.pdRenderTarget.texture}setGBuffer(e,t){e!==void 0?(this.depthTexture=e,this.normalTexture=t,this._renderGBuffer=!1):(this.depthTexture=new xl,this.depthTexture.format=bs,this.depthTexture.type=gs,this.normalRenderTarget=new Pn(this.width,this.height,{minFilter:cn,magFilter:cn,type:rn,depthTexture:this.depthTexture}),this.normalTexture=this.normalRenderTarget.texture,this._renderGBuffer=!0);const n=this.normalTexture?1:0,s=this.depthTexture===this.normalTexture?"w":"x";this.gtaoMaterial.defines.NORMAL_VECTOR_TYPE=n,this.gtaoMaterial.defines.DEPTH_SWIZZLING=s,this.gtaoMaterial.uniforms.tNormal.value=this.normalTexture,this.gtaoMaterial.uniforms.tDepth.value=this.depthTexture,this.pdMaterial.defines.NORMAL_VECTOR_TYPE=n,this.pdMaterial.defines.DEPTH_SWIZZLING=s,this.pdMaterial.uniforms.tNormal.value=this.normalTexture,this.pdMaterial.uniforms.tDepth.value=this.depthTexture,this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture}setSceneClipBox(e){e?(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX!==1,this.gtaoMaterial.defines.SCENE_CLIP_BOX=1,this.gtaoMaterial.uniforms.sceneBoxMin.value.copy(e.min),this.gtaoMaterial.uniforms.sceneBoxMax.value.copy(e.max)):(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX===0,this.gtaoMaterial.defines.SCENE_CLIP_BOX=0)}updateGtaoMaterial(e){e.radius!==void 0&&(this.gtaoMaterial.uniforms.radius.value=e.radius),e.distanceExponent!==void 0&&(this.gtaoMaterial.uniforms.distanceExponent.value=e.distanceExponent),e.thickness!==void 0&&(this.gtaoMaterial.uniforms.thickness.value=e.thickness),e.distanceFallOff!==void 0&&(this.gtaoMaterial.uniforms.distanceFallOff.value=e.distanceFallOff,this.gtaoMaterial.needsUpdate=!0),e.scale!==void 0&&(this.gtaoMaterial.uniforms.scale.value=e.scale),e.samples!==void 0&&e.samples!==this.gtaoMaterial.defines.SAMPLES&&(this.gtaoMaterial.defines.SAMPLES=e.samples,this.gtaoMaterial.needsUpdate=!0),e.screenSpaceRadius!==void 0&&(e.screenSpaceRadius?1:0)!==this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS&&(this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS=e.screenSpaceRadius?1:0,this.gtaoMaterial.needsUpdate=!0)}updatePdMaterial(e){let t=!1;e.lumaPhi!==void 0&&(this.pdMaterial.uniforms.lumaPhi.value=e.lumaPhi),e.depthPhi!==void 0&&(this.pdMaterial.uniforms.depthPhi.value=e.depthPhi),e.normalPhi!==void 0&&(this.pdMaterial.uniforms.normalPhi.value=e.normalPhi),e.radius!==void 0&&e.radius!==this.radius&&(this.pdMaterial.uniforms.radius.value=e.radius),e.radiusExponent!==void 0&&e.radiusExponent!==this.pdRadiusExponent&&(this.pdRadiusExponent=e.radiusExponent,t=!0),e.rings!==void 0&&e.rings!==this.pdRings&&(this.pdRings=e.rings,t=!0),e.samples!==void 0&&e.samples!==this.pdSamples&&(this.pdSamples=e.samples,t=!0),t&&(this.pdMaterial.defines.SAMPLES=this.pdSamples,this.pdMaterial.defines.SAMPLE_VECTORS=Af(this.pdSamples,this.pdRings,this.pdRadiusExponent),this.pdMaterial.needsUpdate=!0)}render(e,t,n){switch(this._renderGBuffer&&(this.overrideVisibility(),this.renderOverride(e,this.normalMaterial,this.normalRenderTarget,7829503,1),this.restoreVisibility()),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.gtaoMaterial.uniforms.cameraWorldMatrix.value.copy(this.camera.matrixWorld),this.renderPass(e,this.gtaoMaterial,this.gtaoRenderTarget,16777215,1),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.renderPass(e,this.pdMaterial,this.pdRenderTarget,16777215,1),this.output){case hi.OUTPUT.Off:break;case hi.OUTPUT.Diffuse:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=nn,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case hi.OUTPUT.AO:this.copyMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.copyMaterial.blending=nn,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case hi.OUTPUT.Denoise:this.copyMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.copyMaterial.blending=nn,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case hi.OUTPUT.Depth:this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.renderPass(e,this.depthRenderMaterial,this.renderToScreen?null:t);break;case hi.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=nn,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case hi.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=nn,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t),this.blendMaterial.uniforms.intensity.value=this.blendIntensity,this.blendMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.renderPass(e,this.blendMaterial,this.renderToScreen?null:t);break;default:console.warn("THREE.GTAOPass: Unknown output type.")}}renderPass(e,t,n,s,a){e.getClearColor(this.originalClearColor);const r=e.getClearAlpha(),o=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,s!=null&&(e.setClearColor(s),e.setClearAlpha(a||0),e.clear()),this.fsQuad.material=t,this.fsQuad.render(e),e.autoClear=o,e.setClearColor(this.originalClearColor),e.setClearAlpha(r)}renderOverride(e,t,n,s,a){e.getClearColor(this.originalClearColor);const r=e.getClearAlpha(),o=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,s=t.clearColor||s,a=t.clearAlpha||a,s!=null&&(e.setClearColor(s),e.setClearAlpha(a||0),e.clear()),this.scene.overrideMaterial=t,e.render(this.scene,this.camera),this.scene.overrideMaterial=null,e.autoClear=o,e.setClearColor(this.originalClearColor),e.setClearAlpha(r)}setSize(e,t){this.width=e,this.height=t,this.gtaoRenderTarget.setSize(e,t),this.normalRenderTarget.setSize(e,t),this.pdRenderTarget.setSize(e,t),this.gtaoMaterial.uniforms.resolution.value.set(e,t),this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.pdMaterial.uniforms.resolution.value.set(e,t),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse)}overrideVisibility(){const e=this.scene,t=this._visibilityCache;e.traverse(function(n){t.set(n,n.visible),(n.isPoints||n.isLine)&&(n.visible=!1)})}restoreVisibility(){const e=this.scene,t=this._visibilityCache;e.traverse(function(n){const s=t.get(n);n.visible=s}),t.clear()}generateNoise(e=64){const t=new Dx,n=e*e*4,s=new Uint8Array(n);for(let r=0;r<e;r++)for(let o=0;o<e;o++){const c=r,l=o;s[(r*e+o)*4]=(t.noise(c,l)*.5+.5)*255,s[(r*e+o)*4+1]=(t.noise(c+e,l)*.5+.5)*255,s[(r*e+o)*4+2]=(t.noise(c,l+e)*.5+.5)*255,s[(r*e+o)*4+3]=(t.noise(c+e,l+e)*.5+.5)*255}const a=new qa(s,e,e,Yt,qt);return a.wrapS=Un,a.wrapT=Un,a.needsUpdate=!0,a}}hi.OUTPUT={Off:-1,Default:0,Diffuse:1,Depth:2,Normal:3,AO:4,Denoise:5};const Lx={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Re(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class aa extends Ms{constructor(e,t,n,s){super(),this.strength=t!==void 0?t:1,this.radius=n,this.threshold=s,this.resolution=e!==void 0?new ke(e.x,e.y):new ke(256,256),this.clearColor=new Re(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let a=Math.round(this.resolution.x/2),r=Math.round(this.resolution.y/2);this.renderTargetBright=new Pn(a,r,{type:rn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){const A=new Pn(a,r,{type:rn});A.texture.name="UnrealBloomPass.h"+u,A.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(A);const g=new Pn(a,r,{type:rn});g.texture.name="UnrealBloomPass.v"+u,g.texture.generateMipmaps=!1,this.renderTargetsVertical.push(g),a=Math.round(a/2),r=Math.round(r/2)}const o=Lx;this.highPassUniforms=di.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Wt({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];const c=[3,5,7,9,11];a=Math.round(this.resolution.x/2),r=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(c[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new ke(1/a,1/r),a=Math.round(a/2),r=Math.round(r/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const l=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=l,this.bloomTintColors=[new ne(1,1,1),new ne(1,1,1),new ne(1,1,1),new ne(1,1,1),new ne(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const h=Ua;this.copyUniforms=di.clone(h.uniforms),this.blendMaterial=new Wt({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:fc,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Re,this.oldClearAlpha=1,this.basic=new Ji,this.fsQuad=new mo(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(n,s);for(let a=0;a<this.nMips;a++)this.renderTargetsHorizontal[a].setSize(n,s),this.renderTargetsVertical[a].setSize(n,s),this.separableBlurMaterials[a].uniforms.invSize.value=new ke(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(e,t,n,s,a){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const r=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),a&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let o=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this.fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[c].uniforms.direction.value=aa.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[c]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=aa.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[c]),e.clear(),this.fsQuad.render(e),o=this.renderTargetsVertical[c];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,a&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=r}getSeperableBlurMaterial(e){const t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new Wt({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new ke(.5,.5)},direction:{value:new ke(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(e){return new Wt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}}aa.BlurDirectionX=new ke(1,0);aa.BlurDirectionY=new ke(0,1);const Px={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class Ux extends Ms{constructor(){super();const e=Px;this.uniforms=di.clone(e.uniforms),this.material=new Bb({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new mo(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},ht.getTransfer(this._outputColorSpace)===mt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===yu?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Cu?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===wu?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===ll?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Su?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Iu&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Fx{constructor(e=4){this.pool=e,this.queue=[],this.workers=[],this.workersResolve=[],this.workerStatus=0}_initWorker(e){if(!this.workers[e]){const t=this.workerCreator();t.addEventListener("message",this._onMessage.bind(this,e)),this.workers[e]=t}}_getIdleWorker(){for(let e=0;e<this.pool;e++)if(!(this.workerStatus&1<<e))return e;return-1}_onMessage(e,t){const n=this.workersResolve[e];if(n&&n(t),this.queue.length){const{resolve:s,msg:a,transfer:r}=this.queue.shift();this.workersResolve[e]=s,this.workers[e].postMessage(a,r)}else this.workerStatus^=1<<e}setWorkerCreator(e){this.workerCreator=e}setWorkerLimit(e){this.pool=e}postMessage(e,t){return new Promise(n=>{const s=this._getIdleWorker();s!==-1?(this._initWorker(s),this.workerStatus|=1<<s,this.workersResolve[s]=n,this.workers[s].postMessage(e,t)):this.queue.push({resolve:n,msg:e,transfer:t})})}dispose(){this.workers.forEach(e=>e.terminate()),this.workersResolve.length=0,this.workers.length=0,this.queue.length=0,this.workerStatus=0}}const Nx=0,ou=2,Qx=1,cu=2,kx=0,Ox=1,zx=10,Gx=0,pf=9,mf=15,gf=16,bf=22,xf=37,_f=43,Ef=76,vf=83,Mf=97,yf=100,Cf=103,wf=109,Sf=165,If=166,Il=1000066e3;class Hx{constructor(){this.vkFormat=0,this.typeSize=1,this.pixelWidth=0,this.pixelHeight=0,this.pixelDepth=0,this.layerCount=0,this.faceCount=1,this.supercompressionScheme=0,this.levels=[],this.dataFormatDescriptor=[{vendorId:0,descriptorType:0,descriptorBlockSize:0,versionNumber:2,colorModel:0,colorPrimaries:1,transferFunction:2,flags:0,texelBlockDimension:[0,0,0,0],bytesPlane:[0,0,0,0,0,0,0,0],samples:[]}],this.keyValue={},this.globalData=null}}class xa{constructor(e,t,n,s){this._dataView=void 0,this._littleEndian=void 0,this._offset=void 0,this._dataView=new DataView(e.buffer,e.byteOffset+t,n),this._littleEndian=s,this._offset=0}_nextUint8(){const e=this._dataView.getUint8(this._offset);return this._offset+=1,e}_nextUint16(){const e=this._dataView.getUint16(this._offset,this._littleEndian);return this._offset+=2,e}_nextUint32(){const e=this._dataView.getUint32(this._offset,this._littleEndian);return this._offset+=4,e}_nextUint64(){const e=this._dataView.getUint32(this._offset,this._littleEndian)+4294967296*this._dataView.getUint32(this._offset+4,this._littleEndian);return this._offset+=8,e}_nextInt32(){const e=this._dataView.getInt32(this._offset,this._littleEndian);return this._offset+=4,e}_nextUint8Array(e){const t=new Uint8Array(this._dataView.buffer,this._dataView.byteOffset+this._offset,e);return this._offset+=e,t}_skip(e){return this._offset+=e,this}_scan(e,t){t===void 0&&(t=0);const n=this._offset;let s=0;for(;this._dataView.getUint8(this._offset)!==t&&s<e;)s++,this._offset++;return s<e&&this._offset++,new Uint8Array(this._dataView.buffer,this._dataView.byteOffset+n,s)}}const mn=[171,75,84,88,32,50,48,187,13,10,26,10];function lu(i){return new TextDecoder().decode(i)}function Vx(i){const e=new Uint8Array(i.buffer,i.byteOffset,mn.length);if(e[0]!==mn[0]||e[1]!==mn[1]||e[2]!==mn[2]||e[3]!==mn[3]||e[4]!==mn[4]||e[5]!==mn[5]||e[6]!==mn[6]||e[7]!==mn[7]||e[8]!==mn[8]||e[9]!==mn[9]||e[10]!==mn[10]||e[11]!==mn[11])throw new Error("Missing KTX 2.0 identifier.");const t=new Hx,n=17*Uint32Array.BYTES_PER_ELEMENT,s=new xa(i,mn.length,n,!0);t.vkFormat=s._nextUint32(),t.typeSize=s._nextUint32(),t.pixelWidth=s._nextUint32(),t.pixelHeight=s._nextUint32(),t.pixelDepth=s._nextUint32(),t.layerCount=s._nextUint32(),t.faceCount=s._nextUint32();const a=s._nextUint32();t.supercompressionScheme=s._nextUint32();const r=s._nextUint32(),o=s._nextUint32(),c=s._nextUint32(),l=s._nextUint32(),h=s._nextUint64(),u=s._nextUint64(),A=new xa(i,mn.length+n,3*a*8,!0);for(let X=0;X<a;X++)t.levels.push({levelData:new Uint8Array(i.buffer,i.byteOffset+A._nextUint64(),A._nextUint64()),uncompressedByteLength:A._nextUint64()});const g=new xa(i,r,o,!0),x={vendorId:g._skip(4)._nextUint16(),descriptorType:g._nextUint16(),versionNumber:g._nextUint16(),descriptorBlockSize:g._nextUint16(),colorModel:g._nextUint8(),colorPrimaries:g._nextUint8(),transferFunction:g._nextUint8(),flags:g._nextUint8(),texelBlockDimension:[g._nextUint8(),g._nextUint8(),g._nextUint8(),g._nextUint8()],bytesPlane:[g._nextUint8(),g._nextUint8(),g._nextUint8(),g._nextUint8(),g._nextUint8(),g._nextUint8(),g._nextUint8(),g._nextUint8()],samples:[]},_=(x.descriptorBlockSize/4-6)/4;for(let X=0;X<_;X++){const V={bitOffset:g._nextUint16(),bitLength:g._nextUint8(),channelType:g._nextUint8(),samplePosition:[g._nextUint8(),g._nextUint8(),g._nextUint8(),g._nextUint8()],sampleLower:-1/0,sampleUpper:1/0};64&V.channelType?(V.sampleLower=g._nextInt32(),V.sampleUpper=g._nextInt32()):(V.sampleLower=g._nextUint32(),V.sampleUpper=g._nextUint32()),x.samples[X]=V}t.dataFormatDescriptor.length=0,t.dataFormatDescriptor.push(x);const p=new xa(i,c,l,!0);for(;p._offset<l;){const X=p._nextUint32(),V=p._scan(X),ue=lu(V);if(t.keyValue[ue]=p._nextUint8Array(X-V.byteLength-1),ue.match(/^ktx/i)){const ae=lu(t.keyValue[ue]);t.keyValue[ue]=ae.substring(0,ae.lastIndexOf("\0"))}p._skip(X%4?4-X%4:0)}if(u<=0)return t;const d=new xa(i,h,u,!0),M=d._nextUint16(),y=d._nextUint16(),v=d._nextUint32(),q=d._nextUint32(),H=d._nextUint32(),U=d._nextUint32(),Z=[];for(let X=0;X<a;X++)Z.push({imageFlags:d._nextUint32(),rgbSliceByteOffset:d._nextUint32(),rgbSliceByteLength:d._nextUint32(),alphaSliceByteOffset:d._nextUint32(),alphaSliceByteLength:d._nextUint32()});const w=h+d._offset,S=w+v,m=S+q,I=m+H,Q=new Uint8Array(i.buffer,i.byteOffset+w,v),K=new Uint8Array(i.buffer,i.byteOffset+S,q),Y=new Uint8Array(i.buffer,i.byteOffset+m,H),te=new Uint8Array(i.buffer,i.byteOffset+I,U);return t.globalData={endpointCount:M,selectorCount:y,imageDescs:Z,endpointsData:Q,selectorsData:K,tablesData:Y,extendedData:te},t}let $o,Ti,Jc;const ec={env:{emscripten_notify_memory_growth:function(i){Jc=new Uint8Array(Ti.exports.memory.buffer)}}};class Wx{init(){return $o||($o=typeof fetch<"u"?fetch("data:application/wasm;base64,"+hu).then(e=>e.arrayBuffer()).then(e=>WebAssembly.instantiate(e,ec)).then(this._init):WebAssembly.instantiate(Buffer.from(hu,"base64"),ec).then(this._init),$o)}_init(e){Ti=e.instance,ec.env.emscripten_notify_memory_growth(0)}decode(e,t=0){if(!Ti)throw new Error("ZSTDDecoder: Await .init() before decoding.");const n=e.byteLength,s=Ti.exports.malloc(n);Jc.set(e,s),t=t||Number(Ti.exports.ZSTD_findDecompressedSize(s,n));const a=Ti.exports.malloc(t),r=Ti.exports.ZSTD_decompress(a,t,s,n),o=Jc.slice(a,a+r);return Ti.exports.free(s),Ti.exports.free(a),o}}const hu="AGFzbQEAAAABpQEVYAF/AX9gAn9/AGADf39/AX9gBX9/f39/AX9gAX8AYAJ/fwF/YAR/f39/AX9gA39/fwBgBn9/f39/fwF/YAd/f39/f39/AX9gAn9/AX5gAn5+AX5gAABgBX9/f39/AGAGf39/f39/AGAIf39/f39/f38AYAl/f39/f39/f38AYAABf2AIf39/f39/f38Bf2ANf39/f39/f39/f39/fwF/YAF/AX4CJwEDZW52H2Vtc2NyaXB0ZW5fbm90aWZ5X21lbW9yeV9ncm93dGgABANpaAEFAAAFAgEFCwACAQABAgIFBQcAAwABDgsBAQcAEhMHAAUBDAQEAAANBwQCAgYCBAgDAwMDBgEACQkHBgICAAYGAgQUBwYGAwIGAAMCAQgBBwUGCgoEEQAEBAEIAwgDBQgDEA8IAAcABAUBcAECAgUEAQCAAgYJAX8BQaCgwAILB2AHBm1lbW9yeQIABm1hbGxvYwAoBGZyZWUAJgxaU1REX2lzRXJyb3IAaBlaU1REX2ZpbmREZWNvbXByZXNzZWRTaXplAFQPWlNURF9kZWNvbXByZXNzAEoGX3N0YXJ0ACQJBwEAQQELASQKussBaA8AIAAgACgCBCABajYCBAsZACAAKAIAIAAoAgRBH3F0QQAgAWtBH3F2CwgAIABBiH9LC34BBH9BAyEBIAAoAgQiA0EgTQRAIAAoAggiASAAKAIQTwRAIAAQDQ8LIAAoAgwiAiABRgRAQQFBAiADQSBJGw8LIAAgASABIAJrIANBA3YiBCABIARrIAJJIgEbIgJrIgQ2AgggACADIAJBA3RrNgIEIAAgBCgAADYCAAsgAQsUAQF/IAAgARACIQIgACABEAEgAgv3AQECfyACRQRAIABCADcCACAAQQA2AhAgAEIANwIIQbh/DwsgACABNgIMIAAgAUEEajYCECACQQRPBEAgACABIAJqIgFBfGoiAzYCCCAAIAMoAAA2AgAgAUF/ai0AACIBBEAgAEEIIAEQFGs2AgQgAg8LIABBADYCBEF/DwsgACABNgIIIAAgAS0AACIDNgIAIAJBfmoiBEEBTQRAIARBAWtFBEAgACABLQACQRB0IANyIgM2AgALIAAgAS0AAUEIdCADajYCAAsgASACakF/ai0AACIBRQRAIABBADYCBEFsDwsgAEEoIAEQFCACQQN0ams2AgQgAgsWACAAIAEpAAA3AAAgACABKQAINwAICy8BAX8gAUECdEGgHWooAgAgACgCAEEgIAEgACgCBGprQR9xdnEhAiAAIAEQASACCyEAIAFCz9bTvtLHq9lCfiAAfEIfiUKHla+vmLbem55/fgsdAQF/IAAoAgggACgCDEYEfyAAKAIEQSBGBUEACwuCBAEDfyACQYDAAE8EQCAAIAEgAhBnIAAPCyAAIAJqIQMCQCAAIAFzQQNxRQRAAkAgAkEBSARAIAAhAgwBCyAAQQNxRQRAIAAhAgwBCyAAIQIDQCACIAEtAAA6AAAgAUEBaiEBIAJBAWoiAiADTw0BIAJBA3ENAAsLAkAgA0F8cSIEQcAASQ0AIAIgBEFAaiIFSw0AA0AgAiABKAIANgIAIAIgASgCBDYCBCACIAEoAgg2AgggAiABKAIMNgIMIAIgASgCEDYCECACIAEoAhQ2AhQgAiABKAIYNgIYIAIgASgCHDYCHCACIAEoAiA2AiAgAiABKAIkNgIkIAIgASgCKDYCKCACIAEoAiw2AiwgAiABKAIwNgIwIAIgASgCNDYCNCACIAEoAjg2AjggAiABKAI8NgI8IAFBQGshASACQUBrIgIgBU0NAAsLIAIgBE8NAQNAIAIgASgCADYCACABQQRqIQEgAkEEaiICIARJDQALDAELIANBBEkEQCAAIQIMAQsgA0F8aiIEIABJBEAgACECDAELIAAhAgNAIAIgAS0AADoAACACIAEtAAE6AAEgAiABLQACOgACIAIgAS0AAzoAAyABQQRqIQEgAkEEaiICIARNDQALCyACIANJBEADQCACIAEtAAA6AAAgAUEBaiEBIAJBAWoiAiADRw0ACwsgAAsMACAAIAEpAAA3AAALQQECfyAAKAIIIgEgACgCEEkEQEEDDwsgACAAKAIEIgJBB3E2AgQgACABIAJBA3ZrIgE2AgggACABKAAANgIAQQALDAAgACABKAIANgAAC/cCAQJ/AkAgACABRg0AAkAgASACaiAASwRAIAAgAmoiBCABSw0BCyAAIAEgAhALDwsgACABc0EDcSEDAkACQCAAIAFJBEAgAwRAIAAhAwwDCyAAQQNxRQRAIAAhAwwCCyAAIQMDQCACRQ0EIAMgAS0AADoAACABQQFqIQEgAkF/aiECIANBAWoiA0EDcQ0ACwwBCwJAIAMNACAEQQNxBEADQCACRQ0FIAAgAkF/aiICaiIDIAEgAmotAAA6AAAgA0EDcQ0ACwsgAkEDTQ0AA0AgACACQXxqIgJqIAEgAmooAgA2AgAgAkEDSw0ACwsgAkUNAgNAIAAgAkF/aiICaiABIAJqLQAAOgAAIAINAAsMAgsgAkEDTQ0AIAIhBANAIAMgASgCADYCACABQQRqIQEgA0EEaiEDIARBfGoiBEEDSw0ACyACQQNxIQILIAJFDQADQCADIAEtAAA6AAAgA0EBaiEDIAFBAWohASACQX9qIgINAAsLIAAL8wICAn8BfgJAIAJFDQAgACACaiIDQX9qIAE6AAAgACABOgAAIAJBA0kNACADQX5qIAE6AAAgACABOgABIANBfWogAToAACAAIAE6AAIgAkEHSQ0AIANBfGogAToAACAAIAE6AAMgAkEJSQ0AIABBACAAa0EDcSIEaiIDIAFB/wFxQYGChAhsIgE2AgAgAyACIARrQXxxIgRqIgJBfGogATYCACAEQQlJDQAgAyABNgIIIAMgATYCBCACQXhqIAE2AgAgAkF0aiABNgIAIARBGUkNACADIAE2AhggAyABNgIUIAMgATYCECADIAE2AgwgAkFwaiABNgIAIAJBbGogATYCACACQWhqIAE2AgAgAkFkaiABNgIAIAQgA0EEcUEYciIEayICQSBJDQAgAa0iBUIghiAFhCEFIAMgBGohAQNAIAEgBTcDGCABIAU3AxAgASAFNwMIIAEgBTcDACABQSBqIQEgAkFgaiICQR9LDQALCyAACy8BAn8gACgCBCAAKAIAQQJ0aiICLQACIQMgACACLwEAIAEgAi0AAxAIajYCACADCy8BAn8gACgCBCAAKAIAQQJ0aiICLQACIQMgACACLwEAIAEgAi0AAxAFajYCACADCx8AIAAgASACKAIEEAg2AgAgARAEGiAAIAJBCGo2AgQLCAAgAGdBH3MLugUBDX8jAEEQayIKJAACfyAEQQNNBEAgCkEANgIMIApBDGogAyAEEAsaIAAgASACIApBDGpBBBAVIgBBbCAAEAMbIAAgACAESxsMAQsgAEEAIAEoAgBBAXRBAmoQECENQVQgAygAACIGQQ9xIgBBCksNABogAiAAQQVqNgIAIAMgBGoiAkF8aiEMIAJBeWohDiACQXtqIRAgAEEGaiELQQQhBSAGQQR2IQRBICAAdCIAQQFyIQkgASgCACEPQQAhAiADIQYCQANAIAlBAkggAiAPS3JFBEAgAiEHAkAgCARAA0AgBEH//wNxQf//A0YEQCAHQRhqIQcgBiAQSQR/IAZBAmoiBigAACAFdgUgBUEQaiEFIARBEHYLIQQMAQsLA0AgBEEDcSIIQQNGBEAgBUECaiEFIARBAnYhBCAHQQNqIQcMAQsLIAcgCGoiByAPSw0EIAVBAmohBQNAIAIgB0kEQCANIAJBAXRqQQA7AQAgAkEBaiECDAELCyAGIA5LQQAgBiAFQQN1aiIHIAxLG0UEQCAHKAAAIAVBB3EiBXYhBAwCCyAEQQJ2IQQLIAYhBwsCfyALQX9qIAQgAEF/anEiBiAAQQF0QX9qIgggCWsiEUkNABogBCAIcSIEQQAgESAEIABIG2shBiALCyEIIA0gAkEBdGogBkF/aiIEOwEAIAlBASAGayAEIAZBAUgbayEJA0AgCSAASARAIABBAXUhACALQX9qIQsMAQsLAn8gByAOS0EAIAcgBSAIaiIFQQN1aiIGIAxLG0UEQCAFQQdxDAELIAUgDCIGIAdrQQN0awshBSACQQFqIQIgBEUhCCAGKAAAIAVBH3F2IQQMAQsLQWwgCUEBRyAFQSBKcg0BGiABIAJBf2o2AgAgBiAFQQdqQQN1aiADawwBC0FQCyEAIApBEGokACAACwkAQQFBBSAAGwsMACAAIAEoAAA2AAALqgMBCn8jAEHwAGsiCiQAIAJBAWohDiAAQQhqIQtBgIAEIAVBf2p0QRB1IQxBACECQQEhBkEBIAV0IglBf2oiDyEIA0AgAiAORkUEQAJAIAEgAkEBdCINai8BACIHQf//A0YEQCALIAhBA3RqIAI2AgQgCEF/aiEIQQEhBwwBCyAGQQAgDCAHQRB0QRB1ShshBgsgCiANaiAHOwEAIAJBAWohAgwBCwsgACAFNgIEIAAgBjYCACAJQQN2IAlBAXZqQQNqIQxBACEAQQAhBkEAIQIDQCAGIA5GBEADQAJAIAAgCUYNACAKIAsgAEEDdGoiASgCBCIGQQF0aiICIAIvAQAiAkEBajsBACABIAUgAhAUayIIOgADIAEgAiAIQf8BcXQgCWs7AQAgASAEIAZBAnQiAmooAgA6AAIgASACIANqKAIANgIEIABBAWohAAwBCwsFIAEgBkEBdGouAQAhDUEAIQcDQCAHIA1ORQRAIAsgAkEDdGogBjYCBANAIAIgDGogD3EiAiAISw0ACyAHQQFqIQcMAQsLIAZBAWohBgwBCwsgCkHwAGokAAsjAEIAIAEQCSAAhUKHla+vmLbem55/fkLj3MqV/M7y9YV/fAsQACAAQn43AwggACABNgIACyQBAX8gAARAIAEoAgQiAgRAIAEoAgggACACEQEADwsgABAmCwsfACAAIAEgAi8BABAINgIAIAEQBBogACACQQRqNgIEC0oBAX9BoCAoAgAiASAAaiIAQX9MBEBBiCBBMDYCAEF/DwsCQCAAPwBBEHRNDQAgABBmDQBBiCBBMDYCAEF/DwtBoCAgADYCACABC9cBAQh/Qbp/IQoCQCACKAIEIgggAigCACIJaiIOIAEgAGtLDQBBbCEKIAkgBCADKAIAIgtrSw0AIAAgCWoiBCACKAIIIgxrIQ0gACABQWBqIg8gCyAJQQAQKSADIAkgC2o2AgACQAJAIAwgBCAFa00EQCANIQUMAQsgDCAEIAZrSw0CIAcgDSAFayIAaiIBIAhqIAdNBEAgBCABIAgQDxoMAgsgBCABQQAgAGsQDyEBIAIgACAIaiIINgIEIAEgAGshBAsgBCAPIAUgCEEBECkLIA4hCgsgCgubAgEBfyMAQYABayINJAAgDSADNgJ8AkAgAkEDSwRAQX8hCQwBCwJAAkACQAJAIAJBAWsOAwADAgELIAZFBEBBuH8hCQwEC0FsIQkgBS0AACICIANLDQMgACAHIAJBAnQiAmooAgAgAiAIaigCABA7IAEgADYCAEEBIQkMAwsgASAJNgIAQQAhCQwCCyAKRQRAQWwhCQwCC0EAIQkgC0UgDEEZSHINAUEIIAR0QQhqIQBBACECA0AgAiAATw0CIAJBQGshAgwAAAsAC0FsIQkgDSANQfwAaiANQfgAaiAFIAYQFSICEAMNACANKAJ4IgMgBEsNACAAIA0gDSgCfCAHIAggAxAYIAEgADYCACACIQkLIA1BgAFqJAAgCQsLACAAIAEgAhALGgsQACAALwAAIAAtAAJBEHRyCy8AAn9BuH8gAUEISQ0AGkFyIAAoAAQiAEF3Sw0AGkG4fyAAQQhqIgAgACABSxsLCwkAIAAgATsAAAsDAAELigYBBX8gACAAKAIAIgVBfnE2AgBBACAAIAVBAXZqQYQgKAIAIgQgAEYbIQECQAJAIAAoAgQiAkUNACACKAIAIgNBAXENACACQQhqIgUgA0EBdkF4aiIDQQggA0EISxtnQR9zQQJ0QYAfaiIDKAIARgRAIAMgAigCDDYCAAsgAigCCCIDBEAgAyACKAIMNgIECyACKAIMIgMEQCADIAIoAgg2AgALIAIgAigCACAAKAIAQX5xajYCAEGEICEAAkACQCABRQ0AIAEgAjYCBCABKAIAIgNBAXENASADQQF2QXhqIgNBCCADQQhLG2dBH3NBAnRBgB9qIgMoAgAgAUEIakYEQCADIAEoAgw2AgALIAEoAggiAwRAIAMgASgCDDYCBAsgASgCDCIDBEAgAyABKAIINgIAQYQgKAIAIQQLIAIgAigCACABKAIAQX5xajYCACABIARGDQAgASABKAIAQQF2akEEaiEACyAAIAI2AgALIAIoAgBBAXZBeGoiAEEIIABBCEsbZ0Efc0ECdEGAH2oiASgCACEAIAEgBTYCACACIAA2AgwgAkEANgIIIABFDQEgACAFNgIADwsCQCABRQ0AIAEoAgAiAkEBcQ0AIAJBAXZBeGoiAkEIIAJBCEsbZ0Efc0ECdEGAH2oiAigCACABQQhqRgRAIAIgASgCDDYCAAsgASgCCCICBEAgAiABKAIMNgIECyABKAIMIgIEQCACIAEoAgg2AgBBhCAoAgAhBAsgACAAKAIAIAEoAgBBfnFqIgI2AgACQCABIARHBEAgASABKAIAQQF2aiAANgIEIAAoAgAhAgwBC0GEICAANgIACyACQQF2QXhqIgFBCCABQQhLG2dBH3NBAnRBgB9qIgIoAgAhASACIABBCGoiAjYCACAAIAE2AgwgAEEANgIIIAFFDQEgASACNgIADwsgBUEBdkF4aiIBQQggAUEISxtnQR9zQQJ0QYAfaiICKAIAIQEgAiAAQQhqIgI2AgAgACABNgIMIABBADYCCCABRQ0AIAEgAjYCAAsLDgAgAARAIABBeGoQJQsLgAIBA38CQCAAQQ9qQXhxQYQgKAIAKAIAQQF2ayICEB1Bf0YNAAJAQYQgKAIAIgAoAgAiAUEBcQ0AIAFBAXZBeGoiAUEIIAFBCEsbZ0Efc0ECdEGAH2oiASgCACAAQQhqRgRAIAEgACgCDDYCAAsgACgCCCIBBEAgASAAKAIMNgIECyAAKAIMIgFFDQAgASAAKAIINgIAC0EBIQEgACAAKAIAIAJBAXRqIgI2AgAgAkEBcQ0AIAJBAXZBeGoiAkEIIAJBCEsbZ0Efc0ECdEGAH2oiAygCACECIAMgAEEIaiIDNgIAIAAgAjYCDCAAQQA2AgggAkUNACACIAM2AgALIAELtwIBA38CQAJAIABBASAAGyICEDgiAA0AAkACQEGEICgCACIARQ0AIAAoAgAiA0EBcQ0AIAAgA0EBcjYCACADQQF2QXhqIgFBCCABQQhLG2dBH3NBAnRBgB9qIgEoAgAgAEEIakYEQCABIAAoAgw2AgALIAAoAggiAQRAIAEgACgCDDYCBAsgACgCDCIBBEAgASAAKAIINgIACyACECchAkEAIQFBhCAoAgAhACACDQEgACAAKAIAQX5xNgIAQQAPCyACQQ9qQXhxIgMQHSICQX9GDQIgAkEHakF4cSIAIAJHBEAgACACaxAdQX9GDQMLAkBBhCAoAgAiAUUEQEGAICAANgIADAELIAAgATYCBAtBhCAgADYCACAAIANBAXRBAXI2AgAMAQsgAEUNAQsgAEEIaiEBCyABC7kDAQJ/IAAgA2ohBQJAIANBB0wEQANAIAAgBU8NAiAAIAItAAA6AAAgAEEBaiEAIAJBAWohAgwAAAsACyAEQQFGBEACQCAAIAJrIgZBB00EQCAAIAItAAA6AAAgACACLQABOgABIAAgAi0AAjoAAiAAIAItAAM6AAMgAEEEaiACIAZBAnQiBkHAHmooAgBqIgIQFyACIAZB4B5qKAIAayECDAELIAAgAhAMCyACQQhqIQIgAEEIaiEACwJAAkACQAJAIAUgAU0EQCAAIANqIQEgBEEBRyAAIAJrQQ9Kcg0BA0AgACACEAwgAkEIaiECIABBCGoiACABSQ0ACwwFCyAAIAFLBEAgACEBDAQLIARBAUcgACACa0EPSnINASAAIQMgAiEEA0AgAyAEEAwgBEEIaiEEIANBCGoiAyABSQ0ACwwCCwNAIAAgAhAHIAJBEGohAiAAQRBqIgAgAUkNAAsMAwsgACEDIAIhBANAIAMgBBAHIARBEGohBCADQRBqIgMgAUkNAAsLIAIgASAAa2ohAgsDQCABIAVPDQEgASACLQAAOgAAIAFBAWohASACQQFqIQIMAAALAAsLQQECfyAAIAAoArjgASIDNgLE4AEgACgCvOABIQQgACABNgK84AEgACABIAJqNgK44AEgACABIAQgA2tqNgLA4AELpgEBAX8gACAAKALs4QEQFjYCyOABIABCADcD+OABIABCADcDuOABIABBwOABakIANwMAIABBqNAAaiIBQYyAgOAANgIAIABBADYCmOIBIABCADcDiOEBIABCAzcDgOEBIABBrNABakHgEikCADcCACAAQbTQAWpB6BIoAgA2AgAgACABNgIMIAAgAEGYIGo2AgggACAAQaAwajYCBCAAIABBEGo2AgALYQEBf0G4fyEDAkAgAUEDSQ0AIAIgABAhIgFBA3YiADYCCCACIAFBAXE2AgQgAiABQQF2QQNxIgM2AgACQCADQX9qIgFBAksNAAJAIAFBAWsOAgEAAgtBbA8LIAAhAwsgAwsMACAAIAEgAkEAEC4LiAQCA38CfiADEBYhBCAAQQBBKBAQIQAgBCACSwRAIAQPCyABRQRAQX8PCwJAAkAgA0EBRg0AIAEoAAAiBkGo6r5pRg0AQXYhAyAGQXBxQdDUtMIBRw0BQQghAyACQQhJDQEgAEEAQSgQECEAIAEoAAQhASAAQQE2AhQgACABrTcDAEEADwsgASACIAMQLyIDIAJLDQAgACADNgIYQXIhAyABIARqIgVBf2otAAAiAkEIcQ0AIAJBIHEiBkUEQEFwIQMgBS0AACIFQacBSw0BIAVBB3GtQgEgBUEDdkEKaq2GIgdCA4h+IAd8IQggBEEBaiEECyACQQZ2IQMgAkECdiEFAkAgAkEDcUF/aiICQQJLBEBBACECDAELAkACQAJAIAJBAWsOAgECAAsgASAEai0AACECIARBAWohBAwCCyABIARqLwAAIQIgBEECaiEEDAELIAEgBGooAAAhAiAEQQRqIQQLIAVBAXEhBQJ+AkACQAJAIANBf2oiA0ECTQRAIANBAWsOAgIDAQtCfyAGRQ0DGiABIARqMQAADAMLIAEgBGovAACtQoACfAwCCyABIARqKAAArQwBCyABIARqKQAACyEHIAAgBTYCICAAIAI2AhwgACAHNwMAQQAhAyAAQQA2AhQgACAHIAggBhsiBzcDCCAAIAdCgIAIIAdCgIAIVBs+AhALIAMLWwEBf0G4fyEDIAIQFiICIAFNBH8gACACakF/ai0AACIAQQNxQQJ0QaAeaigCACACaiAAQQZ2IgFBAnRBsB5qKAIAaiAAQSBxIgBFaiABRSAAQQV2cWoFQbh/CwsdACAAKAKQ4gEQWiAAQQA2AqDiASAAQgA3A5DiAQu1AwEFfyMAQZACayIKJABBuH8hBgJAIAVFDQAgBCwAACIIQf8BcSEHAkAgCEF/TARAIAdBgn9qQQF2IgggBU8NAkFsIQYgB0GBf2oiBUGAAk8NAiAEQQFqIQdBACEGA0AgBiAFTwRAIAUhBiAIIQcMAwUgACAGaiAHIAZBAXZqIgQtAABBBHY6AAAgACAGQQFyaiAELQAAQQ9xOgAAIAZBAmohBgwBCwAACwALIAcgBU8NASAAIARBAWogByAKEFMiBhADDQELIAYhBEEAIQYgAUEAQTQQECEJQQAhBQNAIAQgBkcEQCAAIAZqIggtAAAiAUELSwRAQWwhBgwDBSAJIAFBAnRqIgEgASgCAEEBajYCACAGQQFqIQZBASAILQAAdEEBdSAFaiEFDAILAAsLQWwhBiAFRQ0AIAUQFEEBaiIBQQxLDQAgAyABNgIAQQFBASABdCAFayIDEBQiAXQgA0cNACAAIARqIAFBAWoiADoAACAJIABBAnRqIgAgACgCAEEBajYCACAJKAIEIgBBAkkgAEEBcXINACACIARBAWo2AgAgB0EBaiEGCyAKQZACaiQAIAYLxhEBDH8jAEHwAGsiBSQAQWwhCwJAIANBCkkNACACLwAAIQogAi8AAiEJIAIvAAQhByAFQQhqIAQQDgJAIAMgByAJIApqakEGaiIMSQ0AIAUtAAohCCAFQdgAaiACQQZqIgIgChAGIgsQAw0BIAVBQGsgAiAKaiICIAkQBiILEAMNASAFQShqIAIgCWoiAiAHEAYiCxADDQEgBUEQaiACIAdqIAMgDGsQBiILEAMNASAAIAFqIg9BfWohECAEQQRqIQZBASELIAAgAUEDakECdiIDaiIMIANqIgIgA2oiDiEDIAIhBCAMIQcDQCALIAMgEElxBEAgACAGIAVB2ABqIAgQAkECdGoiCS8BADsAACAFQdgAaiAJLQACEAEgCS0AAyELIAcgBiAFQUBrIAgQAkECdGoiCS8BADsAACAFQUBrIAktAAIQASAJLQADIQogBCAGIAVBKGogCBACQQJ0aiIJLwEAOwAAIAVBKGogCS0AAhABIAktAAMhCSADIAYgBUEQaiAIEAJBAnRqIg0vAQA7AAAgBUEQaiANLQACEAEgDS0AAyENIAAgC2oiCyAGIAVB2ABqIAgQAkECdGoiAC8BADsAACAFQdgAaiAALQACEAEgAC0AAyEAIAcgCmoiCiAGIAVBQGsgCBACQQJ0aiIHLwEAOwAAIAVBQGsgBy0AAhABIActAAMhByAEIAlqIgkgBiAFQShqIAgQAkECdGoiBC8BADsAACAFQShqIAQtAAIQASAELQADIQQgAyANaiIDIAYgBUEQaiAIEAJBAnRqIg0vAQA7AAAgBUEQaiANLQACEAEgACALaiEAIAcgCmohByAEIAlqIQQgAyANLQADaiEDIAVB2ABqEA0gBUFAaxANciAFQShqEA1yIAVBEGoQDXJFIQsMAQsLIAQgDksgByACS3INAEFsIQsgACAMSw0BIAxBfWohCQNAQQAgACAJSSAFQdgAahAEGwRAIAAgBiAFQdgAaiAIEAJBAnRqIgovAQA7AAAgBUHYAGogCi0AAhABIAAgCi0AA2oiACAGIAVB2ABqIAgQAkECdGoiCi8BADsAACAFQdgAaiAKLQACEAEgACAKLQADaiEADAEFIAxBfmohCgNAIAVB2ABqEAQgACAKS3JFBEAgACAGIAVB2ABqIAgQAkECdGoiCS8BADsAACAFQdgAaiAJLQACEAEgACAJLQADaiEADAELCwNAIAAgCk0EQCAAIAYgBUHYAGogCBACQQJ0aiIJLwEAOwAAIAVB2ABqIAktAAIQASAAIAktAANqIQAMAQsLAkAgACAMTw0AIAAgBiAFQdgAaiAIEAIiAEECdGoiDC0AADoAACAMLQADQQFGBEAgBUHYAGogDC0AAhABDAELIAUoAlxBH0sNACAFQdgAaiAGIABBAnRqLQACEAEgBSgCXEEhSQ0AIAVBIDYCXAsgAkF9aiEMA0BBACAHIAxJIAVBQGsQBBsEQCAHIAYgBUFAayAIEAJBAnRqIgAvAQA7AAAgBUFAayAALQACEAEgByAALQADaiIAIAYgBUFAayAIEAJBAnRqIgcvAQA7AAAgBUFAayAHLQACEAEgACAHLQADaiEHDAEFIAJBfmohDANAIAVBQGsQBCAHIAxLckUEQCAHIAYgBUFAayAIEAJBAnRqIgAvAQA7AAAgBUFAayAALQACEAEgByAALQADaiEHDAELCwNAIAcgDE0EQCAHIAYgBUFAayAIEAJBAnRqIgAvAQA7AAAgBUFAayAALQACEAEgByAALQADaiEHDAELCwJAIAcgAk8NACAHIAYgBUFAayAIEAIiAEECdGoiAi0AADoAACACLQADQQFGBEAgBUFAayACLQACEAEMAQsgBSgCREEfSw0AIAVBQGsgBiAAQQJ0ai0AAhABIAUoAkRBIUkNACAFQSA2AkQLIA5BfWohAgNAQQAgBCACSSAFQShqEAQbBEAgBCAGIAVBKGogCBACQQJ0aiIALwEAOwAAIAVBKGogAC0AAhABIAQgAC0AA2oiACAGIAVBKGogCBACQQJ0aiIELwEAOwAAIAVBKGogBC0AAhABIAAgBC0AA2ohBAwBBSAOQX5qIQIDQCAFQShqEAQgBCACS3JFBEAgBCAGIAVBKGogCBACQQJ0aiIALwEAOwAAIAVBKGogAC0AAhABIAQgAC0AA2ohBAwBCwsDQCAEIAJNBEAgBCAGIAVBKGogCBACQQJ0aiIALwEAOwAAIAVBKGogAC0AAhABIAQgAC0AA2ohBAwBCwsCQCAEIA5PDQAgBCAGIAVBKGogCBACIgBBAnRqIgItAAA6AAAgAi0AA0EBRgRAIAVBKGogAi0AAhABDAELIAUoAixBH0sNACAFQShqIAYgAEECdGotAAIQASAFKAIsQSFJDQAgBUEgNgIsCwNAQQAgAyAQSSAFQRBqEAQbBEAgAyAGIAVBEGogCBACQQJ0aiIALwEAOwAAIAVBEGogAC0AAhABIAMgAC0AA2oiACAGIAVBEGogCBACQQJ0aiICLwEAOwAAIAVBEGogAi0AAhABIAAgAi0AA2ohAwwBBSAPQX5qIQIDQCAFQRBqEAQgAyACS3JFBEAgAyAGIAVBEGogCBACQQJ0aiIALwEAOwAAIAVBEGogAC0AAhABIAMgAC0AA2ohAwwBCwsDQCADIAJNBEAgAyAGIAVBEGogCBACQQJ0aiIALwEAOwAAIAVBEGogAC0AAhABIAMgAC0AA2ohAwwBCwsCQCADIA9PDQAgAyAGIAVBEGogCBACIgBBAnRqIgItAAA6AAAgAi0AA0EBRgRAIAVBEGogAi0AAhABDAELIAUoAhRBH0sNACAFQRBqIAYgAEECdGotAAIQASAFKAIUQSFJDQAgBUEgNgIUCyABQWwgBUHYAGoQCiAFQUBrEApxIAVBKGoQCnEgBUEQahAKcRshCwwJCwAACwALAAALAAsAAAsACwAACwALQWwhCwsgBUHwAGokACALC7UEAQ5/IwBBEGsiBiQAIAZBBGogABAOQVQhBQJAIARB3AtJDQAgBi0ABCEHIANB8ARqQQBB7AAQECEIIAdBDEsNACADQdwJaiIJIAggBkEIaiAGQQxqIAEgAhAxIhAQA0UEQCAGKAIMIgQgB0sNASADQdwFaiEPIANBpAVqIREgAEEEaiESIANBqAVqIQEgBCEFA0AgBSICQX9qIQUgCCACQQJ0aigCAEUNAAsgAkEBaiEOQQEhBQNAIAUgDk9FBEAgCCAFQQJ0IgtqKAIAIQwgASALaiAKNgIAIAVBAWohBSAKIAxqIQoMAQsLIAEgCjYCAEEAIQUgBigCCCELA0AgBSALRkUEQCABIAUgCWotAAAiDEECdGoiDSANKAIAIg1BAWo2AgAgDyANQQF0aiINIAw6AAEgDSAFOgAAIAVBAWohBQwBCwtBACEBIANBADYCqAUgBEF/cyAHaiEJQQEhBQNAIAUgDk9FBEAgCCAFQQJ0IgtqKAIAIQwgAyALaiABNgIAIAwgBSAJanQgAWohASAFQQFqIQUMAQsLIAcgBEEBaiIBIAJrIgRrQQFqIQgDQEEBIQUgBCAIT0UEQANAIAUgDk9FBEAgBUECdCIJIAMgBEE0bGpqIAMgCWooAgAgBHY2AgAgBUEBaiEFDAELCyAEQQFqIQQMAQsLIBIgByAPIAogESADIAIgARBkIAZBAToABSAGIAc6AAYgACAGKAIENgIACyAQIQULIAZBEGokACAFC8ENAQt/IwBB8ABrIgUkAEFsIQkCQCADQQpJDQAgAi8AACEKIAIvAAIhDCACLwAEIQYgBUEIaiAEEA4CQCADIAYgCiAMampBBmoiDUkNACAFLQAKIQcgBUHYAGogAkEGaiICIAoQBiIJEAMNASAFQUBrIAIgCmoiAiAMEAYiCRADDQEgBUEoaiACIAxqIgIgBhAGIgkQAw0BIAVBEGogAiAGaiADIA1rEAYiCRADDQEgACABaiIOQX1qIQ8gBEEEaiEGQQEhCSAAIAFBA2pBAnYiAmoiCiACaiIMIAJqIg0hAyAMIQQgCiECA0AgCSADIA9JcQRAIAYgBUHYAGogBxACQQF0aiIILQAAIQsgBUHYAGogCC0AARABIAAgCzoAACAGIAVBQGsgBxACQQF0aiIILQAAIQsgBUFAayAILQABEAEgAiALOgAAIAYgBUEoaiAHEAJBAXRqIggtAAAhCyAFQShqIAgtAAEQASAEIAs6AAAgBiAFQRBqIAcQAkEBdGoiCC0AACELIAVBEGogCC0AARABIAMgCzoAACAGIAVB2ABqIAcQAkEBdGoiCC0AACELIAVB2ABqIAgtAAEQASAAIAs6AAEgBiAFQUBrIAcQAkEBdGoiCC0AACELIAVBQGsgCC0AARABIAIgCzoAASAGIAVBKGogBxACQQF0aiIILQAAIQsgBUEoaiAILQABEAEgBCALOgABIAYgBUEQaiAHEAJBAXRqIggtAAAhCyAFQRBqIAgtAAEQASADIAs6AAEgA0ECaiEDIARBAmohBCACQQJqIQIgAEECaiEAIAkgBUHYAGoQDUVxIAVBQGsQDUVxIAVBKGoQDUVxIAVBEGoQDUVxIQkMAQsLIAQgDUsgAiAMS3INAEFsIQkgACAKSw0BIApBfWohCQNAIAVB2ABqEAQgACAJT3JFBEAgBiAFQdgAaiAHEAJBAXRqIggtAAAhCyAFQdgAaiAILQABEAEgACALOgAAIAYgBUHYAGogBxACQQF0aiIILQAAIQsgBUHYAGogCC0AARABIAAgCzoAASAAQQJqIQAMAQsLA0AgBUHYAGoQBCAAIApPckUEQCAGIAVB2ABqIAcQAkEBdGoiCS0AACEIIAVB2ABqIAktAAEQASAAIAg6AAAgAEEBaiEADAELCwNAIAAgCkkEQCAGIAVB2ABqIAcQAkEBdGoiCS0AACEIIAVB2ABqIAktAAEQASAAIAg6AAAgAEEBaiEADAELCyAMQX1qIQADQCAFQUBrEAQgAiAAT3JFBEAgBiAFQUBrIAcQAkEBdGoiCi0AACEJIAVBQGsgCi0AARABIAIgCToAACAGIAVBQGsgBxACQQF0aiIKLQAAIQkgBUFAayAKLQABEAEgAiAJOgABIAJBAmohAgwBCwsDQCAFQUBrEAQgAiAMT3JFBEAgBiAFQUBrIAcQAkEBdGoiAC0AACEKIAVBQGsgAC0AARABIAIgCjoAACACQQFqIQIMAQsLA0AgAiAMSQRAIAYgBUFAayAHEAJBAXRqIgAtAAAhCiAFQUBrIAAtAAEQASACIAo6AAAgAkEBaiECDAELCyANQX1qIQADQCAFQShqEAQgBCAAT3JFBEAgBiAFQShqIAcQAkEBdGoiAi0AACEKIAVBKGogAi0AARABIAQgCjoAACAGIAVBKGogBxACQQF0aiICLQAAIQogBUEoaiACLQABEAEgBCAKOgABIARBAmohBAwBCwsDQCAFQShqEAQgBCANT3JFBEAgBiAFQShqIAcQAkEBdGoiAC0AACECIAVBKGogAC0AARABIAQgAjoAACAEQQFqIQQMAQsLA0AgBCANSQRAIAYgBUEoaiAHEAJBAXRqIgAtAAAhAiAFQShqIAAtAAEQASAEIAI6AAAgBEEBaiEEDAELCwNAIAVBEGoQBCADIA9PckUEQCAGIAVBEGogBxACQQF0aiIALQAAIQIgBUEQaiAALQABEAEgAyACOgAAIAYgBUEQaiAHEAJBAXRqIgAtAAAhAiAFQRBqIAAtAAEQASADIAI6AAEgA0ECaiEDDAELCwNAIAVBEGoQBCADIA5PckUEQCAGIAVBEGogBxACQQF0aiIALQAAIQIgBUEQaiAALQABEAEgAyACOgAAIANBAWohAwwBCwsDQCADIA5JBEAgBiAFQRBqIAcQAkEBdGoiAC0AACECIAVBEGogAC0AARABIAMgAjoAACADQQFqIQMMAQsLIAFBbCAFQdgAahAKIAVBQGsQCnEgBUEoahAKcSAFQRBqEApxGyEJDAELQWwhCQsgBUHwAGokACAJC8oCAQR/IwBBIGsiBSQAIAUgBBAOIAUtAAIhByAFQQhqIAIgAxAGIgIQA0UEQCAEQQRqIQIgACABaiIDQX1qIQQDQCAFQQhqEAQgACAET3JFBEAgAiAFQQhqIAcQAkEBdGoiBi0AACEIIAVBCGogBi0AARABIAAgCDoAACACIAVBCGogBxACQQF0aiIGLQAAIQggBUEIaiAGLQABEAEgACAIOgABIABBAmohAAwBCwsDQCAFQQhqEAQgACADT3JFBEAgAiAFQQhqIAcQAkEBdGoiBC0AACEGIAVBCGogBC0AARABIAAgBjoAACAAQQFqIQAMAQsLA0AgACADT0UEQCACIAVBCGogBxACQQF0aiIELQAAIQYgBUEIaiAELQABEAEgACAGOgAAIABBAWohAAwBCwsgAUFsIAVBCGoQChshAgsgBUEgaiQAIAILtgMBCX8jAEEQayIGJAAgBkEANgIMIAZBADYCCEFUIQQCQAJAIANBQGsiDCADIAZBCGogBkEMaiABIAIQMSICEAMNACAGQQRqIAAQDiAGKAIMIgcgBi0ABEEBaksNASAAQQRqIQogBkEAOgAFIAYgBzoABiAAIAYoAgQ2AgAgB0EBaiEJQQEhBANAIAQgCUkEQCADIARBAnRqIgEoAgAhACABIAU2AgAgACAEQX9qdCAFaiEFIARBAWohBAwBCwsgB0EBaiEHQQAhBSAGKAIIIQkDQCAFIAlGDQEgAyAFIAxqLQAAIgRBAnRqIgBBASAEdEEBdSILIAAoAgAiAWoiADYCACAHIARrIQhBACEEAkAgC0EDTQRAA0AgBCALRg0CIAogASAEakEBdGoiACAIOgABIAAgBToAACAEQQFqIQQMAAALAAsDQCABIABPDQEgCiABQQF0aiIEIAg6AAEgBCAFOgAAIAQgCDoAAyAEIAU6AAIgBCAIOgAFIAQgBToABCAEIAg6AAcgBCAFOgAGIAFBBGohAQwAAAsACyAFQQFqIQUMAAALAAsgAiEECyAGQRBqJAAgBAutAQECfwJAQYQgKAIAIABHIAAoAgBBAXYiAyABa0F4aiICQXhxQQhHcgR/IAIFIAMQJ0UNASACQQhqC0EQSQ0AIAAgACgCACICQQFxIAAgAWpBD2pBeHEiASAAa0EBdHI2AgAgASAANgIEIAEgASgCAEEBcSAAIAJBAXZqIAFrIgJBAXRyNgIAQYQgIAEgAkH/////B3FqQQRqQYQgKAIAIABGGyABNgIAIAEQJQsLygIBBX8CQAJAAkAgAEEIIABBCEsbZ0EfcyAAaUEBR2oiAUEESSAAIAF2cg0AIAFBAnRB/B5qKAIAIgJFDQADQCACQXhqIgMoAgBBAXZBeGoiBSAATwRAIAIgBUEIIAVBCEsbZ0Efc0ECdEGAH2oiASgCAEYEQCABIAIoAgQ2AgALDAMLIARBHksNASAEQQFqIQQgAigCBCICDQALC0EAIQMgAUEgTw0BA0AgAUECdEGAH2ooAgAiAkUEQCABQR5LIQIgAUEBaiEBIAJFDQEMAwsLIAIgAkF4aiIDKAIAQQF2QXhqIgFBCCABQQhLG2dBH3NBAnRBgB9qIgEoAgBGBEAgASACKAIENgIACwsgAigCACIBBEAgASACKAIENgIECyACKAIEIgEEQCABIAIoAgA2AgALIAMgAygCAEEBcjYCACADIAAQNwsgAwvhCwINfwV+IwBB8ABrIgckACAHIAAoAvDhASIINgJcIAEgAmohDSAIIAAoAoDiAWohDwJAAkAgBUUEQCABIQQMAQsgACgCxOABIRAgACgCwOABIREgACgCvOABIQ4gAEEBNgKM4QFBACEIA0AgCEEDRwRAIAcgCEECdCICaiAAIAJqQazQAWooAgA2AkQgCEEBaiEIDAELC0FsIQwgB0EYaiADIAQQBhADDQEgB0EsaiAHQRhqIAAoAgAQEyAHQTRqIAdBGGogACgCCBATIAdBPGogB0EYaiAAKAIEEBMgDUFgaiESIAEhBEEAIQwDQCAHKAIwIAcoAixBA3RqKQIAIhRCEIinQf8BcSEIIAcoAkAgBygCPEEDdGopAgAiFUIQiKdB/wFxIQsgBygCOCAHKAI0QQN0aikCACIWQiCIpyEJIBVCIIghFyAUQiCIpyECAkAgFkIQiKdB/wFxIgNBAk8EQAJAIAZFIANBGUlyRQRAIAkgB0EYaiADQSAgBygCHGsiCiAKIANLGyIKEAUgAyAKayIDdGohCSAHQRhqEAQaIANFDQEgB0EYaiADEAUgCWohCQwBCyAHQRhqIAMQBSAJaiEJIAdBGGoQBBoLIAcpAkQhGCAHIAk2AkQgByAYNwNIDAELAkAgA0UEQCACBEAgBygCRCEJDAMLIAcoAkghCQwBCwJAAkAgB0EYakEBEAUgCSACRWpqIgNBA0YEQCAHKAJEQX9qIgMgA0VqIQkMAQsgA0ECdCAHaigCRCIJIAlFaiEJIANBAUYNAQsgByAHKAJINgJMCwsgByAHKAJENgJIIAcgCTYCRAsgF6chAyALBEAgB0EYaiALEAUgA2ohAwsgCCALakEUTwRAIAdBGGoQBBoLIAgEQCAHQRhqIAgQBSACaiECCyAHQRhqEAQaIAcgB0EYaiAUQhiIp0H/AXEQCCAUp0H//wNxajYCLCAHIAdBGGogFUIYiKdB/wFxEAggFadB//8DcWo2AjwgB0EYahAEGiAHIAdBGGogFkIYiKdB/wFxEAggFqdB//8DcWo2AjQgByACNgJgIAcoAlwhCiAHIAk2AmggByADNgJkAkACQAJAIAQgAiADaiILaiASSw0AIAIgCmoiEyAPSw0AIA0gBGsgC0Egak8NAQsgByAHKQNoNwMQIAcgBykDYDcDCCAEIA0gB0EIaiAHQdwAaiAPIA4gESAQEB4hCwwBCyACIARqIQggBCAKEAcgAkERTwRAIARBEGohAgNAIAIgCkEQaiIKEAcgAkEQaiICIAhJDQALCyAIIAlrIQIgByATNgJcIAkgCCAOa0sEQCAJIAggEWtLBEBBbCELDAILIBAgAiAOayICaiIKIANqIBBNBEAgCCAKIAMQDxoMAgsgCCAKQQAgAmsQDyEIIAcgAiADaiIDNgJkIAggAmshCCAOIQILIAlBEE8EQCADIAhqIQMDQCAIIAIQByACQRBqIQIgCEEQaiIIIANJDQALDAELAkAgCUEHTQRAIAggAi0AADoAACAIIAItAAE6AAEgCCACLQACOgACIAggAi0AAzoAAyAIQQRqIAIgCUECdCIDQcAeaigCAGoiAhAXIAIgA0HgHmooAgBrIQIgBygCZCEDDAELIAggAhAMCyADQQlJDQAgAyAIaiEDIAhBCGoiCCACQQhqIgJrQQ9MBEADQCAIIAIQDCACQQhqIQIgCEEIaiIIIANJDQAMAgALAAsDQCAIIAIQByACQRBqIQIgCEEQaiIIIANJDQALCyAHQRhqEAQaIAsgDCALEAMiAhshDCAEIAQgC2ogAhshBCAFQX9qIgUNAAsgDBADDQFBbCEMIAdBGGoQBEECSQ0BQQAhCANAIAhBA0cEQCAAIAhBAnQiAmpBrNABaiACIAdqKAJENgIAIAhBAWohCAwBCwsgBygCXCEIC0G6fyEMIA8gCGsiACANIARrSw0AIAQEfyAEIAggABALIABqBUEACyABayEMCyAHQfAAaiQAIAwLkRcCFn8FfiMAQdABayIHJAAgByAAKALw4QEiCDYCvAEgASACaiESIAggACgCgOIBaiETAkACQCAFRQRAIAEhAwwBCyAAKALE4AEhESAAKALA4AEhFSAAKAK84AEhDyAAQQE2AozhAUEAIQgDQCAIQQNHBEAgByAIQQJ0IgJqIAAgAmpBrNABaigCADYCVCAIQQFqIQgMAQsLIAcgETYCZCAHIA82AmAgByABIA9rNgJoQWwhECAHQShqIAMgBBAGEAMNASAFQQQgBUEESBshFyAHQTxqIAdBKGogACgCABATIAdBxABqIAdBKGogACgCCBATIAdBzABqIAdBKGogACgCBBATQQAhBCAHQeAAaiEMIAdB5ABqIQoDQCAHQShqEARBAksgBCAXTnJFBEAgBygCQCAHKAI8QQN0aikCACIdQhCIp0H/AXEhCyAHKAJQIAcoAkxBA3RqKQIAIh5CEIinQf8BcSEJIAcoAkggBygCREEDdGopAgAiH0IgiKchCCAeQiCIISAgHUIgiKchAgJAIB9CEIinQf8BcSIDQQJPBEACQCAGRSADQRlJckUEQCAIIAdBKGogA0EgIAcoAixrIg0gDSADSxsiDRAFIAMgDWsiA3RqIQggB0EoahAEGiADRQ0BIAdBKGogAxAFIAhqIQgMAQsgB0EoaiADEAUgCGohCCAHQShqEAQaCyAHKQJUISEgByAINgJUIAcgITcDWAwBCwJAIANFBEAgAgRAIAcoAlQhCAwDCyAHKAJYIQgMAQsCQAJAIAdBKGpBARAFIAggAkVqaiIDQQNGBEAgBygCVEF/aiIDIANFaiEIDAELIANBAnQgB2ooAlQiCCAIRWohCCADQQFGDQELIAcgBygCWDYCXAsLIAcgBygCVDYCWCAHIAg2AlQLICCnIQMgCQRAIAdBKGogCRAFIANqIQMLIAkgC2pBFE8EQCAHQShqEAQaCyALBEAgB0EoaiALEAUgAmohAgsgB0EoahAEGiAHIAcoAmggAmoiCSADajYCaCAKIAwgCCAJSxsoAgAhDSAHIAdBKGogHUIYiKdB/wFxEAggHadB//8DcWo2AjwgByAHQShqIB5CGIinQf8BcRAIIB6nQf//A3FqNgJMIAdBKGoQBBogB0EoaiAfQhiIp0H/AXEQCCEOIAdB8ABqIARBBHRqIgsgCSANaiAIazYCDCALIAg2AgggCyADNgIEIAsgAjYCACAHIA4gH6dB//8DcWo2AkQgBEEBaiEEDAELCyAEIBdIDQEgEkFgaiEYIAdB4ABqIRogB0HkAGohGyABIQMDQCAHQShqEARBAksgBCAFTnJFBEAgBygCQCAHKAI8QQN0aikCACIdQhCIp0H/AXEhCyAHKAJQIAcoAkxBA3RqKQIAIh5CEIinQf8BcSEIIAcoAkggBygCREEDdGopAgAiH0IgiKchCSAeQiCIISAgHUIgiKchDAJAIB9CEIinQf8BcSICQQJPBEACQCAGRSACQRlJckUEQCAJIAdBKGogAkEgIAcoAixrIgogCiACSxsiChAFIAIgCmsiAnRqIQkgB0EoahAEGiACRQ0BIAdBKGogAhAFIAlqIQkMAQsgB0EoaiACEAUgCWohCSAHQShqEAQaCyAHKQJUISEgByAJNgJUIAcgITcDWAwBCwJAIAJFBEAgDARAIAcoAlQhCQwDCyAHKAJYIQkMAQsCQAJAIAdBKGpBARAFIAkgDEVqaiICQQNGBEAgBygCVEF/aiICIAJFaiEJDAELIAJBAnQgB2ooAlQiCSAJRWohCSACQQFGDQELIAcgBygCWDYCXAsLIAcgBygCVDYCWCAHIAk2AlQLICCnIRQgCARAIAdBKGogCBAFIBRqIRQLIAggC2pBFE8EQCAHQShqEAQaCyALBEAgB0EoaiALEAUgDGohDAsgB0EoahAEGiAHIAcoAmggDGoiGSAUajYCaCAbIBogCSAZSxsoAgAhHCAHIAdBKGogHUIYiKdB/wFxEAggHadB//8DcWo2AjwgByAHQShqIB5CGIinQf8BcRAIIB6nQf//A3FqNgJMIAdBKGoQBBogByAHQShqIB9CGIinQf8BcRAIIB+nQf//A3FqNgJEIAcgB0HwAGogBEEDcUEEdGoiDSkDCCIdNwPIASAHIA0pAwAiHjcDwAECQAJAAkAgBygCvAEiDiAepyICaiIWIBNLDQAgAyAHKALEASIKIAJqIgtqIBhLDQAgEiADayALQSBqTw0BCyAHIAcpA8gBNwMQIAcgBykDwAE3AwggAyASIAdBCGogB0G8AWogEyAPIBUgERAeIQsMAQsgAiADaiEIIAMgDhAHIAJBEU8EQCADQRBqIQIDQCACIA5BEGoiDhAHIAJBEGoiAiAISQ0ACwsgCCAdpyIOayECIAcgFjYCvAEgDiAIIA9rSwRAIA4gCCAVa0sEQEFsIQsMAgsgESACIA9rIgJqIhYgCmogEU0EQCAIIBYgChAPGgwCCyAIIBZBACACaxAPIQggByACIApqIgo2AsQBIAggAmshCCAPIQILIA5BEE8EQCAIIApqIQoDQCAIIAIQByACQRBqIQIgCEEQaiIIIApJDQALDAELAkAgDkEHTQRAIAggAi0AADoAACAIIAItAAE6AAEgCCACLQACOgACIAggAi0AAzoAAyAIQQRqIAIgDkECdCIKQcAeaigCAGoiAhAXIAIgCkHgHmooAgBrIQIgBygCxAEhCgwBCyAIIAIQDAsgCkEJSQ0AIAggCmohCiAIQQhqIgggAkEIaiICa0EPTARAA0AgCCACEAwgAkEIaiECIAhBCGoiCCAKSQ0ADAIACwALA0AgCCACEAcgAkEQaiECIAhBEGoiCCAKSQ0ACwsgCxADBEAgCyEQDAQFIA0gDDYCACANIBkgHGogCWs2AgwgDSAJNgIIIA0gFDYCBCAEQQFqIQQgAyALaiEDDAILAAsLIAQgBUgNASAEIBdrIQtBACEEA0AgCyAFSARAIAcgB0HwAGogC0EDcUEEdGoiAikDCCIdNwPIASAHIAIpAwAiHjcDwAECQAJAAkAgBygCvAEiDCAepyICaiIKIBNLDQAgAyAHKALEASIJIAJqIhBqIBhLDQAgEiADayAQQSBqTw0BCyAHIAcpA8gBNwMgIAcgBykDwAE3AxggAyASIAdBGGogB0G8AWogEyAPIBUgERAeIRAMAQsgAiADaiEIIAMgDBAHIAJBEU8EQCADQRBqIQIDQCACIAxBEGoiDBAHIAJBEGoiAiAISQ0ACwsgCCAdpyIGayECIAcgCjYCvAEgBiAIIA9rSwRAIAYgCCAVa0sEQEFsIRAMAgsgESACIA9rIgJqIgwgCWogEU0EQCAIIAwgCRAPGgwCCyAIIAxBACACaxAPIQggByACIAlqIgk2AsQBIAggAmshCCAPIQILIAZBEE8EQCAIIAlqIQYDQCAIIAIQByACQRBqIQIgCEEQaiIIIAZJDQALDAELAkAgBkEHTQRAIAggAi0AADoAACAIIAItAAE6AAEgCCACLQACOgACIAggAi0AAzoAAyAIQQRqIAIgBkECdCIGQcAeaigCAGoiAhAXIAIgBkHgHmooAgBrIQIgBygCxAEhCQwBCyAIIAIQDAsgCUEJSQ0AIAggCWohBiAIQQhqIgggAkEIaiICa0EPTARAA0AgCCACEAwgAkEIaiECIAhBCGoiCCAGSQ0ADAIACwALA0AgCCACEAcgAkEQaiECIAhBEGoiCCAGSQ0ACwsgEBADDQMgC0EBaiELIAMgEGohAwwBCwsDQCAEQQNHBEAgACAEQQJ0IgJqQazQAWogAiAHaigCVDYCACAEQQFqIQQMAQsLIAcoArwBIQgLQbp/IRAgEyAIayIAIBIgA2tLDQAgAwR/IAMgCCAAEAsgAGoFQQALIAFrIRALIAdB0AFqJAAgEAslACAAQgA3AgAgAEEAOwEIIABBADoACyAAIAE2AgwgACACOgAKC7QFAQN/IwBBMGsiBCQAIABB/wFqIgVBfWohBgJAIAMvAQIEQCAEQRhqIAEgAhAGIgIQAw0BIARBEGogBEEYaiADEBwgBEEIaiAEQRhqIAMQHCAAIQMDQAJAIARBGGoQBCADIAZPckUEQCADIARBEGogBEEYahASOgAAIAMgBEEIaiAEQRhqEBI6AAEgBEEYahAERQ0BIANBAmohAwsgBUF+aiEFAn8DQEG6fyECIAMiASAFSw0FIAEgBEEQaiAEQRhqEBI6AAAgAUEBaiEDIARBGGoQBEEDRgRAQQIhAiAEQQhqDAILIAMgBUsNBSABIARBCGogBEEYahASOgABIAFBAmohA0EDIQIgBEEYahAEQQNHDQALIARBEGoLIQUgAyAFIARBGGoQEjoAACABIAJqIABrIQIMAwsgAyAEQRBqIARBGGoQEjoAAiADIARBCGogBEEYahASOgADIANBBGohAwwAAAsACyAEQRhqIAEgAhAGIgIQAw0AIARBEGogBEEYaiADEBwgBEEIaiAEQRhqIAMQHCAAIQMDQAJAIARBGGoQBCADIAZPckUEQCADIARBEGogBEEYahAROgAAIAMgBEEIaiAEQRhqEBE6AAEgBEEYahAERQ0BIANBAmohAwsgBUF+aiEFAn8DQEG6fyECIAMiASAFSw0EIAEgBEEQaiAEQRhqEBE6AAAgAUEBaiEDIARBGGoQBEEDRgRAQQIhAiAEQQhqDAILIAMgBUsNBCABIARBCGogBEEYahAROgABIAFBAmohA0EDIQIgBEEYahAEQQNHDQALIARBEGoLIQUgAyAFIARBGGoQEToAACABIAJqIABrIQIMAgsgAyAEQRBqIARBGGoQEToAAiADIARBCGogBEEYahAROgADIANBBGohAwwAAAsACyAEQTBqJAAgAgtpAQF/An8CQAJAIAJBB00NACABKAAAQbfIwuF+Rw0AIAAgASgABDYCmOIBQWIgAEEQaiABIAIQPiIDEAMNAhogAEKBgICAEDcDiOEBIAAgASADaiACIANrECoMAQsgACABIAIQKgtBAAsLrQMBBn8jAEGAAWsiAyQAQWIhCAJAIAJBCUkNACAAQZjQAGogAUEIaiIEIAJBeGogAEGY0AAQMyIFEAMiBg0AIANBHzYCfCADIANB/ABqIANB+ABqIAQgBCAFaiAGGyIEIAEgAmoiAiAEaxAVIgUQAw0AIAMoAnwiBkEfSw0AIAMoAngiB0EJTw0AIABBiCBqIAMgBkGAC0GADCAHEBggA0E0NgJ8IAMgA0H8AGogA0H4AGogBCAFaiIEIAIgBGsQFSIFEAMNACADKAJ8IgZBNEsNACADKAJ4IgdBCk8NACAAQZAwaiADIAZBgA1B4A4gBxAYIANBIzYCfCADIANB/ABqIANB+ABqIAQgBWoiBCACIARrEBUiBRADDQAgAygCfCIGQSNLDQAgAygCeCIHQQpPDQAgACADIAZBwBBB0BEgBxAYIAQgBWoiBEEMaiIFIAJLDQAgAiAFayEFQQAhAgNAIAJBA0cEQCAEKAAAIgZBf2ogBU8NAiAAIAJBAnRqQZzQAWogBjYCACACQQFqIQIgBEEEaiEEDAELCyAEIAFrIQgLIANBgAFqJAAgCAtGAQN/IABBCGohAyAAKAIEIQJBACEAA0AgACACdkUEQCABIAMgAEEDdGotAAJBFktqIQEgAEEBaiEADAELCyABQQggAmt0C4YDAQV/Qbh/IQcCQCADRQ0AIAItAAAiBEUEQCABQQA2AgBBAUG4fyADQQFGGw8LAn8gAkEBaiIFIARBGHRBGHUiBkF/Sg0AGiAGQX9GBEAgA0EDSA0CIAUvAABBgP4BaiEEIAJBA2oMAQsgA0ECSA0BIAItAAEgBEEIdHJBgIB+aiEEIAJBAmoLIQUgASAENgIAIAVBAWoiASACIANqIgNLDQBBbCEHIABBEGogACAFLQAAIgVBBnZBI0EJIAEgAyABa0HAEEHQEUHwEiAAKAKM4QEgACgCnOIBIAQQHyIGEAMiCA0AIABBmCBqIABBCGogBUEEdkEDcUEfQQggASABIAZqIAgbIgEgAyABa0GAC0GADEGAFyAAKAKM4QEgACgCnOIBIAQQHyIGEAMiCA0AIABBoDBqIABBBGogBUECdkEDcUE0QQkgASABIAZqIAgbIgEgAyABa0GADUHgDkGQGSAAKAKM4QEgACgCnOIBIAQQHyIAEAMNACAAIAFqIAJrIQcLIAcLrQMBCn8jAEGABGsiCCQAAn9BUiACQf8BSw0AGkFUIANBDEsNABogAkEBaiELIABBBGohCUGAgAQgA0F/anRBEHUhCkEAIQJBASEEQQEgA3QiB0F/aiIMIQUDQCACIAtGRQRAAkAgASACQQF0Ig1qLwEAIgZB//8DRgRAIAkgBUECdGogAjoAAiAFQX9qIQVBASEGDAELIARBACAKIAZBEHRBEHVKGyEECyAIIA1qIAY7AQAgAkEBaiECDAELCyAAIAQ7AQIgACADOwEAIAdBA3YgB0EBdmpBA2ohBkEAIQRBACECA0AgBCALRkUEQCABIARBAXRqLgEAIQpBACEAA0AgACAKTkUEQCAJIAJBAnRqIAQ6AAIDQCACIAZqIAxxIgIgBUsNAAsgAEEBaiEADAELCyAEQQFqIQQMAQsLQX8gAg0AGkEAIQIDfyACIAdGBH9BAAUgCCAJIAJBAnRqIgAtAAJBAXRqIgEgAS8BACIBQQFqOwEAIAAgAyABEBRrIgU6AAMgACABIAVB/wFxdCAHazsBACACQQFqIQIMAQsLCyEFIAhBgARqJAAgBQvjBgEIf0FsIQcCQCACQQNJDQACQAJAAkACQCABLQAAIgNBA3EiCUEBaw4DAwEAAgsgACgCiOEBDQBBYg8LIAJBBUkNAkEDIQYgASgAACEFAn8CQAJAIANBAnZBA3EiCEF+aiIEQQFNBEAgBEEBaw0BDAILIAVBDnZB/wdxIQQgBUEEdkH/B3EhAyAIRQwCCyAFQRJ2IQRBBCEGIAVBBHZB//8AcSEDQQAMAQsgBUEEdkH//w9xIgNBgIAISw0DIAEtAARBCnQgBUEWdnIhBEEFIQZBAAshBSAEIAZqIgogAksNAgJAIANBgQZJDQAgACgCnOIBRQ0AQQAhAgNAIAJBg4ABSw0BIAJBQGshAgwAAAsACwJ/IAlBA0YEQCABIAZqIQEgAEHw4gFqIQIgACgCDCEGIAUEQCACIAMgASAEIAYQXwwCCyACIAMgASAEIAYQXQwBCyAAQbjQAWohAiABIAZqIQEgAEHw4gFqIQYgAEGo0ABqIQggBQRAIAggBiADIAEgBCACEF4MAQsgCCAGIAMgASAEIAIQXAsQAw0CIAAgAzYCgOIBIABBATYCiOEBIAAgAEHw4gFqNgLw4QEgCUECRgRAIAAgAEGo0ABqNgIMCyAAIANqIgBBiOMBakIANwAAIABBgOMBakIANwAAIABB+OIBakIANwAAIABB8OIBakIANwAAIAoPCwJ/AkACQAJAIANBAnZBA3FBf2oiBEECSw0AIARBAWsOAgACAQtBASEEIANBA3YMAgtBAiEEIAEvAABBBHYMAQtBAyEEIAEQIUEEdgsiAyAEaiIFQSBqIAJLBEAgBSACSw0CIABB8OIBaiABIARqIAMQCyEBIAAgAzYCgOIBIAAgATYC8OEBIAEgA2oiAEIANwAYIABCADcAECAAQgA3AAggAEIANwAAIAUPCyAAIAM2AoDiASAAIAEgBGo2AvDhASAFDwsCfwJAAkACQCADQQJ2QQNxQX9qIgRBAksNACAEQQFrDgIAAgELQQEhByADQQN2DAILQQIhByABLwAAQQR2DAELIAJBBEkgARAhIgJBj4CAAUtyDQFBAyEHIAJBBHYLIQIgAEHw4gFqIAEgB2otAAAgAkEgahAQIQEgACACNgKA4gEgACABNgLw4QEgB0EBaiEHCyAHC0sAIABC+erQ0OfJoeThADcDICAAQgA3AxggAELP1tO+0ser2UI3AxAgAELW64Lu6v2J9eAANwMIIABCADcDACAAQShqQQBBKBAQGgviAgICfwV+IABBKGoiASAAKAJIaiECAn4gACkDACIDQiBaBEAgACkDECIEQgeJIAApAwgiBUIBiXwgACkDGCIGQgyJfCAAKQMgIgdCEol8IAUQGSAEEBkgBhAZIAcQGQwBCyAAKQMYQsXP2bLx5brqJ3wLIAN8IQMDQCABQQhqIgAgAk0EQEIAIAEpAAAQCSADhUIbiUKHla+vmLbem55/fkLj3MqV/M7y9YV/fCEDIAAhAQwBCwsCQCABQQRqIgAgAksEQCABIQAMAQsgASgAAK1Ch5Wvr5i23puef34gA4VCF4lCz9bTvtLHq9lCfkL5893xmfaZqxZ8IQMLA0AgACACSQRAIAAxAABCxc/ZsvHluuonfiADhUILiUKHla+vmLbem55/fiEDIABBAWohAAwBCwsgA0IhiCADhULP1tO+0ser2UJ+IgNCHYggA4VC+fPd8Zn2masWfiIDQiCIIAOFC+8CAgJ/BH4gACAAKQMAIAKtfDcDAAJAAkAgACgCSCIDIAJqIgRBH00EQCABRQ0BIAAgA2pBKGogASACECAgACgCSCACaiEEDAELIAEgAmohAgJ/IAMEQCAAQShqIgQgA2ogAUEgIANrECAgACAAKQMIIAQpAAAQCTcDCCAAIAApAxAgACkAMBAJNwMQIAAgACkDGCAAKQA4EAk3AxggACAAKQMgIABBQGspAAAQCTcDICAAKAJIIQMgAEEANgJIIAEgA2tBIGohAQsgAUEgaiACTQsEQCACQWBqIQMgACkDICEFIAApAxghBiAAKQMQIQcgACkDCCEIA0AgCCABKQAAEAkhCCAHIAEpAAgQCSEHIAYgASkAEBAJIQYgBSABKQAYEAkhBSABQSBqIgEgA00NAAsgACAFNwMgIAAgBjcDGCAAIAc3AxAgACAINwMICyABIAJPDQEgAEEoaiABIAIgAWsiBBAgCyAAIAQ2AkgLCy8BAX8gAEUEQEG2f0EAIAMbDwtBun8hBCADIAFNBH8gACACIAMQEBogAwVBun8LCy8BAX8gAEUEQEG2f0EAIAMbDwtBun8hBCADIAFNBH8gACACIAMQCxogAwVBun8LC6gCAQZ/IwBBEGsiByQAIABB2OABaikDAEKAgIAQViEIQbh/IQUCQCAEQf//B0sNACAAIAMgBBBCIgUQAyIGDQAgACgCnOIBIQkgACAHQQxqIAMgAyAFaiAGGyIKIARBACAFIAYbayIGEEAiAxADBEAgAyEFDAELIAcoAgwhBCABRQRAQbp/IQUgBEEASg0BCyAGIANrIQUgAyAKaiEDAkAgCQRAIABBADYCnOIBDAELAkACQAJAIARBBUgNACAAQdjgAWopAwBCgICACFgNAAwBCyAAQQA2ApziAQwBCyAAKAIIED8hBiAAQQA2ApziASAGQRRPDQELIAAgASACIAMgBSAEIAgQOSEFDAELIAAgASACIAMgBSAEIAgQOiEFCyAHQRBqJAAgBQtnACAAQdDgAWogASACIAAoAuzhARAuIgEQAwRAIAEPC0G4fyECAkAgAQ0AIABB7OABaigCACIBBEBBYCECIAAoApjiASABRw0BC0EAIQIgAEHw4AFqKAIARQ0AIABBkOEBahBDCyACCycBAX8QVyIERQRAQUAPCyAEIAAgASACIAMgBBBLEE8hACAEEFYgAAs/AQF/AkACQAJAIAAoAqDiAUEBaiIBQQJLDQAgAUEBaw4CAAECCyAAEDBBAA8LIABBADYCoOIBCyAAKAKU4gELvAMCB38BfiMAQRBrIgkkAEG4fyEGAkAgBCgCACIIQQVBCSAAKALs4QEiBRtJDQAgAygCACIHQQFBBSAFGyAFEC8iBRADBEAgBSEGDAELIAggBUEDakkNACAAIAcgBRBJIgYQAw0AIAEgAmohCiAAQZDhAWohCyAIIAVrIQIgBSAHaiEHIAEhBQNAIAcgAiAJECwiBhADDQEgAkF9aiICIAZJBEBBuH8hBgwCCyAJKAIAIghBAksEQEFsIQYMAgsgB0EDaiEHAn8CQAJAAkAgCEEBaw4CAgABCyAAIAUgCiAFayAHIAYQSAwCCyAFIAogBWsgByAGEEcMAQsgBSAKIAVrIActAAAgCSgCCBBGCyIIEAMEQCAIIQYMAgsgACgC8OABBEAgCyAFIAgQRQsgAiAGayECIAYgB2ohByAFIAhqIQUgCSgCBEUNAAsgACkD0OABIgxCf1IEQEFsIQYgDCAFIAFrrFINAQsgACgC8OABBEBBaiEGIAJBBEkNASALEEQhDCAHKAAAIAynRw0BIAdBBGohByACQXxqIQILIAMgBzYCACAEIAI2AgAgBSABayEGCyAJQRBqJAAgBgsuACAAECsCf0EAQQAQAw0AGiABRSACRXJFBEBBYiAAIAEgAhA9EAMNARoLQQALCzcAIAEEQCAAIAAoAsTgASABKAIEIAEoAghqRzYCnOIBCyAAECtBABADIAFFckUEQCAAIAEQWwsL0QIBB38jAEEQayIGJAAgBiAENgIIIAYgAzYCDCAFBEAgBSgCBCEKIAUoAgghCQsgASEIAkACQANAIAAoAuzhARAWIQsCQANAIAQgC0kNASADKAAAQXBxQdDUtMIBRgRAIAMgBBAiIgcQAw0EIAQgB2shBCADIAdqIQMMAQsLIAYgAzYCDCAGIAQ2AggCQCAFBEAgACAFEE5BACEHQQAQA0UNAQwFCyAAIAogCRBNIgcQAw0ECyAAIAgQUCAMQQFHQQAgACAIIAIgBkEMaiAGQQhqEEwiByIDa0EAIAMQAxtBCkdyRQRAQbh/IQcMBAsgBxADDQMgAiAHayECIAcgCGohCEEBIQwgBigCDCEDIAYoAgghBAwBCwsgBiADNgIMIAYgBDYCCEG4fyEHIAQNASAIIAFrIQcMAQsgBiADNgIMIAYgBDYCCAsgBkEQaiQAIAcLRgECfyABIAAoArjgASICRwRAIAAgAjYCxOABIAAgATYCuOABIAAoArzgASEDIAAgATYCvOABIAAgASADIAJrajYCwOABCwutAgIEfwF+IwBBQGoiBCQAAkACQCACQQhJDQAgASgAAEFwcUHQ1LTCAUcNACABIAIQIiEBIABCADcDCCAAQQA2AgQgACABNgIADAELIARBGGogASACEC0iAxADBEAgACADEBoMAQsgAwRAIABBuH8QGgwBCyACIAQoAjAiA2shAiABIANqIQMDQAJAIAAgAyACIARBCGoQLCIFEAMEfyAFBSACIAVBA2oiBU8NAUG4fwsQGgwCCyAGQQFqIQYgAiAFayECIAMgBWohAyAEKAIMRQ0ACyAEKAI4BEAgAkEDTQRAIABBuH8QGgwCCyADQQRqIQMLIAQoAighAiAEKQMYIQcgAEEANgIEIAAgAyABazYCACAAIAIgBmytIAcgB0J/URs3AwgLIARBQGskAAslAQF/IwBBEGsiAiQAIAIgACABEFEgAigCACEAIAJBEGokACAAC30BBH8jAEGQBGsiBCQAIARB/wE2AggCQCAEQRBqIARBCGogBEEMaiABIAIQFSIGEAMEQCAGIQUMAQtBVCEFIAQoAgwiB0EGSw0AIAMgBEEQaiAEKAIIIAcQQSIFEAMNACAAIAEgBmogAiAGayADEDwhBQsgBEGQBGokACAFC4cBAgJ/An5BABAWIQMCQANAIAEgA08EQAJAIAAoAABBcHFB0NS0wgFGBEAgACABECIiAhADRQ0BQn4PCyAAIAEQVSIEQn1WDQMgBCAFfCIFIARUIQJCfiEEIAINAyAAIAEQUiICEAMNAwsgASACayEBIAAgAmohAAwBCwtCfiAFIAEbIQQLIAQLPwIBfwF+IwBBMGsiAiQAAn5CfiACQQhqIAAgARAtDQAaQgAgAigCHEEBRg0AGiACKQMICyEDIAJBMGokACADC40BAQJ/IwBBMGsiASQAAkAgAEUNACAAKAKI4gENACABIABB/OEBaigCADYCKCABIAApAvThATcDICAAEDAgACgCqOIBIQIgASABKAIoNgIYIAEgASkDIDcDECACIAFBEGoQGyAAQQA2AqjiASABIAEoAig2AgggASABKQMgNwMAIAAgARAbCyABQTBqJAALKgECfyMAQRBrIgAkACAAQQA2AgggAEIANwMAIAAQWCEBIABBEGokACABC4cBAQN/IwBBEGsiAiQAAkAgACgCAEUgACgCBEVzDQAgAiAAKAIINgIIIAIgACkCADcDAAJ/IAIoAgAiAQRAIAIoAghBqOMJIAERBQAMAQtBqOMJECgLIgFFDQAgASAAKQIANwL04QEgAUH84QFqIAAoAgg2AgAgARBZIAEhAwsgAkEQaiQAIAMLywEBAn8jAEEgayIBJAAgAEGBgIDAADYCtOIBIABBADYCiOIBIABBADYC7OEBIABCADcDkOIBIABBADYCpOMJIABBADYC3OIBIABCADcCzOIBIABBADYCvOIBIABBADYCxOABIABCADcCnOIBIABBpOIBakIANwIAIABBrOIBakEANgIAIAFCADcCECABQgA3AhggASABKQMYNwMIIAEgASkDEDcDACABKAIIQQh2QQFxIQIgAEEANgLg4gEgACACNgKM4gEgAUEgaiQAC3YBA38jAEEwayIBJAAgAARAIAEgAEHE0AFqIgIoAgA2AiggASAAKQK80AE3AyAgACgCACEDIAEgAigCADYCGCABIAApArzQATcDECADIAFBEGoQGyABIAEoAig2AgggASABKQMgNwMAIAAgARAbCyABQTBqJAALzAEBAX8gACABKAK00AE2ApjiASAAIAEoAgQiAjYCwOABIAAgAjYCvOABIAAgAiABKAIIaiICNgK44AEgACACNgLE4AEgASgCuNABBEAgAEKBgICAEDcDiOEBIAAgAUGk0ABqNgIMIAAgAUGUIGo2AgggACABQZwwajYCBCAAIAFBDGo2AgAgAEGs0AFqIAFBqNABaigCADYCACAAQbDQAWogAUGs0AFqKAIANgIAIABBtNABaiABQbDQAWooAgA2AgAPCyAAQgA3A4jhAQs7ACACRQRAQbp/DwsgBEUEQEFsDwsgAiAEEGAEQCAAIAEgAiADIAQgBRBhDwsgACABIAIgAyAEIAUQZQtGAQF/IwBBEGsiBSQAIAVBCGogBBAOAn8gBS0ACQRAIAAgASACIAMgBBAyDAELIAAgASACIAMgBBA0CyEAIAVBEGokACAACzQAIAAgAyAEIAUQNiIFEAMEQCAFDwsgBSAESQR/IAEgAiADIAVqIAQgBWsgABA1BUG4fwsLRgEBfyMAQRBrIgUkACAFQQhqIAQQDgJ/IAUtAAkEQCAAIAEgAiADIAQQYgwBCyAAIAEgAiADIAQQNQshACAFQRBqJAAgAAtZAQF/QQ8hAiABIABJBEAgAUEEdCAAbiECCyAAQQh2IgEgAkEYbCIAQYwIaigCAGwgAEGICGooAgBqIgJBA3YgAmogAEGACGooAgAgAEGECGooAgAgAWxqSQs3ACAAIAMgBCAFQYAQEDMiBRADBEAgBQ8LIAUgBEkEfyABIAIgAyAFaiAEIAVrIAAQMgVBuH8LC78DAQN/IwBBIGsiBSQAIAVBCGogAiADEAYiAhADRQRAIAAgAWoiB0F9aiEGIAUgBBAOIARBBGohAiAFLQACIQMDQEEAIAAgBkkgBUEIahAEGwRAIAAgAiAFQQhqIAMQAkECdGoiBC8BADsAACAFQQhqIAQtAAIQASAAIAQtAANqIgQgAiAFQQhqIAMQAkECdGoiAC8BADsAACAFQQhqIAAtAAIQASAEIAAtAANqIQAMAQUgB0F+aiEEA0AgBUEIahAEIAAgBEtyRQRAIAAgAiAFQQhqIAMQAkECdGoiBi8BADsAACAFQQhqIAYtAAIQASAAIAYtAANqIQAMAQsLA0AgACAES0UEQCAAIAIgBUEIaiADEAJBAnRqIgYvAQA7AAAgBUEIaiAGLQACEAEgACAGLQADaiEADAELCwJAIAAgB08NACAAIAIgBUEIaiADEAIiA0ECdGoiAC0AADoAACAALQADQQFGBEAgBUEIaiAALQACEAEMAQsgBSgCDEEfSw0AIAVBCGogAiADQQJ0ai0AAhABIAUoAgxBIUkNACAFQSA2AgwLIAFBbCAFQQhqEAobIQILCwsgBUEgaiQAIAILkgIBBH8jAEFAaiIJJAAgCSADQTQQCyEDAkAgBEECSA0AIAMgBEECdGooAgAhCSADQTxqIAgQIyADQQE6AD8gAyACOgA+QQAhBCADKAI8IQoDQCAEIAlGDQEgACAEQQJ0aiAKNgEAIARBAWohBAwAAAsAC0EAIQkDQCAGIAlGRQRAIAMgBSAJQQF0aiIKLQABIgtBAnRqIgwoAgAhBCADQTxqIAotAABBCHQgCGpB//8DcRAjIANBAjoAPyADIAcgC2siCiACajoAPiAEQQEgASAKa3RqIQogAygCPCELA0AgACAEQQJ0aiALNgEAIARBAWoiBCAKSQ0ACyAMIAo2AgAgCUEBaiEJDAELCyADQUBrJAALowIBCX8jAEHQAGsiCSQAIAlBEGogBUE0EAsaIAcgBmshDyAHIAFrIRADQAJAIAMgCkcEQEEBIAEgByACIApBAXRqIgYtAAEiDGsiCGsiC3QhDSAGLQAAIQ4gCUEQaiAMQQJ0aiIMKAIAIQYgCyAPTwRAIAAgBkECdGogCyAIIAUgCEE0bGogCCAQaiIIQQEgCEEBShsiCCACIAQgCEECdGooAgAiCEEBdGogAyAIayAHIA4QYyAGIA1qIQgMAgsgCUEMaiAOECMgCUEBOgAPIAkgCDoADiAGIA1qIQggCSgCDCELA0AgBiAITw0CIAAgBkECdGogCzYBACAGQQFqIQYMAAALAAsgCUHQAGokAA8LIAwgCDYCACAKQQFqIQoMAAALAAs0ACAAIAMgBCAFEDYiBRADBEAgBQ8LIAUgBEkEfyABIAIgAyAFaiAEIAVrIAAQNAVBuH8LCyMAIAA/AEEQdGtB//8DakEQdkAAQX9GBEBBAA8LQQAQAEEBCzsBAX8gAgRAA0AgACABIAJBgCAgAkGAIEkbIgMQCyEAIAFBgCBqIQEgAEGAIGohACACIANrIgINAAsLCwYAIAAQAwsLqBUJAEGICAsNAQAAAAEAAAACAAAAAgBBoAgLswYBAAAAAQAAAAIAAAACAAAAJgAAAIIAAAAhBQAASgAAAGcIAAAmAAAAwAEAAIAAAABJBQAASgAAAL4IAAApAAAALAIAAIAAAABJBQAASgAAAL4IAAAvAAAAygIAAIAAAACKBQAASgAAAIQJAAA1AAAAcwMAAIAAAACdBQAASgAAAKAJAAA9AAAAgQMAAIAAAADrBQAASwAAAD4KAABEAAAAngMAAIAAAABNBgAASwAAAKoKAABLAAAAswMAAIAAAADBBgAATQAAAB8NAABNAAAAUwQAAIAAAAAjCAAAUQAAAKYPAABUAAAAmQQAAIAAAABLCQAAVwAAALESAABYAAAA2gQAAIAAAABvCQAAXQAAACMUAABUAAAARQUAAIAAAABUCgAAagAAAIwUAABqAAAArwUAAIAAAAB2CQAAfAAAAE4QAAB8AAAA0gIAAIAAAABjBwAAkQAAAJAHAACSAAAAAAAAAAEAAAABAAAABQAAAA0AAAAdAAAAPQAAAH0AAAD9AAAA/QEAAP0DAAD9BwAA/Q8AAP0fAAD9PwAA/X8AAP3/AAD9/wEA/f8DAP3/BwD9/w8A/f8fAP3/PwD9/38A/f//AP3//wH9//8D/f//B/3//w/9//8f/f//P/3//38AAAAAAQAAAAIAAAADAAAABAAAAAUAAAAGAAAABwAAAAgAAAAJAAAACgAAAAsAAAAMAAAADQAAAA4AAAAPAAAAEAAAABEAAAASAAAAEwAAABQAAAAVAAAAFgAAABcAAAAYAAAAGQAAABoAAAAbAAAAHAAAAB0AAAAeAAAAHwAAAAMAAAAEAAAABQAAAAYAAAAHAAAACAAAAAkAAAAKAAAACwAAAAwAAAANAAAADgAAAA8AAAAQAAAAEQAAABIAAAATAAAAFAAAABUAAAAWAAAAFwAAABgAAAAZAAAAGgAAABsAAAAcAAAAHQAAAB4AAAAfAAAAIAAAACEAAAAiAAAAIwAAACUAAAAnAAAAKQAAACsAAAAvAAAAMwAAADsAAABDAAAAUwAAAGMAAACDAAAAAwEAAAMCAAADBAAAAwgAAAMQAAADIAAAA0AAAAOAAAADAAEAQeAPC1EBAAAAAQAAAAEAAAABAAAAAgAAAAIAAAADAAAAAwAAAAQAAAAEAAAABQAAAAcAAAAIAAAACQAAAAoAAAALAAAADAAAAA0AAAAOAAAADwAAABAAQcQQC4sBAQAAAAIAAAADAAAABAAAAAUAAAAGAAAABwAAAAgAAAAJAAAACgAAAAsAAAAMAAAADQAAAA4AAAAPAAAAEAAAABIAAAAUAAAAFgAAABgAAAAcAAAAIAAAACgAAAAwAAAAQAAAAIAAAAAAAQAAAAIAAAAEAAAACAAAABAAAAAgAAAAQAAAAIAAAAAAAQBBkBIL5gQBAAAAAQAAAAEAAAABAAAAAgAAAAIAAAADAAAAAwAAAAQAAAAGAAAABwAAAAgAAAAJAAAACgAAAAsAAAAMAAAADQAAAA4AAAAPAAAAEAAAAAEAAAAEAAAACAAAAAAAAAABAAEBBgAAAAAAAAQAAAAAEAAABAAAAAAgAAAFAQAAAAAAAAUDAAAAAAAABQQAAAAAAAAFBgAAAAAAAAUHAAAAAAAABQkAAAAAAAAFCgAAAAAAAAUMAAAAAAAABg4AAAAAAAEFEAAAAAAAAQUUAAAAAAABBRYAAAAAAAIFHAAAAAAAAwUgAAAAAAAEBTAAAAAgAAYFQAAAAAAABwWAAAAAAAAIBgABAAAAAAoGAAQAAAAADAYAEAAAIAAABAAAAAAAAAAEAQAAAAAAAAUCAAAAIAAABQQAAAAAAAAFBQAAACAAAAUHAAAAAAAABQgAAAAgAAAFCgAAAAAAAAULAAAAAAAABg0AAAAgAAEFEAAAAAAAAQUSAAAAIAABBRYAAAAAAAIFGAAAACAAAwUgAAAAAAADBSgAAAAAAAYEQAAAABAABgRAAAAAIAAHBYAAAAAAAAkGAAIAAAAACwYACAAAMAAABAAAAAAQAAAEAQAAACAAAAUCAAAAIAAABQMAAAAgAAAFBQAAACAAAAUGAAAAIAAABQgAAAAgAAAFCQAAACAAAAULAAAAIAAABQwAAAAAAAAGDwAAACAAAQUSAAAAIAABBRQAAAAgAAIFGAAAACAAAgUcAAAAIAADBSgAAAAgAAQFMAAAAAAAEAYAAAEAAAAPBgCAAAAAAA4GAEAAAAAADQYAIABBgBcLhwIBAAEBBQAAAAAAAAUAAAAAAAAGBD0AAAAAAAkF/QEAAAAADwX9fwAAAAAVBf3/HwAAAAMFBQAAAAAABwR9AAAAAAAMBf0PAAAAABIF/f8DAAAAFwX9/38AAAAFBR0AAAAAAAgE/QAAAAAADgX9PwAAAAAUBf3/DwAAAAIFAQAAABAABwR9AAAAAAALBf0HAAAAABEF/f8BAAAAFgX9/z8AAAAEBQ0AAAAQAAgE/QAAAAAADQX9HwAAAAATBf3/BwAAAAEFAQAAABAABgQ9AAAAAAAKBf0DAAAAABAF/f8AAAAAHAX9//8PAAAbBf3//wcAABoF/f//AwAAGQX9//8BAAAYBf3//wBBkBkLhgQBAAEBBgAAAAAAAAYDAAAAAAAABAQAAAAgAAAFBQAAAAAAAAUGAAAAAAAABQgAAAAAAAAFCQAAAAAAAAULAAAAAAAABg0AAAAAAAAGEAAAAAAAAAYTAAAAAAAABhYAAAAAAAAGGQAAAAAAAAYcAAAAAAAABh8AAAAAAAAGIgAAAAAAAQYlAAAAAAABBikAAAAAAAIGLwAAAAAAAwY7AAAAAAAEBlMAAAAAAAcGgwAAAAAACQYDAgAAEAAABAQAAAAAAAAEBQAAACAAAAUGAAAAAAAABQcAAAAgAAAFCQAAAAAAAAUKAAAAAAAABgwAAAAAAAAGDwAAAAAAAAYSAAAAAAAABhUAAAAAAAAGGAAAAAAAAAYbAAAAAAAABh4AAAAAAAAGIQAAAAAAAQYjAAAAAAABBicAAAAAAAIGKwAAAAAAAwYzAAAAAAAEBkMAAAAAAAUGYwAAAAAACAYDAQAAIAAABAQAAAAwAAAEBAAAABAAAAQFAAAAIAAABQcAAAAgAAAFCAAAACAAAAUKAAAAIAAABQsAAAAAAAAGDgAAAAAAAAYRAAAAAAAABhQAAAAAAAAGFwAAAAAAAAYaAAAAAAAABh0AAAAAAAAGIAAAAAAAEAYDAAEAAAAPBgOAAAAAAA4GA0AAAAAADQYDIAAAAAAMBgMQAAAAAAsGAwgAAAAACgYDBABBpB0L2QEBAAAAAwAAAAcAAAAPAAAAHwAAAD8AAAB/AAAA/wAAAP8BAAD/AwAA/wcAAP8PAAD/HwAA/z8AAP9/AAD//wAA//8BAP//AwD//wcA//8PAP//HwD//z8A//9/AP///wD///8B////A////wf///8P////H////z////9/AAAAAAEAAAACAAAABAAAAAAAAAACAAAABAAAAAgAAAAAAAAAAQAAAAIAAAABAAAABAAAAAQAAAAEAAAABAAAAAgAAAAIAAAACAAAAAcAAAAIAAAACQAAAAoAAAALAEGgIAsDwBBQ",jx="display-p3",qx="display-p3-linear",tc=new WeakMap;let nc=0,ic;class Wn extends vs{constructor(e){super(e),this.transcoderPath="",this.transcoderBinary=null,this.transcoderPending=null,this.workerPool=new Fx,this.workerSourceURL="",this.workerConfig=null,typeof MSC_TRANSCODER<"u"&&console.warn('THREE.KTX2Loader: Please update to latest "basis_transcoder". "msc_basis_transcoder" is no longer supported in three.js r125+.')}setTranscoderPath(e){return this.transcoderPath=e,this}setWorkerLimit(e){return this.workerPool.setWorkerLimit(e),this}async detectSupportAsync(e){return this.workerConfig={astcSupported:await e.hasFeatureAsync("texture-compression-astc"),astcHDRSupported:!1,etc1Supported:await e.hasFeatureAsync("texture-compression-etc1"),etc2Supported:await e.hasFeatureAsync("texture-compression-etc2"),dxtSupported:await e.hasFeatureAsync("texture-compression-bc"),bptcSupported:await e.hasFeatureAsync("texture-compression-bptc"),pvrtcSupported:await e.hasFeatureAsync("texture-compression-pvrtc")},this}detectSupport(e){return e.isWebGPURenderer===!0?this.workerConfig={astcSupported:e.hasFeature("texture-compression-astc"),astcHDRSupported:!1,etc1Supported:e.hasFeature("texture-compression-etc1"),etc2Supported:e.hasFeature("texture-compression-etc2"),dxtSupported:e.hasFeature("texture-compression-bc"),bptcSupported:e.hasFeature("texture-compression-bptc"),pvrtcSupported:e.hasFeature("texture-compression-pvrtc")}:this.workerConfig={astcSupported:e.extensions.has("WEBGL_compressed_texture_astc"),astcHDRSupported:e.extensions.has("WEBGL_compressed_texture_astc")&&e.extensions.get("WEBGL_compressed_texture_astc").getSupportedProfiles().includes("hdr"),etc1Supported:e.extensions.has("WEBGL_compressed_texture_etc1"),etc2Supported:e.extensions.has("WEBGL_compressed_texture_etc"),dxtSupported:e.extensions.has("WEBGL_compressed_texture_s3tc"),bptcSupported:e.extensions.has("EXT_texture_compression_bptc"),pvrtcSupported:e.extensions.has("WEBGL_compressed_texture_pvrtc")||e.extensions.has("WEBKIT_WEBGL_compressed_texture_pvrtc")},this}init(){if(!this.transcoderPending){const e=new La(this.manager);e.setPath(this.transcoderPath),e.setWithCredentials(this.withCredentials);const t=e.loadAsync("basis_transcoder.js"),n=new La(this.manager);n.setPath(this.transcoderPath),n.setResponseType("arraybuffer"),n.setWithCredentials(this.withCredentials);const s=n.loadAsync("basis_transcoder.wasm");this.transcoderPending=Promise.all([t,s]).then(([a,r])=>{const o=Wn.BasisWorker.toString(),c=["/* constants */","let _EngineFormat = "+JSON.stringify(Wn.EngineFormat),"let _EngineType = "+JSON.stringify(Wn.EngineType),"let _TranscoderFormat = "+JSON.stringify(Wn.TranscoderFormat),"let _BasisFormat = "+JSON.stringify(Wn.BasisFormat),"/* basis_transcoder.js */",a,"/* worker */",o.substring(o.indexOf("{")+1,o.lastIndexOf("}"))].join(`
`);this.workerSourceURL=URL.createObjectURL(new Blob([c])),this.transcoderBinary=r,this.workerPool.setWorkerCreator(()=>{const l=new Worker(this.workerSourceURL),h=this.transcoderBinary.slice(0);return l.postMessage({type:"init",config:this.workerConfig,transcoderBinary:h},[h]),l})}),nc>0&&console.warn("THREE.KTX2Loader: Multiple active KTX2 loaders may cause performance issues. Use a single KTX2Loader instance, or call .dispose() on old instances."),nc++}return this.transcoderPending}load(e,t,n,s){if(this.workerConfig===null)throw new Error("THREE.KTX2Loader: Missing initialization with `.detectSupport( renderer )`.");const a=new La(this.manager);a.setResponseType("arraybuffer"),a.setWithCredentials(this.withCredentials),a.load(e,r=>{this.parse(r,t,s)},n,s)}parse(e,t,n){if(this.workerConfig===null)throw new Error("THREE.KTX2Loader: Missing initialization with `.detectSupport( renderer )`.");if(tc.has(e))return tc.get(e).promise.then(t).catch(n);this._createTexture(e).then(s=>t?t(s):null).catch(n)}_createTextureFrom(e,t){const{type:n,error:s,data:{faces:a,width:r,height:o,format:c,type:l,dfdFlags:h}}=e;if(n==="error")return Promise.reject(s);let u;if(t.faceCount===6)u=new ub(a,c,l);else{const A=a[0].mipmaps;u=t.layerCount>1?new hb(A,r,o,t.layerCount,c,l):new ho(A,r,o,c,l)}return u.minFilter=a[0].mipmaps.length===1?_n:Ai,u.magFilter=_n,u.generateMipmaps=!1,u.needsUpdate=!0,u.colorSpace=Tf(t),u.premultiplyAlpha=!!(h&Qx),u}async _createTexture(e,t={}){const n=Vx(new Uint8Array(e)),s=n.vkFormat===Il&&n.dataFormatDescriptor[0].colorModel===167;if(!(n.vkFormat===Gx||s&&!this.workerConfig.astcHDRSupported))return Xx(n);const r=t,o=this.init().then(()=>this.workerPool.postMessage({type:"transcode",buffer:e,taskConfig:r},[e])).then(c=>this._createTextureFrom(c.data,n));return tc.set(e,{promise:o}),o}dispose(){return this.workerPool.dispose(),this.workerSourceURL&&URL.revokeObjectURL(this.workerSourceURL),nc--,this}}Wn.BasisFormat={ETC1S:0,UASTC:1,UASTC_HDR:2};Wn.TranscoderFormat={ETC1:0,ETC2:1,BC1:2,BC3:3,BC4:4,BC5:5,BC7_M6_OPAQUE_ONLY:6,BC7_M5:7,PVRTC1_4_RGB:8,PVRTC1_4_RGBA:9,ASTC_4x4:10,ATC_RGB:11,ATC_RGBA_INTERPOLATED_ALPHA:12,RGBA32:13,RGB565:14,BGR565:15,RGBA4444:16,BC6H:22,RGB_HALF:24,RGBA_HALF:25};Wn.EngineFormat={RGBAFormat:Yt,RGBA_ASTC_4x4_Format:Na,RGB_BPTC_UNSIGNED_Format:Xr,RGBA_BPTC_Format:Ba,RGBA_ETC2_EAC_Format:Yr,RGBA_PVRTC_4BPPV1_Format:Wr,RGBA_S3TC_DXT5_Format:Ta,RGB_ETC1_Format:jr,RGB_ETC2_Format:qr,RGB_PVRTC_4BPPV1_Format:Vr,RGBA_S3TC_DXT1_Format:Ia};Wn.EngineType={UnsignedByteType:qt,HalfFloatType:rn,FloatType:fn};Wn.BasisWorker=function(){let i,e,t;const n=_EngineFormat,s=_EngineType,a=_TranscoderFormat,r=_BasisFormat;self.addEventListener("message",function(x){const _=x.data;switch(_.type){case"init":i=_.config,o(_.transcoderBinary);break;case"transcode":e.then(()=>{try{const{faces:p,buffers:d,width:M,height:y,hasAlpha:v,format:q,type:H,dfdFlags:U}=c(_.buffer);self.postMessage({type:"transcode",id:_.id,data:{faces:p,width:M,height:y,hasAlpha:v,format:q,type:H,dfdFlags:U}},d)}catch(p){console.error(p),self.postMessage({type:"error",id:_.id,error:p.message})}});break}});function o(x){e=new Promise(_=>{t={wasmBinary:x,onRuntimeInitialized:_},BASIS(t)}).then(()=>{t.initializeBasis(),t.KTX2File===void 0&&console.warn("THREE.KTX2Loader: Please update Basis Universal transcoder.")})}function c(x){const _=new t.KTX2File(new Uint8Array(x));function p(){_.close(),_.delete()}if(!_.isValid())throw p(),new Error("THREE.KTX2Loader:	Invalid or unsupported .ktx2 file");let d;if(_.isUASTC())d=r.UASTC;else if(_.isETC1S())d=r.ETC1S;else if(_.isHDR())d=r.UASTC_HDR;else throw new Error("THREE.KTX2Loader: Unknown Basis encoding");const M=_.getWidth(),y=_.getHeight(),v=_.getLayers()||1,q=_.getLevels(),H=_.getFaces(),U=_.getHasAlpha(),Z=_.getDFDFlags(),{transcoderFormat:w,engineFormat:S,engineType:m}=u(d,M,y,U);if(!M||!y||!q)throw p(),new Error("THREE.KTX2Loader:	Invalid texture");if(!_.startTranscoding())throw p(),new Error("THREE.KTX2Loader: .startTranscoding failed");const I=[],Q=[];for(let K=0;K<H;K++){const Y=[];for(let te=0;te<q;te++){const X=[];let V,ue;for(let le=0;le<v;le++){const ge=_.getImageLevelInfo(te,le,K);K===0&&te===0&&le===0&&(ge.origWidth%4!==0||ge.origHeight%4!==0)&&console.warn("THREE.KTX2Loader: ETC1S and UASTC textures should use multiple-of-four dimensions."),q>1?(V=ge.origWidth,ue=ge.origHeight):(V=ge.width,ue=ge.height);let Ee=new Uint8Array(_.getImageTranscodedSizeInBytes(te,le,0,w));const $=_.transcodeImage(Ee,te,le,K,w,0,-1,-1);if(m===s.HalfFloatType&&(Ee=new Uint16Array(Ee.buffer,Ee.byteOffset,Ee.byteLength/Uint16Array.BYTES_PER_ELEMENT)),!$)throw p(),new Error("THREE.KTX2Loader: .transcodeImage failed.");X.push(Ee)}const ae=g(X);Y.push({data:ae,width:V,height:ue}),Q.push(ae.buffer)}I.push({mipmaps:Y,width:M,height:y,format:S,type:m})}return p(),{faces:I,buffers:Q,width:M,height:y,hasAlpha:U,dfdFlags:Z,format:S,type:m}}const l=[{if:"astcSupported",basisFormat:[r.UASTC],transcoderFormat:[a.ASTC_4x4,a.ASTC_4x4],engineFormat:[n.RGBA_ASTC_4x4_Format,n.RGBA_ASTC_4x4_Format],engineType:[s.UnsignedByteType],priorityETC1S:1/0,priorityUASTC:1,needsPowerOfTwo:!1},{if:"bptcSupported",basisFormat:[r.ETC1S,r.UASTC],transcoderFormat:[a.BC7_M5,a.BC7_M5],engineFormat:[n.RGBA_BPTC_Format,n.RGBA_BPTC_Format],engineType:[s.UnsignedByteType],priorityETC1S:3,priorityUASTC:2,needsPowerOfTwo:!1},{if:"dxtSupported",basisFormat:[r.ETC1S,r.UASTC],transcoderFormat:[a.BC1,a.BC3],engineFormat:[n.RGBA_S3TC_DXT1_Format,n.RGBA_S3TC_DXT5_Format],engineType:[s.UnsignedByteType],priorityETC1S:4,priorityUASTC:5,needsPowerOfTwo:!1},{if:"etc2Supported",basisFormat:[r.ETC1S,r.UASTC],transcoderFormat:[a.ETC1,a.ETC2],engineFormat:[n.RGB_ETC2_Format,n.RGBA_ETC2_EAC_Format],engineType:[s.UnsignedByteType],priorityETC1S:1,priorityUASTC:3,needsPowerOfTwo:!1},{if:"etc1Supported",basisFormat:[r.ETC1S,r.UASTC],transcoderFormat:[a.ETC1],engineFormat:[n.RGB_ETC1_Format],engineType:[s.UnsignedByteType],priorityETC1S:2,priorityUASTC:4,needsPowerOfTwo:!1},{if:"pvrtcSupported",basisFormat:[r.ETC1S,r.UASTC],transcoderFormat:[a.PVRTC1_4_RGB,a.PVRTC1_4_RGBA],engineFormat:[n.RGB_PVRTC_4BPPV1_Format,n.RGBA_PVRTC_4BPPV1_Format],engineType:[s.UnsignedByteType],priorityETC1S:5,priorityUASTC:6,needsPowerOfTwo:!0},{if:"bptcSupported",basisFormat:[r.UASTC_HDR],transcoderFormat:[a.BC6H],engineFormat:[n.RGB_BPTC_UNSIGNED_Format],engineType:[s.HalfFloatType],priorityHDR:1,needsPowerOfTwo:!1},{basisFormat:[r.ETC1S,r.UASTC],transcoderFormat:[a.RGBA32,a.RGBA32],engineFormat:[n.RGBAFormat,n.RGBAFormat],engineType:[s.UnsignedByteType,s.UnsignedByteType],priorityETC1S:100,priorityUASTC:100,needsPowerOfTwo:!1},{basisFormat:[r.UASTC_HDR],transcoderFormat:[a.RGBA_HALF],engineFormat:[n.RGBAFormat],engineType:[s.HalfFloatType],priorityHDR:100,needsPowerOfTwo:!1}],h={[r.ETC1S]:l.filter(x=>x.basisFormat.includes(r.ETC1S)).sort((x,_)=>x.priorityUASTC-_.priorityUASTC),[r.UASTC]:l.filter(x=>x.basisFormat.includes(r.UASTC)).sort((x,_)=>x.priorityUASTC-_.priorityUASTC),[r.UASTC_HDR]:l.filter(x=>x.basisFormat.includes(r.UASTC_HDR)).sort((x,_)=>x.priorityHDR-_.priorityHDR)};function u(x,_,p,d){const M=h[x];for(let y=0;y<M.length;y++){const v=M[y];if(v.if&&!i[v.if]||!v.basisFormat.includes(x)||d&&v.transcoderFormat.length<2||v.needsPowerOfTwo&&!(A(_)&&A(p)))continue;const q=v.transcoderFormat[d?1:0],H=v.engineFormat[d?1:0],U=v.engineType[0];return{transcoderFormat:q,engineFormat:H,engineType:U}}throw new Error("THREE.KTX2Loader: Failed to identify transcoding target.")}function A(x){return x<=2?!0:(x&x-1)===0&&x!==0}function g(x){if(x.length===1)return x[0];let _=0;for(let M=0;M<x.length;M++){const y=x[M];_+=y.byteLength}const p=new Uint8Array(_);let d=0;for(let M=0;M<x.length;M++){const y=x[M];p.set(y,d),d+=y.byteLength}return p}};const Yx=new Set([Yt,ds,Ki]),sc={[wf]:Yt,[Mf]:Yt,[xf]:Yt,[_f]:Yt,[Cf]:ds,[vf]:ds,[gf]:ds,[bf]:ds,[yf]:Ki,[Ef]:Ki,[mf]:Ki,[pf]:Ki,[Il]:Na,[If]:Qa,[Sf]:Qa},ac={[wf]:fn,[Mf]:rn,[xf]:qt,[_f]:qt,[Cf]:fn,[vf]:rn,[gf]:qt,[bf]:qt,[yf]:fn,[Ef]:rn,[mf]:qt,[pf]:qt,[Il]:rn,[If]:qt,[Sf]:qt};async function Xx(i){const{vkFormat:e}=i;if(sc[e]===void 0)throw new Error("THREE.KTX2Loader: Unsupported vkFormat.");let t;i.supercompressionScheme===ou&&(ic||(ic=new Promise(async a=>{const r=new Wx;await r.init(),a(r)})),t=await ic);const n=[];for(let a=0;a<i.levels.length;a++){const r=Math.max(1,i.pixelWidth>>a),o=Math.max(1,i.pixelHeight>>a),c=i.pixelDepth?Math.max(1,i.pixelDepth>>a):0,l=i.levels[a];let h;if(i.supercompressionScheme===Nx)h=l.levelData;else if(i.supercompressionScheme===ou)h=t.decode(l.levelData,l.uncompressedByteLength);else throw new Error("THREE.KTX2Loader: Unsupported supercompressionScheme.");let u;ac[e]===fn?u=new Float32Array(h.buffer,h.byteOffset,h.byteLength/Float32Array.BYTES_PER_ELEMENT):ac[e]===rn?u=new Uint16Array(h.buffer,h.byteOffset,h.byteLength/Uint16Array.BYTES_PER_ELEMENT):u=h,n.push({data:u,width:r,height:o,depth:c})}let s;if(Yx.has(sc[e]))s=i.pixelDepth===0?new qa(n[0].data,i.pixelWidth,i.pixelHeight):new Vu(n[0].data,i.pixelWidth,i.pixelHeight,i.pixelDepth);else{if(i.pixelDepth>0)throw new Error("THREE.KTX2Loader: Unsupported pixelDepth.");s=new ho(n,i.pixelWidth,i.pixelHeight)}return s.mipmaps=n,s.type=ac[e],s.format=sc[e],s.colorSpace=Tf(i),s.needsUpdate=!0,Promise.resolve(s)}function Tf(i){const e=i.dataFormatDescriptor[0];return e.colorPrimaries===Ox?e.transferFunction===cu?Nt:dn:e.colorPrimaries===zx?e.transferFunction===cu?jx:qx:(e.colorPrimaries===kx||console.warn(`THREE.KTX2Loader: Unsupported color primaries, "${e.colorPrimaries}"`),fi)}const Kx={name:"HorizontalTiltShiftShader",uniforms:{tDiffuse:{value:null},h:{value:1/512},r:{value:.35}},vertexShader:`

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

		}`},Jx={name:"VerticalTiltShiftShader",uniforms:{tDiffuse:{value:null},v:{value:1/512},r:{value:.35}},vertexShader:`

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

		}`};class Bf extends vs{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new n_(t)}),this.register(function(t){return new i_(t)}),this.register(function(t){return new f_(t)}),this.register(function(t){return new d_(t)}),this.register(function(t){return new A_(t)}),this.register(function(t){return new a_(t)}),this.register(function(t){return new r_(t)}),this.register(function(t){return new o_(t)}),this.register(function(t){return new c_(t)}),this.register(function(t){return new t_(t)}),this.register(function(t){return new l_(t)}),this.register(function(t){return new s_(t)}),this.register(function(t){return new u_(t)}),this.register(function(t){return new h_(t)}),this.register(function(t){return new $x(t)}),this.register(function(t){return new p_(t)}),this.register(function(t){return new m_(t)})}load(e,t,n,s){const a=this;let r;if(this.resourcePath!=="")r=this.resourcePath;else if(this.path!==""){const l=Pa.extractUrlBase(e);r=Pa.resolveURL(l,this.path)}else r=Pa.extractUrlBase(e);this.manager.itemStart(e);const o=function(l){s?s(l):console.error(l),a.manager.itemError(e),a.manager.itemEnd(e)},c=new La(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{a.parse(l,r,function(h){t(h),a.manager.itemEnd(e)},o)}catch(h){o(h)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let a;const r={},o={},c=new TextDecoder;if(typeof e=="string")a=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===Rf){try{r[lt.KHR_BINARY_GLTF]=new g_(e)}catch(u){s&&s(u);return}a=JSON.parse(r[lt.KHR_BINARY_GLTF].content)}else a=JSON.parse(c.decode(e));else a=e;if(a.asset===void 0||a.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const l=new B_(a,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const u=this.pluginCallbacks[h](l);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[u.name]=u,r[u.name]=!0}if(a.extensionsUsed)for(let h=0;h<a.extensionsUsed.length;++h){const u=a.extensionsUsed[h],A=a.extensionsRequired||[];switch(u){case lt.KHR_MATERIALS_UNLIT:r[u]=new e_;break;case lt.KHR_DRACO_MESH_COMPRESSION:r[u]=new b_(a,this.dracoLoader);break;case lt.KHR_TEXTURE_TRANSFORM:r[u]=new x_;break;case lt.KHR_MESH_QUANTIZATION:r[u]=new __;break;default:A.indexOf(u)>=0&&o[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}l.setExtensions(r),l.setPlugins(o),l.parse(n,s)}parseAsync(e,t){const n=this;return new Promise(function(s,a){n.parse(e,t,s,a)})}}function Zx(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}const lt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class $x{constructor(e){this.parser=e,this.name=lt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){const a=t[n];a.extensions&&a.extensions[this.name]&&a.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,a.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let s=t.cache.get(n);if(s)return s;const a=t.json,c=((a.extensions&&a.extensions[this.name]||{}).lights||[])[e];let l;const h=new Re(16777215);c.color!==void 0&&h.setRGB(c.color[0],c.color[1],c.color[2],dn);const u=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new ff(h),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new Yb(h),l.distance=u;break;case"spot":l=new jb(h),l.distance=u,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),l.decay=2,Bi(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),s=Promise.resolve(l),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,a=n.json.nodes[e],o=(a.extensions&&a.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(c){return n._getNodeRef(t.cache,o,c)})}}class e_{constructor(){this.name=lt.KHR_MATERIALS_UNLIT}getMaterialType(){return Ji}extendParams(e,t,n){const s=[];e.color=new Re(1,1,1),e.opacity=1;const a=t.pbrMetallicRoughness;if(a){if(Array.isArray(a.baseColorFactor)){const r=a.baseColorFactor;e.color.setRGB(r[0],r[1],r[2],dn),e.opacity=r[3]}a.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",a.baseColorTexture,Nt))}return Promise.all(s)}}class t_{constructor(e){this.parser=e,this.name=lt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const a=s.extensions[this.name].emissiveStrength;return a!==void 0&&(t.emissiveIntensity=a),Promise.resolve()}}class n_{constructor(e){this.parser=e,this.name=lt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:mi}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const a=[],r=s.extensions[this.name];if(r.clearcoatFactor!==void 0&&(t.clearcoat=r.clearcoatFactor),r.clearcoatTexture!==void 0&&a.push(n.assignTexture(t,"clearcoatMap",r.clearcoatTexture)),r.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=r.clearcoatRoughnessFactor),r.clearcoatRoughnessTexture!==void 0&&a.push(n.assignTexture(t,"clearcoatRoughnessMap",r.clearcoatRoughnessTexture)),r.clearcoatNormalTexture!==void 0&&(a.push(n.assignTexture(t,"clearcoatNormalMap",r.clearcoatNormalTexture)),r.clearcoatNormalTexture.scale!==void 0)){const o=r.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new ke(o,o)}return Promise.all(a)}}class i_{constructor(e){this.parser=e,this.name=lt.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:mi}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const a=s.extensions[this.name];return t.dispersion=a.dispersion!==void 0?a.dispersion:0,Promise.resolve()}}class s_{constructor(e){this.parser=e,this.name=lt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:mi}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const a=[],r=s.extensions[this.name];return r.iridescenceFactor!==void 0&&(t.iridescence=r.iridescenceFactor),r.iridescenceTexture!==void 0&&a.push(n.assignTexture(t,"iridescenceMap",r.iridescenceTexture)),r.iridescenceIor!==void 0&&(t.iridescenceIOR=r.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),r.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=r.iridescenceThicknessMinimum),r.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=r.iridescenceThicknessMaximum),r.iridescenceThicknessTexture!==void 0&&a.push(n.assignTexture(t,"iridescenceThicknessMap",r.iridescenceThicknessTexture)),Promise.all(a)}}class a_{constructor(e){this.parser=e,this.name=lt.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:mi}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const a=[];t.sheenColor=new Re(0,0,0),t.sheenRoughness=0,t.sheen=1;const r=s.extensions[this.name];if(r.sheenColorFactor!==void 0){const o=r.sheenColorFactor;t.sheenColor.setRGB(o[0],o[1],o[2],dn)}return r.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=r.sheenRoughnessFactor),r.sheenColorTexture!==void 0&&a.push(n.assignTexture(t,"sheenColorMap",r.sheenColorTexture,Nt)),r.sheenRoughnessTexture!==void 0&&a.push(n.assignTexture(t,"sheenRoughnessMap",r.sheenRoughnessTexture)),Promise.all(a)}}class r_{constructor(e){this.parser=e,this.name=lt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:mi}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const a=[],r=s.extensions[this.name];return r.transmissionFactor!==void 0&&(t.transmission=r.transmissionFactor),r.transmissionTexture!==void 0&&a.push(n.assignTexture(t,"transmissionMap",r.transmissionTexture)),Promise.all(a)}}class o_{constructor(e){this.parser=e,this.name=lt.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:mi}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const a=[],r=s.extensions[this.name];t.thickness=r.thicknessFactor!==void 0?r.thicknessFactor:0,r.thicknessTexture!==void 0&&a.push(n.assignTexture(t,"thicknessMap",r.thicknessTexture)),t.attenuationDistance=r.attenuationDistance||1/0;const o=r.attenuationColor||[1,1,1];return t.attenuationColor=new Re().setRGB(o[0],o[1],o[2],dn),Promise.all(a)}}class c_{constructor(e){this.parser=e,this.name=lt.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:mi}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const a=s.extensions[this.name];return t.ior=a.ior!==void 0?a.ior:1.5,Promise.resolve()}}class l_{constructor(e){this.parser=e,this.name=lt.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:mi}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const a=[],r=s.extensions[this.name];t.specularIntensity=r.specularFactor!==void 0?r.specularFactor:1,r.specularTexture!==void 0&&a.push(n.assignTexture(t,"specularIntensityMap",r.specularTexture));const o=r.specularColorFactor||[1,1,1];return t.specularColor=new Re().setRGB(o[0],o[1],o[2],dn),r.specularColorTexture!==void 0&&a.push(n.assignTexture(t,"specularColorMap",r.specularColorTexture,Nt)),Promise.all(a)}}class h_{constructor(e){this.parser=e,this.name=lt.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:mi}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const a=[],r=s.extensions[this.name];return t.bumpScale=r.bumpFactor!==void 0?r.bumpFactor:1,r.bumpTexture!==void 0&&a.push(n.assignTexture(t,"bumpMap",r.bumpTexture)),Promise.all(a)}}class u_{constructor(e){this.parser=e,this.name=lt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:mi}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const a=[],r=s.extensions[this.name];return r.anisotropyStrength!==void 0&&(t.anisotropy=r.anisotropyStrength),r.anisotropyRotation!==void 0&&(t.anisotropyRotation=r.anisotropyRotation),r.anisotropyTexture!==void 0&&a.push(n.assignTexture(t,"anisotropyMap",r.anisotropyTexture)),Promise.all(a)}}class f_{constructor(e){this.parser=e,this.name=lt.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;const a=s.extensions[this.name],r=t.options.ktx2Loader;if(!r){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,a.source,r)}}class d_{constructor(e){this.parser=e,this.name=lt.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,s=n.json,a=s.textures[e];if(!a.extensions||!a.extensions[t])return null;const r=a.extensions[t],o=s.images[r.source];let c=n.textureLoader;if(o.uri){const l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,r.source,c);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class A_{constructor(e){this.parser=e,this.name=lt.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,s=n.json,a=s.textures[e];if(!a.extensions||!a.extensions[t])return null;const r=a.extensions[t],o=s.images[r.source];let c=n.textureLoader;if(o.uri){const l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,r.source,c);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class p_{constructor(e){this.name=lt.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const s=n.extensions[this.name],a=this.parser.getDependency("buffer",s.buffer),r=this.parser.options.meshoptDecoder;if(!r||!r.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return a.then(function(o){const c=s.byteOffset||0,l=s.byteLength||0,h=s.count,u=s.byteStride,A=new Uint8Array(o,c,l);return r.decodeGltfBufferAsync?r.decodeGltfBufferAsync(h,u,A,s.mode,s.filter).then(function(g){return g.buffer}):r.ready.then(function(){const g=new ArrayBuffer(h*u);return r.decodeGltfBuffer(new Uint8Array(g),h,u,A,s.mode,s.filter),g})})}else return null}}class m_{constructor(e){this.name=lt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const s=t.meshes[n.mesh];for(const l of s.primitives)if(l.mode!==Hn.TRIANGLES&&l.mode!==Hn.TRIANGLE_STRIP&&l.mode!==Hn.TRIANGLE_FAN&&l.mode!==void 0)return null;const r=n.extensions[this.name].attributes,o=[],c={};for(const l in r)o.push(this.parser.getDependency("accessor",r[l]).then(h=>(c[l]=h,c[l])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(l=>{const h=l.pop(),u=h.isGroup?h.children:[h],A=l[0].count,g=[];for(const x of u){const _=new He,p=new ne,d=new wt,M=new ne(1,1,1),y=new Bt(x.geometry,x.material,A);for(let v=0;v<A;v++)c.TRANSLATION&&p.fromBufferAttribute(c.TRANSLATION,v),c.ROTATION&&d.fromBufferAttribute(c.ROTATION,v),c.SCALE&&M.fromBufferAttribute(c.SCALE,v),y.setMatrixAt(v,_.compose(p,d,M));for(const v in c)if(v==="_COLOR_0"){const q=c[v];y.instanceColor=new qc(q.array,q.itemSize,q.normalized)}else v!=="TRANSLATION"&&v!=="ROTATION"&&v!=="SCALE"&&x.geometry.setAttribute(v,c[v]);Dt.prototype.copy.call(y,x),this.parser.assignFinalMaterial(y),g.push(y)}return h.isGroup?(h.clear(),h.add(...g),h):g[0]}))}}const Rf="glTF",_a=12,uu={JSON:1313821514,BIN:5130562};class g_{constructor(e){this.name=lt.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,_a),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Rf)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const s=this.header.length-_a,a=new DataView(e,_a);let r=0;for(;r<s;){const o=a.getUint32(r,!0);r+=4;const c=a.getUint32(r,!0);if(r+=4,c===uu.JSON){const l=new Uint8Array(e,_a+r,o);this.content=n.decode(l)}else if(c===uu.BIN){const l=_a+r;this.body=e.slice(l,l+o)}r+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class b_{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=lt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,s=this.dracoLoader,a=e.extensions[this.name].bufferView,r=e.extensions[this.name].attributes,o={},c={},l={};for(const h in r){const u=Zc[h]||h.toLowerCase();o[u]=r[h]}for(const h in e.attributes){const u=Zc[h]||h.toLowerCase();if(r[h]!==void 0){const A=n.accessors[e.attributes[h]],g=Ys[A.componentType];l[u]=g.name,c[u]=A.normalized===!0}}return t.getDependency("bufferView",a).then(function(h){return new Promise(function(u,A){s.decodeDracoFile(h,function(g){for(const x in g.attributes){const _=g.attributes[x],p=c[x];p!==void 0&&(_.normalized=p)}u(g)},o,l,dn,A)})})}}class x_{constructor(){this.name=lt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class __{constructor(){this.name=lt.KHR_MESH_QUANTIZATION}}class Df extends Ya{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,a=e*s*3+s;for(let r=0;r!==s;r++)t[r]=n[a+r];return t}interpolate_(e,t,n,s){const a=this.resultBuffer,r=this.sampleValues,o=this.valueSize,c=o*2,l=o*3,h=s-t,u=(n-t)/h,A=u*u,g=A*u,x=e*l,_=x-l,p=-2*g+3*A,d=g-A,M=1-p,y=d-A+u;for(let v=0;v!==o;v++){const q=r[_+v+o],H=r[_+v+c]*h,U=r[x+v+o],Z=r[x+v]*h;a[v]=M*q+y*H+p*U+d*Z}return a}}const E_=new wt;class v_ extends Df{interpolate_(e,t,n,s){const a=super.interpolate_(e,t,n,s);return E_.fromArray(a).normalize().toArray(a),a}}const Hn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},Ys={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},fu={9728:cn,9729:_n,9984:Bu,9985:Fr,9986:ya,9987:Ai},du={33071:Ri,33648:Hr,10497:Un},rc={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Zc={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Vi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},M_={CUBICSPLINE:void 0,LINEAR:Oa,STEP:ka},oc={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function y_(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new _s({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:ai})),i.DefaultMaterial}function cs(i,e,t){for(const n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Bi(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function C_(i,e,t){let n=!1,s=!1,a=!1;for(let l=0,h=e.length;l<h;l++){const u=e[l];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(s=!0),u.COLOR_0!==void 0&&(a=!0),n&&s&&a)break}if(!n&&!s&&!a)return Promise.resolve(i);const r=[],o=[],c=[];for(let l=0,h=e.length;l<h;l++){const u=e[l];if(n){const A=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):i.attributes.position;r.push(A)}if(s){const A=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):i.attributes.normal;o.push(A)}if(a){const A=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):i.attributes.color;c.push(A)}}return Promise.all([Promise.all(r),Promise.all(o),Promise.all(c)]).then(function(l){const h=l[0],u=l[1],A=l[2];return n&&(i.morphAttributes.position=h),s&&(i.morphAttributes.normal=u),a&&(i.morphAttributes.color=A),i.morphTargetsRelative=!0,i})}function w_(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function S_(i){let e;const t=i.extensions&&i.extensions[lt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+cc(t.attributes):e=i.indices+":"+cc(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+cc(i.targets[n]);return e}function cc(i){let e="";const t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function $c(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function I_(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const T_=new He;class B_{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Zx,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,a=!1,r=-1;if(typeof navigator<"u"){const o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;const c=o.match(/Version\/(\d+)/);s=n&&c?parseInt(c[1],10):-1,a=o.indexOf("Firefox")>-1,r=a?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||a&&r<98?this.textureLoader=new Ml(this.options.manager):this.textureLoader=new Kb(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new La(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,s=this.json,a=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(r){return r._markDefs&&r._markDefs()}),Promise.all(this._invokeAll(function(r){return r.beforeRoot&&r.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(r){const o={scene:r[0][s.scene||0],scenes:r[0],animations:r[1],cameras:r[2],asset:s.asset,parser:n,userData:{}};return cs(a,o,s),Bi(o,s),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(o)})).then(function(){for(const c of o.scenes)c.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,a=t.length;s<a;s++){const r=t[s].joints;for(let o=0,c=r.length;o<c;o++)e[r[o]].isBone=!0}for(let s=0,a=e.length;s<a;s++){const r=e[s];r.mesh!==void 0&&(this._addNodeRef(this.meshCache,r.mesh),r.skin!==void 0&&(n[r.mesh].isSkinnedMesh=!0)),r.camera!==void 0&&this._addNodeRef(this.cameraCache,r.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const s=n.clone(),a=(r,o)=>{const c=this.associations.get(r);c!=null&&this.associations.set(o,c);for(const[l,h]of r.children.entries())a(h,o.children[l])};return a(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const s=e(t[n]);if(s)return s}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let s=0;s<t.length;s++){const a=e(t[s]);a&&n.push(a)}return n}getDependency(e,t){const n=e+":"+t;let s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(a){return a.loadNode&&a.loadNode(t)});break;case"mesh":s=this._invokeOne(function(a){return a.loadMesh&&a.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(a){return a.loadBufferView&&a.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(a){return a.loadMaterial&&a.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(a){return a.loadTexture&&a.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(a){return a.loadAnimation&&a.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(a){return a!=this&&a.getDependency&&a.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(a,r){return n.getDependency(e,r)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[lt.KHR_BINARY_GLTF].body);const s=this.options;return new Promise(function(a,r){n.load(Pa.resolveURL(t.uri,s.path),a,void 0,function(){r(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const s=t.byteLength||0,a=t.byteOffset||0;return n.slice(a,a+s)})}loadAccessor(e){const t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){const r=rc[s.type],o=Ys[s.componentType],c=s.normalized===!0,l=new o(s.count*r);return Promise.resolve(new Lt(l,r,c))}const a=[];return s.bufferView!==void 0?a.push(this.getDependency("bufferView",s.bufferView)):a.push(null),s.sparse!==void 0&&(a.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),a.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(a).then(function(r){const o=r[0],c=rc[s.type],l=Ys[s.componentType],h=l.BYTES_PER_ELEMENT,u=h*c,A=s.byteOffset||0,g=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,x=s.normalized===!0;let _,p;if(g&&g!==u){const d=Math.floor(A/g),M="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+d+":"+s.count;let y=t.cache.get(M);y||(_=new l(o,d*g,s.count*g/h),y=new nb(_,g/h),t.cache.add(M,y)),p=new _l(y,c,A%g/h,x)}else o===null?_=new l(s.count*c):_=new l(o,A,s.count*c),p=new Lt(_,c,x);if(s.sparse!==void 0){const d=rc.SCALAR,M=Ys[s.sparse.indices.componentType],y=s.sparse.indices.byteOffset||0,v=s.sparse.values.byteOffset||0,q=new M(r[1],y,s.sparse.count*d),H=new l(r[2],v,s.sparse.count*c);o!==null&&(p=new Lt(p.array.slice(),p.itemSize,p.normalized)),p.normalized=!1;for(let U=0,Z=q.length;U<Z;U++){const w=q[U];if(p.setX(w,H[U*c]),c>=2&&p.setY(w,H[U*c+1]),c>=3&&p.setZ(w,H[U*c+2]),c>=4&&p.setW(w,H[U*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}p.normalized=x}return p})}loadTexture(e){const t=this.json,n=this.options,a=t.textures[e].source,r=t.images[a];let o=this.textureLoader;if(r.uri){const c=n.manager.getHandler(r.uri);c!==null&&(o=c)}return this.loadTextureImage(e,a,o)}loadTextureImage(e,t,n){const s=this,a=this.json,r=a.textures[e],o=a.images[t],c=(o.uri||o.bufferView)+":"+r.sampler;if(this.textureCache[c])return this.textureCache[c];const l=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=r.name||o.name||"",h.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(h.name=o.uri);const A=(a.samplers||{})[r.sampler]||{};return h.magFilter=fu[A.magFilter]||_n,h.minFilter=fu[A.minFilter]||Ai,h.wrapS=du[A.wrapS]||Un,h.wrapT=du[A.wrapT]||Un,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==cn&&h.minFilter!==_n,s.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){const n=this,s=this.json,a=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());const r=s.images[e],o=self.URL||self.webkitURL;let c=r.uri||"",l=!1;if(r.bufferView!==void 0)c=n.getDependency("bufferView",r.bufferView).then(function(u){l=!0;const A=new Blob([u],{type:r.mimeType});return c=o.createObjectURL(A),c});else if(r.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const h=Promise.resolve(c).then(function(u){return new Promise(function(A,g){let x=A;t.isImageBitmapLoader===!0&&(x=function(_){const p=new Gt(_);p.needsUpdate=!0,A(p)}),t.load(Pa.resolveURL(u,a.path),x,void 0,g)})}).then(function(u){return l===!0&&o.revokeObjectURL(c),Bi(u,r),u.userData.mimeType=r.mimeType||I_(r.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,s){const a=this;return this.getDependency("texture",n.index).then(function(r){if(!r)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(r=r.clone(),r.channel=n.texCoord),a.extensions[lt.KHR_TEXTURE_TRANSFORM]){const o=n.extensions!==void 0?n.extensions[lt.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const c=a.associations.get(r);r=a.extensions[lt.KHR_TEXTURE_TRANSFORM].extendTexture(r,o),a.associations.set(r,c)}}return s!==void 0&&(r.colorSpace=s),e[t]=r,r})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const s=t.attributes.tangent===void 0,a=t.attributes.color!==void 0,r=t.attributes.normal===void 0;if(e.isPoints){const o="PointsMaterial:"+n.uuid;let c=this.cache.get(o);c||(c=new rf,jn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(o,c)),n=c}else if(e.isLine){const o="LineBasicMaterial:"+n.uuid;let c=this.cache.get(o);c||(c=new af,jn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(o,c)),n=c}if(s||a||r){let o="ClonedMaterial:"+n.uuid+":";s&&(o+="derivative-tangents:"),a&&(o+="vertex-colors:"),r&&(o+="flat-shading:");let c=this.cache.get(o);c||(c=n.clone(),a&&(c.vertexColors=!0),r&&(c.flatShading=!0),s&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(o,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return _s}loadMaterial(e){const t=this,n=this.json,s=this.extensions,a=n.materials[e];let r;const o={},c=a.extensions||{},l=[];if(c[lt.KHR_MATERIALS_UNLIT]){const u=s[lt.KHR_MATERIALS_UNLIT];r=u.getMaterialType(),l.push(u.extendParams(o,a,t))}else{const u=a.pbrMetallicRoughness||{};if(o.color=new Re(1,1,1),o.opacity=1,Array.isArray(u.baseColorFactor)){const A=u.baseColorFactor;o.color.setRGB(A[0],A[1],A[2],dn),o.opacity=A[3]}u.baseColorTexture!==void 0&&l.push(t.assignTexture(o,"map",u.baseColorTexture,Nt)),o.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,o.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(o,"metalnessMap",u.metallicRoughnessTexture)),l.push(t.assignTexture(o,"roughnessMap",u.metallicRoughnessTexture))),r=this._invokeOne(function(A){return A.getMaterialType&&A.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(A){return A.extendMaterialParams&&A.extendMaterialParams(e,o)})))}a.doubleSided===!0&&(o.side=Mt);const h=a.alphaMode||oc.OPAQUE;if(h===oc.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===oc.MASK&&(o.alphaTest=a.alphaCutoff!==void 0?a.alphaCutoff:.5)),a.normalTexture!==void 0&&r!==Ji&&(l.push(t.assignTexture(o,"normalMap",a.normalTexture)),o.normalScale=new ke(1,1),a.normalTexture.scale!==void 0)){const u=a.normalTexture.scale;o.normalScale.set(u,u)}if(a.occlusionTexture!==void 0&&r!==Ji&&(l.push(t.assignTexture(o,"aoMap",a.occlusionTexture)),a.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=a.occlusionTexture.strength)),a.emissiveFactor!==void 0&&r!==Ji){const u=a.emissiveFactor;o.emissive=new Re().setRGB(u[0],u[1],u[2],dn)}return a.emissiveTexture!==void 0&&r!==Ji&&l.push(t.assignTexture(o,"emissiveMap",a.emissiveTexture,Nt)),Promise.all(l).then(function(){const u=new r(o);return a.name&&(u.name=a.name),Bi(u,a),t.associations.set(u,{materials:e}),a.extensions&&cs(s,u,a),u})}createUniqueName(e){const t=bt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,s=this.primitiveCache;function a(o){return n[lt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(c){return Au(c,o,t)})}const r=[];for(let o=0,c=e.length;o<c;o++){const l=e[o],h=S_(l),u=s[h];if(u)r.push(u.promise);else{let A;l.extensions&&l.extensions[lt.KHR_DRACO_MESH_COMPRESSION]?A=a(l):A=Au(new xt,l,t),s[h]={primitive:l,promise:A},r.push(A)}}return Promise.all(r)}loadMesh(e){const t=this,n=this.json,s=this.extensions,a=n.meshes[e],r=a.primitives,o=[];for(let c=0,l=r.length;c<l;c++){const h=r[c].material===void 0?y_(this.cache):this.getDependency("material",r[c].material);o.push(h)}return o.push(t.loadGeometries(r)),Promise.all(o).then(function(c){const l=c.slice(0,c.length-1),h=c[c.length-1],u=[];for(let g=0,x=h.length;g<x;g++){const _=h[g],p=r[g];let d;const M=l[g];if(p.mode===Hn.TRIANGLES||p.mode===Hn.TRIANGLE_STRIP||p.mode===Hn.TRIANGLE_FAN||p.mode===void 0)d=a.isSkinnedMesh===!0?new sb(_,M):new nt(_,M),d.isSkinnedMesh===!0&&d.normalizeSkinWeights(),p.mode===Hn.TRIANGLE_STRIP?d.geometry=au(d.geometry,ku):p.mode===Hn.TRIANGLE_FAN&&(d.geometry=au(d.geometry,Vc));else if(p.mode===Hn.LINES)d=new ob(_,M);else if(p.mode===Hn.LINE_STRIP)d=new vl(_,M);else if(p.mode===Hn.LINE_LOOP)d=new cb(_,M);else if(p.mode===Hn.POINTS)d=new lb(_,M);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+p.mode);Object.keys(d.geometry.morphAttributes).length>0&&w_(d,a),d.name=t.createUniqueName(a.name||"mesh_"+e),Bi(d,a),p.extensions&&cs(s,d,p),t.assignFinalMaterial(d),u.push(d)}for(let g=0,x=u.length;g<x;g++)t.associations.set(u[g],{meshes:e,primitives:g});if(u.length===1)return a.extensions&&cs(s,u[0],a),u[0];const A=new Sn;a.extensions&&cs(s,A,a),t.associations.set(A,{meshes:e});for(let g=0,x=u.length;g<x;g++)A.add(u[g]);return A})}loadCamera(e){let t;const n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new xn(bn.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new oo(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Bi(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let s=0,a=t.joints.length;s<a;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){const a=s.pop(),r=s,o=[],c=[];for(let l=0,h=r.length;l<h;l++){const u=r[l];if(u){o.push(u);const A=new He;a!==null&&A.fromArray(a.array,l*16),c.push(A)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new El(o,c)})}loadAnimation(e){const t=this.json,n=this,s=t.animations[e],a=s.name?s.name:"animation_"+e,r=[],o=[],c=[],l=[],h=[];for(let u=0,A=s.channels.length;u<A;u++){const g=s.channels[u],x=s.samplers[g.sampler],_=g.target,p=_.node,d=s.parameters!==void 0?s.parameters[x.input]:x.input,M=s.parameters!==void 0?s.parameters[x.output]:x.output;_.node!==void 0&&(r.push(this.getDependency("node",p)),o.push(this.getDependency("accessor",d)),c.push(this.getDependency("accessor",M)),l.push(x),h.push(_))}return Promise.all([Promise.all(r),Promise.all(o),Promise.all(c),Promise.all(l),Promise.all(h)]).then(function(u){const A=u[0],g=u[1],x=u[2],_=u[3],p=u[4],d=[];for(let M=0,y=A.length;M<y;M++){const v=A[M],q=g[M],H=x[M],U=_[M],Z=p[M];if(v===void 0)continue;v.updateMatrix&&v.updateMatrix();const w=n._createAnimationTracks(v,q,H,U,Z);if(w)for(let S=0;S<w.length;S++)d.push(w[S])}return new Qb(a,void 0,d)})}createNodeMesh(e){const t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(a){const r=n._getNodeRef(n.meshCache,s.mesh,a);return s.weights!==void 0&&r.traverse(function(o){if(o.isMesh)for(let c=0,l=s.weights.length;c<l;c++)o.morphTargetInfluences[c]=s.weights[c]}),r})}loadNode(e){const t=this.json,n=this,s=t.nodes[e],a=n._loadNodeShallow(e),r=[],o=s.children||[];for(let l=0,h=o.length;l<h;l++)r.push(n.getDependency("node",o[l]));const c=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([a,Promise.all(r),c]).then(function(l){const h=l[0],u=l[1],A=l[2];A!==null&&h.traverse(function(g){g.isSkinnedMesh&&g.bind(A,T_)});for(let g=0,x=u.length;g<x;g++)h.add(u[g]);return h})}_loadNodeShallow(e){const t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const a=t.nodes[e],r=a.name?s.createUniqueName(a.name):"",o=[],c=s._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&o.push(c),a.camera!==void 0&&o.push(s.getDependency("camera",a.camera).then(function(l){return s._getNodeRef(s.cameraCache,a.camera,l)})),s._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){o.push(l)}),this.nodeCache[e]=Promise.all(o).then(function(l){let h;if(a.isBone===!0?h=new sf:l.length>1?h=new Sn:l.length===1?h=l[0]:h=new Dt,h!==l[0])for(let u=0,A=l.length;u<A;u++)h.add(l[u]);if(a.name&&(h.userData.name=a.name,h.name=r),Bi(h,a),a.extensions&&cs(n,h,a),a.matrix!==void 0){const u=new He;u.fromArray(a.matrix),h.applyMatrix4(u)}else a.translation!==void 0&&h.position.fromArray(a.translation),a.rotation!==void 0&&h.quaternion.fromArray(a.rotation),a.scale!==void 0&&h.scale.fromArray(a.scale);return s.associations.has(h)||s.associations.set(h,{}),s.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],s=this,a=new Sn;n.name&&(a.name=s.createUniqueName(n.name)),Bi(a,n),n.extensions&&cs(t,a,n);const r=n.nodes||[],o=[];for(let c=0,l=r.length;c<l;c++)o.push(s.getDependency("node",r[c]));return Promise.all(o).then(function(c){for(let h=0,u=c.length;h<u;h++)a.add(c[h]);const l=h=>{const u=new Map;for(const[A,g]of s.associations)(A instanceof jn||A instanceof Gt)&&u.set(A,g);return h.traverse(A=>{const g=s.associations.get(A);g!=null&&u.set(A,g)}),u};return s.associations=l(a),a})}_createAnimationTracks(e,t,n,s,a){const r=[],o=e.name?e.name:e.uuid,c=[];Vi[a.path]===Vi.weights?e.traverse(function(A){A.morphTargetInfluences&&c.push(A.name?A.name:A.uuid)}):c.push(o);let l;switch(Vi[a.path]){case Vi.weights:l=na;break;case Vi.rotation:l=ia;break;case Vi.position:case Vi.scale:l=sa;break;default:n.itemSize===1?l=na:l=sa;break}const h=s.interpolation!==void 0?M_[s.interpolation]:Oa,u=this._getArrayFromAccessor(n);for(let A=0,g=c.length;A<g;A++){const x=new l(c[A]+"."+Vi[a.path],t.array,u,h);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(x),r.push(x)}return r}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=$c(t.constructor),s=new Float32Array(t.length);for(let a=0,r=t.length;a<r;a++)s[a]=t[a]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const s=this instanceof ia?v_:Df;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function R_(i,e,t){const n=e.attributes,s=new Ui;if(n.POSITION!==void 0){const o=t.json.accessors[n.POSITION],c=o.min,l=o.max;if(c!==void 0&&l!==void 0){if(s.set(new ne(c[0],c[1],c[2]),new ne(l[0],l[1],l[2])),o.normalized){const h=$c(Ys[o.componentType]);s.min.multiplyScalar(h),s.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const a=e.targets;if(a!==void 0){const o=new ne,c=new ne;for(let l=0,h=a.length;l<h;l++){const u=a[l];if(u.POSITION!==void 0){const A=t.json.accessors[u.POSITION],g=A.min,x=A.max;if(g!==void 0&&x!==void 0){if(c.setX(Math.max(Math.abs(g[0]),Math.abs(x[0]))),c.setY(Math.max(Math.abs(g[1]),Math.abs(x[1]))),c.setZ(Math.max(Math.abs(g[2]),Math.abs(x[2]))),A.normalized){const _=$c(Ys[A.componentType]);c.multiplyScalar(_)}o.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(o)}i.boundingBox=s;const r=new pi;s.getCenter(r.center),r.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=r}function Au(i,e,t){const n=e.attributes,s=[];function a(r,o){return t.getDependency("accessor",r).then(function(c){i.setAttribute(o,c)})}for(const r in n){const o=Zc[r]||r.toLowerCase();o in i.attributes||s.push(a(n[r],o))}if(e.indices!==void 0&&!i.index){const r=t.getDependency("accessor",e.indices).then(function(o){i.setIndex(o)});s.push(r)}return ht.workingColorSpace!==dn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${ht.workingColorSpace}" not supported.`),Bi(i,e),R_(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?C_(i,e.targets,t):i})}var Lf=(function(){var i="b9H79Tebbbe8Fv9Gbb9Gvuuuuueu9Giuuub9Geueu9Giuuueuikqbeeedddillviebeoweuec:q;iekr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbeY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVbdE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbiL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtblK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbol79IV9Rbrq:P8Yqdbk;3sezu8Jjjjjbcj;eb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Radz1jjjbhwcj;abad9UhoaicefhldnadTmbaoc;WFbGgocjdaocjd6EhDcbhqinaqae9pmeaDaeaq9RaqaDfae6Egkcsfgocl4cifcd4hxdndndndnaoc9WGgmTmbcbhPcehsawcjdfhzalhHinaraH9Rax6midnaraHaxfgl9RcK6mbczhoinawcj;cbfaogifgoc9WfhOdndndndndnaHaic9WfgAco4fRbbaAci4coG4ciGPlbedibkaO9cb83ibaOcwf9cb83ibxikaOalRblalRbbgAco4gCaCciSgCE86bbaocGfalclfaCfgORbbaAcl4ciGgCaCciSgCE86bbaocVfaOaCfgORbbaAcd4ciGgCaCciSgCE86bbaoc7faOaCfgORbbaAciGgAaAciSgAE86bbaoctfaOaAfgARbbalRbegOco4gCaCciSgCE86bbaoc91faAaCfgARbbaOcl4ciGgCaCciSgCE86bbaoc4faAaCfgARbbaOcd4ciGgCaCciSgCE86bbaoc93faAaCfgARbbaOciGgOaOciSgOE86bbaoc94faAaOfgARbbalRbdgOco4gCaCciSgCE86bbaoc95faAaCfgARbbaOcl4ciGgCaCciSgCE86bbaoc96faAaCfgARbbaOcd4ciGgCaCciSgCE86bbaoc97faAaCfgARbbaOciGgOaOciSgOE86bbaoc98faAaOfgORbbalRbiglco4gAaAciSgAE86bbaoc99faOaAfgORbbalcl4ciGgAaAciSgAE86bbaoc9:faOaAfgORbbalcd4ciGgAaAciSgAE86bbaocufaOaAfgoRbbalciGglalciSglE86bbaoalfhlxdkaOalRbwalRbbgAcl4gCaCcsSgCE86bbaocGfalcwfaCfgORbbaAcsGgAaAcsSgAE86bbaocVfaOaAfgORbbalRbegAcl4gCaCcsSgCE86bbaoc7faOaCfgORbbaAcsGgAaAcsSgAE86bbaoctfaOaAfgORbbalRbdgAcl4gCaCcsSgCE86bbaoc91faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc4faOaAfgORbbalRbigAcl4gCaCcsSgCE86bbaoc93faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc94faOaAfgORbbalRblgAcl4gCaCcsSgCE86bbaoc95faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc96faOaAfgORbbalRbvgAcl4gCaCcsSgCE86bbaoc97faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc98faOaAfgORbbalRbogAcl4gCaCcsSgCE86bbaoc99faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc9:faOaAfgORbbalRbrglcl4gAaAcsSgAE86bbaocufaOaAfgoRbbalcsGglalcsSglE86bbaoalfhlxekaOal8Pbb83bbaOcwfalcwf8Pbb83bbalczfhlkdnaiam9pmbaiczfhoaral9RcL0mekkaiam6mialTmidnakTmbawaPfRbbhOcbhoazhiinaiawcj;cbfaofRbbgAce4cbaAceG9R7aOfgO86bbaiadfhiaocefgoak9hmbkkazcefhzaPcefgPad6hsalhHaPad9hmexvkkcbhlasceGmdxikalaxad2fhCdnakTmbcbhHcehsawcjdfhminaral9Rax6mialTmdalaxfhlawaHfRbbhOcbhoamhiinaiawcj;cbfaofRbbgAce4cbaAceG9R7aOfgO86bbaiadfhiaocefgoak9hmbkamcefhmaHcefgHad6hsaHad9hmbkaChlxikcbhocehsinaral9Rax6mdalTmealaxfhlaocefgoad6hsadao9hmbkaChlxdkcbhlasceGTmekc9:hoxikabaqad2fawcjdfakad2z1jjjb8Aawawcjdfakcufad2fadz1jjjb8Aakaqfhqalmbkc9:hoxekcbc99aral9Radcaadca0ESEhokavcj;ebf8Kjjjjbaok;yzeHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecjez:jjjjb8AavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhodnaeTmbcmcsaDceSEhkcbhxcbhmcbhDcbhicbhlindnaoaq9nmbc9:hoxikdndnawRbbgrc;Ve0mbavc;abfalarcl4cu7fcsGcitfgPydlhsaPydbhzdnarcsGgPak9pmbavaiarcu7fcsGcdtfydbaxaPEhraPThPdndnadcd9hmbabaDcetfgHaz87ebaHcdfas87ebaHclfar87ebxekabaDcdtfgHazBdbaHclfasBdbaHcwfarBdbkaxaPfhxavc;abfalcitfgHarBdbaHasBdlavaicdtfarBdbavc;abfalcefcsGglcitfgHazBdbaHarBdlaiaPfhialcefhlxdkdndnaPcsSmbamaPfaPc987fcefhmxekaocefhrao8SbbgPcFeGhHdndnaPcu9mmbarhoxekaocvfhoaHcFbGhHcrhPdninar8SbbgOcFbGaPtaHVhHaOcu9kmearcefhraPcrfgPc8J9hmbxdkkarcefhokaHce4cbaHceG9R7amfhmkdndnadcd9hmbabaDcetfgraz87ebarcdfas87ebarclfam87ebxekabaDcdtfgrazBdbarclfasBdbarcwfamBdbkavc;abfalcitfgramBdbarasBdlavaicdtfamBdbavc;abfalcefcsGglcitfgrazBdbaramBdlaicefhialcefhlxekdnarcpe0mbaxcefgOavaiaqarcsGfRbbgPcl49RcsGcdtfydbaPcz6gHEhravaiaP9RcsGcdtfydbaOaHfgsaPcsGgOEhPaOThOdndnadcd9hmbabaDcetfgzax87ebazcdfar87ebazclfaP87ebxekabaDcdtfgzaxBdbazclfarBdbazcwfaPBdbkavaicdtfaxBdbavc;abfalcitfgzarBdbazaxBdlavaicefgicsGcdtfarBdbavc;abfalcefcsGcitfgzaPBdbazarBdlavaiaHfcsGgicdtfaPBdbavc;abfalcdfcsGglcitfgraxBdbaraPBdlalcefhlaiaOfhiasaOfhxxekaxcbaoRbbgzEgAarc;:eSgrfhsazcsGhCazcl4hXdndnazcs0mbascefhOxekashOavaiaX9RcsGcdtfydbhskdndnaCmbaOcefhxxekaOhxavaiaz9RcsGcdtfydbhOkdndnarTmbaocefhrxekaocdfhrao8SbegHcFeGhPdnaHcu9kmbaocofhAaPcFbGhPcrhodninar8SbbgHcFbGaotaPVhPaHcu9kmearcefhraocrfgoc8J9hmbkaAhrxekarcefhrkaPce4cbaPceG9R7amfgmhAkdndnaXcsSmbarhPxekarcefhPar8SbbgocFeGhHdnaocu9kmbarcvfhsaHcFbGhHcrhodninaP8SbbgrcFbGaotaHVhHarcu9kmeaPcefhPaocrfgoc8J9hmbkashPxekaPcefhPkaHce4cbaHceG9R7amfgmhskdndnaCcsSmbaPhoxekaPcefhoaP8SbbgrcFeGhHdnarcu9kmbaPcvfhOaHcFbGhHcrhrdninao8SbbgPcFbGartaHVhHaPcu9kmeaocefhoarcrfgrc8J9hmbkaOhoxekaocefhokaHce4cbaHceG9R7amfgmhOkdndnadcd9hmbabaDcetfgraA87ebarcdfas87ebarclfaO87ebxekabaDcdtfgraABdbarclfasBdbarcwfaOBdbkavc;abfalcitfgrasBdbaraABdlavaicdtfaABdbavc;abfalcefcsGcitfgraOBdbarasBdlavaicefgicsGcdtfasBdbavc;abfalcdfcsGcitfgraABdbaraOBdlavaiazcz6aXcsSVfgicsGcdtfaOBdbaiaCTaCcsSVfhialcifhlkawcefhwalcsGhlaicsGhiaDcifgDae6mbkkcbc99aoaqSEhokavc;aef8Kjjjjbaok:llevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:Lvoeue99dud99eud99dndnadcl9hmbaeTmeindndnabcdfgd8Sbb:Yab8Sbbgi:Ygl:l:tabcefgv8Sbbgo:Ygr:l:tgwJbb;:9cawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai86bbdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad86bbdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad86bbabclfhbaecufgembxdkkaeTmbindndnabclfgd8Ueb:Yab8Uebgi:Ygl:l:tabcdfgv8Uebgo:Ygr:l:tgwJb;:FSawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai87ebdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad87ebdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad87ebabcwfhbaecufgembkkk;siliui99iue99dnaeTmbcbhiabhlindndnJ;Zl81Zalcof8UebgvciV:Y:vgoal8Ueb:YNgrJb;:FSNJbbbZJbbb:;arJbbbb9GEMgw:lJbbb9p9DTmbaw:OhDxekcjjjj94hDkalclf8Uebhqalcdf8UebhkabavcefciGaiVcetfaD87ebdndnaoak:YNgwJb;:FSNJbbbZJbbb:;awJbbbb9GEMgx:lJbbb9p9DTmbax:Ohkxekcjjjj94hkkabavcdfciGaiVcetfak87ebdndnaoaq:YNgoJb;:FSNJbbbZJbbb:;aoJbbbb9GEMgx:lJbbb9p9DTmbax:Ohqxekcjjjj94hqkabavcufciGaiVcetfaq87ebdndnJbbjZararN:tawawN:taoaoN:tgrJbbbbarJbbbb9GE:rJb;:FSNJbbbZMgr:lJbbb9p9DTmbar:Ohqxekcjjjj94hqkabavciGaiVcetfaq87ebalcwfhlaiclfhiaecufgembkkk9mbdnadcd4ae2geTmbinababydbgdcwtcw91:Yadce91cjjj;8ifcjjj98G::NUdbabclfhbaecufgembkkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik;LeeeudndnaeabVciGTmbabhixekdndnadcz9pmbabhixekabhiinaiaeydbBdbaiclfaeclfydbBdbaicwfaecwfydbBdbaicxfaecxfydbBdbaiczfhiaeczfheadc9Wfgdcs0mbkkadcl6mbinaiaeydbBdbaeclfheaiclfhiadc98fgdci0mbkkdnadTmbinaiaeRbb86bbaicefhiaecefheadcufgdmbkkabk;aeedudndnabciGTmbabhixekaecFeGc:b:c:ew2hldndnadcz9pmbabhixekabhiinaialBdbaicxfalBdbaicwfalBdbaiclfalBdbaiczfhiadc9Wfgdcs0mbkkadcl6mbinaialBdbaiclfhiadc98fgdci0mbkkdnadTmbinaiae86bbaicefhiadcufgdmbkkabkkkebcjwklz9Kbb",e="b9H79TebbbeKl9Gbb9Gvuuuuueu9Giuuub9Geueuikqbbebeedddilve9Weeeviebeoweuec:q;Aekr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbdY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVblE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtboK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbrL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbwl79IV9RbDq;t9tqlbzik9:evu8Jjjjjbcz9Rhbcbheincbhdcbhiinabcwfadfaicjuaead4ceGglE86bbaialfhiadcefgdcw9hmbkaec:q:yjjbfai86bbaecitc:q1jjbfab8Piw83ibaecefgecjd9hmbkk;h8JlHud97euo978Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Rad;8qbbcj;abad9UhoaicefhldnadTmbaoc;WFbGgocjdaocjd6EhwcbhDinaDae9pmeawaeaD9RaDawfae6Egqcsfgoc9WGgkci2hxakcethmaocl4cifcd4hPabaDad2fhscbhzdnincehHalhOcbhAdninaraO9RaP6miavcj;cbfaAak2fhCaOaPfhlcbhidnakc;ab6mbaral9Rc;Gb6mbcbhoinaCaofhidndndndndnaOaoco4fRbbgXciGPlbedibkaipxbbbbbbbbbbbbbbbbpklbxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklbalczfhlkdndndndndnaXcd4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklzxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklzalczfhlkdndndndndnaXcl4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklaxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklaalczfhlkdndndndndnaXco4Plbedibkaipxbbbbbbbbbbbbbbbbpkl8WxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WalclfaYpQbfaXc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WalcwfaYpQbfaXc:q:yjjbfRbbfhlxekaialpbbbpkl8Walczfhlkaoc;abfhiaocjefak0meaihoaral9Rc;Fb0mbkkdndnaiak9pmbaici4hoinaral9RcK6mdaCaifhXdndndndndnaOaico4fRbbaocoG4ciGPlbedibkaXpxbbbbbbbbbbbbbbbbpklbxikaXalpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaXalpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaXalpbbbpklbalczfhlkaocdfhoaiczfgiak6mbkkalTmbaAci6hHalhOaAcefgohAaoclSmdxekkcbhlaHceGmdkdnakTmbavcjdfazfhiavazfpbdbhYcbhXinaiavcj;cbfaXfgopblbgLcep9TaLpxeeeeeeeeeeeeeeeegQp9op9Hp9rgLaoakfpblbg8Acep9Ta8AaQp9op9Hp9rg8ApmbzeHdOiAlCvXoQrLgEaoamfpblbg3cep9Ta3aQp9op9Hp9rg3aoaxfpblbg5cep9Ta5aQp9op9Hp9rg5pmbzeHdOiAlCvXoQrLg8EpmbezHdiOAlvCXorQLgQaQpmbedibedibedibediaYp9UgYp9AdbbaiadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaEa8EpmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaLa8ApmwKDYq8AkEx3m5P8Es8FgLa3a5pmwKDYq8AkEx3m5P8Es8Fg8ApmbezHdiOAlvCXorQLgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaLa8ApmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfhiaXczfgXak6mbkkazclfgzad6mbkasavcjdfaqad2;8qbbavavcjdfaqcufad2fad;8qbbaqaDfhDc9:hoalmexikkc9:hoxekcbc99aral9Radcaadca0ESEhokavcj;kbf8Kjjjjbaokwbz:bjjjbk;uzeHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecje;8kbavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhodnaeTmbcmcsaDceSEhkcbhxcbhmcbhDcbhicbhlindnaoaq9nmbc9:hoxikdndnawRbbgrc;Ve0mbavc;abfalarcl4cu7fcsGcitfgPydlhsaPydbhzdnarcsGgPak9pmbavaiarcu7fcsGcdtfydbaxaPEhraPThPdndnadcd9hmbabaDcetfgHaz87ebaHcdfas87ebaHclfar87ebxekabaDcdtfgHazBdbaHclfasBdbaHcwfarBdbkaxaPfhxavc;abfalcitfgHarBdbaHasBdlavaicdtfarBdbavc;abfalcefcsGglcitfgHazBdbaHarBdlaiaPfhialcefhlxdkdndnaPcsSmbamaPfaPc987fcefhmxekaocefhrao8SbbgPcFeGhHdndnaPcu9mmbarhoxekaocvfhoaHcFbGhHcrhPdninar8SbbgOcFbGaPtaHVhHaOcu9kmearcefhraPcrfgPc8J9hmbxdkkarcefhokaHce4cbaHceG9R7amfhmkdndnadcd9hmbabaDcetfgraz87ebarcdfas87ebarclfam87ebxekabaDcdtfgrazBdbarclfasBdbarcwfamBdbkavc;abfalcitfgramBdbarasBdlavaicdtfamBdbavc;abfalcefcsGglcitfgrazBdbaramBdlaicefhialcefhlxekdnarcpe0mbaxcefgOavaiaqarcsGfRbbgPcl49RcsGcdtfydbaPcz6gHEhravaiaP9RcsGcdtfydbaOaHfgsaPcsGgOEhPaOThOdndnadcd9hmbabaDcetfgzax87ebazcdfar87ebazclfaP87ebxekabaDcdtfgzaxBdbazclfarBdbazcwfaPBdbkavaicdtfaxBdbavc;abfalcitfgzarBdbazaxBdlavaicefgicsGcdtfarBdbavc;abfalcefcsGcitfgzaPBdbazarBdlavaiaHfcsGgicdtfaPBdbavc;abfalcdfcsGglcitfgraxBdbaraPBdlalcefhlaiaOfhiasaOfhxxekaxcbaoRbbgzEgAarc;:eSgrfhsazcsGhCazcl4hXdndnazcs0mbascefhOxekashOavaiaX9RcsGcdtfydbhskdndnaCmbaOcefhxxekaOhxavaiaz9RcsGcdtfydbhOkdndnarTmbaocefhrxekaocdfhrao8SbegHcFeGhPdnaHcu9kmbaocofhAaPcFbGhPcrhodninar8SbbgHcFbGaotaPVhPaHcu9kmearcefhraocrfgoc8J9hmbkaAhrxekarcefhrkaPce4cbaPceG9R7amfgmhAkdndnaXcsSmbarhPxekarcefhPar8SbbgocFeGhHdnaocu9kmbarcvfhsaHcFbGhHcrhodninaP8SbbgrcFbGaotaHVhHarcu9kmeaPcefhPaocrfgoc8J9hmbkashPxekaPcefhPkaHce4cbaHceG9R7amfgmhskdndnaCcsSmbaPhoxekaPcefhoaP8SbbgrcFeGhHdnarcu9kmbaPcvfhOaHcFbGhHcrhrdninao8SbbgPcFbGartaHVhHaPcu9kmeaocefhoarcrfgrc8J9hmbkaOhoxekaocefhokaHce4cbaHceG9R7amfgmhOkdndnadcd9hmbabaDcetfgraA87ebarcdfas87ebarclfaO87ebxekabaDcdtfgraABdbarclfasBdbarcwfaOBdbkavc;abfalcitfgrasBdbaraABdlavaicdtfaABdbavc;abfalcefcsGcitfgraOBdbarasBdlavaicefgicsGcdtfasBdbavc;abfalcdfcsGcitfgraABdbaraOBdlavaiazcz6aXcsSVfgicsGcdtfaOBdbaiaCTaCcsSVfhialcifhlkawcefhwalcsGhlaicsGhiaDcifgDae6mbkkcbc99aoaqSEhokavc;aef8Kjjjjbaok:llevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:EPliuo97eue978Jjjjjbca9Rhidndnadcl9hmbdnaec98GglTmbcbhvabhdinadadpbbbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDpxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpkbbadczfhdavclfgval6mbkkalae9pmeaiaeciGgvcdtgdVcbczad9R;8kbaiabalcdtfglad;8qbbdnavTmbaiaipblbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDpxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpklbkalaiad;8qbbskdnaec98GgxTmbcbhvabhdinadczfglalpbbbgopxbbbbbbFFbbbbbbFFgkp9oadpbbbgDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eaDaopmbediwDqkzHOAKY8AEgoczp:Sep;6egrp;Geaoczp:Reczp:Sep;6egwp;Gep;Kep;Legopxb;:FSb;:FSb;:FSb;:FSawaopxbbbbbbbbbbbbbbbbp:2egqawpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegwawp;Meaoaop;Mearaqaramp9op9rp;Kegoaop;Mep;Kep;Kep;Jep;Negrp;Mepxbbn0bbn0bbn0bbn0gqp;Keczp:Reawarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9op9qgwaoarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogopmwDKYqk8AExm35Ps8E8Fp9qpkbbadaDakp9oawaopmbezHdiOAlvCXorQLp9qpkbbadcafhdavclfgvax6mbkkaxae9pmbaiaeciGgvcitgdfcbcaad9R;8kbaiabaxcitfglad;8qbbdnavTmbaiaipblzgopxbbbbbbFFbbbbbbFFgkp9oaipblbgDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eaDaopmbediwDqkzHOAKY8AEgoczp:Sep;6egrp;Geaoczp:Reczp:Sep;6egwp;Gep;Kep;Legopxb;:FSb;:FSb;:FSb;:FSawaopxbbbbbbbbbbbbbbbbp:2egqawpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegwawp;Meaoaop;Mearaqaramp9op9rp;Kegoaop;Mep;Kep;Kep;Jep;Negrp;Mepxbbn0bbn0bbn0bbn0gqp;Keczp:Reawarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9op9qgwaoarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogopmwDKYqk8AExm35Ps8E8Fp9qpklzaiaDakp9oawaopmbezHdiOAlvCXorQLp9qpklbkalaiad;8qbbkk;4wllue97euv978Jjjjjbc8W9Rhidnaec98GglTmbcbhvabhoinaiaopbbbgraoczfgwpbbbgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklbaopxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaqakp;Mearp;Keczp:ReaDakp;Mearp;Keamp9op9qgkpmbezHdiOAlvCXorQLgrp5baipblbpEb:T:j83ibaocwfarp5eaipblbpEe:T:j83ibawaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblbpEd:T:j83ibaocKfakp5eaipblbpEi:T:j83ibaocafhoavclfgval6mbkkdnalae9pmbaiaeciGgvcitgofcbcaao9R;8kbaiabalcitfgwao;8qbbdnavTmbaiaipblbgraipblzgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklaaipxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaqakp;Mearp;Keczp:ReaDakp;Mearp;Keamp9op9qgkpmbezHdiOAlvCXorQLgrp5baipblapEb:T:j83ibaiarp5eaipblapEe:T:j83iwaiaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblapEd:T:j83izaiakp5eaipblapEi:T:j83iKkawaiao;8qbbkk:Pddiue978Jjjjjbc;ab9Rhidnadcd4ae2glc98GgvTmbcbhdabheinaeaepbbbgocwp:Recwp:Sep;6eaocep:SepxbbjZbbjZbbjZbbjZp:UepxbbjFbbjFbbjFbbjFp9op;Mepkbbaeczfheadclfgdav6mbkkdnaval9pmbaialciGgdcdtgeVcbc;abae9R;8kbaiabavcdtfgvae;8qbbdnadTmbaiaipblbgocwp:Recwp:Sep;6eaocep:SepxbbjZbbjZbbjZbbjZp:UepxbbjFbbjFbbjFbbjFp9op;Mepklbkavaiae;8qbbkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaikkkebcjwklz9Tbb",t=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,3,2,0,0,5,3,1,0,1,12,1,0,10,22,2,12,0,65,0,65,0,65,0,252,10,0,0,11,7,0,65,0,253,15,26,11]),n=new Uint8Array([32,0,65,2,1,106,34,33,3,128,11,4,13,64,6,253,10,7,15,116,127,5,8,12,40,16,19,54,20,9,27,255,113,17,42,67,24,23,146,148,18,14,22,45,70,69,56,114,101,21,25,63,75,136,108,28,118,29,73,115]);if(typeof WebAssembly!="object")return{supported:!1};var s=WebAssembly.validate(t)?e:i,a,r=WebAssembly.instantiate(o(s),{}).then(function(d){a=d.instance,a.exports.__wasm_call_ctors()});function o(d){for(var M=new Uint8Array(d.length),y=0;y<d.length;++y){var v=d.charCodeAt(y);M[y]=v>96?v-97:v>64?v-39:v+4}for(var q=0,y=0;y<d.length;++y)M[q++]=M[y]<60?n[M[y]]:(M[y]-60)*64+M[++y];return M.buffer.slice(0,q)}function c(d,M,y,v,q,H){var U=a.exports.sbrk,Z=y+3&-4,w=U(Z*v),S=U(q.length),m=new Uint8Array(a.exports.memory.buffer);m.set(q,S);var I=d(w,y,v,S,q.length);if(I==0&&H&&H(w,Z,v),M.set(m.subarray(w,w+y*v)),U(w-U(0)),I!=0)throw new Error("Malformed buffer data: "+I)}var l={NONE:"",OCTAHEDRAL:"meshopt_decodeFilterOct",QUATERNION:"meshopt_decodeFilterQuat",EXPONENTIAL:"meshopt_decodeFilterExp"},h={ATTRIBUTES:"meshopt_decodeVertexBuffer",TRIANGLES:"meshopt_decodeIndexBuffer",INDICES:"meshopt_decodeIndexSequence"},u=[],A=0;function g(d){var M={object:new Worker(d),pending:0,requests:{}};return M.object.onmessage=function(y){var v=y.data;M.pending-=v.count,M.requests[v.id][v.action](v.value),delete M.requests[v.id]},M}function x(d){for(var M="var instance; var ready = WebAssembly.instantiate(new Uint8Array(["+new Uint8Array(o(s))+"]), {}).then(function(result) { instance = result.instance; instance.exports.__wasm_call_ctors(); });self.onmessage = workerProcess;"+c.toString()+p.toString(),y=new Blob([M],{type:"text/javascript"}),v=URL.createObjectURL(y),q=0;q<d;++q)u[q]=g(v);URL.revokeObjectURL(v)}function _(d,M,y,v,q){for(var H=u[0],U=1;U<u.length;++U)u[U].pending<H.pending&&(H=u[U]);return new Promise(function(Z,w){var S=new Uint8Array(y),m=A++;H.pending+=d,H.requests[m]={resolve:Z,reject:w},H.object.postMessage({id:m,count:d,size:M,source:S,mode:v,filter:q},[S.buffer])})}function p(d){r.then(function(){var M=d.data;try{var y=new Uint8Array(M.count*M.size);c(a.exports[M.mode],y,M.count,M.size,M.source,a.exports[M.filter]),self.postMessage({id:M.id,count:M.count,action:"resolve",value:y},[y.buffer])}catch(v){self.postMessage({id:M.id,count:M.count,action:"reject",value:v})}})}return{ready:r,supported:!0,useWorkers:function(d){x(d)},decodeVertexBuffer:function(d,M,y,v,q){c(a.exports.meshopt_decodeVertexBuffer,d,M,y,v,a.exports[l[q]])},decodeIndexBuffer:function(d,M,y,v){c(a.exports.meshopt_decodeIndexBuffer,d,M,y,v)},decodeIndexSequence:function(d,M,y,v){c(a.exports.meshopt_decodeIndexSequence,d,M,y,v)},decodeGltfBuffer:function(d,M,y,v,q,H){c(a.exports[h[q]],d,M,y,v,a.exports[l[H]])},decodeGltfBufferAsync:function(d,M,y,v,q){return u.length>0?_(d,M,y,h[v],l[q]):r.then(function(){var H=new Uint8Array(d*M);return c(a.exports[h[v]],H,d,M,y,a.exports[l[q]]),H})}}})();function D_(i,e){const t=new xt,n=i.attributes.position.count;for(const[s,a]of[["position",3],["normal",3],["color",3]]){const r=i.getAttribute(s),o=new Float32Array(n*a);for(let c=0;c<n;c++)o[c*a]=r?r.getX(c):1,o[c*a+1]=r?r.getY(c):1,o[c*a+2]=r?r.getZ(c):1;t.setAttribute(s,new Lt(o,a))}return i.index&&t.setIndex(Array.from(i.index.array)),t.applyMatrix4(e),t}function pu(i,e,t){i.updateMatrixWorld(!0);const n=(i.parent??i).matrixWorld.clone().invert(),s={};i.traverse(o=>{const c=o;if(!c.isMesh)return;const l=c.material.name.includes("lead")?"lead":"matte";(s[l]||=[]).push(D_(c.geometry,new He().multiplyMatrices(n,c.matrixWorld)))});const a=new Sn;let r=0;for(const[o,c]of Object.entries(s)){const l=to(c);c.forEach(u=>u.dispose());const h=new nt(l,e[o]);h.castShadow=h.receiveShadow=t,h.name=o,a.add(h),r+=(l.index?l.index.count:l.attributes.position.count)/3}return{g:a,tris:r}}async function L_(i,e="ayasofya"){return(await fetch(`${i}models/${e}.anchor.json`)).json()}async function P_(i){const e=await L_(i.base),n=await new Bf().setMeshoptDecoder(Lf).loadAsync(`${i.base}models/${e.model_web}`),s=i.shadows??!0,a={matte:new _s({name:"ayasofya_matte",vertexColors:!0,roughness:.9,metalness:0,side:Mt}),lead:new _s({name:"ayasofya_lead_gold",vertexColors:!0,roughness:.68,metalness:0,side:Mt})},r=new Jr;r.name="Ayasofya";const o=[],c=n.scene.getObjectByName("LOD0"),l=n.scene.getObjectByName("LOD1");if(!c)throw new Error("ayasofya: LOD0 missing");{const{g:A,tris:g}=pu(c,a,s);r.addLevel(A,0),o.push(g)}if(l){const{g:A,tris:g}=pu(l,a,s);r.addLevel(A,i.lodDistance??900),o.push(g)}n.scene.traverse(A=>{const g=A;g.isMesh&&g.geometry.dispose()});const[h,u]=i.project(e.anchor.lon,e.anchor.lat);return r.position.set(h,i.groundY?i.groundY(h,u):0,u),r.rotation.y=e.three_rotation_y_rad,r.scale.setScalar(e.scale_m),r.userData={id:e.id,source:e.source},{object:r,anchor:e,triangles:o,materials:[a.matte,a.lead]}}function U_(i,e){const t=new xt,n=i.attributes.position.count;for(const[s,a]of[["position",3],["normal",3],["color",3]]){const r=i.getAttribute(s),o=new Float32Array(n*a);for(let c=0;c<n;c++)o[c*a]=r?r.getX(c):1,o[c*a+1]=r?r.getY(c):1,o[c*a+2]=r?r.getZ(c):1;t.setAttribute(s,new Lt(o,a))}return i.index&&t.setIndex(Array.from(i.index.array)),t.applyMatrix4(e),t}function mu(i,e,t){i.updateMatrixWorld(!0);const n=(i.parent??i).matrixWorld.clone().invert(),s={};i.traverse(o=>{const c=o;if(!c.isMesh)return;const l=c.material.name.includes("lead")?"lead":"matte";(s[l]||=[]).push(U_(c.geometry,new He().multiplyMatrices(n,c.matrixWorld)))});const a=new Sn;let r=0;for(const[o,c]of Object.entries(s)){const l=to(c);c.forEach(u=>u.dispose());const h=new nt(l,e[o]);h.castShadow=h.receiveShadow=t,h.name=o,a.add(h),r+=(l.index?l.index.count:l.attributes.position.count)/3}return{g:a,tris:r}}async function ys(i,e){const t=await(await fetch(`${e.base}models/${i}.anchor.json`)).json(),n=await new Bf().setMeshoptDecoder(Lf).loadAsync(`${e.base}models/${t.model_web}`),s=e.shadows??!0,a={matte:new _s({name:`${i}_matte`,vertexColors:!0,roughness:.9,metalness:0,side:Mt}),lead:new _s({name:`${i}_lead_gold`,vertexColors:!0,roughness:.68,metalness:0,side:Mt})},r=new Jr;r.name=t.name||i;const o=[],c=n.scene.getObjectByName("LOD0"),l=n.scene.getObjectByName("LOD1");if(!c)throw new Error(`${i}: LOD0 missing`);{const{g:A,tris:g}=mu(c,a,s);r.addLevel(A,0),o.push(g)}if(l){const{g:A,tris:g}=mu(l,a,s);r.addLevel(A,e.lodDistance??900),o.push(g)}n.scene.traverse(A=>{const g=A;g.isMesh&&g.geometry.dispose()});const[h,u]=e.project(t.anchor.lon,t.anchor.lat);return r.position.set(h,e.groundY?e.groundY(h,u):0,u),r.rotation.y=t.three_rotation_y_rad,r.scale.setScalar(t.scale_m),r.userData={id:t.id,source:t.source},{object:r,anchor:t,triangles:o,materials:[a.matte,a.lead]}}const F_=i=>ys("topkapi",i),N_=i=>ys("sultanahmet",i),Q_=i=>ys("yenicami",i),k_=i=>ys("rustempasa",i),lc=5;function O_(i){const e=i.attributes.position,t=e.count,n=new Float32Array(t*2);for(let r=0;r<t;r++){const o=e.getX(r),c=e.getY(r),l=e.getZ(r),h=Math.hypot(o,l);n[r*2]=Math.atan2(o,l)*Math.max(h,1)/lc,n[r*2+1]=c/lc}const s=i.index?i.index.array:null,a=s?s.length/3:t/3;for(let r=0;r<a;r++){const o=[0,1,2].map(h=>s?s[r*3+h]:r*3+h),c=o.map(h=>n[h*2]);if(Math.max(...c)-Math.min(...c)>2){const h=Math.max(1,...o.map(A=>Math.hypot(e.getX(A),e.getZ(A)))),u=2*Math.PI*h/lc;for(const A of o)n[A*2]<0&&(n[A*2]+=u)}}i.setAttribute("uv",new Lt(n,2))}async function z_(i){const e=await ys("galata",i),t=await new Ml().loadAsync(`${i.base}tex/galata_stone_512.jpg`);t.wrapS=t.wrapT=Un,t.colorSpace=Nt,t.anisotropy=4;const n=e.materials[0];return n.map=t,n.needsUpdate=!0,e.object.traverse(s=>{const a=s;a.isMesh&&a.material===n&&O_(a.geometry)}),e}function G_(i,e){const t=i.attributes.position,n=t.count,s=new Float32Array(n*2),a=new ne,r=new ne,o=new ne,c=new ne,l=new ne,h=i.index?i.index.array:null,u=h?h.length/3:n/3;for(let A=0;A<u;A++){const g=[0,1,2].map(M=>h?h[A*3+M]:A*3+M);a.fromBufferAttribute(t,g[0]),r.fromBufferAttribute(t,g[1]),o.fromBufferAttribute(t,g[2]);const x=c.subVectors(r,a).cross(l.subVectors(o,a)),_=Math.abs(x.x),p=Math.abs(x.y),d=Math.abs(x.z);for(const M of g){const y=t.getX(M),v=t.getY(M),q=t.getZ(M);p>_&&p>d?(s[M*2]=y/e,s[M*2+1]=q/e):_>d?(s[M*2]=q/e,s[M*2+1]=v/e):(s[M*2]=y/e,s[M*2+1]=v/e)}}i.setAttribute("uv",new Lt(s,2))}const H_={nusretiye:["stone_ashlar_512.jpg",4],ayatriada:["stone_ashlar_512.jpg",4],stantoine:["brick_red_512.jpg",2.4]};async function V_(i,e){const t=await ys(i,e),[n,s]=H_[i],a=await new Ml().loadAsync(`${e.base}tex/${n}`);a.wrapS=a.wrapT=Un,a.colorSpace=Nt,a.anisotropy=4;const r=t.materials[0];return r.map=a,r.needsUpdate=!0,t.object.traverse(o=>{const c=o;c.isMesh&&c.material===r&&G_(c.geometry,s)}),t}function W_(i,e,t){const n=[],s=[],a=new Re,r=(ae,le,ge,Ee)=>{n.push(...ae,...le,...ge),a.set(Ee);for(let $=0;$<3;$++)s.push(a.r,a.g,a.b)},o=ae=>{const le=Math.sin(ae*127.1+311.7)*43758.5453;return le-Math.floor(le)},c=["#b8643f","#c06a43","#ad5c3b","#c27350","#b05f40"],l="#d9cbb4",h=ae=>{const le=[];for(let ge=0;ge<ae.length;ge+=2)le.push(new ke(ae[ge],ae[ge+1]));return wn.isClockWise(le)&&le.reverse(),le},u=h(i.outline);let A=0;for(const ae of u)A+=e(ae.x,ae.y);A/=u.length;const g=(ae,le)=>e(ae,le),x=7;((ae,le,ge,Ee)=>{for(let $=0;$<ae.length;$++){const oe=ae[$],ee=ae[($+1)%ae.length],Ae=g(oe.x,oe.y),W=g(ee.x,ee.y);r([oe.x,Ae+le,oe.y],[ee.x,W+le,ee.y],[ee.x,W+ge,ee.y],Ee),r([oe.x,Ae+le,oe.y],[ee.x,W+ge,ee.y],[oe.x,Ae+ge,oe.y],Ee)}})(u,-1,x,l);const p=[],d=[];i.cells.forEach((ae,le)=>{const ge=h(ae.p);let Ee=0,$=0;for(const ce of ge)Ee+=ce.x,$+=ce.y;Ee/=ge.length,$/=ge.length;const oe=c[Math.floor(o(le)*c.length)],ee=new Re(oe).multiplyScalar(.82),Ae=x+(o(le*3.3)-.5)*1.2,W=g(Ee,$);let re=0;for(const ce of ge)re=Math.max(re,Math.hypot(ce.x-Ee,ce.y-$));const he=Math.min(2.6,.45*re);if(ae.r&&ge.length===4){const ce=Math.cos(ae.a),fe=Math.sin(ae.a);let _e=1e9,f=-1e9;for(const O of ge){const D=(O.x-Ee)*ce+(O.y-$)*fe;_e=Math.min(_e,D),f=Math.max(f,D)}const B=f-_e,j=Math.min(B*.3,2.5),L=[Ee+ce*(_e+j),W+Ae+he,$+fe*(_e+j)],N=[Ee+ce*(f-j),W+Ae+he,$+fe*(f-j)];for(let O=0;O<4;O++){const D=ge[O],E=ge[(O+1)%4],b=g(D.x,D.y)+Ae,C=g(E.x,E.y)+Ae,T=(D.x-Ee)*ce+(D.y-$)*fe,R=(E.x-Ee)*ce+(E.y-$)*fe,F=T<0?L:N,k=R<0?L:N,G=O%2?oe:ee;F===k?r([D.x,b,D.y],[E.x,C,E.y],F,G):(r([D.x,b,D.y],[E.x,C,E.y],k,G),r([D.x,b,D.y],k,F,G))}}else{const ce=[Ee,W+Ae+he*.8,$];for(let fe=0;fe<ge.length;fe++){const _e=ge[fe],f=ge[(fe+1)%ge.length];r([_e.x,g(_e.x,_e.y)+Ae,_e.y],[f.x,g(f.x,f.y)+Ae,f.y],ce,fe%2?oe:ee)}}o(le*7.1)<.22&&p.push([Ee+(o(le*9.1)-.5)*re*.6,W+Ae+he*.5,$+(o(le*4.7)-.5)*re*.6,1.3+o(le)*.9]),o(le*5.9)<(t?.15:.3)&&d.push([Ee+(o(le*2.1)-.5)*re,W+Ae+he*.4,$+(o(le*6.3)-.5)*re])});const M=i.sw/2+.6;for(const ae of i.streets)for(let le=0;le<ae.length-1;le++){const[ge,Ee]=ae[le],[$,oe]=ae[le+1],ee=Math.hypot($-ge,oe-Ee);if(ee<.5)continue;const Ae=-(oe-Ee)/ee*M,W=($-ge)/ee*M,re=g(ge,Ee),he=g($,oe),ce=x+.6,fe=ce+1.6,_e=[ge+Ae,re+ce,Ee+W],f=[$+Ae,he+ce,oe+W],B=[ge-Ae,re+ce,Ee-W],j=[$-Ae,he+ce,oe-W],L=[ge,re+fe,Ee],N=[$,he+fe,oe];r(_e,f,N,"#c98a68"),r(_e,N,L,"#c98a68"),r(j,B,L,"#b97a5c"),r(j,L,N,"#b97a5c");const O=-(oe-Ee)/ee*.45,D=($-ge)/ee*.28,E=[ge+O,re+fe+.08,Ee+D],b=[$+O,he+fe+.08,oe+D],C=[$-O,he+fe+.08,oe-D],T=[ge-O,re+fe+.08,Ee-D];r(E,b,C,"#e6dccd"),r(E,C,T,"#e6dccd")}const y=new xt;y.setAttribute("position",new et(n,3)),y.setAttribute("color",new et(s,3)),y.computeVertexNormals();const v=new Sn;v.name="kapalicarsi";const q=new nt(y,new Je({vertexColors:!0,side:Mt}));q.castShadow=q.receiveShadow=!0,v.add(q);const H=new Je({color:"#b7bcc2"}),U=new Je({color:"#cfc6b6"}),Z=new Cn(1,14,5,0,Math.PI*2,0,Math.PI/2),w=new Rt(1,1,1),S=i.beds.reduce((ae,le)=>ae+le.nc*le.nr+4,0),m=new Bt(Z,H,S+p.length),I=new He,Q=new wt,K=new ne(0,1,0),Y=new ne,te=new ne;let X=0;for(const ae of i.beds){const le=g(ae.x,ae.z),ge=10.5;Q.setFromAxisAngle(K,-ae.a);const Ee=new nt(w,U);Ee.position.set(ae.x,le+ge/2-1,ae.z),Ee.scale.set(ae.L,ge,ae.W),Ee.quaternion.copy(Q),Ee.castShadow=Ee.receiveShadow=!0,v.add(Ee);const $=ae.L/ae.nc,oe=ae.W/ae.nr,ee=Math.min($,oe)*.44,Ae=Math.cos(ae.a),W=Math.sin(ae.a);for(let re=0;re<ae.nc;re++)for(let he=0;he<ae.nr;he++){const ce=-ae.L/2+$*(re+.5),fe=-ae.W/2+oe*(he+.5);m.setMatrixAt(X++,I.compose(Y.set(ae.x+Ae*ce-W*fe,le+ge-1,ae.z+W*ce+Ae*fe),Q,te.set(ee,ee*.75,ee)))}for(const[re,he]of[[-1,-1],[1,-1],[1,1],[-1,1]]){const ce=re*(ae.L/2-1.5),fe=he*(ae.W/2-1.5);m.setMatrixAt(X++,I.compose(Y.set(ae.x+Ae*ce-W*fe,le+ge+.4,ae.z+W*ce+Ae*fe),Q,te.set(1.8,1.8,1.8)))}}const V=X;for(const ae of p)m.setMatrixAt(X++,I.compose(Y.set(ae[0],ae[1],ae[2]),Q.identity(),te.set(ae[3],ae[3]*.8,ae[3])));m.count=X,m.castShadow=m.receiveShadow=!0,m.computeBoundingSphere(),v.add(m);const ue=new Bt(w,new Je({color:"#8d6a55"}),Math.max(1,d.length));return d.forEach((ae,le)=>ue.setMatrixAt(le,I.compose(Y.set(ae[0],ae[1]+.9,ae[2]),Q.identity(),te.set(.8,1.8,.8)))),ue.count=d.length,ue.computeBoundingSphere(),v.add(ue),{grp:v,detail:[ue],dome:m,nBig:V,outline:i.outline,tris:n.length/9}}const Ot="#e6ddd0",ci="#8a9098",Rr="#6b4a2a",On="#d8d2c6",Wi="#c4a35a",hc="#b07a5c",j_="#efe8dc",Dr="#f2ebe0";function q_(i,e){const t=new Sn;t.name="wm11";const n=[],s=new He,a=new wt,r=new ne(0,1,0),o=new ne,c=new ne,l=new Rt(1,1,1),h=new Ft(1,1,1,12),u=new ei(1,1,12),A=new Cn(1,16,8,0,Math.PI*2,0,Math.PI/2),g=new Cn(1,14,7,0,Math.PI,0,Math.PI/2),x=new ei(Math.SQRT1_2,1,4).rotateY(Math.PI/4),_=(m,I,Q,K,Y,te,X,V,ue=0)=>{const ae=m.index?m.toNonIndexed():m.clone();ae.deleteAttribute("uv"),ae.deleteAttribute("normal"),ae.applyMatrix4(s.compose(o.set(Q,K,Y),a.setFromAxisAngle(r,ue),c.set(te,X,V)));const le=new Re(I),ge=ae.attributes.position.count,Ee=new Float32Array(ge*3);for(let $=0;$<ge;$++)Ee.set([le.r,le.g,le.b],$*3);ae.setAttribute("color",new Lt(Ee,3)),n.push(ae)},p=(m,I,Q,K,Y,te,X=0,V=Ot)=>_(l,V,m,Y+te/2,I,Q,te,K,X),d=(m,I,Q,K,Y=K*.85,te=ci)=>_(A,te,m,I,Q,K,Y,K),M=(m,I,Q,K,Y,te,X=ci)=>_(g,X,m,I,Q,K,Y,K,te),y=(m,I,Q,K,Y,te=1.55,X=Ot)=>{p(m,I,te*2.3,te*2.3,Q,3.2,0,X),_(h,X,m,Q+3.2+(K-6)/2,I,te,K-6,te);for(const V of Y)_(h,On,m,Q+V,I,te*1.55,.55,te*1.55);_(u,ci,m,Q+K-2.1,I,te*1.35,4.2,te*1.35),_(h,Wi,m,Q+K+.4,I,.12,1.4,.12)},v=(m,I,Q,K,Y,te,X,V)=>{const ue=Q/2,ae=K/2,le=Math.cos(X),ge=Math.sin(X),Ee=(B,j,L)=>[m+B*le+L*ge,j,I-B*ge+L*le],$=new Re(V),oe=[],ee=[],Ae=(B,j,L)=>{oe.push(...B,...j,...L);for(let N=0;N<3;N++)ee.push($.r,$.g,$.b)},W=Ee(-ue,Y,-ae),re=Ee(ue,Y,-ae),he=Ee(ue,Y+te,0),ce=Ee(-ue,Y+te,0),fe=Ee(-ue,Y,ae),_e=Ee(ue,Y,ae);Ae(W,re,he),Ae(W,he,ce),Ae(fe,ce,he),Ae(fe,he,_e),Ae(W,ce,fe),Ae(re,_e,he);const f=new xt;f.setAttribute("position",new et(oe,3)),f.setAttribute("color",new et(ee,3)),n.push(f)},q="#6c88a6",H=(m,I,Q,K)=>{const Y=[];for(let le=0;le<m.length;le+=2)Y.push(new ke(m[le],m[le+1]));wn.isClockWise(Y)&&Y.reverse();const te=[],X=[],V=new Re(K),ue=(le,ge,Ee)=>{te.push(...le,...ge,...Ee);for(let $=0;$<3;$++)X.push(V.r,V.g,V.b)};for(const le of wn.triangulateShape(Y,[])){const ge=Y[le[0]],Ee=Y[le[1]],$=Y[le[2]];ue([ge.x,Q,ge.y],[$.x,Q,$.y],[Ee.x,Q,Ee.y])}for(let le=0;le<Y.length;le++){const ge=Y[le],Ee=Y[(le+1)%Y.length];ue([ge.x,I,ge.y],[Ee.x,I,Ee.y],[Ee.x,Q,Ee.y]),ue([ge.x,I,ge.y],[Ee.x,Q,Ee.y],[ge.x,Q,ge.y])}const ae=new xt;ae.setAttribute("position",new et(te,3)),ae.setAttribute("color",new et(X,3)),n.push(ae)};{const m=i.taksim_anit,I=m.x,Q=m.z,K=e(I,Q);_(h,"#cfc8bc",I,K+.25,Q,7.2,.5,7.2),_(h,"#d7d1c6",I,K+.7,Q,6,.45,6),_(h,On,I,K+1.15,Q,5,.45,5),p(I,Q,4.6,3.3,K+1.35,5.4,.2,"#e8e2d6"),p(I,Q,4.85,3.55,K+6.55,.28,.2,"#ddd6c8"),p(I,Q,3.6,1.6,K+6.85,2.6,.2,Rr),p(I-.15,Q,1.1,1.1,K+9.45,1.5,.2,Rr),p(I+1.15,Q+.15,.85,.85,K+6.85,2.15,.2,Rr),p(I-1.2,Q-.1,.85,.85,K+6.85,2.05,.2,Rr)}{const m=i.misir;m.eave;const I=e(m.x,m.z),Q=I,K=10.2,Y="#e7d6b2",te="#cfae78",X="#2c2622",V="#6c88a6",ue="#71859a",ae=m.outline||[],le=[];for(let W=0;W<ae.length;W+=2)le.push(new ke(ae[W],ae[W+1]));const ge=(W,re)=>{let he=!1;for(let ce=0,fe=le.length-1;ce<le.length;fe=ce++)le[ce].y>re!=le[fe].y>re&&W<(le[fe].x-le[ce].x)*(re-le[ce].y)/(le[fe].y-le[ce].y)+le[ce].x&&(he=!he);return he};if(le.length>=4){H(ae,Q-1,Q+K,Y),H(ae,Q+K-.05,Q+K+.35,ue);const W=wn.isClockWise(le);for(let re=0;re<le.length;re++){const he=le[re],ce=le[(re+1)%le.length],fe=he.distanceTo(ce);if(fe<5)continue;const _e=-Math.atan2(ce.y-he.y,ce.x-he.x);let f=(ce.y-he.y)/fe,B=-(ce.x-he.x)/fe;W&&(f=-f,B=-B);const j=(he.x+ce.x)/2+f*.12,L=(he.y+ce.y)/2+B*.12;for(let N=.9;N<K-.4;N+=1.25)p(j,L,fe,.26,Q+N,.55,_e,te);p(j+f*.1,L+B*.1,fe+.3,.5,Q+K-.55,.5,_e,"#d9c49c");for(let N=2.1;N<fe-2.1;N+=4.2){const O=he.x+(ce.x-he.x)*(N/fe)+f*.2,D=he.y+(ce.y-he.y)*(N/fe)+B*.2;p(O,D,2.3,.3,Q+.2,3.1,_e,X),_(h,X,O,Q+3.3,D,1.15,.3,.15,_e),p(O,D,1,.3,Q+5.6,1.7,_e,X)}}}const Ee=m.arms||[],$=m.corner?[m.corner.x,m.corner.z]:[1e9,1e9],oe=[];for(const W of Ee){const re=Math.cos(W.pang),he=Math.sin(W.pang),ce=-he,fe=re,_e=-W.pang,f=W.L/2,B=[W.x-re*f,W.z-he*f],j=[W.x+re*f,W.z+he*f],L=Math.hypot(B[0]-$[0],B[1]-$[1])<Math.hypot(j[0]-$[0],j[1]-$[1]),N=L?1:-1,O=L?-f+6:-f+9,D=L?f-9:f-6,E=(O+D)/2;v(W.x+re*E,W.z+he*E,D-O,11.5,Q+K+.3,4.4,_e,ue),p(W.x+re*E,W.z+he*E,D-O,.7,Q+K+4.6,.25,_e,"#5e7184");const b=W.L>=Math.max(...Ee.map(k=>k.L))?23:18,C=L?-f+8.5:-f+9,T=L?f-9:f-8.5,R=(T-C)/b,F=W.L<Math.max(...Ee.map(k=>k.L));for(const k of[-1,1]){if(F&&fe*k<0){const G=W.W/2-3,P=(C+T)/2;v(W.x+re*P+ce*k*G,W.z+he*P+fe*k*G,T-C,5.4,Q+K+.3,1.1,_e,V);continue}for(let G=0;G<b;G++){const P=C+(G+.5)*R,J=W.W/2-3,ie=W.x+re*P+ce*k*J,de=W.z+he*P+fe*k*J;if(!ge(ie,de))continue;const ye=Math.min(1.95,R*.46);_(h,ue,ie,Q+K+.55,de,ye+.1,.5,ye+.1),d(ie,Q+K+.8,de,ye,ye*.7,V)}}oe.push({x:W.x+re*f*N,z:W.z+he*f*N,ux:re*N,uz:he*N,w:W.W,main:W.name==="ns"})}if(m.corner){const W=m.corner.x,re=m.corner.z,he=Ee.length?-Ee[0].pang:0;p(W,re,15,15,Q+K,1.6,he,Y),_(x,ue,W,Q+K+1.6+1.3,re,15.6,2.6,15.6,he)}const ee=(W,re,he,ce,fe,_e)=>{const f=-Math.atan2(ce,he),B=_e?12:9.5,j=1.4,L=W-he*(B/2-j),N=re-ce*(B/2-j),O=fe+1.6;let D=1e9;for(const G of[-.5,.5])for(const P of[-.5,.5])D=Math.min(D,e(L+he*B*G-ce*O*P,N+ce*B*G+he*O*P));const E=Math.min(Q,D),b=Q+K+(_e?5.2:3.6);p(L,N,B,O,E-1,b-E+1,f,Y);for(let G=E+.9;G<b-.6;G+=1.25)p(L,N,B+.06,O+.06,G,.55,f,te);p(L,N,B+.6,O+.6,b-.6,.6,f,"#d9c49c");const C=W+he*(j+.05),T=re+ce*(j+.05),R=_e?7.2:5.4,F=_e?8.6:6.6;p(C,T,.5,R+2.4,E,F+R/2+1.4,f,"#efe3c8"),p(C+he*.1,T+ce*.1,.5,R,E+.02,F,f,X),p(C+he*.1,T+ce*.1,.5,R*.72,E+F,R*.22,f,X),p(C+he*.1,T+ce*.1,.5,R*.4,E+F+R*.22,R*.2,f,X);const k=_e?3:2;for(let G=0;G<k;G++){const P=(G-(k-1)/2)*3.2;p(C-ce*P,T+he*P,.4,1.3,b-3.4,1.9,f,X)}if(v(L,N,O-.6,B-.6,b,_e?3:2.4,f+Math.PI/2,ue),_e)for(const G of[-1,1]){const P=L-ce*G*(O/2-2.6),J=N+he*G*(O/2-2.6);d(P,b,J,2.2,1.6,V)}};for(const W of oe)ee(W.x,W.z,W.ux,W.uz,W.w,W.main);for(const W of m.end_gates||[]){const re=Math.cos(W.ang),he=Math.sin(W.ang);ee(W.x,W.z,re,he,W.w,!1)}if(i.wm15?.hunkar){const W=i.wm15.hunkar,re=e(W.ax,W.az);_(x,"#8e3b2e",W.x,re+12+1.35,W.z,W.w+1.6,2.7,W.d+1.6,W.rot)}if(m.awning_strip){const W=m.awning_strip,re=Q;p(W.x,W.z,W.L,W.W+.4,re+2.55,.3,W.ang,"#6e5443")}if(m.fountain){const W=m.fountain,re=e(W.x,W.z),he=W.r||5.2;p(W.x,W.z,he*2.55,he*2.55,re+.02,.22,0,"#d8d0c4"),p(W.x,W.z,he*2.15,he*.82,re+.12,.52,0,On),p(W.x,W.z,he*2.15,he*.82,re+.12,.52,Math.PI/4,On),_(h,"#2e8a96",W.x,re+.52,W.z,3.15,.4,3.15)}for(const W of m.hedges||[]){const re=e(W.x,W.z);p(W.x,W.z,W.w,W.d,re,W.h,W.ang,"#4e7a38")}for(const W of[]){const re=e(W.x,W.z);p(W.x,W.z,W.w,W.d,re-.3,W.h,W.ang,"#e6dcc8"),p(W.x,W.z,W.w+.4,W.d+.4,re+W.h-.12,.62,W.ang,W.roof||"#5f8a4a")}const Ae=new Ao(1,0);for(const W of m.garden_trees||[]){const re=W[0],he=W[1],ce=W[2]||.95,fe=e(re,he);_(h,"#6b4d32",re,fe+2.8*ce,he,.5*ce,5.6*ce,.5*ce),_(Ae,"#5f8f3c",re,fe+8.2*ce,he,6.3*ce,4.9*ce,6.3*ce),_(Ae,"#6e9d45",re+2*ce,fe+10.4*ce,he-1.4*ce,4.2*ce,3.2*ce,4.2*ce)}Ae.dispose()}const U=m=>{const I={...m},Q=.476,K=.88;let Y=Math.cos(I.ang),te=Math.sin(I.ang);if(Math.abs(Y*Q+te*K)<.7071){I.ang+=Math.PI/2;const X=I.L;I.L=I.W,I.W=X,Y=Math.cos(I.ang),te=Math.sin(I.ang)}return Y*Q+te*K>0&&(I.ang+=Math.PI),I},Z=(m,I)=>{m=U(m);const Q=e(m.x,m.z),K=Math.cos(m.ang),Y=Math.sin(m.ang),te=-Y,X=K,V=I.court?m.L*.52:m.L,ue=I.court?m.L*.48:0,ae=m.x-K*(I.court?ue*.5:0),le=m.z-Y*(I.court?ue*.5:0),ge=I.brick?hc:Ot;p(ae,le,V,m.W*.92,Q-.8,I.wallH+.8,-m.ang,ge);const Ee=I.coreH??I.wallH,$=I.drumH??4.4;if(I.coreH){const W=I.domeR*2.12;p(ae,le,W,W,Q+I.wallH-.2,Ee-I.wallH+.2,-m.ang,ge);for(const re of[-1,1])for(const he of[-1,1]){const ce=ae+(K*re+te*he)*W*.5,fe=le+(Y*re+X*he)*W*.5;_(h,ge,ce,Q+Ee+2.4,fe,2,4.8,2),d(ce,Q+Ee+4.8,fe,2.1,2.2)}}if(_(h,ge,ae,Q+Ee+$/2,le,I.domeR*1.05,$,I.domeR*1.05),d(ae,Q+Ee+$,le,I.domeR,I.domeH),I.halves){const W=I.fourHalves?[[K,Y],[te,X]]:[[K,Y]];for(const[re,he]of W)for(const ce of[-1,1]){const fe=I.coreH?I.domeR*1.06:I.domeR*.95,_e=ae+re*ce*fe,f=le+he*ce*fe,B=Math.atan2(re*ce,he*ce);I.coreH?M(_e,Q+I.wallH,f,I.domeR*.92,Math.min(Ee-I.wallH+1.5,I.domeR*.92),B+Math.PI/2,ci):M(_e,Q+I.wallH,f,I.domeR*.78,I.domeH*.62,B+Math.PI/2,ci)}}if(!I.halves||I.fourHalves)for(const W of[-1,1])for(const re of[-1,1]){const he=ae+K*W*(V*.28)+te*re*(m.W*.28),ce=le+Y*W*(V*.28)+X*re*(m.W*.28);d(he,Q+I.wallH,ce,Math.min(4.8,m.W*.12),3.4)}if(I.court){const W=m.x+K*(V*.5),re=m.z+Y*(V*.5),he=7.2;p(W+te*(m.W*.46-he/2),re+X*(m.W*.46-he/2),ue,he,Q-.6,8.2,-m.ang,ge),p(W-te*(m.W*.46-he/2),re-X*(m.W*.46-he/2),ue,he,Q-.6,8.2,-m.ang,ge),p(W+K*(ue*.5-he/2),re+Y*(ue*.5-he/2),he,m.W*.92,Q-.6,8.2,-m.ang,ge),p(W,re,ue*.7,m.W*.55,Q+.12,.18,-m.ang,"#ddd4c4"),_(h,On,W,Q+1.1,re,3.2,2,3.2),d(W,Q+2.1,re,2.4,1.7,ci);for(const ce of[-1,1])for(let fe=-2;fe<=2;fe++){const _e=W+K*(fe*ue*.14)+te*ce*(m.W*.38),f=re+Y*(fe*ue*.14)+X*ce*(m.W*.38);d(_e,Q+8.2,f,2.1,1.55)}}const oe=ae+K*(V*.48),ee=le+Y*(V*.48),Ae=[];for(const W of[-1,1])Ae.push([oe+te*W*(m.W*.42),ee+X*W*(m.W*.42)]);if(I.nMin>=4&&I.court){const W=m.x+K*(m.L*.46),re=m.z+Y*(m.L*.46);for(const he of[-1,1])Ae.push([W+te*he*(m.W*.42),re+X*he*(m.W*.42)])}Ae.slice(0,I.nMin).forEach(([W,re],he)=>y(W,re,Q,I.minH[Math.min(he,I.minH.length-1)],I.galleries[Math.min(he,I.galleries.length-1)],1.45,ge))};{const m=i.suleymaniye,I=e(m.x,m.z),Q=q,K="#3a3632",Y=Math.cos(m.ang),te=Math.sin(m.ang),X=-te,V=Y,ue=-m.ang,ae=m.L*.52,le=m.L*.48,ge=m.W*.92,Ee=m.x-Y*le*.5,$=m.z-te*le*.5,oe=(D,E)=>[Ee+Y*D+X*E,$+te*D+V*E],ee=(D,E,b,C,T,R,F=Ot)=>{const[k,G]=oe(D,E);p(k,G,b,C,T,R,ue,F)},Ae=(D,E,b,C,T,R=0)=>{const[F,k]=oe(D,E);R&&_(h,Ot,F,b+R/2,k,C*1.06,R,C*1.06),d(F,b+R,k,C,T,Q)},W=(D,E,b,C,T,R,F)=>{const[k,G]=oe(D,E),P=Y*R+X*F,J=te*R+V*F;M(k,b,G,C,T,Math.atan2(P,J),Q)},re=13.25,he=28.4;ee(0,0,ae,ge,I-.8,15.8);for(const D of[-1,1])for(let E=-ae/2+4;E<=ae/2-4;E+=4.2)for(const b of[3.2,9.4])ee(E,D*(ge/2+.12),1.5,.35,I+b,3,K);for(let D=-ge/2+5;D<=ge/2-5;D+=4.2)for(const E of[3.2,9.4])ee(-ae/2-.12,D,.35,1.5,I+E,3,K);for(const D of[-1,1]){let E=0;for(let b=-20;b<=20.1;b+=10,E++)Ae(b,D*(ge/2-8.5),I+15,E%2?3.4:4.8,E%2?2.6:3.6,1.6)}for(const D of[-1,1])for(const E of[-1,1]){const[b,C]=oe(D*(ae/2-3),E*(ge/2-3));_(h,Ot,b,I+18,C,2.2,6,2.2),d(b,I+21,C,2.3,2.2,Q)}ee(0,0,ae-5,he+2,I+15,8);for(const D of[-1,1]){W(D*he/2,0,I+23,re,12.2,D,0);for(const E of[-1,1])Ae(D*(he/2+9),E*(he/2+.5),I+23,3,2.4,1.2)}ee(0,0,he,he,I+23,13.5);for(const D of[-1,1])for(const E of[-1,1]){const[b,C]=oe(D*he/2,E*he/2);_(h,Ot,b,I+38,C,2.4,7,2.4),d(b,I+41.5,C,2.6,2.6,Q),_(h,Wi,b,I+44.6,C,.1,1.2,.1)}_(h,Ot,Ee,I+36.5+2.5,$,re*1.06,5,re*1.06);for(let D=0;D<24;D++){const E=D/24*Math.PI*2,b=Ee+Math.cos(E)*re*1.07,C=$+Math.sin(E)*re*1.07;_(l,K,b,I+39,C,1.5,2.6,.3,-(E+Math.PI/2))}d(Ee,I+41.5,$,re,11.5,Q),_(h,Wi,Ee,I+54,$,.2,2.4,.2);const ce=ae/2,fe=ae/2+le,_e=7.2,f=_e/2;ee(fe-_e/2,0,_e,ge,I-.6,8.6);for(const D of[-1,1])ee((ce+fe)/2,D*(ge/2-_e/2),le,_e,I-.6,8.6);ee(ce+_e/2,0,_e,ge,I-.6,10.2),ee((ce+fe)/2,0,le-2*_e,ge-2*_e,I+.1,.16,"#e8e2d6");const B=ce+f,j=fe-f,L=ge/2-f,N=2*(j-B+2*L);for(let D=0;D<28;D++){let E=(D+.5)/28*N,b,C,T=0,R=0;E<j-B?(b=B+E,C=-L,R=1):(E-=j-B)<2*L?(b=j,C=-L+E,T=-1):(E-=2*L)<j-B?(b=j-E,C=L,R=-1):(E-=j-B,b=B,C=L-E,T=1);const F=b===B?10.2:8.6;Ae(b,C,I+F-.4,2.45,2.1);const k=b+T*(f+.1),G=C+R*(f+.1);ee(k,G,T?.3:2.4,T?2.4:.3,I+.2,F-3.2,K)}{const[D,E]=oe((ce+fe)/2+2,0);_(h,On,D,I+.9,E,3.8,1.8,3.8);for(let b=0;b<8;b++){const C=b/8*Math.PI*2;_(h,On,D+Math.cos(C)*3.2,I+3,E+Math.sin(C)*3.2,.25,2.6,.25)}d(D,I+4.3,E,3.9,2.4,Q)}ee(fe-_e/2,0,_e+2,11,I-.6,13.5),Ae(fe-_e/2,0,I+12.9,3.6,2.8);const O=[[ce+f,-L,63.5,[40,47.5,54.5]],[ce+f,L,63.5,[40,47.5,54.5]],[fe-f,-L,49.2,[33,42]],[fe-f,L,49.2,[33,42]]];for(const[D,E,b,C]of O){const[T,R]=oe(D,E);y(T,R,I,b,C,1.55,Ot)}}{const m=U(i.nuruosmaniye),I=e(m.x,m.z);Z(m,{wallH:19,coreH:26,drumH:4.6,domeR:12.75,domeH:12.9,halves:!1,nMin:2,minH:[56,56],galleries:[[28,40],[28,40]],court:!1});const Q=Math.cos(m.ang),K=Math.sin(m.ang),Y=-K,te=Q,X=Math.min(m.W*.5,22),V=m.x+Q*(m.L*.5+.5),ue=m.z+K*(m.L*.5+.5),ae=14;for(let le=0;le<ae;le++){const ge=-Math.PI/2+le/ae*Math.PI,Ee=-Math.PI/2+(le+1)/ae*Math.PI,$=(ge+Ee)/2,oe=V+Q*Math.cos($)*X+Y*Math.sin($)*X,ee=ue+K*Math.cos($)*X+te*Math.sin($)*X,Ae=2*X*Math.sin(Math.PI/ae/2)*2+.6,W=Math.atan2(K*-Math.sin($)+te*Math.cos($),Q*-Math.sin($)+Y*Math.cos($));p(oe,ee,Ae,7,I-.5,7.6,-W,Ot);const re=V+Q*Math.cos($)*(X-.2)+Y*Math.sin($)*(X-.2),he=ue+K*Math.cos($)*(X-.2)+te*Math.sin($)*(X-.2);d(re,I+7.6,he,2.1,1.5)}{const le=V+Q*X*.5,ge=ue+K*X*.5;p(le,ge,X,2*X-6,I+.1,.16,-m.ang,"#ddd4c4")}}Z(i.fatih,{wallH:16,coreH:26,drumH:4.5,domeR:13,domeH:13.5,halves:!0,fourHalves:!0,nMin:2,minH:[62,62],galleries:[[28,42],[28,42]],court:!0});{const m=i.kucukayasofya;let I=1e9;{const le=Math.cos(m.ang),ge=Math.sin(m.ang);for(const Ee of[-.5,.5])for(const $ of[-.5,.5])I=Math.min(I,e(m.x+le*m.L*Ee-ge*m.W*$,m.z+ge*m.L*Ee+le*m.W*$))}const Q=Math.cos(m.ang),K=Math.sin(m.ang),Y=-K,te=Q,X=Q<0?1:-1,V=3-.0125*m.L,ue=m.x-Q*X*V,ae=m.z-K*X*V;p(ue,ae,m.L*.975-6,m.W*.95,I-.6,14.2,-m.ang,hc),_(new Ft(1,1,1,8),hc,ue,I+15.4,ae,9.6,3.2,9.6),d(ue,I+17,ae,8.8,6.6,ci);{const Ee=m.x+Q*X*18.2+Y*1.45,$=m.z+K*X*18.2+te*1.45,oe=21;p(Ee-Q*X*2.6,$-K*X*2.6,1.2,oe,I-.4,6.6,-m.ang,Ot);const ee=W=>22.4+(W+9.4)*(20.4-22.4)/21.7,Ae=18.2-3.2;for(let W=0;W<5;W++){const re=((W+.5)/5-.5)*oe,he=1.45+re,ce=ee(he)-.25,fe=(Ae+ce)/2;p(m.x+Q*X*fe+Y*he,m.z+K*X*fe+te*he,ce-Ae,oe/5+.02,I+5.6,.8,-m.ang,Ot)}for(let W=0;W<6;W++){const re=(W/5-.5)*(oe-1.2),he=1.45+re,ce=ee(he)-.6;_(h,On,m.x+Q*X*ce+Y*he,I+2.8,m.z+K*X*ce+te*he,.32,5.6,.32)}for(let W=-2;W<=2;W++)d(Ee+Y*W*oe*.2,I+6.4,$+te*W*oe*.2,2.2,1.6,ci)}{const le=te>0?1:-1;y(m.x+Q*X*(m.L*.475+4.5)+Y*le*(m.W*.475+3.5),m.z+K*X*(m.L*.475+4.5)+te*le*(m.W*.475+3.5),I,38,[26],1.15,Ot)}}{const m=i.clock,I=e(m.x,m.z),Q=m.ang,K=[[9.6,6.5],[8.2,6.2],[7,6.8],[5.6,5.2]];let Y=I;K.forEach(([X,V],ue)=>{p(m.x,m.z,X,X,Y,V,Q,ue===2?"#e8e0d2":Dr),Y+=V});const te=I+6.5+6.2+3.4;for(let X=0;X<4;X++){const V=Q+X*Math.PI/2;_(h,"#2a2a28",m.x+Math.cos(V)*3.55,te,m.z+Math.sin(V)*3.55,1.35,.18,1.35,V)}_(u,ci,m.x,Y+2.1,m.z,3.4,4.2,3.4),_(h,Wi,m.x,Y+4.6,m.z,.12,1.6,.12)}{const m={...i.ciragan,x:3049.3,z:-2208,ang:-.405,L:122,W:34},I=e(m.x,m.z),Q=m.ang,K=-Q,Y=Math.cos(Q),te=Math.sin(Q);p(m.x,m.z,m.L,m.W,I-1,m.h+1,K,j_),p(m.x,m.z,m.L*.28,m.W+4,I+m.h-2,8,K,Dr);for(const X of[-1,1]){const V=m.x+Y*X*(m.L*.42),ue=m.z+te*X*(m.L*.42);p(V,ue,16,m.W+3,I+m.h-1,7,K,Dr),_(u,ci,V,I+m.h+9,ue,8,5,8)}for(let X=-4;X<=4;X++){if(Math.abs(X)<1)continue;const V=m.x+Y*X*12,ue=m.z+te*X*12;p(V,ue,5.5,m.W+1.4,I+2,m.h-3,K,"#f6f0e6")}}if(i.stadium){const m=i.stadium,I=m.px??m.x,Q=m.pz??m.z,K=m.pAng??m.ang,Y=e(I,Q),te=(m.pL||110)/2,X=(m.pW||69)/2,V=m.L/2,ue=m.W/2,ae=te+7,le=X+7,ge=V+7,Ee=ue+7,$=Math.cos(K),oe=Math.sin(K),ee=(re,he)=>I+re*$-he*oe,Ae=(re,he)=>Q+re*oe+he*$;_(h,"#3d8a45",I,Y+.32,Q,te,.64,X,K);const W=64;for(let re=0;re<W;re++){const he=(re+.5)/W*Math.PI*2,ce=Math.cos(he),fe=Math.sin(he),_e=ce*(ge+ae)/2,f=fe*(Ee+le)/2,B=ee(_e,f),j=Ae(_e,f),L=Math.atan2(-(j-Q),B-I),N=Math.hypot(ge*ce,Ee*fe),O=Math.hypot(ae*ce,le*fe),D=2*Math.PI*((N+O)/2)/W*1.18;p(B,j,N-O+1.2,D,Y+m.h-2.2,2.05,L,"#f4f1ea");for(let R=0;R<4;R++){const F=(R+.55)/4,k=(te+9)*(1-F)+(V-4)*F,G=(X+9)*(1-F)+(ue-4)*F,P=1.6+R*5.15,J=5.35,ie=ee(ce*k,fe*G),de=Ae(ce*k,fe*G),ye=Math.max(8,(V-te)/4);p(ie,de,ye,D*(.78+F*.16),Y+P,J,L,R%2?"#2c2c2e":"#3a3a3d")}const E=ee(ce*V*1.02,fe*ue*1.02),b=Ae(ce*V*1.02,fe*ue*1.02);p(E,b,2.15,2.15,Y-.4,m.h-2.5,L,Dr);const C=ee(ce*V*.998,fe*ue*.998),T=Ae(ce*V*.998,fe*ue*.998);p(C,T,.7,D*.72,Y+2.4,15.2,L,"#1a222c")}}if(i.stad_hall){const m=i.stad_hall,I=e(m.x,m.z);p(m.x,m.z,m.L,m.W,I-.5,m.h,m.ang,"#e7dfd1"),p(m.x,m.z,m.L+.6,m.W+.8,I+m.h-.35,.75,m.ang,"#f3f0ea")}if(i.dolmabahce_camii){const m=U(i.dolmabahce_camii),I=e(m.x,m.z),Q=Math.cos(m.ang),K=Math.sin(m.ang),Y=-K,te=Q,X=m.L*.58,V=m.x-Q*(m.L*.21),ue=m.z-K*(m.L*.21);p(V,ue,X,Math.min(X,m.W*.8),I-.8,17.6,-m.ang,Ot),_(h,Ot,V,I+19,ue,9.3,2.8,9.3),d(V,I+20.2,ue,9,8.4),_(h,Wi,V,I+29.3,ue,.14,1.6,.14);const ae=m.x+Q*(m.L*.29),le=m.z+K*(m.L*.29);p(ae,le,m.L*.4,m.W*.98,I-.8,13,-m.ang,"#ece6dc"),p(ae,le,m.L*.41,m.W,I+12.2,.8,-m.ang,On);for(const ge of[-1,1])y(ae+Q*m.L*.17+Y*ge*m.W*.47,le+K*m.L*.17+te*ge*m.W*.47,I,46,[34],1.1,Ot)}{const m="#e7d8b8",I="#f0e6cf",Q="#c4b08c",K="#59606a",Y="#3b3a3c",te="#cfc8bb",le=(ce,fe)=>Math.atan2(-fe,ce),ge=[3300.8,3012.7],Ee=[3329.1,3051.4],$=[(ge[0]+Ee[0])/2,(ge[1]+Ee[1])/2],oe=e($[0],$[1]),ee=(ce,fe)=>[$[0]+.59*ce+.806*fe,$[1]+.806*ce+-.59*fe],Ae=(ce,fe,_e,f,B,j,L)=>{const[N,O]=ee(ce,fe);p(N,O,_e,f,B,j,le(.59,.806),L)};Ae(0,6,86,48,oe-1.5,2.1,te),Ae(0,-29,36,12,oe-1.5,2,te),Ae(0,-31,15,8,oe+.5,5.5,m);{const[ce,fe]=ee(0,-31);v(ce,fe,16,9,oe+6,2.6,le(.59,.806),K)}const W=48,re=19.5,he=24;Ae(0,re/2,W,re,oe,1.8,Q),Ae(0,re/2,W-.4,re-.4,oe+1.8,he-1.8,m),Ae(0,re/2,W+.8,re+.8,oe+he-.7,.9,I),Ae(0,re/2,W+.5,re+.5,oe+8.6,.45,I);{const[ce,fe]=ee(0,re/2);v(ce,fe,W,re+.6,oe+he+.2,7.5,le(.59,.806),K)}for(const[ce,fe]of[[-.12,-1],[re+.12,1]])for(let _e=-W/2+2.6;_e<=W/2-2.6;_e+=3.3)if(!(Math.abs(_e)<9.5&&fe<0)){Ae(_e,ce,1.6,.35,oe+2.4,4.4,Y);for(let f=0;f<4;f++)Ae(_e,ce,1.25,.35,oe+9.6+f*3.55,2.5,Y)}Ae(0,re/2-1.25,19,re+2.5,oe,he+4,m),Ae(0,re/2-1.25,19.6,re+3.1,oe+he+3.3,.9,I);{const[ce,fe]=ee(0,re/2-1.25);v(ce,fe,re+3.1,19.8,oe+he+4.1,9.5,le(.806,-.59),K)}for(let ce=-7.5;ce<=7.6;ce+=3){Ae(ce,-2.62,1.8,.35,oe+2.4,5,Y);for(let fe=0;fe<5;fe++)Ae(ce,-2.62,1.3,.35,oe+9.6+fe*3.55,fe===4?3.4:2.5,Y)}{const[ce,fe]=ee(0,-2.7);_(h,"#f2eee4",ce,oe+he+6.5,fe,1.6,.25,1.6,le(.806,-.59))}for(const[ce,fe,_e]of[[3296.3,3007.3,6.4],[3334,3055.5,6.4]]){_(h,Q,ce,oe+.9,fe,_e+.3,1.8,_e+.3),_(h,m,ce,oe+15.3,fe,_e,27,_e),_(h,I,ce,oe+28.9,fe,_e+.5,.9,_e+.5),_(u,K,ce,oe+29.3+7.5,fe,_e+.6,15,_e+.6),_(h,Wi,ce,oe+45.2,fe,.15,2.4,.15);for(let f=0;f<8;f++){const B=f/8*Math.PI*2,j=ce+Math.cos(B)*(_e+.08),L=fe+Math.sin(B)*(_e+.08);for(let N=0;N<5;N++)_(l,Y,j,oe+(N?9.6+(N-1)*3.55+1.25:4.6),L,1.2,N?2.5:4,.3,-(B+Math.PI/2))}}for(const[ce,fe,_e,f]of[[3367.8,3026.4,60,17.6],[3320.9,2993.4,38,15.5]]){p(ce,fe,_e,f,oe,1.6,le(.806,-.59),Q),p(ce,fe,_e-.4,f-.4,oe+1.6,17.4,le(.806,-.59),m),p(ce,fe,_e+.6,f+.6,oe+18.3,.8,le(.806,-.59),I),v(ce,fe,_e,f+.5,oe+19,5.5,le(.806,-.59),K);for(const B of[-1,1])for(let j=-_e/2+2.5;j<=_e/2-2.5;j+=3.3){const L=ce+.806*j+.59*B*(f/2+.12),N=fe+-.59*j+.806*B*(f/2+.12);for(let O=0;O<4;O++)p(L,N,1.25,.35,oe+(O?6.6+(O-1)*3.5:2.2),O?2.4:3.6,le(.806,-.59),Y)}}}const w=i.wm15;if(w)for(const m of w.mosques||[]){const I=m.qx,Q=m.qz,K=-Q,Y=I,te=Math.atan2(-Q,I),X=(_e,f)=>[m.x+I*_e+K*f,m.z+Q*_e+Y*f],V=m.D,ue=m.W,ae=m.courtW||ue,le=m.court||0,ge=m.wings;let Ee=1e9;for(const _e of[-.5,0,.5])for(const f of[-.5,0,.5]){const[B,j]=X(_e*V,f*ue);Ee=Math.min(Ee,e(B,j))}for(const _e of[-.5,.5]){const[f,B]=X(-V/2-le,_e*ae);Ee=Math.min(Ee,e(f,B))}const $=m.plat||0,oe=Ee+$,ee=(_e,f,B,j,L,N,O=Ot)=>{const[D,E]=X(_e,f);p(D,E,B,j,L,N,te,O)},Ae=(_e,f,B,j,L,N=0)=>{const[O,D]=X(_e,f);N&&_(h,Ot,O,B+N/2,D,j*1.06,N,j*1.06),d(O,B+N,D,j,L)},W="#3a3632";$>.3&&ee(-le/2,0,V+le+2,Math.max(ue,ae)+2+(ge?2*ge.w:0),Ee-1.2,$+1.2,"#d6ccbb"),ee(0,0,V,ue,oe-.8,m.wallH+.8);for(const _e of[-1,1])for(let f=-V/2+3.5;f<=V/2-3.5;f+=4.2)for(const B of[2.6,m.wallH*.62])ee(f,_e*(ue/2+.12),1.3,.35,oe+B,2.4,W);for(let _e=-ue/2+3.5;_e<=ue/2-3.5;_e+=4.2)for(const f of[2.6,m.wallH*.62])ee(V/2+.12,_e,.35,1.3,oe+f,2.4,W);if(m.side)for(const _e of[-1,1])for(let f=0;f<m.side;f++){const B=-V/2+(f+.5)*V/m.side;Ae(B,_e*(ue/2-ue*.14),oe+m.wallH,Math.min(V/m.side*.42,4.2),Math.min(V/m.side*.36,3.4),.8)}const re=m.domeR,he=re*2.12,ce=Math.max(m.coreH||m.wallH,m.wallH);if(ce>m.wallH+.5&&ee(0,0,he,he,oe+m.wallH-.2,ce-m.wallH+.2),m.turrets||m.halves>=2)for(const _e of[-1,1])for(const f of[-1,1]){const[B,j]=X(_e*he/2,f*he/2);_(h,Ot,B,oe+ce+1.8,j,Math.max(1.3,re*.17),3.6,Math.max(1.3,re*.17)),d(B,oe+ce+3.6,j,Math.max(1.4,re*.18),Math.max(1.4,re*.18))}const fe=m.halves===1?[[1,0]]:m.halves===2?[[1,0],[-1,0]]:m.halves>=4?[[1,0],[-1,0],[0,1],[0,-1]]:[];for(const[_e,f]of fe){const[B,j]=X(_e*re*1.06,f*re*1.06),L=I*_e+K*f,N=Q*_e+Y*f;M(B,oe+m.wallH,j,re*.92,Math.min(ce-m.wallH+1.5,re*.92),Math.atan2(L,N)+Math.PI/2)}_(h,Ot,m.x,oe+ce+m.drumH/2,m.z,re*1.05,m.drumH,re*1.05);for(let _e=0;_e<16;_e++){const f=_e/16*Math.PI*2;_(l,W,m.x+Math.cos(f)*re*1.06,oe+ce+m.drumH*.5,m.z+Math.sin(f)*re*1.06,1.1,Math.max(.9,m.drumH*.6),.3,-(f+Math.PI/2))}if(d(m.x,oe+ce+m.drumH,m.z,re,m.domeH),_(h,Wi,m.x,oe+ce+m.drumH+m.domeH+1,m.z,.14,2,.14),ge)for(const _e of[-1,1]){const f=_e*(ue/2+ge.w/2),B=-V/2+ge.d/2;if(ee(B,f,ge.d,ge.w,oe-.6,ge.h+.6),ge.flat)ee(B,f,ge.d+.4,ge.w+.4,oe+ge.h,.5,"#d9d0c0");else for(const j of[-1,1])for(const L of[-1,1])Ae(B+j*ge.d/4,f+L*ge.w/4,oe+ge.h,Math.min(ge.w*.21,3.8),2.8,.6)}if(m.rear&&ee(V/2+m.rear.d/2,0,m.rear.d,ue*.8,oe-.6,m.rear.h+.6),le>0){const _e=-V/2,f=-V/2-le;if(m.porch){ee((_e+f)/2,0,le,ue,oe-.6,m.wallH*.55);const B=m.court_domes||5;for(let j=0;j<B;j++)Ae((_e+f)/2,-ue/2+(j+.5)*ue/B,oe+m.wallH*.55,Math.min(ue/B*.42,3.2),2.2,.4)}else{const B=m.medrese?8.5:7,j=m.medrese?6.2:8.2;ee(f+B/2,0,B,ae,oe-.6,j+.6);for(const C of[-1,1])ee((_e+f)/2,C*(ae/2-B/2),le,B,oe-.6,j+.6);m.medrese||ee(_e-B/2,0,B,ae,oe-.6,j+1.6),ee((_e+f)/2,0,le-2*B,ae-2*B,oe+.05,.16,"#e8e2d6");const L=B/2,N=f+L,O=_e-L,D=ae/2-L,E=2*(O-N+2*D),b=m.court_tiled?0:m.court_domes||16;if(m.court_tiled){const C="#b5654a",T=(R,F,k,G,P)=>{const[J,ie]=X(R,F);v(J,ie,k,G,oe+j+.6,2,P,C)};T(f+B/2,0,ae,B+.8,te+Math.PI/2);for(const R of[-1,1])T((_e+f)/2,R*(ae/2-B/2),le,B+.8,te);for(const R of[-2,-1,1,2])Ae(_e-B/2,R*ae/5,oe+j+1.6,Math.min(ae/5*.42,2.8),2.1);ee(_e-B/2,0,B*.8,ae/5*.8,oe+j+1.6,.9,"#9aa4ae")}for(let C=0;C<b;C++){let T=(C+.5)/b*E,R,F;T<O-N?(R=N+T,F=-D):(T-=O-N)<2*D?(R=O,F=-D+T):(T-=2*D)<O-N?(R=O-T,F=D):(T-=O-N,R=N,F=D-T),!(m.medrese&&R===O)&&Ae(R,F,oe+(R===O?j+1:j)-.2,m.medrese?2.3:2.4,m.medrese?1.8:2)}{const[C,T]=X((_e+f)/2,0);_(h,On,C,oe+.9,T,3,1.8,3),d(C,oe+3.4,T,3,1.9);for(let R=0;R<8;R++){const F=R/8*Math.PI*2;_(h,On,C+Math.cos(F)*2.6,oe+2,T+Math.sin(F)*2.6,.22,2.4,.22)}}}}for(const[_e,f,B,j]of m.minarets)y(_e,f,Math.min(oe,e(_e,f)+$),B,j,B>50?1.5:1.3,Ot)}if(w&&w.beyazit_tower){const m=w.beyazit_tower,I=e(m.x,m.z),Q=Math.max(9,m.base||11),K=new Ft(.72,1,1,4).rotateY(Math.PI/4),Y=new Ft(1,1,1,8).rotateY(Math.PI/8),te=new Ft(1,1,1,20),X=new Cn(1,16,8),V="#ece7dd",ue="#e0d9cc",ae="#3e3a38";_(K,ue,m.x,I+3.2,m.z,Q/Math.SQRT2,7.4,Q/Math.SQRT2),_(X,V,m.x,I+7.6,m.z,4,2.2,4),_(te,V,m.x,I+9+17.5,m.z,3.15,35,3.15),_(te,ue,m.x,I+10.4,m.z,3.45,.7,3.45),_(te,ue,m.x,I+43,m.z,3.45,.7,3.45),_(new Ft(1,.62,1,20),V,m.x,I+46,m.z,5,4,5),_(te,ue,m.x,I+48.4,m.z,5.5,.8,5.5),_(new Ft(1,1,1,20,1,!0),ae,m.x,I+49.4,m.z,5.4,1.1,5.4);const le=[[4.3,48.8,7.4],[3.4,56.2,6.2],[2.7,62.4,5.4],[2.05,67.8,4.4]];for(const[ge,Ee,$]of le){_(Y,V,m.x,I+Ee+$/2,m.z,ge,$,ge),_(Y,ue,m.x,I+Ee+$-.25,m.z,ge*1.1,.5,ge*1.1);for(let oe=0;oe<8;oe++){const ee=oe/8*Math.PI*2+Math.PI/8;_(l,ae,m.x+Math.cos(ee)*ge*.93,I+Ee+$*.5,m.z+Math.sin(ee)*ge*.93,ge*.55,$*.42,.25,-(ee+Math.PI/2))}}_(X,ue,m.x,I+72.2,m.z,1.7,1.4,1.7),_(h,ae,m.x,I+78.5,m.z,.12,12.5,.12),K.dispose(),Y.dispose(),te.dispose(),X.dispose()}if(w&&w.kabatas){for(const ae of w.kabatas.piers)H(ae,-1.6,1.3,"#cfc9be");const m=w.kabatas.main,I=m.ux,Q=m.uz,K=e(m.x+I*m.L/2,m.z+Q*m.L/2),Y=e(m.x-I*m.L/2,m.z-Q*m.L/2),te=K>Y?1:-1,X=m.x+I*te*m.L*.2,V=m.z+Q*te*m.L*.2,ue=Math.atan2(-Q,I);p(X,V,m.L*.5,m.W*.72,1.3,5.6,ue,"#e4e0d8"),p(X,V,m.L*.54,m.W*.8,6.9,.7,ue,"#8d9096"),p(X,V,m.L*.52,m.W*.74,1.6,3.2,ue,"#4a5560"),p(X-I*te*m.L*.31,V-Q*te*m.L*.31,m.L*.12,m.W*.6,1.3,4.2,ue,"#a9b0b6")}for(const m of w?.karakoy16||[]){const I=e(m.x+m.ux*m.L/2,m.z+m.uz*m.L/2),Q=e(m.x-m.ux*m.L/2,m.z-m.uz*m.L/2),K=I>Q?1:-1,Y=m.L>40,te=m.x+m.ux*K*(m.L/2+6),X=m.z+m.uz*K*(m.L/2+6),V=Math.max(.35,Math.max(0,e(te,X))+.2);H(m.ring,-1.6,V,"#cfc9be");const ue=m.x+m.ux*K*m.L*(Y?.12:.05),ae=m.z+m.uz*K*m.L*(Y?.12:.05),le=Math.atan2(-m.uz,m.ux),ge=Y?.66:.6,Ee=Y?8.4:4.2;p(ue,ae,m.L*ge,m.W*.7,V,Ee,le,"#e6e1d6"),p(ue,ae,m.L*(ge+.02),m.W*.72,V+.7,Ee*.34,le,"#4a5560"),Y&&p(ue,ae,m.L*(ge+.02),m.W*.72,V+4.7,1.6,le,"#4a5560"),p(ue,ae,m.L*(ge+.05),m.W*.78,V+Ee,.6,le,"#8d9096")}if(w?.hamam17){const m=w.hamam17,I=e(m.x,m.z),Q=Math.cos(m.rot),K=-Math.sin(m.rot),Y=m.north,te=m.w,X=m.d,V=-K,ue=Q,ae=V*.7+ue*.7>0?1:-1,le=(ce,fe=0)=>[m.x+Q*Y*(te/2-ce)+V*fe,m.z+K*Y*(te/2-ce)+ue*fe],ge="#e7dcc6",Ee="#8f9aa6",$=new Ft(1,1,1,8),oe=(ce,fe,_e,f=X*.98,B=0)=>{const[j,L]=le((ce+fe)/2,B);p(j,L,fe-ce,f,I-.5,_e+.5,m.rot,ge),p(j,L,fe-ce+.3,f+.3,I+_e,.5,m.rot,"#d3c6ad")},ee=(ce,fe,_e,f,B)=>{const[j,L]=le((ce+fe)/2);oe(ce,fe,_e),_($,ge,j,I+_e+1.2,L,f+.8,2.4,f+.8),d(j,I+_e+2.4,L,f,Math.max(2,B-_e-2.4),Ee),_(u,Wi,j,I+B+.8,L,.25,1.6,.25)},Ae=(ce,fe)=>{oe(ce,fe,7.5,X*.8);for(const _e of[-1,0,1]){const[f,B]=le((ce+fe)/2,_e*X*.26);d(f,I+8,B,Math.min(2.6,(fe-ce)*.42),1.8,Ee)}},W=(ce,fe)=>{oe(ce,fe,8.5);const[_e,f]=le((ce+fe)/2);_($,ge,_e,I+9.2,f,4.9,1.4,4.9),d(_e,I+9.9,f,4.4,3.2,Ee);for(const B of[-1,1])for(const j of[-1,1]){const[L,N]=le((ce+fe)/2+B*(fe-ce)*.33,j*X*.32);d(L,I+9,N,1.7,1.3,Ee)}},he=te/2+2.25;ee(5,24,13,8,23),Ae(24,29.5),W(29.5,he),W(he,te-23),Ae(te-23,te-17.5),ee(te-17.5,te,11.5,7.2,20.5);{const ce=X*.94/5,fe=.4,_e=4.4;for(let f=0;f<=5;f++){const B=-X*.47+f*ce,[j,L]=le(fe+.4,B);_(h,On,j,I+2.7,L,.35,5.4,.35)}{const[f,B]=le(fe+_e/2);p(f,B,_e,X*.96,I+5.4,1.1,m.rot,ge)}for(let f=0;f<5;f++){const B=-X*.47+(f+.5)*ce,[j,L]=le(fe+_e/2,B);f===2?d(j,I+6.5,L,Math.min(2.1,ce*.45),1.6,Ee):v(j,L,_e,ce*.92,I+6.5,.8,m.rot,Ee)}}{const[ce,fe]=le(he,ae*(X/2-1.9));p(ce,fe,20,3.6,I-.5,10.1,m.rot,"#d9cdb5")}}if(i.wm15?.yk16){const m=i.wm15.yk16,I="#cdb994",Q="#bba783",K="#e9e4da",Y=new Ft(1,1.04,1,8),te=new Ft(1,1.06,1,20),X=m.curtain,V=X.length/2,ue=13,ae=4.95,le=(ee,Ae,W,re,he,ce,fe)=>{for(let _e=-ce/2+1.1;_e<=ce/2-1;_e+=2.6)p(ee+re*_e,Ae+he*_e,1.25,.7,W,1.25,fe,Q)},ge=m.centre[0],Ee=m.centre[1];for(let ee=0;ee<V;ee++){const Ae=X[ee*2],W=X[ee*2+1],re=X[(ee+1)%V*2],he=X[(ee+1)%V*2+1],ce=Math.hypot(re-Ae,he-W);if(ce<2)continue;const fe=(re-Ae)/ce,_e=(he-W)/ce,f=-Math.atan2(_e,fe);let B=-_e,j=fe;const L=(Ae+re)/2,N=(W+he)/2;(L+B-ge)**2+(N+j-Ee)**2<(L-ge)**2+(N-Ee)**2&&(B=-B,j=-j);const O=Math.max(1,Math.ceil(ce/10));for(let D=0;D<O;D++){const E=(D+.5)/O*ce,b=Ae+fe*E-B*ae/2,C=W+_e*E-j*ae/2,T=ce/O+.4;let R=1e9,F=-1e9;for(const k of[-.5,0,.5]){const G=e(b+fe*T*k,C+_e*T*k);R=Math.min(R,G),F=Math.max(F,G)}p(b,C,T,ae,R-2.5,F+ue-R+2.5,f,I),p(b+B*(ae/2-.35),C+j*(ae/2-.35),T,.7,F+ue,.9,f,I),le(b+B*(ae/2-.35),C+j*(ae/2-.35),F+ue+.9,fe,_e,T,f)}}const $=(ee,Ae,W,re,he)=>{for(let ce=0;ce<he;ce++){const fe=ce/he*Math.PI*2;p(ee+Math.cos(fe)*(W-.5),Ae+Math.sin(fe)*(W-.5),1.3,.8,re,1.3,-fe+Math.PI/2,Q)}},oe=(ee,Ae,W)=>{let re=1e9;for(let he=0;he<8;he++)re=Math.min(re,e(ee+Math.cos(he*.785)*W,Ae+Math.sin(he*.785)*W));return re};for(const ee of m.otowers||[]){const Ae=ee.x,W=ee.z,re=ee.r,he=e(Ae,W),ce=oe(Ae,W,re)-1.5,fe=he+ee.h,_e=ee.shape==="poly"?Y:te;if(_(_e,I,Ae,(ce+fe)/2,W,re,fe-ce,re),ee.shape==="poly"){for(const f of[ee.h*.2,ee.h*.4,ee.h*.6,ee.h*.8])_(Y,Q,Ae,he+f,W,re+.1,.35,re+.1);$(Ae,W,re,fe,10);continue}$(Ae,W,re+.3,fe+1.9,Math.round(re*2.2));for(const f of[8,15,22])for(let B=0;B<4;B++){const j=B*Math.PI/2+.4;p(Ae+Math.cos(j)*(re+.02),W+Math.sin(j)*(re+.02),.25,.9,he+f,1.6,-j,"#3b322b")}}for(const[ee,Ae,W]of m.ptowers){const re=e(ee,Ae),he=oe(ee,Ae,W)-1.5,ce=re+21;_(Y,Q,ee,(he+ce)/2,Ae,W,ce-he,W);for(const fe of[6.5,12.5,18.5])_(Y,"#b0705a",ee,re+fe,Ae,W+.08,.45,W+.08);$(ee,Ae,W,ce,10)}for(const ee of m.pylons){const Ae=e(ee.x,ee.z);let W=1e9;for(const re of[-.5,.5])for(const he of[-.5,.5])W=Math.min(W,e(ee.x+Math.cos(ee.rot)*ee.w*re+Math.sin(ee.rot)*ee.d*he,ee.z-Math.sin(ee.rot)*ee.w*re+Math.cos(ee.rot)*ee.d*he));p(ee.x,ee.z,ee.w,ee.d,W-1.5,Ae+19.4-W+1.5,ee.rot,K),p(ee.x,ee.z,ee.w+.5,ee.d+.5,Ae+18.6,.8,ee.rot,"#d8d2c6");for(let re=0;re<4;re++){const he=Math.cos(ee.rot),ce=-Math.sin(ee.rot),fe=Math.sin(ee.rot),_e=Math.cos(ee.rot);le(ee.x+(re<2?fe:he)*(re%2?1:-1)*((re<2?ee.d:ee.w)/2-.4),ee.z+(re<2?_e:ce)*(re%2?1:-1)*((re<2?ee.d:ee.w)/2-.4),Ae+19.4,re<2?he:fe,re<2?ce:_e,re<2?ee.w:ee.d,re<2?ee.rot:ee.rot+Math.PI/2)}}if(m.golden){const ee=m.golden,Ae=e(ee.x,ee.z),W=Math.cos(ee.rot),re=-Math.sin(ee.rot),he=Math.sin(ee.rot),ce=Math.cos(ee.rot);p(ee.x,ee.z,29.34,8.5,Ae-1.5,18.5,ee.rot,K);for(const[_e,f,B]of[[0,8.35,15.5],[-10.2,5.75,10.88],[10.2,5.75,10.88]])for(const j of[-1,1])p(ee.x+W*_e+he*j*4.3,ee.z+re*_e+ce*j*4.3,f,.2,Ae,B-f*.3,ee.rot,"#a9a196"),p(ee.x+W*_e+he*j*4.3,ee.z+re*_e+ce*j*4.3,f*.62,.2,Ae+B-f*.3,f*.3,ee.rot,"#a9a196")}}const S=Y_(n);if(S){S.computeVertexNormals();const m=new nt(S,new Je({vertexColors:!0,side:Mt}));m.castShadow=m.receiveShadow=!0,m.name="wm11",t.add(m)}return n.forEach(m=>m.dispose()),t}function Y_(i){if(!i.length)return null;let e=0;for(const r of i)e+=r.attributes.position.count;const t=new Float32Array(e*3),n=new Float32Array(e*3);let s=0;for(const r of i){const o=r.attributes.position.array,c=r.attributes.color.array;t.set(o,s),n.set(c,s),s+=o.length}const a=new xt;return a.setAttribute("position",new Lt(t,3)),a.setAttribute("color",new Lt(n,3)),a}const X_=["#a39383","#8f8478","#e2d5bc","#b8a993"].map(i=>new Re(i)),zs=new Re("#f3efe6"),Lr=new Re("#3a3936"),Ea=new Re("#a35a42"),Pr=new Re("#934f3a"),K_=new Re("#c9c2b4"),J_=new Re("#2f2e2c");function Z_(i,e){const t=e.units.map(n=>({cx:n.c[0],cz:n.c[1],tx:Math.cos(n.rot),tz:-Math.sin(n.rot),hw:n.w/2+1,hd:n.d/2+1}));return i.filter(n=>{const s=n.p?.[0]?.[0];if(!s)return!0;let a=0,r=0;for(let o=0;o<s.length;o+=2)a+=s[o],r+=s[o+1];return a/=s.length/2,r/=s.length/2,!t.some(o=>{const c=a-o.cx,l=r-o.cz,h=c*o.tx+l*o.tz,u=-c*o.tz+l*o.tx;return Math.abs(h)<o.hw&&Math.abs(u)<o.hd})})}function $_(i,e){const t=[],n=[];let s=0,a=0,r=1,o=0,c=0;const l=(p,d,M)=>[s+p*r-M*o,c+d,a+p*o+M*r],h=(p,d,M,y)=>{const v=l(p[0],p[1],p[2]),q=l(d[0],d[1],d[2]),H=l(M[0],M[1],M[2]);t.push(...v,...q,...H);for(let U=0;U<3;U++)n.push(y.r,y.g,y.b)},u=(p,d,M,y,v)=>{h(p,d,M,v),h(p,M,y,v)},A=(p,d,M,y,v,q,H)=>{const U=p-y/2,Z=p+y/2,w=d-v/2,S=d+v/2,m=M+q;u([U,M,S],[Z,M,S],[Z,m,S],[U,m,S],H),u([Z,M,w],[U,M,w],[U,m,w],[Z,m,w],H),u([U,M,w],[U,M,S],[U,m,S],[U,m,w],H),u([Z,M,S],[Z,M,w],[Z,m,w],[Z,m,S],H),u([U,m,S],[Z,m,S],[Z,m,w],[U,m,w],H)},g=(p,d,M,y,v,q)=>{for(let U=0;U<6;U++){const Z=Math.PI*U/6,w=Math.PI*(U+1)/6,S=[p,d,M],m=[p+Math.cos(Z)*v,d+Math.sin(Z)*v,M],I=[p+Math.cos(w)*v,d+Math.sin(w)*v,M];y>0?h(S,m,I,q):h(S,I,m,q)}};for(const p of i.units){s=p.c[0],a=p.c[1],r=Math.cos(p.rot),o=-Math.sin(p.rot);const d=p.w/2,M=p.d/2;let y=1e9;for(const[$,oe]of[[-d,-M],[d,-M],[d,M],[-d,M]]){const ee=l($,0,oe);y=Math.min(y,e(ee[0],ee[2]))}c=y-.3;const v=Math.max(2,Math.min(4,p.lv||3)),q=4.2,H=3.6,U=.9+q+(v-1)*H,Z=X_[p.k],w=p.f;A(0,0,0,p.w,p.d,.9,K_),A(0,0,.9,p.w,p.d,U-.9,Z),A(0,0,U-.5,p.w+.1,p.d+.7,.5,zs);for(let $=1;$<v;$++)A(0,w*(M+.04),.9+q+($-1)*H-.1,p.w,.16,.22,zs);const S=Math.max(1,Math.round(p.w/2.6)),m=p.w/S;for(const $ of[w,-w]){const oe=$*(M+.06),ee=$===w;for(let Ae=0;Ae<S;Ae++){const W=-d+m*(Ae+.5);for(let re=0;re<v;re++){const he=re===0?1.5:.9+q+(re-1)*H+.7,ce=re===0?2.5:2,fe=Math.min(1.15,m*.48);!ee&&re===0&&Ae%2||(A(W,$*(M+.03),he-.15,fe+.36,.06,ce+.3,zs),A(W,oe,he,fe,.04,ce,Lr),re===v-1&&ee&&(g(W,he+ce+.15,oe+$*.02,$,(fe+.36)/2,zs),g(W,he+ce,oe+$*.05,$,fe/2,Lr)),re===1&&ee&&(S===1||Ae===Math.floor(S/2))&&(A(W,$*(M+.4),he-.25,fe+1,.8,.14,zs),A(W,$*(M+.78),he-.11,fe+1,.05,.9,J_)))}}}const I=.45,Q=-d-(p.hl?I:0),K=d+(p.hr?I:0),Y=-M-I,te=M+I,X=(M+I)*Math.tan(32*Math.PI/180),V=U+X,ue=p.hl?Q+(M+I):Q,ae=p.hr?K-(M+I):K,le=Math.min(ue,(Q+K)/2),ge=Math.max(ae,(Q+K)/2);u([Q,U,te],[K,U,te],[ge,V,0],[le,V,0],w>0?Ea:Pr),u([K,U,Y],[Q,U,Y],[le,V,0],[ge,V,0],w>0?Pr:Ea),p.hl?h([Q,U,Y],[Q,U,te],[le,V,0],Pr):h([Q,U,Y],[Q,U,te],[Q,V,0],Z),p.hr?h([K,U,te],[K,U,Y],[ge,V,0],Pr):h([K,U,te],[K,U,Y],[K,V,0],Z);const Ee=Math.max(1,Math.round(p.w/6.5));for(let $=0;$<Ee;$++){const oe=-d+p.w*($+.5)/Ee,ee=w*(M*.45),Ae=U+(M-M*.45-.5)*Math.tan(32*Math.PI/180)-.6;A(oe,ee,Ae,1.4,1.3,1.7,Z),A(oe,ee+w*.66,Ae+.35,.8,.04,1,Lr);const W=Ae+1.7;u([oe-.8,W,ee-.75],[oe+.8,W,ee-.75],[oe,W+.7,ee-.75],[oe,W+.7,ee-.75],Ea),h([oe-.8,W,ee+w*.75],[oe+.8,W,ee+w*.75],[oe,W+.7,ee+w*.75],zs),u([oe-.8,W,ee-.75],[oe-.8,W,ee+.75],[oe,W+.7,ee+.75],[oe,W+.7,ee-.75],Ea),u([oe+.8,W,ee+.75],[oe+.8,W,ee-.75],[oe,W+.7,ee-.75],[oe,W+.7,ee+.75],Ea)}{const $=-w*M*.5,oe=U+(M*.5+I)*Math.tan(32*Math.PI/180)+.05;A(0,$,oe-.12,Math.min(2.2,p.w*.3),1.2,.18,Lr)}}const x=new xt;x.setAttribute("position",new et(t,3)),x.setAttribute("color",new et(n,3)),x.computeVertexNormals();const _=new nt(x,new Je({vertexColors:!0,side:Mt}));return _.name="akaretler17b",_.castShadow=_.receiveShadow=!0,_}function eE(i,e,t=.6){return i.ways.flatMap(n=>tE(n,e,t,i.top||0,i.ramp||250))}function tE(i,e,t,n,s){const a=i.p,r=a.length/2;let o=0;const c=[0];for(let g=1;g<r;g++)o+=Math.hypot(a[2*g]-a[2*g-2],a[2*g+1]-a[2*g-1]),c.push(o);const l=e(a[0],a[1]),h=e(a[2*r-2],a[2*r-1]),u=i.w/2+t,A=[];for(let g=0;g+1<r;g++){const x=a[2*g],_=a[2*g+1],p=a[2*g+2],d=a[2*g+3],M=c[g+1]-c[g];if(M<.01)continue;const y=(p-x)/M,v=(d-_)/M,q=-v,H=y,U=Math.max(1,Math.ceil(M/8));for(let Z=0;Z<U;Z++){const w=M*Z/U,S=M*(Z+1)/U+.4,m=(w+S)/2,I=x+y*m,Q=_+v*m,K=e(I,Q),Y=c[g]+m,te=Math.max(0,Math.min(1,Math.min(Y,o-Y)/s)),X=Math.max(K,l+(h-l)*Y/o,n*te*te*(3-2*te));if(X-K<.3)continue;const V=[x+y*w+q*u,_+v*w+H*u,x+y*S+q*u,_+v*S+H*u,x+y*S-q*u,_+v*S-H*u,x+y*w-q*u,_+v*w-H*u];A.push({ring:V,y:X,g:K,x:I,z:Q,rot:Math.atan2(-v,y),len:S-w,w:i.w})}}return A}const Ln=Xf(),ot=Number(Ln.get("step")||99),nE=performance.now(),Pf={};Ke.__prof=Pf;const va=i=>{Pf[i]=Math.round(performance.now()-nE)},Fn=Ln.get("look")!=="0",el=Ln.get("roofs")!=="1",kt=Fn&&el&&Ln.get("walls")!=="0",en=kt&&Ln.get("colour")!=="0",Pe=window.innerWidth<600,iE=Fn&&(Ln.get("q")?Ln.get("q")==="high":!Pe),on=new eb({antialias:!0});on.setPixelRatio(Math.min(window.devicePixelRatio,2));on.setSize(window.innerWidth,window.innerHeight);on.shadowMap.enabled=ot>=2;on.shadowMap.type=Fn&&!Pe?ol:vu;on.outputColorSpace=Nt;Fn&&(on.toneMapping=ll,on.toneMappingExposure=1);document.getElementById("app").appendChild(on.domElement);const Ge=new tb,sE=new Re("#f1dcc4");function gu(i,e){const t=document.createElement("canvas");t.width=2,t.height=256;const n=t.getContext("2d"),s=n.createLinearGradient(0,0,0,256);s.addColorStop(0,i),s.addColorStop(.5,"#e6b4a3"),s.addColorStop(1,e),n.fillStyle=s,n.fillRect(0,0,2,256);const a=new fb(t);return a.colorSpace=Nt,a}const Uf=new Re("#f3ead9");Ge.background=Uf.clone();Ge.fog=new lo(Uf.clone(),11e3,28e3);const Ff=kt?Pe?32:22:Pe?50:35,hs=Math.tan(bn.degToRad(Ff/2))/Math.tan(bn.degToRad(17.5)),ri=new xn(Ff,window.innerWidth/window.innerHeight,20,4e4),En=new vx(ri,on.domElement);En.enableDamping=!0;En.dampingFactor=.08;En.maxPolarAngle=1.2;En.minDistance=60;En.maxDistance=kt?22e3:14e3;En.screenSpacePanning=!1;En.zoomToCursor=!0;const Gn=Fn?new Kh("#b0a8b8","#7a6a5c",.95):new Kh("#fff6e8","#c9b79a",ot>=2?1.6:2.4);Ge.add(Gn);const an=new ff("#fff0d8",ot>=2?2.2:.9);an.castShadow=ot>=2;an.shadow.mapSize.set(Pe?1024:Fn?4096:2048,Pe?1024:Fn?4096:2048);const Ur=650;Object.assign(an.shadow.camera,{left:-Ur,right:Ur,top:Ur,bottom:-Ur,near:10,far:6e3});an.shadow.bias=-6e-4;Fn&&!Pe&&(an.shadow.radius=kt?4:2,an.shadow.blurSamples=kt?12:8);an.shadow.normalBias=.6;Ge.add(an,an.target);let Nf=new ne(.5,.6,.4).normalize();const Qf={value:0};function tl(i){i=bn.clamp(i,7.5,17.5);const e=bn.clamp((i-7.2)/11.6,0,1),t=bn.degToRad(Math.max(2,(kt?50:38)*Math.sin(Math.PI*e))),n=bn.degToRad(105+150*e);Nf=new ne(Math.sin(n)*Math.cos(t),Math.sin(t),-Math.cos(n)*Math.cos(t)).normalize();const s=1-Math.min(1,Math.sin(t)/Math.sin(bn.degToRad(30)));if(Fn){an.color.set("#ffcf90").lerp(new Re("#ff9a50"),s*.55);const o=kt?bn.smoothstep(i,18.2,19.6):0;an.intensity=(kt?bn.lerp(en?5.5:4.7,4.7,o):5.6)-s*1.6,Gn.intensity=(kt?1.45:.95)-s*.2,Gn.color.set("#b0a8b8"),Gn.groundColor.set("#7a6a5c"),kt&&(Gn.color.lerp(new Re("#d0a585"),s*.6),Gn.groundColor.lerp(new Re("#9a7458"),s*.6),Gn.intensity=bn.lerp(en?1.12:1.45,1.45,o)+s*.15);const c=kt?bn.smoothstep(i,18.2,19.6):0;Qf.value=c,sE.set("#ea9b7d");const l=Ge.background;kt&&c>0?(an.intensity*=1-.85*c,Gn.intensity*=1-.55*c,Gn.color.lerp(new Re("#34406a"),c),Gn.groundColor.lerp(new Re("#1c2236"),c),Ge.background=gu(new Re("#b5b1d0").lerp(new Re("#0e1430"),c).getStyle(),new Re("#ea9b7d").lerp(new Re("#2a3358"),c).getStyle())):Ge.background=gu("#b5b1d0","#ea9b7d"),l instanceof Gt&&l.dispose(),Ge.fog.color.set("#a49ca2"),kt&&Ge.fog.color.lerp(new Re("#e0a07f"),s*.6).lerp(new Re("#252c48"),c);const h=document.getElementById("hourtxt");h&&(h.textContent=`${String(Math.floor(i)).padStart(2,"0")}:${String(Math.round(i%1*60)).padStart(2,"0")}`);return}an.color.set("#fff3e0").lerp(new Re("#ff9a4d"),s*.85),an.intensity=2.8-s*1,Gn.intensity=1.15-s*.35,Gn.color.set("#fff6e8").lerp(new Re("#ffd2a8"),s*.7);const a=new Re("#f3ead9").lerp(new Re("#f1c9a3"),s*.6);Ge.background.copy(a),Ge.fog.color.copy(a);const r=document.getElementById("hourtxt");r&&(r.textContent=`${String(Math.floor(i)).padStart(2,"0")}:${String(Math.round(i%1*60)).padStart(2,"0")}`)}const kf=kt?14:16.25;tl(ot>=5?Fn?kf:15.5:14);const no=1.2;let tn=null,Of=null,nl=null,Tt=null;const Xs=[],qi=[467.7,1011.1,455.9,1012.6,349.7,1092.8,287.3,1163.4,273.4,1182.5,249.9,1290.8,255.3,1300.3,361.9,1370.5,392.5,1385.8,436,1398,441.8,1394.8,572.2,1142.1,585.8,1064.4,563.1,1039.6,543.3,1027.9],As=45,$i=(()=>{let i=1e9,e=1e9,t=-1e9,n=-1e9;for(let s=0;s<qi.length;s+=2)i=Math.min(i,qi[s]),t=Math.max(t,qi[s]),e=Math.min(e,qi[s+1]),n=Math.max(n,qi[s+1]);return[i,e,t,n]})();function il(i,e){if(i<$i[0]||i>$i[2]||e<$i[1]||e>$i[3])return!1;const t=qi;let n=!1;for(let s=0,a=t.length-2;s<t.length;a=s,s+=2)t[s+1]>e!=t[a+1]>e&&i<(t[a]-t[s])*(e-t[s+1])/(t[a+1]-t[s+1])+t[s]&&(n=!n);return n}function aE(i,e){const t=qi;let n=1e9;for(let s=0,a=t.length-2;s<t.length;a=s,s+=2){const r=t[a],o=t[a+1],c=t[s]-r,l=t[s+1]-o,h=Math.max(0,Math.min(1,((i-r)*c+(e-o)*l)/(c*c+l*l)));n=Math.min(n,Math.hypot(i-r-c*h,e-o-l*h))}return n}const Yi=[1924.6,-1890.6,1904.9,-1903.4,1855.5,-1885.5,1656.8,-1710.2,1651.5,-1698.3,1653.6,-1676.6,1674.3,-1637.9,1692.3,-1632.5,1825.9,-1673,1966.1,-1738.9,1970.9,-1769.5],Vn=4,es=(()=>{let i=1e9,e=1e9,t=-1e9,n=-1e9;for(let s=0;s<Yi.length;s+=2)i=Math.min(i,Yi[s]),t=Math.max(t,Yi[s]),e=Math.min(e,Yi[s+1]),n=Math.max(n,Yi[s+1]);return[i,e,t,n]})();function sl(i,e){if(i<es[0]||i>es[2]||e<es[1]||e>es[3])return!1;const t=Yi;let n=!1;for(let s=0,a=t.length-2;s<t.length;a=s,s+=2)t[s+1]>e!=t[a+1]>e&&i<(t[a]-t[s])*(e-t[s+1])/(t[a+1]-t[s+1])+t[s]&&(n=!n);return n}function rE(i,e){const t=Yi;let n=1e9;for(let s=0,a=t.length-2;s<t.length;a=s,s+=2){const r=t[a],o=t[a+1],c=t[s]-r,l=t[s+1]-o,h=Math.max(0,Math.min(1,((i-r)*c+(e-o)*l)/(c*c+l*l)));n=Math.min(n,Math.hypot(i-r-c*h,e-o-l*h))}return n}function Ne(i,e){let t=fs(i,e);if(tn&&i>$i[0]-40&&i<$i[2]+40&&e>$i[1]-40&&e<$i[3]+40){if(il(i,e))return As;if(t>As){const s=aE(i,e);if(s<40){const a=1-s/40,r=a*a*(3-2*a);t+=(As-t)*r}}}if(tn&&i>es[0]-30&&i<es[2]+30&&e>es[1]-30&&e<es[3]+30){if(sl(i,e))return Vn;const s=rE(i,e);if(s<25&&t<Vn){const a=1-s/25,r=a*a*(3-2*a);t+=(Vn-t)*r}else if(s<8&&t>Vn){const a=1-s/8,r=a*a*(3-2*a);t+=(Vn-t)*r*.35}}if(!Xs.length)return t;let n=t;for(const s of Xs){const a=Math.hypot(i-s.x,e-s.z);if(a>=s.r+s.b)continue;const r=a<=s.r?1:1-(a-s.r)/s.b,o=r*r*(3-2*r);n=n+(s.h-n)*o}return n}function Vt(i,e,t,n=25){if(!tn)return;let s=0,a=0;for(let r=0;r<16;r++)for(const o of[0,.5,1])s+=fs(i+Math.cos(r*.3927)*t*o,e+Math.sin(r*.3927)*t*o),a++;Xs.push({x:i,z:e,r:t,b:n,h:s/a})}function al(i,e,t){if(!i)return null;const n=(e-i.x0)/i.step,s=(t-i.z0)/i.step;if(n<0||s<0||n>=i.nx-1||s>=i.nz-1)return null;const a=Math.floor(n),r=Math.floor(s),o=n-a,c=s-r,l=i.nx,h=i.h;return(h[r*l+a]*(1-o)+h[r*l+a+1]*o)*(1-c)+(h[(r+1)*l+a]*(1-o)+h[(r+1)*l+a+1]*o)*c}function bu(i,e){const t=al(tn,i,e);if(t!=null)return no*t;const n=al(Of,i,e);return n==null?0:no*n}function fs(i,e){if(nl&&i>1764){const t=nl,n=Math.min(i-1764,t.x0+t.step*(t.nx-1)-i,e-t.z0,t.z0+t.step*(t.nz-1)-e);if(n>0){const s=al(t,i,e);if(s!=null){const a=Math.min(1,n/140),r=a*a*(3-2*a);return r>=1?no*s:bu(i,e)*(1-r)+no*s*r}}}return bu(i,e)}new Re;class li{pos=[];col=[];tex=!1;wa=[];wb=[];wl=0;rl=6;seed=0;base=0;wh=0;st=0;ridge=0;tri(e,t,n,s,a=!1,r,o=0,c=0){if(a){const l=t[0]-e[0];t[1]-e[1];const h=t[2]-e[2],u=n[0]-e[0];n[1]-e[1];const A=n[2]-e[2];if(h*u-l*A<0){const x=t;t=n,n=x,r&&(r=[r[0],r[2],r[1]])}}this.pos.push(...e,...t,...n);for(let l=0;l<3;l++)this.col.push(s.r,s.g,s.b);if(this.tex){const l=[e,t,n],h=o===0?this.rl:this.wl;for(let u=0;u<3;u++){const A=r?r[u]:[l[u][0],l[u][2]];this.wa.push(A[0],A[1],h,this.seed),o===0?this.wb.push(this.wh,r&&r[u].length>2?r[u][2]:-1,0,this.ridge):this.wb.push(this.wh,c,o,this.st)}}}geometry(){const e=new xt;return e.setAttribute("position",new et(this.pos,3)),e.setAttribute("color",new et(this.col,3)),this.tex&&(e.setAttribute("wa",new et(this.wa,4)),e.setAttribute("wb",new et(this.wb,4))),e.computeVertexNormals(),e}}function $n(i){let e=0;for(let t=0;t<i.length;t+=2){const n=(t+2)%i.length;e+=i[t]*i[n+1]-i[n]*i[t+1]}return e/2}function oE(i,e,t,n,s,a){let r=e;const o=$n(r);if(!a&&o>0||a&&o<0){const l=[];for(let h=r.length-2;h>=0;h-=2)l.push(r[h],r[h+1]);r=l}const c=i.st;a&&c>=16&&c<128&&(i.st=32);for(let l=0;l<r.length;l+=2){const h=(l+2)%r.length,u=[r[l],t,r[l+1]],A=[r[h],t,r[h+1]],g=[r[h],n,r[h+1]],x=[r[l],n,r[l+1]];if(i.tex){const _=Math.hypot(r[h]-r[l],r[h+1]-r[l+1]),p=t-i.base,d=n-i.base,M=_>=2.4&&i.wh>=4?1:2;i.tri(u,A,g,s,!1,[[0,p],[_,p],[_,d]],M,_),i.tri(u,g,x,s,!1,[[0,p],[_,d],[0,d]],M,_)}else i.tri(u,A,g,s),i.tri(u,g,x,s)}i.st=c}let Or=null,io=!1,ft=null;const cE=(i,e)=>Ne(i,e);function Ks(i,e,t,n,s=!1){const a=x=>{const _=[];for(let p=0;p<x.length;p+=2)_.push(new ke(x[p],x[p+1]));return _},r=a(e[0]),o=e.slice(1).map(a);let c;try{c=wn.triangulateShape(r,o)}catch{return}const l=r.concat(...o),h=cE,u=(x,_)=>io&&!!Or&&Or(x,_)>-1e8,A=x=>s?h(x.x,x.y)+t:t,g=(x,_,p,d)=>{if(io&&Or){const M=u(x.x,x.y),y=u(_.x,_.y),v=u(p.x,p.y);if(M&&y&&v&&d>0)return;if((M||y||v)&&d<9&&Math.max(x.distanceTo(_),_.distanceTo(p),p.distanceTo(x))>2.5){const q=x.clone().add(_).multiplyScalar(.5),H=_.clone().add(p).multiplyScalar(.5),U=p.clone().add(x).multiplyScalar(.5);g(x,q,U,d+1),g(q,_,H,d+1),g(U,H,p,d+1),g(q,H,U,d+1);return}if(u((x.x+_.x+p.x)/3,(x.y+_.y+p.y)/3))return}if(s&&d<8){const M=x.clone().add(_).multiplyScalar(.5),y=_.clone().add(p).multiplyScalar(.5),v=p.clone().add(x).multiplyScalar(.5),q=Math.max(Math.abs(h(M.x,M.y)-(h(x.x,x.y)+h(_.x,_.y))/2),Math.abs(h(y.x,y.y)-(h(_.x,_.y)+h(p.x,p.y))/2),Math.abs(h(v.x,v.y)-(h(p.x,p.y)+h(x.x,x.y))/2));if(q>1.2&&Math.max(x.distanceTo(_),_.distanceTo(p),p.distanceTo(x))>(q>5?6:35)){g(x,M,v,d+1),g(M,_,y,d+1),g(v,y,p,d+1),g(M,y,v,d+1);return}}i.tri([x.x,A(x),x.y],[_.x,A(_),_.y],[p.x,A(p),p.y],n,!0)};for(const x of c)g(l[x[0]],l[x[1]],l[x[2]],0)}function zt(i,e,t,n,s,a){for(const r of e)r.forEach((o,c)=>oE(i,o,t,n,s,c>0)),a&&Ks(i,r,n,a)}function lE(i,e){const t=e.pr,n=e.seg||16,s=e.a?e.a[0]:0,a=e.a?e.a[1]:Math.PI*2,r=e.k??2,o=t[0][1],c=Math.max(t[0][0],.3),l=(e.cols||[]).map(x=>new Re(x)),h=new Re(e.col);r===0?i.rl=e.tx??9:i.wl=e.tx??8,i.base=o,i.wh=t[t.length-1][1]-o,i.st=e.st||128,i.ridge=0;const u=r===2&&e.st?1:r,A=(a-s)*c,g=[0];for(let x=1;x<t.length;x++)g.push(g[x-1]+Math.hypot(t[x][0]-t[x-1][0],t[x][1]-t[x-1][1]));for(let x=0;x<n;x++){const _=s+(a-s)*x/n,p=s+(a-s)*(x+1)/n;for(let d=0;d<t.length-1;d++){const[M,y]=t[d],[v,q]=t[d+1],H=(l[d]||h).clone();e.rib&&x%2&&H.multiplyScalar(e.rib);const U=(X,V,ue)=>[e.x+Math.cos(ue)*X,V,e.z+Math.sin(ue)*X],Z=(X,V,ue,ae)=>r===0?[V*Math.max(X,M,.5),ue]:[V*c,ae-o],w=U(M,y,_),S=U(M,y,p),m=U(v,q,p),I=U(v,q,_),Q=Z(M,_,g[d],y),K=Z(M,p,g[d],y),Y=Z(v,p,g[d+1],q),te=Z(v,_,g[d+1],q);M>.001&&i.tri(w,S,m,H,!1,[Q,K,Y],u,A),v>.001&&i.tri(w,m,I,H,!1,[Q,Y,te],u,A)}}}function zf(i,e,t,n){const[s,a,r,o,c,l]=e,h=Math.cos(r),u=Math.sin(r),A=-u,g=h,x=(U,Z)=>[s+h*U*o/2+A*Z*c/2,t,a+u*U*o/2+g*Z*c/2],_=U=>[s+h*U*(o-c)/2,t+l,a+u*U*(o-c)/2],p=x(-1,-1),d=x(1,-1),M=x(1,1),y=x(-1,1),v=_(-1),q=_(1),H=n.clone().multiplyScalar(.92);i.tri(p,d,q,n,!0),i.tri(p,q,v,n,!0),i.tri(M,y,v,n,!0),i.tri(M,v,q,n,!0),i.tri(d,M,q,H,!0),i.tri(y,p,v,H,!0)}function hE(i,e,t,n,s){const[a,r,o,c,l,h]=e,u=Math.cos(o),A=Math.sin(o),g=-A,x=u,_=(H,U,Z=0)=>[a+u*H*c/2+g*U*l/2,t+Z,r+A*H*c/2+x*U*l/2],p=_(-1,-1),d=_(1,-1),M=_(1,1),y=_(-1,1),v=_(-1,0,h),q=_(1,0,h);i.tri(p,d,q,n,!0),i.tri(p,q,v,n,!0),i.tri(M,y,v,n,!0),i.tri(M,v,q,n,!0),i.tri(y,p,v,s),i.tri(d,M,q,s)}function uE(i,e,t,n,s){const[a,r,o,c,l,h]=e,u=Math.cos(o),A=Math.sin(o),g=-A,x=u,_=Math.min(.17*l,2.2),p=Math.min(.75*h+1.4,3.6),d=(v,q,H,U)=>[a+u*v*(c/2-H)+g*q*(l/2-H),t+U,r+A*v*(c/2-H)+x*q*(l/2-H)],M=[d(-1,-1,0,0),d(1,-1,0,0),d(1,1,0,0),d(-1,1,0,0)],y=[d(-1,-1,_,p),d(1,-1,_,p),d(1,1,_,p),d(-1,1,_,p)];for(let v=0;v<4;v++){const q=(v+1)%4;i.tri(M[v],M[q],y[q],n,!0),i.tri(M[v],y[q],y[v],n,!0)}zf(i,[a,r,o,c-2*_,l-2*_,Math.max(.6,.12*l)],t+p,s)}function fE(i,e,t,n){const s=n/(t/2),a=e/2,r=t/2;if(i===2)return[[0,s,s*r],[0,-s,s*r]];if(i===1)return[[0,s,s*r],[0,-s,s*r],[s,0,s*a],[-s,0,s*a]];const o=Math.min(.17*t,2.2),c=Math.min(.75*n+1.4,3.6),l=c/o,h=Math.max(.6,.12*t)/(r-o),u=[];for(const[A,g,x]of[[0,1,r],[0,-1,r],[1,0,a],[-1,0,a]])u.push([A*l,g*l,x*l]),u.push([A*h,g*h,c+(x-o)*h]);return u}const zn=(i,e,t)=>i[0]*e+i[1]*t+i[2];function dE(i,e){const t=[];for(let n=0;n<i.length;n++){const s=i[n],a=i[(n+1)%i.length],r=e(s),o=e(a);if(r<=0&&t.push(s),r<0&&o>0||r>0&&o<0){const c=r/(r-o);t.push([s[0]+(a[0]-s[0])*c,s[1]+(a[1]-s[1])*c])}}return t}const xu=i=>{let e=0;for(let t=0;t<i.length;t++){const n=i[t],s=i[(t+1)%i.length];e+=n[0]*s[1]-s[0]*n[1]}return e/2};function AE(i,e,t,n,s,a,r,o,c=-1){const[l,h,u,A,g,x]=t,_=Math.cos(u),p=Math.sin(u),d=-p,M=_,y=fE(n,A,g,x);{let U=1e9;for(const Z of y)U=Math.min(U,zn(Z,0,0));i.ridge=Math.max(0,U)}const v=(U,Z)=>[(U-l)*_+(Z-h)*p,(U-l)*d+(Z-h)*M],q=(U,Z,w)=>[l+_*U+d*Z,w,h+p*U+M*Z],H=(U,Z)=>{let w=1e9;for(const S of y)w=Math.min(w,zn(S,U,Z));return Math.max(0,w)};for(const U of e){const Z=U.map(w=>{const S=[];for(let m=0;m<w.length;m+=2)S.push(v(w[m],w[m+1]));return S});y.forEach((w,S)=>{const m=n===3&&S%2===1?r:a,I=i.rl;c>=0&&n===3&&S%2===0&&(i.rl=c);const Q=Math.hypot(w[0],w[1]),K=Q>1e-6?w[0]/Q:0,Y=Q>1e-6?w[1]/Q:1,te=Math.sqrt(1+Q*Q),X=Ee=>[-Ee.x*Y+Ee.y*K,(Ee.x*K+Ee.y*Y)*te,Math.max(0,zn(w,Ee.x,Ee.y))],V=Z.map(Ee=>{let $=Ee;return y.forEach((oe,ee)=>{ee!==S&&$.length&&($=dE($,Ae=>zn(w,Ae[0],Ae[1])-zn(oe,Ae[0],Ae[1])-1e-6))}),$});if(V[0].length<3||Math.abs(xu(V[0]))<.05)return;const ue=V[0].map(Ee=>new ke(Ee[0],Ee[1])),ae=V.slice(1).filter(Ee=>Ee.length>=3&&Math.abs(xu(Ee))>.05).map(Ee=>Ee.map($=>new ke($[0],$[1])));let le;try{le=wn.triangulateShape(ue,ae)}catch{return}const ge=ue.concat(...ae);for(const Ee of le){const $=ge[Ee[0]],oe=ge[Ee[1]],ee=ge[Ee[2]];i.tri(q($.x,$.y,s+Math.max(0,zn(w,$.x,$.y))),q(oe.x,oe.y,s+Math.max(0,zn(w,oe.x,oe.y))),q(ee.x,ee.y,s+Math.max(0,zn(w,ee.x,ee.y))),m,!0,i.tex?[X($),X(oe),X(ee)]:void 0)}i.rl=I});for(const w of Z)for(let S=0;S<w.length;S++){const m=w[S],I=w[(S+1)%w.length],Q=[0,1];for(let X=0;X<y.length;X++)for(let V=X+1;V<y.length;V++){const ue=zn(y[X],m[0],m[1])-zn(y[V],m[0],m[1]),ae=zn(y[X],I[0],I[1])-zn(y[V],I[0],I[1]);ue*ae<0&&Q.push(ue/(ue-ae))}Q.sort((X,V)=>X-V);const K=X=>[m[0]+(I[0]-m[0])*X,m[1]+(I[1]-m[1])*X];let Y=Q[0],te=H(m[0],m[1]);for(let X=1;X<Q.length;X++){const V=Q[X];if(V-Y<1e-4&&X<Q.length-1)continue;const ue=K(Y),ae=K(V),le=H(ae[0],ae[1]);if(Math.max(te,le)>.35){const ge=q(ue[0],ue[1],s),Ee=q(ae[0],ae[1],s),$=q(ae[0],ae[1],s+le),oe=q(ue[0],ue[1],s+te);if(i.tex){const ee=Math.hypot(I[0]-m[0],I[1]-m[1]),Ae=Y*ee,W=V*ee,re=s-i.base;le>.02&&i.tri(ge,Ee,$,o,!1,[[Ae,re],[W,re],[W,re+le]],2,ee),te>.02&&i.tri(ge,$,oe,o,!1,[[Ae,re],[W,re+le],[Ae,re+te]],2,ee)}else le>.02&&i.tri(ge,Ee,$,o),te>.02&&i.tri(ge,$,oe,o)}Y=V,te=le}}}return H}function pE(i,e,t,n,s,a,r){const o=new Set,c=(h,u)=>`${Math.round(h*10)},${Math.round(u*10)}`;for(const h of t)for(const u of h)for(let A=0;A<u.length;A+=2)o.add(c(u[A],u[A+1]));for(const h of e){const u=d=>{const M=[];for(let y=0;y<d.length;y+=2)M.push(new ke(d[y],d[y+1]));return M},A=u(h[0]),g=h.slice(1).map(u);let x;try{x=wn.triangulateShape(A,g)}catch{continue}const _=A.concat(...g),p=d=>n+(o.has(c(d.x,d.y))?s:0);i.ridge=s;for(const d of x){const M=_[d[0]],y=_[d[1]],v=_[d[2]],q=[M.x,p(M),M.y],H=[y.x,p(y),y.y],U=[v.x,p(v),v.y];let Z;if(i.tex){const w=H[0]-q[0],S=H[1]-q[1],m=H[2]-q[2],I=U[0]-q[0],Q=U[1]-q[1],K=U[2]-q[2];let Y=S*K-m*Q,te=m*I-w*K,X=w*Q-S*I;te<0&&(Y=-Y,te=-te,X=-X);const V=Math.hypot(Y,te,X)||1,ue=-Y,ae=-X,le=Math.hypot(ue,ae),ge=le>1e-6?ue/le:0,Ee=le>1e-6?ae/le:1,$=V/Math.max(te,.001);Z=[q,H,U].map(oe=>[-oe[0]*Ee+oe[2]*ge,(oe[0]*ge+oe[2]*Ee)*$,oe[1]-n])}i.tri(q,H,U,a,!0,Z)}}const l=i.rl;i.rl=2;for(const h of t)Ks(i,h,n+s,r);i.rl=l}let mE=-100;function $t(i,e,t){const n=new li,s=new Re(t);for(const r of i)Ks(n,r,e,s,!!tn);const a=new nt(n.geometry(),new Je({vertexColors:!0,depthWrite:!1}));return a.renderOrder=mE++,a.receiveShadow=ot>=2,a.name="flat",Ge.add(a),a}function uc(i){return i.onBeforeCompile=e=>{e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
varying float vBY;`).replace("#include <project_vertex>",`#include <project_vertex>
  
#ifdef USE_INSTANCING
  vBY = (modelMatrix * instanceMatrix * vec4(transformed, 1.0)).y;
#else
  vBY = (modelMatrix * vec4(transformed, 1.0)).y;
#endif`),e.fragmentShader=e.fragmentShader.replace("#include <common>",`#include <common>
varying float vBY;`).replace("#include <color_fragment>",`#include <color_fragment>
  { float k = mod(vBY + 1.2, 3.0); if (k < 0.75) diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.62, 0.36, 0.28), 0.75); }`)},i}function gE(i,e){const t=i.length/2;if(t<6)return i;const n=new Uint8Array(t);n[0]=1;let s=0,a=-1;for(let c=1;c<t;c++){const l=Math.hypot(i[2*c]-i[0],i[2*c+1]-i[1]);l>a&&(a=l,s=c)}n[s]=1;const r=(c,l)=>{const h=i[2*c],u=i[2*c+1],A=i[2*(l%t)],g=i[2*(l%t)+1],x=Math.hypot(A-h,g-u)||1e-6;let _=-1,p=e;for(let d=c+1;d<l;d++){const M=Math.abs((A-h)*(u-i[2*d+1])-(h-i[2*d])*(g-u))/x;M>p&&(p=M,_=d)}_>=0&&(n[_]=1,r(c,_),r(_,l))};r(0,s),r(s,t);const o=[];for(let c=0;c<t;c++)n[c]&&o.push(i[2*c],i[2*c+1]);return o.length>=6?o:i}const Gf=[];function Ct(i,e,t,n,s=""){const a=document.createElement("div");a.className="lbl "+s,a.textContent=i,document.getElementById("labels").appendChild(a),Gf.push({el:a,p:new ne(e,t,n),near:s.includes("near")})}const Gs=new ne;function bE(){for(const i of Gf){Gs.copy(i.p).project(ri);const e=Gs.z<1&&Math.abs(Gs.x)<1.1&&Math.abs(Gs.y)<1.1&&!(i.near&&ri.position.distanceTo(i.p)>1600);i.el.style.display=e?"block":"none",e&&(i.el.style.left=`${(Gs.x+1)/2*window.innerWidth}px`,i.el.style.top=`${(1-Gs.y)/2*window.innerHeight}px`)}}const xE=(i,e,t)=>{const[n,s]=i.origin,a=Math.cos(s*Math.PI/180)*111320;return[(e-n)*a,-(t-s)*110574]},Ue={};function Hf(i){const e=Ue[i];if(!e)return;En.maxPolarAngle=Math.max(1.2,e.pol);const t=new ne(e.t[0],Ne(e.t[0],e.t[1])+(e.y||0),e.t[1]),n=new ne(Math.sin(e.az)*Math.sin(e.pol),Math.cos(e.pol),Math.cos(e.az)*Math.sin(e.pol)).multiplyScalar(e.d);En.target.copy(t),ri.position.copy(t).add(n),En.update()}const Ye=Fn?{ground:"#8e8b92",pilot:"#908c93",water:"#6fa4b2",parks:"#8aa63e",plazas:"#9c9cac",path:"#a5a2aa",service:"#9d9aa2",minor:"#aaa7ae",major:"#77747c",rail:"#5a5052",tram:"#8c2f2c",walls:["#f2e3b8","#e8d394","#efe6cf","#d9c7a0","#e3d6bf","#ecc9a6","#d8d0bf","#f0dcae"],roofs:["#e0963e","#e8b44c","#c87a48","#a8603e","#d98a3a","#9a5a40","#e6a446","#80808c"],flats:["#c4beb8","#b4b0b0","#ccc4ba","#aca8aa"],trees:["#e6b235","#e08a26","#c95a24","#e8c33f","#7fa03c","#557a30","#3f6a2c"]}:null;Ye&&en&&Object.assign(Ye,{ground:"#7f746e",pilot:"#81766f",plazas:"#958a80",path:"#9b8f85",service:"#8f847c",minor:"#978c84",major:"#665e5c",parks:"#86a63a",walls:["#f0d9a0","#e6bf74","#f2e4c4","#dcbc8a","#ebc4a8","#e8b48e","#efd690","#f3dcb4","#e2c7a6","#e9a98c"],roofs:["#b85a3c","#a94a34","#c8683e","#9a4a36","#c47458","#cf8a6c","#b9705a","#8e4c3a","#80808c"],flats:["#e4e0d8","#d2cfca","#d8ccb6","#c8c3ba"],trees:["#f0b52a","#e8891f","#d4581f","#b8321e","#efc93a","#8aa83a","#5b8a32","#d97a26","#c9a227"]});function yn(i,e,t=1){const n=Math.sin(e*12.9898)*43758.5453,s=Math.sin(e*78.233)*12345.6789,a=Math.sin(e*3.7)*9876.54,r=o=>(o-Math.floor(o))*2-1;return i.clone().offsetHSL(r(n)*.012*t,r(s)*.06*t,r(a)*.035*t)}const _E=`
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
}`;async function EE(){try{const e=await(await fetch("./tex/tex.json")).json(),t=new Wn().setTranscoderPath("./basis/").detectSupport(on),n=await t.loadAsync(`./tex/walls_${Pe?512:1024}.ktx2`);n.wrapS=n.wrapT=Un,n.anisotropy=Pe?2:4,n.colorSpace=Nt,n.needsUpdate=!0;let s=0;for(const o of n.mipmaps)s+=o.data.byteLength;t.dispose();const a=[0,.55,0,.45,.4,.55,.3,.15,.35,.1,.45],r=new Je({vertexColors:!0,side:Mt});return r.onBeforeCompile=o=>{o.uniforms.tArr={value:n},o.uniforms.uMean={value:e.means.map(c=>new ne(c[0],c[1],c[2]))},o.uniforms.uHue={value:a},o.uniforms.uNight=Qf,o.uniforms.uCol={value:en?1:0},o.vertexShader=`attribute vec4 wa;
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
`+_E+`
`+o.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
diffuseColor.rgb = facade(diffuseColor.rgb);`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
totalEmissiveRadiance += gEmis;`)},{mat:r,mb:s/1048576}}catch(i){return console.warn("facade textures failed, falling back to plain walls",i),null}}async function vE(){const i=await(await fetch("./data/scene.json")).json();let e=null;try{e=await(await fetch("./data/kapalicarsi.json")).json()}catch{}const t=(f,B)=>{if(!e)return!1;const j=e.outline;let L=!1;for(let N=0,O=j.length-2;N<j.length;O=N,N+=2)j[N+1]>B!=j[O+1]>B&&f<(j[O]-j[N])*(B-j[N+1])/(j[O+1]-j[N+1])+j[N]&&(L=!L);return L};if(e){const f=i.buildings.length;i.buildings=i.buildings.filter(B=>{const j=B.p[0]?.[0];if(!j)return!0;let L=0,N=0;for(let O=0;O<j.length;O+=2)L+=j[O],N+=j[O+1];return!t(L/(j.length/2),N/(j.length/2))}),Ke.__kcFiltered=f-i.buildings.length}try{const B=(await(await fetch("./data/bridge_filter.json")).json()).centroids,j=i.buildings.length;i.buildings=i.buildings.filter(L=>{const N=L.p[0]?.[0];if(!N)return!0;let O=0,D=0;for(let E=0;E<N.length;E+=2)O+=N[E],D+=N[E+1];return O/=N.length/2,D/=N.length/2,!B.some(E=>Math.hypot(E[0]-O,E[1]-D)<.5)}),Ke.__bridgeFiltered=j-i.buildings.length}catch{}try{const B=(await(await fetch("./data/taksim_building_filter.json")).json()).centroids,j=i.buildings.length;i.buildings=i.buildings.filter(L=>{const N=L.p[0]?.[0];if(!N)return!0;let O=0,D=0;for(let E=0;E<N.length;E+=2)O+=N[E],D+=N[E+1];return O/=N.length/2,D/=N.length/2,!B.some(E=>Math.hypot(E[0]-O,E[1]-D)<3)}),Ke.__taksimBldFiltered=j-i.buildings.length}catch{}let n=null;try{n=await(await fetch("./data/taksim17e.json")).json();const f=n.mosque.ring,B=n.maksem,j=n.gallery,L=i.buildings.length,N=(O,D,E)=>{let b=!1;for(let C=0,T=O.length-2;C<O.length;T=C,C+=2)O[C+1]>E!=O[T+1]>E&&D<(O[T]-O[C])*(E-O[C+1])/(O[T+1]-O[C+1])+O[C]&&(b=!b);return b};i.buildings=i.buildings.filter(O=>{const D=O.p[0]?.[0];if(!D)return!0;let E=0,b=0;for(let C=0;C<D.length;C+=2)E+=D[C],b+=D[C+1];return E/=D.length/2,b/=D.length/2,Math.hypot(E-j.c[0],b-j.c[1])<1.5?(O.h=j.h,!0):!N(f,E,b)&&Math.hypot(E-B.c[0],b-B.c[1])>3}),Ke.__taksim17e=L-i.buildings.length}catch{n=null}let s=null;try{s=await(await fetch("./data/halic17e.json")).json()}catch{s=null}if(s){const f=[];for(const L of s.ways){const N=L.p;for(let O=0;O+3<N.length;O+=2){const D=Math.hypot(N[O+2]-N[O],N[O+3]-N[O+1]),E=(N[O+2]-N[O])/D,b=(N[O+3]-N[O+1])/D;for(let C=0;C<=D;C+=2)for(const T of[-L.w/2,0,L.w/2])f.push(N[O]+E*C-b*T,N[O+1]+b*C+E*T)}}const B=(L,N,O)=>{let D=!1;for(let E=0,b=L.length-2;E<L.length;b=E,E+=2){const C=L[E],T=L[E+1],R=L[b],F=L[b+1];T>O!=F>O&&N<(R-C)*(O-T)/(F-T)+C&&(D=!D)}return D},j=i.buildings.length;i.buildings=i.buildings.filter(L=>{const N=L.p?.[0]?.[0];if(!N||(L.g||0)!==0)return!0;let O=1e9,D=-1e9,E=1e9,b=-1e9;for(let C=0;C<N.length;C+=2)O=Math.min(O,N[C]),D=Math.max(D,N[C]),E=Math.min(E,N[C+1]),b=Math.max(b,N[C+1]);for(let C=0;C<f.length;C+=2)if(f[C]>O&&f[C]<D&&f[C+1]>E&&f[C+1]<b&&B(N,f[C],f[C+1]))return!1;return!0}),Ke.__halicHidden=j-i.buildings.length}try{const B=(await(await fetch("./data/underground_filter.json")).json()).centroids,j=i.buildings.length;i.buildings=i.buildings.filter(L=>{const N=L.p[0]?.[0];if(!N)return!0;let O=0,D=0;for(let E=0;E<N.length;E+=2)O+=N[E],D+=N[E+1];return O/=N.length/2,D/=N.length/2,!B.some(E=>Math.abs(E[0]-O)<.5&&Math.abs(E[1]-D)<.5)}),Ke.__ugFiltered=j-i.buildings.length}catch{}try{const f=await(await fetch("./data/height_fix.json")).json();let B=0;for(const j of i.buildings){const L=j.p[0]?.[0];if(!L)continue;let N=0,O=0;for(let D=0;D<L.length;D+=2)N+=L[D],O+=L[D+1];N/=L.length/2,O/=L.length/2;for(const D of f.fix)Math.abs(D.c[0]-N)<.5&&Math.abs(D.c[1]-O)<.5&&(j.h=D.h,D.k!=null&&(j.k=D.k,j.hip=null),B++)}Ke.__heightFix=B}catch{}let a=[];try{const f=await(await fetch("./data/wm13_fatih.json")).json();let B=0;const j=new Map;for(const L of f.fix)j.set(`${Math.round(L.c[0])},${Math.round(L.c[1])}`,L);try{const L=await(await fetch("./data/wm13_mosques.json")).json();for(const N of L.hall_fix||[])j.set(`${Math.round(N.c[0])},${Math.round(N.c[1])}`,N)}catch{}for(const L of i.buildings){const N=L.p[0]?.[0];if(!N)continue;let O=0,D=0;for(let b=0;b<N.length;b+=2)O+=N[b],D+=N[b+1];O/=N.length/2,D/=N.length/2;const E=j.get(`${Math.round(O)},${Math.round(D)}`);!E||Math.abs(E.c[0]-O)>.5||Math.abs(E.c[1]-D)>.5||(L.h=E.h,E.k!=null&&(L.k=E.k,L.hip=null),E.g!=null&&(L.g=E.g),E.bd&&(L.bd=E.bd,L.in=E.in,L.rh=E.rh),B++)}a=f.domes||[],Ke.__wm13Fatih=B}catch{}try{const f=await(await fetch("./data/dolmabahce_fix.json")).json(),B=f.filter_centroids||[],j=i.buildings.length;i.buildings=i.buildings.filter(L=>{const N=L.p[0]?.[0];if(!N)return!0;let O=0,D=0;for(let E=0;E<N.length;E+=2)O+=N[E],D+=N[E+1];return O/=N.length/2,D/=N.length/2,!B.some(E=>Math.hypot(E[0]-O,E[1]-D)<8)});for(const L of f.buildings)i.buildings.push(L);Ke.__dolmaFix={removed:j-(i.buildings.length-f.buildings.length),added:f.buildings.length,dome:(f.dome||[]).length},Ke.__dolmaDome=f.dome||[],Ke.__dolmaRings=f.buildings.map(L=>L.p[0][0])}catch(f){console.warn("dolmabahce_fix skipped",f)}let r=new Set,o=[],c=[];try{const f=await(await fetch("./data/wm13_haydarpasa.json")).json();c=f.detail_zone||[],r=new Set((f.far_skip||[]).map(B=>`${B[0]},${B[1]}`)),o=f.far_clip||[];for(const B of f.detail_buildings||[])i.buildings.push(B);Ke.__wm13Kad=(f.detail_buildings||[]).length}catch{}try{Tt=await(await fetch("./data/wm14_besiktas.json")).json();for(const f of Tt.buildings)i.buildings.push(f);for(const f of Object.keys(Tt.roads||{})){const B=i.roads;B[f]=(B[f]||[]).concat(Tt.roads[f])}for(const f of Tt.parks||[])i.parks.push(f);for(const f of Tt.plazas||[])i.plazas.push(f);for(const f of Tt.trees||[])i.trees.push(f);Ke.__wm14Bjk={b:Tt.buildings.length,t:(Tt.trees||[]).length}}catch{Tt=null}try{const f=await(await fetch("./data/wm11_building_filter.json")).json(),B=i.buildings.length,j=f.detail||f.centroids.map(O=>({c:O,mode:"all"})),L=new Set,N=i.buildings.map((O,D)=>{const E=O.p[0]?.[0];if(!E)return null;let b=0,C=0;for(let T=0;T<E.length;T+=2)b+=E[T],C+=E[T+1];return{i:D,x:b/(E.length/2),z:C/(E.length/2),h:O.h,a:Math.abs($n(E))}});for(const O of j){const D=N.filter(E=>E&&Math.abs(E.x-O.c[0])<.6&&Math.abs(E.z-O.c[1])<.6);D.length&&(O.mode==="one"&&D.length>=2?(D.sort((E,b)=>b.a-E.a||b.h-E.h||E.i-b.i),D.slice(1).forEach(E=>L.add(E.i))):O.mode!=="one"&&D.forEach(E=>L.add(E.i)))}i.buildings=i.buildings.filter((O,D)=>!L.has(D)),Ke.__wm11BldFiltered=B-i.buildings.length}catch{}try{ft=await(await fetch("./data/wm15.json")).json();try{const j=await(await fetch("./data/wm16.json")).json();ft.filter=(ft.filter||[]).concat(j.filter||[]),delete j.filter,ft.mosques=(ft.mosques||[]).concat(j.mosques16||[]),delete j.mosques16,Object.assign(ft,j)}catch{}const f=ft.filter,B=i.buildings.length;i.buildings=i.buildings.filter(j=>{const L=j.p[0]?.[0];if(!L)return!0;let N=0,O=0;for(let D=0;D<L.length;D+=2)N+=L[D],O+=L[D+1];return N/=L.length/2,O/=L.length/2,!f.some(D=>Math.abs(D[0]-N)<.6&&Math.abs(D[1]-O)<.6)}),Ke.__wm15Filtered=B-i.buildings.length}catch{ft=null}let l=null;try{l=await(await fetch("./data/akaretler17c.json")).json();const f=i.buildings.length;i.buildings=Z_(i.buildings,l),Ke.__akaretler={units:l.units.length,hidden:f-i.buildings.length}}catch{l=null}if(ft?.roads_fix){const f=ft.roads_fix,B=i.roads;B.major=B.major.filter((j,L)=>!f.major_hide.includes(L)).concat(f.major_add)}va("scene");const h=kt?await EE():null;if(h&&(Ke.__texMB=Math.round(h.mb*100)/100),ot>=7&&Ln.get("terrain")!=="0"){tn=await(await fetch("./data/terrain.json")).json();try{const f=await(await fetch("./data/terrain_far.json")).json();Of=f,Ke.__terf={nx:f.nx,nz:f.nz}}catch{}try{nl=await(await fetch("./data/wm14_terrain_bjk.json")).json()}catch{}document.getElementById("cr-dem").textContent="Kıyı+arazi/coast+terrain: Copernicus DEM GLO-30 (© DLR, Airbus DS)"}if(tn){const f={ayasofya:100,sultanahmet:95,yenicami:70,rustempasa:30,galata:14,nusretiye:32,ayatriada:28,stantoine:60,suleymaniye:120};for(const B of i.landmarks){const j=f[B.id];if(!j)continue;const L=B.model?B.model.x:B.label[0],N=B.model?B.model.z:B.label[1];Vt(L,N,j,30)}for(const[B,j,L]of[[179,1526,38],[209,1648,22],[190,1686,16]])Vt(B,j,L,20);for(const[B,j]of[[-302.3,1943.1],[-326.7,1972.1],[-349.2,2000.8],[-260.4,1783.6]])Vt(B,j,7,10);if(e){const B=e.outline;let j=0,L=0;for(let N=0;N<B.length;N+=2)j+=B[N],L+=B[N+1];Vt(j/(B.length/2),L/(B.length/2),150,40)}Vt(504,-1493,125,35),Vt(739,-1482,55,35),Vt(621,-1426,45,35),Vt(797,-1625,70,35),Vt(652,-1671,90,35),Vt(1097.9,-1594.9,75.7,25),Vt(1106,-1845.1,44.9,25),Vt(778,-1446.1,56.7,25),Vt(810.8,-1502.9,40.3,25),Vt(944.9,-1542.1,39.3,25),Vt(753.5,-1786.2,57.2,25),Vt(793.6,-1931.2,49.6,25),Vt(768.7,-1253.4,50.1,25),Vt(794.7,-1202.2,38.8,25),Vt(1294.3,-1762.9,90,25);try{const B=await(await fetch("./data/wm11_slope_pads.json")).json(),j=[];for(const L of B.pads)Vt(L.x,L.z,L.r,L.b),L.prio&&j.push({x:L.x,z:L.z,r:L.r,h:Xs[Xs.length-1].h});if(Ke.__slopePads=B.pads.length,j.length){const L=[];for(const N of j)for(let O=0;O<20;O++){const D=O*.31416,E=N.x+Math.cos(D)*N.r,b=N.z+Math.sin(D)*N.r,C=fs(E+Math.cos(D)*10,b+Math.sin(D)*10);N.h-C>2.2&&L.push([E,b,2*Math.PI*N.r/20+.4,C-1.5,N.h+.8,D+Math.PI/2])}if(L.length){const N=new Bt(new Rt(1,1,1),new Je({color:"#cbbda2"}),L.length),O=new He,D=new wt;L.forEach((E,b)=>{D.setFromAxisAngle(new ne(0,1,0),E[5]),O.compose(new ne(E[0],(E[3]+E[4])/2,E[1]),D,new ne(E[2],Math.max(1.2,E[4]-E[3]),1.6)),N.setMatrixAt(b,O)}),N.castShadow=N.receiveShadow=!0,N.name="wm11-pads",Ge.add(N),Ke.__slopeWalls=L.length}}}catch{}Ke.__H=Ne,Ke.__pads=Xs.length}const[u,A,g,x]=i.bounds_m,_=(u+g)/2,p=(A+x)/2,d=(f,B)=>xE(i,f,B),M=d(28.9784,41.0066),y=d(28.9741,41.0256),v=d(28.9858,41.0372);Ue.overview=Pe?{t:[_+100,p+250],d:12500,pol:.55,az:0}:{t:[_+150,p+250],d:10500,pol:.72,az:-.3},Ue.overview_east=Pe?{t:[0,250],d:8800,pol:.55,az:0}:{t:[150,250],d:8200,pol:.72,az:-.3},Ue.sultanahmet={t:[M[0],M[1]],d:Pe?820:700,pol:.95,az:Pe?-.8:.8},Ue.galata={t:[y[0],y[1]],d:Pe?420:360,pol:1,az:.35};const q=d(28.965,41.0168);if(Ue.suleymaniye={t:[q[0],q[1]],d:Pe?900:760,pol:.95,az:.25},Ue.yc_top={t:[-574.7,732.1],d:Pe?400:250,pol:.12,az:.7245},Ue.gk_eye={t:[-402,-236],y:40,d:Pe?190:150,pol:1.2,az:.4},Ue.gk_apple={t:[-402,-236],y:30,d:Pe?300:230,pol:.72,az:.4},Ue.gk_ground={t:[-402,-236],y:36,d:Pe?330:270,pol:1.4,az:-.25},Ue.gm_beyazit={t:[-1300,1300],y:20,d:Pe?1300:1e3,pol:1,az:-.3},Ue.br_galata={t:[-600,250],y:8,d:Pe?900:700,pol:1.15,az:.9},Ue.ch_pera={t:[-150,-250],y:15,d:Pe?420:330,pol:1,az:.2},Ue.fatih={t:[-2900,600],y:20,d:Pe?1500:1150,pol:.95,az:-.2},Ue.edirnekapi={t:[-4e3,-320],y:60,d:Pe?1e3:780,pol:1,az:-.9},Ue.gate_edk={t:[-3771,-862],y:30,d:Pe?420:340,pol:1.05,az:-.9},Ue.gate_tpk={t:[-4426,205],y:30,d:Pe?420:340,pol:1.05,az:-.9},Ue.tekfur={t:[-3260,-1170],y:25,d:Pe?420:340,pol:1.05,az:-.9},Ue.seawall={t:[-1800,2650],y:10,d:Pe?1500:1200,pol:1,az:.4},Ue.kc_top={t:[-905,1386],y:40,d:Pe?900:520,pol:.02,az:-Math.PI/2},Ue.kc_top_n={t:[-905,1386],y:40,d:Pe?900:520,pol:.02,az:0},Ue.kc_obl={t:[-860,1400],y:40,d:Pe?700:520,pol:.8,az:-Math.PI/2-.25},Ue.asia={t:[2600,600],y:20,d:Pe?3200:2600,pol:.95,az:-.9},Ue.yedikule={t:[-4700,3380],y:15,d:Pe?800:620,pol:1,az:-.7},Ue.surlar={t:[-4600,1400],y:15,d:Pe?1700:1300,pol:1.05,az:-1.25},Ue.gm_taksim={t:[425,-1490],y:20,d:Pe?520:400,pol:1.05,az:.4},Ue.eminonu={t:[-725,700],d:Pe?820:700,pol:.95,az:Pe?.6:.35},Ue.taksim={t:[v[0],v[1]],d:Pe?700:600,pol:.95,az:3.4},Ue.match={t:[M[0]+150,M[1]-60],d:Pe?560:470,pol:.82,az:.55},Ue.roofs={t:[y[0]-120,y[1]+60],d:Pe?260:220,pol:.85,az:.6},kt){Ue.sultanahmet.pol=.82,Ue.galata.pol=.85,Ue.match.pol=.74,Ue.roofs.pol=.78,Ue.suleymaniye.pol=.82,Ue.taksim.pol=.82,Ue.overview.pol=Pe?.82:.88;for(const f of Object.values(Ue))f.d/=hs}Hf("overview");const H=new nt(new ta(4e4,4e4),new Je({color:Ye?en?Ye.water:Ye.ground:ot>=2?"#ece6da":"#e9e4da"}));H.material.depthWrite=!1,H.renderOrder=-200,H.name="ground",H.rotation.x=-Math.PI/2,H.receiveShadow=ot>=2,Ge.add(H);const U=new nt(new ta(g-u-8,x-A-8),new Je({color:Ye?Ye.pilot:ot>=2?"#e9e1d0":"#e4ddd0"}));if(U.material.depthWrite=!1,U.renderOrder=-150,U.rotation.x=-Math.PI/2,U.position.set(_,.02,p),U.receiveShadow=ot>=2,tn){const f=tn,B=[],j=[];for(let O=0;O<f.nz;O++)for(let D=0;D<f.nx;D++)B.push(f.x0+D*f.step,Ne(f.x0+D*f.step,f.z0+O*f.step)+.02,f.z0+O*f.step);for(let O=0;O<f.nz-1;O++)for(let D=0;D<f.nx-1;D++){const E=O*f.nx+D,b=E+1,C=E+f.nx,T=C+1,R=f.x0+D*f.step,F=f.z0+O*f.step;R<u||R+f.step>g||F<A||F+f.step>x||j.push(E,C,b,b,C,T)}const L=new xt;L.setAttribute("position",new et(B,3)),L.setIndex(j),L.computeVertexNormals();const N=new nt(L,new Je({color:Ye?Ye.pilot:"#e9e1d0",depthWrite:!1}));N.renderOrder=-150,N.receiveShadow=!0,N.name="terrain",U.name="pilot",U.renderOrder=-160,Ge.add(N),Ge.add(U)}else Ge.add(U);const Z=f=>{const B=f[0];let j=0,L=0;for(let N=0;N<B.length;N+=2)j+=B[N],L+=B[N+1];return Math.abs($n(B))<3e4&&fs(j/(B.length/2),L/(B.length/2))>1.5},w=i.water.filter(f=>!Z(f)),S=i.water.filter(Z);Ke.__pools=S.length,$t(w,-1.1,Ye?Ye.water:"#8ec3d8"),$t(S,.05,"#6fa8bb");{const f=[],B=[],j=new Re("#a39a8c"),L=new Re("#d6cebf"),N=(b,C,T,R,F)=>{f.push(...b,...C,...T,...b,...T,...R);for(let k=0;k<6;k++)B.push(F.r,F.g,F.b)},O=(b,C)=>Math.abs(b-u)<2||Math.abs(b-g)<2||Math.abs(C-A)<2||Math.abs(C-x)<2||Math.abs(Math.abs(b)-1764)<2||Math.abs(Math.abs(C)-2709)<2;for(const b of i.water)b.forEach((C,T)=>{const R=S.includes(b),F=($n(C)>0?1:-1)*(T===0?1:-1);for(let k=0;k<C.length;k+=2){const G=(k+2)%C.length,P=C[k],J=C[k+1],ie=C[G],de=C[G+1],ye=ie-P,me=de-J,pe=Math.hypot(ye,me),ve=(P+ie)/2,Se=(J+de)/2;if(pe<.5||O(P,J)&&O(ie,de)||ve<u+3||ve>g-3||Se<A+3||Se>x-3)continue;const be=Math.max(0,Ne(P,J))+(R?.45:.34),se=Math.max(0,Ne(ie,de))+(R?.45:.34),Be=R?be-.5:-1.1,xe=R?se-.5:-1.1,we=R?.6:1,De=me/pe*F*1.6,Le=-ye/pe*F*1.6;N([P,Be,J],[ie,xe,de],[ie,se,de],[P,be,J],j),N([P,be,J],[ie,se,de],[ie+De*we,se,de+Le*we],[P+De*we,be,J+Le*we],L),R&&N([P+De*we,be,J+Le*we],[ie+De*we,se,de+Le*we],[ie+De*we,se-.6,de+Le*we],[P+De*we,be-.6,J+Le*we],j)}});const D=new xt;D.setAttribute("position",new et(f,3)),D.setAttribute("color",new et(B,3)),D.computeVertexNormals();const E=new nt(D,new Je({vertexColors:!0,side:Mt}));E.receiveShadow=ot>=2,E.name="quay",Ge.add(E)}try{const f=await(await fetch("./data/context.json")).json();if(Tt){const k=new Set(Tt.ctx_skip||[]);f.polys=f.polys.filter((G,P)=>!k.has(P)).concat(Tt.ctx_add||[])}try{const k=await(await fetch("./data/wm13_haydarpasa.json")).json();for(const G of k.land2||k.land||[])f.polys.push(G);Ke.__wm13Land=(k.land||[]).length}catch{}const[B,j,L,N]=f.bbox_m,O=f.fade,D=new Re(Ye?Ye.pilot:"#e4ddd0"),E=new Re(Ye?en?Ye.water:Ye.ground:"#e9e4da"),b=new Re,C=[],T=[];for(const k of f.polys){const G=de=>{const ye=[];for(let me=0;me<de.length;me+=2)ye.push(new ke(de[me],de[me+1]));return ye},P=G(k[0]),J=k.slice(1).map(G),ie=P.concat(...J);for(const de of wn.triangulateShape(P,J))for(const ye of[de[0],de[2],de[1]]){const me=ie[ye],pe=Math.max(B-me.x,0,me.x-L),ve=Math.max(j-me.y,0,me.y-N),Se=0,be=Math.max(1800-me.x,0,me.x-4700),se=Math.max(-2600-me.y,0,me.y-4400),Be=Math.hypot(Math.max(1764-me.x,0,me.x-3460),Math.max(-3260-me.y,0,me.y+1480)),xe=Math.min(1,Math.max(Se,2.2*Math.min(Math.hypot(pe,ve),Math.hypot(be,se)+250,Be+150)/O));b.copy(D).lerp(E,.3+.7*xe*xe*(3-2*xe)),C.push(me.x,Math.max(0,Ne(me.x,me.y))+.01,me.y),T.push(b.r,b.g,b.b)}}const R=new xt;R.setAttribute("position",new et(C,3)),R.setAttribute("color",new et(T,3)),R.computeVertexNormals();const F=new nt(R,new Je({vertexColors:!0,depthWrite:!1}));if(F.renderOrder=-170,F.name="ctx",F.receiveShadow=ot>=2,Ge.add(F),Tt&&Tt.land){const k=new li;for(const P of Tt.land)Ks(k,P,.01,D,!!tn);const G=new nt(k.geometry(),new Je({vertexColors:!0,depthWrite:!1}));G.renderOrder=-170,G.name="wm14_bjk_land",G.receiveShadow=ot>=2,Ge.add(G)}}catch(f){console.warn("context land skipped",f)}if(a.length){const f=new Bt(new Cn(1,10,4,0,Math.PI*2,0,Math.PI/2),new Je({color:"#8d9aa8"}),a.length),B=new He,j=new wt,L=new ne,N=new ne;a.forEach(([O,D,E,b],C)=>f.setMatrixAt(C,B.compose(L.set(O,Ne(O,D)+b+.6,D),j,N.set(E,E*.85,E)))),f.castShadow=ot>=2,f.name="wm13_fatih_domes",Ge.add(f)}try{const f=await(await fetch("./data/wm13_haydarpasa.json")).json(),B=new li,j=new Re("#bdb5a6"),L=new Re("#d6cfc2"),N=new Re("#8f8a80"),O=new Re("#a7a196"),D=P=>{let J=0,ie=0;for(let de=0;de<P.length;de+=2)J+=P[de],ie+=P[de+1];return Math.max(0,Ne(J/(P.length/2),ie/(P.length/2)))},E=new Re("#80868a"),b=new Re("#bdbdb8");{const P=[],J=[],ie=(me,pe,ve)=>{const Se=xe=>{const we=[];for(let De=0;De<xe.length;De+=2)we.push(new ke(xe[De],xe[De+1]));return we},be=Se(me[0]),se=me.slice(1).map(Se),Be=be.concat(...se);for(const xe of wn.triangulateShape(be,se))for(const we of[xe[0],xe[2],xe[1]]){const De=Be[we];P.push(De.x,Math.max(0,Ne(De.x,De.y))+ve,De.y),J.push(pe.r,pe.g,pe.b)}};for(const me of f.yard_t||f.yard||[])ie(me,E,.15);for(const me of f.apron_t||f.apron||[])ie(me,b,.18);const de=new xt;de.setAttribute("position",new et(P,3)),de.setAttribute("color",new et(J,3)),de.computeVertexNormals();const ye=new nt(de,new Je({vertexColors:!0,side:Mt}));ye.receiveShadow=!0,ye.name="wm14_hayd_yard",Ge.add(ye)}for(const P of f.piers||[]){const J=D(P);zt(B,[[P]],J-1.5,J+1.4,j,L)}for(const P of f.breakwaters||[]){const J=D(P);zt(B,[[P]],J-1.5,J+2.2,N,O)}for(const P of f.platforms||[]){const J=D(P);zt(B,[[P]],J,J+.9,j,new Re("#cfc6b6"))}const C=new Re("#d9ccb4"),T=new Re("#8a8d90"),R=new Re("#c9c4ba");for(const P of f.buildings||[]){const J=D(P.ring);zt(B,[[P.ring]],J,J+Math.min(30,P.h),C,T)}for(const P of f.silos||[])if(P.a<1e4){const J=D(P.ring);zt(B,[[P.ring]],J,J+32,R,R)}const F=new Re("#8c7f70"),k=new Re("#4a4440");for(const P of f.rails||[])for(let J=0;J+3<P.length;J+=2){const ie=P[J],de=P[J+1],ye=P[J+2],me=P[J+3],pe=Math.hypot(ye-ie,me-de);if(pe<.5)continue;const ve=-(me-de)/pe,Se=(ye-ie)/pe,be=Math.max(0,Ne((ie+ye)/2,(de+me)/2))+.3,se=(Be,xe,we)=>[[ie+ve*(Be-xe),de+Se*(Be-xe),ye+ve*(Be-xe),me+Se*(Be-xe),ye+ve*(Be+xe),me+Se*(Be+xe),ie+ve*(Be+xe),de+Se*(Be+xe)]];zt(B,[se(0,1.7,be)],be,be+.12,F,F),zt(B,[se(-.72,.09,be)],be+.12,be+.24,k,k),zt(B,[se(.72,.09,be)],be+.12,be+.24,k,k)}const G=new nt(B.geometry(),new Je({vertexColors:!0,side:Mt}));G.receiveShadow=G.castShadow=ot>=2,G.name="wm13_hayd",Ge.add(G)}catch(f){console.warn("wm13 haydarpasa skipped",f)}try{const f=(await(await fetch("./data/far.json")).json()).blocks,B=new Set(Tt?(Tt.far_skip||[]).map(C=>`${C[0]},${C[1]}`):[]),j=new li,L=new Re("#cdbfae"),N=new Re("#b9876a"),O=new Re(Ye?en?Ye.water:Ye.ground:"#e9e4da"),D=new Re,E=new Re;for(const C of f){const T=C.p;if(Pe&&Math.abs($n(T))<2500)continue;const R=Math.max(u-_,0,_-g),F=Math.max(A-p,0,p-x),k=Math.min(1,Math.hypot(R,F)/4200);if([[3328,3030,70],[3049.3,-2208,70],[2108.2,265.4,35]].some(([P,J,ie])=>Math.hypot(_-P,p-J)<ie)||r.has(`${T[0]},${T[1]}`)||B.has(`${T[0]},${T[1]}`))continue;D.copy(L).lerp(O,.15+.75*k),E.copy(N).lerp(O,.15+.75*k);const G=Math.max(0,Ne(_,p));zt(j,[[T]],G,G+C.h*(1-.4*k),D,E)}for(const C of o.concat(Tt?Tt.far_clip||[]:[])){const T=C.rings[0];let R=0,F=0;for(let ie=0;ie<T.length;ie+=2)R+=T[ie],F+=T[ie+1];R/=T.length/2,F/=T.length/2;const k=Math.max(u-R,0,R-g),G=Math.max(A-F,0,F-x),P=Math.min(1,Math.hypot(k,G)/4200);D.copy(L).lerp(O,.15+.75*P),E.copy(N).lerp(O,.15+.75*P);const J=Math.max(0,Ne(R,F));zt(j,[C.rings],J,J+C.h*(1-.4*P),D,E)}const b=new nt(j.geometry(),new Je({vertexColors:!0,side:Mt}));b.receiveShadow=ot>=2,b.name="far",Ge.add(b),Ke.__far=f.length}catch(f){console.warn("far context skipped",f)}try{let f=(await(await fetch("./data/mosques.json")).json()).mosques;try{const G=(await(await fetch("./data/wm11_mosque_filter.json")).json()).centroids;f=f.filter(P=>!G.some(J=>Math.hypot(J[0]-P.x,J[1]-P.z)<5))}catch{}if(ft){const k=ft.generic_drop||[];f=f.filter(G=>!k.some(P=>Math.abs(P[0]-G.x)<.5&&Math.abs(P[1]-G.z)<.5));for(const G of ft.generic_minarets||[])for(const P of f)Math.abs(P.x-G.c[0])<.5&&Math.abs(P.z-G.c[1])<.5&&P.m.forEach((J,ie)=>{G.m[ie]&&(J[0]=G.m[ie][0],J[1]=G.m[ie][1])})}if(Tt)for(const k of Tt.mosques||[])(ft?.bj_drop||[]).includes(k.n)||f.push(k);try{const k=await(await fetch("./data/wm13_mosques.json")).json();for(const G of k.mosques)for(const P of f)if(Math.hypot(P.x-G.c[0],P.z-G.c[1])<2&&(G.r&&(P.r=G.r),G.y!=null&&(P.y=G.y),G.mh))for(const J of P.m)J[2]=G.mh}catch{}for(const k of f)if(k.n==="Taksim Camii"){k.r=12.25,k.y=33-1.27*12.25;const G=[[438.52,-1445.55],[443.37,-1524.86]];k.m.forEach((P,J)=>{G[J]&&(P[0]=G[J][0],P[1]=G[J][1]),P[2]=64.8,P[3]=Math.max(P[3],2.1)})}if(n){const k=n.mosque.ring,G=n.maksem;let P=1e9;for(let be=0;be<k.length;be+=2)P=Math.min(P,Ne(k[be],k[be+1]));const J=new li;zt(J,[[k]],P-.5,P+n.mosque.hall,new Re("#e3d8c4"),new Re("#cfc4ae"));const ie=new nt(J.geometry(),new Je({vertexColors:!0,side:Mt}));ie.castShadow=ie.receiveShadow=ot>=2,ie.name="taksim_camii_hall",Ge.add(ie);const[de,ye]=G.c,me=Ne(de,ye),pe=G.d/2/Math.cos(Math.PI/8),ve=new Sn;ve.name="taksim_maksem";const Se=(be,se,Be,xe,we)=>{const De=new nt(be,new Je({color:se}));De.position.set(de,Be,ye),De.scale.set(xe,we,xe),De.rotation.y=G.rot||0,De.castShadow=De.receiveShadow=ot>=2,ve.add(De)};Se(new Ft(1,1,1,8),"#d8ccb3",me-.5+(G.h+.5)/2,pe,G.h+.5),Se(new Ft(1,1,1,8),"#ece4d2",me+G.h+.2,pe*1.06,.5),Se(new Cn(1,16,6,0,Math.PI*2,0,Math.PI/2),"#8f9aa6",me+G.h+.4,pe*.84,pe*.42/.84),Ge.add(ve)}const B=f.reduce((k,G)=>k+G.m.length,0),j=new He,L=new wt,N=new ne,O=new ne,D=new Je({color:"#8e939b"}),E=new Je({color:"#e4dccd"}),b=new Bt(new Cn(1,12,4,0,Math.PI*2,0,Math.PI/2),D,f.length),C=new Bt(new Ft(1,1,1,14,1,!0),E,f.length),T=new Bt(new Ft(.85,1,1,8),E,Math.max(1,B)),R=new Bt(new ei(1,1,8),D,Math.max(1,B));let F=0;f.forEach((k,G)=>{const P=Ne(k.x,k.z),J=.35*k.r;C.setMatrixAt(G,j.compose(N.set(k.x,P+k.y+J/2,k.z),L,O.set(k.r*1.02,J,k.r*1.02))),b.setMatrixAt(G,j.compose(N.set(k.x,P+k.y+J,k.z),L,O.set(k.r,k.r*.92,k.r)));for(const[ie,de,ye,me]of k.m){const pe=Ne(ie,de),ve=ye*.17;T.setMatrixAt(F,j.compose(N.set(ie,pe-.8+(ye-ve+.8)/2,de),L,O.set(me,ye-ve+.8,me))),R.setMatrixAt(F,j.compose(N.set(ie,pe+ye-ve/2,de),L,O.set(me*1.05,ve,me*1.05))),F++}}),T.count=R.count=F;for(const k of[b,C,T,R])k.castShadow=k.receiveShadow=ot>=2,k.frustumCulled=!1,Ge.add(k)}catch(f){console.warn("mosque placeholders skipped",f)}try{const f=await(await fetch("./data/bridges.json")).json(),B=[],j=[],L=new Re("#77706c"),N=new Re("#c8bfb2"),O=new Re("#7d766f"),D=(pe,ve,Se,be)=>{B.push(...pe,...ve,...Se);for(let se=0;se<3;se++)j.push(be.r,be.g,be.b)},E=f.bridges.find(pe=>pe.name==="Galata Köprüsü"),b=new Map,C=(pe,ve)=>`${Math.round(pe)},${Math.round(ve)}`;if(E)for(const pe of E.strips){const ve=pe.p;for(let Se=0;Se<ve.length;Se+=2){const be=C(ve[Se],ve[Se+1]),se=b.get(be)||[];se.push(pe.y),b.set(be,se)}}const T=(pe,ve,Se)=>{const be=b.get(C(pe,ve));return be?be.reduce((se,Be)=>se+Be,0)/be.length:Se},R=[];Or=(pe,ve)=>{for(const Se of R){if(pe<Se.bb[0]||pe>Se.bb[2]||ve<Se.bb[1]||ve>Se.bb[3])continue;const be=Se.v;let se=!1;for(let we=0,De=be.length-1;we<be.length;De=we++)be[we].y>ve!=be[De].y>ve&&pe<(be[De].x-be[we].x)*(ve-be[we].y)/(be[De].y-be[we].y)+be[we].x&&(se=!se);if(!se)continue;let Be=0,xe=0;for(let we=0;we<be.length;we++){const De=1/(.5+Math.hypot(be[we].x-pe,be[we].y-ve));Be+=De,xe+=De*Se.h[we]}return xe/Be}return-1e9};for(const pe of f.bridges)for(const ve of pe.strips){const Se=ve.p,be=[];for(let ze=0;ze<Se.length;ze+=2)be.push(new ke(Se[ze],Se[ze+1]));wn.isClockWise(be)&&be.reverse();let se=0,Be=0;for(const ze of be)se+=ze.x,Be+=ze.y;const xe=Math.max(0,Ne(se/be.length,Be/be.length));if(xe>.3&&ve.y<3&&pe!==E)continue;const we=ve.y+xe,De=ve.y-ve.t+xe,Le=pe===E;if(Le){const ze=be.map(at=>Math.max(T(at.x,at.y,ve.y)+xe,Ne(at.x,at.y)+.05));let Pt=1e9,Jt=1e9,Yn=-1e9,bi=-1e9;for(const at of be)Pt=Math.min(Pt,at.x),Yn=Math.max(Yn,at.x),Jt=Math.min(Jt,at.y),bi=Math.max(bi,at.y);R.push({v:be,h:ze,bb:[Pt,Jt,Yn,bi]});{let at=0,_t=-1;for(let rt=0;rt<be.length;rt++){const Et=be[rt].distanceTo(be[(rt+1)%be.length]);Et>_t&&(_t=Et,at=rt)}if(be.length===4){const rt=at,Et=(at+1)%4,Ut=(at+2)%4,xi=(at+3)%4,_i=new Re("#8c2f2c"),An=(ln,Nn)=>{const Xa=be[rt].x+(be[Et].x-be[rt].x)*ln,Ka=be[rt].y+(be[Et].y-be[rt].y)*ln,z=ze[rt]+(ze[Et]-ze[rt])*ln,Me=be[xi].x+(be[Ut].x-be[xi].x)*ln,Ie=be[xi].y+(be[Ut].y-be[xi].y)*ln,Te=ze[xi]+(ze[Ut]-ze[xi])*ln;return[Xa+(Me-Xa)*Nn,z+(Te-z)*Nn+.07,Ka+(Ie-Ka)*Nn]};for(const[ln,Nn]of[[.43,.475],[.525,.57]])D(An(ln,0),An(Nn,0),An(Nn,1),_i),D(An(ln,0),An(Nn,1),An(ln,1),_i),D(An(ln,0),An(Nn,1),An(Nn,0),_i),D(An(ln,0),An(ln,1),An(Nn,1),_i)}}if(ve.y<6.4||ze.some(at=>Math.abs(at-we)>.3)){const at=Math.max(.42,Math.min(ve.t,2.6));for(const _t of wn.triangulateShape(be,[])){const[rt,Et,Ut]=_t;D([be[rt].x,ze[rt],be[rt].y],[be[Ut].x,ze[Ut],be[Ut].y],[be[Et].x,ze[Et],be[Et].y],L),D([be[rt].x,ze[rt]-at,be[rt].y],[be[Et].x,ze[Et]-at,be[Et].y],[be[Ut].x,ze[Ut]-at,be[Ut].y],O)}for(let _t=0;_t<be.length;_t++){const rt=(_t+1)%be.length,Et=be[_t],Ut=be[rt];D([Et.x,ze[_t]-at,Et.y],[Ut.x,ze[rt]-at,Ut.y],[Ut.x,ze[rt],Ut.y],N),D([Et.x,ze[_t]-at,Et.y],[Ut.x,ze[rt],Ut.y],[Et.x,ze[_t],Et.y],N)}continue}}const Ve=Le&&ve.t>=2.2&&ve.y>=5,Ze=new Re("#2f2b28"),ct=(ze,Pt,Jt,Yn,bi)=>{for(const at of wn.triangulateShape(be,[])){const[_t,rt,Et]=at.map(Ut=>be[Ut]);D([_t.x,Pt,_t.y],[Et.x,Pt,Et.y],[rt.x,Pt,rt.y],Jt),D([_t.x,ze,_t.y],[rt.x,ze,rt.y],[Et.x,ze,Et.y],Yn)}for(let at=0;at<be.length;at++){const _t=be[at],rt=be[(at+1)%be.length];D([_t.x,ze,_t.y],[rt.x,ze,rt.y],[rt.x,Pt,rt.y],bi),D([_t.x,ze,_t.y],[rt.x,Pt,rt.y],[_t.x,Pt,_t.y],bi)}};Ve?(ct(we-.55,we,L,O,N),ct(De,De+.5,new Re("#8a8378"),O,N),ct(De+.5,we-.55,Ze,Ze,Ze)):ct(De,we,L,O,N)}const F=new xt;F.setAttribute("position",new et(B,3)),F.setAttribute("color",new et(j,3)),F.computeVertexNormals();const k=new nt(F,new Je({vertexColors:!0}));k.castShadow=k.receiveShadow=ot>=2,k.renderOrder=-1e3,Ge.add(k);const G={pier:"#b3aa9d",tower:"#ecebe8",cable:"#d9dadc",canopy:"#cfd3d6"},P=new Rt(1,1,1),J=new He,ie=new wt,de=new qn,ye=new ne,me=new ne;for(const pe of Object.keys(G)){const ve=f.boxes.filter(be=>be[7]===pe&&!(pe==="pier"&&Ne(be[0],be[2])>.3));if(!ve.length)continue;const Se=new Bt(P,new Je({color:G[pe]}),ve.length);ve.forEach((be,se)=>{const[Be,xe,we,De,Le,Ve,Ze]=be,ct=pe==="cable";de.set(0,Ze,ct?-be[8]:0,"YZX"),ie.setFromEuler(de);const ze=Math.max(0,Ne(Be,we));Se.setMatrixAt(se,J.compose(ye.set(Be,(ct?xe:xe+Le/2)+ze,we),ie,me.set(De,Le,Ve)))}),Se.castShadow=pe!=="cable"&&ot>=2,Se.receiveShadow=ot>=2,Ge.add(Se)}}catch(f){console.warn("bridges skipped",f)}if(s)try{const f=eE(s,Ne),B=new Rt(1,1,1),j=new He,L=new wt,N=new ne,O=new ne,D=new ne(0,1,0),E=[["#a9a59e",[]],["#5a5d61",[]],["#c9c6bf",[]],["#b3aa9d",[]]];f.forEach((b,C)=>{const T=b.w+1.2;E[0][1].push([b.x,b.y-.85,b.z,b.len+.3,1.6,T,b.rot]),E[1][1].push([b.x,b.y+.02,b.z,b.len+.3,.08,b.w,b.rot]);for(const R of[-1,1]){const F=-Math.sin(b.rot)*R*(T/2-.15),k=-Math.cos(b.rot)*R*(T/2-.15);E[2][1].push([b.x+F,b.y+.5,b.z+k,b.len+.3,1,.3,b.rot])}if(C%6===3&&b.y-b.g>3){const R=b.y-1.6-Math.min(b.g,0)+1;E[3][1].push([b.x,Math.min(b.g,0)-1+R/2,b.z,2.2,R,b.w-1,b.rot])}});for(const[b,C]of E){if(!C.length)continue;const T=new Bt(B,new Je({color:b}),C.length);T.name="halic-deck",C.forEach(([R,F,k,G,P,J,ie],de)=>T.setMatrixAt(de,j.compose(N.set(R,F,k),L.setFromAxisAngle(D,ie),O.set(G,P,J)))),T.castShadow=T.receiveShadow=ot>=2,Ge.add(T)}Ke.__halicDeck=f.length}catch(f){console.warn("Haliç deck skipped",f)}try{const f=(await(await fetch("./data/churches.json")).json()).churches,B=new He,j=new wt,L=new ne,N=new ne,O=new ne(0,1,0),D=new Je({color:"#ddd3c2"}),E=new Je({color:"#8b9097"}),b=new Je({color:"#9c5a4d"}),C=new Je({color:"#6f6a68"}),T=(P,J,ie,de)=>{if(!ie.length)return;const ye=new Bt(P,J,ie.length);ie.forEach((me,pe)=>{de(me),ye.setMatrixAt(pe,B.compose(L,j,N))}),ye.castShadow=ye.receiveShadow=ot>=2,Ge.add(ye)},R=f.filter(P=>P.k!=="west"),F=f.filter(P=>P.k==="arm"),k=f.filter(P=>P.k==="orth"),G=f.filter(P=>P.k==="west");T(new Ft(1,1,1,10),D,R,P=>{j.identity(),L.set(P.x,Ne(P.x,P.z)+P.y+P.r*.6,P.z),N.set(P.r,P.r*1.2,P.r)}),T(new Cn(1,10,5,0,Math.PI*2,0,Math.PI/2),E,k,P=>{j.identity(),L.set(P.x,Ne(P.x,P.z)+P.y+P.r*1.2,P.z),N.set(P.r*1.05,P.r*.95,P.r*1.05)}),T(new ei(1,1,10),C,F,P=>{j.identity(),L.set(P.x,Ne(P.x,P.z)+P.y+P.r*1.2+P.r*.6,P.z),N.set(P.r*1.1,P.r*1.2,P.r*1.1)}),T(new Rt(1,1,1),D,G,P=>{j.setFromAxisAngle(O,P.ry);const J=P.h-P.w*1.1;L.set(P.x,Ne(P.x,P.z)+J/2,P.z),N.set(P.w,J,P.w)}),T(new ei(Math.SQRT1_2,1,4).rotateY(Math.PI/4),b,G,P=>{j.setFromAxisAngle(O,P.ry),L.set(P.x,Ne(P.x,P.z)+P.h-P.w*.55,P.z),N.set(P.w*1.08,P.w*1.1,P.w*1.08)})}catch(f){console.warn("church placeholders skipped",f)}try{const f=await(await fetch("./data/walls.json")).json();if(ft?.yedikule&&(f.ytowers=ft.yedikule.rtowers,f.tpolys=f.tpolys.concat(ft.yedikule.ptowers)),ft?.yk16){const k=ft.yk16;f.ytowers=[];const G=(P,J)=>k.hide_tp.some(ie=>Math.hypot(ie[0]-P,ie[1]-J)<.3);f.tpolys=f.tpolys.filter(P=>{let J=0,ie=0;const de=P.p.length/2;for(let ye=0;ye<P.p.length;ye+=2)J+=P.p[ye],ie+=P.p[ye+1];return!G(J/de,ie/de)}),ft.walls_hide=(ft.walls_hide||[]).concat(k.hide)}ft?.walls_clip&&(ft.walls_hide=(ft.walls_hide||[]).concat(ft.walls_clip.hide),f.boxes=f.boxes.concat(ft.walls_clip.add));const B={wall:"#c9b99a",outer:"#c2b293",scarp:"#b3a487",tower:"#bfae8e",otower:"#c7b796"},j=new Rt(1,1,1),L=new He,N=new wt,O=new ne(0,1,0),D=new ne,E=new ne;$t(f.moat,.115,"#8a9d5a");for(const k of Object.keys(B)){const G=ft?.walls_hide||[],P=f.boxes.filter(de=>de[7]===k&&!G.some(ye=>Math.abs(ye[0]-de[0])<.05&&Math.abs(ye[1]-de[2])<.05));if(!P.length)continue;const J=[];for(const de of P){const[ye,me,pe,ve,Se,be,se]=de,Be=Math.cos(se),xe=-Math.sin(se);let we=0;for(let Le=0;Le<=6;Le++){const Ve=(Le/6-.5)*ve;we=Math.max(we,Math.abs(Ne(ye+Be*Ve,pe+xe*Ve)-Ne(ye,pe)))}const De=Math.min(24,Math.max(1,Math.ceil(we/.6),Math.ceil(ve/40)));for(let Le=0;Le<De;Le++){const Ve=((Le+.5)/De-.5)*ve,Ze=ye+Be*Ve,ct=pe+xe*Ve,ze=Ne(Ze-Be*ve/De/2,ct-xe*ve/De/2),Pt=Ne(Ze+Be*ve/De/2,ct+xe*ve/De/2),Jt=Ne(Ze,ct),Yn=Math.min(ze,Pt,Jt)-2.5;J.push([Ze,Yn,ct,ve/De+.3,Jt+me+Se-Yn,be,se])}}const ie=new Bt(j,uc(new Je({color:B[k]})),J.length);ie.name="aud:wall",J.forEach((de,ye)=>{const[me,pe,ve,Se,be,se,Be]=de;N.setFromAxisAngle(O,Be),ie.setMatrixAt(ye,L.compose(D.set(me,pe+be/2,ve),N,E.set(Se,be,se)))}),ie.castShadow=ie.receiveShadow=ot>=2,Ge.add(ie)}const b=new li,C=new Re("#bfae8e"),T=new Re("#e6e0d4");for(const k of f.tpolys){let G=-1e9,P=1e9;for(let J=0;J<k.p.length;J+=2){const ie=Ne(k.p[J],k.p[J+1]);G=Math.max(G,ie),P=Math.min(P,ie)}zt(b,[[k.p]],P-2.5,G+k.h,k.marble?T:C,(k.marble?T:C).clone().multiplyScalar(.92))}const R=new nt(b.geometry(),new Je({vertexColors:!0,side:Mt}));R.castShadow=R.receiveShadow=ot>=2,Ge.add(R);const F=new Bt(new Ft(1,1.06,1,12),new Je({color:"#c6b596"}),f.ytowers.length);f.ytowers.forEach(([k,G,P,J],ie)=>{N.identity();let de=1e9;for(let me=0;me<8;me++)de=Math.min(de,Ne(k+Math.cos(me*.785)*P,G+Math.sin(me*.785)*P));de-=1;const ye=Ne(k,G)+J-de;F.setMatrixAt(ie,L.compose(D.set(k,de+ye/2,G),N,E.set(P,ye,P)))}),F.name="aud:ytower",F.castShadow=F.receiveShadow=ot>=2,Ge.add(F),Ct("Kara Surları",-4600,30,1200,"district"),Ct("Yedikule",-4700,34,3380)}catch(f){console.warn("walls skipped",f)}try{const f=[],B=new He,j=new wt,L=new ne(0,1,0),N=new ne,O=new ne,D=(me,pe,ve,Se,be,se,Be,xe,we=0)=>{const De=me.index?me.toNonIndexed():me.clone();De.deleteAttribute("uv"),De.applyMatrix4(B.compose(N.set(ve,Se,be),j.setFromAxisAngle(L,we),O.set(se,Be,xe)));const Le=new Re(pe),Ve=De.attributes.position.count,Ze=new Float32Array(Ve*3);for(let ct=0;ct<Ve;ct++)Ze.set([Le.r,Le.g,Le.b],ct*3);De.setAttribute("color",new Lt(Ze,3)),f.push(De)},E=new Rt(1,1,1),b=new Ft(1,1,1,10),C=new ei(1,1,10),T=new ei(.71,1,4,1).rotateY(Math.PI/4),R=new Cn(1,12,4,0,Math.PI*2,0,Math.PI/2),F="#d8cdbb",k="#8e939b",G="#b9876a",P="#c9b99a",J=(me,pe,ve,Se,be,se=0,Be=F,xe=0)=>D(E,Be,me,xe+be/2,pe,ve,be,Se,se),ie=(me,pe,ve,Se,be,se=0)=>{const Be=Ne(me,pe);J(me,pe,ve*2.6,ve*2.6,ve*1.1,se,F,Be),D(R,k,me,Be+ve*1.1,pe,ve,ve*.9,ve);for(let xe=0;xe<Se;xe++){const we=se+Math.PI/4+xe*Math.PI/2,De=me+Math.cos(we)*ve*1.9,Le=pe-Math.sin(we)*ve*1.9;D(b,F,De,Be+be*.44,Le,1.3,be*.88,1.3),D(C,k,De,Be+be*.94,Le,1.4,be*.12,1.4)}},de=await(await fetch("./data/walls.json")).json();for(const[me,pe]of[[-3663,-746],[-4426,205]]){let ve=null,Se=1e9;for(const Ve of de.boxes)if(Ve[7]==="wall"){const Ze=Math.hypot(Ve[0]-me,Ve[2]-pe);Ze<Se&&(Se=Ze,ve=Ve)}if(!ve||Se>200)continue;const be=ve[6],se=Math.cos(be),Be=-Math.sin(be),xe=(me-ve[0])*se+(pe-ve[2])*Be,we=ve[0]+se*xe,De=ve[2]+Be*xe,Le=Ne(we,De);for(const Ve of[-1,1]){const Ze=we+se*Ve*11,ct=De+Be*Ve*11;J(Ze,ct,11,13,20,be,P,Ne(Ze,ct)),D(T,"#a89a82",Ze,Ne(Ze,ct)+21.5,ct,11,3,13,be)}J(we,De,11.5,6,4,be,P,Le+9),J(we,De,11,6.6,1.2,be,G,Le+8.4)}{const ve=Ne(-3250.4,-1161);J(-3250.4,-1161,28,13,17,.9,"#c4a488",ve),J(-3250.4,-1161,28.4,13.4,.8,.9,G,ve+6),J(-3250.4,-1161,28.4,13.4,.8,.9,G,ve+11.5),Ct("Tekfur Sarayı",-3250.4,ve+26,-1161)}{const[me,pe]=[3099.2,1736],ve=200,Se=265,be=Ne(me,pe);J(me,pe-Se/2,ve,24,20,0,F,be),J(me,pe+Se/2,ve,24,20,0,F,be),J(me-ve/2,pe,24,Se,20,0,F,be),J(me+ve/2,pe,24,Se,20,0,F,be);for(const se of[-1,1])for(const Be of[-1,1])J(me+se*ve/2,pe+Be*Se/2,16,16,30,0,F,Ne(me+se*ve/2,pe+Be*Se/2)),D(T,k,me+se*ve/2,Ne(me+se*ve/2,pe+Be*Se/2)+33,pe+Be*Se/2,16,6,16);Ct("Selimiye Kışlası",me,be+50,pe)}ie(3132.8,1537,10,2,45),ie(3107.6,-376,9,2,45),ie(3023.6,-143.7,12,2,50);{const[me,pe]=[2108.2,265.4],ve=Ne(me,pe);D(b,"#c9c0b0",me,ve+1.3,pe,15,2.6,13),J(me-2.2,pe+1.4,13,9,7.5,.35,F,ve+2.4),D(b,F,me+3.1,ve+13.2,pe-1.1,5.1,17,5.1),D(b,"#d8d2c6",me+3.1,ve+22,pe-1.1,6.3,.5,6.3),D(b,F,me+3.1,ve+23.8,pe-1.1,4.5,3.4,4.5),D(C,k,me+3.1,ve+28.2,pe-1.1,5.5,6.4,5.5),D(b,"#c4a35a",me+3.1,ve+32,pe-1.1,.12,1.8,.12),Ct("Kız Kulesi",me,ve+42,pe)}Ct("Haydarpaşa Garı",3318,Ne(3318,3030)+52,3030),Ct("Dolmabahçe",1812,Ne(1812,-1722)+40,-1722);for(const[me,pe,ve]of[["Selimiye Camii",3132.8,1537],["Mihrimah Sultan",3107.6,-376],["Yeni Valide",3023.6,-143.7]])(!Pe||me!=="Yeni Valide")&&Ct(me,pe,Ne(pe,ve)+58,ve);const ye=to(f);if(f.forEach(me=>me.dispose()),ye){ye.computeVertexNormals();const me=new nt(ye,uc(new Je({vertexColors:!0})));me.castShadow=me.receiveShadow=ot>=2,me.name="wm5ph",Ge.add(me),Ke.__wm5ph=ye.attributes.position.count/3}}catch(f){console.warn("wm5 placeholders skipped",f)}if(e)try{const f=W_(e,Ne,Pe);Ge.add(f.grp);for(const B of f.detail)Sa.push(B);Ke.__kc=f.tris,Ct("Kapalıçarşı",-900,Ne(-900,1390)+30,1390,"district")}catch(f){console.warn("kapalicarsi skipped",f)}if(ot>=3){let f={};try{f=await(await fetch("./data/landuse.json")).json()}catch{}$t(f.railway||[],.08,"#857a70"),$t(f.construction||[],.085,"#a8957e"),$t(f.religious||[],.09,"#cdbfa8"),$t(i.parks,.12,Ye?Ye.parks:"#bcd59a"),$t(f.cemetery||[],.125,"#7f9469"),$t(f.pitch||[],.13,"#5f9e4f"),$t(i.plazas,.14,Ye?Ye.plazas:"#e8dcc6");try{const j=await(await fetch("./data/taksim_plaza.json")).json();$t(j.plazas||[],.145,Ye?Ye.plazas:"#e8dcc6")}catch{}const B=i.roads;io=!0,$t(B.path||[],.16,Ye?Ye.path:"#f4ecdd"),$t(B.service||[],.18,Ye?Ye.service:"#f7f2ea"),$t(B.minor||[],.2,Ye?Ye.minor:"#fbf8f2"),$t(B.major||[],.22,Ye?Ye.major:"#f2d9a6");try{const j=await(await fetch("./data/wm11_landmarks.json")).json();$t(j.plazas||[],.225,"#ddd6c8")}catch{}$t(B.rail||[],.26,Ye?Ye.rail:"#8d8a86"),$t(B.tram||[],.28,Ye?Ye.tram:"#b2473e"),io=!1}va("before_buildings");const m=i.palette,I=(Ye?Ye.walls:m.walls).map(f=>new Re(f)),Q=(Ye?Ye.roofs:m.roofs).map(f=>new Re(f)),K=(Ye?Ye.flats:m.flats).map(f=>new Re(f));let Y=0;const te=[],X=[],V=f=>{const B=Math.sin(f*91.17)*43758.5453;return B-Math.floor(B)},ue=(f,B,j,L,N)=>{const[O,D,E,b,C]=f.hip,T=Math.cos(E),R=Math.sin(E),F=-R,k=T,G=f.p[0][0],P=(ie,de)=>{let ye=!1;for(let me=0,pe=G.length-2;me<G.length;pe=me,me+=2){const ve=G[me],Se=G[me+1],be=G[pe],se=G[pe+1];Se>de!=se>de&&ie<(be-ve)*(de-Se)/(se-Se)+ve&&(ye=!ye)}return ye},J=Pe?.08:.18;if(V(B*3.1)<J&&b>6){const ie=(V(B*5.3)-.5)*b*.6,de=(V(B*7.7)<.5?-1:1)*C*.12,ye=O+T*ie+F*de,me=D+R*ie+k*de;P(ye,me)&&te.push([ye,L+N(ie,de),me,E])}if(!Pe&&(j===2||j===3)&&C>7&&b>8&&V(B*11.3)<.16){const ie=V(B*13.9)<.5?-1:1,de=b>16?2:1;for(let ye=0;ye<de;ye++){const me=de===1?0:(ye===0?-.22:.22)*b,pe=ie*(C/2-Math.min(2.4,C*.28)),ve=O+T*me+F*pe,Se=D+R*me+k*pe;P(ve,Se)&&X.push([ve,L+N(me,pe),Se,E+(ie>0?0:Math.PI)])}}},ae=["#7d828c","#6f7a80","#8a8a90","#5f6b70"].map(f=>new Re(f)),le=new Re("#e6ddcf"),ge=new Re("#d6ccbb"),Ee=[],$=(f,B,j)=>{let L=!1;for(let N=0,O=f.length-2;N<f.length;O=N,N+=2){const D=f[N],E=f[N+1],b=f[O],C=f[O+1];E>j!=C>j&&B<(b-D)*(j-E)/(C-E)+D&&(L=!L)}return L},oe=(f,B,j)=>{const L=f.p[0]?.[0];if(!L)return;const N=Math.abs($n(L));if(N<60||V(B*15.1)>(Pe?.4:.7))return;let O=0,D=0;for(let R=0;R<L.length;R+=2)O+=L[R],D+=L[R+1];const E=O/(L.length/2),b=D/(L.length/2),C=N>300&&!Pe?2:1,T=Math.sqrt(N)*.22;for(let R=0;R<C;R++){const F=V(B*3.7+R)*6.283,k=E+Math.cos(F)*T*V(B+R*5.1),G=b+Math.sin(F)*T*V(B*2.9+R);$(L,k,G)&&Ee.push([k,j,G,R===0&&V(B*19.7)<.05?2:V(B*7.3+R)<.55?0:1,F])}},ee=new Map,Ae=(en?["#f0e2c4","#ddd6cc","#f3ede0","#e8d3a4","#ecd8bc","#d6cfc4","#efcfb4","#d4dccc","#f0d890","#b8553a","#a84c36"]:["#efe8d8","#dedcd6","#f3f0ea","#e6d8b8","#e9e2d2","#d4d3cf","#ecd9c4","#d6dcd4","#efe0a8","#b5583f","#a9533e"]).map(f=>new Re(f)),W=["#8c7c6a","#a3907a","#7a6e62","#c4aa82","#d6bd94","#b59b7a","#c86a40","#9a8672"].map(f=>new Re(f)),re=[.11,.11,.11,.1,.1,.08,.06,.05,.04,.12,.12],he=new Map,ce=Ln.get("lod")==="0"?1e9:Pe?1800:2400;for(const f of i.buildings){let B=ee.get(f.c);B||(B=new li,B.tex=!!h,ee.set(f.c,B));{let b=he.get(f.c);b||(b=new li,he.set(f.c,b));const C=f.p[0]?.[0],T=C?Math.abs($n(C)):0;if(C&&(T>30||f.h>12)){let R=1e9,F=0,k=0;if(tn)for(let ye=0;ye<C.length;ye+=2)R=Math.min(R,Ne(C[ye],C[ye+1])),F+=C[ye],k+=C[ye+1];const G=tn?Ne(F/(C.length/2),k/(C.length/2)):0,P=f.m>0?G+f.m:tn?R-.5:0,J=I[f.w%I.length],ie=f.hip?Q[f.r%(Q.length-1)]:K[f.r%K.length];let de=f.p[0];if(f.hip&&C.length>8){const[ye,me,pe,ve,Se]=f.hip,be=Math.cos(pe)*ve/2,se=Math.sin(pe)*ve/2,Be=-Math.sin(pe)*Se/2,xe=Math.cos(pe)*Se/2;de=[[ye-be-Be,me-se-xe,ye+be-Be,me+se-xe,ye+be+Be,me+se+xe,ye-be+Be,me-se+xe]],$n(de[0])*$n(C)<0&&(de[0]=[de[0][6],de[0][7],de[0][4],de[0][5],de[0][2],de[0][3],de[0][0],de[0][1]])}else C.length>10&&(de=[gE(C,Pe?3:2)]);zt(b,[de],P,G+f.h+(f.hip?1.5:0),J,ie)}}let j=0,L=0;if(tn&&f.p[0]?.[0]){const b=f.p[0][0];let C=0,T=0,R=0;L=1e9;for(let F=0;F<b.length;F+=2)C+=b[F],T+=b[F+1],R++,L=Math.min(L,Ne(b[F],b[F+1]));j=Ne(C/R,T/R),L-=.5}const N=f.m>0?j+f.m:L,O=j+f.h;if(ot<2){zt(B,f.p,N,O,le,ge);continue}Y++;let D=Ye?yn(I[(f.w+Y)%I.length],Y,.7):I[f.w],E=Ye?f.k??(f.hip?1:0):f.hip?1:0;if(h){const b=f.p[0]?.[0]||[0,0];let C=0,T=0;for(let me=0;me<b.length;me+=2)C+=b[me],T+=b[me+1];const R=C/(b.length/2),F=T/(b.length/2),G=i.origin[1]-F/110574<41.0195,P=Math.hypot(R-M[0],F-M[1])<900,J=E===4||f.h>=19||E===0&&f.h>=12,ie=V(Y*2.3);B.wl=J?2:G?ie<.06&&f.h<12?1:ie<.12?4:ie<.17?5:0:ie<.45?3:ie<.6?5:0,B.rl=f.g?7:6,B.base=N,B.wh=O-N,B.seed=Math.floor(V(Y*1.7)*997)/10;const de=Math.hypot(R-y[0],F-y[1])<750,ye=!P&&f.h>=11&&B.wl!==4&&B.wl!==5;if(B.st=(ye?8:0)+(ye&&V(Y*4.1)<.55?1:0)+(ye&&V(Y*5.9)<.3?2:0)+(f.h>=6&&V(Y*6.7)<(ye?.6:G?.3:.5)?4:0),ye){let me=V(Y*8.3),pe=0;for(;pe<Ae.length-1&&me>re[pe];)me-=re[pe],pe++;D=yn(Ae[pe],Y,.5),(en?f.h>=18&&!G&&!de&&E!==0&&V(Y*9.7)<.7:f.h>=14&&E!==0&&V(Y*9.7)<.7)&&(E=4,B.rl=2)}if(en&&!G&&!J&&E>=1&&E<=5){const me=V(Y*17.3);me<.12?(f.g=1,B.rl=7):(f.g=0,B.rl=6,me<.32&&(E=4,B.rl=2))}if(en&&de&&!J){const me=V(Y*10.9);D=yn(W[Math.floor(V(Y*11.3)*W.length)],Y,.5),me<.55&&(B.wl=V(Y*13.1)<.6?3:4)}}if(f.col&&(D=new Re(f.col),h&&(B.wl=0,B.st=0,B.rl=2)),f.hip&&E>=1&&E<=3){let b=Ye?yn(Q[(f.r+(Y%3===0?1:0))%(Q.length-1)],Y+7):Q[f.r%Q.length];if(en&&!f.g&&(b=yn(Q[(f.r+Y)%(Q.length-1)],Y+7,1.4),V(Y*12.7)<.14&&b.lerp(new Re("#9a8a80"),.3)),Ye&&f.g&&(b=yn(ae[Y%ae.length],Y+11,.6)),Ye&&el){zt(B,f.p,N,O,D,null);const C=E===3&&!f.g?yn(ae[(Y>>2)%ae.length],Y+5,.6):b,T=AE(B,f.p,f.hip,E,O,C,E===3?b.clone().multiplyScalar(.9):b,D,f.g?-1:7);ue(f,Y,E,O,T)}else zt(B,f.p,N,O,D,K[0]),E===2?hE(B,f.hip,O,b,D):E===3?uE(B,f.hip,O,Ye&&!f.g?yn(ae[(Y>>2)%ae.length],Y+5,.6):b,b.clone().multiplyScalar(.9)):zf(B,f.hip,O,b)}else if(Ye&&el&&E===5&&f.bd&&f.in){zt(B,f.p,N,O,D,null);const b=f.g?yn(ae[Y%ae.length],Y+11,.6):yn(Q[f.r%(Q.length-1)],Y+7);pE(B,f.bd,f.in,O,f.rh||2,b,yn(K[f.r%K.length],Y+3))}else if(Ye&&E===4){zt(B,f.p,N,O+.9,D,null),B.rl=2;for(const b of f.p)Ks(B,b,O,yn(K[f.r%K.length],Y+3));en&&oe(f,Y,O)}else B.rl=2,en&&f.h>=9&&oe(f,Y,O),zt(B,f.p,N,O,D,Ye?yn(K[f.r%K.length],Y+3):K[f.r%K.length])}const fe=new Je({vertexColors:!0,side:Ye?Mt:ai}),_e=new Je({vertexColors:!0,side:Ye?Mt:ai});if(te.length||X.length){const f=new He,B=new wt,j=new ne(1,1,1),L=new ne(0,1,0),N=new ne,O=new Rt(.8,2.2,.8).translate(0,.6,0),D=new Bt(O,new Je({color:"#b98068"}),te.length);te.forEach((J,ie)=>{B.setFromAxisAngle(L,-J[3]),f.compose(N.set(J[0],J[1],J[2]),B,j),D.setMatrixAt(ie,f)}),D.castShadow=D.receiveShadow=!0,D.computeBoundingSphere(),Ge.add(D),Sa.push(D);const E=new Rt(1.7,1.6,2).translate(0,.5,.3),b=new xt,C=1.05,T=1.3,R=2.1,F=-.8,k=1.45;b.setAttribute("position",new et([-C,T,F,-C,T,k,0,R,k,-C,T,F,0,R,k,0,R,F,C,T,k,C,T,F,0,R,F,C,T,k,0,R,F,0,R,k,-C,T,k,C,T,k,0,R,k].map(J=>J),3)),b.computeVertexNormals();const G=new Bt(E,new Je({color:"#efe1bd"}),X.length),P=new Bt(b,new Je({color:"#c8703c",side:Mt}),X.length);X.forEach((J,ie)=>{B.setFromAxisAngle(L,-J[3]),f.compose(N.set(J[0],J[1]-.4,J[2]),B,j),G.setMatrixAt(ie,f),P.setMatrixAt(ie,f)});for(const J of[G,P])J.castShadow=J.receiveShadow=!0,J.computeBoundingSphere(),Ge.add(J),Sa.push(J);Ke.__bits={chimneys:te.length,dormers:X.length}}if(Ee.length){const f=new He,B=new wt,j=new ne(1,1,1),L=new ne(0,1,0),N=new ne,O=[new Rt(1.7,1.4,1.7).translate(0,.7,0),new Rt(2.6,2.3,2.2).translate(0,1.15,0),new Cn(2.6,12,5,0,Math.PI*2,0,Math.PI/2)],D=["#a9a8a6","#cfc4b4","#8794a4"];for(let E=0;E<3;E++){const b=Ee.filter(T=>T[3]===E);if(!b.length)continue;const C=new Bt(O[E],new Je({color:D[E]}),b.length);b.forEach((T,R)=>{B.setFromAxisAngle(L,T[4]),f.compose(N.set(T[0],T[1],T[2]),B,j),C.setMatrixAt(R,f)}),C.castShadow=C.receiveShadow=!0,C.computeBoundingSphere(),Ge.add(C),Sa.push(C)}Ke.__boxes=Ee.length}for(const[f,B]of ee){const j=B.geometry();j.computeBoundingSphere();const L=j.boundingSphere.center.clone(),N=new nt(j,h?h.mat:_e);N.castShadow=N.receiveShadow=ot>=2;const O=he.get(f);if(!O||!O.pos.length||ce>1e8){Ge.add(N);continue}j.translate(-L.x,-L.y,-L.z);const D=O.geometry(),E=_u(L.x,L.z,u,A);E.bld.push(D.clone()),D.translate(-L.x,-L.y,-L.z);const b=new nt(D,fe);b.receiveShadow=ot>=2;const C=new Jr;C.position.copy(L),C.addLevel(N,0),C.addLevel(b,ce),Ge.add(C),E.members.push(C)}Vf=ce;for(const f of Wa.values())if(f.bld.length>1){const B=to(f.bld);if(f.bld.forEach(L=>L.dispose()),f.bld=[],!B)continue;B.computeBoundingSphere(),f.c.copy(B.boundingSphere.center),f.r=B.boundingSphere.radius;const j=new nt(B,fe);j.receiveShadow=ot>=2,j.visible=!1,Ge.add(j),f.merged.push(j)}else f.merged=[];if(Ke.__lod={far:ce,chunks:ee.size},va("before_trees"),ot>=4&&en&&Ln.get("xtrees")!=="0"){const f=[],B=i.trees.slice();for(let T=0;T<B.length;T++){const R=B[T];if(R[2]*=1.15+.4*V(T*1.3),R[4]===2){R.length=4;continue}if(V(T*2.1)<.6){const F=V(T*3.3)*6.283,k=4+3*V(T*4.7);f.push([R[0]+Math.cos(F)*k,R[1]+Math.sin(F)*k,.9+.5*V(T*5.9),(R[3]+1+T)%9])}}const j=new Map,L=40,N=(T,R)=>Math.floor(T/L)*100003+Math.floor(R/L);for(const T of i.buildings){const R=T.p[0]?.[0];if(!R)continue;let F=1e9,k=-1e9,G=1e9,P=-1e9;for(let J=0;J<R.length;J+=2)F=Math.min(F,R[J]),k=Math.max(k,R[J]),G=Math.min(G,R[J+1]),P=Math.max(P,R[J+1]);for(let J=Math.floor(F/L);J<=Math.floor(k/L);J++)for(let ie=Math.floor(G/L);ie<=Math.floor(P/L);ie++){const de=J*100003+ie;(j.get(de)||j.set(de,[]).get(de)).push(R)}}const O=(T,R,F)=>{for(const[k,G]of[[0,0],[F,0],[-F,0],[0,F],[0,-F]])for(const P of j.get(N(T+k,R+G))||[])if($(P,T+k,R+G))return!0;return!1};let D=0;for(const T of i.buildings)for(const R of T.p)for(let F=1;F<R.length;F++){const k=R[F],G=Math.abs($n(k));if(G<80)continue;let P=0,J=0;for(let pe=0;pe<k.length;pe+=2)P+=k[pe],J+=k[pe+1];const ie=P/(k.length/2),de=J/(k.length/2),ye=Math.min(4,1+Math.floor(G/250)),me=Math.sqrt(G)*.25;for(let pe=0;pe<ye;pe++){D++;const ve=V(D*1.9)*6.283,Se=ie+Math.cos(ve)*me*(pe?1:0),be=de+Math.sin(ve)*me*(pe?1:0);$(k,Se,be)&&f.push([Se,be,.85+.35*V(D),D%9])}}const E=i.water.map(T=>{const R=T[0];let F=1e9,k=1e9,G=-1e9,P=-1e9;for(let J=0;J<R.length;J+=2)F=Math.min(F,R[J]),G=Math.max(G,R[J]),k=Math.min(k,R[J+1]),P=Math.max(P,R[J+1]);return[F,k,G,P]}),b=(T,R)=>i.water.some((F,k)=>{const G=E[k];if(T<G[0]||T>G[2]||R<G[1]||R>G[3])return!1;let P=!1;for(const J of F)for(let ie=0,de=J.length-2;ie<J.length;de=ie,ie+=2)J[ie+1]>R!=J[de+1]>R&&T<(J[de]-J[ie])*(R-J[ie+1])/(J[de+1]-J[ie+1])+J[ie]&&(P=!P);return P});let C=0;for(const[T,R]of[["major",13],["minor",17]])for(const F of i.roads[T]||[]){const k=F[0],G=$n(k)>0?1:-1;for(let P=0;P<k.length;P+=2){const J=(P+2)%k.length,ie=k[J]-k[P],de=k[J+1]-k[P+1],ye=Math.hypot(ie,de);if(ye<4)continue;const me=de/ye*G,pe=-ie/ye*G;for(let ve=R*.5;ve<ye;ve+=R){if(C++,V(C*1.7)>.65)continue;const Se=k[P]+ie*(ve/ye)+me*2.6,be=k[P+1]+de*(ve/ye)+pe*2.6;!O(Se,be,2.5)&&!b(Se,be)&&f.push([Se,be,.75+.35*V(C*2.3),C%9])}}}i.trees=B.concat(f.filter((T,R)=>R%2===0).map(T=>[T[0],T[1],T[2],T[3],1])),Ke.__trees=i.trees.length}e&&(i.trees=i.trees.filter(f=>!t(f[0],f[1])));{const f=Ke.__dolmaRings;if(f){const B=i.trees.length,j=(E,b,C)=>{let T=!1;for(let R=0,F=E.length-2;R<E.length;F=R,R+=2)E[R+1]>C!=E[F+1]>C&&b<(E[F]-E[R])*(C-E[R+1])/(E[F+1]-E[R+1])+E[R]&&(T=!T);return T},L=Math.sin(.55),N=Math.cos(.55),O=[];for(const E of f)for(let b=0;b<E.length;b+=2)O.push([E[b]*N-E[b+1]*L,E[b]*L+E[b+1]*N]);const D=(E,b)=>{const C=E*N-b*L,T=E*L+b*N;let R=-1e9;for(const F of O)Math.abs(F[0]-C)<30&&(R=Math.max(R,F[1]));return R>-1e9&&T>R-2};i.trees=i.trees.filter(E=>!(sl(E[0],E[1])&&(E[4]===1||D(E[0],E[1])))&&!f.some(b=>j(b,E[0],E[1]))),Ke.__dolmaTrees=B-i.trees.length}}{const f=new Map,B=40,j=(T,R)=>Math.floor(T/B)*100003+Math.floor(R/B);for(const T of i.buildings){const R=T.p[0]?.[0];if(!R)continue;let F=1e9,k=-1e9,G=1e9,P=-1e9;for(let J=0;J<R.length;J+=2)F=Math.min(F,R[J]),k=Math.max(k,R[J]),G=Math.min(G,R[J+1]),P=Math.max(P,R[J+1]);for(let J=Math.floor(F/B);J<=Math.floor(k/B);J++)for(let ie=Math.floor(G/B);ie<=Math.floor(P/B);ie++){const de=J*100003+ie;(f.get(de)||f.set(de,[]).get(de)).push(R)}}const L=(T,R,F)=>{let k=!1;for(let G=0,P=T.length-2;G<T.length;P=G,G+=2)T[G+1]>F!=T[P+1]>F&&R<(T[P]-T[G])*(F-T[G+1])/(T[P+1]-T[G+1])+T[G]&&(k=!k);return k},N=(T,R)=>{for(const F of f.get(j(T,R))||[])if(L(F,T,R))return!0;return!1},O=i.water.map(T=>{const R=T[0];let F=1e9,k=1e9,G=-1e9,P=-1e9;for(let J=0;J<R.length;J+=2)F=Math.min(F,R[J]),G=Math.max(G,R[J]),k=Math.min(k,R[J+1]),P=Math.max(P,R[J+1]);return[F,k,G,P,T]}),D=(T,R)=>O.some(F=>{if(T<F[0]||T>F[2]||R<F[1]||R>F[3])return!1;let k=!1;for(const G of F[4])for(let P=0,J=G.length-2;P<G.length;J=P,P+=2)G[P+1]>R!=G[J+1]>R&&T<(G[J]-G[P])*(R-G[P+1])/(G[J+1]-G[P+1])+G[P]&&(k=!k);return k});let E=[];try{E=((await(await fetch("./data/landuse.json")).json()).pitch||[]).map(R=>R[0])}catch{}const b=(T,R)=>E.some(F=>L(F,T,R)),C=i.trees.length;i.trees=i.trees.filter(T=>!N(T[0],T[1])&&!D(T[0],T[1])&&!b(T[0],T[1]));try{const T=await(await fetch("./data/wm11b.json")).json(),R=T.no_tree||[],F=i.trees.length;i.trees=i.trees.filter(k=>!R.some(G=>L(G,k[0],k[1])));for(const k of T.garden_trees||[])!N(k[0],k[1])&&!R.some(G=>L(G,k[0],k[1]))&&i.trees.push([k[0],k[1],k[2],k[3],2]);Ke.__wm11bTreeDrop=F-(i.trees.length-(T.garden_trees||[]).length)}catch{}Ke.__treeFootprintFiltered=C-i.trees.length,Ke.__trees=i.trees.length}if(ot>=4&&i.trees.length){const f=new Ft(.3,.42,3.2,5).translate(0,1.6,0),B=new Ao(3.3,0).translate(0,4.2,0),j=new eo(3.6,0).translate(0,4.2,0),L=new Je({color:"#7a5a3c"}),N=new Je({flatShading:!0}),O=(Ye?Ye.trees:["#d9822b","#e6ad3c","#b8532c","#8f9d3e","#c96f2d"]).map(k=>new Re(k)),D=new Map;for(const k of i.trees){const G=Math.floor((k[0]-u)/500)+1e3*Math.floor((k[1]-A)/500)+(k[4]===1?1e7:0);(D.get(G)||D.set(G,[]).get(G)).push(k)}const E=new He,b=new wt,C=new ne,T=new ne,R=new ne(0,1,0);let F=0;for(const k of D.values()){const G=!!k[0][4];G&&k.sort((Se,be)=>V(Se[0]*.37+Se[1]*.71)-V(be[0]*.37+be[1]*.71));const P=new Bt(f,L,k.length),J=new Bt(B,N,k.length);let ie=0,de=0;for(const Se of k)ie+=Se[0],de+=Se[1];ie/=k.length,de/=k.length;const ye=new Bt(j,N,Math.ceil(k.length/2));let me=0;k.forEach((Se,be)=>{F++;const se=Se[2];T.set(Se[0]-ie,Ne(Se[0],Se[1]),Se[1]-de),b.setFromAxisAngle(R,F*2.39996%6.283),C.set(se,se*(.9+F%5*.06),se),E.compose(T,b,C);const Be=Ye?yn(O[(Se[3]+F)%O.length],F,.8):O[Se[3]%O.length];P.setMatrixAt(be,E),J.setMatrixAt(be,E),J.setColorAt(be,Be),be%2===0&&(ye.setMatrixAt(me,E),ye.setColorAt(me,Be),me++)}),P.computeBoundingSphere(),J.computeBoundingSphere(),ye.computeBoundingSphere(),J.castShadow=!G,J.receiveShadow=!0,P.castShadow=!1,ye.receiveShadow=!0,G&&Wf.push([P,J,k.length]);const pe=new Sn;pe.add(P,J);const ve=new Jr;ve.position.set(ie,0,de),ve.addLevel(pe,0),ve.addLevel(ye,ce*.8),Ge.add(ve);{const Se=_u(ie,de,u,A);Se.members.push(ve);const be=new He,se=new He().makeTranslation(ie,0,de),Be=new Re;for(let xe=0;xe<me;xe+=Pe?2:1)ye.getMatrixAt(xe,be),ye.getColorAt(xe,Be),Se.trees.push({m:se.clone().multiply(be),c:Be.clone()})}}}for(const f of Wa.values())if(f.trees.length&&f.members.length>1){const B=new Bt(new eo(3.6,0).translate(0,4.2,0),new Je({flatShading:!0}),f.trees.length);f.trees.forEach((j,L)=>{B.setMatrixAt(L,j.m),B.setColorAt(L,j.c)}),B.computeBoundingSphere(),B.receiveShadow=!0,B.visible=!1,Ge.add(B),f.merged.push(B),f.r||(f.c.copy(B.boundingSphere.center),f.r=B.boundingSphere.radius),f.trees=[]}if(va("before_landmarks"),ot>=6){for(const f of i.landmarks){f.id==="suleymaniye"&&(f.prims=[]);const B=new li;B.tex=!!h,f.prims.forEach((L,N)=>{if(B.seed=V(N*3.1+f.label[0])*100,L.t==="lathe"){lE(B,L);return}const O=new Re(L.col);if(B.wl=L.tx??8,B.rl=L.t==="pave"?10:L.tx??8,B.base=L.z0,B.ridge=0,L.t==="prism")B.wh=L.z1-L.z0,B.st=L.st||128,zt(B,L.p,L.z0,L.z1,O,O.clone().multiplyScalar(.95));else if(L.t==="pave")for(const D of L.p)Ks(B,D,L.z0,O);else L.t==="lowroof"&&(B.rl=9,B.wh=.8,B.st=128,zt(B,L.p,L.z0,L.z0+.8,Ye?O.set("#7b8a9c"):O,O))});const j=Ne(f.label[0],f.label[1]);if(f.prims.length){const L=new nt(B.geometry().translate(0,j,0),h?h.mat:fe);L.castShadow=L.receiveShadow=!0,Ge.add(L)}if(f.model&&f.id==="ayasofya"){const L=await P_({base:"./",project:d,groundY:Ne,lodDistance:900*(kt?1/hs:1)});Ge.add(L.object),Ke.__aya={lodTriangles:L.triangles,at:[Math.round(L.object.position.x*10)/10,Math.round(L.object.position.z*10)/10]}}if(f.model&&f.id==="sultanahmet"){const L=await N_({base:"./",project:d,groundY:Ne,lodDistance:800*(kt?1/hs:1)});Ge.add(L.object),Ke.__lm={...Ke.__lm||{},sultanahmet:{lodTriangles:L.triangles,at:[Math.round(L.object.position.x*10)/10,Math.round(L.object.position.z*10)/10]}}}if(f.model&&(f.id==="yenicami"||f.id==="rustempasa"||f.id==="galata"||f.id==="nusretiye"||f.id==="ayatriada"||f.id==="stantoine")){const N=await(["nusretiye","ayatriada","stantoine"].includes(f.id)?O=>V_(f.id,O):f.id==="yenicami"?Q_:f.id==="galata"?z_:k_)({base:"./",project:d,groundY:Ne,lodDistance:700*(kt?1/hs:1)});Ge.add(N.object),Ke.__lm={...Ke.__lm||{},[f.id]:{lodTriangles:N.triangles,at:[Math.round(N.object.position.x*10)/10,Math.round(N.object.position.z*10)/10]}}}if(f.model&&f.id==="topkapi"){const L=await F_({base:"./",project:d,groundY:Ne,lodDistance:700*(kt?1/hs:1)});if(tn){L.object.updateMatrixWorld(!0);const N=L.object.position.y,O=new ne,D=new Set;L.object.traverse(E=>{if(!E.isMesh||D.has(E.geometry))return;D.add(E.geometry);const b=E.geometry,C=b.attributes.position,T=new ne().setFromMatrixScale(E.matrixWorld).y||1,R=new Float32Array(C.count*3);for(let F=0;F<C.count;F++){O.fromBufferAttribute(C,F);const k=O.x,G=O.y,P=O.z;O.applyMatrix4(E.matrixWorld),R[F*3]=k,R[F*3+1]=G+((il(O.x,O.z)?As:Ne(O.x,O.z))-N)/T,R[F*3+2]=P}b.setAttribute("position",new Lt(R,3)),b.computeBoundingBox(),b.computeBoundingSphere()})}if(tn){const N=qi,O=[];for(let C=0,T=N.length-2;C<N.length;T=C,C+=2){const R=N[T],F=N[T+1],k=N[C],G=N[C+1],P=Math.hypot(k-R,G-F),J=Math.max(1,Math.round(P/6));let ie=(G-F)/P,de=-(k-R)/P;const ye=(R+k)/2,me=(F+G)/2;il(ye+ie*3,me+de*3)&&(ie=-ie,de=-de);for(let pe=0;pe<J;pe++){const ve=(pe+.5)/J,Se=R+(k-R)*ve+ie*1.4,be=F+(G-F)*ve+de*1.4,se=Math.min(Ne(Se+ie*2,be+de*2),Ne(Se,be),fs(Se-(k-R)/J*.5,be-(G-F)/J*.5),fs(Se+(k-R)/J*.5,be+(G-F)/J*.5));As-se<1||O.push([Se,be,P/J+.6,se-2.5,As+1.2,Math.atan2(-(G-F),k-R)])}}const D=new Bt(new Rt(1,1,1),new Je({color:"#cbbda2"}),O.length);D.name="aud:wall";const E=new He,b=new wt;O.forEach((C,T)=>{b.setFromAxisAngle(new ne(0,1,0),C[5]),E.compose(new ne(C[0],(C[3]+C[4])/2,C[1]),b,new ne(C[2],C[4]-C[3],2.8)),D.setMatrixAt(T,E)}),D.castShadow=D.receiveShadow=!0,Ge.add(D),Ke.__tkWalls={n:O.length,maxH:Math.round(Math.max(0,...O.map(C=>As-C[3]-2.5)))}}if(tn){const N=Yi,O=[];for(let D=0,E=N.length-2;D<N.length;E=D,D+=2){const b=N[E],C=N[E+1],T=N[D],R=N[D+1],F=Math.hypot(T-b,R-C)||1,k=Math.max(1,Math.round(F/8));let G=(R-C)/F,P=-(T-b)/F;const J=(b+T)/2,ie=(C+R)/2;sl(J+G*3,ie+P*3)&&(G=-G,P=-P);for(let de=0;de<k;de++){const ye=(de+.5)/k,me=b+(T-b)*ye,pe=C+(R-C)*ye,ve=fs(me+G*6,pe+P*6);ve-Vn>2?O.push([me,pe,F/k+.5,Vn-2.5,ve+.6,Math.atan2(-(R-C),T-b)]):Vn-ve>1&&O.push([me,pe,F/k+.5,Vn-2.5,Vn+1.1,Math.atan2(-(R-C),T-b)])}}if(O.length){const D=new Bt(new Rt(1,1,1),new Je({color:"#d8d2c4"}),O.length);D.name="aud:wall";const E=new He,b=new wt;O.forEach((C,T)=>{b.setFromAxisAngle(new ne(0,1,0),C[5]),E.compose(new ne(C[0],(C[3]+C[4])/2,C[1]),b,new ne(C[2],Math.max(1.2,C[4]-C[3]),1.8)),D.setMatrixAt(T,E)}),D.castShadow=D.receiveShadow=!0,Ge.add(D),Ke.__dhWalls={n:O.length}}}try{const N=Ke.__dolmaDome;if(N&&N.length){const O=new li,D=new Re("#7a858f");for(const b of N){const C=Vn+b.y0,T=Vn+b.y1,R=14;for(let F=0;F<R;F++){const k=F/R*Math.PI*2,G=(F+1)/R*Math.PI*2,P=b.x+Math.cos(k)*b.r,J=b.z+Math.sin(k)*b.r,ie=b.x+Math.cos(G)*b.r,de=b.z+Math.sin(G)*b.r;O.tri([P,C,J],[ie,T,de],[ie,C,de],D),O.tri([P,C,J],[P,T,J],[ie,T,de],D),O.tri([P,T,J],[b.x,T+(T-C)*.15,b.z],[ie,T,de],D)}}const E=new nt(O.geometry(),new Je({vertexColors:!0}));E.castShadow=E.receiveShadow=!0,Ge.add(E)}}catch{}Ge.add(L.object),Ke.__lm={...Ke.__lm||{},topkapi:{lodTriangles:L.triangles,at:[Math.round(L.object.position.x*10)/10,Math.round(L.object.position.z*10)/10]}}}{const L={ayasofya:2.6,sultanahmet:.9,suleymaniye:3.9,yenicami:3.6,galata:.4,topkapi:.8,nusretiye:.6,ayatriada:2.7,stantoine:4.75};Ue["lm_"+f.id]={t:[f.label[0],f.label[1]],d:f.id==="galata"?240:["nusretiye","ayatriada","stantoine"].includes(f.id)?150:360,pol:1.15,y:f.id==="topkapi"?5:f.id==="galata"?30:["nusretiye","ayatriada","stantoine"].includes(f.id)?12:24,az:L[f.id]??0},f.id==="ayasofya"&&(Ue.hd_apse={t:[117,1675],d:95,pol:.95,y:14,az:.98},Ue.hd_apse_s={t:[117,1675],d:95,pol:.95,y:14,az:1.9},Ue.hd_pilot={t:[95,1662],d:230,pol:.85,y:20,az:2.9}),f.id==="stantoine"&&(Ue.sa_top={t:[-172.4,-977.5],d:215,pol:.02,y:0,az:-1.897},Ue.sa_obl={t:[-155.3,-971.7],d:150,pol:.82,y:8,az:-1.254}),f.id==="topkapi"&&(Ue.tk_wide={t:[395,1245],d:820,pol:.95,y:5,az:.8})}Ct(f.name,f.label[0],f.label[2]+j,f.label[1],f.id==="rustempasa"?"w":f.id==="yenicami"?"e":f.id==="ayatriada"?"below":"")}try{const f=await(await fetch("./data/wm11_landmarks.json")).json();if(f.wm15=ft,Ge.add(q_(f,Ne)),Ke.__wm11=!0,l&&Ge.add($_(l,Ne)),ft){const j=ft.beyazit_tower;j&&Ct("Beyazıt Kulesi",j.x,Ne(j.x,j.z)+92,j.z,"near");for(const L of ft.mosques||[])/Beyazıt|Şehzade|Laleli|Kılıç|Mihrimah|Yavuz/.test(L.n)&&Ct(L.n.replace(/ (Camii|Cami)$/," Camii"),L.x,Ne(L.x,L.z)+52,L.z,"near");Ue.w15_beyazit={t:[-1170,1400],d:Pe?560:460,pol:.95,y:10,az:2.6},Ue.w16_misir={t:[-660,770],d:Pe?420:330,pol:.92,y:6,az:3.6},Ue.w15_karakoy={t:[-420,230],d:Pe?330:270,pol:1,y:4,az:.9},Ue.w15_yedikule={t:[-4690,3365],d:Pe?480:400,pol:.9,y:8,az:-.6},Ue.w15_kabatas={t:[1230,-1110],d:Pe?420:340,pol:.95,y:2,az:1.2},Ue.w15_seawall={t:[-1800,2450],d:Pe?1500:1200,pol:.85,y:0,az:.2},Ue.w15_sehzade={t:[-1830,1075],d:Pe?700:560,pol:.95,y:10,az:2.6},Ue.w15_misir_gate={t:[-655,700],d:Pe?160:130,pol:1.05,y:6,az:-.9},Ue.w15_fatih={t:[-2455,415],d:Pe?420:340,pol:.95,y:12,az:2.6}}const B=(j,L,N=28)=>Ne(j,L)+N;if(Ct("Mısır Çarşısı",f.misir.x,B(f.misir.x,f.misir.z,24),f.misir.z),Ct("Nuruosmaniye",f.nuruosmaniye.x,B(f.nuruosmaniye.x,f.nuruosmaniye.z,36),f.nuruosmaniye.z),Ct("Fatih Camii",f.fatih.x,B(f.fatih.x,f.fatih.z,40),f.fatih.z),Ct("Küçük Ayasofya",f.kucukayasofya.x,B(f.kucukayasofya.x,f.kucukayasofya.z,28),f.kucukayasofya.z),Ct("Çırağan Sarayı",3049.3,B(3049.3,-2208,32),-2208),Ue.lm_misir={t:[f.misir.x,f.misir.z],d:Pe?280:220,pol:.95,y:12,az:.55},Ue.lm_nuruosmaniye={t:[f.nuruosmaniye.x,f.nuruosmaniye.z],d:Pe?280:220,pol:1.05,y:14,az:-.4},Ue.lm_fatih={t:[f.fatih.x,f.fatih.z],d:Pe?420:340,pol:.95,y:16,az:-.2},Ue.lm_kucukayasofya={t:[f.kucukayasofya.x,f.kucukayasofya.z],d:Pe?220:180,pol:1.05,y:10,az:.8},Ue.lm_ciragan={t:[3049.3,-2208],d:Pe?380:300,pol:1.05,y:10,az:2.4},Tt){const j=new Sn;j.name="wm14_bjk_lm";const L=new Map,N=T=>{let R=L.get(T);return R||(R=new Je({color:T}),L.set(T,R)),R},O=(T,R,F,k,G,P=0)=>{const J=new nt(T,N(R));return J.position.set(F,k,G),J.rotation.y=P,J.castShadow=J.receiveShadow=!0,j.add(J),J},D=Tt.poi||{},E="#e6dcc8",b="#8496aa";if(D["Barbaros Hayrettin Türbesi"]){const[T,R]=D["Barbaros Hayrettin Türbesi"],F=Ne(T,R);O(new Ft(4.6,4.6,7,8),E,T,F+3.5,R,Math.PI/8),O(new Ft(3.9,3.9,1.4,16),E,T,F+7.7,R),O(new Cn(3.9,14,6,0,Math.PI*2,0,Math.PI/2),b,T,F+8.4,R);const k=T+16,G=R+20,P=Ne(k,G);O(new Rt(9,1.2,9),"#d9d3c6",k,P+.6,G),O(new Rt(4.2,6.5,4.2),"#cfc7b6",k,P+4.45,G),O(new Ft(.75,1,3.8,8),"#4d5a4f",k,P+9.6,G),O(new Cn(.62,8,6),"#4d5a4f",k,P+11.9,G),Ct("Barbaros Türbesi",T,F+18,R,"below near")}for(const[T,R,F]of Tt.piers||[]){if(F<500)continue;const k=Math.max(0,Ne(T,R))+1.4;O(new Rt(22,5.5,12),"#efe7d6",T,k+2.75,R,.62),O(new ei(13.5,3.2,4),"#8a8f95",T,k+7.1,R,.62+Math.PI/4).scale.set(1.25,1,.7)}if(D["Yıldız Clock Tower"]){const[T,R]=D["Yıldız Clock Tower"],F=Ne(T,R);O(new Rt(3.6,15,3.6),"#e9dcc0",T,F+7.5,R),O(new Rt(4.2,4,4.2),"#f0e6d0",T,F+17,R),O(new ei(2.6,4.5,4),"#7d858c",T,F+21.2,R,Math.PI/4)}Ge.add(j);const C=(T,R,F,k="")=>{const G=D[T];G&&Ct(R,G[0],Ne(G[0],G[1])+F,G[1],(k+" near").trim())};C("Sinan Paşa Camisi","Sinan Paşa Camii",34),C("Deniz Müzesi","Deniz Müzesi",26,"w"),C("Yıldız Hamidiye Camii","Yıldız Camii",34),C("Yıldız Parkı","Yıldız Parkı",30),C("Ihlamur Kasrı (Merasim Köşkü)","Ihlamur Kasrı",22),C("Abbasağa Camii","Abbasağa",26),C("Beşiktaş Dentur İskelesi","Beşiktaş İskelesi",18,"e"),Ct("Beşiktaş Çarşı",2215,Ne(2215,-2190)+30,-2190),Ct("Barbaros Bulvarı",2470,Ne(2470,-2520)+26,-2520,"near"),Ue.besiktas={t:[2300,-2100],d:Pe?700:560,pol:.95,y:10,az:3.3},Ue.besiktas_iskele={t:[2330,-2e3],d:Pe?380:300,pol:1,y:6,az:3.6},Ue.besiktas_barbaros={t:[2480,-2550],d:Pe?900:760,pol:.85,y:20,az:3.9},Ue.besiktas_wide={t:[2550,-2350],d:Pe?2100:1800,pol:.7,y:0,az:3.5},Ue.besiktas_top={t:[2600,-2370],d:Pe?2300:2e3,pol:.02,y:0,az:0}}if(Ue.lm_clock={t:[f.clock.x,f.clock.z],d:Pe?160:130,pol:1.15,y:8,az:2.4},Ue.taksim_anit={t:[f.taksim_anit.x,f.taksim_anit.z],d:Pe?90:70,pol:1.15,y:4,az:3.4},Ue.kizkulesi={t:[2108.2,265.4],d:Pe?220:180,pol:1.05,y:8,az:2.6},Ue.haydarpasa={t:[3328,3030],d:Pe?460:380,pol:1,y:12,az:-.9},Ue.misir_sw={t:[f.misir.x,f.misir.z],d:Pe?260:200,pol:1.05,y:10,az:-.75},Ue.misir_high={t:[f.misir.x-20,f.misir.z-10],d:Pe?340:280,pol:.52,y:8,az:.35},Ue.misir_top={t:[f.misir.x-10,f.misir.z-15],d:Pe?280:230,pol:.06,y:0,az:.15},Ue.misir_drone={t:[f.misir.x-15,f.misir.z-20],d:Pe?210:170,pol:.88,y:8,az:.12},Ue.misir_ref_top={t:[f.misir.x-18,f.misir.z-20],d:Pe?310:255,pol:.045,y:0,az:0},Ue.misir_ref_obl={t:[f.misir.x-12,f.misir.z-8],d:Pe?270:220,pol:.7,y:10,az:.42},f.stadium&&(Ue.stad_se={t:[f.stadium.x,f.stadium.z],d:Pe?480:420,pol:.7,y:18,az:.85},Ue.stad_nw={t:[f.stadium.x,f.stadium.z],d:Pe?460:400,pol:.92,y:22,az:-2.15},Ue.stad_close={t:[f.stadium.x,f.stadium.z],d:Pe?250:210,pol:1.05,y:10,az:.35},Ct("Beşiktaş Stadyumu",f.stadium.x,B(f.stadium.x,f.stadium.z,38),f.stadium.z)),kt)for(const j of["lm_misir","lm_nuruosmaniye","lm_fatih","lm_kucukayasofya","lm_ciragan","lm_clock","taksim_anit","kizkulesi","haydarpasa","misir_sw","misir_high","misir_ref_top","misir_ref_obl","stad_se","stad_nw","stad_close"])Ue[j]&&(Ue[j].d/=hs)}catch(f){console.warn("wm11 extras skipped",f)}}if(Ct("Taksim",v[0],5+Ne(v[0],v[1]),v[1],"area"),ot>=5){const f=document.getElementById("tod");f.hidden=!1;const B=document.getElementById("hour");Fn&&!Ln.get("hour")&&(B.value=String(kf)),Ln.get("hour")&&(B.value=String(Math.min(17.5,Math.max(7.5,Number(Ln.get("hour"))||14)))),B.min="7.5",B.max="17.5",B.addEventListener("input",()=>tl(Number(B.value))),tl(Number(B.value))}document.getElementById("loading").remove();try{const f=await(await fetch("./data/aqueduct.json")).json(),B=f.line,j=13.5,L=[];for(let P=0;P<B.length-1;P++){const[J,ie]=B[P],[de,ye]=B[P+1],me=Math.hypot(de-J,ye-ie);if(me>60)continue;const pe=Math.max(1,Math.round(me/j));for(let ve=0;ve<pe;ve++)L.push([J+(de-J)*ve/pe,ie+(ye-ie)*ve/pe,Math.atan2(-(ye-ie),de-J),me/pe])}let N=1e9,O=-1e9;for(const P of L){const J=Ne(P[0],P[1]);N=Math.min(N,J),O=Math.max(O,J)}const D=Math.max(N+f.hmax,O+4),E=[];for(const[P,J,ie,de]of L){const ye=Ne(P,J);D-9>ye&&E.push([P,J,ie,4.2,ye-1,D-9,f.w]),E.push([P,J,ie,de+.05,Math.max(ye-1,D-9.5),D-7.5,f.w+.6]),E.push([P,J,ie,3,Math.max(ye-1,D-7.5),D-2,f.w-.4]),E.push([P,J,ie,de+.05,Math.max(ye-1,D-2),D,f.w])}const b=new He,C=new wt,T=new ne(0,1,0),R=new ne,F=new ne,k=uc(new Je({color:"#b9a98c"}));for(const[P,J]of[[E.filter(ie=>ie[4]<ie[5]-6||ie[3]===4.2),"aud:wall"],[E.filter(ie=>!(ie[4]<ie[5]-6||ie[3]===4.2)),"aqueduct-spans"]]){const ie=new Bt(new Rt(1,1,1),k,Math.max(1,P.length));ie.name=J,ie.count=P.length,P.forEach(([de,ye,me,pe,ve,Se,be],se)=>ie.setMatrixAt(se,b.compose(R.set(de,(ve+Se)/2,ye),C.setFromAxisAngle(T,me),F.set(pe,Se-ve,be)))),ie.castShadow=ie.receiveShadow=ot>=2,Ge.add(ie)}const G=B[Math.floor(B.length/2)];Ct("Bozdoğan Kemeri",G[0],D+12,G[1]),Ke.__aq={piers:L.length,top:Math.round(D)}}catch(f){console.warn("aqueduct skipped",f)}for(const f of["dikilitas","ormedikilitas","yilanlisutun","almancesmesi"])try{const B=await ys(f,{base:"./",project:d,groundY:Ne,lodDistance:1500});B.object.name="aud:monument",Ge.add(B.object)}catch(B){console.warn("monument skipped",f,B)}Ct("Dikilitaş",-302,Ne(-302,1943)+30,1943),Ct("Alman Çeşmesi",-260,Ne(-260,1784)+16,1784),Ue.hipodrom={t:[-310,1930],y:8,d:Pe?420:330,pol:.85,az:2.2},Ue.sarayburnu={t:[430,1e3],y:20,d:Pe?900:700,pol:1,az:.3},Ue.bozdogan={t:[-1900,880],y:25,d:Pe?520:420,pol:1.2,az:2.2},Ue.pool={t:[-70,1800],y:30,d:Pe?330:260,pol:.95,az:.3},Ue.galata_slope={t:[-420,-150],y:30,d:Pe?600:480,pol:1.05,az:.4},Ue.taksim={t:[520,-1500],y:10,d:Pe?520:420,pol:.55,az:.2},Ue.dolmabahce={t:[1780,-1740],y:10,d:Pe?650:520,pol:.85,az:-.6},Ue.dolma_sea={t:[1800,-1740],y:8,d:Pe?700:560,pol:1.15,az:.55},Ue.mid_gumussuyu={t:[1e3,-1600],y:25,d:Pe?700:560,pol:.95,az:.5},Ue.suleymaniye_s={t:[-1260,820],y:30,d:Pe?600:480,pol:1,az:2.4},va("ready"),Ke.__scene=Ge,qf()}let Dn=null;const zr=new go(Kx),Gr=new go(Jx);function ME(){if(!iE)return;const i=window.innerWidth,e=window.innerHeight;Dn=new Sx(on),Dn.setPixelRatio(Math.min(window.devicePixelRatio,2)),Dn.setSize(i,e),Dn.addPass(new Ix(Ge,ri));const t=new hi(Ge,ri,i,e);t.updateGtaoMaterial({radius:12,distanceExponent:1.4,thickness:6,scale:1.4,samples:12,distanceFallOff:1,screenSpaceRadius:!1}),t.blendIntensity=1,Dn.addPass(t),Dn.addPass(new aa(new ke(i,e),.1,.5,.95)),zr.uniforms.h.value=2.2/i,Gr.uniforms.v.value=2.2/e,zr.uniforms.r.value=Gr.uniforms.r.value=.5,Dn.addPass(zr),Dn.addPass(Gr),Dn.addPass(new Ux),Dn.addPass(new go({uniforms:{tDiffuse:{value:null}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`uniform sampler2D tDiffuse; varying vec2 vUv;
      void main(){ vec4 c = texture2D(tDiffuse, vUv); vec3 x = c.rgb;
        float l = dot(x, vec3(0.299, 0.587, 0.114));
        x = mix(vec3(l), x, ${en?"1.12":"1.08"});                       // more saturation
        x = (x - 0.5) * ${en?"1.1":"1.06"} + 0.5;                       // a little more contrast, no milky lift
        vec2 q = vUv - 0.5; x *= 1.0 - 0.35 * dot(q, q);  // soft vignette like the Warsaw frames
        gl_FragColor = vec4(clamp(x, 0.0, 1.0), c.a); }`}))}ME();const Wa=new Map;let Vf=1e9;const Sa=[],_u=(i,e,t,n)=>{const s=Math.floor((i-t)/1500)+1e3*Math.floor((e-n)/1500);let a=Wa.get(s);return a||(a={key:s,bld:[],trees:[],members:[],merged:[],c:new ne,r:0},Wa.set(s,a)),a};function yE(){for(const i of Wa.values()){if(!i.merged.length)continue;const e=ri.position.distanceTo(i.c)-i.r>Vf;for(const t of i.merged)t.visible=e;for(const t of i.members)t.visible=!e}}const Wf=[];let Eu=-1;function jf(){En.update(),an.target.position.copy(En.target),an.position.copy(En.target).addScaledVector(Nf,3e3);const i=ri.position.distanceTo(En.target),e=i*hs,t=e>3200?2:e>1800?1:0;if(t!==Eu){Eu=t;for(const[a,r,o]of Wf)a.count=r.count=t===2?Math.ceil(o*.3):t===1?Math.ceil(o*.65):o}const n=bn.clamp(e*.75,250,2600),s=an.shadow.camera;s.right!==n&&(s.left=-n,s.right=n,s.top=n,s.bottom=-n,s.updateProjectionMatrix()),Fn&&Ge.fog instanceof lo&&(en?(Ge.fog.near=i*.95,Ge.fog.far=i+e*1.3+5e3):kt?(Ge.fog.near=i*.8,Ge.fog.far=i+e*.6+3500):(Ge.fog.near=i*2.2,Ge.fog.far=i*9+6e3)),yE();{const a=e<3e3;for(const r of Sa)r.visible=a}if(Dn){const a=bn.clamp(2-e/2500,.4,1.6);zr.uniforms.h.value=a/window.innerWidth,Gr.uniforms.v.value=a/window.innerHeight,Dn.render()}else on.render(Ge,ri);bE(),Ke.__frames=(Ke.__frames||0)+1,requestAnimationFrame(jf)}window.addEventListener("resize",()=>{ri.aspect=window.innerWidth/window.innerHeight,ri.updateProjectionMatrix(),on.setSize(window.innerWidth,window.innerHeight),Dn?.setSize(window.innerWidth,window.innerHeight)});Object.assign(Ke,{__setView:Hf,__controls:En,__renderer:on,__stats:()=>({texMB:Ke.__texMB,triangles:on.info.render.triangles,calls:on.info.render.calls,geometries:on.info.memory.geometries})});vE().then(()=>requestAnimationFrame(jf));
