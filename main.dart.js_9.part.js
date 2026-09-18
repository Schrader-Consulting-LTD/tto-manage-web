((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,C,A={
bry(){var x=$.kV()
return new A.aTC(x,x,x)},
aTD:function aTD(){},
aTE:function aTE(){},
aTF:function aTF(){},
aTC:function aTC(d,e,f){this.Ql$=d
this.aR8$=e
this.aR9$=f},
al5:function al5(){},
al6:function al6(){},
al7:function al7(){},
aTq:function aTq(){},
aTr:function aTr(d){this.a=d},
aTs:function aTs(){},
aTG:function aTG(){},
b7H:function b7H(d){this.a=d},
aTt:function aTt(d,e){this.a6k$=d
this.tF$=e},
al3:function al3(){},
al4:function al4(){},
bHD(d){var x,w,v,u="group_class_ids",t=B.Ej(d),s=d.i(0,"home_class_id")
s=s==null?null:J.ai(s)
x=d.i(0,"home_class_name")
x=x==null?null:J.ai(x)
w=y.i
if(w.b(d.i(0,u))){w=J.dZ(w.a(d.i(0,u)),new A.aTn())
v=w.$ti.h("f3<1,d>")
w=B.X(new B.f3(w,new A.aTo(),v),v.h("x.E"))}else w=C.bE
return new A.dK(t,s,x,w)},
dK:function dK(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aTn:function aTn(){},
aTo:function aTo(){},
bHC(d){var x,w,v=J.ax(d),u=v.i(d,"student_id")
if(u!=null)J.ai(u)
u=B.iy(v.i(d,"strike_count"))
if(u==null)u=0
x=B.fo(v.i(d,"tamper_locked_at"))
w=y.i
if(w.b(v.i(d,"strikes"))){v=J.fq(w.a(v.i(d,"strikes")),y.B)
v=B.dB(v,new A.aTk(),v.$ti.h("x.E"),y.n)
v=B.X(v,B.m(v).h("x.E"))}else v=D.a89
return new A.po(u,x,v)},
zl:function zl(d,e,f){this.c=d
this.d=e
this.e=f},
po:function po(d,e,f){this.b=d
this.c=e
this.d=f},
aTk:function aTk(){}},D
J=c[1]
B=c[0]
C=c[2]
A=a.updateHolder(c[75],A)
D=c[159]
A.aTD.prototype={}
A.aTE.prototype={}
A.aTF.prototype={}
A.aTC.prototype={}
A.al5.prototype={}
A.al6.prototype={}
A.al7.prototype={}
A.aTq.prototype={}
A.aTr.prototype={
mB(d){return this.abp(d)},
abp(d){var x=0,w=B.r(y.D),v,u=this,t,s,r,q
var $async$mB=B.t(function(e,f){if(e===1)return B.o(f,w)
for(;;)switch(x){case 0:s=y.d
r=J
q=B
x=3
return B.e(u.a.Ql$.ff(0,"/students/get-all",B.B(y.w,y.b)),$async$mB)
case 3:t=s.a(r.b2(q.dT(f),"students"))
if(t==null)t=[]
t=J.fq(t,y.B)
t=B.dB(t,new A.aTs(),t.$ti.h("x.E"),y.s)
t=B.X(t,B.m(t).h("x.E"))
v=t
x=1
break
case 1:return B.p(v,w)}})
return B.q($async$mB,w)}}
A.aTG.prototype={}
A.b7H.prototype={
xh(d){return this.abQ(d)},
abQ(d){var x=0,w=B.r(y.r),v,u=this,t,s,r
var $async$xh=B.t(function(e,f){if(e===1)return B.o(f,w)
for(;;)switch(x){case 0:t=B.B(y.w,y.b)
t.n(0,"student_id",d)
s=A
r=B
x=3
return B.e(u.a.Ql$.ff(0,"/students/get-strikes",t),$async$xh)
case 3:v=s.bHC(r.dT(f))
x=1
break
case 1:return B.p(v,w)}})
return B.q($async$xh,w)},
IC(d){return this.aOx(d)},
aOx(d){var x=0,w=B.r(y.r),v,u=this,t
var $async$IC=B.t(function(e,f){if(e===1)return B.o(f,w)
for(;;)switch(x){case 0:t=y.b
t=B.B(t,t)
t.n(0,"student_id",d)
x=3
return B.e(u.a.Ql$.dj(t,"/students/reset-strikes"),$async$IC)
case 3:v=u.xh(d)
x=1
break
case 1:return B.p(v,w)}})
return B.q($async$IC,w)}}
A.aTt.prototype={}
A.al3.prototype={}
A.al4.prototype={}
A.dK.prototype={
e7(){var x=this,w=B.iG(x.a.e7(),y.w,y.b)
w.n(0,"home_class_id",x.b)
w.n(0,"home_class_name",x.c)
w.n(0,"group_class_ids",x.d)
return w}}
A.zl.prototype={}
A.po.prototype={}
var z=a.updateTypes(["zl(a6<@,@>)"])
A.aTs.prototype={
$1(d){return A.bHD(B.dt(d,y.w,y.b))},
$S:720}
A.aTn.prototype={
$1(d){return d!=null},
$S:124}
A.aTo.prototype={
$1(d){return J.ai(d)},
$S:71}
A.aTk.prototype={
$1(d){var x,w,v=y.w,u=B.dt(d,v,y.b),t=u.i(0,"id")
if(t!=null)J.ai(t)
t=u.i(0,"device_id")
if(t!=null)J.ai(t)
t=B.fo(u.i(0,"at"))
x=B.iy(u.i(0,"strike_no"))
if(x==null)x=1
w=y.i
if(w.b(u.i(0,"flags"))){v=J.fq(w.a(u.i(0,"flags")),v)
v=B.X(v,v.$ti.h("x.E"))}else v=C.bE
w=u.i(0,"trigger")
if(w!=null)J.ai(w)
w=u.i(0,"day_key")
if(w!=null)J.ai(w)
u=u.i(0,"source")
if(u!=null)J.ai(u)
return new A.zl(t,x,v)},
$S:z+0};(function inheritance(){var x=a.mixin,w=a.inheritMany,v=a.inherit
w(B.D,[A.aTD,A.aTE,A.aTF,A.al5,A.aTq,A.aTr,A.aTG,A.b7H,A.al3,A.dK,A.zl,A.po])
v(A.al6,A.al5)
v(A.al7,A.al6)
v(A.aTC,A.al7)
w(B.bQ,[A.aTs,A.aTn,A.aTo,A.aTk])
v(A.al4,A.al3)
v(A.aTt,A.al4)
x(A.al5,A.aTD)
x(A.al6,A.aTE)
x(A.al7,A.aTF)
x(A.al3,A.aTq)
x(A.al4,A.aTG)})()
var y={D:B.C("v<dK>"),i:B.C("v<@>"),B:B.C("a6<@,@>"),w:B.C("d"),r:B.C("po"),s:B.C("dK"),n:B.C("zl"),b:B.C("@"),d:B.C("v<@>?")};(function constants(){var x=a.makeConstList
D.a89=x([],B.C("n<zl>"))})();(function lazyInitializers(){var x=a.lazyFinal
x($,"bVW","tm",()=>new A.aTt(new A.b7H(A.bry()),new A.aTr(A.bry())))})()};
(a=>{a["zzX9XS18VZjLac3gxTAmbKfZCTY="]=a.current})($__dart_deferred_initializers__);