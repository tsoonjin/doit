goog.provide('reagent.debug');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__36489__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__36489 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__36495__i = 0, G__36495__a = new Array(arguments.length -  0);
while (G__36495__i < G__36495__a.length) {G__36495__a[G__36495__i] = arguments[G__36495__i + 0]; ++G__36495__i;}
  args = new cljs.core.IndexedSeq(G__36495__a,0,null);
} 
return G__36489__delegate.call(this,args);};
G__36489.cljs$lang$maxFixedArity = 0;
G__36489.cljs$lang$applyTo = (function (arglist__36496){
var args = cljs.core.seq(arglist__36496);
return G__36489__delegate(args);
});
G__36489.cljs$core$IFn$_invoke$arity$variadic = G__36489__delegate;
return G__36489;
})()
);

(o.error = (function() { 
var G__36497__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__36497 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__36498__i = 0, G__36498__a = new Array(arguments.length -  0);
while (G__36498__i < G__36498__a.length) {G__36498__a[G__36498__i] = arguments[G__36498__i + 0]; ++G__36498__i;}
  args = new cljs.core.IndexedSeq(G__36498__a,0,null);
} 
return G__36497__delegate.call(this,args);};
G__36497.cljs$lang$maxFixedArity = 0;
G__36497.cljs$lang$applyTo = (function (arglist__36499){
var args = cljs.core.seq(arglist__36499);
return G__36497__delegate(args);
});
G__36497.cljs$core$IFn$_invoke$arity$variadic = G__36497__delegate;
return G__36497;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=reagent.debug.js.map
