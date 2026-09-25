((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,A={
bu7(){var x=$.l4()
return new A.aZ9(x,x,x,x,x)},
aZa:function aZa(){},
aZb:function aZb(){},
aZc:function aZc(){},
aZd:function aZd(){},
aZe:function aZe(){},
aZ9:function aZ9(d,e,f,g,h){var _=this
_.GD$=d
_.aRx$=e
_.aRy$=f
_.aRz$=g
_.aRA$=h},
aos:function aos(){},
aot:function aot(){},
aou:function aou(){},
aov:function aov(){},
aow:function aow(){},
aYX:function aYX(){},
aYY:function aYY(d){this.a=d},
aZ_:function aZ_(){},
aZ0:function aZ0(d){this.a=d},
aZ1:function aZ1(){},
aZ2:function aZ2(d,e){this.Qx$=d
this.Ai$=e},
aoq:function aoq(){},
aor:function aor(){},
ix:function ix(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
ar1(d){if(d==null)return null
if(typeof d=="number")return d
if(B.lN(d))return d
return B.rr(J.af(d))}}
J=c[1]
B=c[0]
A=a.updateHolder(c[54],A)
A.aZa.prototype={}
A.aZb.prototype={}
A.aZc.prototype={}
A.aZd.prototype={}
A.aZe.prototype={}
A.aZ9.prototype={}
A.aos.prototype={}
A.aot.prototype={}
A.aou.prototype={}
A.aov.prototype={}
A.aow.prototype={}
A.aYX.prototype={}
A.aYY.prototype={
F4(d){return this.aDq(d)},
aDq(d){var x=0,w=B.o(y.e),v,u=this,t,s
var $async$F4=B.p(function(e,f){if(e===1)return B.l(f,w)
for(;;)switch(x){case 0:t=y.b
t=B.iL(d.p6(),t,t)
s=B
x=3
return B.e(u.a.GD$.d5(t,"/zones/add"),$async$F4)
case 3:s.i8(f)
v=!0
x=1
break
case 1:return B.m(v,w)}})
return B.n($async$F4,w)},
Je(d,e){return this.aPO(d,e)},
aPO(d,e){var x=0,w=B.o(y.e),v,u=this,t,s
var $async$Je=B.p(function(f,g){if(f===1)return B.l(g,w)
for(;;)switch(x){case 0:t=y.b
t=B.B(t,t)
t.n(0,"zone_id",e)
t.O(0,d)
s=B
x=3
return B.e(u.a.GD$.d5(t,"/zones/update"),$async$Je)
case 3:s.i8(g)
v=!0
x=1
break
case 1:return B.m(v,w)}})
return B.n($async$Je,w)},
G4(d){return this.aH8(d)},
aH8(d){var x=0,w=B.o(y.e),v,u=this,t,s
var $async$G4=B.p(function(e,f){if(e===1)return B.l(f,w)
for(;;)switch(x){case 0:t=y.b
s=B
x=3
return B.e(u.a.GD$.d5(B.ae(["zone_id",d],t,t),"/zones/delete"),$async$G4)
case 3:s.i8(f)
v=!0
x=1
break
case 1:return B.m(v,w)}})
return B.n($async$G4,w)}}
A.aZ_.prototype={}
A.aZ0.prototype={
pd(){var x=0,w=B.o(y.c),v,u=this,t,s,r,q
var $async$pd=B.p(function(d,e){if(d===1)return B.l(e,w)
for(;;)switch(x){case 0:s=y.d
r=J
q=B
x=3
return B.e(u.a.GD$.ff(0,"/zones/get-all",B.B(y.w,y.b)),$async$pd)
case 3:t=s.a(r.b4(q.dE(e),"zones"))
if(t==null)t=[]
t=J.f2(t,y.B)
t=B.du(t,new A.aZ1(),t.$ti.h("y.E"),y.x)
t=B.X(t,B.r(t).h("y.E"))
v=t
x=1
break
case 1:return B.m(v,w)}})
return B.n($async$pd,w)}}
A.aZ2.prototype={}
A.aoq.prototype={}
A.aor.prototype={}
A.ix.prototype={
p6(){var x,w=this,v=B.B(y.w,y.b)
v.n(0,"name",w.c)
v.n(0,"center_lat",w.d)
v.n(0,"center_lng",w.e)
v.n(0,"radius_m",w.f)
x=w.r
if(x!=null)v.n(0,"geometry_json",x)
x=w.w
if(x!=null)v.n(0,"address",x)
return v},
dZ(){var x,w=this,v=B.iL(w.p6(),y.w,y.b)
v.n(0,"id",w.a)
v.n(0,"school_id",w.b)
x=w.x
if(x!=null)v.n(0,"created_at",x.mA())
return v}}
var z=a.updateTypes([])
A.aZ1.prototype={
$1(d){var x,w,v,u,t,s,r,q=null,p=B.dt(d,y.w,y.b),o=p.i(0,"id")
o=o==null?q:J.af(o)
if(o==null)o=""
x=p.i(0,"school_id")
x=x==null?q:J.af(x)
if(x==null)x=""
w=p.i(0,"name")
w=w==null?q:J.af(w)
if(w==null)w=""
v=A.ar1(p.i(0,"center_lat"))
if(v==null)v=0
u=A.ar1(p.i(0,"center_lng"))
if(u==null)u=0
t=A.ar1(p.i(0,"radius_m"))
if(t==null)t=0
s=p.i(0,"geometry_json")
s=s==null?q:J.af(s)
r=p.i(0,"address")
r=r==null?q:J.af(r)
return new A.ix(o,x,w,v,u,t,s,r,B.f0(p.i(0,"created_at")))},
$S:730};(function inheritance(){var x=a.mixin,w=a.inheritMany,v=a.inherit
w(B.D,[A.aZa,A.aZb,A.aZc,A.aZd,A.aZe,A.aos,A.aYX,A.aYY,A.aZ_,A.aZ0,A.aoq,A.ix])
v(A.aot,A.aos)
v(A.aou,A.aot)
v(A.aov,A.aou)
v(A.aow,A.aov)
v(A.aZ9,A.aow)
v(A.aZ1,B.bM)
v(A.aor,A.aoq)
v(A.aZ2,A.aor)
x(A.aos,A.aZa)
x(A.aot,A.aZe)
x(A.aou,A.aZb)
x(A.aov,A.aZc)
x(A.aow,A.aZd)
x(A.aoq,A.aZ_)
x(A.aor,A.aYX)})()
var y={c:B.A("t<ix>"),B:B.A("a6<@,@>"),w:B.A("d"),x:B.A("ix"),e:B.A("x"),b:B.A("@"),d:B.A("t<@>?")};(function lazyInitializers(){var x=a.lazyFinal
x($,"bYH","Hv",()=>new A.aZ2(new A.aYY(A.bu7()),new A.aZ0(A.bu7())))})()};
(a=>{a["J9WBmSR1/UzJOsP3liCNQb610yA="]=a.current})($__dart_deferred_initializers__);