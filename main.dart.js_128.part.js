((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,D,E,B={
bwv(d,e,f){var x,w,v,u,t,s,r=e.b
if(r<=0||e.a<=0||f.b<=0||f.a<=0)return C.ZJ
switch(d.a){case 0:x=f
w=e
break
case 1:v=f.a
u=f.b
t=e.a
x=v/u>t/r?new A.H(t*u/r,u):new A.H(v,r*v/t)
w=e
break
case 2:v=f.a
u=f.b
t=e.a
w=v/u>t/r?new A.H(t,t*u/v):new A.H(r*v/u,r)
x=f
break
case 3:v=f.a
u=f.b
t=e.a
if(v/u>t/r){w=new A.H(t,t*u/v)
x=f}else{x=new A.H(v,r*v/t)
w=e}break
case 4:v=f.a
u=f.b
t=e.a
if(v/u>t/r){x=new A.H(t*u/r,u)
w=e}else{w=new A.H(r*v/u,r)
x=f}break
case 5:w=new A.H(Math.min(e.a,f.a),Math.min(r,f.b))
x=w
break
case 6:s=e.a/r
v=f.b
x=r>v?new A.H(v*s,v):e
r=f.a
if(x.a>r)x=new A.H(r,r/s)
w=e
break
default:w=null
x=null}return new B.a13(w,x)},
Il:function Il(d,e){this.a=d
this.b=e},
a13:function a13(d,e){this.a=d
this.b=e},
bT9(d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
if(b2.ga8(0))return
x=b2.a
w=b2.c-x
v=b2.b
u=b2.d-v
t=new A.H(w,u)
s=a8.b
s===$&&A.a()
s=s.a
s===$&&A.a()
s=J.aX(s.a.width())
r=a8.b.a
r===$&&A.a()
r=J.aX(r.a.height())
if(a6==null)a6=C.Q9
q=B.bwv(a6,new A.H(s,r).dv(0,b4),t)
p=q.a.ak(0,b4)
o=q.b
if(b3!==C.hn&&o.j(0,t))b3=C.hn
$.ap()
n=A.bs()
n.f=!1
if(a3!=null)n.saF3(a3)
n.r=A.bpi(0,0,0,A.O(b1,0,1)).gm(0)
n.Q=a5
n.sRf(a9)
n.a=a0
m=o.a
l=(w-m)/2
k=o.b
j=(u-k)/2
u=d.a
u=x+(l+(a7?-u:u)*l)
v+=j+d.b*j
i=new A.P(u,v,u+m,v+k)
h=b3!==C.hn||a7
if(h)J.aX(a1.a.save())
v=b3===C.hn
if(!v)a1.a.clipRect(A.eh(b2),$.q8()[1],!0)
if(a7){g=-(x+w/2)
x=a1.a
x.translate(-g,0)
a1.xq(0,-1,1)
x.translate(g,0)}f=d.Rc(p,new A.P(0,0,s,r))
if(v)a1.A2(a8,f,i,n)
else for(x=B.bNB(b2,i,b3),w=x.length,e=0;e<x.length;x.length===w||(0,A.F)(x),++e)a1.A2(a8,f,x[e],n)
if(h)a1.a.restore()},
bNB(d,e,f){var x,w,v,u,t,s,r=e.c,q=e.a,p=r-q,o=e.d,n=e.b,m=o-n,l=f!==C.a0o
if(!l||f===C.a0p){x=D.e.f4((d.a-q)/p)
w=D.e.m2((d.c-r)/p)}else{x=0
w=0}if(!l||f===C.a0q){v=D.e.f4((d.b-n)/m)
u=D.e.m2((d.d-o)/m)}else{v=0
u=0}r=A.b([],y.b)
for(t=x;t<=w;++t)for(q=t*p,s=v;s<=u;++s)r.push(e.eh(new A.q(q,s*m)))
return r},
Cu:function Cu(d,e){this.a=d
this.b=e}},C
J=c[1]
A=c[0]
D=c[2]
E=c[168]
B=a.updateHolder(c[79],B)
C=c[160]
B.Il.prototype={
K(){return"BoxFit."+this.b}}
B.a13.prototype={}
B.Cu.prototype={
K(){return"ImageRepeat."+this.b}}
var z=a.updateTypes([]);(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.iW,[B.Il,B.Cu])
w(B.a13,A.D)})()
var y={b:A.A("k<P>")};(function constants(){C.tZ=new B.Il(0,"fill")
C.u_=new B.Il(1,"contain")
C.Q9=new B.Il(6,"scaleDown")
C.ZJ=new B.a13(D.V,D.V)
C.a0o=new B.Cu(0,"repeat")
C.a0p=new B.Cu(1,"repeatX")
C.a0q=new B.Cu(2,"repeatY")
C.hn=new B.Cu(3,"noRepeat")
C.SJ=new A.V(0.14901960784313725,0,0,0,D.j)
C.Qq=new A.ca(0,D.ag,C.SJ,E.eD,8)})()};
(a=>{a["f/GLwCLYDEEN8ipxNZwmui6g5oU="]=a.current})($__dart_deferred_initializers__);