((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,C,A={
btc(){var x=$.l4()
return new A.aUH(x,x,x)},
aUI:function aUI(){},
aUJ:function aUJ(){},
aUK:function aUK(){},
aUH:function aUH(d,e,f){this.Qw$=d
this.aRv$=e
this.aRw$=f},
am2:function am2(){},
am3:function am3(){},
am4:function am4(){},
aUv:function aUv(){},
aUw:function aUw(d){this.a=d},
aUx:function aUx(){},
aUL:function aUL(){},
b8I:function b8I(d){this.a=d},
aUy:function aUy(d,e){this.a6z$=d
this.ql$=e},
am0:function am0(){},
am1:function am1(){},
bJB(d){var x,w,v,u="group_class_ids",t=B.EE(d),s=d.i(0,"home_class_id")
s=s==null?null:J.af(s)
x=d.i(0,"home_class_name")
x=x==null?null:J.af(x)
w=y.i
if(w.b(d.i(0,u))){w=J.dx(w.a(d.i(0,u)),new A.aUs())
v=w.$ti.h("f8<1,d>")
w=B.X(new B.f8(w,new A.aUt(),v),v.h("y.E"))}else w=C.bs
return new A.df(t,s,x,w)},
df:function df(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aUs:function aUs(){},
aUt:function aUt(){},
bJA(d){var x,w,v=J.aA(d),u=v.i(d,"student_id")
if(u!=null)J.af(u)
u=B.fs(v.i(d,"strike_count"))
if(u==null)u=0
x=B.f0(v.i(d,"tamper_locked_at"))
w=y.i
if(w.b(v.i(d,"strikes"))){v=J.f2(w.a(v.i(d,"strikes")),y.B)
v=B.du(v,new A.aUp(),v.$ti.h("y.E"),y.n)
v=B.X(v,B.r(v).h("y.E"))}else v=D.a8H
return new A.o_(u,x,v)},
zz:function zz(d,e,f){this.c=d
this.d=e
this.e=f},
o_:function o_(d,e,f){this.b=d
this.c=e
this.d=f},
aUp:function aUp(){}},D
J=c[1]
B=c[0]
C=c[2]
A=a.updateHolder(c[80],A)
D=c[170]
A.aUI.prototype={}
A.aUJ.prototype={}
A.aUK.prototype={}
A.aUH.prototype={}
A.am2.prototype={}
A.am3.prototype={}
A.am4.prototype={}
A.aUv.prototype={}
A.aUw.prototype={
lN(d){return this.abF(d)},
abF(d){var x=0,w=B.o(y.D),v,u=this,t,s,r,q
var $async$lN=B.p(function(e,f){if(e===1)return B.l(f,w)
for(;;)switch(x){case 0:s=y.d
r=J
q=B
x=3
return B.e(u.a.Qw$.ff(0,"/students/get-all",B.B(y.w,y.b)),$async$lN)
case 3:t=s.a(r.b4(q.dE(f),"students"))
if(t==null)t=[]
t=J.f2(t,y.B)
t=B.du(t,new A.aUx(),t.$ti.h("y.E"),y.s)
t=B.X(t,B.r(t).h("y.E"))
v=t
x=1
break
case 1:return B.m(v,w)}})
return B.n($async$lN,w)}}
A.aUL.prototype={}
A.b8I.prototype={
xm(d){return this.ac4(d)},
ac4(d){var x=0,w=B.o(y.r),v,u=this,t,s,r
var $async$xm=B.p(function(e,f){if(e===1)return B.l(f,w)
for(;;)switch(x){case 0:t=B.B(y.w,y.b)
t.n(0,"student_id",d)
s=A
r=B
x=3
return B.e(u.a.Qw$.ff(0,"/students/get-strikes",t),$async$xm)
case 3:v=s.bJA(r.dE(f))
x=1
break
case 1:return B.m(v,w)}})
return B.n($async$xm,w)},
IM(d){return this.aOR(d)},
aOR(d){var x=0,w=B.o(y.r),v,u=this,t
var $async$IM=B.p(function(e,f){if(e===1)return B.l(f,w)
for(;;)switch(x){case 0:t=y.b
t=B.B(t,t)
t.n(0,"student_id",d)
x=3
return B.e(u.a.Qw$.d5(t,"/students/reset-strikes"),$async$IM)
case 3:v=u.xm(d)
x=1
break
case 1:return B.m(v,w)}})
return B.n($async$IM,w)}}
A.aUy.prototype={}
A.am0.prototype={}
A.am1.prototype={}
A.df.prototype={
dZ(){var x=this,w=B.iL(x.a.dZ(),y.w,y.b)
w.n(0,"home_class_id",x.b)
w.n(0,"home_class_name",x.c)
w.n(0,"group_class_ids",x.d)
return w}}
A.zz.prototype={}
A.o_.prototype={}
var z=a.updateTypes(["zz(a6<@,@>)"])
A.aUx.prototype={
$1(d){return A.bJB(B.dt(d,y.w,y.b))},
$S:729}
A.aUs.prototype={
$1(d){return d!=null},
$S:91}
A.aUt.prototype={
$1(d){return J.af(d)},
$S:70}
A.aUp.prototype={
$1(d){var x,w,v=y.w,u=B.dt(d,v,y.b),t=u.i(0,"id")
if(t!=null)J.af(t)
t=u.i(0,"device_id")
if(t!=null)J.af(t)
t=B.f0(u.i(0,"at"))
x=B.fs(u.i(0,"strike_no"))
if(x==null)x=1
w=y.i
if(w.b(u.i(0,"flags"))){v=J.f2(w.a(u.i(0,"flags")),v)
v=B.X(v,v.$ti.h("y.E"))}else v=C.bs
w=u.i(0,"trigger")
if(w!=null)J.af(w)
w=u.i(0,"day_key")
if(w!=null)J.af(w)
u=u.i(0,"source")
if(u!=null)J.af(u)
return new A.zz(t,x,v)},
$S:z+0};(function inheritance(){var x=a.mixin,w=a.inheritMany,v=a.inherit
w(B.D,[A.aUI,A.aUJ,A.aUK,A.am2,A.aUv,A.aUw,A.aUL,A.b8I,A.am0,A.df,A.zz,A.o_])
v(A.am3,A.am2)
v(A.am4,A.am3)
v(A.aUH,A.am4)
w(B.bM,[A.aUx,A.aUs,A.aUt,A.aUp])
v(A.am1,A.am0)
v(A.aUy,A.am1)
x(A.am2,A.aUI)
x(A.am3,A.aUJ)
x(A.am4,A.aUK)
x(A.am0,A.aUv)
x(A.am1,A.aUL)})()
var y={D:B.A("t<df>"),i:B.A("t<@>"),B:B.A("a6<@,@>"),w:B.A("d"),r:B.A("o_"),s:B.A("df"),n:B.A("zz"),b:B.A("@"),d:B.A("t<@>?")};(function constants(){var x=a.makeConstList
D.a8H=x([],B.A("k<zz>"))})();(function lazyInitializers(){var x=a.lazyFinal
x($,"bY2","q7",()=>new A.aUy(new A.b8I(A.btc()),new A.aUw(A.btc())))})()};
(a=>{a["QmD1Mv009hz+Aaqcb18bSoVPp6M="]=a.current})($__dart_deferred_initializers__);