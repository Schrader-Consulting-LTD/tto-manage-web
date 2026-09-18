((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,D,E,B={
buP(d,e,f){var x,w,v,u,t,s,r=e.b
if(r<=0||e.a<=0||f.b<=0||f.a<=0)return C.Zl
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
x=null}return new B.a0l(w,x)},
HP:function HP(d,e){this.a=d
this.b=e},
a0l:function a0l(d,e){this.a=d
this.b=e},
bR7(d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
if(b2.ga6(0))return
x=b2.a
w=b2.c-x
v=b2.b
u=b2.d-v
t=new A.H(w,u)
s=a8.b
s===$&&A.a()
s=s.a
s===$&&A.a()
s=J.aW(s.a.width())
r=a8.b.a
r===$&&A.a()
r=J.aW(r.a.height())
if(a6==null)a6=C.PN
q=B.buP(a6,new A.H(s,r).du(0,b4),t)
p=q.a.ak(0,b4)
o=q.b
if(b3!==C.hc&&o.j(0,t))b3=C.hc
$.an()
n=A.bo()
n.f=!1
if(a3!=null)n.saEK(a3)
n.r=A.bnC(0,0,0,A.O(b1,0,1)).gm(0)
n.Q=a5
n.sR3(a9)
n.a=a0
m=o.a
l=(w-m)/2
k=o.b
j=(u-k)/2
u=d.a
u=x+(l+(a7?-u:u)*l)
v+=j+d.b*j
i=new A.P(u,v,u+m,v+k)
h=b3!==C.hc||a7
if(h)J.aW(a1.a.save())
v=b3===C.hc
if(!v)a1.a.clipRect(A.e9(b2),$.pY()[1],!0)
if(a7){g=-(x+w/2)
x=a1.a
x.translate(-g,0)
a1.xl(0,-1,1)
x.translate(g,0)}f=d.R0(p,new A.P(0,0,s,r))
if(v)a1.zW(a8,f,i,n)
else for(x=B.bLE(b2,i,b3),w=x.length,e=0;e<x.length;x.length===w||(0,A.F)(x),++e)a1.zW(a8,f,x[e],n)
if(h)a1.a.restore()},
bLE(d,e,f){var x,w,v,u,t,s,r=e.c,q=e.a,p=r-q,o=e.d,n=e.b,m=o-n,l=f!==C.a_Z
if(!l||f===C.a0_){x=D.e.f5((d.a-q)/p)
w=D.e.lZ((d.c-r)/p)}else{x=0
w=0}if(!l||f===C.a00){v=D.e.f5((d.b-n)/m)
u=D.e.lZ((d.d-o)/m)}else{v=0
u=0}r=A.b([],y.b)
for(t=x;t<=w;++t)for(q=t*p,s=v;s<=u;++s)r.push(e.eg(new A.k(q,s*m)))
return r},
Cb:function Cb(d,e){this.a=d
this.b=e}},C
J=c[1]
A=c[0]
D=c[2]
E=c[157]
B=a.updateHolder(c[74],B)
C=c[148]
B.HP.prototype={
K(){return"BoxFit."+this.b}}
B.a0l.prototype={}
B.Cb.prototype={
K(){return"ImageRepeat."+this.b}}
var z=a.updateTypes([]);(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.iS,[B.HP,B.Cb])
w(B.a0l,A.D)})()
var y={b:A.C("n<P>")};(function constants(){C.tK=new B.HP(0,"fill")
C.tL=new B.HP(1,"contain")
C.PN=new B.HP(6,"scaleDown")
C.Zl=new B.a0l(D.U,D.U)
C.a_Z=new B.Cb(0,"repeat")
C.a0_=new B.Cb(1,"repeatX")
C.a00=new B.Cb(2,"repeatY")
C.hc=new B.Cb(3,"noRepeat")
C.Sl=new A.V(0.14901960784313725,0,0,0,D.i)
C.Q3=new A.c9(0,D.af,C.Sl,E.ew,8)})()};
(a=>{a["P2pC8+r6kcZSEfoR7qEZeyNCk3s="]=a.current})($__dart_deferred_initializers__);