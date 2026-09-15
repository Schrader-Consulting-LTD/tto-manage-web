((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,C,D,F,A={
bnI(d,e,f,g,h,i){return new A.a_s(e,h,f,d,g,i,null)},
a_s:function a_s(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
bhh(d){return D.b.hT(B.xd,new A.asR(d),new A.asS())},
bpm(d){return D.b.hT(B.a4r,new A.aEz(d),new A.aEA())},
asR:function asR(d){this.a=d},
asS:function asS(){},
jF:function jF(d,e,f){this.c=d
this.a=e
this.b=f},
aEz:function aEz(d){this.a=d},
aEA:function aEA(){},
ke:function ke(d,e,f){this.c=d
this.a=e
this.b=f},
bmH(d){var x
switch(d.a){case 0:x=D.bO
break
case 1:x=D.cW
break
case 2:x=D.c0
break
case 3:x=D.al
break
case 4:x=D.cW
break
case 5:x=D.fR
break
case 6:x=D.cW
break
default:x=null}return x},
bEt(d){var x
switch(d.a){case 0:x=B.a_J
break
case 1:x=D.pD
break
case 2:x=B.a_M
break
case 3:x=B.wk
break
case 4:x=D.kY
break
case 5:x=B.a_x
break
case 6:x=D.pD
break
default:x=null}return new C.iH(C.j("device_health_"+d.c),A.bmH(d),x,null)},
bpH(d){var x=C.j("strike_count")
return new C.iH(C.bP(x,"{n}",""+d),D.al,B.wm,null)}},B,E
J=c[1]
C=c[0]
D=c[2]
F=c[115]
A=a.updateHolder(c[40],A)
B=c[114]
E=c[101]
A.a_s.prototype={
gazW(){var x,w
if(this.f)return!1
x=this.c
$label0$0:{if(B.oL===x||B.oK===x||B.vh===x){w=!0
break $label0$0}if(B.oM===x){w=!this.e
break $label0$0}w=!1
break $label0$0}return w},
gazY(){if(!this.e||this.f)return!1
var x=this.c
return x!==B.kv&&x!==B.vi},
Xh(d){var x,w,v,u,t,s,r=this,q=null,p=C.b([],y.a)
if(r.gazW())p.push(A.bEt(r.c))
for(x=r.d,w=x.length,v=0;v<x.length;x.length===w||(0,C.F)(x),++v){u=x[v]
t="tamper_"+u
s=$.ck().a
s=$.cl.h(0,s)
s=s==null?q:s.h(0,t)
t=s==null?t:s
p.push(new C.iH(t,B.aj8.p(0,u)?D.al:D.c0,B.pI,q))}if(r.w)p.push(new C.iH(C.j("tamper_locked"),D.al,F.h9,q))
else{x=r.r
if(x>0)p.push(A.bpH(x))}if(r.gazY())p.push(new C.iH(C.j("stale"),q,q,q))
return p},
v(d){var x=this.Xh(0)
if(x.length===0)return D.Y
return C.rQ(x,D.dK,4,4)}}
A.jF.prototype={
K(){return"LocationProblem."+this.b}}
A.ke.prototype={
K(){return"DeviceHealth."+this.b}}
var z=a.updateTypes(["z(iX)","iX()","z(jF)","jF()"])
A.asR.prototype={
$1(d){var x=this.a
x=x==null?null:J.ac(x)
return d.c===x},
$S:z+0}
A.asS.prototype={
$0(){return E.o9},
$S:z+1}
A.aEz.prototype={
$1(d){var x=this.a
x=x==null?null:J.ac(x)
return d.c===x},
$S:z+2}
A.aEA.prototype={
$0(){return B.CJ},
$S:z+3};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(A.a_s,C.E)
w(C.bY,[A.asR,A.aEz])
w(C.cR,[A.asS,A.aEA])
w(C.iu,[A.jF,A.ke])})()
C.cO(b.typeUniverse,JSON.parse('{"a_s":{"E":[],"c":[]}}'))
var y={a:C.D("n<c>")};(function constants(){var x=a.makeConstList
B.kv=new A.ke("confirmed",0,"confirmed")
B.oK=new A.ke("degraded",2,"degraded")
B.vh=new A.ke("logged_out",4,"loggedOut")
B.vi=new A.ke("off_hours",5,"offHours")
B.oL=new A.ke("tampered",3,"tampered")
B.kw=new A.ke("unknown",6,"unknown")
B.oM=new A.ke("unverified",1,"unverified")
B.wk=new C.ay(61638,"MaterialIcons",null,!1)
B.pI=new C.ay(61640,"MaterialIcons",null,!1)
B.a_x=new C.ay(61972,"MaterialIcons",null,!1)
B.wm=new C.ay(62223,"MaterialIcons",null,!1)
B.a_J=new C.ay(62588,"MaterialIcons",null,!1)
B.a_M=new C.ay(62638,"MaterialIcons",null,!1)
B.xd=x([E.o9,E.tH,E.tF,E.tE,E.tD,E.tG,E.o8,E.jQ],C.D("n<iX>"))
B.CJ=new A.jF("none",0,"none")
B.abG=new A.jF("permission_off",1,"permissionOff")
B.abH=new A.jF("service_off",2,"serviceOff")
B.abF=new A.jF("no_fix",3,"noFix")
B.abE=new A.jF("mock",4,"mock")
B.abC=new A.jF("coarse",5,"coarse")
B.abD=new A.jF("geofence_unavailable",6,"geofenceUnavailable")
B.abB=new A.jF("clock_unverified",7,"clockUnverified")
B.a4r=x([B.CJ,B.abG,B.abH,B.abF,B.abE,B.abC,B.abD,B.abB],C.D("n<jF>"))
B.afL={clock_tampered:0,auto_time_off:1,time_set:2,timezone_changed:3,mock_location:4,location_revoked:5,location_mode_off:6,screen_time_revoked:7,accessibility_disabled:8,api_blocked:9,attempt_accessibility_settings:10,attempt_app_info:11,attempt_datetime_settings:12,attempt_location_settings:13,attempt_developer_settings:14,attempt_users_settings:15}
B.aj8=new C.ej(B.afL,16,C.D("ej<d>"))})()};
(a=>{a["rNkkRcFesPkx+Hl+V+IHMgjp2Es="]=a.current})($__dart_deferred_initializers__);