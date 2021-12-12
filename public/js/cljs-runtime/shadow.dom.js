goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_36141 = (function (this$){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4551__auto__.call(null,this$));
} else {
var m__4549__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4549__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_36141(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_36142 = (function (this$){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4551__auto__.call(null,this$));
} else {
var m__4549__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4549__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_36142(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__34897 = coll;
var G__34898 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__34897,G__34898) : shadow.dom.lazy_native_coll_seq.call(null,G__34897,G__34898));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4253__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__34926 = arguments.length;
switch (G__34926) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__34933 = arguments.length;
switch (G__34933) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__34940 = arguments.length;
switch (G__34940) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__34954 = arguments.length;
switch (G__34954) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__34968 = arguments.length;
switch (G__34968) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__34980 = arguments.length;
switch (G__34980) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4253__auto__ = (!((typeof document !== 'undefined')));
if(or__4253__auto__){
return or__4253__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e34989){if((e34989 instanceof Object)){
var e = e34989;
return console.log("didnt support attachEvent",el,e);
} else {
throw e34989;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4253__auto__ = (!((typeof document !== 'undefined')));
if(or__4253__auto__){
return or__4253__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__35004 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__35005 = null;
var count__35006 = (0);
var i__35007 = (0);
while(true){
if((i__35007 < count__35006)){
var el = chunk__35005.cljs$core$IIndexed$_nth$arity$2(null,i__35007);
var handler_36157__$1 = ((function (seq__35004,chunk__35005,count__35006,i__35007,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__35004,chunk__35005,count__35006,i__35007,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_36157__$1);


var G__36161 = seq__35004;
var G__36162 = chunk__35005;
var G__36163 = count__35006;
var G__36164 = (i__35007 + (1));
seq__35004 = G__36161;
chunk__35005 = G__36162;
count__35006 = G__36163;
i__35007 = G__36164;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__35004);
if(temp__5753__auto__){
var seq__35004__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35004__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__35004__$1);
var G__36167 = cljs.core.chunk_rest(seq__35004__$1);
var G__36168 = c__4679__auto__;
var G__36169 = cljs.core.count(c__4679__auto__);
var G__36170 = (0);
seq__35004 = G__36167;
chunk__35005 = G__36168;
count__35006 = G__36169;
i__35007 = G__36170;
continue;
} else {
var el = cljs.core.first(seq__35004__$1);
var handler_36171__$1 = ((function (seq__35004,chunk__35005,count__35006,i__35007,el,seq__35004__$1,temp__5753__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__35004,chunk__35005,count__35006,i__35007,el,seq__35004__$1,temp__5753__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_36171__$1);


var G__36173 = cljs.core.next(seq__35004__$1);
var G__36174 = null;
var G__36175 = (0);
var G__36176 = (0);
seq__35004 = G__36173;
chunk__35005 = G__36174;
count__35006 = G__36175;
i__35007 = G__36176;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__35022 = arguments.length;
switch (G__35022) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__35045 = cljs.core.seq(events);
var chunk__35046 = null;
var count__35047 = (0);
var i__35048 = (0);
while(true){
if((i__35048 < count__35047)){
var vec__35060 = chunk__35046.cljs$core$IIndexed$_nth$arity$2(null,i__35048);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35060,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35060,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__36184 = seq__35045;
var G__36185 = chunk__35046;
var G__36186 = count__35047;
var G__36187 = (i__35048 + (1));
seq__35045 = G__36184;
chunk__35046 = G__36185;
count__35047 = G__36186;
i__35048 = G__36187;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__35045);
if(temp__5753__auto__){
var seq__35045__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35045__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__35045__$1);
var G__36188 = cljs.core.chunk_rest(seq__35045__$1);
var G__36189 = c__4679__auto__;
var G__36190 = cljs.core.count(c__4679__auto__);
var G__36191 = (0);
seq__35045 = G__36188;
chunk__35046 = G__36189;
count__35047 = G__36190;
i__35048 = G__36191;
continue;
} else {
var vec__35067 = cljs.core.first(seq__35045__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35067,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35067,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__36192 = cljs.core.next(seq__35045__$1);
var G__36193 = null;
var G__36194 = (0);
var G__36195 = (0);
seq__35045 = G__36192;
chunk__35046 = G__36193;
count__35047 = G__36194;
i__35048 = G__36195;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__35074 = cljs.core.seq(styles);
var chunk__35075 = null;
var count__35076 = (0);
var i__35077 = (0);
while(true){
if((i__35077 < count__35076)){
var vec__35090 = chunk__35075.cljs$core$IIndexed$_nth$arity$2(null,i__35077);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35090,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35090,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__36198 = seq__35074;
var G__36199 = chunk__35075;
var G__36200 = count__35076;
var G__36201 = (i__35077 + (1));
seq__35074 = G__36198;
chunk__35075 = G__36199;
count__35076 = G__36200;
i__35077 = G__36201;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__35074);
if(temp__5753__auto__){
var seq__35074__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35074__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__35074__$1);
var G__36203 = cljs.core.chunk_rest(seq__35074__$1);
var G__36204 = c__4679__auto__;
var G__36205 = cljs.core.count(c__4679__auto__);
var G__36206 = (0);
seq__35074 = G__36203;
chunk__35075 = G__36204;
count__35076 = G__36205;
i__35077 = G__36206;
continue;
} else {
var vec__35095 = cljs.core.first(seq__35074__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35095,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35095,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__36209 = cljs.core.next(seq__35074__$1);
var G__36210 = null;
var G__36211 = (0);
var G__36212 = (0);
seq__35074 = G__36209;
chunk__35075 = G__36210;
count__35076 = G__36211;
i__35077 = G__36212;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__35107_36214 = key;
var G__35107_36215__$1 = (((G__35107_36214 instanceof cljs.core.Keyword))?G__35107_36214.fqn:null);
switch (G__35107_36215__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_36219 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4253__auto__ = goog.string.startsWith(ks_36219,"data-");
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return goog.string.startsWith(ks_36219,"aria-");
}
})())){
el.setAttribute(ks_36219,value);
} else {
(el[ks_36219] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__35145){
var map__35146 = p__35145;
var map__35146__$1 = cljs.core.__destructure_map(map__35146);
var props = map__35146__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35146__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__35147 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35147,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35147,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35147,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__35158 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__35158,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__35158;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__35165 = arguments.length;
switch (G__35165) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5753__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5753__auto__)){
var n = temp__5753__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5753__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5753__auto__)){
var n = temp__5753__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__35184){
var vec__35185 = p__35184;
var seq__35186 = cljs.core.seq(vec__35185);
var first__35187 = cljs.core.first(seq__35186);
var seq__35186__$1 = cljs.core.next(seq__35186);
var nn = first__35187;
var first__35187__$1 = cljs.core.first(seq__35186__$1);
var seq__35186__$2 = cljs.core.next(seq__35186__$1);
var np = first__35187__$1;
var nc = seq__35186__$2;
var node = vec__35185;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__35190 = nn;
var G__35191 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__35190,G__35191) : create_fn.call(null,G__35190,G__35191));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__35194 = nn;
var G__35195 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__35194,G__35195) : create_fn.call(null,G__35194,G__35195));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__35199 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35199,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35199,(1),null);
var seq__35202_36239 = cljs.core.seq(node_children);
var chunk__35203_36240 = null;
var count__35204_36241 = (0);
var i__35205_36242 = (0);
while(true){
if((i__35205_36242 < count__35204_36241)){
var child_struct_36244 = chunk__35203_36240.cljs$core$IIndexed$_nth$arity$2(null,i__35205_36242);
var children_36245 = shadow.dom.dom_node(child_struct_36244);
if(cljs.core.seq_QMARK_(children_36245)){
var seq__35351_36246 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_36245));
var chunk__35356_36247 = null;
var count__35357_36248 = (0);
var i__35358_36249 = (0);
while(true){
if((i__35358_36249 < count__35357_36248)){
var child_36252 = chunk__35356_36247.cljs$core$IIndexed$_nth$arity$2(null,i__35358_36249);
if(cljs.core.truth_(child_36252)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_36252);


var G__36253 = seq__35351_36246;
var G__36254 = chunk__35356_36247;
var G__36255 = count__35357_36248;
var G__36256 = (i__35358_36249 + (1));
seq__35351_36246 = G__36253;
chunk__35356_36247 = G__36254;
count__35357_36248 = G__36255;
i__35358_36249 = G__36256;
continue;
} else {
var G__36257 = seq__35351_36246;
var G__36258 = chunk__35356_36247;
var G__36259 = count__35357_36248;
var G__36260 = (i__35358_36249 + (1));
seq__35351_36246 = G__36257;
chunk__35356_36247 = G__36258;
count__35357_36248 = G__36259;
i__35358_36249 = G__36260;
continue;
}
} else {
var temp__5753__auto___36261 = cljs.core.seq(seq__35351_36246);
if(temp__5753__auto___36261){
var seq__35351_36264__$1 = temp__5753__auto___36261;
if(cljs.core.chunked_seq_QMARK_(seq__35351_36264__$1)){
var c__4679__auto___36265 = cljs.core.chunk_first(seq__35351_36264__$1);
var G__36266 = cljs.core.chunk_rest(seq__35351_36264__$1);
var G__36267 = c__4679__auto___36265;
var G__36268 = cljs.core.count(c__4679__auto___36265);
var G__36269 = (0);
seq__35351_36246 = G__36266;
chunk__35356_36247 = G__36267;
count__35357_36248 = G__36268;
i__35358_36249 = G__36269;
continue;
} else {
var child_36270 = cljs.core.first(seq__35351_36264__$1);
if(cljs.core.truth_(child_36270)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_36270);


var G__36273 = cljs.core.next(seq__35351_36264__$1);
var G__36274 = null;
var G__36275 = (0);
var G__36276 = (0);
seq__35351_36246 = G__36273;
chunk__35356_36247 = G__36274;
count__35357_36248 = G__36275;
i__35358_36249 = G__36276;
continue;
} else {
var G__36277 = cljs.core.next(seq__35351_36264__$1);
var G__36278 = null;
var G__36279 = (0);
var G__36280 = (0);
seq__35351_36246 = G__36277;
chunk__35356_36247 = G__36278;
count__35357_36248 = G__36279;
i__35358_36249 = G__36280;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_36245);
}


var G__36281 = seq__35202_36239;
var G__36282 = chunk__35203_36240;
var G__36283 = count__35204_36241;
var G__36284 = (i__35205_36242 + (1));
seq__35202_36239 = G__36281;
chunk__35203_36240 = G__36282;
count__35204_36241 = G__36283;
i__35205_36242 = G__36284;
continue;
} else {
var temp__5753__auto___36285 = cljs.core.seq(seq__35202_36239);
if(temp__5753__auto___36285){
var seq__35202_36287__$1 = temp__5753__auto___36285;
if(cljs.core.chunked_seq_QMARK_(seq__35202_36287__$1)){
var c__4679__auto___36289 = cljs.core.chunk_first(seq__35202_36287__$1);
var G__36290 = cljs.core.chunk_rest(seq__35202_36287__$1);
var G__36291 = c__4679__auto___36289;
var G__36292 = cljs.core.count(c__4679__auto___36289);
var G__36293 = (0);
seq__35202_36239 = G__36290;
chunk__35203_36240 = G__36291;
count__35204_36241 = G__36292;
i__35205_36242 = G__36293;
continue;
} else {
var child_struct_36294 = cljs.core.first(seq__35202_36287__$1);
var children_36295 = shadow.dom.dom_node(child_struct_36294);
if(cljs.core.seq_QMARK_(children_36295)){
var seq__35381_36296 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_36295));
var chunk__35383_36297 = null;
var count__35384_36298 = (0);
var i__35385_36299 = (0);
while(true){
if((i__35385_36299 < count__35384_36298)){
var child_36300 = chunk__35383_36297.cljs$core$IIndexed$_nth$arity$2(null,i__35385_36299);
if(cljs.core.truth_(child_36300)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_36300);


var G__36301 = seq__35381_36296;
var G__36302 = chunk__35383_36297;
var G__36303 = count__35384_36298;
var G__36304 = (i__35385_36299 + (1));
seq__35381_36296 = G__36301;
chunk__35383_36297 = G__36302;
count__35384_36298 = G__36303;
i__35385_36299 = G__36304;
continue;
} else {
var G__36307 = seq__35381_36296;
var G__36308 = chunk__35383_36297;
var G__36309 = count__35384_36298;
var G__36310 = (i__35385_36299 + (1));
seq__35381_36296 = G__36307;
chunk__35383_36297 = G__36308;
count__35384_36298 = G__36309;
i__35385_36299 = G__36310;
continue;
}
} else {
var temp__5753__auto___36312__$1 = cljs.core.seq(seq__35381_36296);
if(temp__5753__auto___36312__$1){
var seq__35381_36313__$1 = temp__5753__auto___36312__$1;
if(cljs.core.chunked_seq_QMARK_(seq__35381_36313__$1)){
var c__4679__auto___36314 = cljs.core.chunk_first(seq__35381_36313__$1);
var G__36315 = cljs.core.chunk_rest(seq__35381_36313__$1);
var G__36316 = c__4679__auto___36314;
var G__36317 = cljs.core.count(c__4679__auto___36314);
var G__36318 = (0);
seq__35381_36296 = G__36315;
chunk__35383_36297 = G__36316;
count__35384_36298 = G__36317;
i__35385_36299 = G__36318;
continue;
} else {
var child_36319 = cljs.core.first(seq__35381_36313__$1);
if(cljs.core.truth_(child_36319)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_36319);


var G__36322 = cljs.core.next(seq__35381_36313__$1);
var G__36323 = null;
var G__36324 = (0);
var G__36325 = (0);
seq__35381_36296 = G__36322;
chunk__35383_36297 = G__36323;
count__35384_36298 = G__36324;
i__35385_36299 = G__36325;
continue;
} else {
var G__36326 = cljs.core.next(seq__35381_36313__$1);
var G__36327 = null;
var G__36328 = (0);
var G__36329 = (0);
seq__35381_36296 = G__36326;
chunk__35383_36297 = G__36327;
count__35384_36298 = G__36328;
i__35385_36299 = G__36329;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_36295);
}


var G__36332 = cljs.core.next(seq__35202_36287__$1);
var G__36333 = null;
var G__36334 = (0);
var G__36335 = (0);
seq__35202_36239 = G__36332;
chunk__35203_36240 = G__36333;
count__35204_36241 = G__36334;
i__35205_36242 = G__36335;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__35427 = cljs.core.seq(node);
var chunk__35428 = null;
var count__35429 = (0);
var i__35430 = (0);
while(true){
if((i__35430 < count__35429)){
var n = chunk__35428.cljs$core$IIndexed$_nth$arity$2(null,i__35430);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__36349 = seq__35427;
var G__36350 = chunk__35428;
var G__36351 = count__35429;
var G__36352 = (i__35430 + (1));
seq__35427 = G__36349;
chunk__35428 = G__36350;
count__35429 = G__36351;
i__35430 = G__36352;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__35427);
if(temp__5753__auto__){
var seq__35427__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35427__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__35427__$1);
var G__36354 = cljs.core.chunk_rest(seq__35427__$1);
var G__36355 = c__4679__auto__;
var G__36356 = cljs.core.count(c__4679__auto__);
var G__36357 = (0);
seq__35427 = G__36354;
chunk__35428 = G__36355;
count__35429 = G__36356;
i__35430 = G__36357;
continue;
} else {
var n = cljs.core.first(seq__35427__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__36359 = cljs.core.next(seq__35427__$1);
var G__36360 = null;
var G__36361 = (0);
var G__36362 = (0);
seq__35427 = G__36359;
chunk__35428 = G__36360;
count__35429 = G__36361;
i__35430 = G__36362;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__35471 = arguments.length;
switch (G__35471) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__35488 = arguments.length;
switch (G__35488) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__35555 = arguments.length;
switch (G__35555) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4253__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4870__auto__ = [];
var len__4864__auto___36379 = arguments.length;
var i__4865__auto___36380 = (0);
while(true){
if((i__4865__auto___36380 < len__4864__auto___36379)){
args__4870__auto__.push((arguments[i__4865__auto___36380]));

var G__36381 = (i__4865__auto___36380 + (1));
i__4865__auto___36380 = G__36381;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__35586_36384 = cljs.core.seq(nodes);
var chunk__35587_36385 = null;
var count__35588_36386 = (0);
var i__35589_36387 = (0);
while(true){
if((i__35589_36387 < count__35588_36386)){
var node_36389 = chunk__35587_36385.cljs$core$IIndexed$_nth$arity$2(null,i__35589_36387);
fragment.appendChild(shadow.dom._to_dom(node_36389));


var G__36391 = seq__35586_36384;
var G__36392 = chunk__35587_36385;
var G__36393 = count__35588_36386;
var G__36394 = (i__35589_36387 + (1));
seq__35586_36384 = G__36391;
chunk__35587_36385 = G__36392;
count__35588_36386 = G__36393;
i__35589_36387 = G__36394;
continue;
} else {
var temp__5753__auto___36395 = cljs.core.seq(seq__35586_36384);
if(temp__5753__auto___36395){
var seq__35586_36396__$1 = temp__5753__auto___36395;
if(cljs.core.chunked_seq_QMARK_(seq__35586_36396__$1)){
var c__4679__auto___36397 = cljs.core.chunk_first(seq__35586_36396__$1);
var G__36398 = cljs.core.chunk_rest(seq__35586_36396__$1);
var G__36399 = c__4679__auto___36397;
var G__36400 = cljs.core.count(c__4679__auto___36397);
var G__36401 = (0);
seq__35586_36384 = G__36398;
chunk__35587_36385 = G__36399;
count__35588_36386 = G__36400;
i__35589_36387 = G__36401;
continue;
} else {
var node_36404 = cljs.core.first(seq__35586_36396__$1);
fragment.appendChild(shadow.dom._to_dom(node_36404));


var G__36405 = cljs.core.next(seq__35586_36396__$1);
var G__36406 = null;
var G__36407 = (0);
var G__36408 = (0);
seq__35586_36384 = G__36405;
chunk__35587_36385 = G__36406;
count__35588_36386 = G__36407;
i__35589_36387 = G__36408;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq35581){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq35581));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__35608_36412 = cljs.core.seq(scripts);
var chunk__35609_36413 = null;
var count__35610_36414 = (0);
var i__35611_36415 = (0);
while(true){
if((i__35611_36415 < count__35610_36414)){
var vec__35636_36416 = chunk__35609_36413.cljs$core$IIndexed$_nth$arity$2(null,i__35611_36415);
var script_tag_36417 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35636_36416,(0),null);
var script_body_36418 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35636_36416,(1),null);
eval(script_body_36418);


var G__36422 = seq__35608_36412;
var G__36423 = chunk__35609_36413;
var G__36424 = count__35610_36414;
var G__36425 = (i__35611_36415 + (1));
seq__35608_36412 = G__36422;
chunk__35609_36413 = G__36423;
count__35610_36414 = G__36424;
i__35611_36415 = G__36425;
continue;
} else {
var temp__5753__auto___36426 = cljs.core.seq(seq__35608_36412);
if(temp__5753__auto___36426){
var seq__35608_36427__$1 = temp__5753__auto___36426;
if(cljs.core.chunked_seq_QMARK_(seq__35608_36427__$1)){
var c__4679__auto___36429 = cljs.core.chunk_first(seq__35608_36427__$1);
var G__36430 = cljs.core.chunk_rest(seq__35608_36427__$1);
var G__36431 = c__4679__auto___36429;
var G__36432 = cljs.core.count(c__4679__auto___36429);
var G__36433 = (0);
seq__35608_36412 = G__36430;
chunk__35609_36413 = G__36431;
count__35610_36414 = G__36432;
i__35611_36415 = G__36433;
continue;
} else {
var vec__35645_36434 = cljs.core.first(seq__35608_36427__$1);
var script_tag_36435 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35645_36434,(0),null);
var script_body_36436 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35645_36434,(1),null);
eval(script_body_36436);


var G__36437 = cljs.core.next(seq__35608_36427__$1);
var G__36438 = null;
var G__36439 = (0);
var G__36440 = (0);
seq__35608_36412 = G__36437;
chunk__35609_36413 = G__36438;
count__35610_36414 = G__36439;
i__35611_36415 = G__36440;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__35649){
var vec__35650 = p__35649;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35650,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35650,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__35665 = arguments.length;
switch (G__35665) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__35687 = cljs.core.seq(style_keys);
var chunk__35688 = null;
var count__35689 = (0);
var i__35690 = (0);
while(true){
if((i__35690 < count__35689)){
var it = chunk__35688.cljs$core$IIndexed$_nth$arity$2(null,i__35690);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__36456 = seq__35687;
var G__36457 = chunk__35688;
var G__36458 = count__35689;
var G__36459 = (i__35690 + (1));
seq__35687 = G__36456;
chunk__35688 = G__36457;
count__35689 = G__36458;
i__35690 = G__36459;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__35687);
if(temp__5753__auto__){
var seq__35687__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35687__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__35687__$1);
var G__36465 = cljs.core.chunk_rest(seq__35687__$1);
var G__36466 = c__4679__auto__;
var G__36467 = cljs.core.count(c__4679__auto__);
var G__36468 = (0);
seq__35687 = G__36465;
chunk__35688 = G__36466;
count__35689 = G__36467;
i__35690 = G__36468;
continue;
} else {
var it = cljs.core.first(seq__35687__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__36470 = cljs.core.next(seq__35687__$1);
var G__36471 = null;
var G__36472 = (0);
var G__36473 = (0);
seq__35687 = G__36470;
chunk__35688 = G__36471;
count__35689 = G__36472;
i__35690 = G__36473;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4502__auto__,k__4503__auto__){
var self__ = this;
var this__4502__auto____$1 = this;
return this__4502__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4503__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4504__auto__,k35710,else__4505__auto__){
var self__ = this;
var this__4504__auto____$1 = this;
var G__35722 = k35710;
var G__35722__$1 = (((G__35722 instanceof cljs.core.Keyword))?G__35722.fqn:null);
switch (G__35722__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k35710,else__4505__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4522__auto__,f__4523__auto__,init__4524__auto__){
var self__ = this;
var this__4522__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4525__auto__,p__35726){
var vec__35728 = p__35726;
var k__4526__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35728,(0),null);
var v__4527__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35728,(1),null);
return (f__4523__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4523__auto__.cljs$core$IFn$_invoke$arity$3(ret__4525__auto__,k__4526__auto__,v__4527__auto__) : f__4523__auto__.call(null,ret__4525__auto__,k__4526__auto__,v__4527__auto__));
}),init__4524__auto__,this__4522__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4517__auto__,writer__4518__auto__,opts__4519__auto__){
var self__ = this;
var this__4517__auto____$1 = this;
var pr_pair__4520__auto__ = (function (keyval__4521__auto__){
return cljs.core.pr_sequential_writer(writer__4518__auto__,cljs.core.pr_writer,""," ","",opts__4519__auto__,keyval__4521__auto__);
});
return cljs.core.pr_sequential_writer(writer__4518__auto__,pr_pair__4520__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4519__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__35709){
var self__ = this;
var G__35709__$1 = this;
return (new cljs.core.RecordIter((0),G__35709__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4500__auto__){
var self__ = this;
var this__4500__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4497__auto__){
var self__ = this;
var this__4497__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4506__auto__){
var self__ = this;
var this__4506__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4498__auto__){
var self__ = this;
var this__4498__auto____$1 = this;
var h__4360__auto__ = self__.__hash;
if((!((h__4360__auto__ == null)))){
return h__4360__auto__;
} else {
var h__4360__auto____$1 = (function (coll__4499__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4499__auto__));
})(this__4498__auto____$1);
(self__.__hash = h__4360__auto____$1);

return h__4360__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this35711,other35712){
var self__ = this;
var this35711__$1 = this;
return (((!((other35712 == null)))) && ((((this35711__$1.constructor === other35712.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35711__$1.x,other35712.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35711__$1.y,other35712.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35711__$1.__extmap,other35712.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4512__auto__,k__4513__auto__){
var self__ = this;
var this__4512__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4513__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4512__auto____$1),self__.__meta),k__4513__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4513__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4509__auto__,k35710){
var self__ = this;
var this__4509__auto____$1 = this;
var G__35757 = k35710;
var G__35757__$1 = (((G__35757 instanceof cljs.core.Keyword))?G__35757.fqn:null);
switch (G__35757__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k35710);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4510__auto__,k__4511__auto__,G__35709){
var self__ = this;
var this__4510__auto____$1 = this;
var pred__35761 = cljs.core.keyword_identical_QMARK_;
var expr__35762 = k__4511__auto__;
if(cljs.core.truth_((pred__35761.cljs$core$IFn$_invoke$arity$2 ? pred__35761.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__35762) : pred__35761.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__35762)))){
return (new shadow.dom.Coordinate(G__35709,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__35761.cljs$core$IFn$_invoke$arity$2 ? pred__35761.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__35762) : pred__35761.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__35762)))){
return (new shadow.dom.Coordinate(self__.x,G__35709,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4511__auto__,G__35709),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4515__auto__){
var self__ = this;
var this__4515__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4501__auto__,G__35709){
var self__ = this;
var this__4501__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__35709,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4507__auto__,entry__4508__auto__){
var self__ = this;
var this__4507__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4508__auto__)){
return this__4507__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4508__auto__,(0)),cljs.core._nth(entry__4508__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4507__auto____$1,entry__4508__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4546__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4546__auto__,writer__4547__auto__){
return cljs.core._write(writer__4547__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__35716){
var extmap__4542__auto__ = (function (){var G__35770 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__35716,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__35716)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__35770);
} else {
return G__35770;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__35716),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__35716),null,cljs.core.not_empty(extmap__4542__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4502__auto__,k__4503__auto__){
var self__ = this;
var this__4502__auto____$1 = this;
return this__4502__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4503__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4504__auto__,k35783,else__4505__auto__){
var self__ = this;
var this__4504__auto____$1 = this;
var G__35799 = k35783;
var G__35799__$1 = (((G__35799 instanceof cljs.core.Keyword))?G__35799.fqn:null);
switch (G__35799__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k35783,else__4505__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4522__auto__,f__4523__auto__,init__4524__auto__){
var self__ = this;
var this__4522__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4525__auto__,p__35804){
var vec__35806 = p__35804;
var k__4526__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35806,(0),null);
var v__4527__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35806,(1),null);
return (f__4523__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4523__auto__.cljs$core$IFn$_invoke$arity$3(ret__4525__auto__,k__4526__auto__,v__4527__auto__) : f__4523__auto__.call(null,ret__4525__auto__,k__4526__auto__,v__4527__auto__));
}),init__4524__auto__,this__4522__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4517__auto__,writer__4518__auto__,opts__4519__auto__){
var self__ = this;
var this__4517__auto____$1 = this;
var pr_pair__4520__auto__ = (function (keyval__4521__auto__){
return cljs.core.pr_sequential_writer(writer__4518__auto__,cljs.core.pr_writer,""," ","",opts__4519__auto__,keyval__4521__auto__);
});
return cljs.core.pr_sequential_writer(writer__4518__auto__,pr_pair__4520__auto__,"#shadow.dom.Size{",", ","}",opts__4519__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__35782){
var self__ = this;
var G__35782__$1 = this;
return (new cljs.core.RecordIter((0),G__35782__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4500__auto__){
var self__ = this;
var this__4500__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4497__auto__){
var self__ = this;
var this__4497__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4506__auto__){
var self__ = this;
var this__4506__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4498__auto__){
var self__ = this;
var this__4498__auto____$1 = this;
var h__4360__auto__ = self__.__hash;
if((!((h__4360__auto__ == null)))){
return h__4360__auto__;
} else {
var h__4360__auto____$1 = (function (coll__4499__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4499__auto__));
})(this__4498__auto____$1);
(self__.__hash = h__4360__auto____$1);

return h__4360__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this35785,other35786){
var self__ = this;
var this35785__$1 = this;
return (((!((other35786 == null)))) && ((((this35785__$1.constructor === other35786.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35785__$1.w,other35786.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35785__$1.h,other35786.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35785__$1.__extmap,other35786.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4512__auto__,k__4513__auto__){
var self__ = this;
var this__4512__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4513__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4512__auto____$1),self__.__meta),k__4513__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4513__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4509__auto__,k35783){
var self__ = this;
var this__4509__auto____$1 = this;
var G__35838 = k35783;
var G__35838__$1 = (((G__35838 instanceof cljs.core.Keyword))?G__35838.fqn:null);
switch (G__35838__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k35783);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4510__auto__,k__4511__auto__,G__35782){
var self__ = this;
var this__4510__auto____$1 = this;
var pred__35843 = cljs.core.keyword_identical_QMARK_;
var expr__35844 = k__4511__auto__;
if(cljs.core.truth_((pred__35843.cljs$core$IFn$_invoke$arity$2 ? pred__35843.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__35844) : pred__35843.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__35844)))){
return (new shadow.dom.Size(G__35782,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__35843.cljs$core$IFn$_invoke$arity$2 ? pred__35843.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__35844) : pred__35843.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__35844)))){
return (new shadow.dom.Size(self__.w,G__35782,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4511__auto__,G__35782),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4515__auto__){
var self__ = this;
var this__4515__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4501__auto__,G__35782){
var self__ = this;
var this__4501__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__35782,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4507__auto__,entry__4508__auto__){
var self__ = this;
var this__4507__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4508__auto__)){
return this__4507__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4508__auto__,(0)),cljs.core._nth(entry__4508__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4507__auto____$1,entry__4508__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4546__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4546__auto__,writer__4547__auto__){
return cljs.core._write(writer__4547__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__35790){
var extmap__4542__auto__ = (function (){var G__35865 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__35790,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__35790)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__35865);
} else {
return G__35865;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__35790),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__35790),null,cljs.core.not_empty(extmap__4542__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4738__auto__ = opts;
var l__4739__auto__ = a__4738__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4739__auto__)){
var G__36527 = (i + (1));
var G__36528 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__36527;
ret = G__36528;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__35895){
var vec__35898 = p__35895;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35898,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35898,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__35909 = arguments.length;
switch (G__35909) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5751__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5751__auto__)){
var child = temp__5751__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__36531 = ps;
var G__36532 = (i + (1));
el__$1 = G__36531;
i = G__36532;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__35957 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35957,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35957,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35957,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__35968_36538 = cljs.core.seq(props);
var chunk__35970_36539 = null;
var count__35971_36540 = (0);
var i__35972_36541 = (0);
while(true){
if((i__35972_36541 < count__35971_36540)){
var vec__35988_36542 = chunk__35970_36539.cljs$core$IIndexed$_nth$arity$2(null,i__35972_36541);
var k_36543 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35988_36542,(0),null);
var v_36544 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35988_36542,(1),null);
el.setAttributeNS((function (){var temp__5753__auto__ = cljs.core.namespace(k_36543);
if(cljs.core.truth_(temp__5753__auto__)){
var ns = temp__5753__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_36543),v_36544);


var G__36545 = seq__35968_36538;
var G__36546 = chunk__35970_36539;
var G__36547 = count__35971_36540;
var G__36548 = (i__35972_36541 + (1));
seq__35968_36538 = G__36545;
chunk__35970_36539 = G__36546;
count__35971_36540 = G__36547;
i__35972_36541 = G__36548;
continue;
} else {
var temp__5753__auto___36549 = cljs.core.seq(seq__35968_36538);
if(temp__5753__auto___36549){
var seq__35968_36550__$1 = temp__5753__auto___36549;
if(cljs.core.chunked_seq_QMARK_(seq__35968_36550__$1)){
var c__4679__auto___36551 = cljs.core.chunk_first(seq__35968_36550__$1);
var G__36552 = cljs.core.chunk_rest(seq__35968_36550__$1);
var G__36553 = c__4679__auto___36551;
var G__36554 = cljs.core.count(c__4679__auto___36551);
var G__36555 = (0);
seq__35968_36538 = G__36552;
chunk__35970_36539 = G__36553;
count__35971_36540 = G__36554;
i__35972_36541 = G__36555;
continue;
} else {
var vec__35991_36556 = cljs.core.first(seq__35968_36550__$1);
var k_36557 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35991_36556,(0),null);
var v_36558 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35991_36556,(1),null);
el.setAttributeNS((function (){var temp__5753__auto____$1 = cljs.core.namespace(k_36557);
if(cljs.core.truth_(temp__5753__auto____$1)){
var ns = temp__5753__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_36557),v_36558);


var G__36559 = cljs.core.next(seq__35968_36550__$1);
var G__36560 = null;
var G__36561 = (0);
var G__36562 = (0);
seq__35968_36538 = G__36559;
chunk__35970_36539 = G__36560;
count__35971_36540 = G__36561;
i__35972_36541 = G__36562;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__35999 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35999,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35999,(1),null);
var seq__36002_36564 = cljs.core.seq(node_children);
var chunk__36005_36565 = null;
var count__36006_36566 = (0);
var i__36007_36567 = (0);
while(true){
if((i__36007_36567 < count__36006_36566)){
var child_struct_36568 = chunk__36005_36565.cljs$core$IIndexed$_nth$arity$2(null,i__36007_36567);
if((!((child_struct_36568 == null)))){
if(typeof child_struct_36568 === 'string'){
var text_36572 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_36572),child_struct_36568].join(''));
} else {
var children_36573 = shadow.dom.svg_node(child_struct_36568);
if(cljs.core.seq_QMARK_(children_36573)){
var seq__36047_36574 = cljs.core.seq(children_36573);
var chunk__36049_36575 = null;
var count__36050_36576 = (0);
var i__36051_36577 = (0);
while(true){
if((i__36051_36577 < count__36050_36576)){
var child_36578 = chunk__36049_36575.cljs$core$IIndexed$_nth$arity$2(null,i__36051_36577);
if(cljs.core.truth_(child_36578)){
node.appendChild(child_36578);


var G__36579 = seq__36047_36574;
var G__36580 = chunk__36049_36575;
var G__36581 = count__36050_36576;
var G__36582 = (i__36051_36577 + (1));
seq__36047_36574 = G__36579;
chunk__36049_36575 = G__36580;
count__36050_36576 = G__36581;
i__36051_36577 = G__36582;
continue;
} else {
var G__36583 = seq__36047_36574;
var G__36584 = chunk__36049_36575;
var G__36585 = count__36050_36576;
var G__36586 = (i__36051_36577 + (1));
seq__36047_36574 = G__36583;
chunk__36049_36575 = G__36584;
count__36050_36576 = G__36585;
i__36051_36577 = G__36586;
continue;
}
} else {
var temp__5753__auto___36587 = cljs.core.seq(seq__36047_36574);
if(temp__5753__auto___36587){
var seq__36047_36588__$1 = temp__5753__auto___36587;
if(cljs.core.chunked_seq_QMARK_(seq__36047_36588__$1)){
var c__4679__auto___36589 = cljs.core.chunk_first(seq__36047_36588__$1);
var G__36590 = cljs.core.chunk_rest(seq__36047_36588__$1);
var G__36591 = c__4679__auto___36589;
var G__36592 = cljs.core.count(c__4679__auto___36589);
var G__36593 = (0);
seq__36047_36574 = G__36590;
chunk__36049_36575 = G__36591;
count__36050_36576 = G__36592;
i__36051_36577 = G__36593;
continue;
} else {
var child_36594 = cljs.core.first(seq__36047_36588__$1);
if(cljs.core.truth_(child_36594)){
node.appendChild(child_36594);


var G__36595 = cljs.core.next(seq__36047_36588__$1);
var G__36596 = null;
var G__36597 = (0);
var G__36598 = (0);
seq__36047_36574 = G__36595;
chunk__36049_36575 = G__36596;
count__36050_36576 = G__36597;
i__36051_36577 = G__36598;
continue;
} else {
var G__36599 = cljs.core.next(seq__36047_36588__$1);
var G__36600 = null;
var G__36601 = (0);
var G__36602 = (0);
seq__36047_36574 = G__36599;
chunk__36049_36575 = G__36600;
count__36050_36576 = G__36601;
i__36051_36577 = G__36602;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_36573);
}
}


var G__36603 = seq__36002_36564;
var G__36604 = chunk__36005_36565;
var G__36605 = count__36006_36566;
var G__36606 = (i__36007_36567 + (1));
seq__36002_36564 = G__36603;
chunk__36005_36565 = G__36604;
count__36006_36566 = G__36605;
i__36007_36567 = G__36606;
continue;
} else {
var G__36607 = seq__36002_36564;
var G__36608 = chunk__36005_36565;
var G__36609 = count__36006_36566;
var G__36610 = (i__36007_36567 + (1));
seq__36002_36564 = G__36607;
chunk__36005_36565 = G__36608;
count__36006_36566 = G__36609;
i__36007_36567 = G__36610;
continue;
}
} else {
var temp__5753__auto___36611 = cljs.core.seq(seq__36002_36564);
if(temp__5753__auto___36611){
var seq__36002_36612__$1 = temp__5753__auto___36611;
if(cljs.core.chunked_seq_QMARK_(seq__36002_36612__$1)){
var c__4679__auto___36613 = cljs.core.chunk_first(seq__36002_36612__$1);
var G__36614 = cljs.core.chunk_rest(seq__36002_36612__$1);
var G__36615 = c__4679__auto___36613;
var G__36616 = cljs.core.count(c__4679__auto___36613);
var G__36617 = (0);
seq__36002_36564 = G__36614;
chunk__36005_36565 = G__36615;
count__36006_36566 = G__36616;
i__36007_36567 = G__36617;
continue;
} else {
var child_struct_36618 = cljs.core.first(seq__36002_36612__$1);
if((!((child_struct_36618 == null)))){
if(typeof child_struct_36618 === 'string'){
var text_36619 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_36619),child_struct_36618].join(''));
} else {
var children_36620 = shadow.dom.svg_node(child_struct_36618);
if(cljs.core.seq_QMARK_(children_36620)){
var seq__36079_36621 = cljs.core.seq(children_36620);
var chunk__36081_36622 = null;
var count__36082_36623 = (0);
var i__36083_36624 = (0);
while(true){
if((i__36083_36624 < count__36082_36623)){
var child_36625 = chunk__36081_36622.cljs$core$IIndexed$_nth$arity$2(null,i__36083_36624);
if(cljs.core.truth_(child_36625)){
node.appendChild(child_36625);


var G__36628 = seq__36079_36621;
var G__36629 = chunk__36081_36622;
var G__36630 = count__36082_36623;
var G__36631 = (i__36083_36624 + (1));
seq__36079_36621 = G__36628;
chunk__36081_36622 = G__36629;
count__36082_36623 = G__36630;
i__36083_36624 = G__36631;
continue;
} else {
var G__36632 = seq__36079_36621;
var G__36633 = chunk__36081_36622;
var G__36634 = count__36082_36623;
var G__36635 = (i__36083_36624 + (1));
seq__36079_36621 = G__36632;
chunk__36081_36622 = G__36633;
count__36082_36623 = G__36634;
i__36083_36624 = G__36635;
continue;
}
} else {
var temp__5753__auto___36636__$1 = cljs.core.seq(seq__36079_36621);
if(temp__5753__auto___36636__$1){
var seq__36079_36637__$1 = temp__5753__auto___36636__$1;
if(cljs.core.chunked_seq_QMARK_(seq__36079_36637__$1)){
var c__4679__auto___36638 = cljs.core.chunk_first(seq__36079_36637__$1);
var G__36639 = cljs.core.chunk_rest(seq__36079_36637__$1);
var G__36640 = c__4679__auto___36638;
var G__36641 = cljs.core.count(c__4679__auto___36638);
var G__36642 = (0);
seq__36079_36621 = G__36639;
chunk__36081_36622 = G__36640;
count__36082_36623 = G__36641;
i__36083_36624 = G__36642;
continue;
} else {
var child_36643 = cljs.core.first(seq__36079_36637__$1);
if(cljs.core.truth_(child_36643)){
node.appendChild(child_36643);


var G__36644 = cljs.core.next(seq__36079_36637__$1);
var G__36645 = null;
var G__36646 = (0);
var G__36647 = (0);
seq__36079_36621 = G__36644;
chunk__36081_36622 = G__36645;
count__36082_36623 = G__36646;
i__36083_36624 = G__36647;
continue;
} else {
var G__36649 = cljs.core.next(seq__36079_36637__$1);
var G__36650 = null;
var G__36651 = (0);
var G__36652 = (0);
seq__36079_36621 = G__36649;
chunk__36081_36622 = G__36650;
count__36082_36623 = G__36651;
i__36083_36624 = G__36652;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_36620);
}
}


var G__36654 = cljs.core.next(seq__36002_36612__$1);
var G__36655 = null;
var G__36656 = (0);
var G__36657 = (0);
seq__36002_36564 = G__36654;
chunk__36005_36565 = G__36655;
count__36006_36566 = G__36656;
i__36007_36567 = G__36657;
continue;
} else {
var G__36658 = cljs.core.next(seq__36002_36612__$1);
var G__36659 = null;
var G__36660 = (0);
var G__36661 = (0);
seq__36002_36564 = G__36658;
chunk__36005_36565 = G__36659;
count__36006_36566 = G__36660;
i__36007_36567 = G__36661;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4870__auto__ = [];
var len__4864__auto___36663 = arguments.length;
var i__4865__auto___36664 = (0);
while(true){
if((i__4865__auto___36664 < len__4864__auto___36663)){
args__4870__auto__.push((arguments[i__4865__auto___36664]));

var G__36665 = (i__4865__auto___36664 + (1));
i__4865__auto___36664 = G__36665;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq36108){
var G__36109 = cljs.core.first(seq36108);
var seq36108__$1 = cljs.core.next(seq36108);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36109,seq36108__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__36123 = arguments.length;
switch (G__36123) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__4251__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4251__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4251__auto__;
}
})())){
var c__32622__auto___36680 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32623__auto__ = (function (){var switch__32103__auto__ = (function (state_36133){
var state_val_36134 = (state_36133[(1)]);
if((state_val_36134 === (1))){
var state_36133__$1 = state_36133;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36133__$1,(2),once_or_cleanup);
} else {
if((state_val_36134 === (2))){
var inst_36130 = (state_36133[(2)]);
var inst_36131 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_36133__$1 = (function (){var statearr_36135 = state_36133;
(statearr_36135[(7)] = inst_36130);

return statearr_36135;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_36133__$1,inst_36131);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__32104__auto__ = null;
var shadow$dom$state_machine__32104__auto____0 = (function (){
var statearr_36136 = [null,null,null,null,null,null,null,null];
(statearr_36136[(0)] = shadow$dom$state_machine__32104__auto__);

(statearr_36136[(1)] = (1));

return statearr_36136;
});
var shadow$dom$state_machine__32104__auto____1 = (function (state_36133){
while(true){
var ret_value__32105__auto__ = (function (){try{while(true){
var result__32106__auto__ = switch__32103__auto__(state_36133);
if(cljs.core.keyword_identical_QMARK_(result__32106__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32106__auto__;
}
break;
}
}catch (e36137){var ex__32107__auto__ = e36137;
var statearr_36138_36683 = state_36133;
(statearr_36138_36683[(2)] = ex__32107__auto__);


if(cljs.core.seq((state_36133[(4)]))){
var statearr_36139_36684 = state_36133;
(statearr_36139_36684[(1)] = cljs.core.first((state_36133[(4)])));

} else {
throw ex__32107__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32105__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36685 = state_36133;
state_36133 = G__36685;
continue;
} else {
return ret_value__32105__auto__;
}
break;
}
});
shadow$dom$state_machine__32104__auto__ = function(state_36133){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__32104__auto____0.call(this);
case 1:
return shadow$dom$state_machine__32104__auto____1.call(this,state_36133);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__32104__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__32104__auto____0;
shadow$dom$state_machine__32104__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__32104__auto____1;
return shadow$dom$state_machine__32104__auto__;
})()
})();
var state__32624__auto__ = (function (){var statearr_36140 = f__32623__auto__();
(statearr_36140[(6)] = c__32622__auto___36680);

return statearr_36140;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32624__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
