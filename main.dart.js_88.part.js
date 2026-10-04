((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,F,G,E,B={
bxq(d,e,f){var x,w,v,u,t,s,r,q,p,o,n,m=A.fV(J.dv(f,new B.bfw())),l=A.b([],y.o),k=m==null,j=k?null:m.f
j=J.aj(j==null?E.j3:j)
while(j.q()){x=j.gI(j)
if(x.f!==E.oj)l.push(x)}if(e!=null&&e.AK(d))return new B.qy(D.ox,e,null)
if(k||l.length===0)return D.SC
w=A.hh(d)*60+A.jp(d)
k=y.n
v=A.X(new A.as(l,new B.bfx(d,w),k),k.i("A.E"))
C.b.cR(v,new B.bfy())
u=A.bkg(A.kL(d),A.hA(d),A.mr(d),0,0,0,0)
if(v.length!==0){t=C.b.gT(v)
return new B.qy(D.oy,u.mK(A.et(0,0,0,0,t.e,0).a),t.f)}for(k=y.m,s=0;s<=7;++s){r=u.mK(864e8*s)
j=A.b([],k)
for(x=l.length,q=s<=0,p=0;p<l.length;l.length===x||(0,A.F)(l),++p){o=l[p]
if(o.c===A.yX(r))n=!q||o.d>w
else n=!1
if(n)j.push(o.d)}C.b.i3(j)
if(j.length!==0)return new B.qy(D.oz,r.mK(6e7*C.b.gT(j)),null)}return D.uC},
BO:function BO(d,e){this.a=d
this.b=e},
qy:function qy(d,e,f){this.a=d
this.b=e
this.c=f},
avn:function avn(){},
bfw:function bfw(){},
bfx:function bfx(d,e){this.a=d
this.b=e},
bfy:function bfy(){},
bpB(d,e,f,g,h,i,j,k,l,m){return new B.XT(d,l,f,e,j,k,i,g,m,h,null)},
XT:function XT(d,e,f,g,h,i,j,k,l,m,n){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.z=l
_.Q=m
_.a=n},
at_:function at_(d,e){this.a=d
this.b=e},
IT:function IT(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g}},D,H
J=c[1]
A=c[0]
C=c[2]
F=c[60]
G=c[118]
E=c[126]
B=a.updateHolder(c[40],B)
D=c[148]
H=c[130]
B.BO.prototype={
K(){return"ClassNowKind."+this.b}}
B.qy.prototype={
ge3(d){var x
switch(this.a.a){case 0:x=F.I3(C.iq)
break
case 1:x=F.I3(C.ol)
break
case 2:x=F.I3(C.ok)
break
case 3:x=C.bs
break
default:x=null}return x},
gRj(d){var x
switch(this.a.a){case 0:x=D.a_V
break
case 1:x=D.a_r
break
case 2:x=D.wn
break
case 3:x=G.wx
break
default:x=null}return x},
gjA(d){var x
switch(this.a.a){case 0:x=A.f("class_now_temporarily_open")
break
case 1:x=this.c===E.ip?A.f("class_now_blocked_calls"):A.f("class_now_blocked")
break
case 2:x=A.f("class_now_open")
break
case 3:x=A.f("class_now_no_plan")
break
default:x=null}return x},
gaHo(d){var x,w,v=this.b,u=new B.avn(),t=this.a
$label0$0:{if(D.ox===t||D.oy===t){if(v==null)x=""
else{x=A.f("class_now_until")
w=u.$1(v)
x=A.aW(x,"{time}",w)}break $label0$0}if(D.oz===t){if(v==null)x=A.f("class_now_no_more_blocks")
else{x=A.f("class_now_next_block")
w=A.f("weekday_short_"+A.yX(v))
x=A.aW(x,"{day}",w)
w=u.$1(v)
x=A.aW(x,"{time}",w)}break $label0$0}if(D.uB===t){x=A.f("class_now_no_plan_hint")
break $label0$0}x=null}return x}}
B.XT.prototype={
u(a4){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f="lesson_single",e="lessons_option",d="end_assignment",a0=h.z?A.f("assigned_teachers"):g,a1=A.b([],y.e),a2=h.c,a3=J.aA(a2)
if(a3.ga8(a2))a1.push(A.bU(g,!0,!0,G.li,g,0,!1,g,g,!1,!1,g,2,g,A.f("no_assigned_teachers"),g,g))
else for(x=A.je(a2,0,y.b),w=J.aj(x.a),v=x.b,x=new A.dq(w,v,A.t(x).i("dq<1>")),u=h.f,t=h.d,s=h.e,r=h.w;x.q();){q={}
p=x.c
p=p>=0?new A.a8(v+p,w.gI(w)):A.U(A.bH())
q.a=null
o=q.a=p.b
n=o.e
if(n.length===0)n=o.d
m=o.f
if(m===1){m=$.co()
l=m.a
l=$.cl.h(0,l)
l=l==null?g:l.h(0,f)
if(l==null)l=f
k=l
l=m
m=k}else{l=$.co()
j=l.a
j=$.cl.h(0,j)
j=j==null?g:j.h(0,e)
if(j==null)j=e
m=A.aW(j,"{n}",""+m)}j=o.w
if(j==null)j=g
else{i=A.Q(a4).ok.Q
j=new A.wE(j,t,s,r,i==null?g:i.aH(A.Q(a4).ax.k3.bE(0.6)),g)}if(u.$1(o)){l=l.a
l=$.cl.h(0,l)
l=l==null?g:l.h(0,d)
if(l==null)l=d
q=new A.xb(C.hm,l,new B.at_(q,h),C.cy,g,24,!0,g)}else q=g
a1.push(new A.iQ(C.lj,g,p.a,g,n,m,j,q,g,!1,!0,!1,!1,!1,2,g,g,g))}x=h.x
if(x!=null){a2=a3.gA(a2)
a3=A.f("assign_to_class")
a1.push(A.bU(g,!1,!0,H.hi,g,a2,!1,g,x,!1,!0,A.f("tap_to_assign"),2,g,a3,g,g))}return A.ch(a1,h.y,h.Q,g,!0,a0,g)}}
B.IT.prototype={
u(d){var x,w,v,u=null,t=A.Q(d),s=this.c,r=s.gaHo(0),q=s.ge3(0),p=A.ii(s.gRj(0),C.m,u,42)
s=s.gjA(0)
x=t.ok
w=x.r
v=y.e
w=A.b([A.ay(s,u,u,u,w==null?u:w.aH(C.m),u,u,u)],v)
if(r.length!==0){s=x.y
C.b.O(w,A.b([C.cS,A.ay(r,u,u,u,s==null?u:s.aH(C.m),u,u,u)],v))}s=this.d
if(s!=null){x=x.Q
C.b.O(w,A.b([C.cS,A.ay(s,u,u,u,x==null?u:x.aH(C.m),u,u,u)],v))}s=A.b([p,C.jD,A.d7(A.bd(w,C.a5,C.l,C.t,0,C.r),1)],v)
p=this.e
if(p!=null)C.b.O(s,A.b([C.cq,p],v))
return A.j9(A.cH(s,C.E,C.l,C.t,0,u),q,u,u,!1,C.ca,u)}}
var z=a.updateTypes(["x(cG)","u(cG,cG)"])
B.avn.prototype={
$1(d){return A.q3(A.hh(d)*60+A.jp(d))},
$S:268}
B.bfw.prototype={
$1(d){return d.e},
$S:35}
B.bfx.prototype={
$1(d){var x
if(d.c===A.yX(this.a)){x=this.b
x=d.d<=x&&x<d.e}else x=!1
return x},
$S:z+0}
B.bfy.prototype={
$2(d,e){var x=e.f===E.k5?1:0,w=x-(d.f===E.k5?1:0)
return w!==0?w:C.d.b9(e.e,d.e)},
$S:z+1}
B.at_.prototype={
$0(){return this.b.r.$1(this.a.a)},
$S:0};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.BO,A.iA)
x(B.qy,A.D)
w(A.bG,[B.avn,B.bfw,B.bfx])
x(B.bfy,A.eE)
w(A.E,[B.XT,B.IT])
x(B.at_,A.cp)})()
A.cj(b.typeUniverse,JSON.parse('{"XT":{"E":[],"c":[]},"IT":{"E":[],"c":[]}}'))
var y={b:A.y("dD"),o:A.y("p<cG>"),e:A.y("p<c>"),m:A.y("p<u>"),n:A.y("as<cG>")};(function constants(){D.ox=new B.BO(0,"temporarilyOpen")
D.oy=new B.BO(1,"blocked")
D.oz=new B.BO(2,"open")
D.uB=new B.BO(3,"noPlan")
D.uC=new B.qy(D.oz,null,null)
D.SC=new B.qy(D.uB,null,null)
D.a_r=new A.ap(58286,"MaterialIcons",null,!1)
D.wn=new A.ap(58288,"MaterialIcons",null,!1)
D.a_V=new A.ap(61845,"MaterialIcons",null,!1)})()};
(a=>{a["Sq1gNa7D6CojKEhdpfL3kx4NFcE="]=a.current})($__dart_deferred_initializers__);