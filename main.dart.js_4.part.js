((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,C,A={
bAX(){var x=$.lA()
return new A.b_i(x,x,x)},
b_j:function b_j(){},
b_k:function b_k(){},
b_l:function b_l(){},
b_i:function b_i(d,e,f){this.Rj$=d
this.aTs$=e
this.aTt$=f},
ap0:function ap0(){},
ap1:function ap1(){},
ap2:function ap2(){},
b_a:function b_a(){},
b_b:function b_b(d){this.a=d},
b_c:function b_c(){},
b_q:function b_q(){},
beT:function beT(d){this.a=d},
b_d:function b_d(d,e){this.a7s$=d
this.mm$=e},
aoZ:function aoZ(){},
ap_:function ap_(){},
bRU(d){var x,w,v,u="group_class_ids",t=B.we(d),s=d.i(0,"home_class_id")
s=s==null?null:J.aj(s)
x=d.i(0,"home_class_name")
x=x==null?null:J.aj(x)
w=y.i
if(w.b(d.i(0,u))){w=J.cG(w.a(d.i(0,u)),new A.b_7())
v=w.$ti.h("fq<1,f>")
w=B.U(new B.fq(w,new A.b_8(),v),v.h("z.E"))}else w=C.aV
return new A.cC(t,s,x,w)},
cC:function cC(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
b_7:function b_7(){},
b_8:function b_8(){},
bRT(d){var x,w,v=J.az(d),u=v.i(d,"student_id")
if(u!=null)J.aj(u)
u=B.fM(v.i(d,"strike_count"))
if(u==null)u=0
x=B.f9(v.i(d,"tamper_locked_at"))
w=y.i
if(w.b(v.i(d,"strikes"))){v=J.eG(w.a(v.i(d,"strikes")),y.B)
v=B.dw(v,new A.b_4(),v.$ti.h("z.E"),y.n)
v=B.U(v,B.v(v).h("z.E"))}else v=D.aap
return new A.oB(u,x,v)},
Am:function Am(d,e,f){this.c=d
this.d=e
this.e=f},
oB:function oB(d,e,f){this.b=d
this.c=e
this.d=f},
b_4:function b_4(){}},D
J=c[1]
B=c[0]
C=c[2]
A=a.updateHolder(c[96],A)
D=c[211]
A.b_j.prototype={}
A.b_k.prototype={}
A.b_l.prototype={}
A.b_i.prototype={}
A.ap0.prototype={}
A.ap1.prototype={}
A.ap2.prototype={}
A.b_a.prototype={}
A.b_b.prototype={
jM(d){return this.acF(d)},
acF(d){var x=0,w=B.n(y.D),v,u=this,t,s,r,q
var $async$jM=B.o(function(e,f){if(e===1)return B.k(f,w)
for(;;)switch(x){case 0:s=y.d
r=J
q=B
x=3
return B.e(u.a.Rj$.eZ(0,"/students/get-all",B.D(y.w,y.b)),$async$jM)
case 3:t=s.a(r.b2(q.d6(f),"students"))
if(t==null)t=[]
t=J.eG(t,y.B)
t=B.dw(t,new A.b_c(),t.$ti.h("z.E"),y.s)
t=B.U(t,B.v(t).h("z.E"))
v=t
x=1
break
case 1:return B.l(v,w)}})
return B.m($async$jM,w)}}
A.b_q.prototype={}
A.beT.prototype={
xZ(d){return this.ad5(d)},
ad5(d){var x=0,w=B.n(y.r),v,u=this,t,s,r
var $async$xZ=B.o(function(e,f){if(e===1)return B.k(f,w)
for(;;)switch(x){case 0:t=B.D(y.w,y.b)
t.n(0,"student_id",d)
s=A
r=B
x=3
return B.e(u.a.Rj$.eZ(0,"/students/get-strikes",t),$async$xZ)
case 3:v=s.bRT(r.d6(f))
x=1
break
case 1:return B.l(v,w)}})
return B.m($async$xZ,w)},
Jw(d){return this.aQL(d)},
aQL(d){var x=0,w=B.n(y.r),v,u=this,t
var $async$Jw=B.o(function(e,f){if(e===1)return B.k(f,w)
for(;;)switch(x){case 0:t=y.b
t=B.D(t,t)
t.n(0,"student_id",d)
x=3
return B.e(u.a.Rj$.cM(t,"/students/reset-strikes"),$async$Jw)
case 3:v=u.xZ(d)
x=1
break
case 1:return B.l(v,w)}})
return B.m($async$Jw,w)}}
A.b_d.prototype={}
A.aoZ.prototype={}
A.ap_.prototype={}
A.cC.prototype={
dJ(){var x=this,w=B.j8(x.a.dJ(),y.w,y.b)
w.n(0,"home_class_id",x.b)
w.n(0,"home_class_name",x.c)
w.n(0,"group_class_ids",x.d)
return w}}
A.Am.prototype={}
A.oB.prototype={}
var z=a.updateTypes(["Am(a9<@,@>)"])
A.b_c.prototype={
$1(d){return A.bRU(B.da(d,y.w,y.b))},
$S:744}
A.b_7.prototype={
$1(d){return d!=null},
$S:90}
A.b_8.prototype={
$1(d){return J.aj(d)},
$S:67}
A.b_4.prototype={
$1(d){var x,w,v=y.w,u=B.da(d,v,y.b),t=u.i(0,"id")
if(t!=null)J.aj(t)
t=u.i(0,"device_id")
if(t!=null)J.aj(t)
t=B.f9(u.i(0,"at"))
x=B.fM(u.i(0,"strike_no"))
if(x==null)x=1
w=y.i
if(w.b(u.i(0,"flags"))){v=J.eG(w.a(u.i(0,"flags")),v)
v=B.U(v,v.$ti.h("z.E"))}else v=C.aV
w=u.i(0,"trigger")
if(w!=null)J.aj(w)
w=u.i(0,"day_key")
if(w!=null)J.aj(w)
u=u.i(0,"source")
if(u!=null)J.aj(u)
return new A.Am(t,x,v)},
$S:z+0};(function inheritance(){var x=a.mixin,w=a.inheritMany,v=a.inherit
w(B.E,[A.b_j,A.b_k,A.b_l,A.ap0,A.b_a,A.b_b,A.b_q,A.beT,A.aoZ,A.cC,A.Am,A.oB])
v(A.ap1,A.ap0)
v(A.ap2,A.ap1)
v(A.b_i,A.ap2)
w(B.bN,[A.b_c,A.b_7,A.b_8,A.b_4])
v(A.ap_,A.aoZ)
v(A.b_d,A.ap_)
x(A.ap0,A.b_j)
x(A.ap1,A.b_k)
x(A.ap2,A.b_l)
x(A.aoZ,A.b_a)
x(A.ap_,A.b_q)})()
var y={D:B.y("q<cC>"),i:B.y("q<@>"),B:B.y("a9<@,@>"),w:B.y("f"),r:B.y("oB"),s:B.y("cC"),n:B.y("Am"),b:B.y("@"),d:B.y("q<@>?")};(function constants(){var x=a.makeConstList
D.aap=x([],B.y("p<Am>"))})();(function lazyInitializers(){var x=a.lazyFinal
x($,"c65","mq",()=>new A.b_d(new A.beT(A.bAX()),new A.b_b(A.bAX())))})()};
(a=>{a["ue6/ylBTU8TsKxBIVLzcxK3SAg8="]=a.current})($__dart_deferred_initializers__);