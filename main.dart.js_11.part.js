((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,G,B={aUo:function aUo(d,e){this.a=d
this.b=e},
bHm(){return new B.zl(null)},
zl:function zl(d){this.a=d},
aUC:function aUC(){},
aUB:function aUB(d){this.a=d},
a8A:function a8A(d){this.a=d},
aUA:function aUA(d,e,f){this.a=d
this.b=e
this.c=f},
aUy:function aUy(d){this.a=d},
aUz:function aUz(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aUt:function aUt(d){this.a=d},
aUx:function aUx(d){this.a=d},
aUu:function aUu(d){this.a=d},
aUv:function aUv(d){this.a=d},
aUw:function aUw(d,e){this.a=d
this.b=e},
w3(d,e){var x=0,w=A.t(y.H),v,u
var $async$w3=A.u(function(f,g){if(f===1)return A.p(g,w)
for(;;)switch(x){case 0:x=3
return A.i(A.cQ("teacher_editor_page",""),$async$w3)
case 3:if(d.e==null){x=1
break}u=e==null?null:e.a.a
if(u==null)u="new"
A.bS("teacher_editor_page")
x=4
return A.i(H.VJ(d,e,u),$async$w3)
case 4:if(!g||d.e==null){x=1
break}x=5
return A.i(A.fQ(d).iV("/teachers/"+u,C.cl,y.X),$async$w3)
case 5:case 1:return A.q(v,w)}})
return A.r($async$w3,w)},
aq4(d){var x=0,w=A.t(y.y),v,u
var $async$aq4=A.u(function(e,f){if(e===1)return A.p(f,w)
for(;;)switch(x){case 0:u=$.bgP()
u.a.cR(0,C.au)
u.b.sn(0,"")
x=3
return A.i(new A.ao(d,E.fn(),y.U).bm(),$async$aq4)
case 3:v=f!=null
x=1
break
case 1:return A.q(v,w)}})
return A.r($async$aq4,w)},
aqc(d){var x=0,w=A.t(y.H)
var $async$aqc=A.u(function(e,f){if(e===1)return A.p(f,w)
for(;;)switch(x){case 0:x=2
return A.i(new A.ao(d,E.fn(),y.U).bm(),$async$aqc)
case 2:return A.q(null,w)}})
return A.r($async$aqc,w)},
bO4(d){$.bgP().b.sn(0,d)}},D,H,E,I,K,F,L
J=c[1]
A=c[0]
C=c[2]
G=c[115]
B=a.updateHolder(c[21],B)
D=c[128]
H=c[22]
E=c[80]
I=c[64]
K=c[110]
F=c[91]
L=c[77]
B.aUo.prototype={}
B.zl.prototype={
v(d){A.ep(d,!0,y.x)
return A.bq(new B.aUC(),$.cq().c,y.t)}}
B.a8A.prototype={
v(d){var x=$.bgP(),w=$.cq()
return A.bq(new B.aUA(this,x,w),w.c,y.t)}}
var z=a.updateTypes(["~(d)"])
B.aUC.prototype={
$3(d,e,f){var x=null,w=e!=null&&J.hn(e),v=A.f1(x,!1,x,A.j("teachers"))
return A.eM(v,D.alX,A.eG(A.ad(d,C.ai,y.w).w.a.a)===C.aG&&w?I.azd(K.l3,new B.aUB(d),A.j("add_teacher")):x,x,!0)},
$S:775}
B.aUB.prototype={
$0(){return B.w3(this.a,null)},
$S:0}
B.aUA.prototype={
$3(d,e,f){var x,w
if(e==null)return C.e3
if(J.eh(e)){x=A.j("no_teachers")
w=A.j("no_teachers_hint")
return A.dp(A.ch(!1,!0,F.cK,new B.aUy(d),C.be,A.j("add_teacher"),C.ay),!1,C.iH,w,x)}x=this.b
return A.bq(new B.aUz(this.a,e,this.c,x),x.b,y.N)},
$S:776}
B.aUy.prototype={
$0(){return B.w3(this.a,null)},
$S:0}
B.aUz.prototype={
$3(d,e,f){var x,w,v,u,t,s,r,q,p,o=null,n="access_restricted",m=this.b,l=J.cB(m),k=l.fR(m,new B.aUt(e)),j=A.X(k,k.$ti.i("x.E"))
k=y.p
x=A.b([A.pb(new B.aUu(d),this.c.d)],k)
if(l.gB(m)>8)x.push(A.ru(!1,this.d.a,A.j("search_teachers_hint"),C.dw,B.bRJ(),o))
m=A.j("teachers")
l=A.eG(A.ad(d,C.ai,y.w).w.a.a)===C.aG?o:A.ch(!1,!1,F.cK,new B.aUv(d),C.aB,A.j("add_teacher"),C.ay)
k=A.b([],k)
w=j.length
if(w===0)k.push(A.dp(o,!0,C.cL,o,A.j("no_results")))
else for(v=y.s,u=0;u<j.length;j.length===w||(0,A.F)(j),++u){t=j[u]
s=t.a
r=s.d
q=A.b([],v)
s=s.e
p=s==null?o:s.length!==0
if(p===!0){s.toString
q.push(s)}s=t.c
if(s.length!==0)q.push(C.b.bH(s,", "))
s=q.length===0?o:C.b.bH(q," \xb7 ")
if(t.d){q=$.ck().a
q=$.cl.h(0,q)
q=q==null?o:q.h(0,n)
q=new A.iH(q==null?n:q,o,G.h9,o)}else q=o
k.push(new A.hW(o,o,0,new L.Bw(r,o),r,s,q,o,new B.aUw(d,t),!0,!0,!1,!1,!1,o,o,o))}x.push(A.cC(k,o,C.u,o,!0,m,l))
return A.h7(x,840,new B.aUx(d))},
$S:81}
B.aUt.prototype={
$1(d){var x=d.a
return A.oa(this.a,A.b([x.d,x.e,x.f],y.m))},
$S:140}
B.aUx.prototype={
$0(){return B.aqc(this.a)},
$S:3}
B.aUu.prototype={
$0(){return B.aqc(this.a)},
$S:3}
B.aUv.prototype={
$0(){return B.w3(this.a,null)},
$S:0}
B.aUw.prototype={
$0(){return B.w3(this.a,this.b)},
$S:0};(function installTearOffs(){var x=a._static_1
x(B,"bRJ","bO4",0)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.aUo,A.C)
w(A.E,[B.zl,B.a8A])
w(A.bY,[B.aUC,B.aUA,B.aUz,B.aUt])
w(A.cR,[B.aUB,B.aUy,B.aUx,B.aUu,B.aUv,B.aUw])})()
A.cO(b.typeUniverse,JSON.parse('{"zl":{"E":[],"c":[]},"a8A":{"E":[],"c":[]}}'))
var y=(function rtii(){var x=A.D
return{x:x("k9"),s:x("n<d>"),p:x("n<c>"),m:x("n<d?>"),U:x("ao<z>"),w:x("fx"),N:x("d"),y:x("z"),t:x("w<i0>?"),X:x("C?"),H:x("~")}})();(function constants(){D.alX=new B.a8A(null)})();(function lazyInitializers(){var x=a.lazyFinal
x($,"bVx","bgP",()=>new B.aUo(A.dJ(null),A.c8("",y.N)))})()};
(a=>{a["IlKif/SAL3DApVaDetU5nR5TGD4="]=a.current})($__dart_deferred_initializers__);