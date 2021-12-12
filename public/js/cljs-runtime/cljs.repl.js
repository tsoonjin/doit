goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__35102){
var map__35104 = p__35102;
var map__35104__$1 = cljs.core.__destructure_map(map__35104);
var m = map__35104__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35104__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35104__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4253__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return [(function (){var temp__5753__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5753__auto__)){
var ns = temp__5753__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__35114_35476 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__35115_35477 = null;
var count__35116_35478 = (0);
var i__35117_35479 = (0);
while(true){
if((i__35117_35479 < count__35116_35478)){
var f_35482 = chunk__35115_35477.cljs$core$IIndexed$_nth$arity$2(null,i__35117_35479);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_35482], 0));


var G__35483 = seq__35114_35476;
var G__35484 = chunk__35115_35477;
var G__35485 = count__35116_35478;
var G__35486 = (i__35117_35479 + (1));
seq__35114_35476 = G__35483;
chunk__35115_35477 = G__35484;
count__35116_35478 = G__35485;
i__35117_35479 = G__35486;
continue;
} else {
var temp__5753__auto___35487 = cljs.core.seq(seq__35114_35476);
if(temp__5753__auto___35487){
var seq__35114_35489__$1 = temp__5753__auto___35487;
if(cljs.core.chunked_seq_QMARK_(seq__35114_35489__$1)){
var c__4679__auto___35490 = cljs.core.chunk_first(seq__35114_35489__$1);
var G__35492 = cljs.core.chunk_rest(seq__35114_35489__$1);
var G__35493 = c__4679__auto___35490;
var G__35494 = cljs.core.count(c__4679__auto___35490);
var G__35495 = (0);
seq__35114_35476 = G__35492;
chunk__35115_35477 = G__35493;
count__35116_35478 = G__35494;
i__35117_35479 = G__35495;
continue;
} else {
var f_35497 = cljs.core.first(seq__35114_35489__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_35497], 0));


var G__35498 = cljs.core.next(seq__35114_35489__$1);
var G__35499 = null;
var G__35500 = (0);
var G__35501 = (0);
seq__35114_35476 = G__35498;
chunk__35115_35477 = G__35499;
count__35116_35478 = G__35500;
i__35117_35479 = G__35501;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_35503 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4253__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_35503], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_35503)))?cljs.core.second(arglists_35503):arglists_35503)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__35132_35509 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__35133_35510 = null;
var count__35134_35511 = (0);
var i__35135_35512 = (0);
while(true){
if((i__35135_35512 < count__35134_35511)){
var vec__35151_35514 = chunk__35133_35510.cljs$core$IIndexed$_nth$arity$2(null,i__35135_35512);
var name_35515 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35151_35514,(0),null);
var map__35154_35516 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35151_35514,(1),null);
var map__35154_35517__$1 = cljs.core.__destructure_map(map__35154_35516);
var doc_35518 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35154_35517__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_35519 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35154_35517__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_35515], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_35519], 0));

if(cljs.core.truth_(doc_35518)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_35518], 0));
} else {
}


var G__35523 = seq__35132_35509;
var G__35524 = chunk__35133_35510;
var G__35525 = count__35134_35511;
var G__35526 = (i__35135_35512 + (1));
seq__35132_35509 = G__35523;
chunk__35133_35510 = G__35524;
count__35134_35511 = G__35525;
i__35135_35512 = G__35526;
continue;
} else {
var temp__5753__auto___35527 = cljs.core.seq(seq__35132_35509);
if(temp__5753__auto___35527){
var seq__35132_35528__$1 = temp__5753__auto___35527;
if(cljs.core.chunked_seq_QMARK_(seq__35132_35528__$1)){
var c__4679__auto___35529 = cljs.core.chunk_first(seq__35132_35528__$1);
var G__35530 = cljs.core.chunk_rest(seq__35132_35528__$1);
var G__35531 = c__4679__auto___35529;
var G__35532 = cljs.core.count(c__4679__auto___35529);
var G__35533 = (0);
seq__35132_35509 = G__35530;
chunk__35133_35510 = G__35531;
count__35134_35511 = G__35532;
i__35135_35512 = G__35533;
continue;
} else {
var vec__35167_35535 = cljs.core.first(seq__35132_35528__$1);
var name_35536 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35167_35535,(0),null);
var map__35170_35537 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35167_35535,(1),null);
var map__35170_35538__$1 = cljs.core.__destructure_map(map__35170_35537);
var doc_35539 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35170_35538__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_35540 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35170_35538__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_35536], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_35540], 0));

if(cljs.core.truth_(doc_35539)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_35539], 0));
} else {
}


var G__35543 = cljs.core.next(seq__35132_35528__$1);
var G__35544 = null;
var G__35545 = (0);
var G__35546 = (0);
seq__35132_35509 = G__35543;
chunk__35133_35510 = G__35544;
count__35134_35511 = G__35545;
i__35135_35512 = G__35546;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5753__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5753__auto__)){
var fnspec = temp__5753__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__35175 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__35176 = null;
var count__35177 = (0);
var i__35178 = (0);
while(true){
if((i__35178 < count__35177)){
var role = chunk__35176.cljs$core$IIndexed$_nth$arity$2(null,i__35178);
var temp__5753__auto___35547__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___35547__$1)){
var spec_35549 = temp__5753__auto___35547__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_35549)], 0));
} else {
}


var G__35551 = seq__35175;
var G__35552 = chunk__35176;
var G__35553 = count__35177;
var G__35554 = (i__35178 + (1));
seq__35175 = G__35551;
chunk__35176 = G__35552;
count__35177 = G__35553;
i__35178 = G__35554;
continue;
} else {
var temp__5753__auto____$1 = cljs.core.seq(seq__35175);
if(temp__5753__auto____$1){
var seq__35175__$1 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__35175__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__35175__$1);
var G__35556 = cljs.core.chunk_rest(seq__35175__$1);
var G__35557 = c__4679__auto__;
var G__35558 = cljs.core.count(c__4679__auto__);
var G__35559 = (0);
seq__35175 = G__35556;
chunk__35176 = G__35557;
count__35177 = G__35558;
i__35178 = G__35559;
continue;
} else {
var role = cljs.core.first(seq__35175__$1);
var temp__5753__auto___35560__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___35560__$2)){
var spec_35561 = temp__5753__auto___35560__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_35561)], 0));
} else {
}


var G__35562 = cljs.core.next(seq__35175__$1);
var G__35563 = null;
var G__35564 = (0);
var G__35565 = (0);
seq__35175 = G__35562;
chunk__35176 = G__35563;
count__35177 = G__35564;
i__35178 = G__35565;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol("cljs.core","ExceptionInfo","cljs.core/ExceptionInfo",701839050,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5753__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5753__auto__)){
var msg = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5753__auto__)){
var ed = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__35571 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__35572 = cljs.core.ex_cause(t);
via = G__35571;
t = G__35572;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5753__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5753__auto__)){
var root_msg = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5753__auto__)){
var data = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5753__auto__)){
var phase = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__35315 = datafied_throwable;
var map__35315__$1 = cljs.core.__destructure_map(map__35315);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35315__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35315__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__35315__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__35316 = cljs.core.last(via);
var map__35316__$1 = cljs.core.__destructure_map(map__35316);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35316__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35316__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35316__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__35321 = data;
var map__35321__$1 = cljs.core.__destructure_map(map__35321);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35321__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35321__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35321__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__35322 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__35322__$1 = cljs.core.__destructure_map(map__35322);
var top_data = map__35322__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35322__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__35345 = phase;
var G__35345__$1 = (((G__35345 instanceof cljs.core.Keyword))?G__35345.fqn:null);
switch (G__35345__$1) {
case "read-source":
var map__35348 = data;
var map__35348__$1 = cljs.core.__destructure_map(map__35348);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35348__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35348__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__35361 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__35361__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35361,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__35361);
var G__35361__$2 = (cljs.core.truth_((function (){var fexpr__35362 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__35362.cljs$core$IFn$_invoke$arity$1 ? fexpr__35362.cljs$core$IFn$_invoke$arity$1(source) : fexpr__35362.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__35361__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__35361__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35361__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__35361__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__35365 = top_data;
var G__35365__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35365,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__35365);
var G__35365__$2 = (cljs.core.truth_((function (){var fexpr__35367 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__35367.cljs$core$IFn$_invoke$arity$1 ? fexpr__35367.cljs$core$IFn$_invoke$arity$1(source) : fexpr__35367.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__35365__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__35365__$1);
var G__35365__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35365__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__35365__$2);
var G__35365__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35365__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__35365__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35365__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__35365__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__35370 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35370,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35370,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35370,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35370,(3),null);
var G__35374 = top_data;
var G__35374__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35374,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__35374);
var G__35374__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35374__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__35374__$1);
var G__35374__$3 = (cljs.core.truth_((function (){var and__4251__auto__ = source__$1;
if(cljs.core.truth_(and__4251__auto__)){
return method;
} else {
return and__4251__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35374__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__35374__$2);
var G__35374__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35374__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__35374__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35374__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__35374__$4;
}

break;
case "execution":
var vec__35378 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35378,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35378,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35378,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35378,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__35306_SHARP_){
var or__4253__auto__ = (p1__35306_SHARP_ == null);
if(or__4253__auto__){
return or__4253__auto__;
} else {
var fexpr__35389 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__35389.cljs$core$IFn$_invoke$arity$1 ? fexpr__35389.cljs$core$IFn$_invoke$arity$1(p1__35306_SHARP_) : fexpr__35389.call(null,p1__35306_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4253__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return line;
}
})();
var G__35390 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__35390__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35390,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__35390);
var G__35390__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35390__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__35390__$1);
var G__35390__$3 = (cljs.core.truth_((function (){var or__4253__auto__ = fn;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var and__4251__auto__ = source__$1;
if(cljs.core.truth_(and__4251__auto__)){
return method;
} else {
return and__4251__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35390__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4253__auto__ = fn;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__35390__$2);
var G__35390__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35390__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__35390__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35390__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__35390__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__35345__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__35402){
var map__35403 = p__35402;
var map__35403__$1 = cljs.core.__destructure_map(map__35403);
var triage_data = map__35403__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35403__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35403__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35403__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35403__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35403__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35403__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35403__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35403__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4253__auto__ = source;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4253__auto__ = line;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4253__auto__ = class$;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__35405 = phase;
var G__35405__$1 = (((G__35405 instanceof cljs.core.Keyword))?G__35405.fqn:null);
switch (G__35405__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__35406 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__35407 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__35408 = loc;
var G__35409 = (cljs.core.truth_(spec)?(function (){var sb__4795__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__35410_35614 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__35411_35615 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__35412_35616 = true;
var _STAR_print_fn_STAR__temp_val__35413_35617 = (function (x__4796__auto__){
return sb__4795__auto__.append(x__4796__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__35412_35616);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__35413_35617);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__35400_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__35400_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__35411_35615);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__35410_35614);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4795__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__35406,G__35407,G__35408,G__35409) : format.call(null,G__35406,G__35407,G__35408,G__35409));

break;
case "macroexpansion":
var G__35416 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__35417 = cause_type;
var G__35418 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__35419 = loc;
var G__35420 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__35416,G__35417,G__35418,G__35419,G__35420) : format.call(null,G__35416,G__35417,G__35418,G__35419,G__35420));

break;
case "compile-syntax-check":
var G__35431 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__35432 = cause_type;
var G__35433 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__35434 = loc;
var G__35435 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__35431,G__35432,G__35433,G__35434,G__35435) : format.call(null,G__35431,G__35432,G__35433,G__35434,G__35435));

break;
case "compilation":
var G__35436 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__35437 = cause_type;
var G__35438 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__35439 = loc;
var G__35440 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__35436,G__35437,G__35438,G__35439,G__35440) : format.call(null,G__35436,G__35437,G__35438,G__35439,G__35440));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__35442 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__35443 = symbol;
var G__35444 = loc;
var G__35445 = (function (){var sb__4795__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__35451_35639 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__35452_35640 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__35453_35641 = true;
var _STAR_print_fn_STAR__temp_val__35454_35642 = (function (x__4796__auto__){
return sb__4795__auto__.append(x__4796__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__35453_35641);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__35454_35642);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__35401_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__35401_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__35452_35640);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__35451_35639);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4795__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__35442,G__35443,G__35444,G__35445) : format.call(null,G__35442,G__35443,G__35444,G__35445));
} else {
var G__35460 = "Execution error%s at %s(%s).\n%s\n";
var G__35461 = cause_type;
var G__35462 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__35463 = loc;
var G__35464 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__35460,G__35461,G__35462,G__35463,G__35464) : format.call(null,G__35460,G__35461,G__35462,G__35463,G__35464));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__35405__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
