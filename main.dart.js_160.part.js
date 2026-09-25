((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var A,C,G,H,I,E,K,F,L,M,B={
bFF(d){return new B.xE(d,null)},
xE:function xE(d,e){this.c=d
this.a=e},
aBg:function aBg(d,e){this.a=d
this.b=e},
YQ:function YQ(d,e){this.c=d
this.a=e},
a1p:function a1p(d,e){this.c=d
this.a=e},
aBh:function aBh(d,e,f){this.a=d
this.b=e
this.c=f},
bgt(d,e){var x=0,w=A.o(y.v)
var $async$bgt=A.p(function(f,g){if(f===1)return A.l(g,w)
for(;;)switch(x){case 0:x=2
return A.e(new A.ac(d,L.WI(F.AF,new Uint8Array(A.h3(C.br.cG(B.bQt(e)))),A.f("download_codes_csv"),"login_codes.csv","text/csv"),y.s).b_(),$async$bgt)
case 2:return A.m(null,w)}})
return A.n($async$bgt,w)},
bQt(d){var x,w,v,u,t,s,r,q,p="no_active_code",o=d.ga7r(),n=y.x,m=A.b([A.f("student_name")],n)
if(o)m.push(A.f("class"))
m.push(A.f("code"))
m.push(A.f("code_expires_at"))
m=A.b([m],y.g)
for(x=d.c,w=x.length,v=0;v<x.length;x.length===w||(0,A.F)(x),++v){u=x[v]
t=A.b([u.b],n)
if(o){s=u.c
t.push(s==null?"":s)}s=u.d
r=s==null
q=r?null:s.e
if(q==null){q=$.ct().a
q=$.cm.i(0,q)
q=q==null?null:q.i(0,p)
if(q==null)q=p}t.push(q)
t.push(r?"":E.GH(s.r))
m.push(t)}return K.bwy(m)}},N,D
A=c[0]
C=c[2]
G=c[93]
H=c[74]
I=c[73]
E=c[63]
K=c[45]
F=c[131]
L=c[62]
M=c[130]
B=a.updateHolder(c[28],B)
N=c[114]
D=c[77]
B.xE.prototype={
u(d){var x,w,v,u=null,t=this.c,s=A.e7(u,!0,t.b,t.a),r=y.u,q=A.b([],r)
if(!t.d)q.push(A.ht(u,u,C.o,A.f("current_codes_hint"),u,u,C.eS))
else if(t.c.length===0&&t.e>0)q.push(A.ht(u,u,C.o,A.f("codes_all_skipped"),u,u,C.dQ))
else{x=A.b([A.ht(u,u,C.o,A.f("generated_codes_hint"),u,u,C.eS)],r)
w=t.e
if(w>0){v=A.f("codes_skipped_existing")
x.push(A.ht(u,u,C.o,A.b3(v,"{count}",""+w),u,u,C.dQ))}C.b.O(q,x)}q.push(new B.a1p(t,u))
t=A.f("actions")
x=A.f("download_codes_csv")
q.push(A.cn(A.b([A.bW(u,!1,!0,M.la,u,4,!1,u,new B.aBg(this,d),!1,!0,A.f("download_codes_csv_hint"),2,u,x,u,u)],r),u,C.o,u,!0,t,u))
return A.e1(s,A.f5(q,1100,u,u),u,u,!0)}}
B.YQ.prototype={
u(d){var x=this.c
if(x.length===0)return F.NI
return A.cI(A.b([A.bkL(x,H.ass(A.Q(d).ax.k3),C.i),C.i1,I.awe(20,x)],y.u),C.F,C.l,C.U,0,null)}}
B.a1p.prototype={
WF(d){var x=null,w=d.d
if(w==null)return new A.fA(A.f("no_active_code"),x,x,x)
return new B.YQ(w.e,x)},
u(d){var x,w,v,u,t,s,r,q,p,o=null,n=this.c,m=n.ga7r(),l=A.b([new D.dH(A.f("student_name"),!1,o)],y.q)
if(m)l.push(new D.dH(A.f("class"),!1,o))
l.push(new D.dH(A.f("code"),!1,o))
l.push(new D.dH(A.f("code_expires_at"),!1,o))
x=n.c
n=A.b([],y.x)
for(w=l.length,v=0;v<l.length;l.length===w||(0,A.F)(l),++v)n.push(l[v].a)
w=A.dV(o,!0,N.hk,o,A.f("no_results"))
u=A.b([],y.A)
for(t=x.length,s=y.u,v=0;v<x.length;x.length===t||(0,A.F)(x),++v){r=x[v]
q=A.b([A.az(r.b,o,o,o,o,o,o,o)],s)
if(m){p=r.c
q.push(A.az(p==null?"\u2014":p,o,o,o,o,o,o,o))}q.push(this.WF(r))
p=r.d
q.push(A.az(p==null?"\u2014":E.GH(p.r),o,o,o,o,o,o,o))
u.push(q)}return D.Jp(l,n,w,new B.aBh(this,x,m),o,u)}}
var z=a.updateTypes([])
B.aBg.prototype={
$0(){return B.bgt(this.b,this.a.c)},
$S:0}
B.aBh.prototype={
$2(d,e){var x,w=null,v=this.b[e],u=v.b,t=G.a_X(u),s=A.b([],y.x)
if(this.c&&v.c!=null){x=v.c
x.toString
s.push(x)}x=v.d
s.push(x==null?"\u2014":E.GH(x.r))
return A.bW(w,!1,!0,w,w,0,!1,t,w,!1,!1,C.b.bC(s," \xb7 "),2,w,u,w,this.a.WF(v))},
$S:56};(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.E,[B.xE,B.YQ,B.a1p])
w(B.aBg,A.cv)
w(B.aBh,A.f4)})()
A.cl(b.typeUniverse,JSON.parse('{"xE":{"E":[],"c":[]},"YQ":{"E":[],"c":[]},"a1p":{"E":[],"c":[]}}'))
var y={q:A.A("k<dH>"),g:A.A("k<t<d>>"),A:A.A("k<t<c>>"),x:A.A("k<d>"),u:A.A("k<c>"),s:A.A("ac<~>"),v:A.A("~")}};
(a=>{a["YyLbprknnJEi549IPyC4rGhKltQ="]=a.current})($__dart_deferred_initializers__);