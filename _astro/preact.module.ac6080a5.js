var A,h,J,ne,P,j,K,$,E={},Q=[],oe=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,B=Array.isArray;function w(_,e){for(var t in e)_[t]=e[t];return _}function X(_){var e=_.parentNode;e&&e.removeChild(_)}function re(_,e,t){var r,l,o,s={};for(o in e)o=="key"?r=e[o]:o=="ref"?l=e[o]:s[o]=e[o];if(arguments.length>2&&(s.children=arguments.length>3?A.call(arguments,2):t),typeof _=="function"&&_.defaultProps!=null)for(o in _.defaultProps)s[o]===void 0&&(s[o]=_.defaultProps[o]);return M(_,s,r,l,null)}function M(_,e,t,r,l){var o={type:_,props:e,key:t,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:l??++J};return l==null&&h.vnode!=null&&h.vnode(o),o}function I(_){return _.children}function N(_,e){this.props=_,this.context=e}function U(_,e){if(e==null)return _.__?U(_.__,_.__.__k.indexOf(_)+1):null;for(var t;e<_.__k.length;e++)if((t=_.__k[e])!=null&&t.__e!=null)return t.__d||t.__e;return typeof _.type=="function"?U(_):null}function Y(_){var e,t;if((_=_.__)!=null&&_.__c!=null){for(_.__e=_.__c.base=null,e=0;e<_.__k.length;e++)if((t=_.__k[e])!=null&&t.__e!=null){_.__e=_.__c.base=t.__e;break}return Y(_)}}function z(_){(!_.__d&&(_.__d=!0)&&P.push(_)&&!H.__r++||j!==h.debounceRendering)&&((j=h.debounceRendering)||K)(H)}function H(){var _,e,t,r,l,o,s,u,c;for(P.sort($);_=P.shift();)_.__d&&(e=P.length,r=void 0,l=void 0,o=void 0,u=(s=(t=_).__v).__e,(c=t.__P)&&(r=[],l=[],(o=w({},s)).__v=s.__v+1,O(c,s,o,t.__n,c.ownerSVGElement!==void 0,s.__h!=null?[u]:null,r,u??U(s),s.__h,l),te(r,s,l),s.__e!=u&&Y(s)),P.length>e&&P.sort($));H.__r=0}function Z(_,e,t,r,l,o,s,u,c,x,d){var n,m,f,i,p,C,a,v,b,g=0,y=r&&r.__k||Q,T=y.length,S=T,D=e.length;for(t.__k=[],n=0;n<D;n++)(i=t.__k[n]=(i=e[n])==null||typeof i=="boolean"||typeof i=="function"?null:typeof i=="string"||typeof i=="number"||typeof i=="bigint"?M(null,i,null,null,i):B(i)?M(I,{children:i},null,null,null):i.__b>0?M(i.type,i.props,i.key,i.ref?i.ref:null,i.__v):i)!=null?(i.__=t,i.__b=t.__b+1,(v=le(i,y,a=n+g,S))===-1?f=E:(f=y[v]||E,y[v]=void 0,S--),O(_,i,f,l,o,s,u,c,x,d),p=i.__e,(m=i.ref)&&f.ref!=m&&(f.ref&&R(f.ref,null,i),d.push(m,i.__c||p,i)),p!=null&&(C==null&&(C=p),(b=f===E||f.__v===null)?v==-1&&g--:v!==a&&(v===a+1?g++:v>a?S>D-a?g+=v-a:g--:g=v<a&&v==a-1?v-a:0),a=n+g,typeof i.type!="function"||v===a&&f.__k!==i.__k?typeof i.type=="function"||v===a&&!b?i.__d!==void 0?(c=i.__d,i.__d=void 0):c=p.nextSibling:c=_e(_,p,c):c=ee(i,c,_),typeof t.type=="function"&&(t.__d=c))):(f=y[n])&&f.key==null&&f.__e&&(f.__e==c&&(f.__=r,c=U(f)),F(f,f,!1),y[n]=null);for(t.__e=C,n=T;n--;)y[n]!=null&&(typeof t.type=="function"&&y[n].__e!=null&&y[n].__e==t.__d&&(t.__d=y[n].__e.nextSibling),F(y[n],y[n]))}function ee(_,e,t){for(var r,l=_.__k,o=0;l&&o<l.length;o++)(r=l[o])&&(r.__=_,e=typeof r.type=="function"?ee(r,e,t):_e(t,r.__e,e));return e}function _e(_,e,t){return t==null||t.parentNode!==_?_.insertBefore(e,null):e==t&&e.parentNode!=null||_.insertBefore(e,t),e.nextSibling}function le(_,e,t,r){var l=_.key,o=_.type,s=t-1,u=t+1,c=e[t];if(c===null||c&&l==c.key&&o===c.type)return t;if(r>(c!=null?1:0))for(;s>=0||u<e.length;){if(s>=0){if((c=e[s])&&l==c.key&&o===c.type)return s;s--}if(u<e.length){if((c=e[u])&&l==c.key&&o===c.type)return u;u++}}return-1}function ie(_,e,t,r,l){var o;for(o in t)o==="children"||o==="key"||o in e||W(_,o,null,t[o],r);for(o in e)l&&typeof e[o]!="function"||o==="children"||o==="key"||o==="value"||o==="checked"||t[o]===e[o]||W(_,o,e[o],t[o],r)}function G(_,e,t){e[0]==="-"?_.setProperty(e,t??""):_[e]=t==null?"":typeof t!="number"||oe.test(e)?t:t+"px"}function W(_,e,t,r,l){var o;e:if(e==="style")if(typeof t=="string")_.style.cssText=t;else{if(typeof r=="string"&&(_.style.cssText=r=""),r)for(e in r)t&&e in t||G(_.style,e,"");if(t)for(e in t)r&&t[e]===r[e]||G(_.style,e,t[e])}else if(e[0]==="o"&&e[1]==="n")o=e!==(e=e.replace(/(PointerCapture)$|Capture$/,"$1")),e=e.toLowerCase()in _?e.toLowerCase().slice(2):e.slice(2),_.l||(_.l={}),_.l[e+o]=t,t?r?t.u=r.u:(t.u=Date.now(),_.addEventListener(e,o?q:V,o)):_.removeEventListener(e,o?q:V,o);else if(e!=="dangerouslySetInnerHTML"){if(l)e=e.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(e!=="width"&&e!=="height"&&e!=="href"&&e!=="list"&&e!=="form"&&e!=="tabIndex"&&e!=="download"&&e!=="rowSpan"&&e!=="colSpan"&&e!=="role"&&e in _)try{_[e]=t??"";break e}catch{}typeof t=="function"||(t==null||t===!1&&e[4]!=="-"?_.removeAttribute(e):_.setAttribute(e,t))}}function V(_){var e=this.l[_.type+!1];if(_.t){if(_.t<=e.u)return}else _.t=Date.now();return e(h.event?h.event(_):_)}function q(_){return this.l[_.type+!0](h.event?h.event(_):_)}function O(_,e,t,r,l,o,s,u,c,x){var d,n,m,f,i,p,C,a,v,b,g,y,T,S,D,k=e.type;if(e.constructor!==void 0)return null;t.__h!=null&&(c=t.__h,u=e.__e=t.__e,e.__h=null,o=[u]),(d=h.__b)&&d(e);e:if(typeof k=="function")try{if(a=e.props,v=(d=k.contextType)&&r[d.__c],b=d?v?v.props.value:d.__:r,t.__c?C=(n=e.__c=t.__c).__=n.__E:("prototype"in k&&k.prototype.render?e.__c=n=new k(a,b):(e.__c=n=new N(a,b),n.constructor=k,n.render=fe),v&&v.sub(n),n.props=a,n.state||(n.state={}),n.context=b,n.__n=r,m=n.__d=!0,n.__h=[],n._sb=[]),n.__s==null&&(n.__s=n.state),k.getDerivedStateFromProps!=null&&(n.__s==n.state&&(n.__s=w({},n.__s)),w(n.__s,k.getDerivedStateFromProps(a,n.__s))),f=n.props,i=n.state,n.__v=e,m)k.getDerivedStateFromProps==null&&n.componentWillMount!=null&&n.componentWillMount(),n.componentDidMount!=null&&n.__h.push(n.componentDidMount);else{if(k.getDerivedStateFromProps==null&&a!==f&&n.componentWillReceiveProps!=null&&n.componentWillReceiveProps(a,b),!n.__e&&(n.shouldComponentUpdate!=null&&n.shouldComponentUpdate(a,n.__s,b)===!1||e.__v===t.__v)){for(e.__v!==t.__v&&(n.props=a,n.state=n.__s,n.__d=!1),e.__e=t.__e,e.__k=t.__k,e.__k.forEach(function(L){L&&(L.__=e)}),g=0;g<n._sb.length;g++)n.__h.push(n._sb[g]);n._sb=[],n.__h.length&&s.push(n);break e}n.componentWillUpdate!=null&&n.componentWillUpdate(a,n.__s,b),n.componentDidUpdate!=null&&n.__h.push(function(){n.componentDidUpdate(f,i,p)})}if(n.context=b,n.props=a,n.__P=_,n.__e=!1,y=h.__r,T=0,"prototype"in k&&k.prototype.render){for(n.state=n.__s,n.__d=!1,y&&y(e),d=n.render(n.props,n.state,n.context),S=0;S<n._sb.length;S++)n.__h.push(n._sb[S]);n._sb=[]}else do n.__d=!1,y&&y(e),d=n.render(n.props,n.state,n.context),n.state=n.__s;while(n.__d&&++T<25);n.state=n.__s,n.getChildContext!=null&&(r=w(w({},r),n.getChildContext())),m||n.getSnapshotBeforeUpdate==null||(p=n.getSnapshotBeforeUpdate(f,i)),Z(_,B(D=d!=null&&d.type===I&&d.key==null?d.props.children:d)?D:[D],e,t,r,l,o,s,u,c,x),n.base=e.__e,e.__h=null,n.__h.length&&s.push(n),C&&(n.__E=n.__=null)}catch(L){e.__v=null,(c||o!=null)&&(e.__e=u,e.__h=!!c,o[o.indexOf(u)]=null),h.__e(L,e,t)}else o==null&&e.__v===t.__v?(e.__k=t.__k,e.__e=t.__e):e.__e=se(t.__e,e,t,r,l,o,s,c,x);(d=h.diffed)&&d(e)}function te(_,e,t){for(var r=0;r<t.length;r++)R(t[r],t[++r],t[++r]);h.__c&&h.__c(e,_),_.some(function(l){try{_=l.__h,l.__h=[],_.some(function(o){o.call(l)})}catch(o){h.__e(o,l.__v)}})}function se(_,e,t,r,l,o,s,u,c){var x,d,n,m=t.props,f=e.props,i=e.type,p=0;if(i==="svg"&&(l=!0),o!=null){for(;p<o.length;p++)if((x=o[p])&&"setAttribute"in x==!!i&&(i?x.localName===i:x.nodeType===3)){_=x,o[p]=null;break}}if(_==null){if(i===null)return document.createTextNode(f);_=l?document.createElementNS("http://www.w3.org/2000/svg",i):document.createElement(i,f.is&&f),o=null,u=!1}if(i===null)m===f||u&&_.data===f||(_.data=f);else{if(o=o&&A.call(_.childNodes),d=(m=t.props||E).dangerouslySetInnerHTML,n=f.dangerouslySetInnerHTML,!u){if(o!=null)for(m={},p=0;p<_.attributes.length;p++)m[_.attributes[p].name]=_.attributes[p].value;(n||d)&&(n&&(d&&n.__html==d.__html||n.__html===_.innerHTML)||(_.innerHTML=n&&n.__html||""))}if(ie(_,f,m,l,u),n)e.__k=[];else if(Z(_,B(p=e.props.children)?p:[p],e,t,r,l&&i!=="foreignObject",o,s,o?o[0]:t.__k&&U(t,0),u,c),o!=null)for(p=o.length;p--;)o[p]!=null&&X(o[p]);u||("value"in f&&(p=f.value)!==void 0&&(p!==_.value||i==="progress"&&!p||i==="option"&&p!==m.value)&&W(_,"value",p,m.value,!1),"checked"in f&&(p=f.checked)!==void 0&&p!==_.checked&&W(_,"checked",p,m.checked,!1))}return _}function R(_,e,t){try{typeof _=="function"?_(e):_.current=e}catch(r){h.__e(r,t)}}function F(_,e,t){var r,l;if(h.unmount&&h.unmount(_),(r=_.ref)&&(r.current&&r.current!==_.__e||R(r,null,e)),(r=_.__c)!=null){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(o){h.__e(o,e)}r.base=r.__P=null,_.__c=void 0}if(r=_.__k)for(l=0;l<r.length;l++)r[l]&&F(r[l],e,t||typeof _.type!="function");t||_.__e==null||X(_.__e),_.__=_.__e=_.__d=void 0}function fe(_,e,t){return this.constructor(_,t)}function ce(_,e,t){var r,l,o,s;h.__&&h.__(_,e),l=(r=typeof t=="function")?null:t&&t.__k||e.__k,o=[],s=[],O(e,_=(!r&&t||e).__k=re(I,null,[_]),l||E,E,e.ownerSVGElement!==void 0,!r&&t?[t]:l?null:e.firstChild?A.call(e.childNodes):null,o,!r&&t?t:l?l.__e:e.firstChild,r,s),te(o,_,s)}function pe(_,e){ce(_,e,pe)}A=Q.slice,h={__e:function(_,e,t,r){for(var l,o,s;e=e.__;)if((l=e.__c)&&!l.__)try{if((o=l.constructor)&&o.getDerivedStateFromError!=null&&(l.setState(o.getDerivedStateFromError(_)),s=l.__d),l.componentDidCatch!=null&&(l.componentDidCatch(_,r||{}),s=l.__d),s)return l.__E=l}catch(u){_=u}throw _}},J=0,ne=function(_){return _!=null&&_.constructor===void 0},N.prototype.setState=function(_,e){var t;t=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=w({},this.state),typeof _=="function"&&(_=_(w({},t),this.props)),_&&w(t,_),_!=null&&this.__v&&(e&&this._sb.push(e),z(this))},N.prototype.forceUpdate=function(_){this.__v&&(this.__e=!0,_&&this.__h.push(_),z(this))},N.prototype.render=I,P=[],K=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,$=function(_,e){return _.__v.__b-e.__v.__b},H.__r=0;export{ce as B,pe as E,N as b,I as k,h as l,ne as t,re as y};
