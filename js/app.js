/*! For license information please see app.js.LICENSE.txt */
(function(){var t={833:function(t,e,i){"use strict";var n=i(575),a=i.n(n),o=i(913),r=i.n(o),s=i(205),l=i.n(s),h=i(585),c=i.n(h),u=i(754),d=i.n(u),f=function(){function t(e){a()(this,t),this.name="",this.defaultTask=[],this.events=new Map,this.name=e}return r()(t,[{key:"init",value:function(){var t=this;this.defaultTask.forEach((function(e){t[e]()}))}},{key:"bind",value:function(t,e){var i=t.split("."),n=i[0];if(this.events.has(n)){var a=this.events.get(n);a.detail.get(t)?a.detail.get(t).push(e):a.detail.set(t,[e])}else{var o={name:n,desc:"",detail:(new Map).set(t,[e])};this.events.set(n,o)}}},{key:"off",value:function(t,e){var i=t.split("."),n=i[0];if(this.events.has(n)){var a=this.events.get(n);if(e){var o=a.detail.get(n);o.forEach((function(t,i){t==e&&(o[i]=void 0)}))}else n==t?a.detail.clear():a.detail.delete(n)}}},{key:"trigger",value:function(t,e){var i=this,n=t.split("."),a=n[0];t==a?this.events.get(a).detail.forEach((function(t){t.forEach((function(t){t.apply(i||window,e)}))})):this.events.get(a).detail.get(t).forEach((function(t){t.apply(i||window,e)}))}}]),t}(),p=function(){var t={top:void 0,left:void 0};return function(){void 0==t.top&&(t.top=window.pageYOffset),void 0==t.left&&(t.left=window.pageXOffset);var e=window.pageXOffset-t.left,i=window.pageYOffset-t.top;return t.top=window.pageYOffset,t.left=window.pageXOffset,{x:0==e?0:e>0?1:-1,y:0==i?0:i>0?1:-1}}}(),g=i(313),v=i(600),m=i(878),y=i.n(m);function w(){var t=y()("#earth-scene"),e=t.innerWidth(),i=t.innerHeight(),n=new g.PerspectiveCamera(60,e/i,1,1200),a=new g.Scene,o=new g.WebGLRenderer({antialias:!0,alpha:!0}),r=new g.Geometry,s=new g.PointsMaterial({color:12566783,size:3}),l=500;o.setClearColor(16777215,0),n.position.z=1200,o.setSize(e,i),y()(o.domElement).appendTo(t);var h=function(t,e,i){t*=Math.PI/180,e*=Math.PI/180;var n=-i*Math.cos(t)*Math.cos(e),a=i*Math.sin(t),o=i*Math.cos(t)*Math.sin(e);return new g.Vector3(n,a,o)};v.forEach((function(t){var e=h(t[0],t[1],200);r.vertices.push(e);var i=100+100*Math.random(),n=Math.min(.9,.35+Math.random());requestAnimationFrame((function t(){i*=n,i>1&&requestAnimationFrame(t),e.normalize().multiplyScalar(l+i)}))}));var c=new g.Points(r,s);return a.add(c),requestAnimationFrame((function t(){requestAnimationFrame(t),c.rotation.y+=5e-4,c.geometry.verticesNeedUpdate=!0,o.render(a,n)})),{resize:function(){var e=t.innerWidth(),i=t.innerHeight();o.setSize(e,i)}}}var b=i(525),S=i.n(b),C=i(39);function x(t){var e=M();return function(){var i,n=d()(t);if(e){var a=d()(this).constructor;i=Reflect.construct(n,arguments,a)}else i=n.apply(this,arguments);return c()(this,i)}}function M(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}var k=690,G=1920,Y=document.getElementById("strip-svg"),z=document.getElementById("strip-canvas"),H=function(){function t(e){var i=this;a()(this,t),this.scale=e.scale[Math.floor(Math.random()*e.scale.length)],this.speed=e.baseSpeed*this.scale,this.width=e.particleSizeX*this.scale,this.height=e.particleSizeY*this.scale,this.dy=0,this.floatAmplitude=Math.random()*(e.floatAmplitude||0),this.settings=e,this.changePosition(),this.doPrepareDraw=function(t){return i.prepareDraw(t)}}return r()(t,[{key:"changePosition",value:function(){this.x=this.getRandomXCoords(),this.y=this.getRandomYCoords(),this.baseX=this.x,this.baseY=this.y}},{key:"getRandomXCoords",value:function(){return Math.floor(Math.random()*(this.settings.canvasWidth-2*this.settings.particleSizeX))}},{key:"getRandomYCoords",value:function(){return Math.floor(this.settings.canvasHeight/2-this.height*Math.random())}},{key:"float",value:function(t){this.dy+=this.speed*t;var e=Math.sin(this.dy)*this.floatAmplitude,i=0;e+=this.settings.mouseY*this.width*this.settings.mouseParallaxCoef,i+=this.settings.mouseX*this.width*this.settings.mouseParallaxCoef,this.y=this.baseY+e,this.x=this.baseX+i}},{key:"prepareDraw",value:function(){this.doPrepareDraw=function(){}}},{key:"draw",value:function(t){this.doPrepareDraw(t)}}]),t}(),E=function(t){l()(i,t);var e=x(i);function i(){return a()(this,i),e.apply(this,arguments)}return r()(i,[{key:"prepareDraw",value:function(t){this.line1Grd1=t.createLinearGradient(0,0,this.width,this.height),this.line1Grd1.addColorStop(.04,"rgba(152,183,253,0.00)"),this.line1Grd1.addColorStop(.18,"#99b9ff"),this.line1Grd1.addColorStop(.82,"rgba(72,80,125,0.69)"),this.line1Grd1.addColorStop(.97,"rgba(152,183,253,0.00)"),this.line1Grd2=t.createLinearGradient(0,0,0,this.height),this.line1Grd2.addColorStop(0,"#98b7fd"),this.line1Grd2.addColorStop(.02,"#434a74"),this.line1Grd2.addColorStop(.09,"rgba(44,49,80,0.30)"),this.line1Grd2.addColorStop(.17,"rgba(44,49,80,0.22)"),this.line1Grd2.addColorStop(.28,"rgba(44,49,80,0.22)"),this.line1Grd2.addColorStop(.49,"rgba(152,183,253,0.00)"),this.line1Grd2.addColorStop(.72,"rgba(152,183,253,0.00)"),this.line1Grd2.addColorStop(.88,"rgba(41,45,76,0.30)"),this.line1Grd2.addColorStop(.98,"#88a3e3"),this.line1Grd2.addColorStop(1,"#88a3e3"),this.alphaMultiplier=this.scale<8?.6:1,S()(d()(i.prototype),"prepareDraw",this).call(this,t)}},{key:"draw",value:function(t){S()(d()(i.prototype),"draw",this).call(this,t),t.setTransform(1,0,0,1,this.x-this.width,this.y);var e=t.globalAlpha;t.globalAlpha=e*this.alphaMultiplier,t.fillStyle=this.line1Grd1,t.fillRect(0,0,this.width,this.height),t.fillStyle=this.line1Grd2,t.fillRect(0,0,this.width,this.height),t.globalAlpha=e}}]),i}(H),_=function(t){l()(i,t);var e=x(i);function i(){return a()(this,i),e.apply(this,arguments)}return r()(i,[{key:"prepareDraw",value:function(t){this.line2Grd1=t.createLinearGradient(0,0,0,this.height),this.line2Grd1.addColorStop(0,"#a3bffd"),this.line2Grd1.addColorStop(1,"#3c446a"),S()(d()(i.prototype),"prepareDraw",this).call(this,t)}},{key:"draw",value:function(t){S()(d()(i.prototype),"draw",this).call(this,t),t.setTransform(1,0,0,1,1,this.y),t.fillStyle=this.line2Grd1,t.fillRect(this.x-this.width,0,this.width,this.height)}}]),i}(H),j=function(t){l()(i,t);var e=x(i);function i(){return a()(this,i),e.apply(this,arguments)}return r()(i,[{key:"prepareDraw",value:function(t){this.line3Grd1=t.createLinearGradient(0,0,0,this.height),this.line3Grd1.addColorStop(0,"#99b9ff"),this.line3Grd1.addColorStop(.01,"#6f8ac5"),this.line3Grd1.addColorStop(.08,"#4a6091"),this.line3Grd1.addColorStop(.21,"#3f466e"),this.line3Grd1.addColorStop(.26,"#363c61"),this.line3Grd1.addColorStop(.46,"#3a4167"),this.line3Grd1.addColorStop(.67,"#383f65"),this.line3Grd1.addColorStop(.9,"#303658"),this.line3Grd1.addColorStop(1,"#95b4f9"),S()(d()(i.prototype),"prepareDraw",this).call(this,t)}},{key:"draw",value:function(t){S()(d()(i.prototype),"draw",this).call(this,t),t.setTransform(1,0,0,1,1,this.y),t.fillStyle=this.line3Grd1,t.fillRect(this.x-this.width,0,this.width,this.height)}}]),i}(H),L=function(t){l()(i,t);var e=x(i);function i(){return a()(this,i),e.apply(this,arguments)}return r()(i,[{key:"prepareDraw",value:function(t){this.line4Grd1=t.createLinearGradient(0,0,0,this.height),this.line4Grd1.addColorStop(0,"#99c9ff"),this.line4Grd1.addColorStop(.02,"#363d60"),this.line4Grd1.addColorStop(.27,"#394066"),this.line4Grd1.addColorStop(.48,"#2e3355"),this.line4Grd1.addColorStop(.26,"#20233e"),this.line4Grd1.addColorStop(.46,"#32385c"),this.line4Grd1.addColorStop(.71,"#3c4268"),this.line4Grd1.addColorStop(.9,"#282a48"),this.line4Grd1.addColorStop(1,"#8ca8ea"),S()(d()(i.prototype),"prepareDraw",this).call(this,t)}},{key:"draw",value:function(t){S()(d()(i.prototype),"draw",this).call(this,t),t.setTransform(1,0,0,1,1,this.y),t.fillStyle=this.line4Grd1,t.fillRect(this.x-this.width,0,this.width,this.height)}}]),i}(H),A="#99b9ff",D=function(t){l()(i,t);var e=x(i);function i(t){var n;return a()(this,i),n=e.call(this,t),n.width=t.fatLineWidth,n.height=t.fatLineHeight,n}return r()(i,[{key:"draw",value:function(t){S()(d()(i.prototype),"draw",this).call(this,t),t.setTransform(1,0,0,1,1,this.y),t.fillStyle=A,t.fillRect(this.x,0,this.width,this.height)}}]),i}(H),O=function(){function t(e){a()(this,t),this.settings=e,this.canvas=this.settings.canvas,this.context=this.canvas&&this.canvas.getContext("2d"),this.context.mozImageSmoothingEnabled=!0,this.context.webkitImageSmoothingEnabled=!0,this.context.msImageSmoothingEnabled=!0,this.context.imageSmoothingEnabled=!0,this.context.imageSmoothingQuality="high",this.particles=[],this.isPlaying=!1,this.animationWorker=this.animationWorker.bind(this),this.startTime=null,this.drawTimer=null,this.renderingAllowed=!1,this._doLoading()}return r()(t,[{key:"_doLoading",value:function(){return this.renderingAllowed=!0,C.gsap.fromTo(this.canvas,1.5,{autoAlpha:0},{autoAlpha:1,delay:1}),this.renderOnce(),Promise.resolve()}},{key:"play",value:function(){this.isPlaying||(this.isPlaying=!0,this.startTime=performance.now(),this.enqueueAnimation())}},{key:"pause",value:function(){this.isPlaying=!1}},{key:"setup",value:function(){if(this.canvas){this.setCanvasSize(!1),this.particles=[];for(var t=Math.round(this.settings.count/this.settings.lineGroupsQuantity),e=0;e<t;e++)this.particles.push(new E(this.settings));for(var i=0;i<t;i++)this.particles.push(new _(this.settings));for(var n=0;n<t;n++)this.particles.push(new j(this.settings));for(var a=0;a<t;a++)this.particles.push(new L(this.settings));for(var o=0;o<this.settings.fatLineQuantity;o++)this.particles.push(new D(this.settings))}}},{key:"renderOnce",value:function(){!this.isPlaying&&this.renderingAllowed&&window.requestAnimationFrame(this.drawCanvas.bind(this))}},{key:"setCanvasSize",value:function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this.canvas&&(this.canvas.width=this.canvas.parentNode.offsetWidth,this.canvas.height=this.canvas.parentNode.offsetHeight,this.settings.canvasWidth=this.canvas.width,this.settings.canvasHeight=this.canvas.height,t&&this.particles.forEach((function(t){t.changePosition()})))}},{key:"animationWorker",value:function(t){this.drawCanvas(t),this.enqueueAnimation()}},{key:"enqueueAnimation",value:function(){this.isPlaying&&window.requestAnimationFrame(this.animationWorker)}},{key:"drawCanvas",value:function(t){if(this.renderingAllowed){this.context.setTransform(1,0,0,1,0,0),this.context.clearRect(0,0,this.canvas.width,this.canvas.height);var e=t-this.startTime;this.startTime=t;for(var i=0;i<this.particles.length;i++){var n=this.particles[i];n.float(e),n.draw(this.context)}}}}]),t}(),P=function(){function t(){a()(this,t)}return r()(t,[{key:"_setup",value:function(){this._el=y()("#emit-about .limit-wrapper")[0],this.rect=this._el.getBoundingClientRect(),this.onMouseMove=this.onMouseMove.bind(this),this.onMouseLeave=this.onMouseLeave.bind(this),this.resize=this.resize.bind(this),this.isMobile=!1,this.isFullHD=!1,this.mobileFlagChanged=!1,this.width=window.innerWidth,this.canvasSettings={startingX:0,startingY:0,baseSpeed:1e-4,lineGroupsQuantity:4,scale:[2,3.1,3.6,2.5,2.2,3,2.6,4,4.5,5,7,8,9,10,12],canvas:z,mouseX:0,mouseY:0,mouseParallaxCoef:3},this.fullHDCanvasSettings={count:300,particleSizeY:39,particleSizeX:.48,fatLineQuantity:9,fatLineWidth:15,fatLineHeight:250,floatAmplitude:10},this.desktopCanvasSettings={count:400,particleSizeY:30,particleSizeX:.4,fatLineQuantity:8,fatLineWidth:13,fatLineHeight:200,floatAmplitude:10},this.mobileCanvasSettings={count:100,particleSizeY:18,particleSizeX:.4,fatLineQuantity:4,fatLineWidth:7,fatLineHeight:100,floatAmplitude:0},this._canvas=new O(this.canvasSettings),this.updateMobileFlag(this.width)?(this.setCanvasSettings(),this._canvas.setup(),this.resize()):this._canvas.setCanvasSize()}},{key:"resize",value:function(){this.width=window.innerWidth,this.updateMobileFlag(this.width)?(this.setCanvasSettings(),this._canvas.setup()):this._canvas.setCanvasSize(),this._canvas.renderOnce()}},{key:"setCanvasSettings",value:function(){this.isMobile&&Object.assign(this.canvasSettings,this.mobileCanvasSettings),this.isFullHD&&Object.assign(this.canvasSettings,this.fullHDCanvasSettings),this.isFullHD||this.isMobile||Object.assign(this.canvasSettings,this.desktopCanvasSettings)}},{key:"updateMobileFlag",value:function(t){var e=t<k,i=t>G;return e!==this.isMobile?(this.isMobile=e,!0):i!==this.isFullHD?(this.isFullHD=i,!0):!this.isFullHD&&!this.isMobile}},{key:"addMouseMoveFloat",value:function(){this._el.addEventListener("mousemove",this.onMouseMove),this._el.addEventListener("mouseleave",this.onMouseLeave)}},{key:"removeMouseEventListener",value:function(){this._el.removeEventListener("mousemove",this.onMouseMove),this._el.removeEventListener("mouseleave",this.onMouseLeave)}},{key:"onMouseMove",value:function(t){if(!(window.innerWidth<1e3)){C.gsap.killTweensOf(this.canvasSettings);var e=this._el.getBoundingClientRect();C.gsap.to(this.canvasSettings,.5,{mouseX:(t.clientX-e.left)/e.width-.5,mouseY:(t.clientY-e.top)/e.height-.5})}}},{key:"onMouseLeave",value:function(){C.gsap.to(this.canvasSettings,2,{mouseX:0,mouseY:0,delay:.5})}},{key:"_activate",value:function(){window.addEventListener("resize",this.resize),this.isMobile||(this._canvas.play(),this.addMouseMoveFloat())}},{key:"_deactivate",value:function(){window.removeEventListener("resize",this.resize),this._canvas.pause(),this.removeMouseEventListener()}}]),t}();function R(){var t=new P;t._setup(),t._activate(),Y.onload=Y.classList.add("loaded")}var T=i(845),F=i(186),q=i(997),W=/[achlmqstvz]|(-?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,I=/[\+\-]?\d*\.?\d+e[\+\-]?\d+/gi,Q=Math.PI/180,X=(Math.PI,Math.sin),B=Math.cos,N=Math.abs,Z=Math.sqrt,V=(Math.atan2,function(t){return"number"===typeof t}),U=1e5,J=function(t){return Math.round(t*U)/U||0};function K(t,e,i,n,a,o,r){var s,l,h,c,u,d=t.length;while(--d>-1)for(s=t[d],l=s.length,h=0;h<l;h+=2)c=s[h],u=s[h+1],s[h]=c*e+u*n+o,s[h+1]=c*i+u*a+r;return t._dirty=1,t}function $(t,e,i,n,a,o,r,s,l){if(t!==s||e!==l){i=N(i),n=N(n);var h=a%360*Q,c=B(h),u=X(h),d=Math.PI,f=2*d,p=(t-s)/2,g=(e-l)/2,v=c*p+u*g,m=-u*p+c*g,y=v*v,w=m*m,b=y/(i*i)+w/(n*n);b>1&&(i=Z(b)*i,n=Z(b)*n);var S=i*i,C=n*n,x=(S*C-S*w-C*y)/(S*w+C*y);x<0&&(x=0);var M=(o===r?-1:1)*Z(x),k=M*(i*m/n),G=M*(-n*v/i),Y=(t+s)/2,z=(e+l)/2,H=Y+(c*k-u*G),E=z+(u*k+c*G),_=(v-k)/i,j=(m-G)/n,L=(-v-k)/i,A=(-m-G)/n,D=_*_+j*j,O=(j<0?-1:1)*Math.acos(_/Z(D)),P=(_*A-j*L<0?-1:1)*Math.acos((_*L+j*A)/Z(D*(L*L+A*A)));isNaN(P)&&(P=d),!r&&P>0?P-=f:r&&P<0&&(P+=f),O%=f,P%=f;var R,T=Math.ceil(N(P)/(f/4)),F=[],q=P/T,W=4/3*X(q/2)/(1+B(q/2)),I=c*i,V=u*i,U=u*-n,J=c*n;for(R=0;R<T;R++)a=O+R*q,v=B(a),m=X(a),_=B(a+=q),j=X(a),F.push(v-W*m,m+W*v,_+W*j,j-W*_,_,j);for(R=0;R<F.length;R+=2)v=F[R],m=F[R+1],F[R]=v*I+m*U+H,F[R+1]=v*V+m*J+E;return F[R-2]=s,F[R-1]=l,F}}function tt(t){var e,i,n,a,o,r,s,l,h,c,u,d,f,p,g,v=(t+"").replace(I,(function(t){var e=+t;return e<1e-4&&e>-1e-4?0:e})).match(W)||[],m=[],y=0,w=0,b=2/3,S=v.length,C=0,x=function(t,e,i,n){c=(i-t)/3,u=(n-e)/3,s.push(t+c,e+u,i-c,n-u,i,n)};if(!t||!isNaN(v[0])||isNaN(v[1]))return m;for(e=0;e<S;e++)if(f=o,isNaN(v[e])?(o=v[e].toUpperCase(),r=o!==v[e]):e--,n=+v[e+1],a=+v[e+2],r&&(n+=y,a+=w),e||(l=n,h=a),"M"===o)s&&(s.length<8?m.length-=1:C+=s.length),y=l=n,w=h=a,s=[n,a],m.push(s),e+=2,o="L";else if("C"===o)s||(s=[0,0]),r||(y=w=0),s.push(n,a,y+1*v[e+3],w+1*v[e+4],y+=1*v[e+5],w+=1*v[e+6]),e+=6;else if("S"===o)c=y,u=w,"C"!==f&&"S"!==f||(c+=y-s[s.length-4],u+=w-s[s.length-3]),r||(y=w=0),s.push(c,u,n,a,y+=1*v[e+3],w+=1*v[e+4]),e+=4;else if("Q"===o)c=y+(n-y)*b,u=w+(a-w)*b,r||(y=w=0),y+=1*v[e+3],w+=1*v[e+4],s.push(c,u,y+(n-y)*b,w+(a-w)*b,y,w),e+=4;else if("T"===o)c=y-s[s.length-4],u=w-s[s.length-3],s.push(y+c,w+u,n+(y+1.5*c-n)*b,a+(w+1.5*u-a)*b,y=n,w=a),e+=2;else if("H"===o)x(y,w,y=n,w),e+=1;else if("V"===o)x(y,w,y,w=n+(r?w-y:0)),e+=1;else if("L"===o||"Z"===o)"Z"===o&&(n=l,a=h,s.closed=!0),("L"===o||N(y-n)>.5||N(w-a)>.5)&&(x(y,w,n,a),"L"===o&&(e+=2)),y=n,w=a;else if("A"===o){if(p=v[e+4],g=v[e+5],c=v[e+6],u=v[e+7],i=7,p.length>1&&(p.length<3?(u=c,c=g,i--):(u=g,c=p.substr(2),i-=2),g=p.charAt(1),p=p.charAt(0)),d=$(y,w,+v[e+1],+v[e+2],+v[e+3],+p,+g,(r?y:0)+1*c,(r?w:0)+1*u),e+=i,d)for(i=0;i<d.length;i++)s.push(d[i]);y=s[s.length-2],w=s[s.length-1]}return e=s.length,e<6?(m.pop(),e=0):s[0]===s[e-2]&&s[1]===s[e-1]&&(s.closed=!0),m.totalPoints=C+e,m}function et(t){V(t[0])&&(t=[t]);var e,i,n,a,o="",r=t.length;for(i=0;i<r;i++){for(a=t[i],o+="M"+J(a[0])+","+J(a[1])+" C",e=a.length,n=2;n<e;n++)o+=J(a[n++])+","+J(a[n++])+" "+J(a[n++])+","+J(a[n++])+" "+J(a[n++])+","+J(a[n])+" ";a.closed&&(o+="z")}return o}var it,nt,at=function(){return it||"undefined"!==typeof window&&(it=window.gsap)&&it.registerPlugin&&it},ot=function(){it=at(),it&&(it.registerEase("_CE",pt.create),nt=1)},rt=1e20,st=function(t){return~~(1e3*t+(t<0?-.5:.5))/1e3},lt=1,ht=/[-+=\.]*\d+[\.e\-\+]*\d*[e\-\+]*\d*/gi,ct=/[cLlsSaAhHvVtTqQ]/g,ut=function(t){var e,i=t.length,n=rt;for(e=1;e<i;e+=6)+t[e]<n&&(n=+t[e]);return n},dt=function(t,e,i){i||0===i||(i=Math.max(+t[t.length-1],+t[1]));var n,a=-1*+t[0],o=-i,r=t.length,s=1/(+t[r-2]+a),l=-e||(Math.abs(+t[r-1]-+t[1])<.01*(+t[r-2]-+t[0])?ut(t)+o:+t[r-1]+o);for(l=l?1/l:-s,n=0;n<r;n+=2)t[n]=(+t[n]+a)*s,t[n+1]=(+t[n+1]+o)*l},ft=function t(e,i,n,a,o,r,s,l,h,c,u){var d,f=(e+n)/2,p=(i+a)/2,g=(n+o)/2,v=(a+r)/2,m=(o+s)/2,y=(r+l)/2,w=(f+g)/2,b=(p+v)/2,S=(g+m)/2,C=(v+y)/2,x=(w+S)/2,M=(b+C)/2,k=s-e,G=l-i,Y=Math.abs((n-s)*G-(a-l)*k),z=Math.abs((o-s)*G-(r-l)*k);return c||(c=[{x:e,y:i},{x:s,y:l}],u=1),c.splice(u||c.length-1,0,{x:x,y:M}),(Y+z)*(Y+z)>h*(k*k+G*G)&&(d=c.length,t(e,i,f,p,w,b,x,M,h,c,u),t(x,M,S,C,m,y,s,l,h,c,u+1+(c.length-d))),c},pt=function(){function t(t,e,i){nt||ot(),this.id=t,lt&&this.setData(e,i)}var e=t.prototype;return e.setData=function(t,e){e=e||{},t=t||"0,0,1,1";var i,n,a,o,r,s,l,h,c,u=t.match(ht),d=1,f=[],p=[],g=e.precision||1,v=g<=1;if(this.data=t,(ct.test(t)||~t.indexOf("M")&&t.indexOf("C")<0)&&(u=tt(t)[0]),i=u.length,4===i)u.unshift(0,0),u.push(1,1),i=8;else if((i-2)%6)throw"Invalid CustomEase";for(0===+u[0]&&1===+u[i-2]||dt(u,e.height,e.originY),this.segment=u,o=2;o<i;o+=6)n={x:+u[o-2],y:+u[o-1]},a={x:+u[o+4],y:+u[o+5]},f.push(n,a),ft(n.x,n.y,+u[o],+u[o+1],+u[o+2],+u[o+3],a.x,a.y,1/(2e5*g),f,f.length-1);for(i=f.length,o=0;o<i;o++)l=f[o],h=f[o-1]||l,l.x>h.x||h.y!==l.y&&h.x===l.x||l===h?(h.cx=l.x-h.x,h.cy=l.y-h.y,h.n=l,h.nx=l.x,v&&o>1&&Math.abs(h.cy/h.cx-f[o-2].cy/f[o-2].cx)>2&&(v=0),h.cx<d&&(h.cx?d=h.cx:(h.cx=.001,o===i-1&&(h.x-=.001,d=Math.min(d,.001),v=0)))):(f.splice(o--,1),i--);if(i=1/d+1|0,r=1/i,s=0,l=f[0],v){for(o=0;o<i;o++)c=o*r,l.nx<c&&(l=f[++s]),n=l.y+(c-l.x)/l.cx*l.cy,p[o]={x:c,cx:r,y:n,cy:0,nx:9},o&&(p[o-1].cy=n-p[o-1].y);p[i-1].cy=f[f.length-1].y-n}else{for(o=0;o<i;o++)l.nx<o*r&&(l=f[++s]),p[o]=l;s<f.length-1&&(p[o-1]=f[f.length-2])}return this.ease=function(t){var e=p[t*i|0]||p[i-1];return e.nx<t&&(e=e.n),e.y+(t-e.x)/e.cx*e.cy},this.ease.custom=this,this.id&&it.registerEase(this.id,this.ease),this},e.getSVGData=function(e){return t.getSVGData(this,e)},t.create=function(e,i,n){return new t(e,i,n).ease},t.register=function(t){it=t,ot()},t.get=function(t){return it.parseEase(t)},t.getSVGData=function(e,i){i=i||{};var n,a,o,r,s,l,h,c,u,d,f=i.width||100,p=i.height||100,g=i.x||0,v=(i.y||0)+p,m=it.utils.toArray(i.path)[0];if(i.invert&&(p=-p,v=0),"string"===typeof e&&(e=it.parseEase(e)),e.custom&&(e=e.custom),e instanceof t)n=et(K([e.segment],f,0,0,-p,g,v));else{for(n=[g,v],h=Math.max(5,200*(i.precision||1)),r=1/h,h+=2,c=5/h,u=st(g+r*f),d=st(v+e(r)*-p),a=(d-v)/(u-g),o=2;o<h;o++)s=st(g+o*r*f),l=st(v+e(o*r)*-p),(Math.abs((l-d)/(s-u)-a)>c||o===h-1)&&(n.push(u,d),a=(l-d)/(s-u)),u=s,d=l;n="M"+n.join(",")}return m&&m.setAttribute("d",n),n},t}();at()&&it.registerPlugin(pt),pt.version="3.5.0",C.gsap.registerPlugin(pt),pt.create("better-elastic","0.77, 0, 0.175, 1"),pt.create("dragger-elastic","0.18, 0.89, 0.32, 1.28"),pt.create("easeOutQuart","0.25, 1, 0.5, 1"),pt.create("easeOutQuart2",".67,.0,.47,1"),pt.create("easeOutQuart3","0.91, 0.05, 0.29, 0.99"),pt.create("ease-in",".36,.01,.57,.99");var gt=i(630),vt=i.n(gt),mt=i(568);function yt(t){var e=wt();return function(){var i,n=d()(t);if(e){var a=d()(this).constructor;i=Reflect.construct(n,arguments,a)}else i=n.apply(this,arguments);return c()(this,i)}}function wt(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}T.Z.use([F.Z,q.Z]);var bt=function(){var t={in:[{dom:".project-wallet .layer-bg",origin:{opacity:0},param:{opacity:1,duration:.36}},{dom:".project-wallet .layer-level-2",origin:{opacity:0},param:{opacity:1,duration:.36}},{dom:".project-wallet .layer-phone",origin:{translateY:100},param:{translateY:0,duration:.56}},{dom:".project-wallet .layer-log",origin:{translateY:100},param:{translateY:0,duration:.56}},{dom:".project-wallet .layer-text",origin:{translateY:200},param:{translateY:0,duration:.56}}],out:[{dom:".project-wallet .layer-bg",origin:{opacity:1},param:{opacity:0}},{dom:".project-wallet .layer-level-2",origin:{opacity:1},param:{opacity:0}}]},e={in:[{dom:".project-node .layer-level-2",origin:{opacity:0},param:{opacity:1}},{dom:".project-node .layer-node-1",origin:{opacity:0,translateY:80},param:{opacity:1,translateY:0,duration:.56}},{dom:".project-node .layer-node-2",origin:{opacity:0,translateY:150,duration:.8},param:{opacity:1,translateY:0},delay:"-=0.36"},{dom:".project-node .layer-line--layer1",origin:{width:"32%"},param:{width:"82%"},delay:"+=0.3"}],out:[{dom:".project-node .layer-level-2",origin:{opacity:1},param:{opacity:0}}]},i={in:[{dom:".project-generator .layer-bg",origin:{opacity:0},param:{opacity:1,duration:.56}},{dom:".project-generator .layer-level-2",origin:{opacity:0},param:{opacity:1,duration:.56}},{dom:".project-generator .layer-generator-1",origin:{translateY:20,opacity:0},param:{translateY:0,opacity:1,duration:.56},delay:"-=0.4"},{dom:".project-generator .layer-generator-2",origin:{translateY:40,opacity:0},param:{translateY:0,opacity:1,duration:.56},delay:"-=0.2"}],out:[{dom:".project-generator .layer-bg",origin:{opacity:1},param:{opacity:0}},{dom:".project-generator .layer-level-2",origin:{opacity:1},param:{opacity:0}}]},n={in:[{dom:".project-browser .layer-bg",origin:{opacity:0},param:{opacity:1,duration:.56}},{dom:".project-browser .layer-level-2",origin:{opacity:0},param:{opacity:1,duration:.56}},{dom:".project-browser .layer-browser-1",origin:{translateY:20,opacity:0},param:{translateY:0,opacity:1,duration:.56}},{dom:".project-browser .layer-browser-2",origin:{translateY:20,opacity:0},param:{translateY:0,opacity:1,duration:.56}},{dom:".project-browser .layer-browser-3",origin:{translateY:20,opacity:0},param:{translateY:0,opacity:1,duration:.56}}],out:[{dom:".project-browser .layer-bg",origin:{opacity:1},param:{opacity:0}},{dom:".project-browser .layer-level-2",origin:{opacity:1},param:{opacity:0}}]};return{0:t,1:e,2:i,3:n}},St=function(t){l()(i,t);var e=yt(i);function i(){var t;return a()(this,i),t=e.apply(this,arguments),t.defaultTask=["listenPageScroll","listenWindowResize","DOMLoad","initHeaderEffect","initBannerEffect","indexStripEffect","initNewsSlider","initProjectEffect","miniHeader","hashHeaderController"],t}return r()(i,[{key:"hashHeaderController",value:function(){function t(){var t=window.location.hash;y()(".nav_item").removeClass("state-active"),t?y()('.nav_item[href="'.concat(t,'"]')).addClass("state-active"):y()(".nav_item").eq(0).addClass("state-active")}window.onhashchange=function(){t()},t(),this.bind("pageScroll.headerState",(function(){y()("html").hasClass("state-nav--open")||y()(".page-module").toArray().some((function(t){var e=t.getBoundingClientRect();return e.top<window.innerHeight/2&&e.bottom>window.innerHeight/2&&(y()(".nav_item").removeClass("state-active"),y()('.nav_item[href="#'.concat(t.id,'"]')).addClass("state-active"),!0)}))}))}},{key:"miniHeader",value:function(){function t(t,e){var i=C.default.timeline();"open"==t?i.fromTo(".layer--site-nav",{"clip-path":"polygon(100% 0, 100% 0, 100% 100%, 100% 100%)"},{"clip-path":"polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",duration:1,ease:"easeOutQuart3",onComplete:e}).fromTo(".layer--site-nav .nav_item .text",{transform:"translate3D(0, 100%, 0)"},{transform:"translate3D(0, 0%, 0)",duration:.5,stagger:.1,ease:"easeOutQuart3"},"-=0.5").fromTo(".select_options--local .select_option",{transform:"translate3D(0, 100%, 0)"},{transform:"translate3D(0, 0%, 0)",duration:.5,stagger:.1,ease:"easeOutQuart3"},"-=1"):i.fromTo(".layer--site-nav",{"clip-path":"polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"},{"clip-path":"polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",duration:1,onComplete:e,ease:"easeOutQuart3"})}var e=!1;y()(".btn--site-nav").on("click",(function(){e||(e=!0,y()("html").hasClass("state-nav--open")?t("close",(function(){y()("html").removeClass("state-nav--open"),e=!1})):(y()("html").addClass("state-nav--open"),t("open",(function(){e=!1}))))})),y()(".nav_item").on("click",(function(){e||y()("html").hasClass("state-nav--open")&&(e=!0,y()("html").removeClass("state-nav--open"),t("close",(function(){y()("html").removeClass("state-nav--open"),e=!1})))})),this.bind("windowResize",(function(){e||y()("html").hasClass("state-nav--open")&&(e=!0,y()("html").removeClass("state-nav--open"),t("close",(function(){y()("html").removeClass("state-nav--open"),e=!1})))}))}},{key:"listenPageScroll",value:function(){var t=this;y()(window).on("scroll",(function(e){t.trigger("pageScroll",[e])}))}},{key:"listenWindowResize",value:function(){var t=this;y()(window).on("resize",(function(e){t.trigger("windowResize",[e])}))}},{key:"indexEarthEffect",value:function(){return w()}},{key:"indexStripEffect",value:function(){R()}},{key:"initNewsSlider",value:function(){var t=C.default.timeline(),e=new T.Z("#emit-news .news--slider_desc",{autoHeight:!0,virtualTranslate:!0,on:{transitionStart:function(e){var i=e.slides[e.realIndex],n=e.slides[e.previousIndex];t.fromTo(n.querySelectorAll(".will-animate"),{opacity:1,translateY:0},{opacity:0,translateY:-30,stagger:.1,ease:"ease-in",onStart:function(){y()(i).css({position:"absolute",top:"0",left:"0",overflow:"hidden"})}}).fromTo(i.querySelectorAll(".will-animate"),{opacity:0,translateY:60},{opacity:1,translateY:0,stagger:.1,ease:"ease-in"},"+=0.3")}}}),i=!0;new T.Z("#emit-news .news--slider_preview",{autoHeight:!0,virtualTranslate:!0,on:{slideChange:function(t){if(i){i=!1;var n=t.realIndex,a=t.slides;n>=a.length?n-=a.length:n<0&&(n+=a.length),e.slideTo(n);var o=t.previousIndex,r=a[n];C.default.fromTo(r,{width:"0"},{width:"100%",duration:.8,ease:"easeOutQuart2",onComplete:function(){i=!0},onStart:function(){y()(a).css({zIndex:0}),y()(a).eq(o).css({zIndex:20}),y()(r).css({position:"absolute",top:"0",left:"0",zIndex:50,overflow:"hidden"})}}),C.default.fromTo(r.querySelector("img"),{scale:1.3},{scale:1,duration:2.2,ease:"easeOutQuart"})}}},pagination:{clickable:!0,type:"bullets",bulletClass:"slider-tab-dot",bulletActiveClass:"state-active",el:".slider-tab-dots",renderBullet:function(t,e){return'<div class="slider-tab-dot button '.concat(e,'"><div class="slider-tab-dot_inner"></div></div>')}}})}},{key:"initHeaderEffect",value:function(){var t=function(){var t="normal",e="show";return function(i,n){if(window.innerWidth<=1280)return t="normal",e="show",y()("#emit-header").attr("data-size-state",t),void y()("#emit-header").attr("data-show-state",e);function a(t){var i="up"==t?"show":"hide";e!==i&&(e=i,y()("#emit-header").attr("data-show-state",e))}n>20?"mini"!=t&&(t="mini",y()("#emit-header").attr("data-size-state",t)):"normal"!=t&&(t="normal",y()("#emit-header").attr("data-size-state",t)),a(i&&n>20?"down":"up")}}(),e={color:"#161622"},i=C.default.to(e,{color:"#1e1e41",ease:"none",paused:!0});function n(n,a){i.progress(window.pageYOffset/(.7*(document.body.scrollHeight-window.innerHeight)));var o=C.default.utils.splitColor(e.color);o[3]=.9,y()(".header").css("background-color","rgba(".concat(o[0],", ").concat(o[1],", ").concat(o[2],", ").concat(o[3],")")),y()(".header .select_options--local").css("background-color","rgba(".concat(o[0],", ").concat(o[1],", ").concat(o[2],", ").concat(o[3],")")),y()(".layer--site-nav").css("background-color","rgba(".concat(o[0],", ").concat(o[1],", ").concat(o[2],", 1)")),t(n,a)}this.bind("pageScroll.header",(function(){requestAnimationFrame((function(){var t=p();0!=t.y&&n(1==t.y,window.pageYOffset)}))})),this.bind("windowResize",(function(){n(!1,window.pageYOffset)})),n(!1,window.pageYOffset)}},{key:"initProjectEffect",value:function(){var t,e,i=document.getElementById("emit-project"),n=y()(".project-desc-list .list-item");function a(){var t=!1,e=i.getBoundingClientRect();return t=e.top<=window.innerHeight&&e.bottom>=0,t}var o=!1,r=bt();function s(i){if(t!=i&&!o){o=!0,e=i;var a=C.default.timeline({paused:!0,onComplete:function(){o=!1,t=e;var i=window.innerHeight/2,a=1/0,r=null;n.each((function(t,e){var n=e.getBoundingClientRect(),o=n.top-n.height/2-i,s=n.bottom-n.height/2-i,l=Math.min(Math.abs(o),Math.abs(s));l<a&&(a=l,r=t)})),s(r)}});"number"==typeof t&&r[t].out.forEach((function(t){a.fromTo(t.dom,t.origin,t.param,t.delay||0)})),"number"==typeof e&&r[e].in.forEach((function(t){a.fromTo(t.dom,t.origin,t.param,t.delay||0)})),a.play()}}function l(){if(!(window.innerWidth<=1280)){if(a()){var t=window.innerHeight/2,e=window.innerHeight/2;n.each((function(i,n){var a=n.getBoundingClientRect(),o=a.top-t,r=a.bottom-a.height/2-t,l=a.top-e,h=a.bottom-a.height/2-e,c=0;l<0&&h>0&&s(i),c=o<0&&r>0?1:r<=0?1- -r/(window.innerHeight/2):1-o/(window.innerHeight/2),y()(n).css("opacity",Math.max(0,Math.min(c,1)))}))}return!1}n.css("opacity","")}this.bind("pageScroll.project",(function(){requestAnimationFrame((function(){l()}))})),this.bind("windowResize.project",(function(){requestAnimationFrame((function(){l()}))})),l();var h=(0,mt.default)(".project .state-pos-right",{useFixed:!0,stickyBitStickyOffset:.5*window.innerHeight-291});window.addEventListener("resize",(function(){h.update({stickyBitStickyOffset:.5*window.innerHeight-291})}))}},{key:"initBannerEffect",value:function(){var t=this.indexEarthEffect();this.bind("windowResize.earth",(function(){t.resize(),n()}));var e=C.default.to(y()(".banner-content .state-pos-left")[0],{translateY:"8vw",ease:"none",opacity:.2,paused:!0}),i=C.default.to(y()("#earth-scene")[0],{translateY:"5vw",opacity:.2,ease:"none",paused:!0});function n(){if(window.innerWidth<=1280)e.progress(0);else{var t=window.pageYOffset/window.innerHeight;e.progress(Math.max(Math.min(1,t))),i.progress(Math.max(Math.min(1,2*t)))}}this.bind("pageScroll.header",(function(){requestAnimationFrame((function(){n()}))}))}},{key:"DOMLoad",value:function(){(new(vt())).init({boxClass:"wow",animateClass:"animated",offset:0,mobile:!0,live:!0,callback:function(){},scrollContainer:null,resetAnimation:!0});var t=C.default.to(".site-bg--layer2",{translateY:.5*(document.body.scrollHeight-window.innerHeight),ease:"none",paused:!0}),e=C.default.to(".site-bg--agent_pc",{translateY:.2*(document.body.scrollHeight-window.innerHeight),ease:"none",paused:!0});this.bind("pageScroll",(function(){requestAnimationFrame((function(){var i=window.pageYOffset/(document.body.scrollHeight-window.innerHeight);e.progress(i),t.progress(i)}))})),y()(".layer--site-nav").on("touchmove",(function(t){t.preventDefault()}))}}]),i}(f),Ct=new St("emit");Ct.init()},39:function(t,e,i){t.exports=i(897)(358)},568:function(t,e,i){t.exports=i(897)(438)},313:function(t,e,i){t.exports=i(897)(735)},897:function(t){"use strict";t.exports=vendor_dll}},e={};function i(n){if(e[n])return e[n].exports;var a=e[n]={exports:{}};return t[n].call(a.exports,a,a.exports,i),a.exports}i.m=t,i.x=function(){},function(){i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,{a:e}),e}}(),function(){i.d=function(t,e){for(var n in e)i.o(e,n)&&!i.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})}}(),function(){i.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={143:0},e=[[833,647,233]],n=function(){},a=function(a,o){for(var r,s,l=o[0],h=o[1],c=o[2],u=o[3],d=0,f=[];d<l.length;d++)s=l[d],i.o(t,s)&&t[s]&&f.push(t[s][0]),t[s]=0;for(r in h)i.o(h,r)&&(i.m[r]=h[r]);c&&c(i),a&&a(o);while(f.length)f.shift()();return u&&e.push.apply(e,u),n()},o=self["webpackChunkemit_project"]=self["webpackChunkemit_project"]||[];function r(){for(var n,a=0;a<e.length;a++){for(var o=e[a],r=!0,s=1;s<o.length;s++){var l=o[s];0!==t[l]&&(r=!1)}r&&(e.splice(a--,1),n=i(i.s=o[0]))}return 0===e.length&&(i.x(),i.x=function(){}),n}o.forEach(a.bind(null,0)),o.push=a.bind(null,o.push.bind(o));var s=i.x;i.x=function(){return i.x=s||function(){},(n=r)()}}(),i.x()})();