((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={aW5:function aW5(d,e){this.a=d
this.b=e},
bKC(){return new B.zM(null)},
zM:function zM(d){this.a=d},
a9V:function a9V(d){this.a=d},
aWf:function aWf(d,e){this.a=d
this.b=e},
aWe:function aWe(d,e,f){this.a=d
this.b=e
this.c=f},
aWa:function aWa(d){this.a=d},
aWd:function aWd(d){this.a=d},
aWc:function aWc(d){this.a=d},
aWb:function aWb(d,e){this.a=d
this.b=e},
H2(d,e){var x=0,w=A.n(y.H),v,u
var $async$H2=A.o(function(f,g){if(f===1)return A.k(g,w)
for(;;)switch(x){case 0:x=3
return A.d(A.cd("teacher_editor_page",""),$async$H2)
case 3:if(d.e==null){x=1
break}u=e==null?null:e.a.a
if(u==null)u="new"
A.bs("teacher_editor_page")
x=4
return A.d(K.WP(d,e,u),$async$H2)
case 4:if(!g||d.e==null){x=1
break}x=5
return A.d(A.cc(d).fH("/teachers/"+u,C.bb,y.X),$async$H2)
case 5:case 1:return A.l(v,w)}})
return A.m($async$H2,w)},
Wr(d){var x=0,w=A.n(y.H),v,u,t,s
var $async$Wr=A.o(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:u=A.f("add_teacher")
t=y.J
x=3
return A.d(A.ke(d,null,A.b([new A.bl("manual",A.f("add_teacher_manually"),A.f("add_teacher_manually_hint"),F.q0,null,!1,t),new A.bl("import",A.f("import_teachers"),A.f("import_teachers_hint"),G.iV,null,!1,t)],y.I),null,u,y.N),$async$Wr)
case 3:s=f
if(s==null||d.e==null){x=1
break}x=s==="manual"?4:6
break
case 4:x=7
return A.d(B.H2(d,null),$async$Wr)
case 7:x=5
break
case 6:x=8
return A.d(L.H_(d),$async$Wr)
case 8:case 5:case 1:return A.l(v,w)}})
return A.m($async$Wr,w)},
arg(d){var x=0,w=A.n(y.y),v,u
var $async$arg=A.o(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:u=$.bjo()
u.a.d_(0,C.aA)
u.b.sm(0,"")
x=3
return A.d(new A.a6(d,E.f2(),y.U).aU(),$async$arg)
case 3:v=f!=null
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$arg,w)},
bi0(d){var x=0,w=A.n(y.H)
var $async$bi0=A.o(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:x=2
return A.d(new A.a6(d,E.f2(),y.U).aU(),$async$bi0)
case 2:return A.l(null,w)}})
return A.m($async$bi0,w)},
bRq(d){$.bjo().b.sm(0,d)}},F,G,H,D,I,K,E,L,M
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[25],B)
F=c[122]
G=c[123]
H=c[96]
D=c[168]
I=c[147]
K=c[27]
E=c[104]
L=c[55]
M=c[102]
B.aW5.prototype={}
B.zM.prototype={
u(d){var x=null
A.dT(d,!0,y.x)
return A.dW(A.e6(x,!1,x,A.f("teachers")),D.amO,x,x,!0)}}
B.a9V.prototype={
u(d){var x=$.bjo()
return new A.a4($.cJ().c,new B.aWf(this,x),null,null,y.a)}}
var z=a.updateTypes(["~(e)"])
B.aWf.prototype={
$3(d,e,f){var x
if(e==null)return C.da
x=this.b
return new A.a4(x.b,new B.aWe(this.a,e,x),null,null,y.B)},
$S:820}
B.aWe.prototype={
$3(d,e,f){var x,w,v,u,t,s,r,q,p=null,o="access_restricted",n=this.b,m=J.cE(n),l=m.fe(n,new B.aWa(e)),k=A.X(l,l.$ti.i("A.E"))
l=y.p
x=A.b([],l)
if(m.gA(n)>8)x.push(A.rH(!1,this.c.a,A.f("search_teachers_hint"),B.bV8(),p))
w=A.f("add_teacher")
l=A.b([],l)
if(m.ga8(n)){n=A.f("no_teachers")
l.push(A.dX(p,!0,C.hj,A.f("no_teachers_hint"),n))}else{n=k.length
if(n===0)l.push(A.dX(p,!0,C.cO,p,A.f("no_results")))
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
if(u.d){r=$.co().a
r=$.cl.h(0,r)
r=r==null?p:r.h(0,o)
r=new A.fC(r==null?o:r,p,I.e2,p)}else r=p
l.push(new A.iQ(p,p,0,new H.xa(s,p),s,t,r,p,new B.aWb(d,u),!0,!0,!1,!1,!1,2,p,p,p))}}x.push(A.ch(l,p,C.o,p,!0,p,new M.l8(w,new B.aWc(d),p)))
return A.eT(x,1200,new B.aWd(d),p)},
$S:81}
B.aWa.prototype={
$1(d){var x=d.a
return A.os(this.a,A.b([x.d,x.e,x.f],y.m))},
$S:132}
B.aWd.prototype={
$0(){return B.bi0(this.a)},
$S:2}
B.aWc.prototype={
$0(){return B.Wr(this.a)},
$S:0}
B.aWb.prototype={
$0(){return B.H2(this.a,this.b)},
$S:0};(function installTearOffs(){var x=a._static_1
x(B,"bV8","bRq",0)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.aW5,A.D)
w(A.E,[B.zM,B.a9V])
w(A.bG,[B.aWf,B.aWe,B.aWa])
w(A.cp,[B.aWd,B.aWc,B.aWb])})()
A.cj(b.typeUniverse,JSON.parse('{"zM":{"E":[],"c":[]},"a9V":{"E":[],"c":[]}}'))
var y=(function rtii(){var x=A.y
return{J:x("bl<e>"),x:x("iG"),I:x("p<bl<e>>"),s:x("p<e>"),p:x("p<c>"),m:x("p<e?>"),U:x("a6<x>"),N:x("e"),B:x("a4<e>"),a:x("a4<r<iV>?>"),y:x("x"),X:x("D?"),H:x("~")}})();(function constants(){D.amO=new B.a9V(null)})();(function lazyInitializers(){var x=a.lazyFinal
x($,"bYY","bjo",()=>new B.aW5(A.e0(null),A.bY("",y.N)))})()};
(a=>{a["4UDzY91P1udB+2ME1a/L8htMX/s="]=a.current})($__dart_deferred_initializers__);