((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var A,C,G,H,F,B={
bDJ(d){return new B.xt(d,null)},
xt:function xt(d,e){this.c=d
this.a=e},
aAu:function aAu(d,e){this.a=d
this.b=e},
bOu(d){var x,w,v,u,t,s,r,q,p="no_active_code",o=d.ga7c(),n=new B.bdE(),m=y.h,l=A.b([n.$1(A.j("student_name"))],m)
if(o)l.push(n.$1(A.j("class")))
l.push(n.$1(A.j("code")))
l.push(n.$1(A.j("code_expires_at")))
l=A.b([C.b.bD(l,",")],m)
for(x=d.c,w=x.length,v=0;v<x.length;x.length===w||(0,A.F)(x),++v){u=x[v]
t=A.b([n.$1(u.b)],m)
if(o){s=u.c
t.push(n.$1(s==null?"":s))}s=u.d
r=s==null
q=r?null:s.e
if(q==null){q=$.cs().a
q=$.cB.i(0,q)
q=q==null?null:q.i(0,p)
if(q==null)q=p}t.push(n.$1(q))
t.push(n.$1(r?"":F.Vp(s.r)))
l.push(C.b.bD(t,","))}return"\ufeff"+C.b.bD(l,"\r\n")+"\r\n"},
bdE:function bdE(){},
Y7:function Y7(d,e){this.c=d
this.a=e},
a0H:function a0H(d,e){this.c=d
this.a=e},
aAv:function aAv(d,e,f){this.a=d
this.b=e
this.c=f},
bfd(d,e){var x=0,w=A.r(y.f),v,u
var $async$bfd=A.t(function(f,g){if(f===1)return A.o(g,w)
for(;;)switch(x){case 0:v=$.azd.c8()
u=A.j("download_codes_csv")
x=2
return A.e(v.BR(E.a7x,new Uint8Array(A.hu(C.bz.cM(B.bOu(e)))),u,"login_codes.csv",C.kJ),$async$bfd)
case 2:return A.p(null,w)}})
return A.q($async$bfd,w)}},E,I,K,D,L
A=c[0]
C=c[2]
G=c[57]
H=c[68]
F=c[43]
B=a.updateHolder(c[26],B)
E=c[126]
I=c[125]
K=c[108]
D=c[59]
L=c[87]
B.xt.prototype={
v(d){var x,w=null,v=this.c,u=A.eq(w,!0,v.b,v.a),t=y.e,s=A.b([],t)
if(v.d)s.push(A.l9(w,w,C.q,A.j("generated_codes_hint"),w,w,C.jM))
else s.push(A.l9(w,w,C.q,A.j("current_codes_hint"),w,w,C.jM))
s.push(new B.a0H(v,w))
v=A.j("actions")
x=A.j("download_codes_csv")
s.push(A.cC(A.b([A.ch(w,!1,!0,I.wa,w,4,!1,w,new B.aAu(this,d),!1,!0,A.j("download_codes_csv_hint"),2,w,x,w,w)],t),w,C.q,w,!0,v,w))
return A.eb(u,A.fc(s,1100,w,w),w,!0)}}
B.Y7.prototype={
v(d){var x=this.c
if(x.length===0)return E.aqk
return A.cJ(A.b([A.bjb(x,G.bhv(A.R(d).ax.k3),C.j),C.n1,H.avs(20,x)],y.e),C.L,C.m,C.T,0,null)}}
B.a0H.prototype={
Wu(d){var x=null,w=d.d
if(w==null)return new A.hM(A.j("no_active_code"),x,x,x)
return new B.Y7(w.e,x)},
v(d){var x,w,v,u,t,s,r,q,p,o=null,n=this.c,m=n.ga7c(),l=A.b([new D.fw(A.j("student_name"),!1,o)],y.a)
if(m)l.push(new D.fw(A.j("class"),!1,o))
l.push(new D.fw(A.j("code"),!1,o))
l.push(new D.fw(A.j("code_expires_at"),!1,o))
x=n.c
n=A.b([],y.h)
for(w=l.length,v=0;v<l.length;l.length===w||(0,A.F)(l),++v)n.push(l[v].a)
w=A.dN(o,!0,K.ha,o,A.j("no_results"))
u=A.b([],y.k)
for(t=x.length,s=y.e,v=0;v<x.length;x.length===t||(0,A.F)(x),++v){r=x[v]
q=A.b([A.aN(r.b,o,o,o,o,o,o,o)],s)
if(m){p=r.c
q.push(A.aN(p==null?"\u2014":p,o,o,o,o,o,o,o))}q.push(this.Wu(r))
p=r.d
q.push(A.aN(p==null?"\u2014":F.Vp(p.r),o,o,o,o,o,o,o))
u.push(q)}return D.aw_(l,n,w,new B.aAv(this,x,m),o,u)}}
var z=a.updateTypes([])
B.aAu.prototype={
$0(){return B.bfd(this.b,this.a.c)},
$S:0}
B.bdE.prototype={
$1(d){return'"'+A.bC(d,'"','""')+'"'},
$S:37}
B.aAv.prototype={
$2(d,e){var x,w=null,v=this.b[e],u=v.b,t=L.a_e(u),s=A.b([],y.h)
if(this.c&&v.c!=null){x=v.c
x.toString
s.push(x)}x=v.d
s.push(x==null?"\u2014":F.Vp(x.r))
return A.ch(w,!1,!0,w,w,0,!1,t,w,!1,!1,C.b.bD(s," \xb7 "),2,w,u,w,this.a.Wu(v))},
$S:73};(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.E,[B.xt,B.Y7,B.a0H])
w(B.aAu,A.cH)
w(B.bdE,A.bQ)
w(B.aAv,A.fM)})()
A.cA(b.typeUniverse,JSON.parse('{"xt":{"E":[],"c":[]},"Y7":{"E":[],"c":[]},"a0H":{"E":[],"c":[]}}'))
var y={a:A.C("n<fw>"),k:A.C("n<v<c>>"),h:A.C("n<d>"),e:A.C("n<c>"),f:A.C("~")};(function constants(){var x=a.makeConstList
E.a7x=x(["csv"],y.h)
E.aqk=new A.pt("\u2014",null,null,null,null,null,null,null,null,null)})()};
(a=>{a["5NVz0XL2j6MhWh5QkGx4zVIiipY="]=a.current})($__dart_deferred_initializers__);