((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,D,A={
bpE(){var x=$.kV()
return new A.aEQ(x,x,x)},
aEQ:function aEQ(d,e,f){this.Qk$=d
this.aR1$=e
this.aR2$=f},
aER:function aER(){},
aES:function aES(){},
aET:function aET(){},
agC:function agC(){},
agD:function agD(){},
agE:function agE(){},
avg:function avg(d,e){this.a6l$=d
this.aIk$=e},
ava:function ava(){},
avb:function avb(d){this.a=d},
avc:function avc(){},
avd:function avd(){},
ave:function ave(d){this.a=d},
avf:function avf(){},
adv:function adv(){},
adw:function adw(){},
bEv(d){return D.b.hT(C.a8x,new A.aEO(d),new A.aEP())},
p1:function p1(d,e,f){this.c=d
this.a=e
this.b=f},
aEO:function aEO(d){this.a=d},
aEP:function aEP(){},
bpD(d){var x,w,v,u,t,s,r,q=null,p=d.i(0,"id")
p=p==null?q:J.ai(p)
if(p==null)p=""
x=d.i(0,"school_id")
if(x!=null)J.ai(x)
x=d.i(0,"class_id")
if(x!=null)J.ai(x)
x=d.i(0,"student_id")
x=x==null?q:J.ai(x)
if(x==null)x=""
w=d.i(0,"code")
w=w==null?q:J.ai(w)
if(w==null)w=""
v=A.bEv(d.i(0,"status"))
u=B.fo(d.i(0,"expires_at"))
t=B.fo(d.i(0,"used_at"))
s=d.i(0,"used_device_id")
s=s==null?q:J.ai(s)
r=d.i(0,"created_by")
if(r!=null)J.ai(r)
return new A.d2(p,x,w,v,u,t,s,B.fo(d.i(0,"created_at")))},
d2:function d2(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.z=k}},C
J=c[1]
B=c[0]
D=c[2]
A=a.updateHolder(c[77],A)
C=c[142]
A.aEQ.prototype={}
A.aER.prototype={}
A.aES.prototype={}
A.aET.prototype={}
A.agC.prototype={}
A.agD.prototype={}
A.agE.prototype={}
A.avg.prototype={}
A.ava.prototype={
Jd(d,e,f){return this.a6l$.BE(d,e,f,null)},
abf(d){return this.Jd(null,null,d)},
abd(d){return this.Jd(d,null,null)},
abe(d){return this.Jd(null,d,null)}}
A.avb.prototype={
BE(d,e,f,g){return this.abg(d,e,f,g)},
abg(d,e,f,g){var x=0,w=B.r(y.A),v,u=this,t,s,r,q
var $async$BE=B.t(function(h,i){if(h===1)return B.o(i,w)
for(;;)switch(x){case 0:t=y.b
t=B.B(t,t)
if(f!=null)t.n(0,"student_ids",f)
if(d!=null)t.n(0,"class_id",d)
if(e!=null)t.n(0,"group_id",e)
s=y.d
r=J
q=B
x=3
return B.e(u.a.Qk$.dj(t,"/login-codes/generate"),$async$BE)
case 3:t=s.a(r.b2(q.dT(i),"codes"))
if(t==null)t=[]
t=J.fq(t,y.B)
t=B.dB(t,new A.avc(),t.$ti.h("x.E"),y.e)
t=B.X(t,B.m(t).h("x.E"))
v=t
x=1
break
case 1:return B.p(v,w)}})
return B.q($async$BE,w)},
IE(d){return this.aOG(d)},
aOG(d){var x=0,w=B.r(y.C),v,u=this,t,s
var $async$IE=B.t(function(e,f){if(e===1)return B.o(f,w)
for(;;)switch(x){case 0:t=y.b
s=B
x=3
return B.e(u.a.Qk$.dj(B.ac(["code_id",d],t,t),"/login-codes/revoke"),$async$IE)
case 3:s.ix(f)
v=!0
x=1
break
case 1:return B.p(v,w)}})
return B.q($async$IE,w)}}
A.avd.prototype={
Je(d){return this.aIk$.BH(null,d)},
T6(){return this.Je(null)}}
A.ave.prototype={
BH(d,e){return this.abn(d,e)},
abn(d,e){var x=0,w=B.r(y.A),v,u=this,t,s,r,q
var $async$BH=B.t(function(f,g){if(f===1)return B.o(g,w)
for(;;)switch(x){case 0:t=B.B(y.w,y.b)
if(e!=null)t.n(0,"student_id",e)
s=y.d
r=J
q=B
x=3
return B.e(u.a.Qk$.ff(0,"/login-codes/get-all",t),$async$BH)
case 3:t=s.a(r.b2(q.dT(g),"login_codes"))
if(t==null)t=[]
t=J.fq(t,y.B)
t=B.dB(t,new A.avf(),t.$ti.h("x.E"),y.e)
t=B.X(t,B.m(t).h("x.E"))
v=t
x=1
break
case 1:return B.p(v,w)}})
return B.q($async$BH,w)}}
A.adv.prototype={}
A.adw.prototype={}
A.p1.prototype={
K(){return"LoginCodeStatus."+this.b}}
A.d2.prototype={}
var z=a.updateTypes(["y(p1)","p1()"])
A.avc.prototype={
$1(d){return A.bpD(B.dt(d,y.w,y.b))},
$S:223}
A.avf.prototype={
$1(d){return A.bpD(B.dt(d,y.w,y.b))},
$S:223}
A.aEO.prototype={
$1(d){var x=this.a
x=x==null?null:J.ai(x)
return d.c===x},
$S:z+0}
A.aEP.prototype={
$0(){return C.mi},
$S:z+1};(function inheritance(){var x=a.mixin,w=a.inheritMany,v=a.inherit
w(B.D,[A.agC,A.aER,A.aES,A.aET,A.adv,A.ava,A.avb,A.avd,A.ave,A.d2])
v(A.agD,A.agC)
v(A.agE,A.agD)
v(A.aEQ,A.agE)
v(A.adw,A.adv)
v(A.avg,A.adw)
w(B.bQ,[A.avc,A.avf,A.aEO])
v(A.p1,B.iS)
v(A.aEP,B.cH)
x(A.agC,A.aER)
x(A.agD,A.aET)
x(A.agE,A.aES)
x(A.adv,A.avd)
x(A.adw,A.ava)})()
var y={A:B.C("v<d2>"),e:B.C("d2"),B:B.C("a6<@,@>"),w:B.C("d"),C:B.C("y"),b:B.C("@"),d:B.C("v<@>?")};(function constants(){var x=a.makeConstList
C.mi=new A.p1("active",0,"active")
C.Hu=new A.p1("used",1,"used")
C.Ht=new A.p1("revoked",2,"revoked")
C.a8x=x([C.mi,C.Hu,C.Ht],B.C("n<p1>"))})();(function lazyInitializers(){var x=a.lazyFinal
x($,"bT5","AJ",()=>new A.avg(new A.avb(A.bpE()),new A.ave(A.bpE())))})()};
(a=>{a["mpHPl4mTsZBhdVT7okqSm/ja8yQ="]=a.current})($__dart_deferred_initializers__);