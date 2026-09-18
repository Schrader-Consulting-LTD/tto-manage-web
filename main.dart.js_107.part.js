((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
bRQ(d){var x,w,v=C.b.fj(d,new B.bfZ()),u=A.b([],y.r)
for(x=0;x<7;++x){w=D.lH[x]
if(w!==6||v)u.push(w)}return u},
bRP(d,e){var x,w,v
if(d.length===0)return D.ahB
x=A.a1(d).h("a5<1,l>")
w=C.d.de(new A.a5(d,new B.bfX(),x).ju(0,D.Qs),60)
v=C.d.de(new A.a5(d,new B.bfY(),x).ju(0,C.jT)+60-1,60)
if(e){w=Math.min(w,7)
v=Math.max(v,16)}w=C.d.eq(w,0,24)
v=C.d.eq(v,0,24)
if(v-w<4)v=Math.min(24,w+4)
return new A.a8(v-w<4?Math.max(0,v-4):w,v)},
bRO(d){var x,w,v,u,t,s,r,q,p,o={},n=A.X(d,y.z)
C.b.cZ(n,new B.bfV())
x=A.b([],y.E)
o.a=A.b([],y.k)
o.b=A.b([],y.r)
w=new B.bfU(o,x)
for(v=n.length,u=0,t=0;t<n.length;n.length===v||(0,A.F)(n),++t){s=n[t]
if(o.a.length!==0&&s.c>=u)w.$0()
r=C.b.a7u(o.b,new B.bfW(s))
q=o.b
p=s.d
if(r===-1){r=q.length
q.push(p)}else q[r]=p
o.a.push(new A.a8(s,r))
u=Math.max(u,p)}if(o.a.length!==0)w.$0()
return x},
bRN(d,e){if(e<=0)return 52
return Math.max(52,(d-40)/e)},
bsi(d,e){return new B.a9D(d,e,null)},
jJ:function jJ(d,e,f,g,h,i,j,k,l,m){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l
_.y=m},
a6V:function a6V(d,e,f){this.a=d
this.b=e
this.c=f},
bfZ:function bfZ(){},
bfX:function bfX(){},
bfY:function bfY(){},
bfV:function bfV(){},
bfU:function bfU(d,e){this.a=d
this.b=e},
bfW:function bfW(d){this.a=d},
a9D:function a9D(d,e,f){this.c=d
this.d=e
this.a=f},
aWR:function aWR(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aWQ:function aWQ(d){this.a=d},
afI:function afI(d,e,f){this.c=d
this.d=e
this.a=f},
afM:function afM(d,e,f){this.c=d
this.d=e
this.a=f},
aeh:function aeh(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
b0q:function b0q(d,e,f){this.a=d
this.b=e
this.c=f},
ajS:function ajS(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bOr(d){var x
switch(d.a){case 0:x=E.h9
break
case 1:x=D.a_7
break
case 2:x=G.pI
break
default:x=null}return x},
bw7(d,e,f,g,h,i){var x,w,v,u,t,s,r,q,p,o,n,m,l=A.b([],y.l)
for(x=J.ap(d),w=i==null,v=f+":";x.q();){u=x.gJ(x)
t=u.a
s=u.c
r=u.d
q=u.e
p=g.$1(u)
o=u.f
n=B.bOr(o)
m=w?null:i.$1(u)
u=h.$1(u)
l.push(new B.jJ(v+t,s,r,q,p,e,n,m,o===H.tw,u))}return l},
aru(d){var x,w,v,u
for(x=new A.fu(d),w=y.w,x=new A.bF(x,x.gB(0),w.h("bF<ad.E>")),w=w.h("ad.E"),v=2166136261;x.q();){u=x.d
v^=u==null?w.a(u):u
v=(v&65535)*16777619+(((v>>>16)*16777619&65535)<<16>>>0)>>>0}return v}},D,E,F,G,H,I
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[62],B)
D=c[153]
E=c[132]
F=c[122]
G=c[123]
H=c[136]
I=c[67]
B.jJ.prototype={}
B.a6V.prototype={}
B.a9D.prototype={
v(d){var x,w,v={},u=this.c,t=B.bRQ(u)
v.a=null
x=B.bRP(u,this.d!=null)
w=x.a
v.a=w
return new A.bb(C.aD,A.xQ(new B.aWR(v,this,t,x.b-w)),null)}}
B.afI.prototype={
v(d){var x,w,v,u,t,s,r=null,q=A.R(d),p=q.ok.at,o=p==null?r:p.aZ(q.ax.k3.bM(0.6))
p=A.b([D.akw],y.u)
for(x=this.c,w=x.length,v=this.d,u=0;u<x.length;x.length===w||(0,A.F)(x),++u){t="weekday_short_"+x[u]
s=$.cs().a
s=$.cB.i(0,s)
s=s==null?r:s.i(0,t)
p.push(new A.dY(v,r,new A.ox(C.a9,r,r,A.aN(s==null?t:s,1,C.a5,r,o,r,r,r),r),r))}return A.e5(A.cJ(p,C.L,C.m,C.y,0,r),32,r)}}
B.afM.prototype={
v(d){var x,w,v,u=null,t=A.R(d),s=t.ok.ax,r=s==null?u:s.aZ(t.ax.k3.bM(0.6))
s=A.b([],y.u)
for(x=this.d,w=this.c,v=0;v<x;++v)s.push(new A.dY(40,44,new A.fr(D.OJ,u,u,new A.bb(D.Um,A.aN(A.vZ((w+v)*60),u,u,u,r,u,C.j,u),u),u),u))
return A.bs(s,C.L,C.m,C.y,0,C.u)}}
B.aeh.prototype={
v(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=null
A.R(d)
x=f.e
w=x*60
v=f.f
u=(x+v)*60
t=f.w
x=f.d
s=y.u
r=A.b([],s)
for(q=t==null,p=0;p<v;++p){o=A.R(d).ax.k3.bM(0.08)
n=A.R(d).ax.k3.bM(0.08)
r.push(A.ep(e,A.qp(0,C.MK,!0,e,q?e:new B.b0q(f,t,p)),C.F,e,e,new A.dx(e,e,new A.hG(new A.b3(o,1,C.w,-1),new A.b3(n,1,C.w,-1),C.v,C.v),e,e,e,C.aC),e,44,e,e,e,e,x))}s=A.b([A.bs(r,C.L,C.m,C.y,0,C.u)],s)
for(r=f.r,q=r.length,o=x-2,m=0;m<r.length;r.length===q||(0,A.F)(r),++m){l=r[m]
n=l.a
k=n.d
if(k>w&&n.c<u){j=Math.max(n.c,w)
i=Math.max(6,(Math.min(k,u)-j)/60*44-2)
h=o/l.c
g=Math.max(0,h-2)
s.push(new A.LU(l.b*h+2,(j-w)/60*44+1,e,e,g,i,new B.ajS(n,g,i,e),e))}}return A.e5(A.iJ(C.cp,s,C.a3,C.bp,e),v*44,x)}}
B.ajS.prototype={
v(d){var x,w,v,u,t,s,r,q=null,p=A.R(d),o=p.ax,n=this.c,m=n.x,l=m?o.k3.bM(0.6):C.l,k=p.ok.ax,j=k==null?q:k.aZ(l),i="\u200e"+A.vZ(n.c)+"\u2013"+A.vZ(n.d),h=n.w
k=n.e
x=A.b([k,i],y.x)
w=h!=null
if(w&&h.length!==0)x.push(h)
v=C.b.bD(x," \xb7 ")
x=n.y
if(m){m=o.R8
if(m==null)m=o.k2}else m=n.f
u=A.dl(8)
t=this.e
if(t<18)n=C.Q
else{s=y.u
r=A.b([],s)
if(this.d>=40)C.b.O(r,A.b([A.i8(n.r,l,q,12),F.n0],s))
r.push(A.d9(A.aN(k,1,C.a5,q,j,q,q,q),1))
n=A.b([A.cJ(r,C.L,C.m,C.y,0,q)],s)
if(t>=40)n.push(A.aN(i,1,C.a5,q,j,C.b8,C.j,q))
if(t>=56&&w&&h.length!==0)n.push(A.aN(h,1,C.a5,q,j,q,q,q))
n=A.bs(n,C.aa,C.m,C.T,0,C.u)}return I.bnQ(A.aW6(A.ep(q,n,C.bm,q,q,new A.dx(m,q,q,u,q,q,C.aC),q,q,q,D.UN,q,q,q),v,C.aqV),x!=null,x)}}
var z=a.updateTypes(["y(jJ)","l(jJ)","l(jJ,jJ)"])
B.bfZ.prototype={
$1(d){return d.b===6},
$S:z+0}
B.bfX.prototype={
$1(d){return d.c},
$S:z+1}
B.bfY.prototype={
$1(d){return d.d},
$S:z+1}
B.bfV.prototype={
$2(d,e){var x,w=C.d.ba(d.c,e.c)
if(w!==0)return w
x=C.d.ba(e.d,d.d)
if(x!==0)return x
return C.c.ba(d.a,e.a)},
$S:z+2}
B.bfU.prototype={
$0(){var x,w,v,u,t,s
for(x=this.a,w=x.a,v=w.length,u=this.b,t=0;t<w.length;w.length===v||(0,A.F)(w),++t){s=w[t]
u.push(new B.a6V(s.a,s.b,x.b.length))}x.a=A.b([],y.k)
x.b=A.b([],y.r)},
$S:0}
B.bfW.prototype={
$1(d){return d<=this.a.c},
$S:60}
B.aWR.prototype={
$2(d,a0){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=null,e=a0.b
e=isFinite(e)?e:40+g.c.length*52
x=g.c
w=x.length
v=B.bRN(e,w)
u=40+v*w
w=g.a
t=g.d
s=y.u
r=A.b([new B.afM(w.a,t,f)],s)
for(q=x.length,p=g.b,o=p.d,p=p.c,n=A.a1(p).h("aC<1>"),m=n.h("x.E"),l=0;l<x.length;x.length===q||(0,A.F)(x),++l){k=x[l]
j=w.a
i=A.X(new A.aC(p,new B.aWQ(k),n),m)
r.push(new B.aeh(k,v,j,t,B.bRO(i),o,f))}h=A.e5(A.bs(A.b([new B.afI(x,v,f),A.cJ(r,C.aa,C.m,C.y,0,f)],s),C.L,C.m,C.T,0,C.u),f,u)
if(u<=e+0.5)return h
return A.Ny(h,f,C.bL)},
$S:792}
B.aWQ.prototype={
$1(d){return d.b===this.a},
$S:z+0}
B.b0q.prototype={
$0(){var x=this.a
return this.b.$2(x.c,(x.e+this.c)*60)},
$S:0};(function inheritance(){var x=a.inheritMany
x(A.D,[B.jJ,B.a6V])
x(A.bQ,[B.bfZ,B.bfX,B.bfY,B.bfW,B.aWQ])
x(A.fM,[B.bfV,B.aWR])
x(A.cH,[B.bfU,B.b0q])
x(A.E,[B.a9D,B.afI,B.afM,B.aeh,B.ajS])})()
A.cA(b.typeUniverse,JSON.parse('{"a9D":{"E":[],"c":[]},"afI":{"E":[],"c":[]},"afM":{"E":[],"c":[]},"aeh":{"E":[],"c":[]},"ajS":{"E":[],"c":[]}}'))
var y={w:A.C("fu"),k:A.C("n<+(jJ,l)>"),l:A.C("n<jJ>"),E:A.C("n<a6V>"),x:A.C("n<d>"),u:A.C("n<c>"),r:A.C("n<l>"),z:A.C("jJ")};(function constants(){var x=a.makeConstList
D.OJ=new A.iX(1,-1)
D.Qs=new A.m4(A.bQS(),A.C("m4<l>"))
D.Um=new A.dg(0,0,4,0)
D.UN=new A.aY(4,2,4,2)
D.a_7=new A.aA(61210,"MaterialIcons",null,!1)
D.lH=x([7,1,2,3,4,5,6],y.r)
D.ahB=new A.a8(7,16)
D.akw=new A.dY(40,null,null,null)})()};
(a=>{a["Cg56r7hMYDb5wAi91XDFMmdkjfc="]=a.current})($__dart_deferred_initializers__);