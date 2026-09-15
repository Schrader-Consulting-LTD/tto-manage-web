((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,C,A={
brf(){var x=$.kU()
return new A.aTv(x,x,x)},
aTw:function aTw(){},
aTx:function aTx(){},
aTy:function aTy(){},
aTv:function aTv(d,e,f){this.Qz$=d
this.aRj$=e
this.aRk$=f},
al4:function al4(){},
al5:function al5(){},
al6:function al6(){},
aTj:function aTj(){},
aTk:function aTk(d){this.a=d},
aTl:function aTl(){},
aTz:function aTz(){},
b7O:function b7O(d){this.a=d},
aTm:function aTm(d,e){this.a6y$=d
this.wp$=e},
al2:function al2(){},
al3:function al3(){},
bH6(d){var x,w,v,u="group_class_ids",t=B.Ek(d),s=d.h(0,"home_class_id")
s=s==null?null:J.ac(s)
x=d.h(0,"home_class_name")
x=x==null?null:J.ac(x)
w=y.i
if(w.b(d.h(0,u))){w=J.et(w.a(d.h(0,u)),new A.aTg())
v=w.$ti.i("f4<1,d>")
w=B.X(new B.f4(w,new A.aTh(),v),v.i("x.E"))}else w=C.bg
return new A.dW(t,s,x,w)},
dW:function dW(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aTg:function aTg(){},
aTh:function aTh(){},
bH5(d){var x,w,v=J.ax(d),u=v.h(d,"student_id")
if(u!=null)J.ac(u)
u=B.hB(v.h(d,"strike_count"))
if(u==null)u=0
x=B.ef(v.h(d,"tamper_locked_at"))
w=y.i
if(w.b(v.h(d,"strikes"))){v=J.f0(w.a(v.h(d,"strikes")),y.B)
v=B.dw(v,new A.aTd(),v.$ti.i("x.E"),y.n)
v=B.X(v,B.m(v).i("x.E"))}else v=D.a8f
return new A.pk(u,x,v)},
zj:function zj(d,e,f){this.c=d
this.d=e
this.e=f},
pk:function pk(d,e,f){this.b=d
this.c=e
this.d=f},
aTd:function aTd(){}},D
J=c[1]
B=c[0]
C=c[2]
A=a.updateHolder(c[68],A)
D=c[143]
A.aTw.prototype={}
A.aTx.prototype={}
A.aTy.prototype={}
A.aTv.prototype={}
A.al4.prototype={}
A.al5.prototype={}
A.al6.prototype={}
A.aTj.prototype={}
A.aTk.prototype={
nP(d){return this.abE(d)},
abE(d){var x=0,w=B.t(y.D),v,u=this,t,s,r,q
var $async$nP=B.u(function(e,f){if(e===1)return B.p(f,w)
for(;;)switch(x){case 0:s=y.d
r=J
q=B
x=3
return B.i(u.a.Qz$.eK(0,"/students/get-all",B.B(y.w,y.b)),$async$nP)
case 3:t=s.a(r.b0(q.dA(f),"students"))
if(t==null)t=[]
t=J.f0(t,y.B)
t=B.dw(t,new A.aTl(),t.$ti.i("x.E"),y.s)
t=B.X(t,B.m(t).i("x.E"))
v=t
x=1
break
case 1:return B.q(v,w)}})
return B.r($async$nP,w)}}
A.aTz.prototype={}
A.b7O.prototype={
xk(d){return this.ac6(d)},
ac6(d){var x=0,w=B.t(y.r),v,u=this,t,s,r
var $async$xk=B.u(function(e,f){if(e===1)return B.p(f,w)
for(;;)switch(x){case 0:t=B.B(y.w,y.b)
t.m(0,"student_id",d)
s=A
r=B
x=3
return B.i(u.a.Qz$.eK(0,"/students/get-strikes",t),$async$xk)
case 3:v=s.bH5(r.dA(f))
x=1
break
case 1:return B.q(v,w)}})
return B.r($async$xk,w)},
IM(d){return this.aOH(d)},
aOH(d){var x=0,w=B.t(y.r),v,u=this,t
var $async$IM=B.u(function(e,f){if(e===1)return B.p(f,w)
for(;;)switch(x){case 0:t=y.b
t=B.B(t,t)
t.m(0,"student_id",d)
x=3
return B.i(u.a.Qz$.dk(t,"/students/reset-strikes"),$async$IM)
case 3:v=u.xk(d)
x=1
break
case 1:return B.q(v,w)}})
return B.r($async$IM,w)}}
A.aTm.prototype={}
A.al2.prototype={}
A.al3.prototype={}
A.dW.prototype={
e7(){var x=this,w=B.iE(x.a.e7(),y.w,y.b)
w.m(0,"home_class_id",x.b)
w.m(0,"home_class_name",x.c)
w.m(0,"group_class_ids",x.d)
return w}}
A.zj.prototype={}
A.pk.prototype={}
var z=a.updateTypes(["zj(a5<@,@>)"])
A.aTl.prototype={
$1(d){return A.bH6(B.dg(d,y.w,y.b))},
$S:727}
A.aTg.prototype={
$1(d){return d!=null},
$S:157}
A.aTh.prototype={
$1(d){return J.ac(d)},
$S:78}
A.aTd.prototype={
$1(d){var x,w,v=y.w,u=B.dg(d,v,y.b),t=u.h(0,"id")
if(t!=null)J.ac(t)
t=u.h(0,"device_id")
if(t!=null)J.ac(t)
t=B.ef(u.h(0,"at"))
x=B.hB(u.h(0,"strike_no"))
if(x==null)x=1
w=y.i
if(w.b(u.h(0,"flags"))){v=J.f0(w.a(u.h(0,"flags")),v)
v=B.X(v,v.$ti.i("x.E"))}else v=C.bg
w=u.h(0,"trigger")
if(w!=null)J.ac(w)
w=u.h(0,"day_key")
if(w!=null)J.ac(w)
u=u.h(0,"source")
if(u!=null)J.ac(u)
return new A.zj(t,x,v)},
$S:z+0};(function inheritance(){var x=a.mixin,w=a.inheritMany,v=a.inherit
w(B.C,[A.aTw,A.aTx,A.aTy,A.al4,A.aTj,A.aTk,A.aTz,A.b7O,A.al2,A.dW,A.zj,A.pk])
v(A.al5,A.al4)
v(A.al6,A.al5)
v(A.aTv,A.al6)
w(B.bY,[A.aTl,A.aTg,A.aTh,A.aTd])
v(A.al3,A.al2)
v(A.aTm,A.al3)
x(A.al4,A.aTw)
x(A.al5,A.aTx)
x(A.al6,A.aTy)
x(A.al2,A.aTj)
x(A.al3,A.aTz)})()
var y={D:B.D("w<dW>"),i:B.D("w<@>"),B:B.D("a5<@,@>"),w:B.D("d"),r:B.D("pk"),s:B.D("dW"),n:B.D("zj"),b:B.D("@"),d:B.D("w<@>?")};(function constants(){var x=a.makeConstList
D.a8f=x([],B.D("n<zj>"))})();(function lazyInitializers(){var x=a.lazyFinal
x($,"bVq","wf",()=>new A.aTm(new A.b7O(A.brf()),new A.aTk(A.brf())))})()};
(a=>{a["A6Yal/ZDQe/+scAPSEQyw/iW3r0="]=a.current})($__dart_deferred_initializers__);