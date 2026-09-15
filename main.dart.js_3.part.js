((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,C,A={
bne(){var x=$.kU()
return new A.aue(x,x,x,x)},
brl(){var x=$.kU()
return new A.aUD(x,x,x,x,x,x)},
aue:function aue(d,e,f,g){var _=this
_.GB$=d
_.aR_$=e
_.aR0$=f
_.aR1$=g},
auf:function auf(){},
aug:function aug(){},
auh:function auh(){},
aui:function aui(){},
aUE:function aUE(){},
aUF:function aUF(){},
aUG:function aUG(){},
aUH:function aUH(){},
aUI:function aUI(){},
aUJ:function aUJ(){},
aUD:function aUD(d,e,f,g,h,i){var _=this
_.wn$=d
_.aR2$=e
_.aR3$=f
_.aR4$=g
_.aR5$=h
_.aR6$=i},
ad4:function ad4(){},
ad5:function ad5(){},
ad6:function ad6(){},
ad7:function ad7(){},
alx:function alx(){},
aly:function aly(){},
alz:function alz(){},
alA:function alA(){},
alB:function alB(){},
alC:function alC(){},
aud:function aud(d,e){this.QC$=d
this.aIt$=e},
au8:function au8(){},
au9:function au9(d){this.a=d},
aua:function aua(){},
aub:function aub(d){this.a=d},
auc:function auc(){},
ad2:function ad2(){},
ad3:function ad3(){},
aUm:function aUm(){},
aUn:function aUn(d){this.a=d},
aUp:function aUp(){},
aUq:function aUq(d){this.a=d},
aUr:function aUr(){},
aUs:function aUs(d,e){this.Am$=d
this.a6x$=e},
alv:function alv(){},
alw:function alw(){},
cD:function cD(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
bj9(d){var x=B.Ek(d),w=A.bja(d.h(0,"class_ids")),v=A.bja(d.h(0,"class_names")),u=B.pT(d.h(0,"access_restricted"))
return new A.i0(x,w,v,u===!0,A.bja(d.h(0,"access_class_ids")))},
bja(d){var x,w
if(!y.j.b(d))return C.bg
x=J.et(d,new A.aUk())
w=x.$ti.i("f4<1,d>")
x=B.X(new B.f4(x,new A.aUl(),w),w.i("x.E"))
return x},
i0:function i0(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
aUk:function aUk(){},
aUl:function aUl(){},
brm(d){var x,w=null,v=J.ax(d),u=y.f,t=u.b(v.h(d,"user"))?v.h(d,"user"):v.h(d,"teacher"),s=v.h(d,"password")
if(s==null)s=v.h(d,"temp_password")
s=s==null?w:J.ac(s)
if(s==null)s=""
x=v.h(d,"expires_at")
x=B.ef(x==null?v.h(d,"temp_password_expires_at"):x)
u=u.b(t)?B.Ek(B.dg(t,y.N,y.z)):new B.eV("",w,C.jy,"",w,w,w,C.iC,w)
return new A.DV(s,x,u,B.pT(v.h(d,"welcome_email_sent")))},
DV:function DV(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fn(){var x=0,w=B.t(y.y),v,u,t,s
var $async$fn=B.u(function(d,e){if(d===1)return B.p(e,w)
for(;;)switch(x){case 0:x=3
return B.i(B.jC(B.b([$.aqn().aIt$.BR(),$.kT().qj$.xb(null),$.AK().a6x$.xc(null)],y.D),y.K),$async$fn)
case 3:u=e
t=$.cq()
s=J.ax(u)
t.a.sn(0,y.x.a(s.h(u,0)))
t.b.sn(0,y.G.a(s.h(u,1)))
t.c.sn(0,y.m.a(s.h(u,2)))
t.d.mn(0)
B.ip(C.fo)
x=4
return B.i(B.i2(),$async$fn)
case 4:v=!0
x=1
break
case 1:return B.q(v,w)}})
return B.r($async$fn,w)}}
J=c[1]
B=c[0]
C=c[2]
A=a.updateHolder(c[80],A)
A.aue.prototype={}
A.auf.prototype={}
A.aug.prototype={}
A.auh.prototype={}
A.aui.prototype={}
A.aUE.prototype={}
A.aUF.prototype={}
A.aUG.prototype={}
A.aUH.prototype={}
A.aUI.prototype={}
A.aUJ.prototype={}
A.aUD.prototype={}
A.ad4.prototype={}
A.ad5.prototype={}
A.ad6.prototype={}
A.ad7.prototype={}
A.alx.prototype={}
A.aly.prototype={}
A.alz.prototype={}
A.alA.prototype={}
A.alB.prototype={}
A.alC.prototype={}
A.aud.prototype={}
A.au8.prototype={}
A.au9.prototype={
EY(d,e,f){return this.aD5(d,e,f)},
aD5(d,e,f){var x=0,w=B.t(y.y),v,u=this,t,s
var $async$EY=B.u(function(g,h){if(g===1)return B.p(h,w)
for(;;)switch(x){case 0:t=y.z
t=B.B(t,t)
t.m(0,"kind",d.c)
t.m(0,"name",e)
if(f!=null)t.m(0,"parent_id",f)
s=B
x=3
return B.i(u.a.GB$.dk(t,"/class-groups/add"),$async$EY)
case 3:s.iz(h)
v=!0
x=1
break
case 1:return B.q(v,w)}})
return B.r($async$EY,w)},
Jc(d,e,f){return this.aPu(d,e,f)},
aPu(d,e,f){var x=0,w=B.t(y.y),v,u=this,t,s
var $async$Jc=B.u(function(g,h){if(g===1)return B.p(h,w)
for(;;)switch(x){case 0:t=y.z
t=B.B(t,t)
t.m(0,"group_id",d)
t.m(0,"name",e)
s=B
x=3
return B.i(u.a.GB$.dk(t,"/class-groups/update"),$async$Jc)
case 3:s.iz(h)
v=!0
x=1
break
case 1:return B.q(v,w)}})
return B.r($async$Jc,w)},
G0(d){return this.aGX(d)},
aGX(d){var x=0,w=B.t(y.y),v,u=this,t,s
var $async$G0=B.u(function(e,f){if(e===1)return B.p(f,w)
for(;;)switch(x){case 0:t=y.z
s=B
x=3
return B.i(u.a.GB$.dk(B.ae(["group_id",d],t,t),"/class-groups/delete"),$async$G0)
case 3:s.iz(f)
v=!0
x=1
break
case 1:return B.q(v,w)}})
return B.r($async$G0,w)}}
A.aua.prototype={}
A.aub.prototype={
BR(){var x=0,w=B.t(y.x),v,u=this,t,s,r,q
var $async$BR=B.u(function(d,e){if(d===1)return B.p(e,w)
for(;;)switch(x){case 0:s=y.g
r=J
q=B
x=3
return B.i(u.a.GB$.eK(0,"/class-groups/get-all",B.B(y.N,y.z)),$async$BR)
case 3:t=s.a(r.b0(q.dA(e),"groups"))
if(t==null)t=[]
t=J.f0(t,y.f)
t=B.dw(t,new A.auc(),t.$ti.i("x.E"),y.k)
t=B.X(t,B.m(t).i("x.E"))
v=t
x=1
break
case 1:return B.q(v,w)}})
return B.r($async$BR,w)}}
A.ad2.prototype={}
A.ad3.prototype={}
A.aUm.prototype={}
A.aUn.prototype={
F3(d,e,f){return this.aDg(d,e,f)},
aDg(d,e,f){var x=0,w=B.t(y.v),v,u=this,t,s,r
var $async$F3=B.u(function(g,h){if(g===1)return B.p(h,w)
for(;;)switch(x){case 0:t=y.z
t=B.B(t,t)
t.m(0,"name",e)
t.m(0,"email",d)
if(f!=null)t.m(0,"phone",f)
s=A
r=B
x=3
return B.i(u.a.wn$.dk(t,"/teachers/add"),$async$F3)
case 3:v=s.brm(r.dA(h))
x=1
break
case 1:return B.q(v,w)}})
return B.r($async$F3,w)},
Je(d,e,f,g){return this.aPB(d,e,f,g)},
aPB(d,e,f,g){var x=0,w=B.t(y.w),v,u=this,t,s,r,q,p,o,n
var $async$Je=B.u(function(h,i){if(h===1)return B.p(i,w)
for(;;)switch(x){case 0:t=y.z
s=B.B(t,t)
s.m(0,"teacher_id",g)
s.m(0,"name",e)
s.m(0,"email",d)
s.m(0,"phone",f)
r=A
q=B
p=y.f
o=J
n=B
x=3
return B.i(u.a.wn$.dk(s,"/teachers/update"),$async$Je)
case 3:v=r.bj9(q.dg(p.a(o.b0(n.dA(i),"teacher")),y.N,t))
x=1
break
case 1:return B.q(v,w)}})
return B.r($async$Je,w)},
G2(d){return this.aGZ(d)},
aGZ(d){var x=0,w=B.t(y.y),v,u=this,t,s
var $async$G2=B.u(function(e,f){if(e===1)return B.p(f,w)
for(;;)switch(x){case 0:t=y.z
s=B
x=3
return B.i(u.a.wn$.dk(B.ae(["teacher_id",d],t,t),"/teachers/delete"),$async$G2)
case 3:s.iz(f)
v=!0
x=1
break
case 1:return B.q(v,w)}})
return B.r($async$G2,w)},
BQ(d){return this.abw(d)},
abw(d){var x=0,w=B.t(y.v),v,u=this,t,s,r
var $async$BQ=B.u(function(e,f){if(e===1)return B.p(f,w)
for(;;)switch(x){case 0:t=y.z
t=B.B(t,t)
t.m(0,"teacher_id",d)
s=A
r=B
x=3
return B.i(u.a.wn$.dk(t,"/teachers/temp-password"),$async$BQ)
case 3:v=s.brm(r.dA(f))
x=1
break
case 1:return B.q(v,w)}})
return B.r($async$BQ,w)},
Cp(d,e,f){return this.ad8(d,e,f)},
ad8(d,e,f){var x=0,w=B.t(y.w),v,u=this,t,s,r,q,p,o
var $async$Cp=B.u(function(g,h){if(g===1)return B.p(h,w)
for(;;)switch(x){case 0:t=y.z
s=A
r=B
q=y.f
p=J
o=B
x=3
return B.i(u.a.wn$.dk(B.ae(["teacher_id",f,"restricted",e,"class_ids",d],t,t),"/teachers/set-access"),$async$Cp)
case 3:v=s.bj9(r.dg(q.a(p.b0(o.dA(h),"teacher")),y.N,t))
x=1
break
case 1:return B.q(v,w)}})
return B.r($async$Cp,w)}}
A.aUp.prototype={}
A.aUq.prototype={
xc(d){return this.abF(d)},
abF(d){var x=0,w=B.t(y.m),v,u=this,t,s,r,q
var $async$xc=B.u(function(e,f){if(e===1)return B.p(f,w)
for(;;)switch(x){case 0:s=y.g
r=J
q=B
x=3
return B.i(u.a.wn$.eK(0,"/teachers/get-all",B.B(y.N,y.z)),$async$xc)
case 3:t=s.a(r.b0(q.dA(f),"teachers"))
if(t==null)t=[]
t=J.f0(t,y.f)
t=B.dw(t,new A.aUr(),t.$ti.i("x.E"),y.w)
t=B.X(t,B.m(t).i("x.E"))
v=t
x=1
break
case 1:return B.q(v,w)}})
return B.r($async$xc,w)}}
A.aUs.prototype={}
A.alv.prototype={}
A.alw.prototype={}
A.cD.prototype={
e7(){var x,w=this,v=B.B(y.N,y.z)
v.m(0,"id",w.a)
v.m(0,"school_id",w.b)
v.m(0,"kind",w.c.c)
v.m(0,"name",w.d)
v.m(0,"parent_id",w.e)
v.m(0,"sort_order",w.f)
x=w.r
if(x!=null)v.m(0,"created_at",x.mz())
return v}}
A.i0.prototype={
e7(){var x=this,w=B.iE(x.a.e7(),y.N,y.z)
w.m(0,"class_ids",x.b)
w.m(0,"class_names",x.c)
w.m(0,"access_restricted",x.d)
w.m(0,"access_class_ids",x.e)
return w}}
A.DV.prototype={}
var z=a.updateTypes([])
A.auc.prototype={
$1(d){var x,w,v,u,t,s=null,r=B.dg(d,y.N,y.z),q=r.h(0,"id")
q=q==null?s:J.ac(q)
if(q==null)q=""
x=r.h(0,"school_id")
x=x==null?s:J.ac(x)
if(x==null)x=""
w=B.bnd(r.h(0,"kind"))
v=r.h(0,"name")
v=v==null?s:J.ac(v)
if(v==null)v=""
u=r.h(0,"parent_id")
u=u==null?s:J.ac(u)
t=B.hB(r.h(0,"sort_order"))
if(t==null)t=0
return new A.cD(q,x,w,v,u,t,B.ef(r.h(0,"created_at")))},
$S:711}
A.aUr.prototype={
$1(d){return A.bj9(B.dg(d,y.N,y.z))},
$S:712}
A.aUk.prototype={
$1(d){return d!=null},
$S:157}
A.aUl.prototype={
$1(d){return J.ac(d)},
$S:78};(function inheritance(){var x=a.mixin,w=a.inheritMany,v=a.inherit
w(B.C,[A.ad4,A.auf,A.aug,A.auh,A.aui,A.aUE,A.aUF,A.aUG,A.aUH,A.aUI,A.aUJ,A.alx,A.ad2,A.au8,A.au9,A.aua,A.aub,A.aUm,A.aUn,A.aUp,A.aUq,A.alv,A.cD,A.i0,A.DV])
v(A.ad5,A.ad4)
v(A.ad6,A.ad5)
v(A.ad7,A.ad6)
v(A.aue,A.ad7)
v(A.aly,A.alx)
v(A.alz,A.aly)
v(A.alA,A.alz)
v(A.alB,A.alA)
v(A.alC,A.alB)
v(A.aUD,A.alC)
v(A.ad3,A.ad2)
v(A.aud,A.ad3)
w(B.bY,[A.auc,A.aUr,A.aUk,A.aUl])
v(A.alw,A.alv)
v(A.aUs,A.alw)
x(A.ad4,A.auf)
x(A.ad5,A.aui)
x(A.ad6,A.aug)
x(A.ad7,A.auh)
x(A.alx,A.aUH)
x(A.aly,A.aUE)
x(A.alz,A.aUJ)
x(A.alA,A.aUF)
x(A.alB,A.aUG)
x(A.alC,A.aUI)
x(A.ad2,A.aua)
x(A.ad3,A.au8)
x(A.alv,A.aUp)
x(A.alw,A.aUm)})()
var y=(function rtii(){var x=B.D
return{k:x("cD"),D:x("n<ai<C>>"),x:x("w<cD>"),G:x("w<bK>"),m:x("w<i0>"),j:x("w<@>"),f:x("a5<@,@>"),K:x("C"),N:x("d"),w:x("i0"),v:x("DV"),y:x("z"),z:x("@"),g:x("w<@>?")}})();(function lazyInitializers(){var x=a.lazyFinal
x($,"bSx","aqn",()=>new A.aud(new A.au9(A.bne()),new A.aub(A.bne())))
x($,"bVy","AK",()=>new A.aUs(new A.aUn(A.brl()),new A.aUq(A.brl())))})()};
(a=>{a["iznFOKXyMl3kLcgJ1ZoUD0yiZbM="]=a.current})($__dart_deferred_initializers__);