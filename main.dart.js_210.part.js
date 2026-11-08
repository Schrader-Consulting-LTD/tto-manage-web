((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var A,C,F,G,H,E,I,K,L,M,B={
bNQ(d){return new B.yo(d,null)},
yo:function yo(d,e){this.c=d
this.a=e},
aFp:function aFp(d,e){this.a=d
this.b=e},
atO(d,e){var x=0,w=A.n(y.v),v
var $async$atO=A.o(function(f,g){if(f===1)return A.k(g,w)
for(;;)switch(x){case 0:x=!B.c_z(e)?3:4
break
case 3:x=5
return A.e(A.cj(d,A.d("export_codes_empty",null),null),$async$atO)
case 5:x=1
break
case 4:x=6
return A.e(new A.a4(d,I.Yp(M.BK,new Uint8Array(A.hs(C.bV.cH(B.bZ_(e)))),A.d("download_codes_csv",null),"login_codes.csv","text/csv"),y.s).aw(),$async$atO)
case 6:case 1:return A.l(v,w)}})
return A.m($async$atO,w)},
c_z(d){return C.b.dL(d.c,new B.bmc())},
bmc:function bmc(){},
a_L:function a_L(d,e){this.c=d
this.a=e},
a3k:function a3k(d,e){this.c=d
this.a=e},
aFq:function aFq(d,e,f){this.a=d
this.b=e
this.c=f},
bZ_(d){var x,w,v,u,t,s,r,q,p=null,o="no_active_code",n=d.ga8m(),m=y.x,l=A.a([A.d("student_name",p)],m)
if(n)l.push(A.d("class",p))
l.push(A.d("code",p))
l.push(A.d("code_expires_at",p))
l=A.a([l],y.g)
for(x=d.c,w=x.length,v=0;v<x.length;x.length===w||(0,A.F)(x),++v){u=x[v]
t=A.a([u.b],m)
if(n){s=u.c
t.push(s==null?"":s)}s=u.d
r=s==null
q=r?p:s.e
if(q==null){q=$.cB().a
q=$.cv.i(0,q)
q=q==null?p:q.i(0,o)
if(q==null)q=o}t.push(q)
if(r)s=""
else{s=E.I5(s.r)
r=$.bq7()
s=A.ap(s,r,"")}t.push(s)
l.push(t)}return L.bEo(l)}},N,O,D
A=c[0]
C=c[2]
F=c[98]
G=c[97]
H=c[135]
E=c[73]
I=c[72]
K=c[156]
L=c[46]
M=c[157]
B=a.updateHolder(c[28],B)
N=c[138]
O=c[149]
D=c[104]
B.yo.prototype={
t(d){var x,w,v=null,u=this.c,t=A.e1(v,v,v,!0,u.b,u.a),s=y.u,r=A.a([],s)
if(!u.d){x=A.d("current_codes_title",v)
r.push(A.eY(v,v,v,v,C.q,A.d("current_codes_hint",v),v,v,!1,x,C.d5,v))}else if(u.c.length===0&&u.e>0)r.push(A.eY(v,v,v,v,C.q,A.d("codes_all_skipped",v),v,v,!1,v,C.dP,v))
else{x=A.d("generated_codes_title",v)
x=A.a([A.eY(v,v,v,v,C.q,A.d("generated_codes_hint",v),v,v,!1,x,C.d5,v)],s)
w=u.e
if(w>0)x.push(A.eY(v,v,v,v,C.q,A.dr("codes_skipped_existing",w,"count"),v,v,!1,v,C.dP,v))
C.b.K(r,x)}r.push(new B.a3k(u,v))
u=A.d("actions",v)
x=A.d("download_codes_csv",v)
r.push(A.cw(A.a([A.bI(v,!1,!0,K.lU,v,!1,v,new B.aFp(this,d),!1,!0,A.d("download_codes_csv_hint",v),2,v,x,v,v)],s),v,C.q,v,!0,v,u,v))
return A.dP(t,A.eI(r,1100,v,v),v,v,!0,v,!0)}}
B.a_L.prototype={
t(d){var x=this.c
if(x.length===0)return H.tX
return A.b9(A.a([A.bsm(x,F.avX(A.G(d).ax.k3),C.i),C.ef,G.aAf(20,x)],y.u),C.x,C.f,C.p,0,null)}}
B.a3k.prototype={
Xo(d){var x=null,w=d.d
if(w==null)return new A.fd(A.d("no_active_code",x),x,x,x)
return new B.a_L(w.e,x)},
t(d){var x,w,v,u,t,s,r,q,p,o=null,n=this.c,m=n.ga8m(),l=A.a([new D.dL(A.d("student_name",o),!1,o)],y.q)
if(m)l.push(new D.dL(A.d("class",o),!1,o))
l.push(new D.dL(A.d("code",o),!1,o))
l.push(new D.dL(A.d("code_expires_at",o),!1,o))
x=n.c
n=A.a([],y.x)
for(w=l.length,v=0;v<l.length;l.length===w||(0,A.F)(l),++v)n.push(l[v].a)
w=A.dA(o,!0,N.hV,o,o,A.d("no_results",o))
u=A.a([],y.A)
for(t=x.length,s=y.u,v=0;v<x.length;x.length===t||(0,A.F)(x),++v){r=x[v]
q=A.a([A.a3(r.b,o,o,o,o,o,o,o)],s)
if(m){p=r.c
q.push(A.a3(p==null?"\u2014":p,o,o,o,o,o,o,o))}q.push(this.Xo(r))
p=r.d
q.push(A.a3(p==null?"\u2014":E.I5(p.r),o,o,o,o,o,o,o))
u.push(q)}return D.pv(l,n,!1,w,!0,O.e_,new B.aFq(this,x,m),o,u)}}
var z=a.updateTypes([])
B.aFp.prototype={
$0(){return B.atO(this.b,this.a.c)},
$S:0}
B.bmc.prototype={
$1(d){return d.d!=null},
$S:181}
B.aFq.prototype={
$2(d,e){var x,w=null,v=this.b[e],u=v.b,t=A.rh(u,38),s=A.a([],y.x)
if(this.c&&v.c!=null){x=v.c
x.toString
s.push(x)}x=v.d
s.push(x==null?"\u2014":E.I5(x.r))
return A.bI(w,!1,!0,w,w,!1,t,w,!1,!1,C.b.bb(s," \xb7 "),2,w,u,w,this.a.Xo(v))},
$S:52};(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.B,[B.yo,B.a_L,B.a3k])
w(B.aFp,A.cI)
w(B.bmc,A.bN)
w(B.aFq,A.eu)})()
A.ck(b.typeUniverse,JSON.parse('{"yo":{"B":[],"c":[]},"a_L":{"B":[],"c":[]},"a3k":{"B":[],"c":[]}}'))
var y={q:A.y("p<dL>"),g:A.y("p<q<f>>"),A:A.y("p<q<c>>"),x:A.y("p<f>"),u:A.y("p<c>"),s:A.y("a4<~>"),v:A.y("~")}};
(a=>{a["sj8YpsW+M/1NElAMTRkV2MlTdk4="]=a.current})($__dart_deferred_initializers__);