((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,D,A={
bpo(){var x=$.kU()
return new A.aEK(x,x,x)},
aEK:function aEK(d,e,f){this.QA$=d
this.aRc$=e
this.aRd$=f},
aEL:function aEL(){},
aEM:function aEM(){},
aEN:function aEN(){},
agB:function agB(){},
agC:function agC(){},
agD:function agD(){},
ava:function ava(d,e){this.a6A$=d
this.aIv$=e},
av4:function av4(){},
av5:function av5(d){this.a=d},
av6:function av6(){},
av7:function av7(){},
av8:function av8(d){this.a=d},
av9:function av9(){},
adm:function adm(){},
adn:function adn(){},
a0y:function a0y(d,e){this.a=d
this.b=e},
bDY(d){return D.b.hT(C.a8C,new A.aEI(d),new A.aEJ())},
oY:function oY(d,e,f){this.c=d
this.a=e
this.b=f},
aEI:function aEI(d){this.a=d},
aEJ:function aEJ(){},
bpn(d){var x,w,v,u,t,s,r=d.h(0,"id")
r=r==null?null:J.ac(r)
if(r==null)r=""
x=d.h(0,"school_id")
if(x!=null)J.ac(x)
x=d.h(0,"class_id")
if(x!=null)J.ac(x)
x=d.h(0,"student_id")
x=x==null?null:J.ac(x)
if(x==null)x=""
w=d.h(0,"code")
w=w==null?null:J.ac(w)
if(w==null)w=""
v=A.bDY(d.h(0,"status"))
u=B.ef(d.h(0,"expires_at"))
t=B.ef(d.h(0,"used_at"))
s=d.h(0,"used_device_id")
if(s!=null)J.ac(s)
s=d.h(0,"created_by")
if(s!=null)J.ac(s)
B.ef(d.h(0,"created_at"))
return new A.ie(r,x,w,v,u,t)},
ie:function ie(d,e,f,g,h,i){var _=this
_.a=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i},
Gr(d,e,f){var x=0,w=B.t(y.v),v
var $async$Gr=B.u(function(g,h){if(g===1)return B.p(h,w)
for(;;)switch(x){case 0:x=3
return B.i(B.cQ("generated_codes_page",""),$async$Gr)
case 3:if(e.e==null){x=1
break}x=4
return B.i(B.fQ(e).iV("/generated-codes",new B.eR(new A.a0y(d,f)),y.q),$async$Gr)
case 4:case 1:return B.q(v,w)}})
return B.r($async$Gr,w)}},C
J=c[1]
B=c[0]
D=c[2]
A=a.updateHolder(c[50],A)
C=c[123]
A.aEK.prototype={}
A.aEL.prototype={}
A.aEM.prototype={}
A.aEN.prototype={}
A.agB.prototype={}
A.agC.prototype={}
A.agD.prototype={}
A.ava.prototype={}
A.av4.prototype={
Jn(d,e,f){return this.a6A$.BP(d,e,f,null)},
abu(d){return this.Jn(null,null,d)},
abs(d){return this.Jn(d,null,null)},
abt(d){return this.Jn(null,d,null)}}
A.av5.prototype={
BP(d,e,f,g){return this.abv(d,e,f,g)},
abv(d,e,f,g){var x=0,w=B.t(y.A),v,u=this,t,s,r,q
var $async$BP=B.u(function(h,i){if(h===1)return B.p(i,w)
for(;;)switch(x){case 0:t=y.b
t=B.B(t,t)
if(f!=null)t.m(0,"student_ids",f)
if(d!=null)t.m(0,"class_id",d)
if(e!=null)t.m(0,"group_id",e)
s=y.d
r=J
q=B
x=3
return B.i(u.a.QA$.dk(t,"/login-codes/generate"),$async$BP)
case 3:t=s.a(r.b0(q.dA(i),"codes"))
if(t==null)t=[]
t=J.f0(t,y.B)
t=B.dw(t,new A.av6(),t.$ti.i("x.E"),y.e)
t=B.X(t,B.m(t).i("x.E"))
v=t
x=1
break
case 1:return B.q(v,w)}})
return B.r($async$BP,w)},
IO(d){return this.aOQ(d)},
aOQ(d){var x=0,w=B.t(y.C),v,u=this,t,s
var $async$IO=B.u(function(e,f){if(e===1)return B.p(f,w)
for(;;)switch(x){case 0:t=y.b
s=B
x=3
return B.i(u.a.QA$.dk(B.ae(["code_id",d],t,t),"/login-codes/revoke"),$async$IO)
case 3:s.iz(f)
v=!0
x=1
break
case 1:return B.q(v,w)}})
return B.r($async$IO,w)}}
A.av7.prototype={
Th(d){return this.aIv$.BS(null,d)}}
A.av8.prototype={
BS(d,e){return this.abC(d,e)},
abC(d,e){var x=0,w=B.t(y.A),v,u=this,t,s,r,q
var $async$BS=B.u(function(f,g){if(f===1)return B.p(g,w)
for(;;)switch(x){case 0:t=B.B(y.w,y.b)
t.m(0,"student_id",e)
s=y.d
r=J
q=B
x=3
return B.i(u.a.QA$.eK(0,"/login-codes/get-all",t),$async$BS)
case 3:t=s.a(r.b0(q.dA(g),"login_codes"))
if(t==null)t=[]
t=J.f0(t,y.B)
t=B.dw(t,new A.av9(),t.$ti.i("x.E"),y.e)
t=B.X(t,B.m(t).i("x.E"))
v=t
x=1
break
case 1:return B.q(v,w)}})
return B.r($async$BS,w)}}
A.adm.prototype={}
A.adn.prototype={}
A.a0y.prototype={}
A.oY.prototype={
K(){return"LoginCodeStatus."+this.b}}
A.ie.prototype={}
var z=a.updateTypes(["z(oY)","oY()"])
A.av6.prototype={
$1(d){return A.bpn(B.dg(d,y.w,y.b))},
$S:258}
A.av9.prototype={
$1(d){return A.bpn(B.dg(d,y.w,y.b))},
$S:258}
A.aEI.prototype={
$1(d){var x=this.a
x=x==null?null:J.ac(x)
return d.c===x},
$S:z+0}
A.aEJ.prototype={
$0(){return C.qn},
$S:z+1};(function inheritance(){var x=a.mixin,w=a.inheritMany,v=a.inherit
w(B.C,[A.agB,A.aEL,A.aEM,A.aEN,A.adm,A.av4,A.av5,A.av7,A.av8,A.a0y,A.ie])
v(A.agC,A.agB)
v(A.agD,A.agC)
v(A.aEK,A.agD)
v(A.adn,A.adm)
v(A.ava,A.adn)
w(B.bY,[A.av6,A.av9,A.aEI])
v(A.oY,B.iu)
v(A.aEJ,B.cR)
x(A.agB,A.aEL)
x(A.agC,A.aEN)
x(A.agD,A.aEM)
x(A.adm,A.av7)
x(A.adn,A.av4)})()
var y={A:B.D("w<ie>"),e:B.D("ie"),B:B.D("a5<@,@>"),w:B.D("d"),C:B.D("z"),b:B.D("@"),d:B.D("w<@>?"),q:B.D("C?"),v:B.D("~")};(function constants(){var x=a.makeConstList
C.qn=new A.oY("active",0,"active")
C.ad8=new A.oY("used",1,"used")
C.ad7=new A.oY("revoked",2,"revoked")
C.a8C=x([C.qn,C.ad8,C.ad7],B.D("n<oY>"))})();(function lazyInitializers(){var x=a.lazyFinal
x($,"bSz","VS",()=>new A.ava(new A.av5(A.bpo()),new A.av8(A.bpo())))})()};
(a=>{a["ebhzx9DPl6u+vhk6iFrFzbnbShI="]=a.current})($__dart_deferred_initializers__);