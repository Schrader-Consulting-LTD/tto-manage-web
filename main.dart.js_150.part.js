((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,D,A={
bza(){var x=$.lA()
return new A.aKl(x,x,x)},
aKl:function aKl(d,e,f){this.Ri$=d
this.aTq$=e
this.aTr$=f},
aKm:function aKm(){},
aKn:function aKn(){},
aKo:function aKo(){},
akp:function akp(){},
akq:function akq(){},
akr:function akr(){},
aA2:function aA2(d,e){this.a7t$=d
this.aKo$=e},
azY:function azY(){},
azZ:function azZ(d){this.a=d},
aA_:function aA_(){},
aA0:function aA0(d){this.a=d},
aA1:function aA1(){},
ahd:function ahd(){},
ahe:function ahe(){},
bOI(d){return D.b.i_(C.aaL,new A.aKj(d),new A.aKk())},
pS:function pS(d,e,f){this.c=d
this.a=e
this.b=f},
aKj:function aKj(d){this.a=d},
aKk:function aKk(){},
bNP(d){var x=J.az(d),w=y.d,v=w.a(x.i(d,"codes"))
if(v==null)v=[]
v=J.eG(v,y.B)
v=B.dw(v,new A.aFm(),v.$ti.h("z.E"),y.e)
v=B.U(v,B.v(v).h("z.E"))
x=w.a(x.i(d,"skipped_student_ids"))
if(x==null)x=[]
x=J.lC(x,new A.aFn(),y.w)
x=B.U(x,x.$ti.h("aS.E"))
return new A.uR(v,x)},
uR:function uR(d,e){this.a=d
this.b=e},
aFm:function aFm(){},
aFn:function aFn(){},
bz9(d){var x,w,v,u,t,s,r,q=null,p=d.i(0,"id")
p=p==null?q:J.aj(p)
if(p==null)p=""
x=d.i(0,"school_id")
if(x!=null)J.aj(x)
x=d.i(0,"class_id")
if(x!=null)J.aj(x)
x=d.i(0,"student_id")
x=x==null?q:J.aj(x)
if(x==null)x=""
w=d.i(0,"code")
w=w==null?q:J.aj(w)
if(w==null)w=""
v=A.bOI(d.i(0,"status"))
u=B.f9(d.i(0,"expires_at"))
t=B.f9(d.i(0,"used_at"))
s=d.i(0,"used_device_id")
s=s==null?q:J.aj(s)
r=d.i(0,"created_by")
if(r!=null)J.aj(r)
return new A.dj(p,x,w,v,u,t,s,B.f9(d.i(0,"created_at")))},
dj:function dj(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.z=k}},C
J=c[1]
B=c[0]
D=c[2]
A=a.updateHolder(c[82],A)
C=c[197]
A.aKl.prototype={}
A.aKm.prototype={}
A.aKn.prototype={}
A.aKo.prototype={}
A.akp.prototype={}
A.akq.prototype={}
A.akr.prototype={}
A.aA2.prototype={}
A.azY.prototype={
K5(d,e,f){return this.a7t$.Cx(d,e,f,null)},
acv(d){return this.K5(null,null,d)},
act(d){return this.K5(d,null,null)},
acu(d){return this.K5(null,d,null)}}
A.azZ.prototype={
Cx(d,e,f,g){return this.acw(d,e,f,g)},
acw(d,e,f,g){var x=0,w=B.n(y.p),v,u=this,t,s,r
var $async$Cx=B.o(function(h,i){if(h===1)return B.k(i,w)
for(;;)switch(x){case 0:t=y.b
t=B.D(t,t)
if(f!=null)t.n(0,"student_ids",f)
if(d!=null)t.n(0,"class_id",d)
if(e!=null)t.n(0,"group_id",e)
s=A
r=B
x=3
return B.e(u.a.Ri$.cM(t,"/login-codes/generate"),$async$Cx)
case 3:v=s.bNP(r.d6(i))
x=1
break
case 1:return B.l(v,w)}})
return B.m($async$Cx,w)},
Jy(d){return this.aQT(d)},
aQT(d){var x=0,w=B.n(y.C),v,u=this,t,s
var $async$Jy=B.o(function(e,f){if(e===1)return B.k(f,w)
for(;;)switch(x){case 0:t=y.b
s=B
x=3
return B.e(u.a.Ri$.cM(B.ak(["code_id",d],t,t),"/login-codes/revoke"),$async$Jy)
case 3:s.iD(f)
v=!0
x=1
break
case 1:return B.l(v,w)}})
return B.m($async$Jy,w)}}
A.aA_.prototype={
K6(d){return this.aKo$.CA(null,d)},
U_(){return this.K6(null)}}
A.aA0.prototype={
CA(d,e){return this.acD(d,e)},
acD(d,e){var x=0,w=B.n(y.A),v,u=this,t,s,r,q
var $async$CA=B.o(function(f,g){if(f===1)return B.k(g,w)
for(;;)switch(x){case 0:t=B.D(y.w,y.b)
if(e!=null)t.n(0,"student_id",e)
s=y.d
r=J
q=B
x=3
return B.e(u.a.Ri$.eZ(0,"/login-codes/get-all",t),$async$CA)
case 3:t=s.a(r.b2(q.d6(g),"login_codes"))
if(t==null)t=[]
t=J.eG(t,y.B)
t=B.dw(t,new A.aA1(),t.$ti.h("z.E"),y.e)
t=B.U(t,B.v(t).h("z.E"))
v=t
x=1
break
case 1:return B.l(v,w)}})
return B.m($async$CA,w)}}
A.ahd.prototype={}
A.ahe.prototype={}
A.pS.prototype={
L(){return"LoginCodeStatus."+this.b}}
A.uR.prototype={}
A.dj.prototype={}
var z=a.updateTypes(["x(pS)","pS()"])
A.aA1.prototype={
$1(d){return A.bz9(B.da(d,y.w,y.b))},
$S:253}
A.aKj.prototype={
$1(d){var x=this.a
x=x==null?null:J.aj(x)
return d.c===x},
$S:z+0}
A.aKk.prototype={
$0(){return C.nh},
$S:z+1}
A.aFm.prototype={
$1(d){return A.bz9(B.da(d,y.w,y.b))},
$S:253}
A.aFn.prototype={
$1(d){return J.aj(d)},
$S:67};(function inheritance(){var x=a.mixin,w=a.inheritMany,v=a.inherit
w(B.E,[A.akp,A.aKm,A.aKn,A.aKo,A.ahd,A.azY,A.azZ,A.aA_,A.aA0,A.uR,A.dj])
v(A.akq,A.akp)
v(A.akr,A.akq)
v(A.aKl,A.akr)
v(A.ahe,A.ahd)
v(A.aA2,A.ahe)
w(B.bN,[A.aA1,A.aKj,A.aFm,A.aFn])
v(A.pS,B.iB)
v(A.aKk,B.cI)
x(A.akp,A.aKm)
x(A.akq,A.aKo)
x(A.akr,A.aKn)
x(A.ahd,A.aA_)
x(A.ahe,A.azY)})()
var y={p:B.y("uR"),A:B.y("q<dj>"),e:B.y("dj"),B:B.y("a9<@,@>"),w:B.y("f"),C:B.y("x"),b:B.y("@"),d:B.y("q<@>?")};(function constants(){var x=a.makeConstList
C.nh=new A.pS("active",0,"active")
C.IR=new A.pS("used",1,"used")
C.IQ=new A.pS("revoked",2,"revoked")
C.aaL=x([C.nh,C.IR,C.IQ],B.y("p<pS>"))})();(function lazyInitializers(){var x=a.lazyFinal
x($,"c3b","C6",()=>new A.aA2(new A.azZ(A.bza()),new A.aA0(A.bza())))})()};
(a=>{a["Qp2TluoR9lCtIw6YAyZ1EulAp8w="]=a.current})($__dart_deferred_initializers__);