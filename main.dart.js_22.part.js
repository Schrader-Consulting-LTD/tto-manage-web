((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,A={
bss(){var x=$.kV()
return new A.aYc(x,x,x,x,x)},
aYd:function aYd(){},
aYe:function aYe(){},
aYf:function aYf(){},
aYg:function aYg(){},
aYh:function aYh(){},
aYc:function aYc(d,e,f,g,h){var _=this
_.Gr$=d
_.aRa$=e
_.aRb$=f
_.aRc$=g
_.aRd$=h},
anu:function anu(){},
anv:function anv(){},
anw:function anw(){},
anx:function anx(){},
any:function any(){},
aXZ:function aXZ(){},
aY_:function aY_(d){this.a=d},
aY1:function aY1(){},
aY2:function aY2(d){this.a=d},
aY3:function aY3(){},
aY4:function aY4(d,e){this.Qm$=d
this.Ab$=e},
ans:function ans(){},
ant:function ant(){},
aY0:function aY0(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
iq:function iq(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
aqa(d){if(d==null)return null
if(typeof d=="number")return d
if(B.lF(d))return d
return B.rg(J.ai(d))}}
J=c[1]
B=c[0]
A=a.updateHolder(c[50],A)
A.aYd.prototype={}
A.aYe.prototype={}
A.aYf.prototype={}
A.aYg.prototype={}
A.aYh.prototype={}
A.aYc.prototype={}
A.anu.prototype={}
A.anv.prototype={}
A.anw.prototype={}
A.anx.prototype={}
A.any.prototype={}
A.aXZ.prototype={}
A.aY_.prototype={
EY(d){return this.aD7(d)},
aD7(d){var x=0,w=B.r(y.e),v,u=this,t,s
var $async$EY=B.t(function(e,f){if(e===1)return B.o(f,w)
for(;;)switch(x){case 0:t=y.b
t=B.iG(d.p0(),t,t)
s=B
x=3
return B.e(u.a.Gr$.dj(t,"/zones/add"),$async$EY)
case 3:s.ix(f)
v=!0
x=1
break
case 1:return B.p(v,w)}})
return B.q($async$EY,w)},
J5(d,e){return this.aPu(d,e)},
aPu(d,e){var x=0,w=B.r(y.e),v,u=this,t,s
var $async$J5=B.t(function(f,g){if(f===1)return B.o(g,w)
for(;;)switch(x){case 0:t=y.b
t=B.B(t,t)
t.n(0,"zone_id",e)
t.O(0,d)
s=B
x=3
return B.e(u.a.Gr$.dj(t,"/zones/update"),$async$J5)
case 3:s.ix(g)
v=!0
x=1
break
case 1:return B.p(v,w)}})
return B.q($async$J5,w)},
FV(d){return this.aGQ(d)},
aGQ(d){var x=0,w=B.r(y.e),v,u=this,t,s
var $async$FV=B.t(function(e,f){if(e===1)return B.o(f,w)
for(;;)switch(x){case 0:t=y.b
s=B
x=3
return B.e(u.a.Gr$.dj(B.ac(["zone_id",d],t,t),"/zones/delete"),$async$FV)
case 3:s.ix(f)
v=!0
x=1
break
case 1:return B.p(v,w)}})
return B.q($async$FV,w)}}
A.aY1.prototype={}
A.aY2.prototype={
pb(){var x=0,w=B.r(y.c),v,u=this,t,s,r,q
var $async$pb=B.t(function(d,e){if(d===1)return B.o(e,w)
for(;;)switch(x){case 0:s=y.d
r=J
q=B
x=3
return B.e(u.a.Gr$.ff(0,"/zones/get-all",B.B(y.w,y.b)),$async$pb)
case 3:t=s.a(r.b2(q.dT(e),"zones"))
if(t==null)t=[]
t=J.fq(t,y.B)
t=B.dB(t,new A.aY3(),t.$ti.h("x.E"),y.x)
t=B.X(t,B.m(t).h("x.E"))
v=t
x=1
break
case 1:return B.p(v,w)}})
return B.q($async$pb,w)}}
A.aY4.prototype={}
A.ans.prototype={}
A.ant.prototype={}
A.aY0.prototype={}
A.iq.prototype={
p0(){var x,w=this,v=B.B(y.w,y.b)
v.n(0,"name",w.c)
v.n(0,"center_lat",w.d)
v.n(0,"center_lng",w.e)
v.n(0,"radius_m",w.f)
x=w.r
if(x!=null)v.n(0,"geometry_json",x)
x=w.w
if(x!=null)v.n(0,"address",x)
return v},
e7(){var x,w=this,v=B.iG(w.p0(),y.w,y.b)
v.n(0,"id",w.a)
v.n(0,"school_id",w.b)
x=w.x
if(x!=null)v.n(0,"created_at",x.my())
return v}}
var z=a.updateTypes([])
A.aY3.prototype={
$1(d){var x,w,v,u,t,s,r,q=null,p=B.dt(d,y.w,y.b),o=p.i(0,"id")
o=o==null?q:J.ai(o)
if(o==null)o=""
x=p.i(0,"school_id")
x=x==null?q:J.ai(x)
if(x==null)x=""
w=p.i(0,"name")
w=w==null?q:J.ai(w)
if(w==null)w=""
v=A.aqa(p.i(0,"center_lat"))
if(v==null)v=0
u=A.aqa(p.i(0,"center_lng"))
if(u==null)u=0
t=A.aqa(p.i(0,"radius_m"))
if(t==null)t=0
s=p.i(0,"geometry_json")
s=s==null?q:J.ai(s)
r=p.i(0,"address")
r=r==null?q:J.ai(r)
return new A.iq(o,x,w,v,u,t,s,r,B.fo(p.i(0,"created_at")))},
$S:721};(function inheritance(){var x=a.mixin,w=a.inheritMany,v=a.inherit
w(B.D,[A.aYd,A.aYe,A.aYf,A.aYg,A.aYh,A.anu,A.aXZ,A.aY_,A.aY1,A.aY2,A.ans,A.aY0,A.iq])
v(A.anv,A.anu)
v(A.anw,A.anv)
v(A.anx,A.anw)
v(A.any,A.anx)
v(A.aYc,A.any)
v(A.aY3,B.bQ)
v(A.ant,A.ans)
v(A.aY4,A.ant)
x(A.anu,A.aYd)
x(A.anv,A.aYh)
x(A.anw,A.aYe)
x(A.anx,A.aYf)
x(A.any,A.aYg)
x(A.ans,A.aY1)
x(A.ant,A.aXZ)})()
var y={c:B.C("v<iq>"),B:B.C("a6<@,@>"),w:B.C("d"),x:B.C("iq"),e:B.C("y"),b:B.C("@"),d:B.C("v<@>?")};(function lazyInitializers(){var x=a.lazyFinal
x($,"bWA","H_",()=>new A.aY4(new A.aY_(A.bss()),new A.aY2(A.bss())))
x($,"bWz","GZ",()=>new A.aY0(B.c8(null,B.C("v<iq>?")),B.yF(),B.e6(null),B.c8("",y.w)))})()};
(a=>{a["H77RKF9cLyXyomQTs0FxebHEung="]=a.current})($__dart_deferred_initializers__);