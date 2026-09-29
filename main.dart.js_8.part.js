((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,C,A={
bu1(){var x=$.l6()
return new A.aVh(x,x,x)},
aVi:function aVi(){},
aVj:function aVj(){},
aVk:function aVk(){},
aVh:function aVh(d,e,f){this.QE$=d
this.aRJ$=e
this.aRK$=f},
amk:function amk(){},
aml:function aml(){},
amm:function amm(){},
aV5:function aV5(){},
aV6:function aV6(d){this.a=d},
aV7:function aV7(){},
aVl:function aVl(){},
b9j:function b9j(d){this.a=d},
aV8:function aV8(d,e){this.a6I$=d
this.qn$=e},
ami:function ami(){},
amj:function amj(){},
bKm(d){var x,w,v,u="group_class_ids",t=B.vz(d),s=d.h(0,"home_class_id")
s=s==null?null:J.af(s)
x=d.h(0,"home_class_name")
x=x==null?null:J.af(x)
w=y.i
if(w.b(d.h(0,u))){w=J.du(w.a(d.h(0,u)),new A.aV2())
v=w.$ti.i("f8<1,e>")
w=B.X(new B.f8(w,new A.aV3(),v),v.i("A.E"))}else w=C.bu
return new A.dl(t,s,x,w)},
dl:function dl(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aV2:function aV2(){},
aV3:function aV3(){},
bKl(d){var x,w,v=J.aA(d),u=v.h(d,"student_id")
if(u!=null)J.af(u)
u=B.fu(v.h(d,"strike_count"))
if(u==null)u=0
x=B.f3(v.h(d,"tamper_locked_at"))
w=y.i
if(w.b(v.h(d,"strikes"))){v=J.eR(w.a(v.h(d,"strikes")),y.B)
v=B.dx(v,new A.aV_(),v.$ti.i("A.E"),y.n)
v=B.X(v,B.t(v).i("A.E"))}else v=D.a8Y
return new A.o4(u,x,v)},
zJ:function zJ(d,e,f){this.c=d
this.d=e
this.e=f},
o4:function o4(d,e,f){this.b=d
this.c=e
this.d=f},
aV_:function aV_(){}},D
J=c[1]
B=c[0]
C=c[2]
A=a.updateHolder(c[81],A)
D=c[180]
A.aVi.prototype={}
A.aVj.prototype={}
A.aVk.prototype={}
A.aVh.prototype={}
A.amk.prototype={}
A.aml.prototype={}
A.amm.prototype={}
A.aV5.prototype={}
A.aV6.prototype={
lO(d){return this.abP(d)},
abP(d){var x=0,w=B.n(y.D),v,u=this,t,s,r,q
var $async$lO=B.o(function(e,f){if(e===1)return B.k(f,w)
for(;;)switch(x){case 0:s=y.d
r=J
q=B
x=3
return B.d(u.a.QE$.eU(0,"/students/get-all",B.B(y.w,y.b)),$async$lO)
case 3:t=s.a(r.b3(q.db(f),"students"))
if(t==null)t=[]
t=J.eR(t,y.B)
t=B.dx(t,new A.aV7(),t.$ti.i("A.E"),y.s)
t=B.X(t,B.t(t).i("A.E"))
v=t
x=1
break
case 1:return B.l(v,w)}})
return B.m($async$lO,w)}}
A.aVl.prototype={}
A.b9j.prototype={
xs(d){return this.ace(d)},
ace(d){var x=0,w=B.n(y.r),v,u=this,t,s,r
var $async$xs=B.o(function(e,f){if(e===1)return B.k(f,w)
for(;;)switch(x){case 0:t=B.B(y.w,y.b)
t.n(0,"student_id",d)
s=A
r=B
x=3
return B.d(u.a.QE$.eU(0,"/students/get-strikes",t),$async$xs)
case 3:v=s.bKl(r.db(f))
x=1
break
case 1:return B.l(v,w)}})
return B.m($async$xs,w)},
IU(d){return this.aP2(d)},
aP2(d){var x=0,w=B.n(y.r),v,u=this,t
var $async$IU=B.o(function(e,f){if(e===1)return B.k(f,w)
for(;;)switch(x){case 0:t=y.b
t=B.B(t,t)
t.n(0,"student_id",d)
x=3
return B.d(u.a.QE$.cQ(t,"/students/reset-strikes"),$async$IU)
case 3:v=u.xs(d)
x=1
break
case 1:return B.l(v,w)}})
return B.m($async$IU,w)}}
A.aV8.prototype={}
A.ami.prototype={}
A.amj.prototype={}
A.dl.prototype={
dZ(){var x=this,w=B.iM(x.a.dZ(),y.w,y.b)
w.n(0,"home_class_id",x.b)
w.n(0,"home_class_name",x.c)
w.n(0,"group_class_ids",x.d)
return w}}
A.zJ.prototype={}
A.o4.prototype={}
var z=a.updateTypes(["zJ(a7<@,@>)"])
A.aV7.prototype={
$1(d){return A.bKm(B.di(d,y.w,y.b))},
$S:730}
A.aV2.prototype={
$1(d){return d!=null},
$S:103}
A.aV3.prototype={
$1(d){return J.af(d)},
$S:72}
A.aV_.prototype={
$1(d){var x,w,v=y.w,u=B.di(d,v,y.b),t=u.h(0,"id")
if(t!=null)J.af(t)
t=u.h(0,"device_id")
if(t!=null)J.af(t)
t=B.f3(u.h(0,"at"))
x=B.fu(u.h(0,"strike_no"))
if(x==null)x=1
w=y.i
if(w.b(u.h(0,"flags"))){v=J.eR(w.a(u.h(0,"flags")),v)
v=B.X(v,v.$ti.i("A.E"))}else v=C.bu
w=u.h(0,"trigger")
if(w!=null)J.af(w)
w=u.h(0,"day_key")
if(w!=null)J.af(w)
u=u.h(0,"source")
if(u!=null)J.af(u)
return new A.zJ(t,x,v)},
$S:z+0};(function inheritance(){var x=a.mixin,w=a.inheritMany,v=a.inherit
w(B.D,[A.aVi,A.aVj,A.aVk,A.amk,A.aV5,A.aV6,A.aVl,A.b9j,A.ami,A.dl,A.zJ,A.o4])
v(A.aml,A.amk)
v(A.amm,A.aml)
v(A.aVh,A.amm)
w(B.bG,[A.aV7,A.aV2,A.aV3,A.aV_])
v(A.amj,A.ami)
v(A.aV8,A.amj)
x(A.amk,A.aVi)
x(A.aml,A.aVj)
x(A.amm,A.aVk)
x(A.ami,A.aV5)
x(A.amj,A.aVl)})()
var y={D:B.y("r<dl>"),i:B.y("r<@>"),B:B.y("a7<@,@>"),w:B.y("e"),r:B.y("o4"),s:B.y("dl"),n:B.y("zJ"),b:B.y("@"),d:B.y("r<@>?")};(function constants(){var x=a.makeConstList
D.a8Y=x([],B.y("p<zJ>"))})();(function lazyInitializers(){var x=a.lazyFinal
x($,"bYR","qa",()=>new A.aV8(new A.b9j(A.bu1()),new A.aV6(A.bu1())))})()};
(a=>{a["uSha0PhJwh31YKRIRbCcnO66rYc="]=a.current})($__dart_deferred_initializers__);