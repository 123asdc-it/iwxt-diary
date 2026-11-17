/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */var At={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},bt={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3};var na=0,cd=1,Vs=2;var Ll=1;var Zh=5,li=100,hd=101,ud=102;var dd=200,pd=201,fd=202,md=203,Wi=204,ji=205,gd=206,yd=207,vd=208,xd=209,Sd=210,_d=211,Ad=212,Md=213,Ed=214,Td=0,bd=1,Cd=2,wd=3,Rd=4,Id=5,Pd=6,Dd=7;var Jh=300,Xi=301,qi=302,oo=303,lo=304,ia=306,co=1e3,Is=1001,ho=1002,on=1003,Bd=1004;var Js=1005;var Tn=1006,wa=1007;var Hi=1008;var fn=1009,$h=1010,eu=1011,Ps=1012,Fl=1013,qt=1014,Jt=1015,qn=1016,Ul=1017,Ol=1018,Yi=1020,tu=35902,nu=1021,iu=1022,Ot=1023,su=1024,ru=1025,di=1026,Qi=1027,au=1028,Gs=1029,sa=1030,Nl=1031;var yi=1033,wr=33776,Rr=33777,Ir=33778,Pr=33779,uo=35840,po=35841,fo=35842,mo=35843,go=36196,yo=37492,vo=37496,xo=37808,So=37809,_o=37810,Ao=37811,Mo=37812,Eo=37813,To=37814,bo=37815,Co=37816,wo=37817,Ro=37818,Io=37819,Po=37820,Do=37821,Dr=36492,Bo=36494,Lo=36495,ou=36283,Fo=36284,Uo=36285,Oo=36286;var Br=2300,No=2301,Ra=2302,qc=2400,Yc=2401,Qc=2402;var Oi="",kt="srgb",ss="srgb-linear",ra="linear",Qe="srgb";var Ei=7680;var Ld=512,Fd=513,Ud=514,Od=515,Nd=516,Hd=517,zd=518,kd=519,Kc=35044,lu=35048;var Zc="300 es",Ki=2e3,Lr=2001,cn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let n=this._listeners[e];if(n!==void 0){let i=n.indexOf(t);i!==-1&&n.splice(i,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let t=this._listeners[e.type];if(t!==void 0){e.target=this;let n=t.slice(0);for(let i=0,r=n.length;i<r;i++)n[i].call(this,e);e.target=null}}},It=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Jc=1234567,ki=Math.PI/180,Ds=180/Math.PI;function vi(){let s=4294967295*Math.random()|0,e=4294967295*Math.random()|0,t=4294967295*Math.random()|0,n=4294967295*Math.random()|0;return(It[255&s]+It[s>>8&255]+It[s>>16&255]+It[s>>24&255]+"-"+It[255&e]+It[e>>8&255]+"-"+It[e>>16&15|64]+It[e>>24&255]+"-"+It[63&t|128]+It[t>>8&255]+"-"+It[t>>16&255]+It[t>>24&255]+It[255&n]+It[n>>8&255]+It[n>>16&255]+It[n>>24&255]).toLowerCase()}function yt(s,e,t){return Math.max(e,Math.min(t,s))}function Ho(s,e){return(s%e+e)%e}function bs(s,e,t){return(1-t)*s+t*e}function Ni(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Ft(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(4294967295*s);case Uint16Array:return Math.round(65535*s);case Uint8Array:return Math.round(255*s);case Int32Array:return Math.round(2147483647*s);case Int16Array:return Math.round(32767*s);case Int8Array:return Math.round(127*s);default:throw new Error("Invalid component type.")}}var rs={DEG2RAD:ki,RAD2DEG:Ds,generateUUID:vi,clamp:yt,euclideanModulo:Ho,mapLinear:function(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)},inverseLerp:function(s,e,t){return s!==e?(t-s)/(e-s):0},lerp:bs,damp:function(s,e,t,n){return bs(s,e,1-Math.exp(-t*n))},pingpong:function(s,e=1){return e-Math.abs(Ho(s,2*e)-e)},smoothstep:function(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e))*s*(3-2*s)},smootherstep:function(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e))*s*s*(s*(6*s-15)+10)},randInt:function(s,e){return s+Math.floor(Math.random()*(e-s+1))},randFloat:function(s,e){return s+Math.random()*(e-s)},randFloatSpread:function(s){return s*(.5-Math.random())},seededRandom:function(s){s!==void 0&&(Jc=s);let e=Jc+=1831565813;return e=Math.imul(e^e>>>15,1|e),e^=e+Math.imul(e^e>>>7,61|e),((e^e>>>14)>>>0)/4294967296},degToRad:function(s){return s*ki},radToDeg:function(s){return s*Ds},isPowerOfTwo:function(s){return!(s&s-1)&&s!==0},ceilPowerOfTwo:function(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))},floorPowerOfTwo:function(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))},setQuaternionFromProperEuler:function(s,e,t,n,i){let r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),h=a((e+n)/2),u=r((e-n)/2),d=a((e-n)/2),p=r((n-e)/2),f=a((n-e)/2);switch(i){case"XYX":s.set(o*h,l*u,l*d,o*c);break;case"YZY":s.set(l*d,o*h,l*u,o*c);break;case"ZXZ":s.set(l*u,l*d,o*h,o*c);break;case"XZX":s.set(o*h,l*f,l*p,o*c);break;case"YXY":s.set(l*p,o*h,l*f,o*c);break;case"ZYZ":s.set(l*f,l*p,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}},normalize:Ft,denormalize:Ni},Z=class s{constructor(e=0,t=0){s.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(yt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*i+e.x,this.y=r*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Te=class s{constructor(e,t,n,i,r,a,o,l,c){s.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,l,c)}set(e,t,n,i,r,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=i,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],p=n[5],f=n[8],g=i[0],m=i[3],y=i[6],v=i[1],x=i[4],S=i[7],M=i[2],_=i[5],A=i[8];return r[0]=a*g+o*v+l*M,r[3]=a*m+o*x+l*_,r[6]=a*y+o*S+l*A,r[1]=c*g+h*v+u*M,r[4]=c*m+h*x+u*_,r[7]=c*y+h*S+u*A,r[2]=d*g+p*v+f*M,r[5]=d*m+p*x+f*_,r[8]=d*y+p*S+f*A,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*r*h+n*o*l+i*r*c-i*a*l}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*a-o*c,d=o*l-h*r,p=c*r-a*l,f=t*u+n*d+i*p;if(f===0)return this.set(0,0,0,0,0,0,0,0,0);let g=1/f;return e[0]=u*g,e[1]=(i*c-h*n)*g,e[2]=(o*n-i*a)*g,e[3]=d*g,e[4]=(h*t-i*l)*g,e[5]=(i*r-o*t)*g,e[6]=p*g,e[7]=(n*l-c*t)*g,e[8]=(a*t-n*r)*g,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-i*c,i*l,-i*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Ia.makeScale(e,t)),this}rotate(e){return this.premultiply(Ia.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ia.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Ia=new Te;function cu(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Fr(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Vd(){let s=Fr("canvas");return s.style.display="block",s}var $c={};function Ts(s){s in $c||($c[s]=!0,console.warn(s))}var Ge={enabled:!0,workingColorSpace:ss,spaces:{},convert:function(s,e,t){return this.enabled!==!1&&e!==t&&e&&t&&(this.spaces[e].transfer===Qe&&(s.r=bn(s.r),s.g=bn(s.g),s.b=bn(s.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(s.applyMatrix3(this.spaces[e].toXYZ),s.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===Qe&&(s.r=Vi(s.r),s.g=Vi(s.g),s.b=Vi(s.b))),s},fromWorkingColorSpace:function(s,e){return this.convert(s,this.workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Oi?ra:this.spaces[s].transfer},getLuminanceCoefficients:function(s,e=this.workingColorSpace){return s.fromArray(this.spaces[e].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,e,t){return s.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}};function bn(s){return s<.04045?.0773993808*s:Math.pow(.9478672986*s+.0521327014,2.4)}function Vi(s){return s<.0031308?12.92*s:1.055*Math.pow(s,.41666)-.055}var eh=[.64,.33,.3,.6,.15,.06],th=[.2126,.7152,.0722],nh=[.3127,.329],ih=new Te().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),sh=new Te().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715),Ti;Ge.define({[ss]:{primaries:eh,whitePoint:nh,transfer:ra,toXYZ:ih,fromXYZ:sh,luminanceCoefficients:th,workingColorSpaceConfig:{unpackColorSpace:kt},outputColorSpaceConfig:{drawingBufferColorSpace:kt}},[kt]:{primaries:eh,whitePoint:nh,transfer:Qe,toXYZ:ih,fromXYZ:sh,luminanceCoefficients:th,outputColorSpaceConfig:{drawingBufferColorSpace:kt}}});var zo=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ti===void 0&&(Ti=Fr("canvas")),Ti.width=e.width,Ti.height=e.height;let n=Ti.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Ti}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Fr("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=255*bn(r[a]/255);return n.putImageData(i,0,0),t}if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(255*bn(t[n]/255)):t[n]=bn(t[n]);return{data:t,width:e.width,height:e.height}}return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Gd=0,Ur=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Gd++}),this.uuid=vi(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(Pa(i[a].image)):r.push(Pa(i[a]))}else r=Pa(i);n.url=r}return t||(e.images[this.uuid]=n),n}};function Pa(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?zo.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Wd=0,Xt=class s extends cn{constructor(e=s.DEFAULT_IMAGE,t=s.DEFAULT_MAPPING,n=1001,i=1001,r=1006,a=1008,o=1023,l=1009,c=s.DEFAULT_ANISOTROPY,h=""){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Wd++}),this.uuid=vi(),this.name="",this.source=new Ur(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Z(0,0),this.repeat=new Z(1,1),this.center=new Z(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Te,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Jh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case co:e.x=e.x-Math.floor(e.x);break;case Is:e.x=e.x<0?0:1;break;case ho:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x)}if(e.y<0||e.y>1)switch(this.wrapT){case co:e.y=e.y-Math.floor(e.y);break;case Is:e.y=e.y<0?0:1;break;case ho:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y)}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Xt.DEFAULT_IMAGE=null,Xt.DEFAULT_MAPPING=Jh,Xt.DEFAULT_ANISOTROPY=1;var Ze=class s{constructor(e=0,t=0,n=0,i=1){s.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r,l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],p=l[5],f=l[9],g=l[2],m=l[6],y=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-g)<.01&&Math.abs(f-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+g)<.1&&Math.abs(f+m)<.1&&Math.abs(c+p+y-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let x=(c+1)/2,S=(p+1)/2,M=(y+1)/2,_=(h+d)/4,A=(u+g)/4,T=(f+m)/4;return x>S&&x>M?x<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(x),i=_/n,r=A/n):S>M?S<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(S),n=_/i,r=T/i):M<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(M),n=A/r,i=T/r),this.set(n,i,r,t),this}let v=Math.sqrt((m-f)*(m-f)+(u-g)*(u-g)+(d-h)*(d-h));return Math.abs(v)<.001&&(v=1),this.x=(m-f)/v,this.y=(u-g)/v,this.z=(d-h)/v,this.w=Math.acos((c+p+y-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},ko=class extends cn{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Ze(0,0,e,t),this.scissorTest=!1,this.viewport=new Ze(0,0,e,t);let i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Tn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new Xt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new Ur(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},hn=class extends ko{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Or=class extends Xt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=on,this.minFilter=on,this.wrapR=Is,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Vo=class extends Xt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=on,this.minFilter=on,this.wrapR=Is,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ve=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,a,o){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3],d=r[a+0],p=r[a+1],f=r[a+2],g=r[a+3];if(o===0)return e[t+0]=l,e[t+1]=c,e[t+2]=h,void(e[t+3]=u);if(o===1)return e[t+0]=d,e[t+1]=p,e[t+2]=f,void(e[t+3]=g);if(u!==g||l!==d||c!==p||h!==f){let m=1-o,y=l*d+c*p+h*f+u*g,v=y>=0?1:-1,x=1-y*y;if(x>Number.EPSILON){let M=Math.sqrt(x),_=Math.atan2(M,y*v);m=Math.sin(m*_)/M,o=Math.sin(o*_)/M}let S=o*v;if(l=l*m+d*S,c=c*m+p*S,h=h*m+f*S,u=u*m+g*S,m===1-o){let M=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=M,c*=M,h*=M,u*=M}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,r,a){let o=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=r[a],d=r[a+1],p=r[a+2],f=r[a+3];return e[t]=o*f+h*u+l*p-c*d,e[t+1]=l*f+h*d+c*u-o*p,e[t+2]=c*f+h*p+o*d-l*u,e[t+3]=h*f-o*u-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,i=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(i/2),u=o(r/2),d=l(n/2),p=l(i/2),f=l(r/2);switch(a){case"XYZ":this._x=d*h*u+c*p*f,this._y=c*p*u-d*h*f,this._z=c*h*f+d*p*u,this._w=c*h*u-d*p*f;break;case"YXZ":this._x=d*h*u+c*p*f,this._y=c*p*u-d*h*f,this._z=c*h*f-d*p*u,this._w=c*h*u+d*p*f;break;case"ZXY":this._x=d*h*u-c*p*f,this._y=c*p*u+d*h*f,this._z=c*h*f+d*p*u,this._w=c*h*u-d*p*f;break;case"ZYX":this._x=d*h*u-c*p*f,this._y=c*p*u+d*h*f,this._z=c*h*f-d*p*u,this._w=c*h*u+d*p*f;break;case"YZX":this._x=d*h*u+c*p*f,this._y=c*p*u+d*h*f,this._z=c*h*f-d*p*u,this._w=c*h*u-d*p*f;break;case"XZY":this._x=d*h*u-c*p*f,this._y=c*p*u-d*h*f,this._z=c*h*f+d*p*u,this._w=c*h*u+d*p*f;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],i=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=n+o+u;if(d>0){let p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(a-i)*p}else if(n>o&&n>u){let p=2*Math.sqrt(1+n-o-u);this._w=(h-l)/p,this._x=.25*p,this._y=(i+a)/p,this._z=(r+c)/p}else if(o>u){let p=2*Math.sqrt(1+o-n-u);this._w=(r-c)/p,this._x=(i+a)/p,this._y=.25*p,this._z=(l+h)/p}else{let p=2*Math.sqrt(1+u-n-o);this._w=(a-i)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(yt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,i=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+i*c-r*l,this._y=i*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-i*o,this._w=a*h-n*o-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,i=this._y,r=this._z,a=this._w,o=a*e._w+n*e._x+i*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=i,this._z=r,this;let l=1-o*o;if(l<=Number.EPSILON){let p=1-t;return this._w=p*a+t*this._w,this._x=p*n+t*this._x,this._y=p*i+t*this._y,this._z=p*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},E=class s{constructor(e=0,t=0,n=0){s.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(rh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(rh.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,i=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*i-o*n),h=2*(o*t-r*i),u=2*(r*n-a*t);return this.x=t+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=i+l*u+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,i=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-r*o,this.y=r*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Da.copy(this).projectOnVector(e),this.sub(Da)}reflect(e){return this.sub(Da.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(yt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,4*t)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,3*t)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=2*Math.random()-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Da=new E,rh=new Ve,Dt=class{constructor(e=new E(1/0,1/0,1/0),t=new E(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(sn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(sn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=sn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,sn):sn.fromBufferAttribute(r,a),sn.applyMatrix4(e.matrixWorld),this.expandByPoint(sn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),$s.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),$s.copy(n.boundingBox)),$s.applyMatrix4(e.matrixWorld),this.union($s)}let i=e.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,sn),sn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(xs),er.subVectors(this.max,xs),bi.subVectors(e.a,xs),Ci.subVectors(e.b,xs),wi.subVectors(e.c,xs),Un.subVectors(Ci,bi),On.subVectors(wi,Ci),ti.subVectors(bi,wi);let t=[0,-Un.z,Un.y,0,-On.z,On.y,0,-ti.z,ti.y,Un.z,0,-Un.x,On.z,0,-On.x,ti.z,0,-ti.x,-Un.y,Un.x,0,-On.y,On.x,0,-ti.y,ti.x,0];return!!Ba(t,bi,Ci,wi,er)&&(t=[1,0,0,0,1,0,0,0,1],!!Ba(t,bi,Ci,wi,er)&&(tr.crossVectors(Un,On),t=[tr.x,tr.y,tr.z],Ba(t,bi,Ci,wi,er)))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,sn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=.5*this.getSize(sn).length()),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()||(xn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),xn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),xn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),xn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),xn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),xn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),xn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),xn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(xn)),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},xn=[new E,new E,new E,new E,new E,new E,new E,new E],sn=new E,$s=new Dt,bi=new E,Ci=new E,wi=new E,Un=new E,On=new E,ti=new E,xs=new E,er=new E,tr=new E,ni=new E;function Ba(s,e,t,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){ni.fromArray(s,r);let o=i.x*Math.abs(ni.x)+i.y*Math.abs(ni.y)+i.z*Math.abs(ni.z),l=e.dot(ni),c=t.dot(ni),h=n.dot(ni);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var jd=new Dt,Ss=new E,La=new E,mn=class{constructor(e=new E,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):jd.setFromPoints(e).getCenter(n);let i=0;for(let r=0,a=e.length;r<a;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ss.subVectors(e,this.center);let t=Ss.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),i=.5*(n-this.radius);this.center.addScaledVector(Ss,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(La.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ss.copy(e.center).add(La)),this.expandByPoint(Ss.copy(e.center).sub(La))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},Sn=new E,Fa=new E,nr=new E,Nn=new E,Ua=new E,ir=new E,Oa=new E,gn=class{constructor(e=new E,t=new E(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Sn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Sn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Sn.copy(this.origin).addScaledVector(this.direction,t),Sn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Fa.copy(e).add(t).multiplyScalar(.5),nr.copy(t).sub(e).normalize(),Nn.copy(this.origin).sub(Fa);let r=.5*e.distanceTo(t),a=-this.direction.dot(nr),o=Nn.dot(this.direction),l=-Nn.dot(nr),c=Nn.lengthSq(),h=Math.abs(1-a*a),u,d,p,f;if(h>0)if(u=a*l-o,d=a*o-l,f=r*h,u>=0)if(d>=-f)if(d<=f){let g=1/h;u*=g,d*=g,p=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=r,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;else d<=-f?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-l),r),p=-u*u+d*(d+2*l)+c):d<=f?(u=0,d=Math.min(Math.max(-r,-l),r),p=d*(d+2*l)+c):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-l),r),p=-u*u+d*(d+2*l)+c);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Fa).addScaledVector(nr,d),p}intersectSphere(e,t){Sn.subVectors(e.center,this.origin);let n=Sn.dot(this.direction),i=Sn.dot(Sn)-n*n,r=e.radius*e.radius;if(i>r)return null;let a=Math.sqrt(r-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0?!0:e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,i=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,i=(e.min.x-d.x)*c),h>=0?(r=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),n>a||r>i?null:((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),u>=0?(o=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),n>l||o>i?null:((o>n||n!=n)&&(n=o),(l<i||i!=i)&&(i=l),i<0?null:this.at(n>=0?n:i,t)))}intersectsBox(e){return this.intersectBox(e,Sn)!==null}intersectTriangle(e,t,n,i,r){Ua.subVectors(t,e),ir.subVectors(n,e),Oa.crossVectors(Ua,ir);let a,o=this.direction.dot(Oa);if(o>0){if(i)return null;a=1}else{if(!(o<0))return null;a=-1,o=-o}Nn.subVectors(this.origin,e);let l=a*this.direction.dot(ir.crossVectors(Nn,ir));if(l<0)return null;let c=a*this.direction.dot(Ua.cross(Nn));if(c<0||l+c>o)return null;let h=-a*Nn.dot(Oa);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ge=class s{constructor(e,t,n,i,r,a,o,l,c,h,u,d,p,f,g,m){s.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,l,c,h,u,d,p,f,g,m)}set(e,t,n,i,r,a,o,l,c,h,u,d,p,f,g,m){let y=this.elements;return y[0]=e,y[4]=t,y[8]=n,y[12]=i,y[1]=r,y[5]=a,y[9]=o,y[13]=l,y[2]=c,y[6]=h,y[10]=u,y[14]=d,y[3]=p,y[7]=f,y[11]=g,y[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new s().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,i=1/Ri.setFromMatrixColumn(e,0).length(),r=1/Ri.setFromMatrixColumn(e,1).length(),a=1/Ri.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,i=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let d=a*h,p=a*u,f=o*h,g=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=p+f*c,t[5]=d-g*c,t[9]=-o*l,t[2]=g-d*c,t[6]=f+p*c,t[10]=a*l}else if(e.order==="YXZ"){let d=l*h,p=l*u,f=c*h,g=c*u;t[0]=d+g*o,t[4]=f*o-p,t[8]=a*c,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=p*o-f,t[6]=g+d*o,t[10]=a*l}else if(e.order==="ZXY"){let d=l*h,p=l*u,f=c*h,g=c*u;t[0]=d-g*o,t[4]=-a*u,t[8]=f+p*o,t[1]=p+f*o,t[5]=a*h,t[9]=g-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let d=a*h,p=a*u,f=o*h,g=o*u;t[0]=l*h,t[4]=f*c-p,t[8]=d*c+g,t[1]=l*u,t[5]=g*c+d,t[9]=p*c-f,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let d=a*l,p=a*c,f=o*l,g=o*c;t[0]=l*h,t[4]=g-d*u,t[8]=f*u+p,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=p*u+f,t[10]=d-g*u}else if(e.order==="XZY"){let d=a*l,p=a*c,f=o*l,g=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+g,t[5]=a*h,t[9]=p*u-f,t[2]=f*u-p,t[6]=o*h,t[10]=g*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Xd,e,qd)}lookAt(e,t,n){let i=this.elements;return Gt.subVectors(e,t),Gt.lengthSq()===0&&(Gt.z=1),Gt.normalize(),Hn.crossVectors(n,Gt),Hn.lengthSq()===0&&(Math.abs(n.z)===1?Gt.x+=1e-4:Gt.z+=1e-4,Gt.normalize(),Hn.crossVectors(n,Gt)),Hn.normalize(),sr.crossVectors(Gt,Hn),i[0]=Hn.x,i[4]=sr.x,i[8]=Gt.x,i[1]=Hn.y,i[5]=sr.y,i[9]=Gt.y,i[2]=Hn.z,i[6]=sr.z,i[10]=Gt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],p=n[13],f=n[2],g=n[6],m=n[10],y=n[14],v=n[3],x=n[7],S=n[11],M=n[15],_=i[0],A=i[4],T=i[8],I=i[12],P=i[1],D=i[5],L=i[9],z=i[13],U=i[2],k=i[6],W=i[10],Q=i[14],q=i[3],te=i[7],le=i[11],ee=i[15];return r[0]=a*_+o*P+l*U+c*q,r[4]=a*A+o*D+l*k+c*te,r[8]=a*T+o*L+l*W+c*le,r[12]=a*I+o*z+l*Q+c*ee,r[1]=h*_+u*P+d*U+p*q,r[5]=h*A+u*D+d*k+p*te,r[9]=h*T+u*L+d*W+p*le,r[13]=h*I+u*z+d*Q+p*ee,r[2]=f*_+g*P+m*U+y*q,r[6]=f*A+g*D+m*k+y*te,r[10]=f*T+g*L+m*W+y*le,r[14]=f*I+g*z+m*Q+y*ee,r[3]=v*_+x*P+S*U+M*q,r[7]=v*A+x*D+S*k+M*te,r[11]=v*T+x*L+S*W+M*le,r[15]=v*I+x*z+S*Q+M*ee,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],p=e[14];return e[3]*(+r*l*u-i*c*u-r*o*d+n*c*d+i*o*p-n*l*p)+e[7]*(+t*l*p-t*c*d+r*a*d-i*a*p+i*c*h-r*l*h)+e[11]*(+t*c*u-t*o*p-r*a*u+n*a*p+r*o*h-n*c*h)+e[15]*(-i*o*h-t*l*u+t*o*d+i*a*u-n*a*d+n*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],p=e[11],f=e[12],g=e[13],m=e[14],y=e[15],v=u*m*c-g*d*c+g*l*p-o*m*p-u*l*y+o*d*y,x=f*d*c-h*m*c-f*l*p+a*m*p+h*l*y-a*d*y,S=h*g*c-f*u*c+f*o*p-a*g*p-h*o*y+a*u*y,M=f*u*l-h*g*l-f*o*d+a*g*d+h*o*m-a*u*m,_=t*v+n*x+i*S+r*M;if(_===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/_;return e[0]=v*A,e[1]=(g*d*r-u*m*r-g*i*p+n*m*p+u*i*y-n*d*y)*A,e[2]=(o*m*r-g*l*r+g*i*c-n*m*c-o*i*y+n*l*y)*A,e[3]=(u*l*r-o*d*r-u*i*c+n*d*c+o*i*p-n*l*p)*A,e[4]=x*A,e[5]=(h*m*r-f*d*r+f*i*p-t*m*p-h*i*y+t*d*y)*A,e[6]=(f*l*r-a*m*r-f*i*c+t*m*c+a*i*y-t*l*y)*A,e[7]=(a*d*r-h*l*r+h*i*c-t*d*c-a*i*p+t*l*p)*A,e[8]=S*A,e[9]=(f*u*r-h*g*r-f*n*p+t*g*p+h*n*y-t*u*y)*A,e[10]=(a*g*r-f*o*r+f*n*c-t*g*c-a*n*y+t*o*y)*A,e[11]=(h*o*r-a*u*r-h*n*c+t*u*c+a*n*p-t*o*p)*A,e[12]=M*A,e[13]=(h*g*i-f*u*i+f*n*d-t*g*d-h*n*m+t*u*m)*A,e[14]=(f*o*i-a*g*i-f*n*l+t*g*l+a*n*m-t*o*m)*A,e[15]=(a*u*i-h*o*i+h*n*l-t*u*l-a*n*d+t*o*d)*A,this}scale(e){let t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),i=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,h*o+n,h*l-i*a,0,c*l-i*o,h*l+i*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,a){return this.set(1,n,r,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){let i=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,u=o+o,d=r*c,p=r*h,f=r*u,g=a*h,m=a*u,y=o*u,v=l*c,x=l*h,S=l*u,M=n.x,_=n.y,A=n.z;return i[0]=(1-(g+y))*M,i[1]=(p+S)*M,i[2]=(f-x)*M,i[3]=0,i[4]=(p-S)*_,i[5]=(1-(d+y))*_,i[6]=(m+v)*_,i[7]=0,i[8]=(f+x)*A,i[9]=(m-v)*A,i[10]=(1-(d+g))*A,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){let i=this.elements,r=Ri.set(i[0],i[1],i[2]).length(),a=Ri.set(i[4],i[5],i[6]).length(),o=Ri.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],rn.copy(this);let l=1/r,c=1/a,h=1/o;return rn.elements[0]*=l,rn.elements[1]*=l,rn.elements[2]*=l,rn.elements[4]*=c,rn.elements[5]*=c,rn.elements[6]*=c,rn.elements[8]*=h,rn.elements[9]*=h,rn.elements[10]*=h,t.setFromRotationMatrix(rn),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,i,r,a,o=2e3){let l=this.elements,c=2*r/(t-e),h=2*r/(n-i),u=(t+e)/(t-e),d=(n+i)/(n-i),p,f;if(o===Ki)p=-(a+r)/(a-r),f=-2*a*r/(a-r);else{if(o!==Lr)throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);p=-a/(a-r),f=-a*r/(a-r)}return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=f,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,r,a,o=2e3){let l=this.elements,c=1/(t-e),h=1/(n-i),u=1/(a-r),d=(t+e)*c,p=(n+i)*h,f,g;if(o===Ki)f=(a+r)*u,g=-2*u;else{if(o!==Lr)throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);f=r*u,g=-1*u}return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=g,l[14]=-f,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Ri=new E,rn=new ge,Xd=new E(0,0,0),qd=new E(1,1,1),Hn=new E,sr=new E,Gt=new E,ah=new ge,oh=new Ve,Cn=class s{constructor(e=0,t=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let i=e.elements,r=i[0],a=i[4],o=i[8],l=i[1],c=i[5],h=i[9],u=i[2],d=i[6],p=i[10];switch(t){case"XYZ":this._y=Math.asin(yt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-yt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(yt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-yt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(yt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-yt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return ah.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ah,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return oh.setFromEuler(this),this.setFromQuaternion(oh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Cn.DEFAULT_ORDER="XYZ";var Nr=class{constructor(){this.mask=1}set(e){this.mask=1<<e>>>0}enable(e){this.mask|=1<<e}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e}disable(e){this.mask&=~(1<<e)}disableAll(){this.mask=0}test(e){return!!(this.mask&e.mask)}isEnabled(e){return!!(this.mask&1<<e)}},Yd=0,lh=new E,Ii=new Ve,_n=new ge,rr=new E,_s=new E,Qd=new E,Kd=new Ve,ch=new E(1,0,0),hh=new E(0,1,0),uh=new E(0,0,1),dh={type:"added"},Zd={type:"removed"},Pi={type:"childadded",child:null},Na={type:"childremoved",child:null},xt=class s extends cn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Yd++}),this.uuid=vi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let e=new E,t=new Cn,n=new Ve,i=new E(1,1,1);t._onChange((function(){n.setFromEuler(t,!1)})),n._onChange((function(){t.setFromQuaternion(n,void 0,!1)})),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ge},normalMatrix:{value:new Te}}),this.matrix=new ge,this.matrixWorld=new ge,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Nr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ii.setFromAxisAngle(e,t),this.quaternion.multiply(Ii),this}rotateOnWorldAxis(e,t){return Ii.setFromAxisAngle(e,t),this.quaternion.premultiply(Ii),this}rotateX(e){return this.rotateOnAxis(ch,e)}rotateY(e){return this.rotateOnAxis(hh,e)}rotateZ(e){return this.rotateOnAxis(uh,e)}translateOnAxis(e,t){return lh.copy(e).applyQuaternion(this.quaternion),this.position.add(lh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ch,e)}translateY(e){return this.translateOnAxis(hh,e)}translateZ(e){return this.translateOnAxis(uh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(_n.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?rr.copy(e):rr.set(e,t,n);let i=this.parent;this.updateWorldMatrix(!0,!1),_s.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?_n.lookAt(_s,rr,this.up):_n.lookAt(rr,_s,this.up),this.quaternion.setFromRotationMatrix(_n),i&&(_n.extractRotation(i.matrixWorld),Ii.setFromRotationMatrix(_n),this.quaternion.premultiply(Ii.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(dh),Pi.child=e,this.dispatchEvent(Pi),Pi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Zd),Na.child=e,this.dispatchEvent(Na),Na.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),_n.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),_n.multiply(e.parent.matrixWorld)),e.applyMatrix4(_n),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(dh),Pi.child=e,this.dispatchEvent(Pi),Pi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){let r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_s,e,Qd),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_s,Kd,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let i={};function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map((o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()}))),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()})),this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));i.material=o}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];i.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),p=a(e.animations),f=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),f.length>0&&(n.nodes=f)}return n.object=i,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let i=e.children[n];this.add(i.clone())}return this}};xt.DEFAULT_UP=new E(0,1,0),xt.DEFAULT_MATRIX_AUTO_UPDATE=!0,xt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var an=new E,An=new E,Ha=new E,Mn=new E,Di=new E,Bi=new E,ph=new E,za=new E,ka=new E,Va=new E,Ga=new Ze,Wa=new Ze,ja=new Ze,Vn=class s{constructor(e=new E,t=new E,n=new E){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),an.subVectors(e,t),i.cross(an);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){an.subVectors(i,t),An.subVectors(n,t),Ha.subVectors(e,t);let a=an.dot(an),o=an.dot(An),l=an.dot(Ha),c=An.dot(An),h=An.dot(Ha),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;let d=1/u,p=(c*l-o*h)*d,f=(a*h-o*l)*d;return r.set(1-p-f,f,p)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Mn)!==null&&Mn.x>=0&&Mn.y>=0&&Mn.x+Mn.y<=1}static getInterpolation(e,t,n,i,r,a,o,l){return this.getBarycoord(e,t,n,i,Mn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Mn.x),l.addScaledVector(a,Mn.y),l.addScaledVector(o,Mn.z),l)}static getInterpolatedAttribute(e,t,n,i,r,a){return Ga.setScalar(0),Wa.setScalar(0),ja.setScalar(0),Ga.fromBufferAttribute(e,t),Wa.fromBufferAttribute(e,n),ja.fromBufferAttribute(e,i),a.setScalar(0),a.addScaledVector(Ga,r.x),a.addScaledVector(Wa,r.y),a.addScaledVector(ja,r.z),a}static isFrontFacing(e,t,n,i){return an.subVectors(n,t),An.subVectors(e,t),an.cross(An).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return an.subVectors(this.c,this.b),An.subVectors(this.a,this.b),.5*an.cross(An).length()}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return s.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return s.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return s.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return s.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return s.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,i=this.b,r=this.c,a,o;Di.subVectors(i,n),Bi.subVectors(r,n),za.subVectors(e,n);let l=Di.dot(za),c=Bi.dot(za);if(l<=0&&c<=0)return t.copy(n);ka.subVectors(e,i);let h=Di.dot(ka),u=Bi.dot(ka);if(h>=0&&u<=h)return t.copy(i);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(n).addScaledVector(Di,a);Va.subVectors(e,r);let p=Di.dot(Va),f=Bi.dot(Va);if(f>=0&&p<=f)return t.copy(r);let g=p*c-l*f;if(g<=0&&c>=0&&f<=0)return o=c/(c-f),t.copy(n).addScaledVector(Bi,o);let m=h*f-p*u;if(m<=0&&u-h>=0&&p-f>=0)return ph.subVectors(r,i),o=(u-h)/(u-h+(p-f)),t.copy(i).addScaledVector(ph,o);let y=1/(m+g+d);return a=g*y,o=d*y,t.copy(n).addScaledVector(Di,a).addScaledVector(Bi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},hu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},zn={h:0,s:0,l:0},ar={h:0,s:0,l:0};function Xa(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+6*(e-s)*t:t<.5?e:t<2/3?s+6*(e-s)*(2/3-t):s}var Pe=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=kt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(255&e)/255,Ge.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=Ge.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ge.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=Ge.workingColorSpace){if(e=Ho(e,1),t=yt(t,0,1),n=yt(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Xa(a,r,e+1/3),this.g=Xa(a,r,e),this.b=Xa(a,r,e-1/3)}return Ge.toWorkingColorSpace(this,i),this}setStyle(e,t=kt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=kt){let n=hu[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=bn(e.r),this.g=bn(e.g),this.b=bn(e.b),this}copyLinearToSRGB(e){return this.r=Vi(e.r),this.g=Vi(e.g),this.b=Vi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=kt){return Ge.fromWorkingColorSpace(Pt.copy(this),e),65536*Math.round(yt(255*Pt.r,0,255))+256*Math.round(yt(255*Pt.g,0,255))+Math.round(yt(255*Pt.b,0,255))}getHexString(e=kt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ge.workingColorSpace){Ge.fromWorkingColorSpace(Pt.copy(this),t);let n=Pt.r,i=Pt.g,r=Pt.b,a=Math.max(n,i,r),o=Math.min(n,i,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(i-r)/u+(i<r?6:0);break;case i:l=(r-n)/u+2;break;case r:l=(n-i)/u+4}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Ge.workingColorSpace){return Ge.fromWorkingColorSpace(Pt.copy(this),t),e.r=Pt.r,e.g=Pt.g,e.b=Pt.b,e}getStyle(e=kt){Ge.fromWorkingColorSpace(Pt.copy(this),e);let t=Pt.r,n=Pt.g,i=Pt.b;return e!==kt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(255*t)},${Math.round(255*n)},${Math.round(255*i)})`}offsetHSL(e,t,n){return this.getHSL(zn),this.setHSL(zn.h+e,zn.s+t,zn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(zn),e.getHSL(ar);let n=bs(zn.h,ar.h,t),i=bs(zn.s,ar.s,t),r=bs(zn.l,ar.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Pt=new Pe;Pe.NAMES=hu;var Jd=0,pi=class extends cn{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Jd++}),this.uuid=vi(),this.name="",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Wi,this.blendDst=ji,this.blendEquation=li,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Pe(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ei,this.stencilZFail=Ei,this.stencilZPass=Ei,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let i=this[t];i!==void 0?i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n:console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`)}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};function i(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(n.blending=this.blending),this.side!==0&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Wi&&(n.blendSrc=this.blendSrc),this.blendDst!==ji&&(n.blendDst=this.blendDst),this.blendEquation!==li&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==3&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==519&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ei&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ei&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ei&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData),t){let r=i(e.textures),a=i(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},yn=class extends pi{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new Pe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Cn,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},En=$d();function $d(){let s=new ArrayBuffer(4),e=new Float32Array(s),t=new Uint32Array(s),n=new Uint32Array(512),i=new Uint32Array(512);for(let l=0;l<256;++l){let c=l-127;c<-27?(n[l]=0,n[256|l]=32768,i[l]=24,i[256|l]=24):c<-14?(n[l]=1024>>-c-14,n[256|l]=1024>>-c-14|32768,i[l]=-c-1,i[256|l]=-c-1):c<=15?(n[l]=c+15<<10,n[256|l]=c+15<<10|32768,i[l]=13,i[256|l]=13):c<128?(n[l]=31744,n[256|l]=64512,i[l]=24,i[256|l]=24):(n[l]=31744,n[256|l]=64512,i[l]=13,i[256|l]=13)}let r=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,h=0;for(;!(8388608&c);)c<<=1,h-=8388608;c&=-8388609,h+=947912704,r[l]=c|h}for(let l=1024;l<2048;++l)r[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)a[l]=l<<23;a[31]=1199570944,a[32]=2147483648;for(let l=33;l<63;++l)a[l]=2147483648+(l-32<<23);a[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(o[l]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:i,mantissaTable:r,exponentTable:a,offsetTable:o}}function ep(s){Math.abs(s)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),s=yt(s,-65504,65504),En.floatView[0]=s;let e=En.uint32View[0],t=e>>23&511;return En.baseTable[t]+((8388607&e)>>En.shiftTable[t])}function tp(s){let e=s>>10;return En.uint32View[0]=En.mantissaTable[En.offsetTable[e]+(1023&s)]+En.exponentTable[e],En.floatView[0]}var as={toHalfFloat:ep,fromHalfFloat:tp},gt=new E,or=new Z,Nt=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Kc,this.updateRanges=[],this.gpuType=Jt,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)or.fromBufferAttribute(this,t),or.applyMatrix3(e),this.setXY(t,or.x,or.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)gt.fromBufferAttribute(this,t),gt.applyMatrix3(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)gt.fromBufferAttribute(this,t),gt.applyMatrix4(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)gt.fromBufferAttribute(this,t),gt.applyNormalMatrix(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)gt.fromBufferAttribute(this,t),gt.transformDirection(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Ni(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Ft(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ni(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ft(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ni(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ft(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ni(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ft(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ni(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ft(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Ft(t,this.array),n=Ft(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Ft(t,this.array),n=Ft(n,this.array),i=Ft(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=Ft(t,this.array),n=Ft(n,this.array),i=Ft(i,this.array),r=Ft(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Kc&&(e.usage=this.usage),e}};var Hr=class extends Nt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var zr=class extends Nt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var we=class extends Nt{constructor(e,t,n){super(new Float32Array(e),t,n)}},np=0,Zt=new ge,qa=new xt,Li=new E,Wt=new Dt,As=new Dt,Tt=new E,Je=class s extends cn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:np++}),this.uuid=vi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(cu(e)?zr:Hr)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Te().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Zt.makeRotationFromQuaternion(e),this.applyMatrix4(Zt),this}rotateX(e){return Zt.makeRotationX(e),this.applyMatrix4(Zt),this}rotateY(e){return Zt.makeRotationY(e),this.applyMatrix4(Zt),this}rotateZ(e){return Zt.makeRotationZ(e),this.applyMatrix4(Zt),this}translate(e,t,n){return Zt.makeTranslation(e,t,n),this.applyMatrix4(Zt),this}scale(e,t,n){return Zt.makeScale(e,t,n),this.applyMatrix4(Zt),this}lookAt(e){return qa.lookAt(e),qa.updateMatrix(),this.applyMatrix4(qa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Li).negate(),this.translate(Li.x,Li.y,Li.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let i=0,r=e.length;i<r;i++){let a=e[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new we(n,3))}else{for(let n=0,i=t.count;n<i;n++){let r=e[n];t.setXYZ(n,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Dt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)return console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),void this.boundingBox.set(new E(-1/0,-1/0,-1/0),new E(1/0,1/0,1/0));if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){let r=t[n];Wt.setFromBufferAttribute(r),this.morphTargetsRelative?(Tt.addVectors(this.boundingBox.min,Wt.min),this.boundingBox.expandByPoint(Tt),Tt.addVectors(this.boundingBox.max,Wt.max),this.boundingBox.expandByPoint(Tt)):(this.boundingBox.expandByPoint(Wt.min),this.boundingBox.expandByPoint(Wt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new mn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)return console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),void this.boundingSphere.set(new E,1/0);if(e){let n=this.boundingSphere.center;if(Wt.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];As.setFromBufferAttribute(o),this.morphTargetsRelative?(Tt.addVectors(Wt.min,As.min),Wt.expandByPoint(Tt),Tt.addVectors(Wt.max,As.max),Wt.expandByPoint(Tt)):(Wt.expandByPoint(As.min),Wt.expandByPoint(As.max))}Wt.getCenter(n);let i=0;for(let r=0,a=e.count;r<a;r++)Tt.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(Tt));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Tt.fromBufferAttribute(o,c),l&&(Li.fromBufferAttribute(e,c),Tt.add(Li)),i=Math.max(i,n.distanceToSquared(Tt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0)return void console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");let n=t.position,i=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Nt(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),o=[],l=[];for(let T=0;T<n.count;T++)o[T]=new E,l[T]=new E;let c=new E,h=new E,u=new E,d=new Z,p=new Z,f=new Z,g=new E,m=new E;function y(T,I,P){c.fromBufferAttribute(n,T),h.fromBufferAttribute(n,I),u.fromBufferAttribute(n,P),d.fromBufferAttribute(r,T),p.fromBufferAttribute(r,I),f.fromBufferAttribute(r,P),h.sub(c),u.sub(c),p.sub(d),f.sub(d);let D=1/(p.x*f.y-f.x*p.y);isFinite(D)&&(g.copy(h).multiplyScalar(f.y).addScaledVector(u,-p.y).multiplyScalar(D),m.copy(u).multiplyScalar(p.x).addScaledVector(h,-f.x).multiplyScalar(D),o[T].add(g),o[I].add(g),o[P].add(g),l[T].add(m),l[I].add(m),l[P].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let T=0,I=v.length;T<I;++T){let P=v[T],D=P.start;for(let L=D,z=D+P.count;L<z;L+=3)y(e.getX(L+0),e.getX(L+1),e.getX(L+2))}let x=new E,S=new E,M=new E,_=new E;function A(T){M.fromBufferAttribute(i,T),_.copy(M);let I=o[T];x.copy(I),x.sub(M.multiplyScalar(M.dot(I))).normalize(),S.crossVectors(_,I);let P=S.dot(l[T])<0?-1:1;a.setXYZW(T,x.x,x.y,x.z,P)}for(let T=0,I=v.length;T<I;++T){let P=v[T],D=P.start;for(let L=D,z=D+P.count;L<z;L+=3)A(e.getX(L+0)),A(e.getX(L+1)),A(e.getX(L+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Nt(new Float32Array(3*t.count),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);let i=new E,r=new E,a=new E,o=new E,l=new E,c=new E,h=new E,u=new E;if(e)for(let d=0,p=e.count;d<p;d+=3){let f=e.getX(d+0),g=e.getX(d+1),m=e.getX(d+2);i.fromBufferAttribute(t,f),r.fromBufferAttribute(t,g),a.fromBufferAttribute(t,m),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),o.fromBufferAttribute(n,f),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(f,o.x,o.y,o.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=t.count;d<p;d+=3)i.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Tt.fromBufferAttribute(e,t),Tt.normalize(),e.setXYZ(t,Tt.x,Tt.y,Tt.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h),p=0,f=0;for(let g=0,m=l.length;g<m;g++){p=o.isInterleavedBufferAttribute?l[g]*o.data.stride+o.offset:l[g]*h;for(let y=0;y<h;y++)d[f++]=c[p++]}return new Nt(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new s,n=this.index.array,i=this.attributes;for(let o in i){let l=e(i[o],n);t.setAttribute(o,l)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){let d=e(c[h],n);l.push(d)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let i={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let p=c[u];h.push(p.toJSON(e.data))}h.length>0&&(i[l]=h,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let i=e.attributes;for(let c in i){let h=i[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],u=r[c];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},fh=new ge,ii=new gn,lr=new mn,mh=new E,cr=new E,hr=new E,ur=new E,Ya=new E,dr=new E,gh=new E,pr=new E,tt=class extends xt{constructor(e=new Je,t=new yn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let i=0,r=n.length;i<r;i++){let a=n[i].name||String(i);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=i}}}}getVertexPosition(e,t){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);let o=this.morphTargetInfluences;if(r&&o){dr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],u=r[l];h!==0&&(Ya.fromBufferAttribute(u,e),a?dr.addScaledVector(Ya,h):dr.addScaledVector(Ya.sub(t),h))}t.add(dr)}return t}raycast(e,t){let n=this.geometry,i=this.material,r=this.matrixWorld;if(i!==void 0){if(n.boundingSphere===null&&n.computeBoundingSphere(),lr.copy(n.boundingSphere),lr.applyMatrix4(r),ii.copy(e.ray).recast(e.near),lr.containsPoint(ii.origin)===!1&&(ii.intersectSphere(lr,mh)===null||ii.origin.distanceToSquared(mh)>(e.far-e.near)**2))return;fh.copy(r).invert(),ii.copy(e.ray).applyMatrix4(fh),n.boundingBox!==null&&ii.intersectsBox(n.boundingBox)===!1||this._computeIntersections(e,t,ii)}}_computeIntersections(e,t,n){let i,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let f=0,g=d.length;f<g;f++){let m=d[f],y=a[m.materialIndex];for(let v=Math.max(m.start,p.start),x=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));v<x;v+=3)i=fr(this,y,e,n,c,h,u,o.getX(v),o.getX(v+1),o.getX(v+2)),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,t.push(i))}else for(let f=Math.max(0,p.start),g=Math.min(o.count,p.start+p.count);f<g;f+=3)i=fr(this,a,e,n,c,h,u,o.getX(f),o.getX(f+1),o.getX(f+2)),i&&(i.faceIndex=Math.floor(f/3),t.push(i));else if(l!==void 0)if(Array.isArray(a))for(let f=0,g=d.length;f<g;f++){let m=d[f],y=a[m.materialIndex];for(let v=Math.max(m.start,p.start),x=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));v<x;v+=3)i=fr(this,y,e,n,c,h,u,v,v+1,v+2),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,t.push(i))}else for(let f=Math.max(0,p.start),g=Math.min(l.count,p.start+p.count);f<g;f+=3)i=fr(this,a,e,n,c,h,u,f,f+1,f+2),i&&(i.faceIndex=Math.floor(f/3),t.push(i))}};function fr(s,e,t,n,i,r,a,o,l,c){s.getVertexPosition(o,cr),s.getVertexPosition(l,hr),s.getVertexPosition(c,ur);let h=(function(u,d,p,f,g,m,y,v){let x;if(x=d.side===1?f.intersectTriangle(y,m,g,!0,v):f.intersectTriangle(g,m,y,d.side===0,v),x===null)return null;pr.copy(v),pr.applyMatrix4(u.matrixWorld);let S=p.ray.origin.distanceTo(pr);return S<p.near||S>p.far?null:{distance:S,point:pr.clone(),object:u}})(s,e,t,n,cr,hr,ur,gh);if(h){let u=new E;Vn.getBarycoord(gh,cr,hr,ur,u),i&&(h.uv=Vn.getInterpolatedAttribute(i,o,l,c,u,new Z)),r&&(h.uv1=Vn.getInterpolatedAttribute(r,o,l,c,u,new Z)),a&&(h.normal=Vn.getInterpolatedAttribute(a,o,l,c,u,new E),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:l,c,normal:new E,materialIndex:0};Vn.getNormal(cr,hr,ur,d.normal),h.face=d,h.barycoord=u}return h}var Wn=class s extends Je{constructor(e=1,t=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};let o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],u=[],d=0,p=0;function f(g,m,y,v,x,S,M,_,A,T,I){let P=S/A,D=M/T,L=S/2,z=M/2,U=_/2,k=A+1,W=T+1,Q=0,q=0,te=new E;for(let le=0;le<W;le++){let ee=le*D-z;for(let re=0;re<k;re++){let ce=re*P-L;te[g]=ce*v,te[m]=ee*x,te[y]=U,c.push(te.x,te.y,te.z),te[g]=0,te[m]=0,te[y]=_>0?1:-1,h.push(te.x,te.y,te.z),u.push(re/A),u.push(1-le/T),Q+=1}}for(let le=0;le<T;le++)for(let ee=0;ee<A;ee++){let re=d+ee+k*le,ce=d+ee+k*(le+1),de=d+(ee+1)+k*(le+1),oe=d+(ee+1)+k*le;l.push(re,ce,oe),l.push(ce,de,oe),q+=6}o.addGroup(p,q,I),p+=q,d+=Q}f("z","y","x",-1,-1,n,t,e,a,r,0),f("z","y","x",1,-1,n,t,-e,a,r,1),f("x","z","y",1,1,e,n,t,i,a,2),f("x","z","y",1,-1,e,n,-t,i,a,3),f("x","y","z",1,-1,e,t,n,i,r,4),f("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new we(c,3)),this.setAttribute("normal",new we(h,3)),this.setAttribute("uv",new we(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Zi(s){let e={};for(let t in s){e[t]={};for(let n in s[t]){let i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Ut(s){let e={};for(let t=0;t<s.length;t++){let n=Zi(s[t]);for(let i in n)e[i]=n[i]}return e}function uu(s){let e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ge.workingColorSpace}var ip={clone:Zi,merge:Ut},Bt=class extends pi{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,this.fragmentShader=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Zi(e.uniforms),this.uniformsGroups=(function(t){let n=[];for(let i=0;i<t.length;i++)n.push(t[i].clone());return n})(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let i in this.uniforms){let r=this.uniforms[i].value;r&&r.isTexture?t.uniforms[i]={type:"t",value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[i]={type:"c",value:r.getHex()}:r&&r.isVector2?t.uniforms[i]={type:"v2",value:r.toArray()}:r&&r.isVector3?t.uniforms[i]={type:"v3",value:r.toArray()}:r&&r.isVector4?t.uniforms[i]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?t.uniforms[i]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?t.uniforms[i]={type:"m4",value:r.toArray()}:t.uniforms[i]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},Bs=class extends xt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ge,this.projectionMatrix=new ge,this.projectionMatrixInverse=new ge,this.coordinateSystem=Ki}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},kn=new E,yh=new Z,vh=new Z,wt=class extends Bs{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=2*Ds*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(.5*ki*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return 2*Ds*Math.atan(Math.tan(.5*ki*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){kn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(kn.x,kn.y).multiplyScalar(-e/kn.z),kn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(kn.x,kn.y).multiplyScalar(-e/kn.z)}getViewSize(e,t){return this.getViewBounds(e,yh,vh),t.subVectors(vh,yh)}setViewOffset(e,t,n,i,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(.5*ki*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Fi=-90,Go=class extends xt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new wt(Fi,1,e,t);i.layers=this.layers,this.add(i);let r=new wt(Fi,1,e,t);r.layers=this.layers,this.add(r);let a=new wt(Fi,1,e,t);a.layers=this.layers,this.add(a);let o=new wt(Fi,1,e,t);o.layers=this.layers,this.add(o);let l=new wt(Fi,1,e,t);l.layers=this.layers,this.add(l);let c=new wt(Fi,1,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,i,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===Ki)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else{if(e!==Lr)throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1)}for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),f=e.xr.enabled;e.xr.enabled=!1;let g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,a),e.setRenderTarget(n,2,i),e.render(t,o),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=g,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(u,d,p),e.xr.enabled=f,n.texture.needsPMREMUpdate=!0}},kr=class extends Xt{constructor(e,t,n,i,r,a,o,l,c,h){super(e=e!==void 0?e:[],t=t!==void 0?t:Xi,n,i,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Wo=class extends hn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new kr(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0&&t.generateMipmaps,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Tn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Wn(5,5,5),r=new Bt({name:"CubemapFromEquirect",uniforms:Zi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});r.uniforms.tEquirect.value=t;let a=new tt(i,r),o=t.minFilter;return t.minFilter===Hi&&(t.minFilter=Tn),new Go(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,i){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(r)}},Qa=new E,sp=new E,rp=new Te,jt=class{constructor(e=new E(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let i=Qa.subVectors(n,t).cross(sp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(Qa),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||rp.getNormalMatrix(e),i=this.coplanarPoint(Qa).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},si=new mn,mr=new E,Ls=class{constructor(e=new jt,t=new jt,n=new jt,i=new jt,r=new jt,a=new jt){this.planes=[e,t,n,i,r,a]}set(e,t,n,i,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=2e3){let n=this.planes,i=e.elements,r=i[0],a=i[1],o=i[2],l=i[3],c=i[4],h=i[5],u=i[6],d=i[7],p=i[8],f=i[9],g=i[10],m=i[11],y=i[12],v=i[13],x=i[14],S=i[15];if(n[0].setComponents(l-r,d-c,m-p,S-y).normalize(),n[1].setComponents(l+r,d+c,m+p,S+y).normalize(),n[2].setComponents(l+a,d+h,m+f,S+v).normalize(),n[3].setComponents(l-a,d-h,m-f,S-v).normalize(),n[4].setComponents(l-o,d-u,m-g,S-x).normalize(),t===Ki)n[5].setComponents(l+o,d+u,m+g,S+x).normalize();else{if(t!==Lr)throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);n[5].setComponents(o,u,g,x).normalize()}return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),si.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),si.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(si)}intersectsSprite(e){return si.center.set(0,0,0),si.radius=.7071067811865476,si.applyMatrix4(e.matrixWorld),this.intersectsSphere(si)}intersectsSphere(e){let t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let i=t[n];if(mr.x=i.normal.x>0?e.max.x:e.min.x,mr.y=i.normal.y>0?e.max.y:e.min.y,mr.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(mr)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function du(){let s=null,e=!1,t=null,n=null;function i(r,a){t(r,a),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function ap(s){let e=new WeakMap;return{get:function(t){return t.isInterleavedBufferAttribute&&(t=t.data),e.get(t)},remove:function(t){t.isInterleavedBufferAttribute&&(t=t.data);let n=e.get(t);n&&(s.deleteBuffer(n.buffer),e.delete(t))},update:function(t,n){if(t.isInterleavedBufferAttribute&&(t=t.data),t.isGLBufferAttribute){let r=e.get(t);return void((!r||r.version<t.version)&&e.set(t,{buffer:t.buffer,type:t.type,bytesPerElement:t.elementSize,version:t.version}))}let i=e.get(t);if(i===void 0)e.set(t,(function(r,a){let o=r.array,l=r.usage,c=o.byteLength,h=s.createBuffer(),u;if(s.bindBuffer(a,h),s.bufferData(a,o,l),r.onUploadCallback(),o instanceof Float32Array)u=s.FLOAT;else if(o instanceof Uint16Array)u=r.isFloat16BufferAttribute?s.HALF_FLOAT:s.UNSIGNED_SHORT;else if(o instanceof Int16Array)u=s.SHORT;else if(o instanceof Uint32Array)u=s.UNSIGNED_INT;else if(o instanceof Int32Array)u=s.INT;else if(o instanceof Int8Array)u=s.BYTE;else if(o instanceof Uint8Array)u=s.UNSIGNED_BYTE;else{if(!(o instanceof Uint8ClampedArray))throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+o);u=s.UNSIGNED_BYTE}return{buffer:h,type:u,bytesPerElement:o.BYTES_PER_ELEMENT,version:r.version,size:c}})(t,n));else if(i.version<t.version){if(i.size!==t.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");(function(r,a,o){let l=a.array,c=a.updateRanges;if(s.bindBuffer(o,r),c.length===0)s.bufferSubData(o,0,l);else{c.sort(((u,d)=>u.start-d.start));let h=0;for(let u=1;u<c.length;u++){let d=c[h],p=c[u];p.start<=d.start+d.count+1?d.count=Math.max(d.count,p.start+p.count-d.start):(++h,c[h]=p)}c.length=h+1;for(let u=0,d=c.length;u<d;u++){let p=c[u];s.bufferSubData(o,p.start*l.BYTES_PER_ELEMENT,l,p.start,p.count)}a.clearUpdateRanges()}a.onUploadCallback()})(i.buffer,t,n),i.version=t.version}}}}var jn=class s extends Je{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};let r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,h=l+1,u=e/o,d=t/l,p=[],f=[],g=[],m=[];for(let y=0;y<h;y++){let v=y*d-a;for(let x=0;x<c;x++){let S=x*u-r;f.push(S,-v,0),g.push(0,0,1),m.push(x/o),m.push(1-y/l)}}for(let y=0;y<l;y++)for(let v=0;v<o;v++){let x=v+c*y,S=v+c*(y+1),M=v+1+c*(y+1),_=v+1+c*y;p.push(x,S,_),p.push(S,M,_)}this.setIndex(p),this.setAttribute("position",new we(f,3)),this.setAttribute("normal",new we(g,3)),this.setAttribute("uv",new we(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.widthSegments,e.heightSegments)}},Le={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
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
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
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
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
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
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
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
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
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
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
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
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
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
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR_ALPHA )
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
#endif`,common:`#define PI 3.141592653589793
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
} // validated`,cube_uv_reflection_fragment:`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
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
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:"gl_FragColor = linearToOutputTexel( gl_FragColor );",colorspace_pars_fragment:`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment:`#ifdef USE_ENVMAP
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
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
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
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
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
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
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
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
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
}`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
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
#endif`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
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
#endif`,lights_physical_pars_fragment:`struct PhysicalMaterial {
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
}`,lights_fragment_begin:`
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
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
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
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
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
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex:`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
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
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
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
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
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
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
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
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
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
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
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
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
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
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
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
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
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
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
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
}`,depth_frag:`#if DEPTH_PACKING == 3200
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
}`,distanceRGBA_vert:`#define DISTANCE
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
}`,distanceRGBA_frag:`#define DISTANCE
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
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
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
}`,linedashed_frag:`uniform vec3 diffuse;
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
}`,meshbasic_vert:`#include <common>
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
}`,meshbasic_frag:`uniform vec3 diffuse;
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
}`,meshlambert_vert:`#define LAMBERT
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
}`,meshlambert_frag:`#define LAMBERT
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
}`,meshmatcap_vert:`#define MATCAP
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
}`,meshmatcap_frag:`#define MATCAP
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
}`,meshnormal_vert:`#define NORMAL
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
}`,meshnormal_frag:`#define NORMAL
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
}`,meshphong_vert:`#define PHONG
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
}`,meshphong_frag:`#define PHONG
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
}`,meshphysical_vert:`#define STANDARD
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
}`,meshphysical_frag:`#define STANDARD
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
}`,meshtoon_vert:`#define TOON
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
}`,meshtoon_frag:`#define TOON
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
}`,points_vert:`uniform float size;
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
}`,points_frag:`uniform vec3 diffuse;
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
}`,shadow_vert:`#include <common>
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
}`,shadow_frag:`uniform vec3 color;
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
}`,sprite_vert:`uniform float rotation;
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
}`,sprite_frag:`uniform vec3 diffuse;
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
}`},pe={common:{diffuse:{value:new Pe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Te},alphaMap:{value:null},alphaMapTransform:{value:new Te},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Te}},envmap:{envMap:{value:null},envMapRotation:{value:new Te},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Te}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Te}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Te},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Te},normalScale:{value:new Z(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Te},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Te}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Te}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Te}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Pe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Pe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Te},alphaTest:{value:0},uvTransform:{value:new Te}},sprite:{diffuse:{value:new Pe(16777215)},opacity:{value:1},center:{value:new Z(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Te},alphaMap:{value:null},alphaMapTransform:{value:new Te},alphaTest:{value:0}}},pn={basic:{uniforms:Ut([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.fog]),vertexShader:Le.meshbasic_vert,fragmentShader:Le.meshbasic_frag},lambert:{uniforms:Ut([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new Pe(0)}}]),vertexShader:Le.meshlambert_vert,fragmentShader:Le.meshlambert_frag},phong:{uniforms:Ut([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new Pe(0)},specular:{value:new Pe(1118481)},shininess:{value:30}}]),vertexShader:Le.meshphong_vert,fragmentShader:Le.meshphong_frag},standard:{uniforms:Ut([pe.common,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.roughnessmap,pe.metalnessmap,pe.fog,pe.lights,{emissive:{value:new Pe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Le.meshphysical_vert,fragmentShader:Le.meshphysical_frag},toon:{uniforms:Ut([pe.common,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.gradientmap,pe.fog,pe.lights,{emissive:{value:new Pe(0)}}]),vertexShader:Le.meshtoon_vert,fragmentShader:Le.meshtoon_frag},matcap:{uniforms:Ut([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,{matcap:{value:null}}]),vertexShader:Le.meshmatcap_vert,fragmentShader:Le.meshmatcap_frag},points:{uniforms:Ut([pe.points,pe.fog]),vertexShader:Le.points_vert,fragmentShader:Le.points_frag},dashed:{uniforms:Ut([pe.common,pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Le.linedashed_vert,fragmentShader:Le.linedashed_frag},depth:{uniforms:Ut([pe.common,pe.displacementmap]),vertexShader:Le.depth_vert,fragmentShader:Le.depth_frag},normal:{uniforms:Ut([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,{opacity:{value:1}}]),vertexShader:Le.meshnormal_vert,fragmentShader:Le.meshnormal_frag},sprite:{uniforms:Ut([pe.sprite,pe.fog]),vertexShader:Le.sprite_vert,fragmentShader:Le.sprite_frag},background:{uniforms:{uvTransform:{value:new Te},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Le.background_vert,fragmentShader:Le.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Te}},vertexShader:Le.backgroundCube_vert,fragmentShader:Le.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Le.cube_vert,fragmentShader:Le.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Le.equirect_vert,fragmentShader:Le.equirect_frag},distanceRGBA:{uniforms:Ut([pe.common,pe.displacementmap,{referencePosition:{value:new E},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Le.distanceRGBA_vert,fragmentShader:Le.distanceRGBA_frag},shadow:{uniforms:Ut([pe.lights,pe.fog,{color:{value:new Pe(0)},opacity:{value:1}}]),vertexShader:Le.shadow_vert,fragmentShader:Le.shadow_frag}};pn.physical={uniforms:Ut([pn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Te},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Te},clearcoatNormalScale:{value:new Z(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Te},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Te},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Te},sheen:{value:0},sheenColor:{value:new Pe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Te},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Te},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Te},transmissionSamplerSize:{value:new Z},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Te},attenuationDistance:{value:0},attenuationColor:{value:new Pe(0)},specularColor:{value:new Pe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Te},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Te},anisotropyVector:{value:new Z},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Te}}]),vertexShader:Le.meshphysical_vert,fragmentShader:Le.meshphysical_frag};var gr={r:0,b:0,g:0},ri=new Cn,op=new ge;function lp(s,e,t,n,i,r,a){let o=new Pe(0),l,c,h=r===!0?0:1,u=null,d=0,p=null;function f(m){let y=m.isScene===!0?m.background:null;return y&&y.isTexture&&(y=(m.backgroundBlurriness>0?t:e).get(y)),y}function g(m,y){m.getRGB(gr,uu(s)),n.buffers.color.setClear(gr.r,gr.g,gr.b,y,a)}return{getClearColor:function(){return o},setClearColor:function(m,y=1){o.set(m),h=y,g(o,h)},getClearAlpha:function(){return h},setClearAlpha:function(m){h=m,g(o,h)},render:function(m){let y=!1,v=f(m);v===null?g(o,h):v&&v.isColor&&(g(v,1),y=!0);let x=s.xr.getEnvironmentBlendMode();x==="additive"?n.buffers.color.setClear(0,0,0,1,a):x==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(s.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))},addToRenderList:function(m,y){let v=f(y);v&&(v.isCubeTexture||v.mapping===ia)?(c===void 0&&(c=new tt(new Wn(1,1,1),new Bt({name:"BackgroundCubeMaterial",uniforms:Zi(pn.backgroundCube.uniforms),vertexShader:pn.backgroundCube.vertexShader,fragmentShader:pn.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(x,S,M){this.matrixWorld.copyPosition(M.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),ri.copy(y.backgroundRotation),ri.x*=-1,ri.y*=-1,ri.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(ri.y*=-1,ri.z*=-1),c.material.uniforms.envMap.value=v,c.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(op.makeRotationFromEuler(ri)),c.material.toneMapped=Ge.getTransfer(v.colorSpace)!==Qe,u===v&&d===v.version&&p===s.toneMapping||(c.material.needsUpdate=!0,u=v,d=v.version,p=s.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new tt(new jn(2,2),new Bt({name:"BackgroundMaterial",uniforms:Zi(pn.background.uniforms),vertexShader:pn.background.vertexShader,fragmentShader:pn.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=Ge.getTransfer(v.colorSpace)!==Qe,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),u===v&&d===v.version&&p===s.toneMapping||(l.material.needsUpdate=!0,u=v,d=v.version,p=s.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null))}}}function cp(s,e){let t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=c(null),r=i,a=!1;function o(y){return s.bindVertexArray(y)}function l(y){return s.deleteVertexArray(y)}function c(y){let v=[],x=[],S=[];for(let M=0;M<t;M++)v[M]=0,x[M]=0,S[M]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:v,enabledAttributes:x,attributeDivisors:S,object:y,attributes:{},index:null}}function h(){let y=r.newAttributes;for(let v=0,x=y.length;v<x;v++)y[v]=0}function u(y){d(y,0)}function d(y,v){let x=r.newAttributes,S=r.enabledAttributes,M=r.attributeDivisors;x[y]=1,S[y]===0&&(s.enableVertexAttribArray(y),S[y]=1),M[y]!==v&&(s.vertexAttribDivisor(y,v),M[y]=v)}function p(){let y=r.newAttributes,v=r.enabledAttributes;for(let x=0,S=v.length;x<S;x++)v[x]!==y[x]&&(s.disableVertexAttribArray(x),v[x]=0)}function f(y,v,x,S,M,_,A){A===!0?s.vertexAttribIPointer(y,v,x,M,_):s.vertexAttribPointer(y,v,x,S,M,_)}function g(){m(),a=!0,r!==i&&(r=i,o(r.object))}function m(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:function(y,v,x,S,M){let _=!1,A=(function(T,I,P){let D=P.wireframe===!0,L=n[T.id];L===void 0&&(L={},n[T.id]=L);let z=L[I.id];z===void 0&&(z={},L[I.id]=z);let U=z[D];return U===void 0&&(U=c(s.createVertexArray()),z[D]=U),U})(S,x,v);r!==A&&(r=A,o(r.object)),_=(function(T,I,P,D){let L=r.attributes,z=I.attributes,U=0,k=P.getAttributes();for(let W in k)if(k[W].location>=0){let Q=L[W],q=z[W];if(q===void 0&&(W==="instanceMatrix"&&T.instanceMatrix&&(q=T.instanceMatrix),W==="instanceColor"&&T.instanceColor&&(q=T.instanceColor)),Q===void 0||Q.attribute!==q||q&&Q.data!==q.data)return!0;U++}return r.attributesNum!==U||r.index!==D})(y,S,x,M),_&&(function(T,I,P,D){let L={},z=I.attributes,U=0,k=P.getAttributes();for(let W in k)if(k[W].location>=0){let Q=z[W];Q===void 0&&(W==="instanceMatrix"&&T.instanceMatrix&&(Q=T.instanceMatrix),W==="instanceColor"&&T.instanceColor&&(Q=T.instanceColor));let q={};q.attribute=Q,Q&&Q.data&&(q.data=Q.data),L[W]=q,U++}r.attributes=L,r.attributesNum=U,r.index=D})(y,S,x,M),M!==null&&e.update(M,s.ELEMENT_ARRAY_BUFFER),(_||a)&&(a=!1,(function(T,I,P,D){h();let L=D.attributes,z=P.getAttributes(),U=I.defaultAttributeValues;for(let k in z){let W=z[k];if(W.location>=0){let Q=L[k];if(Q===void 0&&(k==="instanceMatrix"&&T.instanceMatrix&&(Q=T.instanceMatrix),k==="instanceColor"&&T.instanceColor&&(Q=T.instanceColor)),Q!==void 0){let q=Q.normalized,te=Q.itemSize,le=e.get(Q);if(le===void 0)continue;let ee=le.buffer,re=le.type,ce=le.bytesPerElement,de=re===s.INT||re===s.UNSIGNED_INT||Q.gpuType===Fl;if(Q.isInterleavedBufferAttribute){let oe=Q.data,w=oe.stride,C=Q.offset;if(oe.isInstancedInterleavedBuffer){for(let H=0;H<W.locationSize;H++)d(W.location+H,oe.meshPerAttribute);T.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let H=0;H<W.locationSize;H++)u(W.location+H);s.bindBuffer(s.ARRAY_BUFFER,ee);for(let H=0;H<W.locationSize;H++)f(W.location+H,te/W.locationSize,re,q,w*ce,(C+te/W.locationSize*H)*ce,de)}else{if(Q.isInstancedBufferAttribute){for(let oe=0;oe<W.locationSize;oe++)d(W.location+oe,Q.meshPerAttribute);T.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let oe=0;oe<W.locationSize;oe++)u(W.location+oe);s.bindBuffer(s.ARRAY_BUFFER,ee);for(let oe=0;oe<W.locationSize;oe++)f(W.location+oe,te/W.locationSize,re,q,te*ce,te/W.locationSize*oe*ce,de)}}else if(U!==void 0){let q=U[k];if(q!==void 0)switch(q.length){case 2:s.vertexAttrib2fv(W.location,q);break;case 3:s.vertexAttrib3fv(W.location,q);break;case 4:s.vertexAttrib4fv(W.location,q);break;default:s.vertexAttrib1fv(W.location,q)}}}}p()})(y,v,x,S),M!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(M).buffer))},reset:g,resetDefaultState:m,dispose:function(){g();for(let y in n){let v=n[y];for(let x in v){let S=v[x];for(let M in S)l(S[M].object),delete S[M];delete v[x]}delete n[y]}},releaseStatesOfGeometry:function(y){if(n[y.id]===void 0)return;let v=n[y.id];for(let x in v){let S=v[x];for(let M in S)l(S[M].object),delete S[M];delete v[x]}delete n[y.id]},releaseStatesOfProgram:function(y){for(let v in n){let x=n[v];if(x[y.id]===void 0)continue;let S=x[y.id];for(let M in S)l(S[M].object),delete S[M];delete x[y.id]}},initAttributes:h,enableAttribute:u,disableUnusedAttributes:p}}function hp(s,e,t){let n;function i(r,a,o){o!==0&&(s.drawArraysInstanced(n,r,a,o),t.update(a,n,o))}this.setMode=function(r){n=r},this.render=function(r,a){s.drawArrays(n,r,a),t.update(a,n,1)},this.renderInstances=i,this.renderMultiDraw=function(r,a,o){if(o===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,r,0,a,0,o);let l=0;for(let c=0;c<o;c++)l+=a[c];t.update(l,n,1)},this.renderMultiDrawInstances=function(r,a,o,l){if(o===0)return;let c=e.get("WEBGL_multi_draw");if(c===null)for(let h=0;h<r.length;h++)i(r[h],a[h],l[h]);else{c.multiDrawArraysInstancedWEBGL(n,r,0,a,0,l,0,o);let h=0;for(let u=0;u<o;u++)h+=a[u]*l[u];t.update(h,n,1)}}}function up(s,e,t,n){let i;function r(d){if(d==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";d="mediump"}return d==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let a=t.precision!==void 0?t.precision:"highp",o=r(a);o!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",o,"instead."),a=o);let l=t.logarithmicDepthBuffer===!0,c=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),h=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),u=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS);return{isWebGL2:!0,getMaxAnisotropy:function(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let d=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(d.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i},getMaxPrecision:r,textureFormatReadable:function(d){return d===Ot||n.convert(d)===s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT)},textureTypeReadable:function(d){let p=d===qn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(d!==fn&&n.convert(d)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&d!==Jt&&!p)},precision:a,logarithmicDepthBuffer:l,reverseDepthBuffer:c,maxTextures:h,maxVertexTextures:u,maxTextureSize:s.getParameter(s.MAX_TEXTURE_SIZE),maxCubemapSize:s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),maxAttributes:s.getParameter(s.MAX_VERTEX_ATTRIBS),maxVertexUniforms:s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),maxVaryings:s.getParameter(s.MAX_VARYING_VECTORS),maxFragmentUniforms:s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),vertexTextures:u>0,maxSamples:s.getParameter(s.MAX_SAMPLES)}}function dp(s){let e=this,t=null,n=0,i=!1,r=!1,a=new jt,o=new Te,l={value:null,needsUpdate:!1};function c(h,u,d,p){let f=h!==null?h.length:0,g=null;if(f!==0){if(g=l.value,p!==!0||g===null){let m=d+4*f,y=u.matrixWorldInverse;o.getNormalMatrix(y),(g===null||g.length<m)&&(g=new Float32Array(m));for(let v=0,x=d;v!==f;++v,x+=4)a.copy(h[v]).applyMatrix4(y,o),a.normal.toArray(g,x),g[x+3]=a.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=f,e.numIntersection=0,g}this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,u){let d=h.length!==0||u||n!==0||i;return i=u,n=h.length,d},this.beginShadows=function(){r=!0,c(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,u){t=c(h,u,0)},this.setState=function(h,u,d){let p=h.clippingPlanes,f=h.clipIntersection,g=h.clipShadows,m=s.get(h);if(!i||p===null||p.length===0||r&&!g)r?c(null):(function(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0})();else{let y=r?0:n,v=4*y,x=m.clippingState||null;l.value=x,x=c(p,u,v,d);for(let S=0;S!==v;++S)x[S]=t[S];m.clippingState=x,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=y}}}function pp(s){let e=new WeakMap;function t(i,r){return r===oo?i.mapping=Xi:r===lo&&(i.mapping=qi),i}function n(i){let r=i.target;r.removeEventListener("dispose",n);let a=e.get(r);a!==void 0&&(e.delete(r),a.dispose())}return{get:function(i){if(i&&i.isTexture){let r=i.mapping;if(r===oo||r===lo){if(e.has(i))return t(e.get(i).texture,i.mapping);{let a=i.image;if(a&&a.height>0){let o=new Wo(a.height);return o.fromEquirectangularTexture(s,i),e.set(i,o),i.addEventListener("dispose",n),t(o.texture,i.mapping)}return null}}}return i},dispose:function(){e=new WeakMap}}}var Ji=class extends Bs{constructor(e=-1,t=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-e,a=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},xh=[.125,.215,.35,.446,.526,.582],Ms=20,Ka=new Ji,Sh=new Pe,Za=null,Ja=0,$a=0,eo=!1,oi=(1+Math.sqrt(5))/2,Ui=1/oi,_h=[new E(-oi,Ui,0),new E(oi,Ui,0),new E(-Ui,0,oi),new E(Ui,0,oi),new E(0,oi,-Ui),new E(0,oi,Ui),new E(-1,1,-1),new E(1,1,-1),new E(-1,1,1),new E(1,1,1)],Vr=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Za=this._renderer.getRenderTarget(),Ja=this._renderer.getActiveCubeFace(),$a=this._renderer.getActiveMipmapLevel(),eo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Eh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Mh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Za,Ja,$a),this._renderer.xr.enabled=eo,e.scissorTest=!1,yr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Xi||e.mapping===qi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Za=this._renderer.getRenderTarget(),Ja=this._renderer.getActiveCubeFace(),$a=this._renderer.getActiveMipmapLevel(),eo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Tn,minFilter:Tn,generateMipmaps:!1,type:qn,format:Ot,colorSpace:ss,depthBuffer:!1},i=Ah(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ah(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=(function(a){let o=[],l=[],c=[],h=a,u=a-4+1+xh.length;for(let d=0;d<u;d++){let p=Math.pow(2,h);l.push(p);let f=1/p;d>a-4?f=xh[d-a+4-1]:d===0&&(f=0),c.push(f);let g=1/(p-2),m=-g,y=1+g,v=[m,m,y,m,y,y,m,m,y,y,m,y],x=6,S=6,M=3,_=2,A=1,T=new Float32Array(M*S*x),I=new Float32Array(_*S*x),P=new Float32Array(A*S*x);for(let L=0;L<x;L++){let z=L%3*2/3-1,U=L>2?0:-1,k=[z,U,0,z+2/3,U,0,z+2/3,U+1,0,z,U,0,z+2/3,U+1,0,z,U+1,0];T.set(k,M*S*L),I.set(v,_*S*L);let W=[L,L,L,L,L,L];P.set(W,A*S*L)}let D=new Je;D.setAttribute("position",new Nt(T,M)),D.setAttribute("uv",new Nt(I,_)),D.setAttribute("faceIndex",new Nt(P,A)),o.push(D),h>4&&h--}return{lodPlanes:o,sizeLods:l,sigmas:c}})(r)),this._blurMaterial=(function(a,o,l){let c=new Float32Array(Ms),h=new E(0,1,0);return new Bt({name:"SphericalGaussianBlur",defines:{n:Ms,CUBEUV_TEXEL_WIDTH:1/o,CUBEUV_TEXEL_HEIGHT:1/l,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:c},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:h}},vertexShader:Hl(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})})(r,e,t)}return i}_compileMaterial(e){let t=new tt(this._lodPlanes[0],e);this._renderer.compile(t,Ka)}_sceneToCubeUV(e,t,n,i){let r=new wt(90,1,t,n),a=[1,-1,1,1,1,1],o=[1,1,1,-1,-1,-1],l=this._renderer,c=l.autoClear,h=l.toneMapping;l.getClearColor(Sh),l.toneMapping=0,l.autoClear=!1;let u=new yn({name:"PMREM.Background",side:1,depthWrite:!1,depthTest:!1}),d=new tt(new Wn,u),p=!1,f=e.background;f?f.isColor&&(u.color.copy(f),e.background=null,p=!0):(u.color.copy(Sh),p=!0);for(let g=0;g<6;g++){let m=g%3;m===0?(r.up.set(0,a[g],0),r.lookAt(o[g],0,0)):m===1?(r.up.set(0,0,a[g]),r.lookAt(0,o[g],0)):(r.up.set(0,a[g],0),r.lookAt(0,0,o[g]));let y=this._cubeSize;yr(i,m*y,g>2?y:0,y,y),l.setRenderTarget(i),p&&l.render(d,r),l.render(e,r)}d.geometry.dispose(),d.material.dispose(),l.toneMapping=h,l.autoClear=c,e.background=f}_textureToCubeUV(e,t){let n=this._renderer,i=e.mapping===Xi||e.mapping===qi;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Eh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Mh());let r=i?this._cubemapMaterial:this._equirectMaterial,a=new tt(this._lodPlanes[0],r);r.uniforms.envMap.value=e;let o=this._cubeSize;yr(t,0,0,3*o,2*o),n.setRenderTarget(t),n.render(a,Ka)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let i=this._lodPlanes.length;for(let r=1;r<i;r++){let a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=_h[(i-r-1)%_h.length];this._blur(e,r-1,r,a,o)}t.autoClear=n}_blur(e,t,n,i,r){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",r),this._halfBlur(a,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=new tt(this._lodPlanes[i],c),u=c.uniforms,d=this._sizeLods[n]-1,p=isFinite(r)?Math.PI/(2*d):2*Math.PI/39,f=r/p,g=isFinite(r)?1+Math.floor(3*f):Ms;g>Ms&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to 20`);let m=[],y=0;for(let S=0;S<Ms;++S){let M=S/f,_=Math.exp(-M*M/2);m.push(_),S===0?y+=_:S<g&&(y+=2*_)}for(let S=0;S<m.length;S++)m[S]=m[S]/y;u.envMap.value=e.texture,u.samples.value=g,u.weights.value=m,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);let{_lodMax:v}=this;u.dTheta.value=p,u.mipInt.value=v-n;let x=this._sizeLods[i];yr(t,3*x*(i>v-4?i-v+4:0),4*(this._cubeSize-x),3*x,2*x),l.setRenderTarget(t),l.render(h,Ka)}};function Ah(s,e,t){let n=new hn(s,e,t);return n.texture.mapping=ia,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function yr(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function Mh(){return new Bt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Hl(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function Eh(){return new Bt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Hl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Hl(){return`

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
	`}function fp(s){let e=new WeakMap,t=null;function n(i){let r=i.target;r.removeEventListener("dispose",n);let a=e.get(r);a!==void 0&&(e.delete(r),a.dispose())}return{get:function(i){if(i&&i.isTexture){let r=i.mapping,a=r===oo||r===lo,o=r===Xi||r===qi;if(a||o){let l=e.get(i),c=l!==void 0?l.texture.pmremVersion:0;if(i.isRenderTargetTexture&&i.pmremVersion!==c)return t===null&&(t=new Vr(s)),l=a?t.fromEquirectangular(i,l):t.fromCubemap(i,l),l.texture.pmremVersion=i.pmremVersion,e.set(i,l),l.texture;if(l!==void 0)return l.texture;{let h=i.image;return a&&h&&h.height>0||o&&h&&(function(u){let d=0,p=6;for(let f=0;f<p;f++)u[f]!==void 0&&d++;return d===p})(h)?(t===null&&(t=new Vr(s)),l=a?t.fromEquirectangular(i):t.fromCubemap(i),l.texture.pmremVersion=i.pmremVersion,e.set(i,l),i.addEventListener("dispose",n),l.texture):null}}}return i},dispose:function(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}}}function mp(s){let e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let i=t(n);return i===null&&Ts("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function gp(s,e,t,n){let i={},r=new WeakMap;function a(l){let c=l.target;c.index!==null&&e.remove(c.index);for(let u in c.attributes)e.remove(c.attributes[u]);for(let u in c.morphAttributes){let d=c.morphAttributes[u];for(let p=0,f=d.length;p<f;p++)e.remove(d[p])}c.removeEventListener("dispose",a),delete i[c.id];let h=r.get(c);h&&(e.remove(h),r.delete(c)),n.releaseStatesOfGeometry(c),c.isInstancedBufferGeometry===!0&&delete c._maxInstanceCount,t.memory.geometries--}function o(l){let c=[],h=l.index,u=l.attributes.position,d=0;if(h!==null){let g=h.array;d=h.version;for(let m=0,y=g.length;m<y;m+=3){let v=g[m+0],x=g[m+1],S=g[m+2];c.push(v,x,x,S,S,v)}}else{if(u===void 0)return;{let g=u.array;d=u.version;for(let m=0,y=g.length/3-1;m<y;m+=3){let v=m+0,x=m+1,S=m+2;c.push(v,x,x,S,S,v)}}}let p=new(cu(c)?zr:Hr)(c,1);p.version=d;let f=r.get(l);f&&e.remove(f),r.set(l,p)}return{get:function(l,c){return i[c.id]===!0||(c.addEventListener("dispose",a),i[c.id]=!0,t.memory.geometries++),c},update:function(l){let c=l.attributes;for(let u in c)e.update(c[u],s.ARRAY_BUFFER);let h=l.morphAttributes;for(let u in h){let d=h[u];for(let p=0,f=d.length;p<f;p++)e.update(d[p],s.ARRAY_BUFFER)}},getWireframeAttribute:function(l){let c=r.get(l);if(c){let h=l.index;h!==null&&c.version<h.version&&o(l)}else o(l);return r.get(l)}}}function yp(s,e,t){let n,i,r;function a(o,l,c){c!==0&&(s.drawElementsInstanced(n,l,i,o*r,c),t.update(l,n,c))}this.setMode=function(o){n=o},this.setIndex=function(o){i=o.type,r=o.bytesPerElement},this.render=function(o,l){s.drawElements(n,l,i,o*r),t.update(l,n,1)},this.renderInstances=a,this.renderMultiDraw=function(o,l,c){if(c===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,l,0,i,o,0,c);let h=0;for(let u=0;u<c;u++)h+=l[u];t.update(h,n,1)},this.renderMultiDrawInstances=function(o,l,c,h){if(c===0)return;let u=e.get("WEBGL_multi_draw");if(u===null)for(let d=0;d<o.length;d++)a(o[d]/r,l[d],h[d]);else{u.multiDrawElementsInstancedWEBGL(n,l,0,i,o,0,h,0,c);let d=0;for(let p=0;p<c;p++)d+=l[p]*h[p];t.update(d,n,1)}}}function vp(s){let e={frame:0,calls:0,triangles:0,points:0,lines:0};return{memory:{geometries:0,textures:0},render:e,programs:null,autoReset:!0,reset:function(){e.calls=0,e.triangles=0,e.points=0,e.lines=0},update:function(t,n,i){switch(e.calls++,n){case s.TRIANGLES:e.triangles+=i*(t/3);break;case s.LINES:e.lines+=i*(t/2);break;case s.LINE_STRIP:e.lines+=i*(t-1);break;case s.LINE_LOOP:e.lines+=i*t;break;case s.POINTS:e.points+=i*t;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",n)}}}}function xp(s,e,t){let n=new WeakMap,i=new Ze;return{update:function(r,a,o){let l=r.morphTargetInfluences,c=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=c!==void 0?c.length:0,u=n.get(a);if(u===void 0||u.count!==h){let T=function(){_.dispose(),n.delete(a),a.removeEventListener("dispose",T)};u!==void 0&&u.texture.dispose();let d=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,f=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],y=a.morphAttributes.color||[],v=0;d===!0&&(v=1),p===!0&&(v=2),f===!0&&(v=3);let x=a.attributes.position.count*v,S=1;x>e.maxTextureSize&&(S=Math.ceil(x/e.maxTextureSize),x=e.maxTextureSize);let M=new Float32Array(x*S*4*h),_=new Or(M,x,S,h);_.type=Jt,_.needsUpdate=!0;let A=4*v;for(let I=0;I<h;I++){let P=g[I],D=m[I],L=y[I],z=x*S*4*I;for(let U=0;U<P.count;U++){let k=U*A;d===!0&&(i.fromBufferAttribute(P,U),M[z+k+0]=i.x,M[z+k+1]=i.y,M[z+k+2]=i.z,M[z+k+3]=0),p===!0&&(i.fromBufferAttribute(D,U),M[z+k+4]=i.x,M[z+k+5]=i.y,M[z+k+6]=i.z,M[z+k+7]=0),f===!0&&(i.fromBufferAttribute(L,U),M[z+k+8]=i.x,M[z+k+9]=i.y,M[z+k+10]=i.z,M[z+k+11]=L.itemSize===4?i.w:1)}}u={count:h,texture:_,size:new Z(x,S)},n.set(a,u),a.addEventListener("dispose",T)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)o.getUniforms().setValue(s,"morphTexture",r.morphTexture,t);else{let d=0;for(let f=0;f<l.length;f++)d+=l[f];let p=a.morphTargetsRelative?1:1-d;o.getUniforms().setValue(s,"morphTargetBaseInfluence",p),o.getUniforms().setValue(s,"morphTargetInfluences",l)}o.getUniforms().setValue(s,"morphTargetsTexture",u.texture,t),o.getUniforms().setValue(s,"morphTargetsTextureSize",u.size)}}}function Sp(s,e,t,n){let i=new WeakMap;function r(a){let o=a.target;o.removeEventListener("dispose",r),t.remove(o.instanceMatrix),o.instanceColor!==null&&t.remove(o.instanceColor)}return{update:function(a){let o=n.render.frame,l=a.geometry,c=e.get(a,l);if(i.get(c)!==o&&(e.update(c),i.set(c,o)),a.isInstancedMesh&&(a.hasEventListener("dispose",r)===!1&&a.addEventListener("dispose",r),i.get(a)!==o&&(t.update(a.instanceMatrix,s.ARRAY_BUFFER),a.instanceColor!==null&&t.update(a.instanceColor,s.ARRAY_BUFFER),i.set(a,o))),a.isSkinnedMesh){let h=a.skeleton;i.get(h)!==o&&(h.update(),i.set(h,o))}return c},dispose:function(){i=new WeakMap}}}var $i=class extends Xt{constructor(e,t,n,i,r,a,o,l,c,h=1026){if(h!==di&&h!==Qi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===di&&(n=qt),n===void 0&&h===Qi&&(n=Yi),super(null,i,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:on,this.minFilter=l!==void 0?l:on,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},pu=new Xt,Th=new $i(1,1),fu=new Or,mu=new Vo,gu=new kr,bh=[],Ch=[],wh=new Float32Array(16),Rh=new Float32Array(9),Ih=new Float32Array(4);function os(s,e,t){let n=s[0];if(n<=0||n>0)return s;let i=e*t,r=bh[i];if(r===void 0&&(r=new Float32Array(i),bh[i]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,s[a].toArray(r,o)}return r}function St(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function _t(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function aa(s,e){let t=Ch[e];t===void 0&&(t=new Int32Array(e),Ch[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function _p(s,e){let t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function Ap(s,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(St(t,e))return;s.uniform2fv(this.addr,e),_t(t,e)}}function Mp(s,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)t[0]===e.r&&t[1]===e.g&&t[2]===e.b||(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(St(t,e))return;s.uniform3fv(this.addr,e),_t(t,e)}}function Ep(s,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(St(t,e))return;s.uniform4fv(this.addr,e),_t(t,e)}}function Tp(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(St(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),_t(t,e)}else{if(St(t,n))return;Ih.set(n),s.uniformMatrix2fv(this.addr,!1,Ih),_t(t,n)}}function bp(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(St(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),_t(t,e)}else{if(St(t,n))return;Rh.set(n),s.uniformMatrix3fv(this.addr,!1,Rh),_t(t,n)}}function Cp(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(St(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),_t(t,e)}else{if(St(t,n))return;wh.set(n),s.uniformMatrix4fv(this.addr,!1,wh),_t(t,n)}}function wp(s,e){let t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function Rp(s,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(St(t,e))return;s.uniform2iv(this.addr,e),_t(t,e)}}function Ip(s,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(St(t,e))return;s.uniform3iv(this.addr,e),_t(t,e)}}function Pp(s,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(St(t,e))return;s.uniform4iv(this.addr,e),_t(t,e)}}function Dp(s,e){let t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function Bp(s,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(St(t,e))return;s.uniform2uiv(this.addr,e),_t(t,e)}}function Lp(s,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(St(t,e))return;s.uniform3uiv(this.addr,e),_t(t,e)}}function Fp(s,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(St(t,e))return;s.uniform4uiv(this.addr,e),_t(t,e)}}function Up(s,e,t){let n=this.cache,i=t.allocateTextureUnit(),r;n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),this.type===s.SAMPLER_2D_SHADOW?(Th.compareFunction=515,r=Th):r=pu,t.setTexture2D(e||r,i)}function Op(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||mu,i)}function Np(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||gu,i)}function Hp(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||fu,i)}function zp(s,e){s.uniform1fv(this.addr,e)}function kp(s,e){let t=os(e,this.size,2);s.uniform2fv(this.addr,t)}function Vp(s,e){let t=os(e,this.size,3);s.uniform3fv(this.addr,t)}function Gp(s,e){let t=os(e,this.size,4);s.uniform4fv(this.addr,t)}function Wp(s,e){let t=os(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function jp(s,e){let t=os(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function Xp(s,e){let t=os(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function qp(s,e){s.uniform1iv(this.addr,e)}function Yp(s,e){s.uniform2iv(this.addr,e)}function Qp(s,e){s.uniform3iv(this.addr,e)}function Kp(s,e){s.uniform4iv(this.addr,e)}function Zp(s,e){s.uniform1uiv(this.addr,e)}function Jp(s,e){s.uniform2uiv(this.addr,e)}function $p(s,e){s.uniform3uiv(this.addr,e)}function ef(s,e){s.uniform4uiv(this.addr,e)}function tf(s,e,t){let n=this.cache,i=e.length,r=aa(t,i);St(n,r)||(s.uniform1iv(this.addr,r),_t(n,r));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||pu,r[a])}function nf(s,e,t){let n=this.cache,i=e.length,r=aa(t,i);St(n,r)||(s.uniform1iv(this.addr,r),_t(n,r));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||mu,r[a])}function sf(s,e,t){let n=this.cache,i=e.length,r=aa(t,i);St(n,r)||(s.uniform1iv(this.addr,r),_t(n,r));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||gu,r[a])}function rf(s,e,t){let n=this.cache,i=e.length,r=aa(t,i);St(n,r)||(s.uniform1iv(this.addr,r),_t(n,r));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||fu,r[a])}var jo=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=(function(i){switch(i){case 5126:return _p;case 35664:return Ap;case 35665:return Mp;case 35666:return Ep;case 35674:return Tp;case 35675:return bp;case 35676:return Cp;case 5124:case 35670:return wp;case 35667:case 35671:return Rp;case 35668:case 35672:return Ip;case 35669:case 35673:return Pp;case 5125:return Dp;case 36294:return Bp;case 36295:return Lp;case 36296:return Fp;case 35678:case 36198:case 36298:case 36306:case 35682:return Up;case 35679:case 36299:case 36307:return Op;case 35680:case 36300:case 36308:case 36293:return Np;case 36289:case 36303:case 36311:case 36292:return Hp}})(t.type)}},Xo=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=(function(i){switch(i){case 5126:return zp;case 35664:return kp;case 35665:return Vp;case 35666:return Gp;case 35674:return Wp;case 35675:return jp;case 35676:return Xp;case 5124:case 35670:return qp;case 35667:case 35671:return Yp;case 35668:case 35672:return Qp;case 35669:case 35673:return Kp;case 5125:return Zp;case 36294:return Jp;case 36295:return $p;case 36296:return ef;case 35678:case 36198:case 36298:case 36306:case 35682:return tf;case 35679:case 36299:case 36307:return nf;case 35680:case 36300:case 36308:case 36293:return sf;case 36289:case 36303:case 36311:case 36292:return rf}})(t.type)}},qo=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let i=this.seq;for(let r=0,a=i.length;r!==a;++r){let o=i[r];o.setValue(e,t[o.id],n)}}},to=/(\w+)(\])?(\[|\.)?/g;function Ph(s,e){s.seq.push(e),s.map[e.id]=e}function af(s,e,t){let n=s.name,i=n.length;for(to.lastIndex=0;;){let r=to.exec(n),a=to.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o|=0),c===void 0||c==="["&&a+2===i){Ph(t,c===void 0?new jo(o,s,e):new Xo(o,s,e));break}{let h=t.map[o];h===void 0&&(h=new qo(o),Ph(t,h)),t=h}}}var Gi=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){let r=e.getActiveUniform(t,i);af(r,e.getUniformLocation(t,r.name),this)}}setValue(e,t,n,i){let r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){let i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){let n=[];for(let i=0,r=e.length;i!==r;++i){let a=e[i];a.id in t&&n.push(a)}return n}};function Dh(s,e,t){let n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}var of=0,Bh=new Te;function Lh(s,e,t){let n=s.getShaderParameter(e,s.COMPILE_STATUS),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";let r=/ERROR: 0:(\d+)/.exec(i);if(r){let a=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+(function(o,l){let c=o.split(`
`),h=[],u=Math.max(l-6,0),d=Math.min(l+6,c.length);for(let p=u;p<d;p++){let f=p+1;h.push(`${f===l?">":" "} ${f}: ${c[p]}`)}return h.join(`
`)})(s.getShaderSource(e),a)}return i}function lf(s,e){let t=(function(n){Ge._getMatrix(Bh,Ge.workingColorSpace,n);let i=`mat3( ${Bh.elements.map((r=>r.toFixed(4)))} )`;switch(Ge.getTransfer(n)){case ra:return[i,"LinearTransferOETF"];case Qe:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[i,"LinearTransferOETF"]}})(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function cf(s,e){let t;switch(e){case 1:t="Linear";break;case 2:t="Reinhard";break;case 3:t="Cineon";break;case 4:t="ACESFilmic";break;case 6:t="AgX";break;case 7:t="Neutral";break;case 5:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var vr=new E;function hf(){return Ge.getLuminanceCoefficients(vr),["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${vr.x.toFixed(4)}, ${vr.y.toFixed(4)}, ${vr.z.toFixed(4)} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Es(s){return s!==""}function Fh(s,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Uh(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var uf=/^[ \t]*#include +<([\w\d./]+)>/gm;function Yo(s){return s.replace(uf,pf)}var df=new Map;function pf(s,e){let t=Le[e];if(t===void 0){let n=df.get(e);if(n===void 0)throw new Error("Can not resolve #include <"+e+">");t=Le[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n)}return Yo(t)}var ff=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Oh(s){return s.replace(ff,mf)}function mf(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Nh(s){let e=`precision ${s.precision} float;
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
#define LOW_PRECISION`),e}function gf(s,e,t,n){let i=s.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=(function(D){let L="SHADOWMAP_TYPE_BASIC";return D.shadowMapType===1?L="SHADOWMAP_TYPE_PCF":D.shadowMapType===2?L="SHADOWMAP_TYPE_PCF_SOFT":D.shadowMapType===3&&(L="SHADOWMAP_TYPE_VSM"),L})(t),c=(function(D){let L="ENVMAP_TYPE_CUBE";if(D.envMap)switch(D.envMapMode){case Xi:case qi:L="ENVMAP_TYPE_CUBE";break;case ia:L="ENVMAP_TYPE_CUBE_UV"}return L})(t),h=(function(D){let L="ENVMAP_MODE_REFLECTION";return D.envMap&&D.envMapMode===qi&&(L="ENVMAP_MODE_REFRACTION"),L})(t),u=(function(D){let L="ENVMAP_BLENDING_NONE";if(D.envMap)switch(D.combine){case 0:L="ENVMAP_BLENDING_MULTIPLY";break;case 1:L="ENVMAP_BLENDING_MIX";break;case 2:L="ENVMAP_BLENDING_ADD"}return L})(t),d=(function(D){let L=D.envMapCubeUVHeight;if(L===null)return null;let z=Math.log2(L)-2,U=1/L;return{texelWidth:1/(3*Math.max(Math.pow(2,z),112)),texelHeight:U,maxMip:z}})(t),p=(function(D){return[D.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",D.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Es).join(`
`)})(t),f=(function(D){let L=[];for(let z in D){let U=D[z];U!==!1&&L.push("#define "+z+" "+U)}return L.join(`
`)})(r),g=i.createProgram(),m,y,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(Es).join(`
`),m.length>0&&(m+=`
`),y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(Es).join(`
`),y.length>0&&(y+=`
`)):(m=[Nh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Es).join(`
`),y=[Nh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==0?"#define TONE_MAPPING":"",t.toneMapping!==0?Le.tonemapping_pars_fragment:"",t.toneMapping!==0?cf("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Le.colorspace_pars_fragment,lf("linearToOutputTexel",t.outputColorSpace),hf(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Es).join(`
`)),a=Yo(a),a=Fh(a,t),a=Uh(a,t),o=Yo(o),o=Fh(o,t),o=Uh(o,t),a=Oh(a),o=Oh(o),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,y=["#define varying in",t.glslVersion===Zc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Zc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);let x=v+m+a,S=v+y+o,M=Dh(i,i.VERTEX_SHADER,x),_=Dh(i,i.FRAGMENT_SHADER,S);function A(D){if(s.debug.checkShaderErrors){let L=i.getProgramInfoLog(g).trim(),z=i.getShaderInfoLog(M).trim(),U=i.getShaderInfoLog(_).trim(),k=!0,W=!0;if(i.getProgramParameter(g,i.LINK_STATUS)===!1)if(k=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,g,M,_);else{let Q=Lh(i,M,"vertex"),q=Lh(i,_,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(g,i.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+L+`
`+Q+`
`+q)}else L!==""?console.warn("THREE.WebGLProgram: Program Info Log:",L):z!==""&&U!==""||(W=!1);W&&(D.diagnostics={runnable:k,programLog:L,vertexShader:{log:z,prefix:m},fragmentShader:{log:U,prefix:y}})}i.deleteShader(M),i.deleteShader(_),T=new Gi(i,g),I=(function(L,z){let U={},k=L.getProgramParameter(z,L.ACTIVE_ATTRIBUTES);for(let W=0;W<k;W++){let Q=L.getActiveAttrib(z,W),q=Q.name,te=1;Q.type===L.FLOAT_MAT2&&(te=2),Q.type===L.FLOAT_MAT3&&(te=3),Q.type===L.FLOAT_MAT4&&(te=4),U[q]={type:Q.type,location:L.getAttribLocation(z,q),locationSize:te}}return U})(i,g)}let T,I;i.attachShader(g,M),i.attachShader(g,_),t.index0AttributeName!==void 0?i.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(g,0,"position"),i.linkProgram(g),this.getUniforms=function(){return T===void 0&&A(this),T},this.getAttributes=function(){return I===void 0&&A(this),I};let P=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=i.getProgramParameter(g,37297)),P},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=of++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=M,this.fragmentShader=_,this}var yf=0,Qo=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Ko(e),t.set(e,n)),n}},Ko=class{constructor(e){this.id=yf++,this.code=e,this.usedTimes=0}};function vf(s,e,t,n,i,r,a){let o=new Nr,l=new Qo,c=new Set,h=[],u=i.logarithmicDepthBuffer,d=i.vertexTextures,p=i.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(m){return c.add(m),m===0?"uv":`uv${m}`}return{getParameters:function(m,y,v,x,S){let M=x.fog,_=S.geometry,A=m.isMeshStandardMaterial?x.environment:null,T=(m.isMeshStandardMaterial?t:e).get(m.envMap||A),I=T&&T.mapping===ia?T.image.height:null,P=f[m.type];m.precision!==null&&(p=i.getMaxPrecision(m.precision),p!==m.precision&&console.warn("THREE.WebGLProgram.getParameters:",m.precision,"not supported, using",p,"instead."));let D=_.morphAttributes.position||_.morphAttributes.normal||_.morphAttributes.color,L=D!==void 0?D.length:0,z,U,k,W,Q=0;if(_.morphAttributes.position!==void 0&&(Q=1),_.morphAttributes.normal!==void 0&&(Q=2),_.morphAttributes.color!==void 0&&(Q=3),P){let Ai=pn[P];z=Ai.vertexShader,U=Ai.fragmentShader}else z=m.vertexShader,U=m.fragmentShader,l.update(m),k=l.getVertexShaderID(m),W=l.getFragmentShaderID(m);let q=s.getRenderTarget(),te=s.state.buffers.depth.getReversed(),le=S.isInstancedMesh===!0,ee=S.isBatchedMesh===!0,re=!!m.map,ce=!!m.matcap,de=!!T,oe=!!m.aoMap,w=!!m.lightMap,C=!!m.bumpMap,H=!!m.normalMap,N=!!m.displacementMap,B=!!m.emissiveMap,O=!!m.metalnessMap,b=!!m.roughnessMap,F=m.anisotropy>0,V=m.clearcoat>0,J=m.dispersion>0,G=m.iridescence>0,ie=m.sheen>0,$=m.transmission>0,se=F&&!!m.anisotropyMap,fe=V&&!!m.clearcoatMap,me=V&&!!m.clearcoatNormalMap,_e=V&&!!m.clearcoatRoughnessMap,Ce=G&&!!m.iridescenceMap,Oe=G&&!!m.iridescenceThicknessMap,Fe=ie&&!!m.sheenColorMap,Ae=ie&&!!m.sheenRoughnessMap,ke=!!m.specularMap,qe=!!m.specularColorMap,nt=!!m.specularIntensityMap,Se=$&&!!m.transmissionMap,De=$&&!!m.thicknessMap,j=!!m.gradientMap,xe=!!m.alphaMap,$e=m.alphaTest>0,We=!!m.alphaHash,rt=!!m.extensions,zt=0;m.toneMapped&&(q!==null&&q.isXRRenderTarget!==!0||(zt=s.toneMapping));let X={shaderID:P,shaderType:m.type,shaderName:m.name,vertexShader:z,fragmentShader:U,defines:m.defines,customVertexShaderID:k,customFragmentShaderID:W,isRawShaderMaterial:m.isRawShaderMaterial===!0,glslVersion:m.glslVersion,precision:p,batching:ee,batchingColor:ee&&S._colorsTexture!==null,instancing:le,instancingColor:le&&S.instanceColor!==null,instancingMorph:le&&S.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:q===null?s.outputColorSpace:q.isXRRenderTarget===!0?q.texture.colorSpace:ss,alphaToCoverage:!!m.alphaToCoverage,map:re,matcap:ce,envMap:de,envMapMode:de&&T.mapping,envMapCubeUVHeight:I,aoMap:oe,lightMap:w,bumpMap:C,normalMap:H,displacementMap:d&&N,emissiveMap:B,normalMapObjectSpace:H&&m.normalMapType===1,normalMapTangentSpace:H&&m.normalMapType===0,metalnessMap:O,roughnessMap:b,anisotropy:F,anisotropyMap:se,clearcoat:V,clearcoatMap:fe,clearcoatNormalMap:me,clearcoatRoughnessMap:_e,dispersion:J,iridescence:G,iridescenceMap:Ce,iridescenceThicknessMap:Oe,sheen:ie,sheenColorMap:Fe,sheenRoughnessMap:Ae,specularMap:ke,specularColorMap:qe,specularIntensityMap:nt,transmission:$,transmissionMap:Se,thicknessMap:De,gradientMap:j,opaque:m.transparent===!1&&m.blending===1&&m.alphaToCoverage===!1,alphaMap:xe,alphaTest:$e,alphaHash:We,combine:m.combine,mapUv:re&&g(m.map.channel),aoMapUv:oe&&g(m.aoMap.channel),lightMapUv:w&&g(m.lightMap.channel),bumpMapUv:C&&g(m.bumpMap.channel),normalMapUv:H&&g(m.normalMap.channel),displacementMapUv:N&&g(m.displacementMap.channel),emissiveMapUv:B&&g(m.emissiveMap.channel),metalnessMapUv:O&&g(m.metalnessMap.channel),roughnessMapUv:b&&g(m.roughnessMap.channel),anisotropyMapUv:se&&g(m.anisotropyMap.channel),clearcoatMapUv:fe&&g(m.clearcoatMap.channel),clearcoatNormalMapUv:me&&g(m.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:_e&&g(m.clearcoatRoughnessMap.channel),iridescenceMapUv:Ce&&g(m.iridescenceMap.channel),iridescenceThicknessMapUv:Oe&&g(m.iridescenceThicknessMap.channel),sheenColorMapUv:Fe&&g(m.sheenColorMap.channel),sheenRoughnessMapUv:Ae&&g(m.sheenRoughnessMap.channel),specularMapUv:ke&&g(m.specularMap.channel),specularColorMapUv:qe&&g(m.specularColorMap.channel),specularIntensityMapUv:nt&&g(m.specularIntensityMap.channel),transmissionMapUv:Se&&g(m.transmissionMap.channel),thicknessMapUv:De&&g(m.thicknessMap.channel),alphaMapUv:xe&&g(m.alphaMap.channel),vertexTangents:!!_.attributes.tangent&&(H||F),vertexColors:m.vertexColors,vertexAlphas:m.vertexColors===!0&&!!_.attributes.color&&_.attributes.color.itemSize===4,pointsUvs:S.isPoints===!0&&!!_.attributes.uv&&(re||xe),fog:!!M,useFog:m.fog===!0,fogExp2:!!M&&M.isFogExp2,flatShading:m.flatShading===!0,sizeAttenuation:m.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:te,skinning:S.isSkinnedMesh===!0,morphTargets:_.morphAttributes.position!==void 0,morphNormals:_.morphAttributes.normal!==void 0,morphColors:_.morphAttributes.color!==void 0,morphTargetsCount:L,morphTextureStride:Q,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:m.dithering,shadowMapEnabled:s.shadowMap.enabled&&v.length>0,shadowMapType:s.shadowMap.type,toneMapping:zt,decodeVideoTexture:re&&m.map.isVideoTexture===!0&&Ge.getTransfer(m.map.colorSpace)===Qe,decodeVideoTextureEmissive:B&&m.emissiveMap.isVideoTexture===!0&&Ge.getTransfer(m.emissiveMap.colorSpace)===Qe,premultipliedAlpha:m.premultipliedAlpha,doubleSided:m.side===2,flipSided:m.side===1,useDepthPacking:m.depthPacking>=0,depthPacking:m.depthPacking||0,index0AttributeName:m.index0AttributeName,extensionClipCullDistance:rt&&m.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(rt&&m.extensions.multiDraw===!0||ee)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:m.customProgramCacheKey()};return X.vertexUv1s=c.has(1),X.vertexUv2s=c.has(2),X.vertexUv3s=c.has(3),c.clear(),X},getProgramCacheKey:function(m){let y=[];if(m.shaderID?y.push(m.shaderID):(y.push(m.customVertexShaderID),y.push(m.customFragmentShaderID)),m.defines!==void 0)for(let v in m.defines)y.push(v),y.push(m.defines[v]);return m.isRawShaderMaterial===!1&&((function(v,x){v.push(x.precision),v.push(x.outputColorSpace),v.push(x.envMapMode),v.push(x.envMapCubeUVHeight),v.push(x.mapUv),v.push(x.alphaMapUv),v.push(x.lightMapUv),v.push(x.aoMapUv),v.push(x.bumpMapUv),v.push(x.normalMapUv),v.push(x.displacementMapUv),v.push(x.emissiveMapUv),v.push(x.metalnessMapUv),v.push(x.roughnessMapUv),v.push(x.anisotropyMapUv),v.push(x.clearcoatMapUv),v.push(x.clearcoatNormalMapUv),v.push(x.clearcoatRoughnessMapUv),v.push(x.iridescenceMapUv),v.push(x.iridescenceThicknessMapUv),v.push(x.sheenColorMapUv),v.push(x.sheenRoughnessMapUv),v.push(x.specularMapUv),v.push(x.specularColorMapUv),v.push(x.specularIntensityMapUv),v.push(x.transmissionMapUv),v.push(x.thicknessMapUv),v.push(x.combine),v.push(x.fogExp2),v.push(x.sizeAttenuation),v.push(x.morphTargetsCount),v.push(x.morphAttributeCount),v.push(x.numDirLights),v.push(x.numPointLights),v.push(x.numSpotLights),v.push(x.numSpotLightMaps),v.push(x.numHemiLights),v.push(x.numRectAreaLights),v.push(x.numDirLightShadows),v.push(x.numPointLightShadows),v.push(x.numSpotLightShadows),v.push(x.numSpotLightShadowsWithMaps),v.push(x.numLightProbes),v.push(x.shadowMapType),v.push(x.toneMapping),v.push(x.numClippingPlanes),v.push(x.numClipIntersection),v.push(x.depthPacking)})(y,m),(function(v,x){o.disableAll(),x.supportsVertexTextures&&o.enable(0),x.instancing&&o.enable(1),x.instancingColor&&o.enable(2),x.instancingMorph&&o.enable(3),x.matcap&&o.enable(4),x.envMap&&o.enable(5),x.normalMapObjectSpace&&o.enable(6),x.normalMapTangentSpace&&o.enable(7),x.clearcoat&&o.enable(8),x.iridescence&&o.enable(9),x.alphaTest&&o.enable(10),x.vertexColors&&o.enable(11),x.vertexAlphas&&o.enable(12),x.vertexUv1s&&o.enable(13),x.vertexUv2s&&o.enable(14),x.vertexUv3s&&o.enable(15),x.vertexTangents&&o.enable(16),x.anisotropy&&o.enable(17),x.alphaHash&&o.enable(18),x.batching&&o.enable(19),x.dispersion&&o.enable(20),x.batchingColor&&o.enable(21),v.push(o.mask),o.disableAll(),x.fog&&o.enable(0),x.useFog&&o.enable(1),x.flatShading&&o.enable(2),x.logarithmicDepthBuffer&&o.enable(3),x.reverseDepthBuffer&&o.enable(4),x.skinning&&o.enable(5),x.morphTargets&&o.enable(6),x.morphNormals&&o.enable(7),x.morphColors&&o.enable(8),x.premultipliedAlpha&&o.enable(9),x.shadowMapEnabled&&o.enable(10),x.doubleSided&&o.enable(11),x.flipSided&&o.enable(12),x.useDepthPacking&&o.enable(13),x.dithering&&o.enable(14),x.transmission&&o.enable(15),x.sheen&&o.enable(16),x.opaque&&o.enable(17),x.pointsUvs&&o.enable(18),x.decodeVideoTexture&&o.enable(19),x.decodeVideoTextureEmissive&&o.enable(20),x.alphaToCoverage&&o.enable(21),v.push(o.mask)})(y,m),y.push(s.outputColorSpace)),y.push(m.customProgramCacheKey),y.join()},getUniforms:function(m){let y=f[m.type],v;if(y){let x=pn[y];v=ip.clone(x.uniforms)}else v=m.uniforms;return v},acquireProgram:function(m,y){let v;for(let x=0,S=h.length;x<S;x++){let M=h[x];if(M.cacheKey===y){v=M,++v.usedTimes;break}}return v===void 0&&(v=new gf(s,y,m,r),h.push(v)),v},releaseProgram:function(m){if(--m.usedTimes==0){let y=h.indexOf(m);h[y]=h[h.length-1],h.pop(),m.destroy()}},releaseShaderCache:function(m){l.remove(m)},programs:h,dispose:function(){l.dispose()}}}function xf(){let s=new WeakMap;return{has:function(e){return s.has(e)},get:function(e){let t=s.get(e);return t===void 0&&(t={},s.set(e,t)),t},remove:function(e){s.delete(e)},update:function(e,t,n){s.get(e)[t]=n},dispose:function(){s=new WeakMap}}}function Sf(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Hh(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function zh(){let s=[],e=0,t=[],n=[],i=[];function r(a,o,l,c,h,u){let d=s[e];return d===void 0?(d={id:a.id,object:a,geometry:o,material:l,groupOrder:c,renderOrder:a.renderOrder,z:h,group:u},s[e]=d):(d.id=a.id,d.object=a,d.geometry=o,d.material=l,d.groupOrder=c,d.renderOrder=a.renderOrder,d.z=h,d.group=u),e++,d}return{opaque:t,transmissive:n,transparent:i,init:function(){e=0,t.length=0,n.length=0,i.length=0},push:function(a,o,l,c,h,u){let d=r(a,o,l,c,h,u);l.transmission>0?n.push(d):l.transparent===!0?i.push(d):t.push(d)},unshift:function(a,o,l,c,h,u){let d=r(a,o,l,c,h,u);l.transmission>0?n.unshift(d):l.transparent===!0?i.unshift(d):t.unshift(d)},finish:function(){for(let a=e,o=s.length;a<o;a++){let l=s[a];if(l.id===null)break;l.id=null,l.object=null,l.geometry=null,l.material=null,l.group=null}},sort:function(a,o){t.length>1&&t.sort(a||Sf),n.length>1&&n.sort(o||Hh),i.length>1&&i.sort(o||Hh)}}}function _f(){let s=new WeakMap;return{get:function(e,t){let n=s.get(e),i;return n===void 0?(i=new zh,s.set(e,[i])):t>=n.length?(i=new zh,n.push(i)):i=n[t],i},dispose:function(){s=new WeakMap}}}function Af(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new E,color:new Pe};break;case"SpotLight":t={position:new E,direction:new E,color:new Pe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new E,color:new Pe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new E,skyColor:new Pe,groundColor:new Pe};break;case"RectAreaLight":t={color:new Pe,position:new E,halfWidth:new E,halfHeight:new E}}return s[e.id]=t,t}}}var Mf=0;function Ef(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function Tf(s){let e=new Af,t=(function(){let o={};return{get:function(l){if(o[l.id]!==void 0)return o[l.id];let c;switch(l.type){case"DirectionalLight":case"SpotLight":c={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Z};break;case"PointLight":c={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Z,shadowCameraNear:1,shadowCameraFar:1e3}}return o[l.id]=c,c}}})(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let o=0;o<9;o++)n.probe.push(new E);let i=new E,r=new ge,a=new ge;return{setup:function(o){let l=0,c=0,h=0;for(let A=0;A<9;A++)n.probe[A].set(0,0,0);let u=0,d=0,p=0,f=0,g=0,m=0,y=0,v=0,x=0,S=0,M=0;o.sort(Ef);for(let A=0,T=o.length;A<T;A++){let I=o[A],P=I.color,D=I.intensity,L=I.distance,z=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)l+=P.r*D,c+=P.g*D,h+=P.b*D;else if(I.isLightProbe){for(let U=0;U<9;U++)n.probe[U].addScaledVector(I.sh.coefficients[U],D);M++}else if(I.isDirectionalLight){let U=e.get(I);if(U.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let k=I.shadow,W=t.get(I);W.shadowIntensity=k.intensity,W.shadowBias=k.bias,W.shadowNormalBias=k.normalBias,W.shadowRadius=k.radius,W.shadowMapSize=k.mapSize,n.directionalShadow[u]=W,n.directionalShadowMap[u]=z,n.directionalShadowMatrix[u]=I.shadow.matrix,m++}n.directional[u]=U,u++}else if(I.isSpotLight){let U=e.get(I);U.position.setFromMatrixPosition(I.matrixWorld),U.color.copy(P).multiplyScalar(D),U.distance=L,U.coneCos=Math.cos(I.angle),U.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),U.decay=I.decay,n.spot[p]=U;let k=I.shadow;if(I.map&&(n.spotLightMap[x]=I.map,x++,k.updateMatrices(I),I.castShadow&&S++),n.spotLightMatrix[p]=k.matrix,I.castShadow){let W=t.get(I);W.shadowIntensity=k.intensity,W.shadowBias=k.bias,W.shadowNormalBias=k.normalBias,W.shadowRadius=k.radius,W.shadowMapSize=k.mapSize,n.spotShadow[p]=W,n.spotShadowMap[p]=z,v++}p++}else if(I.isRectAreaLight){let U=e.get(I);U.color.copy(P).multiplyScalar(D),U.halfWidth.set(.5*I.width,0,0),U.halfHeight.set(0,.5*I.height,0),n.rectArea[f]=U,f++}else if(I.isPointLight){let U=e.get(I);if(U.color.copy(I.color).multiplyScalar(I.intensity),U.distance=I.distance,U.decay=I.decay,I.castShadow){let k=I.shadow,W=t.get(I);W.shadowIntensity=k.intensity,W.shadowBias=k.bias,W.shadowNormalBias=k.normalBias,W.shadowRadius=k.radius,W.shadowMapSize=k.mapSize,W.shadowCameraNear=k.camera.near,W.shadowCameraFar=k.camera.far,n.pointShadow[d]=W,n.pointShadowMap[d]=z,n.pointShadowMatrix[d]=I.shadow.matrix,y++}n.point[d]=U,d++}else if(I.isHemisphereLight){let U=e.get(I);U.skyColor.copy(I.color).multiplyScalar(D),U.groundColor.copy(I.groundColor).multiplyScalar(D),n.hemi[g]=U,g++}}f>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=pe.LTC_FLOAT_1,n.rectAreaLTC2=pe.LTC_FLOAT_2):(n.rectAreaLTC1=pe.LTC_HALF_1,n.rectAreaLTC2=pe.LTC_HALF_2)),n.ambient[0]=l,n.ambient[1]=c,n.ambient[2]=h;let _=n.hash;_.directionalLength===u&&_.pointLength===d&&_.spotLength===p&&_.rectAreaLength===f&&_.hemiLength===g&&_.numDirectionalShadows===m&&_.numPointShadows===y&&_.numSpotShadows===v&&_.numSpotMaps===x&&_.numLightProbes===M||(n.directional.length=u,n.spot.length=p,n.rectArea.length=f,n.point.length=d,n.hemi.length=g,n.directionalShadow.length=m,n.directionalShadowMap.length=m,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=m,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=v+x-S,n.spotLightMap.length=x,n.numSpotLightShadowsWithMaps=S,n.numLightProbes=M,_.directionalLength=u,_.pointLength=d,_.spotLength=p,_.rectAreaLength=f,_.hemiLength=g,_.numDirectionalShadows=m,_.numPointShadows=y,_.numSpotShadows=v,_.numSpotMaps=x,_.numLightProbes=M,n.version=Mf++)},setupView:function(o,l){let c=0,h=0,u=0,d=0,p=0,f=l.matrixWorldInverse;for(let g=0,m=o.length;g<m;g++){let y=o[g];if(y.isDirectionalLight){let v=n.directional[c];v.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(f),c++}else if(y.isSpotLight){let v=n.spot[u];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(f),v.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(f),u++}else if(y.isRectAreaLight){let v=n.rectArea[d];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(f),a.identity(),r.copy(y.matrixWorld),r.premultiply(f),a.extractRotation(r),v.halfWidth.set(.5*y.width,0,0),v.halfHeight.set(0,.5*y.height,0),v.halfWidth.applyMatrix4(a),v.halfHeight.applyMatrix4(a),d++}else if(y.isPointLight){let v=n.point[h];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(f),h++}else if(y.isHemisphereLight){let v=n.hemi[p];v.direction.setFromMatrixPosition(y.matrixWorld),v.direction.transformDirection(f),p++}}},state:n}}function kh(s){let e=new Tf(s),t=[],n=[],i={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:function(r){i.camera=r,t.length=0,n.length=0},state:i,setupLights:function(){e.setup(t)},setupLightsView:function(r){e.setupView(t,r)},pushLight:function(r){t.push(r)},pushShadow:function(r){n.push(r)}}}function bf(s){let e=new WeakMap;return{get:function(t,n=0){let i=e.get(t),r;return i===void 0?(r=new kh(s),e.set(t,[r])):n>=i.length?(r=new kh(s),i.push(r)):r=i[n],r},dispose:function(){e=new WeakMap}}}var Zo=class extends pi{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Jo=class extends pi{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Cf(s,e,t){let n=new Ls,i=new Z,r=new Z,a=new Ze,o=new Zo({depthPacking:3201}),l=new Jo,c={},h=t.maxTextureSize,u={[na]:1,[cd]:0,[Vs]:2},d=new Bt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Z},radius:{value:4}},vertexShader:`void main() {
	gl_Position = vec4( position, 1.0 );
}`,fragmentShader:`uniform sampler2D shadow_pass;
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
}`}),p=d.clone();p.defines.HORIZONTAL_PASS=1;let f=new Je;f.setAttribute("position",new Nt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let g=new tt(f,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let y=this.type;function v(_,A){let T=e.update(g);d.defines.VSM_SAMPLES!==_.blurSamples&&(d.defines.VSM_SAMPLES=_.blurSamples,p.defines.VSM_SAMPLES=_.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),_.mapPass===null&&(_.mapPass=new hn(i.x,i.y)),d.uniforms.shadow_pass.value=_.map.texture,d.uniforms.resolution.value=_.mapSize,d.uniforms.radius.value=_.radius,s.setRenderTarget(_.mapPass),s.clear(),s.renderBufferDirect(A,null,T,d,g,null),p.uniforms.shadow_pass.value=_.mapPass.texture,p.uniforms.resolution.value=_.mapSize,p.uniforms.radius.value=_.radius,s.setRenderTarget(_.map),s.clear(),s.renderBufferDirect(A,null,T,p,g,null)}function x(_,A,T,I){let P=null,D=T.isPointLight===!0?_.customDistanceMaterial:_.customDepthMaterial;if(D!==void 0)P=D;else if(P=T.isPointLight===!0?l:o,s.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){let L=P.uuid,z=A.uuid,U=c[L];U===void 0&&(U={},c[L]=U);let k=U[z];k===void 0&&(k=P.clone(),U[z]=k,A.addEventListener("dispose",M)),P=k}return P.visible=A.visible,P.wireframe=A.wireframe,P.side=I===3?A.shadowSide!==null?A.shadowSide:A.side:A.shadowSide!==null?A.shadowSide:u[A.side],P.alphaMap=A.alphaMap,P.alphaTest=A.alphaTest,P.map=A.map,P.clipShadows=A.clipShadows,P.clippingPlanes=A.clippingPlanes,P.clipIntersection=A.clipIntersection,P.displacementMap=A.displacementMap,P.displacementScale=A.displacementScale,P.displacementBias=A.displacementBias,P.wireframeLinewidth=A.wireframeLinewidth,P.linewidth=A.linewidth,T.isPointLight===!0&&P.isMeshDistanceMaterial===!0&&(s.properties.get(P).light=T),P}function S(_,A,T,I,P){if(_.visible===!1)return;if(_.layers.test(A.layers)&&(_.isMesh||_.isLine||_.isPoints)&&(_.castShadow||_.receiveShadow&&P===3)&&(!_.frustumCulled||n.intersectsObject(_))){_.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,_.matrixWorld);let L=e.update(_),z=_.material;if(Array.isArray(z)){let U=L.groups;for(let k=0,W=U.length;k<W;k++){let Q=U[k],q=z[Q.materialIndex];if(q&&q.visible){let te=x(_,q,I,P);_.onBeforeShadow(s,_,A,T,L,te,Q),s.renderBufferDirect(T,null,L,te,_,Q),_.onAfterShadow(s,_,A,T,L,te,Q)}}}else if(z.visible){let U=x(_,z,I,P);_.onBeforeShadow(s,_,A,T,L,U,null),s.renderBufferDirect(T,null,L,U,_,null),_.onAfterShadow(s,_,A,T,L,U,null)}}let D=_.children;for(let L=0,z=D.length;L<z;L++)S(D[L],A,T,I,P)}function M(_){_.target.removeEventListener("dispose",M);for(let A in c){let T=c[A],I=_.target.uuid;I in T&&(T[I].dispose(),delete T[I])}}this.render=function(_,A,T){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||_.length===0)return;let I=s.getRenderTarget(),P=s.getActiveCubeFace(),D=s.getActiveMipmapLevel(),L=s.state;L.setBlending(0),L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);let z=y!==3&&this.type===3,U=y===3&&this.type!==3;for(let k=0,W=_.length;k<W;k++){let Q=_[k],q=Q.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;i.copy(q.mapSize);let te=q.getFrameExtents();if(i.multiply(te),r.copy(q.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/te.x),i.x=r.x*te.x,q.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/te.y),i.y=r.y*te.y,q.mapSize.y=r.y)),q.map===null||z===!0||U===!0){let ee=this.type!==3?{minFilter:on,magFilter:on}:{};q.map!==null&&q.map.dispose(),q.map=new hn(i.x,i.y,ee),q.map.texture.name=Q.name+".shadowMap",q.camera.updateProjectionMatrix()}s.setRenderTarget(q.map),s.clear();let le=q.getViewportCount();for(let ee=0;ee<le;ee++){let re=q.getViewport(ee);a.set(r.x*re.x,r.y*re.y,r.x*re.z,r.y*re.w),L.viewport(a),q.updateMatrices(Q,ee),n=q.getFrustum(),S(A,T,q.camera,Q,this.type)}q.isPointLightShadow!==!0&&this.type===3&&v(q,T),q.needsUpdate=!1}y=this.type,m.needsUpdate=!1,s.setRenderTarget(I,P,D)}}var wf={[Td]:1,[Cd]:6,[Rd]:7,[wd]:5,[bd]:0,[Pd]:2,[Dd]:4,[Id]:3};function Rf(s,e){let t=new function(){let b=!1,F=new Ze,V=null,J=new Ze(0,0,0,0);return{setMask:function(G){V===G||b||(s.colorMask(G,G,G,G),V=G)},setLocked:function(G){b=G},setClear:function(G,ie,$,se,fe){fe===!0&&(G*=se,ie*=se,$*=se),F.set(G,ie,$,se),J.equals(F)===!1&&(s.clearColor(G,ie,$,se),J.copy(F))},reset:function(){b=!1,V=null,J.set(-1,0,0,0)}}},n=new function(){let b=!1,F=!1,V=null,J=null,G=null;return{setReversed:function(ie){if(F!==ie){let $=e.get("EXT_clip_control");F?$.clipControlEXT($.LOWER_LEFT_EXT,$.ZERO_TO_ONE_EXT):$.clipControlEXT($.LOWER_LEFT_EXT,$.NEGATIVE_ONE_TO_ONE_EXT);let se=G;G=null,this.setClear(se)}F=ie},getReversed:function(){return F},setTest:function(ie){ie?de(s.DEPTH_TEST):oe(s.DEPTH_TEST)},setMask:function(ie){V===ie||b||(s.depthMask(ie),V=ie)},setFunc:function(ie){if(F&&(ie=wf[ie]),J!==ie){switch(ie){case 0:s.depthFunc(s.NEVER);break;case 1:s.depthFunc(s.ALWAYS);break;case 2:s.depthFunc(s.LESS);break;case 3:default:s.depthFunc(s.LEQUAL);break;case 4:s.depthFunc(s.EQUAL);break;case 5:s.depthFunc(s.GEQUAL);break;case 6:s.depthFunc(s.GREATER);break;case 7:s.depthFunc(s.NOTEQUAL)}J=ie}},setLocked:function(ie){b=ie},setClear:function(ie){G!==ie&&(F&&(ie=1-ie),s.clearDepth(ie),G=ie)},reset:function(){b=!1,V=null,J=null,G=null,F=!1}}},i=new function(){let b=!1,F=null,V=null,J=null,G=null,ie=null,$=null,se=null,fe=null;return{setTest:function(me){b||(me?de(s.STENCIL_TEST):oe(s.STENCIL_TEST))},setMask:function(me){F===me||b||(s.stencilMask(me),F=me)},setFunc:function(me,_e,Ce){V===me&&J===_e&&G===Ce||(s.stencilFunc(me,_e,Ce),V=me,J=_e,G=Ce)},setOp:function(me,_e,Ce){ie===me&&$===_e&&se===Ce||(s.stencilOp(me,_e,Ce),ie=me,$=_e,se=Ce)},setLocked:function(me){b=me},setClear:function(me){fe!==me&&(s.clearStencil(me),fe=me)},reset:function(){b=!1,F=null,V=null,J=null,G=null,ie=null,$=null,se=null,fe=null}}},r=new WeakMap,a=new WeakMap,o={},l={},c=new WeakMap,h=[],u=null,d=!1,p=null,f=null,g=null,m=null,y=null,v=null,x=null,S=new Pe(0,0,0),M=0,_=!1,A=null,T=null,I=null,P=null,D=null,L=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),z=!1,U=0,k=s.getParameter(s.VERSION);k.indexOf("WebGL")!==-1?(U=parseFloat(/^WebGL (\d)/.exec(k)[1]),z=U>=1):k.indexOf("OpenGL ES")!==-1&&(U=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),z=U>=2);let W=null,Q={},q=s.getParameter(s.SCISSOR_BOX),te=s.getParameter(s.VIEWPORT),le=new Ze().fromArray(q),ee=new Ze().fromArray(te);function re(b,F,V,J){let G=new Uint8Array(4),ie=s.createTexture();s.bindTexture(b,ie),s.texParameteri(b,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(b,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let $=0;$<V;$++)b===s.TEXTURE_3D||b===s.TEXTURE_2D_ARRAY?s.texImage3D(F,0,s.RGBA,1,1,J,0,s.RGBA,s.UNSIGNED_BYTE,G):s.texImage2D(F+$,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,G);return ie}let ce={};function de(b){o[b]!==!0&&(s.enable(b),o[b]=!0)}function oe(b){o[b]!==!1&&(s.disable(b),o[b]=!1)}ce[s.TEXTURE_2D]=re(s.TEXTURE_2D,s.TEXTURE_2D,1),ce[s.TEXTURE_CUBE_MAP]=re(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),ce[s.TEXTURE_2D_ARRAY]=re(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),ce[s.TEXTURE_3D]=re(s.TEXTURE_3D,s.TEXTURE_3D,1,1),t.setClear(0,0,0,1),n.setClear(1),i.setClear(0),de(s.DEPTH_TEST),n.setFunc(3),N(!1),B(1),de(s.CULL_FACE),H(0);let w={[li]:s.FUNC_ADD,[hd]:s.FUNC_SUBTRACT,[ud]:s.FUNC_REVERSE_SUBTRACT};w[103]=s.MIN,w[104]=s.MAX;let C={[dd]:s.ZERO,[pd]:s.ONE,[fd]:s.SRC_COLOR,[Wi]:s.SRC_ALPHA,[Sd]:s.SRC_ALPHA_SATURATE,[vd]:s.DST_COLOR,[gd]:s.DST_ALPHA,[md]:s.ONE_MINUS_SRC_COLOR,[ji]:s.ONE_MINUS_SRC_ALPHA,[xd]:s.ONE_MINUS_DST_COLOR,[yd]:s.ONE_MINUS_DST_ALPHA,[_d]:s.CONSTANT_COLOR,[Ad]:s.ONE_MINUS_CONSTANT_COLOR,[Md]:s.CONSTANT_ALPHA,[Ed]:s.ONE_MINUS_CONSTANT_ALPHA};function H(b,F,V,J,G,ie,$,se,fe,me){if(b!==0){if(d===!1&&(de(s.BLEND),d=!0),b===5)G=G||F,ie=ie||V,$=$||J,F===f&&G===y||(s.blendEquationSeparate(w[F],w[G]),f=F,y=G),V===g&&J===m&&ie===v&&$===x||(s.blendFuncSeparate(C[V],C[J],C[ie],C[$]),g=V,m=J,v=ie,x=$),se.equals(S)!==!1&&fe===M||(s.blendColor(se.r,se.g,se.b,fe),S.copy(se),M=fe),p=b,_=!1;else if(b!==p||me!==_){if(f===li&&y===li||(s.blendEquation(s.FUNC_ADD),f=li,y=li),me)switch(b){case 1:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case 2:s.blendFunc(s.ONE,s.ONE);break;case 3:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case 4:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",b)}else switch(b){case 1:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case 2:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case 3:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case 4:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",b)}g=null,m=null,v=null,x=null,S.set(0,0,0),M=0,p=b,_=me}}else d===!0&&(oe(s.BLEND),d=!1)}function N(b){A!==b&&(b?s.frontFace(s.CW):s.frontFace(s.CCW),A=b)}function B(b){b!==0?(de(s.CULL_FACE),b!==T&&(b===1?s.cullFace(s.BACK):b===2?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):oe(s.CULL_FACE),T=b}function O(b,F,V){b?(de(s.POLYGON_OFFSET_FILL),P===F&&D===V||(s.polygonOffset(F,V),P=F,D=V)):oe(s.POLYGON_OFFSET_FILL)}return{buffers:{color:t,depth:n,stencil:i},enable:de,disable:oe,bindFramebuffer:function(b,F){return l[b]!==F&&(s.bindFramebuffer(b,F),l[b]=F,b===s.DRAW_FRAMEBUFFER&&(l[s.FRAMEBUFFER]=F),b===s.FRAMEBUFFER&&(l[s.DRAW_FRAMEBUFFER]=F),!0)},drawBuffers:function(b,F){let V=h,J=!1;if(b){V=c.get(F),V===void 0&&(V=[],c.set(F,V));let G=b.textures;if(V.length!==G.length||V[0]!==s.COLOR_ATTACHMENT0){for(let ie=0,$=G.length;ie<$;ie++)V[ie]=s.COLOR_ATTACHMENT0+ie;V.length=G.length,J=!0}}else V[0]!==s.BACK&&(V[0]=s.BACK,J=!0);J&&s.drawBuffers(V)},useProgram:function(b){return u!==b&&(s.useProgram(b),u=b,!0)},setBlending:H,setMaterial:function(b,F){b.side===2?oe(s.CULL_FACE):de(s.CULL_FACE);let V=b.side===1;F&&(V=!V),N(V),b.blending===1&&b.transparent===!1?H(0):H(b.blending,b.blendEquation,b.blendSrc,b.blendDst,b.blendEquationAlpha,b.blendSrcAlpha,b.blendDstAlpha,b.blendColor,b.blendAlpha,b.premultipliedAlpha),n.setFunc(b.depthFunc),n.setTest(b.depthTest),n.setMask(b.depthWrite),t.setMask(b.colorWrite);let J=b.stencilWrite;i.setTest(J),J&&(i.setMask(b.stencilWriteMask),i.setFunc(b.stencilFunc,b.stencilRef,b.stencilFuncMask),i.setOp(b.stencilFail,b.stencilZFail,b.stencilZPass)),O(b.polygonOffset,b.polygonOffsetFactor,b.polygonOffsetUnits),b.alphaToCoverage===!0?de(s.SAMPLE_ALPHA_TO_COVERAGE):oe(s.SAMPLE_ALPHA_TO_COVERAGE)},setFlipSided:N,setCullFace:B,setLineWidth:function(b){b!==I&&(z&&s.lineWidth(b),I=b)},setPolygonOffset:O,setScissorTest:function(b){b?de(s.SCISSOR_TEST):oe(s.SCISSOR_TEST)},activeTexture:function(b){b===void 0&&(b=s.TEXTURE0+L-1),W!==b&&(s.activeTexture(b),W=b)},bindTexture:function(b,F,V){V===void 0&&(V=W===null?s.TEXTURE0+L-1:W);let J=Q[V];J===void 0&&(J={type:void 0,texture:void 0},Q[V]=J),J.type===b&&J.texture===F||(W!==V&&(s.activeTexture(V),W=V),s.bindTexture(b,F||ce[b]),J.type=b,J.texture=F)},unbindTexture:function(){let b=Q[W];b!==void 0&&b.type!==void 0&&(s.bindTexture(b.type,null),b.type=void 0,b.texture=void 0)},compressedTexImage2D:function(){try{s.compressedTexImage2D.apply(s,arguments)}catch(b){console.error("THREE.WebGLState:",b)}},compressedTexImage3D:function(){try{s.compressedTexImage3D.apply(s,arguments)}catch(b){console.error("THREE.WebGLState:",b)}},texImage2D:function(){try{s.texImage2D.apply(s,arguments)}catch(b){console.error("THREE.WebGLState:",b)}},texImage3D:function(){try{s.texImage3D.apply(s,arguments)}catch(b){console.error("THREE.WebGLState:",b)}},updateUBOMapping:function(b,F){let V=a.get(F);V===void 0&&(V=new WeakMap,a.set(F,V));let J=V.get(b);J===void 0&&(J=s.getUniformBlockIndex(F,b.name),V.set(b,J))},uniformBlockBinding:function(b,F){let V=a.get(F).get(b);r.get(F)!==V&&(s.uniformBlockBinding(F,V,b.__bindingPointIndex),r.set(F,V))},texStorage2D:function(){try{s.texStorage2D.apply(s,arguments)}catch(b){console.error("THREE.WebGLState:",b)}},texStorage3D:function(){try{s.texStorage3D.apply(s,arguments)}catch(b){console.error("THREE.WebGLState:",b)}},texSubImage2D:function(){try{s.texSubImage2D.apply(s,arguments)}catch(b){console.error("THREE.WebGLState:",b)}},texSubImage3D:function(){try{s.texSubImage3D.apply(s,arguments)}catch(b){console.error("THREE.WebGLState:",b)}},compressedTexSubImage2D:function(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(b){console.error("THREE.WebGLState:",b)}},compressedTexSubImage3D:function(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(b){console.error("THREE.WebGLState:",b)}},scissor:function(b){le.equals(b)===!1&&(s.scissor(b.x,b.y,b.z,b.w),le.copy(b))},viewport:function(b){ee.equals(b)===!1&&(s.viewport(b.x,b.y,b.z,b.w),ee.copy(b))},reset:function(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),n.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),o={},W=null,Q={},l={},c=new WeakMap,h=[],u=null,d=!1,p=null,f=null,g=null,m=null,y=null,v=null,x=null,S=new Pe(0,0,0),M=0,_=!1,A=null,T=null,I=null,P=null,D=null,le.set(0,0,s.canvas.width,s.canvas.height),ee.set(0,0,s.canvas.width,s.canvas.height),t.reset(),n.reset(),i.reset()}}}function Vh(s,e,t,n){let i=(function(r){switch(r){case fn:case $h:return{byteLength:1,components:1};case Ps:case eu:case qn:return{byteLength:2,components:1};case Ul:case Ol:return{byteLength:2,components:4};case qt:case Fl:case Jt:return{byteLength:4,components:1};case tu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)})(n);switch(t){case nu:case su:return s*e;case ru:return s*e*2;case au:case Gs:return s*e/i.components*i.byteLength;case sa:case Nl:return s*e*2/i.components*i.byteLength;case iu:return s*e*3/i.components*i.byteLength;case Ot:case yi:return s*e*4/i.components*i.byteLength;case wr:case Rr:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Ir:case Pr:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case po:case mo:return Math.max(s,16)*Math.max(e,8)/4;case uo:case fo:return Math.max(s,8)*Math.max(e,8)/2;case go:case yo:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case vo:case xo:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case So:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case _o:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Ao:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Mo:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Eo:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case To:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case bo:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Co:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case wo:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Ro:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Io:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Po:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Do:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Dr:case Bo:case Lo:return Math.ceil(s/4)*Math.ceil(e/4)*16;case ou:case Fo:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Uo:case Oo:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function If(s,e,t,n,i,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator<"u"&&/OculusBrowser/g.test(navigator.userAgent),c=new Z,h=new WeakMap,u,d=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function f(w,C){return p?new OffscreenCanvas(w,C):Fr("canvas")}function g(w,C,H){let N=1,B=oe(w);if((B.width>H||B.height>H)&&(N=H/Math.max(B.width,B.height)),N<1){if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){let O=Math.floor(N*B.width),b=Math.floor(N*B.height);u===void 0&&(u=f(O,b));let F=C?f(O,b):u;return F.width=O,F.height=b,F.getContext("2d").drawImage(w,0,0,O,b),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+B.width+"x"+B.height+") to ("+O+"x"+b+")."),F}return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+B.width+"x"+B.height+")."),w}return w}function m(w){return w.generateMipmaps}function y(w){s.generateMipmap(w)}function v(w){return w.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?s.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function x(w,C,H,N,B=!1){if(w!==null){if(s[w]!==void 0)return s[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let O=C;if(C===s.RED&&(H===s.FLOAT&&(O=s.R32F),H===s.HALF_FLOAT&&(O=s.R16F),H===s.UNSIGNED_BYTE&&(O=s.R8)),C===s.RED_INTEGER&&(H===s.UNSIGNED_BYTE&&(O=s.R8UI),H===s.UNSIGNED_SHORT&&(O=s.R16UI),H===s.UNSIGNED_INT&&(O=s.R32UI),H===s.BYTE&&(O=s.R8I),H===s.SHORT&&(O=s.R16I),H===s.INT&&(O=s.R32I)),C===s.RG&&(H===s.FLOAT&&(O=s.RG32F),H===s.HALF_FLOAT&&(O=s.RG16F),H===s.UNSIGNED_BYTE&&(O=s.RG8)),C===s.RG_INTEGER&&(H===s.UNSIGNED_BYTE&&(O=s.RG8UI),H===s.UNSIGNED_SHORT&&(O=s.RG16UI),H===s.UNSIGNED_INT&&(O=s.RG32UI),H===s.BYTE&&(O=s.RG8I),H===s.SHORT&&(O=s.RG16I),H===s.INT&&(O=s.RG32I)),C===s.RGB_INTEGER&&(H===s.UNSIGNED_BYTE&&(O=s.RGB8UI),H===s.UNSIGNED_SHORT&&(O=s.RGB16UI),H===s.UNSIGNED_INT&&(O=s.RGB32UI),H===s.BYTE&&(O=s.RGB8I),H===s.SHORT&&(O=s.RGB16I),H===s.INT&&(O=s.RGB32I)),C===s.RGBA_INTEGER&&(H===s.UNSIGNED_BYTE&&(O=s.RGBA8UI),H===s.UNSIGNED_SHORT&&(O=s.RGBA16UI),H===s.UNSIGNED_INT&&(O=s.RGBA32UI),H===s.BYTE&&(O=s.RGBA8I),H===s.SHORT&&(O=s.RGBA16I),H===s.INT&&(O=s.RGBA32I)),C===s.RGB&&H===s.UNSIGNED_INT_5_9_9_9_REV&&(O=s.RGB9_E5),C===s.RGBA){let b=B?ra:Ge.getTransfer(N);H===s.FLOAT&&(O=s.RGBA32F),H===s.HALF_FLOAT&&(O=s.RGBA16F),H===s.UNSIGNED_BYTE&&(O=b===Qe?s.SRGB8_ALPHA8:s.RGBA8),H===s.UNSIGNED_SHORT_4_4_4_4&&(O=s.RGBA4),H===s.UNSIGNED_SHORT_5_5_5_1&&(O=s.RGB5_A1)}return O!==s.R16F&&O!==s.R32F&&O!==s.RG16F&&O!==s.RG32F&&O!==s.RGBA16F&&O!==s.RGBA32F||e.get("EXT_color_buffer_float"),O}function S(w,C){let H;return w?C===null||C===qt||C===Yi?H=s.DEPTH24_STENCIL8:C===Jt?H=s.DEPTH32F_STENCIL8:C===Ps&&(H=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):C===null||C===qt||C===Yi?H=s.DEPTH_COMPONENT24:C===Jt?H=s.DEPTH_COMPONENT32F:C===Ps&&(H=s.DEPTH_COMPONENT16),H}function M(w,C){return m(w)===!0||w.isFramebufferTexture&&w.minFilter!==on&&w.minFilter!==Tn?Math.log2(Math.max(C.width,C.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?C.mipmaps.length:1}function _(w){let C=w.target;C.removeEventListener("dispose",_),(function(H){let N=n.get(H);if(N.__webglInit===void 0)return;let B=H.source,O=d.get(B);if(O){let b=O[N.__cacheKey];b.usedTimes--,b.usedTimes===0&&T(H),Object.keys(O).length===0&&d.delete(B)}n.remove(H)})(C),C.isVideoTexture&&h.delete(C)}function A(w){let C=w.target;C.removeEventListener("dispose",A),(function(H){let N=n.get(H);if(H.depthTexture&&(H.depthTexture.dispose(),n.remove(H.depthTexture)),H.isWebGLCubeRenderTarget)for(let O=0;O<6;O++){if(Array.isArray(N.__webglFramebuffer[O]))for(let b=0;b<N.__webglFramebuffer[O].length;b++)s.deleteFramebuffer(N.__webglFramebuffer[O][b]);else s.deleteFramebuffer(N.__webglFramebuffer[O]);N.__webglDepthbuffer&&s.deleteRenderbuffer(N.__webglDepthbuffer[O])}else{if(Array.isArray(N.__webglFramebuffer))for(let O=0;O<N.__webglFramebuffer.length;O++)s.deleteFramebuffer(N.__webglFramebuffer[O]);else s.deleteFramebuffer(N.__webglFramebuffer);if(N.__webglDepthbuffer&&s.deleteRenderbuffer(N.__webglDepthbuffer),N.__webglMultisampledFramebuffer&&s.deleteFramebuffer(N.__webglMultisampledFramebuffer),N.__webglColorRenderbuffer)for(let O=0;O<N.__webglColorRenderbuffer.length;O++)N.__webglColorRenderbuffer[O]&&s.deleteRenderbuffer(N.__webglColorRenderbuffer[O]);N.__webglDepthRenderbuffer&&s.deleteRenderbuffer(N.__webglDepthRenderbuffer)}let B=H.textures;for(let O=0,b=B.length;O<b;O++){let F=n.get(B[O]);F.__webglTexture&&(s.deleteTexture(F.__webglTexture),a.memory.textures--),n.remove(B[O])}n.remove(H)})(C)}function T(w){let C=n.get(w);s.deleteTexture(C.__webglTexture);let H=w.source;delete d.get(H)[C.__cacheKey],a.memory.textures--}let I=0;function P(w,C){let H=n.get(w);if(w.isVideoTexture&&(function(N){let B=a.render.frame;h.get(N)!==B&&(h.set(N,B),N.update())})(w),w.isRenderTargetTexture===!1&&w.version>0&&H.__version!==w.version){let N=w.image;if(N===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else{if(N.complete!==!1)return void W(H,w,C);console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete")}}t.bindTexture(s.TEXTURE_2D,H.__webglTexture,s.TEXTURE0+C)}let D={[co]:s.REPEAT,[Is]:s.CLAMP_TO_EDGE,[ho]:s.MIRRORED_REPEAT},L={[on]:s.NEAREST,[Bd]:s.NEAREST_MIPMAP_NEAREST,[Js]:s.NEAREST_MIPMAP_LINEAR,[Tn]:s.LINEAR,[wa]:s.LINEAR_MIPMAP_NEAREST,[Hi]:s.LINEAR_MIPMAP_LINEAR},z={[Ld]:s.NEVER,[kd]:s.ALWAYS,[Fd]:s.LESS,[Od]:s.LEQUAL,[Ud]:s.EQUAL,[zd]:s.GEQUAL,[Nd]:s.GREATER,[Hd]:s.NOTEQUAL};function U(w,C){if(C.type!==Jt||e.has("OES_texture_float_linear")!==!1||C.magFilter!==Tn&&C.magFilter!==wa&&C.magFilter!==Js&&C.magFilter!==Hi&&C.minFilter!==Tn&&C.minFilter!==wa&&C.minFilter!==Js&&C.minFilter!==Hi||console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(w,s.TEXTURE_WRAP_S,D[C.wrapS]),s.texParameteri(w,s.TEXTURE_WRAP_T,D[C.wrapT]),w!==s.TEXTURE_3D&&w!==s.TEXTURE_2D_ARRAY||s.texParameteri(w,s.TEXTURE_WRAP_R,D[C.wrapR]),s.texParameteri(w,s.TEXTURE_MAG_FILTER,L[C.magFilter]),s.texParameteri(w,s.TEXTURE_MIN_FILTER,L[C.minFilter]),C.compareFunction&&(s.texParameteri(w,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(w,s.TEXTURE_COMPARE_FUNC,z[C.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(C.magFilter===on||C.minFilter!==Js&&C.minFilter!==Hi||C.type===Jt&&e.has("OES_texture_float_linear")===!1)return;if(C.anisotropy>1||n.get(C).__currentAnisotropy){let H=e.get("EXT_texture_filter_anisotropic");s.texParameterf(w,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(C.anisotropy,i.getMaxAnisotropy())),n.get(C).__currentAnisotropy=C.anisotropy}}}function k(w,C){let H=!1;w.__webglInit===void 0&&(w.__webglInit=!0,C.addEventListener("dispose",_));let N=C.source,B=d.get(N);B===void 0&&(B={},d.set(N,B));let O=(function(b){let F=[];return F.push(b.wrapS),F.push(b.wrapT),F.push(b.wrapR||0),F.push(b.magFilter),F.push(b.minFilter),F.push(b.anisotropy),F.push(b.internalFormat),F.push(b.format),F.push(b.type),F.push(b.generateMipmaps),F.push(b.premultiplyAlpha),F.push(b.flipY),F.push(b.unpackAlignment),F.push(b.colorSpace),F.join()})(C);if(O!==w.__cacheKey){B[O]===void 0&&(B[O]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,H=!0),B[O].usedTimes++;let b=B[w.__cacheKey];b!==void 0&&(B[w.__cacheKey].usedTimes--,b.usedTimes===0&&T(C)),w.__cacheKey=O,w.__webglTexture=B[O].texture}return H}function W(w,C,H){let N=s.TEXTURE_2D;(C.isDataArrayTexture||C.isCompressedArrayTexture)&&(N=s.TEXTURE_2D_ARRAY),C.isData3DTexture&&(N=s.TEXTURE_3D);let B=k(w,C),O=C.source;t.bindTexture(N,w.__webglTexture,s.TEXTURE0+H);let b=n.get(O);if(O.version!==b.__version||B===!0){t.activeTexture(s.TEXTURE0+H);let F=Ge.getPrimaries(Ge.workingColorSpace),V=C.colorSpace===Oi?null:Ge.getPrimaries(C.colorSpace),J=C.colorSpace===Oi||F===V?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,C.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,C.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,J);let G=g(C.image,!1,i.maxTextureSize);G=de(C,G);let ie=r.convert(C.format,C.colorSpace),$=r.convert(C.type),se,fe=x(C.internalFormat,ie,$,C.colorSpace,C.isVideoTexture);U(N,C);let me=C.mipmaps,_e=C.isVideoTexture!==!0,Ce=b.__version===void 0||B===!0,Oe=O.dataReady,Fe=M(C,G);if(C.isDepthTexture)fe=S(C.format===Qi,C.type),Ce&&(_e?t.texStorage2D(s.TEXTURE_2D,1,fe,G.width,G.height):t.texImage2D(s.TEXTURE_2D,0,fe,G.width,G.height,0,ie,$,null));else if(C.isDataTexture)if(me.length>0){_e&&Ce&&t.texStorage2D(s.TEXTURE_2D,Fe,fe,me[0].width,me[0].height);for(let Ae=0,ke=me.length;Ae<ke;Ae++)se=me[Ae],_e?Oe&&t.texSubImage2D(s.TEXTURE_2D,Ae,0,0,se.width,se.height,ie,$,se.data):t.texImage2D(s.TEXTURE_2D,Ae,fe,se.width,se.height,0,ie,$,se.data);C.generateMipmaps=!1}else _e?(Ce&&t.texStorage2D(s.TEXTURE_2D,Fe,fe,G.width,G.height),Oe&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,G.width,G.height,ie,$,G.data)):t.texImage2D(s.TEXTURE_2D,0,fe,G.width,G.height,0,ie,$,G.data);else if(C.isCompressedTexture)if(C.isCompressedArrayTexture){_e&&Ce&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Fe,fe,me[0].width,me[0].height,G.depth);for(let Ae=0,ke=me.length;Ae<ke;Ae++)if(se=me[Ae],C.format!==Ot)if(ie!==null)if(_e){if(Oe)if(C.layerUpdates.size>0){let qe=Vh(se.width,se.height,C.format,C.type);for(let nt of C.layerUpdates){let Se=se.data.subarray(nt*qe/se.data.BYTES_PER_ELEMENT,(nt+1)*qe/se.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Ae,0,0,nt,se.width,se.height,1,ie,Se)}C.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Ae,0,0,0,se.width,se.height,G.depth,ie,se.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Ae,fe,se.width,se.height,G.depth,0,se.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else _e?Oe&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,Ae,0,0,0,se.width,se.height,G.depth,ie,$,se.data):t.texImage3D(s.TEXTURE_2D_ARRAY,Ae,fe,se.width,se.height,G.depth,0,ie,$,se.data)}else{_e&&Ce&&t.texStorage2D(s.TEXTURE_2D,Fe,fe,me[0].width,me[0].height);for(let Ae=0,ke=me.length;Ae<ke;Ae++)se=me[Ae],C.format!==Ot?ie!==null?_e?Oe&&t.compressedTexSubImage2D(s.TEXTURE_2D,Ae,0,0,se.width,se.height,ie,se.data):t.compressedTexImage2D(s.TEXTURE_2D,Ae,fe,se.width,se.height,0,se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):_e?Oe&&t.texSubImage2D(s.TEXTURE_2D,Ae,0,0,se.width,se.height,ie,$,se.data):t.texImage2D(s.TEXTURE_2D,Ae,fe,se.width,se.height,0,ie,$,se.data)}else if(C.isDataArrayTexture)if(_e){if(Ce&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Fe,fe,G.width,G.height,G.depth),Oe)if(C.layerUpdates.size>0){let Ae=Vh(G.width,G.height,C.format,C.type);for(let ke of C.layerUpdates){let qe=G.data.subarray(ke*Ae/G.data.BYTES_PER_ELEMENT,(ke+1)*Ae/G.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,ke,G.width,G.height,1,ie,$,qe)}C.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,G.width,G.height,G.depth,ie,$,G.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,fe,G.width,G.height,G.depth,0,ie,$,G.data);else if(C.isData3DTexture)_e?(Ce&&t.texStorage3D(s.TEXTURE_3D,Fe,fe,G.width,G.height,G.depth),Oe&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,G.width,G.height,G.depth,ie,$,G.data)):t.texImage3D(s.TEXTURE_3D,0,fe,G.width,G.height,G.depth,0,ie,$,G.data);else if(C.isFramebufferTexture){if(Ce)if(_e)t.texStorage2D(s.TEXTURE_2D,Fe,fe,G.width,G.height);else{let Ae=G.width,ke=G.height;for(let qe=0;qe<Fe;qe++)t.texImage2D(s.TEXTURE_2D,qe,fe,Ae,ke,0,ie,$,null),Ae>>=1,ke>>=1}}else if(me.length>0){if(_e&&Ce){let Ae=oe(me[0]);t.texStorage2D(s.TEXTURE_2D,Fe,fe,Ae.width,Ae.height)}for(let Ae=0,ke=me.length;Ae<ke;Ae++)se=me[Ae],_e?Oe&&t.texSubImage2D(s.TEXTURE_2D,Ae,0,0,ie,$,se):t.texImage2D(s.TEXTURE_2D,Ae,fe,ie,$,se);C.generateMipmaps=!1}else if(_e){if(Ce){let Ae=oe(G);t.texStorage2D(s.TEXTURE_2D,Fe,fe,Ae.width,Ae.height)}Oe&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,ie,$,G)}else t.texImage2D(s.TEXTURE_2D,0,fe,ie,$,G);m(C)&&y(N),b.__version=O.version,C.onUpdate&&C.onUpdate(C)}w.__version=C.version}function Q(w,C,H,N,B,O){let b=r.convert(H.format,H.colorSpace),F=r.convert(H.type),V=x(H.internalFormat,b,F,H.colorSpace),J=n.get(C),G=n.get(H);if(G.__renderTarget=C,!J.__hasExternalTextures){let ie=Math.max(1,C.width>>O),$=Math.max(1,C.height>>O);B===s.TEXTURE_3D||B===s.TEXTURE_2D_ARRAY?t.texImage3D(B,O,V,ie,$,C.depth,0,b,F,null):t.texImage2D(B,O,V,ie,$,0,b,F,null)}t.bindFramebuffer(s.FRAMEBUFFER,w),ce(C)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,N,B,G.__webglTexture,0,re(C)):(B===s.TEXTURE_2D||B>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&B<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,N,B,G.__webglTexture,O),t.bindFramebuffer(s.FRAMEBUFFER,null)}function q(w,C,H){if(s.bindRenderbuffer(s.RENDERBUFFER,w),C.depthBuffer){let N=C.depthTexture,B=N&&N.isDepthTexture?N.type:null,O=S(C.stencilBuffer,B),b=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,F=re(C);ce(C)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,F,O,C.width,C.height):H?s.renderbufferStorageMultisample(s.RENDERBUFFER,F,O,C.width,C.height):s.renderbufferStorage(s.RENDERBUFFER,O,C.width,C.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,b,s.RENDERBUFFER,w)}else{let N=C.textures;for(let B=0;B<N.length;B++){let O=N[B],b=r.convert(O.format,O.colorSpace),F=r.convert(O.type),V=x(O.internalFormat,b,F,O.colorSpace),J=re(C);H&&ce(C)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,J,V,C.width,C.height):ce(C)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,J,V,C.width,C.height):s.renderbufferStorage(s.RENDERBUFFER,V,C.width,C.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function te(w){let C=n.get(w),H=w.isWebGLCubeRenderTarget===!0;if(C.__boundDepthTexture!==w.depthTexture){let N=w.depthTexture;if(C.__depthDisposeCallback&&C.__depthDisposeCallback(),N){let B=()=>{delete C.__boundDepthTexture,delete C.__depthDisposeCallback,N.removeEventListener("dispose",B)};N.addEventListener("dispose",B),C.__depthDisposeCallback=B}C.__boundDepthTexture=N}if(w.depthTexture&&!C.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");(function(N,B){if(B&&B.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,N),!B.depthTexture||!B.depthTexture.isDepthTexture)throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let O=n.get(B.depthTexture);O.__renderTarget=B,O.__webglTexture&&B.depthTexture.image.width===B.width&&B.depthTexture.image.height===B.height||(B.depthTexture.image.width=B.width,B.depthTexture.image.height=B.height,B.depthTexture.needsUpdate=!0),P(B.depthTexture,0);let b=O.__webglTexture,F=re(B);if(B.depthTexture.format===di)ce(B)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,b,0,F):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,b,0);else{if(B.depthTexture.format!==Qi)throw new Error("Unknown depthTexture format");ce(B)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,b,0,F):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,b,0)}})(C.__webglFramebuffer,w)}else if(H){C.__webglDepthbuffer=[];for(let N=0;N<6;N++)if(t.bindFramebuffer(s.FRAMEBUFFER,C.__webglFramebuffer[N]),C.__webglDepthbuffer[N]===void 0)C.__webglDepthbuffer[N]=s.createRenderbuffer(),q(C.__webglDepthbuffer[N],w,!1);else{let B=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,O=C.__webglDepthbuffer[N];s.bindRenderbuffer(s.RENDERBUFFER,O),s.framebufferRenderbuffer(s.FRAMEBUFFER,B,s.RENDERBUFFER,O)}}else if(t.bindFramebuffer(s.FRAMEBUFFER,C.__webglFramebuffer),C.__webglDepthbuffer===void 0)C.__webglDepthbuffer=s.createRenderbuffer(),q(C.__webglDepthbuffer,w,!1);else{let N=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,B=C.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,B),s.framebufferRenderbuffer(s.FRAMEBUFFER,N,s.RENDERBUFFER,B)}t.bindFramebuffer(s.FRAMEBUFFER,null)}let le=[],ee=[];function re(w){return Math.min(i.maxSamples,w.samples)}function ce(w){let C=n.get(w);return w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&C.__useRenderToTexture!==!1}function de(w,C){let H=w.colorSpace,N=w.format,B=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||H!==ss&&H!==Oi&&(Ge.getTransfer(H)===Qe?N===Ot&&B===fn||console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),C}function oe(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(c.width=w.naturalWidth||w.width,c.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(c.width=w.displayWidth,c.height=w.displayHeight):(c.width=w.width,c.height=w.height),c}this.allocateTextureUnit=function(){let w=I;return w>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+i.maxTextures),I+=1,w},this.resetTextureUnits=function(){I=0},this.setTexture2D=P,this.setTexture2DArray=function(w,C){let H=n.get(w);w.version>0&&H.__version!==w.version?W(H,w,C):t.bindTexture(s.TEXTURE_2D_ARRAY,H.__webglTexture,s.TEXTURE0+C)},this.setTexture3D=function(w,C){let H=n.get(w);w.version>0&&H.__version!==w.version?W(H,w,C):t.bindTexture(s.TEXTURE_3D,H.__webglTexture,s.TEXTURE0+C)},this.setTextureCube=function(w,C){let H=n.get(w);w.version>0&&H.__version!==w.version?(function(N,B,O){if(B.image.length!==6)return;let b=k(N,B),F=B.source;t.bindTexture(s.TEXTURE_CUBE_MAP,N.__webglTexture,s.TEXTURE0+O);let V=n.get(F);if(F.version!==V.__version||b===!0){t.activeTexture(s.TEXTURE0+O);let J=Ge.getPrimaries(Ge.workingColorSpace),G=B.colorSpace===Oi?null:Ge.getPrimaries(B.colorSpace),ie=B.colorSpace===Oi||J===G?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,B.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,B.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ie);let $=B.isCompressedTexture||B.image[0].isCompressedTexture,se=B.image[0]&&B.image[0].isDataTexture,fe=[];for(let Se=0;Se<6;Se++)fe[Se]=$||se?se?B.image[Se].image:B.image[Se]:g(B.image[Se],!0,i.maxCubemapSize),fe[Se]=de(B,fe[Se]);let me=fe[0],_e=r.convert(B.format,B.colorSpace),Ce=r.convert(B.type),Oe=x(B.internalFormat,_e,Ce,B.colorSpace),Fe=B.isVideoTexture!==!0,Ae=V.__version===void 0||b===!0,ke=F.dataReady,qe,nt=M(B,me);if(U(s.TEXTURE_CUBE_MAP,B),$){Fe&&Ae&&t.texStorage2D(s.TEXTURE_CUBE_MAP,nt,Oe,me.width,me.height);for(let Se=0;Se<6;Se++){qe=fe[Se].mipmaps;for(let De=0;De<qe.length;De++){let j=qe[De];B.format!==Ot?_e!==null?Fe?ke&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,De,0,0,j.width,j.height,_e,j.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,De,Oe,j.width,j.height,0,j.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Fe?ke&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,De,0,0,j.width,j.height,_e,Ce,j.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,De,Oe,j.width,j.height,0,_e,Ce,j.data)}}}else{if(qe=B.mipmaps,Fe&&Ae){qe.length>0&&nt++;let Se=oe(fe[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,nt,Oe,Se.width,Se.height)}for(let Se=0;Se<6;Se++)if(se){Fe?ke&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,0,0,fe[Se].width,fe[Se].height,_e,Ce,fe[Se].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,Oe,fe[Se].width,fe[Se].height,0,_e,Ce,fe[Se].data);for(let De=0;De<qe.length;De++){let j=qe[De].image[Se].image;Fe?ke&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,De+1,0,0,j.width,j.height,_e,Ce,j.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,De+1,Oe,j.width,j.height,0,_e,Ce,j.data)}}else{Fe?ke&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,0,0,_e,Ce,fe[Se]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,Oe,_e,Ce,fe[Se]);for(let De=0;De<qe.length;De++){let j=qe[De];Fe?ke&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,De+1,0,0,_e,Ce,j.image[Se]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,De+1,Oe,_e,Ce,j.image[Se])}}}m(B)&&y(s.TEXTURE_CUBE_MAP),V.__version=F.version,B.onUpdate&&B.onUpdate(B)}N.__version=B.version})(H,w,C):t.bindTexture(s.TEXTURE_CUBE_MAP,H.__webglTexture,s.TEXTURE0+C)},this.rebindTextures=function(w,C,H){let N=n.get(w);C!==void 0&&Q(N.__webglFramebuffer,w,w.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),H!==void 0&&te(w)},this.setupRenderTarget=function(w){let C=w.texture,H=n.get(w),N=n.get(C);w.addEventListener("dispose",A);let B=w.textures,O=w.isWebGLCubeRenderTarget===!0,b=B.length>1;if(b||(N.__webglTexture===void 0&&(N.__webglTexture=s.createTexture()),N.__version=C.version,a.memory.textures++),O){H.__webglFramebuffer=[];for(let F=0;F<6;F++)if(C.mipmaps&&C.mipmaps.length>0){H.__webglFramebuffer[F]=[];for(let V=0;V<C.mipmaps.length;V++)H.__webglFramebuffer[F][V]=s.createFramebuffer()}else H.__webglFramebuffer[F]=s.createFramebuffer()}else{if(C.mipmaps&&C.mipmaps.length>0){H.__webglFramebuffer=[];for(let F=0;F<C.mipmaps.length;F++)H.__webglFramebuffer[F]=s.createFramebuffer()}else H.__webglFramebuffer=s.createFramebuffer();if(b)for(let F=0,V=B.length;F<V;F++){let J=n.get(B[F]);J.__webglTexture===void 0&&(J.__webglTexture=s.createTexture(),a.memory.textures++)}if(w.samples>0&&ce(w)===!1){H.__webglMultisampledFramebuffer=s.createFramebuffer(),H.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let F=0;F<B.length;F++){let V=B[F];H.__webglColorRenderbuffer[F]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,H.__webglColorRenderbuffer[F]);let J=r.convert(V.format,V.colorSpace),G=r.convert(V.type),ie=x(V.internalFormat,J,G,V.colorSpace,w.isXRRenderTarget===!0),$=re(w);s.renderbufferStorageMultisample(s.RENDERBUFFER,$,ie,w.width,w.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+F,s.RENDERBUFFER,H.__webglColorRenderbuffer[F])}s.bindRenderbuffer(s.RENDERBUFFER,null),w.depthBuffer&&(H.__webglDepthRenderbuffer=s.createRenderbuffer(),q(H.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(O){t.bindTexture(s.TEXTURE_CUBE_MAP,N.__webglTexture),U(s.TEXTURE_CUBE_MAP,C);for(let F=0;F<6;F++)if(C.mipmaps&&C.mipmaps.length>0)for(let V=0;V<C.mipmaps.length;V++)Q(H.__webglFramebuffer[F][V],w,C,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+F,V);else Q(H.__webglFramebuffer[F],w,C,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+F,0);m(C)&&y(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(b){for(let F=0,V=B.length;F<V;F++){let J=B[F],G=n.get(J);t.bindTexture(s.TEXTURE_2D,G.__webglTexture),U(s.TEXTURE_2D,J),Q(H.__webglFramebuffer,w,J,s.COLOR_ATTACHMENT0+F,s.TEXTURE_2D,0),m(J)&&y(s.TEXTURE_2D)}t.unbindTexture()}else{let F=s.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(F=w.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(F,N.__webglTexture),U(F,C),C.mipmaps&&C.mipmaps.length>0)for(let V=0;V<C.mipmaps.length;V++)Q(H.__webglFramebuffer[V],w,C,s.COLOR_ATTACHMENT0,F,V);else Q(H.__webglFramebuffer,w,C,s.COLOR_ATTACHMENT0,F,0);m(C)&&y(F),t.unbindTexture()}w.depthBuffer&&te(w)},this.updateRenderTargetMipmap=function(w){let C=w.textures;for(let H=0,N=C.length;H<N;H++){let B=C[H];if(m(B)){let O=v(w),b=n.get(B).__webglTexture;t.bindTexture(O,b),y(O),t.unbindTexture()}}},this.updateMultisampleRenderTarget=function(w){if(w.samples>0){if(ce(w)===!1){let C=w.textures,H=w.width,N=w.height,B=s.COLOR_BUFFER_BIT,O=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,b=n.get(w),F=C.length>1;if(F)for(let V=0;V<C.length;V++)t.bindFramebuffer(s.FRAMEBUFFER,b.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+V,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+V,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,b.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,b.__webglFramebuffer);for(let V=0;V<C.length;V++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(B|=s.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(B|=s.STENCIL_BUFFER_BIT)),F){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,b.__webglColorRenderbuffer[V]);let J=n.get(C[V]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,J,0)}s.blitFramebuffer(0,0,H,N,0,0,H,N,B,s.NEAREST),l===!0&&(le.length=0,ee.length=0,le.push(s.COLOR_ATTACHMENT0+V),w.depthBuffer&&w.resolveDepthBuffer===!1&&(le.push(O),ee.push(O),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,ee)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,le))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),F)for(let V=0;V<C.length;V++){t.bindFramebuffer(s.FRAMEBUFFER,b.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+V,s.RENDERBUFFER,b.__webglColorRenderbuffer[V]);let J=n.get(C[V]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+V,s.TEXTURE_2D,J,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,b.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&l){let C=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[C])}}},this.setupDepthRenderbuffer=te,this.setupFrameBufferTexture=Q,this.useMultisampledRTT=ce}function zl(s,e){return{convert:function(t,n=""){let i,r=Ge.getTransfer(n);if(t===fn)return s.UNSIGNED_BYTE;if(t===Ul)return s.UNSIGNED_SHORT_4_4_4_4;if(t===Ol)return s.UNSIGNED_SHORT_5_5_5_1;if(t===tu)return s.UNSIGNED_INT_5_9_9_9_REV;if(t===$h)return s.BYTE;if(t===eu)return s.SHORT;if(t===Ps)return s.UNSIGNED_SHORT;if(t===Fl)return s.INT;if(t===qt)return s.UNSIGNED_INT;if(t===Jt)return s.FLOAT;if(t===qn)return s.HALF_FLOAT;if(t===nu)return s.ALPHA;if(t===iu)return s.RGB;if(t===Ot)return s.RGBA;if(t===su)return s.LUMINANCE;if(t===ru)return s.LUMINANCE_ALPHA;if(t===di)return s.DEPTH_COMPONENT;if(t===Qi)return s.DEPTH_STENCIL;if(t===au)return s.RED;if(t===Gs)return s.RED_INTEGER;if(t===sa)return s.RG;if(t===Nl)return s.RG_INTEGER;if(t===yi)return s.RGBA_INTEGER;if(t===wr||t===Rr||t===Ir||t===Pr)if(r===Qe){if(i=e.get("WEBGL_compressed_texture_s3tc_srgb"),i===null)return null;if(t===wr)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(t===Rr)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(t===Ir)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(t===Pr)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else{if(i=e.get("WEBGL_compressed_texture_s3tc"),i===null)return null;if(t===wr)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(t===Rr)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(t===Ir)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(t===Pr)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}if(t===uo||t===po||t===fo||t===mo){if(i=e.get("WEBGL_compressed_texture_pvrtc"),i===null)return null;if(t===uo)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(t===po)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(t===fo)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(t===mo)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}if(t===go||t===yo||t===vo){if(i=e.get("WEBGL_compressed_texture_etc"),i===null)return null;if(t===go||t===yo)return r===Qe?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(t===vo)return r===Qe?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC}if(t===xo||t===So||t===_o||t===Ao||t===Mo||t===Eo||t===To||t===bo||t===Co||t===wo||t===Ro||t===Io||t===Po||t===Do){if(i=e.get("WEBGL_compressed_texture_astc"),i===null)return null;if(t===xo)return r===Qe?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(t===So)return r===Qe?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(t===_o)return r===Qe?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(t===Ao)return r===Qe?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(t===Mo)return r===Qe?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(t===Eo)return r===Qe?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(t===To)return r===Qe?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(t===bo)return r===Qe?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(t===Co)return r===Qe?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(t===wo)return r===Qe?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(t===Ro)return r===Qe?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(t===Io)return r===Qe?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(t===Po)return r===Qe?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(t===Do)return r===Qe?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}if(t===Dr||t===Bo||t===Lo){if(i=e.get("EXT_texture_compression_bptc"),i===null)return null;if(t===Dr)return r===Qe?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(t===Bo)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(t===Lo)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}if(t===ou||t===Fo||t===Uo||t===Oo){if(i=e.get("EXT_texture_compression_rgtc"),i===null)return null;if(t===Dr)return i.COMPRESSED_RED_RGTC1_EXT;if(t===Fo)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(t===Uo)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(t===Oo)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}return t===Yi?s.UNSIGNED_INT_24_8:s[t]!==void 0?s[t]:null}}}var $o=class extends wt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},ui=class extends xt{constructor(){super(),this.isGroup=!0,this.type="Group"}},Pf={type:"move"},Cs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ui,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ui,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new E,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new E),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ui,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new E,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new E),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let g of e.hand.values()){let m=t.getJointPose(g,n),y=this._getHandJoint(c,g);m!==null&&(y.matrix.fromArray(m.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.matrixWorldNeedsUpdate=!0,y.jointRadius=m.radius),y.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,f=.005;c.inputState.pinching&&d>p+f?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-f&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Pf)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new ui;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},el=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){let i=new Xt;e.properties.get(i).__webglTexture=t.texture,t.depthNear==n.depthNear&&t.depthFar==n.depthFar||(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Bt({vertexShader:`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,fragmentShader:`
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

}`,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new tt(new jn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},tl=class extends cn{constructor(e,t){super();let n=this,i=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,p=null,f=null,g=new el,m=t.getContextAttributes(),y=null,v=null,x=[],S=[],M=new Z,_=null,A=new wt;A.viewport=new Ze;let T=new wt;T.viewport=new Ze;let I=[A,T],P=new $o,D=null,L=null;function z(ee){let re=S.indexOf(ee.inputSource);if(re===-1)return;let ce=x[re];ce!==void 0&&(ce.update(ee.inputSource,ee.frame,c||a),ce.dispatchEvent({type:ee.type,data:ee.inputSource}))}function U(){i.removeEventListener("select",z),i.removeEventListener("selectstart",z),i.removeEventListener("selectend",z),i.removeEventListener("squeeze",z),i.removeEventListener("squeezestart",z),i.removeEventListener("squeezeend",z),i.removeEventListener("end",U),i.removeEventListener("inputsourceschange",k);for(let ee=0;ee<x.length;ee++){let re=S[ee];re!==null&&(S[ee]=null,x[ee].disconnect(re))}D=null,L=null,g.reset(),e.setRenderTarget(y),p=null,d=null,u=null,i=null,v=null,le.stop(),n.isPresenting=!1,e.setPixelRatio(_),e.setSize(M.width,M.height,!1),n.dispatchEvent({type:"sessionend"})}function k(ee){for(let re=0;re<ee.removed.length;re++){let ce=ee.removed[re],de=S.indexOf(ce);de>=0&&(S[de]=null,x[de].disconnect(ce))}for(let re=0;re<ee.added.length;re++){let ce=ee.added[re],de=S.indexOf(ce);if(de===-1){for(let w=0;w<x.length;w++){if(w>=S.length){S.push(ce),de=w;break}if(S[w]===null){S[w]=ce,de=w;break}}if(de===-1)break}let oe=x[de];oe&&oe.connect(ce)}}this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ee){let re=x[ee];return re===void 0&&(re=new Cs,x[ee]=re),re.getTargetRaySpace()},this.getControllerGrip=function(ee){let re=x[ee];return re===void 0&&(re=new Cs,x[ee]=re),re.getGripSpace()},this.getHand=function(ee){let re=x[ee];return re===void 0&&(re=new Cs,x[ee]=re),re.getHandSpace()},this.setFramebufferScaleFactor=function(ee){r=ee,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ee){o=ee,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(ee){c=ee},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u},this.getFrame=function(){return f},this.getSession=function(){return i},this.setSession=async function(ee){if(i=ee,i!==null){if(y=e.getRenderTarget(),i.addEventListener("select",z),i.addEventListener("selectstart",z),i.addEventListener("selectend",z),i.addEventListener("squeeze",z),i.addEventListener("squeezestart",z),i.addEventListener("squeezeend",z),i.addEventListener("end",U),i.addEventListener("inputsourceschange",k),m.xrCompatible!==!0&&await t.makeXRCompatible(),_=e.getPixelRatio(),e.getSize(M),i.renderState.layers===void 0){let re={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(i,t,re),i.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),v=new hn(p.framebufferWidth,p.framebufferHeight,{format:Ot,type:fn,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let re=null,ce=null,de=null;m.depth&&(de=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,re=m.stencil?Qi:di,ce=m.stencil?Yi:qt);let oe={colorFormat:t.RGBA8,depthFormat:de,scaleFactor:r};u=new XRWebGLBinding(i,t),d=u.createProjectionLayer(oe),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),v=new hn(d.textureWidth,d.textureHeight,{format:Ot,type:fn,depthTexture:new $i(d.textureWidth,d.textureHeight,ce,void 0,void 0,void 0,void 0,void 0,void 0,re),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),le.setContext(i),le.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};let W=new E,Q=new E;function q(ee,re){re===null?ee.matrixWorld.copy(ee.matrix):ee.matrixWorld.multiplyMatrices(re.matrixWorld,ee.matrix),ee.matrixWorldInverse.copy(ee.matrixWorld).invert()}this.updateCamera=function(ee){if(i===null)return;let re=ee.near,ce=ee.far;g.texture!==null&&(g.depthNear>0&&(re=g.depthNear),g.depthFar>0&&(ce=g.depthFar)),P.near=T.near=A.near=re,P.far=T.far=A.far=ce,D===P.near&&L===P.far||(i.updateRenderState({depthNear:P.near,depthFar:P.far}),D=P.near,L=P.far),A.layers.mask=2|ee.layers.mask,T.layers.mask=4|ee.layers.mask,P.layers.mask=A.layers.mask|T.layers.mask;let de=ee.parent,oe=P.cameras;q(P,de);for(let w=0;w<oe.length;w++)q(oe[w],de);oe.length===2?(function(w,C,H){W.setFromMatrixPosition(C.matrixWorld),Q.setFromMatrixPosition(H.matrixWorld);let N=W.distanceTo(Q),B=C.projectionMatrix.elements,O=H.projectionMatrix.elements,b=B[14]/(B[10]-1),F=B[14]/(B[10]+1),V=(B[9]+1)/B[5],J=(B[9]-1)/B[5],G=(B[8]-1)/B[0],ie=(O[8]+1)/O[0],$=b*G,se=b*ie,fe=N/(-G+ie),me=fe*-G;if(C.matrixWorld.decompose(w.position,w.quaternion,w.scale),w.translateX(me),w.translateZ(fe),w.matrixWorld.compose(w.position,w.quaternion,w.scale),w.matrixWorldInverse.copy(w.matrixWorld).invert(),B[10]===-1)w.projectionMatrix.copy(C.projectionMatrix),w.projectionMatrixInverse.copy(C.projectionMatrixInverse);else{let _e=b+fe,Ce=F+fe,Oe=$-me,Fe=se+(N-me),Ae=V*F/Ce*_e,ke=J*F/Ce*_e;w.projectionMatrix.makePerspective(Oe,Fe,Ae,ke,_e,Ce),w.projectionMatrixInverse.copy(w.projectionMatrix).invert()}})(P,A,T):P.projectionMatrix.copy(A.projectionMatrix),(function(w,C,H){H===null?w.matrix.copy(C.matrixWorld):(w.matrix.copy(H.matrixWorld),w.matrix.invert(),w.matrix.multiply(C.matrixWorld)),w.matrix.decompose(w.position,w.quaternion,w.scale),w.updateMatrixWorld(!0),w.projectionMatrix.copy(C.projectionMatrix),w.projectionMatrixInverse.copy(C.projectionMatrixInverse),w.isPerspectiveCamera&&(w.fov=2*Ds*Math.atan(1/w.projectionMatrix.elements[5]),w.zoom=1)})(ee,P,de)},this.getCamera=function(){return P},this.getFoveation=function(){if(d!==null||p!==null)return l},this.setFoveation=function(ee){l=ee,d!==null&&(d.fixedFoveation=ee),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=ee)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(P)};let te=null,le=new du;le.setAnimationLoop((function(ee,re){if(h=re.getViewerPose(c||a),f=re,h!==null){let ce=h.views;p!==null&&(e.setRenderTargetFramebuffer(v,p.framebuffer),e.setRenderTarget(v));let de=!1;ce.length!==P.cameras.length&&(P.cameras.length=0,de=!0);for(let w=0;w<ce.length;w++){let C=ce[w],H=null;if(p!==null)H=p.getViewport(C);else{let B=u.getViewSubImage(d,C);H=B.viewport,w===0&&(e.setRenderTargetTextures(v,B.colorTexture,d.ignoreDepthValues?void 0:B.depthStencilTexture),e.setRenderTarget(v))}let N=I[w];N===void 0&&(N=new wt,N.layers.enable(w),N.viewport=new Ze,I[w]=N),N.matrix.fromArray(C.transform.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale),N.projectionMatrix.fromArray(C.projectionMatrix),N.projectionMatrixInverse.copy(N.projectionMatrix).invert(),N.viewport.set(H.x,H.y,H.width,H.height),w===0&&(P.matrix.copy(N.matrix),P.matrix.decompose(P.position,P.quaternion,P.scale)),de===!0&&P.cameras.push(N)}let oe=i.enabledFeatures;if(oe&&oe.includes("depth-sensing")){let w=u.getDepthInformation(ce[0]);w&&w.isValid&&w.texture&&g.init(e,w,i.renderState)}}for(let ce=0;ce<x.length;ce++){let de=S[ce],oe=x[ce];de!==null&&oe!==void 0&&oe.update(de,re,c||a)}te&&te(ee,re),re.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:re}),f=null})),this.setAnimationLoop=function(ee){te=ee},this.dispose=function(){}}},ai=new Cn,Df=new ge;function Bf(s,e){function t(i,r){i.matrixAutoUpdate===!0&&i.updateMatrix(),r.value.copy(i.matrix)}function n(i,r){i.opacity.value=r.opacity,r.color&&i.diffuse.value.copy(r.color),r.emissive&&i.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity),r.map&&(i.map.value=r.map,t(r.map,i.mapTransform)),r.alphaMap&&(i.alphaMap.value=r.alphaMap,t(r.alphaMap,i.alphaMapTransform)),r.bumpMap&&(i.bumpMap.value=r.bumpMap,t(r.bumpMap,i.bumpMapTransform),i.bumpScale.value=r.bumpScale,r.side===1&&(i.bumpScale.value*=-1)),r.normalMap&&(i.normalMap.value=r.normalMap,t(r.normalMap,i.normalMapTransform),i.normalScale.value.copy(r.normalScale),r.side===1&&i.normalScale.value.negate()),r.displacementMap&&(i.displacementMap.value=r.displacementMap,t(r.displacementMap,i.displacementMapTransform),i.displacementScale.value=r.displacementScale,i.displacementBias.value=r.displacementBias),r.emissiveMap&&(i.emissiveMap.value=r.emissiveMap,t(r.emissiveMap,i.emissiveMapTransform)),r.specularMap&&(i.specularMap.value=r.specularMap,t(r.specularMap,i.specularMapTransform)),r.alphaTest>0&&(i.alphaTest.value=r.alphaTest);let a=e.get(r),o=a.envMap,l=a.envMapRotation;o&&(i.envMap.value=o,ai.copy(l),ai.x*=-1,ai.y*=-1,ai.z*=-1,o.isCubeTexture&&o.isRenderTargetTexture===!1&&(ai.y*=-1,ai.z*=-1),i.envMapRotation.value.setFromMatrix4(Df.makeRotationFromEuler(ai)),i.flipEnvMap.value=o.isCubeTexture&&o.isRenderTargetTexture===!1?-1:1,i.reflectivity.value=r.reflectivity,i.ior.value=r.ior,i.refractionRatio.value=r.refractionRatio),r.lightMap&&(i.lightMap.value=r.lightMap,i.lightMapIntensity.value=r.lightMapIntensity,t(r.lightMap,i.lightMapTransform)),r.aoMap&&(i.aoMap.value=r.aoMap,i.aoMapIntensity.value=r.aoMapIntensity,t(r.aoMap,i.aoMapTransform))}return{refreshFogUniforms:function(i,r){r.color.getRGB(i.fogColor.value,uu(s)),r.isFog?(i.fogNear.value=r.near,i.fogFar.value=r.far):r.isFogExp2&&(i.fogDensity.value=r.density)},refreshMaterialUniforms:function(i,r,a,o,l){r.isMeshBasicMaterial||r.isMeshLambertMaterial?n(i,r):r.isMeshToonMaterial?(n(i,r),(function(c,h){h.gradientMap&&(c.gradientMap.value=h.gradientMap)})(i,r)):r.isMeshPhongMaterial?(n(i,r),(function(c,h){c.specular.value.copy(h.specular),c.shininess.value=Math.max(h.shininess,1e-4)})(i,r)):r.isMeshStandardMaterial?(n(i,r),(function(c,h){c.metalness.value=h.metalness,h.metalnessMap&&(c.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,c.metalnessMapTransform)),c.roughness.value=h.roughness,h.roughnessMap&&(c.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,c.roughnessMapTransform)),h.envMap&&(c.envMapIntensity.value=h.envMapIntensity)})(i,r),r.isMeshPhysicalMaterial&&(function(c,h,u){c.ior.value=h.ior,h.sheen>0&&(c.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),c.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(c.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,c.sheenColorMapTransform)),h.sheenRoughnessMap&&(c.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,c.sheenRoughnessMapTransform))),h.clearcoat>0&&(c.clearcoat.value=h.clearcoat,c.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(c.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,c.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(c.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,c.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(c.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,c.clearcoatNormalMapTransform),c.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===1&&c.clearcoatNormalScale.value.negate())),h.dispersion>0&&(c.dispersion.value=h.dispersion),h.iridescence>0&&(c.iridescence.value=h.iridescence,c.iridescenceIOR.value=h.iridescenceIOR,c.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],c.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(c.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,c.iridescenceMapTransform)),h.iridescenceThicknessMap&&(c.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,c.iridescenceThicknessMapTransform))),h.transmission>0&&(c.transmission.value=h.transmission,c.transmissionSamplerMap.value=u.texture,c.transmissionSamplerSize.value.set(u.width,u.height),h.transmissionMap&&(c.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,c.transmissionMapTransform)),c.thickness.value=h.thickness,h.thicknessMap&&(c.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,c.thicknessMapTransform)),c.attenuationDistance.value=h.attenuationDistance,c.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(c.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(c.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,c.anisotropyMapTransform))),c.specularIntensity.value=h.specularIntensity,c.specularColor.value.copy(h.specularColor),h.specularColorMap&&(c.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,c.specularColorMapTransform)),h.specularIntensityMap&&(c.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,c.specularIntensityMapTransform))})(i,r,l)):r.isMeshMatcapMaterial?(n(i,r),(function(c,h){h.matcap&&(c.matcap.value=h.matcap)})(i,r)):r.isMeshDepthMaterial?n(i,r):r.isMeshDistanceMaterial?(n(i,r),(function(c,h){let u=e.get(h).light;c.referencePosition.value.setFromMatrixPosition(u.matrixWorld),c.nearDistance.value=u.shadow.camera.near,c.farDistance.value=u.shadow.camera.far})(i,r)):r.isMeshNormalMaterial?n(i,r):r.isLineBasicMaterial?((function(c,h){c.diffuse.value.copy(h.color),c.opacity.value=h.opacity,h.map&&(c.map.value=h.map,t(h.map,c.mapTransform))})(i,r),r.isLineDashedMaterial&&(function(c,h){c.dashSize.value=h.dashSize,c.totalSize.value=h.dashSize+h.gapSize,c.scale.value=h.scale})(i,r)):r.isPointsMaterial?(function(c,h,u,d){c.diffuse.value.copy(h.color),c.opacity.value=h.opacity,c.size.value=h.size*u,c.scale.value=.5*d,h.map&&(c.map.value=h.map,t(h.map,c.uvTransform)),h.alphaMap&&(c.alphaMap.value=h.alphaMap,t(h.alphaMap,c.alphaMapTransform)),h.alphaTest>0&&(c.alphaTest.value=h.alphaTest)})(i,r,a,o):r.isSpriteMaterial?(function(c,h){c.diffuse.value.copy(h.color),c.opacity.value=h.opacity,c.rotation.value=h.rotation,h.map&&(c.map.value=h.map,t(h.map,c.mapTransform)),h.alphaMap&&(c.alphaMap.value=h.alphaMap,t(h.alphaMap,c.alphaMapTransform)),h.alphaTest>0&&(c.alphaTest.value=h.alphaTest)})(i,r):r.isShadowMaterial?(i.color.value.copy(r.color),i.opacity.value=r.opacity):r.isShaderMaterial&&(r.uniformsNeedUpdate=!1)}}}function Lf(s,e,t,n){let i={},r={},a=[],o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(u,d,p,f){let g=u.value,m=d+"_"+p;if(f[m]===void 0)return f[m]=typeof g=="number"||typeof g=="boolean"?g:g.clone(),!0;{let y=f[m];if(typeof g=="number"||typeof g=="boolean"){if(y!==g)return f[m]=g,!0}else if(y.equals(g)===!1)return y.copy(g),!0}return!1}function c(u){let d={boundary:0,storage:0};return typeof u=="number"||typeof u=="boolean"?(d.boundary=4,d.storage=4):u.isVector2?(d.boundary=8,d.storage=8):u.isVector3||u.isColor?(d.boundary=16,d.storage=12):u.isVector4?(d.boundary=16,d.storage=16):u.isMatrix3?(d.boundary=48,d.storage=48):u.isMatrix4?(d.boundary=64,d.storage=64):u.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",u),d}function h(u){let d=u.target;d.removeEventListener("dispose",h);let p=a.indexOf(d.__bindingPointIndex);a.splice(p,1),s.deleteBuffer(i[d.id]),delete i[d.id],delete r[d.id]}return{bind:function(u,d){let p=d.program;n.uniformBlockBinding(u,p)},update:function(u,d){let p=i[u.id];p===void 0&&((function(m){let y=m.uniforms,v=0,x=16;for(let M=0,_=y.length;M<_;M++){let A=Array.isArray(y[M])?y[M]:[y[M]];for(let T=0,I=A.length;T<I;T++){let P=A[T],D=Array.isArray(P.value)?P.value:[P.value];for(let L=0,z=D.length;L<z;L++){let U=c(D[L]),k=v%x,W=k%U.boundary,Q=k+W;v+=W,Q!==0&&x-Q<U.storage&&(v+=x-Q),P.__data=new Float32Array(U.storage/Float32Array.BYTES_PER_ELEMENT),P.__offset=v,v+=U.storage}}}let S=v%x;S>0&&(v+=x-S),m.__size=v,m.__cache={}})(u),p=(function(m){let y=(function(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0})();m.__bindingPointIndex=y;let v=s.createBuffer(),x=m.__size,S=m.usage;return s.bindBuffer(s.UNIFORM_BUFFER,v),s.bufferData(s.UNIFORM_BUFFER,x,S),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,y,v),v})(u),i[u.id]=p,u.addEventListener("dispose",h));let f=d.program;n.updateUBOMapping(u,f);let g=e.render.frame;r[u.id]!==g&&((function(m){let y=i[m.id],v=m.uniforms,x=m.__cache;s.bindBuffer(s.UNIFORM_BUFFER,y);for(let S=0,M=v.length;S<M;S++){let _=Array.isArray(v[S])?v[S]:[v[S]];for(let A=0,T=_.length;A<T;A++){let I=_[A];if(l(I,S,A,x)===!0){let P=I.__offset,D=Array.isArray(I.value)?I.value:[I.value],L=0;for(let z=0;z<D.length;z++){let U=D[z],k=c(U);typeof U=="number"||typeof U=="boolean"?(I.__data[0]=U,s.bufferSubData(s.UNIFORM_BUFFER,P+L,I.__data)):U.isMatrix3?(I.__data[0]=U.elements[0],I.__data[1]=U.elements[1],I.__data[2]=U.elements[2],I.__data[3]=0,I.__data[4]=U.elements[3],I.__data[5]=U.elements[4],I.__data[6]=U.elements[5],I.__data[7]=0,I.__data[8]=U.elements[6],I.__data[9]=U.elements[7],I.__data[10]=U.elements[8],I.__data[11]=0):(U.toArray(I.__data,L),L+=k.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,P,I.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)})(u),r[u.id]=g)},dispose:function(){for(let u in i)s.deleteBuffer(i[u]);a=[],i={},r={}}}}var es=class{constructor(e={}){let{canvas:t=Vd(),context:n=null,depth:i=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=e,p;if(this.isWebGLRenderer=!0,n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;let f=new Uint32Array(4),g=new Int32Array(4),m=null,y=null,v=[],x=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=kt,this.toneMapping=0,this.toneMappingExposure=1;let S=this,M=!1,_=0,A=0,T=null,I=-1,P=null,D=new Ze,L=new Ze,z=null,U=new Pe(0),k=0,W=t.width,Q=t.height,q=1,te=null,le=null,ee=new Ze(0,0,W,Q),re=new Ze(0,0,W,Q),ce=!1,de=new Ls,oe=!1,w=!1,C=new ge,H=new ge,N=new E,B=new Ze,O={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},b=!1;function F(){return T===null?q:1}let V,J,G,ie,$,se,fe,me,_e,Ce,Oe,Fe,Ae,ke,qe,nt,Se,De,j,xe,$e,We,rt,zt,X=n;function Ai(R,Y){return t.getContext(R,Y)}try{let R={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r170"),t.addEventListener("webglcontextlost",Qt,!1),t.addEventListener("webglcontextrestored",Kn,!1),t.addEventListener("webglcontextcreationerror",Dn,!1),X===null){let Y="webgl2";if(X=Ai(Y,R),X===null)throw Ai(Y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}function gs(){V=new mp(X),V.init(),We=new zl(X,V),J=new up(X,V,e,We),G=new Rf(X,V),J.reverseDepthBuffer&&d&&G.buffers.depth.setReversed(!0),ie=new vp(X),$=new xf,se=new If(X,V,G,$,J,We,ie),fe=new pp(S),me=new fp(S),_e=new ap(X),rt=new cp(X,_e),Ce=new gp(X,_e,ie,rt),Oe=new Sp(X,Ce,_e,ie),j=new xp(X,J,se),nt=new dp($),Fe=new vf(S,fe,me,V,J,rt,nt),Ae=new Bf(S,$),ke=new _f,qe=new bf(V),De=new lp(S,fe,me,G,Oe,p,l),Se=new Cf(S,Oe,J),zt=new Lf(X,ie,J,G),xe=new hp(X,V,ie),$e=new yp(X,V,ie),ie.programs=Fe.programs,S.capabilities=J,S.extensions=V,S.properties=$,S.renderLists=ke,S.shadowMap=Se,S.state=G,S.info=ie}gs();let Ye=new tl(S,X);function Qt(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function Kn(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;let R=ie.autoReset,Y=Se.enabled,ne=Se.autoUpdate,ae=Se.needsUpdate,K=Se.type;gs(),ie.autoReset=R,Se.enabled=Y,Se.autoUpdate=ne,Se.needsUpdate=ae,Se.type=K}function Dn(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function Bn(R){let Y=R.target;Y.removeEventListener("dispose",Bn),(function(ne){(function(ae){let K=$.get(ae).programs;K!==void 0&&(K.forEach((function(he){Fe.releaseProgram(he)})),ae.isShaderMaterial&&Fe.releaseShaderCache(ae))})(ne),$.remove(ne)})(Y)}function Zn(R,Y,ne){R.transparent===!0&&R.side===2&&R.forceSinglePass===!1?(R.side=1,R.needsUpdate=!0,Zs(R,Y,ne),R.side=0,R.needsUpdate=!0,Zs(R,Y,ne),R.side=2):Zs(R,Y,ne)}this.xr=Ye,this.getContext=function(){return X},this.getContextAttributes=function(){return X.getContextAttributes()},this.forceContextLoss=function(){let R=V.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){let R=V.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(R){R!==void 0&&(q=R,this.setSize(W,Q,!1))},this.getSize=function(R){return R.set(W,Q)},this.setSize=function(R,Y,ne=!0){Ye.isPresenting?console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting."):(W=R,Q=Y,t.width=Math.floor(R*q),t.height=Math.floor(Y*q),ne===!0&&(t.style.width=R+"px",t.style.height=Y+"px"),this.setViewport(0,0,R,Y))},this.getDrawingBufferSize=function(R){return R.set(W*q,Q*q).floor()},this.setDrawingBufferSize=function(R,Y,ne){W=R,Q=Y,q=ne,t.width=Math.floor(R*ne),t.height=Math.floor(Y*ne),this.setViewport(0,0,R,Y)},this.getCurrentViewport=function(R){return R.copy(D)},this.getViewport=function(R){return R.copy(ee)},this.setViewport=function(R,Y,ne,ae){R.isVector4?ee.set(R.x,R.y,R.z,R.w):ee.set(R,Y,ne,ae),G.viewport(D.copy(ee).multiplyScalar(q).round())},this.getScissor=function(R){return R.copy(re)},this.setScissor=function(R,Y,ne,ae){R.isVector4?re.set(R.x,R.y,R.z,R.w):re.set(R,Y,ne,ae),G.scissor(L.copy(re).multiplyScalar(q).round())},this.getScissorTest=function(){return ce},this.setScissorTest=function(R){G.setScissorTest(ce=R)},this.setOpaqueSort=function(R){te=R},this.setTransparentSort=function(R){le=R},this.getClearColor=function(R){return R.copy(De.getClearColor())},this.setClearColor=function(){De.setClearColor.apply(De,arguments)},this.getClearAlpha=function(){return De.getClearAlpha()},this.setClearAlpha=function(){De.setClearAlpha.apply(De,arguments)},this.clear=function(R=!0,Y=!0,ne=!0){let ae=0;if(R){let K=!1;if(T!==null){let he=T.texture.format;K=he===yi||he===Nl||he===Gs}if(K){let he=T.texture.type,ve=he===fn||he===qt||he===Ps||he===Yi||he===Ul||he===Ol,Me=De.getClearColor(),Ee=De.getClearAlpha(),Ie=Me.r,Be=Me.g,be=Me.b;ve?(f[0]=Ie,f[1]=Be,f[2]=be,f[3]=Ee,X.clearBufferuiv(X.COLOR,0,f)):(g[0]=Ie,g[1]=Be,g[2]=be,g[3]=Ee,X.clearBufferiv(X.COLOR,0,g))}else ae|=X.COLOR_BUFFER_BIT}Y&&(ae|=X.DEPTH_BUFFER_BIT),ne&&(ae|=X.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),X.clear(ae)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Qt,!1),t.removeEventListener("webglcontextrestored",Kn,!1),t.removeEventListener("webglcontextcreationerror",Dn,!1),ke.dispose(),qe.dispose(),$.dispose(),fe.dispose(),me.dispose(),Oe.dispose(),rt.dispose(),zt.dispose(),Fe.dispose(),Ye.dispose(),Ye.removeEventListener("sessionstart",Uc),Ye.removeEventListener("sessionend",Oc),Jn.stop()},this.renderBufferDirect=function(R,Y,ne,ae,K,he){Y===null&&(Y=O);let ve=K.isMesh&&K.matrixWorld.determinant()<0,Me=(function(ze,Lt,Ct,Ue,Re){Lt.isScene!==!0&&(Lt=O),se.resetTextureUnits();let en=Lt.fog,Aa=Ue.isMeshStandardMaterial?Lt.environment:null,ys=T===null?S.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:ss,Mi=(Ue.isMeshStandardMaterial?me:fe).get(Ue.envMap||Aa),Ma=Ue.vertexColors===!0&&!!Ct.attributes.color&&Ct.attributes.color.itemSize===4,Ea=!!Ct.attributes.tangent&&(!!Ue.normalMap||Ue.anisotropy>0),Ta=!!Ct.morphAttributes.position,Ln=!!Ct.morphAttributes.normal,ad=!!Ct.morphAttributes.color,Gc=0;Ue.toneMapped&&(T!==null&&T.isXRRenderTarget!==!0||(Gc=S.toneMapping));let Wc=Ct.morphAttributes.position||Ct.morphAttributes.normal||Ct.morphAttributes.color,od=Wc!==void 0?Wc.length:0,He=$.get(Ue),ld=y.state.lights;if(oe===!0&&(w===!0||ze!==P)){let Kt=ze===P&&Ue.id===I;nt.setState(Ue,ze,Kt)}let tn=!1;Ue.version===He.__version?He.needsLights&&He.lightsStateVersion!==ld.state.version||He.outputColorSpace!==ys||Re.isBatchedMesh&&He.batching===!1?tn=!0:Re.isBatchedMesh||He.batching!==!0?Re.isBatchedMesh&&He.batchingColor===!0&&Re.colorTexture===null||Re.isBatchedMesh&&He.batchingColor===!1&&Re.colorTexture!==null||Re.isInstancedMesh&&He.instancing===!1?tn=!0:Re.isInstancedMesh||He.instancing!==!0?Re.isSkinnedMesh&&He.skinning===!1?tn=!0:Re.isSkinnedMesh||He.skinning!==!0?Re.isInstancedMesh&&He.instancingColor===!0&&Re.instanceColor===null||Re.isInstancedMesh&&He.instancingColor===!1&&Re.instanceColor!==null||Re.isInstancedMesh&&He.instancingMorph===!0&&Re.morphTexture===null||Re.isInstancedMesh&&He.instancingMorph===!1&&Re.morphTexture!==null||He.envMap!==Mi||Ue.fog===!0&&He.fog!==en?tn=!0:He.numClippingPlanes===void 0||He.numClippingPlanes===nt.numPlanes&&He.numIntersection===nt.numIntersection?(He.vertexAlphas!==Ma||He.vertexTangents!==Ea||He.morphTargets!==Ta||He.morphNormals!==Ln||He.morphColors!==ad||He.toneMapping!==Gc||He.morphTargetsCount!==od)&&(tn=!0):tn=!0:tn=!0:tn=!0:tn=!0:(tn=!0,He.__version=Ue.version);let $n=He.currentProgram;tn===!0&&($n=Zs(Ue,Lt,Re));let jc=!1,vs=!1,ba=!1,pt=$n.getUniforms(),Fn=He.uniforms;if(G.useProgram($n.program)&&(jc=!0,vs=!0,ba=!0),Ue.id!==I&&(I=Ue.id,vs=!0),jc||P!==ze){G.buffers.depth.getReversed()?(C.copy(ze.projectionMatrix),(function(ei){let at=ei.elements;at[2]=.5*at[2]+.5*at[3],at[6]=.5*at[6]+.5*at[7],at[10]=.5*at[10]+.5*at[11],at[14]=.5*at[14]+.5*at[15]})(C),(function(ei){let at=ei.elements;at[11]===-1?(at[10]=-at[10]-1,at[14]=-at[14]):(at[10]=-at[10],at[14]=1-at[14])})(C),pt.setValue(X,"projectionMatrix",C)):pt.setValue(X,"projectionMatrix",ze.projectionMatrix),pt.setValue(X,"viewMatrix",ze.matrixWorldInverse);let Kt=pt.map.cameraPosition;Kt!==void 0&&Kt.setValue(X,N.setFromMatrixPosition(ze.matrixWorld)),J.logarithmicDepthBuffer&&pt.setValue(X,"logDepthBufFC",2/(Math.log(ze.far+1)/Math.LN2)),(Ue.isMeshPhongMaterial||Ue.isMeshToonMaterial||Ue.isMeshLambertMaterial||Ue.isMeshBasicMaterial||Ue.isMeshStandardMaterial||Ue.isShaderMaterial)&&pt.setValue(X,"isOrthographic",ze.isOrthographicCamera===!0),P!==ze&&(P=ze,vs=!0,ba=!0)}if(Re.isSkinnedMesh){pt.setOptional(X,Re,"bindMatrix"),pt.setOptional(X,Re,"bindMatrixInverse");let Kt=Re.skeleton;Kt&&(Kt.boneTexture===null&&Kt.computeBoneTexture(),pt.setValue(X,"boneTexture",Kt.boneTexture,se))}Re.isBatchedMesh&&(pt.setOptional(X,Re,"batchingTexture"),pt.setValue(X,"batchingTexture",Re._matricesTexture,se),pt.setOptional(X,Re,"batchingIdTexture"),pt.setValue(X,"batchingIdTexture",Re._indirectTexture,se),pt.setOptional(X,Re,"batchingColorTexture"),Re._colorsTexture!==null&&pt.setValue(X,"batchingColorTexture",Re._colorsTexture,se));let Ca=Ct.morphAttributes;Ca.position===void 0&&Ca.normal===void 0&&Ca.color===void 0||j.update(Re,Ct,$n),(vs||He.receiveShadow!==Re.receiveShadow)&&(He.receiveShadow=Re.receiveShadow,pt.setValue(X,"receiveShadow",Re.receiveShadow)),Ue.isMeshGouraudMaterial&&Ue.envMap!==null&&(Fn.envMap.value=Mi,Fn.flipEnvMap.value=Mi.isCubeTexture&&Mi.isRenderTargetTexture===!1?-1:1),Ue.isMeshStandardMaterial&&Ue.envMap===null&&Lt.environment!==null&&(Fn.envMapIntensity.value=Lt.environmentIntensity),vs&&(pt.setValue(X,"toneMappingExposure",S.toneMappingExposure),He.needsLights&&(nn=ba,(dn=Fn).ambientLightColor.needsUpdate=nn,dn.lightProbe.needsUpdate=nn,dn.directionalLights.needsUpdate=nn,dn.directionalLightShadows.needsUpdate=nn,dn.pointLights.needsUpdate=nn,dn.pointLightShadows.needsUpdate=nn,dn.spotLights.needsUpdate=nn,dn.spotLightShadows.needsUpdate=nn,dn.rectAreaLights.needsUpdate=nn,dn.hemisphereLights.needsUpdate=nn),en&&Ue.fog===!0&&Ae.refreshFogUniforms(Fn,en),Ae.refreshMaterialUniforms(Fn,Ue,q,Q,y.state.transmissionRenderTarget[ze.id]),Gi.upload(X,kc(He),Fn,se));var dn,nn;if(Ue.isShaderMaterial&&Ue.uniformsNeedUpdate===!0&&(Gi.upload(X,kc(He),Fn,se),Ue.uniformsNeedUpdate=!1),Ue.isSpriteMaterial&&pt.setValue(X,"center",Re.center),pt.setValue(X,"modelViewMatrix",Re.modelViewMatrix),pt.setValue(X,"normalMatrix",Re.normalMatrix),pt.setValue(X,"modelMatrix",Re.matrixWorld),Ue.isShaderMaterial||Ue.isRawShaderMaterial){let Kt=Ue.uniformsGroups;for(let ei=0,at=Kt.length;ei<at;ei++){let Xc=Kt[ei];zt.update(Xc,$n),zt.bind(Xc,$n)}}return $n})(R,Y,ne,ae,K);G.setMaterial(ae,ve);let Ee=ne.index,Ie=1;if(ae.wireframe===!0){if(Ee=Ce.getWireframeAttribute(ne),Ee===void 0)return;Ie=2}let Be=ne.drawRange,be=ne.attributes.position,Ne=Be.start*Ie,dt=(Be.start+Be.count)*Ie;he!==null&&(Ne=Math.max(Ne,he.start*Ie),dt=Math.min(dt,(he.start+he.count)*Ie)),Ee!==null?(Ne=Math.max(Ne,0),dt=Math.min(dt,Ee.count)):be!=null&&(Ne=Math.max(Ne,0),dt=Math.min(dt,be.count));let et=dt-Ne;if(et<0||et===1/0)return;let vt;rt.setup(K,ae,Me,ne,Ee);let it=xe;if(Ee!==null&&(vt=_e.get(Ee),it=$e,it.setIndex(vt)),K.isMesh)ae.wireframe===!0?(G.setLineWidth(ae.wireframeLinewidth*F()),it.setMode(X.LINES)):it.setMode(X.TRIANGLES);else if(K.isLine){let ze=ae.linewidth;ze===void 0&&(ze=1),G.setLineWidth(ze*F()),K.isLineSegments?it.setMode(X.LINES):K.isLineLoop?it.setMode(X.LINE_LOOP):it.setMode(X.LINE_STRIP)}else K.isPoints?it.setMode(X.POINTS):K.isSprite&&it.setMode(X.TRIANGLES);if(K.isBatchedMesh)if(K._multiDrawInstances!==null)it.renderMultiDrawInstances(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount,K._multiDrawInstances);else if(V.get("WEBGL_multi_draw"))it.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else{let ze=K._multiDrawStarts,Lt=K._multiDrawCounts,Ct=K._multiDrawCount,Ue=Ee?_e.get(Ee).bytesPerElement:1,Re=$.get(ae).currentProgram.getUniforms();for(let en=0;en<Ct;en++)Re.setValue(X,"_gl_DrawID",en),it.render(ze[en]/Ue,Lt[en])}else if(K.isInstancedMesh)it.renderInstances(Ne,et,K.count);else if(ne.isInstancedBufferGeometry){let ze=ne._maxInstanceCount!==void 0?ne._maxInstanceCount:1/0,Lt=Math.min(ne.instanceCount,ze);it.renderInstances(Ne,et,Lt)}else it.render(Ne,et)},this.compile=function(R,Y,ne=null){ne===null&&(ne=R),y=qe.get(ne),y.init(Y),x.push(y),ne.traverseVisible((function(K){K.isLight&&K.layers.test(Y.layers)&&(y.pushLight(K),K.castShadow&&y.pushShadow(K))})),R!==ne&&R.traverseVisible((function(K){K.isLight&&K.layers.test(Y.layers)&&(y.pushLight(K),K.castShadow&&y.pushShadow(K))})),y.setupLights();let ae=new Set;return R.traverse((function(K){if(!(K.isMesh||K.isPoints||K.isLine||K.isSprite))return;let he=K.material;if(he)if(Array.isArray(he))for(let ve=0;ve<he.length;ve++){let Me=he[ve];Zn(Me,ne,K),ae.add(Me)}else Zn(he,ne,K),ae.add(he)})),x.pop(),y=null,ae},this.compileAsync=function(R,Y,ne=null){let ae=this.compile(R,Y,ne);return new Promise((K=>{function he(){ae.forEach((function(ve){$.get(ve).currentProgram.isReady()&&ae.delete(ve)})),ae.size!==0?setTimeout(he,10):K(R)}V.get("KHR_parallel_shader_compile")!==null?he():setTimeout(he,10)}))};let Sa=null;function Uc(){Jn.stop()}function Oc(){Jn.start()}let Jn=new du;function _a(R,Y,ne,ae){if(R.visible===!1)return;if(R.layers.test(Y.layers)){if(R.isGroup)ne=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(Y);else if(R.isLight)y.pushLight(R),R.castShadow&&y.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||de.intersectsSprite(R)){ae&&B.setFromMatrixPosition(R.matrixWorld).applyMatrix4(H);let he=Oe.update(R),ve=R.material;ve.visible&&m.push(R,he,ve,ne,B.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||de.intersectsObject(R))){let he=Oe.update(R),ve=R.material;if(ae&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),B.copy(R.boundingSphere.center)):(he.boundingSphere===null&&he.computeBoundingSphere(),B.copy(he.boundingSphere.center)),B.applyMatrix4(R.matrixWorld).applyMatrix4(H)),Array.isArray(ve)){let Me=he.groups;for(let Ee=0,Ie=Me.length;Ee<Ie;Ee++){let Be=Me[Ee],be=ve[Be.materialIndex];be&&be.visible&&m.push(R,he,be,ne,B.z,Be)}}else ve.visible&&m.push(R,he,ve,ne,B.z,null)}}let K=R.children;for(let he=0,ve=K.length;he<ve;he++)_a(K[he],Y,ne,ae)}function Nc(R,Y,ne,ae){let K=R.opaque,he=R.transmissive,ve=R.transparent;y.setupLightsView(ne),oe===!0&&nt.setGlobalState(S.clippingPlanes,ne),ae&&G.viewport(D.copy(ae)),K.length>0&&Ks(K,Y,ne),he.length>0&&Ks(he,Y,ne),ve.length>0&&Ks(ve,Y,ne),G.buffers.depth.setTest(!0),G.buffers.depth.setMask(!0),G.buffers.color.setMask(!0),G.setPolygonOffset(!1)}function Hc(R,Y,ne,ae){if((ne.isScene===!0?ne.overrideMaterial:null)!==null)return;y.state.transmissionRenderTarget[ae.id]===void 0&&(y.state.transmissionRenderTarget[ae.id]=new hn(1,1,{generateMipmaps:!0,type:V.has("EXT_color_buffer_half_float")||V.has("EXT_color_buffer_float")?qn:fn,minFilter:Hi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ge.workingColorSpace}));let K=y.state.transmissionRenderTarget[ae.id],he=ae.viewport||D;K.setSize(he.z,he.w);let ve=S.getRenderTarget();S.setRenderTarget(K),S.getClearColor(U),k=S.getClearAlpha(),k<1&&S.setClearColor(16777215,.5),S.clear(),b&&De.render(ne);let Me=S.toneMapping;S.toneMapping=0;let Ee=ae.viewport;if(ae.viewport!==void 0&&(ae.viewport=void 0),y.setupLightsView(ae),oe===!0&&nt.setGlobalState(S.clippingPlanes,ae),Ks(R,ne,ae),se.updateMultisampleRenderTarget(K),se.updateRenderTargetMipmap(K),V.has("WEBGL_multisampled_render_to_texture")===!1){let Ie=!1;for(let Be=0,be=Y.length;Be<be;Be++){let Ne=Y[Be],dt=Ne.object,et=Ne.geometry,vt=Ne.material,it=Ne.group;if(vt.side===2&&dt.layers.test(ae.layers)){let ze=vt.side;vt.side=1,vt.needsUpdate=!0,zc(dt,ne,ae,et,vt,it),vt.side=ze,vt.needsUpdate=!0,Ie=!0}}Ie===!0&&(se.updateMultisampleRenderTarget(K),se.updateRenderTargetMipmap(K))}S.setRenderTarget(ve),S.setClearColor(U,k),Ee!==void 0&&(ae.viewport=Ee),S.toneMapping=Me}function Ks(R,Y,ne){let ae=Y.isScene===!0?Y.overrideMaterial:null;for(let K=0,he=R.length;K<he;K++){let ve=R[K],Me=ve.object,Ee=ve.geometry,Ie=ae===null?ve.material:ae,Be=ve.group;Me.layers.test(ne.layers)&&zc(Me,Y,ne,Ee,Ie,Be)}}function zc(R,Y,ne,ae,K,he){R.onBeforeRender(S,Y,ne,ae,K,he),R.modelViewMatrix.multiplyMatrices(ne.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),K.onBeforeRender(S,Y,ne,ae,R,he),K.transparent===!0&&K.side===2&&K.forceSinglePass===!1?(K.side=1,K.needsUpdate=!0,S.renderBufferDirect(ne,Y,ae,K,R,he),K.side=0,K.needsUpdate=!0,S.renderBufferDirect(ne,Y,ae,K,R,he),K.side=2):S.renderBufferDirect(ne,Y,ae,K,R,he),R.onAfterRender(S,Y,ne,ae,K,he)}function Zs(R,Y,ne){Y.isScene!==!0&&(Y=O);let ae=$.get(R),K=y.state.lights,he=y.state.shadowsArray,ve=K.state.version,Me=Fe.getParameters(R,K.state,he,Y,ne),Ee=Fe.getProgramCacheKey(Me),Ie=ae.programs;ae.environment=R.isMeshStandardMaterial?Y.environment:null,ae.fog=Y.fog,ae.envMap=(R.isMeshStandardMaterial?me:fe).get(R.envMap||ae.environment),ae.envMapRotation=ae.environment!==null&&R.envMap===null?Y.environmentRotation:R.envMapRotation,Ie===void 0&&(R.addEventListener("dispose",Bn),Ie=new Map,ae.programs=Ie);let Be=Ie.get(Ee);if(Be!==void 0){if(ae.currentProgram===Be&&ae.lightsStateVersion===ve)return Vc(R,Me),Be}else Me.uniforms=Fe.getUniforms(R),R.onBeforeCompile(Me,S),Be=Fe.acquireProgram(Me,Ee),Ie.set(Ee,Be),ae.uniforms=Me.uniforms;let be=ae.uniforms;return(R.isShaderMaterial||R.isRawShaderMaterial)&&R.clipping!==!0||(be.clippingPlanes=nt.uniform),Vc(R,Me),ae.needsLights=(function(Ne){return Ne.isMeshLambertMaterial||Ne.isMeshToonMaterial||Ne.isMeshPhongMaterial||Ne.isMeshStandardMaterial||Ne.isShadowMaterial||Ne.isShaderMaterial&&Ne.lights===!0})(R),ae.lightsStateVersion=ve,ae.needsLights&&(be.ambientLightColor.value=K.state.ambient,be.lightProbe.value=K.state.probe,be.directionalLights.value=K.state.directional,be.directionalLightShadows.value=K.state.directionalShadow,be.spotLights.value=K.state.spot,be.spotLightShadows.value=K.state.spotShadow,be.rectAreaLights.value=K.state.rectArea,be.ltc_1.value=K.state.rectAreaLTC1,be.ltc_2.value=K.state.rectAreaLTC2,be.pointLights.value=K.state.point,be.pointLightShadows.value=K.state.pointShadow,be.hemisphereLights.value=K.state.hemi,be.directionalShadowMap.value=K.state.directionalShadowMap,be.directionalShadowMatrix.value=K.state.directionalShadowMatrix,be.spotShadowMap.value=K.state.spotShadowMap,be.spotLightMatrix.value=K.state.spotLightMatrix,be.spotLightMap.value=K.state.spotLightMap,be.pointShadowMap.value=K.state.pointShadowMap,be.pointShadowMatrix.value=K.state.pointShadowMatrix),ae.currentProgram=Be,ae.uniformsList=null,Be}function kc(R){if(R.uniformsList===null){let Y=R.currentProgram.getUniforms();R.uniformsList=Gi.seqWithValue(Y.seq,R.uniforms)}return R.uniformsList}function Vc(R,Y){let ne=$.get(R);ne.outputColorSpace=Y.outputColorSpace,ne.batching=Y.batching,ne.batchingColor=Y.batchingColor,ne.instancing=Y.instancing,ne.instancingColor=Y.instancingColor,ne.instancingMorph=Y.instancingMorph,ne.skinning=Y.skinning,ne.morphTargets=Y.morphTargets,ne.morphNormals=Y.morphNormals,ne.morphColors=Y.morphColors,ne.morphTargetsCount=Y.morphTargetsCount,ne.numClippingPlanes=Y.numClippingPlanes,ne.numIntersection=Y.numClipIntersection,ne.vertexAlphas=Y.vertexAlphas,ne.vertexTangents=Y.vertexTangents,ne.toneMapping=Y.toneMapping}Jn.setAnimationLoop((function(R){Sa&&Sa(R)})),typeof self<"u"&&Jn.setContext(self),this.setAnimationLoop=function(R){Sa=R,Ye.setAnimationLoop(R),R===null?Jn.stop():Jn.start()},Ye.addEventListener("sessionstart",Uc),Ye.addEventListener("sessionend",Oc),this.render=function(R,Y){if(Y!==void 0&&Y.isCamera!==!0)return void console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");if(M===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),Ye.enabled===!0&&Ye.isPresenting===!0&&(Ye.cameraAutoUpdate===!0&&Ye.updateCamera(Y),Y=Ye.getCamera()),R.isScene===!0&&R.onBeforeRender(S,R,Y,T),y=qe.get(R,x.length),y.init(Y),x.push(y),H.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),de.setFromProjectionMatrix(H),w=this.localClippingEnabled,oe=nt.init(this.clippingPlanes,w),m=ke.get(R,v.length),m.init(),v.push(m),Ye.enabled===!0&&Ye.isPresenting===!0){let he=S.xr.getDepthSensingMesh();he!==null&&_a(he,Y,-1/0,S.sortObjects)}_a(R,Y,0,S.sortObjects),m.finish(),S.sortObjects===!0&&m.sort(te,le),b=Ye.enabled===!1||Ye.isPresenting===!1||Ye.hasDepthSensing()===!1,b&&De.addToRenderList(m,R),this.info.render.frame++,oe===!0&&nt.beginShadows();let ne=y.state.shadowsArray;Se.render(ne,R,Y),oe===!0&&nt.endShadows(),this.info.autoReset===!0&&this.info.reset();let ae=m.opaque,K=m.transmissive;if(y.setupLights(),Y.isArrayCamera){let he=Y.cameras;if(K.length>0)for(let ve=0,Me=he.length;ve<Me;ve++)Hc(ae,K,R,he[ve]);b&&De.render(R);for(let ve=0,Me=he.length;ve<Me;ve++){let Ee=he[ve];Nc(m,R,Ee,Ee.viewport)}}else K.length>0&&Hc(ae,K,R,Y),b&&De.render(R),Nc(m,R,Y);T!==null&&(se.updateMultisampleRenderTarget(T),se.updateRenderTargetMipmap(T)),R.isScene===!0&&R.onAfterRender(S,R,Y),rt.resetDefaultState(),I=-1,P=null,x.pop(),x.length>0?(y=x[x.length-1],oe===!0&&nt.setGlobalState(S.clippingPlanes,y.state.camera)):y=null,v.pop(),m=v.length>0?v[v.length-1]:null},this.getActiveCubeFace=function(){return _},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(R,Y,ne){$.get(R.texture).__webglTexture=Y,$.get(R.depthTexture).__webglTexture=ne;let ae=$.get(R);ae.__hasExternalTextures=!0,ae.__autoAllocateDepthBuffer=ne===void 0,ae.__autoAllocateDepthBuffer||V.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ae.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(R,Y){let ne=$.get(R);ne.__webglFramebuffer=Y,ne.__useDefaultFramebuffer=Y===void 0},this.setRenderTarget=function(R,Y=0,ne=0){T=R,_=Y,A=ne;let ae=!0,K=null,he=!1,ve=!1;if(R){let Me=$.get(R);if(Me.__useDefaultFramebuffer!==void 0)G.bindFramebuffer(X.FRAMEBUFFER,null),ae=!1;else if(Me.__webglFramebuffer===void 0)se.setupRenderTarget(R);else if(Me.__hasExternalTextures)se.rebindTextures(R,$.get(R.texture).__webglTexture,$.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){let Be=R.depthTexture;if(Me.__boundDepthTexture!==Be){if(Be!==null&&$.has(Be)&&(R.width!==Be.image.width||R.height!==Be.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");se.setupDepthRenderbuffer(R)}}let Ee=R.texture;(Ee.isData3DTexture||Ee.isDataArrayTexture||Ee.isCompressedArrayTexture)&&(ve=!0);let Ie=$.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(K=Array.isArray(Ie[Y])?Ie[Y][ne]:Ie[Y],he=!0):K=R.samples>0&&se.useMultisampledRTT(R)===!1?$.get(R).__webglMultisampledFramebuffer:Array.isArray(Ie)?Ie[ne]:Ie,D.copy(R.viewport),L.copy(R.scissor),z=R.scissorTest}else D.copy(ee).multiplyScalar(q).floor(),L.copy(re).multiplyScalar(q).floor(),z=ce;if(G.bindFramebuffer(X.FRAMEBUFFER,K)&&ae&&G.drawBuffers(R,K),G.viewport(D),G.scissor(L),G.setScissorTest(z),he){let Me=$.get(R.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Me.__webglTexture,ne)}else if(ve){let Me=$.get(R.texture),Ee=Y||0;X.framebufferTextureLayer(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,Me.__webglTexture,ne||0,Ee)}I=-1},this.readRenderTargetPixels=function(R,Y,ne,ae,K,he,ve){if(!R||!R.isWebGLRenderTarget)return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Me=$.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&ve!==void 0&&(Me=Me[ve]),Me){G.bindFramebuffer(X.FRAMEBUFFER,Me);try{let Ee=R.texture,Ie=Ee.format,Be=Ee.type;if(!J.textureFormatReadable(Ie))return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");if(!J.textureTypeReadable(Be))return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");Y>=0&&Y<=R.width-ae&&ne>=0&&ne<=R.height-K&&X.readPixels(Y,ne,ae,K,We.convert(Ie),We.convert(Be),he)}finally{let Ee=T!==null?$.get(T).__webglFramebuffer:null;G.bindFramebuffer(X.FRAMEBUFFER,Ee)}}},this.readRenderTargetPixelsAsync=async function(R,Y,ne,ae,K,he,ve){if(!R||!R.isWebGLRenderTarget)throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Me=$.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&ve!==void 0&&(Me=Me[ve]),Me){let Ee=R.texture,Ie=Ee.format,Be=Ee.type;if(!J.textureFormatReadable(Ie))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!J.textureTypeReadable(Be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(Y>=0&&Y<=R.width-ae&&ne>=0&&ne<=R.height-K){G.bindFramebuffer(X.FRAMEBUFFER,Me);let be=X.createBuffer();X.bindBuffer(X.PIXEL_PACK_BUFFER,be),X.bufferData(X.PIXEL_PACK_BUFFER,he.byteLength,X.STREAM_READ),X.readPixels(Y,ne,ae,K,We.convert(Ie),We.convert(Be),0);let Ne=T!==null?$.get(T).__webglFramebuffer:null;G.bindFramebuffer(X.FRAMEBUFFER,Ne);let dt=X.fenceSync(X.SYNC_GPU_COMMANDS_COMPLETE,0);return X.flush(),await(function(et,vt,it){return new Promise((function(ze,Lt){setTimeout((function Ct(){switch(et.clientWaitSync(vt,et.SYNC_FLUSH_COMMANDS_BIT,0)){case et.WAIT_FAILED:Lt();break;case et.TIMEOUT_EXPIRED:setTimeout(Ct,it);break;default:ze()}}),it)}))})(X,dt,4),X.bindBuffer(X.PIXEL_PACK_BUFFER,be),X.getBufferSubData(X.PIXEL_PACK_BUFFER,0,he),X.deleteBuffer(be),X.deleteSync(dt),he}throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(R,Y=null,ne=0){R.isTexture!==!0&&(Ts("WebGLRenderer: copyFramebufferToTexture function signature has changed."),Y=arguments[0]||null,R=arguments[1]);let ae=Math.pow(2,-ne),K=Math.floor(R.image.width*ae),he=Math.floor(R.image.height*ae),ve=Y!==null?Y.x:0,Me=Y!==null?Y.y:0;se.setTexture2D(R,0),X.copyTexSubImage2D(X.TEXTURE_2D,ne,0,0,ve,Me,K,he),G.unbindTexture()},this.copyTextureToTexture=function(R,Y,ne=null,ae=null,K=0){let he,ve,Me,Ee,Ie,Be,be,Ne,dt;R.isTexture!==!0&&(Ts("WebGLRenderer: copyTextureToTexture function signature has changed."),ae=arguments[0]||null,R=arguments[1],Y=arguments[2],K=arguments[3]||0,ne=null);let et=R.isCompressedTexture?R.mipmaps[K]:R.image;ne!==null?(he=ne.max.x-ne.min.x,ve=ne.max.y-ne.min.y,Me=ne.isBox3?ne.max.z-ne.min.z:1,Ee=ne.min.x,Ie=ne.min.y,Be=ne.isBox3?ne.min.z:0):(he=et.width,ve=et.height,Me=et.depth||1,Ee=0,Ie=0,Be=0),ae!==null?(be=ae.x,Ne=ae.y,dt=ae.z):(be=0,Ne=0,dt=0);let vt=We.convert(Y.format),it=We.convert(Y.type),ze;Y.isData3DTexture?(se.setTexture3D(Y,0),ze=X.TEXTURE_3D):Y.isDataArrayTexture||Y.isCompressedArrayTexture?(se.setTexture2DArray(Y,0),ze=X.TEXTURE_2D_ARRAY):(se.setTexture2D(Y,0),ze=X.TEXTURE_2D),X.pixelStorei(X.UNPACK_FLIP_Y_WEBGL,Y.flipY),X.pixelStorei(X.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),X.pixelStorei(X.UNPACK_ALIGNMENT,Y.unpackAlignment);let Lt=X.getParameter(X.UNPACK_ROW_LENGTH),Ct=X.getParameter(X.UNPACK_IMAGE_HEIGHT),Ue=X.getParameter(X.UNPACK_SKIP_PIXELS),Re=X.getParameter(X.UNPACK_SKIP_ROWS),en=X.getParameter(X.UNPACK_SKIP_IMAGES);X.pixelStorei(X.UNPACK_ROW_LENGTH,et.width),X.pixelStorei(X.UNPACK_IMAGE_HEIGHT,et.height),X.pixelStorei(X.UNPACK_SKIP_PIXELS,Ee),X.pixelStorei(X.UNPACK_SKIP_ROWS,Ie),X.pixelStorei(X.UNPACK_SKIP_IMAGES,Be);let Aa=R.isDataArrayTexture||R.isData3DTexture,ys=Y.isDataArrayTexture||Y.isData3DTexture;if(R.isRenderTargetTexture||R.isDepthTexture){let Mi=$.get(R),Ma=$.get(Y),Ea=$.get(Mi.__renderTarget),Ta=$.get(Ma.__renderTarget);G.bindFramebuffer(X.READ_FRAMEBUFFER,Ea.__webglFramebuffer),G.bindFramebuffer(X.DRAW_FRAMEBUFFER,Ta.__webglFramebuffer);for(let Ln=0;Ln<Me;Ln++)Aa&&X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,$.get(R).__webglTexture,K,Be+Ln),R.isDepthTexture?(ys&&X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,$.get(Y).__webglTexture,K,dt+Ln),X.blitFramebuffer(Ee,Ie,he,ve,be,Ne,he,ve,X.DEPTH_BUFFER_BIT,X.NEAREST)):ys?X.copyTexSubImage3D(ze,K,be,Ne,dt+Ln,Ee,Ie,he,ve):X.copyTexSubImage2D(ze,K,be,Ne,dt+Ln,Ee,Ie,he,ve);G.bindFramebuffer(X.READ_FRAMEBUFFER,null),G.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else ys?R.isDataTexture||R.isData3DTexture?X.texSubImage3D(ze,K,be,Ne,dt,he,ve,Me,vt,it,et.data):Y.isCompressedArrayTexture?X.compressedTexSubImage3D(ze,K,be,Ne,dt,he,ve,Me,vt,et.data):X.texSubImage3D(ze,K,be,Ne,dt,he,ve,Me,vt,it,et):R.isDataTexture?X.texSubImage2D(X.TEXTURE_2D,K,be,Ne,he,ve,vt,it,et.data):R.isCompressedTexture?X.compressedTexSubImage2D(X.TEXTURE_2D,K,be,Ne,et.width,et.height,vt,et.data):X.texSubImage2D(X.TEXTURE_2D,K,be,Ne,he,ve,vt,it,et);X.pixelStorei(X.UNPACK_ROW_LENGTH,Lt),X.pixelStorei(X.UNPACK_IMAGE_HEIGHT,Ct),X.pixelStorei(X.UNPACK_SKIP_PIXELS,Ue),X.pixelStorei(X.UNPACK_SKIP_ROWS,Re),X.pixelStorei(X.UNPACK_SKIP_IMAGES,en),K===0&&Y.generateMipmaps&&X.generateMipmap(ze),G.unbindTexture()},this.copyTextureToTexture3D=function(R,Y,ne=null,ae=null,K=0){return R.isTexture!==!0&&(Ts("WebGLRenderer: copyTextureToTexture3D function signature has changed."),ne=arguments[0]||null,ae=arguments[1]||null,R=arguments[2],Y=arguments[3],K=arguments[4]||0),Ts('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(R,Y,ne,ae,K)},this.initRenderTarget=function(R){$.get(R).__webglFramebuffer===void 0&&se.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?se.setTextureCube(R,0):R.isData3DTexture?se.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?se.setTexture2DArray(R,0):se.setTexture2D(R,0),G.unbindTexture()},this.resetState=function(){_=0,A=0,T=null,G.reset(),rt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ki}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorspace=Ge._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ge._getUnpackColorSpace()}};var ts=class extends xt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Cn,this.environmentIntensity=1,this.environmentRotation=new Cn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}};var zg=new E;var kg=new E,Vg=new E,Gg=new E,Wg=new Z,jg=new Z,Xg=new ge,qg=new E,Yg=new E,Qg=new E,Kg=new Z,Zg=new Z,Jg=new Z;var $g=new E,e0=new E;var t0=new E,n0=new Ze,i0=new Ze,s0=new E,r0=new ge,a0=new E,o0=new mn,l0=new ge,c0=new gn;var un=class extends Xt{constructor(e=null,t=1,n=1,i,r,a,o,l,c=1003,h=1003,u,d){super(null,a,o,l,c,h,i,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},h0=new ge,u0=new ge;var Gr=class extends Nt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},d0=new ge,p0=new ge;var f0=new Dt,m0=new ge,g0=new tt,y0=new mn;var nl=class{constructor(){this.index=0,this.pool=[],this.list=[]}push(e,t,n,i){let r=this.pool,a=this.list;this.index>=r.length&&r.push({start:-1,count:-1,z:-1,index:-1});let o=r[this.index];a.push(o),this.index++,o.start=e,o.count=t,o.z=n,o.index=i}reset(){this.list.length=0,this.index=0}},v0=new ge,x0=new Pe(1,1,1),S0=new Ls,_0=new Dt,A0=new mn,M0=new E,E0=new E,T0=new E,b0=new nl,C0=new tt;var w0=new E,R0=new E,I0=new ge,P0=new gn,D0=new mn,B0=new E,L0=new E;var F0=new E,U0=new E;var Fs=class extends pi{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new Pe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Gh=new ge,il=new gn,xr=new mn,Sr=new E,Wr=class extends xt{constructor(e=new Je,t=new Fs){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),xr.copy(n.boundingSphere),xr.applyMatrix4(i),xr.radius+=r,e.ray.intersectsSphere(xr)===!1)return;Gh.copy(i).invert(),il.copy(e.ray).applyMatrix4(Gh);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,h=n.attributes.position;if(c!==null)for(let u=Math.max(0,a.start),d=Math.min(c.count,a.start+a.count);u<d;u++){let p=c.getX(u);Sr.fromBufferAttribute(h,p),Wh(Sr,p,l,i,e,t,this)}else for(let u=Math.max(0,a.start),d=Math.min(h.count,a.start+a.count);u<d;u++)Sr.fromBufferAttribute(h,u),Wh(Sr,u,l,i,e,t,this)}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let i=0,r=n.length;i<r;i++){let a=n[i].name||String(i);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=i}}}}};function Wh(s,e,t,n,i,r,a){let o=il.distanceSqToPoint(s);if(o<t){let l=new E;il.closestPointToPoint(s,l),l.applyMatrix4(n);let c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var $t=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,i=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(i),t.push(r),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let n=this.getLengths(),i=0,r=n.length,a;a=t||e*n[r-1];let o,l=0,c=r-1;for(;l<=c;)if(i=Math.floor(l+(c-l)/2),o=n[i]-a,o<0)l=i+1;else{if(!(o>0)){c=i;break}c=i-1}if(i=c,n[i]===a)return i/(r-1);let h=n[i];return(i+(a-h)/(n[i+1]-h))/(r-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);let a=this.getPoint(i),o=this.getPoint(r),l=t||(a.isVector2?new Z:new E);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){let n=new E,i=[],r=[],a=[],o=new E,l=new ge;for(let p=0;p<=e;p++){let f=p/e;i[p]=this.getTangentAt(f,new E)}r[0]=new E,a[0]=new E;let c=Number.MAX_VALUE,h=Math.abs(i[0].x),u=Math.abs(i[0].y),d=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],o),a[0].crossVectors(i[0],r[0]);for(let p=1;p<=e;p++){if(r[p]=r[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(i[p-1],i[p]),o.length()>Number.EPSILON){o.normalize();let f=Math.acos(yt(i[p-1].dot(i[p]),-1,1));r[p].applyMatrix4(l.makeRotationAxis(o,f))}a[p].crossVectors(i[p],r[p])}if(t===!0){let p=Math.acos(yt(r[0].dot(r[e]),-1,1));p/=e,i[0].dot(o.crossVectors(r[0],r[e]))>0&&(p=-p);for(let f=1;f<=e;f++)r[f].applyMatrix4(l.makeRotationAxis(i[f],p*f)),a[f].crossVectors(i[f],r[f])}return{tangents:i,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Us=class extends $t{constructor(e=0,t=0,n=1,i=1,r=0,a=2*Math.PI,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new Z){let n=t,i=2*Math.PI,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(r=a?0:i),this.aClockwise!==!0||a||(r===i?r=-i:r-=i);let o=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,p=c-this.aY;l=d*h-p*u+this.aX,c=d*u+p*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},sl=class extends Us{constructor(e,t,n,i,r,a){super(e,t,n,n,i,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function kl(){let s=0,e=0,t=0,n=0;function i(r,a,o,l){s=r,e=o,t=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){i(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,u){let d=(a-r)/c-(o-r)/(c+h)+(o-a)/h,p=(o-a)/h-(l-a)/(h+u)+(l-o)/u;d*=h,p*=h,i(a,o,d,p)},calc:function(r){let a=r*r;return s+e*r+t*a+n*(a*r)}}}var _r=new E,no=new kl,io=new kl,so=new kl,rl=class extends $t{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new E){let n=t,i=this.points,r=i.length,a=(r-(this.closed?0:1))*e,o,l,c=Math.floor(a),h=a-c;this.closed?c+=c>0?0:(Math.floor(Math.abs(c)/r)+1)*r:h===0&&c===r-1&&(c=r-2,h=1),this.closed||c>0?o=i[(c-1)%r]:(_r.subVectors(i[0],i[1]).add(i[0]),o=_r);let u=i[c%r],d=i[(c+1)%r];if(this.closed||c+2<r?l=i[(c+2)%r]:(_r.subVectors(i[r-1],i[r-2]).add(i[r-1]),l=_r),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,f=Math.pow(o.distanceToSquared(u),p),g=Math.pow(u.distanceToSquared(d),p),m=Math.pow(d.distanceToSquared(l),p);g<1e-4&&(g=1),f<1e-4&&(f=g),m<1e-4&&(m=g),no.initNonuniformCatmullRom(o.x,u.x,d.x,l.x,f,g,m),io.initNonuniformCatmullRom(o.y,u.y,d.y,l.y,f,g,m),so.initNonuniformCatmullRom(o.z,u.z,d.z,l.z,f,g,m)}else this.curveType==="catmullrom"&&(no.initCatmullRom(o.x,u.x,d.x,l.x,this.tension),io.initCatmullRom(o.y,u.y,d.y,l.y,this.tension),so.initCatmullRom(o.z,u.z,d.z,l.z,this.tension));return n.set(no.calc(h),io.calc(h),so.calc(h)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new E().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function jh(s,e,t,n,i){let r=.5*(n-e),a=.5*(i-t),o=s*s;return(2*t-2*n+r+a)*(s*o)+(-3*t+3*n-2*r-a)*o+r*s+t}function ws(s,e,t,n){return(function(i,r){let a=1-i;return a*a*r})(s,e)+(function(i,r){return 2*(1-i)*i*r})(s,t)+(function(i,r){return i*i*r})(s,n)}function Rs(s,e,t,n,i){return(function(r,a){let o=1-r;return o*o*o*a})(s,e)+(function(r,a){let o=1-r;return 3*o*o*r*a})(s,t)+(function(r,a){return 3*(1-r)*r*r*a})(s,n)+(function(r,a){return r*r*r*a})(s,i)}var jr=class extends $t{constructor(e=new Z,t=new Z,n=new Z,i=new Z){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new Z){let n=t,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Rs(e,i.x,r.x,a.x,o.x),Rs(e,i.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},al=class extends $t{constructor(e=new E,t=new E,n=new E,i=new E){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new E){let n=t,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Rs(e,i.x,r.x,a.x,o.x),Rs(e,i.y,r.y,a.y,o.y),Rs(e,i.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Xr=class extends $t{constructor(e=new Z,t=new Z){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Z){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Z){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ol=class extends $t{constructor(e=new E,t=new E){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new E){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new E){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},qr=class extends $t{constructor(e=new Z,t=new Z,n=new Z){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Z){let n=t,i=this.v0,r=this.v1,a=this.v2;return n.set(ws(e,i.x,r.x,a.x),ws(e,i.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Yr=class extends $t{constructor(e=new E,t=new E,n=new E){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new E){let n=t,i=this.v0,r=this.v1,a=this.v2;return n.set(ws(e,i.x,r.x,a.x),ws(e,i.y,r.y,a.y),ws(e,i.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Qr=class extends $t{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Z){let n=t,i=this.points,r=(i.length-1)*e,a=Math.floor(r),o=r-a,l=i[a===0?a:a-1],c=i[a],h=i[a>i.length-2?i.length-1:a+1],u=i[a>i.length-3?i.length-1:a+2];return n.set(jh(o,l.x,c.x,h.x,u.x),jh(o,l.y,c.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new Z().fromArray(i))}return this}},Kr=Object.freeze({__proto__:null,ArcCurve:sl,CatmullRomCurve3:rl,CubicBezierCurve:jr,CubicBezierCurve3:al,EllipseCurve:Us,LineCurve:Xr,LineCurve3:ol,QuadraticBezierCurve:qr,QuadraticBezierCurve3:Yr,SplineCurve:Qr}),ll=class extends $t{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Kr[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),i=this.getCurveLengths(),r=0;for(;r<i.length;){if(i[r]>=n){let a=i[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let i=0,r=this.curves;i<r.length;i++){let a=r[i],o=a.isEllipseCurve?2*e:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let i=e.curves[t];this.curves.push(new Kr[i.type]().fromJSON(i))}return this}},Os=class extends ll{constructor(e){super(),this.type="Path",this.currentPoint=new Z,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new Xr(this.currentPoint.clone(),new Z(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){let r=new qr(this.currentPoint.clone(),new Z(e,t),new Z(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,r,a){let o=new jr(this.currentPoint.clone(),new Z(e,t),new Z(n,i),new Z(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new Qr(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,i,r,a),this}absarc(e,t,n,i,r,a){return this.absellipse(e,t,n,n,i,r,a),this}ellipse(e,t,n,i,r,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,i,r,a,o,l),this}absellipse(e,t,n,i,r,a,o,l){let c=new Us(e,t,n,i,r,a,o,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Zr=class s extends Je{constructor(e=[new Z(0,-.5),new Z(.5,0),new Z(0,.5)],t=12,n=0,i=2*Math.PI){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:i},t=Math.floor(t),i=yt(i,0,2*Math.PI);let r=[],a=[],o=[],l=[],c=[],h=1/t,u=new E,d=new Z,p=new E,f=new E,g=new E,m=0,y=0;for(let v=0;v<=e.length-1;v++)switch(v){case 0:m=e[v+1].x-e[v].x,y=e[v+1].y-e[v].y,p.x=1*y,p.y=-m,p.z=0*y,g.copy(p),p.normalize(),l.push(p.x,p.y,p.z);break;case e.length-1:l.push(g.x,g.y,g.z);break;default:m=e[v+1].x-e[v].x,y=e[v+1].y-e[v].y,p.x=1*y,p.y=-m,p.z=0*y,f.copy(p),p.x+=g.x,p.y+=g.y,p.z+=g.z,p.normalize(),l.push(p.x,p.y,p.z),g.copy(f)}for(let v=0;v<=t;v++){let x=n+v*h*i,S=Math.sin(x),M=Math.cos(x);for(let _=0;_<=e.length-1;_++){u.x=e[_].x*S,u.y=e[_].y,u.z=e[_].x*M,a.push(u.x,u.y,u.z),d.x=v/t,d.y=_/(e.length-1),o.push(d.x,d.y);let A=l[3*_+0]*S,T=l[3*_+1],I=l[3*_+0]*M;c.push(A,T,I)}}for(let v=0;v<t;v++)for(let x=0;x<e.length-1;x++){let S=x+v*e.length,M=S,_=S+e.length,A=S+e.length+1,T=S+1;r.push(M,_,T),r.push(A,T,_)}this.setIndex(r),this.setAttribute("position",new we(a,3)),this.setAttribute("uv",new we(o,2)),this.setAttribute("normal",new we(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.points,e.segments,e.phiStart,e.phiLength)}},cl=class s extends Zr{constructor(e=1,t=1,n=4,i=8){let r=new Os;r.absarc(0,-t/2,e,1.5*Math.PI,0),r.absarc(0,t/2,e,0,.5*Math.PI),super(r.getPoints(n),i),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:n,radialSegments:i}}static fromJSON(e){return new s(e.radius,e.length,e.capSegments,e.radialSegments)}},hl=class s extends Je{constructor(e=1,t=32,n=0,i=2*Math.PI){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);let r=[],a=[],o=[],l=[],c=new E,h=new Z;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){let p=n+u/t*i;c.x=e*Math.cos(p),c.y=e*Math.sin(p),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[d]/e+1)/2,h.y=(a[d+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new we(a,3)),this.setAttribute("normal",new we(o,3)),this.setAttribute("uv",new we(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.segments,e.thetaStart,e.thetaLength)}},fi=class s extends Je{constructor(e=1,t=1,n=1,i=32,r=1,a=!1,o=0,l=2*Math.PI){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;i=Math.floor(i),r=Math.floor(r);let h=[],u=[],d=[],p=[],f=0,g=[],m=n/2,y=0;function v(x){let S=f,M=new Z,_=new E,A=0,T=x===!0?e:t,I=x===!0?1:-1;for(let D=1;D<=i;D++)u.push(0,m*I,0),d.push(0,I,0),p.push(.5,.5),f++;let P=f;for(let D=0;D<=i;D++){let L=D/i*l+o,z=Math.cos(L),U=Math.sin(L);_.x=T*U,_.y=m*I,_.z=T*z,u.push(_.x,_.y,_.z),d.push(0,I,0),M.x=.5*z+.5,M.y=.5*U*I+.5,p.push(M.x,M.y),f++}for(let D=0;D<i;D++){let L=S+D,z=P+D;x===!0?h.push(z,z+1,L):h.push(z+1,z,L),A+=3}c.addGroup(y,A,x===!0?1:2),y+=A}(function(){let x=new E,S=new E,M=0,_=(t-e)/n;for(let A=0;A<=r;A++){let T=[],I=A/r,P=I*(t-e)+e;for(let D=0;D<=i;D++){let L=D/i,z=L*l+o,U=Math.sin(z),k=Math.cos(z);S.x=P*U,S.y=-I*n+m,S.z=P*k,u.push(S.x,S.y,S.z),x.set(U,_,k).normalize(),d.push(x.x,x.y,x.z),p.push(L,1-I),T.push(f++)}g.push(T)}for(let A=0;A<i;A++)for(let T=0;T<r;T++){let I=g[T][A],P=g[T+1][A],D=g[T+1][A+1],L=g[T][A+1];(e>0||T!==0)&&(h.push(I,P,L),M+=3),(t>0||T!==r-1)&&(h.push(P,D,L),M+=3)}c.addGroup(y,M,0),y+=M})(),a===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new we(u,3)),this.setAttribute("normal",new we(d,3)),this.setAttribute("uv",new we(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Ns=class s extends fi{constructor(e=1,t=1,n=32,i=1,r=!1,a=0,o=2*Math.PI){super(0,e,t,n,i,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new s(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},mi=class s extends Je{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};let r=[],a=[];function o(d,p,f,g){let m=g+1,y=[];for(let v=0;v<=m;v++){y[v]=[];let x=d.clone().lerp(f,v/m),S=p.clone().lerp(f,v/m),M=m-v;for(let _=0;_<=M;_++)y[v][_]=_===0&&v===m?x:x.clone().lerp(S,_/M)}for(let v=0;v<m;v++)for(let x=0;x<2*(m-v)-1;x++){let S=Math.floor(x/2);x%2==0?(l(y[v][S+1]),l(y[v+1][S]),l(y[v][S])):(l(y[v][S+1]),l(y[v+1][S+1]),l(y[v+1][S]))}}function l(d){r.push(d.x,d.y,d.z)}function c(d,p){let f=3*d;p.x=e[f+0],p.y=e[f+1],p.z=e[f+2]}function h(d,p,f,g){g<0&&d.x===1&&(a[p]=d.x-1),f.x===0&&f.z===0&&(a[p]=g/2/Math.PI+.5)}function u(d){return Math.atan2(d.z,-d.x)}(function(d){let p=new E,f=new E,g=new E;for(let m=0;m<t.length;m+=3)c(t[m+0],p),c(t[m+1],f),c(t[m+2],g),o(p,f,g,d)})(i),(function(d){let p=new E;for(let f=0;f<r.length;f+=3)p.x=r[f+0],p.y=r[f+1],p.z=r[f+2],p.normalize().multiplyScalar(d),r[f+0]=p.x,r[f+1]=p.y,r[f+2]=p.z})(n),(function(){let d=new E;for(let f=0;f<r.length;f+=3){d.x=r[f+0],d.y=r[f+1],d.z=r[f+2];let g=u(d)/2/Math.PI+.5,m=(p=d,Math.atan2(-p.y,Math.sqrt(p.x*p.x+p.z*p.z))/Math.PI+.5);a.push(g,1-m)}var p;(function(){let f=new E,g=new E,m=new E,y=new E,v=new Z,x=new Z,S=new Z;for(let M=0,_=0;M<r.length;M+=9,_+=6){f.set(r[M+0],r[M+1],r[M+2]),g.set(r[M+3],r[M+4],r[M+5]),m.set(r[M+6],r[M+7],r[M+8]),v.set(a[_+0],a[_+1]),x.set(a[_+2],a[_+3]),S.set(a[_+4],a[_+5]),y.copy(f).add(g).add(m).divideScalar(3);let A=u(y);h(v,_+0,f,A),h(x,_+2,g,A),h(S,_+4,m,A)}})(),(function(){for(let f=0;f<a.length;f+=6){let g=a[f+0],m=a[f+2],y=a[f+4],v=Math.max(g,m,y),x=Math.min(g,m,y);v>.9&&x<.1&&(g<.2&&(a[f+0]+=1),m<.2&&(a[f+2]+=1),y<.2&&(a[f+4]+=1))}})()})(),this.setAttribute("position",new we(r,3)),this.setAttribute("normal",new we(r.slice(),3)),this.setAttribute("uv",new we(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals()}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.vertices,e.indices,e.radius,e.details)}},ul=class s extends mi{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,i=1/n;super([-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9],e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new s(e.radius,e.detail)}},Ar=new E,Mr=new E,ro=new E,Er=new Vn,dl=class extends Je{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){let i=Math.pow(10,4),r=Math.cos(ki*t),a=e.getIndex(),o=e.getAttribute("position"),l=a?a.count:o.count,c=[0,0,0],h=["a","b","c"],u=new Array(3),d={},p=[];for(let f=0;f<l;f+=3){a?(c[0]=a.getX(f),c[1]=a.getX(f+1),c[2]=a.getX(f+2)):(c[0]=f,c[1]=f+1,c[2]=f+2);let{a:g,b:m,c:y}=Er;if(g.fromBufferAttribute(o,c[0]),m.fromBufferAttribute(o,c[1]),y.fromBufferAttribute(o,c[2]),Er.getNormal(ro),u[0]=`${Math.round(g.x*i)},${Math.round(g.y*i)},${Math.round(g.z*i)}`,u[1]=`${Math.round(m.x*i)},${Math.round(m.y*i)},${Math.round(m.z*i)}`,u[2]=`${Math.round(y.x*i)},${Math.round(y.y*i)},${Math.round(y.z*i)}`,u[0]!==u[1]&&u[1]!==u[2]&&u[2]!==u[0])for(let v=0;v<3;v++){let x=(v+1)%3,S=u[v],M=u[x],_=Er[h[v]],A=Er[h[x]],T=`${S}_${M}`,I=`${M}_${S}`;I in d&&d[I]?(ro.dot(d[I].normal)<=r&&(p.push(_.x,_.y,_.z),p.push(A.x,A.y,A.z)),d[I]=null):T in d||(d[T]={index0:c[v],index1:c[x],normal:ro.clone()})}}for(let f in d)if(d[f]){let{index0:g,index1:m}=d[f];Ar.fromBufferAttribute(o,g),Mr.fromBufferAttribute(o,m),p.push(Ar.x,Ar.y,Ar.z),p.push(Mr.x,Mr.y,Mr.z)}this.setAttribute("position",new we(p,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}},Jr=class extends Os{constructor(e){super(e),this.uuid=vi(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let i=e.holes[t];this.holes.push(new Os().fromJSON(i))}return this}},Ff=function(s,e,t=2){let n=e&&e.length,i=n?e[0]*t:s.length,r=Xh(s,0,i,t,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c,h,u,d,p;if(n&&(r=(function(f,g,m,y){let v=[],x,S,M,_,A;for(x=0,S=g.length;x<S;x++)M=g[x]*y,_=x<S-1?g[x+1]*y:f.length,A=Xh(f,M,_,y,!1),A===A.next&&(A.steiner=!0),v.push(Gf(A));for(v.sort(zf),x=0;x<v.length;x++)m=kf(v[x],m);return m})(s,e,r,t)),s.length>80*t){o=c=s[0],l=h=s[1];for(let f=t;f<i;f+=t)u=s[f],d=s[f+1],u<o&&(o=u),d<l&&(l=d),u>c&&(c=u),d>h&&(h=d);p=Math.max(c-o,h-l),p=p!==0?32767/p:0}return Hs(r,a,t,o,l,p,0),a};function Xh(s,e,t,n,i){let r,a;if(i===(function(o,l,c,h){let u=0;for(let d=l,p=c-h;d<c;d+=h)u+=(o[p]-o[d])*(o[d+1]+o[p+1]),p=d;return u})(s,e,t,n)>0)for(r=e;r<t;r+=n)a=qh(r,s[r],s[r+1],a);else for(r=t-n;r>=e;r-=n)a=qh(r,s[r],s[r+1],a);return a&&oa(a,a.next)&&(ks(a),a=a.next),a}function gi(s,e){if(!s)return s;e||(e=s);let t,n=s;do if(t=!1,n.steiner||!oa(n,n.next)&&ht(n.prev,n,n.next)!==0)n=n.next;else{if(ks(n),n=e=n.prev,n===n.next)break;t=!0}while(t||n!==e);return e}function Hs(s,e,t,n,i,r,a){if(!s)return;!a&&r&&(function(h,u,d,p){let f=h;do f.z===0&&(f.z=pl(f.x,f.y,u,d,p)),f.prevZ=f.prev,f.nextZ=f.next,f=f.next;while(f!==h);f.prevZ.nextZ=null,f.prevZ=null,(function(g){let m,y,v,x,S,M,_,A,T=1;do{for(y=g,g=null,S=null,M=0;y;){for(M++,v=y,_=0,m=0;m<T&&(_++,v=v.nextZ,v);m++);for(A=T;_>0||A>0&&v;)_!==0&&(A===0||!v||y.z<=v.z)?(x=y,y=y.nextZ,_--):(x=v,v=v.nextZ,A--),S?S.nextZ=x:g=x,x.prevZ=S,S=x;y=v}S.nextZ=null,T*=2}while(M>1)})(f)})(s,n,i,r);let o,l,c=s;for(;s.prev!==s.next;)if(o=s.prev,l=s.next,r?Of(s,n,i,r):Uf(s))e.push(o.i/t|0),e.push(s.i/t|0),e.push(l.i/t|0),ks(s),s=l.next,c=l.next;else if((s=l)===c){a?a===1?Hs(s=Nf(gi(s),e,t),e,t,n,i,r,2):a===2&&Hf(s,e,t,n,i,r):Hs(gi(s),e,t,n,i,r,1);break}}function Uf(s){let e=s.prev,t=s,n=s.next;if(ht(e,t,n)>=0)return!1;let i=e.x,r=t.x,a=n.x,o=e.y,l=t.y,c=n.y,h=i<r?i<a?i:a:r<a?r:a,u=o<l?o<c?o:c:l<c?l:c,d=i>r?i>a?i:a:r>a?r:a,p=o>l?o>c?o:c:l>c?l:c,f=n.next;for(;f!==e;){if(f.x>=h&&f.x<=d&&f.y>=u&&f.y<=p&&zi(i,o,r,l,a,c,f.x,f.y)&&ht(f.prev,f,f.next)>=0)return!1;f=f.next}return!0}function Of(s,e,t,n){let i=s.prev,r=s,a=s.next;if(ht(i,r,a)>=0)return!1;let o=i.x,l=r.x,c=a.x,h=i.y,u=r.y,d=a.y,p=o<l?o<c?o:c:l<c?l:c,f=h<u?h<d?h:d:u<d?u:d,g=o>l?o>c?o:c:l>c?l:c,m=h>u?h>d?h:d:u>d?u:d,y=pl(p,f,e,t,n),v=pl(g,m,e,t,n),x=s.prevZ,S=s.nextZ;for(;x&&x.z>=y&&S&&S.z<=v;){if(x.x>=p&&x.x<=g&&x.y>=f&&x.y<=m&&x!==i&&x!==a&&zi(o,h,l,u,c,d,x.x,x.y)&&ht(x.prev,x,x.next)>=0||(x=x.prevZ,S.x>=p&&S.x<=g&&S.y>=f&&S.y<=m&&S!==i&&S!==a&&zi(o,h,l,u,c,d,S.x,S.y)&&ht(S.prev,S,S.next)>=0))return!1;S=S.nextZ}for(;x&&x.z>=y;){if(x.x>=p&&x.x<=g&&x.y>=f&&x.y<=m&&x!==i&&x!==a&&zi(o,h,l,u,c,d,x.x,x.y)&&ht(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;S&&S.z<=v;){if(S.x>=p&&S.x<=g&&S.y>=f&&S.y<=m&&S!==i&&S!==a&&zi(o,h,l,u,c,d,S.x,S.y)&&ht(S.prev,S,S.next)>=0)return!1;S=S.nextZ}return!0}function Nf(s,e,t){let n=s;do{let i=n.prev,r=n.next.next;!oa(i,r)&&yu(i,n,n.next,r)&&zs(i,r)&&zs(r,i)&&(e.push(i.i/t|0),e.push(n.i/t|0),e.push(r.i/t|0),ks(n),ks(n.next),n=s=r),n=n.next}while(n!==s);return gi(n)}function Hf(s,e,t,n,i,r){let a=s;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Wf(a,o)){let l=vu(a,o);return a=gi(a,a.next),l=gi(l,l.next),Hs(a,e,t,n,i,r,0),void Hs(l,e,t,n,i,r,0)}o=o.next}a=a.next}while(a!==s)}function zf(s,e){return s.x-e.x}function kf(s,e){let t=(function(i,r){let a,o=r,l=-1/0,c=i.x,h=i.y;do{if(h<=o.y&&h>=o.next.y&&o.next.y!==o.y){let m=o.x+(h-o.y)*(o.next.x-o.x)/(o.next.y-o.y);if(m<=c&&m>l&&(l=m,a=o.x<o.next.x?o:o.next,m===c))return a}o=o.next}while(o!==r);if(!a)return null;let u=a,d=a.x,p=a.y,f,g=1/0;o=a;do c>=o.x&&o.x>=d&&c!==o.x&&zi(h<p?c:l,h,d,p,h<p?l:c,h,o.x,o.y)&&(f=Math.abs(h-o.y)/(c-o.x),zs(o,i)&&(f<g||f===g&&(o.x>a.x||o.x===a.x&&Vf(a,o)))&&(a=o,g=f)),o=o.next;while(o!==u);return a})(s,e);if(!t)return e;let n=vu(t,s);return gi(n,n.next),gi(t,t.next)}function Vf(s,e){return ht(s.prev,s,e.prev)<0&&ht(e.next,s,s.next)<0}function pl(s,e,t,n,i){return(s=1431655765&((s=858993459&((s=252645135&((s=16711935&((s=(s-t)*i|0)|s<<8))|s<<4))|s<<2))|s<<1))|(e=1431655765&((e=858993459&((e=252645135&((e=16711935&((e=(e-n)*i|0)|e<<8))|e<<4))|e<<2))|e<<1))<<1}function Gf(s){let e=s,t=s;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==s);return t}function zi(s,e,t,n,i,r,a,o){return(i-a)*(e-o)>=(s-a)*(r-o)&&(s-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(i-a)*(n-o)}function Wf(s,e){return s.next.i!==e.i&&s.prev.i!==e.i&&!(function(t,n){let i=t;do{if(i.i!==t.i&&i.next.i!==t.i&&i.i!==n.i&&i.next.i!==n.i&&yu(i,i.next,t,n))return!0;i=i.next}while(i!==t);return!1})(s,e)&&(zs(s,e)&&zs(e,s)&&(function(t,n){let i=t,r=!1,a=(t.x+n.x)/2,o=(t.y+n.y)/2;do i.y>o!=i.next.y>o&&i.next.y!==i.y&&a<(i.next.x-i.x)*(o-i.y)/(i.next.y-i.y)+i.x&&(r=!r),i=i.next;while(i!==t);return r})(s,e)&&(ht(s.prev,s,e.prev)||ht(s,e.prev,e))||oa(s,e)&&ht(s.prev,s,s.next)>0&&ht(e.prev,e,e.next)>0)}function ht(s,e,t){return(e.y-s.y)*(t.x-e.x)-(e.x-s.x)*(t.y-e.y)}function oa(s,e){return s.x===e.x&&s.y===e.y}function yu(s,e,t,n){let i=br(ht(s,e,t)),r=br(ht(s,e,n)),a=br(ht(t,n,s)),o=br(ht(t,n,e));return i!==r&&a!==o||!(i!==0||!Tr(s,t,e))||!(r!==0||!Tr(s,n,e))||!(a!==0||!Tr(t,s,n))||!(o!==0||!Tr(t,e,n))}function Tr(s,e,t){return e.x<=Math.max(s.x,t.x)&&e.x>=Math.min(s.x,t.x)&&e.y<=Math.max(s.y,t.y)&&e.y>=Math.min(s.y,t.y)}function br(s){return s>0?1:s<0?-1:0}function zs(s,e){return ht(s.prev,s,s.next)<0?ht(s,e,s.next)>=0&&ht(s,s.prev,e)>=0:ht(s,e,s.prev)<0||ht(s,s.next,e)<0}function vu(s,e){let t=new fl(s.i,s.x,s.y),n=new fl(e.i,e.x,e.y),i=s.next,r=e.prev;return s.next=e,e.prev=s,t.next=i,i.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function qh(s,e,t,n){let i=new fl(s,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function ks(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function fl(s,e,t){this.i=s,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}var Gn=class s{static area(e){let t=e.length,n=0;for(let i=t-1,r=0;r<t;i=r++)n+=e[i].x*e[r].y-e[r].x*e[i].y;return .5*n}static isClockWise(e){return s.area(e)<0}static triangulateShape(e,t){let n=[],i=[],r=[];Yh(e),Qh(n,e);let a=e.length;t.forEach(Yh);for(let l=0;l<t.length;l++)i.push(a),a+=t[l].length,Qh(n,t[l]);let o=Ff(n,i);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function Yh(s){let e=s.length;e>2&&s[e-1].equals(s[0])&&s.pop()}function Qh(s,e){for(let t=0;t<e.length;t++)s.push(e[t].x),s.push(e[t].y)}var ml=class s extends Je{constructor(e=new Jr([new Z(.5,.5),new Z(-.5,.5),new Z(-.5,-.5),new Z(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,i=[],r=[];for(let o=0,l=e.length;o<l;o++)a(e[o]);function a(o){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1,d=t.bevelEnabled===void 0||t.bevelEnabled,p=t.bevelThickness!==void 0?t.bevelThickness:.2,f=t.bevelSize!==void 0?t.bevelSize:p-.1,g=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3,y=t.extrudePath,v=t.UVGenerator!==void 0?t.UVGenerator:jf,x,S,M,_,A,T=!1;y&&(x=y.getSpacedPoints(h),T=!0,d=!1,S=y.computeFrenetFrames(h,!1),M=new E,_=new E,A=new E),d||(m=0,p=0,f=0,g=0);let I=o.extractPoints(c),P=I.shape,D=I.holes;if(!Gn.isClockWise(P)){P=P.reverse();for(let N=0,B=D.length;N<B;N++){let O=D[N];Gn.isClockWise(O)&&(D[N]=O.reverse())}}let L=Gn.triangulateShape(P,D),z=P;for(let N=0,B=D.length;N<B;N++){let O=D[N];P=P.concat(O)}function U(N,B,O){return B||console.error("THREE.ExtrudeGeometry: vec does not exist"),N.clone().addScaledVector(B,O)}let k=P.length,W=L.length;function Q(N,B,O){let b,F,V,J=N.x-B.x,G=N.y-B.y,ie=O.x-N.x,$=O.y-N.y,se=J*J+G*G,fe=J*$-G*ie;if(Math.abs(fe)>Number.EPSILON){let me=Math.sqrt(se),_e=Math.sqrt(ie*ie+$*$),Ce=B.x-G/me,Oe=B.y+J/me,Fe=((O.x-$/_e-Ce)*$-(O.y+ie/_e-Oe)*ie)/(J*$-G*ie);b=Ce+J*Fe-N.x,F=Oe+G*Fe-N.y;let Ae=b*b+F*F;if(Ae<=2)return new Z(b,F);V=Math.sqrt(Ae/2)}else{let me=!1;J>Number.EPSILON?ie>Number.EPSILON&&(me=!0):J<-Number.EPSILON?ie<-Number.EPSILON&&(me=!0):Math.sign(G)===Math.sign($)&&(me=!0),me?(b=-G,F=J,V=Math.sqrt(se)):(b=J,F=G,V=Math.sqrt(se/2))}return new Z(b/V,F/V)}let q=[];for(let N=0,B=z.length,O=B-1,b=N+1;N<B;N++,O++,b++)O===B&&(O=0),b===B&&(b=0),q[N]=Q(z[N],z[O],z[b]);let te=[],le,ee=q.concat();for(let N=0,B=D.length;N<B;N++){let O=D[N];le=[];for(let b=0,F=O.length,V=F-1,J=b+1;b<F;b++,V++,J++)V===F&&(V=0),J===F&&(J=0),le[b]=Q(O[b],O[V],O[J]);te.push(le),ee=ee.concat(le)}for(let N=0;N<m;N++){let B=N/m,O=p*Math.cos(B*Math.PI/2),b=f*Math.sin(B*Math.PI/2)+g;for(let F=0,V=z.length;F<V;F++){let J=U(z[F],q[F],b);de(J.x,J.y,-O)}for(let F=0,V=D.length;F<V;F++){let J=D[F];le=te[F];for(let G=0,ie=J.length;G<ie;G++){let $=U(J[G],le[G],b);de($.x,$.y,-O)}}}let re=f+g;for(let N=0;N<k;N++){let B=d?U(P[N],ee[N],re):P[N];T?(_.copy(S.normals[0]).multiplyScalar(B.x),M.copy(S.binormals[0]).multiplyScalar(B.y),A.copy(x[0]).add(_).add(M),de(A.x,A.y,A.z)):de(B.x,B.y,0)}for(let N=1;N<=h;N++)for(let B=0;B<k;B++){let O=d?U(P[B],ee[B],re):P[B];T?(_.copy(S.normals[N]).multiplyScalar(O.x),M.copy(S.binormals[N]).multiplyScalar(O.y),A.copy(x[N]).add(_).add(M),de(A.x,A.y,A.z)):de(O.x,O.y,u/h*N)}for(let N=m-1;N>=0;N--){let B=N/m,O=p*Math.cos(B*Math.PI/2),b=f*Math.sin(B*Math.PI/2)+g;for(let F=0,V=z.length;F<V;F++){let J=U(z[F],q[F],b);de(J.x,J.y,u+O)}for(let F=0,V=D.length;F<V;F++){let J=D[F];le=te[F];for(let G=0,ie=J.length;G<ie;G++){let $=U(J[G],le[G],b);T?de($.x,$.y+x[h-1].y,x[h-1].x+O):de($.x,$.y,u+O)}}}function ce(N,B){let O=N.length;for(;--O>=0;){let b=O,F=O-1;F<0&&(F=N.length-1);for(let V=0,J=h+2*m;V<J;V++){let G=k*V,ie=k*(V+1);w(B+b+G,B+F+G,B+F+ie,B+b+ie)}}}function de(N,B,O){l.push(N),l.push(B),l.push(O)}function oe(N,B,O){C(N),C(B),C(O);let b=i.length/3,F=v.generateTopUV(n,i,b-3,b-2,b-1);H(F[0]),H(F[1]),H(F[2])}function w(N,B,O,b){C(N),C(B),C(b),C(B),C(O),C(b);let F=i.length/3,V=v.generateSideWallUV(n,i,F-6,F-3,F-2,F-1);H(V[0]),H(V[1]),H(V[3]),H(V[1]),H(V[2]),H(V[3])}function C(N){i.push(l[3*N+0]),i.push(l[3*N+1]),i.push(l[3*N+2])}function H(N){r.push(N.x),r.push(N.y)}(function(){let N=i.length/3;if(d){let B=0,O=k*B;for(let b=0;b<W;b++){let F=L[b];oe(F[2]+O,F[1]+O,F[0]+O)}B=h+2*m,O=k*B;for(let b=0;b<W;b++){let F=L[b];oe(F[0]+O,F[1]+O,F[2]+O)}}else{for(let B=0;B<W;B++){let O=L[B];oe(O[2],O[1],O[0])}for(let B=0;B<W;B++){let O=L[B];oe(O[0]+k*h,O[1]+k*h,O[2]+k*h)}}n.addGroup(N,i.length/3-N,0)})(),(function(){let N=i.length/3,B=0;ce(z,B),B+=z.length;for(let O=0,b=D.length;O<b;O++){let F=D[O];ce(F,B),B+=F.length}n.addGroup(N,i.length/3-N,1)})()}this.setAttribute("position",new we(i,3)),this.setAttribute("uv",new we(r,2)),this.computeVertexNormals()}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return(function(t,n,i){if(i.shapes=[],Array.isArray(t))for(let r=0,a=t.length;r<a;r++){let o=t[r];i.shapes.push(o.uuid)}else i.shapes.push(t.uuid);return i.options=Object.assign({},n),n.extrudePath!==void 0&&(i.options.extrudePath=n.extrudePath.toJSON()),i})(this.parameters.shapes,this.parameters.options,e)}static fromJSON(e,t){let n=[];for(let r=0,a=e.shapes.length;r<a;r++){let o=t[e.shapes[r]];n.push(o)}let i=e.options.extrudePath;return i!==void 0&&(e.options.extrudePath=new Kr[i.type]().fromJSON(i)),new s(n,e.options)}},jf={generateTopUV:function(s,e,t,n,i){let r=e[3*t],a=e[3*t+1],o=e[3*n],l=e[3*n+1],c=e[3*i],h=e[3*i+1];return[new Z(r,a),new Z(o,l),new Z(c,h)]},generateSideWallUV:function(s,e,t,n,i,r){let a=e[3*t],o=e[3*t+1],l=e[3*t+2],c=e[3*n],h=e[3*n+1],u=e[3*n+2],d=e[3*i],p=e[3*i+1],f=e[3*i+2],g=e[3*r],m=e[3*r+1],y=e[3*r+2];return Math.abs(o-h)<Math.abs(a-c)?[new Z(a,1-l),new Z(c,1-u),new Z(d,1-f),new Z(g,1-y)]:[new Z(o,1-l),new Z(h,1-u),new Z(p,1-f),new Z(m,1-y)]}},gl=class s extends mi{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2;super([-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1],e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new s(e.radius,e.detail)}},yl=class s extends mi{constructor(e=1,t=0){super([1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2],e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new s(e.radius,e.detail)}},vl=class s extends Je{constructor(e=.5,t=1,n=32,i=1,r=0,a=2*Math.PI){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:a},n=Math.max(3,n);let o=[],l=[],c=[],h=[],u=e,d=(t-e)/(i=Math.max(1,i)),p=new E,f=new Z;for(let g=0;g<=i;g++){for(let m=0;m<=n;m++){let y=r+m/n*a;p.x=u*Math.cos(y),p.y=u*Math.sin(y),l.push(p.x,p.y,p.z),c.push(0,0,1),f.x=(p.x/t+1)/2,f.y=(p.y/t+1)/2,h.push(f.x,f.y)}u+=d}for(let g=0;g<i;g++){let m=g*(n+1);for(let y=0;y<n;y++){let v=y+m,x=v,S=v+n+1,M=v+n+2,_=v+1;o.push(x,S,_),o.push(S,M,_)}}this.setIndex(o),this.setAttribute("position",new we(l,3)),this.setAttribute("normal",new we(c,3)),this.setAttribute("uv",new we(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},xl=class s extends Je{constructor(e=new Jr([new Z(0,.5),new Z(-.5,-.5),new Z(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],i=[],r=[],a=[],o=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(o,l,h),o+=l,l=0;function c(h){let u=i.length/3,d=h.extractPoints(t),p=d.shape,f=d.holes;Gn.isClockWise(p)===!1&&(p=p.reverse());for(let m=0,y=f.length;m<y;m++){let v=f[m];Gn.isClockWise(v)===!0&&(f[m]=v.reverse())}let g=Gn.triangulateShape(p,f);for(let m=0,y=f.length;m<y;m++){let v=f[m];p=p.concat(v)}for(let m=0,y=p.length;m<y;m++){let v=p[m];i.push(v.x,v.y,0),r.push(0,0,1),a.push(v.x,v.y)}for(let m=0,y=g.length;m<y;m++){let v=g[m],x=v[0]+u,S=v[1]+u,M=v[2]+u;n.push(x,S,M),l+=3}}this.setIndex(n),this.setAttribute("position",new we(i,3)),this.setAttribute("normal",new we(r,3)),this.setAttribute("uv",new we(a,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return(function(t,n){if(n.shapes=[],Array.isArray(t))for(let i=0,r=t.length;i<r;i++){let a=t[i];n.shapes.push(a.uuid)}else n.shapes.push(t.uuid);return n})(this.parameters.shapes,e)}static fromJSON(e,t){let n=[];for(let i=0,r=e.shapes.length;i<r;i++){let a=t[e.shapes[i]];n.push(a)}return new s(n,e.curveSegments)}},ns=class s extends Je{constructor(e=1,t=32,n=16,i=0,r=2*Math.PI,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],u=new E,d=new E,p=[],f=[],g=[],m=[];for(let y=0;y<=n;y++){let v=[],x=y/n,S=0;y===0&&a===0?S=.5/t:y===n&&l===Math.PI&&(S=-.5/t);for(let M=0;M<=t;M++){let _=M/t;u.x=-e*Math.cos(i+_*r)*Math.sin(a+x*o),u.y=e*Math.cos(a+x*o),u.z=e*Math.sin(i+_*r)*Math.sin(a+x*o),f.push(u.x,u.y,u.z),d.copy(u).normalize(),g.push(d.x,d.y,d.z),m.push(_+S,1-x),v.push(c++)}h.push(v)}for(let y=0;y<n;y++)for(let v=0;v<t;v++){let x=h[y][v+1],S=h[y][v],M=h[y+1][v],_=h[y+1][v+1];(y!==0||a>0)&&p.push(x,S,_),(y!==n-1||l<Math.PI)&&p.push(S,M,_)}this.setIndex(p),this.setAttribute("position",new we(f,3)),this.setAttribute("normal",new we(g,3)),this.setAttribute("uv",new we(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}},Sl=class s extends mi{constructor(e=1,t=0){super([1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],[2,1,0,0,3,2,1,3,0,2,3,1],e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new s(e.radius,e.detail)}},_l=class s extends Je{constructor(e=1,t=.4,n=12,i=48,r=2*Math.PI){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);let a=[],o=[],l=[],c=[],h=new E,u=new E,d=new E;for(let p=0;p<=n;p++)for(let f=0;f<=i;f++){let g=f/i*r,m=p/n*Math.PI*2;u.x=(e+t*Math.cos(m))*Math.cos(g),u.y=(e+t*Math.cos(m))*Math.sin(g),u.z=t*Math.sin(m),o.push(u.x,u.y,u.z),h.x=e*Math.cos(g),h.y=e*Math.sin(g),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(f/i),c.push(p/n)}for(let p=1;p<=n;p++)for(let f=1;f<=i;f++){let g=(i+1)*p+f-1,m=(i+1)*(p-1)+f-1,y=(i+1)*(p-1)+f,v=(i+1)*p+f;a.push(g,m,v),a.push(m,y,v)}this.setIndex(a),this.setAttribute("position",new we(o,3)),this.setAttribute("normal",new we(l,3)),this.setAttribute("uv",new we(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}},Al=class s extends Je{constructor(e=1,t=.4,n=64,i=8,r=2,a=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:n,radialSegments:i,p:r,q:a},n=Math.floor(n),i=Math.floor(i);let o=[],l=[],c=[],h=[],u=new E,d=new E,p=new E,f=new E,g=new E,m=new E,y=new E;for(let x=0;x<=n;++x){let S=x/n*r*Math.PI*2;v(S,r,a,e,p),v(S+.01,r,a,e,f),m.subVectors(f,p),y.addVectors(f,p),g.crossVectors(m,y),y.crossVectors(g,m),g.normalize(),y.normalize();for(let M=0;M<=i;++M){let _=M/i*Math.PI*2,A=-t*Math.cos(_),T=t*Math.sin(_);u.x=p.x+(A*y.x+T*g.x),u.y=p.y+(A*y.y+T*g.y),u.z=p.z+(A*y.z+T*g.z),l.push(u.x,u.y,u.z),d.subVectors(u,p).normalize(),c.push(d.x,d.y,d.z),h.push(x/n),h.push(M/i)}}for(let x=1;x<=n;x++)for(let S=1;S<=i;S++){let M=(i+1)*(x-1)+(S-1),_=(i+1)*x+(S-1),A=(i+1)*x+S,T=(i+1)*(x-1)+S;o.push(M,_,T),o.push(_,A,T)}function v(x,S,M,_,A){let T=Math.cos(x),I=Math.sin(x),P=M/S*x,D=Math.cos(P);A.x=_*(2+D)*.5*T,A.y=_*(2+D)*I*.5,A.z=_*Math.sin(P)*.5}this.setIndex(o),this.setAttribute("position",new we(l,3)),this.setAttribute("normal",new we(c,3)),this.setAttribute("uv",new we(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}},Ml=class s extends Je{constructor(e=new Yr(new E(-1,-1,0),new E(-1,1,0),new E(1,1,0)),t=64,n=1,i=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:i,closed:r};let a=e.computeFrenetFrames(t,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new E,l=new E,c=new Z,h=new E,u=[],d=[],p=[],f=[];function g(m){h=e.getPointAt(m/t,h);let y=a.normals[m],v=a.binormals[m];for(let x=0;x<=i;x++){let S=x/i*Math.PI*2,M=Math.sin(S),_=-Math.cos(S);l.x=_*y.x+M*v.x,l.y=_*y.y+M*v.y,l.z=_*y.z+M*v.z,l.normalize(),d.push(l.x,l.y,l.z),o.x=h.x+n*l.x,o.y=h.y+n*l.y,o.z=h.z+n*l.z,u.push(o.x,o.y,o.z)}}(function(){for(let m=0;m<t;m++)g(m);g(r===!1?t:0),(function(){for(let m=0;m<=t;m++)for(let y=0;y<=i;y++)c.x=m/t,c.y=y/i,p.push(c.x,c.y)})(),(function(){for(let m=1;m<=t;m++)for(let y=1;y<=i;y++){let v=(i+1)*(m-1)+(y-1),x=(i+1)*m+(y-1),S=(i+1)*m+y,M=(i+1)*(m-1)+y;f.push(v,x,M),f.push(x,S,M)}})()})(),this.setIndex(f),this.setAttribute("position",new we(u,3)),this.setAttribute("normal",new we(d,3)),this.setAttribute("uv",new we(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new s(new Kr[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}},El=class extends Je{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){let t=[],n=new Set,i=new E,r=new E;if(e.index!==null){let a=e.attributes.position,o=e.index,l=e.groups;l.length===0&&(l=[{start:0,count:o.count,materialIndex:0}]);for(let c=0,h=l.length;c<h;++c){let u=l[c],d=u.start;for(let p=d,f=d+u.count;p<f;p+=3)for(let g=0;g<3;g++){let m=o.getX(p+g),y=o.getX(p+(g+1)%3);i.fromBufferAttribute(a,m),r.fromBufferAttribute(a,y),Kh(i,r,n)===!0&&(t.push(i.x,i.y,i.z),t.push(r.x,r.y,r.z))}}}else{let a=e.attributes.position;for(let o=0,l=a.count/3;o<l;o++)for(let c=0;c<3;c++){let h=3*o+c,u=3*o+(c+1)%3;i.fromBufferAttribute(a,h),r.fromBufferAttribute(a,u),Kh(i,r,n)===!0&&(t.push(i.x,i.y,i.z),t.push(r.x,r.y,r.z))}}this.setAttribute("position",new we(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}};function Kh(s,e,t){let n=`${s.x},${s.y},${s.z}-${e.x},${e.y},${e.z}`,i=`${e.x},${e.y},${e.z}-${s.x},${s.y},${s.z}`;return t.has(n)!==!0&&t.has(i)!==!0&&(t.add(n),t.add(i),!0)}var O0=Object.freeze({__proto__:null,BoxGeometry:Wn,CapsuleGeometry:cl,CircleGeometry:hl,ConeGeometry:Ns,CylinderGeometry:fi,DodecahedronGeometry:ul,EdgesGeometry:dl,ExtrudeGeometry:ml,IcosahedronGeometry:gl,LatheGeometry:Zr,OctahedronGeometry:yl,PlaneGeometry:jn,PolyhedronGeometry:mi,RingGeometry:vl,ShapeGeometry:xl,SphereGeometry:ns,TetrahedronGeometry:Sl,TorusGeometry:_l,TorusKnotGeometry:Al,TubeGeometry:Ml,WireframeGeometry:El});function Cr(s,e,t){return!s||!t&&s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function Xf(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}var is=class{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,i=t[n],r=t[n-1];t:{e:{let a;n:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=i,i=t[++n],e<i)break e}a=t.length;break n}if(e>=r)break t;{let o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=t[--n-1],e>=r)break e}a=n,n=0}}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let a=0;a!==i;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Tl=class extends is{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:qc,endingEnd:qc}}intervalChanged_(e,t,n){let i=this.parameterPositions,r=e-2,a=e+1,o=i[r],l=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case Yc:r=e,o=2*t-n;break;case Qc:r=i.length-2,o=t+i[r]-i[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Yc:a=e,l=2*n-t;break;case Qc:a=1,l=n+i[1]-i[0];break;default:a=e-1,l=t}let c=.5*(n-t),h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,p=this._weightNext,f=(n-t)/(i-t),g=f*f,m=g*f,y=-d*m+2*d*g-d*f,v=(1+d)*m+(-1.5-2*d)*g+(-.5+d)*f+1,x=(-1-p)*m+(1.5+p)*g+.5*f,S=p*m-p*g;for(let M=0;M!==o;++M)r[M]=y*a[h+M]+v*a[c+M]+x*a[l+M]+S*a[u+M];return r}},bl=class extends is{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(n-t)/(i-t),u=1-h;for(let d=0;d!==o;++d)r[d]=a[c+d]*u+a[l+d]*h;return r}},Cl=class extends is{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}},ln=class{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Cr(t,this.TimeBufferType),this.values=Cr(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Cr(e.times,Array),values:Cr(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Cl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new bl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Tl(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Br:t=this.InterpolantFactoryMethodDiscrete;break;case No:t=this.InterpolantFactoryMethodLinear;break;case Ra:t=this.InterpolantFactoryMethodSmooth}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0){if(e===this.DefaultInterpolation)throw new Error(n);this.setInterpolation(this.DefaultInterpolation)}return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Br;case this.InterpolantFactoryMethodLinear:return No;case this.InterpolantFactoryMethodSmooth:return Ra}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){let n=this.times,i=n.length,r=0,a=i-1;for(;r!==i&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==i){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!=0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(i!==void 0&&Xf(i))for(let o=0,l=i.length;o!==l;++o){let c=i[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Ra,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o];if(c!==e[o+1]&&(o!==1||c!==e[0]))if(i)l=!0;else{let h=o*n,u=h-n,d=h+n;for(let p=0;p!==n;++p){let f=t[h+p];if(f!==t[u+p]||f!==t[d+p]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let h=o*n,u=a*n;for(let d=0;d!==n;++d)t[u+d]=t[h+d]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=new this.constructor(this.name,e,t);return n.createInterpolant=this.createInterpolant,n}};ln.prototype.TimeBufferType=Float32Array,ln.prototype.ValueBufferType=Float32Array,ln.prototype.DefaultInterpolation=No;var ci=class extends ln{constructor(e,t,n){super(e,t,n)}};ci.prototype.ValueTypeName="bool",ci.prototype.ValueBufferType=Array,ci.prototype.DefaultInterpolation=Br,ci.prototype.InterpolantFactoryMethodLinear=void 0,ci.prototype.InterpolantFactoryMethodSmooth=void 0;var wl=class extends ln{};wl.prototype.ValueTypeName="color";var Rl=class extends ln{};Rl.prototype.ValueTypeName="number";var Il=class extends is{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(i-t),c=e*o;for(let h=c+o;c!==h;c+=4)Ve.slerpFlat(r,0,a,c-o,a,c,l);return r}},$r=class extends ln{InterpolantFactoryMethodLinear(e){return new Il(this.times,this.values,this.getValueSize(),e)}};$r.prototype.ValueTypeName="quaternion",$r.prototype.InterpolantFactoryMethodSmooth=void 0;var hi=class extends ln{constructor(e,t,n){super(e,t,n)}};hi.prototype.ValueTypeName="string",hi.prototype.ValueBufferType=Array,hi.prototype.DefaultInterpolation=Br,hi.prototype.InterpolantFactoryMethodLinear=void 0,hi.prototype.InterpolantFactoryMethodSmooth=void 0;var Pl=class extends ln{};Pl.prototype.ValueTypeName="vector";var Dl=class{constructor(e,t,n){let i=this,r,a=!1,o=0,l=0,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){l++,a===!1&&i.onStart!==void 0&&i.onStart(h,o,l),a=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,l),o===l&&(a=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return r?r(h):h},this.setURLModifier=function(h){return r=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let p=c[u],f=c[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return f}return null}}},qf=new Dl,Bl=class{constructor(e){this.manager=e!==void 0?e:qf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise((function(i,r){n.load(e,i,t,r)}))}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};Bl.DEFAULT_MATERIAL_NAME="__DEFAULT";var N0=new ge,H0=new E,z0=new E;var k0=new ge,V0=new E,G0=new E;var ea=class extends Je{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){let e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}};var W0=new ge,j0=new ge,X0=new ge;var q0=new E,Y0=new Ve,Q0=new E,K0=new E;var Z0=new E,J0=new Ve,$0=new E,ey=new E;var Vl="\\[\\]\\.:\\/",Yf=new RegExp("["+Vl+"]","g"),ao="[^"+Vl+"]",Qf="[^"+Vl.replace("\\.","")+"]",Kf=new RegExp("^"+/((?:WC+[\/:])*)/.source.replace("WC",ao)+/(WCOD+)?/.source.replace("WCOD",Qf)+/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ao)+/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ao)+"$"),Zf=["material","materials","bones","map"],ot=class s{constructor(e,t,n){this.path=t,this.parsedPath=n||s.parseTrackName(t),this.node=s.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new s.Composite(e,t,n):new s(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Yf,"")}static parseTrackName(e){let t=Kf.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);Zf.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,i=t.propertyName,r=t.propertyIndex;if(e||(e=s.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e)return void console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material)return void console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);if(!e.material.materials)return void console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);e=e.material.materials;break;case"bones":if(!e.skeleton)return void console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material)return void console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);if(!e.material.map)return void console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);e=e.material.map;break;default:if(e[n]===void 0)return void console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);e=e[n]}if(c!==void 0){if(e[c]===void 0)return void console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);e=e[c]}}let a=e[i];if(a===void 0){let c=t.nodeName;return void console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e)}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry)return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);if(!e.geometry.morphAttributes)return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ot.Composite=class{constructor(s,e,t){let n=t||ot.parseTrackName(e);this._targetGroup=s,this._bindings=s.subscribe_(e,n)}getValue(s,e){this.bind();let t=this._targetGroup.nCachedObjects_,n=this._bindings[t];n!==void 0&&n.getValue(s,e)}setValue(s,e){let t=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=t.length;n!==i;++n)t[n].setValue(s,e)}bind(){let s=this._bindings;for(let e=this._targetGroup.nCachedObjects_,t=s.length;e!==t;++e)s[e].bind()}unbind(){let s=this._bindings;for(let e=this._targetGroup.nCachedObjects_,t=s.length;e!==t;++e)s[e].unbind()}},ot.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},ot.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},ot.prototype.GetterByBindingType=[ot.prototype._getValue_direct,ot.prototype._getValue_array,ot.prototype._getValue_arrayElement,ot.prototype._getValue_toArray],ot.prototype.SetterByBindingTypeAndVersioning=[[ot.prototype._setValue_direct,ot.prototype._setValue_direct_setNeedsUpdate,ot.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ot.prototype._setValue_array,ot.prototype._setValue_array_setNeedsUpdate,ot.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ot.prototype._setValue_arrayElement,ot.prototype._setValue_arrayElement_setNeedsUpdate,ot.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ot.prototype._setValue_fromArray,ot.prototype._setValue_fromArray_setNeedsUpdate,ot.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var ty=new Float32Array(1);var ny=new ge;var Xn=class{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(yt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var iy=new Z;var sy=new E,ry=new E;var ay=new E;var oy=new E,ly=new ge,cy=new ge;var hy=new E,uy=new Pe,dy=new Pe;var py=new E,fy=new E,my=new E;var gy=new E,yy=new Bs;var vy=new Dt;var xy=new E;var ta=class extends cn{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"170"}})),typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="170");var Su={type:"change"},Wl={type:"start"},Au={type:"end"},la=new gn,_u=new jt,Jf=Math.cos(70*rs.DEG2RAD),Mt=new E,Vt=2*Math.PI,Ke={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Gl=1e-6,ca=class extends ta{constructor(e,t=null){super(e,t),this.state=Ke.NONE,this.enabled=!0,this.target=new E,this.cursor=new E,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:At.ROTATE,MIDDLE:At.DOLLY,RIGHT:At.PAN},this.touches={ONE:bt.ROTATE,TWO:bt.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new E,this._lastQuaternion=new Ve,this._lastTargetPosition=new E,this._quat=new Ve().setFromUnitVectors(e.up,new E(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Xn,this._sphericalDelta=new Xn,this._scale=1,this._panOffset=new E,this._rotateStart=new Z,this._rotateEnd=new Z,this._rotateDelta=new Z,this._panStart=new Z,this._panEnd=new Z,this._panDelta=new Z,this._dollyStart=new Z,this._dollyEnd=new Z,this._dollyDelta=new Z,this._dollyDirection=new E,this._mouse=new Z,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=em.bind(this),this._onPointerDown=$f.bind(this),this._onPointerUp=tm.bind(this),this._onContextMenu=lm.bind(this),this._onMouseWheel=sm.bind(this),this._onKeyDown=rm.bind(this),this._onTouchStart=am.bind(this),this._onTouchMove=om.bind(this),this._onMouseDown=nm.bind(this),this._onMouseMove=im.bind(this),this._interceptControlDown=cm.bind(this),this._interceptControlUp=hm.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Su),this.update(),this.state=Ke.NONE}update(e=null){let t=this.object.position;Mt.copy(t).sub(this.target),Mt.applyQuaternion(this._quat),this._spherical.setFromVector3(Mt),this.autoRotate&&this.state===Ke.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,i=this.maxAzimuthAngle;isFinite(n)&&isFinite(i)&&(n<-Math.PI?n+=Vt:n>Math.PI&&(n-=Vt),i<-Math.PI?i+=Vt:i>Math.PI&&(i-=Vt),n<=i?this._spherical.theta=Math.max(n,Math.min(i,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+i)/2?Math.max(n,this._spherical.theta):Math.min(i,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(Mt.setFromSpherical(this._spherical),Mt.applyQuaternion(this._quatInverse),t.copy(this.target).add(Mt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){let o=Mt.length();a=this._clampDistance(o*this._scale);let l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){let o=new E(this._mouse.x,this._mouse.y,0);o.unproject(this.object);let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;let c=new E(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=Mt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(la.origin.copy(this.object.position),la.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(la.direction))<Jf?this.object.lookAt(this.target):(_u.setFromNormalAndCoplanarPoint(this.object.up,this.target),la.intersectPlane(_u,this.target))))}else if(this.object.isOrthographicCamera){let a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Gl||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Gl||this._lastTargetPosition.distanceToSquared(this.target)>Gl?(this.dispatchEvent(Su),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Vt/60*this.autoRotateSpeed*e:Vt/60/60*this.autoRotateSpeed}_getZoomScale(e){let t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Mt.setFromMatrixColumn(t,0),Mt.multiplyScalar(-e),this._panOffset.add(Mt)}_panUp(e,t){this.screenSpacePanning===!0?Mt.setFromMatrixColumn(t,1):(Mt.setFromMatrixColumn(t,0),Mt.crossVectors(this.object.up,Mt)),Mt.multiplyScalar(e),this._panOffset.add(Mt)}_pan(e,t){let n=this.domElement;if(this.object.isPerspectiveCamera){let i=this.object.position;Mt.copy(i).sub(this.target);let r=Mt.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/n.clientHeight,this.object.matrix),this._panUp(2*t*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),i=e-n.left,r=t-n.top,a=n.width,o=n.height;this._mouse.x=i/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(Vt*this._rotateDelta.x/t.clientHeight),this._rotateUp(Vt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(Vt*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(-Vt*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(Vt*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(-Vt*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._rotateStart.set(n,i)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._panStart.set(n,i)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,i=e.pageY-t.y,r=Math.sqrt(n*n+i*i);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateEnd.set(i,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(Vt*this._rotateDelta.x/t.clientHeight),this._rotateUp(Vt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._panEnd.set(n,i)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,i=e.pageY-t.y,r=Math.sqrt(n*n+i*i);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Z,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function $f(s){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(s.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(s)&&(this._addPointer(s),s.pointerType==="touch"?this._onTouchStart(s):this._onMouseDown(s)))}function em(s){this.enabled!==!1&&(s.pointerType==="touch"?this._onTouchMove(s):this._onMouseMove(s))}function tm(s){switch(this._removePointer(s),this._pointers.length){case 0:this.domElement.releasePointerCapture(s.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Au),this.state=Ke.NONE;break;case 1:let e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function nm(s){let e;switch(s.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case At.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(s),this.state=Ke.DOLLY;break;case At.ROTATE:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=Ke.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=Ke.ROTATE}break;case At.PAN:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=Ke.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=Ke.PAN}break;default:this.state=Ke.NONE}this.state!==Ke.NONE&&this.dispatchEvent(Wl)}function im(s){switch(this.state){case Ke.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(s);break;case Ke.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(s);break;case Ke.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(s);break}}function sm(s){this.enabled===!1||this.enableZoom===!1||this.state!==Ke.NONE||(s.preventDefault(),this.dispatchEvent(Wl),this._handleMouseWheel(this._customWheelEvent(s)),this.dispatchEvent(Au))}function rm(s){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(s)}function am(s){switch(this._trackPointer(s),this._pointers.length){case 1:switch(this.touches.ONE){case bt.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(s),this.state=Ke.TOUCH_ROTATE;break;case bt.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(s),this.state=Ke.TOUCH_PAN;break;default:this.state=Ke.NONE}break;case 2:switch(this.touches.TWO){case bt.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(s),this.state=Ke.TOUCH_DOLLY_PAN;break;case bt.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(s),this.state=Ke.TOUCH_DOLLY_ROTATE;break;default:this.state=Ke.NONE}break;default:this.state=Ke.NONE}this.state!==Ke.NONE&&this.dispatchEvent(Wl)}function om(s){switch(this._trackPointer(s),this.state){case Ke.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(s),this.update();break;case Ke.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(s),this.update();break;case Ke.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(s),this.update();break;case Ke.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(s),this.update();break;default:this.state=Ke.NONE}}function lm(s){this.enabled!==!1&&s.preventDefault()}function cm(s){s.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function hm(s){s.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var Xs=class s{static idGen=0;constructor(e,t){let n,i;this.promise=new Promise((c,h)=>{n=c,i=h});let r=n.bind(this),a=i.bind(this),o=(...c)=>{r(...c)},l=c=>{a(c)};e(o.bind(this),l.bind(this)),this.abortHandler=t,this.id=s.idGen++}then(e){return new s((t,n)=>{this.promise=this.promise.then((...i)=>{let r=e(...i);r instanceof Promise||r instanceof s?r.then((...a)=>{t(...a)}):t(r)}).catch(i=>{n(i)})},this.abortHandler)}catch(e){return new s(t=>{this.promise=this.promise.then((...n)=>{t(...n)}).catch(e)},this.abortHandler)}abort(e){this.abortHandler&&this.abortHandler(e)}},ga=class extends Error{constructor(e){super(e)}},Ey=(function(){let s=new Float32Array(1),e=new Int32Array(s.buffer);return function(t){s[0]=t;let n=e[0],i=n>>16&32768,r=n>>12&2047,a=n>>23&255;return a<103?i:a>142?(i|=31744,i|=(a==255?0:1)&&n&8388607,i):a<113?(r|=2048,i|=(r>>114-a)+(r>>113-a&1),i):(i|=a-112<<10|r>>1,i+=r&1,i)}})(),jl=(function(){let s=new Float32Array(1),e=new Int32Array(s.buffer);return function(t){return s[0]=t,e[0]}})();var um=function(s,e){return s[e]+(s[e+1]<<8)+(s[e+2]<<16)+(s[e+3]<<24)},xa=function(s,e,t=!0,n){let i=new AbortController,r=i.signal,a=!1,o=h=>{i.abort(h),a=!0},l=!1,c=(h,u,d,p)=>{e&&!l&&(e(h,u,d,p),h===100&&(l=!0))};return new Xs((h,u)=>{let d={signal:r};n&&(d.headers=n),fetch(s,d).then(async p=>{if(!p.ok){let x=await p.text();u(new Error(`Fetch failed: ${p.status} ${p.statusText} ${x}`));return}let f=p.body.getReader(),g=0,m=p.headers.get("Content-Length"),y=m?parseInt(m):void 0,v=[];for(;!a;)try{let{value:x,done:S}=await f.read();if(S){if(c(100,"100%",x,y),t){let A=new Blob(v).arrayBuffer();h(A)}else h();break}g+=x.length;let M,_;y!==void 0&&(M=g/y*100,_=`${M.toFixed(2)}%`),t&&v.push(x),c(M,_,x,y)}catch(x){u(x);return}}).catch(p=>{u(new ga(p))})},o)},ct=function(s,e,t){return Math.max(Math.min(s,t),e)},ls=function(){return performance.now()/1e3},us=s=>{if(s.geometry&&(s.geometry.dispose(),s.geometry=null),s.material&&(s.material.dispose(),s.material=null),s.children)for(let e of s.children)us(e)},Yt=(s,e)=>new Promise(t=>{window.setTimeout(()=>{t(s?s():void 0)},e?1:50)}),ps=(s=0)=>{let e=0;if(s===1)e=9;else if(s===2)e=24;else if(s===3)e=45;else if(s>3)throw new Error("getSphericalHarmonicsComponentCountForDegree() -> Invalid spherical harmonics degree");return e},Tc=()=>{let s,e;return{promise:new Promise((n,i)=>{s=n,e=i}),resolve:s,reject:e}},Xl=s=>{let e,t;return s||(s=()=>{}),{promise:new Xs((i,r)=>{e=i,t=r},s),resolve:e,reject:t}},ec=class{constructor(e,t,n){this.major=e,this.minor=t,this.patch=n}toString(){return`${this.major}_${this.minor}_${this.patch}`}};function bc(){let s=navigator.userAgent;return s.indexOf("iPhone")>0||s.indexOf("iPad")>0}function Ku(){if(bc()){let s=navigator.userAgent.match(/OS (\d+)_(\d+)_?(\d+)?/);return new ec(parseInt(s[1]||0,10),parseInt(s[2]||0,10),parseInt(s[3]||0,10))}else return null}var dm=14,ue=class s{static OFFSET={X:0,Y:1,Z:2,SCALE0:3,SCALE1:4,SCALE2:5,ROTATION0:6,ROTATION1:7,ROTATION2:8,ROTATION3:9,FDC0:10,FDC1:11,FDC2:12,OPACITY:13,FRC0:14,FRC1:15,FRC2:16,FRC3:17,FRC4:18,FRC5:19,FRC6:20,FRC7:21,FRC8:22,FRC9:23,FRC10:24,FRC11:25,FRC12:26,FRC13:27,FRC14:28,FRC15:29,FRC16:30,FRC17:31,FRC18:32,FRC19:33,FRC20:34,FRC21:35,FRC22:36,FRC23:37};constructor(e=0){this.sphericalHarmonicsDegree=e,this.sphericalHarmonicsCount=ps(this.sphericalHarmonicsDegree),this.componentCount=this.sphericalHarmonicsCount+dm,this.defaultSphericalHarmonics=new Array(this.sphericalHarmonicsCount).fill(0),this.splats=[],this.splatCount=0}static createSplat(e=0){let t=[0,0,0,1,1,1,1,0,0,0,0,0,0,0],n=ps(e);for(let i=0;i<n;i++)t.push(0);return t}addSplat(e){this.splats.push(e),this.splatCount++}getSplat(e){return this.splats[e]}addDefaultSplat(){let e=s.createSplat(this.sphericalHarmonicsDegree);return this.addSplat(e),e}addSplatFromComonents(e,t,n,i,r,a,o,l,c,h,u,d,p,f,...g){let m=[e,t,n,i,r,a,o,l,c,h,u,d,p,f,...this.defaultSphericalHarmonics];for(let y=0;y<g.length&&y<this.sphericalHarmonicsCount;y++)m[y]=g[y];return this.addSplat(m),m}addSplatFromArray(e,t){let n=e.splats[t],i=s.createSplat(this.sphericalHarmonicsDegree);for(let r=0;r<this.componentCount&&r<n.length;r++)i[r]=n[r];this.addSplat(i)}},je=class{static DefaultSplatSortDistanceMapPrecision=16;static MemoryPageSize=65536;static BytesPerFloat=4;static BytesPerInt=4;static MaxScenes=32;static ProgressiveLoadSectionSize=262144;static ProgressiveLoadSectionDelayDuration=15;static SphericalHarmonics8BitCompressionRange=3},pm=je.SphericalHarmonics8BitCompressionRange,Yn=pm/2,Et=as.toHalfFloat.bind(as),Cc=as.fromHalfFloat.bind(as),lt=(s,e,t=!1,n,i)=>{if(e===0)return s;if(e===1||e===2&&!t)return as.fromHalfFloat(s);if(e===2)return wc(s,n,i)},Ws=(s,e,t)=>{s=ct(s,e,t);let n=t-e;return ct(Math.floor((s-e)/n*255),0,255)},wc=(s,e,t)=>{let n=t-e;return s/255*n+e},Zu=(s,e,t)=>Ws(Cc(s,e,t)),fm=(s,e,t)=>Et(wc(s,e,t)),Xe=(s,e,t,n=!1)=>t===0?s.getFloat32(e*4,!0):t===1||t===2&&!n?s.getUint16(e*2,!0):s.getUint8(e,!0),mm=(function(){let s=e=>e;return function(e,t,n,i=!1){if(t===n)return e;let r=s;return t===2&&i?n===1?r=fm:n==0&&(r=wc):t===2||t===1?n===0?r=Cc:n==2&&(i?r=Zu:r=s):t===0&&(n===1?r=Et:n==2&&(i?r=Ws:r=Et)),r(e)}})(),cs=(s,e,t,n,i=0)=>{let r=new Uint8Array(s,e),a=new Uint8Array(t,n);for(let o=0;o<i;o++)a[o]=r[o]},ye=class s{static CurrentMajorVersion=0;static CurrentMinorVersion=1;static CenterComponentCount=3;static ScaleComponentCount=3;static RotationComponentCount=4;static ColorComponentCount=4;static CovarianceComponentCount=6;static SplatScaleOffsetFloat=3;static SplatRotationOffsetFloat=6;static CompressionLevels={0:{BytesPerCenter:12,BytesPerScale:12,BytesPerRotation:16,BytesPerColor:4,ScaleOffsetBytes:12,RotationffsetBytes:24,ColorOffsetBytes:40,SphericalHarmonicsOffsetBytes:44,ScaleRange:1,BytesPerSphericalHarmonicsComponent:4,SphericalHarmonicsOffsetFloat:11,SphericalHarmonicsDegrees:{0:{BytesPerSplat:44},1:{BytesPerSplat:80},2:{BytesPerSplat:140}}},1:{BytesPerCenter:6,BytesPerScale:6,BytesPerRotation:8,BytesPerColor:4,ScaleOffsetBytes:6,RotationffsetBytes:12,ColorOffsetBytes:20,SphericalHarmonicsOffsetBytes:24,ScaleRange:32767,BytesPerSphericalHarmonicsComponent:2,SphericalHarmonicsOffsetFloat:12,SphericalHarmonicsDegrees:{0:{BytesPerSplat:24},1:{BytesPerSplat:42},2:{BytesPerSplat:72}}},2:{BytesPerCenter:6,BytesPerScale:6,BytesPerRotation:8,BytesPerColor:4,ScaleOffsetBytes:6,RotationffsetBytes:12,ColorOffsetBytes:20,SphericalHarmonicsOffsetBytes:24,ScaleRange:32767,BytesPerSphericalHarmonicsComponent:1,SphericalHarmonicsOffsetFloat:12,SphericalHarmonicsDegrees:{0:{BytesPerSplat:24},1:{BytesPerSplat:33},2:{BytesPerSplat:48}}}};static CovarianceSizeFloats=6;static HeaderSizeBytes=4096;static SectionHeaderSizeBytes=1024;static BucketStorageSizeBytes=12;static BucketStorageSizeFloats=3;static BucketBlockSize=5;static BucketSize=256;constructor(e,t=!0){this.constructFromBuffer(e,t)}getSplatCount(){return this.splatCount}getMaxSplatCount(){return this.maxSplatCount}getMinSphericalHarmonicsDegree(){let e=0;for(let t=0;t<this.sections.length;t++){let n=this.sections[t];(t===0||n.sphericalHarmonicsDegree<e)&&(e=n.sphericalHarmonicsDegree)}return e}getBucketIndex(e,t){let n,i=e.fullBucketCount*e.bucketSize;if(t<i)n=Math.floor(t/e.bucketSize);else{let r=i;n=e.fullBucketCount;let a=0;for(;r<e.splatCount;){let o=e.partiallyFilledBucketLengths[a];if(t>=r&&t<r+o)break;r+=o,n++,a++}}return n}getSplatCenter(e,t,n){let i=this.globalSplatIndexToSectionMap[e],r=this.sections[i],a=e-r.splatCountOffset,o=r.bytesPerSplat*a,l=new DataView(this.bufferData,r.dataBase+o),c=Xe(l,0,this.compressionLevel),h=Xe(l,1,this.compressionLevel),u=Xe(l,2,this.compressionLevel);if(this.compressionLevel>=1){let p=this.getBucketIndex(r,a)*s.BucketStorageSizeFloats,f=r.compressionScaleFactor,g=r.compressionScaleRange;t.x=(c-g)*f+r.bucketArray[p],t.y=(h-g)*f+r.bucketArray[p+1],t.z=(u-g)*f+r.bucketArray[p+2]}else t.x=c,t.y=h,t.z=u;n&&t.applyMatrix4(n)}getSplatScaleAndRotation=(function(){let e=new ge,t=new ge,n=new ge,i=new E,r=new E,a=new Ve;return function(o,l,c,h,u){let d=this.globalSplatIndexToSectionMap[o],p=this.sections[d],f=o-p.splatCountOffset,g=p.bytesPerSplat*f+s.CompressionLevels[this.compressionLevel].ScaleOffsetBytes,m=new DataView(this.bufferData,p.dataBase+g);r.set(lt(Xe(m,0,this.compressionLevel),this.compressionLevel),lt(Xe(m,1,this.compressionLevel),this.compressionLevel),lt(Xe(m,2,this.compressionLevel),this.compressionLevel)),u&&(u.x!==void 0&&(r.x=u.x),u.y!==void 0&&(r.y=u.y),u.z!==void 0&&(r.z=u.z)),a.set(lt(Xe(m,4,this.compressionLevel),this.compressionLevel),lt(Xe(m,5,this.compressionLevel),this.compressionLevel),lt(Xe(m,6,this.compressionLevel),this.compressionLevel),lt(Xe(m,3,this.compressionLevel),this.compressionLevel)),h?(e.makeScale(r.x,r.y,r.z),t.makeRotationFromQuaternion(a),n.copy(e).multiply(t).multiply(h),n.decompose(i,c,l)):(l.copy(r),c.copy(a))}})();getSplatColor(e,t){let n=this.globalSplatIndexToSectionMap[e],i=this.sections[n],r=e-i.splatCountOffset,a=i.bytesPerSplat*r+s.CompressionLevels[this.compressionLevel].ColorOffsetBytes,o=new Uint8Array(this.bufferData,i.dataBase+a,4);t.set(o[0],o[1],o[2],o[3])}fillSplatCenterArray(e,t,n,i,r){let a=this.splatCount;n=n||0,i=i||a-1,r===void 0&&(r=n);let o=new E;for(let l=n;l<=i;l++){let c=this.globalSplatIndexToSectionMap[l],h=this.sections[c],u=l-h.splatCountOffset,d=(l-n+r)*s.CenterComponentCount,p=h.bytesPerSplat*u,f=new DataView(this.bufferData,h.dataBase+p),g=Xe(f,0,this.compressionLevel),m=Xe(f,1,this.compressionLevel),y=Xe(f,2,this.compressionLevel);if(this.compressionLevel>=1){let x=this.getBucketIndex(h,u)*s.BucketStorageSizeFloats,S=h.compressionScaleFactor,M=h.compressionScaleRange;o.x=(g-M)*S+h.bucketArray[x],o.y=(m-M)*S+h.bucketArray[x+1],o.z=(y-M)*S+h.bucketArray[x+2]}else o.x=g,o.y=m,o.z=y;t&&o.applyMatrix4(t),e[d]=o.x,e[d+1]=o.y,e[d+2]=o.z}}fillSplatScaleRotationArray=(function(){let e=new ge,t=new ge,n=new ge,i=new E,r=new Ve,a=new E,o=l=>{let c=l.w<0?-1:1;l.x*=c,l.y*=c,l.z*=c,l.w*=c};return function(l,c,h,u,d,p,f,g){let m=this.splatCount;u=u||0,d=d||m-1,p===void 0&&(p=u);let y=(v,x)=>(x===void 0&&(x=this.compressionLevel),mm(v,x,f));for(let v=u;v<=d;v++){let x=this.globalSplatIndexToSectionMap[v],S=this.sections[x],M=v-S.splatCountOffset,_=S.bytesPerSplat*M+s.CompressionLevels[this.compressionLevel].ScaleOffsetBytes,A=(v-u+p)*s.ScaleComponentCount,T=(v-u+p)*s.RotationComponentCount,I=new DataView(this.bufferData,S.dataBase+_),P=g&&g.x!==void 0?g.x:Xe(I,0,this.compressionLevel),D=g&&g.y!==void 0?g.y:Xe(I,1,this.compressionLevel),L=g&&g.z!==void 0?g.z:Xe(I,2,this.compressionLevel),z=Xe(I,3,this.compressionLevel),U=Xe(I,4,this.compressionLevel),k=Xe(I,5,this.compressionLevel),W=Xe(I,6,this.compressionLevel);i.set(lt(P,this.compressionLevel),lt(D,this.compressionLevel),lt(L,this.compressionLevel)),r.set(lt(U,this.compressionLevel),lt(k,this.compressionLevel),lt(W,this.compressionLevel),lt(z,this.compressionLevel)).normalize(),h&&(a.set(0,0,0),e.makeScale(i.x,i.y,i.z),t.makeRotationFromQuaternion(r),n.identity().premultiply(e).premultiply(t),n.premultiply(h),n.decompose(a,r,i),r.normalize()),o(r),l&&(l[A]=y(i.x,0),l[A+1]=y(i.y,0),l[A+2]=y(i.z,0)),c&&(c[T]=y(r.x,0),c[T+1]=y(r.y,0),c[T+2]=y(r.z,0),c[T+3]=y(r.w,0))}}})();static computeCovariance=(function(){let e=new ge,t=new Te,n=new Te,i=new Te,r=new Te,a=new Te,o=new Te;return function(l,c,h,u,d=0,p){e.makeScale(l.x,l.y,l.z),t.setFromMatrix4(e),e.makeRotationFromQuaternion(c),n.setFromMatrix4(e),i.copy(n).multiply(t),r.copy(i).transpose().premultiply(i),h&&(a.setFromMatrix4(h),o.copy(a).transpose(),r.multiply(o),r.premultiply(a)),p>=1?(u[d]=Et(r.elements[0]),u[d+1]=Et(r.elements[3]),u[d+2]=Et(r.elements[6]),u[d+3]=Et(r.elements[4]),u[d+4]=Et(r.elements[7]),u[d+5]=Et(r.elements[8])):(u[d]=r.elements[0],u[d+1]=r.elements[3],u[d+2]=r.elements[6],u[d+3]=r.elements[4],u[d+4]=r.elements[7],u[d+5]=r.elements[8])}})();fillSplatCovarianceArray(e,t,n,i,r,a){let o=this.splatCount,l=new E,c=new Ve;n=n||0,i=i||o-1,r===void 0&&(r=n);for(let h=n;h<=i;h++){let u=this.globalSplatIndexToSectionMap[h],d=this.sections[u],p=h-d.splatCountOffset,f=(h-n+r)*s.CovarianceComponentCount,g=d.bytesPerSplat*p+s.CompressionLevels[this.compressionLevel].ScaleOffsetBytes,m=new DataView(this.bufferData,d.dataBase+g);l.set(lt(Xe(m,0,this.compressionLevel),this.compressionLevel),lt(Xe(m,1,this.compressionLevel),this.compressionLevel),lt(Xe(m,2,this.compressionLevel),this.compressionLevel)),c.set(lt(Xe(m,4,this.compressionLevel),this.compressionLevel),lt(Xe(m,5,this.compressionLevel),this.compressionLevel),lt(Xe(m,6,this.compressionLevel),this.compressionLevel),lt(Xe(m,3,this.compressionLevel),this.compressionLevel)),s.computeCovariance(l,c,t,e,f,a)}}fillSplatColorArray(e,t,n,i,r){let a=this.splatCount;n=n||0,i=i||a-1,r===void 0&&(r=n);for(let o=n;o<=i;o++){let l=this.globalSplatIndexToSectionMap[o],c=this.sections[l],h=o-c.splatCountOffset,u=(o-n+r)*s.ColorComponentCount,d=c.bytesPerSplat*h+s.CompressionLevels[this.compressionLevel].ColorOffsetBytes,p=new Uint8Array(this.bufferData,c.dataBase+d),f=p[3];f=f>=t?f:0,e[u]=p[0],e[u+1]=p[1],e[u+2]=p[2],e[u+3]=f}}fillSphericalHarmonicsArray=(function(){let e=[];for(let k=0;k<15;k++)e[k]=new E;let t=new Te,n=new ge,i=new E,r=new E,a=new Ve,o=[],l=[],c=[],h=[],u=[],d=[],p=[],f=[],g=[],m=[],y=[],v=[],x=[],S=[],M=[],_=[],A=[],T=[],I=k=>k,P=(k,W,Q,q)=>{k[0]=W,k[1]=Q,k[2]=q},D=(k,W,Q,q,te)=>{k[0]=Xe(W,q,te,!0),k[1]=Xe(W,q+Q,te,!0),k[2]=Xe(W,q+Q+Q,te,!0)},L=(k,W)=>{W[0]=k[0],W[1]=k[1],W[2]=k[2]},z=(k,W,Q,q)=>{W[Q]=q(k[0]),W[Q+1]=q(k[1]),W[Q+2]=q(k[2])},U=(k,W,Q,q,te)=>(W[0]=lt(k[0],Q,!0,q,te),W[1]=lt(k[1],Q,!0,q,te),W[2]=lt(k[2],Q,!0,q,te),W);return function(k,W,Q,q,te,le,ee){let re=this.splatCount;q=q||0,te=te||re-1,le===void 0&&(le=q),Q&&W>=1&&(n.copy(Q),n.decompose(i,a,r),a.normalize(),n.makeRotationFromQuaternion(a),t.setFromMatrix4(n),P(o,t.elements[4],-t.elements[7],t.elements[1]),P(l,-t.elements[5],t.elements[8],-t.elements[2]),P(c,t.elements[3],-t.elements[6],t.elements[0]));let ce=oe=>Zu(oe,this.minSphericalHarmonicsCoeff,this.maxSphericalHarmonicsCoeff),de=oe=>Ws(oe,this.minSphericalHarmonicsCoeff,this.maxSphericalHarmonicsCoeff);for(let oe=q;oe<=te;oe++){let w=this.globalSplatIndexToSectionMap[oe],C=this.sections[w];W=Math.min(W,C.sphericalHarmonicsDegree);let H=ps(W),N=oe-C.splatCountOffset,B=C.bytesPerSplat*N+s.CompressionLevels[this.compressionLevel].SphericalHarmonicsOffsetBytes,O=new DataView(this.bufferData,C.dataBase+B),b=(oe-q+le)*H,F=Q?0:this.compressionLevel,V=I;F!==ee&&(F===1?ee===0?V=Cc:ee==2&&(V=ce):F===0&&(ee===1?V=Et:ee==2&&(V=de)));let J=this.minSphericalHarmonicsCoeff,G=this.maxSphericalHarmonicsCoeff;W>=1&&(D(g,O,3,0,this.compressionLevel),D(m,O,3,1,this.compressionLevel),D(y,O,3,2,this.compressionLevel),Q?(U(g,g,this.compressionLevel,J,G),U(m,m,this.compressionLevel,J,G),U(y,y,this.compressionLevel,J,G),s.rotateSphericalHarmonics3(g,m,y,o,l,c,S,M,_)):(L(g,S),L(m,M),L(y,_)),z(S,k,b,V),z(M,k,b+3,V),z(_,k,b+6,V),W>=2&&(D(g,O,5,9,this.compressionLevel),D(m,O,5,10,this.compressionLevel),D(y,O,5,11,this.compressionLevel),D(v,O,5,12,this.compressionLevel),D(x,O,5,13,this.compressionLevel),Q?(U(g,g,this.compressionLevel,J,G),U(m,m,this.compressionLevel,J,G),U(y,y,this.compressionLevel,J,G),U(v,v,this.compressionLevel,J,G),U(x,x,this.compressionLevel,J,G),s.rotateSphericalHarmonics5(g,m,y,v,x,o,l,c,h,u,d,p,f,S,M,_,A,T)):(L(g,S),L(m,M),L(y,_),L(v,A),L(x,T)),z(S,k,b+9,V),z(M,k,b+12,V),z(_,k,b+15,V),z(A,k,b+18,V),z(T,k,b+21,V)))}}})();static dot3=(e,t,n,i,r)=>{r[0]=r[1]=r[2]=0;let a=i[0],o=i[1],l=i[2];s.addInto3(e[0]*a,e[1]*a,e[2]*a,r),s.addInto3(t[0]*o,t[1]*o,t[2]*o,r),s.addInto3(n[0]*l,n[1]*l,n[2]*l,r)};static addInto3=(e,t,n,i)=>{i[0]=i[0]+e,i[1]=i[1]+t,i[2]=i[2]+n};static dot5=(e,t,n,i,r,a,o)=>{o[0]=o[1]=o[2]=0;let l=a[0],c=a[1],h=a[2],u=a[3],d=a[4];s.addInto3(e[0]*l,e[1]*l,e[2]*l,o),s.addInto3(t[0]*c,t[1]*c,t[2]*c,o),s.addInto3(n[0]*h,n[1]*h,n[2]*h,o),s.addInto3(i[0]*u,i[1]*u,i[2]*u,o),s.addInto3(r[0]*d,r[1]*d,r[2]*d,o)};static rotateSphericalHarmonics3=(e,t,n,i,r,a,o,l,c)=>{s.dot3(e,t,n,i,o),s.dot3(e,t,n,r,l),s.dot3(e,t,n,a,c)};static rotateSphericalHarmonics5=(e,t,n,i,r,a,o,l,c,h,u,d,p,f,g,m,y,v)=>{let x=Math.sqrt(.25),S=Math.sqrt(3/4),M=Math.sqrt(1/3),_=Math.sqrt(4/3),A=Math.sqrt(1/12);c[0]=x*(l[2]*a[0]+l[0]*a[2]+(a[2]*l[0]+a[0]*l[2])),c[1]=l[1]*a[0]+a[1]*l[0],c[2]=S*(l[1]*a[1]+a[1]*l[1]),c[3]=l[1]*a[2]+a[1]*l[2],c[4]=x*(l[2]*a[2]-l[0]*a[0]+(a[2]*l[2]-a[0]*l[0])),s.dot5(e,t,n,i,r,c,f),h[0]=x*(o[2]*a[0]+o[0]*a[2]+(a[2]*o[0]+a[0]*o[2])),h[1]=o[1]*a[0]+a[1]*o[0],h[2]=S*(o[1]*a[1]+a[1]*o[1]),h[3]=o[1]*a[2]+a[1]*o[2],h[4]=x*(o[2]*a[2]-o[0]*a[0]+(a[2]*o[2]-a[0]*o[0])),s.dot5(e,t,n,i,r,h,g),u[0]=M*(o[2]*o[0]+o[0]*o[2])+-A*(l[2]*l[0]+l[0]*l[2]+(a[2]*a[0]+a[0]*a[2])),u[1]=_*o[1]*o[0]+-M*(l[1]*l[0]+a[1]*a[0]),u[2]=o[1]*o[1]+-x*(l[1]*l[1]+a[1]*a[1]),u[3]=_*o[1]*o[2]+-M*(l[1]*l[2]+a[1]*a[2]),u[4]=M*(o[2]*o[2]-o[0]*o[0])+-A*(l[2]*l[2]-l[0]*l[0]+(a[2]*a[2]-a[0]*a[0])),s.dot5(e,t,n,i,r,u,m),d[0]=x*(o[2]*l[0]+o[0]*l[2]+(l[2]*o[0]+l[0]*o[2])),d[1]=o[1]*l[0]+l[1]*o[0],d[2]=S*(o[1]*l[1]+l[1]*o[1]),d[3]=o[1]*l[2]+l[1]*o[2],d[4]=x*(o[2]*l[2]-o[0]*l[0]+(l[2]*o[2]-l[0]*o[0])),s.dot5(e,t,n,i,r,d,y),p[0]=x*(l[2]*l[0]+l[0]*l[2]-(a[2]*a[0]+a[0]*a[2])),p[1]=l[1]*l[0]-a[1]*a[0],p[2]=S*(l[1]*l[1]-a[1]*a[1]),p[3]=l[1]*l[2]-a[1]*a[2],p[4]=x*(l[2]*l[2]-l[0]*l[0]-(a[2]*a[2]-a[0]*a[0])),s.dot5(e,t,n,i,r,p,v)};static parseHeader(e){let t=new Uint8Array(e,0,s.HeaderSizeBytes),n=new Uint16Array(e,0,s.HeaderSizeBytes/2),i=new Uint32Array(e,0,s.HeaderSizeBytes/4),r=new Float32Array(e,0,s.HeaderSizeBytes/4),a=t[0],o=t[1],l=i[1],c=i[2],h=i[3],u=i[4],d=n[10],p=new E(r[6],r[7],r[8]),f=r[9]||-Yn,g=r[10]||Yn;return{versionMajor:a,versionMinor:o,maxSectionCount:l,sectionCount:c,maxSplatCount:h,splatCount:u,compressionLevel:d,sceneCenter:p,minSphericalHarmonicsCoeff:f,maxSphericalHarmonicsCoeff:g}}static writeHeaderCountsToBuffer(e,t,n){let i=new Uint32Array(n,0,s.HeaderSizeBytes/4);i[2]=e,i[4]=t}static writeHeaderToBuffer(e,t){let n=new Uint8Array(t,0,s.HeaderSizeBytes),i=new Uint16Array(t,0,s.HeaderSizeBytes/2),r=new Uint32Array(t,0,s.HeaderSizeBytes/4),a=new Float32Array(t,0,s.HeaderSizeBytes/4);n[0]=e.versionMajor,n[1]=e.versionMinor,n[2]=0,n[3]=0,r[1]=e.maxSectionCount,r[2]=e.sectionCount,r[3]=e.maxSplatCount,r[4]=e.splatCount,i[10]=e.compressionLevel,a[6]=e.sceneCenter.x,a[7]=e.sceneCenter.y,a[8]=e.sceneCenter.z,a[9]=e.minSphericalHarmonicsCoeff||-Yn,a[10]=e.maxSphericalHarmonicsCoeff||Yn}static parseSectionHeaders(e,t,n=0,i){let r=e.compressionLevel,a=e.maxSectionCount,o=new Uint16Array(t,n,a*s.SectionHeaderSizeBytes/2),l=new Uint32Array(t,n,a*s.SectionHeaderSizeBytes/4),c=new Float32Array(t,n,a*s.SectionHeaderSizeBytes/4),h=[],u=0,d=u/2,p=u/4,f=s.HeaderSizeBytes+e.maxSectionCount*s.SectionHeaderSizeBytes,g=0;for(let m=0;m<a;m++){let y=l[p+1],v=l[p+2],x=l[p+3],S=c[p+4],M=S/2,_=o[d+10],A=l[p+6]||s.CompressionLevels[r].ScaleRange,T=l[p+8],I=l[p+9],P=I*4,D=_*x+P,L=o[d+20],{bytesPerSplat:z}=s.calculateComponentStorage(r,L),U=z*y,k=U+D,W={bytesPerSplat:z,splatCountOffset:g,splatCount:i?y:0,maxSplatCount:y,bucketSize:v,bucketCount:x,bucketBlockSize:S,halfBucketBlockSize:M,bucketStorageSizeBytes:_,bucketsStorageSizeBytes:D,splatDataStorageSizeBytes:U,storageSizeBytes:k,compressionScaleRange:A,compressionScaleFactor:M/A,base:f,bucketsBase:f+P,dataBase:f+D,fullBucketCount:T,partiallyFilledBucketCount:I,sphericalHarmonicsDegree:L};h[m]=W,f+=k,u+=s.SectionHeaderSizeBytes,d=u/2,p=u/4,g+=y}return h}static writeSectionHeaderToBuffer(e,t,n,i=0){let r=new Uint16Array(n,i,s.SectionHeaderSizeBytes/2),a=new Uint32Array(n,i,s.SectionHeaderSizeBytes/4),o=new Float32Array(n,i,s.SectionHeaderSizeBytes/4);a[0]=e.splatCount,a[1]=e.maxSplatCount,a[2]=t>=1?e.bucketSize:0,a[3]=t>=1?e.bucketCount:0,o[4]=t>=1?e.bucketBlockSize:0,r[10]=t>=1?s.BucketStorageSizeBytes:0,a[6]=t>=1?e.compressionScaleRange:0,a[7]=e.storageSizeBytes,a[8]=t>=1?e.fullBucketCount:0,a[9]=t>=1?e.partiallyFilledBucketCount:0,r[20]=e.sphericalHarmonicsDegree}static writeSectionHeaderSplatCountToBuffer(e,t,n=0){let i=new Uint32Array(t,n,s.SectionHeaderSizeBytes/4);i[0]=e}constructFromBuffer(e,t){this.bufferData=e,this.globalSplatIndexToLocalSplatIndexMap=[],this.globalSplatIndexToSectionMap=[];let n=s.parseHeader(this.bufferData);this.versionMajor=n.versionMajor,this.versionMinor=n.versionMinor,this.maxSectionCount=n.maxSectionCount,this.sectionCount=t?n.maxSectionCount:0,this.maxSplatCount=n.maxSplatCount,this.splatCount=t?n.maxSplatCount:0,this.compressionLevel=n.compressionLevel,this.sceneCenter=new E().copy(n.sceneCenter),this.minSphericalHarmonicsCoeff=n.minSphericalHarmonicsCoeff,this.maxSphericalHarmonicsCoeff=n.maxSphericalHarmonicsCoeff,this.sections=s.parseSectionHeaders(n,this.bufferData,s.HeaderSizeBytes,t),this.linkBufferArrays(),this.buildMaps()}static calculateComponentStorage(e,t){let n=s.CompressionLevels[e].BytesPerCenter,i=s.CompressionLevels[e].BytesPerScale,r=s.CompressionLevels[e].BytesPerRotation,a=s.CompressionLevels[e].BytesPerColor,o=ps(t),l=s.CompressionLevels[e].BytesPerSphericalHarmonicsComponent*o,c=n+i+r+a+l;return{bytesPerCenter:n,bytesPerScale:i,bytesPerRotation:r,bytesPerColor:a,sphericalHarmonicsComponentsPerSplat:o,sphericalHarmonicsBytesPerSplat:l,bytesPerSplat:c}}linkBufferArrays(){for(let e=0;e<this.maxSectionCount;e++){let t=this.sections[e];t.bucketArray=new Float32Array(this.bufferData,t.bucketsBase,t.bucketCount*s.BucketStorageSizeFloats),t.partiallyFilledBucketCount>0&&(t.partiallyFilledBucketLengths=new Uint32Array(this.bufferData,t.base,t.partiallyFilledBucketCount))}}buildMaps(){let e=0;for(let t=0;t<this.maxSectionCount;t++){let n=this.sections[t];for(let i=0;i<n.maxSplatCount;i++){let r=e+i;this.globalSplatIndexToLocalSplatIndexMap[r]=i,this.globalSplatIndexToSectionMap[r]=t}e+=n.maxSplatCount}}updateLoadedCounts(e,t){s.writeHeaderCountsToBuffer(e,t,this.bufferData),this.sectionCount=e,this.splatCount=t}updateSectionLoadedCounts(e,t){let n=s.HeaderSizeBytes+s.SectionHeaderSizeBytes*e;s.writeSectionHeaderSplatCountToBuffer(t,this.bufferData,n),this.sections[e].splatCount=t}static writeSplatDataToSectionBuffer=(function(){let e=new ArrayBuffer(12),t=new ArrayBuffer(12),n=new ArrayBuffer(16),i=new ArrayBuffer(4),r=new ArrayBuffer(256),a=new Ve,o=new E,l=new E,{X:c,Y:h,Z:u,SCALE0:d,SCALE1:p,SCALE2:f,ROTATION0:g,ROTATION1:m,ROTATION2:y,ROTATION3:v,FDC0:x,FDC1:S,FDC2:M,OPACITY:_,FRC0:A,FRC9:T}=ue.OFFSET,I=(P,D,L)=>{let z=L*2+1;return P=Math.round(P*D)+L,ct(P,0,z)};return function(P,D,L,z,U,k,W,Q,q=-Yn,te=Yn){let le=ps(U),ee=s.CompressionLevels[z].BytesPerCenter,re=s.CompressionLevels[z].BytesPerScale,ce=s.CompressionLevels[z].BytesPerRotation,de=s.CompressionLevels[z].BytesPerColor,oe=L,w=oe+ee,C=w+re,H=C+ce,N=H+de;if(P[g]!==void 0?(a.set(P[g],P[m],P[y],P[v]),a.normalize()):a.set(1,0,0,0),P[d]!==void 0?o.set(P[d]||0,P[p]||0,P[f]||0):o.set(0,0,0),z===0){let O=new Float32Array(D,oe,s.CenterComponentCount),b=new Float32Array(D,C,s.RotationComponentCount),F=new Float32Array(D,w,s.ScaleComponentCount);if(b.set([a.x,a.y,a.z,a.w]),F.set([o.x,o.y,o.z]),O.set([P[c],P[h],P[u]]),U>0){let V=new Float32Array(D,N,le);if(U>=1){for(let J=0;J<9;J++)V[J]=P[A+J]||0;if(U>=2)for(let J=0;J<15;J++)V[J+9]=P[T+J]||0}}}else{let O=new Uint16Array(e,0,s.CenterComponentCount),b=new Uint16Array(n,0,s.RotationComponentCount),F=new Uint16Array(t,0,s.ScaleComponentCount);if(b.set([Et(a.x),Et(a.y),Et(a.z),Et(a.w)]),F.set([Et(o.x),Et(o.y),Et(o.z)]),l.set(P[c],P[h],P[u]).sub(k),l.x=I(l.x,W,Q),l.y=I(l.y,W,Q),l.z=I(l.z,W,Q),O.set([l.x,l.y,l.z]),U>0){let V=z===1?Uint16Array:Uint8Array,J=z===1?2:1,G=new V(r,0,le);if(U>=1){for(let $=0;$<9;$++){let se=P[A+$]||0;G[$]=z===1?Et(se):Ws(se,q,te)}let ie=9*J;if(cs(G.buffer,0,D,N,ie),U>=2){for(let $=0;$<15;$++){let se=P[T+$]||0;G[$+9]=z===1?Et(se):Ws(se,q,te)}cs(G.buffer,ie,D,N+ie,15*J)}}}cs(O.buffer,0,D,oe,6),cs(F.buffer,0,D,w,6),cs(b.buffer,0,D,C,8)}let B=new Uint8ClampedArray(i,0,4);B.set([P[x]||0,P[S]||0,P[M]||0]),B[3]=P[_]||0,cs(B.buffer,0,D,H,4)}})();static generateFromUncompressedSplatArrays(e,t,n,i,r,a,o=[]){let l=0;for(let M=0;M<e.length;M++){let _=e[M];l=Math.max(_.sphericalHarmonicsDegree,l)}let c,h;for(let M=0;M<e.length;M++){let _=e[M];for(let A=0;A<_.splats.length;A++){let T=_.splats[A];for(let I=ue.OFFSET.FRC0;I<ue.OFFSET.FRC23&&I<T.length;I++)(!c||T[I]<c)&&(c=T[I]),(!h||T[I]>h)&&(h=T[I])}}c=c||-Yn,h=h||Yn;let{bytesPerSplat:u}=s.calculateComponentStorage(n,l),d=s.CompressionLevels[n].ScaleRange,p=[],f=[],g=0;for(let M=0;M<e.length;M++){let _=e[M],A=new ue(l);for(let oe=0;oe<_.splatCount;oe++){let w=_.splats[oe];(w[ue.OFFSET.OPACITY]||0)>=t&&A.addSplat(w)}let T=o[M]||{},I=(T.blockSizeFactor||1)*(r||s.BucketBlockSize),P=Math.ceil((T.bucketSizeFactor||1)*(a||s.BucketSize)),D=s.computeBucketsForUncompressedSplatArray(A,I,P),L=D.fullBuckets.length,z=D.partiallyFullBuckets.map(oe=>oe.splats.length),U=z.length,k=[...D.fullBuckets,...D.partiallyFullBuckets],W=A.splats.length*u,Q=U*4,q=n>=1?k.length*s.BucketStorageSizeBytes+Q:0,te=W+q,le=new ArrayBuffer(te),ee=d/(I*.5),re=new E,ce=0;for(let oe=0;oe<k.length;oe++){let w=k[oe];re.fromArray(w.center);for(let C=0;C<w.splats.length;C++){let H=w.splats[C],N=A.splats[H],B=q+ce*u;s.writeSplatDataToSectionBuffer(N,le,B,n,l,re,ee,d,c,h),ce++}}if(g+=ce,n>=1){let oe=new Uint32Array(le,0,z.length*4);for(let C=0;C<z.length;C++)oe[C]=z[C];let w=new Float32Array(le,Q,k.length*s.BucketStorageSizeFloats);for(let C=0;C<k.length;C++){let H=k[C],N=C*3;w[N]=H.center[0],w[N+1]=H.center[1],w[N+2]=H.center[2]}}p.push(le);let de=new ArrayBuffer(s.SectionHeaderSizeBytes);s.writeSectionHeaderToBuffer({maxSplatCount:ce,splatCount:ce,bucketSize:P,bucketCount:k.length,bucketBlockSize:I,compressionScaleRange:d,storageSizeBytes:te,fullBucketCount:L,partiallyFilledBucketCount:U,sphericalHarmonicsDegree:l},n,de,0),f.push(de)}let m=0;for(let M of p)m+=M.byteLength;let y=s.HeaderSizeBytes+s.SectionHeaderSizeBytes*p.length+m,v=new ArrayBuffer(y);s.writeHeaderToBuffer({versionMajor:0,versionMinor:1,maxSectionCount:p.length,sectionCount:p.length,maxSplatCount:g,splatCount:g,compressionLevel:n,sceneCenter:i,minSphericalHarmonicsCoeff:c,maxSphericalHarmonicsCoeff:h},v);let x=s.HeaderSizeBytes;for(let M of f)new Uint8Array(v,x,s.SectionHeaderSizeBytes).set(new Uint8Array(M)),x+=s.SectionHeaderSizeBytes;for(let M of p)new Uint8Array(v,x,M.byteLength).set(new Uint8Array(M)),x+=M.byteLength;return new s(v)}static computeBucketsForUncompressedSplatArray(e,t,n){let i=e.splatCount,r=t/2,a=new E,o=new E;for(let g=0;g<i;g++){let m=e.splats[g],y=[m[ue.OFFSET.X],m[ue.OFFSET.Y],m[ue.OFFSET.Z]];(g===0||y[0]<a.x)&&(a.x=y[0]),(g===0||y[0]>o.x)&&(o.x=y[0]),(g===0||y[1]<a.y)&&(a.y=y[1]),(g===0||y[1]>o.y)&&(o.y=y[1]),(g===0||y[2]<a.z)&&(a.z=y[2]),(g===0||y[2]>o.z)&&(o.z=y[2])}let l=new E().copy(o).sub(a),c=Math.ceil(l.y/t),h=Math.ceil(l.z/t),u=new E,d=[],p={};for(let g=0;g<i;g++){let m=e.splats[g],y=[m[ue.OFFSET.X],m[ue.OFFSET.Y],m[ue.OFFSET.Z]],v=Math.floor((y[0]-a.x)/t),x=Math.floor((y[1]-a.y)/t),S=Math.floor((y[2]-a.z)/t);u.x=v*t+a.x+r,u.y=x*t+a.y+r,u.z=S*t+a.z+r;let M=v*(c*h)+x*h+S,_=p[M];_||(p[M]=_={splats:[],center:u.toArray()}),_.splats.push(g),_.splats.length>=n&&(d.push(_),p[M]=null)}let f=[];for(let g in p)if(p.hasOwnProperty(g)){let m=p[g];m&&f.push(m)}return{fullBuckets:d,partiallyFullBuckets:f}}static preallocateUncompressed(e,t){let n=s.CompressionLevels[0].SphericalHarmonicsDegrees[t],i=s.HeaderSizeBytes+s.SectionHeaderSizeBytes,r=i+n.BytesPerSplat*e,a=new ArrayBuffer(r);return s.writeHeaderToBuffer({versionMajor:s.CurrentMajorVersion,versionMinor:s.CurrentMinorVersion,maxSectionCount:1,sectionCount:1,maxSplatCount:e,splatCount:e,compressionLevel:0,sceneCenter:new E},a),s.writeSectionHeaderToBuffer({maxSplatCount:e,splatCount:e,bucketSize:0,bucketCount:0,bucketBlockSize:0,compressionScaleRange:0,storageSizeBytes:0,fullBucketCount:0,partiallyFilledBucketCount:0,sphericalHarmonicsDegree:t},0,a,s.HeaderSizeBytes),{splatBuffer:new s(a,!0),splatBufferDataOffsetBytes:i}}},Mu=new Uint8Array([112,108,121,10]),Eu=new Uint8Array([10,101,110,100,95,104,101,97,100,101,114,10]),ql="end_header",Yl=new Map([["char",Int8Array],["uchar",Uint8Array],["short",Int16Array],["ushort",Uint16Array],["int",Int32Array],["uint",Uint32Array],["float",Float32Array],["double",Float64Array]]),vn=(s,e)=>{let t=(1<<e)-1;return(s&t)/t},Tu=(s,e)=>{s.x=vn(e>>>21,11),s.y=vn(e>>>11,10),s.z=vn(e,11)},gm=(s,e)=>{s.x=vn(e>>>24,8),s.y=vn(e>>>16,8),s.z=vn(e>>>8,8),s.w=vn(e,8)},ym=(s,e)=>{let t=1/(Math.sqrt(2)*.5),n=(vn(e>>>20,10)-.5)*t,i=(vn(e>>>10,10)-.5)*t,r=(vn(e,10)-.5)*t,a=Math.sqrt(1-(n*n+i*i+r*r));switch(e>>>30){case 0:s.set(a,n,i,r);break;case 1:s.set(n,a,i,r);break;case 2:s.set(n,i,a,r);break;case 3:s.set(n,i,r,a);break}},wn=(s,e,t)=>s*(1-t)+e*t,ut=(s,e)=>s.properties.find(t=>t.name===e&&t.storage)?.storage,In=class s{static decodeHeaderText(e){let t,n,i,r,a=e.split(`
`).filter(u=>!u.startsWith("comment ")),o=0,l=!1;for(let u=1;u<a.length;++u){let d=a[u].split(" ");switch(d[0]){case"format":if(d[1]!=="binary_little_endian")throw new Error("Unsupported ply format");break;case"element":t={name:d[1],count:parseInt(d[2],10),properties:[],storageSizeBytes:0},t.name==="chunk"?n=t:t.name==="vertex"?i=t:t.name==="sh"&&(r=t);break;case"property":{if(!Yl.has(d[1]))throw new Error(`Unrecognized property data type '${d[1]}' in ply header`);let p=Yl.get(d[1]),f=p.BYTES_PER_ELEMENT*t.count;t.name==="vertex"&&(o+=p.BYTES_PER_ELEMENT),t.properties.push({type:d[1],name:d[2],storage:null,byteSize:p.BYTES_PER_ELEMENT,storageSizeByes:f}),t.storageSizeBytes+=f;break}case ql:l=!0;break;default:throw new Error(`Unrecognized header value '${d[0]}' in ply header`)}if(l)break}let c=0,h=0;return r&&(h=r.properties.length,r.properties.length>=45?c=3:r.properties.length>=24?c=2:r.properties.length>=9&&(c=1)),{chunkElement:n,vertexElement:i,shElement:r,bytesPerSplat:o,headerSizeBytes:e.indexOf(ql)+ql.length+1,sphericalHarmonicsDegree:c,sphericalHarmonicsPerSplat:h}}static decodeHeader(e){let t=(p,f)=>{let g=p.length-f.length,m,y;for(m=0;m<=g;++m){for(y=0;y<f.length&&p[m+y]===f[y];++y);if(y===f.length)return m}return-1},n=(p,f)=>{if(p.length<f.length)return!1;for(let g=0;g<f.length;++g)if(p[g]!==f[g])return!1;return!0},i=new Uint8Array(e),r;if(i.length>=Mu.length&&!n(i,Mu))throw new Error("Invalid PLY header");if(r=t(i,Eu),r===-1)throw new Error("End of PLY header not found");let a=new TextDecoder("ascii").decode(i.slice(0,r)),{chunkElement:o,vertexElement:l,shElement:c,sphericalHarmonicsDegree:h,sphericalHarmonicsPerSplat:u,bytesPerSplat:d}=s.decodeHeaderText(a);return{headerSizeBytes:r+Eu.length,bytesPerSplat:d,chunkElement:o,vertexElement:l,shElement:c,sphericalHarmonicsDegree:h,sphericalHarmonicsPerSplat:u}}static readElementData(e,t,n,i,r,a=null){let o=t instanceof DataView?t:new DataView(t);i=i||0,r=r||e.count-1;for(let l=i;l<=r;++l)for(let c=0;c<e.properties.length;++c){let h=e.properties[c],u=Yl.get(h.type),d=u.BYTES_PER_ELEMENT*e.count;if((!h.storage||h.storage.byteLength<d)&&(!a||a(h.name))&&(h.storage=new u(e.count)),h.storage)switch(h.type){case"char":h.storage[l]=o.getInt8(n);break;case"uchar":h.storage[l]=o.getUint8(n);break;case"short":h.storage[l]=o.getInt16(n,!0);break;case"ushort":h.storage[l]=o.getUint16(n,!0);break;case"int":h.storage[l]=o.getInt32(n,!0);break;case"uint":h.storage[l]=o.getUint32(n,!0);break;case"float":h.storage[l]=o.getFloat32(n,!0);break;case"double":h.storage[l]=o.getFloat64(n,!0);break}n+=h.byteSize}return n}static readPly(e,t=null){let n=s.decodeHeader(e),i=s.readElementData(n.chunkElement,e,n.headerSizeBytes,null,null,t);return i=s.readElementData(n.vertexElement,e,i,null,null,t),s.readElementData(n.shElement,e,i,null,null,t),{chunkElement:n.chunkElement,vertexElement:n.vertexElement,shElement:n.shElement,sphericalHarmonicsDegree:n.sphericalHarmonicsDegree,sphericalHarmonicsPerSplat:n.sphericalHarmonicsPerSplat}}static getElementStorageArrays(e,t,n){let i={};if(t){let r=ut(e,"min_r"),a=ut(e,"min_g"),o=ut(e,"min_b"),l=ut(e,"max_r"),c=ut(e,"max_g"),h=ut(e,"max_b"),u=ut(e,"min_x"),d=ut(e,"min_y"),p=ut(e,"min_z"),f=ut(e,"max_x"),g=ut(e,"max_y"),m=ut(e,"max_z"),y=ut(e,"min_scale_x"),v=ut(e,"min_scale_y"),x=ut(e,"min_scale_z"),S=ut(e,"max_scale_x"),M=ut(e,"max_scale_y"),_=ut(e,"max_scale_z"),A=ut(t,"packed_position"),T=ut(t,"packed_rotation"),I=ut(t,"packed_scale"),P=ut(t,"packed_color");i.colorExtremes={minR:r,maxR:l,minG:a,maxG:c,minB:o,maxB:h},i.positionExtremes={minX:u,maxX:f,minY:d,maxY:g,minZ:p,maxZ:m},i.scaleExtremes={minScaleX:y,maxScaleX:S,minScaleY:v,maxScaleY:M,minScaleZ:x,maxScaleZ:_},i.position=A,i.rotation=T,i.scale=I,i.color=P}if(n){let r={};for(let a=0;a<45;a++){let o=`f_rest_${a}`,l=ut(n,o);if(l)r[o]=l;else break}i.sh=r}return i}static decompressBaseSplat=(function(){let e=new E,t=new Ve,n=new E,i=new Ze,r=ue.OFFSET;return function(a,o,l,c,h,u,d,p,f,g){g=g||ue.createSplat();let m=Math.floor((o+a)/256);return Tu(e,l[a]),ym(t,d[a]),Tu(n,h[a]),gm(i,f[a]),g[r.X]=wn(c.minX[m],c.maxX[m],e.x),g[r.Y]=wn(c.minY[m],c.maxY[m],e.y),g[r.Z]=wn(c.minZ[m],c.maxZ[m],e.z),g[r.ROTATION0]=t.x,g[r.ROTATION1]=t.y,g[r.ROTATION2]=t.z,g[r.ROTATION3]=t.w,g[r.SCALE0]=Math.exp(wn(u.minScaleX[m],u.maxScaleX[m],n.x)),g[r.SCALE1]=Math.exp(wn(u.minScaleY[m],u.maxScaleY[m],n.y)),g[r.SCALE2]=Math.exp(wn(u.minScaleZ[m],u.maxScaleZ[m],n.z)),p.minR&&p.maxR?g[r.FDC0]=ct(Math.round(wn(p.minR[m],p.maxR[m],i.x)*255),0,255):g[r.FDC0]=ct(Math.floor(i.x*255),0,255),p.minG&&p.maxG?g[r.FDC1]=ct(Math.round(wn(p.minG[m],p.maxG[m],i.y)*255),0,255):g[r.FDC1]=ct(Math.floor(i.y*255),0,255),p.minB&&p.maxB?g[r.FDC2]=ct(Math.round(wn(p.minB[m],p.maxB[m],i.z)*255),0,255):g[r.FDC2]=ct(Math.floor(i.z*255),0,255),g[r.OPACITY]=ct(Math.floor(i.w*255),0,255),g}})();static decompressSphericalHarmonics=(function(){let e=[0,3,8,15],t=[0,1,2,9,10,11,12,13,24,25,26,27,28,29,30,3,4,5,14,15,16,17,18,31,32,33,34,35,36,37,6,7,8,19,20,21,22,23,38,39,40,41,42,43,44];return function(n,i,r,a,o){o=o||ue.createSplat();let l=e[r],c=e[a];for(let h=0;h<3;++h)for(let u=0;u<15;++u){let d=t[h*15+u];u<l&&u<c&&(o[ue.OFFSET.FRC0+d]=i[h*c+u][n]*(8/255)-4)}return o}})();static parseToUncompressedSplatBufferSection(e,t,n,i,r,a,o,l,c=null){s.readElementData(t,a,0,n,i,c);let h=ye.CompressionLevels[0].SphericalHarmonicsDegrees[0].BytesPerSplat,{positionExtremes:u,scaleExtremes:d,colorExtremes:p,position:f,rotation:g,scale:m,color:y}=s.getElementStorageArrays(e,t),v=ue.createSplat();for(let x=n;x<=i;++x){s.decompressBaseSplat(x,r,f,u,m,d,g,p,y,v);let S=x*h+l;ye.writeSplatDataToSectionBuffer(v,o,S,0,0)}}static parseToUncompressedSplatArraySection(e,t,n,i,r,a,o,l=null){s.readElementData(t,a,0,n,i,l);let{positionExtremes:c,scaleExtremes:h,colorExtremes:u,position:d,rotation:p,scale:f,color:g}=s.getElementStorageArrays(e,t);for(let m=n;m<=i;++m){let y=ue.createSplat();s.decompressBaseSplat(m,r,d,c,f,h,p,u,g,y),o.addSplat(y)}}static parseSphericalHarmonicsToUncompressedSplatArraySection(e,t,n,i,r,a,o,l,c,h=null){s.readElementData(t,r,a,n,i,h);let{sh:u}=s.getElementStorageArrays(e,void 0,t),d=Object.values(u);for(let p=n;p<=i;++p)s.decompressSphericalHarmonics(p,d,o,l,c.splats[p])}static parseToUncompressedSplatArray(e,t){let{chunkElement:n,vertexElement:i,shElement:r,sphericalHarmonicsDegree:a}=s.readPly(e);t=Math.min(t,a);let o=new ue(t),{positionExtremes:l,scaleExtremes:c,colorExtremes:h,position:u,rotation:d,scale:p,color:f}=s.getElementStorageArrays(n,i),g;if(t>0){let{sh:m}=s.getElementStorageArrays(n,void 0,r);g=Object.values(m)}for(let m=0;m<i.count;++m){o.addDefaultSplat();let y=o.getSplat(o.splatCount-1);s.decompressBaseSplat(m,0,u,l,p,c,d,h,f,y),t>0&&s.decompressSphericalHarmonics(m,g,t,a,y)}return o}static parseToUncompressedSplatBuffer(e,t){let{chunkElement:n,vertexElement:i,shElement:r,sphericalHarmonicsDegree:a}=s.readPly(e);t=Math.min(t,a);let{splatBuffer:o,splatBufferDataOffsetBytes:l}=ye.preallocateUncompressed(i.count,t),{positionExtremes:c,scaleExtremes:h,colorExtremes:u,position:d,rotation:p,scale:f,color:g}=s.getElementStorageArrays(n,i),m;if(t>0){let{sh:x}=s.getElementStorageArrays(n,void 0,r);m=Object.values(x)}let y=ye.CompressionLevels[0].SphericalHarmonicsDegrees[t].BytesPerSplat,v=ue.createSplat(t);for(let x=0;x<i.count;++x){s.decompressBaseSplat(x,0,d,c,f,h,p,u,g,v),t>0&&s.decompressSphericalHarmonics(x,m,t,a,v);let S=x*y+l;ye.writeSplatDataToSectionBuffer(v,o.bufferData,S,0,t)}return o}},Ht={INRIAV1:0,INRIAV2:1,PlayCanvasCompressed:2},[Ju,Rc,Ic,Pc,Dc,Bc,Lc]=[0,1,2,3,4,5,6],bu={double:Ju,int:Rc,uint:Ic,float:Pc,short:Dc,ushort:Bc,uchar:Lc},vm={[Ju]:8,[Rc]:4,[Ic]:4,[Pc]:4,[Dc]:2,[Bc]:2,[Lc]:1},ft=class s{static HeaderEndToken="end_header";static decodeSectionHeader(e,t,n=0){let i=[],r=!1,a=-1,o=0,l=!1,c=null,h=[],u=[],d=[],p=[],f={};for(let v=n;v<e.length;v++){let x=e[v].trim();if(x.startsWith("element"))if(r){a--;break}else{r=!0,n=v,a=v;let S=x.split(" "),M=0;for(let _ of S){let A=_.trim();A.length>0&&(M++,M===2?c=A:M===3&&(o=parseInt(A)))}}else if(x.startsWith("property")){let S=x.match(/(\w+)\s+(\w+)\s+(\w+)/);if(S){let M=S[2],_=S[3];d.push(_);let A=t[_];f[_]=M;let T=bu[M];A!==void 0&&(p.push(_),h.push(A),u[A]=T)}}if(x===s.HeaderEndToken){l=!0;break}r&&(i.push(x),a++)}let g=[],m=0;for(let v of d){let x=f[v];if(f.hasOwnProperty(v)){let S=t[v];S!==void 0&&(g[S]=m)}m+=vm[bu[x]]}let y=s.decodeSphericalHarmonicsFromSectionHeader(d,t);return{headerLines:i,headerStartLine:n,headerEndLine:a,fieldTypes:u,fieldIds:h,fieldOffsets:g,bytesPerVertex:m,vertexCount:o,dataSizeBytes:m*o,endOfHeader:l,sectionName:c,sphericalHarmonicsDegree:y.degree,sphericalHarmonicsCoefficientsPerChannel:y.coefficientsPerChannel,sphericalHarmonicsDegree1Fields:y.degree1Fields,sphericalHarmonicsDegree2Fields:y.degree2Fields}}static decodeSphericalHarmonicsFromSectionHeader(e,t){let n=0,i=0;for(let l of e)l.startsWith("f_rest")&&n++;i=n/3;let r=0;i>=3&&(r=1),i>=8&&(r=2);let a=[],o=[];for(let l=0;l<3;l++){if(r>=1)for(let c=0;c<3;c++)a.push(t["f_rest_"+(c+i*l)]);if(r>=2)for(let c=0;c<5;c++)o.push(t["f_rest_"+(c+i*l+3)])}return{degree:r,coefficientsPerChannel:i,degree1Fields:a,degree2Fields:o}}static getHeaderSectionNames(e){let t=[];for(let n of e)if(n.startsWith("element")){let i=n.split(" "),r=0;for(let a of i){let o=a.trim();o.length>0&&(r++,r===2&&t.push(o))}}return t}static checkTextForEndHeader(e){return!!e.includes(s.HeaderEndToken)}static checkBufferForEndHeader(e,t,n,i){let r=new Uint8Array(e,Math.max(0,t-n),n),a=i.decode(r);return s.checkTextForEndHeader(a)}static extractHeaderFromBufferToText(e){let t=new TextDecoder,n=0,i="",r=100;for(;;){if(n+r>=e.byteLength)throw new Error("End of file reached while searching for end of header");let a=new Uint8Array(e,n,r);if(i+=t.decode(a),n+=r,s.checkBufferForEndHeader(e,n,r*2,t))break}return i}static readHeaderFromBuffer(e){let t=new TextDecoder,n=0,i="",r=100;for(;;){if(n+r>=e.byteLength)throw new Error("End of file reached while searching for end of header");let a=new Uint8Array(e,n,r);if(i+=t.decode(a),n+=r,s.checkBufferForEndHeader(e,n,r*2,t))break}return i}static convertHeaderTextToLines(e){let t=e.split(`
`),n=[];for(let i=0;i<t.length;i++){let r=t[i].trim();if(n.push(r),r===s.HeaderEndToken)break}return n}static determineHeaderFormatFromHeaderText(e){let t=s.convertHeaderTextToLines(e),n=Ht.INRIAV1;for(let i=0;i<t.length;i++){let r=t[i].trim();if(r.startsWith("element chunk")||r.match(/[A-Za-z]*packed_[A-Za-z]*/))n=Ht.PlayCanvasCompressed;else if(r.startsWith("element codebook_centers"))n=Ht.INRIAV2;else if(r===s.HeaderEndToken)break}return n}static determineHeaderFormatFromPlyBuffer(e){let t=s.extractHeaderFromBufferToText(e);return s.determineHeaderFormatFromHeaderText(t)}static readVertex(e,t,n,i,r,a,o=!0){let l=n*t.bytesPerVertex+i,c=t.fieldOffsets,h=t.fieldTypes;for(let u of r){let d=h[u];d===Pc?a[u]=e.getFloat32(l+c[u],!0):d===Dc?a[u]=e.getInt16(l+c[u],!0):d===Bc?a[u]=e.getUint16(l+c[u],!0):d===Rc?a[u]=e.getInt32(l+c[u],!0):d===Ic?a[u]=e.getUint32(l+c[u],!0):d===Lc&&(o?a[u]=e.getUint8(l+c[u])/255:a[u]=e.getUint8(l+c[u]))}}},$u=["scale_0","scale_1","scale_2","rot_0","rot_1","rot_2","rot_3","x","y","z","f_dc_0","f_dc_1","f_dc_2","opacity","red","green","blue","f_rest_0"],xm=$u.map((s,e)=>e),[Cu,Sm,_m,Am,Mm,Em,Tm,bm,Cm,wm,wu,Rm,Im,Ru,Iu,Pm,Dm,Bm]=xm,Pn=class s{static decodeHeaderLines(e){let t=0;e.forEach(h=>{h.includes("f_rest_")&&t++});let n=0;t>=45?n=45:t>=24?n=24:t>=9&&(n=9);let r=Array.from(Array(Math.max(n-1,0))).map((h,u)=>`f_rest_${u+1}`),a=[...$u,...r],o=a.map((h,u)=>u),l=o.reduce((h,u)=>(h[a[u]]=u,h),{}),c=ft.decodeSectionHeader(e,l,0);return c.splatCount=c.vertexCount,c.bytesPerSplat=c.bytesPerVertex,c.fieldsToReadIndexes=o,c}static decodeHeaderText(e){let t=ft.convertHeaderTextToLines(e),n=s.decodeHeaderLines(t);return n.headerText=e,n.headerSizeBytes=e.indexOf(ft.HeaderEndToken)+ft.HeaderEndToken.length+1,n}static decodeHeaderFromBuffer(e){let t=ft.readHeaderFromBuffer(e);return s.decodeHeaderText(t)}static findSplatData(e,t){return new DataView(e,t.headerSizeBytes)}static parseToUncompressedSplatBufferSection(e,t,n,i,r,a,o,l=0){l=Math.min(l,e.sphericalHarmonicsDegree);let c=ye.CompressionLevels[0].SphericalHarmonicsDegrees[l].BytesPerSplat;for(let h=t;h<=n;h++){let u=s.parseToUncompressedSplat(i,h,e,r,l),d=h*c+o;ye.writeSplatDataToSectionBuffer(u,a,d,0,l)}}static parseToUncompressedSplatArraySection(e,t,n,i,r,a,o=0){o=Math.min(o,e.sphericalHarmonicsDegree);for(let l=t;l<=n;l++){let c=s.parseToUncompressedSplat(i,l,e,r,o);a.addSplat(c)}}static decodeSectionSplatData(e,t,n,i,r=!0){if(i=Math.min(i,n.sphericalHarmonicsDegree),r){let a=new ue(i);for(let o=0;o<t;o++){let l=s.parseToUncompressedSplat(e,o,n,0,i);a.addSplat(l)}return a}else{let{splatBuffer:a,splatBufferDataOffsetBytes:o}=ye.preallocateUncompressed(t,i);return s.parseToUncompressedSplatBufferSection(n,0,t-1,e,0,a.bufferData,o,i),a}}static parseToUncompressedSplat=(function(){let e=[],t=new Ve,n=ue.OFFSET.X,i=ue.OFFSET.Y,r=ue.OFFSET.Z,a=ue.OFFSET.SCALE0,o=ue.OFFSET.SCALE1,l=ue.OFFSET.SCALE2,c=ue.OFFSET.ROTATION0,h=ue.OFFSET.ROTATION1,u=ue.OFFSET.ROTATION2,d=ue.OFFSET.ROTATION3,p=ue.OFFSET.FDC0,f=ue.OFFSET.FDC1,g=ue.OFFSET.FDC2,m=ue.OFFSET.OPACITY,y=[];for(let v=0;v<45;v++)y[v]=ue.OFFSET.FRC0+v;return function(v,x,S,M=0,_=0){_=Math.min(_,S.sphericalHarmonicsDegree),s.readSplat(v,S,x,M,e);let A=ue.createSplat(_);if(e[Cu]!==void 0?(A[a]=Math.exp(e[Cu]),A[o]=Math.exp(e[Sm]),A[l]=Math.exp(e[_m])):(A[a]=.01,A[o]=.01,A[l]=.01),e[wu]!==void 0){let T=.28209479177387814;A[p]=(.5+T*e[wu])*255,A[f]=(.5+T*e[Rm])*255,A[g]=(.5+T*e[Im])*255}else e[Iu]!==void 0?(A[p]=e[Iu]*255,A[f]=e[Pm]*255,A[g]=e[Dm]*255):(A[p]=0,A[f]=0,A[g]=0);if(e[Ru]!==void 0&&(A[m]=1/(1+Math.exp(-e[Ru]))*255),A[p]=ct(Math.floor(A[p]),0,255),A[f]=ct(Math.floor(A[f]),0,255),A[g]=ct(Math.floor(A[g]),0,255),A[m]=ct(Math.floor(A[m]),0,255),_>=1&&e[Bm]!==void 0){for(let T=0;T<9;T++)A[y[T]]=e[S.sphericalHarmonicsDegree1Fields[T]];if(_>=2)for(let T=0;T<15;T++)A[y[9+T]]=e[S.sphericalHarmonicsDegree2Fields[T]]}return t.set(e[Am],e[Mm],e[Em],e[Tm]),t.normalize(),A[c]=t.x,A[h]=t.y,A[u]=t.z,A[d]=t.w,A[n]=e[bm],A[i]=e[Cm],A[r]=e[wm],A}})();static readSplat(e,t,n,i,r){return ft.readVertex(e,t,n,i,t.fieldsToReadIndexes,r,!0)}static parseToUncompressedSplatArray(e,t=0){let{header:n,splatCount:i,splatData:r}=Pu(e);return s.decodeSectionSplatData(r,i,n,t,!0)}static parseToUncompressedSplatBuffer(e,t=0){let{header:n,splatCount:i,splatData:r}=Pu(e);return s.decodeSectionSplatData(r,i,n,t,!1)}};function Pu(s){let e=Pn.decodeHeaderFromBuffer(s),t=e.splatCount,n=Pn.findSplatData(s,e);return{header:e,splatCount:t,splatData:n}}var ed=["features_dc","features_rest_0","features_rest_1","features_rest_2","features_rest_3","features_rest_4","features_rest_5","features_rest_6","features_rest_7","features_rest_8","features_rest_9","features_rest_10","features_rest_11","features_rest_12","features_rest_13","features_rest_14","opacity","scaling","rotation_re","rotation_im"],ha=ed.map((s,e)=>e),[ua,Lm,Fm,Du,da,Um,Ql]=[0,1,4,16,17,18,19],td=["scale_0","scale_1","scale_2","rot_0","rot_1","rot_2","rot_3","x","y","z","f_dc_0","f_dc_1","f_dc_2","opacity","red","green","blue","f_rest_0","f_rest_1","f_rest_2","f_rest_3","f_rest_4","f_rest_5","f_rest_6","f_rest_7","f_rest_8","f_rest_9","f_rest_10","f_rest_11","f_rest_12","f_rest_13","f_rest_14","f_rest_15","f_rest_16","f_rest_17","f_rest_18","f_rest_19","f_rest_20","f_rest_21","f_rest_22","f_rest_23","f_rest_24","f_rest_25","f_rest_26","f_rest_27","f_rest_28","f_rest_29","f_rest_30","f_rest_31","f_rest_32","f_rest_33","f_rest_34","f_rest_35","f_rest_36","f_rest_37","f_rest_38","f_rest_39","f_rest_40","f_rest_41","f_rest_42","f_rest_43","f_rest_44","f_rest_45"],tc=td.map((s,e)=>e),[Bu,Om,Nm,Hm,zm,km,Vm,Gm,Wm,jm,nc,nd,id,Lu]=tc,Fu=nc,Xm=nd,qm=id,pa=s=>{let e=(31744&s)>>10,t=1023&s;return(s>>15?-1:1)*(e?e===31?t?NaN:1/0:Math.pow(2,e-15)*(1+t/1024):t/1024*6103515625e-14)},ic=class s{static decodeSectionHeadersFromHeaderLines(e){let t=tc.reduce((h,u)=>(h[td[u]]=u,h),{}),n=ha.reduce((h,u)=>(h[ed[u]]=u,h),{}),i=ft.getHeaderSectionNames(e),r;for(let h=0;h<i.length;h++)i[h]==="codebook_centers"&&(r=h);let a=0,o=!1,l=[],c=0;for(;!o;){let h;c===r?h=ft.decodeSectionHeader(e,n,a):h=ft.decodeSectionHeader(e,t,a),o=h.endOfHeader,a=h.headerEndLine+1,o||(h.splatCount=h.vertexCount,h.bytesPerSplat=h.bytesPerVertex),l.push(h),c++}return l}static decodeSectionHeadersFromHeaderText(e){let t=ft.convertHeaderTextToLines(e);return s.decodeSectionHeadersFromHeaderLines(t)}static getSplatCountFromSectionHeaders(e){let t=0;for(let n of e)n.sectionName!=="codebook_centers"&&(t+=n.vertexCount);return t}static decodeHeaderFromHeaderText(e){let t=e.indexOf(ft.HeaderEndToken)+ft.HeaderEndToken.length+1,n=s.decodeSectionHeadersFromHeaderText(e),i=s.getSplatCountFromSectionHeaders(n);return{headerSizeBytes:t,sectionHeaders:n,splatCount:i}}static decodeHeaderFromBuffer(e){let t=ft.readHeaderFromBuffer(e);return s.decodeHeaderFromHeaderText(t)}static findVertexData(e,t,n){let i=t.headerSizeBytes;for(let r=0;r<n&&r<t.sectionHeaders.length;r++){let a=t.sectionHeaders[r];i+=a.dataSizeBytes}return new DataView(e,i,t.sectionHeaders[n].dataSizeBytes)}static decodeCodeBook(e,t){let n=[],i=[];for(let r=0;r<t.vertexCount;r++){ft.readVertex(e,t,r,0,ha,n);for(let a of ha){let o=ha[a],l=i[o];l||(i[o]=l=[]),l.push(n[a])}}for(let r=0;r<i.length;r++){let a=i[r],o=.28209479177387814;for(let l=0;l<a.length;l++){let c=pa(a[l]);r===Du?a[l]=Math.round(1/(1+Math.exp(-c))*255):r===ua?a[l]=Math.round((.5+o*c)*255):r===da?a[l]=Math.exp(c):a[l]=c}}return i}static decodeSectionSplatData(e,t,n,i,r){r=Math.min(r,n.sphericalHarmonicsDegree);let a=new ue(r);for(let o=0;o<t;o++){let l=s.parseToUncompressedSplat(e,o,n,i,0,r);a.addSplat(l)}return a}static parseToUncompressedSplat=(function(){let e=[],t=new Ve,n=ue.OFFSET.X,i=ue.OFFSET.Y,r=ue.OFFSET.Z,a=ue.OFFSET.SCALE0,o=ue.OFFSET.SCALE1,l=ue.OFFSET.SCALE2,c=ue.OFFSET.ROTATION0,h=ue.OFFSET.ROTATION1,u=ue.OFFSET.ROTATION2,d=ue.OFFSET.ROTATION3,p=ue.OFFSET.FDC0,f=ue.OFFSET.FDC1,g=ue.OFFSET.FDC2,m=ue.OFFSET.OPACITY,y=[];for(let v=0;v<45;v++)y[v]=ue.OFFSET.FRC0+v;return function(v,x,S,M,_=0,A=0){A=Math.min(A,S.sphericalHarmonicsDegree),s.readSplat(v,S,x,_,e);let T=ue.createSplat(A);if(e[Bu]!==void 0?(T[a]=M[da][e[Bu]],T[o]=M[da][e[Om]],T[l]=M[da][e[Nm]]):(T[a]=.01,T[o]=.01,T[l]=.01),e[nc]!==void 0?(T[p]=M[ua][e[nc]],T[f]=M[ua][e[nd]],T[g]=M[ua][e[id]]):e[Fu]!==void 0?(T[p]=e[Fu]*255,T[f]=e[Xm]*255,T[g]=e[qm]*255):(T[p]=0,T[f]=0,T[g]=0),e[Lu]!==void 0&&(T[m]=M[Du][e[Lu]]),T[p]=ct(Math.floor(T[p]),0,255),T[f]=ct(Math.floor(T[f]),0,255),T[g]=ct(Math.floor(T[g]),0,255),T[m]=ct(Math.floor(T[m]),0,255),A>=1&&S.sphericalHarmonicsDegree>=1){for(let z=0;z<9;z++){let U=M[Lm+z%3];T[y[z]]=U[e[S.sphericalHarmonicsDegree1Fields[z]]]}if(A>=2&&S.sphericalHarmonicsDegree>=2)for(let z=0;z<15;z++){let U=M[Fm+z%5];T[y[9+z]]=U[e[S.sphericalHarmonicsDegree2Fields[z]]]}}let I=M[Um][e[Hm]],P=M[Ql][e[zm]],D=M[Ql][e[km]],L=M[Ql][e[Vm]];return t.set(I,P,D,L),t.normalize(),T[c]=t.x,T[h]=t.y,T[u]=t.z,T[d]=t.w,T[n]=pa(e[Gm]),T[i]=pa(e[Wm]),T[r]=pa(e[jm]),T}})();static readSplat(e,t,n,i,r){return ft.readVertex(e,t,n,i,tc,r,!1)}static parseToUncompressedSplatArray(e,t=0){let n=[],i=s.decodeHeaderFromBuffer(e,t),r;for(let o=0;o<i.sectionHeaders.length;o++){let l=i.sectionHeaders[o];if(l.sectionName==="codebook_centers"){let c=s.findVertexData(e,i,o);r=s.decodeCodeBook(c,l)}}for(let o=0;o<i.sectionHeaders.length;o++){let l=i.sectionHeaders[o];if(l.sectionName!=="codebook_centers"){let c=l.vertexCount,h=s.findVertexData(e,i,o),u=s.decodeSectionSplatData(h,c,l,r,t);n.push(u)}}let a=new ue(t);for(let o of n)for(let l of o.splats)a.addSplat(l);return a}},ya=class{static parseToUncompressedSplatArray(e,t=0){let n=ft.determineHeaderFormatFromPlyBuffer(e);if(n===Ht.PlayCanvasCompressed)return In.parseToUncompressedSplatArray(e,t);if(n===Ht.INRIAV1)return Pn.parseToUncompressedSplatArray(e,t);if(n===Ht.INRIAV2)return ic.parseToUncompressedSplatArray(e,t)}static parseToUncompressedSplatBuffer(e,t=0){let n=ft.determineHeaderFormatFromPlyBuffer(e);if(n===Ht.PlayCanvasCompressed)return In.parseToUncompressedSplatBuffer(e,t);if(n===Ht.INRIAV1)return Pn.parseToUncompressedSplatBuffer(e,t);if(n===Ht.INRIAV2)throw new Error("parseToUncompressedSplatBuffer() is not implemented for INRIA V2 PLY files")}},sc=class s{constructor(e,t,n,i){this.sectionCount=e,this.sectionFilters=t,this.groupingParameters=n,this.partitionGenerator=i}partitionUncompressedSplatArray(e){let t,n,i;if(this.partitionGenerator){let a=this.partitionGenerator(e);t=a.groupingParameters,n=a.sectionCount,i=a.sectionFilters}else t=this.groupingParameters,n=this.sectionCount,i=this.sectionFilters;let r=[];for(let a=0;a<n;a++){let o=new ue(e.sphericalHarmonicsDegree),l=i[a];for(let c=0;c<e.splatCount;c++)l(c)&&o.addSplat(e.splats[c]);r.push(o)}return{splatArrays:r,parameters:t}}static getStandardPartitioner(e=0,t=new E,n=ye.BucketBlockSize,i=ye.BucketSize){let r=a=>{let o=ue.OFFSET.X,l=ue.OFFSET.Y,c=ue.OFFSET.Z;e<=0&&(e=a.splatCount);let h=new E,u=.5,d=y=>{y.x=Math.floor(y.x/u)*u,y.y=Math.floor(y.y/u)*u,y.z=Math.floor(y.z/u)*u};a.splats.forEach(y=>{h.set(y[o],y[l],y[c]).sub(t),d(h),y.centerDist=h.lengthSq()}),a.splats.sort((y,v)=>{let x=y.centerDist,S=v.centerDist;return x>S?1:-1});let p=[],f=[];e=Math.min(a.splatCount,e);let g=Math.ceil(a.splatCount/e),m=0;for(let y=0;y<g;y++){let v=m;p.push(x=>x>=v&&x<v+e),f.push({blocksSize:n,bucketSize:i}),m+=e}return{sectionCount:p.length,sectionFilters:p,groupingParameters:f}};return new s(void 0,void 0,void 0,r)}},qs=class s{constructor(e,t,n,i,r,a,o){this.splatPartitioner=e,this.alphaRemovalThreshold=t,this.compressionLevel=n,this.sectionSize=i,this.sceneCenter=r?new E().copy(r):void 0,this.blockSize=a,this.bucketSize=o}generateFromUncompressedSplatArray(e){let t=this.splatPartitioner.partitionUncompressedSplatArray(e);return ye.generateFromUncompressedSplatArrays(t.splatArrays,this.alphaRemovalThreshold,this.compressionLevel,this.sceneCenter,this.blockSize,this.bucketSize,t.parameters)}static getStandardGenerator(e=1,t=1,n=0,i=new E,r=ye.BucketBlockSize,a=ye.BucketSize){let o=sc.getStandardPartitioner(n,i,r,a);return new s(o,e,t,n,i,r,a)}},mt={Downloading:0,Processing:1,Done:2},ms=class extends Error{constructor(e){super(e)}},st={ProgressiveToSplatBuffer:0,ProgressiveToSplatArray:1,DownloadBeforeProcessing:2};function Uu(s,e){let t=0;for(let i of s)t+=i.sizeBytes;(!e||e.byteLength<t)&&(e=new ArrayBuffer(t));let n=0;for(let i of s)new Uint8Array(e,n,i.sizeBytes).set(i.data),n+=i.sizeBytes;return e}function Ou(s,e,t,n,i,r,a,o){return e?qs.getStandardGenerator(t,n,i,r,a,o).generateFromUncompressedSplatArray(s):ye.generateFromUncompressedSplatArrays([s],t,0,new E)}var rc=class s{static loadFromURL(e,t,n,i,r,a,o=!0,l=0,c,h,u,d,p){let f;!n&&!o?f=st.DownloadBeforeProcessing:o?f=st.ProgressiveToSplatArray:f=st.ProgressiveToSplatBuffer;let g=je.ProgressiveLoadSectionSize,m=ye.HeaderSizeBytes+ye.SectionHeaderSizeBytes,y=1,v,x,S,M,_,A=0,T=0,I=0,P=!1,D=!1,L=!1,z=Tc(),U=0,k=0,W=0,Q=0,q="",te=null,le=[],ee,re=new TextDecoder,ce=(de,oe,w)=>{let C=de>=100;if(w&&(le.push({data:w,sizeBytes:w.byteLength,startBytes:W,endBytes:W+w.byteLength}),W+=w.byteLength),f===st.DownloadBeforeProcessing)C&&z.resolve(le);else{if(P){if(v===Ht.PlayCanvasCompressed&&!D){let H=te.headerSizeBytes+te.chunkElement.storageSizeBytes;_=Uu(le,_),_.byteLength>=H&&(In.readElementData(te.chunkElement,_,te.headerSizeBytes),U=H,k=H,D=!0)}}else if(q+=re.decode(w),ft.checkTextForEndHeader(q)){if(v=ft.determineHeaderFormatFromHeaderText(q),v===Ht.INRIAV1)te=Pn.decodeHeaderText(q),l=Math.min(l,te.sphericalHarmonicsDegree),A=te.splatCount,D=!0,Q=te.headerSizeBytes+te.bytesPerSplat*A;else if(v===Ht.PlayCanvasCompressed){if(te=In.decodeHeaderText(q),l=Math.min(l,te.sphericalHarmonicsDegree),f===st.ProgressiveToSplatBuffer&&l>0)throw new ms("PlyLoader.loadFromURL() -> Selected PLY format has spherical harmonics data that cannot be progressively loaded.");A=te.vertexElement.count,Q=te.headerSizeBytes+te.bytesPerSplat*A+te.chunkElement.storageSizeBytes}else{if(f===st.ProgressiveToSplatBuffer)throw new ms("PlyLoader.loadFromURL() -> Selected PLY format cannot be progressively loaded.");f=st.DownloadBeforeProcessing;return}if(f===st.ProgressiveToSplatBuffer){let H=ye.CompressionLevels[0].SphericalHarmonicsDegrees[l],N=m+H.BytesPerSplat*A;S=new ArrayBuffer(N),ye.writeHeaderToBuffer({versionMajor:ye.CurrentMajorVersion,versionMinor:ye.CurrentMinorVersion,maxSectionCount:y,sectionCount:y,maxSplatCount:A,splatCount:0,compressionLevel:0,sceneCenter:new E},S)}else ee=new ue(l);U=te.headerSizeBytes,k=te.headerSizeBytes,P=!0}if(P&&D&&le.length>0&&(x=Uu(le,x),W-U>g||W>=Q&&!L||C)){let N=L?te.sphericalHarmonicsPerSplat:te.bytesPerSplat,O=(L?W:Math.min(Q,W))-k,b=Math.floor(O/N),F=b*N,V=W-k-F,J=k-le[0].startBytes,G=new DataView(x,J,F);if(L)v===Ht.PlayCanvasCompressed&&f===st.ProgressiveToSplatArray&&(In.parseSphericalHarmonicsToUncompressedSplatArraySection(te.chunkElement,te.shElement,I,I+b-1,G,0,l,te.sphericalHarmonicsDegree,ee),I+=b);else{if(f===st.ProgressiveToSplatBuffer){let ie=ye.CompressionLevels[0].SphericalHarmonicsDegrees[l],$=T*ie.BytesPerSplat+m;v===Ht.PlayCanvasCompressed?In.parseToUncompressedSplatBufferSection(te.chunkElement,te.vertexElement,0,b-1,T,G,S,$):Pn.parseToUncompressedSplatBufferSection(te,0,b-1,G,0,S,$,l)}else v===Ht.PlayCanvasCompressed?In.parseToUncompressedSplatArraySection(te.chunkElement,te.vertexElement,0,b-1,T,G,ee):Pn.parseToUncompressedSplatArraySection(te,0,b-1,G,0,ee,l);T+=b,f===st.ProgressiveToSplatBuffer&&(M||(ye.writeSectionHeaderToBuffer({maxSplatCount:A,splatCount:T,bucketSize:0,bucketCount:0,bucketBlockSize:0,compressionScaleRange:0,storageSizeBytes:0,fullBucketCount:0,partiallyFilledBucketCount:0,sphericalHarmonicsDegree:l},0,S,ye.HeaderSizeBytes),M=new ye(S,!1)),M.updateLoadedCounts(1,T)),W>=Q&&(L=!0)}if(V===0)le=[];else{let ie=[],$=0;for(let se=le.length-1;se>=0;se--){let fe=le[se];if($+=fe.sizeBytes,ie.unshift(fe),$>=V)break}le=ie}U+=g,k+=F}i&&M&&i(M,C),C&&(f===st.ProgressiveToSplatBuffer?z.resolve(M):z.resolve(ee))}t&&t(de,oe,mt.Downloading)};return t&&t(0,"0%",mt.Downloading),xa(e,ce,!1,c).then(()=>(t&&t(0,"0%",mt.Processing),z.promise.then(de=>{if(t&&t(100,"100%",mt.Done),f===st.DownloadBeforeProcessing){let oe=le.map(w=>w.data);return new Blob(oe).arrayBuffer().then(w=>s.loadFromFileData(w,r,a,o,l,h,u,d,p))}else return f===st.ProgressiveToSplatBuffer?de:Yt(()=>Ou(de,o,r,a,h,u,d,p))})))}static loadFromFileData(e,t,n,i,r=0,a,o,l,c){return i?Yt(()=>ya.parseToUncompressedSplatArray(e,r)).then(h=>Ou(h,i,t,n,a,o,l,c)):Yt(()=>ya.parseToUncompressedSplatBuffer(e,r))}},Ym=s=>new ReadableStream({async start(e){e.enqueue(s),e.close()}});async function Qm(s){try{let e=Ym(s);if(!e)throw new Error("Failed to create stream from data");return await Km(e)}catch(e){throw console.error("Error decompressing gzipped data:",e),e}}async function Km(s){let e=s.pipeThrough(new DecompressionStream("gzip")),n=await new Response(e).arrayBuffer();return new Uint8Array(n)}var Zm=1347635022,Jm=1,$m=.15;function eg(s){let e=s>>15&1,t=s>>10&31,n=s&1023,i=e===1?-1:1;return t===0?i*Math.pow(2,-14)*n/1024:t===31?n!==0?NaN:i*(1/0):i*Math.pow(2,t-15)*(1+n/1024)}function tg(s){return(s-128)/128}function Si(s){switch(s){case 0:return 0;case 1:return 3;case 2:return 8;case 3:return 15;default:return console.error(`[SPZ: ERROR] Unsupported SH degree: ${s}`),0}}var ng=(function(){let s=[],e=new Ve,t=ue.OFFSET.X,n=ue.OFFSET.Y,i=ue.OFFSET.Z,r=ue.OFFSET.SCALE0,a=ue.OFFSET.SCALE1,o=ue.OFFSET.SCALE2,l=ue.OFFSET.ROTATION0,c=ue.OFFSET.ROTATION1,h=ue.OFFSET.ROTATION2,u=ue.OFFSET.ROTATION3,d=ue.OFFSET.FDC0,p=ue.OFFSET.FDC1,f=ue.OFFSET.FDC2,g=ue.OFFSET.OPACITY,m=[];for(let x=0;x<45;x++)m[x]=ue.OFFSET.FRC0+x;let y=[Si(0),Si(1),Si(2),Si(3)],v=[0,1,2,9,10,11,12,13,24,25,26,27,28,29,30,3,4,5,14,15,16,17,18,31,32,33,34,35,36,37,6,7,8,19,20,21,22,23,38,39,40,41,42,43,44];return function(x,S,M){M=Math.min(S,M);let _=ue.createSplat(M);x.scale[0]!==void 0?(_[r]=x.scale[0],_[a]=x.scale[1],_[o]=x.scale[2]):(_[r]=.01,_[a]=.01,_[o]=.01),x.color[0]!==void 0?(_[d]=x.color[0],_[p]=x.color[1],_[f]=x.color[2]):s[RED]!==void 0?(_[d]=s[RED]*255,_[p]=s[GREEN]*255,_[f]=s[BLUE]*255):(_[d]=0,_[p]=0,_[f]=0),x.alpha!==void 0&&(_[g]=x.alpha),_[d]=ct(Math.floor(_[d]),0,255),_[p]=ct(Math.floor(_[p]),0,255),_[f]=ct(Math.floor(_[f]),0,255),_[g]=ct(Math.floor(_[g]),0,255);let A=y[M],T=y[S];for(let I=0;I<3;++I)for(let P=0;P<15;++P){let D=v[I*15+P];P<A&&P<T&&(_[ue.OFFSET.FRC0+D]=x.sh[I*T+P])}return e.set(x.rotation[3],x.rotation[0],x.rotation[1],x.rotation[2]),e.normalize(),_[l]=e.x,_[c]=e.y,_[h]=e.z,_[u]=e.w,_[t]=x.position[0],_[n]=x.position[1],_[i]=x.position[2],_}})();function ig(s,e,t,n){return!(s.positions.length!==e*3*(n?2:3)||s.scales.length!==e*3||s.rotations.length!==e*3||s.alphas.length!==e||s.colors.length!==e*3||s.sh.length!==e*t*3)}function Nu(s,e,t,n,i){e=Math.min(e,s.shDegree);let r=s.numPoints,a=Si(s.shDegree),o=s.positions.length===r*3*2;if(!ig(s,r,a,o))return null;let l={position:[],scale:[],rotation:[],alpha:void 0,color:[],sh:[]},c;o&&(c=new Uint16Array(s.positions.buffer,s.positions.byteOffset,r*3));let h=1/(1<<s.fractionalBits),u=Si(s.shDegree),d=.28209479177387814;for(let p=0;p<r;p++){if(o)for(let v=0;v<3;v++)l.position[v]=eg(c[p*3+v]);else for(let v=0;v<3;v++){let x=p*9+v*3,S=s.positions[x];S|=s.positions[x+1]<<8,S|=s.positions[x+2]<<16,S|=S&8388608?4278190080:0,l.position[v]=S*h}for(let v=0;v<3;v++)l.scale[v]=Math.exp(s.scales[p*3+v]/16-10);let f=s.rotations.subarray(p*3,p*3+3),g=[f[0]/127.5-1,f[1]/127.5-1,f[2]/127.5-1];l.rotation[0]=g[0],l.rotation[1]=g[1],l.rotation[2]=g[2];let m=g[0]*g[0]+g[1]*g[1]+g[2]*g[2];l.rotation[3]=Math.sqrt(Math.max(0,1-m)),l.alpha=Math.floor(s.alphas[p]);for(let v=0;v<3;v++)l.color[v]=Math.floor(((s.colors[p*3+v]/255-.5)/$m*d+.5)*255);for(let v=0;v<3;v++)for(let x=0;x<u;x++)l.sh[v*u+x]=tg(s.sh[u*3*p+x*3+v]);let y=ng(l,s.shDegree,e);if(t){let v=ye.CompressionLevels[0].SphericalHarmonicsDegrees[e].BytesPerSplat,x=p*v+i;ye.writeSplatDataToSectionBuffer(y,n,x,0,e)}else n.addSplat(y)}}var sg=16,rg=1e7;function ag(s){let e=new DataView(s),t=0,n={magic:e.getUint32(t,!0),version:e.getUint32(t+4,!0),numPoints:e.getUint32(t+8,!0),shDegree:e.getUint8(t+12),fractionalBits:e.getUint8(t+13),flags:e.getUint8(t+14),reserved:e.getUint8(t+15)};if(t+=sg,n.magic!==Zm)return console.error("[SPZ ERROR] deserializePackedGaussians: header not found"),null;if(n.version<1||n.version>2)return console.error(`[SPZ ERROR] deserializePackedGaussians: version not supported: ${n.version}`),null;if(n.numPoints>rg)return console.error(`[SPZ ERROR] deserializePackedGaussians: Too many points: ${n.numPoints}`),null;if(n.shDegree>3)return console.error(`[SPZ ERROR] deserializePackedGaussians: Unsupported SH degree: ${n.shDegree}`),null;let i=n.numPoints,r=Si(n.shDegree),a=n.version===1,o={numPoints:i,shDegree:n.shDegree,fractionalBits:n.fractionalBits,antialiased:(n.flags&Jm)!==0,positions:new Uint8Array(i*3*(a?2:3)),scales:new Uint8Array(i*3),rotations:new Uint8Array(i*3),alphas:new Uint8Array(i),colors:new Uint8Array(i*3),sh:new Uint8Array(i*r*3)};try{let l=new Uint8Array(s),c=o.positions.length,h=t;if(o.positions.set(l.slice(h,h+c)),h+=c,o.alphas.set(l.slice(h,h+o.alphas.length)),h+=o.alphas.length,o.colors.set(l.slice(h,h+o.colors.length)),h+=o.colors.length,o.scales.set(l.slice(h,h+o.scales.length)),h+=o.scales.length,o.rotations.set(l.slice(h,h+o.rotations.length)),h+=o.rotations.length,o.sh.set(l.slice(h,h+o.sh.length)),h+o.sh.length!==s.byteLength)return console.error("[SPZ ERROR] deserializePackedGaussians: incorrect buffer size"),null}catch(l){return console.error("[SPZ ERROR] deserializePackedGaussians: read error",l),null}return o}async function og(s){try{let e=await Qm(s);return ag(e.buffer)}catch(e){return console.error("[SPZ ERROR] loadSpzPacked: decompression error",e),null}}var ac=class s{static loadFromURL(e,t,n,i,r=!0,a=0,o,l,c,h,u){return t&&t(0,"0%",mt.Downloading),xa(e,t,!0,o).then(d=>(t&&t(0,"0%",mt.Processing),s.loadFromFileData(d,n,i,r,a,l,c,h,u)))}static async loadFromFileData(e,t,n,i,r=0,a,o,l,c){await Yt();let h=await og(e);r=Math.min(h.shDegree,r);let u=new ue(r);if(i)return Nu(h,r,!1,u,0),qs.getStandardGenerator(t,n,a,o,l,c).generateFromUncompressedSplatArray(u);{let{splatBuffer:d,splatBufferDataOffsetBytes:p}=ye.preallocateUncompressed(h.numPoints,r);return Nu(h,r,!0,d.bufferData,p),d}}},xi=class s{static RowSizeBytes=32;static CenterSizeBytes=12;static ScaleSizeBytes=12;static RotationSizeBytes=4;static ColorSizeBytes=4;static parseToUncompressedSplatBufferSection(e,t,n,i,r,a){let o=ye.CompressionLevels[0].BytesPerCenter,l=ye.CompressionLevels[0].BytesPerScale,c=ye.CompressionLevels[0].BytesPerRotation,h=ye.CompressionLevels[0].SphericalHarmonicsDegrees[0].BytesPerSplat;for(let u=e;u<=t;u++){let d=u*s.RowSizeBytes+i,p=new Float32Array(n,d,3),f=new Float32Array(n,d+s.CenterSizeBytes,3),g=new Uint8Array(n,d+s.CenterSizeBytes+s.ScaleSizeBytes,4),m=new Uint8Array(n,d+s.CenterSizeBytes+s.ScaleSizeBytes+s.RotationSizeBytes,4),y=new Ve((m[1]-128)/128,(m[2]-128)/128,(m[3]-128)/128,(m[0]-128)/128);y.normalize();let v=u*h+a,x=new Float32Array(r,v,3),S=new Float32Array(r,v+o,3),M=new Float32Array(r,v+o+l,4),_=new Uint8Array(r,v+o+l+c,4);x[0]=p[0],x[1]=p[1],x[2]=p[2],S[0]=f[0],S[1]=f[1],S[2]=f[2],M[0]=y.w,M[1]=y.x,M[2]=y.y,M[3]=y.z,_[0]=g[0],_[1]=g[1],_[2]=g[2],_[3]=g[3]}}static parseToUncompressedSplatArraySection(e,t,n,i,r){for(let a=e;a<=t;a++){let o=a*s.RowSizeBytes+i,l=new Float32Array(n,o,3),c=new Float32Array(n,o+s.CenterSizeBytes,3),h=new Uint8Array(n,o+s.CenterSizeBytes+s.ScaleSizeBytes,4),u=new Uint8Array(n,o+s.CenterSizeBytes+s.ScaleSizeBytes+s.RotationSizeBytes,4),d=new Ve((u[1]-128)/128,(u[2]-128)/128,(u[3]-128)/128,(u[0]-128)/128);d.normalize(),r.addSplatFromComonents(l[0],l[1],l[2],c[0],c[1],c[2],d.w,d.x,d.y,d.z,h[0],h[1],h[2],h[3])}}static parseStandardSplatToUncompressedSplatArray(e){let t=e.byteLength/s.RowSizeBytes,n=new ue;for(let i=0;i<t;i++){let r=i*s.RowSizeBytes,a=new Float32Array(e,r,3),o=new Float32Array(e,r+s.CenterSizeBytes,3),l=new Uint8Array(e,r+s.CenterSizeBytes+s.ScaleSizeBytes,4),c=new Uint8Array(e,r+s.CenterSizeBytes+s.ScaleSizeBytes+s.ColorSizeBytes,4),h=new Ve((c[1]-128)/128,(c[2]-128)/128,(c[3]-128)/128,(c[0]-128)/128);h.normalize(),n.addSplatFromComonents(a[0],a[1],a[2],o[0],o[1],o[2],h.w,h.x,h.y,h.z,l[0],l[1],l[2],l[3])}return n}};function Hu(s,e,t,n,i,r,a,o){return e?qs.getStandardGenerator(t,n,i,r,a,o).generateFromUncompressedSplatArray(s):ye.generateFromUncompressedSplatArrays([s],t,0,new E)}var oc=class s{static loadFromURL(e,t,n,i,r,a,o=!0,l,c,h,u,d){let p=n?st.ProgressiveToSplatBuffer:st.ProgressiveToSplatArray;o&&(p=st.ProgressiveToSplatArray);let f=ye.HeaderSizeBytes+ye.SectionHeaderSizeBytes,g=je.ProgressiveLoadSectionSize,m=1,y,v,x,S=0,M=0,_,A=Tc(),T=0,I=0,P=[],D=(L,z,U,k)=>{let W=L>=100;if(U&&P.push(U),p===st.DownloadBeforeProcessing){W&&A.resolve(P);return}if(!k){if(n)throw new ms("Cannon directly load .splat because no file size info is available.");p=st.DownloadBeforeProcessing;return}if(!y){S=k/xi.RowSizeBytes,y=new ArrayBuffer(k);let Q=ye.CompressionLevels[0].SphericalHarmonicsDegrees[0].BytesPerSplat,q=f+Q*S;p===st.ProgressiveToSplatBuffer?(v=new ArrayBuffer(q),ye.writeHeaderToBuffer({versionMajor:ye.CurrentMajorVersion,versionMinor:ye.CurrentMinorVersion,maxSectionCount:m,sectionCount:m,maxSplatCount:S,splatCount:M,compressionLevel:0,sceneCenter:new E},v)):_=new ue(0)}if(U){new Uint8Array(y,I,U.byteLength).set(new Uint8Array(U)),I+=U.byteLength;let Q=I-T;if(Q>g||W){let te=(W?Q:g)/xi.RowSizeBytes,le=M+te;p===st.ProgressiveToSplatBuffer?xi.parseToUncompressedSplatBufferSection(M,le-1,y,0,v,f):xi.parseToUncompressedSplatArraySection(M,le-1,y,0,_),M=le,p===st.ProgressiveToSplatBuffer&&(x||(ye.writeSectionHeaderToBuffer({maxSplatCount:S,splatCount:M,bucketSize:0,bucketCount:0,bucketBlockSize:0,compressionScaleRange:0,storageSizeBytes:0,fullBucketCount:0,partiallyFilledBucketCount:0},0,v,ye.HeaderSizeBytes),x=new ye(v,!1)),x.updateLoadedCounts(1,M),i&&i(x,W)),T+=g}}W&&(p===st.ProgressiveToSplatBuffer?A.resolve(x):A.resolve(_)),t&&t(L,z,mt.Downloading)};return t&&t(0,"0%",mt.Downloading),xa(e,D,!1,l).then(()=>(t&&t(0,"0%",mt.Processing),A.promise.then(L=>(t&&t(100,"100%",mt.Done),p===st.DownloadBeforeProcessing?new Blob(P).arrayBuffer().then(z=>s.loadFromFileData(z,r,a,o,c,h,u,d)):p===st.ProgressiveToSplatBuffer?L:Yt(()=>Hu(L,o,r,a,c,h,u,d))))))}static loadFromFileData(e,t,n,i,r,a,o,l){return Yt(()=>{let c=xi.parseStandardSplatToUncompressedSplatArray(e);return Hu(c,i,t,n,r,a,o,l)})}},lc=class s{static checkVersion(e){let t=ye.CurrentMajorVersion,n=ye.CurrentMinorVersion,i=ye.parseHeader(e);if(i.versionMajor===t&&i.versionMinor>=n||i.versionMajor>t)return!0;throw new Error(`KSplat version not supported: v${i.versionMajor}.${i.versionMinor}. Minimum required: v${t}.${n}`)}static loadFromURL(e,t,n,i,r){let a,o,l,c,h=!1,u=!1,d,p=[],f=!1,g=!1,m=0,y=0,v=0,x=!1,S=!1,M=!1,_=[],A=Tc(),T=()=>{!h&&!u&&m>=ye.HeaderSizeBytes&&(u=!0,new Blob(_).arrayBuffer().then(k=>{l=new ArrayBuffer(ye.HeaderSizeBytes),new Uint8Array(l).set(new Uint8Array(k,0,ye.HeaderSizeBytes)),s.checkVersion(l),u=!1,h=!0,c=ye.parseHeader(l),window.setTimeout(()=>{D()},1)}))},I=0,P=()=>{I===0&&(I++,window.setTimeout(()=>{I--,L()},1))},D=()=>{let U=()=>{g=!0,new Blob(_).arrayBuffer().then(W=>{g=!1,f=!0,d=new ArrayBuffer(c.maxSectionCount*ye.SectionHeaderSizeBytes),new Uint8Array(d).set(new Uint8Array(W,ye.HeaderSizeBytes,c.maxSectionCount*ye.SectionHeaderSizeBytes)),p=ye.parseSectionHeaders(c,d,0,!1);let Q=0;for(let te=0;te<c.maxSectionCount;te++)Q+=p[te].storageSizeBytes;let q=ye.HeaderSizeBytes+c.maxSectionCount*ye.SectionHeaderSizeBytes+Q;if(!a){a=new ArrayBuffer(q);let te=0;for(let le=0;le<_.length;le++){let ee=_[le];new Uint8Array(a,te,ee.byteLength).set(new Uint8Array(ee)),te+=ee.byteLength}}v=ye.HeaderSizeBytes+ye.SectionHeaderSizeBytes*c.maxSectionCount;for(let te=0;te<=p.length&&te<c.maxSectionCount;te++)v+=p[te].storageSizeBytes;P()})};!g&&!f&&h&&m>=ye.HeaderSizeBytes+ye.SectionHeaderSizeBytes*c.maxSectionCount&&U()},L=()=>{if(M)return;M=!0;let U=()=>{if(M=!1,f){if(S)return;if(x=m>=v,m-y>je.ProgressiveLoadSectionSize||x){y+=je.ProgressiveLoadSectionSize,S=y>=v,o||(o=new ye(a,!1));let W=ye.HeaderSizeBytes+ye.SectionHeaderSizeBytes*c.maxSectionCount,Q=0,q=0,te=0;for(let re=0;re<c.maxSectionCount;re++){let ce=p[re],de=Q+ce.partiallyFilledBucketCount*4+ce.bucketStorageSizeBytes*ce.bucketCount,oe=W+de;if(y>=oe){q++;let w=y-oe,N=ye.CompressionLevels[c.compressionLevel].SphericalHarmonicsDegrees[ce.sphericalHarmonicsDegree].BytesPerSplat,B=Math.floor(w/N);B=Math.min(B,ce.maxSplatCount),te+=B,o.updateLoadedCounts(q,te),o.updateSectionLoadedCounts(re,B)}else break;Q+=ce.storageSizeBytes}i(o,S);let le=y/v*100,ee=le.toFixed(2)+"%";t&&t(le,ee,mt.Downloading),S?A.resolve(o):L()}}};window.setTimeout(U,je.ProgressiveLoadSectionDelayDuration)};return xa(e,(U,k,W)=>{W&&(_.push(W),a&&new Uint8Array(a,m,W.byteLength).set(new Uint8Array(W)),m+=W.byteLength),n?(T(),D(),L()):t&&t(U,k,mt.Downloading)},!n,r).then(U=>(t&&t(0,"0%",mt.Processing),(n?A.promise:s.loadFromFileData(U)).then(W=>(t&&t(100,"100%",mt.Done),W))))}static loadFromFileData(e){return Yt(()=>(s.checkVersion(e),new ye(e)))}static downloadFile=(function(){let e;return function(t,n){let i=new Blob([t.bufferData],{type:"application/octet-stream"});e||(e=document.createElement("a"),document.body.appendChild(e)),e.download=n,e.href=URL.createObjectURL(i),e.click()}})()},Rt={Splat:0,KSplat:1,Ply:2,Spz:3},zu=s=>s.endsWith(".ply")?Rt.Ply:s.endsWith(".splat")?Rt.Splat:s.endsWith(".ksplat")?Rt.KSplat:s.endsWith(".spz")?Rt.Spz:null;var ku={type:"change"},Kl={type:"start"},Vu={type:"end"},fa=new gn,Gu=new jt,lg=Math.cos(70*rs.DEG2RAD),ds=class extends cn{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new E,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"KeyA",UP:"KeyW",RIGHT:"KeyD",BOTTOM:"KeyS"},this.mouseButtons={LEFT:At.ROTATE,MIDDLE:At.DOLLY,RIGHT:At.PAN},this.touches={ONE:bt.ROTATE,TWO:bt.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(j){j.addEventListener("keydown",Oe),this._domElementKeyEvents=j},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",Oe),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,this.clearDampedRotation(),this.clearDampedPan(),n.object.updateProjectionMatrix(),n.dispatchEvent(ku),n.update(),r=i.NONE},this.clearDampedRotation=function(){l.theta=0,l.phi=0},this.clearDampedPan=function(){h.set(0,0,0)},this.update=(function(){let j=new E,xe=new Ve().setFromUnitVectors(e.up,new E(0,1,0)),$e=xe.clone().invert(),We=new E,rt=new Ve,zt=new E,X=2*Math.PI;return function(){xe.setFromUnitVectors(e.up,new E(0,1,0)),$e.copy(xe).invert();let gs=n.object.position;j.copy(gs).sub(n.target),j.applyQuaternion(xe),o.setFromVector3(j),n.autoRotate&&r===i.NONE&&D(I()),n.enableDamping?(o.theta+=l.theta*n.dampingFactor,o.phi+=l.phi*n.dampingFactor):(o.theta+=l.theta,o.phi+=l.phi);let Ye=n.minAzimuthAngle,Qt=n.maxAzimuthAngle;isFinite(Ye)&&isFinite(Qt)&&(Ye<-Math.PI?Ye+=X:Ye>Math.PI&&(Ye-=X),Qt<-Math.PI?Qt+=X:Qt>Math.PI&&(Qt-=X),Ye<=Qt?o.theta=Math.max(Ye,Math.min(Qt,o.theta)):o.theta=o.theta>(Ye+Qt)/2?Math.max(Ye,o.theta):Math.min(Qt,o.theta)),o.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,o.phi)),o.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(h,n.dampingFactor):n.target.add(h),n.zoomToCursor&&_||n.object.isOrthographicCamera?o.radius=te(o.radius):o.radius=te(o.radius*c),j.setFromSpherical(o),j.applyQuaternion($e),gs.copy(n.target).add(j),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,h.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),h.set(0,0,0));let Kn=!1;if(n.zoomToCursor&&_){let Dn=null;if(n.object.isPerspectiveCamera){let Bn=j.length();Dn=te(Bn*c);let Zn=Bn-Dn;n.object.position.addScaledVector(S,Zn),n.object.updateMatrixWorld()}else if(n.object.isOrthographicCamera){let Bn=new E(M.x,M.y,0);Bn.unproject(n.object),n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),Kn=!0;let Zn=new E(M.x,M.y,0);Zn.unproject(n.object),n.object.position.sub(Zn).add(Bn),n.object.updateMatrixWorld(),Dn=j.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;Dn!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(Dn).add(n.object.position):(fa.origin.copy(n.object.position),fa.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(fa.direction))<lg?e.lookAt(n.target):(Gu.setFromNormalAndCoplanarPoint(n.object.up,n.target),fa.intersectPlane(Gu,n.target))))}else n.object.isOrthographicCamera&&(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),Kn=!0);return c=1,_=!1,Kn||We.distanceToSquared(n.object.position)>a||8*(1-rt.dot(n.object.quaternion))>a||zt.distanceToSquared(n.target)>0?(n.dispatchEvent(ku),We.copy(n.object.position),rt.copy(n.object.quaternion),zt.copy(n.target),Kn=!1,!0):!1}})(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",ke),n.domElement.removeEventListener("pointerdown",$),n.domElement.removeEventListener("pointercancel",fe),n.domElement.removeEventListener("wheel",Ce),n.domElement.removeEventListener("pointermove",se),n.domElement.removeEventListener("pointerup",fe),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",Oe),n._domElementKeyEvents=null)};let n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},r=i.NONE,a=1e-6,o=new Xn,l=new Xn,c=1,h=new E,u=new Z,d=new Z,p=new Z,f=new Z,g=new Z,m=new Z,y=new Z,v=new Z,x=new Z,S=new E,M=new Z,_=!1,A=[],T={};function I(){return 2*Math.PI/60/60*n.autoRotateSpeed}function P(){return Math.pow(.95,n.zoomSpeed)}function D(j){l.theta-=j}function L(j){l.phi-=j}let z=(function(){let j=new E;return function($e,We){j.setFromMatrixColumn(We,0),j.multiplyScalar(-$e),h.add(j)}})(),U=(function(){let j=new E;return function($e,We){n.screenSpacePanning===!0?j.setFromMatrixColumn(We,1):(j.setFromMatrixColumn(We,0),j.crossVectors(n.object.up,j)),j.multiplyScalar($e),h.add(j)}})(),k=(function(){let j=new E;return function($e,We){let rt=n.domElement;if(n.object.isPerspectiveCamera){let zt=n.object.position;j.copy(zt).sub(n.target);let X=j.length();X*=Math.tan(n.object.fov/2*Math.PI/180),z(2*$e*X/rt.clientHeight,n.object.matrix),U(2*We*X/rt.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(z($e*(n.object.right-n.object.left)/n.object.zoom/rt.clientWidth,n.object.matrix),U(We*(n.object.top-n.object.bottom)/n.object.zoom/rt.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}})();function W(j){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c/=j:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function Q(j){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c*=j:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function q(j){if(!n.zoomToCursor)return;_=!0;let xe=n.domElement.getBoundingClientRect(),$e=j.clientX-xe.left,We=j.clientY-xe.top,rt=xe.width,zt=xe.height;M.x=$e/rt*2-1,M.y=-(We/zt)*2+1,S.set(M.x,M.y,1).unproject(e).sub(e.position).normalize()}function te(j){return Math.max(n.minDistance,Math.min(n.maxDistance,j))}function le(j){u.set(j.clientX,j.clientY)}function ee(j){q(j),y.set(j.clientX,j.clientY)}function re(j){f.set(j.clientX,j.clientY)}function ce(j){d.set(j.clientX,j.clientY),p.subVectors(d,u).multiplyScalar(n.rotateSpeed);let xe=n.domElement;D(2*Math.PI*p.x/xe.clientHeight),L(2*Math.PI*p.y/xe.clientHeight),u.copy(d),n.update()}function de(j){v.set(j.clientX,j.clientY),x.subVectors(v,y),x.y>0?W(P()):x.y<0&&Q(P()),y.copy(v),n.update()}function oe(j){g.set(j.clientX,j.clientY),m.subVectors(g,f).multiplyScalar(n.panSpeed),k(m.x,m.y),f.copy(g),n.update()}function w(j){q(j),j.deltaY<0?Q(P()):j.deltaY>0&&W(P()),n.update()}function C(j){let xe=!1;switch(j.code){case n.keys.UP:j.ctrlKey||j.metaKey||j.shiftKey?L(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):k(0,n.keyPanSpeed),xe=!0;break;case n.keys.BOTTOM:j.ctrlKey||j.metaKey||j.shiftKey?L(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):k(0,-n.keyPanSpeed),xe=!0;break;case n.keys.LEFT:j.ctrlKey||j.metaKey||j.shiftKey?D(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):k(n.keyPanSpeed,0),xe=!0;break;case n.keys.RIGHT:j.ctrlKey||j.metaKey||j.shiftKey?D(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):k(-n.keyPanSpeed,0),xe=!0;break}xe&&(j.preventDefault(),n.update())}function H(){if(A.length===1)u.set(A[0].pageX,A[0].pageY);else{let j=.5*(A[0].pageX+A[1].pageX),xe=.5*(A[0].pageY+A[1].pageY);u.set(j,xe)}}function N(){if(A.length===1)f.set(A[0].pageX,A[0].pageY);else{let j=.5*(A[0].pageX+A[1].pageX),xe=.5*(A[0].pageY+A[1].pageY);f.set(j,xe)}}function B(){let j=A[0].pageX-A[1].pageX,xe=A[0].pageY-A[1].pageY,$e=Math.sqrt(j*j+xe*xe);y.set(0,$e)}function O(){n.enableZoom&&B(),n.enablePan&&N()}function b(){n.enableZoom&&B(),n.enableRotate&&H()}function F(j){if(A.length==1)d.set(j.pageX,j.pageY);else{let $e=De(j),We=.5*(j.pageX+$e.x),rt=.5*(j.pageY+$e.y);d.set(We,rt)}p.subVectors(d,u).multiplyScalar(n.rotateSpeed);let xe=n.domElement;D(2*Math.PI*p.x/xe.clientHeight),L(2*Math.PI*p.y/xe.clientHeight),u.copy(d)}function V(j){if(A.length===1)g.set(j.pageX,j.pageY);else{let xe=De(j),$e=.5*(j.pageX+xe.x),We=.5*(j.pageY+xe.y);g.set($e,We)}m.subVectors(g,f).multiplyScalar(n.panSpeed),k(m.x,m.y),f.copy(g)}function J(j){let xe=De(j),$e=j.pageX-xe.x,We=j.pageY-xe.y,rt=Math.sqrt($e*$e+We*We);v.set(0,rt),x.set(0,Math.pow(v.y/y.y,n.zoomSpeed)),W(x.y),y.copy(v)}function G(j){n.enableZoom&&J(j),n.enablePan&&V(j)}function ie(j){n.enableZoom&&J(j),n.enableRotate&&F(j)}function $(j){n.enabled!==!1&&(A.length===0&&(n.domElement.setPointerCapture(j.pointerId),n.domElement.addEventListener("pointermove",se),n.domElement.addEventListener("pointerup",fe)),qe(j),j.pointerType==="touch"?Fe(j):me(j))}function se(j){n.enabled!==!1&&(j.pointerType==="touch"?Ae(j):_e(j))}function fe(j){nt(j),A.length===0&&(n.domElement.releasePointerCapture(j.pointerId),n.domElement.removeEventListener("pointermove",se),n.domElement.removeEventListener("pointerup",fe)),n.dispatchEvent(Vu),r=i.NONE}function me(j){let xe;switch(j.button){case 0:xe=n.mouseButtons.LEFT;break;case 1:xe=n.mouseButtons.MIDDLE;break;case 2:xe=n.mouseButtons.RIGHT;break;default:xe=-1}switch(xe){case At.DOLLY:if(n.enableZoom===!1)return;ee(j),r=i.DOLLY;break;case At.ROTATE:if(j.ctrlKey||j.metaKey||j.shiftKey){if(n.enablePan===!1)return;re(j),r=i.PAN}else{if(n.enableRotate===!1)return;le(j),r=i.ROTATE}break;case At.PAN:if(j.ctrlKey||j.metaKey||j.shiftKey){if(n.enableRotate===!1)return;le(j),r=i.ROTATE}else{if(n.enablePan===!1)return;re(j),r=i.PAN}break;default:r=i.NONE}r!==i.NONE&&n.dispatchEvent(Kl)}function _e(j){switch(r){case i.ROTATE:if(n.enableRotate===!1)return;ce(j);break;case i.DOLLY:if(n.enableZoom===!1)return;de(j);break;case i.PAN:if(n.enablePan===!1)return;oe(j);break}}function Ce(j){n.enabled===!1||n.enableZoom===!1||r!==i.NONE||(j.preventDefault(),n.dispatchEvent(Kl),w(j),n.dispatchEvent(Vu))}function Oe(j){n.enabled===!1||n.enablePan===!1||C(j)}function Fe(j){switch(Se(j),A.length){case 1:switch(n.touches.ONE){case bt.ROTATE:if(n.enableRotate===!1)return;H(),r=i.TOUCH_ROTATE;break;case bt.PAN:if(n.enablePan===!1)return;N(),r=i.TOUCH_PAN;break;default:r=i.NONE}break;case 2:switch(n.touches.TWO){case bt.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;O(),r=i.TOUCH_DOLLY_PAN;break;case bt.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;b(),r=i.TOUCH_DOLLY_ROTATE;break;default:r=i.NONE}break;default:r=i.NONE}r!==i.NONE&&n.dispatchEvent(Kl)}function Ae(j){switch(Se(j),r){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;F(j),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;V(j),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;G(j),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;ie(j),n.update();break;default:r=i.NONE}}function ke(j){n.enabled!==!1&&j.preventDefault()}function qe(j){A.push(j)}function nt(j){delete T[j.pointerId];for(let xe=0;xe<A.length;xe++)if(A[xe].pointerId==j.pointerId){A.splice(xe,1);return}}function Se(j){let xe=T[j.pointerId];xe===void 0&&(xe=new Z,T[j.pointerId]=xe),xe.set(j.pageX,j.pageY)}function De(j){let xe=j.pointerId===A[0].pointerId?A[1]:A[0];return T[xe.pointerId]}n.domElement.addEventListener("contextmenu",ke),n.domElement.addEventListener("pointerdown",$),n.domElement.addEventListener("pointercancel",fe),n.domElement.addEventListener("wheel",Ce,{passive:!1}),this.update()}},cg=(s,e,t,n,i)=>{let r=performance.now(),a=s.style.display==="none"?0:parseFloat(s.style.opacity);isNaN(a)&&(a=1);let o=window.setInterval(()=>{let c=performance.now()-r,h=Math.min(c/n,1);h>.999&&(h=1);let u;e?(u=(1-h)*a,u<1e-4&&(u=0)):u=(1-a)*h+a,u>0?(s.style.display=t,s.style.opacity=u):s.style.display="none",h>=1&&(i&&i(),window.clearInterval(o))},16);return o};var hg=500,cc=class s{static elementIDGen=0;constructor(e,t){this.taskIDGen=0,this.elementID=s.elementIDGen++,this.tasks=[],this.message=e||"Loading...",this.container=t||document.body,this.spinnerContainerOuter=document.createElement("div"),this.spinnerContainerOuter.className=`spinnerOuterContainer${this.elementID}`,this.spinnerContainerOuter.style.display="none",this.spinnerContainerPrimary=document.createElement("div"),this.spinnerContainerPrimary.className=`spinnerContainerPrimary${this.elementID}`,this.spinnerPrimary=document.createElement("div"),this.spinnerPrimary.classList.add(`spinner${this.elementID}`,`spinnerPrimary${this.elementID}`),this.messageContainerPrimary=document.createElement("div"),this.messageContainerPrimary.classList.add(`messageContainer${this.elementID}`,`messageContainerPrimary${this.elementID}`),this.messageContainerPrimary.innerHTML=this.message,this.spinnerContainerMin=document.createElement("div"),this.spinnerContainerMin.className=`spinnerContainerMin${this.elementID}`,this.spinnerMin=document.createElement("div"),this.spinnerMin.classList.add(`spinner${this.elementID}`,`spinnerMin${this.elementID}`),this.messageContainerMin=document.createElement("div"),this.messageContainerMin.classList.add(`messageContainer${this.elementID}`,`messageContainerMin${this.elementID}`),this.messageContainerMin.innerHTML=this.message,this.spinnerContainerPrimary.appendChild(this.spinnerPrimary),this.spinnerContainerPrimary.appendChild(this.messageContainerPrimary),this.spinnerContainerOuter.appendChild(this.spinnerContainerPrimary),this.spinnerContainerMin.appendChild(this.spinnerMin),this.spinnerContainerMin.appendChild(this.messageContainerMin),this.spinnerContainerOuter.appendChild(this.spinnerContainerMin);let n=document.createElement("style");n.innerHTML=`

            .spinnerOuterContainer${this.elementID} {
                width: 100%;
                height: 100%;
                margin: 0;
                top: 0;
                left: 0;
                position: absolute;
                pointer-events: none;
            }

            .messageContainer${this.elementID} {
                height: 20px;
                font-family: arial;
                font-size: 12pt;
                color: #ffffff;
                text-align: center;
                vertical-align: middle;
            }

            .spinner${this.elementID} {
                padding: 15px;
                background: #07e8d6;
                z-index:99999;
            
                aspect-ratio: 1;
                border-radius: 50%;
                --_m: 
                    conic-gradient(#0000,#000),
                    linear-gradient(#000 0 0) content-box;
                -webkit-mask: var(--_m);
                    mask: var(--_m);
                -webkit-mask-composite: source-out;
                    mask-composite: subtract;
                box-sizing: border-box;
                animation: load 1s linear infinite;
            }

            .spinnerContainerPrimary${this.elementID} {
                z-index:99999;
                background-color: rgba(128, 128, 128, 0.75);
                border: #666666 1px solid;
                border-radius: 5px;
                padding-top: 20px;
                padding-bottom: 10px;
                margin: 0;
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-80px, -80px);
                width: 180px;
                pointer-events: auto;
            }

            .spinnerPrimary${this.elementID} {
                width: 120px;
                margin-left: 30px;
            }

            .messageContainerPrimary${this.elementID} {
                padding-top: 15px;
            }

            .spinnerContainerMin${this.elementID} {
                z-index:99999;
                background-color: rgba(128, 128, 128, 0.75);
                border: #666666 1px solid;
                border-radius: 5px;
                padding-top: 20px;
                padding-bottom: 15px;
                margin: 0;
                position: absolute;
                bottom: 50px;
                left: 50%;
                transform: translate(-50%, 0);
                display: flex;
                flex-direction: left;
                pointer-events: auto;
                min-width: 250px;
            }

            .messageContainerMin${this.elementID} {
                margin-right: 15px;
            }

            .spinnerMin${this.elementID} {
                width: 50px;
                height: 50px;
                margin-left: 15px;
                margin-right: 25px;
            }

            .messageContainerMin${this.elementID} {
                padding-top: 15px;
            }
            
            @keyframes load {
                to{transform: rotate(1turn)}
            }

        `,this.spinnerContainerOuter.appendChild(n),this.container.appendChild(this.spinnerContainerOuter),this.setMinimized(!1,!0),this.fadeTransitions=[]}addTask(e){let t={message:e,id:this.taskIDGen++};return this.tasks.push(t),this.update(),t.id}removeTask(e){let t=0;for(let n of this.tasks){if(n.id===e){this.tasks.splice(t,1);break}t++}this.update()}removeAllTasks(){this.tasks=[],this.update()}setMessageForTask(e,t){for(let n of this.tasks)if(n.id===e){n.message=t;break}this.update()}update(){this.tasks.length>0?(this.show(),this.setMessage(this.tasks[this.tasks.length-1].message)):this.hide()}show(){this.spinnerContainerOuter.style.display="block",this.visible=!0}hide(){this.spinnerContainerOuter.style.display="none",this.visible=!1}setContainer(e){this.container&&this.spinnerContainerOuter.parentElement===this.container&&this.container.removeChild(this.spinnerContainerOuter),e&&(this.container=e,this.container.appendChild(this.spinnerContainerOuter),this.spinnerContainerOuter.style.zIndex=this.container.style.zIndex+1)}setMinimized(e,t){let n=(i,r,a,o,l)=>{a?i.style.display=r?o:"none":this.fadeTransitions[l]=cg(i,!r,o,hg,()=>{this.fadeTransitions[l]=null})};n(this.spinnerContainerPrimary,!e,t,"block",0),n(this.spinnerContainerMin,e,t,"flex",1),this.minimized=e}setMessage(e){this.messageContainerPrimary.innerHTML=e,this.messageContainerMin.innerHTML=e}},hc=class{constructor(e){this.idGen=0,this.tasks=[],this.container=e||document.body,this.progressBarContainerOuter=document.createElement("div"),this.progressBarContainerOuter.className="progressBarOuterContainer",this.progressBarContainerOuter.style.display="none",this.progressBarBox=document.createElement("div"),this.progressBarBox.className="progressBarBox",this.progressBarBackground=document.createElement("div"),this.progressBarBackground.className="progressBarBackground",this.progressBar=document.createElement("div"),this.progressBar.className="progressBar",this.progressBarBackground.appendChild(this.progressBar),this.progressBarBox.appendChild(this.progressBarBackground),this.progressBarContainerOuter.appendChild(this.progressBarBox);let t=document.createElement("style");t.innerHTML=`

            .progressBarOuterContainer {
                width: 100%;
                height: 100%;
                margin: 0;
                top: 0;
                left: 0;
                position: absolute;
                pointer-events: none;
            }

            .progressBarBox {
                z-index:99999;
                padding: 7px 9px 5px 7px;
                background-color: rgba(190, 190, 190, 0.75);
                border: #555555 1px solid;
                border-radius: 15px;
                margin: 0;
                position: absolute;
                bottom: 50px;
                left: 50%;
                transform: translate(-50%, 0);
                width: 180px;
                height: 30px;
                pointer-events: auto;
            }

            .progressBarBackground {
                width: 100%;
                height: 25px;
                border-radius:10px;
                background-color: rgba(128, 128, 128, 0.75);
                border: #444444 1px solid;
                box-shadow: inset 0 0 10px #333333;
            }

            .progressBar {
                height: 25px;
                width: 0px;
                border-radius:10px;
                background-color: rgba(0, 200, 0, 0.75);
                box-shadow: inset 0 0 10px #003300;
            }

        `,this.progressBarContainerOuter.appendChild(t),this.container.appendChild(this.progressBarContainerOuter)}show(){this.progressBarContainerOuter.style.display="block"}hide(){this.progressBarContainerOuter.style.display="none"}setProgress(e){this.progressBar.style.width=e+"%"}setContainer(e){this.container&&this.progressBarContainerOuter.parentElement===this.container&&this.container.removeChild(this.progressBarContainerOuter),e&&(this.container=e,this.container.appendChild(this.progressBarContainerOuter),this.progressBarContainerOuter.style.zIndex=this.container.style.zIndex+1)}},uc=class{constructor(e){this.container=e||document.body,this.infoCells={};let t=[["Camera position","cameraPosition"],["Camera look-at","cameraLookAt"],["Camera up","cameraUp"],["Camera mode","orthographicCamera"],["Cursor position","cursorPosition"],["FPS","fps"],["Rendering:","renderSplatCount"],["Sort time","sortTime"],["Render window","renderWindow"],["Focal adjustment","focalAdjustment"],["Splat scale","splatScale"],["Point cloud mode","pointCloudMode"]];this.infoPanelContainer=document.createElement("div");let n=document.createElement("style");n.innerHTML=`

            .infoPanel {
                width: 430px;
                padding: 10px;
                background-color: rgba(50, 50, 50, 0.85);
                border: #555555 2px solid;
                color: #dddddd;
                border-radius: 10px;
                z-index: 9999;
                font-family: arial;
                font-size: 11pt;
                text-align: left;
                margin: 0;
                top: 10px;
                left:10px;
                position: absolute;
                pointer-events: auto;
            }

            .info-panel-cell {
                margin-bottom: 5px;
                padding-bottom: 2px;
            }

            .label-cell {
                font-weight: bold;
                font-size: 12pt;
                width: 140px;
            }

        `,this.infoPanelContainer.append(n),this.infoPanel=document.createElement("div"),this.infoPanel.className="infoPanel";let i=document.createElement("div");i.style.display="table";for(let r of t){let a=document.createElement("div");a.style.display="table-row",a.className="info-panel-row";let o=document.createElement("div");o.style.display="table-cell",o.innerHTML=`${r[0]}: `,o.classList.add("info-panel-cell","label-cell");let l=document.createElement("div");l.style.display="table-cell",l.style.width="10px",l.innerHTML=" ",l.className="info-panel-cell";let c=document.createElement("div");c.style.display="table-cell",c.innerHTML="",c.className="info-panel-cell",this.infoCells[r[1]]=c,a.appendChild(o),a.appendChild(l),a.appendChild(c),i.appendChild(a)}this.infoPanel.appendChild(i),this.infoPanelContainer.append(this.infoPanel),this.infoPanelContainer.style.display="none",this.container.appendChild(this.infoPanelContainer),this.visible=!1}update=function(e,t,n,i,r,a,o,l,c,h,u,d,p,f){let g=`${t.x.toFixed(5)}, ${t.y.toFixed(5)}, ${t.z.toFixed(5)}`;if(this.infoCells.cameraPosition.innerHTML!==g&&(this.infoCells.cameraPosition.innerHTML=g),n){let y=n,v=`${y.x.toFixed(5)}, ${y.y.toFixed(5)}, ${y.z.toFixed(5)}`;this.infoCells.cameraLookAt.innerHTML!==v&&(this.infoCells.cameraLookAt.innerHTML=v)}let m=`${i.x.toFixed(5)}, ${i.y.toFixed(5)}, ${i.z.toFixed(5)}`;if(this.infoCells.cameraUp.innerHTML!==m&&(this.infoCells.cameraUp.innerHTML=m),this.infoCells.orthographicCamera.innerHTML=r?"Orthographic":"Perspective",a){let y=a,v=`${y.x.toFixed(5)}, ${y.y.toFixed(5)}, ${y.z.toFixed(5)}`;this.infoCells.cursorPosition.innerHTML=v}else this.infoCells.cursorPosition.innerHTML="N/A";this.infoCells.fps.innerHTML=o,this.infoCells.renderWindow.innerHTML=`${e.x} x ${e.y}`,this.infoCells.renderSplatCount.innerHTML=`${c} splats out of ${l} (${h.toFixed(2)}%)`,this.infoCells.sortTime.innerHTML=`${u.toFixed(3)} ms`,this.infoCells.focalAdjustment.innerHTML=`${d.toFixed(3)}`,this.infoCells.splatScale.innerHTML=`${p.toFixed(3)}`,this.infoCells.pointCloudMode.innerHTML=`${f}`};setContainer(e){this.container&&this.infoPanelContainer.parentElement===this.container&&this.container.removeChild(this.infoPanelContainer),e&&(this.container=e,this.container.appendChild(this.infoPanelContainer),this.infoPanelContainer.style.zIndex=this.container.style.zIndex+1)}show(){this.infoPanelContainer.style.display="block",this.visible=!0}hide(){this.infoPanelContainer.style.display="none",this.visible=!1}},Wu=new E,dc=class extends xt{constructor(e=new E(0,0,1),t=new E(0,0,0),n=1,i=.1,r=16776960,a=n*.2,o=a*.2){super(),this.type="ArrowHelper";let l=new fi(i,i,n,32);l.translate(0,n/2,0);let c=new fi(0,o,a,32);c.translate(0,n,0),this.position.copy(t),this.line=new tt(l,new yn({color:r,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new tt(c,new yn({color:r,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(e)}setDirection(e){if(e.y>.99999)this.quaternion.set(0,0,0,1);else if(e.y<-.99999)this.quaternion.set(1,0,0,0);else{Wu.set(e.z,0,-e.x).normalize();let t=Math.acos(e.y);this.quaternion.setFromAxisAngle(Wu,t)}}setColor(e){this.line.material.color.set(e),this.cone.material.color.set(e)}copy(e){return super.copy(e,!1),this.line.copy(e.line),this.cone.copy(e.cone),this}dispose(){this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}},pc=class s{constructor(e){this.threeScene=e,this.splatRenderTarget=null,this.renderTargetCopyQuad=null,this.renderTargetCopyCamera=null,this.meshCursor=null,this.focusMarker=null,this.controlPlane=null,this.debugRoot=null,this.secondaryDebugRoot=null}updateSplatRenderTargetForRenderDimensions(e,t){this.destroySplatRendertarget(),this.splatRenderTarget=new hn(e,t,{format:Ot,stencilBuffer:!1,depthBuffer:!0}),this.splatRenderTarget.depthTexture=new $i(e,t),this.splatRenderTarget.depthTexture.format=di,this.splatRenderTarget.depthTexture.type=qt}destroySplatRendertarget(){this.splatRenderTarget&&(this.splatRenderTarget=null)}setupRenderTargetCopyObjects(){let e={sourceColorTexture:{type:"t",value:null},sourceDepthTexture:{type:"t",value:null}},t=new Bt({vertexShader:`
                varying vec2 vUv;
                void main() {
                    vUv = uv;
                    gl_Position = vec4( position.xy, 0.0, 1.0 );    
                }
            `,fragmentShader:`
                #include <common>
                #include <packing>
                varying vec2 vUv;
                uniform sampler2D sourceColorTexture;
                uniform sampler2D sourceDepthTexture;
                void main() {
                    vec4 color = texture2D(sourceColorTexture, vUv);
                    float fragDepth = texture2D(sourceDepthTexture, vUv).x;
                    gl_FragDepth = fragDepth;
                    gl_FragColor = vec4(color.rgb, color.a * 2.0);
              }
            `,uniforms:e,depthWrite:!1,depthTest:!1,transparent:!0,blending:Zh,blendSrc:Wi,blendSrcAlpha:Wi,blendDst:ji,blendDstAlpha:ji});t.extensions.fragDepth=!0,this.renderTargetCopyQuad=new tt(new jn(2,2),t),this.renderTargetCopyCamera=new Ji(-1,1,1,-1,0,1)}destroyRenderTargetCopyObjects(){this.renderTargetCopyQuad&&(us(this.renderTargetCopyQuad),this.renderTargetCopyQuad=null)}setupMeshCursor(){if(!this.meshCursor){let e=new Ns(.5,1.5,32),t=new yn({color:16777215}),n=new tt(e,t);n.rotation.set(0,0,Math.PI),n.position.set(0,1,0);let i=new tt(e,t);i.position.set(0,-1,0);let r=new tt(e,t);r.rotation.set(0,0,Math.PI/2),r.position.set(1,0,0);let a=new tt(e,t);a.rotation.set(0,0,-Math.PI/2),a.position.set(-1,0,0),this.meshCursor=new xt,this.meshCursor.add(n),this.meshCursor.add(i),this.meshCursor.add(r),this.meshCursor.add(a),this.meshCursor.scale.set(.1,.1,.1),this.threeScene.add(this.meshCursor),this.meshCursor.visible=!1}}destroyMeshCursor(){this.meshCursor&&(us(this.meshCursor),this.threeScene.remove(this.meshCursor),this.meshCursor=null)}setMeshCursorVisibility(e){this.meshCursor.visible=e}getMeschCursorVisibility(){return this.meshCursor.visible}setMeshCursorPosition(e){this.meshCursor.position.copy(e)}positionAndOrientMeshCursor(e,t){this.meshCursor.position.copy(e),this.meshCursor.up.copy(t.up),this.meshCursor.lookAt(t.position)}setupFocusMarker(){if(!this.focusMarker){let e=new ns(.5,32,32),t=s.buildFocusMarkerMaterial();t.depthTest=!1,t.depthWrite=!1,t.transparent=!0,this.focusMarker=new tt(e,t)}}destroyFocusMarker(){this.focusMarker&&(us(this.focusMarker),this.focusMarker=null)}updateFocusMarker=(function(){let e=new E,t=new ge,n=new E;return function(i,r,a){t.copy(r.matrixWorld).invert(),e.copy(i).applyMatrix4(t),e.normalize().multiplyScalar(10),e.applyMatrix4(r.matrixWorld),n.copy(r.position).sub(i);let o=n.length();this.focusMarker.position.copy(i),this.focusMarker.scale.set(o,o,o),this.focusMarker.material.uniforms.realFocusPosition.value.copy(i),this.focusMarker.material.uniforms.viewport.value.copy(a),this.focusMarker.material.uniformsNeedUpdate=!0}})();setFocusMarkerVisibility(e){this.focusMarker.visible=e}setFocusMarkerOpacity(e){this.focusMarker.material.uniforms.opacity.value=e,this.focusMarker.material.uniformsNeedUpdate=!0}getFocusMarkerOpacity(){return this.focusMarker.material.uniforms.opacity.value}setupControlPlane(){if(!this.controlPlane){let e=new jn(1,1);e.rotateX(-Math.PI/2);let t=new yn({color:16777215});t.transparent=!0,t.opacity=.6,t.depthTest=!1,t.depthWrite=!1,t.side=Vs;let n=new tt(e,t),i=new E(0,1,0);i.normalize();let r=new E(0,0,0),a=.5,o=.01,l=56576,c=new dc(i,r,a,o,l,.1,.03);this.controlPlane=new xt,this.controlPlane.add(n),this.controlPlane.add(c)}}destroyControlPlane(){this.controlPlane&&(us(this.controlPlane),this.controlPlane=null)}setControlPlaneVisibility(e){this.controlPlane.visible=e}positionAndOrientControlPlane=(function(){let e=new Ve,t=new E(0,1,0);return function(n,i){e.setFromUnitVectors(t,i),this.controlPlane.position.copy(n),this.controlPlane.quaternion.copy(e)}})();addDebugMeshes(){this.debugRoot=this.createDebugMeshes(),this.secondaryDebugRoot=this.createSecondaryDebugMeshes(),this.threeScene.add(this.debugRoot),this.threeScene.add(this.secondaryDebugRoot)}destroyDebugMeshes(){for(let e of[this.debugRoot,this.secondaryDebugRoot])e&&(us(e),this.threeScene.remove(e));this.debugRoot=null,this.secondaryDebugRoot=null}createDebugMeshes(e){let t=new ns(1,32,32),n=new xt,i=(r,a)=>{let o=new tt(t,s.buildDebugMaterial(r));o.renderOrder=e,n.add(o),o.position.fromArray(a)};return i(16711680,[-50,0,0]),i(16711680,[50,0,0]),i(65280,[0,0,-50]),i(65280,[0,0,50]),i(16755200,[5,0,5]),n}createSecondaryDebugMeshes(e){let t=new Wn(3,3,3),n=new xt,i=12303291,r=o=>{let l=new tt(t,s.buildDebugMaterial(i));l.renderOrder=e,n.add(l),l.position.fromArray(o)},a=10;return r([-a,0,-a]),r([-a,0,a]),r([a,0,-a]),r([a,0,a]),n}static buildDebugMaterial(e){let t=`
            #include <common>
            varying float ndcDepth;

            void main() {
                gl_Position = projectionMatrix * viewMatrix * modelMatrix * vec4(position.xyz, 1.0);
                ndcDepth = gl_Position.z / gl_Position.w;
                gl_Position.x = gl_Position.x / gl_Position.w;
                gl_Position.y = gl_Position.y / gl_Position.w;
                gl_Position.z = 0.0;
                gl_Position.w = 1.0;
    
            }
        `,n=`
            #include <common>
            uniform vec3 color;
            varying float ndcDepth;
            void main() {
                gl_FragDepth = (ndcDepth + 1.0) / 2.0;
                gl_FragColor = vec4(color.rgb, 0.0);
            }
        `,i={color:{type:"v3",value:new Pe(e)}},r=new Bt({uniforms:i,vertexShader:t,fragmentShader:n,transparent:!1,depthTest:!0,depthWrite:!0,side:na});return r.extensions.fragDepth=!0,r}static buildFocusMarkerMaterial(e){let t=`
            #include <common>

            uniform vec2 viewport;
            uniform vec3 realFocusPosition;

            varying vec4 ndcPosition;
            varying vec4 ndcCenter;
            varying vec4 ndcFocusPosition;

            void main() {
                float radius = 0.01;

                vec4 viewPosition = modelViewMatrix * vec4(position.xyz, 1.0);
                vec4 viewCenter = modelViewMatrix * vec4(0.0, 0.0, 0.0, 1.0);

                vec4 viewFocusPosition = modelViewMatrix * vec4(realFocusPosition, 1.0);

                ndcPosition = projectionMatrix * viewPosition;
                ndcPosition = ndcPosition * vec4(1.0 / ndcPosition.w);
                ndcCenter = projectionMatrix * viewCenter;
                ndcCenter = ndcCenter * vec4(1.0 / ndcCenter.w);

                ndcFocusPosition = projectionMatrix * viewFocusPosition;
                ndcFocusPosition = ndcFocusPosition * vec4(1.0 / ndcFocusPosition.w);

                gl_Position = projectionMatrix * viewPosition;

            }
        `,n=`
            #include <common>
            uniform vec3 color;
            uniform vec2 viewport;
            uniform float opacity;

            varying vec4 ndcPosition;
            varying vec4 ndcCenter;
            varying vec4 ndcFocusPosition;

            void main() {
                vec2 screenPosition = vec2(ndcPosition) * viewport;
                vec2 screenCenter = vec2(ndcCenter) * viewport;

                vec2 screenVec = screenPosition - screenCenter;

                float projectedRadius = length(screenVec);

                float lineWidth = 0.0005 * viewport.y;
                float aaRange = 0.0025 * viewport.y;
                float radius = 0.06 * viewport.y;
                float radDiff = abs(projectedRadius - radius) - lineWidth;
                float alpha = 1.0 - clamp(radDiff / 5.0, 0.0, 1.0); 

                gl_FragColor = vec4(color.rgb, alpha * opacity);
            }
        `,i={color:{type:"v3",value:new Pe(e)},realFocusPosition:{type:"v3",value:new E},viewport:{type:"v2",value:new Z},opacity:{value:0}};return new Bt({uniforms:i,vertexShader:t,fragmentShader:n,transparent:!0,depthTest:!1,depthWrite:!1,side:na})}dispose(){this.destroyMeshCursor(),this.destroyFocusMarker(),this.destroyDebugMeshes(),this.destroyControlPlane(),this.destroyRenderTargetCopyObjects(),this.destroySplatRendertarget()}},ug=new E(1,0,0),dg=new E(0,1,0),pg=new E(0,0,1),js=class{constructor(e=new E,t=new E){this.origin=new E,this.direction=new E,this.setParameters(e,t)}setParameters(e,t){this.origin.copy(e),this.direction.copy(t).normalize()}boxContainsPoint(e,t,n){return!(t.x<e.min.x-n||t.x>e.max.x+n||t.y<e.min.y-n||t.y>e.max.y+n||t.z<e.min.z-n||t.z>e.max.z+n)}intersectBox=(function(){let e=new E,t=[],n=[],i=[];return function(r,a){if(n[0]=this.origin.x,n[1]=this.origin.y,n[2]=this.origin.z,i[0]=this.direction.x,i[1]=this.direction.y,i[2]=this.direction.z,this.boxContainsPoint(r,this.origin,1e-4))return a&&(a.origin.copy(this.origin),a.normal.set(0,0,0),a.distance=-1),!0;for(let o=0;o<3;o++){if(i[o]==0)continue;let l=o==0?ug:o==1?dg:pg,c=i[o]<0?r.max:r.min,h=-Math.sign(i[o]);t[0]=o==0?c.x:o==1?c.y:c.z;let u=t[0]-n[o];if(u*h<0){let d=(o+1)%3,p=(o+2)%3;if(t[2]=i[d]/i[o]*u+n[d],t[1]=i[p]/i[o]*u+n[p],e.set(t[o],t[p],t[d]),this.boxContainsPoint(r,e,1e-4))return a&&(a.origin.copy(e),a.normal.copy(l).multiplyScalar(h),a.distance=e.sub(this.origin).length()),!0}}return!1}})();intersectSphere=(function(){let e=new E;return function(t,n,i){e.copy(t).sub(this.origin);let r=e.dot(this.direction),a=r*r,l=e.dot(e)-a,c=n*n;if(l>c)return!1;let h=Math.sqrt(c-l),u=r-h,d=r+h;if(d<0)return!1;let p=u<0?d:u;return i&&(i.origin.copy(this.origin).addScaledVector(this.direction,p),i.normal.copy(i.origin).sub(t).normalize(),i.distance=p),!0}})()},fc=class s{constructor(){this.origin=new E,this.normal=new E,this.distance=0,this.splatIndex=0}set(e,t,n,i){this.origin.copy(e),this.normal.copy(t),this.distance=n,this.splatIndex=i}clone(){let e=new s;return e.origin.copy(this.origin),e.normal.copy(this.normal),e.distance=this.distance,e.splatIndex=this.splatIndex,e}},Rn={ThreeD:0,TwoD:1},mc=class{constructor(e,t,n=!1){this.ray=new js(e,t),this.raycastAgainstTrueSplatEllipsoid=n}setFromCameraAndScreenPosition=(function(){let e=new Z;return function(t,n,i){if(e.x=n.x/i.x*2-1,e.y=(i.y-n.y)/i.y*2-1,t.isPerspectiveCamera)this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t;else if(t.isOrthographicCamera)this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t;else throw new Error("Raycaster::setFromCameraAndScreenPosition() -> Unsupported camera type")}})();intersectSplatMesh=(function(){let e=new ge,t=new ge,n=new ge,i=new js,r=new E;return function(a,o=[]){let l=a.getSplatTree();if(l){for(let c=0;c<l.subTrees.length;c++){let h=l.subTrees[c];t.copy(a.matrixWorld),a.dynamicMode&&(a.getSceneTransform(c,n),t.multiply(n)),e.copy(t).invert(),i.origin.copy(this.ray.origin).applyMatrix4(e),i.direction.copy(this.ray.origin).add(this.ray.direction),i.direction.applyMatrix4(e).sub(i.origin).normalize();let u=[];h.rootNode&&this.castRayAtSplatTreeNode(i,l,h.rootNode,u),u.forEach(d=>{d.origin.applyMatrix4(t),d.normal.applyMatrix4(t).normalize(),d.distance=r.copy(d.origin).sub(this.ray.origin).length()}),o.push(...u)}return o.sort((c,h)=>c.distance>h.distance?1:-1),o}}})();castRayAtSplatTreeNode=(function(){let e=new Ze,t=new E,n=new E,i=new Ve,r=new fc,a=1e-7,o=new E(0,0,0),l=new ge,c=new ge,h=new ge,u=new ge,d=new ge,p=new js;return function(f,g,m,y=[]){if(f.intersectBox(m.boundingBox)){if(m.data&&m.data.indexes&&m.data.indexes.length>0)for(let v=0;v<m.data.indexes.length;v++){let x=m.data.indexes[v],S=g.splatMesh.getSceneIndexForSplat(x);if(g.splatMesh.getScene(S).visible&&(g.splatMesh.getSplatColor(x,e),g.splatMesh.getSplatCenter(x,t),g.splatMesh.getSplatScaleAndRotation(x,n,i),!(n.x<=a||n.y<=a||g.splatMesh.splatRenderMode===Rn.ThreeD&&n.z<=a)))if(this.raycastAgainstTrueSplatEllipsoid){c.makeScale(n.x,n.y,n.z),h.makeRotationFromQuaternion(i);let _=Math.log10(e.w)*2;if(l.makeScale(_,_,_),d.copy(l).multiply(h).multiply(c),u.copy(d).invert(),p.origin.copy(f.origin).sub(t).applyMatrix4(u),p.direction.copy(f.origin).add(f.direction).sub(t),p.direction.applyMatrix4(u).sub(p.origin).normalize(),p.intersectSphere(o,1,r)){let A=r.clone();A.splatIndex=x,A.origin.applyMatrix4(d).add(t),y.push(A)}}else{let _=n.x+n.y,A=2;if(g.splatMesh.splatRenderMode===Rn.ThreeD&&(_+=n.z,A=3),_=_/A,f.intersectSphere(t,_,r)){let T=r.clone();T.splatIndex=x,y.push(T)}}}if(m.children&&m.children.length>0)for(let v of m.children)this.castRayAtSplatTreeNode(f,g,v,y);return y}}})()},Qn=class{static buildVertexShaderBase(e=!1,t=!1,n=0,i=""){let r=`
        precision highp float;
        #include <common>

        attribute uint splatIndex;
        uniform highp usampler2D centersColorsTexture;
        uniform highp sampler2D sphericalHarmonicsTexture;
        uniform highp sampler2D sphericalHarmonicsTextureR;
        uniform highp sampler2D sphericalHarmonicsTextureG;
        uniform highp sampler2D sphericalHarmonicsTextureB;

        uniform highp usampler2D sceneIndexesTexture;
        uniform vec2 sceneIndexesTextureSize;
        uniform int sceneCount;
    `;return t&&(r+=`
            uniform float sceneOpacity[${je.MaxScenes}];
            uniform int sceneVisibility[${je.MaxScenes}];
        `),e&&(r+=`
            uniform highp mat4 transforms[${je.MaxScenes}];
        `),r+=`
        ${i}
        uniform vec2 focal;
        uniform float orthoZoom;
        uniform int orthographicMode;
        uniform int pointCloudModeEnabled;
        uniform float inverseFocalAdjustment;
        uniform vec2 viewport;
        uniform vec2 basisViewport;
        uniform vec2 centersColorsTextureSize;
        uniform int sphericalHarmonicsDegree;
        uniform vec2 sphericalHarmonicsTextureSize;
        uniform int sphericalHarmonics8BitMode;
        uniform int sphericalHarmonicsMultiTextureMode;
        uniform float visibleRegionRadius;
        uniform float visibleRegionFadeStartRadius;
        uniform float firstRenderTime;
        uniform float currentTime;
        uniform int fadeInComplete;
        uniform vec3 sceneCenter;
        uniform float splatScale;
        uniform float sphericalHarmonics8BitCompressionRangeMin[${je.MaxScenes}];
        uniform float sphericalHarmonics8BitCompressionRangeMax[${je.MaxScenes}];

        varying vec4 vColor;
        varying vec2 vUv;
        varying vec2 vPosition;

        mat3 quaternionToRotationMatrix(float x, float y, float z, float w) {
            float s = 1.0 / sqrt(w * w + x * x + y * y + z * z);
        
            return mat3(
                1. - 2. * (y * y + z * z),
                2. * (x * y + w * z),
                2. * (x * z - w * y),
                2. * (x * y - w * z),
                1. - 2. * (x * x + z * z),
                2. * (y * z + w * x),
                2. * (x * z + w * y),
                2. * (y * z - w * x),
                1. - 2. * (x * x + y * y)
            );
        }

        const float sqrt8 = sqrt(8.0);
        const float minAlpha = 1.0 / 255.0;

        const vec4 encodeNorm4 = vec4(1.0 / 255.0, 1.0 / 255.0, 1.0 / 255.0, 1.0 / 255.0);
        const uvec4 mask4 = uvec4(uint(0x000000FF), uint(0x0000FF00), uint(0x00FF0000), uint(0xFF000000));
        const uvec4 shift4 = uvec4(0, 8, 16, 24);
        vec4 uintToRGBAVec (uint u) {
           uvec4 urgba = mask4 & u;
           urgba = urgba >> shift4;
           vec4 rgba = vec4(urgba) * encodeNorm4;
           return rgba;
        }

        vec2 getDataUV(in int stride, in int offset, in vec2 dimensions) {
            vec2 samplerUV = vec2(0.0, 0.0);
            float d = float(splatIndex * uint(stride) + uint(offset)) / dimensions.x;
            samplerUV.y = float(floor(d)) / dimensions.y;
            samplerUV.x = fract(d);
            return samplerUV;
        }

        vec2 getDataUVF(in uint sIndex, in float stride, in uint offset, in vec2 dimensions) {
            vec2 samplerUV = vec2(0.0, 0.0);
            float d = float(uint(float(sIndex) * stride) + offset) / dimensions.x;
            samplerUV.y = float(floor(d)) / dimensions.y;
            samplerUV.x = fract(d);
            return samplerUV;
        }

        const float SH_C1 = 0.4886025119029199f;
        const float[5] SH_C2 = float[](1.0925484, -1.0925484, 0.3153916, -1.0925484, 0.5462742);

        void main () {

            uint oddOffset = splatIndex & uint(0x00000001);
            uint doubleOddOffset = oddOffset * uint(2);
            bool isEven = oddOffset == uint(0);
            uint nearestEvenIndex = splatIndex - oddOffset;
            float fOddOffset = float(oddOffset);

            uvec4 sampledCenterColor = texture(centersColorsTexture, getDataUV(1, 0, centersColorsTextureSize));
            vec3 splatCenter = uintBitsToFloat(uvec3(sampledCenterColor.gba));

            uint sceneIndex = uint(0);
            if (sceneCount > 1) {
                sceneIndex = texture(sceneIndexesTexture, getDataUV(1, 0, sceneIndexesTextureSize)).r;
            }
            `,t&&(r+=`
                float splatOpacityFromScene = sceneOpacity[sceneIndex];
                int sceneVisible = sceneVisibility[sceneIndex];
                if (splatOpacityFromScene <= 0.01 || sceneVisible == 0) {
                    gl_Position = vec4(0.0, 0.0, 2.0, 1.0);
                    return;
                }
            `),e?r+=`
                mat4 transform = transforms[sceneIndex];
                mat4 transformModelViewMatrix = viewMatrix * transform;
            `:r+="mat4 transformModelViewMatrix = modelViewMatrix;",r+=`
            float sh8BitCompressionRangeMinForScene = sphericalHarmonics8BitCompressionRangeMin[sceneIndex];
            float sh8BitCompressionRangeMaxForScene = sphericalHarmonics8BitCompressionRangeMax[sceneIndex];
            float sh8BitCompressionRangeForScene = sh8BitCompressionRangeMaxForScene - sh8BitCompressionRangeMinForScene;
            float sh8BitCompressionHalfRangeForScene = sh8BitCompressionRangeForScene / 2.0;
            vec3 vec8BitSHShift = vec3(sh8BitCompressionRangeMinForScene);

            vec4 viewCenter = transformModelViewMatrix * vec4(splatCenter, 1.0);

            vec4 clipCenter = projectionMatrix * viewCenter;

            float clip = 1.2 * clipCenter.w;
            if (clipCenter.z < -clip || clipCenter.x < -clip || clipCenter.x > clip || clipCenter.y < -clip || clipCenter.y > clip) {
                gl_Position = vec4(0.0, 0.0, 2.0, 1.0);
                return;
            }

            vec3 ndcCenter = clipCenter.xyz / clipCenter.w;

            vPosition = position.xy;
            vColor = uintToRGBAVec(sampledCenterColor.r);
        `,n>=1&&(r+=`   
            if (sphericalHarmonicsDegree >= 1) {
            `,e?r+=`
                    vec3 worldViewDir = normalize(splatCenter - vec3(inverse(transform) * vec4(cameraPosition, 1.0)));
                `:r+=`
                    vec3 worldViewDir = normalize(splatCenter - cameraPosition);
                `,r+=`
                vec3 sh1;
                vec3 sh2;
                vec3 sh3;
            `,n>=2&&(r+=`
                    vec3 sh4;
                    vec3 sh5;
                    vec3 sh6;
                    vec3 sh7;
                    vec3 sh8;
                `),n===1?r+=`
                    if (sphericalHarmonicsMultiTextureMode == 0) {
                        vec2 shUV = getDataUVF(nearestEvenIndex, 2.5, doubleOddOffset, sphericalHarmonicsTextureSize);
                        vec4 sampledSH0123 = texture(sphericalHarmonicsTexture, shUV);
                        shUV = getDataUVF(nearestEvenIndex, 2.5, doubleOddOffset + uint(1), sphericalHarmonicsTextureSize);
                        vec4 sampledSH4567 = texture(sphericalHarmonicsTexture, shUV);
                        shUV = getDataUVF(nearestEvenIndex, 2.5, doubleOddOffset + uint(2), sphericalHarmonicsTextureSize);
                        vec4 sampledSH891011 = texture(sphericalHarmonicsTexture, shUV);
                        sh1 = vec3(sampledSH0123.rgb) * (1.0 - fOddOffset) + vec3(sampledSH0123.ba, sampledSH4567.r) * fOddOffset;
                        sh2 = vec3(sampledSH0123.a, sampledSH4567.rg) * (1.0 - fOddOffset) + vec3(sampledSH4567.gba) * fOddOffset;
                        sh3 = vec3(sampledSH4567.ba, sampledSH891011.r) * (1.0 - fOddOffset) + vec3(sampledSH891011.rgb) * fOddOffset;
                    } else {
                        vec2 sampledSH01R = texture(sphericalHarmonicsTextureR, getDataUV(2, 0, sphericalHarmonicsTextureSize)).rg;
                        vec2 sampledSH23R = texture(sphericalHarmonicsTextureR, getDataUV(2, 1, sphericalHarmonicsTextureSize)).rg;
                        vec2 sampledSH01G = texture(sphericalHarmonicsTextureG, getDataUV(2, 0, sphericalHarmonicsTextureSize)).rg;
                        vec2 sampledSH23G = texture(sphericalHarmonicsTextureG, getDataUV(2, 1, sphericalHarmonicsTextureSize)).rg;
                        vec2 sampledSH01B = texture(sphericalHarmonicsTextureB, getDataUV(2, 0, sphericalHarmonicsTextureSize)).rg;
                        vec2 sampledSH23B = texture(sphericalHarmonicsTextureB, getDataUV(2, 1, sphericalHarmonicsTextureSize)).rg;
                        sh1 = vec3(sampledSH01R.rg, sampledSH23R.r);
                        sh2 = vec3(sampledSH01G.rg, sampledSH23G.r);
                        sh3 = vec3(sampledSH01B.rg, sampledSH23B.r);
                    }
                `:n===2&&(r+=`
                    vec4 sampledSH0123;
                    vec4 sampledSH4567;
                    vec4 sampledSH891011;

                    vec4 sampledSH0123R;
                    vec4 sampledSH0123G;
                    vec4 sampledSH0123B;

                    if (sphericalHarmonicsMultiTextureMode == 0) {
                        sampledSH0123 = texture(sphericalHarmonicsTexture, getDataUV(6, 0, sphericalHarmonicsTextureSize));
                        sampledSH4567 = texture(sphericalHarmonicsTexture, getDataUV(6, 1, sphericalHarmonicsTextureSize));
                        sampledSH891011 = texture(sphericalHarmonicsTexture, getDataUV(6, 2, sphericalHarmonicsTextureSize));
                        sh1 = sampledSH0123.rgb;
                        sh2 = vec3(sampledSH0123.a, sampledSH4567.rg);
                        sh3 = vec3(sampledSH4567.ba, sampledSH891011.r);
                    } else {
                        sampledSH0123R = texture(sphericalHarmonicsTextureR, getDataUV(2, 0, sphericalHarmonicsTextureSize));
                        sampledSH0123G = texture(sphericalHarmonicsTextureG, getDataUV(2, 0, sphericalHarmonicsTextureSize));
                        sampledSH0123B = texture(sphericalHarmonicsTextureB, getDataUV(2, 0, sphericalHarmonicsTextureSize));
                        sh1 = vec3(sampledSH0123R.rgb);
                        sh2 = vec3(sampledSH0123G.rgb);
                        sh3 = vec3(sampledSH0123B.rgb);
                    }
                `),r+=`
                    if (sphericalHarmonics8BitMode == 1) {
                        sh1 = sh1 * sh8BitCompressionRangeForScene + vec8BitSHShift;
                        sh2 = sh2 * sh8BitCompressionRangeForScene + vec8BitSHShift;
                        sh3 = sh3 * sh8BitCompressionRangeForScene + vec8BitSHShift;
                    }
                    float x = worldViewDir.x;
                    float y = worldViewDir.y;
                    float z = worldViewDir.z;
                    vColor.rgb += SH_C1 * (-sh1 * y + sh2 * z - sh3 * x);
            `,n>=2&&(r+=`
                    if (sphericalHarmonicsDegree >= 2) {
                        float xx = x * x;
                        float yy = y * y;
                        float zz = z * z;
                        float xy = x * y;
                        float yz = y * z;
                        float xz = x * z;
                `,n===2&&(r+=`
                        if (sphericalHarmonicsMultiTextureMode == 0) {
                            vec4 sampledSH12131415 = texture(sphericalHarmonicsTexture, getDataUV(6, 3, sphericalHarmonicsTextureSize));
                            vec4 sampledSH16171819 = texture(sphericalHarmonicsTexture, getDataUV(6, 4, sphericalHarmonicsTextureSize));
                            vec4 sampledSH20212223 = texture(sphericalHarmonicsTexture, getDataUV(6, 5, sphericalHarmonicsTextureSize));
                            sh4 = sampledSH891011.gba;
                            sh5 = sampledSH12131415.rgb;
                            sh6 = vec3(sampledSH12131415.a, sampledSH16171819.rg);
                            sh7 = vec3(sampledSH16171819.ba, sampledSH20212223.r);
                            sh8 = sampledSH20212223.gba;
                        } else {
                            vec4 sampledSH4567R = texture(sphericalHarmonicsTextureR, getDataUV(2, 1, sphericalHarmonicsTextureSize));
                            vec4 sampledSH4567G = texture(sphericalHarmonicsTextureG, getDataUV(2, 1, sphericalHarmonicsTextureSize));
                            vec4 sampledSH4567B = texture(sphericalHarmonicsTextureB, getDataUV(2, 1, sphericalHarmonicsTextureSize));
                            sh4 = vec3(sampledSH0123R.a, sampledSH4567R.rg);
                            sh5 = vec3(sampledSH4567R.ba, sampledSH0123G.a);
                            sh6 = vec3(sampledSH4567G.rgb);
                            sh7 = vec3(sampledSH4567G.a, sampledSH0123B.a, sampledSH4567B.r);
                            sh8 = vec3(sampledSH4567B.gba);
                        }
                    `),r+=`
                        if (sphericalHarmonics8BitMode == 1) {
                            sh4 = sh4 * sh8BitCompressionRangeForScene + vec8BitSHShift;
                            sh5 = sh5 * sh8BitCompressionRangeForScene + vec8BitSHShift;
                            sh6 = sh6 * sh8BitCompressionRangeForScene + vec8BitSHShift;
                            sh7 = sh7 * sh8BitCompressionRangeForScene + vec8BitSHShift;
                            sh8 = sh8 * sh8BitCompressionRangeForScene + vec8BitSHShift;
                        }

                        vColor.rgb +=
                            (SH_C2[0] * xy) * sh4 +
                            (SH_C2[1] * yz) * sh5 +
                            (SH_C2[2] * (2.0 * zz - xx - yy)) * sh6 +
                            (SH_C2[3] * xz) * sh7 +
                            (SH_C2[4] * (xx - yy)) * sh8;
                    }
                `),r+=`

                vColor.rgb = clamp(vColor.rgb, vec3(0.), vec3(1.));

            }

            `),r}static getVertexShaderFadeIn(){return`
            if (fadeInComplete == 0) {
                float opacityAdjust = 1.0;
                float centerDist = length(splatCenter - sceneCenter);
                float renderTime = max(currentTime - firstRenderTime, 0.0);

                float fadeDistance = 0.75;
                float distanceLoadFadeInFactor = step(visibleRegionFadeStartRadius, centerDist);
                distanceLoadFadeInFactor = (1.0 - distanceLoadFadeInFactor) +
                                        (1.0 - clamp((centerDist - visibleRegionFadeStartRadius) / fadeDistance, 0.0, 1.0)) *
                                        distanceLoadFadeInFactor;
                opacityAdjust *= distanceLoadFadeInFactor;
                vColor.a *= opacityAdjust;
            }
        `}static getUniforms(e=!1,t=!1,n=0,i=1,r=!1){let a={sceneCenter:{type:"v3",value:new E},fadeInComplete:{type:"i",value:0},orthographicMode:{type:"i",value:0},visibleRegionFadeStartRadius:{type:"f",value:0},visibleRegionRadius:{type:"f",value:0},currentTime:{type:"f",value:0},firstRenderTime:{type:"f",value:0},centersColorsTexture:{type:"t",value:null},sphericalHarmonicsTexture:{type:"t",value:null},sphericalHarmonicsTextureR:{type:"t",value:null},sphericalHarmonicsTextureG:{type:"t",value:null},sphericalHarmonicsTextureB:{type:"t",value:null},sphericalHarmonics8BitCompressionRangeMin:{type:"f",value:[]},sphericalHarmonics8BitCompressionRangeMax:{type:"f",value:[]},focal:{type:"v2",value:new Z},orthoZoom:{type:"f",value:1},inverseFocalAdjustment:{type:"f",value:1},viewport:{type:"v2",value:new Z},basisViewport:{type:"v2",value:new Z},debugColor:{type:"v3",value:new Pe},centersColorsTextureSize:{type:"v2",value:new Z(1024,1024)},sphericalHarmonicsDegree:{type:"i",value:n},sphericalHarmonicsTextureSize:{type:"v2",value:new Z(1024,1024)},sphericalHarmonics8BitMode:{type:"i",value:0},sphericalHarmonicsMultiTextureMode:{type:"i",value:0},splatScale:{type:"f",value:i},pointCloudModeEnabled:{type:"i",value:r?1:0},sceneIndexesTexture:{type:"t",value:null},sceneIndexesTextureSize:{type:"v2",value:new Z(1024,1024)},sceneCount:{type:"i",value:1}};for(let o=0;o<je.MaxScenes;o++)a.sphericalHarmonics8BitCompressionRangeMin.value.push(-je.SphericalHarmonics8BitCompressionRange/2),a.sphericalHarmonics8BitCompressionRangeMax.value.push(je.SphericalHarmonics8BitCompressionRange/2);if(t){let o=[];for(let c=0;c<je.MaxScenes;c++)o.push(1);a.sceneOpacity={type:"f",value:o};let l=[];for(let c=0;c<je.MaxScenes;c++)l.push(1);a.sceneVisibility={type:"i",value:l}}if(e){let o=[];for(let l=0;l<je.MaxScenes;l++)o.push(new ge);a.transforms={type:"mat4",value:o}}return a}},gc=class s{static build(e=!1,t=!1,n=!1,i=2048,r=1,a=!1,o=0,l=.3){let h=Qn.buildVertexShaderBase(e,t,o,`
            uniform vec2 covariancesTextureSize;
            uniform highp sampler2D covariancesTexture;
            uniform highp usampler2D covariancesTextureHalfFloat;
            uniform int covariancesAreHalfFloat;

            void fromCovarianceHalfFloatV4(uvec4 val, out vec4 first, out vec4 second) {
                vec2 r = unpackHalf2x16(val.r);
                vec2 g = unpackHalf2x16(val.g);
                vec2 b = unpackHalf2x16(val.b);

                first = vec4(r.x, r.y, g.x, g.y);
                second = vec4(b.x, b.y, 0.0, 0.0);
            }
        `);h+=s.buildVertexShaderProjection(n,t,i,l);let u=s.buildFragmentShader(),d=Qn.getUniforms(e,t,o,r,a);return d.covariancesTextureSize={type:"v2",value:new Z(1024,1024)},d.covariancesTexture={type:"t",value:null},d.covariancesTextureHalfFloat={type:"t",value:null},d.covariancesAreHalfFloat={type:"i",value:0},new Bt({uniforms:d,vertexShader:h,fragmentShader:u,transparent:!0,alphaTest:1,blending:Ll,depthTest:!0,depthWrite:!1,side:Vs})}static buildVertexShaderProjection(e,t,n,i){let r=`

            vec4 sampledCovarianceA;
            vec4 sampledCovarianceB;
            vec3 cov3D_M11_M12_M13;
            vec3 cov3D_M22_M23_M33;
            if (covariancesAreHalfFloat == 0) {
                sampledCovarianceA = texture(covariancesTexture, getDataUVF(nearestEvenIndex, 1.5, oddOffset,
                                                                            covariancesTextureSize));
                sampledCovarianceB = texture(covariancesTexture, getDataUVF(nearestEvenIndex, 1.5, oddOffset + uint(1),
                                                                            covariancesTextureSize));

                cov3D_M11_M12_M13 = vec3(sampledCovarianceA.rgb) * (1.0 - fOddOffset) +
                                    vec3(sampledCovarianceA.ba, sampledCovarianceB.r) * fOddOffset;
                cov3D_M22_M23_M33 = vec3(sampledCovarianceA.a, sampledCovarianceB.rg) * (1.0 - fOddOffset) +
                                    vec3(sampledCovarianceB.gba) * fOddOffset;
            } else {
                uvec4 sampledCovarianceU = texture(covariancesTextureHalfFloat, getDataUV(1, 0, covariancesTextureSize));
                fromCovarianceHalfFloatV4(sampledCovarianceU, sampledCovarianceA, sampledCovarianceB);
                cov3D_M11_M12_M13 = sampledCovarianceA.rgb;
                cov3D_M22_M23_M33 = vec3(sampledCovarianceA.a, sampledCovarianceB.rg);
            }
        
            // Construct the 3D covariance matrix
            mat3 Vrk = mat3(
                cov3D_M11_M12_M13.x, cov3D_M11_M12_M13.y, cov3D_M11_M12_M13.z,
                cov3D_M11_M12_M13.y, cov3D_M22_M23_M33.x, cov3D_M22_M23_M33.y,
                cov3D_M11_M12_M13.z, cov3D_M22_M23_M33.y, cov3D_M22_M23_M33.z
            );

            mat3 J;
            if (orthographicMode == 1) {
                // Since the projection is linear, we don't need an approximation
                J = transpose(mat3(orthoZoom, 0.0, 0.0,
                                0.0, orthoZoom, 0.0,
                                0.0, 0.0, 0.0));
            } else {
                // Construct the Jacobian of the affine approximation of the projection matrix. It will be used to transform the
                // 3D covariance matrix instead of using the actual projection matrix because that transformation would
                // require a non-linear component (perspective division) which would yield a non-gaussian result.
                float s = 1.0 / (viewCenter.z * viewCenter.z);
                J = mat3(
                    focal.x / viewCenter.z, 0., -(focal.x * viewCenter.x) * s,
                    0., focal.y / viewCenter.z, -(focal.y * viewCenter.y) * s,
                    0., 0., 0.
                );
            }

            // Concatenate the projection approximation with the model-view transformation
            mat3 W = transpose(mat3(transformModelViewMatrix));
            mat3 T = W * J;

            // Transform the 3D covariance matrix (Vrk) to compute the 2D covariance matrix
            mat3 cov2Dm = transpose(T) * Vrk * T;
            `;return e?r+=`
                float detOrig = cov2Dm[0][0] * cov2Dm[1][1] - cov2Dm[0][1] * cov2Dm[0][1];
                cov2Dm[0][0] += ${i};
                cov2Dm[1][1] += ${i};
                float detBlur = cov2Dm[0][0] * cov2Dm[1][1] - cov2Dm[0][1] * cov2Dm[0][1];
                vColor.a *= sqrt(max(detOrig / detBlur, 0.0));
                if (vColor.a < minAlpha) return;
            `:r+=`
                cov2Dm[0][0] += ${i};
                cov2Dm[1][1] += ${i};
            `,r+=`

            // We are interested in the upper-left 2x2 portion of the projected 3D covariance matrix because
            // we only care about the X and Y values. We want the X-diagonal, cov2Dm[0][0],
            // the Y-diagonal, cov2Dm[1][1], and the correlation between the two cov2Dm[0][1]. We don't
            // need cov2Dm[1][0] because it is a symetric matrix.
            vec3 cov2Dv = vec3(cov2Dm[0][0], cov2Dm[0][1], cov2Dm[1][1]);

            // We now need to solve for the eigen-values and eigen vectors of the 2D covariance matrix
            // so that we can determine the 2D basis for the splat. This is done using the method described
            // here: https://people.math.harvard.edu/~knill/teaching/math21b2004/exhibits/2dmatrices/index.html
            // After calculating the eigen-values and eigen-vectors, we calculate the basis for rendering the splat
            // by normalizing the eigen-vectors and then multiplying them by (sqrt(8) * sqrt(eigen-value)), which is
            // equal to scaling them by sqrt(8) standard deviations.
            //
            // This is a different approach than in the original work at INRIA. In that work they compute the
            // max extents of the projected splat in screen space to form a screen-space aligned bounding rectangle
            // which forms the geometry that is actually rasterized. The dimensions of that bounding box are 3.0
            // times the square root of the maximum eigen-value, or 3 standard deviations. They then use the inverse
            // 2D covariance matrix (called 'conic') in the CUDA rendering thread to determine fragment opacity by
            // calculating the full gaussian: exp(-0.5 * (X - mean) * conic * (X - mean)) * splat opacity
            float a = cov2Dv.x;
            float d = cov2Dv.z;
            float b = cov2Dv.y;
            float D = a * d - b * b;
            float trace = a + d;
            float traceOver2 = 0.5 * trace;
            float term2 = sqrt(max(0.1f, traceOver2 * traceOver2 - D));
            float eigenValue1 = traceOver2 + term2;
            float eigenValue2 = traceOver2 - term2;

            if (pointCloudModeEnabled == 1) {
                eigenValue1 = eigenValue2 = 0.2;
            }

            if (eigenValue2 <= 0.0) return;

            vec2 eigenVector1 = normalize(vec2(b, eigenValue1 - a));
            // since the eigen vectors are orthogonal, we derive the second one from the first
            vec2 eigenVector2 = vec2(eigenVector1.y, -eigenVector1.x);

            // We use sqrt(8) standard deviations instead of 3 to eliminate more of the splat with a very low opacity.
            vec2 basisVector1 = eigenVector1 * splatScale * min(sqrt8 * sqrt(eigenValue1), ${parseInt(n)}.0);
            vec2 basisVector2 = eigenVector2 * splatScale * min(sqrt8 * sqrt(eigenValue2), ${parseInt(n)}.0);
            `,t&&(r+=`
                vColor.a *= splatOpacityFromScene;
            `),r+=`
            vec2 ndcOffset = vec2(vPosition.x * basisVector1 + vPosition.y * basisVector2) *
                             basisViewport * 2.0 * inverseFocalAdjustment;

            vec4 quadPos = vec4(ndcCenter.xy + ndcOffset, ndcCenter.z, 1.0);
            gl_Position = quadPos;

            // Scale the position data we send to the fragment shader
            vPosition *= sqrt8;
        `,r+=Qn.getVertexShaderFadeIn(),r+="}",r}static buildFragmentShader(){let e=`
            precision highp float;
            #include <common>
 
            uniform vec3 debugColor;

            varying vec4 vColor;
            varying vec2 vUv;
            varying vec2 vPosition;
        `;return e+=`
            void main () {
                // Compute the positional squared distance from the center of the splat to the current fragment.
                float A = dot(vPosition, vPosition);
                // Since the positional data in vPosition has been scaled by sqrt(8), the squared result will be
                // scaled by a factor of 8. If the squared result is larger than 8, it means it is outside the ellipse
                // defined by the rectangle formed by vPosition. It also means it's farther
                // away than sqrt(8) standard deviations from the mean.
                if (A > 8.0) discard;
                vec3 color = vColor.rgb;

                // Since the rendered splat is scaled by sqrt(8), the inverse covariance matrix that is part of
                // the gaussian formula becomes the identity matrix. We're then left with (X - mean) * (X - mean),
                // and since 'mean' is zero, we have X * X, which is the same as A:
                float opacity = exp(-0.5 * A) * vColor.a;

                gl_FragColor = vec4(color.rgb, opacity);
            }
        `,e}},yc=class s{static build(e=!1,t=!1,n=1,i=!1,r=0){let o=Qn.buildVertexShaderBase(e,t,r,`
            uniform vec2 scaleRotationsTextureSize;
            uniform highp sampler2D scaleRotationsTexture;
            varying mat3 vT;
            varying vec2 vQuadCenter;
            varying vec2 vFragCoord;
        `);o+=s.buildVertexShaderProjection();let l=s.buildFragmentShader(),c=Qn.getUniforms(e,t,r,n,i);return c.scaleRotationsTexture={type:"t",value:null},c.scaleRotationsTextureSize={type:"v2",value:new Z(1024,1024)},new Bt({uniforms:c,vertexShader:o,fragmentShader:l,transparent:!0,alphaTest:1,blending:Ll,depthTest:!0,depthWrite:!1,side:Vs})}static buildVertexShaderProjection(){let e=`

            vec4 scaleRotationA = texture(scaleRotationsTexture, getDataUVF(nearestEvenIndex, 1.5,
                                                                            oddOffset, scaleRotationsTextureSize));
            vec4 scaleRotationB = texture(scaleRotationsTexture, getDataUVF(nearestEvenIndex, 1.5,
                                                                            oddOffset + uint(1), scaleRotationsTextureSize));

            vec3 scaleRotation123 = vec3(scaleRotationA.rgb) * (1.0 - fOddOffset) +
                                    vec3(scaleRotationA.ba, scaleRotationB.r) * fOddOffset;
            vec3 scaleRotation456 = vec3(scaleRotationA.a, scaleRotationB.rg) * (1.0 - fOddOffset) +
                                    vec3(scaleRotationB.gba) * fOddOffset;

            float missingW = sqrt(1.0 - scaleRotation456.x * scaleRotation456.x - scaleRotation456.y *
                                    scaleRotation456.y - scaleRotation456.z * scaleRotation456.z);
            mat3 R = quaternionToRotationMatrix(scaleRotation456.r, scaleRotation456.g, scaleRotation456.b, missingW);
            mat3 S = mat3(scaleRotation123.r, 0.0, 0.0,
                            0.0, scaleRotation123.g, 0.0,
                            0.0, 0.0, scaleRotation123.b);
            
            mat3 L = R * S;

            mat3x4 splat2World = mat3x4(vec4(L[0], 0.0),
                                        vec4(L[1], 0.0),
                                        vec4(splatCenter.x, splatCenter.y, splatCenter.z, 1.0));

            mat4 world2ndc = transpose(projectionMatrix * transformModelViewMatrix);

            mat3x4 ndc2pix = mat3x4(vec4(viewport.x / 2.0, 0.0, 0.0, (viewport.x - 1.0) / 2.0),
                                    vec4(0.0, viewport.y / 2.0, 0.0, (viewport.y - 1.0) / 2.0),
                                    vec4(0.0, 0.0, 0.0, 1.0));

            mat3 T = transpose(splat2World) * world2ndc * ndc2pix;
            vec3 normal = vec3(viewMatrix * vec4(L[0][2], L[1][2], L[2][2], 0.0));
        `;return e+=`

                mat4 splat2World4 = mat4(vec4(L[0], 0.0),
                                        vec4(L[1], 0.0),
                                        vec4(L[2], 0.0),
                                        vec4(splatCenter.x, splatCenter.y, splatCenter.z, 1.0));

                mat4 Tt = transpose(transpose(splat2World4) * world2ndc);

                vec4 tempPoint1 = Tt * vec4(1.0, 0.0, 0.0, 1.0);
                tempPoint1 /= tempPoint1.w;

                vec4 tempPoint2 = Tt * vec4(0.0, 1.0, 0.0, 1.0);
                tempPoint2 /= tempPoint2.w;

                vec4 center = Tt * vec4(0.0, 0.0, 0.0, 1.0);
                center /= center.w;

                vec2 basisVector1 = tempPoint1.xy - center.xy;
                vec2 basisVector2 = tempPoint2.xy - center.xy;

                vec2 basisVector1Screen = basisVector1 * 0.5 * viewport;
                vec2 basisVector2Screen = basisVector2 * 0.5 * viewport;

                const float minPix = 1.;
                if (length(basisVector1Screen) < minPix || length(basisVector2Screen) < minPix) {
                    
            vec3 T0 = vec3(T[0][0], T[0][1], T[0][2]);
            vec3 T1 = vec3(T[1][0], T[1][1], T[1][2]);
            vec3 T3 = vec3(T[2][0], T[2][1], T[2][2]);

            vec3 tempPoint = vec3(1.0, 1.0, -1.0);
            float distance = (T3.x * T3.x * tempPoint.x) + (T3.y * T3.y * tempPoint.y) + (T3.z * T3.z * tempPoint.z);
            vec3 f = (1.0 / distance) * tempPoint;
            if (abs(distance) < 0.00001) return;

            float pointImageX = (T0.x * T3.x * f.x) + (T0.y * T3.y * f.y) + (T0.z * T3.z * f.z);
            float pointImageY = (T1.x * T3.x * f.x) + (T1.y * T3.y * f.y) + (T1.z * T3.z * f.z);
            vec2 pointImage = vec2(pointImageX, pointImageY);

            float tempX = (T0.x * T0.x * f.x) + (T0.y * T0.y * f.y) + (T0.z * T0.z * f.z);
            float tempY = (T1.x * T1.x * f.x) + (T1.y * T1.y * f.y) + (T1.z * T1.z * f.z);
            vec2 temp = vec2(tempX, tempY);

            vec2 halfExtend = pointImage * pointImage - temp;
            vec2 extent = sqrt(max(vec2(0.0001), halfExtend));
            float radius = max(extent.x, extent.y);

            vec2 ndcOffset = ((position.xy * radius * 3.0) * basisViewport * 2.0);

            vec4 quadPos = vec4(ndcCenter.xy + ndcOffset, ndcCenter.z, 1.0);
            gl_Position = quadPos;

            vT = T;
            vQuadCenter = pointImage;
            vFragCoord = (quadPos.xy * 0.5 + 0.5) * viewport;
        
                } else {
                    vec2 ndcOffset = vec2(position.x * basisVector1 + position.y * basisVector2) * 3.0 * inverseFocalAdjustment;
                    vec4 quadPos = vec4(ndcCenter.xy + ndcOffset, ndcCenter.z, 1.0);
                    gl_Position = quadPos;

                    vT = T;
                    vQuadCenter = center.xy;
                    vFragCoord = (quadPos.xy * 0.5 + 0.5) * viewport;
                }
            `,e+=Qn.getVertexShaderFadeIn(),e+="}",e}static buildFragmentShader(){return`
            precision highp float;
            #include <common>

            uniform vec3 debugColor;

            varying vec4 vColor;
            varying vec2 vUv;
            varying vec2 vPosition;
            varying mat3 vT;
            varying vec2 vQuadCenter;
            varying vec2 vFragCoord;

            void main () {

                const float FilterInvSquare = 2.0;
                const float near_n = 0.2;
                const float T = 1.0;

                vec2 xy = vQuadCenter;
                vec3 Tu = vT[0];
                vec3 Tv = vT[1];
                vec3 Tw = vT[2];
                vec3 k = vFragCoord.x * Tw - Tu;
                vec3 l = vFragCoord.y * Tw - Tv;
                vec3 p = cross(k, l);
                if (p.z == 0.0) discard;
                vec2 s = vec2(p.x / p.z, p.y / p.z);
                float rho3d = (s.x * s.x + s.y * s.y); 
                vec2 d = vec2(xy.x - vFragCoord.x, xy.y - vFragCoord.y);
                float rho2d = FilterInvSquare * (d.x * d.x + d.y * d.y); 

                // compute intersection and depth
                float rho = min(rho3d, rho2d);
                float depth = (rho3d <= rho2d) ? (s.x * Tw.x + s.y * Tw.y) + Tw.z : Tw.z; 
                if (depth < near_n) discard;
                //  vec4 nor_o = collected_normal_opacity[j];
                //  float normal[3] = {nor_o.x, nor_o.y, nor_o.z};
                float opa = vColor.a;

                float power = -0.5f * rho;
                if (power > 0.0f) discard;

                // Eq. (2) from 3D Gaussian splatting paper.
                // Obtain alpha by multiplying with Gaussian opacity
                // and its exponential falloff from mean.
                // Avoid numerical instabilities (see paper appendix). 
                float alpha = min(0.99f, opa * exp(power));
                if (alpha < 1.0f / 255.0f) discard;
                float test_T = T * (1.0 - alpha);
                if (test_T < 0.0001)discard;

                float w = alpha * T;
                gl_FragColor = vec4(vColor.rgb, w);
            }
        `}},vc=class{static build(e){let t=new Je;t.setIndex([0,1,2,0,2,3]);let n=new Float32Array(12),i=new Nt(n,3);t.setAttribute("position",i),i.setXYZ(0,-1,-1,0),i.setXYZ(1,-1,1,0),i.setXYZ(2,1,1,0),i.setXYZ(3,1,-1,0),i.needsUpdate=!0;let r=new ea().copy(t),a=new Uint32Array(e),o=new Gr(a,1,!1);return o.setUsage(lu),r.setAttribute("splatIndex",o),r.instanceCount=0,r}},xc=class extends xt{constructor(e,t=new E,n=new Ve,i=new E(1,1,1),r=1,a=1,o=!0){super(),this.splatBuffer=e,this.position.copy(t),this.quaternion.copy(n),this.scale.copy(i),this.transform=new ge,this.minimumAlpha=r,this.opacity=a,this.visible=o}copyTransformData(e){this.position.copy(e.position),this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.transform.copy(e.transform)}updateTransform(e){e?(this.matrixWorldAutoUpdate&&this.updateWorldMatrix(!0,!1),this.transform.copy(this.matrixWorld)):(this.matrixAutoUpdate&&this.updateMatrix(),this.transform.copy(this.matrix))}},Sc=class s{static idGen=0;constructor(e,t,n,i){this.min=new E().copy(e),this.max=new E().copy(t),this.boundingBox=new Dt(this.min,this.max),this.center=new E().copy(this.max).sub(this.min).multiplyScalar(.5).add(this.min),this.depth=n,this.children=[],this.data=null,this.id=i||s.idGen++}},_c=class s{constructor(e,t){this.maxDepth=e,this.maxCentersPerNode=t,this.sceneDimensions=new E,this.sceneMin=new E,this.sceneMax=new E,this.rootNode=null,this.nodesWithIndexes=[],this.splatMesh=null}static convertWorkerSubTreeNode(e){let t=new E().fromArray(e.min),n=new E().fromArray(e.max),i=new Sc(t,n,e.depth,e.id);if(e.data.indexes){i.data={indexes:[]};for(let r of e.data.indexes)i.data.indexes.push(r)}if(e.children)for(let r of e.children)i.children.push(s.convertWorkerSubTreeNode(r));return i}static convertWorkerSubTree(e,t){let n=new s(e.maxDepth,e.maxCentersPerNode);n.sceneMin=new E().fromArray(e.sceneMin),n.sceneMax=new E().fromArray(e.sceneMax),n.splatMesh=t,n.rootNode=s.convertWorkerSubTreeNode(e.rootNode);let i=(r,a)=>{r.children.length===0&&a(r);for(let o of r.children)i(o,a)};return n.nodesWithIndexes=[],i(n.rootNode,r=>{r.data&&r.data.indexes&&r.data.indexes.length>0&&n.nodesWithIndexes.push(r)}),n}};function fg(s){let e=0;class t{constructor(l,c){this.min=[l[0],l[1],l[2]],this.max=[c[0],c[1],c[2]]}containsPoint(l){return l[0]>=this.min[0]&&l[0]<=this.max[0]&&l[1]>=this.min[1]&&l[1]<=this.max[1]&&l[2]>=this.min[2]&&l[2]<=this.max[2]}}class n{constructor(l,c){this.maxDepth=l,this.maxCentersPerNode=c,this.sceneDimensions=[],this.sceneMin=[],this.sceneMax=[],this.rootNode=null,this.addedIndexes={},this.nodesWithIndexes=[],this.splatMesh=null,this.disposed=!1}}class i{constructor(l,c,h,u){this.min=[l[0],l[1],l[2]],this.max=[c[0],c[1],c[2]],this.center=[(c[0]-l[0])*.5+l[0],(c[1]-l[1])*.5+l[1],(c[2]-l[2])*.5+l[2]],this.depth=h,this.children=[],this.data=null,this.id=u||e++}}processSplatTreeNode=function(o,l,c,h){let u=l.data.indexes.length;if(u<o.maxCentersPerNode||l.depth>o.maxDepth){let x=[];for(let S=0;S<l.data.indexes.length;S++)o.addedIndexes[l.data.indexes[S]]||(x.push(l.data.indexes[S]),o.addedIndexes[l.data.indexes[S]]=!0);l.data.indexes=x,l.data.indexes.sort((S,M)=>S>M?1:-1),o.nodesWithIndexes.push(l);return}let d=[l.max[0]-l.min[0],l.max[1]-l.min[1],l.max[2]-l.min[2]],p=[d[0]*.5,d[1]*.5,d[2]*.5],f=[l.min[0]+p[0],l.min[1]+p[1],l.min[2]+p[2]],g=[new t([f[0]-p[0],f[1],f[2]-p[2]],[f[0],f[1]+p[1],f[2]]),new t([f[0],f[1],f[2]-p[2]],[f[0]+p[0],f[1]+p[1],f[2]]),new t([f[0],f[1],f[2]],[f[0]+p[0],f[1]+p[1],f[2]+p[2]]),new t([f[0]-p[0],f[1],f[2]],[f[0],f[1]+p[1],f[2]+p[2]]),new t([f[0]-p[0],f[1]-p[1],f[2]-p[2]],[f[0],f[1],f[2]]),new t([f[0],f[1]-p[1],f[2]-p[2]],[f[0]+p[0],f[1],f[2]]),new t([f[0],f[1]-p[1],f[2]],[f[0]+p[0],f[1],f[2]+p[2]]),new t([f[0]-p[0],f[1]-p[1],f[2]],[f[0],f[1],f[2]+p[2]])],m=[],y=[];for(let x=0;x<g.length;x++)m[x]=0,y[x]=[];let v=[0,0,0];for(let x=0;x<u;x++){let S=l.data.indexes[x],M=c[S];v[0]=h[M],v[1]=h[M+1],v[2]=h[M+2];for(let _=0;_<g.length;_++)g[_].containsPoint(v)&&(m[_]++,y[_].push(S))}for(let x=0;x<g.length;x++){let S=new i(g[x].min,g[x].max,l.depth+1);S.data={indexes:y[x]},l.children.push(S)}l.data={};for(let x of l.children)processSplatTreeNode(o,x,c,h)};let r=(o,l,c)=>{let h=[0,0,0],u=[0,0,0],d=[],p=Math.floor(o.length/4);for(let g=0;g<p;g++){let m=g*4,y=o[m],v=o[m+1],x=o[m+2],S=Math.round(o[m+3]);(g===0||y<h[0])&&(h[0]=y),(g===0||y>u[0])&&(u[0]=y),(g===0||v<h[1])&&(h[1]=v),(g===0||v>u[1])&&(u[1]=v),(g===0||x<h[2])&&(h[2]=x),(g===0||x>u[2])&&(u[2]=x),d.push(S)}let f=new n(l,c);return f.sceneMin=h,f.sceneMax=u,f.rootNode=new i(f.sceneMin,f.sceneMax,0),f.rootNode.data={indexes:d},f};function a(o,l,c){let h=[];for(let d of o){let p=Math.floor(d.length/4);for(let f=0;f<p;f++){let g=f*4,m=Math.round(d[g+3]);h[m]=g}}let u=[];for(let d of o){let p=r(d,l,c);u.push(p),processSplatTreeNode(p,p.rootNode,h,d)}s.postMessage({subTrees:u})}s.onmessage=o=>{o.data.process&&a(o.data.process.centers,o.data.process.maxDepth,o.data.process.maxCentersPerNode)}}function mg(s,e,t,n,i){s.postMessage({process:{centers:e,maxDepth:n,maxCentersPerNode:i}},t)}function gg(){return new Worker(URL.createObjectURL(new Blob(["(",fg.toString(),")(self)"],{type:"application/javascript"})))}var Ac=class{constructor(e,t){this.maxDepth=e,this.maxCentersPerNode=t,this.subTrees=[],this.splatMesh=null}dispose(){this.diposeSplatTreeWorker(),this.disposed=!0}diposeSplatTreeWorker(){this.splatTreeWorker&&this.splatTreeWorker.terminate(),this.splatTreeWorker=null}processSplatMesh=function(e,t=()=>!0,n,i){this.splatTreeWorker||(this.splatTreeWorker=gg()),this.splatMesh=e,this.subTrees=[];let r=new E,a=(o,l)=>{let c=new Float32Array(l*4),h=0;for(let u=0;u<l;u++){let d=u+o;if(t(d)){e.getSplatCenter(d,r);let p=h*4;c[p]=r.x,c[p+1]=r.y,c[p+2]=r.z,c[p+3]=d,h++}}return c};return new Promise(o=>{let l=()=>this.disposed?(this.diposeSplatTreeWorker(),o(),!0):!1;n&&n(!1),Yt(()=>{if(l())return;let c=[];if(e.dynamicMode){let h=0;for(let u=0;u<e.scenes.length;u++){let p=e.getScene(u).splatBuffer.getSplatCount(),f=a(h,p);c.push(f),h+=p}}else{let h=a(0,e.getSplatCount());c.push(h)}this.splatTreeWorker.onmessage=h=>{l()||h.data.subTrees&&(i&&i(!1),Yt(()=>{if(!l()){for(let u of h.data.subTrees){let d=_c.convertWorkerSubTree(u,e);this.subTrees.push(d)}this.diposeSplatTreeWorker(),i&&i(!0),Yt(()=>{o()})}}))},Yt(()=>{if(l())return;n&&n(!0);let h=c.map(u=>u.buffer);mg(this.splatTreeWorker,c,h,this.maxDepth,this.maxCentersPerNode)})})})};countLeaves(){let e=0;return this.visitLeaves(()=>{e++}),e}visitLeaves(e){let t=(n,i)=>{n.children.length===0&&i(n);for(let r of n.children)t(r,i)};for(let n of this.subTrees)t(n.rootNode,e)}};function yg(s){let e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){let i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function vg(s,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){let A=e.get("EXT_texture_filter_anisotropic");n=s.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(A){if(A==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let a=typeof WebGL2RenderingContext<"u"&&s.constructor.name==="WebGL2RenderingContext",o=t.precision!==void 0?t.precision:"highp",l=r(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);let c=a||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,u=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),d=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=s.getParameter(s.MAX_TEXTURE_SIZE),f=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),g=s.getParameter(s.MAX_VERTEX_ATTRIBS),m=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),y=s.getParameter(s.MAX_VARYING_VECTORS),v=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),x=d>0,S=a||e.has("OES_texture_float"),M=x&&S,_=a?s.getParameter(s.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:d,maxTextureSize:p,maxCubemapSize:f,maxAttributes:g,maxVertexUniforms:m,maxVaryings:y,maxFragmentUniforms:v,vertexTextures:x,floatFragmentTextures:S,floatVertexTextures:M,maxSamples:_}}var _i={Default:0,Gradual:1,Instant:2},fs={None:0,Error:1,Warning:2,Info:3,Debug:4},ju=new Je,xg=new yn,ma=6,Sg=4,_g=4,Ag=4,Mg=6,Eg=8,Zl=4,Jl=4,Xu=1,Tg=.012,bg=.003,qu=1,Yu=16777216,Mc=class s extends tt{constructor(e=Rn.ThreeD,t=!1,n=!1,i=!1,r=1,a=!0,o=!1,l=!1,c=1024,h=fs.None,u=0,d=1,p=.3){super(ju,xg),this.renderer=void 0,this.splatRenderMode=e,this.dynamicMode=t,this.enableOptionalEffects=n,this.halfPrecisionCovariancesOnGPU=i,this.devicePixelRatio=r,this.enableDistancesComputationOnGPU=a,this.integerBasedDistancesComputation=o,this.antialiased=l,this.kernel2DSize=p,this.maxScreenSpaceSplatSize=c,this.logLevel=h,this.sphericalHarmonicsDegree=u,this.minSphericalHarmonicsDegree=0,this.sceneFadeInRateMultiplier=d,this.scenes=[],this.splatTree=null,this.baseSplatTree=null,this.splatDataTextures={},this.distancesTransformFeedback={id:null,vertexShader:null,fragmentShader:null,program:null,centersBuffer:null,sceneIndexesBuffer:null,outDistancesBuffer:null,centersLoc:-1,modelViewProjLoc:-1,sceneIndexesLoc:-1,transformsLocs:[]},this.globalSplatIndexToLocalSplatIndexMap=[],this.globalSplatIndexToSceneIndexMap=[],this.lastBuildSplatCount=0,this.lastBuildScenes=[],this.lastBuildMaxSplatCount=0,this.lastBuildSceneCount=0,this.firstRenderTime=-1,this.finalBuild=!1,this.webGLUtils=null,this.boundingBox=new Dt,this.calculatedSceneCenter=new E,this.maxSplatDistanceFromSceneCenter=0,this.visibleRegionBufferRadius=0,this.visibleRegionRadius=0,this.visibleRegionFadeStartRadius=0,this.visibleRegionChanging=!1,this.splatScale=1,this.pointCloudModeEnabled=!1,this.disposed=!1,this.lastRenderer=null,this.visible=!1}static buildScenes(e,t,n){let i=[];i.length=t.length;for(let r=0;r<t.length;r++){let a=t[r],o=n[r]||{},l=o.position||[0,0,0],c=o.rotation||[0,0,0,1],h=o.scale||[1,1,1],u=new E().fromArray(l),d=new Ve().fromArray(c),p=new E().fromArray(h),f=s.createScene(a,u,d,p,o.splatAlphaRemovalThreshold||1,o.opacity,o.visible);e.add(f),i[r]=f}return i}static createScene(e,t,n,i,r,a=1,o=!0){return new xc(e,t,n,i,r,a,o)}static buildSplatIndexMaps(e){let t=[],n=[],i=0;for(let r=0;r<e.length;r++){let o=e[r].getMaxSplatCount();for(let l=0;l<o;l++)t[i]=l,n[i]=r,i++}return{localSplatIndexMap:t,sceneIndexMap:n}}buildSplatTree=function(e=[],t,n){return new Promise(i=>{this.disposeSplatTree(),this.baseSplatTree=new Ac(8,1e3);let r=performance.now(),a=new Ze;this.baseSplatTree.processSplatMesh(this,o=>{this.getSplatColor(o,a);let l=this.getSceneIndexForSplat(o),c=e[l]||1;return a.w>=c},t,n).then(()=>{let o=performance.now()-r;if(this.logLevel>=fs.Info&&console.log("SplatTree build: "+o+" ms"),this.disposed)i();else{this.splatTree=this.baseSplatTree,this.baseSplatTree=null;let l=0,c=0,h=0,u=0;this.splatTree.visitLeaves(d=>{let p=d.data.indexes.length;p>0&&(c+=p,h=Math.max(h,p),u++,l++)}),this.logLevel>=fs.Info&&(console.log(`SplatTree leaves: ${this.splatTree.countLeaves()}`),console.log(`SplatTree leaves with splats:${l}`),c=c/u,console.log(`Avg splat count per node: ${c}`),console.log(`Total splat count: ${this.getSplatCount()}`)),i()}})})};build(e,t,n=!0,i=!1,r,a,o=!0){this.sceneOptions=t,this.finalBuild=i;let l=s.getTotalMaxSplatCountForSplatBuffers(e),c=s.buildScenes(this,e,t);if(n)for(let g=0;g<this.scenes.length&&g<c.length;g++){let m=c[g],y=this.getScene(g);m.copyTransformData(y)}this.scenes=c;let h=3;for(let g of e){let m=g.getMinSphericalHarmonicsDegree();m<h&&(h=m)}this.minSphericalHarmonicsDegree=Math.min(h,this.sphericalHarmonicsDegree);let u=!1;if(e.length!==this.lastBuildScenes.length)u=!0;else for(let g=0;g<e.length;g++)if(e[g]!==this.lastBuildScenes[g].splatBuffer){u=!0;break}let d=!0;if((this.scenes.length!==1||this.lastBuildSceneCount!==this.scenes.length||this.lastBuildMaxSplatCount!==l||u)&&(d=!1),!d){this.boundingBox=new Dt,o||(this.maxSplatDistanceFromSceneCenter=0,this.visibleRegionBufferRadius=0,this.visibleRegionRadius=0,this.visibleRegionFadeStartRadius=0,this.firstRenderTime=-1),this.lastBuildScenes=[],this.lastBuildSplatCount=0,this.lastBuildMaxSplatCount=0,this.disposeMeshData(),this.geometry=vc.build(l),this.splatRenderMode===Rn.ThreeD?this.material=gc.build(this.dynamicMode,this.enableOptionalEffects,this.antialiased,this.maxScreenSpaceSplatSize,this.splatScale,this.pointCloudModeEnabled,this.minSphericalHarmonicsDegree,this.kernel2DSize):this.material=yc.build(this.dynamicMode,this.enableOptionalEffects,this.splatScale,this.pointCloudModeEnabled,this.minSphericalHarmonicsDegree);let g=s.buildSplatIndexMaps(e);this.globalSplatIndexToLocalSplatIndexMap=g.localSplatIndexMap,this.globalSplatIndexToSceneIndexMap=g.sceneIndexMap}let p=this.getSplatCount(!0);this.enableDistancesComputationOnGPU&&this.setupDistancesComputationTransformFeedback();let f=this.refreshGPUDataFromSplatBuffers(d);for(let g=0;g<this.scenes.length;g++)this.lastBuildScenes[g]=this.scenes[g];return this.lastBuildSplatCount=p,this.lastBuildMaxSplatCount=this.getMaxSplatCount(),this.lastBuildSceneCount=this.scenes.length,i&&this.scenes.length>0&&this.buildSplatTree(t.map(g=>g.splatAlphaRemovalThreshold||1),r,a).then(()=>{this.onSplatTreeReadyCallback&&this.onSplatTreeReadyCallback(this.splatTree),this.onSplatTreeReadyCallback=null}),this.visible=this.scenes.length>0,f}freeIntermediateSplatData(){let e=t=>{delete t.source.data,delete t.image,t.onUpdate=null};delete this.splatDataTextures.baseData.covariances,delete this.splatDataTextures.baseData.centers,delete this.splatDataTextures.baseData.colors,delete this.splatDataTextures.baseData.sphericalHarmonics,delete this.splatDataTextures.centerColors.data,delete this.splatDataTextures.covariances.data,this.splatDataTextures.sphericalHarmonics&&delete this.splatDataTextures.sphericalHarmonics.data,this.splatDataTextures.sceneIndexes&&delete this.splatDataTextures.sceneIndexes.data,this.splatDataTextures.centerColors.texture.needsUpdate=!0,this.splatDataTextures.centerColors.texture.onUpdate=()=>{e(this.splatDataTextures.centerColors.texture)},this.splatDataTextures.covariances.texture.needsUpdate=!0,this.splatDataTextures.covariances.texture.onUpdate=()=>{e(this.splatDataTextures.covariances.texture)},this.splatDataTextures.sphericalHarmonics&&(this.splatDataTextures.sphericalHarmonics.texture?(this.splatDataTextures.sphericalHarmonics.texture.needsUpdate=!0,this.splatDataTextures.sphericalHarmonics.texture.onUpdate=()=>{e(this.splatDataTextures.sphericalHarmonics.texture)}):this.splatDataTextures.sphericalHarmonics.textures.forEach(t=>{t.needsUpdate=!0,t.onUpdate=()=>{e(t)}})),this.splatDataTextures.sceneIndexes&&(this.splatDataTextures.sceneIndexes.texture.needsUpdate=!0,this.splatDataTextures.sceneIndexes.texture.onUpdate=()=>{e(this.splatDataTextures.sceneIndexes.texture)})}dispose(){this.disposeMeshData(),this.disposeTextures(),this.disposeSplatTree(),this.enableDistancesComputationOnGPU&&(this.computeDistancesOnGPUSyncTimeout&&(clearTimeout(this.computeDistancesOnGPUSyncTimeout),this.computeDistancesOnGPUSyncTimeout=null),this.disposeDistancesComputationGPUResources()),this.scenes=[],this.distancesTransformFeedback={id:null,vertexShader:null,fragmentShader:null,program:null,centersBuffer:null,sceneIndexesBuffer:null,outDistancesBuffer:null,centersLoc:-1,modelViewProjLoc:-1,sceneIndexesLoc:-1,transformsLocs:[]},this.renderer=null,this.globalSplatIndexToLocalSplatIndexMap=[],this.globalSplatIndexToSceneIndexMap=[],this.lastBuildSplatCount=0,this.lastBuildScenes=[],this.lastBuildMaxSplatCount=0,this.lastBuildSceneCount=0,this.firstRenderTime=-1,this.finalBuild=!1,this.webGLUtils=null,this.boundingBox=new Dt,this.calculatedSceneCenter=new E,this.maxSplatDistanceFromSceneCenter=0,this.visibleRegionBufferRadius=0,this.visibleRegionRadius=0,this.visibleRegionFadeStartRadius=0,this.visibleRegionChanging=!1,this.splatScale=1,this.pointCloudModeEnabled=!1,this.disposed=!0,this.lastRenderer=null,this.visible=!1}disposeMeshData(){this.geometry&&this.geometry!==ju&&(this.geometry.dispose(),this.geometry=null),this.material&&(this.material.dispose(),this.material=null)}disposeTextures(){for(let e in this.splatDataTextures)if(this.splatDataTextures.hasOwnProperty(e)){let t=this.splatDataTextures[e];t.texture&&(t.texture.dispose(),t.texture=null)}this.splatDataTextures=null}disposeSplatTree(){this.splatTree&&(this.splatTree.dispose(),this.splatTree=null),this.baseSplatTree&&(this.baseSplatTree.dispose(),this.baseSplatTree=null)}getSplatTree(){return this.splatTree}onSplatTreeReady(e){this.onSplatTreeReadyCallback=e}getDataForDistancesComputation(e,t){let n=this.integerBasedDistancesComputation?this.getIntegerCenters(e,t,!0):this.getFloatCenters(e,t,!0),i=this.getSceneIndexes(e,t);return{centers:n,sceneIndexes:i}}refreshGPUDataFromSplatBuffers(e){let t=this.getSplatCount(!0);this.refreshDataTexturesFromSplatBuffers(e);let n=e?this.lastBuildSplatCount:0,{centers:i,sceneIndexes:r}=this.getDataForDistancesComputation(n,t-1);return this.enableDistancesComputationOnGPU&&this.refreshGPUBuffersForDistancesComputation(i,r,e),{from:n,to:t-1,count:t-n,centers:i,sceneIndexes:r}}refreshGPUBuffersForDistancesComputation(e,t,n=!1){let i=n?this.lastBuildSplatCount:0;this.updateGPUCentersBufferForDistancesComputation(n,e,i),this.updateGPUTransformIndexesBufferForDistancesComputation(n,t,i)}refreshDataTexturesFromSplatBuffers(e){let t=this.getSplatCount(!0),n=this.lastBuildSplatCount,i=t-1;e?this.updateBaseDataFromSplatBuffers(n,i):(this.setupDataTextures(),this.updateBaseDataFromSplatBuffers()),this.updateDataTexturesFromBaseData(n,i),this.updateVisibleRegion(e)}setupDataTextures(){let e=this.getMaxSplatCount(),t=this.getSplatCount(!0);this.disposeTextures();let n=(A,T)=>{let I=new Z(4096,1024);for(;I.x*I.y*A<e*T;)I.y*=2;return I},i=A=>A>=1?Mg:_g,r=A=>{let T=i(A),I=n(T,6);return{elementsPerTexelStored:T,texSize:I}},a=this.getTargetCovarianceCompressionLevel(),o=0,l=this.getTargetSphericalHarmonicsCompressionLevel(),c,h,u;if(this.splatRenderMode===Rn.ThreeD){let A=r(a);A.texSize.x*A.texSize.y>Yu&&a===0&&(a=1),c=new Float32Array(e*ma)}else h=new Float32Array(e*3),u=new Float32Array(e*4);let d=new Float32Array(e*3),p=new Uint8Array(e*4),f=Float32Array;l===1?f=Uint16Array:l===2&&(f=Uint8Array);let g=ps(this.minSphericalHarmonicsDegree),m=this.minSphericalHarmonicsDegree?new f(e*g):void 0,y=n(Jl,4),v=new Uint32Array(y.x*y.y*Jl);s.updateCenterColorsPaddedData(0,t-1,d,p,v);let x=new un(v,y.x,y.y,yi,qt);if(x.internalFormat="RGBA32UI",x.needsUpdate=!0,this.material.uniforms.centersColorsTexture.value=x,this.material.uniforms.centersColorsTextureSize.value.copy(y),this.material.uniformsNeedUpdate=!0,this.splatDataTextures={baseData:{covariances:c,scales:h,rotations:u,centers:d,colors:p,sphericalHarmonics:m},centerColors:{data:v,texture:x,size:y}},this.splatRenderMode===Rn.ThreeD){let A=r(a),T=A.elementsPerTexelStored,I=A.texSize,P=a>=1?Uint32Array:Float32Array,D=a>=1?Eg:Ag,L=new P(I.x*I.y*D);a===0?L.set(c):s.updatePaddedCompressedCovariancesTextureData(c,L,0,0,c.length);let z;if(a>=1)z=new un(L,I.x,I.y,yi,qt),z.internalFormat="RGBA32UI",this.material.uniforms.covariancesTextureHalfFloat.value=z;else{z=new un(L,I.x,I.y,Ot,Jt),this.material.uniforms.covariancesTexture.value=z;let U=new un(new Uint32Array(32),2,2,yi,qt);U.internalFormat="RGBA32UI",this.material.uniforms.covariancesTextureHalfFloat.value=U,U.needsUpdate=!0}z.needsUpdate=!0,this.material.uniforms.covariancesAreHalfFloat.value=a>=1?1:0,this.material.uniforms.covariancesTextureSize.value.copy(I),this.splatDataTextures.covariances={data:L,texture:z,size:I,compressionLevel:a,elementsPerTexelStored:T,elementsPerTexelAllocated:D}}else{let T=n(Zl,6),I=o>=1?Uint16Array:Float32Array,P=o>=1?qn:Jt,D=new I(T.x*T.y*Zl);s.updateScaleRotationsPaddedData(0,t-1,h,u,D);let L=new un(D,T.x,T.y,Ot,P);L.needsUpdate=!0,this.material.uniforms.scaleRotationsTexture.value=L,this.material.uniforms.scaleRotationsTextureSize.value.copy(T),this.splatDataTextures.scaleRotations={data:D,texture:L,size:T,compressionLevel:o}}if(m){let A=l===2?fn:qn,T=g;T%2!==0&&T++;let I=4,P=I===4?Ot:sa,D=n(I,T);if(D.x*D.y<=Yu){let L=D.x*D.y*I,z=new f(L);for(let k=0;k<t;k++){let W=g*k,Q=T*k;for(let q=0;q<g;q++)z[Q+q]=m[W+q]}let U=new un(z,D.x,D.y,P,A);U.needsUpdate=!0,this.material.uniforms.sphericalHarmonicsTexture.value=U,this.splatDataTextures.sphericalHarmonics={componentCount:g,paddedComponentCount:T,data:z,textureCount:1,texture:U,size:D,compressionLevel:l,elementsPerTexel:I}}else{let L=g/3;T=L,T%2!==0&&T++,D=n(I,T);let z=D.x*D.y*I,U=[this.material.uniforms.sphericalHarmonicsTextureR,this.material.uniforms.sphericalHarmonicsTextureG,this.material.uniforms.sphericalHarmonicsTextureB],k=[],W=[];for(let Q=0;Q<3;Q++){let q=new f(z);k.push(q);for(let le=0;le<t;le++){let ee=g*le,re=T*le;if(L>=3){for(let ce=0;ce<3;ce++)q[re+ce]=m[ee+Q*3+ce];if(L>=8)for(let ce=0;ce<5;ce++)q[re+3+ce]=m[ee+9+Q*5+ce]}}let te=new un(q,D.x,D.y,P,A);W.push(te),te.needsUpdate=!0,U[Q].value=te}this.material.uniforms.sphericalHarmonicsMultiTextureMode.value=1,this.splatDataTextures.sphericalHarmonics={componentCount:g,componentCountPerChannel:L,paddedComponentCount:T,data:k,textureCount:3,textures:W,size:D,compressionLevel:l,elementsPerTexel:I}}this.material.uniforms.sphericalHarmonicsTextureSize.value.copy(D),this.material.uniforms.sphericalHarmonics8BitMode.value=l===2?1:0;for(let L=0;L<this.scenes.length;L++){let z=this.scenes[L].splatBuffer;this.material.uniforms.sphericalHarmonics8BitCompressionRangeMin.value[L]=z.minSphericalHarmonicsCoeff,this.material.uniforms.sphericalHarmonics8BitCompressionRangeMax.value[L]=z.maxSphericalHarmonicsCoeff}this.material.uniformsNeedUpdate=!0}let S=n(Xu,4),M=new Uint32Array(S.x*S.y*Xu);for(let A=0;A<t;A++)M[A]=this.globalSplatIndexToSceneIndexMap[A];let _=new un(M,S.x,S.y,Gs,qt);_.internalFormat="R32UI",_.needsUpdate=!0,this.material.uniforms.sceneIndexesTexture.value=_,this.material.uniforms.sceneIndexesTextureSize.value.copy(S),this.material.uniformsNeedUpdate=!0,this.splatDataTextures.sceneIndexes={data:M,texture:_,size:S},this.material.uniforms.sceneCount.value=this.scenes.length}updateBaseDataFromSplatBuffers(e,t){let n=this.splatDataTextures.covariances,i=n?n.compressionLevel:void 0,r=this.splatDataTextures.scaleRotations,a=r?r.compressionLevel:void 0,o=this.splatDataTextures.sphericalHarmonics,l=o?o.compressionLevel:0;this.fillSplatDataArrays(this.splatDataTextures.baseData.covariances,this.splatDataTextures.baseData.scales,this.splatDataTextures.baseData.rotations,this.splatDataTextures.baseData.centers,this.splatDataTextures.baseData.colors,this.splatDataTextures.baseData.sphericalHarmonics,void 0,i,a,l,e,t,e)}updateDataTexturesFromBaseData(e,t){let n=this.splatDataTextures.covariances,i=n?n.compressionLevel:void 0,r=this.splatDataTextures.scaleRotations,a=r?r.compressionLevel:void 0,o=this.splatDataTextures.sphericalHarmonics,l=o?o.compressionLevel:0,c=this.splatDataTextures.centerColors,h=c.data,u=c.texture;s.updateCenterColorsPaddedData(e,t,this.splatDataTextures.baseData.centers,this.splatDataTextures.baseData.colors,h);let d=this.renderer?this.renderer.properties.get(u):null;if(!d||!d.__webglTexture?u.needsUpdate=!0:this.updateDataTexture(h,c.texture,c.size,d,Jl,Sg,4,e,t),n){let v=n.texture,x=e*ma,S=t*ma;if(i===0)for(let _=x;_<=S;_++){let A=this.splatDataTextures.baseData.covariances[_];n.data[_]=A}else s.updatePaddedCompressedCovariancesTextureData(this.splatDataTextures.baseData.covariances,n.data,e*n.elementsPerTexelAllocated,x,S);let M=this.renderer?this.renderer.properties.get(v):null;!M||!M.__webglTexture?v.needsUpdate=!0:i===0?this.updateDataTexture(n.data,n.texture,n.size,M,n.elementsPerTexelStored,ma,4,e,t):this.updateDataTexture(n.data,n.texture,n.size,M,n.elementsPerTexelAllocated,n.elementsPerTexelAllocated,2,e,t)}if(r){let v=r.data,x=r.texture,S=6,M=a===0?4:2;s.updateScaleRotationsPaddedData(e,t,this.splatDataTextures.baseData.scales,this.splatDataTextures.baseData.rotations,v);let _=this.renderer?this.renderer.properties.get(x):null;!_||!_.__webglTexture?x.needsUpdate=!0:this.updateDataTexture(v,r.texture,r.size,_,Zl,S,M,e,t)}let p=this.splatDataTextures.baseData.sphericalHarmonics;if(p){let v=4;l===1?v=2:l===2&&(v=1);let x=(_,A,T,I,P)=>{let D=this.renderer?this.renderer.properties.get(_):null;!D||!D.__webglTexture?_.needsUpdate=!0:this.updateDataTexture(I,_,A,D,T,P,v,e,t)},S=o.componentCount,M=o.paddedComponentCount;if(o.textureCount===1){let _=o.data;for(let A=e;A<=t;A++){let T=S*A,I=M*A;for(let P=0;P<S;P++)_[I+P]=p[T+P]}x(o.texture,o.size,o.elementsPerTexel,_,M)}else{let _=o.componentCountPerChannel;for(let A=0;A<3;A++){let T=o.data[A];for(let I=e;I<=t;I++){let P=S*I,D=M*I;if(_>=3){for(let L=0;L<3;L++)T[D+L]=p[P+A*3+L];if(_>=8)for(let L=0;L<5;L++)T[D+3+L]=p[P+9+A*5+L]}}x(o.textures[A],o.size,o.elementsPerTexel,T,M)}}}let f=this.splatDataTextures.sceneIndexes,g=f.data;for(let v=this.lastBuildSplatCount;v<=t;v++)g[v]=this.globalSplatIndexToSceneIndexMap[v];let m=f.texture,y=this.renderer?this.renderer.properties.get(m):null;!y||!y.__webglTexture?m.needsUpdate=!0:this.updateDataTexture(g,f.texture,f.size,y,1,1,1,this.lastBuildSplatCount,t)}getTargetCovarianceCompressionLevel(){return this.halfPrecisionCovariancesOnGPU?1:0}getTargetSphericalHarmonicsCompressionLevel(){return Math.max(1,this.getMaximumSplatBufferCompressionLevel())}getMaximumSplatBufferCompressionLevel(){let e;for(let t=0;t<this.scenes.length;t++){let i=this.getScene(t).splatBuffer;(t===0||i.compressionLevel>e)&&(e=i.compressionLevel)}return e}getMinimumSplatBufferCompressionLevel(){let e;for(let t=0;t<this.scenes.length;t++){let i=this.getScene(t).splatBuffer;(t===0||i.compressionLevel<e)&&(e=i.compressionLevel)}return e}static computeTextureUpdateRegion(e,t,n,i,r){let a=r/i,o=e*a,l=Math.floor(o/n),c=l*n*i,h=t*a,u=Math.floor(h/n),d=u*n*i+n*i;return{dataStart:c,dataEnd:d,startRow:l,endRow:u}}updateDataTexture(e,t,n,i,r,a,o,l,c){let h=this.renderer.getContext(),u=s.computeTextureUpdateRegion(l,c,n.x,r,a),d=u.dataEnd-u.dataStart,p=new e.constructor(e.buffer,u.dataStart*o,d),f=u.endRow-u.startRow+1,g=this.webGLUtils.convert(t.type),m=this.webGLUtils.convert(t.format,t.colorSpace),y=h.getParameter(h.TEXTURE_BINDING_2D);h.bindTexture(h.TEXTURE_2D,i.__webglTexture),h.texSubImage2D(h.TEXTURE_2D,0,0,u.startRow,n.x,f,m,g,p),h.bindTexture(h.TEXTURE_2D,y)}static updatePaddedCompressedCovariancesTextureData(e,t,n,i,r){let a=new DataView(t.buffer),o=n,l=0;for(let c=i;c<=r;c+=2)a.setUint16(o*2,e[c],!0),a.setUint16(o*2+2,e[c+1],!0),o+=2,l++,l>=3&&(o+=2,l=0)}static updateCenterColorsPaddedData(e,t,n,i,r){for(let a=e;a<=t;a++){let o=a*4,l=a*3,c=a*4;r[c]=um(i,o),r[c+1]=jl(n[l]),r[c+2]=jl(n[l+1]),r[c+3]=jl(n[l+2])}}static updateScaleRotationsPaddedData(e,t,n,i,r){for(let o=e;o<=t;o++){let l=o*3,c=o*4,h=o*6;r[h]=n[l],r[h+1]=n[l+1],r[h+2]=n[l+2],r[h+3]=i[c],r[h+4]=i[c+1],r[h+5]=i[c+2]}}updateVisibleRegion(e){let t=this.getSplatCount(!0),n=new E;if(!e){let r=new E;this.scenes.forEach(a=>{r.add(a.splatBuffer.sceneCenter)}),r.multiplyScalar(1/this.scenes.length),this.calculatedSceneCenter.copy(r),this.material.uniforms.sceneCenter.value.copy(this.calculatedSceneCenter),this.material.uniformsNeedUpdate=!0}let i=e?this.lastBuildSplatCount:0;for(let r=i;r<t;r++){this.getSplatCenter(r,n,!0);let a=n.sub(this.calculatedSceneCenter).length();a>this.maxSplatDistanceFromSceneCenter&&(this.maxSplatDistanceFromSceneCenter=a)}this.maxSplatDistanceFromSceneCenter-this.visibleRegionBufferRadius>qu&&(this.visibleRegionBufferRadius=this.maxSplatDistanceFromSceneCenter,this.visibleRegionRadius=Math.max(this.visibleRegionBufferRadius-qu,0)),this.finalBuild&&(this.visibleRegionRadius=this.visibleRegionBufferRadius=this.maxSplatDistanceFromSceneCenter),this.updateVisibleRegionFadeDistance()}updateVisibleRegionFadeDistance(e=_i.Default){let t=Tg*this.sceneFadeInRateMultiplier,n=bg*this.sceneFadeInRateMultiplier,i=this.finalBuild?t:n,r=e===_i.Default?i:n;this.visibleRegionFadeStartRadius=(this.visibleRegionRadius-this.visibleRegionFadeStartRadius)*r+this.visibleRegionFadeStartRadius;let o=(this.visibleRegionBufferRadius>0?this.visibleRegionFadeStartRadius/this.visibleRegionBufferRadius:0)>.99,l=o||e===_i.Instant?1:0;this.material.uniforms.visibleRegionFadeStartRadius.value=this.visibleRegionFadeStartRadius,this.material.uniforms.visibleRegionRadius.value=this.visibleRegionRadius,this.material.uniforms.firstRenderTime.value=this.firstRenderTime,this.material.uniforms.currentTime.value=performance.now(),this.material.uniforms.fadeInComplete.value=l,this.material.uniformsNeedUpdate=!0,this.visibleRegionChanging=!o}updateRenderIndexes(e,t){let n=this.geometry;n.attributes.splatIndex.set(e),n.attributes.splatIndex.needsUpdate=!0,t>0&&this.firstRenderTime===-1&&(this.firstRenderTime=performance.now()),n.instanceCount=t,n.setDrawRange(0,t)}updateTransforms(){for(let e=0;e<this.scenes.length;e++)this.getScene(e).updateTransform(this.dynamicMode)}updateUniforms=(function(){let e=new Z;return function(t,n,i,r,a,o){if(this.getSplatCount()>0){if(e.set(t.x*this.devicePixelRatio,t.y*this.devicePixelRatio),this.material.uniforms.viewport.value.copy(e),this.material.uniforms.basisViewport.value.set(1/e.x,1/e.y),this.material.uniforms.focal.value.set(n,i),this.material.uniforms.orthographicMode.value=r?1:0,this.material.uniforms.orthoZoom.value=a,this.material.uniforms.inverseFocalAdjustment.value=o,this.dynamicMode)for(let c=0;c<this.scenes.length;c++)this.material.uniforms.transforms.value[c].copy(this.getScene(c).transform);if(this.enableOptionalEffects)for(let c=0;c<this.scenes.length;c++)this.material.uniforms.sceneOpacity.value[c]=ct(this.getScene(c).opacity,0,1),this.material.uniforms.sceneVisibility.value[c]=this.getScene(c).visible?1:0,this.material.uniformsNeedUpdate=!0;this.material.uniformsNeedUpdate=!0}}})();setSplatScale(e=1){this.splatScale=e,this.material.uniforms.splatScale.value=e,this.material.uniformsNeedUpdate=!0}getSplatScale(){return this.splatScale}setPointCloudModeEnabled(e){this.pointCloudModeEnabled=e,this.material.uniforms.pointCloudModeEnabled.value=e?1:0,this.material.uniformsNeedUpdate=!0}getPointCloudModeEnabled(){return this.pointCloudModeEnabled}getSplatDataTextures(){return this.splatDataTextures}getSplatCount(e=!1){return e?s.getTotalSplatCountForScenes(this.scenes):this.lastBuildSplatCount}static getTotalSplatCountForScenes(e){let t=0;for(let n of e)n&&n.splatBuffer&&(t+=n.splatBuffer.getSplatCount());return t}static getTotalSplatCountForSplatBuffers(e){let t=0;for(let n of e)t+=n.getSplatCount();return t}getMaxSplatCount(){return s.getTotalMaxSplatCountForScenes(this.scenes)}static getTotalMaxSplatCountForScenes(e){let t=0;for(let n of e)n&&n.splatBuffer&&(t+=n.splatBuffer.getMaxSplatCount());return t}static getTotalMaxSplatCountForSplatBuffers(e){let t=0;for(let n of e)t+=n.getMaxSplatCount();return t}disposeDistancesComputationGPUResources(){if(!this.renderer)return;let e=this.renderer.getContext();this.distancesTransformFeedback.vao&&(e.deleteVertexArray(this.distancesTransformFeedback.vao),this.distancesTransformFeedback.vao=null),this.distancesTransformFeedback.program&&(e.deleteProgram(this.distancesTransformFeedback.program),e.deleteShader(this.distancesTransformFeedback.vertexShader),e.deleteShader(this.distancesTransformFeedback.fragmentShader),this.distancesTransformFeedback.program=null,this.distancesTransformFeedback.vertexShader=null,this.distancesTransformFeedback.fragmentShader=null),this.disposeDistancesComputationGPUBufferResources(),this.distancesTransformFeedback.id&&(e.deleteTransformFeedback(this.distancesTransformFeedback.id),this.distancesTransformFeedback.id=null)}disposeDistancesComputationGPUBufferResources(){if(!this.renderer)return;let e=this.renderer.getContext();this.distancesTransformFeedback.centersBuffer&&(this.distancesTransformFeedback.centersBuffer=null,e.deleteBuffer(this.distancesTransformFeedback.centersBuffer)),this.distancesTransformFeedback.outDistancesBuffer&&(e.deleteBuffer(this.distancesTransformFeedback.outDistancesBuffer),this.distancesTransformFeedback.outDistancesBuffer=null)}setRenderer(e){if(e!==this.renderer){this.renderer=e;let t=this.renderer.getContext(),n=new yg(t),i=new vg(t,n,{});if(n.init(i),this.webGLUtils=new zl(t,n,i),this.enableDistancesComputationOnGPU&&this.getSplatCount()>0){this.setupDistancesComputationTransformFeedback();let{centers:r,sceneIndexes:a}=this.getDataForDistancesComputation(0,this.getSplatCount()-1);this.refreshGPUBuffersForDistancesComputation(r,a)}}}setupDistancesComputationTransformFeedback=(function(){let e;return function(){let t=this.getMaxSplatCount();if(!this.renderer)return;let n=this.lastRenderer!==this.renderer,i=e!==t;if(!n&&!i)return;n?this.disposeDistancesComputationGPUResources():i&&this.disposeDistancesComputationGPUBufferResources();let r=this.renderer.getContext(),a=(d,p,f)=>{let g=d.createShader(p);if(!g)return console.error("Fatal error: gl could not create a shader object."),null;if(d.shaderSource(g,f),d.compileShader(g),!d.getShaderParameter(g,d.COMPILE_STATUS)){let y="unknown";p===d.VERTEX_SHADER?y="vertex shader":p===d.FRAGMENT_SHADER&&(y="fragement shader");let v=d.getShaderInfoLog(g);return console.error("Failed to compile "+y+" with these errors:"+v),d.deleteShader(g),null}return g},o;this.integerBasedDistancesComputation?(o=`#version 300 es
                in ivec4 center;
                flat out int distance;`,this.dynamicMode?o+=`
                        in uint sceneIndex;
                        uniform ivec4 transforms[${je.MaxScenes}];
                        void main(void) {
                            ivec4 transform = transforms[sceneIndex];
                            distance = center.x * transform.x + center.y * transform.y + center.z * transform.z + transform.w * center.w;
                        }
                    `:o+=`
                        uniform ivec3 modelViewProj;
                        void main(void) {
                            distance = center.x * modelViewProj.x + center.y * modelViewProj.y + center.z * modelViewProj.z;
                        }
                    `):(o=`#version 300 es
                in vec4 center;
                flat out float distance;`,this.dynamicMode?o+=`
                        in uint sceneIndex;
                        uniform mat4 transforms[${je.MaxScenes}];
                        void main(void) {
                            vec4 transformedCenter = transforms[sceneIndex] * vec4(center.xyz, 1.0);
                            distance = transformedCenter.z;
                        }
                    `:o+=`
                        uniform vec3 modelViewProj;
                        void main(void) {
                            distance = center.x * modelViewProj.x + center.y * modelViewProj.y + center.z * modelViewProj.z;
                        }
                    `);let l=`#version 300 es
                precision lowp float;
                out vec4 fragColor;
                void main(){}
            `,c=r.getParameter(r.VERTEX_ARRAY_BINDING),h=r.getParameter(r.CURRENT_PROGRAM),u=h?r.getProgramParameter(h,r.DELETE_STATUS):!1;if(n&&(this.distancesTransformFeedback.vao=r.createVertexArray()),r.bindVertexArray(this.distancesTransformFeedback.vao),n){let d=r.createProgram(),p=a(r,r.VERTEX_SHADER,o),f=a(r,r.FRAGMENT_SHADER,l);if(!p||!f)throw new Error("Could not compile shaders for distances computation on GPU.");if(r.attachShader(d,p),r.attachShader(d,f),r.transformFeedbackVaryings(d,["distance"],r.SEPARATE_ATTRIBS),r.linkProgram(d),!r.getProgramParameter(d,r.LINK_STATUS)){let m=r.getProgramInfoLog(d);throw console.error("Fatal error: Failed to link program: "+m),r.deleteProgram(d),r.deleteShader(f),r.deleteShader(p),new Error("Could not link shaders for distances computation on GPU.")}this.distancesTransformFeedback.program=d,this.distancesTransformFeedback.vertexShader=p,this.distancesTransformFeedback.vertexShader=f}if(r.useProgram(this.distancesTransformFeedback.program),this.distancesTransformFeedback.centersLoc=r.getAttribLocation(this.distancesTransformFeedback.program,"center"),this.dynamicMode){this.distancesTransformFeedback.sceneIndexesLoc=r.getAttribLocation(this.distancesTransformFeedback.program,"sceneIndex");for(let d=0;d<this.scenes.length;d++)this.distancesTransformFeedback.transformsLocs[d]=r.getUniformLocation(this.distancesTransformFeedback.program,`transforms[${d}]`)}else this.distancesTransformFeedback.modelViewProjLoc=r.getUniformLocation(this.distancesTransformFeedback.program,"modelViewProj");(n||i)&&(this.distancesTransformFeedback.centersBuffer=r.createBuffer(),r.bindBuffer(r.ARRAY_BUFFER,this.distancesTransformFeedback.centersBuffer),r.enableVertexAttribArray(this.distancesTransformFeedback.centersLoc),this.integerBasedDistancesComputation?r.vertexAttribIPointer(this.distancesTransformFeedback.centersLoc,4,r.INT,0,0):r.vertexAttribPointer(this.distancesTransformFeedback.centersLoc,4,r.FLOAT,!1,0,0),this.dynamicMode&&(this.distancesTransformFeedback.sceneIndexesBuffer=r.createBuffer(),r.bindBuffer(r.ARRAY_BUFFER,this.distancesTransformFeedback.sceneIndexesBuffer),r.enableVertexAttribArray(this.distancesTransformFeedback.sceneIndexesLoc),r.vertexAttribIPointer(this.distancesTransformFeedback.sceneIndexesLoc,1,r.UNSIGNED_INT,0,0))),(n||i)&&(this.distancesTransformFeedback.outDistancesBuffer=r.createBuffer()),r.bindBuffer(r.ARRAY_BUFFER,this.distancesTransformFeedback.outDistancesBuffer),r.bufferData(r.ARRAY_BUFFER,t*4,r.STATIC_READ),n&&(this.distancesTransformFeedback.id=r.createTransformFeedback()),r.bindTransformFeedback(r.TRANSFORM_FEEDBACK,this.distancesTransformFeedback.id),r.bindBufferBase(r.TRANSFORM_FEEDBACK_BUFFER,0,this.distancesTransformFeedback.outDistancesBuffer),h&&u!==!0&&r.useProgram(h),c&&r.bindVertexArray(c),this.lastRenderer=this.renderer,e=t}})();updateGPUCentersBufferForDistancesComputation(e,t,n){if(!this.renderer)return;let i=this.renderer.getContext(),r=i.getParameter(i.VERTEX_ARRAY_BINDING);i.bindVertexArray(this.distancesTransformFeedback.vao);let a=this.integerBasedDistancesComputation?Uint32Array:Float32Array,o=16,l=n*o;if(i.bindBuffer(i.ARRAY_BUFFER,this.distancesTransformFeedback.centersBuffer),e)i.bufferSubData(i.ARRAY_BUFFER,l,t);else{let c=new a(this.getMaxSplatCount()*o);c.set(t),i.bufferData(i.ARRAY_BUFFER,c,i.STATIC_DRAW)}i.bindBuffer(i.ARRAY_BUFFER,null),r&&i.bindVertexArray(r)}updateGPUTransformIndexesBufferForDistancesComputation(e,t,n){if(!this.renderer||!this.dynamicMode)return;let i=this.renderer.getContext(),r=i.getParameter(i.VERTEX_ARRAY_BINDING);i.bindVertexArray(this.distancesTransformFeedback.vao);let a=n*4;if(i.bindBuffer(i.ARRAY_BUFFER,this.distancesTransformFeedback.sceneIndexesBuffer),e)i.bufferSubData(i.ARRAY_BUFFER,a,t);else{let o=new Uint32Array(this.getMaxSplatCount()*4);o.set(t),i.bufferData(i.ARRAY_BUFFER,o,i.STATIC_DRAW)}i.bindBuffer(i.ARRAY_BUFFER,null),r&&i.bindVertexArray(r)}getSceneIndexes(e,t){let n,i=t-e+1;n=new Uint32Array(i);for(let r=e;r<=t;r++)n[r]=this.globalSplatIndexToSceneIndexMap[r];return n}fillTransformsArray=(function(){let e=[];return function(t){e.length!==t.length&&(e.length=t.length);for(let n=0;n<this.scenes.length;n++){let r=this.getScene(n).transform.elements;for(let a=0;a<16;a++)e[n*16+a]=r[a]}t.set(e)}})();computeDistancesOnGPU=(function(){let e=new ge;return function(t,n){if(!this.renderer)return;let i=this.renderer.getContext(),r=i.getParameter(i.VERTEX_ARRAY_BINDING),a=i.getParameter(i.CURRENT_PROGRAM),o=a?i.getProgramParameter(a,i.DELETE_STATUS):!1;if(i.bindVertexArray(this.distancesTransformFeedback.vao),i.useProgram(this.distancesTransformFeedback.program),i.enable(i.RASTERIZER_DISCARD),this.dynamicMode)for(let h=0;h<this.scenes.length;h++)if(e.copy(this.getScene(h).transform),e.premultiply(t),this.integerBasedDistancesComputation){let u=s.getIntegerMatrixArray(e),d=[u[2],u[6],u[10],u[14]];i.uniform4i(this.distancesTransformFeedback.transformsLocs[h],d[0],d[1],d[2],d[3])}else i.uniformMatrix4fv(this.distancesTransformFeedback.transformsLocs[h],!1,e.elements);else if(this.integerBasedDistancesComputation){let h=s.getIntegerMatrixArray(t),u=[h[2],h[6],h[10]];i.uniform3i(this.distancesTransformFeedback.modelViewProjLoc,u[0],u[1],u[2])}else{let h=[t.elements[2],t.elements[6],t.elements[10]];i.uniform3f(this.distancesTransformFeedback.modelViewProjLoc,h[0],h[1],h[2])}i.bindBuffer(i.ARRAY_BUFFER,this.distancesTransformFeedback.centersBuffer),i.enableVertexAttribArray(this.distancesTransformFeedback.centersLoc),this.integerBasedDistancesComputation?i.vertexAttribIPointer(this.distancesTransformFeedback.centersLoc,4,i.INT,0,0):i.vertexAttribPointer(this.distancesTransformFeedback.centersLoc,4,i.FLOAT,!1,0,0),this.dynamicMode&&(i.bindBuffer(i.ARRAY_BUFFER,this.distancesTransformFeedback.sceneIndexesBuffer),i.enableVertexAttribArray(this.distancesTransformFeedback.sceneIndexesLoc),i.vertexAttribIPointer(this.distancesTransformFeedback.sceneIndexesLoc,1,i.UNSIGNED_INT,0,0)),i.bindTransformFeedback(i.TRANSFORM_FEEDBACK,this.distancesTransformFeedback.id),i.bindBufferBase(i.TRANSFORM_FEEDBACK_BUFFER,0,this.distancesTransformFeedback.outDistancesBuffer),i.beginTransformFeedback(i.POINTS),i.drawArrays(i.POINTS,0,this.getSplatCount()),i.endTransformFeedback(),i.bindBufferBase(i.TRANSFORM_FEEDBACK_BUFFER,0,null),i.bindTransformFeedback(i.TRANSFORM_FEEDBACK,null),i.disable(i.RASTERIZER_DISCARD);let l=i.fenceSync(i.SYNC_GPU_COMMANDS_COMPLETE,0);i.flush();let c=new Promise(h=>{let u=()=>{if(this.disposed)h();else switch(i.clientWaitSync(l,0,0)){case i.TIMEOUT_EXPIRED:return this.computeDistancesOnGPUSyncTimeout=setTimeout(u),this.computeDistancesOnGPUSyncTimeout;case i.WAIT_FAILED:throw new Error("should never get here");default:this.computeDistancesOnGPUSyncTimeout=null,i.deleteSync(l);let g=i.getParameter(i.VERTEX_ARRAY_BINDING);i.bindVertexArray(this.distancesTransformFeedback.vao),i.bindBuffer(i.ARRAY_BUFFER,this.distancesTransformFeedback.outDistancesBuffer),i.getBufferSubData(i.ARRAY_BUFFER,0,n),i.bindBuffer(i.ARRAY_BUFFER,null),g&&i.bindVertexArray(g),h()}};this.computeDistancesOnGPUSyncTimeout=setTimeout(u)});return a&&o!==!0&&i.useProgram(a),r&&i.bindVertexArray(r),c}})();getLocalSplatParameters(e,t,n){n==null&&(n=!this.dynamicMode),t.splatBuffer=this.getSplatBufferForSplat(e),t.localIndex=this.getSplatLocalIndex(e),t.sceneTransform=n?this.getSceneTransformForSplat(e):null}fillSplatDataArrays(e,t,n,i,r,a,o,l=0,c=0,h=1,u,d,p=0,f){let g=new E;g.x=void 0,g.y=void 0,this.splatRenderMode===Rn.ThreeD?g.z=void 0:g.z=1;let m=new ge,y=0,v=this.scenes.length-1;f!=null&&f>=0&&f<=this.scenes.length&&(y=f,v=f);for(let x=y;x<=v;x++){o==null&&(o=!this.dynamicMode);let S=this.getScene(x),M=S.splatBuffer,_;if(o&&(this.getSceneTransform(x,m),_=m),e&&M.fillSplatCovarianceArray(e,_,u,d,p,l),t||n){if(!t||!n)throw new Error('SplatMesh::fillSplatDataArrays() -> "scales" and "rotations" must both be valid.');M.fillSplatScaleRotationArray(t,n,_,u,d,p,c,g)}i&&M.fillSplatCenterArray(i,_,u,d,p),r&&M.fillSplatColorArray(r,S.minimumAlpha,u,d,p),a&&M.fillSphericalHarmonicsArray(a,this.minSphericalHarmonicsDegree,_,u,d,p,h),p+=M.getSplatCount()}}getIntegerCenters(e,t,n=!1){let i=t-e+1,r=new Float32Array(i*3);this.fillSplatDataArrays(null,null,null,r,null,null,void 0,void 0,void 0,void 0,e);let a,o=n?4:3;a=new Int32Array(i*o);for(let l=0;l<i;l++){for(let c=0;c<3;c++)a[l*o+c]=Math.round(r[l*3+c]*1e3);n&&(a[l*o+3]=1e3)}return a}getFloatCenters(e,t,n=!1){let i=t-e+1,r=new Float32Array(i*3);if(this.fillSplatDataArrays(null,null,null,r,null,null,void 0,void 0,void 0,void 0,e),!n)return r;let a=new Float32Array(i*4);for(let o=0;o<i;o++){for(let l=0;l<3;l++)a[o*4+l]=r[o*3+l];a[o*4+3]=1}return a}getSplatCenter=(function(){let e={};return function(t,n,i){this.getLocalSplatParameters(t,e,i),e.splatBuffer.getSplatCenter(e.localIndex,n,e.sceneTransform)}})();getSplatScaleAndRotation=(function(){let e={},t=new E;return function(n,i,r,a){this.getLocalSplatParameters(n,e,a),t.x=void 0,t.y=void 0,t.z=void 0,this.splatRenderMode===Rn.TwoD&&(t.z=0),e.splatBuffer.getSplatScaleAndRotation(e.localIndex,i,r,e.sceneTransform,t)}})();getSplatColor=(function(){let e={};return function(t,n){this.getLocalSplatParameters(t,e),e.splatBuffer.getSplatColor(e.localIndex,n)}})();getSceneTransform(e,t){let n=this.getScene(e);n.updateTransform(this.dynamicMode),t.copy(n.transform)}getScene(e){if(e<0||e>=this.scenes.length)throw new Error("SplatMesh::getScene() -> Invalid scene index.");return this.scenes[e]}getSceneCount(){return this.scenes.length}getSplatBufferForSplat(e){return this.getScene(this.globalSplatIndexToSceneIndexMap[e]).splatBuffer}getSceneIndexForSplat(e){return this.globalSplatIndexToSceneIndexMap[e]}getSceneTransformForSplat(e){return this.getScene(this.globalSplatIndexToSceneIndexMap[e]).transform}getSplatLocalIndex(e){return this.globalSplatIndexToLocalSplatIndexMap[e]}static getIntegerMatrixArray(e){let t=e.elements,n=[];for(let i=0;i<16;i++)n[i]=Math.round(t[i]*1e3);return n}computeBoundingBox(e=!1,t){let n=this.getSplatCount();if(t!=null){if(t<0||t>=this.scenes.length)throw new Error("SplatMesh::computeBoundingBox() -> Invalid scene index.");n=this.scenes[t].splatBuffer.getSplatCount()}let i=new Float32Array(n*3);this.fillSplatDataArrays(null,null,null,i,null,null,e,void 0,void 0,void 0,void 0,t);let r=new E,a=new E;for(let o=0;o<n;o++){let l=o*3,c=i[l],h=i[l+1],u=i[l+2];(o===0||c<r.x)&&(r.x=c),(o===0||h<r.y)&&(r.y=h),(o===0||u<r.z)&&(r.z=u),(o===0||c>a.x)&&(a.x=c),(o===0||h>a.y)&&(a.y=h),(o===0||u>a.z)&&(a.z=u)}return new Dt(r,a)}},Cg="AGFzbQEAAAAADwhkeWxpbmsuMAEEAAAAAAEbA2AAAGAQf39/f39/f39/f39/f39/fwBgAAF/AhIBA2VudgZtZW1vcnkCAwCAgAQDBAMAAQIHVAQRX193YXNtX2NhbGxfY3RvcnMAABhfX3dhc21fYXBwbHlfZGF0YV9yZWxvY3MAAAtzb3J0SW5kZXhlcwABE2Vtc2NyaXB0ZW5fdGxzX2luaXQAAgqWEAMDAAELihAEAXwDewN/A30gCyAKayEMAkACQCAOBEAgDQRAQfj///8HIQpBiICAgHghDSALIAxNDQMgDCEBA0AgAyABQQJ0IgVqIAIgACAFaigCAEECdGooAgAiBTYCACAFIAogBSAKSBshCiAFIA0gBSANShshDSABQQFqIgEgC0cNAAsMAwsgDwRAIAsgDE0NAkF/IQ9B+P///wchCkGIgICAeCENIAwhAgNAIA8gByAAIAJBAnQiFWooAgAiFkECdGooAgAiFEcEQAJ/IAX9CQI4IAggFEEGdGoiDv0JAgwgDioCHP0gASAOKgIs/SACIA4qAjz9IAP95gEgBf0JAiggDv0JAgggDioCGP0gASAOKgIo/SACIA4qAjj9IAP95gEgBf0JAgggDv0JAgAgDioCEP0gASAOKgIg/SACIA4qAjD9IAP95gEgBf0JAhggDv0JAgQgDioCFP0gASAOKgIk/SACIA4qAjT9IAP95gH95AH95AH95AEiEf1f/QwAAAAAAECPQAAAAAAAQI9AIhL98gEiE/0hASIQmUQAAAAAAADgQWMEQCAQqgwBC0GAgICAeAshDgJ/IBP9IQAiEJlEAAAAAAAA4EFjBEAgEKoMAQtBgICAgHgL/REgDv0cAQJ/IBEgEf0NCAkKCwwNDg8AAAAAAAAAAP1fIBL98gEiEf0hACIQmUQAAAAAAADgQWMEQCAQqgwBC0GAgICAeAv9HAICfyAR/SEBIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4C/0cAyESIBQhDwsgAyAVaiABIBZBBHRq/QAAACAS/bUBIhH9GwAgEf0bAWogEf0bAmogEf0bA2oiDjYCACAOIAogCiAOShshCiAOIA0gDSAOSBshDSACQQFqIgIgC0cNAAsMAwsCfyAFKgIIu/0UIAUqAhi7/SIB/QwAAAAAAECPQAAAAAAAQI9A/fIBIhH9IQEiEJlEAAAAAAAA4EFjBEAgEKoMAQtBgICAgHgLIQ4CfyAR/SEAIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4CyECAn8gBSoCKLtEAAAAAABAj0CiIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4CyEFQfj///8HIQpBiICAgHghDSALIAxNDQIgAv0RIA79HAEgBf0cAiESIAwhBQNAIAMgBUECdCICaiABIAAgAmooAgBBBHRq/QAAACAS/bUBIhH9GwAgEf0bAWogEf0bAmoiAjYCACACIAogAiAKSBshCiACIA0gAiANShshDSAFQQFqIgUgC0cNAAsMAgsgDQRAQfj///8HIQpBiICAgHghDSALIAxNDQIgDCEBA0AgAyABQQJ0IgVqAn8gAiAAIAVqKAIAQQJ0aioCALtEAAAAAAAAsECiIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4CyIONgIAIAogDiAKIA5IGyEKIA0gDiANIA5KGyENIAFBAWoiASALRw0ACwwCCyAPRQRAIAsgDE0NASAFKgIoIRcgBSoCGCEYIAUqAgghGUH4////ByEKQYiAgIB4IQ0gDCEFA0ACfyAXIAEgACAFQQJ0IgdqKAIAQQR0aiICKgIIlCAZIAIqAgCUIBggAioCBJSSkrtEAAAAAAAAsECiIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4CyEOIAMgB2ogDjYCACAKIA4gCiAOSBshCiANIA4gDSAOShshDSAFQQFqIgUgC0cNAAsMAgsgCyAMTQ0AQX8hD0H4////ByEKQYiAgIB4IQ0gDCECA0AgDyAHIAAgAkECdCIUaigCAEECdCIVaigCACIORwRAIAX9CQI4IAggDkEGdGoiD/0JAgwgDyoCHP0gASAPKgIs/SACIA8qAjz9IAP95gEgBf0JAiggD/0JAgggDyoCGP0gASAPKgIo/SACIA8qAjj9IAP95gEgBf0JAgggD/0JAgAgDyoCEP0gASAPKgIg/SACIA8qAjD9IAP95gEgBf0JAhggD/0JAgQgDyoCFP0gASAPKgIk/SACIA8qAjT9IAP95gH95AH95AH95AEhESAOIQ8LIAMgFGoCfyAR/R8DIAEgFUECdCIOQQxyaioCAJQgEf0fAiABIA5BCHJqKgIAlCAR/R8AIAEgDmoqAgCUIBH9HwEgASAOQQRyaioCAJSSkpK7RAAAAAAAALBAoiIQmUQAAAAAAADgQWMEQCAQqgwBC0GAgICAeAsiDjYCACAKIA4gCiAOSBshCiANIA4gDSAOShshDSACQQFqIgIgC0cNAAsMAQtBiICAgHghDUH4////ByEKCyALIAxLBEAgCUEBa7MgDbIgCrKTlSEXIAwhDQNAAn8gFyADIA1BAnRqIgEoAgAgCmuylCIYi0MAAABPXQRAIBioDAELQYCAgIB4CyEOIAEgDjYCACAEIA5BAnRqIgEgASgCAEEBajYCACANQQFqIg0gC0cNAAsLIAlBAk8EQCAEKAIAIQ1BASEKA0AgBCAKQQJ0aiIBIAEoAgAgDWoiDTYCACAKQQFqIgogCUcNAAsLIAxBAEoEQCAMIQoDQCAGIApBAWsiAUECdCICaiAAIAJqKAIANgIAIApBAUshAiABIQogAg0ACwsgCyAMSgRAIAshCgNAIAYgCyAEIAMgCkEBayIKQQJ0IgFqKAIAQQJ0aiICKAIAIgVrQQJ0aiAAIAFqKAIANgIAIAIgBUEBazYCACAKIAxKDQALCwsEAEEACw==",Qu="AGFzbQEAAAAADwhkeWxpbmsuMAEEAAAAAAEXAmAAAGAQf39/f39/f39/f39/f39/fwACEgEDZW52Bm1lbW9yeQIDAICABAMDAgABBz4DEV9fd2FzbV9jYWxsX2N0b3JzAAAYX193YXNtX2FwcGx5X2RhdGFfcmVsb2NzAAALc29ydEluZGV4ZXMAAQqiDwICAAucDwMBfAd9Bn8gCyAKayEMAkACQCAOBEAgDQRAQfj///8HIQpBiICAgHghDSALIAxNDQMgDCEFA0AgAyAFQQJ0IgFqIAIgACABaigCAEECdGooAgAiATYCACABIAogASAKSBshCiABIA0gASANShshDSAFQQFqIgUgC0cNAAsMAwsgDwRAIAsgDE0NAkF/IQ9B+P///wchCkGIgICAeCENIAwhAgNAIA8gByAAIAJBAnQiGmooAgBBAnQiG2ooAgAiDkcEQAJ/IAUqAjgiESAIIA5BBnRqIg8qAjyUIAUqAigiEiAPKgI4lCAFKgIIIhMgDyoCMJQgBSoCGCIUIA8qAjSUkpKSu0QAAAAAAECPQKIiEJlEAAAAAAAA4EFjBEAgEKoMAQtBgICAgHgLIRgCfyARIA8qAiyUIBIgDyoCKJQgEyAPKgIglCAUIA8qAiSUkpKSu0QAAAAAAECPQKIiEJlEAAAAAAAA4EFjBEAgEKoMAQtBgICAgHgLIRkCfyARIA8qAhyUIBIgDyoCGJQgEyAPKgIQlCAUIA8qAhSUkpKSu0QAAAAAAECPQKIiEJlEAAAAAAAA4EFjBEAgEKoMAQtBgICAgHgLIRwCfyARIA8qAgyUIBIgDyoCCJQgEyAPKgIAlCAUIA8qAgSUkpKSu0QAAAAAAECPQKIiEJlEAAAAAAAA4EFjBEAgEKoMAQtBgICAgHgLIR0gDiEPCyADIBpqIAEgG0ECdGoiDigCBCAcbCAOKAIAIB1saiAOKAIIIBlsaiAOKAIMIBhsaiIONgIAIA4gCiAKIA5KGyEKIA4gDSANIA5IGyENIAJBAWoiAiALRw0ACwwDCwJ/IAUqAii7RAAAAAAAQI9AoiIQmUQAAAAAAADgQWMEQCAQqgwBC0GAgICAeAshAgJ/IAUqAhi7RAAAAAAAQI9AoiIQmUQAAAAAAADgQWMEQCAQqgwBC0GAgICAeAshByALIAxNAn8gBSoCCLtEAAAAAABAj0CiIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4CyEPQfj///8HIQpBiICAgHghDQ0CIAwhBQNAIAMgBUECdCIIaiABIAAgCGooAgBBBHRqIggoAgQgB2wgCCgCACAPbGogCCgCCCACbGoiCDYCACAIIAogCCAKSBshCiAIIA0gCCANShshDSAFQQFqIgUgC0cNAAsMAgsgDQRAQfj///8HIQpBiICAgHghDSALIAxNDQIgDCEFA0AgAyAFQQJ0IgFqAn8gAiAAIAFqKAIAQQJ0aioCALtEAAAAAAAAsECiIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4CyIONgIAIAogDiAKIA5IGyEKIA0gDiANIA5KGyENIAVBAWoiBSALRw0ACwwCCyAPRQRAIAsgDE0NASAFKgIoIREgBSoCGCESIAUqAgghE0H4////ByEKQYiAgIB4IQ0gDCEFA0ACfyARIAEgACAFQQJ0IgdqKAIAQQR0aiICKgIIlCATIAIqAgCUIBIgAioCBJSSkrtEAAAAAAAAsECiIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4CyEOIAMgB2ogDjYCACAKIA4gCiAOSBshCiANIA4gDSAOShshDSAFQQFqIgUgC0cNAAsMAgsgCyAMTQ0AQX8hD0H4////ByEKQYiAgIB4IQ0gDCECA0AgDyAHIAAgAkECdCIYaigCAEECdCIZaigCACIORwRAIAUqAjgiESAIIA5BBnRqIg8qAjyUIAUqAigiEiAPKgI4lCAFKgIIIhMgDyoCMJQgBSoCGCIUIA8qAjSUkpKSIRUgESAPKgIslCASIA8qAiiUIBMgDyoCIJQgFCAPKgIklJKSkiEWIBEgDyoCHJQgEiAPKgIYlCATIA8qAhCUIBQgDyoCFJSSkpIhFyARIA8qAgyUIBIgDyoCCJQgEyAPKgIAlCAUIA8qAgSUkpKSIREgDiEPCyADIBhqAn8gFSABIBlBAnRqIg4qAgyUIBYgDioCCJQgESAOKgIAlCAXIA4qAgSUkpKSu0QAAAAAAACwQKIiEJlEAAAAAAAA4EFjBEAgEKoMAQtBgICAgHgLIg42AgAgCiAOIAogDkgbIQogDSAOIA0gDkobIQ0gAkEBaiICIAtHDQALDAELQYiAgIB4IQ1B+P///wchCgsgCyAMSwRAIAlBAWuzIA2yIAqyk5UhESAMIQ0DQAJ/IBEgAyANQQJ0aiIBKAIAIAprspQiEotDAAAAT10EQCASqAwBC0GAgICAeAshDiABIA42AgAgBCAOQQJ0aiIBIAEoAgBBAWo2AgAgDUEBaiINIAtHDQALCyAJQQJPBEAgBCgCACENQQEhCgNAIAQgCkECdGoiASABKAIAIA1qIg02AgAgCkEBaiIKIAlHDQALCyAMQQBKBEAgDCEKA0AgBiAKQQFrIgFBAnQiAmogACACaigCADYCACAKQQFLIAEhCg0ACwsgCyAMSgRAIAshCgNAIAYgCyAEIAMgCkEBayIKQQJ0IgFqKAIAQQJ0aiICKAIAIgVrQQJ0aiAAIAFqKAIANgIAIAIgBUEBazYCACAKIAxKDQALCws=",wg="AGFzbQEAAAAADwhkeWxpbmsuMAEEAAAAAAEXAmAAAGAQf39/f39/f39/f39/f39/fwACDwEDZW52Bm1lbW9yeQIAAAMDAgABBz4DEV9fd2FzbV9jYWxsX2N0b3JzAAAYX193YXNtX2FwcGx5X2RhdGFfcmVsb2NzAAALc29ydEluZGV4ZXMAAQrrDwICAAvlDwQBfAN7B30DfyALIAprIQwCQAJAIA4EQCANBEBB+P///wchCkGIgICAeCENIAsgDE0NAyAMIQUDQCADIAVBAnQiAWogAiAAIAFqKAIAQQJ0aigCACIBNgIAIAEgCiABIApIGyEKIAEgDSABIA1KGyENIAVBAWoiBSALRw0ACwwDCyAPBEAgCyAMTQ0CQX8hD0H4////ByEKQYiAgIB4IQ0gDCECA0AgDyAHIAAgAkECdCIcaigCACIdQQJ0aigCACIbRwRAAn8gBf0JAjggCCAbQQZ0aiIO/QkCDCAOKgIc/SABIA4qAiz9IAIgDioCPP0gA/3mASAF/QkCKCAO/QkCCCAOKgIY/SABIA4qAij9IAIgDioCOP0gA/3mASAF/QkCCCAO/QkCACAOKgIQ/SABIA4qAiD9IAIgDioCMP0gA/3mASAF/QkCGCAO/QkCBCAOKgIU/SABIA4qAiT9IAIgDioCNP0gA/3mAf3kAf3kAf3kASIR/V/9DAAAAAAAQI9AAAAAAABAj0AiEv3yASIT/SEBIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4CyEOAn8gE/0hACIQmUQAAAAAAADgQWMEQCAQqgwBC0GAgICAeAv9ESAO/RwBAn8gESAR/Q0ICQoLDA0ODwABAgMAAQID/V8gEv3yASIR/SEAIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4C/0cAgJ/IBH9IQEiEJlEAAAAAAAA4EFjBEAgEKoMAQtBgICAgHgL/RwDIRIgGyEPCyADIBxqIAEgHUEEdGr9AAAAIBL9tQEiEf0bACAR/RsBaiAR/RsCaiAR/RsDaiIONgIAIA4gCiAKIA5KGyEKIA4gDSANIA5IGyENIAJBAWoiAiALRw0ACwwDCwJ/IAUqAgi7/RQgBSoCGLv9IgH9DAAAAAAAQI9AAAAAAABAj0D98gEiEf0hASIQmUQAAAAAAADgQWMEQCAQqgwBC0GAgICAeAshDgJ/IBH9IQAiEJlEAAAAAAAA4EFjBEAgEKoMAQtBgICAgHgLAn8gBSoCKLtEAAAAAABAj0CiIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4CyEFQfj///8HIQpBiICAgHghDSALIAxNDQL9ESAO/RwBIAX9HAIhEiAMIQUDQCADIAVBAnQiAmogASAAIAJqKAIAQQR0av0AAAAgEv21ASIR/RsAIBH9GwFqIBH9GwJqIgI2AgAgAiAKIAIgCkgbIQogAiANIAIgDUobIQ0gBUEBaiIFIAtHDQALDAILIA0EQEH4////ByEKQYiAgIB4IQ0gCyAMTQ0CIAwhBQNAIAMgBUECdCIBagJ/IAIgACABaigCAEECdGoqAgC7RAAAAAAAALBAoiIQmUQAAAAAAADgQWMEQCAQqgwBC0GAgICAeAsiDjYCACAKIA4gCiAOSBshCiANIA4gDSAOShshDSAFQQFqIgUgC0cNAAsMAgsgD0UEQCALIAxNDQEgBSoCKCEUIAUqAhghFSAFKgIIIRZB+P///wchCkGIgICAeCENIAwhBQNAAn8gFCABIAAgBUECdCIHaigCAEEEdGoiAioCCJQgFiACKgIAlCAVIAIqAgSUkpK7RAAAAAAAALBAoiIQmUQAAAAAAADgQWMEQCAQqgwBC0GAgICAeAshDiADIAdqIA42AgAgCiAOIAogDkgbIQogDSAOIA0gDkobIQ0gBUEBaiIFIAtHDQALDAILIAsgDE0NAEF/IQ9B+P///wchCkGIgICAeCENIAwhAgNAIA8gByAAIAJBAnQiG2ooAgBBAnQiHGooAgAiDkcEQCAFKgI4IhQgCCAOQQZ0aiIPKgI8lCAFKgIoIhUgDyoCOJQgBSoCCCIWIA8qAjCUIAUqAhgiFyAPKgI0lJKSkiEYIBQgDyoCLJQgFSAPKgIolCAWIA8qAiCUIBcgDyoCJJSSkpIhGSAUIA8qAhyUIBUgDyoCGJQgFiAPKgIQlCAXIA8qAhSUkpKSIRogFCAPKgIMlCAVIA8qAgiUIBYgDyoCAJQgFyAPKgIElJKSkiEUIA4hDwsgAyAbagJ/IBggASAcQQJ0aiIOKgIMlCAZIA4qAgiUIBQgDioCAJQgGiAOKgIElJKSkrtEAAAAAAAAsECiIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4CyIONgIAIAogDiAKIA5IGyEKIA0gDiANIA5KGyENIAJBAWoiAiALRw0ACwwBC0GIgICAeCENQfj///8HIQoLIAsgDEsEQCAJQQFrsyANsiAKspOVIRQgDCENA0ACfyAUIAMgDUECdGoiASgCACAKa7KUIhWLQwAAAE9dBEAgFagMAQtBgICAgHgLIQ4gASAONgIAIAQgDkECdGoiASABKAIAQQFqNgIAIA1BAWoiDSALRw0ACwsgCUECTwRAIAQoAgAhDUEBIQoDQCAEIApBAnRqIgEgASgCACANaiINNgIAIApBAWoiCiAJRw0ACwsgDEEASgRAIAwhCgNAIAYgCkEBayIBQQJ0IgJqIAAgAmooAgA2AgAgCkEBSyABIQoNAAsLIAsgDEoEQCALIQoDQCAGIAsgBCADIApBAWsiCkECdCIBaigCAEECdGoiAigCACIFa0ECdGogACABaigCADYCACACIAVBAWs2AgAgCiAMSg0ACwsL",Rg="AGFzbQEAAAAADwhkeWxpbmsuMAEEAAAAAAEXAmAAAGAQf39/f39/f39/f39/f39/fwACDwEDZW52Bm1lbW9yeQIAAAMDAgABBz4DEV9fd2FzbV9jYWxsX2N0b3JzAAAYX193YXNtX2FwcGx5X2RhdGFfcmVsb2NzAAALc29ydEluZGV4ZXMAAQqiDwICAAucDwMBfAd9Bn8gCyAKayEMAkACQCAOBEAgDQRAQfj///8HIQpBiICAgHghDSALIAxNDQMgDCEFA0AgAyAFQQJ0IgFqIAIgACABaigCAEECdGooAgAiATYCACABIAogASAKSBshCiABIA0gASANShshDSAFQQFqIgUgC0cNAAsMAwsgDwRAIAsgDE0NAkF/IQ9B+P///wchCkGIgICAeCENIAwhAgNAIA8gByAAIAJBAnQiGmooAgBBAnQiG2ooAgAiDkcEQAJ/IAUqAjgiESAIIA5BBnRqIg8qAjyUIAUqAigiEiAPKgI4lCAFKgIIIhMgDyoCMJQgBSoCGCIUIA8qAjSUkpKSu0QAAAAAAECPQKIiEJlEAAAAAAAA4EFjBEAgEKoMAQtBgICAgHgLIRgCfyARIA8qAiyUIBIgDyoCKJQgEyAPKgIglCAUIA8qAiSUkpKSu0QAAAAAAECPQKIiEJlEAAAAAAAA4EFjBEAgEKoMAQtBgICAgHgLIRkCfyARIA8qAhyUIBIgDyoCGJQgEyAPKgIQlCAUIA8qAhSUkpKSu0QAAAAAAECPQKIiEJlEAAAAAAAA4EFjBEAgEKoMAQtBgICAgHgLIRwCfyARIA8qAgyUIBIgDyoCCJQgEyAPKgIAlCAUIA8qAgSUkpKSu0QAAAAAAECPQKIiEJlEAAAAAAAA4EFjBEAgEKoMAQtBgICAgHgLIR0gDiEPCyADIBpqIAEgG0ECdGoiDigCBCAcbCAOKAIAIB1saiAOKAIIIBlsaiAOKAIMIBhsaiIONgIAIA4gCiAKIA5KGyEKIA4gDSANIA5IGyENIAJBAWoiAiALRw0ACwwDCwJ/IAUqAii7RAAAAAAAQI9AoiIQmUQAAAAAAADgQWMEQCAQqgwBC0GAgICAeAshAgJ/IAUqAhi7RAAAAAAAQI9AoiIQmUQAAAAAAADgQWMEQCAQqgwBC0GAgICAeAshByALIAxNAn8gBSoCCLtEAAAAAABAj0CiIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4CyEPQfj///8HIQpBiICAgHghDQ0CIAwhBQNAIAMgBUECdCIIaiABIAAgCGooAgBBBHRqIggoAgQgB2wgCCgCACAPbGogCCgCCCACbGoiCDYCACAIIAogCCAKSBshCiAIIA0gCCANShshDSAFQQFqIgUgC0cNAAsMAgsgDQRAQfj///8HIQpBiICAgHghDSALIAxNDQIgDCEFA0AgAyAFQQJ0IgFqAn8gAiAAIAFqKAIAQQJ0aioCALtEAAAAAAAAsECiIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4CyIONgIAIAogDiAKIA5IGyEKIA0gDiANIA5KGyENIAVBAWoiBSALRw0ACwwCCyAPRQRAIAsgDE0NASAFKgIoIREgBSoCGCESIAUqAgghE0H4////ByEKQYiAgIB4IQ0gDCEFA0ACfyARIAEgACAFQQJ0IgdqKAIAQQR0aiICKgIIlCATIAIqAgCUIBIgAioCBJSSkrtEAAAAAAAAsECiIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4CyEOIAMgB2ogDjYCACAKIA4gCiAOSBshCiANIA4gDSAOShshDSAFQQFqIgUgC0cNAAsMAgsgCyAMTQ0AQX8hD0H4////ByEKQYiAgIB4IQ0gDCECA0AgDyAHIAAgAkECdCIYaigCAEECdCIZaigCACIORwRAIAUqAjgiESAIIA5BBnRqIg8qAjyUIAUqAigiEiAPKgI4lCAFKgIIIhMgDyoCMJQgBSoCGCIUIA8qAjSUkpKSIRUgESAPKgIslCASIA8qAiiUIBMgDyoCIJQgFCAPKgIklJKSkiEWIBEgDyoCHJQgEiAPKgIYlCATIA8qAhCUIBQgDyoCFJSSkpIhFyARIA8qAgyUIBIgDyoCCJQgEyAPKgIAlCAUIA8qAgSUkpKSIREgDiEPCyADIBhqAn8gFSABIBlBAnRqIg4qAgyUIBYgDioCCJQgESAOKgIAlCAXIA4qAgSUkpKSu0QAAAAAAACwQKIiEJlEAAAAAAAA4EFjBEAgEKoMAQtBgICAgHgLIg42AgAgCiAOIAogDkgbIQogDSAOIA0gDkobIQ0gAkEBaiICIAtHDQALDAELQYiAgIB4IQ1B+P///wchCgsgCyAMSwRAIAlBAWuzIA2yIAqyk5UhESAMIQ0DQAJ/IBEgAyANQQJ0aiIBKAIAIAprspQiEotDAAAAT10EQCASqAwBC0GAgICAeAshDiABIA42AgAgBCAOQQJ0aiIBIAEoAgBBAWo2AgAgDUEBaiINIAtHDQALCyAJQQJPBEAgBCgCACENQQEhCgNAIAQgCkECdGoiASABKAIAIA1qIg02AgAgCkEBaiIKIAlHDQALCyAMQQBKBEAgDCEKA0AgBiAKQQFrIgFBAnQiAmogACACaigCADYCACAKQQFLIAEhCg0ACwsgCyAMSgRAIAshCgNAIAYgCyAEIAMgCkEBayIKQQJ0IgFqKAIAQQJ0aiICKAIAIgVrQQJ0aiAAIAFqKAIANgIAIAIgBUEBazYCACAKIAxKDQALCws=";function Ig(s){let e,t,n,i,r,a,o,l,c,h,u,d,p,f,g,m,y,v,x,S;function M(_,A,T,I,P,D,L){let z=performance.now();if(!n&&(new Uint32Array(t,o,P.byteLength/S.BytesPerInt).set(P),new Float32Array(t,h,L.byteLength/S.BytesPerFloat).set(L),I)){let q;i?q=new Int32Array(t,u,D.byteLength/S.BytesPerInt):q=new Float32Array(t,u,D.byteLength/S.BytesPerFloat),q.set(D)}m||(m=new Uint32Array(v)),new Float32Array(t,g,16).set(T),new Uint32Array(t,p,v).set(m),e.exports.sortIndexes(o,f,u,d,p,g,l,c,h,v,_,A,a,I,i,r);let U={sortDone:!0,splatSortCount:_,splatRenderCount:A,sortTime:0};if(!n){let W=new Uint32Array(t,l,A);(!y||y.length<A)&&(y=new Uint32Array(A)),y.set(W),U.sortedIndexes=y}let k=performance.now();U.sortTime=k-z,s.postMessage(U)}s.onmessage=_=>{if(_.data.centers)centers=_.data.centers,sceneIndexes=_.data.sceneIndexes,i?new Int32Array(t,f+_.data.range.from*S.BytesPerInt*4,_.data.range.count*4).set(new Int32Array(centers)):new Float32Array(t,f+_.data.range.from*S.BytesPerFloat*4,_.data.range.count*4).set(new Float32Array(centers)),r&&new Uint32Array(t,c+_.data.range.from*4,_.data.range.count).set(new Uint32Array(sceneIndexes)),x=_.data.range.from+_.data.range.count;else if(_.data.sort){let A=Math.min(_.data.sort.splatRenderCount||0,x),T=Math.min(_.data.sort.splatSortCount||0,x),I=_.data.sort.usePrecomputedDistances,P,D,L;n||(P=_.data.sort.indexesToSort,L=_.data.sort.transforms,I&&(D=_.data.sort.precomputedDistances)),M(T,A,_.data.sort.modelViewProj,I,P,D,L)}else if(_.data.init){S=_.data.init.Constants,a=_.data.init.splatCount,n=_.data.init.useSharedMemory,i=_.data.init.integerBasedSort,r=_.data.init.dynamicMode,v=_.data.init.distanceMapRange,x=0;let A=i?S.BytesPerInt*4:S.BytesPerFloat*4,T=new Uint8Array(_.data.init.sorterWasmBytes),I=16*S.BytesPerFloat,P=a*S.BytesPerInt,D=a*A,L=I,z=i?a*S.BytesPerInt:a*S.BytesPerFloat,U=a*S.BytesPerInt,k=a*S.BytesPerInt,W=i?v*S.BytesPerInt*2:v*S.BytesPerFloat*2,Q=r?a*S.BytesPerInt:0,q=r?S.MaxScenes*I:0,te=S.MemoryPageSize*32,le=P+D+L+z+U+W+k+Q+q+te,ee=Math.floor(le/S.MemoryPageSize)+1,re={module:{},env:{memory:new WebAssembly.Memory({initial:ee,maximum:ee,shared:!0})}};WebAssembly.compile(T).then(ce=>WebAssembly.instantiate(ce,re)).then(ce=>{e=ce,o=0,f=o+P,g=f+D,u=g+L,d=u+z,p=d+U,l=p+W,c=l+k,h=c+Q,t=re.env.memory.buffer,n?s.postMessage({sortSetupPhase1Complete:!0,indexesToSortBuffer:t,indexesToSortOffset:o,sortedIndexesBuffer:t,sortedIndexesOffset:l,precomputedDistancesBuffer:t,precomputedDistancesOffset:u,transformsBuffer:t,transformsOffset:h}):s.postMessage({sortSetupPhase1Complete:!0})})}}}function Pg(s,e,t,n,i,r=je.DefaultSplatSortDistanceMapPrecision){let a=new Worker(URL.createObjectURL(new Blob(["(",Ig.toString(),")(self)"],{type:"application/javascript"}))),o=Cg,l=bc()?Ku():null;!t&&!e?(o=Qu,l&&l.major<=16&&l.minor<4&&(o=Rg)):t?e||l&&l.major<=16&&l.minor<4&&(o=wg):o=Qu;let c=atob(o),h=new Uint8Array(c.length);for(let u=0;u<c.length;u++)h[u]=c.charCodeAt(u);return a.postMessage({init:{sorterWasmBytes:h.buffer,splatCount:s,useSharedMemory:e,integerBasedSort:n,dynamicMode:i,distanceMapRange:1<<r,Constants:{BytesPerFloat:je.BytesPerFloat,BytesPerInt:je.BytesPerInt,MemoryPageSize:je.MemoryPageSize,MaxScenes:je.MaxScenes}}}),a}var hs={None:0,VR:1,AR:2},Ys=class s{static createButton(e,t={}){let n=document.createElement("button");function i(){let c=null;async function h(p){p.addEventListener("end",u),await e.xr.setSession(p),n.textContent="EXIT VR",c=p}function u(){c.removeEventListener("end",u),n.textContent="ENTER VR",c=null}n.style.display="",n.style.cursor="pointer",n.style.left="calc(50% - 50px)",n.style.width="100px",n.textContent="ENTER VR";let d={...t,optionalFeatures:["local-floor","bounded-floor","layers",...t.optionalFeatures||[]]};n.onmouseenter=function(){n.style.opacity="1.0"},n.onmouseleave=function(){n.style.opacity="0.5"},n.onclick=function(){c===null?navigator.xr.requestSession("immersive-vr",d).then(h):(c.end(),navigator.xr.offerSession!==void 0&&navigator.xr.offerSession("immersive-vr",d).then(h).catch(p=>{console.warn(p)}))},navigator.xr.offerSession!==void 0&&navigator.xr.offerSession("immersive-vr",d).then(h).catch(p=>{console.warn(p)})}function r(){n.style.display="",n.style.cursor="auto",n.style.left="calc(50% - 75px)",n.style.width="150px",n.onmouseenter=null,n.onmouseleave=null,n.onclick=null}function a(){r(),n.textContent="VR NOT SUPPORTED"}function o(c){r(),console.warn("Exception when trying to call xr.isSessionSupported",c),n.textContent="VR NOT ALLOWED"}function l(c){c.style.position="absolute",c.style.bottom="20px",c.style.padding="12px 6px",c.style.border="1px solid #fff",c.style.borderRadius="4px",c.style.background="rgba(0,0,0,0.1)",c.style.color="#fff",c.style.font="normal 13px sans-serif",c.style.textAlign="center",c.style.opacity="0.5",c.style.outline="none",c.style.zIndex="999"}if("xr"in navigator)return n.id="VRButton",n.style.display="none",l(n),navigator.xr.isSessionSupported("immersive-vr").then(function(c){c?i():a(),c&&s.xrSessionIsGranted&&n.click()}).catch(o),n;{let c=document.createElement("a");return window.isSecureContext===!1?(c.href=document.location.href.replace(/^http:/,"https:"),c.innerHTML="WEBXR NEEDS HTTPS"):(c.href="https://immersiveweb.dev/",c.innerHTML="WEBXR NOT AVAILABLE"),c.style.left="calc(50% - 90px)",c.style.width="180px",c.style.textDecoration="none",l(c),c}}static registerSessionGrantedListener(){if(typeof navigator<"u"&&"xr"in navigator){if(/WebXRViewer\//i.test(navigator.userAgent))return;navigator.xr.addEventListener("sessiongranted",()=>{s.xrSessionIsGranted=!0})}}};Ys.xrSessionIsGranted=!1;Ys.registerSessionGrantedListener();var Ec=class{static createButton(e,t={}){let n=document.createElement("button");function i(){if(t.domOverlay===void 0){let d=document.createElement("div");d.style.display="none",document.body.appendChild(d);let p=document.createElementNS("http://www.w3.org/2000/svg","svg");p.setAttribute("width",38),p.setAttribute("height",38),p.style.position="absolute",p.style.right="20px",p.style.top="20px",p.addEventListener("click",function(){c.end()}),d.appendChild(p);let f=document.createElementNS("http://www.w3.org/2000/svg","path");f.setAttribute("d","M 12,12 L 28,28 M 28,12 12,28"),f.setAttribute("stroke","#fff"),f.setAttribute("stroke-width",2),p.appendChild(f),t.optionalFeatures===void 0&&(t.optionalFeatures=[]),t.optionalFeatures.push("dom-overlay"),t.domOverlay={root:d}}let c=null;async function h(d){d.addEventListener("end",u),e.xr.setReferenceSpaceType("local"),await e.xr.setSession(d),n.textContent="STOP AR",t.domOverlay.root.style.display="",c=d}function u(){c.removeEventListener("end",u),n.textContent="START AR",t.domOverlay.root.style.display="none",c=null}n.style.display="",n.style.cursor="pointer",n.style.left="calc(50% - 50px)",n.style.width="100px",n.textContent="START AR",n.onmouseenter=function(){n.style.opacity="1.0"},n.onmouseleave=function(){n.style.opacity="0.5"},n.onclick=function(){c===null?navigator.xr.requestSession("immersive-ar",t).then(h):(c.end(),navigator.xr.offerSession!==void 0&&navigator.xr.offerSession("immersive-ar",t).then(h).catch(d=>{console.warn(d)}))},navigator.xr.offerSession!==void 0&&navigator.xr.offerSession("immersive-ar",t).then(h).catch(d=>{console.warn(d)})}function r(){n.style.display="",n.style.cursor="auto",n.style.left="calc(50% - 75px)",n.style.width="150px",n.onmouseenter=null,n.onmouseleave=null,n.onclick=null}function a(){r(),n.textContent="AR NOT SUPPORTED"}function o(c){r(),console.warn("Exception when trying to call xr.isSessionSupported",c),n.textContent="AR NOT ALLOWED"}function l(c){c.style.position="absolute",c.style.bottom="20px",c.style.padding="12px 6px",c.style.border="1px solid #fff",c.style.borderRadius="4px",c.style.background="rgba(0,0,0,0.1)",c.style.color="#fff",c.style.font="normal 13px sans-serif",c.style.textAlign="center",c.style.opacity="0.5",c.style.outline="none",c.style.zIndex="999"}if("xr"in navigator)return n.id="ARButton",n.style.display="none",l(n),navigator.xr.isSessionSupported("immersive-ar").then(function(c){c?i():a()}).catch(o),n;{let c=document.createElement("a");return window.isSecureContext===!1?(c.href=document.location.href.replace(/^http:/,"https:"),c.innerHTML="WEBXR NEEDS HTTPS"):(c.href="https://immersiveweb.dev/",c.innerHTML="WEBXR NOT AVAILABLE"),c.style.left="calc(50% - 90px)",c.style.width="180px",c.style.textDecoration="none",l(c),c}}},$l={Always:0,OnChange:1,Never:2},Dg=50,Bg=.75,Lg=15e5,Fg=10,Ug=2.5,Og=60,va=class s{constructor(e={}){if(e.cameraUp||(e.cameraUp=[0,1,0]),this.cameraUp=new E().fromArray(e.cameraUp),e.initialCameraPosition||(e.initialCameraPosition=[0,10,15]),this.initialCameraPosition=new E().fromArray(e.initialCameraPosition),e.initialCameraLookAt||(e.initialCameraLookAt=[0,0,0]),this.initialCameraLookAt=new E().fromArray(e.initialCameraLookAt),this.dropInMode=e.dropInMode||!1,(e.selfDrivenMode===void 0||e.selfDrivenMode===null)&&(e.selfDrivenMode=!0),this.selfDrivenMode=e.selfDrivenMode&&!this.dropInMode,this.selfDrivenUpdateFunc=this.selfDrivenUpdate.bind(this),e.useBuiltInControls===void 0&&(e.useBuiltInControls=!0),this.useBuiltInControls=e.useBuiltInControls,this.rootElement=e.rootElement,this.ignoreDevicePixelRatio=e.ignoreDevicePixelRatio||!1,this.devicePixelRatio=this.ignoreDevicePixelRatio?1:window.devicePixelRatio||1,this.halfPrecisionCovariancesOnGPU=e.halfPrecisionCovariancesOnGPU||!1,this.threeScene=e.threeScene,this.renderer=e.renderer,this.camera=e.camera,this.gpuAcceleratedSort=e.gpuAcceleratedSort||!1,(e.integerBasedSort===void 0||e.integerBasedSort===null)&&(e.integerBasedSort=!0),this.integerBasedSort=e.integerBasedSort,(e.sharedMemoryForWorkers===void 0||e.sharedMemoryForWorkers===null)&&(e.sharedMemoryForWorkers=!0),this.sharedMemoryForWorkers=e.sharedMemoryForWorkers,this.dynamicScene=!!e.dynamicScene,this.antialiased=e.antialiased||!1,this.kernel2DSize=e.kernel2DSize===void 0?.3:e.kernel2DSize,this.webXRMode=e.webXRMode||hs.None,this.webXRMode!==hs.None&&(this.gpuAcceleratedSort=!1),this.webXRActive=!1,this.webXRSessionInit=e.webXRSessionInit||{},this.renderMode=e.renderMode||$l.Always,this.sceneRevealMode=e.sceneRevealMode||_i.Default,this.focalAdjustment=e.focalAdjustment||1,this.maxScreenSpaceSplatSize=e.maxScreenSpaceSplatSize||1024,this.logLevel=e.logLevel||fs.None,this.sphericalHarmonicsDegree=e.sphericalHarmonicsDegree||0,this.enableOptionalEffects=e.enableOptionalEffects||!1,(e.enableSIMDInSort===void 0||e.enableSIMDInSort===null)&&(e.enableSIMDInSort=!0),this.enableSIMDInSort=e.enableSIMDInSort,(e.inMemoryCompressionLevel===void 0||e.inMemoryCompressionLevel===null)&&(e.inMemoryCompressionLevel=0),this.inMemoryCompressionLevel=e.inMemoryCompressionLevel,(e.optimizeSplatData===void 0||e.optimizeSplatData===null)&&(e.optimizeSplatData=!0),this.optimizeSplatData=e.optimizeSplatData,(e.freeIntermediateSplatData===void 0||e.freeIntermediateSplatData===null)&&(e.freeIntermediateSplatData=!1),this.freeIntermediateSplatData=e.freeIntermediateSplatData,bc()){let n=Ku();n.major<17&&(this.enableSIMDInSort=!1),n.major<16&&(this.sharedMemoryForWorkers=!1)}(e.splatRenderMode===void 0||e.splatRenderMode===null)&&(e.splatRenderMode=Rn.ThreeD),this.splatRenderMode=e.splatRenderMode,this.sceneFadeInRateMultiplier=e.sceneFadeInRateMultiplier||1,this.splatSortDistanceMapPrecision=e.splatSortDistanceMapPrecision||je.DefaultSplatSortDistanceMapPrecision;let t=this.integerBasedSort?20:24;this.splatSortDistanceMapPrecision=ct(this.splatSortDistanceMapPrecision,10,t),this.onSplatMeshChangedCallback=null,this.createSplatMesh(),this.controls=null,this.perspectiveControls=null,this.orthographicControls=null,this.orthographicCamera=null,this.perspectiveCamera=null,this.showMeshCursor=!1,this.showControlPlane=!1,this.showInfo=!1,this.sceneHelper=null,this.sortWorker=null,this.sortRunning=!1,this.splatRenderCount=0,this.splatSortCount=0,this.lastSplatSortCount=0,this.sortWorkerIndexesToSort=null,this.sortWorkerSortedIndexes=null,this.sortWorkerPrecomputedDistances=null,this.sortWorkerTransforms=null,this.preSortMessages=[],this.runAfterNextSort=[],this.selfDrivenModeRunning=!1,this.splatRenderReady=!1,this.raycaster=new mc,this.infoPanel=null,this.startInOrthographicMode=!1,this.currentFPS=0,this.lastSortTime=0,this.consecutiveRenderFrames=0,this.previousCameraTarget=new E,this.nextCameraTarget=new E,this.mousePosition=new Z,this.mouseDownPosition=new Z,this.mouseDownTime=null,this.resizeObserver=null,this.mouseMoveListener=null,this.mouseDownListener=null,this.mouseUpListener=null,this.keyDownListener=null,this.sortPromise=null,this.sortPromiseResolver=null,this.splatSceneDownloadPromises={},this.splatSceneDownloadAndBuildPromise=null,this.splatSceneRemovalPromise=null,this.loadingSpinner=new cc(null,this.rootElement||document.body),this.loadingSpinner.hide(),this.loadingProgressBar=new hc(this.rootElement||document.body),this.loadingProgressBar.hide(),this.infoPanel=new uc(this.rootElement||document.body),this.infoPanel.hide(),this.usingExternalCamera=!!(this.dropInMode||this.camera),this.usingExternalRenderer=!!(this.dropInMode||this.renderer),this.initialized=!1,this.disposing=!1,this.disposed=!1,this.disposePromise=null,this.dropInMode||this.init()}createSplatMesh(){this.splatMesh=new Mc(this.splatRenderMode,this.dynamicScene,this.enableOptionalEffects,this.halfPrecisionCovariancesOnGPU,this.devicePixelRatio,this.gpuAcceleratedSort,this.integerBasedSort,this.antialiased,this.maxScreenSpaceSplatSize,this.logLevel,this.sphericalHarmonicsDegree,this.sceneFadeInRateMultiplier,this.kernel2DSize),this.splatMesh.frustumCulled=!1,this.onSplatMeshChangedCallback&&this.onSplatMeshChangedCallback()}init(){this.initialized||(this.rootElement||(this.usingExternalRenderer?this.rootElement=this.renderer.domElement||document.body:(this.rootElement=document.createElement("div"),this.rootElement.style.width="100%",this.rootElement.style.height="100%",this.rootElement.style.position="absolute",document.body.appendChild(this.rootElement))),this.setupCamera(),this.setupRenderer(),this.setupWebXR(this.webXRSessionInit),this.setupControls(),this.setupEventHandlers(),this.threeScene=this.threeScene||new ts,this.sceneHelper=new pc(this.threeScene),this.sceneHelper.setupMeshCursor(),this.sceneHelper.setupFocusMarker(),this.sceneHelper.setupControlPlane(),this.loadingProgressBar.setContainer(this.rootElement),this.loadingSpinner.setContainer(this.rootElement),this.infoPanel.setContainer(this.rootElement),this.initialized=!0)}setupCamera(){if(!this.usingExternalCamera){let e=new Z;this.getRenderDimensions(e),this.perspectiveCamera=new wt(Dg,e.x/e.y,.1,1e3),this.orthographicCamera=new Ji(e.x/-2,e.x/2,e.y/2,e.y/-2,.1,1e3),this.camera=this.startInOrthographicMode?this.orthographicCamera:this.perspectiveCamera,this.camera.position.copy(this.initialCameraPosition),this.camera.up.copy(this.cameraUp).normalize(),this.camera.lookAt(this.initialCameraLookAt)}}setupRenderer(){if(!this.usingExternalRenderer){let e=new Z;this.getRenderDimensions(e),this.renderer=new es({antialias:!1,precision:"highp"}),this.renderer.setPixelRatio(this.devicePixelRatio),this.renderer.autoClear=!0,this.renderer.setClearColor(new Pe(0),0),this.renderer.setSize(e.x,e.y),this.resizeObserver=new ResizeObserver(()=>{this.getRenderDimensions(e),this.renderer.setSize(e.x,e.y),this.forceRenderNextFrame()}),this.resizeObserver.observe(this.rootElement),this.rootElement.appendChild(this.renderer.domElement)}}setupWebXR(e){this.webXRMode&&(this.webXRMode===hs.VR?this.rootElement.appendChild(Ys.createButton(this.renderer,e)):this.webXRMode===hs.AR&&this.rootElement.appendChild(Ec.createButton(this.renderer,e)),this.renderer.xr.addEventListener("sessionstart",t=>{this.webXRActive=!0}),this.renderer.xr.addEventListener("sessionend",t=>{this.webXRActive=!1}),this.renderer.xr.enabled=!0,this.camera.position.copy(this.initialCameraPosition),this.camera.up.copy(this.cameraUp).normalize(),this.camera.lookAt(this.initialCameraLookAt))}setupControls(){if(this.useBuiltInControls&&this.webXRMode===hs.None){this.usingExternalCamera?this.camera.isOrthographicCamera?this.orthographicControls=new ds(this.camera,this.renderer.domElement):this.perspectiveControls=new ds(this.camera,this.renderer.domElement):(this.perspectiveControls=new ds(this.perspectiveCamera,this.renderer.domElement),this.orthographicControls=new ds(this.orthographicCamera,this.renderer.domElement));for(let e of[this.orthographicControls,this.perspectiveControls])e&&(e.listenToKeyEvents(window),e.rotateSpeed=.5,e.maxPolarAngle=Math.PI*.75,e.minPolarAngle=.1,e.enableDamping=!0,e.dampingFactor=.05,e.target.copy(this.initialCameraLookAt),e.update());this.controls=this.camera.isOrthographicCamera?this.orthographicControls:this.perspectiveControls,this.controls.update()}}setupEventHandlers(){this.useBuiltInControls&&this.webXRMode===hs.None&&(this.mouseMoveListener=this.onMouseMove.bind(this),this.renderer.domElement.addEventListener("pointermove",this.mouseMoveListener,!1),this.mouseDownListener=this.onMouseDown.bind(this),this.renderer.domElement.addEventListener("pointerdown",this.mouseDownListener,!1),this.mouseUpListener=this.onMouseUp.bind(this),this.renderer.domElement.addEventListener("pointerup",this.mouseUpListener,!1),this.keyDownListener=this.onKeyDown.bind(this),window.addEventListener("keydown",this.keyDownListener,!1))}removeEventHandlers(){this.useBuiltInControls&&(this.renderer.domElement.removeEventListener("pointermove",this.mouseMoveListener),this.mouseMoveListener=null,this.renderer.domElement.removeEventListener("pointerdown",this.mouseDownListener),this.mouseDownListener=null,this.renderer.domElement.removeEventListener("pointerup",this.mouseUpListener),this.mouseUpListener=null,window.removeEventListener("keydown",this.keyDownListener),this.keyDownListener=null)}setRenderMode(e){this.renderMode=e}setActiveSphericalHarmonicsDegrees(e){this.splatMesh.material.uniforms.sphericalHarmonicsDegree.value=e,this.splatMesh.material.uniformsNeedUpdate=!0}onSplatMeshChanged(e){this.onSplatMeshChangedCallback=e}onKeyDown=(function(){let e=new E,t=new ge,n=new ge;return function(i){switch(e.set(0,0,-1),e.transformDirection(this.camera.matrixWorld),t.makeRotationAxis(e,Math.PI/128),n.makeRotationAxis(e,-Math.PI/128),i.code){case"KeyG":this.focalAdjustment+=.02,this.forceRenderNextFrame();break;case"KeyF":this.focalAdjustment-=.02,this.forceRenderNextFrame();break;case"ArrowLeft":this.camera.up.transformDirection(t);break;case"ArrowRight":this.camera.up.transformDirection(n);break;case"KeyC":this.showMeshCursor=!this.showMeshCursor;break;case"KeyU":this.showControlPlane=!this.showControlPlane;break;case"KeyI":this.showInfo=!this.showInfo,this.showInfo?this.infoPanel.show():this.infoPanel.hide();break;case"KeyO":this.usingExternalCamera||this.setOrthographicMode(!this.camera.isOrthographicCamera);break;case"KeyP":this.usingExternalCamera||this.splatMesh.setPointCloudModeEnabled(!this.splatMesh.getPointCloudModeEnabled());break;case"Equal":this.usingExternalCamera||this.splatMesh.setSplatScale(this.splatMesh.getSplatScale()+.05);break;case"Minus":this.usingExternalCamera||this.splatMesh.setSplatScale(Math.max(this.splatMesh.getSplatScale()-.05,0));break}}})();onMouseMove(e){this.mousePosition.set(e.offsetX,e.offsetY)}onMouseDown(){this.mouseDownPosition.copy(this.mousePosition),this.mouseDownTime=ls()}onMouseUp=(function(){let e=new Z;return function(t){e.copy(this.mousePosition).sub(this.mouseDownPosition),ls()-this.mouseDownTime<.5&&e.length()<2&&this.onMouseClick(t)}})();onMouseClick(e){this.mousePosition.set(e.offsetX,e.offsetY),this.checkForFocalPointChange()}checkForFocalPointChange=(function(){let e=new Z,t=new E,n=[];return function(){if(!this.transitioningCameraTarget&&(this.getRenderDimensions(e),n.length=0,this.raycaster.setFromCameraAndScreenPosition(this.camera,this.mousePosition,e),this.raycaster.intersectSplatMesh(this.splatMesh,n),n.length>0)){let r=n[0].origin;t.copy(r).sub(this.camera.position),t.length()>Bg&&(this.previousCameraTarget.copy(this.controls.target),this.nextCameraTarget.copy(r),this.transitioningCameraTarget=!0,this.transitioningCameraTargetStartTime=ls())}}})();getRenderDimensions(e){this.rootElement?(e.x=this.rootElement.offsetWidth,e.y=this.rootElement.offsetHeight):this.renderer.getSize(e)}setOrthographicMode(e){if(e===this.camera.isOrthographicCamera)return;let t=this.camera,n=e?this.orthographicCamera:this.perspectiveCamera;if(n.position.copy(t.position),n.up.copy(t.up),n.rotation.copy(t.rotation),n.quaternion.copy(t.quaternion),n.matrix.copy(t.matrix),this.camera=n,this.controls){let i=o=>{o.saveState(),o.reset()},r=this.controls,a=e?this.orthographicControls:this.perspectiveControls;i(a),i(r),a.target.copy(r.target),e?s.setCameraZoomFromPosition(n,t,r):s.setCameraPositionFromZoom(n,t,a),this.controls=a,this.camera.lookAt(this.controls.target)}}static setCameraPositionFromZoom=(function(){let e=new E;return function(t,n,i){let r=1/(n.zoom*.001);e.copy(i.target).sub(t.position).normalize().multiplyScalar(r).negate(),t.position.copy(i.target).add(e)}})();static setCameraZoomFromPosition=(function(){let e=new E;return function(t,n,i){let r=e.copy(i.target).sub(n.position).length();t.zoom=1/(r*.001)}})();updateSplatMesh=(function(){let e=new Z;return function(){if(!this.splatMesh)return;if(this.splatMesh.getSplatCount()>0){this.splatMesh.updateVisibleRegionFadeDistance(this.sceneRevealMode),this.splatMesh.updateTransforms(),this.getRenderDimensions(e);let n=this.camera.projectionMatrix.elements[0]*.5*this.devicePixelRatio*e.x,i=this.camera.projectionMatrix.elements[5]*.5*this.devicePixelRatio*e.y,r=this.camera.isOrthographicCamera?1/this.devicePixelRatio:1,a=this.focalAdjustment*r,o=1/a;this.adjustForWebXRStereo(e),this.splatMesh.updateUniforms(e,n*a,i*a,this.camera.isOrthographicCamera,this.camera.zoom||1,o)}}})();adjustForWebXRStereo(e){if(this.camera&&this.webXRActive){let n=this.renderer.xr.getCamera().projectionMatrix.elements[0],i=this.camera.projectionMatrix.elements[0];e.x*=i/n}}isLoadingOrUnloading(){return Object.keys(this.splatSceneDownloadPromises).length>0||this.splatSceneDownloadAndBuildPromise!==null||this.splatSceneRemovalPromise!==null}isDisposingOrDisposed(){return this.disposing||this.disposed}addSplatSceneDownloadPromise(e){this.splatSceneDownloadPromises[e.id]=e}removeSplatSceneDownloadPromise(e){delete this.splatSceneDownloadPromises[e.id]}setSplatSceneDownloadAndBuildPromise(e){this.splatSceneDownloadAndBuildPromise=e}clearSplatSceneDownloadAndBuildPromise(){this.splatSceneDownloadAndBuildPromise=null}addSplatScene(e,t={}){if(this.isLoadingOrUnloading())throw new Error("Cannot add splat scene while another load or unload is already in progress.");if(this.isDisposingOrDisposed())throw new Error("Cannot add splat scene after dispose() is called.");t.progressiveLoad&&this.splatMesh.scenes&&this.splatMesh.scenes.length>0&&(console.log('addSplatScene(): "progressiveLoad" option ignore because there are multiple splat scenes'),t.progressiveLoad=!1);let n=t.format!==void 0&&t.format!==null?t.format:zu(e),i=s.isProgressivelyLoadable(n)&&t.progressiveLoad,r=t.showLoadingUI!==void 0&&t.showLoadingUI!==null?t.showLoadingUI:!0,a=null;r&&(this.loadingSpinner.removeAllTasks(),a=this.loadingSpinner.addTask("Downloading..."));let o=()=>{this.loadingProgressBar.hide(),this.loadingSpinner.removeAllTasks()},l=(g,m,y)=>{if(r)if(y===mt.Downloading)if(g==100)this.loadingSpinner.setMessageForTask(a,"Download complete!");else if(i)this.loadingSpinner.setMessageForTask(a,"Downloading splats...");else{let v=m?`: ${m}`:"...";this.loadingSpinner.setMessageForTask(a,`Downloading${v}`)}else y===mt.Processing&&this.loadingSpinner.setMessageForTask(a,"Processing splats...")},c=!1,h=0,u=(g,m)=>{r&&((g&&i||m&&!i)&&(this.loadingSpinner.removeTask(a),!m&&!c&&this.loadingProgressBar.show()),i&&(m?(c=!0,this.loadingProgressBar.hide()):this.loadingProgressBar.setProgress(h)))},d=(g,m,y)=>{h=g,l(g,m,y),t.onProgress&&t.onProgress(g,m,y)},p=(g,m,y)=>{!i&&t.onProgress&&t.onProgress(0,"0%",mt.Processing);let v={rotation:t.rotation||t.orientation,position:t.position,scale:t.scale,splatAlphaRemovalThreshold:t.splatAlphaRemovalThreshold};return this.addSplatBuffers([g],[v],y,m&&r,r,i,i).then(()=>{!i&&t.onProgress&&t.onProgress(100,"100%",mt.Processing),u(m,y)})};return(i?this.downloadAndBuildSingleSplatSceneProgressiveLoad.bind(this):this.downloadAndBuildSingleSplatSceneStandardLoad.bind(this))(e,n,t.splatAlphaRemovalThreshold,p.bind(this),d,o.bind(this),t.headers)}downloadAndBuildSingleSplatSceneStandardLoad(e,t,n,i,r,a,o){let l=this.downloadSplatSceneToSplatBuffer(e,n,r,!1,void 0,t,o),c=Xl(l.abortHandler);return l.then(h=>(this.removeSplatSceneDownloadPromise(l),i(h,!0,!0).then(()=>{c.resolve(),this.clearSplatSceneDownloadAndBuildPromise()}))).catch(h=>{a&&a(),this.clearSplatSceneDownloadAndBuildPromise(),this.removeSplatSceneDownloadPromise(l),c.reject(this.updateError(h,`Viewer::addSplatScene -> Could not load file ${e}`))}),this.addSplatSceneDownloadPromise(l),this.setSplatSceneDownloadAndBuildPromise(c.promise),c.promise}downloadAndBuildSingleSplatSceneProgressiveLoad(e,t,n,i,r,a,o){let l=0,c=!1,h=[],u=()=>{if(h.length>0&&!c&&!this.isDisposingOrDisposed()){c=!0;let m=h.shift();i(m.splatBuffer,m.firstBuild,m.finalBuild).then(()=>{c=!1,m.firstBuild?f.resolve():m.finalBuild&&(g.resolve(),this.clearSplatSceneDownloadAndBuildPromise()),h.length>0&&Yt(()=>u())})}},d=(m,y)=>{this.isDisposingOrDisposed()||(y||h.length===0||m.getSplatCount()>h[0].splatBuffer.getSplatCount())&&(h.push({splatBuffer:m,firstBuild:l===0,finalBuild:y}),l++,u())},p=this.downloadSplatSceneToSplatBuffer(e,n,r,!0,d,t,o),f=Xl(p.abortHandler),g=Xl();return this.addSplatSceneDownloadPromise(p),this.setSplatSceneDownloadAndBuildPromise(g.promise),p.then(()=>{this.removeSplatSceneDownloadPromise(p)}).catch(m=>{this.clearSplatSceneDownloadAndBuildPromise(),this.removeSplatSceneDownloadPromise(p);let y=this.updateError(m,"Viewer::addSplatScene -> Could not load one or more scenes");f.reject(y),a&&a(y)}),f.promise}addSplatScenes(e,t=!0,n=void 0){if(this.isLoadingOrUnloading())throw new Error("Cannot add splat scene while another load or unload is already in progress.");if(this.isDisposingOrDisposed())throw new Error("Cannot add splat scene after dispose() is called.");let i=e.length,r=[],a;t&&(this.loadingSpinner.removeAllTasks(),a=this.loadingSpinner.addTask("Downloading..."));let o=(u,d,p,f)=>{r[u]=d;let g=0;for(let m=0;m<i;m++)g+=r[m]||0;g=g/i,p=`${g.toFixed(2)}%`,t&&f===mt.Downloading&&this.loadingSpinner.setMessageForTask(a,g==100?"Download complete!":`Downloading: ${p}`),n&&n(g,p,f)},l=[],c=[];for(let u=0;u<e.length;u++){let d=e[u],p=d.format!==void 0&&d.format!==null?d.format:zu(d.path),f=this.downloadSplatSceneToSplatBuffer(d.path,d.splatAlphaRemovalThreshold,o.bind(this,u),!1,void 0,p,d.headers);l.push(f),c.push(f.promise)}let h=new Xs((u,d)=>{Promise.all(c).then(p=>{t&&this.loadingSpinner.removeTask(a),n&&n(0,"0%",mt.Processing),this.addSplatBuffers(p,e,!0,t,t,!1,!1).then(()=>{n&&n(100,"100%",mt.Processing),this.clearSplatSceneDownloadAndBuildPromise(),u()})}).catch(p=>{t&&this.loadingSpinner.removeTask(a),this.clearSplatSceneDownloadAndBuildPromise(),d(this.updateError(p,"Viewer::addSplatScenes -> Could not load one or more splat scenes."))}).finally(()=>{this.removeSplatSceneDownloadPromise(h)})},u=>{for(let d of l)d.abort(u)});return this.addSplatSceneDownloadPromise(h),this.setSplatSceneDownloadAndBuildPromise(h),h}downloadSplatSceneToSplatBuffer(e,t=1,n=void 0,i=!1,r=void 0,a,o){try{if(a===Rt.Splat||a===Rt.KSplat||a===Rt.Ply){let l=i?!1:this.optimizeSplatData;if(a===Rt.Splat)return oc.loadFromURL(e,n,i,r,t,this.inMemoryCompressionLevel,l,o);if(a===Rt.KSplat)return lc.loadFromURL(e,n,i,r,o);if(a===Rt.Ply)return rc.loadFromURL(e,n,i,r,t,this.inMemoryCompressionLevel,l,this.sphericalHarmonicsDegree,o)}else if(a===Rt.Spz)return ac.loadFromURL(e,n,t,this.inMemoryCompressionLevel,this.optimizeSplatData,this.sphericalHarmonicsDegree,o)}catch(l){throw this.updateError(l,null)}throw new Error(`Viewer::downloadSplatSceneToSplatBuffer -> File format not supported: ${e}`)}static isProgressivelyLoadable(e){return e===Rt.Splat||e===Rt.KSplat||e===Rt.Ply}addSplatBuffers=(function(){return function(e,t=[],n=!0,i=!0,r=!0,a=!1,o=!1,l=!0){if(this.isDisposingOrDisposed())return Promise.resolve();let c=null,h=()=>{c!==null&&(this.loadingSpinner.removeTask(c),c=null)};return this.splatRenderReady=!1,new Promise(u=>{i&&(c=this.loadingSpinner.addTask("Processing splats...")),Yt(()=>{if(this.isDisposingOrDisposed())u();else{let d=this.addSplatBuffersToMesh(e,t,n,r,a,l),p=this.splatMesh.getMaxSplatCount();this.sortWorker&&this.sortWorker.maxSplatCount!==p&&this.disposeSortWorker(),this.gpuAcceleratedSort||this.preSortMessages.push({centers:d.centers.buffer,sceneIndexes:d.sceneIndexes.buffer,range:{from:d.from,to:d.to,count:d.count}}),(!this.sortWorker&&p>0?this.setupSortWorker(this.splatMesh):Promise.resolve()).then(()=>{this.isDisposingOrDisposed()||this.runSplatSort(!0,!0).then(g=>{!this.sortWorker||!g?(this.splatRenderReady=!0,h(),u()):(o?this.splatRenderReady=!0:this.runAfterNextSort.push(()=>{this.splatRenderReady=!0}),this.runAfterNextSort.push(()=>{h(),u()}))})})}},!0)})}})();addSplatBuffersToMesh=(function(){let e;return function(t,n,i=!0,r=!1,a=!1,o=!0){if(this.isDisposingOrDisposed())return;let l=[],c=[];a||(l=this.splatMesh.scenes.map(p=>p.splatBuffer)||[],c=this.splatMesh.sceneOptions?this.splatMesh.sceneOptions.map(p=>p):[]),l.push(...t),c.push(...n),this.renderer&&this.splatMesh.setRenderer(this.renderer);let h=p=>{if(this.isDisposingOrDisposed())return;let f=this.splatMesh.getSplatCount();r&&f>=Lg&&!p&&!e&&(this.loadingSpinner.setMinimized(!0,!0),e=this.loadingSpinner.addTask("Optimizing data structures..."))},u=p=>{this.isDisposingOrDisposed()||p&&e&&(this.loadingSpinner.removeTask(e),e=null)},d=this.splatMesh.build(l,c,!0,i,h,u,o);return i&&this.freeIntermediateSplatData&&this.splatMesh.freeIntermediateSplatData(),d}})();setupSortWorker(e){if(!this.isDisposingOrDisposed())return new Promise(t=>{let n=this.integerBasedSort?Int32Array:Float32Array,i=e.getSplatCount(),r=e.getMaxSplatCount();this.sortWorker=Pg(r,this.sharedMemoryForWorkers,this.enableSIMDInSort,this.integerBasedSort,this.splatMesh.dynamicMode,this.splatSortDistanceMapPrecision),this.sortWorker.onmessage=a=>{if(a.data.sortDone){if(this.sortRunning=!1,this.sharedMemoryForWorkers)this.splatMesh.updateRenderIndexes(this.sortWorkerSortedIndexes,a.data.splatRenderCount);else{let o=new Uint32Array(a.data.sortedIndexes.buffer,0,a.data.splatRenderCount);this.splatMesh.updateRenderIndexes(o,a.data.splatRenderCount)}this.lastSplatSortCount=this.splatSortCount,this.lastSortTime=a.data.sortTime,this.sortPromiseResolver(),this.sortPromiseResolver=null,this.forceRenderNextFrame(),this.runAfterNextSort.length>0&&(this.runAfterNextSort.forEach(o=>{o()}),this.runAfterNextSort.length=0)}else if(a.data.sortCanceled)this.sortRunning=!1;else if(a.data.sortSetupPhase1Complete){this.logLevel>=fs.Info&&console.log("Sorting web worker WASM setup complete."),this.sharedMemoryForWorkers?(this.sortWorkerSortedIndexes=new Uint32Array(a.data.sortedIndexesBuffer,a.data.sortedIndexesOffset,r),this.sortWorkerIndexesToSort=new Uint32Array(a.data.indexesToSortBuffer,a.data.indexesToSortOffset,r),this.sortWorkerPrecomputedDistances=new n(a.data.precomputedDistancesBuffer,a.data.precomputedDistancesOffset,r),this.sortWorkerTransforms=new Float32Array(a.data.transformsBuffer,a.data.transformsOffset,je.MaxScenes*16)):(this.sortWorkerIndexesToSort=new Uint32Array(r),this.sortWorkerPrecomputedDistances=new n(r),this.sortWorkerTransforms=new Float32Array(je.MaxScenes*16));for(let o=0;o<i;o++)this.sortWorkerIndexesToSort[o]=o;if(this.sortWorker.maxSplatCount=r,this.logLevel>=fs.Info){console.log("Sorting web worker ready.");let o=this.splatMesh.getSplatDataTextures(),l=o.covariances.size,c=o.centerColors.size;console.log("Covariances texture size: "+l.x+" x "+l.y),console.log("Centers/colors texture size: "+c.x+" x "+c.y)}t()}}})}updateError(e,t){return e instanceof ga?e:e instanceof ms?new Error("File type or server does not support progressive loading."):t?new Error(t):e}disposeSortWorker(){this.sortWorker&&this.sortWorker.terminate(),this.sortWorker=null,this.sortPromise=null,this.sortPromiseResolver&&(this.sortPromiseResolver(),this.sortPromiseResolver=null),this.preSortMessages=[],this.sortRunning=!1}removeSplatScene(e,t=!0){return this.removeSplatScenes([e],t)}removeSplatScenes(e,t=!0){if(this.isLoadingOrUnloading())throw new Error("Cannot remove splat scene while another load or unload is already in progress.");if(this.isDisposingOrDisposed())throw new Error("Cannot remove splat scene after dispose() is called.");let n;return this.splatSceneRemovalPromise=new Promise((i,r)=>{let a;t&&(this.loadingSpinner.removeAllTasks(),this.loadingSpinner.show(),a=this.loadingSpinner.addTask("Removing splat scene..."));let o=()=>{t&&(this.loadingSpinner.hide(),this.loadingSpinner.removeTask(a))},l=h=>{o(),this.splatSceneRemovalPromise=null,h?r(h):i()},c=()=>this.isDisposingOrDisposed()?(l(),!0):!1;n=this.sortPromise||Promise.resolve(),n.then(()=>{if(c())return;let h=[],u=[],d=[];for(let p=0;p<this.splatMesh.scenes.length;p++){let f=!1;for(let g of e)if(g===p){f=!0;break}if(!f){let g=this.splatMesh.scenes[p];h.push(g.splatBuffer),u.push(this.splatMesh.sceneOptions[p]),d.push({position:g.position.clone(),quaternion:g.quaternion.clone(),scale:g.scale.clone()})}}this.disposeSortWorker(),this.splatMesh.dispose(),this.sceneRevealMode=_i.Instant,this.createSplatMesh(),this.addSplatBuffers(h,u,!0,!1,!0).then(()=>{c()||(o(),this.splatMesh.scenes.forEach((p,f)=>{p.position.copy(d[f].position),p.quaternion.copy(d[f].quaternion),p.scale.copy(d[f].scale)}),this.splatMesh.updateTransforms(),this.splatRenderReady=!1,this.runSplatSort(!0).then(()=>{if(c()){this.splatRenderReady=!0;return}n=this.sortPromise||Promise.resolve(),n.then(()=>{this.splatRenderReady=!0,l()})}))}).catch(p=>{l(p)})})}),this.splatSceneRemovalPromise}start(){if(this.selfDrivenMode)this.webXRMode?this.renderer.setAnimationLoop(this.selfDrivenUpdateFunc):this.requestFrameId=requestAnimationFrame(this.selfDrivenUpdateFunc),this.selfDrivenModeRunning=!0;else throw new Error("Cannot start viewer unless it is in self driven mode.")}stop(){this.selfDrivenMode&&this.selfDrivenModeRunning&&(this.webXRMode?this.renderer.setAnimationLoop(null):cancelAnimationFrame(this.requestFrameId),this.selfDrivenModeRunning=!1)}async dispose(){if(this.isDisposingOrDisposed())return this.disposePromise;let e=[],t=[];for(let n in this.splatSceneDownloadPromises)if(this.splatSceneDownloadPromises.hasOwnProperty(n)){let i=this.splatSceneDownloadPromises[n];t.push(i),e.push(i.promise)}return this.sortPromise&&e.push(this.sortPromise),this.disposing=!0,this.disposePromise=Promise.all(e).finally(()=>{this.stop(),this.orthographicControls&&(this.orthographicControls.dispose(),this.orthographicControls=null),this.perspectiveControls&&(this.perspectiveControls.dispose(),this.perspectiveControls=null),this.controls=null,this.splatMesh&&(this.splatMesh.dispose(),this.splatMesh=null),this.sceneHelper&&(this.sceneHelper.dispose(),this.sceneHelper=null),this.resizeObserver&&(this.resizeObserver.unobserve(this.rootElement),this.resizeObserver=null),this.disposeSortWorker(),this.removeEventHandlers(),this.loadingSpinner.removeAllTasks(),this.loadingSpinner.setContainer(null),this.loadingProgressBar.hide(),this.loadingProgressBar.setContainer(null),this.infoPanel.setContainer(null),this.camera=null,this.threeScene=null,this.splatRenderReady=!1,this.initialized=!1,this.renderer&&(this.usingExternalRenderer||(this.rootElement.removeChild(this.renderer.domElement),this.renderer.dispose()),this.renderer=null),this.usingExternalRenderer||document.body.removeChild(this.rootElement),this.sortWorkerSortedIndexes=null,this.sortWorkerIndexesToSort=null,this.sortWorkerPrecomputedDistances=null,this.sortWorkerTransforms=null,this.disposed=!0,this.disposing=!1,this.disposePromise=null}),t.forEach(n=>{n.abort("Scene disposed")}),this.disposePromise}selfDrivenUpdate(){this.selfDrivenMode&&!this.webXRMode&&(this.requestFrameId=requestAnimationFrame(this.selfDrivenUpdateFunc)),this.update(),this.shouldRender()?(this.render(),this.consecutiveRenderFrames++):this.consecutiveRenderFrames=0,this.renderNextFrame=!1}forceRenderNextFrame(){this.renderNextFrame=!0}shouldRender=(function(){let e=0,t=new E,n=new Ve,i=1e-4;return function(){if(!this.initialized||!this.splatRenderReady||this.isDisposingOrDisposed())return!1;let r=!1,a=!1;if(this.camera){let o=this.camera.position,l=this.camera.quaternion;a=Math.abs(o.x-t.x)>i||Math.abs(o.y-t.y)>i||Math.abs(o.z-t.z)>i||Math.abs(l.x-n.x)>i||Math.abs(l.y-n.y)>i||Math.abs(l.z-n.z)>i||Math.abs(l.w-n.w)>i}return r=this.renderMode!==$l.Never&&(e===0||this.splatMesh.visibleRegionChanging||a||this.renderMode===$l.Always||this.dynamicMode===!0||this.renderNextFrame),this.camera&&(t.copy(this.camera.position),n.copy(this.camera.quaternion)),e++,r}})();render=(function(){return function(){if(!this.initialized||!this.splatRenderReady||this.isDisposingOrDisposed())return;let e=n=>{for(let i of n.children)if(i.visible)return!0;return!1},t=this.renderer.autoClear;e(this.threeScene)&&(this.renderer.render(this.threeScene,this.camera),this.renderer.autoClear=!1),this.renderer.render(this.splatMesh,this.camera),this.renderer.autoClear=!1,this.sceneHelper.getFocusMarkerOpacity()>0&&this.renderer.render(this.sceneHelper.focusMarker,this.camera),this.showControlPlane&&this.renderer.render(this.sceneHelper.controlPlane,this.camera),this.renderer.autoClear=t}})();update(e,t){this.dropInMode&&this.updateForDropInMode(e,t),!(!this.initialized||!this.splatRenderReady||this.isDisposingOrDisposed())&&(this.controls&&(this.controls.update(),this.camera.isOrthographicCamera&&!this.usingExternalCamera&&s.setCameraPositionFromZoom(this.camera,this.camera,this.controls)),this.runSplatSort(),this.updateForRendererSizeChanges(),this.updateSplatMesh(),this.updateMeshCursor(),this.updateFPS(),this.timingSensitiveUpdates(),this.updateInfoPanel(),this.updateControlPlane())}updateForDropInMode(e,t){this.renderer=e,this.splatMesh&&this.splatMesh.setRenderer(this.renderer),this.camera=t,this.controls&&(this.controls.object=t),this.init()}updateFPS=(function(){let e=ls(),t=0;return function(){if(this.consecutiveRenderFrames>Og){let n=ls();n-e>=1?(this.currentFPS=t,t=0,e=n):t++}else this.currentFPS=null}})();updateForRendererSizeChanges=(function(){let e=new Z,t=new Z,n;return function(){this.usingExternalCamera||(this.renderer.getSize(t),(n===void 0||n!==this.camera.isOrthographicCamera||t.x!==e.x||t.y!==e.y)&&(this.camera.isOrthographicCamera?(this.camera.left=-t.x/2,this.camera.right=t.x/2,this.camera.top=t.y/2,this.camera.bottom=-t.y/2):this.camera.aspect=t.x/t.y,this.camera.updateProjectionMatrix(),e.copy(t),n=this.camera.isOrthographicCamera))}})();timingSensitiveUpdates=(function(){let e;return function(){let t=ls();e||(e=t);let n=t-e;this.updateCameraTransition(t),this.updateFocusMarker(n),e=t}})();updateCameraTransition=(function(){let e=new E,t=new E,n=new E;return function(i){if(this.transitioningCameraTarget){t.copy(this.previousCameraTarget).sub(this.camera.position).normalize(),n.copy(this.nextCameraTarget).sub(this.camera.position).normalize();let r=Math.acos(t.dot(n)),o=(r/(Math.PI/3)*.65+.3)/r*(i-this.transitioningCameraTargetStartTime);e.copy(this.previousCameraTarget).lerp(this.nextCameraTarget,o),this.camera.lookAt(e),this.controls.target.copy(e),o>=1&&(this.transitioningCameraTarget=!1)}}})();updateFocusMarker=(function(){let e=new Z,t=!1;return function(n){if(this.getRenderDimensions(e),this.transitioningCameraTarget){this.sceneHelper.setFocusMarkerVisibility(!0);let i=Math.max(this.sceneHelper.getFocusMarkerOpacity(),0),r=Math.min(i+Fg*n,1);this.sceneHelper.setFocusMarkerOpacity(r),this.sceneHelper.updateFocusMarker(this.nextCameraTarget,this.camera,e),t=!0,this.forceRenderNextFrame()}else{let i;if(t?i=1:i=Math.min(this.sceneHelper.getFocusMarkerOpacity(),1),i>0){this.sceneHelper.updateFocusMarker(this.nextCameraTarget,this.camera,e);let r=Math.max(i-Ug*n,0);this.sceneHelper.setFocusMarkerOpacity(r),r===0&&this.sceneHelper.setFocusMarkerVisibility(!1)}i>0&&this.forceRenderNextFrame(),t=!1}}})();updateMeshCursor=(function(){let e=[],t=new Z;return function(){this.showMeshCursor?(this.forceRenderNextFrame(),this.getRenderDimensions(t),e.length=0,this.raycaster.setFromCameraAndScreenPosition(this.camera,this.mousePosition,t),this.raycaster.intersectSplatMesh(this.splatMesh,e),e.length>0?(this.sceneHelper.setMeshCursorVisibility(!0),this.sceneHelper.positionAndOrientMeshCursor(e[0].origin,this.camera)):this.sceneHelper.setMeshCursorVisibility(!1)):(this.sceneHelper.getMeschCursorVisibility()&&this.forceRenderNextFrame(),this.sceneHelper.setMeshCursorVisibility(!1))}})();updateInfoPanel=(function(){let e=new Z;return function(){if(!this.showInfo)return;let t=this.splatMesh.getSplatCount();this.getRenderDimensions(e);let n=this.controls?this.controls.target:null,i=this.showMeshCursor?this.sceneHelper.meshCursor.position:null,r=t>0?this.splatRenderCount/t*100:0;this.infoPanel.update(e,this.camera.position,n,this.camera.up,this.camera.isOrthographicCamera,i,this.currentFPS||"N/A",t,this.splatRenderCount,r,this.lastSortTime,this.focalAdjustment,this.splatMesh.getSplatScale(),this.splatMesh.getPointCloudModeEnabled())}})();updateControlPlane(){this.showControlPlane?(this.sceneHelper.setControlPlaneVisibility(!0),this.sceneHelper.positionAndOrientControlPlane(this.controls.target,this.camera.up)):this.sceneHelper.setControlPlaneVisibility(!1)}runSplatSort=(function(){let e=new ge,t=[],n=new E(0,0,-1),i=new E(0,0,-1),r=new E,a=new E,o=[],l=[{angleThreshold:.55,sortFractions:[.125,.33333,.75]},{angleThreshold:.65,sortFractions:[.33333,.66667]},{angleThreshold:.8,sortFractions:[.5]}];return function(c=!1,h=!1){if(!this.initialized)return Promise.resolve(!1);if(this.sortRunning)return Promise.resolve(!0);if(this.splatMesh.getSplatCount()<=0)return this.splatRenderCount=0,Promise.resolve(!1);let u=0,d=0,p=!1,f=!1;if(i.set(0,0,-1).applyQuaternion(this.camera.quaternion),u=i.dot(n),d=a.copy(this.camera.position).sub(r).length(),!c&&!this.splatMesh.dynamicMode&&o.length===0&&(u<=.99&&(p=!0),d>=1&&(f=!0),!p&&!f))return Promise.resolve(!1);this.sortRunning=!0;let{splatRenderCount:g,shouldSortAll:m}=this.gatherSceneNodesForSort();m=m||h,this.splatRenderCount=g,e.copy(this.camera.matrixWorld).invert();let y=this.perspectiveCamera||this.camera;e.premultiply(y.projectionMatrix),this.splatMesh.dynamicMode||e.multiply(this.splatMesh.matrixWorld);let v=Promise.resolve(!0);return this.gpuAcceleratedSort&&(o.length<=1||o.length%2===0)&&(v=this.splatMesh.computeDistancesOnGPU(e,this.sortWorkerPrecomputedDistances)),v.then(()=>{if(o.length===0)if(this.splatMesh.dynamicMode||m)o.push(this.splatRenderCount);else{for(let M of l)if(u<M.angleThreshold){for(let _ of M.sortFractions)o.push(Math.floor(this.splatRenderCount*_));break}o.push(this.splatRenderCount)}let x=Math.min(o.shift(),this.splatRenderCount);this.splatSortCount=x,t[0]=this.camera.position.x,t[1]=this.camera.position.y,t[2]=this.camera.position.z;let S={modelViewProj:e.elements,cameraPosition:t,splatRenderCount:this.splatRenderCount,splatSortCount:x,usePrecomputedDistances:this.gpuAcceleratedSort};return this.splatMesh.dynamicMode&&this.splatMesh.fillTransformsArray(this.sortWorkerTransforms),this.sharedMemoryForWorkers||(S.indexesToSort=this.sortWorkerIndexesToSort,S.transforms=this.sortWorkerTransforms,this.gpuAcceleratedSort&&(S.precomputedDistances=this.sortWorkerPrecomputedDistances)),this.sortPromise=new Promise(M=>{this.sortPromiseResolver=M}),this.preSortMessages.length>0&&(this.preSortMessages.forEach(M=>{this.sortWorker.postMessage(M)}),this.preSortMessages=[]),this.sortWorker.postMessage({sort:S}),o.length===0&&(r.copy(this.camera.position),n.copy(i)),!0}),v}})();gatherSceneNodesForSort=(function(){let e=[],t=null,n=new E,i=new E,r=new E,a=new ge,o=new ge,l=new ge,c=new E,h=new E(0,0,-1),u=new E,d=p=>u.copy(p.max).sub(p.min).length();return function(p=!1){this.getRenderDimensions(c);let f=c.y/2/Math.tan(this.camera.fov/2*rs.DEG2RAD),g=Math.atan(c.x/2/f),m=Math.atan(c.y/2/f),y=Math.cos(g),v=Math.cos(m),x=this.splatMesh.getSplatTree();if(x){o.copy(this.camera.matrixWorld).invert(),this.splatMesh.dynamicMode||o.multiply(this.splatMesh.matrixWorld);let S=0,M=0;for(let A=0;A<x.subTrees.length;A++){let T=x.subTrees[A];a.copy(o),this.splatMesh.dynamicMode&&(this.splatMesh.getSceneTransform(A,l),a.multiply(l));let I=T.nodesWithIndexes.length;for(let P=0;P<I;P++){let D=T.nodesWithIndexes[P];if(!D.data||!D.data.indexes||D.data.indexes.length===0)continue;r.copy(D.center).applyMatrix4(a);let L=r.length();r.normalize(),n.copy(r).setX(0).normalize(),i.copy(r).setY(0).normalize();let z=h.dot(i),U=h.dot(n),k=d(D),W=U<v-.6,Q=z<y-.6;!p&&(Q||W)&&L>k||(M+=D.data.indexes.length,e[S]=D,D.data.distanceToNode=L,S++)}}e.length=S,e.sort((A,T)=>A.data.distanceToNode<T.data.distanceToNode?-1:1);let _=M*je.BytesPerInt;for(let A=0;A<S;A++){let T=e[A],I=T.data.indexes.length,P=I*je.BytesPerInt;new Uint32Array(this.sortWorkerIndexesToSort.buffer,_-P,I).set(T.data.indexes),_-=P}return{splatRenderCount:M,shouldSortAll:!1}}else{let S=this.splatMesh.getSplatCount();if(!t||t.length!==S){t=new Uint32Array(S);for(let M=0;M<S;M++)t[M]=M}return this.sortWorkerIndexesToSort.set(t),{splatRenderCount:S,shouldSortAll:!0}}}})();getSplatMesh(){return this.splatMesh}getSplatScene(e){return this.splatMesh.getScene(e)}getSceneCount(){return this.splatMesh.getSceneCount()}isMobile(){return navigator.userAgent.includes("Mobi")}};var Qs={gaussian:{count:317107,center:[-.7858777642250061,3.2456948310136795,-.5379047393798828],size:6.0001464784145355,anchors:[[-1.2587788105010986,5.1054534912109375,-.5868441462516785],[.17936347424983978,5.005142688751221,-.5011738538742065],[1.2370413541793823,4.90839958190918,-.5297509431838989]],bounds:[[-3.568228006362915,1.9964724779129028],[.24562159180641174,6.245768070220947],[-2.042945146560669,.9671356678009033]]},sparse:{count:6907,center:[-1.1890825,5.4546915,.5343519999999999],size:11.262156999999998,anchors:[[-3.177766,5.180568,.42446],[-.758633,5.519382,.107515],[.769525,5.465513,-.177444]],bounds:[[-6.820161,4.441996],[3.854817,7.054566],[-.983664,2.052368]]},sources:{"sparse_pc.ply":{bytes:268014,sha256:"afddc3fa5a2cb88b0cdd9e00338dc998a1e3c303cf30c2cee6101278ef628073"},"splat(1).ply":{bytes:78644129,sha256:"a582d0c5fd98853303fa1d2d88fe49d954ac0d68665c92c2f2994c2fabde2a5a"}},webPreview:"DC color; all splats retained; scale, opacity and rotation included; higher-order SH omitted",quick:{count:16e4,center:[-.7858777642250061,3.2456948310136795,-.5379047393798828],size:6.0001464784145355,anchors:[[-1.2587788105010986,5.1054534912109375,-.5868441462516785],[.17936347424983978,5.005142688751221,-.5011738538742065],[1.2370413541793823,4.90839958190918,-.5297509431838989]],bounds:[[-3.568228006362915,1.9964724779129028],[.24562159180641174,6.245768070220947],[-2.042945146560669,.9671356678009033]],bytes:2465928,sourceCount:317107,selection:"opacity-weighted projected footprint",positionFractionalBits:12}};var Hg="assets/reconstruction/",Fc=new Map;async function sd(s,e,t,n){if(e.aborted)throw new DOMException("Aborted","AbortError");if(Fc.has(s))return Fc.get(s);let i=Hg+s,r=globalThis.INSPECTION_ASSET_ORIGIN,a=r?[r+i,i]:[i],o;for(let l of a){let c=new AbortController,h=()=>c.abort();e.addEventListener("abort",h,{once:!0});let u,d=p=>{clearTimeout(u),u=setTimeout(h,p)};try{d(l===i?15e3:6e3);let p=await fetch(l,{signal:c.signal});if(!p.ok)throw Error(`HTTP ${p.status}`);let f=n||Number(p.headers.get("content-length")),g=p.body.getReader(),m=[],y=0;for(;;){d(l===i?3e4:8e3);let{done:x,value:S}=await g.read();if(x)break;m.push(S),y+=S.byteLength,t(f?Math.min(100,y/f*100):0)}if(n&&y!==n)throw Error("\u6A21\u578B\u6570\u636E\u4E0D\u5B8C\u6574");let v=new Blob(m,{type:"application/octet-stream"});return Fc.set(s,v),v}catch(p){if(e.aborted)throw p;o=p}finally{clearTimeout(u),e.removeEventListener("abort",h)}}throw o}var rd=class{constructor(e,t,n,i,r,a="quick"){this.quality=a,this.alive=!0,this.mode=t,this.onProject=n,this.onStatus=i,this.abort=new AbortController,this.renderer=new es({canvas:e,alpha:!0,antialias:!1}),this.renderer.setPixelRatio(Math.min(devicePixelRatio,1.5)),this.renderer.setClearColor(793638,0),this.scene=new ts,this.camera=new wt(50,1,.01,1e3),this.camera.up.set(0,0,1),this.controls=new ca(this.camera,e),this.controls.enableDamping=!0,this.controls.screenSpacePanning=!0,this.controls.enableZoom=!0,this.panMode=!0,this.resizeObserver=new ResizeObserver(()=>{if(!this.alive)return;let{width:o,height:l}=e.parentElement.getBoundingClientRect();this.renderer.setSize(o,l,!1),this.camera.aspect=o/Math.max(1,l),this.camera.updateProjectionMatrix()}),this.resizeObserver.observe(e.parentElement),e.addEventListener("keydown",o=>{o.key.toLowerCase()==="r"&&this.reset(),(o.key==="+"||o.key==="=")&&this.zoom(1/1.15),o.key==="-"&&this.zoom(1.15)},{signal:this.abort.signal}),this.load(r),this.draw()}set panMode(e){this.controls.mouseButtons.LEFT=e?At.PAN:At.ROTATE,this.controls.mouseButtons.RIGHT=e?At.ROTATE:At.PAN,this.controls.touches.ONE=e?bt.PAN:bt.ROTATE,this.controls.touches.TWO=bt.DOLLY_PAN}async load(e){try{if(this.onStatus(this.mode==="gaussian"?"\u6B63\u5728\u52A0\u8F7D\u5B9E\u666F\u91CD\u5EFA\u2026":"\u6B63\u5728\u8BFB\u53D6\u7A00\u758F\u70B9\u4E91\u2026"),this.metadata=Qs[this.mode==="gaussian"&&this.quality==="quick"?"quick":this.mode],!this.alive)return;if(this.reset(),this.mode==="gaussian"){this.viewer=new va({renderer:this.renderer,camera:this.camera,threeScene:this.scene,rootElement:this.renderer.domElement.parentElement,selfDrivenMode:!1,useBuiltInControls:!1,sharedMemoryForWorkers:!1,gpuAcceleratedSort:!1,integerBasedSort:!1,sphericalHarmonicsDegree:0,sceneRevealMode:_i.Instant});let t=this.quality==="quick",n=t?"\u8F7B\u91CF\u6A21\u578B":"\u5B8C\u6574\u6A21\u578B",i=await sd(t?"scene-quick.spz":"scene.splat",this.abort.signal,a=>{this.alive&&this.onStatus(`\u6B63\u5728\u4E0B\u8F7D${n}\u2026 ${Math.round(a)}%`)},t?Qs.quick.bytes:Qs.gaussian.count*32);if(!this.alive)return;this.onStatus(`\u6B63\u5728\u6E32\u67D3${n}\u2026`);let r=URL.createObjectURL(i);try{await this.viewer.addSplatScene(r,{format:t?Rt.Spz:Rt.Splat,showLoadingUI:!1,splatAlphaRemovalThreshold:0}).promise}finally{URL.revokeObjectURL(r)}}else{let n=await(await sd("sparse_pc.ply",this.abort.signal,()=>{},Qs.sources["sparse_pc.ply"].bytes)).text();if(!this.alive)return;let i=n.slice(n.indexOf("end_header")+10).trim().split(/\r?\n/),r=[],a=[];for(let c of i){let h=c.trim().split(/\s+/).map(Number);if(h.length<6||!h.slice(0,6).every(Number.isFinite))continue;r.push(...h.slice(0,3));let u=new Pe().setRGB(h[3]/255,h[4]/255,h[5]/255,kt);a.push(u.r,u.g,u.b)}let o=new Je;o.setAttribute("position",new we(r,3)),o.setAttribute("color",new we(a,3));let l=new Fs({vertexColors:!0,size:2.5,sizeAttenuation:!1});this.pointMesh=new Wr(o,l),this.scene.add(this.pointMesh)}if(!this.alive)return;this.ready=!0,this.onStatus(""),e(this.metadata.count)}catch(t){this.alive&&this.onStatus("\u6A21\u578B\u52A0\u8F7D\u5931\u8D25\uFF0C\u8BF7\u5207\u6362\u89C6\u56FE\u91CD\u8BD5\u3002"+(t.message||""))}}reset(){if(!this.metadata)return;let e=new E(...this.metadata.center),t=this.metadata.size,n=this.camera.aspect||1,i=t*Math.max(1.15,1.15/n);this.camera.position.copy(e).add(new E(.12,-1,.5).normalize().multiplyScalar(i)),this.camera.near=t/1e3,this.camera.far=t*100,this.camera.updateProjectionMatrix(),this.controls.target.copy(e),this.mode==="gaussian"&&(this.camera.position.set(0,0,0),this.controls.target.set(0,5,0)),this.controls.minDistance=t*.025,this.controls.maxDistance=t*15,this.controls.update()}zoom(e){let t=this.camera.position.clone().sub(this.controls.target).multiplyScalar(e);t.clampLength(this.controls.minDistance,this.controls.maxDistance),this.camera.position.copy(this.controls.target).add(t),this.controls.update()}draw(){if(this.alive&&(this.frame=requestAnimationFrame(()=>this.draw()),this.controls.update(),this.viewer&&this.ready?(this.viewer.update(),this.viewer.render()):this.renderer.render(this.scene,this.camera),this.ready)){let{clientWidth:e,clientHeight:t}=this.renderer.domElement,n=this.metadata.anchors.map(i=>{let r=new E(...i).project(this.camera);return[(r.x+1)*e/2,(1-r.y)*t/2,r.z>-1&&r.z<1&&Math.abs(r.x)<1&&Math.abs(r.y)<1]});this.onProject(n)}}dispose(){if(!this.alive)return;this.alive=!1,cancelAnimationFrame(this.frame),this.abort.abort(),this.resizeObserver.disconnect(),this.controls.dispose(),this.pointMesh?.geometry.dispose(),this.pointMesh?.material.dispose();let e=()=>{this.renderer.dispose(),this.renderer.forceContextLoss()};this.viewer?Promise.resolve(this.viewer.dispose()).catch(()=>{}).finally(e):e()}};export{rd as ReconstructionView};
