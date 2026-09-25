((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={aVv:function aVv(d,e){this.a=d
this.b=e},
bJR(){return new B.zC(null)},
zC:function zC(d){this.a=d},
a9F:function a9F(d){this.a=d},
aVF:function aVF(d,e){this.a=d
this.b=e},
aVE:function aVE(d,e,f){this.a=d
this.b=e
this.c=f},
aVA:function aVA(d){this.a=d},
aVD:function aVD(d){this.a=d},
aVC:function aVC(d){this.a=d},
aVB:function aVB(d,e){this.a=d
this.b=e},
GU(d,e){var x=0,w=A.o(y.H),v,u
var $async$GU=A.p(function(f,g){if(f===1)return A.l(g,w)
for(;;)switch(x){case 0:x=3
return A.e(A.cg("teacher_editor_page",""),$async$GU)
case 3:if(d.e==null){x=1
break}u=e==null?null:e.a.a
if(u==null)u="new"
A.by("teacher_editor_page")
x=4
return A.e(H.WE(d,e,u),$async$GU)
case 4:if(!g||d.e==null){x=1
break}x=5
return A.e(A.cj(d).fT("/teachers/"+u,C.bg,y.X),$async$GU)
case 5:case 1:return A.m(v,w)}})
return A.n($async$GU,w)},
Wh(d){var x=0,w=A.o(y.H),v,u,t,s
var $async$Wh=A.p(function(e,f){if(e===1)return A.l(f,w)
for(;;)switch(x){case 0:u=A.f("add_teacher")
t=y.J
x=3
return A.e(A.kc(d,null,A.b([new A.bl("manual",A.f("add_teacher_manually"),A.f("add_teacher_manually_hint"),L.pS,null,!1,t),new A.bl("import",A.f("import_teachers"),A.f("import_teachers_hint"),M.iR,null,!1,t)],y.I),null,u,y.N),$async$Wh)
case 3:s=f
if(s==null||d.e==null){x=1
break}x=s==="manual"?4:6
break
case 4:x=7
return A.e(B.GU(d,null),$async$Wh)
case 7:x=5
break
case 6:x=8
return A.e(I.GR(d),$async$Wh)
case 8:case 5:case 1:return A.m(v,w)}})
return A.n($async$Wh,w)},
aqX(d){var x=0,w=A.o(y.y),v,u
var $async$aqX=A.p(function(e,f){if(e===1)return A.l(f,w)
for(;;)switch(x){case 0:u=$.biC()
u.a.cZ(0,C.ay)
u.b.sm(0,"")
x=3
return A.e(new A.ac(d,E.f_(),y.U).b_(),$async$aqX)
case 3:v=f!=null
x=1
break
case 1:return A.m(v,w)}})
return A.n($async$aqX,w)},
bhe(d){var x=0,w=A.o(y.H)
var $async$bhe=A.p(function(e,f){if(e===1)return A.l(f,w)
for(;;)switch(x){case 0:x=2
return A.e(new A.ac(d,E.f_(),y.U).b_(),$async$bhe)
case 2:return A.m(null,w)}})
return A.n($async$bhe,w)},
bQE(d){$.biC().b.sm(0,d)}},F,D,G,H,E,I,K,L,M
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[25],B)
F=c[93]
D=c[158]
G=c[141]
H=c[27]
E=c[99]
I=c[52]
K=c[97]
L=c[116]
M=c[117]
B.aVv.prototype={}
B.zC.prototype={
u(d){var x=null
A.dS(d,!0,y.x)
return A.e1(A.e7(x,!1,x,A.f("teachers")),D.amv,x,x,!0)}}
B.a9F.prototype={
u(d){var x=$.biC()
return new A.a5($.cG().c,new B.aVF(this,x),null,null,y.a)}}
var z=a.updateTypes(["~(d)"])
B.aVF.prototype={
$3(d,e,f){var x
if(e==null)return C.d9
x=this.b
return new A.a5(x.b,new B.aVE(this.a,e,x),null,null,y.B)},
$S:813}
B.aVE.prototype={
$3(d,e,f){var x,w,v,u,t,s,r,q,p=null,o="access_restricted",n=this.b,m=J.cE(n),l=m.fd(n,new B.aVA(e)),k=A.X(l,l.$ti.h("y.E"))
l=y.p
x=A.b([],l)
if(m.gA(n)>8)x.push(A.rD(!1,this.c.a,A.f("search_teachers_hint"),B.bUl(),p))
w=A.f("add_teacher")
l=A.b([],l)
if(m.ga8(n)){n=A.f("no_teachers")
l.push(A.dV(p,!0,C.hi,A.f("no_teachers_hint"),n))}else{n=k.length
if(n===0)l.push(A.dV(p,!0,C.cO,p,A.f("no_results")))
else for(m=y.s,v=0;v<k.length;k.length===n||(0,A.F)(k),++v){u=k[v]
t=u.a
s=t.d
r=A.b([],m)
t=t.e
q=t==null?p:t.length!==0
if(q===!0){t.toString
r.push(t)}t=u.c
if(t.length!==0)r.push(C.b.bC(t,", "))
t=r.length===0?p:C.b.bC(r," \xb7 ")
if(u.d){r=$.ct().a
r=$.cm.i(0,r)
r=r==null?p:r.i(0,o)
r=new A.fA(r==null?o:r,p,G.e2,p)}else r=p
l.push(new A.jn(p,p,0,new F.BT(s,p),s,t,r,p,new B.aVB(d,u),!0,!0,!1,!1,!1,2,p,p,p))}}x.push(A.cn(l,p,C.o,p,!0,p,new K.lT(w,new B.aVC(d),p)))
return A.f5(x,1/0,new B.aVD(d),p)},
$S:82}
B.aVA.prototype={
$1(d){var x=d.a
return A.on(this.a,A.b([x.d,x.e,x.f],y.m))},
$S:155}
B.aVD.prototype={
$0(){return B.bhe(this.a)},
$S:2}
B.aVC.prototype={
$0(){return B.Wh(this.a)},
$S:0}
B.aVB.prototype={
$0(){return B.GU(this.a,this.b)},
$S:0};(function installTearOffs(){var x=a._static_1
x(B,"bUl","bQE",0)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.aVv,A.D)
w(A.E,[B.zC,B.a9F])
w(A.bM,[B.aVF,B.aVE,B.aVA])
w(A.cv,[B.aVD,B.aVC,B.aVB])})()
A.cl(b.typeUniverse,JSON.parse('{"zC":{"E":[],"c":[]},"a9F":{"E":[],"c":[]}}'))
var y=(function rtii(){var x=A.A
return{J:x("bl<d>"),x:x("iF"),I:x("k<bl<d>>"),s:x("k<d>"),p:x("k<c>"),m:x("k<d?>"),U:x("ac<x>"),N:x("d"),B:x("a5<d>"),a:x("a5<t<iR>?>"),y:x("x"),X:x("D?"),H:x("~")}})();(function constants(){D.amv=new B.a9F(null)})();(function lazyInitializers(){var x=a.lazyFinal
x($,"bY9","biC",()=>new B.aVv(A.ef(null),A.c1("",y.N)))})()};
(a=>{a["NXxwmTEHn4JjXtTiyV/l1gh0vGI="]=a.current})($__dart_deferred_initializers__);