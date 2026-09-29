((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,A={
buW(){var x=$.l6()
return new A.aZL(x,x,x,x,x)},
aZM:function aZM(){},
aZN:function aZN(){},
aZO:function aZO(){},
aZP:function aZP(){},
aZQ:function aZQ(){},
aZL:function aZL(d,e,f,g,h){var _=this
_.GK$=d
_.aRL$=e
_.aRM$=f
_.aRN$=g
_.aRO$=h},
aoK:function aoK(){},
aoL:function aoL(){},
aoM:function aoM(){},
aoN:function aoN(){},
aoO:function aoO(){},
aZy:function aZy(){},
aZz:function aZz(d){this.a=d},
aZB:function aZB(){},
aZC:function aZC(d){this.a=d},
aZD:function aZD(){},
aZE:function aZE(d,e){this.QF$=d
this.An$=e},
aoI:function aoI(){},
aoJ:function aoJ(){},
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
arl(d){if(d==null)return null
if(typeof d=="number")return d
if(B.lQ(d))return d
return B.rv(J.af(d))}}
J=c[1]
B=c[0]
A=a.updateHolder(c[56],A)
A.aZM.prototype={}
A.aZN.prototype={}
A.aZO.prototype={}
A.aZP.prototype={}
A.aZQ.prototype={}
A.aZL.prototype={}
A.aoK.prototype={}
A.aoL.prototype={}
A.aoM.prototype={}
A.aoN.prototype={}
A.aoO.prototype={}
A.aZy.prototype={}
A.aZz.prototype={
Fb(d){return this.aDC(d)},
aDC(d){var x=0,w=B.n(y.e),v,u=this,t,s
var $async$Fb=B.o(function(e,f){if(e===1)return B.k(f,w)
for(;;)switch(x){case 0:t=y.b
t=B.iM(d.p7(),t,t)
s=B
x=3
return B.d(u.a.GK$.cQ(t,"/zones/add"),$async$Fb)
case 3:s.i8(f)
v=!0
x=1
break
case 1:return B.l(v,w)}})
return B.m($async$Fb,w)},
Jn(d,e){return this.aQ0(d,e)},
aQ0(d,e){var x=0,w=B.n(y.e),v,u=this,t,s
var $async$Jn=B.o(function(f,g){if(f===1)return B.k(g,w)
for(;;)switch(x){case 0:t=y.b
t=B.B(t,t)
t.n(0,"zone_id",e)
t.O(0,d)
s=B
x=3
return B.d(u.a.GK$.cQ(t,"/zones/update"),$async$Jn)
case 3:s.i8(g)
v=!0
x=1
break
case 1:return B.l(v,w)}})
return B.m($async$Jn,w)},
Gb(d){return this.aHk(d)},
aHk(d){var x=0,w=B.n(y.e),v,u=this,t,s
var $async$Gb=B.o(function(e,f){if(e===1)return B.k(f,w)
for(;;)switch(x){case 0:t=y.b
s=B
x=3
return B.d(u.a.GK$.cQ(B.ae(["zone_id",d],t,t),"/zones/delete"),$async$Gb)
case 3:s.i8(f)
v=!0
x=1
break
case 1:return B.l(v,w)}})
return B.m($async$Gb,w)}}
A.aZB.prototype={}
A.aZC.prototype={
pe(){var x=0,w=B.n(y.c),v,u=this,t,s,r,q
var $async$pe=B.o(function(d,e){if(d===1)return B.k(e,w)
for(;;)switch(x){case 0:s=y.d
r=J
q=B
x=3
return B.d(u.a.GK$.eU(0,"/zones/get-all",B.B(y.w,y.b)),$async$pe)
case 3:t=s.a(r.b3(q.db(e),"zones"))
if(t==null)t=[]
t=J.eR(t,y.B)
t=B.dx(t,new A.aZD(),t.$ti.i("A.E"),y.x)
t=B.X(t,B.t(t).i("A.E"))
v=t
x=1
break
case 1:return B.l(v,w)}})
return B.m($async$pe,w)}}
A.aZE.prototype={}
A.aoI.prototype={}
A.aoJ.prototype={}
A.ix.prototype={
p7(){var x,w=this,v=B.B(y.w,y.b)
v.n(0,"name",w.c)
v.n(0,"center_lat",w.d)
v.n(0,"center_lng",w.e)
v.n(0,"radius_m",w.f)
x=w.r
if(x!=null)v.n(0,"geometry_json",x)
x=w.w
if(x!=null)v.n(0,"address",x)
return v},
dZ(){var x,w=this,v=B.iM(w.p7(),y.w,y.b)
v.n(0,"id",w.a)
v.n(0,"school_id",w.b)
x=w.x
if(x!=null)v.n(0,"created_at",x.mA())
return v}}
var z=a.updateTypes([])
A.aZD.prototype={
$1(d){var x,w,v,u,t,s,r,q=null,p=B.di(d,y.w,y.b),o=p.h(0,"id")
o=o==null?q:J.af(o)
if(o==null)o=""
x=p.h(0,"school_id")
x=x==null?q:J.af(x)
if(x==null)x=""
w=p.h(0,"name")
w=w==null?q:J.af(w)
if(w==null)w=""
v=A.arl(p.h(0,"center_lat"))
if(v==null)v=0
u=A.arl(p.h(0,"center_lng"))
if(u==null)u=0
t=A.arl(p.h(0,"radius_m"))
if(t==null)t=0
s=p.h(0,"geometry_json")
s=s==null?q:J.af(s)
r=p.h(0,"address")
r=r==null?q:J.af(r)
return new A.ix(o,x,w,v,u,t,s,r,B.f3(p.h(0,"created_at")))},
$S:731};(function inheritance(){var x=a.mixin,w=a.inheritMany,v=a.inherit
w(B.D,[A.aZM,A.aZN,A.aZO,A.aZP,A.aZQ,A.aoK,A.aZy,A.aZz,A.aZB,A.aZC,A.aoI,A.ix])
v(A.aoL,A.aoK)
v(A.aoM,A.aoL)
v(A.aoN,A.aoM)
v(A.aoO,A.aoN)
v(A.aZL,A.aoO)
v(A.aZD,B.bG)
v(A.aoJ,A.aoI)
v(A.aZE,A.aoJ)
x(A.aoK,A.aZM)
x(A.aoL,A.aZQ)
x(A.aoM,A.aZN)
x(A.aoN,A.aZO)
x(A.aoO,A.aZP)
x(A.aoI,A.aZB)
x(A.aoJ,A.aZy)})()
var y={c:B.y("r<ix>"),B:B.y("a7<@,@>"),w:B.y("e"),x:B.y("ix"),e:B.y("x"),b:B.y("@"),d:B.y("r<@>?")};(function lazyInitializers(){var x=a.lazyFinal
x($,"bZv","HC",()=>new A.aZE(new A.aZz(A.buW()),new A.aZC(A.buW())))})()};
(a=>{a["w37N0Yib8QZmj5H/UXE5aoX68II="]=a.current})($__dart_deferred_initializers__);