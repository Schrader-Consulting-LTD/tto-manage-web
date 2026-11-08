((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,A={
bBR(){var x=$.lA()
return new A.b42(x,x,x,x,x)},
b43:function b43(){},
b44:function b44(){},
b45:function b45(){},
b46:function b46(){},
b47:function b47(){},
b42:function b42(d,e,f,g,h){var _=this
_.Hp$=d
_.aTu$=e
_.aTv$=f
_.aTw$=g
_.aTx$=h},
arq:function arq(){},
arr:function arr(){},
ars:function ars(){},
art:function art(){},
aru:function aru(){},
b3Q:function b3Q(){},
b3R:function b3R(d){this.a=d},
b3T:function b3T(){},
b3U:function b3U(d){this.a=d},
b3V:function b3V(){},
b3W:function b3W(d,e){this.AZ$=d
this.tS$=e},
aro:function aro(){},
arp:function arp(){},
hJ:function hJ(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
auq(d){if(d==null)return null
if(typeof d=="number")return d
if(B.mm(d))return d
return B.t8(J.aj(d))}}
J=c[1]
B=c[0]
A=a.updateHolder(c[80],A)
A.b43.prototype={}
A.b44.prototype={}
A.b45.prototype={}
A.b46.prototype={}
A.b47.prototype={}
A.b42.prototype={}
A.arq.prototype={}
A.arr.prototype={}
A.ars.prototype={}
A.art.prototype={}
A.aru.prototype={}
A.b3Q.prototype={}
A.b3R.prototype={
zU(d){return this.aF0(d)},
aF0(d){var x=0,w=B.n(y.e),v,u=this,t,s
var $async$zU=B.o(function(e,f){if(e===1)return B.k(f,w)
for(;;)switch(x){case 0:t=y.b
t=B.j8(d.pf(),t,t)
s=B
x=3
return B.e(u.a.Hp$.cM(t,"/zones/add"),$async$zU)
case 3:s.iD(f)
v=!0
x=1
break
case 1:return B.l(v,w)}})
return B.m($async$zU,w)},
Cs(d,e){return this.aRI(d,e)},
aRI(d,e){var x=0,w=B.n(y.e),v,u=this,t,s
var $async$Cs=B.o(function(f,g){if(f===1)return B.k(g,w)
for(;;)switch(x){case 0:t=y.b
t=B.D(t,t)
t.n(0,"zone_id",e)
t.K(0,d)
s=B
x=3
return B.e(u.a.Hp$.cM(t,"/zones/update"),$async$Cs)
case 3:s.iD(g)
v=!0
x=1
break
case 1:return B.l(v,w)}})
return B.m($async$Cs,w)},
GU(d){return this.aIS(d)},
aIS(d){var x=0,w=B.n(y.e),v,u=this,t,s
var $async$GU=B.o(function(e,f){if(e===1)return B.k(f,w)
for(;;)switch(x){case 0:t=y.b
s=B
x=3
return B.e(u.a.Hp$.cM(B.ak(["zone_id",d],t,t),"/zones/delete"),$async$GU)
case 3:s.iD(f)
v=!0
x=1
break
case 1:return B.l(v,w)}})
return B.m($async$GU,w)}}
A.b3T.prototype={}
A.b3U.prototype={
mN(){var x=0,w=B.n(y.c),v,u=this,t,s,r,q
var $async$mN=B.o(function(d,e){if(d===1)return B.k(e,w)
for(;;)switch(x){case 0:s=y.d
r=J
q=B
x=3
return B.e(u.a.Hp$.eZ(0,"/zones/get-all",B.D(y.w,y.b)),$async$mN)
case 3:t=s.a(r.b2(q.d6(e),"zones"))
if(t==null)t=[]
t=J.eG(t,y.B)
t=B.dw(t,new A.b3V(),t.$ti.h("z.E"),y.x)
t=B.U(t,B.v(t).h("z.E"))
v=t
x=1
break
case 1:return B.l(v,w)}})
return B.m($async$mN,w)}}
A.b3W.prototype={}
A.aro.prototype={}
A.arp.prototype={}
A.hJ.prototype={
pf(){var x,w=this,v=B.D(y.w,y.b)
v.n(0,"name",w.c)
v.n(0,"center_lat",w.d)
v.n(0,"center_lng",w.e)
v.n(0,"radius_m",w.f)
x=w.r
if(x!=null)v.n(0,"geometry_json",x)
x=w.w
if(x!=null)v.n(0,"address",x)
return v},
dJ(){var x,w=this,v=B.j8(w.pf(),y.w,y.b)
v.n(0,"id",w.a)
v.n(0,"school_id",w.b)
x=w.x
if(x!=null)v.n(0,"created_at",x.mK())
return v}}
var z=a.updateTypes([])
A.b3V.prototype={
$1(d){var x,w,v,u,t,s,r,q=null,p=B.da(d,y.w,y.b),o=p.i(0,"id")
o=o==null?q:J.aj(o)
if(o==null)o=""
x=p.i(0,"school_id")
x=x==null?q:J.aj(x)
if(x==null)x=""
w=p.i(0,"name")
w=w==null?q:J.aj(w)
if(w==null)w=""
v=A.auq(p.i(0,"center_lat"))
if(v==null)v=0
u=A.auq(p.i(0,"center_lng"))
if(u==null)u=0
t=A.auq(p.i(0,"radius_m"))
if(t==null)t=0
s=p.i(0,"geometry_json")
s=s==null?q:J.aj(s)
r=p.i(0,"address")
r=r==null?q:J.aj(r)
return new A.hJ(o,x,w,v,u,t,s,r,B.f9(p.i(0,"created_at")))},
$S:745};(function inheritance(){var x=a.mixin,w=a.inheritMany,v=a.inherit
w(B.E,[A.b43,A.b44,A.b45,A.b46,A.b47,A.arq,A.b3Q,A.b3R,A.b3T,A.b3U,A.aro,A.hJ])
v(A.arr,A.arq)
v(A.ars,A.arr)
v(A.art,A.ars)
v(A.aru,A.art)
v(A.b42,A.aru)
v(A.b3V,B.bN)
v(A.arp,A.aro)
v(A.b3W,A.arp)
x(A.arq,A.b43)
x(A.arr,A.b47)
x(A.ars,A.b44)
x(A.art,A.b45)
x(A.aru,A.b46)
x(A.aro,A.b3T)
x(A.arp,A.b3Q)})()
var y={c:B.y("q<hJ>"),B:B.y("a9<@,@>"),w:B.y("f"),x:B.y("hJ"),e:B.y("x"),b:B.y("@"),d:B.y("q<@>?")};(function lazyInitializers(){var x=a.lazyFinal
x($,"c6L","ug",()=>new A.b3W(new A.b3R(A.bBR()),new A.b3U(A.bBR())))})()};
(a=>{a["TGlE9VisQSXjbZ434+u/mpDgo7k="]=a.current})($__dart_deferred_initializers__);