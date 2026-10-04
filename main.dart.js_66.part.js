((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,D,A={
bsa(){var x=$.l6()
return new A.aG7(x,x,x)},
aG7:function aG7(d,e,f){this.QE$=d
this.aRC$=e
this.aRD$=f},
aG8:function aG8(){},
aG9:function aG9(){},
aGa:function aGa(){},
ahO:function ahO(){},
ahP:function ahP(){},
ahQ:function ahQ(){},
awr:function awr(d,e){this.a6J$=d
this.aIQ$=e},
awm:function awm(){},
awn:function awn(d){this.a=d},
awo:function awo(){},
awp:function awp(d){this.a=d},
awq:function awq(){},
aeF:function aeF(){},
aeG:function aeG(){},
bHc(d){return D.b.hV(C.a9j,new A.aG5(d),new A.aG6())},
pd:function pd(d,e,f){this.c=d
this.a=e
this.b=f},
aG5:function aG5(d){this.a=d},
aG6:function aG6(){},
bGo(d){var x=J.aA(d),w=y.d,v=w.a(x.h(d,"codes"))
if(v==null)v=[]
v=J.eR(v,y.B)
v=B.dy(v,new A.aBC(),v.$ti.i("A.E"),y.e)
v=B.X(v,B.t(v).i("A.E"))
x=w.a(x.h(d,"skipped_student_ids"))
if(x==null)x=[]
x=J.l7(x,new A.aBD(),y.w)
x=B.X(x,x.$ti.i("b0.E"))
return new A.uc(v,x)},
uc:function uc(d,e){this.a=d
this.b=e},
aBC:function aBC(){},
aBD:function aBD(){},
bs9(d){var x,w,v,u,t,s,r,q=null,p=d.h(0,"id")
p=p==null?q:J.af(p)
if(p==null)p=""
x=d.h(0,"school_id")
if(x!=null)J.af(x)
x=d.h(0,"class_id")
if(x!=null)J.af(x)
x=d.h(0,"student_id")
x=x==null?q:J.af(x)
if(x==null)x=""
w=d.h(0,"code")
w=w==null?q:J.af(w)
if(w==null)w=""
v=A.bHc(d.h(0,"status"))
u=B.f3(d.h(0,"expires_at"))
t=B.f3(d.h(0,"used_at"))
s=d.h(0,"used_device_id")
s=s==null?q:J.af(s)
r=d.h(0,"created_by")
if(r!=null)J.af(r)
return new A.d8(p,x,w,v,u,t,s,B.f3(d.h(0,"created_at")))},
d8:function d8(d,e,f,g,h,i,j,k){var _=this
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
A=a.updateHolder(c[74],A)
C=c[164]
A.aG7.prototype={}
A.aG8.prototype={}
A.aG9.prototype={}
A.aGa.prototype={}
A.ahO.prototype={}
A.ahP.prototype={}
A.ahQ.prototype={}
A.awr.prototype={}
A.awm.prototype={
Jv(d,e,f){return this.a6J$.BT(d,e,f,null)},
abF(d){return this.Jv(null,null,d)},
abD(d){return this.Jv(d,null,null)},
abE(d){return this.Jv(null,d,null)}}
A.awn.prototype={
BT(d,e,f,g){return this.abG(d,e,f,g)},
abG(d,e,f,g){var x=0,w=B.n(y.p),v,u=this,t,s,r
var $async$BT=B.o(function(h,i){if(h===1)return B.k(i,w)
for(;;)switch(x){case 0:t=y.b
t=B.B(t,t)
if(f!=null)t.n(0,"student_ids",f)
if(d!=null)t.n(0,"class_id",d)
if(e!=null)t.n(0,"group_id",e)
s=A
r=B
x=3
return B.d(u.a.QE$.cQ(t,"/login-codes/generate"),$async$BT)
case 3:v=s.bGo(r.db(i))
x=1
break
case 1:return B.l(v,w)}})
return B.m($async$BT,w)},
IW(d){return this.aPb(d)},
aPb(d){var x=0,w=B.n(y.C),v,u=this,t,s
var $async$IW=B.o(function(e,f){if(e===1)return B.k(f,w)
for(;;)switch(x){case 0:t=y.b
s=B
x=3
return B.d(u.a.QE$.cQ(B.ae(["code_id",d],t,t),"/login-codes/revoke"),$async$IW)
case 3:s.i8(f)
v=!0
x=1
break
case 1:return B.l(v,w)}})
return B.m($async$IW,w)}}
A.awo.prototype={
Jw(d){return this.aIQ$.BW(null,d)},
Tq(){return this.Jw(null)}}
A.awp.prototype={
BW(d,e){return this.abN(d,e)},
abN(d,e){var x=0,w=B.n(y.A),v,u=this,t,s,r,q
var $async$BW=B.o(function(f,g){if(f===1)return B.k(g,w)
for(;;)switch(x){case 0:t=B.B(y.w,y.b)
if(e!=null)t.n(0,"student_id",e)
s=y.d
r=J
q=B
x=3
return B.d(u.a.QE$.eU(0,"/login-codes/get-all",t),$async$BW)
case 3:t=s.a(r.b3(q.db(g),"login_codes"))
if(t==null)t=[]
t=J.eR(t,y.B)
t=B.dy(t,new A.awq(),t.$ti.i("A.E"),y.e)
t=B.X(t,B.t(t).i("A.E"))
v=t
x=1
break
case 1:return B.l(v,w)}})
return B.m($async$BW,w)}}
A.aeF.prototype={}
A.aeG.prototype={}
A.pd.prototype={
K(){return"LoginCodeStatus."+this.b}}
A.uc.prototype={}
A.d8.prototype={}
var z=a.updateTypes(["x(pd)","pd()"])
A.awq.prototype={
$1(d){return A.bs9(B.di(d,y.w,y.b))},
$S:252}
A.aG5.prototype={
$1(d){var x=this.a
x=x==null?null:J.af(x)
return d.c===x},
$S:z+0}
A.aG6.prototype={
$0(){return C.mB},
$S:z+1}
A.aBC.prototype={
$1(d){return A.bs9(B.di(d,y.w,y.b))},
$S:252}
A.aBD.prototype={
$1(d){return J.af(d)},
$S:72};(function inheritance(){var x=a.mixin,w=a.inheritMany,v=a.inherit
w(B.D,[A.ahO,A.aG8,A.aG9,A.aGa,A.aeF,A.awm,A.awn,A.awo,A.awp,A.uc,A.d8])
v(A.ahP,A.ahO)
v(A.ahQ,A.ahP)
v(A.aG7,A.ahQ)
v(A.aeG,A.aeF)
v(A.awr,A.aeG)
w(B.bG,[A.awq,A.aG5,A.aBC,A.aBD])
v(A.pd,B.iA)
v(A.aG6,B.cp)
x(A.ahO,A.aG8)
x(A.ahP,A.aGa)
x(A.ahQ,A.aG9)
x(A.aeF,A.awo)
x(A.aeG,A.awm)})()
var y={p:B.y("uc"),A:B.y("r<d8>"),e:B.y("d8"),B:B.y("a7<@,@>"),w:B.y("e"),C:B.y("x"),b:B.y("@"),d:B.y("r<@>?")};(function constants(){var x=a.makeConstList
C.mB=new A.pd("active",0,"active")
C.HT=new A.pd("used",1,"used")
C.HS=new A.pd("revoked",2,"revoked")
C.a9j=x([C.mB,C.HT,C.HS],B.y("p<pd>"))})();(function lazyInitializers(){var x=a.lazyFinal
x($,"bW_","Ba",()=>new A.awr(new A.awn(A.bsa()),new A.awp(A.bsa())))})()};
(a=>{a["6uXIK/7OoNNFZUVyuPvMngwFXCI="]=a.current})($__dart_deferred_initializers__);