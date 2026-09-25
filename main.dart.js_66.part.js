((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,D,A={
brj(){var x=$.l4()
return new A.aFJ(x,x,x)},
aFJ:function aFJ(d,e,f){this.Qv$=d
this.aRo$=e
this.aRp$=f},
aFK:function aFK(){},
aFL:function aFL(){},
aFM:function aFM(){},
ahy:function ahy(){},
ahz:function ahz(){},
ahA:function ahA(){},
aw2:function aw2(d,e){this.a6A$=d
this.aID$=e},
avY:function avY(){},
avZ:function avZ(d){this.a=d},
aw_:function aw_(){},
aw0:function aw0(d){this.a=d},
aw1:function aw1(){},
aep:function aep(){},
aeq:function aeq(){},
bGs(d){return D.b.hV(C.a94,new A.aFH(d),new A.aFI())},
pb:function pb(d,e,f){this.c=d
this.a=e
this.b=f},
aFH:function aFH(d){this.a=d},
aFI:function aFI(){},
bFE(d){var x=J.aA(d),w=y.d,v=w.a(x.i(d,"codes"))
if(v==null)v=[]
v=J.f2(v,y.B)
v=B.du(v,new A.aBd(),v.$ti.h("y.E"),y.e)
v=B.X(v,B.r(v).h("y.E"))
x=w.a(x.i(d,"skipped_student_ids"))
if(x==null)x=[]
x=J.l5(x,new A.aBe(),y.w)
x=B.X(x,x.$ti.h("b_.E"))
return new A.u6(v,x)},
u6:function u6(d,e){this.a=d
this.b=e},
aBd:function aBd(){},
aBe:function aBe(){},
bri(d){var x,w,v,u,t,s,r,q=null,p=d.i(0,"id")
p=p==null?q:J.af(p)
if(p==null)p=""
x=d.i(0,"school_id")
if(x!=null)J.af(x)
x=d.i(0,"class_id")
if(x!=null)J.af(x)
x=d.i(0,"student_id")
x=x==null?q:J.af(x)
if(x==null)x=""
w=d.i(0,"code")
w=w==null?q:J.af(w)
if(w==null)w=""
v=A.bGs(d.i(0,"status"))
u=B.f0(d.i(0,"expires_at"))
t=B.f0(d.i(0,"used_at"))
s=d.i(0,"used_device_id")
s=s==null?q:J.af(s)
r=d.i(0,"created_by")
if(r!=null)J.af(r)
return new A.d3(p,x,w,v,u,t,s,B.f0(d.i(0,"created_at")))},
d3:function d3(d,e,f,g,h,i,j,k){var _=this
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
A=a.updateHolder(c[70],A)
C=c[154]
A.aFJ.prototype={}
A.aFK.prototype={}
A.aFL.prototype={}
A.aFM.prototype={}
A.ahy.prototype={}
A.ahz.prototype={}
A.ahA.prototype={}
A.aw2.prototype={}
A.avY.prototype={
Jm(d,e,f){return this.a6A$.BM(d,e,f,null)},
abv(d){return this.Jm(null,null,d)},
abt(d){return this.Jm(d,null,null)},
abu(d){return this.Jm(null,d,null)}}
A.avZ.prototype={
BM(d,e,f,g){return this.abw(d,e,f,g)},
abw(d,e,f,g){var x=0,w=B.o(y.p),v,u=this,t,s,r
var $async$BM=B.p(function(h,i){if(h===1)return B.l(i,w)
for(;;)switch(x){case 0:t=y.b
t=B.B(t,t)
if(f!=null)t.n(0,"student_ids",f)
if(d!=null)t.n(0,"class_id",d)
if(e!=null)t.n(0,"group_id",e)
s=A
r=B
x=3
return B.e(u.a.Qv$.d5(t,"/login-codes/generate"),$async$BM)
case 3:v=s.bFE(r.dE(i))
x=1
break
case 1:return B.m(v,w)}})
return B.n($async$BM,w)},
IO(d){return this.aP_(d)},
aP_(d){var x=0,w=B.o(y.C),v,u=this,t,s
var $async$IO=B.p(function(e,f){if(e===1)return B.l(f,w)
for(;;)switch(x){case 0:t=y.b
s=B
x=3
return B.e(u.a.Qv$.d5(B.ae(["code_id",d],t,t),"/login-codes/revoke"),$async$IO)
case 3:s.i8(f)
v=!0
x=1
break
case 1:return B.m(v,w)}})
return B.n($async$IO,w)}}
A.aw_.prototype={
Jn(d){return this.aID$.BP(null,d)},
Th(){return this.Jn(null)}}
A.aw0.prototype={
BP(d,e){return this.abD(d,e)},
abD(d,e){var x=0,w=B.o(y.A),v,u=this,t,s,r,q
var $async$BP=B.p(function(f,g){if(f===1)return B.l(g,w)
for(;;)switch(x){case 0:t=B.B(y.w,y.b)
if(e!=null)t.n(0,"student_id",e)
s=y.d
r=J
q=B
x=3
return B.e(u.a.Qv$.ff(0,"/login-codes/get-all",t),$async$BP)
case 3:t=s.a(r.b4(q.dE(g),"login_codes"))
if(t==null)t=[]
t=J.f2(t,y.B)
t=B.du(t,new A.aw1(),t.$ti.h("y.E"),y.e)
t=B.X(t,B.r(t).h("y.E"))
v=t
x=1
break
case 1:return B.m(v,w)}})
return B.n($async$BP,w)}}
A.aep.prototype={}
A.aeq.prototype={}
A.pb.prototype={
K(){return"LoginCodeStatus."+this.b}}
A.u6.prototype={}
A.d3.prototype={}
var z=a.updateTypes(["x(pb)","pb()"])
A.aw1.prototype={
$1(d){return A.bri(B.dt(d,y.w,y.b))},
$S:258}
A.aFH.prototype={
$1(d){var x=this.a
x=x==null?null:J.af(x)
return d.c===x},
$S:z+0}
A.aFI.prototype={
$0(){return C.mw},
$S:z+1}
A.aBd.prototype={
$1(d){return A.bri(B.dt(d,y.w,y.b))},
$S:258}
A.aBe.prototype={
$1(d){return J.af(d)},
$S:70};(function inheritance(){var x=a.mixin,w=a.inheritMany,v=a.inherit
w(B.D,[A.ahy,A.aFK,A.aFL,A.aFM,A.aep,A.avY,A.avZ,A.aw_,A.aw0,A.u6,A.d3])
v(A.ahz,A.ahy)
v(A.ahA,A.ahz)
v(A.aFJ,A.ahA)
v(A.aeq,A.aep)
v(A.aw2,A.aeq)
w(B.bM,[A.aw1,A.aFH,A.aBd,A.aBe])
v(A.pb,B.iW)
v(A.aFI,B.cv)
x(A.ahy,A.aFK)
x(A.ahz,A.aFM)
x(A.ahA,A.aFL)
x(A.aep,A.aw_)
x(A.aeq,A.avY)})()
var y={p:B.A("u6"),A:B.A("t<d3>"),e:B.A("d3"),B:B.A("a6<@,@>"),w:B.A("d"),C:B.A("x"),b:B.A("@"),d:B.A("t<@>?")};(function constants(){var x=a.makeConstList
C.mw=new A.pb("active",0,"active")
C.HJ=new A.pb("used",1,"used")
C.HI=new A.pb("revoked",2,"revoked")
C.a94=x([C.mw,C.HJ,C.HI],B.A("k<pb>"))})();(function lazyInitializers(){var x=a.lazyFinal
x($,"bVa","B0",()=>new A.aw2(new A.avZ(A.brj()),new A.aw0(A.brj())))})()};
(a=>{a["hObeFQanh3PNzuGqwQP+7LsJNsw="]=a.current})($__dart_deferred_initializers__);